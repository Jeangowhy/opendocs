

/STM32 Nucleo-64 boards (MB1136) User manual
============================================
- https://www.st.com/zh/evaluation-tools/nucleo-f411re.html
- STM32 Nucleo-64 F411RE Reference Manual https://www.st.com/resource/en/user_manual/um1724-stm32-nucleo64-boards-mb1136-stmicroelectronics.pdf



<!-- *P1*/68 -->
[P1]: #P1
<a id="P1"/>

                                                                         UM1724 
                                                                    User manual 
                                                STM32 Nucleo-64 boards (MB1136) 
                                                      August 2020 UM1724 Rev 14 

/Introduction
=============

The STM32 Nucleo-64 boards based on the MB1136 reference board (NUCLEO-F030R8,
NUCLEO-F070RB, NUCLEO-F072RB, NUCLEO-F091RC, NUCLEO-F103RB,
NUCLEO-F302R8, NUCLEO-F303RE, NUCLEO-F334R8, NUCLEO-F401RE,
NUCLEO-F410RB, NUCLEO-F411RE, NUCLEO-F446RE, NUCLEO-L010RB,
NUCLEO-L053R8, NUCLEO-L073RZ, NUCLEO-L152RE , NUCLEO-L452RE,
NUCLEO-L476RG ) provide an affordable and flexible way for users to try out new concepts
and build prototypes with the STM32 microcontrollers in the LQFP64 package, choosing
from the various combinations of performance, power consumption, and features. The
ARDUINO® Uno V3 connectivity support and the ST morpho headers provide an easy
means of expanding the functionality of the Nucleo open development platform with a wide
choice of specialized shields. The STM32 Nucleo boards do not require any separate probe
as they integrate the ST-LINK/V2-1 debugger and programmer. The STM32 Nucleo boards
come with the comprehensive free software libraries and examples available with the
STM32Cube MCU Packages, as well as direct access to the Arm® Mbed ™ online resources
at http://mbed.org/ .


[Figure 1]: #Figure-1
<a id="Figure-1" />

**Figure 1**. STM32 Nucleo-64 board

