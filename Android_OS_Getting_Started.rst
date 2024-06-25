.. code-block:: bash

   #!/usr/bin/env bash
   
   exit
   docutils $0 $0.html

   while read it; do
      url="$it?hl=en"
      echo "::$url" > /pl/out.html
      curl "$url" | sed -n '/devsite-article-body/,/Last updated/p' \
      | pandoc -r html -t rst --columns=80 --list-table=true >> /pl/out.html
      exit
   done <<EOF
   https://source.android.google.cn/docs/setup
   EOF
   exit


/TOC 💛 Android OS Source
=================================

.. container:: section

   Android Open Source Project (AOSP) 开源项目维护着一个全面的软件堆栈，原始设备制造商
   (OEM) 和其他设备实现者可移植并在自己的硬件上运行该堆栈。为了保持 Android 项目的质量，
   Google 分派了全职工程师、产品经理、界面设计师、质量保证测试人员以及将新型设备推向市场所需的
   所有其他角色来负责相关工作。同时，还维护着多个代码流水线 (codelines)，以便明确区分当前
   稳定版 Android 与不稳定的实验性版本。

   Android 源代码位于由 Google 托管的一组 Git 仓库中。Git 仓库包含 Android 源代码的完整
   历史记录，其中包括对源代码的更改以及更改时间。

   Google 使用 repo_ 脚本作为源代码控制工具（Source control workflow），
   另外，Chromium 项目也如此，这是 Google 的习惯。命令参考文档： `Repo command reference`_

