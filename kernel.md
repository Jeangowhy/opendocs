
# 🚩 Linux Kernel
- Linux Kernel 2.6.26 https://kernel.org/pub/linux/kernel/v2.6/linux-2.6.26.tar.gz
- Linux 源代码阅读——内核引导 http://home.ustc.edu.cn/~boj/courses/linux_kernel/1_boot.html
- Linux Kernel 官方站点 https://kernel.org/pub/linux/kernel/
- Linux Kernel [北京交通大学镜像站] https://mirror.bjtu.edu.cn/kernel/linux/kernel/
- Understanding the Linux Kernel, Third Edition https://book4you.org/book/2748476/dd2ab0
- Mastering Linux Kernel Development https://2lib.org/book/3424622/c4b3d7
- Linux kernel networking: implementation and theory https://2lib.org/book/2330811/101752
- Linux Driver Development for Embedded Processors https://2lib.org/book/5325784/29ef3d

Understanding the Linux Kernel, Third Edition 以 Linux 2.6 版本作为参考，这是一个相当复杂的系统，从 Linux 1.0 版本开始只有 561 个文件，到 Linux 2.6.26 版本已经包含 24,248 个文件，解压缩后有 257MB，到最新的稳定版本 Linux 5.12 解压后近 1GB。所以，研究内核要有相当明确的目的性，否则将会迷失在代码丛林中。

有人说，阅读源代码本身就是一种逆向工程，只有预知代码的功能和目的，才能更好地读懂代码，否则就是在考古猜谜。

内核根据涉及的模块可以分为：

- Monolithic Kernel 宏内核，简单理解，就是内核掌管所有功能，从文件系统，到内存管理，到进程调度，等等，都放在内核态中。这样做有一个很大的好处，那就是所有这些功能都在同一个地址空间下，大家做通信会非常方便，而且通信的成本肯定也是低的，效率高。但是，复杂度会提高，如 Linux Kernel 的代码量就极大。同时，这样也会导致容错性不是很好，只要一个地方出了问题，会导致整个 Kernel 都挂掉。

- Micro Kernel 微内核，是指内核只提供最必要的功能，比如 IPC，内存管理，CPU 调度等等。而其他，诸如文件系统，网络 IO 等等，都在用户特权级来实现。好处是内核变小了，适合嵌入式设备，但内核与进程频繁的在用户态和内核态切换的 IPC 通信需要消耗额外 CPU 时间。

- Hybrid Kernel 混合内核，就是中和一下前前两种方案，把一部分不常使用的内核模块，或者是原本需要的时间就很长，可以使用 IPC 通信解决的功能移出内核，而其他的就会放在内核里。


## ⚡ Zero-Copy 
- 原来 8 张图，就可以搞懂「零拷贝」了 https://www.cnblogs.com/xiaolincoding/p/13719610.html
- 高性能服务器-Unix环境高级编程 https://zhuanlan.zhihu.com/p/83398714
- Efficient data transfer through zero copy https://developer.ibm.com/articles/j-zerocopy/
- 8.5.8 Optimizing InnoDB Disk I/O https://dev.mysql.com/doc/refman/8.0/en/optimizing-innodb-diskio.html
- 一口气搞懂「文件系统」，就靠这 25 张图了 https://mp.weixin.qq.com/s/qJdoXTv_XS_4ts9YuzMNIw
- 《我想进大厂》之mysql夺命连环13问 https://xie.infoq.cn/article/7d6bee26d18de35c65ca56ea7

在分布系统中使用的消息服务，如 Rocketmq 和 kafka 通常需要高吞吐能力的实现，而 Zero-copy 技术就是提高吞吐能力的核心。

Kafka 最初由 Linkedin 公司开发，是一个分布式、支持分区的（partition）、多副本的（replica），基于 zookeeper 协调的分布式消息系统，它的最大的特性就是可以实时的处理大量数据以满足各种需求场景：比如基于 hadoop 的批处理系统、低延迟的实时系统、storm/Spark 流式处理引擎，web/nginx 日志、访问日志，消息服务等等。

零拷贝 Zero-copy 技术指在计算机执行操作时，CPU 不需要先将数据从一个内存区域复制到另一个内存区域，从而可以减少上下文切换以及 CPU 的拷贝时间。它可以在数据报从网络设备到用户程序空间传递的过程中，减少数据拷贝次数，减少系统调用，实现 CPU 的零参与，彻底消除 CPU 在这方面的负载。实现零拷贝用到的最主要技术是 DMA 数据传输技术和内存区域映射技术。

- 零拷贝机制可以减少数据在内核缓冲区和用户进程缓冲区之间反复的 I/O 拷贝操作。
- 零拷贝机制可以减少用户进程地址空间和内核地址空间之间因为上下文切换而带来的 CPU 开销。

所有用户程序和系统底层的交互都需要经过用户空间与内核空间的切换，这是高消耗的动作，要实现高吞吐能力就必需降低这种操作。

像 read()/write() 这些系统调用，首先需要进入内核空间，然后把文件内容读入到缓存中，然后再对缓存进行读写操作，最后由内核定时同步到文件中。

实现零拷贝的方法之一是 mmap() 系统调用，可以简单地理解为在内存中建立一个文件。将文件映射到内存空间，然后可以通过读写内存来读写文件。

调用 mmap() 系统调用对文件进行映射后，用户对映射后的内存进行读写实际上是对文件缓存的读写，所以减少了一次系统调用，从而加速了对文件读写的效率。

在存储设备中，硬盘读写一直是整个计算机系统的瓶颈，不要说和 CPU 内部的缓存相比，就是和内存相比也是不是一个数量级的差别。

CPU L1 Cache 大概是 100 ~ 500GB/s，L3 CACHE 大概是 10 ~ 50G/s，DDR4 内存大概是 3GB/s，NVMe SSD 大概是 2000MB/s，SATA SSD 大概是 450MB/s，机械硬盘大概是 100 ~ 150MB/s。

在早期，机械硬盘的数据复制还没有 DMA - Direct Memory Access 技术，数据复制需要 CPU 直接参与控制，这大大拉低了系统效率。

在没有 DMA 技术前，I/O 的过程是这样的：

- CPU 发出对应的指令给磁盘控制器，然后返回；
- 磁盘控制器收到指令后，于是就开始准备数据，会把数据放入到磁盘控制器的内部缓冲区中，然后产生一个中断；
- CPU 收到中断信号后，停下手头的工作，接着把磁盘控制器的缓冲区的数据一次一个字节地读进自己的寄存器，然后再把寄存器里的数据写入到内存。

而在数据传输的期间 CPU 是无法执行其他任务的。

整个过程会在用户空间和内核空间切换多次：

      User          Kernel           Disk
    (Ring 3)        (Ring 0) 
    ========================================
    system call --> read()    -->   I/O Op
                                    ...
    data       <--  fillbuf  <--    Done

在现代的高性能设备中，以上工作方式肯定是不能被接受的，DMA 技术就是解决这个问题的引入的直接内存访问技术。

在进行 I/O 设备和内存的数据传输的时候，数据搬运的工作全部交给 DMA 控制器，而 CPU 只需要将 I/O 请求指令发送给 DMA 控制器即可，不再参与任何与数据拷贝过程，节省了 CPU 时间。

但是，DMA 技术的引入还是没有摆脱低速的磁盘设备与高速的内存设备之间的速度差带来的性能影响。DMA 作为传统 I/O 技术，工作方式是，数据读取和写入是从用户空间到内核空间来回复制，而内核空间的数据是通过操作系统层面的 I/O 接口从磁盘读取或写入。

以磁盘到网络接口的数据拷贝为例，发生了 4 次数据拷贝，其中两次是 DMA 的拷贝，另外两次则是通过 CPU 拷贝的：

- 第一次拷贝，通过 DMA 拷贝磁盘数据到操作系统`内核缓冲区`；
- 第二次拷贝，通过 CPU 拷贝内核缓冲区数据到`用户缓冲区`，之后用户才可以使用数据；
- 第三次拷贝，通过 CPU 拷贝用户缓冲区的数据到内核的 `socket buffer`；
- 第四次拷贝，通过 DMA 拷贝内核的 socket 缓冲区的数据到`网卡缓冲区`；

整个过程只搬运一份数据，但是却消耗了 4 次能量，这无疑会大大消耗 CPU 资源，大大降低了系统性能。

这种简单又传统的文件传输方式，存在冗余的上文切换和数据拷贝，在高并发系统里是非常糟糕的。

零拷贝技术实现的方式通常有 2 种：

- mmap + write 替代 read + write；
- sendfile 替代 read + write；

前面解释了 read() 系统调用会把内核缓冲区的数据拷贝到用户的缓冲区里，而使用 mmap() 替换 read() 系统调用函数则可以跳过用户缓冲区的操作，直接把内核缓冲区里的数据映射到用户空间。但这还不是最理想的零拷贝，因为仍然需要通过 CPU 拷贝内核缓冲区的数据到 socket 缓冲区，而且仍然需要 4 次上下文切换，因为系统调用还是 3 次，只跳过用户空间的拷贝动作。

使用 man mmap 和 man sendfile 查询文档：

```c
#include <sys/mman.h>

void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);
int munmap(void *addr, size_t length);

#include <sys/sendfile.h>
ssize_t sendfile(int out_fd, int in_fd, off_t *offset, size_t count);

#define _GNU_SOURCE         /* See feature_test_macros(7) */
#include <fcntl.h>
ssize_t splice(int fd_in, loff_t *off_in, int fd_out, loff_t *off_out, size_t len, unsigned int flags);
```

在 Linux 2.1 内核提供了一个专门发送文件的系统调用函数 sendfile()，它直接在两个文件进行内部的拷贝，不再涉及用户空间的拷贝。同时还替代 read() 和 write() 这两个系统调用，这样就可以减少一次系统调用，也就减少了 2 次上下文切换的开销。这样，整个拷贝过程只有 2 次上下文切换，和 3 次数据拷贝。

在 Linux 2.4 内核又对 sendfile 做了进一步优化，引入新的千兆网硬件接口支持 SG-DMA 即 Scatter/Gather DMA，它跳过了 socket 拷贝的步骤，直接从内核缓冲区拷贝数据到网卡缓冲区。整个过程发生了 2 次用户态和内核态的上下文切换和 2 次拷贝动作，更重要的是完全没有 CPU 参与拷贝，完全由 DMA 完成拷贝。

SG-DMA 有三种工作模式：

- Memory-to-Stream
- Stream-to-Memory
- Memory-to-Memory

这就是目前所谓的零拷贝 Zero-copy 技术，全程没有通过 CPU 拷贝数据，所有的数据都是通过 DMA 来进行传输，相比传统的拷贝，零拷贝技术传输的性能提高至少一倍以上。

由于 sendfile 只适用于将文件数据拷贝到 socket 套接字上，同时需要硬件的支持，这也限定了它的使用范围。Linux 2.6.17 引入了 splice 系统调用，不仅不需要硬件支持，还实现了两个文件描述符之间的数据零拷贝。它在内核空间缓冲区到 socket buffer 方向建立管道，从而避免 CPU 拷贝操作。

之外，它使用了 Linux 的管道缓冲机制，可以用于任意两个文件描述符中传输数据，只要保证其中一个文件描述符是管道设备。但是，splice 拷贝方式也同样存在用户程序不能对数据进行修改的问题。

另外，这里说的内核缓冲区实际上是指磁盘高速缓存 PageCache。读取磁盘数据的时候，需要找到数据所在的位置，但是对于机械磁盘来说，需要进行耗时的磁头寻道，即旋转磁头到数据所在的磁道读取指定的扇区。为了降低寻道的影响，使用 PageCache 预读功能，将连续的扇区数据一并读取。如果，进程在后续使用到了这些预读取的数据，那么就相当节省时间了。

但是，对于上百兆上千兆的大文件来说，内核将它们读入 PageCache 就会适得其反，PageCache 空间有限并且很快被这些大文件占满。

由于零拷贝使用了 PageCache 技术，所以在处理小文件传输时进一步提升了性能，几乎相当于直接使用内存在传输数据，而不是磁盘。

如果是处理大文件，则可以使用异步 I/O 来绕开 PageCache，这种方式叫 Direct I/O，而使用 PageCache 则叫 Buffer I/O。通常，对于磁盘，异步 I/O 只支持直接 I/O，用户发起异步 I/O，并等待用户缓冲区被填满时，CPU 进行通知时再处理。

和同步的阻塞 I/O 不同，用户请求数据时，进行阻塞状态，内核发起 I/O 读取磁盘数据到 PageCache，然后再填充用户缓冲区，最后返回给用户。

直接 I/O 常见应用场景：

- 应用程序已经实现了磁盘数据的缓存，就不需要再使用 PageCache。例如在 MySQL 数据库中，可以通过参数设置开启直接 I/O；
- 传输大文件，由于命中 PageCache 缓存极低，而且会导致热点小文件无法充分利用缓存，从而增大了性能开销，因此，这时应该使用直接 I/O。

另外，由于直接 I/O 绕过了 PageCache，就无法享受内核的这两点的优化：

- 内核的 I/O 调度算法会缓存尽可能多的 I/O 请求在 PageCache 中，最后「合并」成一个更大的 I/O 请求再发给磁盘，这样做是为了减少磁盘的寻址操作；
- 内核也会「预读」后续的 I/O 请求放在 PageCache 中，一样是为了减少对磁盘的操作；

在 nginx 中，可以按如下配置，根据文件的大小来使用不同的方式：

    location /video/ { 
        sendfile on; 
        aio on; 
        directio 1024m; 
    }

当文件大小大于 directio 值后，使用异步的直接 I/O，否则就使用零拷贝技术。


## ⚡ etext edata end 
- https://linux.die.net/man/3/edata
- https://man7.org/linux/man-pages/man3/end.3.html

这几个符号表示不同的程序内存分段的结束地址，相当于汇编代码中相应段的结束公位置：

- `etext` 即 End of .text，这是超过 .text 代码段的第一个字节的位置。
- `edata` 即 End of .data，这是超过初始化的数据段的第一个字节的位置。
- `end` 这是超过未初始化数据段的第一个位置，即 End of .BSS。

这些都是没有定义的符号，但是编译器知道这是什么东西，这些都是为 Linux 程序所使用的符号。

某些系统中可能定义为下划线前缀式 `_etext`, `_edata`, `_end`。

At the start of program execution, the program break will be somewhere near &end (perhaps at the start of the following page). However, the break will change as memory is allocated via `brk(2)` or `malloc(3)`. Use `sbrk(2)` with an argument of zero to find the current value of the program break.

```c
#include <stdio.h>
#include <stdlib.h>

extern char etext, edata, end; /* The symbols must have some type,
                                   or "gcc -Wall" complains */
int
main(int argc, char *argv[])
{
    printf("First address past:\n");
    printf("    program text (etext)      %10p\n", &etext);
    printf("    initialized data (edata)  %10p\n", &edata);
    printf("    uninitialized data (end)  %10p\n", &end);

   exit(EXIT_SUCCESS);
}
```

例如，在 MIT 6.828 课程中，就使用它们来做内核准备阶段的工作：

```js
void i386_init(void)
{
    extern char edata[], end[];

    // Before doing anything else, complete the ELF loading process.
    // Clear the uninitialized global data (BSS) section of our program.
    // This ensures that all static/global variables start out zero.
    memset(edata, 0, end - edata);

    // Initialize the console.
    // Can't call cprintf until after we do this!
    cons_init();

    cprintf("6828 decimal is %o octal!\n", 6828);

    // Test the stack backtrace function (lab 1 only)
    test_backtrace(5);

    // Drop into the kernel monitor.
    while (1)
        monitor(NULL);
}
```





# 🚩 MIT 6.828: Operating System Engineering
- MIT 6.828: Operating System Engineering https://pdos.csail.mit.edu/6.828/2018/schedule.html
- [MIT] 6.828 实现操作系统 https://www.zhihu.com/column/c_1273723917820215296
- [MIT] 6.828 操作系统工程导读 https://zhuanlan.zhihu.com/p/368954250
- 替你总结一份MIT计算机课程 https://zhuanlan.zhihu.com/p/112763953
- Open Source Society University https://github.com/ossu/computer-science

本文是计算机科学基础类内容，目的是为软件方向的同学提供一个学习 roadmap 性的指导材料。很多准备入门计算机技术的同学缺少引导性的资料，可能边学习环境配置也是个不小的挑战。那么希望通过本文，减少大家走弯路的可能。

麻省理工大学 Massachusetts Institute of Technology 拥有全球最顶尖的计算机教学系统，该校的计算机学院科学与人工智能研究中心，并行分布式操作系统小组的在线课程资源 6.828: Operating System Engineering 是非常棒的，可以说就这份在线资源胜过国内一大批高校的计算机课程。

- [MIT] 6.828: Operating System Engineering https://pdos.csail.mit.edu/6.828/2018/schedule.html
- PC Assembly Language Book https://pdos.csail.mit.edu/6.828/2018/readings/pcasm-book.pdf
- Intel® 64 and IA-32 Architectures Software Developer Manuals https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html
- 80386 Programmer's Reference Manual https://pdos.csail.mit.edu/6.828/2018/readings/i386/toc.htm
- Lab 1: Booting a PC https://pdos.csail.mit.edu/6.828/2018/labs/lab1/
- Lab 2: Memory Management https://pdos.csail.mit.edu/6.828/2018/labs/lab2/
- Lab 3: User Environments https://pdos.csail.mit.edu/6.828/2018/labs/lab3/
- Lab 4: Preemptive Multitasking https://pdos.csail.mit.edu/6.828/2018/labs/lab4/
- Lab 5: File system, Spawn and Shell https://pdos.csail.mit.edu/6.828/2018/labs/lab5/
- Lab 6: Network Driver (default final project) https://pdos.csail.mit.edu/6.828/2018/labs/lab6/
- Lab 7: Final JOS project https://pdos.csail.mit.edu/6.828/2018/labs/lab7/
- 实验代码仓库 https://pdos.csail.mit.edu/6.828/2018/jos.git/

当年在学习汇编时是 2004 年左右，当时不会用虚拟技术，只能用 DOS 或都反汇编研究 C/C++ 生成的汇编指令，后来也花了大量去研究 Intel x86 指令系统。

- 那年声明理解不了定义与初始化(二) https://blog.csdn.net/WinsenJiansbomber/article/details/50646981
- 反汇编基本原理与x86指令构造 http://blog.csdn.net/winsenjiansbomber/article/details/27253577
- 深入x86的内存寻址 http://blog.csdn.net/winsenjiansbomber/article/details/24243843
- 《深入x86的内存寻址》I/O 外设硬件开发举例一 http://blog.csdn.net/winsenjiansbomber/article/details/24395073
- Codeblocks GDB调试器设置与使用 http://blog.csdn.net/winsenjiansbomber/article/details/50636911
- Intel 80386 Reference Programmer's Manual http://download.csdn.net/detail/winsenjiansbomber/7281997

计算机从加电启动那一刻，就开始了无休止的执行各种指令，解析计算启动到操作系统加载这一过程，通常需要使用汇编语言来描述才更贴切 CPU 的工作原理。

这个课程需要你对计算机体系架构有一定认识，即计算机的结构：

- CPU 负责指令执行与控制；
- MCH - Memory Controller Hub 芯片连接高速部件，如内存、显卡；
- Memory 内存通过地址总线直接与 CPU 相连，并受控于它，通过数据总线与其传输数据；
- ICH - I/O Controller Hub 芯片连接各种外部低速输入输出设备，如鼠标、键盘、硬盘、 PCI 外部互连总线扩展设备。

整个系统中，CPU 是运行速度最快的，现代的 CPU 主频随便都 GHz 为单位，其次，是与 CPU 直接相连的内存和显卡，准确来讲，中间通过内存控制芯片。最后，才通过 ICH 芯片与各种低速设备连接，这些低速设备又使用同的接口规范，如硬盘一盘通过 ATA 或较新的 SATA，Serial Advanced Technology Attachment，键盘鼠标通过 USB - Universal Serial Bus，或者声卡连接通过 PIC - Peripheral Component Interconnect。

因为，通常的在计算机架构图中，CPU 在最上面，其次是 MCH 芯片，最下面是 ICH 芯片和各种低速 I/O 设备，所以两个主要芯片又俗称为北桥芯片、南桥芯片。对于 CPU 来说，所有接连的都属于 I/O 设备，指令需要从内存中输入，处理得到的数据可以写入内存、硬盘，或者输出到显卡，最终在输出到显示器，又或者是其它设备。

                           +------------------+
                           | ======CPU======= |
                           +--------+---------+
                                    |
                       +------------+--------------+
        +-----+        |                           |    +------+
        | AGP +--------+ MCH(Memory Controller Hub)+----+Memory|
        +--+--+        |                           |    +------+
           |           +------------+--------------+
    +------+-------+                |
    |              |   +------------+--------------+     +-----+
    |   Display    |   |                           |     |     |
    |              |   | ICH(I/O Controller Hub)   +-----+   -->
    +--------------+   |                           |     | PCI |
                       +---+--------+-------+----+-+     |   -->
                           |        |       |    |       |     |
              +----------+ |   +----+---+   |  +-+-----+ |   -->
          +---+   USB    +-+   |  ATA   |   |  |Network| |     |
          |   +-------+--+     +----+---+   |  +-------+ |   -->
          |           |             |       |            |     |
      +---+---+  +----+---+  +------+--+ +--+--------+   |   -->
      | Mouse |  |Keyboard|  |Hard Disk| | Flash BIOS|   |     |
      +-------+  +--------+  +---------+ +-----------+   +-----+

    ASCII Flow Draw by https://asciiflow.com/

