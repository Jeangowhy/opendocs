# 打谱软件
1. LilyPond http://lilypond.org
2. MuseScore https://musescore.org/
3. Finale https://www.finalemusic.com
4. Sibelius http://www.sibelius.com
5. Noteflight https://www.noteflight.com
1. Frescobaldi https://www.frescobaldi.org/
2. LilyPond — Usage http://lilypond.org/doc/v2.24/Documentation/usage-big-page.html
3. LilyPond — Snippets http://lilypond.org/doc/v2.24/Documentation/snippets-big-page.html
4. LilyPond — Learning Manual http://lilypond.org/doc/v2.24/Documentation/learning-big-page.html
5. LilyPond — Notation Reference http://lilypond.org/doc/v2.24/Documentation/notation-big-page.html
5. LilyPond — Notation Reference B. Cheat sheet http://lilypond.org/doc/v2.24/Documentation/notation-big-page.html#cheat-sheet
5. LilyPond — Essay on automated music engraving http://lilypond.org/doc/v2.24/Documentation/essay-big-page.html

LilyPond 和 MuseScore 都是免费开源的打谱软件，但是它们有不同的打谱逻辑：前者使用代码定义曲谱，
后者所见即所得。MuseScore 内置了 MIDI 播放能力，并且新版本支持 VST 音色插件。而 LilyPond 
则没有提供播放 MIDI 的功能，但它可以生成 MIDI 文件。

Lily Pond 是一个程序化打谱软件，可以将曲谱代码转译为 PNG 图片、PDF 文档、MIDI 文件，也可以
配合 Frescobaldi 图形界面工具进行打谱，使用 Quick Insert 工具替代手写代码。Frescobaldi
支持与 PDF、SVG 矢量图形的交互，点击图片上的音符即可以定位到曲谱代码。虽然也支持 MIDI 捕捉，
但目前不支持节拍，也不支持实时回放，比较不够人性化。

配置 Frescobaldi：

- Edit → Perferences → LilyPond Preferences 指定 LilyPond 程序路径。
- LilyPond → Automatic Engrave 勾选此项以自动将曲谱的修改更新到图像。
- Tools → Viewers → Music View 默认的 PDF 视图，如果使用 SVG 就选择 SVG Viewer。
- Tools → Codding → Quick Insert 勾选此项以打开曲谱符号面板。
- Tools → Codding → Snippets 勾选此项以打开曲谱符号预定义代码片断面板。

LilyPond 程序的输入就是包含曲谱代码的文本，按命令行指定的输出格式生成相应文件。
音符使用 c d e f g a b 表示，使 ' 和 , 表示升高、降低八度，如 c'' 表示升高两个八度。
后面还可以使用数值 2、4、8、16、32、64、128 表示时长，然后还可以使用符点。在时值之前，
可以使用 is 或 es 表示升、降调，注意不能有空格，比如 ceses 表示 C𝄫。

曲谱中使用  << // >> 表达多声部，// 用于分割各个声部，每个声部对应一条五线谱。

指令使用 \ 符号开头，可以使用 = 符号将指令定义的内容保存到一个变量中。

Notation Reference B. Cheat sheet

|            Syntax           |     Description      |
|-----------------------------|----------------------|
| 1 2 8 16                    | durations            |
| c4. c4..                    | augmentation dots    |
| c d e f g a b               | scale                |
| fis bes                     | alteration           |
| \clef treble                | treble clefs         |
| \clef alto                  | alto clefs           |
| \clef bass                  | bass clefs           |
| \time 3/4                   | time signature       |
| r4 r8                       | rest                 |
| d ~ d                       | tie                  |
| \key es \major              | key signature        |
| note'                       | raise octave         |
| note,                       | lower octave         |
| c( d e)                     | slur                 |
| c\( c( d) e\)               | phrasing slur        |
| a8[ b]                      | beam                 |
| << \new Staff … >>          | more staves          |
| c-> c-.                     | articulations        |
| c2\mf c\sfz                 | dynamics             |
| a\< a a\!                   | crescendo            |
| a\> a a\!                   | decrescendo          |
| < >                         | chord                |
| \partial 8                  | pickup / upbeat      |
| \tuplet 3/2 {f g a}         | triplets             |
| \grace                      | grace notes          |
| \lyricmode { twinkle }      | entering lyrics      |
| \new Lyrics                 | printing lyrics      |
| twin -- kle                 | lyric hyphen         |
| \chordmode { c:dim f:maj7 } | chords               |
| \new ChordNames             | printing chord names |
| <<{e f} \\ {c d}>>          | polyphony            |
| s4 s8 s16                   | spacer rests         |
| cis4                        | C𝄰                   |
| cisis4                      | C𝄪                   |
| ces4                        | C♭                   |
| ceses4                      | C𝄫                   |
|                             |                      |

和弦有两种表示方式，直接使用和弦名称，或使用尖括号包括和弦音符，如 < c e g > 或者 d:min。
和弦名称写在 \chordmode 块内。除了使用和弦名称修饰，还可以指定音程。和弦转换使用 /+pitch
语法，pitch 为和弦要转换的音程，省略 + 号就不会在转位和弦中保留原位和弦中的音符。