.. _repo: https://source.android.google.cn/docs/setup/create/coding-tasks
.. _Repo command reference: https://source.android.google.cn/docs/setup/reference/repo

   https://gerrit.googlesource.com/git-repo/+/HEAD/README.md

   Android 谷歌托管服务器在国内“墙”的原因导致不能正常访问，应该使用第三方提供的镜像服务器：

      fatal: Cannot get
      https://gerrit.googlesource.com/git-repo/clone.bundle
      fatal: error [Errno 101] Network is unreachable

   可访问 https://github.com/orgs/aosp-mirror/repositories?type=archived 在线搜索及浏览 AOSP 源码。

   智能机的前身是个人数字助理 Personal Digital Assistance (PDA)。上世界未，计算机与软件工业
   迎来暴发式增长，众多设备与软件被研发出来。其中，Palm Computer 的创立并发布首款 PDA 产品，
   Palm 曾是第一家以 PDA 的形态向消费市场提供平板电脑的公司，最终被苹果及其后续者打败。当前，
   移动互联网市场，Android 与 iPhone iOS 双足并立，前者开放，后者封闭。移动设备 CPU/MCU/SoC
   则基本由 ARM（Advanced RISC Machines）公司独揽，在智能手机芯片、车载信息芯片、可穿戴设备、
   物联网微控制器等领域占到 90% 以上市场份额，ARM 构架 CPU 无疑是移动端霸主。ARM 采取的是 IP
   (Intellectual Property) 知识产权授权的商业模式，ARM 公司收取一次性技术授权费用和版税提成。
   ARM 构架 CPU 主要分为三大系列：高端应用系列、实时系统系列、微控制系列。版本从j早期 ARMv1 迭代
   到现在的 ARMv9，性能直逼桌面平台 x86 构架 CPU。ARM 预测，未来十年合作伙伴基于 ARM 芯片的
   出货量将超过 3000 亿。

   +--------------------------+----------------------------+------------------------------+
   | A-profile (Applications) |   R-profile (Real-time)    | M-profile (Microcontroller)  |
   +--------------------------+----------------------------+------------------------------+
   | • High performance       | • Targeted at systems with | • Smallest/lowest power.     |
   |                          | real-time requirements.    | Small, highly power-         |
   |                          |                            | efficient devices.           |
   +--------------------------+----------------------------+------------------------------+
   | • Designed to run a      | • Commonly found in        | • Found at the heart of many |
   | complex operating        | networking equipment, and  | IoT devices.                 |
   | system, such as Linux    | embedded control systems.  |                              |
   | or Windows.              |                            |                              |
   +--------------------------+----------------------------+------------------------------+

   Palm 历史事件：

      *  1998 年  3 月，Palm OS 3 操作系统发布。
      *  1998 年  7 月，霍金斯，杜宾斯基和柯林根等创始人离开 Palm。
      *  2001 年  3 月，Palm OS 4 操作系统发布。
      *  2001 年  7 月，Palm 公开宣布转向 ARM 处理器的计划。
      *  2001 年  8 月，PalmSource 收购 BeOS。
      *  2002 年  1 月，PalmSource 成为 Palm 的子公司。
      *  2002 年 11 月，Palm OS 5 操作系统发布，并推出 Palm Tungsten T，使用 144 MHz TI OMAP ARM 处理器。
      *  2003 年  6 月，创始人回到 Palm。
      *  2003 年 10 月，PalmSource 独立运作。
      *  2004 年  1 月，PalmSource 发布 Palm OS 6 Cobalt，但没有任何厂商采用。

   Yocto Project 是一个构建工具，能帮助开发者快速、简单地设计一个基于 Linux 的系统。该项目由
   Linux 基金会赞助，于 2010 年启动。另外，关联项目 OpenEmbedded 源于夏普的一个开源项目
   OpenZaurus，服务于 SL-5000D，后来结合了其他几个类似的嵌入式项目（Familiar Linux，
   OpenSIMpad），其目的是为嵌入式系统构建 Linux 发行版。OpenEmbedded 项目维护了一个 BitBake
   构建工具，和一个元数据层（详细描述了构建一个Linux发行版所需要的包及构建过程）。Poky Linux
   是 OpenEmbedded 项目的一个扩展应用，同时也是 Yocto 的前身。2011 年，OpenEmbedded 项目
   宣布与 Yocto 项目进行合作，共同维护 BitBake 以及一个核心数据层。

      The project provides a flexible set of tools and a space where embedded 
      developers worldwide can share technologies, software stacks, configurations, 
      and best practices that can be used to create tailored Linux images for 
      embedded and IOT devices, or anywhere a customized Linux OS is needed.

   *  `Android 镜像使用帮助 <https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/>`__
   *  `Introducing the Arm architecture v2.0 <https://developer.arm.com/documentation/102404/0201/>`__
   *  `A History of Palm, Part 2: Palm PDAs and Phones, 1996 to 2003 <https://lowendmac.com/2016/a-history-of-palm-part-2-palm-pdas-and-phones-1996-to-2003/>`__
   *  `i.MX Yocto Project 用户指南 <https://www.nxp.com.cn/docs/zh/user-guide/IMXLXYOCTOUG.pdf>`__
   *  `i.MX Yocto Project User's Guide <https://www.nxp.com/docs/en/user-guide/IMX_YOCTO_PROJECT_USERS_GUIDE.pdf>`__
   *  `MyZaurus 介绍网站 <http://zaurus.geek-logic.com/>`__
   *  `Zaurus 论坛 <http://zaurus.retrobase.cn:9001/>`__
   *  `Zaurus 软件/资料下载 <http://zaurus.retrobase.cn:7500/>`__

   .. code-block:: bash

      # In **i.MX Yocto Project User's Guide document**
      # **Quick Start part:**

      # Install the `repo` utility:
      # To get the BSP you need to have "repo" installed.
      # This only needs to be done once.

      $ mkdir ~/bin
      $ curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
      $ curl https://mirrors.tuna.tsinghua.edu.cn/git/git-repo > ~/bin/repo
      $ chmod a+x ~/bin/repo
      $ export PATH=${PATH}:~/bin

   下载好的 repo 脚本中使用的是 google 服务器地址，需要修改 ``REPO_URL`` 为镜像服务器地址，
   打开 ~/bin/repo 脚本文件并替换其中的内容，以下使用 sed 命令替换 URL 地址，仅供参考：

   .. code-block:: bash

      from=https://gerrit.googlesource.com/git-repo
      to=https://mirrors.tuna.tsinghua.edu.cn/git/git-repo/
      sed -i "s|$from|$to|" ~/repo
      cat ~/repo | grep 'REPO_URL ='

   开发机器保存多个 Android 版本，只要位于不同的目录中即可。每个检出和 build 都会使用 300 GB 
   或更大的空间。初始化工作目录以便控制源代码：

      $ repo init -b main -u https://android.googlesource.com/platform/manifest
      $ repo has been initialized in path_to_working_directory

   使用 -b 参数标识正在初始化的分支，默认采用主分支，分支和标记名称的列表，请参阅源代码文档。
   `Codenames, tags, and build numbers <https://source.android.google.cn/docs/setup/reference/build-numbers>`__

   清单文件使用 -u 指定，这是必需选项。清单是一个 XML 文件，用于指定 Android 源代码中的各种
   Git 项目位于工作目录的什么位置。 在此示例中，清单文件的名称未指定，因此命令使用默认清单文件
   (default.xml)。

   注意：默认情况下，repo init 会初始化当前目录，以便与源代码的 main 分支一起使用。