而理解 PC 引导过程，和操作系统原理，是软件开发中两个特别基础又重要的知识。MIT 的网上课程有相应的实验代码，可以使用 Git 工具下载，并且通过 QEMU Emulator 及 GNU debugger (GDB) 这些工具实现内核代码的运行调试。

课程提供了用于实验的系统内核 JOS，可以通过以下命令克隆代码仓库：

```sh
git clone https://pdos.csail.mit.edu/6.828/2018/jos.git
```

使用 Linux 系统，可以很方便地安装免费的 GCC 编译器套件，对 JOS 进行编译，并且通过 QEMU 模块器加载进行调试，配合调试工具可以很明了地认识内核代码在 PC 引导过程所起的作用。

课程将实验分成三个部分：

- 熟悉 x86 架构的 CPU 指令及汇编语言，熟悉 QEMU x86 emulator 的使用，PC bootstrap 主机加电引导过程。
- 实验 6.828 课程用的内核提供的 boot loader 程序，在代码仓库的 boot 目录下可以找到。
- 最后，深入研究为本课程服务的 JOS 内核初始模板，可以在 kernel 目录中找到。


CPU 体系架构很多，如常见的 ARM、X86/Atom、MIPS、PowerPC，除此外还许多其它架构如 Atmel 的 AVR 架构，Sun 的 Ultra Sparc 架构等。

CPU 的指令集也很多，但是基本可以分为两类，它们差别主要体现在指令与数据处理上：

- CISC - Complex Instruction Set Computer 复杂指令集，具有大量的指令和数据寻址方式；
- RISC - Reduced Instruction Set Computer 精简指令集，仅处理寄存器中的数据；

但主要 PC 结构或 CPU 架构分为两种：

- 冯·诺依曼体系结构，对应 CISC 指令系统，如 x86、x86-64、Atom，常用于台式机或服务器：

    1. **数据与指令都存储在同一存储区中，取指令与取数据利用同一数据总线。**
    2. 被早期大多数计算机所采用。
    3. ARM7 是冯诺依曼体系结构简单，但速度较慢，取指不能同时取数据。

- 哈佛体系结构，对应 RISC 指令系统，如嵌入式中流行的 ARM、PowerPC、MIPS、Sparc、Alpha，常用于工控、移动设备：

    1. **程序存储器与数据存储器分开。**
    2. 提供了较大的存储器带宽，各自有自己的总线。
    3. 适合于数字信号处理。
    4. 大多数 DSP 都是哈佛结构。
    5. ARM9 是哈佛结构，取指和取数在同一周期进行，提高速度，改进哈佛体系结构分成三个存储区：指令区、数据区、共用区。

CPU 指令通常都需要进行数据处理，个别指令不涉及数据除外，数据来源主要有两个来源：

- 寄存器 Registers
- 存储器 Storage，一般指内存 Memory

所以指令可以根据数据处理的来源去处，CPU 指令基本可以分为 3 类：

- RR 型指令：从寄存器中取操作数，把操作结果放到另一寄存器中，不需要访问内存存储器，因此速度快；
- SS 型指令：执行此类指令，既要访问内存单元，又要访问寄存器。
- RS 型指令：执行此类指令，既要访问内存单元，又要访问寄存器。

如果要细分，还涉及指令附带的立即数，Immediate-to-register、Immediate-to-memory。


## ⚡ RISC-V 破局者！
https://riscv.org/technical/specifications/
https://www.kernel.org/doc/html/latest/loongarch/introduction.html
https://loongson.github.io/LoongArch-Documentation/README-EN.html

指令集架构 Instruction Set Architecture (ISA)是和硬件电路相关的概念，指令集架构是一个能为
电路硬件翻译应用程序的一层抽象层。它能够为操作系统制定很多规则和约束，也能让编程者不用操心具体的
电路结构，转而在这一抽象的、高级的、定义很多规则的层面编写程序，比如：

01. 这个计算机架构里有多少个寄存器（Register）？
02. 我能进行哪些运算操作？（有哪些指令？ADD，SUB，MUL等等）
03. 如果遇到异常或者中断该怎么办？
04. 数据可以有哪些类型？最多有几个字节？
05. 等等等等

指令集架构（ISA） vs. 微架构（Microarchitecture）
指令集架构（ISA）和微架构（Microarchitecture）很多时候会被人们混淆。其实微架构就是对 ISA 的一种实现。

比如，AMD 和 Intel 的两款不同的芯片，尽管他们的指令集架构一样，能够运行相同的操作系统和程序，
但他们的具体实现方式是不一样的，也就是他们拥有着不一样的微架构。

微架构更感兴趣的，是设计芯片时，各个指标的权衡（Trade-off），这些指标包含了：

1. 功率（Power）
2. 面积（Area）
3. 成本（Cost）
4. 性能（Performance）

在性能方面，微架构更加关注这些内容：

1. 流水线深度
2. 流水线宽度（超标量流水线）
3. 缓存器的大小
4. 总面积
5. 峰值功率
6. 乱序执行（Out-of-Order）还是 有序执行（In-Order）
7. 总线带宽
8. 等等等等……

综合而言，微架构是指令集架构的一种实现方式，不同的处理器有着不一样的微架构。

在当下的市场形势下，Windows + Intel X86 CPU 垄断桌面平台，Android + ARM CPU 垄断移动平台，
只有嵌入式是一个可使劲的方向。

龙芯架构作为国内较早且相对独立的自主 CPU 构架，早期龙芯指令都在 MIPS 上扩展，传统的 LoongISA
添加了很多扩展指令。

2021 年 4 月，龙芯中科率先在国产自主化跨出一步，宣布推出完全自主指令集架构：LoongArch，顶层架构
到指令功能和 ABI 标准完全自主。这表明龙芯中科未来的 CPU 不再使用 MIPS 指令集架构，新推出的 3A5000 开始都将使用 LoongArch 架构。

LoongArch is a new RISC ISA, which is a bit like MIPS or RISC-V. 
There are currently 3 variants: 

1. a reduced 32-bit version (LA32R), 
2. a standard 32-bit version (LA32S) and 
3. a 64-bit version (LA64)

There are 4 privilege levels (PLVs) defined in LoongArch: PLV0 ~ PLV3, from 
high to low. Kernel runs at PLV0 while applications run at PLV3. This document
introduces the registers, basic instruction set, virtual memory and some 
other topics of LoongArch.

LLVM 国际开源软件社区于 2023 年 3 月 18 日发布了 16.0.0 版本，以正式后端（official target）
的级别实现 LoongArch 指令集架构的完善支持。

至此，开源软件世界最重要的五大基础软件，Linux 内核、GCC、LLVM、Glibc、Binutils，都已发布了支持
LoongArch 架构的正式版本。此后的 LoongArch 架构操作系统发行版将可以直接基于上游社区版本进行构建。



就像 Linus 大神因为不满付费的代码管理公司对 Linux 社区程序员无情的盘剥，“任性”的创造 GIT 一样。
伯克利分校的那群人，面对架构垄断的现实，也开始了他们在处理器架构设计舞台上的表演。

    简约是复杂的最终形式。
    —— 列奥纳多·达·芬奇(Leonardo da Vinci)

RISC-V 处理器架构就是这样一个完美的、简单的艺术品，它解决了传统垄断处理器架构存在的诸多弊端，
是当之无愧的后起之秀。

RISC-V 即第五代精简指令处理器架构，取这个名字正是因为美国伯克利研究团队的 David Patterson 
教授在此之前已经研制了四代精简指令处理器芯片。

2010 年，伯克利研究团队要设计一款 CPU，然而，英特尔对 X86 的授权卡的很严，ARM 的指令集授权很贵，
MIPS、SPARC、Open Power 也都需要各自的公司授权。在选择很有限的情况下，伯克利的研究团队决定从零
开始设计一套全新的指令集。而被很多媒体大肆宣扬也让人振奋的是，伯克利的研究团队 4 名成员仅用 3 个月
就完成 RISC-V 的指令集开发。目前，伯克利研究团队已经完成了基于 RISC-V 指令集的顺序执行的 64 位
处理器核心，代号为 **Rocket**，并前后基于 45nm 与 28nm 工艺进行了 12 次流片。

Rocket 芯片主频 1GHz，与 ARM Cortex-A5 相比，实测性能较之高 10%，面积效率高 49%，单位频率
动态功耗仅为 Cortex-A5 的 43%。在嵌入式领域，Rocket 已经可以和 ARM 争市场了。

RISC-V 指令集是基于精简指令集计算原理建立的开放指令集架构 ISA，RISC-V是在指令集不断发展和成熟
的基础上建立的全新指令。RISC-V 指令集完全开源，设计简单，易于移植 Unix 系统，模块化设计，完整
工具链，同时有大量的开源实现和流片案例，已在社区得到大力支持。它虽然不是第一个开源的的指令集构架，
但它是第一个被设计成可以根据具体场景可以选择适合的指令集的指令集架构。基于 RISC-V 指令集架构可以
设计服务器、家用电器、工控设置和传感器中的 CPU。

在处理器领域，目前主流的架构为 x86 与 ARM 架构，但它们作为商用的架构，需要保持架构的向后兼容性，
所以自带历史包袱，其不得不保留许多过时的定义，久而久之就变得极为冗长。全新的 RISC-V 架构则没有
向后兼容这样的问题。目前的 RISC-V 架构文档分为两卷：

01. Volume I: User-Level ISA 用户级指令集文档 238 页左右
    https://github.com/riscv/riscv-isa-manual/releases/download/Ratified-IMAFDQC/riscv-spec-20191213.pdf
02. Volume II: Privileged Architecture 特权架构文档 155 页左右
    https://github.com/riscv/riscv-isa-manual/releases/download/Priv-v1.12/riscv-privileged-20211203.pdf

RISC-V 架构相比其他成熟的商业架构的最大一个不同还在于它是一个模块化的架构。因此，RISC-V 架构
不仅短小精悍，而且其不同的部分还能以模块化的方式组织在一起，从而试图通过一套统一的架构满足各种
不同的应用。这种模块化是 x86 与 ARM 架构所不具备的。以 ARM 的架构为例，ARM 的架构分为 A、R 和
M 三个系列，分别针对于以下三个领域，彼此之间并不兼容：

1. **Cortex-A** Application 系列面向性能密集型系统的应用处理器核。
2. **Cortex-R** Real-Time 系列面向实时应用的高性能核。
3. **Cortex-E** Embedded 系列面向各类嵌入式应用的微控制器核。

例如，STM32 系列芯片就是 Cortex-E 系列，名称要把它拆分成三个部分来看

    ST + M + 32

显然，ST 是 STMicroelectronics 的简称，是为了纪念它的缔造者---意法半导体。意法半导体是
微处理器设计的先驱公司，是全球第五大半导体厂商之一，正是他创造了这一款流行的芯片。

"32” 意味着这是一款 32 位的微处理器芯片。而“M”表示使用的是 ARM Cortex®-M 处理器架构。


短小精悍的架构以及模块化的哲学，使得 RISC-V 架构的指令数目非常的简洁。基本的 RISC-V 指令数目仅有
40 多条，加上其他的模块化扩展指令总共几十条指令。

目前，基于 RISC-V 的编译器开发人员需求也相对旺盛。



## ⚡ QEMU simulator
- JSLinux - Operating Systems in your browser! https://bellard.org/jslinux/
- QEMU - a generic machine emulator and virtualizer http://qemu.org/
- SPIM: A MIPS32 Simulator http://spimsimulator.sourceforge.net
- WSL - Windows Subsystem for Linux & Xfce Desktop https://www.jianshu.com/p/2dd28c78355a
- DJGPP - 32-bit DOS C/C++ compiler http://www.delorie.com/djgpp/
- WinWorld from the past, to the present, for the future https://winworldpc.com/home
- Qemu Ubuntu Tutorial https://www.how2shout.com/how-to/qemu-ubuntu-tutorial.html

另一个更强大的模拟器 QEMU 是 Fabrice Bellard 大神的作品，开源的虚拟机，被各大行业用来做底层开发研究用的神器，包括 Android SDK。它真实地模拟出你的硬件环境，不管是 MIPS 还 ARM 都不在话下。

Qemu 是一个开源的虚拟机，通过纯软件来实现虚拟化模拟器，几乎可以模拟任何硬件设备，并且可以运行在多个平台上。

通过虚拟技术，可以节省开发人员的硬件投资。例如，Qemu 可以模拟出一个 ARM 开发系统，包括 CPU、内存、I/O 设备等，然后在这个模拟层之上，可以跑一台 ARM 虚拟机，并且这个 ARM 虚拟机就像运行在真机环境一样，但实际上这些硬件都是 Qemu 模拟出来的。

由于 Qemu 不基于 CPU 虚拟技术，完全通过软件实现，虚拟机执行的指令都要经过软件转换，所以性能相对低。所以在生产环境中，大多数的做法都是配合 KVM 硬件辅助的虚拟化技术来完成虚拟化工作，这样可以节省比较繁琐的 CPU 和内存虚拟化工作，而 Qemu 则负责 I/O 虚拟化，两者合作各自发挥自身的优势。

QEMU 模拟器有两种主要工作模式：

- User Mode Emulation 用户只需要将各种不同平台的处理编译得到的 Linux 程序放在 QEMU 虚拟中运行即可，其他的事情全部由 QEMU 虚拟机来完成，不需要用户自定义内核和虚拟磁盘等文件；
- System Emulation 可根据用户的要求配置虚拟机，用户可以为 QEMU 虚拟机指定运行的内核或者虚拟硬盘等文件。

在安装 QEMU 后，可以看到相应的命令差别，命令名称带有 system 表示是一个 System Mode 命令，支持的功能更多，所以命令文件也大得多。 

在 Debian、Ubuntu 系统下直接安装：

    apt-get install qemu qemu-system qemu-user

如果需要，可以从源代码安装：

    git clone git@github.com:qemu/QEMU
    git clone https://gitlab.com/qemu-project/qemu.git

    sudo wget https://download.qemu.org/qemu-5.2.0.tar.xz
    tar xvJf qemu-5.2.0.tar.xz
    cd qemu-5.2.0
    ./configure
    make && make install

配置脚本用于生成自动化编译脚本 Makefile，其选项可以用 ./configure --help 查看：

    --enable-kvm 编译 KVM 模块，使 Qemu 可以利用 KVM 来访问硬件提供的虚拟化服务。
    --enable-vnc 启用 VNC。
    --enalbe-werror 编译时，将所有的警告当作错误处理。
    --target-list 选择目标机器的架构，默认编译所有架构。

安装好之后，会生成如下应用程序：

    ivshmem-client 和 ivshmem-server：这是一对 guest 和 host 共享内存的应用程序，遵循 C/S 的架构。
    qemu-ga：这是一个不利用网络实现 guest 和 host 之间交互的应用程序（使用 virtio-serial），运行在 guest 中。
    qemu-io：这是一个执行 Qemu I/O 操作的命令行工具。
    qemu-img：创建虚拟机镜像文件的工具，下面有例子说明。
    qemu-nbd：磁盘挂载工具。
    qemu-system-x86_64：Qemu 模拟器的核心应用程序，模拟一个 x86_64 架构虚拟。

QEMU 可以运行在多种平台下，在 Windows 系统可以直接下载可执行程序，安装完成后，会有多个模拟器不同的后缀表示该模拟器的实现的目标 CPU 架构，比如：

    qemu-system-mips.exe
    qemu-system-mips64.exe
    qemu-system-mips64el.exe
    qemu-system-mips64elw.exe
    qemu-system-mips64w.exe
    qemu-system-mipsel.exe
    qemu-system-mipselw.exe
    qemu-system-mipsw.exe

注意后缀，64 表示 64 bit 系统，el 表示 Intel Little-Endian，没有 el 后缀表示 Big-Endian。没有后缀的 `qemu-system-mips` 表示 A generic ISA PC-like machine。

在 Windows WSL 系统下，如果没安装图形界面，那么启动时，需要指定 `-nographic` 禁用图形界面输出，而使用串行 I/O 控制台输出，这种模式下可以通过 ctrl-a h 获取帮助信息。

选项参考：

- `-bios <file>` - Tells QEMU to load the specified file as the firmwrae.
- `-s` listen for an incoming connection from gdb on TCP port 1234
- `-S` Do not start CPU at startup (you must type ‘c’ in the monitor).

用法参考：

    # Quick Start
    qemu-system-x86_64 linux.img

    # Direct Linux Boot
    qemu-system-x86_64 -kernel bzImage -hda rootdisk.img -append "root=/dev/hda"
    qemu-system-x86_64 -kernel bzImage -hda rootdisk.img -append "root=/dev/hda console=ttyS0" -nographic

    # Boot Directly from CD ROM
    qemu-system-x86_64 -boot d -cdrom /dev/cdrom -m 512
    qemu-system-x86_64 -boot d -cdrom /dev/cdrom -m 512 -enable-kvm
    qemu-system-x86_64 -boot d -cdrom /dev/cdrom -m 512 -enable-hax

    # Convert the ISO or qcow2 to IMG raw format
    qemu-img convert /Desktop/ubutnu.iso /Desktop/new.img

    # Boot from a iso file, or remote Fedora 20 live ISO image
    qemu-system-x86_64 -boot d -cdrom Desktop/puppy.iso -m 512
    qemu-system-x86_64 --drive media=cdrom,file.driver=file,file=/nanoMIPS/alpine-standard-3.13.5-x86_64.iso,readonly=on
    qemu-system-x86_64 --drive media=cdrom,file=https://archives.fedoraproject.org/pub/archive/fedora/linux/releases/20/Live/x86_64/Fedora-Live-Desktop-x86_64-20-1.iso,readonly=on
    qemu-system-x86_64 --drive media=cdrom,file.driver=http,file.url=http://archives.fedoraproject.org/pub/fedora/linux/releases/20/Live/x86_64/Fedora-Live-Desktop-x86_64-20-1.iso,readonly=on


可以使用 qemu-img 工具创建具有文件系统的磁盘映像，使用 mkfs 命令格式化成 ext4 文件系统：

```sh
qemu-img create -f raw disk.img 512M 

mkfs -t ext4 ./disk.img 

mkdir tmpfs 
sudo mount -o loop ./disk.img tmpfs/  
sudo cp -r rootfs/* tmpfs/
sudo umount tmpfs 
```

直接加载 Linux 内核映像，下载现成的 PC hard disk image，官方文档中提供相应的模拟器镜像下载。

    generic_nano32r6el_page64k_dbg.config
    generic_nano32r6el_page64k_dbg.itb
    generic_nano32r6el_page64k_dbg.xz

执行以下命令加载映像：

```sh
qemu-system-mipsel linux.img
```

以上命令加载内核映像 linux.img，正常情况应该可以看到 Linux 引导过程。模拟器提供丰富的命令行参数，根据需要指定，通常是通过指定配置文件进行配置，具体参考文档。

其它命令使用参考：

```sh
qemu-system-mipsel -cpu I7200 -kernel <kernel_image_file> \
    -M malta -serial stdio -m <memory_size> -hda <disk_image_file> \
    -append "mem=256m@0x0 rw console=ttyS0 vga=cirrus vesa=0x111 root=/dev/sda"

qemu-img create myimage.img mysize

# automatically create a virtual FAT disk image from a directory tree.
qemu-system-x86_64 linux.img -hdb fat:/my_directory

# Floppies can be emulated with the :floppy: option:
# A read/write support is available for testing (beta stage) with the :rw: option:
qemu-system-x86_64 linux.img -fda fat:floppy:/my_directory
qemu-system-x86_64 linux.img -fda fat:floppy:rw:/my_directory
```

和 GDB 进行远程调试，使用 -s 和 -S 激活侦听来自 gdb 的 TCP 1234 端口的连接，指定 gdbstub connection，使用 -gdb dev 参数：

```sh
# QEMU will launch but will silently wait for gdb to connect.
qemu-system-x86_64 -s -S -kernel bzImage -hda rootdisk.img -append "root=/dev/hda"

# Then launch gdb on the ‘vmlinux’ executable:
> gdb vmlinux
(gdb) target remote localhost:1234
(gdb) c
```

QEMU 启动后会有 monitor 命令窗口，可以向 QEMU emulator 发送命令，如：

- 插入或弹出媒体，如 CD-ROM 或软盘，如 `change ide1-cd0 /path/to/some.iso`，弹出命令 `eject [-f] device`。
- 冰冻或解冻虚拟机，或者从保存状态到文件，以及从文件还原状态。
- 探测虚拟机状态而不需要外部调试器。

经历多年的发展，从 2005 年，Bellard 发布了 QEMU 开源虚拟机技术，到今天的 QEMU 6.0，它真正做到了 Run operating systems for any machine, on any supported architecture。这是个爆炸性的项目，现在众多底层开发人员已经离不开它，可用来研究系统底层，学习嵌入式开发，相当的强大。

    qemu-0.9.1.tar.xz   2017-02-07 09:19    1.8M
    ...
    qemu-6.0.0.tar.xz   2021-04-29 15:29    102M

要研究原代码，可以通过 Git 获取指定的版本分支：

```sh
$ git init
$ git remote add origin git@github.com:qemu/qemu
$ git remote show origin
$ git fetch origin stable-0.10
$ git checkout -b stable-0.10 origin/stable-0.10
```

## ⚡ Assembly Pre-basic
- 6.828 Lecture Notes: x86 and PC architecture https://pdos.csail.mit.edu/6.828/2018/lec/l-x86.html
- 6.828: PC hardware and x86 https://pdos.csail.mit.edu/6.828/2018/lec/l-x86.pdf
- Bootstrap/PC hardware appendices and the related xv6 source files https://pdos.csail.mit.edu/6.828/2018/xv6/book-rev11.pdf
- Brennan's Guide to Inline Assembly http://www.delorie.com/djgpp/doc/brennan/brennan_att_inline_djgpp.html
- 6.47 How to Use Inline Assembly Language in C Code https://gcc.gnu.org/onlinedocs/gcc/Using-Assembly-Language-with-C.html