<!-- ![STM32 Nucleo Board](https://www.st.com/bin/ecommerce/api/image.PF260320.en.feature-description-include-personalized-no-cpn-large.jpg) -->
![STM32 Nucleo-64](https://docs.zephyrproject.org/latest/_images/nucleo_f411re.jpg)

Picture is not contractual.

/Content
========

<!-- *P2*/68 -->
[P2]: #P2
<a id="P2"/>

* 1 Features  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [P6]
* 2 Ordering information  - - - - - - - - - - - - - - - - - - - - - - - - [P7]
*   2.1 Codification  - - - - - - - - - - - - - - - - - - - - - - - - - - - [P8]
* 3 Development environment - - - - - - - - - - - - - - - - - - - - - - - [P9]
*   3.1 System requirements - - - - - - - - - - - - - - - - - - - - - - - - [P9]
*   3.2 Development toolchains  - - - - - - - - - - - - - - - - - - - - - - [P9]
*   3.3 Demonstration software  - - - - - - - - - - - - - - - - - - - - - - [P9]
* 4 Conventions - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [P9]
* 5 Quick start - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [P10]
*   5.1 Getting started - - - - - - - - - - - - - - - - - - - - - - - - - - [P10]
*   5.2 NUCLEO-L476RG bootloader limitations  - - - - - - - - - - - - - - - [P10]
*   5.3 Hardware configuration variants - - - - - - - - - - - - - - - - - - [P11]
* 6 Hardware layout and configuration - - - - - - - - - - - - - - - - - - [P12]
*   6.1 Pre-cut PCB - - - - - - - - - - - - - - - - - - - - - - - - - - - - [P16]
*   6.2 Embedded ST-LINK/V2-1 - - - - - - - - - - - - - - - - - - - - - - - [P16]
*   6.2.1 Driver  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [P17]
*   6.2.2 ST-LINK/V2-1 firmware upgrade - - - - - - - - - - - - - - - - - - [P17]
*   6.2.3 Using the ST-LINK/V2-1 to program and debug the STM32 on board  - [P18]
*   6.2.4 Using ST-LINK/V2-1 to program and debug an external STM32 application [P18]
*   6.3 Power supply and power selection  - - - - - - - - - - - - - - - - - [P20]
*   6.3.1 Power supply input from the USB connector - - - - - - - - - - - - [P20]
*   6.3.2 External power supply inputs: VIN and E5V - - - - - - - - - - - - [P21]
*   6.3.3 External power supply input: +3.3V  - - - - - - - - - - - - - - - [P22]
*   6.3.4 External power supply output  - - - - - - - - - - - - - - - - - - [P22]
*   6.4 LEDs  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [P23]
*   6.5 Push-buttons  - - - - - - - - - - - - - - - - - - - - - - - - - - - [P23]
*   6.6 JP6 (IDD) - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [P23]

<!-- *P3*/68 -->
[P3]: #P3
<a id="P3"/>

*   6.7 OSC clock - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [P24]
*   6.7.1 OSC clock supply  - - - - - - - - - - - - - - - - - - - - - - - - [P24]
*   6.7.2 OSC 32 kHz clock supply - - - - - - - - - - - - - - - - - - - - - [P25]
*   6.8 USART communication - - - - - - - - - - - - - - - - - - - - - - - - [P25]
*   6.9 Solder bridges  - - - - - - - - - - - - - - - - - - - - - - - - - - [P26]
*   6.10 Extension connectors - - - - - - - - - - - - - - - - - - - - - - - [P27]
*   6.11 ARDUINO® connectors - - - - - - - - - - - - - - - - - - - - - - - [P37]
*   6.12 ST morpho connector  - - - - - - - - - - - - - - - - - - - - - - - [P53]
* 7 Nucleo-64 boards information  - - - - - - - - - - - - - - - - - - - - [P63]
*   7.1 Product marking - - - - - - - - - - - - - - - - - - - - - - - - - - [P63]
*   7.2 Board revision history  - - - - - - - - - - - - - - - - - - - - - - [P64]
*   7.3 Board known limitations - - - - - - - - - - - - - - - - - - - - - - [P64]
* Revision history  - - - - - - - - - - - - - - - - - - - - - - - - - - - [P65]

<!-- *P4*/68 -->
[P4]: #P4
<a id="P4"/>

/List of Tables
===============

*   [Table 1]. Ordering information - - - - - - - - - - - - - - - - - - - - - [P7]
*   [Table 2]. Codification explanation - - - - - - - - - - - - - - - - - - - [P8]
*   [Table 3]. ON/OFF conventions - - - - - - - - - - - - - - - - - - - - - - [P9]
*   [Table 4]. Jumper states  - - - - - - - - - - - - - - - - - - - - - - - - [P16]
*   [Table 5]. Debug connector CN4 (SWD)  - - - - - - - - - - - - - - - - - - [P19]
*   [Table 6]. JP1 configuration table  - - - - - - - - - - - - - - - - - - - [P20]
*   [Table 7]. External power sources - - - - - - - - - - - - - - - - - - - - [P21]
*   [Table 8]. Power-related jumper - - - - - - - - - - - - - - - - - - - - - [P21]
*   [Table 9]. +3.3 V external power source - - - - - - - - - - - - - - - - - [P22]
*   [Table 10]. Solder bridges  - - - - - - - - - - - - - - - - - - - - - - - [P26]
*   [Table 11]. ARDUINO® connectors on NUCLEO-F030R8, NUCLEO-F070RB, NUCLEO-F072RB, NUCLEO-F091RC [P37]
*   [Table 12]. ARDUINO® connectors on NUCLEO-F103RB - - - - - - - - - - - - [P39]
*   [Table 13]. ARDUINO® connectors on NUCLEO-F302R8 - - - - - - - - - - - - [P40]
*   [Table 14]. ARDUINO® connectors on NUCLEO-F303RE - - - - - - - - - - - - [P41]
*   [Table 15]. ARDUINO® connectors on NUCLEO-F334R8 - - - - - - - - - - - - [P42]
*   [Table 16]. ARDUINO® connectors on NUCLEO-F401RE and NUCLEO-F411RE - - - [P43]
*   [Table 17]. ARDUINO® connectors on NUCLEO-L053R8 - - - - - - - - - - - - [P45]
*   [Table 18]. ARDUINO® connectors on NUCLEO-L010RB and NUCLEO-L073RZ - - - [P46]
*   [Table 19]. ARDUINO® connectors on NUCLEO-F446RE - - - - - - - - - - - - [P47]
*   [Table 20]. ARDUINO® connectors on NUCLEO-F410RB - - - - - - - - - - - - [P49]
*   [Table 21]. ARDUINO® connectors on NUCLEO-L152RE - - - - - - - - - - - - [P50]
*   [Table 22]. ARDUINO® connectors on NUCLEO-L452RE - - - - - - - - - - - - [P51]
*   [Table 23]. ARDUINO® connectors on NUCLEO-L476RG - - - - - - - - - - - - [P52]
*   [Table 24]. ST morpho connector on NUCLEO-F030R8  - - - - - - - - - - - - [P53]
*   [Table 25]. ST morpho connector on NUCLEO-F070RB  - - - - - - - - - - - - [P54]
*   [Table 26]. ST morpho connector on NUCLEO-F072RB, NUCLEO-F091RC, NUCLEO-F303RE, NUCLEO-F334R8 [P55]
*   [Table 27]. ST morpho connector on NUCLEO-F103RB  - - - - - - - - - - - - [P55]
*   [Table 28]. ST morpho connector on NUCLEO-F302R8  - - - - - - - - - - - - [P57]
*   [Table 29]. ST morpho connector on NUCLEO-F401RE, NUCLEO-F411RE, NUCLEO-F446RE [P58]
*   [Table 30]. ST morpho connector on NUCLEO-L010RB, NUCLEO-L053R8, NUCLEO-L073RZ, NUCLEO-L152RE [P59]
*   [Table 31]. ST morpho connector on NUCLEO-L452RE  - - - - - - - - - - - - [P60]
*   [Table 32]. ST morpho connector on NUCLEO-L476RG  - - - - - - - - - - - - [P61]
*   [Table 33]. ST morpho connector on NUCLEO-F410RB  - - - - - - - - - - - - [P62]
*   [Table 34]. Document revision history - - - - - - - - - - - - - - - - - - [P65]

<!-- *P5*/68 -->
[P5]: #P5
<a id="P5"/>

/List of Figures
================

*   [Figure 1]. STM32 Nucleo-64 board - - - - - - - - - - - - - - - - - - - - [P1]
*   [Figure 2]. Hardware block diagram  - - - - - - - - - - - - - - - - - - - [P12]
*   [Figure 3]. Top layout  - - - - - - - - - - - - - - - - - - - - - - - - - [P13]
*   [Figure 4]. Bottom layout - - - - - - - - - - - - - - - - - - - - - - - - [P14]
*   [Figure 5]. STM32 Nucleo board mechanical dimensions  - - - - - - - - - - [P15]
*   [Figure 6]. Typical configuration - - - - - - - - - - - - - - - - - - - - [P17]
*   [Figure 7]. Updating the list of drivers in Device Manager  - - - - - - - [P17]
*   [Figure 8]. Connecting the STM32 Nucleo board to program the on-board STM32 [P18]
*   [Figure 9]. Using ST-LINK/V2-1 to program the STM32 on an external application [P19]
*   [Figure 10]. Extension connectors on NUCLEO-F030R8  - - - - - - - - - - - [P28]
*   [Figure 11]. Extension connectors on NUCLEO-F070RB  - - - - - - - - - - - [P28]
*   [Figure 12]. Extension connectors on NUCLEO-F072RB  - - - - - - - - - - - [P29]
*   [Figure 13]. Extension connectors on NUCLEO-F091RC  - - - - - - - - - - - [P29]
*   [Figure 14]. Extension connectors on NUCLEO-F103RB  - - - - - - - - - - - [P30]
*   [Figure 15]. Extension connectors on NUCLEO-F302R8  - - - - - - - - - - - [P30]
*   [Figure 16]. Extension connectors on NUCLEO-F303RE  - - - - - - - - - - - [P31]
*   [Figure 17]. Extension connectors on NUCLEO-F334R8  - - - - - - - - - - - [P31]
*   [Figure 18]. Extension connectors on NUCLEO-F401RE  - - - - - - - - - - - [P32]
*   [Figure 19]. Extension connectors on NUCLEO-F411RE  - - - - - - - - - - - [P32]
*   [Figure 20]. Extension connectors on NUCLEO-L053R8  - - - - - - - - - - - [P33]
*   [Figure 21]. Extension connectors on NUCLEO-L073RZ and NUCLEO-L010RB  - - [P33]
*   [Figure 22]. Extension connectors on NUCLEO-L152RE  - - - - - - - - - - - [P34]
*   [Figure 23]. Extension connectors on NUCLEO-L452RE  - - - - - - - - - - - [P34]
*   [Figure 24]. Extension connectors on NUCLEO-L476RG  - - - - - - - - - - - [P35]
*   [Figure 25]. Extension connectors on NUCLEO-F446RE  - - - - - - - - - - - [P35]
*   [Figure 26]. Extension connectors on NUCLEO-F410RB  - - - - - - - - - - - [P36]

<!-- *P6*/68 -->
[P6]: #P6
<a id="P6"/>

/1 Features
===========


The STM32 Nucleo board offers the following features:

*   • STM32 microcontroller in LQFP64 package
*   • Three LEDs:
    – USB communication (LD1), user LED (LD2), power LED (LD3)
*   • Two push-buttons: USER and RESET
*   • Two types of extension resources
    – ARDUINO® Uno V3 connectivity
    – ST morpho extension pin headers for full access to all STM32 I/Os
*   • Flexible board power supply:
    – USB VBUS or external source (3.3 V, 5 V, 7-12 V)
    – Power management access point
*   • On-board ST-LINK/V2-1 debugger and programmer with SWD connector
    – Selection-mode switch using the kit as a standalone ST-LINK/V2-1
*   • USB re-enumeration capability. Three different interfaces supported on USB:
    – Virtual COM port
    – Mass storage
    – Debug port
*   • Comprehensive free software libraries and examples available 
    with the STM32Cube MCU Package
*   • Arm® Mbed ™(a) (see http://mbed.org)


a. Arm and Mbed are registered trademarks or trademarks of Arm Limited 
(or its subsidiaries) in the US and/or elsewhere.

<!-- *P7*/68 -->
[P7]: #P7
<a id="P7"/>

/2 Ordering information
=======================
To order an STM32 Nucleo-64 board, refer to [Table 1]. Additional information is available
from the datasheet and reference manual of the target STM32.

[Table-1]: #Table-1
<a id="Table-1" />

**Table 1**. Ordering information

To order an STM32 Nucleo-64 board, refer to [Table 1]. Additional information 
is available from the datasheet and reference manual of the target STM32.

[Table 1]. Ordering information

<pre>
|   Order code  | Board reference |  Targeted STM32 | Differentiating feature |
|---------------|-----------------|-----------------|-------------------------|
| NUCLEO-F030R8 |                 | STM32F030R8T6   |                         |
| NUCLEO-F070RB |                 | STM32F070RBT6   |                         |
| NUCLEO-F072RB |                 | STM32F072RBT6   |                         |
| NUCLEO-F091RC |                 | STM32F091RCT6U  |                         |
| NUCLEO-F103RB |                 | STM32F103RBT6   |                         |
| NUCLEO-F302R8 |                 | STM32F302R8T6   |                         |
| NUCLEO-F303RE |       MB1136    | STM32F303RET6   |   Arm® Mbed Enabled™   |
| NUCLEO-F334R8 |                 | STM32F334R8T6   |                         |
| NUCLEO-F401RE |                 | STM32F401RET6U  |                         |
| NUCLEO-F410RB |                 | STM32F410RBT6U  |                         |
| NUCLEO-F411RE |                 | STM32F411RET6U  |                         |
| NUCLEO-F446RE |                 | STM32F446RET6U  |                         |
|---------------|                 |-----------------|-------------------------|
| NUCLEO-L010RB |                 | STM32L010RBT6 - |                         |
|---------------|                 |-----------------|-------------------------|
| NUCLEO-L053R8 |                 | STM32L053R8T6   | Arm® Mbed Enabled™     |
| NUCLEO-L073RZ |                 | STM32L073RZT6U  |                         |
| NUCLEO-L152RE |                 | STM32L152RET6   |                         |
|---------------|                 |-----------------|-------------------------|
| NUCLEO-L452RE |                 | STM32L452RET6U  | -                       |
| NUCLEO-L476RG |                 | STM32L476RGT6U  | Arm® Mbed Enabled™     |
</pre>

<!-- *P8*/68 -->
[P8]: #P8
<a id="P8"/>


//2.1 Codification
------------------

The meaning of the codification is explained in [Table 2].

[Table-2]: #Table-2
<a id="Table-2" />

**Table 2**. Codification explanation

<pre>
|---------------|---------------------------|------------------------|
| NUCLEO-XXYYRT |        Description        | Example: NUCLEO-L452RE |
|===============|===========================|========================|
| XX            | MCU series in STM32 Arm   | STM32L4 Series         |
|               | Cortex MCUs               |                        |
|---------------|---------------------------|------------------------|
| YY            | STM32 product line in the | STM32L452              |
|               | series                    |                        |
|---------------|---------------------------|------------------------|
| R             | STM32 package pin count   | 64 pins                |
|---------------|---------------------------|------------------------|
|               | STM32 Flash memory size:  | 512 Kbytes             |
|               | – 8 for 64 Kbytes         |                        |
|               | – B for 128 Kbytes        |                        |
| T             | – C for 256 Kbytes        |                        |
|               | – E for 512 Kbytes        |                        |
|               | – G for 1 Mbyte           |                        |
|               | – Z for 192 Kbytes        |                        |
|---------------|---------------------------|------------------------|
</pre>

The order code is printed on a sticker placed at the top or bottom side of the board.

<!-- *P9*/68 -->
[P9]: #P9
<a id="P9"/>

/3 Development environment
==========================

//3.1 System requirements
-------------------------

• Windows® OS (7, 8 and 10), Linux® 64-bit, or macOS®
• USB Type-A to Mini-B cable

//3.2 Development toolchains
----------------------------

• IAR Systems - IAR Embedded Workbench®(a)
• Keil® : MDK-ARM (a)
• GCC-based IDEs
• Arm® Mbed™ online (b) (see http://mbed.org)

//3.3 Demonstration software
----------------------------

The demonstration software, included in the STM32Cube MCU Package corresponding to
the on-board microcontroller, is preloaded in the STM32 Flash memory for easy
demonstration of the device peripherals in standalone mode. The latest versions of the
demonstration source code and associated documentation can be downloaded from
www.st.com.

/4 Conventions
==============

[Table-3]: #Table-3
<a id="Table-3" />

**Table 3** provides the conventions used for the ON and OFF settings in the present
document.

In this document, the references are “STM32 Nucleo board” and “STM32 Nucleo boards” for
all information that is common to all sale types.

a.  On Windows® only.

b.  Refer to the http://mbed.com website and to [Table 1]: Ordering information, 
    to determine which order codes are supported.

[Table-3]: #Table-3
<a id="Table-3" />

**Table 3**. ON/OFF conventions

|       Convention      |                     Definition                     |
|-----------------------|----------------------------------------------------|
| Jumper JP1 ON         | Jumper fitted                                      |
| Jumper JP1 OFF        | Jumper not fitted                                  |
| Solder bridge SBx ON  | SBx connections closed by solder or 0-ohm resistor |
| Solder bridge SBx OFF | SBx connections left open                          |

注：跳线无套头表示 OFF 状态，有㚐头封闭表示 ON 状态。

<!-- *P10*/68 -->
[P10]: #P10
<a id="P10"/>

/5 Quick start
==============

The STM32 Nucleo board is a low-cost and easy-to-use development platform used to
quickly evaluate and start development with an STM32 microcontroller in LQFP64 package.
Before installing and using the product, accept the Evaluation Product License Agreement
from the www.st.com/epla web page.

For more information on the STM32 Nucleo board and to access the demonstration
software, visit www.st.com/stm32nucleo website.

//5.1 Getting started
---------------------

Follow the sequence below to configure the STM32 Nucleo board and launch the demo
software:

1.  Check the jumper position on the board, JP1 off, JP5 (PWR) on U5V, JP6 on (IDD),
    CN2 on (NUCLEO) selected.
    
2.  For correct identification of all device interfaces from the host PC, 
    install the Nucleo USB driver available from the www.st.com/stm32nucleo web page, 
    prior to connecting the board.

3.  Connect the STM32 Nucleo board to a PC with a USB cable ‘Type-A to Mini-B’ through
    USB connector CN1 to power the board. The red LED LD3 (PWR) and LD1 (COM)
    must light up. LD1 (COM) and green LED LD2 must blink.

4.  Press button B1 (left button).
    
5.  Observe the blinking frequency of LED LD2 at different frequencies, 
    by clicking on the button B1.

6.  The demonstration software and several software examples on how to use the STM32
    Nucleo board features are available at the www.st.com/stm32nucleo web page.

7.  Develop the application using the available examples.
    
//5.2 NUCLEO-L476RG bootloader limitations
------------------------------------------

Boot from system Flash memory results in executing bootloader code stored in the system
Flash memory, protected against write and erase. This allows in-system programming (ISP),
that is, flashing the STM32 user Flash memory. It also allows writing data into RAM. The
data come in via one of the communication interfaces such as USART, SPI, I²C bus, USB,
or CAN.

The bootloader version can be identified by reading the bootloader ID at the address
0x1FFF6FFE.

The STM32L476RGT6 part soldered on the NUCLEO-L476RG main board is marked with a
date code, corresponding to its date of manufacturing. STM32L476RGT6 parts with the date
code prior or equal to week 22 of 2015 are fitted with **bootloader V 9.0**, affected by the
limitations to be worked around, as described hereunder. Parts with the date code starting
from week 23 of 2015 contain **bootloader V 9.2** in which the limitations no longer exist.
To locate the visual date code information on the STM32L476RGT6 package, refer to the
section “Package information” of the datasheet (DS10198) available at www.st.com. Date
code related portion of the package marking takes Y WW format, where Y is the last digit of
the year and WW is the week. For example, a part manufactured in week 23 of 2015 bares
the date code 5 23.

<!-- *P11*/68 -->
[P11]: #P11
<a id="P11"/>


The bootloader ID of the bootloader V 9.0 is 0x90.

The following limitations exist in the bootloader V 9.0:

1.  RAM data get corrupted when written via USART/SPI/I²C/USB interface

    **Description:**

    Data write operation into RAM space via USART, SPI, I²C bus, 
    or USB results in wrong or no data written.

    **Workaround:**

    To correct the issue of the wrong write into RAM, download STSW-STM32158 bootloader
    V 9.0 patch package from the www.st.com website and load ‘Bootloader V9.0 SRAM patch’
    to the STM32, following the information in readme.txt file available in the package.

2.  User Flash memory data get corrupted when written via CAN interface

    **Description:**

    Data write operation into user Flash memory space via CAN interface results 
    in wrong or no data written.

    **Workaround:**

    To correct the issue of the wrong write into Flash memory, download the STSW-STM32158
    bootloader V 0.9 patch package from the www.st.com website and load ‘Bootloader V9.0
    CAN patch’ to the STM32, following the information in readme.txt file available in the package.


[STSW-STM32158]

**Description**

The UART emulator is needed in applications that require more UARTs than 
the ones provided by STM32F4 microcontrollers.

The STSW-STM32156 firmware provides an emulated full-duplex UART which 
supports up to 9 data bits and up to115200 baud rates.

The STSW-STM32156 firmware also offers an example of communications between 
a hardware and a software UART.

For more details refer to application note [AN4457].
[AN4457] Implementing an emulated UART on STM32F4 microcontrollers.

**All features**

1.  Full duplex, asynchronous communications
2.  Full duplex mode up to 115200 bps
3.  Data length (5 up to 9 bits)
4.  Flexible GPIO use: all GPIOs could be configured as UART TX/RX

[AN4457]: https://www.st.com/en/embedded-software/stsw-stm32156.html
[STSW-STM32158]: https://www.st.com/en/embedded-software/stsw-stm32156.html


//5.3 Hardware configuration variants
-------------------------------------

The board can be delivered with different configurations of the oscillator of the target
STM32. For all the details concerning high-speed configurations of the oscillator refer to
Section 6.7.1. For all the details concerning low-speed configurations of the oscillator refer
to Section 6.7.2.

<!-- *P12*/68 -->
[P12]: #P12
<a id="P12"/>

/6 Hardware layout and configuration
====================================
The STM32 Nucleo board is designed around the STM32 microcontrollers in 
a 64-pin LQFP package.

[Figure 2] shows the connections between the STM32 and its peripherals 
(ST-LINK/V2-1, push-button, LED, ARDUINO® connectors, and ST morpho connector).

[Figure 3] and [Figure 4] show the location of these features on the STM32 Nucleo board.
[Figure 5] shows the mechanical dimension of the STM32 Nucleo board.


[Figure 2]: #Figure-2
<a id="Figure-2" />

**Figure 2**. Hardware block diagram


                    Nucleo-64 F411RE Evaluate Board

      ST-LINK part                                   USB-Micro
    ┌─────────────────────────────────────────────────┬┬┬┬┬┬┬────────────┐
    │ ┌─┐             ┌─┐           ┌─┬─┐ JP1         └┴┴┴┴┴┘        ┌─┐ │
    │ │─│ ┌─┐·        │─│           └─┴─┘                   LD1┌─┐   │─│ │
    │ └─┘ │─│         │─│            ·                         └─┘   └─┘·│
    │ CN12│─│         │─│CN2  ·┌───────────────┐                    CN11 │
    │     │─│         └─┘      │ STM32F103CBT6 │                         │
    │     │─│ ┌─┐              │   Embedded    │                         │
    │ CN4 │─│ │─│ CN3          │ ST-LINK/V2-1  │                         │
    │     └─┘ └─┘·             └──────A────────┘                         │
    └────────────┐ ┌──────────────────│──────┐ ┌─────────────┐ ┌─────────┘
     - - - - - - ┐-┌ - - - - - - - - -│- - - ┐-┌ - - - - - - ┐ ┌ - - - - - CUT
    ┌────────────┘ └──────────────────│──────┘ └─────────────┘ └─────────┐
    │                                 │                                  │
    │ ·┌─┐┌─┐           ┌─┬─┐USER     │                         ·┌─┐┌─┐  │
    │  │1  2│ <-------- └─┴─┘Button   │                    ┌─┐   │1  2│  │
    │  │    │                         │                    │─│   │    │  │
    │  │    │                         │                    │─│   │    │  │
    │  │    │ ·┌─┐                    │                    │─│   │    │  │
    │  │    │  │─│                    │                    │─│   │    │  │
    │  │    │  │─│                    │                    │─│   │    │  │
    │  │    │  │─│                    │                    │─│   │    │  │
    │  │    │  │─│                    │                    │─│   │    │  │
    │  │    │  │─│                    │ SWD                │─│   │    │  │
    │  │    │  │─│   CN6              │               CN5  │─│   │    │  │
    │  │    │  │─│                    │                    └─┘·  │    │  │
    │  │    │  └─┘            ┌───────V─────────┐          │─│   │    │  │
    │  │    │ ·┌─┐            │                 │          │─│   │    │  │
    │  │    │  │─│     I/O    │                 │   I/O    │─│   │    │  │
    │  │    │  │─│  <-------- │  STM32F411RET6  │ -------> │─│   │    │  │
    │  │    │  │─│            │                 │          │─│   │    │  │
    │  │    │  │─│            │·                │          │─│   │    │  │
    │  │3738│  │─│            └─────────────────┘          │─│   │3738│  │
    │  └─┘└─┘  └─┘                                         └─┘·  └─┘└─┘  │
    │  CN7     CN8                                          CN9   CN10   │
    └────────────────────────────────────────────────────────────────────┘
         A      A                 MCU part                  A       A
         │      │                                           │       │ 
         │      └────────────  ARDUINO® connector ──────────┘       │ 
         │                                                          │
         └──────────────  ST morpho extension header ───────────────┘ 
                                                                      
                                                                MS34374V2

<!-- *P13*/68 -->
[P13]: #P13
<a id="P13"/>


[Figure 3]: #Figure-3
<a id="Figure-3" />

**Figure 3**. Top layout


                    Nucleo-64 F411RE Evaluate Board
                                                     USB-Micro
    ┌──────────────────────────────────────────────────┬┬┬┬┬┬┬─────────────┐
    │  ┌─┐             ┌─┐           ┌─┬─┐ JP1         └┴┴┴┴┴┘        ┌─┐  │
    │  │─│ ┌─┐         │─│           └─┴─┘                   LD1┌─┐   │─│  │
    │  └─┘ │─│1        │─│      ┌───────────────┐               └─┘  ·└─┘  │
    │  CN12│─│2        │─│CN2   │ STM32F103CBT6 │                    CN11  │
    │      │─│3        └─┘      │   Embedded    │                          │
    │      │─│4┌─┐2             │ ST-LINK/V2-1  │                          │
    │  CN4 │─│5│─│ CN3          └───────────────┘                          │
    │      └─┘6└─┘1                                                        │
    └─────────────┐ ┌─────────────────────────┐ ┌─────────────┐ ┌──────────┘
    ┌─────────────┘ └─────────────────────────┘ └─────────────┘ └──────────┐
    │                                                                      │
    │  ·┌─┐┌─┐            ┌─┬─┐USER              ┌─┬─┐ REST      ·┌─┐┌─┐   │
    │  1│─││─│            └─┴─┘Button            └─┴─┘      ┌─┐   │─││─│2  │
    │  3│─││─│                               ┌─┬─┬─┐ JP5    │─│2  │─││─│4  │
    │  5│─││─│                    ┌─┬─┐ JP6  └─┴─┴─┘        │─│1  │─││─│6  │
    │  7│─││─│  ┌─┐·     ┌─┐ LD3  └─┴─┘          ┌─┐ LD2    │─│8  │─││─│8  │
    │  9│─││─│  │─│1     └─┘                     └─┘        │─│7  │─││─│10 │
    │ 11│─││─│  │─│2                                        │─│6  │─││─│12 │
    │ 13│─││─│  │─│3                                        │─│5  │─││─│14 │
    │ 15│─││─│  │─│4                                        │─│4  │─││─│16 │
    │ 17│─││─│  │─│5                                        │─│3  │─││─│18 │
    │ 19│─││─│  │─│6  CN6                              CN5  │─│2  │─││─│20 │
    │ 21│─││─│  │─│7                                       ·└─┘1  │─││─│22 │
    │ 23│─││─│  └─┘8            ┌─────────────────┐         │─│8  │─││─│24 │
    │ 25│─││─│  ┌─┐·            │                 │         │─│7  │─││─│26 │
    │ 27│─││─│  │─│1            │                 │         │─│6  │─││─│28 │
    │ 29│─││─│  │─│2            │  STM32F411RET6  │         │─│5  │─││─│30 │
    │ 31│─││─│  │─│3            │                 │         │─│4  │─││─│32 │
    │ 33│─││─│  │─│4 ┌─────────┐│·                │         │─│3  │─││─│34 │
    │ 35│─││─│  │─│5 │ 32Khz   │└─────────────────┘         │─│2  │─││─│36 │
    │ 37└─┘└─┘  └─┘6 │ Crystal │X2                         ·└─┘1  └─┘└─┘38 │
    │   CN7     CN8  └─────────┘                             CN9   CN10    │
    └──────────────────────────────────────────────────────────────────────┘
                                                                MS34376V3


<!-- *P14*/68 -->
[P14]: #P14
<a id="P14"/>


[Figure 4]: #Figure-4
<a id="Figure-4" />

**Figure 4**. Bottom layout

                                                   SB4, SB6, SB8, SB10 (RESERVED)
                  USB-Micro                        │    SB3, SB5, SB7, SB9 (DEFAULT)
    ┌──────────────┬┬┬┬┬┬┬─────────────────────────┼──────┼────────────────┐
    │              └┴┴┴┴┴┘                         V      V                │
    │   O                                     SB4 -=- O -=- SB3        O   │
    │   O                   SB15 SB14         SB6 -=- O -=- SB5       ·O   │
    │  CN11            SB16   SB13  SB12      SB8 -=- O -=- SB7    O CN12  │
    │                    │   │  │  │  │       SB10-=- O -=- SB9    O       │
    │      ST-LINK MCO ->#   #  #  #  #     RESET--->SB11 -=-      O       │
    │                    │   │  │  │  │NRST                     o  O  o    │
    │  ST-LINK SWO--------->SWO RX TX <-- ST-LINK USART         o  O  o    │
    └───────────────┐ ┌──────┐ ┌────────────────────────┐ ┌────────────────┘
    ┌───────────────┘ └──────┘ └────────────────────────┘ └────────────────┐
    │                                                                      │
    │                     LD2  SB21   SB18                SB17 USER button │
    │                          SB20   SB19                                 │
    │                          SB25   SB22     SB33  SB30                  │
    │  1 o O 2  O D17/SCL      SB24   SB23      O  O  O  O        2 O o 1  │
    │    O O    O D16/SCA      SB28   SB26        SB32  SB31        O O    │
    │    O O    O D15/AVDO     SB29   SB27                          O O    │
    │    O O    O D14/GND      SB35   SB34                 CN6  E5V O O    │
    │    O O    O D13/SCK      SB36        SB37               o GND O O    │
    │    O O    O D12/MSO      SB40         O           IOREF O     O O    │
    │    O O    O D11/MOSL/PWM SB39   SB38               NRST O     O O    │
    │    O O    O D10/CS/PWM   SB41                       3V3 O     O O    │
    │    O O    O D9/PWM       SB42   SB65                 5V O     O O    │
    │    O O    o D8           SB44   SB64                GND O     O O    │
    │    O O    CN5         SB43                          GND O     O O    │
    │    O O    O D7        SB47                          VIN O     O O    │
    │    O O    O D6/PWM          SB46                              O O    │
    │    O O    O D5/PWM    SB63  SB52 SB50    SB45        A0 o     O O    │
    │    O O    O D4        SB68  SB51 MCO     SB49        A1 O     O O    │
    │    O O    O D3/PWM    SB59  SB56         SB48        A2 O     O O    │
    │    O O    O D2        SB62  SB57         SB55        A3 O     O O    │
    │    O O    O D1/TX     SB61  SB60         SB54    SDA A4 O     O O    │
    │ 37 O O 38 o D0/RX     SB60                       SDL A5 O  38 O O 37 │
    │   CN10    CN9                                          CN8   CN7     │
    └──────────────────────────────────────────────────────────────────────┘

注：桥接贴片电阻 SMT（Surface Mounted Technology）尺寸小于跳线，这里的字符并不能对齐板卡，
只能大概标注在相对位置。

<!-- *P15*/68 -->
[P15]: #P15
<a id="P15"/>


[Figure 5]: #Figure-5
<a id="Figure-5" />

**Figure 5**. STM32 Nucleo board mechanical dimensions

               V     |<---------------------------70.00------------------------->|
     ────────────────┌───────────────────────────────────────┬┬┬┬┬┬┬─────────────┐
       A   3.80V     │                                       └┴┴┴┴┴┘             │
       │   ──────────│   O                                                   O   │
       │ ────────────│   O                                                  ·O   │
       │   A         │  CN12     O                                         CN11  │
       │   │         │           O                                               │
       │   │         │           O                                               │
       │   │         │        o  O  o                                            │
       │   │         │        o  O  o                                            │
       │   │  ────── └───────────────┐ ┌──────┐ ┌─────────────┐ ┌────────────────┘
       │   │   A     ┌───────────────┘ └──────┘ └─────────────┘ └────────────────┐ V
       │   │   │─────│      ┌──┐                                      ┌──┐       │────
       │   │   │  A  │      └──┘                                      └──┘       │3.56
       │   │   │  │  │ 1 o O 2                               SCL/D17  O  2 O o 1 │────
       │   │   │13.97│   O O                                 SCA/D16  O    O O   │ A
     82.50 │   │  │  │   O O                                AVDO/D15  O    O O   │
       │   │   │  V  │   O O E5V CN6                         GND/D14  O    O O   │
       │ 71.12 │─────│   O O GND o                           SCK/D13  O    O O   │
       │   │   │     │   O O     O OREF                      MSO/D12  O    O O   │
       │   │ 57.54   │   O O     O NRST                 MOSL/PWM/D11  O    O O   │
       │   │   │     │   O O     O  3V3                   CS/PWM/D10  O    O O   │
       │   │   │     │   O O     O   5V                      PWM/ D9  O    O O   │ V
       │   │   │     │   O O     O  GND                           D8  o    O O   │────
       │   │   │     │   O O     O  GND                               CN5  O O   │4.06
       │   │   │─────│   O O     O  VIN                            D7 O    O O   │────
       │   │   │5.08 │   O O                                   PWM/D6 O    O O   │ A
       │   │   │─────│   O O     o A0 o                        PWM/D5 O    O O   │
       │   │   │     │   O O     O A1 O                            D4 O    O O   │
       │   │   │     │   O O     O A2 O                        PWM/D3 O    O O   │
       │   │   │     │   O O     O A3 O                            D2 O    O O   │
       │   V   │     │   O O     O A4 SDA                      TX /D1 O    O O   │  V
       │  ─────│─────│37 O O 38  O A5 SDL               ┌──┐   RX /D0 o 38 O O 37│───
       V       V     │  CN7     CN8                     └──┘          CN9 CN10   │ 2.54
     ────────────────└─────────────\────────────────────────/────────────────────┘───
                     │   │       │  │<──────33.00────────│─>│                │      A
                     │   │       │<────────33.02────────>│                   │
                     │   │       │<───────────────────48.26─────────────────>│
                     │   │<──────│───────────────63.50──────────────────────>│
                     │<──10.87──>│                                            


<!-- *P16*/68 -->
[P16]: #P16
<a id="P16"/>

/6.A Layout of STM32F411RE
==========================

Nucleo STM32F411RE 芯片版本，引脚功能参考下表：

*   [Figure 19]. Extension connectors on NUCLEO-F411RE
*   [Table 16]. ARDUINO® connectors on NUCLEO-F411RE
*   [Table 29]. ST morpho connector on NUCLEO-F411RE

注：输出端口的序号，编号 1 起始位置，按充数方向增加，双排的 CN7、CN10 每两个一行，逐行计数。
板子 SB - solder bridges 标记为固定桥接端子，参考手册 [Table 10]。

*  LD1 - USB communication indicator, tricolor LED (green, orange, red)
*  LD2 - User LED (Red light)
*  LD3 - Power LED (Green light)

*  Two push-buttons: USER and RESET ()

*  JP1 - OFF - USB power through CN1 and 300 mA max. ON - 100mA max.
*  JP5 - Power selection，external poewr (left two pin on) or USB power.
*  JP6 - JP6 on (IDD)
*  X2  - 32 KHz crystal(1)

1. Crystal may be present or not depending on board version, refer to Section 6.7.2.

LD2 是作为用户使用的绿光指示灯，连接到 Arduino D13，也和 STM32 I/O PA5 (pin 21) 管脚
或 PB13 (pin 34) 连接，取决于 STM32 板卡 SB21 配置，STM32F411RE 版本通过贴片电阻连接。

用户按钮 B1 USER 连接到 STM32 主控芯片的 I/O PC13 (pin 2)，这两个板载资源在没有
外接硬件的条件下用来做编程演示。

IDD 是电流强度测试端口，Drain to Drain。横截面的电量叫做电流强度，简称电流，安倍提出安培定理时，
把电流写做了 I，源自法文里 intensité de courant。英文为 intensity of current。

*  CN1 -  ST-LINK USB connector (also power supply)
*  CN2 -  ST-Link (Off) Or Nucleo (On) selector.
*  CN3 -  USART3 TX and RX.
*  CN4 -  SWD Debug connector.
*  CN5 -  Arduino connector.
*  CN6 -  Arduino connector.
*  CN7 -  ST morpho connector.
*  CN8 -  Arduino connector.
*  CN9 -  Arduino connector.
*  CN10 - ST morpho connector.
*  CN11 - available when need BOOT0 pin set HIGH.  
*  CN12 - available when need BOOT0 pin set HIGH. 

CN03 是通用串行口专用接口，与 CN7 的 1、2 端相通。

*  PC10 (USART3_TX) available on CN7 pin 1 to CN3 pin RX
*  PC11 (USART3_RX) available on CN7 pin 2 to CN3 pin TX


**Figure 19**. NUCLEO-F411RE 端口及复用对应关系

                ╭──────────────────────────────────────────────────────────────────────╮ 
                │                                                                      │
                │                                                                      │
                │                                                                      │
                │                              NUCLEO-F411RE                           │
                │                                                                      │
                │                                                                      │
                │                                                                      │
                └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
                ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
                │    CN7       CN6                               PC9------_      CN10  │
            PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
            PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
             VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
            BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
             NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
             NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
            PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
            PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
            PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
             GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
            PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
            PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
            PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
            PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
            PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
            PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
            VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
            PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
            PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
                │         CN8                                               CN9        │
                ╰───────────\──────────────────────────────────/───────────────────────╯
                             \________________________________/
                                                                                    MSv34933V3
                 CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho


At startup, boot pins are used to select one out of three boot options:

*   Boot from user Flash
*   Boot from system memory
*   Boot from embedded SRAM

The bootloader is located in system memory. It is used to reprogram the Flash memory by
using USART1(PA9/10), USART2(PD5/6), USB OTG FS in device mode (PA11/12) through
DFU (device firmware upgrade), I2C1(PB6/7), I2C2(PB10/3), I2C3(PA8/PB4),
SPI1(PA4/5/6/7), SPI2(PB12/13/14/15) or SPI3(PA15, PC10/11/12).


**Table 16**. ARDUINO® connectors on NUCLEO-F401RE and NUCLEO-F411RE

<pre>
|    Connector    | Pin | Pin name |   STM32 pin    |             Function            |
|-----------------|-----|----------|----------------|---------------------------------|
|                                     Left connectors                                 |
|-----------------|-----|----------|----------------|---------------------------------|
| CN6 power       |   1 | NC       | -              | -                               |
|                 |   2 | IOREF    | -              | 3.3V Ref                        |
|                 |   3 | RESET    | NRST           | RESET                           |
|                 |   4 | +3.3V    | -              | 3.3V input/output               |
|                 |   5 | +5V      | -              | 5V output                       |
|                 |   6 | GND      | -              | ground                          |
|                 |   7 | GND      | -              | ground                          |
|                 |   8 | VIN      | -              | Power input                     |
|-----------------|-----|----------|----------------|---------------------------------|
| CN8 analog      |   1 | A0       | PA0            | ADC1_0                          |
|                 |   2 | A1       | PA1            | ADC1_1                          |
|                 |   3 | A2       | PA4            | ADC1_4                          |
|                 |   4 | A3       | PB0            | ADC1_8                          |
|                 |   5 | A4       | PC1 or PB9 (1) | ADC1_11 (PC1) or I2C1_SDA (PB9) |
|                 |   6 | A5       | PC0 or PB8 (1) | ADC1_10 (PC0) or I2C1_SCL (PB8) |
|-----------------|-----|----------|----------------|---------------------------------|
|                                    Right connectors                                 |
|-----------------|-----|----------|----------------|---------------------------------|
| CN5 digital     |  10 | D15      | PB8            | I2C1_SCL                        |
|                 |   9 | D14      | PB9            | I2C1_SDA                        |
|                 |   8 | AREF     | -              | AVDD                            |
|                 |   7 | GND      | -              | ground                          |
|                 |   6 | D13      | PA5            | SPI1_SCK                        |
|                 |   5 | D12      | PA6            | SPI1_MISO                       |
|                 |   4 | D11      | PA7            | TIM1_CH1N or SPI1_MOSI          |
|                 |   3 | D10      | PB6            | TIM4_CH1 or SPI1_CS             |
|                 |   2 | D9       | PC7            | TIM3_CH2                        |
|                 |   1 | D8       | PA9            | -                               |
|-----------------|-----|----------|----------------|---------------------------------|
| CN9 digital     |   8 | D7       | PA8            | -                               |
|                 |   7 | D6       | PB10           | TIM2_CH3                        |
|                 |   6 | D5       | PB4            | TIM3_CH1                        |
|                 |   5 | D4       | PB5            | -                               |
|                 |   4 | D3       | PB3            | TIM2_CH2                        |
|                 |   3 | D2       | PA10           | -                               |
|                 |   2 | D1       | PA2            | USART2_TX                       |
|                 |   1 | D0       | PA3            | USART2_RX                       |
</pre>


**Table 29**. ST morpho connector on NUCLEO-F401RE, NUCLEO-F411RE, NUCLEO-F446RE

<pre>
| CN7 odd pins       | CN7 even pins        | CN10 odd pins | CN10 even pins |
|--------------------|----------------------|---------------|----------------|
| Pin | Name         | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|--------------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10         | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12         | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD          | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1)    | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | -            | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -            | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13 (3)     | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14 (3)     | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15         | +5V            | 18  | 17  | PB6     | -        | 18  |
| 19  | GND          | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7          | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13         | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14         | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15         | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PH0          | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PH1          | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VBAT         | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2          | PC1 or PB9 (4) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3          | PC0 or PB8 (4) | 38  | 37  | PA3     | -        | 38  |
</pre>

1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pin5-7 of CN7. Two unused jumpers are available on CN11 and CN12 
    (bottom side of the board).
2.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not 
    recommended to use them as IO pins if the ST-LINK part is not cut.
4.  Refer to [Table 10]: Solder bridges for details.


//6.1 Pre-cut PCB
-----------------

The STM32 Nucleo board is divided into two parts: **ST-LINK part** and **target STM32 part**.
The ST-LINK part of the PCB can be cut out to reduce the board size. In this case, the
remaining target STM32 part can only be powered by VIN, E5V, and +3.3V on the ST
morpho connector CN7, or VIN and +3.3V on ARDUINO® connector CN6. It is still possible
to use the ST-LINK part to program the main STM32 using wires between CN4 and SWD
signals available on the ST morpho connector (SWCLK CN7 pin 15 and SWDIO CN7 pin
13).

//6.2 Embedded ST-LINK/V2-1
---------------------------

The ST-LINK/V2-1 programming and debugging tool is integrated into the STM32 Nucleo board.

The ST-LINK/V2-1 makes the STM32 Nucleo boards Mbed Enabled™.

The embedded ST-LINK/V2-1 supports only SWD for STM32 devices. For information about
debugging and programming features, refer to the user manual ST-LINK/V2 in-circuit
debugger/programmer for STM8 and STM32 (UM1075), which describes in details all the
ST-LINK/V2 features.

The changes versus the ST-LINK/V2 version are listed below.

*   New features supported on ST-LINK/V2-1:
    – USB software re-enumeration
    – Virtual COM port interface on USB
    – Mass storage interface on USB
    – USB power management request for more than 100 mA power on USB
*   Features not supported on ST-LINK/V2-1:
    – SWIM interface
    – Minimum supported application voltage limited to 3 V
*   Known limitation:
    – Activating the readout protection on ST-LINK/V2-1 target prevents the target
    application from running afterward. The target readout protection must be kept
    disabled on ST-LINK/V2-1 boards.
    There are two different ways to use the embedded ST-LINK/V2-1 depending 
    on the jumper states (see [Table 4] and [Figure 6]):
*   Program/debug the on-board STM32 (Section 6.2.2)
*   Program/debug an MCU in an external application board using a cable connected to
    SWD connector CN4 (Section 6.2.4).

[Table-4]: #Table-4
<a id="Table-4" />

**Table 4**. Jumper states

|     Jumper state     |                        Description                        |
|----------------------|-----------------------------------------------------------|
| Both CN2 jumpers ON  | ST-LINK/V2-1 functions enabled for on-board programming   |
|                      | (default)                                                 |
| Both CN2 jumpers OFF | ST-LINK/V2-1 functions enabled for external CN4 connector |
|                      | (SWD supported)                                           |

<!-- *P17*/68 -->
[P17]: #P17
<a id="P17"/>


[Figure 6]: #Figure-6
<a id="Figure-6" />

**Figure 6**. Typical configuration

    Hardware requirements:
    - USB cable Type-A to Mini-B
    - Computer with Windows® 7, 8 or 10

    Development toolchain:
    - IAR™ EWARM
    - Keil® MDK-ARM
    - GCC-based IDE
                                                                MS19052V5


//6.2.1 Driver
--------------


Before connecting the Nucleo-64 board to a Windows 7, Windows 8, or Windows 10 PC via
USB, a driver for ST-LINK/V2-1 must be installed. It can be downloaded from the
www.st.com website.

In case the STM32 Nucleo-64 board is connected to the PC before installing the driver, 
the PC device manager may report some Nucleo interfaces as “Unknown”.

To recover from this situation, after installing the dedicated driver, the association 
of “Unknown” USB devices found on the STM32 Nucleo-64 board to this dedicated driver,
must be updated in the device manager manually.

> [!NOTE]
> It is recommended to proceed using a USB Composite Device, as shown in [Figure 7].


[Figure 7]: #Figure-7
<a id="Figure-7" />

**Figure 7**. Updating the list of drivers in Device Manager

*   Run `compmgmt.msc` to open Device Manager of Windows;
*   Select `USB Composite Device` under Universal Serial Bus controllers 
    (通用串行总线控制器，USB);
*   Select context menu `Update Driver Software...` to update ST-LINK driver.
*   Double-click to open attributes, look inside detail tab, `Hardward ID` should be:
    USB\VID_0483&PID_374B&REV_0100


//6.2.2 ST-LINK/V2-1 firmware upgrade
-------------------------------------


The ST-LINK/V2-1 embeds a firmware upgrade mechanism for the in-situ upgrade through
the USB port. As the firmware may evolve during the lifetime of the ST-LINK/V2-1 product
(for example new functionality, bug fixes, support for new microcontroller families), it is
recommended to visit www.st.com website before starting to use the STM32 Nucleo board
and periodically, in order to stay up-to-date with the latest firmware version.


<!-- *P18*/68 -->
[P18]: #P18
<a id="P18"/>


//6.2.3 Using the ST-LINK/V2-1 to program and debug the STM32 on board
----------------------------------------------------------------------


To program the STM32 on the board, plug in the two jumpers on CN2, as shown in red in
[Figure 8]. Do not use the CN4 connector as this could disturb the communication with the
STM32 microcontroller of the STM32 Nucleo board.


[Figure 8]: #Figure-8
<a id="Figure-8" />

**Figure 8**. Connecting the STM32 Nucleo board to program the on-board STM32

                    Nucleo-64 F411RE Evaluate Board - ST-LINK part

                        CN2 jumpers ON                USB-Micro
    ┌───────────────────│──────────────────────────────┬┬┬┬┬┬┬─────────────┐
    │  ┌─┐             ┌─┐           ┌─┬─┐ JP1         └┴┴┴┴┴┘        ┌─┐  │
    │  │─│ ┌─┐         │┼│           └─┴─┘                   LD1┌─┐   │─│  │
    │  └─┘ │─│1        │─│      ┌───────────────┐               └─┘  ·└─┘  │
    │  CN12│─│2        │┼│CN2   │ STM32F103CBT6 │                    CN11  │
    │      │─│3        └─┘      │   Embedded    │                          │
    │      │─│4┌─┐2             │ ST-LINK/V2-1  │                          │
    │  CN4 │─│5│─│ CN3          └───────────────┘                          │
    │      └─┘6└─┘1                                                        │
    └───────│─────┐ ┌─────────────────────────┐ ┌─────────────┐ ┌──────────┘
           CN4 SWD connector
                                                                    MS34378V2


//6.2.4 Using ST-LINK/V2-1 to program and debug an external STM32 application
-----------------------------------------------------------------------------


It is very easy to use the ST-LINK/V2-1 to program the STM32 on an external application.
Simply remove the two jumpers from CN2 as illustrated in [Figure 9]: Using ST-LINK/V2-1 to
program the STM32 on an external application, and connect the application to the CN4
debug connector according to [Table 5].

> [!NOTE]
> SB12 NRST (target STM32 RESET) must be OFF if CN4 pin 5 is used in the 
> external application.

<!-- *P19*/68 -->
[P19]: #P19
<a id="P19"/>



[Figure 9]: #Figure-9
<a id="Figure-9" />

**Figure 9**. Using ST-LINK/V2-1 to program the STM32 on an external application

                    Nucleo-64 F411RE Evaluate Board - ST-LINK part

                        CN2 jumpers OFF               USB-Micro
    ┌───────────────────│──────────────────────────────┬┬┬┬┬┬┬─────────────┐
    │  ┌─┐             ┌─┐           ┌─┬─┐ JP1         └┴┴┴┴┴┘        ┌─┐  │
    │  │─│ ┌─┐         │─│           └─┴─┘                   LD1┌─┐   │─│  │
    │  └─┘ │─│1        │─│      ┌───────────────┐               └─┘  ·└─┘  │
    │  CN12│─│2        │─│CN2   │ STM32F103CBT6 │                    CN11  │
    │      │─│3        └─┘      │   Embedded    │                          │
    │      │─│4┌─┐2             │ ST-LINK/V2-1  │                          │
    │  CN4 │─│5│─│ CN3          └───────────────┘                          │
    │      └─┘6└─┘1                                                        │
    └───────│─────┐ ┌─────────────────────────┐ ┌─────────────┐ ┌──────────┘
           CN4 SWD connector
                                                                    MS34379V2

[Table-5]: #Table-5
<a id="Table-5" />

**Table 5**. Debug connector CN4 (SWD)

| Pin |    CN4     |      Designation      |
|-----|------------|-----------------------|
|   1 | VDD_TARGET | VDD from application  |
|   2 | SWCLK      | SWD clock             |
|   3 | GND        | ground                |
|   4 | SWDIO      | SWD data input/output |
|   5 | NRST       | RESET of target STM32 |
|   6 | SWO        | Reserved              |


<!-- *P20*/68 -->
[P20]: #P20
<a id="P20"/>


//6.3 Power supply and power selection
--------------------------------------

The power supply is provided either by the host PC through the USB cable, or by an
external source: VIN (From 7 V to 12 V), E5V (5 V) or +3.3V power supply pins on CN6 or
CN7. In case VIN, E5V or +3.3V is used to power the STM32 Nucleo board, using an
external power supply unit or auxiliary equipment, this power source must comply with the
standard EN-60950-1: 2006+A11/2009, and must be Safety Extra Low Voltage (SELV) with
limited power capability.

//6.3.1 Power supply input from the USB connector
-------------------------------------------------

The ST-LINK/V2-1 supports USB power management allowing to request more than
100 mA current to the host PC.

All parts of the STM32 Nucleo board and shield can be powered from the ST-LINK USB
connector CN1 (U5V or VBUS). 

> [!NOTE]
> Note that only the ST-LINK part is power supplied before
> the USB enumeration as the host PC only provides 100 mA to the board at that time. 

During the USB enumeration, the STM32 Nucleo board requires 300 mA of current to the host PC.
If the host is able to provide the required power, the targeted STM32 microcontroller is
powered and the red LED LD3 is turned ON, thus the STM32 Nucleo board and its shield
can consume a maximum of 300 mA current, not more. 

If the host is not able to provide the required current, the targeted STM32 microcontroller 
and the MCU part including the extension board are not power supplied. As a consequence, 
the red LED LD3 remains turned OFF.

In such a case it is mandatory to use an external power supply as explained in
the next [Section 6.3.2]: External power supply inputs: VIN and E5V.

When the board is power supplied by USB (U5V) a jumper must be connected between pin
1 and pin 2 of JP5 as shown in [Table 8].

JP1 is configured according to the maximum current consumption of the board when
powered by USB (U5V). JP1 jumper can be set in case the board is powered by USB and
maximum current consumption on U5V does not exceed 100 mA (including an eventual
extension board or ARDUINO® shield). In such a condition, USB enumeration always
succeeds since no more than 100 mA is requested to the PC. Possible configurations of
JP1 are summarized in [Table 6].

> [!WARNING]
> If the maximum current consumption of the NUCLEO and its
> extension boards exceeds 300 mA, it is mandatory to power
> the NUCLEO using an external power supply connected to E5V or VIN.

> [!NOTE]
> In case the board is powered by a USB charger, there is no USB enumeration, so the led
> LD3 remains set to OFF permanently and the target STM32 is not powered. In this specific
> case, the jumper JP1 needs to be set to ON, to allow target STM32 to be powered anyway.

[Table-6]: #Table-6
<a id="Table-6" />

**Table 6**. JP1 configuration table

|  Jumper state  |      Power supply     | Allowed current |
|----------------|-----------------------|-----------------|
| JP1 jumper OFF | USB power through CN1 | 300 mA max      |
| JP1 jumper ON  |                       | 100 mA max      |

> [!NOTE]
> 因为 USB 总线在 PC 枚举设备时只供应最大 100 mA 电流，如果 Nucleo 板卡外部连接超过这个电流，
> 那么 Nucleo 目标板没有供电，LD3 指示灯不亮，需要考虑使用 VIN（CN6） 和 E5V (CN7) 外接电源。
> 如果在 100 mA 电流以内，就可以连接 JP1，ST-LINK 部分工作电流不会超过 100 mA。

<!-- *P21*/68 -->
[P21]: #P21
<a id="P21"/>


//6.3.2 External power supply inputs: VIN and E5V
-------------------------------------------------

The external power sources VIN and E5V are summarized in [Table 7]. When the board is
power supplied by VIN or E5V, the jumpers configuration must be the following:

*   Jumper on JP5 pin 2 and pin 3
*   Jumper removed on JP1

[Table-7]: #Table-7
<a id="Table-7" />

**Table 7**. External power sources

| Input power name | Connectors pins  |  Voltage range   | Max current | Limitation |
|------------------|------------------|------------------|-------------|------------|
| VIN              | CN6 pin 8 (VIN)  | 7 V to 12 V      | 800 mA      | [!WARNING]    |
|                  | CN7 pin 24 (E5V) |                  |             |            |
|------------------|------------------|------------------|-------------|------------|
| E5V              | CN7 pin 6        | 4.75 V to 5.25 V | 500 mA      | -          |
|                  |                  |                  |             |            |

> [!WARNING]
>  From 7 V to 12 V only and input current capability is linked to input voltage:
>  
>  1.  800 mA input current when Vin = 7 V
>  2.  450 mA input current when 7 V < Vin <= 9 V
>  3.  250 mA input current when 9 V < Vin <= 12 V

Using VIN or E5V as external power supply

VIN or E5V can be used as an external power supply in case the current consumption of the
STM32 Nucleo and extensions boards exceeds the allowed current on USB. In this
condition, it is still possible to use the USB for communication, for programming or
debugging only, but it is mandatory to power supply the board first using VIN or E5V then
connect the USB cable to the PC. Proceeding this way ensures that the enumeration occurs
thanks to the external power source.

[Table-8]: #Table-8
<a id="Table-8" />

**Table 8**. Power-related jumper

| Jumper |                               Description                                |
|--------|--------------------------------------------------------------------------|
| JP5    | U5V (ST-LINK VBUS) is used as a power source when JP5 2-1 pins connected |
|        | (Default setting)                                                        |
|        | VIN or E5V is used as a power source when JP5 3-2 pins connected.        |

              JP5                             JP5
            ┌─┬─┬─┐                         ┌─┬─┬─┐ 
            │───│ │                         │ │───│ (ST-LINK VBUS) 
        E5V └─┴─┴─┘ U5V                 E5V └─┴─┴─┘ U5V
             3 2 1                           3 2 1


<!-- *P22*/68 -->
[P22]: #P22
<a id="P22"/>

The following power sequence procedure must be respected:

1.  Connect the jumper between pin 2 and pin 3 of JP5
2.  Check that JP1 is removed
3.  Connect the external power source to VIN or E5V
4.  Power on the external power supply 7 V< VIN < 12 V to VIN, or 5 V for E5V
5.  Check that LD3 is turned ON
6.  Connect the PC to USB connector CN1

If this order is not respected, the board may be supplied by VBUS first 
then by VIN or E5V, and the following risks may be encountered:

1.  If more than 300 mA current is needed by the board, the PC may be damaged or
    the current supply can be limited by the PC. As a consequence, the board is
    not powered correctly.

2.  300 mA is requested at enumeration (since JP1 must be OFF) so there is a risk that the
    request is rejected and the enumeration does not succeed if the PC cannot provide
    such current. Consequently, the board is not power supplied (LED LD3 remains OFF).

//6.3.3 External power supply input: +3.3V
------------------------------------------

It can be of interest to use the +3.3V (CN6 pin 4 or CN7 pin 12 and pin 16) directly as power
input for instance in case the 3.3V is provided by an extension board. When the STM32
Nucleo board is power supplied by +3.3V, the ST-LINK is not powered, thus the
programming and debug features are unavailable. The +3.3V external power source is
summarized in [Table 9].

Two different configurations are possible when using +3.3V to power the board:

*   ST-LINK is removed (PCB cut) or
*   SB2 (3.3V regulator) and SB12 (NRST) are OFF.

[Table-9]: #Table-9
<a id="Table-9" />

**Table 9**. +3.3 V external power source

| Input power name |    Connectors pins    | Voltage range |           Limitation          |
|------------------|-----------------------|---------------|-------------------------------|
| 3.3V             | CN6 pin 4             | 3 V to 3.6 V  | Used when ST-LINK part of PCB |
|                  | CN7 pin 12 and pin 16 |               | is cut or SB2 and SB12 OFF    |

//6.3.4 External power supply output
------------------------------------

When powered by USB, VIN, or E5V, the +5V (CN6 pin 5 or CN7 pin 18) can be used as an
output power supply for an ARDUINO® shield or an extension board. In this case, the
maximum current of the power source specified in [Table 7] must be respected.

The +3.3V (CN6 pin 4 or CN7 pin 12 and 16) can be used also as power supply output. The
current is limited by the maximum current capability of the regulator U4 (500 mA max).

<!-- *P23*/68 -->
[P23]: #P23
<a id="P23"/>


//6.4 LEDs
----------

The tricolor LED (green, orange, red) LD1 (COM) provides information about ST-LINK
communication status. LD1 default color is red. LD1 turns to green to indicate that
communication is in progress between the PC and the ST-LINK/V2-1, with the following
setup:

*   Slow blinking Red/Off: at power-on before USB initialization
*   Fast blinking Red/Off: after the first correct communication between the PC and
    ST-LINK/V2-1 (enumeration)
*   Red LED On: when the initialization between the PC and ST-LINK/V2-1 is complete
*   Green LED On: after a successful target communication initialization
*   Blinking Red/Green: during communication with the target
*   Green On: communication finished and successful
*   Orange On: Communication failure

User LD2: the green LED is a user LED connected to ARDUINO® signal D13 corresponding
to STM32 I/O PA5 (pin 21) or PB13 (pin 34) depending on the STM32 target. Refer to

[Table 11] to [Table 23] when:

*   the I/O is HIGH value, the LED is on
*   the I/O is LOW, the LED is off

LD3 PWR: the red LED indicates that the STM32 part is powered and +5V power is
available.

//6.5 Push-buttons
------------------

B1 USER: the user button is connected to the I/O PC13 (pin 2) of the STM32
microcontroller.

B2 RESET: this push-button is connected to NRST, and is used to RESET the STM32
microcontroller.

> [!NOTE]
> The blue and black plastic hats that are placed on the push-buttons can be removed if
> necessary, for example when a shield or when an application board is plugged on top of the
> Nucleo board. This will avoid pressure on the buttons and consequently a possible
> permanent target STM32 RESET.

//6.6 JP6 (IDD)
---------------

Jumper JP6, labeled IDD, is used to measure the STM32 microcontroller consumption by
removing the jumper and by connecting an ammeter:

*   Jumper ON: STM32 microcontroller is powered (default).
*   Jumper OFF: an ammeter must be connected to measure the STM32 microcontroller
    current. If there is no ammeter, the STM32 microcontroller is not powered.

<!-- *P24*/68 -->
[P24]: #P24
<a id="P24"/>


//6.7 OSC clock
---------------


//6.7.1 OSC clock supply
------------------------

There are four ways to configure the pins corresponding to the external high-speed clock
(HSE):

*   MCO from ST-LINK: MCO output of ST-LINK MCU is used as an input clock. This
    frequency cannot be changed, it is fixed at 8 MHz and connected to
    PF0/PD0/PH0-OSC_IN of the STM32 microcontroller.

    The following configuration is needed:
    – SB55 OFF and SB54 ON
    – SB16 and SB50 ON
    – R35 and R37 removed

*   HSE oscillator on-board from X3 crystal (not provided): for typical frequencies and
    its capacitors and resistors, refer to the STM32 microcontroller datasheet. Refer to the
    [AN2867] Application note for oscillator design guide for STM32 microcontrollers.The X3
    crystal has the following characteristics: 8 MHz, 16 pF, 20 ppm, and DIP footprint. It is
    recommended to use 9SL8000016AFXHF0 manufactured by Hong Kong X'tals
    Limited.

    The following configuration is needed:
    – SB54 and SB55 OFF
    – R35 and R37 soldered
    – C33 and C34 soldered with 20 pF capacitors
    – SB16 and SB50 OFF

*   Oscillator from external PF0/PD0/PH0: from an external oscillator through pin 29 of
    the CN7 connector.

    The following configuration is needed:
    – SB55 ON
    – SB50 OFF
    – R35 and R37 removed

*   HSE not used: PF0/PD0/PH0 and PF1/PD1/PH1 are used as GPIOs instead of clocks

    The following configuration is needed:
    – SB54 and SB55 ON
    – SB16 and SB50 (MCO) OFF
    – R35 and R37 removed

There are two possible default configurations of the HSE pins, depending on the version of
the STM32 Nucleo board hardware.
The board version MB1136 C-01 or MB1136 C-02 is mentioned on the sticker, placed on the
bottom side of the PCB.
The board marking MB1136 C-01 corresponds to a board, configured as HSE not used.
The board marking MB1136 C-02 (or higher) corresponds to a board, configured to use
ST-LINK MCO as the clock input.

<!-- *P25*/68 -->
[P25]: #P25
<a id="P25"/>

Note: For NUCLEO-L476RG and NUCLEO-L452RE the ST-LINK MCO output is not connected to
OSCIN to reduce power consumption in low power mode. Consequently, NUCLEO-L476RG
and NUCLEO-L452RE configurations correspond to HSE not used.

//6.7.2 OSC 32 kHz clock supply
-------------------------------

There are three ways to configure the pins corresponding to the low-speed clock (LSE):
• On-board oscillator: X2 crystal. Refer to the Oscillator design guide for STM8S,
STM8A and STM32 microcontrollers application note ([AN2867]) for oscillator design
guide for STM32 microcontrollers.It is recommended to use ABS25-32.768KHZ-6-T,
manufactured by Abracon Corporation.

*   Oscillator from external PC14: from external oscillator through the pin 25 of CN7
    connector.

    The following configuration is needed:
    – SB48 and SB49 ON
    – R34 and R36 removed

*   LSE not used: PC14 and PC15 are used as GPIOs instead of low-speed clocks.

    The following configuration is needed:
    – SB48 and SB49 ON
    – R34 and R36 removed

There are three possible default configurations of the LSE depending on the version of the
STM32 Nucleo board hardware.

The board version MB1136 C-01 or MB1136 C-02 is mentioned on the sticker placed on the
bottom side of the PCB.

The board marking MB1136 C-01 corresponds to a board configured as LSE not used.

The board marking MB1136 C-02 (or higher) corresponds to a board configured with
on-board 32 kHz oscillator.

The board marking MB1136 C-03 (or higher) corresponds to a board using new LSE crystal
(ABS25) and C26, C31, and C32 value update.

//6.8 USART communication
-------------------------

The USART2 interface available on PA2 and PA3 of the STM32 microcontroller can be
connected to ST-LINK MCU, ST morpho connector, or to ARDUINO® connector. The choice
can be changed by setting the related solder bridges. By default, the USART2
communication between the target STM32 and ST-LINK MCU is enabled, in order to
support virtual COM port for Mbed™ (SB13 and SB14 ON, SB62 and SB63 OFF). If the
communication between the target STM32 PA2 (D1) or PA3 (D0) and shield or extension
board is required, SB62 and SB63 must be ON, while SB13 and SB14 must be OFF. In such
a case, it is possible to connect another USART to ST-LINK MCU using flying wires between
the ST morpho connector and CN3. For instance, on NUCLEO-F103RB it is possible to use
USART3 available on PC10 (TX) and PC11 (RX). Two flying wires need to be connected as
follow:

*   PC10 (USART3_TX) available on CN7 pin 1 to CN3 pin RX
*   PC11 (USART3_RX) available on CN7 pin 2 to CN3 pin TX

<!-- *P26*/68 -->
[P26]: #P26
<a id="P26"/>


//6.9 Solder bridges
--------------------

[Table-10]: #Table-10
<a id="Table-10" />

**Table 10**. Solder bridges

<pre>
|            Bridge           |   State (1)   |                                      Description                                      |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB54, SB55 (X3 crystal) (2) | OFF           | X3, C33, C34, R35, and R37 provide a clock as shown in electrical                     |
|                             |               | schematics PF0/PD0/PH0, PF1/PD1/PH1 are disconnected from CN7.                        |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | ON            | PF0/PD0/PH0 and PF1/PD1/PH1 are connected to CN7. (R35, R37, and                      |
|                             |               | SB50 must not be fitted).                                                             |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB3, SB5, SB7,SB9           | ON [DEFAULT]  | Reserved, do not modify.                                                              |
| (DEFAULT)                   |               |                                                                                       |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB4,SB6, SB8,SB10           | OFF           | Reserved, do not modify.                                                              |
| (RESERVED)                  |               |                                                                                       |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB48, SB49                  | OFF           | X2, C31, C32, R34, and R36 deliver a 32 kHz clock. PC14, PC15 are not                 |
| (X2 crystal) (3)            |               | connected to CN7.                                                                     |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | ON            | PC14 and PC15 are only connected to CN7. Remove only R34, R36.                        |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB17 (B1-USER)              | ON [DEFAULT]  | B1 push button is connected to PC13.                                                  |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | OFF           | B1 push button is not connected to PC13.                                              |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB12 (NRST)                 | ON            | The NRST signal of the CN4 connector is connected to the NRST pin of the STM32.       |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | OFF           | The NRST signal of the CN4 connector is not connected to the NRST pin of the STM32.   |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB15 (SWO)                  | ON            | The SWO signal of the CN4 connector is connected to PB3.                              |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | OFF           | The SWO signal is not connected.                                                      |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB11 (STM_RST)              | OFF [DEFAULT] | No incidence on STM32F103CBT6 (ST-LINK MCU) NRST signal.                              |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | ON            | STM32F103CBT6 (ST-LINK MCU) NRST signal is connected to GND.                          |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB1 (USB-5V)                | OFF           | USB power management is functional.                                                   |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | ON            | USB power management is disabled.                                                     |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB2 (3.3 V)                 | ON            | Output of voltage regulator LD39050PU33R is connected to 3.3V.                        |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | OFF           | Output of voltage regulator LD39050PU33R is not connected.                            |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB21 (LD2-LED)              | ON            | Green user LED LD2 is connected to D13 of ARDUINO ® signal.                           |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | OFF           | Green user LED LD2 is not connected.                                                  |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB56,SB51 (A4 and A5)       | ON            | PC1 and PC0 (ADC in) are connected to A4 and A5 (pin 5 and pin 6) on                  |
|                             |               | ARDUINO ® connector CN8 and ST morpho connector CN7. Thus SB46 and                    |
|                             |               | SB52 must be OFF.                                                                     |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | OFF           | PC1 and PC0 (ADC in) are disconnected to A4 and A5 (pin 5 and pin 6) on               |
|                             |               | ARDUINO ® connector CN8 and ST morpho connector CN7.                                  |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB46,SB52                   | OFF           | PB9 and PB8 (I2C) are disconnected to A4 and A5 (pin 5 and pin 6) on                  |
| (I2C on A4 and A5)          |               | ARDUINO ® connector CN8 and ST morpho connector CN7.                                  |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | ON            | PB9 and PB8 (I2C) are connected to A4 and A5 (pin 5 and pin 6) on                     |
|                             |               | ARDUINO ® connector CN8 and ST morpho connector CN7 as I2C signals.                   |
|                             |               | Thus SB56 and SB51 must be OFF.                                                       |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB45 (VBAT/VLCD)            | ON            | VBAT or VLCD on STM32 is connected to VDD.                                            |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | OFF           | VBAT or VLCD on STM32 is not connected to VDD.                                        |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB57 (VDDA/VREF+)           | ON            | VDDA/VREF+ on STM32 is connected to VDD.                                              |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | OFF           | VDDA/VREF+ on STM32 is not connected to VDD and can be provided from                  |
|                             |               | pin 8 of CN5 (Used for external VREF+ provided by ARDUINO ® shield)                   |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB62, SB63 (USART)          | OFF [DEFAULT] | PA2 and PA3 on STM32 are disconnected to D1 and D0 (pin 2 and pin 1) on               |
|                             |               | ARDUINO ® connector CN9 and ST morpho connector CN10.                                 |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | ON            | PA2 and PA3 on STM32 are connected to D1 and D0 (pin 2 and pin 1) on                  |
|                             |               | ARDUINO ® connector CN9 and ST morpho connector CN10 as USART                         |
|                             |               | signals. Thus SB13 and SB14 must be OFF.                                              |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB13, SB14                  | ON [DEFAULT]  | PA2 and PA3 on STM32F103CBT6 (ST-LINK MCU) are connected to PA3                       |
| (ST-LINK-USART)             |               | and PA2 on STM32 to have USART communication between them. Thus                       |
|                             |               | SB61, SB62, and SB63 must be OFF.                                                     |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | OFF           | PA2 and PA3 on STM32F103CBT6 (ST-LINK MCU) are disconnected to PA3                    |
|                             |               | and PA2 on STM32.                                                                     |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
| SB16,SB50(MCO) (2)          | OFF           | MCO on STM32F103CBT6 (ST-LINK MCU) are disconnected to                                |
|                             |               | PF0/PD0/PH0 on STM32.                                                                 |
|                             |---------------|---------------------------------------------------------------------------------------|
|                             | ON            | MCO on STM32F103CBT6 (ST-LINK MCU) are connected to PF0/PD0/PH0 on STM32.             |
|-----------------------------|---------------|---------------------------------------------------------------------------------------|
</pre>

1.  The default SBx state is shown in bold.
2.  The default configuration depends on the board version. 
    Refer to Section 6.7.1: OSC clock supply for details.
3.  The default configuration depends on the board version. 
    Refer to Section 6.7.2: OSC 32 kHz clock supply for details.

All the other solder bridges present on the STM32 Nucleo board are used to configure
several I/Os and power supply pins for compatibility of features and pinout with STM32
supported.

All STM32 Nucleo boards are delivered with the solder-bridges configured according to the
target supported STM32.

<!-- *P27*/68 -->
[P27]: #P27
<a id="P27"/>


//6.10 Extension connectors
---------------------------

[Figure 10] to [Figure 26] show the signals connected by default to ARDUINO® Uno V3
connectors (CN5, CN6, CN8, CN9) and to ST morpho connector (CN7 and CN10), for each
STM32 Nucleo board.

> [!NOTE]
> 针对不同型号的芯片，主要变动在 CN7 29 31 33 pins
> *  PF0 
> *  PF1 
> *  VDD 
> *  PH0 
> *  PH1 
> *  VBAT 
> *  VLCD 


<!-- *P28*/68 -->
[P28]: #P28
<a id="P28"/>


[Figure 10]: #Figure-10
<a id="Figure-10" />

**Figure 10**. NUCLEO-F030R8

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                               NUCLEO-F030R8                          │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
    PF6 │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
    PF7 │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                       CN5  \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8 --[8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10--[7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4 --[6]--[27] [28]--│---- PB14
    PF0 │---[29] [30]--[2]---PA1    A2             D4    PB5 --[5]--[29] [30]--│---- PB13
    PF1 │---[31] [32]--[3]---PA4    A3             D3    PB3 --[4]--[31] [32]--│---- AGND
    VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10--[3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PB1    A5             D1    PA2 --[2]--[35] [36]--│---- PF5
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3 --[1]--[37] [38]--│---- PF4
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34385V3
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

[Figure 11]: #Figure-11
<a id="Figure-11" />

**Figure 11**. NUCLEO-F070RB

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F070RB                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PF0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PF1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VDD │---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv36554V1
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho


<!-- *P29*/68 -->
[P29]: #P29
<a id="P29"/>


[Figure 12]: #Figure-12
<a id="Figure-12" />

**Figure 12**. NUCLEO-F072RB

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F072RB                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PF0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PF1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VDD │---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34386V3
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho


[Figure 13]: #Figure-13
<a id="Figure-13" />

**Figure 13**. NUCLEO-F091RC


            ╭──────────────────────────────────────────────────────────────────────╮ 
            │                                                                      │
            │                                                                      │
            │                                                                      │
            │                              NUCLEO-F091RC                           │
            │                                                                      │
            │                                                                      │
            │                                                                      │
            └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
            ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
            │    CN7       CN6                               PC9------_      CN10  │
        PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
        PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
         VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    PF11 BOOT0--[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
         NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
         NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
        PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
        PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
        PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
         GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
        PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
        PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
        PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
        PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
        PF0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
        PF1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
        VDD │---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
        PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
        PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
            │         CN8                                               CN9        │
            ╰───────────\──────────────────────────────────/───────────────────────╯
                         \________________________________/
                                                                                MSv35752V1
             CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho


<!-- *P30*/68 -->
[P30]: #P30
<a id="P30"/>


[Figure 14]: #Figure-14
<a id="Figure-14" />

**Figure 14**. NUCLEO-F103RB

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F103RB                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PD0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PD1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VDD │---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34382V3
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

[Figure 15]: #Figure-15
<a id="Figure-15" />

**Figure 15**. NUCLEO-F302R8


        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F302R8                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PF0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PF1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34931V3
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho


<!-- *P31*/68 -->
[P31]: #P31
<a id="P31"/>


[Figure 16]: #Figure-16
<a id="Figure-16" />

**Figure 16**. NUCLEO-F303RE

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F302RE                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PF0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PF1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv35753V1
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

[Figure 17]: #Figure-17
<a id="Figure-17" />

**Figure 17**. NUCLEO-F334R8


        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F091RC                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PF0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PF1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34932V3
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

<!-- *P32*/68 -->
[P32]: #P32
<a id="P32"/>


[Figure 18]: #Figure-18
<a id="Figure-18" />

**Figure 18**. NUCLEO-F401RE

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F401RE                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34384V3
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

[Figure 19]: #Figure-19
<a id="Figure-19" />

**Figure 19**. NUCLEO-F411RE

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F411RE                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34933V3
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

<!-- *P33*/68 -->
[P33]: #P33
<a id="P33"/>


[Figure 20]: #Figure-20
<a id="Figure-20" />

**Figure 20**. NUCLEO-L053R8

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-L053R8                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VLCD│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34934V3
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

[Figure 21]: #Figure-21
<a id="Figure-21" />

**Figure 21**.  and NUCLEO-L010RB

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                           NUCLEO-L073RZ                              │
        │                           NUCLEO-L010RB                              │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VLCD│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv49223V1
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

<!-- *P34*/68 -->
[P34]: #P34
<a id="P34"/>


[Figure 22]: #Figure-22
<a id="Figure-22" />

**Figure 22**. NUCLEO-L152RE

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-L152RE                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VLCD│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34383Vv
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

[Figure 23]: #Figure-23
<a id="Figure-23" />

**Figure 23**. NUCLEO-L452RE

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-L452RE                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv44302V1
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho


<!-- *P35*/68 -->
[P35]: #P35
<a id="P35"/>


[Figure 24]: #Figure-24
<a id="Figure-24" />

**Figure 24**. NUCLEO-L476RG

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-L476RG                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VLCD│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv34383V3
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

[Figure 25]: #Figure-25
<a id="Figure-25" />

**Figure 25**. NUCLEO-F446RE


        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F446RE                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv44302V1
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho

<!-- *P36*/68 -->
[P36]: #P36
<a id="P36"/>


[Figure 26]: #Figure-26
<a id="Figure-26" />

**Figure 26**. NUCLEO-F410RB

        ╭──────────────────────────────────────────────────────────────────────╮ 
        │                                                                      │
        │                                                                      │
        │                                                                      │
        │                              NUCLEO-F410RB                           │
        │                                                                      │
        │                                                                      │
        │                                                                      │
        └───────────────┐ ┌──────────────────────────┐ ┌─────┐ ┌───────────────┘
        ┌───────────────┘ └──────────────────────────┘ └─────┘ └───────────────┐
        │    CN7       CN6                               PC9------_      CN10  │
    PC10│---[ 1] [2 ]--------PC11                  D15   PB8--[10]_\[ 1] [2 ]--│---- PC8
    PC12│---[ 3] [4 ]--------PD2                   D14   PB9--[ 9]_\[ 3] [4 ]--│---- PC6
     VDD│---[ 5] [6 ]--------E5V                  AVDD  AVDD--[ 8]_\[ 5] [6 ]--│---- PC5
    BOOT0---[ 7] [8 ]--------GND                   GND   GND--[ 7]_\[ 7] [8 ]--│---- U5V
     NC │---[ 9] [10]--[1]---NC     NC             D13   PA5--[ 6]_\[ 9] [10]--│---- NC
     NC │---[11] [12]--[2]---IOREF  IOREF          D12   PA6--[ 5]_\[11] [12]--│---- PA12
    PA13│---[13] [14]--[3]---RESET  RESET          D11   PA7--[ 4]_\[13] [14]--│---- PA11
    PA14│---[15] [16]--[4]---+3V3   +3V3           D10   PB6--[ 3]_\[15] [16]--│---- PB12
    PA15│---[17] [18]--[5]---+5V    +5V            D9    PC7--[ 2]_\[17] [18]--│---- PB11
     GND│---[19] [20]--[6]---GND    GND            D8    PA9--[ 1]_\[19] [20]--│---- GND
    PB7 │---[21] [22]--[7]---GND    GND                      CN5   \[21] [22]--│---- PB2
    PC13│---[23] [24]--[8]---VIN    VIN            D7    PA8   [8]--[23] [24]--│---- PB1
    PC14│---[25] [26]--------NC                    D6    PB10  [7]--[25] [26]--│---- PB15
    PC15│---[27] [28]--[1]---PA0    A1             D5    PB4   [6]--[27] [28]--│---- PB14
    PH0 │---[29] [30]--[2]---PA1    A2             D4    PB5   [5]--[29] [30]--│---- PB13
    PH1 │---[31] [32]--[3]---PA4    A3             D3    PB3   [4]--[31] [32]--│---- AGND
    VBAT│---[33] [34]--[4]---PB0    A4             D2    PA10  [3]--[33] [34]--│---- PC4
    PC2 │---[35] [36]--[5]---PC1    A5             D1    PA2   [2]--[35] [36]--│---- NC 
    PC3 │---[37] [38]--[6]---PC0    A6             D0    PA3   [1]--[37] [38]--│---- NC 
        │         CN8                                               CN9        │
        ╰───────────\──────────────────────────────────/───────────────────────╯
                     \________________________________/
                                                                            MSv38557V1
         CN5, CN6, CN8, CN9 for Arduino     CN7, CN10 headers used for Morpho


<!-- *P37*/68 -->
[P37]: #P37
<a id="P37"/>


//6.11 ARDUINO® connectors
---------------------------

CN5, CN6, CN8, and CN9 are female connectors compatible with ARDUINO® standard.
Most shields designed for ARDUINO® can fit the STM32 Nucleo boards.

The ARDUINO® connectors on the STM32 Nucleo board support the ARDUINO® Uno V3.

For compatibility with ARDUINO® Uno V1, apply the following modifications:

*   SB46 and SB52 must be ON,
*   SB51 and SB56 must be OFF to connect I²C on A4 (pin 5) and A5 (pin 6 of CN8).

> [!WARNING]
> Caution 1: The I/Os of STM32 microcontroller are 3.3 V compatible instead of 5 V 
> for ARDUINO® Uno V3.
> 
> Caution 2: SB57 must be removed before implementing ARDUINO® shield with VREF+ power being
> provided on CN5 pin 8. Refer to [Table 10]: Solder bridges for details on SB57.

[Table-11]: #Table-11
<a id="Table-11" />

[Table 11] to [Table 23] show the pin assignment of each main STM32 microcontroller on
ARDUINO® connectors.

[Table-11]: #Table-11
<a id="Table-11" />

**Table 11**. ARDUINO® connectors on NUCLEO-F030R8, NUCLEO-F070RB, NUCLEO-F072RB, NUCLEO-F091RC

<pre>
|    Connector     | Pin | Pin name |   STM32 pin    |             Function             |
|------------------|-----|----------|----------------|----------------------------------|
|                                     Left connectors                                   |
|------------------|-----|----------|----------------|----------------------------------|
| CN6 power        |   1 | NC       | -              | -                                |
|                  |   2 | IOREF    | -              | 3.3V Ref                         |
|                  |   3 | RESET    | NRST           | RESET                            |
|                  |   4 | +3.3V    | -              | 3.3V input/output                |
|                  |   5 | +5V      | -              | 5V output                        |
|                  |   6 | GND      | -              | ground                           |
|                  |   7 | GND      | -              | ground                           |
|                  |   8 | VIN      | -              | Power input                      |
|------------------|-----|----------|----------------|----------------------------------|
| CN8 analog       |   1 | A0       | PA0            | ADC_IN0                          |
|                  |   2 | A1       | PA1            | ADC_IN1                          |
|                  |   3 | A2       | PA4            | ADC_IN4                          |
|                  |   4 | A3       | PB0            | ADC_IN8                          |
|                  |   5 | A4       | PC1 or PB9 (1) | ADC_IN11 (PC1) or I2C1_SDA (PB9) |
|                  |   6 | A5       | PC0 or PB8 (1) | ADC_IN10 (PC0) or I2C1_SCL (PB8) |
|------------------|-----|----------|----------------|----------------------------------|
|                                    Right connectors                                   |
|------------------|-----|----------|----------------|----------------------------------|
| CN5 digital      |  10 | D15      | PB8            | I2C1_SCL                         |
|                  |   9 | D14      | PB9            | I2C1_SDA                         |
|                  |   8 | AREF     | -              | AVDD                             |
|                  |   7 | GND      | -              | ground                           |
|                  |   6 | D13      | PA5            | SPI1_SCK                         |
|                  |   5 | D12      | PA6            | SPI1_MISO                        |
|                  |   4 | D11      | PA7            | TIM17_CH1 or SPI1_MOSI           |
|                  |   3 | D10      | PB6            | TIM16_CH1N or SPI1_CS            |
|                  |   2 | D9       | PC7            | TIM3_CH2                         |
|                  |   1 | D8       | PA9            | -                                |
|------------------|-----|----------|----------------|----------------------------------|
| CN9 digital      |   8 | D7       | PA8            | -                                |
|                  |   7 | D6       | PB10           | TIM2_CH3 (2)                     |
|                  |   6 | D5       | PB4            | TIM3_CH1                         |
|                  |   5 | D4       | PB5            | -                                |
|                  |   4 | D3       | PB3            | TIM2_CH2 (3)                     |
|                  |   3 | D2       | PA10           | -                                |
|                  |   2 | D1       | PA2            | USART2_TX                        |
|                  |   1 | D0       | PA3            | USART2_RX                        |
</pre>

1. Refer to [Table 10]: Solder bridges for details.
2. PWM is not supported by D6 on STM32F030 and STM32F070 since the timer is not available on PB10.
3. PWM is not supported by D3 on STM32F030 and STM32F070 since the timer is not available on PB3.

<!-- *P38*/68 -->
[P38]: #P38
<a id="P38"/>

<!-- *P39*/68 -->
[P39]: #P39
<a id="P39"/>


[Table-12]: #Table-12
<a id="Table-12" />

**Table 12**. ARDUINO® connectors on NUCLEO-F103RB

<pre>
|    Connector     | Pin | Pin name |   STM32 pin    |            Function            |
|------------------|-----|----------|----------------|--------------------------------|
|                                     Left connectors                                 |
|------------------|-----|----------|----------------|--------------------------------|
| CN6 power        |   1 | NC       | -              | -                              |
|                  |   2 | IOREF    | -              | 3.3V Ref                       |
|                  |   3 | RESET    | NRST           | RESET                          |
|                  |   4 | +3.3V    | -              | 3.3V input/output              |
|                  |   5 | +5V      | -              | 5V output                      |
|                  |   6 | GND      | -              | ground                         |
|                  |   7 | GND      | -              | ground                         |
|                  |   8 | VIN      | -              | Power input                    |
|------------------|-----|----------|----------------|--------------------------------|
| CN8 analog       |   1 | A0       | PA0            | ADC_0                          |
|                  |   2 | A1       | PA1            | ADC_1                          |
|                  |   3 | A2       | PA4            | ADC_4                          |
|                  |   4 | A3       | PB0            | ADC_8                          |
|                  |   5 | A4       | PC1 or PB9 (1) | ADC_11 (PC1) or I2C1_SDA (PB9) |
|                  |   6 | A5       | PC0 or PB8 (1) | ADC_10 (PC0) or I2C1_SCL (PB8) |
|------------------|-----|----------|----------------|--------------------------------|
|                                    Right connectors                                 |
|------------------|-----|----------|----------------|--------------------------------|
| CN5 digital      |     |          |                |                                |
|                  |  10 | D15      | PB8            | I2C1_SCL                       |
|                  |   9 | D14      | PB9            | I2C1_SDA                       |
|                  |   8 | AREF     | -              | AVDD                           |
|                  |   7 | GND      | -              | ground                         |
|                  |   6 | D13      | PA5            | SPI1_SCK                       |
|                  |   5 | D12      | PA6            | SPI1_MISO                      |
|                  |   4 | D11      | PA7            | TIM3_CH2 or SPI1_MOSI          |
|                  |   3 | D10      | PB6            | TIM4_CH1 or SPI1_CS            |
|                  |   2 | D9       | PC7            | TIM3_CH2                       |
|                  |   1 | D8       | PA9            | -                              |
|------------------|-----|----------|----------------|--------------------------------|
| CN9 digital      |   8 | D7       | PA8            | -                              |
|                  |   7 | D6       | PB10           | TIM2_CH3                       |
|                  |   6 | D5       | PB4            | TIM3_CH1                       |
|                  |   5 | D4       | PB5            | -                              |
|                  |   4 | D3       | PB3            | TIM2_CH2                       |
|                  |   3 | D2       | PA10           | -                              |
|                  |   2 | D1       | PA2            | USART2_TX                      |
|                  |   1 | D0       | PA3            | USART2_RX                      |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P40*/68 -->
[P40]: #P40
<a id="P40"/>


[Table-13]: #Table-13
<a id="Table-13" />

**Table 13**. ARDUINO® connectors on NUCLEO-F302R8

<pre>
|    Connector     | Pin | Pin name |   STM32 pin    |             Function            |
|------------------|-----|----------|----------------|---------------------------------|
|                                    Left connectors                                   |
|------------------|-----|----------|----------------|---------------------------------|
| CN6 power        |   1 | NC       | -              | -                               |
|                  |   2 | IOREF    | -              | 3.3V Ref                        |
|                  |   3 | RESET    | NRST           | RESET                           |
|                  |   4 | +3.3V    | -              | 3.3V input/output               |
|                  |   5 | +5V      | -              | 5V output                       |
|                  |   6 | GND      | -              | ground                          |
|                  |   7 | GND      | -              | ground                          |
|                  |   8 | VIN      | -              | Power input                     |
|------------------|----|----------|----------------|----------------------------------|
| CN8 analog       |   1 | A0       | PA0            | ADC_IN1                         |
|                  |   2 | A1       | PA1            | ADC_IN2                         |
|                  |   3 | A2       | PA4            | ADC_IN5                         |
|                  |   4 | A3       | PB0            | ADC_IN11                        |
|                  |   5 | A4       | PC1 or PB9 (1) | ADC_IN7 (PC1) or I2C1_SDA (PB9) |
|                  |   6 | A5       | PC0 or PB8 (1) | ADC_IN6 (PC0) or I2C1_SCL (PB8) |
|------------------|-----|----------|----------------|---------------------------------|
|                                   Right connectors                                   |
|------------------|-----|----------|----------------|---------------------------------|
| CN5 digital      |  10 | D15      | PB8            | I2C1_SCL                        |
|                  |   9 | D14      | PB9            | I2C1_SDA                        |
|                  |   8 | AREF     | -              | AVDD                            |
|                  |   7 | GND      | -              | ground                          |
|                  |   6 | D13      | PB13           | SPI2_SCK                        |
|                  |   5 | D12      | PB14           | SPI2_MISO                       |
|                  |   4 | D11      | PB15           | TIM15_CH2 or SPI2_MOSI          |
|                  |   3 | D10      | PB6            | TIM16_CH1N or SPI2_CS           |
|                  |   2 | D9       | PC7            | -                               |
|                  |   1 | D8       | PA9            | -                               |
|------------------|-----|----------|----------------|---------------------------------|
| CN9 digital      |   8 | D7       | PA8            | -                               |
|                  |   7 | D6       | PB10           | TIM2_CH3                        |
|                  |   6 | D5       | PB4            | TIM16_CH1                       |
|                  |   5 | D4       | PB5            | -                               |
|                  |   4 | D3       | PB3            | TIM2_CH2                        |
|                  |   3 | D2       | PA10           | -                               |
|                  |   2 | D1       | PA2            | USART2_TX                       |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P41*/68 -->
[P41]: #P41
<a id="P41"/>

> [!WARNING]
> Warning: PWM is not supported by D9 on STM32F302 since the timer is not
> available on PC7.

[Table-14]: #Table-14
<a id="Table-14" />

**Table 14**. ARDUINO® connectors on NUCLEO-F303RE

<pre>
|    Connector     | Pin | Pin name |   STM32 pin    |              Function             |
|------------------|-----|----------|----------------|-----------------------------------|
|                                     Left connectors                                    |
|------------------|-----|----------|----------------|-----------------------------------|
| CN6 power        |   1 | NC       | -              | -                                 |
|                  |   2 | IOREF    | -              | 3.3V Ref                          |
|                  |   3 | RESET    | NRST           | RESET                             |
|                  |   4 | +3.3V    | -              | 3.3V input/output                 |
|                  |   5 | +5V      | -              | 5V output                         |
|                  |   6 | GND      | -              | ground                            |
|                  |   7 | GND      | -              | ground                            |
|                  |   8 | VIN      | -              | Power input                       |
|------------------|-----|----------|----------------|-----------------------------------|
| CN8 analog       |   1 | A0       | PA0            | ADC1_IN1                          |
|                  |   2 | A1       | PA1            | ADC1_IN2                          |
|                  |   3 | A2       | PA4            | ADC2_IN1                          |
|                  |   4 | A3       | PB0            | ADC3_IN12                         |
|                  |   5 | A4       | PC1 or PB9 (1) | ADC12_IN7 (PC1) or I2C1_SDA (PB9) |
|                  |   6 | A5       | PC0 or PB8 (1) | ADC12_IN6 (PC0) or I2C1_SCL (PB8) |
|------------------|-----|----------|----------------|-----------------------------------|
|                                    Right connectors                                    |
|------------------|-----|----------|----------------|-----------------------------------|
| CN5 digital      |  10 | D15      | PB8            | I2C1_SCL                          |
|                  |   9 | D14      | PB9            | I2C1_SDA                          |
|                  |   8 | AREF     | -              | AVDD                              |
|                  |   7 | GND      | -              | ground                            |
|                  |   6 | D13      | PA5            | SPI1_SCK                          |
|                  |   5 | D12      | PA6            | SPI1_MISO                         |
|                  |   4 | D11      | PA7            | TIM17_CH1 or SPI1_MOSI            |
|                  |   3 | D10      | PB6            | TIM4_CH1 or SPI1_CS               |
|                  |   2 | D9       | PC7            | TIM3_CH2                          |
|                  |   1 | D8       | PA9            | -                                 |
|------------------|-----|----------|----------------|-----------------------------------|
| CN9 digital      |   8 | D7       | PA8            | -                                 |
|                  |   7 | D6       | PB10           | TIM2_CH3                          |
|                  |   6 | D5       | PB4            | TIM3_CH1                          |
|                  |   5 | D4       | PB5            | -                                 |
|                  |   4 | D3       | PB3            | TIM2_CH2                          |
|                  |   3 | D2       | PA10           | -                                 |
|                  |   2 | D1       | PA2            | USART2_TX                         |
|                  |   1 | D0       | PA3            | USART2_RX                         |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P42*/68 -->
[P42]: #P42
<a id="P42"/>


[Table-15]: #Table-15
<a id="Table-15" />

**Table 15**. ARDUINO® connectors on NUCLEO-F334R8

<pre>
|    Connector     | Pin | Pin name |   STM32 pin    |             Function            |
|------------------|-----|----------|----------------|---------------------------------|
|                                     Left connectors                                   |
|------------------|-----|----------|----------------|----------------------------------|
| CN6 power        |   1 | NC       | -              | -                               |
|                  |   2 | IOREF    | -              | 3.3V Ref                        |
|                  |   3 | RESET    | NRST           | RESET                           |
|                  |   4 | +3.3V    | -              | 3.3V input/output               |
|                  |   5 | +5V      | -              | 5V output                       |
|                  |   6 | GND      | -              | ground                          |
|                  |   7 | GND      | -              | ground                          |
|                  |   8 | VIN      | -              | Power input                     |
|------------------|-----|----------|----------------|----------------------------------|
| CN8 analog       |   1 | A0       | PA0            | ADC1_IN1                        |
|                  |   2 | A1       | PA1            | ADC1_IN2                        |
|                  |   3 | A2       | PA4            | ADC2_IN1                        |
|                  |   4 | A3       | PB0            | ADC1_IN11                       |
|                  |   5 | A4       | PC1 or PB9 (1) | ADC_IN7 (PC1) or I2C1_SDA (PB9) |
|                  |   6 | A5       | PC0 or PB8 (1) | ADC_IN6 (PC0) or I2C1_SCL (PB8) |
|------------------|-----|----------|----------------|---------------------------------|
|                                    Right connectors                                  |
|------------------|-----|----------|----------------|---------------------------------|
| CN5 digital      |  10 | D15      | PB8            | I2C1_SCL                        |
|                  |   9 | D14      | PB9            | I2C1_SDA                        |
|                  |   8 | AREF     | -              | AVDD                            |
|                  |   7 | GND      | -              | ground                          |
|                  |   6 | D13      | PA5            | SPI1_SCK                        |
|                  |   5 | D12      | PA6            | SPI1_MISO                       |
|                  |   4 | D11      | PA7            | TIM17_CH1 or SPI1_MOSI          |
|                  |   3 | D10      | PB6            | TIM16_CH1N or SPI1_CS           |
|                  |   2 | D9       | PC7            | TIM3_CH2                        |
|                  |   1 | D8       | PA9            | -                               |
|------------------|-----|----------|----------------|----------------------------------|
| CN9 digital      |   8 | D7       | PA8            | -                               |
|                  |   7 | D6       | PB10           | TIM2_CH3                        |
|                  |   6 | D5       | PB4            | TIM3_CH1                        |
|                  |   5 | D4       | PB5            | -                               |
|                  |   4 | D3       | PB3            | TIM2_CH2                        |
|                  |   3 | D2       | PA10           | -                               |
|                  |   2 | D1       | PA2            | USART2_TX                       |
|                  |   1 | D0       | PA3            | USART2_RX                       |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P43*/68 -->
[P43]: #P43
<a id="P43"/>


[Table-16]: #Table-16
<a id="Table-16" />

**Table 16**. ARDUINO® connectors on NUCLEO-F401RE and NUCLEO-F411RE

<pre>
|    Connector    | Pin | Pin name |   STM32 pin    |             Function            |
|-----------------|-----|----------|----------------|---------------------------------|
|                                     Left connectors                                 |
|-----------------|-----|----------|----------------|---------------------------------|
| CN6 power       |   1 | NC       | -              | -                               |
|                 |   2 | IOREF    | -              | 3.3V Ref                        |
|                 |   3 | RESET    | NRST           | RESET                           |
|                 |   4 | +3.3V    | -              | 3.3V input/output               |
|                 |   5 | +5V      | -              | 5V output                       |
|                 |   6 | GND      | -              | ground                          |
|                 |   7 | GND      | -              | ground                          |
|                 |   8 | VIN      | -              | Power input                     |
|-----------------|-----|----------|----------------|---------------------------------|
| CN8 analog      |   1 | A0       | PA0            | ADC1_0                          |
|                 |   2 | A1       | PA1            | ADC1_1                          |
|                 |   3 | A2       | PA4            | ADC1_4                          |
|                 |   4 | A3       | PB0            | ADC1_8                          |
|                 |   5 | A4       | PC1 or PB9 (1) | ADC1_11 (PC1) or I2C1_SDA (PB9) |
|                 |   6 | A5       | PC0 or PB8 (1) | ADC1_10 (PC0) or I2C1_SCL (PB8) |
|-----------------|-----|----------|----------------|---------------------------------|
|                                    Right connectors                                 |
|-----------------|-----|----------|----------------|---------------------------------|
| CN5 digital     |  10 | D15      | PB8            | I2C1_SCL                        |
|                 |   9 | D14      | PB9            | I2C1_SDA                        |
|                 |   8 | AREF     | -              | AVDD                            |
|                 |   7 | GND      | -              | ground                          |
|                 |   6 | D13      | PA5            | SPI1_SCK                        |
|                 |   5 | D12      | PA6            | SPI1_MISO                       |
|                 |   4 | D11      | PA7            | TIM1_CH1N or SPI1_MOSI          |
|                 |   3 | D10      | PB6            | TIM4_CH1 or SPI1_CS             |
|                 |   2 | D9       | PC7            | TIM3_CH2                        |
|                 |   1 | D8       | PA9            | -                               |
|-----------------|-----|----------|----------------|---------------------------------|
| CN9 digital     |   8 | D7       | PA8            | -                               |
|                 |   7 | D6       | PB10           | TIM2_CH3                        |
|                 |   6 | D5       | PB4            | TIM3_CH1                        |
|                 |   5 | D4       | PB5            | -                               |
|                 |   4 | D3       | PB3            | TIM2_CH2                        |
|                 |   3 | D2       | PA10           | -                               |
|                 |   2 | D1       | PA2            | USART2_TX                       |
|                 |   1 | D0       | PA3            | USART2_RX                       |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P44*/68 -->
[P44]: #P44
<a id="P44"/>

<!-- *P45*/68 -->
[P45]: #P45
<a id="P45"/>


[Table-17]: #Table-17
<a id="Table-17" />

**Table 17**. ARDUINO® connectors on NUCLEO-L053R8

<pre>
|    Connector     | Pin | Pin name |   STM32 pin    |             Function             |
|------------------|-----|----------|----------------|----------------------------------|
|                                     Left connectors                                   |
|------------------|-----|----------|----------------|----------------------------------|
| CN6 power        |   1 | NC       | -              | -                                |
|                  |   2 | IOREF    | -              | 3.3V Ref                         |
|                  |   3 | RESET    | NRST           | RESET                            |
|                  |   4 | +3.3V    | -              | 3.3V input/output                |
|                  |   5 | +5V      | -              | 5V output                        |
|                  |   6 | GND      | -              | ground                           |
|                  |   7 | GND      | -              | ground                           |
|                  |   8 | VIN      | -              | Power input                      |
|------------------|-----|----------|----------------|----------------------------------|
| CN8 analog       |   1 | A0       | PA0            | ADC_IN0                          |
|                  |   2 | A1       | PA1            | ADC_IN1                          |
|                  |   3 | A2       | PA4            | ADC_IN4                          |
|                  |   4 | A3       | PB0            | ADC_IN8                          |
|                  |   5 | A4       | PC1 or PB9 (1) | ADC_IN11 (PC1) or I2C1_SDA (PB9) |
|                  |   6 | A5       | PC0 or PB8 (1) | ADC_IN10 (PC0) or I2C1_SCL (PB8) |
|------------------|-----|----------|----------------|----------------------------------|
|                                    Right connectors                                   |
|------------------|-----|----------|----------------|----------------------------------|
| CN5 digital      |  10 | D15      | PB8            | I2C1_SCL                         |
|                  |   9 | D14      | PB9            | I2C1_SDA                         |
|                  |   8 | AREF     | -              | AVDD                             |
|                  |   7 | GND      | -              | ground                           |
|                  |   6 | D13      | PA5            | SPI1_SCK                         |
|                  |   5 | D12      | PA6            | SPI1_MISO                        |
|                  |   4 | D11      | PA7            | TIM12_CH2 or SPI1_MOSI           |
|                  |   3 | D10      | PB6            | SPI1_CS                          |
|                  |   2 | D9       | PC7            | TIM12_CH2                        |
|                  |   1 | D8       | PA9            | -                                |
|------------------|-----|----------|----------------|----------------------------------|
| CN9 digital      |   8 | D7       | PA8            | -                                |
|                  |   7 | D6       | PB10           | TIM2_CH3                         |
|                  |   6 | D5       | PB4            | TIM12_CH1                        |
|                  |   5 | D4       | PB5            | -                                |
|                  |   4 | D3       | PB3            | TIM2_CH2                         |
|                  |   3 | D2       | PA10           | -                                |
|                  |   2 | D1       | PA2            | USART2_TX                        |
|                  |   1 | D0       | PA3            | USART2_RX                        |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P46*/68 -->
[P46]: #P46
<a id="P46"/>

> [!WARNING]
> 
> Warning: PWM is not supported by D10 on STM32L053 since the timer is not
> available on PB6.

[Table-18]: #Table-18
<a id="Table-18" />

**Table 18**. ARDUINO® connectors on NUCLEO-L010RB and NUCLEO-L073RZ

<pre>
|  Connector  |  Pin   | Pin name |   STM32 pin    |             Function             |
|-------------|--------|----------|----------------|----------------------------------|
|                                   Left connectors                                   |
|-------------|--------|----------|----------------|----------------------------------|
| CN6 power   | 1      | NC       | -              | -                                |
|             | 2      | IOREF    | -              | 3.3V Ref                         |
|             | 3      | RESET    | NRST           | RESET                            |
|             | 4      | +3.3V    | -              | 3.3V input/output                |
|             | 5      | +5V      | -              | 5V output                        |
|             | 6      | GND      | -              | ground                           |
|             | 7      | GND      | -              | ground                           |
|             | 8      | VIN      | -              | Power input                      |
|-------------|--------|----------|----------------|----------------------------------|
| CN8  analog | 1      | A0       | PA0            | ADC_IN0                          |
|             | 2      | A1       | PA1            | ADC_IN1                          |
|             | 3      | A2       | PA4            | ADC_IN4                          |
|             | 4      | A3       | PB0            | ADC_IN8                          |
|             | 5      | A4       | PC1 or PB9 (1) | ADC_IN11 (PC1) or I2C1_SDA (PB9) |
|             | 6      | A5       | PC0 or PB8 (1) | ADC_IN10 (PC0) or I2C1_SCL (PB8) |
|-------------|--------|----------|----------------|----------------------------------|
|                                  Right connectors                                   |
|-------------|--------|----------|----------------|----------------------------------|
| CN5 digital | 10     | D15      | PB8            | I2C1_SCL                         |
|             | 9      | D14      | PB9            | I2C1_SDA                         |
|             | 8      | AREF     | -              | AVDD                             |
|             | 7      | GND      | -              | ground                           |
|             | 6      | D13      | PA5            | SPI1_SCK                         |
|             | 5      | D12      | PA6            | SPI1_MISO                        |
|             | 4      | D11      | PA7            | TIM22_CH2 or SPI1_MOSI           |
|             | 3      | D10      | PB6            | SPI1_CS                          |
|             | 2      | D9       | PC7            | TIM3_CH2                         |
|             | 1      | D8       | PA9            | -                                |
|-------------|--------|----------|----------------|----------------------------------|
| CN9 digital | 8      | D7       | PA8            | -                                |
|             | 7      | D6       | PB10           | TIM2_CH3                         |
|             | 6      | D5       | PB4            | TIM3_CH1                         |
|             | 5      | D4       | PB5            | -                                |
|             | 4      | D3       | PB3            | TIM2_CH2                         |
|             | 3      | D2       | PA10           | -                                |
|             | 2      | D1       | PA2            | USART2_TX                        |
|             | 1      | D0       | PA3            | USART2_RX                        |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

> [!WARNING]
> Warning: PWM is not supported by D10 on STM32L010 and STM32L073 since the
> timer is not available on PB6.

<!-- *P47*/68 -->
[P47]: #P47
<a id="P47"/>

[Table-19]: #Table-19
<a id="Table-19" />

**Table 19**. ARDUINO® connectors on NUCLEO-F446RE

<pre>
|    Connector     | Pin | Pin name |   STM32 pin    |               Function              |
|------------------|-----|----------|----------------|-------------------------------------|
|                                     Left connectors                                      |
|------------------|-----|----------|----------------|-------------------------------------|
| CN6 power        |   1 | NC       | -              | -                                   |
|                  |   2 | IOREF    | -              | 3.3V Ref                            |
|                  |   3 | RESET    | NRST           | RESET                               |
|                  |   4 | +3.3V    | -              | 3.3V input/output                   |
|                  |   5 | +5V      | -              | 5V output                           |
|                  |   6 | GND      | -              | ground                              |
|                  |   7 | GND      | -              | ground                              |
|                  |   8 | VIN      | -              | Power input                         |
|------------------|-----|----------|----------------|-------------------------------------|
| CN8 analog       |   1 | A0       | PA0            | ADC123_IN0                          |
|                  |   2 | A1       | PA1            | ADC123_IN1                          |
|                  |   3 | A2       | PA4            | ADC12_IN4                           |
|                  |   4 | A3       | PB0            | ADC12_IN8                           |
|                  |   5 | A4       | PC1 or PB9 (1) | ADC123_IN11 (PC1) or I2C1_SDA (PB9) |
|                  |   6 | A5       | PC0 or PB8(1)  | ADC123_IN10 (PC0) or I2C1_SCL (PB8) |
|------------------|-----|----------|----------------|-------------------------------------|
|                                    Right connectors                                      |
|------------------|-----|----------|----------------|-------------------------------------|
| CN5 digital      |  10 | D15      | PB8            | I2C1_SCL                            |
|                  |   9 | D14      | PB9            | I2C1_SDA                            |
|                  |   8 | AREF     | -              | AVDD                                |
|                  |   7 | GND      | -              | ground                              |
|                  |   6 | D13      | PA5            | SPI1_SCK                            |
|                  |   5 | D12      | PA6            | SPI1_MISO                           |
|                  |   4 | D11      | PA7            | TIM14_CH1 bit-or SPI1_MOSI          |
|                  |   3 | D10      | PB6            | TIM4_CH1 bit-or SPI1_CS             |
|                  |   2 | D9       | PC7            | TIM8_CH2                            |
|                  |   1 | D8       | PA9            | -                                   |
|------------------|-----|----------|----------------|-------------------------------------|
| CN9 digital      |   8 | D7       | PA8            | -                                   |
|                  |   7 | D6       | PB10           | TIM2_CH3                            |
|                  |   6 | D5       | PB4            | TIM3_CH1                            |
|                  |   5 | D4       | PB5            | -                                   |
|                  |   4 | D3       | PB3            | TIM2_CH2                            |
|                  |   3 | D2       | PA10           | -                                   |
|                  |   2 | D1       | PA2            | USART2_TX                           |
|                  |   1 | D0       | PA3            | USART2_RX                           |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P48*/68 -->
[P48]: #P48
<a id="P48"/>


<!-- *P49*/68 -->
[P49]: #P49
<a id="P49"/>


[Table-20]: #Table-20
<a id="Table-20" />

**Table 20**. ARDUINO® connectors on NUCLEO-F410RB

<pre>
|  Connector  | Pin | Pin name |   STM32 pin    |             Function            |
|-------------|-----|----------|----------------|---------------------------------|
|                                Left connectors                                  |
|-------------|-----|----------|----------------|---------------------------------|
| CN6 power   |   1 | NC       | -              | -                               |
|             |   2 | IOREF    | -              | 3.3V Ref                        |
|             |   3 | RESET    | NRST           | RESET                           |
|             |   4 | +3.3V    | -              | 3.3V input/output               |
|             |   5 | +5V      | -              | 5V output                       |
|             |   6 | GND      | -              | ground                          |
|             |   7 | GND      | -              | ground                          |
|             |   8 | VIN      | -              | Power input                     |
|-------------|-----|----------|----------------|---------------------------------|
| CN8  analog |   1 | A0       | PA0            | ADC1_0                          |
|             |   2 | A1       | PA1            | ADC1_1                          |
|             |   3 | A2       | PA4            | ADC1_4                          |
|             |   4 | A3       | PB0            | ADC1_8                          |
|             |   5 | A4       | PC1 or PB9 (1) | ADC1_11 (PC1) or I2C1_SDA (PB9) |
|             |   6 | A5       | PC0 or PB8 (1) | ADC1_10 (PC0) or I2C1_SCL (PB8) |
|-------------|-----|----------|----------------|---------------------------------|
|                               Right connectors                                  |
|-------------|-----|----------|----------------|---------------------------------|
| CN5 digital |  10 | PB8      | D15            | I2C1_SCL                        |
|             |   9 | PB9      | D14            | I2C1_SDA                        |
|             |   8 | - AREF   | AVDD           |                                 |
|             |   7 | - GND    | ground         |                                 |
|             |   6 | PA5      | D13            | SPI1_SCK                        |
|             |   5 | PA6      | D12            | SPI1_MISO                       |
|             |   4 | PA7      | D11            | TIM1_CH1N bit-or SPI1_MOSI      |
|             |   3 | PB6      | D10            | SPI1_CS                         |
|             |   2 | PC7      | D9             | -                               |
|             |   1 | PA9      | D8             | -                               |
|-------------|-----|----------|----------------|---------------------------------|
| CN9 digital |   8 | PA8      | D7             | -                               |
|             |   7 | PB10     | D6             | -                               |
|             |   6 | PB4      | D5             | -                               |
|             |   5 | PB5      | D4             | -                               |
|             |   4 | PB3      | D3             | -                               |
|             |   3 | PA10     | D2             | -                               |
|             |   2 | PA2      | D1             | USART2_TX                       |
|             |   1 | PA3      | D0             | USART2_RX                       |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

> [!WORN]
> Warning: PWM is not supported by D3, D5, D6, D9 and D10 on STM32F410RB
> since timer is not available on PB6, PC7, PB10, PB4, PB3.

<!-- *P50*/68 -->
[P50]: #P50
<a id="P50"/>

[Table-21]: #Table-21
<a id="Table-21" />

**Table 21**. ARDUINO® connectors on NUCLEO-L152RE

<pre>
|  Connector  | Pin | Pin name |   STM32 pin    |             Function             |
|-------------|-----|----------|----------------|----------------------------------|
|                                Left connectors                                   |
|-------------|-----|----------|----------------|----------------------------------|
| CN6 power   | 1   | NC       | -              | -                                |
|             | 2   | IOREF    | -              | 3.3V Ref                         |
|             | 3   | RESET    | NRST           | RESET                            |
|             | 4   | +3.3V    | -              | 3.3V input/output                |
|             | 5   | +5V      | -              | 5V output                        |
|             | 6   | GND      | -              | ground                           |
|             | 7   | GND      | -              | ground                           |
|             | 8   | VIN      | -              | Power input                      |
|-------------|-----|----------|----------------|----------------------------------|
| CN8 analog  | 1   | A0       | PA0            | ADC_IN0                          |
|             | 2   | A1       | PA1            | ADC_IN1                          |
|             | 3   | A2       | PA4            | ADC_IN4                          |
|             | 4   | A3       | PB0            | ADC_IN8                          |
|             | 5   | A4       | PC1 or PB9 (1) | ADC_IN11 (PC1) or I2C1_SDA (PB9) |
|             | 6   | A5       | PC0 or PB8 (1) | ADC_IN10 (PC0) or I2C1_SCL (PB8) |
|-------------|-----|----------|----------------|----------------------------------|
|                               Right connectors                                   |
|-------------|-----|----------|----------------|----------------------------------|
| CN5 digital | 1   | D15      | PB8            | I2C1_SCL                         |
|             | 9   | D14      | PB9            | I2C1_SDA                         |
|             | 8   | AREF     | -              | AVDD                             |
|             | 7   | GND      | -              | ground                           |
|             | 6   | D13      | PA5            | SPI1_SCK                         |
|             | 5   | D12      | PA6            | SPI1_MISO                        |
|             | 4   | D11      | PA7            | TIM11_CH1 or SPI1_MOSI           |
|             | 3   | D10      | PB6            | TIM4_CH1 or SPI1_CS              |
|             | 2   | D9       | PC7            | TIM3_CH2                         |
|             | 1   | D8       | PA9            | -                                |
|-------------|-----|----------|----------------|----------------------------------|
| CN9 digital | 8   | D7       | PA8            | -                                |
|             | 7   | D6       | PB10           | TIM2_CH3                         |
|             | 6   | D5       | PB4            | TIM3_CH1                         |
|             | 5   | D4       | PB5            | -                                |
|             | 4   | D3       | PB3            | TIM2_CH2                         |
|             | 3   | D2       | PA10           | -                                |
|             | 2   | D1       | PA2            | USART2_TX                        |
|             | 1   | D0       | PA3            | USART2_RX                        |                                  |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P51*/68 -->
[P51]: #P51
<a id="P51"/>

[Table-22]: #Table-22
<a id="Table-22" />

**Table 22**. ARDUINO® connectors on NUCLEO-L452RE

<pre>
|  Connector  | Pin | Pin name |   STM32 pin    |             Function             |
|-------------|-----|----------|----------------|----------------------------------|
|                                Left connectors                                   |
|-------------|-----|----------|----------------|----------------------------------|
| CN6 power   |   1 | NC       | -              | -                                |
|             |   2 | IOREF    | -              | 3.3V Ref                         |
|             |   3 | RESET    | NRST           | RESET                            |
|             |   4 | +3.3V    | -              | 3.3V input/output                |
|             |   5 | +5V      | -              | 5V output                        |
|             |   6 | GND      | -              | ground                           |
|             |   7 | GND      | -              | ground                           |
|             |   8 | VIN      | -              | Power input                      |
|-------------|-----|----------|----------------|----------------------------------|
| CN8 analog  |   1 | A0       | PA0            | ADC1_IN5                         |
|             |   2 | A1       | PA1            | ADC1_IN6                         |
|             |   3 | A2       | PA4            | ADC1_IN9                         |
|             |   4 | A3       | PB0            | ADC1_IN15                        |
|             |   5 | A4       | PC1 or PB9 (1) | ADC1_IN2 (PC1) or I2C1_SDA (PB9) |
|             |   6 | A5       | PC0 or PB8 (1) | ADC1_IN1 (PC0) or I2C1_SCL (PB8) |
|-------------|-----|----------|----------------|----------------------------------|
|                                Left connectors                                   |
|-------------|-----|----------|----------------|----------------------------------|
|-------------|-----|----------|----------------|----------------------------------|
| CN5 digital |  10 | D15      | PB8            | I2C1_SCL                         |
|             |   9 | D14      | PB9            | I2C1_SDA                         |
|             |   8 | AREF     | -              | AVDD                             |
|             |   7 | GND      | -              | ground                           |
|             |   6 | D13      | PA5            | SPI1_SCK                         |
|             |   5 | D12      | PA6            | SPI1_MISO                        |
|             |   4 | D11      | PA7            | TIM1_CH1N or SPI1_MOSI           |
|             |   3 | D10      | PB6            | TIM16_CH1N or SPI1_CS            |
|             |   2 | D9       | PC7            | TIM3_CH2                         |
|             |   1 | D8       | PA9            | -                                |
|-------------|-----|----------|----------------|----------------------------------|
| CN9 digital |   8 | D7       | PA8            | -                                |
|             |   7 | D6       | PB10           | TIM2_CH3                         |
|             |   6 | D5       | PB4            | TIM3_CH1                         |
|             |   5 | D4       | PB5            | -                                |
|             |   4 | D3       | PB3            | TIM2_CH2                         |
|             |   3 | D2       | PA10           | -                                |
|             |   2 | D1       | PA2            | USART2_TX                        |
|             |   1 | D0       | PA3            | USART2_RX                        |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P52*/68 -->
[P52]: #P52
<a id="P52"/>

[Table-23]: #Table-23
<a id="Table-23" />

**Table 23**. ARDUINO® connectors on NUCLEO-L476RG

<pre>
|  Connector  | Pin | Pin name |   STM32 pin    |              Function              |
|-------------|-----|----------|----------------|------------------------------------|
|                                Left connectors                                     |
|-------------|-----|----------|----------------|------------------------------------|
| CN6 power   |   1 | NC       | -              | -                                  |
|             |   2 | IOREF    | -              | 3.3V Ref                           |
|             |   3 | RESET    | NRST           | RESET                              |
|             |   4 | +3.3V    | -              | 3.3V input/output                  |
|             |   5 | +5V      | -              | 5V output                          |
|             |   6 | GND      | -              | ground                             |
|             |   7 | GND      | -              | ground                             |
|             |   8 | VIN      | -              | Power input                        |
|-------------|-----|----------|----------------|------------------------------------|
| CN8 analog  |   1 | A0       | PA0            | ADC12_IN5                          |
|             |   2 | A1       | PA1            | ADC12_IN6                          |
|             |   3 | A2       | PA4            | ADC12_IN9                          |
|             |   4 | A3       | PB0            | ADC12_IN15                         |
|             |   5 | A4       | PC1 or PB9 (1) | ADC123_IN2 (PC1) or I2C1_SDA (PB9) |
|             |   6 | A5       | PC0 or PB8 (1) | ADC123_IN1 (PC0) or I2C1_SCL (PB8) |
|-------------|-----|----------|----------------|------------------------------------|
|                                Left connectors                                     |
|-------------|-----|----------|----------------|------------------------------------|
| CN5 digital |  10 | D15      | PB8            | I2C1_SCL                           |
|             |   9 | D14      | PB9            | I2C1_SDA                           |
|             |   8 | AREF     | -              | AVDD                               |
|             |   7 | GND      | -              | ground                             |
|             |   6 | D13      | PA5            | SPI1_SCK                           |
|             |   5 | D12      | PA6            | SPI1_MISO                          |
|             |   4 | D11      | PA7            | TIM17_CH1 or SPI1_MOSI             |
|             |   3 | D10      | PB6            | TIM4_CH1 or SPI1_CS                |
|             |   2 | D9       | PC7            | TIM3_CH2                           |
|             |   1 | D8       | PA9            | -                                  |
|-------------|-----|----------|----------------|------------------------------------|
| CN9 digital |   8 | D7       | PA8            | -                                  |
|             |   7 | D6       | PB10           | TIM2_CH3                           |
|             |   6 | D5       | PB4            | TIM3_CH1                           |
|             |   5 | D4       | PB5            | -                                  |
|             |   4 | D3       | PB3            | TIM2_CH2                           |
|             |   3 | D2       | PA10           | -                                  |
|             |   2 | D1       | PA2            | USART2_TX                          |
|             |   1 | D0       | PA3            | USART2_RX                          |
</pre>

1. Refer to [Table 10]: Solder bridges for details.

<!-- *P53*/68 -->
[P53]: #P53
<a id="P53"/>


//6.12 ST morpho connector
--------------------------

The ST morpho connector consists in male pin headers (CN7 and CN10) accessible on both
sides of the board. They can be used to connect the STM32 Nucleo board to an extension
board or a prototype/wrapping board placed on top or on bottom side of the STM32 Nucleo
board. All signals and power pins of the STM32 are available on ST morpho connector. This
connector can also be probed by an oscilloscope, logical analyzer or voltmeter.

[Table 24] to [Table 33] show the pin assignments of each STM32 on ST morpho connector.

[Table-24]: #Table-24
<a id="Table-24" />

**Table 24**. ST morpho connector on NUCLEO-F030R8

<pre>
| CN7 odd pins    | CN7 even pins  | CN10 odd pins       | CN10 even pins |
|-----------------|----------------------|---------------|----------------|
| Pin | Name      | Name           | Pin | Pin | Name    | Name     | Pin |
|-----------------|----------------------|---------------|----------------|
| 1   | PC10      | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12      | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD       | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1) | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | PF6       | -              | 10  | 9   | GND     | -        | 10  |
| 11  | PF7       | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13      | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14      | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15      | +5V            | 18  | 17  | PB6     | PB11     | 18  |
| 19  | GND       | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7       | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13 (3)  | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14 (3)  | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15      | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PF0       | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PF1       | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VBAT      | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2       | PC1 or PB9 (4) | 36  | 35  | PA2     | PF5      | 36  |
| 37  | PC3       | PC0 or PB8 (4) | 38  | 37  | PA3     | PF4      | 38  |
</pre>

1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pin5-7 of CN7. Two unused jumpers are available on CN11 and CN12 
    (bottom side of the board).
2.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not recommended to use them
as IO pins if the ST-LINK part is not cut.
4.  Refer to [Table 10]: Solder bridges for details.


<!-- *P54*/68 -->
[P54]: #P54
<a id="P54"/>

[Table-25]: #Table-25
<a id="Table-25" />

**Table 25**. ST morpho connector on NUCLEO-F070RB

<pre>
| CN7 odd pins    | CN7 even pins        | CN10 odd pins | CN10 even pins |
|-----------------|----------------------|---------------|----------------|
| Pin | Name      | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|-----------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10      | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12      | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD       | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1) | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | -         | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -         | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13 (3)  | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14 (3)  | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15      | +5V            | 18  | 17  | PB6     | PB11     | 18  |
| 19  | GND       | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7       | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13      | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14      | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15      | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PF0       | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PF1       | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VDD       | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2       | PC1 or PB9 (4) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3       | PC0 or PB8 (4) | 38  | 37  | PA3     | -        | 38  |
</pre>


1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper 
    is on pin5-7 of CN7.
2.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, 
    it is not recommended to use them as IO pins if the ST-LINK part is not cut.
4.  Refer to [Table 10]: Solder bridges for details.

<!-- *P55*/68 -->
[P55]: #P55
<a id="P55"/>



[Table-26]: #Table-26
<a id="Table-26" />

**Table 26**. ST morpho connector on
NUCLEO-F072RB, NUCLEO-F091RC, NUCLEO-F303RE , NUCLEO-F334R8

<pre>
| CN7 odd pins       | CN7 even pins        | CN10 odd pins | CN10 even pins |
|--------------------|----------------------|---------------|----------------|
| Pin | Name         | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|--------------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10         | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12         | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD          | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1)(2) | GND            | 8   | 7   | AVDD    | U5V (3)  | 8   |
| 9   | -            | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -            | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13 (4)     | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14 (4)     | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15         | +5V            | 18  | 17  | PB6     | PB11     | 18  |
| 19  | GND          | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7          | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13         | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14         | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15         | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PF0          | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PF1          | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VBAT         | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2          | PC1 or PB9 (5) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3          | PC0 or PB8 (5) | 38  | 37  | PA3     | -        | 38  |
</pre>

1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pin5-7 of CN7. Two unused jumpers are available on CN11 and CN12 
    (bottom side of the board).
2.  CN7 pin 7 (BOOT0) can be configured by engineering byte as PF11 on NUCLEO-F091RC.
3.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5V.
4.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not 
    recommended to use them as IO pins if the ST-LINK part is not cut.
5.  Refer to [Table 10]: Solder bridges for details.

[Table-27]: #Table-27
<a id="Table-27" />

**Table 27**. ST morpho connector on NUCLEO-F103RB

<pre>
| CN7 odd pins    | CN7 even pins        | CN10 odd pins | CN10 even pins |
|-----------------|----------------------|---------------|----------------|
| Pin | Name      | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|-----------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10      | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12      | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD       | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1) | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | -         | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -         | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13 (3)  | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14 (3)  | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15      | +5V            | 18  | 17  | PB6     | PB11     | 18  |
| 19  | GND       | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7       | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13      | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14      | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15      | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PD0       | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PD1       | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VBAT      | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2       | PC1 or PB9 (4) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3       | PC0 or PB8 (4) | 38  | 37  | PA3     | -        | 38  |
</pre>

1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pin5-7 of CN7. Two unused jumpers are available on CN11 and CN12 
    (bottom side of the board).
2.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5 V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not 
    recommended to use them as IO pins if the ST-LINK part is not cut.
4.  Refer to [Table 10]: Solder bridges for details.

<!-- *P56*/68 -->
[P56]: #P56
<a id="P56"/>


<!-- *P57*/68 -->
[P57]: #P57
<a id="P57"/>


[Table-28]: #Table-28
<a id="Table-28" />

**Table 28**. ST morpho connector on NUCLEO-F302R8

<pre>
| CN7 odd pins       | CN7 even pins        | CN10 odd pins | CN10 even pins |
|--------------------|----------------------|---------------|----------------|
| Pin | Name         | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|--------------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10         | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12         | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD          | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1)    | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | -            | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -            | IOREF          | 12  | 11  | PB13    | PA12     | 12  |
| 13  | PA13 (3)     | RESET          | 14  | 13  | PB14    | PA11     | 14  |
| 15  | PA14 (3)     | +3.3V          | 16  | 15  | PB15    | PB12     | 16  |
| 17  | PA15         | +5V            | 18  | 17  | PB6     | PB11     | 18  |
| 19  | GND          | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7          | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13         | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14         | -              | 26  | 25  | PB10    | PA7      | 26  |
| 27  | PC15         | PA0            | 28  | 27  | PB4     | PA6      | 28  |
| 29  | PF0          | PA1            | 30  | 29  | PB5     | PA5      | 30  |
| 31  | PF1          | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VBAT         | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2          | PC1 or PB9 (4) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3          | PC0 or PB8 (4) | 38  | 37  | PA3     | -        | 38  |
</pre>

1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pin5-7 of CN7. Two unused jumpers are available on CN11 and CN12 
    (bottom side of the board).
2.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not 
    recommended to use them as IO pins if the ST-LINK part is not cut.
4.  Refer to [Table 10]: Solder bridges for details.

<!-- *P58*/68 -->
[P58]: #P58
<a id="P58"/>


[Table-29]: #Table-29
<a id="Table-29" />

**Table 29**. ST morpho connector on NUCLEO-F401RE, NUCLEO-F411RE, NUCLEO-F446RE

<pre>
| CN7 odd pins       | CN7 even pins        | CN10 odd pins | CN10 even pins |
|--------------------|----------------------|---------------|----------------|
| Pin | Name         | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|--------------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10         | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12         | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD          | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1)    | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | -            | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -            | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13 (3)     | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14 (3)     | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15         | +5V            | 18  | 17  | PB6     | -        | 18  |
| 19  | GND          | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7          | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13         | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14         | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15         | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PH0          | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PH1          | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VBAT         | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2          | PC1 or PB9 (4) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3          | PC0 or PB8 (4) | 38  | 37  | PA3     | -        | 38  |
</pre>

1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pin5-7 of CN7. Two unused jumpers are available on CN11 and CN12 
    (bottom side of the board).
2.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not 
    recommended to use them as IO pins if the ST-LINK part is not cut.
4.  Refer to [Table 10]: Solder bridges for details.

<!-- *P59*/68 -->
[P59]: #P59
<a id="P59"/>


[Table-30]: #Table-30
<a id="Table-30" />

**Table 30**. ST morpho connector on NUCLEO-L010RB,
NUCLEO-L053R8, NUCLEO-L073RZ, NUCLEO-L152RE

<pre>
| CN7 odd pins       | CN7 even pins        | CN10 odd pins | CN10 even pins |
|--------------------|----------------------|---------------|----------------|
| Pin | Name         | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|--------------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10         | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12         | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD          | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1)    | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | -            | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -            | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13 (3)     | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14 (3)     | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15         | +5V            | 18  | 17  | PB6     | PB11     | 18  |
| 19  | GND          | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7          | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13         | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14         | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15         | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PH0          | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PH1          | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VLCD         | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2          | PC1 or PB9 (4) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3          | PC0 or PB8 (4) | 38  | 37  | PA3     | -        | 38  |
</pre>