参考 LilyPond — Notation Reference A.2 Common chord modifiers
lilypond和弦及其转位的表示 https://www.cnblogs.com/lilypondgaspard/p/13958651.html


```sh
    \chordmode {
      c1        _"C major"      %大三和弦（小字一组）
      c:m       _"C minor"      %小三和弦
      c:aug     _"C augmented"  %增三和弦
      c:dim     _"C diminished" %减三和弦
      \bar ""
      \break
      
      c:7       _"C major-minor 7th"     %大小七和弦
      c:7+      _"C major-major aug 7th" %大大七和弦
      c:m7      _"C minor-minor 7th"     %小小七和弦
      c:m7+     _"C minor-minor aug 7th" %小大七和弦
      \bar ""
      \break
      
      c:dim7    _"C major dim 7th"      %减七和弦
      c:m7.5-   _"C minor 7th flat 5"   %减小七和弦
      c:aug7    _"C major aug minor 7th"      %增小七和弦
      c:aug7+   _"C major aug major 7th"      %增大七和弦
      \bar ""
      \break

      c'/e      %大三和弦第一转位
      c'/g      %大三和弦第二转位
      c'/+e     %大三和弦第二转位，保持原位和弦
      \bar ""
      \break

      c':7/e    %七和弦第一转位
      c':7/g    %七和弦第二转位
      c':7/bf   %七和弦第三转位
      \bar ""
      \break

      c^3       %大三和弦，省略三音"
      c'^3/g    %省略三音再做转位

      c:7.12.15     %七和弦上方加 12 度音和 15 度音
      c:7-          %用 - 号让 7 音降半音
      c:7+.5+       %将 7 音升半音，五音升半音
      c:2.4.7+^2    %在 2 度外加上 4 和 7 度音，然后再去掉 2 度音
    }
```

重复是音乐中的一个核心概念，重复有多种符号，可以使用 \bar 指令向小节符号中添加重复起止标记。
虽然定义了重复标记，但是 LilyPond 默认生成的 mid 文件不会包含重复。

LilyPond 支持以下类型的重复：

1. **volta** 这是带有或不带有替代结尾的重复的标准表示法。
2. **segno** 这支持各种 da capo 和 dal segno，重复的部分以诸如 D.S 之类的指令结束。
3. **unfold** 直接将重复的音符展开到谱面。
4. **percent** 这是节拍或测量重复，看起来像单斜线或百分比符号。
5. **tremolo** This is used to write tremolo beams.

```sh
    \bar ".|:" %repeat start
    \bar ":|." %repeat end

    # \repeat volta repeatcount musicexpr
    \fixed c'' {
      \repeat volta 2 { c2 f }
      R1
      \repeat volta 2 { g2 c }
    }

    \fixed c'' {
      \repeat volta 2 {
        R1
        \alternative {
          \volta 1 { c1 }
          \volta 2 { d1 }
        }
        R1
      }
    }

    \repeat unfold 2 { c'4 d e2 | }
```

LilyPond 可以为谱面定义渐强 crescendo、渐弱 decrescendo 符号，但输出的 mid 文件不含相应效果。
为了在 mid 文件中产生效果，就需要定义 MIDI dynamics。例如，意大利音乐术语 Rinforzando（rfz）
表示渐进的重音符号。MIDI 乐器参考 A.6 MIDI instruments。

```sh
    #(define (myDynamics dynamic)
        (if (equal? dynamic "rfz")
          0.9
          (default-dynamic-absolute-volume dynamic)))

    \score {
      \new Staff {
        \set Staff.midiInstrument = #"cello"
        \set Score.dynamicAbsoluteVolumeFunction = #myDynamics
        \new Voice {
          \relative {
            a'4\pp b c-\rfz
          }
        }
      }
      \layout {}
      \midi {}
    }
```

\paper 定义文档属性：

```sh
    \paper {
      indent = 0\mm
      line-width = 160\mm
      % offset the left padding, also add 1mm as lilypond creates cropped
      % images with a little space on the right
      line-width = #(- line-width (* mm  3.000000) (* mm 1))
      line-width = 160\mm - 2.0 * 10.16\mm
      % offset the left padding, also add 1mm as lilypond creates cropped
      % images with a little space on the right
      line-width = #(- line-width (* mm  3.000000) (* mm 1))
    }
```

例如，以下曲谱代码：