/TOC 💛 Android OS Getting Started
==================================

.. container:: section

   .. image:: https://www.gstatic.cn/devrel-devsite/prod/v8710cb4731a368cb758d972abd8e9129d9a2b5cf087d107be78174bbc0c595e6/androidsource/images/lockup.svg
      :alt:   Android Open Source Project
      :class: devsite-site-logo
      :target: https://source.android.google.cn/


.. container:: navigation

   -  `Documentation <https://source.android.google.cn/docs>`__
   -  `What's New? <https://source.android.google.cn/docs/whatsnew>`__
   -  `Getting Started <https://source.android.google.cn/docs/setup>`__
   -  `Security <https://source.android.google.cn/docs/security>`__
   -  `Core Topics <https://source.android.google.cn/docs/core>`__
   -  `Compatibility <https://source.android.google.cn/docs/compatibility>`__
   -  `Android Devices <https://source.android.google.cn/docs/devices>`__
   -  `Automotive <https://source.android.google.cn/docs/automotive>`__
   -  `Reference <https://source.android.google.cn/reference>`__

   - `GO TO CODE ➚ <https://cs.android.com/android/platform/superproject/main>`__

   .. list-table::
      :align: right
      :widths: 30 30 30

      -

         -
            .. container:: dropdown

               🟢  **What's new?**

               -  `Release notes <https://source.android.google.cn/docs/whatsnew/release-notes>`__
               -  `Latest security bulletins <https://source.android.google.cn/docs/whatsnew/latest-security-bulletins>`__
               -  `Latest Compatibility Definition Document (CDD) <https://source.android.google.cn/docs/whatsnew/latest-cdd>`__
               -  `Site updates <https://source.android.google.cn/docs/whatsnew/site-updates>`__

               🟢  **Getting Started**

               -  `About <https://source.android.google.cn/docs/setup/about>`__
               -  `Start <https://source.android.google.cn/docs/setup/start>`__
               -  `Download <https://source.android.google.cn/docs/setup/download>`__
               -  `Build <https://source.android.google.cn/docs/setup/build>`__
               -  `Test <https://source.android.google.cn/docs/setup/test>`__
               -  `Create <https://source.android.google.cn/docs/setup/create/coding-tasks>`__
               -  `Contribute <https://source.android.google.cn/docs/setup/contribute>`__
               -  `Community <https://source.android.google.cn/docs/setup/community/cofc>`__
               -  `Tools, build, and related reference <https://source.android.google.cn/docs/setup/reference>`__

               🟢  **Security**

               -  `Overview <https://source.android.google.cn/docs/security/overview>`__
               -  `Bulletins <https://source.android.google.cn/docs/security/bulletin>`__
               -  `Features <https://source.android.google.cn/docs/security/features>`__
               -  `Testing <https://source.android.google.cn/docs/security/test/fuzz-sanitize>`__
               -  `Best Practices <https://source.android.google.cn/docs/security/best-practices>`__

         -
            .. container:: dropdown

               🟢  **Core Topics**

               -  `Architecture <https://source.android.google.cn/docs/core/architecture>`__
               -  `Audio <https://source.android.google.cn/docs/core/audio>`__
               -  `Camera <https://source.android.google.cn/docs/core/camera>`__
               -  `Connectivity <https://source.android.google.cn/docs/core/connect>`__
               -  `Data <https://source.android.google.cn/docs/core/data>`__
               -  `Display <https://source.android.google.cn/docs/core/display>`__
               -  `Fonts <https://source.android.google.cn/docs/core/fonts/custom-font-fallback>`__
               -  `Graphics <https://source.android.google.cn/docs/core/graphics>`__
               -  `Interaction <https://source.android.google.cn/docs/core/interaction>`__
               -  `Media <https://source.android.google.cn/docs/core/media>`__
               -  `Performance <https://source.android.google.cn/docs/core/perf>`__
               -  `Permissions <https://source.android.google.cn/docs/core/permissions>`__
               -  `Power <https://source.android.google.cn/docs/core/power>`__
               -  `Runtime <https://source.android.google.cn/docs/core/runtime>`__
               -  `Settings <https://source.android.google.cn/docs/core/settings>`__
               -  `Storage <https://source.android.google.cn/docs/core/storage>`__
               -  `Tests <https://source.android.google.cn/docs/core/tests>`__
               -  `Updates <https://source.android.google.cn/docs/core/ota>`__
               -  `Virtualization <https://source.android.google.cn/docs/core/virtualization>`__

         -
            .. container:: dropdown

               🟢  **Compatibility**

               -  `Compatibility Definition Document (CDD) <https://source.android.google.cn/docs/compatibility/cdd>`__
               -  `Compatibility Test Suite (CTS) <https://source.android.google.cn/docs/compatibility/cts>`__

               🟢  **Android Devices**

               -  `Cuttlefish <https://source.android.google.cn/docs/devices/cuttlefish>`__
               -  `Enterprise <https://source.android.google.cn/docs/devices/admin>`__
               -  `TV <https://source.android.google.cn/docs/devices/tv>`__

               🟢  **Automotive**

               -  `Get Started <https://source.android.google.cn/docs/automotive/start/what_automotive>`__
               -  `Guidelines for Development <https://source.android.google.cn/docs/automotive/guidelines>`__
               -  `Development Tools <https://source.android.google.cn/docs/automotive/dev-tools>`__
               -  `Testing Tools and Infrastructure <https://source.android.google.cn/docs/automotive/tools>`__
               -  `Release Details <https://source.android.google.cn/docs/automotive/start/releases>`__

               🟢  **Reference**

               -  `HIDL <https://source.android.google.cn/reference/hidl>`__
               -  `HAL <https://source.android.google.cn/reference/hal>`__
               -  `Trade Federation <https://source.android.google.cn/reference/tradefed/classes>`__
               -  `Security Test Suite <https://source.android.google.cn/reference/sts/classes>`__