从编译原理上去理解汇编语言，会比较容区分机器指令和伪指令，Instruction vs Directive，伪指令也可以称为伪代码 Presudocode。

为什么一定要使用伪代码？伪代码很好地平衡了自然语言的易理解性、非形式所带来的模糊性与代码的精确性之的矛盾。伪指令对编译器具有指导作用，去做一些不是指令做的工作，也更便于人类阅读理解。

在学习汇编语言之前，除了认识 CPU 结构的重要性，它主要是执行指令、寻址获取数据、输出结果，另外对内存模型的深刻认识也必需重视。因为，程序在执行前，需要从硬盘读取送往内存指定的区域，然后必需让 CPU 知道从什么地址开始执行代码。

内存模型，Memory Model 即可以简单理解为内存的数据结构，从 CPU 和内存硬件的发展过程中，内存模型是有差异的。早期，硬件技术不够成熟，内存容量小也慢，CPU 的寻址能力也弱。

以划时代的 Intel 8086 为例，它拥有四个 16bit 通用寄存器，四个 16bit 索引寄存器，后缀 x 表示对早期 8 位机的寄存器的扩展：

- AX - Accumulator，累加器，用于累加计算，并保存计算结果，使用频度最高
- BX - Base Register，基址寄存器，常存放存一个内存地址
- CX - Count Register，计数器，计数时自动记录次数
- DX - Data Register，数据寄存器，存放数据
- SI - Source Index，源变址寄存器，常保存存储单元地址
- DI - Destination Index，目的变址寄存器，常保存存储单元地址
- BP - Base Pointer，基址指针寄存器，表示堆栈区域中的基地址
- SP - Stack Pointer，堆栈指针寄存器，指示堆栈区域的栈顶地址

- IP - Instruction Pointer，专用的指令指针寄存器，指示要执行指令所在内存地址；
- FLAG 标志寄存器记录 CPU 执行指令后的状态，比如溢出表示寄存器容量不足以保存计算结果；
- CS - Code Segment 代码段寄存器；
- DS - Data Segment 数据段寄存器；
- SS - Stack Segment 堆栈段寄存器；
- ES - Extra Segment 附加段寄存器；

随着技术发展，寄存器从 8-bit 到现在的 64-bit，使用的名字也有规则的变化，列如 `AX` 变为 32-bit 的 `EAX`，64-bit 的 `RAX`，最低的 16-bit 分析为 `AH` 和 `AL` 表示。

又例如指令指针寄存器 `IP`、`EIP`、`RIP`，其基本功用是指向要执行的下一条地址。在 8080 微处理器上的寄存器名称是 PC - Program counter 程序计数器，从 8086 起，被称为 IP - instruction pointer 指令指针寄存器。主要区别在与 PC 指向正在执行的指令，而 IP 指向下一条指令。

通常，16 bit 的地址总线可以寻址 2^16 = 64KB 内存空间，但是 8086 CPU 可以通过组合内存区段寄存器、索引寄存器，提供额外的 4 bit 寻址能力，其中交叠 12bit，总共获得 20 bit 寻址能力即 1MB。

              +-------------------------------+
              |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5| Index Register(Offset Address)
              +-------------------------------+
      +-------------------------------+
      |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|       Segment Register(Base Address)
      +-------------------------------+
      =========================================
      +---------------------------------------+
      |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|  Physics/Effective Address
      +---------------------------------------+

这种方式只是早期硬件技术限制采用的一种硬件 hack，称为 A20 Gate，通过不是那么好用的方式实现了更大的寻址能力。

不管如何，内存总是不够用的，BIOS 需要内存，各种设备需要内存，CPU 需要通过内存与外设进行数据交流。而操作系统更需要内存，所以需要对有限的内存进行最合理的应用，这就是内存模型的基本概念。

通常，最低层的设备使用内存地址最小的部分，通常 BIOS 程序就是最低的内存区域，而程序运行则放在高地址的内存区。

以下是 MIPS 架构和 PC x86 架构的内存模型对比：

      +----------+ 0x7FFFFFFF               +------------------+  <- 0xFFFFFFFF (4GB)
      | frame... | stack segment            |      32-bit      |
      |          | |                        |  memory mapped   |
      |          | |                        |     devices      |
      |          | V                        /\/\/\/\/\/\/\/\/\/\
      |          |                          /\/\/\/\/\/\/\/\/\/\
      +----------+                          |      Unused      |
      | Dynamic  |                          +------------------+  <- depends on amount of RAM
      | Static   | Data Segment             | Extended Memory  |
      +----------+ 0x10000000               +------------------+  <- 0x00100000 (1MB)
      |          |                          |     BIOS ROM     |
      |          |                          +------------------+  <- 0x000F0000 (960KB)
      |          |                          |  16-bit devices, |
      +----------+   0x400000               |  expansion ROMs  |
      | Reserved |                          +------------------+  <- 0x000C0000 (768KB)
      +----------+ 0x00000000               |   VGA Display    |
                                            +------------------+  <- 0x000A0000 (640KB)
                                            |    Low Memory    |
                                            +------------------+  <- 0x00000000

MIPS 处理器系统中，将内存划分为 3 个部分：

- 第一部分从最低内存地址开始，以 0x400000 为起点，作为代码段，保存代码指令。
- 第二部分从代码段之上开始，细分为 Static data 区和，起始地址为 0x10000000。
- 第三部分从最高内存地址开始往下作为调用栈内存空间 stack segment。

注意，可以看到最高内存地地址 0x7FFFFFFF 并不是代表真实内存有这么多，它是虚拟内存空间，通过硬件映射后，才访问到真实的内存地址。

在汇编程序中，通过 `.text` 汇编指令就可以指示编译器，在编译进将这部分生成的指令存到代码段内存空间，准确地说是编译器保存了相关信息，在执行程序时，由程序加载器负责将其传送到代码段内存中。

静态数据 Static data 表示那些在编译阶段就可以确定在整个程序运行期间都有效的数据，也就是数据生命周期保持和程序运行周期一样长，比如，C/C++ 中的全局变量。

Stack 是个很重要的内存空间，它是在硬件层次上实现的数据结构，Last-in First-out，后进先出，先进后出，CPU 通常都提供压栈和出栈指令，`PUSH` & `POP`。在高级语言中或汇编语言中，是有函数调用的这一功能的，procedure call。从 A 函数调用 B 函数，执行完后还要回来 A 函数按原位置继续执行。

那么在调用 B 函数前，就需要将当前执行的指令所在的内存地址，即 PC 寄存器的内容记录下来，等调用函数后返回时再恢复。这就叫做现场保护，要保护的还包括使用到的其它寄存器。

而将数据保存在什么地方呢？这就需要使用 Stack 的内存空间了，将需要保护的数据暂存于栈内存。每次函数调用产生的现场保护动作，都会有相应的 Stack 数据产生，这个动作产生的数据称为调用帧 frame，就像电影一帧一帧地记录数据。并且，CPU 内部的提供了两个专用寄存器，EBP、ESP 分别保存调用栈的基址和当前栈顶位置，注意 Stack 生长方向往低地址内存方向。

               +------------+   |
               | arg 2      |   \
               +------------+    >- previous function's stack frame
               | arg 1      |   /
               +------------+   |
               | ret %eip   |   /
               +============+   
               | saved %ebp |   \
        %ebp-> +------------+   |
               |            |   |
               |   local    |   \
               | variables, |    >- current function's stack frame
               |    etc.    |   /
               |            |   |
               |            |   |
        %esp-> +------------+   /

例如，对于一个用于对 100 以内自然数求和的程序两个版本，汇编语言中使用：

- `.text` 指示符号表示这里是代码区，编译后得到的程序也会由此开始执行。
- `.align` 表示数据在内存中的对齐行为，编译器需要根据指定的对齐参数来调整那些需要进行内存地址对齐数据。
- `.global` 定义全局符号，即从其它文件可以引用的符号 `main`，对应于 C/C++ 中的主函数，注意区别 `main:` 是行标签。

汇编语言实现：

```js
        .text
        .align 2
        .globl main
main:
        subu $sp, $sp, 32
        sw $ra, 20($sp)
        sd $a0, 32($sp)
        sw $0, 24($sp)
        sw $0, 28($sp)
loop:
        lw $t6, 28($sp)
        mul $t7, $t6, $t6
        lw $t8, 24($sp)
        addu $t9, $t8, $t7
        sw $t9, 24($sp)
        addu $t0, $t6, 1
        sw $t0, 28($sp)
        ble $t0, 100, loop
        la $a0, str
        lw $a1, 24($sp)
        jal printf
        move $v0, $0
        lw $ra, 20($sp)
        addu $sp, $sp, 32
        jr $ra
        .data
        .align 0
str:
        .asciiz "The sum from 0 .. 100 is %d\n"
```

C/C++ 语言实现：

```js
#include<stdio.h>
int
main (int argc, char *argv[])
{
  int i; int sum = 0;
  for (i = 0; i <= 100; i = i + 1) sum = sum + i * i;
  printf ("The sum from 0 .. 100 is %d\n", sum);
}
```

安装 QtSpim 模拟器后，可以直接运行演示程序，打印 Hello World：

```js
# helloworld.s
#
# Print out "Hello World"
#
        .data
msg:    .asciiz "Hello World"
        .extern foobar 4

        .text
        .globl main
main:   li $v0, 4       # syscall 4 (print_str)
        la $a0, msg     # argument: string
        syscall         # print the string
        lw $t1, foobar
        
        jr $ra          # retrun to caller
```

代码一般我会尽量少贴，因为没有用，代码只有自己去阅读去理解才有意义。

以下为 AT&T 与 Intel 汇编语言的差异对比，内容参考 Brennan's Guide to Inline Assembly：

Register naming:

    AT&T:  %eax
    Intel: eax

Source/Destination Ordering:

    AT&T:  movl %eax, %ebx ; source, destination
    Intel: mov ebx, eax    ; destination, source

Constant value/immediate value format:

    You must prefix all constant/immediate values with "$".

    Let's load eax with the address of the "C" variable booga, which is static.
    AT&T:  movl $_booga, %eax
    Intel: mov eax, _booga

    Now let's load ebx with 0xd00d:
    AT&T:  movl $0xd00d, %ebx
    Intel: mov ebx, d00dh

Operator size specification:

    必需前缀 b(byte), w(word) or l(longword) 指定目的操作数据的大小。
    对应 Intel 的 byte ptr, word ptr, and dword ptr

    AT&T:  movw %ax, %bx
    Intel: mov bx, ax

Referencing memory:

    AT&T:  immed32(basepointer,indexpointer,indexscale)
    Intel: [basepointer + indexpointer*indexscale + immed32]

    You could think of the formula to calculate the address as:
    immed32 + basepointer + indexpointer * indexscale

Addressing a particular C variable:

    AT&T:  _booga
    Intel: [_booga]
    注意，`_` 为汇编获取 C 语言的 static (global) 变量，并且只能是全局的。

Addressing what a register points to:

    AT&T:  (%eax)
    Intel: [eax]

Addressing a variable offset by a value in a register:

    AT&T: _variable(%eax)
    Intel: [eax + _variable]

Addressing a value in an array of integers (scaling up by 4):

    AT&T:  _array(,%eax,4)
    Intel: [eax*4 + array]

You can also do offsets with the immediate value:

    C code: *(p+1) where p is a char *
    AT&T:  1(%eax) where eax has the value of p
    Intel: [eax + 1]

You can do some simple math on the immediate value:

    AT&T: _struct_pointer+8
    I assume you can do that with Intel format as well.

Addressing a particular char in an array of 8-character records:

    eax holds the number of the record desired. 
    ebx has the wanted char's offset within the record.

    AT&T:  _array(%ebx,%eax,8)
    Intel: [ebx + eax*8 + _array]


    +------------------------------+------------------------------------+
    |       Intel Code             |      AT&T Code                     |
    +------------------------------+------------------------------------+
    | mov     eax,1                |  movl    $1,%eax                   |   
    | mov     ebx,0ffh             |  movl    $0xff,%ebx                |   
    | int     80h                  |  int     $0x80                     |   
    | mov     ebx, eax             |  movl    %eax, %ebx                |
    | mov     eax,[ecx]            |  movl    (%ecx),%eax               |
    | mov     eax,[ebx+3]          |  movl    3(%ebx),%eax              | 
    | mov     eax,[ebx+20h]        |  movl    0x20(%ebx),%eax           |
    | add     eax,[ebx+ecx*2h]     |  addl    (%ebx,%ecx,0x2),%eax      |
    | lea     eax,[ebx+ecx]        |  leal    (%ebx,%ecx),%eax          |
    | sub     eax,[ebx+ecx*4h-20h] |  subl    -0x20(%ebx,%ecx,0x4),%eax |
    +------------------------------+------------------------------------+


在 C 语言中嵌入汇编，可以使用关键字 `asm` 或 `__asm__`，最简单的就是，空指令：

    asm ("nop");

或者中断机的制开、关：

    asm ("cli");
    asm ("sti");

多条指令内嵌：

    asm ("pushl %eax\n\t"
         "movl $0, %eax\n\t"
         "popl %eax");

注意，不要破坏寄存器，如以下这样：

    asm ("movl %eax, %ebx");
    asm ("xorl %ebx, %edx");
    asm ("movl $0, _booga");

你的程序可能带来致命的问题，GCC 并不知道你的代码破坏了寄存器，它有可能保存了有用的数据，准备后面使用。

应该使用扩展内嵌汇编语法：

    // asm ( "statements" : output_registers : input_registers : clobbered_registers);

    asm ("cld\n\t"
         "rep\n\t"
         "stosl"
         : /* no output registers */
         : "c" (count), "a" (fill_value), "D" (dest)
         : "%ecx", "%edi" );

上面将 fill_value 保存 count 次，目的地是指针 dest 指向的位置。

- stos 使用后缀表示目的操作数长度为 longwords。
- "c" 是 ecx 寄存器的简写，这也用来计算次数的寄存器，将 count 的值加载进来。
- "a" 是 eax 寄存器的简写，将 fill_value 值加载进来。
- "D" 是 edi 表示 stos 指令的目的操作数，是个指针。

让 GCC 进行寄存器分配的好处是，比如说，fill_value 已经在 eax 中，而 GCC 可以检测到在一个循环中，那么么它可以保留 eax，这样就可以在每次循环中节省一条 movl 指令。

最后，通过 clobbered_registers 列表被破坏的寄存器，这样 GCC 就可以自行重新安装相应的处理流程，而不是使用可能被损坏的数据。

简写形式参考如下，注意不可使用 ah, al 或 ax, bx 这样的寄存器：

    a        eax
    b        ebx
    c        ecx
    d        edx
    S        esi
    D        edi
    I        constant value (0 to 31)
    q,r      dynamically allocated register (see below)
    g        eax, ebx, ecx, edx or variable in memory
    A        eax and edx combined into a 64-bit integer (use long longs)

除了指定具体的寄存器，也可以让 GCC 自行选择，上面的 q 和 r 就是用来做这个的：

    asm ("leal (%1,%1,4), %0"
         : "=r" (x)
         : "0" (x) );

以上，(basepointer,indexpointer,indexscale) 这表达式在 AT&T 语法中是比较复杂的，混合了多种寻址元素，但是在奔腾架构上只需要一个 CPU 周期。

LEA 指令 Load Effective Address 就是装入有效地址，取源操作数地址的偏移量，并把它传送到目的操作数所在的单元。

这里使用 %n 的形式来让 GCC 自动择选寄存器，当生成 GAS 代码时，%0 这样的表达会替换为选中的寄存器，至于数字编号，从 0 开始递增，1、2、3 ... 等等。

怎么选择寄存器，由 "q" 或 "r" 约束：

- "=q" 约束 GCC 从通用寄存器中选择 eax, ebx, ecx, edx。
- "=r" 约束 GCC 还可以从 esi 和 edi 选择。

其它更多的功能参考 GCC 文档。



## ⚡ Lab Guide
- Tools https://pdos.csail.mit.edu/6.828/2018/tools.html
- Lab Guide https://pdos.csail.mit.edu/6.828/2018/labguide.html
- Debathena https://debathena.mit.edu
- 6.828: Operating System Engineering https://pdos.csail.mit.edu/6.828/2018/schedule.html
- From Nand to Tetris - Building a Modern Computer From First Principles https://www.nand2tetris.org/course
- Xv6 - a simple Unix-like teaching operating system https://pdos.csail.mit.edu/6.828/2020/xv6.html
- The Architecture of Open Source Applications (Volume 2): FreeRTOS https://www.aosabook.org/en/freertos.html
- Extending GDB: 23.1 Canned Sequences of Commands https://sourceware.org/gdb/onlinedocs/gdb/Extending-GDB.html
- GCC - the GNU Compiler Collection https://gcc.gnu.org/
- GNU Binutils https://www.gnu.org/software/binutils/
- CMake Tutorial https://cmake.org/cmake/help/latest/guide/tutorial/index.html
- Makefile Manual https://www.gnu.org/software/make/manual/make.html
- Makefile 自动化编译教程 http://www.ruanyifeng.com/blog/2015/02/make.html
- JOS lab, MIT 6.828 Operating System Engineering https://github.com/clann24/jos
- 替你总结一份MIT计算机课程 https://zhuanlan.zhihu.com/p/112763953

麻省理工大学 Massachusetts Institute of Technology 拥有全球最顶尖的计算机教学系统，该校的计算机学院科学与人工智能研究中心下属组织，并行分布式操作系统小组的操作系统工程课程，6.828: Operating System Engineering，主要目的是教授学生掌握操作系统工程知识，通过这门课程的学习，学生应该掌握现代操作系统的基本原理和结构，如果能掌握简单的基本实现更好。

- 6.S081: Operating System Engineering https://pdos.csail.mit.edu/6.828/2020/schedule.html

这门课程在 2020 秋季改版，将原来的 6.828 关于操作系统介绍部分拆成独立的课程 6.S081 Introduction to Operating Systems，并作为本科生的课程独立教授。而 6.828 课程将主线回到操作系统的科研上面，并作用研究生的课程教授，所以拆分后的课程如下：

- 6.S081 Introduction to Operating Systems for undergraduates.
- 6.828 will be offered as a graduate-level seminar-style class focused on research in operating systems.

课程中使用了两个用于教学的 Unix-like 操作系统，Xv6 和 JOS，而 JOS 是在 Xv6 的基础上改写，让我们能在其上进行实验的 OS，可以将 JOS 看作 Unix 的精简教学版本。所以，可以将 Xv6 看作是更完整的版本，其名字来源于 Lions' Commentary on UNIX' 6th Edition。为了使用精简指令集用于教学目的，在 2019 年后的课程开始使用最新的 RISC-V 架构版本，另外早前的 x86 架构版本也可以在 mit-pdos 仓库上找到。

课程提供的用于实验的系统内核 JOS，可以通过以下命令克隆代码仓库，最近两年的实验代码也一并罗列，按需要获取：

```sh
# https://pdos.csail.mit.edu/6.828/2018/
git clone https://pdos.csail.mit.edu/6.828/2018/jos.git

# https://pdos.csail.mit.edu/6.828/2019/
git clone git://github.com/mit-pdos/xv6-riscv-fall19.git

# https://pdos.csail.mit.edu/6.828/2020/
git clone git://g.csail.mit.edu/xv6-labs-2020

# The latest Xv6 (x86) source and text are available via
git clone git://github.com/mit-pdos/xv6-public.git

# The latest Xv6 (RISC-V) source and text are available via
git clone git://github.com/mit-pdos/xv6-riscv.git
git clone git://github.com/mit-pdos/xv6-riscv-book.git
```

本小节为 [MIT] 6.828: Operating System Engineering 课程的实验指导。

- Lab 1: Booting a PC https://pdos.csail.mit.edu/6.828/2018/labs/lab1/
- Lab 2: Memory Management https://pdos.csail.mit.edu/6.828/2018/labs/lab2/
- Lab 3: User Environments https://pdos.csail.mit.edu/6.828/2018/labs/lab3/
- Lab 4: Preemptive Multitasking https://pdos.csail.mit.edu/6.828/2018/labs/lab4/
- Lab 5: File system, Spawn and Shell https://pdos.csail.mit.edu/6.828/2018/labs/lab5/
- Lab 6: Network Driver (default final project) https://pdos.csail.mit.edu/6.828/2018/labs/lab6/
- Lab 7: Final JOS project https://pdos.csail.mit.edu/6.828/2018/labs/lab7/
- 实验代码仓库 https://pdos.csail.mit.edu/6.828/2018/jos.git/

为了完成这七个实验，需要以下实验环境和工具：

- 一套 x86 模拟器工具用来运行内核，如免费的 QEMU 5.1，也可以使用 Virtual Box，VMware Player/Fusion 等。
- 一套编译工具，用于测试内核，使用支持多种语言 GCC，它包含了 assembler, linker, C compiler, and debugger。
- 调试工具 GDB 8.3，还构建工具套件 Binutils。

完成这个实验要求使用 Unix/Linux/MacOS 系统的工作站，并要求了解 git 代码版本管理工具，还有 shell 命令行的基本使用，如果掌握 make 自动化编译工具则更好，这样可以读懂编译脚本在做什么。当然，掌握 C 语言是必要的。

如果是 Windows 用户，可以使用 Windows WSL 安装 Ubuntu 操作系统，或者直接在 Windows 系统中使用 Cygwin 编译工具套件，确保安装 flex、bison 依赖库，它们在开发头文件下。

课程推荐使用安装 Debathena 的机器，这是 MIT 专为公共计算开发的实验研究用的系统，可以在 Debian 或 Ubuntu 系统上安装它，使用它可以很方便地获取 6.828 课程实验使用的环境配置，只需要登录 ssh 执行命令 `add -f 6.8282` 获取。