```sh
    \version "2.25.2"

    \header {
      title = "小星星"
      subtitle = "Twinkle Twinkle Little Star"
      composer = "Jewel"
      arranger = "Jeango"
    }

    %% \markup \box \wordwrap {
    \markuplist \wordwrap-lines {
      《小星星》源自英国传统儿歌 Twinkle Twinkle Little Star
      这是 Jewel 创作并演唱的歌曲，收录于 Lullaby 专辑，该曲发行后风靡全球。
      原曲旋律来自 18 世纪的法国童谣 "Ah! vous dirai-je, maman" (啊！妈妈我要告诉你)，
      英国女诗人 Jane Taylor 填词，在 1806 年正式形成现在的经典儿歌。
    }

    #(define (myDynamics dynamic)
        (if (equal? dynamic "rfz")
          0.9
          (default-dynamic-absolute-volume dynamic)))

    global = {
      \time 4/4
      \key c \major
      \tempo 4=80
    }

    chordNames = \chordmode {
      \global
      c,2 e,:min f, g, 
      f,2 e,:min d,:min c,
      f,2 g, f, g,
      f,2 g, f, g,
    }

    melody = \relative c'' {
      \global
      \time 4/4
      \clef treble
      \set Staff.midiInstrument = #"flute"
      \bar ".|:"
      c4 \< c g' g a \! a g2
      f4 f e e d d c2
      g'4 g f f e e d2
      g4 g f f e e \> d2 \!
      \bar ":|."
    }

    accompany = \relative c {
      \clef bass
      \set Staff.midiInstrument = #"acoustic bass"
      c8 g e g   c8 g e g
      c8 a f a   c8 g e g
      c8 a f a   c8 g e g
      b,8 e g e  c8 g e g
      c g' c e g e c g 
      f c' f a c, g' c e
      f,, c' f a c, g' c e
      g,, d' g b c,8 g'8 c4 
    }

    words = \lyricmode {
      一 闪 一 闪 亮 晶 晶
      满 天 都 是 小 星 星
      挂 在 天 空 放 光 明
      好 像 许 多 小 眼 睛
    }

    \score {
      <<
        \new ChordNames \chordNames
        \new FretBoards \chordNames
        \new Staff { \melody }
        \addlyrics { \words }
        \new Staff { \accompany }
      >>
      \layout { }
      \midi { }
    }
```

执行命令，按 \layout 定义生成一个 PDF 文档，按 \midi 定义生成一个 mid 文件：

     .\lilypond.exe -o example .\example.ly


# FL Studio 基本概念

每个水果工程有以下四个最基本的结构：

1. Pattern 节奏形，通过通道列表或者钢琴卷帘进行编辑，可以有任意个节奏形；
2. Channel Rack 通道列表，通道用于加载音色库插件、MIDI Out 或者音效合成器等，或设置简单的节奏形；
3. Piano Roll 钢琴卷帘，直接向通道中添加音符，相当于拼合的五线谱；
4. Playlist 节奏形播放列表，规划节奏形，形成完整的音乐，可以创建多个 Arrangement。

钢琴卷帘可以对音符的属性，力度（velocity），释放（Release），时值、位置进行调整，不像 MuseScore
这样的打谱软件的约束那么多，水果也可以通过规范化（Normalized）将音符限制为规范的音符时值。

Playlist 中编辑的对象称为 Clips，有节奏形、音频采样、包络络线三种类型：

1. Audio clip source
2. Pattern clip source
3. Automation clip source

包络线是形象的称呼，它就自动化工具，通过曲线的方式控制 MIDI 事件、调整音频采样等等。
可以给控制器创建包络线，比如，给一个音频采样通道的 Volume 旋钮创建包络线，使用右键菜单
Create automation clip。Playlist 中编辑包络线，使用右键添加曲线控制点，用左键移动它。
也可以在播放列表中 Audio clip 的左上角弹出菜单创建 Panning 或 Volume 包络线。

工程可能包含有很多包络线，在播放列表中选择包络线时，Channel Rack 对应的通道也是选中状态。

FL Studio The Playlist https://www.bilibili.com/video/BV1bx41137Uw/

水果的播放模式有两种：

1. Pat 播放当前的节奏形，Pattern；
2. Song 完整的音乐播放，即播放在 Play List 中规划好的节奏形。

Mixer 混音台是音乐制作最后处理阶段使用的工具，可以使用各种效果器进行修饰。例如，使用 NewTone
效果器对音准进行修正。NewTone 在日常编曲中有其他的作用，比如扒旋律或者 Bass 的 MIDI
人声矫正插件 NewTone https://www.bilibili.com/video/BV148411e7bR/

使用 ZGameEditor Visualizer 可以制作可视化视频，注意激活混音器 Master 通道中的
Enable Effect Slot 开关，否则插件可能导出不了。

Godot 也可以制作视频，使用其 FFT 频谱工具制作音乐效果视频：

1. Subtitle 字幕 - Godot RegExp 正则表达式应用 https://www.bilibili.com/read/cv22409082
1. True Pitch Training - Visualizer https://github.com/Jeangowhy/Godot-Tour/tree/4.x/Visualizer

使用 FFMPEG 也可以制作内嵌字幕，可以指定字体和大小。

    ffmpeg -i input.mp4 -vf subtitles=subtitle.srt output.mp4

    ffmpeg -i input.mp4 -vf subtitles=subtitle.srt:force_style='FontName=DejaVu Serif,FontSize=24' -vcodec libx264 -acodec copy -q:v 0 -q:a 0 output.mp4 


控制器连接有两种方式：

1. Per-Project Links (targeted, saved with project)
2. Global Links (roving, remembered permanently)

MIDI 乐器的输入与 FL 面板旋钮控制器连接后，不能断开，可以绑定到另外的旋钮。绑定的 MIDI 输入可以
录制下来，记录为 events 曲线，可以对曲线进行调整以实现自定义的控制。
https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/automation_linking.htm