1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pin5-7 of CN7. Two unused jumpers are available on CN11 and CN12 
    (bottom side of the board).
2.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not 
    recommended to use them as IO pins if the ST-LINK part is not cut.
4.  Refer to [Table 10]: Solder bridges for details.

<!-- *P60*/68 -->
[P60]: #P60
<a id="P60"/>


[Table-31]: #Table-31
<a id="Table-31" />

**Table 31**. ST morpho connector on NUCLEO-L452RE

<pre>
| CN7 odd pins        | CN7 even pins        | CN10 odd pins | CN10 even pins |
|---------------------|----------------------|---------------|----------------|
| Pin | Name          | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|---------------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10          | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12          | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD           | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | PH3/BOOT0 (1) | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | -             | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -             | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13 (3)      | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14 (3)      | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15          | +5V            | 18  | 17  | PB6     | PB11     | 18  |
| 19  | GND           | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7           | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13          | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14          | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15          | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PH0           | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PH1           | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VBAT          | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2           | PC1 or PB9 (4) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3           | PC0 or PB8 (4) | 38  | 37  | PA3     | -        | 38  |
</pre>

1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pins 5-7 of CN7.
2.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not 
    recommended to use them as IO pins if the ST-LINK part is not cut.
4. Refer to [Table 10]: Solder bridges for details.

