# UEFI - Unified Extensible Firmware Interface
UEFI 官网 https://uefi.org/
EDKII https://github.com/tianocore/edk2
ModernFW https://www.phoronix.com/scan.php?page=news_item&px=ModernFW-Exciting


UEFI 与传统 BIOS 引导核心流程区别：

- Boot Process under BIOS

	- System switched on - Power On Self Test, or POST process
	- After POST BIOS initializes the necessary system hardware for booting (disk, keyboard controllers etc.)
	- BIOS launches the first 440 bytes (MBR boot code region) of the first disk in the BIOS disk order
	- The MBR boot code then takes control from BIOS and launches its next stage code (if any) (mostly bootloader code)
	- The launched (2nd stage) code (actual bootloader) then reads its support and config files
	- Based on the data in its config files, the bootloader loads the kernel and initramfs into system memory (RAM) and launches the kernel

- Boot Process under UEFI

	- System switched on - Power On Self Test, or POST process.
	- UEFI firmware is loaded. Firmware initializes the hardware required for booting.
	- Firmware then reads its Boot Manager data to determine which UEFI application to be launched and from where (i.e. from which disk and partition).
	- Firmware then launches the UEFI application as defined in the boot entry in the firmware's boot manager.
	- The launched UEFI application may launch another application (in case of UEFI Shell or a boot manager like rEFInd) or the kernel and initramfs (in case of a bootloader like GRUB) depending on how the UEFI application was configured.

- BIOS启动流程：

	- 系统开机 - 上电自检（Power On Self Test 或 POST）。
	- POST过后初始化用于启动的硬件（磁盘、键盘控制器等）。
	- BIOS会运行BIOS磁盘启动顺序中第一个磁盘的首440bytes（MBR启动代码区域）内的代码。
	- 启动引导代码从BIOS获得控制权，然后引导启动下一阶段的代码（如果有的话）（一般是系统的启动引导代码）。
	- 再次被启动的代码（二阶段代码）（即启动引导）会查阅支持和配置文件。
	- 根据配置文件中的信息，启动引导程序会将内核和initramfs文件载入系统的RAM中，然后开始启动内核。

- UEFI启动流程：

	- 系统开机 - 上电自检（Power On Self Test 或 POST）。
	- UEFI 固件被加载，并由它初始化启动要用的硬件。
	- 固件读取其引导管理器以确定从何处（比如，从哪个硬盘及分区）加载哪个 UEFI 应用。
	- 固件按照引导管理器中的启动项目，加载UEFI 应用。
	- 已启动的 UEFI 应用还可以启动其他应用（对应于 UEFI shell 或 rEFInd 之类的引导管理器的情况）或者启动内核及initramfs（对应于GRUB之类引导器的情况），这取决于 UEFI 应用的配置。

BIOS 和 UEFI 的最主要的功能：初始化硬件和提供硬件的软件抽象。传统 Legacy BIOS 引导方式很简单，是通过固化在主板上的 BIOS 芯片的一段引导代码执行引导。上电自检后，跑完 POST，干完一大堆活以后，会去读取启动设备的 MBR - Master Boot Record，即 0 磁道 1 扇区上面的 512 字节的数据，这就是常说的主引导启动扇区。BIOS 程序会检测看最后两个字节是不是 55 AA，如果是就用一条 jmp 指令跳过去继续执行。而 UEFI 引导则是基于文件系统的，不依赖固化的 BIOS 程序，理论上没有 MBR 这样的东西，当然，实际上为了兼容性等等一大堆问题，可能磁盘上还是会有个 MBR。引导的时候，加载启动设备上面的 UEFI Loader，换句话说，UEFI Loader 就是一个永远也不会返回的引导程序。

逻辑区块地址 LBA - Logical Block Address 是描述计算机存储设备上数据所在区块的通用机制，一般用在像硬盘这样的辅助记忆设备。MBR 在磁盘的位置就是 LBA 0。

早期系统那种直接使用磁头柱面和扇区来对硬盘进行寻址，即 CHS - Cylinder/Head/Sector 寻址，由于系统用8b来存储磁头地址，用 10bit 来存储柱面地址，用 6bit 来存储扇区地址，而一个扇区共有 512B，这样使用 CHS 寻址一块硬盘最大容量为256 * 1024 * 63 * 512B = 8064MB(1MB = 1048576B)，若按 1MB=1000000B 来算就是 8.4GB。随着硬盘技术的进步，硬盘容量越来越大，CHS 模式无法管理超过 8064MB 的硬盘，因此工程师们发明了更加简便的 LBA 寻址方式。在 LBA 地址中，地址不再表示实际硬盘的实际物理地址，而是将 CHS 这种三维寻址方式转变为一维的线性寻址，它把硬盘所有的物理扇区的 C/H/S 编号通过一定的规则转变为一线性的编号，系统效率得到大大提高，避免了烦琐的磁头/柱面/扇区的寻址方式。在访问硬盘时，由硬盘控制器再将这种逻辑地址转换为实际硬盘的物理地址。