# MIDI Out 分轨
1. https://support.image-line.com/redirect/MIDI_Out
2. https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/MIDI%20Out.htm
3. https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/wrapper.htm
6. https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/automation_midiimport.htm
4. MIDI OUT的两种使用方法 https://www.bilibili.com/video/BV16s411y7PT/
5. MuseScore 抽取分谱 https://musescore.org/zh-hans/node/278621
6. 新建乐谱 https://musescore.org/zh-hans/node/278622
6. What are MIDI channels https://audiointerfacing.com/what-are-midi-channels
6. 电吉他MIDI真实化处理 独立音乐-卅卅 https://www.bilibili.com/list/384497700

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

MIDI Out 提供了多个控制页面，可以在这些页面上定义控制，以模拟 MIDI 乐器向插件发出控制信号。


# MuseScore arpeggios & glissandi
https://musescore.org/en/handbook/3/arpeggios-and-glissandi
MuseScore 3中添加滑音和琶音 https://www.bilibili.com/video/BV1xa411S7vX/
MuseScore 4 https://musescore.org/en/handbook/4/new-features-musescore-4
Installing Muse Sounds  https://musescore.org/en/handbook/4/installing-muse-sounds
Install a SoundFont https://musescore.org/en/handbook/4/soundfonts
Working with VST and VSTi https://musescore.org/en/handbook/4/working-vst-and-vsti

MuseScore 4 增加了 VSTi 插件支持，另外 Muse Hub 需要最新版本的 Windows 10，旧系统
可以下载不含 Muse Hub 的安装包。Muse Hub 是一个插件中心，用来安装 VST 音效插件。默认自带
MS Basic SoundFont，容量不到 50MB。Muse Sounds 音源包含 14G 容量内容，免费使用。

New playback and VSTi support

Playback improvements are the single largest change to MuseScore 4. Apart from
new sample libraries (Muse Sounds, available as a separate download), there’s now
support for VSTi plugins, which can be applied to instruments using the new
mixer panel. The mixer also lets you easily switch between VSTi, SoundFonts and the
Muse Sounds libraries, while also supporting VST effects. Sounds will now always
be saved on a per-score basis, so there is no longer any need for the Synthesizer panel
found in MuseScore 3 (this has been removed in MuseScore 4). If you previously used
SFZ files for playback in MuseScore 3, we now recommend that you use a free VST
sampler, like Sfizz or Sforzando, both of which support SFZ playback.

In MuseScore 4, any compatible VST plugins installed on your computer will 
automatically be made available in the Mixer, where you can easily switch 
between VSTi plugins, stack multiple VST effects, and access plugin interfaces 
for further customization.

MuseScore 4 supports VST3 plugins only (VST2 is not supported due to licensing 
restrictions). Support is currently only for Windows and MacOS, but Linux 
support is in the pipeline.

For alternatives to VSTi’s, try one of the following:

1. install Muse Sounds
2. use the built-in MS Basic SoundFont
3. download and use 3rd party virtual instruments in sf2, sf3, or sfz formats (see SoundFonts).


Arpeggios 琶音用来分解一个和弦，而 Glissando 则是在前后两个音之间添加滑音。 



# 轻量好用的VST插件

- ✨HALion

    Steinberg.HALion.VSTi.DXi.v3.5.DVDR-AiRISO.iso
    
    Run Setup HALion v3.5.exe

    Copy "HALion Content" folder to harddisk

    Start HALion, goto "BROWSER" menu
    rightclick on the "HALion Content" folder
    and locate the content path and select
    all files

    Enjoy

    HALion 是一套综合音源，主要特色是弦乐，包括低音提琴、小提琴、大提琴、中提琴四大件，以及一
    系列不错吉他音色，特别是 Dream Guita：

    HALion 3 Sound Set 4 - Guitar E.Guitar - Dream Guitar.fxp 梦幻吉他
    Garritan Orchestral Strings Demo.hsb - Strings Cello - Cellos Arco.fxp 弓拉大提琴