<!-- *P61*/68 -->
[P61]: #P61
<a id="P61"/>


[Table-32]: #Table-32
<a id="Table-32" />

**Table 32**. ST morpho connector on NUCLEO-L476RG

<pre>
| CN7 odd pins       | CN7 even pins        | CN10 odd pins | CN10 even pins |
|--------------------|----------------------|---------------|----------------|
| Pin | Name         | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|--------------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10         | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12         | PD2            | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD          | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1)    | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | -            | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -            | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13 (3)     | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14 (3)     | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15         | +5V            | 18  | 17  | PB6     | PB11     | 18  |
| 19  | GND          | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7          | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13         | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14         | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15         | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PH0          | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PH1          | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VBAT         | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2          | PC1 or PB9 (4) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3          | PC0 or PB8 (4) | 38  | 37  | PA3     | -        | 38  |
</pre>


1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pin5-7 of CN7.
2.  U5V is 5 V power from ST-LINK/V2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not 
    recommended to use them as IO pins if the ST-LINK part is not cut.
4.  Refer to [Table 10]: Solder bridges for details.

<!-- *P62*/68 -->
[P62]: #P62
<a id="P62"/>


[Table-33]: #Table-33
<a id="Table-33" />

**Table 33**. ST morpho connector on NUCLEO-F410RB

