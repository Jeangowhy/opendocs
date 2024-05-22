# 🚩 F-Droid 镜像使用帮助
+ https://wiki.termux.com/wiki/Main_Page
+ https://f-droid.org/packages/com.termux/

用 F-Droid 客户端打开此链接：

https://mirrors.tuna.tsinghua.edu.cn/fdroid/repo/?fingerprint=43238D512C1E5EB2D6569F4A3AFBF5523418B82E0A3ED1552770ABB9A9C9CCAB

或复制此链接后在客户端中添加存储库，可以将此镜像添加为用户镜像。

如果需要添加 Archive 库，可以使用如下链接：

https://mirrors.tuna.tsinghua.edu.cn/fdroid/archive?fingerprint=43238D512C1E5EB2D6569F4A3AFBF5523418B82E0A3ED1552770ABB9A9C9CCAB

Termux
带有软件包的终端模拟器
Termux combines powerful terminal emulation with an extensive Linux package
collection.

* Enjoy the bash and zsh shells.
* Edit files with nano and vim.
* Access servers over ssh.
* Compile code with gcc and clang.
* Use the python console as a pocket calculator.
* Check out projects with git and subversion.
* Run text-based games with frotz.

At first start a small base system is downloaded - desired packages can then be
installed using the apt package manager known from the Debian and Ubuntu Linux
distributions. Access the built-in help by long-pressing anywhere on the
terminal and selecting the Help menu option to learn more.

Read help online: https://wiki.termux.com/

Reddit Community: https://termux.com/community

安装 termux 和 droidvim 后，可以查看它们两者使用的账户各不相同，彼此也没有权限
访问对方目录，一个解决方法是使用 sdcard 存储区域来实现多 app 之间的文件共享。

```sh
 ~ $ git
The program git is not installed. Install it by executing:
 pkg install git
 ~ $ pkg install git
 Testing the available mirrors:
 [*] https://packages-cf.termux.org/apt/termux-main: bad
 [*] https://deb.kcubeterm.me/termux-main: bad
 [*] https://termux.mentality.rip/termux-main: bad
 [*] https://grimler.se/termux-packages-24: ok
```

Android M 版本后, 通过SELinux 的 neverallow 语法强制性限制了普通进程访问data 
目录的权限. 严禁除init system_server installd system_app 之外的其他进程直接操作
/data 目录，比如创建文件，写文件，重命名文件等等这些操作会被 SELinux 直接拦截。
并且没法直接添加访问 system_data_file 的权限，N 版本上更加严格, system_app 也会
被拦截下来。



# 🚩 Kiosk mode in Android
[Set up Single-Purpose Devices Page](https://developer.android.com/work/cosu.html)

展台模式，全屏独占运行程序。

Is it possible on Android to have only one application autostart after booting and prevent users from accidentally (or willingly) access any other parts of the Android device?

    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --chrome-frame -kiosk  http://localhost
    "C:\Program Files\Internet Explorer\iexplore.exe" -k http://localhost

    # VB
    System.Diagnostics.Process.Start("iexplore", "-k " & "http://www.google.co.uk")

    # https://docs.microsoft.com/zh-cn/microsoft-edge/deploy/microsoft-edge-kiosk-mode-deploy

先写个开机启动，然后开机启动事件 `Intent.ACTION_BOOT_COMPLETED` 中使用火狐打开链接

    try {
        Intent intent = new Intent();
        intent.setAction("android.intent.action.VIEW");
        Uri content_url = Uri.parse("链接地址");
        // Intent intent = new Intent(Intent.ACTION_VIEW,content_url);
        intent.setData(content_url);
        intent.setClassName("org.mozilla.firefox", "org.mozilla.gecko.BrowserApp");
        // intent.setClassName("com.UCMobile","com.uc.browser.InnerUCMobile");//打开UC浏览器
        // intent.setClassName("com.tencent.mtt","com.tencent.mtt.MainActivity");//打开QQ浏览器
        startActivity(intent);
    }catch (Exception ex){
        ex.printStackTrace();
    }


使用 Intent-Filter

    <activity ...
      android:launchMode="singleInstance"
      android:windowActionBar="false">
        <intent-filter>
          <action android:name="android.intent.action.MAIN" />
          <category android:name="android.intent.category.HOME" />
          <category android:name="android.intent.category.DEFAULT" />
        </intent-filter>
    </activity>

Android开发：APP自启动的实现

Android的自启动类似于Windows的开机启动，允许开发者让自己的APP在开机的时候做一些操作，如启动一个后台的Service、发送一条通知甚至是启动一个Activity界面等。

1、写一个广播类

    public class BootReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            //标准的写法是需要判别Action的类型的
            if (intent.getAction().equals(Intent.ACTION_BOOT_COMPLETED)){
                //你想执行的操作
            }
        }
    }

2、添加Manifest配置

配置广播监听器 (如果不是AndroidStudio的话，你可能需要把name改成BootReceiver的完整路径):

    <receiver
      android:name=".BootReceiver" 
      android:enabled="true">
        <intent-filter>
          <action 
            android:name="android.intent.action.BOOT_COMPLETED"/>
        </intent-filter>
    </receiver>

添加权限:

    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>

经过以上配置，你的APP已经可以在开机时执行你的自定义操作了，但是在一些国产系统上，会有自带的安全管理软件对开机启动进行管理，如果安全管理软件内屏蔽了APP的自启动，那么你的APP仍然无法自动启动。另外，在开机时发送通知和启动Activity是一件非常影响用户体验的是事，需要谨慎考虑。

3、其他相关系统广播
有开机广播，自然也有关机广播和重启广播

关机广播（没有权限）

    <action android:name="android.intent.action.ACTION_SHUTDOWN"/>

** 重启广播**
重启时也会先发送ACTION_SHUTDOWN广播

    <action android:name="android.intent.action.REBOOT"/>

重启完成权限（需要监听重启完成的权限）

    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>


# 🚩 Android Studio
- Install Android Studio https://developer.android.google.cn/studio/install
- Android Studio https://developer.android.google.cn/studio/intro
- Android developer guides https://developer.android.google.cn/guide
- Android 12 Developer Preview https://developer.android.google.cn/about/versions/12
- App resources overview https://developer.android.google.cn/guide/topics/resources/providing-resources
- [Dart DevTools & Flutter]: https://flutter.github.io/devtools/vscode
- 配置构建 https://developer.android.google.cn/studio/build?hl=zh-cn

Android Studio 是官方提供最好的集成开发工具，基于 IntelliJ IDEA 实现。

提供以下功能：

- A flexible Gradle-based build system
- A fast and feature-rich emulator
- A unified environment where you can develop for all Android devices
- Apply Changes to push code and resource changes to your running app without restarting your app
- Code templates and GitHub integration to help you build common app features and import sample code
- Extensive testing tools and frameworks
- Lint tools to catch performance, usability, version compatibility, and other problems
- C++ and NDK support
- Built-in support for Google Cloud Platform, making it easy to integrate Google Cloud Messaging and App Engine


使用 Android Studio 开发，退出时会将以上设置的 WiFi 连接设备断开，导致每次都要重新连接设备。可以安装 adb wifi 插件解决，file -> settings -> plugins -> Browse repositories 搜索框输入 ADB WIFI 找到插件，安装。或者直接下载 android-wifi-adb 插件，然后解压到 Android Studio 安装目录的 plugins 目录下。

在 Tools –> WiFiADB 菜单打开插件界面操作，不过在退出时，还是会导致 adb 检测不到设备。

启动提示插件不兼容：

    Plugin Error: Plugin"xxxxxx"is incompatible(supported only in Intell IDEA)

你会发现在设置界面中，plugins 列表已经看不到提示不兼容的插件，也无法卸载，天大的 Bug。需要手动删除文件解决，找到插件位置：

    C:\Users\{user}\AppData\Roaming\Google\AndroidStudio4.1\plugins


## Android Studio 快捷键

1 `Ctrl + B` 跳入/跳出方法或者资源文件。将鼠标光标定位到某个方法或者资源id的调用处，按Ctrl + B，将会跳入该方法或者资源文件内部，功能等同于Ctrl + 鼠标左键。如果将鼠标光标定位到方法定义处或者资源文件内部，按Ctrl + B将会返回调用处。
2 `Ctrl + O` 查看父类中的方法， 并可以选择父类方法进行覆盖。将鼠标光标定位到类中代码的任意位置，按Ctrl + O，将会在打开的面板中查看到所有父类中的所有非私有方法，选择某个方法按Enter即可覆盖父类方法。
3 `Ctrl + K` SVN提交代码。
4 `Ctrl + T` SVN更新代码。
5 `Ctrl + H` 查看类的上下继承关系。将鼠标光标定位在类中的任何一个位置，然后按Ctrl + H，将会打开一个面板，在这个面板中会依照层级显示出当前类的所有父类和子类。
6 `Ctrl + W` 选中代码块。多次按Ctrl + W将逐步扩大选择范围。
7 `Ctrl + E` 显示最近打开的文件，可以快速再次打开这些文件。
8 `Ctrl + U` 快速跳转至父类，或者快速跳转到父类中的某个方法。将鼠标光标定位到类名上，按Ctrl +U，将会打开当前类的父类，如果当前类有多个父类，则会提示要打开的父类。如果一个类中的方法覆盖了其父类的方法，那么将鼠标光标定位到子类的方法，按Ctrl + U，将会跳转到被覆盖的父类方法中。
9 `Ctrl + G` 显示鼠标光标当前位置在代码文件中的行/列数。可以理解为光标在代码中的横纵坐标。
10 `Ctrl + F12` 查看类中的所有变量、方法、内部类、内部接口。将鼠标光标定位到当前类文件的任意位置，按Ctrl + F12会弹出显示类中所有变量、方法、内部类、内部接口的对话框，然后按↑↓键可以选择某个变量、方法、内部类、内部接口，接着按Enter可以快速定位到该变量、方法、内部类、内部接口。
11 `Ctrl + F11` 添加书签。在鼠标光标位置所在行添加书签。如果文件中的代码特别多，那么书签将是一个非常实用的功能，它可以帮助我们标记代码中的重要位置，方便我们下次快速定位到这些重要位置。
12 `Shift + F11` 查看书签。可以快速查看之前标记的书签。
13 `Ctrl + Shift + F12` 快速调整代码编辑窗口的大小。
14 `Ctrl + ↑↓` 固定光标上下移动代码。
15 `Alt + ↑↓` 在内部接口、内部类和方法之间跳转。
16 `Ctrl + Shift + Backspace` 回到上一次编辑的位置。
17 `Alt + 数字` 打开相应数字的面板。如终端控制台面板对应的数字是6，那么按Alt + 6可以快速展开或关闭控制台面板。
18 `Ctrl + Shift + I` 快速查看某个方法、类、接口的内容。将鼠标光标定位到某个方法、类名、接口名，然后按Ctrl + Shift + I，将会在当前光标位置显示改方法、类、接口的内容。
19. `Shift + Esc` 关闭当前打开的面板。
20. `Alt + J` 选择多个相同名字的关键字、方法、类、接口，然后同时更改。
21. `Ctrl + Tab` 切换面板或文件，功能类似Windows下的Alt + Tab。在切换面板/文件的对话框中，选中某个面板或文件，接着按Backspace即可关闭改面板或文件。
22. `trl + Shift + Enter` 快速补全语句。如if() {}、switch(){}代码块，只要输入if或者switch（甚至sw），接着按Ctrl + Shift + Enter可以快速完形代码块。
23. `Ctrl + Alt + M` 快速抽取方法。选中代码块，然后按Ctrl + Alt + M可以快速将选中的代码块抽取为一个方法。
24. `Ctrl + Alt + T` 快速包裹代码块。选中一段代码，然后按Ctrl + Alt + T，可以选择要对选中代码块进行的操作，如：if / else、do / while、try / catch / finally等。
25. `Ctrl  + Alt + L` 代码格式化。
26. `Ctrl + N` 快速查找类。按下Ctrl + N会弹出输入类名的对话框，在对话框的搜索框中输入要查找的类名，即可开始进行模糊检索，这样可以快速找到需要查找的类，这在类文件非常多的工程里面特别实用。
27. `Ctrl + Shift + N` 快速查找文件。功能和Ctrl + N类似，但是除了可以搜索类文件之外，还可以搜索当前工程下的所有文件，这同样是一个经常用到的特别实用的功能。
28. `Double Shift` 全局搜索。功能和Ctrl + N、Ctrl + Shift + N类似，但是搜索的范围更广，支持符号检索，除了Ctrl + N、Ctrl + Shift + N的检索内容外，还可以搜索到变量、资源id等。
29. `Ctrl + Alt + Space` 类名或接口名提示。输入一个不完整的类名或者接口名，按Ctrl + Alt + Space，会给出完整类名或接口名的提示。
30. `Ctrl  + Q` 显示注释文档。将鼠标光标定位到某个类名、接口名或者方法名，按Ctrl + Q，会显示出该类、接口、方法的注释。
31. `Ctrl + PageUp/PageDown` 将光标定位到当前文件的第一行/最后一行。
32. `Shift + Left Click`（当前文件的选项卡） 关闭当前文件。
33. `Ctrl + Alt + B` 跳转到抽象方法的实现。将鼠标光标定位到某个抽象方法，然后按Ctrl + Alt + B，会快速跳转到该抽象方法的具体实现处，如果该抽象方法有多个具体实现，那么会弹出选择框进行选择。
34. `Ctrl + Shift + U` 快速进行大小写转换。
35. `Ctrl + Shift + Alt + S` 打开Project Structure面板。
36. `Ctrl + F` 在当前文件中搜索输入的内容。
37. `Ctrl + R` 在当前文件中替换输入的内容。
38. `Ctrl + Shift + F` 全局搜索。
39. `Ctrl + Shift + R` 全局替换。
40. `Shift + F6` 快速重命名。选中某个类、变量、资源id等之后，可以快速重命名，只要改动一个位置，其它地方也都会自动全部重命名。
41. `Alt + F7` 快速查找某个类、方法、变量、资源id被调用的地方。
42. `Ctrl +Shift + Alt + I` 对项目进行审查，会弹出搜索审查项的输入框，输入关键字可以检索需要审查的内容，例如输入unused resource即可搜索项目中没有使用到的资源文件。此外，在菜单栏选择Analyze—Inspect Code或者鼠标右键点击当前工程— 　Analyze—Inspect Code，可以对项目进行Lint审查。
43. `Ctrl + D` 快速复制行。
44. `Ctrl + Shift + ↑↓` 上下移动代码。如果是方法中的代码，只能在方法内部一定，不能跨方法。
45. `Shift + Alt + ↑↓` 上下移动代码。可以跨方法移动。
46. `Shift + F10` 启动Module。
47. `Shift + F9` 调试Module。
48. `Ctrl + F9` Make Project。
49. `Alt + Insert` 快速插入代码。可以快速生成构造方法、Getter/Setter方法等。
50. `Alt + Enter` 快速修复错误。


# 🚩 Android 系统

## Recovery 模式
- Recovery、ROOT、WIPE、Bootloader https://bbs.360.cn/forum.php?mod=viewthread&tid=213116&archive_src=bbs_safe
- 解锁小米手机 http://www.miui.com/unlock/index.html

Android 系统基于 Linux 开发，设备本身就可以看作一台运行 Linux 系统的 PC。

也有引导程序 Bootloader，而 Fastboot 和 Recovery 模式是引导过程中的特殊模式，相当于一个小形子系统，需要的资源更少，分别用于底层的操作和恢复操作。

不过，由于 Android 操作系统的开源特性，各厂商的对自家的 Android 设备都有着各自定制的 Fastboot/Bootlader 模式，通常会锁定这些功能以提高安全性，开发者可以向设备官方申请 BootLoader 解锁。

也有第三方的 Recovery 系统，如 TWRP - Team Win Recovery Project 是一款易于使用和可以自定义的 Recovery。由 AOSP - Android Open Source Project 的 Recovery 和加载它与标准的 Recovery 选项，然后加入了很多定制的功能。是一个全触摸驱动的用户界面，设备可以没有音量键或电源按钮。图形用户界面的可以完全由 XML 和主题图片控制的，可以改变几乎每一个外观。

标准 Recovery 模式提供的功能： 

- Reboot system now - 重启
- Backup/Restore    - 备份和还原，可以完整的将系统备份至 SD 卡中。
    - Nand backup - Nand 备份
    - Nand + ext backup   - Nand 备份（系统和ext 分区一同备份）
    - Nand restore    - 还原（就是还原的最后一次备份）
    - BART backup - BART 备份（包括系统和 ext 分区）
    - BART restore    - 还原最后一次的BART备份
- Flash zip from sdcard - 从 sd 卡根目录的 UPDATE.ZIP 刷入 ROM。
- Wipe  - 清除数据，清空个人数据。
    - Wipe data/factory reset - 清除内存数据和缓存数据
    - Wipe Dalvik-cache   - 清除缓存数据 + ext 分区内数据
    - Wipe SD：ext partition   - 只清除ext 分区内数据
    - Wipe battery stats  - 清除电池数据
    - Wipe rotate settings    - 清除传感器内设置的数据
- Partition sdcard  - 分区 sd 卡
    - Partition SD    - 自动为 sd 卡分区
    - Repair SD:ext   - 修复 ext 分区
    - SD:ext2 to ext3 - 将 ext2 分区转换为 ext3 分区（推荐）
    - SD:ext3 to ext4 - 将 ext3 分区转换为 ext4 分区（C4 卡不推荐，C6 卡推荐）

小米 8 进入 Recovery 模式，在手机关机的状态下同时按住音量 + 和开机键，手机会启动到 recovery 模式，这是定制的模式，可以连接小米助手。

解锁后的小米 8 进入 Recovery 模式可以在设置面板中操作：

- 打开设置选项。
- 我的设备选项。
- 点击 MIUI 版本。
- 点击屏幕右上方菜单，三个点图标。
- 选择重启的 Recovery 选项。



## Fastboot 模式
- Exploiting Qualcomm EDL Programmers: Gaining Access & PBL Internals https://alephsecurity.com/2018/01/22/qualcomm-edl-1/
- Xiaomi Zigbee (1): Getting to know the hardware https://alephsecurity.com/2019/07/01/xiaomi-zigbee-1/
- 解锁小米手机 http://www.miui.com/unlock/index.html
- 小米手机解锁 Bootloader 教程 https://www.xiaomi.cn/post/4378807

Fastboot 快速启动模式，也叫 Bootloader 模式，其中的操作比 Recovery 模式更加底层，即更加接近硬件层。

当你不能进入 Recovery 模式，那么就只可以尝试进入 Fastboot 模式，在更底层操作进行挽救，同时，Fastboot 比 Recovery 需要的启动资源更少。如果连 Fastboot 都不能进入的时候，那可真就是砖了。

小米 8 进入 Fastboot 模式，在关机状态下，同时按住【电源键】+【音量下】，几秒后，启动就进入 Fastboot 模式。

解锁后的设备，可以在 Bootloader 模式下刷第三方 ROM 包。解锁后的设备会在服务端永久性的标记为“已解锁”状态，但是我们仍然允许您再刷入官方 MIUI 后锁定。**需要使用 `fastboot oem lock` 进行重新锁定，警告，锁定命令会导致用户数据丢失！**切记一定要刷入 MIUI 非 ROOT 系统，否则会导致系统无法启动。

OPPO R11s 系列设备完全锁住这些子系统，可以进入高通 9008 串口模式，此模式下手机黑屏。完全关机下，同时按住音量 + - 两个键再连接电脑，电脑中会出现 Qualcomm HS-USB QDLoader 9008 串口设备，需要安装高通 QHSUSB_DLOAD 驱动才能识别。退出此模式，需要按按住音量 + - 和开机键，链接后，电脑显示 Android ADB Interface 设备。按住音量 - 和开机键，启动后保持音量 - 可以进入 ColorOS 恢复模式。

在 USB 调试许可状态下，可以使用 OEM 厂商提供的定制命令进入：

    $ adb reboot edl
    $ fastboot oem edl
    $ fastboot reboot emergency

Qualcomm H-USB QDLoader 9008 Mode 这种模式也称为急救下载模式 EDL - Emergency Download Mode。这是比 Fastboot 更底层的模式，如果说 Fastboot 还算是个小型系统，那么芯片急救模式只是提供了一个数据电路支持，需要高能芯片专用线刷工具，并且需要授权才能操作。

