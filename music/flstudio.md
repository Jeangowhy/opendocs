# FL Studio 基本概念

每个水果工程有以下四个最基本的结构：

1. Pattern 节奏形，通过通道列表或者钢琴卷帘进行编辑，可以有任意个节奏形；
2. Channel Rack 通道列表，通道用于加载音色库插件、MIDI Out 或者音效合成器，或设置简单的节奏形；
3. Piano Roll 钢琴卷帘，直接向通道中添加音符，相当于拼合的五线谱；
4. Play List 节奏形播放列表，规划节奏形，形成完整的音乐。

钢琴卷帘可以对音符的属性，力度（velocity），释放（Release），时值、位置进行调整，不像 MuseScore
这样的打谱软件的约束那么多，水果也可以通过规范化（Normalized）将音符限制为规范的音符时值。

水果的播放模式有两种：

1. Pat 播放当前的节奏形，Pattern；
2. Song 完整的音乐播放，即播放在 Play List 中规划好的节奏形。




# MIDI Out 分轨
1. - https://support.image-line.com/redirect/MIDI_Out
2. - https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/MIDI%20Out.htm
3. - https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/wrapper.htm
6. https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/automation_midiimport.htm
4. MIDI OUT的两种使用方法 https://www.bilibili.com/video/BV16s411y7PT/
5. MuseScore 抽取分谱 https://musescore.org/zh-hans/node/278621
6. 新建乐谱 https://musescore.org/zh-hans/node/278622
6. https://audiointerfacing.com/what-are-midi-channels

MIDI Out does not make any sound of its own, it acts as a MIDI controller 
sending standard MIDI messages to internal VST plugins or external MIDI 
hardware. 8 pages x 9 controllers are freely assignable to parameters 
on target VST and MIDI devices. 

Input port / Output port - Select the MIDI input and output ports respectively. 
MIDI ports are independent communication channels within a given MIDI connection. 
When the same port numbers are set on a MIDI input and output device the plugin 
and other MIDI device will be able to share exclusive MIDI data.


MIDI 文件相当于一个多声部的乐谱，每个 MIDI Out 可以加载一个 midi 文件，MIDI Out 与
VST 插件的 MIDI Input Port 使用相同的通道值，就可以将输入的 midi 文件转化为 VST 音效。
VST 还可以通过 Output Port 与其它插件共享数据。

MIDI 文件虽然包含了多声部乐谱，但是在 MIDI Out 中不能直接进行分轨，需要将乐谱拆分成不同的
音轨，并使用不同的 channel 将音符发送给 VST 插件的对应音轨上，如果 VST 支持分轨。

MIDI channels 作为一个专用术语，表示所有 MIDI 设备用来通信的通道，如音符通过哪个通道发送，
连接到相同通道的设备就可以接收到音符数据。按 MID 工业规范定义，总共有 16 MIDI channels。
这是因为标准的 5 针 MIDI 电缆只能传输 16 个 channels 的数据。

另一个概念是 tracks，这是 MIDI 软件的概念，对应 MuseScore Staffs。多数 MIDI 软件可能宣称
有无限的 MIDI tracks。但即使你可能拥有 128 个 tracks，也不一定意味着你可以使用一台 MIDI 
乐器播放超过 16 个 channels 的 MIDI 数据。

另一个例子，当你录制鼓时，你可以使用多个 MIDI tracks，所有 tracks 都路由到同一 MIDI channel。

对于 MIDI 乐器，另一个更重要的概念是复音 Polyphony，这个词已经存在了数百年。 它第一次在音乐中
提到可能是在中世纪流行的圣歌音乐时出现的。Polyphony 是可以同时播放或发声的音符数量。大多数低端
MIDI 键盘能够同时演奏 32 个音符。换句话说，但如果你按下 33 个键，其中一个将不会发声。尽管，
没有人类可以按下这么多按键，但是复音越多表示音效越好。乐器可以处理的 polyphony 数量非常重要。
当你用完 polyphony 时会发生什么？先弹奏的音符开始脱落，为新音符腾出空间。MIDI 乐器可能无法
演奏你辛苦制作的材料，这可能会完全毁掉一个创意。