.. container:: topics

   -  `Overview <https://source.android.google.cn/docs/setup>`__

   -  About

      -  `AOSP overview <https://source.android.google.cn/docs/setup/about>`__
      -  `Android software management <https://source.android.google.cn/docs/setup/about/codelines>`__
      -  `Brand guidelines <https://source.android.google.cn/docs/setup/about/brands>`__
      -  `FAQ <https://source.android.google.cn/docs/setup/about/faqs>`__

   -  Start

      -  `Kickstart development <https://source.android.google.cn/docs/setup/start>`__
      -  `Understand terminology <https://source.android.google.cn/docs/setup/start/glossary>`__
      -  `Set up for AOSP development (9.0 or later) <https://source.android.google.cn/docs/setup/start/requirements>`__
      -  `Set up for AOSP development (2.3 - 8.0) <https://source.android.google.cn/docs/setup/start/older-versions>`__

   -  Download

      -  `Download the Android source <https://source.android.google.cn/docs/setup/download>`__
      -  `Troubleshoot and fix sync issues <https://source.android.google.cn/docs/setup/download/troubleshoot-sync>`__
      -  `Source control tools <https://source.android.google.cn/docs/setup/download/source-control-tools>`__

   -  Build

      -  `Soong build system <https://source.android.google.cn/docs/setup/build>`__
      -  `Build Android <https://source.android.google.cn/docs/setup/build/building>`__
      -  `Building Kernels <https://source.android.google.cn/docs/setup/build/building-kernels>`__
      -  `Build Pixel kernels <https://source.android.google.cn/docs/setup/build/building-pixel-kernels>`__
      -  `Implement Java SDK library <https://source.android.google.cn/docs/setup/build/java-library>`__

      -  **Android Rust**

         -  `Introduction <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/overview>`__
         -  `Android Rust modules <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/android-rust-modules>`__
         -  `Binary modules <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/binary-modules>`__
         -  `Library modules <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/library-modules>`__
         -  `Test modules <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/test-modules>`__
         -  `Fuzz modules <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/fuzzer-modules>`__

         -  Source generators

            -  `Source generators overview <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/source-code-generators/source-code-gen-intro>`__
            -  `Bindgen bindings modules <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/source-code-generators/bindgen-modules>`__
            -  `Protobuf modules <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/source-code-generators/protobuf-modules>`__

         -  `Hello Rust example <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/hello-rust-example>`__
         -  `Android Rust patterns <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/android-rust-patterns>`__
         -  `Rust IDE setup <https://source.android.google.cn/docs/setup/build/rust/building-rust-modules/rust-ide-setup>`__

      -  `Compile with Jack (6.0 - 8.1) <https://source.android.google.cn/docs/setup/build/jack>`__

   -  Create

      -  `Source control workflow <https://source.android.google.cn/docs/setup/create/coding-tasks>`__
      -  `Custom device development <https://source.android.google.cn/docs/setup/create/custom-devices>`__
      -  `Add a new device type <https://source.android.google.cn/docs/setup/create/new-device>`__
      -  `Build for 32-bit and 64-bit architectures <https://source.android.google.cn/docs/setup/create/64-bit-builds>`__
      -  `Use reference boards <https://source.android.google.cn/docs/setup/create/devices>`__
      -  `Create a software bill of materials (SBOM) <https://source.android.google.cn/docs/setup/create/create-sbom>`__
      -  `Configure and handle update ownership for apps <https://source.android.google.cn/docs/setup/create/app-ownership>`__

   -  Test

      -  `Test a build <https://source.android.google.cn/docs/setup/test>`__
      -  `Flash with Fastboot <https://source.android.google.cn/docs/setup/test/running>`__
      -  `Flash with Android Flash Tool <https://source.android.google.cn/docs/setup/test/flash>`__
      -  `Test with the cuttlefish emulator <https://source.android.google.cn/docs/devices/cuttlefish>`__
      -  `Use Android Emulator virtual devices <https://source.android.google.cn/docs/setup/test/avd>`__

   -  Contribute

      -  `Overview <https://source.android.google.cn/docs/setup/contribute>`__
      -  `Project roles <https://source.android.google.cn/docs/setup/contribute/roles>`__
      -  `Android Code search <https://source.android.google.cn/docs/setup/contribute/code-search>`__
      -  `Life of a patch <https://source.android.google.cn/docs/setup/contribute/life-of-a-patch>`__
      -  `Contributor license agreements and headers <https://source.android.google.cn/docs/setup/contribute/licenses>`__
      -  `Submit patches <https://source.android.google.cn/docs/setup/contribute/submit-patches>`__
      -  `Git source editor <https://source.android.google.cn/docs/setup/contribute/source-editor>`__
      -  `View patches <https://source.android.google.cn/docs/setup/contribute/view-patches>`__
      -  `Android Continuous Integration <https://source.android.google.cn/docs/setup/contribute/dashboard>`__
      -  `Report and track bugs <https://source.android.google.cn/docs/setup/contribute/report-bugs>`__
      -  `Code with respect <https://source.android.google.cn/docs/setup/contribute/respectful-code>`__
      -  `Java code style rules <https://source.android.google.cn/docs/setup/contribute/code-style>`__

   -  Community

      -  `Code of conduct <https://source.android.google.cn/docs/setup/community/cofc>`__
      -  `Android community and contacts <https://source.android.google.cn/docs/setup/community>`__

   -  Tools, build, and related reference

      -  `Overview <https://source.android.google.cn/docs/setup/reference>`__
      -  `Android.bp file format <https://source.android.google.cn/docs/setup/reference/androidbp>`__
      -  `Kernel branches and their build systems <https://source.android.google.cn/docs/setup/reference/bazel-support>`__
      -  `Codenames, tags, and build numbers <https://source.android.google.cn/docs/setup/reference/build-numbers>`__
      -  `Fastboot key combinations <https://source.android.google.cn/docs/setup/reference/fastboot-keys>`__
      -  `Repo command reference <https://source.android.google.cn/docs/setup/reference/repo>`__


