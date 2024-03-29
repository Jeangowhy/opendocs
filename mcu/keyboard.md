
# /🐉 Keyboard MCU
1. https://kbd-project.org/
2. https://en.wikipedia.org/wiki/Apple_Extended_Keyboard
3. https://oe7twj.at/images/6/6a/PS2_Keyboard.pdf
4. https://www.burtonsys.com/ps2_chapweske.htm
4. https://wiki.archlinux.org/title/Keyboard_input
4. https://wiki.archlinux.org/title/Map_scancodes_to_keycodes
4. https://wiki.archlinux.org/title/Linux_console/Keyboard_configuration
4. Keyboard scancodes by Andries Brouwer https://www.win.tue.nl/~aeb/linux/kbd/scancodes.html
4. 我的BIOS之行 https://blog.csdn.net/u013983194/article/details/49001259

嵌入式工业是基于微程序控制器 MCU - Microprogrammed Control Unit 上的一个重要的经济行业构成，
2019 年市场规模约为 987 亿元，接近千亿。通过嵌入 MCU，现代硬件设备得以向信息化、自动化、智能化转变。

嵌入式控制器 EC - Embedded Controller 是挂在 CPU 的 LPC - Low Pin Count 总线下的
一颗嵌入主控芯片，嵌入式控制器的目的是帮助计算机管理低速外设，像触摸板、矩阵键盘等。最重要的
是计算机通过 EC 来做电源管理，在笔记本电脑中，电源管理尤为重要，不仅仅需要控制开关机的电源，
还要控制笔记本休眠挂起、唤醒。EC 就像计算机的隐形管家，在电脑的正常运行中起到至关重要的作用。

商用笔记本电脑中以下这些功能都通过 EC 来实现：

01. 开关机的上下电时序控制（GPIO）；
02. 休眠挂起的上下电时序控制（GPIO）；
03. 开关机按键（GPIO）;
04. 笔记本开合盖检测（GPIO）;
05. 电源灯、大小写灯、数字灯的控制（GPIO）;
06. 笔记本电池的充放电控制（SMBUS）；
07. CPU/GPU/主板温度检测功能（SMBUS）;
08. 散热风扇智能温控（PWM/TACH）;
09. 笔记本键盘（KBC键盘控制器）；
10. 触摸板（PS/2）；
11. 电压检测（ADC）;