GCC 编译工具只是 GNU 旗下众多开源软件项目中的一个，GNU Binutils 工具套件提供的各个命令作用如下：

- Compiler 编译程序，gcc/g++/cc 用来编译源代码文件，通常通过 gcc 调用 g++ 或 cc 命令；
- Assemblers 汇编程序，编译汇编程序，通常通过 gcc 调用 as 命令；
- Linkers 链接程序，用来链接编译输出的目标文件，生成可执行程序，通常通过 gcc 调用 ld 命令，还有 ar 命令生成链接库；

GCC 编译套件不仅支持 C/C++，支持各种 C/C++ 方言标准，还支持 Go 或 Object-C/C++ 等，并且支持 x86、x86_64、ARM 等多种 CPU 架构。提供 `gcc` 命令相当于一个门户，它本身就是 C 语言编译器，并且通过它可以调用整个编译流程中会使用到的各种命令。它可以识别各种 C/C++ 源文件的扩展名，并将相应参数传给相应的命令，如果是 C++ 源代码，则执行 `g++` 命令。

另外，`cc` 是 Unix 系统的 C Compiler，一个是古老的 C 编译器命令。Linux 的 cc 一般是一个符号连接，指向 gcc，可以通过 `ls -l /usr/bin/cc` 来查看。

注意，直接使用 `g++` 编译 C 语言源代码会被当作 C++ 源代码处理。

安装 GCC 编译套件及调试器：

```sh
sudo apt-get install -y build-essential gdb
```

例如，编译 C 语言为汇编程序，不生成目标文件和可执行程序，只需要执行命令时使用 `-S` 参数：

```sh
gcc -S hello.c
as -o a.out hello.s
gcc -o hello a.out --verbose
ld -e main -lc -o hello a.out
```

链接程序默认使用 `_start` 符号作为程序入口，C 语言中使用 main，如果直接使用 ld 命令链接程序时不指定入口就会报以下的错误。另外，需要给链接程序指明需要使用到的链接库，否则会报错符号未定义，因为代码中调用的外部符号需要在链接时重新定位才能从正确的地址调用 API。上面命令行中的 `-lc` 表示引用 GCC 默认提供的 libc.a 动态链接库，指定库文件名时省略前缀的 lib 和后缀名，如果依赖其它动态库，就需要通过 `-L` 参数指定要搜索的目录。

```sh
ld: warning: cannot find entry symbol _start; defaulting to 0000000000401000
hello.c:(.text+0x15): undefined reference to printf
```

其实这一切 `gcc` 命令会自动帮你处理好，如果自行调用这些命令，就需要知道它们是如何工作的，就是编译所有源代码 -> 生成目标文件 -> 链接所有目标文件 -> 符号重定位 -> 生成可执行程序。

    +---------------+  +--------+  +------+
    |Assembly source|--|        |--|object|-+
    +---------------+  |        |  +------+ |
                       |        |           | +------+
    +---------------+  |        |  +------+ | |      |  +-----+
    |C source       |--|Compiler|--|object|-+-|Linker|--| Exe |
    +---------------+  |        |  +------+ | |      |  +-----+
                       |        |           | +---+--+
    +---------------+  |        |  +------+ |     |
    |C++ source     |--|        |--|object|-+     |
    +---------------+  +---+----+  +------+       |
                           |                      |
    +--------------+       |               +------+-------+
    | Header Files |-------+               |Resource Files|
    +--------------+                       +--------------+

编译得到的目标文件是什么呢？其实它就是包含二进制代码的文件，只不过还不能直接执行，因为它包含一些符号需要经过重定位后才能正确执行。这些符号可以是源代码中的一些函数，或需要调用的一些系统 API，可以通过 `file a.out` 命令查看文件类型信息:

```sh
a.out: ELF 64-bit LSB relocatable, x86-64, version 1 (SYSV), not stripped
```

可以使用 `ldd` 命令查看可执行程序依赖的动态库，或使用 `readelf` 想看 Linux 可执行程序的文件信息。

生成的目标文件包含的信息可以通过 `objdump` 查看，包括反汇编、符号定义、符号重定位等。只是列表其中的符号定义，可以使用 `nm` 命令。应该看到输出的文件格式信息为 `elf32-i386`，这表示运行于 i386 架构上的 Linux 可执行文件。如果是 `elf64-x86-64` 表示使用的是 x86_64 架构运行的代码，表明正在使用的编译器是 64-bit 版本，应该安装 32-bit 版本编译出 elf32-i386 格式可执行程序。

在使用 GDB 调试程序时可以使用 set architecture i386 命令将目标代码解析为 i386 架构的指令。

链接时使用到的标准库文件信息可以通过 `gcc` 查询：

```sh
gcc -m32 -print-libgcc-file-name
objdump -d -r -t a.out
```

因为 JOS 使用 gcc-multilib 多线程库，也需要安装，否则执行 `make` 命令自动编译工程时，会出现 `__udivdi3` 或 `__muldi3` 这些符号找不到定义。

```sh
sudo apt-get install gcc-multilib
```

安装好开发环境，接下来将课程配套的 JOS 实验代码克隆下来，MIT 的网上课程有相应的实验代码，可以使用 Git 工具下载，并且通过 QEMU Emulator 及 GNU debugger (GDB) 这些工具实现内核代码的运行调试。



## ⚡ Lab 1: Booting a PC - PC Bootstrap

按前面配置好 Linux 开发环境，可以很方便地使用免费的 GCC 编译器套件对 JOS 进行编译，并且通过 QEMU 模块器加载进行调试，配合调试工具可以很明了地认识内核代码在 PC 引导过程所起的作用。

课程将实验一 Lab 1: Booting a PC 分成三个部分：

- 熟悉 x86 架构的 CPU 指令及汇编语言，熟悉 QEMU x86 emulator 的使用，PC bootstrap 主机加电引导过程。
- 检查实验 6.828 课程用的内核提供的 boot loader 引导程序，在代码仓库的 boot 目录下可以找到。
- 最后，深入研究为本课程服务的 JOS 内核初始模板，可以在 kernel 目录中找到。

先进行第一个部分，引导机器。

阅读材料：

- 6.828 2018 Lecture 1: O/S overview https://pdos.csail.mit.edu/6.828/2018/lec/l-overview.txt
- 6.828: PC hardware and x86 https://pdos.csail.mit.edu/6.828/2018/lec/l-x86.pdf
- 6.828 Lecture Notes: x86 and PC architecture https://pdos.csail.mit.edu/6.828/2018/lec/l-x86.html
- Bootstrap/PC hardware appendices and the related xv6 source files https://pdos.csail.mit.edu/6.828/2018/xv6/book-rev11.pdf

在研究操作系统之前，必要对 CPU 架构有深刻的认识，所有操作系统的功能都基于硬件之上，需要根据 CPU 提供什么系统功能来实现操作系统。

一个现代的操作系统具有抢占式调度 Preemptive Scheduling，这种 CPU 调度技术实现同时运行多个任务。它将 CPU 的时间划分给给定的进程，给定的时间间隔可能能够完成整个过程，也可能无法完成。当进程的区间时间（burst time）大于 CPU 周期时，它将被放回到 ready queue 中，并在下一个时机执行。

抢占式调度支持的算法有循环调度，Round Robin(RR)、优先级调度 Priority、剩余时间最短优先 shortest remaining time first(SRTF)等等。

试想一下，一个系统中同时运行多个任务，访问同样的硬件资源，特别是内样的内存。如果两人独立的进程可以相互访问对方的内存数据，这将是一个要命的问题。

所以，操作系统最核心的功能可以分成两个大类，资源管理和任务调度。

资源管理又涉及不同硬件厂商的管理，所以操作系统会制订 HAL - Hardware Abstraction Layer，按统一的规范对接硬件，为硬件实现驱动程序。

资源管理另一个重点是内存管理，要使多个任务运行在同一机器上，还互不影响，这就要求它们拥有各自的内存空间。所有现代 CPU 在设计时，就提供了用于内存管理的硬件机制，通过各种描述符来控制内存空间。软件在使用内存时，地址是虚拟地址而非真实的物理内存地址，通过 CPU 的内存映射机制换算后才得到物理地址。

以下是 PC x86 架构的物理内存模型：

    x86 Physical Memory Map
    +------------------+  <- 0xFFFFFFFF (4GB)
    |      32-bit      |
    |  memory mapped   |
    |     devices      |
    /\/\/\/\/\/\/\/\/\/\
    /\/\/\/\/\/\/\/\/\/\
    |      Unused      |
    +------------------+  <- depends on amount of RAM
    | Extended Memory  |
    +------------------+  <- 0x00100000 (1MB)
    |     BIOS ROM     |
    +------------------+  <- 0x000F0000 (960KB)
    |  16-bit devices, |
    |  expansion ROMs  |
    +------------------+  <- 0x000C0000 (768KB)
    |   VGA Display    |
    +------------------+  <- 0x000A0000 (640KB)
    |    Low Memory    |
    +------------------+  <- 0x00000000

除了内存低位地址部分低层系统保留，通常是 1MB 的位置以下，其它部分都是应用软件可以使用的扩展内存地址。

保留内存是和一些基本的设备关联的，例如，为 VGA 显示设备保留的内存就可以看作是一个显示设备，对其进行读写就可以控制显示器的内容，或者获取显示内容。 

最早 PC 是基于 16-bit Intel 8088 处理器，限定了 1MB 物理内存寻址空间，在后续的 CPU 中保持了这个兼容性，这 1MB 的内存模块在现代 PC 中依然保留。即使在 80286 和 80386 打破这个内存边界，支持 16MB 或 4GB 物理内存寻址，它们依然向后提供兼容，保持原来的 1MB 内存模型。

现代 PC 将 0x000A0000 - 0x00100000 这部分作为一个分界，最低的 640KB 称为传统内存 conventional memory，其它称为扩展内存 extended memory。另外，在 32-bit PC 的最顶部物理地址空间，一般也为 BIOS 保留作为 PCI 设备使用。

最新的 x86 处理器可以支持超过 4GB 物理内存，所以内存边界超过 0xFFFFFFFF。而 BIOS 又要在 32-bit 寻址空间的最顶部分保留一个边界，为 32-bit 的设备提供内存地址影射。

而为了课程实验提供的 JOS 只使用了最开始的 256MB 物理内内，所以假设 PC 主机只是在 32-bit 物理地址空间。从以上的各种变动，各种内存的称谓可以理解，物理内存地址空间和硬件组织是操作系统开发中的一难点问题。


在早期，最低位的 640KB 称为 Low Memory 的内存区间是 PC 唯一可以进行随机访问的 random-access memory (RAM)，当然，可以配置为 16KB, 32KB, or 64KB of RAM。

其中 0x000A0000 - 0x000FFFFF 这部分 384KB 保留给显示器缓冲区，及其固件 non-volatile memory。

最重要的部分还是 Basic Input/Output System (BIOS)，它占据 0x000F0000 - 0x000FFFFF 即 1MB 边界的最后 64KB 空间。早期 PC 的 BIOS 程序保存在 read-only memory (ROM) 芯片之中，但是为了支持 BISO 可更新升级，现代 PC 将 BIOS 保存在可擦写的 Flash Memory 芯片中。BIOS 程序是用于 PC 初始化的，例如，激活显卡、内存检查等等。BIOS 执行最后一个步骤就是加载操作系统，可以从早期的软盘、光驱，或者硬盘、网络、移动硬盘等等外部存储设置中加载操作系统。


正如前面所说，应用程序使用的虚拟内存地址空间，两个程序即使对同一个地址读写，如 0x00200000，经过 CPU 映射后也是不同的物理内存地址的操作。

而与引导相关的是 BIOS 即 EPROM 芯片中保存的引导代码，它也会映射到保留内存中，并且这部分内存只读不可写。

主机在加电后，CPU 处理实地址模式，指令执行地址就会跳转到 FFFFFFF0H 处开始，这个地址是超出实地址模式的 1MB 寻址空间，它会被映射到 BIOS 代码的地址。

在 Intel 编程手册第三卷第 9 章专门描述 CPU 的管理与初始化，9.1.4 First Instruction Executed。初始地址是 CPU 最高寻址空间往下 16 个字节处。但在 32-bit 主机上，不是所有机器都会安装有将近 4GB 的内存，所以这个地址是会影射到 EPROM 中的初始化代码上。

必需理解程序使用的地址空间不等于内存物理地址，物理地址是经过映射后得到的，所以，即使主机只有 2G 内存也没事，因为寻址空间并没真正使用内存，只是使用地址空间的一个地址，只把相应的地址分配给 EPROM 芯片中的程序即可。

这也就是为什么 32-bit 系统只能使用 4G 内存，因为 32-bit 地址总线只有 4G 的地址空间，内存再大就没地址分配。

需要注意，代码段寄存器分成两个部分，可见的段选择器部分，和隐含的基地部分。

加电后代码段寄存器 CS 复位为 F000H，而代码段基址复位为 FFFF0000H，EIP 寄存器复位为 0000FFF0H，最后 CS Base + EIP 叠加得到 FFFF0000H + FFF0H = FFFFFFF0H 这个初始指令地址。

在加电后 CPU 处于 16-bit 实地址模式，但是这种地址计算方式，即 [CS base address = CS segment selector * 16] 只会在 CS 寄存器被初次修改之后才会启用。所以，在 CS 未改变之前，即刚加电复位时，还是使用 CS Base + EIP 生成初始代码地址。

手册原文如下：

> The first time the CS register is loaded with a new value after a hardware reset, the processor will follow the normal rule for address translation in real-address mode (that is, [CS base address = CS segment selector * 16]). To ensure that the base address in the CS register remains unchanged until the EPROM based software-initialization code is completed, the code must not contain a far jump or far call or allow an interrupt to occur (which would cause the CS selector value to be changed).


第三卷第 22 章有其它系列 CPU 初始状态数据，22.39 Initial State Of Pentium, Pentium Pro And Pentium 4 processors。


手册第一卷第 2 章介绍了 x86 的发展历史，这里挑几个划时代的产品：

- 1978 年，研发了 16-bit 8086 和 8088，最大的特点是引入内存分段管理。

    - 寄存器为 16-bit，外加 16-bit 额外的数据总线。
    - 8088 类似 8086，只是额外的数据总线为 8-bit。
    - 一个 16-bit 的段寄存器可以寻址 64 KB，使用四个段寄存共寻址 256 KB，并且程序对所有内存段可读写。
    - 一个 16-bit 的段寄存器叠加一个 16-bit 的偏移地址形成 20-bit 寻址空间，即 2^20 = 1MB，段寄存器叠加在高 16-bit。 

- 1982 年 Intel® 286 CPU，最大的特点是引入保护模式 Protected Mode。

    - 保护模式使用段寄存器作为 Descriptor tables 的选择器或指针，内存描述符提供 24-bit 基本 16MB 寻址空间。
    - 描述符表的引入提供了虚拟内存管理能力，通过切换段寄存器提供一系列保护机制。
    - 虚拟 8086 模式作为向后兼容，所以现代的 x86 架构 CPU 都有保护模式、虚拟 8086 模式这两个模式。

    CPU 内存提供 3 个描述符表，配套相应的读写指令：

    - `LGDT` Load global descriptor table (GDT) register.
    - `SGDT` Store global descriptor table (GDT) register.
    - `LLDT` Load local descriptor table (LDT) register.
    - `SLDT` Store local descriptor table (LDT) register.
    - `LIDT` Load interrupt descriptor table (IDT) register.
    - `SIDT` Store interrupt descriptor table (IDT) register.

    保护模式保护的是虚拟内存管理机制，这些保护机制如下：

    - 段地址限制查检。
    - Read-only 和 execute-only 段地址选项。
    - 四个特权级，如果用圆环来表示特权能力范围，现代操作系统多使用 Ring 0 核心系统底层特权和 Ring 3 应用特权，另外 Ring 1/2 是操作系统设备特权。

- 1985 年 Intel386™ CPU，首次引入 32-bit IA-32 架构。

    - 32-bit 地址总线提供高达 4-GBytes 的物理内存寻址能力。
    - 32-bit 寄存器既可用来保存数据又可用来内存寻址，所以，可以将寄存器看作高级语言的指针或变量。
    - 寄存器的低 16-bit 向后兼容早期的寄存器，比如 32-bit 的 EAX 可以通过 AX 来访问低 16-bit。
    - 同样提供虚拟 8086 模式，因为这种模式下的内存地址是物理地址，所以也叫 Real Address Mode 或简称实模式。
    - 提供分段内存模型、和展平内存模型，A segmented-memory model and a flat memory model。
    - 为虚拟内存管理提供内存分页机制，每个每页固定大小为 4-KByte。
    - 提供并行存储能力支持。

处理器市场的另一条主线是 6502，它是最著名的 8-bit CPU，早期曾用于 Apple I、Apple II、FC 等系统开拓个人电脑市场，后来又成就了 ARM 这样大红大紫的移动设备 CPU。6502 本身不是基于精简指令架构 RISC CPU，其指令系统有多字节的指令，有人戏称它为 Confused Instruction Set Computer。

早期 x86 架构变化形成了三种内存地址说法，相当混淆：

- 虚拟地址，应用程序中使用的地址，由 16-bit 段选择器叠加一个 16-bit 或 32-bit 偏移地址。在平面内存模型中，选择器预加载到 CS、DS、SS、ES，这些段寄存器都引用相同的线性地址。
- 线性地址，虚拟地址经过段地址转换得到，选择器引用的段基址叠加到虚拟偏移量中，形成一个 32-bit 线性地址。
- 物理地址，线性地址经过分页处理得到，线性地址相当于一个分页索引，对应 Page Table 一个记录，最终形成物理内存的地址。


这里开始使用自动化构建内核引导程序，假设你已经掌握 make 自动化编译工具，如果需要请参考连接给出的教程。

GNUmakefile 编译脚本中已对包含 QEMU 模块器的配置，它会自动执行模拟器加载编译生成的内核，如果未安装则会提示。