<pre>
| CN7 odd pins       | CN7 even pins        | CN10 odd pins | CN10 even pins |
|--------------------|----------------------|---------------|----------------|
| Pin | Name         | Name           | Pin | Pin | Name    | Name     | Pin |
|-----|--------------|----------------|-----|-----|---------|----------|-----|
| 1   | PC10         | PC11           | 2   | 1   | PC9     | PC8      | 2   |
| 3   | PC12         | PB11           | 4   | 3   | PB8     | PC6      | 4   |
| 5   | VDD          | E5V            | 6   | 5   | PB9     | PC5      | 6   |
| 7   | BOOT0 (1)    | GND            | 8   | 7   | AVDD    | U5V (2)  | 8   |
| 9   | -            | -              | 10  | 9   | GND     | -        | 10  |
| 11  | -            | IOREF          | 12  | 11  | PA5     | PA12     | 12  |
| 13  | PA13 (3)     | RESET          | 14  | 13  | PA6     | PA11     | 14  |
| 15  | PA14 (3)     | +3.3V          | 16  | 15  | PA7     | PB12     | 16  |
| 17  | PA15         | +5V            | 18  | 17  | PB6     | -        | 18  |
| 19  | GND          | GND            | 20  | 19  | PC7     | GND      | 20  |
| 21  | PB7          | GND            | 22  | 21  | PA9     | PB2      | 22  |
| 23  | PC13         | VIN            | 24  | 23  | PA8     | PB1      | 24  |
| 25  | PC14         | -              | 26  | 25  | PB10    | PB15     | 26  |
| 27  | PC15         | PA0            | 28  | 27  | PB4     | PB14     | 28  |
| 29  | PH0          | PA1            | 30  | 29  | PB5     | PB13     | 30  |
| 31  | PH1          | PA4            | 32  | 31  | PB3     | AGND     | 32  |
| 33  | VBAT         | PB0            | 34  | 33  | PA10    | PC4      | 34  |
| 35  | PC2          | PC1 or PB9 (4) | 36  | 35  | PA2     | -        | 36  |
| 37  | PC3          | PC0 or PB8 (4) | 38  | 37  | PA3     | -        | 38  |
</pre>


