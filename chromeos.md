

# ChromiumOS ChromeOS
[Chromium OS GNU GENERAL PUBLIC LICENSE](http://www.chromium.org/chromium-os/licenses)

[The latest Chromium OS daily build](https://chromium.arnoldthebat.co.uk/?dir=daily)


Downloading image zipfile from 
https://dl.google.com/dl/edgedl/chromeos/recovery/chromeos_10176.76.0_coral_recovery_stable-channel_mp-v4.bin.zip

[You can download the official builds from here](http://www.chromium.org/getting-involved/download-chromium)
[Official developer guide](http://www.chromium.org/chromium-os/developer-guide)

FAQ
Q: How can i burn live DVD in Ubuntu by your archive?
A: sudo dd if=chromiumos_image.bin of=/dev/sdX bs=4M

Q: How to become root?
A: See http://www.chromium.org/chromium-os/poking-around-your-chrome-os-device


## 自己编译Chrome OS的开源版Chromium OS
[自己编译Chrome OS的开源版Chromium OS](https://www.librehat.com/compile-chromium-os-yourself/?replytocom=408)

Chrome OS和Chromium OS的关系就是Chrome和Chromium的关系。Chrome OS现在慢慢发展起来了，不过个人觉得短期内还是没必要入一台Chromebook，特别在天朝这个网络环境下，扯远了啊……国外的Hexxeh有每天自动编译更新的Chromium OS镜像下载，但是很遗憾，在我的笔记本（全AMD平台）上从来没有正常地运行过。一般都是和ATI显卡之间的问题，后来变成和Broadcom网卡驱动的问题……总之，我觉得还是自己来编译一个适合自己电脑的Chromium OS会舒服一点。


本文仅作为我的编译过程笔记，请配合官方文档（链接在最下面）查看。

要求
Google账号（没有这个你也可以编译，但是会缺少Google API，如地图定位、页面翻译、拼写检查等）
64位的Linux系统（理论上所有最新的发行版都可以，不过官方列举的是Ubuntu，我用的是Fedora）
Linux用户要具有sudo权限（加入wheels组）
4G或者更多的运行内存（8G内存可以不开swap，4G内存必须有4G的swap）
至少20GB空闲磁盘空间（而且必须是支持POSIX标准的，也就是说DOS分区格式的是绝对不可以的。推荐就用EXT3/EXT4/XFS/ZFS/JFS之类的吧），每次编译，都会生成一个2.4G的镜像，而且如果要编译内核（肯定需要的）就需要更多的空间我是留了30G（75G）空间的。
一颗强劲的多核CPU（单核编译就慢慢等吧）
连接速度不赖的网络（太小的水管下载源码会等死的）
然后系统必须安装好git、subversion、curl、depot_tools，同时对sudoer做一些改动（不然cros_sdk会出错）。

准备工作
先在Google网上论坛订阅Chromium-dev，然后获取Google API，不然会没有Google API的支持。

在终端里运行一次umask 022，然后下载源代码，我下载的是最小源代码。完整代码有12GB，不想下那么多。如果遇到404错误可以忽略不管它。

    cd /DIR_TO_KEEP_SRC/
    repo init -u https://git.chromium.org/git/chromiumos/manifest.git -g minilayout --repo-url https://git.chromium.org/git/external/repo.git
    repo sync

chroot的准备工作。我发现我运行之后总是提示uid is not 0之类的sudo错误，Google了一圈，在这里找到正解了，mount指令看看磁盘挂载参数有没有nosuid，如果有的话要remount，因为nosuid参数会导致setuid的错误。如果遇到socket.herror错误可以忽略不管。

    ./chromite/bin/cros_sdk

如果一切正常的话会进入chroot模式，大概终端会变成这样：

    (cros-chroot) johnnyrotten@flyingkite ~/trunk/src/scripts $

开始编译
可以先进入src/overlays/overlay-amd64-generic目录，修改make.conf，毕竟generic和我们的硬件差别还是蛮大的。我修改后的结果如下，


    CHROMEOS_KERNEL_SPLITCONFIG="chromiumos-x86_64"
    CHROMEOS_KERNEL_ARCH="x86_64"
    MARCH_TUNE="-march=amdfam10 -mtune=amdfam10"
    CFLAGS="${CFLAGS} ${MARCH_TUNE}"
    CXXFLAGS="${CXXFLAGS} ${MARCH_TUNE}"
    USE="${USE} mmx sse sse2 sse3 sse4a"#不确定sse3、sse4a是否有效
    VIDEO_CARDS="${VIDEO_CARDS} radeon"
    source prebuilt.conf

关于添加chrome_media的USE参数，请看这里。请注意，以下的命令都是在chroot中输入的，不是在宿主的终端中输入。

    ./setup_board --board=amd64-generic --default
    ./set_shared_user_password.sh
    export USE="chrome_media" #编译支持更多解码器
    ./build_packages --nowithdebug

注：如果你执行了第三条export USE=”chrome_media”的话，那你的硬盘就得有足够的空间（反正我35G是提示没空间了，重新划了75G来折腾）容纳Chromium的代码了，不然会出错的，而且耗费的时间也会大大增加，留一个晚上来编译吧……chrome_pdf会导致编译出错，请勿使用chrome_pdf这个USE参数

请一条一条执行，第二条指令会要求输入chronos的用户密码，最后那个–nowithdebug可以去掉Chromium OS登陆界面的DEBUG水印（当然也关闭DEBUG功能了）。系统将会开始编译，初次编译预计需要一个半小时（四核CPU，不加chrome_media和chrome_pdf的USE参数，下同），同时下载1.7GB的源码和1.3GB的预编译文件。

编译packages完成后，下一步是编译镜像（就是像Hexxeh发布的那些东西一样）。如果要修改内核，建议先改完内核再制作镜像。

    ./build_image --noenable_rootfs_verification dev

dev参数表示开发者模式，会安装开发者用的软件包。也可以把dev改成base，这样就是和标准Chrome OS类似的只包含基本的软件包。–noenable_rootfs_verification的作用是不对镜像进行检查，好处是能够快速开发，挂载镜像修改里面的文件之后可以直接拿去使用，否则就不能直接修改生成的镜像（更安全一点）。

把镜像灌到U盘

    ./image_to_usb.sh --from=../build/images/amd64-generic/latest/chromiumos_test_image.bin --to=/dev/sdc

/dev/sdc换成你的U盘（不要挂载），记住是/dev/sdc到设备，而不是/dev/sdc1到分区。这会把U盘原来的数据全部擦除，同时格式化为GPT分区表，同时把刚刚编译的镜像刷入（–from参数要指定到bin文件）。理论上不用–from参数会自动用最新的镜像去刷写，但是我这里不加–from指定的话会出错告诉我没找到镜像。

U盘大小必须在4G以上，不然放不下去。

灌好后，重启电脑从U盘启动，看看能否进入Chromium OS啦！这里还要吐槽一下syslinux的启动文件写得真心渣，居然指定root是/dev/sdb3，还得我在插上移动硬盘和U盘的情况下出现Kernal Panic，Unable to mount root….的错误（改成/dev/sdc3也不行……），还以为我内核搞出问题了。拔掉移动硬盘，只插上U盘才能正确进入Chromium OS！

如果你完整按照本文操作的话，我可以比较负责的告诉你，应该没有几台电脑可以完美进入并体验，特别是显卡需要Hack & Hack ……Nvidia显卡的在讨论区有结果了，但是ATI的还没有一份完整的教程（其实就通过重新编译内核勾上A卡驱动就可以的，我已经试验成功了，等会儿放个截图在下面，手贱又折腾了结果启动不了了……图已经放上来了），还有就是网卡驱动、无线网卡驱动等，不重新编译内核根本用不了。。。


## CloudReady
[CloudReady of ChromeOS ](https://www.makeuseof.com/tag/diy-chromebook-chromebox/)
[Neverware CloudReady](https://www.neverware.com/freedownload)

https://davrt8itj6cgg.cloudfront.net/cloudready-free-63.2.14-64-bit/cloudready-free-63.2.14-64-bit.zip
https://github.com/resin-io/etcher/releases/download/v1.3.1/Etcher-Setup-1.3.1-x64.exe
https://downloads.sourceforge.net/gparted/gparted-live-0.30.0-1-amd64.iso

https://davrt8itj6cgg.cloudfront.net/cloudready-free-63.2.12-32-bit/cloudready-free-63.2.12-32-bit.zip
https://github.com/resin-io/etcher/releases/download/v1.3.1/Etcher-Portable-1.3.1-x86.exe
https://downloads.sourceforge.net/gparted/gparted-live-0.30.0-1-i686.iso

    CloudReady is an open source derivation of Google’s Chrome OS. Chrome OS is a stripped down version of Linux that runs just a single app: Chrome. Most computers actually run Chrome OS faster than any other operating system. The downside is that some websites won’t work properly—unless you know a few tricks.

    Getting Started With Chromium OS (CloudReady)
    There are only two remaining popular versions of Chrome OS that you can install: Chromium OS from ArnoldTheBat and CloudReady from Neverware.

    Of the two, most users will prefer CloudReady. It offers the best combination of features, support, and performance. Although I suspect that ArnoldTheBat’s version of Chromium OS will offer Android support before CloudReady does. CloudReady is officially supported on around 200 laptop models. But I’ve installed it on a half-dozen unsupported machines with only some minor troubleshooting.

    Installation requires five basic steps:

    Optional: You may need to update the BIOS of your device, wipe its storage, and turn off a few features in BIOS/UEFI.
    Image CloudReady onto a bootable media, like a USB flash drive using Etcher.
    Install CloudReady onto a computer. This process is destructive, so prepare to lose all your data on the target storage drive.
    Optional: You may need to enable such features Wildvine, Flash, and other proprietary software so you can use services like Netflix.
    Optional: If your computer has problems, you may need to do some basic troubleshooting.
    Step 0: Downloads and Hardware Requirements
    All of the programs below include images for both 32-bit and 64-bit operating systems. Executable and installable programs also work with all major operating systems, although the download links listed here are for Windows.

    Before continuing, download the following applications and CloudReady.

    CloudReady from Neverware (32-bit download and 64-bit download)
    Etcher, a disk imaging software (32-bit download and 64-bit download)
    Optional: GParted, a bootable disk partitioning utility (32-bit download and 64-bit download)
    Hardware system requirements:

    USB Flash drive or DVD with 8GB of storage
    A target storage drive with at least 16GB of space
    At least 2GB of RAM (you might get away with less)
    A computer on which you can erase the storage drive
    An internet connection (CloudReady doesn’t work without internet)
    Step 1: Prepare Your Computer (Optional)
    The three parts of this step are optional. The reason is that the majority of users won’t have any issues installing CloudReady. However, a minority will have serious problems unless they do three things: first, update their computer’s BIOS and, second, use a disk partition tool to wipe the target storage drive (or boot drive). Third, turn off Fast Boot and Secure Boot.

    Update the System BIOS
    Only attempt this step if you know what you’re doing. Otherwise, it’s best to leave things alone.

    Different computers require different methods for updating their BIOS. And on top of that, updating a BIOS—if done incorrectly—can destroy your computer. We’ve previously covered how to enter your BIOS and how to update your BIOS.

    For an example of how complicated—and bewilderingly different across varying models of computer—updating the BIOS can be, check this video on flashing a BIOS on an Acer Aspire One AOD150 or KAV10:



    Keep in mind that this process is different not just across different manufacturers. It can vary across different models of computer. There is no single method of updating a computer’s BIOS.

    Wipe the Target Storage/Boot Drive
    The storage drive that you want to install Chromium OS onto may not accept another operating system unless the previous data on the drive is fully removed.

    The best way to do that is to use GParted, the ultimate partitioning tool. Aside from fully wiping the target drive, you may need to set the partition table type as GUID Partition Table (GPT).

    You’ll first need to image the GParted ISO file onto a Flash drive. Start Etcher and choose the GParted ISO from your download directory. Then select your USB Flash drive (preferably after you’ve formatted it) as the target drive. The process usually takes around 5-10 minutes to complete.

    turn pc into chromebook - etcher

    Then start your computer with the Flash drive inserted. Boot from this drive. (How to boot from a Flash drive.) While GParted loads, you may need to hit enter on occasion, but the default settings are almost always the correct ones.

    Eventually, you’ll see GParted’s main menu. From the main menu, left-click Device and from the context menu, choose Create Partition Table.

    turn pc into chromebook - create partition table

    A popup menu will appear. Change Select new partition table type from msdos to GPT. For some reason, on some models of computer, I can’t get the installer to work with the standard table type on older computers, MS-DOS.

    Finally, hit Apply. The computer will now change the partition table type to GPT. You can now exit this program.

    turn pc into chromebook - apply new partition table

    Your storage drive is now ready to receive a copy of CloudReady.

    Disable Fast Boot and Secure Boot
    Both Fast Boot and Secure Boot are known to add unnecessary complexity to Linux installations. Therefore, it’s a wise decision to switch both features off before you install CloudReady. You can disable both from within your computer’s BIOS/UEFI.

    Step 2: Image CloudReady Onto a USB Flash Drive
    turn pc into chromebook - etcher

    The first step is to use Etcher to image CloudReady onto a USB Flash drive (or some other bootable media). The process is simple: Run Etcher, under Select image, choose the downloaded copy of CloudReady as the source ISO. Then choose a formatted USB drive as the destination under Select drive. Finally, hit the Flash! button.

    The imaging process should take around 10 minutes to finish. Now you’ve got an installer Flash drive.

    Step 3: Install CloudReady to Your Storage/Boot Drive
    Insert the USB Flash drive with CloudReady on it into the computer. Remember that installing CloudReady will wipe out the contents of the drive—if you need anything on it, remember to make a backup. Start the computer and boot from the drive.

    The initial menu should look like this (without my login information):

    turn pc into chromebook - login screen

    Log in as Guest (located in the bottom-left of the screen). After logging in, to install to a storage drive, press and hold Ctrl + Alt + F2.

    After pressing all three buttons, a terminal window opens. You should now be able to enter text and commands.

    turn pc into chromebook - text command window

    Type the following command in order to install Chrome OS to your computer’s storage drive:

    sudo /usr/sbin/chromeos-install --dst /dev/sda
    You may be required to input a login and a password: chronos is the login and chrome is the password.

    Please note that there are hyphens next to each other following “install” and before “dst”. Also, look at “sda”. In Linux, storage drives are each marked with a letter of the alphabet. The first storage drive in your computer is marked as “storage drive a“, or initialized as “sda”. If you have multiple drives in your computer, you can find the appropriate drive by typing in the following command:

    sudo fdisk -l
    This command will display the drives and their corresponding drive letter. The first drive will display as “sda”, the second drive asd “sdb”, and so on. If you do not want to install to the first drive, run the command above and locate the appropriate drive that you want to install to.

    Step 4: Enable Proprietary Services for Netflix
    turn pc into chromebook - media plugins

    CloudReady does not include support for Flash, or DRM protection schemes like Wildvine, by default. You need to install these separately.

    Fortunately, it’s as easy as clicking the mouse a few times. Simply open Settings and click on Plugins. You should see the following three entries:

    Wildvine Content Decryption Module
    Adobe Flash
    Proprietary Media Components
    On the Plugins menu, hit the INSTALL button to the right of each entry. Afterward, it will download and install each software.

    Step 5: Troubleshooting Problems (Optional)
    What’s the Password and Login for Chrome OS CloudReady?
    When you try to change certain system settings for CloudReady, you’ll be prompted to input a password and login. Unfortunately, there’s a lot of incorrect information on the internet. As of March 2018, the login and password are as follows:

    Login: chronos
    Password: chrome
    Typing in both will grant you root access, which means you can change system-level settings. During the installation process, you’ll be prompted to input both.

    Chromium OS Audio Isn’t Working
    The two most common audio problems are HDMI not working and rear audio ports not working. No worries! Like many Linux distributions, CloudReady includes a configuration tool for fixing audio issues, Alsamixer. The tool, however, isn’t very easy to use because it’s based on confusing ASCII characters and lacks visual polish. Also, the instructions aren’t very clear.

    To run the audio configuration tool, you’ll need to enter Chrome OS’s command line mode. To do so, open the Chrome browser and press and hold Ctrl + Alt + T. You should see a command line open up within the Chrome browser.

    turn pc into chromebook - chrome browser command line

    On the command line, type the following and hit the Enter key:

    shell
    This takes you to the shell, which allows users to alter Linux settings from the command line. You may need to type in your password and/or login. The login is chronos and the password is chrome.

    Now type the following command and hit Enter:

    sudo alsamixer
    You should see the following interface:

    turn pc into chromebook - alsamixer interface

    Dealing with the Alsamixer interface is tedious. The in-interface instructions are incorrect and the F-keys do nothing.

    Anyway, first, you want to select your audio card (one of them is probably muted). You can do this by hitting the s key. You should then see a list of all the audio devices attached to your computer. Oftentimes, that’s either your graphics card, the rear panel audio, and the HDMI audio.

    turn pc into chromebook - alsamixer interface sound card

    Use the navigational keys to select the correct device. For example, if you are outputting audio from an HDMI connection, you will want to select the HDMI audio device. Once you’ve highlighted the correct entry, hit the Enter key. That will bring up the audio settings.

    You should see a box with “MM” in the middle. That means that this device is muted. Hit the m key to unmute it, which turns the MM into 00 (double zeroes). With a little luck, the audio should now work! If it doesn’t, your audio controller may not be compatible with Chrome OS.

    turn pc into chromebook - alsamixer audio controller

    To persist these settings between reboots, you’ll need to create a new directory to hold the settings and then save the settings at that location. Now type the following and hit Enter:

    cd /var/lib
    Now enter the command below:

    sudo mkdir alsa
    This creates a directory called “alsa” inside of the directory /var/lib. You will enter this directory by typing the following and hitting Enter:

    cd /var/lib/alsa
    To save your settings, type the following command:

    sudo alsactl store
    After that, the audio settings shouldn’t reset after you restart your computer.

    Wi-Fi Doesn’t Work
    Unfortunately, there’s no way to tweak settings in order to get Wi-Fi working properly. However, I can recommend a budget 802.11ac Mini-PCIe card, the Intel 3160. It’s cheap, offers low-tier Wireless-AC speeds, and works across almost all Linux platforms (I’ve tested it across many Linux distros). It’s also found on eBay for very little money (in used condition) and is also available in the M.2 form factor.


## ChromiumOS源码下载及编译
2017.10.20 15:52:31

    由于ChromiumOS系统的编译需要使用非Root用户进行，故这里新增一个用户cos以用于ChromiumOS系统的开发工作：

    adduser cos
    这里需要注意的是用户名chronos 是预留给编译系统使用的，这里增加的用于编译的用户名不能为chronos。

    工具安装
    在进行源码下载之前首先需要进行工具的安装：

    aptitude install git-core gitk git-gui subversion curl lvm2 thin-provisioning-tools python-pkg-resources python-virtualenv
    下载depot_tools并加入系统路径：

    cd ~
    git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
    export PATH=`pwd`/depot_tools:"$PATH"
    权限准备
    将增加的用户cos加入到文件/etc/sudoers中：

    cos     ALL=(ALL:ALL) ALL
    再执行如下代码：

    cd /tmp
    cat > ./sudo_editor <<EOF
    #!/bin/sh
    echo Defaults \!tty_tickets > \$1          # Entering your password in one shell affects all shells 
    echo Defaults timestamp_timeout=180 >> \$1 # Time between re-requesting your password, in minutes
    EOF
    chmod +x ./sudo_editor 
    sudo EDITOR=./sudo_editor visudo -f /etc/sudoers.d/relax_requirements
    代码下载
    创建工作目录并进入：

    mkdir ~/workspaces
    cd ~/workspaces
    下载代码：

    mkdir chromiumos
    cd chromiumos
    repo init -u https://chromium.googlesource.com/chromiumos/manifest.git
    repo sync
    如果是要使用指定版本的代码，则最好创建一个新的工作目录，再进行代码同步：

    mkdir release-R59-9460.B
    cd release-R59-9460.B

    repo init -u https://chromium.googlesource.com/chromiumos/manifest.git -b  release-R59-9460.B --reference /home/cos/workspaces/chromiumos
    repo sync
    编译代码
    Chroot环境创建
    进入到源码目录执行如下命令进入到chroot环境：

    cros_sdk
    这里会在当前目录下创建一个名为.cache的目录来保存用于构建chroot环境的包，其中最大的一个包位于目录.cache/sdks下，名称形式类似于cros-sdk-2017.04.12.210012.tar.xz，大小接近2G，如果有多个环境开发的话，可以拷贝该文件到新的工作环境中以节省下载时间。
    系统编译
    此时所执行的代码都在Chroot环境下，首先选取主板类型并初始化主板设定：

    export BOARD=quawks
    ./setup_board --board=${BOARD}
    然后设定系统的超级用户密码：

    ./set_shared_user_password.sh
    超级用户的密码是写入到文件/etc/shared_user_passwd.txt。
    再接下来进行系统编译，这里实际上是使用gentoo中的ebuild来进行包的下载和编译：

    ./build_packages --board=${BOARD}
    最后就是将编译好的系统进行打包：

    ./build_image --board=${BOARD} --noenable_rootfs_verification test
    需要注意的是，当编译为test版本时，先前所设定的系统超级用户密码则变为无效，而被统一改为test0000。
    系统烧录
    接下来就是将系统刷入到U盘中进行安装：

    cros flash usb:// ${BOARD}/latest
    系统安装
    启动进入U盘系统，然后在Shell环境下执行如下命令进行系统安装：

    /usr/sbin/chromeos-install
    对于不同的系统有不同的进入U盘启动环境的方法，具体可以参考页面developer-information-for-chrome-os-devices。
    对于这里使用的Asus C300来说，进入的方法为按住Esc+Refresh+Power三个键。重启后Ctrl+D进入到硬盘启动，再输入sudo crossystem dev_boot_usb=1以打开从U盘启动的选项。
    更多选择
    当进入Chroot环境进行编译时，会使用ebuild编译Chromium浏览器项目，这又是一个几十G的下载量，所以最好的方式自然是能够重用下载好的Chromium项目。这里有如下几个需要注意的点：

    将Chromium浏览器项目放置在目录~/cos/chromium；
    修改ChromiumOS项目下的配置文件src/third_party/chromiumos-overlay/chromeos-base/chromeos-chrome/chromeos-chrome-9999.ebuild，去除其中的+runhooks，因为在编译ChromiumOS时，如果执行到runhooks，又会去下载和编译工具链；
    在工作目录中执行cros_sdk --chrome_root=/home/cos/chromium，以进入Chroot环境；
    在选定好主板类型后，执行cros_workon --board=${BOARD} start chromeos-chrome，以确保使用自定义的ebuild文件，这通常就是编号为9999的ebuild文件，最终执行结果为将数据=chromeos-base/chromeos-chrome-9999写入到文件.config/cros_workon/quawks中；
    在Chroot环境中，还需要执行export CHROME_ORIGIN=LOCAL_SOURCE以使用本地项目进行编译；
    最终对Chromium项目的修改，都会被编译进ChromiumOS系统，其他的步骤与原版无二致。

## CHROMIUM OS
[Chromium OS | ArnoldTheBats World of Whimsy](https://arnoldthebat.co.uk/wordpress/chromium-os/)

Chromium OS is an open-source project that aims to build an operating system that provides a fast, simple, and more secure computing experience for people who spend most of their time on the web.

All downloads are located at http://chromium.arnoldthebat.co.uk/. This will be updated daily where builds compile succcessfully..

Build Instructions for USB

**Linux**
- Use p7zip to extract the IMG file from the downloaded file.
- At the shell, run the following (where sdX is your USB stick and ChromeOS.img is the path to the IMG file you extracted):
- dd if=ChromeOS.img of=/dev/sdX bs=4M
- Boot from USB stick

**Windows**
- Use 7zip to extract IMG file from the downloaded file.
- Use Win32 Image Writer, then select the IMG file and select the USB device from the menu.
- Click on “Write”.
- Boot from USB stick

All builds based on x86, amd64 and ARM generic board.

If you want to install to your hard drive, follow the instructions [here](https://chromium.googlesource.com/chromiumos/docs/+/master/developer_guide.md#Getting-to-a-command-prompt-on-Chromium-OS) and [here](https://chromium.googlesource.com/chromiumos/docs/+/master/developer_guide.md#Installing-your-Chromium-OS-image-to-your-hard-disk). Heed the warnings noted in the links!


Please note: there is a new behaviour with the chronos user password. The password has been removed from build R55-8777 onward and will continue to be removed for better overall security. Older builds have the password of ‘password’.
This means you need to use ‘chromeos-setdevpasswd’ from either shell or console to set your own password from build R55-8777 onwards.

By default, this also disables SSH access so if you also need this level of access, you will need to set a separate password using ‘sudo passwd chronos’. This allows the password for dev access and SSH access to remain separate if needed.

You can also just set a password using ‘sudo passwd chronos’ and this will allow for both dev and SSH access if you need to keep them the same. Do not use ‘chromeos-setdevpasswd’ if you want to keep the passwords the same.

Once installed, you can update from the Dev Server noted here.
http://arnoldthebat.co.uk/wordpress/2012/12/28/dev-server-updates-now-available/

Thanks to The [Chromium Projects](http://www.chromium.org/)

[Chromium OS GNU GENERAL PUBLIC LICENSE]