```sh
$ make
***
*** Error: Couldn't find a working QEMU executable.
*** Is the directory containing the qemu binary in your PATH
*** or have you tried setting the QEMU variable in conf/env.mk?
***
+ as kern/entry.S
+ cc kern/entrypgdir.c
+ cc kern/init.c
+ cc kern/console.c
+ cc kern/monitor.c
+ cc kern/printf.c
+ cc kern/kdebug.c
+ cc lib/printfmt.c
+ cc lib/readline.c
+ cc lib/string.c
+ ld obj/kern/kernel
ld: warning: section `.bss' type changed to PROGBITS
+ mk obj/kern/kernel.img
```

根据编译脚本定义，有以下几个和 QEMU 相关的命令，nox 后缀表示不使用 x 图形界面。pre-qemu 会执行 gdbinit 生成默认的 GDB 高度配置文件，可以通过 `gdb -n -x .gdbinit` 或者 `make dbg` 执行调试器：

```sh
make pre-qemu
make qemu
make qemu-nox
make qemu-gdb
make qemu-nox-gdb
make print-qemu
```

在 Windows WSL 系统下，如果没安装图形界面，那么启动时，需要指定 `-nographic` 禁用图形界面输出，而使用串行 I/O 控制台输出，这种模式下可以通过 ctrl-a h 获取帮助信息：

    C-a h    print this help
    C-a x    exit emulator
    C-a s    save disk data back to file (if -snapshot)
    C-a t    toggle console timestamps
    C-a b    send break (magic sysrq)
    C-a c    switch between console and monitor

其中，带 gdb 后续的配置表示为 QEMU 模拟器添加一个 -S 选项，这样模拟就会一直等到 gdb 调试连接后而不会自行运行。

    qemu-system-i386 -nographic -drive file=obj/kern/kernel.img,index=0,media=disk,format=raw -serial mon:stdio -gdb tcp::26000 -D qemu.log  -S 

然后，通过 gdb 连接后，就可以看到内核停留在第一条指令的地址上，[f000:fff0] 这个是 16-bit x86 架构的初始地址，即 FFFF0H，根据编译内核使用的编译不同，可以会有不同的指令操作数：

    # x86_64-linux-gnu
    [f000:fff0]    0xffff0: ljmp   $0x3630,$0xf000e05b

    # i386-linux-gnu
    [f000:fff0]    0xffff0: ljmp   $0xf000,$0xe05b

注意，第一条指令使用的是一条 Long Jump 指令，这意味着跳转地址会超过 1MB 这个 16-bit 机器的寻址边界。但这条指令又是正确的，这里重述前面的内容，因为在加电后 CPU 处于 16-bit 实地址模式，但是这种地址计算方式，即 [CS base address = CS segment selector * 16] 只会在 CS 寄存器被初次修改之后才会启用。所以，在 CS 未改变之前，即刚加电复位时，还是使用 CS Base + EIP 生成初始代码地址。

以上两步需要在两个控制台上执行以下两个命令：

    # run qemu emulator with -nographic
    make qemu-nox-gdb

    # run gdb and connect to qemu
    make gdb

执行 gdb 连接目标主机后，可以通过单步指令 si 进行跟踪，但不能使用单步 step 进行跟踪，因为不知道程序的边界，只能按单条指令进行。

在首条指令出现后，可以验证以下问题：

- IBM PC 兼容机首条指令物理地址是 0x000ffff0，当然这里指的是 16-bit 机器，这个地址就是 BIOS 占据的 1MB 内存中的最高 64kb 保留内存。
- 16-bit PC 主机加电执行状态 CS = 0xf000 和 IP = 0xfff0。
- 首条指令是跳转动作，$0xf000,$0xe05b 地址表示代码段为 CS = 0xf000 以及指令指针为 IP = 0xe05b，注意这里就意味 CS 状态改变了。

在 PC 硬件设计时，BIOS 是通过硬连线映射到起始地址的，这确保了 BIOS 一定可以在加电后获取控制权，这也是必需的，因为在刚加电状态，物理内存是没有任何代码的。

16-bit PC 在加电时，进入实地址模式，初始状态下 CS 为 0xf000，IP 为 0xfff0，第一条指令地址就是 (CS:IP)，将这个段地址加偏移地址的转换为物理地址，需要将段乘 16 即左移位 4-bit，再叠加形成 20-bit 物理地址。

    16 * 0xf000 + 0xfff0   # in hex multiplication by 16 is
    = 0xf0000 + 0xfff0     # easy--just append a 0.
    = 0xffff0 

起始地址 0xffff0 就是 BIOS 所占据的最高地址往下偏移 16 字节，和 Intel 手册描述一致。

当 BIOS 接管机器，它会建立中断描述符表，IDT - interrupt descriptor table，初始化其它设备，如 VGA 显示器，鼠标、键盘。这时会出现 Starting SeaBIOS 信息，表示 QEMU 提供的 BIOS 程序正在执行。

在 PCI 总线初始化完成，以及所有 BIOS 已经知设备初始化后，就会搜索可引导系统，期间会搜索软盘，CD-ROM，硬盘等等，检测到可引导设备后，就将引导程序 boot loader 读入到内存，并将控制权转交给引导程序。

QEMU 模拟器提供了自己的 BIOS 程序，可以在安装目录下找到：

    $ ls /usr/share/qemu/*bios*

QEMU 使用的是一些开源的项目，如 Bochs、openBIOS 等，源代码中使用到的一部 BIOS 以及固件分以二进制文件的形式保存在 pc-bios 目录下。还有一些 BIOS 以 git 源代码子模块的形式保存在 QEMU 的源码仓库中，当编译 QEMU 程序的时候，也同时编译出这些 BIOS 或者固件的二进制文件，可以查看 .gitmodules 文件。QEMU 支持多种启动方式，比如说 efi、pxe 等，都包含在该目录下，这些都需要特定 BIOS 的支持。

在源代码中可以找到 QEMU PC System Firmware，hw/i386/pc_sysfw.c，函数 `old_pc_system_rom_init` 将 BISO 文件加载到 1MB 保留内存的顶部。

在函数最后一行代码中，将 BIOS 影射到物理内存的最项端，注意，(uint32_t)(-bios_size) 这里使用了捷径代码，涉及负数补码的表达。bios_size 就 BIOS 代码文件的大小，而取负值再转换为无符号的 uint32_t，FFFFFFFFH - 128K = FFFE0000H。因为负数补码还额外加 1，这里的结果就要相应减 1，即 FFFDFFFFH，相当于在 32-bit 寻址空间的最顶位置开拓一个空间，用来映射 BIOS 程序。

    /* map all the bios at the top of memory */
    memory_region_add_subregion(rom_memory,
                                (uint32_t)(-bios_size),
                                bios);

当前使用的是 Windows 10 WSL 编译环境，但是 QEMU 在 Host 主机安装，需要手动执行命令加载内核以调试，以下信息显示内核已经成功加载：

```sh
qemu-system-x86_64 -drive file=JOS/obj/kern/kernel.img,index=0,media=disk,format=raw -serial mon:stdio -gdb tcp::26000    
6828 decimal is XXX octal!
entering test_backtrace 5
entering test_backtrace 4
entering test_backtrace 3
entering test_backtrace 2
entering test_backtrace 1
entering test_backtrace 0
leaving test_backtrace 0
leaving test_backtrace 1
leaving test_backtrace 2
leaving test_backtrace 3
leaving test_backtrace 4
leaving test_backtrace 5
Welcome to the JOS kernel monitor!
Type 'help' for a list of commands.
K> kerninfo
Special kernel symbols:
  _start                  0010000c (phys)
  entry  f010000c (virt)  0010000c (phys)
  etext  f0101acd (virt)  00101acd (phys)
  edata  f0113060 (virt)  00113060 (phys)
  end    f01136a0 (virt)  001136a0 (phys)
Kernel executable memory footprint: 78KB
```

目前，内核控制台只提供两个命令，除了一个帮助命令，另一个是 kerninfo 打印内核信息。

整个 BIOS 引导程序都是由 QEMU 提供的，在控制台打印出 Booting from Hard Disk... 后的信息才是由 JOS 内核输出的，不过在 Windows 系统下运行的模拟器看不到，`K>` 提示符号表示已经可以接收用户命令。

JOS 同时使用 QEMU 虚拟机上的控制台和串行口控制台，所以信息会同时显示在 QEMU 窗口，相当于 VGA 显示器或命令行终端，还有运行 QEMU 的命令控制台中，并且接收来自这两个设备的输入。

虽然简单，但是要明确，kernel monitor 运行环境可以直接控制所运行的机器，当然这里是 QEMU 虚拟机，可以直接往硬盘写入数据，即 kernel.img 磁盘镜像文件。如果是物理主机，将数据直接写入硬盘的开始几个分区将会导致数据丢失，因为硬盘的分区表将被破坏，包含 MBR - Master Boot Record 和第一分区的前面的扇区。所以不要在真机中直接写入硬盘，除非你知道在做什么。


执行调试器，可以加载一个配置文件，如 `gdb -n -x .gdbinit`。

以下是 JOS 生成的配置文件参考，只定义了一个勾子函数，它会根据寄存器信息自动设置 CPU 架构，配置脚本还会命令 gdb 加载符号文件并且连接被调试的目标主机：

```
set $lastcs = -1

define hook-stop
  # There doesn't seem to be a good way to detect if we're in 16- or
  # 32-bit mode, but we always run with CS == 8 in 32-bit mode.
  if $cs == 8 || $cs == 27
    if $lastcs != 8 && $lastcs != 27
      set architecture i386
    end
    x/i $pc
  else
    if $lastcs == -1 || $lastcs == 8 || $lastcs == 27
      set architecture i8086
    end
    # Translate the segment:offset into a physical address
    printf "[%4x:%4x] ", $cs, $eip
    x/i $cs*16+$eip
  end
  set $lastcs = $cs
end

echo + target remote localhost:26000\n
target remote localhost:26000

# If this fails, it's probably because your GDB doesn't support ELF.
# Look at the tools page at
#  http://pdos.csail.mit.edu/6.828/2009/tools.html
# for instructions on building GDB with ELF support.
echo + symbol-file obj/kern/kernel\n
symbol-file obj/kern/kernel
```

在实验完后，git 仓库管理的代码肯定会有变化，有文件的改动，那么你可以将这些改动提交到本地仓库中。先使用 add 命令添加改动的文件，现使用 git commit 命令提交到本地仓库中，然后还可以和另一个分支的代码进行合并。当然，如果改动的内容不需要保留，可以直接通过 git checkout -f 来强制签出其它实验使用的文件，而不管那些改动的内容。

```sh
$ cd /home/6.828/lab
$ add git
$ git pull
Already up-to-date.
$ git checkout -b lab2 origin/lab2
Branch lab2 set up to track remote branch refs/remotes/origin/lab2.
Switched to a new branch "lab2"

$ git merge lab1
Merge made by recursive.
 kern/kdebug.c  |   11 +++++++++--
 kern/monitor.c |   19 +++++++++++++++++++
 lib/printfmt.c |    7 +++----
 3 files changed, 31 insertions(+), 6 deletions(-)