- ✨New York Concert Grand vs. The Grand 2

    这是两个效果不错的钢琴音色，其中 The Grand 2 采样大一点，4GB 左右，包含亮音、柔音钢琴各一款，
    但是不够稳定。New York Concert Grand 则包含多款钢琴音色，使用 Kontakt 采样插件，比较稳定。


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
    黄河古筝音源操作教程 https://www.bilibili.com/video/BV1QS4y1d7xu
    Gu Zheng Engine 黄河古筝 https://www.tinfoumusic.com/1984.html

    Features

    1. 1.6GB sample library, multi samples on every single velocity layer
    2. Most detailed articulations, never before available, up to 5 velocity layers, 3 different tempos of bend up/down etc.
    3. Sampled from a famous, custom design Gu Zheng
    4. Recorded at the China Conservatory of Music using Direct Stream Digital Technology and 5 microphone positions
    5. 24bit / 44.1kHz sample playback
    6. One shot single notes of most layers, emulate the real performance

    黄河古筝音色非常晶莹透彻，不到 2G 容量，使用 Best Service Engine 2 采样插件加载。
    相比之下，Kong Audio ChineeGuZheng 有 8G 多，当然，细节也会更丰富。

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

    Guzheng，作为最具代表性的中国 乐器之一，首先出现在战国 时代（公元前475年至221年），
    到唐朝后（公元618年至907年）变得非常流行，并传播到所有邻近地区此后，并演变出日本古筝。
    古筝本来是一种很简单的乐器，只有五根弦。经过多年的发展，今天的古筝已拥有二十一根弦，
    至今仍广泛用于各种中国音乐中。古筝具有独特的涟漪音色。古筝的演奏技巧也是独特，因此使它
    与世界古筝家族的其他成员区分开来。

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
    C0 - A1 区的控制键对应功能：

        A0# - 大二度下滑
        B0  - 大二度下滑（快）
        C1  - 单音
        C1# - 摇指
        D1  - 揉弦
        D1# - 泛音
        E1  - 揉弦（快），或者调制轮实现击弦
        F1  - 大二度回滑音
        F1# - 大二度回滑音（慢）
        G1  - 大二度回滑音（快）
        G1# - 小三度上滑间
        A1  - 大二度上滑音
        A1# - 大二度上滑音（快）

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

    Edirol HQ Orchestral 是非常棒的一套管弦音色，100MB 容量可以做到这样的效果，已经是天花板。
    使用插件时 16 个乐器通道不能保存用户所选择的乐器，需要使用 MIDI 控制器来选择乐器。VST 插件
    面板中，16 个 MIDI 通道也叫做 16 个 Parts。

    在 FL Studio MIDI Out 插件中设置：

    1. Channel 指定音符要传递的 MIDI 通道；
    2. Bank 两组数值指定乐器参数类别（内置或用户）和乐器的分组号；
    3. Path 指定一个乐器序号；

    Bank 第一个数值 0 (P) 表示使用内置参数，1 (P) 表示用户参数，乐器分为 0-6 共 7 个分组。
    指定乐器后，在 HQ Orchestral 插件面板的轨道头部可以查看到乐器的分组信息，如 P-5 001。
    用户编辑后的配置可以点击 WRITE 按钮保存起来。

    HQ Orchestral 是多输出通道插件，FL Studio 中需要额外设置，在插件界面左上角的箭头
    下拉菜单中设置：Enable multiple outputs。新版本则默认为 Tracks 指定及后续 3 个通道，
    也可以点击齿轮图标打开插件设置界面，选择 Processing 栏目，可以看到 Auto map outputs
    中罗列了 Multi-Output VSTi 的多轨输出映射。

    HQ Orchestra 弦乐音色插件提供了预置的乐曲组合，在 Orchestra Style 功能中可以选择
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

    MIDI CC List (Continuous Controllers) https://nickfever.com/music/midi-cc-list
    Control Change Messages and RPNs https://www.midi.org/specifications-old/item/table-3-control-change-messages-data-bytes-2
    MIDI voice messages https://www.recordingblogs.com/wiki/midi-voice-messages

    MIDI CC (Continuous Controllers) 是用于向 MIDI 插件发送控制参数的 MIDI 消息。
    MIDI 消息（MIDI message）通常由数个字节组成，其中第一个字节被称为 STATUS byte，
    其后面有跟有数个 DATA bytes。MIDI 消息协议定义了四种消息类型：

    1) voice messages; 
    2) system common messages; 
    3) system realtime messages; and 
    4) meta messages.


    MIDI voice messages include the following.

    |            Message             |                                            MIDI device action                                            |
    |--------------------------------|----------------------------------------------------------------------------------------------------------|
    | Note off                       | A note should be released and should stop sounding                                                       |
    | Note on                        | A note should be played and should start sounding                                                        |
    | Aftertouch / key pressure      | Pressure should be applied to a note, similarly to applying pressure to electronic keyboard keys         |
    | Controller                     | A controller should be affected. A controller is a virtual slider, knob, or switch                       |
    | Program change                 | A program should be assigned to a MIDI channel. A program is virtual instrument, patch, or preset        |
    | Channel pressure               | Pressure should be applied to a MIDI channel, similarly to applying pressure to electronic keyboard keys |
    | Pitch wheel / modulation wheel | A channel pitch should be changed up or down                                                             |

    不同的用途的字节有一个标准位：STATUS byte 最高 bit 为 1，而 DATA byte 最高位为 0。
    所以，每个字节实际可以表示 0 - 127 共 128 个值，也就是有 128 种 MIDI 消息。

    其中 MIDI CC 0 用途是 Bank Select，通常用于选择插件中乐器音色，对应 MIDI Out 的 Patch。
    比如 Program/Patch Change 消息：`0xC6 0x07` 表示将 06 通道选择 07 号乐器音色 (Program)，
    大多数音源软件都是这种用法。

        <Program Change>
        Status  2nd byte
        CnH     ppH

        n = MIDI channel number : 0H-FH (ch.1-ch.16)
        pp = Program number : 00H-23H (prog.1-prog.36)

    Orchestral 各个 Bank 下的对应乐器使用 prog.1-prog.36 这些值进行选择。


