# FL Studio Record 录音
- [Newtone Pitch Correction](https://www.bilibili.com/video/BV1bx41137x3)

现来说说录音设备，主要有麦克风 Mic 和 MIDI 键盘，广义上录制还包括键盘输入的音符、音量的控制动作、MIDI 的控制，或其它自动化功能等等。

录音前检查设备，F10 打开设置面板，看看连接的 MIDI 或 Mic 是否正常。

Tools - One-Click Audio Recording 提供录音方式：

- Into Edison Audio Editor/Recorder

	Edison 是一个音频处理工具，可以录音或编辑音频，比如使用 Claw Machine Tool 机械爪可以从声波采样中提取其它节奏效果。

- Into Playlist as an audio clip

	将录音直接插入 Playlist 播放列表中，使用播放列表时注意将 PAT/SONG 模式按钮切换到 SONG 歌曲模式，PAT 模板模式不会播放列表。


直接点击控制面板中的录音按钮，会提示录音的处理方式：

- Audio, into the Edison audio editor/recorder
- Audio, into the olaylist as an audio clip
- Notes and automation
- Everything
- Show me some more help

第一项会录音到 Edison，F9 打开混音器面板，可以看到通道的右侧插槽 Slot 中会自动添加了 Edison 进行录音。Edison 的录音控制方式有四种：

- Now 点击 Edison 录音按钮就开始；
- On Input 有输入信号就开始；
- Input 在有输入信号时录音，无信号时自动暂停；
- On Play 等待主控面板的回放按钮点击时录音；

点击第二项，就会开始录音到播放列表作为声音剪辑 Audio Clips。F5 打开播放列表，可以看到录音结果在列表中，双击可以看到声波采样文件信息，并可以使用 Edison 进行编辑。F9 打开混音器面板也可以看到自动设置了通道靠顶的图标为一个麦克风图标。

第三项就是 MIDI 音符的录制，通过外接的 MIDI 键盘来弹奏，并将音符录下来。第四项录制所以，包括音频、MIDI 键盘的控制动作等等。


录音到 Playlist 需要设置录制通道，激活通过中的 Arm Disk recording 录音按钮。而 Edison 录音方式只需要选择好输入的设备即可在 Edison 界面进行录音，录完后也可以发送的 Playlist 中。


基本录音操作流程：

- 在 FL Studio 中按 F9 打开混音器面板。
- 选择一个你想要录音的通道，最好不要选择 Master 主通道。
- 靠下边找到 Arm Disk Recording 激活磁盘录制键，注意提示板显示的文件名称。
- 可以看到音轨呈暗红色，按钮为红色，表示进入录制准备状态。
- 注意 Solo/Mute 按钮要处于激活态，保持通道有效。
- 然后在右上角输入列表中，显示为 (none)，选择输入设备。
- 使用 Mic 要用单声道，一般不选立体声，In 1 或 In 2。
- 尝试发声测试麦克风，看有没有 MIC 声音，一般可以看到电平表发生变化。
- 完成之后，点击 PAT/SONT 切换到歌曲模式，点录制键，再点播放键，最后录制完成。

录音文件保存位置：

	C:\Users\XXX\Documents\Image-Line\FL Studio\Audio\

另外，Mic Playback 可能引起回响啸叫，可以在录音后将 Sole/Mute 关闭不回放麦克风。但是录音中还是有回响，所以一般不选择 Master 主通道作为 Mic 录音通道，而是使用专用录音通道，只需要将通道与主通道断开练接即可。即下边的绿色向下的箭头的线指示它连接的下一个通道，通常是主通道，那么在主通道的相同位置的会有一个音量旋钮，其上侧是个向上的箭头，点击它即可断开输入通道的连接。

待得到录音后，在 Edision 的工具栏中，点击靠右上角的 Send to Playlist 按钮发送到 Playlist 进行试听。要用 Edison 编辑时，双击播放列表的音频片断打开采样面板，在采样面板的又上角的 Track 中指定其它的通道，因为当前的录音通道断开与主通道的连接避免 Mic 回声啸叫，所以在当前通道编辑时听不到声音。然后，在声波图上的右键菜单，或 Ctrl-E 打开 Edison 后加载声波采样进行编辑，注意要使用非录音通道上的 Edison 进行编辑。

Edison 提供了声波频率分析工具，从声波中提取特征频率为音符：

	Tools - Analysis - Convert to Scores and dump to piano roll

音频转成 MIDI 音符是一项通用功能，通过检测声波的频率可以将其转换成对应的音符。像 Finale/WIDI Pro 等打谱软件都带有这个功能。虽然说，目前没有完美的把音频转成 MIDI 的技术，但是能把某些特征明显的声音或者和弦转换过来，对于扒带来说是有很大用处的。

自带的 Newtone 音高节拍校准插件也又类似的功能，歌手连唱也可以通过它来做频率分析，它可以对录音不同位置进行音高校准、节拍的前后修正，还可以将提取到的音符发送到钢琴卷帘。在水果界面按 F8 输入 Newtone 就可以找到插件，再将声波采样拖到 Newtone 上开始调整。



# VoiceMeeter 虚拟声卡与内录
- Voicemeeter https://voicemeeter.com/see-what-voicemeeter-can-do-overview/
- Light Host https://github.com/rolandoislas/LightHost/releases
- Melodyne 系列教程 https://www.bilibili.com/video/BV1XW411W72G?p=6

想要内录，即录制主机播放的声音，必需激活系统声音控制面板上的立体声混音输入设备。如果找不到立体声混音设备，可以考虑重装声卡驱动。现在的多数声卡均无法直接通过声卡自身的功能实现内录和立体声混音，因为声卡芯片厂商迫于 RIAA - Recording Industry Association of America 美国唱片工业联合会的压力，及维护音乐版权防止内录的需要，在新推出的声卡上对音频模块的功能做了限制，无法直接实现混音和内录的功能。如果看到立体声混音设备的音量指示始终绿色占一半的能量，就表示系统已经用白噪声填满通道，系统不支持内录。即使 FL Studio ASIO 录音设备中选择了立体声混音输入，也不会接收到系统的声频数据，但可以录制到 FL Studio 中播放的音频。

变通方法是通过软件虚拟声卡来实现内录 Virtual Audio Cable，但是兼容性不好。Surface Book 2 系统禁用了立体声混音，不能进行内录，可以使用 Voicemeeter 实现内录。

录音设备和播放设备将 Line1(Virtual Audio Cable) 设置为默认设备。这样设置完后，打开一个音频文件会听不到任何声音，这是因为声音已经转入虚拟线路里了，接着下一步。

打开 Virtual Audio Cable 里的 Audio Repeater，将 Wave in 设为 Line1(Virtual Audio Cable) ，Wave out 设为声音输出设备，如扬声器，然后可以单击 Start。之后，就不要再动 Virtual Audio Cable，接着打开录音软件或者屏幕录像专家，设置好各参数即可以开始录制。录制结束后，Virtual Audio Cable 可以关闭了，这时如要听到音频则把音量控制图标设置回原来的麦克风和扬声器就可以了。

科普一下声音设备的驱动类型，依效果最差到最好的排列：

- MME（MultiMedia Extensions）：级别最低的驱动，于 Windows 3.1 时代首次推出。由于等待时间长，Cubase VST、Logic Audo 等音序软件应避免使用，除非找不到替换者。然而它在 Cakewalk Sonar 中使用似乎有着优良的性能，一些独立的软件合成器使用时 MME 也具有相当好的性能。
- WDM（Win32 Driver Model）：Microsoft 最新驱动类型，最先作为 Windows 98 SE 的选项（当时有一些问题，少数厂家因此推出自己的驱动），它们能够成功地运行于 Windows ME，当然意义更为重大的是对于 Windows 2K/XP 的用户。它们提供比 MME 或 DirectSound 驱动低得多的延时（某些情况下可以达到惊人的 1.5 毫秒）。在 Windows 2K/XP 下运行 Sonar，WDM 是必须的。
- KS（Kernel Streaming） 也叫 Direct Kernel streaming API，在 Windows XP 引入的一个低延时驱动，但不常用。
- WaveRT 自 Windows Vista 引入的微型端口驱动程序，提供了良好的音频性能和较小的延迟，与 KS 相当。
- Direct-X Audio Interface 是游戏中使用的低延时驱动，和 MME 相比。
- ASIO（Audio Stream Input Output）：音频流输入输出，通过 Steinberg 流行的的 MIDI 加音频软件 Cubase VST 走向世界，是第一个真正提供了小于 10 毫秒低等待时间的驱动。ASIO 2.0 同时支持多口（通过 ADAT 传送）采样精度的寻址和零等待的监听。如果你的音序器和声卡二者都支持 ASIO，考虑优先使用它。

在驱动程序设计中，为了简化开发的复杂度，Microsoft 提供会为每一类设备提供 Class Driver，这些驱动实现某一类型设备驱动，与具体设备无关的公共的功能集合，与设备无关主要是指不直接操作设备硬件。对于开发者而言，有了 Class Driver 的介入，仅仅需要实现一部分需要针对特定设备的功能。而这底层的模块通常称为微型端口驱动程序 Miniport Drivers。


Voicemeeter 是免费软件，可以捐赠支持，有三个版本。

基础版 STANDARD：

- Mix 2 x Hardware (eg. Headset Mic)
- + 1 x Software (e.g. Skype)
- 2 x Mixbus (2 x Hardware + 1 x Software)
- Basic Voice Effects
- 4 x In/Out Audio Stream

香蕉版 BANANA：

- Mix 3 x Hardware (eg. Headset, USB Mic)
- + 2 x Software (e.g. Game+Skype)
- 5 x Mixbus (3 x Hardware + 2 x Software)
- Advanced Voice Effects
- 8 x In/Out Audio Stream
- Integrated Multichannel Recorder

土豆版 POTATO：

- Mix 5 x Hardware (eg. Headsets, USB Mics, Synthesizer, Tape Recorder)
- + 3 x Software (e.g. Game+Skype+Discord)
- 8 x Mixbus (Multi Layer)
- Professional Voice Effects
- 8 x In/Out Audio Stream
- Integrated Multichannel Recorder


掌握虚拟声卡软件关键是要掌握音频流的控制，以香蕉版为例，界面一共分 5 列：

- 左边 3 路硬件输入 *Hardware Input*，可以选择系统连接的话筒、耳麦等声音输入设备。
- 中间 1 路软件混音 *Virtual Inputs*，就是立体声混音，即播放视频、音频，Skype 这类网络通信软件 OBS（Open Broadcaster Software） 发出的声音。
- 最右边是输出 *Hardware Output*，根据不同的版本，提供了 A1/A2/A3/B1/B2 等等线路的输出，A1 是主线路。

VoiceMeeter 界面中的输入面板中选择输入设备，对应可以设置其音频流的走向，点亮 A1 表示将音频流向 A1 输出线路，点亮 A2 表示流向 A2 输出线路。在输出面板中，可以选择这些线路的具体输出设备。

安装 VoiceMeeter，VB Cable Driver 会在系统中添加以下几个播放、录音设备，对应 VoiceMeeter 界面的软件混音设备：

- VoiceMeeter Aux Input 对应主界面中软件混音设备 VoiceMeeter AUX 或是 B2 线路输出；
- VoiceMeeter Input 对应 Banana 主界面中软件混音设备 VoiceMeeter VAIO 或是 B1 线路输出；
- VoiceMeeter VAIO3 Input 对应 Potato 主界面中软件混音设备 VAIO 3 或是 B3 线路输出；

不同版本提供不同的功能支持，标准版只有 VoiceMeeter Input 立体声混音功能，VAIO3 在土豆版中才支持。每条软路线支持 8 通道，44.1KHz/48KHz/88.2KHz/96KHz/176.4KHz/192KHz 采样，通过 Menu -> System Settings 菜单设置。

音频流要流向哪里，就在 Voicemeeter 这个控制面板里设置。比如选择 VoiceMeeter Input 设备作为播放设备，点击设为默认值即可，这样电脑的声音就流入了 VoiceMeeter 对应的这条线路。或者在任务栏中，通过音量控制面板设置。然后，在 VoiceMeeter 界面中，设置 A1 主线路的输出为系统声卡的输出，默认是 Speakers(High Definition Audio Device)，即可以听到经过处理的音频。

硬件输入设备可以指定要使用的输出线路，硬件输出线路 A1/B2/B3/B4/B5，或虚拟输出线路 B1/B2/B3 用于监听或内录。虚拟输出线路分别对应 VoiceMeeter Input 和 Aux Input 设备，点亮后就可以在系统的相应的录音设备中获取音频流，可以为通信软件指定默认的设备。

如果选择 ASIO 设备作为 A1 输出，则可以路由所有物理输入，所有物理输入线路和 External FX 功能可能支持 64 I/O。请注意，选择 ASIO 设备作为 A1 输出是将 Voicemeeter 与专业音频板结合使用的最佳方式。可以设置物理输入/物理总线为无设备，但建议在系统设置对话为 A2、A3、A4 和 A5 选择输入通道/或输出通道。

Patch composite allows selecting inputs used in the 8 channels of the composite mode. It’s
possible to switch PRE-FADER input to POST-FADER inputs by click on “Select Pre-Fader
inputs…”.

The COMPOSITE Mode is used to get a composite signal on a BUS and be able to send or
record different channels, composed by given inputs (see USE CASE #3 in Voicemeeter User
Manual).

The Patch Insert allows activating insert for each input channel. This is applicable only if an
application is connected to the Voicemeeter Insert ASIO Virtual Device Driver. This driver
supports a single client to work as a pre-fader insert on possible 22 channels composing the 5
strips of Voicemeeter. Then it’s possible to use a VST Plug-in Host for example to insert plug-
ins on any Voicemeeter inputs.

VoiceMeeter 提供 VB-Audio Network 对网络通信进行配置。使用 VBAN，可以将多个 VoiceMeeter 应用程序中的音频发送到本地网络中的其他 PC 以及通过 WIFI 连接的移动 iOS 和 Android 设备。VoiceMeeter Banana/Potato 可以从任何输入端发送和接收多达 8 种不同的音频流。

Main Features

- Up to 8 Streams (Standard Version: 4)
- 1 to 8 Channels (In every stream. Mono to 7.1 Surround)
- LAN & WIFI Stream to Windows PC, Android, iOS and Apple TV
- Up to 96 kHz 24 Bit Uncompressed PCM format

香蕉版或土豆版主界面的输出面板中，提供了录音机功能，可以将处理后的音频录制下来，注意选择要录制的线路，Menu -> Tape Recorder Options。

Master Section 面板说明：

- SEL 按钮在土豆版有效，允许指定混音到特定的线路，使用 Ctrl-Click 多选。
- BUS Mode 总线模式可以更改内容或总线的通道组织。 Normal mode 是让 8 通道保持原样输出。

BUS Mode 总线模式介绍：

- MIX DOWN 混合，用于制作立体声混音，音源来自 DVD 播放器输出的 5.1 或 7.1 声音，将 Left/Right/Center/Sub/Rear 声道混合在立体声扬声器上输出。
- MIX DOWN A 将后扬声器和侧扬声器异相混合，以模拟立体声环绕效果。
- MIX DOWN B 后扬声器和侧扬声器同相混合。
- STEREO REPEAT 将立体声信号用于 8 个输出通道，该立体声信号被复制到 3/4/5/6/7/8 通道上。
- REPEAT 重复模式还允许使用 Master EQ 作为 2 路、3 路或 4 路有源扬声器系统的分频器，得益于 6 个 LPF 或 HPF 滤波器。
- COMPOSITE 合成模式用于音频后期制作。每条线路 8 个通道可以通过任何 Pre-facder 前推子或 Post Fader 后推子输入或默认线路通道合成。在系统设置对话框中，用户可以定义 Composite Patch。使用合成信号，可以录制多达 8 个 VoiceMeeter 合成输入或与连接到 VoiceMeeter Virtual ASIO 的 DAW 连接输入，或集成录音机。


其它功能及按钮说明：

- mono 单声道设置
- solo 独奏模式
- Mute 表单模式
- K Karaoke 按钮，香蕉版和土豆版上用来在 Virtual AUX Input 输入进行实时消音。
- M.C 用于在 5.1 或 7.1 音频的虚拟输入上使中央通道静音 Mute Center Channel。

卡拉 OK 按钮提供 4 种不同的实时算法来消除语音，基本可以消除立体声中的人声：

- K-m：卡拉 OK 声音消除器消除立体声轨迹的公共部分，单声道声音全部被消除。
- K-1：对于某些音频，可以使用声音以外的其他声音移除，因此 K-1 模式将保留一些低音和高音。
- K-2：和 K-1 模式一样，K-2 模式会保持更多的低音，以及高音。
- Kv：如果什么都不起作用（比如单轨），这是最后一个模式将简单地消除语音频率范围（200-4000Hz）通过一个简单的滤波器。


结合 Studio One 或 LiveProfessor 这些音频处理软件就可以实现各种音频效果，包括变声这种泛滥的应用。FL Studio 使用 NewTone 效果器插件也可以实现变声。

在 FL Studio 中，设置声音设备为 VoiceMeeter Virtual ASIO 或者 AUX Virtual ASIO，然后在 Mixer 面板中选择输入为 VM-VAIO 1 ~ 4，前两个通道对应 B1 线路，后两个通道对应 B2 通道，如果使用 Potato 还可以使用 B3 的通道。输出通道只要不和输入的一样就可以，占同样的通道会烂声，最好和 VoiceMeeter 的混声输入路线分开。根据 FL Studio 设置的声音设备，输出的音频流会发送回 Virtual Inputs 中相应的软件输入路线。

也可以使用免费的 Light Host 直接调用 VST 插件，Studio One 这类软件也是通过插件实现各种功能的。

Studio One 是一款较为专业的音频处理软件，轻松体验最简单的编辑方式，即刻完成高强度的音频文件修改，支持音频的二次创作、编辑、剪辑、录制、调音等功能。

机架指放置音响设备的机架，在软件中指定的是宿主软件，本身没有任何效果。机架只是声卡玩家，对它的一种形象称呼，用它来加载各种 VST 效果器插件。可以说只要是能用来同时加载多个 VST 插件的这类软件，我们都可以称它机架软件。

打开 Light Host 后，先设置 Preference，选择好音频设备类型，并在 Device 列表中指定输出设备，经过 VST 插件处理的音频流会发送到指定的设备上。

如果使用 ASIO 驱动，列表中的 VoiceMeeter Insert Virtual ASIO 对应的是 VoiceMeeter Input 线路。然后，在 Active Output/Input Channels 列表中指定输入输出的通道。然后设置 VoiceMeeter，Menu -> System Settings 勾选需要使用的 Patch Insert 通道。

如果只是对声调的调整，可以使用 WavesTune/AutoTune/melodyne。


