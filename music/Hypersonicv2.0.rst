
Hypersonic v2.0
---------------

   Steinberg Hypersonic(斯坦伯格波表音源) v2.0
   https://o.steinberg.net/index.php?id=902&L=1

   软件大小: 1.5 GB
   更新时间: 2017-01-14
   软件语言: 简体中文
   软件厂商: Steinberg

   文杰 Hypersonic2 混音教程 https://www.bilibili.com/video/BV19W411z7xa

   Steinberg Hypersonic 又称斯坦伯格波表音源，这是由 Wizoo 公司推出的一款音源软件，
   软件内置了丰富的音色供使用者选择，包含了 1000 个预置音色，100 个组合音色，70 套鼓组，
   2560 个用户自定义音色，同时还拥有 5 种合成引擎供使用者选择，可以完美兼容 64 位操作系统。

   Hypersonic 只能使用 16 个乐器轨道，每人轨道可以 Link 到前一个轨道，以使用相同的 MIDI 轨道。
   在插件的 MIDI 面板中，可以给每个通道设置触发条件，包含：

   1. Key Range 键盘触发范围。
   2. Vel Range 力度触发范围。
   3. Semi 和 Cent 为音高调整，分别按半音、微分音调整，Transposing and tuning。
   4. Voices 参数限制某个部分的复音数量，更少的复音高系统性能更好。
   5. 最后一个是参数锁，Parameter lock 防止参数被重置。

   在宿主软件中加载 Hypersonic 时，可以使用键盘输入音符，界面空白区的右键菜单激活 Play PC Keyboard。

   软件音源的声音生成配置文件有全轨 Combi (fxb) 和单轨 Patch (fxp) 两种，可以通过 Setup 面板
   进行导入、导出操作，并可以与他人分享相应的配置文件：

   *   Combi
      The top level in the Hypersonic 2 structure is the combi. A combi is a
      complete setting or status of the instrument including loaded patches,
      part settings, temporary edits and parts of the setup.
      Combis can be fully edited and loaded and stored to disk.

   *   Patch
      A patch is one sound (otherwise referred to as program, voice or preset) 
      that can be loaded into a part slot.
      A patch is built from up to 16 elements (drumkits: up to 64).
      Patches can be loaded from and stored to disk. They can be effectively
      tweaked using the Hyperknobs and fine-tweaked in the Edit page.

   *   Element
      An element is the smallest building block of a patch. Any element within
      a patch can be either a synthesis element or an FX element. Elements
      can be found and edited on the edit page.

   在插件界面中 Setup - MIDI Settings - GM On 可以自动映射 MIDI 波表音色到 MIDI 轨道。
   MIDI 控制器的 Program Change 参数用于控制音色的选择，Pgm Change On 表示自动映射。
   在轨道右键菜单，Save Combi 和 Save Patch 分别保存轨道音色配置，以及乐器参数配置。
   数据保存在 Load - User Combi 或 User Patches 分类中。在 Combi 面板可以加载预置的
   工厂乐器配置，Factory Chain.h2c，也可以使用右键设置自己的乐器配置，并保存到配置文件。
   使用 16 号轨道可以用来选择配置，在选择音色配置时会在面板中提示其对应的 Bank 和 Prog 序号：

   1. Preset combi bank: 120
   2. User combi banks: 121-128

   Bank 即指代一组乐器配置，或者一套音色配置。

   全局效果器在 FX 面板中设置，分为 Global FX 和 Patch FX 两种共享 8 个。
   Edit 面板中可以插入多个效果器，每个空方块都可以放置一个效果器，点击现有的效果器方格，在弹出
   菜单中选择要添加的效果器类型。点击 FX 效果器方块图标，可以设置全局效果器 FX1 - FX4 的百分比。

   Setup - Audio Settings 中默认激活了 4 个音频输出通道，总共可以使用 16 个音频输出通道，
   修改通道激活状态需要重新加载插件。在 Mix 面板中，可以设置每个乐器通道所使用的音频输出通道。
   Cubase 中默认就可以使用多通道音源功能。FL Studio 中需要额外设置，在插件界面左上角的箭头
   下拉菜单中设置：Enable multiple outputs。新版本则默认为 Tracks 指定及后续 3 个通道，
   也可以点击齿轮图标打开插件设置界面，选择 Processing 栏目，可以看到 Auto map outputs
   中罗列了 Multi-Output VSTi 的多轨输出映射。

   Setup - MIDI Settings 设置面板中 GM On 状态下，会自动根据 MIDI 信号选择波表软音源。

   主界面中提供了一组六个的 Hyperknobs 微调旋钮，它们根据当前轨道加载的音源不同而提供不同的微调功能。
   音源提供了组合音色功能（Combis），可以在 Load 页板中选择预置的组合音色，或者通过 Combis 面板管理
   预置文件。在加载面板中 Combis 和 User Combis 是组合音源专用分组，其它音源分组目录下的组合音源使用
   双波浪线图标表示，例如 Acoustic Pianos -> Piano + String XXL。

   组合音乐就是将多个音色组合在一起，可以通过轨道中的 Link 状态来切换组合状态，激活链接（拆线箭头）就是
   处于组合状态。MIDI 信息传入组合音色所在轨道时，所有组合音色就被激活。Hyperknobs 微调旋钮对各个轨道
   独立调节。按下 Ctrl 点击可以恢复旋钮的默认值。

   The Combi Chain 功能（COMBI 面板）用于预加载最多 128 个组合音源，并且可以通过 MIDI 的信号
   （program change）进行切换。此功能可用在舞台演奏时用于切换音色。

   效果器是在软音源声音合成过程中用于实现效果调节的功能模块，主要有三个面板与效果器操作相关：

   * 编辑面板（Edit）中可以向声音合成的流程中插入多个效果器；
   * FX 面板包含 8 个固定效果器，Global FX 和 Combis FX 各 4 个；
   * MIX 混音面板中可以处理 FX 面板中的发送到 Out 1 ~ 4 输出通道的声音；

   大多数软音源合成器都是减法合成器，即通过振荡器产生丰富的原始波形数据，再通过滤波器过滤掉不需的频率，
   只保留用户想到保留的部分，再通过调制参数修正，比如 ADSR — Attack, Decay, Sustain, Release。

   .. figure:: https://blog-api.landr.com/wp-content/uploads/2016/10/ASDR-01.jpg

   *  `减法合成器原理 <https://www.bilibili.com/vieo/BV1AC4y1175D/>`__
   *  `许镜清谈《西游记》片头曲 <https://www.bilibili.com/video/BV1PE4m1R77u/>`__
   *  `100 Orchestration Techniques <https://www.bilibili.com/video/BV1cL4y1x74c/>`__
   *  `Sylenth1软件合成器全系列中文教学 <https://www.bilibili.com/video/BV1rW411P74R>`__

   ## Hypersonic 2 特色

   1、带有 1.7GB 的音色
   2、1800 个预置音色
   3、占用更小的资源
   4、1024 复音的无损回放系统
   5、增强对声音的编辑能力
   6、调音台提供对声像、输出通道、效果发送等完整的控制能力
   7、增加 Hyperphrase，这是一个复音琶音器，可读取 MIDI
   8、增加现场演奏模式，可在演奏的同时通过调制轮或按钮发出的 MIDI 信息发送音色改变信息，来读取其它音色，这意味着演奏者不必使用鼠标或显示器，就可随时切换音色
   9、支持 ReWire，可独立运行

   ## 更新说明
   Wizoo 再次发布新的 Hypersonic 声音模块：

   - GM-4：GM-4 为 Hypersonic 添加了对 GM 音色的支持，GM-4 本身带有 128 个标准GM音色，鼓组，还有额外的 110M 音色(未压缩大小为330M)
   - GP-2：大钢琴音色扩展模块，可调参数：软度、自然度、明亮度、硬度3种预置力度曲线
   - NB-3：风琴音色扩展模块，带有9个可调拉杆
   - US-1：超级合成器，3个带有多种波形的震荡器，波表合成器，多模式滤波器，3个低频震荡器，3个包络发生器，带有调制矩阵

   ## 安装教程
   1、下载软件压缩包文件，运行“[斯坦伯格波表音源]Steinberg.Hypersonicv2.0.I.iso”文件，选择“setup.exe”安装程序
   2、在安装目录下新建一个文件夹，将Hypersonic安装文件全部选择在此文件夹中，注意：安装盘符的选择必须与cubase的安装盘符保持一致，这点很重要!
   3、点击“Next”进一步安装即可，这里没有什么需要说明的，直到安装结束
   4、安装完成之后，将虚拟光驱中的音色文件夹Hypersonic 2 Content复制到软件的根目录下
   5、下面进行汉化操作，首先将压缩包内“汉化.rar”解压，并将里面的Patches文件夹(全部)复制到刚才的音色文件夹中(C:\Hypersonic 2 Content)
   6、运行jBridger(JB桥)，选择第二项转为64位，其他默认即可，默认盘符不变，等待转换完成
   7、完成之后得到 Hypersonic.exe、HypersonicReWore.dll、HypersonicRewire.rwdef，至此，Hypersonic 2的安装算是基本完成了。
   8、下面打开Cubase软件，选择“设备”—“插件信息”选项
   9、选择VST插件路径，将Hypersonic 2的安装目录导入软件中，然后点击“刷新”按钮，刷新插件库，如下图所示：
   10、在VST乐器选项中，选择刚才添加的Hypersonic.64为插件，即可打开Hypersonic 2了，亲测可用，并且能够保存音源