![IT8502 EC 芯片框图](https://img-blog.csdnimg.cn/34398573cc384eb7a4e5fbc13c87dfeb.png)

框图中有两条总线，Internal Bus (内部总线)，EC Bus (EC总线)。
CPU 通过内部总线访问那些通过 LPC 挂载到内部总线各个逻辑设备（KBC/PMC/UART等），
也可以用于各个逻辑设备之间的通信。

EC 功能模块之间、EC 功能模块与内部总线下的逻辑设备间的通信都通过 EC 总线。

LPC 总线与 CPU 总线相连，EC 通过 LPC 总线与操作系统或 BIOS 进行通信，
LPC 主控设备向 CPU 发送串行中断信号 SERIRQ。

基本的 PS/2 用户输入设备：

1. The PS/2 (AT) Keyboard Interface
2. The PS/2 Mouse Interface


![Keyboard Switchs Matrix](https://www.masterzen.fr/images/uploads/2018/12/matrix-done.jpg)

KBC - KeyBoard Controller 作为一个逻辑设备挂在 LPC 总线下，KBC 在 EC 与操作系统或 BIOS 
的通信过程中起到了非常重要的作用。

操作系统或 BIOS 通过 KBC（0x60/0x64）和 PMC(0x62/0x66) 读取 EC RAM 存储的设备状态数据。

台式机的主板中有一块专用的键盘 MCU 接口芯片，早期 PC 采用一块 Intel 8049 (MCS-48 系列芯片) ，
现在大多已集成在南桥或 SIO。键盘主控的工作包括键盘加电自检、键盘扫描码的缓冲以及与主板的通讯。

以下是三种 IBM PC 键盘的布局数据，现代通用键盘多数为 101 键（带有数字小键盘）：

1. IBM PC/XT Keyboard (1981):
   - 83 keys
   - 5-pin DIN connector
   - Simple uni-directional serial protocol
   - Uses what we now refer to as scan code set 1
   - No host-to-keyboard commands
2. IBM AT Keyboard (1984) - NOT backward compatible with XT systems.
   - 84 -101 keys
   - 5-pin DIN connector
   - Bi-directional serial protocol
   - Uses what we now refer to as scan code set 2
   - Eight host-to-keyboard commands
3. IBM PS/2 Keyboard (1987) - Backward compatible with AT systems; NOT compatible with XT
   - systems.
   - 84 - 101 keys
   - 6-pin mini-DIN connector
   - Bi-direction serial protocol
   - Offers optional scan code set 3
   - 17 host-to-keyboard commands 

键盘的硬件结构主要由 PCB - Printed Circuit Board 打印电路板（打印电路是制作电路版的一种技术），
按键开关机构、开关矩阵电路以及主控芯片构成。

通过键盘专用接口连接到计算机内部，按总线间的规范进行数据通信。CPU 会为低速外部设备分配相应的中断功能，
当键盘的一个键被按下时，键盘接口芯片根据键盘布局及开关位置生成一个代码，INT 09H 负责把键值转换成 INT16H 认识的值，返回给 INT 16H。

1. INT 09H 是 H/W 中断，对应 IRQ1，
2. INT 16H 是一个 S/W 中断。

BISO 按选定键盘语系、布局将 INT 16H 数据转换成相应的二进制字符传给操作系统或应用程序。
当用户敲击键盘速度过快，中断程序来不及处理时，则先将所键入的内容写入内存中的键盘缓冲区，
以便下次中断程序从缓冲区中取出，送入 CPU 进行分析和处理。

一般在 PC 主机的内存中安排了大约 20 个字符容量的键盘缓冲区。8042 设置有输入缓冲、输出缓冲，
它的数据传输在 I/O 60H（数据） 和 I/O 64H （命令和状态口）端口进行。
它们同时可做读写动作，在读和写时有着不同的意义。

| Port | Read/Write |       Function       |
|------|------------|----------------------|
| 0x60 | Read       | Read Input Buffer    |
| 0x60 | Write      | Write Output Buffer  |
| 0x64 | Read       | Read Status Register |
| 0x64 | Write      | Send Command         |

I/O 64H 的 0、1 bit 置位分别代表输出/输入缓冲满。如果发现输入缓冲满（即判 I/O 64H[1]=1），
就要从 I/O 60H 将数据取走。BIOS 在自检时如果确定输入/输出缓冲都没有问题，会发送“AAH”
给 I/O 64H 端口，让它自测试。等到输入缓冲空（说明上一个命令已执行完），输出缓冲满（KBC 对自测试命令有反应），再读 I/O 60H 是否为“55H”（IBM PC/AT 规范）。
如果是，则表示键盘硬件检测通过，若等不到输出缓冲满，说明有问题。

在写命令之前，必须对 I/O 64H 端口发送一个 60H 的值，并等到输入缓冲空，再操作 I/O 60H。
同样，在读状态之前，也必须对 I/O 64H 端口发送一个 20H 的值，并等到输出缓冲满（表示有状态输出），
再操作 I/O 60H。

键盘接口芯片除了接受来自键盘的信息外，还要负责 A20 地址线的切换，因为早期 CPU 只能处理 1MB 内存，
使用 20 根地址线，2^20 可以表示 1MB 内存的寻址。这种模式称为 Real Mode。后来硬件进步，内存容量
大幅增加，CPU 引入了保护虚拟地址模式（Protected Mode），并且为了兼容旧设备还增加了虚拟 86 模式，
Virtual 8086 Mode，用于实模式下运行 16 位应用程序。

现代 PC 加电运行，CPU 先进入实地址模式（和早期 x86 CPU 一样工作）。然后，
就从实模式切换到保护模式，这时便是通过 A20 地址线的切换完成的。默认状态 A20 为“0”，寻址功能关闭。
A20 切换为“1”时，便可进入保护模式。但由于键盘接口芯片切换 A20 地址线的速度不够快，
目前多由主板上的芯片组以模拟方式取代，这样也就省去了一块键盘接口芯片。


PS/2 Keyboard 完全兼容 AT Keyboard 并作了一些扩展。
但对于数量众多的键盘生产商来说，并非所有键盘都完全遵照 PS/2 Keyboard 或 AT Keyboard 标准，
而是只需要做到对它们兼容即可。比如，某些 PS/2 键盘却只实现了 7 个主要的“主机到键盘的命令”，
对于剩下了 10 个只是简单的回馈 ACK。而某些 AT 接口的键盘却完全实现 PS/2 Keyboard 命令。
现在的 IBM 兼容键盘有如下特征：

*   任意数量的按键（通常是101到104）；
*   双向串行协议；
*   仅仅保证支持Scan code set 2；
*   接口芯片可能不是8042，但保证都和8042兼容。
*   对所有的17个命令都会回复“ACK”，但未必会完全实现它们。

已经完全过时 XT Keyboard 使用的协议和 AT-PS/2　Keyboard 完全不同、不兼容。
过渡时期，有一些键盘厂商生产的 AT-PS/2 Keyboard，可以通过设置跳线，使其切换协议工作。

IBM AT 和 IBM PS/2 键盘系统中，CPU 并不直接和 KBC 进行通信，而是通过 8042 兼容芯片。
增加这么一个中间层，就可以屏蔽掉不同键盘之间实现的差别，并可以增加新的特性。

CPU 直接和 8042 芯片通信，以控制整个键盘；用户操作键盘产生的数据可以通过 8042 芯片通知 CPU。
CPU 通过中断程序和 8042 芯片读取这些数据。另外，CPU 也直接向 8042 芯片发送控制命令。

对于操作用户来说，与键盘的接口就是键盘上的按键，操作键盘的方式和工作逻辑如下：

1. 按下按键 Press key ==> **Make code**；
2. 然后松开 Release key ==> **Break code**；
3. 配合控制键 Ctrl、Shift、Alt 进行多按键进行操作；

对于键盘系统而言，操作用户对键盘的敲击分为两种动作：Press key 和 Release key。这两个动作
之间的时间被称为迟滞时间 Press key delay，这 2 个动作和 1 个时间段称为一个“击键过程”。

Pause 键之外的所有键而言，键盘针对 Press Key 和 Release Key 两个动作会分别产生
Make Code 和 Break Code，两者并称为 **Scan code**。并且在迟滞时间，会按照一定的频率产生
**Repeat code**。在大多数情况下，由于你的击键速度非常快，100ms ~ 300ms，不会产生
Repeat code；但在肯定会产生 Make code 和 Break Code。


    +=======+      +==============+      +===================+
    |  CPU  | <==> |  Intel 8042  | <==> |  8048 (Keyboard)  | 
    +=======+      +==============+      +===================+
      Host       Keyboard Controller       Keyboard Encoders

键盘自身的主控芯片的功能主要是检索来自于 Key Matrix 的物理开关状态，及所产生的 Scan code，
并将这些扫描码存放于键盘自身的内部缓冲；还负责和外部系统（i8042）之间的通信，以及自身的控制。

键盘上电复位后，会接收到主机自检程序的 Reset 以及 Set Typematic Rate/Delay (0xF3) 等命令，
键盘默认状态按以下设置：

1. Typematic delay 500 ms.
2. Typematic rate 10.9 cps.
3. Scan code set 2.
4. Set all keys typematic/make/break.

Repeat code 会在按键保持时间达到系统设置的迟滞间隔（Typematic delay）时按 Typematic rate 
指定的频率产生，就相当于用户以这个频率重复地按键。Repeat code 只对最后一个按下的按键有效。

到目前为止，所有谈论中的 code 或者称为 keycode 都是二进制代码，并没有一一对应的 ASCII 字符。
键盘中的主控芯片之所有称之为编码器（Keyboard Encoders），而不能称之为字符生成器，是因为键盘
开关矩阵产生的数据比较复杂。简单地说，如果关状态使用一个字节表示，那么 8 bits 可以表示 256 种
开关状态。键盘本身有 101 或 104 个按键，单单是表示所有按键的按下、释放两种状态基本上够用。但是，
要表示 Ctrl Alt Shift 等组合键就完全不够用了。即使从 8 bits 中保留三个 bits 作为组合键
专用的标志位，那么余下 5 bits 只能表示 2^5=32 种状态，根本不够用。因此，现代键盘不能将机械开关
与 ASCII 字符集一一关联，只能由系统进行编码、解码，并根据用户的喜好设置产生相应的符号输入。

操作系统层面上提供映射关系设置，Scan Code 由键盘编码器产生，并通过键盘控制器获取，经过映射
转换得到 Key Code，然后根据用户为操作设置的键盘布局生成对应的字符（keysym）。参考 Linux
showkey 命令和 keymaps 设置，使用 loadkeys 和 dumpkeys 命令装入、查看键盘映射表。

1. The keyboard sends a `scancode` to the computer.
2. The Linux kernel maps the `scancode` to a `keycode`; see Map scancodes to keycodes.
3. The `keyboard layout` maps the keycode to a `symbol` or `keysym`, depending on what modifier keys are pressed.

另外一方面，因为技术的演变，各个国家的键盘布局也有差异，中国大陆基本都使用现代 QWERTY 布局键盘。
1828/7/24 美国密歇根州的威廉•伯特制造出“排字机”，并取得美国专利成为世界上第一部有记录的打字机。
键盘是打字机的一部分，起初按键布局按照字母顺序排列。但打字速度过快，打字机就会因连杆互相干涉撞而卡键。
打字机之父 Christopher Latham Sholes (克里斯托夫·拉森·肖尔斯)，与伙伴将英文字母打乱排列，
增加高频字母的击键距离，降低敲键速度以避免卡键，即形成现代的 QWERTY 键盘布局。

进入电器化时代，键盘也不单单用来表示英文字母和常用符号，还增加了各种功能键（F1 ~ F12）和各种
控制键、组合键盘。这时就需要键盘内部的编码器芯片来完成按键的编码工作，早期因为内存容量限制，
键盘编码采用一个字节方案，并且形成了三套键盘编码集：

1. Scan Code Set 1 - Original XT scan code set; supported by some modern keyboards
2. Scan Code Set 2 - Default scan code set for all modern keyboards
3. Scan Code Set 3 - Optional PS/2 scan code set--rarely used

常规字符（字母、符号、数字）基本上都对应一个字节表达的 Scan Code，而一些功能键基本上使用 2、3 
个字节的扫描码。为了区分单字节各多字节的 Scan Code，编码方案基本上采用了 0xE0 0xE1 0xF0
作为标记字符。特殊的 PAUSE 三套方案分别为 6、8、2 个字节，Print Screen（PrtScn）三套方案
分别为 4、6、2 个字节，目前最常使用的是第二套键盘编码集（Scan Code Set 2）。
参考 Adam Chapweske 于 2001 年发布的通信 The AT-PS/2 Keyboard Interface。

Scan Code Set 1 绝大多数按键，Make Code，Break Code，Repeat Code 都是单字节的。
其规则为：如果 Make Code 为 nn，则其 Repeat code 也同样是 nn，而其 Break Code 
则是将 nn 与 80h 进行按位 OR 运算，也就是将 Make Code 的最高位 bit-7 设置为 1。
比如：键"A"的 Make Code 位 1Eh，其 Repeat Code 也为 1Eh，Break Code 则为 9Eh。

还有一些 Scan Code 双字节的键。其规则为：首字节 E0h，第 2 个字节与单字节 Scan Code 规则一样。

特殊的 PrtSc/SysRq 键：

    make code = E02AE037, repeat code = E037, break code = E0B7E0AA

Pause/Break 键只有 Make Code，并且其长度为 6 字节：E11D45E19DC5。


Scan Code Set 2 是当前常用的方案，其 Make Code，Repeat Code 基本都是单字节，
Break Code 多为双字节。其规则为：如果 Make Code 为 nn，则其 Repeat code 也是 nn，
而其 Break Code 的第一个字节为 F0，第二个字节与 Make Code 相同。

比如：按键 A、B、C： 

| Key | Make Code | Repeat Code | Break Code |
|-----|-----------|-------------|------------|
| A   | 1C        | 1C          | F0,1C      |
| B   | 32        | 32          | F0,32      |
| C   | 21        | 21          | F0,21      |

还有一些键 Make Code，Repeat Code 为双字节，Break Code 则是 3 字节。
其规则为：首字节都是 E0h，后两个字节，其规则与单字节 Scan Code 规则一样。

特殊的 PrtSc/SysRq 和 Pause/Break 键：

|     Key     |        Make Code        | Repeat Code |     Break Code    |
|-------------|-------------------------|-------------|-------------------|
| PrtSc/SysRq | E0,12,E0,7C             | E0,7C       | E0,F0,7C,E0,F0,12 |
| Pause/Break | E1,14,77,E1,F0,14,F0,77 | -NONE-      | -NONE-            |


Scan Code Set 3 单字节 Make Code 的规则同 Scan Code Set 2，并且此外只有 2 字节的规则。
这非常有利于 Keyboard driver 的实现，但只有一部分键盘支持它。

假设，用户按下大写的字母 G，需要先按下 Shift 键，然后释放，键盘控制器接收 Scan code 如下：

1. key code (12h): make code for the "Shift" ,
2. key code (34h): make code for the "G" ,
3. key code (F0h,34h): break code for the "G" ,
4. key code (F0h,12h): break code for the "Shift" .

键盘电路系统中有两根信号线，Data line 和 Clock line，用来控制对 Scan code 的检索和传递。
如果 Data line 和 Clock line 都处于高电平状态，8048 编码器芯片每次检索到一个 Scan code，
就会立即将其发送给 8042 键盘控制器芯片。

如果 Data line 为高电平，Clock line 为低电平，则每次 8048 每次检索到一个 Scan code，
就先将其存放在键盘的内部缓冲区，并等待 Clock line 变成高电平后再 flush 缓冲区的数据。

如果 Data line 为低电平，8048 停止对Scan code 的检索，并等待接 8042 控制器的命令。
这种情况下，如果 Clock line 为高电平，8048 则会将接到的命令的回复数据发送给 8042。
否则，则无法回复这些命令。所以在 8042 需要向 8048 发送命令时，必须保证 Clock line 为高电平状态。

键盘控制器 8042 芯片收到 8048 编码器芯片的 Scan code 或者命令回复字节，经过处理后
（可能存在的解码操作），会将其放入 8042 内部的 Output buffer 寄存器中，
8042 芯片会首先将状态寄存器的 OBF 标志置位，随后将 IBF 置位，表示将产生一个 IRQ1，
然后将 Clock line 置为低电平，以禁止 8042 进一步接收 8048 的数据；然后发送一个 IRQ1
给 Intel 8059A 可编程中断控制器，由它将中断提交给 CPU，CPU 将调用此 IRQ 对应的 ISR 中断服务程序，这就是键盘 Driver 的一个重要部分。随后此 ISR 可以从 8042 的数据端口 60H 
中将 Output buffer 数据读取出来，并进行进一步的处理。读取键盘控制器的数据之后，8042 会将
状态寄存器的 OBF 清位，然后将 Clock line 置为高电平，以允许继续接收 Scan code 等数据。


# /🐉 Keyboard Programming
1. the Linux Programming Interface https://www.man7.org/tlpi/
2. Programming with system calls and libraries - Terminal device control http://osr600doc.xinuos.com/en/SDK_sysprog/CONTENTS.html

Advanced Bash Scripting Guide (ABS) example code:

    Chapter 12. Command Substitution
      Example 15-6. Detecting the arrow keys
      Example 16-59. Capturing Keystrokes

Keyboard 输入，除了可以直接使用 read 这样的命令接收用户的键盘数据，也可以重定向标准输入文件，
将 stdin 定向到 shell 命令，就可以实现输入内容的捕捉，和直接读取键盘相似，只不过读取的是
经过 keymaps 映射处理后的数据。类似 dd 或者 read 这种本身就默认读取 stdin 的命令，就不需要
显式地重定向 stdin 标准输入文件。

为了不在控制台上回显用户输入，可以修改 tty 终端控制台设置，stty -echo 就表示不要回显用户数据。
负号 - 表示取消指定的选项，移除 - 号表示激活指定的 tty 选项。Local settings 选项为终端的用户
本地功能，回显、特殊符号处理等。 Canonical 表示特殊符号（erase, kill, werase, rprnt）
正式处理模式，如果取消此功能，命令就可以即时获取用户键盘输入数据，而不会等待用户敲回车。

```sh
#!/usr/bin/env bash
# stty      - set tty: change and print terminal line settings
# -icanon     Disable "canonical" mode for terminal.
# -echo       disable *local* echo.
# dd        - convert and copy a file
#   bs=BYTES  Read and write up to BYTES bytes at a time (default: 512);
#   count=N   Copy only N input blocks
#   if=FILE   Read from FILE instead of stdin
old=$(stty -g);
stty -icanon -echo;
key=$(dd bs=1 count=1 2> /dev/null);
echo $key;
stty "$old";
```

Keycodes generated by keyboard press events (ESC 0x1B)，Echo Escape:

    echo -en "\e" | xxd

On windows



## US QWERTY Layout Scan Code
1. https://learn.microsoft.com/en-us/windows/win32/inputdev/about-keyboard-input
2. VS 6.0 Quick Reference - Key Scan Codes https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-6.0/aa299374(v=vs.60)
3. [Windows Platform Design Notes - Keyboard Scan Code Specification](http://nikep.net/ms-scancode.pdf)
4. https://superuser.com/questions/550679/where-can-i-find-windows-keyboard-scancode-registry-information
5. https://smallvoid.com/article/winnt-scancode-map.html
5. https://smallvoid.com/article/windows-keyboard-shortcuts.html
6. 2Keys - setup second keyboard https://github.com/Gum-Joe/2Keys

以下是 US QWERTY 键盘布局中的按键与对应的扫描码：

![US QWERTY and Scan Codes](https://learn.microsoft.com/en-us/windows/win32/inputdev/images/keyboard-key-locations.png)


Configure the keyboard mapping using scancode map

It is possible to change the behavior of the different keys on the keyboard 
by changing the scancode map. This can be used to disable the Windows-key so 
one is not thrown out of your favorite game, when by accident have pressed 
the wrong key.

The change the scancode map, so the Windows-key is disabled add/update 
this binary value:

    REGEDIT4

    [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]
    “Scancode Map”=hex:00,00,00,00,00,00,00,00,03,00,00,00,00,00,5b,e0,00,00,5c,e0,\
    00,00,00,00

For those who wants to know the meaning of the above “Scancode Map” values here goes:

    00,00,00,00   Header: Version. Set to all zeroes.
    00,00,00,00   Header: Flags. Set to all zeroes.
    03,00,00,00   3 entries in the map (including null entry).
    00,00,5b,e0   Left Windows Key (0xe05b) -> Disable (0x00).
    00,00,5c,e0   Right Windows Key (0xe05c) -> Disable (0x00).
    00,00,00,00   Null entry.

To also disable the Shutdown key, one would extend the Scancode Map, so it has 4 
entries where the fourth entry becomes ACPI Power Key (0xe0f6) -> Disable (0x00):

    REGEDIT4

    [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]
    “Scancode Map”=hex:00,00,00,00,00,00,00,00,04,00,00,00,00,00,5b,e0,00,00,5c,e0,\
    00,00,f6,e0,00,00,00,00

Note it is also possible to map the the Shutdown keyboard key to become Sleep 
shortcut by going to Control Panel -> Power Options -> Advanced Tab.

```sh
SC Key   SC Key   SC Key        SC Key          SC Key       SC Key
         20 D     40 F6         60 CT F3        80 AT 9      A0 AT Dn Arrow
01 ESC   21 F     41 F7         61 CT F4        81 AT 0      A1 AT PgDn
02 1     22 G     42 F8         62 CT F5        82 AT -      A2 AT Ins
03 2     23 H     43 F9         63 CT F6        82 AT =      A3 AT Del
04 3     24 J     44 F10        64 CT F7        84 CT PgUp   A4 AT / (num)
05 4     25 K     45 Num Lk     65 CT F8        85 F11       A5 AT Tab
06 5     26 L     46 Scrl Lk    66 CT F9        86 F12       A6 AT Enter (num)
07 6     27 ; :   47 Home       67 CT F10       87 SH F11         
08 7     28 ' "   48 Up Arrow   68 AT F1        88 SH F12         
09 8     29 ` ~   49 Pg Up      69 AT F2        89 CT F11       
0A 9     2A L SH  4A - (num)    6A AT F3        8A CT F12       
0B 0     2B \ |   4B 4 LT Arrow 6B AT F4        8B AT F11        
0C - _   2C Z     4C 5 (num)    6C AT F5        8C AT F12        
0D = +   2D X     4D 6 RT Arrow 6D AT F6        8C CT Up Arrow  
0E BKSP  2E C     4E + (num)    6E AT F7        8E CT - (num)   
0F Tab   2F V     4F 1 End      6F AT F8        8F CT 5 (num)   
10 Q     30 B     50 2 Dn Arrow 70 AT F9        90 CT + (num)   
11 W     31 N     51 3 Pg Dn    71 AT F10       91 CT Dn Arrow  
12 E     32 M     52 0 Ins      72 CT PtScr     92 CT Ins       
13 R     33 , <   53 Del .      73 CT LT Arrow  93 CT Del       
14 T     34 . >   54 SH F1      74 CT RT Arrow  94 CT Tab       
15 Y     35 / ?   55 SH F2      75 CT End       95 CT / (num)   
16 U     36 R SH  56 SH F3      76 CT PgDn      96 CT * (num)   
17 I     37 PtScr 57 SH F4      77 CT Home      97 AT Home       
18 O     38 AT    58 SH F5      78 AT 1         98 AT Up Arrow   
19 P     39 Spc   59 SH F6      79 AT 2         99 AT PgUp       
1A [ {   3A CpsLk 5A SH F7      7A AT 3         9A                
1B ] }   3B F1    5B SH F8      7B AT 4         9B AT Left Arrow 
1C Enter 3C F2    5C SH F9      7C AT 5         9C                
1D CT    3D F3    5D SH F10     7D AT 6         9D AT RT Arrow   
1E A     3E F4    5E CT F1      7E AT 7         9E                
1F S     3F F5    5F CT F2      7F AT 8         9F AT End        
```
    Ctrl = CT  Shift = SH  Alt = AT   ScanCode = SC  Right = RT  Left = LT

The keycode that you're going to use in registry consists of two parts 
for example: 4B E0 which is left arrow or 0F 00 which is Tab key, in the 
above list you will find the first part of the key code 4B for example, 
the second part usually is 00 or E0, refs to Scan Code Set 2.



## // Commnand Bytes

通过读写 8042 键盘控制器芯片寄存器数据，可以实现以下目的：

1.  数据写入 64h 端口向 8042 芯片发布命令，60h 端口读取命令的返回结果或命令所需的数据。
2.  通过 64h 端口读取 Status Register 的状态信息；
3.  数据写入 60h 端口向 8048 编码器芯片发布命令；
4.  通过 60h 端口读取来自于键盘的 Scan Code，或 8048 的 ACK 等回复数据。

### cmd:  64h端口（读操作）

   64h 端口读取操作会读取 Status Register 的内容。

       inb (0x64)

   > 执行这个指令之后，AL 寄存器中存放的就是 Status Register 的内容。

### cmd:  64h端口（写操作）

   数据写入 64h 端口就是向 8042 芯片发布命令（Command）：

    Status Register
    | MSb                                                                 LSb |
    |-----------------------|------|------|------|-----|----|-----|-----|-----|
    |   AT-compatible mode: | PERR | RxTO | TxTO | INH | A2 | SYS | IBF | OBF |
    | PS/2-compatible mode: | PERR | TO   | MOBF | INH | A2 | SYS | IBF | OBF |

   1.  写入的字节存放在 Input Register；
   2.  同时会自动设置 **SYS** 为 1，表示输入 Command，而不是 Data；
   3.  64h 端口写入某些命令之前必须确保键盘 disabled，因为写入的命令其返回结果保存在 Output Register，避免命令间的数据覆盖；
   4.  64h 端口写数据之前必须确保 Input Register 无数据，**IBF** 为 0。
       
   ```cpp
   void wait_input_empty(void)  
   {  
        char __b;
   
        do{
            __b = inb(0x64);
        }while(!(__b&0x02));
   }
   
   void disable_keyboard(void)  
   {  
        wait_input_empty();  
        outb(0x64, 0xAD);  
   }
   ```

### cmd:  60h端口（读操作）

   60h 端口读操作获取 Output Register 的内容，内容可能是：

   *   来自于 8048 的数据。这些数据包括 Scan Code，8048 接收到控制命令时的确认（ACK)及回复数据。
   *   通过 64h 端口对 8042 发布的命令的返回结果。

   60h 端口数据读取之前必须确保 Output Register 中有数据（OBF 为 1）。

    ```cpp
       void wait_output_full(void)
       {
          char __b;
       
          do{
            __b = inb(0x64);
          }while(__b&0x01);
       }
       
       unsigned char read_output(void)
       {
          wait_output_full();
          return inb(0x60);
       } 
    ```

### cmd:  60h 端口（写操作）

   60h 端口写入的字节有两种意义：

   1.  64h 端口写入的命令需要参数，则此时写入 60h 的字节就是命令的参数数据；
   2.  否则，写入的字节是发送给 8048 的命令。

   在向60h端口写数据之前，必须确保 Input Register 是空的（OBF 为 0）。

   准备写入 8042 芯片的 Command Byte：

    ```cpp
   void write_command_byte(unsigned char command_byte)
   {
      wait_input_empty();
      outb(0x64,0x60);
      wait_input_empty();
      outb(0x60, command_byte);
   }
   ```




# /🐉 PS/2 Mouse/Keyboard Protocol, 1999, Adam Chapweske
1.  https://www.burtonsys.com/ps2_chapweske.htm
2.  https://oe7twj.at/images/6/6a/PS2_Keyboard.pdf

The PS/2 Mouse/Keyboard Protocol [PICmicro/PS2](http://panda.cs.ndsu.nodak.edu/~achapwes/PICmicro/PS2/ps2.htm)  

  
PS/2 Mouse/Keyboard Protocol  
This article is Copyright 1999, Adam Chapweske
  

## // Introduction


The PS/2 device interface, used by many modern mice and keyboards, 
was developed by IBM and originally appeared in the IBM Technical Reference Manual.
However, this document has not been printed for many years and as far as I know, 
there is currently no official publication of this information.
I have not had access to the IBM Technical Reference Manual, so all information 
on this page comes from my own experiences as well as help from the references 
listed at the bottom of this page.

This document descibes the interface used by the PS/2 mouse, PS/2 keyboard, 
and AT keyboard.

I'll cover the physical and electrical interface, as well as the protocol.
If you need higher-level information, such as commands, data packet formats, 
or other information specific to the keyboard or mouse, I have written 
separate documents for the two devices:

1. [The PS/2 (AT) Keyboard Interface](http://panda.cs.ndsu.nodak.edu/~achapwes/PICmicro/keyboard/atkeyboard.html)  
2. [The PS/2 Mouse Interface](http://panda.cs.ndsu.nodak.edu/~achapwes/PICmicro/mouse/mouse.html)

I also encourage you to check this site's 
[main page](http://panda.cs.ndsu.nodak.edu/~achapwes/PICmicro) 
for more information related to this topic, including projects, 
code, and links related to the mouse and keyboard. Please send an 
[email](mailto:achapwes@panda.cs.ndsu.nodak.edu) if you find 
any mistakes or bad advice on this site.  
  
## // The Physical Interface


The physical PS/2 port is one of two styles of connectors:
The 5-pin DIN or the 6-pin mini-DIN.

Both connectors are completely (electrically) similar; the only practical difference between the two is the arrangement of pins.

This means the two types of connectors can easily be changed with simple 
hard-wired adaptors. These cost about $6 each or you can make your own by 
matching the pins on any two connectors. The DIN standard was created by 
the German Standardization Organization (Deutsches Institut fuer Norm) .
Their website is at [http://www.din.de](http://www.din.de/) 
(this site is in German, but most of their pages are also available in English.)

PC keyboards use either a 6-pin mini-DIN or a 5-pin DIN connector.
If your keyboard has a 6-pin mini-DIN and your computer has a 5-pin DIN 
(or visa versa), the two can be made compatible with the adaptors described above.
Keyboards with the 6-pin mini-DIN are often referred to as "PS/2" keyboards, 
while those with the 5-pin DIN are called "AT" devices ("XT" keyboards also used
the 5-pin DIN, but they are quite old and haven't been made for many years.)
All modern keyboards built for the PC are either PS/2, AT, or USB.
This document _does not_ apply to USB devices, which use a completely 
different interface.

Mice come in a number of shapes and sizes (and interfaces.)
The most popular type is probably the PS/2 mouse, with USB mice gaining popularity.
Just a few years ago, serial mice were also quite popular, but the computer 
industry is abandoning them in support of USB and PS/2 devices.
This document applies only to PS/2 mice.
If you want to interface a serial or USB mouse, there's plenty of information 
available elsewhere on the web.  
  
The cable connecting the keyboard/mouse to the computer is usually about six feet long and consists of four to six 26 AWG wires surrounded by a thin layer of mylar foil sheilding. If you need a longer cable, you can buy PS/2 extenstion cables from most consumer electronics stores. You should not connect multiple extension cables together. If you need a 30-foot keyboard cable, buy a 30-foot keyboard cable. Do not simply connect five 6-foot cables together. Doing so could result in poor communication between the keyboard/mouse and the host.  

As a side note, there is one other type of connector you may run into on keyboards. While most keyboard cables are hard-wired to the keyboard, there are some whose 
cable is not permanently attached and come as a separate component.
These cables have a DIN connector on one end (the end that connects to the 
computer) and a SDL (Sheilded Data Link) connector on the keyboard end.
SDL was created by a company called "AMP."
This connector is somewhat similar to a telephone connector in that it has wires 
and springs rather than pins, and a clip holds it in place.
If you need more information on this connector, you might be able to find it on 
AMP's website at [http://www.connect.amp.com](http://www.connect.amp.com/).
I have only seen this type of connector on (old) XT keyboards, although there 
may be AT keyboards that also use the SDL.
Don't confuse the SDL connector with the USB connector--they probably both 
look similar in my diagram below, but they are actually very different.
Keep in mind that the SDL connector has springs and moving parts, 
while the USB connector does not.

The pinouts for each connector are shown below:  
 

## // 5-pin DIN (AT/XT)

[Male (Plug)](https://www.burtonsys.com/ps2_chapweske_files/fpindin.JPG)  
[Female (Socket)](https://www.burtonsys.com/ps2_chapweske_files/fpdin1.JPG)

        Male                                Female
        Plug                                Socket
    1           3                       3           1
      4       5                           5       4
          2                                   2

    1 - Clock  
    2 - Data  
    3 - Not Implemented  
    4 - Ground  
    5 - Vcc (+5V)

## // 6-pin Mini-DIN (PS/2)

[Male (Plug)](https://www.burtonsys.com/ps2_chapweske_files/spindin.JPG)
[Female (Socket)](https://www.burtonsys.com/ps2_chapweske_files/spindin1.JPG)

        Male                                Female
        Plug                                Socket
      5  ||  6                             6  ||  5
     3        4                           4        3
        1  2                                 2  1

    1 - Data  
    2 - Not Implemented  
    3 - Ground  
    4 - Vcc (+5V)  
    5 - Clock  
    6 - Not Implemented

## // 6-pin SDL

![Plug](https://www.burtonsys.com/ps2_chapweske_files/sdl.jpg)
![Socket](https://www.burtonsys.com/ps2_chapweske_files/sdl1.jpg)

         Plug                                Socket
    ===============                     ===============
      | | | | | |                         | | | | | |
      A B C D E F                         F E D C B A

    A - Not Implemented  
    B - Data  
    C - Ground  
    D - Clock  
    E - Vcc (+5V)  
    F - Not Implemented

  
## // The Electrical Interface


Note:
Throughout this document, I will use the more general term "host" to refer 
to the computer--or whatever the keyboard/mouse is connected to-- and 
the term "device" will refer to the keyboard/mouse.

Vcc/Ground provide power to the keyboard/mouse. The keyboard or mouse 
should not draw more than 100 mA from the host and care must be taken 
to avoid transient surges. Such surges can be caused by "hot-plugging" 
a keyboard/mouse (ie, connect/disconnect the device while the computer's 
power is on.) 

Older motherboards had a surface-mounted fuse protecting the keyboard and 
mouse ports. When this fuse blew, the motherboard was useless to the consumer, 
and non-fixable to the average technician. Most newer motherboards use 
auto-reset "Poly" fuses that go a long way to remedy this problem. 
However, this is not a standard and there's still plenty of older 
motherboards in use. Therefore, I recommend against hot-plugging a 
PS/2 mouse or keyboard.  

> Summary: Power Specifications  
> Vcc = +5V. 

> Max Current = 100 mA.  

The Data and Clock lines are both open-collector with pullup resistors to +5V. 
An "open-collector" interface has two possible state: low, or high impedance. 
In the "low" state, a transistor pulls the line to ground level. In the 
"high impedance" state, the interface acts as an open circuit and doesn't 
drive the line low or high. Furthermore, a "pullup" resistor is connected 
between the bus and Vcc so the bus is pulled high if none of the devices on 
the bus are actively pulling it low. The exact value of this resistor isn't 
too important (1~10 kΩ); larger resistances result in less power consumption 
and smaller resistances result in a faster rise time. A general open-collector 
interface is shown below:  

> Figure 1: General open-collector interface. Data and Clock are read on 
> the microcontroller's pins A and B, respectively. Both lines are normally 
> held at +5V, but can be pulled to ground by asserting logic "1" on C and D. 
> As a result, Data equals D, inverted, and Clock equals C, inverted.  

> ![](https://www.burtonsys.com/ps2_chapweske_files/ps2.JPG)  

  
Note: When looking through examples on this website, you'll notice I use a few 
tricks when implementing an open-collector interface with PIC microcontrollers. 
I use the same pin for both input and output, and I enable the PIC's internal 
pullup resistors rather than using external resistors. A line is pulled to ground 
by setting the corresponding pin to output, and writing a "zero" to that port. 
The line is set to the "high impedance" state by setting the pin to input. 
Taking into account the PIC's built-in protection diodes and sufficient 
current sinking, I think this is a valid configuration. Let me know if your 
experiences have proved otherwise.  
  
## // Communication: General Description  


The PS/2 mouse and keyboard implement a bidirectional synchronous serial protocol.
The bus is "idle" when both lines are high (open-collector). This is the only 
state where the keyboard/mouse is allowed begin transmitting data. The host has 
ultimate control over the bus and may inhibit communication at any time by 
pulling the Clock line low. 


The device always generates the clock signal. If the host wants to send data, 
it must first inhibit communication from the device by pulling Clock low. 
The host then pulls Data low and releases Clock. This is the "Request-to-Send" 
state and signals the device to start generating clock pulses.  

> Summary: Bus States  
> Data = high, Clock = high: _Idle state._  
> Data = high, Clock = low: _Communication Inhibited._  
> Data = low, Clock = high: _Host Request-to-Send_


All data is transmitted one byte at a time and each byte is sent in a frame 
consisting of 11-12 bits.

These bits are:

*   1 start bit. This is always 0.
*   8 data bits, least significant bit first.
*   1 parity bit (odd parity).
*   1 stop bit.  This is always 1.
*   1 acknowledge bit (host-to-device communication only)

The parity bit is set if there is an even number of 1's in the data bits and 
reset (0) if there is an odd number of 1's in the data bits.
The number of 1's in the data bits plus the parity bit always add up to an 
odd number (odd parity.)
This is used for error detection. The keyboard/mouse must check this bit and 
if incorrect it should respond as if it had received an invalid command.  

Data sent from the device to the host is read on the _falling_ edge of the 
clock signal; data sent from the host to the device is read on the _rising_ edge.
The clock frequency must be in the range 10 - 16.7 kHz. This means clock must be 
high for 30 - 50 microseconds and low for 30 - 50 microseconds.. If you're 
designing a keyboard, mouse, or host emulator, you should modify/sample 
the Data line in the middle of each cell. I.e. 15 - 25 microseconds after the 
appropriate clock transition. Again, the keyboard/mouse always generates 
the clock signal, but the host always has ultimate control over communication.

Timing is absolutely crucial. Every time quantity I give in this article must 
be followed exactly.  

## // Communication: Device-to-Host  


The Data and Clock lines are both open collector. A resistor is connected 
between each line and +5V, so the idle state of the bus is high. When the 
keyboard or mouse wants to send information, it first checks the Clock line 
to make sure it's at a high logic level.

If it's not, the host is inhibiting communication and the device must buffer 
any to-be-sent data until the host releases Clock. The Clock line must be 
continuously high for at least 50 microseconds before the device can begin 
to transmit its data. 

As I mentioned in the previous section, the keyboard and mouse use a serial 
protocol with 11-bit frames.

These bits are:

*   1 start bit. This is always 0.
*   8 data bits, least significant bit first.
*   1 parity bit (odd parity).
*   1 stop bit.  This is always 1.

The keyboard/mouse writes a bit on the Data line when Clock is high, and it 
is read by the host when Clock is low. Figures 2 and 3 illustrate this.  

> Figure 2: Device-to-host communication.
> The Data line changes state when Clock is high and that data is valid when 
> Clock is low.

> ![](https://www.burtonsys.com/ps2_chapweske_files/waveform1.jpg)

> Figure 3:
> Scan code for the "Q" key (15h) being sent from a keyboard to the computer.
> Channel A is the Clock signal; channel B is the Data signal.

> ![](https://www.burtonsys.com/ps2_chapweske_files/qscope.JPG)  

The clock frequency is 10-16.7 kHz.
The time from the rising edge of a clock pulse to a Data transition 
must be at least 5 microseconds.
The time from a data transition to the falling edge of a clock pulse 
must be at least 5 microseconds and no greater than 25 microseconds.


The host may inhibit communication at any time by pulling the Clock line 
low for at least 100 microseconds. If a transmission is inhibited before 
the 11th clock pulse, the device must abort the current transmission and 
prepare to retransmit the current "chunk" of data when host releases Clock. 
A "chunk" of data could be a make code, break code, device ID, mouse 
movement packet, etc. For example, if a keyboard is interrupted while 
sending the second byte of a two-byte break code, it will need to retransmit 
both bytes of that break code, not just the one that was interrupted.  

If the host pulls clock low before the first high-to-low clock transition, 
or after the falling edge of the last clock pulse, the keyboard/mouse does 
not need to retransmit any data. However, if new data is created that needs 
to be transmitted, it will have to be buffered until the host releases Clock. Keyboards have a 16-byte buffer for this purpose. If more than 16 bytes worth 
of keystrokes occur, further keystrokes will be ignored until there's room in 
the buffer. Mice only store the most current movement packet for transmission.

## // Host-to-Device Communication


The packet is sent a little differently in host-to-device communication...

First of all, the PS/2 device always generates the clock signal.
If the host wants to send data, it must first put the Clock and Data lines 
in a "Request-to-send" state as follows:

*   Inhibit communication by pulling Clock low for at least 100 microseconds.
*   Apply "Request-to-send" by pulling Data low, then release Clock.

The device should check for this state at intervals not to exceed 10 milliseconds.
When the device detects this state, it will begin generating Clock signals and 
clock in eight data bits and one stop bit.
The host changes the Data line only when the Clock line is low, and data is 
read by the device when Clock is high.
This is opposite of what occours in device-to-host communication.

After the stop bit is received, the device will acknowledge the received byte 
by bringing the Data line low and generating one last clock pulse.
If the host does not release the Data line after the 11th clock pulse, 
the device will continue to generate clock pulses until the the Data line 
is released (the device will then generate an error.)

The host may abort transmission at time before the 11th clock pulse 
(acknowledge bit) by holding Clock low for at least 100 microseconds.

To make this process a little easier to understand, here's the steps the 
host must follow to send data to a PS/2 device:

-  1) Bring the Clock line low for at least 100 microseconds.
-  2) Bring the Data line low.
-  3) Release the Clock line.
-  4) Wait for the device to bring the Clock line low.
-  5) Set/reset the Data line to send the first data bit
-  6) Wait for the device to bring Clock high.
-  7) Wait for the device to bring Clock low.
-  8) Repeat steps 5-7 for the other seven data bits and the parity bit
-  9) Release the Data line.
-  10) Wait for the device to bring Data low.  
-  11) Wait for the device to bring Clock low.
-  12) Wait for the device to release Data and Clock

  
Figure 3 shows this graphically and Figure 4 separates the timing to show which
signals are generated by the host, and which are generated by the PS/2 device.
Notice the change in timing for the "ack" bit--the data transition occours when 
the Clock line is high (rather than when it is low as is the case for the 
other 11 bits.)

Figure 3: Host-to-Device Communication.
![](https://www.burtonsys.com/ps2_chapweske_files/waveform2.jpg)

Figure 4: Detailed host-to-device communication.
![](https://www.burtonsys.com/ps2_chapweske_files/waveform3.jpg)  
 

Referring to Figure 4, there's two time quantities the host looks for. (a) is 
the time it takes the device to begin generating clock pulses after the host 
initially takes the Clock line low, which must be no greater than 15 ms. (b) 
is the time it takes for the packet to be sent, which must be no greater than 2ms.
If either of these time limits is not met, the host should generate an error.
Immediately after the "ack" is received, the host may bring the Clock line low 
to inhibit communication while it processes data.
If the command sent by the host requires a response, that response must be 
received no later than 20 ms after the host releases the Clock line.
If this does not happen, the host generates an error.

## // Other Sources / References


*   [Adam's micro-Resources Home](http://govschl.ndsu.nodak.edu/~achapwes/PICmicro/index.html)



# /🐉 The AT-PS/2 Keyboard Interface
https://www.tayloredge.com/reference/Interface/atkeyboard.pdf

This article is Copyright 2001, Adam Chapweske

## // Introduction

This article tries to cover every aspect of the AT and PS/2 keyboards. 
It includes information on the low-level signals and protocol, scan codes, 
the command set, initialization, compatibility issues, and other miscellaneous 
information. Since it's closely related, I've also included information on 
interfacing your PC's keyboard controller. As of right now, all code samples 
involving the keyboard interface are written in assembly for Microchip's PIC 
microcontrollers. All code samples for interfacing the PC's keyboard controller 
are written in x86 assembly.

I should mention that all of the information in this article comes from my own 
experiences and from other sources that may or may not be accurate. I did not 
consult any official documentation of "AT" or "PS/2" keyboard standards since 
none has been available to me. Therefore, I provide the following disclaimer:

ALL INFORMATION WITHIN THIS ARTICLE IS PROVIDED "AS IS" AND WITHOUT ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
WARRANTIES OF MERCHANTIBILITY AND FITNESS FOR A PARTICULAR PURPOSE. I DO
NOT GUARANTEE ANY INFORMATION IN THIS ARTICLE IS ACCURATE, AND IT SHOULD
BE USED FOR ABSTRACT EDUCATIONAL PURPOSES ONLY.

You may click here to goto my main page. There, you will find other articles, 
code, projects, and links related to the computer keyboard. I am also available 
for private contracting--click here for more information about me, including 
my resume. If you find any errors in this article or have any questions,
feel free to send me an email. I don't have time to respond to them all, 
but I will read them all and keep your questions/comments in mind when 
updating this page.

## // A History Lesson

The most popular keyboards in use today include:

1.  USB keyboard - 
    Latest keyboard supported by all new computers (Macintosh and IBM/compatible). 
    These are relatively complicated to interface and are not covered in this article.
2.  IBM/compatible keyboards - 
    Also known as "AT keyboards" or "PS/2 keyboards", all modern PCs support 
    this device. They're the easiest to interface, and are the subject of this article.
3.  ADB keyboards - 
    Connect to the Apple Desktop Bus of older Macintosh systems. These are not
    covered in this article

IBM introduced a new keyboard with each of its major desktop computer models. 
The original IBM PC, and later the IBM XT, used what we call the "XT keyboard." 
These are obsolete and differ significantly from modern keyboards; the XT keyboard 
is not covered in this article. Next came the IBM AT system and later the IBM PS/2. 
They introduced the keyboards we use today, and are the topic of this article. 
AT keyboards and PS/2 keyboards were very similar devices, but the PS/2 device 
used a smaller connector and supported a few additional features. Nonetheless, 
it remained backward compatible with AT systems and few of the additional features 
ever caught on (since software also wanted to remain backward compatible.) 
Below is a summary of IBM's three major keyboards.


1. IBM PC/XT Keyboard (1981):
   - 83 keys
   - 5-pin DIN connector
   - Simple uni-directional serial protocol
   - Uses what we now refer to as scan code set 1
   - No host-to-keyboard commands
2. IBM AT Keyboard (1984) - NOT backward compatible with XT systems.
   - 84 -101 keys
   - 5-pin DIN connector
   - Bi-directional serial protocol
   - Uses what we now refer to as scan code set 2
   - Eight host-to-keyboard commands
3. IBM PS/2 Keyboard (1987) - Backward compatible with AT systems; NOT compatible with XT
   - systems.
   - 84 - 101 keys
   - 6-pin mini-DIN connector
   - Bi-direction serial protocol
   - Offers optional scan code set 3
   - 17 host-to-keyboard commands 

The PS/2 keyboard was originally an extension of the AT device. It supported 
a few additional host-to-keyboard commands and featured a smaller connector. 
These were the only differences between the two devices. However, computer 
hardware has never been about standards so much as compatibility. For this reason, 
any keyboard you buy today will be compatible with PS/2 and AT systems, 
but it may not fully support all the features of the original devices.

Today, "AT keyboard" and "PS/2 keyboard" refers only to their connector size. 
Which settings/commands any given keyboard does or does not support is 
anyone's guess. For example, the keyboard I'm using right now has a PS/2-style 
connector but only fully supports seven commands, partially supports two, 
and merely "acknowledges" the rest. In contrast, my "Test" keyboard has an
AT-style connector but supports every feature/command of the original PS/2 device 
(plus a few extra.) It's important you treat modern keyboards as compatible, 
not standard. If your project relies on non-general features, it may work on 
some systems, but not on others...

Modern AT-PS/2 compatible keyboards

1. Any number of keys (usually 101 or 104)
2. 5-pin or 6-pin connector; adaptor usually included
3. Bi-directional serial protocol
4. Only scan code set 2 guarenteed.
5. Acknowledges all commands; may not act on all of them.

Footnote 1) XT keyboards use a completely different protocol than that used by 
AT and PS/2 systems, making it incompatible with the newer PCs. However, 
there was a transition period where some keyboard controllers supported both 
XT and AT-PS/2 keyboards (through a switch, jumper, or auto-sense.) Also, 
some keyboards were made to work on both types of systems (again, through the 
use of a switch or auto-sensing.) If you've owned such a PC or keyboard, don't 
let it fool you--XT keyboards are NOT compatible with modern computers.

## // General Description

Keyboards consist of a large matrix of keys, all of which are monitored by an 
on-board processor (called the "keyboard encoder".) The specific processor 
varies from keyboard-to-keyboard but they all basically do the same thing: 
Monitor which key(s) are being pressed/released and send the appropriate data 
to the host. This processor takes care of all the debouncing and buffers any 
data in its 16-byte buffer, if needed. Your motherboard contains a "keyboard 
controller" that is in charge of decoding all of the data received from the 
keyboard and informing your software of what's going on.

All communication between the host and the keyboard uses an IBM protocol.

Footnote 1) Originally, IBM used the Intel 8048 microcontroller as its 
keyboard encoder. The following is a short list of modern keyboard encoders:

    Holtek: HT82K28A, HT82K628A, HT82K68A, HT82K68E
    EMC: EM83050, EM83050H, EM83052H, EM83053H,
    Intel : 8048, 8049
    Motorola : 6868, 68HC11, 6805
    Zilog : Z8602, Z8614, Z8615, Z86C15, Z86E23

Footnote 2) Originally, IBM used the Intel 8042 microcontroller as its 
keyboard controller. This has since been replaces with compatible devices 
integrated in motherboards' chipsets. The keyboard controller is covered 
later in this article.

## // Electrical Interface / Protocol

The AT and PS/2 keyboards use the same protocol as the PS/2 mouse.

## // Scan Codes

Your keyboard's processor spends most of its time "scanning", or monitoring, 
the matrix of keys. If it finds that any key is being pressed, released, 
or held down, the keyboard will send a packet of information known as a 
"scan code" to your computer. There are two different types of scan codes:
"**make codes**" and "**break codes**". A make code is sent when a key is pressed 
or held down. A break code is sent when a key is released. Every key is assigned 
its own unique make code and break code so the host can determine exactly 
what happened to which key by looking at a single scan code. The set of make 
and break codes for every key comprises a "scan code set". There are three 
standard scan code sets, named one, two, and three. All modern keyboards default 
to set two.

So how do you figure out what the scan codes are for each key? Unfortunately, 
there's no simple formula for calculating this. If you want to know what the 
make code or break code is for a specific key, you'll have to look it up in 
a table. I've composed tables for all make codes and break codes in all 
three scan code sets:

1. Scan Code Set 1 - Original XT scan code set; supported by some modern keyboards
2. Scan Code Set 2 - Default scan code set for all modern keyboards
3. Scan Code Set 3 - Optional PS/2 scan code set--rarely used

Footnote 1) Originally, the AT keyboard only supported set two, and the PS/2 
keyboard would default to set two but supported all three. Most modern keyboards 
behave like the PS/2 device, but I have come across a few that didn't support 
set one, set three, or both. Also, if you've ever done any low-level PC 
programming, you've probably notice the keyboard controller supplies 
set ONE scan codes by default. This is because the keyboard controller 
converts all incomming scan codes to set one (this stems from retaining 
compatibility with software written for XT systems.) However, it's still 
set two scan codes being sent down the keyboard's serial line.

## // Make Codes, Break Codes, and Typematic Repeat

Whenever a key is pressed, that key's make code is sent to the computer. 
Keep in mind that a make code only represents a key on a keyboard--it does 
not represent the character printed on that key. This means that there is no 
defined relationship between a make code and an ASCII code. It's up to the host
to translate scan codes to characters or commands.

Although most set two make codes are only one-byte wide, there are a handfull 
of "extended keys" whose make codes are two or four bytes wide. These make codes 
can be identified by the fact that their first byte is E0h.

Just as a make code is sent to the computer whenever a key is pressed, 
a break code is sent whenever a key is released. In addition to every key having 
its own unique make code, they all have their own unique break code. Fortunately, 
however, you won't always have to use lookup tables to figure out a key's 
break code--certain relationships do exist between make codes and break codes. 
Most set two break codes are two bytes long where the first byte is F0h and 
the second byte is the make code for that key. Break codes for extended keys 
are usually three bytes long where the first two bytes are E0h, F0h,
and the last byte is the last byte of that key's make code. As an example, 
I have listed below a the set two make codes and break codes for a few keys:

|     Key      | (Set 2) Make Code | (Set 2) Break Code |
|--------------|-------------------|--------------------|
| "A"          | 1C                | F0, 1C             |
| "5"          | 2E                | F0, 2E             |
| "F10"        | 09                | F0, 09             |
| Right Arrow  | E0, 74            | E0, F0, 74         |
| Right "Ctrl" | E0, 14            | E0, F0, 14         |

Example: What sequence of make codes and break codes should be sent to your 
computer for the character "G" to appear in a word processor? Since this is 
an upper-case letter, the sequence of events that need to take place are: 
press the "Shift" key, press the "G" key, release the "G" key, release the 
"Shift" key. The scan codes associated with these events are the following: 

1. key code (12h): make code for the "Shift" ,
2. key code (34h): make code for the "G" ,
3. key code (F0h,34h): break code for the "G" ,
4. key code (F0h,12h): break code for the "Shift" .

Therefore, the data sent to your computer would be: 12h, 34h, F0h, 34h, F0h, 12h.
If you press a key, its make code is sent to the computer. When you press and 
hold down a key, that key becomes typematic, which means the keyboard will keep 
sending that key's make code until the key is released or another key is pressed. 
To verify this, open a text editor and hold down the "A" key. When you first 
press the key, the character "a" immediately appears on your screen. After a 
short delay, another "a" will appear followed by a whole stream of "a"s until 
you release the "A" key. There are two important parameters here: 
the typematic delay, which is the short delay between the first and second "a", 
and the typematic rate, which is how many characters per second will appear 
on your screen after the typematic delay. The typematic delay can range from 
0.25 seconds to 1.00 second and the typematic rate can range from 2.0 cps 
(characters per second) to 30.0 cps. You may change the typematic rate and 
delay using the "Set Typematic Rate/Delay" (0xF3) command.

Typematic data is not buffered within the keyboard. In the case where more 
than one key is held down, only the last key pressed becomes typematic. 
Typematic repeat then stops when that key is released, even though other 
keys may be held down.

Footnote 1) Actually, the "Pause/Break" key does not have a break code in 
scan code sets one and two. When this key is pressed, its make code is sent; 
when it's released, it doesn't send anything.

## // Reset

At power-on or software reset (see the "Reset" command) the keyboard performs 
a diagnostic self-test referred to as BAT (Basic Assurance Test) and loads 
the following default values:

1. Typematic delay 500 ms.
2. Typematic rate 10.9 cps.
3. * Scan code set 2.
4. * Set all keys typematic/make/break.

Note * :  Variable in some keyboards, hard-coded in others.

When entering BAT, the keyboard enables its three LED indicators, and turns 
them off when BAT has completed. At this time, a BAT completion code of 
either 0xAA (BAT successful) or 0xFC (Error) is sent to the host.

Most keyboards ignore their CLOCK and DATA lines until after the BAT 
completion code has been sent. Therefore, an "Inhibit" condition (CLOCK line low) 
may not prevent the keyboard from sending its BAT completion code.

## // Command Set

Every byte sent to the keyboard gets a response of 0xFA ("acknowledge") from 
the keyboard. The only exceptions to this are the keyboard's response to the 
"Resend" and "Echo" commands. The host should wait for an "acknowledge" before 
sending the next byte to the keyboard. The keyboard clears its output buffer 
in response to any command. The following is a list of all commands that may 
be sent to the keyboard.

1.  0xFF (Reset) - 
    Causes keyboard to enter "Reset" mode. (See "Reset" section.)

2.  0xFE (Resend) - 
    This is used to indicate an error in reception. Keyboard responds by 
    resending the last scan code or command response sent to the host. 
    However, 0xFE is never sent in response to a "Resend" command.

3.  0xFD * (Set Key Type Make) - 
    Allows the host to specify a key that is to send only make codes.
    This key will not send break codes or typematic repeat. 
    This key is specified by its set 3 scan code.

4.  0xFC * (Set Key Type Make/Break) - 
    Similar to "Set Key Type Make", but both make codes and break codes 
    are enabled (typematic is disabled.)

5.  0xFB * (Set Key Type Typematic) - 
    Similar to previous two commands, except make and typematic is enabled; 
    break codes are disabled.

6.  0xFA * (Set All Keys Typematic/Make/Break) - 
    Default setting. Make codes, break codes, and typematic repeat enabled for 
    all keys (except "Print Screen" key, which has no break code in sets 1 and 2.)

7.  0xF9 * (Set All Keys Make) - 
    Causes only make codes to be sent; break codes and typematic repeat 
    are disabled for all keys.

8.  0xF8 * (Set All Keys Make/Break) - 
    Similar to previous two commands, except only typematic repeat is disabled.

9.  0xF7 * (Set All Keys Typematic) - 
    Similar to previous three commands, except only break codes
    are disabled. Make codes and typematic repeat are enabled.

10. 0xF6 (Set Default) - 
    Load default typematic rate/delay (10.9cps / 500ms), key types 
    (all keys typematic/make/break), and scan code set (2).

11. 0xF5 (Disable) - 
    Keyboard stops scanning, loads default values (see "Set Default" command),
    and waits further instructions.

12. 0xF4 (Enable) - 
    Re-enables keyboard after disabled using previous command.

13. 0xF3 (Set Typematic Rate/Delay) - 
    Host follows this command with one argument byte that defines the 
    typematic rate and delay as follows:

    Repeat Rate (cps)
    
    | Bits 0-4 | Rate | Bits 0-4 | Rate | Bits 0-4 | Rate | Bits 0-4 | Rate |
    |----------|------|----------|------|----------|------|----------|------|
    | 00h      |  2.0 | 08h      |  4.0 | 10h      |  8.0 | 18h      | 16.0 |
    | 01h      |  2.1 | 09h      |  4.3 | 11h      |  8.6 | 19h      | 17.1 |
    | 02h      |  2.3 | 0Ah      |  4.6 | 12h      |  9.2 | 1Ah      | 18.5 |
    | 03h      |  2.5 | 0Bh      |  5.0 | 13h      | 10.0 | 1Bh      | 20.0 |
    | 04h      |  2.7 | 0Ch      |  5.5 | 14h      | 10.9 | 1Ch      | 21.8 |
    | 05h      |  3.0 | 0Dh      |  6.0 | 15h      | 12.0 | 1Dh      | 24.0 |
    | 06h      |  3.3 | 0Eh      |  6.7 | 16h      | 13.3 | 1Eh      | 26.7 |
    | 07h      |  3.7 | 0Fh      |  7.5 | 17h      | 15.0 | 1Fh      | 30.0 |

    Delay (seconds)

    | Bits 5-6 | Delay (seconds) |
    |----------|-----------------|
    | 00b      |            0.25 |
    | 01b      |            0.50 |
    | 10b      |            0.75 |
    | 11b      |            1.00 |


14. 0xF2 * (Read ID) - 
    The keyboard responds by sending a two-byte device ID of 0xAB, 0x83.

15. 0xF0 * (Set Scan Code Set) - 
    Host follows this command with one argument byte, that specifies which 
    scan code set the keyboard should use. This argument byte may be 0x01, 0x02, 
    or 0x03 to select scan code set 1, 2, or 3, respectively. You can get the 
    current scan code set from the keyboard by sending this command with 0x00 
    as the argument byte.

16. 0xEE (Echo) - 
    The keyboard responds with "Echo" (0xEE).

17. 0xED (Set/Reset LEDs) - 
    The host follows this command with one argument byte, that specifies
    the state of the keyboard's Num Lock, Caps Lock, and Scroll Lock LEDs. 
    This argument byte is defined as follows:

        | MSb                                                LSb |
        |---|---|---|---|---|-----------|----------|-------------|
        | 0 | 0 | 0 | 0 | 0 | Caps Lock | Num Lock | Scroll Lock |
        |---|---|---|---|---|-----------|----------|-------------|

    - "Scroll Lock" - Scroll Lock LED off(0) / on(1)
    - "Num Lock"    - Num Lock LED off(0) / on(1)
    - "Caps Lock"   - Caps Lock LED off(0) / on(1)

Note * : Originally available in PS/2 keyboards only.

## // Emulation

Jump to keyboard/mouse routines. Source in MPASM for PIC microcontrollers.

## // The i8042 Keyboard Controller:

Up to this point in the article, all information has been presented from 
a hardware point-of-view. However, if you're writing low-level keyboard-related 
software for the host PC, you won't be communicating directly with the keyboard. 
Instead, a keyboard controller provides an interface between the keyboard and 
the peripheral bus. This controller takes care of all the signal-level and
protocol details, as well as providing some conversion, interpretation, and 
handling of scan codes and commands.

An Intel 8042/compatible microcontroller is used as the PC's keyboard controller. 
In modern computers, this microcontroller is hidden within the motherboard's 
chipset, which integrates many controllers in a single package. Nonetheless, 
this device is still there, and the keyboard controller is still commonly 
referred to as "the 8042".

Depending on the motherboard, the keyboard controller may operate in one of 
two modes: "AT-compatible" mode, or "PS/2-compatible" mode. The latter is used 
if a PS/2 mouse is supported by the motherboard. If this is the case, the 8042 
acts as the keyboard controller and the mouse controller.

The keyboard controller auto-detects which mode it is to use according to how 
it's wired to the keyboard port.

The 8042 contains the following registers:

1. A one-byte input buffer - contains byte read from keyboard; read-only
2. A one-byte output buffer - contains byte to-be-written to keyboard; write-only
3. A one-byte status register - 8 status flags; read-only

The first three registers (input, output, status) are directly accessible 
via ports 0x60 and 0x64. The last register (control) is read using the 
"Read Command Byte" command, and written using the "Write Command Byte" command. 
The following table shows how the peripheral ports are used to interface the 8042:

| Port | Read/Write |       Function       |
|------|------------|----------------------|
| 0x60 | Read       | Read Input Buffer    |
| 0x60 | Write      | Write Output Buffer  |
| 0x64 | Read       | Read Status Register |
| 0x64 | Write      | Send Command         |

Writing to port 0x64 doesn't write to any specific register, but sends a 
command for the 8042 to interpret. If the command accepts a parameter, 
this parameter is sent to port 0x60. Likewise, any results returned by the 
command may be read from port 0x60.

When describing the 8042, I may occasionally refer to its physical I/O pins. 
These pins are defined below:

## // AT-compatible mode

Port 1 (Input Port):

| Pin | Name |         Function        |
|-----|------|-------------------------|
|   0 | P10  | Undefined.              |
|   1 | P11  | Undefined.              |
|   2 | P12  | Undefined.              |
|   3 | P13  | Undefined.              |
|   4 | P14  | External RAM            |
|     |      | 1: Enable external RAM  |
|     |      | 0: Disable external RAM |
|   5 | P15  | Manufacturing Setting   |
|     |      | 1: Setting enabled      |
|     |      | 0: Setting disabled     |
|   6 | P16  | Display Type Switch     |
|     |      | 1: Color display        |
|     |      | 0: Monochrome           |
|   7 | P17  | Keyboard Inhibit Switch |
|     |      | 1: Keyboard enabled     |
|     |      | 0: Keyboard inhibited   |
|   7 | --   | Undefined.              |

Port 2 (Output Port):

| Pin | Name |       Function       |
|-----|------|----------------------|
|   0 | P20  | System Reset         |
|     |      | 1: Normal            |
|     |      | 0: Reset computer    |
|   1 | P21  | Gate A20.            |
|   2 | P22  | Undefined.           |
|   3 | P23  | Undefined.           |
|   4 | P24  | Input Buffer Full.   |
|   5 | P25  | Output Buffer Empty. |
|   6 | P26  | Keyboard Clock       |
|     |      | 1: Pull Clock low    |
|     |      | 0: High-Z            |
|   7 | P27  | Keyboard Data:       |
|     |      | 1: Pull Data low     |
|     |      | 0: High-Z            |

Port 3 (Test Port):

| Pin | Name |         Function        |
|-----|------|-------------------------|
|   0 | T0   | Keyboard Clock (Input). |
|   1 | T1   | Keyboard Data (Input).  |
|   2 | --   | Undefined.              |
|   3 | --   | Undefined.              |
|   4 | --   | Undefined.              |
|   5 | --   | Undefined.              |
|   6 | --   | Undefined.              |


## // PS/2-compatible mode

Port 1 (Input Port):

| Pin | Name |         Function        |
|-----|------|-------------------------|
|   0 | P10  | Keyboard Data (Input).  |
|   1 | P11  | Mouse Data (Input).     |
|   2 | P12  | Undefined.              |
|   3 | P13  | Undefined.              |
|   4 | P14  | External RAM            |
|     |      | 1: Enable external RAM  |
|     |      | 0: Disable external RAM |
|   5 | P15  | Manufacturing Setting   |
|     |      | 1: Setting enabled      |
|     |      | 0: Setting disabled     |
|   6 | P16  | Display Type Switch     |
|     |      | 1: Color display        |
|     |      | 0: Monochrome           |
|   7 | P17  | Keyboard Inhibit Switch |
|     |      | 1: Keyboard enabled     |
|     |      | 0: Keyboard disabled    |

Port 2 (Output Port):

| Pin | Name |         Function        |
|-----|------|-------------------------|
|   0 | P20  | System Reset            |
|     |      | 1: Normal               |
|     |      | 0: Reset computer       |
|   1 | P21  | Gate A20.               |
|   2 | P22  | Mouse Data:             |
|     |      | 1: Pull Data low        |
|     |      | 0: High-Z               |
|   3 | P23  | Mouse Clock:            |
|     |      | 1: Pull Clock low       |
|     |      | 0: High-Z               |
|   4 | P24  | Keyboard IBF interrupt: |
|     |      | 1: Assert IRQ 1         |
|     |      | 0: De-assert IRQ 1      |
|   5 | P25  | Mouse IBF interrupt:    |
|     |      | 1: Assert IRQ 12        |
|     |      | 0: De-assert IRQ 12     |
|   6 | P26  | Keyboard Clock:         |
|     |      | 1: Pull Clock low       |
|     |      | 0: High-Z               |
|   7 | P27  | Keyboard Data:          |
|     |      | 1: Pull Data low        |
|     |      | 0: High-Z               |

Port 3 (Test Port):

| Pin | Name |         Function        |
|-----|------|-------------------------|
|   0 | T0   | Keyboard Clock (Input). |
|   1 | T1   | Mouse Clock (Input).    |
|   2 | --   | Undefined.              |
|   3 | --   | Undefined.              |
|   4 | --   | Undefined.              |
|   5 | --   | Undefined.              |
|   6 | --   | Undefined.              |
|   7 | --   | Undefined.              |

(Note: Reading keyboard controller datasheets can be confusing--it will 
refer to the "input buffer" as the "output buffer" and vice versa. This makes 
sense from the point-of-view of someone writing firmware for the controller, 
but for somebody used to interfacing the controller, this can cause problems.
Throughout this document, I only refer to the "input buffer" as the one 
containing input from the keyboard, and the "output buffer" as the one that 
contains output to be sent to the keyboard.)

## // Status Register

The 8042's status flags are read from port 0x64. They contain error information, 
status information, and indicate whether or not data is present in the input 
and output buffers. The flags are defined as follows:

    | MSb                                                                 LSb |
    |-----------------------|------|------|------|-----|----|-----|-----|-----|
    |   AT-compatible mode: | PERR | RxTO | TxTO | INH | A2 | SYS | IBF | OBF |
    | PS/2-compatible mode: | PERR | TO   | MOBF | INH | A2 | SYS | IBF | OBF |


1.  OBF (Output Buffer Full) - 
    Indicates when it's okay to write to output buffer.
    0: Output buffer empty - Okay to write to port 0x60
    1: Output buffer full - Don't write to port 0x60

2.  IBF (Input Buffer Full) - 
    Indicates when input is available in the input buffer.
    0: Input buffer empty - No unread input at port 0x60
    1: Input buffer full - New input can be read from port 0x60

3.  SYS (System flag) - 
    Post reads this to determine if power-on reset, or software reset.
    0: Power-up value - System is in power-on reset.
    1: BAT code received - System has already beed initialized.

4.  A2 (Address line A2) - 
    Used internally by the keyboard controller
    0: A2 = 0 - Port 0x60 was last written to
    1: A2 = 1 - Port 0x64 was last written to

5.  INH (Inhibit flag) - 
    Indicates whether or not keyboard communication is inhibited.
    0: Keyboard Clock = 0 - Keyboard is inhibited
    1: Keyboard Clock = 1 - Keyboard is not inhibited

6.  TxTO (Transmit Timeout) - 
    Indicates keyboard isn't accepting input (kbd may not be plugged in).
    0: No Error - Keyboard accepted the last byte written to it.
    1: Timeout error - Keyboard didn't generate clock signals within 15 ms of "request-to-send".

7.  RxTO (Receive Timeout) - 
    Indicates keyboard didn't respond to a command (kbd probably broke)
    0: No Error - Keyboard responded to last byte.
    1: Timeout error - Keyboard didn't generate clock signals within 20 ms of command reception.

8.  PERR (Parity Error) - 
    Indicates communication error with keyboard (possibly noisy/loose connection)
    0: No Error - Odd parity received and proper command response recieved.
    1: Parity Error - Even parity received or 0xFE received as command response.

9.  MOBF (Mouse Output Buffer Full) - 
    Similar to OBF, except for PS/2 mouse.
    0: Output buffer empty - Okay to write to auxillary device's output buffer
    1: Output buffer full - Don't write to port auxillary device's output buffer

10. TO (General Timout) - 
    Indicates timeout during command write or response. (Same as TxTO + RxTO.)
    0: No Error - Keyboard received and responded to last command.
    1: Timeout Error - See TxTO and RxTO for more information.

[EG: On my PC, the normal value of the 8042's "Status" register is 
14h = 00010100b. This indicates keyboard communication is not inhibited, 
and the 8042 has already completed its self-test ("BAT"). The "Status" 
register is accessed by reading from port 64h ("IN AL, 64h")]

## // Reading keyboard input

When the 8042 recieves a valid scan code from the keyboard, it is converted 
to its set 1 equivalent. The converted scan code is then placed in the input 
buffer, the IBF (**Input Buffer Full**) flag is set, and IRQ 1 is asserted. 
Furthermore, when any byte is received from the keyboard, the 8042 inhibits 
further reception (by pulling the "Clock" line low), so no other scan codes 
will be received until the input buffer is emptied.

If enabled, IRQ 1 will activate the keyboard driver, pointed to by interrupt
vector 0x09. The driver reads the scan code from port 0x60, which causes the 
8042 to de-assert IRQ 1 and reset the IBF flag. The scan code is then processed 
by the driver, which responds to special key combinations and updates an area 
of the system RAM reserved for keyboard input.

If you don't want to patch into interrupt 0x09, you may poll the keyboard 
controller for input. This is accomplished by disabling the 8042's IBF 
Interrupt and polling the IBF flag. This flag is set (1) when data is available 
in the input buffer, and is cleared (0) when data is read from the input buffer. 
Reading the input buffer is accomplished by reading from port 0x60, and the 
IBF flag is at port 0x64, bit 1. The following assembly code illustrates this:

    kbRead:
    WaitLoop: in       al, 64h  ; Read Status byte
              and      al, 10b  ; Test IBF flag (Status<1>)
              jz       WaitLoop ; Wait for IBF = 1
              in       al, 60h  ; Read input buffer

## // Writing to keyboard

When you write to the 8042's output buffer (via port 0x60), the controller 
sets the OBF (**Output Buffer Full**) flag and processes the data. 
The 8042 will send this data to the keyboard and wait for a response. 
If the keyboard does not accept or generate a response within a given 
amount of time, the appropriate timeout flag will be set (see Status register 
definition for more info.) If an incorrect parity bit is read, the 8042 will 
send the **Resend** (0xFE) command to the keyboard. If the keyboard continues 
to send erroneous bytes, the **Parity Error** flag is set in the Status register. 
If no errors occur, the response byte is placed in the input buffer, the 
IBF ("Input Buffer Full") flag is set, and IRQ 1 is activated, signaling the 
keyboard driver.

The following assembly code shows how to write to the output buffer. 
(Remember, after you write to the output buffer, you should use int 9h or 
poll port 64h to get the keyboard's response.)

    kbWrite:
    WaitLoop: in        al, 64h  ; Read Status byte
              and       al, 01b  ; Test OBF flag (Status<0>)
              jnz       WaitLoop ; Wait for OBF = 0
              out       60h, cl  ; Write data to output buffer

## // Keyboard Controller Commands

Commands are sent to the keyboard controller by writing to port 0x64. 
Command parameters are written to port 0x60 after teh command is sent. 
Results are returned on port 0x60. Always test the OBF ("Output Buffer Full") 
flag before writing commands or parameters to the 8042.


1.  0x20 (Read Command Byte) - 
    Returns command byte. (See "Write Command Byte" below).

2.  0x60 (Write Command Byte) - 
    Stores parameter as command byte. Command byte defined as follows:

    ```sh
    | MSb                                                                 LSb |
    |-----------------------|----|------|------|-----|-----|-----|------|-----|
    |  AT-compatible mode:  | -- | XLAT |  PC  | _EN | OVR | SYS |  --  | INT |
    | PS/2-compatible mode: | -- | XLAT | _EN2 | _EN | --  | SYS | INT2 | INT |
    ```

    *   INT (Input Buffer Full Interrupt) - 
        When set, IRQ 1 is generated when data is available in the input buffer.
        0: IBF Interrupt Disabled - You must poll STATUS<IBF> to read input.
        1: IBF Interrupt Enabled - Keyboard driver at software int 0x09 handles input.

    *   SYS (System Flag) - 
        Used to manually set/clear SYS flag in Status register.
        0: Power-on value - Tells POST to perform power-on tests/initialization.
        1: BAT code received - Tells POST to perform "warm boot" tests/initiailization.

    *   OVR (Inhibit Override) - 
        Overrides keyboard's "inhibit" switch on older motherboards.
        0: Inhibit switch enabled - Keyboard inhibited if pin P17 is high.
        1: Inhibit switch disabled - Keyboard not inhibited even if P17 = high.

    *   `_EN` (Disable keyboard) - 
        Disables/enables keyboard interface.
        0: Enable - Keyboard interface enabled.
        1: Disable - All keyboard communication is disabled.

    *   PC ("PC Mode") - ???Enables keyboard interface somehow???
        0: Disable - ???
        1: Enable - ???

    *   XLAT (Translate Scan Codes) - 
        Enables/disables translation to set 1 scan codes.
        0: Translation disabled - Data appears at input buffer exactly as read from keyboard
        1: Translation enabled - Scan codes translated to set 1 before put in input buffer

    *   INT2 (Mouse Input Buffer Full Interrupt) - 
        When set, IRQ 12 is generated when mouse data is available.
        0: Auxillary IBF Interrupt Disabled -
        1: Auxillary IBF Interrupt Enabled -

    *   `_EN2` (Disable Mouse) - Disables/enables mouse interface.
        0: Enable - Auxillary PS/2 device interface enabled
        1: Disable - Auxillary PS/2 device interface disabled


3.  0x90-0x9F (Write to output port) - 
    Writes command's lower nibble to lower nibble of output port 
    (see Output Port definition.)

4.  0xA1 (Get version number) - Returns firmware version number.

5.  0xA4 (Get password) - Returns 0xFA if password exists; otherwise, 0xF1.

6.  0xA5 (Set password) - 
    Set the new password by sending a null-terminated string of scan codes
    as this command's parameter.

7.  0xA6 (Check password) - Compares keyboard input with current password.

8.  0xA7 (Disable mouse interface) - 
    PS/2 mode only. Similar to "Disable keyboard interface" (0xAD) command.

9.  0xA8 (Enable mouse interface) - 
    PS/2 mode only. Similar to "Enable keyboard interface" (0xAE) command.

10. 0xA9 (Mouse interface test) - 
    Returns 0x00 if okay, 0x01 if Clock line stuck low, 0x02 if clock line 
    stuck high, 0x03 if data line stuck low, and 0x04 if data line stuck high.

11. 0xAA (Controller self-test) - Returns 0x55 if okay.

12. 0xAB (Keyboard interface test) - 
    Returns 0x00 if okay, 0x01 if Clock line stuck low, 0x02 if clock line 
    stuck high, 0x03 if data line stuck low, and 0x04 if data line stuck high.

13. 0xAD (Disable keyboard interface) - 
    Sets bit 4 of command byte and disables all communication with keyboard.

14. 0xAE (Enable keyboard interface) - 
    Clears bit 4 of command byte and re-enables communication with keyboard.

15. 0xAF (Get version)

16. 0xC0 (Read input port) - 
    Returns values on input port (see Input Port definition.)

17. 0xC1 (Copy input port LSn) - 
    PS/2 mode only. Copy input port's low nibble to Status register
    (see Input Port definition)

18. 0xC2 (Copy input port MSn) - 
    PS/2 mode only. Copy input port's high nibble to Status register
    (see Input Port definition.)

19. 0xD0 (Read output port) - 
    Returns values on output port (see Output Port definition.)

20. 0xD1 (Write output port) - 
    Write parameter to output port (see Output Port definition.)

21. 0xD2 (Write keyboard buffer) - 
    Parameter written to input buffer as if received from keyboard.

22. 0xD3 (Write mouse buffer) - 
    Parameter written to input buffer as if received from mouse.

23. 0xD4 (Write mouse Device) - Sends parameter to the auxillary PS/2 device.

24. 0xE0 (Read test port) - 
    Returns values on test port 
    (see Test Port definition.)

25. 0xF0-0xFF (Pulse output port) - 
    Pulses command's lower nibble onto lower nibble of output port 
    (see Output Port definition.)


## // Modern Keyboard Controllers

So far, I've only discussed the 8042 keyboard controller. Although modern 
keyboard controllers remain compatible with the original device, compatibility 
is their only requirement (and their goal.)

My motherboard's keyboard controller is a great example of this. I connected a 
microcontroller+LCD in parallel to my keyboard to see what data is sent by 
the keyboard controller. At power-up, the keyboard controller sent the 
"Set LED state" command to turn off all LEDs, then reads the keyboard's ID. 
When I tried writing data to the output buffer, I found the keyboard controller 
only forwards the "Set LED state" command and "Set Typematic Rate/Delay" command. 
It does not allow any other commands to be sent to the keyboard. However, 
it does emulate the keyboard's response by placing "acknowledge" (0xFA) in the 
input buffer when appropriate (or 0xEE in response to the "Echo" command.) 
Furthermore, if the keyboard sends it an erroneous byte, the keyboard controller takes care of error handling (sends the "Retry" command; if byte still erroneous; 
sends error code to keyboard and places error code in input buffer.)

Once again, keep in mind chipset designers are more interested in compatibility
than standardization.

## // Initialization

The following is the communication between my computer and keyboard when it 
boots-up. I beleive the first three commands were initiated by the keyboad 
controller, the next command (which enables Num lock LED) was sent by the BIOS, 
then the rest of the commands were sent my the OS (Win98SE). Remember, these 
results are specific to my computer, but it should give you a general idea as 
to what happens at startup.

    Keyboard: AA Self-test passed ;Keyboard controller init
        Host: ED Set/Reset Status Indicators
    Keyboard: FA Acknowledge
        Host: 00 Turn off all LEDs
    Keyboard: FA Acknowledge
        Host: F2 Read ID
    Keyboard: FA Acknowledge
    Keyboard: AB First byte of ID
        Host: ED Set/Reset Status Indicators ;BIOS init
    Keyboard: FA Acknowledge
        Host: 02 Turn on Num Lock LED
    Keyboard: FA Acknowledge
        Host: F3 Set Typematic Rate/Delay ;Windows init
    Keyboard: FA Acknowledge
        Host: 20 500 ms / 30.0 reports/sec
    Keyboard: FA Acknowledge
        Host: F4 Enable
    Keyboard: FA Acknowledge
        Host: F3 Set Typematic Rate/delay
    Keyboard: FA Acknowledge
        Host: 00 250 ms / 30.0 reports/sec
    Keyboard: FA Acknowledge


## // Keyboard Scan Codes: Set 1

All values are in hexadecimal 101-, 102-, and 104-key keyboards:

```sh
| KEY | MAKE | BREAK ||  KEY   |  MAKE | BREAK ||   KEY   |   MAKE   | BREAK |
|-----|------|-------||--------|-------|-------||---------|----------|-------|
| A   | 1E   | 9E    || 9      | 0A    | 8A    || [       | 1A       | 9A    |
| B   | 30   | B0    || `      | 29    | 89    || INSERT  | E0,52    | E0,D2 |
| C   | 2E   | AE    || -      | 0C    | 8C    || HOME    | E0,47    | E0,97 |
| D   | 20   | A0    || =      | 0D    | 8D    || PG UP   | E0,49    | E0,C9 |
| E   | 12   | 92    || \      | 2B    | AB    || DELETE  | E0,53    | E0,D3 |
| F   | 21   | A1    || BKSP   | 0E    | 8E    || END     | E0,4F    | E0,CF |
| G   | 22   | A2    || SPACE  | 39    | B9    || PG      | DN E0,51 | E0,D1 |
| H   | 23   | A3    || TAB    | 0F    | 8F    || U ARROW | E0,48    | E0,C8 |
| I   | 17   | 97    || CAPS   | 3A    | BA    || L ARROW | E0,4B    | E0,CB |
| J   | 24   | A4    || L SHFT | 2A    | AA    || D ARROW | E0,50    | E0,D0 |
| K   | 25   | A5    || L CTRL | 1D    | 9D    || R ARROW | E0,4D    | E0,CD |
| L   | 26   | A6    || L GUI  | E0,5B | E0,DB || NUM     | 45       | C5    |
| M   | 32   | B2    || L ALT  | 38    | B8    || KP /    | E0,35    | E0,B5 |
| N   | 31   | B1    || R SHFT | 36    | B6    || KP *    | 37       | B7    |
| O   | 18   | 98    || R CTRL | E0,1D | E0,9D || KP -    | 4A       | CA    |
| P   | 19   | 99    || R GUI  | E0,5C | E0,DC || KP +    | 4E       | CE    |
| Q   | 10   | 19    || R ALT  | E0,38 | E0,B8 || KP EN   | E0,1C    | E0,9C |
| R   | 13   | 93    || APPS   | E0,5D | E0,DD || KP .    | 53       | D3    |
| S   | 1F   | 9F    || ENTER  | 1C    | 9C    || KP 0    | 52       | D2    |
| T   | 14   | 94    || ESC    | 01    | 81    || KP 1    | 4F       | CF    |
| U   | 16   | 96    || F1     | 3B    | BB    || KP 2    | 50       | D0    |
| V   | 2F   | AF    || F2     | 3C    | BC    || KP 3    | 51       | D1    |
| W   | 11   | 91    || F3     | 3D    | BD    || KP 4    | 4B       | CB    |
| X   | 2D   | AD    || F4     | 3E    | BE    || KP 5    | 4C       | CC    |
| Y   | 15   | 95    || F5     | 3F    | BF    || KP 6    | 4D       | CD    |
| Z   | 2C   | AC    || F6     | 40    | C0    || KP 7    | 47       | C7    |
| 0   | 0B   | 8B    || F7     | 41    | C1    || KP 8    | 48       | C8    |
| 1   | 02   | 82    || F8     | 42    | C2    || KP 9    | 49       | C9    |
| 2   | 03   | 83    || F9     | 43    | C3    || ]       | 1B       | 9B    |
| 3   | 04   | 84    || F10    | 44    | C4    || ;       | 27       | A7    |
| 4   | 05   | 85    || F11    | 57    | D7    || '       | 28       | A8    |
| 5   | 06   | 86    || F12    | 58    | D8    || ,       | 33       | B3    |
| 6   | 07   | 87    || PRNT   | E0,2A,| E0,B7,|| .       | 34       | B4    |
|     |      |       || SCRN   | E0,37 | E0,AA ||         |          |       |
| 7   | 08   | 88    || SCROLL | 46    | C6    || /       | 35       | B5    |
| 8   | 09   | 89    || PAUSE  | E1,1D,45 | -NONE- ||     |          |       |
|     |      |       ||        | E1,9D,C5 | -NONE- ||     |          |       |
```

|  Key  | Make Code | Break Code |
|-------|-----------|------------|
| Power | E0, 5E    | E0, DE     |
| Sleep | E0, 5F    | E0, DF     |
| Wake  | E0, 63    | E0, E3     |

|      Key       | Make Code | Break Code |
|----------------|-----------|------------|
| Next Track     | E0, 19    | E0, 99     |
| Previous Track | E0, 10    | E0, 90     |
| Stop           | E0, 24    | E0, A4     |
| Play/Pause     | E0, 22    | E0, A2     |
| Mute           | E0, 20    | E0, A0     |
| Volume Up      | E0, 30    | E0, B0     |
| Volume Down    | E0, 2E    | E0, AE     |
| Media Select   | E0, 6D    | E0, ED     |
| E-Mail         | E0, 6C    | E0, EC     |
| Calculator     | E0, 21    | E0, A1     |
| My Computer    | E0, 6B    | E0, EB     |
| WWW Search     | E0, 65    | E0, E5     |
| WWW Home       | E0, 32    | E0, B2     |
| WWW Back       | E0, 6A    | E0, EA     |
| WWW Forward    | E0, 69    | E0, E9     |
| WWW Stop       | E0, 68    | E0, E8     |
| WWW Refresh    | E0, 67    | E0, E7     |
| WWW Favorites  | E0, 66    | E0, E6     |

## // Keyboard Scan Codes: Set 2

All values are in hexadecimal 101-, 102-, and 104-key keyboards:

```sh
| KEY | MAKE | BREAK ||  KEY   |  MAKE  |  BREAK   ||   KEY   |  MAKE |  BREAK   |
|-----|------|-------||--------|--------|----------||---------|-------|----------|
| A   | 1C   | F0,1C || 9      | 46     | F0,46    || [       | 54    | FO,54    |
| B   | 32   | F0,32 || `      | 0E     | F0,0E    || INSERT  | E0,70 | E0,F0,70 |
| C   | 21   | F0,21 || -      | 4E     | F0,4E    || HOME    | E0,6C | E0,F0,6C |
| D   | 23   | F0,23 || =      | 55     | FO,55    || PG UP   | E0,7D | E0,F0,7D |
| E   | 24   | F0,24 || \      | 5D     | F0,5D    || DELETE  | E0,71 | E0,F0,71 |
| F   | 2B   | F0,2B || BKSP   | 66     | F0,66    || END     | E0,69 | E0,F0,69 |
| G   | 34   | F0,34 || SPACE  | 29     | F0,29    || PG DN   | E0,7A | E0,F0,7A |
| H   | 33   | F0,33 || TAB    | 0D     | F0,0D    || U ARROW | E0,75 | E0,F0,75 |
| I   | 43   | F0,43 || CAPS   | 58     | F0,58    || L ARROW | E0,6B | E0,F0,6B |
| J   | 3B   | F0,3B || L SHFT | 12     | FO,12    || D ARROW | E0,72 | E0,F0,72 |
| K   | 42   | F0,42 || L CTRL | 14     | FO,14    || R ARROW | E0,74 | E0,F0,74 |
| L   | 4B   | F0,4B || L GUI  | E0,1F  | E0,F0,1F || NUM     | 77    | F0,77    |
| M   | 3A   | F0,3A || L ALT  | 11     | F0,11    || KP /    | E0,4A | E0,F0,4A |
| N   | 31   | F0,31 || R SHFT | 59     | F0,59    || KP *    | 7C    | F0,7C    |
| O   | 44   | F0,44 || R CTRL | E0,14  | E0,F0,14 || KP -    | 7B    | F0,7B    |
| P   | 4D   | F0,4D || R GUI  | E0,27  | E0,F0,27 || KP +    | 79    | F0,79    |
| Q   | 15   | F0,15 || R ALT  | E0,11  | E0,F0,11 || KP EN   | E0,5A | E0,F0,5A |
| R   | 2D   | F0,2D || APPS   | E0,2F  | E0,F0,2F || KP .    | 71    | F0,71    |
| S   | 1B   | F0,1B || ENTER  | 5A     | F0,5A    || KP 0    | 70    | F0,70    |
| T   | 2C   | F0,2C || ESC    | 76     | F0,76    || KP 1    | 69    | F0,69    |
| U   | 3C   | F0,3C || F1     | 05     | F0,05    || KP 2    | 72    | F0,72    |
| V   | 2A   | F0,2A || F2     | 06     | F0,06    || KP 3    | 7A    | F0,7A    |
| W   | 1D   | F0,1D || F3     | 04     | F0,04    || KP 4    | 6B    | F0,6B    |
| X   | 22   | F0,22 || F4     | 0C     | F0,0C    || KP 5    | 73    | F0,73    |
| Y   | 35   | F0,35 || F5     | 03     | F0,03    || KP 6    | 74    | F0,74    |
| Z   | 1A   | F0,1A || F6     | 0B     | F0,0B    || KP 7    | 6C    | F0,6C    |
| 0   | 45   | F0,45 || F7     | 83     | F0,83    || KP 8    | 75    | F0,75    |
| 1   | 16   | F0,16 || F8     | 0A     | F0,0A    || KP 9    | 7D    | F0,7D    |
| 2   | 1E   | F0,1E || F9     | 01     | F0,01    || ]       | 5B    | F0,5B    |
| 3   | 26   | F0,26 || F10    | 09     | F0,09    || ;       | 4C    | F0,4C    |
| 4   | 25   | F0,25 || F11    | 78     | F0,78    || '       | 52    | F0,52    |
| 5   | 2E   | F0,2E || F12    | 07     | F0,07    || ,       | 41    | F0,41    |
| 6   | 36   | F0,36 || PRNT   | E0,12, | E0,F0,   || .       | 49    | F0,49    |
|     |      |       || SCRN   | E0,7C  | 7C,E0,   ||         |       |          |
|     |      |       ||        |        | F0,12    ||         |       |          |
| 7   | 3D   | F0,3D || SCROLL | 7E     | F0,7E    || /       | 4A    | F0,4A    |
| 8   | 3E   | F0,3E || PAUSE  | E1,14,77,| -NONE- ||         |       |          |
|     |      |       ||        | E1,F0,14,|        ||         |       |          |
|     |      |       ||        | F0,77    |        ||         |       |          |
```

| Key Make |  Code  | Break Code |
|----------|--------|------------|
| Power    | E0, 37 | E0, F0, 37 |
| Sleep    | E0, 3F | E0, F0, 3F |
| Wake     | E0, 5E | E0, F0, 5E |

|      Key       | Make Code | Break Code |
|----------------|-----------|------------|
| Next Track     | E0, 4D    | E0, F0, 4D |
| Previous Track | E0, 15    | E0, F0, 15 |
| Stop           | E0, 3B    | E0, F0, 3B |
| Play/Pause     | E0, 34    | E0, F0, 34 |
| Mute           | E0, 23    | E0, F0, 23 |
| Volume Up      | E0, 32    | E0, F0, 32 |
| Volume Down    | E0, 21    | E0, F0, 21 |
| Media Select   | E0, 50    | E0, F0, 50 |
| E-Mail         | E0, 48    | E0, F0, 48 |
| Calculator     | E0, 2B    | E0, F0, 2B |
| My Computer    | E0, 40    | E0, F0, 40 |
| WWW Search     | E0, 10    | E0, F0, 10 |
| WWW Home       | E0, 3A    | E0, F0, 3A |
| WWW Back       | E0, 38    | E0, F0, 38 |
| WWW Forward    | E0, 30    | E0, F0, 30 |
| WWW Stop       | E0, 28    | E0, F0, 28 |
| WWW Refresh    | E0, 20    | E0, F0, 20 |
| WWW Favorites  | E0, 18    | E0, F0, 18 |

## // AT Keyboard Scan Codes: Set 3

| KEY | MAKE | BREAK |   |  KEY   | MAKE | BREAK |   |   KEY   | MAKE | BREAK |
|-----|------|-------|---|--------|------|-------|---|---------|------|-------|
| A   | 1C   | F0,1C |   | 9      | 46   | F0,46 |   | [       | 54   | F0,54 |
| B   | 32   | F0,32 |   | `      | 0E   | F0,0E |   | INSERT  | 67   | F0,67 |
| C   | 21   | F0,21 |   | -      | 4E   | F0,4E |   | HOME    | 6E   | F0,6E |
| D   | 23   | F0,23 |   | =      | 55   | F0,55 |   | PG UP   | 6F   | F0,6F |
| E   | 24   | F0,24 |   | \      | 5C   | F0,5C |   | DELETE  | 64   | F0,64 |
| F   | 2B   | F0,2B |   | BKSP   | 66   | F0,66 |   | END     | 65   | F0,65 |
| G   | 34   | F0,34 |   | SPACE  | 29   | F0,29 |   | PG DN   | 6D   | F0,6D |
| H   | 33   | F0,33 |   | TAB    | 0D   | F0,0D |   | U ARROW | 63   | F0,63 |
| I   | 43   | F0,48 |   | CAPS   | 14   | F0,14 |   | L ARROW | 61   | F0,61 |
| J   | 3B   | F0,3B |   | L SHFT | 12   | F0,12 |   | D ARROW | 60   | F0,60 |
| K   | 42   | F0,42 |   | L CTRL | 11   | F0,11 |   | R ARROW | 6A   | F0,6A |
| L   | 4B   | F0,4B |   | L WIN  | 8B   | F0,8B |   | NUM     | 76   | F0,76 |
| M   | 3A   | F0,3A |   | L ALT  | 19   | F0,19 |   | KP /    | 4A   | F0,4A |
| N   | 31   | F0,31 |   | R SHFT | 59   | F0,59 |   | KP *    | 7E   | F0,7E |
| O   | 44   | F0,44 |   | R CTRL | 58   | F0,58 |   | KP -    | 4E   | F0,4E |
| P   | 4D   | F0,4D |   | R WIN  | 8C   | F0,8C |   | KP +    | 7C   | F0,7C |
| Q   | 15   | F0,15 |   | R ALT  | 39   | F0,39 |   | KP EN   | 79   | F0,79 |
| R   | 2D   | F0,2D |   | APPS   | 8D   | F0,8D |   | KP .    | 71   | F0,71 |
| S   | 1B   | F0,1B |   | ENTER  | 5A   | F0,5A |   | KP 0    | 70   | F0,70 |
| T   | 2C   | F0,2C |   | ESC    | 08   | F0,08 |   | KP 1    | 69   | F0,69 |
| U   | 3C   | F0,3C |   | F1     | 07   | F0,07 |   | KP 2    | 72   | F0,72 |
| V   | 2A   | F0,2A |   | F2     | 0F   | F0,0F |   | KP 3    | 7A   | F0,7A |
| W   | 1D   | F0,1D |   | F3     | 17   | F0,17 |   | KP 4    | 6B   | F0,6B |
| X   | 22   | F0,22 |   | F4     | 1F   | F0,1F |   | KP 5    | 73   | F0,73 |
| Y   | 35   | F0,35 |   | F5     | 27   | F0,27 |   | KP 6    | 74   | F0,74 |
| Z   | 1A   | F0,1A |   | F6     | 2F   | F0,2F |   | KP 7    | 6C   | F0,6C |
| 0   | 45   | F0,45 |   | F7     | 37   | F0,37 |   | KP 8    | 75   | F0,75 |
| 1   | 16   | F0,16 |   | F8     | 3F   | F0,3F |   | KP 9    | 7D   | F0,7D |
| 2   | 1E   | F0,1E |   | F9     | 47   | F0,47 |   | ]       | 5B   | F0,5B |
| 3   | 26   | F0,26 |   | F10    | 4F   | F0,4F |   | ;       | 4C   | F0,4C |
| 4   | 25   | F0,25 |   | F11    | 56   | F0,56 |   | '       | 52   | F0,52 |
| 5   | 2E   | F0,2E |   | F12    | 5E   | F0,5E |   | ,       | 41   | F0,41 |
| 6   | 36   | F0,36 |   | PRNT   | 57   | F0,57 |   | .       | 49   | F0,49 |
|     |      |       |   | SCRN   |      |       |   |         |      |       |
| 7   | 3D   | F0,3D |   | SCROLL | 5F   | F0,5F |   | /       | 4A   | F0,4A |
| 8   | 3E   | F0,3E |   | PAUSE  | 62   | F0,62 |   |         |      |       |


## // PS/2 Device Routines:

Copywrite 2001, Adam Chapweske

These routines can be used to emulate a PS/2 mouse or keyboard. They were 
written for a PIC16F84 @ 4.61 MHz +/- 25% (perfect for a 5k/20pF RC oscillator). 
For more information about the PS/2 mouse, keyboard, and their protocol, 
check out one of the folowing links:

Header:

```sh
;-------------------------------------------------------------------------------------------
; CLOCK/TIMING INFORMATION:
;-------------------------------------------------------------------------------------------
;
; PS/2 bus clock low time = 40 us +/- 25% (30 us - 50 us)
; PS/2 bus clock high time = 40 us +/- 25% (30 us - 50 us)
; RC osc @ 20pF/5k = 4.61 MHz +/- 25% (3.50 MHz - 5.76 MHz)
; 1 instruction cycle @ 4.61 MHz (RC) = 0.87 us +/- 25% (0.65 us - 1.09 us)
; Optimum PS/2 bus clock low time @4.61MHz = 45.97 instruction cycles
; Actual PS/2 bus clock low time = 46 instruction cycles
; Actual PS/2 bus clock low time @4.61MHz (RC) = 40.0us +/- 25% (30us-50us)
; Actual PS/2 bus clock frequency @461MHz (RC) = 12.5 kHz +/- 25% (10.0kHz-16.7kHz)
;-------------------------------------------------------------------------------------------
; HEADER:
;------------------------------------------------------------------------------------------- 

    TITLE "PS/2 Device Routines"
    SUBTITLE "By Adam Chapweske"
    LIST P=16F84
    INCLUDE "p16f84.inc"
    RADIX DEC
    ERRORLEVEL -224, 1
    __CONFIG _CP_OFF & _WDT_OFF & _RC_OSC

;-------------------------------------------------------------------------------------------
; DEFINES:
;-------------------------------------------------------------------------------------------
#DEFINE DATA PORTB, 7
#DEFINE CLOCK PORTB, 6
;-------------------------------------------------------------------------------------------
; RAM ALLOCATION:
;-------------------------------------------------------------------------------------------
    cblock
        TEMP0
        RECEIVE
        PARITY
        COUNTER
    endc
```

Required Routines & Macros:

```sh
;-------------------------------------------------------------------------------------------
; MACROS:
;-------------------------------------------------------------------------------------------
Delay macro Time  ;Delay "Cycles" instruction cycles
 if (Time==1)
     nop
     exitm
 endif
 if (Time==2)
     goto $ + 1
     exitm
 endif
 if (Time==3)
 nop
     goto $ + 1
     exitm
 endif
 if (Time==4)
     goto $ + 1
     goto $ + 1
     exitm
 endif
 if (Time==5)
     goto $ + 1
     goto $ + 1
     nop
     exitm
 endif
 if (Time==6)
     goto $ + 1
     goto $ + 1
     goto $ + 1
     exitm
 endif
 if (Time==7)
     goto $ + 1
     goto $ + 1
     goto $ + 1
     nop
     exitm
 endif
 if (Time%4==0)
     movlw (Time-4)/4
     call Delay_Routine
     exitm
 endif
 if (Time%4==1)
     movlw (Time-5)/4
     call Delay_Routine
     nop
     exitm
 endif
 if (Time%4==2)
     movlw (Time-6)/4
     call Delay_Routine
     goto $ + 1
     exitm
 endif
 if (Time%4==3)
     movlw (Time-7)/4
     call Delay_Routine
     goto $ + 1
     nop
     exitm
 endif
 endm
;-------------------------------------------------------------------------------------------
; DELAY:
;-------------------------------------------------------------------------------------------
;Delays 4w+4 cycles (including call,return, and movlw) (0=256)
Delay_Routine addlw -1            ;Precise delays used in I/O
              btfss STATUS, Z
              goto Delay_Routine
              return
ByteOut:
```

Sends a byte in w to the host. Returns 0xFE if inhibited during transmission. 
Returns 0xFF if host interrupts to send its own data. Returns 0x00 if byte 
sent successfully.

```sh
;-------------------------------------------------------------------------------------------
; OUTPUT ONE BYTE: - TIMING IS CRITICAL!!!
;-------------------------------------------------------------------------------------------
ByteOut      movwf  TEMP0
InhibitLoop  btfss  CLOCK           ;Test for inhibit
             goto   InhibitLoop
             Delay  50
             btfss  CLOCK
             goto   InhibitLoop
             btfss  DATA            ;Check for request-to-send
             retlw  0xFF
             clrf   PARITY
             movlw  0x08
             movwf  COUNTER
             movlw  0x00
             call   BitOut          ;Start bit (0)
             btfss  CLOCK           ;Test for inhibit
             goto   ByteOutEnd
             Delay  4
ByteOutLoop  movf   TEMP0, w
             xorwf  PARITY, f
             call   BitOut          ;Data bits
             btfss  CLOCK           ;Test for inhibit
             goto   ByteOutEnd
             rrf    TEMP0, f
             decfsz COUNTER, f
             goto   ByteOutLoop
             Delay  2
             comf   PARITY, w
             call   BitOut          ;Parity bit
             btfss  CLOCK           ;Test for inhibit
             goto   ByteOutEnd
             Delay  5
             movlw  0xFF
             call   BitOut          ;Stop bit (1)
             Delay  48
             retlw  0x00
ByteOutEnd   bsf    STATUS, RP0
             bsf    DATA
             bsf    CLOCK
             bcf    STATUS, RP0
             retlw  0xFE


BitOut       bsf    STATUS, RP0
             andlw  0x01
             btfss  STATUS, Z
             bsf    DATA
             btfsc  STATUS, Z
             bcf    DATA
             Delay  21
             bcf    CLOCK
             Delay  45
             bsf    CLOCK
             bcf    STATUS, RP0
             Delay  5
             return
ByteIn:
```

Reads a byte from the host. Result in "RECEIVE" register. Returns 0xFE in w 
if host aborts transmission. Returns 0xFF in w if framing/parity error detected. 
Returns 0x00 in w if byte received
successfully.

```sh
;-------------------------------------------------------------------------------------------
; READ ONE BYTE: - TIMING IS CRITICAL!!!
;-------------------------------------------------------------------------------------------
ByteIn      btfss   CLOCK             ;Wait for start bit
            goto    ByteIn
            btfsc   DATA
            goto    ByteIn
            movlw   0x08
            movwf   COUNTER
            clrf    PARITY
            Delay   28
ByteInLoop call BitIn                 ;Data bits
            btfss   CLOCK             ;Test for inhibit
            retlw   0xFE
            bcf     STATUS, C
            rrf     RECEIVE, f
            iorwf   RECEIVE, f
            xorwf   PARITY,f
            decfsz  COUNTER, f
            goto    ByteInLoop
            Delay   1
            call    BitIn             ;Parity bit
            btfss   CLOCK             ;Test for inhibit
            retlw   0xFE
            xorwf   PARITY, f
            Delay   5
ByteInLoop1 Delay   1
            call    BitIn             ;Stop bit
            btfss   CLOCK             ;Test for inhibit
            retlw   0xFE
            xorlw   0x00
            btfsc   STATUS, Z
            clrf    PARITY
            btfsc   STATUS, Z         ;Stop bit = 1?
            goto    ByteInLoop1       ; No--keep clocking.
            bsf     STATUS, RP0       ;Acknowledge
            bcf     DATA
            Delay   11
            bcf     CLOCK
            Delay   45
            bsf     CLOCK
            Delay   7
            bsf     DATA
            bsf     DATA
            bcf     STATUS, RP0
            btfss   PARITY, 7         ;Parity correct?
            retlw   0xFF              ; No--return error
            Delay   45
            retlw   0x00
BitIn       Delay   8
            bsf     STATUS, RP0
            bcf     CLOCK
            Delay   45
            bsf     CLOCK
            bcf     STATUS, RP0
            Delay   21
            btfsc   DATA
            retlw   0x80
            retlw   0x00
```


# /🐉 Keyboard scancodes by Andries Brouwer
1. v1.2g, 2009-07-07 https://www.win.tue.nl/~aeb/linux/kbd/scancodes.html
2. v1.2e, 2004-05-20 https://www.scs.stanford.edu/10wi-cs140/pintos/specs/kbd/scancodes.html

* * *

Keyboard scancodes

Andries Brouwer, `aeb@cwi.nl`

v1.2g, 2009-07-07

_This note contains some information about PC keyboard scancodes._

* * *

1. Keyboard scancodes

  - 1.1 Key release
  - 1.2 Protocol scancodes
  - 1.3 Escape scancodes
  - 1.4 Ordinary scancodes
  - 1.5 Escaped scancodes
  - 1.6 Fake shifts
  - 1.7 Added non-fake shifts
  - 1.8 Turbo Mode
  - 1.9 Power Saving
  - 1.10 Initializing special keyboards
  - 1.11 Manipulating extra LEDs
  - 1.12 The laptop FN key

2. Special keyboards - XT keyboards

  - 2.1 XT keyboard
  - 2.2 Victor keyboard
  - 2.3 Olivetti M24 keyboard
  - 2.4 Telerate keyboard
  - 2.5 NCR keyboard
  - 2.6 Cherry G80-0777

3. Special keyboards - Amstrad/Schneider keyboards

  - 3.1 Amstrad/Schneider PC1512
  - 3.2 Amstrad/Schneider other models

4. Special keyboards - AT keyboards

5. Special keyboards - MF II keyboards

  - 5.1 Nokia keyboard
  - 5.2 Focus KeyPro FK-9000 keyboard
  - 5.3 BTC keyboard
  - 5.4 LK411 and LK450 keyboards
  - 5.5 An OmniKey keyboard
  - 5.6 Compaq Armada laptop keyboard
  - 5.7 GRiD 2260 keyboard
  - 5.8 An old Olivetti keyboard
  - 5.9 Cherry G81-3000
  - 5.10 Accord keyboard
  - 5.11 Trust Ergonomic keyboard
  - 5.12 Brazilian keyboards
  - 5.13 RC930 keyboard
  - 5.14 Tandberg Data keyboard
  - 5.15 Host Connected keyboard
  - 5.16 Safeway keyboards
  - 5.17 A nameless USB keyboard
  - 5.18 Keyboards with many keys
  - 5.19 A keyboard treating PrtSc/SysRq like Pause/Break

6. Special keyboards - MF II keyboards with CD and/or Internet buttons

  - 6.1 Compaq keyboards
  - 6.2 IBM keyboards
  - 6.3 Logitech keyboards
  - 6.4 Microsoft keyboards
  - 6.5 Labtec keyboards
  - 6.6 Safeway keyboards
  - 6.7 Internet Wireless Keyboard
  - 6.8 Omnibook keyboard
  - 6.9 EZ Button keyboard
  - 6.10 Chicony KBP-8993 keyboard
  - 6.11 Keyboards for HP Kayak and Vectra
  - 6.12 A keyboard
  - 6.13 Yahoo! keyboard
  - 6.14 Honeywell Multimedia Keyboard
  - 6.15 Samsung Ergonomics Keyboard
  - 6.16 The "LiteOn MediaTouch Keyboard" type SK-2500
  - 6.17 The Acer Aspire 1310LC laptop
  - 6.18 The Emachines eKB-5190(A) keyboard

7. NCD keyboards

  - 7.1 A Japanese keyboard using e0 as ordinary scancode
  - 7.2 The NCD N-123NA keyboard
  - 7.3 The NCD N-123UX keyboard
  - 7.4 The NCD N-97 keyboard
  - 7.5 NCD X terminals

8. Japanese keyboards

  - 8.1 Japanese 86/106 keyboards
  - 8.2 Description of the all-Japanese keys
  - 8.3 A Japanese keyboard that imitates a US one

9. Korean keyboards

  - 9.1 An A4tech keyboard
  - 9.2 The DEC LK201-K

10. Keyboard-internal scancodes

  - 10.1 Three scancode sets
  - 10.2 Make and Break codes
  - 10.3 Translation
  - 10.4 Correspondence
  - 10.5 Use
  - 10.6 A table
  - 10.7 Vendor extensions

11. The AT keyboard controller

  - 11.1 The keyboard controller status register
  - 11.2 The keyboard controller command byte
  - 11.3 Keyboard controller commands
  - 11.4 The input port P1
  - 11.5 The output port P2
  - 11.6 The test port T

12. Keyboard commands

  - 12.1 Keyboard command details

13. The PS/2 Mouse

  - 13.1 Modes
  - 13.2 Scaling
  - 13.3 PS/2 mouse protocol
  - 13.4 Mouse Commands
  - 13.5 Sliced parameters
  - 13.6 Synaptics Touchpad
  - 13.7 Vendor extensions

14. USB

15. Reporting



* * *

# /KBD 1. Keyboard scancodes


The data from a keyboard comes mainly in the form of scancodes, produced by key presses or used in the protocol with the computer. ( [Different codes](#kbd10_scancodesets) are used by the keyboard firmware internally, and there also exist several [sets of scancodes](#kbd10_scancodesets). Here in this section we only talk about the default codes - those from translated scancode set 2. Less common modes are discussed [below](#kbd10_scancodesets).) Each key press and key release produces between 0 and 6 scancodes.

## //KBD 1.1 Key release

Below I'll only mention the scancode for key press (\`make'). The scancode for key release (\`break') is obtained from it by setting the high order bit (adding 0x80 = 128). Thus, Esc press produces scancode **01**, Esc release scancode **81** (hex). For sequences things are similar: Keypad-/ gives **e0** **35** when pressed, **e0** **b5** when released. Most keyboards will repeat the make code (key down code) when the key repeats. Some will also fake Shift down and Shift up events during the repeat.

The keys PrtSc/SysRq and Pause/Break are special. The former produces scancode **e0** **2a** **e0** **37** when no modifier key is pressed simultaneously, **e0** **37** together with Shift or Ctrl, but **54** together with (left or right) Alt. (And one gets the expected sequences upon release. But see [below](#kbd05_mtek).) The latter produces scancode sequence **e1** **1d** **45** **e1** **9d** **c5** when pressed (without modifier) and nothing at all upon release. However, together with (left or right) Ctrl, one gets **e0** **46** **e0** **c6**, and again nothing at release. It does not repeat.

See [below](#kbd01_dellnoup) for a report on keys with a different behaviour.

There are many reports of laptops with badly debounced key-up events. Thus, unexpected key-up events should probably be regarded as not unusual, and be ignored. Another source of key-up events without preceding key-down can be the [fake shift](#fakeshifts).

## //KBD 1.2 Protocol scancodes

Most scancodes indicate a key press or release. Some are used in the communication protocol.

| Scancode |                       Protocol Function                       |
|----------|---------------------------------------------------------------|
| 00       | Keyboard error - see ff                                       |
| aa       | BAT (Basic Assurance Test) OK                                 |
| ee       | Result of echo command                                        |
| f1       | Some keyboards, as reply to command a4:Password not installed |
| fa       | Acknowledge from kbd                                          |
| fc       | BAT error or Mouse transmit error                             |
| fd       | Internal failure                                              |
| fe       | Keyboard fails to ack, please resend                          |
| ff       | Keyboard error                                                |


Three common causes for keyboard error are: (i) several keys pressed simultaneously, (ii) keyboard buffer overflow, (iii) parity error on the serial line used by keyboard and keyboard controller for communication. The error reported is **ff** in [scancode mode](#kbd10_scancodesets) 1, and **00** in scancode modes 2 and 3. If translation is on, both **00** and **ff** are translated as **ff**.

Usually these codes have the protocol meaning. However, they also occur as actual scancodes, especially when prefixed by **e0**.

## //KBD 1.3 Escape scancodes

The codes **e0** and **e1** introduce scancode sequences, and are not usually used as isolated scancodes themselves (but see [below](#kbd07_e0_as_key)).

(The prefix **e0** was originally used for the grey duplicates of keys on the original PC/XT keyboard. These days **e0** is just used to expand code space. The prefix **e1** used for Pause/Break indicated that this key sends the make/break sequence at make time, and does nothing upon release.)

This, and the above, means that the values **00**, **60**, **61**, **6e**, **71**, **7a**, **7c**, **7e**, **7f** are unavailable to signify key presses (on a default keyboard). Nevertheless they also occur as scancodes, see for example the [Telerate](#kbd02_telerate) and [Safeway SW23](#kbd06_safeway23) keyboards below.

Also other prefixes occur, see [below](#kbd05_prefix_80).

[Logitech](#kbd10_logiteche2) uses an **e2** prefix for the codes sent by a pointing device integrated on the keyboard.

## //KBD 1.4 Ordinary scancodes

The scancodes in translated scancode set 2 are given in hex. Between parentheses the keycap on a US keyboard. The scancodes are given in order, grouped according to groups of keys that are usually found next to each other.

**00** is normally an error code

**01** (Esc)

**02** (1!), **03** (2@), **04** (3#), **05** (4$), **06** (5%E), **07** (6^), **08** (7&), **09** (8\*), **0a** (9(), **0b** (0)), **0c** (-\_), **0d** (=+), **0e** (Backspace)

**0f** (Tab), **10** (Q), **11** (W), **12** (E), **13** (R), **14** (T), **15** (Y), **16** (U), **17** (I), **18** (O), **19** (P), **1a** (\[{), **1b** (\]})

**1c** (Enter)

**1d** (LCtrl)

**1e** (A), **1f** (S), **20** (D), **21** (F), **22** (G), **23** (H), **24** (J), **25** (K), **26** (L), **27** (;:), **28** ('")

**29** (\`~)

**2a** (LShift)

**2b** (\\|), on a 102-key keyboard

**2c** (Z), **2d** (X), **2e** (C), **2f** (V), **30** (B), **31** (N), **32** (M), **33** (,<), **34** (.>), **35** (/?), **36** (RShift)

**37** (Keypad-\*) or (\*/PrtScn) on a 83/84-key keyboard

**38** (LAlt), **39** (Space bar),

**3a** (CapsLock)

**3b** (F1), **3c** (F2), **3d** (F3), **3e** (F4), **3f** (F5), **40** (F6), **41** (F7), **42** (F8), **43** (F9), **44** (F10)

**45** (NumLock)

**46** (ScrollLock)

**47** (Keypad-7/Home), **48** (Keypad-8/Up), **49** (Keypad-9/PgUp)

**4a** (Keypad--)

**4b** (Keypad-4/Left), **4c** (Keypad-5), **4d** (Keypad-6/Right), **4e** (Keypad-+)

**4f** (Keypad-1/End), **50** (Keypad-2/Down), **51** (Keypad-3/PgDn)

**52** (Keypad-0/Ins), **53** (Keypad-./Del)

**54** (Alt-SysRq) on a 84+ key keyboard

**55** is less common; occurs e.g. as F11 on a Cherry G80-0777 keyboard, as F12 on a Telerate keyboard, as PF1 on a Focus 9000 keyboard, and as FN on an IBM ThinkPad.

**56** mostly on non-US keyboards. It is often an unlabelled key [to the left](https://www.win.tue.nl/~aeb/linux/kbd/laser.jpg) or [to the right](https://www.win.tue.nl/~aeb/linux/kbd/toshiba.jpg) of the left Alt key.  

![](https://www.win.tue.nl/~aeb/linux/kbd/laser-s.jpg)

![](https://www.win.tue.nl/~aeb/linux/kbd/toshiba-s.jpg)

**57** (F11), **58** (F12) both on a 101+ key keyboard

**59**-**5a**-...-**7f** are less common. Assignment is essentially random. Scancodes **55**-**59** occur as F11-F15 on the [Cherry G80-0777](#kbd02_cherry80) keyboard. Scancodes **59**-**5c** occur on the [RC930](#kbd05_RC930) keyboard. X calls **5d** `KEY_Begin`. Scancodes **61**-**64** occur on a [Telerate](#kbd02_telerate) keyboard. Scancodes **55**, **6d**, **6f**, **73**, **74**, **77**, **78**, **79**, **7a**, **7b**, **7c**, **7e** occur on the [Focus 9000](#kbd05_focus) keyboard. Scancodes **65**, **67**, **69**, **6b** occur on a [Compaq Armada](#kbd05_armada) keyboard. Scancodes **66**-**68**, **73** occur on the [Cherry G81-3000](#kbd05_cherry81) keyboard. Scancodes **70**, **73**, **79**, **7b**, **7d** occur on a [Japanese 86/106 keyboard](#kbd08_japanese).

Scancodes **f1** and **f2** occur on [Korean keyboards](#kbd09_korean).

## //KBD 1.5 Escaped scancodes

Apart from the Pause/Break key, that has an escaped sequence starting with **e1**, the escape used is **e0**. Often, the codes are chosen in such a way that something meaningful happens when the receiver just discards the **e0**.

|   SC  |      Key       |   | Sc |         Key          |
|-------|----------------|---|----|----------------------|
| e0 1c | (Keypad Enter) |   | 1c | (Enter)              |
| e0 1d | (RCtrl)        |   | 1d | (LCtrl)              |
| e0 2a | (Fake LShift)  |   | 2a | (LShift)             |
| e0 35 | (Keypad-/)     |   | 35 | (/?)                 |
| e0 36 | (Fake RShift)  |   | 36 | (RShift)             |
| e0 37 | (Ctrl-PrtScn)  |   | 37 | (*/PrtScn)           |
| e0 38 | (RAlt)         |   | 38 | (LAlt)               |
| e0 46 | (Ctrl-Break)   |   | 46 | (ScrollLock)         |
| e0 47 | (Grey Home)    |   | 47 | (Keypad-7/Home)      |
| e0 48 | (Grey Up)      |   | 48 | (Keypad-8/UpArrow)   |
| e0 49 | (Grey PgUp)    |   | 49 | (Keypad-9/PgUp)      |
| e0 4b | (Grey Left)    |   | 4b | (Keypad-4/Left)      |
| e0 4d | (Grey Right)   |   | 4d | (Keypad-6/Right)     |
| e0 4f | (Grey End)     |   | 4f | (Keypad-1/End)       |
| e0 50 | (Grey Down)    |   | 50 | (Keypad-2/DownArrow) |
| e0 51 | (Grey PgDn)    |   | 51 | (Keypad-3/PgDn)      |
| e0 52 | (Grey Insert)  |   | 52 | (Keypad-0/Ins)       |
| e0 53 | (Grey Delete)  |   | 53 | (Keypad-./Del)       |


These escaped scancodes occur only on 101+ key keyboards. The [Microsoft keyboard](#kbd06_microsoft) adds

|     SC    |      Key      |
|-----------|---------------|
| **e0 5b** | (LeftWindow)  |
| **e0 5c** | (RightWindow) |
| **e0 5d** | (Menu)        |

Other escaped scancodes occur - see below under the individual keyboards.


## //KBD 1.6 Fake shifts

The ten grey keys Insert, Home, PgUp, Delete, End, PgDn, Up, Left, Down, Right are supposed to function regardless of the state of Shift and NumLock keys. But for an old AT keyboard the keypad keys would produce digits when Numlock was on or Shift was down. Therefore, in order to fool old programs, fake scancodes are sent: when LShift is down, and Insert is pressed, **e0** **aa** **e0** **52** is sent; upon release of Insert **e0** **d2** **e0** **2a** is sent. In other words, a fake LShift-up and fake LShift-down are inserted.

If the Shift key is released earlier than the repeated key, then a real Shift-up code occurs (without preceding fake Shift-down) so that a program ignoring **e0** would see one more Shift-up than Shift-down.

When NumLock is on, no fake Shifts are sent when Shift was down, but fake Shifts are sent when Shift was not down. Thus, with Numlock, if Insert is pressed, **e0** **2a** **e0** **52** is sent and upon release **e0** **d2** **e0** **aa** is sent. The keyboard maintains a private NumLock mode, toggled when NumLock is pressed, and set when the NumLock LED is set.

In the same way, when Shift is down, the Grey-/ key produces fake Shift-up and fake Shift-down sequences. However, it does not react to the state of NumLock. The purpose of course is to fool programs that identify Grey-/ with ordinary /, so that they don't treat Shift-Grey-/ like Shift-/, i.e., ?.

On a Toshiba notebook, the three Windows keys are treated like the group of ten keys mentioned, and get fake shifts when (left or right) Shift is down. They do not react to NumLock.

## //KBD 1.7 Added non-fake shifts

On my 121-key [Nokia Data](#kbd05_nokia) keyboard there are function keys F1, ..., F24, where F1, ..., F12 send the expected codes **3b**, ..., **58**, and F13, ..., F24 send the same codes together with the LShift code **2a**. Thus, F13 gives **2a** **3b** on press, and **bb** **aa** on release. Similarly, there are keys with added LCtrl code **1d**. But there are also keys with added fake shifts **e0 2a**.

[Delorie](http://www.delorie.com/djgpp/doc/rbinter/it/06/0.html) reports that _the "Preh Commander AT" keyboard with additional F11-F22 keys treats F11-F20 as Shift-F1..Shift-F10 and F21/F22 as Ctrl-F1/Ctrl-F2; the Eagle PC-2 keyboard with F11-F24 keys treats those additional keys in the same way_.

## //KBD 1.8 Turbo Mode

On some motherboards the LCtrl-LAlt-GreyPlus and LCtrl-LAlt-GreyMinus switch Turbo mode on/off, respectively. For these, the motherboard may generate the same scancode sequence when the Turbo button is pushed: Turbo Switch (High->Low): **1d** **38** **4a** **ce** **b8** **9d** and Turbo Switch (Low->High): **1d** **38** **4e** **ce** **b8** **9d**.

Other peculiar combinations in this style include LCtrl-LAlt-LShift-GreyMinus and LCtrl-LAlt-LShift-GreyPlus to turn system cache off/on.

If Green PC system power saving mode is enabled in AMIBIOS Setup, the AMI MegaKey keyboard controller recognizes the combinations Ctrl-Alt-\\ (put the system into immediate power down mode), Ctrl-Alt-\[ (disable the Green PC power savings mode temporarily), Ctrl-Alt-\] (enables the Green PC power down mode).

Thio Yu Jin <`jin@singmail.com`\> complains that on his Toshiba 4010CDS the Ctrl-Alt-Shift-T key combination brings up the Toshiba user manual. (04 Mar 1999 - not April 1.)

<a name="kbd01_power"></a>
## //KBD 1.9 Power Saving

[Microsoft](http://www.microsoft.com/hwdev/tech/input/Scancode.asp) recommends: "i8042-based keyboards should deploy the following scan codes for power management buttons, i.e., POWER and SLEEP buttons:

  

|       | Set-1  make/break | Set-2 make/break |
|-------|-------------------|------------------|
| Power | e0 5e / e0 de     | e0 37 / e0 f0 37 |
| Sleep | e0 5f / e0 df     | e0 3f / e0 f0 3f |
| Wake  | e0 63 / e0 e3     | e0 5e / e0 f0 5e |
  

The Power, Sleep, and Wake event scan codes are the i8042 equivalents to the System Power Down, System Sleep, and System Wake Up HID usages".

Many keyboards have Power/Sleep/Wake keys that have to be activated by a fourth key (unlabeled, or labeled FN): pressing one of these four keys does not produce any scancodes, but when the FN key is pressed simultaneously, the Power/Sleep/Wake keys give the codes listed above.

## //KBD 1.10 Initializing special keyboards

Many keyboards have more keys and buttons than the standard ones. Sometimes these additional keys produce scancode combinations that were unused before. But on other keyboard such additional keys do not produce any code at all, until some initializing action is taken.

Sometimes that action consists of writing some bytes to keyboard registers. See, for example, the [IBM Rapid Access keyboard](#kbd06_rapidinit), and the [Omnibook keyboard](#kbd06_omnibookinit).

<a name="kbd01_LEDmanip"></a>
## //KBD 1.11 Manipulating extra LEDs

Some keyboards have additional LEDs, and in a few cases we know how to manipulate those.

The [Chicony keyboard](#kbd06_chicony) needs command sequences **eb** **00** _xy_, with _xy_ = **01** for the Moon LED and _xy_ = **02** for the zzZ LED.

The [IBM EZ Button keyboard](#kbd06_EZButton) needs command sequences **eb** **00** _xy_, with _xy_ = **01** for the Msg LED, _xy_ = **02** for the CD LED, _xy_ = **04** for the Power LED, _xy_ = **10** for the Talk LED, and _xy_ = **20** for the Message Waiting LED.

The [IBM Rapid Access keyboard](#kbd06_ibmrapidaccess) needs command sequences **eb** **00** _xy_, with _xy_ = **04** for the Suspend LED and _xy_ = **20** for the Mute LED.

The [IBM Rapid Access keyboard II](#kbd06_ibmrapidaccessii) needs the command sequences **eb** **71** and **eb** **70** to switch the Standby LED on and off.

The [Logitech Internet Keyboard](#kbd06_logitechinternet) has an additional amber LED. It is turned on by sending **eb**, and then blinks about once a second. It is turned off again by **ec**.

## //KBD 1.12 The laptop FN key

Laptops have no room for all nonsensical keys one usually find on a regular keyboard. So, the number pad and other keys are folded into the main part of the keyboard. A key without label, or labelled FN is often used to modify the meaning of other keys. This FN does not produce scancodes itself, it only modifies the scancodes produced by other keys.

Neil Brown reports about his Dell Latitude D800 laptop that it has five key combinations that do not produce proper break codes. The five combinations FN+F2, FN+F3, FN+F10, FN+Down, FN+Up (labelled Wireless, Brighter, Darker, Battery, CDEject) produce make codes **e0** **08**, **e0** **07**, **e0** **09**, **e0** **05**, **e0** **06**, respectively. The first three do not produce any break code. The last two have a break code that is identical to the make code.

* * *


* * *

# /KBD 2. Special keyboards - XT keyboards


_First keyboards with an XT interface. There is no keyboard controller, no commands to the keyboard. On a modern computer these will usually yield "keyboard error" or "KB/interface error" or some such, but sometimes they can be used nevertheless._

The IBM PC (all models) and the IBM XT (models 68, 78, 86, 87, 88, 267, 277) came with this 83-key keyboard. The IBM AT (models 68, 99, 239, 319) came with an 84-key keyboard. The IBM XT (models 89, 268, 278, 286) and the IBM AT model 339 came with a 101-key keyboard.

The original IBM 83-key PC/XT keyboard did not have LEDs. The original IBM 84-key AT keyboard has LEDs, separates the keypad from the main area, moves the Esc key to the right, and adds the SysReq key. The original IBM 101-key keyboard moves the ten function keys from the left to the top row and adds two more. The Esc key is moved in front of this row of function keys. The "number" and "cursor" functions of the keypad are separated. There are duplicate Ctrl and Alt keys.

## //KBD 2.1 XT keyboard

The [XT keyboard](https://www.win.tue.nl/~aeb/linux/kbd/xtkbd.jpg) has 83 keys, nicely numbered 1-83, that is, with scancodes **01**-**53**. No escaped scancodes.

![](https://www.win.tue.nl/~aeb/linux/kbd/xtkbd-s.jpg)

## //KBD 2.2 Victor keyboard

This [Victor keyboard](https://www.win.tue.nl/~aeb/linux/kbd/victor.jpg) is very similar. The keypad is separated here, and the Esc key has been moved to the keypad. The frontside of the ScrollLock key says Break. It resembles an AT keyboard but has only 83 keys, the SysRq is still missing.

![](https://www.win.tue.nl/~aeb/linux/kbd/victor-s.jpg)

## //KBD 2.3 Olivetti M24 keyboard

![](https://www.win.tue.nl/~aeb/linux/kbd/m24.jpg)

The Olivetti M24 (also sold under the names Logabax 1600 and ATT PC-6300) was an IBM compatible manufactured in 1984.

John Elliott writes: The Olivetti M24 is an XT sort-of clone. It has two possible keyboards - the normal (83-key) IBM one, and a "deluxe" one (102 keys) with 18 function keys.

Unlike a normal XT keyboard, it is possible to send commands to it. The BIOS does this twice: (1) Command 01h makes the keyboard perform a self-test. (2) Command 05h makes the keyboard return a 1-byte ID. The least signficant bit is set for a "deluxe" layout.

The keyboard connector is DE-9 rather than DIN. Pins are:

1   KBDATA
2   KBCLOCK
3   GND
4   GND
5  +12V
6   -RESET1
7   Keyboard/-Typewriter
8   TEST0
9   +5V

(pins 6-9 are not used by the supplied keyboards).

Attached [the diagram](https://www.win.tue.nl/~aeb/linux/kbd/m24kbd.png) of the 'deluxe' keyboard, which shows its scancodes in decimal.

A mouse can be attached to the keyboard. The following is based on disassembling attmouse.drv from Windows 1.0.

Windows initialises the mouse by sending the following bytes to the keyboard: 0x12, 0x77, 0x78, 0x79, 0x00. The 0x12 is almost certainly a command byte; 0x77, 0x78 and 0x79 are the scancodes to be returned by the three mouse buttons. I don't know what the 0x00 is for.

It then handles the following scancodes: 0xFE -- mouse movement. The next two scancodes are delta X, then delta Y, in ones' complement. 0x77, 0x78, 0x79 (and 0xF7, 0xF8, 0xF9) -- button presses / releases.

When shutting down the mouse, it sends these bytes to the keyboard: 0x11, 0x1C, 0x53, 0x01, 0x4B, 0x4D, 0x48, 0x50, 0x02, 0x04. My guesses here are: 0x11: Mouse movement becomes simulated keypresses. 0x1C, 0x53, 0x01: Scancodes to be returned by mouse button presses. 0x4B, 0x4D, 0x48, 0x50: Scancodes to be returned by mouse movement. 0x02, 0x04: Don't know.

<a name="kbd02_telerate"></a>
## //KBD 2.4 Telerate keyboard

The [Telerate keyboard](https://www.win.tue.nl/~aeb/linux/kbd/telerate.jpg) was used for financial applications, as is clear from the keycaps. This keyboard (in the old XT version, without **e0** prefixes) has four additional keys, with scancodes **61**, **62**, **63**, **64**. The F11 and F12 keys have scancodes **54** and **55** (instead of the common **57** and **58**). There are two LEDs (for CapsLock and NumLock).

![](https://www.win.tue.nl/~aeb/linux/kbd/telerate-s.jpg)

## //KBD 2.5 NCR keyboard

Also with an XT interface this [NCR keyboard](https://www.win.tue.nl/~aeb/linux/kbd/ncr.jpg), still with ten function keys on the left, but already with a separate block of keys between the ordinary keys and the numeric keypad. This middle block has on top five keys Ctrl (**1d**, same as the Ctrl on the left), Del (**53**, same as Keypad-Del/.), PgUp (**49**, same as Keypad-9/PgUp), End (**4f**, same as Keypad-1/End), PgDn (**51**, same as Keypad-3/PgDn), and below five cursor keys (**48**, same as Keypad-8/Up; **4b**, same as Keypad-4/Left; **47**, same as Keypad-7/Home; **4d**, same as Keypad-6/Right; **50**, same as Keypad-2/Down). Enter and Keypad-enter are both **1c**. Below the Enter key PrtScn/\* (**37**), and below that again Ins (**52**, same as Keypad-0/Ins). CapsLock and NumLock have a built-in LED.

![](https://www.win.tue.nl/~aeb/linux/kbd/ncr-s.jpg)

<a name="kbd02_cherry80"></a>
## //KBD 2.6 Cherry G80-0777

According to [FreeKEYB/kbdinfo.html](http://titan.informatik.uni-bonn.de/~frinke/FreeKEYB/kbdinfo.html) this keyboard has five additional keys with scancodes **55** (F11), **56** (F12), **57** (F13), **58** (F14), **59** (F15).

* * *


* * *

# /KBD 3. Special keyboards - Amstrad/Schneider keyboards


_Since IBM had patented their keyboard design, Amstrad developed an entirely different keyboard._

## //KBD 3.1 Amstrad/Schneider PC1512

The [Amstrad keyboard](https://www.win.tue.nl/~aeb/linux/kbd/amstrad.jpg) is entirely incompatible with XT and AT keyboards, and can be used only on an Amstrad; conversely, no other keyboard will work on an older Amstrad. This keyboard has a Del key on the keypad, and both Del-> and Del<- keys above the Enter key. The Del-> key has scancode **70**. Left of the Enter key a PrtSc/\* key. There is an additional Enter key with scancode **74**. It is possible to connect a mouse and/or joystick to the keyboard, and then these devices also yield scancodes: **77** (joystick button 1), **78** (joystick button 2), **79** (joystick right), **7a** (joystick left), **7b** (joystick up), **7c** (joystick down), **7d** (mouse right), **7e** (mouse left).

![](https://www.win.tue.nl/~aeb/linux/kbd/amstrad-s.jpg)

## //KBD 3.2 Amstrad/Schneider other models

John Elliott adds:

The above only mentions the PC1512/PC1640 style of keyboard. Later Amstrad XTs (PPC512, PPC640, PC20, PC200, PC2086, PC3086) used a 102-key keyboard with the same layout and scancodes as a normal 102-key XT keyboard. This design is not only incompatible with normal XT and AT keyboards, it's also incompatible with the PC1512 keyboard. The joystick socket is no longer present, but mouse button clicks are still handled by the keyboard, with the same scancodes **7d** (right button) and **7e** (left button).

On the PPC512, PPC640, PC20 and PC200, the keyboard is in the same box as the motherboard, and is connected directly to it by ribbon cable.

* * *


* * *

# /KBD 4. Special keyboards - AT keyboards


_The AT keyboard adds a keyboard controller. The numeric keypad is now separated from the main keyboard. There is a single new key, with scancode 84 = **54**, namely SysRq._

The protocol for AT and later keyboards differs from that for XT keyboards. Some old keyboards have an XT/AT switch on the backside that selects the appropriate protocol. Other keyboard autodetect XT or AT mode.

![](https://www.win.tue.nl/~aeb/linux/kbd/xt-at-switch.jpg)

The KeyTronic KB101-1 keyboard has four switches of which the first two indicate the desired behaviour (00 - autodetect, 01 - unused, 10 - PC/XT, 11 - AT). Autodetect does not always work.

* * *


* * *

# /KBD 5. Special keyboards - MF II keyboards



For keyboards with "Internet keys", see the next section.

<a name="kbd05_nokia"></a>
## //KBD 5.1 Nokia keyboard

This 121-key [Nokia keyboard](https://www.win.tue.nl/~aeb/linux/kbd/nokia.jpg) has ten function keys on the left and twenty-four on the two top rows. On the right a block with cursor keys and a block with numeric keys. There are three LEDs. The keys have brown markings, and sometimes also blue ones. Where both occur, the blue markings describe the usual PC keytops.

Roughly speaking, the scancodes are as expected. The [function keys](https://www.win.tue.nl/~aeb/linux/kbd/nokia-top.jpg) F1-F10,F11,F12 have scan codes **3b**-**44**, **57**, **58** as usual. The keys on the upper row, labeled F13-F24, yield the same codes as shifted F1-F12. E.g., F13 gives **2a** **3b** on press, and **bb** **aa** on release. The function keys F4,F11,F13-F19,F21,F24 have front labels CrSel, AltCr, Red, Pink, Green, Yellow, Blue, Turq, White, Col, USM.

The [ten keys on the left](https://www.win.tue.nl/~aeb/linux/kbd/nokia-left.jpg) have the following scancodes. First column of five: **01** (Attn/Esc/NxtTsk), as expected for Esc; **1d 3b** (Quit/Reset), as expected for Ctrl F1; **1d 3c** (ExSel), as expected for Ctrl F2; **1d 3d** (Ident/Print), as expected for Ctrl F3; **1d 3e** (Help/EnlW), as expected for Ctrl F4. For these last four keys (and the ChgSc/WSCtrl below) the code becomes **3b**-**3e** (and **3f**) when left or right Ctrl is pressed already. Second column of five: **e1 1d 45** ((Break)/Clear/Pause/Test), and **e0 46** with Ctrl, as expected for Pause/Break; **46** (ScrLock), as expected for ScrLock; **e0 2a e0 37** (PrtSc/SysRq), and **e0 37** with left or right Ctrl or left or right Shift, and **54** with left or right Alt, as expected for PrtSc; **1d 3f** (ChgSc/WSCtrl), as expected for Ctrl F5; **38 e0 49** (Jump), as expected for Alt PgUp.


Finally the numeric keypad, with the usual keys that generate the usual codes, and a single additional key, a Tab, with **0f** like the ordinary tab.

![](https://www.win.tue.nl/~aeb/linux/kbd/nokia-s.jpg)

<a name="kbd05_focus"></a>
## //KBD 5.2 Focus KeyPro FK-9000 keyboard

Raul D. Miller <`rockwell@nova.umd.edu`\> and Timothy C. Hagman <`hagmanti@cps.msu.edu`\> report:

_The keyboard is a KeyPro FK-9000. The FCC label says it's made in Taiwan by Focus Electronic Co, Ltd. It has a built-in calculator._

_This keyboard has twelve additional keys, with scancodes_ **55** (PF1), **6d** (PF11), **6f** (PF12), **73** (PF2), **74** (PF9), **77** (PF3), **78** (PF4), **79** (PF5), **7a** (PF6), **7b** (PF7), **7c** (PF8), **7e** (PF10).

_The break codes equal the make codes ORed with 0x80, as always, but the Linux kernel eats **fa** and **fe** as protocol bytes._

_The behavior of these keys is different from that of normal keys-- they generate nothing when pressed; then generate the above scancodes at the normal repeat time and rate, and then generate (except for the starred ones) their scancode ORed with 0x80 when released..._

_These PF keys are reprogrammable -- and programming occurs as a sequence of keyboard actions. Therefore, the PF keys duplicate whatever keyboard actions occurred during their programming. You hit the "Prog" key, then the PF key you want to program; type the string you want to store in the key (it's limited to 14 keypresses), and then hit the PF key again. After that, when you hit the PF key, it sends the string, and generates its own abnormal scancode upon release. When the key is held down, it generates the scancode repeatedly, but does not generate the string stored in it repeatedly._

_When you go to program a key, the scancodes for "PF##-" are sent to the computer, then the scancodes for each key you hit as you hit it (the shift, etc. keys are an exception-- they send "s-" and such :), and then, when you hit the PF## key again to end the programming, it sends a sequence of (at least) 18 "0e 8e"s -- Backspaces..._

_The program key itself doesn't generate a scancode at any time. The same applies to the CE and AC/ON keys (part of the calculator). There is a switch to change between calculator and keyboard mode which generates no scancodes._

_When the keyboard is in calculator mode, the entire numeric keypad (and everything else on the right side) generates no scancodes._

_When the keyboard is not in caluclator mode, the %, MC, MR, M-, M+, and Square Root keys all generate **ff** when pressed, **ff** to repeat, and **ff** on release._

_The little unlabeled key between the right Ctrl and right Alt generates **56** when hit, repeats that, and then **d6** when released, just like a normal key._

<a name="kbd05_BTC"></a>
## //KBD 5.3 BTC keyboard

This keyboard has one additional key, with escaped scancode **e0** **6f** (Macro). (Funny enough it does this in all modes, each of the three scancode sets, translated or not. In particular, this Macro key is the only key that generates two bytes in scancode mode 3.)

## //KBD 5.4 LK411 and LK450 keyboards

These keyboards have seven additional keys, with escaped scancodes **e0** **0f** (LeftCompose), **e0** **3d** (F13), **e0** **3e** (F14), **e0** **3f** (Help), **e0** **40** (Do), **e0** **41** (F17), **e0** **4e** (Keypad-minplus). (LK411 has all seven. LK450 has the last six - the report did not mention a Compose key.) There are only two LEDs. The keycaps are unusual.

In (translated) scancode Set 3 these keys give codes **68**, **44**, **42**, **40**, **3e**, **65**, **70**. In untranslated Set 2, the F17 key gives **e0** **83**.

An [LK411 keyboard](https://www.win.tue.nl/~aeb/linux/kbd/lk411.jpg), with [left](https://www.win.tue.nl/~aeb/linux/kbd/lk411-left.jpg) and [right](https://www.win.tue.nl/~aeb/linux/kbd/lk411-right.jpg) hand side enlarged.

The keys labeled F18, F19, F20 produce the codes expected for PrtSc, ScrollLock, Pause. The keys labelled PF1, PF2, PF3, PF4 produce the codes expected for NumLock, Keypad-/, Keypad-\*, Keypad--. The Keypad-, key produces the code **4e** expected for Keypad-+. The Right ComposeCharacter key produces the code expected for RCtrl. The key labelled \</> produces the code **29** expected for \`/~. The key labelled with \`/~/(Esc) produces the code expected for Esc.

![](https://www.win.tue.nl/~aeb/linux/kbd/lk411-s.jpg)

<a name="kbd05_omnikey"></a>
## //KBD 5.5 An OmniKey keyboard

This keyboard has one additional key, with escaped scancode **e0** **4c** (Omni).

For the Northgate OmniKey 101 keyboard it is said that the command **e8** reads a 2-byte ID.

<a name="kbd05_armada"></a>
## //KBD 5.6 Compaq Armada laptop keyboard

Christian Gennerat <`christian.gennerat@vz.cit.alcatel.fr`\> writes: There are 4 extra keys on the Compaq Armada laptops. The four keys are located over the Esc-F1..F12, and are labelled \*1-\*4. Scancodes: **65**, **67**, **69**, **6b**.

## //KBD 5.7 GRiD 2260 keyboard

The GRiD 2260 notebook has a key producing the **6c** scancode; I do not know the keycap.

## //KBD 5.8 An old Olivetti keyboard

Kasper Dupont <kasperd@daimi.au.dk> writes: My 10 year old 102-key keyboard that came with an "Olivetti PCS 286" actually has connectors for three additional keys just bellow Delete, End, and PgDn. There is no keys on the connectors, I only found them because I opened the keyboard for cleaning. The scancodes are from left to right **65**, **66**, **67**.

<a name="kbd05_cherry81"></a>
## //KBD 5.9 Cherry G81-3000

According to [Delorie](http://www.delorie.com/djgpp/doc/rbinter/it/06/0.html) the "Cherry G81-3000 SAx/04" keyboard has four additional keys, which can be made available by a user modification; the three new keys located directly below the cursor pad's Delete, End, and PgDn keys send make codes **66**-**68** (F19-F21); the fourth new key, labeled (delta), sends make code **73**.

## //KBD 5.10 Accord keyboard

According to [Delorie](http://www.delorie.com/djgpp/doc/rbinter/it/06/0.html) the "Accord" [ergonomic keyboard](http://www.ergonomics.co.uk/products/input/keyb7300.jpg) with optional touchpad has an additional key above the Grey-Minus key marked with a left-pointing triangle and labeled "Fn" in the owner's booklet which sends make code **e0 68**.

## //KBD 5.11 Trust Ergonomic keyboard

Frank v Waveren <`fvw@var.cx`\> reports: The Trust Ergo Track keyboard has one additional key (\`application key'), with escaped scancode **e0** **68**. The keycap is a triangle pointing left.

## //KBD 5.12 Brazilian keyboards

ABNT (Associação Brasileira de Normas Tecnicas) and ABNT2 are Brazilian keyboard layout standards. The plain Brazilian keyboard has 103 keys.

The Brazilian ABNT keyboard has two unusual keys, with scancodes **73** (/?) and **7e** (Keypad-.). The former is located to the left of the RShift (which key therefore is less wide than usually), the latter below the Keypad-Plus (reducing the Keypad-Plus to single height).

Under Linux, the corresponding key codes are 89 and 121, respectively. These keys do not function with Windows NT 4.0.

Antonio Dias <`accdias@sst.com.br`\> provided the [keypad layout](abnt-keypad.html) and writes: _Brazilian ABNT2 keyboards come with two layouts. In MSDOS they call them ID 274 and ID 275._

<a name="kbd05_RC930"></a>
## //KBD 5.13 RC930 keyboard

Torben Fjerdingstad <`tfj@olivia.ping.dk`\> reports:

_It's an rc930 keyboard, from Regnecentralen/RC International, Now ICL. This keyboard has four additional keys, with scancodes_ **59** (A1), **5a** (A2), **5b** (A3), **5c** (A4).

_The rc930/rc931 keyboards are not made anymore, because they had a problem with fast typists, writing over 400 chars/minute. Writing 'af<space>', very, very fast, did a PgUp._

<a name="kbd05_prefix_80"></a>
## //KBD 5.14 Tandberg Data keyboard

Kjetil Torgrim Homme <`kjetilho@ifi.uio.no`\> reports:

_My Tandberg Data keyboard uses the prefix **80** for its numerous (20) extra keys. The **80** scancodes are:_

**11**, **12**, **13**, **14**, **16**, **17**, **18**, **19**, **1e**, **1f**, **20**, **21**, **22**, **23**, **25**, **26**, **2f**, **30**, **32**, **56**.

_For completeness, the **e0** scancodes:_

**1c**, **2a**, **35**, **37**, **47**, **48**, **49**, **4b**, **4d**, **4f**, **50**, **51**, **52**, **53**.

_The **e1** scancode: **1d**. As you can see, there is no overlap on this keyboard._

Harald Arnesen <`gurre@start.no`\> gives the keycaps for these for the Tandberg TDV5020 keyboard. All use prefix **80** on both press and release.

Thirteen keys have (Norwegian) text: **11** HJELP (help), **14** STRYK (cut), **16** KOPI (copy), **17** FLYTT (move), **19** JUST (justify), **21** MERK (mark), **22** ANGRE (undo), **23** SKRIV (print), **25** SLUTT (exit), **26** FELT (field), **2f** AVSN (paragraph), **30** SETN (sentence), and **32** ORD (word).

Seven keys have symbols: **12** /\\/\\/\\ (insert soft hyphen), **13** \[Crossed down-arrow\] (move down five lines), **18** >> << (justify left/right), **1e** <> >< (justify full/center), **1f** |<- (backtab), **20** ->| (tab), and **56** \[Back/down arrow\] (start new paragraph).

Other keycaps also occur. Those given above were meant for use with the Notis WP word processor.

## //KBD 5.15 Host Connected keyboard

IBM makes the 122-key "Host Connected Keyboard" for PS/2 machines used as 3270 emulators. Its (translated Set 2) scancodes are given by [Delorie](http://www.delorie.com/djgpp/doc/rbinter/it/06/0.html).

![](https://www.win.tue.nl/~aeb/linux/kbd/hostconn-s.jpg)

[(enlarge)](https://www.win.tue.nl/~aeb/linux/kbd/hostconn.jpg)

John Elliot reports the untranslated scancodes:  


| keycap | PA1 | F13 | F14 |     F15     |  F16  |     F17     |  F18  |  F19  |    F20     |  F21  |
|--------|-----|-----|-----|-------------|-------|-------------|-------|-------|------------|-------|
| Set 1  | 5A  | 5B  | 5C  | 5D          | 63    | 64          | 65    | 66    | 67         | 68    |
| Set 2  | 17  | 1F  | 27  | 2F          | 5E    | 08          | 10    | 18    | 20         | 28    |
| Set 3  | 67  | 08  | 10  | 18          | 20    | 28          | 30    | 38    | 40         | 48    |
| keycap | F22 | F23 | F24 | Right blank | ErEOF | Copy / Play | CrSel | ExSel | Left blank | Clear |
|--------|-----|-----|-----|-------------|-------|-------------|-------|-------|------------|-------|
| Set 1  | 69  | 6A  | 6B  | 6C          | 6D    | 6F          | 72    | 74    | 75         | 76    |
| Set 2  | 30  | 38  | 40  | 48          | 50    | 6F          | 39    | 53    | 5C         | 5F    |
| Set 3  | 50  | 57  | 5F  | 09          | 0B    | 0A          | 04    | 03    | 01         | 06    |


(Compare with the [table](#kbd10_correspondence) below. For more details see John Elliot's page describing the [Affirmative 1227T](http://www.seasip.info/Misc/1227t.html) that has the same scancodes.)

## //KBD 5.16 Safeway SW10 keyboards

The Safeway SW10 keyboard has the usual keys, including the three Windows keys, and including Power, Sleep, Wake keys (below Delete, End, PageDown) that do not produce scancodes unless the Fn key (above Keypad-Minus) is pressed simultaneously. This Fn key is used together with 11 keys: F1-F7, F11, Power, Sleep, Wake. Fn-F11 disables the keyboard and another Fn-F11 enables it again. Fn-F1/F2/F3/F4/F5/F6/F7 sets the repeat rate (on my keyboard I measured 2.0/4.0/6.7/12/26/32/32 chars/sec respectively).

## //KBD 5.17 A nameless USB keyboard

This keyboard has four additional keys: Power (rose), Sleep (blue), WakeUp (green) and FN (yellow). In legacy mode these keys give the expected keycodes (**e0** **5e**, **e0** **5f**, **e0** **63**, and none, respectively), but the interaction is funny. The four keys act as radiobuttons. Pressing one yields its key down code, but releasing it does not produce any scancodes. Now pressing another yields the down code for the other followed by the up code for the previous one. The FN key follows this pattern, only its scancode sequence is empty. Thus, pressing it causes the release code for a previous key to be emitted. Pressing a key a second time gives no reaction: the radiobutton was down already.

## //KBD 5.18 Keyboards with many keys

The current mechanism is unable to handle keyboards with more than 127 keys. But such keyboards seem to exist. Indeed, I now have a [Safeway SW23](#kbd06_safeway23) that has 132 keys.

Mark Hatle <`fray@kernel.crashing.org`\> wrote:

_On some ADB keyboards there are actually 128 distinct keys. They use scancodes 0-127._

_ADB is Apple Desktop Bus. The way that ADB works is similar to SCSI but on a much slower level. Specifically there is a communications chip in the computer, ADB controller, and the same chip in the keyboard. The keyboard sends the scancode to its internal ADB controller, the internal ADB controller then does any key mapping needed (not used under linux from my understanding) and passes the data to the computer._

_The ADB controller is capable of sending 256 distinct keys, but to my knowledge only 128 are sent. The key 0 is the 'a' and key 127 is the "power button"._

_Also some of the Apple ADB keyboards have special "sound" and "function" keys. These keys (used in MacOS for volume up and down, screen contrast changing, etc) also show up on the ADB scancodes._

_ADB is used for both m68k and PPC Linux. The m68k Macintosh port, and the PPC - Power Macintosh and CHRP ports._

and later:

_Basically the scancode sequences for ADB are 16 bit. so there can actually be 65536 scancodes, currently though only 128 are defined._

## //KBD 5.19 A keyboard treating PrtSc/SysRq like Pause/Break

Mike A. Harris <`mharris@meteng.on.ca`\> reports a keyboard (an "Mtek" keyboard, model "K208") where PrtSc/SysRq behaves like Pause/Break and also sends both make and break sequences when pressed and nothing when released. It does not repeat. (Thus, he gets **e0** **2a** **e0** **37** **e0** **b7** **e0** **aa** for PrtSc press, and **54** **d4** for SysRq (i.e., Alt+PrtSc).) Others have reported the same (for an unspecified type of keyboard).

* * *


* * *

# /KBD 6. Special keyboards - MF II keyboards with CD and/or Internet buttons


Recent keyboards are basically MF II keyboards, but provided with a bewildering variety of additional keys.

The keyboards are grouped according to manufacturer.

## //KBD 6.1 Compaq keyboards

### Compaq Easy Accesss Internet Keyboard

Petr Slansky <`slansky@usa.net`\> writes:

Internet buttons: **e0** **13** online community button (people icon), **e0** **14** online Compaq button (Q icon), **e0** **15** online services button (bulb icon), **e0** **1e** online e-mail button (envelope icon), **e0** **21** online Search button (magnifier icon), **e0** **23** online start button (i icon), **e0** **32** online commerce button (shopping basket icon),

**e0** **68** Quick Print button (printer icon), **e0** **1f** Favorite Application Launch button (racket icon),

**e0** **5f** Sleep button,


Volume Control buttons: **e0** **30** Volume increase (+), **e0** **2e** Volume decrease (-), **e0** **20** Mute.

![](https://www.win.tue.nl/~aeb/linux/kbd/compaq_easy_access.jpg)

### Compaq Eight-Button Easy Access Keyboard

A [Compaq keyboard](https://www.win.tue.nl/~aeb/linux/kbd/compaq_unkn.jpg) that I have here, has the usual setup (with Windows keys) plus a top row of eight buttons, that produce scancodes **e0** **23**, **e0** **1f**, **e0** **1a**, **e0** **1e**, **e0** **13**, **e0** **14**, **e0** **15**, **e0** **1b**. These keys do not produce any codes in scan code Set 3.

![](https://www.win.tue.nl/~aeb/linux/kbd/compaq_unkn-s.jpg)

<a name="kbd06_rapidinit"></a>
## //KBD 6.2 IBM keyboards


<a name="kbd06_ibmrapidaccess"></a>
### IBM Rapid Access keyboard

(Information from Dennis Bjorklund <`dennisb@cs.chalmers.se`\> and others.)

The IBM Rapid Access keyboard has 14 extra buttons and two more leds than a normal PC keyboard. By default, these buttons do not generate any scancodes. To activate them one has to send the sequence **ea** **71** to the keyboard. Once that is done the extra keys generate normal e0xx sequences. To turn off the extra keys you send **ea** **70**.

These 14 keys send the following scancodes (when activated):


The Suspend and Mute buttons have extra LEDs on them. Sending the sequence **[eb](#kbd01_LEDmanip)** **00** **ff** to the keyboard makes all five LEDs lit up for a moment. The sequence **eb** **00** **04** lights the Suspend LED (behind a waning moon). The sequence **eb** **00** **20** makes the Mute LED blink. The sequence **eb** **00** **80** locks the keyboard; if the Mute LED was blinking it now is lit permanently. Sending **eb** **00** **ff** unlocks the keyboard again.

The command **ec** returns **0c** **01** (untranslated) which becomes **3e** **43** in translated scancode Set 2. (Possibly an ID?)

Dennis Bjorklund writes: _Here is the hack I use to send commands to the keyboard. After you have compiled it you can do things like_ `send_to_keyboard ea 71`, _but don't run two of these at the exact same moment, and don't send strange codes because the keyboard might lock up._

_My computer runs this at every startup. After that the extra buttons on the rapid access work just fine in XFree86._

```sh
/* gcc -O2 -s -Wall -osend_to_keyboard main.c */ 
#include <stdlib.h>
#include <unistd.h>
#include <sys/io.h>

int main(int argc, char *argv[]) {
    int i;
    ioperm(0x60, 3, 1);
    for (i = 1; i < argc; i++) {
        int x = strtol(argv[i], 0, 16);
        usleep(300);
        outb(x, 0x60);
    }
    return 0; 
}
```

![](https://www.win.tue.nl/~aeb/linux/kbd/ibm_rapid_access.jpg)

<a name="kbd06_ibmrapidaccessii"></a>
### IBM Rapid Access II keyboard

This keyboard has a top row of seven color-coded buttons. On the upper right a "wheel" composite button with six parts. Below it a blue button ("mute"). Finally, the usual block with four arrow keys has been enlarged by two more keys ("page left" and "page right").

Keys:

**e0** **25** (Green, "Internet"), **e0** **26** (Blue, "Internet shopping"), **e0** **32** (Yellow, "IBM Web support"), **e0** **17** (Purple), **e0** **30** (Red), **e0** **2e** (Cyan, "Help"), **e0** **5f** (White, "Standby" - has a LED), **e0** **20** (CD stop), **e0** **22** (CD play), **e0** **21** (Volume D), **e0** **23** (Volume U), **e0** **24** (CD back), **e0** **12** (CD fwd), **e0** **1e** (Mute - no LED).

(In translated scancode Set 3, these become **41**, **3f**, **3d**, **3b**, **3c**, **66**, **\--**, **69**, **6a**, **6b**, **6c**, **6d**, **44**, **68**, respectively.)

The "back" ("page left") and "forward" ("page right") keys generate ALT+left and ALT+right respectively: **38** **e0** **4b** (release sequence **b8** **e0** **cb**) and **38** **e0** **4d**.

The commands **ea** **70** and **ea** **71** serve to switch off (resp. on) the special keys. (These are on by default, but can be switched off.) However, the white Standby key is always on.

The white Standby button has a LED (that is flashed during a reset). It is set by the command **[eb](#kbd01_LEDmanip)** **71** and cleared by the command **eb** **70**.

![](https://www.win.tue.nl/~aeb/linux/kbd/ibm_rapid_access_II.jpg)

### IBM ThinkPad

George Staikos <`staikos@0wned.org`\> writes:

_I have an IBM ThinkPad i1460. It has the IBM EasyLaunch<tm> keys. These are four multicoloured keys up at the top of the keyboard for "Home Page", "Search", "Shop", "Mail". They dont' seem to create any keyboard events at all. The keyboard interrupt doesn't trigger, `showkeys` doesn't see them do anything, and in DOS, a simple sequence of BIOS calls doesn't see them either. Also, being a laptop, it has an FN key. This key generates **55**._

## //KBD 6.3 Logitech keyboards

<a name="kbd06_logitechinternet"></a>
### Logitech Internet keyboard

Jonathan DeBoer <`deboer@ugrad.cs.ualberta.ca`\> reports: This keyboard has 18 unusual keys.

**e0** **7a** (WWW), **e0** **32** (History), **e0** **21** (Open URL), **e0** **23** (Home), **38** **2a** **0f** **8f** (key press) **8f** **b8** **aa** (key release) (Send To Back) - this sequence simulates Alt+Shift+Tab, but contains two Tab releases, **e0** **17** (Print), **e0** **10** (Back), **e0** **22** (Forward), **e0** **24** (Stop), **e0** **19** (Refresh), **e0** **1e** (Search), **e0** **12** (Find), **e0** **26** (Add Favourite), **e0** **18** (Open Favourites), **e0** **20** (Hot Links), **e0** **30** (Scroll Up), **e0** **2e** (Scroll Down), **e0** **25** (Logitech).

Ryan Lortie <`desertangel@globalserve.net`\> writes: The "Logitech" key is used as a modifier. In windows, Logitech-Keypad+ increases volume, Logitech-Keypad- decreases. There is a conjoined dual-button key for "scroll". You press the top part to scroll up, the bottom to scroll down.

Graham Hay adds: The extra LED is an amber colour, placed above the www key with a recessed line linking them. Sending **eb** alone turns it on. It will flash on/off about once per second after that. A single **ec** will turn it off.

![](https://www.win.tue.nl/~aeb/linux/kbd/logitech-internet-s.jpg)

[(enlarge)](https://www.win.tue.nl/~aeb/linux/kbd/logitech-internet.jpg)

### Logitech Access keyboard

Denis Kosygin <`kosygin@math.princeton.edu`\> reports:

In addition to usual 104 keys in the usual PC layout this keyboard has 11 extra keys. Ten of them produce the following escape scancodes: **e0** **5f** (User (moon)), **e0** **6c** (E-mail), **e0** **11** (Messenger/SMS), **e0** **12** (Webcam), **e0** **20** (Mute (crossed speaker)), **e0** **30** (VolUp (triangle up with + sign in it)), **e0** **2e** (VolDown (triangle down with - sign in it)), **e0** **6d** (Media), **e0** **32** (My Home), **e0** **65** (Search).

The eleventh key (with keycap "F lock") is a switch between two sets of scancodes for function keys F1-F12. When "F lock" is pressed, then F1-F12 act as function keys and produce usual keyscans for these keys. When "F lock" is depressed, F1-F12 generate the following keyscans:

**e0** **3b** (new \[F1\]), **e0** **3c** (reply \[F2\]), **e0** **3d** (forward \[F3\]), **e0** **3e** (send \[F4\]), **e0** **10** (rewind \[F5\]), **e0** **19** (fast forward \[F6\]), **e0** **22** (play/pause \[F7\]), **e0** **24** (stop \[F8\]), **e0** **43** (my com \[F9\]), **e0** **44** (my doc \[F10\]), **e0** **57** (my pic \[F11\]), **e0** **58** (my music \[F12\]).

![](https://www.win.tue.nl/~aeb/linux/kbd/logitech-access.jpg)

### Logitech Cordless Desktop Pro keyboard

Nick Rusnov <`nick@grawk.net`\> reports:

The special buttons on a Logitech Cordless Desktop Pro keyboard produce the following scancodes:

**e0** **5f** (Moon (sleep)), **e0** **32** (Homepage), **e0** **6c** (Mail), **e0** **65** (Search), **e0** **66** (runningguuy), **e0** **20** (Mute), **e0** **2e** (VolDown), **e0** **30** (VolUp), **e0** **22** (Play/Pause), **e0** **24** (Stop), **e0** **10** (Rewind), **e0** **19** (ff), **e0** **21** (Logitech).

### Logitech Cordless Desktop Optical keyboard

Stefan reports:

The special buttons on a Logitech Cordless Desktop Optical keyboard produce the following scancodes:

**e0** **69** (Go), **e0** **6a** (Back), **e0** **5f** (Sleep), **e0** **66** (Favorites), **e0** **24** (SeekBack), **e0** **22** (SeekForward), **e0** **01** (Media), **e0** **1e** (VolUp), **e0** **25** (VolDown), **e0** **26** (Mute), **e0** **1f** (PlayPause), **e0** **17** (Stop), **e0** **6c** (Email), **e0** **65** (Search), **e0** **02** (Homepage).

Some other keys behave differently.

### Logitech Cordless Desktop LX 700

Robin Lionheart reports the following:

On the left hand side there is a Zoom button. The top side of that zooms in, the bottom side zooms out. Right of the Zoom button there is a %-button meant to go back to 100%. Scancodes are **6a** (Zoom +), **6b** (%), **e0** **04** (Zoom -).

Below those buttons there is the "iNav Tilt Wheel". Clicking the left side ("<") gives scancode **6c**, the right side (">") gives scancode **6e**. Other details are unknown yet.

Below the wheel there are three buttons: Close Application (black x in solid white rectangle) **6d**, Task Select (window rectangle overlapping lower right of another window) **e0** **01**, and Enter (copy of the usual Enter key).

Top left there are four buttons: three labeled below "Digital media library" with Camera (reel-to-reel camera icon) **e0** **14**, Music (eighth note icon) **e0** **13**, Photos (left-leaning photograph icon of standing person) **e0** **15**, and one labeled below "My Documents" **e0** **55**.

Top center there is the "Media Center" with a central dial and thirteen buttons: Mute **e0** **20**, Burn **e0** **31**, Record **e0** **78**, Media **e0** **6d**, Rewind (<<) **e0** **10**, Fast Forward (>>) **e0** **19**, Remote Control **e0** **2d**, Volume down (turn dial counterclockwise) **e0** **2e**, Volume up (turn dial clockwise) **e0** **30**, Audio Preset 1 **e0** **2c**, Audio Preset 2 **e0** **25**, Audio Preset 3 **e0** **26**, Eject **e0** **2f**, Play/Pause **e0** **22**, Stop **e0** **24**.

Top right there are four buttons: Email **e0** **6c**, Messenger **e0** **11**, Status **e0** **75**, Webcam **e0** **74**.

Right above the numerical keypad: Calculator **e0** **21**, Standby (Moon) **e0** **5f**.

Left above the numerical keypad sits the F-mode button. It sends no scan code, but switches the function keys between two modes: the function key mode (this is the default), where the function keys send the usual scan codes, and the application key mode, where the send other scan codes, unreported so far. The status is reported by the F-mode LED.

There are four LEDs, situated in the receiver, not on the keyboard, namely CapsLock, F-mode, NumLock, ScrollLock. When the F-mode LED is on, the function keys have their ordinary scan codes.

![](https://www.win.tue.nl/~aeb/linux/kbd/logitech-lx700.jpg)

### Logitech Cordless Desktop LX 700 combo

The following scancodes have been reported:


### Logitech Media Keyboard

Aliaksandr Lakhanko reports the following:


The "F-mode" key sends scancode **e0** **5a**, and at the same time switches the keyboard F-lock state. With enabled F-lock F1-F12 works as usually, with disabled F-lock they send the following scancodes: **e0** **3b** (Help \[F1\]), **e0** **3c** (Documents/\[W\] \[F2\]), **e0** **3d** (Spreadsheets/\[X\] \[F3\]), **e0** **3e** (Presentations/\[O\] \[F4\]), **e0** **3f** (Undo \[F5\]), **e0** **40** (Redo \[F6\]), **e0** **41** (Print \[F7\]), **e0** **42** (Save \[F8\]), **e0** **43** (Programmable/\[A\] \[F9\]), **e0** **44** (Programmable/\[B\] \[F10\]), **e0** **57** (Programmable/\[C\] \[F11\]), **e0** **58** (Programmable/\[D\] \[F12\]).

The keys F1-F12 do repeat while pressed, but in disabled F-lock mode they send their scancode only once.

The keyboard has 3 leds: \[A\] (Capslock), \[F\] (F-mode), \[l\] (Numlock). There is no Scrolllock key and led.

The keyboard does not support simultaneous pressing of CapsLock + Shift + one of letters W, S or X (internal scanning scheme design).

### Logitech Media Elite Keyboard

Paul Menzel reports that his Logitech Media Elite keyboard is mostly like the above Logitech Media keyboard.

**e0** **22** (Play/Pause), **e0** **24** (Stop), **e0** **6d** (Media), **e0** **2e** (Lower Volume), **e0** **30** (Raise Volume), **e0** **20** (Mute), **e0** **10** (Wind backward), **e0** **19** (Wind forward), **e0** **66** (Favorites), **e0** **32** (Homepage), **e0** **6c** (E-Mail), **e0** **11** (Messenger), **6a** (Zoom In), **e0** **04** (Zoom Out), **6b** (Zoom Reset).

Same as above: **e0** **5a** Mode F (switch function keys), **e0** **3b** (F1/Help), **e0** **3c** (F2/Word), **e0** **3d** (F3/Excel), **e0** **3e** (F4/Powerpoint), **e0** **3f** (F5/Undo), **e0** **40** (F6/Redo), **e0** **41** (F7/Print), **e0** **42** (F8/Save), **e0** **43** (F9/Box A), **e0** **44** (F10/Box B), **e0** **57** (F11/Box C), **e0** **58** (F12/Box D).

<a name="kbd06_microsoft"></a>
## //KBD 6.4 Microsoft keyboards

Some common scancodes found on some Microsoft keyboards.

  
```sh
| e0 05    | Messenger or Files    | e0 07    | Redo (on F3 or not)    | e0 08 | Undo (on F2 or not) | e0 09    | Application Left                |
| e0 0a    | Paste                 | e0 0b/8b | Scroll Up/Down Normal  | e0 10 | Prev Track, <<|     | e0 11/91 | Scroll Up/Down Fast             |
| e0 12/92 | Scroll Up/Down Faster | e0 13    | Word                   | e0 14 | Excel               | e0 15    | Calendar                        |
| e0 16    | Log Off               | e0 17    | Cut                    | e0 18 | Copy                | e0 19    | Next Track, >>|                 |
| e0 1e    | Application Right     | e0 1f/9f | Scroll Up/Down Fastest | e0 20 | Mute                | e0 21    | Calculator                      |
| e0 22    | Play/Pause            | e0 23    | Spell (on F10)         | e0 24 | Stop (cf e0 68)     | e0 2e    | Volume -                        |
| e0 30    | Volume +              | e0 32    | Web/Home               | e0 3b | Help (on F1)        | e0 3c    | My Music or Office Home (on F2) |
| e0 3d    | Task Pane (on F3)     | e0 3e    | New (on F4)            | e0 3f | Open (on F5)        | e0 40    | Close (on F6)                   |
| e0 41    | Reply (on F7)         | e0 42    | Fwd (on F8)            | e0 43 | Send (on F9)        | e0 57    | Save (on F11)                   |
| e0 58    | Print (on F12)        | e0 5b    | LeftWindows            | e0 5c | RightWindows        | e0 5d    | Application (Menu)              |
| e0 5e    | Power                 | e0 5f    | Sleep                  | e0 63 | Wake                | e0 64    | My Pictures                     |
| e0 65    | Search                | e0 66    | Favorites              | e0 67 | Refresh             | e0 68    | Stop (cf e0 24)                 |
| e0 69    | Forward               | e0 6a    | Back                   | e0 6b | My Computer         | e0 6c    | Mail                            |
| e0 6d    | Media                 |          |                        |       |                     |          |                                 |
```


### Microsoft Natural keyboard

This keyboard has three additional keys, with escaped scancodes **e0** **5b** (LeftWindow), **e0** **5c** (RightWindow), **e0** **5d** (Menu). The untranslated Set 2 scancodes (see [below](#kbd10_scancodesets)) are **e0** **1f**, **e0** **27** and **e0** **2f**, respectively. The USB key codes are usage page 0x07, usage index 227, 231, 101 (decimal), respectively. Microsoft [describes](http://www.microsoft.com/hwdev/download/desinit/scancode.zip) the intended use in detail. Both Windows keys are intended to be used as modifier keys, like both shift and control and alt keys. The Menu key may be modified by shift etc.

<a name="kbd06_msinternet"></a>
### Microsoft Internet keyboard

In addition to the three extra keys on the Microsoft Natural keyboard, this keyboard has ten keys, with escaped scancodes **e0** **6a** (Back), **e0** **69** (Forward), **e0** **68** (Stop), **e0** **6c** (Mail), **e0** **65** (Search), **e0** **66** (Favorites), **e0** **32** (Web/Home), **e0** **6b** (My Computer), **e0** **21** (Calculator), **e0** **5f** (Sleep). The untranslated Set 1 codes are as expected (make codes identical to the above translated Set 2 ones). The translated Set 3 codes are **6a**, **69**, **68**, **6c**, **65**, **66**, **97**, **6b**, **99**, **54**, respectively.

### Microsoft Natural keyboard pro


### Microsoft Natural Multimedia Keyboard

Jeremy Brand <`jeremy@nirvani.net`\> reports: The Microsoft Natural Multimedia Keyboard has 17 additional keys. Scancodes are

? (My Documents), **e0** **64** (My Pictures), **e0** **3c** (My Music), **e0** **20** (Mute), **e0** **22** (Play/Pause), **e0** **24** (Stop), **e0** **30** (Volume +), **e0** **2e** (Volume -), **e0** **10** (|<<), **e0** **19** (>>|), **e0** **6d** (Media), **e0** **6c** (Mail), **e0** **32** (Web/Home), **e0** **05** (Messenger), **e0** **21** (Calculator), **e0** **16** (Log Off), **e0** **5f** (Sleep).

Moreover, the function keys are dual purpose. There is a "function lock" key. By default the function keys are not function keys, they are "Help", "Undo", etc. You have to press the function lock key and then the function keys act like the usual function keys. In the default state the scancodes are

**e0** **3b** (Help) on F1 key, **e0** **08** (Undo) on F2 key, **e0** **07** (Redo) on F3 key, ? (New) on F4 key, ? (Open) on F5 key, ? (Close) on F6 key, ? (Replay) on F7 key, **e0** **42** (Fwd) on F8 key, **e0** **43** (Send) on F9 key, **e0** **23** (Spell) on F10 key, **e0** **57** (Save) on F11 key, **e0** **58** (Print) on F12 key.

### Microsoft Office keyboard

Christian Hammond [reports](http://www.chipx86.com/linuxstuff/officekb/wheel.php) about the keyboard Scroll Wheel: _The following is my interpretation of the results of_ `showkey -s`. _I had read that the wheel has 3 speeds, normal, fast, and faster. However, my results show 4._

Scroll Up: Normal **e0** **0b**, Fast **e0** **11**, Faster **e0** **12**, Fastest **e0** **1f**.

Scroll Down: Normal **e0** **8b**, Fast **e0** **91**, Faster **e0** **92**, Fastest **e0** **9f**.

Wouter van Wijk <`woutervanwijk@netscape.net`\> reported the scancodes given below.

On the left touchpad above the scroll wheel: **e0** **6a** (Back), **e0** **69** (Forward). On the left touchpad below the scroll wheel: **e0** **17** (Cut), **e0** **18** (Copy), **e0** **0a** (Paste), **e0** **09** (Application Left), **e0** **1e** (Application Right),

Buttons on the top row: No scancode (F Lock), **e0** **13** (Word), **e0** **14** (Excel), **e0** **32** (Web/Home), **e0** **6c** (Mail), **e0** **15** (Calendar), **e0** **05** (Files), **e0** **21** (Calculator), **e0** **20** (Mute), **e0** **2e** (Volume -), **e0** **30** (Volume +), **e0** **16** (Log Off), **e0** **5f** (Sleep). This is the expected code for Sleep. However, there do not seem to be Power and WakeUp keys.

The twelve function keys can be in two states. In the default state they produce the (new) codes below. The FLock toggle switches them back to good old function key state. **e0** **3b** (Help \[F1\]), **e0** **3c** (Office Home \[F2\]), **e0** **3d** (Task Pane \[F3\]), **e0** **3e** (New \[F4\]), **e0** **3f** (Open \[F5\]), **e0** **40** (Close \[F6\]), **e0** **41** (Reply \[F7\]), **e0** **42** (Fwd \[F8\]), **e0** **43** (Send \[F9\]), **e0** **23** (Spell \[F10\]), **e0** **57** (Save \[F11\]), **e0** **58** (Print \[F12\]). Note that each of these codes is just the **e0** variation of the ordinary function key code, except for that for Spell \[F10\]. When the FLock light is off (default) the **e0**\-version is activated.

Above the 5-key block with Insert, Home, Delete, PgUp, PgDown: **e0** **08** (Undo), **e0** **07** (Redo).

Above the number pad: **59** (=), **e0** **4c** (( \[PrintScreen\]), **e0** **64** () \[ScrollLock\]), **0e** (Backspace), **0f** (Tab). These are the usual codes for Backspace and Tab but new codes for (, ), =. PrintScreen and ScrollLock have the usual codes.

![](https://www.win.tue.nl/~aeb/linux/kbd/ms_office.jpg)

See the [Microsoft ad](http://www.microsoft.com/hardware/keyboard/ok_info.asp).

## //KBD 6.5 Labtec keyboards

### Labtec media PS/2 keyboard

Petr Slansky reports for the Labtec media PS/2 keyboard:

Browser keys: **e0** **65** (Search), **e0** **66** (Favorites), **e0** **6a** (Back), **e0** **69** (Forward), **e0** **68** (Stop), **e0** **67** (Refresh).

Player keys: **e0** **20** (Mute), **e0** **2e** (Vol-), **e0** **30** (Vol+), **e0** **22** (PlayPause), **e0** **24** (Stop), **e0** **10** (<<), **e0** **19** (>>).

Application keys: **e0** **6d** (Music player), **e0** **6c** (Mail), **e0** **32** (Home), **e0** **6b** (My Computer), **e0** **21** (Calculator), **e0** **5f** (Sleep).

All codes agree with the common Microsoft ones.

![](https://www.win.tue.nl/~aeb/linux/kbd/labtec_kbd2.jpg)

<a name="kbd06_safeway23"></a>
## //KBD 6.6 Safeway keyboards

### Safeway SW23 keyboard

The Safeway SW23 keyboard has 132 keys: the usual 104 keys (101 plus three Windows keys), five more keys called Turbo (below Enter, right of RShift), and Power, Sleep, Wake (below Delete, End, PageDown), and Ez (above Keypad-Minus), and 23 buttons in two rows above the row of function keys. By default, the five extra keys do not produce scancodes. (The Ez is a mode toggle. The Turbo key is used to enable the Power, Sleep, Wake keys.)


Second row of buttons: **e0** **23** (Sleep), **e0** **7d** (Cut), **e0** **7e** (Copy), **e0** **7f** (Paste), **e0** **20** (Rotate), **e0** **43** (Close), **e0** **30** (My Doc), **e0** **44** (DOS), **e0** **79** (Game), **e0** **77** (WWW), **e0** **6e** (Calc), **e0** **3e** (X'fer), **e0** **6a** (Menu/?).

The Ez key does not produce scancodes, but toggles a M/Mode LED, the fourth next to the Num, Caps, Scroll LEDs. When that LED is set, the 17 keypad keys give different scancodes: **e0** **3c** (N/Lock), **e0** **7b** (/), **e0** **22** (\*), **e0** **61** (-), **e0** **0f** (7), **e0** **21** (8), **e0** **6b** (9), **e0** **3d** (+), **e0** **04** (4), **e0** **62** (5), **e0** **39** (6), **e0** **10** (1), **e0** **24** (2), **e0** **05** (3), **e0** **02** (0), **e0** **41** (.), **e0** **3f** (Enter).

The Turbo key does not produce scancodes, and neither do Power, Sleep, Wake. However, when Turbo is pressed simultaneously, the Power, Sleep, Wake keys yield **e0** **5e**, **e0** **5f**, **e0** **63** as [they should](#kbd01_power).

In untranslated scancode mode 3, the multimedia and power keys do not yield any code. In untranslated scancode mode 1 they yield the same code as in untranslated scancode mode 2. (This is a design bug: untranslated scancode mode 1 should be the same as translated scancode mode 2 (see [below](#kbd10_scancodesets)), and this is true for the ordinary keys, but fails here for the "multimedia" keys. For example, the keys End and Keypad-Minus (in M/Mode) yield the same **e0** **4f** in untranslated scancode mode 1.)

Note that some "protocol keycodes" occur here with **e0** prefix. Indeed, we see **e1**, **ee**, **f1**, **fe**, **ff** in the key up sequence for the multimedia keys Keypad-Minus (**e0** **e1**), Calc (**e0** **ee**), Eject (**e0** **f1**), Copy (**e0** **fe**), Paste (**e0** **ff**).

## //KBD 6.7 Internet Wireless Keyboard

This keyboard (nameless, made in China) has 9+1+9 buttons, nine on each side of the Sleep button. Buttons: **e0** **6a** (Web Backward), **e0** **69** (Web Forward), **e0** **68** (Web Stop), **e0** **67** (Web Refresh), **e0** **65** (Web Search), **e0** **66** (Web Favorites), **e0** **32** (Web Home), **e0** **6c** (E-mail), **e0** **20** (Mute), **e0** **5f** (Sleep), **e0** **2e** (Volume Down), **e0** **30** (Volume Up), **e0** **22** (Play/Pause), **e0** **24** (Stop), **e0** **10** (Fast Backward), **e0** **19** (Fast Forward), **e0** **6d** (Media Player), **e0** **6b** (My Computer), **e0** **21** (Calculator).

This keyboard reports [keyboard ID](#kbd10_keyboardid) **ab** **83** (translated **ab** **c1**). Scancode sets 1 and 2 are reported as **01** and **02** (translated **c3** and **c1**). These translations are bugs, but otherwise all seems to function as expected, except that this keyboard does not recognize scancode set 3 and returns **fe** for an attempt to set Set 3. Every command **ed** **xx** is accepted, but there are no LEDs, there is only a battery indicator.

The mouse that accompanies the keyboard shows no reactions. It may need a special driver.

<a name="kbd06_omnibookinit"></a>
## //KBD 6.8 Omnibook keyboard

### Activation of special keys

The HP Omnibook XE3 laptop has special multimedia keys (aka OneTouch buttons) disabled by default. It is enabled by writing 0x59 to port 0x64 and then 0x90 to port 0x60 (as was found by Pavel Mihaylov). Various kernel patches can be found on the net. See, for example, [this one](http://zurich.ai.mit.edu/pipermail/omnibook/2002-April/001230.html).

### XE3 GC keys

Keys (on a XE3 GC model):


It is unknown how to activate the volume control buttons on a XE3 GC.

### XE3 GF keys

Keys (on a XE3 GF model):


<a name="kbd06_EZButton"></a>
## //KBD 6.9 EZ Button keyboard

Eric Schott <`eric@morningjoy.com`\> writes:

I have an IBM EZ Button keyboard (US layout), which seems to generate codes that are similar - but not identical - to the Rapid Access keycodes listed above.

There are 14 additional keys:

**e0** **25** ("Power" moon - has an LED), **e0** **26** ("Help"), **e0** **32** ("Internet"), **e0** **17** ("Lotus Word Pro"), **e0** **30** ("Lotus Organizer"), **e0** **2e** ("Aptiva Installer"), **e0** **19** ("Delete Message"), **e0** **24** (Stop), **e0** **22** (Pause), **e0** **1e** ("Msg" - has an LED), **e0** **20** ("CD" - has an LED), **e0** **23** (Rewind), **e0** **21** (Fast Forward), and **e0** **12** ("Talk" - has an LED).

The LEDs in the buttons are controlled by the sequence **[eb](#kbd01_LEDmanip)** **00** **xx** where the **xx** controls the LEDs. Bit 0 controls the "Msg" LED, 1 the CD LED, 2 the Power LED, 4 the Talk LED, and 5 the Message Waiting LED.

<a name="kbd06_chicony"></a>
## //KBD 6.10 Chicony KBP-8993 keyboard

Matthijs Melchior <`mmelchio@xs4all.nl`\> reports:

The Chicony KBP-8993 keyboard is similar. It has 14 additional keys, enabled by sending **ea** **71** and disabled by sending **ea** **70**.

These keys generate the following scan codes:

**e0** **25** (Moon), **e0** **32** (WWW), **e0** **30** (DOS), **e0** **17** (MyDoc), **e0** **26** (Menu), **e0** **1e** (zzZ), **e0** **2e** (Close), **e0** **24** (Stop), **e0** **23** (Back), **e0** **22** (Play), **e0** **21** (Forward), **e0** **20** (Mute), **e0** **12** (VolDown), **e0** **19** (VolUp).

The two extra LEDs, above the Moon key, and next to the zzZ key are manipulated by sending: **[eb](#kbd01_LEDmanip)** **00** **0x**, where bit 0 is the Moon LED and bit 1 is the zzZ LED.

## //KBD 6.11 Keyboards for HP Kayak and Vectra

Fons Rademakers <`Fons.Rademakers@cern.ch`\> writes:

_The electronics for this keyboard was first developed by HP's Home Products Division (HPD). They now make improved versions, which I don't know much about. We (HP Corporate PC Divisions, in Grenoble) reused the electronics, and changed the serigraphy printed on the keys._


```sh
| Msg | TTl | WWW | ?  | Lck |   | Msg | Phn | WWW | xxx | Slp |   | 133 | 134 | 135 | 136 | 137 |
| Phn | S3  | S4  | S5 | i   |   | <<  | >|| | []  | >>  | HP  |   | 138 | 139 | 140 | 141 | 142 |
|     |     |     |    | Mut |   |     |     |     |     | Mut |   |     |     |     |     | 143 |
|     |     |     |    | Vl+ |   |     |     |     |     | Vl+ |   |     |     |     |     | 144 |
|     |     |     |    | VL- |   |     |     |     |     | VL- |   |     |     |     |     | 145 |
```
Grenoble keyboard ------- Old HPD keyboard -------- key numbers



```sh
| Key# | Scancode |  Gren. Name |   HPD name  | ASCII |
|------|----------|-------------|-------------|-------|
|  133 | e0 1e    | Message/SC1 | Message     | a     |
|  134 | e0 12    | Top Tools   | Phone       | e     |
|  135 | e0 32    | Web Browser | Internet    | m     |
|  136 | e0 17    | Reminder    | Shortcut    | i     |
|  137 | e0 25    | Lock        | Suspend     | k     |
|  138 | e0 23    | Phone/SC2   | <<          | h     |
|  139 | e0 22    | ShortCut 3  | >||         | g     |
|  140 | e0 24    | ShortCut 4  | []          | j     |
|  141 | e0 21    | ShortCut 5  | >>          | f     |
|  142 | e0 26    | Information | Information | l     |
|  143 | e0 20    | Mute        | Mute        | d     |
|  144 | e0 30    | Volume +    | Volume +    | b     |
|  145 | e0 2e    | Volume -    | Volume -    | c     |
```

_Note the scancodes above are those read by x86 software in port 0x60. This is also called Scancode Set 1. Break codes are the same, with bit 7 of the second scancode set. Example:_ **e0 9e** _for the Message key._

<`spikboll@gmx.net`\> adds: _These keyboards have a "mail LED" (it's positioned above the Message button) that kan be controlled by the Rapid Access hack:_ 'send\_to\_keyboard **eb**' _makes the led blink and_ 'send\_to\_keyboard **ec**' _turns the led off._ 'send\_to\_keyboard **ed**' _makes the led light steadily and locks up the keys._

## //KBD 6.12 A keyboard

Jon Masters <`jonathan@easypenguin.co.uk`\> writes:

_My new 121 key keyboard has 105 keys + 16 multimedia keys (including cool stuff like a volume jog dial that sends one scancode when turned one way and anther when turned the opposite way)._


## //KBD 6.13 Yahoo! keyboard

Bernhard Polzin <`B.Polzin@web.de`\> writes:

_I have a transparent violet colored "Yahoo!" Keyboard with extra keys for Internet and Audio. Unusual scancodes (untranslated/translated):_


Note that this is very similar to the previous one.

![](https://www.win.tue.nl/~aeb/linux/kbd/yahoo912.jpg)

## //KBD 6.14 Honeywell Multimedia Keyboard

Eric Yeo reports that his Honeywell Multimedia Keyboard has the following additional keys: **e0 25** (Screen saver), **e0 24** (Mail), **e0 32** (WWW), **e0 10** (Game), **e0 26** (Calc), **e0 1e** (Shortcut 1), **e0 18** (Shortcut 2), **e0 12** (Prev), **e0 22** (Next), **e0 19** (Play), **e0 23** (Stop), **e0 30** (Vol up), **e0 2e** (Vol down), **e0 17** (Eject), **e0 20** (Mute).

## //KBD 6.15 Samsung Ergonomics Keyboard

Miguel Costa reports that his [Samsung Ergonomics Keyboard](https://www.win.tue.nl/~aeb/linux/kbd/samsung.jpg) has the following additional keys: **e0** **2e** (Vol down), **e0** **30** (Vol up), **e0** **20** (Mute), **e0** **18** (Eject), **e0** **22** (PlayPause), **e0** **24** (Stop), **e0** **10** (Rewind), **e0** **19** (Forward), **e0** **26** (Help), **e0** **59** (Favorites), **e0** **09** (Exit), **e0** **0a** (Address book), **e0** **02** (Action 1), **e0** **03** (Action 2), **e0** **04** (Action 3), **e0** **05** (Action 4), **e0** **06** (Action 5), **e0** **32** (Internet), **e0** **6c** (Email), **e0** **5f** (Standby), **e0** **5b** (Windows left), **e0** **5c** (Windows right), **e0** **5d** (Windows task).

![](https://www.win.tue.nl/~aeb/linux/kbd/samsung-s.jpg)

<a name="kbd05_mtek"></a>
## //KBD 6.16 The "LiteOn MediaTouch Keyboard" type SK-2500

Serge van den Boom reports that his LiteOn MediaTouch Keyboard (a Trust "Direct Access Keyboard"), has 18 additional keys: **e0** **25** (Suspend), **e0** **7a** (Coffee), **e0** **32** (WWW), **e0** **21** (Calculator), **e0** **23** (Xfer), **38** **2a** **0f** **8f** / **8f** **b8** **aa** (Switch window), **e0** **17** (Close), **e0** **10** (|<<), **e0** **22** (>| / \[\]), **e0** **24** (\[\]), **e0** **19** (>>|), **e0** **1e** (Record), **e0** **12** (Rewind), **e0** **26** (Menu/?), **e0** **18** (Eject), **e0** **20** (Mute), **e0** **30** (Volume +), **e0** **2e** (Volume -). Of these, the keys (|<<), (>>|), (Volume +), (Volume -) repeat. The others do not, except for the rather special (Switch window) key. Upon press it produces the LAlt-down, LShift-down, Tab-down, Tab-up sequence; it repeats **0f**, that is, Tab-down; and upon release it produces the Tab-up, LAlt-up, LShift-up sequence.

![](https://www.win.tue.nl/~aeb/linux/kbd/sk2500.jpg)

## //KBD 6.17 The Acer Aspire 1310LC laptop

Pau Aliagas reports that his Acer Aspire 1310LC laptop has 4 additional keys: **e0** **6c** (Mail), **e0** **32** (WWW), **e0** **74** (P1), **e0** **73** (P2).

## //KBD 6.18 The Emachines eKB-5190(A) keyboard

This keyboard has 18 additional keys, with translated Set 2 scancodes: **e0** **1e** (Banking), **e0** **25** (Brokerage), **e0** **26** (Pay Bills), **e0** **24** (News), **e0** **21** (Sports), **e0** **22** (Travel), **e0** **32** (Shopping), **e0** **23** (Tickets), **e0** **31** (Music), **e0** **18** (Health), **e0** **30** (Greetings), **e0** **1f** (Games), **e0** **13** (Auctions), **e0** **2e** (MySite), **e0** **20** (Telephone), **e0** **12** (Surf), **e0** **19** (Search), **e0** **10** (Vol -), **e0** **17** (Vol +). The respective untranslated Set 3 codes are **95**, **9d**, **9c**, **94**, **99**, **93**, **97**, **9a**, **9e**, **9f**, **91**, **a3**, **a2**, **92**, **9b**, **96**, **a0**, **a1**, **98** (equal to the translated Set 3 codes).

Unusual commands are **e4** **0b**, which returns **bc** **1c** (untranslated **06** **f0** **5a**), and **e4** **0c**, which returns **ff** (untranslated **00**), and **ec** **0c**, which returns **06** regardless of translation. I do not know the meaning or function of these.

* * *



# /KBD 7. NCD keyboards


Some keyboards natively produce [Set 3](#kbd10_scancodesets) scancodes. When connected to a PC one will by default see translated Set 3 scancodes. This means that the F9 and F10 keys have make codes **60** and **61** and break codes **e0** and **e1**. Thus, these latter codes are ordinary key release codes here, not protocol codes.

The N-nnn type numbers indicate the number nnn of keys the keyboard has.

<a name="kbd07_e0_as_key"></a>
## //KBD 7.1 A Japanese keyboard using e0 as ordinary scancode

Benjamin Carter <`bcarter@ultra5.cs.umr.edu`\> reports:

_I recently came into possession of a 97-key keyboard with Japanese markings on the keys. (The keys also have the standard qwerty-characters on them, with the exception of some of the meta-keys (there are 3 keys near the Alt keys on either side of the spacebar with only Japanese characters on them so I don't know what they are). In any case, the keyboard sends out scancodes that work for all the main keys (backspace, letters and numbers, enter, shift), but the numeric keypad, Alt keys, and function keys don't work. I have run the board through `showkey -s`, so I know what scancodes this keyboard sends out. However, the F9 and F10 keys send out **60** and **61**, respectively, so their key release events send out **e0** and **e1**, confusing the keyboard driver._

(Compare this with the [table](#kbd10_correspondence) giving the translated Set 3 scancodes. The reported codes are almost identical.)

\# These are across the top of the keyboard.

**58** (F1), **59** (F2), **5a** (F3), **5b** (F4), **5c** (F5), **5d** (F6), **5e** (F7), **5f** (F8), **60** (F9), **61** (F10), **62** (F11), **63** (F12)

**76** (Break), **77** (Setup).

\# top row

**64** (Esc), **02** (1), **03** (2), **04** (3), **05** (4), **06** (5), **07** (6), **08** (7), **09** (8), **0a** (9), **0b** (0), **0c** (-), **0d** (=), **29** (\`), **0e** (Backspace)

\# 2nd row

**0f** (Tab), **10** (Q), **11** (W), **12** (E), **13** (R), **14** (T), **15** (Y), **16** (U), **17** (I), **18** (O), **19** (P), **1a** (\[), **1b** (\]), **79** (Del), **6e** (Line Feed)

\# 3rd row

**38** (Ctrl), **1e** (A), **1f** (S), **20** (D), **21** (F), **22** (G), **23** (H), **24** (J), **25** (K), **26** (L), **27** (;), **28** ('), **75** (\\), **1c** (Return)

\# 4th row

**2a** (Shift\_L), **2c** (Z), **2d** (X), **2e** (C), **2f** (V), **30** (B), **31** (N), **32** (M), **33** (,), **34** (.), **35** (/), **3a** ((unknown)), **36** (Shift\_R)

\# bottom row

**1d** (Caps Lock), **71** (Alt\_L), **01** ((unknown)), **39** (Space), **45** ((unknown)), **72** (Alt\_R), **46** ((unknown))

\# numeric keypad. No "grey" section on the keyboard.

**47** (7), **48** (8), **49** (9), **54** (Keypad -), **4b** (4), **4c** (5), **4d** (6), **37** (Keypad +), **4f** (1), **50** (2), **51** (3), **4e** (Keypad Enter), **52** (0), **78** (Up), **53** (Keypad .), **56** (Left), **55** (Down), **7d** (Right), **7e** (Keypad ,).

## //KBD 7.2 The NCD N-123NA keyboard

![](sun-type5.gif)

There are more keyboards that do not use **e0** as escape code. For example, Paul Schulz <`pauls@caemrad.com.au`\> reports the same for Sun Type 5 Keyboard with PS/2 connector, NCD model N-123NA. The scancodes are very similar to those given above:

\# Sun Keys (far left)

**44** (Help), **42** (Stop), **40** (Again), **3e** (Props), **65** (Undo), **70** (Front), **66** (Copy), **67** (Open), **68** (Paste), **69** (Find), **6a** (Cut),

\# Top row

**64** (ESC), **58** (F1), **59** (F2), **5a** (F3), **5b** (F4), **5c** (F5), **5d** (F6), **5e** (F7), **5f** (F8), **60** (F9), **61** (F10), **62** (F11), **63** (F12),

\# 1st row

**29** (~/\`), **02** (!/1), **03** (@/2), **04** (#/3), **05** ($/4), **06** (%/5), **07** (^/6), **08** (&/7), **09** (\*/8), **0a** ((/9), **0b** ()/0), **0c** (\_/-), **0d** (+/=), **0e** (BS),

\# 2nd row

**0f** (TAB), **10** (Q), **11** (W), **12** (E), **13** (R), **14** (T), **15** (Y), **16** (U), **17** (I), **18** (O), **19** (P), **1a** ({/\[), **1b** (}/\]), **75** (|/\\),

\# 3rd row

**29** (CAPS), **30** (A), **31** (S), **32** (D), **33** (F), **34** (G), **35** (H), **36** (J), **37** (K), **38** (L), **39** (:/;), **40** ("/'), **28** (Enter),

\# 4th row

**2a** (Shift), **2c** (Z), **2d** (X), **2e** (C), **2f** (V), **30** (B), **31** (N), **32** (M), **33** (</,), **34** (>/.), **35** (?//), **36** (Shift),

\# Bottom row

**38** (Ctrl), **71** (Alt), **66** (Meta), **39** (Space), **6c** (Meta), **72** (Compose), **3a** (Alt),

\# To the right

**6e** (PrintScreen/SysRq), **76** (ScrollLock), **77** (Pause/Break),

**76** (Insert), **7f** (Home), **6f** (PageUp),

**79** (Del), **7a** (End), **7e** (PageDown),

**80** (.), **81** (.), **82** (.),

**d4** (.), **78** (Up), **41** (.),

**56** (Left), **55** (Down), **7d** (Right),

\# Keypad

**6d** (Mute), **73** (Brightness/Vol Down), **74** (Brightness/Vol Up), **53** (Setup),

**01** (NumLock), **45** (/), **46** (\*), **54** (-),

**47** (7/Home), **48** (8/Up), **4d** (9/PgUp), **37** (+),

**4b** (4/Left), **4c** (5), **4d** (6/Right),

**4f** (1/End), **50** (2/Down), **51** (3/PgDn), **4e** (Enter),

**52** (0/Ins), **53** (./Del).

## //KBD 7.3 The NCD N-123UX keyboard

Don Christensen reports that his NCD N-123UX keyboard returns scancode Set 3.

<a name="kbd07_NCD97"></a>
## //KBD 7.4 The NCD N-97 keyboard

David Monro reports: I have a PS/2 keyboard, an NCD N-97, which shipped with some NCD X terminals and also with some Mips workstations IIRC. This keyboard returns Set 3 keycodes even when its told to be in Set 2. In particular, the release codes for F9 and F10 are **e0** and **e1**. The [keyboard ID](#kbd10_keyboardid) is **ab** **85**.

## //KBD 7.5 NCD X terminals

NCD keyboards are often used with NCD X terminals. Here the key combinations to get into the boot monitor.


| N-101                       | LCtrl-LAlt-Setup     |
| N-102 or Windows compatible | LAlt-CapsLock-Setup  |
| VT220-compatible            | Ctrl-Compose-F3      |
| N-108LK                     | Ctrl-LAlt-F3         |
| N-97                        | LAlt-CapsLock-Setup  |
| N-97 Kana and Hitachi Kana  | LAlt-CapsLock-Setup  |
| N-107 Sun type 4 compatible | Stop A (L1-A)        |
| N-123 Sun type 5 compatible | Stop-A (L1-A)        |
| Nokia 122                   |                      |
| 3270 (122-key Lexmark)      | LShift LAlt Setup    |
|                             | (on the left keypad) |



* * *

<a name="kbd08_japanese"></a>
# /KBD 8. Japanese keyboards


![](https://www.win.tue.nl/~aeb/linux/kbd/jp106.jpg)

![](https://www.win.tue.nl/~aeb/linux/kbd/jp106-with-scancodes.jpg)

## //KBD 8.1 Japanese 86/106 keyboards

(Information from Barry Yip <`g609296@cc.win.or.jp`\>, Norman Diamond, NIIBE Yutaka and H. Peter Anvin, who contributed the photographs of his JP106 keyboard above and of his [Japanese laptop](https://www.win.tue.nl/~aeb/linux/kbd/jplaptop.jpg).)

Common Japanese keyboards have five additional keys (106-key, or 86-key for a notebook; these days there may also be 3 extra Windows keys). These keys have scancodes **70** (hiragana/katakana), **73** (backslash/underscore), **79** (henkan/zenkouho), **7b** (muhenkan), **7d** (yen/vertical bar).

Different keycaps:

  
```sh
| USB | Scancode |      Japanese     |   US    |   | USB | Scancode |       Japanese      |         US      |
|-----|----------|-------------------|---------|---|-----|----------|---------------------|-----------------|
|  53 | 29       | (hankaku/zenkaku) | (` / ~) |   |  47 | 1a       | (@ / `)             | ([ / {)         |
|  31 | 03       | (2 / ")           | (2 / @) |   |  48 | 1b       | ([ / {)             | (] / })         |
|  35 | 07       | (6 / &)           | (6 / ^) |   |  51 | 27       | (; / +)             | (; / :)         |
|  36 | 08       | (7 / ')           | (7 / &) |   |  52 | 28       | (: / *)             | (' / ")         |
|  37 | 09       | (8 / ()           | (8 / *) |   |  29 | 2b       | (] / })             | (backslash / |) |
|  38 | 0a       | (9 / ))           | (9 / () |   | 135 | 73       | (backslash / _)     |                 |
|  39 | 0b       | (0 / ~)           | (0 / )) |   | 139 | 7b       | (muhenkan)          |                 |
|  45 | 0c       | (- / =)           | (- / _) |   | 138 | 79       | (henkan/zenkouho)   |                 |
|  46 | 0d       | (^ / overbar)     | (= / +) |   | 136 | 70       | (hiragana/katakana) |                 |
| 137 | 7d       | (\ / |)           |         |   |     |          |                     |                 |
```

ASCII and JIS-Roman differ in two or three points: the code positions where ASCII has backslash, tilde, broken bar, JIS-Roman uses yen, overbar and vertical bar, respectively.

Some keyboards have the tilde printed on the keycap for the 0 key, some don't. Similarly, some keyboards have the backslash printed on the keycap for the \_ key and some don't, but in all cases you need Shift to get \_.

<a name="kbd08_bradford"></a>
## //KBD 8.2 Description of the all-Japanese keys

Norman Diamond adds to the previous section:

To the left of the spacebar, (Shift-JIS) 無変換 (muhenkan) means no conversion from kana to kanji. To the right of the spacebar, 変換 (henkan) means conversion from kana to kanji. In Microsoft systems it converts the most recently input sequence of kana to the system's first guess at a string of kanji/kana/etc. with the correct pronunciation and a guess at the meaning. Repeated keypresses change it to other possible guesses which are either less common or less recently used, depending on the situation. The shifted version of this key is 前侯補 (zenkouho) which means "previous candidate" -- "zen" means "previous", while "kouho" means "candidate" (explanation courtesy of NIIBE Yutaka) -- it rotates back to earlier guesses for kanji conversion. The alt version of this key is 全侯補 also pronounced (zenkouho), which means "all candidates" -- here, "zen" means "all" -- it displays a menu of all known guesses. I never use the latter two functions of the key, because after pushing the henkan key about three times and not getting the desired guess, it displays a menu of all known guesses anyway.

Next on the right, ひらがな (hiragana) means that phonetic input uses one conventional Japanese phonetic alphabet, which of course can be converted to kanji by pressing the henkan key later. The shifted version is カタカナ (katakana) which means the other Japanese phonetic alphabet, and the alt version is ローマ字 (ro-maji) which means the Roman alphabet.

Near the upper left, 半/全 (han/zen) means switch between hankaku (half-size, the same size as an ASCII character) and zenkaku (full-size, since the amount of space occupied by a kanji is approximately a square, twice as fat as an ASCII character). It only affects katakana and a few other characters (for example there's a full-width copy of each ASCII character in addition to the single-byte half-width encodings). The alt version of this is 漢字 (kanji) which actually causes typed Roman phonetic keys to be displayed as Japanese phonetic kana (either hiragana or katakana depending on one of the other keys described above) and doesn't cause conversion to kanji.


## //KBD 8.3 A Japanese keyboard that imitates a US one

John Bradford reports that he has a Japanese keyboard (an IBM 5576 KEYBOARD-2, part number 94X1110) that by default simulates US key layout. Thus, pressing the @ key yields scancodes **2a** **03** (fake shift followed by digit 2), pressing Shift - yields scancodes **b6** **0d** (fake shift down, =) with release **8d** **36**, etc.

Thus, the (translated Set 2) scancodes can be read off the [table](#japusdiffs) with differences between the Japanese and the US layout.

In this state the non-ASCII keys (Yen and overline) yield an error (**ff**). The Japanese keys hankaku, kanji/katakana, muhenkan, zenkoho/henkan, hiragana, zenmen ki, yield the codes expected from keys in that position on a US keyboard: **29** (\`/~), **38** (LAlt), **39** (space), **39** (space), **39** (space), **e0** **38** (RAlt), respectively.

Switching the keyboard to Set 3 enables the Japanese keys. In untranslated Set 3 these give codes: hankaku **0e**, Yen **13**, overline (shift ^), kanji/katakana **19**, muhenkan **85**, zenkoho/henkan **86**, hiragana **87**, zenmen ki **39**. (Also: backslash/underscore **5c**, bracketright/braceright **53**.)

This is the only keyboard I know that gives more information in Set 3 than in Set 2. It reports [keyboard ID](#kbd10_keyboardid) **ab** **90**.

![](https://www.win.tue.nl/~aeb/linux/kbd/imb5576-2.jpg)

* * *


* * *

<a name="kbd09_korean"></a>
# /KBD 9. Korean keyboards


The Korean keyboard has two keys, the Korean/Chinese and the Korean/English toggles, that generate scancodes **f1** and **f2** (respectively) when pressed, and nothing when released. They do not repeat. The keycaps are "hancha" and "han/yong" (written in Hangul). Hancha (hanja) means Chinese character, and Han/Yong is short for Hangul/Yongcha (Korean/English). They are located left and right of the space bar.

## //KBD 9.1 An A4tech keyboard

Dave Willis reports on his A4tech keyboard:

Apart from the Korean Hancha and Han/Yong keys, there are on the top row:


Below mute: **e0** **62** (Office).

On the right hand side: **e0** **6a** (arrow up left), **e0** **69** (arrow down right), **e0** **0b** (wheel up), **e0** **2c** (wheel down), **e0** **64** (wheel in).

Wheel up and wheel down have no release code, only the plus and minus keys will repeat themselves when held down.

## //KBD 9.2 The DEC LK201-K

![](lk201-k.gif)

* * *


* * *

# /KBD 10. Keyboard-internal scancodes


<a name="kbd10_scancodesets"></a>
## //KBD 10.1 Three scancode sets

The usual PC keyboards are capable of producing three sets of scancodes. Writing 0xf0 followed by 1, 2 or 3 to port 0x60 will put the keyboard in scancode mode 1, 2 or 3. Writing 0xf0 followed by 0 queries the mode, resulting in a scancode byte **43**, **41** or **3f** from the keyboard.

Set 1 contains the values that the XT keyboard (with only one set of scancodes) produced, with extensions for new keys. Someone decided that another numbering was more logical and invented scancode Set 2. However, it was realized that new scancodes would break old programs, so the keyboard output was fed to a 8042 microprocessor on the motherboard that could translate Set 2 back into Set 1. Indeed a smart construction. This is the default today. Finally there is the PS/2 version, Set 3, more regular, but used by almost nobody.

(I wrote this long ago. Nowadays Linux 2.5 may try to use Set 3. Also certain HP machines, like the PS/2 version of the HP9000 workstation, have used Set 3.)

Sets 2 and 3 are designed to be translated by the 8042. Set 1 should not be translated.

Not all keyboards support all scancode sets. For example, my MyCom laptop only supports scancode Set 2, and its keyboard does not react at all when in mode 1 or 3. The non-PC [IBM 1390876](http://www.seasip.info/VintagePC/ibm_1390876.html) keyboard is reported to use scancode Set 3 only.

## //KBD 10.2 Make and Break codes

The key press / key release is coded as follows:

For Set 1, if the make code of a key is _c_, the break code will be _c_+0x80. If the make code is **e0** _c_, the break code will be **e0** _c_+0x80. The Pause key has make code **e1** **1d** **45** **e1** **9d** **c5** and does not generate a break code.

For Set 2, if the make code of a key is _c_, the break code will be **f0** _c_. If the make code is **e0** _c_, the break code will be **e0** **f0** _c_. The Pause key has the 8-byte make code **e1** **14** **77** **e1** **f0** **14** **f0** **77**.

For Set 3, by default most keys do not generate a break code - only CapsLock, LShift, RShift, LCtrl and LAlt do. However, by default all non-traditional keys do generate a break code - thus, LWin, RWin, Menu do, and for example on the Microsoft Internet keyboard, so do Back, Forward, Stop, Mail, Search, Favorites, Web/Home, MyComputer, Calculator, Sleep. On my BTC keyboard, also the Macro key does.

In Scancode Mode 3 it is possible to enable or disable key repeat and the production of break codes either on a key-by-key basis or for all keys at once. And just like for Set 2, key release is indicated by a **f0** prefix in those cases where it is indicated. There is nothing special with the Pause key in scancode mode 3.

<a name="kbd10_translationtable"></a>
## //KBD 10.3 Translation

The 8042 microprocessor translates the incoming byte stream produced by the keyboard, and turns an **f0** prefix into an OR with **80** for the next byte. (Some implementations do this for the next byte that does not have this bit set already. A consequence is that in Set 3 the keys with Set-3 value 0x80 or more are broken in a peculiar way: hitting such a key and then some other key turns the make code for this last key into a break code. For example the Sleep key on a Microsoft Internet keyboard generates **54** / **d4** for press/release. But pressing and releasing first Menu and then Sleep produces **8d** **8d** **d4** **d4** as translation of **8d** **f0** **8d** **54** **f0** **54**. Other implementations are OK.)

Unless told not to translate, the keyboard controller translates keyboard scancodes into the scancodes it returns to the CPU using the following table (in hex):

|    |  00 |  01 |  02 |  03 |  04 |  05 |  06 |  07 |  08 |  09 |  0a |  0b |  0c |  0d |  0e |  0f |
|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 00 | ff  | 43  | 41  | 3f  | 3d  | 3b  | 3c  | 58  | 64  | 44  | 42  | 40  | 3e  | 0f  | 29  | 59  |
| 10 | 65  | 38  | 2a  | 70  | 1d  | 10  | 02  | 5a  | 66  | 71  | 2c  | 1f  | 1e  | 11  | 03  | 5b  |
| 20 | 67  | 2e  | 2d  | 20  | 12  | 05  | 04  | 5c  | 68  | 39  | 2f  | 21  | 14  | 13  | 06  | 5d  |
| 30 | 69  | 31  | 30  | 23  | 22  | 15  | 07  | 5e  | 6a  | 72  | 32  | 24  | 16  | 08  | 09  | 5f  |
| 40 | 6b  | 33  | 25  | 17  | 18  | 0b  | 0a  | 60  | 6c  | 34  | 35  | 26  | 27  | 19  | 0c  | 61  |
| 50 | 6d  | 73  | 28  | 74  | 1a  | 0d  | 62  | 6e  | 3a  | 36  | 1c  | 1b  | 75  | 2b  | 63  | 76  |
| 60 | 55  | 56  | 77  | 78  | 79  | 7a  | 0e  | 7b  | 7c  | 4f  | 7d  | 4b  | 47  | 7e  | 7f  | 6f  |
| 70 | 52  | 53  | 50  | 4c  | 4d  | 48  | 01  | 45  | 57  | 4e  | 51  | 4a  | 37  | 49  | 46  | 54  |
| 80 | 80? | 81  | 82  | 41  | 54  | 85  | 86  | 87  | 88  | 89  | 8a  | 8b  | 8c  | 8d  | 8e  | 8f  |
| 90 | 90  | 91  | 92  | 93  | 94  | 95  | 96  | 97  | 98  | 99  | 9a  | 9b  | 9c  | 9d  | 9e  | 9f  |
| a0 | a0  | a1  | a2  | a3  | a4  | a5  | a6  | a7  | a8  | a9  | aa  | ab  | ac  | ad  | ae  | af  |
| b0 | b0  | b1  | b2  | b3  | b4  | b5  | b6  | b7  | b8  | b9  | ba  | bb  | bc  | bd  | be  | bf  |
| c0 | c0  | c1  | c2  | c3  | c4  | c5  | c6  | c7  | c8  | c9  | ca  | cb  | cc  | cd  | ce  | cf  |
| d0 | d0  | d1  | d2  | d3  | d4  | d5? | d6  | d7  | d8  | d9? | da? | db  | dc  | dd  | de  | df  |
| e0 | e0  | e1  | e2  | e3  | e4  | e5  | e6  | e7  | e8  | e9  | ea  | eb  | ec  | ed  | ee  | ef? |
| f0 | -   | f1? | f2? | f3? | f4? | f5? | f6? | f7? | f8? | f9? | fa? | fb? | fc? | fd? | fe? | ff  |


A reference for the first half of this table is the book by Gary J Konzak _PC 8042 Controller_, ISBN 0-929392-21-3. (Report by `vojtech@suse.cz`.)

A way to check this table is: (i) put the keyboard in untranslated modes 1, 2, 3 and look at the [resulting values](table.h), and (ii) put the keyboard in translated scancode modes 1, 2, 3. Now compare the values. The entries with question marks were not checked in this way.

Note that the range **01**-**7f** of this table is 1-1. In the second half of the table, translated and untranslated values are equal in all known cases, with the two exceptions **83** and **84**.

One asks the controller to transmit untranslated scancodes by writing a keyboard controller command with bit 5 set and bit 6 cleared. E.g., use the command byte **45** to get translated codes, and **24** to get untranslated codes that do not cause interrupts.

### Effects of translation

### Origin of strange scan code set values

The keyboard command **f0** with argument 1, 2 or 3 sets the current scancode set, and this same command with argument 0 asks for the current scancode set. The reply is **43**, **41** or **3f** for sets 1, 2, 3. Why? Because in reality the reply is 1, 2 or 3, and that is what one sees when translation is off. But translation turns these into **43**, **41**, **3f**.

<a name="kbd10_keyboardid"></a>
### Keyboard IDs

Keyboards do report an ID as a reply to the command **[f2](#kbd12_kcf2)**. (An XT keyboard does not reply, an AT keyboard only replies with an ACK.) An MF2 AT keyboard reports ID **ab** **83**. Translation turns this into **ab** **41**.

Many short keyboards, like IBM ThinkPads, and Spacesaver keyboards, send **ab** **84** untranslated, which becomes **ab** **54** translated. (The netbsd source has a misunderstanding here, and seems to associate the **54** and **84** to the ThinkPad model - cf. the defines KEYB\_R\_MF2ID2TP75X, KEYB\_R\_MF2ID2TP76X.)

Several 122-key keyboards are reported to send **ab** **86**. Here translated and untranslated values coincide. (Reports mention "122-Key Enhanced Keyboard", "standard 122-key keyboard", "122 Key Mainframe Interactive (MFI) Keyboard", "122-Key Host Connected Keyboard".)

John Elliott reports on his [IBM 1390876 page](http://www.seasip.info/VintagePC/ibm_1390876.html) that this keyboard returns **bf** **bf**.

David Monro reports **ab** **85** for a [NCD N-97](#kbd07_NCD97) keyboard.

Tim Clarke reports **ab** **85** (instead of the usual **ab** **86**) for the "122-Key Host Connect(ed) Keyboard".

He also reports _Also, when playing with my KVM problems Belkin gave me a 105-key Windows keyboard which Id.s itself as 18ABh_.

Linux 2.5.25 kernel source has 0xaca1 for a "NCD Sun layout keyboard". It also mentions 0xab02 and 0xab7f, but these arise as (mistaken) back translations from **ab** **41** and **ab** **54**.

Ralph Brown's Interrupt list mentions "old Japanese 'G', 'P', 'A' keyboards", with keyboard IDs **ab** **90**, **ab** **91**, **ab** **92**. Here translated and untranslated versions coincide. ID **ab** **90** was also mentioned [above](#kbd08_bradford).

<a name="kbd10_correspondence"></a>
## //KBD 10.4 Correspondence

For the traditional keys the correspondence is fairly clear: above we saw the [translation table](#translationtable), and Set 1 equals translated Set 2, and Set 3 equals Set 2 in most cases where Set 2 has a single (non-escaped) scancode, and in any case the correspondence is constant (and given [below](#correspondence)).

On the other hand, modern keyboards have all kinds of multimedia and other additional keys, and what happens for them is completely random, and varies from keyboard to keyboard.

Let us look at an example.

The [Microsoft Internet keyboard](#kbd06_msinternet) has keys Search, Favorites, Stop, Forward, Back, My Computer, Mail, Web / Home, Calculator with translated Set 3 scancodes **65**, **66**, **68**, **69**, **6a**, **6b**, **6c**, **97**, **99**, respectively, and translated Set 2 scancodes **e0** _xx_, with _xx_ = **65**, **66**, **68**, **69**, **6a**, **6b**, **6c**, **32**, **21**.

On the other hand, the [IBM Rapid Access II keyboard](#kbd06_ibmrapidaccessii) has keys CD stop, CD play, Volume D, Volume U, CD back, CD fwd with translated Set 3 scancodes **69**, **6a**, **6b**, **6c**, **6d**, **44**, and translated Set 2 scancodes **e0** _xx_, with _xx_ = **20**, **22**, **21**, **23**, **24**, **12**.

Thus, different keyboards have different mappings between Set 2 and Set 3 codes.

## //KBD 10.5 Use

Can these other scancode sets be used? Probably not.

() Translated scancode Set 1 has weird codes that nobody wants to use.

(i) My MyCom laptop does not support scancode sets 1 and 3 at all.

(ii) Some laptops have special key combinations that bring one into a setup or configuration utility. It is impossible to do anything useful, or to get out of it again, when the scancode mode is not translated Set 2.

(iii) Many keyboards have bugs in scancode sets 1 and/or 3 but are fine in scancode Set 2. Vojtech Pavlik reports that his BTC keyboard has the same codes for the '1' and '2' keys in Set 3, both having the code for '1'). On my BTC keyboard the key up value for Esc and 1 are both **ff** in scancode Set 1. My Safeway keyboard has untranslated Set 1 equal to translated Set 2, except for the multimedia keys, where untranslated Set 1 equals untranslated Set 2.

(iv) A big advantage of Set 3 is that each key generates a unique code so that one does not need to parse sequences. However, the BTC keyboard mentioned [above](#kbd05_BTC) generates **e0** **6f** for its Macro key also in scancode mode 3. The Safeway keyboard mentioned [above](#kbd06_safeway23) does not generate any codes for its multimedia keys in scancode mode 3.

(v) Some keyboard controllers cannot handle Set 3 values that are larger than 0x7f, and give [peculiar results](#contagious) for e.g. the Windows keys in translated scancode mode 3. The result is that the following key is "eaten": the key down action turns into a key up.

(vi) The USB legacy support only supports translated Set 2.

(vii) The [Microsoft Keyboard Scan Code Specification](http://www.microsoft.com/hwdev/download/desinit/scancode.zip) writes: _In the very early days of Windows NT, an attempt was made to use the much more orthogonal Scan Code Set 3, but due to bugs in the implementation of this Scan Code Set on numerous OEM keyboards, the idea was abandoned._ And also: _Scan Code Set 3 is not used or required for operation of Microsoft operating systems._

(viii) Others also tried Set 3. The PS/2 version of the HP9000 workstation uses it. This is fine with HP's keyboards but causes some problems with foreign keyboards.

(ix) It is said that Hal Snyder of Mark Williams, Co remarked: "We find that about 10% of cheap no-name keyboards do not work in scan code set 3".

(x) These days Linux probes the keyboard, and may try to enable Set 3. This is good for learning a lot about strange keyboards. It is bad for having a stable system that just works.

## //KBD 10.6 A table

(USB codes in decimal, scancodes in hex.)

|  #  | USB |  Set 1   | X(Set 1) |  Set 2   | X(Set 2) | Set 3 | X(Set 3) |      keycap      |
|-----|-----|----------|----------|----------|----------|-------|----------|------------------|
|   1 |  53 | 29       | 39       | 0e       | 29       | 0e    | 29       | ` ~              |
|   2 |  30 | 02       | 41       | 16       | 02       | 16    | 02       | 1 !              |
|   3 |  31 | 03       | 3f       | 1e       | 03       | 1e    | 03       | 2 @              |
|   4 |  32 | 04       | 3d       | 26       | 04       | 26    | 04       | 3 #              |
|   5 |  33 | 05       | 3b       | 25       | 05       | 25    | 05       | 4 $              |
|   6 |  34 | 06       | 3c       | 2e       | 06       | 2e    | 06       | 5 % E            |
|   7 |  35 | 07       | 58       | 36       | 07       | 36    | 07       | 6 ^              |
|   8 |  36 | 08       | 64       | 3d       | 08       | 3d    | 08       | 7 &              |
|   9 |  37 | 09       | 44       | 3e       | 09       | 3e    | 09       | 8 *              |
|  10 |  38 | 0a       | 42       | 46       | 0a       | 46    | 0a       | 9 (              |
|  11 |  39 | 0b       | 40       | 45       | 0b       | 45    | 0b       | 0 )              |
|  12 |  45 | 0c       | 3e       | 4e       | 0c       | 4e    | 0c       | - _              |
|  13 |  46 | 0d       | 0f       | 55       | 0d       | 55    | 0d       | = +              |
|  15 |  42 | 0e       | 29       | 66       | 0e       | 66    | 0e       | Backspace        |
|  16 |  43 | 0f       | 59       | 0d       | 0f       | 0d    | 0f       | Tab              |
|  17 |  20 | 10       | 65       | 15       | 10       | 15    | 10       | Q                |
|  18 |  26 | 11       | 38       | 1d       | 11       | 1d    | 11       | W                |
|  19 |   8 | 12       | 2a       | 24       | 12       | 24    | 12       | E                |
|  20 |  21 | 13       | 70       | 2d       | 13       | 2d    | 13       | R                |
|  21 |  23 | 14       | 1d       | 2c       | 14       | 2c    | 14       | T                |
|  22 |  28 | 15       | 10       | 35       | 15       | 35    | 15       | Y                |
|  23 |  24 | 16       | 02       | 3c       | 16       | 3c    | 16       | U                |
|  24 |  12 | 17       | 5a       | 43       | 17       | 43    | 17       | I                |
|  25 |  18 | 18       | 66       | 44       | 18       | 44    | 18       | O                |
|  26 |  19 | 19       | 71       | 4d       | 19       | 4d    | 19       | P                |
|  27 |  47 | 1a       | 2c       | 54       | 1a       | 54    | 1a       | [ {              |
|  28 |  48 | 1b       | 1f       | 5b       | 1b       | 5b    | 1b       | ] }              |
|  29 |  49 | 2b       | 21       | 5d       | 2b       | 5c    | 75       | \                |
|  30 |  57 | 3a       | 32       | 58       | 3a       | 14    | 1d       | CapsLock         |
|  31 |   4 | 1e       | 03       | 1c       | 1e       | 1c    | 1e       | A                |
|  32 |  22 | 1f       | 5b       | 1b       | 1f       | 1b    | 1f       | S                |
|  33 |   7 | 20       | 67       | 23       | 20       | 23    | 20       | D                |
|  34 |   9 | 21       | 2e       | 2b       | 21       | 2b    | 21       | F                |
|  35 |  10 | 22       | 2d       | 34       | 22       | 34    | 22       | G                |
|  36 |  11 | 23       | 20       | 33       | 23       | 33    | 23       | H                |
|  37 |  13 | 24       | 12       | 3b       | 24       | 3b    | 24       | J                |
|  38 |  14 | 25       | 05       | 42       | 25       | 42    | 25       | K                |
|  39 |  15 | 26       | 04       | 4b       | 26       | 4b    | 26       | L                |
|  40 |  51 | 27       | 5c       | 4c       | 27       | 4c    | 27       | ; :              |
|  41 |  52 | 28       | 68       | 52       | 28       | 52    | 28       | ' "              |
|  42 |  50 | 00       | ff       | 00       | ff       | 00    | ff       | non-US-1         |
|  43 |  40 | 1c       | 1e       | 5a       | 1c       | 5a    | 1c       | Enter            |
|  44 | 225 | 2a       | 2f       | 12       | 2a       | 12    | 2a       | LShift           |
|  46 |  29 | 2c       | 14       | 1a       | 2c       | 1a    | 2c       | Z                |
|  47 |  27 | 2d       | 13       | 22       | 2d       | 22    | 2d       | X                |
|  48 |   6 | 2e       | 06       | 21       | 2e       | 21    | 2e       | C                |
|  49 |  25 | 2f       | 5d       | 2a       | 2f       | 2a    | 2f       | V                |
|  50 |   5 | 30       | 69       | 32       | 30       | 32    | 30       | B                |
|  51 |  17 | 31       | 31       | 31       | 31       | 31    | 31       | N                |
|  52 |  16 | 32       | 30       | 3a       | 32       | 3a    | 32       | M                |
|  53 |  54 | 33       | 23       | 41       | 33       | 41    | 33       | , <              |
|  54 |  55 | 34       | 22       | 49       | 34       | 49    | 34       | . >              |
|  55 |  56 | 35       | 15       | 4a       | 35       | 4a    | 35       | / ?              |
|  57 | 229 | 36       | 07       | 59       | 36       | 59    | 36       | RShift           |
|  58 | 224 | 1d       | 11       | 14       | 1d       | 11    | 38       | LCtrl            |
|  60 | 226 | 38       | 6a       | 11       | 38       | 19    | 71       | LAlt             |
|  61 |  44 | 39       | 72       | 29       | 39       | 29    | 39       | space            |
|  62 | 230 | e0-38    | e0-6a    | e0-11    | e0-38    | 39    | 72       | RAlt             |
|  64 | 228 | e0-1d    | e0-11    | e0-14    | e0-1d    | 58    | 3a       | RCtrl            |
|  75 |  73 | e0-52    | e0-28    | e0-70    | e0-52    | 67    | 7b       | Insert           |
|  76 |  76 | e0-53    | e0-74    | e0-71    | e0-53    | 64    | 79       | Delete           |
|  80 |  74 | e0-47    | e0-60    | e0-6c    | e0-47    | 6e    | 7f       | Home             |
|  81 |  77 | e0-4f    | e0-61    | e0-69    | e0-4f    | 65    | 7a       | End              |
|  85 |  75 | e0-49    | e0-34    | e0-7d    | e0-49    | 6f    | 6f       | PgUp             |
|  86 |  78 | e0-51    | e0-73    | e0-7a    | e0-51    | 6d    | 7e       | PgDn             |
|  79 |  80 | e0-4b    | e0-26    | e0-6b    | e0-4b    | 61    | 56       | Left             |
|  83 |  82 | e0-48    | e0-6c    | e0-75    | e0-48    | 63    | 78       | Up               |
|  84 |  81 | e0-50    | e0-6d    | e0-72    | e0-50    | 60    | 55       | Down             |
|  89 |  79 | e0-4d    | e0-19    | e0-74    | e0-4d    | 6a    | 7d       | Right            |
|  90 |  83 | 45       | 0b       | 77       | 45       | 76    | 01       | NumLock          |
|  91 |  95 | 47       | 60       | 6c       | 47       | 6c    | 47       | KP-7 / Home      |
|  92 |  92 | 4b       | 26       | 6b       | 4b       | 6b    | 4b       | KP-4 / Left      |
|  93 |  89 | 4f       | 61       | 69       | 4f       | 69    | 4f       | KP-1 / End       |
|  95 |  84 | e0-35    | e0-15    | e0-4a    | e0-35    | 77    | 45       | KP-/             |
|  96 |  96 | 48       | 6c       | 75       | 48       | 75    | 48       | KP-8 / Up        |
|  97 |  93 | 4c       | 27       | 73       | 4c       | 73    | 4c       | KP-5             |
|  98 |  90 | 50       | 6d       | 72       | 50       | 72    | 50       | KP-2 / Down      |
|  99 |  98 | 52       | 28       | 70       | 52       | 70    | 52       | KP-0 / Ins       |
| 100 |  85 | 37       | 5e       | 7c       | 37       | 7e    | 46       | KP-*             |
| 101 |  97 | 49       | 34       | 7d       | 49       | 7d    | 49       | KP-9 / PgUp      |
| 102 |  94 | 4d       | 19       | 74       | 4d       | 74    | 4d       | KP-6 / Right     |
| 103 |  91 | 51       | 73       | 7a       | 51       | 7a    | 51       | KP-3 / PgDn      |
| 104 |  99 | 53       | 74       | 71       | 53       | 71    | 53       | KP-. / Del       |
| 105 |  86 | 4a       | 35       | 7b       | 4a       | 84    | 54       | KP--             |
| 106 |  87 | 4e       | 0c       | 79       | 4e       | 7c    | 37       | KP-+             |
| 108 |  88 | e0-1c    | e0-1e    | e0-5a    | e0-1c    | 79    | 4e       | KP-Enter         |
| 110 |  41 | 01       | 43       | 76       | 01       | 08    | 64       | Esc              |
| 112 |  58 | 3b       | 24       | 05       | 3b       | 07    | 58       | F1               |
| 113 |  59 | 3c       | 16       | 06       | 3c       | 0f    | 59       | F2               |
| 114 |  60 | 3d       | 08       | 04       | 3d       | 17    | 5a       | F3               |
| 115 |  61 | 3e       | 09       | 0c       | 3e       | 1f    | 5b       | F4               |
| 116 |  62 | 3f       | 5f       | 03       | 3f       | 27    | 5c       | F5               |
| 117 |  63 | 40       | 6b       | 0b       | 40       | 2f    | 5d       | F6               |
| 118 |  64 | 41       | 33       | 83       | 41       | 37    | 5e       | F7               |
| 119 |  65 | 42       | 25       | 0a       | 42       | 3f    | 5f       | F8               |
| 120 |  66 | 43       | 17       | 01       | 43       | 47    | 60       | F9               |
| 121 |  67 | 44       | 18       | 09       | 44       | 4f    | 61       | F10              |
| 122 |  68 | 57       | 6e       | 78       | 57       | 56    | 62       | F11              |
| 123 |  69 | 58       | 3a       | 07       | 58       | 5e    | 63       | F12              |
| 124 |  70 | e0-37    | e0-5e    | e0-7c    | e0-37    | 57    | 6e       | PrtScr           |
|   0 | 154 | 54       | 1a       | 84       | 54       | 57    | 6e       | Alt+SysRq        |
| 125 |  71 | 46       | 0a       | 7e       | 46       | 5f    | 76       | ScrollLock       |
| 126 |  72 | e1-1d-45 | e1-11-0b | e1-14-77 | e1-1d-45 | 62    | 77       | Pause            |
|   0 |   0 | e0-46    | e0-0a    | e0-7e    | e0-46    | 62    | 77       | Ctrl+Break       |
|   0 | 227 | e0-5b    | e0-1b    | e0-1f    | e0-5b    | 8b    | 8b       | LWin (USB: LGUI) |
|   0 | 231 | e0-5c    | e0-75    | e0-27    | e0-5c    | 8c    | 8c       | RWin (USB: RGUI) |
|   0 |   0 | e0-5d    | e0-2b    | e0-2f    | e0-5d    | 8d    | 8d       | Menu             |
|   0 |   0 | e0-5f    | e0-76    | e0-3f    | e0-5f    | 7f    | 54       | Sleep            |
|   0 |   0 | e0-5e    | e0-63    | e0-37    | e0-5e    | 00    | ff       | Power            |
|   0 |   0 | e0-63    | e0-78    | e0-5e    | e0-63    | 00    | ff       | Wake             |


  

<a name="kbd10_logiteche2"></a>
## //KBD 10.7 Vendor extensions

Logitech uses an **e2** prefix for the codes sent by a pointing device integrated on the keyboard.

* * *


* * *

# /KBD 11. The AT keyboard controller


A user program can talk to the keyboard controller on the motherboard. The keyboard controller can again talk to the keyboard.

When a key is pressed the keyboard sends the corresponding keyboard scancode to the keyboard controller, and the keyboard controller translates that and interrupts the CPU, allowing the CPU to read the result.

More detailed: when a key is pressed, the keyboard sends a start bit (low), followed by 8 data bits for the keyboard scancode of the key (least significant first), followed by an odd parity bit, followed by a stop bit (high). The keyboard controller reads the data and checks the parity. If incorrect, retransmission is requested. If incorrect again a parity error is reported. If the time between request to send and start of transmission is greater than 15 ms, or if the eleven bits are not received within 2ms, a timeout is reported. In both cases (parity error or timeout), the data byte is set to 0xff.

The keyboard controller has three 8-bit registers involved in communication with the CPU: its input buffer, that can be written by the CPU by writing port 0x60 or port 0x64; its output buffer, that can be read by the CPU by reading from port 0x60; and the status register, that can be read by the CPU by reading from port 0x64.

If the CPU writes to port 0x64, the byte is interpreted as a command byte. If the CPU writes to port 0x60, the byte is interpreted as a data byte.

The keyboard controller has two 8-bit I/O ports involved in communication with the keyboard: the [input port](#inputport) P1 (receiving input from the keyboard) and the [output port](#outputport) P2 (for sending output to the keyboard).

## //KBD 11.1 The keyboard controller status register

The keyboard controller has an 8-bit status register. It can be inspected by the CPU by reading port 0x64.

(Typically, it has the value 0x14: keyboard not locked, self-test completed.)

  
    |MSB                                              LSB |
    |------|-----|------|------|-----|------|------|------|
    | PARE | TIM | AUXB | KEYL | C/D | SYSF | INPB | OUTB |
    |------|-----|------|------|-----|------|------|------|

1. _Bit 7: Parity error_

    0: OK. 1: Parity error with last byte.

2. _Bit 6: Timeout_

    0: OK. 1: Timeout. On PS/2 systems: General timeout. On AT systems: Timeout on transmission from keyboard to keyboard controller. Possibly parity error (in which case both bits 6 and 7 are set).

3. _Bit 5: Auxiliary output buffer full_

    On PS/2 systems: Bit 0 tells whether a read from port 0x60 will be valid. If it is valid, this bit 5 tells what data will be read from port 0x60. 0: Keyboard data. 1: Mouse data.
    
    On AT systems: 0: OK. 1: Timeout on transmission from keyboard controller to keyboard. This may indicate that no keyboard is present.

4. _Bit 4: Keyboard lock_

    0: Locked. 1: Not locked.

5. _Bit 3: Command/Data_

    0: Last write to input buffer was data (written via port 0x60). 1: Last write to input buffer was a command (written via port 0x64). (This bit is also referred to as Address Line A2.)

6. _Bit 2: System flag_

    Set to 0 after power on reset. Set to 1 after successful completion of the keyboard controller self-test (Basic Assurance Test, BAT). Can also be set by command (see [below](#kccb2)).

7. _Bit 1: IBF - Input buffer status_

    0: Input buffer empty, can be written. 1: Input buffer full, don't write yet.

8. _Bit 0: OBF - Output buffer status_

    0: Output buffer empty, don't read yet. 1: Output buffer full, can be read. (In the PS/2 situation bit 5 tells whether the available data is from keyboard or mouse.) This bit is cleared when port 0x60 is read.

## //KBD 11.2 The keyboard controller command byte

The keyboard controller is provided with some RAM, for example 32 bytes, that can be accessed by the CPU. The most important part of this RAM is byte 0, the Controller Command Byte (CCB). It can be read/written by writing 0x20/0x60 to port 0x64 and then reading/writing a data byte from/to port 0x60.

This byte has the following layout.


    |MSB                                              LSB |
    |-----|-------|----|-----|-------|------|------|------|
    |  0  | XLATE | ME | KE  | IGNLK | SYSF | MIE  | KIE  |
    |-----|-------|----|-----|-------|------|------|------|

1. _Bit 7: Unused_

    Always 0.

2. _Bit 6: Translate_

    0: No translation. 1: Translate keyboard scancodes, using the [translation table](#kbd10_translationtable) given above. MCA type 2 controllers cannot set this bit to 1. In this case scan code conversion is set using keyboard command 0xf0 to port 0x60.

3. _Bit 5: Mouse enable_

    On an EISA or PS/2 system: 0: Enable mouse. 1: Disable mouse by driving the clock line low. On an ISA system: "PC Mode": 0: use 11-bit codes, check parity and do scan conversion. 1: use 8086 codes, don't check parity and don't do scan conversion.

4. _Bit 4: Keyboard enable_

    0: Enable keyboard. 1: Disable keyboard by driving the clock line low.

5. _Bit 3: Ignore keyboard lock_

    For PS/2: Unused, always 0. For AT: 0: No action. 1: Force [bit 4](#kcKEYL) of the status register to 1, "not locked". This is used for keyboard testing after power on. Maybe only on older motherboards.

6. _Bit 2: System flag_

    This bit is shown in [bit 2](#kcSYSF) of the status register. A "cold reboot" is one with this bit set to zero. A "warm reboot" is one with this bit set to one (BAT already completed). This will influence the tests and initializations done by the POST.

7. _Bit 1: Mouse interrupt enable_

    On an ISA system: unused, always 0. On an EISA or PS/2 system: 0: Do not use mouse interrupts. 1: Send interrupt request IRQ12 when the mouse output buffer is full.

8. _Bit 0: Keyboard interrupt enable_

    0: Do not use keyboard interrupts. 1: Send interrupt request IRQ1 when the keyboard output buffer is full.
    
    When no interrupts are used, the CPU has to poll bits 0 (and 5) of the status register.

## //KBD 11.3 Keyboard controller commands

The CPU can command the keyboard controller by writing port 0x64. Useful, generally available, keyboard commands are:

| CMD  |                  Note                  |
|------|----------------------------------------|
| 0x20 | Read keyboard controller command byte  |
| 0x60 | Write keyboard controller command byte |
| 0xaa | Self test                              |
| 0xab | Interface test                         |
| 0xad | Disable keyboard                       |
| 0xae | Enable keyboard                        |
| 0xc0 | Read input port                        |
| 0xd0 | Read output port                       |
| 0xd1 | Write output port                      |
| 0xe0 | Read test inputs                       |
| 0xfe | System reset                           |

Useful, generally available, mouse commands are:

| CMD  |        Note        |
|------|--------------------|
| 0xa7 | Disable mouse port |
| 0xa8 | Enable mouse port  |
| 0xa9 | Test mouse port    |
| 0xd4 | Write to mouse     |

Obscure, probably obsolete, commands:

|    CMD    |               Note               |
|-----------|----------------------------------|
| 0x00-0x1f | Read keyboard controller RAM     |
| 0x20-0x3f | Read keyboard controller RAM     |
| 0x40-0x5f | Write keyboard controller RAM    |
| 0x60-0x7f | Write keyboard controller RAM    |
| 0x90-0x93 | Synaptics multiplexer prefix     |
| 0x90-0x9f | Write Port13-Port10              |
| 0xa0      | Read copyright                   |
| 0xa1      | Read firmware version            |
| 0xa2      | Switch speed                     |
| 0xa3      | Switch speed                     |
| 0xa4      | Check if password installed      |
| 0xa5      | Load password                    |
| 0xa6      | Check password                   |
| 0xac      | Diagnostic dump                  |
| 0xaf      | Read keyboard version            |
| 0xb0-0xb5 | Reset keyboard controller line   |
| 0xb8-0xbd | Set keyboard controller line     |
| 0xc1      | Continuous input port poll, low  |
| 0xc2      | Continuous input port poll, high |
| 0xc8      | Unblock lines P22 and P23        |
| 0xc9      | Block lines P22 and P23          |
| 0xca      | Read keyboard controller mode    |
| 0xcb      | Write keyboard controller mode   |
| 0xd2      | Write keyboard output buffer     |
| 0xd3      | Write mouse output buffer        |
| 0xdd      | Disable A20 address line         |
| 0xdf      | Enable A20 address line          |
| 0xf0-0xff | Pulse output bit                 |

      
1. _CMD 0x00-0x1f: Read keyboard controller RAM_

    > (AMIBIOS only) Aliases for 0x20-0x3f.

2. _CMD 0x20-0x3f: Read keyboard controller RAM_

    > The last six bits of the command specify the RAM address to read. The read data is placed into the output buffer, and can be read by reading port 0x60. On MCA systems, type 1 controllers can access all 32 locations; type 2 controllers can only access locations 0, 0x13-0x17, 0x1d, 0x1f.
    > 
    > Location 0 is the [Command byte](#commandbyte), see above.
    > 
    > Location 0x13 (on MCA) is nonzero when a password is enabled.
    > 
    > Location 0x14 (on MCA) is nonzero when the password was matched.
    > 
    > Locations 0x16-0x17 (on MCA) give two make codes to be discarded during password matching.

3. _CMD 0x40-0x5f: Write keyboard controller RAM_

    > (AMIBIOS only) Aliases for 0x40-0x5f.

4. _CMD 0x60-0x7f: Write keyboard controller RAM_

5. _CMD 0x90-0x93: Synaptics routing prefixes_

    > Prefix a PS/2 mouse command with one of these to talk to one of at most four multiplexed devices. See also the [multiplexing handshake](#multiplexing) below.
    > 
    > Unfortunately, VIA also uses this command:

6. _CMD 0x90-0x9f: Write Port13-Port10_

    > (VIA VT82C42) Write low nibble to Port13-Port10.

7. _CMD 0xa0: Read copyright_

    > On some keyboard controllers: an ASCIZ copyright string (possibly just NUL) is made available for reading via port 0x60. On other systems: no effect, the command is ignored.

8. _CMD 0xa1: Read controller firmware version_

    > On some keyboard controllers: a single ASCII byte is made available for reading via port 0x60. On other systems: no effect, the command is ignored.

9. _CMD 0xa2: Switch speed_

    > (On ISA/EISA systems with AMI BIOS) Reset keyboard controller lines P22 and P23 low. These lines can be used for speed switching via the keyboard controller. When done, the keyboard controller sends one garbage byte to the system.

10. _CMD 0xa3: Switch speed_

    > (On ISA/EISA systems with AMI BIOS) Set keyboard controller lines P22 and P23 high. These lines can be used for speed switching via the keyboard controller. When done, the keyboard controller sends one garbage byte to the system.
    > 
    > (Compaq BIOS: Enable system speed control.)

11. _CMD 0xa4: Check if password installed_

    > On MCA systems: Return 0xf1 (via port 0x60) when no password is installed, return 0xfa when a password has been installed. Some systems without password facility always return 0xf1.
    > 
    > (On ISA/EISA systems with AMI BIOS) Write Clock = Low.
    > 
    > (Compaq BIOS: toggle speed.)

12. _CMD 0xa5: Load password_

    > On MCA systems: Load a password by writing a NUL-terminated string to port 0x60. The string is in scancode format.
    > 
    > (On ISA/EISA systems with AMI BIOS) Write Clock = High.
    > 
    > (Compaq BIOS: special read of P2, with bits 4 and 5 replaced: Bit 5: 0: 9-bit keyboard, 1: 11-bit keyboard. Bit 4: 0: outp-buff-full interrupt disabled, 1: enabled.)

13. _CMD 0xa6: Check password_

    > On MCA systems: When a password is installed: Check password by matching keystrokes with the stored password. Enable keyboard upon successful match.
    > 
    > (On ISA/EISA systems with AMI BIOS) Read Clock. 0: Low. 1: High.

14. _CMD 0xa7: Disable mouse port_

    > On MCA systems: disable the mouse (auxiliary device) by setting its clock line low, and set [bit 5](#kccb5) of the [Command byte](#commandbyte). Now P23 = 1.
    > 
    > (On ISA/EISA systems with AMI BIOS) Write Cache Bad.

15. _CMD 0xa8: Enable mouse port_

    > On MCA systems: enable the mouse (auxiliary device), clear [bit 5](#kccb5) of the [Command byte](#commandbyte). Now P23 = 0.
    > 
    > (On ISA/EISA systems with AMI BIOS) Write Cache Good.

16. _CMD 0xa9: Test mouse port_

    > On MCA and other systems: test the serial�link between keyboard controller and mouse. The result can be read from port 0x60. 0: OK. 1: Mouse clock line stuck low. 2: Mouse clock lin e stuck high. 3: Mouse data line stuck low. 4: Mouse data line stuck high. 0xff  : No mouse.
    > 
    > (On ISA/EISA systems with AMI BIOS) Read Cache Bad or Good. 0: Bad. 1: Good.

17. _CMD 0xaa: Self test_

    > Perform self-test. Return 0x55 if OK, 0xfc if NOK.

18. _CMD 0xab: Interface test_

    > Test the serial link between keyboard controller and keyboard. The result can be read from port 0x60. 0: OK. 1: Keyboard clock line stuck low. 2: Keyboard clock line  stuck high. 3: Keyboard data line stuck low. 4: Keyboard data line stuck high. 0xff : General error.

19. _CMD 0xac: Diagnostic dump_

    > (On some systems) Read from port 0x60 sixteen bytes of keyboard controller RAM, and the output and input ports and the controller's program status word.

20. _CMD 0xad: Disable keyboard_

    > Disable the keyboard clock line and set [bit 4](#kccb5) of the [Command byte](#commandbyte). Any keyboard command enables the keyboard again.

21. _CMD 0xae: Enable keyboard_

    > Enable the keyboard clock line and clear [bit 4](#kccb5) of the [Command byte](#commandbyte).

22. _CMD 0xaf: Read keyboard version_

    > (Award BIOS, VIA)

23. _CMD 0xb0-0xb5,0xb8-0xbd: Reset/set keyboard controller line_

    > AMI BIOS: Commands 0xb0-0xb5 reset a keyboard controller line low. Commands 0xb8-0xbd set the corresponding keyboard controller line high. The lines are P10, P11, P12, P13, P22 and P23, respectively. (In the case of the lines P10, P11, P22, P23 this is on ISA/EISA systems only.) When done, the keyboard controller sends one garbage byte to the system.
    > 
    > VIA BIOS: Commands 0xb0-0xb7 write 0 to lines P10, P11, P12, P13, P22, P23, P14, P15. Commands 0xb8-0xbf write 1 to lines P10, P11, P12, P13, P22, P23, P14, P15.

24. _CMD 0xc0: Read input port_

    > Read the [input port](#inputport) (P1), and make the resulting byte available to be read from port 0x60.

25. _CMD 0xc1: Continuous input port poll, low_

    > (MCA systems with type 1 controller only) Continuously copy bits 3-0 of the input port to be read from bits 7-4 of port 0x64, until another keyboard controller command is received.

26. _CMD 0xc2: Continuous input port poll, high_

    > (MCA systems with type 1 controller only) Continuously copy bits 7-4 of the input port to be read from bits 7-4 of port 0x64, until another keyboard controller command is received.

27. _CMD 0xc8: Unblock keyboard controller lines P22 and P23_

    > (On ISA/EISA systems with AMI BIOS) After this command, the system can make lines P22 and P23 low/high using [command 0xd1](#kccd1).

28. _CMD 0xc9: Block keyboard controller lines P22 and P23_

    > (On ISA/EISA systems with AMI BIOS) After this command, the system cannot make lines P22 and P23 low/high using [command 0xd1](#kccd1).

29. _CMD 0xca: Read keyboard controller mode_

    > (AMI BIOS, VIA) Read keyboard controller mode to bit 0 of port 0x60. 0: ISA (AT) interface. 1: PS/2 (MCA)interface.

30. _CMD 0xcb: Write keyboard controller mode_

    > (AMI BIOS) Write keyboard controller mode to bit 0 of port 0x60. 0: ISA (AT) interface. 1: PS/2 (MCA)interface. (First read the mode using command 0xca, then modify only the last bit, then write the mode using this command.)

31. _CMD 0xd0: Read output port_

    > Read the [output port](#outputport) (P2) and place the result in the output buffer. Use only when output buffer is empty.

32. _CMD 0xd1: Write output port_

    > Write the [output port](#outputport) (P2). Note that writing a 0 in bit 0 will cause a hardware reset.
    > 
    > (Compaq: the system speed bits are not set. Use commands 0xa1-0xa6 for that.)

33. _CMD 0xd2: Write keyboard output buffer_

    > (MCA) Write the keyboard controllers output buffer with the byte next written to port 0x60, and act as if this was keyboard data. (In particular, raise IRQ1 when [bit 0](#kccb0) of the [Command byte](#commandbyte) says so.)

34. _CMD 0xd3: Write mouse output buffer_

    > (MCA) Write the keyboard controllers output buffer with the byte next written to port 0x60, and act as if this was mouse data. (In particular, raise IRQ12 when [bit 1](#kccb1) of the [Command byte](#commandbyte) says so.)
    > 
    > Not all systems support this.
    > 
    > **Synaptics multiplexing** On the other hand, Synaptics (see [ps2-mux.PDF](http://www.synaptics-uk.com/decaf/utilities/ps2-mux.PDF)) uses this command as a handshake between driver and controller: if the driver gives this command three times, with data bytes 0xf0, 0x56, 0xa4 respectively, and reads 0xf0, 0x56, but not 0xa4 back from the mouse output buffer, then the driver knows that the controller supports Synaptics AUX port multiplexing, and the controller knows that it does not have to do the usual data faking and goes into multiplexed mode. The third byte read is the version of the Synaptics standard.
    > 
    > There is a corresponding deactivation sequence, namely 0xf0, 0x56, 0xa5. (And again the last byte is changed to the version number of the standard supported.) This latter sequence works both in multiplexed mode and in legacy mode and can thus be used to determine whether this feature is present without activating it.
    > 
    > See also the multiplexer commands [0x90-0x93](#kcc90).
    > 
    > For some laptops it has been reported that bit 3 of every third mouse byte is forced to 1 (as it would be with the standard 3-byte mouse packets). This may turn 0xf0, 0x56, 0xa4 into 0xf0, 0x56, 0xac and cause misdetection of Synaptics multiplexing (for version 10.12).

35. _CMD 0xd4: Write to mouse_

    > (MCA) The byte next written to port 0x60 is transmitted to the mouse.

36. _CMD 0xdd: Disable A20 address line_

    > (HP Vectra)

37. _CMD 0xdf: Enable A20 address line_

    > (HP Vectra)

38. _CMD 0xe0: Read test inputs_

    > This command makes the status of the [Test inputs](#testinputs) T0 and T1 available to be read via port 0x60 in bits 0 and 1, respectively. Use only when the output port is empty.
    
39. _CMD 0xf0-0xff  : Pulse output bit_

    > Bits 3-0 of the [output port](#outputport) P2 of the keyboard controller may be pulsed low for approximately 6 �seconds. Bits 3-0 of this command specify the output port bits to be pulsed. 0: Bit should be pulsed. 1: Bit should not be modified. The only useful version of this command is Command 0xfe. (For MCA, replace 3-0 by 1-0 in the above.)

40. _CMD 0xfe: System reset_

    > Pulse bit 0 of the [output port](#outputport) P2 of the keyboard controller. This will reset the CPU.

## //KBD 11.4 The input port P1

This has the following layout.

|  Bits |       Function       |                          Note                         |
|-------|----------------------|-------------------------------------------------------|
| bit 7 | Keyboard lock        | 0: locked, 1: not locked                              |
| bit 6 | Display              | 0: CGA, 1: MDA                                        |
| bit 5 | Manufacturing jumper | 0: installed, 1: not installed                        |
|       |                      | with jumper the BIOS runs an infinite diagnostic loop |
| bit 4 | RAM on motherboard   | 0: 512 KB, 1: 256 KB                                  |
| bit 3 |                      | Unused in ISA, EISA, PS/2 systems                     |
|       |                      | Can be configured for clock switching                 |
| bit 2 |                      | Unused in ISA, EISA, PS/2 systems                     |
|       |                      | Can be configured for clock switching                 |
|       | Keyboard power       | PS/2 MCA: 0: keyboard power normal, 1: no power       |
| bit 1 | Mouse data in        | Unused in ISA                                         |
| bit 0 | Keyboard data in     | Unused in ISA                                         |


Clearly only bits 1-0 are input bits. Of the above, the original IBM AT used bits 7-4, while PS/2 MCA systems use only bits 2-0.

Where in the above lines P10, P11, etc are used, these refer to the pins corresponding to bit 0, bit 1, etc of port P1.

## //KBD 11.5 The output port P2

This has the following layout.

| Status Bit |    Function    |                   Note                  |
|------------|----------------|-----------------------------------------|
| bit 7      | Keyboard data  | data to keyboard                        |
| bit 6      | Keyboard clock |                                         |
| bit 5      | IRQ12          | 0: IRQ12 not active, 1: active          |
| bit 4      | IRQ1           | 0: IRQ1 not active, 1: active           |
| bit 3      | Mouse          | clock Unused in ISA                     |
| bit 2      | Mouse          | data  Unused in ISA. Data to mouse      |
| bit 1      | A20            | 0: A20 line is forced 0, 1: A20 enabled |
| bit 0      | Reset          | 0: reset CPU, 1: normal                 |

Where in the above lines P20, P21, etc are used, these refer to the pins corresponding to bit 0, bit 1, etc of port P2.

## //KBD 11.6 The test port T

1. _bit 0_

    > Keyboard clock (input).

2. _bit 1_

    > (AT) Keyboard data (input). (PS/2) Mouse clock (input).

* * *


* * *

# /KBD 12. Keyboard commands


One can not only talk to the keyboard controller (by writing to port 0x64), but also to the keyboard (by writing to port 0x60).

In order to avoid interference between scancode sequences or mouse packets and the reponses given to commands, the keyboard or mouse should always be disabled before giving a command that requires a response, and probably enabled afterwards. Some keyboards or mice do the disable automatically in this situation, but still require an explicit enable afterwards.

Each command (other than 0xfe) is ACKed by 0xfa. Each unknown command is NACKed by 0xfe. Some mice expect a corrected byte as reply to the 0xfe, and will double-NACK with 0xfc when also that is wrong.

Here a list with the common commands.

| CMD  |                       Note                       |
|------|--------------------------------------------------|
| 0xed | Write LEDs                                       |
| 0xee | Diagnostic echo                                  |
| 0xf0 | Set/Get scancode set                             |
| 0xf2 | Read keyboard ID                                 |
| 0xf3 | Set repeat rate and delay                        |
| 0xf4 | Keyboard enable                                  |
| 0xf5 | Set defaults and disable keyboard                |
| 0xf6 | Set defaults                                     |
| 0xf7 | Set all keys to repeat                           |
| 0xf8 | Set all keys to give make/break codes            |
| 0xf9 | Set all keys to give make codes only             |
| 0xfa | Set all keys to repeat and give make/break codes |
| 0xfb | Set a single key to repeat                       |
| 0xfc | Set a single key to give make/break codes        |
| 0xfd | Set a single key to give make codes only         |
| 0xfe | Resend                                           |
| 0xff | Keyboard reset                                   |
  

If the command is preceded by writing 0xd4 to port 0x64, then it goes to the mouse instead of the keyboard. Common commands:

| CMD  |           Note           |
|------|--------------------------|
| 0xe6 | Set mouse scaling to 1:1 |
| 0xe7 | Set mouse scaling to 2:1 |
| 0xe8 | Set mouse resolution     |
| 0xe9 | Get mouse information    |
| 0xf2 | Read mouse ID            |
| 0xf3 | Set mouse sample rate    |
| 0xf4 | Mouse enable             |
| 0xf5 | Mouse disable            |
| 0xf6 | Set defaults             |
| 0xff | Mouse reset              |

  

## //KBD 12.1 Keyboard command details

1. _CMD **e0x8**_: Nonstandard. 

    > Reported to give a 2-byte ID on an [OmniKey](#kbd05_omnikey) keyboard.

2. _CMD **0xea**_: Nonstandard. 

    > The sequences **ea** **70** and **ea** **71** are used by some IBM keyboards to disable and enable extra keys.

3. _CMD **0xeb**_: Nonstandard. 

    > Sequences involving **eb** are often used for [manipulating extra LEDs](#kbd01_LEDmanip).

4. _CMD **0xec**_: Nonstandard. 

    > On the [IBM Rapid Access keyboard](#kbd06_ibmrapidaccess) this command yields a 2-byte ID.

5. _CMD **0xed**: Write LEDs_

    > This command is followed by a byte indicating the desired LEDs setting. Bits 7-3: unused, 0. Bit 2: 1: CapsLock LED on. Bit 1: 1: NumLock LED on. Bit 0: 1: ScrollLock LED on. When OK, both bytes are ACKed. If the second byte is recognized as a command, that command is ACKed and done instead. Otherwise a NACK is returned (and a keyboard enable may be needed).

6. _CMD **0xee**: Diagnostic echo_

    > This command returns a single byte, again **ee**.

7. _CMD **0xf0**: Set/Get scancode set_

    > Many, but not all, keyboards can be switched to three different [scancode sets](#kbd10_scancodesets). This command, followed by a byte **01**, **02**, or **03** selects the corresponding scancode set. This command, followed by a zero byte, reads the current scancode set. The reply (translated) is **43**, **41** or **3f**, from untranslated 1, 2 or 3. Note that scancode set 1 should not be translated, while sets 2 and 3 should be translated.
    > 
    > Set 2 was introduced by the AT. Set 3 by the PS/2.

<a name="kbd12_kcf2"></a>
8. _CMD **0xf2**: Read keyboard ID_

    > This command reads a 2-byte [keyboard ID](#kbd10_keyboardid). XT keyboards do not answer at all (of course), AT keyboards reply with an ACK (**fa**) only, MF2 and other keyboards reply with a 2-byte ID. Wait at least 10ms after issuing this command.
    > 
    > For the mouse reply, see [below](#kbd13_mcf2).

9. _CMD **0xf3**: Set repeat rate and delay_

    > A following byte gives the desired delay before a pressed key starts repeating, and the repeat rate.
    > 
    > Bit 7: unused, 0.
    > 
    > Bits 6-5: 0, 1, 2, 3: 250, 500, 750, 1000 ms delay. Default after reset is 500 ms.
    > 
    > Bits 4-0: inter-character delay. The number of characters per second is given by
    > 
    |    |  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |
    |----|------|------|------|------|------|------|------|------|
    |  0 | 30.0 | 26.7 | 24.0 | 21.8 | 20.0 | 18.5 | 17.1 | 16.0 |
    |  8 | 15.0 | 13.3 | 12.0 | 10.9 | 10.0 |  9.2 |  8.6 |  8.0 |
    | 16 |  7.5 |  6.7 |  6.0 |  5.5 |  5.0 |  4.6 |  4.3 |  4.0 |
    | 24 |  3.7 |  3.3 |  3.0 |  2.7 |  2.5 |  2.3 |  2.1 |  2.0 |
    > 
    > (that is, the inter-character delay is (2 ^ B) \* (D + 8) / 240 sec, where B gives Bits 4-3 and D gives Bits 2-0).
    > 
    > Default after reset is 10.9 characters per second.
    > 
    > **Logitech extended commands** Logitech uses escape sequences involving **f3** for extended commands. A Logitech extended command looks like **f3** **7f** **f3** **00** **f3** _xx_ (for varying 7-bit values of _xx_). For example:
    > 
    > _xx_ = **01**: SendStatus: send the E1 XX codes for SubDeviceType, BatteryStatus, (Channel if relevant) KbdStatus (=wireless status).
    > 
    > _xx_ = **02**: OpenLocking
    > 
    > _xx_ = **03**: CloseLocking
    > 
    > _xx_ = **06** **f3** _aa_: Read byte at address _aa_ (in 0x01-0x1e).
    > 
    > _xx_ = **07** **F3** _aa_ **f3** _dd_: Write _dd_ at address _aa_ (in 0x01-0x1e).
    > 
    > _xx_ = **10** or **11**: Clear all device-related data in EEPROM and RAM. Now device is disconnected.

10. _CMD **0xf4**: Keyboard enable_

    > If a transmit error occurs, the keyboard is automatically disabled. This command re-enables the keyboard and clears its internal 16-byte buffer.

11. _CMD **0xf5**: Set defaults and disable keyboard_

    > Reset keyboard, clear output buffer, switch off LEDs, reset repeat rate and delay to defaults. Disable the keyboard scan.

12. _CMD **0xf6**: Set defaults_

    > Reset keyboard, clear output buffer, switch off LEDs, reset repeat rate and delay to defaults.

13. _CMD **0xf7**: Set all keys to repeat_

    > Keyboards that support scancode Set 3 keep for each key two bits: does it repeat? does it generate a break code? This command sets the "repeat" bit for all keys. It does not influence keyboard operation when the scancode set is not Set 3.

14. _CMD **0xf8**: Set all keys to give make/break codes_

    > This command sets the "generate break code" bit for all keys. It does not influence keyboard operation when the scancode set is not Set 3.

15. _CMD **0xf9**: Set all keys to give make codes only_

    > This command clears the "generate break code" bit for all keys. It does not influence keyboard operation when the scancode set is not Set 3.

16. _CMD **0xfa**: Set all keys to repeat and give make/break codes_

    > This command sets the "repeat" and "generate break code" bits for all keys. It does not influence keyboard operation when the scancode set is not Set 3.

17. _CMD **0xfb**: Set some keys to repeat_

    > This command sets the "repeat" bits for the indicated keys. It is followed by the untranslated Set 3 scancodes of the keys for which this bit must be set. The sequence is ended by a command code (**ed**, **ee**, **f0**, **f2**-**ff**). Afterwards, a "keyboard enable" **f4** is required.

18. _CMD **0xfc**: Set some keys to give make/break codes_

    > This command sets the "generate break code" bits for the indicated keys. It is followed by the untranslated Set 3 scancodes of the keys for which this bit must be set. The sequence is ended by a command code (**ed**, **ee**, **f0**, **f2**-**ff**). Afterwards, a "keyboard enable" **f4** is required.

19. _CMD **0xfd**: Set some keys to give make codes only_

    > This command clears the "generate break code" bits for the indicated keys. It is followed by the untranslated Set 3 scancodes of the keys for which this bit must be set. The sequence is ended by a recognized command code (such as **ed**, **ee**, **f0**, **f2**-**ff**). Afterwards, a "keyboard enable" **f4** is required.

20. _CMD **0xfe**: Resend_

    > Meant for use by the keyboard controller after a transmission error. Not for use by the CPU.

21. _CMD **0xff**: Keyboard reset_

    > Reset and self-test. The self-test (BAT) will return **aa** when OK, and **fc** otherwise. As part of the self-test, all LEDs are flashed.

* * *


* * *

# /KBD 13. The PS/2 Mouse


Mice come in various flavours - serial mice, PS/2 mice, busmice, USB mice. Below a little about mice using the PS/2 protocol, since these also use the keyboard controller.

A mouse has a number of buttons (1-5 is common) and must report button presses. It has some way of detecting motion, and must report the amount of movement in the X and Y direction, usually as differences with the previously reported position, in a (dx,dy) pair. Touchpads can also report absolute position.

Reports come in the form of mouse packets of between 1 and 8 bytes. Various protocols are in use.

## //KBD 13.1 Modes

A PS/2 mouse can be in _stream mode_ (the default). In this mode it produces a stream of packets indicating mouse movements and button presses. Or it can be in _remote mode_. In this mode the mouse only sends a packet when the host requests one, using the **[eb](#kbd13_mceb)** command. Finally, it can be in _echo_ ("wrap") _mode_, in which everything the host sends is echoed back, until either a reset (**ff**) or clear echo mode (**ec**) is received.

## //KBD 13.2 Scaling

Scaling can be set to 1:1 or 2:1. This affects stream mode only. In 2:1 scaling: If the unscaled absolute value of dx or dy is 6 or more, it is doubled. Otherwise, for the unscaled value 0,1,2,3,4,5,6, the scaled value 0,1,1,3,6,9,12 is sent.

## //KBD 13.3 PS/2 mouse protocol

### The default protocol

The standard PS/2 protocol uses 3-byte packets, as follows:

| Yovfl | Xovfl | dy8 | dx8 |  1  | Middle Btn | Right Btn | Left Btn |
|-------|-------|-----|-----|-----|------------|-----------|----------|
| dx7   | dx6   | dx5 | dx4 | dx3 | dx2        | dx1       | dx0      |
| dy7   | dy6   | dy5 | dy4 | dy3 | dy2        | dy1       | dy0      |

It gives the movement in the X and Y direction in 9-bit two's complement notation (range -256 to +255) and an overflow indicator. It also gives the status of the three mouse buttons. When this protocol is used, the **f2** Read mouse ID command is answered by **00**.

### Intellimouse

The Microsoft Intellimouse uses the above protocol until scrolling wheel mode is activated by sending the magic sequence **f3** **c8** **f3** **64** **f3** **50** (set sample rate 200, 100, 80). In this mode, the Read mouse ID command returns **03**, and 4-byte packets are used:


| Yovfl | Xovfl | dy8 | dx8 |  1  | Middle Btn | Right Btn | Left Btn |
|-------|-------|-----|-----|-----|------------|-----------|----------|
| dx7   | dx6   | dx5 | dx4 | dx3 | dx2        | dx1       | dx0      |
| dy7   | dy6   | dy5 | dy4 | dy3 | dy2        | dy1       | dy0      |
| dz3   | dz3   | dz3 | dz3 | dz3 | dz2        | dz1       | dz0      |


Here the last byte gives the movement of the scrolling wheel in 4-bit two's complement notation (range -8 to +7) and the leading four bits are just copies of the sign bit.

### Intellimouse Explorer mouse

The Explorer mouse protocol allows for scrolling wheel and five buttons. It is activated by first sending the magic sequence for Intellimouse, and then, when the Intellimouse ID has been seen, sending the magic sequence **f3** **c8** **f3** **c8** **f3** **50** (set sample rate 200, 200, 80). In this mode, the Read mouse ID command returns **04**, and 4-byte packets are used:

  

| Yovfl | Xovfl |   dy8   |   dx8   |  1  | Middle Btn | Right Btn | Left Btn |
|-------|-------|---------|---------|-----|------------|-----------|----------|
| dx7   | dx6   | dx5     | dx4     | dx3 | dx2        | dx1       | dx0      |
| dy7   | dy6   | dy5     | dy4     | dy3 | dy2        | dy1       | dy0      |
| 0     | 0     | 5th Btn | 4th Btn | dz3 | dz2        | dz1       | dz0      |

  

Lots of other protocols occur, and only incomplete data is known about most of them. Some examples.

### Typhoon mouse

The Typhoon optical mouse is reported to send 6-byte packets. Bytes 1-3 are as for the default PS/2 protocol. Byte 4 equals byte 1. Byte 5 gives the Z axis movement, one of **ff**, **00**, **01**. Byte 6 is 0. Of course the idea is that this packet looks like two ordinary packets and ordinary PS/2 mouse drivers will handle it. The 6-byte mode is activated by sending the magic sequence **f3** **c8** **f3** **64** **f3** **50** **f3** **3c** **f3** **28** **f3** **14** (set sample rate 200, 100, 80, 60, 40, 20). It is recognized by the ID **08**.

## //KBD 13.4 Mouse Commands

Every command or data byte sent to the mouse (except for the resend command **fe**) is ACKed with **fa**. If the command or data is invalid, it is NACKed with **fe**. If the next byte is again invalid, the reply is ERROR: **fc**.

1. _MC **0xd0**: Read extended ID_

    Read up to 256 bytes.

2. _MCs **0xd1**-**df**: Vendor unique commands_

3. _MC **0xd1**: Logitech PS/2++ command_

    This command was to be used, followed by an arbitrary data sequence. Now replaced by the [sliced commands](#sliced) using **e8**.

4. _MC **0xe1**: Read secondary ID_

    > Replies with two bytes. An IBM TrackPoint returns **01** as first byte, and a second byte depending on the model.

5. _MC **0xe2**: IBM TrackPoint command_

    > Followed by several parameter bytes. For details, see [ykt3dext.pdf](http://trackpoint.almaden.ibm.com/files/ykt3dext.pdf).

    <a name="kbd13_mce6"></a>
6. _MC **0xe6**: Set mouse scaling to 1:1_

    > Often ingredient in magic sequences.

    <a name="kbd13_mce7"></a>
7. _MC **0xe7**: Set mouse scaling to 2:1_

    > Often ingredient in magic sequences.

    <a name="kbd13_mce8"></a>
8. _MC **0xe8**: Set mouse resolution_

    > This command is followed by a byte indicating the resolution (0, 1, 2, 3: 1, 2, 4, 8 units per mm, respectively). It is used in magic sequences to transport two bits, so that four of these are needed to send a byte to the mouse. See [below](#sliced).

    <a name="kbd13_mce9"></a>
9. _MC **0xe9**: Status request_

    > This command returns three bytes:
    > 
    > First a status byte: Bit 7: unused, 0. Bit 6: 0: [stream mode](#mousemodes), 1: [remote mode](#mousemodes). Bit 5: 0: disabled, 1: enabled. Bit 4: 0: scaling set to 1:1, 1: scaling set to 2:1. Bit 3: unused, 0. Bit 2: 1: left button pressed. Bit 1: 1: middle button pressed. Bit 0: 1: right button pressed.
    > 
    > Then a resolution byte: 0, 1, 2, 3: 1, 2, 4, 8 units per mm, respectively.
    > 
    > Finally a sample rate (in Hz).
    > 
    > See below for special [Synaptics Touchpad](#synaptics) handling.

10. _MC **0xea**: Set [stream mode](#mousemodes)_

    <a name="kbd13_mceb"></a>
11. _MC **0xeb**: Read data_

    > Read a mouse packet. Needed in [remote mode](#mousemodes) to ask the mouse for data. Also functions in [stream mode](#mousemodes).

12. _MC **0xec**: Clear [echo mode](#mousemodes)_

13. _MC **0xee**: Set [echo mode](#mousemodes)_

14. _MC **0xf0**: Set [remote mode](#mousemodes)_

    <a name="kbd13_mcf2"></a>
15. _MC **0xf2**: Read mouse ID_

    > (Only supported on some systems.) This command reads a 1-byte mouse ID. The reply is a single byte **00**. Wait at least 10ms after issuing this command.
    > 
    > For the keyboard reply, see [above](#kbd12_kcf2).
    > 
    > BallPoint (trackball) devices return a single byte **02**, Intellimouse returns **03**, Explorer Mouse returns **04**, 4d Mouse returns **06**, 4dplus Mouse returns **08**,as does the Typhoon mouse.

    <a name="kbd13_mcf3"></a>
16. _MC **0xf3**: Set mouse sample rate_

    > (Only supported on some systems.) Set mouse sample rate in Hz. If the given sampling rate is acceptable the ACK is **fa**. Otherwise the NACK is **fe**, and the host can correct. If it is incorrect again **fc** is sent. Correct values are, e.g., 10, 20, 40, 60, 80, 100, 200.

    <a name="kbd13_mcf4"></a>
17. _MC **0xf4**: Mouse enable_

    > The stream mode mouse data reporting is disabled after a reset and after the [disable](#kbd13_mcf5) command. This command enables it again.

    <a name="kbd13_mcf5"></a>
18. _MC **0xf5**: Mouse disable_

    > This stops mouse data reporting in [stream mode](#mousemodes). In stream mode, this command should be sent before sending any other commands.

    <a name="kbd13_mcf6"></a>
19. _MC **0xf6**: Set defaults_

    > If this command is recognized, a reset is done (set sampling rate 100 Hz, resolution 4 counts/mm, [stream mode](#mousemodes), disabled, scaling 1:1), but no diagnostics are performed. For some enhanced mice that require a magic sequence to get into enhanced mode, this command will reset them to default PS/2 mode.

20. _MC **0xfe**: Resend_

    > If this command is recognized, the last mouse packet (possibly several bytes) is resent. There is no ACK to this command, but if the last reply was ACK, it is sent.

    <a name="kbd13_mcff"></a>
21. _MC **0xff**: Mouse reset_

    > A self-test is performed. When OK, the response is **aa** **00**. On error, the response is **fc** **00**. The mouse is reset to default PS/2 mode.

## //KBD 13.5 Sliced parameters

For more advanced mouse modes it is necessary to send data to the mouse. There is now a commonly accepted way.

First Logitech tried to use the **d1** command followed by an arbitrary data sequence. While the IBM specs reserve **d1**-**df** for vendor unique commands, it turns out that not all BIOSes will transmit such codes. So Logitech drops the **d1** and uses the sequence **e8** _aa_ **e8** _bb_ **e8** _cc_ **e8** _dd_ to transmit the byte _aabbccdd_, where _aa_, _bb_, _cc_, _dd_ are 2-bit quantities. In this way an arbitrarily long sequence of bytes can be transmitted.

For synchronization purposes it is possible to separate such groups of four **e8** commands by an **e6** command. Indeed, such separation may be required: Synaptics Touchpads react to **e9** or **f3** commands preceded by precisely four **e8** commands.

### Magic knock

For example, the "magic knock" **d1** **39** **db** that sets a device that understands it in PS/2++ mode, becomes **e8** **00** **e8** **03** **e8** **02** **e8** **01** **e6** **e8** **03** **e8** **01** **e8** **02** **e8** **03**, abbreviated {E8}0321 {E6} {E8}3123. Note that 0321 and 3123 do not have repeated symbols. If they had, too intelligent intermediate hardware transmitting these sequences might see a superfluous command and suppress it.

### Magic unknock

PS/2++ mode is cleared again by the "magic unknock" {E8} 0323 or D1 3B from an external device, and {E8} 0321 or D1 39 from an internal device. (These commands differ so that in setups where the same commands are sent to internal and external devices, they can be commanded separately.)

For a decription of the PS/2++ format, see [ps2ppspec.htm](http://www.dqcs.com/logitech/ps2ppspec.htm).

## //KBD 13.6 Synaptics Touchpad

A few sketchy details. For nice precise information, get the [Synaptics interfacing guide](http://www.synaptics.com/decaf/utilities/ACF126.pdf).

### Status request

When preceded by an 8-bit request number encoded via four **[e8](#kbd13_mce8)** commands, the **[e9](#kbd13_mce9)** status request returns modified output, somewhat dependent on the Touchpad model.

1. _Request **00**: Identify Touchpad_

    This request returns three bytes, of which the middle one is the constant **47**. This is the way to recognize a Touchpad. The low order four bits of the third word contain the major model version number, the first word contains the minor version number, and the high order four bits of the third word contain the (obsolete) model code.

2. _Request **01**: Read Touchpad Modes_

    This request returns three bytes, of which the first two are the constants **3b** and **47**. The last byte is the mode byte

      
    |-----|------|---|---|------------|---------|----------|-------|
    | ABS | Rate | - | - | Baud/Sleep | DisGest | PackSize | Wmode |
    |-----|------|---|---|------------|---------|----------|-------|

    Here ABS indicates _absolute mode_ (instead of the default relative mode).

    Rate is 0 for 40 packets/sec, 1 for 80 packets/sec. The PS/2 sampling rate value is ignored.

    Baud/Sleep indicates the baud rate when used with a serial protocol (0: 1200 baud, 1: 9600 baud). It must be set whenever ABS or Rate is set. When used with the PS/2 protocol this bit indicates _sleep mode_ - a low power mode in which finger activity is ignored and only button presses are reported.

    DisGest is the "disable gestures" bit. When set, we have classical mouse behaviour. When cleared, "tap" and "drag" processing is enabled.

    PackSize is used for the serial protocol only (and then chooses between 6-, 7- and 8-byte packets, also depending on the Wmode bit).

    Wmode is used in absolute mode only. When set the packets also contain the W value. (This value indicates the amount of contact: 0: two-finger contact, 1: three-finger contact, 2: pen contact, 3: reserved, 4-7: ordinary finger contact, 8-15: wide finger or palm contact.)

    This described Touchpad 4.x. Earlier models had up to four mode bytes. This request would return mode bytes 1 and 2 in the first and last result byte, and request **02** would return mode bytes 3 and 4.

3. _Request **02**: Read Capabilities_

    This request returns three bytes, of which the middle one is the constant **47**. The first and third byte are the high-order and low-order parts of the capability word. (Thus on Touchpad 4.x. On earlier models mode bytes 3 and 4 are returned.)

    This capability word has 16 bits. Bit 15 indicates that capabilities are supported. Bit 4 indicates that Sleep is supported (for the PS/2 protocol). Bit 3 indicates that four buttons (Left, Right, Up, Down) are supported. Bit 1 indicates that multi-finger detection is supported. Bit 0 indicates that palm detection is supported.

4. _Request **03**: Read Model ID_

5. _Request **06**: Read Serial Number Prefix_

6. _Request **07**: Read Serial Number Suffix_

7. _Request **08**: Read Resolution_

### Mode setting

When preceded by an 8-bit request number encoded via four **e8** commands, the **[f3](#kbd13_mcf3)** **14** (set sample rate 20) command sets the mode byte to the encoded number. (Thus on Touchpads 4.x. Older models have more mode bytes and several such commands.)

## //KBD 13.7 Vendor extensions

There is a complicated forest of "magic sequences" that enable vendor extensions. Recognizing all of these is a very obscure activity.

(Moreover, recognizing these may be counterproductive: if the mouse has special capabilities which are activated by a special sequence, and it is connected to the computer via a KVM switch that does not know about this special protocol, then switching away and back will leave the mouse in the non-special state. This leads to non-functioning mice.)

A 2002 Logitech file describes the following procedure for recognizing the mouse type:

Stage 1: Send **ff**: reset. The reply is ignored. (Most common is **aa** **00**.)

Stage 2: Send **f3** **0a** **f2**: set sample rate and ask for ID. If the reply is **02**, we have a trackball - it has its own protocol. (The usual reply is **00**.)

Stage 3: Send **e8** **00** **e6** **e6** **e6** **e9**: set resolution and scaling (three times), and request status. The reply consists of three bytes _s1_ _s2_ _s3_. An old-fashioned mouse would report 0 in the second status byte _s2_ (since that is the resolution and we just set it).

If _s2_ is nonzero then: _s2_ is the number of buttons, _s3_ is the firmware revision, _s1_ has the firmware ID (device type) bits 6-0 in bits 3-0,6-4, while bit 7 of s1 indicates support for the **e7** **e7** **e7** **e9** command.

If _s1_\=**d0** and _s2_\=**03** and _s3_\=**c8**, suspect Synaptics.

If _s1_ and _s2_ are zero but _s3_ equals **0a**, suspect Alps. (_s3_\=**0a** is as expected, but _s1_\=0 is not)

Stage 4: If bit 7 of _s1_ is set, or if we suspect Alps, send **e8** **00** **e7** **e7** **e7** **e9**: set resolution and scaling (three times), and request status. The reply consists of three bytes _t1_ _t2_ _t3_. Of course, we already know that this is not an old-fashioned mouse.

If _t2_\=**01** and FirmwareID < 0x10 and _t1_ >> 6 = 1, then conclude that we have a Cordless MouseMan (RA12).

If _t2_\=**01** and FirmwareID < 0x10 and _t1_ >> 6 = 3, then conclude that we have a Cordless MouseMan (RB24).

Other cases with _t2_\=**01** are for new cordless mice.

If we suspect Synaptics and _t2_\=0 and _t3_\=**0a**, then conclude that we have a Synaptics touchpad.

If we suspect Alps and _t1_\=**33**, then conclude that we have an Alps touchpad.

Stage 5: If we don't know the type yet, send **f3** **c8** **f3** **64** **f3** **50** **f2**: Set sampling rate to 200, 100, 80 Hz, and ask for ID. The reply is a single byte. If we get 3, conclude that we have an IntelliMouse. (And this sequence is the initialization sequence for the IntelliMouse.)

Stage 6: Send **ff**: reset. Now the device is no longer in any special state.

Stage 7: If we don't know the type yet, send **e8** **00** **e8** **00** **e8** **00** **e8** **00** **e9**: set resolution to 0 (four times), and ask for status. The reply consists of three bytes _u1_ _u2_ _u3_. If _u2_\=**47** and _u3_\=**13**, then conclude that we have a new Synaptics touchpad.

Stage 7a: At this point we can narrow down to model type. If the thing is Synaptics or Alps, then Logitech is no longer interested. If it has 3 buttons, FirmwareID 1 and firmware revision **50**, then conclude that it is a Logitech Mouseman.

Stage 8: If we think it is a touchpad, detect whether it has programmable RAM. Send **e6** **e8** **00** **e8** **00** **e8** **00** **e8** **00** **e9**. The reply consists of three bytes _v1_ _v2_ _v3_. If _v1_\=**06** and _v2_\=**00**, then conclude that we have a Touchpad TP3 with programmable RAM.

Stage 9: Test whether the device understands the Logitech PS/2++ protocol. Send the "magic knock" **f5** **e8** **00** **e8** **03** **e8** **02** **e8** **01** **e6** **e8** **03** **e8** **01** **e8** **02** **e8** **03** **f4**. Check whether the device replies with an extended report.

* * *


* * *

# /KBD 14. USB


The USB specification prescribes 16-bit keycodes for keyboard positions, identified with key captions for the usual US layout. Below the values are given in decimal. 0-3 are protocol values, namely NoEvent, ErrorRollOver, POSTFail, ErrorUndefined, respectively. The values 224-231 are for modifier keys.

```sh
|                     | 1          | 2         | 3         | 4        | 5         | 6           | 7           | 8          | 9           | 10                | 11               |
| -                   | err        | err       | err       | A        | B         | C           | D           | E          | F           | G                 | H                |
| 12                  | 13         | 14        | 15        | 16       | 17        | 18          | 19          | 20         | 21          | 22                | 23               |
| I                   | J          | K         | L         | M        | N         | O           | P           | Q          | R           | S                 | T                |
| 24                  | 25         | 26        | 27        | 28       | 29        | 30          | 31          | 32         | 33          | 34                | 35               |
| U                   | V          | W         | X         | Y        | Z         | 1           | 2           | 3          | 4           | 5                 | 6                |
| 36                  | 37         | 38        | 39        | 40       | 41        | 42          | 43          | 44         | 45          | 46                | 47               |
| 7                   | 8          | 9         | 0         | Enter    | Esc       | BSp         | Tab         | Space      | -  _        | =  +              | [  {             |
| 48                  | 49         | 50        | 51        | 52       | 53        | 54          | 55          | 56         | 57          | 58                | 59               |
| ]  }                | \ |        | ...       | ;  :      | '  "     | `  ~      | ,  <        | .  >        | / ?        | Caps Lock   | F1                | F2               |
| 60                  | 61         | 62        | 63        | 64       | 65        | 66          | 67          | 68         | 69          | 70                | 71               |
| F3                  | F4         | F5        | F6        | F7       | F8        | F9          | F10         | F11        | F12         | PrtScr            | Scroll Lock      |
| 72                  | 73         | 74        | 75        | 76       | 77        | 78          | 79          | 80         | 81          | 82                | 83               |
| Pause               | Insert     | Home      | PgUp      | Delete   | End       | PgDn        | Right       | Left       | Down        | Up                | Num Lock         |
| 84                  | 85         | 86        | 87        | 88       | 89        | 90          | 91          | 92         | 93          | 94                | 95               |
| KP /                | KP *       | KP -      | KP +      | KP Enter | KP 1  End | KP 2  Down  | KP 3  PgDn  | KP 4  Left | KP 5        | KP 6  Right       | KP 7  Home       |
| 96                  | 97         | 98        | 99        | 100      | 101       | 102         | 103         | 104        | 105         | 106               | 107              |
| KP 8  Up            | KP 9  PgUp | KP 0  Ins | KP .  Del | ...      | Applic    | Power       | KP =        | F13        | F14         | F15               | F16              |
| 108                 | 109        | 110       | 111       | 112      | 113       | 114         | 115         | 116        | 117         | 118               | 119              |
| F17                 | F18        | F19       | F20       | F21      | F22       | F23         | F24         | Execute    | Help        | Menu              | Select           |
| 120                 | 121        | 122       | 123       | 124      | 125       | 126         | 127         | 128        | 129         | 130               | 131              |
| Stop                | Again      | Undo      | Cut       | Copy     | Paste     | Find        | Mute        | Volume Up  | Volume Down | Locking Caps Lock | Locking Num Lock |
| 132                 | 133        | 134       | 135       | 136      | 137       | 138         | 139         | 140        | 141         | 142               | 143              |
| Locking Scroll Lock | KP ,       | KP =      | Internat  | Internat | Internat  | Internat    | Internat    | Internat   | Internat    | Internat          | Internat         |
| 144                 | 145        | 146       | 147       | 148      | 149       | 150         | 151         | 152        | 153         | 154               | 155              |
| LANG                | LANG       | LANG      | LANG      | LANG     | LANG      | LANG        | LANG        | LANG       | Alt Erase   | SysRq             | Cancel           |
| 156                 | 157        | 158       | 159       | 160      | 161       | 162         | 163         | 164        | 165         | 166               | 167              |
| Clear               | Prior      | Return    | Separ     | Out      | Oper      | Clear Again | CrSel Props | ExSel      |             |                   |                  |
| 224                 | 225        | 226       | 227       | 228      | 229       | 230         | 231         |            |             |                   |                  |
| LCtrl               | LShift     | LAlt      | LGUI      | RCtrl    | RShift    | RAlt        | RGUI        |            |             |                   |                  |
```

* * *


* * *

# /KBD 15. Reporting


Additions and corrections are welcome. Use `showkey -s` to get the scancodes. Mention keyboard manufacturer and type, and the keycaps.

Andries Brouwer - `aeb@cwi.nl`

* * *