- ✨Sound Canvas VA
    Sound Canvas VA https://www.roland-china.com/products/sound_canvas_va/
    罗兰Sound Canvas系列SC-88 Pro与SC-88 ST Pro硬音源 https://www.bilibili.com/video/av62784433/

    罗兰 Sound Canvas 系列硬音源机是 20 世纪最后十年中的一代 MIDI 名机，从 1991 年的
    SC-55 硬音源机发售开始，便因罗兰系声音的漂亮华丽与细节丰富等特点，以及对 GS 标准的全支持，
    深得音乐人厚爱，畅销全球。

    1996 年发售的 SC-88 Pro 则是这一系列音源的重要型号。SC-88 Pro 硬音源包含旧版本资源效果，
    如 SC-55、SC-88 等，以及 GS MIDI 标准的完全兼容，而且增加了最为出彩的 EFX 插入式效果器，
    造就了丰富的声音变化。

    作为世界知名吉他效果器品牌 BOSS 的母公司，罗兰深谙效果器的精髓与数字实现方法。而罗兰将
    插入式效果器加入硬音源机，无疑让 SC 硬音源机提升到了一个新的档次，与雅马哈 XG 标准的
    MU 系列硬音源机平起平坐。SC-88 Pro 的这些示范曲中，便可感受到 EFX 的威力——电钢、风琴、吉他
    等音色经过 EFX 的修饰后，魅力大增，颇有以假乱真之感。

    因此，SC-88 Pro 便成为了对当年高手们所制作的海量精品 MIDI 提供最佳支持的型号。这些 MIDI
    广泛存在于如电脑游戏、卡拉OK、音乐制作等各个领域，为无数人呈现了美好的童年回忆。

    如今 SC-88 Pro 这个型号在复古硬件、游戏发烧友、音频设备玩家中依然大受追捧，二手价格从未破千，
    好成色机器更达两千甚至数千人民币。

    罗兰于 1991 年第一次推出的 Roland Sound Canvas 系列长期以来一直是 GS 音源的业界标准。
    有了 Sound Canvas VA，您现在可以将这款经典声源用作 VSTi 或 AU 插件，进行您的 DAW 
    音乐制作。它随附 1,600 多种高品质音色以及 64 种不同的插入效果、全局效果（如混响和均衡器），
    以及广泛的声音编辑功能。同时附带音色图，可播放在 SC-88 Pro 和其他硬件 Sound Canvas 
    音源上创建的 MIDI 音乐文件。将经典声音与现代技术相结合，Sound Canvas VA 是长期标准的现代演变。

    基于 Roland SC 系列硬件音源，Sound Canvas VA 是一款兼容 GS 的软件合成器，
    支持 VSTi（Windows 和 Mac）和 AU (Mac) 插件格式。
    随附 1,600 种流行音色和 63 个鼓组，
    可随时进行播放，以及 1 个支持 16 个声部和多达 64 音合成复音的插件实例。
    可以使用多个实例，仅仅受限于计算机的处理能力。
    该插件还附带 SC-8820、SC-88 Pro、SC-88 和 SC-55 音色图，
    可让您重播最初使用这些 Sound Canvas 硬件音源所创建的文件。

    Sound Canvas VA 不能用于播放标准 MIDI 文件 (SMF)。取决于音乐文件中的数据以及主机
    应用程序处理数据的方式，混音平衡、音调和节拍可能会与原版硬件的声音略有不同。


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




# FL Studio Morphine 加法合成音色
https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Morphine.htm
FL Studio Morphine https://www.bilibili.com/video/BV1Q3411t7ub

Morphine 是一种有很多“twists”的加法合成器，Additive Synthesizer，完全由正弦波谐波产生声音，
起初这似乎是一个主要的限制。就其本质而言，加法合成总是比减法合成更难处理，也更不直观。

Morphine 是一个 4 声部加法合成器，每个声部有 128 个谐波。“Morph”部分指的是一种允许在用户
控制下混合和变形这 4 种声音的架构。

虽然 Morphine 提供的旋钮一大堆，但是效果太塑料了。加法合成器的上限和 FM 合成器相似。
1960 年代，John Chowning 在斯坦福大学研究不同类型的颤音的时候，发现一种声音合成方法，
就是后来广为使用的 FM - frequency modulation 合成算法。在 FM 频率调制中，需要一个
载波信号和一个调制信号。这里调制信号作用于载波的频率，而非振幅上。

声音（频谱）是通过插值一系列频谱“快照”生成的，这些快照可以从任何输入样本创建或手动绘制。

声波合成是一个快速傅里叶逆变换过程，用户直接调整频域参数来控制各个频率分量的成分比例，合成最终效果。
合成器的 4 声部对应插件界面的 Generator A - D 四个生成器，Spectrum 直方图用来调整泛音列。

Morphine 特色预设音效：

    01 Pads & Atoms  51 PAD Spiral FG       风铃声
    05 Brass & WInd  08 WND Bottle Blow FG  口哨
    09 Percussion    01 PRC Analog Bell FG  风铃

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
Voicemeeter https://voicemeeter.com/see-what-voicemeeter-can-do-overview/
Light Host https://github.com/rolandoislas/LightHost/releases
Melodyne 系列教程 https://www.bilibili.com/video/BV1XW411W72G?p=6
VoiceMeeter 教程 https://www.bilibili.com/video/BV1a4411h7Xe?p=10

想要内录，即录制主机播放的声音，必需激活系统声音控制面板上的立体声混音输入设备。如果找不到立体声
混音设备，可以考虑重装声卡驱动。现在的多数声卡均无法直接通过声卡自身的功能实现内录和立体声混音，
声卡芯片厂商迫于 RIAA - Recording Industry Association of America 美国唱片工业联合会
的压力，及维护音乐版权防止内录的需要，在新推出的声卡上对音频模块的功能做了限制，无法直接实现混音
和内录的功能。如果看到立体声混音设备的音量指示始终绿色占一半的能量，就表示系统已经用白噪声填满通道，
系统不支持内录。即使 FL Studio ASIO 录音设备中选择了立体声混音输入，也不会接收到系统的声频数据，
但可以录制到 FL Studio 中播放的音频。

