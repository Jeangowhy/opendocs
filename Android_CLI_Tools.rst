

/TOC 💛 Command-line tools
=========================

https://developer.android.google.cn/tools?hl=en 

.. container:: devsite-mobile-nav-top

   -  `Essentials <https://developer.android.google.cn/get-started>`__
   -  `Design & Plan <https://developer.android.google.cn/design>`__
   -  `Develop <https://developer.android.google.cn/develop>`__
   
      -  `Download <https://developer.android.google.cn/studio>`__
      -  `Android Studio editor <https://developer.android.google.cn/studio/intro>`__
      -  `Gemini in Android Studio <https://developer.android.google.cn/gemini-in-android>`__
      -  `Android Gradle Plugin <https://developer.android.google.cn/build>`__
      -  `SDK tools <https://developer.android.google.cn/tools>`__
      -  `Preview <https://developer.android.google.cn/studio/preview>`__

   -  `Google Play <https://developer.android.google.cn/distribute>`__
   -  `Community <https://developer.android.google.cn/community>`__
   -  `Android Studio <https://developer.android.google.cn/studio>`__

.. container:: devsite-mobile-nav-bottom

   -  What's new in SDK Tools

   -  `SDK build tools release notes <https://developer.android.google.cn/tools/releases/build-tools>`__
   -  `SDK command line tools release notes <https://developer.android.google.cn/tools/releases/cmdline-tools>`__
   -  `SDK platform release notes <https://developer.android.google.cn/tools/releases/platforms>`__
   -  `SDK platform tools release notes <https://developer.android.google.cn/tools/releases/platform-tools>`__

   -  

      .. container:: devsite-expandable-nav

         .. container:: devsite-nav-title devsite-nav-title-no-path

            Command line tools

         -  `Overview <https://developer.android.google.cn/tools>`__
         -  `aapt2 <https://developer.android.google.cn/tools/aapt2>`__
         -  `adb <https://developer.android.google.cn/tools/adb>`__
         -  `apkanalyzer <https://developer.android.google.cn/tools/apkanalyzer>`__
         -  `apksigner <https://developer.android.google.cn/tools/apksigner>`__
         -  `avdmanager <https://developer.android.google.cn/tools/avdmanager>`__
         -  `bmgr <https://developer.android.google.cn/tools/bmgr>`__
         -  `bundletool <https://developer.android.google.cn/tools/bundletool>`__
         -  `d8 <https://developer.android.google.cn/tools/d8>`__
         -  `dmtracedump <https://developer.android.google.cn/tools/dmtracedump>`__
         -  `dumpsys <https://developer.android.google.cn/tools/dumpsys>`__
         -  `etc1tool <https://developer.android.google.cn/tools/etc1tool>`__
         -  `jobb <https://developer.android.google.cn/tools/jobb>`__
         -  `jetifier-standalone <https://developer.android.google.cn/tools/jetifier>`__
         -  `logcat <https://developer.android.google.cn/tools/logcat>`__
         -  `mksdcard <https://developer.android.google.cn/tools/mksdcard>`__
         -  `retrace <https://developer.android.google.cn/tools/retrace>`__
         -  `sdkmanager <https://developer.android.google.cn/tools/sdkmanager>`__
         -  `sqlite3 <https://developer.android.google.cn/tools/sqlite3>`__
         -  `systrace <https://developer.android.google.cn/tools/systrace>`__
         -  `perfetto <https://developer.android.google.cn/tools/perfetto>`__
         -  `zipalign <https://developer.android.google.cn/tools/zipalign>`__
         -  `Environment variables <https://developer.android.google.cn/tools/variables>`__


/SDK Build Tools release notes
==============================

   https://developer.android.google.cn/tools/releases/build-tools?hl=en 

   .. container:: devsite-article-body clearfix

      Android SDK Build-Tools is a component of the Android SDK required for
      building Android apps. It's installed in the ``<sdk>/build-tools/``
      directory.

      You should always keep your Build Tools component updated by downloading the
      latest version using the `Android SDK Manager <#>`__. If
      you're using `Android plugin for Gradle 3.0.0 <#3-0-0>`__ or higher, your project
      automatically uses a default version of the build tools that the plugin
      specifies. To use a different version of the build tools, specify it using
      `buildToolsVersion <https://google.github.io/android-gradle-dsl/current/com.android.build.gradle.AppExtension.html#com.android.build.gradle.AppExtension:buildToolsVersion>`__
      in your module's ``build.gradle``, as follows:

      .. container::

         .. container:: ds-selector-tabs

            .. container:: section

               .. rubric:: Groovy
                  :name: groovy

               .. code:: prettyprint

                  android {
                      buildToolsVersion "34.0.0"
                      ...
                  }

            .. container:: section

               .. rubric:: Kotlin
                  :name: kts

               .. code:: prettyprint

                  android {
                      buildToolsVersion = "34.0.0"
                      ...
                  }

      .. rubric:: Revisions
         :name: notes

      The sections below provide notes about releases of the Build Tools. To
      determine which revisions of the Build Tools are available in your SDK, refer
      to the *Installed Packages* listing in the Android SDK Manager.

      .. container:: section expandable expanded

         Build Tools, Revision 34.0.0 RC3\ *(April 2023)*

         General bug fixes and improvements.

      .. container:: section expandable

         Build Tools, Revision 34.0.0 *(February 2023)*

         This update includes support for building with Android 14 preview APIs.

      .. container:: section expandable

         Build Tools, Revision 33.0.2 *(February 2023)*

         This update fixes the following issue:

         -  ``core-lambda-stubs.jar`` version 33.0.0 differs on macOS versus
            Linux/Windows. (
            See `issue #237299698 <https://issuetracker.google.com/issues/237299698>`__.)

      .. container:: section expandable

         Build Tools, Revision 33.0.1 *(November 2022)*

         This update fixes the following issue:

         -   fails with build-tools 33.0.0. (
         See `issue #236167971 <https://issuetracker.google.com/issues/236167971>`__)

      .. container:: section expandable

         Build Tools, Revision 30.0.0 rc4 *(May 2020)*

         This update includes support for building with Android 11 Preview APIs.

      .. container:: section expandable

         Build Tools, Revision 29.0.3 *(January 2020)*

         This update fixes the following issue:

         -  Build issue with Renderscript on macOS Catalina. (
         See `issue #142590626 <https://issuetracker.google.com/issues/142590626>`__)

      .. container:: section expandable

         Build Tools, Revision 29.0.2 *(August 2019)*

         This update fixes the following issue:

         -  `librsjni_androidx.so SIGSEGV <https://issuetracker.google.com/issues/133169129>`__

      .. container:: section expandable

         Build Tools, Revision 29.0.0 *(June 2019)*

         This update includes support for building with API level 29.

      .. container:: section expandable

         Build Tools, Revision 28.0.3 *(September 2018)*

         This update includes support for `Android Gradle plugin 3.2.0 <#3-2-0>`__ and fixes the following
         issues:

         -  Fixed a JNI library bug that caused apps to crash when calling
            ``androidx.renderscript.RenderScript.create()``.
         -  Fixed a bug that caused ``Program type already present`` build errors
            with ``androidx.annotation`` resources.

      .. container:: section expandable

         Build Tools, Revision 28.0.2 *(August 2018)*

         Includes the latest version of `D8 <#>`__.

      .. container:: section expandable

         Build Tools, Revision 27.0.3 *(December 2017)*

         Improves support for compiling lambdas when you enable `Java 8 language features <#>`__.

      .. container:: section expandable

         Build Tools, Revision 27.0.2 *(December 2017)*

         Improves support for `Java 8 language features <#>`__.

      .. container:: section expandable

         Build Tools, Revision 27.0.1 *(November 2017)*

         Adds support for legacy multidex for test APKs. (`Issue #37324038 <https://issuetracker.google.com/37324038>`__)

      .. container:: section expandable

         Build Tools, Revision 26.0.2 *(October 2017)*

         In addition to general bug fixes, this release includes the following
         updates:

         -  Updates ``apksigner`` to version 0.8:

            -  Compatibility with Java 9. (`Issue #37137869 <https://issuetracker.google.com/issues/37137869>`__)
            -  New ``--pass-encoding`` parameter to handle keystores and keys that
               are encrypted using non-ASCII passwords. If you switch to Java 9 and
               ``apksigner`` fails to decrypt your keystore or key, use this
               parameter to specify the character encoding you used to create the
               keystore or key. For more information, see the `apksigner documentation <#options-sign-key-cert>`__
               or run ``apksigner sign --help`` from the commandline.
            -  Better error message when ``apksigner`` can't verify a JAR signature
               due to an unsupported digest or signature algorithm. (`Issue #63525618 <https://issuetracker.google.com/issues/63525618>`__)

         -  Support for AAPT2 daemon mode when using `Android plugin for Gradle 3.0.0-beta7 <#>`__ or
            higher.

      .. container:: section expandable

         Build Tools, Revision 26.0.1 *(July 2017)*

         In addition to general bug fixes, this release restores ``apksigner`` to
         the build tools package (it was omitted by mistake in version 26.0.0) and
         includes the following updates to the tool:

         -  Adds PKCS #11 support to allow signing with keys held in secure
            hardware. (`Issue #37140484 <https://issuetracker.google.com/issues/37140484>`__)
         -  Adds support for loading additional `JCA Providers <https://docs.oracle.com/javase/8/docs/technotes/guides/security/crypto/CryptoSpec.html#Provider>`__
            before signing.
         -  Honors
            `android:targetSandboxVersion <#targetSandboxVersion>`__
            when verifying APKs.
         -  When signing, rejects APKs with files that include 'CR' (carriage
            return), 'LF' (line feed), or 'NUL' (null) special characters in the
            file name.
         -  Fixes ``apksigner.bat`` to correctly handle parameters containing
            spaces. (`Issue #38132450 <https://issuetracker.google.com/issues/38132450>`__)
         -  Fixes a bug in JAR signature verification when multiple digests are
            present for the same entry in ``MANIFEST.MF``. (`Issue #38497270 <https://issuetracker.google.com/issues/38497270>`__)

      .. container:: section expandable

         Build Tools, Revision 26.0.0 *(June 2017)*

         Adds support for building with API level 26 and contains general bug
         fixes.

      .. container:: section expandable

         Build Tools, Revision 25.0.3 *(April 2017)*

         Updates to ``apksigner``:

         -  Added ``--in`` parameter for symmetry with existing ``--out``
            parameter.
         -  If you do not specify the key password using ``--key-pass``,
            ``apksigner`` uses the keystore password as key password. However, if
            the key requires a different password, you are now prompted to enter
            the key password from the command line. (`Issue #37134986 <https://issuetracker.google.com/issues/37134986>`__)
         -  Added compatibility with ``jarsigner`` for non-ASCII passwords. (`Issue #37135737 <https://issuetracker.google.com/issues/37135737>`__)

      .. container:: section expandable

         Build Tools, Revision 25.0.2 *(December 2016)*

         Bug fixes.

      .. container:: section expandable

         Build Tools, Revision 25.0.1 *(November 2016)*

         This release includes bug fixes and the following improvements to
         ``apksigner``:

         -  Support for APKs with obfuscated JAR entry names.
         -  ``--print-certs`` switch now also dumps MD5 fingerprints.

      .. container:: section expandable

         Build Tools, Revision 25.0.0 *(October 2016)*

         Bug fixes for the Jack toolchain:

         -  Fixed issue with Jack supporting non-ASCII source files. (`Issue #218892 <https://code.google.com/p/android/issues/detail?id=218892>`__)
         -  Fixed issue that causes an ``AssertionError`` during some compilations.
            (`Issue #208414 <https://code.google.com/p/android/issues/detail?id=208414>`__)

      .. container:: section expandable

         Build Tools, Revision 24.0.3 *(September 2016)*

         -  Added `apksigner <#>`__, an APK
            signing tool to replace ``jarsigner``. By default, ``apksigner`` signs
            APKs using the conventional JAR signing scheme (used by ``jarsigner``)
            and the `APK Signature Scheme v2 <#apk_signature_v2>`__ introduced
            in Android 7.0 (API level 24). Any modification to an APK signed with
            APK Signature Scheme v2 invalidates its signature. Thus, APK
            post-processing, such as ``zipalign``, must be performed before
            ``apksigner`` is invoked, not after. Invoking ``zipalign`` before
            ``apksigner`` works fine because ``apksigner`` preserves APK alignment
            and compression (unlike ``jarsigner``).

      .. container:: section expandable

         Build Tools, Revision 23.0.3 *(March 2016)*

         -  Fix issues in the `RenderScript <#>`__
            Support Library on arm64 devices.
         -  Fix issues in the `RenderScript <#>`__
            Support Library on certain Jelly Bean devices.
         -  Support ``renderscriptTargetAPI 21+`` when using Android Plugin for
            Gradle, Revision 2.1.0 and above .

      .. container:: section expandable

         Build Tools, Revision 23.0.2 *(November 2015)*

         -  Improved the merging performance of the ``dx`` tool.
         -  Fixed issues in the
            `RenderScript <#>`__ compiler for
            Windows.

      .. container:: section expandable

         Build Tools, Revision 23.0.1 *(October 2015)*

         Fixed issues in the RenderScript tools.

      .. container:: section expandable

         Build Tools, Revision 23.0.0 *(August 2015)*

         Added support for the Android 6.0 (API level 23) release.

      .. container:: section expandable

         Build Tools, Revision 22.0.1 *(March 2015)*

         Fixed compatibility issues with
         `RenderScript <#>`__ kernels on Android
         4.4 (API level 19) to Android 4.1 (API level 16) devices.

      .. container:: section expandable

         Build Tools, Revision 22.0.0 *(March 2015)*

         Added support for Android 5.1 (API level 22).

      .. container:: section expandable

         Build Tools, Revision 21.1.2 *(February 2015)*

         Fixed problem with building data layouts in 32-bit mode.

      .. container:: section expandable

         Build Tools, Revision 21.1.1 *(November 2014)*

         Fixed multidex script issues.

      .. container:: section expandable

         Build Tools, Revision 21.1 *(October 2014)*

         Added multidex file support for APKs and Jack support to address the 64K
         method reference limit.

      .. container:: section expandable

         Build Tools, Revision 21.0.2 *(October 2014)*

         Complete updates for Eclipse ADT to solve instability issues on Windows
         platforms.

      .. container:: section expandable

         Build Tools, Revision 21.0.1 *(October 2014)*

         Initial updates for Eclipse ADT on Windows. Please use Revision 21.0.2.

      .. container:: section expandable

         Build Tools, Revision 21.0.0 *(October 2014)*

         General Notes:
            -  Added support for Android 5.0 (API level 21).
            -  RenderScript now supports seamless 32/64-bit operation for API level
               21 and higher.
            -  Fixed issue with the Gradle build system when using the JaCoCo
               plugin. (`Issue 69174 <http://b.android.com/69174>`__)
            -  Added an *input-list* option for use with long command lines on
               Windows.

      .. container:: section expandable

         Build Tools, Revision 20.0.0 *(June 2014)*

         General Notes:
            -  Added support for Android Wear.

      .. container:: section expandable

         Build Tools, Revision 19.1.0 *(May 2014)*

         General Notes:
            -  Added ``zipalign`` to the Build Tools.
            -  Modified ``aapt`` to ignore XML files that fail to compile.

      .. container:: section expandable

         Build Tools, Revision 19.0.3 *(March 2014)*

         Fixed an issue with RenderScript support.

      .. container:: section expandable

         Build Tools, Revision 19.0.2 *(February 2014)*

         Fixed RenderScript build issues:
            -  Fixed a problem with RenderScript bitcode encoding. (`Issue 64775 <http://b.android.com/64775>`__)
            -  Fixed a problem with RenderScript missing math symbols (`Issue 64110 <http://b.android.com/64110>`__)

      .. container:: section expandable

         Build Tools, Revision 19.0.1 *(December 2013)*

         Fixed miscellaneous build issues:
            -  Fixed support for compiling RenderScript in NDK mode with Gradle.
            -  Fixed ``BufferOverflowException`` problem in the dx build. (`Issue 61710 <http://b.android.com/61710>`__)

      .. container:: section expandable

         Build Tools, Revision 19 *(October 2013)*

         Added support for Android 4.4 (API level 19) build targets.

      .. container:: section expandable

         Build Tools, Revision 18.1.1 *(September 2013)*

         Fixed several minor build issues.

      .. container:: section expandable

         Build Tools, Revision 18.1.0 *(September 2013)*

         Fixed issue with RenderScript support mode.

      .. container:: section expandable

         Build Tools, Revision 18.0.1 *(July 2013)*

         Added support for Android 4.3 (API level 18) build targets.

      .. container:: section expandable

         Build Tools, Revision 17 *(May 2013)*

         Initial release.

         General Notes:
            -  Included support for Android 4.2 (API level 17) build targets.
            -  Decoupled the build-specific components of the Android SDK from the
               platform-tools component, so that the build tools can be updated
               independently of the integrated development environment (IDE)
               components.

   Last updated 2024-05-03 UTC.


/Android SDK Command-Line Tools release notes
=============================================

   https://developer.android.google.cn/tools/releases/cmdline-tools?hl=en 

   .. container:: devsite-article-body clearfix

      The Android SDK Command-Line Tools package contains various tools for
      building and debugging Android apps. It is released concurrently with Android
      Studio and is installed in the
      ``android_sdk /cmdline-tools/ version /bin/`` directory.

      For a complete description of the tools included in this package, see
      `Command line tools <#tools-sdk>`__ in the user guide.

      To install the latest version, check the `SDK Manager <#sdk-manager>`__ for updates. Alternatively, you
      can `download the latest stable version <#command-tools>`__ directly.

      In Android Studio, the latest version available in the SDK Manager dialog
      depends on which update channel you've selected. To use a preview version of
      this package, `set your update channel <#change_your_update_channel>`__ to
      either Beta or Canary.

      To update using ``sdkmanager`` from the command line, use either of the
      following:

      .. code:: prettyprint

         // Beta channel
         sdkmanager 'cmdline-tools;latest' --channel=1

         // Canary channel
         sdkmanager 'cmdline-tools;latest' --channel=3

      **Note:**\  The Android SDK Command-Line Tools package replaces the
      deprecated `SDK Tools <#>`__ package. For
      information about the deprecated SDK Tools package, see the `Android SDK Tools release notes <#>`__.
      .. rubric:: Android SDK Command-Line Tools 5.0 (canary)
         :name: android_sdk_command-line_tools_50_canary

      Updated in December 2020.

      .. rubric:: Android SDK Command-Line Tools 4.0 (beta)
         :name: android_sdk_command-line_tools_40_beta

      Updated in December 2020. Adds the
      `retrace <#>`__ tool.

      .. rubric:: Android SDK Command-Line Tools 3.0
         :name: android_sdk_command-line_tools_30

      Released in July 2020.

      .. rubric:: Android SDK Command-Line Tools 2.1
         :name: android_sdk_command-line_tools_21

      Released in June 2020.

      .. rubric:: Android SDK Command-Line Tools 2.0
         :name: android_sdk_command-line_tools_20

      Released in May 2020.

      .. rubric:: Android SDK Command-Line Tools 1.0
         :name: android_sdk_command-line_tools_10

      Released in February 2020.

   Last updated 2023-04-12 UTC.


/SDK Platform release notes
===========================

   https://developer.android.google.cn/tools/releases/platforms?hl=en 

   .. container:: devsite-article-body clearfix

      This page provides release information about the SDK packages available for
      download from the `SDK Manager <#sdk-manager>`__, in the
      **SDK Platforms** tab.


      .. image:: https://developer.android.google.cn/static/studio/images/intro/sdk-manager-platforms_2x.png
         :class: full-width-nav-aware
         :width: 856px


      Each SDK Platform version includes the following packages:

      -  The **Android SDK Platform** package. This is required to compile your app
         for that version.

      -  Several **System Image** packages. At least one of these is required to
         run that version on the `Android Emulator <#>`__.

         Each platform version includes a system image for each supported form
         factor (handsets, Android TV, and Android Wear). Each form factor might
         offer variations to match your computer's processor architecture (such as
         Intel x86 and ARM EABI). System images labeled **Google APIs** include
         access to `Google Play services <https://developers.google.cn/android/guides/overview>`__ and
         those labeled **Google Play** also include the Google Play Store.

      -  The **Sources for Android** package. This includes the source files for
         the platform. Android Studio may show lines of code from these files while
         you debug your app.

      The revision numbers listed in the following sections are for the **Android
      SDK Platform** package only. The system images may receive separate updates,
      usually to resolve bugs with the emulator. There are no release notes for the
      system images, but you should always keep them up to date.

      **Important:**\  To see the most recent Android system components in the
      Android SDK Manager, you must first install the most recent 
      `Android SDK Command-Line tools <#command-line-tools-only>`__ package.
      .. rubric:: Android 15 (Beta)
         :name: 15

      For details about the platform changes, see the `Android 15 documentation <#>`__.

      .. rubric:: Android 14 (API level 34)
         :name: 14

      For details about the platform changes, see the `Android 14 documentation <#>`__.

      .. container:: section

         .. rubric:: Revision 1 (June 2023)
            :name: revision-1-june-2023
            :class: showalways

         Released to the stable channel (no longer in preview) when 
         `Android 14 reached the Platform Stability milestone <https://android-developers.googleblog.com/2023/06/android-14-beta-3-and-platform-stability.html>`__.

      .. rubric:: Android 13 (API level 33)
         :name: 13

      For details about the platform changes, see the `Android 13 documentation <#>`__.

      .. container:: section

         .. rubric:: Revision 1 (June 2022)
            :name: revision-1-june-2022
            :class: showalways

         Released to the stable channel (no longer in preview) when 
         `Android 13 reached the Platform Stability milestone <https://android-developers.googleblog.com/2022/06/android-13-beta-3-platform-stability.html>`__.

      .. rubric:: Android 12 (API levels 31, 32)
         :name: 12

      12L feature drop (API level 32)
         For details about the platform changes, see the `12L documentation <#>`__.

         .. container:: section

            .. rubric:: Revision 1 (March 2022)
               :name: revision-1-march-2022
               :class: showalways

            `Released to the stable channel <https://blog.google/products/android/12l-larger-screens/>`__
            (no longer in preview).
      Android 12 (API level 31)
         For details about the platform changes, see the `Android 12 documentation <#>`__.

         .. container:: section

            .. rubric:: Revision 1 (August 2021)
               :name: revision-1-august-2021
               :class: showalways

            Released to the stable channel (no longer in preview) when 
            `Android 12 reached the Platform Stability milestone <https://android-developers.googleblog.com/2021/08/android-12-beta-4-and-platform-stability.html>`__.
      Android 12 ATD system images
         This Automated Test Device (ATD) image is an Android system image that is
         optimized for headless automated tests. Early data indicates that tests
         that use this image should experience reduction in emulator process CPU
         and memory usage, and reduction in test wall time.

         It achieves these performance gains through:

         -  Removing most user-facing applications (for example Dialer, Settings,
            and SystemUI).
         -  Disabling hardware renderer drawing.

         The image comes with two versions: Google APIs ATD which provides Google
         APIs, and AOSP ATD which provides pure AOSP experience.

         To learn more about running tests using ATDs, 
         see `Run tests using Automated Test Devices <#gmd-atd>`__.

      .. rubric:: Android 11 (API level 30)
         :name: 11

      For details about the platform changes, see the `Android 11 documentation <#>`__.

      .. container:: section

         .. rubric:: Revision 1 (July 2020)
            :name: revision-1-july-2020
            :class: showalways

         Released to the stable channel (no longer in preview) when `Android 11 reached the Platform Stability milestone <https://android-developers.googleblog.com/2020/07/android-11-beta-2-and-platform-stability.html>`__.

      .. rubric:: Android 10 (API level 29)
         :name: 10

      For details about the platform changes, 
      see `Android 10 for Developers <#>`__.

      .. container:: section

         .. rubric:: Revision 5 (July 2020)
            :name: revision-5-july-2020
            :class: showalways

         This revision adds Android Automotive OS stubs.

      .. rubric:: Android 9 (API level 28)
         :name: 9.0

      For details about the platform changes, 
      see `Android 9 for developers <#>`__.

      .. container:: section

         .. rubric:: Revision 1 (August 2018)
            :name: revision-1-august-2018
            :class: showalways

         Released to the stable channel (no longer in preview).

      .. rubric:: Android 8.1 (API level 27)
         :name: 8.1

      For details about the platform changes, 
      see `Android 8.1 for developers <#>`__.

      .. container:: section

         .. rubric:: Revision 1 (December 2017)
            :name: revision-1-december-2017
            :class: showalways

         Released to the stable channel (no longer in preview).

      .. rubric:: Android 8.0 (API level 26)
         :name: 8.0

      For details about the platform changes, 
      see `Android 8.0 for developers <#>`__.

      .. container:: section

         .. rubric:: Revision 2 (August 2017)
            :name: revision-2-august-2017
            :class: showalways

         Released to the stable channel (no longer in preview).

      .. rubric:: Android 7.1 (API level 25)
         :name: 7.1

      For details about the platform changes, 
      see `Android 7.1 for developers <#>`__.

      .. container:: section

         .. rubric:: Revision 3 (December 2016)
            :name: revision-3-december-2016
            :class: showalways

         Incremental update. Released as the final Android 7.1.1 (no longer in
         preview).

         Dependencies:

         -  Android SDK Platform-Tools 25.0.1 or higher is required.
         -  Android SDK Build-Tools 25.0.1 or higher is required.

      .. container:: section

         .. rubric:: Revision 2 (November 2016)
            :name: revision-2-november-2016
            :class: showalways

         Incremental update. Released as Android 7.1.1 Developer Preview 2. For
         more information, see the `Android 7.1 API Overview <#>`__.

         Dependencies:

         -  Android SDK Platform-Tools 25.0.1 or higher is required.
         -  Android SDK Build-Tools 25.0.1 or higher is required.

      .. container:: section

         .. rubric:: Revision 1 (October 2016)
            :name: revision-1-october-2016
            :class: showalways

         Initial release for Android 7.1 (API level 25). Released as Android 7.1
         Developer Preview 1. For more information, see the `Android 7.1 API Overview <#>`__.

         Dependencies:

         -  Android SDK Platform-Tools 25.0.0 or higher is required.
         -  Android SDK Build-Tools 25.0.0 or higher is required.

      .. rubric:: Android 7.0 (API level 24)
         :name: 7.0

      For details about the platform changes, 
      see `Android 7.0 for developers <#>`__.

      .. container:: section

         .. rubric:: Revision 1 (August 2016)
            :name: revision-1-august-2016
            :class: showalways

         Initial release for Android 7.0 (API level 24). For more information, see
         the `Android 7.0 API Overview <#>`__.

         Dependencies:

         -  Android SDK Platform-tools r24 or higher is required.
         -  Android SDK Tools 24.0.0 or higher is required.

      .. rubric:: Android 6.0 (API level 23)
         :name: 6.0

      For details about the platform changes, see the `Android 6.0 changes <#>`__ and 
      `Android 6.0 APIs <#>`__.

      .. container:: section

         .. rubric:: Revision 2 (November 2015)
            :name: revision-2-november-2015
            :class: showalways

         Fixed bugs in the layout rendering library used by Android Studio.

         Dependencies:

         -  Android SDK Platform-tools r23 or higher is required.
         -  Android SDK Tools 24.3.4 or higher is required.

      .. container:: section

         .. rubric:: Revision 1 (August 2015)
            :name: revision-1-august-2015
            :class: showalways

         Initial release for Android 6.0 (API level 23). For more information, see
         the `Android 6.0 API Overview <#>`__.

         Dependencies:

         -  Android SDK Platform-tools r23 or higher is required.
         -  Android SDK Tools 24.3.4 or higher is required.

      .. rubric:: Android 5.1 (API level 22)
         :name: 5.1

      For details about the platform changes, see the `Lollipop overview <#>`__ and 
      `Android 5.1 API changes <#>`__.

      .. container:: section

         .. rubric:: Revision 1 (March 2015)
            :name: revision-1-march-2015
            :class: showalways

         Initial release for Android 5.1 (API level 22). For more information, see
         the `Android 5.1 API Overview <#>`__.

         Dependencies:

         -  Android SDK Platform-tools r22 or higher is required.
         -  Android SDK Tools 23.0.5 or higher is required.

      .. rubric:: Android 5.0 (API level 21)
         :name: 5.0

      For details about the platform changes, see the `Lollipop overview <#>`__ and 
      `Android 5.0 API changes <#>`__.

      .. container:: section

         .. rubric:: Revision 2 (December 2014)
            :name: revision-2-december-2014
            :class: showalways

         Updated layouts in the Support Library and fixed various issues.

         Dependencies:

         -  Android SDK Platform-tools r21 or higher is required.
         -  Android SDK Tools 23.0.5 or higher is required.

      .. container:: section

         .. rubric:: Revision 1 (October 2014)
            :name: revision-1-october-2014
            :class: showalways

         Initial release for Android 5.0 (API level 21). For more information, see
         the `Android 5.0 API Overview <#>`__.

         Dependencies:

         -  Android SDK Platform-tools r21 or higher is required.
         -  Android SDK Tools 23.0.5 or higher is required.

      .. rubric:: Android 4.4W (API level 20)
         :name: 4.4w

      This version makes KitKat available for Android Wear.

      .. container:: section

         .. rubric:: Revision 2 (October 2014)
            :name: revision-2-october-2014
            :class: showalways

         Updated the rendering library.

         Dependencies:

         -  Android SDK Platform-tools r20 or higher is required.
         -  Android SDK Tools 23.0 or higher is required.

      .. container:: section

         .. rubric:: Revision 1 (June 2014)
            :name: revision-1-june-2014
            :class: showalways

         Initial release for Android Wear.

         Dependencies:

         -  Android SDK Platform-tools r20 or higher is required.
         -  Android SDK Tools 23.0 or higher is required.

      .. rubric:: Android 4.4 (API level 19)
         :name: 4.4

      For details about the platform changes, see the `KitKat overview <#>`__ and 
      `Android 4.4 API changes <#>`__.

      .. container:: section

         .. rubric:: Revision 2 (December 2013)
            :name: revision-2-december-2013
            :class: showalways

         Maintenance release. The system version is 4.4.2. For more information,
         see the `Android 4.4 API Overview <#>`__.

         Dependencies:
            Android SDK Platform-tools r19 or higher is required.
            Android SDK Tools 22.3 or higher is recommended.

      .. container:: section

         .. rubric:: Revision 1 (October 2013)
            :name: revision-1-october-2013
            :class: showalways

         Initial release. The system version is 4.4. For more information, see the
         `Android 4.4 API Overview <#>`__.

         Dependencies:
            Android SDK Platform-tools r19 or higher is required.
            Android SDK Tools 22.3 or higher is recommended.

      .. rubric:: Android 4.3 (API level 18)
         :name: 4.3

      For details about the platform changes, see the `Jelly Bean overview <#>`__ and 
      `Android 4.3 API changes <#>`__.

      .. container:: section

         .. rubric:: Revision 2 (August 2013)
            :name: revision-2-august-2013
            :class: showalways

         Maintenance update. The system version is 4.3.

         Dependencies:
            Android SDK Platform-tools r18 or higher is required.
            Android SDK Tools 22.0.4 or higher is recommended.

      .. container:: section

         .. rubric:: Revision 1 (July 2013)
            :name: revision-1-july-2013
            :class: showalways

         Initial release. The system version is 4.3.

         Dependencies:
            Android SDK Platform-tools r18 or higher is required.
            Android SDK Tools 22.0.4 or higher is recommended.

      .. rubric:: Android 4.2 (API level 17)
         :name: 4.2

      For details about the platform changes, see the `Jelly Bean overview <#>`__ and 
      `Android 4.2 API changes <#>`__.

      .. container:: section

         .. rubric:: Revision 2 (February 2013)
            :name: revision-2-february-2013
            :class: showalways

         Maintenance update. The system version is 4.2.2.

         Dependencies:
            SDK Tools r21 or higher is required.

      .. container:: section

         .. rubric:: Revision 1 (November 2012)
            :name: revision-1-november-2012
            :class: showalways

         Initial release. The system version is 4.2.

         Dependencies:
            SDK Tools r20 or higher is required.

      .. rubric:: Android 4.1 (API level 16)
         :name: 4.1

      For details about the platform changes, see the `Jelly Bean overview <#>`__ and 
      `Android 4.1 API changes <#>`__.

      .. container:: section

         .. rubric:: Revision 3 (October 2012)
            :name: revision-3-october-2012
            :class: showalways

         Maintenance update. The system version is 4.1.2.

         Dependencies:
            SDK Tools r20 or higher is required.

      .. container:: section

         .. rubric:: Revision 2 (July 2012)
            :name: revision-2-july-2012
            :class: showalways

         Maintenance update. The system version is 4.1.1.

         Dependencies:
            SDK Tools r20 or higher is required.

      .. container:: section

         .. rubric:: Revision 1 (June 2012)
            :name: revision-1-june-2012
            :class: showalways

         Initial release. The system version is 4.1.0.

         Dependencies:
            SDK Tools r20 or higher is required.

      .. rubric:: Android 4.0.3 (API level 15)
         :name: 4.0.3

      .. container:: section

         .. rubric:: Revision 3 (March 2012)
            :name: revision-3-march-2012
            :class: showalways

         Maintenance update. The system version is 4.0.4.

         **Note:** This system image includes support for emulator hardware
         graphics acceleration when used with SDK Tools r17 or higher. (`more info <#accel-graphics>`__)

         Dependencies:
            SDK Tools r17 or higher is required.

      .. container:: section

         .. rubric:: Revision 2 (January 2012)
            :name: revision-2-january-2012
            :class: showalways

         Maintenance update. The system version is 4.0.3.

         Dependencies:
            SDK Tools r14 or higher is required.

      .. container:: section

         .. rubric:: Revision 1 (December 2011)
            :name: revision-1-december-2011
            :class: showalways

         Initial release. The system version is 4.0.3.

         Dependencies:
            SDK Tools r14 or higher is required.

      .. rubric:: Android 4.0 (API level 14)
         :name: 4.0

      .. container:: section

         .. rubric:: Android 4.0, Revision 2 (December 2011)
            :name: android-4.0,-revision-2-december-2011
            :class: showalways

         Maintenance update. The system version is 4.0.2.

         Dependencies:
            SDK Tools r14 or higher is required.

      .. container:: section

         .. rubric:: Android 4.0, Revision 1 (October 2011)
            :name: android-4.0,-revision-1-october-2011
            :class: showalways

         Initial release. The system version is 4.0.1.

         Dependencies:
            SDK Tools r14 or higher is required.

      .. rubric:: Android 3.2 (API level 13)
         :name: 3.2

      .. container:: section

         .. rubric:: Android 3.2, Revision 1 (July 2011)
            :name: android-3.2,-revision-1-july-2011
            :class: showalways

         Initial release. SDK Tools r12 or higher is recommended.

      .. rubric:: Android 3.1 (API level 12)
         :name: 3.1

      .. container:: section

         .. rubric:: Android 3.1, Revision 3 (July 2011)
            :name: android-3.1,-revision-3-july-2011
            :class: showalways

         Dependencies:
            Requires `SDK Tools r12 <#>`__ or higher.

         Notes:
            Improvements to the platform's rendering library to support the visual
            layout editor in the ADT Eclipse plugin. This revision allows for more
            drawing features in ADT and fixes several bugs in the previous
            rendering library. It also unlocks several editor features that were
            added in ADT 12.

      .. container:: section

         .. rubric:: Android 3.1, Revision 2 (May 2011)
            :name: android-3.1,-revision-2-may-2011
            :class: showalways

         Dependencies:
            Requires `SDK Tools r11 <#>`__ or higher.

         Notes:
            Fixes an issue with the visual layout editor rendering library that
            prevented Android 3.1 from running in ADT.

      .. container:: section

         .. rubric:: Android 3.1, Revision 1 (May 2011)
            :name: android-3.1,-revision-1-may-2011
            :class: showalways

         Dependencies:
            Requires `SDK Tools r11 <#>`__ or higher.

      .. rubric:: Android 3.0 (API level 11)
         :name: 3.0

      .. container:: section

         .. rubric:: Android 3.0, Revision 2 (July 2011)
            :name: android-3.0,-revision-2-july-2011
            :class: showalways

         Dependencies:
            Requires `SDK Tools r12 <#>`__ or higher.

         Notes:
            Improvements to the platform's rendering library to support the visual
            layout editor in the ADT Eclipse plugin. This revision allows for more
            drawing features in ADT and fixes several bugs in the previous
            rendering library. It also unlocks several editor features that were
            added in ADT 12.

      .. container:: section

         .. rubric:: Android 3.0, Revision 1 (February 2011)
            :name: android-3.0,-revision-1-february-2011
            :class: showalways

         Dependencies:
            Requires `SDK Tools r10 <#>`__ or higher.

      .. rubric:: Android 2.3.3 (API level 10)
         :name: 2.3.3

      .. container:: section

         .. rubric:: Android 2.3.3, Revision 2 (July 2011)
            :name: android-2.3.3,-revision-2-july-2011
            :class: showalways

         Dependencies:
            Requires `SDK Tools r12 <#>`__ or higher.

         Notes:
            Improvements to the platform's rendering library to support the visual
            layout editor in the ADT Eclipse plugin. This revision allows for more
            drawing features in ADT and fixes several bugs in the previous
            rendering library. It also unlocks several editor features that were
            added in ADT 12.

      .. container:: section

         .. rubric:: Android 2.3.3, Revision 1 (February 2011)
            :name: android-2.3.3,-revision-1-february-2011
            :class: showalways

         Dependencies:
            Requires SDK Tools r9 or higher.

      .. rubric:: Android 2.3 (API level 9)
         :name: 2.3

      .. container:: section

         .. rubric:: Android 2.3, Revision 1 (December 2010)
            :name: android-2.3,-revision-1-december-2010
            :class: showalways

         Dependencies:
            Requires SDK Tools r8 or higher.

   Last updated 2024-05-03 UTC.


/SDK Platform Tools release notes
=================================

   https://developer.android.google.cn/tools/releases/platform-tools?hl=en 

   .. container:: devsite-article-body clearfix

      Android SDK Platform-Tools is a component for the Android SDK. It includes
      tools that interface with the Android platform, primarily
      `adb <#>`__ and
      `fastboot <https://android.googlesource.com/platform/system/core/+/master/fastboot/#fastboot>`__.
      Although ``adb`` is required for Android app development, app developers will
      normally just use the copy Studio installs. This download is useful if you
      want to use ``adb`` directly from the command-line and don't have Studio
      installed. (If you do have Studio installed, you might want to just use the
      copy it installed because Studio will automatically update it.) ``fastboot``
      is needed if you want to unlock your device bootloader and flash it with a
      new system image. This package used to contain ``systrace``, but that has
      been obsoleted in favor of Studio Profiler, gpuinspector.dev, or Perfetto.

      Although some new features in ``adb`` and ``fastboot`` are available only for
      recent versions of Android, they're backward compatible, so you should only
      need the latest version of the SDK Platform-Tools and should file bugs if you
      find exceptions.

      .. rubric:: Downloads
         :name: downloads

      If you're an Android developer, you should get the latest SDK Platform-Tools
      from Android Studio's `SDK Manager <#sdk-manager>`__ or
      from the `sdkmanager <#>`__ command-line
      tool. This ensures the tools are saved to the right place with the rest of
      your Android SDK tools and easily updated.

      But if you want just these command-line tools, use the following links:

      -  Download SDK Platform-Tools for Windows
      -  Download SDK Platform-Tools for Mac
      -  Download SDK Platform-Tools for Linux

      Although these links do not change, they always point to the most recent
      version of the tools.

      .. rubric:: Revisions
         :name: revisions

      .. rubric:: 35.0.1 (March 2024)
         :name: 3501_march_2024

      -  **adb**

         -  Switch to libusb 1.0.27

      .. rubric:: 35.0.0 (February 2024)
         :name: 3500_february_2024

      -  **adb**

         -  Switch to libusb as the default on Linux `issue #270205252 <https://issuetracker.google.com/issues/270205252>`__.
         -  Fix adb startup on hosts without USB.
         -  Fix adb hangs caused by USB devices incorrectly reporting zero-length
            descriptors `issue #302212871 <https://issuetracker.google.com/issues/302212871>`__.
         -  Fix return code of ``adb shell`` when device disconnects `issue #321787891 <https://issuetracker.google.com/issues/321787891>`__.

      -  **fastboot**

         -  Limit the maximum size of the incoming packet queue.
         -  Remove bottlenecks that previously limited download speeds to around
            120MB/s. Now fastboot can saturate a SuperSpeed+ bus and achieve speeds
            up to 980MB/s, depending on the device.

      .. rubric:: 34.0.5 (October 2023)
         :name: 3405_october_2023

      -  **adb**

         -  adb now defaults to libusb on macOS to address `issue #270205252 <https://issuetracker.google.com/issues/270205252>`__.
         -  Previously, adb responded with a successful code when wireless pairing
            fails. Resolved this by returning a failure code (1) and user-facing
            error (``error: protocol fault (couldn't read status message...)``).
            ``echo $?`` now reports ``1``.
         -  ``adb wait-for-disconnect`` is now operational for non-USB (wireless
            debugging).
         -  Added new DbC interface for future support of ChromeOS over adb.

      -  **fastboot**

         -  Fixed flashall on Pixel 3 devices.

      .. rubric:: 34.0.4 (July 2023)
         :name: 3404_july_2023

      -  **adb**

         -  Propagate ``-a (gListenAll)`` when adb forks an adb host server
            (previously, the flag only worked for ``adb -a server nodaemon``)
         -  Faster root and unroot
         -  Reland
            ``Flag(env) guarding clear endpoint (device) feature for OSX usb start.``
            (`issue #270205252 <https://issuetracker.google.com/issues/270205252>`__).

      -  **fastboot**

         -  Mac: remove retries on invalid IO iterator (flashing failure with
            LIBUSB_TRANSFER_CANCELLED)
         -  Windows: fix "Sparse file is too large or invalid" when using
            "flashall"
         -  All platforms: fix "ANDROID_PRODUCT_OUT not set" when using "update"

      .. rubric:: 34.0.1 (March 2023)
         :name: 3401_march_2023

      -  **adb**

         -  macOS: Reverted "unstable connectivity (MacBook high speed cable)"
            resolution due to adb install hang (`issue #270205252 <https://issuetracker.google.com/issues/270205252>`__).

      -  **fastboot**

         -  Windows: Fixed "mke2fs: Illegal or malformed device name while trying
            to determine filesystem size" error introduced in Platform tools 34.0.0
            (`issue #271039230 <https://issuetracker.google.com/issues/271039230>`__).

      .. rubric:: 34.0.0 RC2 (March 2023)
         :name: 3400_rc2_march_2023

      -  Updated with the release of Android 14 Developer Preview 2 (no updates to
         adb and fastboot).

      .. rubric:: 34.0.0 (February 2023)
         :name: 3400_february_2023

      -  **adb**

         -  Fixed zero length packet sends for macOS `(issuetracker: 208675141) <https://issuetracker.google.com/issues/208675141>`__.
         -  Addressed unstable connectivity (MacBook high speed cable): frequent
            adb disconnects.
         -  Improved error message for adb push with insufficient number of
            arguments.

      -  **fastboot**

         -  Improved flashing: ``flashall`` will now skip reboots to userspace if
            it can.
         -  Fixed zero length packet sends for macOS `(issuetracker: 208675141) <https://issuetracker.google.com/issues/208675141>`__.
         -  Fixed flashing recovery.img resulting in wrong AVB footer.

      .. rubric:: 33.0.3 (Aug 2022)
         :name: 3303_aug_2022

      -  **adb**

         -  Don't retry ``adb root`` if first attempt failed.
         -  Fix track-devices duplicate entry.
         -  Add receive windowing (increase throughput on high-latency
            connections).
         -  More specific error messages in the "more than one device" failure
            cases.
         -  Reject unexpected reverse forward requests.
         -  Fix install-multi-package on Windows.

      -  **fastboot**

         -  Remove e2fsdroid as part of SDK platform-tools.
         -  Print OemCmdHandler return message on success.

      .. rubric:: 33.0.2 (May 2022)
         :name: 3302_may_2022

      -  **fastboot**

         -  Support for the ``vendor_kernel_boot`` partition.

      .. rubric:: 33.0.1 (March 2022)
         :name: 3301_march_2022

      -  **adb**

         -  Fixes Windows mdns crashes.
         -  Fixes enable-verity/disable-verity on old devices.
         -  Fixes "install multiple" on old devices
         -  Improves the help output to include all supported compression methods.

      -  **systrace**

         -  Removed. Use Studio Profiler/gpuinspector.dev/Perfetto instead.

      .. rubric:: 33.0.0 (February 2022)
         :name: 3300_february_2022

      -  **adb**

         -  Fixes the issue introduced in 32.0.0 of crashes when run without any
            arguments.

      .. rubric:: 32.0.0 (January 2022)
         :name: 3200_january_2022

      -  **adb**

         -  Universal binary for Apple M1 devices.
         -  Known issue: this version crashes when run without any arguments.

      .. rubric:: 31.0.3 (August 2021)
         :name: 3103_august_2021

      -  **fastboot**

         -  Support flashing vbmeta_vendor.img for fastboot flashall / update.

      .. rubric:: 31.0.2 (April 2021)
         :name: 3102_april_2021

      -  **adb**

         -  Support forwarding to vsock on linux.
         -  Fix bug in ``adb track-devices`` where devices over wireless debugging
            wouldn't immediately receive updates.
         -  Implement preliminary support for mDNS device discovery without a
            separately installed mDNS service. This is currently disabled by
            default, and can be enabled by setting the environment variable
            ``ADB_MDNS_OPENSCREEN`` to 1 when starting the adb server.

      -  **fastboot**

         -  Don't fail when unable to get boot partition size.
         -  Derive device locked state from property instead of parsing the kernel
            command line.

      .. rubric:: 31.0.1 (March 2021)
         :name: 3101_march_2021

      -  **adb**

         -  Reduce TCP keepalive interval.
         -  Improve incremental installation performance.

      -  **fastboot**

         -  Add support for compressed snapshot merges.
         -  Restore legacy A/B support.

      .. rubric:: 31.0.0 (February 2021)
         :name: 3100_february_2021

      -  **adb**

         -  Disable compression on pull by default.

      .. rubric:: 30.0.5 (November 2020)
         :name: 3005_november_2020

      -  **adb**

         -  Improve performance of ``adb push`` when pushing many files over a
            high-latency connection.
         -  Improve ``adb push/pull`` performance on Windows.
         -  Fix ``adb push --sync`` with multiple inputs.
         -  Improve performance of incremental apk installation.
         -  Improve error handling for incremental apk installation.

      .. rubric:: 30.0.4 (July 2020)
         :name: 3004_july_2020

      -  **adb**

         -  Fix fallback to non-incremental apk installation on pre-Android 11
            devices.
         -  Fix ``adb install-multi-package``.
         -  Fix some more crashes related to adb wireless pairing.
         -  Improve some error messages.

      -  **fastboot**

         -  Improve console output on ``fastboot oem`` commands.
         -  Fix ``fastboot flashall`` on older devices such as Nexus 7.

      .. rubric:: 30.0.3 (June 2020)
         :name: 3003_june_2020

      -  **adb**

         -  Fix installation of APKs signed with v4 signature scheme on
            pre-Android 11 devices.
         -  Fix crash when authenticating without ``ADB_VENDOR_KEYS``.
         -  Fix crash when using ``adb -H``.

      .. rubric:: 30.0.2 (June 2020)
         :name: 3002_june_2020

      -  **adb**

         -  Improve adb wireless pairing.
         -  Fix hang in ``adb logcat`` when run before a device is connected.
         -  Add ``adb transport-id`` to allow scripts to safely wait for a device
            to go away after root/unroot/reboot.

      .. rubric:: 30.0.1 (May 2020)
         :name: 3001_may_2020

      -  **adb**

         -  Disable adb mdns auto-connection by default. This can be reenabled with
            the ``ADB_MDNS_AUTO_CONNECT`` environment variable.
         -  Improve performance of ``adb install-multi`` on Android 10 or newer
            devices.
         -  Fix timeout when using ``adb root/unroot`` on a device connected over
            TCP.
         -  Update support for wireless pairing.

      .. rubric:: 30.0.0 (April 2020)
         :name: 3000_april_2020

      -  **adb**

         -  Add initial support for `wireless pairing <#wireless-adb>`__.
         -  Add support for `incremental APK installation <#incremental>`__.
         -  Implement client-side support for compression of
            ``adb {push, pull, sync}`` when used with an Android 11 device.
         -  Improve performance of ``adb push`` on high-latency connections.
         -  Improve push/pull performance on Windows.

      .. rubric:: 29.0.6 (February 2020)
         :name: 2906_february_2020

      -  **adb**

         -  64-bit size/time support for ``adb ls`` when used with an Android 11
            device.
         -  Support listening on ``::1`` on POSIX.
         -  Client support for WinUSB devices that publish a WinUSB descriptor
            (required for Android 11) should no longer require a USB driver to be
            installed.
         -  Fix hang when using ``adb install`` on something that isn't actually a
            file.

      .. rubric:: 29.0.5 (October 2019)
         :name: 2905_october_2019

      -  **adb**

         -  Slight performance improvement on Linux when using many simultaneous
            connections.
         -  Add ``--fastdeploy`` option to ``adb install``, for incremental updates
            to APKs while developing.

      .. rubric:: 29.0.4 (September 2019)
         :name: 2904_september_2019

      -  **adb**

         -  Hotfix for native debugging timeout with LLDB (
         see `issue #134613180 <https://issuetracker.google.com/134613180>`__). This also
            fixes a related bug in the Android Studio Profilers that causes an
            ``AdbCommandRejectedException``, which you can see in the ``idea.log``
            file.

      .. rubric:: 29.0.3 (September 2019)
         :name: 2903_september_2019

      -  **adb**

         -  ``adb forward --list`` works with multiple devices connected.
         -  Fix devices going offline on Windows.
         -  Improve ``adb install`` output and help text.
         -  Restore previous behavior of ``adb connect <host>`` without specifying
            port.

      .. rubric:: 29.0.2 (July 2019)
         :name: 2902_july_2019

      -  **adb**

         -  Fixes a Windows heap integrity crash.

      -  **fastboot**

         -  Adds support for partition layout of upcoming devices.

      .. rubric:: 29.0.1 (June 2019)
         :name: 2901_june_2019

      -  **adb**

         -  Hotfix for Windows crashes (https://issuetracker.google.com/134613180)

      .. rubric:: 29.0.0 (June 2019)
         :name: 2900_june_2019

      -  **adb**

         -  ``adb reconnect`` performs a USB reset on Linux.
         -  On Linux, when connecting to a newer adb server, instead of killing the
            server and starting an older one, adb attempts to launch the newer
            version transparently.
         -  ``adb root`` waits for the device to reconnect after disconnecting.
            Previously, ``adb root; adb wait-for-device`` could mistakenly return
            immediately if ``adb wait-for-device`` started before adb noticed that
            the device had disconnected.

      -  **fastboot**

         -  Disables an error message that occurred when fastboot attempted to open
            the touch bar or keyboard on macOS.

      .. rubric:: 28.0.2 (March 2019)
         :name: 2802_march_2019

      -  **adb**

         -  Fixes flakiness of ``adb shell`` port forwarding that leads to
            "Connection reset by peer" error message.
         -  Fixes authentication via ``ADB_VENDOR_KEYS`` when reconnecting devices.
         -  Fixes authentication—when the private key used for authentication does
            not match the public key—by calculating the public key from the private
            key, instead of assuming that they match.

      -  **fastboot**

         -  Adds support for dynamic partitions.

      -  **Updated Windows requirements**

         -  The platform tools now depend on the Windows Universal C Runtime, which
            is usually installed by default via Windows Update. If you see errors
            mentioning missing DLLs, you may need to manually fetch and install the
            `runtime package <https://support.microsoft.com/en-ca/help/2999226/update-for-universal-c-runtime-in-windows>`__.

      .. rubric:: 28.0.1 (September 2018)
         :name: 2801_september_2018

      -  **adb**

         -  Add support for reconnection of TCP connections. Upon disconnection,
            adb will attempt to reconnect for up to 60 seconds before abandoning a
            connection.
         -  Fix Unicode console output on Windows. (Thanks to external contributor
            Spencer Low!)
         -  Fix a file descriptor double-close that can occur, resulting in
            connections being closed when an ``adb connect`` happens
            simultaneously.
         -  Fix ``adb forward --list`` when used with more than one device
            connected.

      -  **fastboot**

         -  Increase command timeout to 30 seconds, to better support some slow
            bootloader commands.

      .. rubric:: 28.0.0 (June 2018)
         :name: 2800_june_2018

      -  **adb**:

         -  Add support for checksum-less operation with devices running Android P,
            which improves throughput by up to 40%.
         -  Sort output of ``adb devices`` by connection type and device serial.
         -  Increase the socket listen backlog to allow for more simultaneous adb
            commands.
         -  Improve error output for ``adb connect``.

      -  **fastboot**:

         -  Improve output format, add a verbose output mode (``-v``).
         -  Clean up help output.
         -  Add ``product.img`` and ``odm.img`` to the list of partitions flashed
            by ``fastboot flashall``.
         -  Avoid bricking new devices when using a too-old version of fastboot by
            allowing factory image packages to require support for specific
            partitions.

      .. rubric:: 27.0.1 (December 2017)
         :name: 2701_december_2017

      -  **adb:** fixes an assertion failure on MacOS that occurred when connecting
         devices using USB 3.0.
      -  **Fastboot:** On Windows, adds support for wiping devices that use F2FS
         (Flash-Friendly File System).

      .. rubric:: 27.0.0 (December 2017)
         :name: 2700_december_2017

      -  Re-fixes the macOS 10.13 fastboot bug first fixed in 26.0.1, but
         re-introduced in 26.0.2.

      .. rubric:: 26.0.2 (October 2017)
         :name: 2602_october_2017

      -  Add fastboot support for Pixel 2 devices.

      .. rubric:: 26.0.1 (September 2017)
         :name: 2601_september_2017

      -  Fixed fastboot problems on macOS 10.13 High Sierra (`bug 64292422 <https://issuetracker.google.com/64292422>`__).

      .. rubric:: 26.0.0 (June 2017)
         :name: 2600_june_2017

      -  Updated with the release of Android O final SDK (API level 26).

      .. rubric:: 25.0.5 (April 24, 2017)
         :name: 2505_april_24_2017

      -  Fixed adb sideload of large updates on Windows, manifesting as
         "std::bad_alloc" (`bug 37139736 <https://issuetracker.google.com/37139736>`__).

      -  Fixed adb problems with some Windows firewalls, manifesting as "cannot
         open transport registration socketpair" (`bug 37139725 <https://issuetracker.google.com/37139725>`__).

      -  Both ``adb --version`` and ``fastboot --version`` now include the install
         path.

      -  Changed adb to not resolve ``localhost`` to work around misconfigured VPN.

      -  Changed adb to no longer reset USB devices on Linux, which could affect
         other attached USB devices.

      .. rubric:: 25.0.4 (March 16, 2017)
         :name: 2504_march_16_2017

      -  Added experimental libusb support to Linux and Mac adb

      To use the libusb backend, set the environment variable ADB_LIBUSB=true
      before launching a new adb server. The new ``adb host-features`` command will
      tell you whether or not you're using libusb.

      To restart adb with libusb and check that it worked, use
      ``adb kill-server; ADB_LIBUSB=1 adb start-server; adb host-features``. The
      output should include "libusb".

      In this release, the old non-libusb implementation remains the default.

      -  fastboot doesn't hang 2016 MacBook Pros anymore (`bug 231129 <https://code.google.com/p/android/issues/detail?id=231129>`__)

      -  Fixed Systrace command line capture on Mac

      .. rubric:: 25.0.3 (December 16, 2016)
         :name: 2503_december_16_2016

      -  Fixed fastboot bug causing Android Things devices to fail to flash

      .. rubric:: 25.0.2 (December 12, 2016)
         :name: 2502_december_12_2016

      -  Updated with the Android N MR1 Stable release (API 25)

      .. rubric:: 25.0.1 (November 22, 2016)
         :name: 2501_november_22_2016

      -  Updated with the release of Android N MR1 Developer Preview 2 release (API
         25)

      .. rubric:: 25.0.0 (October 19, 2016)
         :name: 2500_october_19_2016

      -  Updated with the release of Android N MR1 Developer Preview 1 release (API
         25)

      .. rubric:: 24.0.4 (October 14, 2016)
         :name: 2404_october_14_2016

      -  Updated to address issues in ADB and Mac OS Sierra

      .. container:: devsite-dialog dac-download-dialog
         :name: dac-download-windows-dialog-id

         .. container:: devsite-dialog-contents

            .. rubric:: Download Android SDK Platform-Tools
               :name: download-dynamic_data.setvar.dialog_product_name
               :class: hide-from-toc

            Before downloading, you must agree to the following terms and
            conditions.

            .. container:: dialog-content-stretch sdk-terms

               .. rubric:: Terms and Conditions
                  :name: terms-and-conditions
                  :class: hide-from-toc

               This is the Android Software Development Kit License Agreement
               .. rubric:: 1. Introduction
                  :name: 1.-introduction
                  :class: hide-from-toc

               1.1 The Android Software Development Kit (referred to in the License
               Agreement as the "SDK" and specifically including the Android system
               files, packaged APIs, and Google APIs add-ons) is licensed to you
               subject to the terms of the License Agreement. The License Agreement
               forms a legally binding contract between you and Google in relation
               to your use of the SDK. 1.2 "Android" means the Android software
               stack for devices, as made available under the Android Open Source
               Project, which is located at the following URL:
               https://source.android.com/, as updated from time to time. 1.3 A
               "compatible implementation" means any Android device that (i)
               complies with the Android Compatibility Definition document, which
               can be found at the Android compatibility website
               (https://source.android.com/compatibility) and which may be updated
               from time to time; and (ii) successfully passes the Android
               Compatibility Test Suite (CTS). 1.4 "Google" means Google LLC,
               organized under the laws of the State of Delaware, USA, and
               operating under the laws of the USA with principal place of business
               at 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.

               .. rubric:: 2. Accepting this License Agreement
                  :name: 2.-accepting-this-license-agreement
                  :class: hide-from-toc

               2.1 In order to use the SDK, you must first agree to the License
               Agreement. You may not use the SDK if you do not accept the License
               Agreement. 2.2 By clicking to accept and/or using this SDK, you
               hereby agree to the terms of the License Agreement. 2.3 You may not
               use the SDK and may not accept the License Agreement if you are a
               person barred from receiving the SDK under the laws of the United
               States or other countries, including the country in which you are
               resident or from which you use the SDK. 2.4 If you are agreeing to
               be bound by the License Agreement on behalf of your employer or
               other entity, you represent and warrant that you have full legal
               authority to bind your employer or such entity to the License
               Agreement. If you do not have the requisite authority, you may not
               accept the License Agreement or use the SDK on behalf of your
               employer or other entity.

               .. rubric:: 3. SDK License from Google
                  :name: 3.-sdk-license-from-google
                  :class: hide-from-toc

               3.1 Subject to the terms of the License Agreement, Google grants you
               a limited, worldwide, royalty-free, non-assignable, non-exclusive,
               and non-sublicensable license to use the SDK solely to develop
               applications for compatible implementations of Android. 3.2 You may
               not use this SDK to develop applications for other platforms
               (including non-compatible implementations of Android) or to develop
               another SDK. You are of course free to develop applications for
               other platforms, including non-compatible implementations of
               Android, provided that this SDK is not used for that purpose. 3.3
               You agree that Google or third parties own all legal right, title
               and interest in and to the SDK, including any Intellectual Property
               Rights that subsist in the SDK. "Intellectual Property Rights" means
               any and all rights under patent law, copyright law, trade secret
               law, trademark law, and any and all other proprietary rights. Google
               reserves all rights not expressly granted to you. 3.4 You may not
               use the SDK for any purpose not expressly permitted by the License
               Agreement. Except to the extent required by applicable third party
               licenses, you may not copy (except for backup purposes), modify,
               adapt, redistribute, decompile, reverse engineer, disassemble, or
               create derivative works of the SDK or any part of the SDK. 3.5 Use,
               reproduction and distribution of components of the SDK licensed
               under an open source software license are governed solely by the
               terms of that open source software license and not the License
               Agreement. 3.6 You agree that the form and nature of the SDK that
               Google provides may change without prior notice to you and that
               future versions of the SDK may be incompatible with applications
               developed on previous versions of the SDK. You agree that Google may
               stop (permanently or temporarily) providing the SDK (or any features
               within the SDK) to you or to users generally at Google's sole
               discretion, without prior notice to you. 3.7 Nothing in the License
               Agreement gives you a right to use any of Google's trade names,
               trademarks, service marks, logos, domain names, or other distinctive
               brand features. 3.8 You agree that you will not remove, obscure, or
               alter any proprietary rights notices (including copyright and
               trademark notices) that may be affixed to or contained within the
               SDK.

               .. rubric:: 4. Use of the SDK by You
                  :name: 4.-use-of-the-sdk-by-you
                  :class: hide-from-toc

               4.1 Google agrees that it obtains no right, title or interest from
               you (or your licensors) under the License Agreement in or to any
               software applications that you develop using the SDK, including any
               intellectual property rights that subsist in those applications. 4.2
               You agree to use the SDK and write applications only for purposes
               that are permitted by (a) the License Agreement and (b) any
               applicable law, regulation or generally accepted practices or
               guidelines in the relevant jurisdictions (including any laws
               regarding the export of data or software to and from the United
               States or other relevant countries). 4.3 You agree that if you use
               the SDK to develop applications for general public users, you will
               protect the privacy and legal rights of those users. If the users
               provide you with user names, passwords, or other login information
               or personal information, you must make the users aware that the
               information will be available to your application, and you must
               provide legally adequate privacy notice and protection for those
               users. If your application stores personal or sensitive information
               provided by users, it must do so securely. If the user provides your
               application with Google Account information, your application may
               only use that information to access the user's Google Account when,
               and for the limited purposes for which, the user has given you
               permission to do so. 4.4 You agree that you will not engage in any
               activity with the SDK, including the development or distribution of
               an application, that interferes with, disrupts, damages, or accesses
               in an unauthorized manner the servers, networks, or other properties
               or services of any third party including, but not limited to, Google
               or any mobile communications carrier. 4.5 You agree that you are
               solely responsible for (and that Google has no responsibility to you
               or to any third party for) any data, content, or resources that you
               create, transmit or display through Android and/or applications for
               Android, and for the consequences of your actions (including any
               loss or damage which Google may suffer) by doing so. 4.6 You agree
               that you are solely responsible for (and that Google has no
               responsibility to you or to any third party for) any breach of your
               obligations under the License Agreement, any applicable third party
               contract or Terms of Service, or any applicable law or regulation,
               and for the consequences (including any loss or damage which Google
               or any third party may suffer) of any such breach.

               .. rubric:: 5. Your Developer Credentials
                  :name: 5.-your-developer-credentials
                  :class: hide-from-toc

               5.1 You agree that you are responsible for maintaining the
               confidentiality of any developer credentials that may be issued to
               you by Google or which you may choose yourself and that you will be
               solely responsible for all applications that are developed under
               your developer credentials.

               .. rubric:: 6. Privacy and Information
                  :name: 6.-privacy-and-information
                  :class: hide-from-toc

               6.1 In order to continually innovate and improve the SDK, Google may
               collect certain usage statistics from the software including but not
               limited to a unique identifier, associated IP address, version
               number of the software, and information on which tools and/or
               services in the SDK are being used and how they are being used.
               Before any of this information is collected, the SDK will notify you
               and seek your consent. If you withhold consent, the information will
               not be collected. 6.2 The data collected is examined in the
               aggregate to improve the SDK and is maintained in accordance with
               Google's Privacy Policy, which is located at the following URL:
               https://policies.google.com/privacy 6.3 Anonymized and aggregated
               sets of the data may be shared with Google partners to improve the
               SDK.

               .. rubric:: 7. Third Party Applications
                  :name: 7.-third-party-applications
                  :class: hide-from-toc

               7.1 If you use the SDK to run applications developed by a third
               party or that access data, content or resources provided by a third
               party, you agree that Google is not responsible for those
               applications, data, content, or resources. You understand that all
               data, content or resources which you may access through such third
               party applications are the sole responsibility of the person from
               which they originated and that Google is not liable for any loss or
               damage that you may experience as a result of the use or access of
               any of those third party applications, data, content, or resources.
               7.2 You should be aware the data, content, and resources presented
               to you through such a third party application may be protected by
               intellectual property rights which are owned by the providers (or by
               other persons or companies on their behalf). You may not modify,
               rent, lease, loan, sell, distribute or create derivative works based
               on these data, content, or resources (either in whole or in part)
               unless you have been specifically given permission to do so by the
               relevant owners. 7.3 You acknowledge that your use of such third
               party applications, data, content, or resources may be subject to
               separate terms between you and the relevant third party. In that
               case, the License Agreement does not affect your legal relationship
               with these third parties.

               .. rubric:: 8. Using Android APIs
                  :name: 8.-using-android-apis
                  :class: hide-from-toc

               8.1 Google Data APIs 8.1.1 If you use any API to retrieve data from
               Google, you acknowledge that the data may be protected by
               intellectual property rights which are owned by Google or those
               parties that provide the data (or by other persons or companies on
               their behalf). Your use of any such API may be subject to additional
               Terms of Service. You may not modify, rent, lease, loan, sell,
               distribute or create derivative works based on this data (either in
               whole or in part) unless allowed by the relevant Terms of Service.
               8.1.2 If you use any API to retrieve a user's data from Google, you
               acknowledge and agree that you shall retrieve data only with the
               user's explicit consent and only when, and for the limited purposes
               for which, the user has given you permission to do so. If you use
               the Android Recognition Service API, documented at the following
               URL:
               `https://developer.android.com/reference/android/speech/RecognitionService <https://developer.android.google.cn/reference/android/speech/RecognitionService>`__,
               as updated from time to time, you acknowledge that the use of the
               API is subject to the Data Processing Addendum for Products where
               Google is a Data Processor, which is located at the following URL:
               https://privacy.google.com/businesses/gdprprocessorterms/, as
               updated from time to time. By clicking to accept, you hereby agree
               to the terms of the Data Processing Addendum for Products where
               Google is a Data Processor.

               .. rubric:: 9. Terminating this License Agreement
                  :name: 9.-terminating-this-license-agreement
                  :class: hide-from-toc

               9.1 The License Agreement will continue to apply until terminated by
               either you or Google as set out below. 9.2 If you want to terminate
               the License Agreement, you may do so by ceasing your use of the SDK
               and any relevant developer credentials. 9.3 Google may at any time,
               terminate the License Agreement with you if: (A) you have breached
               any provision of the License Agreement; or (B) Google is required to
               do so by law; or (C) the partner with whom Google offered certain
               parts of SDK (such as APIs) to you has terminated its relationship
               with Google or ceased to offer certain parts of the SDK to you; or
               (D) Google decides to no longer provide the SDK or certain parts of
               the SDK to users in the country in which you are resident or from
               which you use the service, or the provision of the SDK or certain
               SDK services to you by Google is, in Google's sole discretion, no
               longer commercially viable. 9.4 When the License Agreement comes to
               an end, all of the legal rights, obligations and liabilities that
               you and Google have benefited from, been subject to (or which have
               accrued over time whilst the License Agreement has been in force) or
               which are expressed to continue indefinitely, shall be unaffected by
               this cessation, and the provisions of paragraph 14.7 shall continue
               to apply to such rights, obligations and liabilities indefinitely.

               .. rubric:: 10. DISCLAIMER OF WARRANTIES
                  :name: 10.-disclaimer-of-warranties
                  :class: hide-from-toc

               10.1 YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE SDK IS
               AT YOUR SOLE RISK AND THAT THE SDK IS PROVIDED "AS IS" AND "AS
               AVAILABLE" WITHOUT WARRANTY OF ANY KIND FROM GOOGLE. 10.2 YOUR USE
               OF THE SDK AND ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH
               THE USE OF THE SDK IS AT YOUR OWN DISCRETION AND RISK AND YOU ARE
               SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR OTHER
               DEVICE OR LOSS OF DATA THAT RESULTS FROM SUCH USE. 10.3 GOOGLE
               FURTHER EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY
               KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE
               IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
               PARTICULAR PURPOSE AND NON-INFRINGEMENT.

               .. rubric:: 11. LIMITATION OF LIABILITY
                  :name: 11.-limitation-of-liability
                  :class: hide-from-toc

               11.1 YOU EXPRESSLY UNDERSTAND AND AGREE THAT GOOGLE, ITS
               SUBSIDIARIES AND AFFILIATES, AND ITS LICENSORS SHALL NOT BE LIABLE
               TO YOU UNDER ANY THEORY OF LIABILITY FOR ANY DIRECT, INDIRECT,
               INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES THAT MAY BE
               INCURRED BY YOU, INCLUDING ANY LOSS OF DATA, WHETHER OR NOT GOOGLE
               OR ITS REPRESENTATIVES HAVE BEEN ADVISED OF OR SHOULD HAVE BEEN
               AWARE OF THE POSSIBILITY OF ANY SUCH LOSSES ARISING.

               .. rubric:: 12. Indemnification
                  :name: 12.-indemnification
                  :class: hide-from-toc

               12.1 To the maximum extent permitted by law, you agree to defend,
               indemnify and hold harmless Google, its affiliates and their
               respective directors, officers, employees and agents from and
               against any and all claims, actions, suits or proceedings, as well
               as any and all losses, liabilities, damages, costs and expenses
               (including reasonable attorneys fees) arising out of or accruing
               from (a) your use of the SDK, (b) any application you develop on the
               SDK that infringes any copyright, trademark, trade secret, trade
               dress, patent or other intellectual property right of any person or
               defames any person or violates their rights of publicity or privacy,
               and (c) any non-compliance by you with the License Agreement.

               .. rubric:: 13. Changes to the License Agreement
                  :name: 13.-changes-to-the-license-agreement
                  :class: hide-from-toc

               13.1 Google may make changes to the License Agreement as it
               distributes new versions of the SDK. When these changes are made,
               Google will make a new version of the License Agreement available on
               the website where the SDK is made available.

               .. rubric:: 14. General Legal Terms
                  :name: 14.-general-legal-terms
                  :class: hide-from-toc

               14.1 The License Agreement constitutes the whole legal agreement
               between you and Google and governs your use of the SDK (excluding
               any services which Google may provide to you under a separate
               written agreement), and completely replaces any prior agreements
               between you and Google in relation to the SDK. 14.2 You agree that
               if Google does not exercise or enforce any legal right or remedy
               which is contained in the License Agreement (or which Google has the
               benefit of under any applicable law), this will not be taken to be a
               formal waiver of Google's rights and that those rights or remedies
               will still be available to Google. 14.3 If any court of law, having
               the jurisdiction to decide on this matter, rules that any provision
               of the License Agreement is invalid, then that provision will be
               removed from the License Agreement without affecting the rest of the
               License Agreement. The remaining provisions of the License Agreement
               will continue to be valid and enforceable. 14.4 You acknowledge and
               agree that each member of the group of companies of which Google is
               the parent shall be third party beneficiaries to the License
               Agreement and that such other companies shall be entitled to
               directly enforce, and rely upon, any provision of the License
               Agreement that confers a benefit on (or rights in favor of) them.
               Other than this, no other person or company shall be third party
               beneficiaries to the License Agreement. 14.5 EXPORT RESTRICTIONS.
               THE SDK IS SUBJECT TO UNITED STATES EXPORT LAWS AND REGULATIONS. YOU
               MUST COMPLY WITH ALL DOMESTIC AND INTERNATIONAL EXPORT LAWS AND
               REGULATIONS THAT APPLY TO THE SDK. THESE LAWS INCLUDE RESTRICTIONS
               ON DESTINATIONS, END USERS AND END USE. 14.6 The rights granted in
               the License Agreement may not be assigned or transferred by either
               you or Google without the prior written approval of the other party.
               Neither you nor Google shall be permitted to delegate their
               responsibilities or obligations under the License Agreement without
               the prior written approval of the other party. 14.7 The License
               Agreement, and your relationship with Google under the License
               Agreement, shall be governed by the laws of the State of California
               without regard to its conflict of laws provisions. You and Google
               agree to submit to the exclusive jurisdiction of the courts located
               within the county of Santa Clara, California to resolve any legal
               matter arising from the License Agreement. Notwithstanding this, you
               agree that Google shall still be allowed to apply for injunctive
               remedies (or an equivalent type of urgent legal relief) in any
               jurisdiction. *July 27, 2021*

            .. container::

               I have read and agree with the above terms and conditions

               .. container:: buttons

                  Download Android SDK Platform-Tools for Windows
                  `Download Android SDK Platform-Tools for Windows <https://googledownloads.cn/android/repository/platform-tools-latest-windows.zip>`__
                  *platform-tools-latest-windows.zip*

      .. container:: devsite-dialog dac-download-dialog
         :name: dac-download-mac-dialog-id

         .. container:: devsite-dialog-contents

            .. rubric:: Download Android SDK Platform-Tools
               :name: download-dynamic_data.setvar.dialog_product_name
               :class: hide-from-toc

            Before downloading, you must agree to the following terms and
            conditions.

            .. container:: dialog-content-stretch sdk-terms

               .. rubric:: Terms and Conditions
                  :name: terms-and-conditions
                  :class: hide-from-toc

               This is the Android Software Development Kit License Agreement
               .. rubric:: 1. Introduction
                  :name: 1.-introduction
                  :class: hide-from-toc

               1.1 The Android Software Development Kit (referred to in the License
               Agreement as the "SDK" and specifically including the Android system
               files, packaged APIs, and Google APIs add-ons) is licensed to you
               subject to the terms of the License Agreement. The License Agreement
               forms a legally binding contract between you and Google in relation
               to your use of the SDK. 1.2 "Android" means the Android software
               stack for devices, as made available under the Android Open Source
               Project, which is located at the following URL:
               https://source.android.com/, as updated from time to time. 1.3 A
               "compatible implementation" means any Android device that (i)
               complies with the Android Compatibility Definition document, which
               can be found at the Android compatibility website
               (https://source.android.com/compatibility) and which may be updated
               from time to time; and (ii) successfully passes the Android
               Compatibility Test Suite (CTS). 1.4 "Google" means Google LLC,
               organized under the laws of the State of Delaware, USA, and
               operating under the laws of the USA with principal place of business
               at 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.

               .. rubric:: 2. Accepting this License Agreement
                  :name: 2.-accepting-this-license-agreement
                  :class: hide-from-toc

               2.1 In order to use the SDK, you must first agree to the License
               Agreement. You may not use the SDK if you do not accept the License
               Agreement. 2.2 By clicking to accept and/or using this SDK, you
               hereby agree to the terms of the License Agreement. 2.3 You may not
               use the SDK and may not accept the License Agreement if you are a
               person barred from receiving the SDK under the laws of the United
               States or other countries, including the country in which you are
               resident or from which you use the SDK. 2.4 If you are agreeing to
               be bound by the License Agreement on behalf of your employer or
               other entity, you represent and warrant that you have full legal
               authority to bind your employer or such entity to the License
               Agreement. If you do not have the requisite authority, you may not
               accept the License Agreement or use the SDK on behalf of your
               employer or other entity.

               .. rubric:: 3. SDK License from Google
                  :name: 3.-sdk-license-from-google
                  :class: hide-from-toc

               3.1 Subject to the terms of the License Agreement, Google grants you
               a limited, worldwide, royalty-free, non-assignable, non-exclusive,
               and non-sublicensable license to use the SDK solely to develop
               applications for compatible implementations of Android. 3.2 You may
               not use this SDK to develop applications for other platforms
               (including non-compatible implementations of Android) or to develop
               another SDK. You are of course free to develop applications for
               other platforms, including non-compatible implementations of
               Android, provided that this SDK is not used for that purpose. 3.3
               You agree that Google or third parties own all legal right, title
               and interest in and to the SDK, including any Intellectual Property
               Rights that subsist in the SDK. "Intellectual Property Rights" means
               any and all rights under patent law, copyright law, trade secret
               law, trademark law, and any and all other proprietary rights. Google
               reserves all rights not expressly granted to you. 3.4 You may not
               use the SDK for any purpose not expressly permitted by the License
               Agreement. Except to the extent required by applicable third party
               licenses, you may not copy (except for backup purposes), modify,
               adapt, redistribute, decompile, reverse engineer, disassemble, or
               create derivative works of the SDK or any part of the SDK. 3.5 Use,
               reproduction and distribution of components of the SDK licensed
               under an open source software license are governed solely by the
               terms of that open source software license and not the License
               Agreement. 3.6 You agree that the form and nature of the SDK that
               Google provides may change without prior notice to you and that
               future versions of the SDK may be incompatible with applications
               developed on previous versions of the SDK. You agree that Google may
               stop (permanently or temporarily) providing the SDK (or any features
               within the SDK) to you or to users generally at Google's sole
               discretion, without prior notice to you. 3.7 Nothing in the License
               Agreement gives you a right to use any of Google's trade names,
               trademarks, service marks, logos, domain names, or other distinctive
               brand features. 3.8 You agree that you will not remove, obscure, or
               alter any proprietary rights notices (including copyright and
               trademark notices) that may be affixed to or contained within the
               SDK.

               .. rubric:: 4. Use of the SDK by You
                  :name: 4.-use-of-the-sdk-by-you
                  :class: hide-from-toc

               4.1 Google agrees that it obtains no right, title or interest from
               you (or your licensors) under the License Agreement in or to any
               software applications that you develop using the SDK, including any
               intellectual property rights that subsist in those applications. 4.2
               You agree to use the SDK and write applications only for purposes
               that are permitted by (a) the License Agreement and (b) any
               applicable law, regulation or generally accepted practices or
               guidelines in the relevant jurisdictions (including any laws
               regarding the export of data or software to and from the United
               States or other relevant countries). 4.3 You agree that if you use
               the SDK to develop applications for general public users, you will
               protect the privacy and legal rights of those users. If the users
               provide you with user names, passwords, or other login information
               or personal information, you must make the users aware that the
               information will be available to your application, and you must
               provide legally adequate privacy notice and protection for those
               users. If your application stores personal or sensitive information
               provided by users, it must do so securely. If the user provides your
               application with Google Account information, your application may
               only use that information to access the user's Google Account when,
               and for the limited purposes for which, the user has given you
               permission to do so. 4.4 You agree that you will not engage in any
               activity with the SDK, including the development or distribution of
               an application, that interferes with, disrupts, damages, or accesses
               in an unauthorized manner the servers, networks, or other properties
               or services of any third party including, but not limited to, Google
               or any mobile communications carrier. 4.5 You agree that you are
               solely responsible for (and that Google has no responsibility to you
               or to any third party for) any data, content, or resources that you
               create, transmit or display through Android and/or applications for
               Android, and for the consequences of your actions (including any
               loss or damage which Google may suffer) by doing so. 4.6 You agree
               that you are solely responsible for (and that Google has no
               responsibility to you or to any third party for) any breach of your
               obligations under the License Agreement, any applicable third party
               contract or Terms of Service, or any applicable law or regulation,
               and for the consequences (including any loss or damage which Google
               or any third party may suffer) of any such breach.

               .. rubric:: 5. Your Developer Credentials
                  :name: 5.-your-developer-credentials
                  :class: hide-from-toc

               5.1 You agree that you are responsible for maintaining the
               confidentiality of any developer credentials that may be issued to
               you by Google or which you may choose yourself and that you will be
               solely responsible for all applications that are developed under
               your developer credentials.

               .. rubric:: 6. Privacy and Information
                  :name: 6.-privacy-and-information
                  :class: hide-from-toc

               6.1 In order to continually innovate and improve the SDK, Google may
               collect certain usage statistics from the software including but not
               limited to a unique identifier, associated IP address, version
               number of the software, and information on which tools and/or
               services in the SDK are being used and how they are being used.
               Before any of this information is collected, the SDK will notify you
               and seek your consent. If you withhold consent, the information will
               not be collected. 6.2 The data collected is examined in the
               aggregate to improve the SDK and is maintained in accordance with
               Google's Privacy Policy, which is located at the following URL:
               https://policies.google.com/privacy 6.3 Anonymized and aggregated
               sets of the data may be shared with Google partners to improve the
               SDK.

               .. rubric:: 7. Third Party Applications
                  :name: 7.-third-party-applications
                  :class: hide-from-toc

               7.1 If you use the SDK to run applications developed by a third
               party or that access data, content or resources provided by a third
               party, you agree that Google is not responsible for those
               applications, data, content, or resources. You understand that all
               data, content or resources which you may access through such third
               party applications are the sole responsibility of the person from
               which they originated and that Google is not liable for any loss or
               damage that you may experience as a result of the use or access of
               any of those third party applications, data, content, or resources.
               7.2 You should be aware the data, content, and resources presented
               to you through such a third party application may be protected by
               intellectual property rights which are owned by the providers (or by
               other persons or companies on their behalf). You may not modify,
               rent, lease, loan, sell, distribute or create derivative works based
               on these data, content, or resources (either in whole or in part)
               unless you have been specifically given permission to do so by the
               relevant owners. 7.3 You acknowledge that your use of such third
               party applications, data, content, or resources may be subject to
               separate terms between you and the relevant third party. In that
               case, the License Agreement does not affect your legal relationship
               with these third parties.

               .. rubric:: 8. Using Android APIs
                  :name: 8.-using-android-apis
                  :class: hide-from-toc

               8.1 Google Data APIs 8.1.1 If you use any API to retrieve data from
               Google, you acknowledge that the data may be protected by
               intellectual property rights which are owned by Google or those
               parties that provide the data (or by other persons or companies on
               their behalf). Your use of any such API may be subject to additional
               Terms of Service. You may not modify, rent, lease, loan, sell,
               distribute or create derivative works based on this data (either in
               whole or in part) unless allowed by the relevant Terms of Service.
               8.1.2 If you use any API to retrieve a user's data from Google, you
               acknowledge and agree that you shall retrieve data only with the
               user's explicit consent and only when, and for the limited purposes
               for which, the user has given you permission to do so. If you use
               the Android Recognition Service API, documented at the following
               URL:
               `https://developer.android.com/reference/android/speech/RecognitionService <https://developer.android.google.cn/reference/android/speech/RecognitionService>`__,
               as updated from time to time, you acknowledge that the use of the
               API is subject to the Data Processing Addendum for Products where
               Google is a Data Processor, which is located at the following URL:
               https://privacy.google.com/businesses/gdprprocessorterms/, as
               updated from time to time. By clicking to accept, you hereby agree
               to the terms of the Data Processing Addendum for Products where
               Google is a Data Processor.

               .. rubric:: 9. Terminating this License Agreement
                  :name: 9.-terminating-this-license-agreement
                  :class: hide-from-toc

               9.1 The License Agreement will continue to apply until terminated by
               either you or Google as set out below. 9.2 If you want to terminate
               the License Agreement, you may do so by ceasing your use of the SDK
               and any relevant developer credentials. 9.3 Google may at any time,
               terminate the License Agreement with you if: (A) you have breached
               any provision of the License Agreement; or (B) Google is required to
               do so by law; or (C) the partner with whom Google offered certain
               parts of SDK (such as APIs) to you has terminated its relationship
               with Google or ceased to offer certain parts of the SDK to you; or
               (D) Google decides to no longer provide the SDK or certain parts of
               the SDK to users in the country in which you are resident or from
               which you use the service, or the provision of the SDK or certain
               SDK services to you by Google is, in Google's sole discretion, no
               longer commercially viable. 9.4 When the License Agreement comes to
               an end, all of the legal rights, obligations and liabilities that
               you and Google have benefited from, been subject to (or which have
               accrued over time whilst the License Agreement has been in force) or
               which are expressed to continue indefinitely, shall be unaffected by
               this cessation, and the provisions of paragraph 14.7 shall continue
               to apply to such rights, obligations and liabilities indefinitely.

               .. rubric:: 10. DISCLAIMER OF WARRANTIES
                  :name: 10.-disclaimer-of-warranties
                  :class: hide-from-toc

               10.1 YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE SDK IS
               AT YOUR SOLE RISK AND THAT THE SDK IS PROVIDED "AS IS" AND "AS
               AVAILABLE" WITHOUT WARRANTY OF ANY KIND FROM GOOGLE. 10.2 YOUR USE
               OF THE SDK AND ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH
               THE USE OF THE SDK IS AT YOUR OWN DISCRETION AND RISK AND YOU ARE
               SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR OTHER
               DEVICE OR LOSS OF DATA THAT RESULTS FROM SUCH USE. 10.3 GOOGLE
               FURTHER EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY
               KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE
               IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
               PARTICULAR PURPOSE AND NON-INFRINGEMENT.

               .. rubric:: 11. LIMITATION OF LIABILITY
                  :name: 11.-limitation-of-liability
                  :class: hide-from-toc

               11.1 YOU EXPRESSLY UNDERSTAND AND AGREE THAT GOOGLE, ITS
               SUBSIDIARIES AND AFFILIATES, AND ITS LICENSORS SHALL NOT BE LIABLE
               TO YOU UNDER ANY THEORY OF LIABILITY FOR ANY DIRECT, INDIRECT,
               INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES THAT MAY BE
               INCURRED BY YOU, INCLUDING ANY LOSS OF DATA, WHETHER OR NOT GOOGLE
               OR ITS REPRESENTATIVES HAVE BEEN ADVISED OF OR SHOULD HAVE BEEN
               AWARE OF THE POSSIBILITY OF ANY SUCH LOSSES ARISING.

               .. rubric:: 12. Indemnification
                  :name: 12.-indemnification
                  :class: hide-from-toc

               12.1 To the maximum extent permitted by law, you agree to defend,
               indemnify and hold harmless Google, its affiliates and their
               respective directors, officers, employees and agents from and
               against any and all claims, actions, suits or proceedings, as well
               as any and all losses, liabilities, damages, costs and expenses
               (including reasonable attorneys fees) arising out of or accruing
               from (a) your use of the SDK, (b) any application you develop on the
               SDK that infringes any copyright, trademark, trade secret, trade
               dress, patent or other intellectual property right of any person or
               defames any person or violates their rights of publicity or privacy,
               and (c) any non-compliance by you with the License Agreement.

               .. rubric:: 13. Changes to the License Agreement
                  :name: 13.-changes-to-the-license-agreement
                  :class: hide-from-toc

               13.1 Google may make changes to the License Agreement as it
               distributes new versions of the SDK. When these changes are made,
               Google will make a new version of the License Agreement available on
               the website where the SDK is made available.

               .. rubric:: 14. General Legal Terms
                  :name: 14.-general-legal-terms
                  :class: hide-from-toc

               14.1 The License Agreement constitutes the whole legal agreement
               between you and Google and governs your use of the SDK (excluding
               any services which Google may provide to you under a separate
               written agreement), and completely replaces any prior agreements
               between you and Google in relation to the SDK. 14.2 You agree that
               if Google does not exercise or enforce any legal right or remedy
               which is contained in the License Agreement (or which Google has the
               benefit of under any applicable law), this will not be taken to be a
               formal waiver of Google's rights and that those rights or remedies
               will still be available to Google. 14.3 If any court of law, having
               the jurisdiction to decide on this matter, rules that any provision
               of the License Agreement is invalid, then that provision will be
               removed from the License Agreement without affecting the rest of the
               License Agreement. The remaining provisions of the License Agreement
               will continue to be valid and enforceable. 14.4 You acknowledge and
               agree that each member of the group of companies of which Google is
               the parent shall be third party beneficiaries to the License
               Agreement and that such other companies shall be entitled to
               directly enforce, and rely upon, any provision of the License
               Agreement that confers a benefit on (or rights in favor of) them.
               Other than this, no other person or company shall be third party
               beneficiaries to the License Agreement. 14.5 EXPORT RESTRICTIONS.
               THE SDK IS SUBJECT TO UNITED STATES EXPORT LAWS AND REGULATIONS. YOU
               MUST COMPLY WITH ALL DOMESTIC AND INTERNATIONAL EXPORT LAWS AND
               REGULATIONS THAT APPLY TO THE SDK. THESE LAWS INCLUDE RESTRICTIONS
               ON DESTINATIONS, END USERS AND END USE. 14.6 The rights granted in
               the License Agreement may not be assigned or transferred by either
               you or Google without the prior written approval of the other party.
               Neither you nor Google shall be permitted to delegate their
               responsibilities or obligations under the License Agreement without
               the prior written approval of the other party. 14.7 The License
               Agreement, and your relationship with Google under the License
               Agreement, shall be governed by the laws of the State of California
               without regard to its conflict of laws provisions. You and Google
               agree to submit to the exclusive jurisdiction of the courts located
               within the county of Santa Clara, California to resolve any legal
               matter arising from the License Agreement. Notwithstanding this, you
               agree that Google shall still be allowed to apply for injunctive
               remedies (or an equivalent type of urgent legal relief) in any
               jurisdiction. *July 27, 2021*

            .. container::

               I have read and agree with the above terms and conditions

               .. container:: buttons

                  Download Android SDK Platform-Tools for Mac
                  `Download Android SDK Platform-Tools for Mac <https://googledownloads.cn/android/repository/platform-tools-latest-darwin.zip>`__
                  *platform-tools-latest-darwin.zip*

      .. container:: devsite-dialog dac-download-dialog
         :name: dac-download-linux-dialog-id

         .. container:: devsite-dialog-contents

            .. rubric:: Download Android SDK Platform-Tools
               :name: download-dynamic_data.setvar.dialog_product_name
               :class: hide-from-toc

            Before downloading, you must agree to the following terms and
            conditions.

            .. container:: dialog-content-stretch sdk-terms

               .. rubric:: Terms and Conditions
                  :name: terms-and-conditions
                  :class: hide-from-toc

               This is the Android Software Development Kit License Agreement
               .. rubric:: 1. Introduction
                  :name: 1.-introduction
                  :class: hide-from-toc

               1.1 The Android Software Development Kit (referred to in the License
               Agreement as the "SDK" and specifically including the Android system
               files, packaged APIs, and Google APIs add-ons) is licensed to you
               subject to the terms of the License Agreement. The License Agreement
               forms a legally binding contract between you and Google in relation
               to your use of the SDK. 1.2 "Android" means the Android software
               stack for devices, as made available under the Android Open Source
               Project, which is located at the following URL:
               https://source.android.com/, as updated from time to time. 1.3 A
               "compatible implementation" means any Android device that (i)
               complies with the Android Compatibility Definition document, which
               can be found at the Android compatibility website
               (https://source.android.com/compatibility) and which may be updated
               from time to time; and (ii) successfully passes the Android
               Compatibility Test Suite (CTS). 1.4 "Google" means Google LLC,
               organized under the laws of the State of Delaware, USA, and
               operating under the laws of the USA with principal place of business
               at 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.

               .. rubric:: 2. Accepting this License Agreement
                  :name: 2.-accepting-this-license-agreement
                  :class: hide-from-toc

               2.1 In order to use the SDK, you must first agree to the License
               Agreement. You may not use the SDK if you do not accept the License
               Agreement. 2.2 By clicking to accept and/or using this SDK, you
               hereby agree to the terms of the License Agreement. 2.3 You may not
               use the SDK and may not accept the License Agreement if you are a
               person barred from receiving the SDK under the laws of the United
               States or other countries, including the country in which you are
               resident or from which you use the SDK. 2.4 If you are agreeing to
               be bound by the License Agreement on behalf of your employer or
               other entity, you represent and warrant that you have full legal
               authority to bind your employer or such entity to the License
               Agreement. If you do not have the requisite authority, you may not
               accept the License Agreement or use the SDK on behalf of your
               employer or other entity.

               .. rubric:: 3. SDK License from Google
                  :name: 3.-sdk-license-from-google
                  :class: hide-from-toc

               3.1 Subject to the terms of the License Agreement, Google grants you
               a limited, worldwide, royalty-free, non-assignable, non-exclusive,
               and non-sublicensable license to use the SDK solely to develop
               applications for compatible implementations of Android. 3.2 You may
               not use this SDK to develop applications for other platforms
               (including non-compatible implementations of Android) or to develop
               another SDK. You are of course free to develop applications for
               other platforms, including non-compatible implementations of
               Android, provided that this SDK is not used for that purpose. 3.3
               You agree that Google or third parties own all legal right, title
               and interest in and to the SDK, including any Intellectual Property
               Rights that subsist in the SDK. "Intellectual Property Rights" means
               any and all rights under patent law, copyright law, trade secret
               law, trademark law, and any and all other proprietary rights. Google
               reserves all rights not expressly granted to you. 3.4 You may not
               use the SDK for any purpose not expressly permitted by the License
               Agreement. Except to the extent required by applicable third party
               licenses, you may not copy (except for backup purposes), modify,
               adapt, redistribute, decompile, reverse engineer, disassemble, or
               create derivative works of the SDK or any part of the SDK. 3.5 Use,
               reproduction and distribution of components of the SDK licensed
               under an open source software license are governed solely by the
               terms of that open source software license and not the License
               Agreement. 3.6 You agree that the form and nature of the SDK that
               Google provides may change without prior notice to you and that
               future versions of the SDK may be incompatible with applications
               developed on previous versions of the SDK. You agree that Google may
               stop (permanently or temporarily) providing the SDK (or any features
               within the SDK) to you or to users generally at Google's sole
               discretion, without prior notice to you. 3.7 Nothing in the License
               Agreement gives you a right to use any of Google's trade names,
               trademarks, service marks, logos, domain names, or other distinctive
               brand features. 3.8 You agree that you will not remove, obscure, or
               alter any proprietary rights notices (including copyright and
               trademark notices) that may be affixed to or contained within the
               SDK.

               .. rubric:: 4. Use of the SDK by You
                  :name: 4.-use-of-the-sdk-by-you
                  :class: hide-from-toc

               4.1 Google agrees that it obtains no right, title or interest from
               you (or your licensors) under the License Agreement in or to any
               software applications that you develop using the SDK, including any
               intellectual property rights that subsist in those applications. 4.2
               You agree to use the SDK and write applications only for purposes
               that are permitted by (a) the License Agreement and (b) any
               applicable law, regulation or generally accepted practices or
               guidelines in the relevant jurisdictions (including any laws
               regarding the export of data or software to and from the United
               States or other relevant countries). 4.3 You agree that if you use
               the SDK to develop applications for general public users, you will
               protect the privacy and legal rights of those users. If the users
               provide you with user names, passwords, or other login information
               or personal information, you must make the users aware that the
               information will be available to your application, and you must
               provide legally adequate privacy notice and protection for those
               users. If your application stores personal or sensitive information
               provided by users, it must do so securely. If the user provides your
               application with Google Account information, your application may
               only use that information to access the user's Google Account when,
               and for the limited purposes for which, the user has given you
               permission to do so. 4.4 You agree that you will not engage in any
               activity with the SDK, including the development or distribution of
               an application, that interferes with, disrupts, damages, or accesses
               in an unauthorized manner the servers, networks, or other properties
               or services of any third party including, but not limited to, Google
               or any mobile communications carrier. 4.5 You agree that you are
               solely responsible for (and that Google has no responsibility to you
               or to any third party for) any data, content, or resources that you
               create, transmit or display through Android and/or applications for
               Android, and for the consequences of your actions (including any
               loss or damage which Google may suffer) by doing so. 4.6 You agree
               that you are solely responsible for (and that Google has no
               responsibility to you or to any third party for) any breach of your
               obligations under the License Agreement, any applicable third party
               contract or Terms of Service, or any applicable law or regulation,
               and for the consequences (including any loss or damage which Google
               or any third party may suffer) of any such breach.

               .. rubric:: 5. Your Developer Credentials
                  :name: 5.-your-developer-credentials
                  :class: hide-from-toc

               5.1 You agree that you are responsible for maintaining the
               confidentiality of any developer credentials that may be issued to
               you by Google or which you may choose yourself and that you will be
               solely responsible for all applications that are developed under
               your developer credentials.

               .. rubric:: 6. Privacy and Information
                  :name: 6.-privacy-and-information
                  :class: hide-from-toc

               6.1 In order to continually innovate and improve the SDK, Google may
               collect certain usage statistics from the software including but not
               limited to a unique identifier, associated IP address, version
               number of the software, and information on which tools and/or
               services in the SDK are being used and how they are being used.
               Before any of this information is collected, the SDK will notify you
               and seek your consent. If you withhold consent, the information will
               not be collected. 6.2 The data collected is examined in the
               aggregate to improve the SDK and is maintained in accordance with
               Google's Privacy Policy, which is located at the following URL:
               https://policies.google.com/privacy 6.3 Anonymized and aggregated
               sets of the data may be shared with Google partners to improve the
               SDK.

               .. rubric:: 7. Third Party Applications
                  :name: 7.-third-party-applications
                  :class: hide-from-toc

               7.1 If you use the SDK to run applications developed by a third
               party or that access data, content or resources provided by a third
               party, you agree that Google is not responsible for those
               applications, data, content, or resources. You understand that all
               data, content or resources which you may access through such third
               party applications are the sole responsibility of the person from
               which they originated and that Google is not liable for any loss or
               damage that you may experience as a result of the use or access of
               any of those third party applications, data, content, or resources.
               7.2 You should be aware the data, content, and resources presented
               to you through such a third party application may be protected by
               intellectual property rights which are owned by the providers (or by
               other persons or companies on their behalf). You may not modify,
               rent, lease, loan, sell, distribute or create derivative works based
               on these data, content, or resources (either in whole or in part)
               unless you have been specifically given permission to do so by the
               relevant owners. 7.3 You acknowledge that your use of such third
               party applications, data, content, or resources may be subject to
               separate terms between you and the relevant third party. In that
               case, the License Agreement does not affect your legal relationship
               with these third parties.

               .. rubric:: 8. Using Android APIs
                  :name: 8.-using-android-apis
                  :class: hide-from-toc

               8.1 Google Data APIs 8.1.1 If you use any API to retrieve data from
               Google, you acknowledge that the data may be protected by
               intellectual property rights which are owned by Google or those
               parties that provide the data (or by other persons or companies on
               their behalf). Your use of any such API may be subject to additional
               Terms of Service. You may not modify, rent, lease, loan, sell,
               distribute or create derivative works based on this data (either in
               whole or in part) unless allowed by the relevant Terms of Service.
               8.1.2 If you use any API to retrieve a user's data from Google, you
               acknowledge and agree that you shall retrieve data only with the
               user's explicit consent and only when, and for the limited purposes
               for which, the user has given you permission to do so. If you use
               the Android Recognition Service API, documented at the following
               URL:
               `https://developer.android.com/reference/android/speech/RecognitionService <https://developer.android.google.cn/reference/android/speech/RecognitionService>`__,
               as updated from time to time, you acknowledge that the use of the
               API is subject to the Data Processing Addendum for Products where
               Google is a Data Processor, which is located at the following URL:
               https://privacy.google.com/businesses/gdprprocessorterms/, as
               updated from time to time. By clicking to accept, you hereby agree
               to the terms of the Data Processing Addendum for Products where
               Google is a Data Processor.

               .. rubric:: 9. Terminating this License Agreement
                  :name: 9.-terminating-this-license-agreement
                  :class: hide-from-toc

               9.1 The License Agreement will continue to apply until terminated by
               either you or Google as set out below. 9.2 If you want to terminate
               the License Agreement, you may do so by ceasing your use of the SDK
               and any relevant developer credentials. 9.3 Google may at any time,
               terminate the License Agreement with you if: (A) you have breached
               any provision of the License Agreement; or (B) Google is required to
               do so by law; or (C) the partner with whom Google offered certain
               parts of SDK (such as APIs) to you has terminated its relationship
               with Google or ceased to offer certain parts of the SDK to you; or
               (D) Google decides to no longer provide the SDK or certain parts of
               the SDK to users in the country in which you are resident or from
               which you use the service, or the provision of the SDK or certain
               SDK services to you by Google is, in Google's sole discretion, no
               longer commercially viable. 9.4 When the License Agreement comes to
               an end, all of the legal rights, obligations and liabilities that
               you and Google have benefited from, been subject to (or which have
               accrued over time whilst the License Agreement has been in force) or
               which are expressed to continue indefinitely, shall be unaffected by
               this cessation, and the provisions of paragraph 14.7 shall continue
               to apply to such rights, obligations and liabilities indefinitely.

               .. rubric:: 10. DISCLAIMER OF WARRANTIES
                  :name: 10.-disclaimer-of-warranties
                  :class: hide-from-toc

               10.1 YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE SDK IS
               AT YOUR SOLE RISK AND THAT THE SDK IS PROVIDED "AS IS" AND "AS
               AVAILABLE" WITHOUT WARRANTY OF ANY KIND FROM GOOGLE. 10.2 YOUR USE
               OF THE SDK AND ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH
               THE USE OF THE SDK IS AT YOUR OWN DISCRETION AND RISK AND YOU ARE
               SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR OTHER
               DEVICE OR LOSS OF DATA THAT RESULTS FROM SUCH USE. 10.3 GOOGLE
               FURTHER EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY
               KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE
               IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
               PARTICULAR PURPOSE AND NON-INFRINGEMENT.

               .. rubric:: 11. LIMITATION OF LIABILITY
                  :name: 11.-limitation-of-liability
                  :class: hide-from-toc

               11.1 YOU EXPRESSLY UNDERSTAND AND AGREE THAT GOOGLE, ITS
               SUBSIDIARIES AND AFFILIATES, AND ITS LICENSORS SHALL NOT BE LIABLE
               TO YOU UNDER ANY THEORY OF LIABILITY FOR ANY DIRECT, INDIRECT,
               INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES THAT MAY BE
               INCURRED BY YOU, INCLUDING ANY LOSS OF DATA, WHETHER OR NOT GOOGLE
               OR ITS REPRESENTATIVES HAVE BEEN ADVISED OF OR SHOULD HAVE BEEN
               AWARE OF THE POSSIBILITY OF ANY SUCH LOSSES ARISING.

               .. rubric:: 12. Indemnification
                  :name: 12.-indemnification
                  :class: hide-from-toc

               12.1 To the maximum extent permitted by law, you agree to defend,
               indemnify and hold harmless Google, its affiliates and their
               respective directors, officers, employees and agents from and
               against any and all claims, actions, suits or proceedings, as well
               as any and all losses, liabilities, damages, costs and expenses
               (including reasonable attorneys fees) arising out of or accruing
               from (a) your use of the SDK, (b) any application you develop on the
               SDK that infringes any copyright, trademark, trade secret, trade
               dress, patent or other intellectual property right of any person or
               defames any person or violates their rights of publicity or privacy,
               and (c) any non-compliance by you with the License Agreement.

               .. rubric:: 13. Changes to the License Agreement
                  :name: 13.-changes-to-the-license-agreement
                  :class: hide-from-toc

               13.1 Google may make changes to the License Agreement as it
               distributes new versions of the SDK. When these changes are made,
               Google will make a new version of the License Agreement available on
               the website where the SDK is made available.

               .. rubric:: 14. General Legal Terms
                  :name: 14.-general-legal-terms
                  :class: hide-from-toc

               14.1 The License Agreement constitutes the whole legal agreement
               between you and Google and governs your use of the SDK (excluding
               any services which Google may provide to you under a separate
               written agreement), and completely replaces any prior agreements
               between you and Google in relation to the SDK. 14.2 You agree that
               if Google does not exercise or enforce any legal right or remedy
               which is contained in the License Agreement (or which Google has the
               benefit of under any applicable law), this will not be taken to be a
               formal waiver of Google's rights and that those rights or remedies
               will still be available to Google. 14.3 If any court of law, having
               the jurisdiction to decide on this matter, rules that any provision
               of the License Agreement is invalid, then that provision will be
               removed from the License Agreement without affecting the rest of the
               License Agreement. The remaining provisions of the License Agreement
               will continue to be valid and enforceable. 14.4 You acknowledge and
               agree that each member of the group of companies of which Google is
               the parent shall be third party beneficiaries to the License
               Agreement and that such other companies shall be entitled to
               directly enforce, and rely upon, any provision of the License
               Agreement that confers a benefit on (or rights in favor of) them.
               Other than this, no other person or company shall be third party
               beneficiaries to the License Agreement. 14.5 EXPORT RESTRICTIONS.
               THE SDK IS SUBJECT TO UNITED STATES EXPORT LAWS AND REGULATIONS. YOU
               MUST COMPLY WITH ALL DOMESTIC AND INTERNATIONAL EXPORT LAWS AND
               REGULATIONS THAT APPLY TO THE SDK. THESE LAWS INCLUDE RESTRICTIONS
               ON DESTINATIONS, END USERS AND END USE. 14.6 The rights granted in
               the License Agreement may not be assigned or transferred by either
               you or Google without the prior written approval of the other party.
               Neither you nor Google shall be permitted to delegate their
               responsibilities or obligations under the License Agreement without
               the prior written approval of the other party. 14.7 The License
               Agreement, and your relationship with Google under the License
               Agreement, shall be governed by the laws of the State of California
               without regard to its conflict of laws provisions. You and Google
               agree to submit to the exclusive jurisdiction of the courts located
               within the county of Santa Clara, California to resolve any legal
               matter arising from the License Agreement. Notwithstanding this, you
               agree that Google shall still be allowed to apply for injunctive
               remedies (or an equivalent type of urgent legal relief) in any
               jurisdiction. *July 27, 2021*

            .. container::

               I have read and agree with the above terms and conditions

               .. container:: buttons

                  Download Android SDK Platform-Tools for Linux
                  `Download Android SDK Platform-Tools for Linux <https://googledownloads.cn/android/repository/platform-tools-latest-linux.zip>`__
                  *platform-tools-latest-linux.zip*

   Last updated 2024-05-03 UTC.


/Overview: Command-line tools Overview
======================================

.. rubric:: Command-line tools
   :name: command-line-tools
   :class: devsite-page-title

.. container:: devsite-article-body clearfix

   The Android SDK is composed of multiple packages that are required for app development.
   This page lists the most important command-line tools that are available, organized by
   the packages in which they're delivered.

   You can install and update each package using Android Studio's 
   `SDK Manager <#sdk-manager>`__ or the `sdkmanager <#sdkmanager>`__
   command-line tool. All of the
   packages are downloaded into your Android SDK directory, which you can locate as
   follows:

   #. In Android Studio, click **File > Project Structure**.
   #. Select **SDK Location** in the left pane. The path is shown under **Android SDK
      location**.

   .. rubric:: Set environment variables
      :name: environment-variables

   We recommend setting the environment variable for `ANDROID_HOME <#envar>`__
   when using the command line.
   Also, set your command search path to include ``ANDROID_HOME/tools``,
   ``ANDROID_HOME/tools/bin``, and ``ANDROID_HOME/platform-tools`` to find the most common
   tools. The steps vary depending on your OS, but read 
   `How to set environment variables <#set>`__ for general guidance.

   .. rubric:: Android SDK Command-Line Tools
      :name: tools-sdk

   | Located in: ``android_sdk``\ ``/cmdline-tools/``\ ``version``\ ``/bin/``

   Note: The Android SDK Command-Line Tools package, located in ``cmdline-tools``, replaces
   the SDK Tools package, located in ``tools``. With the new package, you can select the
   version of the command line tools you want to install, and you can install multiple
   versions at a time. With the old package, you can only install the latest version of the
   tools. Thus, the new package lets you depend on specific versions of the command-line
   tools without having your code break when new versions are released. For information
   about the deprecated SDK Tools package, see the 
   `SDK Tools release notes <https://developer.android.google.cn/studio/releases/sdk-tools>`__.

   If you are not using Android Studio, you can download the command-line tools package
   `here <https://developer.android.google.cn/studio#command-tools>`__.

   `apkanalyzer <#apkanalyzer>`__
      Provides insight into the composition of your APK after the build process completes.
   `avdmanager <#avdmanager>`__
      Lets you create and manage Android Virtual Devices (AVDs) from the command line.
   `lint <https://developer.android.google.cn/studio/write/lint#commandline>`__
      Scans code to help you identify and correct problems with the structural quality of
      your code.
   `retrace <#retrace>`__
      For applications compiled by R8, ``retrace`` decodes an obfuscated stack trace that
      maps back to your original source code.
   `sdkmanager <#sdkmanager>`__
      Lets you view, install, update, and uninstall packages for the Android SDK

   .. rubric:: Android SDK Build Tools
      :name: tools-build

   | Located in: ``android_sdk``\ ``/build-tools/``\ ``version``\ ``/``
   | See `SDK Build Tools release notes <https://developer.android.google.cn/studio/releases/build-tools>`__ for more
     information.

   This package is required to build Android apps. Most of the tools in this package are
   invoked by the build tools and not intended for you. However, the following command-line
   tools might be useful:

   `AAPT2 <https://developer.android.google.cn/studio/command-line/aapt2>`__
      Parses, indexes, and compiles Android resources into a binary format that is
      optimized for the Android platform and packages the compiled resources into a single
      output.
   `apksigner <https://developer.android.google.cn/studio/command-line/apksigner>`__
      Signs APKs and checks whether APK signatures will be verified successfully on all
      platform versions that a given APK supports.
   `zipalign <https://developer.android.google.cn/studio/command-line/zipalign>`__
      Optimizes APK files by ensuring that all uncompressed data starts with a particular
      alignment relative to the start of the file.

   **Note:** You can have multiple versions of the build tools to build your app for
   different Android versions.

   .. rubric:: Android SDK Platform Tools
      :name: tools-platform

   | Located in: ``android_sdk``\ ``/platform-tools/``
   | See `SDK Platform Tools release notes <https://developer.android.google.cn/studio/releases/platform-tools>`__ for more
     information.

   These tools are updated for every new version of the Android platform to support new
   features and fix or improve the tools, and each update is backward compatible with
   earlier platform versions.

   In addition to downloading from the SDK Manager, you can download the SDK Platform Tools
   `here <https://developer.android.google.cn/studio/releases/platform-tools#downloads.html>`__.

   `adb <https://developer.android.google.cn/studio/command-line/adb>`__
      Android Debug Bridge (adb) is a versatile tool that lets you manage the state of an
      emulator instance or Android-powered device. You can also use it to install an APK on
      a device.
   `etc1tool <https://developer.android.google.cn/studio/command-line/etc1tool>`__
      A command-line utility that lets you encode PNG images to the ETC1 compression
      standard and decode ETC1 compressed images back to PNG.
   ``fastboot``
      Flashes a device with platform and other system images. For flashing instructions,
      see `Factory Images for Nexus and Pixel
      Devices <https://developers.google.cn/android/images>`__.
   `logcat <https://developer.android.google.cn/studio/command-line/logcat>`__
      Invoked by adb to view app and system logs.

   .. rubric:: Android Emulator
      :name: tools-emulator

   | Located in: ``android_sdk``\ ``/emulator/``
   | See `Android Emulator release notes <https://developer.android.google.cn/studio/releases/emulator>`__
   | for more information.

   This package is required to use the Android Emulator. It includes the following:

   `emulator <https://developer.android.google.cn/studio/run/emulator-commandline>`__
      A QEMU-based device-emulation tool that you can use to debug and test your
      applications in an actual Android run-time environment.
   `mksdcard <https://developer.android.google.cn/studio/command-line/mksdcard>`__
      Helps you create a disk image that you can use with the emulator to simulate the
      presence of an external storage card, such as an SD card.

   **Note:** Prior to revision 25.3.0, the emulator tools were included with the SDK Tools
   package.

   .. rubric:: Jetifier
      :name: jetifier

   `Jetifier <https://developer.android.google.cn/studio/command-line/jetifier>`__ 
   reads a library that uses Support Library
   classes and outputs an equivalent library that uses the newer AndroidX classes.

Content and code samples on this page are subject to the licenses described in the 
`Content License <https://developer.android.google.cn/license>`__. 
Java and OpenJDK are trademarks or registered trademarks of Oracle
and/or its affiliates.

Last updated 2023-04-12 UTC.


/AAPT2
======

   https://developer.android.google.cn/tools/aapt2?hl=en 

   .. container:: devsite-article-body clearfix

      AAPT2 (Android Asset Packaging Tool) is a build tool that Android Studio and
      Android Gradle Plugin use to compile and package your app's
      `resources <#>`__. AAPT2 parses,
      indexes, and compiles the resources into a binary format that is optimized
      for the Android platform.

      Android Gradle Plugin 3.0.0 and higher enables AAPT2 by default. You
      typically don't need to invoke ``aapt2`` yourself. However, if you prefer to
      use your terminal and your own build system instead of Android Studio, you
      can use AAPT2 from the command line. You can also debug build errors related
      to AAPT2 from the command line. To do so, find AAPT2 as a standalone tool in
      `Android SDK Build Tools <#>`__ 26.0.2 and higher.

      To download Android SDK Build Tools from the command line, use
      `sdkmanager <#>`__ and run the following
      command:

      .. code:: none

         sdkmanager "build-tools;build-tools-version"

      Once you have downloaded the SDK Build Tools, find AAPT2 in
      ``android_sdk /build-tools/ version /``.

      Because revisions of the Android SDK Build Tools aren't released often, the
      version of AAPT2 included in your SDK Build Tools might not be the latest. To
      get the latest version of AAPT2, `download AAPT2 from Google Maven <#download_aapt2>`__.

      To use AAPT2 from the command line on Linux or Mac, run the ``aapt2``
      command. On Windows, run the ``aapt2.exe`` command.

      AAPT2 supports faster compilation of resources by enabling incremental
      compilation. To accomplish incremental compilation, resource processing is
      separated into two steps:

      -  `Compile <#compile>`__: compiles resource files into binary formats.
      -  `Link <#link>`__: merges all compiled files and packages them to a single
         package.

      This separation helps improve performance for incremental builds. For
      example, if there are changes in a single file, you need to recompile only
      that file.

      .. rubric:: Download AAPT2 from Google Maven
         :name: download_aapt2

      To get the newest version of AAPT2 that's not bundled in the build tools,
      download AAPT2 from Google's Maven repository as follows:

      #. In the `repository index <https://maven.google.com/>`__, navigate to
         **com.android.tools.build > aapt2**.

      #. Copy the name of the latest version of AAPT2.

      #. Insert the version name you copied into the following URL and specify your
         target operating system:
         https://dl.google.com/dl/android/maven2/com/android/tools/build/aapt2/
         ``aapt2-version``/aapt2-``aapt2-version``-``[windows | linux | osx]``.jar

         For example, to download version 3.2.0-alpha18-4804415 for Windows, use:
         https://dl.google.com/dl/android/maven2/com/android/tools/build/aapt2/
         **3.2.0-alpha18-4804415**/aapt2-**3.2.0-alpha18-4804415**-**windows**.jar

      #. Navigate to the URL in a browser. AAPT2 will begin downloading shortly.

      #. Unpackage the JAR file you just downloaded.

         The JAR file should contain an ``aapt2`` executable and some libraries
         that the executable depends on.

      .. rubric:: Compile
         :name: compile

      AAPT2 supports compilation of all `Android resource types <#>`__, such as drawables and
      XML files. When you invoke AAPT2 for compilation, pass a single resource file
      as an input per invocation. AAPT2 then parses the file and generates an
      intermediate binary file with a ``.flat`` extension.

      When passing whole directories, AAPT2 recompiles all files in the directory
      even when only one resource has changed. Although you can pass resource
      directories containing more than one resource file to AAPT2 using the
      ``--dir`` flag, you don't gain the benefits of incremental resource
      compilation this way.

      The output file types can differ based on the input you provide for
      compilation, as shown in the following table:

      **Table 1.** The input and output file types for compilation

      .. list-table::
         :widths: 20
         :header-rows: 1

         - 

            - Input
         - 

            - XML resource files, such as `String <#>`__ and
               `Style <#>`__, located in the ``res/values/`` directory
         - 

            - All other resource files.

      The files AAPT2 outputs are not executables, and you must later include these
      binary files as input in the link phase to generate an APK. However, the
      generated APK file is not an executable that you can deploy on an Android
      device right away, because it does not contain DEX files and is not signed.

      .. rubric:: Compile syntax
         :name: compile-syntax

      The general syntax for using ``compile`` is as follows:

      .. code:: none

         aapt2 compile path-to-input-files [options] -o output-directory/

      **Note:**\  For resource files, the path to input files must match the
      following structure: ``path``/``resource-type[-config]``/``file``
      In the following example, AAPT2 compiles resource files named ``values.xml``
      and ``myImage.png`` individually:

      .. code:: none

         aapt2 compile project_root/module_root/src/main/res/values-en/strings.xml -o compiled/
         aapt2 compile project_root/module_root/src/main/res/drawable/myImage.png -o compiled/

      As shown in table 1, the name of the output file depends on the input
      filename and the name of its parent directory.

      For the preceding example with ``strings.xml`` file as the input, ``aapt2``
      automatically names the output file as ``values-en_strings.arsc.flat``.
      However, the compiled drawable file stored in the drawable directory is named
      ``drawable_img.png.flat``.

      .. rubric:: Compile options
         :name: compile_options

      There are several options that you can use with the ``compile`` command, as
      shown in table 2:

      **Table 2.** Compile command options

      .. list-table::
         :widths: 20
         :header-rows: 1

         -

            -  Option
            -  Description
         -

            -  ``-o path``
            -  Specifies the output path for the compiled resource(s).
               This is a required flag, because you must specify a path to a 
               directory where AAPT2 can output and store the compiled resources.
         -

            -  ``--dir directory``
            -  Specifies the directory to scan for resources.
               Although you can use this flag to compile multiple resource files with one command, it disables the benefits of incremental compilation. Therefore, this flag shouldn't be used for large projects.
         -

            -  ``--pseudo-localize``
            -  Generates pseudolocalized versions of default strings, such as en-XA and en-XB.
         -

            -  ``--no-crunch``
            -  Disables PNG processing.
               Use this option if you have already processed the PNG files or 
               if you are creating debug builds that don't require file size reduction. 
               Enabling this option results in faster execution but increases the output file size.
         -

            -  ``--legacy``
            -  Treats errors that are permissible when using earlier versions of AAPT as warnings.
               This flag should be used for unexpected compile-time errors. 
               To resolve known behavior changes that might occur while using AAPT2, 
               read Behavior changes when using AAPT2.
         -

            -  ``-zip file``
            -  file is a ZIP file containing the res directory to scan for resources.
         -

            -  ``-output-text-symbols file``
            -  Generates a text file containing the resource symbols in the specified file.
         -

            -  ``-preserve-visibility-of-styleables``
            -  If specified, applies the same visibility rules for styleables that are used for all other resources. Otherwise, all styleables are made public.
         -

            -  ``-visibility [public|private|default|]``
            -  Sets the visibility of the compiled resources to the specified level.
         -

            -  ``-trace-folder folder``
            -  Generates a systrace JSON trace fragment to the specified folder.
         -

            -  ``-source-path path``
            -  Sets the compiled resource file's source file path to path.
         -

            -  ``-h``
            -  Displays the tools help.
         -

            -  ``-v``
            -  Enables verbose logging.


      .. rubric:: Link
         :name: link

      In the link phase, AAPT2 merges all the intermediate files that the
      compilation phase generates, such as resource tables, binary XML files, and
      processed PNG files, and then packages the files into a single APK.
      Additionally, other auxiliary files, such as ``R.java`` and ProGuard rules
      files, can be generated during this phase. However, the generated APK does
      not contain DEX bytecode and is unsigned. You can't deploy this APK to a
      device.

      If you're not using the Android Gradle plugin to `build your app from the command line <#>`__, you can use other
      command-line tools, such as `d8 <#>`__ to compile Java
      bytecode into DEX bytecode and `apksigner <#>`__
      to sign your APK.

      .. rubric:: Link syntax
         :name: link_syntax

      The general syntax for using ``link`` is as follows:

      .. code:: none

         aapt2 link path-to-input-files [options] -o
         outputdirectory/outputfilename.apk --manifest AndroidManifest.xml

      In the following example, AAPT2 merges two intermediate files,
      ``drawable_Image.flat`` and ``values_values.arsc.flat``, and the
      ``AndroidManifest.xml`` file. AAPT2 links the result against the
      ``android.jar`` file, which holds the resources defined in the ``android``
      package:

      .. code:: none

          aapt2 link -o output.apk
          -I android_sdk/platforms/android_version/android.jar
             compiled/res/values_values.arsc.flat
             compiled/res/drawable_Image.flat --manifest /path/to/AndroidManifest.xml -v

      .. rubric:: Link options
         :name: link_options

      You can use the following options with the ``link`` command:

      **Table 3.** Link command options


      .. list-table::
         :widths: 20
         :header-rows: 1

         -

            -  Option
            -  Description
         -

            -  ``-o path``
            -  
               Specifies the output path for the linked resource APK.

               This is a **required** flag, because you must specify the path for the output
               APK that can hold the linked resources.
         -

            -  ``--manifest file``
            -  
               Specifies the path to the Android manifest file to build.

               This is a **required** flag, because the manifest file encloses essential
               information about your app, like package name and application ID.
         -

            -  ``-I``
            -  
               Provides the path to the platform's ``android.jar`` or other APKs, like
               ``framework-res.apk``, which might be useful while building features.

               This flag is **required** if you are using attributes with the ``android``
               namespace in your resource files.
         -

            -  ``-A directory``
            -  
               Specifies an assets directory to be included in the APK.

               You can use this directory to store original, unprocessed files. To learn more,
               read `Accessing original files <#OriginalFiles>`__.
         -

            -  ``-R file``
            -  
               Passes an individual ``.flat`` file to ``link``, using ``overlay`` semantics
               without using the ``<add-resource>`` tag.

               When you a provide a resource file that overlays an existing file, the last
               conflicting resource given is used.
         -

            -  ``--package-id package-id``
            -  
               Specifies the package ID to use for your app.

               The package ID you specify must be greater than or equal to 0x7f unless used in
               combination with ``--allow-reserved-package-id``.
         -

            -  ``--allow-reserved-package-id``
            -  
               Allows the use of a reserved package ID.

               Reserved package IDs are IDs that are normally assigned to shared libraries and
               in the range from 0x02 to 0x7e, inclusive. By using
               ``--allow-reserved-package-id``, you can assign IDs that fall in the range of
               reserved package IDs.

               This option should only be used for packages with a ``min-sdk`` version of 26 or
               lower.
         -

            -  ``--java directory``
            -  
               Specifies the directory to generate ``R.java`` in.
         -

            -  ``--proguard proguard_options``
            -  
               Generates the output file for ProGuard rules.
         -

            -  ``--proguard-conditional-keep-rules``
            -  
               Generates the output file for ProGuard rules for the main DEX.
         -

            -  ``--no-auto-version``
            -  
               Disables automatic style and layout SDK versioning.
         -

            -  ``--no-version-vectors``
            -  
               Disables automatic versioning of vector drawables. Use this flag only when
               building your APK with the Vector Drawable Library.
         -

            -  ``--no-version-transitions``
            -  
               Disables automatic versioning of transition resources. Use this flag only when
               building your APK with the Transition Support library.
         -

            -  ``--no-resource-deduping``
            -  
               Disables automatic de-duplication of resources with identical values across
               compatible configurations.
         -

            -  ``--enable-sparse-encoding``
            -  
               Enables encoding of sparse entries using a binary search tree. This is useful
               for optimization of APK size but at the cost of resource retrieval performance.
         -

            -  ``-z``
            -  
               Requires localization of strings marked 'suggested'.
         -

            -  ``-c config``
            -  
               Provides a comma-separated list of configurations.

               For example, if you have dependencies on the support library, which contains
               translations for multiple languages, you can filter resources just for the given
               language configuration, like English or Spanish.

               You must define the language configuration by a two-letter ISO 639-1 language
               code, optionally followed by a two letter ISO 3166-1-alpha-2 region code
               preceded by lowercase 'r'. For example, en-rUS.
         -

            -  ``--preferred-density density``
            -  
               Allows AAPT2 to select the closest matching density and strip out all others.

               There are several pixel density qualifiers available to use in your app, such as
               ldpi, hdpi, and xhdpi. When you specify a preferred density, AAPT2 selects and
               stores the closest matching density in the resource table and removes all
               others.
         -

            -  ``--output-to-dir``
            -  
               Outputs the APK contents to a directory specified by ``-o``.

               If you get any errors using this flag, you can resolve them by upgrading to
               `Android SDK Build Tools 28.0.0 or higher <#>`__.
         -

            -  ``--min-sdk-version min-sdk-version``
            -  
               Sets the default minimum SDK version to use for ``AndroidManifest.xml``.
         -

            -  ``--target-sdk-version target-sdk-version``
            -  
               Sets the default target SDK version to use for ``AndroidManifest.xml``.
         -

            -  ``--version-code version-code``
            -  
               Specifies the version code to inject into ``AndroidManifest.xml`` if none is
               present.
         -

            -  ``--version-name version-name``
            -  
               Specifies the version name to inject into ``AndroidManifest.xml`` if none is
               present.
         -

            -  ``--revision-code revision-code``
            -  
               Specifies the revision code to inject into ``AndroidManifest.xml`` file if none
               is present.
         -

            -  ``--replace-version``
            -  
               If ``--version-code``, ``--version-name``, or ``--revision-code`` are specified,
               these values replace any value already in the manifest. By default, nothing
               changes if the manifest already defines these attributes.
         -

            -  ``--compile-sdk-version-nacodeme compile-sdk-version-name``
            -  
               Specifies the version code to inject into ``AndroidManifest.xml`` file if none
               is present.
         -

            -  ``--compile-sdk-version-name compile-sdk-version-name``
            -  
               Specifies the version name to inject into ``AndroidManifest.xml`` file if none
               is present.
         -

            -  ``--proto-format``
            -  
               Generates compiled resources in Protobuf format.

               Suitable as input to the
               `bundletool <#bundletool-build>`__ for
               generating an Android App Bundle.
         -

            -  ``--non-final-ids``
            -  
               Generates ``R.java`` with non-final resource IDs. References to the IDs from
               app’s code aren't inlined during ``kotlinc`` or ``javac`` compilation.
         -

            -  ``--emit-ids path``
            -  
               Emits a file at the given path with a list of names of resource types and their
               ID mappings. This is suitable to use with ``--stable-ids``.
         -

            -  ``--stable-ids outputfilename.ext``
            -  
               Consumes the file generated with ``--emit-ids`` containing the list of names of
               resource types and their assigned IDs.

               This option allows assigned IDs to remain stable even when you delete or add new
               resources while linking.
         -

            -  ``--custom-package package_name``
            -  
               Specifies the custom Java package to generate ``R.java`` under.
         -

            -  ``--extra-packages package_name``
            -  
               Generates the same ``R.java`` file, but with different package names.
         -

            -  ``--add-javadoc-annotation annotation``
            -  
               Adds a JavaDoc annotation to all generated Java classes.
         -

            -  ``--output-text-symbols path``
            -  
               Generates a text file containing the resource symbols of the ``R`` class in the
               specified file.

               You must specify the path to the output file.
         -

            -  ``--auto-add-overlay``
            -  
               Allows the addition of new resources in overlays without using the
               ``<add-resource>`` tag.
         -

            -  ``--rename-manifest-package manifest-package``
            -  
               Renames the package in ``AndroidManifest.xml`` file.
         -

            -  ``--rename-instrumentation-target-package instrumentation- target-package``
            -  
               Changes the name of the target package for
               `instrumentation <#>`__.

               This option should be used in conjunction with ``--rename-manifest-package``.
         -

            -  ``-0 extension``
            -  
               Specifies the extensions of files that you don't want to compress.
         -

            -  ``--split path:config[,config[..]]``
            -  
               Splits resources based on a set of configurations to generate a different
               version of the APK.

               You must specify the path to the output APK along with the set of
               configurations.
         -

            -  ``--proguard-main-dex file``
            -  
               Output file for generated ProGuard rules for the main DEX.
         -

            -  ``--proguard-minimal-keep-rules``
            -  
               Generates a minimal set of ProGuard keep rules.
         -

            -  ``--no-resource-removal``
            -  
               Disables automatic removal of resources without defaults. Use this option only
               when building runtime resource overlay packages.
         -

            -  ``-x``
            -  
               Legacy flag that specifies the use of the package identifier 0x01.
         -

            -  ``--product products-list``
            -  
               Specifies a comma-separated list of product names to keep.
         -

            -  ``--no-xml-namespaces``
            -  
               Removes XML namespace prefix and URI information from ``AndroidManifest.xml``
               file and XML binaries in ``res/*``.
         -

            -  ``--shared-lib``
            -  
               Generates a shared Android runtime library.
         -

            -  ``--static-lib``
            -  
               Generates a static Android library.
         -

            -  ``--no-static-lib-packages``
            -  
               Merges all library resources under the app's package.
         -

            -  ``--no-proguard-location-reference``
            -  
               Keeps ProGuard rules files from having a reference to the source file.
         -

            -  ``--private-symbols package-name``
            -  
               ``package-name`` specifies the package name to use when generating ``R.java``
               for private symbols. If not specified, public and private symbols use the app's
               package name.
         -

            -  ``--override-styles-instead-of-overlaying``
            -  
               Causes styles defined in ``-R`` resources to replace previous definitions
               instead of merging them.
         -

            -  ``--rename-resources-package package-name``
            -  
               Renames the package in the resources table to ``package-name``.
         -

            -  ``--no-compress``
            -  
               Doesn't compress any resources.
         -

            -  ``--keep-raw-values``
            -  
               Preserves raw attribute values in XML files.
         -

            -  ``--no-compress-regex regular-expression``
            -  
               Doesn't compress extensions matching ``regular-expression``. Use the ``$``
               symbol for end of line. Uses a case-sensitive ECMAScript regular expression
               grammar.
         -

            -  ``--warn-manifest-validation``
            -  
               Treats manifest validation errors as warnings.
         -

            -  ``--exclude-configs qualifier[,qualifier[..]]``
            -  
               Excludes values of resources whose configs contain the specified qualifiers.
         -

            -  ``--debug-mode``
            -  
               Inserts ``android:debuggable="true"`` in to the application node of the
               manifest, making the application debuggable even on production devices.
         -

            -  ``--strict-visibility``
            -  
               Doesn't allow overlays with different visibility levels.
         -

            -  ``--exclude-sources``
            -  
               Doesn't serialize source file information when generating resources in Protobuf
               format.
         -

            -  ``--trace-folder folder``
            -  
               Generates ``systrace`` JSON trace fragment to specified ``folder``.
         -

            -  ``--merge-only``
            -  
               Only merges the resources without verifying resource references. This flag
               should only be used with the ``--static-lib`` flag.
         -

            -  ``-h``
            -  
               Displays the help menu.
         -

            -  ``-v``
            -  
               Enables increased verbosity of the output.

   Dump
   ----

   ``dump`` is used for printing information about the APK you generated using the
   ``link`` command.

   .. _dump_syntax:

   Dump syntax
   ~~~~~~~~~~~

   The general syntax for using ``dump`` is as follows:

   .. code:: none

      aapt2 dump sub-command filename.apk [options]

   The following example prints content from the resource table of the specified
   APK:

   .. code:: none

      aapt2 dump resources output.apk

   .. _dump_commands:

   Dump sub-commands
   ~~~~~~~~~~~~~~~~~

   Specify one of the following sub-commands with the ``dump`` command:

   **Table 4.** Dump sub-commands

   ==================   ==================
   Sub-command          Description
   ==================   ==================
   ``apc``              Prints the contents of the AAPT2 Container (APC) generated during compilation.
   ``badging``          Prints information extracted from the APK's manifest.
   ``configurations``   Prints every configuration used by a resource in the APK.
   ``overlayable``      Prints the overlayable resources of the APK.
   ``packagename``      Prints the APK's package name.
   ``permissions``      Prints the permissions extracted from the APK's manifest.
   ``strings``          Prints the contents of the APK's resource table string pool.
   ``styleparents``     Prints the parents of styles used in the APK.
   ``resources``        Prints the contents of the APK's resource table.
   ``xmlstrings``       Prints strings from the APK's compiled XML.
   ``xmltree``          Prints a tree of the APK's compiled XML.
   ==================   ==================

   .. _dump_options:

   Dump options
   ~~~~~~~~~~~~

   Use the following options with ``dump``:

   **Table 5.** Dump options

   ===============  =========================
   Option           Description
   ===============  =========================
   ``--no-values``  Suppresses the output of values when displaying resource.
   ``--file file``  Specifies a file as an argument to be dumped from the APK.
   ``-v``           Increases verbosity of the output.
   ===============  =========================

   Diff
   ----

   Use ``diff`` to compare two APKs and identify any differences between them.

   .. _diff_syntax:

   Diff syntax
   ~~~~~~~~~~~

   The general syntax for using ``diff`` is as follows:

   .. code:: none

      aapt2 diff first.apk second.apk

   There are no options for the ``diff`` command.

   Optimize
   --------

   ``optimize`` is used to run optimizations on the merged resources and
   ``resources.arsc`` before they are packaged into the APK. This optimization can
   reduce APK size by around 1-3%, depending on the size and number of resources
   that are being used.

   .. _optimize_syntax:

   Optimize syntax
   ~~~~~~~~~~~~~~~

   The general syntax for using ``optimize`` is as follows:

   .. code:: none

      aapt2 optimize options file[,file[..]]

   The following example optimizes the resources in ``input.apk`` and creates a
   new, optimized APK in ``output.apk``. It replaces the usual flat table
   representation with a more compact binary search tree, resulting in a smaller
   APK at the cost of retrieval performance:

   .. code:: none

      aapt2 optimize -o output.apk --enable-sparse-encoding input.apk

   .. _optimize_options:

   Optimize options
   ~~~~~~~~~~~~~~~~

   You can use the following options with ``optimize``:

   **Table 6.** Optimize options

   .. list-table::
      :widths: 20
      :header-rows: 1

      - 

         -  Option
         -  Description
      - 

         -  ``-o path``
         -  
         -
            Specifies the output path for the linked resource APK.
            This is a required flag, because you must specify the 
            path for the output APK that can hold the linked resources.
      - 

         -  ``-d directory``
         -  
         - Specifies the path to the output directory for splits.
      - 

         -  ``-x path``
         -  
         - Specifies the path to the XML configuration file.
      - 

         -  ``-p``
         -  
         - Prints the multi-APK artifacts and exit.
      - 

         -  ``--target-densities density[,density[..]]``
         -  
         - 
            Specifies a comma-separated list of the screen densities that the 
            APK is optimized for. All resources that would be unused on devices 
            of the given densities are removed from the APK.

      - 

         -  ``--resources-config-path path``
         -
            Specifies the path to the resources.cfg file containing the list 
            of resources and directives to each resource.

            Format::

               type/resource_name#[directive][,directive]
      - 

         -  ``-c config[,config[..]]``
         - 
            Specifies a comma-separated list of configurations to include. 
            The default is all configurations.
      - 

         -  ``--split path:config[,config[..]]``
         -  
            Splits resources based on a set of configurations to generate a 
            different version of the APK.

            You must specify the path to the output APK along with the 
            set of configurations.
      - 

         -  ``--keep-artifacts artifact[,artifact[..]]``
         -  Specifies a comma-separated list of artifacts to keep. If none 
            are specified, all artifacts are kept.
      - 

         -  ``--enable-sparse-encoding``
         -  
            Enables encoding of sparse entries using a binary search tree. 
            This option is useful for optimization of APK size but at the cost 
            of resource retrieval performance.
      - 

         -  ``--collapse-resource-names``
         -  
            Collapses resource names to a single value in the key string pool. 
            Resources are exempted using the no_collapse directive in a file 
            specified by ``--resources-config-path``.
      - 

         -  ``--shorten-resource-paths``
         -  Specifies the path to output the map of old resource paths to shortened paths.
      - 

         -  ``--resource-path-shortening-map path``
         -  Shortens the paths of resources inside the APK.
      - 

         -  ``-v``
         -  Increases verbosity of the output.
      - 

         -  ``-h``
         -  Displays the tool help.

   Convert
   -------

   By default, the AAPT ``compile`` command compiles resources in to a binary
   format that is suitable for APKs. It is possible to also specify protobuf format
   that is suitable for AABs by specifying ``--proto-format``. The ``convert``
   command converts APKs between the two formats.

   Convert syntax
   ~~~~~~~~~~~~~~

   The general syntax for ``convert`` is as follows:

   .. code:: none

      aapt2 convert -o output-file options file[,file[..]]

   The following example converts the resources in ``input.apk`` and creates a new,
   APK in ``output.apk`` containing protobuf format resources. It replaces the
   usual flat table representation with a more compact binary search tree,
   resulting in a smaller APK at the cost of retrieval performance:

   .. code:: none

      aapt2 convert -o output.apk --output-format proto --enable-sparse-encoding input.apk

   .. _convert_options:

   Convert Options
   ~~~~~~~~~~~~~~~

   Use the following options with ``convert``:

   **Table 7.** Convert options

   .. list-table::
      :widths: 20
      :header-rows: 1

      - 
         -  Option
         -  Description
      -
         -  ``-o path``
         -
            Specifies the output path for the linked resource APK.

            This is a **required** flag, because you must specify the path for the output
            APK that can hold the linked resources.
      -
         -  ``--output-format [proto|binary]``
         -
            Format of the output. Accepted values are ``proto`` and ``binary``. When not
            set, defaults to ``binary``.
      -
         -  ``--enable-sparse-encoding``
         -
            Enables encoding of sparse entries using a binary search tree. This option is
            useful for optimization of APK size but at the cost of resource retrieval
            performance.
      -
         -  ``--keep-raw-values``
         -
            Preserves raw attribute values in XML files.
      -
         -  ``-v``
         -
            Increases verbosity of the output.
      -
         -  ``-h``
         -
            Displays the tool help.

   .. _daemon:

   Daemon mode
   -----------

   AAPT version 2.19 introduced daemon mode for issuing commands. Daemon mode lets
   you enter multiple commands in a single AAPT session.

   .. _daemon_syntax:

   Daemon syntax
   ~~~~~~~~~~~~~

   Start daemon mode with the following command:

   .. code:: none

      aapt2 daemon

   Once daemon mode is running, you can enter commands. Each argument of the
   command must be on a separate line, with a blank line at the end of the command.
   Exit daemon mode by typing Control+D.

   Consider the following individual ``compile`` commands:

   .. code:: none

      aapt2 compile project_root/module_root/src/main/res/values-en/strings.xml -o compiled/
      aapt2 compile project_root/module_root/src/main/res/drawable/myImage.png -o compiled/

   These commands can be entered in daemon mode as:

   .. code:: none

      aapt2 daemon
      Ready
      compile
      project_root/module_root/src/main/res/values-en/strings.xml
      -o
      compiled/

      Done
      compile
      project_root/module_root/src/main/res/drawable/myImage.png
      -o
      compiled/

      Done
      ^D
      Exiting daemon

   .. _daemon_options:

   Daemon mode options
   ~~~~~~~~~~~~~~~~~~~

   The single option for daemon mode is ``--trace-folder folder``, which
   generates a ``systrace`` JSON trace fragment to specified ``folder``.

   Version
   -------

   Determine the version of AAPT2 you are using with the ``version`` command:

   .. code:: none

      aapt2 version
      Android Asset Packaging Tool (aapt) 2.19-8678579

   .. _aapt2_changes:

   Behavior changes when using AAPT2
   ---------------------------------

   Prior to AAPT2, AAPT was the default version of the Android Asset Packaging
   Tool, which is now deprecated. Although AAPT2 should immediately work with older
   projects, this section describes some behavior changes you should be aware of.

   .. _aapt2_element_hierarchy:

   Element hierarchies in the Android manifest
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In previous versions of AAPT, elements nested in incorrect nodes in the
   ``AndroidManifest.xml`` file were either ignored or resulted in a warning. For
   example, consider the following example:

   .. code:: prettyprint

      <manifest xmlns:android="http://schemas.android.com/apk/res/android"
         package="com.example.myname.myapplication">
         <application
             ...
             <activity android:name=".MainActivity">
                 <intent-filter>
                     <action android:name="android.intent.action.MAIN" />
                     <category android:name="android.intent.category.LAUNCHER" />
                 </intent-filter>
                 <action android:name="android.intent.action.CUSTOM" />
             </activity>
         </application>
      </manifest>

   Previous versions of AAPT would simply ignore the misplaced ``<action>`` tag.

   With AAPT2, you receive the following error:

   .. code:: none

      AndroidManifest.xml:15: error: unknown element <action> found.

   To resolve the issue, make sure your manifest elements are nested correctly. For
   more information, read the `App Manifest overview <#>`__.

   .. _aapt2_resource_naming:

   Declaration of resources
   ~~~~~~~~~~~~~~~~~~~~~~~~

   You can no longer indicate the type of a resource from the ``name`` attribute.
   The following example incorrectly declares an ``attr`` resource item:

   .. code:: prettyprint

      <style name="childStyle" parent="parentStyle">
          <item name="attr/my_attr">@color/pink</item>
      </style>

   Declaring a resource type this way results in the following build error:

   .. code:: none

      Error: style attribute 'attr/attr/my_attr (aka my.package:attr/attr/my_attr)'
      not found.

   To resolve this error, explicitly declare the type using ``type="attr"``:

   .. code:: prettyprint

      <style name="childStyle" parent="parentStyle">
        <item type="attr" name="my_attr">@color/pink</item>
      </style>

   Additionally, when declaring a ``<style>`` element, its parent must also be a
   style resource type. Otherwise, you get an error similar to the following:

   .. code:: none

      Error: (...) invalid resource type 'attr' for parent of style

   .. _at_symbol:

   Incorrect use of @ resource reference symbols
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   AAPT2 throws build errors when you omit or incorrectly place resource reference
   symbols (``@``). For example, if you omit the symbol when specifying a style
   attribute:

   .. code:: prettyprint

      <style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">
        ...
        <!-- Note the missing '@' symbol when specifying the resource type. -->
        <item name="colorPrimary">color/colorPrimary</item>
      </style>

   When building the module, AAPT2 throws the following build error:

   .. code:: none

      ERROR: expected color but got (raw string) color/colorPrimary

   Additionally, if you incorrectly include the symbol when accessing a resource
   from the ``android`` namespace:

   .. code:: prettyprint

      ...
      <!-- When referencing resources from the 'android' namespace, omit the '@' symbol. -->
      <item name="@android:windowEnterAnimation"/>

   When building the module, AAPT2 throws the following build error:

   .. code:: none

      Error: style attribute '@android:attr/windowEnterAnimation' not found

   .. _incorrect_configuration_of_libraries:

   Incorrect configuration of libraries
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If your app has a dependency on a third-party library that was built using older
   versions of the `Android SDK Build Tools <#>`__, your
   app might crash at runtime without displaying any errors or warnings. This crash
   might occur because during the library's creation, the ``R.java`` fields are
   declared ``final``. As a result, all the resource IDs are inlined in the
   library's classes.

   AAPT2 relies on being able to re-assign IDs to library resources when building
   your app. If the library assumes the IDs are ``final`` and inlines them in the
   library DEX, there is a runtime mismatch.

   To resolve this error, contact the library author to rebuild the library using
   the latest version of the Android SDK Build Tools, and republish the library.

   Last updated 2023-04-12 UTC.


/Android Debug Bridge (adb)
===========================

   https://developer.android.google.cn/tools/adb?hl=en 

   .. container:: devsite-article-body clearfix

      Android Debug Bridge (``adb``) is a versatile command-line tool that lets you
      communicate with a device. The ``adb`` command facilitates a variety of
      device actions, such as installing and debugging apps. ``adb`` provides
      access to a Unix shell that you can use to run a variety of commands on a
      device. It is a client-server program that includes three components:

      -  **A client**, which sends commands. The client runs on your development
         machine. You can invoke a client from a command-line terminal by issuing
         an ``adb`` command.
      -  **A daemon (adbd)**, which runs commands on a device. The daemon runs as a
         background process on each device.
      -  **A server**, which manages communication between the client and the
         daemon. The server runs as a background process on your development
         machine.

      ``adb`` is included in the Android SDK Platform Tools package. Download this
      package with the `SDK Manager <#sdk-manager>`__, which
      installs it at ``android_sdk /platform-tools/``. If you want the
      standalone Android SDK Platform Tools package, `download it here <#>`__.

      For information on connecting a device for use over ``adb``, including how to
      use the Connection Assistant to troubleshoot common problems, 
      see `Run apps on a hardware device <#>`__.

      .. rubric:: How adb works
         :name: howadbworks

      When you start an ``adb`` client, the client first checks whether there is an
      ``adb`` server process already running. If there isn't, it starts the server
      process. When the server starts, it binds to local TCP port 5037 and listens
      for commands sent from ``adb`` clients.

      **Note:** All ``adb`` clients use port 5037 to communicate with the ``adb``
      server.

      The server then sets up connections to all running devices. It locates
      emulators by scanning odd-numbered ports in the range 5555 to 5585, which is
      the range used by the first 16 emulators. Where the server finds an ``adb``
      daemon (adbd), it sets up a connection to that port.

      Each emulator uses a pair of sequential ports — an even-numbered port for
      console connections and an odd-numbered port for ``adb`` connections. For
      example:

      | Emulator 1, console: 5554
      | Emulator 1, ``adb``: 5555
      | Emulator 2, console: 5556
      | Emulator 2, ``adb``: 5557
      | and so on.

      As shown, the emulator connected to ``adb`` on port 5555 is the same as the
      emulator whose console listens on port 5554.

      Once the server has set up connections to all devices, you can use ``adb``
      commands to access those devices. Because the server manages connections to
      devices and handles commands from multiple ``adb`` clients, you can control
      any device from any client or from a script.

      .. rubric:: Enable adb debugging on your device
         :name: Enabling

      To use adb with a device connected over USB, you must enable **USB
      debugging** in the device system settings, under **Developer options**. On
      Android 4.2 (API level 17) and higher, the **Developer options** screen is
      hidden by default. To make it visible, `enable Developer options. <#enable>`__

      You can now connect your device with USB. You can verify that your device is
      connected by executing ``adb devices`` from the
      ``android_sdk /platform-tools/`` directory. If connected, you'll see the
      device name listed as a "device."

      **Note:** When you connect a device running Android 4.2.2 (API level 17) or
      higher, the system shows a dialog asking whether to accept an RSA key that
      allows debugging through this computer. This security mechanism protects user
      devices because it ensures that USB debugging and other adb commands cannot
      be executed unless you're able to unlock the device and acknowledge the
      dialog.

      For more information about connecting to a device over USB, read `Run apps on a hardware device <#>`__.

      .. rubric:: Connect to a device over Wi-Fi
         :name: connect-to-a-device-over-wi-fi

      **Note:** The instructions below do not apply to Wear devices running Android
      11 (API level 30). See the guide to `debugging a Wear OS app <#wifi-debugging>`__ for more
      information.

      Android 11 (API level 30) and higher support deploying and debugging your app
      wirelessly from your workstation using Android Debug Bridge (adb). For
      example, you can deploy your debuggable app to multiple remote devices
      without ever needing to physically connect your device via USB. This
      eliminates the need to deal with common USB connection issues, such as driver
      installation.

      Before you begin using wireless debugging, do the following:

      -  Ensure that your workstation and device are connected to the same wireless
         network.

      -  Ensure that your device is running Android 11 (API level 30) or higher for
         phone or Android 13 (API level 33) or higher for TV and WearOS. For more
         information, 
         see `Check & update your Android version <https://support.google.com/android/answer/7680439>`__.

      -  If using the IDE, ensure that you have the latest version of Android
         Studio installed. You can download it `here <#>`__.

      -  On your workstation, update to the latest version of the `SDK Platform Tools <#>`__.

      To use wireless debugging, you must pair your device to your workstation
      using a QR code or a pairing code. Your workstation and device must be
      connected to the same wireless network. To connect to your device, follow
      these steps:

      #. `Enable developer options <#enable>`__ on your
         device.

      #. Open Android Studio and select **Pair Devices Using Wi-Fi** from the run
         configurations menu.

         .. container::

            .. container:: float

               |Run configurations dropdown menu|

               .. container:: caption

                  **Figure 1.** Run configurations menu.

         The **Pair devices over Wi-Fi** window pops up, as shown in figure 2.

         .. container::

            .. container:: float

               |Screenshot of the pair devices over Wi-Fi popup window|

               .. container:: caption

                  **Figure 2.** Popup window to pair devices using QR code or
                  pairing code.

      #. On your device, tap **Wireless debugging** and pair your device:

         .. container::

            .. container:: float

               |Screenshot of a pixel phone showing the Wireless debugging systems
               setting.|

               .. container:: caption

                  **Figure 3.** Screenshot of the **Wireless debugging** setting on
                  a Google Pixel phone.

         #. To pair your device with a QR code, select **Pair device with QR code**
            and scan the QR code obtained from the **Pair devices over Wi-Fi**
            popup shown in figure 2.

         #. To pair your device with a pairing code, select **Pair device with
            pairing code** from the **Pair devices over Wi-Fi** popup. On your
            device, select **Pair using pairing code** and take note of the
            six-digit code provided. Once your device appears on the **Pair devices
            over Wi-Fi** window, you can select **Pair** and enter the six-digit
            code shown on your device.

            .. container::

               .. container:: float

                  |Screenshot of example pin code entry|

                  .. container:: caption

                     **Figure 4.** Example of six-digit code entry.

      #. After your device is paired, you can attempt to deploy your app to your
         device.

         To pair a different device or to forget the current device on your
         workstation, navigate to **Wireless debugging** on your device. Tap your
         workstation name under **Paired devices** and select **Forget**.

      #. If you want to quickly turn on and off wireless debugging, you can utilize
         the `Quick settings developer tiles <#general>`__
         for **Wireless debugging**, found in **Developer Options** > **Quick
         settings developer tiles**.

         .. container::

            .. container:: float

               |Screenshot of Quick settings developer tiles from a Google Pixel
               phone.|

               .. container:: caption

                  **Figure 5.** The **Quick settings developer tiles** setting lets
                  you quickly turn wireless debugging on and off.

      .. rubric:: Wi-Fi connection using command line
         :name: wireless-android11-command-line

      Alternatively, to connect to your device using command line without Android
      Studio, follow these steps:

      #. Enable developer options on your device, as described earlier.

      #. Enable **Wireless debugging** on your device, as described earlier.

      #. On your workstation, open a terminal window and navigate to
         ``android_sdk/platform-tools``.

      #. Find your IP address, port number, and pairing code by selecting **Pair
         device with pairing code**. Take note of the IP address, port number, and
         pairing code displayed on the device.

      #. On your workstation's terminal, run ``adb pair ipaddr:port``. Use the IP
         address and port number from above.

      #. When prompted, enter the pairing code, as shown below.

         .. container:: float

            |Screenshot of pairing on the command line.|

            .. container:: caption

               **Figure 6.** A message indicates that your device has been
               successfully paired.

      .. rubric:: Resolve wireless connection issues
         :name: wireless-android11-troubleshoot

      If you are having issues connecting to your device wirelessly, try the
      following troubleshooting steps to resolve the issue.

      .. rubric:: Check whether your workstation and device meet the prerequisites
         :name: check-prereqs

      Check that the workstation and device meet the prerequisites listed at the
      `beginning of this section <#connect-to-a-device-over-wi-fi-android-11+>`__.

      .. rubric:: Check for other known issues
         :name: check-known-issues

      The following is a list of current known issues with wireless debugging (with
      adb or Android Studio) and how to resolve them:

      -  **Wi-Fi is not connecting**: Secure Wi-Fi networks, such as corporate
         Wi-Fi networks, may block p2p connections and not let you connect over
         Wi-Fi. Try connecting with a cable or another (non-corp) Wi-Fi network.
         Wireless connection using ``adb connect ip : port`` over
         tcp/ip (following an initial USB connection) is another option, in case
         resorting to a non-corp network is an option.

      -  **``adb`` over Wi-Fi sometimes turns off automatically**: This can happen
         if the device either switches Wi-Fi networks or disconnects from the
         network. To resolve, re-connect to the network.

      -  **Device not connecting after pairing successfully**: ``adb`` relies on
         mDNS to discover and automatically connect to paired devices. If your
         network or device configuration does not support mDNS or has disabled it,
         then you need to manually connect to the device using
         ``adb connect ip : port``.

      .. rubric:: Connect wirelessly with a device after an initial USB connection
         (only option available on Android 10 and lower)
         :name: wireless

      **Note:** This workflow is applicable also to Android 11 (and higher), the
      caveat being that it also involves an \*initial\* connection over physical
      USB.

      **Note:** The following instructions do not apply to Wear devices running
      Android 10 (API level 29) or lower. See the guide about `debugging a Wear OS app <#wifi-debugging>`__ for more
      information.

      ``adb`` usually communicates with the device over USB, but you can also use
      ``adb`` over Wi-Fi. To connect a device running Android 10 (API level 29) or
      lower, follow these initial steps over USB:

      #. Connect your Android device and ``adb`` host computer to a common Wi-Fi
         network.

      #. Connect the device to the host computer with a USB cable.

      #. Set the target device to listen for a TCP/IP connection on port 5555:

         .. code:: none

            adb tcpip 5555

      #. Disconnect the USB cable from the target device.

      #. Find the IP address of the Android device. For example, on a Nexus device,
         you can find the IP address at **Settings** > **About tablet** (or **About
         phone**) > **Status** > **IP address**.

      #. Connect to the device by its IP address:

         .. code:: none

            adb connect device_ip_address:5555

      #. Confirm that your host computer is connected to the target device:

         .. code:: none

            $ adb devices
            List of devices attached
            device_ip_address:5555 device

      Your device is now connected to ``adb``.

      If the ``adb`` connection to your device is lost:

      -  Make sure that your host is still connected to the same Wi-Fi network as
         your Android device.

      -  Reconnect by executing the ``adb connect`` step again.

      -  If that doesn't work, reset your ``adb`` host:

         .. code:: none

            adb kill-server

         Then start over from the beginning.

      .. rubric:: Query for devices
         :name: devicestatus

      Before issuing ``adb`` commands, it is helpful to know what device instances
      are connected to the ``adb`` server. Generate a list of attached devices
      using the ``devices`` command:

      .. code:: none

           adb devices -l
           

      In response, ``adb`` prints this status information for each device:

      -  **Serial number:** ``adb`` creates a string to uniquely identify the
         device by its port number. Here's an example serial number:
         ``emulator-5554``
      -  **State:** The connection state of the device can be one of the following:

         -  ``offline``: The device is not connected to ``adb`` or is not
            responding.
         -  ``device``: The device is connected to the ``adb`` server. Note that
            this state does not imply that the Android system is fully booted and
            operational, because the device connects to ``adb`` while the system is
            still booting. After boot-up, this is the normal operational state of a
            device.
         -  ``no device``: There is no device connected.

      -  **Description:** If you include the ``-l`` option, the ``devices`` command
         tells you what the device is. This information is helpful when you have
         multiple devices connected so that you can tell them apart.

      The following example shows the ``devices`` command and its output. There are
      three devices running. The first two lines in the list are emulators, and the
      third line is a hardware device that is attached to the computer.

      .. code:: none

         $ adb devices
         List of devices attached
         emulator-5556 device product:sdk_google_phone_x86_64 model:Android_SDK_built_for_x86_64 device:generic_x86_64
         emulator-5554 device product:sdk_google_phone_x86 model:Android_SDK_built_for_x86 device:generic_x86
         0a388e93      device usb:1-1 product:razor model:Nexus_7 device:flo

      .. rubric:: Emulator not listed
         :name: notlisted

      The ``adb devices`` command has a corner-case command sequence that causes
      running emulators to not show up in the ``adb devices`` output even though
      the emulators are visible on your desktop. This happens when *all* of the
      following conditions are true:

      -  The ``adb`` server is not running.
      -  You use the ``emulator`` command with the ``-port`` or ``-ports`` option
         with an odd-numbered port value between 5554 and 5584.
      -  The odd-numbered port you chose is not busy, so the port connection can be
         made at the specified port number — or, if it is busy, the emulator
         switches to another port that meets the requirements in 2.
      -  You start the ``adb`` server after you start the emulator.

      One way to avoid this situation is to let the emulator choose its own ports
      and to run no more than 16 emulators at once. Another way is to always start
      the ``adb`` server before you use the ``emulator`` command, as explained in
      the following examples.

      **Example 1:** In the following command sequence, the ``adb devices`` command
      starts the ``adb`` server, but the list of devices does not appear.

      Stop the ``adb`` server and enter the following commands in the order shown.
      For the AVD name, provide a valid AVD name from your system. To get a list of
      AVD names, type ``emulator -list-avds``. The ``emulator`` command is in the
      ``android_sdk /tools`` directory.

      .. code:: none

         $ adb kill-server
         $ emulator -avd Nexus_6_API_25 -port 5555
         $ adb devices

         List of devices attached
         * daemon not running. starting it now on port 5037 *
         * daemon started successfully *

      **Example 2:** In the following command sequence, ``adb devices`` displays
      the list of devices because the ``adb`` server was started first.

      To see the emulator in the ``adb devices`` output, stop the ``adb`` server,
      and then start it again after using the ``emulator`` command and before using
      the ``adb devices`` command, as follows:

      .. code:: none

         $ adb kill-server
         $ emulator -avd Nexus_6_API_25 -port 5557
         $ adb start-server
         $ adb devices

         List of devices attached
         emulator-5557 device

      For more information about emulator command-line options, 
      see `Command-Line startup options <#startup-options>`__.

      .. rubric:: Send commands to a specific device
         :name: directingcommands

      If multiple devices are running, you must specify the target device when you
      issue the ``adb`` command. To specify the target, follow these steps:

      #. Use the ``devices`` command to get the serial number of the target.
      #. Once you have the serial number, use the ``-s`` option with the ``adb``
         commands to specify the serial number.

         #. If you're going to issue a lot of ``adb`` commands, you can set the
            ``$ANDROID_SERIAL`` environment variable to contain the serial number
            instead.
         #. If you use both ``-s`` and ``$ANDROID_SERIAL``, ``-s`` overrides
            ``$ANDROID_SERIAL``.

      In the following example, the list of attached devices is obtained, and then
      the serial number of one of the devices is used to install the
      ``helloWorld.apk`` on that device:

      .. code:: none

         $ adb devices
         List of devices attached
         emulator-5554 device
         emulator-5555 device
         0.0.0.0:6520  device

         # To install on emulator-5555
         $ adb -s emulator-5555 install helloWorld.apk
         # To install on 0.0.0.0:6520
         $ adb -s 0.0.0.0:6520 install helloWorld.apk

      **Note:** If you issue a command without specifying a target device when
      multiple devices are available, ``adb`` displays an error "adb: more than one
      device/emulator".

      If you have multiple devices available but only one is an emulator, use the
      ``-e`` option to send commands to the emulator. If there are multiple devices
      but only one hardware device attached, use the ``-d`` option to send commands
      to the hardware device.

      .. rubric:: Install an app
         :name: move

      You can use ``adb`` to install an APK on an emulator or connected device with
      the ``install`` command:

      .. code:: none

         adb install path_to_apk

      You must use the ``-t`` option with the ``install`` command when you install
      a test APK. For more information, 
      see `-t <#-t-option>`__.

      To install multiple APKs use ``install-multiple``. This is useful if you
      download all the APKs for a specific device for your app from the Play
      Console and want to install them on an emulator or physical device.

      For more information about how to create an APK file that you can install on
      an emulator/device instance, 
      see `Build and run your app <#>`__.

      **Note:** If you are using Android Studio, you do not need to use ``adb``
      directly to install your app on the emulator or device. Instead, Android
      Studio handles the packaging and installation of the app for you.

      .. rubric:: Set up port forwarding
         :name: forwardports

      Use the ``forward`` command to set up arbitrary port forwarding, which
      forwards requests on a specific host port to a different port on a device.
      The following example sets up forwarding of host port 6100 to device port
      7100:

      .. code:: none

         adb forward tcp:6100 tcp:7100

      The following example sets up forwarding of host port 6100 to local:logd:

      .. code:: none

         adb forward tcp:6100 local:logd

      This could be useful if you are trying to detemine what is being sent to a
      given port on the device. All received data will be written to the
      system-logging daemon and displayed in the device logs.

      .. rubric:: Copy files to and from a device
         :name: copyfiles

      Use the ``pull`` and ``push`` commands to copy files to and from a device.
      Unlike the ``install`` command, which only copies an APK file to a specific
      location, the ``pull`` and ``push`` commands let you copy arbitrary
      directories and files to any location in a device.

      To copy a file or directory and its sub-directories *from* the device, do the
      following:

      .. code:: none

         adb pull remote local

      To copy a file or directory and its sub-directories *to* the device, do the
      following:

      .. code:: none

         adb push local remote

      Replace ``local`` and ``remote`` with the paths to the target files/directory
      on your development machine (local) and on the device (remote). For example:

      .. code:: none

         adb push myfile.txt /sdcard/myfile.txt

      .. rubric:: Stop the adb server
         :name: stopping

      In some cases, you might need to terminate the ``adb`` server process and
      then restart it to resolve the problem. For example, this could be the case
      if ``adb`` does not respond to a command.

      To stop the ``adb`` server, use the ``adb kill-server`` command. You can then
      restart the server by issuing any other ``adb`` command.

      .. rubric:: Issue adb commands
         :name: issuingcommands

      Issue ``adb`` commands from a command line on your development machine or
      from a script using the following:

      .. code:: none

         adb [-d | -e | -s serial_number] command

      If there's only one emulator running or only one device connected, the
      ``adb`` command is sent to that device by default. If multiple emulators are
      running and/or multiple devices are attached, you need to use the ``-d``,
      ``-e``, or ``-s`` option to specify the target device to which the command
      should be directed.

      You can see a detailed list of all supported ``adb`` commands using the
      following command:

      .. code:: none

         adb --help

      .. rubric:: Issue shell commands
         :name: shellcommands

      You can use the ``shell`` command to issue device commands through ``adb`` or
      to start an interactive shell. To issue a single command, use the ``shell``
      command like this:

      .. code:: none

         adb [-d |-e | -s serial_number] shell shell_command

      To start an interactive shell on a device, use the ``shell`` command like
      this:

      .. code:: none

         adb [-d | -e | -s serial_number] shell

      To exit an interactive shell, press ``Control+D`` or type ``exit``.

      Android provides most of the usual Unix command-line tools. For a list of
      available tools, use the following command:

      .. code:: none

         adb shell ls /system/bin

      Help is available for most of the commands via the ``--help`` argument. Many
      of the shell commands are provided by
      `toybox <http://landley.net/toybox/>`__. General help applicable to all
      toybox commands is available via ``toybox --help``.

      With Android Platform Tools 23 and higher, ``adb`` handles arguments the same
      way that the ``ssh(1)`` command does. This change has fixed a lot of problems
      with `command injection <https://en.wikipedia.org/wiki/Code_injection#Shell_injection>`__
      and makes it possible to safely execute commands that contain shell
      `metacharacters <https://en.wikipedia.org/wiki/Metacharacter>`__, such as
      ``adb install Let\'sGo.apk``. This change means that the interpretation of
      any command that contains shell metacharacters has also changed.

      For example, ``adb shell setprop key ' value '`` is now
      an error, because the single quotes (``'``) are swallowed by the local shell,
      and the device sees ``adb shell setprop key value``. To make the command
      work, quote twice, once for the local shell and once for the remote shell, as
      you do with ``ssh(1)``. For example,
      ``adb shell setprop key ' value '``.

      See also `Logcat command-line tool <#>`__, which is
      useful for monitoring the system log.

      .. rubric:: Call activity manager
         :name: am

      Within an ``adb`` shell, you can issue commands with the activity manager
      (``am``) tool to perform various system actions, such as start an activity,
      force-stop a process, broadcast an intent, modify the device screen
      properties, and more.

      While in a shell, the ``am`` syntax is:

      .. code:: none

         am command

      You can also issue an activity manager command directly from ``adb`` without
      entering a remote shell. For example:

      .. code:: none

         adb shell am start -a android.intent.action.VIEW

      **Table 1.** Available activity manager commands

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Command
            - Description
         - 

            - ``start [ options ] intent``
            - Start an `Activity <#>`__ specified
               by ``intent``.
               See the `Specification for intent arguments <#IntentSpec>`__.

               Options are:

               -  ``-D``: Enable debugging.
               -  ``-W``: Wait for launch to complete.
               -  ``--start-profiler file``: Start profiler and send results
                  to ``file``.
               -  ``-P file``: Like ``--start-profiler``, but profiling stops
                  when the app goes idle.
               -  ``-R count``: Repeat the activity launch ``count`` times.
                  Prior to each repeat, the top activity will be finished.
               -  ``-S``: Force stop the target app before starting the activity.
               -  ``--opengl-trace``: Enable tracing of OpenGL functions.
               -  ``--user user_id | current``: Specify which user to run
                  as; if not specified, then run as the current user.
         - 

            - ``startservice [ options ] intent``
            - Start the `Service <#>`__ specified
               by ``intent``.
               See the `Specification for intent arguments <#IntentSpec>`__.

               Options are:

               -  ``--user user_id | current``: Specify which user to run
                  as. If not specified, then run as the current user.
         - 

            - ``force-stop package``
            - Force-stop everything associated with ``package``.
         - 

            - ``kill [ options ] package``
            - Kill all processes associated with ``package``. This command kills
               only processes that are safe to kill and that will not impact the
               user experience.
               Options are:

               -  ``--user user_id | all | current``: Specify which
                  user's processes to kill. If not specified, then kill all users'
                  processes.
         - 

            - ``kill-all``
            - Kill all background processes.
         - 

            - ``broadcast [ options ] intent``
            - Issue a broadcast intent.
               See the `Specification for intent arguments <#IntentSpec>`__.

               Options are:

               -  ``[--user user_id | all | current]``: Specify which
                  user to send to. If not specified, then send to all users.
         - 

            - ``instrument [ options ] component``
            - Start monitoring with an
               `Instrumentation <#>`__
               instance. Typically the target ``component`` is the form
               ``test_package / runner_class``.
               Options are:

               -  ``-r``: Print raw results (otherwise decode
                  ``report_key_streamresult``). Use with ``[-e perf true]`` to
                  generate raw output for performance measurements.
               -  ``-e name \ value``: Set argument ``name`` to
                  ``value``. For test runners a common form is
                  ``-e testrunner_flag \ value [, value ...]``.
               -  ``-p file``: Write profiling data to ``file``.
               -  ``-w``: Wait for instrumentation to finish before returning.
                  Required for test runners.
               -  ``--no-window-animation``: Turn off window animations while
                  running.
               -  ``--user user_id | current``: Specify which user
                  instrumentation runs in. If not specified, run in the current
                  user.
         - 

            - ``profile start process \ file``
            - Start profiler on ``process``, write results to ``file``.
         - 

            - ``profile stop process``
            - Stop profiler on ``process``.
         - 

            - ``dumpheap [ options ] process \ file``
            - Dump the heap of ``process``, write to ``file``.
               Options are:

               -  ``--user [ user_id | current]``: When supplying a
                  process name, specify the user of the process to dump. If not
                  specified, the current user is used.
               -  ``-n``: Dump native heap instead of managed heap.
         - 

            - ``set-debug-app [ options ] package``
            - Set app ``package`` to debug.
               Options are:

               -  ``-w``: Wait for debugger when app starts.
               -  ``--persistent``: Retain this value.
         - 

            - ``clear-debug-app``
            - Clear the package previous set for debugging with ``set-debug-app``.
         - 

            - ``monitor [ options ]``
            - Start monitoring for crashes or ANRs.
               Options are:

               -  ``--gdb``: Start ``gdbserv`` on the given port at crash/ANR.
         - 

            - ``screen-compat {on | off} package``
            - Control `screen compatibility <#>`__ mode of
               ``package``.
         - 

            - ``display-size [reset | width x height ]``
            - Override device display size. This command is helpful for testing
               your app across different screen sizes by mimicking a small screen
               resolution using a device with a large screen, and vice versa.
               | Example:
               | ``am display-size 1280x800``
         - 

            - ``display-density dpi``
            - Override device display density. This command is helpful for testing
               your app across different screen densities by mimicking a
               high-density screen environment using a low-density screen, and vice
               versa.
               | Example:
               | ``am display-density 480``
         - 

            - ``to-uri intent``
            - Print the given intent specification as a URI.
               See the `Specification for intent arguments <#IntentSpec>`__.
         - 

            - ``to-intent-uri intent``
            - Print the given intent specification as an ``intent:`` URI.
               See the `Specification for intent arguments <#IntentSpec>`__.

      .. rubric:: Specification for intent arguments
         :name: IntentSpec

      For activity manager commands that take an ``intent`` argument, you can
      specify the intent with the following options:

      .. container:: section expandable
         :name: IntentSpec

         Show all

         ``-a action``
            Specify the intent action, such as ``android.intent.action.VIEW``. You
            can declare this only once.
         ``-d data_uri``
            Specify the intent data URI, such as ``content://contacts/people/1``.
            You can declare this only once.
         ``-t mime_type``
            Specify the intent MIME type, such as ``image/png``. You can declare
            this only once.
         ``-c category``
            Specify an intent category, such as
            ``android.intent.category.APP_CONTACTS``.
         ``-n component``
            Specify the component name with package name prefix to create an
            explicit intent, such as ``com.example.app/.ExampleActivity``.
         ``-f flags``
            Add flags to the intent, as supported by
            `setFlags() <#setFlags(int)>`__.
         ``--esn extra_key``
            Add a null extra. This option is not supported for URI intents.
         ``-e | --es extra_key \ extra_string_value``
            Add string data as a key-value pair.
         ``--ez extra_key \ extra_boolean_value``
            Add boolean data as a key-value pair.
         ``--ei extra_key \ extra_int_value``
            Add integer data as a key-value pair.
         ``--el extra_key \ extra_long_value``
            Add long data as a key-value pair.
         ``--ef extra_key \ extra_float_value``
            Add float data as a key-value pair.
         ``--eu extra_key \ extra_uri_value``
            Add URI data as a key-value pair.
         ``--ecn extra_key \ extra_component_name_value``
            Add a component name, which is converted and passed as a
            `ComponentName <#>`__
            object.
         ``--eia extra_key \ extra_int_value [, extra_int_value ...]``
            Add an array of integers.
         ``--ela extra_key \ extra_long_value [, extra_long_value ...]``
            Add an array of longs.
         ``--efa extra_key \ extra_float_value [, extra_float_value ...]``
            Add an array of floats.
         ``--grant-read-uri-permission``
            Include the flag
            `FLAG_GRANT_READ_URI_PERMISSION <#FLAG_GRANT_READ_URI_PERMISSION>`__.
         ``--grant-write-uri-permission``
            Include the flag
            `FLAG_GRANT_WRITE_URI_PERMISSION <#FLAG_GRANT_WRITE_URI_PERMISSION>`__.
         ``--debug-log-resolution``
            Include the flag
            `FLAG_DEBUG_LOG_RESOLUTION <#FLAG_DEBUG_LOG_RESOLUTION>`__.
         ``--exclude-stopped-packages``
            Include the flag
            `FLAG_EXCLUDE_STOPPED_PACKAGES <#FLAG_EXCLUDE_STOPPED_PACKAGES>`__.
         ``--include-stopped-packages``
            Include the flag
            `FLAG_INCLUDE_STOPPED_PACKAGES <#FLAG_INCLUDE_STOPPED_PACKAGES>`__.
         ``--activity-brought-to-front``
            Include the flag
            `FLAG_ACTIVITY_BROUGHT_TO_FRONT <#FLAG_ACTIVITY_BROUGHT_TO_FRONT>`__.
         ``--activity-clear-top``
            Include the flag
            `FLAG_ACTIVITY_CLEAR_TOP <#FLAG_ACTIVITY_CLEAR_TOP>`__.
         ``--activity-clear-when-task-reset``
            Include the flag
            `FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET <#FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET>`__.
         ``--activity-exclude-from-recents``
            Include the flag
            `FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS <#FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS>`__.
         ``--activity-launched-from-history``
            Include the flag
            `FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY <#FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY>`__.
         ``--activity-multiple-task``
            Include the flag
            `FLAG_ACTIVITY_MULTIPLE_TASK <#FLAG_ACTIVITY_MULTIPLE_TASK>`__.
         ``--activity-no-animation``
            Include the flag
            `FLAG_ACTIVITY_NO_ANIMATION <#FLAG_ACTIVITY_NO_ANIMATION>`__.
         ``--activity-no-history``
            Include the flag
            `FLAG_ACTIVITY_NO_HISTORY <#FLAG_ACTIVITY_NO_HISTORY>`__.
         ``--activity-no-user-action``
            Include the flag
            `FLAG_ACTIVITY_NO_USER_ACTION <#FLAG_ACTIVITY_NO_USER_ACTION>`__.
         ``--activity-previous-is-top``
            Include the flag
            `FLAG_ACTIVITY_PREVIOUS_IS_TOP <#FLAG_ACTIVITY_PREVIOUS_IS_TOP>`__.
         ``--activity-reorder-to-front``
            Include the flag
            `FLAG_ACTIVITY_REORDER_TO_FRONT <#FLAG_ACTIVITY_REORDER_TO_FRONT>`__.
         ``--activity-reset-task-if-needed``
            Include the flag
            `FLAG_ACTIVITY_RESET_TASK_IF_NEEDED <#FLAG_ACTIVITY_RESET_TASK_IF_NEEDED>`__.
         ``--activity-single-top``
            Include the flag
            `FLAG_ACTIVITY_SINGLE_TOP <#FLAG_ACTIVITY_SINGLE_TOP>`__.
         ``--activity-clear-task``
            Include the flag
            `FLAG_ACTIVITY_CLEAR_TASK <#FLAG_ACTIVITY_CLEAR_TASK>`__.
         ``--activity-task-on-home``
            Include the flag
            `FLAG_ACTIVITY_TASK_ON_HOME <#FLAG_ACTIVITY_TASK_ON_HOME>`__.
         ``--receiver-registered-only``
            Include the flag
            `FLAG_RECEIVER_REGISTERED_ONLY <#FLAG_RECEIVER_REGISTERED_ONLY>`__.
         ``--receiver-replace-pending``
            Include the flag
            `FLAG_RECEIVER_REPLACE_PENDING <#FLAG_RECEIVER_REPLACE_PENDING>`__.
         ``--selector``
            Requires the use of ``-d`` and ``-t`` options to set the intent data
            and type.
         ``URI \ component \ package``
            You can directly specify a URI, package name, and component name when
            not qualified by one of the preceding options. When an argument is
            unqualified, the tool assumes the argument is a URI if it contains a
            ":" (colon). The tools assumes the argument is a component name if it
            contains a "/" (forward-slash); otherwise it assumes the argument is a
            package name.

      .. rubric:: Call package manager (``pm``)
         :name: pm

      Within an ``adb`` shell, you can issue commands with the package manager
      (``pm``) tool to perform actions and queries on app packages installed on the
      device.

      While in a shell, the ``pm`` syntax is:

      .. code:: none

         pm command

      You can also issue a package manager command directly from ``adb`` without
      entering a remote shell. For example:

      .. code:: none

         adb shell pm uninstall com.example.MyApp

      **Table 2.** Available package manager commands

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Command
            - Description
         - 

            - ``list packages [ options ] filter``
            - Print all packages, optionally only those whose package name contains
               the text in ``filter``.
               Options:

               -  ``-f``: See associated file.
               -  ``-d``: Filter to only show disabled packages.
               -  ``-e``: Filter to only show enabled packages.
               -  ``-s``: Filter to only show system packages.
               -  ``-3``: Filter to only show third-party packages.
               -  ``-i``: See the installer for the packages.
               -  ``-u``: Include uninstalled packages.
               -  ``--user user_id``: The user space to query.
         - 

            - ``list permission-groups``
            - Print all known permission groups.
         - 

            - ``list permissions [ options ] group``
            - Print all known permissions, optionally only those in ``group``.
               Options:

               -  ``-g``: Organize by group.
               -  ``-f``: Print all information.
               -  ``-s``: Short summary.
               -  ``-d``: Only list dangerous permissions.
               -  ``-u``: List only the permissions users will see.
         - 

            - ``list instrumentation [ options ]``
            - List all test packages.
               Options:

               -  ``-f``: List the APK file for the test package.
               -  ``target_package``: List test packages for only this app.
         - 

            - ``list features``
            - Print all features of the system.
         - 

            - ``list libraries``
            - Print all the libraries supported by the current device.
         - 

            - ``list users``
            - Print all users on the system.
         - 

            - ``path package``
            - Print the path to the APK of the given ``package``.
         - 

            - ``install [ options ] path``
            - Install a package, specified by ``path``, to the system.
               Options:

               -  ``-r``: Reinstall an existing app, keeping its data.

               -  ``-t``: Allow test APKs to be installed. Gradle generates a test
                  APK when you have only run or debugged your app or have used the
                  Android Studio **Build > Build APK** command. If the APK is built
                  using a developer preview SDK, you must include the `-t option <#-t-option>`__ with the
                  ``install`` command if you are installing a test APK.

               -  ``-i installer_package_name``: Specify the installer package
                  name.

               -  ``--install-location location``: Set the install location
                  using one of the following values:

                  -  ``0``: Use the default install location.
                  -  ``1``: Install on internal device storage.
                  -  ``2``: Install on external media.

               -  ``-f``: Install package on the internal system memory.

               -  ``-d``: Allow version code downgrade.

               -  ``-g``: Grant all permissions listed in the app manifest.

               -  ``--fastdeploy``: Quickly update an installed package by only
                  updating the parts of the APK that changed.

               -  ``--incremental``: Installs enough of the APK to launch the app
                  while streaming the remaining data in the background. To use this
                  feature, you must sign the APK, create an `APK Signature Scheme v4 file <#v4-signing-enabled>`__,
                  and place this file in the same directory as the APK. This
                  feature is only supported on certain devices. This option forces
                  ``adb`` to use the feature or fail if it is not supported, with
                  verbose information on why it failed. Append the ``--wait``
                  option to wait until the APK is fully installed before granting
                  access to the APK.

                  ``--no-incremental`` prevents ``adb`` from using this feature.
         - 

            - ``uninstall [ options ] package``
            - Removes a package from the system.
               Options:

               -  ``-k``: Keep the data and cache directories after package
                  removal.
               -  ``--user user_id``: Specifies the user for whom the package
                  is removed.
               -  ``--versionCode version_code``: Only uninstalls if the app
                  has the given version code.
         - 

            - ``clear package``
            - Delete all data associated with a package.
         - 

            - ``enable package_or_component``
            - Enable the given package or component (written as "package/class").
         - 

            - ``disable package_or_component``
            - Disable the given package or component (written as "package/class").
         - 

            - ``disable-user [ options ] package_or_component``
            - Options:

               -  ``--user user_id``: The user to disable.
         - 

            - ``grant package_name \ permission``
            - Grant a permission to an app. On devices running Android 6.0 (API
               level 23) and higher, the permission can be any permission declared
               in the app manifest. On devices running Android 5.1 (API level 22)
               and lower, must be an optional permission defined by the app.
         - 

            - ``revoke package_name \ permission``
            - Revoke a permission from an app. On devices running Android 6.0 (API
               level 23) and higher, the permission can be any permission declared
               in the app manifest. On devices running Android 5.1 (API level 22)
               and lower, must be an optional permission defined by the app.
         - 

            - ``set-install-location location``
            - Change the default install location. Location values:

               -  ``0``: Auto: Let system decide the best location.
               -  ``1``: Internal: Install on internal device storage.
               -  ``2``: External: Install on external media.

               **Note:** This is only intended for debugging. Using this can cause
               apps to break and other undesireable behavior.
         - 

            - ``get-install-location``
            - Returns the current install location. Return values:

               -  ``0 [auto]``: Let system decide the best location
               -  ``1 [internal]``: Install on internal device storage
               -  ``2 [external]``: Install on external media
         - 

            - ``set-permission-enforced permission [true | false]``
            - Specify whether the given permission should be enforced.
         - 

            - ``trim-caches desired_free_space``
            - Trim cache files to reach the given free space.
         - 

            - ``create-user user_name``
            - Create a new user with the given ``user_name``, printing the new user
               identifier of the user.
         - 

            - ``remove-user user_id``
            - Remove the user with the given ``user_id``, deleting all data
               associated with that user
         - 

            - ``get-max-users``
            - Print the maximum number of users supported by the device.
         - 

            - ``get-app-links [ options ] [ package ]``
            - Print the domain verification state for the given ``package``, or for
               all packages if none is specified. State codes are defined as
               follows:

               -  ``none``: nothing has been recorded for this domain
               -  ``verified``: the domain has been successfully verified
               -  ``approved``: force-approved, usually through shell
               -  ``denied``: force-denied, usually through shell
               -  ``migrated``: preserved verification from a legacy response
               -  ``restored``: preserved verification from a user data restore
               -  ``legacy_failure``: rejected by a legacy verifier, unknown reason
               -  ``system_configured``: automatically approved by the device
                  config
               -  ``>= 1024``: custom error code, which is specific to the device
                  verifier

               Options are:

               -  ``--user user_id``: include user selections. Include all
                  domains, not just autoVerify ones.
         - 

            - ``reset-app-links [ options ] [ package ]``
            - Reset domain verification state for the given package, or for all
               packages if none is specified.

               -  ``package``: the package to reset, or "all" to reset all packages

               Options are:

               -  ``--user user_id``: include user selections. Include all
                  domains, not just autoVerify ones.
         - 

            - ``verify-app-links [ --re-verify ] [ package ]``
            - Broadcast a verification request for the given ``package``, or for
               all packages if none is specified. Only sends if the package has
               previously not recorded a response.

               -  ``--re-verify``: send even if the package has recorded a response
         - 

            - ``set-app-links [--package package ] state \ domains``
            - Manually set the state of a domain for a package. The domain must be
               declared by the package as autoVerify for this to work. This command
               will not report a failure for domains that could not be applied.

               -  ``--package package``: the package to set, or "all" to set
                  all packages
               -  ``state``: the code to set the domains to. Valid values are:

                  -  ``STATE_NO_RESPONSE (0)``: reset as if no response was ever
                     recorded.
                  -  ``STATE_SUCCESS (1)``: treat domain as successfully verified
                     by domain verification agent. Note that the domain
                     verification agent can override this.
                  -  ``STATE_APPROVED (2)``: treat domain as always approved,
                     preventing the domain verification agent from changing it.
                  -  ``STATE_DENIED (3)``: treat domain as always denied,
                     preventing the domain verification agent from changing it.

               -  ``domains``: space-separated list of domains to change, or "all"
                  to change every domain.
         - 

            - ``set-app-links-user-selection --user user_id [--package package ] enabled \ domains``
            - Manually set the state of a host user selection for a package. The
               domain must be declared by the package for this to work. This
               command will not report a failure for domains that could not be
               applied.

               -  ``--user user_id``: the user to change selections for
               -  ``--package package``: the package to set
               -  ``enabled``: whether to approve the domain
               -  ``domains``: space-separated list of domains to change, or "all"
                  to change every domain
         - 

            - ``set-app-links-user-selection --user user_id [--package package ] enabled \ domains``
            - Manually set the state of a host user selection for a package. The
               domain must be declared by the package for this to work. This
               command will not report a failure for domains that could not be
               applied.

               -  ``--user user_id``: the user to change selections for
               -  ``--package package``: the package to set
               -  ``enabled``: whether to approve the domain
               -  ``domains``: space-separated list of domains to change, or "all"
                  to change every domain
         - 

            - ``set-app-links-allowed --user user_id [--package package ] allowed``
            - Toggle the auto-verified link-handling setting for a package.

               -  ``--user user_id``: the user to change selections for
               -  ``--package package``: the package to set, or "all" to set
                  all packages; packages will be reset if no package is specified
               -  ``allowed``: true to allow the package to open auto-verified
                  links, false to disable
         - 

            - ``get-app-link-owners --user user_id [--package package ] domains``
            - Print the owners for a specific domain for a given user in low- to
               high-priority order.

               -  ``--user user_id``: the user to query for
               -  ``--package package``: optionally also print for all web
                  domains declared by a package, or "all" to print all packages
               -  ``domains``: space-separated list of domains to query for

      .. rubric:: Call device policy manager (``dpm``)
         :name: dpm

      To help you develop and test your device management apps, issue commands to
      the device policy manager (``dpm``) tool. Use the tool to control the active
      admin app or change a policy's status data on the device.

      While in a shell, the ``dpm``\ syntax is:

      .. code:: none

         dpm command

      You can also issue a device policy manager command directly from ``adb``
      without entering a remote shell:

      .. code:: none

         adb shell dpm command

      **Table 3.** Available device policy manager commands

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Command
            - Description
         - 

            - ``set-active-admin [ options ] component``
            - Sets ``component`` as active admin.
               Options are:

               -  ``--user user_id``: Specify the target user. You can also
                  pass ``--user current`` to select the current user.
         - 

            - ``set-profile-owner [ options ] component``
            - Set ``component`` as active admin and its package as profile owner
               for an existing user.
               Options are:

               -  ``--user user_id``: Specify the target user. You can also
                  pass ``--user current`` to select the current user.
               -  ``--name name``: Specify the human-readable organization
                  name.
         - 

            - ``set-device-owner [ options ] component``
            - Set ``component`` as active admin and its package as device owner.
               Options are:

               -  ``--user user_id``: Specify the target user. You can also
                  pass ``--user current`` to select the current user.
               -  ``--name name``: Specify the human-readable organization
                  name.
         - 

            - ``remove-active-admin [ options ] component``
            - Disable an active admin. The app must declare
               `android:testOnly <#testOnly>`__
               in the manifest. This command also removes device and profile
               owners.
               Options are:

               -  ``--user user_id``: Specify the target user. You can also
                  pass ``--user current`` to select the current user.
         - 

            - ``clear-freeze-period-record``
            - Clear the device's record of previously set freeze periods for system
               OTA updates. This is useful to avoid the device scheduling
               restrictions when developing apps that manage freeze periods. See
               `Manage system updates <#development_and_testing>`__.
               Supported on devices running Android 9.0 (API level 28) and higher.
         - 

            - ``force-network-logs``
            - Force the system to make any existing network logs ready for
               retrieval by a DPC. If there are connection or DNS logs available,
               the DPC receives the
               `onNetworkLogsAvailable() <#onNetworkLogsAvailable(android.content.Context,%20android.content.Intent,%20long,%20int)>`__
               callback. 
               See `Network activity logging <#development_and_testing>`__.
               This command is rate-limited. Supported on devices running Android
               9.0 (API level 28) and higher.
         - 

            - ``force-security-logs``
            - Force the system to make any existing security logs available to the
               DPC. If there are logs available, the DPC receives the
               `onSecurityLogsAvailable() <#onSecurityLogsAvailable(android.content.Context,%20android.content.Intent)>`__
               callback. 
               See `Log enterprise device activity <#log_enterprise_device_activity>`__.
               This command is rate-limited. Supported on devices running Android
               9.0 (API level 28) and higher.

      .. rubric:: Take a screenshot
         :name: screencap

      The ``screencap`` command is a shell utility for taking a screenshot of a
      device display.

      While in a shell, the ``screencap`` syntax is:

      .. code:: none

         screencap filename

      To use ``screencap`` from the command line, enter the following:

      .. code:: none

         adb shell screencap /sdcard/screen.png

      Here's an example screenshot session, using the ``adb`` shell to capture the
      screenshot and the ``pull`` command to download the file from the device:

      .. code:: none

         $ adb shell
         shell@ $ screencap /sdcard/screen.png
         shell@ $ exit
         $ adb pull /sdcard/screen.png

      .. rubric:: Record a video
         :name: screenrecord

      The ``screenrecord`` command is a shell utility for recording the display of
      devices running Android 4.4 (API level 19) and higher. The utility records
      screen activity to an MPEG-4 file. You can use this file to create
      promotional or training videos or for debugging and testing.

      In a shell, use the following syntax:

      .. code:: none

         screenrecord [options] filename

      To use ``screenrecord`` from the command line, enter the following:

      .. code:: none

         adb shell screenrecord /sdcard/demo.mp4

      Stop the screen recording by pressing Control+C. Otherwise, the recording
      stops automatically at three minutes or the time limit set by
      ``--time-limit``.

      To begin recording your device screen, run the ``screenrecord`` command to
      record the video. Then, run the ``pull`` command to download the video from
      the device to the host computer. Here's an example recording session:

      .. code:: none

         $ adb shell
         shell@ $ screenrecord --verbose /sdcard/demo.mp4
         (press Control + C to stop)
         shell@ $ exit
         $ adb pull /sdcard/demo.mp4

      The ``screenrecord`` utility can record at any supported resolution and bit
      rate you request, while retaining the aspect ratio of the device display. The
      utility records at the native display resolution and orientation by default,
      with a maximum length of three minutes.

      Limitations of the ``screenrecord`` utility:

      -  Audio is not recorded with the video file.
      -  Video recording is not available for devices running Wear OS.
      -  Some devices might not be able to record at their native display
         resolution. If you encounter problems with screen recording, try using a
         lower screen resolution.
      -  Rotation of the screen during recording is not supported. If the screen
         does rotate during recording, some of the screen is cut off in the
         recording.

      **Table 4.** ``screenrecord`` options

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Options
            - Description
         - 

            - ``--help``
            - Display command syntax and options
         - 

            - ``--size width x height``
            - Set the video size: ``1280x720``. The default value is the device's
               native display resolution (if supported), 1280x720 if not. For best
               results, use a size supported by your device's Advanced Video Coding
               (AVC) encoder.
         - 

            - ``--bit-rate rate``
            - Set the video bit rate for the video, in megabits per second. The
               default value is 4Mbps. You can increase the bit rate to improve
               video quality, but doing so results in larger movie files. The
               following example sets the recording bit rate to 6Mbps:
               .. code:: none

                  screenrecord --bit-rate 6000000 /sdcard/demo.mp4
         - 

            - ``--time-limit time``
            - Set the maximum recording time, in seconds. The default and maximum
               value is 180 (3 minutes).
         - 

            - ``--rotate``
            - Rotate the output 90 degrees. This feature is experimental.
         - 

            - ``--verbose``
            - Display log information on the command-line screen. If you do not set
               this option, the utility does not display any information while
               running.

      .. rubric:: Read ART profiles for apps
         :name: appprofiles

      Starting in Android 7.0 (API level 24), the Android Runtime (ART) collects
      execution profiles for installed apps, which are used to optimize app
      performance. Examine the collected profiles to understand which methods are
      executed frequently and which classes are used during app startup.

      **Note:** It is only possible to retrieve the execution profile filename if
      you have root access to the file system, for example, on an emulator.

      To produce a text form of the profile information, use the following command:

      .. code:: none

         adb shell cmd package dump-profiles package

      To retrieve the file produced, use:

      .. code:: none

         adb pull /data/misc/profman/package.prof.txt

      .. rubric:: Reset test devices
         :name: test_harness

      If you test your app across multiple test devices, it may be useful to reset
      your device between tests, for example, to remove user data and reset the
      test environment. You can perform a factory reset of a test device running
      Android 10 (API level 29) or higher using the ``testharness`` ``adb`` shell
      command, as shown:

      .. code:: none

         adb shell cmd testharness enable

      When restoring the device using ``testharness``, the device automatically
      backs up the RSA key that allows debugging through the current workstation in
      a persistent location. That is, after the device is reset, the workstation
      can continue to debug and issue ``adb`` commands to the device without
      manually registering a new key.

      Additionally, to help make it easier and more secure to keep testing your
      app, using the ``testharness`` to restore a device also changes the following
      device settings:

      -  The device sets up certain system settings so that initial device setup
         wizards do not appear. That is, the device enters a state from which you
         can quickly install, debug, and test your app.
      -  Settings:

         -  Disables lock screen.
         -  Disables emergency alerts.
         -  Disables auto-sync for accounts.
         -  Disables automatic system updates.

      -  Other:

         -  Disables preinstalled security apps.

      If your app needs to detect and adapt to the default settings of the
      ``testharness`` command, use the
      `ActivityManager.isRunningInUserTestHarness() <#isRunningInUserTestHarness()>`__.

      .. rubric:: sqlite
         :name: sqlite

      ``sqlite3`` starts the ``sqlite`` command-line program for examining SQLite
      databases. It includes commands such as ``.dump`` to print the contents of a
      table and ``.schema`` to print the ``SQL CREATE`` statement for an existing
      table. You can also execute SQLite commands from the command line, as shown:

      .. code:: none

         $ adb -s emulator-5554 shell
         $ sqlite3 /data/data/com.example.app/databases/rssitems.db
         SQLite version 3.3.12
         Enter ".help" for instructions

      **Note:** It is only possible to access a SQLite database if you have root
      access to the file system, for example, on an emulator.

      For more information, see the `sqlite3 command line documentation <http://www.sqlite.org/cli.html>`__.

      .. rubric:: adb USB backends
         :name: backends

      The adb server can interact with the USB stack through two backends. It can
      either use the native backend of the OS (Windows, Linux, or macOS) or it can
      use the ``libusb`` backend. Some features, such as ``attach``, ``detach``,
      and USB speed detection, are only available when using ``libusb`` backend.

      You can choose a backend by using the ``ADB_LIBUSB`` environment variable. If
      it isn't set, adb uses its default backend. The default behavior varies among
      OS. Starting with API level 34, the native backend is used by default. If
      ``ADB_LIBUSB`` is set, it determines whether the native backend or ``libusb``
      is used. See the `adb manual page <https://android.googlesource.com/platform/packages/modules/adb/+/refs/heads/master/docs/user/adb.1.md>`__
      for more information about adb environment variables.

      **Experimental:** Support for using the ``libusb`` backend with Windows is
      experimental. As of API level 34, only the macOS and Linux platforms have
      been tested with the ``libusb`` library.
      .. rubric:: adb mDNS backends
         :name: mdnsBackends

      ADB can use the multicast DNS protocol to automatically connect the server
      and devices. The ADB server ships with two backends, Bonjour (Apple's
      mdnsResponder) and Openscreen.

      The Bonjour backend needs a daemon to be running on the host machine. On
      macOS Apple's built-in daemon is always running, but on Windows and Linux,
      the user must make sure the ``mdnsd`` daemon is up and running. If the
      command ``adb mdns check`` returns an error, it is likely that ADB is using
      the Bonjour backend but there is no Bonjour daemon running.

      The Openscreen backend does not need a daemon to be running on the machine.
      Support for the Openscreen backend on macOS starts at ADB v35. Windows and
      Linux are supported as of ADB v34.

      By default ADB uses the Bonjour backend. This behavior can be changed using
      the environment variable ``ADB_MDNS_OPENSCREEN`` (set to ``1`` or ``0``). See
      the `ADB manual page <https://android.googlesource.com/platform/packages/modules/adb/+/refs/heads/master/docs/user/adb.1.md>`__
      for further details.

   Last updated 2024-02-09 UTC.


   .. |Run configurations dropdown menu| image:: https://developer.android.google.cn/static/studio/images/run/adb_wifi-pair_device.png
      :class: screenshot
   .. |Screenshot of the pair devices over Wi-Fi popup window| image:: https://developer.android.google.cn/static/studio/images/run/adb_wifi-qr_code_scan.png
      :class: screenshot
   .. |Screenshot of a pixel phone showing the Wireless debugging systems setting.| image:: https://developer.android.google.cn/static/studio/images/run/adb_wifi-wireless_debugging.png
      :class: screenshot
   .. |Screenshot of example pin code entry| image:: https://developer.android.google.cn/static/studio/images/run/adb_wifi-pin_code_entry.png
      :class: screenshot
   .. |Screenshot of Quick settings developer tiles from a Google Pixel phone.| image:: https://developer.android.google.cn/static/studio/images/run/adb_wifi-quick_settings.png
      :class: screenshot
   .. |Screenshot of pairing on the command line.| image:: https://developer.android.google.cn/static/studio/images/run/adb_wifi-cmd_line_pairing.png
      :class: screenshot

/apkanalyzer
============

   https://developer.android.google.cn/tools/apkanalyzer?hl=en 

   .. container:: devsite-article-body clearfix

      The command-line version of APK Analyzer provides immediate insight into the
      composition of your APK after the build process completes and lets you
      compare differences between two APKs. Using APK Analyzer reduces the time you
      spend debugging issues with DEX files and resources within your app and
      reduces the size of your APK.

      ``apkanalyzer`` is included in the `Android SDK Command-Line Tools <#tools-sdk>`__ package at
      ``android_sdk /cmdline-tools/ version /bin/apkanalyzer``.
      Alternatively, you can access the APK Analyzer tool within Android Studio as
      described in `Analyze your build with APK Analyzer <#>`__.

      .. rubric:: Syntax
         :name: syntax

      The syntax for ``apkanalyzer`` is:

      .. code:: none

         apkanalyzer [global-options] subject verb [options] apk-file [apk-file2]

      The ``subject`` is what you want to query and can be the entire APK or a part
      of the APK. A subject can be any of the following:

      -  ``apk``: Analyze APK file attributes such as application ID, version code,
         and version name.
      -  ``files``: Analyze the files inside the APK file.
      -  ``manifest``: Analyze the contents of the manifest inside the APK file.
      -  ``dex``: Analyze the DEX files inside the APK file.
      -  ``resources``: View text, image, and string resources.

      The ``verb`` is what you want to know about the subject. The subjects, verbs,
      and their options are described in the following section about
      `commands <#commands>`__.

      Every command requires that you specify an APK file. Only the ``apk compare``
      command requires that you specify a second APK.

      You can shorten every option as long as the option is unambiguous. For
      example, the ``--human-readable`` global option can be shortened to ``-h``.

      The following example analyzes the ``apk`` (subject) to get its ``file-size``
      (verb), and then prints the file size in a human-readable format (``-h``
      option):

      .. code:: none

         apkanalyzer -h apk file-size myapk.apk

      .. rubric:: Commands
         :name: commands

      The following command descriptions are organized by subject and list the
      available verb and option combinations for each subject:


   .. list-table::
      :widths: 20
      :header-rows: 1

      -

         -  View APK file attributes
         -  Description
      -

         -  apk summary apk-file``
         -
            Prints the application ID, version code, and version name.

            Example output:

            .. code:: none

               com.myapp 5 1.1-beta
      -

         -  ``apk file-size apk-file``
         -  Prints the total file size of the APK.

      -

         -  ``apk download-size apk-file``
         -  Prints an estimate of the download size of the APK.

      -

         -  ``apk features [--not-required] apk-file``
         -
            Prints features used by the APK that trigger `Play Store filtering <#manifest-filters>`__ . Add the
            ``--not-required`` option to include features marked as not required in the
            output.

            Example output:

            .. code:: none

               android.hardware.type.watch
               android.hardware.microphone implied:
                   requested android.permission.RECORD_AUDIO permission

      -

         -  ``apk compare [ options ] apk-file \ apk-file2``
         - 
            Compares the sizes of ``apk-file`` and ``apk-file2``. You can include the
            following options:

            -  ``--different-only``: Prints directories and files with differences.
            -  ``--files-only``: Does not print directory entries.
            -  ``--patch-size``: Shows an estimate of the file-by-file patch instead of a
               raw difference.

            Example output (old size / new size / size difference / path):

            .. code:: none

               39086736 48855615 9768879 /
               10678448 11039232 360784 /classes.dex
               18968956 18968956 0 /lib/
               110576 110100 -476 /AndroidManifest.xml
               ...


   .. list-table::
      :widths: 20
      :header-rows: 1

      -

         -  View the APK file system
         -  Description
      -

         -  files list apk-file``
         -
            Lists all files in the APK.

            Example output::

            |   /
            |   /classes2.dex
            |   /classes.dex
            |   /assets/
            |   /assets/asset.data
            |   /AndroidManifest.xml
            |   /resources.arsc
            |   /res/
            |   ...

      -

         -  ``files cat --file path \ apk-file``
         -
            Prints out the file contents. You must specify a path inside the APK using the
            ``--file path`` option, such as ``--file /AndroidManifest.xml``


   ====================================   ===================================
   View information in the manifest       Description
   ====================================   ===================================
   ``manifest print apk-file``            Prints the APK manifest in XML format.
   ``manifest application-id apk-file``   Prints the application ID value.
   ``manifest version-name apk-file``     Prints the version name value.
   ``manifest version-code apk-file``     Prints the version code value.
   ``manifest min-sdk apk-file``          Prints the minimum SDK version.
   ``manifest target-sdk apk-file``       Prints the target SDK version.
   ``manifest permissions apk-file``      Prints the list of permissions.
   ``manifest debuggable apk-file``       Prints whether the app is debuggable.
   ====================================   ===================================


   .. list-table::
      :widths: 20
      :header-rows: 1

      -

         -  Access DEX file information
         -  Description

      -

         -  ``dex list apk-file``                  Prints a list of the DEX files in the APK.
         -
      -

         -  ``dex references [--files path ] [--files path2 ] apk-file``
         -
            Prints the number of method references in the specified DEX files. The default
            is all DEX files. Add the ``--files`` option to indicate specific files that you
            want to include.

            Example output:

            .. code:: none

               classes.dex 59598
               classes2.dex 8042

      -

         -  ``dex packages [ option1 option2 ... ] apk-file``
         -
            Prints the class tree from DEX. In the output, ``P``, ``C``, ``M``, and ``F``
            indicate packages, classes, methods, and fields, respectively. And ``x``, ``k``,
            ``r``, and ``d`` indicate removed, kept, referenced and defined nodes,
            respectively.

            Add the following options to refine the output:

            -  ``--defined-only``: Includes only classes defined in the APK in the output.
            -  ``--files``: Specifies the DEX file names to include. Default: all DEX files.
            -  ``--proguard-folder file``: Specifies the Proguard output folder to
               search for mappings.
            -  ``--proguard-mappings file``: Specifies the Proguard mappings file.
            -  ``--proguard-seeds file``: Specifies the Proguard seeds file.
            -  ``--proguard-usages file``: Specifies the Proguard usages file.
            -  ``--show-removed``: Shows classes and members that were removed by Proguard.

            Example output (type/state/defined methods/referenced methods /byte size/name):

            .. code:: none

               P d 1 1 85 g
               P d 1 1 85 g.a
               C d 1 1 85 g.a.a
               M d 1 1 45 g.a.a java.lang.Object get()
               C r 0 1 40 byte[]
               M r 0 1 40 byte[] java.lang.Object clone()

      -

         -  ``dex code --class class [--method method ]``
         -
            Prints the bytecode of a class or method in smali format. The class name is
            required and prints the fully qualified class name to decompile. Add the
            ``--method`` option to specify the method to decompile.

            The format for the method decompile is ``name(params)returnType``, for example,
            ``someMethod(Ljava/lang/String;I)V``.



   .. list-table::
      :widths: 20
      :header-rows: 1

      -

         -  View resources stored in res/ and resources.arsc
         -  Description

      -

         -  ``resources packages``
         -
            Prints a list of the packages that are defined in the resources table.

      -

         -  ``resources configs --type type [--package package ] apk-file``
         -
            Prints a list of configurations for the specified ``type``. The ``type`` is a
            resource type such as ``string``. Include the ``--package`` option if you want
            to specify the resource table package name, otherwise the first defined package
            will be used.

      -

         -  ``resources value --config config --name name --type type [--package package ] apk-file``
         -
            Prints the value of the resource specified by ``config``, ``name``, and
            ``type``. The ``type`` option is the type of the resource, such as ``string``.

            Include the ``--package`` option if you want to specify the resource table
            package name, otherwise the first defined package will be used.

      -

         -  ``resources names --config config --type type [--package package ] apk-file``
         -
            Prints a list of resource names for a configuration and type. The ``type``
            option is the type of the resource, such as ``string``. Include the
            ``--package`` option if you want to specify the resource table package name,
            otherwise the first defined package will be used.

      -

         -  ``resources xml --file path \ apk-file``
         -
            Prints the human-readable form of a binary XML file. Include the ``file`` option
            to specify the path to the file.

   Last updated 2023-04-12 UTC.


/apksigner
==========

   https://developer.android.google.cn/tools/apksigner?hl=en 

   .. container:: devsite-article-body clearfix

      The ``apksigner`` tool, available in revision 24.0.3 and higher of the
      Android SDK Build Tools, lets you sign APKs and confirm that an APK's
      signature will be verified successfully on all versions of the Android
      platform supported by that APK.

      This page presents a short guide for using the tool and serves as a reference
      for the different command-line options that the tool supports. For a more
      complete description of how the ``apksigner`` tool is used for signing your
      APKs, 
      see `Sign your app <#>`__.

      **Caution:** If you sign your APK using ``apksigner`` and make further
      changes to the APK, the APK's signature is invalidated. If you use
      `zipalign <#>`__ to align your APK, use it
      before signing the APK.

      .. rubric:: Usage
         :name: usage

      .. rubric:: Sign an APK
         :name: usage-sign

      The syntax for signing an APK using the ``apksigner`` tool is as follows:

      .. code:: none

         apksigner sign --ks keystore.jks |
           --key key.pk8 --cert cert.x509.pem
           [signer_options] app-name.apk

      When you sign an APK using the ``apksigner`` tool, you must provide the
      signer's private key and certificate. You can include this information in two
      ways:

      -  Specify a KeyStore file using the ``--ks`` option.
      -  Specify the private key file and certificate file separately using the
         ``--key`` and ``--cert`` options, respectively. The private key file must
         use the PKCS #8 format, and the certificate file must use the X.509
         format.

      Usually, you sign an APK using only one signer. If you need to sign an APK
      using multiple signers, use the ``--next-signer`` option to separate the set
      of `general options <#options-sign-general>`__ to apply to each signer:

      .. code:: none

         apksigner sign [signer_1_options] --next-signer [signer_2_options] app-name.apk

      .. rubric:: Verify the signature of an APK
         :name: usage-verify

      The syntax for confirming the successful verification of an APK's signature
      on supported platforms is as follows:

      .. code:: none

         apksigner verify [options] app-name.apk

      .. rubric:: Rotate signing keys
         :name: usage-rotate

      The syntax for rotating a *signing certificate lineage*, or a new sequence of
      signatures, is as follows:

      .. code:: none

         $ apksigner rotate --in /path/to/existing/lineage \
           --out /path/to/new/file \
           --old-signer --ks old-signer-jks \
           --new-signer --ks new-signer-jks

      .. rubric:: Options
         :name: options

      The following lists include the set of options for each command that the
      ``apksigner`` tool supports.

      .. rubric:: Sign command
         :name: options-sign

      The ``apksigner`` sign command has the following options.

      .. rubric:: General options
         :name: options-sign-general

      The following options specify basic settings to apply to a signer:

      ``--out <apk-filename>``
         The location where you'd like to save the signed APK. If this option isn't
         provided explicitly, the APK package is signed in place, which overwrites
         the input APK file.
      ``--min-sdk-version <integer>``
         The lowest Android framework API level that ``apksigner`` uses to confirm
         that the APK's signature will be verified. Higher values allow the tool to
         use stronger security parameters when signing the app but limit the APK's
         availability to devices running more recent versions of Android. By
         default, ``apksigner`` uses the value of the ``minSdkVersion`` attribute
         from the app's manifest file.
      ``--max-sdk-version <integer>``
         The highest Android framework API level that ``apksigner`` uses to confirm
         that the APK's signature will be verified. By default, the tool uses the
         highest possible API level.
      ``--rotation-min-sdk-version <integer>``
         The lowest API level the APK's rotated signing key should use to produce
         the APK's signature. The original (unrotated) signing key for the APK will
         be used for all previous platform versions. By default, rotated signing
         keys, which are supported on devices that run Android 13 (API level 33) or
         higher, are used with the v3.1 signing block.
      ``--v1-signing-enabled <true | false>``
         Determines whether ``apksigner`` signs the given APK package using the
         traditional, JAR-based signing scheme. By default, the tool uses the
         values of ``--min-sdk-version`` and ``--max-sdk-version`` to decide when
         to apply this signature scheme.
      ``--v2-signing-enabled <true | false>``
         Determines whether ``apksigner`` signs the given APK package using the
         `APK Signature Scheme v2 <#apk_signature_v2>`__. By default,
         the tool uses the values of ``--min-sdk-version`` and
         ``--max-sdk-version`` to decide when to apply this signature scheme.
      ``--v3-signing-enabled <true | false>``
         Determines whether ``apksigner`` signs the given APK package using the
         `APK Signature Scheme v3 <https://source.android.google.cn/security/apksigning/v3>`__. By
         default, the tool uses the values of ``--min-sdk-version`` and
         ``--max-sdk-version`` to decide when to apply this signature scheme.
      ``--v4-signing-enabled <true | false | only>``
         Determines whether ``apksigner`` signs the given APK package using the
         `APK Signature Scheme v4 <#signature-scheme-v4>`__. This scheme
         produces a signature in a separate file (``apk-name .apk.idsig``). If
         ``true`` and the APK is not signed, then a v2 or v3 signature is generated
         based on the values of ``--min-sdk-version`` and ``--max-sdk-version``.
         The command then produces the ``.idsig`` file based on the content of the
         signed APK.

         Use ``only`` to generate only the v4 signature without modifying the APK
         and any signatures it had before the invocation. ``only`` fails if the APK
         doesn't have a v2 or v3 signature already or if the signature used a
         different key than the one provided for the current invocation.

         By default, the tool uses the values of ``--min-sdk-version`` and
         ``--max-sdk-version`` to decide when to apply this signature scheme.

      ``-v``, ``--verbose``
         Use the verbose output mode.

      .. rubric:: Per-signer options
         :name: options-sign-per-signer

      The following options specify the configuration of a particular signer. These
      options aren't necessary if you sign your app using only one signer.

      ``--next-signer <signer-options>``
         Used for specifying different general options for each signer.
      ``--v1-signer-name <basename>``
         The base name for the files that comprise the JAR-based signature for the
         current signer. By default, ``apksigner`` uses the key alias of the
         KeyStore or the basename of the key file for this signer.

      .. rubric:: Key and certificate options
         :name: options-sign-key-cert

      The following options specify the signer's private key and certificate:

      ``--ks <filename>``
         The signer's private key and certificate chain reside in the given
         Java-based KeyStore file. If the filename is set to ``"NONE"``, the
         KeyStore containing the key and certificate doesn't need a file specified,
         which is the case for some PKCS #11 KeyStores.
      ``--ks-key-alias <alias>``
         The name of the alias that represents the signer's private key and
         certificate data within the KeyStore. If the KeyStore associated with the
         signer contains multiple keys, you must specify this option.
      ``--ks-pass <input-format>``
         The password for the KeyStore that contains the signer's private key and
         certificate. You must provide a password to open a KeyStore. The
         ``apksigner`` tool supports the following formats:

         -  ``pass:<password>`` – Password provided inline with the rest of the
            ``apksigner sign`` command.
         -  ``env:<name>`` – Password is stored in the given environment variable.
         -  ``file:<filename>`` – Password is stored as a single line in the given
            file.
         -  ``stdin`` – Password is provided as a single line in the standard input
            stream. This is the default behavior for ``--ks-pass``.

         **Note:** If you include multiple passwords in the same file, specify them
         on separate lines. The ``apksigner`` tool associates passwords with an
         APK's signers based on the order in which you specify the signers. If
         you've provided two passwords for a signer, ``apksigner`` interprets the
         first password as the KeyStore password and the second one as the key
         password.

      ``--pass-encoding <charset>``
         Includes the specified character encodings, such as ``ibm437`` or
         ``utf-8``, when trying to handle passwords containing non-ASCII
         characters.

         Keytool often encrypts keystores by converting the password using the
         console's default charset. By default, ``apksigner`` tries to decrypt
         using several forms of the password:

         The Unicode form

         The form encoded using the JVM default charset

         On Java 8 and older, the form encoded using the console's default charset

         On Java 9, ``apksigner`` cannot detect the console's charset. You may need
         to specify ``--pass-encoding`` when a non-ASCII password is used. You may
         also need to specify this option with KeyStores that keytool created on a
         different OS or in a different locale.

      ``--key-pass <input-format>``
         The password for the signer's private key, which is needed if the private
         key is password protected. The ``apksigner`` tool supports the following
         formats:

         -  ``pass:<password>`` – Password is provided inline with the rest of the
            ``apksigner sign`` command.
         -  ``env:<name>`` – Password is stored in the given environment variable.
         -  ``file:<filename>`` – Password is stored as a single line in the given
            file.
         -  ``stdin`` – Password is provided as a single line in the standard input
            stream. This is the default behavior for ``--key-pass``.

      ``--ks-type <algorithm>``
         The type or algorithm associated with the KeyStore that contains the
         signer's private key and certificate. By default, ``apksigner`` uses the
         type defined as the ``keystore.type`` constant in the Security properties
         file.
      ``--ks-provider-name <name>``
         The name of the JCA Provider to use when requesting the signer's KeyStore
         implementation. By default, ``apksigner`` uses the highest-priority
         provider.
      ``--ks-provider-class <class-name>``
         The fully qualified class name of the JCA Provider to use when requesting
         the signer's KeyStore implementation. This option serves as an alternative
         for ``--ks-provider-name``. By default, ``apksigner`` uses the provider
         specified with the ``--ks-provider-name`` option.
      ``--ks-provider-arg <value>``
         A string value to pass in as the argument for the constructor of the JCA
         Provider class; the class itself is defined with the
         ``--ks-provider-class`` option. By default, ``apksigner`` uses the class's
         zero-argument constructor.
      ``--key <filename>``
         The name of the file that contains the signer's private key. This file
         must use the PKCS #8 DER format. If the key is password protected,
         ``apksigner`` prompts for the password using standard input unless you
         specify a different kind of input format using the ``--key-pass`` option.
      ``--cert <filename>``
         The name of the file that contains the signer's certificate chain. This
         file must use the X.509 PEM or DER format.

      .. rubric:: Verify command
         :name: options-verify

      The ``apksigner`` verify command has the following options.

      ``--print-certs``
         Show information about the APK's signing certificates.
      ``--min-sdk-version <integer>``
         The lowest Android framework API level that ``apksigner`` uses to confirm
         that the APK's signature will be verified. Higher values allow the tool to
         use stronger security parameters when signing the app but limit the APK's
         availability to devices running more recent versions of Android. By
         default, ``apksigner`` uses the value of the ``minSdkVersion`` attribute
         from the app's manifest file.
      ``--max-sdk-version <integer>``
         The highest Android framework API level that ``apksigner`` uses to confirm
         that the APK's signature will be verified. By default, the tool uses the
         highest possible API level.
      ``-v``, ``--verbose``
         Use the verbose output mode.
      ``-Werr``
         Treat warnings as errors.

      .. rubric:: Examples
         :name: examples

      The following are examples using ``apksigner``.

      .. rubric:: Sign an APK
         :name: examples-sign

      Sign an APK using ``release.jks``, which is the only key in the KeyStore:

      .. code:: none

         $ apksigner sign --ks release.jks app.apk

      Sign an APK using a private key and certificate stored as separate files:

      .. code:: none

         $ apksigner sign --key release.pk8 --cert release.x509.pem app.apk

      Sign an APK using two keys:

      .. code:: none

         $ apksigner sign --ks first-release-key.jks --next-signer --ks second-release-key.jks app.apk

      Sign an APK with a rotated signing key and the rotation targeting SDK version
      28+:

      .. code:: none

         $ apksigner sign --ks release.jks --next-signer --ks release2.jks \
           --lineage /path/to/signing/history/lineage app.apk \
           --rotation-min-sdk-version 28

      Sign an APK with a rotated signing key and the rotation targeting SDK version
      33+:

      .. code:: none

         $ apksigner sign --ks release.jks --next-signer --ks release2.jks \
           --lineage /path/to/signing/history/lineage app.apk

      .. rubric:: Verify the signature of an APK
         :name: examples-verify

      Check whether the APK's signatures are expected to be confirmed as valid on
      all Android platforms that the APK supports:

      .. code:: none

         $ apksigner verify app.apk

      Check whether the APK's signatures are expected to be confirmed as valid on
      Android 4.0.3 (API level 15) and higher:

      .. code:: none

         $ apksigner verify --min-sdk-version 15 app.apk

      .. rubric:: Rotate signing keys
         :name: rotate_signing_keys_2

      Enable a signing certificate lineage that supports key rotation:

      .. code:: none

         $ apksigner rotate --out /path/to/new/file --old-signer \
             --ks release.jks --new-signer --ks release2.jks

      Rotate your signing keys again:

      .. code:: none

         $ apksigner rotate --in /path/to/existing/lineage \
           --out /path/to/new/file --old-signer --ks release2.jks \
           --new-signer --ks release3.jks

   Last updated 2023-04-12 UTC.


/avdmanager
===========

   https://developer.android.google.cn/tools/avdmanager?hl=en 

   .. container:: devsite-article-body clearfix

      The ``avdmanager`` is a command-line tool that lets you create and manage
      Android Virtual Devices (AVDs) from the command line. An AVD lets you define
      the characteristics of an Android handset, Wear OS watch, or Android TV
      device that you want to simulate in the Android Emulator.

      If you're using Android Studio, then you don't need to use this tool and you
      can instead `create and manage AVDs from the IDE <#>`__.

      The ``avdmanager`` tool is included in the Android SDK Command-Line Tools
      package at
      ``android_sdk /cmdline-tools/ version /bin/avdmanager``.

      .. rubric:: Syntax
         :name: syntax

      To use ``avdmanager``, use the following syntax:

      .. code:: none

         avdmanager [global options] command [command options]

      .. rubric:: Global options
         :name: global_options

      **Table 1.** List of global options for avdmanager.

      .. list-table::
         :header-rows: 1

         - 

            - Global option
            - Description
         - 

            - ``-s`` \| ``--silent``
            - Silent mode: only errors are printed out.
         - 

            - ``-h`` \| ``--help``
            - Usage help.
         - 

            - ``-v`` \| ``--verbose``
            - Verbose mode: errors, warnings, and informational messages are
               printed.
         - 

            - ``--clear cache``
            - Clear the SDK Manager repository manifest cache.

      .. rubric:: Commands and command options
         :name: commands_and_command_options

      **Table 2.** List of commands and options for avdmanager.

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Command and options
            - Description
         - 

            - ``create avd -n name -k " sdk_id " [-c { path | size }] [-f] [-p path ]``
            - Create a new AVD. You must provide a ``name`` for the AVD and specify
               the ID of the SDK package to use for the AVD using ``sdk_id``
               wrapped in quotes. For example, the following command creates an AVD
               named ``test`` using the x86 system image for API level 25:

               .. code:: none

                  avdmanager create avd -n test -k "system-images;android-25;google_apis;x86"

               The following describes the usages for the other options:

               -  ``-c { path | size }``: The path to the SD
                  card image for this AVD or the size of a new SD card image to
                  create for this AVD in KB or MB, denoted with ``K`` or ``M``. For
                  example, ``-c path/to/sdcard/`` or ``-c 1000M``.
               -  ``-f``: Force creation of the AVD. Use this option if you need to
                  overwrite an existing AVD with a new AVD using the same name.
               -  ``-p path``: Path to the location where the directory for
                  this AVD's files will be created. If you don't specify a path,
                  the AVD is created in ``~/.android/avd/``.
         - 

            - ``delete avd -n name``
            - Delete an AVD. You must specify the AVD with ``name``.
         - 

            - ``move avd -n name [-p path ] [-r new-name ]``
            - Move or rename an AVD. You must specify the AVD with ``name``. The
               following describes the usages for the other options:

               -  ``-p path``: The absolute path to the location at which to
                  create the directory where this AVD's files will be moved. If you
                  don't include this argument, the AVD won't be moved. You might
                  choose not to include this argument if you want to rename the AVD
                  in place.
               -  ``-r new-name``: The new name of the AVD being renamed.
         - 

            - ``list [target|device|avd] [-c]``
            - List all available targets, device definitions, or AVDs. If you don't
               specify ``target``, ``device``, or ``avd``, ``avdmanager`` lists all
               three. Include the ``-c`` argument to receive a compact output
               suitable for scripts. The ``-c`` argument is not available when
               listing all three options together.

   Last updated 2023-04-12 UTC.


/bmgr
=====

   https://developer.android.google.cn/tools/bmgr?hl=en 

   .. container:: devsite-article-body clearfix

      ``bmgr`` is a shell tool you can use to interact with the Backup Manager on
      Android devices version 2.2 (API Level 8) or higher. The tool provides
      commands to initiate backup and restore operations so that you don't need to
      repeatedly wipe data or take similar intrusive steps in order to test your
      application's backup functionality. The ``bmgr`` tool supports both `Auto Backup <#>`__ and `Key/Value Backup <#>`__.

      Note: ``bmgr restore`` does not work for `encrypted backups <#define-device-conditions>`__.

      You run ``bmgr`` commands on a device via `adb shell <#>`__ and then monitor the output of the
      commands with `logcat <#>`__. For a list and
      description of available commands, run the ``bmgr`` tool with no arguments.
      For information on triggering backup and restore operations, 
      see `Testing Backup and Restore <#>`__.

      For information about adding support for backup in your application, read
      `Data Backup <#>`__

   Last updated 2023-04-12 UTC.


/bundletool
===========

   https://developer.android.google.cn/tools/bundletool?hl=en 

   .. container:: devsite-article-body clearfix

      ``bundletool`` is the underlying tool that Android Studio, the Android Gradle
      plugin, and Google Play use to build an Android App Bundle. ``bundletool``
      can convert an app bundle into the various APKs that are deployed to devices.

      Android SDK Bundles (ASBs) and their APKs are built with ``bundletool``. It
      is also available as a command-line tool, so you can build app bundles and
      SDK bundles yourself and re-create Google Play's server-side build of your
      app's APKs or your `runtime-enabled SDK's <#>`__ APKs.

      .. rubric:: Download ``bundletool``
         :name: download

      If you haven't already, download ``bundletool`` from the `GitHub repository <https://github.com/google/bundletool/releases>`__.

      .. rubric:: Build and test an app bundle
         :name: build-test-app-bundle

      You can use Android Studio or the ``bundletool`` command-line tool to build
      your Android App Bundle and then test generating APKs from this app bundle.

      .. rubric:: Build an app bundle
         :name: build_app_bundle

      Use Android Studio and the Android Gradle plugin to `build and sign an Android App Bundle <#sign-apk>`__. However, if
      using the IDE is not an option—for example, because you are using a
      continuous build server—you can also `build your app bundle from the command line <#build_bundle>`__ and sign it using
      `jarsigner <https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jarsigner.html>`__.

      **Note:**\  You can't use ``apksigner`` to sign your app bundle.
      For more information about building app bundles with ``bundletool``, see
      `Build an app bundle using bundletool <#bundletool-build>`__.

      .. rubric:: Generate a set of APKs from your app bundle
         :name: generate_apks

      After you build your Android App Bundle, test how Google Play uses it to
      generate APKs and how those APKs behave when deployed to a device.

      There are two ways you can test your app bundle:

      -  Use the ``bundletool`` command-line tool locally.
      -  `Upload your bundle to the Play Console <#>`__
         through Google Play by using a test track.

      This section explains how to use ``bundletool`` to test your app bundle
      locally.

      When ``bundletool`` generates APKs from your app bundle, it includes the
      generated APKs in a container called an *APK set archive*, which uses the
      ``.apks`` file extension. To generate an APK set for all device
      configurations your app supports from your app bundle, use the
      ``bundletool build-apks`` command, as shown:

      .. code:: none

         bundletool build-apks --bundle=/MyApp/my_app.aab --output=/MyApp/my_app.apks

      If you want to deploy the APKs to a device, you also need to include your
      app's signing information, as shown in the following command. If you don't
      specify signing information, ``bundletool`` attempts to sign your APKs with a
      debug key for you.

      .. code:: none

         bundletool build-apks --bundle=/MyApp/my_app.aab --output=/MyApp/my_app.apks
         --ks=/MyApp/keystore.jks
         --ks-pass=file:/MyApp/keystore.pwd
         --ks-key-alias=MyKeyAlias
         --key-pass=file:/MyApp/key.pwd

      The following table describes the various flags and options you can set when
      using the ``bundletool build-apks`` command in greater detail:

      **Table 1.** Options for the ``bundletool build-apks`` command

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Flag
            - Description
         - 

            - ``--bundle= path``
            - **(Required)** Specifies the path to the app bundle you built using
               Android Studio. To learn more, read `Build your project <#reference>`__.
         - 

            - ``--output= path``
            - **(Required)** Specifies the name of the output ``.apks`` file, which
               contains all the APK artifacts for your app. To test the artifacts
               in this file on a device, follow the steps in the section about how
               to `deploy APKs to a connected device <#deploy_with_bundletool>`__.
         - 

            - ``--overwrite``
            - Overwrites any existing output file with the path you specify using
               the ``--output`` option. If you don't include this flag and the
               output file already exists, you get a build error.
         - 

            - ``--aapt2= path``
            - Specifies a custom path to AAPT2. By default, ``bundletool`` includes
               its own version of AAPT2.
         - 

            - ``--ks= path``
            - (Optional) Specifies the path to the deployment keystore used to sign
               the APKs. If you don't include this flag, ``bundletool`` attempts to
               sign your APKs with a debug signing key.
         - 

            - ``--ks-pass=pass: password``
               or
               ``--ks-pass=file: /path/to/file``
            - Specifies your keystore password. If you specify a password in plain
               text, qualify it with ``pass:``. If you pass the path to a file that
               contains the password, qualify it with ``file:``. If you specify a
               keystore using the ``--ks`` flag without specifying ``--ks-pass``,
               ``bundletool`` prompts you for a password from the command line.
         - 

            - ``--ks-key-alias= alias``
            - Specifies the alias of the signing key you want to use.
         - 

            - ``--key-pass=pass: password``
               or
               ``--key-pass=file: /path/to/file``
            - Specifies the password for the signing key. If you specify a password
               in plain text, qualify it with ``pass:``. If you pass the path to a
               file that contains the password, qualify it with ``file:``.
               If this password is identical to the one for the keystore itself,
               you can omit this flag.
         - 

            - ``--connected-device``
            - Instructs ``bundletool`` to build APKs that target the configuration
               of a connected device. If you don't include this flag,
               ``bundletool`` generates APKs for all device configurations your app
               supports.
         - 

            - ``--device-id= serial-number``
            - If you have more than one connected device, use this flag to specify
               the serial ID of the device to which you want to deploy your app.
         - 

            - ``--device-spec= spec_json``
            - Provides a path to a ``.json`` file that specifies the device
               configuration you want to target. To learn more, go to the section
               about how to `Generate and use device specification JSON files <#generate_use_json>`__.
         - 

            - ``--mode=universal``
            - Sets the mode to ``universal``. Use this option if you want
               ``bundletool`` to build a single APK that includes all of your app's
               code and resources, so that the APK is compatible with all device
               configurations your app supports.
               **Note:** ``bundletool`` includes only feature modules that specify
               ``<dist:fusing dist:include="true"/>`` in their manifest in a
               universal APK. To learn more, read about the `feature module manifest <#dynamic_feature_manifest>`__.

               Keep in mind, these APKs are larger than those optimized for a
               particular device configuration. However, they're easier to share
               with internal testers who, for example, want to test your app on
               multiple device configurations.
         - 

            - ``--local-testing``
            - Enables your app bundle for local testing. Local testing allows for
               quick, iterative testing cycles without the need to upload to Google
               Play servers.
               For an example of how to test module installation using the
               ``--local-testing`` flag, 
               see `Locally test module installs <#>`__.

      .. rubric:: Deploy APKs to a connected device
         :name: deploy_with_bundletool

      After you generate a set of APKs, ``bundletool`` can deploy the right
      combination of APKs from that set to a connected device.

      For example, if you have a connected device running Android 5.0 (API level
      21) or higher, ``bundletool`` pushes the base APK, feature module APKs, and
      configuration APKs required to run your app on that device. Alternatively, if
      your connected device is running Android 4.4 (API level 20) or lower,
      ``bundletool`` searches for a compatible multi-APK to deploy to your device.

      To deploy your app from an APK set, use the ``install-apks`` command and
      specify the path of the APK set using the ``--apks= /path/to/apks``
      flag, as shown in the following command. If you have multiple devices
      connected, specify a target device by adding the
      ``--device-id= serial-id`` flag.

      .. code:: none

         bundletool install-apks --apks=/MyApp/my_app.apks

      **Note:**\  If you're using the ``--local-testing`` flag with the
      ``build-apks`` command, use ``install-apks`` to install your APKs to ensure
      that local testing works correctly.
      .. rubric:: Generate a device-specific set of APKs
         :name: device_specific_apks

      If you don't want to build a set of APKs for all device configurations your
      app supports, you can build APKs that target only the configuration of a
      connected device using the ``--connected-device`` option, as shown in the
      following command. If you have multiple devices connected, specify a target
      device by including the ``--device-id= serial-id`` flag.

      .. code:: none

         bundletool build-apks --connected-device
         --bundle=/MyApp/my_app.aab --output=/MyApp/my_app.apks

      .. rubric:: Generate and use device specification JSON files
         :name: generate_use_json

      ``bundletool`` can generate an APK set that targets a device configuration
      specified by a JSON file. To first generate a JSON file for a connected
      device, run the following command:

      .. code:: none

         bundletool get-device-spec --output=/tmp/device-spec.json

      ``bundletool`` creates a JSON file for your device in the tool's directory.
      You can then pass the file to ``bundletool`` to generate a set of APKs that
      target only the configuration described in that JSON file, as follows:

      .. code:: none

         bundletool build-apks --device-spec=/MyApp/pixel2.json
         --bundle=/MyApp/my_app.aab --output=/MyApp/my_app.apks

      .. rubric:: Manually create a device specification JSON
         :name: manually_create_json

      If you don't have access to the device for which you want to build a targeted
      APK set—for example, if you want to try your app with a device you don't have
      on hand—you can manually create a JSON file using the following format:

      .. code:: prettyprint

         {
           "supportedAbis": ["arm64-v8a", "armeabi-v7a"],
           "supportedLocales": ["en", "fr"],
           "screenDensity": 640,
           "sdkVersion": 27
         }

      You can then pass this JSON to the ``bundle extract-apks`` command, as
      described in the previous section.

      .. rubric:: Extract device-specific APKs from an existing APK set
         :name: extract_apks

      If you have an existing APK set and you want to extract from it a subset of
      APKs that target a specific device configuration, you can use the
      ``extract-apks`` command and specify a device specification JSON, as follows:

      .. code:: none

         bundletool extract-apks
         --apks=/MyApp/my_existing_APK_set.apks
         --output-dir=/MyApp/my_pixel2_APK_set.apks
         --device-spec=/MyApp/bundletool/pixel2.json

      .. rubric:: Measure the estimated download sizes of APKs in an APK set
         :name: measure_size

      To measure the estimated download sizes of APKs in an APK set as they would
      be served compressed over the wire, use the ``get-size total`` command:

      .. code:: none

         bundletool get-size total --apks=/MyApp/my_app.apks

      You can modify the behavior of the ``get-size total`` command using the
      following flags:

      **Table 2.** Options for the ``get-size total`` command

      .. list-table::
         :widths: 20
         :header-rows: 1

         - 

            - Flag
         - 

            - ``--apks= path``
         - 

            - ``--device-spec= path``
         - 

            - ``--dimensions= dimensions``
         - 

            - ``--instant``
         - 

            - ``--modules= modules``

      .. rubric:: Build an app bundle with an SDK bundle dependency (experimental)
         :name: build-app-bundle-with-sdk-bundle

      You can build your Android App Bundle with an Android SDK Bundle (ASB)
      dependency from the command line and sign it using
      `jarsigner <https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jarsigner.html>`__.

      **Note:**\  You can't use ``apksigner`` to sign your Android App Bundle with
      an ASB dependency.
      Each app bundle module includes a Module Protocol Buffer (``.pb``) file:
      ``runtime_enabled_sdk_config.pb``. This file contains the list of SDKs that
      an app bundle module depends on. For the full definition of this file, see
      the
      `runtime_enabled_sdk_config.proto <https://github.com/google/bundletool/blob/master/src/main/proto/runtime_enabled_sdk_config.proto>`__
      file.

      To build an app bundle with an SDK bundle dependency, follow the steps in the
      section about `building an app bundle using bundletool <#build_app_bundle>`__
      and add a ``runtime_enabled_sdk_config.pb`` file to each app module's zip
      file with compiled code and resources.

      Some notable fields in the ``runtime_enabled_sdk_config.pb`` file:

      -  **Certificate digest:** the SHA-256 digest of the certificate for the key
         used to sign the SDK's APKs. This corresponds to the certificate in the
         ``SdkMetadata.pb`` file in the `Android SDK Archive format <#asar-format>`__.

      -  **Resources Package ID:** the package ID that all resources in this SDK
         are remapped to when generating APKs for embedding the SDK into the app.
         This enables backward compatibility.

      An SDK can appear only in one module. If multiple modules depend on the same
      SDK, this dependency should be deduplicated and moved to the base module.
      Different modules can't depend on different versions of the SDK.

      .. rubric:: Generate APKs from an app bundle with an SDK bundle dependency
         (experimental)
         :name: generate-apks-app-bundle-with-sdk-bundle

      To generate APKs from your app bundle, follow the steps in the section about
      `generating a set of APKs from your app bundle <#generate_apks>`__ or the
      section about `generating a device-specific set of APKs <#device_specific_apks>`__ and provide the ``bundletool build-apks``
      command with the SDKs that the app depends on. These SDKs can be provided in
      SDK bundle format or SDK Archive format.

      You can provide the SDKs as SDK bundles by adding the ``--sdk-bundles`` flag,
      as follows:

      .. code:: devsite-terminal

         bundletool build-apks --bundle=app.aab --sdk-bundles=sdk1.asb,sdk2.asb \
             --output=app.apks

      You can provide the SDKs as SDK archives by adding the ``--sdk-archives``
      flag, as follows:

      .. code:: devsite-terminal

         bundletool build-apks --bundle=app.aab --sdk-archives=sdk1.asar,sdk2.asar \
             --output=app.apks

      .. rubric:: Generate APKs from an app bundle with an SDK bundle dependency
         for devices without SDK library support
         :name: generate-apks-sdk-backwards-compat

      Devices before Android 13 don't support installing SDK libraries or running
      them in the SDK runtime. Bundletool hides the backwards compatibility
      complexity and generates multiple variants of your APK set from the same app
      bundle when you run ``bundletool build-apks`` with the ``--sdk-bundles`` or
      ``--sdk-archives`` option. The multiple variants target devices with
      different capabilities:

      -  There's a variant for newer devices, where the SDK is installed as a
         separate package from the app and the app APKs don't include any SDK
         content.
      -  There are one or more variants for older devices, where the SDK APKs are
         added to the app APK set as additional APK splits. The SDK APKs belong to
         the app package. In this case, the SDK runtime is emulated in the app
         runtime on the device.

      Similar to how you generate APKs for app bundles without SDK dependencies,
      ``bundletool extract-apks`` and ``bundletool install-apks`` return a filtered
      set of APKs from the best variant for the connected device or for the
      provided device config.

      For advanced use cases where you are only interested in generating APK splits
      from an SDK archive for a specific app for older devices, use the
      ``bundletool build-sdk-apks-for-app`` command as follows:

      .. code:: devsite-terminal

         bundletool build-sdk-apks-for-app --app-properties=app-properties.json \
             --sdk-archive=sdk.asar --output=sdk.apks

      The ``app-properties`` file should contain the fields described in the
      `runtime_enabled_sdk_config.proto <https://github.com/google/bundletool/blob/master/src/main/proto/runtime_enabled_sdk_config.proto>`__
      file. This is what the ``app-properties`` file looks like:

      .. code:: prettyprint

         {
           "package_name": "com.my.app",
           "version_code": 1234,
           "min_sdk_version": 21,
           "resources_package_id": 0x7e
         }

      The ``bundletool build-sdk-apks-for-app`` command generates the subset of app
      APKs that corresponds to the SDK content under the app package name. You can
      combine these APKs with other APKs containing the app content. For instance,
      if you build them separately and incrementally, and installed together on a
      device that doesn't support the SDK runtime.

      .. rubric:: Build and test an SDK bundle (experimental)
         :name: build-test-sdk-bundle

      You can use ``bundletool`` to build an ASB and test generating the files
      needed for installation and distribution.

      .. rubric:: Build an SDK bundle
         :name: build-sdk-bundle

      You can build your ASB from the command line and sign it using
      `jarsigner <https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jarsigner.html>`__.

      **Note:**\  You can't use ``apksigner`` to sign your SDK bundle.
      To build an SDK bundle, follow these steps:

      #. `Generate the SDK bundle's manifest and resources in proto format <#generate_the_manifest_and_resources_in_proto_format>`__
         by following the same steps as for an app bundle.

      #. `Package your SDK's compiled code and resources into a base zip file <#package_pre-compiled_code_and_resources>`__,
         as you would with an app module.

      #. Generate an ``SdkModulesConfig.pb.json`` file and an
         ``SdkBundleConfig.pb.json`` file, matching the format described in the
         `Android SDK Bundle specification <#asb-format>`__.

      #. Build your ASB using the ``bundletool build-sdk-bundle`` command, as
         follows:

      .. code:: devsite-terminal

         bundletool build-sdk-bundle --sdk-bundle-config=SdkBundleConfig.pb.json \
             --sdk-modules-config=SdkModulesConfig.pb.json \
             --modules=base.zip --output=sdk.asb

      The following table describes the various flags and options you can set when
      using the ``bundletool build-sdk-bundle`` command in greater detail.

      **Table 3.** Options for the ``bundletool build-sdk-bundle`` command

      .. list-table::
         :header-rows: 1

         - 

            - Flag
            - Description
         - 

            - ``--modules``
            - **(Required)** The module file that you want to build the final ASB
               from.
         - 

            - ``--output``
            - **(Required)** The path to where you want the ASB to be built.
         - 

            - ``--sdk-modules-config``
            - **(Required)** The path to a JSON file that describes the
               configuration of the SDK modules. To learn how to format the JSON
               file, see the `Android SDK Bundle specification <#asb-format>`__
               section.
         - 

            - ``--sdk-bundle-config``
            - The path to a JSON file that describes the configuration of the SDK
               bundle. To learn how to format the JSON file, see the `Android SDK Bundle specification <#asb-format>`__ section.
         - 

            - ``--metadata-file``
            - The file to include metadata in for the ASB. The format of the flag
               value is ``<bundle-path>:<physical-file>``, where ``<bundle-path>``
               denotes the file location inside the SDK bundle's metadata directory
               and ``<physical-file>`` is an existing file that contains the raw
               data to be stored. The flag can be repeated.
         - 

            - ``--overwrite``
            - If set, this option overwrites any previous existing output.

      .. rubric:: Generate APKs from an SDK bundle
         :name: generate-apks-from-sdk-bundle

      After you build your ASB, you can test an SDK bundle locally by generating
      its APKs using the ``bundletool build-sdk-apks`` command, as shown in the
      following code:

      .. code:: devsite-terminal

         bundletool build-sdk-apks --sdk-bundle=sdk.asb --output=sdk.apks

      When ``bundletool`` generates APKs from your SDK bundle, the tool includes
      the APKS in a container called an *APK set archive*, which uses the ``.apks``
      file extension. ``bundletool`` generates a single standalone APK from the SDK
      bundle that targets all device configurations.

      If you want to deploy the ASB to a device, you need to also include your
      app's signing information, as shown in the following command:

      .. code:: devsite-terminal

         bundletool build-sdk-apks --sdk-bundle=sdk.asb --output=sdk.apks \
             --ks=keystore.jks \
             --ks-pass=file:/keystore.pwd \
             --ks-key-alias=KeyAlias \
             --key-pass=file:/key.pwd

      **Note:**\  If you don't specify signing information, ``bundletool`` attempts
      to sign your APKs with a debug key for you.
      The following table describes the various flags and options you can set when
      using the ``bundletool build-sdk-apks`` command in greater detail.

      **Table 4.** Options for the ``bundletool build-sdk-apks`` command

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Flag
            - Description
         - 

            - ``--sdk-bundle``
            - **(Required)** The path to the SDK bundle. Must have the extension
               ``.asb``.
         - 

            - ``--output``
            - **(Required)** By default, the path where you want the APK set
               archive to be created. Alternatively, if you use
               ``--output-format=DIRECTORY``, this is the path to the directory
               where you want generated APKs to be stored.
         - 

            - ``--ks``
            - The path to the keystore that you want to use to sign the generated
               APKs.
         - 

            - ``--ks-key-alias``
            - The alias of the key to use in the keystore to sign the generated
               APKs.
         - 

            - ``--key-pass``
            - The password of the key in the keystore to use to sign the generated
               APKs.

               If you pass the password in clear text, you must prefix the value
               with ``pass:``. For example, ``pass:qwerty``. If the password is the
               first line of a file, you must prefix the value with ``file:``. For
               example, ``file:/tmp/myPassword.txt``.

               If this flag isn't set, the keystore password is tried. If that
               fails, the command-line terminal prompts you for a password.
         - 

            - ``--ks-pass``
            - The password of the keystore to use to sign the generated APKs.

               If you pass the password in clear text, you must prefix the value
               with ``pass:``. For example, ``pass:qwerty``. If the password is the
               first line of a file, you must prefix the value with ``file:``. For
               example ``file:/tmp/myPassword.txt``.

               If this flag isn't set, the command-line terminal prompts you for a
               password.
         - 

            - ``--aapt2``
            - The path to the AAPT2 binary to use.
         - 

            - ``--output-format``
            - The output format for generated APKs. By default, this option is set
               to ``APK_SET``, which outputs APKs into the APK set archive that is
               created. If set to ``DIRECTORY``, it outputs APKs into the directory
               specified by ``--output``.
         - 

            - ``--verbose``
            - If set, this option prints extra information about the command
               execution in the standard output.
         - 

            - ``--version-code``
            - The SDK version code. This is the version code used by the Android
               platform to install the APK, not the SDK version. This option can be
               set to an arbitrary value. If not set, it defaults to 0.
         - 

            - ``--overwrite``
            - If set, this option overwrites any previous existing output.

      .. rubric:: Deploy, extract, and measure the size of SDK APKs
         :name: deploy-extract-get-size-sdk

      You can follow the same steps used for apps to `deploy APKs to a connected device <#deploy_with_bundletool>`__, `extract device-specific APKs from an existing APK set <#extract_apks>`__, and `measure the estimated download sizes of APKs in an APK set <#measure_size>`__.

      .. rubric:: Generate an SDK Archive from an SDK bundle
         :name: generate-sdk-archive-from-sdk-bundle

      After you upload your ASB to your distribution channel, for example Google
      Play, the ASB is transformed into an Android SDK Archive (``.asar``) for
      distribution to app developers through Maven. For more details about the
      format, see the section about `SDK Archive format specification <#asar-format>`__.

      After you build your ASB, you can test the generation of an Android SDK
      Archive locally using the ``bundletool build-sdk-asar`` command, as shown in
      the following code:

      .. code:: devsite-terminal

         bundletool build-sdk-asar --sdk-bundle=sdk.asb --output=sdk.asar \
             --apk-signing-key-certificate=keycert.txt

      The following table describes the various flags and options you can set when
      using the ``bundletool build-sdk-asar`` command in greater detail.

      **Table 5.** Options for the ``bundletool build-sdk-asar`` command

      .. list-table::
         :header-rows: 1

         - 

            - Flag
            - Description
         - 

            - ``--apk-signing-key-certificate``
            - **(Required)** The path to the SDK APK signing certificate. This is
               the certificate corresponding to the key that you used to sign the
               APKs in the ``build-sdk-apks`` command.
         - 

            - ``--output``
            - **(Required)** The path where you want the ``.asar`` file to be
               created.
         - 

            - ``--sdk-bundle``
            - **(Required)** The path to the SDK bundle. Must have the extension
               ``.asb``.
         - 

            - ``--overwrite``
            - If set, this option overwrites any previous existing output.

      .. rubric:: Runtime-enabled SDK formats (experimental)
         :name: runtime-enabled-sdk-formats

      Runtime-enabled SDKs introduce two Android file formats:

      -  The `Android SDK Bundle <#asb-format>`__ (``.asb``), used to publish the
         runtime-enabled SDK to app stores.
      -  The `Android SDK Archive <#asar-format>`__ (``.asar``), used to distribute
         the runtime-enabled SDK on Maven.

      .. rubric:: The Android SDK Bundle format
         :name: asb-format

      An SDK Bundle is a publishing format for runtime-enabled SDKs. It contains
      all the SDK code and resources, including the code from any libraries the SDK
      depends on. It doesn't include the code and resources of other
      runtime-enabled SDKs that the SDK depends on.

      **Note:**\  This format is not installable as-is. It defers the generation of
      the APKs and signing to Google Play or other distribution channels.
      An Android SDK Bundle (ASB) is a signed zip file with the extension ``.asb``.
      The SDK code and resources are organized in it similarly to what you would
      find in an APK. An ASB also contains several configuration files that help
      generate the installable APKs.

      .. figure:: https://developer.android.google.cn/static/studio/images/command-line/asb-format.png
         name: asb-format
         :width: 60.0%

         **Figure 1.** The contents of an Android SDK Bundle.

      The following list describes some of the ASB files in more detail:

      -  ``SdkBundleConfig.pb``: A configuration file in proto format, containing
         the list of runtime-enabled SDKs that your SDK depends on. For the full
         definition, see the
         `sdk_bundle_config.proto <https://github.com/google/bundletool/blob/master/src/main/proto/sdk_bundle_config.proto>`__
         file.

      -  ``modules.resm``: A zip file containing all the data needed to generate
         the APKs from the SDK.

      -  ``SdkModulesConfig.pb``: A configuration file in proto format. This file
         contains the SDK name, version, and class name of the SDK entry point for
         the framework
         (`SandboxedSdkProvider <#>`__).
         For the full definition, see the
         `sdk_modules_config.proto <https://github.com/google/bundletool/blob/master/src/main/proto/sdk_modules_config.proto>`__
         file.

      -  ``base/``: The single module containing the SDK code and resources.

         -  ``manifest/``: The manifest of the SDK in proto format.
         -  ``dex/``: The compiled code in DEX format. Multiple DEX files can be
            provided.
         -  ``res/``, ``lib/``, ``assets/``: These directories are identical to
            those in a typical APK. Paths in these directories are preserved when
            generating the SDK's APKs.
         -  ``root/``: This directory stores files that are later relocated to the
            root of the SDK APKs. For example, it might include Java-based
            resources that your SDK loads using the
            `Class.getResource() <#getResource(java.lang.String)>`__
            method. Paths within this directory are also preserved.

      -  ``BUNDLE-METADATA``: This directory includes metadata files that contain
         information useful for tools or app stores. Such metadata files might
         include ProGuard mappings and the complete list of your SDK's DEX files.
         Files in this directory are not packaged into your SDK's APKs.

      .. rubric:: The Android SDK Archive format
         :name: asar-format

      An Android SDK Archive is the distribution format of a runtime-enabled SDK on
      Maven. It's a zip file with the file extension ``.asar``. The file contains
      all information that is needed by the app build tools to generate an Android
      App Bundle that depends on your runtime-enabled SDK.

      .. figure:: https://developer.android.google.cn/static/studio/images/command-line/asar-format.png
         name: asar-format
         :width: 60.0%

         **Figure 2.** The contents of an Android SDK Archive Bundle.

      The following list describes some of the Android SDK Archive files in more
      detail:

      -  ``SdkMetadata.pb``: A configuration file in proto format containing the
         SDK name, version, and the certificate digest for the key used to sign the
         APKs generated for this SDK. For the full definition, see the
         `sdk_metadata.proto <https://github.com/google/bundletool/blob/master/src/main/proto/sdk_metadata.proto>`__
         file.

      -  ``modules.resm``: A zip file containing all the data needed to generate
         the APKs from the SDK. This is the same as the ``.resm`` file in the
         `Android SDK Bundle <#asb-format>`__.

      -  ``AndroidManifest.xml``: The manifest file of the SDK in text XML format.

      .. rubric:: Additional resources
         :name: additional_resources

      To learn more about using ``bundletool``, watch `App Bundles: Testing bundles with bundletool and the Play Console <https://www.youtube.com/watch?v=vAEAZPU7w-I>`__.

   Last updated 2024-04-11 UTC.


/d8
===

   https://developer.android.google.cn/tools/d8?hl=en 

   .. container:: devsite-article-body clearfix

      ``d8`` is a command-line tool that Android Studio and the Android Gradle
      plugin use to compile your project's Java bytecode into DEX bytecode that
      runs on Android devices. ``d8`` lets you use Java 8 language features in your
      app's code.

      ``d8`` is also included as a standalone tool in Android Build Tools 28.0.1
      and higher: ``android_sdk /build-tools/ version /``.

      .. rubric:: General usage
         :name: general_usage

      ``d8`` requires only a path to the compiled Java bytecode that you want to
      convert into DEX bytecode. For example:

      .. code:: none

         d8 MyProject/app/build/intermediates/classes/debug/*/*.class

      The input bytecode can be in any combination of ``*.class`` files or
      containers, such as JAR, APK, or ZIP files. You can also include DEX files
      for ``d8`` to merge into the DEX output, which is useful when including
      output from an incremental build.

      By default, ``d8`` compiles the Java bytecode into optimized DEX files and
      includes debug information that you can use to debug your code during
      runtime. However, you can include optional flags to perform an incremental
      build, specify classes that should be compiled into the main DEX file, and
      specify paths to additional resources required to use Java 8 language
      features.

      .. code:: none

         d8 path-to-input-files [options]

      The following table describes the optional flags you can use with ``d8``:

      .. list-table::
         :widths: 20
         :header-rows: 1

         -
            -  Option
            -  Description
        
         -
            -  ``--debug``
            -
               Compile DEX bytecode to include debug information, such as debug symbol
               tables.

               This option is enabled by default. To include debug information in your
               DEX bytecode, ``d8`` expects that the input Java bytecode
               includes that information. For example, if you're using ``javac``
               to compile your code, you need to pass the ``-g`` flag to include
               debug information in the output Java bytecode.

               When compiling DEX files for the release version of your app or
               library, instead use the ``--release`` flag.

           
         -
            -  ``--release``
            -
               Compile DEX bytecode without debug information. However,
               ``d8`` includes some information that's used when generating
               stacktraces and logging exceptions.

               Pass this flag when compiling bytecode for a public release.
           
         -
            -  ``--output path``
            -
               Specify the desired path for the DEX output. By default,
               ``d8`` outputs the DEX file(s) in the current working
               directory.
               
               If you specify a path and name of a ZIP or JAR file, ``d8``
               creates the specified file and includes the output DEX files. If you
               specify the path to an existing directory, ``d8`` outputs the
               DEX files in that directory.
           
         -
            -  ``--lib android_sdk/platforms/api-level/android.jar``
            -
               Specify the path to the ``android.<wbr>jar`` of your Android SDK.
               This flag is required when `compiling bytecode <#j8>`__ that uses
               Java 8 language features</a>.
           
         -
            -  ``--classpath path``
            -
               Specify classpath resources that ``d8`` may require to compile
               your project's DEX files. In particular, ``d8`` requires that you
               specify certain resources when `compiling bytecode <#j8>`__ that uses
               Java 8 language features.
           
         -
            -  ``--min-api number``
            -
               Specify the minimum API level you want the output DEX files to support.
           
         -
            -  ``--intermediate``
            -
               Pass this flag to let ``d8`` know that you are not compiling the
               complete set of your project's Java bytecode. This flag is useful when
               performing incremental builds. Rather than compiling optimized DEX files
               that you expect to run on a device, ``d8`` creates intermediate
               DEX files and stores them in the specified output or default path.
               
               When you want to compile DEX files that you intend to run on a device,
               exclude this flag and specify the path to the intermediate DEX classes
               as an input.
           
         -
            -  ``--file-per-class``
            -
               Compile each class into separate DEX files.

               
               Enabling this flag lets you perform more incremental builds by
               re-compiling only the classes that have changed. When performing
               incremental builds using the Android Gradle plugin, this optimization is
               enabled by default.

               You can't use this flag while also specifying ``--main-dex-list``.
           
         -
            -  ``--no-desugaring``
            -
               Disable Java 8 language features. Use this flag only if you don't intend
               to compile Java bytecode that uses Java 8 language features.
           
         -
            -  ``--main-dex-list path``
            -
               Specify a text file that lists classes ``d8`` should include
               in the main DEX file, which is typically named ``classes.dex``.
               When you don't specify a list of classes using this flag,
               ``d8`` does not guarantee which classes are included in the main
               DEX file.

               Because the Android system loads the main DEX file first when starting
               your app, you can use this flag to prioritize certain classes at startup
               by compiling them into the main DEX file. This is particularly useful
               when supporting legacy multidex, because only classes in the main DEX
               file are available at runtime until the legacy multidex library is
               loaded.

               Keep in mind, the each DEX file must still satisfy the
               `the 64K reference limit <#>`__. So, don't
               specify too many classes for the main DEX file, or you get a
               compile error. By default, when specifying classes using
               ``--main-dex-list``, ``d8`` includes only those
               classes in the main DEX file. This is to make issues related to classes
               missing from main DEX file easier to debug. If you specify
               ``--release`` mode, ``d8`` tries to reduce the number
               of DEX files that are packaged into the release version of your app by
               including as many other classes in the main DEX file as possible until
               the 64K limit is met.
               

               You can't use this flag while also specifying ``--file-per-class``.
           
         -
            -  ``--pg-map file``
            -
               Use _file_ as a mapping file for distribution.
           
         -
            -  ``--file-per-class-file``
            -
               Produce a separate DEX file per input .class file.

               Keep synthetic classes with their originating class.

         -
            -  ``--desugared-lib file``
            -
               Specify a desugared library configuration.

               _file_ is a desugared library configuration file in JSON
               format.
           
         -
            -  ``--main-dex-rules file``
            -
               Proguard keep rules for classes to place in the
               primary DEX file.
           
         -
            -  ``--main-dex-list-output file``
            -
               Output resulting main DEX list in <val>file</val>.
           
         -
            -  ``--force-enable-assertions [:class_or_package_name...]``
               ``--force-ea [:class_or_package_name...]``
            -
                Forcefully enable ``javac``-generated assertion code.
           
         -
            -  ``--force-disable-assertions [:class_or_package_name...]``
               ``--force-da [:class_or_package_name...]``
            -
                Forcefully disable ``javac``-generated assertion code. This
                is the default handling of ``javac`` assertion code when
                generating DEX files.
           
         -
            -  ``--force-passthrough-assertions [:class_or_package_name...]``
               ``--force-pa [:class_or_package_name...]``
            -
                Don't change the ``javac``-generated assertion code. This
                is the default handling of ``javac`` assertion code when
                generating ``class`` files.
           
         -
            -  ``--force-assertions-handler:handler method``
               ``--force-ah:handler method [:class_or_package_name...]``

            -
               Change ``javac``- and ``kotlinc``-generated assertion
               code to invoke the method _handler method_ with each assertion
               error instead of throwing it. The _handler method_ is specified
               as a class name followed by a dot and the method name. The
               handler method must take a single argument of type
               ``java.<wbr>lang.<wbr>Throwable`` and have return type ``void``.
           
         -
            -  ``--thread-count number of threads``
            -
               Specify the number of threads to use for compilation. If not specified,
               the number is based on heuristics, taking the number
               of cores into account.
           
         -
            -  ``--map--diagnostics[ :type] from-level to-level``
            -
               Map diagnostics of _type_ (default any) reported as
               _from-level_ to _to-level_, where _from-level_
               and _to-level_ are one of 'info', 'warning', or 'error' and the
               optional _type_ is either the simple or fully qualified
               Java type name of a diagnostic. If _type_ is unspecified,
               all diagnostics at _from-level_ are mapped.
               Note that fatal compiler errors can't be mapped.
            
         -
            -  ``--version``
            -  Print the version of ``d8`` that you're currently using.
           
         -
            -  ``--help``
            -  Print help text for using ``d8``.


      .. rubric:: Perform incremental builds
         :name: incremental

      To improve build speeds during development, such as for continuous
      integration builds, instruct ``d8`` to compile only a subset of your
      project's Java bytecode. For example, if you enable per-class dexing, you can
      re-compile only the classes that you have modified since the previous build.

      **Note:**\  ``d8`` is unable to detect which bytecode files have been
      modified automatically. You need to specify the list of classes yourself.
      The following command performs an incremental build of a few classes and
      enables per-class dexing. The command also specifies an output directory for
      the incremental build.

      .. code:: none

         d8 MainActivity.class R.class --intermediate --file-per-class --output ~/build/intermediate/dex

      When ``d8`` performs an incremental build, it stores additional information
      in the DEX output. ``d8`` later uses that information to correctly process
      the ``--main-dex-list`` option and merge DEX files during a full build of
      your app.

      For example, when processing Java 8 lambda classes, ``d8`` keeps track of
      which lambda classes are created for each input class. During a full build,
      when ``d8`` includes a class in the main DEX file, it consults the metadata
      to ensure all of the lambda classes created for that class are also included
      in the main DEX file.

      If you have already compiled all of your project's bytecode into DEX files
      across multiple incremental builds, perform a full build by passing the
      directory of intermediate DEX files to ``d8``, as shown in the following
      command. Additionally, you can specify the classes you want ``d8`` to compile
      into the main DEX file using ``--main-dex-list``. Because the input is a set
      of files that are already compiled into DEX bytecode, this build should
      complete faster than a clean build.

      .. code:: none

         d8 ~/build/intermediate/dex --release --main-dex-list ~/build/classes.txt --output ~/build/release/dex

      .. rubric:: Compile bytecode that uses Java 8 language features
         :name: j8

      ``d8`` enables you to `use Java 8 language features <#>`__ in your code through a compile
      process called *desugaring*. Desugaring converts these useful language
      features into bytecode that can run on the Android platform.

      Android Studio and the Android Gradle plugin include classpath resources that
      ``d8`` requires to enable desugaring for you. However, when using ``d8`` from
      the command line, you need to include them yourself.

      One such resource is the ``android.jar`` from your target Android SDK. This
      resource includes a set of Android platform APIs. Specify its path using the
      ``--lib`` flag.

      Another resource is the set of Java bytecode compiled into your project that
      you are currently not compiling into DEX bytecode but require to compile
      other classes into DEX bytecode.

      For example, if your code uses `default and static interface methods <https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html>`__,
      which are a Java 8 language feature, you need to use this flag to specify the
      path to all of your project's Java bytecode, even if you don't intend to
      compile all of the bytecode into DEX bytecode. That's because ``d8`` requires
      this information to understand your project's code and resolve calls to the
      interface methods.

      The following code sample performs an incremental build of a class that
      accesses a default interface method:

      .. code:: none

         d8 MainActivity.class --intermediate --file-per-class --output ~/build/intermediate/dex
         --lib android_sdk/platforms/api-level/android.jar
         --classpath ~/build/javac/debug

   Last updated 2023-12-15 UTC.


/dmtracedump
============

   https://developer.android.google.cn/tools/dmtracedump?hl=en 

   .. container:: devsite-article-body clearfix

      ``dmtracedump`` is a tool that generates graphical call-stack diagrams from
      trace log files. The tool uses the Graphviz Dot utility to create the
      graphical output, so you need to install Graphviz before running
      ``dmtracedump``. If you haven't yet generated trace logs and saved them from
      your connected device to your local machine, go to `Generate trace logs by instrumenting your app <#>`__.

      The ``dmtracedump`` tool generates the call stack data as a tree diagram,
      where each node represents a method call. It shows call flow (from parent
      node to child nodes) using arrows. The diagram below shows a sample output of
      ``dmtracedump``.

      The ``dmtracedump`` tool is provided in the Android SDK Tools package and is
      located in ``android-sdk /platform-tools/``.

      .. rubric:: Syntax
         :name: syntax

      The usage for dmtracedump is:

      .. code:: none

         dmtracedump [-ho] [-s sortable] [-d trace-base-name] [-g outfile] trace-base-name

      The tool then loads trace log data from ``trace-base-name .data`` and
      ``trace-base-name .key``.

      .. rubric:: Global options
         :name: global_options

      .. list-table::
         :header-rows: 1

         - 

            - Global options
            - Description
         - 

            - ``-h``
            - Turn on HTML output
         - 

            - ``-o``
            - Dump the trace file instead of profiling

      .. rubric:: Commands and command options
         :name: command_options

      .. list-table::
         :header-rows: 1

         - 

            - Commands and options
            - Description
         - 

            - ``-d  trace-base-name``
            - Diff with this trace name
         - 

            - ``-g  outfile``
            - Generate output to ``outfile``
         - 

            - ``-s  sortable``
            - URL base to the location of the sortable javascript file
         - 

            - ``-t  percent``
            - Minimum threshold for including child nodes in the graph (child's
               inclusive time as a percentage of parent inclusive time). If this
               option is not used, the default threshold is 20%.

      .. rubric:: Output
         :name: output


      .. image:: https://developer.android.google.cn/static/images/tracedump.png
         :class: screenshot
         :width: 485px
         :height: 401px

      **Figure 1.** Screenshot of dmtracedump

      For each node in the graph, ``dmtracedump`` shows the following information:

      .. code:: none

         ref callname (inc-ms, exc-ms,numcalls)

      -  ``ref`` — Call reference number, as used in trace logs
      -  ``inc-ms`` — Inclusive elapsed time (milliseconds spent in method,
         including all child methods)
      -  ``exc-ms`` — Exclusive elapsed time (milliseconds spent in method, not
         including any child methods)
      -  ``numcalls`` — Number of calls

   Last updated 2023-04-12 UTC.



/dumpsys
========

   https://developer.android.google.cn/tools/dumpsys?hl=en 

   .. container:: devsite-article-body clearfix

      ``dumpsys`` is a tool that runs on Android devices and provides information
      about system services. Call ``dumpsys`` from the command line using the
      `Android Debug Bridge (ADB) <#>`__ to get diagnostic
      output for all system services running on a connected device.

      This output is typically more verbose than you want, so use the `command-line options <#options>`__ on this page to get output for only the system services
      you want. This page also describes how to use ``dumpsys`` to accomplish
      common tasks, such as inspecting input, RAM, battery, or network diagnostics.

      .. rubric:: Syntax
         :name: syntax

      The general syntax for using ``dumpsys`` is as follows:

      .. code:: none

          adb shell dumpsys [-t timeout] [--help | -l | --skip services | service [arguments] | -c | -h]

      To get a diagnostic output for all system services for your connected device,
      run ``adb shell dumpsys``. However, this outputs far more information than
      you would typically want. For more manageable output, specify the service you
      want to examine by including it in the command. For example, the command
      below provides system data for input components, such as touch screens or
      built-in keyboards:

      .. code:: prettyprint

         adb shell dumpsys input

      For a complete list of system services that you can use with ``dumpsys``, use
      the following command:

      .. code:: prettyprint

         adb shell dumpsys -l

      .. rubric:: Command-line options
         :name: options

      The following table lists the available options when using ``dumpsys``:

      **Table 1.** List of available options for dumpsys

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Option
            - Description
         - 

            - ``-t timeout``
            - Specify the timeout period in seconds. When not specified, the
               default value is 10 seconds.
         - 

            - ``--help``
            - Print out help text for the ``dumpsys`` tool.
         - 

            - ``-l``
            - Output a complete list of system services that you can use with
               ``dumpsys``.
         - 

            - ``--skip services``
            - Specify the ``services`` that you don't want to include in the
               output.
         - 

            - ``service [ arguments ]``
            - Specify the ``service`` that you want to output. Some services may
               let you pass optional ``arguments``. To learn about these optional
               arguments, pass the ``-h`` option with the service:
               .. code:: none

                  adb shell dumpsys procstats -h
                      
         - 

            - ``-c``
            - When specifying certain services, append this option to output data
               in a machine-friendly format.
         - 

            - ``-h``
            - For certain services, append this option to see help text and
               additional options for that service.

      .. rubric:: Inspect input diagnostics
         :name: input

      Specifying the ``input`` service, as shown in the following command, dumps
      the state of the system’s input devices, such as keyboards and touchscreens,
      and the processing of input events.

      .. code:: prettyprint

         adb shell dumpsys input

      The output varies depending on the version of Android running on the
      connected device. The following sections describe the type of information you
      typically see.

      .. rubric:: Event hub state
         :name: event_state

      The following is a sample of what you might see when inspecting the **Event
      Hub State** of the input diagnostics:

      .. code:: none

         INPUT MANAGER (dumpsys input)

         Event Hub State:
           BuiltInKeyboardId: -2
           Devices:
             -1: Virtual
               Classes: 0x40000023
               Path: 
               Descriptor: a718a782d34bc767f4689c232d64d527998ea7fd
               Location:
               ControllerNumber: 0
               UniqueId: 
               Identifier: bus=0x0000, vendor=0x0000, product=0x0000, version=0x0000
               KeyLayoutFile: /system/usr/keylayout/Generic.kl
               KeyCharacterMapFile: /system/usr/keychars/Virtual.kcm
               ConfigurationFile:
               HaveKeyboardLayoutOverlay: false
             1: msm8974-taiko-mtp-snd-card Headset Jack
               Classes: 0x00000080
               Path: /dev/input/event5
               Descriptor: c8e3782483b4837ead6602e20483c46ff801112c
               Location: ALSA
               ControllerNumber: 0
               UniqueId:
               Identifier: bus=0x0000, vendor=0x0000, product=0x0000, version=0x0000
               KeyLayoutFile:
               KeyCharacterMapFile:
               ConfigurationFile:
               HaveKeyboardLayoutOverlay: false
             2: msm8974-taiko-mtp-snd-card Button Jack
               Classes: 0x00000001
               Path: /dev/input/event4
               Descriptor: 96fe62b244c555351ec576b282232e787fb42bab
               Location: ALSA
               ControllerNumber: 0
               UniqueId:
               Identifier: bus=0x0000, vendor=0x0000, product=0x0000, version=0x0000
               KeyLayoutFile: /system/usr/keylayout/msm8974-taiko-mtp-snd-card_Button_Jack.kl
               KeyCharacterMapFile: /system/usr/keychars/msm8974-taiko-mtp-snd-card_Button_Jack.kcm
               ConfigurationFile:
               HaveKeyboardLayoutOverlay: false
             3: hs_detect
               Classes: 0x00000081
               Path: /dev/input/event3
               Descriptor: 485d69228e24f5e46da1598745890b214130dbc4
               Location:
               ControllerNumber: 0
               UniqueId:
               Identifier: bus=0x0000, vendor=0x0001, product=0x0001, version=0x0001
               KeyLayoutFile: /system/usr/keylayout/hs_detect.kl
               KeyCharacterMapFile: /system/usr/keychars/hs_detect.kcm
               ConfigurationFile:
               HaveKeyboardLayoutOverlay: false
         ...

      .. rubric:: Input reader state
         :name: reader_state

      The ``InputReader`` is responsible for decoding input events from the kernel.
      Its state dump shows information about how each input device is configured
      and recent state changes that have occurred, such as key presses or touches
      on the touch screen.

      The following sample shows the output for a touch screen. Note the
      information about the resolution of the device and the calibration parameters
      that were used.

      .. code:: none

         Input Reader State
         ...
           Device 6: Melfas MMSxxx Touchscreen
               IsExternal: false
               Sources: 0x00001002
               KeyboardType: 0
               Motion Ranges:
                 X: source=0x00001002, min=0.000, max=719.001, flat=0.000, fuzz=0.999
                 Y: source=0x00001002, min=0.000, max=1279.001, flat=0.000, fuzz=0.999
                 PRESSURE: source=0x00001002, min=0.000, max=1.000, flat=0.000, fuzz=0.000
                 SIZE: source=0x00001002, min=0.000, max=1.000, flat=0.000, fuzz=0.000
                 TOUCH_MAJOR: source=0x00001002, min=0.000, max=1468.605, flat=0.000, fuzz=0.000
                 TOUCH_MINOR: source=0x00001002, min=0.000, max=1468.605, flat=0.000, fuzz=0.000
                 TOOL_MAJOR: source=0x00001002, min=0.000, max=1468.605, flat=0.000, fuzz=0.000
                 TOOL_MINOR: source=0x00001002, min=0.000, max=1468.605, flat=0.000, fuzz=0.000
               Touch Input Mapper:
                 Parameters:
                   GestureMode: spots
                   DeviceType: touchScreen
                   AssociatedDisplay: id=0, isExternal=false
                   OrientationAware: true
                 Raw Touch Axes:
                   X: min=0, max=720, flat=0, fuzz=0, resolution=0
                   Y: min=0, max=1280, flat=0, fuzz=0, resolution=0
                   Pressure: min=0, max=255, flat=0, fuzz=0, resolution=0
                   TouchMajor: min=0, max=30, flat=0, fuzz=0, resolution=0
                   TouchMinor: unknown range
                   ToolMajor: unknown range
                   ToolMinor: unknown range
                   Orientation: unknown range
                   Distance: unknown range
                   TiltX: unknown range
                   TiltY: unknown range
                   TrackingId: min=0, max=65535, flat=0, fuzz=0, resolution=0
                   Slot: min=0, max=9, flat=0, fuzz=0, resolution=0
                 Calibration:
                   touch.size.calibration: diameter
                   touch.size.scale: 10.000
                   touch.size.bias: 0.000
                   touch.size.isSummed: false
                   touch.pressure.calibration: amplitude
                   touch.pressure.scale: 0.005
                   touch.orientation.calibration: none
                   touch.distance.calibration: none
                 SurfaceWidth: 720px
                 SurfaceHeight: 1280px
                 SurfaceOrientation: 0
                 Translation and Scaling Factors:
                   XScale: 0.999
                   YScale: 0.999
                   XPrecision: 1.001
                   YPrecision: 1.001
                   GeometricScale: 0.999
                   PressureScale: 0.005
                   SizeScale: 0.033
                   OrientationCenter: 0.000
                   OrientationScale: 0.000
                   DistanceScale: 0.000
                   HaveTilt: false
                   TiltXCenter: 0.000
                   TiltXScale: 0.000
                   TiltYCenter: 0.000
                   TiltYScale: 0.000
                 Last Button State: 0x00000000
                 Last Raw Touch: pointerCount=0
                 Last Cooked Touch: pointerCount=0

      At the end of the input reader state dump, there is some information about
      global configuration parameters, such as the tap interval:

      .. code:: none

         Configuration:
           ExcludedDeviceNames: []
           VirtualKeyQuietTime: 0.0ms
           PointerVelocityControlParameters: scale=1.000, lowThreshold=500.000, highThreshold=3000.000, acceleration=3.000
           WheelVelocityControlParameters: scale=1.000, lowThreshold=15.000, highThreshold=50.000, acceleration=4.000
           PointerGesture:
             Enabled: true
             QuietInterval: 100.0ms
             DragMinSwitchSpeed: 50.0px/s
             TapInterval: 150.0ms
             TapDragInterval: 300.0ms
             TapSlop: 20.0px
             MultitouchSettleInterval: 100.0ms
             MultitouchMinDistance: 15.0px
             SwipeTransitionAngleCosine: 0.3
             SwipeMaxWidthRatio: 0.2
             MovementSpeedRatio: 0.8
             ZoomSpeedRatio: 0.3

      .. rubric:: Input dispatcher state
         :name: dispatcher_state

      The ``InputDispatcher`` is responsible for sending input events to
      applications. As shown in the following sample output, its state dump shows
      information about which window is being touched, the state of the input
      queue, whether an ANR is in progress, and other input event information:

      .. code:: none

         Input Dispatcher State:
           DispatchEnabled: 1
           DispatchFrozen: 0
           FocusedApplication: <null>
           FocusedWindow: name='Window{3fb06dc3 u0 StatusBar}'
           TouchStates: <no displays touched>
           Windows:
             0: name='Window{357bbbfe u0 SearchPanel}', displayId=0, paused=false, hasFocus=false, hasWallpaper=false, visible=false, canReceiveKeys=false, flags=0x01820100, type=0x000007e8, layer=211000, frame=[0,0][1080,1920], scale=1.000000, touchableRegion=[0,0][1080,1920], inputFeatures=0x00000000, ownerPid=22674, ownerUid=10020, dispatchingTimeout=5000.000ms
             1: name='Window{3b14c0ca u0 NavigationBar}', displayId=0, paused=false, hasFocus=false, hasWallpaper=false, visible=false, canReceiveKeys=false, flags=0x01840068, type=0x000007e3, layer=201000, frame=[0,1776][1080,1920], scale=1.000000, touchableRegion=[0,1776][1080,1920], inputFeatures=0x00000000, ownerPid=22674, ownerUid=10020, dispatchingTimeout=5000.000ms
             2: name='Window{2c7e849c u0 com.vito.lux}', displayId=0, paused=false, hasFocus=false, hasWallpaper=false, visible=true, canReceiveKeys=false, flags=0x0089031a, type=0x000007d6, layer=191000, frame=[-495,-147][1575,1923], scale=1.000000, touchableRegion=[-495,-147][1575,1923], inputFeatures=0x00000000, ownerPid=4697, ownerUid=10084, dispatchingTimeout=5000.000ms
             ...
           MonitoringChannels:
             0: 'WindowManager (server)'
           RecentQueue: length=10
             MotionEvent(deviceId=4, source=0x00001002, action=2, flags=0x00000000, metaState=0x00000000, buttonState=0x00000000, edgeFlags=0x00000000, xPrecision=1.0, yPrecision=1.0, displayId=0, pointers=[0: (335.0, 1465.0)]), policyFlags=0x62000000, age=217264.0ms
             MotionEvent(deviceId=4, source=0x00001002, action=1, flags=0x00000000, metaState=0x00000000, buttonState=0x00000000, edgeFlags=0x00000000, xPrecision=1.0, yPrecision=1.0, displayId=0, pointers=[0: (335.0, 1465.0)]), policyFlags=0x62000000, age=217255.7ms
             MotionEvent(deviceId=4, source=0x00001002, action=0, flags=0x00000000, metaState=0x00000000, buttonState=0x00000000, edgeFlags=0x00000000, xPrecision=1.0, yPrecision=1.0, displayId=0, pointers=[0: (330.0, 1283.0)]), policyFlags=0x62000000, age=216805.0ms
             ...
           PendingEvent: <none>
           InboundQueue: <empty>
           ReplacedKeys: <empty>
           Connections:
             0: channelName='WindowManager (server)', windowName='monitor', status=NORMAL, monitor=true, inputPublisherBlocked=false
               OutboundQueue: <empty>
               WaitQueue: <empty>
             1: channelName='278c1d65 KeyguardScrim (server)', windowName='Window{278c1d65 u0 KeyguardScrim}', status=NORMAL, monitor=false, inputPublisherBlocked=false
               OutboundQueue: <empty>
               WaitQueue: <empty>
             2: channelName='357bbbfe SearchPanel (server)', windowName='Window{357bbbfe u0 SearchPanel}', status=NORMAL, monitor=false, inputPublisherBlocked=false
               OutboundQueue: <empty>
               WaitQueue: <empty>
             ...
           AppSwitch: not pending
             7: channelName='2280455f com.google.android.gm/com.google.android.gm.ConversationListActivityGmail (server)', windowName='Window{2280455f u0 com.google.android.gm/com.google.android.gm.ConversationListActivityGmail}', status=NORMAL, monitor=false, inputPublisherBlocked=false
               OutboundQueue: <empty>
               WaitQueue: <empty>
             8: channelName='1a7be08a com.android.systemui/com.android.systemui.recents.RecentsActivity (server)', windowName='Window{1a7be08a u0 com.android.systemui/com.android.systemui.recents.RecentsActivity EXITING}', status=NORMAL, monitor=false, inputPublisherBlocked=false
               OutboundQueue: <empty>
               WaitQueue: <empty>
             9: channelName='3b14c0ca NavigationBar (server)', windowName='Window{3b14c0ca u0 NavigationBar}', status=NORMAL, monitor=false, inputPublisherBlocked=false
               OutboundQueue: <empty>
               WaitQueue: <empty>
             ...
           Configuration:
             KeyRepeatDelay: 50.0ms
             KeyRepeatTimeout: 500.0ms

      .. rubric:: Things to check
         :name: things_to_check

      The following is a list of things to consider when inspecting the output for
      the ``input`` service:

      **Event hub state:**

      -  All the input devices you expect are present.
      -  Each input device has an appropriate key layout file, key character map
         file, and input device configuration file. If the files are missing or
         contain syntax errors, then they aren't loaded.
      -  Each input device is classified correctly. The bits in the ``Classes``
         field correspond to flags in ``EventHub.h``, such as
         ``INPUT_DEVICE_CLASS_TOUCH_MT``.
      -  The ``BuiltInKeyboardId`` is correct. If the device does not have a
         built-in keyboard, then the ID must be ``-2``. Otherwise, it should be the
         ID of the built-in keyboard.

         -  If you observe that the ``BuiltInKeyboardId`` is not ``-2`` but it
            should be, then you are missing a key character map file for a special
            function keypad. Special function keypad devices should have key
            character map files that contain only the line
            ``type SPECIAL_FUNCTION``.

      **Input reader state:**

      -  All the expected input devices are present.
      -  Each input device is configured correctly. In particular, check that the
         touch screen and joystick axes are correct.

      **Input dispatcher state:**

      -  All input events are processed as expected.
      -  After touching the touch screen and running ``dumpsys`` at the same time,
         the ``TouchStates`` line correctly identifies the window that you are
         touching.

      .. rubric:: Test UI performance
         :name: ui

      Specifying the ``gfxinfo`` service provides output with performance
      information relating to frames of animation that occur during the recording
      phase. The following command uses ``gfxinfo`` to gather UI performance data
      for a specified package name:

      .. code:: none

         adb shell dumpsys gfxinfo package-name

      You can also include the ``framestats`` option to provide even more detailed
      frame timing information from recent frames, so that you can track down and
      debug problems more accurately:

      .. code:: none

         adb shell dumpsys gfxinfo package-name framestats

      To learn more about using ``gfxinfo`` and ``framestats`` to integrate UI
      performance measurements into your testing practices, 
      see `Writing a Macrobenchmark <#>`__.

      .. rubric:: Inspect network diagnostics
         :name: network

      Specifying the ``netstats`` service provides network usage statistics
      collected since the previous device booted up. To output additional
      information, such as detailed unique user ID (UID) information, include the
      ``detail`` option, as follows:

      .. code:: prettyprint

         adb shell dumpsys netstats detail

      The output varies depending on the version of Android running on the
      connected device. The following sections describe the type of information you
      typically see.

      .. rubric:: Active interfaces and active UID interfaces
         :name: active_interfaces

      The following sample output lists the active interfaces and active UID
      interfaces of the connected device. In most cases, the information for active
      interfaces and active UID interfaces is the same.

      .. code:: none

         Active interfaces:
           iface=wlan0 ident=[{type=WIFI, subType=COMBINED, networkId="Guest"}]
         Active UID interfaces:
           iface=wlan0 ident=[{type=WIFI, subType=COMBINED, networkId="Guest"}]

      .. rubric:: 'Dev' and 'Xt' statistics
         :name: dev_xt

      The following is a sample output for the Dev statistics section:

      .. code:: none

         Dev stats:
           Pending bytes: 1798112
           History since boot:
           ident=[{type=WIFI, subType=COMBINED, networkId="Guest", metered=false}] uid=-1 set=ALL tag=0x0
             NetworkStatsHistory: bucketDuration=3600
               st=1497891600 rb=1220280 rp=1573 tb=309870 tp=1271 op=0
               st=1497895200 rb=29733 rp=145 tb=85354 tp=185 op=0
               st=1497898800 rb=46784 rp=162 tb=42531 tp=192 op=0
               st=1497902400 rb=27570 rp=111 tb=35990 tp=121 op=0
         Xt stats:
           Pending bytes: 1771782
           History since boot:
           ident=[{type=WIFI, subType=COMBINED, networkId="Guest", metered=false}] uid=-1 set=ALL tag=0x0
             NetworkStatsHistory: bucketDuration=3600
               st=1497891600 rb=1219598 rp=1557 tb=291628 tp=1255 op=0
               st=1497895200 rb=29623 rp=142 tb=82699 tp=182 op=0
               st=1497898800 rb=46684 rp=160 tb=39756 tp=191 op=0
               st=1497902400 rb=27528 rp=110 tb=34266 tp=120 op=0

      .. rubric:: UID stats
         :name: uid_stats

      The following is a sample of detailed statistics for each UID:

      .. code:: none

         UID stats:
           Pending bytes: 744
           Complete history:
           ident=[[type=MOBILE_SUPL, subType=COMBINED, subscriberId=311111...], [type=MOBILE, subType=COMBINED, subscriberId=311111...]] uid=10007  set=DEFAULT tag=0x0
             NetworkStatsHistory: bucketDuration=7200000
               bucketStart=1406167200000 activeTime=7200000 rxBytes=4666 rxPackets=7 txBytes=1597 txPackets=10 operations=0
           ident=[[type=WIFI, subType=COMBINED, networkId="MySSID"]] uid=10007  set=DEFAULT tag=0x0
             NetworkStatsHistory: bucketDuration=7200000
               bucketStart=1406138400000 activeTime=7200000 rxBytes=17086802 rxPackets=15387 txBytes=1214969 txPackets=8036 operations=28
               bucketStart=1406145600000 activeTime=7200000 rxBytes=2396424 rxPackets=2946 txBytes=464372 txPackets=2609 operations=70
               bucketStart=1406152800000 activeTime=7200000 rxBytes=200907 rxPackets=606 txBytes=187418 txPackets=739 operations=0
               bucketStart=1406160000000 activeTime=7200000 rxBytes=826017 rxPackets=1126 txBytes=267342 txPackets=1175 operations=35

      To find the UID for your app, run this command:
      ``adb shell dumpsys package your-package-name``. Then look for the line
      labeled ``userId``.

      For example, to find network usage for the app 'com.example.myapp', run the
      following command:

      .. code:: none

         adb shell dumpsys package com.example.myapp | grep userId

      The output should be similar to the following:

      .. code:: none

             userId=10007 gids=[3003, 1028, 1015]

      Using the preceding sample dump, look for lines that have ``uid=10007``. Two
      such lines exist—the first indicates a mobile connection and the second
      indicates a Wi-Fi connection. Below each line, you can see the following
      information for each two-hour window, which ``bucketDuration`` specifies in
      milliseconds:

      -  ``set=DEFAULT`` indicates foreground network usage, while
         ``set=BACKGROUND`` indicates background usage. ``set=ALL`` implies both.
      -  ``tag=0x0`` indicates the socket tag associated with the traffic.
      -  ``rxBytes`` and ``rxPackets`` represent received bytes and received
         packets in the corresponding time interval.
      -  ``txBytes`` and ``txPackets`` represent sent (transmitted) bytes and sent
         packets in the corresponding time interval.

      .. rubric:: Inspect battery diagnostics
         :name: battery

      Specifying the ``batterystats`` service generates statistical data about
      battery usage on a device, organized by unique user ID (UID). To learn how to
      use ``dumpsys`` to test your app for Doze and App Standby, 
      see `Testing with Doze and App Standby <#testing_doze_and_app_standby>`__.

      The command for ``batterystats`` is as follows:

      .. code:: none

         adb shell dumpsys batterystats options

      To see a list of additional options available to ``batterystats``, include
      the ``-h`` option. The following example outputs battery usage statistics for
      a specified app package since the device was last charged:

      .. code:: none

         adb shell dumpsys batterystats --charged package-name

      The output typically includes the following:

      -  History of battery-related events
      -  Global statistics for the device
      -  Approximate power use per UID and system component
      -  Per-app mobile milliseconds per packet
      -  System UID aggregated statistics
      -  App UID aggregated statistics

      To learn more about using ``batterystats`` and generating an HTML
      visualization of the output, which makes it easier to understand and diagnose
      battery-related issues, read `Profile battery usage with Batterystats and Battery Historian <#>`__.

      .. rubric:: Inspect machine-friendly output
         :name: inspect_machine-friendly_output

      You can generate ``batterystats`` output in machine-readable CSV format by
      using the following command:

      .. code:: prettyprint

         adb shell dumpsys batterystats --checkin

      The following is an example of the output:

      .. code:: none

         9,0,i,vers,11,116,K,L
         9,0,i,uid,1000,android
         9,0,i,uid,1000,com.android.providers.settings
         9,0,i,uid,1000,com.android.inputdevices
         9,0,i,uid,1000,com.android.server.telecom
         ...
         9,0,i,dsd,1820451,97,s-,p-
         9,0,i,dsd,3517481,98,s-,p-
         9,0,l,bt,0,8548446,1000983,8566645,1019182,1418672206045,8541652,994188
         9,0,l,gn,0,0,666932,495312,0,0,2104,1444
         9,0,l,m,6794,0,8548446,8548446,0,0,0,666932,495312,0,697728,0,0,0,5797,0,0
         ...

      Battery-usage observations may be per UID or system-level. Data is selected
      for inclusion based on its usefulness in analyzing battery performance. Each
      row represents an observation, with the following elements:

      -  A placeholder integer
      -  The user ID associated with the observation
      -  The aggregation mode:

         -  ``i`` for information not tied to charged/uncharged status.
         -  ``l`` for ``--charged`` (usage since last charge).
         -  ``u`` for ``--unplugged`` (usage since last unplugged). Deprecated in
            Android 5.1.1.

      -  Section identifier, which determines how to interpret subsequent values in
         the line.

      The following table describes the various section identifiers you may see:

      **Table 2.** List of section identifiers

      .. list-table::
         :widths: 27 27 27
         :header-rows: 1

         - 

            - Section identifier
            - Description
            - Remaining fields
         - 

            - vers
            - Version
            - ``checkin version``, ``parcel version``, ``start platform version``,
               ``end platform version``
         - 

            - ``uid``
            - UID
            - ``uid``, ``package name``
         - 

            - ``apk``
            - APK
            - ``wakeups``, ``APK``, ``service``, ``start time``, ``starts``,
               ``launches``
         - 

            - ``pr``
            - Process
            - ``process``, ``user``, ``system``, ``foreground``, ``starts``
         - 

            - ``sr``
            - Sensor
            - ``sensor number``, ``time``, ``count``
         - 

            - ``vib``
            - Vibrator
            - ``time``, ``count``
         - 

            - ``fg``
            - Foreground
            - ``time``, ``count``
         - 

            - ``st``
            - State Time
            - ``foreground``, ``active``, ``running``
         - 

            - ``wl``
            - Wake lock
            - ``wake lock``, ``full time``, ``f``, ``full count``,
               ``partial time``, ``p``, ``partial count``, ``window time``, ``w``,
               ``window count``
         - 

            - ``sy``
            - Sync
            - ``sync``, ``time``, ``count``
         - 

            - ``jb``
            - Job
            - ``job``, ``time``, ``count``
         - 

            - ``kwl``
            - Kernel Wake Lock
            - ``kernel wake lock``, ``time``, ``count``
         - 

            - ``wr``
            - Wakeup Reason
            - ``wakeup reason``, ``time``, ``count``
         - 

            - ``nt``
            - Network
            - ``mobile bytes RX``, ``mobile bytes TX``, ``Wi-Fi bytes RX``,
               ``Wi-Fi bytes TX``, ``mobile packets RX``, ``mobile packets TX``,
               ``Wi-Fi packets RX``, ``Wi-Fi packets TX``, ``mobile active time``,
               ``mobile active count``
         - 

            - ``ua``
            - User Activity
            - ``other``, ``button``, ``touch``
         - 

            - ``bt``
            - Battery
            - ``start count``, ``battery realtime``, ``battery uptime``,
               ``total realtime``, ``total uptime``, ``start clock time``,
               ``battery screen off realtime``, ``battery screen off uptime``
         - 

            - ``dc``
            - Battery Discharge
            - ``low``, ``high``, ``screen on``, ``screen off``
         - 

            - ``lv``
            - Battery Level
            - ``start level``,
               current level
         - 

            - ``wfl``
            - Wi-Fi
            - ``full Wi-Fi lock on time``, ``Wi-Fi scan time``,
               ``Wi-Fi running time``, ``Wi-Fi scan count``, ``Wi-Fi idle time``,
               ``Wi-Fi receive time``, ``Wi-Fi transmit time``
         - 

            - ``gwfl``
            - Global Wi-Fi
            - ``Wi-Fi on time``, ``Wi-Fi running time``, ``Wi-Fi idle time``,
               ``Wi-Fi receive time``, ``Wi-Fi transmit time``,
               ``Wi-Fi power (mAh)``
         - 

            - ``gble``
            - Global Bluetooth
            - ``BT idle time``, ``BT receive time``, ``BT transmit time``,
               ``BT power (mAh)``
         - 

            - ``m``
            - Misc
            - ``screen on time``, ``phone on time``, ``full wakelock time total``,
               ``partial wakelock time total``, ``mobile radio active time``,
               ``mobile radio active adjusted time``, ``interactive time``,
               ``power save mode enabled time``, ``connectivity changes``,
               ``device idle mode enabled time``,
               ``device idle mode enabled count``, ``device idling time``,
               ``device idling count``, ``mobile radio active count``,
               ``mobile radio active unknown time``
         - 

            - ``gn``
            - Global Network
            - ``mobile RX total bytes``, ``mobile TX total bytes``,
               ``Wi-Fi RX total bytes``, ``Wi-Fi TX total bytes``,
               ``mobile RX total packets``, ``mobile TX total packets``,
               ``Wi-Fi RX total packets``, ``Wi-Fi TX total packets``
         - 

            - ``br``
            - Screen Brightness
            - ``dark``, ``dim``, ``medium``, ``light``, ``bright``
         - 

            - ``sst``
            - Signal Scanning Time
            - ``signal scanning time``
         - 

            - ``sgt``
            - Signal Strength Time
            - ``none``, ``poor``, ``moderate``, ``good``, ``great``
         - 

            - ``sgc``
            - Signal Strength Count
            - ``none``, ``poor``, ``moderate``, ``good``, ``great``
         - 

            - ``dct``
            - Data Connection Time
            - ``none``, ``GPRS``, ``EDGE``, ``UMTS``, ``CDMA``, ``EVDO_0``,
               ``EVDO_A``, ``1xRTT``, ``HSDPA``, ``HSUPA``, ``HSPA``, ``IDEN``,
               ``EVDO_B``, ``LTE``, ``EHRPD``,
               HSPAP
               , ``other``
         - 

            - ``dcc``
            - Data Connection Count
            - ``none``, ``GPRS``, ``EDGE``, ``UMTS``, ``CDMA``, ``EVDO_0``,
               ``EVDO_A``, ``1xRTT``, ``HSDPA``, ``HSUPA``, ``HSPA``, ``IDEN``,
               ``EVDO_B``, ``LTE``, ``EHRPD``, ``HSPAP``, ``other``
         - 

            - ``wst``
            - Wi-Fi State Time
            - ``off``, ``off scanning``, ``on no networks``, ``on disconnected``,
               ``on connected STA``, ``on connected P2P``,
               ``on connected STA P2P``, ``soft AP``
         - 

            - ``wsc``
            - Wi-Fi State Count
            - ``off``, ``off scanning``, ``on no networks``, ``on disconnected``,
               ``on connected STA``, ``on connected P2P``,
               ``on connected STA P2P``, ``soft AP``
         - 

            - ``wsst``/p>
            - Wi-Fi Supplicant State Time
            - ``invalid``, ``disconnected``, ``interface disabled``, ``inactive``,
               ``scanning``, ``authenticating``, ``associating``, ``associated``,
               ``four-way handshake``, ``group handshake``, ``completed``,
               ``dormant``, ``uninitialized``
         - 

            - ``wssc``
            - Wi-Fi Supplicant State Count
            - ``invalid``, ``disconnected``, ``interface disabled``, ``inactive``,
               ``scanning``, ``authenticating``, ``associating``, ``associated``,
               ``four-way handshake``, ``group handshake``, ``completed``,
               ``dormant``, ``uninitialized``
         - 

            - ``wsgt``
            - Wi-Fi Signal Strength Time
            - ``none``, ``poor``, ``moderate``, ``good``, ``great``
         - 

            - ``wsgc``
            - Wi-Fi Signal Strength Count
            - ``none``, ``poor``, ``moderate``, ``good``, ``great``
         - 

            - ``bst``
            - Bluetooth State Time
            - ``inactive``, ``low``, ``med``, ``high``
         - 

            - ``bsc``
            - Bluetooth State Count
            - ``inactive``, ``low``, ``med``, ``high``
         - 

            - ``pws``
            - Power Use Summary
            - ``battery capacity``, ``computed power``, ``minimum drained power``,
               ``maximum drained power``
         - 

            - ``pwi``
            - Power Use Item
            - ``label``, ``mAh``
         - 

            - ``dsd``
            - Discharge Step
            - ``duration``, ``level``, ``screen``, ``power-save``
         - 

            - ``csd``
            - Charge Step
            - ``duration``, ``level``, ``screen``, ``power-save``
         - 

            - ``dtr``
            - Discharge Time Remaining
            - ``battery time remaining``
         - 

            - ``ctr``
            - Charge Time Remaining
            - ``charge time remaining``

      **Note**: Prior to Android 6.0, power use for Bluetooth radio, cellular
      radio, and Wi-Fi was tracked in the ``m`` (Misc) section category. In Android
      6.0 and higher, power use for these components is tracked in the ``pwi``
      (Power Use Item) section with individual labels (``wifi``, ``blue``,
      ``cell``) for each component.

      .. rubric:: View memory allocations
         :name: ViewingAllocations

      You can inspect your app's memory usage in one of two ways: over a period of
      time using ``procstats`` or at a particular point in time using ``meminfo``.
      The following sections show you how to use both methods.

      .. rubric:: procstats
         :name: procstats

      ``procstats`` makes it possible to see how your app behaves over time,
      including how long it runs in the background and how much memory it uses
      during that time. It helps you quickly find inefficiencies and misbehaviors
      in your app, such as memory leaks, that can affect how it performs,
      especially when running on low-memory devices. Its state dump displays
      statistics about every application’s runtime, proportional set size (PSS),
      unique set size (USS), and resident set size (RSS).

      To get application memory usage stats over the last three hours, in
      human-readable format, run the following command:

      .. code:: none

         adb shell dumpsys procstats --hours 3

      As shown in the following example, the output displays what percentage of
      time the application was running and the PSS, USS, and RSS as
      ``minPSS-avgPSS-maxPSS/minUSS-avgUSS-maxUSS/minRSS-avgRSS-maxRSS`` over the
      number of samples.

      .. code:: none

         AGGREGATED OVER LAST 3 HOURS:
           * com.android.systemui / u0a37 / v28:
                    TOTAL: 100% (15MB-16MB-17MB/7.7MB-8.7MB-9.4MB/7.7MB-9.6MB-84MB over 178)
               Persistent: 100% (15MB-16MB-17MB/7.7MB-8.7MB-9.4MB/7.7MB-9.6MB-84MB over 178)
           * com.android.se / 1068 / v28:
                    TOTAL: 100% (2.8MB-2.9MB-2.9MB/300KB-301KB-304KB/304KB-22MB-33MB over 3)
               Persistent: 100% (2.8MB-2.9MB-2.9MB/300KB-301KB-304KB/304KB-22MB-33MB over 3)
           * com.google.android.gms.persistent / u0a7 / v19056073:
                    TOTAL: 100% (37MB-38MB-40MB/27MB-28MB-29MB/124MB-125MB-126MB over 2)
                   Imp Fg: 100% (37MB-38MB-40MB/27MB-28MB-29MB/124MB-125MB-126MB over 2)
           ...
           * com.android.gallery3d / u0a62 / v40030:
                    TOTAL: 0.01%
                 Receiver: 0.01%
                 (Cached): 54% (6.4MB-6.5MB-6.9MB/4.4MB-4.4MB-4.4MB/4.4MB-26MB-68MB over 6)
           * com.google.android.tvlauncher / u0a30 / v1010900130:
                    TOTAL: 0.01%
                 Receiver: 0.01%
                 (Cached): 91% (5.8MB-13MB-14MB/3.5MB-10MB-12MB/12MB-33MB-78MB over 6)
           * com.android.vending:instant_app_installer / u0a16 / v81633968:
                    TOTAL: 0.01%
                 Receiver: 0.01%
                 (Cached): 100% (14MB-15MB-16MB/3.8MB-4.2MB-5.1MB/3.8MB-30MB-95MB over 7)
           ...
         Run time Stats:
           SOff/Norm: +32m52s226ms
           SOn /Norm: +2h10m8s364ms
                Mod : +17s930ms
               TOTAL: +2h43m18s520ms

         Memory usage:
           Kernel : 265MB (38 samples)
           Native : 73MB (38 samples)
           Persist: 262MB (90 samples)
           Top    : 190MB (325 samples)
           ImpFg  : 204MB (569 samples)
           ImpBg  : 754KB (345 samples)
           Service: 93MB (1912 samples)
           Receivr: 227KB (1169 samples)
           Home   : 66MB (12 samples)
           LastAct: 30MB (255 samples)
           CchAct : 220MB (450 samples)
           CchCAct: 193MB (71 samples)
           CchEmty: 182MB (652 samples)
           Cached : 58MB (38 samples)
           Free   : 60MB (38 samples)
           TOTAL  : 1.9GB
           ServRst: 50KB (278 samples)

                   Start time: 2015-04-08 13:44:18
           Total elapsed time: +2h43m18s521ms (partial) libart.so

      .. rubric:: meminfo
         :name: meminfo

      You can record a snapshot of how your app's memory is divided between
      different types of RAM allocation with the following command:

      .. code:: none

         adb shell dumpsys meminfo package_name|pid [-d]

      The ``-d`` flag prints more info related to Dalvik and ART memory usage.

      The output lists all of your app's current allocations, measured in
      kilobytes.

      When inspecting this information, you should be familiar with the following
      types of allocation:

      Private (Clean and Dirty) RAM
         This is memory that is being used by only your process. This is the bulk
         of the RAM that the system can reclaim when your app’s process is
         destroyed. Generally, the most important portion of this is *private
         dirty* RAM, which is the most expensive because it is used by only your
         process and because its contents exist only in RAM, so can’t be paged to
         storage, because Android does't use swap. All Dalvik and native heap
         allocations you make are private dirty RAM. Dalvik and native allocations
         you share with the Zygote process are shared dirty RAM.
      Proportional Set Size (PSS)
         This is a measurement of your app’s RAM use that takes into account
         sharing pages across processes. Any RAM pages that are unique to your
         process directly contribute to its PSS value, while pages that are shared
         with other processes contribute to the PSS value only in proportion to the
         amount of sharing. For example, a page shared between two processes
         contributes half of its size to the PSS of each process.

      A characteristic of the PSS measurement is that you can add up the PSS across
      all processes to determine the actual memory being used by all processes.
      This means PSS is a good measure for the actual RAM weight of a process and
      for comparison against the RAM use of other processes and the total available
      RAM.

      For example, the following is the output for Map’s process on a Nexus 5
      device:

      ``adb shell dumpsys meminfo com.google.android.apps.maps -d``

      **Note:** The information you see might vary slightly from what is shown
      here, because some details of the output differ across platform versions.

      .. code:: none

         ** MEMINFO in pid 18227 [com.google.android.apps.maps] **
                            Pss  Private  Private  Swapped     Heap     Heap     Heap
                          Total    Dirty    Clean    Dirty     Size    Alloc     Free
                         ------   ------   ------   ------   ------   ------   ------
           Native Heap    10468    10408        0        0    20480    14462     6017
           Dalvik Heap    34340    33816        0        0    62436    53883     8553
          Dalvik Other      972      972        0        0
                 Stack     1144     1144        0        0
               Gfx dev    35300    35300        0        0
             Other dev        5        0        4        0
              .so mmap     1943      504      188        0
             .apk mmap      598        0      136        0
             .ttf mmap      134        0       68        0
             .dex mmap     3908        0     3904        0
             .oat mmap     1344        0       56        0
             .art mmap     2037     1784       28        0
            Other mmap       30        4        0        0
            EGL mtrack    73072    73072        0        0
             GL mtrack    51044    51044        0        0
               Unknown      185      184        0        0
                 TOTAL   216524   208232     4384        0    82916    68345    14570

          Dalvik Details
                 .Heap     6568     6568        0        0
                  .LOS    24771    24404        0        0
                   .GC      500      500        0        0
             .JITCache      428      428        0        0
               .Zygote     1093      936        0        0
            .NonMoving     1908     1908        0        0
          .IndirectRef       44       44        0        0

          Objects
                        Views:       90         ViewRootImpl:        1
                  AppContexts:        4           Activities:        1
                       Assets:        2        AssetManagers:        2
                Local Binders:       21        Proxy Binders:       28
                Parcel memory:       18         Parcel count:       74
             Death Recipients:        2      OpenSSL Sockets:        2

      Here is an older ``dumpsys`` on Dalvik of the Gmail app:

      .. code:: none

         ** MEMINFO in pid 9953 [com.google.android.gm] **
                          Pss     Pss  Shared Private  Shared Private    Heap    Heap    Heap
                        Total   Clean   Dirty   Dirty   Clean   Clean    Size   Alloc    Free
                       ------  ------  ------  ------  ------  ------  ------  ------  ------
           Native Heap      0       0       0       0       0       0    7800    7637(6)  126
           Dalvik Heap   5110(3)    0    4136    4988(3)    0       0    9168    8958(6)  210
          Dalvik Other   2850       0    2684    2772       0       0
                 Stack     36       0       8      36       0       0
                Cursor    136       0       0     136       0       0
                Ashmem     12       0      28       0       0       0
             Other dev    380       0      24     376       0       4
              .so mmap   5443(5) 1996    2584    2664(5) 5788    1996(5)
             .apk mmap    235      32       0       0    1252      32
             .ttf mmap     36      12       0       0      88      12
             .dex mmap   3019(5) 2148       0       0    8936    2148(5)
            Other mmap    107       0       8       8     324      68
               Unknown   6994(4)    0     252    6992(4)    0       0
                 TOTAL  24358(1) 4188    9724   17972(2)16388    4260(2)16968   16595     336

          Objects
                        Views:    426         ViewRootImpl:        3(8)
                  AppContexts:      6(7)        Activities:        2(7)
                       Assets:      2        AssetManagers:        2
                Local Binders:     64        Proxy Binders:       34
             Death Recipients:      0
              OpenSSL Sockets:      1

          SQL
                  MEMORY_USED:   1739
           PAGECACHE_OVERFLOW:   1164          MALLOC_SIZE:       62

      In general, be concerned with only the ``Pss Total`` and ``Private Dirty``
      columns. In some cases, the ``Private Clean`` and ``Heap Alloc`` columns also
      provide interesting data.

      The following provides more information about the different memory
      allocations you should observe:

      ``Dalvik Heap``
         The RAM used by Dalvik allocations in your app. The ``Pss Total`` includes
         all Zygote allocations, weighted by their sharing across processes, as
         described in the PSS definition. The ``Private Dirty`` number is the
         actual RAM committed to only your app’s heap, composed of your own
         allocations and any Zygote allocation pages that have been modified since
         forking your app’s process from Zygote.

         **Note:** On newer platform versions that have the ``Dalvik Other``
         section, the ``Pss Total`` and ``Private Dirty`` numbers for Dalvik Heap
         don't include Dalvik overhead, such as the just-in-time compilation (JIT)
         and GC bookkeeping, whereas older versions list it all combined under
         ``Dalvik``.

         The ``Heap Alloc`` is the amount of memory that the Dalvik and native heap
         allocators keep track of for your app. This value is larger than
         ``Pss Total`` and ``Private Dirty`` because your process was forked from
         Zygote and includes allocations that your process shares with all the
         others.

      ``.so mmap`` and ``.dex mmap``
         The RAM being used for mapped ``.so`` (native) and ``.dex`` (Dalvik or
         ART) code. The ``Pss Total`` number includes platform code shared across
         apps. ``Private Clean`` is your app’s own code. Generally, the actual
         mapped size is larger. The RAM here is only what currently needs to be in
         RAM for code that has been executed by the app. However, the ``.so mmap``
         has a large private dirty, which is due to fix-ups to the native code when
         it was loaded into its final address.
      ``.oat mmap``
         This is the amount of RAM used by the code image. It's based on the
         preloaded classes commonly used by multiple apps. This image is shared
         across all apps and is unaffected by particular apps.
      ``.art mmap``
         This is the amount of RAM used by the heap image. It's based on the
         preloaded classes commonly used by multiple apps. This image is shared
         across all apps and is unaffected by particular apps. Even though the ART
         image contains `Object <#>`__ instances, it
         doesn't count towards your heap size.
      ``.Heap`` (only with ``-d`` flag)
         This is the amount of heap memory for your app. This excludes objects in
         the image and large object spaces, but includes the Zygote space and
         non-moving space.
      ``.LOS`` (only with ``-d`` flag)
         This is the amount of RAM used by the ART large object space. This
         includes Zygote large objects. Large objects are all primitive array
         allocations larger than 12KB.
      ``.GC`` (only with ``-d`` flag)
         This is the overhead cost for garbage collection. There is no way to
         reduce this overhead.
      ``.JITCache`` (only with ``-d`` flag)
         This is the amount of memory used by the JIT data and code caches.
         Typically, this is zero, since all apps are compiled at install time.
      ``.Zygote`` (only with ``-d`` flag)
         This is the amount of memory used by the Zygote space. The Zygote space is
         created during device startup and is never allocated.
      ``.NonMoving`` (only with ``-d`` flag)
         This is the amount of RAM used by the ART non-moving space. The non-moving
         space contains special non-movable objects such as fields and methods. You
         can reduce this section by using fewer fields and methods in your app.
      ``.IndirectRef`` (only with ``-d`` flag)
         This is the amount of RAM used by the ART indirect reference tables.
         Usually this amount is small, but if it is too high, you might be able to
         reduce it by reducing the number of local and global JNI references used.
      ``Unknown``
         Any RAM pages that the system couldn't classify into one of the other more
         specific items. Currently, this contains mostly native allocations, which
         can't be identified by the tool when collecting this data due to Address
         Space Layout Randomization (ASLR). Like the Dalvik heap, the ``Pss Total``
         for ``Unknown`` takes into account sharing with Zygote, and
         ``Private Dirty`` is unknown RAM dedicated to only your app.
      ``TOTAL``
         The total Proportional Set Size (PSS) RAM used by your process. This is
         the sum of all PSS fields above it. It indicates the overall memory weight
         of your process, which can be directly compared with other processes and
         the total available RAM.

         ``Private Dirty`` and ``Private Clean`` are the total allocations within
         your process, which are not shared with other processes. When your process
         is destroyed, all the RAM from these allocations is released back to the
         system. ``Private Clean`` can also be paged out and released prior to your
         process being destroyed, but ``Private Dirty`` is only released on process
         destruction.

         Dirty RAM is pages that have been modified and so must stay committed to
         RAM because there is no swap. Clean RAM is pages that have been mapped
         from a persistent file, such as code being executed, and can be paged out
         if not used for a while.

      ``ViewRootImpl``
         The number of root views that are active in your process. Each root view
         is associated with a window, so this can help you identify memory leaks
         involving dialogs or other windows.
      ``AppContexts`` and ``Activities``
         The number of app `Context <#>`__ and `Activity <#>`__ objects that currently
         live in your process. This can help you to quickly identify leaked
         ``Activity`` objects that can’t be garbage collected due to static
         references on them, which is common. These objects often have many other
         allocations associated with them, which makes them a good way to track
         large memory leaks.

      **Note:**\  A `View <#>`__ or `Drawable <#>`__ object
      also holds a reference to the `Activity <#>`__ that it's from, so
      holding a ``View`` or ``Drawable`` object can also lead to your app leaking
      an ``Activity``.

   Last updated 2023-07-12 UTC.


/etc1tool
=========

   https://developer.android.google.cn/tools/etc1tool?hl=en 

   .. container:: devsite-article-body clearfix

      ``etc1tool`` is a command line utility that lets you encode PNG images to the
      `ETC1 <https://registry.khronos.org/OpenGL/extensions/OES/OES_compressed_ETC1_RGB8_texture.txt>`__
      compression standard and decode ETC1 compressed images back to PNG.

      The usage for ``etc1tool`` is:

      .. code:: none

         etc1tool infile [--help | --encode | --encodeNoHeader | --decode] [--showDifference
         diff-file] [-o outfile]

      This table lists the command options:

      .. list-table::
         :header-rows: 1

         - 

            - Option
            - Description
         - 

            - ``infile``
            - The input file to compress.
         - 

            - ``--help``
            - Print usage information.
         - 

            - ``--encode``
            - Create an ETC1 file from a PNG file. This is the default mode for the
               tool if nothing is specified.
         - 

            - ``--encodeNoHeader``
            - Create a raw ETC1 data file without a header from a PNG file.
         - 

            - ``--decode``
            - Create a PNG file from an ETC1 file.
         - 

            - ``--showDifference``\ *``diff-file``*
            - Write the difference between the original and encoded image to
               *``diff-file``*. This option is only valid when encoding.
         - 

            - ``-o``\ *``outfile``*
            - Specify the name of the output file. If *``outfile``* is not
               specified, the output file is constructed from the input filename
               with the appropriate suffix (``.pkm`` or ``.png``).

   Last updated 2023-04-12 UTC.


/jobb
=====

   https://developer.android.google.cn/tools/jobb?hl=en 

   .. container:: devsite-article-body clearfix

      **Important:** From August 2021, new apps are required to publish with the
      `Android App Bundle <#>`__ on Google Play. New apps larger
      than 200 MB are now supported by either `Play Feature Delivery <#>`__ or 
      `Play Asset Delivery <#>`__. From June 2023, new and
      existing `TV apps are required to be published as App Bundles <#SC-E1>`__.

      The ``jobb`` tool lets you build encrypted and unencrypted APK expansion
      files in Opaque Binary Blob (OBB) format. You can download and mount these
      expansion files in your application using `StorageManager <#>`__ on
      devices with Android 2.3 (API Level 9) or higher. OBB files provide
      additional file assets for Android applications, such as graphics, sounds,
      and video, separate from an application's APK file. For more information on
      using expansion files, 
      see `APK Expansion Files <#>`__.

      .. rubric:: Usage
         :name: usage

      The syntax for running ``jobb`` is as follows:

      .. code:: none

         jobb [-d <directory>][-o <filename>][-pn <package>][-pv <version>] \
              [-k <key>][-ov][-dump <filename>][-v][-about]

      You can use the ``jobb`` tool to create an OBB file or extract the contents
      of an existing OBB. The following example command creates an OBB file from
      source files:

      .. code:: none

         $ jobb -d /temp/assets/ -o my-app-assets.obb -k secret-key -pn com.my.app.package -pv 11

      This example shows how to dump the contents of an existing OBB file:

      .. code:: none

         $ jobb -d /temp/obb-output/ -o my-app-assets.obb -k secret-key

      .. rubric:: Options
         :name: options

      The table below lists the command-line options for the ``jobb`` tool:

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Option
            - Description
         - 

            - ``-d <directory>``
            - Set the input directory for creating an OBB file or the output
               directory when extracting (``-dump``) an existing file. When
               creating an OBB file,`jobb\` includes the contents of the specified
               directory and all its sub-directories.
         - 

            - ``-o <filename>``
            - Specify the filename for the OBB file. This parameter is required
               when creating an OBB and dumping its contents.
         - 

            - ``-pn <package>``
            - Specify the package name for the application that mounts the OBB
               file, which corresponds to the ``package`` value specified in your
               application's manifest. This parameter is required when creating an
               OBB file.
         - 

            - ``-pv <version>``
            - Set the minimum version for the application that can mount the OBB
               file, which corresponds to the ``android:versionCode`` value in your
               application's manifest. This parameter is required when creating an
               OBB file.
         - 

            - ``-k <key>``
            - Specify a password for encrypting a new OBB file or decrypting an
               existing, encrypted OBB file.
         - 

            - ``-ov``
            - Create an OBB file that is an overlay of an existing OBB file
               structure. This option allows the new package contents to mount into
               the same location as a previous package and creates patch versions
               of previously generated OBB files. Files within an overlay OBB file
               replace files that have the same path.
         - 

            - ``-dump <filename>``
            - Extract the contents of the specified OBB file. When using this
               option, you must also specify the output directory for the contents
               using the ``-d <directory>`` parameter.

               **Note:** When dumping an existing OBB file, you can omit the
               ``-d <directory>`` parameter to get a listing of the directories
               inside the file without extracting the contents.
         - 

            - ``-v``
            - Set verbose output for the tool.
         - 

            - ``-about``
            - Display version and help information for the ``jobb`` tool.

   Last updated 2023-11-15 UTC.


/Jetifier
=========

   https://developer.android.google.cn/tools/jetifier?hl=en 

   .. container:: devsite-article-body clearfix

      The standalone Jetifier tool migrates support-library-dependent libraries to
      instead rely on the equivalent AndroidX packages. The tool lets you migrate
      an individual library directly instead of using the Android Gradle plugin
      bundled with Android Studio.

      **Note:**\  Before you begin the migration, update your library to use
      version 28.0.0 of the Support Library.
      .. rubric:: Install Jetifier
         :name: install

      To install Jetifier, `download the zip file <https://googledownloads.cn/dl/android/studio/jetifier-zips/1.0.0-beta10/jetifier-standalone.zip>`__
      and extract it. Your device must have Java version 1.8 or higher installed.

      .. rubric:: Usage
         :name: usage

      To process a library, pass the path to the current library and the path to
      the output file that the tool should create. Jetifier supports JAR, AAR, and
      ZIP files, including nested archives.

      .. code:: none

         ./jetifier-standalone -i <source-library> -o <output-library>

      .. rubric:: Options
         :name: options

      The following table lists the available options for the Jetifier tool
      commands:

      .. list-table::
         :widths: 27 27 27
         :header-rows: 1

         - 

            - Option
            - Required?
            - Description
         - 

            - ``-i``, ``--input`` ``<path>``
            - yes
            - Path to input library (JAR, AAR, or ZIP).
         - 

            - ``-o``, ``--output`` ``<path>``
            - yes
            - Path to the output file. If the file already exists, Jetifier
               overwrites it.
         - 

            - ``-c``, ``--config`` ``<path>``
            - no
            - Path to optional custom config file.
         - 

            - ``-l``, ``--log`` ``<level>``
            - no
            - Logging level. Allowed values are:

               -  error
               -  warning
               -  info
               -  verbose

               If not specified, defaults to "warning".
         - 

            - ``-r``
            - no
            - Operate in reverse mode ("de-jetification").
         - 

            - ``-rebuildTopOfTree``,
               ``--rebuildTopOfTree``
            - no
            - Rebuild the ZIP of Maven distribution according to the generated POM
               file.
               If set, all rewritten libraries are assumed to be part of Support
               Library. Not needed for jetification.
         - 

            - ``-s``, ``--strict``
            - no
            - Don't fallback when rules are missing; throw errors instead.
         - 

            - ``-stripSignatures``,
               ``--stripSignatures``
            - no
            - Don't throw an error when jetifying a signed library; strip the
               signature files instead.
         - 

            - ``-t``, ``-timestamp`` ``<arg>``
            - no
            - Timestamps policy to use for the archived entries as their modified
               time. Values: keepPrevious (default) epoch or now.

      .. rubric:: Example
         :name: example

      The following example runs the utility on the library
      ``libraryToProcess.aar`` in the current directory and writes the output to
      ``result.aar`` in the same directory:

      .. code:: none

         ./jetifier-standalone -i libraryToProcess.aar -o result.aar

      .. rubric:: Usage notes
         :name: notes

      Jetifier migrates Java, XML, POM, and ProGuard references that point to
      ``android.support.*`` packages, changing them so they point to the
      corresponding ``androidx.*`` packages.

      Since ProGuard wildcards for ``android.support.*`` don't always map directly
      to ``androidx.*`` packages, Jetifier produces all eligible substitutions.

      If there is a type in an ``android.support.*`` package that does not come
      from any Support Library artifact, Jetifier still migrates the type as long
      as there is a mapping for it. However, this migration is not guaranteed to
      work, as there might not be mapping rules general enough to cover all the
      custom types.

      .. rubric:: Advanced usage
         :name: advanced-usage

      The Jetifier utility supports some advanced use cases.

      .. rubric:: Reverse mode
         :name: reverse-mode

      If you pass the ``-r`` flag, the utility runs in *reverse mode*. In this
      mode, the utility converts AndroidX APIs to the Support Library equivalents.
      Reverse mode is useful if you are developing libraries that use AndroidX APIs
      but also need to distribute versions that use the Support Library.

      .. rubric:: Example
         :name: reverse-mode-example

      The following example runs the utility in reverse mode on the library
      ``myAndroidXLib.aar`` in the current directory and writes the output to
      ``supportLibVersion.aar`` in the same directory:

      .. code:: none

         ./jetifier-standalone -r -i myAndroidXLib.aar -o supportLibVersion.aar

      .. rubric:: Custom config file
         :name: custom-config

      The Jetifier tool uses a config file to map Support Library classes to their
      AndroidX equivalents. If necessary, you can make a custom config file that
      alters this mapping. You can even add new classes to the mapping that are not
      actually members of the Support Library. For example, you might modify the
      mapping to replace one of your own classes with a successor class written to
      use AndroidX.

      To use a custom config file:

      #. Extract the file ``default.generated.config`` from the utility's
         ``jetifier-core-*.jar`` file and save it.
      #. Make any necessary edits to your copy of the config file.
      #. Pass your file to the utility with the ``-c`` flag.

      For example:

      .. code:: none

         ./jetifier-standalone -i libraryToProcess.aar -o result.aar -c myCustomMapping.config

   Last updated 2023-04-12 UTC.


/Logcat command-line tool
=========================

   https://developer.android.google.cn/tools/logcat?hl=en 

.. code-block:: bash

   Usage: logcat [options] [filterspecs]
   options include:
     -s              Set default filter to silent. Equivalent to filterspec '*:S'
     -f <file>, --file=<file>               Log to file. Default is stdout
     -r <kbytes>, --rotate-kbytes=<kbytes>
                     Rotate log every kbytes. Requires -f option
     -n <count>, --rotate-count=<count>
                     Sets max number of rotated logs to <count>, default 4
     --id=<id>       If the signature id for logging to file changes, then clear
                     the fileset and continue
     -v <format>, --format=<format>
                     Sets log print format verb and adverbs, where <format> is:
                       brief help long process raw tag thread threadtime time
                     and individually flagged modifying adverbs can be added:
                       color descriptive epoch monotonic printable uid
                       usec UTC year zone
                     Multiple -v parameters or comma separated list of format and
                     format modifiers are allowed.
     -D, --dividers  Print dividers between each log buffer
     -c, --clear     Clear (flush) the entire log and exit
                     if Log to File specified, clear fileset instead
     -d              Dump the log and then exit (don't block)
     -e <expr>, --regex=<expr>
                     Only print lines where the log message matches <expr>
                     where <expr> is a Perl-compatible regular expression
     -m <count>, --max-count=<count>
                     Quit after printing <count> lines. This is meant to be
                     paired with --regex, but will work on its own.
     --print         Paired with --regex and --max-count to let content bypass
                     regex filter but still stop at number of matches.
     -t <count>      Print only the most recent <count> lines (implies -d)
     -t '<time>'     Print most recent lines since specified time (implies -d)
     -T <count>      Print only the most recent <count> lines (does not imply -d)
     -T '<time>'     Print most recent lines since specified time (not imply -d)
                     count is pure numerical, time is 'MM-DD hh:mm:ss.mmm...'
                     'YYYY-MM-DD hh:mm:ss.mmm...' or 'sssss.mmm...' format
     -g, --buffer-size                      Get the size of the ring buffer.
     -G <size>, --buffer-size=<size>
                     Set size of log ring buffer, may suffix with K or M.
     -L, --last      Dump logs from prior to last reboot
     -b <buffer>, --buffer=<buffer>         Request alternate ring buffer, 'main',
                     'system', 'radio', 'events', 'crash', 'default' or 'all'.
                     Additionally, 'kernel' for userdebug and eng builds, and
                     'security' for Device Owner installations.
                     Multiple -b parameters or comma separated list of buffers are
                     allowed. Buffers interleaved. Default -b main,system,crash.
     -B, --binary    Output the log in binary.
     -S, --statistics                       Output statistics.
     -p, --prune     Print prune white and ~black list. Service is specified as
                     UID, UID/PID or /PID. Weighed for quicker pruning if prefix
                     with ~, otherwise weighed for longevity if unadorned. All
                     other pruning activity is oldest first. Special case ~!
                     represents an automatic quicker pruning for the noisiest
                     UID as determined by the current statistics.
     -P '<list> ...', --prune='<list> ...'
                     Set prune white and ~black list, using same format as
                     listed above. Must be quoted.
     --pid=<pid>     Only prints logs from the given pid.
     --wrap          Sleep for 2 hours or when buffer about to wrap whichever
                     comes first. Improves efficiency of polling by providing
                     an about-to-wrap wakeup.

   filterspecs are a series of 
     <tag>[:priority]

   where <tag> is a log component tag (or * for all) and priority is:
     V    Verbose (default for <tag>)
     D    Debug (default for '*')
     I    Info
     W    Warn
     E    Error
     F    Fatal
     S    Silent (suppress all output)

   '*' by itself means '*:D' and <tag> by itself means <tag>:V.
   If no '*' filterspec or -s on command line, all filter defaults to '*:V'.
   eg: '*:S <tag>' prints only <tag>, '<tag>:S' suppresses all <tag> log messages.

   If not specified on the command line, filterspec is set from ANDROID_LOG_TAGS.

   If not specified with -v on command line, format is set from ANDROID_PRINTF_LOG
   or defaults to "threadtime"


.. container:: devsite-article-body clearfix

   Logcat is a command-line tool that dumps a log of system messages including
   messages that you have written from your app with the
   `Log <#>`__ class.

   This page is about the command-line ``logcat`` tool, but you can also view
   log messages from the **Logcat** window in Android Studio. For information
   about viewing and filtering logs from Android Studio, 
   see `View and write logs with Logcat <#>`__.

   .. rubric:: Logging system overview
      :name: Overview

   The Android logging system is a set of structured circular buffers maintained
   by the system process ``logd``. The set of available buffers is fixed and
   defined by the system. The most relevant buffers are:

   -  ``main``: Stores most application logs.
   -  ``system``: Stores messages originating from the Android OS.
   -  ``crash``: Stores crash logs. Each log entry has a priority, a tag that
      identifies the origin of the log, and the actual log message.

   The primary C/C++ interface to the logging system is the shared library
   ``liblog`` and its header ``<android/log.h>``. All language-specific logging
   facilities (including `android.util.Log <#>`__)
   eventually call the function ``__android_log_write``. By default, it calls
   the function ``__android_log_logd_logger``, which sends the log entry to
   ``logd`` using a socket. Starting with API level 30, the logging function can
   be changed by calling ``__android_set_log_writer``. More information is
   available in the `NDK documentation <https://developer.android.google.cn/ndk/reference/group/logging>`__.

   Logs displayed by ``adb logcat`` undergo four levels of filtering:

   Compile-time filtering
      Depending on compilation settings, some logs may be completely removed
      from the binary. For example, ProGuard can be configured to remove calls
      to ``Log.d`` from Java code.
   System property filtering
      ``liblog`` queries a set of system properties to determine the minimum
      severity level to be sent to ``logd``. If your logs have the tag
      ``MyApp``, the following properties are checked and are expected to
      contain the first letter of the minimum severity (``V``, ``D``, ``I``,
      ``W``, ``E``, or ``S`` to disable all logs):
   Application filtering
      If none of the properties are set, ``liblog`` uses the minimum priority
      set by ``__android_log_set_minimum_priority``. The default setting is
      ``INFO``.
   Display filtering
      ``adb logcat`` supports additional filters that can reduce the amount of
      logs shown from ``logd``. See the section about `filtering log output <#filteringOutput>`__ for more details.

   .. rubric:: Command-line syntax
      :name: Syntax

   To run ``logcat`` through the ``adb`` shell, the general usage is:

   .. code:: none

      [adb] shell logcat [<option>] ... [<filter-spec>] ...

   There is also a shorthand of ``adb logcat``, but that just expands to
   ``adb shell logcat``.

   .. rubric:: Options
      :name: options

   ``logcat`` has a lot of options. What options are available will depend on
   the OS version of the device you're using. To see help for ``logcat``
   specific to the device you're using, execute:

   .. code:: none

          adb logcat --help
          

   Note that because ``logcat`` is a tool for OS developers as well as app
   developers (with app developers expected to use Android Studio instead) many
   of the options are only usable as ``root``.

   .. rubric:: Filter log output
      :name: filteringOutput

   The tag of a log message is a short string that indicates the system
   component where the message originates. For example, "View" for the view
   system.

   The priority is one of the following character values, ordered from lowest to
   highest priority:

   -  ``V``: Verbose (lowest priority)
   -  ``D``: Debug
   -  ``I``: Info
   -  ``W``: Warning
   -  ``E``: Error
   -  ``F``: Fatal
   -  ``S``: Silent (highest priority, where nothing is ever printed)

   To obtain a list of tags used in the system with priorities, run ``logcat``
   and observe the first two columns of each message, given as
   ``<priority>/<tag>``.

   The following is an example of brief ``logcat`` output obtained with the
   ``logcat -v brief output`` command. The output shows that the message relates
   to priority level "I" and tag "ActivityManager":

   .. code:: none

      I/ActivityManager(  585): Starting activity: Intent { action=android.intent.action...}

   To reduce the log output to a manageable level, restrict log output using
   *filter expressions*. Filter expressions let you indicate to the system the
   tag-priority combinations that you are interested in. The system suppresses
   other messages for the specified tags.

   A filter expression follows this format ``tag:priority ...``, where ``tag``
   indicates the tag of interest and ``priority`` indicates the minimum level of
   priority to report for that tag. Messages for that tag at or above the
   specified priority are written to the log. Supply any number of
   ``tag:priority`` specifications in a single filter expression. The series of
   specifications is whitespace-delimited.

   The following is an example of a filter expression that suppresses all log
   messages except those with the tag "ActivityManager" at priority "Info" or
   above and those with the tag "MyApp" with priority "Debug" or above:

   .. code:: none

      adb logcat ActivityManager:I MyApp:D *:S

   The final element in the preceding expression, ``*:S``, sets the priority
   level for all tags to "silent", which ensures that only log messages with
   "ActivityManager" and "MyApp" are displayed. Using ``*:S`` ensures that log
   output is restricted to the filters that you have explicitly specified.
   ``*:S`` lets your filters serve as an allowlist for log output.

   **Note:** In some shells, the "``*``" character is reserved by the shell. If
   you are using such a shell, enclose the filter expression in quotes:
   ``adb logcat "ActivityManager:I MyApp:D *:S"``

   The following filter expression displays all log messages with priority level
   "warning" and higher on all tags:

   .. code:: none

      adb logcat *:W

   If you're running ``logcat`` from your development computer instead of
   running it on a remote ``adb`` shell, you can also set a default filter
   expression by exporting a value for the environment variable
   ``ANDROID_LOG_TAGS``:

   .. code:: none

      export ANDROID_LOG_TAGS="ActivityManager:I MyApp:D *:S"

   The ``ANDROID_LOG_TAGS`` filter is not exported to the emulator/device
   instance if you are running ``logcat`` from a remote shell or using
   ``adb shell logcat``.

   .. rubric:: Control log output format
      :name: outputFormat

   Log messages contain a number of metadata fields in addition to the tag and
   priority. You can modify the output format for messages so that they display
   a specific metadata field. To do so, use the ``-v`` option and specify one of
   the following supported output formats:

   -  ``brief``: Displays priority, tag, and PID of the process issuing the
      message.
   -  ``long``: Displays all metadata fields and separate messages with blank
      lines.
   -  ``process``: Displays PID only.
   -  ``raw``: Displays the raw log message with no other metadata fields.
   -  ``tag``: Displays the priority and tag only.
   -  ``thread:`` A legacy format that shows priority, PID, and TID of the
      thread issuing the message.
   -  ``threadtime`` (default): Displays the date, invocation time, priority,
      tag, PID, and TID of the thread issuing the message.
   -  ``time``: Displays the date, invocation time, priority, tag, and PID of
      the process issuing the message.

   When starting ``logcat``, specify the output format you want by using the
   ``-v`` option:

   .. code:: none

      [adb] logcat [-v <format>]

   Here's an example that shows how to generate messages in ``thread`` output
   format:

   .. code:: none

      adb logcat -v thread

   You can only specify one output format with the ``-v`` option. However, you
   can specify as many modifiers as you need, provided they make sense.
   ``logcat`` ignores modifiers that don't make sense.

   .. rubric:: Format modifiers
      :name: formatmodify

   Format modifiers change the ``logcat`` output. To specify a format modifier,
   use the ``-v`` option, as follows:

   .. code:: none

      adb logcat -b all -v color -d

   Every Android log message has a tag and a priority associated with it. You
   can combine any format modifier with any one of the following format options:

   -  ``brief``
   -  ``long``
   -  ``process``
   -  ``raw``
   -  ``tag``
   -  ``thread``
   -  ``threadtime``
   -  ``time``

   To format the following modifier details, enter ``logcat -v --help`` at the
   command line:

   -  ``color``: Shows each priority level with a different color.
   -  ``descriptive``: Shows log buffer event descriptions. This modifier
      affects event log buffer messages only and has no effect on the other
      non-binary buffers. The event descriptions come from the event-log-tags
      database.
   -  ``epoch``: Displays time in seconds starting from Jan 1, 1970.
   -  ``monotonic``: Displays time in CPU seconds starting from the last boot.
   -  ``printable``: Ensures that any binary logging content is escaped.
   -  ``uid``: If permitted by access controls, displays the UID or Android ID
      of the logged process.
   -  ``usec``: Displays the time, with precision in microseconds.
   -  ``UTC``: Displays the time as UTC.
   -  ``year``: Adds the year to the displayed time.
   -  ``zone``: Adds the local time zone to the displayed time.

   .. rubric:: View alternative log buffers
      :name: alternativeBuffers

   The Android logging system keeps multiple circular buffers for log messages,
   and not all of log messages are sent to the default circular buffer. To see
   additional log messages, run the ``logcat`` command with the ``-b`` option to
   request viewing of an alternate circular buffer. You can view any of these
   alternate buffers:

   -  ``radio``: Views the buffer that contains radio/telephony related
      messages.
   -  ``events``: Views the interpreted binary system event buffer messages.
   -  ``main``: Views the main log buffer (default), which doesn't contain
      system and crash log messages.
   -  ``system``: Views the system log buffer (default).
   -  ``crash``: Views the crash log buffer (default).
   -  ``all``: Views all buffers.
   -  ``default``: Reports ``main``, ``system``, and ``crash`` buffers.

   The usage of the ``-b`` option is:

   .. code:: none

      [adb] logcat [-b <buffer>]

   Here is an example of how to view a log buffer containing radio and telephony
   messages:

   .. code:: none

      adb logcat -b radio

   To specify multiple ``-b`` flags for all the buffers you want to print, enter
   the following:

   .. code:: none

      logcat -b main -b radio -b events

   Specify a single ``-b`` flag with a comma-separated list of buffers, for
   example:

   .. code:: none

      logcat -b main,radio,events

   .. rubric:: Log from code
      :name: logClass

   The `Log <#>`__ class lets you create log
   entries in your code that display in the ``logcat`` tool. Common logging
   methods include:

   -  `Log.v(String, String) <#v(java.lang.String,%20java.lang.String)>`__
      (verbose)
   -  `Log.d(String, String) <#d(java.lang.String,%20java.lang.String)>`__
      (debug)
   -  `Log.i(String, String) <#i(java.lang.String,%20java.lang.String)>`__
      (information)
   -  `Log.w(String, String) <#w(java.lang.String,%20java.lang.String)>`__
      (warning)
   -  `Log.e(String, String) <#e(java.lang.String,%20java.lang.String)>`__
      (error)

   For example, using the following call:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: prettyprint

               Log.i("MyActivity", "MyClass.getView() — get item number $position")

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: prettyprint

               Log.i("MyActivity", "MyClass.getView() — get item number " + position);

   ``logcat`` outputs something similar to the following:

   .. code:: none

      I/MyActivity( 1557): MyClass.getView() — get item number 1

   Last updated 2024-01-03 UTC.


/mksdcard
=========

   https://developer.android.google.cn/tools/mksdcard?hl=en 

   .. container:: devsite-article-body clearfix

      Use the ``mksdcard`` tool to create a FAT32 disk image that you can load into
      emulators running different Android Virtual Devices (AVDs) to simulate the
      presence of the same SD card in multiple devices.

      The ``mksdcard`` tool provided in the Android SDK Tools package is located in
      ``android-sdk /emulator/ mksdcard``.

      If you don't need a disk image that can be shared among multiple virtual
      devices, you don't need to use the ``mksdcard`` command. By default, the
      emulator uses the default image that is generated by and stored with the
      active AVD instead.

      .. rubric:: Usage
         :name: usage

      To use the ``mksdcard`` tool, use the following command:

      .. code:: none

         mksdcard -l label size file

      .. rubric:: Options
         :name: options

      The following table describes the command-line options of ``mksdcard``:

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Option
            - Description
         - 

            - ``-l label``
            - A volume label for the disk image to create
         - 

            - ``size``
            - An integer that specifies the size of the disk image to create.

               If ``size`` is a simple integer, it specifies the size in bytes. You
               can also specify the size in kilobytes, megabytes, or gigabytes by
               appending K, M, or G to ``size``. For example, ``1048576K`` or
               ``1024M``. The minimum size is 9M. The Android emulator cannot use
               smaller images. The maximum size is 1099511627264 bytes, which
               equates to 1023 GB.
         - 

            - ``file``
            - The path/filename of the disk image to create relative to the current
               working directory.

      .. rubric:: Example
         :name: example

      Create the ``mySdCardFile.img`` disk image:

      .. code:: none

         mksdcard -l mySdCard 1024M mySdCardFile.img

      Start two emulators with different AVDs. Use the ``-sdcard`` flag to specify
      the name and path of the disk image you created:

      .. code:: none

         emulator -avd Pixel_API_25 -sdcard mySdCardFile.img
         emulator -avd NEXUS_6_API_25 -sdcard mySdCardFile.img

      For more information about the ``emulator`` command and its options, see
      `Start the emulator from the command line <#>`__.

   Last updated 2023-04-12 UTC.


/R8 retrace
===========

   https://developer.android.google.cn/tools/retrace?hl=en 

   .. container:: devsite-article-body clearfix

      R8 retrace is a tool for obtaining the original stack trace from an
      obfuscated stack trace. The stack trace is reconstructed by matching class
      and method names in a mapping file to their original definitions.

      **Note:** R8 retrace is a standalone tool in version 4.0 of the command-line
      tools package, released with Android Studio 4.2.
      To download the command-line tools package with the SDK Manager, 
      see `Update your tools with the SDK Manager <#sdk-manager>`__. The
      SDK Manager installs R8 retrace in
      ``cmdline-tools/ version /bin/``.

      To download the command-line tools package using the command line, see
      `sdkmanager <#>`__.

      .. rubric:: Usage
         :name: usage

      To retrace an obfuscated stack trace, pass the mapping file to ``retrace``:

      .. code:: devsite-click-to-copy

         retrace  path-to-mapping-file [path-to-stack-trace-file] [options] 

      If no stack trace file is given on the command line, R8 retrace waits for the
      stack trace to be entered by the user through standard input. After input,
      terminate the input stream:

      -  **Linux, macOS:** Control+D
      -  **Windows:** Control+Z+Enter

      The retraced output is then written to standard output.

      .. rubric:: Options
         :name: options

      The following table describes the command-line options of R8 retrace:

      .. list-table::
         :widths: 27 27 27
         :header-rows: 1

         - 

            - Option
            - Required?
            - Description
         - 

            - ``--verbose``
            - no
            - Prints more information, such as method parameters and method return
               type.
         - 

            - ``--info``
            - no
            - Sets the diagnostic level to ``info``. For a more in-depth look,
               refer to
               `DiagnosticsHandler <https://r8.googlesource.com/r8/+/refs/heads/main/src/main/java/com/android/tools/r8/DiagnosticsHandler.java>`__.
         - 

            - ``--quiet``
            - no
            - Reduces the amount of information printed to increase focus.
         - 

            - ``--regex <regular_exp>``
            - no
            - Overwrites the default regular expression for parsing stack trace
               lines. For example, the following is a regex that can parse basic
               stack traces:
               ``(?:.*? at %c\.%m\(%s(?::%l)?\))|(?:(?:.*?[:"] +)?%c(?::.*)?)``.

      .. rubric:: Usage notes
         :name: notes

      R8 retrace uses a generated mapping file for mapping obfuscated class and
      method names back to the original definition. For more information about
      shrinking your app so that it can be retraced correctly, 
      see `Decode an obfuscated stack trace <#decode-stack-trace>`__.

   Last updated 2023-04-12 UTC.


/sdkmanager
===========

   https://developer.android.google.cn/tools/sdkmanager?hl=en 

   .. container:: devsite-article-body clearfix

      The ``sdkmanager`` is a command-line tool that lets you view, install,
      update, and uninstall packages for the Android SDK. If you're using Android
      Studio, then you don't need to use this tool, and you can instead 
      `manage your SDK packages from the IDE <#sdk-manager>`__.

      The ``sdkmanager`` tool is provided in the 
      `Android SDK Command-Line Tools <#tools-sdk>`__ package. To use the SDK Manager to
      install a version of the command-line tools, follow these steps:

      #. Download the latest "command line tools only" package from the 
      `Android Studio downloads page <#>`__ and unzip the package.

      #. Move the unzipped ``cmdline-tools`` directory into a new directory of your
         choice, such as ``android_sdk``. This new directory is your Android SDK
         directory.

      #. In the unzipped ``cmdline-tools`` directory, create a sub-directory called
         ``latest``.

      #. Move the original ``cmdline-tools`` directory contents, including the
         ``lib`` directory, ``bin`` directory, ``NOTICE.txt`` file, and
         ``source.properties`` file, into the newly created ``latest`` directory.
         You can now use the command-line tools from this location.

      #. (Optional) To install a previous version of the command-line tools, run
         the following command:

         .. code:: devsite-terminal

            android_sdk/cmdline-tools/latest/bin/sdkmanager --install "cmdline-tools;version"

         Substitute ``version`` with the version you want to install, for example
         ``5.0``.

         **Note:** For local usage, you can use the ``latest`` packages. For
         scripts, choose a specific version instead to ensure stability.

      .. rubric:: Usage
         :name: usage

      You can use the ``sdkmanager`` to list installed and available packages,
      install packages, and update packages. For more details, see the following
      sections.

      .. rubric:: List installed and available packages
         :name: list

      To list installed and available packages, use the following syntax:

      .. code:: none

         sdkmanager --list [options] \
                    [--channel=channel_id] // Channels: 0 (stable), 1 (beta), 2 (dev), or 3 (canary)

      Use the ``channel`` option to include a package from a channel up to and
      including ``channel_id``. For example, specify the canary channel to list
      packages from all channels.

      **Note:**\  To list only stable packages, use ``--channel=0`` or remove the
      ``--channel`` option entirely.
      .. rubric:: Install packages
         :name: install

      To install packages, use the following syntax:

      .. code:: none

         sdkmanager packages [options]

      The ``packages`` argument is an SDK-style path, as shown with the ``--list``
      command, wrapped in quotes. For example, ``"build-tools;34.0.0"`` or
      ``"platforms;android-33"``.

      You can pass multiple package paths, separated with a space, but they must
      each be wrapped in their own set of quotes. For example, here's how to
      install the latest platform tools and the SDK tools for API level 33:

      .. code:: devsite-click-to-copy

         sdkmanager "platform-tools" "platforms;android-33"

      Alternatively, you can pass a text file that specifies all packages:

      .. code:: none

         sdkmanager --package_file=package_file [options]

      The ``package_file`` argument is the location of a text file in which each
      line is an SDK-style path of a package to install (without quotes).

      To uninstall, add the ``--uninstall`` flag:

      .. code:: none

         sdkmanager --uninstall packages [options]
         sdkmanager --uninstall --package_file=package_file [options]

      To install CMake or the NDK, use the following syntax:

      .. code:: prettyprint

         sdkmanager --install
                    ["ndk;major.minor.build[suffix]" | "cmake;major.minor.micro.build"]
                    [--channel=channel_id] // NDK channels: 0 (stable), 1 (beta), or 3 (canary)

      For example, use the following command to install the specified NDK version
      regardless of which channel it is currently on:

      .. code:: prettyprint

         sdkmanager --install "ndk;21.3.6528147" --channel=3 // Install the NDK from the canary channel (or below)
         sdkmanager --install "cmake;10.24988404" // Install a specific version of CMake

      .. rubric:: Update all installed packages
         :name: update-all

      To update all installed packages, use the following syntax:

      .. code:: none

         sdkmanager --update [options]

      .. rubric:: Accept licenses
         :name: accept-licenses

      You are required to accept the necessary license for each package you have
      installed. This step occurs during the installation flow when you install
      packages from within Android Studio.

      If you don't have Android Studio installed, or it is for a CI server or other
      headless Linux device without a GUI installed, do the following from the
      command-line:

      .. code:: prettyprint

         sdkmanager --licenses

      This prompts you to accept any licenses that haven't already been accepted.

      .. rubric:: Options
         :name: options

      The following table lists the available options for the commands listed in
      the preceding section:

   .. list-table::
      :widths: 20
      :header-rows: 1

      -
         -  Option
         -  Description

      -
         -  ``--sdk_root= path``
         -
            Use the specified SDK path instead of the SDK containing this tool.

      -
         -  ``--channel= channel_id``
         -
            Include packages in channels up to and including channel_id. Available channels
            are:

            ``0`` (Stable), ``1`` (Beta), ``2`` (Dev), and ``3`` (Canary).

      -
         -  ``--include_obsolete``
         -

            Include obsolete packages in the package listing or package updates. For use
            with ``--list`` and ``--update`` only.

      -
         -  ``--no_https``
         -

            Force all connections to use HTTP rather than HTTPS.

      -
         -  ``--newer``
         -

            With ``--list``, show only new or updatable packages.

      -
         -  ``--verbose``
         -

            Verbose output mode. Errors, warnings and informational messages are printed.

      -
         -  ``--proxy={http | socks}``
         -

            Connect via a proxy of the given type: either ``http`` for high level protocols
            such as HTTP or FTP, or ``socks`` for a SOCKS (V4 or V5) proxy.

      -
         -  ``--proxy_host={ IP_address | DNS_address }``
         -

            IP or DNS address of the proxy to use.

      -
         -  ``--proxy_port= port_number``
         -

            Proxy port number to connect to.

   **Note:**\  If you want to install packages for an operating system different
   from the current machine, set the
   `REPO_OS_OVERRIDE <#repo_os_override>`__
   environment variable to either ``"windows"``, ``"macosx"``, or ``"linux"``.

   Last updated 2024-05-03 UTC.


/sqlite3
========

   https://developer.android.google.cn/tools/sqlite3?hl=en 

   .. container:: devsite-article-body clearfix

      From a remote shell to your device or from your host machine, use the
      `sqlite3 <https://www.sqlite.org/>`__ command-line program to manage
      SQLite databases created by Android applications. The ``sqlite3`` tool
      includes many useful commands, such as ``.dump`` to print out the contents of
      a table and ``.schema`` to print the SQL CREATE statement for an existing
      table. The tool also gives you the ability to execute SQLite commands on the
      fly.

      Refer to the `SQLite documentation <https://sqlite.org/docs.html>`__ for full
      details. For additional documentation, visit
      `sqlite3 <https://sqlite.org/cli.html>`__ and the `SQL language specification <https://sqlite.org/lang.html>`__ supported by SQLite.

      To use ``sqlite3`` from a remote shell:

      #. Enter a remote shell by entering the following command:

         .. code:: none

            adb [-d|-e|-s {<serialNumber>}] shell

      #. From the remote shell, start the ``sqlite3`` tool by entering the
         following command:

         .. code:: none

            sqlite3

         You can also optionally specify a full path to a database that you want to
         explore. Emulator/device instances store SQLite databases in the directory
         ``/data/data/<package_name>/databases/``.

      #. Once you invoke ``sqlite3``, you can issue commands in the shell. To exit
         and return to the adb remote shell, enter ``exit`` or press Control+D.

      For example:

      .. code:: none

         $ adb -s emulator-5554 shell
         # sqlite3 /data/data/com.example.google.rss.rssexample/databases/rssitems.db
         SQLite version 3.3.12
         Enter ".help" for instructions
         .... enter commands, then quit...
         # sqlite> .exit

      **Note:** You need root access to the file system to view files within the
      ``/data/data`` directory hierarchy.

      To use ``sqlite3`` locally, instead of within a shell, pull the database file
      from the device and start ``sqlite3``:

      #. Copy a database file from your device to your host machine:

         .. code:: none

            adb pull <database-file-on-device>

      #. Start the ``sqlite3`` tool, specifying the database file:

         .. code:: none

            sqlite3 <database-file-on-host>

   Last updated 2023-04-12 UTC.

   ::https://developer.android.google.cn/tools/systrace?hl=en


/perfetto
=========

   https://developer.android.google.cn/tools/perfetto?hl=en 

   .. container:: devsite-article-body clearfix

      ``perfetto`` is a tool that lets you collect performance information from
      Android devices via the `Android Debug Bridge (ADB) <#>`__. 
      Invoke the ``perfetto`` tool using the
      ``adb shell perfetto ...`` command. ``perfetto`` uses various sources to
      collect performance traces from your device, such as:

      -  ``ftrace`` for information from the kernel
      -  ``atrace`` for user-space annotation in services and apps
      -  ``heapprofd`` for native memory usage information of services and apps

      This page describes how to call ``perfetto`` and configure it to generate the
      desired output. For further information, refer to the 
      `perfetto documentation <https://perfetto.dev/docs>`__.

      .. rubric:: Syntax
         :name: syntax

      This section describes how to use ADB to call ``perfetto`` for different
      modes and generate a trace.

      .. rubric:: Data source selection
         :name: data_source_selection

      ``perfetto`` includes the following two modes that determine the data sources
      it uses to record your trace:

      -  **light mode**: can select only a subset of data sources, specifically
         ``atrace`` and ``ftrace``. However, this mode offers an interface similar
         to `systrace <#>`__.
      -  **normal mode**: gets its configuration in a protocol buffer and lets you
         leverage more of ``perfetto``'s functionality by using data sources
         different from ``atrace`` and ``ftrace``.

      .. rubric:: General options
         :name: options

      The following table lists the available options when using ``perfetto`` in
      either mode:

      **Table 1.** List of available general perfetto tool options.

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Option
            - Description
         - 

            - ``--background |``
               ``-d``
            - ``perfetto`` immediately exits the command-line interface and
               continues recording your trace in background.
         - 

            - ``--background-wait | -D``
            - Like ``--background``, but waits (up to 30s) for all data sources to
               start before exiting. Exit code is zero if a successful
               acknowledgement is received and non-zero otherwise (error or
               timeout).
         - 

            - ``--alert-id``
            - ID of the alert that triggered this trace.
         - 

            - ``--config-id``
            - ID of the triggering config.
         - 

            - ``--config-uid``
            - UID of the app that registered the config.
         - 

            - ``--subscription-id``
            - ID of the subscription that triggered this trace.
         - 

            - ``--out OUT_FILE |``
               ``-o OUT_FILE``
            - Specifies the desired path to the output trace file or ``-`` for
               ``stdout``. ``perfetto`` writes the output to the file described in
               the preceding flags. The output format compiles with the format
               defined in `AOSP trace.proto <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/trace.proto>`__.

               *Note:* You must specify the full pathname of the output file.
               Typically the files should be written to the
               ``/data/misc/perfetto-traces`` folder.
         - 

            - ``--upload``
            - On completion, passes the trace to the package specified by the
               ``IncidentReportConfig`` message in the proto trace config.
         - 

            - ``--no-guardrails``
            - Disables protections against excessive resource usage when enabling
               the ``--upload`` flag during testing.
         - 

            - ``--reset-guardrails``
            - Resets the persistent state of the guardrails and exits for testing.
         - 

            - ``--rsave-for-bugreport``
            - If a trace with ``bugreport_score`` > 0 is running, saves the trace
               into a file. Outputs the path when done.
         - 

            - ``--query``
            - Queries the service state and prints it as human-readable text.
         - 

            - ``--query-raw``
            - Similar to ``--query``, but prints raw proto-encoded bytes of
               ``tracing_service_state.proto.``
         - 

            - ``--help | -h``
            - Prints out help text for the ``perfetto`` tool.

      .. rubric:: Light mode
         :name: light_mode

      The general syntax for using ``perfetto`` in light mode is as follows:

      .. code:: none

          adb shell perfetto [ --time TIMESPEC ] [ --buffer SIZE ] [ --size SIZE ]
                      [ ATRACE_CAT | FTRACE_GROUP/FTRACE_NAME | FTRACE_GROUP/* ]...
                      --out FILE

      The following table lists the available options when using ``perfetto`` in
      light mode:

      **Table 2.** List of available ``perfetto`` tool options when using light
      mode.

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Option
            - Description
         - 

            - ``--time TIME [s|m|h] |``
               ``-t TIME [s|m|h]``
            - Specifies the trace duration in seconds, minutes, or hours. For
               example, ``--time 1m`` specifies a trace duration of 1 minute. The
               default duration is 10 seconds.
         - 

            - ``--buffer SIZE [mb|gb] |``
               ``-b SIZE [mb|gb]``
            - Specifies the ring buffer size in megabytes (mb) or gigabytes (gb).
               The default parameter is ``--buffer 32mb``.
         - 

            - ``--size SIZE [mb|gb] |``
               ``-s SIZE [mb|gb]``
            - Specifies the max file size in megabytes (mb) or gigabytes (gb). By
               default, ``perfetto`` uses only in-memory ring-buffer.
         - 

            - ``--app | -a``
            - Android (atrace) app name

      These options are followed by a list of event specifiers:

      **Table 3.** List of event specifiers for light mode.

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Event
            - Description
         - 

            - ``ATRACE_CAT``
            - Specifies the ``atrace`` categories you want to record a trace for.
               For example, the following command traces Window Manager using
               ``atrace``:
               .. code:: none

                      adb shell perfetto --out FILE wm
                      

               To record other categories, see this 
               `list of atrace categories <https://android.googlesource.com/platform/frameworks/native/+/refs/tags/android-q-preview-5/cmds/atrace/atrace.cpp#100>`__.
         - 

            - ``FTRACE_GROUP/FTRACE_NAME``
            - Specifies the ``ftrace`` events you want to record a trace for. For
               example, the following command traces ``sched/sched_switch`` events:
               .. code:: none

                        adb shell perfetto --out FILE sched/sched_switch
                        

      .. rubric:: Normal mode
         :name: normal

      The general syntax for using ``perfetto`` in normal mode is as follows:

      .. code:: none

          adb shell perfetto [ --txt ] --config CONFIG_FILE --out FILE

      The following table lists the available options when using ``perfetto`` in
      normal mode:

      **Table 4.** List of available ``perfetto`` tool options when using normal
      mode.

      .. list-table::
         :widths: 40 40
         :header-rows: 1

         - 

            - Option
            - Description
         - 

            - ``--config CONFIG_FILE | -c CONFIG_FILE``
            - Specifies the path to a configuration file. In normal mode, some
               configurations may be encoded in a configuration protocol buffer.
               This file must comply with the protocol buffer schema defined in
               `AOSP trace_config.proto <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/config/trace_config.proto>`__.
               Select and configure the data sources using the ``DataSourceConfig``
               member of the ``TraceConfig``, as defined in `AOSP data_source_config.proto <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/config/data_source_config.proto>`__.
         - 

            - ``--txt``
            - Instructs ``perfetto`` to parse the config file as ``pbtxt``. This
               flag is intended for local testing only, and it's not recommended
               that you enable it for production.

      .. rubric:: Supported data sources
         :name: data_sources

      This section describes the different sources that ``perfetto`` uses to
      generate your trace.

      .. rubric:: ftrace
         :name: ftrace

      The ``ftrace`` data source allows ``perfetto`` to get events from the kernel.

      Enable this source by setting
      `ftrace_config <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/config/ftrace/ftrace_config.proto>`__
      in the DataSourceConfig.

      The events that can be enabled include:

      -  `Scheduling activity <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/ftrace/sched.proto>`__:

         -  ``sched/sched_switch``
         -  ``sched/sched_wakeup``
         -  ``sched/sched_wakeup_new``
         -  ``sched/sched_process_exec``
         -  ``sched/sched_process_exit``
         -  ``sched/sched_process_fork``
         -  ``sched/sched_process_free``
         -  ``sched/sched_process_hang``
         -  ``sched/sched_process_wait``

      -  Filesystem events:

         -  `ext4 <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/ftrace/ext4.proto>`__
         -  `f2fs <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/ftrace/f2fs.proto>`__
         -  `block <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/ftrace/block.proto>`__

      -  `atrace events <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/ftrace/print.proto>`__

      Depending on your device, OS version, or kernel, more events might be
      available. For more information, refer to the `config protos <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/ftrace/>`__.

      .. rubric:: Process Stats
         :name: process_stats

      The process stats data source allows you to get polled counters about the
      system and individual processes.

      Enable this source by setting
      `process_stats_config <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/config/process_stats/process_stats_config.proto>`__
      and
      `sys_stats_config <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/config/sys_stats/sys_stats_config.proto>`__
      in the DataSourceConfig.

      The data that ``perfetto`` generates includes:

      -  `System-wide <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/sys_stats/sys_stats.proto>`__

         -  ``/proc/meminfo``
         -  ``/proc/vmstat``
         -  ``/proc/stat``

      -  `Per process <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/ps/process_stats.proto>`__

         -  ``/proc/\<pid\>/status``
         -  ``/proc/\<pid\>/oom_score_adj``

      Depending on your device, OS version, and kernel, more events might be
      available. To learn more, refer to the config protos for
      `sys_stats <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/config/sys_stats/sys_stats_config.proto>`__
      and
      `process_stats <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/config/process_stats/process_stats_config.proto>`__.

      .. rubric:: ``heapprofd``
         :name: heapprofd

      ``heapprofd`` lets you sample the causes of native memory use.

      Enable this source by setting
      `heapprofd_config <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/config/profiling/heapprofd_config.proto>`__
      in the DataSourceConfig. This setting produces
      `ProfilePackets <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/profiling/profile_packet.proto>`__,
      including the Java frames of the callstack.

      Additional information on how to use ``heapprofd`` can be found at
      `perfetto.dev <https://docs.perfetto.dev/#heapprofd>`__.

      .. rubric:: Other sources
         :name: other_sources

      Depending on your device, OS version, and kernel, more data sources might be
      available. To learn more, refer to the `data source config protos <https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/config/data_source_config.proto>`__.

      Additional information about ``perfetto`` can be found at
      `perfetto.dev <https://perfetto.dev>`__.

   Last updated 2023-04-12 UTC.


/zipalign
=========

   https://developer.android.google.cn/tools/zipalign?hl=en 

   .. container:: devsite-article-body clearfix

      ``zipalign`` is a zip archive alignment tool that helps ensure that all
      uncompressed files in the archive are aligned relative to the start of the
      file. This lets the files be accessed directly via
      `mmap(2) <https://man7.org/linux/man-pages/man2/mmap.2.html>`__\ ``,
      removing the need to copy this data in RAM and reducing your app's memory
      usage.

      Use ``zipalign`` to optimize your APK file before distributing it to end
      users. If you build using Android Studio, which uses the Android Gradle
      plugin (AGP), this is done automatically. In this case, you should still use
      ``zipalign`` to verify that the APK is aligned, but you don't need to align
      it. This documentation is mainly for maintainers of custom build systems.

      .. caution::

         **Caution:** You must use ``zipalign`` at a specific point in the build
         process. That point depends on which app-signing tool you use:

         -  If you use `apksigner <#>`__,
            ``zipalign`` must be used **before** the APK file has been signed. If
            you sign your APK using ``apksigner`` and make further changes to the
            APK, its signature is invalidated.
         -  If you use
            `jarsigner <#>`__
            (not recommended), ``zipalign`` must be used **after** the APK file has
            been signed.

      To achieve alignment, ``zipalign`` alters the size of the ``"extra"`` field
      in the zip **Local File Header** sections. This process can also alter
      existing data in the ``"extra"`` fields.

      .. rubric:: Usage
         :name: usage

      If your APK contains shared libraries (``.so`` files), use ``-p`` to ensure
      that they're aligned to a 4KiB page boundary suitable for ``mmap(2)``. For
      other files, whose alignment is determined by the mandatory alignment
      argument to ``zipalign``, Android Studio aligns to 4 bytes on both 32-bit and
      64-bit systems.

      To align ``infile.apk`` and save it as ``outfile.apk``:

      .. code:: none

         zipalign -p -f -v 4 infile.apk outfile.apk

      To confirm the alignment of ``existing.apk``, use the following command. If
      you use Android Studio or AGP to build, this is the command you should use to
      verify that your APK is aligned.

      .. code:: none

         zipalign -c -v 4 existing.apk

      .. rubric:: Options
         :name: options

      The following table lists the available ``zipalign`` options:

      =======   ===================================
      Option    Description
      =======   ===================================
      \ -c      Checks alignment only (does not modify file).
      \ -f      Overwrites existing output file.
      \ -h      Displays tool help.
      \ -p      Page-aligns uncompressed ``.so`` files.
      \ -v      Verbose output.
      \ -z      Recompresses using Zopfli.
      =======   ===================================

   Last updated 2023-04-12 UTC.


/Environment variables
======================

   https://developer.android.google.cn/tools/variables?hl=en 

   .. container:: devsite-article-body clearfix

      You can configure the behavior of Android Studio and the command-line tools
      by setting environment variables. One of the most useful environment
      variables to set is `ANDROID_HOME <#android_home>`__, which many tools
      read to determine the Android SDK installation directory. To run tools from
      the command line without including the full path to the executable, set your
      command search path environment variable to include
      ``ANDROID_HOME /tools``, ``ANDROID_HOME /tools/bin``, and
      ``ANDROID_HOME /platform-tools``.

      .. rubric:: How to set environment variables
         :name: set

      The following examples show how to set environment variables in a terminal
      window and in a shell script for different operating systems. Variable
      settings in terminal windows last only as long as the window is open. On
      macOS and Linux, each time a new shell starts, variable settings are set in
      shell initialization scripts. On Windows, variable settings can be set
      through the system settings.

      **Windows:** In a terminal window, type the following:

      .. code:: none

         set HTTP_PROXY=myserver:1981

      Alternately, add it through the Windows UI. Check the documentation for your
      version of Windows to learn how.

      **macOS and Linux:** The precise method of setting environment variables
      depends on which shell you are using. To determine which shell type is
      running, type the following:

      .. code:: none

         echo $0

      In shells such as `Gnu Bash <https://www.gnu.org/software/bash/>`__ or
      `Zsh <https://zsh.org>`__, variables are set using the following syntax:

      .. code:: none

         export VARIABLE_NAME=<new-value>

      In other shells, such as `TCSH <https://www.tcsh.org/>`__, variables are set
      using the following syntax:

      .. code:: none

         setenv VARIABLE_NAME <new-value>

      These commands can be added to the shell initialization script to set the
      variables each time a new shell instance is run.

      The location of the shell initialization script depends on the shell being
      used. For Gnu Bash, the location can be ``~/.bash_profile``. For Zsh, the
      location can be ``~/.zprofile``. For TCSH, the location can be ``~/.cshrc``.
      Check the documentation for the shell that you're using to be sure.

      You can also update the ``PATH`` environment variable to include the tool
      locations.

      For Gnu Bash or Zsh:

      .. code:: none

         export ANDROID_HOME ~/Library/Android/sdk
         export PATH $PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
           

      And for TCSH:

      .. code:: none

         setenv ANDROID_HOME ~/Library/Android/sdk
         setenv PATH $PATH\:$ANDROID_HOME/tools\:$ANDROID_HOME/tools/bin\:$ANDROID_HOME/platform-tools
           

      .. rubric:: Variables reference
         :name: envar

      The following table describes commonly used environment variables for the
      Android SDK tools.

      **Table 1.** Environment variables

      .. list-table::
         :widths: 20
         :header-rows: 1

         -
            -  Android SDK environment variables
            -  

         -
            -  ``ANDROID_HOME``
            -

               Sets the path to the SDK installation directory. Once set, the value does not
               typically change and can be shared by multiple users on the same machine.
               ``ANDROID_SDK_ROOT``, which also points to the SDK installation directory, is
               deprecated. If you continue to use it, Android Studio and the Android Gradle
               plugin will check that the old and new variables are consistent.

         -
            -  ``ANDROID_USER_HOME``
            -

               Sets the path to the user preferences directory for tools that are part of the
               Android SDK. Defaults to ``$HOME/.android/``.

               Some older tools, such as Android Studio 4.3 and earlier, do not read
               ``ANDROID_USER_HOME``. To override the user preferences location for those older
               tools, set ``ANDROID_SDK_HOME`` to the parent directory you would like the
               ``.android`` directory to be created under.

         -
            -  ``REPO_OS_OVERRIDE``
            -

               Set this variable to ``windows``, ``macosx``, or ``linux`` when you use
               `sdkmanager <#>`__ to download packages for an
               operating system different from the current machine.

               **Note:** You can use Android Studio instead of ``sdkmanager`` to manage your
               SDK packages. 
               See `Update your tools with the SDK Manager <#sdk-manager>`__.

         -
            -  Android Studio configuration environment variables
            -

               The Android Studio configuration variables contain settings that customize the
               location of configuration files and the JDK. On startup, Android Studio checks
               these variables for settings. For more information, 
               see `Configure Android Studio <#>`__.

         -
            -  ``STUDIO_VM_OPTIONS``
            -

               Sets the location of the ``studio.vmoptions`` file. This file contains settings
               that affect the performance characteristics of the Java HotSpot Virtual Machine.
               This file can also be accessed from within Android Studio. 
               See `Customize your VM options <#customize_vm>`__.

         -
            -  ``STUDIO_PROPERTIES``
            -

               Sets the location of the ``idea.properties`` file. This file lets you customize
               Android Studio IDE properties, such as the path to user installed plugins and
               the maximum file size supported by the IDE. 
               See `Customize your IDE properties <#customize_ide>`__.

         -
            -  ``STUDIO_JDK``
            -

               Sets the location of the JDK that Android Studio runs in. When you launch the
               IDE, it checks the ``STUDIO_JDK``, ``JDK_HOME``, and ``JAVA_HOME`` environment
               variables, in that order.

         -
            -  ``STUDIO_GRADLE_JDK``
            -

               Sets the location of the JDK that Android Studio uses to start the Gradle
               daemon. When you launch the IDE, it first checks ``STUDIO_GRADLE_JDK``. If
               ``STUDIO_GRADLE_JDK`` is not defined, the IDE uses the value set in the 
               `project structure settings <#ProjectStructure>`__.

         -
            -  Emulator environment variables
            -

               By default, the emulator stores configuration files under ``$HOME/.android/``
               and AVD data under ``$HOME/.android/avd/``. You can override the defaults by
               setting the following environment variables. The ``emulator -avd <avd_name>``
               command searches the ``avd`` directory in the order of the values in
               ``$ANDROID_AVD_HOME``, ``$ANDROID_USER_HOME/avd/``, and ``$HOME/.android/avd/``.

               For emulator environment variable help, type ``emulator -help-environment`` at
               the command line. For information about ``emulator`` command-line options, see
               `Start the emulator from the command line <#>`__.

         -
            -  ``ANDROID_EMULATOR_HOME``
            -

               Sets the path to the user-specific emulator configuration directory. Defaults to
               ``$ANDROID_USER_HOME``.

               Older tools, such as Android Studio 4.3 and earlier, do not read
               ``ANDROID_USER_HOME``. For those tools, the default value is
               ``$ANDROID_SDK_HOME/.android``.

         -
            -  ``ANDROID_AVD_HOME``
            -

               Sets the path to the directory that contains all AVD-specific files, which
               mostly consist of very large disk images. The default location is
               ``$ANDROID_EMULATOR_HOME/avd/``. You might want to specify a new location if the
               default location is low on disk space.

               The Android emulator queries the following environment variables when it starts:

         -
            -  ``ANDROID_LOG_TAGS``
            -

               
               See `ANDROID_LOG_TAGS <#android_log_tags>`__.

         -
            -  ``HTTP_PROXY``
            -

               Contains the HTTP/HTTPS proxy setting for a global HTTP proxy. Uses a colon (:)
               separator between the host and the port. For example,
               ``set HTTP_PROXY=myserver:1981``.

               This is the same as specifying the
               `-http-proxy proxy <#startup-options>`__
               argument when running the emulator from the command line.

         -
            -  ``ANDROID_VERBOSE``
            -

               
               See `ANDROID_VERBOSE <#android_verbose>`__.

         -
            -  ``ANDROID_HOME``
            -

               
               See `ANDROID_HOME <#android_home>`__.

         -
            -  ``ANDROID_EMULATOR_USE_SYSTEM_LIBS``
            -

               Contains a value of 0 (default) or 1. A value of 1 means the system's
               ``libstdc++.so`` file is used instead of the one that comes bundled with the
               emulator. Set this environment variable only when the emulator does not start on
               your Linux system because of a system library problem. For example, some Linux
               Radeon GL driver libraries require a more recent ``libstdc++.so`` file.

               **Note:** There is no guarantee that setting this environment variable to 1 will
               make the emulator runnable. It is a work-around for system library issues that
               affect a very small number of Linux users.

               Quick emulator (QEMU) audio

         -
            -  ``QEMU_AUDIO_DRV`` ``QEMU_AUDIO_OUT_DRV`` ``QEMU_AUDIO_IN_DRV``
            -

               On Linux, you can change the default audio backend of the emulator by setting
               the ``QEMU_AUDIO_DRV`` environment variable to one of the following values:

               -  ``alsa``: Use the Advanced Linux Sound Architecture (ALSA) backend
               -  ``esd``: Use the Enlightened Sound Daemon (EsounD) backend
               -  ``sdl``: Use the Simple DirectMedia Layer (SDL) audio backend (no audio input
                  supported)
               -  ``oss:``: Use the Open Sound System (OSS) backend
               -  ``none:``: Do not support audio

               .. code:: none

                  set QEMU_AUDIO_DRV=alsa

               You can also use distinct backends for audio input and audio outputs by
               selecting one of the QEMU values for the ``QEMU_AUDIO_OUT_DRV`` and
               ``QEMU_AUDIO_IN_DRV`` environment variables:

               .. code:: none

                  set QEMU_AUDIO_OUT=esd
                  set QEMU_AUDIO_IN=oss

               If you want to disable the audio support, use the ``emulator -no-audio`` option
               or set ``QEMU_AUDIO_DRV`` to ``none``. You might need to disable the audio in
               the following situations:

               -  In rare cases, audio drivers can cause Windows to reboot while the emulator
                  is running.
               -  On some Linux machines, the emulator might get stuck at startup with audio
                  support enabled.

         -
            -  adb environment variables
            -

         -
            -  ``ANDROID_SERIAL``
            -

               Use this variable to provide an emulator serial number, such as emulator-5555,
               to an ``adb`` command. If you set this variable but use the ``-s`` option to
               specify a serial number from the command line, the command-line input overrides
               the value in ``ANDROID_SERIAL``.

               The following example sets ``ANDROID_SERIAL`` and calls
               ``adb install helloworld.apk``, which then installs the Android application
               package on emulator-5555.

               .. code:: none

                  set ANDROID_SERIAL=emulator-555
                  adb install helloWorld.apk

               adb logcat environment variables

         -
            -  ``ANDROID_LOG_TAGS``
            -

               Use this environment variable to set a default filter expression when you are
               running ``logcat`` from your development computer. For example:

               .. code:: none

                  set ANDROID_LOG_TAGS=ActivityManager:I MyApp:D *:.

               This is the same as specifying the
               `-logcat tags <#startup-options>`__
               argument when running the emulator from the command line.

               
               See `Filter log output <#filteringOutput>`__ for more
               information and examples.

         -
            -  ``ADB_TRACE``
            -

               Contains a comma-separated list of the debug information to log. Values can be
               the following: ``all``, ``adb``, ``sockets``, ``packets``, ``rwx``, ``usb``,
               ``sync``, ``sysdeps``, ``transport``, and ``jdwp``.

               To display the ``adb`` logs for the ``adb`` clients and the ``adb`` server, set
               ``ADB_TRACE`` to ``all`` and then call the ``adb logcat`` command, as follows:

               .. code:: none

                  set ADB_TRACE=all
                  adb logcat

         -
            -  ``ANDROID_VERBOSE``
            -

               Contains a comma-separated list of verbose output options (debug tags) used by
               the emulator. The following example shows ``ANDROID_VERBOSE`` defined with the
               ``debug-socket`` and ``debug-radio`` debug tags:

               .. code:: none

                  set ANDROID_VERBOSE=socket,radio

               This is the same as specifying the ``-verbose -verbose-socket -verbose-radio``
               arguments together when running the emulator from the command line.

               Unsupported debug tags are ignored. For more information about debug tags, use
               ``emulator -help-debug-tags``.

   Last updated 2024-04-15 UTC.