1.  The default state of BOOT0 is LOW. It can be set to HIGH when a jumper is 
    on pin5-7 of CN7.
2.  U5V is 5 V power from the ST-LINKV2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, it is not 
    recommended to use them as IO pins if the ST-LINK part is not cut.
4.  Refer to [Table 10]: Solder bridges for details.

<!-- *P63*/68 -->
[P63]: #P63
<a id="P63"/>

/7 Nucleo-64 boards information
===============================

//7.1 Product marking
---------------------

The sticker located on the top or bottom side of the PCB board shows the information about
product identification such as board reference, revision, and serial number.

The first identification line has the following format: ‘MBxxxx-Variant-yzz’, where ‘MBxxxx’ is
the board reference, ‘Variant’ (optional) identifies the mounting variant when several exist,
‘y’ is the PCB revision and ‘zz’ is the assembly revision: for example B01.

The second identification line is the board serial number used for traceability.

Evaluation tools marked as “ES” or “E” are not yet qualified and therefore not ready to be
used as reference design or in production. Any consequences deriving from such usage will
not be at ST charge. In no event, ST will be liable for any customer usage of these
engineering sample tools as reference design or in production.

‘E’ or ‘ES’ marking examples of location:

*   On the target STM32 that is soldered on the board (for illustration of STM32 marking,
    refer to the STM32 datasheet “Package information” paragraph at the www.st.com
    website).