大多数高端 MIDI 键盘能够同时演奏 128 个音符（128 个 polyphony ）。

MIDI 乐器可以使用这些通道发送各种命令：

1. Note OFF
2. Note ON
3. Polyphonic key pressure
4. Control change
5. Program change
6. Monophonic key pressure
7. Pitch bend
8. System exclusive (ie. global commands that can affect the entire device)

MIDI channels are communication pathways between MIDI devices. There are 
16 MIDI channels available and each can be assigned to a different MIDI device.
Channel assignments allow MIDI devices to be arranged in combinations so 
that each device responds only to the information intended for it. MIDI is 
a versatile way of recording notes, chords, and drum beats—to be played by 
MIDI instruments—in the form of MIDI tracks. Several MIDI tracks can come 
together to form a MIDI song.

使用打谱软件 MuseScore 3，可以进行分谱，File - Parts。MuseScore 用 4 个声部管理音符，
分别用 1、2、3、4 表示。同时，谱表（五线谱）与乐器关联，添加谱表即添加新乐器，或者给指定乐器
增加谱表。Edit - Instrucments 菜单进入乐器编辑界面。

要永久隐藏一个谱表：请打开乐器对话框(I) 并为该谱表取消勾选“Invisibles staff lines”选项 。

FL 导入多乐器的 midi 文件时，会弹出对话框，选择要导入的部分，每个乐器有 16 channels，每个
通道对应的是乐谱中的轨道。

可以将 midi 导入为音轨，也可以导入到钢琴卷帘作为当前音轨的音符，将 midi 文件拖到 Channel Rack
或 Piano Roll 面板即可。

EDIROL Orchestra 弦乐音色插件提供了预置的乐曲组合，在 Orchestra Style 功能中可以选择
要使用的配置，Orchestra Style (ORCHESTRA STYLE)：

01. Full Orchestra      管弦乐团
02. Baroque             巴洛克风格
03. Classic             经典
04. Concerto            协奏曲
05. Strings Trio        弦乐三重奏
06. Strings Quartet     弦乐四重奏
07. Piano Quintet       钢琴五重奏
08. Wood Winds Quintet  木风五重奏
09. Flute Quartet       长笛四重奏
10. Flute Ensemble      长笛合奏
11. Marching Band       铜管乐队/军乐

# MuseScore arpeggios & glissandi
https://musescore.org/en/handbook/3/arpeggios-and-glissandi
MuseScore 3中添加滑音和琶音 https://www.bilibili.com/video/BV1xa411S7vX/

Arpeggios 琶音用来分解一个和弦，而 Glissando 则是在前后两个音之间添加滑音。 



# 轻量好用的VST插件

- ✨Heart of Asia 亚洲之心

	Spectrasonics Heart Of Asia 亚洲之心 giga 音色库是早期的亚洲乐器的采样，包括中国传统
	民族乐器，比如古筝、竹笛等，但是采样格式为 .gig 比较陈旧，可以用 Kontakt 加载。

- ✨Kong Audio ChineeGuQin
	http://www.kongaudio.com/Product.htm
	Kong audio 2（空音二代）使用教程 https://www.bilibili.com/video/BV18u411v7Wy/

	民族乐器系列 - 弹拨乐器 古琴 Version 1.x
	软件主要技巧包括: 勾剔、抹挑、基本长音、 颤音、 揉弦、滑音 等技巧
	古琴(F调)基本音域: C2-C6

	音色技巧的简写跟实际的名称，请参考下面列表:

	abbr: Gou   Ti   Mo   Tiao   slw   fst   up   dw
		  勾    剔    抹    挑    慢    快    上滑    下滑
	abbr: Still rub  FY    KS(Key Switch)   Leg(Legato)
          直音   揉指  泛音  键位转换           连奏

	Kong Audio ChineeGuQin 提供了 5 种音色，力度、双键触发抹弦技巧：

	1. **GuQin_Gou_leg** 
	2. **GuQin_Ti_leg**
	3. **GuQin_Mo_leg**
	4. **GuQin_Tiao_leg**
	5. **GuQin_KS_leg**

	Settings 设置面板各项控制参数如下:

	VELO RANGE   12 个音色组合力度的分配
	KEY RANGE     12 个音色组合键位范围的分配

	Kong Audio 2 可能在 64-bit 水果中打不开，可以使用 32-bit 版本 FL (scaled).exe。
	Kong audio 2（空音二代）使用用户扩展键用来触发演奏技巧，技巧键放到待触发的音符相同的
	时间位置，或者提前一点。


