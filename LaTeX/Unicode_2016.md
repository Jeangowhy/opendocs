# 编程与编码
<style> body {padding:0;}</style>

- MD建档时间：2016年2月18日 4:46:47 PM by Jimbowhy
- CSDN发布：http://blog.csdn.net/WinsenJiansbomber/article/details/50693186
- PDF版下载：http://download.csdn.net/detail/winsenjiansbomber/9460359
- 更新时间：2/20/2016 9:12:45 AM 

## 问题由来

在计算产生的那天开始，应该说计算产生之前，编码问题就会一直伴随着信息编码的问题。这是由于计算机硬件逻辑上决定的，电路的二进制表达只能是数字上的意义，每一比特就只能表达 0 或 1，每个字节也只能表达 0-255。当需要通过计算机表达文字信息时，问题就跟着来了。

计算机只能存储数值，为此文字信息也需要通过数值的形式来存储。最原始的文字是点阵文字，定义屏幕上一个矩形，标记不同的点位的颜色信息，从而赋予字形图像 Glyph 相应的文字信息。

例如字母A、汉字“中”可以这样用一个5x5的点阵定义，◌、●号分别代数值 0、1，●表示在显示器上用深颜色来表示文字的笔划：

	◌◌●◌◌   ◌◌●◌◌
	◌●◌●◌   ●●●●●
	●◌◌◌●   ●◌●◌●
	●●●●●   ●●●●●
	●◌◌◌●   ◌◌●◌◌

显示设备的分辨率是一项重要的参数，单位是像素点每英寸 DPI(Dot per Inch)，1 英寸约为25.4 millimetres 毫米。在选购显示器所说的分辨率如1366*768，指的是显示器总的显示像素数量，并不是DPI数值。以前常见的分辨率是72DPI，现在还有更高的 96DPI、120DPI，分辨率越高在相同的显示面积上显示的点数越多，意味着显示的内容越精细。在96DPI的Win7系统上，每平方英寸可以显示9磅大小的雅黑中文字符为8个，1磅约等于0.353毫米，如果在72DPI设备上，1磅刚好就是一个像素宽。2.83磅等于1毫米，28号字大概就是一厘米高的字，约相当于中文字号中的一号字。如果汉字是正方形，那么每个字就是12x12个像素点。所以只要有足够的像素点，就算再复杂的字符也可以用这种点阵来定义，当然现在更先进的技术已经不用点阵图形，而是用可以任意缩放的矢量图形来定义字体了，比如说TrueType字体，开源的 FreeType。而这此文件符号定义好后，由于符号占用内存较大不便直接使用。因而需要通过一个数值对应一个文字符号的方式来使用，当需要显示一个字符时只需要给出字符的对就数值就可找到字体符号的定义，并输出到屏幕上，而这个值就称为码点 Code Point。

英语国家是计算机的发明国，而英文只由26个字母构成，所以就形成了第一个字符集美国标准信息交换代码 ASCII(American Standard Code for Information Interchange)，所有字符只需一个字节表达。在ASCII中定义了全部大小写字母和常用标点符号及一些不可显示的功能字符，A的定义的值为0x41，a的值定义为0x61，0的值定义为0x30。因此，在程序中想要显示字母A时，只需要将0x41对应的字符显示在屏幕上就可以了。