传统分区表记录在磁盘的 MBR 后一个扇区上，即位于 LBA 1 的数据块，可以设置四个分区，其中一个可以设置为扩展分区，扩展分可以再分成多个逻辑分区 Logic Partition，主分区不可以再分。

UEFI 使用 GPT 分区表，出于兼容性考虑仍然存储了一份传统的 MBR。用来防止不支持 GPT 的硬盘管理工具错误识别并破坏硬盘中的数据，这个 MBR 也叫做保护分区 MSR - Microsoft Reserved Partition。在支持 UEFI 启动的操作系统中，这里也用于存储第一阶段的启动代码，在这个 MBR 中只有一个标识为 0xEE 的分区，以此来表示这块硬盘使用 GPT 分区表。

全局唯一标识分区表 GPT 即 GUID Partition Table，分区表头记录了这块硬盘的 GUID - Global Unified Identifier，也记录了分区表头本身的位置和大小，位置总是在 LBA 1，以及备份分区表头和分区表的位置和大小（在硬盘的最后）。它还储存着它本身和分区表的CRC32校验。固件、引导程序和操作系统在启动时可以根据这个校验值来判断分区表是否出错，如果出错了，可以使用软件从硬盘最后的备份GPT中恢复整个分区表，如果备份GPT也校验错误，硬盘将不可使用。所以GPT硬盘的分区表不可以直接使用 16 进制编辑器修改。

使用 GPT 分区主要目的还包括大容量硬盘的支持，MBR 由于数据结构固定，只能支持不超过 3T 的大容量硬盘。

EFI 使用的引导分区是 ESP - EFI System Partition，使用的是 FAT 文件分配表格式，但是其分区标识是 EF 而非常规的 0E 或 0C，因此，该分区在 Windows 操作系统下一般是不可见的。UEFI 固件可从 ESP 分区加载 EFI 启动程式或者 EFI 应用程式。

EFI 规范规定 ESP 使用 FAT 这种老旧的格式主要是取其兼容性好，尤其开发者来说，系统中有个 FAT32 分区是很好的，因为经常使用多个系统，包括 Windows、 Linux、 FreeBSD 这些系统都能安全地访问 FAT 分区。因此，可以把各个系统的启动相关的文件包括启动管理程序等放到 ESP 里，而且，这也方便在一个系统中去修改另一个系统的启动文件，至少可以把 ESP 当作各个系统的公共交换空间。

典型的 UEFI 引导的磁盘分区：

- Recovery 恢复分区 450MB
- ESP 引导分区(FAT 格式) 100MB
- MSR 保护分区（可选） 16MB
- 其它空间作为操作系统或应用使用

对于小于 16 GB 的磁盘，MSR 分区为 32 MB。对于大于 16 GB 的磁盘，MSR 分区为 128 MB。MSR 分区其实就是块未分配空间，主要是用于 Dynamic Disks，但这已经是一个过时的技术，现在一般用硬件 RAID 或 Storage Pool。因为 GPT 磁盘不支持隐藏扇区，需要一个 MSR 分区来模拟隐藏扇区。它可以防止不支持 GPT 的操作系统如 XP 挂载磁盘时识别为未格式化的硬盘而误操作，有了 MSR 分区旧系统就可以识别为未知的硬盘分区避免误操作。

在 GPT 磁盘上没有四个主分区的限制，因此根本不需要建立什么扩展分区。 愿意创建几个主分区都可以，但建议通过 Windows 的磁盘管理进行操作，以免 DISK Genius 操作出现兼容的问题。


ARM CPU 体系也要初始化具体主板相关硬件如 GPIO 和内存等，这些一般在 BSP 中完成。与 X86 体系不同之处在于这些硬件完全定制化，初始化的时候就预先知道有哪些设备，Solder Down 了哪个品牌的哪种内存颗粒，到时候就照方抓药，初始化一大堆寄存器而已。X86 系统配置情况在开机时候是不知道的，需要探测 Probe、 Training(内存和PCIe)和枚举（PCIe等等即插即用设备），相对较复杂。

BIOS 和 UEFI 提供了整个主板、包括主板上外插的设备的软件抽象。通过探测、Training和枚举，BIOS 就有了系统所有硬件的信息。它通过几组详细定义好的接口，把这些信息抽象后传递给操作系统，这些信息包括 SMBIOS、ACPI表（ACPI与UEFI），内存映射表（E820或者UEFI运行时）等等。通过这层映射，才能做到做到操作系统完全不改而能够适配到所有机型和硬件。

在某种程度上来讲，BIOS 和 UEFI 是将操作系统 BSP 部分单独封装后下放到主板或者 BIOS 提供商来完成。这在过去带来了巨大的好处，WinXP、Win7 现在还可以运行在更新的电脑硬件上，新的硬件只要自己更改一下就行了，兼容性是 ARM 体系所不能比拟的。当然割裂的生态圈也带来了用户感受的千差万别，这也受到广泛诟病。各自为政也窒息了创新，带来了同质化。为此，Intel越俎代庖，提出了变形本等等概念；而微软更直接出了 Surface，似乎要与过去的小伙伴争食。其实这些都是不得已而为之，今后的发展还需要拭目以待。