*   Next to the evaluation tool ordering part number that is stuck or silk-screen printed on
    the board.

Some boards feature a specific STM32 device version that allows the operation of any stack
or library. This STM32 device shows a ‘U’ marking option at the end of the standard part
number and is not available for sales.

In order to use the same commercial stack in his application, a developer may need to
purchase a part number specific to this stack/library. The price of those part numbers
includes the stack/library royalties.

The board reference for the STM32 Nucleo-144 boards is MB1136.

<!-- *P64*/68 -->
[P64]: #P64
<a id="P64"/>


//7.2 Board revision history
----------------------------

*   Revision C-01
    The revision C-01 is the initially released version.
*   Revision C-02
    Add LSE:
    *  X2(32 KHz)
    *  R34 and R36 changed from OFF to 0 Ω
    *  C31 and C32 changed from OFF to 10 pF
    *  SB48 and SB49 changed from ON to OFF
    Remove HSE:
    *  SB16 and SB50 changed from OFF to ON
    *  SB55 changed from ON to OFF
    Note that for the NUCLEO-L4xxRx Nucleo-64 boards:
    *  SB16 and SB50 must be OFF.
    *  SB55 changed must be ON.
*   Revision C-03
    *  X2 changed to ABS25-32.768KHZ-6-TB
    *  C31 and C32 changed from 10 pF to 4.3 pF
    *  C26 changed from 2.2 µF to 4.7 µF