.. container:: footer

   .. list-table::
      :align: center
      :widths: 30 30 30

      -
         -
            .. rubric:: Build
               :name: build

            -  `Android repository <https://source.android.google.cn//android.googlesource.com>`__
            -  `Requirements <https://source.android.google.cn/source/requirements>`__
            -  `Downloading <https://source.android.google.cn/source/downloading>`__
            -  `Preview binaries <https://source.android.google.cn//developers.google.com/android/blobs-preview/>`__
            -  `Factory images <https://source.android.google.cn//developers.google.com/android/images/>`__
            -  `Driver binaries <https://source.android.google.cn//developers.google.com/android/drivers/>`__
            -  `GitHub <https://source.android.google.cn//android.github.io>`__
         -
            .. rubric:: Connect
               :name: connect

            -  `@Android on Twitter <https://source.android.google.cn//twitter.com/Android/>`__
            -  `@AndroidDev on Twitter <https://source.android.google.cn//twitter.com/AndroidDev/>`__
            -  `Android Blog <https://source.android.google.cn//blog.google/products/android/>`__
            -  `Google Security Blog <https://source.android.google.cn//security.googleblog.com>`__
            -  `Platform on Google Groups <https://source.android.google.cn//groups.google.com/forum/?fromgroups#!forum/android-platform/>`__
            -  `Building on Google Groups <https://source.android.google.cn//groups.google.com/forum/?fromgroups#!forum/android-building/>`__
            -  `Porting on Google Groups <https://source.android.google.cn//groups.google.com/forum/?fromgroups#!forum/android-porting/>`__
         -
            .. rubric:: Get help
               :name: get-help

            -  `Android Help Center <https://source.android.google.cn//support.google.com/android/>`__
            -  `Pixel Help Center <https://source.android.google.cn//support.google.com/pixelphone/>`__
            -  `Nexus Help Center <https://source.android.google.cn//support.google.com/nexus/>`__
            -  `www.android.com <https://source.android.google.cn//www.android.com>`__
            -  `Google Mobile Services <https://source.android.google.cn//www.android.com/gms/>`__
            -  `Stack Overflow <https://source.android.google.cn//stackoverflow.com/questions/tagged/android-source/>`__
            -  `Issue Tracker <https://source.android.google.cn//issuetracker.google.com/issues?q=status:open%20componentid:190923>`__

            -  `About Android <https://source.android.google.cn/source/>`__
            -  `Community <https://source.android.google.cn/source/community>`__
            -  `Legal <https://source.android.google.cn/legal>`__
            -  `License <https://source.android.google.cn/license>`__
            -  `Privacy <https://source.android.google.cn//policies.google.cn/privacy>`__
            -  `Site feedback <https://source.android.google.cn//issuetracker.google.com/issues/new?component=191476>`__