ARM 社区最近为了进入 x86 的传统优势领域，也开始接受 UEFI，不过一般只在服务器领域。个别厂商为了支持 Windows 而在平板等设备支持 UEFI，某厂商在手机上也要引入 UEFI。不过这些只是支流，并且他们并不吧自己叫做 BIOS，而叫做 Bootloader。



# MBR to GPT

如果你的硬盘超过 2T 就必须采用 UEFL+GPT，从 Windows 8 系统开始就已经采用新的接口。

区别：大于2T采用UEFL+GPT形式 ， 小于2T采用MBR形式

使用系统工具转换：

- Win+R 跳出运行窗口
- 在窗口中输入如下命令 diskpatr
- 在新的窗口执行命令 list diskpart
- 这样会显示挂载在主机上的磁盘，接下来我们对磁盘进行转换
- 选择好磁盘之后，输入命令 convert gpt 就会显示所选磁盘转换为 gpt 格式。

建议 PE 系统下使用，转换格式要求格式化时建议备份重要数据在进行操作！


# UEFI 引导装入移动硬盘




# UEFI 引导修复教程

当 uefi 引导文件损坏，或 ghost 还原 64 位系统到 C 盘，因无 uefi 引导还是不能启动系统，就需要修复UEFI引导。

## UEFI 引导基本原理

- ESP 引导分区

	ESP 磁盘分区是 GPT 格式硬盘中用于存放 EFI 引导文件的，在 MBR 引导硬盘中也可以由任一 FAT 格式磁盘分区代替；

- EFI 文件结构
	
	efi\boot\bootx64.efi
	efi\microsoft\boot\bcd

- EFI 启动过程

	UEFI 启动时，自动查找硬盘下 esp 分区的 bootx64.efi，然后由其引导 efi 下的 bcd 文件，然后 bcd 引导指定系统文件，一般为 c:\windows\system32\winload.efi。


## bcbboot 自动修复

建议使用 64-bit Win8PE 系统自带的 bcdboot 来修复。

- 指定 esp 分区修复

	环境为64位8PE，bios/uefi 启动进入下都可以
	- 启动 Win8PE 并用 esp 分区挂载器或 diskgenuis 挂载 esp 分区
	- 执行 cmd 命令行：

		bcdboot c:\windows /s o: /f uefi /l zh-cn
	
	c:\Windows	- 为当前系统所在硬盘目录，根据实际情况修改
	/s o:		- 指定 esp 分区所在磁盘，根据实际情况修改
	/f uefi		- 指定启动方式为 uefi
	/l zh-cn	- 指定uefi启动界面语言为简体中文
	
	注：64位 Win7PE 不带 /s 参数，故不支持 bios 启动下修复

- 不指定esp分区修复

	64-bit Win7PE 或 Win8PE 只有通过 UEFI 启动才可以不用挂载 esp 分区，直接在 cmd 命令行下执行：

		bcdboot c:\windows /l zh-cn

	c:\Windows	- 硬盘系统目录，根据实际情况修改
	/l zh-cn	- 指定 uefi 启动界面语言为简体中文

	注：在 Win8PE 也可以 UEFI 启动，进入 WinPE 后，挂载 ESP 分区修复

## bootice 手动修复

从 EFI 引导启动过程来看，虽然它的文件很多，但主要用到的就是两文件，我们完全可以在 pe 下挂载 esp 分区，从硬盘系统中复制 bootx64.efi 文件，然后用 bootice 制作好 bcd 就
	完成 EFI 引导修复。

- 启动 WinPE 挂载 esp 分区，可以用 diskgenuis 工具；
- 查看 esp 分区是否可正常读写，如不正常可重新格式化为 FAT 分区格式。
- 在 esp 分区中建立如下空文件夹结构

	\efi\boot\ （bootx64.efi等复制）
	\efi\microsoft\boot\ （bcd等建立）

- 复制硬盘系统中的 c:\windows\boot\efi\bootmgfw.efi 到 esp 分区的 \efi\boot\
下，并重命名为 bootx64.efi；
- 打开 bootice 软件，在 esp 分区的 \efi\microsoft\boot\ 下新建立一 bcd 文件；
- 给 bcd 文件添加 windows vista\7\8 启动项，指定磁盘为系统盘所在的盘；
- 指定启动分区为硬盘系统分区，一般为 c:；
- 指定启动文件为 \Windows\system32\winload.efi；
- 最后保存当前系统设置并退出。

这样就修复精简的 UEFI 引导了，实机和虚拟机测试通过。


其它问题

- WinXPPE 不能识别 GPT 格式的硬盘分区，用 2003PE 中的 disk.sys 替换 xpPE 内核中的相应文件可以解决。
- 手工运行 ghost 并不会修复 esp 分区
- 用微软原版系统光盘安装或 PE 下安装，当然都会自动修复 esp 引导。
- 使用带 esp 引导修复功能一键还原工具