- ✨Yellow River Sound - Gu Zheng
	https://www.bilibili.com/video/BV1Pg4y1B7si
	https://www.bestservice.com/en/gu_zheng.html
	黄河古筝使用教程 https://www.bilibili.com/video/av15198312/

	Features

	1. 1.6GB sample library, multi samples on every single velocity layer
	2. Most detailed articulations, never before available, up to 5 velocity layers, 3 different tempos of bend up/down etc.
	3. Sampled from a famous, custom design Gu Zheng
	4. Recorded at the China Conservatory of Music using Direct Stream Digital Technology and 5 microphone positions
	5. 24bit / 44.1kHz sample playback
	6. One shot single notes of most layers, emulate the real performance

	古筝是一种开放弦乐器，这意味着当你敲击一根弦时，其他弦也会振动。它不是一种12调乐器，那么
	我们应该如何在键盘上进行采样和传播呢？由于它最常用的是 D 大调五音阶，我们决定先用 D 五声，
	然后是 bE 五声，最后是 2 个音符。通过这种方式，我们得到了所有 12 个音符。

	具有 5 层力度采样，并且当力度很小的时候古筝的声音会出现很微妙的变化，还提供了但技法的补丁。

	Gu Zheng Layers 分为两种：

	- Single layer 单音：
		- sus 表示 sustain 延长音
		- vib 表示 vibrate 颤音
		- vn no initial delay
		- pb 表示 pitch bend，用 pitch wheel 模拟变音轮
		- tremolo 摇指
		- harmonic 泛音
		- mod 表示 mod wheel 调音轮控制
		- s 表示 slow 慢速
		- f 表示 fast 快速
		- bdfull 表示调音轮变音 bend up & down，后面的数字表示音程
	- Key switch layer 通过按键控制演奏技巧
		- **01_gz_D_pentatonic_ks_vel** D 大调，vel 表示通过高音量控制弯音
		- **02_gz_ks_mod** 表示调制轮触发颤音
		- **03_gz_ks_vel**

	键控可以触发多种古筝演奏技巧，钢琴键盘显示为彩色的就是控制键，配合 vel 控制音色。

	D pentatonic 表示将规范到 D 大调五音阶，部分键会规范为五音阶之一。五音阶是中国民族调式，
	宫、商、角、徵、羽五声构成的五声调式，以及以五声为基础构成。需要注意的是，宫、商、角、徵、羽这
	五个音级只有相对的音程关系，而没有固定的音高，使用五度上升率，即每两个音的音程为 5 度。
	相当于 Do So Re La Mi。
	中国民族调式———五声音阶 https://www.bilibili.com/video/BV1fB4y1h78n
	乐音体系——音的分组 https://www.bilibili.com/video/BV1EW4y1k7Lw

	1. Sympathetic Resonance
	Gu Zheng is an open string instrument, which means when you hit one string,
	other strings will vibrate as well. It is not a 12 tone instrument, so how should we
	sample and spread it in on a keyboard? As it is most commonly tuned in D
	pentatonic, we decided to sample it in D pentatonic first, then bE pentatonic,
	then the last 2 notes. By this way, we get all 12 notes.

	When you play, the most realistic sound is achieved in D pentatonic, because
	the sympathetic resonance is correct.

	2. One Shot Sample playback
	In order to reproduce the open string sound, we use one shot for sample
	playback. One shot is commonly used in drum sample playback, it means all
	the notes you played will keep on sounding until they end, regardless the
	note-off message. Gu Zheng’s strings have a longer decay time than drum
	sounds, so it is hard to hide the noise in the sample. We have spent lots of time
	to make the samples as clean as possible.

	3. Initial delay
	Gu Zheng players use a “nail” fastened to their finger to pluck the string. When
	the player hits the string, it has a pre-attack before the string reaches its full
	level vibration. For a sustain note, which is the main articulation of Gu Zheng,
	this attack can be heard clearly, so we decided to keep the delay on layer
	01_gz_sus_nv and 02_gz_sus_vib_normal to achieve a realistic playing
	experience. The delay is up to 30ms. However, depending on string velocity
	and player, the delay may vary.

	None of the bend articulations have that kind of delay.

	4. Real sample and program control
	Gu Zheng has many bend articulations, different scales and speeds. We have
	sampled more detailed bend sounds than ever, but still cannot cover all pitches.
	To solve this problem, you can use the pitch wheel (layer 05_gz_nv_pb) to get
	other bend sounds, although it is not as realistic as recorded samples.

	Gu Zheng Interface

	We tried to keep things simple, only Volume and Pan Knobs are on the Quick
	Edit page controlled by MIDI controller 7 and 10. Other parameters can be
	adjusted on the Pro Edit page.


	Enhanced Modes are:
	C0: keyswitch mode: normal

	The main articulation will be played: sustain with no vibrato.
	C#0 and D#0: keyswitch mode: hold
	
	When one of these keys is pressed, the articulation will continue to play until the key
	is released and then switch back to the main articulation (C0).
	A‐1 to A#0 (except C0, C#0 and D#0): keyswitch mode: next note
	
	When one of these keys is pressed, the articulation will apply only to the next played
	note and then switch back to the main articulation (C0).
	
	For example:
	If you play the following keys in sequence: 
	C0, D3, F0, D3, D3, 
	You will hear:
	D3 sustain, D3 bend up, D3 sustain.

	The additional keyswitch layers allow you to play the Gu Zheng in a very easy and
	even more authentic way. When playing a sequence most additional articulations
	only sound one time and are then followed by the main articulation again. With the
	new “next note keyswitch mode” you will be able to cut your control notes in half
	and to reproduce the monobend feature (lower string bend up, sounding together
	with the upper string in unison). Now you can play the Gu Zheng more authentic
	even if you are not familiar with the real playing technics.

	Single layer

	**01_gz_sus_nv** (keyboard range D1-D5):
	Sustain with no vibration (5 velocity levels, 2 samples per key)

	**02_gz_sus_vib_normal** (keyboard range D1-D5):
	Sustain with vibration (3 velocity levels, 2 samples per key)

	**03_gz_sus_vib_f_mod** (keyboard range D1-D5):
	Includes 2 types of fast vibrato, the faster one sounds more like a bend, use the
	mod wheel to switch between them, please use only the min and max value of
	the mod wheel, a value between them will cause 2 articulations to sound together.

	**04_gz_nv_fast** (keyboard range D1-D5):
	With no initial delay, you can use it for fast progress phrases to get a faster
	keyboard response.

	This layer also has midi files between key F#5 to B6, arpeggios up and down,
	you can use parts of them as grace notes, which is a unique characteristic of Gu Zheng.

	**05_gz_nv_pb** (keyboard range D1-D5):
	Use the pitch wheel to simulate pitch bend, by default the bend is in minor 2, it
	can be adjusted on the Pro Edit page, this layer could be a supplement to the
	recorded bends.

	**06_gz_tremolo** (keyboard range D1-D5):
	Tremolo, with release samples.

	**07_gz_harmonic** (keyboard range D1-D5):
	Harmonics, include 1/2 and 1/4 string harmonics, the 1/4 is a fifth higher, but we
	kept it on its original key to simulate the real playing, higher velocitys will trigger
	the 1/4 string harmonics.

	**08_gz_bdfull2_s_mod** (keyboard range D1-D5):
	Slow tempo whole tone interval bend up&down, bend tempo is 040 and 065,
	use mod wheel to switch between them.

	**09_gz_bdfull2_f_mod** (keyboard range D1-D5):
	Fast tempo whole tone interval bend up&down, bend tempo is 090 and 120,
	use mod wheel to switch between them.

	**10_gz_bdfull3_s_mod** (keyboard range D1-D5):
	Slow tempo minor 3rd interval bend up&down, bend tempo is 040 and 065, use
	mod wheel to switch between them.

	**11_gz_bdup2_s_mod** (keyboard range D1-D5):
	Slow tempo whole tone interval bend up, bend tempo is 040 and 065, use mod
	wheel to switch between them.

	**12_gz_bdup2_f** (keyboard range D1-D5):
	Fast tempo whole tone interval bend up, bend tempo is 090.

	**13gz_bdup3_s_mod** (keyboard range D1-D4)
	Slow tempo minor 3rd interval bend up, bend tempo is 040 and 065, use mod
	wheel to switch between them. Please note the bend is not practical on notes
	higher than D4

	**14_gz_bddn2_s_mod** (keyboard range D1-D5):
	Whole tone interval bend down, bend tempo is 040 and 065, use mod wheel to
	switch between them.

	**15_gz_bddn3_s_mod** (keyboard range D1-D4):
	Minor 3rd interval bend down, bend tempo is 040 and 065, use mod wheel to
	switch between them. Please note the bend is not practical on notes higher
	than D4

	**16_gz_fx** (keyboard range C3-B3):
	This layer includes several arpeggios of the Gu Zheng, both upward and
	downward. The black keys are special effects by plucking the left portion of Gu
	Zheng.

	**17_gz_phrase** (keyboard range G1-D5):
	This layer includes 3 pieces of music begin from key G1, C3 and C4, spread on
	keyboard chromatically, each key has a phrase which is a slice of the whole
	piece of music, you can:

	1. Rebuild the whole music by playing them chromatically
	2. Create a new phrase by playing any key you like
	3. Use a part of the phrase, followed by a single note to make it sound more real.

	Many of those phrases have noise at the end, because there are strings still
	ringing and it cannot be cut clean like a drum loop. Some of them are the pick
	attack sound prior to the next note at the accurate bar line. It may sound strange
	when you play them individually, but it will turn out to be very nice when you
	connect suitable phrase or notes.


	Key switch layer


	**01_gz_D_pentatonic_ks_vel** (key switch C0 to A0)
	Normally Gu Zheng is tuned in D_pentatonic (D1-D5), since it has the best
	sympathetic resonance. As a result this should be the most common layer.
	As this layer is tuned in D_pentatonic, in the bend articulations, #F and B notes
	are minor 3 rd bend, other notes are whole tone bend.
	Most bend articulations in one key switch have 2 types, this layer uses velocity
	to switch them within one key.

	**02_gz_ks_mod** (key switch A#-1 to A#0)
	This layer includes all the articulations of Gu Zheng, most bend articulations in
	one key switch have 2 types, and you can use the mod wheel to switch between
	them.

	**03_gz_ks_vel** (key switch C0 to A0)
	Most bend articulations in one key switch have 2 types, this layer uses velocity
	to switch between them.
	

	Playing Hints
	Here are some hints for you, to produce realistic Gu Zheng sounds...
	
	**Main articulation combined with others**
	You can use 01_gz_sus_nv as main articulation, and use vibrato, bend and
	grace notes to make it vivid.

	**One Shot**
	As most articulations are in one shot mode, the samples ignore note-off
	message and keep on ringing to the end, some lower notes may sustain up to 8
	seconds, so you cannot play Gu Zheng like a fast strumming rhythm guitar,
	because it will run out of memory and sound unnatural.

	**In what key you play**
	Although the keyboard range is 49 keys, the real Gu Zheng has only 21 strings,
	so not all of the notes should play together. Please keep the key you are playing
	in mind: for example if you are in D, you should not play C directly on keyboard;
	the better way to get that note is by bending up from B.

	**Play slow**
	YRS Gu Zheng has wide dynamic range, try to play it slowly and softly, in a
	silent envibonment, it will take you back to the ancient empire, with calm and
	peace.

	**Play fast**
	there are up to 30ms delay at the beginning of the samples on 01_gz_sus_nv
	and 02_gz_sus_vib_normal, if this is uncomfortable for keyboard playing, you
	can switch to 04_gz_nv_fast, for example when recording notes, then change
	back to 01_gz_sus_nv and 02_gz_sus_vib_normal in order to get a more
	realistic sound, you can also adjust the delay time on your host software, let the
	track play a little earlier to compensate the delay.

	**Grace note**
	Grace note are widely used in Gu Zheng, such as the 3 or more strings
	downward arpeggio, prior to the main note sustain. You can use the midi file in
	04_gz_nv_fast, or a part of the phrase in 17_gz_phrase, to get grace notes
	easier than playing each note by yourself.

	Credits
	Producer: Zhang Jian, Ma Jing
	Executive Producer: Cui Quan
	Gu Zheng Player: Wang Ning
	Recording Engineer: Cao Meng
	Editing: Ma Jing
	MIDI Demo: Zhang Jian, Cui Quan
	Graphic Design: Wu Wei
	Special thanks to Best Service, Klaus Kandler & Robert Leuthner
	and the ENGINE developer team


	黄河古筝音色非常晶莹透彻，不到 2G 容量，使用 Best Service Engine 2 采样插件加载。
	相比之下，Kong Audio ChineeGuZheng 有 8G 多，当然，细节也会更丰富。

	Guzheng，作为最具代表性的中国 乐器之一，首先出现在战国 时代（公元前475年至221年），
	到唐朝后（公元618年至907年）变得非常流行，并传播到所有邻近地区此后，并演变出日本古筝。
	古筝本来是一种很简单的乐器，只有五根弦。经过多年的发展，今天的古筝已拥有二十一根弦，
	至今仍广泛用于各种中国音乐中。古筝具有独特的涟漪音色。古筝的演奏技巧也是独特，因此使它
	与世界古筝家族的其他成员区分开来。

	非凡的现场演奏可玩性 ChineeGuzheng II 具有广泛的样本集，其中包含 各种类型的颤音，
	滑音，滑音和弹奏。该音符范围是从 A2 到 G7（对于大多数补丁）。

	ChineeGuzheng II 不仅具有固定的样本，而且具有无与伦比的可演奏性，这在中国乐器库中
	是前所未有的。 ChineeGuzheng II 由著名的古筝音乐家林英萍录制。Lin 在最好的中国古典
	音乐教育体系中 接受了学术训练。她赢得了许多国家和国际音乐奖，经常在国内外演出，并发行了
	唱片集以及书籍和论文。 ChineeGuzheng II 现在与新的 QIN 引擎配合使用，以全球音乐家
	所追求的深度和活泼性，为中国提供了最具特色的声音。

	包含的音色：
	1. 单音连奏功能(利用 CC#64 控制器切换为复音模式)
	2. 键位即时触发(键盘蓝色区域)
	3. 力度层组合
	4. 左右声道立体声对比调节
	5. 矢量键盘可视化音域范围功能
	6. 大部分参数可自动化控制

- ✨Sonic Hypersonic vs. EDIROL Orchestra

	Not comparable products. 

	Edirol Orchestral is just orchestra sounds, and I'd have to say is put 
	together better than most orchestra sampler libraries 10 times it's size. 
	Has better orchestra sounds than Hypersonic 2.

	Edirol Hypercanvas(Cakewalk TTS-1)is a GM library with better GM sounds 
	than Hypersonic 2, however, Hypersonic wins by default, because even though 
	the Edirol Modules sound is slightly better, Hypersonic 2 outweighs them 
	with a whopping 1300+ presets!!! Also has more drumkits, a built in 
	Synthesizer for real synths, a Yamaha B3 emulation Engine for realistic 
	Organs, and a Grand Piano Sound Module built in.

- ✨Edirol Super Quartet

	罗兰三剑客是每位音乐人手里的必备神器：
	Hyper Canvas（综合波表合成器）
	Super Quartet（小型合成器）
	HQ Orchestra（管弦乐队）

	Features:

	1. 4 high-definition stereo multi sample based modules:
		2. Piano: 28 pianos covering a broad genre from acoustic to electric. Offering a large dynamic range with four step velocity switching.
		3. Guitar: 28 guitars covering a broad range of acoustic styles including steel, nylon, slide and flamenco.
		4. Bass: 11 Bass types.
		5. Drums: 3 drum kits containing 94 different instruments.
	6. 16 part multi-timbral.
	7. 128 note polyphonic (CPU dependant).
	8. Reverb & Chorus.

- ✨Ethno World 6 
	https://www.bilibili.com/video/BV1yD4y1U7q5
	https://www.livekong.com/best-service-ethno-world-6-complete.html

	Best Service Ethno World 6 - 世界民族 6 音色，收集了全球各民族乐器。

	ETHNO WORLD 6 Complete 库中增加了 80 种新乐器和声音，现在包含 320 种乐器和声音，
	大约有 800 个音色。为了获得最真实的声音，已使用不同的演奏技术录制了乐器，可以通过按键
	开关轻松准确地从音色中访问乐器。该库包含 33.4 GB（未压缩）的样本数据和 28,789 个采样。
	所有乐器采样均为 24bit 和 44.1 kHz。

	新增功能是一些独特的声音，例如Paiste的两米跨度锣，一些新的打击乐器和水听器。

	由音乐制作人安德烈亚斯·霍夫纳（Andreas Hofner）进行录制，涉及来自世界各地的 70 多位
	音乐家和歌手。录音使用一流的设备在不同的本地录音室中进行，例如 Neumann 和 Brauner 的
	麦克风，RME 的 SPL 前置放大器和转换器。

	ETHNO WORLD 6 Complete 包含来自亚洲，非洲，欧洲，北美和南美不同地区的各种乐器和声音。
	在这里，您会找到适合民俗，民族以及现代音乐的乐器和录音。该库包含大量的弦乐器，弹拨乐器和
	弓弦乐器，以及最不同的木管乐器，包括许多长笛，当然还有大量的鼓和打击乐器。除了经过电影配乐
	的太鼓和大型民族鼓之外，还有数百种鼓舞人心的循环，甚至还有完整的“锣，铃铛和金属类型的乐器”，
	从大型的大风琴到微妙的闪闪发光的风铃。

	包含前身的几乎所有部分都再次进行了扩展，此外，ETHNO WORLD 5 的一些乐器已被重新录制。
	其中包括一架新的曼陀林和一首悦耳的班卓琴，由德国最好的班卓琴演奏家之一吕迪格·赫尔比格
	（RüdigerHelbig）进行无数次发音和舔音编程。

	此外，您现在还可以找到六角琴，自动竖琴，日本古筝，具有多种演奏风格的上述新型曼陀林，
	南美恰南哥，班苏里，低音提琴和印度长笛，以及劳登达斯，曼科塞达乐器的其他演奏风格，
	dvojacka 和爱尔兰的横笛。

	ETHNO WORLD 6 Complete 提供了来自喀麦隆，几内亚，中国，伊朗，土耳其，保加利亚，北非，
	西班牙和乌克兰的大量独奏声音，短语和合唱团。非洲，阿拉伯，牙买加和印度的新贡献扩大了人们的
	声音和合唱团。例如，Houari 阿尔及利亚的 rai 歌手不仅非常适合营造真实的氛围，而且非常适合
	EDM 和 Hip-Hop。




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