字符集编码方案中，每个字素都有一个对应的 Code Points，但是映射特定字体后显示出来的字符 (Characters) 不一定有同样的视觉外观。比如 The Unicode Standard - Figure 2-8. Abstract and Encoded 文档中的示意图给出的字符 Aͦ 就是由字线和一个小圆圈组合而成的组合字符 [Combining Diacritical Marks](https://www.unicode.org/charts/PDF/U0300.pdf)。与字形相应的概念是 Grapheme（字素），它是书写系统中最小的抽象意义单位。例如：字母 "b" 和 "d" 是不同的字素，因为它们改变单词含义（如 "bat" vs. "dat"）。汉字 "日" 和 "月" 是独立的字素，各自代表不同意义。Glyph（字形）则是在特定字体或书写风格中的具体视觉表现形式。例如：字母 "a" 在 Times New Roman 和 Arial 两种字体中的不同设计；汉字 "永" 在楷书和行书中的不同写法。

当计算机在全世界流行起来，不同地方的语言文字的差异带来了不同字符集的需要。就中文来说，在DOS时代，WPS还是用点阵来显示汉字的，当年还用专门的硬件来做字库。而常用汉字就有几千个，如果算上那些不常露脸的字就上万的数量。直到1980年中文字符集《信息交换用汉字编码字符集》才由中国国家标准总局发布，1981年5月1日开始实施的一套国家标准是GB 2312—1980，收录汉字6763个，非汉字图形字符682个。这样一个庞大的字符集就需要多个字节来表达，这就形成了多字节字符集的概念，中日韩字符集是典型的多字符集。SBCS、DBCS、MBCS，分别表示单字节字符集 single-byte character set，双字节字符集 double-byte character set 和多字节字符集 multi-byte character set。

当计算机信息交换越来越频繁，就需要更便利的文字编码方案，Unicode 作为一个全球通用的字符集就这样出来了，它收录了全球各种文字符号，因此它具有很强的通用性。Addison Wesley 出版的《The Unicode Standard Version 5.0》无疑是全球化语言的一本小百科，值得一看！官方提供最新版 Unicode 6.3 码表查询 Character Code Charts 或 Understanding Unicode™ - I。还有一个查询工具 Unibook Character Browser 用来查询已收录字符集、编码方案及代码页等数据。

在 Unicode 出现前，Windows系统作为一个多语言的操作系统，它是通过一个特定字符集来实现多语言的。例如 Windows 95 的简体中文版和繁体中文版分别使用 GBK、Big5字符集编码，这些不同的字符集在 Windows 平台上就称为代码页 Code Pages，这是微软特有的称谓。例如:

	cp932 - 日文
	cp936 - 简体中文 GBK
	cp949 - 韩文
	cp950 - 繁体中文 BIG5
	65000 — UTF-7 Unicode
	65001 — UTF-8 Unicode

编码问题是程序开发中的基础技术，不掌握它确实会困扰不少人，像网页上经常看到的乱码。还有我以前使用Windows 98 英文版时遇到的问题，整个硬盘的中文名文件都被拒绝访问了。还要使用像什么南极星通、MagicWin之类的软件来进行转码处理。所谓乱码问题，就是编码和解码方案不统一产生的问题，比如说用 UTF-8 编码来解释 GB2312 编码的文件，那是肯定会乱码的。内码也是一个常让人搞不清楚的用词，用人就问GBK和GBK内码有什么区别？其实这个问题问法就不对，内码就是一个系统内部使用的编码方案。如中文版 Windows 98 使用的是 GBK 编码，而繁体版使用的是 Big5。因此数据交换时，就要考虑系统的内码是否兼容，如果拿繁体版Windows 95来处理简体版系统发过来含有中文字符的电子邮件，就会看到一堆的乱码了。

比如说同一个“汉”字，在GB18030的编码为 0xBABA，UTF-16编码为 0x6C49，汉字作为一个大数量的字符集，在各种编码间的映射关系也是十分混乱的，转换工作基本上靠查表，字符编码值可以使用 Editplus、Hex Workshop等软件来查看：

	BA BA		GB18030 
	E6 B1 89	UTF-8
	49 6C		UTF-16 little endian(FF FE) 
	6C 49		UTF-16 big endian(FE FF)

即使是同样的单字节编码，比如说码点 0xA4 在 ISO-8859-1 和 ISO-8859-15 字符集中分别表示 ¤ 和 €。同样的码值 ，显示结果不同，是因为使用的字体不同，或者字体相同，但是映射的区域不同。现在的Unicode字体可以包含大量的字符定义，在打开文件时，软件需要知道用什么字符集去解释码值，这就是字符集 存在意义。


## 细说Unicode

历史上, 有两个独立的, 创立单一字符集的尝试。一个是国际标准化组织(ISO) 的 ISO 10646 项目，于1993年发布，简称 UCS，全称 Universal Multiple-Octet Coded Character Set。 另一个是由(一开始大多是美国的)多语言软件制造商组成的协会组织的 Unicode 项目。幸运的是, 1991年前后, 两个项目的参与者都认识到, 世界不需要两个不同的单一字符集. 它们合并双方的工作成果, 并为创立一个单一编码表而协同工作。两个项目仍都存在并独立地公布各自的标准, 但 Unicode 协会和 ISO/IEC JTC1/SC2 都同意保持 Unicode 和 ISO 10646 标准的码表兼容, 并紧密地共同调整任何未来的扩展。参考 Olle Järnefors 这篇文章[《Short overview of ISO/IEC 10646 and Unicode》][2] 。

在 Unicode 系统内，每一个符号都有一个名字，以全大写字母表示，如基本拉丁字母 A 的 Unicode 名字就是 LATIN CAPITAL LETTER A，连字符 - 就叫做 HYPHEN-MINUS，码值 U+002D。Unicode的出现，使得世界上大多数语言符号都实现电子化，当然作为最多文字符号的中国自然是最值得高兴的事，你看来☯这样国粹都可以当作字符来编码，这还得感谢那批在为标准化工作的专业人员。这些多功能字符定义在 [U+2600-U+26FF][15]，通过码表可以查看到。Unicode 字符集规范规范文档中使用 UTF-32 编码展示字符的码点，但是这种定长 4 个字节的编码占用大量存储空间，并不适合直接在工业中应用。

开始 UCS 方案使用2字节编码，如 U+0032 表示空格，U+0041 表示字母 A，U+0061 表示字母a，这种 U+ 形式的值就是码值USV(Unicode Scalar Values)。为了保证今后编码空间不被填满，又定义了一个4字节的新标准 UCS-4，前者就相应称作 UCS-2。UCS-2 使用高8位作为行编码，低8位为列编码，形成一个256行256列的逻辑数据结构。这样0行中的256个列空间就用来存储标准的 ISO/IEC 8859-1 编码，这时 ASCII 字符是以两个字节进行存储的，内存消耗原来的2倍。对于 UCS-4 方案，指定第一字节的最高位设置为0，用第一字节剩余的7位表示 2^7=128 分组，第二个字节表示 2^8=256 平面。余下两字节保持 UCS-2 相同的逻辑结构，因此可以兼容。这样0组0平面上就存放有 UCS-2 的完整编码，它又称为基本多语言平面 BMP (basic multilingual plane)。收录有21204个在中、日、韩使用的象形字(ideographic characters)，有6656个韩国象形象声字(morphograms and syllabograms)，总字符接近极限容量34203个。第二个平面就称为增补平面 SMP Supplementary Planes，第三个平面就是象形字增补平面 SIP (Supplementary Ideographic Plane)。

![Unicode_BMP.png][51]

![Unicode_SMP.png][52]

	Unicode Scalar Value 		       Planes
	==================== =================================================
      0000–FFFF               Plane 0: Basic Multilingual Plane
     10000–1FFFF              Plane 1: Supplementary Multilingual Plane
     20000–2FFFF              Plane 2: Supplementary Ideographic Plane
     30000–DFFFF          Planes 3–13: Unassigned
     E0000–EFFFF             Plane 14: Supplementary Special-purpose Plane
    F0000–10FFFF         Planes 15–16: Private Use Area

实际使用过程中，一般UNICODE指双字节的 UCS-2，相应的 UTF-16 编码方案被普遍使用，UTF 是 Unicode Transformation Format 的缩写，Windows NT 系统就是以这种固定2字节编码的方案为内核工作的。固定字节数可以使用程序在实现上更简洁，也更加有效率，例如统计字符数量时直接按字节数的一半计算即可，但像 UTF-8 这种变长编码方案则不行，它要检测首字节的标记位，以得知检测中的字符占多少字节。UTF-16的编码空间安排如下：

	U+0000 to U+D7FF 有效
	U+D800 to U+DFFF 保留
	U+E000 to U+FFFF 有效

UTF-16也可以通过扩容来表达完整的 Unicode 字符集，对于码点在 0x10000 以内的字符使用 2 字节存储，码点在 0x10FFFF 以内的使用 4 字节存储。并且使用 D800-DFFF 保留范围作为代理区间 (Surrogate Codes) 存储 Unicode 增补字符。更准确地说，是扩充 BMP (Basic Multilingual Plane) 本身所缺失的字符。参考规范文档 3.8 Surrogates，3.9 Unicode Encoding Forms，23.6 Surrogates Area。

	HighWord = Math.floor((CodePoint - 0x10000)/0x400)+0xD800
	LowWord  =            (CodePoint - 0x10000)%0x400 +0xDC00

在存储时，不同的编译会指定一个相应的文件头，称为 BOM (Byte Order Mark)：

	EF BB BF     UTF-8 BOM
	FE FF        UTF-16/UCS-2, big endian
	FF FE        UTF-16/UCS-2, little endian
	00 00 FE FF  UTF-32/UCS-4, big endian
	FF FE 00 00  UTF-32/UCS-4, little endian.

UTF-8 是UNICODE的一种变长度的编码表达方式，由于节省空间，在互联网上是应用最广泛的编码方案。它由Ken Thompson于1992年创建，现在已经标准化为RFC 3629。UTF-8的编码规则很简单，只有二条：

- 对于单字节的符号，字节的第一位设为0，后面7位为这个符号的unicode码。因此对于英语字母，UTF-8编码和ASCII码是相同的。
- 对于n字节的符号（n>1），第一个字节的前n位都设为1，第n+1位设为0，后面字节的前两位一律设为10。剩下的没有提及的二进制位，依次填入 Unicode 编码。下表总结了编码规则，字母x表示可用编码的位。

**UCS-4和UTF-8之间的转换关系表**

	UCS-4编码				 UTF-8编码
	U+00000000 – U+0000007F	0xxxxxxx
	U+00000080 – U+000007FF	110xxxxx 10xxxxxx
	U+00000800 – U+0000FFFF	1110xxxx 10xxxxxx 10xxxxxx
	U+00010000 – U+001FFFFF	11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
	U+00200000 – U+03FFFFFF	111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
	U+04000000 – U+7FFFFFFF	1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx

比如 '爱' U+7312 字符编码为 UTF-8，那么就根据上表将其编码为 3 字节的 e788b1：

	$ node -e "console.log('爱'.charCodeAt(0).toString(2))"
	111001000110001
	$ node -e "process.stdout.write('爱')" | xxd
	00000000: e788 b1                                  ....

	1110xxxx 10xxxxxx 10xxxxxx
	    0111   001000   110001  ==> 0b111001111000100010110001

	$node -e "process.stdout.write((0b111001111000100010110001).toString(16))"
	e788b1

•  [ISO8859 系列字符集映射表](https://www.unicode.org/Public/MAPPINGS/ISO8859/)
•  [Windows 系统字符集映射表](https://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/)
•  [Mac 系统字符集映射表](https://www.unicode.org/Public/MAPPINGS/VENDORS/APPLE/)
•  [W3C Encoding Standard](https://encoding.spec.whatwg.org/)

学会看码表 Code chars 很重要，码表是字符集的组织结构，所有已经收录的字符集都可以在码表上查询得到它的具体信息，如字符外观，码值。码表以8例16行组织，每列头有一个数值，表示不含低8位的码值。低8位码值则显示在每一行的头部，两个值组合起来就是一个完整的USV码值。例如 Latin Extended-A 字符集上的第一个字符 Ā 的码值就是 U+0100。紧接着码表，还有一个名字列表，描述了字符的在 Unicode 系统内的命名和相关字符信息。在HTML中可以直使用转义符来表达Ā，其中 x 表示16进制，如果省去则表示使用10进制数值。官方提供的工具 UniBook™ 也可以做这样的查询而且还方便使用，这个工具基于 UCD(Unicode Character Database) 开发的，UCD 是 Unicode 第一手最完整也最原始的资源，码表也是 UCD 资源的一部分，还 UCD 的 XML 格式的数据文件，这些资源构成了 Unicode 编码的完整描述。例如，要找一个汉字，你可以通过部首偏旁 (Radicals) 的索引来快速定位。

Windows 内核已经采用 Unicode 编码，这样在内核上可以支持全世界所有的语言文字。在旧系统上，微软一直在使用代码页（各种字符集在 Windows 系统上变体），也为 GB18030 定义 code page：CP54936。但是由于　GB18030　有一部分4字节编码，Windows 的代码页只支持单字节和双字节编码，所以这个 code page 无法真正使用。cp936 即 code page 936 是以国标扩展字符集 GBK 为基础的编码。GB2312（国标常用简体字符集）只是 GBK 的一部分，GBK支持繁体字和生僻字。GB2312、GBK 到 GB18030 的编码方法是向下兼容的。

有了字符编码后，接下来就要将它显示出来了，否则它就仅仅是个数值或乱码而毫无意义。如果你安装了微软的 Office 2000 那么很可能系统就有一个支持 Unicode 的字体 Arial Unicode MS，另外 James Kass 也做了一个字体项目 [Code2000][3]，他这个 Yahei - Kelvin 字体支持 TUS 2.1，可以免费下载使用，好大方的 James Kass！:-)。只是这个字体的中文、韩文有点难看，因笔划不流畅，粗细不稳定，会有笔划粘边现象。另外的 Aegyptus 和 Aegean600 字体则好多了，但未知道版权信息。

多个字节数值保存在内存或者磁盘中时，存在有字节先后顺序的关系，一般 Intel 平台使用的小尾序（littel-endian），PowerPC 则是大尾序（big-endian）。对于人类书写来说，大权重数值在前，对于从左到右的书写顺序就是在左侧，如果将将开始位置当作内存的低地址，那么人类书写习惯相当于大尾序。使用以下 C 或者 JavaScript 代码片段可以测试当前机器的字节序：

    #include <cstdio>
    
    int main(void)
    {
      int   et = 0x3132;
      char *pt = (char*)&et;
      printf("Endianness Test: %s", *pt == 0x32 ?"little-endian":"big-endian");
    }

	// JavaScript
	const arr32 = Uint32Array.of(0x12345678);
	const arr8 = new Uint8Array(arr32.buffer);
	console.log("Endianness Test: ", arr8[0]==0x78? "little-endian":"big-endian")

多字节编码的字符没有字节序问题，因为是基于字节编码的。使用 Chrome 控制台可以根据码点构造相应的 Unicode 字符。以下为组合符号 'Aͦ'，它由字母 A (0x41) 和组合符号 0x366 构成。注意，组合符号正确顺序应该在后，虽然 'ͦa' 也能显示，但是组合符号是与前面的单引号组合的。可以看到 Unicode 编码经过处理后，以现在流行的 UTF-8 编码。0x366 组合符号映射为 0xcda6。UTF-8 编码方案下，只有 ASCII 字符集的编码才是完全一致的码值，其它符号都需要重新映射编码。注意这里将以字节为单位的 UTF-8 编码写在一起，其实它们不涉及字节序问题，正常来说应该单个字节分开写。受到字体文件的限制，不是所有 Unicode 字符都可以正常显示，比如 A⃝ 组合符号在当前字体 (Fira Code) 就显示为字母和圆圈两个独立的字符。Unicode 字符集的折中办法则提供 Ⓐ U+24B6 这样的预组合符号来解决组合字符不能正常渲染的问题。

	'Aͦ'.charCodeAt(1).toString(16) => 366
	String.fromCharCode(0x20DD)    => '⃝'
	String.fromCharCode(0x2F00)    => '⼀'

    "A"+String.fromCharCode(0x366) => 'Aͦ'
    String.fromCharCode(0x366)+'a' => 'ͦa'

UTF-8 主要优点就是节省存储空间，并且向后兼容了 ASCII 编码。但是实际使用中，它并不方便，比如计算全文字符数量，如果使用 UTF-16 或者 UTF-32 就可以直接通过所占用内存字节数计算，但是 UTF-8 是变长码，不能提供这样的便利。因此，软件一般上在读取 UTF-8 数据后就解码为定长编码。所以在应用软件中，比如正则工具中，使用 Unicode 定长编码值来匹配字符，比如 [\u2F00] 匹配的是汉字“一”。


## Unicode与中文

早在东汉时代 121 CE，《说文解字》就编纂了将近1万汉字，这个时期是汉字发展成熟阶段，字形基本确定下来。在此之前，中国的文字还不能叫汉字，字体形态变动较大，在战国到秦汉统一的时代，文字由篆书到隶书，又从隶书转到楷书，这才相对稳定下来。到了清朝，这些字符又重新组合生产了大量汉字，到《康熙字典》编撰完成时，又增加了4,000 多字。近代，国民政府推行简体字制度，又增加 2,000 多个简体字。

第一个发展起来国标字符集就是GB 2312-80，GB是国家标准的拼音简写，又称国标码。这个标准用2字节来编码汉字和中文符号，并兼容ASCII标准字符集。一级汉字3,755个，二级汉字3,008个，共收录6763个汉字。但是在Unicode中并不连续分布，散落在CJK统一汉字字符区 0x4E00-0x9FA5 的20902个汉字中。编码逻辑定义高8位称为“区”，低8位称为“位”， 所以也称 GB2312 为区位码。使用区位输入法，例如输入1601，即16区第1个字，得到码表中第一个汉字“啊”。一级汉字按拼音排序，二级汉字按部首排序，此外，该标准还包括标点符号，数种西文字母、图形、数码等符号682个。编码时为了兼容 ASCII，两个字节使用比 0xA0 值要大的数据来存储。即查询时字符编码要加上 0xA0A0 才得到真正的存储数据，因此，中文字“啊”实际在内存的值是 0xB0A1 而不是 0x1001。也因此区位码定义了94区，每区有94位字符，即区码存储时取值 0xA1~0xFE 刚好有94个区，位码也一样。

	区	位	内容
	1	94	Miscellaneous symbols
	2	72	Numerals 1–20 with period, parenthesized numerals & hanzi 1–20, 
			encircled numerals 1–10, uppercase Roman numerals 1–12
	3	94	Full-width GB 1988-89 (GB-Roman; equivalent to ASCII)
	4	83	Hiragana
	5	86	Katakana
	6	48	Upper- and lowercase Greek alphabet
	7	66	Upper- and lowercase Cyrillic alphabet
	8	63	26 full-width Pinyin characters, 37 zhuyin (bopomofo) characters
	9	76	Full-width line-drawing elements
	10–15 0	Unassigned
	16–55 3,755 Level 1 hanzi (last is 55-89)
	56–87 3,008 Level 2 hanzi (last is 87-94)
	88–94 0 Unassigned

GB2312 标准的实现，是一个在当时迫切的需要下产生的，没有经过仔细的斟酌推敲，因此是一部有缺陷的标准。它只有6千来个常用汉字，仅覆盖中国大陆99.75%的使用频率，对于人名、古汉语等方面出现的罕用字就不能处理了，这导致了后来汉字扩展规范GBK及GB 18030汉字字符集的出现，而是完全向后兼容的，即GB 18030可以直接替换GBK和GB2312编码，GBK可以直接替换GB2312编码。在Windows 98安装目录下就有一份GBK码表文件，gbk.txt，用记事本打开后直接找到 0xB0A0 这一行，就可以找到第一个汉字，即16区01位的“啊”字，这个编码和 GB2312 是一致的。

GBK又称为汉字百科字符集，收录超过2万汉字，是对原有的 GB2312 的扩充，也就是简体中文版Windows 9x使用的代码页 936。现有的汉字数量绝不止这个数，还有大量未编码的字符，对于这些未进行编码的字符就称为非编码字符集 Noncoded Character Sets。GBK字符分为5个部分，各部分内容及数量如下：

	GBK/1 717 	GB 2312-80 and GB/T 12345-90 non-hanzi
	GBK/2 6,763	GB 2312-80 hanzi
	GBK/3 6,080	Hanzi from ISO 10646-1:1993
	GBK/4 8,160	8,059 hanzi from ISO 10646-1:1993 plus 101 additional hanzi
	GBK/5 166 	Non-hanzi from Big Five and other characters

GB 18030-2000 标准发布时，兼容收录GB2312的一级汉字3,755个，二级汉字3,008个，增添汉字20,770个，符号为894个。GB18030的更新版本在2005年发布，保持兼容部分，增添汉字数量为63,481个，其它符号6,184个。这是一个六区字符集，囊括韩，蒙，藏，维吾尔，彝，傣泐。编码空间分布三大块，单字节和双字节部分兼容ASCII字符集、GB2312和GBK，四字节部分兼顾 Unicode BMP。

	Single-byte: 00-7f
	Two-byte: 81-fe | 40-7e, 80-fe
	Four-byte: 81-fe | 30-39 | 81-fe | 30-39

两字节部分是常用的主要内容，它分成5个部分：

	Part Characters	Content
	1	 728a		GBK/1 plus lowercase Roman numerals 1–10 and the euro currency symbol
	2	 6,763		GB 2312-80 hanzi
	3	 6,080		Hanzi from ISO 10646-1:1993
	4	 8,160		8,059 hanzi from ISO 10646-1:1993 plus 101 additional hanzi
	5	 166		Non-hanzi from Big Five and other characters

港澳台地区则多用大五码 BIG5，对应Win32平台 Code Page 950，收录一级汉字5,401个，二级汉字7,652个，符号441个。后者进行了修订形成BIG5+，增添汉字7,619个，符号数量则为913个。高位字节使用了0x81-0xFE，低位字节使用 0x40-0x7E，0xA1-0xFE。在Big5的分区 0x8140-0xA0FE 保留给使用者自定义字符，称为造字区，这种设计也是算得上奇葩的。Big5还重复地收录两个字：“兀、兀”（0xA461及0xC94A)、“嗀、嗀”(0xDCD1及0xDDFC)。

	Row Characters	Content
	1	157			Two abbreviations, 155 miscellaneous symbols
	2	157			Nine hanzi for measurements, 9 abbreviations,
					21 full-width line-drawing elements, numerals 0–9, 
					uppercase Roman numerals 1–10, Chinese numerals 1–12, 
					upper- and lowercase Latin characters (except for w–z),
					38 miscellaneous symbols
	3	127			Lowercase Latin characters w–z, 
					48 upper- and lowercase Greek characters, 
					37 zhuyin (bopomofo) characters, 5 tone marks, 
					33 abbreviations for control characters
	4–38 5,401		Level 1 hanzi (last is 38-63)
	39–40 0			Unassigned
	41–89 7,652		Level 2 hanzi (last is 89-116)a
	90–94 0			Unassigned

最后，中文编码方案是我见最混乱的编码方案，名目之多，让人有点恼火的程度，而Unicode就是最佳下火良药。


## Unicode与日语

日语中有几个常用的字符集，ASCII, JIS-Roman, half-width katakana, JIS X 0208:1997(及前身), JIS X 0212-1990, 还有 JIS X 0213:2004。最常用的是 JIS X 0208:1997，定义了 JIS Levels 1/2，其次是 JIS X 0213:2004, 定义了 JIS Levels 3/4.这几个重要的字符集内容如下：

	Table 3-60. The JIS X 0208:1997 character set
	Row   Chars Content
	1     94    Miscellaneous symbols
	2     53    Miscellaneous symbols
	3     62    Numerals 0-9, upper- and lowercase Latin alphabeta
	4     83    Hiragana
	5     86    Katakana
	6     48    Upper- and lowercase Greek alphabet
	7     66    Upper- and lowercase Cyrillic alphabet
	8     32    Full-width line-drawing elements
	9-15  0     Unassigned
	16-47 2,965 JIS Level 1 kanji (last is 47-51)
	48-83 3,384 JIS Level 2 kanji (last is 83-94)
	84    6     Additional kanji (last is 84-06)b
	85-94 0     Unassigned

	Table 3-64. The JIS X 0212-1990 character set
	Row   Chars Content
	1     0     Unassigned
	2     21    Diacritics and miscellaneous symbols
	3-4   0     Unassigned
	5     4     Katakana
	6     21    Greek characters with diacritics
	7     26    Eastern European characters
	8     0     Unassigned
	9-11  198   Miscellaneous alphabetic characters
	12-15 0     Unassigned
	16-77 5,801 Supplemental kanji (last is 77-67)
	78-94 0     Unassigned

	Table 3-68. The JIS X 0213:2004 character set, Plane 1—combined with JIS X 0208
	Row   X 0208  X 0213 Content
	1     94      0      Miscellaneous symbols
	2     53      41     Miscellaneous symbols
	3     62      32     Numerals 0-9, upper- and lowercase Latin alphabet, miscellaneous symbols
	4     83      8      Hiragana
	5     86      8      Katakana
	6     48      46     Upper- and lowercase Greek alphabet, katakana, miscellaneous symbols
	7     66      28     Upper- and lowercase Cyrillic alphabet, miscellaneous symbols
	8     32      52     Full-width line-drawing elements, miscellaneous symbols
	9-10  0       188    Additional Latin characters
	11    0       94     IPA
	12    0       85     Annotated
	13    0       77     NEC Row 13
	14    0       94     JIS Level 3 kanji (04-01 added in 2004)
	15    0       94     JIS Level 3 kanji (15-94 added in 2004)
	16-46 2,914   0      JIS Level 1 kanji
	47    51      43     JIS Level 1 kanji (47-01 through 47-51), 
						 JIS Level 3 kanji (47-52 through 47-94;47-52 and 47-94 added in 2004)
	48-83 3,384   0      JIS Level 2 kanji (last is 83-94)
	84    6       88     Additional JIS X 0208 kanji (84-01 through 84-06), 
						 JIS Level 3 kanji (84-07 through 84-94; 84-07 added in 2004)
	85-94 0       940    JIS Level 3 kanji (last is 94-94; 94-90 through 94-94 added in 2004)

	Table 3-69. The JIS X 0213:2004 character set, Plane 2
	Row   Chars Content
	1     94    JIS Level 4 kanji
	2     0     Unassigned
	3-5   282   JIS Level 4 kanji
	6-7   0     Unassigned
	8     94    JIS Level 4 kanji
	9-11  0     Unassigned
	12-15 376   JIS Level 4 kanji
	16-77 0     Unassigned
	78-94 1,590 JIS Level 4 kanji (last is 94-86)


参考现成的日文Unicode字符集 [Unicode Kanji Code Table][6]，

	3000 - 303f Japanese-style punctuation
	3040 - 309f Hiragana
	30a0 - 30ff Katakana
	3400 - 4dbf CJK unified ideographs Extension A - Rare kanji
	4e00 - 9faf CJK unifed ideographs - Common and uncommon kanji
	ff00 - ffef Full-width roman characters and half-width katakana

日语的作为一种象形语言系统，引用了大量的中文字符，和Unicode的映射关系也算得上是混乱的，但是编码方案却不像中文那样混乱。





## 编码转换

现在，Unicode 字符集就是一个超集，就像一把有不同刻度的尺，有了它转换问题显得要简单得多。例如，GBK 转码 Big5，首先找出 Big5 字符到 Unicode 的影射关系 Character Mapping，然后找出相同字符到 GBK 的影射关系，即可以完成转码。但是 GBK 收录的字符已经超出 Big5 字符集，因此会丢失没有收录的字符，像这样的转换显得没有意义了。获得影射关系途径有很多，一是自己直接研究 Unicode 官方 UCD 资料，这个留给想要造车轮的人去做；二是使用现成的映射表，如系统的代码页转换表，或者是 [ICU 的XML 数据表][4]，ICU提供一个程序 genmscp.c 它可以输出Win32平台各代码页字符集与Unicode的映射关系文件UCM。Unicode官网提供了较完整的[代码页映射表][7]文件供下载，在vendors目录下可以找到不同平台的提供的映射文件。GNU 的 libiconv 也是非常棒的开源库，直接提供C语言的实现代码。LibIconv提供一个 iconv 命令，它可以用在各种编码的相互转换。同时，它也提供了几个库函数 iconv_open、iconv、iconv_close、iconvctl、iconv_open_into，用来执行和转码相关的工作，编译这个工具还需要 [libintl][13]。

当转码遇上汉字，这是自己实现转码的痛点，如果没有前人的工作，没有现成的映射关系表，这会是相当让人头痛的工作。一方面是因为汉字编码方案之多，码点规律之无序共同造成的。即使有现在的映射表，也不是特别爽的事，一个GBK映射表就好几百KB，这是多么浪费的内存空间。写代码的主要功夫都放在定义映射表上了，所以还是用现成的表算了，别在这里面瞎折腾，做点更有意义的事才是正确的。

在 XP 系统中，区域和语言的高级选项中，有代码页转换表 Code page conversion table，这就是用于将字符在不同代码页之间转换影射关系表。代码页转换表可以是原生语言支持 Native Language Support(NLS) 文件，也可以是提供转换函数的动态链接库。在支持NLS技术的 WINNLS.H 头文件中，定义了一系列方法。如 BOOL SetThreadLocale(LCID)，参数LCID是指区域标识 locale identifier，是一个32位的无符号长整形数值，低16位包含有语言ID信息，其中最低10位表示主要ID。如果你的程序只工作在指定的语言编码条件，这个方法就用来告诉系统临时转换到指定的代码页，只不过它只影响和获取资源有关的函数，因为多VS平台上的多语言支持都是通资源文件实现的。为了判断当前系统的 LCID 设置可以使用 GetSystemDefaultLCID()，并置为程序的工作语言，进而调入相关国际化资源。


### ASCII转码
ASCII字符集是最简单的一个，这个字符集编码空间是 0x00-0x7F，共有128个符号常用的大小写字母，数字和标点符号。这个字符在Unicode系统中又称为 Basic Latin (ASCII)，它和Unicode的映射关系也最简单，UCS-2的BMP空间中，第0行就是ASCII的编码空间，而且一一对应。因为所有字符集都支持它，除了特殊的编码要求外如UTF-16，基本上不用转换。在GNU开源的libiconv中，它的转换程序只有简单的两个函数：

	static int
	ascii_mbtowc (conv_t conv, ucs4_t *pwc, const unsigned char *s, int n)
	{
	  unsigned char c = *s;
	  if (c < 0x80) {
	    *pwc = (ucs4_t) c;
	    return 1;
	  }
	  return RET_ILSEQ;
	}
	
	static int
	ascii_wctomb (conv_t conv, unsigned char *r, ucs4_t wc, int n)
	{
	  if (wc < 0x0080) {
	    *r = wc;
	    return 1;
	  }
	  return RET_ILUNI;
	}

ucs4_t是4个字节的int类型，conv_t是conv_struct结构体指针，包含有函数指针，在需要特定转换规则时使用。


### ISO-8859-1转码
ISO-8859-1 字符集，对应代码页28591，其编码范围是0x00-0xFF，0x00-0x7F之间完全和ASCII一致，0x80-0x9F之间是控制字符，0xA0-0xFF之间是文字符号。0x80-0xFF这部分在Unicode系统中称为拉丁增补字符集Latin-1 Supplement，被完整收录在Unicode字符集中的BMP的第0行中，字符也一一对应。所以ISO-8859-1转Unicode的方法和上面ASCII的完全一样，而反向转换时只需要将条件更换即可：

	wc < 0x0100

完整的码表可以在这查询 [Unicode 6.3 码表查询][1]。



### ISO-8859-15转码
由于 ISO-8859-1 没有收录法语使用的 œ、Œ、Ÿ 三个字母及芬兰语使用的 Š、š、Ž、ž ，故于1998年被ISO/IEC 8859-15所取代，它们的差别在于以下这些字符：

	Position    0xA4 0xA6 0xA8 0xB4 0xB8 0xBC 0xBD 0xBE
	8859-1      ¤    ¦    ¨    ´    ¸    ¼    ½    ¾
	8859-15     €    Š    š    Ž    ž    Œ    œ    Ÿ

由于这些细小的字符差异的出现，转码的问题就接着来了。为了处理这些字符的映射关系，面对大量的字符集，这可是要花费大量的精力的，好在已经有前人造好轮子了。这里就使用GNU造好的代码 libiconv，它的做法并不是挑出这几个有差异的字符来做特殊处理，而是将有差异的整个区 0xa0-0xc0 单独分离出来做一个小的映射表：

	static const unsigned short iso8859_15_2uni[32] = {
	  /* 0xa0 */
	  0x00a0, 0x00a1, 0x00a2, 0x00a3, 0x20ac, 0x00a5, 0x0160, 0x00a7,
	  0x0161, 0x00a9, 0x00aa, 0x00ab, 0x00ac, 0x00ad, 0x00ae, 0x00af,
	  /* 0xb0 */
	  0x00b0, 0x00b1, 0x00b2, 0x00b3, 0x017d, 0x00b5, 0x00b6, 0x00b7,
	  0x017e, 0x00b9, 0x00ba, 0x00bb, 0x0152, 0x0153, 0x0178, 0x00bf,
	};

这样做的好处就是代码逻辑更清晰，判断语句更少运行速度更快，代价就是为重复的内容增加一部分内存消耗。向Unicode转换时，只需要在指定的映射页做检测。反向转换时，就需要对散落的Unicode进行复杂一点的检测：

	static const unsigned char iso8859_15_page00[32] = {
	  0xa0, 0xa1, 0xa2, 0xa3, 0x0 , 0xa5, 0x0 , 0xa7, /* 0xa0-0xa7 */
	  0x0 , 0xa9, 0xaa, 0xab, 0xac, 0xad, 0xae, 0xaf, /* 0xa8-0xaf */
	  0xb0, 0xb1, 0xb2, 0xb3, 0x0 , 0xb5, 0xb6, 0xb7, /* 0xb0-0xb7 */
	  0x0 , 0xb9, 0xba, 0xbb, 0x0 , 0x0 , 0x0 , 0xbf, /* 0xb8-0xbf */
	};
	static const unsigned char iso8859_15_page01[48] = {
	  0x00, 0x00, 0xbc, 0xbd, 0x00, 0x00, 0x00, 0x00, /* 0x50-0x57 */
	  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, /* 0x58-0x5f */
	  0xa6, 0xa8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, /* 0x60-0x67 */
	  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, /* 0x68-0x6f */
	  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, /* 0x70-0x77 */
	  0xbe, 0x00, 0x00, 0x00, 0x00, 0xb4, 0xb8, 0x00, /* 0x78-0x7f */
	};
	
	static int
	iso8859_15_wctomb (conv_t conv, unsigned char *r, ucs4_t wc, int n)
	{
	  unsigned char c = 0;
	  if (wc < 0x00a0) {
	    *r = wc;
	    return 1;
	  }
	  else if (wc >= 0x00a0 && wc < 0x00c0)
	    c = iso8859_15_page00[wc-0x00a0];
	  else if (wc >= 0x00c0 && wc < 0x0100)
	    c = wc;
	  else if (wc >= 0x0150 && wc < 0x0180)
	    c = iso8859_15_page01[wc-0x0150];
	  else if (wc == 0x20ac)
	    c = 0xa4;
	  if (c != 0) {
	    *r = c;
	    return 1;
	  }
	  return RET_ILUNI;
	}

从映射表可以看到，Unicode编码在0xA0-0xC0、0x0150-0x0180两个映射页的无效字符被映射成 0x00，而这个值最后会被认为无效字符。



### ISO-8859-5转码
ISO 8859-5 Cyrillic是西斯里语言，俄罗斯就是这种语言地区。完全兼容ASCII，增加96个泰国字符，并编码在0xA1-0xFF。Unicode系统中有Cyrillic子集对应，由于映射不是完全的一一对应，所以需要进行手动编制映射表：

	0x00-0xA0 -> U+0000-U+00A0 ASCII
	0xA1-0xFF -> U+0401-U+04FF Cyrillic
	个别字符需要重定向：
	     0xAD -> U+00AD  Soft hyphen
	     0xF0 -> U+2116 № Letterlike Symbols
	     0xFD -> U+00A7 § Section sign

根据这个映射就可以编制完整的转换程序。


### ISO-8859-11转码
ISO-8859-11是泰语字符集，和其它ISO-8859系列一样完全兼容ASCII。增加泰国字符，并编码在0xA1-0xFB，和Unicode系统 U+0E01 开始的Thai字符空间一一对应。 0xDB-0xDE 中有四个未定义的空，映射关系：

	0x00-0xA0 -> U+0000-U+00A0 ASCII
	0xA1-0xFF -> U+0E01-U+0E5B Thai
	             U+0E3B-U+0E3E Undefined

因此它的转码过程也比较简单：

	static int
	iso8859_11_mbtowc (conv_t conv, ucs4_t *pwc, const unsigned char *s, int n)
	{
	  unsigned char c = *s;
	  if (c < 0xa1) {
	    *pwc = (ucs4_t) c;
	    return 1;
	  }
	  else if (c <= 0xfb && !(c >= 0xdb && c <= 0xde)) {
	    *pwc = (ucs4_t) (c + 0x0d60);
	    return 1;
	  }
	  return RET_ILSEQ;
	}
	
	static int
	iso8859_11_wctomb (conv_t conv, unsigned char *r, ucs4_t wc, int n)
	{
	  if (wc < 0x00a1) {
	    *r = wc;
	    return 1;
	  }
	  else if (wc >= 0x0e01 && wc <= 0x0e5b && !(wc >= 0x0e3b && wc <= 0x0e3e)) {
	    *r = wc-0x0d60;
	    return 1;
	  }
	  return RET_ILUNI;
	}

这个字符集相近的代码页是 Code page 874，但是有9个符号字符不一致，并不影响正常使用。



### ISO-8859-16转码
ISO-8859-16字符集相比ISO-8859-15，变动的字体增加到了40个，变换映射：

	0x00-0xA0 -> U+0000-U+00A0 ASCII
	字符零散分布在 Latin Extended-A Latin Extended-B等等子集上：
	     0xA1 -> U+0104 Ą LATIN CAPITAL LETTER A WITH OGONEK
	     0xA2 -> U+0105 ą LATIN SMALL LETTER A WITH OGONEK
	     0xA3 -> U+0141 Ł LATIN CAPITAL LETTER L WITH STROKE
	     0xA4 -> U+20AC € EURO SIGN
	     0xA5 -> U+201E „ DOUBLE LOW-9 QUOTATION MARK
	     0xA6 -> U+0160 Š LATIN CAPITAL LETTER S WITH CARON
	     0xA7 -> U+00A7 § SECTION SIGN
	     0xA8 -> U+0161 š LATIN SMALL LETTER S WITH CARON
	     0xA9 -> U+00A9 © COPYRIGHT SIGN
	     0xAA -> U+0218 
	     0xAB -> U+00AB « LEFT-POINTING DOUBLE ANGLE QUOTATION
	     0xAC -> U+0179 Ź LATIN CAPITAL LETTER Z WITH ACUTE
	     0xAD -> U+00AD SOFT HYPHEN
	     0xAE -> U+017A ź LATIN SMALL LETTER Z WITH ACUTE
	     0xAF -> U+017B Ż LATIN CAPITAL LETTER Z WITH DOT ABOVE
	     ...




## 编码检测
编码检测是一个非常好的功能，在提示用户前进行编码自动侦测可以提高用户体验，也算是一个自动化的体现。浏览器就有一个自动识别页面编码的功能，但编码方案众多，就以ISO8859系列就有多达十数个方案，理论上不可能实现完全正确的检测，应该叫编码推测更恰当。

开源的mozilla就有编码检测工具 CharDet，后来有发布了universalchardet，用于Firefox的自动编码识别，代码在这里 [uchardet][10]，它的检测方法比较复杂显得混乱。

检测算法上，可以按平台进行字符集分类，再根据各字符集的码值分布情况进行分析。ASCII作为支持度最高的一种编码，它的码值范围在 0x20-0x7E，而如果有出现 0x00-0x1F 和 0x80-0x9F 的基本上可以断定是二进制文件，因为这两块都是不可显示字符，而多字节字符集的值又会大于这个值。GB2312的编码值为 0xA1-0xFE，BIG5的编码值为 0x81-0xFE，0x40-0x7E，0xA1-0xFE。

当检测到一个字符集中无定义的值时，就可以用来排除后选字符集，ISO-8859-3/6/7/8/11 都存在无定义码点。当所有条件都测试过后，可以统计得到一个概率排序表。在第一个预检测阶段一般不进行全文检测，在得到优先排序的编码方案后，再逐个尝试，直到可以完整解码却可。

一份统计显示最常用的几种语言排行如下，可以根据这个榜单来给特定的字符集进行加权。

	1. 官话(11亿)               GB2312 GBK GB18030 BIG5
	2. 英语(3.3亿)              ASCII/ISO 8859
	3. 西班牙语(3亿)            ISO 8859-1 Latin-1/ISO 8859-15 Latin-9
	4. 印地语/乌尔都语(2.5亿)    ISO 8859-6 Arabic
	5. 阿拉伯语(2亿)            ISO 8859-6 Arabic
	6. 孟加拉语(1.85亿)         ISCII Bengali
	7. 葡萄牙语(1.6亿)          ISO 8859-15 Latin-9
	8. 俄语(1.6亿)              ISO 8859-5 Cyrillic
	9. 日语(1.25亿)             SHIFT-JIS 932
	10. 德语(1亿)               ISO 8859-15 Latin-9/ISO 8859-16 Latin-10
	11. 旁遮普语(0.9亿)         ISCII Panjabi/Gujarati/Gurmukhi
	12. 爪哇语(0.8亿)           Javanese
	13. 法语(0.75亿)            ISO 8859-15 Latin-9/ISO 8859-16 Latin-10




## Unicode 12.1 平面分块数据

•  [The Unicode® Standard 12.0 – Core Specification](https://www.unicode.org/versions/Unicode12.0.0)
•  [Unicode Character Database](https://www.unicode.org/Public/12.1.0/ucd/Blocks.txt)

Unicode 12.0 adds 554 characters, for a total of 137,928 characters. 
Unicode 12.1 adds exactly one character, for a total of 137,929 characters.

Unicode 12.1 defines 300 blocks:

•  163 in plane 0, the Basic Multilingual Plane (BMP)
•  127 in plane 1, the Supplementary Multilingual Plane (SMP)
•  6 in plane 2, the Supplementary Ideographic Plane (SIP)
•  2 in plane 14 (Plane 0xE), the Supplementary Special-purpose Plane (SSP)
•  One each in planes 15 (0xF) and 16 (0x10), Supplementary Private Use Area-A and -B

Unicode 12.1, the BMP comprises the following 163 blocks:

基本字母符号集：

    (0000–007F) Basic Latin (Lower half of ISO/IEC 8859-1: ISO/IEC 646:1991-IRV aka ASCII)
    (0080–00FF) Latin-1 Supplement (Upper half of ISO/IEC 8859-1)
    (0100–017F) Latin Extended-A
    (0180–024F) Latin Extended-B
    (0250–02AF) IPA Extensions
    (02B0–02FF) Spacing Modifier Letters
    (0300–036F) Combining Diacritical Marks
    (0370–03FF) Greek and Coptic
    (0400–04FF) Cyrillic
    (0500–052F) Cyrillic Supplement
    (0530–058F) Armenian

Aramaic Scripts:

    (0590–05FF) Hebrew
    (0600–06FF) Arabic
    (0700–074F) Syriac
    (0750–077F) Arabic Supplement
    (0780–07BF) Thaana
    (07C0–07FF) N'Ko
    (0800–083F) Samaritan
    (0840–085F) Mandaic
    (0860–086F) Syriac Supplement
    (08A0–08FF) Arabic Extended-A

Brahmic scripts:

    (0900–097F) Devanagari
    (0980–09FF) Bengali
    (0A00–0A7F) Gurmukhi
    (0A80–0AFF) Gujarati
    (0B00–0B7F) Oriya
    (0B80–0BFF) Tamil
    (0C00–0C7F) Telugu
    (0C80–0CFF) Kannada
    (0D00–0D7F) Malayalam
    (0D80–0DFF) Sinhala
    (0E00–0E7F) Thai
    (0E80–0EFF) Lao
    (0F00–0FFF) Tibetan
    (1000–109F) Myanmar
    (10A0–10FF) Georgian
    (1100–11FF) Hangul Jamo
    (1200–137F) Ethiopic
    (1380–139F) Ethiopic Supplement
    (13A0–13FF) Cherokee
    (1400–167F) Unified Canadian Aboriginal Syllabics
    (1680–169F) Ogham
    (16A0–16FF) Runic

Philippine scripts:

    (1700–171F) Tagalog
    (1720–173F) Hanunoo
    (1740–175F) Buhid
    (1760–177F) Tagbanwa
    (1780–17FF) Khmer
    (1800–18AF) Mongolian
    (18B0–18FF) Unified Canadian Aboriginal Syllabics Extended
    (1900–194F) Limbu

Tai scripts:

    (1950–197F) Tai Le
    (1980–19DF) New Tai Lue
    (19E0–19FF) Khmer Symbols
    (1A00–1A1F) Buginese
    (1A20–1AAF) Tai Tham
    (1AB0–1AFF) Combining Diacritical Marks Extended
    (1B00–1B7F) Balinese
    (1B80–1BBF) Sundanese
    (1BC0–1BFF) Batak
    (1C00–1C4F) Lepcha
    (1C50–1C7F) Ol Chiki
    (1C80–1C8F) Cyrillic Extended-C
    (1C90–1CBF) Georgian Extended
    (1CC0–1CCF) Sundanese Supplement
    (1CD0–1CFF) Vedic Extensions

Latin-2 supplement:

    (1D00–1D7F) Phonetic Extensions
    (1D80–1DBF) Phonetic Extensions Supplement
    (1DC0–1DFF) Combining Diacritical Marks Supplement
    (1E00–1EFF) Latin Extended Additional
    (1F00–1FFF) Greek Extended

Symbols:

    (2000–206F) General Punctuation
    (2070–209F) Superscripts and Subscripts
    (20A0–20CF) Currency Symbols
    (20D0–20FF) Combining Diacritical Marks for Symbols
    (2100–214F) Letterlike Symbols
    (2150–218F) Number Forms
    (2190–21FF) Arrows
    (2200–22FF) Mathematical Operators
    (2300–23FF) Miscellaneous Technical
    (2400–243F) Control Pictures
    (2440–245F) Optical Character Recognition
    (2460–24FF) Enclosed Alphanumerics
    (2500–257F) Box Drawing
    (2580–259F) Block Elements
    (25A0–25FF) Geometric Shapes
    (2600–26FF) Miscellaneous Symbols
    (2700–27BF) Dingbats
    (27C0–27EF) Miscellaneous Mathematical Symbols-A
    (27F0–27FF) Supplemental Arrows-A
    (2800–28FF) Braille Patterns
    (2900–297F) Supplemental Arrows-B
    (2980–29FF) Miscellaneous Mathematical Symbols-B
    (2A00–2AFF) Supplemental Mathematical Operators
    (2B00–2BFF) Miscellaneous Symbols and Arrows
    (2C00–2C5F) Glagolitic
    (2C60–2C7F) Latin Extended-C
    (2C80–2CFF) Coptic
    (2D00–2D2F) Georgian Supplement
    (2D30–2D7F) Tifinagh
    (2D80–2DDF) Ethiopic Extended
    (2DE0–2DFF) Cyrillic Extended-A
    (2E00–2E7F) Supplemental Punctuation

CJK scripts and symbols:

    (2E80–2EFF) CJK Radicals Supplement
    (2F00–2FDF) Kangxi Radicals
    (2FF0–2FFF) Ideographic Description Characters
    (3000–303F) CJK Symbols and Punctuation
    (3040–309F) Hiragana
    (30A0–30FF) Katakana
    (3100–312F) Bopomofo
    (3130–318F) Hangul Compatibility Jamo
    (3190–319F) Kanbun
    (31A0–31BF) Bopomofo Extended
    (31C0–31EF) CJK Strokes
    (31F0–31FF) Katakana Phonetic Extensions
    (3200–32FF) Enclosed CJK Letters and Months
    (3300–33FF) CJK Compatibility
    (3400–4DBF) CJK Unified Ideographs Extension A
    (4DC0–4DFF) Yijing Hexagram Symbols
    (4E00–9FFF) CJK Unified Ideographs
    (A000–A48F) Yi Syllables
    (A490–A4CF) Yi Radicals
    (A4D0–A4FF) Lisu
    (A500–A63F) Vai
    (A640–A69F) Cyrillic Extended-B
    (A6A0–A6FF) Bamum
    (A700–A71F) Modifier Tone Letters
    (A720–A7FF) Latin Extended-D
    (A800–A82F) Syloti Nagri
    (A830–A83F) Common Indic Number Forms
    (A840–A87F) Phags-pa
    (A880–A8DF) Saurashtra
    (A8E0–A8FF) Devanagari Extended
    (A900–A92F) Kayah Li
    (A930–A95F) Rejang
    (A960–A97F) Hangul Jamo Extended-A
    (A980–A9DF) Javanese
    (A9E0–A9FF) Myanmar Extended-B
    (AA00–AA5F) Cham
    (AA60–AA7F) Myanmar Extended-A
    (AA80–AADF) Tai Viet
    (AAE0–AAFF) Meetei Mayek Extensions
    (AB00–AB2F) Ethiopic Extended-A
    (AB30–AB6F) Latin Extended-E
    (AB70–ABBF) Cherokee Supplement
    (ABC0–ABFF) Meetei Mayek
    (AC00–D7AF) Hangul Syllables
    (D7B0–D7FF) Hangul Jamo Extended-B

Surrogates:

    (D800–DB7F) High Surrogates
    (DB80–DBFF) High Private Use Surrogates
    (DC00–DFFF) Low Surrogates
    (E000–F8FF) Private Use Area
    (F900–FAFF) CJK Compatibility Ideographs
    (FB00–FB4F) Alphabetic Presentation Forms
    (FB50–FDFF) Arabic Presentation Forms-A
    (FE00–FE0F) Variation Selectors
    (FE10–FE1F) Vertical Forms
    (FE20–FE2F) Combining Half Marks
    (FE30–FE4F) CJK Compatibility Forms
    (FE50–FE6F) Small Form Variants
    (FE70–FEFF) Arabic Presentation Forms-B
    (FF00–FFEF) Halfwidth and Fullwidth Forms
    (FFF0–FFFF) Specials

## 资源参考

- Charles Petzold著《Programming Windows 5th edition》
- CJKV Information Processing - Ken Lunde - O'Reilly
- Addison Wesley《The Unicode Standard Version 5.0》
- [Fonts & Encodings 带目录版][16]
- [GNU Libiconv Win32][12] - [GNU Libiconv][8] - [GNU LibIntl][13]
- [Unicode 6.3 码表查询][1]
- [Short overview of ISO/IEC 10646 and Unicode][2]
- [Code200 Unicode字体][3]
- [International Components for Unicode][5]
- [Unicode Kanji Code Table][6]
- [代码页映射表][9]
- [uchardet on github][10]
- [ISO/IEC 8859][11]
- [FreeType Project][14]

[1]: http://www.unicode.org/charts/ "Unicode 6.3 码表"
[2]: http://www.nada.kth.se/i18n/ucs/unicode-iso10646-oview.html "Short overview of ISO/IEC 10646 and Unicode"
[3]: http://www.alanwood.net/downloads/index.html "code2000"
[4]: http://source.icu-project.org/repos/icu/data/trunk/charset/source/gb18030/gb18030.html "International Components for Unicode"
[5]: https://en.wikipedia.org/wiki/UTF-16 "wikipedia UTF-6"
[6]: http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml "Unicode Kanji Code Table"
[7]: http://icu-project.org/docs/papers/gb18030.html "GB 18030: A mega-codepage"
[8]: http://www.gnu.org/software/libiconv/ "GNU Iconv"
[9]: http://www.unicode.org/Public/MAPPINGS/ "代码页映射表"
[10]: https://github.com/BYVoid/uchardet "uchardet on github"
[11]: https://en.wikipedia.org/wiki/ISO/IEC_8859 "ISO/IEC 8859"
[12]: http://gnuwin32.sourceforge.net/packages/libiconv.htm "GNU Libiconv Win32"
[13]: http://gnuwin32.sourceforge.net/packages/libintl.htm "GNU LibIntl"
[14]: http://www.freetype.org/ "FreeType Project"
[15]: http://www.unicode.org/charts/PDF/U2600.pdf "Miscellaneous Symbols Range: 2600–26FF"
[16]: http://download.csdn.net/detail/winsenjiansbomber/9437282 "Fonts & Encodings by Yannis Haralambous and P Scott Horne 带目录版"

[17]: https://en-academic.com/dic.nsf/enwiki/11690362
[18]: https://paul-marciano.fandom.com/wiki/Supplementary_Multilingual_Plane

[51]: https://en-academic.com/pictures/enwiki/82/Roadmap_to_Unicode_BMP.svg "Unicode BMP"
[52]: https://static.wikia.nocookie.net/paul-marciano/images/0/00/Roadmap_to_the_Unicode_SMP.svg "Unicode SMP"