# git checkout -f -b lab3 origin/lab3
```

这样，就可以切换到下一个实验的代码。


## ⚡ Lab 1: Booting a PC - The Boot Loader
- "El Torito" Bootable CD-ROM Format Specification https://pdos.csail.mit.edu/6.828/2018/readings/boot-cdrom.pdf
- I/O Ports and Controllers on IBM Compatibles and PS/2 http://www.os2site.com/sw/info/memory/ports.txt
- Protected-Mode Address Translation https://pdos.csail.mit.edu/6.828/2018/lec/x86_translation_and_registers.pdf
- xv6 - Chapter 3 Page tables https://pdos.csail.mit.edu/6.828/2018/xv6/book-rev11.pdf
- 6.828 2016 Lecture 6: Virtual Memory https://pdos.csail.mit.edu/6.828/2018/lec/l-vm.md
- How we will use paging (and segments) in JOS https://pdos.csail.mit.edu/6.828/2018/lec/l-josmem.html
- 6.828 2016 Lecture 7: using virtual memory https://pdos.csail.mit.edu/6.828/2018/lec/l-usevm.md

课程将实验一 Lab 1: Booting a PC 分成三个部分：

- 熟悉 x86 架构的 CPU 指令及汇编语言，熟悉 QEMU x86 emulator 的使用，PC bootstrap 主机加电引导过程。
- 检查实验 6.828 课程用的内核提供的 boot loader 引导程序，在代码仓库的 boot 目录下可以找到。
- 最后，深入研究为本课程服务的 JOS 内核初始模板，可以在 kernel 目录中找到。

这里是第二个部分，引导程序。

程序具体功能执行以下操作：

- 关闭中断
- A20 Gate 使能启用所有内存寻址
- 全局描述符表初始化
- 保护模式启动
- 设置段寄存器（长跳转更新CS，根据设置好的段选择子更新其他段寄存器）
- 初始化调用栈准备执行 C 语言的 bootmain 程序，设置 ebp 为引导程序的开始位置 0x7c00。
- 进入 bootmain 后读取内核映像到内存，检查是否合法，并启动操作系统，控制权交给它。

软盘和硬盘是最早流行的存储设备，它们的数据被分段为扇区进行管理，每个扇区固定 512 字节，这是每次读写数据的基本单位。如果是可引导设备，那么第一个扇区就是引导扇区，并且以最后两个字节 0x55AA 为标记，在 Intel Little-Endian 方式存储，用 Hex 查看数据就是 0xAA 0x55 这样。

BIOS 会将引导扇区读取到内存 0x7c00 - 0x7dff 这个位置，这个地址因为是习俗，所以成为固定用法。然后通过一条 jmp 指令设置 CS:IP 为 0000:7c00，并执行引导扇区的代码，引导程序就正式开始执行了。

但是，从 CD-ROM 引导就没有那么容易了，并且光驱这种设备发展也比较晚，需要重新设计相应的 BIOS 程序来支持它。现代的 BIOS 程序引导 CD-ROM 复杂得多，但功能也更强大。不再是加载一个引导区而已，而是加载一个可引导的镜像文件，并且光驱的扇区是 2048 字节，具体参考 "El Torito" Bootable CD-ROM Format Specification。

1995 年，Phoenix Technologies 与 IBM 联合发表了可启动 CD-ROM 格式规范，Bootable CD-ROM Format Specification 1.0，也称为 El Torito 规范，该规范中定义了可启动 CD-ROM 的数据结构与映像数据的配置及光盘制作的一些详细说明。实际上，该规范也隐含地制定了能够读取可启动 CD-ROM 光盘的 BIOS 的规范，使得符合 El Torito 规范的可启动 CD-ROM 在电脑上能够正常启动。

随后，Phoenix 又独自或联合其他厂家相继发布了一系列支持可启动 CD-ROM 的规范和标准，到 1996 年 COMPAQ、Phoenix 与 Intel 联合发布的 BIOS Boot Specification 1.01，该规范为 BIOS 厂家提供了制造支持可启动 CD-ROM 的 BIOS 的标准。

BIOS 首先检查光盘的 sector 17，查找其中的代码，若发现包含启动记录卷描述表 Boot Record Volume Descripter，它就根据表中的地址继续查找启动目录 Booting Catalog，再根据其中描述的启动入口 Boot Entry 找到相应的启动磁盘映像 Bootable Disk Image 或启动引导文件，找到启动磁盘映像后，读取其中的数据，并执行相应的开机动作。

对于 6.828 这门课程，只关注传统的硬盘引导机制，这意味引导程序只有 512 字节，还包括引导标记。源代码是汇编语言编写的，boot/boot.S，还有一个 C 语言代码 boot/main.c，应该通读这两个代码文件，并理解其中的代码含义。

引导程序的主要功能如下：

- 首先，将 CPU 从实地址模式切换到 32-bit 保护模式下运行，以支持 32-bit 内存寻址能力，打破 1MB 边界。Intel 手册有详细说明，在里需要了解保护模式下，原来的段基址加偏移的寻址机制 segment:offset 将替换为虚拟内存模式，偏移值由 16-bit 变为 32-bit。
- 其次，引导程序直接访问 IDE 磁盘，加载其中的内核数据到内存，x86 提供了专用的 I/O 指令，参考 IDE hard drive controller，课程参考资料页面有关于 ATA/ATAPI 设备的参考资料。对于操作系统课程，针对特定设备编程不是特别重要的事，但是实践设备驱动程序却非常重要，这涉及到操作系统的硬件抽象层。

明白这些后，可以去看编译器生成的汇编程序 obj/boot/boot.asm，也就是真实运行的引导程序，可以观察到代码具体对应的内存地址，并且很容易通过 gdb 来跟踪代码的执行。另外的 obj/kern/kernel.asm 则包含了 JOS 内核的完整汇编代码，在调试时非常有用。

这里是 Exercise 3 部分的内存，应该参考 lab tools guide，特别是 gdb 的使用部分。 

通过 gdb 的 b 命令可以给指定的内存地址下断点，如 `b *0x7c00` 将断点设置在 0x7C00 这个地址上，只要再执行 c 命令就会在 CPU 到达这时中断程序的执行。在 QEMU 运行代码时，也可以在 gdb 调试界面按 Ctrl-C 来中断，使用 si N 可以执行 N 个指令后中断。

要检查内存的指令，可以使用 gdb 的 x/Ni ADDR 命令，N 为指定的指令数，ADDR 指定内存地址，可以使用 EIP。

前面设置在 0x7c00 的断点会在引导扇区程序执行时生效，追踪汇编代码文件在 boot/boot.S，或反汇编代码 obj/boot/boot.asm。配合 gdb 的 x/i 命令来查看内存中的引导程序的反汇编指令，对比与反汇编文件的指令。

追踪进入 boot/main.c 文件的 bootmain() 函数，然后进入 readsect()，明确相应的汇编指令。然后，再从 readsect() 函数返回 bootmain()，指出循环体读取内核数据的代码相应的汇编。并且找到，读取数据后会执行什么代码，并且设置断点进行跟踪，然后单步跟踪到引导程序结束。

需要解答以下问题：

- 32-bit 处理器的首条指令在什么位置？从 16-bit 实模式切换到 32-bit 保护模式是通过什么实现的？
- 引导程序的最后一条指令是什么？刚加载内核的第一条指令是什么？
- 内核的第一条指令在哪里？
- 引导程序如何确定要加载多少个扇区以完整将内核读入内存？是从哪里找到相关信息的？

这里，学习一下 Intel 手册中的指令表的使用，并且认识指令结构，对于操作系统工程来说其作用可能不是很大，对于底层比如 BIOS 开发可能会更有帮助。

来看一幅简图吧，一条经典的 IBM 汇编指令格式会按如下的方式编写，可以将它进行拆解分不同的零件：

    mov word ptr es:[eax + ecx * 8 + 0x11223344], 0x12345678
        -------- --- ---   ---  --   -----------  ----------
           |      |   |     |    |        |            |
           |      |   +-----|----|--------|------------|------> base
           |      |         +----|--------|------------|------> index
           |      |              +--------|------------|------> scale
           |   segment override           +------------|------> displacement
       operand-size override                           +------> immediate
    
    operand-size override： 66H -- prefix    前缀码，指示操作数的大小
    segment override:       26H -- prefix   段地址前缀
    base:                   SIB.base  = 000 基址，和后面紧跟的二者合称为 SIB
    index:                  SIB.index = 001 索引地址，SIB中的一部分
    scale:                  SIB.scale = 11  比例因子，可取值 2 4 8等
    displacement:           44 33 22 11     地址偏移值
    immediate:              78 56 34 12     立即数，和机器码一起存放的操作数

每条指令对应的 OpCode 是什么，可以使用几个操作数，什么样的操作数，什么样的寻址方式，这些都是规定好的。

因为 x86 是 CISC 架构，所以操作码可能多达 3 个字节，指令构造按以下简图展示，包括操作码 Opcode、操作数 Operand 的编制：

    +-------------------------------------------------------------------+
    | Prefixes | Opcode |  ModR/M  |   SIB   | Displacement | Immediate |
    +-------------------------------------------------------------------+
         |         |         |          |           |             |
         |         |         |          |     1, 2 or 4 bytes     |
         |   1, 2 or 3 bytes |          |        Address          |
         |                   |          |      displacement       |
    1 byte each (optional)   |          |                         |
                             |          |               Immediate data of
    +-----------1-byte-------+-----+    |           1, 2, or 4 bytes data
    | Mod  | Reg/Opcode|    R/M    |    |
    +------------------------------+    |+------------1-byte------------+
     7   6   5    4   3   2   1   0     +| Scale |   Base   |   Index   |
                                         +------------------------------+
      R/M = Register/Memory                7   6   5   4  3   2   1   0
    
    1. 对于前缀部分，REX 前缀码可选的；VEX 编码信息参考手册 Volume 2 - 2.1 REX Prefixes；
    2. 对于偏移和立即数部分，有少量指令可以携带 8 字节数据(immediate or displacement)；
    3. 除了操作码 Opcode 外，指令的其它部分都是可选的；
    4. 来源:Figure 2-1. Intel 64 and IA-32 Architectures Instruction Format

这个指令格式适用于保护模式、虚拟86模式和实模式下，其中 ModR/M 和 SIB 两部分有大用处，透过这两项可以确定操作数、寻址方式与指令机器码一一映射对应起来。ModR/M 是绝多数指令都会有的，少量指令如 NOP 这个就只有操作码 90。

在 64-bit 架构还有 IA-32E MODE，指令增加了 Legacy Prefixes，且细分为：

- Compatibility Mode 兼容模式可以让操作系统运行传统的保护模式的软件。
- 64-Bit Mode 让 64-bit 操作系统下运行的软件支持 64-bit 寻址空间。

手册中有三个很重要的表，就是关于它们如何将寻址方式与机器码映射起来的，这三张表就称为寻址模式编码表，这里称为寻址映射表，Addressing-Mode Encoding 包含 ModR/M 和 SIB，鉴于这个意义，指令格式的 ModR/M 这部分就可以称作**寻址模式码**。

- Table 2-1. 16-Bit Addressing Forms with the ModR/M Byte
- Table 2-2. 32-Bit Addressing Forms with the ModR/M Byte
- Table 2-3. 32-Bit Addressing Forms with the SIB Byte

例如，将一个编码为 C8H 的寻址模式码分解为相应的各个分量：

                     Mod 11
                     RM 000
    /digit (Opcode); REG = 001
                     -------------
                     C8H 11 001000

    Figure 2-2. Table Interpretation of ModR/M Byte (C8H)

然后，根据这个分解值查表获取相应的寻址方式及使用到的寄存器，而这个编码后的值 C8H 也就是表格中的一个值。

另外，说明一下 /digit，即 /1 到 /7 这样的表达，它是约束 ModR/M 为 r/m 操作数，所以可以当作 REG 来看待，它们有一一对应关系。查指令表时会有看到类似 81 /2 iw，就表示第一个操作数约束为 r/m 类型，第二个操作数据为 word 16-bit 立即数。

下面开始代码分析，从第一条指令开始，注意这是 BIOS 的第一条指令，并不是主角。真正的主角在 `0x7C00` 这个地址上，这个约定成俗的引导程序入口，注意不要将断点下在 `0xf7c00`，即使用在 16-bit 主机上，它们也在不同的地址。引导程序的加载的代码段是内存的最开始的位，代码段寄存器 CS = 0。

通过内存检查命令将第一指令的反汇编，以及原始操作码打印出来：

    (gdb) x/i 0xffff0
       0xffff0:     ljmp   $0x3630,$0xf000e05b

    (gdb) x/8xb 0xffff0
    0xffff0:        0xea    0x5b    0xe0    0x00    0xf0    0x30    0x36    0x2f

注意，gdb 反汇编显示的 $ 表示一个地址，即一个指针。跟踪这条指令，会跳转到 0xf000:e05b 位置，即 CS = F000H，EIP = E05BH，而 $0x3630 这个操作数据根本没有用，这实在令人困惑，而心底想一探究竟的想法才更挠人。

可以看到这条指令是 32-bit 的远跳转，它可以跳转到其它段地址内。根据指令的操作码结构，可以知道，这条指令带有 6 个字节的操作数。虽然在 gdb 中反汇编出来的指令叫做 ljmp，但其实它就是 Far Jump，根据操作码对应的是 EA cp，即 JMP ptr16:32 这种形式，整条指令由 7 个字节构成。

进入 x64 处理器时代后，引入了新的 Long Mode，Intel 手册里叫做 IA-32e Mode，又细分为 64-Bit Mode 和 Compatibility Mode，而传统的三种模式则被统称为 Compat/Legacy Mode，包括 Virtual-8086 Mode，Protected Mode，Real-Address Mode。

因为 Long Mode 使用 64-bit 虚拟地址，所以不管是 64-Bit Mode 还是 Compatibility Mode 的，都要求操作系统和工具链必须支持 64-bit，其中 64-Bit Mode 又要求应用程序也得是 64-bit。

参考 Intel 手册的跳转指令表，JMP 也叫无条件跳转指令：

    JMP—Jump
    |    Opcode   | Instruction  | Op/En | 64-Bit Mode | Compat/Leg Mode |                   Description                  |
    |-------------|--------------|-------|-------------|-------|----------------------------------------------------------|
    | EB cb       | JMP rel8     | D     | Valid       | Valid | 短跳转，RIP = RIP + 8-bit 偏移，符号扩展至 64-bits         |
    | E9 cw       | JMP rel16    | D     | N.S.        | Valid | 近跳转，相对，相对偏移下一条指令，不支持 64-bit 模式。        |
    | E9 cd       | JMP rel32    | D     | Valid       | Valid | 近跳转，相对，RIP = RIP + 32-bit 偏移符号扩展至 64-bits    |
    | FF /4       | JMP r/m16    | M     | N.S.        | Valid | 近跳转，间接绝对, 地址 = 零值扩展 r/m16，不支持 64-bit 模式。|
    | FF /4       | JMP r/m32    | M     | N.S.        | Valid | 近跳转，间接绝对, 地址来自 r/m32 不支持 64-bit 模式。        |
    | FF /4       | JMP r/m64    | M     | Valid       | N.E.  | 近跳转，间接绝对, RIP = 64-Bit 来自寄存器或内存的偏移值。    |
    | EA cd       | JMP ptr16:16 | D     | Inv.        | Valid | 远跳转，绝对，地址在操作数据中给出。                         |
    | EA cp       | JMP ptr16:32 | D     | Inv.        | Valid | 远跳转，绝对，地址在操作数据中给出。                         |
    | FF /5       | JMP m16:16   | D     | Valid       | Valid | 远跳转，间接绝对，地址在 m16:16                            |
    | FF /5       | JMP m16:32   | D     | Valid       | Valid | 远跳转，间接绝对，地址在 m16:32                            |
    | REX.W FF /5 | JMP m16:64   | D     | Valid       | N.E.  | 远跳转，间接绝对，地址在 m16:64                            |

    Instruction Operand Encoding
    | Op/En |   Operand 1   | Operand 2 | Operand 3 | Operand 4 |
    |-------|---------------|-----------|-----------|-----------|
    | D     | Offset        | NA        | NA        | NA        |
    | M     | ModRM:r/m (r) | NA        | NA        | NA        |

跳转指令具有多种形式：

- 短跳转，Short jump，跳转范围限定在当前 EIP 指示位置的 –128 到 +127 地址偏移值。
- 近跳转，Near jump，只会跳到 CS 段地址内的某一个位置，有时也称为 intrasegment jump。
- 远跳转，Far jump，可以在不同的段地址跳转，需要相同特权级，也称为 intersegment jump。
- 任务切换跳转，Task switch，可以跳转到不同任务下的指令处，只能在保护模式下。

要注意 Real-Address 和 Virtual-8086 模式下的 Far Jumps，目标操作数指定一个直接地址 (ptr16:16 or ptr16:32) 或者通过内存的间接地址 (m16:16 or m16:32)。

根据直接或间接地址，被调用的指令地址包含在以下位置：

- 4 字节的 ptr16:16 一个 16-bit 操作数中，或者 6 字节的 ptr16:32 一个 32-bit 操作数中。
- 4 字节的 m16:16 一个 16-bit 操作数中，或者 6 字节的 m16:32 一个 32-bit 操作数中。

远地址直接加载到 CS 和 EIP 寄存器上，如果操作数是 16-bit，那么 EIP 的高位的两个字节被清零。

接下来执行的指令：

    (gdb) si 2
    [f000:e062]    0xfe062: jne    0xd241d0b2

    (gdb) x/8i 0xfe05b
       0xfe05b:     cmpw   $0xffc8,%cs:(%esi)
       0xfe060:     bound  %eax,(%eax)
       0xfe062:     jne    0xd241d0b2
       0xfe068:     mov    %edx,%ss
       0xfe06a:     mov    $0x7000,%sp
       0xfe06e:     add    %al,(%eax)
       0xfe070:     mov    $0x7c4,%dx
       0xfe074:     verw   %cx

    (gdb) i r $eflags
    eflags         0x46                [ IOPL=0 ZF PF ]

比较指令影响标志位 CF, OF, SF, ZF, AF, PF，条件跳转 JNE 或 JNZ 在 ZF 清零时，即逻辑上两数不相等执行跳转，而 JE 或 JZ 在 ZF 置位时，即逻辑上不相等时跳转。

ZF 标志表示 CPU 执行指令后结果不否为 0，如果 ZF 置位就表示不为零。在使用逻辑测试指令 test 进行逻辑与运算结果为零就置位 ZF 标志，而比较指令时 cmp 指令进行算术减法运算结果为零才值位 ZF 标志。

但是这里，gdb 反汇编出来的 jne 指令有误，实际运行表明有一条 xor 指令被忽略了：

    (gdb) x/8xb 0xfe062
    0xfe062:        0x0f    0x85    0x4a    0xf0    0x31    0xd2    0x8e    0xd2

    (gdb) si
    [f000:e066]    0xfe066: xor    %edx,%edx
    (gdb) si
    [f000:e068]    0xfe068: mov    %edx,%ss

这就是使用 CPU 架构不匹配导致的指令解析不正确，即使用 set architecture i8086 也不起效果，在 x86_64 架构上运行和编译的 JOS 内核。

可以通过进制数据比较，查手册 0F 85 指令有三种形式，但都是相对跳转，只有一个操作数，16-bit 或 32-bit 偏移，显然这里是 16-bit 的偏移。另外的两个字节 0x31 对应 XOR 指令，0xd2 对应指令的 ModRM:r/m (r, w) 寻址模式字节，查表也可以知道对应的操作数据是 EDX 寄存器直接寻址。

直接给引导程序入口下断点，并直接执行 BIOS 程序直到引导程序部分，可以将原始数据打印出来，与 obj/boot/boot 中的机器码进行比对：

    (gdb) b *0x7c00
    Breakpoint 1 at 0x7c00
    (gdb) c
    Continuing.
    [   0:7c00] => 0x7c00:  cli    

    (gdb) i r cs
    cs             0x0                 0
    (gdb) x/32xh $eip
    0x7c00: 0xfcfa  0xc031  0xd88e  0xc08e  0xd08e  0x64e4  0x02a8  0xfa75
    0x7c10: 0xd1b0  0x64e6  0x64e4  0x02a8  0xfa75  0xdfb0  0x60e6  0x010f
    0x7c20: 0x6416  0x0f7c  0xc020  0x8366  0x01c8  0x220f  0xeac0  0x7c32
    0x7c30: 0x0008  0xb866  0x0010  0xd88e  0xc08e  0xe08e  0xe88e  0xd08e

根据代码，先是中断、方向标志两清：

- CLD -- Clear Direction Flag
- CLI -- Clear Interrupt Flag

然后是清零段寄存器，DS, ES, SS，然后准备转换保护模式，不过在此之前需要解决一个因向后兼容而残留的 A20 Gate 问题。

在 IBM PC 最初推出的时候，使用的 Intel 8088 芯片的地址线只有 20 根，内存上限 1MB，寻址空间最大到 FFFFFH。当时作了一个相当恶搞的决定，就是当地址超出超出 0x100000 寻址范围时，即第 21 条地址线将被清零，将默认地环绕回到 1MB 的范围，相当对地址进行了 1MB 求模。比如，10FFEFH 这个地址就会绕回 FFEFH，即砍掉了 1MB 范围外的部分。

到 1985 年 Intel 80286 CPU 引入 24 根地址线时，最高可寻址 16MB，但向后兼容保持了 8088 那样实现地址寻址的环回。而且当时已经有一些程序在利用这种环绕机制进行工作，所以为了实现完全的兼容性，IBM 公司发明了使用一个开关来开启或禁止环回机制。由于当时的 8042 键盘控制器上恰好有空闲的端口引脚，输出端口 P2，引脚 P21，于是利用作为与门开关，来控制这个地址环回机制。该信号也被称为 A20，设置为 disabled 状态，对应第 21 条地址线信息被清零，从而实现了兼容性。

但这个补丁并不是那么好用，超过 1MB 以上的地址是不可被完全访问，只能访问奇数 MB 地址。要访问所有内存，就必须向键盘控制器 8082 发送一个命令，将 A20 线置于高电位，使全部 32-bit 地址线正常可用。只有全部内存可以访问，进入保护模式才有意义。

对于键盘驱动，最重要的硬件是两个芯片，一个是位于主板的 Intel 8042 芯片，CPU 通过 I/O 端口直接和这个芯片通信，获得按键的扫描码或者发送各种键盘命令。另一个是 Intel 8048 芯片或者其兼容芯片，位于键盘中，这个芯片主要作用是从键盘的硬件中得到被按的键所产生的扫描码，与 8042 通信，控制键盘本身。

8042 有 4 个 8 bits 的寄存器，Status Register，Output Buffer，Input Buffer，Control Register。

使用两个 I/O 端口与键盘芯片通信，通过 in、out 两个指令分别对 0x64、0x60 两个端口进行读写：

- 60h 驱动中称为数据端口，对应输入、输出缓冲区。
- 64h 驱动中称为命令端口，对应状态寄存器、控制寄存器。

所谓 I/O 端口，是不是就像机箱上看到的那样的端口呢？其实，这是有点抽象的概念，可以认为是。端口就是方便接线的接口，根本还是在于线路的存在，而 CPU 定义的端口也是线路的概念，线路接到 CPU 指定的什么位置就是什么端口，而 CPU 支持 16-bit 即 16 条线路的端口组合，所以最大端口号为 65535。

状态寄存器任何时刻均可通过 0x64 端口读取，各位定义如下：

- bit 7: PARITY-EVEN(P_E): 从键盘获得的数据奇偶校验错误
- bit 6: RCV-TMOUT(R_T): 接收超时，置位
- bit 5: TRANS_TMOUT(T_T): 发送超时，置位
- bit 4: KYBD_INH(K_I): 置位，键盘没有被禁止。清零，键盘被禁止。
- bit 3: CMD_DATA(C_D): 置位，输入缓冲器中的内容为命令，清零，输入缓冲器中的内容为数据。
- bit 2: SYS_FLAG(S_F): 系统标志，加电启动清零，自检通过后置位
- bit 1: INPUT_BUF_FULL(I_B_F): 输入缓冲器满置位，i8042 取走后清零
- bit O: OUT_BUF_FULL(O_B_F): 输出缓冲器满置位，CPU 读取后清零

驱动可以直接给 i8042 发命令，可以通过 i8042 间接给 i8048 发命令。

发给 i8042 的命令，即对键盘控制器发送命令，就是写 64h 端口，共有 12 条命令：

- 20h 告知芯片准备 Command Byte 于 Output Register 中以待读取，下一步从 60H 端口读数据。
- 60h 告知芯片准备接收 Command Byte，下一步应该往 60h 端口写入相应的数据。
- A4h 测试是否设置了键盘密码，FAh 指设置了密码，F1h 指没有密码，可以通过 60h 端口读取结果。
- A5h 设置键盘密码，按照顺序往 60h 端口写入密码，密码的最后是一个 0 值字节，表示结束。
- A6h 让密码生效，在发布这个命令之前，必须首先使用 A5h 命令设置密码。
- AAh 自检，诊断结果放置在 Output Register 中，可以通过 60h 读取，55h=OK。
- ADh 禁止键盘接口，Command Byte 的 bit-4 置位，Keyboard 被禁止发送数据到 Output Register。
- AEh 打开键盘接口，Command Byte 的 bit-4 清零，Keyboard 被允许发送数据到 Output Register。
- C0h 准备读取 Input 端口，内容放在 Output Register，随后通过 60h 端口读取。
- D0h 准备读取 Outport 端口，结果放在 Output Register，随后通过 60h 端口读取。
- D1h 准备写 Output 端口，随后往 60h 端口写入的字节，会被放置在 Output Port 中。
- D2h 准备写 Output Register，随后往 60h 写入到 Input Register 的字节也会放入 Output Register，模拟来自于 Keyboard 发送的数据。如果中断被允许，则会触发一个中断。

发给 8048 的命令共有 10 条命令：

- EDh 设置 LED。Keyboard 收到此命令后，首先回复一个 ACK（FAh），然后等待从 60h 端口写入的 LED 设置字节，如果等到一个，则再次回复一个 ACK，然后根据此字节设置 LED，直到等到一个非 LED 设置字节(高位被设置)，此时 LED 设置会话结束。
- EEh 诊断 Echo。此命令纯粹为了检测 Keyboard 是否正常，如果正常，当 Keyboard 收到此命令后，将会回复一个 EEh 字节。
- F0h 选择 Scan code set，当 Keyboard 收到此命令后，将回复一个 ACK，然后等待一个来自于 60h 端口的 Scan code set 代码。系统必须在此命令之后发送给 Keyboard 一个代码。收到此代码后，将再次回复一个 ACK，然后将 Scan code set 设置为收到的代码。
- F2h 读取 Keyboard ID。设备 ID 为 2 个字节，Keyboard ID 为 83ABh，可用于判断连接的输入设备类型。当键盘收到此命令后，会首先回复一个ACK，然后将 ID 一个一个回复回去。
- F3h 设置 Typematic Rate/Delay。当 Keyboard 收到此命令后，将回复一个 ACK。然后等待来自于 60h 的设置字节。一旦收到，将回复一个 ACK，然后设置相应的值。
- F4h 清理键盘的 Output Buffer，清空后会回复一个 ACK。
- F5h 设置为初始化默认状态(w/Disable)。之前所有对它的设置都将失效 Output buffer 被清空，Typematic Rate/Delay 被设置成默认值。然后回复一个 ACK，接着等待下一个命令。需要注意的是，这个命令被执行后，键盘的击键接受是禁止的。如果想让键盘接受击键输入，必须 Enable Keyboard。
- F6h 设置默认状态。和 F5 命令唯一不同的是，当此命令被执行之后，键盘的击键接收是允许的。
- FEh 再次重发数据，Resend。将上次送到 8042 Output Register 中的数据重新发送一遍。
- FFh 重置 Reset Keyboard。如果Keyboard收到此命令，则首先回复一个ACK，然后启动自身的Reset程序，并进行自身基本正确性检测（BAT-Basic Assurance Test）。等这一切结束之后，将返回给系统一个单字节的结束码（AAh=Success, FCh=Failed），并将键盘的 Scan code set 设置为 2。


引导程序判断 8042 缓冲区的第 2 个 bit，如果置位表示 busy 状态，跳到 seta20.1 符号处循环执行。

      # Enable A20:
      #   For backwards compatibility with the earliest PCs, physical
      #   address line 20 is tied low, so that addresses higher than
      #   1MB wrap around to zero by default.  This code undoes this.
    seta20.1:
      inb     $0x64,%al               # Wait for not busy
      testb   $0x2,%al
      jnz     seta20.1

      movb    $0xd1,%al               # 0xd1 -> port 0x64
      outb    %al,$0x64

    seta20.2:
      inb     $0x64,%al               # Wait for not busy
      testb   $0x2,%al
      jnz     seta20.2

      movb    $0xdf,%al               # 0xdf -> port 0x60
      outb    %al,$0x60

直到缓冲区为空，test 指令将其值与 0x2 进行逻辑与运算结果为 0，则 ZF 置位，后继的 JNZ 不会跳转，并写入 0xd1 到 0x60 端口激活 A20。

打开 A20 Gate 后，CPU 可以寻址所以有效地址空间，接下来就准备进入保护模式。保护模模式下使用的是虚拟内存机制，需要构建好全局描述符表数据 gdtdesc，参考 JOS 的头文件中的宏定义。

然后通过 lgdt 指令装入相应的寄存器，描述符表是相当抽象的数据结构，它的目的就是为虚拟内存机制服务的。软件通过指令向 CPU 下达内存读写指令，然后经过 MMU 内存管理单元将逻辑地址 Virtual Address 转换为物理内存地址，这里涉及复杂的数据结构。

例如，机器没有 4GB 物理内存，但软件还是可以是 4GB 内存寻址空间，那么在处理虚拟地址时，就需要映射到真实的内存地址上，甚至是更复杂的基于磁盘缓存区的虚拟内存。

这其中涉及到两个主要步骤，段转译，和分页映射机制，当然课程提供的程序并没有打开分页机制，所以线性地址直接映射到物理地址上：

    ===========
    |         | Selector ===============         ===============         ========
    |         +---------->             |         |             |         |      |
    |   CPU   | Offset   | Segment     +---------> Page        +---------> RAM  |
    |         +----------> Translation |         | Translation |         |      |
    |         | Virtual  =============== Linear  =============== Physics ========
    =========== Address                  Address                 Address

在启用 CPU 内存管理单元后，程序不再地直接访问内存，而此前，程序使用的内存访问模型有以下三个：

    Flat Model
    ================================================
                             Linear Address |      |
    Linear Address ------------------------>|++++++|
                                            |      |
                                            | RAM  |
                                            ========

    Segmented Model
    ================================================
                             Linear Address |      |
                                            |++++++|
                                            |++++++|
                         ===========        |      |
              Offset --->| Segment |------->| RAM  |
    Segment Selector --->|---------|        |++++++|
    ================     |   ...   |        |++++++|
    Logical Address      |---------|        |      |
                         | Segment |------->|      |
                         ===========        ========

    Real-Address Mode Model
    ================================================
                                            | ...  |
                                            |------|
                                            |      |
                             Linear Address |      |
              Offset ---------------------->| RAM  |
    Segment Selector ---------------------->|------|
    ================        Space Divided   |      |
    Logical Address         Into Equal      |      |
                            Sized Segments  |      |
                            Address         ========

    Figure 3-3. Three Memory Management Models

展平模型 Flat memory model，内存对于程序就是一个完整连续空间，即线性地址空间，按字节寻址，代码、数据、调用栈全都在这个空间里。在这个线性连续空间的任体一个字节的地址都叫线性地址，如果不是 64-bit 架构，最大可寻址 2^32 共 4GB。

分段模型，分段的内存对程序来说就是独立的地址空间，代码、数据、堆栈通常在另外的段中。程序使用逻辑地址，看作为 far pointers。段选择器标识访问哪个段，而 ofsset 指向段中的字节地址，所以偏移值又称为有效地址(effective address)。在 IA-32 上运行的程序可以寻址多达 16,383 个大小不等不同类型的的分段，每段最大 2^32 字节。

展平模型和分段模型的线性地址可以使用分页机制。

在 CPU 内部，所有系统定义的段都映射到处理器的线性地址空间，要访问一个内存地址，CPU 就要将逻辑地址转换为线性地址，转换过程对程序是透明的。

使用分段模型的主要目的是提升系统的可靠性，例如，将一个程序的调用栈放到另外一个分段上，就很好地避免了堆栈溢出带来的风险，避免了代码或数据被纂改。

实地址模型，这是最早的 Intel 8086 处理器使用的模型，实模式下的寻址方式，直接使用 segment:offset 的方式进行真实内存地址访问，使用的是专用的分段内存，提供一组最多只有 64KB 的分段。在这种情况下，任何程序都能访问最大，也是全部 1MB 的空间，相当于内存是公开没有保护的。

进入保护模式使用内存管理单元后，内存寻址就不再使用段基址加偏移的方式，而是使用逻辑地址，即机器支持的寻址空间上的地址，而不是真实物理内存的地址。

而进入保护模式后，通过 GDT/LDT 分段映射的方式，程序并不能访问整个物理内存空间，即已经被其它程序使用的内存就不会再被使用。

GDT - Global Descriptor Table 全局描述符表就是在保护模式下虚拟内存寻址中的重要环节。

GDT 中每一项叫做段描述符 Segment Descriptor，用来记录每个内存分段的一些属性信息，每个段描述符占 8 字节。

在保护模式下，内存空间被分割为了一个又一个可以重叠的段记录在 GDT，不同的程序访问内存时，通过 GDT 映射到不同的内存空间，这样就保护了内存安全。

以下是启用分页机制下的逻辑地址到物理地址的流程图：

    Logical Address                         Linear Address                           Physical Address
    ========================                ==========================               ======================
    | 16-bit        32-bit |                | 10-bit  10-bit  12-bit |               | 20-bit      12-bit |
    | Selector      Offset |------> + ----->| Dir     Table   Offset |               | PPN         Offset |
    ===+====================        ^       ===+========+========+====               ===^=============^====
       |                            |          |        |        |                      |             |
       |           +----------------+          |        |        +----------------------|-------------+
       |           |                           |        +----------------+              |
       |         32-bit  20-bit  12-bit        |                         |        20-bit|  12-bit
       |        =======|=======|========       |                         |        ======|=|======
       |        | ---- | ----- | ----- |       |                         |   1023 |-----|-|-----|
       |        | ---- | ----- | ----- |       |       20-bit   12-bit   +------> | PPN + |FLAGS|
       |        | ---- | ----- | ----- |       |       ========|======            | ..... | ... |
       |        | ---- | ----- | ----- |       |  1024 |-------|-----|          0 |-------|-----|
       |     16 | ---- | ----- | ----- |       |       |-------|-----|       +--->========|======
       +----> 8 | Base | Limit | Flags |       |       |.......|.....|   PPN |       Page Table
              0 | ---- | ----- | ----- |       +---->3 | PPN   |FLAGS|-------+
       GDTR --> =======|=======|========             2 |-------|-----|---> Page Table
                        GDT/LDT                      1 |-------|-----|---> Page Table
                                                     0 |-------|-----|---> Page Table
    Volume 3                               CR3 ------> ========|======
    Figure 3-1. Segmentation and Paging                Page Directory

在整个转换过程从程序使用的 Logical Address 或 Far Pointer 开始：

- 先将逻辑地址中的选择器部分通过 GDT/LDT 映射后再与偏移部分叠加形成一个线性地址。
- 线性地址再分解为 Dir/Table/Offset 三部分。
- 根据 CR3 控制寄存器指定的分页目录表并找到 Dir 对应的记录并定位到 Page Table。
- 根据线性地址的 Table 部分定位到 Page Table 对应的记录并获得最最终的 PPN - Physical Page Number。

整个过程经过了分段处理，再分页映射得到最终的物理内存地址，注意分页目录表里的 PPN 是指 Page Table Physical Page Number，它指向一个内存分页表，而内存分页表中的 PPN 是分页的物理内存所在地址，Address of 4KB page frame。根据这个映射关系，一个分页目录就可以映射 1023 * 1024 * 4KB = 4GB - 4MB 空间，而新 CPU 架允许分页可以不是固定的 4KB。

Page Directory 和 Page Table 的数据记录结构很相似，并且它们都最多记录 1024 条信息，带有以下这些标志：

- `P`   Present
- `W`   Writable
- `U`   User
- `WT`  1=Write-through, 0=Write-back
- `CD`  Cache disabled
- `A`   Accessed
- `D`   Dirty
- `PS`  Page size (0=4KB, 1=4MB)
- `PAT` Page table attribute index
- `G`   Global page
- `AVL` Available for system use


参考手册内容：

- Volume 3 - Chapter 2 System Architecture Overview
- Volume 3 - Chapter 3 Protected-Mode Memory Management
- Volume 3 - Chapter 4 Paging
- Volume 3 - Chapter 20 8086 Emulation 专门描述 Real-address mode 和 Virtual-8086 mode。

内存分段描述符表只有 GDT/LDT 两种，参考手册 Volume 3 - 3.5.1 Segment Descriptor Tables。

对应的各种描述符寄存器内容在手册 Volumen 3 - CH2 System Architecture Overview。

每个系统有且仅有一个 GDT，但可以有多个 LDT，LDT 可以被单独的任务使用，也可以共享使用。

关于 CPU 的 5 控制寄存器，CR0 CR1 CR2 CR3 CR4，在 64-bit 架构上还有 CR8，这些控制寄存器涉及内存分布机制的设置，请参考 Intel 手册 Volume 3 - 2.5 Control Registers。

段描述符表起始地址保存在 GDTR 寄存器中，其中高 32-bit 或者 64-bit 为基地址，低 16-bit 为段界限，即包含描述符表的长度信息，共 48-bit 或者 64 位架构上 80-bit。这里只需要使用 lgdt 指令载入程序中静态存储在引导区的 GDT 表和其描述符到 GDTR 寄存器，到此 GDT 就准备好了。

因为 GDTR 寄存器指定的 GDT 描述符表的边界部分只有 16-bit 最大可以表示 65536 个数，而且是按字节计数，一个段描述符占 8 字节，所以 GDT 最多可以有 8192 个段描述符。

在源代码 boot.S 中，全局描述符数据以静态数据方式定义，名称为 gdtdesc 和描述符表 gdt 一起定义代码文件的最底部：

    # Bootstrap GDT
    .p2align 2                                # force 4 byte alignment
    gdt:
      SEG_NULL              # null seg
      SEG(STA_X|STA_R, 0x0, 0xffffffff)     # code seg
      SEG(STA_W, 0x0, 0xffffffff)           # data seg

    gdtdesc:
      .word   0x17                            # sizeof(gdt) - 1
      .long   gdt                             # address gdt

SEG 宏定义会构造出段描述符，其结构参考 Figure 3-8. Segment Descriptor，其中基址部分会被拆散为 3 块，段边界也会拆分为 2 块，还有其它段描述符属性等组合构成。

按照手册所述，描述符表 GDT 的首个记录不使用，所以置空。然后，紧接着定义了代码、数据两个段描述符，并通过宏设置相应段属性。

其中 gdtdesc 定义的值会通过 LGDT 指令加载到 GDTR 寄存器中，包含两个值 GDT 在内存的位置，及其包含的段描述符占用的字节数。这里的 0x17 表示有点奇怪，正常来讲，包括开头的一个空值，应该有 3 个段描述符的字节数，应该是 0x18。

代码中，定义了两个段选择器，其中 PROT_MODE_CSEG 值为 0x8，根据段选择器的格式定义，0x8 就划分为 3 个部分：

    .set PROT_MODE_CSEG, 0x8         # kernel code segment selector
    .set PROT_MODE_DSEG, 0x10        # kernel data segment selector

    0000 0000 0000 0100
    ----------------    -> INDEX 代表 GDT 中的索引
                    -   -> TI - Table Indicator, 0 = GDT, 1 = LDT
                     -- -> Requested Privilege Level (RPL)
    
使用 PROT_MODE_CSEG 选择器，表示选择 GDT 中的第 1 个段描述符，索引号为 0，因为 GDT 中开头一个为 Null 描述符，不为 CPU 使用，所以直接将位于第二的记录称为第一个有效的描述符。

可以看到 gdt 定义的两个段描述符的基地址都是 0x0，所以经过映射后和转换前的内存映射的物理地址一样，就像没有使用段描述符一样，同时 JOS 中的代码也没有激活复杂的内存分页机制，所以在这里的内存管理还不算是最复杂的。

加载好全局描述符表后，就可以将保护模式标志位激活，只需要置位 CR0 的首个 bit 即 Protedted Enable 表示开启 CPU 的保护模式：

      # Switch from real to protected mode, using a bootstrap GDT
      # and segment translation that makes virtual addresses 
      # identical to their physical addresses, so that the 
      # effective memory map does not change during the switch.
      lgdt    gdtdesc
      movl    %cr0, %eax
      orl     $CR0_PE_ON, %eax
      movl    %eax, %cr0
      
      # Jump to next instruction, but in 32-bit code segment.
      # Switches processor into 32-bit mode.
      ljmp    $PROT_MODE_CSEG, $protcseg

      .code32                     # Assemble for 32-bit mode
    protcseg:
      # Set up the protected-mode data segment registers
      movw    $PROT_MODE_DSEG, %ax    # Our data segment selector
      movw    %ax, %ds                # -> DS: Data Segment
      movw    %ax, %es                # -> ES: Extra Segment
      movw    %ax, %fs                # -> FS
      movw    %ax, %gs                # -> GS
      movw    %ax, %ss                # -> SS: Stack Segment
      
      # Set up the stack pointer and call into C.
      movl    $start, %esp
      call bootmain

接下来的代码就进入 C 语言实现的 bootmain 函数，加载内核，并完成内核的引导。


## ⚡ Lab 1: Booting a PC - The Kernel

课程将实验一 Lab 1: Booting a PC 分成三个部分：

- 熟悉 x86 架构的 CPU 指令及汇编语言，熟悉 QEMU x86 emulator 的使用，PC bootstrap 主机加电引导过程。
- 检查实验 6.828 课程用的内核提供的 boot loader 引导程序，在代码仓库的 boot 目录下可以找到。
- 最后，深入研究为本课程服务的 JOS 内核初始模板，可以在 kernel 目录中找到。

这里是第三个部分，深入核心，从引导程序的内核读取部分开始。

这里先列表几个关键代码点：

|   代码文件   |                            关键地址                            |
|--------------|----------------------------------------------------------------|
| qemu/pc-bios | `0xfffffff0` CPU 指定的 BIOS 入口点，16-bit 架构对应 0xffff0。 |
| boot/boot.S  | `0x7c00` 约定俗成的 Boot Loader 入口点，由 BIOS 调用。         |
| boot/main.c  | `0x7c45` call `0x7d25` 准备进入 bootmain 函数加载 JOS 内核。   |
| kern/entry.S | `0x7d81` call (void ( * )(void) `0x10018` 执行内核代码。       |
| kern/init.c  | `0x7d9a` jmp `0x7d9a` 进入 i386_init 初始化内核。              |

内核加载到内存的地址，可以通过 objdump -h obj/kern/kernel 查询，即 start address 0x0010000c。

因为 BIOS 加载引导程序后，会按约定执行 0x7c00 地址的代码入口，所以在编译引导程序时，在 boot/Makefrag 脚本指定 -Ttext 0x7C00 让链接程序生成正确的内存地址。

```rust
#
# Makefile fragment for the JOS kernel.
# This is NOT a complete makefile;
# you must run GNU make in the top-level directory
# where the GNUmakefile is located.
#