Hypersonic2 音色表
~~~~~~~~~~~~~~~~~

   01、Ultra Synth US-1合成器
   02、Grand Piano GP-2钢琴合成器
   03、Tonewheel Organs NB-3 风琴合成器 Orpeggian(短音)
   04、HS2 Preview Patch HS2 合成器精选音色
   05、Phrases HS2 原声琶音组
   06、HS1 Preview Patch HS1 合成器精选音色
   07、Natural Drum 原声鼓 Reversed Drums
   08、Natural Percussion 原声打击
   09、Contemporary Kits 电子鼓
   10、Contemporary Percussion 电子打击
   11、Drum Menus 鼓音色组
   12、Drum Loops 鼓Loop
   13、Acoustic Piano 原声钢琴
   14、Electric Piano 电钢
   15、Clavinets Clavinets电钢
   16、Organs 风琴组
   17、Harpsichord 羽键琴
   18、Mallets 色彩打击乐
   19、Bells 铃类
   20、Percussive 电子色彩打击乐
   21、Synth Bass 合成贝司
   22、Acoustic Bass 原声贝司
   23、Electric Bass 电贝司
   24、Acoustic Guitar 木吉他
   25、Electric Guitar Clean 电吉他
   26、Electric Guitar Distortion 失真吉他
   27、String 弦乐
   28、Orchestral 管弦乐
   29、Hits 管弦乐重击
   30、Vocal 人声
   31、Brass Sections 管乐组
   32、Solo Brass 管乐独奏
   33、Saxes 萨克斯组
   34、Woodwinds 木管组
   35、Ethnic 民族乐器
   36、Accordions+Harmonics 手风琴+口琴
   37、Soft Pads Pad组
   38、Bright Pads Pad组
   39、Moving Pads Pad组
   40、Soundscapes 环境音效
   41、Techno Synths Techno合成
   42、Poly Synths Poly合成
   43、Arpeggios 电子琶音
   44、Synths Brass 合成管乐
   45、Soft Leads 合成主音(柔和)
   46、Hard Leads 合成主音(硬)
   47、Synths FX 合成音效
   48、Sound FX 采样音效
   49、Test Patches 测试音
   50、GM Patches GM128
   51、GM Drums GM鼓组
   52、Combis 音色组

   ## GM 音色表

   钢琴

   0 Acoustic Grand Piano 大钢琴(声学钢琴)
   1 Bright Acoustic Piano 明亮的钢琴
   2 Electric Grand Piano 电钢琴
   3 Honky-tonk Piano 酒吧钢琴
   4 Rhodes Piano 柔和的电钢琴
   5 Chorused Piano 加合唱效果的电钢琴
   6 Harpsichord 羽管键琴(拨弦古钢琴)
   7 Clavichord 科拉维科特琴(击弦古钢琴)

   色彩打击乐器

   8 Celesta 钢片琴
   9 Glockenspiel 钟琴
   10 Music box 八音盒
   11 Vibraphone 颤音琴
   12 Marimba 马林巴
   13 Xylophone 木琴
   14 Tubular Bells 管钟
   15 Dulcimer 大扬琴

   风琴

   16 Hammond Organ 击杆风琴
   17 Percussive Organ 打击式风琴
   18 Rock Organ 摇滚风琴
   19 Church Organ 教堂风琴
   20 Reed Organ 簧管风琴
   21 Accordian 手风琴
   22 Harmonica 口琴
   23 Tango Accordian 探戈手风琴

   吉他

   24 Acoustic Guitar (nylon) 尼龙弦吉他

   25 Acoustic Guitar (steel) 钢弦吉他
   26 Electric Guitar (jazz) 爵士电吉他
   27 Electric Guitar (clean) 清音电吉他
   28 Electric Guitar (muted) 闷音电吉他
   29 Overdriven Guitar 加驱动效果的电吉他
   30 Distortion Guitar 加失真效果的电吉他
   31 Guitar Harmonics 吉他和音

   贝司

   32 Acoustic Bass 大贝司(声学贝司)
   33 Electric Bass(finger) 电贝司(指弹)
   34 Electric Bass (pick) 电贝司(拨片)
   35 Fretless Bass 无品贝司
   36 Slap Bass 1 掌击Bass 1
   37 Slap Bass 2 掌击Bass 2
   38 Synth Bass 1 电子合成Bass 1
   39 Synth Bass 2 电子合成Bass 2

   弦乐

   40 Violin 小提琴
   41 Viola 中提琴
   42 Cello 大提琴
   43 Contrabass 低音大提琴
   44 Tremolo Strings 弦乐群颤音音色
   45 Pizzicato Strings 弦乐群拨弦音色
   46 Orchestral Harp 竖琴
   47 Timpani 定音鼓

   合奏/合唱

   48 String Ensemble 1 弦乐合奏音色1
   49 String Ensemble 2 弦乐合奏音色2
   50 Synth Strings 1 合成弦乐合奏音色1
   51 Synth Strings 2 合成弦乐合奏音色2
   52 Choir Aahs 人声合唱“啊”
   53 Voice Oohs 人声“嘟”
   54 Synth Voice 合成人声
   55 Orchestra Hit 管弦乐敲击齐奏

   铜管

   56 Trumpet 小号
   57 Trombone 长号
   58 Tuba 大号
   59 Muted Trumpet 加弱音器小号
   60 French Horn 法国号(圆号)
   61 Brass Section 铜管组(铜管乐器合奏音色)
   62 Synth Brass 1 合成铜管音色1
   63 Synth Brass 2 合成铜管音色2

   簧管

   64 Soprano Sax 高音萨克斯风
   65 Alto Sax 次中音萨克斯风
   66 Tenor Sax 中音萨克斯风
   67 Baritone Sax 低音萨克斯风
   68 Oboe 双簧管
   69 English Horn 英国管
   70 Bassoon 巴松(大管)
   71 Clarinet 单簧管(黑管)

   笛

   72 Piccolo 短笛
   73 Flute 长笛
   74 Recorder 竖笛
   75 Pan Flute 排箫
   76 Bottle Blow [中文名称暂缺]
   77 Shakuhachi 日本尺八
   78 Whistle 口哨声
   79 Ocarina 奥卡雷那

   合成主音

   80 Lead 1 (square) 合成主音1(方波)
   81 Lead 2 (sawtooth) 合成主音2(锯齿波)
   82 Lead 3 (caliope lead)

   合成主音3

   83 Lead 4 (chiff lead) 合成主音4
   84 Lead 5 (charang) 合成主音5
   85 Lead 6 (voice) 合成主音6(人声)
   86 Lead 7 (fifths) 合成主音7(平行五度)
   87 Lead 8 (bass+lead)合成主音8(贝司加主音)

   合成音色

   88 Pad 1 (new age) 合成音色1(新世纪)
   89 Pad 2 (warm) 合成音色2 (温暖)
   90 Pad 3 (polysynth) 合成音色3
   91 Pad 4 (choir) 合成音色4 (合唱)
   92 Pad 5 (bowed) 合成音色5
   93 Pad 6 (metallic) 合成音色6 (金属声)
   94 Pad 7 (halo) 合成音色7 (光环)
   95 Pad 8 (sweep) 合成音色8

   合成效果

   96 FX 1 (rain) 合成效果 1 雨声
   97 FX 2 (soundtrack) 合成效果 2 音轨
   98 FX 3 (crystal) 合成效果 3 水晶
   99 FX 4 (atmosphere) 合成效果 4 大气
   100 FX 5 (brightness) 合成效果 5 明亮
   101 FX 6 (goblins) 合成效果 6 鬼怪
   102 FX 7 (echoes) 合成效果 7 回声
   103 FX 8 (sci-fi) 合成效果 8 科幻

   民间乐器

   104 Sitar 西塔尔(印度)
   105 Banjo 班卓琴(美洲)
   106 Shamisen 三昧线(日本)
   107 Koto 十三弦筝(日本)
   108 Kalimba 卡林巴
   109 Bagpipe 风笛
   110 Fiddle 民族提琴
   111 Shanai 山奈

   打击乐器

   112 Tinkle Bell 叮当铃
   113 Agogo [中文名称暂缺]
   114 Steel Drums 钢鼓
   115 Woodblock 木鱼
   116 Taiko Drum 太鼓
   117 Melodic Tom 通通鼓
   118 Synth Drum 合成鼓
   119 Reverse Cymbal 铜钹

   Sound Effects 声音效果

   120 Guitar Fret Noise 吉他换把杂音
   121 Breath Noise 呼吸声
   122 Seashore 海浪声
   123 Bird Tweet 鸟鸣
   124 Telephone Ring 电话铃
   125 Helicopter 直升机
   126 Applause 鼓掌声
   127 Gunshot 枪声