/Get started with Android Development
=====================================

.. https://source.android.google.cn/docs/setup?hl=en

.. container:: section
   :name: gc-wrapper

   -  `AOSP <https://source.android.google.cn/>`__
   -  `Docs <https://source.android.google.cn/docs>`__
   -  `Getting Started <https://source.android.google.cn/docs/setup>`__

.. container:: section

   .. figure::
      https://developer.android.google.cn/images/cluster-illustrations/academy-for-app-success-16-9.svg

   .. rubric:: Get started with Android Development
      :name: get-started-with-android-development

   .. container::

      Android is an open source software stack created for a wide array of 
      devices with different form factors. Learn more about building and 
      contributing to the platform.

.. container:: section


   .. container:: 
      :name: explore-the-android-os-stack

      -  **About**

         `Explore the Android OS stack <https://source.android.google.cn/docs/setup/about>`__

         Learn more about Android's history and the
         platform's structure.


   .. container:: 
      :name: set-up-your-environment

      -  **Start**

         `Set up your environment <https://source.android.google.cn/docs/setup/start>`__

         Kick-start development and get your environment
         properly set up.


   .. container:: 
      :name: get-the-android-source

      -  **Download**

         `Get the Android source <https://source.android.google.cn/docs/setup/develop>`__

         Learn more about source control tools and
         download the complete Android OS source code.


   .. container:: 
      :name: build-the-android-os

      -  **Build**

         `Build the Android OS <https://source.android.google.cn/docs/setup/build>`__

         Follow step-by-step instructions to build the
         Android OS locally.


   .. container:: 
      :name: test-your-code

      -  **Test**

         `Test your code <https://source.android.google.cn/docs/setup/create/coding-tasks>`__

         Test your customizations to the Android OS.


   .. container:: 
      :name: customize-and-compile-android

      -  **Create**

         `Customize and compile Android <https://source.android.google.cn/docs/setup/test>`__

         Create and compile your own customizations to the Android OS.


   .. container:: 
      :name: submit-feedback-and-fixes

      -  **Contribute**

         `Submit feedback and fixes <https://source.android.google.cn/docs/setup/contribute>`__

         Submit your own contributions to the Android Open Source Project.


   .. container:: 
      :name: interact-with-others

      -  **Community**

         `Interact with others <https://source.android.google.cn/docs/setup/community>`__

         Interact with, and get help from, the Android community.


   .. container:: 
      :name: examine-all-your-options

      -  **Tools, build, and related reference**

         `Examine all your options <https://source.android.google.cn/docs/setup/reference>`__

         Examine command options, builds, unique file formats, and device lists.


Content and code samples on this page are subject to the licenses
described in the `Content License <https://source.android.google.cn/license>`__. 
Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.

Last updated 2024-05-02 UTC.