OBJDIRS += boot

BOOT_OBJS := $(OBJDIR)/boot/boot.o $(OBJDIR)/boot/main.o

$(OBJDIR)/boot/%.o: boot/%.c
    @echo + cc -Os $<
    @mkdir -p $(@D)
    $(V)$(CC) -nostdinc $(KERN_CFLAGS) -Os -c -o $@ $<

$(OBJDIR)/boot/%.o: boot/%.S
    @echo + as $<
    @mkdir -p $(@D)
    $(V)$(CC) -nostdinc $(KERN_CFLAGS) -c -o $@ $<

$(OBJDIR)/boot/main.o: boot/main.c
    @echo + cc -Os $<
    $(V)$(CC) -nostdinc $(KERN_CFLAGS) -Os -c -o $(OBJDIR)/boot/main.o boot/main.c

$(OBJDIR)/boot/boot: $(BOOT_OBJS)
    @echo + ld boot/boot
    $(V)$(LD) $(LDFLAGS) -N -e start -Ttext 0x7C00 -o $@.out $^
    $(V)$(OBJDUMP) -S $@.out >$@.asm
    $(V)$(OBJCOPY) -S -O binary -j .text $@.out $@
    $(V)perl boot/sign.pl $(OBJDIR)/boot/boot
```

先按 JOS 配置的脚本启动模拟器，无需要图形界面，使用 nox，并且等待 gdb 连接而不是直接运行内核：

```sh
$ make qemu-nox-gdb
***
*** Now run 'make gdb'.
***
qemu-system-i386 -nographic -drive file=obj/kern/kernel.img,index=0,media=disk,format=raw -serial mon:stdio -gdb tcp::26000 -D qemu.log  -S
```

然后，在另一控制台运行 gdb 连接，并直接在 0x7c00 处下断点，这里是引导程序的约定入口：

```rust
$ make gdb
gdb -n -x .gdbinit
...
+ target remote localhost:26000
warning: No executable has been specified and target does not support
determining executable automatically.  Try using the "file" command.
The target architecture is assumed to be i8086
[f000:fff0]    0xffff0: ljmp   $0x3630,$0xf000e05b
0x0000fff0 in ?? ()
+ symbol-file obj/kern/kernel
warning: A handler for the OS ABI "GNU/Linux" is not built into this configuration
of GDB.  Attempting to continue with the default i8086 settings.

(gdb) b *0x7c00
Breakpoint 1 at 0x7c00
(gdb) c
Continuing.
[   0:7c00] => 0x7c00:  cli    

Breakpoint 1, 0x00007c00 in ?? ()
```

以上直接跳过 QEMU 虚拟机提供的 BIOS 程序，进入引导程序，如 Booting from Hard Disk... 信息所提示。

通过内存检查命令将引导程序反汇编：

```rust
(gdb) x/32i $eip
=> 0x7c00:      cli    
   0x7c01:      cld    
   0x7c02:      xor    %eax,%eax
   0x7c04:      mov    %eax,%ds
   0x7c06:      mov    %eax,%es
   0x7c08:      mov    %eax,%ss
   0x7c0a:      in     $0x64,%al
   0x7c0c:      test   $0x2,%al
   0x7c0e:      jne    0x7c0a
   0x7c10:      mov    $0xd1,%al
   0x7c12:      out    %al,$0x64
   0x7c14:      in     $0x64,%al
   0x7c16:      test   $0x2,%al
   0x7c18:      jne    0x7c14
   0x7c1a:      mov    $0xdf,%al
   0x7c1c:      out    %al,$0x60
   0x7c1e:      lgdtl  (%esi)
   0x7c21:      fs jl  0x7c33
   0x7c24:      and    %al,%al
   0x7c26:      or     $0x1,%ax
   0x7c2a:      mov    %eax,%cr0
   0x7c2d:      ljmp   $0xb866,$0x87c32
   0x7c34:      adc    %al,(%eax)
   0x7c36:      mov    %eax,%ds
   0x7c38:      mov    %eax,%es
   0x7c3a:      mov    %eax,%fs
   0x7c3c:      mov    %eax,%gs
   0x7c3e:      mov    %eax,%ss
   0x7c40:      mov    $0x7c00,%esp
   0x7c45:      call   0x7d25
   0x7c4a:      jmp    0x7c4a
   0x7c4c:      add    %al,(%eax)
```

对比 JOS 提供的引导程序的代码，最后一条 jmp 指令就是对应 boot.S 汇编程序的最后 spin 自转循环：

```rust
  # Set up the stack pointer and call into C.
  movl    $start, %esp
  call bootmain

  # If bootmain returns (it shouldn't), loop.
spin:
  jmp spin
```

而 C 语言的 bootmain 函数位置在 0x7d25，即各个段寄存器初始化指令后，call 调用的地址，设置相应断点并跟踪。

这些反汇编代码，也可以通过 objdump 工具从编译器生成的对象文件中提取：

    objdump -drS obj/boot/boot.o

这部分只定义了 4 个函数，包括永不返回的 bootmain，下面将这些函数反汇编，这些指令大部分都是因为函数调用需要管理堆栈产生的：

```rust
(gdb) x/35i $eip
=> 0x7d25:      endbr32                    ; bootmain()                             
   0x7d29:      push   %ebp                                                
   0x7d2a:      mov    %esp,%ebp                                                
   0x7d2c:      push   %esi                                                
   0x7d2d:      push   %ebx                                                
   0x7d2e:      push   %edx                                                
   0x7d2f:      push   $0x0    ; arg3: 0                                            
   0x7d31:      push   $0x1000 ; arg2: SECTSIZE*8                                               
   0x7d36:      push   $0x10000; arg1: &ELFHDR                                               
   0x7d3b:      call   0x7ce2 ; ------------+                                              
   0x7d40:      add    $0x10,%esp           |                                    
   0x7d43:      cmpl   $0x464c457f,0x10000  |                                             
   0x7d4d:      jne    0x7d87 ; ------------|--+                                                
   0x7d4f:      mov    0x1001c,%eax         |  |                                    
   0x7d54:      movzwl 0x1002c,%esi         |  |                                    
   0x7d5b:      lea    0x10000(%eax),%ebx   |  |                                          
   0x7d61:      shl    $0x5,%esi            |  |                                 
   0x7d64:      add    %ebx,%esi            |  |                                 
   0x7d66:      cmp    %esi,%ebx            |  |                                 
   0x7d68:      jae    0x7d81               |  |                              
   0x7d6a:      push   %eax                 |  |                            
   0x7d6b:      add    $0x20,%ebx           |  |                                  
   0x7d6e:      pushl  -0x1c(%ebx)          |  |                                   
   0x7d71:      pushl  -0xc(%ebx)           |  |                                  
   0x7d74:      pushl  -0x14(%ebx)          |  |                                   
   0x7d77:      call   0x7ce2 ; ------------+  |                              
   0x7d7c:      add    $0x10,%esp           |  |                                  
   0x7d7f:      jmp    0x7d66               |  |                              
   0x7d81:      call   *0x10018             |  |                                
   0x7d87:      mov    $0x8a00,%edx ; <-----|--+                                               
   0x7d8c:      mov    $0xffff8a00,%eax     |                                          
   0x7d91:      out    %ax,(%dx)            |                                   
   0x7d93:      mov    $0xffff8e00,%eax     |                                          
   0x7d98:      out    %ax,(%dx)            |                                   
   0x7d9a:      jmp    0x7d9a ; while(1)    |                                          
(gdb) x/31i 0x7ce2                          |           
   0x7ce2:      endbr32 ; <-----------------+ readseg()               
   0x7ce6:      push   %ebp                                      
   0x7ce7:      mov    %esp,%ebp                                      
   0x7ce9:      push   %edi                                      
   0x7cea:      push   %esi                                      
   0x7ceb:      push   %ebx                                      
   0x7cec:      sub    $0xc,%esp                                      
   0x7cef:      mov    0x10(%ebp),%edi ; arg3: offset                                     
   0x7cf2:      mov    0x8(%ebp),%ebx  ; arg2: count                                   
   0x7cf5:      mov    0xc(%ebp),%esi  ; arg1: pa                                    
   0x7cf8:      shr    $0x9,%edi ; offset / SECTSIZE                                     
   0x7cfb:      add    %ebx,%esi                                      
   0x7cfd:      inc    %edi                                      
   0x7cfe:      and    $0xfffffe00,%ebx                                      
   0x7d04:      cmp    %esi,%ebx ; <-------+  while(pa < end_pa) 
   0x7d06:      jae    0x7d1d ; -----------|--+                                     
   0x7d08:      push   %eax                |  |                   
   0x7d09:      push   %eax                |  |                   
   0x7d0a:      push   %edi                |  |                   
   0x7d0b:      inc    %edi                |  | ; offset ++                  
   0x7d0c:      push   %ebx                |  |                   
   0x7d0d:      add    $0x200,%ebx         |  | ; pa += SECTSIZE                         
   0x7d13:      call   0x7c7c ; -----------|--|---+                     
   0x7d18:      add    $0x10,%esp          |  |   |                      
   0x7d1b:      jmp    0x7d04 ; -----------+  |   |                  
   0x7d1d:      lea    -0xc(%ebp),%esp ; <----+   |                                  
   0x7d20:      pop    %ebx                       |               
   0x7d21:      pop    %esi                       |               
   0x7d22:      pop    %edi                       |               
   0x7d23:      pop    %ebp                       |               
   0x7d24:      ret                               |           
(gdb) x/39i 0x7c7c                                |
   0x7c7c:      endbr32 ; <-----------------------+ readsect()
   0x7c80:      push   %ebp
   0x7c81:      mov    %esp,%ebp
   0x7c83:      push   %edi
   0x7c84:      push   %eax
   0x7c85:      mov    0xc(%ebp),%ecx
   0x7c88:      call   0x7c6a ; ------- waitdisk(void)
   0x7c8d:      mov    $0x1,%al
   0x7c8f:      mov    $0x1f2,%edx
   0x7c94:      out    %al,(%dx)
   0x7c95:      mov    $0x1f3,%edx
   0x7c9a:      mov    %ecx,%eax
   0x7c9c:      out    %al,(%dx)
   0x7c9d:      mov    %ecx,%eax
   0x7c9f:      mov    $0x1f4,%edx
   0x7ca4:      shr    $0x8,%eax
   0x7ca7:      out    %al,(%dx)
   0x7ca8:      mov    %ecx,%eax
   0x7caa:      mov    $0x1f5,%edx
   0x7caf:      shr    $0x10,%eax
   0x7cb2:      out    %al,(%dx)
   0x7cb3:      mov    %ecx,%eax
   0x7cb5:      mov    $0x1f6,%edx
   0x7cba:      shr    $0x18,%eax
   0x7cbd:      or     $0xffffffe0,%eax
   0x7cc0:      out    %al,(%dx)
   0x7cc1:      mov    $0x20,%al
   0x7cc3:      mov    $0x1f7,%edx
   0x7cc8:      out    %al,(%dx)
   0x7cc9:      call   0x7c6a ; ------- waitdisk(void)
   0x7cce:      mov    0x8(%ebp),%edi
   0x7cd1:      mov    $0x80,%ecx
   0x7cd6:      mov    $0x1f0,%edx
   0x7cdb:      cld    
   0x7cdc:      repnz insl (%dx),%es:(%edi)
   0x7cde:      pop    %edx
   0x7cdf:      pop    %edi
   0x7ce0:      pop    %ebp
   0x7ce1:      ret

(gdb) x/7i 0x7c6a
   0x7c6a:      endbr32 ; <------------- waitdisk(void)
   0x7c6e:      mov    $0x1f7,%edx
   0x7c73:      in     (%dx),%al
   0x7c74:      and    $0xffffffc0,%eax
   0x7c77:      cmp    $0x40,%al
   0x7c79:      jne    0x7c73
   0x7c7b:      ret    