*   Revision C-04
    *  T2 changed from STS7PF30L to STS9P3LLH6

//7.3 Board known limitations
-----------------------------

Revisions C-01 to C-04
None

<!-- *P65*/68 -->
[P65]: #P65
<a id="P65"/>

/Revision history
=================

[Table-34]: #Table-34
<a id="Table-34" />

**Table 34**. Document revision history

|     Date     | Revision |                             Changes                             |
|--------------|----------|-----------------------------------------------------------------|
| 10-Feb-2014  |        1 | Initial release.                                                |
| 13-Feb-2014  |        2 | Updated [Figure 1], Chapter 5.5 and [Table 10].                 |
| 11-Apr-2014  |        3 |                                                                 |
|              |          | Extended the applicability to NUCLEO-F302R8. Updated [Table 1]: |
|              |          | Ordering information, Section 6.11: Arduino connectors and      |
|              |          | Section 6.12: ST morpho connector.                              |
|              |          | Updated [Figure 1]                                              |
| 10-June-2014 |        4 |                                                                 |
|              |          | Updated the board figure: [Figure 1].                           |
|              |          | Updated HSE and LSE configuration description: Section 6.7.1,   |
|              |          | Section 5.5, and Section 6.7.2. Extended the applicability to   |
|              |          | NUCLEO-F334R8, NUCLEO-F411RE, and NUCLEO-L053R8.                |
| 20-June-2014 |        5 |                                                                 |
|              |          | Updated the electrical schematics figures: [Figure 27],         |
|              |          | [Figure 28], [Figure 29], and [Figure 30].                      |
|              |          | Refer to the [AN2867] for oscillator design guide for STM32     |
|              |          | microcontrollers in Section 6.7.1: OSC clock supply and         |
|              |          | Section 6.7.2: OSC 32 KHz clock supply.                         |
| 30-Sept-2014 |        6 |                                                                 |
|              |          | Extended the applicability to NUCLEO-F091RC and                 |
|              |          | NUCLEO-F303RE;                                                  |
|              |          | Updated [Table 1]: Ordering information;                        |
|              |          | Updated [Table 11]: Arduino connectors on NUCLEO-F030R8,        |
|              |          | NUCLEO-F070RB, NUCLEO-F072RB, NUCLEO-F091RC;                    |
|              |          | Updated [Table 26]: ST morpho connector on NUCLEO-F072RB,       |
|              |          | NUCLEO-F091RC, NUCLEO-F303RE, NUCLEO-F334R8;                    |
|              |          | Updated [Figure 6]: Typical configuration;                      |
|              |          | Added [Figure 13]: NUCLEO-F091RC;                               |
|              |          | Added [Figure 16]: NUCLEO-F303RE;                               |
|              |          | Updated Section 6.7.2: OSC 32 KHz clock supply;                 |
|              |          | Updated [Figure 27]: Top and Power(1/4) ,Figure 28: STM32 MCU;  |
| 19-Jan-2015  |        7 |                                                                 |
|              |          | Extended the applicability to NUCLEO-F070RB, NUCLEO-            |
|              |          | L073RZ, and NUCLEO-L476RG;                                      |
|              |          | Updated [Table 1]: Ordering information;                        |
|              |          | Updated Section 6.2: Embedded ST-LINK/V2-1;                     |
|              |          | Updated Section 6.7.1: OSC clock supply;                        |
|              |          | Added [Figure 11]: NUCLEO-F070RB;                               |
|              |          | Added [Figure 21]: NUCLEO-L073RZ;                               |
|              |          | Added [Figure 24]: NUCLEO-L476RG                                |
|              |          | Updated [Table 11]: Arduino connectors on NUCLEO-F030R8,        |
|              |          | NUCLEO-F070RB, NUCLEO-F072RB, NUCLEO-F091RC                     |
|              |          | Added [Table 18]: Arduino connectors on NUCLEO-L073RZ           |
|              |          | Added [Table 23]: Arduino connectors on NUCLEO-L476RG           |
|              |          | Added [Table 25]: ST morpho connector on NUCLEO-F070RB          |
|              |          | Updated [Table 30]: ST morpho connector on NUCLEO-L053R8,       |
|              |          | NUCLEO-L073RZ, NUCLEO-L152RE                                    |
|              |          | Added [Table 32]: ST morpho connector on NUCLEO-L476RG          |
|              |          | Updated schematics from [Figure 27]: Top and Power(1/4) to      |
|              |          | [Figure 30]: Extension connectors                               |
| 08-Jul-2015  |        8 |                                                                 |
|              |          | Extended the applicability to Updated [Table 1]: Ordering       |
|              |          | information;                                                    |
|              |          | Added [Figure 25]: NUCLEO-F446RE and [Figure 26]: NUCLEO-       |
|              |          | F410RB                                                          |
|              |          | Updated Section 6.11: Arduino connectors on page 37 and         |
|              |          | Section 6.12: ST morpho connector on page 53                    |
| 04-Aug-2015  |        9 | Added Section 5.4: NUCLEO-L476RG bootloader limitations.        |
|              |          | 17-Nov-2015 10                                                  |
|              |          | Updated Section 6.9: Solder bridges and Section 6.7.1:          |
|              |          | OSC clock supply.                                               |
| 29-Nov-2015  |       11 |                                                                 |
|              |          | Updated Introduction, Section 3: Ordering information,          |
|              |          | Section 6.10: Extension connectors, Section 6.11: Arduino       |
|              |          | connectors, Section 6.12: ST morpho connector to add            |
|              |          | NUCLEO-L452RE.                                                  |
| 15-Dec-2017  |       12 |                                                                 |
|              |          | Updated document title and cover page.                          |
|              |          | Updated Chapter 2: Product marking and Section 5.3:             |
|              |          | Development toolchains.                                         |
|              |          | Expanded document scope to NUCLEO-L010RB:                       |
|              |          | – Updated [Table 1]: Ordering information                       |
|              |          | – Updated [Table 18]: Arduino connectors on NUCLEO-L010RB       |
|              |          | and NUCLEO-L073RZ                                               |
|              |          | – Updated [Table 21]: NUCLEO-L073RZ and NUCLEO-L010RB           |
|              |          | – Updated [Table 30]: ST morpho connector on NUCLEO-L010RB,     |
|              |          | NUCLEO-L053R8, NUCLEO-L073RZ, NUCLEO-L152RE                     |
| 3-Apr-2019   |       13 |                                                                 |
|              |          | Updated document title, Introduction, Chapter 2: Ordering       |
|              |          | information, Section 2.1: Product marking, Section 2.2:         |
|              |          | Codification, and Section 5.1: Getting started.                 |
|              |          | Added Chapter 3: Development environment and Section 3.3:       |
|              |          | Demonstration software.                                         |
| 19-Aug-2020  |       14 |                                                                 |
|              |          | Updated the connector reference in the description of           |
|              |          | SB54 and SB55 in [Table 10]: Solder bridges.                    |
|              |          | Removed pin 10 duplicated rows in [Table 11]: ARDUINO®          |
|              |          | connectors on NUCLEO-F030R8, NUCLEO-F070RB, NUCLEO-             |
|              |          | F072RB, NUCLEO-F091RC, [Table 12]: ARDUINO® connectors on       |
|              |          | NUCLEO-F103RB, [Table 16]: ARDUINO® connectors on               |
|              |          | NUCLEO-F401RE and NUCLEO-F411RE, and [Table 19]:                |
|              |          | ARDUINO® connectors on NUCLEO-F446RE.                           |
|              |          | Removed electrical schematics.                                  |
|              |          | Added Section 7 including Product marking, Board revision       |
|              |          | history, and Board known limitations.                           |

<!-- *P66*/68 -->
[P66]: #P66
<a id="P66"/>


[Figure 30]: #Figure-30
<a id="Figure-30" />


<!-- *P67*/68 -->
[P67]: #P67
<a id="P67"/>


<!-- *P68*/68 -->
[P68]: #P68
<a id="P68"/>


IMPORTANT NOTICE – PLEASE READ CAREFULLY

STMicroelectronics NV and its subsidiaries (“ST”) reserve the right to make 
changes, corrections, enhancements, modifications, and improvements to ST 
products and/or to this document at any time without notice. 

Purchasers should obtain the latest relevant information on ST products 
before placing orders. ST products are sold pursuant to ST’s terms and conditions 
of sale in place at the time of order acknowledgement.

Purchasers are solely responsible for the choice, selection, and use of ST 
products and ST assumes no liability for application assistance or the design 
of Purchasers’ products.

No license, express or implied, to any intellectual property right is granted 
by ST herein. Resale of ST products with provisions different from the 
information set forth herein shall void any warranty granted by ST for such product.

ST and the ST logo are trademarks of ST. For additional information about ST 
trademarks, please refer to www.st.com/trademarks. All other product or 
service names are the property of their respective owners.

Information in this document supersedes and replaces information previously 
supplied in any prior versions of this document.

© 2020 STMicroelectronics – All rights reserved