以下是 Qualcomm MSM 设备的简化启动过程：

    [Primary Bootloader (PBL)]
    |
    |
    `---EDL---.
    |          [Programmer (Firehose)]
    |          `- Commands (through USB)
    `---NORMAL BOOT---.
                      [Secondary Bootloader (SBL)]
                      |-. 
                      | [Android Bootloader (ABOOT)]
                      | `-.    
                      |   [boot.img]
                      |   |-- Linux Kernel
                      |   `-- initramfs
                      |       `-.
                      |         [system.img]
                      |
                      `-[TrustZone]


为了使用 Fastboot 功能，必须有 root 权限：

    $ fastboot help
    usage: fastboot [OPTION...] COMMAND...

    flashing:
     update ZIP                 Flash all partitions from an update.zip package.
     flashall                   Flash all partitions from $ANDROID_PRODUCT_OUT.
                                On A/B devices, flashed slot is set as active.
                                Secondary images may be flashed to inactive slot.
     flash PARTITION [FILENAME] Flash given partition, using the image from
                                $ANDROID_PRODUCT_OUT if no filename is given.

    basics:
     devices [-l]               List devices in bootloader (-l: with device paths).
     getvar NAME                Display given bootloader variable.
     reboot [bootloader]        Reboot device.

    locking/unlocking:
     flashing lock|unlock       Lock/unlock partitions for flashing
     flashing lock_critical|unlock_critical
                                Lock/unlock 'critical' bootloader partitions.
     flashing get_unlock_ability
                                Check whether unlocking is allowed (1) or not(0).

    advanced:
     erase PARTITION            Erase a flash partition.
     format[:FS_TYPE[:SIZE]] PARTITION
                                Format a flash partition.
     set_active SLOT            Set the active slot.
     oem [COMMAND...]           Execute OEM-specific command.
     gsi wipe|disable           Wipe or disable a GSI installation (fastbootd only).
     wipe-super [SUPER_EMPTY]   Wipe the super partition. This will reset it to
                                contain an empty set of default dynamic partitions.

    boot image:
     boot KERNEL [RAMDISK [SECOND]]
                                Download and boot kernel from RAM.
     flash:raw PARTITION KERNEL [RAMDISK [SECOND]]
                                Create boot image and flash it.
     --dtb DTB                  Specify path to DTB for boot image header version 2.
     --cmdline CMDLINE          Override kernel command line.
     --base ADDRESS             Set kernel base address (default: 0x10000000).
     --kernel-offset            Set kernel offset (default: 0x00008000).
     --ramdisk-offset           Set ramdisk offset (default: 0x01000000).
     --tags-offset              Set tags offset (default: 0x00000100).
     --dtb-offset               Set dtb offset (default: 0x01100000).
     --page-size BYTES          Set flash page size (default: 2048).
     --header-version VERSION   Set boot image header version.
     --os-version MAJOR[.MINOR[.PATCH]]
                                Set boot image OS version (default: 0.0.0).
     --os-patch-level YYYY-MM-DD
                                Set boot image OS security patch level.

    Android Things:
     stage IN_FILE              Sends given file to stage for the next command.
     get_staged OUT_FILE        Writes data staged by the last command to a file.

    options:
     -w                         Wipe userdata.
     -s SERIAL                  Specify a USB device.
     -s tcp|udp:HOST[:PORT]     Specify a network device.
     -S SIZE[K|M|G]             Break into sparse files no larger than SIZE.
     --force                    Force a flash operation that may be unsafe.
     --slot SLOT                Use SLOT; 'all' for both slots, 'other' for
                                non-current slot (default: current active slot).
     --set-active[=SLOT]        Sets the active slot before rebooting.
     --skip-secondary           Don't flash secondary slots in flashall/update.
     --skip-reboot              Don't reboot device after flashing.
     --disable-verity           Sets disable-verity when flashing vbmeta.
     --disable-verification     Sets disable-verification when flashing vbmeta.
     --unbuffered               Don't buffer input or output.
     --verbose, -v              Verbose output.
     --version                  Display version.
     --help, -h                 Show this message.

从 Fastboot 命令操作可以看到相关的底层操作：

- update 刷入设备官方提供的 update.zip 升级系统。
- getvar NAME 查询一个 bootloader 变量，如 getvar all。
- devices [-l] 列出所有与电脑连接的设备。
- reboot [bootloader] 重启动系统，或重启进入 bootloader。
- flashall 刷入 'flash boot' + 'flash system'。
- flash PARTITION [FILENAME] 将文件写入分区，如 system,recovery,boot,splash1,hboot,radio,userdata,cache
- erase PARTITION 清空一个分区。
- boot KERNEL [RAMDISK [SECOND]] 将电脑上的内核映像下载到手机并启动该内核。
- flash:raw PARTITION KERNEL [RAMDISK [SECOND]] 创建引导映像 boot.img 并刷入手机。

也可以使用 adb 命令进入 fastboot 或 recovery 模式：

    adb reboot bootloader
    adb reboot recovery

HTC 进入安卓手机的工程模式，也就是 HBOOT 模式，可以了解手机的各项基本信息参数。

    BRAVO PVT1 SHIP S-ON
    HBOOT-0.93.0001
    MICROP-031d
    RADIO-5.10.05.23
    Aug 10 2010,17:52:18

注：当然以上信息，可能会与你的手机内容所显示的并不相同，但不妨碍演示，大家只要了解它们所代表的内容便可以了。

    BRAVO：这个是手机型号的内部开发代号。
    PVT（或者是EVT，DVT，CVT）：是代表手机的版本类型。
    一台手机从研发到上市，可能会经历多次版本上的调试和改动，版本类型标志着机器是什么时候的产物，如下：
    EVT：工程机，研发阶段机器的型号；
    DVT：开发机，特殊开发用途机器的型号；
    CVT：商用机，交付运营商的机器的型号；
    PVT：量产机，最终上市的零售版机器的型号。（PVT1：第1批量产机）
    SHIP/ENG：手机 HBOOT（SPL）的版本。
    SHIP：shipment的缩写，出货的意思，零售版的HBOOT版本。
    ENG：Engineer的缩写，工程的意思，修改版的HBOOT版本。
    S-ON/S-OFF：安全锁 Security Lock 开关状态。

HTC 手机内部设置了一个安全锁，Security Lock，用来控制系统分区的读写状态。

选项 -w 用于清空用户数据分区和缓存分区，相当于 Recvery 模式中的 "wipe data/factory reset" 功能。

分区解释：

- system    - 系统分区，刷机一般就是刷映像到这个分区。
- userdata  - 数据分区。
- cache - 缓存分区。
- recovery  - 备份分区。
- boot  - 存放内核和 ramdisk 的分区。
- hboot - 这个是 SPL 所在的分区，也是 fastboot 所在的分区，刷错就真的变砖了。
- splash1   - 开机开机画面。
- radio - 这个是无线所在的分区。
- misc  - 其他分区，存放其它内容。


# 🚩 SDK Manager
- Install Android Studio https://developer.android.google.cn/studio/install

SDK Manager 查询已安装 SDK 信息：

    $ sdkmanager --list

    Installed packages:
      Path                                                | Version | Description                                     | Location
      -------                                             | ------- | -------                                         | -------
      build-tools;28.0.3                                  | 28.0.3  | Android SDK Build-Tools 28.0.3                  | build-tools\28.0.3\
      build-tools;29.0.2                                  | 29.0.2  | Android SDK Build-Tools 29.0.2                  | build-tools\29.0.2\
      emulator                                            | 29.3.0  | Android Emulator                                | emulator\
      extras;intel;Hardware_Accelerated_Execution_Manager | 7.6.5   | Intel x86 Emulator Accelerator (HAXM installer) | extras\intel\Hardware_Accelerated_Execution_Manager\
      patcher;v4                                          | 1       | SDK Patch Applier v4                            | patcher\v4\
      platform-tools                                      | 31.0.2  | Android SDK Platform-Tools 31.0.2               | platform-tools\
      platforms;android-28                                | 6       | Android SDK Platform 28, rev 6                  | platforms\android-28\
      sources;android-28                                  | 1       | Sources for Android 28                          | sources\android-28\
      sources;android-30                                  | 1       | Sources for Android 30                          | sources\android-30\
      system-images;android-28;google_apis;x86            | 10      | Google APIs Intel x86 Atom System Image         | system-images\android-28\google_apis\x86\
      tools                                               | 26.1.1  | Android SDK Tools 26.1.1                        | tools\

根据项目要求，会指定 Android SDK 版本，`targetsdkversion`，这个版本号是根据 API Level 划分的 SDK 版本，每一个 Level 都对应一个 Android 系统版本。`platforms` 包含是每个平台的 SDK 真正的文件，即开发出来的 App 将会运行在这里指定版本的平台之上。

项目开发时使用的 SDK 版本号为 `compilesdkversion`，项目可以设置一个目标版本号 `targetsdkversion` 用来确实期待运行在什么版本的 Android 系统上，因为 Android 提供向前兼容，需要通过目标版本号和最小版本号 `minsdkversion` 来确定项目应该使用到哪些兼容特性。

如果没有事先下载好对应部件，在编译 App 工程时，Gradle 这样的自动化工具会自动执行下载，如果服务器服务受阻则可能导致项目编译失败。

安装需要的部件：

    sdkmanager --verbose --install build-tools;30.0.3
    sdkmanager --verbose --install platforms;android-29
    sdkmanager --verbose --install platforms;android-30

如果收到警告，可以尝试管理员身份运行：

    Failed to read or create install properties file.


SDK Manager 命令行工具参考：

    $ sdkmanager --help

    Usage:
      sdkmanager [--uninstall] [<common args>] [--package_file=<file>] [<packages>...]
      sdkmanager --update [<common args>]
      sdkmanager --list [<common args>]
      sdkmanager --licenses [<common args>]
      sdkmanager --version

    With --install (optional), installs or updates packages.
        By default, the listed packages are installed or (if already installed)
        updated to the latest version.
    With --uninstall, uninstall the listed packages.

        <package> is a sdk-style path (e.g. "build-tools;23.0.0" or
                 "platforms;android-23").
        <package-file> is a text file where each line is a sdk-style path
                       of a package to install or uninstall.
        Multiple --package_file arguments may be specified in combination
        with explicit paths.

    With --update, all installed packages are updated to the latest version.

    With --list, all installed and available packages are printed out.

    With --licenses, show and offer the option to accept licenses for all
         available packages that have not already been accepted.

    With --version, prints the current version of sdkmanager.

    Common Arguments:
        --sdk_root=<sdkRootPath>: Use the specified SDK root instead of the SDK
                                  containing this tool

        --channel=<channelId>: Include packages in channels up to <channelId>.
                               Common channels are:
                               0 (Stable), 1 (Beta), 2 (Dev), and 3 (Canary).

        --include_obsolete: With --list, show obsolete packages in the
                            package listing. With --update, update obsolete
                            packages as well as non-obsolete.

        --no_https: Force all connections to use http rather than https.

        --proxy=<http | socks>: Connect via a proxy of the given type.

        --proxy_host=<IP or DNS address>: IP or DNS address of the proxy to use.

        --proxy_port=<port #>: Proxy port to connect to.

        --verbose: Enable verbose output.

    * If the env var REPO_OS_OVERRIDE is set to "windows",
      "macosx", or "linux", packages will be downloaded for that OS.


# 🚩 AVDs - Android Virtual Devices
- AVDs - Android Virtual Devices https://developer.android.google.cn/studio/command-line/avdmanager


AVDs - Android Virtual Devices 是官方提供的模拟器，有了它，即使手头上没有 Android 设备，也一可以开发应用。借助 AVD，您可以定义要在 Android 模拟器中模拟的 Android 手机、Wear OS 手表或 Android TV 设备的特性。

只需要下载好官方提供的 Android 系统镜像，并设置好虚拟设备即可以运行真实的 Android 系统。

Android SDK 文件夹中 `system-images` 目录下的仿真安卓系统镜像用于模拟器，占用硬盘空间最多，选择当前系统运行的映像文件就可以了，如当前主机是 Intel x86 CPU，只要下载 `Intel x86 Atom System Image`。

需要在 AVD Manager 创建一个虚拟机，虚拟机需要配套使用系统镜像文件。映像文件存放在 SDK 安装目录下的 `system-images` 内，通过使用 SDK 管理工具下载。如果在安装虚拟机后出现虚拟黑屏的情况，多半是系统兼容问题，可以试试其它 Android 平台版本，如本机 Window 10 使用 Android 6.0(API 23)，映像文件只下载配套的 `Intel x86 Atom System Image`。

可以在 Android SDK 命令行工具目录下找到虚拟设备的管理 avdmanager 命令：

    set path=%path%;%ANDROID_HOME%\tools\bin

avdmanager 命令行工具可以创建和管理 Android 虚拟设备。

如果您使用的是 Android Studio，则无需使用此工具，但可以从 IDE 中创建和管理 AVD。

avdmanager 工具在 Android SDK 工具软件包（25.3.0 及更高版本）中提供，并位于 android_sdk/tools/bin/ 下。

命令参考 avdmanager：

```sh
    $ avdmanager --help 

    Usage:
          avdmanager [global options] [action] [action options]
          Global options:
      -s --silent     : Silent mode, shows errors only.
      -v --verbose    : Verbose mode, shows errors, warnings and all messages.
         --clear-cache: Clear the SDK Manager repository manifest cache.
      -h --help       : Help on a specific command.

    Valid actions are composed of a verb and an optional direct object:
    -   list              : Lists existing targets or virtual devices.
    -   list avd          : Lists existing Android Virtual Devices.
    -   list target       : Lists existing targets.
    -   list device       : Lists existing devices.
    - create avd          : Creates a new Android Virtual Device.
    -   move avd          : Moves or renames an Android Virtual Device.
    - delete avd          : Deletes an Android Virtual Device.
```

一般说 Android SDK 版本，就是指 Android SDK Platform 的版本，即安装目录中 platforms 文件夹中安装的 SDK 版本。

    $ avdmanager list target

    Available Android targets:
    ----------
    id: 1 or "android-28"
         Name: Android API 28
         Type: Platform
         API level: 28
         Revision: 6

配置好的 AVD 系统一般保存在 HOME 目录，可以使用命令查询现有 AVD 列表：

    $ avdmanager list avd

    Parsing C:\Program Files (x86)\Android\android-sdk\build-tools\28.0.3\package.xml
    Parsing C:\Program Files (x86)\Android\android-sdk\build-tools\29.0.2\package.xml
    Parsing C:\Program Files (x86)\Android\android-sdk\emulator\package.xml
    Parsing C:\Program Files (x86)\Android\android-sdk\patcher\v4\package.xml
    Parsing C:\Program Files (x86)\Android\android-sdk\platform-tools\package.xml
    Parsing C:\Program Files (x86)\Android\android-sdk\platforms\android-28\package.xml
    Parsing C:\Program Files (x86)\Android\android-sdk\system-images\android-28\google_apis\x86\package.xml
    Parsing C:\Program Files (x86)\Android\android-sdk\tools\package.xml

    Available Android Virtual Devices:

    The following Android Virtual Devices could not be loaded:
        Name: pixel_2_pie_9_0_-_api_28
        Path: ~\.android\avd\pixel_2_pie_9_0_-_api_28.avd
       Error: Google pixel_2 no longer exists as a device

目前支持的设备可以使用 avdmanager list device 命令列表出来，创建 AVD 设备时，需要使用这些设备的 Tag ID。

    Available devices definitions:
    id: 0 or "tv_1080p"
        Name: Android TV (1080p)
        OEM : Google
        Tag : android-tv
    ---------
    id: 1 or "tv_720p"
        Name: Android TV (720p)
        OEM : Google
        Tag : android-tv
    ---------
    id: 2 or "wear_round"
        Name: Android Wear Round
        OEM : Google
        Tag : android-wear
    ---------
    id: 3 or "wear_round_chin_320_290"
        Name: Android Wear Round Chin
        OEM : Google
        Tag : android-wear
    ---------
    id: 4 or "wear_square"
        Name: Android Wear Square
        OEM : Google
        Tag : android-wear
    ---------
    id: 5 or "Galaxy Nexus"
        Name: Galaxy Nexus
        OEM : Google
    ---------
    ...


## Create AVD
- 创建和管理虚拟设备 https://developer.android.google.cn/studio/run/managing-avds?hl=zh-cn#viewing
- Create and manage virtual devices https://developer.android.google.cn/studio/run/managing-avds
- Start the emulator from the command line https://developer.android.google.cn/studio/run/emulator-commandline
- 为 Android 模拟器配置硬件加速 https://developer.android.google.cn/studio/run/emulator-acceleration?hl=zh-cn

创建 AVD，注意要先下载好系统映像文件，然后在 Package 参数中指定。

如果没有映像文件则会提示错误，并提示已经下载的可用镜像文件。镜像文件路径对应 --package 参数值。分号分隔的是各个目录名称。如当前系统只有一个 Android 28 x86 系统映像，但命令行中指定的是 x86_64：

    $ avdmanager create avd --name "Galaxy-Nexus" --tag google_apis --package "system-images;android-28;google_apis;x86_64"

    Error: Package path is not valid. Valid system image paths are:
    system-images;android-28;google_apis;x86

创建 AVD 设备后，就可以使用虚拟器启动它：

    avdmanager create avd --name "Pixel_XL" -d pixel_xl --tag google_apis --package "system-images;android-28;google_apis;x86"
    avdmanager delete avd -n Pixel_XL

启动 AVD 设备 Starting the emulator

    # emulator -avd avd_name [ {-option [value]} … ]
    # emulator @avd_name [ {-option [value]} … ]

    emulator -avd Pixel_XL
    emulator @Pixel_XL

如果报错：

    PANIC: Missing emulator engine program for 'x86' CPU.

可能是运行的虚拟器程序问题，emulator 和 tools 文件夹都会有虚拟器，尝试运行 emulator 文件夹下的虚拟器。

新创建的 AVD 只有三个文件，其它映像文件会在首次运行时拷贝进来：

    ~/.android/avd
      +-- Pixel_XL.ini
      +-- Pixel_XL.avd
           +-- config.ini
           +-- userdata.img

命令使用参考：

```sh
    $ avdmanager --help create avd 

    Usage:
          avdmanager [global options] create avd [action options]
          Global options:
      -s --silent     : Silent mode, shows errors only.
      -v --verbose    : Verbose mode, shows errors, warnings and all messages.
         --clear-cache: Clear the SDK Manager repository manifest cache.
      -h --help       : Help on a specific command.

    Action "create avd":
      Creates a new Android Virtual Device.
    Options:
      -a --snapshot: Place a snapshots file in the AVD, to enable persistence.
      -c --sdcard  : Path to a shared SD card image, or size of a new sdcard for
                     the new AVD.
      -g --tag     : The sys-img tag to use for the AVD. The default is to
                     auto-select if the platform has only one tag for its system
                     images.
      -p --path    : Directory where the new AVD will be created.
      -k --package : Package path of the system image for this AVD (e.g.
                     'system-images;android-19;google_apis;x86').
      -n --name    : Name of the new AVD. [required]
      -f --force   : Forces creation (overwrites an existing AVD)
      -b --abi     : The ABI to use for the AVD. The default is to auto-select the
                     ABI if the platform has only one ABI for its system images.
      -d --device  : The optional device definition to use. Can be a device index
                     or id.