Surface Book 2 系统禁用了立体声混音，不能进行内录。变通方法是通过软件虚拟声卡来实现内录，
如 Virtual Audio Cable，但是兼容性不好，可以使用 Voicemeeter 实现内录。

Surface Book 2 独立显卡突然消失检测不到，以下是 Windows 欧洲官网的一个客户的回复解决步骤：

1. 打开设备管理器，查看显示适配器（这时应该有你的集成显卡：UHD Graphic 620显示），保持适配器界面打开页面。
2. 分离屏幕。
3. 等10-15秒（期间设备管理器会闪烁两到三次，这是系统正在刷新）
4. 插上屏幕，等待直到独立显卡在显示适配器出现 （Nvidia 1050 or 1060)
5. 重点：快速合上电脑，快速打开保持独立显卡还在显示适配器显示。
6. 硬关机，长按电源音量键20秒。
7. 出现工程开机界面，选择 restart。

录音设备和播放设备将 Line1(Virtual Audio Cable) 设置为默认设备。这样设置完后，打开一个音频文件
听不到任何声音，这是因为声音已经转入虚拟线路里了，接着下一步。

打开 Virtual Audio Cable 里的 Audio Repeater，将 Wave in 设为 Line1，Wave out 设为
声音输出设备，如扬声器，然后可以单击 Start。之后，就不要再动 Virtual Audio Cable，接着打开
录音软件或者屏幕录像专家，设置好各参数即可以开始录制。录制结束后，Virtual Audio Cable 可以
关闭了，这时如要听到音频则把音量控制图标设置回原来的麦克风和扬声器就可以了。

科普一下声音设备的驱动类型，依效果最差到最好的排列：

01. - MME（MultiMedia Extensions）：级别最低的驱动，于 Windows 3.1 时代首次推出。
    由于等待时间长，Cubase VST、Logic Audo 等音序软件应避免使用，除非找不到替换者。
    然而它在 Cakewalk Sonar 中使用似乎有着优良的性能，一些软件合成器也具有相当好的性能。
02. - WDM（Win32 Driver Model）：Microsoft 最新驱动类型，最先作为 Windows 98 SE 的选项
    （当时有一些问题，少数厂家因此推出自己的驱动），它们能够成功地运行于 Windows ME，当然意义
    更为重大的是对于 Windows 2K/XP 的用户。它们提供比 MME 或 DirectSound 驱动低得多的延时
    （某些情况下可以达到惊人的 1.5 毫秒）。在 Windows 2K/XP 下运行 Sonar，WDM 是必须的。
03. - KS（Kernel Streaming） 也叫 Direct Kernel streaming API，在 Windows XP 
    引入的一个低延时驱动，但不常用。
04. - WaveRT 自 Windows Vista 引入的微型端口驱动程序，提供了良好的音频性能和较小的延迟，与 KS 相当。
05. - Direct-X Audio Interface 是游戏中使用的低延时驱动，和 MME 相比。
06. - ASIO（Audio Stream Input Output）：音频流输入输出，通过 Steinberg 流行的的 MIDI
    加音频软件 Cubase VST 走向世界，是第一个真正提供了小于 10 毫秒低等待时间的驱动。ASIO 2.0
    同时支持多口（通过 ADAT 传送）采样精度的寻址和零等待的监听。DAW 软件和声卡二者都支持 ASIO，
    则考虑优先使用它。

在驱动程序设计中，为了简化开发的复杂度，Microsoft 提供会为每一类设备提供 Class Driver，这些
驱动实现某一类型设备驱动，与具体设备无关的公共的功能集合，与设备无关主要是指不直接操作设备硬件。
对于开发者而言，有了 Class Driver 的介入，仅仅需要实现一部分需要针对特定设备的功能。而这底层的
模块通常称为微型端口驱动程序 Miniport Drivers。


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

VoiceMeeter 界面中的输入面板中选择输入设备，对应可以设置其音频流的走向，点亮 A1 表示将音频流
向 A1 输出线路，点亮 A2 表示流向 A2 输出线路。在输出面板中，可以选择这些线路的具体输出设备。
注意，A1 ~ A5 是硬件输出通道，B1 ~ B2 是虚拟输出通道，即软件模拟通道 VAIO 和 AUX VAIO。
一个最简单的连接就是：系统音频流输出设置设置为 VAIO 或 AUX VAIO，然后在 VoiceMeeter 中激活
两者的 A1 通道，并且在 A1 通道设置中，选择系统的声卡硬件播放声音，这就是一个完整的音频流处理。
也可以选择 VAIO3，但这个通道需要注册专业版本才能使用。

安装 VoiceMeeter，VB Cable Driver 会在系统中添加以下几个播放、录音设备，对应 VoiceMeeter 界面的软件虚拟混音设备：

- VoiceMeeter Input/Output 对应 Banana 主界面中软件混音设备 VoiceMeeter VAIO；
- VoiceMeeter Aux Input/Output 对应主界面中软件混音设备 VoiceMeeter AUX VAIO；
- VoiceMeeter VAIO3 Input/Output 对应 Potato 主界面中软件混音设备 VAIO3；