HALion 黑龙
-----------

   *  `HALion 3 <https://o.steinberg.net/index.php?id=910&L=1>`__
   *  https://www.steinberg.net/vst-instruments/halion/

   Sample and Synthesis Platform
   HALion
   Full Versions from
   ¥1,963.00

   HALion 7 是一款开创性的全能工作站型综合音源（VST、AU、AAX），能够协助创造卓越的音乐作品与声音音效。
   HALion 可轻松“描绘”出你脑中所想的音色，甚至是全新的音色。该全能工作站型综合音源配备6种不同形式的合成
   引擎，一套性能强劲的采样引擎，脚本编辑功能，一套具有突破性的时值伸缩与再合成算法，以及简单易上手且支持
   快速分配的调制效果。

   *  超过 35GB 的素材库、超过 3,700 种预制音色、15 套音色库
   *  内置调频合成器、频谱振荡器、波表合成器、虚拟模拟合成器以及粒子合成器
   *  适用于大型音色库的高性能采样播放引擎
   *  超过 70 种音频处理效果器、外加众多调制效果及 MIDI 设定功能

   HALion 6 功能特色：

   *  针对再合成和未知声音创建的新一代波表合成。
   *  智能直流引擎直接录音，映射和播放音色。
   *  Macro Page Designer（宏页面设计器）可方便用户乐器和商业音色库界面的创建。
   *  用于高级乐器编程和定制 MIDI 模块的 HALion Script 脚本编程。
   *  方便的 Library Creator（音色库创建器）可轻松编译定制乐器。
   *  6 新的乐器库包括铜管，2 优美的三角钢琴，弦乐，尖端的波表合成器还有奇特的电影音色。
   *  3 段 Resonator（共鸣器）带 14 不同的滤波结构并整合了 LFO（低频振荡器）。
   *  扩展了兼容性，带原生 64 位 AAX 支持。
   *  包含 HALion Sonic 3。

   Steinberg HALion String Edition 为弦乐版，全套音色 5 GB，。安装 HALion String Player
   后，按照手册提示，可以使用 File 菜单提供的 “Load Instrument“ 或者 “Load Bank” 加载音色，
   但是 FL Studio 20 中加载的 VST 插件界面中并没有这个菜单。只能先选择乐器通道，再将 fxp 音色配置
   文件拖放到 Channel Rack 中的机架上。

   ================= =====================================
   **Instruments**
   Vln               Violins
   Vla               Violas
   Vlc               Cellos (Violoncelli)
   DB                Double Basses
   8vb               One octave lower than written

   **Articulations**
   Acc               Accent
   cresc ctrl        Crescendo Controller
   combi             Combination Program
   legato            Legato
   pizz              Pizzicato
   port/porta        Portamento
   spicc             Spiccato
   trem              Tremolo
   HT                Half Tone Trills
   WT                Whole Tone Trills
   Alternating       Alternating bowing (up<->down)
   ================= =====================================

   HALion 3.5 开始支持 64 位系统，增加 128 个电子套鼓和电子乐器音色。全套音色 4GB。FL Studio 
   中使用部分音色可能会有爆音现象，修改配置 Settings -> Audio -> Sample rate (Hz) -> 48000
   可以解决部分爆音问题。要完全解决因采样率带来的爆音，可以激活 HALion 质量选项面板中的专家模式：
   Options -> Quality -> Use Export Mode

   *  e-LAB Demo Content
   *  HALion 3 Sound Set 1: Drump Perc Bass
   *  HALion 3 Sound Set 2: Piano Keys
   *  HALion 3 Sound Set 3: Pad Synth Lead OSC
   *  HALion 3 Sound Set 4: Strings Brass Choir Guitar Pperc
   *  HALion 3 Sound Set 5: Synth Drums
   *  Garritan Orchestral Strings Demo

   HALion 3 Sound Set 1.hsb

      ================================== ==================================
      Big Gig Kit ECO.fxp                Lat Prc Drums + Wood.fxp
      Big Gig Kit MID.fxp                Lat Prc Metallic.fxp
      Big Gig Kit XXL.fxp                Lat Prc Shaken.fxp
      Round Robin Drums ECO.fxp          6 Str Bass Velo ECO.fxp
      Round Robin Drums MID.fxp          6 Str Bass Velo MID.fxp
      Round Robin Drums XXL.fxp          6 Str Bass Velo XXL.fxp
      Studio Drums  ECO.fxp              6 Str Bass XVel  MID.fxp
      Studio Drums  MID.fxp              6 Str Bass XVel ECO.fxp
      Studio Drums XXL.fxp               6 Str Bass XVel XXL.fxp
      Soul Kit ECO.fxp                   6 Str Bass Vel N HarmECO.fxp
      Soul Kit MID.fxp                   6 Str Bass Vel N Harm MID.fxp
      Soul Kit XXL.fxp                   6 Str Bass  Vel N HrmXXL.fxp
      Reverb Kit ECO.fxp                 6 Str Bass Vel NA HarmECO.fxp
      Reverb Kit MID.fxp                 6 Str Bass NA Hrm Velo MID.fxp
      Reverb Kit XXL.fxp                 6 Str Bass NA Hrm Velo XXL.fxp
      Drum n Bass Kit.fxp                6 Str Bass MTg HarmECO.fxp
      Drum n Bass Reso Kit.fxp           6 Str Bass MTg Harm MID.fxp
      Hip Hop Kit.fxp                    6 Str Bass MTg Harm XXL.fxp
      Hip Hop Kit  ECO.fxp               6 Str Bass MTg Slides ECO.fxp
      Tekkno Kit.fxp                     6 Str Bass MTg Slides MID.fxp
      Tekkno Kit ECO.fxp                 6 Str Bass MTg Slides XXL.fxp
      5.1 Rock Drums MW SW.fxp           Acoustic Bass.fxp
      5.1 Drums Large MW FD.fxp          Electric Pick Bass.fxp
      5.1 Drums Medium MW FD.fxp         Electric Slap Bass.fxp
      5.1 Drums Small MW FD.fxp          Fretless Bass.fxp
      5.1 Percussion.fxp                 Jaco Bass.fxp
      5.1 Movie SFX.fxp                  MiniMoog Bass.fxp
      5.1 Urban Atmospheres.fxp          OB8 Sawrubber Bass.fxp
      5.1 Check.fxp                      Nord Disco Bazz.fxp
      Latin PercECO.fxp                  Ultimoog Bass.fxp
      Latin Perc MID.fxp                 Nord Mewk Bass.fxp
      Latin Perc XXL.fxp                 Loops All.fxp
      MegaTrigg Perc ECO.fxp             Loops Slow Tempo.fxp
      MegaTrigg Perc  MID.fxp            Loops Medium Tempo.fxp
      MegaTrigg Perc XXL.fxp             Loops Fast Tempo.fxp
      ================================== ==================================

   HALion 3 Sound Set 2.hsb

      ================================== ==================================
      Grand Piano 1 + Keys ECO.fxp       Bubbler XXL.fxp
      Grand Piano 1 + Keys MID.fxp       Suitcase Chorus.fxp
      Grand Piano 1 + Keys XXL.fxp       Suitcase Autopan.fxp
      Grand Piano 2 + Keys ECO.fxp       Simple Suitcase.fxp
      Grand Piano 2 + Keys MID.fxp       Suitcase MTg.fxp
      Grand Piano 2 + Keys XXL.fxp       Mark 1 Chorus.fxp
      Grand Piano 1  ECO.fxp             Mark 1 AutoWah.fxp
      Grand Piano 1  MID.fxp             Simple Mark 1.fxp
      Grand Piano 1 XXL.fxp              Mark 1 MTg.fxp
      Grand Piano 2 ECO.fxp              DX PunchReeds.fxp
      Grand Piano 2  MID.fxp             Clavinet D6.fxp
      Grand Piano 2 XXL.fxp              Clavinet D6 Wah.fxp
      Gooseskin ECO.fxp                  D6 Dynawow.fxp
      Gooseskin MID.fxp                  B3 Rotor Fade Slow-Fast MW.fxp
      Gooseskin XXL.fxp                  B3 Straight.fxp
      Sparkle ECO.fxp                    B3 Rotor Slow.fxp
      Sparkle MID.fxp                    B3 Rotor Fast.fxp
      Sparkle XXL.fxp                    Stage Piano+ B3 Rotor.fxp
      Bubbler ECO.fxp                    Harpsichord.fxp
      Bubbler MID.fxp                    Heaven Harp.fxp
      ================================== ==================================

   HALion 3 Sound Set 3.hsb

      ================================== ==================================
      5.1 10000 sqm Pad MW.fxp           Sweepa.fxp
      Intro Sweep Pad.fxp                Strato Tron.fxp
      Long Swell Warm Pad.fxp            PeePeeGee.fxp
      Big String Pad.fxp                 Stryngi.fxp
      Reso Sweep Pad.fxp                 WaveBellz.fxp
      Shine.fxp                          Sparkles.fxp
      Waldorf Pad.fxp                    Sparkles Soft.fxp
      Warm Brass Pad.fxp                 Propaganda.fxp
      Wave SingSing.fxp                  Erazor FX.fxp
      LoFi Strings.fxp                   Jupiter Euro TekStrynx.fxp
      Octa Phase Strings.fxp             MiniMoog Porta Lead.fxp
      PPG Choir.fxp                      Jupiter Hard Sync.fxp
      RoboPad.fxp                        Frying V.fxp
      Cloudz Pad.fxp                     MultiMoog.fxp
      Warmer.fxp                         Voice Sync.fxp
      Electric V.fxp                     MiniMoog Long Saw Stereo.fxp
      OB8 Fat PWM.fxp                    MiniMoog Long Saw.fxp
      Syncerator.fxp                     MiniMoog VCO Saw.fxp
      80s Sequencer.fxp                  MiniMoog VCO Square.fxp
      Velo Poly.fxp                      MiniMoog VCO Ramp.fxp
      ================================== ==================================

   HALion 3 Sound Set 4.hsb

      ================================== ==================================
      Alternating Spiccato ECO.fxp       Nylon Gtr Velo Hrm ECO.fxp
      Alternating Spiccato MID.fxp       Nylon Gtr Velo Hrm MID.fxp
      Alternating Spiccato XXL.fxp       Nylon Gtr Velo Nat Harm.fxp
      Spiccato Up ECO.fxp                Nylon Gtr Velo Ham ECO.fxp
      Spiccato Up MID.fxp                Nylon Gtr Velo  Ham MID.fxp
      Spiccato Strings Up XXL.fxp        Nylon Gtr Velo Whole Ham.fxp
      Spiccato Down ECO.fxp              Nylon Gtr Ext ECO.fxp
      Spiccato Down MID.fxp              Nylon Gtr Ext MID.fxp
      Spiccato Strings Down XXL.fxp      Nylon Gtr Ext  XXL.fxp
      Legato Strings.fxp                 Nylon Gtr Vel Semi MTg Hrm ECO.fxp
      Tremolo Strings.fxp                Nylon Gtr Vel Semi MTg Hrm MID.fxp
      Pizz Strings.fxp                   Nylon Gtr Vel Semi MTg Hrm XXL.fxp
      Leg+Trem MW.fxp                    Nylon Gtr MTg Slds ECO.fxp
      Leg+Spicc MW.fxp                   Nylon Gtr MTg Slds MID.fxp
      Spicc+Pizz MW.fxp                  Nylon Gtr MTg Slds XXL.fxp
      Leg+Spicc Layer.fxp                Steel String Gtr.fxp
      Legato Pad.fxp                     St String Gtr + Harm.fxp
      Brass Octave Section.fxp           St String Gtr Harm.fxp
      Hybrid Horns.fxp                   12 String Guitar.fxp
      Brass Stab Fall.fxp                Strat + Harm.fxp
      French Horns Section.fxp           Chorus Strat.fxp
      Tenor Sax Soft.fxp                 Radio Stack.fxp
      Big Brass Lead.fxp                 Strat Harmonics.fxp
      Jericho Pad.fxp                    Dream Guitar.fxp
      OberBrass.fxp                      Solo Guitar.fxp
      Soft Synth Brass.fxp               Vibraphone.fxp
      Nord Section.fxp                   Chorus Vibes.fxp
      Choir Aah.fxp                      Dream Vibes.fxp
      Digital Choir.fxp                  Marimba.fxp
      Venus Sweep.fxp                    Slap Marimba.fxp
      Underwater Choir.fxp               Kalimba.fxp
      Nylon Gtr Velo ECO.fxp             Kaos Kalimba.fxp
      Nylon Gtr Velo MID.fxp             Glockenspiel.fxp
      Nylon Gtr Velo XXL.fxp             Pretty Glocken.fxp
                                         Tipi.fxp
      ================================== ==================================

   HALion 3 Sound Set 5.hsb

      ================================== ==================================
      Aggressive Machine.fxp             Elektro Kit 2.fxp
      FastMod FX.fxp                     Hardstyle Kit.fxp
      Synthetic Drops.fxp                Experimental Kit.fxp
      Loop Synthesis.fxp                 New Beat Kit.fxp
      Cannon Ball.fxp                    Synthetic Kit.fxp
      Technomarimba.fxp                  Rhythm Composer 1.fxp
      Techno Kit.fxp                     Rhythm Composer 2.fxp
      SDS 5 Vintage.fxp                  Percussion Set.fxp
      CR78 Vintage.fxp                   Drum Factory.fxp
      Linn Drum.fxp                      Bass Drum Menu.fxp
      Ambient Kit.fxp                    Snare Factory.fxp
      Brasil Electro Kit.fxp             Clap Factory.fxp
      Elektro Kit 1.fxp                  HiHat Factory.fxp
      ================================== ==================================

   Garritan Orchestral Strings Demo.hsb

      *  Violins Arco.fxp
      *  Violas Arco.fxp
      *  Cellos Arco.fxp
      *  Basses Arco.fxp

   Scarbee Imperial Drums + RSP73 Demo.hsb

      *  SID Demo BD Close Plastic.fxp
      *  SID Demo STD Snare A.fxp
      *  SID Demo STD HH 13.fxp
      *  SID Demo STD Crash 14.fxp
      *  RSP73 Direct 08V - Lite demo.fxp

   Vienna Symphonic Library Demo.hsb

      *  MusicalGlasses port.fxp
      *  MusicalGlasses port+RC.fxp
      *  Harp normal.fxp
      *  Harp normal+RC.fxp
      *  Vib_Me_speed-fa_1.fxp
      *  Vib_Me_speed-fa_1+RC.fxp
      *  Xylo_HO_ES_1.fxp
      *  Xylo_HO_ES_1+RC.fxp

   e-LAB Demo Content.hsb

      Combination - Loops

      *  eLab MusicLoops 100 BPM.fxp
      *  eLab MusicLoops 125 BPM.fxp
      *  eLab MusicLoops 130 BPM.fxp
      *  eLab MusicLoops 135 BPM.fxp
      *  eLab MusicLoops 140 BPM.fxp
      *  eLab MusicLoops 170 BPM.fxp
      *  eLab MusicLoops 90 BPM.fxp
      *  eLab SoundTools Samples I.fxp
      *  eLab SoundTools Samples II.fxp
      *  eLab SoundTools VOX.fxp

      Drum&Perc - DrumMenues

      *  eLab DrumTools 1.fxp
      *  eLab DrumTools 2.fxp
      *  eLab DrumTools 3.fxp
      *  eLab DrumTools 4.fxp
      *  eLab DrumTools 5.fxp
      *  eLab DrumTools 6.fxp
      *  eLab DrumTools 7.fxp
      *  eLab DrumTools 8.fxp
      *  eLab DrumTools 9.fxp

      Drum&Perc - Loops

      *  eLab LoopTools 130_135 BPM.fxp
      *  eLab LoopTools 160_170 BPM.fxp
      *  eLab LoopTools 65_80 BPM.fxp
      *  eLab LoopTools 90_100 BPM.fxp


   `HALion 7 功能特性及效果演示 <https://www.steinberg-cn.com/vst-instruments/halion/features/>`__

   音色库

   *  `FM Lab 调频合成器`

      https://oss.steinberg-cn.com/videos/FM%20Lab%20Walkthrough%20_%20HALion%207%20New%20Features.mp4

      FM Lab 是一款基于 HALion 全能型综合音源而研发的调频合成器，功能强大且操作便捷，可以随意
      组合该合成器内部的 8 组“Operator”（发生器），将其直接作为声音（音色）载体或发送至回馈循环
      “Feedback Loop”，轻松创建丰富饱满且动态十足的音色。另外，该合成器的界面交互十分友好，功能
      设计也很优秀，Algorithm Finder 浏览器和以及 Algorithm Designer 编辑器中可见一斑，
      使用它可以捏制经典的调频合成钟铃声音色、连绵不绝的铺底类音色。

   *  `Tales 吉他音色库`

      https://oss.steinberg-cn.com/videos/Tales%20Walkthrough%20_%20HALion%207%20New%20Features.mp4

      这套吉他音色库采样于一把纯手工打造的吉他，包含了每根琴弦弦采用不同调弦方式所采录下的开放弦声，
      以及诸多来自于原声乐器或使用合成器捏制的附加音色采样。这种自由开放的音色配置功能以及便捷直观
      的控制方式，使得 Tales 能够呈现出风格百变的声音，不仅适用于情绪高昂的流行音乐，也可适用于
      细腻悠长的影视配乐中。

   *  `Anima 波表合成器`

      https://oss.steinberg-cn.com/videos/Wavetable%20Synthesis%20Anima%20%20%20New%20Features%20in%20HALion%206.mp4

      包含丰富的前卫合成音色。带有强大的琶音器与灵活的调制功能，以及两个波表振荡器，帮助创作动听的现代电子音乐。


   *  `Auron 合成器音色库`

      Auron专为创建独特新颖的“声景”音效而生，并且使用其内置的160组粒子合成预制音色，轻松打造动听
      且富有质感的“氛围铺底”（Pad）及各类声音背景声效。


   *  `B-Box 鼓类步进音序器`

      B-Box是一款用于制作鼓节奏与鼓音轨的步进音序器。带有13种鼓乐器以及16个“Steps”（鼓组步进音序），
      并提供步进音序“力度”（Velocity）调节与混音功能。


   *  `HALiotron 合成器音色库`

      HALiotron 旨在重现 20 世纪 60、70 年代的摇滚乐与流行乐在音乐史上留下的不可磨灭的印记。


   *  `Hot Brass 铜管音色库`

      https://oss.steinberg-cn.com/videos/Jamming%20with%20the%20New%20Hot%20Brass%20Library%20in%20HALion%20Sonic%203%20%20%20Performance%20Videos.mp4
      
      Hot Brass是一款经过“多重采样”（Multi-Sampled）的铜管音色库，拥有恢弘大气且自然逼真的
      铜管音色呈现，非常适合用于现代流行、放克、雷鬼、灵魂等音乐风格。

   *  `Skylab 粒子合成器音色库`

      https://oss.steinberg-cn.com/videos/Jamming%20with%20the%20Best%20VST%20Workstation%20&%20Skylab%20in%20HALion%20Sonic%203%20%20%20Performance%20Videos.mp4

      Skylab既是一款内容丰富的采样音色库，也是一款粒子合成器，非常适合用于创作引人入胜的影视配乐和电子音乐。

   *  `Studio Strings 弦乐合奏类音色库`

      https://oss.steinberg-cn.com/videos/Studio%20Strings%20Library%20%20%20New%20Features%20in%20HALion%206.mp4

      一款弦乐合奏类的采样音色库，兼具出色的演奏体验与生动的音色呈现，非常适合用于电影配乐、流行乐编配、以及任何对风格与质量有高要求的音乐制作工作。

   *  `The Eagle 三角钢琴音色库`

      https://oss.steinberg-cn.com/videos/Jamming%20with%20the%20Eagle%20Grand%20Piano%20&%20New%20Combis%20in%20HALion%20Sonic%203%20%20%20Performance%20Videos.mp4

      The Eagle音色库拥有饱满、澄净的钢琴音色呈现，适合用于现代流行乐、摇滚与爵士乐以及古典音乐的创作。
      
   *  `World Instruments 世界乐器音色库`

      让你在音乐制作中加入来自不同文化的音乐风格。音色库中的世界乐器包括西非的“巴拉风”（Balafon）、
      土耳其的“坦布尔”（Tambour）、日本的“尺八”（Shakuhachi）、津巴布韦的“卡林巴”（Kalimba）等。

   *  `World Percussion 世界打击乐器音色库`

      来自非洲、亚洲、欧洲以及世界各地的打击乐器音色。


   特色功能

   *  `新一代“波表”(Wavetable）合成功能`

      拥有HALion的新一代波表合成器，一切皆有可能。HALion包含两个并行的、“零混叠”的 (Aliasing-Free）
      波表振荡器，提供强大且灵活的声源，帮助进行采样“再合成”(Re-Synthesis）并创造出新颖的音色。
      其全新的深层采样分析功能允许使用自己的声音素材进行灵活创作。你可以从采样中自动提取波表，并即时
      生成波表包络，只需单击鼠标，内置的“音高识别” (Pitch Detection）功能即可找到合适的“区块大小”
      (Blocksize），此外，图形化的频谱式编辑器还能更为直观地编辑谐波内容。


   *  `“宏页面编辑器”（Macro Page Designer）`

      通过简单直观的宏页面编辑器可创建个性化的用户界面。HALion 将创建乐器宏页面的能力从工程端带到了前端，
      可以在空白界面中导入背景、将“模板库” (TemplateLibrary） 中任意类型的控制旋钮拖动到界面、并通过
      拖拽操作将“工程” (Program)中的参数分配给旋钮。还可以载入自定义控制旋钮库，或者直接使用 HALion
      自带的几种宏页面风格库。其自由度将超乎想象。

   *  `“粒子合成功能”（Granular synthesis）`

      HALion 的粒子振荡器在灵活性、音乐性与声音品质方面都达到一定水准。通过将采样分解为极短的声音片段、
      并按照任意顺序播放声音“粒子”（Grain），可以从各类声音中提取音频内容，并以其为原材料创造出全新的
      美妙声音氛国。每个振荡器都可生成8种不同的“粒子流” (Grain Stream），也因此带来了层次丰富且空间感
      十足的声音结构。

   *  `拥有优越品质的各类效果器`

      从手术刀般精准的 EQ 均衡器再到极具表现力的声音设计工具，HALion 拥有超过 60 种高级效果处理器，
      提供丰富多样的创作工具。其中包括：Resonator 共振峰滤波器、AutoFilter 自动滤波器、Tape Saturator
      磁带饱和效果器、Ring Modulator 环形调制器、Envelope Shaper 包絡望形器、Rotary 旋音箱效果器、
      GraphicEQ 圏示均衡器、Limiter 压限器、Expander 扩展器、Reverb 混响效果器、Chorus 合唱效果器、
      Flanger 镶边效果器、Vibrato 颤音效果器、DJ-EQ 均衡器、Brickwall Limiter 砖墙压限器、TubeCompressor
      电子管压缩器、Frequency Shifter 移频效果器、VST Amp 吉他&贝斯音箱效果器、Wah wah 哇音效果器、
      Step Flanger 步进式镶边效果器、Vintage Ensemble 合唱效果器、Octaver 八度效果器、StudioEQ 均衡器、
      Compressor 压缩器、Gate 门限器、Amplifier 吉他箱头与箱体模拟效果器、REVerence 卷积混响效果器、
      Tremolo 颤音效果器、Phaser 移相器、MultiDelay 多重延迟效果器、Tube Saturator 电子管饱和效果器、
      Maximizer 响度最大化效果器、VintageCompressor 复古式压缩器、StereoEnhancer 立体声扩展器等。

   *  `为乐器编写“脚本”（Scripting）`

      借助强大的LUA脚本语言，更为深入地挖掘HALion的功能。通过脚本编辑功能，通过添加脚本“逻辑”(Logic）
      可以让键盘演奏出逼真的贝斯旋律，还可以对样本进行批量处理、或通过编写逻辑创造出更为新颖的滤波器使用方式。


   *  `虚拟模拟合成器`

      HALion 的虚拟模拟合成器虽然采用了经典的设计，却搭载了前沿的工具与技术。它配置了3个“主振荡器”
      (Main Oscillator）、以及“子振荡器” (Sub Oscillator)、“环形调制器”(Ring Modulation）
      和“噪音发生器”(Noise Generator)，通过混合这些声源可以创造出强大且前卫的声音。该虚拟模拟合成器
      还带有 16 种不同的振荡器类型，其中包括几种传统波形，以及“矩形波”(Pulse width） 和“交叉调制”
      (Cross Modulation） 等算法，用于以多种方式塑造并合成音色。在CPU占用率极低的“多振荡器” 
      (Multi-Oscillator)模式下，可以将三个主振荡器的声音“相乘”(Multiplying）并调节其音高与声像，
      从而创造出丰满、宽阔的美妙声音。

   *  `“滤波功能区”（Filter Section）`

      HALion的滤波功能区是在进行声音塑形时不可或缺的强大工具，该功能区将直接与每个“振荡器专区”
      (Oscillator Zone）串联。它带有9种高级滤波音色类型，包括“经典”（Classic）式、“电子管过载”
      （Tube Drive）式以及“量化失真” (Bit Reduction) 式等等，助力塑造想要的音色特质。它还包含
      多种滤波模式、24种滤波曲线、以及X/Y、控制器等，提供完备的声音优化工具集


   *  `FlexPhraser 琶音器&乐句播放器`

      HALion Sonic 中的 FlexPhraser 琶音器&乐句播放器采用 Yamaha 经典的 Motif 技术，为音乐创作加入
      动听的乐句与复杂的“乐段” (Pattern）。FlexPhraser 囊括几十种不同琶音类型，而且只需按下一个琴键即
      可播放一段完整的、且与宿主软件同步的乐器片段。在全新的“乐句编辑器” (Phrase Editor） 中，将能够创作
      个性化的片段和乐句，并调节“步进”(Step，高达32个）中声音内容的“力度”(Velocity）与音高；还能通过两个
      “控制栏” (Controller Lane）控制更多参数，例如滤波器和效果器中的参数。