```

## AVD Network
- Send Emulator console commands https://developer.android.google.cn/studio/run/emulator-console
- 设置 Android 模拟器网络 https://developer.android.google.cn/studio/run/emulator-networking?hl=zh-cn
- [linux ip命令和ifconfig命令](https://blog.csdn.net/freeking101/article/details/68939059)
- [Use ip Command in Linux](https://linoxide.com/linux-command/use-ip-command-linux)
- [iprote2 suite utility](http://www.linuxgrill.com/anonymous/iproute2/NEW-OSDL/)

模拟器的每个实例都在虚拟路由器/防火墙服务后面运行，这样便将其与开发计算机网络接口和设置以及互联网隔离开来。模拟设备无法在网络上看到开发计算机或其他模拟器实例，而只会看到它通过以太网连接到路由器/防火墙。

每个实例的虚拟路由器管理 10.0.2/24 网络地址空间，路由器管理的所有地址都采用 10.0.2.xx 形式，其中 xx 是一个数字。

此空间内的地址由模拟器/路由器预分配，具体说明如下：

    |  网络地址 |                            说明                           |
    |-----------|-----------------------------------------------------------|
    | 10.0.2.1  | 路由器/网关地址                                           |
    | 10.0.2.2  | 主机回环接口的特殊别名（即，开发计算机上的 127.0.0.1）    |
    | 10.0.2.3  | 第一个 DNS 服务器                                         |
    | 10.0.2.4  | 可选的第二个 DNS 服务器，如果有，还伤可以有第三个和第四个 |
    | 10.0.2.15 | 模拟设备网络/以太网接口                                   |
    | 127.0.0.1 | 模拟设备回环接口                                          |

请注意，所有正在运行的模拟器实例都使用相同的地址分配。这意味着，如果您的计算机上有两个并发运行的实例，每个实例都有自己的路由器，在路由器后面，每个实例的 IP 地址都是 10.0.2.15。这两个实例由路由器隔离，在同一网络上无法看到对方。

注意，开发计算机上的地址 127.0.0.1 对应于模拟器自己的回环接口。如果要访问在开发计算机回环接口（在开发计算机上也称为 127.0.0.1）上运行的服务，则应改用特殊地址 10.0.2.2。

注意，模拟设备的预分配地址是 Android 模拟器专用的地址，并且在真实设备上可能截然不同（它们也很可能是经过 NAT 处理的地址，具体来说，就是路由器/防火墙后面的地址）。

在模拟器中运行的 Android 应用可以连接到工作站上可用的网络，即工作站可以联网，AVD 应用就可以联网。

不过，应用通过模拟器连接，而不是直接连接到硬件，模拟器就像工作站上的普通应用一样，这可能会导致一些限制：

- 与模拟设备的通信可能会被您的计算机上运行的防火墙程序阻止。
- 与模拟设备的通信可能会被您的计算机连接到的另一个（物理）防火墙/路由器阻止。

模拟器的虚拟路由器应该能够代表模拟设备处理所有出站 TCP 和 UDP 连接/消息，前提是开发计算机的网络环境允许它这样做。除了主机操作系统和网络施加的限制以外，对端口号或范围没有内置限制。

根据具体环境，模拟器可能无法支持其他协议，例如 ICMP 不支持，所以用于 ping 网站可以获取到 DNS 但无法发送测试包。目前，模拟器不支持 IGMP 或多播。

查询 IP 信息显示 192.168.232.2/21，子网掩码占 21 bits，不是常用的 255.255.255.0，不在同一个网段，所以，AVD 设备并不直接与 PC 主机联网。

    adb -s emulator-5554 shell 

    # getprop | grep net\\.
    [net.bt.name]: [Android]
    [net.dns1]: [10.0.2.3]
    [net.eth0.dns1]: [10.0.2.3]
    [net.eth0.dns2]: []
    [net.eth0.dns3]: []
    [net.eth0.dns4]: []
    [net.eth0.gw]: [10.0.2.2]
    [net.qtaguid_enabled]: [1]
    [net.tcp.default_init_rwnd]: [60]

    # ip address show|grep inet
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host
    inet 192.168.232.2/21 brd 192.168.239.255 scope global wlan0
    inet6 fec0::48:4b4d:e70e:21d6/64 scope site temporary dynamic
    inet6 fec0::15:b2ff:fe00:0/64 scope site dynamic mngtmpaddr
    inet6 fe80::15:b2ff:fe00:0/64 scope link
    inet 192.168.200.2/24 brd 192.168.200.255 scope global radio0
    inet6 fec0::612b:b848:e32f:46f3/64 scope site temporary dynamic
    inet6 fec0::18fe:aaff:fe14:d9ac/64 scope site dynamic mngtmpaddr
    inet6 fe80::18fe:aaff:fe14:d9ac/64 scope link



## redir & foward socket

Android 系统为实现通信，将 PC 主机回环 IP 127.0.0.1 映射设置为 10.0.2.2，而 AVD 设备自身 IP 设置为 10.0.2.15/127.0.0.1。所以，在 AVD 中 访问  10.0.2.2 就是访问 PC 主机回环地址。然而，PC 主机并没有为 AVD 系统指定 IP，所以 PC 只能通过端口重定向来实现和 Android 模拟器的通信。

如果 PC 主机要与虚拟路由背后的 AVD 实例进行通信，需要在虚拟路由器上设置网络重定向，可以在模拟器实例上创建主机与访客端口/地址的映射。然后，客户端可以连接到虚拟路由器上的指定的访客端口，然后，路由器会将流量重定向到模拟设备的主机端口。

设置网络重定向的方法有两种：

- 一种是使用模拟器控制台命令，通过 telnet 登录 AVD 设备进行操作。
- 一种是使用 adb 工具，adb forward 命令。

实现 PC 电脑和 Android 模拟器系统之间网络通信，运行模拟器，并执行 telnet 客户端进入 Android console 设置重定向：

    telnet localhost 5554

5554 是模拟器的默认端口，AVD 模拟器窗口标题栏有显示。

连接后，控制台会提示需要授权，授权码会自动生成保存到 HOME 目录，可以打开 `~\.emulator_console_auth_token` 文件查看，然后执行授权：

    auth [AUTH_TOKEN]
    Android console command help:

        help|h|?         print a list of commands
        help-verbose     print a list of commands with descriptions      
        ping             check if the emulator is alive
        automation       manage emulator automation
        event            simulate hardware events
        geo              Geo-location commands
        gsm              GSM related commands
        cdma             CDMA related commands
        crash            crash the emulator instance
        crash-on-exit    simulate crash on exit for the emulator instance
        kill             kill the emulator instance
        restart          restart the emulator instance
        network          manage network settings
        grpc             enable the grpc endpoint
        power            power related commands
        quit|exit        quit control session
        redir            manage port redirections
        sms              SMS related commands
        avd              control virtual device execution
        qemu             QEMU-specific commands
        sensor           manage emulator sensors
        physics          manage physical model
        finger           manage emulator finger print
        debug            control the emulator debug output tags   
        rotate           rotate the screen clockwise by 90 degrees
        screenrecord     Records the emulator's display
        fold             fold the device
        unfold           unfold the device
        multidisplay     configure the multi-display
        icebox           auto-snapshot on uncaught exceptions     

    try 'help <command>' for command-specific help

通过帮助信息，可以看到当前的连接并没有 redir 命令。要退出控制台，执行 quit 或 exit 命令即可。

继续在 console 下执行 redir 命令：

    redir add tcp:8080:8080

    # redir add <protocol>:<host-port>:<guest-port>
    # redir del protocol:host-port
    # redir list  List the current port redirection.
    
执行此命令之后，会把 PC 8080 端口接收到的 TCP/UDP 数据重定向到模拟器的 8080 端口。

如果要使两个模拟器实例通过 TCP/UDP 进行通信，必须设置必要的网络重定向，具体说明如下：

    假设您拥有以下环境：

    A 是您的开发计算机
    B 是您的第一个模拟器实例，在 A 上运行
    C 是您的第二个模拟器实例，也在 A 上运行

    并且，您要在 B 上运行一个服务器，C 将连接到该服务器，设置方法如下：

    - 在 B 上设置 Server 监听 10.0.2.15:<serverPort>
    - 在 B 控制台上，设置从 A:localhost:<localPort> 到 B:10.0.2.15:<serverPort> 的重定向。
    - 在 C 上，让客户端连接到 10.0.2.2:<localPort>，然后，连接就会被重定向到服务器监听的端口。
    
    例如，如果要运行一个 HTTP 服务器，可以选择 80 作为 <serverPort>，选择 8080 作为 <localPort>：

    - B 监听 10.0.2.15:80
    - 在 B 控制台上，发出 redir add tcp:8080:80
    - C 连接到 10.0.2.2:8080，实际就是通过 PC 主机的回环地址重定向到 B 设备上的 80 端口。

## SDCard
- https://developer.android.google.cn/studio/command-line/mksdcard
- https://www.linuxprobe.com/mount-detail-parameters.html

使用 mksdcard 命令可以创建 sdcard 镜像文件，FAT32 格式，用法如下：

    mksdcard: create a blank FAT32 image to be used with the Android emulator
    usage: mksdcard [-l label] <size> <file>

      if <size> is a simple integer, it specifies a size in bytes
      if <size> is an integer followed by 'K', it specifies a size in KiB
      if <size> is an integer followed by 'M', it specifies a size in MiB
      if <size> is an integer followed by 'G', it specifies a size in GiB

    Minimum size is 9M. The Android emulator cannot use smaller images.
    Maximum size is 1099511627264 bytes, 1073741823K, 1048575M or 1023G

例如，创建一个 512M 的T卡：

    mksdcard -l mycard 512M ~/mysdcard.img

在 AVD 设备启动时通过 -sdcard 参数使用这个映像文件：

    emulator -avd Pixel_XL -sdcard mysdcard.img
    emulator @Pixel_XL -sdcard mysdcard.img

可以在 Android 系统启动后，通过 adb push/pull 或 sync 写入 PC 主机的文件，pull 获取 sdcard 文件。

使用 file 命令查看 AVD 使用的各种映像文件：

    $ file *img*
    cache.img:               Linux rev 1.0 ext4 filesystem data, UUID=57f8f4bc-abf4-655f-bf67-946fc0f9f25b (extents) (large files)
    cache.img.qcow2:         QEMU QCOW2 Image (v3), has backing file (path cache.img), 69206016 bytes
    encryptionkey.img:       data
    encryptionkey.img.qcow2: QEMU QCOW2 Image (v3), has backing file (path encryptionkey.img), 1048576 bytes
    kernel-ranchu-64:        Linux kernel x86 boot executable bzImage, version 4.4.124+ (android-build@wphp12.hot.corp.google.com) #1 SMP PREEMPT Wed Jan 30 07:13:09 UTC 2019, RO-rootFS, swap_dev 0x5, Normal VGA
    ramdisk.img:             gzip compressed data, from Unix, original size modulo 2^32 4125184
    sdcard.img:              DOS/MBR boot sector, code offset 0x5a+2, OEM-ID "MSWIN4.1", sectors/cluster 4, Media descriptor 0xf8, sectors/track 9, sectors 1048576 (volumes > 32 MB), FAT (32 bit), sectors/FAT 2044, serial number 0xae44105, label: "     SDCARD"
    sdcard.img.qcow2:        QEMU QCOW2 Image (v3), has backing file (path sdcard.img), 536870912 bytes
    system.img:              DOS/MBR boot sector; partition 1 : ID=0xee, start-CHS (0x0,0,2), end-CHS (0x146,155,21), startsector 1, 5246975 sectors, extended partition table (last)
    userdata-qemu.img:       Linux rev 1.0 ext4 filesystem data, UUID=57f8f4bc-abf4-655f-bf67-946fc0f9f25b (extents) (large files)
    userdata-qemu.img.qcow2: QEMU QCOW2 Image (v3), has backing file (path userdata-qemu.img), 2147483648 bytes
    userdata.img:            data
    vendor.img:              DOS/MBR boot sector; partition 1 : ID=0xee, start-CHS (0x0,0,2), end-CHS (0xc,125,49), startsector 1, 200703 sectors, extended partition table (last)

以上是 android-28 的映像文件，各种类型列表如下：

- data
    - encryptionkey.img
    - userdata.img
- Linux rev 1.0 ext4 filesystem data
    - userdata-qemu.img
    - cache.img
- Linux kernel x86 boot executable bzImage, version 4.4.124+
    - kernel-ranchu-64
- DOS/MBR boot sector
    - sdcard.img
    - system.img
    - vendor.img
- gzip
    - ramdisk.img - ramdisk: ASCII cpio archive (SVR4 with no CRC)
- QEMU QCOW2 Image (v3)
    - cache.img.qcow2
    - encryptionkey.img.qcow2
    - sdcard.img.qcow2
    - userdata-qemu.img.qcow2

其中 ramdisk.img 压缩包内是一个 ramdisk 文件，是设备中内部 RAM 中的文件系统。是 cpio 文件，可以用用 gzip 解压后再用 cpio 命令来提取：

    sudo gzip -c -l -S .img ramdisk.img
             compressed        uncompressed  ratio uncompressed_name
                1748302             4125184  57.6% ramdisk

    sudo gzip -c -d -S .img ramdisk.img > .\ramdisk
    cpio -idmv < ramdisk

gzip 命令本身并没有解压到指定目录的参数，但是提供了 -c 将解压输出到 stdout，可以对单文件解压输出重定向到指定位置的文件。

可以使用 losetup 和 mount 命令挂载映像文件：

    # losetup --help
    usage: losetup [-cdrs] [-o OFFSET] [-S SIZE] {-d DEVICE...|-j FILE|-af|{DEVICE FILE}}

    Associate a loopback device with a file, or show current file (if any)
    associated with a loop device.

    Instead of a device:
    -a      Iterate through all loopback devices
    -f      Find first unused loop device (may create one)
    -j      Iterate through all loopback devices associated with FILE

    existing:
    -c      Check capacity (file size changed)
    -d      Detach loopback device

    new:
    -s      Show device name (alias --show)
    -o      Start assocation at OFFSET into FILE
    -r      Read only
    -S      Limit SIZE of loopback association (alias --sizelimit)

示范：

    sudo losetup /dev/loop0 sdcard.img
    mkdir ~/sdcard
    sudo mount /dev/loop0 ~/sdcard


## Mount a filesystem 
- https://www.linuxprobe.com/mount-detail-parameters.html

Linux mount 命令可以将分区挂接到Linux的一个文件夹下，从而将分区和该目录联系起来，因此我们只要访问这个文件夹，就相当于访问该分区了。

首先，介绍一下挂接(mount)命令的使用方法，mount命令参数非常多，这里主要讲一下今天我们要用到的。

mount 命令挂载映像文件：

    $ mount -h

    Usage:
     mount [-lhV]
     mount -a [options]
     mount [options] [--source] <source> | [--target] <directory>
     mount [options] <source> <directory>
     mount <operation> <mountpoint> [<target>]

    Mount a filesystem.

挂载命令格式：

    mount [-t vfstype] [-o options] device dir

1、-t vfstype 指定文件系统的类型，通常不必指定，mount 会自动选择正确的类型。

- `iso9660` 光盘或光盘镜像 
- `msdos` DOS fat16 文件系统 
- `vfat` Windows 9x fat32 文件系统 
- `ntfs` Windows NT ntfs 文件系统 
- `smbfs` Mount Windows 文件网络共享 
- `nfs` UNIX(LINUX) 文件网络共享

2、-o options 主要用来描述设备或档案的挂接方式。

- `loop` 用来把一个文件当成硬盘分区挂接上系统 
- `ro` 采用只读方式挂接设备 
- `rw` 采用读写方式挂接设备 
- `iocharset` 指定访问文件系统所用字符集

3、device 要挂接(mount)的设备。
4、dir设备在系统上的挂接点(mount point)。


挂接光盘镜像文件
1、从光盘制作光盘镜像文件。将光盘放入光驱，执行下面的命令。

    #cp /dev/cdrom /home/sunky/mydisk.iso 或 
    #dd if=/dev/cdrom of=/home/sunky/mydisk.iso
注：执行上面的任何一条命令都可将当前光驱里的光盘制作成光盘镜像文件/home/sunky/mydisk.iso

2、将文件和目录制作成光盘镜像文件，执行下面的命令。

    #mkisofs -r -J -V mydisk -o /home/sunky/mydisk.iso /home/sunky/ mydir
注：这条命令将/home/sunky/mydir目录下所有的目录和文件制作成光盘镜像文件/home/sunky/mydisk.iso，光盘卷标为：mydisk

3、光盘镜像文件的挂接(mount)

    #mkdir /mnt/vcdrom
注：建立一个目录用来作挂接点(mount point)

    #mount -o loop -t iso9660 /home/sunky/mydisk.iso /mnt/vcdrom
注：使用/mnt/vcdrom就可以访问光盘镜像文件mydisk.iso里的所有文件了。

挂接移动硬盘
对linux系统而言，USB接口的移动硬盘是当作SCSI设备对待的。插入移动硬盘之前，应先用fdisk –l或more /proc/partitions查看系统的硬盘和硬盘分区情况。

    [root at pldyrouter /]# fdisk -l

接好移动硬盘后，再用fdisk –l或more。
/proc/partitions查看系统的硬盘和硬盘分区情况，应该可以发现多了一个SCSI硬盘/dev/sdc和它的两个磁盘分区/dev
/sdc1、/dev/sdc2，其中/dev/sdc5是/dev/sdc2分区的逻辑分区，我们可以使用下面的命令挂接/dev/sdc1和
/dev/sdc5。

    #mkdir -p /mnt/usbhd1 
    #mkdir -p /mnt/usbhd2
注：建立目录用来作挂接点(mount point)

    #mount -t ntfs /dev/sdc1 /mnt/usbhd1 
    #mount -t vfat /dev/sdc5 /mnt/usbhd2
注：对ntfs格式的磁盘分区应使用-t ntfs参数，对fat32格式的磁盘分区应使用-t vfat参数。若汉字文件名显示为乱码或不显示，可以使用下面的命令格式。

    #mount -t ntfs -o iocharset=cp936 /dev/sdc1 /mnt/usbhd1 
    #mount -t vfat -o iocharset=cp936 /dev/sdc5 /mnt/usbhd2
linux系统下使用fdisk分区命令和mkfs文件系统创建命令可以将移动硬盘的分区制作成linux系统所特有的ext2、ext3格式。这样，在linux下使用就更方便了。使用下面的命令直接挂接即可。

    #mount /dev/sdc1 /mnt/usbhd1
挂接U盘
和USB接口的移动硬盘一样对linux系统而言U盘也是当作SCSI设备对待的。使用方法和移动硬盘完全一样。插入U盘之前，应先用fdisk –l 或more /proc/partitions查看系统的硬盘和硬盘分区情况。

插入U盘后，再用 fdisk –l 或 more /proc/partitions查看系统的硬盘和硬盘分区情况。

    # fdisk -l

系统多了一个SCSI硬盘/dev/sdd和一个磁盘分区/dev/sdd1,/dev/sdd1就是我们要挂接的U盘。

    #mkdir -p /mnt/usb
注：建立一个目录用来作挂接点(mount point)

    #mount -t vfat /dev/sdd1 /mnt/usb
注：现在可以通过/mnt/usb来访问U盘了, 若汉字文件名显示为乱码或不显示，可以使用下面的命令。

    #mount -t vfat -o iocharset=cp936 /dev/sdd1 /mnt/usb

挂接Windows文件共享
Windows网络共享的核心是SMB/CIFS，在linux下要挂接(mount)windows的磁盘共享，就必须安装和使用samba
软件包。现在流行的linux发行版绝大多数已经包含了samba软件包，如果安装linux系统时未安装samba请首先安装samba。当然也可以到www.samba.org网站下载新的版本是3.0.10版。
当windows系统共享设置好以后，就可以在linux客户端挂接(mount)了，具体操作如下：

    # mkdir –p /mnt/samba
注：建立一个目录用来作挂接点(mount point)

    # mount -t smbfs -o username=administrator,password=pldy123 //10.140.133.23/c$ /mnt/samba
注：administrator 和 pldy123 是ip地址为10.140.133.23 windows计算机的一个用户名和密码，c$是这台计算机的一个磁盘共享。
如此就可以在linux系统上通过/mnt/samba来访问windows系统磁盘上的文件了。以上操作在redhat as server3、redflag server 4.1、suse server 9以及windows NT 4.0、windows 2000、windowsxp、windows 2003环境下测试通过。

挂接UNIX系统NFS文件共享
类似于windows的网络共享，UNIX(Linux)系统也有自己的网络共享，那就是NFS(网络文件系统)，下面我们就以SUN Solaris2.8和REDHAT as server 3 为例简单介绍一下在linux下如何mount nfs网络共享。
在linux客户端挂接(mount)NFS磁盘共享之前，必须先配置好NFS服务端。

1、Solaris系统NFS服务端配置方法如下：
(1)修改 /etc/dfs/dfstab, 增加共享目录

    share -F nfs -o rw /export/home/sunky
(2)启动nfs服务

    # /etc/init.d/nfs.server start
(3)NFS服务启动以后，也可以使用下面的命令增加新的共享

    # share /export/home/sunky1 
    # share /export/home/sunky2
注：/export/home/sunky和/export/home/sunky1是准备共享的目录

2、linux系统NFS服务端配置方法如下：
(1)修改 /etc/exports,增加共享目录

/export/home/sunky 10.140.133.23(rw) 
/export/home/sunky1 *(rw) 
/export/home/sunky2 linux-client(rw)
注：/export/home/目录下的sunky、sunky1、sunky2是准备共享的目录，10.140.133.23、*、
linux-client是被允许挂接此共享linux客户机的IP地址或主机名。如果要使用主机名linux-client必须在服务端主机
/etc/hosts文件里增加linux-client主机ip定义。格式如下：

10.140.133.23 linux-client
(2)启动与停止NFS服务

/etc/rc.d/init.d/portmap start (在REDHAT中PORTMAP是默认启动的) 
/etc/rc.d/init.d/nfs start 启动NFS服务 
/etc/rc.d/init.d/nfs stop 停止NFS服务

注：若修改/etc/export文件增加新的共享，应先停止NFS服务，再启动NFS服务方能使新增加的共享起作用。
使用命令exportfs -rv也可以达到同样的效果。

3、linux客户端挂接(mount)其他linux系统或UNIX系统的NFS共享

    # mkdir –p /mnt/nfs

注：建立一个目录用来作挂接点(mount point)

    #mount -t nfs -o rw 10.140.133.9:/export/home/sunky /mnt/nfs

注：这里我们假设10.140.133.9是NFS服务端的主机IP地址，当然这里也可以使用主机名，但必须在本机/etc/hosts文件里增加服务端ip定义。/export/home/sunky为服务端共享的目录。
如此就可以在linux客户端通过/mnt/nfs来访问其它linux系统或UNIX系统以NFS方式共享出来的文件了。
以上操作在 redhat as server 3、redflag server4.1、suse server 9以及Solaris 7、Solaris 8、Solaris 9 for x86&sparc环境下测试通过。

补充：
linux加载光驱：
（1）使用光驱前，要先mount一下：

    ＃mount /dev/cdrom /mnt/cdrom

然后您就可以进入/mnt/cdrom目录下读取光盘内容了。
（2）当您想退出光盘时，须使用umout命令，否则光驱就会一直处于死锁状态：

    ＃umount /mnt/cdrom


# 🚩 adb Android 调试桥
- [How to use ADB shell commands on Windows](http://adbshell.com/commands)
- SDK Platform Tools https://developer.android.google.cn/studio/releases/platform-tools
- Android Debug Bridge (adb) https://developer.android.google.cn/studio/command-line/adb
- ADB Commands List – A Detailed ADB Cheat Sheet https://technastic.com/adb-commands-list-adb-cheat-sheet/

手机开启调试许可后，adb 服务程序才可以连接到手机进行操作，否则手册处于 unauthorized 状态：

    $ adb devices
    * daemon not running; starting now at tcp:5037
    * daemon started successfully
    List of devices attached
    62dadc91        unauthorized

    $ adb shell input keyevent 26
    error: device unauthorized.
    This adb server's $ADB_VENDOR_KEYS is not set
    Try 'adb kill-server' if that seems wrong.
    Otherwise check for a confirmation dialog on your device.

尝试连接手机时，在手机上会弹出授权界面，通过后，adb 会接收到相应的密钥，通常保存在 HOME 文件夹下。

    ~\.android 
    C:\Users\OCEAN\.android
    +-- adbkey adb 使用的私钥。
    +-- adbkey.pub 许可设备的公钥列表，缺失公钥会提示 $ADB_VENDOR_KEYS 没有设置。
    +-- adb_usb.ini 设备 VID 列表记录文件，每行记录一个 VID，如 0x22D9。

手机连接电脑后，通过 Android ADB Interface 设备的信息可以查询到，如 USB\VID_22D9&PID_2769\62dadc91 包含 VID 22D9。

在 Android 设备确认授权 USB 调试之前，PC 端需要先生成 RSA 非对称密钥对，Android 设备会弹出询问是否允许 USB 调试对话框，通过 USB 调试权限后，两边就相互交换公钥，然后才可以边连接进行操作。

设备上相关文件位置：

    /data/misc/adb/adb_keys

打开 Android 手机的开发者模式及 USB 调试模式，如小米 8 开发者模式，`设置` -> `我的设备` -> `全部参数` 连续点击 `MIUI版本` 直到提示进入开发者模式，然后可以去 `设置` -> `更多设置` -> `开发者选项` 管理更多的选项，如打开 USB 调试与安装选项。

Android 调试系统是一个面对客户服务系统，包括三个组成部分:

- server 一个在开发机器上作为后台进程运行的服务器，负责管理守护程序之间的通信。
- client (adb) 一个在开发机上运行的命令行客户端。
- daemon (adbd) 在模拟器、设备上运行于后台的守护程序。

其中 adb 命令行客户端包含在 Android SDK Platform Tools 平台工具软件包中，可以使用 SDK 管理器下载此软件包。或者，如果只需要独立的 Android SDK 平台工具软件包，也可以在官方站点进行下载。

当执行 adb 命令，即启动一个 adb 客户端，首先，确认是否已有一个服务进程在运行。如果没有，则启动服务进程。当服务器运行后，就会绑定本地的 TCP 端口 5037，并监听 adb 客户端发来的命令，所有的 adb 客户端命令都通过端口 tcp:5037 与服务器对话的，服务器根据命令与运行设备上的 adbd 客户端进程进行通信。

服务启动与停止：

    adb start-server
    adb kill-server

接着服务器将所有运行中的模拟器、设备实例建立连接，通过扫描所有 TCP 5555 - 5585 范围内的奇数端口来定位所有的模拟器或设备。一旦服务器得到 adbd 守护程序响应，即建立一个到该端口的连接。一旦服务器与所有模拟器实例建立连接，就可以使用 adb 命令控制、访问该实例。

请注意，任何模拟器或设备实例会取得两个连续的端口，一个偶数端口用来相应控制台的连接，一个奇数端口用来响应 adb 连接，比如:

    Emulator 1, console: 5554
    Emulator 1, adb: 5555
    Emulator 2, console: 5556
    Emulator 2, adb: 5557 ...

如上所示，模拟器实例通过 5555 端口连接 adb，就如同使用 5554 端口连接控制台一样。

因为服务器可以管理多个模拟器、设备实例的连接，处理多个 adb 客户端命令，你可以通过任何客户端，或脚本来控制任何模拟器或设备实例。

以下的部分描述通过命令使用 adb 和管理模拟器、设备的状态。要注意的是如果你用，装有 ADT 插件的 Eclipse 开发 Android 程序，你就不需要通过命令行使用 adb 。ADT 插件已经为 Eclipse 集成了 abd 功能，当然，仍然可以直接使用 adb ，比如说调试。

在开发机上执行 adb 命令与 Android 设备交互，使用方法:

    adb [-d|-e|-s <serialNumber|ip>] <command> 

当你发出一个命令，系统启用 Android 客户端。客户端并不与模拟器实例相关，所以如果多服务器/设备运行中的，你需要用 -d 选项去为应被控制的命令确定目标实例。


## adb - Android Debug Bridge

Android 调试桥(adb)是多种用途的工具，该工具可以帮助你你管理设备或模拟器的状态。

可以通过下列几种方法进入 adb 交互:

- 通过 adb 在设备上运行 shell 命令。
- 通过端口转发来管理模拟器、设备。
- 从模拟器、设备上拷贝来或拷贝走文件。

下面是 adb 常见的使用方法：

- general commands
- networking
- file transfer
- app installation (see also `adb shell cmd package help`)
- debugging
- security
- scripting
- internal debugging
- environment variables

通过 adb 执行设备的 shell 命令是最常用的功能之一，通常 Ctrl-C 组合键用来结束 shell，而 adb 也是通过控制台执行的，所以要结束 adb shell 命令就通过 Ctrl-D 组合键。

    $ adb -e shell
    dipper:/ $ ^C
    130|dipper:/ $ ^D

adb 命令参考：

    Android Debug Bridge version 1.0.41
    Version 29.0.5-5949299
    Installed as /android-sdk/platform-tools/adb.exe

    global options:
     -a         listen on all network interfaces, not just localhost
     -d         use USB device (error if multiple devices connected)
     -e         use TCP/IP device (error if multiple TCP/IP devices available)
     -s SERIAL  use device with given serial (overrides $ANDROID_SERIAL)
     -t ID      use device with given transport id
     -H         name of adb server host [default=localhost]
     -P         port of adb server [default=5037]
     -L SOCKET  listen on given socket for adb server [default=tcp:localhost:5037]

    general commands:
     devices [-l]             list connected devices (-l for long output)
     help                     show this help message
     version                  show version num

    networking:
     connect HOST[:PORT]      connect to a device via TCP/IP
     disconnect [[HOST]:PORT] disconnect from given TCP/IP device, or all
     forward --list           list all forward socket connections
     forward [--no-rebind] LOCAL REMOTE
         forward socket connection using:
           tcp:<port> (<local> may be "tcp:0" to pick any open port)
           localabstract:<unix domain socket name>
           localreserved:<unix domain socket name>
           localfilesystem:<unix domain socket name>
           dev:<character device name>
           jdwp:<process pid> (remote only)
     forward --remove LOCAL   remove specific forward socket connection
     forward --remove-all     remove all forward socket connections
     ppp TTY [PARAMETER...]   run PPP over USB
     reverse --list           list all reverse socket connections from device
     reverse [--no-rebind] REMOTE LOCAL
         reverse socket connection using:
           tcp:<port> (<remote> may be "tcp:0" to pick any open port)
           localabstract:<unix domain socket name>
           localreserved:<unix domain socket name>
           localfilesystem:<unix domain socket name>
     reverse --remove REMOTE  remove specific reverse socket connection
     reverse --remove-all     remove all reverse socket connections from device

    file transfer:
     push [--sync] LOCAL... REMOTE
         copy local files/directories to device
         --sync: only push files that are newer on the host than the device
     pull [-a] REMOTE... LOCAL
         copy files/dirs from device
         -a: preserve file timestamp and mode
     sync [all|data|odm|oem|product|system|system_ext|vendor]
         sync a local build from $ANDROID_PRODUCT_OUT to the device (default all)
         -l: list files that would be copied, but don't copy them

    shell:
     shell [-e ESCAPE] [-n] [-Tt] [-x] [COMMAND...]
         run remote shell command (interactive shell if no command given)
         -e: choose escape character, or "none"; default '~'
         -n: don't read from stdin
         -T: disable PTY allocation
         -t: force PTY allocation
         -x: disable remote exit codes and stdout/stderr separation
     emu COMMAND              run emulator console command

    app installation (see also `adb shell cmd package help`):
     install [-lrtsdg] [--instant] PACKAGE
         push a single package to the device and install it
     install-multiple [-lrtsdpg] [--instant] PACKAGE...
         push multiple APKs to the device for a single package and install them
     install-multi-package [-lrtsdpg] [--instant] PACKAGE...
         push one or more packages to the device and install them atomically
         -r: replace existing application
         -t: allow test packages
         -d: allow version code downgrade (debuggable packages only)
         -p: partial application install (install-multiple only)
         -g: grant all runtime permissions
         --abi ABI: override platform's default ABI
         --instant: cause the app to be installed as an ephemeral install app
         --no-streaming: always push APK to device and invoke Package Manager as separate steps
         --streaming: force streaming APK directly into Package Manager
         --fastdeploy: use fast deploy
         --no-fastdeploy: prevent use of fast deploy
         --force-agent: force update of deployment agent when using fast deploy
         --date-check-agent: update deployment agent when local version is newer and using fast deploy
         --version-check-agent: update deployment agent when local version has different version code and using fast deploy
         (See also `adb shell pm help` for more options.)
     uninstall [-k] PACKAGE
         remove this app package from the device
         '-k': keep the data and cache directories

    debugging:
     bugreport [PATH]
         write bugreport to given PATH [default=bugreport.zip];
         if PATH is a directory, the bug report is saved in that directory.
         devices that don't support zipped bug reports output to stdout.
     jdwp                     list pids of processes hosting a JDWP transport
     logcat                   show device log (logcat --help for more)

    security:
     disable-verity           disable dm-verity checking on userdebug builds
     enable-verity            re-enable dm-verity checking on userdebug builds
     keygen FILE
         generate adb public/private key; private key stored in FILE,

    scripting:
     wait-for[-TRANSPORT]-STATE
         wait for device to be in the given state
         STATE: device, recovery, rescue, sideload, bootloader, or disconnect
         TRANSPORT: usb, local, or any [default=any]
     get-state                print offline | bootloader | device
     get-serialno             print <serial-number>
     get-devpath              print <device-path>
     remount [-R]
          remount partitions read-write. if a reboot is required, -R will
          will automatically reboot the device.
     reboot [bootloader|recovery|sideload|sideload-auto-reboot]
         reboot the device; defaults to booting system image but
         supports bootloader and recovery too. sideload reboots
         into recovery and automatically starts sideload mode,
         sideload-auto-reboot is the same but reboots after sideloading.
     sideload OTAPACKAGE      sideload the given full OTA package
     root                     restart adbd with root permissions
     unroot                   restart adbd without root permissions
     usb                      restart adbd listening on USB
     tcpip PORT               restart adbd listening on TCP on PORT

    internal debugging:
     start-server             ensure that there is a server running
     kill-server              kill the server if it is running
     reconnect                kick connection from host side to force reconnect
     reconnect device         kick connection from device side to force reconnect
     reconnect offline        reset offline/unauthorized devices to force reconnect

    environment variables:
     $ADB_TRACE
         comma-separated list of debug info to log:
         all,adb,sockets,packets,rwx,usb,sync,sysdeps,transport,jdwp
     $ADB_VENDOR_KEYS         colon-separated list of keys (files or directories)
     $ANDROID_SERIAL          serial number to connect to (see -s)
     $ANDROID_LOG_TAGS        tags to be used by logcat (see logcat --help)
     $ADB_LOCAL_TRANSPORT_MAX_PORT max emulator scan port (default 5585, 16 emus)


## adb devices

Prints a list of all attached emulator/device

    adb devices

In response, return serial number and state 

    e4b25377        device
    emulator-5554  device

设备基本连接状态：

- no device 没有连接的设备。
- offline 离线状态，设备没有响应，与 adb 断开连接。
- device 已经连接到 adb server，注意，这并不意味着设备的 Android 系统已经启动完毕可以操作。
- bootloader 连接的设备，处于 Fastboot 模式，可以通过 fastboot 命令交互，如 `fastboot reboot`。
- recovery 连接的设备，处于 Recovery 模式，可以通过 `adb reboot recovery` 命令进入此模式。
- sideload 连接的设备，处于 sideload 模式，可以进行升级的刷入，如 OTA package，也是基于 Recovery 模式执行的升级。

OTA - Over-the-Air Technology 无需刷机升级的方式 Android 系统提供的标准软件升级方式。它功能强大，提供了完全升级、增量升级模式，可以通过 SD 卡升级，也可以通过网络升级。

重启或关闭设备：

    adb reboot
    adb shell reboot -p

如果一台电脑连接不只一台设备，则可以使用 -s 指定要操作的设备串号：

    adb [-s serialNumber] reboot
    adb [-s ip] reboot

如果通过 TCPIP 连接，serialNumber 可以设置为 IP 地址及端口。

除了指定串号，以下几个选项都可以用来指定具体的设备：

     -d         use USB device (error if multiple devices connected)
     -e         use TCP/IP device (error if multiple TCP/IP devices available)
     -s SERIAL  use device with given serial (overrides $ANDROID_SERIAL)
     -t ID      use device with given transport id


## adb server
terminates the adb server process

    # ensure that there is a server running
    adb start-server

    # kill the server if it is running
    adb kill-server

Notes: kill the server if it is running. (terminal adb.exe process)

## USB wire connection

restarting ADB in USB mode.

    adb usb
    adb -d usb
    adb -e usb

## Wi-Fi connection
- Wi-Fi Alliance https://www.wi-fi.org

Wi-Fi 是一种无线联网技术，也称为移动热点。

受 Hi-Fi 术语影响，人们普遍误以为 WiFi 是指无线保真 Wireless Fidelity，并且即便是 Wi-Fi 联盟本身也经常在新闻稿和文件中使用这个词。但事实上，Wi-Fi 一词没有任何意义，也是没有全写的。

adb 可以通过 TCPIP 网络连接设备，也就可以实现 Wi-Fi 无线连接设备。


STEP 1. Connect to the device over USB.

    adb devices

    List of devices attached
    f621ea49        device

STEP 2. Restarting adbd in TCP mode port: 5555

    adb tcpip 5555

STEP 3. Find out the IP address of the Android device

    adb shell ip address show

    or, Settings -> About -> Status -> IP address. Remember the IP address, of the form #.#.#.#.

STEP 4. Connect device over WiFi

    # use ADB over Wi-Fi
    # adb connect <host>[:<port>]
    # connected to #.#.#.#:5555 with default port number
    adb connect #.#.#.#

STEP 5. Remove USB cable from device, and confirm you can still access device:

    adb devices

    List of devices attached
    #.#.#.#:5555 device

Notes: Make sure that your host is still connected to the same Wi-Fi network your Android device is.

## WiFi 连手机细节
- Android WiFi ADB by Dengz https://plugins.jetbrains.com/plugin/13156-android-wifiadb
- 彻底摆脱数据线 - 远程ADB调试小工具开发过程记录 https://juejin.cn/post/6883372832114507783
- http://stackoverflow.com/questions/2604727/how-can-i-connect-to-android-with-adb-over-tcp
- https://developer.android.google.cn/studio/command-line/adb#connect-to-a-device-over-wi-fi-android-11+

通过 WiFI 连 Android 手机就是同过同一个网路的 TCP 协议进行连接，示例，通过网路连接给手机安装 APK，需要打开手机的开发者模式，连接到手机 IP。

打开手机设置，点击 WLAN 设置，替换命令中的 IP 地址为设备上显示的：

    >adb tcpip 5555
    restarting in TCP mode port: 5555

    >adb devices
    List of devices attached
    f621ea49        device

    >adb connect 192.168.0.111:5555
    connected to 192.168.0.111:5555

    >adb devices
    List of devices attached
    f621ea49        device
    192.168.0.111:5555      device

    >adb install an.apk

当设置重启后，会进入 offline 状态，可以重新进行连接：

    adb -s 192.168.0.111 reboot
    adb disconnect
    adb tcpip 5555
    adb reconnect offline

对于 tcpip 连接方式需要通过 USB 连线重新设置，因为设备重启后，之前通过 adb tcpip 5555 配置的信息就失效了。 

Wifi 连接操作相当于在手机上执行以下设置：

    # 设置 usb 连接调试
    # setprop service.adb.tcp.port -1
    # 设置 tcpip 连接调试
    setprop service.adb.tcp.port 5555

    # 重启 adb 服务
    stop adbd
    start adbd

如果有 Root 权限，可以直接在手机上执行命令设置，如 JuiceSSH 工具可以执行命令，这样就可以不用通过 USB 初始设置。 

先设置 adb 服务端的 tcp 端口，再重启服务，这样就可以执行无线连接了，这些设置需要 Root 权限，在 Android 系统重启后保持失效。

可以直接将配置写入 /system/build.prop，端口匹配：service.adb.tcp.port=5555，设置后即使安卓设备重启后依然有效。

有个疑问，通过 adb 命令设置却不需要 Root 权限。 

Android 11 中采用了一种新的配对方式，从始至终都无需一根 usb 线即可开启 Android 设备与电脑的无线配对，要求 adb --version 工具版本 30.0.0 版本。

在手机上启用开发者模式 & USB 调试，一般是关于手机 --> 连续点击版本号，直到提示你已进入开发者模式，启用无线调试选项。

在已经成功在手机上开启无线调试服务，点击无线调试 --> 点击使用配对码配对设备，可以看到配对码、ip 和端口号。

在电脑上的终端终端运行

    # adb pair ipaddr:port
    adb pair 192.168.0.111:37933

使用脚本设置 tcpip 连接：

    @echo off
    setlocal

    REM Use a default env variable to find adb if possible
    if NOT "%AndroidSDK%" == "" set PATH=%PATH%;%AndroidSDK%\platform-tools

    REM If off is first parameter then we turn off the tcp connection.
    if "%1%" == "off" goto off

    REM Set vars
    set port=%1
    set int=%2
    if "%port%" == "" set port=5557
    if "%int%" == "" set int=wlan0

    REM Enable TCP
    adb -d wait-for-device tcpip %port%

    REM Get IP Address from device
    set shellCmd="ip addr show %int% | grep 'inet [0-9]{1,3}(\.[0-9]{1,3}){3}' -oE | grep '[0-9]{1,3}(\.[0-9]{1,3}){3}' -oE"
    for /f %%i in ('adb wait-for-device shell %shellCmd%') do set IP=%%i

    REM Connect ADB to device
    adb connect %IP%:%port%

    goto end

    :fail
    echo adbWifi [port] [interface]
    echo adbWifi off
    goto end

    :off
    adb wait-for-device usb

    :end

使用客户端 APP 设置：

```java
class WifiActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
            val wm = applicationContext.getSystemService(WIFI_SERVICE) as WifiManager
            val ip: String = Formatter.formatIpAddress(wm.connectionInfo.ipAddress)
            AlertDialog.Builder(this).setMessage("该程序仅工作在拥有root权限设备上，如果没有root，请连接usb并使用下列命令进行远程调试\nadb tcpip 5555\nadb connect $ip:5555").setPositiveButton(
                "确认"
            ) { _, _ ->
                val commands = arrayListOf(
                    "/system/bin/sh",
                    "setprop service.adb.tcp.port 5555",
                    "stop adbd",
                    "start adbd"
                )
                try {
                    RunAsRoot(commands)
                } catch (e: IOException) {
                    e.printStackTrace()
                }
            }.setCancelable(false).show()

    }

    private fun RunAsRoot(cmds: ArrayList<String>) {
        val p = Runtime.getRuntime().exec("su")
        val os = DataOutputStream(p.outputStream)
        for (tmpCmd in cmds) {
            os.writeBytes(
                """
                $tmpCmd
                
                """.trimIndent()
            )
        }
        os.writeBytes("exit\n")
        os.flush()
        val wm = applicationContext.getSystemService(WIFI_SERVICE) as WifiManager
        val ip: String = Formatter.formatIpAddress(wm.connectionInfo.ipAddress)
        AlertDialog.Builder(this).setMessage("设置完成，请在同一局域网下使用以下命令连接设备\nadb connect $ip:5555").setPositiveButton(
            "确认"
        ) { _, _ -> finish() }.setCancelable(false).show()
    }

}
```


# 🚩 Activity manager
- Call activity manager (am) https://developer.android.google.cn/studio/command-line/adb#am

应用管理命令是 am，

    adb -e shell am help

Python 脚本启动抖音 App，需要应用包名和初始 Activity：

    package_name = 'com.ss.android.ugc.aweme'
    activity_name = 'com.ss.android.ugc.aweme.splash.SplashActivity'
     
        
    def start_my_app(package_name, activity_name):
        """
        打开应用
        adb shell am start -n com.tencent.mm/.ui.LauncherUI
        :param package_name:
        :return:
        """
        os.popen('adb shell am start -n %s/%s' % (package_name, activity_name))

Intent 行为使用：

```sh
# 打开系统设置-输入法设置
adb shell am start -a android.settings.INPUT_METHOD_SETTINGS
# Music 和 Video启动方法：
am start -n com.android.music/com.android.music.MusicBrowserActivity
am start -n com.android.music/com.android.music.VideoBrowserActivity
am start -n com.android.music/com.android.music.MediaPlaybackActivity -d /sdcard/some.mp3
# Editor启动
am start -a android.intent.action.EDIT -d /sdcard/some.md -t "text/*"
# Camera启动方法：
am start -n com.android.camera/com.android.camera.Camera
# Browser启动方法：
am start -n com.android.browser/com.android.browser.browseractivity
am start -a android.intent.action.VIEW -d  http://www.163.com
# 拨打电话 :
am start -a android.intent.action.CALL -d tel:10000
# 启动 google map 定位到广州 :
am start -a android.intent.action.VIEW geo:0,0?q=guangzhou
```

Intent 对象大致包括 7 大属性，Action 和 Data 是最重要的两个属性，Type 则指定数据的 MIME 类型：

   + Action（动作）
	 + Data（数据）
	 + Category（类别）
	 + Type（数据类型）
	 + Component（组件）
	 + Extra（扩展信息）
	 + Flag（标志位）

Intent Action 意图行动会被 Android 解释为相应的软件响应，常见的 action 有：

Activity Actions：

		| 类型              	|  作用
		| ACTION_MAIN       	|  表示程序入口
		| ACTION_VIEW       	|  自动以最合适的方式显示Data
		| ACTION_EDIT       	|  提供可以编辑的
		| ACTION_PICK       	|  选择一个一条Data，并且返回它
		| ACTION_DAIL       	|  显示Data指向的号码在拨号界面Dailer上
		| ACTION_CALL       	|  拨打Data指向的号码
		| ACTION_SEND       	|  发送Data到指定的地方
		| ACTION_SENDTO     	|  发送多组Data到指定的地方
		| ACTION_RUN        	|  运行Data，不管Data是什么
		| ACTION_SEARCH     	|  执行搜索
		| ACTION_WEB_SEARCH 	|  执行网上搜索
		| ACRION_SYNC       	|  执同步一个Data
		| ACTION_INSERT     	|  添加一个空的项到容器中


## shell am 命令参考

    $ adb -e shell am help
    Activity manager (activity) commands:
      help
          Print this help text.
      start-activity [-D] [-N] [-W] [-P <FILE>] [--start-profiler <FILE>]
              [--sampling INTERVAL] [--streaming] [-R COUNT] [-S]
              [--track-allocation] [--user <USER_ID> | current] <INTENT>
          Start an Activity.  Options are:
          -D: enable debugging
          -N: enable native debugging
          -W: wait for launch to complete
          --start-profiler <FILE>: start profiler and send results to <FILE>
          --sampling INTERVAL: use sample profiling with INTERVAL microseconds
              between samples (use with --start-profiler)
          --streaming: stream the profiling output to the specified file
              (use with --start-profiler)
          -P <FILE>: like above, but profiling stops when app goes idle
          --attach-agent <agent>: attach the given agent before binding
          --attach-agent-bind <agent>: attach the given agent during binding
          -R: repeat the activity launch <COUNT> times.  Prior to each repeat,
              the top activity will be finished.
          -S: force stop the target app before starting the activity
          --track-allocation: enable tracking of object allocations
          --user <USER_ID> | current: Specify which user to run as; if not
              specified then run as the current user.
          --windowingMode <WINDOWING_MODE>: The windowing mode to launch the activity into.
          --activityType <ACTIVITY_TYPE>: The activity type to launch the activity as.     
          --display <DISPLAY_ID>: The display to launch the activity into.
      start-service [--user <USER_ID> | current] <INTENT>
          Start a Service.  Options are:
          --user <USER_ID> | current: Specify which user to run as; if not
              specified then run as the current user.
      start-foreground-service [--user <USER_ID> | current] <INTENT>
          Start a foreground Service.  Options are:
          --user <USER_ID> | current: Specify which user to run as; if not
              specified then run as the current user.
      stop-service [--user <USER_ID> | current] <INTENT>
          Stop a Service.  Options are:
          --user <USER_ID> | current: Specify which user to run as; if not
              specified then run as the current user.
      broadcast [--user <USER_ID> | all | current] <INTENT>
          Send a broadcast Intent.  Options are:
          --user <USER_ID> | all | current: Specify which user to send to; if not
              specified then send to all users.
          --receiver-permission <PERMISSION>: Require receiver to hold permission.
      instrument [-r] [-e <NAME> <VALUE>] [-p <FILE>] [-w]
              [--user <USER_ID> | current] [--no-hidden-api-checks]
              [--no-isolated-storage]
              [--no-window-animation] [--abi <ABI>] <COMPONENT>
          Start an Instrumentation.  Typically this target <COMPONENT> is in the
          form <TEST_PACKAGE>/<RUNNER_CLASS> or only <TEST_PACKAGE> if there
          is only one instrumentation.  Options are:
          -r: print raw results (otherwise decode REPORT_KEY_STREAMRESULT).  Use with
              [-e perf true] to generate raw output for performance measurements.
          -e <NAME> <VALUE>: set argument <NAME> to <VALUE>.  For test runners a
              common form is [-e <testrunner_flag> <value>[,<value>...]].
          -p <FILE>: write profiling data to <FILE>
          -m: Write output as protobuf to stdout (machine readable)
          -f <Optional PATH/TO/FILE>: Write output as protobuf to a file (machine
              readable). If path is not specified, default directory and file name will
              be used: /sdcard/instrument-logs/log-yyyyMMdd-hhmmss-SSS.instrumentation_data_proto
          -w: wait for instrumentation to finish before returning.  Required for
              test runners.
          --user <USER_ID> | current: Specify user instrumentation runs in;
              current user if not specified.
          --no-hidden-api-checks: disable restrictions on use of hidden API.
          --no-isolated-storage: don't use isolated storage sandbox and
              mount full external storage
          --no-window-animation: turn off window animations while running.
          --abi <ABI>: Launch the instrumented process with the selected ABI.
              This assumes that the process supports the selected ABI.
      trace-ipc [start|stop] [--dump-file <FILE>]
          Trace IPC transactions.
          start: start tracing IPC transactions.
          stop: stop tracing IPC transactions and dump the results to file.
          --dump-file <FILE>: Specify the file the trace should be dumped to.
      profile start [--user <USER_ID> current]
              [--sampling INTERVAL | --streaming] <PROCESS> <FILE>
          Start profiler on a process.  The given <PROCESS> argument
            may be either a process name or pid.  Options are:
          --user <USER_ID> | current: When supplying a process name,
              specify user of process to profile; uses current user if not
              specified.
          --sampling INTERVAL: use sample profiling with INTERVAL microseconds
              between samples.
          --streaming: stream the profiling output to the specified file.
      profile stop [--user <USER_ID> current] <PROCESS>
          Stop profiler on a process.  The given <PROCESS> argument
            may be either a process name or pid.  Options are:
          --user <USER_ID> | current: When supplying a process name,
              specify user of process to profile; uses current user if not
              specified.
      dumpheap [--user <USER_ID> current] [-n] [-g] <PROCESS> <FILE>
          Dump the heap of a process.  The given <PROCESS> argument may
            be either a process name or pid.  Options are:
          -n: dump native heap instead of managed heap
          -g: force GC before dumping the heap
          --user <USER_ID> | current: When supplying a process name,
              specify user of process to dump; uses current user if not specified.
      set-debug-app [-w] [--persistent] <PACKAGE>
          Set application <PACKAGE> to debug.  Options are:
          -w: wait for debugger when application starts
          --persistent: retain this value
      clear-debug-app
          Clear the previously set-debug-app.
      set-watch-heap <PROCESS> <MEM-LIMIT>
          Start monitoring pss size of <PROCESS>, if it is at or
          above <HEAP-LIMIT> then a heap dump is collected for the user to report.
      clear-watch-heap
          Clear the previously set-watch-heap.
      bug-report [--progress | --telephony]
          Request bug report generation; will launch a notification
            when done to select where it should be delivered. Options are:
         --progress: will launch a notification right away to show its progress.
         --telephony: will dump only telephony sections.
      force-stop [--user <USER_ID> | all | current] <PACKAGE>
          Completely stop the given application package.
      crash [--user <USER_ID>] <PACKAGE|PID>
          Induce a VM crash in the specified package or process
      kill [--user <USER_ID> | all | current] <PACKAGE>
          Kill all background processes associated with the given application.
      kill-all
          Kill all processes that are safe to kill (cached, etc).
      make-uid-idle [--user <USER_ID> | all | current] <PACKAGE>
          If the given application's uid is in the background and waiting to
          become idle (not allowing background services), do that now.
      monitor [--gdb <port>]
          Start monitoring for crashes or ANRs.
          --gdb: start gdbserv on the given port at crash/ANR
      watch-uids [--oom <uid>]
          Start watching for and reporting uid state changes.
          --oom: specify a uid for which to report detailed change messages.
      hang [--allow-restart]
          Hang the system.
          --allow-restart: allow watchdog to perform normal system restart
      restart
          Restart the user-space system.
      idle-maintenance
          Perform idle maintenance now.
      screen-compat [on|off] <PACKAGE>
          Control screen compatibility mode of <PACKAGE>.
      package-importance <PACKAGE>
          Print current importance of <PACKAGE>.
      to-uri [INTENT]
          Print the given Intent specification as a URI.
      to-intent-uri [INTENT]
          Print the given Intent specification as an intent: URI.
      to-app-uri [INTENT]
          Print the given Intent specification as an android-app: URI.
      switch-user <USER_ID>
          Switch to put USER_ID in the foreground, starting
          execution of that user if it is currently stopped.
      get-current-user
          Returns id of the current foreground user.
      start-user [-w] <USER_ID>
          Start USER_ID in background if it is currently stopped;
          use switch-user if you want to start the user in foreground.
          -w: wait for start-user to complete and the user to be unlocked.
      unlock-user <USER_ID> [TOKEN_HEX]
          Attempt to unlock the given user using the given authorization token.
      stop-user [-w] [-f] <USER_ID>
          Stop execution of USER_ID, not allowing it to run any
          code until a later explicit start or switch to it.
          -w: wait for stop-user to complete.
          -f: force stop even if there are related users that cannot be stopped.
      is-user-stopped <USER_ID>
          Returns whether <USER_ID> has been stopped or not.
      get-started-user-state <USER_ID>
          Gets the current state of the given started user.
      track-associations
          Enable association tracking.
      untrack-associations
          Disable and clear association tracking.
      get-uid-state <UID>
          Gets the process state of an app given its <UID>.
      attach-agent <PROCESS> <FILE>
        Attach an agent to the specified <PROCESS>, which may be either a process name or a PID.
      get-config [--days N] [--device] [--proto] [--display <DISPLAY_ID>]
          Retrieve the configuration and any recent configurations of the device.
          --days: also return last N days of configurations that have been seen.
          --device: also output global device configuration info.
          --proto: return result as a proto; does not include --days info.
          --display: Specify for which display to run the command; if not
              specified then run for the default display.
      supports-multiwindow
          Returns true if the device supports multiwindow.
      supports-split-screen-multi-window
          Returns true if the device supports split screen multiwindow.
      suppress-resize-config-changes <true|false>
          Suppresses configuration changes due to user resizing an activity/task.
      set-inactive [--user <USER_ID>] <PACKAGE> true|false
          Sets the inactive state of an app.
      get-inactive [--user <USER_ID>] <PACKAGE>
          Returns the inactive state of an app.
      set-standby-bucket [--user <USER_ID>] <PACKAGE> active|working_set|frequent|rare
          Puts an app in the standby bucket.
      get-standby-bucket [--user <USER_ID>] <PACKAGE>
          Returns the standby bucket of an app.
      send-trim-memory [--user <USER_ID>] <PROCESS>
              [HIDDEN|RUNNING_MODERATE|BACKGROUND|RUNNING_LOW|MODERATE|RUNNING_CRITICAL|COMPLETE]
          Send a memory trim event to a <PROCESS>.  May also supply a raw trim int level.
      display [COMMAND] [...]: sub-commands for operating on displays.
           move-stack <STACK_ID> <DISPLAY_ID>
               Move <STACK_ID> from its current display to <DISPLAY_ID>.
      stack [COMMAND] [...]: sub-commands for operating on activity stacks.
           move-task <TASK_ID> <STACK_ID> [true|false]
               Move <TASK_ID> from its current stack to the top (true) or
               bottom (false) of <STACK_ID>.
           resize <STACK_ID> <LEFT,TOP,RIGHT,BOTTOM>
               Change <STACK_ID> size and position to <LEFT,TOP,RIGHT,BOTTOM>.
           resize-animated <STACK_ID> <LEFT,TOP,RIGHT,BOTTOM>
               Same as resize, but allow animation.
           resize-docked-stack <LEFT,TOP,RIGHT,BOTTOM> [<TASK_LEFT,TASK_TOP,TASK_RIGHT,TASK_BOTTOM>]
               Change docked stack to <LEFT,TOP,RIGHT,BOTTOM>
               and supplying temporary different task bounds indicated by
               <TASK_LEFT,TOP,RIGHT,BOTTOM>
           move-top-activity-to-pinned-stack: <STACK_ID> <LEFT,TOP,RIGHT,BOTTOM>
               Moves the top activity from
               <STACK_ID> to the pinned stack using <LEFT,TOP,RIGHT,BOTTOM> for the
               bounds of the pinned stack.
           positiontask <TASK_ID> <STACK_ID> <POSITION>
               Place <TASK_ID> in <STACK_ID> at <POSITION>
           list
               List all of the activity stacks and their sizes.
           info <WINDOWING_MODE> <ACTIVITY_TYPE>
               Display the information about activity stack in <WINDOWING_MODE> and <ACTIVITY_TYPE>.
           remove <STACK_ID>
               Remove stack <STACK_ID>.
      task [COMMAND] [...]: sub-commands for operating on activity tasks.
           lock <TASK_ID>
               Bring <TASK_ID> to the front and don't allow other tasks to run.
           lock stop
               End the current task lock.
           resizeable <TASK_ID> [0|1|2|3]
               Change resizeable mode of <TASK_ID> to one of the following:
               0: unresizeable
               1: crop_windows
               2: resizeable
               3: resizeable_and_pipable
           resize <TASK_ID> <LEFT,TOP,RIGHT,BOTTOM>
               Makes sure <TASK_ID> is in a stack with the specified bounds.
               Forces the task to be resizeable and creates a stack if no existing stack
               has the specified bounds.
      update-appinfo <USER_ID> <PACKAGE_NAME> [<PACKAGE_NAME>...]
          Update the ApplicationInfo objects of the listed packages for <USER_ID>
          without restarting any processes.
      write
          Write all pending state to storage.

    <INTENT> specifications include these flags and arguments:
        [-a <ACTION>] [-d <DATA_URI>] [-t <MIME_TYPE>] [-i <IDENTIFIER>]
        [-c <CATEGORY> [-c <CATEGORY>] ...]
        [-n <COMPONENT_NAME>]
        [-e|--es <EXTRA_KEY> <EXTRA_STRING_VALUE> ...]
        [--esn <EXTRA_KEY> ...]
        [--ez <EXTRA_KEY> <EXTRA_BOOLEAN_VALUE> ...]
        [--ei <EXTRA_KEY> <EXTRA_INT_VALUE> ...]
        [--el <EXTRA_KEY> <EXTRA_LONG_VALUE> ...]
        [--ef <EXTRA_KEY> <EXTRA_FLOAT_VALUE> ...]
        [--eu <EXTRA_KEY> <EXTRA_URI_VALUE> ...]
        [--ecn <EXTRA_KEY> <EXTRA_COMPONENT_NAME_VALUE>]
        [--eia <EXTRA_KEY> <EXTRA_INT_VALUE>[,<EXTRA_INT_VALUE...]]
            (mutiple extras passed as Integer[])
        [--eial <EXTRA_KEY> <EXTRA_INT_VALUE>[,<EXTRA_INT_VALUE...]]
            (mutiple extras passed as List<Integer>)
        [--ela <EXTRA_KEY> <EXTRA_LONG_VALUE>[,<EXTRA_LONG_VALUE...]]
            (mutiple extras passed as Long[])
        [--elal <EXTRA_KEY> <EXTRA_LONG_VALUE>[,<EXTRA_LONG_VALUE...]]
            (mutiple extras passed as List<Long>)
        [--efa <EXTRA_KEY> <EXTRA_FLOAT_VALUE>[,<EXTRA_FLOAT_VALUE...]]
            (mutiple extras passed as Float[])
        [--efal <EXTRA_KEY> <EXTRA_FLOAT_VALUE>[,<EXTRA_FLOAT_VALUE...]]
            (mutiple extras passed as List<Float>)
        [--esa <EXTRA_KEY> <EXTRA_STRING_VALUE>[,<EXTRA_STRING_VALUE...]]
            (mutiple extras passed as String[]; to embed a comma into a string,
             escape it using "\,")
        [--esal <EXTRA_KEY> <EXTRA_STRING_VALUE>[,<EXTRA_STRING_VALUE...]]
            (mutiple extras passed as List<String>; to embed a comma into a string,
             escape it using "\,")
        [-f <FLAG>]
        [--grant-read-uri-permission] [--grant-write-uri-permission]
        [--grant-persistable-uri-permission] [--grant-prefix-uri-permission]
        [--debug-log-resolution] [--exclude-stopped-packages]
        [--include-stopped-packages]
        [--activity-brought-to-front] [--activity-clear-top]
        [--activity-clear-when-task-reset] [--activity-exclude-from-recents]
        [--activity-launched-from-history] [--activity-multiple-task]
        [--activity-no-animation] [--activity-no-history]
        [--activity-no-user-action] [--activity-previous-is-top]
        [--activity-reorder-to-front] [--activity-reset-task-if-needed]
        [--activity-single-top] [--activity-clear-task]
        [--activity-task-on-home] [--activity-match-external]
        [--receiver-registered-only] [--receiver-replace-pending]
        [--receiver-foreground] [--receiver-no-abort]
        [--receiver-include-background]
        [--selector]
        [<URI> | <PACKAGE> | <COMPONENT>]


# 🚩 Package Manager
- Call package manager (pm) https://developer.android.google.cn/studio/command-line/adb#pm

## adb install apk
Pushes an Android application (specified as a full path to an .apk file) to an emulator/device.

    adb install [option] <path>
    adb install test.apk
    adb install -l test.apk                     # forward lock application
    adb install -r test.apk                     # replace existing application
    adb install -t test.apk                     # allow test packages
    adb install -s test.apk                     # install application on sdcard
    adb install -d test.apk                     # allow version code downgrade
    adb install -p test.apk                     # partial application install


## adb uninstall
Removes a package from the emulator/device.

    adb uninstall [options] <PACKAGE>
    adb uninstall com.test.app

    # Keep the data and cache directories around after package removal.
    adb uninstall -k com.test.app

使用 Android Asset Packaging Tool 工具查看元数据，查询软件包名：

    aapt dump xmltree test.apk AndroidManifest.xml | findstr package


## shell pm list packages
Prints all packages, optionally only those whose package name contains the text in <FILTER>.

    adb shell pm list packages [options] <FILTER>
    adb shell pm list packages
    adb shell pm list packages -f               # See their associated file.
    adb shell pm list packages -d               # Filter to only show disabled packages.
    adb shell pm list packages -e               # Filter to only show enabled packages.
    adb shell pm list packages -s               # Filter to only show system packages.
    adb shell pm list packages -3               # Filter to only show third party packages.
    adb shell pm list packages -i               # See the installer for the packages.
    adb shell pm list packages -u               # Also include uninstalled packages.
    adb shell pm list packages --user <USER_ID> # The user space to query.

## shell pm & users

    adb shell pm list users

    adb shell pm create-user Jeango
    Success: created user id 10
    
    adb shell pm remove-user 10


## shell pm path

Print the path to the APK of the given <PACKAGE>.

    adb shell pm path <PACKAGE>

    adb shell pm path com.android.phone
    package:/system/priv-app/TeleService/TeleService.apk

    adb shell pm path com.ss.android.ugc.aweme
    package:/data/app/com.ss.android.ugc.aweme-ZCKkrVBaqFFNI0mU79mStg==/base.apk

## shell pm clear
Deletes all data associated with a package.

    adb shell pm clear <PACKAGE>

    adb shell pm clear com.test.abc

Notes: clearing app data, cache

## shell pm 命令参考

    $ adb -d shell pm
    Package manager (package) commands:
      help
        Print this help text.

      path [--user USER_ID] PACKAGE
        Print the path to the .apk of the given PACKAGE.

      dump PACKAGE
        Print various system state associated with the given PACKAGE.

      list features
        Prints all features of the system.

      has-feature FEATURE_NAME [version]
        Prints true and returns exit status 0 when system has a FEATURE_NAME,
        otherwise prints false and returns exit status 1

      list instrumentation [-f] [TARGET-PACKAGE]
        Prints all test packages; optionally only those targeting TARGET-PACKAGE
        Options:
          -f: dump the name of the .apk file containing the test package

      list libraries
        Prints all system libraries.

      list packages [-f] [-d] [-e] [-s] [-3] [-i] [-l] [-u] [-U]
          [--show-versioncode] [--apex-only] [--uid UID] [--user USER_ID] [FILTER]
        Prints all packages; optionally only those whose name contains
        the text in FILTER.  Options are:
          -f: see their associated file
          -a: all known packages (but excluding APEXes)
          -d: filter to only show disabled packages
          -e: filter to only show enabled packages
          -s: filter to only show system packages
          -3: filter to only show third party packages
          -i: see the installer for the packages
          -l: ignored (used for compatibility with older releases)
          -U: also show the package UID
          -u: also include uninstalled packages
          --show-versioncode: also show the version code
          --apex-only: only show APEX packages
          --uid UID: filter to only show packages with the given UID
          --user USER_ID: only list packages belonging to the given user

      list permission-groups
        Prints all known permission groups.

      list permissions [-g] [-f] [-d] [-u] [GROUP]
        Prints all known permissions; optionally only those in GROUP.  Options are:
          -g: organize by group
          -f: print all information
          -s: short summary
          -d: only list dangerous permissions
          -u: list only the permissions users will see

      resolve-activity [--brief] [--components] [--query-flags FLAGS]
           [--user USER_ID] INTENT
        Prints the activity that resolves to the given INTENT.

      query-activities [--brief] [--components] [--query-flags FLAGS]
           [--user USER_ID] INTENT
        Prints all activities that can handle the given INTENT.

      query-services [--brief] [--components] [--query-flags FLAGS]
           [--user USER_ID] INTENT
        Prints all services that can handle the given INTENT.

      query-receivers [--brief] [--components] [--query-flags FLAGS]
           [--user USER_ID] INTENT
        Prints all broadcast receivers that can handle the given INTENT.

      install [-lrtsfdgw] [-i PACKAGE] [--user USER_ID|all|current]
           [-p INHERIT_PACKAGE] [--install-location 0/1/2]
           [--install-reason 0/1/2/3/4] [--originating-uri URI]
           [--referrer URI] [--abi ABI_NAME] [--force-sdk]
           [--preload] [--instantapp] [--full] [--dont-kill]
           [--enable-rollback]
           [--force-uuid internal|UUID] [--pkg PACKAGE] [-S BYTES] [--apex]
           [PATH|-]
        Install an application.  Must provide the apk data to install, either as a
        file path or '-' to read from stdin.  Options are:
          -l: forward lock application
          -R: disallow replacement of existing application
          -t: allow test packages
          -i: specify package name of installer owning the app
          -s: install application on sdcard
          -f: install application on internal flash
          -d: allow version code downgrade (debuggable packages only)
          -p: partial application install (new split on top of existing pkg)
          -g: grant all runtime permissions
          -S: size in bytes of package, required for stdin
          --user: install under the given user.
          --dont-kill: installing a new feature split, don't kill running app
          --restrict-permissions: don't whitelist restricted permissions at install
          --originating-uri: set URI where app was downloaded from
          --referrer: set URI that instigated the install of the app
          --pkg: specify expected package name of app being installed
          --abi: override the default ABI of the platform
          --instantapp: cause the app to be installed as an ephemeral install app
          --full: cause the app to be installed as a non-ephemeral full app
          --install-location: force the install location:
              0=auto, 1=internal only, 2=prefer external
          --install-reason: indicates why the app is being installed:
              0=unknown, 1=admin policy, 2=device restore,
              3=device setup, 4=user request
          --force-uuid: force install on to disk volume with given UUID
          --apex: install an .apex file, not an .apk

      install-create [-lrtsfdg] [-i PACKAGE] [--user USER_ID|all|current]
           [-p INHERIT_PACKAGE] [--install-location 0/1/2]
           [--install-reason 0/1/2/3/4] [--originating-uri URI]
           [--referrer URI] [--abi ABI_NAME] [--force-sdk]
           [--preload] [--instantapp] [--full] [--dont-kill]
           [--force-uuid internal|UUID] [--pkg PACKAGE] [--apex] [-S BYTES]
           [--multi-package] [--staged]
        Like "install", but starts an install session.  Use "install-write"
        to push data into the session, and "install-commit" to finish.

      install-write [-S BYTES] SESSION_ID SPLIT_NAME [PATH|-]
        Write an apk into the given install session.  If the path is '-', data
        will be read from stdin.  Options are:
          -S: size in bytes of package, required for stdin

      install-add-session MULTI_PACKAGE_SESSION_ID CHILD_SESSION_IDs
        Add one or more session IDs to a multi-package session.

      install-commit SESSION_ID
        Commit the given active install session, installing the app.

      install-abandon SESSION_ID
        Delete the given active install session.

      set-install-location LOCATION
        Changes the default install location.  NOTE this is only intended for debugging;
        using this can cause applications to break and other undersireable behavior.
        LOCATION is one of:
        0 [auto]: Let system decide the best location
        1 [internal]: Install on internal device storage
        2 [external]: Install on external media

      get-install-location
        Returns the current install location: 0, 1 or 2 as per set-install-location.

      move-package PACKAGE [internal|UUID]

      move-primary-storage [internal|UUID]

      pm uninstall [-k] [--user USER_ID] [--versionCode VERSION_CODE] PACKAGE [SPLIT]
        Remove the given package name from the system.  May remove an entire app
        if no SPLIT name is specified, otherwise will remove only the split of the
        given app.  Options are:
          -k: keep the data and cache directories around after package removal.
          --user: remove the app from the given user.
          --versionCode: only uninstall if the app has the given version code.

      clear [--user USER_ID] PACKAGE
        Deletes all data associated with a package.

      enable [--user USER_ID] PACKAGE_OR_COMPONENT
      disable [--user USER_ID] PACKAGE_OR_COMPONENT
      disable-user [--user USER_ID] PACKAGE_OR_COMPONENT
      disable-until-used [--user USER_ID] PACKAGE_OR_COMPONENT
      default-state [--user USER_ID] PACKAGE_OR_COMPONENT
        These commands change the enabled state of a given package or
        component (written as "package/class").

      hide [--user USER_ID] PACKAGE_OR_COMPONENT
      unhide [--user USER_ID] PACKAGE_OR_COMPONENT

      suspend [--user USER_ID] TARGET-PACKAGE
        Suspends the specified package (as user).

      unsuspend [--user USER_ID] TARGET-PACKAGE
        Unsuspends the specified package (as user).

      grant [--user USER_ID] PACKAGE PERMISSION
      revoke [--user USER_ID] PACKAGE PERMISSION
        These commands either grant or revoke permissions to apps.  The permissions
        must be declared as used in the app's manifest, be runtime permissions
        (protection level dangerous), and the app targeting SDK greater than Lollipop MR1.

      reset-permissions
        Revert all runtime permissions to their default state.

      set-permission-enforced PERMISSION [true|false]

      get-privapp-permissions TARGET-PACKAGE
        Prints all privileged permissions for a package.

      get-privapp-deny-permissions TARGET-PACKAGE
        Prints all privileged permissions that are denied for a package.

      get-oem-permissions TARGET-PACKAGE
        Prints all OEM permissions for a package.

      set-app-link [--user USER_ID] PACKAGE {always|ask|never|undefined}
      get-app-link [--user USER_ID] PACKAGE

      trim-caches DESIRED_FREE_SPACE [internal|UUID]
        Trim cache files to reach the given free space.

      create-user [--profileOf USER_ID] [--managed] [--restricted] [--ephemeral]
          [--guest] USER_NAME
        Create a new user with the given USER_NAME, printing the new user identifier
        of the user.

      remove-user USER_ID
        Remove the user with the given USER_IDENTIFIER, deleting all data
        associated with that user

      set-user-restriction [--user USER_ID] RESTRICTION VALUE

      get-max-users

      get-max-running-users

      compile [-m MODE | -r REASON] [-f] [-c] [--split SPLIT_NAME]
              [--reset] [--check-prof (true | false)] (-a | TARGET-PACKAGE)
        Trigger compilation of TARGET-PACKAGE or all packages if "-a".  Options are:
          -a: compile all packages
          -c: clear profile data before compiling
          -f: force compilation even if not needed
          -m: select compilation mode
              MODE is one of the dex2oat compiler filters:
                assume-verified
                extract
                verify
                quicken
                space-profile
                space
                speed-profile
                speed
                everything
          -r: select compilation reason
              REASON is one of:
                first-boot
                boot
                install
                bg-dexopt
                ab-ota
                inactive
                shared
                secondary
                booting
          --reset: restore package to its post-install state
          --check-prof (true | false): look at profiles when doing dexopt?
          --secondary-dex: compile app secondary dex files
          --split SPLIT: compile only the given split name
          --compile-layouts: compile layout resources for faster inflation

      force-dex-opt PACKAGE
        Force immediate execution of dex opt for the given PACKAGE.

      bg-dexopt-job
        Execute the background optimizations immediately.
        Note that the command only runs the background optimizer logic. It may
        overlap with the actual job but the job scheduler will not be able to
        cancel it. It will also run even if the device is not in the idle
        maintenance mode.

      reconcile-secondary-dex-files TARGET-PACKAGE
        Reconciles the package secondary dex files with the generated oat files.

      dump-profiles TARGET-PACKAGE
        Dumps method/class profile files to
        /data/misc/profman/TARGET-PACKAGE.txt

      snapshot-profile TARGET-PACKAGE [--code-path path]
        Take a snapshot of the package profiles to
        /data/misc/profman/TARGET-PACKAGE[-code-path].prof
        If TARGET-PACKAGE=android it will take a snapshot of the boot image

      set-home-activity [--user USER_ID] TARGET-COMPONENT
        Set the default home activity (aka launcher).
        TARGET-COMPONENT can be a package name (com.package.my) or a full
        component (com.package.my/component.name). However, only the package name
        matters: the actual component used will be determined automatically from
        the package.

      set-installer PACKAGE INSTALLER
        Set installer package name

      get-instantapp-resolver
        Return the name of the component that is the current instant app installer.

      set-harmful-app-warning [--user <USER_ID>] <PACKAGE> [<WARNING>]
        Mark the app as harmful with the given warning message.

      get-harmful-app-warning [--user <USER_ID>] <PACKAGE>
        Return the harmful app warning message for the given app, if present

      uninstall-system-updates
        Remove updates to all system applications and fall back to their /system version.

      get-moduleinfo [--all | --installed] [module-name]
        Displays module info. If module-name is specified only that info is shown
        By default, without any argument only installed modules are shown.
          --all: show all module info
          --installed: show only installed modules

    <INTENT> specifications include these flags and arguments:
        [-a <ACTION>] [-d <DATA_URI>] [-t <MIME_TYPE>] [-i <IDENTIFIER>]
        [-c <CATEGORY> [-c <CATEGORY>] ...]
        [-n <COMPONENT_NAME>]
        [-e|--es <EXTRA_KEY> <EXTRA_STRING_VALUE> ...]
        [--esn <EXTRA_KEY> ...]
        [--ez <EXTRA_KEY> <EXTRA_BOOLEAN_VALUE> ...]
        [--ei <EXTRA_KEY> <EXTRA_INT_VALUE> ...]
        [--el <EXTRA_KEY> <EXTRA_LONG_VALUE> ...]
        [--ef <EXTRA_KEY> <EXTRA_FLOAT_VALUE> ...]
        [--eu <EXTRA_KEY> <EXTRA_URI_VALUE> ...]
        [--ecn <EXTRA_KEY> <EXTRA_COMPONENT_NAME_VALUE>]
        [--eia <EXTRA_KEY> <EXTRA_INT_VALUE>[,<EXTRA_INT_VALUE...]]
            (mutiple extras passed as Integer[])
        [--eial <EXTRA_KEY> <EXTRA_INT_VALUE>[,<EXTRA_INT_VALUE...]]
            (mutiple extras passed as List<Integer>)
        [--ela <EXTRA_KEY> <EXTRA_LONG_VALUE>[,<EXTRA_LONG_VALUE...]]
            (mutiple extras passed as Long[])
        [--elal <EXTRA_KEY> <EXTRA_LONG_VALUE>[,<EXTRA_LONG_VALUE...]]
            (mutiple extras passed as List<Long>)
        [--efa <EXTRA_KEY> <EXTRA_FLOAT_VALUE>[,<EXTRA_FLOAT_VALUE...]]
            (mutiple extras passed as Float[])
        [--efal <EXTRA_KEY> <EXTRA_FLOAT_VALUE>[,<EXTRA_FLOAT_VALUE...]]
            (mutiple extras passed as List<Float>)
        [--esa <EXTRA_KEY> <EXTRA_STRING_VALUE>[,<EXTRA_STRING_VALUE...]]
            (mutiple extras passed as String[]; to embed a comma into a string,
             escape it using "\,")
        [--esal <EXTRA_KEY> <EXTRA_STRING_VALUE>[,<EXTRA_STRING_VALUE...]]
            (mutiple extras passed as List<String>; to embed a comma into a string,
             escape it using "\,")
        [-f <FLAG>]
        [--grant-read-uri-permission] [--grant-write-uri-permission]
        [--grant-persistable-uri-permission] [--grant-prefix-uri-permission]
        [--debug-log-resolution] [--exclude-stopped-packages]
        [--include-stopped-packages]
        [--activity-brought-to-front] [--activity-clear-top]
        [--activity-clear-when-task-reset] [--activity-exclude-from-recents]
        [--activity-launched-from-history] [--activity-multiple-task]
        [--activity-no-animation] [--activity-no-history]
        [--activity-no-user-action] [--activity-previous-is-top]
        [--activity-reorder-to-front] [--activity-reset-task-if-needed]
        [--activity-single-top] [--activity-clear-task]
        [--activity-task-on-home] [--activity-match-external]
        [--receiver-registered-only] [--receiver-replace-pending]
        [--receiver-foreground] [--receiver-no-abort]
        [--receiver-include-background]
        [--selector]
        [<URI> | <PACKAGE> | <COMPONENT>]

# 🚩 File Manager
## adb pull
Download a specified file from an emulator/device to your computer.

    adb pull <remote> [local]

    adb pull /sdcard/demo.mp4
    download /sdcard/demo.mp4  to PWD directory.

    adb pull /sdcard/demo.mp4 e:\
    download /sdcard/demo.mp4 to drive E.

    adb pull /sdcard/music/驿动的心.m4a
    adb pull /sdcard/music/karaok/landscape.mp4
    /sdcard/music/karaok/landscape.mp4: 1 file pulled. 1.7 MB/s (1357154 bytes in 0.774s)

## adb push
Upload a specified file from your computer to an emulator/device.

    adb push <local> <remote>

    adb push test.apk /sdcard
    Copies <PWD>/test.apk to /sdcard directory.

    adb push d:\test.apk /sdcard
    Copies d:\test.apk to /sdcard directory.

    adb push c:/mysql.txt /sdcard/download
    c:/mysql.txt: 1 file pushed. 1.4 MB/s (114709 bytes in 0.080s)


## sync 同步

adb sync 命令同步 /data 或 /system 下的数据，如果不指定目录，将同步更新 /data 和 /system：

    adb sync [directory]

指定同步的目录，ANDROID_PRODUCT_OUT 指定目录要包含 system 或者 data 目录，修改过的文件会同步到安卓端：

    adb sync
    adb sync system
    adb sync data

adb sync 命令只能同步 data 和 system 目录

指定环境变量：

    set ANDROID_PRODUCT_OUT=.\android
    export ANDROID_PRODUCT_OUT=out/target/product/$target_project

注意，adb shell sync 表示在 shell 中执行 sync 命令将内存缓冲区中的数据写入到磁盘。


## adb shell ls
list directory contents

    ls [options] <directory>

STEP 1.

    adb shell ls /sdcard/music
    adb shell

STEP 2.

    ls
    ls -a do not hide entries starting with
    ls -i print index number of each file
    ls -s print size of each file, in blocks
    ls -n list numeric UIDs and GIDs
    ls -R list subdirectories recursively

Notes: press Ctrl-C to stop

## adb shell cd
change directory

    cd <directory>

STEP 1.

    adb shell
STEP 2.

    cd /system

## adb shell rm
remove files or directories

    rm [options] <files or directory>

    adb shell rm /sdcard/test.txt

    adb shell rm -f /sdcard/test.txt   # force remove without prompt
    adb shell rm -r /sdcard/tmp        # remove the contents of directories recursively
    adb shell rm -d /sdcard/tmp        # remove directory, even if it is a non-empty directory
    adb shell rm -i /sdcard/test.txt   # prompt before any removal

Notes: rm -d equal rmdir command

## adb shell mkdir
make directories

    mkdir [options] <directory name>

    mkdir /sdcard/tmp
    mkdir -m 777 /sdcard/tmp set permission mode
    mkdir -p /sdcard/tmp/sub1/sub2 create parent directories as needed

## adb shell touch
create empty file or change file timestamps

    touch [options] <file>

    adb shell touch /sdcard/tmp/test.txt
    adb shell ls /sdcard/tmp

## adb shell pwd
print current working directory location.

    adb shell pwd

## adb shell cp
copy files and directories

    cp [options] <source> <dest>

    adb shell cp /sdcard/test.txt /sdcard/demo.txt

## adb shell mv
move or rename files

    mv [options] <source> <dest>

    adb shellmv /sdcard/tmp /system/tmp move
    adb shellmv /sdcard/tmp /sdcard/test rename


# 🚩 Shell Service

服务调用：

    $ adb shell service -?
    Usage: service [-h|-?]
           service list
           service check SERVICE
           service call SERVICE CODE [i32 N | i64 N | f N | d N | s16 STR ] ...
    Options:
       i32: Write the 32-bit integer N into the send parcel.
       i64: Write the 64-bit integer N into the send parcel.
       f:   Write the 32-bit single-precision number N into the send parcel.
       d:   Write the 64-bit double-precision number N into the send parcel.
       s16: Write the UTF-16 string STR into the send parcel.

## service call clipboard
- https://stackoverflow.com/questions/14243427/set-clipboard-text-via-adb-shell-as-of-api-level-11
- http://grepcode.com/file/repository.grepcode.com/java/ext/com.google.android/android/4.1.2_r1/android/content/IClipboard.java/

示范 adb shell 调用剪贴板服务：

    $ adb shell "service list | grep clipboard"
    # or use findstr in Windows system 
    # adb shell service list | findstr "clipboard"
    30  clipboard: [android.content.IClipboard]

    # getClipboardText
    adb shell service call clipboard 1 i32

    # setClipboardText 文本内容 
    adb shell service call clipboard 2 i64 123
    adb shell service call clipboard 2 s16 abc

    service call clipboard 2 i32 1 i32 18 s16 thisisinsertedtext

查询 Android Clipboard 的源码，可以知道提供了什么服务：

    // API < 11
    static final int TRANSACTION_getClipboardText 1
    static final int TRANSACTION_hasClipboardText 3
    static final int TRANSACTION_setClipboardText 2
    // API >= 11
    static final int TRANSACTION_setPrimaryClip = 1
    static final int TRANSACTION_getPrimaryClip = 2
    static final int TRANSACTION_getPrimaryClipDescription = 3
    static final int TRANSACTION_hasPrimaryClip = 4
    static final int TRANSACTION_addPrimaryClipChangedListener = 5
    static final int TRANSACTION_removePrimaryClipChangedListener = 6
    static final int TRANSACTION_hasClipboardText = 7

clipboard service codes:

- 1 -> getClipboardText
- 2 -> setClipboardText
- 3 -> hasClipboardText

返回结果 `Result: Parcel(00000000    '....')` 表示正确执行，测试发现 getClipboardText 返回 No Items 提示。

就 Android 目前的各版本系统市场占有率而言，使用 ADB 操作 Clipboard 是一个不可行的方案了。



# 🚩 Network

## adb forward socket connections

端口转发，即将一台设备接收到的 socket 连接请求，转发给另一台设备进行处理。

    adb forward <local> <remote>

    # set up forwarding of host port 8000 to emulator/device port 9000
    adb forward tcp:8000 tcp:9000 

The following example sets up forwarding of host port 6100 to local:logd:

    adb forward tcp:6100 local:logd


## adb shell netstat
network statistics

    adb shell netstat

## adb shell ping
test the connection and latency between two network connection.

ping [-aAbBdDfhLnOqrRUvV] [-c count] [-i interval] [-I interface]
[-m mark] [-M pmtudisc_option] [-l preload] [-p pattern] [-Q tos]
[-s packetsize] [-S sndbuf] [-t ttl] [-T timestamp_option]
[-w deadline] [-W timeout] [hop1 ...] destination

    adb shell ping www.google.com
    adb shell ping www.google.com -c 4

Notes: press Ctrl-C to stop ping

## adb shell netcfg
configure and manage network connections via profiles

    netcfg [<interface> {dhcp|up|down}]

    adb shell netcfg

## adb shell ip

参考 [linux ip 命令和 ifconfig 命令](https://blog.csdn.net/freeking101/article/details/68939059)

    shell ip address show


# 🚩 Screen

## adb shell screencap

screencap 抓屏工具：

    $ adb shell screencap -h
    usage: screencap [-hp] [-d display-id] [FILENAME]
       -h: this message
       -p: save the file as a png.
       -d: specify the physical display ID to capture (default: 19260309953136513)
           see "dumpsys SurfaceFlinger --display-id" for valid display IDs.
    If FILENAME ends with .png it will be saved as a png.
    If FILENAME is not given, the results will be printed to stdout.

taking a screenshot of a device display.

    adb shell screencap [<filename>]

    adb shell "screencap -p >/sdcard/screen.png"
    adb shell screencap /sdcard/screen.png

download the file from the device

    adb pull /sdcard/screen.png

    adb shell "screencap -p > /sdcard/Download/screen.png" & adb pull /sdcard/Download/screen.png

## adb shell screenrecord [4.4+]

录屏工具：

    $ adb shell screenrecord --help
    Usage: screenrecord [options] <filename>

    Android screenrecord v1.2.  Records the device's display to a .mp4 file.

    Options:
    --size WIDTHxHEIGHT
        Set the video size, e.g. "1280x720".  Default is the device's main
        display resolution (if supported), 1280x720 if not.  For best results,
        use a size supported by the AVC encoder.
    --bit-rate RATE
        Set the video bit rate, in bits per second.  Value may be specified as
        bits or megabits, e.g. '4000000' is equivalent to '4M'.  Default 20Mbps.
    --bugreport
        Add additional information, such as a timestamp overlay, that is helpful
        in videos captured to illustrate bugs.
    --time-limit TIME
        Set the maximum recording time, in seconds.  Default / maximum is 180.
    --verbose
        Display interesting information on stdout.
    --help
        Show this message.

    Recording continues until Ctrl-C is hit or the time limit is reached.

recording the display of devices running Android 4.4 (API level 19) and higher.

    adb shell screenrecord [options] <filename>

    adb shell screenrecord /sdcard/demo.mp4
    (press Ctrl-C to stop recording)

download the file from the device

    adb pull /sdcard/demo.mp4

Notes: Stop the screen recording by pressing Ctrl-C, otherwise the recording stops automatically at three minutes or the time limit set by --time-limit.

    adb shell screenrecord --size <WIDTHxHEIGHT>

Sets the video size: 1280x720. The default value is the device's native display resolution (if supported), 1280x720 if not. For best results, use a size supported by your device's Advanced Video Coding (AVC) encoder.

    adb shell screenrecord --bit-rate <RATE>

Sets the video bit rate for the video, in megabits per second. The default value is 4Mbps. You can increase the bit rate to improve video quality, but doing so results in larger movie files. The following example sets the recording bit rate to 5Mbps: adb shell screenrecord --bit-rate 5000000 /sdcard/demo.mp4

    adb shell screenrecord --time-limit <TIME>

Sets the maximum recording time, in seconds. The default and maximum value is 180 (3 minutes).

    adb shell screenrecord --rotate

Rotates the output 90 degrees. This feature is experimental.

    adb shell screenrecord --verbose

Displays log information on the command-line screen. If you do not set this option, the utility does not display any information while running.

## adb shell input 
- https://stackoverflow.com/questions/13850192/how-to-lock-android-screen-via-adb
- adb shell input keyevent code https://www.cnblogs.com/chengchengla1990/p/4515108.html
- Interaction in Android https://source.android.google.cn/docs/core/interaction
- The Magic Mask for Android https://github.com/topjohnwu/Magisk
- KernelISU https://github.com/tiann/KernelSU
- Espresso Testing framework https://developer.android.google.cn/training/testing/espresso

Android 系统输入事件模拟命令：

    $ adb shell input help
    Usage: input [<source>] [-d DISPLAY_ID] <command> [<arg>...]

    The sources are:
          dpad
          keyboard
          mouse
          touchpad
          gamepad
          touchnavigation
          joystick
          touchscreen
          stylus
          trackball

    -d: specify the display ID.
          (Default: -1 for key event, 0 for motion event if not specified.)
    The commands and default sources are:
          text <string> (Default: touchscreen)
          keyevent [--longpress] <key code number or name> ... (Default: keyboard)
          tap <x> <y> (Default: touchscreen)
          swipe <x1> <y1> <x2> <y2> [duration(ms)] (Default: touchscreen)
          draganddrop <x1> <y1> <x2> <y2> [duration(ms)] (Default: touchscreen)
          press (Default: trackball)
          roll <dx> <dy> (Default: trackball)
          event <DOWN|UP|MOVE> <x> <y> (Default: touchscreen)
          tmode <tmode>

产生事件的设备就是事件源，典型的笔记本上的触摸板 touchpad 和手机上的电容触屏 touchscreen。

Android 自动化测试 UI Automator Viewer 可以很方便地使用这些命令，也可以查看对应 UI 组件的坐标位置，Android SDK 就带有这个工具。

也可以使用抓屏，通过图像获得目标坐标信息：

    adb shell screencap /sdcard/Download/screen.png
    adb shell "screencap -p > /sdcard/Download/screen.png" & adb pull /sdcard/Download/screen.png

事件类型：

- text 相当于输入文字内容，空格具有功能，作输入字符需要键盘事件。输入中文可以使用 ADBKeyBoard.apk，或输入法。
- keyevent 相当于手机物理或是屏幕按键。
- swipe 相当于滑动。
- tap 实现的是 DOWN_UP 事件，也就是点击操作，后面两个参数是点击的坐标 x,y。

示范：

    # 向文本框中输入文本：
    adb shell input text sometext

    # 模拟按下数字0键
    adb shell input keyevent "KEYCODE_0"

    # 模拟按下返回键
    adb shell input keyevent 4

    # tap - 点击触摸屏
    # adb shell input [touchscreen|touchpad] tap x y
    # x,y – 要点击的位置的横纵轴坐标
    adb shell input touchscreen tap 110 66

    # swipe – 滑动、滑屏操作
    # adb shell input [touchscreen|touchpad] swipe x1 y1 x2 y2
    # x1 y1 x2 y2 – 滑动起始和终止位置坐标
    adb shell input touchscreen swipe 450 66 110 66

    # 模拟长按，500毫秒以上即可，源码设置了 DEFAULT_LONG_PRESS_TIMEOUT = 500
    adb shell input swipe 367 469 367 469 800

    # 最后加一个参数，表示操作的时间 ms，以下用 900ms 从(100,200)滑动到(500,600)
    adb shell input swipe 100 200 500 600 900 

    adb shell input draganddrop 160 1100 160 850

    # 模拟轨迹球按下（未测试过）
    adb shell input trackball press
     
    # 模拟轨迹球滚动（未测试过）
    adb shell input trackball roll <dx> <dy>

KEYCODE_POWER 是 26，KEYCODE_MENU 是 82，因此可以发送按键：

    adb shell input keyevent 26
    adb shell input keyevent 82

如果屏幕未锁定，则锁定屏幕。 如果屏幕已被锁定，它将唤醒设备，但是，KEYCODE_MENU 在更高版本的 Android 中没有用。

获取手机分辨率

    adb shell "dumpsys window displays|grep init=|awk '{print $1}'"
    adb shell wm size

小米 8 屏幕分辨率 2248x1080 像素，图标 6 行 4 列，外加最底一行图标：

        160  410  660  920
    220  C1   C2   C3   C4
    520  C1   C2   C3   C4
    800  C1   C2   C3   C4
    1100 C1   C2   C3   C4
    1390 C1   C2   C3   C4
    1670 C1   C2   C3   C4
    2060 C1   C2   C3   C4

图形锁屏的 9 个点坐标如下，在开发者选项中打开指针位置可以帮助定位：

        240 540 840
    1340 01  02  03
    1620 04  05  06
    1900 07  08  09

要画一个 L 形的坐标如下，但 swipe 命令只能在两点间滑动，即发送多个 swipe 事件也是不连续的，使用 && 和 & 连接命令表现也有差异。要实现解锁轨迹，就需要 DOWN-MOVE 事件。

    adb shell input event DOWN 240 1340 240 1620 240 1900 540 1900 840 1900 
    adb shell "input swipe 240 1340 240 1620 100 & input swipe 240 1620 240 1900 100 & input swipe 240 1900 540 1900 100 & input swipe 540 1900 840 1900 100"
    adb shell "input draganddrop 240 1340 240 1620 300 & input draganddrop 240 1620 240 1900 300 & input draganddrop 240 1900 540 1900 300 & input draganddrop 540 1900 840 1900 300"

平板电脑不支持锁定屏幕事件的方向更改，即多点为滑动不连续。 

如果有手机 root 权限，可以直接删除锁屏密码、手势：

    adb shell rm /data/system/gesture.key
    adb shell rm /data/system/access_control.key
    adb shell rm /data/system/password.key
    adb shell reboot -p

图案锁有 9 个编号点，00 - 08，设置安图密码后，加密程序将这一串数字(以十六进制的方式)进行 SHA1 摘要，并存储在 /data/system/gesture.key 文件中。

例如，0003060708 密码对应的 SHA1 摘要值为 c8c0b24a15dc8bbfd411427973574695230458f0，可以使用 WinHex 等十六进制编辑程序查看。

如果有 root 权限，图案锁是很容易破解的：

- 4 个点图案 9x8x7x6=3024 个；
- 5 个点图案 15120 个；
- 6 个点图案 60480 个；
- 7 个点图案 181440 个；
- 8 个点图案 362880 个；
- 9 个点图案 362880 个；

则简单的 if / then / else 就足以选择正确的坐标以用于方向。

    #!/bin/bash
    if [ "$(adb shell dumpsys power | grep mScreenOn= | grep -oE '(true|false)')" == false ] ; then
        echo "Screen is off. Turning on."
        adb shell input keyevent 26 # wakeup
        adb shell input touchscreen swipe 930 380 1080 380 # unlock
        echo "OK, should be on now."
    else 
        echo "Screen is already on."
        echo "Turning off."
        adb shell input keyevent 26 # sleep
    fi

这是一个 bash 脚本的全部内容，该脚本检查屏幕是否真正打开，然后唤醒并一键解锁屏幕：

    if [ "$(adb shell dumpsys power | grep mScreenOn= | grep -oE '(true|false)')" == false ] ; then
        echo "Screen is off. Turning on."
        adb shell input keyevent 26 # wakeup
        adb shell input keyevent 82 # unlock
        echo "OK, should be on now."
    else 
        echo "Screen is already on."
    fi

常用按键参考，使用 KeyCode 更好，KeyName 有时无效：

    | Key |          Name         | Key |       Name       | Key |           Name          | Key |          Name          |
    |-----|-----------------------|-----|------------------|-----|-------------------------|-----|------------------------|
    |   0 | "KEYCODE_UNKNOWN"     |  26 | "KEYCODE_POWER"  |  52 | "KEYCODE_X"             |  78 | "KEYCODE_NUM"          |
    |   1 | "KEYCODE_MENU"        |  27 | "KEYCODE_CAMERA" |  53 | "KEYCODE_Y"             |  79 | "KEYCODE_HEADSETHOOK"  |
    |   2 | "KEYCODE_SOFT_RIGHT"  |  28 | "KEYCODE_CLEAR"  |  54 | "KEYCODE_Z"             |  80 | "KEYCODE_FOCUS"        |
    |   3 | "KEYCODE_HOME"        |  29 | "KEYCODE_A"      |  55 | "KEYCODE_COMMA"         |  81 | "KEYCODE_PLUS"         |
    |   4 | "KEYCODE_BACK"        |  30 | "KEYCODE_B"      |  56 | "KEYCODE_PERIOD"        |  82 | "KEYCODE_MENU"         |
    |   5 | "KEYCODE_CALL"        |  31 | "KEYCODE_C"      |  57 | "KEYCODE_ALT_LEFT"      |  83 | "KEYCODE_NOTIFICATION" |
    |   6 | "KEYCODE_ENDCALL"     |  32 | "KEYCODE_D"      |  58 | "KEYCODE_ALT_RIGHT"     |  84 | "KEYCODE_SEARCH"       |
    |   7 | "KEYCODE_0"           |  33 | "KEYCODE_E"      |  59 | "KEYCODE_SHIFT_LEFT"    |  85 | "TAG_LAST_KEYCODE"     |
    |   8 | "KEYCODE_1"           |  34 | "KEYCODE_F"      |  60 | "KEYCODE_SHIFT_RIGHT"   |     |                        |
    |   9 | "KEYCODE_2"           |  35 | "KEYCODE_G"      |  61 | "KEYCODE_TAB"           |     |                        |
    |  10 | "KEYCODE_3"           |  36 | "KEYCODE_H"      |  62 | "KEYCODE_SPACE"         |     |                        |
    |  11 | "KEYCODE_4"           |  37 | "KEYCODE_I"      |  63 | "KEYCODE_SYM"           |     |                        |
    |  12 | "KEYCODE_5"           |  38 | "KEYCODE_J"      |  64 | "KEYCODE_EXPLORER"      |     |                        |
    |  13 | "KEYCODE_6"           |  39 | "KEYCODE_K"      |  65 | "KEYCODE_ENVELOPE"      |     |                        |
    |  14 | "KEYCODE_7"           |  40 | "KEYCODE_L"      |  66 | "KEYCODE_ENTER"         |     |                        |
    |  15 | "KEYCODE_8"           |  41 | "KEYCODE_M"      |  67 | "KEYCODE_DEL"           |     |                        |
    |  16 | "KEYCODE_9"           |  42 | "KEYCODE_N"      |  68 | "KEYCODE_GRAVE"         |     |                        |
    |  17 | "KEYCODE_STAR"        |  43 | "KEYCODE_O"      |  69 | "KEYCODE_MINUS"         |     |                        |
    |  18 | "KEYCODE_POUND"       |  44 | "KEYCODE_P"      |  70 | "KEYCODE_EQUALS"        |     |                        |
    |  19 | "KEYCODE_DPAD_UP"     |  45 | "KEYCODE_Q"      |  71 | "KEYCODE_LEFT_BRACKET"  |     |                        |
    |  20 | "KEYCODE_DPAD_DOWN"   |  46 | "KEYCODE_R"      |  72 | "KEYCODE_RIGHT_BRACKET" |     |                        |
    |  21 | "KEYCODE_DPAD_LEFT"   |  47 | "KEYCODE_S"      |  73 | "KEYCODE_BACKSLASH"     |     |                        |
    |  22 | "KEYCODE_DPAD_RIGHT"  |  48 | "KEYCODE_T"      |  74 | "KEYCODE_SEMICOLON"     |     |                        |
    |  23 | "KEYCODE_DPAD_CENTER" |  49 | "KEYCODE_U"      |  75 | "KEYCODE_APOSTROPHE"    |     |                        |
    |  24 | "KEYCODE_VOLUME_UP"   |  50 | "KEYCODE_V"      |  76 | "KEYCODE_SLASH"         |     |                        |
    |  25 | "KEYCODE_VOLUME_DOWN" |  51 | "KEYCODE_W"      |  77 | "KEYCODE_AT"            |     |                        |


# 🚩 Logcat
- Logcat command-line tool https://developer.android.google.cn/studio/command-line/logcat

## adb logcat
Prints log data to the screen.

    adb logcat [option] [filter-specs]
    adb logcat

Notes: press Ctrl-C to stop monitor

    adb logcat *:V lowest priority, filter to only show Verbose level
    adb logcat *:D filter to only show Debug level
    adb logcat *:I filter to only show Info level
    adb logcat *:W filter to only show Warning level
    adb logcat *:E filter to only show Error level
    adb logcat *:F filter to only show Fatal level
    adb logcat *:S Silent, highest priority, on which nothing is ever printed
    adb logcat -b <Buffer>
    adb logcat -b radio View the buffer that contains radio/telephony related messages.
    adb logcat -b event View the buffer containing events-related messages.
    adb logcat -b main default
    adb logcat -c Clears the entire log and exits.
    adb logcat -d Dumps the log to the screen and exits.
    adb logcat -f test.logs Writes log message output to test.logs .
    adb logcat -g Prints the size of the specified log buffer and exits.
    adb logcat -n <count> Sets the maximum number of rotated logs to <count>. 
    Notes: The default value is 4. Requires the -r option.
    adb logcat -r <kbytes> Rotates the log file every <kbytes> of output.
    Notes: The default value is 16. Requires the -f option.
    adb logcat -s Sets the default filter spec to silent.
    adb logcat -v <format>
    adb logcat -v brief Display priority/tag and PID of the process issuing the message (default format).
    adb logcat -v process Display PID only.)
    adb logcat -v tag Display the priority/tag only.
    adb logcat -v raw Display the raw log message, with no other metadata fields.
    adb logcat -v time Display the date, invocation time, priority/tag, and PID of the process issuing the message.
    adb logcat -v threadtime Display the date, invocation time, priority, tag, and the PID and TID of the thread issuing the message.
    adb logcat -v long Display all metadata fields and separate messages with blank lines.


# 🚩 dumpsys
https://developer.android.google.cn/studio/command-line/dumpsys

系统信息转储：

    $ adb shell dumpsys -h
    dumpsys: invalid option -- h

    usage: dumpsys
             To dump all services.
    or:
           dumpsys [-t TIMEOUT] [--priority LEVEL] [--help | -l | --skip SERVICES | SERVICE [ARGS]]
             --help: shows this help
             -l: only list services, do not dump them
             -t TIMEOUT_SEC: TIMEOUT to use in seconds instead of default 10 seconds
             -T TIMEOUT_MS: TIMEOUT to use in milliseconds instead of default 10 seconds
             --proto: filter services that support dumping data in proto format. Dumps
                   will be in proto format.
             --priority LEVEL: filter services based on specified priority
                   LEVEL must be one of CRITICAL | HIGH | NORMAL
             --skip SERVICES: dumps all services but SERVICES (comma-separated list)
             SERVICE [ARGS]: dumps only service SERVICE, optionally passing ARGS to it

dumps system data

    # Currently running services
    dumpsys -l

    dumpsys activity // 查询AMS服务相关信息
    dumpsys window  // 查询WMS服务相关信息
    dumpsys window displays
    dumpsys cpuinfo // 查询CPU情况
    dumpsys meminfo // 查询内存情况
    dumpsys battery

    dumpsys account
    dumpsys user

Notes: A mobile device with Developer Options enabled running Android 5.0 or higher.
    
adb shell dumpsys batterystats collects battery data from your device
adb shell dumpsys batterystats --reset erases old collection data

Notes: Battery Historian converts that data into an HTML visualization. STEP 1 adb shell dumpsys batterystats > batterystats.txt STEP 2 python historian.py batterystats.txt > batterystats.html

    adb shell dumpsys gfxinfo com.android.phone measuring com.android.phone ui performance

## dumpsys cpuinfo
- Linux Workqueue http://kernel.meizu.com/linux-workqueue.html
- https://www.kernel.org/doc/Documentation/kernel-per-CPU-kthreads.txt
- https://lkml.org/lkml/2013/3/19/661

转储 CPU 状态信息：

    $ adb shell dumpsys cpuinfo -h>mm.txt

    Load: 0.02 / 0.03 / 0.08
    CPU usage from 391775ms to 91666ms ago (2021-04-16 12:27:57.568 to 2021-04-16 12:32:57.677):
      2.6% 4029/cnss_diag: 2% user + 0.5% kernel / faults: 2 minor
      1.5% 2325/com.android.systemui: 1.2% user + 0.3% kernel / faults: 7410 minor 68 major
      1.3% 1618/system_server: 0.8% user + 0.5% kernel / faults: 2824 minor 6 major
      0.9% 910/surfaceflinger: 0.5% user + 0.3% kernel / faults: 5 minor
      0.9% 2221/scheduler_threa: 0% user + 0.9% kernel
      0.8% 815/android.hardware.wifi@1.0-service: 0.3% user + 0.4% kernel / faults: 947 minor
      0.6% 11967/kworker/u16:5: 0% user + 0.6% kernel
      0.6% 6672/kworker/u16:14: 0% user + 0.6% kernel
      0.5% 245/crtc_commit:113: 0% user + 0.5% kernel
      0.5% 2607/com.android.phone: 0.3% user + 0.1% kernel / faults: 3908 minor 5 major
      0.5% 11883/kworker/u16:0: 0% user + 0.5% kernel
      0.4% 11966/kworker/u16:2: 0% user + 0.4% kernel
      0.4% 1114/wificond: 0% user + 0.3% kernel
      0.2% 802/android.hardware.graphics.composer@2.3-service: 0.1% user + 0.1% kernel
      0.2% 1294/msm_irqbalance: 0% user + 0.2% kernel
      0.2% 11733/kworker/u16:3: 0% user + 0.2% kernel
      0.1% 1289/qcrild: 0.1% user + 0% kernel / faults: 63 minor
      0.1% 11940/kworker/0:2: 0% user + 0.1% kernel
      0.1% 6451/com.tencent.mm: 0.1% user + 0% kernel / faults: 317 minor
      0.1% 6/ksoftirqd/0: 0% user + 0.1% kernel
      0.1% 4626/com.miui.notification:remote: 0% user + 0% kernel / faults: 720 minor 1 major
      0.1% 4609/com.miui.securitycenter.remote: 0% user + 0% kernel / faults: 223 minor
      0.1% 252/kgsl_worker_thr: 0% user + 0.1% kernel
      0.1% 1354/qcrild: 0% user + 0% kernel / faults: 52 minor
      0.1% 3726/kworker/3:2: 0% user + 0.1% kernel
      0.1% 3615/adbd: 0% user + 0.1% kernel / faults: 86 minor
      0.1% 7167/com.tencent.mm:push: 0% user + 0% kernel / faults: 157 minor
      0.1% 568/logd: 0% user + 0% kernel / faults: 44 minor 5 major
      0.1% 11769/kworker/2:0: 0% user + 0.1% kernel / faults: 1 minor
      ...
      0% 12078/kworker/0:1: 0% user + 0% kernel
     +0% 12088/kworker/2:1: 0% user + 0% kernel
     +0% 12112/kworker/1:3: 0% user + 0% kernel
     +0% 12116/kworker/3:0: 0% user + 0% kernel
     +0% 12117/kworker/0:0: 0% user + 0% kernel
    2.2% TOTAL: 0.8% user + 1% kernel + 0% iowait + 0.2% irq + 0.1% softirq

第一行显示的是 CPU 负载平均值，这三个数字表示 1m, 5m, 15m 的平均值，较低的数字表示 CPU 有更多空闲时间。

数字越大表示问题或机器过载，对于多处理器或多核处理器，负载值可以越过 1，如四处理器系统负载 3.00，但运行正常！

在多处理器系统上，负载相对于可用处理器核心数。单核系统的 100％ 利用率记为 1.00，双核为 2.00，四核为4.00等。


kworker 是内核工作线程的占位符进程，它执行 Linux 内核的大部分实际处理。尤其是在存在中断，计时器，I/O 等的情况下。

根据 kernel.org 文档，线程的命名规则为：

    Name:
      kworker/u%d:%d%s (pool->id, id, priority)
      kworker/%d:%d%s (cpu, id, priority)

- 冒号前的数字指示线程所在的 CPU 的编号，如果前缀 u 表示线程池未绑定 CPU，数字表示线程池 ID，这意味着 kthread 当前未绑定。
- 冒号后的数字指示线程在 worker pool 中的编号。
- %s 后缀，如果带了"H"后缀，说明这是高优先级的 worker pool。

如，kworker/0:1 表示 CPU 第一个内核上运行的线程，kworker/1:1 是第二个内核运行的线程。

workqueue: drop 'H' from kworker names of unbound worker pools

    @@ -1676,13 +1677,13 @@ static struct worker *create_worker(struct worker_pool *pool)
        worker->id = id;
         
        if (pool->cpu >= 0)
    -       worker->task = kthread_create_on_node(worker_thread,
    -                   worker, cpu_to_node(pool->cpu),
    -                   "kworker/%d:%d%s", pool->cpu, id, pri);
    +       snprintf(id_buf, sizeof(id_buf), "%d:%d%s", pool->cpu, id,
    +            pool->attrs->nice < 0  ? "H" : "");
        else
    -       worker->task = kthread_create(worker_thread, worker,
    -                         "kworker/u%d:%d%s",
    -                         pool->id, id, pri);
    +       snprintf(id_buf, sizeof(id_buf), "u%d:%d", pool->id, id);
    +
    +   worker->task = kthread_create_on_node(worker_thread, worker, node,
    +                         "kworker/%s", id_buf);
        if (IS_ERR(worker->task))
            goto fail;


## dumpsys meminfo

Applications Memory Usage

    $ adb shell dumpsys meminfo -h>mm.txt

    meminfo dump options: [-a] [-d] [-c] [-s] [--oom] [process]
      -a: include all available information for each process.
      -d: include dalvik details.
      -c: dump in a compact machine-parseable representation.
      -s: dump only summary of application memory usage.
      -S: dump also SwapPss.
      --oom: only show processes organized by oom adj.
      --local: only collect details locally, don't call process.
      --package: interpret process arg as package, dumping all
                 processes that have loaded that package.
      --checkin: dump data for a checkin
      --proto: dump data to proto
    If [process] is specified it can be the name or 
    pid of a specific process to dump.

Dalvik 是 Android 系统上运行 Java 程序的虚拟机，通过 -d 选项，可以获取虚拟机运行中的程序信息：

    adb shell dumpsys meminfo -d
    adb shell dumpsys meminfo com.ss.android.ugc.aweme>mm.txt

基本概念：

- VSS - Virtual Set Size 虚拟耗用内存（包含共享库占用的内存）
- RSS - Resident Set Size 实际使用物理内存（包含共享库占用的内存）
- PSS - Proportional Set Size 实际使用的物理内存（比例分配共享库占用的内存）
- USS - Unique Set Size 进程独自占用的物理内存（不包含共享库占用的内存）

一般来说内存占用大小有如下规律：VSS >= RSS >= PSS >= USS

实际使用内存(PSS)将跨进程共享页也加入进来，按比例计算 PSS，这样能够比较准确的表示进程占用的实际物理内存。

私有内存(Dirty and Clean)是进程独占内存，也就是进程销毁时可以回收的内存容量。通常 Private Dirty 内存是最重要的部分，因为只被自己进程使用。Dirty 内存是已经被修改的内存页，因此必须常驻内存（因为没有swap）；Clean 内存是已经映射持久文件使用的内存页（例如正在被执行的代码），因此一段时间不使用的话就可以置换出去。

通常我们需要关注 PSS TOTAL 和 Private Dirty。

- Dalvik Heap 虚拟机分配的堆内存
    - PSS Total 包含所有 Zygote 分配使用的内存，共享跨进程加权。
    - Private Dirty 是应用独占内存大小，包含独自分配的部分，和应用进程从 Zygote 复制时被修改的 Zygote 分配的内存页。 
    - HeapAlloc 是 Dalvik 堆和本地堆分配使用的大小，它的值比 Pss Total 和 Private Dirty 大，因为进程是从 Zygote 中复制分裂出来的，包含了进程共享的分配部分。
- Unknown 无法归类的其他项。主要包括大部分的本地分配。
- Native Heap native 代码申请的内存， 堆和栈，及静态代码块等。
- TOTAL 进程总使用的实际内存。
- .so mmap & .dex mmap ... mmap 映射本地或虚拟机代码到使用的内存中。
- Objects 中显示持有对象的个数，这些数据也是分析内存泄漏的重要数据。


## dumpsys diskstats

转储磁盘信息，包括统计信息、软件占用空间等：

    $ adb shell dumpsys diskstats -h>mm.txt

    Latency: 2ms [512B Data Write]
    Recent Disk Write Speed (kB/s) = 8670
    Data-Free: 40519460K / 54964260K total = 73% free
    Cache-Free: 40519460K / 54964260K total = 73% free
    System-Free: 82480K / 3047900K total = 2% free
    File-based Encryption: true
    App Size: 11254763520
    App Data Size: 2847719424
    App Cache Size: 485289984
    Photos Size: 15085568
    Videos Size: 4096
    Audio Size: 94208
    Downloads Size: 0
    System Size: 7716597760
    Other Size: 647925760
    Package Names: ["com.miui.screenrecorder",...,"com.taobao.trip","com.miui.audioeffect","com.android.theme.icon_pack.circular.android"]
    App Sizes: [11808768,...,255987712,40960,8192]
    App Data Sizes: [61440,...,61440,61440,57344]
    Cache Sizes: [32768,...,32768,32768,32768]



## dumpsys package

Package manager dump

    $ dumpsys package -h
    Package manager dump options:
      [-h] [-f] [--checkin] [--all-components] [cmd] ...
        --checkin: dump for a checkin
        -f: print details of intent filters
        -h: print this help
        --all-components: include all component names in package dump
      cmd may be one of:
        apex: list active APEXes and APEX session state
        l[ibraries]: list known shared libraries
        f[eatures]: list device features
        k[eysets]: print known keysets
        r[esolvers] [activity|service|receiver|content]: dump intent resolvers
        perm[issions]: dump permissions
        permission [name ...]: dump declaration and use of given permission
        pref[erred]: print preferred package settings
        preferred-xml [--full]: print preferred package settings as xml
        prov[iders]: dump content providers
        p[ackages]: dump installed packages
        s[hared-users]: dump shared user IDs
        m[essages]: print collected runtime messages
        v[erifiers]: print package verifier info
        d[omain-preferred-apps]: print domains preferred apps
        i[ntent-filter-verifiers]|ifv: print intent filter verifier info
        version: print database version info
        write: write current settings now
        installs: details about install sessions
        check-permission <permission> <package> [<user>]: does pkg hold perm?
        dexopt: dump dexopt state
        compiler-stats: dump compiler statistics
        service-permissions: dump permissions required by services
        <package.name>: info about given package

例如查询微信软件包信息，可以指定信息类型：

    adb shell dumpsys package com.tencent.mm > mm.txt

    adb shell dumpsys package version com.tencent.mm > mm.txt
    adb shell dumpsys package perm com.tencent.mm > mm.txt
    adb shell dumpsys package p com.tencent.mm > mm.txt

转储软件包信息，内容包括：

    Activity Resolver Table:
      Full MIME Types:
      Base MIME Types:
      Wild MIME Types:
      Schemes:
      Non-Data Actions:
      MIME Typed Actions:
    Receiver Resolver Table:
    Service Resolver Table:
    Permissions:
    Registered ContentProviders:
    ContentProvider Authorities:
    Key Set Manager:
    Packages:
    Package Changes:
    Dexopt state:
    Compiler stats:
    Active APEX packages:
    Inactive APEX packages:
    Factory APEX packages:

四种权限概念

- declared permissions  自定义权限
- requested permissions 请求权限
- install permissions   安装权限
- runtime permissions   运行时权限


## dumpsys activity

App 信息查询：

    $ dumpsys activity -h
    Activity manager dump options:
      [-a] [-c] [-p PACKAGE] [-h] [WHAT] ...
      WHAT may be one of:
        a[ctivities]: activity stack state
        r[recents]: recent activities state
        b[roadcasts] [PACKAGE_NAME] [history [-s]]: broadcast state
        broadcast-stats [PACKAGE_NAME]: aggregated broadcast statistics
        i[ntents] [PACKAGE_NAME]: pending intent state
        p[rocesses] [PACKAGE_NAME]: process state
        o[om]: out of memory management
        perm[issions]: URI permission grant state
        prov[iders] [COMP_SPEC ...]: content provider state
        provider [COMP_SPEC]: provider client-side state
        s[ervices] [COMP_SPEC ...]: service state
        allowed-associations: current package association restrictions
        as[sociations]: tracked app associations
        lmk: stats on low memory killer
        lru: raw LRU process list
        binder-proxies: stats on binder objects and IPCs
        settings: currently applied config settings
        service [COMP_SPEC]: service client-side state
        package [PACKAGE_NAME]: all state related to given package
        all: dump all activities
        top: dump the top activity
      WHAT may also be a COMP_SPEC to dump activities.
      COMP_SPEC may be a component name (com.foo/.myApp),
        a partial substring in a component name, a
        hex object identifier.
      -a: include all available server state.
      -c: include client state.
      -p: limit output to given package.
      --checkin: output checkin format, resetting data.
      --C: output checkin format, not resetting data.
      --proto: output dump in protocol buffer format.
      --autofill: dump just the autofill-related state of an activity

    dumpsys activity top // 当前 APP 界面状态
    dumpsys activity oom // 查看进程内存状态

    # 查询 UI 结构
    dumpsys activity com.ss.android.ugc.aweme 

    # 查询 App 的进程、服务状态
    dumpsys activity p com.ss.android.ugc.aweme 
    dumpsys activity s com.ss.android.ugc.aweme


# 🚩 dumpstate

dumps state

    adb shell dumpstate
    adb shell dumpstate > state.logs dumps state to a file


# 🚩 System
## adb root
restarts the adbd daemon with root permissions

    adb root

Notes: adbd cannot run as root in production builds (test in emulator)

## adb sideload
- https://mulanos.oschina.net/p/OtaPackageTool

设备进入 sideload 模式后，可以进行升级的刷入，也是基于 Recovery 模式执行的升级。

OTA - Over-the-Air Technology 无需刷机升级的方式 Android 系统提供的标准软件升级方式。 它功能强大，提供了完全升级、增量升级模式，可以通过 SD 卡升级，也可以通过网络升级。

Android 源码整编后执行 make otapackage 命令即可生成 OTA 升级包，命令完成了三件事情：

- 重新对 system.img 文件进行了打包；
- 生成差分资源包，`<product-name>-target_files-<version-name>.zip`，差分资源包用于生成整包和差分包；
- 生成 OTA 升级包，路径为 `out/target/product/<product-name>/<product-name>-ota-<version-name>.zip`

flashing/restoring Android update.zip packages.

    adb sideload <update.zip>

sideload the given full OTA package

    adb sideload /mnt/sdcard/Download/ota.zip

Notes: adb reboot sideload [Android M+]

## adb shell ps
print process status

    adb shell ps
    adb shell ps -p

## adb shell top
display top CPU processes

    adb shell top
    adb shell top -t         # Show threads instead of processes.

Notes: (press Ctrl-C to stop monitor)

## adb shell getprop

get property via the android property service

    getprop [options]

STEP 1.

    adb shell

STEP 2.

    getprop
    getprop ro.build.version.sdk
    getprop ro.product.cpu.abilist
    getprop ro.chipname
    getprop | grep adb

## adb shell setprop

set property service

    setprop <key> <value>

STEP 1.

    adb shell 

STEP 2.

    setprop service.adb.tcp.port 5555


# 🚩 aapt - Android Asset Packaging Tool
- Android Asset Packaging Tool https://developer.android.google.cn/studio/command-line/aapt2

aapt - Android Asset Packaging Tool，我们可以在 SDK 的 build-tools 目录下找到该工具。aapt 可以查看、 创建、 更新 ZIP 格式的文档附件(zip, jar, apk)。 也可将资源文件编译成二进制文件，尽管你可能没有直接使用过 aapt 工具，但是 build scripts 和 IDE 插件会使用这个工具打包 apk 文件构成一个 Android 应用程序。

使用 aapt 查看 AndroidManifest.xml

    aapt dump xmltree xxx.apk AndroidManifest.xml

## aapt 命令参考

    Android Asset Packaging Tool

    Usage:
     aapt l[ist] [-v] [-a] file.{zip,jar,apk}
       List contents of Zip-compatible archive.

     aapt d[ump] [--values] [--include-meta-data] WHAT file.{apk} [asset [asset ...]]
       strings          Print the contents of the resource table string pool in the APK.
       badging          Print the label and icon for the app declared in APK.
       permissions      Print the permissions from the APK.
       resources        Print the resource table from the APK.
       configurations   Print the configurations in the APK.
       xmltree          Print the compiled xmls in the given assets.
       xmlstrings       Print the strings of the given compiled xml assets.

     aapt p[ackage] [-d][-f][-m][-u][-v][-x][-z][-M AndroidManifest.xml] \
            [-0 extension [-0 extension ...]] [-g tolerance] [-j jarfile] \
            [--debug-mode] [--min-sdk-version VAL] [--target-sdk-version VAL] \
            [--app-version VAL] [--app-version-name TEXT] [--custom-package VAL] \
            [--rename-manifest-package PACKAGE] \
            [--rename-instrumentation-target-package PACKAGE] \
            [--utf16] [--auto-add-overlay] \
            [--max-res-version VAL] \
            [-I base-package [-I base-package ...]] \
            [-A asset-source-dir]  [-G class-list-file] [-P public-definitions-file] \
            [-D main-dex-class-list-file] \
            [-S resource-sources [-S resource-sources ...]] \
            [-F apk-file] [-J R-file-dir] \
            [--product product1,product2,...] \
            [-c CONFIGS] [--preferred-density DENSITY] \
            [--split CONFIGS [--split CONFIGS]] \
            [--feature-of package [--feature-after package]] \
            [raw-files-dir [raw-files-dir] ...] \
            [--output-text-symbols DIR]

       Package the android resources.  It will read assets and resources that are
       supplied with the -M -A -S or raw-files-dir arguments.  The -J -P -F and -R
       options control which files are output.

     aapt r[emove] [-v] file.{zip,jar,apk} file1 [file2 ...]
       Delete specified files from Zip-compatible archive.

     aapt a[dd] [-v] file.{zip,jar,apk} file1 [file2 ...]
       Add specified files to Zip-compatible archive.

     aapt c[runch] [-v] -S resource-sources ... -C output-folder ...
       Do PNG preprocessing on one or several resource folders
       and store the results in the output folder.

     aapt s[ingleCrunch] [-v] -i input-file -o outputfile
       Do PNG preprocessing on a single file.

     aapt v[ersion]
       Print program version.

     Modifiers:
       -a  print Android-specific data (resources, manifest) when listing
       -c  specify which configurations to include.  The default is all
           configurations.  The value of the parameter should be a comma
           separated list of configuration values.  Locales should be specified
           as either a language or language-region pair.  Some examples:
                en
                port,en
                port,land,en_US
       -d  one or more device assets to include, separated by commas
       -f  force overwrite of existing files
       -g  specify a pixel tolerance to force images to grayscale, default 0
       -j  specify a jar or zip file containing classes to include
       -k  junk path of file(s) added
       -m  make package directories under location specified by -J
       -u  update existing packages (add new, replace older, remove deleted files)
       -v  verbose output
       -x  create extending (non-application) resource IDs
       -z  require localization of resource attributes marked with
           localization="suggested"
       -A  additional directory in which to find raw asset files
       -G  A file to output proguard options into.
       -D  A file to output proguard options for the main dex into.
       -F  specify the apk file to output
       -I  add an existing package to base include set
       -J  specify where to output R.java resource constant definitions
       -M  specify full path to AndroidManifest.xml to include in zip
       -P  specify where to output public resource definitions
       -S  directory in which to find resources.  Multiple directories will be scanned
           and the first match found (left to right) will take precedence.
       -0  specifies an additional extension for which such files will not
           be stored compressed in the .apk.  An empty string means to not
           compress any files at all.
       --debug-mode
           inserts android:debuggable="true" in to the application node of the
           manifest, making the application debuggable even on production devices.
       --include-meta-data
           when used with "dump badging" also includes meta-data tags.
       --pseudo-localize
           generate resources for pseudo-locales (en-XA and ar-XB).
       --min-sdk-version
           inserts android:minSdkVersion in to manifest.  If the version is 7 or
           higher, the default encoding for resources will be in UTF-8.
       --target-sdk-version
           inserts android:targetSdkVersion in to manifest.
       --max-res-version
           ignores versioned resource directories above the given value.
       --values
           when used with "dump resources" also includes resource values.
       --version-code
           inserts android:versionCode in to manifest.
       --version-name
           inserts android:versionName in to manifest.
       --replace-version
           If --version-code and/or --version-name are specified, these
           values will replace any value already in the manifest. By
           default, nothing is changed if the manifest already defines
           these attributes.
       --custom-package
           generates R.java into a different package.
       --extra-packages
           generate R.java for libraries. Separate libraries with ':'.
       --generate-dependencies
           generate dependency files in the same directories for R.java and resource package
       --auto-add-overlay
           Automatically add resources that are only in overlays.
       --preferred-density
           Specifies a preference for a particular density. Resources that do not
           match this density and have variants that are a closer match are removed.
       --split
           Builds a separate split APK for the configurations listed. This can
           be loaded alongside the base APK at runtime.
       --feature-of
           Builds a split APK that is a feature of the apk specified here. Resources
           in the base APK can be referenced from the the feature APK.
       --feature-after
           An app can have multiple Feature Split APKs which must be totally ordered.
           If --feature-of is specified, this flag specifies which Feature Split APK
           comes before this one. The first Feature Split APK should not define
           anything here.
       --rename-manifest-package
           Rewrite the manifest so that its package name is the package name
           given here.  Relative class names (for example .Foo) will be
           changed to absolute names with the old package so that the code
           does not need to change.
       --rename-instrumentation-target-package
           Rewrite the manifest so that all of its instrumentation
           components target the given package.  Useful when used in
           conjunction with --rename-manifest-package to fix tests against
           a package that has been renamed.
       --product
           Specifies which variant to choose for strings that have
           product variants
       --utf16
           changes default encoding for resources to UTF-16.  Only useful when API
           level is set to 7 or higher where the default encoding is UTF-8.
       --non-constant-id
           Make the resources ID non constant. This is required to make an R java class
           that does not contain the final value but is used to make reusable compiled
           libraries that need to access resources.
       --shared-lib
           Make a shared library resource package that can be loaded by an application
           at runtime to access the libraries resources. Implies --non-constant-id.
       --app-as-shared-lib
           Make an app resource package that also can be loaded as shared library at runtime.
           Implies --non-constant-id.
       --error-on-failed-insert
           Forces aapt to return an error if it fails to insert values into the manifest
           with --debug-mode, --min-sdk-version, --target-sdk-version --version-code
           and --version-name.
           Insertion typically fails if the manifest already defines the attribute.
       --error-on-missing-config-entry
           Forces aapt to return an error if it fails to find an entry for a configuration.
       --output-text-symbols
           Generates a text file containing the resource symbols of the R class in the
           specified folder.
       --ignore-assets
           Assets to be ignored. Default pattern is:
           !.svn:!.git:!.ds_store:!*.scc:.*:<dir>_*:!CVS:!thumbs.db:!picasa.ini:!*~
       --skip-symbols-without-default-localization
           Prevents symbols from being generated for strings that do not have a default
           localization
       --no-version-vectors
           Do not automatically generate versioned copies of vector XML resources.
       --no-version-transitions
           Do not automatically generate versioned copies of transition XML resources.
       --private-symbols
           Java package name to use when generating R.java for private resources.     