```

如果执行无误，那么引导程序最后执行的指令应该是控制权移交，即 `call   *0x10018`。这条指令也表明，内核载入内存的位置，内核入口的地址存放在 0x10018 这个内存单元中。因此，可以直接将断点下在 0x7d81 位置，以跟踪内核代码。

至于内核入口地址为何会在这样一个位置保存呢？

留意文件定义的一个 ELF 文件头结构体，它的开始位置硬编码在 0x10000，而结构体中的入口函数定义偏移 24 个字节即 0x18 字节。

    #define ELFHDR      ((struct Elf *) 0x10000) // scratch space

回到这个实验需要解答问题，现在已经可以解答大部分的问题了，还需要找到内核的第一条指令，和加载内核读取了几扇区：

- 32-bit 处理器的首条指令在什么位置？从 16-bit 实模式切换到 32-bit 保护模式是通过什么实现的？
- 引导程序的最后一条指令是什么？刚加载内核的第一条指令是什么？
- 内核的第一条指令在哪里？
- 引导程序如何确定要加载多少个扇区以完整将内核读入内存？是从哪里找到相关信息的？

其实，C 语言代码中已经硬编码读取 8 个扇区：

    struct Proghdr *ph, *eph;

    // read 1st page off disk
    readseg((uint32_t) ELFHDR, SECTSIZE*8, 0);

    // is this a valid ELF?
    if (ELFHDR->e_magic != ELF_MAGIC)
        goto bad;

    // load each program segment (ignores ph flags)
    ph = (struct Proghdr *) ((uint8_t *) ELFHDR + ELFHDR->e_phoff);
    eph = ph + ELFHDR->e_phnum;
    for (; ph < eph; ph++)
        // p_pa is the load address of this segment (as well
        // as the physical address)
        readseg(ph->p_pa, ph->p_memsz, ph->p_offset);

    // call the entry point from the ELF header
    // note: does not return!
    ((void (*)(void)) (ELFHDR->e_entry))();

在准备读取扇区数据时，数据放置在内存什么位置是有要求的，对齐了开始地址，如果前面 ELF 文件头结构体定义的位置不对将会导致入口错位：

    // round down to sector boundary
    pa &= ~(SECTSIZE - 1);

但是内核肯定不止这 4KB 大小，内核包含在一个镜像文件中，这里也就是读取 ELF 格式文件的头部内容。因为我们还不知道整个内核的大小，但是可以通过 ELF 文件头包含的信息解析得到具体的大小。从当前代码也可观察到，所有操作都是 raw 的，不需要使用 C/C++ 提供的内存分配函数，因为现在是整个系统的最底层，所有对内存的操作都是直接读写，没有经过任何内存管理。

同时，这部分内容需要掌握 C/C++ 的指针编程，通过指针直接操作内存。

从 bootmain 函数也可以看到，有两处调用 readseg，前面读取包含 ELF 文件头的 4KB，后面再根据文件头给出的 Program header table position 信息加载每一个程序头表 Proghdr，并读入内存相应偏移处。

磁盘读写这部分可以当作一个驱动程序来看待，硬件底层的实现应该与操作系统上层分离，并通过硬件抽象来进行连通

第二次读取会将 Number of entries 指定的多个程序头表一并读入，这些程序段落就包含了入口 Program entry position，程序入口是虚拟地址 VMA - Virtual Memory Address，不是 main 函数的地址，而是代码段 .text 的首地址 `_start`。

到这里，JOS 代码简化了 ELF 格式文件的处理，只是使用了文件头来加载各个内核程序，并且完整的利用 ELF 的功能。

但是要理解，是如何从源代码 boot/main.c 生成二进制的 ELF 内核文件。JOS kernel 就当作一个程序看待，当使用编译器进行编译，源代码编译成目标文件，main.c 变成 main.o，包含目标机器期待的汇编指令。然后，使用链接程序处理目标文件，链接成一个二进制映像，如 obj/kern/kernel，这就是 ELF 格式的可执行程序。

有了基本的可执行程序，接下来的一个步骤就是生成磁盘映像文件 kernel.img，可以直接被 QEMU 模拟器装载。它是 DOS/MBR boot sector 格式，这种格式的映像文件没有文件头，每一个字节都表示磁盘上的数据。

所以只需将引导程序，即 obj/boot/boot 放置在磁盘映像的第一个扇区，即映像文件的最开始 512 字节，载入模拟器后就可以正确执行引导程序。生成这个磁盘镜像文件的方法也简单，使用将 boot 引导程序和 kernel 内核程序二进制拼接成整体，并在后面填充足够多的零值，来表示一个指定容量的磁盘。

指令控制磁盘读取数据时，也就是在读取磁盘映像文件上的数据。当然，这种做法是在简化文件读取的底层实现，如果引入文件系统，那么就没有这么简单了，也就不能直接读取磁盘扇区来实现内核的加载。

并且，现在最新的 BISO 底层规范是 UEFI - Unified Extensible Firmware Interface，这是一种现通用更复杂也更强大的固件接口。

参考 kern/Makefrag 脚本是如何通过 dd 命令生成映像文件的：

- 先使用 dd - device driver 命令进行零值填充，从 /dev/zero 文件导入零值。
- 数据块重复 count 指定 10000 次，默认数据块为 512 字节，即 5.12MB，4.9MiB。
- 然后再将 boot 和 kernel 文件写映像文件，第二个文件 seek=1 表示跳过一个 obs 即默认的 512 字节。
- 可以单独设置输入、输出块的大小，或者 skip、seek 跳过输入、输出块数量。
- 转换方式 conv 有 16 种，这里指定的 notrunc 表示不对输出内容进行截断。

```rust
# How to build the kernel disk image
$(OBJDIR)/kern/kernel.img: $(OBJDIR)/kern/kernel $(OBJDIR)/boot/boot
    @echo + mk $@
    $(V)dd if=/dev/zero of=$(OBJDIR)/kern/kernel.img~ count=10000 2>/dev/null
    $(V)dd if=$(OBJDIR)/boot/boot of=$(OBJDIR)/kern/kernel.img~ conv=notrunc 2>/dev/null
    $(V)dd if=$(OBJDIR)/kern/kernel of=$(OBJDIR)/kern/kernel.img~ seek=1 conv=notrunc 2>/dev/null
    $(V)mv $(OBJDIR)/kern/kernel.img~ $(OBJDIR)/kern/kernel.img
```

另外，可以使用 file 命令查看这些文件的格式：

    $ file obj/kern/*

可以通过 objdump 查询这些头块信息，可以看到 boot 程序的入口按约定编译在 0x7c00，注意 LMA - Load Memory Address 才是程序装入内存的入口所在：

```sh
$ objdump -fh obj/boot/boot.out
$ objdump -fh obj/kern/kernel
```

通过跟踪代码到断点 `b *0x7d81`，然后可以观察到内核的真正入口地址是 0010000c (phys)，和前面运行内核中查询到的结果一样。

    (gdb) x/4xw 0x10018
    0x10018:        0x0010000c      0x00000034      0x00015318      0x00000000

来看看对象文件的这些区块信息的作用，可以使用命令查询，如 objdump -s -j .rodata：

- `.text`   代码区段，可以使用 objdump -drS some.o 获取反汇编代码。
- `.data`   全局表、变量等等，使用 objdump -s -j .data some.o 可以获取。
- `.bss`    可选，这部分包含未初始化的数组和变量，在磁盘上存储更多的零没有意义，加载程序知道它们应该用零填充。
- `.rodata` Read-only 区包含只读数据，通常包含字符常量。
- `.comment` & `.note`    只是编译器工具链使用的注解信息。
- `.stab` & `.stabstr`    调试器符号定义。

程序区段连接地址是区段定义期待的地址，链接程序有多种方式编码，例如，当代码需要一个全局变量的绝对地址，程序段并没在期待的上，这就会导致程序出错。链接程序也可以生成无位置依赖的代码，比如近跳转指令，只限制在当前指令的前后固定的一个偏移范围。当然，无位置依赖的代码生成具有更复杂的机制和性能消耗，在 MIT 6.828 课程中不会使用。

这里继续反汇编 Kernel 的第一段代码：

```rust
(gdb) x/12i 0x0010000c
   0x10000c:    movw   $0x1234,0x472
   0x100015:    mov    $0x112000,%eax
   0x10001a:    mov    %eax,%cr3
   0x10001d:    mov    %cr0,%eax
   0x100020:    or     $0x80010001,%eax
   0x100025:    mov    %eax,%cr0
   0x100028:    mov    $0xf010002f,%eax
   0x10002d:    jmp    *%eax
   0x10002f:    mov    $0x0,%ebp
   0x100034:    mov    $0xf0110000,%esp
   0x100039:    call   0x1000aa
   0x10003e:    jmp    0x10003e
```

对比 kern/entry.S 中定义的入口点，可以看到指令是一致的：

```rust
# '_start' specifies the ELF entry point.  Since we haven't set up
# virtual memory when the bootloader enters this code, we need the
# bootloader to jump to the *physical* address of the entry point.
.globl      _start
_start = RELOC(entry)

.globl entry
entry:
    movw    $0x1234,0x472           # warm boot

    # Load the physical address of entry_pgdir into cr3.  entry_pgdir
    # is defined in entrypgdir.c.
    movl    $(RELOC(entry_pgdir)), %eax
    movl    %eax, %cr3
    # Turn on paging.
    movl    %cr0, %eax
    orl $(CR0_PE|CR0_PG|CR0_WP), %eax
    movl    %eax, %cr0

    # Now paging is enabled, but we're still running at a low EIP
    # (why is this okay?).  Jump up above KERNBASE before entering
    # C code.
    mov $relocated, %eax
    jmp *%eax
relocated:

    # Clear the frame pointer register (EBP)
    # so that once we get into debugging C code,
    # stack backtraces will be terminated properly.
    movl    $0x0,%ebp           # nuke frame pointer

    # Set the stack pointer
    movl    $(bootstacktop),%esp

    # now to C code
    call    i386_init

    # Should never get here, but in case we do, just spin.
spin:   jmp spin
```

到此，内核还是没有建立完整的内存管理，目前已经通过引导程序成功加载了内核，并且内核的加载位置在 0x0010000c 即 1MB 保留内存的上面 12 个字节位置。所以，内核的加载并没破坏 IBM PC 兼容机关于 1MB 保留内存的传统约定。

内核通常会运行于一个相当高的地址空间中，以将低位的地址空间留给程序使用。

在课程进行到 Lab 2 之前，只需要建立简单的内存分页目录，将 [KERNBASE, KERNBASE+4MB) 这部分虚拟寻址空间映射到物理内存的 [0, 4MB)，就这点空间已经足够应付内核的初步运行了。KERNBASE 虚拟地址定义为 0xF0000000，这是 4GB 寻址空间最高位的 256MB，分页目录、分页表的配置在 kern\entrypgdir.c 文件中定义，内存分页机制流程参考前一篇。

在课程的 Lab 2中，内核代码将升级实现 256MB 物理内存的映射，物理地址 [0x00000000, 0x0fffffff] 映射到虚拟地址空间 [0xf0000000, 0xffffffff]，即 32-bit 寻址空间的最后 256MB 区域。

内存分页机制是内存管理单元的最重要的一个环节，当下，内核入口函数的主要任务也就是设置简单的内存分页，激活分页机制时，不要忘记保护模式标志 CR0_PE 也要一并设置到 CR0 寄存器上，同时加入了写保护 CR0_WP。

为了验证 CPU 的内存分布机制，要求进行练习 Exercise 7，在 QEMU 和 GDB 调试过程中，将断点设置在 JOS kernel 准备激活分页机制的这条指令上 movl %eax, %cr0，即断点在 0x100025 位置。

然后检查 0x00100000 和 0xf0100000 这两个位置的内存。再单步执行，激活分页机制，再次确认内存数据。因为映射在同一地址，0x00100000 和 0xf0100000 这两处的内容应该一致。

汇编入口代码完成任务后，进入 init.c 代码文件，调用 C 语言函数 i386_init 开始内核初始化。

目前，内核主要是在做一件事，就是提供一个交互式控制台。控制台的消息输出通过 printf() 这样的原始的 C 语言函数输出的，但是 JOS 内核实现了它的 I/O，所以它可以正确输出内容到控制台上。

主要的功能代码在：

- kern/monitor.c 运行后就进入循环处理控制台输入的，如果检查到支持的命令，就执行相应的功能。
- kern/console.c 通过 cons_putc 函数提供控制台字符输出服务，同时使用了 3 个输出设备，涉及 CGA/VGA、串口、并口的编程。 
- kern/printf.c 通过 cputchar 调用控制台的字符输出 API。
- lib/printfmt.c 通过 vprintfmt 函数提供通用的字符串向量格式化能力，及其它字符串处理函数。

就目前，具体 I/O 硬件的编程主要集中在 console.c 内，除了基本显示设置，COM/LPT 端口，还有就是键盘。

当然开发者使用 C 语言编写程序时，就可以利用底层 API 与用户实现文字信息的交流。

JOS 代码中留了一上练习，Exercise 8，就是八进制格式字符 %o 并没有相应的功能，所以在前面启动 JOS 内核时，即内核初始化时输出信息是错误的：

    cprintf("6828 decimal is %o octal!\n", 6828);

修复这个问题，就需要在 vprintfmt 函数的 case 'o' 分支添加相应的逻辑代码版本，修正后应该显示 6828 decimal is 15254 octal!

```c
case 'o':
    num = getint(&ap, lflag);
    // if ((long long) num < 0){
    //  putch('-', putdat);
    //  num = -(long long) num;
    // }
    base = 8;
    goto number;
    break;
```

Exercise 8 后，提个问题，就是往 CGA 输出字符时，cga_putc 里的一段代码是做什么用的：

```c
// What is the purpose of this?
if (crt_pos >= CRT_SIZE) {
    int i;

    memmove(crt_buf, crt_buf + CRT_COLS, (CRT_SIZE - CRT_COLS) * sizeof(uint16_t));
    for (i = CRT_SIZE - CRT_COLS; i < CRT_SIZE; i++)
        crt_buf[i] = 0x0700 | ' ';
    crt_pos -= CRT_COLS;
}
```

这个也好理解，CGA 屏幕的宽高的固定的，不同的显示模式具有不同的字符行列空间，记录在 CRT_SIZE (CRT_ROWS * CRT_COLS)，这些变量中。当前只需考虑一种模式，25 * 80 的行列，当前位置在 crt_pos 保存。缓冲区的字节数据和字符数匹配，如果当前位置超出发屏幕缓冲区，就需要进行调整，让内容正确地显示在屏幕上。做法就是通过 memmove 函数对内存中的数据进行移动，JOS 提供了这个函数的实现。

    <string.h>   
    void* memmove( void* dest, const void* src, size_t count ); 
    errno_t memmove_s(void *dest, rsize_t destsz, const void *src, rsize_t count); (since C11) 

有个小问题，如果输出内存包含提前换行，那么屏幕显示的内容肯定会很少，缓冲区也不用填满，只需要计算换行时到当前行尾还有多少个字符，其后在缓冲区写入新数据时，跳过相应的数量，这样 crt_pos 就可以和屏幕与缓冲区一一对应。

注意，每个字符占两个字节，因为除了字符本身占一个字节，显示属性还占一个字节。

另一个要点是了解函数调用约定参数是如何传递的，追踪 cprintf 函数：

    int x = 1, y = 3, z = 4;
    cprintf("x %d, y %x, z %d\n", x, y, z);

函数原型：

    int cprintf(const char *fmt, ...)

这里使用了可变参数，使用省略号表达任意个参数。这种语言在 C 语言的强大底层能力下是非常容易实现的。根据函数调用规则，调用函数时，参数列表最右边的先 PUSH 到栈内，其它参数依次处理。

函数接收参数时，只需要使用一个指针指向这个参数列表，并通过每个参数所占的字节数作为偏移直接访问栈内保存的参数。C 语言提供 va_list, va_start, va_arg, va_end 等几个宏定义来做这些工作，初始体数据结构、准备读取参数、获取参数、清理数据。

```c
int vcprintf(const char *fmt, va_list ap)
{
    int cnt = 0;

    vprintfmt((void *)putch, &cnt, fmt, ap);
    return cnt;
}

int cprintf(const char *fmt, ...)
{
    va_list ap;
    int cnt;

    va_start(ap, fmt);
    cnt = vcprintf(fmt, ap);
    va_end(ap);

    return cnt;
}
```

在 vprintfmt 函数内部，解析 fmt 传入的格式字符串，根据 % 匹配格式读取指定的参数，每次调用 va_arg 就从参数中 ap 即 argments pointer 指定的位置读取指定类型的参数，并移动指令更新到下一个参数的位置。

例如，从参数列表中读取一个无符号整形：

    va_arg(*ap, unsigned int);

函数处理完后，调用 va_end 结束本次多参数传递的处理。

作为考察对格式化函数的理解，材料中提出一个问题，以下代码输出什么：

    unsigned int i = 0x00646c72;
    cprintf("H%x Wo%s", 57616, &i);

根据格式化字符串，参数列表必需提供两个参数，一上数值，一个字符串。而第二参数 i 定义的类型是无符号整数，传入后将被当作字符串处理。根据 Intel CPU 采用的 Little-Endian 字节序，i 中高位的一个字节的零值将会被当作 C 语言字符串的 null 结束标记。如果是大端序，这个条件就不成立，即字符串无 null 结束标志，C 语言处理时就会有越界问题。所以，57616 转换 Hex 表示就是 "e110"，而 0x72 0x6c 0x64 对应 "rld"，结果就是 "He110 Worlds"。

如果，你的系统安装了 Node.js 或 Deno 这样的开发工具，可以很方便地使用 JavaScript 对这些数据进行转换：

```js
$ deno
Deno 1.8.1
exit using ctrl+d or close()
> 57616 .toString(16)
"e110"
> "\x72\x6c\x64"
"rld"
```

教材又假设，如果 GCC 编译器改变函数调用约定，参数按顺序入栈，那么 cprintf 将需要作何修改？其实，按照指针移动的规则，只需要知道可变参数的开头或结尾那个，然后，按入栈顺序来对指针增值、或减值移动即可。只是需要注意，栈内存的生长方向是往内存低地址方向，先入栈表示对应参数的地址就比后入栈的参数地址高。

对于字符信息输出这部分，材料中还提出了一个挑战任务，即实现彩色化控制台内容输出。这可以要怕控制台的控制字节去操作，按照通常的做法是使用 ANSI escape codes 控制字符。


本实验最后一部分内容，也是比较重要的一部分，关于程序调用栈内存组织和 stack frame 追溯，用于提供调试信息。



### 👉 Homework 01: boot xv6
- https://pdos.csail.mit.edu/6.828/2018/homework/xv6-boot.html

课程的第一个作业就是引导 Xv6，因为 2018 年的课程还在使用 x86 架构的 Xv6 系统，按要求克隆 xv6-public 代码仓库，并构建：

```sh
$ git clone git://github.com/mit-pdos/xv6-public.git
Cloning into 'xv6-public'...
...
$
Build xv6 on Athena:
$ cd xv6-public
$ make
...
gcc -O -nostdinc -I. -c bootmain.c
gcc -nostdinc -I. -c bootasm.S
ld -m    elf_i386 -N -e start -Ttext 0x7C00 -o bootblock.o bootasm.o bootmain.o
objdump -S bootblock.o > bootblock.asm
objcopy -S -O binary -j .text bootblock.o bootblock
...
```


# 🚩CS143 Compilers
- CS143 - Compilers http://web.stanford.edu/class/cs143/
- CS243 - Advanced Compilers - Program Analysis and Optimization https://suif.stanford.edu/~courses/cs243/
- Stanford Compliers 斯坦福 编译原理公开课 https://www.bilibili.com/video/av18939632/
- COS 320: Compiling Techniques https://www.cs.princeton.edu/courses/archive/spring19/cos320/
- 6.827 Multithreaded Parallelism: Languages and Compilers http://csg.csail.mit.edu/6.827/
- Modern Compiler Implementation in C/ML/Java by Andrew W. Appel https://2lib.org/s/Modern%20Compiler%20Implementation
- Modern Compiler Implementation in C/ML/Java https://www.cs.princeton.edu/~appel/modern/
- Engineering a Compiler - Keith Cooper, Linda Torczon [编译原理入门] https://2lib.org/book/1306354/a94f18
- Compilers: Principles, Techniques and Tools [编译原理龙书] https://2lib.org/s/?q=Compilers%3A+Principles
- Compilers: Principles, Techniques and Tools [斯坦福龙书课程] https://suif.stanford.edu/dragonbook/
- How Compilers Work by Albert Stec https://www.baeldung.com/cs/how-compilers-work

掌握硬件基础后，可以学习更深层的操作系统实现细节，或者是编译器原理，所以程序几乎都是由编译器编译生成的可执行文件，纯粹手写机器指令的方式是不太现实的，即使是使用汇编语言，通常也只有在底层系统中使用，比如嵌入式开发的系统底层处理。

一个编译器的实现涉及多个处理流程，可以分成以下几个阶段，靠前的步骤叫做前端，靠后的步骤叫后端：

- Lexical analysis
- Syntax analysis
- Semantic analysis
- Intermediate code generation
- Optimization
- Code generation

为了简化编译原理的学习，普林斯顿大学的现代编译器实现课程中推荐使用 SPIM 模拟器，它可以模拟最简单的指令集，MIPS instruction set，注意 MIPS 也表示百万指令每秒，MIPS 也是设计这种指令集的公司，它们完全不同意思。

MIPS 属于精简指令集计算机架构，使用 MIPS 指令集也最简单，只有几十条指令，但是包含完整的算术指令、逻辑指令、流程控制指令、数据读写指令，及其它功能性指令。

为精简指令集生成代码，要比 Pentimu 这种使用复杂指令的系统要简单。同时，使用 RISC 指令可以更好帮助学生掌握入门级的计算机体系结构方面的知识。

但是这通常需要一块有这类芯片的开发板，而大多数学生的个人电脑使用的 x86-64 架构 CPU。那么使用软件模拟器就是一个解决办法，SPIM simulator 就可以用在学习 MIPS 汇编语言上，并且它可以运行在 Pentium PC 主机上，使用 Windows 或 Unix 系统的工作站上运行。升级版本，QtSpim 使用了 Qt Gui 图形库，使用起来更加方便。目前最新版本 SPIM Version 9.1.20，安装后即可以打开编写好的汇编语言代码模拟执行，软件还附带帮助文档，Assemblers, Linkers, and the SPIM Simulator。

当然，如果能力可以，直接上 Intel 80386 CPU 也是可以的，并且英特尔提供了丰富的参考资料。

现在，Windows 10 WSL 子系统也可以安装 Linux 进行开发，而不必另外安装虚拟机来运行 Linux 系统。


# 🚩 Distributed Systems
- MIT 6.004: Computation Structures https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-004-computation-structures-spring-2017/
- MIT 6.004: Computation Structures, Chris Terman https://www.bilibili.com/video/av37375242/
- MIT 6.033: Intro to Computer System http://web.mit.edu/6.033/www/
- MIT 6.824: Distributed Systems Engineering https://pdos.csail.mit.edu/6.824/schedule.html
- MIT 6.824: Distributed Systems Engineering https://www.bilibili.com/video/BV1R7411t71W/
- The Paxos algorithm or how to win a Turing Award https://www.bilibili.com/video/BV1Hy4y1b7QT
- Principles Of Distributed Database Systems https://book4you.org/book/5299940/fa2bb5
- Distributed Systems: Principles and Paradigms https://book4you.org/book/3596689/5b5a94
- Distributed Computing: Principles, Algorithms, and Systems https://book4you.org/book/437133/83865b
- Database Internals: A deep-dive into how distributed data systems work Alex Petrov https://book4you.org/book/5424546/ccb356

官方仓库clone代码：

    git clone git://g.csail.mit.edu/6.824-golabs-2020 6.824lab