系统音频数据输入到 VoiceMeeter Input 设备，就可以在 VoiceMeeter 软件中进行处理，而处理后
的音频又通过 Output 设备提供给系统中的其它设备进行使用。

不同版本提供不同的功能支持，标准版只有 AUX 和 VAIO 立体声混音功能，VAIO3 在土豆版中才支持。
每条软路线支持 8 通道，44.1KHz/48KHz/88.2KHz/96KHz/176.4KHz/192KHz 采样，通过 
Menu -> System Settings 菜单设置。

音频流要流向哪里，就在 Voicemeeter 这个控制面板里设置。比如选择 VoiceMeeter Input 设备
作为播放设备，点击设为默认值即可，这样电脑的声音就流入了 VoiceMeeter 对应的这条线路。
或者在任务栏中，通过音量控制面板设置。然后，在 VoiceMeeter 界面中，设置 A1 主线路的输出为
系统声卡的输出，默认是 Speakers(High Definition Audio Device)，即可以听到经过处理的音频。

硬件输入设备可以指定要使用的输出线路，硬件输出线路 A1/B2/B3/B4/B5，或虚拟输出线路 B1/B2/B3 
用于监听或内录。虚拟输出线路分别对应 VoiceMeeter Input 和 Aux Input 设备，
点亮后就可以在系统的相应的录音设备中获取音频流，可以为通信软件指定默认的设备。

如果选择 ASIO 设备作为 A1 输出，则可以路由所有物理输入，所有物理输入线路和 External FX 功能
可能支持 64 I/O。请注意，选择 ASIO 设备作为 A1 输出是将 Voicemeeter 与专业音频板结合使用的
最佳方式。可以设置物理输入/物理总线为无设备，但建议在系统设置对话为 A2、A3、A4 和 A5 选择输入
通道/或输出通道。

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

VoiceMeeter 提供 VB-Audio Network 对网络通信进行配置。使用 VBAN，可以将多个 VoiceMeeter 
应用程序中的音频发送到本地网络中的其他 PC 以及通过 WIFI 连接的移动 iOS 和 Android 设备。
VoiceMeeter Banana/Potato 可以从任何输入端发送和接收多达 8 种不同的音频流。

Main Features

- Up to 8 Streams (Standard Version: 4)
- 1 to 8 Channels (In every stream. Mono to 7.1 Surround)
- LAN & WIFI Stream to Windows PC, Android, iOS and Apple TV
- Up to 96 kHz 24 Bit Uncompressed PCM format

VBAN 网络串流 https://www.bilibili.com/read/cv5966646/
VB-Audio Network https://vb-audio.com/Voicemeeter/vban.htm

VBAN, The VB-Audio Network Protocol，即使用网络收发音频的协议，可以解决连接线过长等问题。
接收端的 VBAN 界面上 Incoming Streams 是接收的网络音频流，Outgoing Streams 是发送到网络
的音频流。界面上面就有本机 IP，如果你会鼓捣路由器，也可以远程网络串流。


香蕉版或土豆版主界面的输出面板提供了录音机功能，可以将处理后的音频录制下来，注意选择要录制的线路，
Menu -> Tape Recorder Options。

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


结合 Studio One 或 LiveProfessor 这些音频处理软件就可以实现各种音频效果，包括变声这种应用。
FL Studio 使用 NewTone 效果器插件也可以实现变声。

在 FL Studio 中，设置声音设备为 VoiceMeeter Virtual ASIO 或者 AUX Virtual ASIO，
在 Mixer 面板中选择输入为 VM-VAIO 1 ~ 4，前两个通道对应 B1 线路，后两个通道对应 B2 通道，
如果使用 Potato 还可以使用 B3 的通道。输出通道只要不和输入的一样就可以，占同样的通道会烂声，
最好和 VoiceMeeter 的混声输入路线分开。根据 FL Studio 设置的声音设备，输出的音频流会发送回
Virtual Inputs 中相应的软件输入路线。

也可以使用免费的 Light Host 直接调用 VST 插件，Studio One 这类软件也是通过插件实现各种功能的。

Studio One 是一款较为专业的音频处理软件，轻松体验最简单的编辑方式，即刻完成高强度的音频文件修改，
支持音频的二次创作、编辑、剪辑、录制、调音等功能。

机架指放置音响设备的机架，在软件中指定的是宿主软件，本身没有任何效果。机架只是声卡玩家对它的一种
形象称呼，用它来加载各种 VST 效果器插件。可以说只要是能用来同时加载多个 VST 插件的这类软件，
我们都可以称它机架软件。

打开 Light Host 后，先设置 Preference，选择好音频设备类型，并在 Device 列表中指定输出设备，
经过 VST 插件处理的音频流会发送到指定的设备上。

如果使用 ASIO 驱动，列表中的 VoiceMeeter Insert Virtual ASIO 对应的是 VoiceMeeter Input
线路。然后，在 Active Output/Input Channels 列表中指定输入输出的通道。然后设置 VoiceMeeter，
Menu -> System Settings 勾选需要使用的 Patch Insert 通道。

如果只是对声调的调整，可以使用 WavesTune/AutoTune/melodyne。


