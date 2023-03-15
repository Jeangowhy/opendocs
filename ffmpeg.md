

# 一、视频处理基本概念
- [GStreamer: open source multimedia framework](https://gstreamer.freedesktop.org/)
- [模拟直播推流 ffmpeg、vlc ](https://bbs.huaweicloud.com/blogs/102417)
- [ffmpeg 文档](http://ffmpeg.org/documentation.html)
- [ffmpeg 命令使用](http://www.ruanyifeng.com/blog/2020/01/ffmpeg.html)
- file:///C:/download/ffmpeg/doc/ffmpeg.html#Audio-Options

介绍 FFmpeg 用法之前，需要了解一些视频处理的基本概念。

1.1 容器

视频文件本身其实是一个容器（container），里面包括了视频和音频，也可能有字幕等其他内容。

常见的容器格式有以下几种。一般来说，视频文件的后缀名反映了它的容器格式。

- MP4
- MKV
- WebM
- AVI

下面的命令查看 FFmpeg 支持的容器。

    $ ffmpeg -formats

1.2 编码格式
视频和音频都需要经过编码，才能保存成文件。不同的编码格式（CODEC），有不同的压缩率，会导致文件大小和清晰度的差异。

常用的视频编码格式如下。

- H.262
- H.264
- H.265

上面的编码格式都是有版权的，但是可以免费使用。此外，还有几种无版权的视频编码格式。

- VP8
- VP9
- AV1

常用的音频编码格式如下。

- MP3
- AAC

上面所有这些都是有损的编码格式，编码后会损失一些细节，以换取压缩后较小的文件体积。无损的编码格式压缩出来的文件体积较大，这里就不介绍了。

下面的命令可以查看 FFmpeg 支持的编码格式，视频编码和音频编码都在内。

    $ ffmpeg -codecs

1.3 编码器
编码器（encoders）是实现某种编码格式的库文件。只有安装了某种格式的编码器，才能实现该格式视频/音频的编码和解码。

以下是一些 FFmpeg 内置的视频编码器。

- libx264：最流行的开源 H.264 编码器
- NVENC：基于 NVIDIA GPU 的 H.264 编码器
- libx265：开源的 HEVC 编码器
- libvpx：谷歌的 VP8 和 VP9 编码器
- libaom：AV1 编码器

音频编码器如下。

- libfdk-aac
- aac

下面的命令可以查看 FFmpeg 已安装的编码器。

    $ ffmpeg -encoders


## HLS AES-128 对称加密切割视频

FFmpeg 视频切片和加密：将一个 mp4 视频文件切割为多个 ts 片段，并在切割过程中对每一个片段使用 AES-128 加密，最后生成一个 m3u8 的视频索引文件。

许多不同的流协议已经认识到对内容保护的需求，这些协议已经以各种形式和风格增加了对内容保护的支持。协议的第一稿HLS规范中已经存在AES-128加密，将内容保护置于优先级列表中。实际上，HLS 有两种加密方案：

- AES-128 加密：这意味着使用 128 位密钥的高级加密标准对媒体段进行完全 加密。它还允许使用初始化向量来优化保护。
- 样本 AES：在这种情况下，各个媒体样本使用 AES 标准加密。使用此加密级别，流容器未完全加密。此外，加密样本如何封装，取决于片段的媒体格式。

实际上，AES-128 是 HLS 中最常用的加密方法。这种方法通常也是使用标准流服务器和工具来实现的最简单的方法。

AES 是一种对称加密算法。它被设计为在硬件和软件方面都是高效的。该算法在全球范围内得到应用，被美国政府用作加密敏感数据的标准加密算法。此外，它是大多数 DRM 系统的基础，例如 Microsoft Playready，Widevine 和 Verimatrix。

AES 加密的使用最近也成为 MPEG-DASH 通用加密标准的一部分。一般来说，这个级别的 AES 加密可能不会很快就被破坏。

但是，加密最弱点是 key 安全，这是许多 DRM 技术所关注的领域。关键保护至关重要，通常采用非常晦涩或复杂的方案来检索解密密钥。通过 AES-128 内容保护，密钥检索工作保持简单，易于实现。它也留有足够的自由使关键保护尽可能简单或高级。

HLS 规范仅提及密钥检索的一个方面：可以加载密钥的 URL 应该是清单文件的一部分。保护此资源取决于发布商本身，大多数情况下，我们看到了许多不同的保护解密密钥的方法：

- 保护清单：这依赖于将 URL 隐藏到解密密钥。它不提供高水平的安全性，因为 URL 可能泄漏或可能在网络上被拦截。
- 使用身份验证 Cookie：验证 Cookie 可由玩家发送密钥请求。这允许密钥服务器检查哪个用户正在请求密钥。如果用户不允许访问流，则不会返回密钥。结果，只有具有正确认证的用户才能接收解密密钥。
- 利用签名的 URL：通过为每个用户提供唯一的清单，可以使用签名的 URL。然后，用户特定的清单将包含一个包含认证令牌的解密密钥的链接。然后，服务器可以检查认证令牌，并确定是否可以访问密钥。

在实践中使用 AES-128 可以通过加密媒体文件，并使用清单文件中的 EXT-X-KEY 标签进行信令。该标签将 URL 发送到解密密钥。它应放在第一个段之前，该段是用给定的密钥加密的。

这个标签可以发生两个极端：

- 有一次在清单的顶部。这意味着所有段都使用相同的解密密钥加密。在解密密钥被拦截的情况下，整个流可以被解密。
- 用不同的 URL 每个段之前。这种方法允许您使用不同的密钥加密每个段。密钥允许您解密单个段，其中只包含几秒钟的媒体信息。

使用 OpenSSL 生成 16 个字节的 HEX 表达的初始化向量 IV，以及随机数作为加密用的 key：

    openssl rand  16 > enc.key
    openssl rand -hex 16 > iv.dat

将以上内容保存到 enc.keyinfo 文件中，内容格式如下：

    Key URI
    Path to key file
    IV

keyinfo 文件内容示范：

    http://localhost/video/enc.key
    enc.key
    48c674428c1e719751565ad00fe24243

使用 ffmpeg 命令进行加密切割，也可以利用生成的 index.m3u8 清单文件进行合并：

    ffmpeg -y -i test.mp4 -hls_time 12 -hls_key_info_file enc.keyinfo -hls_playlist_type vod -hls_segment_filename "file%d.ts" index.m3u8

    ffmpeg -allowed_extensions ALL -protocol_whitelist "file,http,https,tls,crypto,tcp" -i index.m3u8 -c copy out.mp4

    ffmpeg -allowed_extensions ALL -protocol_whitelist "file,http,https,tls,crypto,tcp" -i https://www.fhbf9.com/20200706/2EEcJn5i/1000kb/hls/index.m3u8 -c copy out.mp4
    ffmpeg -y -i "Sensual Body Licking.mp4" -hls_time 12 -hls_key_info_file enc.keyinfo -hls_playlist_type vod -hls_segment_filename "file%d.ts" index.m3u8

- 将 test.mp4 视频文件按每个小段 12 秒进行切割；
- 指定播放列表为 vod 点播格式，表示 PlayList 不会变；
- 每个小段的文件名使用 "file%d.ts" 格式；

以上命令生成 index.m3u8 文件，包含类似以下内容：

    #EXTM3U
    #EXT-X-VERSION:3
    #EXT-X-TARGETDURATION:4
    #EXT-X-PLAYLIST-TYPE:VOD
    #EXT-X-MEDIA-SEQUENCE:0
    #EXT-X-KEY:METHOD=AES-128,URI="/20200706/2EEcJn5i/1000kb/hls/key.key"
    #EXTINF:3.083,
    /20200706/2EEcJn5i/1000kb/hls/BydsfRrM.ts
    #EXTINF:2.083,
    /20200706/2EEcJn5i/1000kb/hls/vs0ys4zv.ts
    #EXTINF:2.083,
    /20200706/2EEcJn5i/1000kb/hls/IOkOowiR.ts
    ...
    #EXT-X-ENDLIST

如果清单没有结束标记，Videojs 播放器就会当作 Live 直播流进行播放，持续刷新清单文件保持更新。

生成的 m3u8文 件可以通过大部分播放器直接播放，如 video.js Web 播放器。

清单文件还可以二次引用：

    #EXTM3U
    #EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1000000,RESOLUTION=1280x720
    /20210206/ucQyEtG5/1000kb/hls/index.m3u8



## 二、FFmpeg 的使用格式
FFmpeg 的命令行参数非常多，可以分成五个部分。

    $ ffmpeg {1} {2} -i {3} {4} {5}

上面命令中，五个部分的参数依次如下。

- 全局参数
- 输入文件参数
- 输入文件
- 输出文件参数
- 输出文件

参数太多的时候，为了便于查看，ffmpeg 命令可以写成多行。

    $ ffmpeg \
    [全局参数] \
    [输入文件参数] \
    -i [输入文件] \
    [输出文件参数] \
    [输出文件]

下面是一个例子。

    $ ffmpeg \
    -y \ # 全局参数
    -c:a libfdk_aac -c:v libx264 \ # 输入文件参数
    -i input.mp4 \ # 输入文件
    -c:v libvpx-vp9 -c:a libvorbis \ # 输出文件参数
    output.webm # 输出文件

上面的命令将 mp4 文件转成 webm 文件，这两个都是容器格式。输入的 mp4 文件的音频编码格式是 aac，视频编码格式是 H.264；输出的 webm 文件的视频编码格式是 VP9，音频格式是 Vorbis。

如果不指明编码格式，FFmpeg 会自己判断输入文件的编码。因此，上面的命令可以简单写成下面的样子。

    $ ffmpeg -i input.avi output.mp4


## 三、常用命令行参数
FFmpeg 常用的命令行参数如下。

    -c  指定编码器
    -c copy 直接复制，不经过重新编码（这样比较快）
    -c:v    指定视频编码器
    -c:a    指定音频编码器
    -i  指定输入文件
    -an 去除音频流 -an (output) Disable audio recording.
    -vn  去除视频流
    -preset 指定输出的视频质量，会影响文件的生成速度，有以下几个可用的值 ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow。
    -y  不经过确认，输出时直接覆盖同名文件。

输出流中的非单调 DTS 导致错误： More than 1000 frames duplicated。

    ffmpeg -i input.wmv -c:v libx264 -crf 23 output.mp4
    ffmpeg -i input.wmv -c:v libx264 -crf 23 -preset medium  -tune stillimage -an output.mp4

    [aac @ 000002e4964e8a00] Queue input is backward in time.30 bitrate=55913.5kbits/s dup=297 drop=0 speed=0.234x
    [mp4 @ 000002e496650980] Non-monotonous DTS in output stream 0:1; previous: 9216, current: 8203; changing to 9217. This may result in incorrect timestamps in the output file.

解释：

- 视频中一般包含视频流和音频流，并且可以有多个视频流，多个音频流。FFmpeg 转换视频，默认情况下，其第一个视频流、第一个音频率参与转换，其他的忽略。
- 可能视频的总比特率为变量，所以原视频的信息（比例帧率）未能写入到输出视频中去。

解决方法：

- 使用参数 -r 25 强制指定写入帧率为 25fps，使得输出视频的帧率不过高（蹦到1000）。
- 或者使用参数 -map 0 使得所有的流都参与到转换中去。


## 四、常见用法
下面介绍 FFmpeg 几种常见用法。

4.1 查看文件信息
查看视频文件的元信息，比如编码格式和比特率，可以只使用-i参数。

    $ ffmpeg -i input.mp4

上面命令会输出很多冗余信息，加上-hide_banner参数，可以只显示元信息。

    $ ffmpeg -i input.mp4 -hide_banner

4.2 转换编码格式
转换编码格式（transcoding）指的是， 将视频文件从一种编码转成另一种编码。比如转成 H.264 编码，一般使用编码器libx264，所以只需指定输出文件的视频编码器即可。


    $ ffmpeg -i [input.file] -c:v libx264 output.mp4

下面是转成 H.265 编码的写法。

    $ ffmpeg -i [input.file] -c:v libx265 output.mp4

4.3 转换容器格式
转换容器格式（transmuxing）指的是，将视频文件从一种容器转到另一种容器。下面是 mp4 转 webm 的写法。

    $ ffmpeg -i input.mp4 -c copy output.webm

上面例子中，只是转一下容器，内部的编码格式不变，所以使用 -c copy 指定直接拷贝，不经过转码，这样比较快。

4.4 调整码率
调整码率（transrating）指的是，改变编码的比特率，一般用来将视频文件的体积变小。下面的例子指定码率最小为964K，最大为3856K，缓冲区大小为 2000K。

    $ ffmpeg -i input.mp4 -minrate 964K -maxrate 3856K -bufsize 2000K output.mp4


4.5 改变分辨率（transsizing）
下面是改变视频分辨率（transsizing）的例子，从 1080p 转为 480p 。

    $ ffmpeg -i input.mp4 -vf scale=480:-1 output.mp4

4.6 提取音频
有时，需要从视频里面提取音频（demuxing），可以像下面这样写。

    $ ffmpeg -i input.mp4 -vn -c:a copy output.aac

上面例子中，-vn表示去掉视频，-c:a copy表示不改变音频编码，直接拷贝。

4.7 添加音轨
添加音轨（muxing）指的是，将外部音频加入视频，比如添加背景音乐或旁白。

先移除音轨，再合并，注意音频要和视频同长度，否则时间短一方补白。

    ffmpeg -i in.mp4  -an -vcodec copy  out.mp4 
    $ ffmpeg -i input.aac -i input.mp4 output.mp4

上面例子中，有音频和视频两个输入文件，FFmpeg 会将它们合成为一个文件。

音频可以先进行裁剪：

    ffmpeg -ss 0:00:35 -t 11 -i "陌上归人1762.mp3" -c copy out.mp3


4.8 截图
下面的例子是从指定时间开始，连续对50毫秒秒钟的视频进行截图。

    $ ffmpeg -y -i input.mp4 -ss 00:01:24 -t 00:00:00.50 output_%3d.jpg

如果只需要截一张图，可以指定只截取一帧。

    $ ffmpeg -ss 01:23:45 -i input -vframes 1 -q:v 2 output.jpg

上面例子中，-vframes 1指定只截取一帧，-q:v 2表示输出的图片质量，一般是1到5之间（1 为质量最高）。

4.9 裁剪
裁剪（cutting）指的是，截取原始视频里面的一个片段，输出为一个新视频。可以指定开始时间（start）和持续时间（duration），也可以指定结束时间（end）。

    $ ffmpeg -ss [start] -i [input] -t [duration] -c copy [output]
    $ ffmpeg -ss [start] -i [input] -to [end] -c copy [output]

-vcodec libx264 -b:v 2M 精准切割。

4.10 图片序列合成视频

    ffmpeg -f image2 -i image_%d.jpg out.mp4
    ffmpeg -f image2 -i image_%d.jpg  -vcodec libx264  out.mp4
    ffmpeg -f image2 -i image_%d.jpg  -vcodec libx264 -r 10  out.mp4

图片的命名格式为 image_%d.jpg 形式，即：image_0.jpg ...

指定编码格式 -vcodec libx264 表示使用 x264 开源的 H.264/MPEG-4 AVC 视频编码函数库，这是最好的有损视频编码器之一。指定帧率 -r 10 表示定义帧率为 10 fps。


下面是实际的例子。

    ffmpeg -ss 1:42:36 -t 264 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy 搖れる想い.mkv
    ffmpeg -ss 1:42:36 -to 1:47:00 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy 搖れる想い.mkv
    ffmpeg -ss 1:36:52 -to 1:42:00 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy "don't you see.mkv"
    ffmpeg -ss 1:32:24 -to 1:36:50 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy マイフレンド.mkv
    ffmpeg -ss 1:13:04 -to 1:16:54 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy "心を開いて.mkv"
    ffmpeg -ss 0:54:35 -to 0:59:39 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy "かけがえのないもの.mkv"
    ffmpeg -ss 0:33:53 -to 0:37:40 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy "goodbye my loneliness.mkv"
    ffmpeg -ss 0:22:55 -to 0:26:15 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy "息もできない.mkv"
    ffmpeg -ss 0:18:23 -to 0:22:52 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy "you and me.mkv"
    ffmpeg -accurate_seek -ss 0:14:42 -to 0:18:22 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy "xxx.mkv"
    ffmpeg -accurate_seek -ss 0:10:33 -to 0:14:41 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy "Top Secret.mkv"
    ffmpeg -ss 0:06:45 -to 0:10:31 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy 君に逢いたくなったら・・・.mkv
    ffmpeg -ss 0:02:38 -to 0:06:42 -i "ZARD What a beautiful memory 2009 [内嵌].mkv" -c copy きっと忘れない.mkv

    ffmpeg -ss 0:0:00 -to 0:01:14 -i "少年谢尔顿.Young.Sheldon.S03E01.中英字幕.WEB-HR.AAC.1080P.x264-人人影视.mp4" -c copy "Young.Sheldon.S03E01.p1.mp4"
    ffmpeg -ss 0:01:17 -to 0:02:43 -i "少年谢尔顿.Young.Sheldon.S03E01.中英字幕.WEB-HR.AAC.1080P.x264-人人影视.mp4" -c copy "Young.Sheldon.S03E01.p2.mp4"

    ffmpeg -ss 0:00:33 -i "少年谢尔顿.Young.Sheldon.S02E02.中英字幕.HDTVrip.720P-人人影视.mp4" -c copy "少年谢尔顿.Young.Sheldon.S02E02.中英字幕.HDTVrip.720P-人人影视.mp4"


    ffmpeg -i 202106121.mp4 -ss 0:08:25 -to 0:25:00 -c copy 202106121-.mp4
    ffmpeg -i FC2PPV-1740027-1.mp4 -ss 0:00:00 -to 0:07:23 -filter:v "crop=400:720:440:0" -c:a copy FC2PPV-1740027-01.mp4
    ffmpeg -i FC2PPV-1740027-1.mp4 -ss 0:07:23 -to 0:11:23 -c copy FC2PPV-1740027-02.mp4
    ffmpeg -i FC2PPV-1740027-1.mp4 -ss 0:11:29 -to 0:13:01 -filter:v "crop=400:720:440:0" -c copy FC2PPV-1740027-03.mp4
    ffmpeg -i FC2PPV-1740027-1.mp4 -ss 0:13:06 -c copy FC2PPV-1740027-04.mp4


上面例子中，-c copy 表示不改变音频和视频的编码格式，直接拷贝，这样会快很多。

4.10 为音频添加封面
有些视频网站只允许上传视频文件。如果要上传音频文件，必须为音频添加封面，将其转为视频，然后上传。

下面命令可以将音频文件，转为带封面的视频文件。

    $ ffmpeg \
    -loop 1 \
    -i cover.jpg -i input.mp3 \
    -c:v libx264 -c:a aac -b:a 192k -shortest \
    output.mp4

上面命令中，有两个输入文件，一个是封面图片cover.jpg，另一个是音频文件input.mp3。-loop 1参数表示图片无限循环，-shortest参数表示音频文件结束，输出视频就结束。


音/视频倒放

1.视频倒放，无音频

    ffmpeg.exe -i inputfile.mp4 -filter_complex [0:v]reverse[v] -map [v] -preset superfast reversed.mp4
 
2.视频倒放，音频不变

    ffmpeg.exe -i inputfile.mp4 -vf reverse reversed.mp4
 
3.音频倒放，视频不变

    ffmpeg.exe -i inputfile.mp4 -map 0 -c:v copy -af "areverse" reversed_audio.mp4
 
4.音视频同时倒放

    ffmpeg.exe -i inputfile.mp4 -vf reverse -af areverse -preset superfast reversed.mp4


画中画

    // 左上角
    -i in1.mp4 -i in2.mp4 "nullsrc=size=200x200 [base]; [0:v] setpts=PTS-STARTPTS,scale=200x200
    [left]; [1:v] setpts=PTS-STARTPTS, scale=100x100 [right];[base][left] overlay=shortest=1 [tmp1];
    [tmp1][right] overlay=shortest=1:x=0" -c:v libx264 out.mp4 
    
    //左下角
    -i in1.mp4 -i in2.mp4 "nullsrc=size=200x200 [base]; [0:v] setpts=PTS-STARTPTS,scale=200x200
    [left]; [1:v] setpts=PTS-STARTPTS, scale=100x100 [right];[base][left] overlay=shortest=1 [tmp1];
    [tmp1][right] overlay=shortest=1:x=0:y=200-100" -c:v libx264 out.mp4 

去水印

    //x、y为水印坐标，w、h为水印大小
    -i in.mp4 -filter_complex "delogo=x=998:y=15:w=260:h=80" out.mp4

添加水印

    // 图片水印：logopath为水印路径，overlay为水印位置（左上）
    -i in.mp4 -i logopath -filter_complex overlay=10:10 out.mp4
    //文字水印
    -i in.mp4 -vf "drawtext=fontsize=20:fontfile=simsun.ttc:text='文字水印':fontcolor=red:x=10:y=10"
 
视频旋转 90 度

```sh
ffmpeg -i test.mp4 -metadata:s:v rotate="90" -codec copy output_success.mp4
# 顺时针旋转 90 度
ffmpeg -i test.mp4 -vf "transpose=1" out.mp4 
# 逆时针旋转 90 度
ffmpeg -i test.mp4 -vf "transpose=2" out.mp4 
# 顺时针旋转 90 度 + hflip
ffmpeg -i test.mp4 -vf "transpose=3" out.mp4 
# 逆时针旋转 90 度 + hflip
ffmpeg -i test.mp4 -vf "transpose=0" out.mp4 
# 水平翻转视频
ffmpeg -i test.mp4 -vf hflip out.mp4 
# 垂直翻转视频
ffmpeg -i test.mp4 -vf vflip out.mp4
```

转置方法 transpose 可以旋转，但是不能用 -c:v copy，所以会重新转码。

Set a metadata key/value pair.

    -metadata[:metadata_specifier] key=value (output,per-metadata)’

## 音频处理
https://www.thepaper.cn/newsDetail_forward_17481539

使用FFmpeg删除视频中的音频

很多人想要知道如何从录制的视频中删除音轨，比如马路噪音或者背景噪音。

删除音频最简单的方法是：只将视频复制到一个新的文件中，-an 表示不要复制音频。
这个方法之所以简单，是因为它无需将视频重新编码。下面是删除音频的命令行：

    ffmpeg.exe -i videoWithAudio.mp4 -c:v copy -an videoWithoutAudio.mp4

使用 -c:v copy 命令将视频复制到 videoWithoutAudio.mp4

FFmpeg 中的 map 命令来删除特定音轨。

    -map input_file_index:stream_type_specifier:stream_index

然后，你可以通过 -map 0:a:1（从0开始计数）从视频中选择第二个音轨。
同样，-map 0 是指选择第一个输入文件中的所有数据（包括音频和视频），所以你需要先选择所有数据，然后取消选择音频。

    ffmpeg.exe -i videoWithAudio.mp4 -map 0 -map 0:a:1 -copy videoOutput.mp4

如果电影中有 5 个音轨，除了第一个，其他你都想选择，参数前加负号，-map -0:a:0 这一命令。
FFmpeg 在选择时就会忽略第一个音轨。

可以通过如下方式，使用反向的 map 来达到相同的效果。

    ffmpeg -i videoWithAudio.mp4 -map 0 -map -0:a videoWithoutAudio.mp4

添加音频命令行如下所示：

    ffmpeg -i video.mp4 -i audio.mp3 -c copy -map 0:v:0 -map 1:a:0  videoWithAudio.mp4

使用 map 命令将视频和音频分别从不同的文件中复制到同一个输出文件。

-map 0:v:0 选择了第 0 个输入文件（视频输入）的第 0 个轨道。
–map 1:a:0 选择了第一个输入文件（音频输入）的第0个轨道。

不用重新编码，-c copy 同时复制音轨和视轨到输出文件。
如果你想要重新编码，可以选择合适的音视频编解码器，配置相应的编码质量。


## 字幕
https://crifan.github.io/media_process_ffmpeg/website/subtitle/embed/

SRT字幕通常以srt作为后缀，作为外挂字幕，多数主流播放器都支持直接加载并显示SRT字幕，具体细节看参考SubRip (.SRT) subtitles support in players。
该格式是基于纯文本的格式，使用CR+LF作为换行符（Windows下常用换行符，Unix 使用LF作为换行符）。每个SRT文件包含至少一个字幕段。

每个字幕段有四部分构成：

1. 字幕序号
2. 字幕显示的起始时间
3. 字幕内容（可多行）
4. 空白行（表示本字幕段的结束）

其中字幕序号一般是顺序增加的，表示字幕是一系列连续的序列。但该数值在字幕显示中不起任何作用，只是起着标记和标识的作用，方便分配翻译行数用。字幕序号的值可以随意，1和100都一样，并不会影响字幕的显示。但字幕序号也是字幕段的一部分，所以不能没有或者删去，否则在播放时，将出现错误。

字幕显示起始时间的格式如下：

    hour:minute:second.millisecond --> hour:minute:second.millisecond
    hour:minute:second,millisecond --> hour:minute:second,millisecond

后面还可以附加用于指定字幕显示位置的信息，以像素为单位，格式如下：

     X1:number Y1:number X2:number Y2:number

一个典型的 SRT 文件如下（截取自阿凡达中英字幕）：

    3
    00:00:39,770 --> 00:00:41,880
    在经历了一场人生巨变之后
    When I was lying there in the VA hospital ...

    4
    00:00:42,550 --> 00:00:44,690
    我被送进了退伍军人管理局医院
    ... with a big hole blown through the middle of my life,

    5
    00:00:45,590 --> 00:00:48,120
    那段时间我经常会梦到自己在飞翔
    ... I started having these dreams of flying.

多数SRT支持一些特定格式化，比如斜体、粗体、下划线以及字体颜色。使用时需要基于HTML的标签，具体用法如下：

    <font color=red>颜色</font>
    <i>字体斜体</i>
    <u>字体下加划线</u>
    <br>换行
    <b>字体加粗</b>

这些 HTML 可嵌套。当然某些播放器还对 SRT 做了扩展，可以支持 ASS/SSA 中部分格式化代码。


内嵌字幕

    ffmpeg -i input.mp4 -vf subtitles=subtitle.srt output.mp4

如果原视频有字幕流，ffmpeg 可能会自动选择原视频中的字幕流，而自定义的字幕文件根本没有被加载。

使用 ffmpeg 可以将 ass/vtt/lyric 转换为 srt 文件，命令如下：

    ffmpeg -i a.ass b.srt
    ffmpeg -i c.vtt d.srt
    ffmpeg -i e.lyric f.srt

使用 ffplay 现在字幕需要使用 subtitles filter，具体命令如下：

    ./ffplay test.mp4 -vf subtitles=test.srt


## 视频拼接

```sh
# PowerShell
$in = "122.mp4"
$slice = @("00:00:00", "00:30:52", "00:41:17", "00:20:43") # start-duration,...
$start = $false
$map = @{}

$slice | % {
    if(!$start){
        $start = $_
    }else{
        $stop = $_
        $key = "$start-$stop" -replace ":","_"
        $map.Add($key, "$key.mp4")
        ffmpeg -i "$in" -ss $start -t $stop -c copy "$key.mp4"
        $start = $false
    }
}
# $slice = $map.Value -join "|"
# ffmpeg -i "concat:$slice" -c copy "out.mp4"
$map.Values | Sort | % { "file '$_'" } | Out-File -Encoding UTF8 -FilePath "mylist.txt"
ffmpeg -f concat -safe 0 -i "mylist.txt" -c copy "out.mp4"
$map.Values | % { rm $_ } ; rm mylist.txt
```

方法一：FFmpeg concat 协议，对于 MPEG 格式的视频，可以直接连接。

但将 MP4 视频分割再进行拼接的时候报错 Found duplicated MOOV Atom. Skipped ，结果只是丢弃了其中一个视频。

    ffmpeg -i "concat:001.mp4|002.mp4" -c copy out.mp4

原理上是因为 concat 协议，实际上就只是把两个视频直接拼接，把后一个视频直接贴到前一个视频后面而已，因此只会适用于ts 和 flv 等一些格式。mp4 格式整体有一层容器，而不像 ts 这类格式可以直接拼接，需要先解开容器再对提取的视频流进行拼接。

执行下面的命令拼接，将要拼接的片断文件名写在 mylist.txt 文件中，每个文件名占一行，格式为 `file "file_path"`：

    ffmpeg -f concat -safe 0 -i mylist.txt -c copy output


对于非 MPEG 格式容器，但是是 MPEG 编码器（H.264、DivX、XviD、MPEG4、MPEG2、AAC、MP2、MP3 等），可以包装进 TS 格式的容器再合并。

    ffmpeg -i input1.flv -c copy -bsf:v h264_mp4toannexb -f mpegts input1.ts
    ffmpeg -i input2.flv -c copy -bsf:v h264_mp4toannexb -f mpegts input2.ts
    ffmpeg -i input3.flv -c copy -bsf:v h264_mp4toannexb -f mpegts input3.ts
    ffmpeg -i "concat:input1.ts|input2.ts|input3.ts" -c copy -bsf:a aac_adtstoasc -movflags +faststart output.mp4

保存 QuickTime/MP4 格式容器的时候，建议加上 -movflags +faststart。这样分享文件给别人的时候可以边下边看。

方法二：FFmpeg concat 分离器

Combine MP4 files using FFMPEG on Windows (without re-encoding)这种方法成功率很高，也是最好的，但是需要 FFmpeg 1.1 以上版本。先创建一个文本文件 filelist.txt：

    file 'input1.mkv'
    file 'input2.mkv'
    file 'input3.mkv'

    ffmpeg -f concat -i filelist.txt -c copy output.mkv

    (for %i in (*.mp4) do @echo file '%i') > mylist.txt

    file 'input1.mp4'
    file 'input2.mp4'
    file 'input3.mp4'

    ffmpeg -f concat -i filelist.txt -c copy output.mp4

注意：使用 FFmpeg concat 分离器时，如果文件名有奇怪的字符，要在 filelist.txt 中转义。

方法三：Mencoder 连接文件并重建索引

这种方法只对很少的视频格式生效，对于没有使用 MPEG 编码器的视频（如 FLV1 编码器），可以尝试这种方法，或许能够成功。

    mencoder -forceidx -of lavf -oac copy -ovc copy -o output.flv input1.flv input2.flv input3.flv

方法四：使用 FFmpeg concat 过滤器重新编码（有损）

语法有点复杂，但是其实不难。这个方法可以合并不同编码器的视频片段，也可以作为其他方法失效的后备措施。

    ffmpeg -i input1.mp4 -i input2.webm -i input3.avi -filter_complex '[0:0] [0:1] [1:0] [1:1] [2:0] [2:1] concat=n=3:v=1:a=1 [v] [a]' -map '[v]' -map '[a]' <编码器选项> output.mkv

如你所见，上面的命令合并了三种不同格式的文件，FFmpeg concat 过滤器会重新编码它们。注意这是有损压缩。
[0:0] [0:1] [1:0] [1:1] [2:0] [2:1] 分别表示第一个输入文件的视频、音频、第二个输入文件的视频、音频、第三个输入文件的视频、音频。concat=n=3:v=1:a=1 表示有三个输入文件，输出一条视频流和一条音频流。[v] [a] 就是得到的视频流和音频流的名字，注意在 bash 等 shell 中需要用引号，防止通配符扩展。

### Screen Capture
- https://trac.ffmpeg.org/wiki/vfwcap
- https://trac.ffmpeg.org/wiki/Capture/Webcam
- https://github.com/rdp/screen-capture-recorder-to-video-windows-free/releases
- https://github.com/MathewSachin/Captura/releases/download/v9.0.0-beta4/Captura-Setup.exe
- https://zhuanlan.zhihu.com/p/580624916
- [FFmpeg API采集摄像头视频和麦克风音频](https://www.cnblogs.com/lidabo/p/8662955.html)

ffmpeg 采集设备的主要方式是通过 Windows dshow（directshow）、vfwcap、gdigrab。

```sh
> ffmpeg -devices -hide_banner
Devices:
 D. = Demuxing supported
 .E = Muxing supported
 --
 D  dshow           DirectShow capture
 D  lavfi           Libavfilter virtual input device
  E sdl,sdl2        SDL2 output device
 D  vfwcap          VfW video capture
```

- vfwcap 主要用来采集摄像头类设备，
- gdigrab 则是通过 GDI API 抓取 Windows 窗口程序界面。只能录屏幕，没声音；
- dshow 可以用来抓取摄像头、采集卡、麦克风等。

dshow 需装 directX，优点是可以指定多个输入，screen capture recorder 是一个 DX Filter 工具，
可将其作为 dshow 模式下的视频输入，可将 virtual-audio-capturer 作为 dshow 模式下的音频
输入，实现录屏的同时录音。

VLC example: http://betterlogic.com/roger/2010/07/how-to-use-vlc-as-a-free-open-source-alternative-to-playon-tv

    ffplay -f dshow -i video="screen-capture-recorder"

    ffmpeg -f dshow  -i video="screen-capture-recorder"  -r 20 -t 10 screen-capture.mp4 # -t 10 for 10 seconds recording

    ffmpeg -f dshow -i audio="virtual-audio-capturer":video="screen-capture-recorder" yo.mp4

    ffmpeg -f dshow -i audio="virtual-audio-capturer":video="screen-capture-recorder" -offset_x 0 -offset_y 0 -video_size 1920x1080 yo.mp4


    ffmpeg -f vfwcap -i video="screen-capture-recorder" -r 15 -vcodec libx264 -preset:v ultrafast -tune:v zerolatency screen.mkv

    ffmpeg -f dshow -i video="screen-capture-recorder" -r 15 -pixel_format yuv422 -vcodec libx264 -s 1920x1080 -preset:v ultrafast -tune:v zerolatency screen.mkv

    ffmpeg -f gdigrab -t 30 -framerate 15 -i desktop -f dshow -i audio="virtual-audio-capturer" -b:v 3M -pixel_format yuv422 -vcodec libx264 -s 1920x1080 -y screen.flv

    ffmpeg -f gdigrab -framerate 30 -i desktop -b:v 3M -pixel_format yuv422 -vcodec libx264 -y screen.flv

参数说明：

-f 指定采集数据方式，dshow gdigrab vfwcap。
-i 指定输入，desktop 表示 gdigrab 采集模式输入全部桌面。
   dshow 模式下，如：
   -i video="screen-capture-recorder" 
   -i audio="virtual-audio-capturer" 
-t 表示录屏时间，缺省则没有录屏时间限制，会一直录，录到手动停止或强制关闭
-framerate 表示帧率。
-s 表示分辨率
-b:v 表示码率，如 -b:v 3M。
-pixel_format 表示像素格式，如 yuv420p。
-vcodec 表示编码方式。libx264 表示软编码。硬件编码可大大降低 CPU 的占用率，常见硬编解码有：
    - h264_qsv，即使用集显加速；
    - h264_nvenc，即使用N卡加速；
    - h264_amf，即使用A卡加速。
-y 表示覆盖同名文件

FFMPEG 会根据输出文件名扩展来决定编码文件格式，mp4 较为常见，flv 便于网络传输格式，因为如果中间
有录制损坏，mp4 整个就播放不了，但流式的 flv 能。


输出画中画视频，将摄像头画面放在录制画面的右下侧，并用 `overlay` 方法将其置于屏幕画面的上方，
遮挡对应区域：

    $audio = "Realtek High Definition Audio(SST)"
    $video = "Microsoft Camera Rear"
    ffmpeg -f gdigrab -r 1 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 -b:v 0 -crf 32 output.mp4 -f dshow -i audio="$audio" -f dshow -s 640x360 -i video="$video" -filter_complex "overlay=W-w-1:H-h-1" -y

从坐标 0:0 开始圈定出一个 2560x1440 的屏幕范围，然后以 每 50 秒截图 1 帧，输出为 mp4 格式：

    ffmpeg -f gdigrab -r 20/1001 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 output.mp4

报错 Could not set video options，多是由于录制设置的帧率、分辨率超出设备范围造成的。使用日志
调试命令检查设备的输出属性，调整录制属性。

```sh
    ffmpeg -y -f vfwcap -i list 
    ffmpeg -list_devices true -f dshow -i dummy
    $device = "Microsoft Camera Rear"
    ffmpeg -f dshow -list_options true -i video="$device" -loglevel debug
    ffmpeg -list_options true -f dshow -i video="$device"

    [dshow @ 000001cbbdcab300] DirectShow video device options (from video devices)
    [dshow @ 000001cbbdcab300]  Pin "鎹曡幏" (alternative pin name "鎹曡幏")
    [dshow @ 000001cbbdcab300]   pixel_format=yuyv422  min s=1920x1080 fps=15 max s=1920x1080 fps=30
    [dshow @ 000001cbbdcab300]   pixel_format=yuyv422  min s=640x360 fps=15 max s=640x360 fps=30
    [dshow @ 000001cbbdcab300]   pixel_format=yuyv422  min s=640x480 fps=15 max s=640x480 fps=30
    [dshow @ 000001cbbdcab300]   pixel_format=yuyv422  min s=640x640 fps=15 max s=640x640 fps=30
    [dshow @ 000001cbbdcab300]   pixel_format=yuyv422  min s=1280x720 fps=15 max s=1280x720 fps=30
    video=Microsoft Camera Front: Immediate exit requeste
```

## 五、参考链接

- [FFmpeg libav tutorial](https://github.com/leandromoreira/ffmpeg-libav-tutorial#chapter-3---transcoding)
- [Digital video introduction](https://github.com/leandromoreira/digital_video_introduction/blob/master/encoding_pratical_examples.md#split-and-merge-smoothly)
- [FFmpeg encoding and editing course](http://slhck.info/ffmpeg-encoding-course/)
- [Making Slideshows w/FFMpeg](http://dragonquest64.blogspot.com/2019/10/making-slideshows-wffmpeg.html)
- [The Complete Guide for Using ffmpeg in Linux](https://itsfoss.com/ffmpeg/)
- [Adding subtitles to your videos the easy way](https://bernd.dev/2020/04/adding-subtitles/)





# 5.4 Main options

‘-ss position (input/output)’

When used as an input option (before -i), seeks in this input file to position. Note that in most formats it is not possible to seek exactly, so ffmpeg will seek to the closest seek point before position. When transcoding and ‘-accurate_seek’ is enabled (the default), this extra segment between the seek point and position will be decoded and discarded. When doing stream copy or when ‘-noaccurate_seek’ is used, it will be preserved.

When used as an output option (before an output url), decodes but discards input until the timestamps reach position.

position must be a time duration specification, see (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual.

‘-sseof position (input)’

Like the -ss option but relative to the "end of file". That is negative values are earlier in the file, 0 is at EOF.


# 5.5 Video Options

    -vframes number (output)

Set the number of video frames to output. This is an obsolete alias for -frames:v

    -r[:stream_specifier] fps (input/output,per-stream)

Set frame rate (Hz value, fraction or abbreviation).

To force the frame rate of the input file (valid for raw formats only) to 1 fps and the frame rate of the output file to 24 fps:

    ffmpeg -r 1 -i input.m2v -r 24 output.avi


As an input option, ignore any timestamps stored in the file and instead generate timestamps assuming constant frame rate fps. This is not the same as the ‘-framerate’ option used for some input formats like image2 or v4l2 (it used to be the same in older versions of FFmpeg). If in doubt use ‘-framerate’ instead of the input option ‘-r’.

As an output option, duplicate or drop input frames to achieve constant output frame rate fps.

    -s[:stream_specifier] size (input/output,per-stream)

As an input option, this is a shortcut for the ‘video_size’ private option, recognized by some demuxers for which the frame size is either not stored in the file or is configurable – e.g. raw video or video grabbers.

As an output option, this inserts the scale video filter to the end of the corresponding filtergraph. Please use the scale filter directly to insert it at the beginning or some other place.

The format is ‘wxh’ (default - same as source).

    -aspect[:stream_specifier] aspect (output,per-stream)

aspect can be a floating point number string, or a string of the form num:den, where num and den are the numerator and denominator of the aspect ratio. For example "4:3", "16:9", "1.3333", and "1.7777" are valid argument values.

If used together with ‘-vcodec copy’, it will affect the aspect ratio stored at container level, but not the aspect ratio stored in encoded frames, if it exists.

    -vn (output)

Disable video recording. For full manual control see the -map option.

    -vcodec codec (output)

Set the video codec. This is an alias for -codec:v.

    -pass[:stream_specifier] n (output,per-stream)

Select the pass number (1 or 2). It is used to do two-pass video encoding. The statistics of the video are recorded in the first pass into a log file (see also the option -passlogfile), and in the second pass that log file is used to generate the video at the exact requested bitrate. On pass 1, you may just deactivate audio and set output to null, examples for Windows and Unix:

    ffmpeg -i foo.mov -c:v libxvid -pass 1 -an -f rawvideo -y NUL
    ffmpeg -i foo.mov -c:v libxvid -pass 1 -an -f rawvideo -y /dev/null

    -passlogfile[:stream_specifier] prefix (output,per-stream)

Set two-pass log file name prefix to prefix, the default file name prefix is “ffmpeg2pass”. The complete file name will be ‘PREFIX-N.log’, where N is a number specific to the output stream

    -vf filtergraph (output)

Create the filtergraph specified by filtergraph and use it to filter the stream.

This is an alias for -filter:v, see the -filter option.

## 5.6 Advanced Video options


## 5.7 Audio Options

    -aframes number (output)

Set the number of audio frames to output. This is an obsolete alias for -frames:a, which you should use instead.

    -ar[:stream_specifier] freq (input/output,per-stream)

Set the audio sampling frequency. For output streams it is set by default to the frequency of the corresponding input stream. For input streams this option only makes sense for audio grabbing devices and raw demuxers and is mapped to the corresponding demuxer options.

    -aq q (output)

Set the audio quality (codec-specific, VBR). This is an alias for -q:a.

    -ac[:stream_specifier] channels (input/output,per-stream)

Set the number of audio channels. For output streams it is set by default to the number of input audio channels. For input streams this option only makes sense for audio grabbing devices and raw demuxers and is mapped to the corresponding demuxer options.

    -an (input/output)

As an input option, blocks all audio streams of a file from being filtered or being automatically selected or mapped for any output. See -discard option to disable streams individually.

As an output option, disables audio recording i.e. automatic selection or mapping of any audio stream. For full manual control see the -map option.

    -acodec codec (input/output)

Set the audio codec. This is an alias for -codec:a.

    -sample_fmt[:stream_specifier] sample_fmt (output,per-stream)

Set the audio sample format. Use -sample_fmts to get a list of supported sample formats.

    -af filtergraph (output)

Create the filtergraph specified by filtergraph and use it to filter the stream.

This is an alias for -filter:a, see the -filter option.

## 5.8 Advanced Audio options

    -atag fourcc/tag (output)

Force audio tag/fourcc. This is an alias for -tag:a.

    -absf bitstream_filter

Deprecated, see -bsf

    -guess_layout_max channels (input,per-stream)

If some input channel layout is not known, try to guess only if it corresponds to at most the specified number of channels. For example, 2 tells to ffmpeg to recognize 1 channel as mono and 2 channels as stereo but not 6 channels as 5.1. The default is to always try to guess. Use 0 to disable all guessing.


# 6.3 Video and Audio file format conversion
http://ffmpeg.org/ffmpeg.html#Video-and-Audio-file-format-conversion

FFMPEG 命令行参数：

    Hyper fast Audio and Video encoder
    usage: ffmpeg [options] [[infile options] -i infile]... {[outfile options] outfile}...

    Getting help:
        -h      -- print basic options
        -h long -- print more options
        -h full -- print all options (including all format and codec specific options, very long)
        -h type=name -- print all options for the named decoder/encoder/demuxer/muxer/filter/bsf
        See man ffmpeg for detailed description of the options.

    Print help / information / capabilities:
    -L                  show license
    -h topic            show help
    -? topic            show help
    -help topic         show help
    --help topic        show help
    -version            show version
    -buildconf          show build configuration
    -formats            show available formats
    -muxers             show available muxers
    -demuxers           show available demuxers
    -devices            show available devices
    -codecs             show available codecs
    -decoders           show available decoders
    -encoders           show available encoders
    -bsfs               show available bit stream filters
    -protocols          show available protocols
    -filters            show available filters
    -pix_fmts           show available pixel formats
    -layouts            show standard channel layouts
    -sample_fmts        show available audio sample formats
    -colors             show available color names
    -sources device     list sources of the input device
    -sinks device       list sinks of the output device
    -hwaccels           show available HW acceleration methods

    Global options (affect whole program instead of just one file:
    -loglevel loglevel  set logging level
    -v loglevel         set logging level
    -report             generate a report
    -max_alloc bytes    set maximum size of a single allocated block
    -y                  overwrite output files
    -n                  never overwrite output files
    -ignore_unknown     Ignore unknown stream types
    -filter_threads     number of non-complex filter threads
    -filter_complex_threads  number of threads for -filter_complex
    -stats              print progress report during encoding
    -max_error_rate maximum error rate  ratio of errors (0.0: no errors, 1.0: 100% errors) above which ffmpeg returns an error instead of success.
    -bits_per_raw_sample number  set the number of bits per raw sample
    -vol volume         change audio volume (256=normal)

    Per-file main options:
    -f fmt              force format
    -c codec            codec name
    -codec codec        codec name
    -pre preset         preset name
    -map_metadata outfile[,metadata]:infile[,metadata]  set metadata information of outfile from infile
    -t duration         record or transcode "duration" seconds of audio/video
    -to time_stop       record or transcode stop time
    -fs limit_size      set the limit file size in bytes
    -ss time_off        set the start time offset
    -sseof time_off     set the start time offset relative to EOF
    -seek_timestamp     enable/disable seeking by timestamp with -ss
    -timestamp time     set the recording timestamp ('now' to set the current time)
    -metadata string=string  add metadata
    -program title=string:st=number...  add program with specified streams
    -target type        specify target file type ("vcd", "svcd", "dvd", "dv" or "dv50" with optional prefixes "pal-", "ntsc-" or "film-")
    -apad               audio pad
    -frames number      set the number of frames to output
    -filter filter_graph  set stream filtergraph
    -filter_script filename  read stream filtergraph description from a file
    -reinit_filter      reinit filtergraph on input parameter changes
    -discard            discard
    -disposition        disposition

    Video options:
    -vframes number     set the number of video frames to output
    -r rate             set frame rate (Hz value, fraction or abbreviation)
    -s size             set frame size (WxH or abbreviation)
    -aspect aspect      set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)
    -bits_per_raw_sample number  set the number of bits per raw sample
    -vn                 disable video
    -vcodec codec       force video codec ('copy' to copy stream)
    -timecode hh:mm:ss[:;.]ff  set initial TimeCode value.
    -pass n             select the pass number (1 to 3)
    -vf filter_graph    set video filters
    -ab bitrate         audio bitrate (please use -b:a)
    -b bitrate          video bitrate (please use -b:v)
    -dn                 disable data

    Audio options:
    -aframes number     set the number of audio frames to output
    -aq quality         set audio quality (codec-specific)
    -ar rate            set audio sampling rate (in Hz)
    -ac channels        set number of audio channels
    -an                 disable audio
    -acodec codec       force audio codec ('copy' to copy stream)
    -vol volume         change audio volume (256=normal)
    -af filter_graph    set audio filters

    Subtitle options:
    -s size             set frame size (WxH or abbreviation)
    -sn                 disable subtitle
    -scodec codec       force subtitle codec ('copy' to copy stream)
    -stag fourcc/tag    force subtitle tag/fourcc
    -fix_sub_duration   fix subtitles duration
    -canvas_size size   set canvas size (WxH or abbreviation)
    -spre preset        set the subtitle options to the indicated preset


## For extracting images from a video

    ffmpeg -i landscape.mp4 -r 1 -s WxH -f image2 foo-%03d.jpeg

    ffmpeg -i landscape.mp4 -r 1 -s 320x220 -f image2 frame-%03d.jpeg
    ffmpeg -i landscape.mp4 -r 1 -s 320x220 -vframes 1 -f image2 preview.jpeg
    ffmpeg -i landscape.mp4 -r 24 -s 320x220 -ss 02 -vframes 1 -f image2 preview.jpeg

## For creating a video from many images:

    ffmpeg -f image2 -framerate 12 -i foo-%03d.jpeg -s WxH foo.avi

## You can also do audio and video conversions at the same time:
    
    ffmpeg -i /tmp/a.wav -ar 22050 /tmp/a.mp2
    ffmpeg -i 当年情4k.m4a -ar 44100 当年情4k.mp3
    ffmpeg.exe -i voices/0.wav -ar 8000 voices/0/0.wav

    ffmpeg -i file.wav -f s16le -acodec pcm_s16le file.pcm
    ffmpeg -f s16le -ar 8000 -ac 2 -i out.pcm -ar 44100 -ac 2 out.wav


## RAW data format

-f u8 is unsigned 8 bit, s16 is signed just in case there are others

 $ ffmpeg -formats | grep PCM
 DE alaw            PCM A-law
 DE f32be           PCM 32-bit floating-point big-endian
 DE f32le           PCM 32-bit floating-point little-endian
 DE f64be           PCM 64-bit floating-point big-endian
 DE f64le           PCM 64-bit floating-point little-endian
 DE mulaw           PCM mu-law
 DE s16be           PCM signed 16-bit big-endian
 DE s16le           PCM signed 16-bit little-endian
 DE s24be           PCM signed 24-bit big-endian
 DE s24le           PCM signed 24-bit little-endian
 DE s32be           PCM signed 32-bit big-endian
 DE s32le           PCM signed 32-bit little-endian
 DE s8              PCM signed 8-bit
 DE u16be           PCM unsigned 16-bit big-endian
 DE u16le           PCM unsigned 16-bit little-endian
 DE u24be           PCM unsigned 24-bit big-endian
 DE u24le           PCM unsigned 24-bit little-endian
 DE u32be           PCM unsigned 32-bit big-endian
 DE u32le           PCM unsigned 32-bit little-endian
 DE u8              PCM unsigned 8-bit

Example to convert raw PCM to WAV:

    ffmpeg -f s16le -ar 44.1k -ac 2 -i file.pcm file.wav

    -f s16le … signed 16-bit little endian samples
    -ar 44.1k … sample rate 44.1kHz
    -ac 2 … 2 channels (stereo)
    -i file.pcm … input file
    file.wav … output file

转换 8-bit wave 格式：

    ffmpeg.exe -i ren voices\raw\0.mp3 -acodec pcm_u8 -ar 8000 voices/0/0.wav

把转换功能做bat脚本，拖动文件到bat上就可以转换mp3

    ffmpeg.exe -i %1 -ar 44100 %1.mp3

# FFmpeg MP3 Encoding Guide
https://trac.ffmpeg.org/wiki/Encode/MP3

This page describes how to use the external libmp3lame encoding library within ffmpeg to create MP3 audio files (ffmpeg has no native MP3 encoder). See also other codecs you could use, and FFmpeg AAC Encoding Guide if you want AAC instead, and the ​official documentation.

VBR Encoding
Example to encode VBR MP3 audio with ffmpeg using the libmp3lame library:

    ffmpeg -i input.wav -codec:a libmp3lame -qscale:a 2 output.mp3

Control quality with -qscale:a (or the alias -q:a). Values are encoder specific, so for libmp3lame the range is 0-9 where a lower value is a higher quality. 0-3 will normally produce transparent results, 4 (default) should be close to perceptual transparency, and 6 produces an "acceptable" quality. The option -qscale:a is mapped to the -V option in the standalone lame command-line interface tool.

LAME Bitrate Overview

    lame option Average kbit/s  Bitrate range kbit/s    ffmpeg option
    -b 320      320 320 CBR (non VBR) example   -b:a 320k (NB this is 32KB/s, or its max)
    -V 0        245 220-260 -q:a 0 (NB this is VBR from 22 to 26 KB/s)
    -V 1        225 190-250 -q:a 1
    -V 2        190 170-210 -q:a 2
    -V 3        175 150-195 -q:a 3
    -V 4        165 140-185 -q:a 4
    -V 5        130 120-150 -q:a 5
    -V 6        115 100-130 -q:a 6
    -V 7        100 80-120  -q:a 7
    -V 8        85  70-105  -q:a 8
    -V 9        65  45-85   -q:a 9

In our example above, we selected -qscale:a 2, meaning we used LAME's option -V 2, which gives us a VBR MP3 audio stream with an average stereo bitrate of 170-210 kBit/s.

CBR Encoding
If you need constant bitrate (CBR) MP3 audio, you need to use the -b:a option instead of -qscale:a. Here you can specify the number of bits per second, for example -b:a 256k if you want 256 Kbit/s (25.6 KB/s) audio. Available options are: 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128, 160, 192, 224, 256, or 320 (add a k after each to get that rate). So to get the highest quality setting use -b:a 320k (but see note below).

Note: Using -b:a 320k is generally considered wasteful because:

-q:a 0 – -q:a 3 will normally produce transparent results.

MP3 is lossy anyway, so if you really want the highest quality use a lossless format such as FLAC.
See Hydrogen Audio: Recommended LAME Encoder Settings for more info.


# FFmpeg Filters

FFmpeg 的 libavfilter 提供了一整套的基于 filter 的机制。 比如下面的 filter，可以实现视频的水平镜像效果。

    ffplay.exe sample.rmvb -vf hflip

filter 分类：

- source filter  只有输出
- audio filter
- video filter
- Multimedia filter
- sink filter  只有输入

除了 source 和 sink filter，其他都至少有一个输入、至少一个输出。

例如，使用 filter 实现宽高减半显示：

    ffplay.exe sample.rmvb -vf scale=iw/2:ih/2

可以用 ffmpeg -filters 命令查看支持离列表：

    ffmpeg version 3.1 Copyright (c) 2000-2016 the FFmpeg developers
      built with Apple LLVM version 7.0.2 (clang-700.1.81)
      configuration: --prefix=/usr/local/Cellar/ffmpeg/3.1 --enable-shared --enable-pthreads --enable-gpl --enable-version3 --enable-hardcoded-tables --enable-avresample --cc=clang --host-cflags= --host-ldflags= --enable-opencl --enable-libx264 --enable-libmp3lame --enable-libxvid --enable-librtmp --enable-libfaac --enable-ffplay --disable-lzma --enable-nonfree --enable-vda
      libavutil      55. 27.100 / 55. 27.100
      libavcodec     57. 48.101 / 57. 48.101
      libavformat    57. 40.101 / 57. 40.101
      libavdevice    57.  0.101 / 57.  0.101
      libavfilter     6. 46.102 /  6. 46.102
      libavresample   3.  0.  0 /  3.  0.  0
      libswscale      4.  1.100 /  4.  1.100
      libswresample   2.  1.100 /  2.  1.100
      libpostproc    54.  0.100 / 54.  0.100
    Filters:
      T.. = Timeline support
      .S. = Slice threading
      ..C = Command support
      A = Audio input/output
      V = Video input/output
      N = Dynamic number and/or type of input/output
      | = Source or sink filter
     ... abench            A->A       Benchmark part of a filtergraph.
     ...
     ... aresample         A->A       Resample audio data.
     ...
     ... copy              V->V       Copy the input video unchanged to the output.
     ...
     T.. delogo            V->V       Remove logo from input video.
     ...
     ... format            V->V       Convert the input video to one of the specified pixel formats.
     ... fps               V->V       Force constant framerate.
     ...
     ... reverse           V->V       Reverse a clip.
     TSC rotate            V->V       Rotate the input image.
     T.. sab               V->V       Apply shape adaptive blur.
     ..C scale             V->V       Scale the input video size and/or convert the image format.
     ...
     ... split             V->N       Pass on the input to N video outputs.
     ...

## 8.26 audio mix
- http://ffmpeg.org/ffmpeg-filters.html#amix

Mixes multiple audio inputs into a single output.

Note that this filter only supports float samples (the amerge and pan audio filters support many formats). If the amix input has integer samples then aresample will be automatically inserted to perform the conversion to float samples.

For example

    ffmpeg -i INPUT1 -i INPUT2 -i INPUT3 -filter_complex amix=inputs=3:duration=first:dropout_transition=3 OUTPUT

will mix 3 input audio streams to a single output with the same duration as the first input and a dropout transition time of 3 seconds.

It accepts the following parameters:

|        参数        |                     说明                     |
|--------------------|----------------------------------------------|
| inputs             | 输入数量，默认 2                             |
| duration           | 结束时长参考的流对象                         |
| longest            | The duration of the longest input. (default) |
| shortest           | The duration of the shortest input.          |
| first              | The duration of the first input.             |
| dropout_transition | 流输入结束的转换时间，默认 2 秒              |
| weights            | 指定输入的权重，以空格隔开，默认权重相同     |

把当前电脑播放的声音混合到文件中的例子：

    ## 在 Win 下获取音频设备名
    ffmpeg -f dshow -list_devices 1 -i dummy

    ffmpeg.exe -re -i out.mp3 -f dshow -i audio="立体声混音 (Realtek High Definition Audio(SST))" -filter_complex amix=inputs=2:duration=first:dropout_transition=0 -t 10 mix.mp4 -y


## 缩放 scale


将输入 1920x1080 缩小到 960x540 输出:

    ./ffmpeg -i input.mp4 -vf scale=960:540 output.mp4 

PS: 如果 540 不写，写成 -1，即 scale=960:-1, 那也是可以的，ffmpeg 会通知缩放滤镜在输出时保持原始的宽高比。

## resise a video

    ffmpeg -i driver-fire.mkv -s 720x1080 fire.mp4


## crop and watermark

过滤器 crop 参数格式为 w:h:x:y，w、h为输出视频的宽和高， x、y 标记输入视频中的某点，将该点作为基准点，向右下进行裁剪得到输出视频。如果 x、y 不写的话，默认居中剪切。

    ffmpeg -i a.mp4 -vf crop=400:400 b.mp4 -y
    ffmpeg -i a.mp4 -vf crop=400:400:0:0 b.mp4 -y
    ffmpeg -i %04d.png -vf crop=720:720 0_%d.png -y

对图片也一样处理，可以使用文件序列模板 pattern 批量裁剪图片，ImageMagick 也利用 FFMPEG 做图片处理。

Image2 接收图像文件序列，使用 "%d" or "%0Nd" 表达，后者是带前导 0 的表达，N 指定数字位数。要使用 % 符号本身，就传入 "%%"。

使用 "%d" or "%0Nd" 注意，文件名的序列数字要连续，取值于 start_number 到 start_number+start_number_range-1 之间，默认的 start_number_range 是 5。

比如：

- `img-%03d.bmp` 这个模板表示 img-001.bmp, img-002.bmp, ..., img-010.bmp 这样的文件名；
- `i%%m%%g-%d.jpg` 表示 i%m%g-1.jpg, i%m%g-2.jpg, ..., i%m%g-10.jpg 这样的文件名；

如果 libavformat 启用 globbing 支持，可以使用 `%*?[]{}`，转义时使用前导 % 符号。

列如：

- `foo-%*.jpeg` 匹配 foo- 开头的 .jpeg 文件； 
- `foo-%?%?%?.jpeg` 匹配 foo- 开头并跟着 3 个字符的 .jpeg 文件；


为视频加水印

    ffmpeg -i IN.mp4 -i WATERMARK.png -filter_complex "overlay=main_w-overlay_w-10:main_h-overlay_h-10" OUT.mp4

问题是，如果有一个框架，水印的一部分在框架上，只有一部分在实际内容上。想将水印放在实际内容的右下角。

a，动态检测黑色框架并相应地调整水印位置。
b，剪裁黑色框架并在同一步骤中正确嵌入内容。

1，我可以得到裁剪的大小

    ffmpeg -i INPUT.mp4 -t 2 -vf cropdetect -f null - 2>&1 | awk '/crop/ { print $NF }' | tail -1

2，然后裁剪视频

    ffmpeg -i INPUT.mp4 -filter:v "crop=352:480:144:0" -c:a copy OUTPUT.mp4

3，水印

    ffmpeg -i INPUT VIDEO.mp4 -i INPUT IMAGE.png -filter_complex "overlay=main_w-overlay_w-10:main_h-overlay_h-10" OUTPUT VIDEO.mp4

## 裁剪 crop

    ffmpeg.exe -i driver-fire.mkv -vf crop=720:1080:0:0 fire.mp4

Crop the input video to given dimensions.
It accepts the following parameters:

    w, out_w

The width of the output video. It defaults to iw.
This expression is evaluated only once during the filter configuration, or when the ‘w’ or ‘out_w’ command is sent.

    h, out_h

The height of the output video. It defaults to ih.
This expression is evaluated only once during the filter configuration, or when the ‘h’ or ‘out_h’ command is sent.

    x

The horizontal position, in the input video, of the left edge of the output video.
It defaults to (in_w-out_w)/2.
This expression is evaluated per-frame.

    y

The vertical position, in the input video, of the top edge of the output video.
It defaults to (in_h-out_h)/2.
This expression is evaluated per-frame.

Crop area with size 100x100 at position (12,34).

    crop=100:100:12:34

Using named options, the example above becomes:

    crop=w=100:h=100:x=12:y=34

References:

http://www.ffmpeg.org/ffmpeg-filters.html#crop


## fast & slow 视频加速减速

减速播放，延长 3 倍播放时间，或者加速度播放，减少为 1/2 播放时间：

    ffmpeg -i .\oktou.mp4  -filter:v "setpts=3*PTS" slow.mp4
    ffmpeg -i .\oktou.mp4  -filter:v "setpts=0.5*PTS" fast.mp4

    ffmpeg -i in.mp4 -af "atempo=2.0,atempo=2.0" 4time_fast.mp4

    ffmpeg -i 1.mp4 -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2.0[a]" -map "[v]" -map "[a]" fast.mp4

最后一条使用更复杂的滤镜，可以同时加速视频和音频。

音频加速 "atempo" 滤镜对音频速度调整限制在 0.5 到 2.0 之间，即半速或倍速。


# ffmpeg 视频转 ts 切片 生成m3u8视频播放列表
近期做视频点播，要求将视频文件切片成ts文件。经搜索得到以下两个命令，可完成这个任务。

一  首先将视频文件转为视频编码h264,音频编码aac格式的mp4文件
可以预先使用ffprobe查看文件编码方式      

    ffprobe input.mkv

如果得到音视频编码为h264/aac则执行

    ffmpeg -i input.mkv -acodec copy -vcodec copy out.mp4
    ffmpeg -i input.mkv -acodec libfaac -vcodec libx264 out.mp4

二  将mp4文件转为ts文件并生成m3u8

    ffmpeg -i out.mp4 -c copy -bsf h264_mp4toannexb output.ts
    ffmpeg -i output.ts -c copy -map 0 -f segment -segment_list playlist.m3u8 -segment_time 10 output%03d.ts

C:\download\ffmpeg\ffmpeg.exe -i "ZARD Crusing&Live(Long Version).mkv" -acodec copy -vcodec copy out.mp4


## BiliBili 缓存视频转换

B 站缓存文件在 /Android/data/tv.danmaku.bili。视频和音频独立文件保存，扩展名是 m4s，可以直接使用 FFMPEG 进行合并：

    ffmpeg -i video.m4s -i audio.m4s -c:v copy -strict experimental out.m4s
    ffmpeg -i video.m4s -i audio.m4s -r 25 -b:v 539k out.mp4
    ffmpeg -i "video (1).m4s" -i "audio (1).m4s" -r 25 -b:v 500k 站不起来的蒙蒙.mp4

格式编码参考信息，注意源视频的帧率和码率，指定 -b:v 输出视频码率可以避免将低码率转换为高码率视频：

    Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'video.m4s':
      Metadata:
        major_brand     : iso5
        minor_version   : 1
        compatible_brands: iso5dsmsmsixdash
        encoder         : Lavf57.71.100
        description     : Packed by Bilibili XCoder v2.0.2
      Duration: 00:05:49.56, start: 0.000000, bitrate: 539 kb/s
        Stream #0:0(und): Video: hevc (Main) (hev1 / 0x31766568), yuv420p(tv, bt709), 1920x1080 [SAR 1:1 DAR 16:9], 5 kb/s, 25 fps, 25 tbr, 16k tbn, 25 tbc (default)
        Metadata:
          handler_name    : VideoHandler
