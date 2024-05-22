.. code-block:: bash

   #!/usr/bin/env bash
   
   #pandoc -r html /pl/out.html -t rst --wrap=preserve --columns=120 --list-table=false; exit

   docutils $0 $0.html
   exit

   while read it; do
      url="$it?hl=en"
      echo "::$url" > /pl/out.html
      curl "$url" | sed -n '/devsite-article-body/,/Last updated/p' \
      | pandoc -r html -t rst --columns=80 --list-table=true >> /pl/out.html
   done <<EOF
   https://developer.android.google.cn/ndk/guides
   EOF


/TOC 💛 Android NDK
===================

.. https://developer.android.google.cn/ndk/guides?hl=en

.. container::

   -  `NDK <https://developer.android.google.cn/develop>`__
   -  `Overview <https://developer.android.google.cn/ndk>`__
   -  `Downloads <https://developer.android.google.cn/ndk/downloads>`__
   -  `Samples <https://developer.android.google.cn/ndk/samples>`__
   -  `Guides <https://developer.android.google.cn/ndk/guides>`__
   -  `Reference <https://developer.android.google.cn/ndk/reference>`__


.. container::

   .. image:: https://www.gstatic.cn/devrel-devsite/prod/v8710cb4731a368cb758d972abd8e9129d9a2b5cf087d107be78174bbc0c595e6/android/images/lockup-google-for-developers.svg
      :target: https://developer.android.google.cn/ndk
      :class: devsite-site-logo
      :alt:   Android Developers

.. container::

   -  `Essentials <https://developer.android.google.cn/get-started>`__
   -  `Design & Plan <https://developer.android.google.cn/design>`__
   -  `Develop <https://developer.android.google.cn/develop>`__
   -  `Google Play <https://developer.android.google.cn/distribute>`__
   -  `Community <https://developer.android.google.cn/community>`__
   -  `Android Studio <https://developer.android.google.cn/studio>`__

.. container::

   -  Introduction

      -  `Get started <https://developer.android.google.cn/ndk/guides>`__
      -  `Concepts <https://developer.android.google.cn/ndk/guides/concepts>`__
      -  `JNI tips <https://developer.android.google.cn/training/articles/perf-jni>`__
      -  `Common problems and solutions <https://developer.android.google.cn/ndk/guides/common-problems>`__
      -  `Advice for middleware vendors <https://developer.android.google.cn/ndk/guides/middleware-vendors>`__

   -  Build your project

      -  `Introduction <https://developer.android.google.cn/ndk/guides/build>`__

      -  ndk-build

         -  `The ndk-build script <https://developer.android.google.cn/ndk/guides/ndk-build>`__
         -  `Android.mk <https://developer.android.google.cn/ndk/guides/android_mk>`__
         -  `Application.mk <https://developer.android.google.cn/ndk/guides/application_mk>`__
         -  `Use prebuilt libraries <https://developer.android.google.cn/ndk/guides/prebuilts>`__

      -  `CMake <https://developer.android.google.cn/ndk/guides/cmake>`__
      -  `Use the NDK with other build systems <https://developer.android.google.cn/ndk/guides/other_build_systems>`__
      -  `Integrate the NDK into your own build system <https://android.googlesource.com/platform/ndk/+/master/docs/BuildSystemMaintainers.md>`__

   -  Architectures and CPUs

      -  `Introduction <https://developer.android.google.cn/ndk/guides/arch>`__
      -  `Android ABIs <https://developer.android.google.cn/ndk/guides/abis>`__
      -  `CPU features <https://developer.android.google.cn/ndk/guides/cpu-features>`__
      -  `Neon support <https://developer.android.google.cn/ndk/guides/cpu-arm-neon>`__

   -  Writing C/C++ Code

      -  `Introduction <https://developer.android.google.cn/ndk/guides/libs>`__
      -  `Android SDK version properties <https://developer.android.google.cn/ndk/guides/sdk-versions>`__
      -  `C++ support <https://developer.android.google.cn/ndk/guides/cpp-support>`__
      -  `Native APIs <https://developer.android.google.cn/ndk/guides/stable_apis>`__

   -  Debug and profile

      -  `Introduction <https://developer.android.google.cn/ndk/guides/debug>`__
      -  `Debug with Android Studio <https://developer.android.google.cn/studio/debug>`__
      -  `ndk-gdb <https://developer.android.google.cn/ndk/guides/ndk-gdb>`__
      -  `ndk-stack <https://developer.android.google.cn/ndk/guides/ndk-stack>`__
      -  `Native tracing <https://developer.android.google.cn/topic/performance/tracing/custom-events>`__
      -  `Order Files <https://developer.android.google.cn/ndk/guides/orderfile>`__
      -  `Profile-guided Optimization <https://developer.android.google.cn/ndk/guides/pgo>`__
      -  `Simpleperf <https://developer.android.google.cn/ndk/guides/simpleperf>`__
      -  `Wrap shell script <https://developer.android.google.cn/ndk/guides/wrap-script>`__
      -  `GLES layers <https://developer.android.google.cn/ndk/guides/rootless-debug-gles>`__

   -  Memory error debugging and mitigation

      -  `Introduction <https://developer.android.google.cn/ndk/guides/memory-debug>`__
      -  `Address Sanitizer <https://developer.android.google.cn/ndk/guides/asan>`__
      -  `HWAddress Sanitizer <https://developer.android.google.cn/ndk/guides/hwasan>`__
      -  `Arm Memory Tagging Extension <https://developer.android.google.cn/ndk/guides/arm-mte>`__
      -  `GWP-ASan <https://developer.android.google.cn/ndk/guides/gwp-asan>`__

   -  High-performance audio

      -  `Introduction <https://developer.android.google.cn/ndk/guides/audio>`__
      -  `Audio latency <https://developer.android.google.cn/ndk/guides/audio/audio-latency>`__
      -  `Sampling audio <https://developer.android.google.cn/ndk/guides/audio/sampling-audio>`__
      -  `AAudio <https://developer.android.google.cn/ndk/guides/audio/aaudio/aaudio>`__

      -  OpenSL ES

            -  `Overview <https://developer.android.google.cn/ndk/guides/audio/opensl>`__
            -  `Get started <https://developer.android.google.cn/ndk/guides/audio/opensl/getting-started>`__
            -  `OpenSL ES for Android <https://developer.android.google.cn/ndk/guides/audio/opensl/opensl-for-android>`__
            -  `Android extensions <https://developer.android.google.cn/ndk/guides/audio/opensl/android-extensions>`__
            -  `OpenSL ES programming notes <https://developer.android.google.cn/ndk/guides/audio/opensl/opensl-prog-notes>`__

      -  `Native MIDI API <https://developer.android.google.cn/ndk/guides/audio/midi>`__
      -  `Additional resources <https://developer.android.google.cn/ndk/guides/audio/additional-resources>`__

   -  Vulkan

      -  `Introduction <https://developer.android.google.cn/ndk/guides/graphics>`__
      -  `Get started <https://developer.android.google.cn/ndk/guides/graphics/getting-started>`__
      -  `Design guidelines <https://developer.android.google.cn/ndk/guides/graphics/design-notes>`__
      -  `Shader compilers <https://developer.android.google.cn/ndk/guides/graphics/shader-compilers>`__
      -  `Validation layers <https://developer.android.google.cn/ndk/guides/graphics/validation-layer>`__
      -  `Wide color support <https://developer.android.google.cn/training/wide-color-gamut#vulkan>`__
      -  `Extensions <https://developer.android.google.cn/ndk/guides/graphics/extensions>`__
      -  `Android Baseline profile <https://developer.android.google.cn/ndk/guides/graphics/android-baseline-profile>`__

   -  Machine learning

      -  `Neural Networks API <https://developer.android.google.cn/ndk/guides/neuralnetworks>`__

   -  Images

      -  `Image decoder <https://developer.android.google.cn/ndk/guides/image-decoder>`__


/Get started with the NDK
=========================

.. container:: 

   -  `Home <https://developer.android.google.cn/>`__
   -  `NDK <https://developer.android.google.cn/ndk>`__
   -  `Develop <https://developer.android.google.cn/develop>`__
   -  `Guides <https://developer.android.google.cn/ndk/guides>`__

.. container:: 

   .. rubric:: Get started with the NDK
      :name: get-started-with-the-ndk
      :class: devsite-page-title


   The Native Development Kit (NDK) is a set of tools that allows you
   to use C and C++ code with Android, and provides 
   `platform libraries <https://developer.android.google.cn/ndk/guides/stable_apis>`__ 
   you can use to manage native
   activities and access physical device components, such as sensors
   and touch input. The NDK may not be appropriate for most novice
   Android programmers who need to use only Java code and framework
   APIs to develop their apps. However, the NDK can be useful for cases
   in which you need to do one or more of the following:

   -  Squeeze extra performance out of a device to achieve low latency
      or run computationally intensive applications, such as games or
      physics simulations.
   -  Reuse your own or other developers' C or C++ libraries.

   Using `Android Studio 2.2 and higher <https://developer.android.google.cn/studio>`__, 
   you can use the
   NDK to compile C and C++ code into a native library and package it
   into your APK using Gradle, the IDE's integrated build system. Your
   Java code can then call functions in your native library through the
   `Java Native Interface (JNI) <http://docs.oracle.com/javase/7/docs/technotes/guides/jni/spec/jniTOC.html>`__
   framework. To learn more about Gradle and the Android build system,
   read `Configure Your Build <https://developer.android.google.cn/studio/build>`__.

   Android Studio's default build tool to compile native libraries is
   `CMake <https://cmake.org/>`__. Android Studio also supports
   `ndk-build <https://developer.android.google.cn/ndk/guides/ndk-build>`__ 
   due to the large number of
   existing projects that use the build toolkit. However, if you are
   creating a new native library, you should use CMake.

   This guide gives you the information you need to get up and running
   with the NDK on Android Studio. If you don't have the latest version
   of Android Studio, `download and install it now <https://developer.android.google.cn/studio>`__.

   **Attention experimental Gradle users:** Consider 
   `migrating to plugin version 2.2.0 or higher <http://tools.android.com/tech-docs/new-build-system/gradle-experimental/migrate-to-stable>`__,
   and using CMake or ndk-build to build your native libraries if any
   of the following apply to you: Your native project already uses
   CMake or ndk-build; you would rather use a stable version of the
   Gradle build system; or you want support for add-on tools, such as
   `CCache <https://ccache.samba.org/>`__. Otherwise, you can continue
   to `use the experimental version of Gradle and the Android plugin <http://tools.android.com/tech-docs/new-build-system/gradle-experimental>`__.

   .. rubric:: Download the NDK and tools
      :name: download-ndk

   To compile and debug native code for your app, you need the
   following components:

   -  The Android Native Development Kit (NDK): a set of tools that
      allows you to use C and C++ code with Android.
   -  CMake: an external build tool that works alongside Gradle to
      build your native library. You do not need this component if you
      only plan to use ndk-build.
   -  *LLDB*: the debugger Android Studio uses to debug native code.

   For information on installing these components, 
   see `Install and configure the NDK and CMake <https://developer.android.google.cn/studio/projects/install-ndk>`__.

   .. rubric:: Create or import a native project
      :name: native-project

   Once you set up Android Studio, you can simply 
   `Create a New Project with C/C++ Support <https://developer.android.google.cn/studio/projects/add-native-code#new-project>`__. 
   However,
   if you want to add or import native code to an existing Android
   Studio project, you need to follow this basic process:

   #. `Create new native source files <https://developer.android.google.cn/studio/projects/add-native-code#create-sources>`__ 
      and add them to your Android Studio project.

      -  You can skip this step if you already have native code or want
         to import a prebuilt native library.

   #. `Create a CMake build script <https://developer.android.google.cn/studio/projects/configure-cmake#create_script>`__ 
      to tell CMake how to build your native sources into a library. You
      also require this build script if you are importing and linking
      against prebuilt or platform libraries.

      -  You can skip this step if your existing native library already
         has a ``CMakeLists.txt`` build script, or uses ndk-build and
         includes an `Android.mk <https://developer.android.google.cn/ndk/guides/android_mk>`__ 
         build script.

   #. `Link Gradle to your native library <https://developer.android.google.cn/studio/projects/gradle-external-native-builds>`__ 
      by providing a path to your CMake or ndk-build script file. Gradle
      uses the build script to import source code into your Android
      Studio project and package your native library (the SO file) into
      the APK.

      **Note:** If your existing project uses the deprecated
      ``ndkCompile`` tool, you should open your ``build.properties``
      file and remove the following line of code before configuring
      Gradle to use CMake or ndk-build:

      .. code:: cpp

         // Remove this line
         android.useDeprecatedNdk = true

   #. `Build and run your app <https://developer.android.google.cn/studio/run>`__ 
      by clicking **Run** |run then run app from the main menu|. Gradle adds your CMake or
      ndk-build process as a dependency to compile, build, and package
      your native library with your APK.

   Once your app is running on a physical device or the emulator, you
   can use Android Studio to `Debug your app <https://developer.android.google.cn/studio/debug>`__.
   Otherwise, to learn more about the NDK and its components, read the
   `Concepts <https://developer.android.google.cn/ndk/guides/concepts>`__ page.

Content and code samples on this page are subject to the licenses
described in the `Content License <https://developer.android.google.cn/license>`__. 
Java and OpenJDK are
trademarks or registered trademarks of Oracle and/or its affiliates.

Last updated 2022-10-12 UTC.

.. |run then run app from the main menu| image:: https://developer.android.google.cn/static/studio/images/buttons/toolbar-run.png
   :class: inline-icon



/Concepts
=========

.. https://developer.android.google.cn/ndk/guides/concepts?hl=en

.. container:: devsite-article-body clearfix

   .. rubric:: Before you begin
      :name: before_you_begin

   This guide assumes that you are already familiar with concepts inherent in
   native programming and in `Android development <#>`__.

   .. rubric:: Introduction
      :name: introduction

   This section provides a high-level explanation of how the NDK works. The
   Android NDK is a set of tools allowing you to embed C or C++ (“native code”)
   into your Android apps. The ability to use native code in Android apps can be
   particularly useful to developers who wish to do one or more of the
   following:

   -  Port their apps between platforms.
   -  Reuse existing libraries, or provide their own libraries for reuse.
   -  Increase performance in certain cases, particularly computationally
      intensive ones like games.

   .. rubric:: How it works
      :name: how_it_works

   This section introduces the main components used in building a native
   application for Android, and goes on to describe the process of building and
   packaging.

   .. rubric:: Main components
      :name: main_components

   You should have an understanding of the following components as you build
   your app:

   -  Native shared libraries: The NDK builds these libraries, or ``.so`` files,
      from your C/C++ source code.

   -  Native static libraries: The NDK can also build static libraries, or
      ``.a`` files, which you can link into other libraries.

   -  Java Native Interface (JNI): The JNI is the interface via which the Java
      and C++ components talk to one another. This guide assumes knowledge of
      the JNI; for information about it, consult the 
      `Java Native Interface Specification <http://docs.oracle.com/javase/7/docs/technotes/guides/jni/spec/jniTOC.html>`__.

   -  Application Binary Interface (ABI): The ABI defines exactly how your app's
      machine code is expected to interact with the system at runtime. The NDK
      builds ``.so`` files against these definitions. Different ABIs correspond
      to different architectures: The NDK includes ABI support for 32-bit ARM,
      AArch64, x86, and x86-64. For more information, see `Android ABIs <#>`__.

   -  Manifest: If you are writing an app with no Java component to it, you must
      declare the `NativeActivity <#>`__ class in the `manifest <#>`__. See
      `Use the native_activity.h interface <#na>`__ for more detail on how to do
      this.

   .. rubric:: Flow
      :name: flow

   The general flow for developing a native app for Android is as follows:

   #. Design your app, deciding which parts to implement in Java, and which
      parts to implement as native code.

      **Note:**\  While it is possible to completely avoid Java, you are likely
      to find the Android Java framework useful for tasks including controlling
      the display and UI.

   #. Create an Android app Project as you would for any other Android project.

   #. If you are writing a native-only app, declare the `NativeActivity <#>`__ 
      class in ``AndroidManifest.xml``. For more information, see the 
      `Native activities and applications <#naa>`__.

   #. Create an ``Android.mk`` file describing the native library, including
      name, flags, linked libraries, and source files to be compiled in the
      "JNI" directory.

   #. Optionally, you can create an ``Application.mk`` file configuring the
      target ABIs, toolchain, release/debug mode, and STL. For any of these that
      you do not specify, the following default values are used, respectively:

      -  ABI: all non-deprecated ABIs
      -  Mode: Release
      -  STL: system

   #. Place your native source under the project's ``jni`` directory.

   #. Use ndk-build to compile the native (``.so``, ``.a``) libraries.

   #. Build the Java component, producing the executable ``.dex`` file.

   #. Package everything into an APK file, containing ``.so``, ``.dex``, and
      other files needed for your app to run.

   .. rubric:: Native activities and applications
      :name: naa

   The Android SDK provides a helper class, `NativeActivity <#>`__, that allows you
   to write a completely native activity. `NativeActivity <#>`__ handles the
   communication between the Android framework and your native code, so you do
   not have to subclass it or call its methods. All you need to do is declare
   your application to be native in your ``AndroidManifest.xml`` file, and begin
   creating your native application.

   An Android application using `NativeActivity <#>`__ still runs in its
   own virtual machine, sandboxed from other applications. You can therefore
   still access Android framework APIs through the JNI. In certain cases, such
   as for sensors, input events, and assets, the NDK provides native interfaces
   that you can use instead of having to call across the JNI. For more
   information about such support, see `Native APIs <#>`__.

   Regardless of whether or not you are developing a native activity, we
   recommend that you create your projects with the traditional Android build
   tools. Doing so helps ensure building and packaging of Android applications
   with the correct structure.

   The Android NDK provides you with two choices to implement your native
   activity:

   -  The `native_activity.h <#>`__ header defines the native version of the
      `NativeActivity <#>`__ class. It
      contains the callback interface and data structures that you need to
      create your native activity. Because the main thread of your application
      handles the callbacks, your callback implementations must not be blocking.
      If they block, you might receive ANR (Application Not Responding) errors
      because your main thread is unresponsive until the callback returns.
   -  The ``android_native_app_glue.h`` file defines a static helper library
      built on top of the `native_activity.h <#>`__ interface. It
      spawns another thread, which handles things such as callbacks or input
      events in an event loop. Moving these events to a separate thread prevents
      any callbacks from blocking your main thread.

   The ``<ndk_root>/sources/android/native_app_glue/android_native_app_glue.c``
   source is also available, allowing you to modify the implementation.

   For more information on how to use this static library, examine the
   native-activity sample application and its documentation. Further reading is
   also available in the comments in the
   ``<ndk_root>/sources/android/native_app_glue/android_native_app_glue.h``
   file.

   .. rubric:: Use the native_activity.h interface
      :name: na

   To implement a native activity with the `native_activity.h <#>`__ interface:

   #. Create a ``jni/`` directory in your project's root directory. This
      directory stores all of your native code.

   #. Declare your native activity in the ``AndroidManifest.xml`` file.

      Because your application has no Java code, set ``android:hasCode`` to
      ``false``.

      .. code:: prettyprint

         <application android:label="@string/app_name" android:hasCode="false">

      You must set the ``android:name`` attribute of the activity tag to
      `NativeActivity <#>`__.

      .. code:: prettyprint

         <activity android:name="android.app.NativeActivity"
                   android:label="@string/app_name">

      **Note:**\  You can subclass `NativeActivity <#>`__. If you do, use
      the name of the subclass instead of `NativeActivity <#>`__.

      The ``android:value`` attribute of the ``meta-data`` tag specifies the
      name of the shared library containing the entry point to the application
      (such as C/C++ ``main``), omitting the ``lib`` prefix and ``.so`` suffix
      from the library name.

      .. code:: prettyprint

         <manifest>
           <application>
             <activity>
               <meta-data android:name="android.app.lib_name"
                          android:value="native-activity" />
               <intent-filter>
                 <action android:name="android.intent.action.MAIN" />
                 <category android:name="android.intent.category.LAUNCHER" />
               </intent-filter>
             </activity>
           </application>
         </manifest>

   #. Create a file for your native activity, and implement the function named
      in the `ANativeActivity_onCreate <#>`__
      variable. The app calls this function when the native activity starts.
      This function, analogous to ``main`` in C/C++, receives a pointer to an
      `ANativeActivity <#>`__ structure,
      which contains function pointers to the various callback implementations
      that you need to write. Set the applicable callback function pointers in
      ``ANativeActivity->callbacks`` to the implementations of your callbacks.

   #. Set the ``ANativeActivity->instance`` field to the address of any instance
      of specific data that you want to use.

   #. Implement anything else that you want your activity to do upon starting.

   #. Implement the rest of the callbacks that you set in
      ``ANativeActivity->callbacks``. For more information on when the callbacks
      are called, see `Managing the Activity Lifecycle <#>`__.

   #. Develop the rest of your application.

   #. Create an ``Android.mk file`` in the ``jni/`` directory of your project to
      describe your native module to the build system. For more information, see
      `Android.mk <#>`__.

   #. Once you have an `Android.mk <#>`__ file, compile
      your native code using the ``ndk-build`` command.

      .. code:: prettyprint

         cd <path>/<to>/<project>
         $NDK/ndk-build

   #. Build and install your Android project as usual. If your native code is in
      the ``jni/`` directory, the build script automatically packages the
      ``.so`` file(s) built from it into the APK.

   .. rubric:: Additional sample code
      :name: additional_sample_code

   To download NDK samples, see `NDK Samples <https://github.com/android/ndk-samples>`__.

Last updated 2021-03-11 UTC.

/JNI tips
=========

.. https://developer.android.google.cn/training/articles/perf-jni?hl=en

.. container:: devsite-article-body clearfix

   JNI is the Java Native Interface. It defines a way for the bytecode that
   Android compiles from managed code (written in the Java or Kotlin programming
   languages) to interact with native code (written in C/C++). JNI is
   vendor-neutral, has support for loading code from dynamic shared libraries,
   and while cumbersome at times is reasonably efficient.

   **Note:** Because Android compiles Kotlin to ART-friendly bytecode in a
   similar manner as the Java programming language, you can apply the guidance
   on this page to both the Kotlin and Java programming languages in terms of
   JNI architecture and its associated costs. To learn more, see `Kotlin and Android <#>`__.

   If you're not already familiar with it, read through the 
   `Java Native Interface Specification <http://docs.oracle.com/javase/7/docs/technotes/guides/jni/spec/jniTOC.html>`__
   to get a sense for how JNI works and what features are available. Some
   aspects of the interface aren't immediately obvious on first reading, so you
   may find the next few sections handy.

   To browse global JNI references and see where global JNI references are
   created and deleted, use the **JNI heap** view in the `Memory Profiler <#>`__ 
   in Android Studio 3.2 and higher.

   .. rubric:: General tips
      :name: general-tips

   Try to minimize the footprint of your JNI layer. There are several dimensions
   to consider here. Your JNI solution should try to follow these guidelines
   (listed below by order of importance, beginning with the most important):

   -  **Minimize marshalling of resources across the JNI layer.** Marshalling
      across the JNI layer has non-trivial costs. Try to design an interface
      that minimizes the amount of data you need to marshall and the frequency
      with which you must marshall data.

   -  **Avoid asynchronous communication between code written in a managed
      programming language and code written in C++ when possible**. This will
      keep your JNI interface easier to maintain. You can typically simplify
      asynchronous UI updates by keeping the async update in the same language
      as the UI. For example, instead of invoking a C++ function from the UI
      thread in the Java code via JNI, it's better to do a callback between two
      threads in the Java programming language, with one of them making a
      blocking C++ call and then notifying the UI thread when the blocking call
      is complete.

   -  **Minimize the number of threads that need to touch or be touched by
      JNI.** If you do need to utilize thread pools in both the Java and C++
      languages, try to keep JNI communication between the pool owners rather
      than between individual worker threads.

   -  **Keep your interface code in a low number of easily identified C++ and
      Java source locations to facilitate future refactors.** Consider using a
      JNI auto-generation library as appropriate.

   .. rubric:: JavaVM and JNIEnv
      :name: javavm-and-jnienv

   JNI defines two key data structures, "JavaVM" and "JNIEnv". Both of these are
   essentially pointers to pointers to function tables. (In the C++ version,
   they're classes with a pointer to a function table and a member function for
   each JNI function that indirects through the table.) The JavaVM provides the
   "invocation interface" functions, which allow you to create and destroy a
   JavaVM. In theory you can have multiple JavaVMs per process, but Android only
   allows one.

   The JNIEnv provides most of the JNI functions. Your native functions all
   receive a JNIEnv as the first argument, except for ``@CriticalNative``
   methods, see `faster native calls <#fast_critical_native>`__.

   The JNIEnv is used for thread-local storage. For this reason, **you cannot
   share a JNIEnv between threads**. If a piece of code has no other way to get
   its JNIEnv, you should share the JavaVM, and use ``GetEnv`` to discover the
   thread's JNIEnv. (Assuming it has one; see ``AttachCurrentThread`` below.)

   The C declarations of JNIEnv and JavaVM are different from the C++
   declarations. The ``"jni.h"`` include file provides different typedefs
   depending on whether it's included into C or C++. For this reason it's a bad
   idea to include JNIEnv arguments in header files included by both languages.
   (Put another way: if your header file requires ``#ifdef __cplusplus``, you
   may have to do some extra work if anything in that header refers to JNIEnv.)

   .. rubric:: Threads
      :name: threads

   All threads are Linux threads, scheduled by the kernel. They're usually
   started from managed code (using ``Thread.start()``), but they can also be
   created elsewhere and then attached to the ``JavaVM``. For example, a thread
   started with ``pthread_create()`` or ``std::thread`` can be attached using
   the ``AttachCurrentThread()`` or ``AttachCurrentThreadAsDaemon()`` functions.
   Until a thread is attached, it has no JNIEnv, and **cannot make JNI calls**.

   It's usually best to use ``Thread.start()`` to create any thread that needs
   to call in to Java code. Doing so will ensure that you have sufficient stack
   space, that you're in the correct ``ThreadGroup``, and that you're using the
   same ``ClassLoader`` as your Java code. It's also easier to set the thread's
   name for debugging in Java than from native code (see
   ``pthread_setname_np()`` if you have a ``pthread_t`` or ``thread_t``, and
   ``std::thread::native_handle()`` if you have a ``std::thread`` and want a
   ``pthread_t``).

   Attaching a natively-created thread causes a ``java.lang.Thread`` object to
   be constructed and added to the "main" ``ThreadGroup``, making it visible to
   the debugger. Calling ``AttachCurrentThread()`` on an already-attached thread
   is a no-op.

   Android does not suspend threads executing native code. If garbage collection
   is in progress, or the debugger has issued a suspend request, Android will
   pause the thread the next time it makes a JNI call.

   Threads attached through JNI **must call ``DetachCurrentThread()`` before
   they exit**. If coding this directly is awkward, in Android 2.0 (Eclair) and
   higher you can use ``pthread_key_create()`` to define a destructor function
   that will be called before the thread exits, and call
   ``DetachCurrentThread()`` from there. (Use that key with
   ``pthread_setspecific()`` to store the JNIEnv in thread-local-storage; that
   way it'll be passed into your destructor as the argument.)

   .. rubric:: jclass, jmethodID, and jfieldID
      :name: jclass,-jmethodid,-and-jfieldid

   If you want to access an object's field from native code, you would do the
   following:

   -  Get the class object reference for the class with ``FindClass``
   -  Get the field ID for the field with ``GetFieldID``
   -  Get the contents of the field with something appropriate, such as
      ``GetIntField``

   Similarly, to call a method, you'd first get a class object reference and
   then a method ID. The IDs are often just pointers to internal runtime data
   structures. Looking them up may require several string comparisons, but once
   you have them the actual call to get the field or invoke the method is very
   quick.

   If performance is important, it's useful to look the values up once and cache
   the results in your native code. Because there is a limit of one JavaVM per
   process, it's reasonable to store this data in a static local structure.

   The class references, field IDs, and method IDs are guaranteed valid until
   the class is unloaded. Classes are only unloaded if all classes associated
   with a ClassLoader can be garbage collected, which is rare but will not be
   impossible in Android. Note however that the ``jclass`` is a class reference
   and **must be protected** with a call to ``NewGlobalRef`` (see the next
   section).

   If you would like to cache the IDs when a class is loaded, and automatically
   re-cache them if the class is ever unloaded and reloaded, the correct way to
   initialize the IDs is to add a piece of code that looks like this to the
   appropriate class:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               companion object {
                   /*
                    * We use a static class initializer to allow the native code to cache some
                    * field offsets. This native function looks up and caches interesting
                    * class/field/method IDs. Throws on failure.
                    */
                   private external fun nativeInit()

                   init {
                       nativeInit()
                   }
               }

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

                   /*
                    * We use a class initializer to allow the native code to cache some
                    * field offsets. This native function looks up and caches interesting
                    * class/field/method IDs. Throws on failure.
                    */
                   private static native void nativeInit();

                   static {
                       nativeInit();
                   }

   Create a ``nativeClassInit`` method in your C/C++ code that performs the ID
   lookups. The code will be executed once, when the class is initialized. If
   the class is ever unloaded and then reloaded, it will be executed again.

   .. rubric:: Local and global references
      :name: local-and-global-references

   Every argument passed to a native method, and almost every object returned by
   a JNI function is a "local reference". This means that it's valid for the
   duration of the current native method in the current thread. **Even if the
   object itself continues to live on after the native method returns, the
   reference is not valid.**

   This applies to all sub-classes of ``jobject``, including ``jclass``,
   ``jstring``, and ``jarray``. (The runtime will warn you about most reference
   mis-uses when extended JNI checks are enabled.)

   The only way to get non-local references is via the functions
   ``NewGlobalRef`` and ``NewWeakGlobalRef``.

   If you want to hold on to a reference for a longer period, you must use a
   "global" reference. The ``NewGlobalRef`` function takes the local reference
   as an argument and returns a global one. The global reference is guaranteed
   to be valid until you call ``DeleteGlobalRef``.

   This pattern is commonly used when caching a jclass returned from
   ``FindClass``, e.g.:

   .. code:: cpp

      jclass localClass = env->FindClass("MyClass");
      jclass globalClass = reinterpret_cast<jclass>(env->NewGlobalRef(localClass));

   All JNI methods accept both local and global references as arguments. It's
   possible for references to the same object to have different values. For
   example, the return values from consecutive calls to ``NewGlobalRef`` on the
   same object may be different. **To see if two references refer to the same
   object, you must use the ``IsSameObject`` function.** Never compare
   references with ``==`` in native code.

   One consequence of this is that you **must not assume object references are
   constant or unique** in native code. The value representing an object may be
   different from one invocation of a method to the next, and it's possible that
   two different objects could have the same value on consecutive calls. Do not
   use ``jobject`` values as keys.

   Programmers are required to "not excessively allocate" local references. In
   practical terms this means that if you're creating large numbers of local
   references, perhaps while running through an array of objects, you should
   free them manually with ``DeleteLocalRef`` instead of letting JNI do it for
   you. The implementation is only required to reserve slots for 16 local
   references, so if you need more than that you should either delete as you go
   or use ``EnsureLocalCapacity``/``PushLocalFrame`` to reserve more.

   Note that ``jfieldID``\ s and ``jmethodID``\ s are opaque types, not object
   references, and should not be passed to ``NewGlobalRef``. The raw data
   pointers returned by functions like ``GetStringUTFChars`` and
   ``GetByteArrayElements`` are also not objects. (They may be passed between
   threads, and are valid until the matching Release call.)

   One unusual case deserves separate mention. If you attach a native thread
   with ``AttachCurrentThread``, the code you are running will never
   automatically free local references until the thread detaches. Any local
   references you create will have to be deleted manually. In general, any
   native code that creates local references in a loop probably needs to do some
   manual deletion.

   Be careful using global references. Global references can be unavoidable, but
   they are difficult to debug and can cause difficult-to-diagnose memory
   (mis)behaviors. All else being equal, a solution with fewer global references
   is probably better.

   .. rubric:: UTF-8 and UTF-16 strings
      :name: utf-8-and-utf-16-strings

   The Java programming language uses UTF-16. For convenience, JNI provides
   methods that work with `Modified UTF-8`__ as well. The
   modified encoding is useful for C code because it encodes \\u0000 as 0xc0
   0x80 instead of 0x00. The nice thing about this is that you can count on
   having C-style zero-terminated strings, suitable for use with standard libc
   string functions. The down side is that you cannot pass arbitrary UTF-8 data
   to JNI and expect it to work correctly.

   .. _Modified UTF-8: https://en.wikipedia.org/wiki/UTF-8#Modified_UTF-8

   To get the UTF-16 representation of a ``String``, use ``GetStringChars``.
   Note that **UTF-16 strings are not zero-terminated**, and \\u0000 is allowed,
   so you need to hang on to the string length as well as the jchar pointer.

   **Don't forget to ``Release`` the strings you ``Get``**. The string functions
   return ``jchar*`` or ``jbyte*``, which are C-style pointers to primitive data
   rather than local references. They are guaranteed valid until ``Release`` is
   called, which means they are not released when the native method returns.

   **Data passed to NewStringUTF must be in Modified UTF-8 format**. A common
   mistake is reading character data from a file or network stream and handing
   it to ``NewStringUTF`` without filtering it. Unless you know the data is
   valid MUTF-8 (or 7-bit ASCII, which is a compatible subset), you need to
   strip out invalid characters or convert them to proper Modified UTF-8 form.
   If you don't, the UTF-16 conversion is likely to provide unexpected results.
   CheckJNI—which is on by default for emulators—scans strings and aborts the VM
   if it receives invalid input.

   Before Android 8, it was usually faster to operate with UTF-16 strings as
   Android did not require a copy in ``GetStringChars``, whereas
   ``GetStringUTFChars`` required an allocation and a conversion to UTF-8.
   Android 8 changed the ``String`` representation to use 8 bits per character
   for ASCII strings (to save memory) and started to use a 
   `moving garbage collector <https://source.android.google.cn/docs/core/runtime/improvements#concurrent-compacting-gc>`__.
   These features greatly reduce the number of cases where ART can provide a
   pointer to the ``String`` data without making a copy, even for
   ``GetStringCritical``. However, if most strings processed by the code are
   short, it is possible to avoid the allocation and deallocation in most cases
   by using a stack-allocated buffer and ``GetStringRegion`` or
   ``GetStringUTFRegion``. For example:

   .. code:: cpp

          constexpr size_t kStackBufferSize = 64u;
          jchar stack_buffer[kStackBufferSize];
          std::unique_ptr heap_buffer;
          jchar* buffer = stack_buffer;
          jsize length = env->GetStringLength(str);
          if (length > kStackBufferSize) {
            heap_buffer.reset(new jchar[length]);
            buffer = heap_buffer.get();
          }
          env->GetStringRegion(str, 0, length, buffer);
          process_data(buffer, length);

   .. rubric:: Primitive arrays
      :name: primitive-arrays

   JNI provides functions for accessing the contents of array objects. While
   arrays of objects must be accessed one entry at a time, arrays of primitives
   can be read and written directly as if they were declared in C.

   To make the interface as efficient as possible without constraining the VM
   implementation, the ``Get<PrimitiveType>ArrayElements`` family of calls
   allows the runtime to either return a pointer to the actual elements, or
   allocate some memory and make a copy. Either way, the raw pointer returned is
   guaranteed to be valid until the corresponding ``Release`` call is issued
   (which implies that, if the data wasn't copied, the array object will be
   pinned down and can't be relocated as part of compacting the heap). **You
   must ``Release`` every array you ``Get``.** Also, if the ``Get`` call fails,
   you must ensure that your code doesn't try to ``Release`` a NULL pointer
   later.

   You can determine whether or not the data was copied by passing in a non-NULL
   pointer for the ``isCopy`` argument. This is rarely useful.

   The ``Release`` call takes a ``mode`` argument that can have one of three
   values. The actions performed by the runtime depend upon whether it returned
   a pointer to the actual data or a copy of it:

   -  ``0``

      -  Actual: the array object is un-pinned.
      -  Copy: data is copied back. The buffer with the copy is freed.

   -  ``JNI_COMMIT``

      -  Actual: does nothing.
      -  Copy: data is copied back. The buffer with the copy **is not freed**.

   -  ``JNI_ABORT``

      -  Actual: the array object is un-pinned. Earlier writes are **not**
         aborted.
      -  Copy: the buffer with the copy is freed; any changes to it are lost.

   One reason for checking the ``isCopy`` flag is to know if you need to call
   ``Release`` with ``JNI_COMMIT`` after making changes to an array — if you're
   alternating between making changes and executing code that uses the contents
   of the array, you may be able to skip the no-op commit. Another possible
   reason for checking the flag is for efficient handling of ``JNI_ABORT``. For
   example, you might want to get an array, modify it in place, pass pieces to
   other functions, and then discard the changes. If you know that JNI is making
   a new copy for you, there's no need to create another "editable" copy. If JNI
   is passing you the original, then you do need to make your own copy.

   It is a common mistake (repeated in example code) to assume that you can skip
   the ``Release`` call if ``*isCopy`` is false. This is not the case. If no
   copy buffer was allocated, then the original memory must be pinned down and
   can't be moved by the garbage collector.

   Also note that the ``JNI_COMMIT`` flag does **not** release the array, and
   you will need to call ``Release`` again with a different flag eventually.

   .. rubric:: Region calls
      :name: region-calls

   There is an alternative to calls like ``Get<Type>ArrayElements`` and
   ``GetStringChars`` that may be very helpful when all you want to do is copy
   data in or out. Consider the following:

   .. code:: cpp

          jbyte* data = env->GetByteArrayElements(array, NULL);
          if (data != NULL) {
              memcpy(buffer, data, len);
              env->ReleaseByteArrayElements(array, data, JNI_ABORT);
          }

   This grabs the array, copies the first ``len`` byte elements out of it, and
   then releases the array. Depending upon the implementation, the ``Get`` call
   will either pin or copy the array contents. The code copies the data (for
   perhaps a second time), then calls ``Release``; in this case ``JNI_ABORT``
   ensures there's no chance of a third copy.

   One can accomplish the same thing more simply:

   .. code:: cpp

          env->GetByteArrayRegion(array, 0, len, buffer);

   This has several advantages:

   -  Requires one JNI call instead of 2, reducing overhead.
   -  Doesn't require pinning or extra data copies.
   -  Reduces the risk of programmer error — no risk of forgetting to call
      ``Release`` after something fails.

   Similarly, you can use the ``Set<Type>ArrayRegion`` call to copy data into an
   array, and ``GetStringRegion`` or ``GetStringUTFRegion`` to copy characters
   out of a ``String``.

   .. rubric:: Exceptions
      :name: exceptions

   **You must not call most JNI functions while an exception is pending.** Your
   code is expected to notice the exception (via the function's return value,
   ``ExceptionCheck``, or ``ExceptionOccurred``) and return, or clear the
   exception and handle it.

   The only JNI functions that you are allowed to call while an exception is
   pending are:

   -  ``DeleteGlobalRef``
   -  ``DeleteLocalRef``
   -  ``DeleteWeakGlobalRef``
   -  ``ExceptionCheck``
   -  ``ExceptionClear``
   -  ``ExceptionDescribe``
   -  ``ExceptionOccurred``
   -  ``MonitorExit``
   -  ``PopLocalFrame``
   -  ``PushLocalFrame``
   -  ``Release<PrimitiveType>ArrayElements``
   -  ``ReleasePrimitiveArrayCritical``
   -  ``ReleaseStringChars``
   -  ``ReleaseStringCritical``
   -  ``ReleaseStringUTFChars``

   Many JNI calls can throw an exception, but often provide a simpler way of
   checking for failure. For example, if ``NewString`` returns a non-NULL value,
   you don't need to check for an exception. However, if you call a method
   (using a function like ``CallObjectMethod``), you must always check for an
   exception, because the return value is not going to be valid if an exception
   was thrown.

   Note that exceptions thrown by managed code do not unwind native stack
   frames. (And C++ exceptions, generally discouraged on Android, must not be
   thrown across the JNI transition boundary from C++ code to managed code.) The
   JNI ``Throw`` and ``ThrowNew`` instructions just set an exception pointer in
   the current thread. Upon returning to managed from native code, the exception
   will be noted and handled appropriately.

   Native code can "catch" an exception by calling ``ExceptionCheck`` or
   ``ExceptionOccurred``, and clear it with ``ExceptionClear``. As usual,
   discarding exceptions without handling them can lead to problems.

   There are no built-in functions for manipulating the ``Throwable`` object
   itself, so if you want to (say) get the exception string you will need to
   find the ``Throwable`` class, look up the method ID for
   ``getMessage "()Ljava/lang/String;"``, invoke it, and if the result is
   non-NULL use ``GetStringUTFChars`` to get something you can hand to
   ``printf(3)`` or equivalent.

   .. rubric:: Extended checking
      :name: extended-checking

   JNI does very little error checking. Errors usually result in a crash.
   Android also offers a mode called CheckJNI, where the JavaVM and JNIEnv
   function table pointers are switched to tables of functions that perform an
   extended series of checks before calling the standard implementation.

   The additional checks include:

   -  Arrays: attempting to allocate a negative-sized array.
   -  Bad pointers: passing a bad jarray/jclass/jobject/jstring to a JNI call,
      or passing a NULL pointer to a JNI call with a non-nullable argument.
   -  Class names: passing anything but the “java/lang/String” style of class
      name to a JNI call.
   -  Critical calls: making a JNI call between a “critical” get and its
      corresponding release.
   -  Direct ByteBuffers: passing bad arguments to ``NewDirectByteBuffer``.
   -  Exceptions: making a JNI call while there’s an exception pending.
   -  JNIEnv*s: using a JNIEnv\* from the wrong thread.
   -  jfieldIDs: using a NULL jfieldID, or using a jfieldID to set a field to a
      value of the wrong type (trying to assign a StringBuilder to a String
      field, say), or using a jfieldID for a static field to set an instance
      field or vice versa, or using a jfieldID from one class with instances of
      another class.
   -  jmethodIDs: using the wrong kind of jmethodID when making a
      ``Call*Method`` JNI call: incorrect return type, static/non-static
      mismatch, wrong type for ‘this’ (for non-static calls) or wrong class (for
      static calls).
   -  References: using ``DeleteGlobalRef``/``DeleteLocalRef`` on the wrong kind
      of reference.
   -  Release modes: passing a bad release mode to a release call (something
      other than ``0``, ``JNI_ABORT``, or ``JNI_COMMIT``).
   -  Type safety: returning an incompatible type from your native method
      (returning a StringBuilder from a method declared to return a String,
      say).
   -  UTF-8: passing an invalid `Modified UTF-8 <https://en.wikipedia.org/wiki/UTF-8#Modified_UTF-8>`__ 
      byte sequence to a JNI call.

   (Accessibility of methods and fields is still not checked: access
   restrictions don't apply to native code.)

   There are several ways to enable CheckJNI.

   If you’re using the emulator, CheckJNI is on by default.

   If you have a rooted device, you can use the following sequence of commands
   to restart the runtime with CheckJNI enabled:

   .. code:: bash

      adb shell stop
      adb shell setprop dalvik.vm.checkjni true
      adb shell start

   In either of these cases, you’ll see something like this in your logcat
   output when the runtime starts:

   .. code:: none

      D AndroidRuntime: CheckJNI is ON

   If you have a regular device, you can use the following command:

   .. code:: bash

      adb shell setprop debug.checkjni 1

   This won’t affect already-running apps, but any app launched from that point
   on will have CheckJNI enabled. (Change the property to any other value or
   simply rebooting will disable CheckJNI again.) In this case, you’ll see
   something like this in your logcat output the next time an app starts:

   .. code:: none

      D Late-enabling CheckJNI

   You can also set the ``android:debuggable`` attribute in your application's
   manifest to turn on CheckJNI just for your app. Note that the Android build
   tools will do this automatically for certain build types.

   .. rubric:: Native libraries
      :name: native-libraries

   You can load native code from shared libraries with the standard
   `System.loadLibrary <#>`__.

   In practice, older versions of Android had bugs in PackageManager that caused
   installation and update of native libraries to be unreliable. The
   `ReLinker <https://github.com/KeepSafe/ReLinker>`__ project offers
   workarounds for this and other native library loading problems.

   Call ``System.loadLibrary`` (or ``ReLinker.loadLibrary``) from a static class
   initializer. The argument is the "undecorated" library name, so to load
   ``libfubar.so`` you would pass in ``"fubar"``.

   If you have only one class with native methods, it makes sense for the call
   to ``System.loadLibrary`` to be in a static initializer for that class.
   Otherwise you might want to make the call from ``Application`` so you know
   that the library is always loaded, and always loaded early.

   There are two ways that the runtime can find your native methods. You can
   either explicitly register them with ``RegisterNatives``, or you can let the
   runtime look them up dynamically with ``dlsym``. The advantages of
   ``RegisterNatives`` are that you get up-front checking that the symbols
   exist, plus you can have smaller and faster shared libraries by not exporting
   anything but ``JNI_OnLoad``. The advantage of letting the runtime discover
   your functions is that it's slightly less code to write.

   To use ``RegisterNatives``:

   -  Provide a ``JNIEXPORT jint JNI_OnLoad(JavaVM* vm, void* reserved)``
      function.
   -  In your ``JNI_OnLoad``, register all of your native methods using
      ``RegisterNatives``.
   -  Build with ``-fvisibility=hidden`` so that only your ``JNI_OnLoad`` is
      exported from your library. This produces faster and smaller code, and
      avoids potential collisions with other libraries loaded into your app (but
      it creates less useful stack traces if your app crashes in native code).

   The static initializer should look like this:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               companion object {
                   init {
                       System.loadLibrary("fubar")
                   }
               }

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               static {
                   System.loadLibrary("fubar");
               }

   The ``JNI_OnLoad`` function should look something like this if written in C++:

   .. code:: cpp

      JNIEXPORT jint JNI_OnLoad(JavaVM* vm, void* reserved) {
          JNIEnv* env;
          if (vm->GetEnv(reinterpret_cast<void**>(&env), JNI_VERSION_1_6) != JNI_OK) {
              return JNI_ERR;
          }

          // Find your class. JNI_OnLoad is called from the correct class loader context for this to work.
          jclass c = env->FindClass("com/example/app/package/MyClass");
          if (c == nullptr) return JNI_ERR;

          // Register your class' native methods.
          static const JNINativeMethod methods[] = {
              {"nativeFoo", "()V", reinterpret_cast<void*>(nativeFoo)},
              {"nativeBar", "(Ljava/lang/String;I)Z", reinterpret_cast<void*>(nativeBar)},
          };
          int rc = env->RegisterNatives(c, methods, sizeof(methods)/sizeof(JNINativeMethod));
          if (rc != JNI_OK) return rc;

          return JNI_VERSION_1_6;
      }

   To instead use "discovery" of native methods, you need to name them in a
   specific way (see `the JNI spec <http://java.sun.com/javase/6/docs/technotes/guides/jni/spec/design.html#wp615>`__
   for details). This means that if a method signature is wrong, you won't know
   about it until the first time the method is actually invoked.

   Any ``FindClass`` calls made from ``JNI_OnLoad`` will resolve classes in the
   context of the class loader that was used to load the shared library. When
   called from other contexts, ``FindClass`` uses the class loader associated
   with the method at the top of the Java stack, or if there isn't one (because
   the call is from a native thread that was just attached) it uses the "system"
   class loader. The system class loader does not know about your application's
   classes, so you won't be able to look up your own classes with ``FindClass``
   in that context. This makes ``JNI_OnLoad`` a convenient place to look up and
   cache classes: once you have a valid ``jclass`` 
   `global reference <#local_and_global_references>`__ 
   you can use it from any attached thread.

   .. rubric:: Faster native calls with ``@FastNative`` and ``@CriticalNative``
      :name: faster-native-calls-with-fastnative-and-criticalnative

   Native methods can be annotated with
   `@FastNative <#>`__ or
   `@CriticalNative <#>`__
   (but not both) to speed up transitions between managed and native code.
   However, these annotations come with certain changes in behavior that need to
   be carefully considered before use. While we briefly mention these changes
   below, please refer to the documentation for the details.

   The ``@CriticalNative`` annotation can be applied only to native methods that
   do not use managed objects (in parameters or return values, or as an implicit
   ``this``), and this annotation changes the JNI transition ABI. The native
   implementation must exclude the ``JNIEnv`` and ``jclass`` parameters from its
   function signature.

   While executing a ``@FastNative`` or ``@CriticalNative`` method, the garbage
   collection cannot suspend the thread for essential work and may become
   blocked. Do not use these annotations for long-running methods, including
   usually-fast, but generally unbounded, methods. In particular, the code
   should not perform significant I/O operations or acquire native locks that
   can be held for a long time.

   These annotations were implemented for system use since 
   `Android 8 <https://source.android.google.cn/docs/core/dalvik/improvements#faster-native-methods>`__
   and became CTS-tested public API in Android 14. These optimizations are
   likely to work also on Android 8-13 devices (albeit without the strong CTS
   guarantees) but the dynamic lookup of native methods is supported only on
   Android 12+, the explicit registration with JNI ``RegisterNatives`` is
   strictly required for running on Android versions 8-11. These annotations are
   ignored on Android 7-, the ABI mismatch for ``@CriticalNative`` would lead to
   wrong argument marshalling and likely crashes.

   For performance critical methods that need these annotations, it is strongly
   recommended to explicitly register the method(s) with JNI ``RegisterNatives``
   instead of relying on the name-based "discovery" of native methods. To get
   optimal app startup performance, it is recommended to include callers of
   ``@FastNative`` or ``@CriticalNative`` methods in the `baseline profile <#>`__. 
   Since Android 12,
   a call to a ``@CriticalNative`` native method from a compiled managed method
   is almost as cheap as a non-inline call in C/C++ as long as all arguments fit
   into registers (for example up to 8 integral and up to 8 floating point
   arguments on arm64).

   Sometimes it can be preferable to split a native method into two, a very fast
   method that can fail and another one that handles the slow cases. For
   example:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               fun writeInt(nativeHandle: Long, value: Int) {
                   // A fast buffered write with a `@CriticalNative` method should succeed most of the time.
                   if (!nativeTryBufferedWriteInt(nativeHandle, value)) {
                       // If the buffered write failed, we need to use the slow path that can perform
                       // significant I/O and can even throw an `IOException`.
                       nativeWriteInt(nativeHandle, value)
                   }
               }

               @CriticalNative
               external fun nativeTryBufferedWriteInt(nativeHandle: Long, value: Int): Boolean

               external fun nativeWriteInt(nativeHandle: Long, value: Int)

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               void writeInt(long nativeHandle, int value) {
                   // A fast buffered write with a `@CriticalNative` method should succeed most of the time.
                   if (!nativeTryBufferedWriteInt(nativeHandle, value)) {
                       // If the buffered write failed, we need to use the slow path that can perform
                       // significant I/O and can even throw an `IOException`.
                       nativeWriteInt(nativeHandle, value);
                   }
               }

               @CriticalNative
               static native boolean nativeTryBufferedWriteInt(long nativeHandle, int value);

               static native void nativeWriteInt(long nativeHandle, int value);

   .. rubric:: 64-bit considerations
      :name: 64-bit-considerations

   To support architectures that use 64-bit pointers, use a ``long`` field
   rather than an ``int`` when storing a pointer to a native structure in a Java
   field.

   .. rubric:: Unsupported features/backwards compatibility
      :name: unsupported-featuresbackwards-compatibility

   All JNI 1.6 features are supported, with the following exception:

   -  ``DefineClass`` is not implemented. Android does not use Java bytecodes or
      class files, so passing in binary class data doesn't work.

   For backward compatibility with older Android releases, you may need to be
   aware of:

   -  **Dynamic lookup of native functions**

      Until Android 2.0 (Eclair), the '$' character was not properly converted
      to "\_00024" during searches for method names. Working around this
      requires using explicit registration or moving the native methods out of
      inner classes.

   -  **Detaching threads**

      Until Android 2.0 (Eclair), it was not possible to use a
      ``pthread_key_create`` destructor function to avoid the "thread must be
      detached before exit" check. (The runtime also uses a pthread key
      destructor function, so it'd be a race to see which gets called first.)

   -  **Weak global references**

      Until Android 2.2 (Froyo), weak global references were not implemented.
      Older versions will vigorously reject attempts to use them. You can use
      the Android platform version constants to test for support.

      Until Android 4.0 (Ice Cream Sandwich), weak global references could only
      be passed to ``NewLocalRef``, ``NewGlobalRef``, and
      ``DeleteWeakGlobalRef``. (The spec strongly encourages programmers to
      create hard references to weak globals before doing anything with them, so
      this should not be at all limiting.)

      From Android 4.0 (Ice Cream Sandwich) on, weak global references can be
      used like any other JNI references.

   -  **Local references**

      Until Android 4.0 (Ice Cream Sandwich), local references were actually
      direct pointers. Ice Cream Sandwich added the indirection necessary to
      support better garbage collectors, but this means that lots of JNI bugs
      are undetectable on older releases. 
      See `JNI Local Reference Changes in ICS <http://android-developers.blogspot.com/2011/11/jni-local-reference-changes-in-ics.html>`__
      for more details.

      In Android versions prior to `Android 8.0 <#>`__, the
      number of local references is capped at a version-specific limit.
      Beginning in Android 8.0, Android supports unlimited local references.

   -  **Determining reference type with ``GetObjectRefType``**

      Until Android 4.0 (Ice Cream Sandwich), as a consequence of the use of
      direct pointers (see above), it was impossible to implement
      ``GetObjectRefType`` correctly. Instead we used a heuristic that looked
      through the weak globals table, the arguments, the locals table, and the
      globals table in that order. The first time it found your direct pointer,
      it would report that your reference was of the type it happened to be
      examining. This meant, for example, that if you called
      ``GetObjectRefType`` on a global jclass that happened to be the same as
      the jclass passed as an implicit argument to your static native method,
      you'd get ``JNILocalRefType`` rather than ``JNIGlobalRefType``.

   -  **``@FastNative`` and ``@CriticalNative``**

      Up to Android 7, these optimization annotations were ignored. The ABI
      mismatch for ``@CriticalNative`` would lead to wrong argument marshalling
      and likely crashes.

      The dynamic lookup of native functions for ``@FastNative`` and
      ``@CriticalNative`` methods was unimplemented in Android 8-10 and contains
      known bugs in Android 11. Using these optimizations without explicit
      registration with JNI ``RegisterNatives`` is likely to lead to crashes on
      Android 8-11.

   .. rubric:: FAQ: Why do I get ``UnsatisfiedLinkError``?
      :name: faq:-why-do-i-get-unsatisfiedlinkerror

   When working on native code it's not uncommon to see a failure like this:

   .. code:: none

      java.lang.UnsatisfiedLinkError: Library foo not found

   In some cases it means what it says — the library wasn't found. In other
   cases the library exists but couldn't be opened by ``dlopen(3)``, and the
   details of the failure can be found in the exception's detail message.

   Common reasons why you might encounter "library not found" exceptions:

   -  The library doesn't exist or isn't accessible to the app. Use
      ``adb shell ls -l <path>`` to check its presence and permissions.
   -  The library wasn't built with the NDK. This can result in dependencies on
      functions or libraries that don't exist on the device.

   Another class of ``UnsatisfiedLinkError`` failures looks like:

   .. code:: none

      java.lang.UnsatisfiedLinkError: myfunc
              at Foo.myfunc(Native Method)
              at Foo.main(Foo.java:10)

   In logcat, you'll see:

   .. code:: none

      W/dalvikvm(  880): No implementation found for native LFoo;.myfunc ()V

   This means that the runtime tried to find a matching method but was
   unsuccessful. Some common reasons for this are:

   -  The library isn't getting loaded. Check the logcat output for messages
      about library loading.
   -  The method isn't being found due to a name or signature mismatch. This is
      commonly caused by:

      -  For lazy method lookup, failing to declare C++ functions with
         ``extern "C"`` and appropriate visibility (``JNIEXPORT``). Note that
         prior to Ice Cream Sandwich, the JNIEXPORT macro was incorrect, so
         using a new GCC with an old ``jni.h`` won't work. You can use
         ``arm-eabi-nm`` to see the symbols as they appear in the library; if
         they look mangled (something like
         ``_Z15Java_Foo_myfuncP7_JNIEnvP7_jclass`` rather than
         ``Java_Foo_myfunc``), or if the symbol type is a lowercase 't' rather
         than an uppercase 'T', then you need to adjust the declaration.
      -  For explicit registration, minor errors when entering the method
         signature. Make sure that what you're passing to the registration call
         matches the signature in the log file. Remember that 'B' is ``byte``
         and 'Z' is ``boolean``. Class name components in signatures start with
         'L', end with ';', use '/' to separate package/class names, and use '$'
         to separate inner-class names (``Ljava/util/Map$Entry;``, say).

   Using ``javah`` to automatically generate JNI headers may help avoid some
   problems.

   .. rubric:: FAQ: Why didn't ``FindClass`` find my class?
      :name: faq:-why-didnt-findclass-find-my-class

   (Most of this advice applies equally well to failures to find methods with
   ``GetMethodID`` or ``GetStaticMethodID``, or fields with ``GetFieldID`` or
   ``GetStaticFieldID``.)

   Make sure that the class name string has the correct format. JNI class names
   start with the package name and are separated with slashes, such as
   ``java/lang/String``. If you're looking up an array class, you need to start
   with the appropriate number of square brackets and must also wrap the class
   with 'L' and ';', so a one-dimensional array of ``String`` would be
   ``[Ljava/lang/String;``. If you're looking up an inner class, use '$' rather
   than '.'. In general, using ``javap`` on the .class file is a good way to
   find out the internal name of your class.

   If you enable code shrinking, make sure that you 
   `configure which code to keep <#>`__. Configuring proper keep rules
   is important because the code shrinker might otherwise remove classes,
   methods, or fields that are only used from JNI.

   If the class name looks right, you could be running into a class loader
   issue. ``FindClass`` wants to start the class search in the class loader
   associated with your code. It examines the call stack, which will look
   something like:

   .. code:: none

          Foo.myfunc(Native Method)
          Foo.main(Foo.java:10)

   The topmost method is ``Foo.myfunc``. ``FindClass`` finds the ``ClassLoader``
   object associated with the ``Foo`` class and uses that.

   This usually does what you want. You can get into trouble if you create a
   thread yourself (perhaps by calling ``pthread_create`` and then attaching it
   with ``AttachCurrentThread``). Now there are no stack frames from your
   application. If you call ``FindClass`` from this thread, the JavaVM will
   start in the "system" class loader instead of the one associated with your
   application, so attempts to find app-specific classes will fail.

   There are a few ways to work around this:

   -  Do your ``FindClass`` lookups once, in ``JNI_OnLoad``, and cache the class
      references for later use. Any ``FindClass`` calls made as part of
      executing ``JNI_OnLoad`` will use the class loader associated with the
      function that called ``System.loadLibrary`` (this is a special rule,
      provided to make library initialization more convenient). If your app code
      is loading the library, ``FindClass`` will use the correct class loader.
   -  Pass an instance of the class into the functions that need it, by
      declaring your native method to take a Class argument and then passing
      ``Foo.class`` in.
   -  Cache a reference to the ``ClassLoader`` object somewhere handy, and issue
      ``loadClass`` calls directly. This requires some effort.

   .. rubric:: FAQ: How do I share raw data with native code?
      :name: faq:-how-do-i-share-raw-data-with-native-code

   You may find yourself in a situation where you need to access a large buffer
   of raw data from both managed and native code. Common examples include
   manipulation of bitmaps or sound samples. There are two basic approaches.

   You can store the data in a ``byte[]``. This allows very fast access from
   managed code. On the native side, however, you're not guaranteed to be able
   to access the data without having to copy it. In some implementations,
   ``GetByteArrayElements`` and ``GetPrimitiveArrayCritical`` will return actual
   pointers to the raw data in the managed heap, but in others it will allocate
   a buffer on the native heap and copy the data over.

   The alternative is to store the data in a direct byte buffer. These can be
   created with ``java.nio.ByteBuffer.allocateDirect``, or the JNI
   ``NewDirectByteBuffer`` function. Unlike regular byte buffers, the storage is
   not allocated on the managed heap, and can always be accessed directly from
   native code (get the address with ``GetDirectBufferAddress``). Depending on
   how direct byte buffer access is implemented, accessing the data from managed
   code can be very slow.

   The choice of which to use depends on two factors:

   #. Will most of the data accesses happen from code written in Java or in
      C/C++?
   #. If the data is eventually being passed to a system API, what form must it
      be in? (For example, if the data is eventually passed to a function that
      takes a byte[], doing processing in a direct ``ByteBuffer`` might be
      unwise.)

   If there's no clear winner, use a direct byte buffer. Support for them is
   built directly into JNI, and performance should improve in future releases.

Last updated 2024-01-03 UTC.

/Common problems and solutions
==============================

.. https://developer.android.google.cn/ndk/guides/common-problems?hl=en

.. container:: devsite-article-body clearfix

   This document is a partial list of the most commonly encountered non-bugs you
   might encounter when using the NDK, and their solutions (if available).

   .. rubric:: Using ``_FILE_OFFSET_BITS=64`` with older API levels
      :name: using_file_offset_bits64_with_older_api_levels

   Prior to `unified headers <https://android.googlesource.com/platform/ndk/+/master/docs/UnifiedHeaders.md>`__,
   the NDK did not support ``_FILE_OFFSET_BITS=64``. If you defined it when
   building your app, it was silently ignored. The ``_FILE_OFFSET_BITS=64``
   option is now supported with unified headers, but on old versions of Android
   very few of the ``off_t`` APIs were available as an ``off64_t`` variant.
   Therefore, using this feature with old API levels results in fewer functions
   being available.

   This problem is explained in detail in the 
   `r16 blog post <https://android-developers.googleblog.com/2017/09/introducing-android-native-development.html>`__
   and in the `bionic documentation <https://android.googlesource.com/platform/bionic/+/master/docs/32-bit-abi.md>`__.

   **Problem**: Your build is asking for APIs that do not exist in your
   ``minSdkVersion``.

   **Solution**: Disable ``_FILE_OFFSET_BITS=64`` or raise your
   ``minSdkVersion``.

   .. rubric:: Undeclared or implicit definition of ``mmap``
      :name: undeclared_or_implicit_definition_of_mmap

   You may see the following error in C++:

      error: use of undeclared identifier 'mmap'

   or the following error in C:

      warning: implicit declaration of function 'mmap' is invalid in C99

   Using ``_FILE_OFFSET_BITS=64`` instructs the C library to use ``mmap64``
   instead of ``mmap``. ``mmap64`` was not available until ``android-21``. If
   your ``minSdkVersion`` value is lower than 21, the C library does not contain
   an ``mmap`` that is compatible with ``_FILE_OFFSET_BITS=64``, so the function
   is unavailable.

   **Note:**\  ``mmap`` is only the most common manifestation of this problem.
   The same is true of any function in the C library that has an ``off_t``
   parameter.

   **Note:**\  Since r16 beta 2, the C library exposes ``mmap64`` as an inline
   function to mitigate this instance of this issue.

   .. rubric:: ``minSdkVersion`` set higher than device API level
      :name: minsdkversion_set_higher_than_device_api_level

   The API level you build against with the NDK has a very different meaning
   than ``compileSdkVersion`` does for Java. The NDK API level is your app's
   **minimum** supported API level. In ndk-build, this is your ``APP_PLATFORM``
   setting. With CMake, this is ``-DANDROID_PLATFORM``.

   **Note:**\  If you're using `externalNativeBuild <#>`__,
   it automatically uses your ``minSdkVersion``.
   Since references to functions are typically resolved when libraries are
   loaded rather than when they are first called, you cannot reference APIs that
   are not always present and guard their use with API level checks. If they are
   referred to at all, they must be present.

   **Problem**: Your NDK API level is higher than the API supported by your
   device.

   **Solution**: Set your NDK API level (``APP_PLATFORM``) to the minimum
   version of Android your app supports.

      ============================   ============================
      Build System                   Setting
      ============================   ============================
      `ndk-build <#>`__              ``APP_PLATFORM``
      `CMake <#>`__                  ``ANDROID_PLATFORM``
      `externalNativeBuild <#>`__    ``android.minSdkVersion``
      ============================   ============================

   For other build systems, see `Use the NDK with other build systems <#>`__.

   .. rubric:: Cannot locate ``__aeabi`` Symbols
      :name: cannot_locate_aeabi_symbols

   The following message:

      UnsatisfiedLinkError: dlopen failed: cannot locate symbol
      "``__aeabi_memcpy``"

   is one example of possible *runtime* errors. These errors appear in the log
   when you attempt to load your native libraries. The symbol might be any of
   ``__aeabi_*``; ``__aeabi_memcpy`` and ``__aeabi_memclr`` seem to be the most
   common.

   This problem is documented in `Issue 126 <https://github.com/android-ndk/ndk/issues/126>`__

   .. rubric:: Cannot locate symbol ``rand``
      :name: cannot_locate_symbol_rand

   For the following error log message:

      UnsatisfiedLinkError: dlopen failed: cannot locate symbol "``rand``"

   See this detailed `Stack Overflow answer <http://stackoverflow.com/a/27338365/632035>`__.

   .. rubric:: Undefined reference to ``__atomic_*``
      :name: undefined_reference_to_atomic_

   **Problem**: Some ABIs need ``libatomic`` to provide some implementations for
   atomic operations.

   **Solution**: Add ``-latomic`` when linking.

   For the following error message:

      error: undefined reference to '``__atomic_exchange_4``'

   the actual symbol here might be anything prefixed with ``__atomic_``.

   **Note:**\  ndk-build and CMake handle this for you. For other build systems,
   you may need to do this manually.

   .. rubric:: RTTI/exceptions not working across library boundaries
      :name: rttiexceptions_not_working_across_library_boundaries

   **Problem**: Exceptions are not being caught when thrown across shared
   library boundaries, or ``dynamic_cast`` is failing.

   **Solution**: Add a `key function <https://itanium-cxx-abi.github.io/cxx-abi/abi.html#vague-vtable>`__
   to your types. A key function is the first non-pure, out-of-line virtual
   function for a type. For an example, see the discussion on `Issue 533 <https://github.com/android-ndk/ndk/issues/533#issuecomment-335977747>`__.

   The `C++ ABI <https://itanium-cxx-abi.github.io/cxx-abi/abi.html#rtti>`__
   states that two objects have the same type if and only if their ``type_info``
   pointers are identical. Exceptions may only be caught if the ``type_info``
   for the catch matches the thrown exception. The same rule applies for
   ``dynamic_cast``.

   When a type does not have a key function, its ``typeinfo`` is emitted as a
   weak symbol and matching type infos are merged when libraries are loaded.
   When loading libraries dynamically after the executable has been loaded (in
   other words, via ``dlopen`` or ``System.loadLibrary``), it may not be
   possible for the loader to merge type infos for the loaded libraries. When
   this happens, the two types are not considered equal.

   **Note:**\  For non-polymorphic types, the type cannot have a key function.
   For non-polymorphic types, RTTI is unnecessary, since ``std::is_same`` can be
   used to determine type equality at compile time.

   .. rubric:: Using mismatched prebuilt libraries
      :name: using_mismatched_prebuilt_libraries

   Using prebuilt libraries—these are typically third-party libraries—in your
   application requires a bit of extra care. In general, be aware of the
   following rules:

   -  The resulting app's minimum API level is the maximum of the
      ``minSdkVersion``\ s of all the app's libraries.

      If your ``minSdkVersion`` is 16, but you're using a prebuilt library that
      was built against 21, the resulting app's minimum API level is 21. Failure
      to adhere to this will be visible at build time if the prebuilt library is
      static, but may not appear until run time for prebuilt shared libraries.

   -  All libraries should be generated with the same NDK version.

      This rule is a bit more flexible than most since breakages are rare, but
      compatibility between libraries that were built with different major
      versions of the NDK is not guaranteed. The C++ ABI is not stable and has
      changed in the past.

   -  Apps with multiple shared libraries must use a `shared STL <#>`__.

      As with mismatched STLs, the problems caused by this can be avoided if
      great care is taken, but it's better to just avoid the problem. The best
      way to avoid this problem is to avoid having multiple shared libraries in
      your app.

Last updated 2021-03-15 UTC.

/Advice for middleware vendors
==============================

.. https://developer.android.google.cn/ndk/guides/middleware-vendors?hl=en

.. container:: devsite-article-body clearfix

   Distributing middleware built with the NDK raises some additional issues that
   app developers do not need to worry about. Prebuilt libraries impose some of
   their implementation choices on their users.

   .. rubric:: Choosing API levels and NDK versions
      :name: choosing_api_levels_and_ndk_versions

   Your users cannot use a `minSdkVersion <#>`__ lower than yours.
   If your users' apps need to run on API 21, you cannot build for API 24. It is
   okay to build your library for a *lower* API level than your users. You can
   build for API 16 and remain compatible with your API 21 users.

   NDK versions are largely compatible with each other, but occasionally there
   are changes that break compatibility. If you know that all of your users are
   using the same version of the NDK, it's best to use the same version that
   they do. Otherwise, use the newest version.

   .. rubric:: Using the STL
      :name: using_the_stl

   If you're writing C++ and using the STL, your choice between
   ``libc++_shared`` and ``libc++_static`` affects your users if you distribute
   a shared library. If you distribute a shared library, you must either use
   ``libc++_shared`` or ensure that libc++'s symbols are not exposed by your
   library. The best way to do this is to explicitly declare your ABI surface
   with a version script (this also helps keep your implementation details
   private). For example, a simple arithmetic library might have the following
   version script:

   **Note:**\  If you distribute a static library, it does not matter whether
   you choose a static or shared STL because nothing is linked in a static
   library. The user can link whichever they choose in their application. They
   must link *something*, even for C-only consumers, so be sure to document that
   it is required and which version of the NDK was used to build in case of
   incompatibility in STL versions.

   .. code:: cpp

      LIBMYMATH {
      global:
          add;
          sub;
          mul;
          div;
          # C++ symbols in an extern block will be mangled automatically. See
          # https://stackoverflow.com/a/21845178/632035 for more examples.
          extern "C++" {
              "pow(int, int)";
          }
      local:
          *;
      };

   A version script should be the preferred option because it is the most robust
   way to control symbol visibility. This is a best practice for *all* shared
   libraries, middleware or not, as it prevents your implementation details from
   being exposed and improves load time.

   Another, less robust option is to use
   ``-Wl,--exclude-libs,libc++_static.a -Wl,--exclude-libs,libc++abi.a`` when
   linking. This is less robust because it will only hide the symbols in the
   libraries that are explicitly named, and no diagnostics are reported for
   libraries that are not used (a typo in the library name is not an error, and
   the burden is on the user to keep the library list up to date). This approach
   also does not hide your own implementation details.

   .. rubric:: Distributing native libraries in AARs
      :name: distributing_native_libraries_in_aars

   **Note:**\  This section describes how to distribute C/C++ *APIs* to users.
   If your native libraries are implementation details of your *Java* API, see
   the `Java middleware with JNI libraries <#java_middleware_with_jni_libraries>`__ section.
   The Android Gradle plugin can import `native dependencies <#>`__
   distributed in `AARs <#>`__. If your users are
   using the Android Gradle plugin, this will be the easiest way for them to
   consume your library.

   Native libraries can be packaged into an AAR `by AGP <#>`__. This will be the
   easiest option if your library is already built by
   `externalNativeBuild <#>`__.

   Non-AGP builds can use
   `ndkports <https://android.googlesource.com/platform/tools/ndkports/>`__, or
   perform manual packaging by following the
   `Prefab <https://google.github.io/prefab/>`__ documentation to create the
   ``prefab/`` subdirectory of their AAR.

   .. rubric:: Java middleware with JNI libraries
      :name: java_middleware_with_jni_libraries

   Java libraries that include JNI libraries (in other words, AARs that contain
   ``jniLibs``) need to be careful that the JNI libraries they include will not
   collide with other libraries in the user's app. For example, if the AAR
   includes ``libc++_shared.so``, but a different version of
   ``libc++_shared.so`` than the app uses, only one will be installed to the APK
   and that may lead to unreliable behavior.

   **Warning:**\  `Bug 141758241 <https://issuetracker.google.com/141758241>`__:
   Older versions of the Android Gradle plugin do not currently diagnose this
   error condition. One of the identically named libraries will be arbitrarily
   chosen for packaging in the APK.

   The most reliable solution is for Java libraries to include no more than
   **one** JNI library (this is good advice for apps too). All dependencies
   including the STL should be statically linked into the implementation
   library, and a version script should be used to enforce the ABI surface. For
   example, a Java library ``com.example.foo`` that includes the JNI library
   ``libfooimpl.so`` should use the following version script:

   .. code:: cpp

      LIBFOOIMPL {
      global:
          JNI_OnLoad;
      local:
          *;
      };

   This example uses ``registerNatives`` via ``JNI_OnLoad`` as described in `JNI Tips <#>`__ to ensure that the
   minimal ABI surface is exposed and library load time is minimized.

Last updated 2021-09-15 UTC.

/Intro: Build your project
==========================

.. https://developer.android.google.cn/ndk/guides/build?hl=en

.. container:: devsite-article-body clearfix

   There are three main ways to build code with the NDK:

   -  The Make-based `ndk-build <#>`__.
   -  `CMake <#>`__.
   -  `Standalone toolchains <#>`__ for
      integration with other build systems, or use with ``configure``-based
      projects.

Last updated 2020-08-17 UTC.

/The ndk-build script
=====================

.. https://developer.android.google.cn/ndk/guides/ndk-build?hl=en

.. container:: devsite-article-body clearfix

   The ``ndk-build`` script builds projects that use the NDK's Make-based build
   system. There is more specific documentation for the
   `Android.mk <#>`__ and `Application.mk <#>`__ configuration used by
   ``ndk-build``.

   .. rubric:: Internals
      :name: int

   Running the ``ndk-build`` script is equivalent to running the following
   command:

   .. code:: bash

      $GNUMAKE -f <ndk>/build/core/build-local.mk <parameters>

   ``$GNUMAKE`` points to GNU Make 3.81 or later, and ``<ndk>`` points to your
   NDK installation directory. You can use this information to invoke ndk-build
   from other shell scripts, or even your own make files.

   .. rubric:: Invoke from the command line
      :name: ifc

   The ``ndk-build`` script lives in the top level NDK installation directory.
   To run it from the command line, invoke it while in or under your application
   project directory. For example:

   .. code:: bash

      $ cd <project>
      $ <ndk>/ndk-build

   In this example, ``<project>`` points to your project’s root directory, and
   ``<ndk>`` is the directory where you installed the NDK.

   .. rubric:: Options
      :name: options

   All parameters to ndk-build are passed directly to the underlying GNU
   ``make`` command that runs the NDK build scripts. Combine ``ndk-build`` and
   options in the form ``ndk-build <option>``. For example:

   .. code:: bash

      $ ndk-build clean

   The following options are available:

   ``clean``
      Remove any previously generated binaries.

      **Note:** On Mac OS X, running ``ndk-build clean`` with a high number of
      `parallel executions <https://www.gnu.org/software/make/manual/html_node/Parallel.html>`__
      may result in a build error that includes the following message:

      .. code:: none

         rm: fts_read: No such file or directory

      To avoid this issue, consider not using the ``-j``\ ``N`` modifier or
      selecting a smaller value for ``N``, such as 2.

   ``V=1``
      Launch build, and display build commands.
   ``-B``
      Force a complete rebuild.
   ``-B V=1``
      Force a complete rebuild, and display build commands.
   ``NDK_LOG=1``
      Display internal NDK log messages (used for debugging the NDK itself).
   ``NDK_DEBUG=1``
      Force a debuggable build (see `table 1 <#dvr>`__).
   ``NDK_DEBUG=0``
      Force a release build (see `table 1 <#dvr>`__).
   ``NDK_HOST_32BIT=1``
      Always use the toolchain in 32-bit mode.
   ``NDK_APPLICATION_MK=<file>``
      Build, using a specific ``Application.mk`` file pointed to by the
      ``NDK_APPLICATION_MK`` variable.
   ``-C <project>``
      Build the native code for the project path located at ``<project>``.
      Useful if you don't want to ``cd`` to it in your terminal.

   .. container:: section
      :name: debuggable-versus-release-builds

      .. rubric:: Debuggable versus release builds
         :name: dvr

      Use the ``NDK_DEBUG`` option and, in certain cases,
      ``AndroidManifest.xml`` to specify debug or release build,
      optimization-related behavior, and inclusion of symbols. Table 1 shows the
      results of each possible combination of settings.

      **Table 1.** Results of ``NDK_DEBUG`` (command line) and
      ``android:debuggable`` (manifest) combinations.

      .. list-table::
         :header-rows: 1

         - 

            - Manifest Setting
            - NDK_DEBUG=0
            - NDK_DEBUG=1
            - NDK_DEBUG not specified
         - 

            - android:debuggable="true"
            - Debug; Symbols; Optimized*1
            - Debug; Symbols; Not optimized*2
            - (same as NDK_DEBUG=1)
         - 

            - android:debuggable="false"
            - Release; Symbols; Optimized
            - Release; Symbols; Not optimized
            - Release; No symbols; Optimized*3

      \*1: Useful for profiling.
      \*2: Default for running `ndk-gdb <#>`__.
      \*3: Default mode.

      **Note:** \`NDK_DEBUG=0\` is the equivalent of \`APP_OPTIM=release\`, and
      compiles with \`-O2\`. \`NDK_DEBUG=1\` is the equivalent of
      \`APP_OPTIM=debug\` in \`Application.mk\`, and compiles with \`-O0\`. For
      more information about \`APP_OPTIM\`, see
      `Application.mk <#>`__.

      The syntax on the command line is, for example:

      .. code:: none

         $ ndk-build NDK_DEBUG=1

   .. rubric:: Requirements
      :name: req

   You need GNU Make 4 to use ndk-build or the NDK in general. The NDK includes
   its own copy of GNU Make and will use that unless you've set the ``$GNUMAKE``
   environment variable to point to an unsuitable make.

   .. rubric:: JSON compilation databases
      :name: json

   In NDK r18 and newer, ndk-build can generate a `JSON compilation database <https://clang.llvm.org/docs/JSONCompilationDatabase.html>`__.

   You can either use ``ndk-build compile_commands.json`` to generate the
   database without building your code, or
   ``ndk-build GEN_COMPILE_COMMANDS_DB=true`` if you want to build and generate
   the database as a side-effect.

Last updated 2020-08-17 UTC.

/Android.mk
===========

.. https://developer.android.google.cn/ndk/guides/android_mk?hl=en

.. container:: devsite-article-body clearfix

   This page describes the syntax of the ``Android.mk`` build file used by
   ``ndk-build``.

   .. rubric:: Overview
      :name: overview

   The ``Android.mk`` file resides in a subdirectory of your project's ``jni/``
   directory, and describes your sources and shared libraries to the build
   system. It is really a tiny GNU makefile fragment that the build system
   parses once or more. The ``Android.mk`` file is useful for defining
   project-wide settings that
   `Application.mk <#>`__, the build system, and
   your environment variables leave undefined. It can also override project-wide
   settings for specific *modules*.

   The syntax of the ``Android.mk`` allows you to group your sources into
   *modules*. A module is either a static library, a shared library, or a
   standalone executable. You can define one or more modules in each
   ``Android.mk`` file, and you can use the same source file in multiple
   modules. The build system only places shared libraries into your application
   package. In addition, static libraries can generate shared libraries.

   In addition to packaging libraries, the build system handles a variety of
   other details for you. For example, you don't need to list header files or
   explicit dependencies between generated files in your ``Android.mk`` file.
   The NDK build system computes these relationships automatically for you. As a
   result, you should be able to benefit from new toolchain/platform support in
   future NDK releases without having to touch your ``Android.mk`` file.

   The syntax of this file is very close to that used in the ``Android.mk``
   files distributed with the full 
   `Android Open Source Project <https://source.android.google.cn>`__. 
   While the build system
   implementation that uses them is different, their similarity is an
   intentional design decision aimed at making it easier for application
   developers to reuse source code for external libraries.

   .. rubric:: Basics
      :name: basics

   Before exploring the syntax in detail, it is useful to start by understanding
   the basics of what a ``Android.mk`` file contains. This section uses the
   ``Android.mk`` file in the Hello-JNI sample toward that end, explaining the
   role that each line in the file plays.

   An ``Android.mk`` file must begin by defining the ``LOCAL_PATH`` variable:

   .. code:: prettyprint

      LOCAL_PATH := $(call my-dir)

   This variable indicates the location of the source files in the development
   tree. Here, the macro function ``my-dir``, provided by the build system,
   returns the path of the current directory (the directory containing the
   ``Android.mk`` file itself).

   The next line declares the ``CLEAR_VARS`` variable, whose value the build
   system provides.

   .. code:: prettyprint

      include $(CLEAR_VARS)

   The ``CLEAR_VARS`` variable points to a special GNU Makefile that clears many
   ``LOCAL_XXX`` variables for you, such as ``LOCAL_MODULE``,
   ``LOCAL_SRC_FILES``, and ``LOCAL_STATIC_LIBRARIES``. Note that it does not
   clear ``LOCAL_PATH``. This variable must retain its value because the system
   parses all build control files in a single GNU Make execution context where
   all variables are global. You must (re-)declare this variable before
   describing each module.

   Next, the ``LOCAL_MODULE`` variable stores the name of the module that you
   wish to build. Use this variable once per module in your application.

   .. code:: prettyprint

      LOCAL_MODULE := hello-jni

   Each module name must be unique and not contain any spaces. The build system,
   when it generates the final shared-library file, automatically adds the
   proper prefix and suffix to the name that you assign to ``LOCAL_MODULE``. For
   example, the example that appears above results in generation of a library
   called ``libhello-jni.so``.

   **Note:**\  If your module's name already starts with ``lib``, the build
   system does not prepend an additional ``lib`` prefix; it takes the module
   name as-is, and adds the ``.so`` extension. So a source file originally
   called, for example, ``libfoo.c`` still produces a shared-object file called
   ``libfoo.so``. This behavior is to support libraries that the Android
   platform sources generate from ``Android.mk`` files; the names of all such
   libraries start with ``lib``.
   The next line enumerates the source files, with spaces delimiting multiple
   files:

   .. code:: prettyprint

      LOCAL_SRC_FILES := hello-jni.c

   The ``LOCAL_SRC_FILES`` variable must contain a list of C and/or C++ source
   files to build into a module.

   The last line helps the system tie everything together:

   .. code:: prettyprint

      include $(BUILD_SHARED_LIBRARY)

   The ``BUILD_SHARED_LIBRARY`` variable points to a GNU Makefile script that
   collects all the information you defined in ``LOCAL_XXX`` variables since the
   most recent ``include``. This script determines what to build, and how to do
   it.

   There are more complex examples in the samples directories, with commented
   ``Android.mk`` files that you can look at. In addition, 
   `Sample: native-activity <#>`__ provides a detailed explanation
   of that sample's ``Android.mk`` file. Finally, `Variables and macros <#var>`__
   provides further information on the variables from this
   section.

   .. rubric:: Variables and macros
      :name: var

   The build system provides many possible variables for use in the
   ``Android.mk`` file. Many of these variables come with preassigned values.
   Others, you assign.

   In addition to these variables, you can also define your own arbitrary ones.
   If you do so, keep in mind that the NDK build system reserves the following
   variable names:

   -  Names that begin with ``LOCAL_``, such as ``LOCAL_MODULE``.
   -  Names that begin with ``PRIVATE_``, ``NDK_``, or ``APP``. The build system
      uses these internally.
   -  Lower-case names, such as ``my-dir``. The build system uses these
      internally, as well.

   If you need to define your own convenience variables in an ``Android.mk``
   file, we recommend prepending ``MY_`` to their names.

   .. rubric:: NDK-defined include variables
      :name: npv

   This section discusses the GNU Make variables that the build system defines
   before parsing your ``Android.mk`` file. Under certain circumstances, the NDK
   might parse your ``Android.mk`` file several times, using a different
   definition for some of these variables each time.

   .. rubric:: CLEAR_VARS
      :name: clear_vars

   This variable points to a build script that undefines nearly all
   ``LOCAL_XXX`` variables listed in the "Developer-defined variables" section
   below. Use this variable to include this script before describing a new
   module. The syntax for using it is:

   .. code:: prettyprint

      include $(CLEAR_VARS)

   .. rubric:: BUILD_EXECUTABLE
      :name: build_executable

   This variable points to a build script that collects all the information
   about the module you provided in your ``LOCAL_XXX`` variables, and determines
   how to build a target executable from the sources you listed. Note that using
   this script requires that you have already assigned values to
   ``LOCAL_MODULE`` and ``LOCAL_SRC_FILES``, at a minimum (for more information
   about these variables, see `Module-description variables <#mdv>`__).

   The syntax for using this variable is:

   .. code:: prettyprint

      include $(BUILD_EXECUTABLE)

   **Note:**\  Most Android apps do not include executables, but they are useful
   for creating unit tests and other debugging tools.

   .. rubric:: BUILD_SHARED_LIBRARY
      :name: build_shared_library

   This variable points to a build script that collects all the information
   about the module you provided in your ``LOCAL_XXX`` variables, and determines
   how to build a target shared library from the sources you listed. Note that
   using this script requires that you have already assigned values to
   ``LOCAL_MODULE`` and ``LOCAL_SRC_FILES``, at a minimum (for more information
   about these variables, see `Module-description variables <#mdv>`__).

   The syntax for using this variable is:

   .. code:: prettyprint

      include $(BUILD_SHARED_LIBRARY)

   A shared-library variable causes the build system to generate a library file
   with a ``.so`` extension.

   .. rubric:: BUILD_STATIC_LIBRARY
      :name: build_static_library

   A variant of ``BUILD_SHARED_LIBRARY`` that is used to build a static library.
   The build system does not copy static libraries into your project/packages,
   but it can use them to build shared libraries (see ``LOCAL_STATIC_LIBRARIES``
   and ``LOCAL_WHOLE_STATIC_LIBRARIES``, below). The syntax for using this
   variable is:

   .. code:: prettyprint

      include $(BUILD_STATIC_LIBRARY)

   A static-library variable causes the build system to generate a library with
   a ``.a`` extension.

   .. rubric:: PREBUILT_SHARED_LIBRARY
      :name: prebuilt_shared_library

   Points to a build script used to specify a prebuilt shared library. Unlike in
   the case of ``BUILD_SHARED_LIBRARY`` and ``BUILD_STATIC_LIBRARY``, here the
   value of ``LOCAL_SRC_FILES`` cannot be a source file. Instead, it must be a
   single path to a prebuilt shared library, such as ``foo/libfoo.so``. The
   syntax for using this variable is:

   .. code:: prettyprint

      include $(PREBUILT_SHARED_LIBRARY)

   You can also reference a prebuilt library in another module by using the
   ``LOCAL_PREBUILTS`` variable. For more information about using prebuilts, see
   `Use prebuilt libraries <#>`__.

   .. rubric:: PREBUILT_STATIC_LIBRARY
      :name: prebuilt_static_library

   The same as ``PREBUILT_SHARED_LIBRARY``, but for a prebuilt static library.
   For more information about using prebuilts, see `Use prebuilt libraries <#>`__.

   .. rubric:: Target information variables
      :name: tiv

   The build system parses ``Android.mk`` once per ABI specified by the
   ``APP_ABI`` variable, which is typically defined in your ``Application.mk``
   file. If ``APP_ABI`` is ``all``, then the build system parses ``Android.mk``
   once per ABI the NDK supports. This section describes variables the build
   system defines each time it parses ``Android.mk``.

   .. rubric:: TARGET_ARCH
      :name: target_arch

   The CPU family the build system is targeting as it parses this ``Android.mk``
   file. This variable will be one of: ``arm``, ``arm64``, ``x86``, or
   ``x86_64``.

   .. rubric:: TARGET_PLATFORM
      :name: target_platform

   The Android API level number the build system is targeting as it parses this
   ``Android.mk`` file. For example, the Android 5.1 system images correspond to
   Android API level 22: ``android-22``. For a complete list of platform names
   and corresponding Android system images, see `Native APIs <#>`__. The following example shows the syntax for
   using this variable:

   .. code:: prettyprint

      ifeq ($(TARGET_PLATFORM),android-22)
          # ... do something ...
      endif

   .. rubric:: TARGET_ARCH_ABI
      :name: taa

   The ABI the build system is targeting as it parses this ``Android.mk`` file.
   Table 1 shows the ABI setting used for each supported CPU and architecture.

   **Table 1.** ABI settings for different CPUs and architectures.

      ====================   =================
      CPU and architecture   Setting
      ====================   =================
      ARMv7                  ``armeabi-v7a``
      ARMv8 AArch64          ``arm64-v8a``
      i686                   ``x86``
      x86-64                 ``x86_64``
      ====================   =================

   The following example shows how to check for ARMv8 AArch64 as the target
   CPU-and-ABI combination:

   .. code:: prettyprint

      ifeq ($(TARGET_ARCH_ABI),arm64-v8a)
        # ... do something ...
      endif

   For more details about architecture ABIs and associated compatibility issues,
   refer to `Android ABIs <#>`__.

   New target ABIs in the future will have different values.

   .. rubric:: TARGET_ABI
      :name: target_abi

   A concatenation of target Android API level and ABI. It is especially useful
   when you want to test against a specific target system image for a real
   device. For example, to check for a 64-bit ARM device running on Android API
   level 22:

   .. code:: prettyprint

      ifeq ($(TARGET_ABI),android-22-arm64-v8a)
        # ... do something ...
      endif

   .. rubric:: Module-description variables
      :name: mdv

   The variables in this section describe your module to the build system. Each
   module description should follow this basic flow:

   #. Initialize or undefine the variables associated with the module, using the
      ``CLEAR_VARS`` variable.
   #. Assign values to the variables used to describe the module.
   #. Set the NDK build system to use the appropriate build script for the
      module, using the ``BUILD_XXX`` variable.

   .. rubric:: LOCAL_PATH
      :name: local_path

   This variable is used to give the path of the current file. You must define
   it at the start of your ``Android.mk`` file. The following example shows how
   to do so:

   .. code:: prettyprint

      LOCAL_PATH := $(call my-dir)

   The script to which ``CLEAR_VARS`` points does not clear this variable.
   Therefore, you only need to define it a single time, even if your
   ``Android.mk`` file describes multiple modules.

   .. rubric:: LOCAL_MODULE
      :name: local_module

   This variable stores the name of your module. It must be unique among all
   module names, and must not contain any spaces. You must define it before
   including any scripts (other than the one for ``CLEAR_VARS``). You need not
   add either the ``lib`` prefix or the ``.so`` or ``.a`` file extension; the
   build system makes these modifications automatically. Throughout your
   ``Android.mk`` and `Application.mk <#>`__ files,
   refer to your module by its unmodified name. For example, the following line
   results in the generation of a shared library module called ``libfoo.so``:

   .. code:: prettyprint

      LOCAL_MODULE := "foo"

   If you want the generated module to have a name other than ``lib`` + the
   value of ``LOCAL_MODULE``, you can use the ``LOCAL_MODULE_FILENAME`` variable
   to give the generated module a name of your own choosing, instead.

   .. rubric:: LOCAL_MODULE_FILENAME
      :name: local_module_filename

   This optional variable allows you to override the names that the build system
   uses by default for files that it generates. For example, if the name of your
   ``LOCAL_MODULE`` is ``foo``, you can force the system to call the file it
   generates ``libnewfoo``. The following example shows how to accomplish this:

   .. code:: prettyprint

      LOCAL_MODULE := foo
      LOCAL_MODULE_FILENAME := libnewfoo

   For a shared library module, this example would generate a file called
   ``libnewfoo.so``.

   **Note:**\  You cannot override filepath or file extension.

   .. rubric:: LOCAL_SRC_FILES
      :name: local_src_files

   This variable contains the list of source files that the build system uses to
   generate the module. Only list the files that the build system actually
   passes to the compiler, since the build system automatically computes any
   associated dependencies. Note that you can use both relative (to
   ``LOCAL_PATH``) and absolute file paths.

   We recommend avoiding absolute file paths; relative paths make your
   ``Android.mk`` file more portable.

   **Note:**\  Always use Unix-style forward slashes (/) in build files. The
   build system does not handle Windows-style backslashes (\\) properly.

   .. rubric:: LOCAL_CPP_EXTENSION
      :name: local_cpp_extension

   You can use this optional variable to indicate a file extension other than
   ``.cpp`` for your C++ source files. For example, the following line changes
   the extension to ``.cxx``. (The setting must include the dot.)

   .. code:: prettyprint

      LOCAL_CPP_EXTENSION := .cxx

   You can use this variable to specify multiple extensions. For instance:

   .. code:: prettyprint

      LOCAL_CPP_EXTENSION := .cxx .cpp .cc

   .. rubric:: LOCAL_CPP_FEATURES
      :name: local_cpp_features

   You can use this optional variable to indicate that your code relies on
   specific C++ features. It enables the right compiler and linker flags during
   the build process. For prebuilt binaries, this variable also declares which
   features the binary depends on, thus helping ensure the final linking works
   correctly. We recommend that you use this variable instead of enabling
   ``-frtti`` and ``-fexceptions`` directly in your ``LOCAL_CPPFLAGS``
   definition.

   Using this variable allows the build system to use the appropriate flags for
   each module. Using ``LOCAL_CPPFLAGS`` causes the compiler to use all
   specified flags for all modules, regardless of actual need.

   For example, to indicate that your code uses RTTI (RunTime Type Information),
   write:

   .. code:: prettyprint

      LOCAL_CPP_FEATURES := rtti

   To indicate that your code uses C++ exceptions, write:

   .. code:: prettyprint

      LOCAL_CPP_FEATURES := exceptions

   You can also specify multiple values for this variable. For example:

   .. code:: prettyprint

      LOCAL_CPP_FEATURES := rtti features

   The order in which you describe the values does not matter.

   .. rubric:: LOCAL_C_INCLUDES
      :name: local_c_includes

   You can use this optional variable to specify a list of paths, relative to
   the NDK ``root`` directory, to add to the include search path when compiling
   all sources (C, C++ and Assembly). For example:

   .. code:: prettyprint

      LOCAL_C_INCLUDES := sources/foo

   Or even:

   .. code:: prettyprint

      LOCAL_C_INCLUDES := $(LOCAL_PATH)/<subdirectory>/foo

   Define this variable before setting any corresponding inclusion flags via
   ``LOCAL_CFLAGS`` or ``LOCAL_CPPFLAGS``.

   The build system also uses ``LOCAL_C_INCLUDES`` paths automatically when
   launching native debugging with ndk-gdb.

   .. rubric:: LOCAL_CFLAGS
      :name: local_cflags

   This optional variable sets compiler flags for the build system to pass when
   building C *and* C++ source files. The ability to do so can be useful for
   specifying additional macro definitions or compile options. Use
   ``LOCAL_CPPFLAGS`` to specify flags for C++ only.

   Try not to change the optimization/debugging level in your ``Android.mk``
   file. The build system can handle this setting automatically for you, using
   the relevant information in the
   `Application.mk <#>`__ file. Doing it this way
   allows the build system to generate useful data files used during debugging.

   It is possible to specify additional include paths by writing:

   .. code:: prettyprint

      LOCAL_CFLAGS += -I<path>,

   It is better, however, to use ``LOCAL_C_INCLUDES`` for this purpose, since
   doing so also makes it possible to use the paths available for native
   debugging with ndk-gdb.

   .. rubric:: LOCAL_CPPFLAGS
      :name: local_cppflags

   An optional set of compiler flags that will be passed when building C++
   source files *only*. They will appear after the ``LOCAL_CFLAGS`` on the
   compiler's command-line. Use ``LOCAL_CFLAGS`` to specify flags for both C and
   C++.

   .. rubric:: LOCAL_STATIC_LIBRARIES
      :name: local_static_libraries

   This variable stores the list of static libraries modules on which the
   current module depends.

   If the current module is a shared library or an executable, this variable
   will force these libraries to be linked into the resulting binary.

   If the current module is a static library, this variable simply indicates
   that other modules depending on the current one will also depend on the
   listed libraries.

   .. rubric:: LOCAL_SHARED_LIBRARIES
      :name: local_shared_libraries

   This variable is the list of shared libraries *modules* on which this module
   depends at runtime. This information is necessary at link time, and to embed
   the corresponding information in the generated file.

   .. rubric:: LOCAL_WHOLE_STATIC_LIBRARIES
      :name: local_whole_static_libraries

   This variable is a variant of ``LOCAL_STATIC_LIBRARIES``, and expresses that
   the linker should treat the associated library modules as *whole archives*.
   For more information on whole archives, see the 
   `GNU ld documentation <http://ftp.gnu.org/old-gnu/Manuals/ld-2.9.1/html_node/ld_3.html>`__
   for the ``--whole-archive`` flag.

   This variable is useful when there are circular dependencies among several
   static libraries. When you use this variable to build a shared library, it
   will force the build system to add all object files from your static
   libraries to the final binary. The same is not true, however, when generating
   executables.

   .. rubric:: LOCAL_LDLIBS
      :name: local_ldlibs

   This variable contains the list of additional linker flags for use in
   building your shared library or executable. It enables you to use the ``-l``
   prefix to pass the name of specific system libraries. For example, the
   following example tells the linker to generate a module that links to
   ``/system/lib/libz.so`` at load time:

   .. code:: prettyprint

      LOCAL_LDLIBS := -lz

   For the list of exposed system libraries against which you can link in this
   NDK release, see `Native APIs <#>`__.

   **Note:**\  If you define this variable for a static library, the build
   system ignores it, and ``ndk-build`` prints a warning.

   .. rubric:: LOCAL_LDFLAGS
      :name: local_ldflags

   The list of other linker flags for the build system to use when building your
   shared library or executable. For example, to use the ``ld.bfd`` linker on
   ARM/X86:

   .. code:: prettyprint

      LOCAL_LDFLAGS += -fuse-ld=bfd

   **Note:**\  If you define this variable for a static library, the build
   system ignores it, and ndk-build prints a warning.

   .. rubric:: LOCAL_ALLOW_UNDEFINED_SYMBOLS
      :name: local_allow_undefined_symbols

   By default, when the build system encounters an undefined reference
   encountered while trying to build a shared, it will throw an *undefined
   symbol* error. This error can help you catch bugs in your source code.

   To disable this check, set this variable to ``true``. Note that this setting
   may cause the shared library to load at runtime.

   **Note:**\  If you define this variable for a static library, the build
   system ignores it, and ndk-build prints a warning.

   .. rubric:: LOCAL_ARM_MODE
      :name: local_arm_mode

   By default, the build system generates ARM target binaries in *thumb* mode,
   where each instruction is 16 bits wide and linked with the STL libraries in
   the ``thumb/`` directory. Defining this variable as ``arm`` forces the build
   system to generate the module's object files in 32-bit ``arm`` mode. The
   following example shows how to do this:

   .. code:: prettyprint

      LOCAL_ARM_MODE := arm

   You can also instruct the build system to only build specific sources in
   ``arm`` mode by appending ``.arm`` suffix to the source filenames. For
   example, the following example tells the build system to always compile
   ``bar.c`` in ARM mode, but to build ``foo.c`` according to the value of
   ``LOCAL_ARM_MODE``.

   .. code:: prettyprint

      LOCAL_SRC_FILES := foo.c bar.c.arm

   **Note:**\  You can also force the build system to generate ARM binaries by
   setting ``APP_OPTIM`` in your
   `Application.mk <#>`__ file to ``debug``.
   Specifying ``debug`` forces an ARM build because the toolchain debugger does
   not handle Thumb code properly.

   .. rubric:: LOCAL_ARM_NEON
      :name: local_arm_neon

   This variable only matters when you are targeting the ``armeabi-v7a`` ABI. It
   allows the use of ARM Advanced SIMD (NEON) compiler intrinsics in your C and
   C++ sources, as well as NEON instructions in Assembly files.

   Note that not all ARMv7-based CPUs support the NEON instruction set
   extensions. For this reason, you must perform runtime detection to be able to
   safely use this code at runtime. For more information, see `Neon support <#>`__ and `CPU features <#>`__.

   Alternatively, you can use the ``.neon`` suffix to specify that the build
   system only compile specific source files with NEON support. In the following
   example, the build system compiles ``foo.c`` with thumb and neon support,
   ``bar.c`` with thumb support, and ``zoo.c`` with support for ARM and NEON:

   .. code:: prettyprint

      LOCAL_SRC_FILES = foo.c.neon bar.c zoo.c.arm.neon

   If you use both suffixes, ``.arm`` must precede ``.neon``.

   .. rubric:: LOCAL_DISABLE_FORMAT_STRING_CHECKS
      :name: local_disable_format_string_checks

   By default, the build system compiles code with format string protection.
   Doing so forces a compiler error if a non-constant format string is used in a
   ``printf``-style function. This protection is on by default, but you can
   disable it by setting the value of this variable to ``true``. We do not
   recommend doing so without a compelling reason.

   .. rubric:: LOCAL_EXPORT_CFLAGS
      :name: local_export_cflags

   This variable records a set of C/C++ compiler flags to add to the
   ``LOCAL_CFLAGS`` definition of any other module that uses this one via the
   ``LOCAL_STATIC_LIBRARIES`` or ``LOCAL_SHARED_LIBRARIES`` variables.

   For example, consider the following pair of modules: ``foo`` and ``bar``,
   which depends on ``foo``:

   .. code:: prettyprint

      include $(CLEAR_VARS)
      LOCAL_MODULE := foo
      LOCAL_SRC_FILES := foo/foo.c
      LOCAL_EXPORT_CFLAGS := -DFOO=1
      include $(BUILD_STATIC_LIBRARY)


      include $(CLEAR_VARS)
      LOCAL_MODULE := bar
      LOCAL_SRC_FILES := bar.c
      LOCAL_CFLAGS := -DBAR=2
      LOCAL_STATIC_LIBRARIES := foo
      include $(BUILD_SHARED_LIBRARY)

   Here, the build system passes the flags ``-DFOO=1`` and ``-DBAR=2`` to the
   compiler when building ``bar.c``. It also prepends exported flags to your
   your module's ``LOCAL_CFLAGS`` so you can easily override them.

   In addition, the relationship among modules is transitive: If ``zoo`` depends
   on ``bar``, which in turn depends on ``foo``, then ``zoo`` also inherits all
   flags exported from ``foo``.

   Finally, the build system does not use exported flags when building locally
   (i.e., building the module whose flags it is exporting). Thus, in the example
   above, it does not pass ``-DFOO=1`` to the compiler when building
   ``foo/foo.c``. To build locally, use ``LOCAL_CFLAGS`` instead.

   .. rubric:: LOCAL_EXPORT_CPPFLAGS
      :name: local_export_cppflags

   This variable is the same as ``LOCAL_EXPORT_CFLAGS``, but for C++ flags only.

   .. rubric:: LOCAL_EXPORT_C_INCLUDES
      :name: local_export_c_includes

   This variable is the same as ``LOCAL_EXPORT_CFLAGS``, but for C include
   paths. It is useful in cases where, for example, ``bar.c`` needs to include
   headers from module ``foo``.

   .. rubric:: LOCAL_EXPORT_LDFLAGS
      :name: local_export_ldflags

   This variable is the same as ``LOCAL_EXPORT_CFLAGS``, but for linker flags.

   .. rubric:: LOCAL_EXPORT_LDLIBS
      :name: local_export_ldlibs

   This variable is the same as ``LOCAL_EXPORT_CFLAGS``, telling the build
   system to pass names of specific system libraries to the compiler. Prepend
   ``-l`` to the name of each library you specify.

   Note that the build system appends imported linker flags to the value of your
   module's ``LOCAL_LDLIBS`` variable. It does this due to the way Unix linkers
   work.

   This variable is typically useful when module ``foo`` is a static library and
   has code that depends on a system library. You can then use
   ``LOCAL_EXPORT_LDLIBS`` to to export the dependency. For example:

   .. code:: prettyprint

      include $(CLEAR_VARS)
      LOCAL_MODULE := foo
      LOCAL_SRC_FILES := foo/foo.c
      LOCAL_EXPORT_LDLIBS := -llog
      include $(BUILD_STATIC_LIBRARY)

      include $(CLEAR_VARS)
      LOCAL_MODULE := bar
      LOCAL_SRC_FILES := bar.c
      LOCAL_STATIC_LIBRARIES := foo
      include $(BUILD_SHARED_LIBRARY)

   In this example, the build system puts ``-llog`` at the end of the linker
   command when it builds ``libbar.so``. Doing so tells the linker that, because
   ``libbar.so`` depends on ``foo``, it also depends on the system logging
   library.

   .. rubric:: LOCAL_SHORT_COMMANDS
      :name: local_short_commands

   Set this variable to ``true`` when your module has a very high number of
   sources and/or dependent static or shared libraries. Doing so forces the
   build system to use ``@`` syntax for archives containing intermediate object
   files or linking libraries.

   This feature can be useful on Windows, where the command line accepts a
   maximum of only of 8191 characters, which can be too small for complex
   projects. It also impacts the compilation of individual source files, placing
   nearly all compiler flags inside list files, too.

   Note that any value other than ``true`` will revert to the default behaviour.
   You can also define ``APP_SHORT_COMMANDS`` in your
   `Application.mk <#>`__ file to force this
   behavior for all modules in your project.

   We do not recommend enabling this feature by default, since it makes the
   build slower.

   .. rubric:: LOCAL_THIN_ARCHIVE
      :name: local_thin_archive

   Set this variable to ``true`` when building static libraries. Doing so will
   generate a **thin archive**, a library file that does not contain object
   files, but instead just file paths to the actual objects that it would
   normally contain.

   This is useful to reduce the size of your build output. The drawback is that
   such libraries *cannot* be moved to a different location (all paths inside
   them are relative).

   Valid values are ``true``, ``false`` or empty. A default value can be set in
   your `Application.mk <#>`__ file through the ``APP_THIN_ARCHIVE`` variable.

   **Note:**\  This is ignored for non-static library modules, or prebuilt
   static library ones.

   .. rubric:: LOCAL_FILTER_ASM
      :name: local_filter_asm

   Define this variable as a shell command that the build system will use to
   filter the assembly files extracted or generated from the files you specified
   for ``LOCAL_SRC_FILES``. Defining this variable causes the following things
   to occur:

   #. The build system generates a temporary assembly file from any C or C++
      source file, instead of compiling them into an object file.
   #. The build system executes the shell command in ``LOCAL_FILTER_ASM`` on any
      temporary assembly file and on any assembly file listed in
      ``LOCAL_SRC_FILES``, thus generating another temporary assembly file.
   #. The build system compiles these filtered assembly files into an object
      file.

   For example:

   .. code:: prettyprint

      LOCAL_SRC_FILES  := foo.c bar.S
      LOCAL_FILTER_ASM :=

      foo.c --1--> $OBJS_DIR/foo.S.original --2--> $OBJS_DIR/foo.S --3--> $OBJS_DIR/foo.o
      bar.S                                 --2--> $OBJS_DIR/bar.S --3--> $OBJS_DIR/bar.o

   "1" corresponds to the compiler, "2" to the filter, and "3" to the assembler.
   The filter must be a standalone shell command that takes the name of the
   input file as its first argument, and the name of the output file as the
   second one. For example:

   .. code:: prettyprint

      myasmfilter $OBJS_DIR/foo.S.original $OBJS_DIR/foo.S
      myasmfilter bar.S $OBJS_DIR/bar.S

   .. rubric:: NDK-provided function macros
      :name: npfm

   This section explains GNU Make function macros that the NDK provides. Use
   ``$(call <function>)`` to evaluate them; they return textual information.

   .. rubric:: my-dir
      :name: my-dir

   This macro returns the path of the last included makefile, which typically is
   the current ``Android.mk``'s directory. ``my-dir`` is useful for defining
   ``LOCAL_PATH`` at the start of your ``Android.mk`` file. For example:

   .. code:: prettyprint

      LOCAL_PATH := $(call my-dir)

   Due to the way GNU Make works, what this macro really returns is the path of
   the last makefile that the build system included when parsing the build
   scripts. For this reason, you should not call ``my-dir`` after including
   another file.

   For example, consider the following example:

   .. code:: prettyprint

      LOCAL_PATH := $(call my-dir)

      # ... declare one module

      include $(LOCAL_PATH)/foo/`Android.mk`

      LOCAL_PATH := $(call my-dir)

      # ... declare another module

   The problem here is that the second call to ``my-dir`` defines ``LOCAL_PATH``
   as ``$PATH/foo`` instead of ``$PATH``, because that was where its most recent
   include pointed.

   You can avoid this problem by putting additional includes after everything
   else in the ``Android.mk`` file. For example:

   .. code:: prettyprint

      LOCAL_PATH := $(call my-dir)

      # ... declare one module

      LOCAL_PATH := $(call my-dir)

      # ... declare another module

      # extra includes at the end of the Android.mk file
      include $(LOCAL_PATH)/foo/Android.mk

   If it is not feasible to structure the file in this way, save the value of
   the first ``my-dir`` call into another variable. For example:

   .. code:: prettyprint

      MY_LOCAL_PATH := $(call my-dir)

      LOCAL_PATH := $(MY_LOCAL_PATH)

      # ... declare one module

      include $(LOCAL_PATH)/foo/`Android.mk`

      LOCAL_PATH := $(MY_LOCAL_PATH)

      # ... declare another module

   .. rubric:: all-subdir-makefiles
      :name: all-subdir-makefiles

   Returns the list of ``Android.mk`` files located in all subdirectories of the
   current ``my-dir`` path.

   You can use this function to provide deep-nested source directory hierarchies
   to the build system. By default, the NDK only looks for files in the
   directory containing the ``Android.mk`` file.

   .. rubric:: this-makefile
      :name: this-makefile

   Returns the path of the current makefile (from which the build system called
   the function).

   .. rubric:: parent-makefile
      :name: parent-makefile

   Returns the path of the parent makefile in the inclusion tree (the path of
   the makefile that included the current one).

   .. rubric:: grand-parent-makefile
      :name: grand-parent-makefile

   Returns the path of the grandparent makefile in the inclusion tree (the path
   of the makefile that included the current one).

   .. rubric:: import-module
      :name: import-module

   A function that allows you to find and include a module's ``Android.mk`` file
   by the name of the module. A typical example is as follows:

   .. code:: prettyprint

      $(call import-module,<name>)

   In this example, the build system looks for the module tagged ``<name>`` in
   the list of directories referenced that your ``NDK_MODULE_PATH`` environment
   variable references, and includes its ``Android.mk`` file automatically for
   you.

Last updated 2024-01-03 UTC.

/Application.mk
===============

.. https://developer.android.google.cn/ndk/guides/application_mk?hl=en

.. container:: devsite-article-body clearfix

   This document explains the ``Application.mk`` build file used by
   ``ndk-build``.

   We recommend that you read the `Concepts <#>`__ page
   before this one.

   .. rubric:: Overview
      :name: overview

   The ``Application.mk`` specifies project-wide settings for ndk-build. By
   default, it is located at ``jni/Application.mk``, in your application's
   project directory.

   **Note:**\  Many of these parameters also have a per-module equivalent. For
   example, ``APP_CFLAGS`` corresponds to ``LOCAL_CFLAGS``. In every case, the
   module-specific option will take precedence over the application-wide option.
   For flags, both are used but the module-specific flags will appear later in
   the command line so they may override project-wide settings.

   .. rubric:: Variables
      :name: variables

   .. rubric:: APP_ABI
      :name: app_abi

   By default, the NDK build system generates code for all non-deprecated ABIs.
   You can use the ``APP_ABI`` setting to generate code for specific ABIs. Table
   1 shows the ``APP_ABI`` settings for different instruction sets.

   **Table 1.** ``APP_ABI`` settings for different instruction sets.

      ==============================  ===============================
      Instruction set                  Value
      ==============================  ===============================
      32-bit ARMv7                     ``APP_ABI := armeabi-v7a``
      64-bit ARMv8 (AArch64)           ``APP_ABI := arm64-v8a``
      x86                              ``APP_ABI := x86``
      x86-64                           ``APP_ABI := x86_64``
      All supported ABIs (default)     ``APP_ABI := all``
      ==============================  ===============================

   You can also specify multiple values by placing them on the same line,
   delimited by spaces. For example:

   .. code:: prettyprint

      APP_ABI := armeabi-v7a arm64-v8a x86

   **Note:**\  ``APP_ABI`` is ignored by Gradle's ``externalNativeBuild``.
   Instead, use an ``abiFilters`` block or (if you are using "Multiple APKs") an
   ``abi`` block inside a ``splits`` block.
   For the list of all supported ABIs and details about their usage and
   limitations, refer to `Android ABIs <#>`__.

   .. rubric:: APP_ASFLAGS
      :name: app_asflags

   Flags to be passed to the assembler for every assembly source file (``.s``
   and ``.S`` files) in the project.

   **Note:**\  ``ASFLAGS`` are distinct from ``ASMFLAGS``. The latter applies
   specifically to YASM source files (see the section on
   `APP_ASMFLAGS <#app_asmflags>`__).

   .. rubric:: APP_ASMFLAGS
      :name: app_asmflags

   Flags to be passed to YASM when for all YASM source files (``.asm``,
   x86/x86_64 only).

   .. rubric:: APP_BUILD_SCRIPT
      :name: app_build_script

   By default, ndk-build assumes that the
   `Android.mk <#>`__ file is located at ``jni/Android.mk``
   relative to the project root.

   To load an `Android.mk <#>`__ file from a different
   location, set ``APP_BUILD_SCRIPT`` to the absolute path of the Android.mk
   file.

   **Note:**\  Gradle's ``externalNativeBuild`` will configure this
   automatically based on the ``externalNativeBuild.ndkBuild.path`` variable.

   .. rubric:: APP_CFLAGS
      :name: app_cflags

   Flags to be passed for all C/C++ compiles in the project.

   **Note:**\  Include paths should use ``LOCAL_C_INCLUDES`` rather than
   explicit ``-I`` flags.
   See also: `APP_CONLYFLAGS <#app_conlyflags>`__,
   `APP_CPPFLAGS <#app_cppflags>`__.

   .. rubric:: APP_CLANG_TIDY
      :name: app_clang_tidy

   Set to true to enable clang-tidy for all modules in the project. Disabled by
   default.

   .. rubric:: APP_CLANG_TIDY_FLAGS
      :name: app_clang_tidy_flags

   Flags to pass for all clang-tidy executions in the project.

   .. rubric:: APP_CONLYFLAGS
      :name: app_conlyflags

   Flags to be passed for all C compiles in the project. These flags will not be
   used for C++ code.

   See also: `APP_CFLAGS <#app_cflags>`__, `APP_CPPFLAGS <#app_cppflags>`__.

   .. rubric:: APP_CPPFLAGS
      :name: app_cppflags

   Flags to be passed for all C++ compiles in the project. These flags will not
   be used for C code.

   See also: `APP_CFLAGS <#app_cflags>`__, `APP_CONLYFLAGS <#app_conlyflags>`__.

   .. rubric:: APP_CXXFLAGS
      :name: app_cxxflags

   **Note:**\  `APP_CPPFLAGS <#app_cppflags>`__ should be preferred to
   ``APP_CXXFLAGS``.
   Identical to ``APP_CPPFLAGS``, but will appear after ``APP_CPPFLAGS`` in the
   compile command. For example:

   .. code:: prettyprint

      APP_CPPFLAGS := -DFOO
      APP_CXXFLAGS := -DBAR

   The above configuration will result in a compilation command similar to
   ``clang++ -DFOO -DBAR`` rather than ``clang++ -DBAR -DFOO``.

   .. rubric:: APP_DEBUG
      :name: app_debug

   Set to true to build a debuggable application.

   .. rubric:: APP_LDFLAGS
      :name: app_ldflags

   Flags to be passed when linking executables and shared libraries.

   **Note:**\  These flags have no effect on static libraries. Static libraries
   are not linked.

   .. rubric:: APP_MANIFEST
      :name: app_manifest

   Absolute path to an AndroidManifest.xml file.

   By default, ``$(APP_PROJECT_PATH)/AndroidManifest.xml)`` will be used if it
   exists.

   **Note:**\  When using ``externalNativeBuild`` this value will not be set by
   Gradle.

   .. rubric:: APP_MODULES
      :name: app_modules

   An explicit list of modules to build. The elements of this list are the names
   of the modules as they appear in ``LOCAL_MODULE`` within the
   `Android.mk <#>`__ file.

   By default, ndk-build will build all shared libraries, executables, and their
   dependencies. Static libraries will be built only if they are used by the
   project, the project contains *only* static libraries, or if they are named
   in ``APP_MODULES``.

   **Note:**\  Imported modules (those defined in build scripts imported with
   ``$(call import-module)`` will not be built unless depended on by a module to
   be built or listed in ``APP_MODULES``.

   .. rubric:: APP_OPTIM
      :name: app_optim

   Define this optional variable as either ``release`` or ``debug``. Release
   binaries will be built by default.

   Release mode enables optimizations and may produce binaries that are not
   usable with a debugger. Debug mode disables optimizations so that debuggers
   may be used.

   Note that you can debug either release or debug binaries. Release binaries,
   however, provide less information during debugging. For example, variables
   may be optimized out, preventing inspection. Also, code re-ordering can make
   it more difficult to step through the code; stack traces may not be reliable.

   Declaring ``android:debuggable`` in your application manifest's
   ``<application>`` tag will cause this variable to default to ``debug``
   instead of ``release``. Override this default value by setting ``APP_OPTIM``
   to ``release``.

   **Note:**\  When building with ``externalNativeBuild``, Android Studio will
   set this flag appropriately based on your build flavor.

   .. rubric:: APP_PLATFORM
      :name: app_platform

   ``APP_PLATFORM`` declares the Android API level this application is built
   against and corresponds to the application's ``minSdkVersion``.

   If not specified, ndk-build will target the minimum API level supported by
   the NDK. The minimum API level supported by the latest NDK will always be low
   enough to support nearly all active devices.

   **Warning:**\  Setting ``APP_PLATFORM`` higher than an application's
   ``minSdkVersion`` will likely produce an application that will not run on
   older devices. In most cases the libraries will fail to load because they
   refer to symbols that are not available on older devices.
   For example, a value of ``android-16`` specifies that your library uses APIs
   that are not available below Android 4.1 (API level 16) and can't be used on
   devices running a lower platform version. For a complete list of platform
   names and corresponding Android system images, see `Android NDK native APIs <#>`__.

   When using Gradle and ``externalNativeBuild``, this parameter should not be
   set directly. Instead, set the ``minSdkVersion`` property in the
   ``defaultConfig`` or ``productFlavors`` blocks of your
   `module-level <#>`__ ``build.gradle`` file. This
   makes sure your library is used only by apps installed on devices running an
   adequate version of Android.

   Note that the NDK does not contain libraries for every API level of Android.
   Versions that did not include new native APIs are omitted to save space in
   the NDK. ndk-build uses, in descending order of preference:

   #. The platform version matching ``APP_PLATFORM``.
   #. The next available API level below ``APP_PLATFORM``. For example,
      ``android-19`` will be used when ``APP_PLATFORM`` is ``android-20``, since
      there were no new native APIs in android-20.
   #. The minimum API level supported by the NDK.

   .. rubric:: APP_PROJECT_PATH
      :name: app_project_path

   The absolute path of the project's root directory.

   .. rubric:: APP_SHORT_COMMANDS
      :name: app_short_commands

   The project-wide equivalent of ``LOCAL_SHORT_COMMANDS``. For more
   information, see the documentation for ``LOCAL_SHORT_COMMANDS`` in
   `Android.mk <#>`__.

   .. rubric:: APP_STL
      :name: app_stl

   The C++ standard library to use for this application.

   The ``system`` STL is used by default. Other choices are ``c++_shared``,
   ``c++_static``, and ``none``. See `NDK C++ Runtimes and Features <#>`__.

   .. rubric:: APP_STRIP_MODE
      :name: app_strip_mode

   The argument to be passed to ``strip`` for modules in this application.
   Defaults to ``--strip-unneeded``. To avoid stripping all binaries in the
   module, set to ``none``. For other strip modes, see the 
   `strip documentation <https://sourceware.org/binutils/docs/binutils/strip.html>`__.

   .. rubric:: APP_THIN_ARCHIVE
      :name: app_thin_archive

   Set to true to use thin archives for all static libraries in the project. For
   more information, see the documentation for ``LOCAL_THIN_ARCHIVE`` in
   `Android.mk <#>`__.

   .. rubric:: APP_WRAP_SH
      :name: app_wrap_sh

   Path to the `wrap.sh <#>`__ file to be included with
   this application.

   A variant of this variable exists for each ABI, as does an ABI-generic
   variant:

   -  ``APP_WRAP_SH``
   -  ``APP_WRAP_SH_armeabi-v7a``
   -  ``APP_WRAP_SH_arm64-v8a``
   -  ``APP_WRAP_SH_x86``
   -  ``APP_WRAP_SH_x86_64``

   **Note:**\  ``APP_WRAP_SH_<abi>`` may not be combined with ``APP_WRAP_SH``.
   If any ABI uses an ABI-specific wrap.sh, all ABIs must.

Last updated 2024-01-03 UTC.

/Use prebuilt libraries
=======================

.. https://developer.android.google.cn/ndk/guides/prebuilts?hl=en

.. container:: devsite-article-body clearfix

   The NDK supports the use of prebuilt libraries, both static and shared. There
   are two principal use cases for this functionality:

   -  Distributing your own libraries to third-party NDK developers without
      distributing your sources.
   -  Using a prebuilt version of your own libraries to speed up your build.

   This page explains how to use prebuilt libraries.

   .. rubric:: Declare a prebuilt library
      :name: dm

   You must declare each prebuilt library you use as an independent module. To
   do so, perform the following steps:

   #. Give the module a name. This name does not need to be the same as that of
      the prebuilt library, itself.

   #. In the module's `Android.mk <#>`__ file, assign to
      ``LOCAL_SRC_FILES`` the path to the prebuilt library you are providing.
      Specify the path relative to the value of your ``LOCAL_PATH`` variable.

      **Note:**\  You must make sure to select the version of your prebuilt
      library appropriate to your target ABI. For more information on ensuring
      library support for ABIs, see `Select ABIs for prebuilt libraries <#sa>`__.

   #. Include ``PREBUILT_SHARED_LIBRARY`` or ``PREBUILT_STATIC_LIBRARY``,
      depending on whether you are using a shared (``.so``) or static (``.a``)
      library.

   Here is a trivial example that assumes the prebuilt library ``libfoo.so``
   resides in the same directory as the `Android.mk <#>`__
   file that describes it.

   .. code:: prettyprint

      LOCAL_PATH := $(call my-dir)

      include $(CLEAR_VARS)
      LOCAL_MODULE := foo-prebuilt
      LOCAL_SRC_FILES := libfoo.so
      include $(PREBUILT_SHARED_LIBRARY)

   In this example, the name of the module is the same as that of the prebuilt
   library.

   The build system places a copy of your prebuilt shared library into
   ``$PROJECT/obj/local``, and another copy, stripped of debug information, into
   ``$PROJECT/libs/<abi>``. Here, ``$PROJECT`` is the root directory of your
   project.

   .. rubric:: Reference the prebuilt library from other modules
      :name: rp

   To reference a prebuilt library from other modules, specify its name as the
   value of the ``LOCAL_STATIC_LIBRARIES`` or ``LOCAL_SHARED_LIBRARIES``
   variable in the `Android.mk <#>`__ files associated with
   those other modules.

   For example, the description of a module using ``libfoo.so`` might be as
   follows:

   .. code:: prettyprint

      include $(CLEAR_VARS)
      LOCAL_MODULE := foo-user
      LOCAL_SRC_FILES := foo-user.c
      LOCAL_SHARED_LIBRARIES := foo-prebuilt
      include $(BUILD_SHARED_LIBRARY)

   Here, ``LOCAL_MODULE`` is the name of the module referring to the prebuilt;
   ``LOCAL_SHARED_LIBRARIES`` is the name of the prebuilt, itself.

   .. rubric:: Export headers for prebuilt libraries
      :name: export_headers

   The code in ``foo-user.c`` depends on specific declarations that normally
   reside in a header file, such as ``foo.h``, distributed with the prebuilt
   library. For example, ``foo-user.c`` might have a line like the following:

   .. code:: cpp

      #include <foo.h>

   In such a case, you need to provide the header and its include path to the
   compiler when you build the ``foo-user`` module. A simple way to accomplish
   this task is to use exports in the prebuilt module definition. For example,
   as long as header ``foo.h`` is located under the ``include`` directory
   associated with the prebuilt module, you can declare it as follows:

   .. code:: prettyprint

      include $(CLEAR_VARS)
      LOCAL_MODULE := foo-prebuilt
      LOCAL_SRC_FILES := libfoo.so
      LOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH)/include
      include $(PREBUILT_SHARED_LIBRARY)

   The ``LOCAL_EXPORT_C_INCLUDES`` definition here ensures that the build system
   exports the path to the prebuilt library's ``include`` directory, prepending
   that path onto the value of the ``LOCAL_C_INCLUDES`` for the module dependent
   on it.

   This operation allows the build system to find the necessary headers.

   .. rubric:: Debug prebuilt libraries
      :name: dp

   We recommend that you provide prebuilt shared libraries containing debug
   symbols. The NDK build system always strips the symbols from the version of
   the library that it installs into ``$PROJECT/libs/<abi>/``, but you can use
   the debug version for debugging with ``ndk-gdb``.

   .. rubric:: Select ABIs for prebuilt libraries
      :name: sa

   You must make sure to select the right version of your prebuilt shared
   library for your targeted ABI. The
   `TARGET_ARCH_ABI <#>`__ variable in the
   `Android.mk <#>`__ file can point the build system at
   the appropriate version of the library.

   For example, assume that your project contains two versions of library
   ``libfoo.so``:

   .. code:: devsite-click-to-copy

      armeabi/libfoo.so
      x86/libfoo.so

   The following snippet shows how to use ``TARGET_ARCH_ABI`` so that the build
   system selects the appropriate version of the library:

   .. code:: prettyprint

      include $(CLEAR_VARS)
      LOCAL_MODULE := foo-prebuilt
      LOCAL_SRC_FILES := $(TARGET_ARCH_ABI)/libfoo.so
      LOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH)/include
      include $(PREBUILT_SHARED_LIBRARY)

   If you have specified ``armeabi`` as the value of ``TARGET_ARCH_ABI``, the
   build system uses the version of ``libfoo.so`` located in the ``armeabi``
   directory. If you have specified ``x86`` as the value ``TARGET_ARCH_ABI``,
   the build system uses the version in the ``x86`` directory.

Last updated 2020-08-17 UTC.

/CMake
======

.. https://developer.android.google.cn/ndk/guides/cmake?hl=en

.. container:: devsite-article-body clearfix

   The Android NDK supports using `CMake <https://cmake.org/>`__ to compile C
   and C++ code for your application. This page discusses how to use CMake with
   the NDK via the Android Gradle Plugin's ``ExternalNativeBuild`` or when
   invoking CMake directly.

   **Note:**\  If you are using Android Studio, go to `Add C and C++ code to your project <#>`__ to learn the basics of
   adding native sources to your project, creating a CMake build script, adding
   your CMake project as a Gradle dependency, and using newer versions of CMake
   than those included in the SDK.

   .. rubric:: The CMake toolchain file
      :name: file

   The NDK supports CMake via a `toolchain file <https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html>`__.
   Toolchain files are CMake files that customize the behavior of the toolchain
   for cross-compiling. The toolchain file used for the NDK is located in the
   NDK at ``<NDK>/build/cmake/android.toolchain.cmake``.

   **Note:**\  If the Android SDK is installed, then the NDK is installed in the
   SDK directory in ``ndk/``\ ``version``\ ``/`` or ``ndk-bundle/``.
   Build parameters such as ABI, ``minSdkVersion``, etc. are given on the
   command line when invoking ``cmake``. For a list of supported arguments, see
   the `Toolchain arguments <#variables>`__ section.

   **Warning:**\  CMake has its `own built-in NDK support <https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html#cross-compiling-for-android>`__.
   Before CMake 3.21, this workflow is not supported by Android and is often
   broken with new NDK releases. Starting from CMake 3.21, the implementations
   are merged. CMake's built-in support has similar behavior to the NDK
   toolchain file, though variable names differ. Starting from Android NDK r23,
   the toolchain file will delegate to CMake's built-in support when using CMake
   3.21 or later. See `Issue 463 <https://github.com/android/ndk/issues/463>`__
   for more information. Note that the Android Gradle Plugin still uses the
   NDK's toolchain file automatically.

   .. rubric:: Usage
      :name: usage

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: Gradle
            :name: gradle

         Use of the CMake toolchain file is automatic when using
         ``externalNativeBuild``. See Android Studio's `Add C and C++ code to your project <#>`__ guide for more
         information.

      .. container:: section

         .. rubric:: Command Line
            :name: command-line

         When building with CMake outside of Gradle, the toolchain file itself
         and its arguments must be passed to CMake. For example:

         .. code:: prettyprint

            $ cmake \
                -DCMAKE_TOOLCHAIN_FILE=$NDK/build/cmake/android.toolchain.cmake \
                -DANDROID_ABI=$ABI \
                -DANDROID_PLATFORM=android-$MINSDKVERSION \
                $OTHER_ARGS

   .. rubric:: Toolchain arguments
      :name: variables

   The following arguments can be passed to the CMake toolchain file. If
   building with Gradle, add arguments to
   ``android.defaultConfig.externalNativeBuild.cmake.arguments`` as described in
   the `ExternalNativeBuild docs <#>`__.
   If building from the command line, pass arguments to CMake with ``-D``. For
   example, to force armeabi-v7a to not build with Neon support, pass
   ``-DANDROID_ARM_NEON=FALSE``.

   **Note:**\  Any required arguments are passed automatically by Gradle and
   need only be passed explicitly if building from the command line.

   .. rubric:: ``ANDROID_ABI``
      :name: android_abi

   **Note:**\  This is a required argument.
   The target ABI. For information on supported ABIs, see `Android ABIs <#>`__.

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: Gradle
            :name: gradle_1

         Gradle provides this argument automatically. Do not explicitly set this
         argument in your ``build.gradle`` file. To control what ABIs Gradle
         targets, use ``abiFilters`` as described in `Android ABIs <#>`__.

      .. container:: section

         .. rubric:: Command Line
            :name: command-line_1

         CMake builds for a single target per build. To target more than one
         Android ABI, you must build once per ABI. It is recommended to use
         different build directories for each ABI to avoid collisions between
         builds.

         ========================= ========================
         Value                     Notes
         ========================= ========================
         ``armeabi-v7a``           
         ``armeabi-v7a with NEON`` Same as ``armeabi-v7a``.
         ``arm64-v8a``             
         ``x86``                   
         ``x86_64``                
         ========================= ========================


   .. rubric:: ``ANDROID_ARM_MODE``
      :name: android_arm_mode

   Specifies whether to generate arm or thumb instructions for armeabi-v7a. Has
   no effect for other ABIs. For more information, see the `Android ABIs <#>`__ documentation.

   ===== =================
   Value Notes
   ===== =================
   arm   -
   thumb Default behavior.
   ===== =================

   .. rubric:: ``ANDROID_ARM_NEON``
      :name: android_arm_neon

   Enables or disables NEON for armeabi-v7a. Has no effect for other ABIs.
   Defaults to true for API level (``minSdkVersion`` or ``ANDROID_PLATFORM``) 23
   or newer, false otherwise. For more information, see the `Neon support <#>`__ documentation.

   ===== ==================================
   Value Notes
   ===== ==================================
   TRUE  Default for API level 23 or newer.
   FALSE Default for API level 22 or older.
   ===== ==================================

   .. rubric:: ``ANDROID_LD``
      :name: android_ld

   Selects which linker to use. `lld <https://lld.llvm.org>`__ is currently
   experimental for the NDK and can be enabled with this argument.

   ======= =========================================
   Value   Notes
   ======= =========================================
   lld     Enables lld.
   default Use the default linker for the given ABI.
   ======= =========================================

   .. rubric:: ``ANDROID_NATIVE_API_LEVEL``
      :name: android_native_api_level

   Alias for `ANDROID_PLATFORM <#android_platform>`__.

   .. rubric:: ``ANDROID_PLATFORM``
      :name: android_platform

   Specifies the minimum API level supported by the application or library. This
   value corresponds to the application's ``minSdkVersion``.

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: Gradle
            :name: gradle_2

         When using the Android Gradle Plugin, this value is automatically set
         to match the application's ``minSdkVersion`` and should not be set
         manually.

      .. container:: section

         .. rubric:: Command Line
            :name: command-line_2

         When invoking CMake directly, this value defaults to the lowest API
         level supported by the NDK in use. For example, with NDK r20 this value
         defaults to API level 16.

   **Warning:**\  NDK libraries cannot be run on devices with an API level below
   the ``ANDROID_PLATFORM`` value with which the code was built.
   Multiple formats are accepted for this parameter:

   -  ``android-$API_LEVEL``
   -  ``$API_LEVEL``
   -  ``android-$API_LETTER``

   The ``$API_LETTER`` format allows you to specify ``android-N`` without the
   need to determine the number associated with that release. Note that some
   releases received an API increase without a letter increase. These APIs can
   be specified by appending the ``-MR1`` suffix. For example, API level 25 is
   ``android-N-MR1``.

   .. rubric:: ``ANDROID_STL``
      :name: android_stl

   Specifies which STL to use for this application. For more information, see
   `C++ library support <#>`__. By default, ``c++_static``
   will be used.

   **Caution:**\  The default behavior is not appropriate for all applications.
   Be sure to read the `C++ library support <#>`__ guide
   and in particular the section about `static runtimes <#>`__ before choosing an STL.

   +------------+-------------------------------------------+
   | Value      | Notes                                     |
   +============+===========================================+
   | c++_shared | The shared library variant of `libc++`__. |
   +------------+-------------------------------------------+
   | c++_static | The static library variant of `libc++`__. |
   +------------+-------------------------------------------+
   | none       | No C++ standard library support.          |
   +------------+-------------------------------------------+
   | system     | The `system STL`__                        |
   +------------+-------------------------------------------+

   .. _libc++: https://developer.android.google.cn/ndk/guides/cpp-support#libc
   .. _system STL: https://developer.android.google.cn/ndk/guides/cpp-support#system

   .. rubric:: Understand the CMake build command
      :name: build-command

   When debugging CMake build issues, it's helpful to know the specific build
   arguments that Gradle uses when cross-compiling for Android.

   The Android Gradle Plugin saves the build arguments it uses for executing a
   CMake build for each ABI and `build type <#>`__
   pair to the ``build_command.txt``. These files are found in the following
   directory:

   .. code:: prettyprint

      <project-root>/<module-root>/.cxx/cmake/<build-type>/<ABI>/

   The following snippet shows an example of the CMake arguments to build a
   debuggable release of the
   `hello-jni <https://github.com/android/ndk-samples/tree/main/hello-jni>`__
   sample targeting the ``armeabi-v7a`` architecture.

   .. code:: prettyprint

                          Executable : ${HOME}/Android/Sdk/cmake/3.10.2.4988404/bin/cmake
      arguments :
      -H${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/src/main/cpp
      -DCMAKE_FIND_ROOT_PATH=${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/.cxx/cmake/universalDebug/prefab/armeabi-v7a/prefab
      -DCMAKE_BUILD_TYPE=Debug
      -DCMAKE_TOOLCHAIN_FILE=${HOME}/Android/Sdk/ndk/22.1.7171670/build/cmake/android.toolchain.cmake
      -DANDROID_ABI=armeabi-v7a
      -DANDROID_NDK=${HOME}/Android/Sdk/ndk/22.1.7171670
      -DANDROID_PLATFORM=android-23
      -DCMAKE_ANDROID_ARCH_ABI=armeabi-v7a
      -DCMAKE_ANDROID_NDK=${HOME}/Android/Sdk/ndk/22.1.7171670
      -DCMAKE_EXPORT_COMPILE_COMMANDS=ON
      -DCMAKE_LIBRARY_OUTPUT_DIRECTORY=${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/build/intermediates/cmake/universalDebug/obj/armeabi-v7a
      -DCMAKE_RUNTIME_OUTPUT_DIRECTORY=${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/build/intermediates/cmake/universalDebug/obj/armeabi-v7a
      -DCMAKE_MAKE_PROGRAM=${HOME}/Android/Sdk/cmake/3.10.2.4988404/bin/ninja
      -DCMAKE_SYSTEM_NAME=Android
      -DCMAKE_SYSTEM_VERSION=23
      -B${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/.cxx/cmake/universalDebug/armeabi-v7a
      -GNinja
      jvmArgs :


                          Build command args: []
                          Version: 1

   .. rubric:: Use prebuilt libraries
      :name: using_prebuilt_libraries

   If the prebuilt library you need to import is distributed as an AAR, follow
   `Studio's dependency docs <https://developer.android.google.cn/studio/build/dependencies#native-dependencies-with-agp>`__
   to import and use those. If you are not using AGP you can follow
   https://google.github.io/prefab/example-workflow.html, but it is likely much
   easier to migrate to AGP.

   For libraries that are not distributed as an AAR, instructions on using
   prebuilt libraries with CMake, see the ``add_library`` documentation
   regarding ``IMPORTED`` targets in the `CMake manual <https://cmake.org/cmake/help/latest/command/add_library.html>`__.

   .. rubric:: Building third-party code
      :name: building_third-party_code

   There are a handful of ways to build third-party code as part of your CMake
   project, and which option works best will depend on your situation. The best
   option will often be to not do this at all. Instead, 
   `build an AAR <https://developer.android.google.cn/studio/build/dependencies?buildsystem=cmake&agpversion=4.1#publish-native-libs-in-aars>`__
   for the library and consume that in your application. You do not necessarily
   need to *publish* that AAR. It can be internal to your Gradle project.

   If that's not an option:

   -  Vendor (i.e. copy) the third-party source into your repository and use
      `add_subdirectory <https://cmake.org/cmake/help/latest/command/add_subdirectory.html>`__
      to build it. This only works if the other library is also built with
      CMake.
   -  Define an `ExternalProject <https://cmake.org/cmake/help/latest/module/ExternalProject.html>`__.
   -  Build the library separately from your project and follow 
      `Use prebuilt libraries <#using_prebuilt_libraries>`__ to import it as a prebuilt.

   .. rubric:: YASM support in CMake
      :name: yasm-cmake

   The NDK provides CMake support for building assembly code written in
   `YASM <http://yasm.tortall.net/>`__ to run on x86 and x86-64 architectures.
   YASM is an open-source assembler for x86 and x86-64 architectures, based on
   the NASM assembler.

   To build assembly code with CMake, make the following changes in your
   project's ``CMakeLists.txt``:

   #. Call
      `enable_language <https://cmake.org/cmake/help/latest/command/enable_language.html>`__
      with the value set to ``ASM_NASM``.

   #. Depending on whether you are building a shared library or an executable
      binary, call
      `add_library <https://cmake.org/cmake/help/latest/command/add_library.html>`__
      or
      `add_executable <https://cmake.org/cmake/help/latest/command/add_executable.html>`__.
      In the arguments, pass in a list of source files consisting of the
      ``.asm`` files for the assembly program in YASM and the ``.c`` files for
      the associated C libraries or functions.

   The following snippet shows how you might configure your ``CMakeLists.txt``
   to build a YASM program as a shared library.

   .. code:: prettyprint

      cmake_minimum_required(VERSION 3.6.0)

      enable_language(ASM_NASM)

      add_library(test-yasm SHARED jni/test-yasm.c jni/print_hello.asm)

   For an example of how to build a YASM program as an executable, 
   see the `yasm test <https://android.googlesource.com/platform/ndk/+/master/tests/device/yasm/>`__
   in the NDK git repository.

   .. rubric:: Report problems
      :name: issues

   If you run into any issues with the NDK or its CMake toolchain file, report
   them via the `android-ndk/ndk <https://github.com/android/ndk/issues>`__
   issue tracker on GitHub. For Gradle or Android Gradle Plugin issues, 
   `report a Studio bug <https://developer.android.google.cn/studio/report-bugs>`__
   instead.

Last updated 2024-03-25 UTC.

/Use the NDK with other build systems
=====================================

.. https://developer.android.google.cn/ndk/guides/other_build_systems?hl=en

.. container:: devsite-article-body clearfix

   **Note:**\  The content described on this page requires at least NDK r19. If
   you're using an older NDK, consider upgrading. If you're unable to upgrade,
   use ``<NDK>/build/tools/make_standalone_toolchain.py``.
   The NDK contains official support for `ndk-build <#>`__
   and `CMake <#>`__. Most users should refer to one of those
   guides for building application code. The purpose of this document is to
   describe how to build existing code that uses other build systems. This is
   often the case with third-party dependencies that are not Android-specific,
   such as OpenSSL and libbzip2.

   Build system maintainers looking to add native NDK support to their build
   systems should instead read the 
   `Build System Maintainers Guide <https://android.googlesource.com/platform/ndk/+/master/docs/BuildSystemMaintainers.md>`__.

   .. rubric:: Overview
      :name: overview

   The Clang compiler in the NDK is useable with only minimal configuration
   required to define your target environment.

   To ensure that you build for the correct architecture, either pass the
   appropriate target with ``-target`` when invoking Clang, or invoke the
   target-prefixed Clang. For example, to compile for 64-bit ARM Android with a
   ``minSdkVersion`` of 21, either of the following will work and you may use
   whichever you find most convenient:

   .. code:: prettyprint

      $ $NDK/toolchains/llvm/prebuilt/$HOST_TAG/bin/clang++ \
          -target aarch64-linux-android21 foo.cpp

   .. code:: prettyprint

      $ $NDK/toolchains/llvm/prebuilt/$HOST_TAG/bin/aarch64-linux-android21-clang++ \
          foo.cpp

   In both cases, replace ``$NDK`` with the path to the NDK and ``$HOST_TAG`` to
   match the NDK you downloaded according to the following table:

   .. list-table::
      :header-rows: 1

      - 

         - NDK OS Variant
         - Host Tag
      - 

         - macOS
         - ``darwin-x86_64``
      - 

         - Linux
         - ``linux-x86_64``
      - 

         - 64-bit Windows
         - ``windows-x86_64``

   **Note:**\  Despite the x86_64 tag in the Darwin name, those are fat binaries
   that include M1 support. The paths were not updated to reflect that support
   because doing so would have broken existing builds that encode those paths.
   The format of the prefix or target argument here is the target triple with a
   suffix denoting the ``minSdkVersion``. This suffix is only used with
   clang/clang++; the binutils tools (such as ``ar`` and ``strip``) do not
   require a suffix because they are unaffected by ``minSdkVersion``. Android's
   supported target triples are as follows:

   .. list-table::
      :header-rows: 1

      - 

         - ABI
         - Triple
      - 

         - armeabi-v7a
         - ``armv7a-linux-androideabi``
      - 

         - arm64-v8a
         - ``aarch64-linux-android``
      - 

         - x86
         - ``i686-linux-android``
      - 

         - x86-64
         - ``x86_64-linux-android``

   **Note:**\  For 32-bit ARM, the compiler is prefixed with
   ``armv7a-linux-androideabi``, but the binutils tools are prefixed with
   ``arm-linux-androideabi``. For other architectures, the prefixes are the same
   for all tools.

   Many projects' build scripts will expect GCC-style cross compilers where each
   compiler targets only one OS/architecture combination and so may not handle
   ``-target`` cleanly. In these cases, you can typically include the
   ``-target`` argument as part of the compiler definition (e.g.
   ``CC="clang -target aarch64-linux-android21``), or use the triple-prefixed
   Clang binaries.

   .. rubric:: Autoconf
      :name: autoconf

   **Caution:**\  Autoconf projects are generally not buildable on Windows.
   Windows users can build these projects using the Linux NDK in a Linux VM. The
   `Windows Subsystem for Linux <#>`__ may also
   work, but is not officially supported. WSL1 is known not to work.
   Autoconf projects allow you to specify the toolchain to use with environment
   variables. For example, the following shows how to build ``libpng`` for
   Android x86-64 with a ``minSdkVersion`` of API level 21, on Linux.

   .. code:: prettyprint

      # Check out the source.
      git clone https://github.com/glennrp/libpng -b v1.6.37
      cd libpng
      # Only choose one of these, depending on your build machine...
      export TOOLCHAIN=$NDK/toolchains/llvm/prebuilt/darwin-x86_64
      export TOOLCHAIN=$NDK/toolchains/llvm/prebuilt/linux-x86_64
      # Only choose one of these, depending on your device...
      export TARGET=aarch64-linux-android
      export TARGET=armv7a-linux-androideabi
      export TARGET=i686-linux-android
      export TARGET=x86_64-linux-android
      # Set this to your minSdkVersion.
      export API=21
      # Configure and build.
      export AR=$TOOLCHAIN/bin/llvm-ar
      export CC=$TOOLCHAIN/bin/$TARGET$API-clang
      export AS=$CC
      export CXX=$TOOLCHAIN/bin/$TARGET$API-clang++
      export LD=$TOOLCHAIN/bin/ld
      export RANLIB=$TOOLCHAIN/bin/llvm-ranlib
      export STRIP=$TOOLCHAIN/bin/llvm-strip
      ./configure --host $TARGET
      make

   The tools selected in this sample are correct for NDK r22 and newer. Older
   NDKs may require different tools.

   .. rubric:: Non-autoconf make projects
      :name: non-autoconf_make_projects

   **Caution:**\  Not all make projects support cross compiling, and not all do
   so in the same way. It is very likely that the project will not build without
   modifications. In those cases, refer to the 
   `Build System Maintainers Guide <https://android.googlesource.com/platform/ndk/+/master/docs/BuildSystemMaintainers.md>`__
   for instructions on porting the build to Android.
   Some makefile projects allow cross compilation by overriding the same
   variables that you would with an autoconf project. As an example, the
   following shows how to build ``libbzip2`` for Android x86-64 with a
   ``minSdkVersion`` of 21.

   .. code:: bash

      # Check out the source.
      git clone https://gitlab.com/bzip/bzip2.git
      cd bzip2

      # Only choose one of these, depending on your build machine...
      export TOOLCHAIN=$NDK/toolchains/llvm/prebuilt/darwin-x86_64
      export TOOLCHAIN=$NDK/toolchains/llvm/prebuilt/linux-x86_64

      # Only choose one of these, depending on your device...
      export TARGET=aarch64-linux-android
      export TARGET=armv7a-linux-androideabi
      export TARGET=i686-linux-android
      export TARGET=x86_64-linux-android

      # Set this to your minSdkVersion.
      export API=21

      # Build.
      make \
          CC=$TOOLCHAIN/bin/$TARGET$API-clang \
          AR=$TOOLCHAIN/bin/llvm-ar \
          RANLIB=$TOOLCHAIN/bin/llvm-ranlib \
          bzip2

   The tools selected in this sample are correct for NDK r22 and newer. Older
   NDKs may require different tools.

Last updated 2024-01-13 UTC.

/Intro: Architectures and CPUs
==============================

.. https://developer.android.google.cn/ndk/guides/arch?hl=en

.. container:: devsite-article-body clearfix

   When you're working with native code, hardware matters. The NDK lets you
   ensure you're compiling for the right architectures and CPUs by giving you a
   variety of ABIs from which to choose.

   This section explains how to target specific `architectures and CPUs <#>`__
   at build time, how to use ARM `Neon extensions <#>`__, and how the
   `CPU features <#>`__ library lets you query optional features at run-time.

Last updated 2020-08-17 UTC.

/Android ABIs
=============

.. https://developer.android.google.cn/ndk/guides/abis?hl=en

.. container:: devsite-article-body clearfix

   Different Android devices use different CPUs, which in turn support different
   instruction sets. Each combination of CPU and instruction set has its own
   Application Binary Interface (ABI). An ABI includes the following
   information:

   -  The CPU instruction set (and extensions) that can be used.
   -  The endianness of memory stores and loads at runtime. Android is always
      little-endian.
   -  Conventions for passing data between applications and the system,
      including alignment constraints, and how the system uses the stack and
      registers when it calls functions.
   -  The format of executable binaries, such as programs and shared libraries,
      and the types of content they support. Android always uses ELF. For more
      information, see `ELF System V Application Binary Interface <https://refspecs.linuxfoundation.org/elf/gabi4+/contents.html>`__.
   -  How C++ names are mangled. For more information, 
      see `Generic/Itanium C++ ABI <http://itanium-cxx-abi.github.io/cxx-abi/>`__.

   This page enumerates the ABIs that the NDK supports, and provides information
   about how each ABI works.

   ABI can also refer to the native API supported by the platform. For a list of
   those kinds of ABI issues affecting 32-bit systems, 
   see `32-bit ABI bugs <https://android.googlesource.com/platform/bionic/+/master/docs/32-bit-abi.md>`__.

   .. rubric:: Supported ABIs
      :name: sa

   **Table 1.** ABIs and supported instruction sets.

   .. list-table::
      :widths: 27 27 27
      :header-rows: 1

      - 

         - ABI
         - Supported Instruction Sets
         - Notes
      - 

         - `armeabi-v7a <#v7a>`__
         - armeabi
            Thumb-2
            Neon
         - Incompatible with ARMv5/v6 devices.
      - 

         - `arm64-v8a <#arm64-v8a>`__
         - AArch64
         - Armv8.0 only.
      - 

         - `x86 <#x86>`__
         - x86 (IA-32)
            MMX
            SSE/2/3
            SSSE3
         - No support for MOVBE or SSE4.
      - 

         - `x86_64 <#86-64>`__
         - x86-64
            MMX
            SSE/2/3
            SSSE3
            SSE4.1, 4.2
            POPCNT
         - x86-64-v1 only.

   **Note:** Historically the NDK supported ARMv5 (armeabi), and 32-bit and
   64-bit MIPS, but support for these ABIs was removed in NDK r17.

   .. rubric:: armeabi-v7a
      :name: v7a

   This ABI is for 32-bit ARM CPUs. It includes Thumb-2 and Neon.

   For information about the parts of the ABI that aren't Android-specific, see
   `Application Binary Interface (ABI) for the ARM Architecture <https://developer.arm.com/architectures/system-architectures/software-standards/abi>`__

   The NDK's build systems generate Thumb-2 code by default unless you use
   ``LOCAL_ARM_MODE`` in your `Android.mk <#>`__ for
   ndk-build or ``ANDROID_ARM_MODE`` when configuring
   `CMake <#>`__.

   For more information on the history of Neon, see `Neon Support <#>`__.

   For historical reasons, this ABI uses ``-mfloat-abi=softfp`` causing all
   ``float`` values to be passed in integer registers and all ``double`` values
   to be passed in integer register pairs when making function calls. Despite
   the name, this only affects the floating point *calling convention*: the
   compiler will still use hardware floating point instructions for arithmetic.

   This ABI uses a 64-bit ``long double`` (`IEEE
   binary64 <https://en.wikipedia.org/wiki/Double-precision_floating-point_format>`__
   the same as ``double``).

   .. rubric:: arm64-v8a
      :name: arm64-v8a

   This ABI is for 64-bit ARM CPUs.

   See Arm's `Learn the Architecture <https://developer.arm.com/architectures/learn-the-architecture>`__
   for complete details of the parts of the ABI that aren't Android-specific.
   Arm also offers some porting advice in `64-bit Android Development <https://developer.arm.com/64bit>`__.

   You can use `Neon intrinsics <https://developer.arm.com/architectures/instruction-sets/simd-isas/neon/intrinsics>`__
   in C and C++ code to take advantage of the Advanced SIMD extension. 
   The `Neon Programmer's Guide for Armv8-A <https://developer.arm.com/architectures/instruction-sets/simd-isas/neon/neon-programmers-guide-for-armv8-a>`__
   provides more information about Neon intrinsics and Neon programming in
   general.

   On Android, the platform-specific x18 register is reserved for
   `ShadowCallStack <https://source.android.google.cn/devices/tech/debug/shadow-call-stack>`__
   and should not be touched by your code. Current versions of Clang default to
   using the ``-ffixed-x18`` option on Android, so unless you have hand-written
   assembler (or a very old compiler) you shouldn't need to worry about this.

   This ABI uses a 128-bit ``long double`` 
   (`IEEE binary128 <https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format>`__).

   .. rubric:: x86
      :name: x86

   This ABI is for CPUs supporting the instruction set commonly known as "x86",
   "i386", or "IA-32".

   Android's ABI includes the base instruction set plus the
   `MMX <https://en.wikipedia.org/wiki/MMX_%28instruction_set%29>`__,
   `SSE <https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions>`__,
   `SSE2 <https://en.wikipedia.org/wiki/SSE2>`__,
   `SSE3 <https://en.wikipedia.org/wiki/SSE3>`__, and
   `SSSE3 <https://en.wikipedia.org/wiki/SSSE3>`__ extensions.

   The ABI does not include any other optional IA-32 instruction set extensions
   such as MOVBE or any variant of SSE4. You can still use these extensions, as
   long as you use runtime feature-probing to enable them, and provide fallbacks
   for devices that do not support them.

   The NDK toolchain assumes 16-byte stack alignment before a function call. The
   default tools and options enforce this rule. If you are writing assembly
   code, you must make sure to maintain stack alignment, and ensure that other
   compilers also obey this rule.

   Refer to the following documents for more details:

   -  `Calling conventions for different C++ compilers and operating systems <http://www.agner.org/optimize/calling_conventions.pdf>`__
   -  `Intel IA-32 Intel Architecture Software Developer's Manual, Volume 2: Instruction Set Reference <http://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-software-developer-instruction-set-reference-manual-325383.pdf>`__
   -  `Intel IA-32 Intel Architecture Software Developer's Manual, Volume 3: System Programming Guide <http://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-software-developer-system-programming-manual-325384.pdf>`__
   -  `System V Application Binary Interface: Intel386 Processor Architecture Supplement <http://www.sco.com/developers/devspecs/abi386-4.pdf>`__

   This ABI uses a 64-bit ``long double`` 
   (`IEEE binary64 <https://en.wikipedia.org/wiki/Double-precision_floating-point_format>`__
   the same as ``double``, and not the more common 80-bit Intel-only ``long double``).

   .. rubric:: x86_64
      :name: 86-64

   This ABI is for CPUs supporting the instruction set commonly referred to as
   "x86-64".

   Android's ABI includes the base instruction set plus
   `MMX <https://en.wikipedia.org/wiki/MMX_%28instruction_set%29>`__,
   `SSE <https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions>`__,
   `SSE2 <https://en.wikipedia.org/wiki/SSE2>`__,
   `SSE3 <https://en.wikipedia.org/wiki/SSE3>`__,
   `SSSE3 <https://en.wikipedia.org/wiki/SSSE3>`__,
   `SSE4.1 <https://en.wikipedia.org/wiki/SSE4#SSE4.1>`__,
   `SSE4.2 <https://en.wikipedia.org/wiki/SSE4#SSE4.2>`__, and the POPCNT
   instruction.

   The ABI does not include any other optional x86-64 instruction set extensions
   such as MOVBE, SHA, or any variant of AVX. You can still use these
   extensions, as long as you use runtime feature probing to enable them, and
   provide fallbacks for devices that do not support them.

   Refer to the following documents for more details:

   -  `Calling conventions for different C++ compilers and operating systems <http://www.agner.org/optimize/calling_conventions.pdf>`__
   -  `Intel64 and IA-32 Architectures Software Developer's Manual, Volume 2: Instruction Set Reference <http://www.intel.com/content/www/us/en/processors/architectures-software-developer-manuals.html?iid=tech_vt_tech+64-32_manuals>`__
   -  `Intel64 and IA-32 Intel Architecture Software Developer's Manual Volume 3: System Programming <http://www.intel.com/content/www/us/en/processors/architectures-software-developer-manuals.html?iid=tech_vt_tech+64-32_manuals>`__

   This ABI uses a 128-bit ``long double`` 
   (`IEEE binary128 <https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format>`__).

   .. rubric:: Generate code for a specific ABI
      :name: gc

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: Gradle
            :name: gradle

         Gradle (whether used via Android Studio or from the command line)
         builds for all non-deprecated ABIs by default. To restrict the set of
         ABIs that your application supports, use ``abiFilters``. For example,
         to build for only 64-bit ABIs, set the following configuration in your
         ``build.gradle``:

         .. code:: prettyprint

            android {
                defaultConfig {
                    ndk {
                        abiFilters 'arm64-v8a', 'x86_64'
                    }
                }
            }

      .. container:: section

         .. rubric:: ndk-build
            :name: ndk-build

         ndk-build builds for all non-deprecated ABIs by default. You can target
         a specific ABIs by setting ``APP_ABI`` in your
         `Application.mk <#>`__ file. The following
         snippet shows a few examples of using ``APP_ABI``:

         .. code:: prettyprint

            APP_ABI := arm64-v8a  # Target only arm64-v8a
            APP_ABI := all  # Target all ABIs, including those that are deprecated.
            APP_ABI := armeabi-v7a x86_64  # Target only armeabi-v7a and x86_64.

         For more information on the values you can specify for ``APP_ABI``, see
         `Application.mk <#>`__.

      .. container:: section

         .. rubric:: CMake
            :name: cmake

         With CMake, you build for a single ABI at a time and must specify your
         ABI explicitly. You do this with the ``ANDROID_ABI`` variable, which
         must be specified on the command line (cannot be set in your
         CMakeLists.txt). For example:

         .. code:: prettyprint

            $ cmake -DANDROID_ABI=arm64-v8a ...
            $ cmake -DANDROID_ABI=armeabi-v7a ...
            $ cmake -DANDROID_ABI=x86 ...
            $ cmake -DANDROID_ABI=x86_64 ...

         For the other flags that must be passed to CMake to build with the NDK,
         see the `CMake guide <#>`__.

   The default behavior of the build system is to include the binaries for each
   ABI in a single APK, also known as a `fat APK <https://en.wikipedia.org/wiki/Fat_binary>`__. A fat APK is significantly
   larger than one containing only the binaries for a single ABI; the tradeoff
   is gaining wider compatibility, but at the expense of a larger APK. It is
   strongly recommended that you take advantage of either `App Bundles <#>`__ or `APK Splits <#>`__ to reduce the size of your
   APKs while still maintaining maximum device compatibility.

   At installation time, the package manager unpacks only the most appropriate
   machine code for the target device. For details, see `Automatic extraction of native code at install time <#aen>`__.

   .. rubric:: ABI management on the Android platform
      :name: am

   This section provides details about how the Android platform manages native
   code in APKs.

   .. rubric:: Native code in app packages
      :name: native-code-in-app-packages

   Both the Play Store and Package Manager expect to find NDK-generated
   libraries on filepaths inside the APK matching the following pattern:

   .. code:: none

      /lib/<abi>/lib<name>.so

   Here, ``<abi>`` is one of the ABI names listed under `Supported ABIs <#sa>`__, 
   and ``<name>`` is the name of the library as you defined it
   for the ``LOCAL_MODULE`` variable in the
   `Android.mk <#>`__ file. Since APK files are just
   zip files, it is trivial to open them and confirm that the shared native
   libraries are where they belong.

   If the system does not find the native shared libraries where it expects
   them, it cannot use them. In such a case, the app itself has to copy the
   libraries over, and then perform ``dlopen()``.

   In a fat APK, each library resides under a directory whose name matches a
   corresponding ABI. For example, a fat APK may contain:

   .. code:: none

      /lib/armeabi/libfoo.so
      /lib/armeabi-v7a/libfoo.so
      /lib/arm64-v8a/libfoo.so
      /lib/x86/libfoo.so
      /lib/x86_64/libfoo.so

   **Note:** ARMv7-based Android devices running 4.0.3 or earlier install native
   libraries from the ``armeabi`` directory instead of the ``armeabi-v7a``
   directory if both directories exist. This is because ``/lib/armeabi/`` comes
   after ``/lib/armeabi-v7a/`` in the APK. This issue is fixed from 4.0.4.

   .. rubric:: Android platform ABI support
      :name: android-platform-abi-support

   The Android system knows at runtime which ABI(s) it supports, because
   build-specific system properties indicate:

   -  The primary ABI for the device, corresponding to the machine code used in
      the system image itself.
   -  Optionally, secondary ABIs, corresponding to other ABI that the system
      image also supports.

   This mechanism ensures that the system extracts the best machine code from
   the package at installation time.

   For best performance, you should compile directly for the primary ABI. For
   example, a typical ARMv5TE-based device would only define the primary ABI:
   ``armeabi``. By contrast, a typical, ARMv7-based device would define the
   primary ABI as ``armeabi-v7a`` and the secondary one as ``armeabi``, since it
   can run application native binaries generated for each of them.

   64-bit devices also support their 32-bit variants. Using arm64-v8a devices as
   an example, the device can also run armeabi and armeabi-v7a code. Note,
   however, that your application will perform much better on 64-bit devices if
   it targets arm64-v8a rather than relying on the device running the
   armeabi-v7a version of your application.

   Many x86-based devices can also run ``armeabi-v7a`` and ``armeabi`` NDK
   binaries. For such devices, the primary ABI would be ``x86``, and the second
   one, ``armeabi-v7a``.

   You can force install an apk for a specific `ABI <#sa>`__. This is useful for
   testing. Use the following command:

   .. code:: none

      adb install --abi abi-identifier path_to_apk

   .. rubric:: Automatic extraction of native code at install time
      :name: aen

   When installing an application, the package manager service scans the APK,
   and looks for any shared libraries of the form:

   .. code:: none

      lib/<primary-abi>/lib<name>.so

   If none is found, and you have defined a secondary ABI, the service scans for
   shared libraries of the form:

   .. code:: none

      lib/<secondary-abi>/lib<name>.so

   When it finds the libraries that it's looking for, the package manager copies
   them to ``/lib/lib<name>.so``, under the application's native library
   directory (``<nativeLibraryDir>/``). The following snippets retrieve the
   ``nativeLibraryDir``:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               import android.content.pm.PackageInfo
               import android.content.pm.ApplicationInfo
               import android.content.pm.PackageManager
               ...
               val ainfo = this.applicationContext.packageManager.getApplicationInfo(
                       "com.domain.app",
                       PackageManager.GET_SHARED_LIBRARY_FILES
               )
               Log.v(TAG, "native library dir ${ainfo.nativeLibraryDir}")

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               import android.content.pm.PackageInfo;
               import android.content.pm.ApplicationInfo;
               import android.content.pm.PackageManager;
               ...
               ApplicationInfo ainfo = this.getApplicationContext().getPackageManager().getApplicationInfo
               (
                   "com.domain.app",
                   PackageManager.GET_SHARED_LIBRARY_FILES
               );
               Log.v( TAG, "native library dir " + ainfo.nativeLibraryDir );

   If there is no shared-object file at all, the application builds and
   installs, but crashes at runtime.

   .. rubric:: ARMv9: Enabling PAC and BTI for C/C++
      :name: armv9_enabling_pac_and_bti_for_cc

   **Important:**\  PAC and BTI are two of many tools available for memory
   debugging and mitigation. See `Memory error debugging and mitigation <#>`__ 
   for an overview of all the tools.
   Enabling PAC/BTI will provide protection against some attack vectors. PAC
   protects return addresses by cryptographically signing them in a function's
   prolog and checking that the return address is still correctly signed in the
   epilog. BTI prevents jumping to arbitrary locations in your code by requiring
   that each branch target is a special instruction that does nothing but tell
   the processor that it's okay to land there.

   Android uses PAC/BTI instructions that do nothing on older processors that
   don't support the new instructions. Only ARMv9 devices will have the PAC/BTI
   protection, but you can run the same code on ARMv8 devices too: no need for
   multiple variants of your library. Even on ARMv9 devices, PAC/BTI only
   applies to 64-bit code.

   Enabling PAC/BTI will cause a slight increase in code size, typically 1%.

   See Arm's `Learn the architecture - Providing protection for complex software <https://developer.arm.com/documentation/102433/0100/Overview>`__
   (`PDF <https://documentation-service.arm.com/static/62bdb1d031ea212bb66257c5?token=>`__)
   for a detailed explanation of the attack vectors PAC/BTI target, and how the
   protection works.

   .. rubric:: Build changes
      :name: build_changes

   **Note:**\  When considering the code to be a target for attackers, we
   recommend also building with CFI. CFI and PAC/BTI are similar but
   complementary.

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: ndk-build
            :name: ndk-build_1

         Set ``LOCAL_BRANCH_PROTECTION := standard`` in each module of your
         Android.mk.

      .. container:: section

         .. rubric:: CMake
            :name: cmake_1

         Use
         ``target_compile_options($TARGET PRIVATE -mbranch-protection=standard)``
         for each target in your CMakeLists.txt.

      .. container:: section

         .. rubric:: Other build systems
            :name: other-build-systems

         Compile your code using ``-mbranch-protection=standard``. This flag
         only works when compiling for the arm64-v8a ABI. You don't need to use
         this flag when linking.

   .. rubric:: Troubleshooting
      :name: pac-bti-troubleshooting

   We are not aware of any issues with the compiler support for PAC/BTI, but:

   -  Take care not to mix BTI and non-BTI code when linking, because that
      results in a library that doesn't have BTI protection enabled. You can use
      llvm-readelf to check whether your resulting library has the BTI note or
      not.

   .. code:: none

      $ llvm-readelf --notes LIBRARY.so
      [...]
      Displaying notes found in: .note.gnu.property
        Owner                Data size    Description
        GNU                  0x00000010   NT_GNU_PROPERTY_TYPE_0 (property note)
          Properties:    aarch64 feature: BTI, PAC
      [...]
      $

   -  Old versions of OpenSSL (prior to 1.1.1i) have a bug in hand-written
      assembler that causes PAC failures. Upgrade to the current OpenSSL.

   -  Old versions of some app DRM systems generate code that violates PAC/BTI
      requirements. If you're using app DRM and see issues when enabling
      PAC/BTI, contact your DRM vendor for a fixed version.

Last updated 2024-03-25 UTC.

/CPU features
=============

.. https://developer.android.google.cn/ndk/guides/cpu-features?hl=en

.. container:: devsite-article-body clearfix

   There are several ways to check for CPU features in your code, each with a
   different set of trade-offs.

   .. rubric:: ABI: Use the preprocessor's pre-defined macros
      :name: abi_using_the_preprocessors_pre

   It's usually most convenient to determine the ABI at build time using
   ``#ifdef`` in conjunction with:

   -  ``__arm__`` for 32-bit ARM
   -  ``__aarch64__`` for 64-bit ARM
   -  ``__i386__`` for 32-bit X86
   -  ``__x86_64__`` for 64-bit X86

   Note that 32-bit X86 is called ``__i386__``, not ``__x86__`` as you might
   expect!

   .. rubric:: CPU core counts: Use libc's sysconf(3)
      :name: cpu_core_counts_using_libcs_sysconf3

   `sysconf(3) <http://man7.org/linux/man-pages/man3/sysconf.3.html>`__ lets you
   query both ``_SC_NPROCESSORS_CONF`` (the number of CPU cores in the system)
   and ``_SC_NPROCESSORS_ONLN`` (the number of CPU cores currently online).

   .. rubric:: Features: Use libc's getauxval(3)
      :name: features_using_libcs_getauxval3

   In API level 18 and newer,
   `getauxval(3) <http://man7.org/linux/man-pages/man3/getauxval.3.html>`__ is
   available in Android's C library. The ``AT_HWCAP`` and ``AT_HWCAP2``
   arguments return bitmasks listing CPU-specific features. See the various
   ``hwcap.h`` headers in the NDK for the constants to compare against, such as
   ``HWCAP_SHA512`` for arm64's SHA512 instructions, or ``HWCAP_IDIVT`` for
   arm's Thumb integer division instructions.

   .. rubric:: The Google cpu_features library
      :name: the_google_cpu_features_library

   One problem with ``AT_HWCAP`` is that sometimes devices are mistaken. Some
   old devices, for example, claim to have integer division instructions but do
   not.

   `Google's cpu_features <https://github.com/google/cpu_features>`__ library
   works around such issues by applying its own knowledge of specific SoCs (by
   parsing ``/proc/cpuinfo`` to work out the specific SoC in question).

   This library is maintained for use by Google's first-party app teams, and has
   workarounds for every problematic device they've encountered in the wild.

   .. rubric:: The NDK cpufeatures library (deprecated)
      :name: the_ndk_cpufeatures_library_deprecated

   The NDK still provides a deprecated library named ``cpufeatures`` for source
   compatibility with apps that already use it. Unlike the newer and more
   complete `cpu_features <https://github.com/google/cpu_features>`__ library,
   this historical library does not have workarounds for as many specific SoCs.

Last updated 2021-11-16 UTC.

/Neon support
=============

.. https://developer.android.google.cn/ndk/guides/cpu-arm-neon?hl=en

.. container:: devsite-article-body clearfix

   The NDK supports ARM Advanced SIMD, commonly known as Neon, an optional
   instruction set extension for ARMv7 and ARMv8. Neon provides scalar/vector
   instructions and registers (shared with the FPU) comparable to MMX/SSE/3DNow!
   in the x86 world.

   All ARMv8-based ("arm64") Android devices support Neon. Almost all
   ARMv7-based ("32-bit") Android devices support Neon, including all devices
   that shipped with API level 21 or later. The NDK enables Neon by default for
   both.

   If you target very old devices, you can filter out incompatible devices on
   the Google Play Console. You can also use the console for your app to see how
   many devices this would affect.

   Alternatively, for maximum compatibility, 32-bit code can perform runtime
   detection to confirm that Neon code can be run on the target device. An app
   can perform this check using any of the options mentioned in `CPU features <#>`__.

   You can use `Neon intrinsics <https://developer.arm.com/architectures/instruction-sets/simd-isas/neon/intrinsics>`__
   in C and C++ code to take advantage of the Advanced SIMD extension. 
   The `Neon Programmer's Guide for Armv8-A <https://developer.arm.com/architectures/instruction-sets/simd-isas/neon/neon-programmers-guide-for-armv8-a>`__
   provides more information about Neon intrinsics and Neon programming in
   general.

   .. rubric:: Build
      :name: building

   **Note:**\  For NDK r21 and newer Neon is enabled by default for all API
   levels. If you need to disable Neon to support non-Neon devices (which are
   rare), invert the settings described below. Alternatively, the Play Store
   console can be used to `exclude CPUs <https://support.google.com/googleplay/android-developer/answer/7353455>`__
   that do not support Neon to prevent your application from being installed on
   those devices.

   .. rubric:: Disable Neon globally
      :name: per-app

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: ndk-build
            :name: ndk-build

         ndk-build does not support disabling Neon globally. To disable Neon an
         entire ndk-build application, apply the per-module steps to every
         module in your application.

      .. container:: section

         .. rubric:: CMake
            :name: cmake

         Pass ``-DANDROID_ARM_NEON=ON`` when invoking CMake. If building with
         Android Studio/Gradle, set the following option in your build.gradle:

         .. code:: prettyprint

            android {
                defaultConfig {
                    externalNativeBuild {
                        cmake {
                            arguments "-DANDROID_ARM_NEON=OFF"
                        }
                    }
                }
            }

   .. rubric:: Disable Neon per module
      :name: per-module

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: ndk-build
            :name: ndk-build_1

         To build all the source files in an ndk-build module without Neon, add
         the following to the module definition in your Android.mk:

         .. code:: prettyprint

            LOCAL_ARM_NEON := false

      .. container:: section

         .. rubric:: CMake
            :name: cmake_1

         To build all the source files in a CMake target without Neon, add the
         following to your CMakeLists.txt:

         .. code:: prettyprint

            if(ANDROID_ABI STREQUAL armeabi-v7a)
                set_target_properties(${TARGET} PROPERTIES COMPILE_FLAGS -mfpu=vfpv3-d16)
            endif()

         Where ``${TARGET}`` is replaced with the name of your library.

   .. rubric:: Cross-platform support for x86
      :name: crossplatform

   NDK supports cross-platform compilation of your existing ARM SIMD (Neon)
   instrinsic functions into x86 SSE code, through the use of the third-party
   `NEON_2_SSE.h <https://github.com/intel/ARM_NEON_2_x86_SSE>`__. For more
   information on this topic, see `From ARM NEON to Intel SSE-the automatic porting solution, tips and
   tricks <http://software.intel.com/en-us/blogs/2012/12/12/from-arm-neon-to-intel-mmxsse-automatic-porting-solution-tips-and-tricks>`__.

   .. rubric:: Sample code
      :name: sc

   The `hello-neon sample <https://github.com/android/ndk-samples/tree/main/hello-neon>`__
   provides an example of how to use the ``cpufeatures`` library and Neon
   intrinsics at the same time. This sample implements a tiny benchmark for a
   FIR filter loop with a C version and a Neon-optimized version for devices
   that support Neon.

Last updated 2024-03-26 UTC.

/Intro: Writing C/C++ Code
==========================

.. https://developer.android.google.cn/ndk/guides/libs?hl=en

.. container:: devsite-article-body clearfix

   This section discusses the use of the libraries that the NDK provides.

   **Note:**\  The guide on importing prebuilt libraries (those not included in
   the NDK) has been moved into the relevant sections for each build system.
   Refer to either the `CMake <#>`__ or
   `ndk-build <#>`__ guides as appropriate for your project.
   It explains the `C++ runtimes <#>`__ available with the
   NDK and provides information on `the other libraries <#>`__ that the NDK provides, 
   such as `OpenGL ES <https://www.khronos.org/opengles/>`__ and 
   `OpenSL ES <https://www.khronos.org/opensles/>`__, and the minimum Android API levels
   required to support those libraries.

Last updated 2020-08-17 UTC.

/Android SDK version properties
===============================

.. https://developer.android.google.cn/ndk/guides/sdk-versions?hl=en

.. container:: devsite-article-body clearfix

   Android applications can set a number of SDK version properties in their
   ``build.gradle`` file. The `Android build.gradle <#>`__ documentation explains what
   those properties mean for the application in general. This document explains
   how those properties affect NDK builds.

   .. rubric:: compileSdkVersion
      :name: compilesdkversion

   This property has no effect on NDK builds. API availability for the NDK is
   instead governed by ``minSdkVersion``. This is because C++ symbols are
   eagerly resolved at library load time rather than lazily resolved when first
   called (as they are in Java). Using any symbols that are not available in the
   ``minSdkVersion`` will cause the library to fail to load on OS versions that
   do not have the newer API, regardless of whether or not those APIs will be
   called.

   For a new app, choose the newest version available. For an existing app,
   update this to the latest version when convenient.

   .. rubric:: targetSdkVersion
      :name: targetsdkversion

   Similar to Java, the ``targetSdkVersion`` of your app can change the runtime
   behavior of native code. Behavior changes in the system are, when feasible,
   only applied to apps with a ``targetSdkVersion`` greater than or equal to the
   OS version that introduced the change.

   For a new app, choose the newest version available. For an existing app,
   update this to the latest version when convenient (after updating
   ``compileSdkVersion``).

   While application developers generally know their app's ``targetSdkVersion``,
   this API is useful for library developers that cannot know which
   ``targetSdkVersion`` their users will choose.

   At runtime, you can get the ``targetSdkVersion`` used by an application by
   calling ``android_get_application_target_sdk_version()``. This API is
   available in API level 24 and later. This function has the following
   signature:

   .. code:: prettyprint

      /**
       * Returns the `targetSdkVersion` of the caller, or `__ANDROID_API_FUTURE__` if
       * there is no known target SDK version (for code not running in the context of
       * an app).
       *
       * The returned values correspond to the named constants in `<android/api-level.h>`,
       * and is equivalent to the AndroidManifest.xml `targetSdkVersion`.
       *
       * See also android_get_device_api_level().
       *
       * Available since API level 24.
       */
      int android_get_application_target_sdk_version() __INTRODUCED_IN(24);

   Other behavior changes might depend on the device API level. You can get the
   API level of the device your application is running on by calling
   ``android_get_device_api_level()``. This function has the following
   signature:

   .. code:: prettyprint

      /**
       * Returns the API level of the device we're actually running on, or -1 on failure.
       * The returned values correspond to the named constants in `<android/api-level.h>`,
       * and is equivalent to the Java `Build.VERSION.SDK_INT` API.
       *
       * See also android_get_application_target_sdk_version().
       */
      int android_get_device_api_level();

   .. rubric:: maxSdkVersion
      :name: maxsdkversion

   This property has no effect on NDK builds.

   .. rubric:: minSdkVersion
      :name: minsdkversion

   The ``minSdkVersion`` set in your ``build.gradle`` file determines which APIs
   are available at build time (see `compileSdkVersion <#compilesdkversion>`__
   to understand why this differs from Java builds), and determines the minimum
   version of the OS that your code will be compatible with.

   The ``minSdkVersion`` is used by the NDK to determine what features may be
   used when compiling your code. For example, this property determines which
   `FORTIFY <https://android-developers.googleblog.com/2017/04/fortify-in-android.html>`__
   features are used in libc, and may also enable performance or size
   improvements (such as `GNU hashes <https://android.googlesource.com/platform/bionic/+/master/android-changes-for-ndk-developers.md#gnu-hashes-availible-in-api-level-23>`__
   or
   `RELR <https://android.googlesource.com/platform/bionic/+/master/android-changes-for-ndk-developers.md#relative-relocations-relr>`__)
   for your binaries that are not compatible with older versions of Android.
   Even if you do not use any new APIs, this property still governs the minimum
   supported OS version of your code.

   **Warning:**\  Your app *might* work on older devices even if your native
   libraries are built with a newer ``minSdkVersion``. **Do not rely on this
   behavior.** It is not guaranteed to work, and may not on other NDK versions,
   OS versions, or individual devices.
   For a new app, see the user distribution data in Android Studio's New Project
   Wizard or on `apilevels.com <https://apilevels.com>`__. Choose your balance
   between potential market share and maintenance costs. The lower your
   ``minSdkVersion``, the more time you'll spend working around old bugs and
   adding fallback behaviors for features that weren't implemented yet.

   For an existing app, raise your ``minSdkVersion`` whenever old API levels are
   no longer worth the maintenance costs, or lower it if your users demand it
   and it's worth the new maintenance costs. The Play console has metrics
   specific to your app's user distribution.

   **Note:**\  The NDK has its own ``minSdkVersion`` defined in
   ``<NDK>/meta/platforms.json``. This is the lowest API level supported by the
   NDK. Do not set your app's ``minSdkVersion`` lower than this. Play may allow
   your app to be installed on older devices, but your NDK code may not work.
   The ``minSdkVersion`` of your application is made available to the
   preprocessor via the ``__ANDROID_MIN_SDK_VERSION__`` macro (the legacy
   ``__ANDROID_API__`` is identical, but prefer the former because its meaning
   is clearer). This macro is defined automatically by Clang, so no header needs
   to be included to use it. For NDK builds, this macro is always defined.

Last updated 2022-11-03 UTC.

/C++ support
============

.. https://developer.android.google.cn/ndk/guides/cpp-support?hl=en

.. container:: devsite-article-body clearfix

   The NDK supports multiple C++ runtime libraries. This document provides
   information about these libraries, the tradeoffs involved, and how to use
   them.

   .. rubric:: C++ runtime libraries
      :name: hr

   **Table 1.** NDK C++ Runtimes and Features.

   ==================== ============================================
   Name                 Features
   ==================== ============================================
   `libc++ <#libc>`__   Modern C++ support.
   `system <#system>`__ ``new`` and ``delete``. (Deprecated in r18.)
   `none <#none>`__     No headers, limited C++.
   ==================== ============================================

   libc++ is available as both a static and shared library.

   **Warning:**\  Using static runtimes can cause unexpected behavior. See the
   `static runtimes section <#static_runtimes>`__ for more information.

   .. rubric:: libc++
      :name: cs

   `LLVM's libc++ <https://libcxx.llvm.org>`__ is the C++ standard library that
   has been used by the Android OS since Lollipop, and as of NDK r18 is the only
   STL available in the NDK.

   **Note:**\  For full details of the expected level of C++ *library* support
   for any given version, see the `C++14 Status <https://libcxx.llvm.org/Status/Cxx14.html>`__, 
   `C++17 Status <https://libcxx.llvm.org/Status/Cxx17.html>`__, and 
   `C++20 Status <https://libcxx.llvm.org/Status/Cxx20.html>`__ pages. (C++20 was
   previously known as C++2a.) The level of C++ *language* support in the
   compiler is orthogonal; see `C++ Support in Clang <https://clang.llvm.org/cxx_status.html>`__ instead.
   CMake defaults to whatever version of C++ clang defaults to (currently
   C++14), so you'll need to set the standard ``CMAKE_CXX_STANDARD`` to the
   appropriate value in your ``CMakeLists.txt`` file to use C++17 or later
   features. See the CMake `documentation for CMAKE_CXX_STANDARD <https://cmake.org/cmake/help/latest/variable/CMAKE_CXX_STANDARD.html>`__
   for more details.

   ndk-build also leaves the decision to clang by default, so ndk-build users
   should use ``APP_CPPFLAGS`` to add ``-std=c++17`` or whatever they want
   instead.

   The shared library for libc++ is ``libc++_shared.so``, and the static library
   is ``libc++_static.a``. In typical cases the build system will handle using
   and packaging these libraries as needed for the user. For atypical cases or
   when implementing your own build system, 
   see the `Build System Maintainers Guide <https://android.googlesource.com/platform/ndk/+/master/docs/BuildSystemMaintainers.md>`__
   or the guide for `using other build systems <#>`__.

   **Note:**\  libc++ is not a system library. If you use ``libc++_shared.so``,
   it must be included in your app. If you're building your application with
   Gradle this is handled automatically.
   The LLVM Project is under the Apache License v2.0 with LLVM Exceptions. For
   more information, see the `license file <https://github.com/llvm/llvm-project/blob/main/libcxx/LICENSE.TXT>`__.

   .. rubric:: system
      :name: system

   The system runtime refers to ``/system/lib/libstdc++.so``. This library
   should not be confused with GNU's full-featured libstdc++. On Android,
   libstdc++ is just ``new`` and ``delete``. Use libc++ for a full-featured C++
   standard library.

   **Note:**\  The system STL will be removed in a future NDK release. See
   `Issue 744 <https://github.com/android-ndk/ndk/issues/744>`__.
   The system C++ runtime provides support for the basic C++ Runtime ABI.
   Essentially, this library provides ``new`` and ``delete``. In contrast to the
   other options available in the NDK, there is no support for exception
   handling or RTTI.

   There is no standard library support aside from the C++ wrappers for the C
   library headers such as ``<cstdio>``. If you want an STL, you should use one
   of the other options presented on this page.

   .. rubric:: none
      :name: none

   There is also the option to have no STL. There are no linking or licensing
   requirements in that case. No C++ standard headers are available.

   .. rubric:: Selecting a C++ Runtime
      :name: selecting_a_c_runtime

   .. rubric:: CMake
      :name: cmake

   The default for CMake is ``c++_static``.

   You can specify ``c++_shared``, ``c++_static``, ``none``, or ``system`` using
   the ``ANDROID_STL`` variable in your module-level ``build.gradle`` file. To
   learn more, see the documentation for
   `ANDROID_STL <#>`__ in CMake.

   .. rubric:: ndk-build
      :name: ndk-build

   The default for ndk-build is ``none``.

   You can specify ``c++_shared``, ``c++_static``, ``none``, or ``system`` using
   the ``APP_STL`` variable in your
   `Application.mk <#>`__ file. For example:

   .. code:: prettyprint

      APP_STL := c++_shared

   ndk-build only allows you to select one runtime for your app, and can only do
   in `Application.mk <#>`__.

   .. rubric:: Use clang directly
      :name: use_clang_directly

   If you're using clang directly in your own build system, clang++ will use
   ``c++_shared`` by default. To use the static variant, add
   ``-static-libstdc++`` to your linker flags. Note that although the option
   uses the name "libstdc++" for historical reasons, this is correct for libc++
   as well.

   .. rubric:: Important considerations
      :name: ic

   .. rubric:: Static runtimes
      :name: sr

   If all of your application's native code is contained in a single shared
   library, we recommend using the static runtime. This allows the linker to
   inline and prune as much unused code as possible, leading to the most
   optimized and smallest application possible. It also avoids PackageManager
   and dynamic linker bugs in old versions of Android that make handling
   multiple shared libraries difficult and error-prone.

   That said, in C++, it is not safe to define more than one copy of the same
   function or object in a single program. This is one aspect of the 
   `One Definition Rule <http://en.cppreference.com/w/cpp/language/definition>`__
   present in the C++ standard.

   When using a static runtime (and static libraries in general), it is easy to
   accidentally break this rule. For example, the following application breaks
   this rule:

   .. code:: prettyprint

      # Application.mk
      APP_STL := c++_static

   .. code:: prettyprint

      # Android.mk

      include $(CLEAR_VARS)
      LOCAL_MODULE := foo
      LOCAL_SRC_FILES := foo.cpp
      include $(BUILD_SHARED_LIBRARY)

      include $(CLEAR_VARS)
      LOCAL_MODULE := bar
      LOCAL_SRC_FILES := bar.cpp
      LOCAL_SHARED_LIBRARIES := foo
      include $(BUILD_SHARED_LIBRARY)

   In this situation, the STL, including and global data and static
   constructors, will be present in both libraries. The runtime behavior of this
   application is undefined, and in practice crashes are very common. Other
   possible issues include:

   -  Memory allocated in one library, and freed in the other, causing memory
      leakage or heap corruption.
   -  Exceptions raised in ``libfoo.so`` going uncaught in ``libbar.so``,
      causing your app to crash.
   -  Buffering of ``std::cout`` not working properly.

   Beyond the behavioral issues involved, linking the static runtime into
   multiple libraries will duplicate the code in each shared library, increasing
   the size of your application.

   In general, you can only use a static variant of the C++ runtime if you have
   one and only one shared library in your application.

   **Note:**\  This rule applies to both your code and your third party
   dependencies.

   .. rubric:: Shared runtimes
      :name: shared_runtimes

   **Caution:**\  JNI libraries distributed with Java AARs **must not** use the
   shared runtime to avoid conflicting with other libraries and the app. The
   warnings below still apply. See the documentation for 
   `Middleware Vendors <https://android.googlesource.com/platform/ndk/+/refs/heads/master/docs/user/middleware_vendors.md>`__
   for more information.
   If your application includes multiple shared libraries, you should use
   ``libc++_shared.so``.

   On Android, the libc++ used by the NDK is not the same as the one that's part
   of the OS. This gives NDK users access to the latest libc++ features and bug
   fixes even when targeting old versions of Android. The trade-off is that if
   you use ``libc++_shared.so``, you must include it in your app. If you're
   building your application with Gradle this is handled automatically.

   Old versions of Android had bugs in PackageManager and the dynamic linker
   that caused installation, update, and loading of native libraries to be
   unreliable. In particular, if your app targets a version of Android earlier
   than Android 4.3 (Android API level 18), and you use ``libc++_shared.so``,
   you must load the shared library before any other library that depends on it.

   The `ReLinker <https://github.com/KeepSafe/ReLinker>`__ project offers
   workarounds for all known native library loading problems, and is usually a
   better choice than writing your own workarounds.

   .. rubric:: One STL per app
      :name: one_stl_per_app

   Historically the NDK supported GNU libstdc++ and STLport in addition to
   libc++. If your application depends on prebuilt libraries that were built
   against an NDK different than the one used to build your application, you
   will need to ensure that it does so in a compatible manner.

   An application should not use more than one C++ runtime. The various STLs are
   **not** compatible with one another. As an example, the layout of
   ``std::string`` in libc++ is not the same as it is in gnustl. Code written
   against one STL will not be able to use objects written against another. This
   is just one example; the incompatibilities are numerous.

   **Note:**\  The exception to this rule is that "no STL" does not count as an
   STL. You can safely use C only libraries (or even the `none <#none>`__ or
   `system <#system>`__ runtimes, since they're not actually STLs) in the same
   application as an STL. This rule only applies to `libc++ <#libc>`__, gnustl,
   and stlport.
   **Warning:**\  The linker can catch some of these issues at build time, but
   many of these issues will only manifest as a crash or odd behavior at run
   time.
   This rule extends beyond your code. All of your dependencies must use the
   same STL that you have selected. If you depend on a closed source third-party
   dependency that uses the STL and does not provide a library per STL, you do
   not have a choice in STL. You must use the same STL as your dependency.

   It is possible that you will depend on two mutually incompatible libraries.
   In this situation the only solutions are to drop one of the dependencies or
   ask the maintainer to provide a library built against the other STL.

   **Note:**\  While we attempt to maintain ABI compatibility across NDK
   releases, this is not always possible. For the best compatibility, you should
   use not only the same STL as your dependencies but also the same version of
   the NDK whenever possible.

   .. rubric:: C++ Exceptions
      :name: xp

   C++ exceptions are supported by libc++, but they are disabled by default in
   ndk-build. This is because historically C++ exceptions were not available in
   the NDK. CMake and standalone toolchains have C++ exceptions enabled by
   default.

   To enable exceptions across your whole application in ndk-build, add the
   following line to your `Application.mk <#>`__ file:

   .. code:: prettyprint

      APP_CPPFLAGS := -fexceptions

   To enable exceptions for a single ndk-build module, add the following line to
   the given module in its `Android.mk <#>`__:

   .. code:: prettyprint

      LOCAL_CPP_FEATURES := exceptions

   Alternatively, you can use:

   .. code:: prettyprint

      LOCAL_CPPFLAGS := -fexceptions

   .. rubric:: RTTI
      :name: rt

   As with exceptions, RTTI is supported by libc++, but is disabled by default
   in ndk-build. CMake and standalone toolchains have RTTI enabled by default.

   To enable RTTI across your whole application in ndk-build, add the following
   line to your `Application.mk <#>`__ file:

   .. code:: prettyprint

      APP_CPPFLAGS := -frtti

   To enable RTTI for a single ndk-build module, add the following line to the
   given module in its `Android.mk <#>`__:

   .. code:: prettyprint

      LOCAL_CPP_FEATURES := rtti

   Alternatively, you can use:

   .. code:: prettyprint

      LOCAL_CPPFLAGS := -frtti

Last updated 2024-01-03 UTC.

/Native APIs
============

.. https://developer.android.google.cn/ndk/guides/stable_apis?hl=en

.. container:: devsite-article-body clearfix

   This page gives an overview of the libraries included in the NDK, with links
   to the relevant parts of the NDK API reference, and to guides where they
   exist.

   .. rubric:: Use native APIs
      :name: using_native_apis

   There are two steps to using a library that the NDK provides:

   #. Tell the build system to link against the library.

      -  If you are using `ndk-build <#>`__: Add the library
         to ``LOCAL_LDLIBS`` in your `Android.mk <#>`__.
         Note that you strip the leading ``lib`` and say ``-l`` instead. For
         example, to link against ``libfoo`` and ``libbar``, you'd write:
         ``makefile LOCAL_LDLIBS := -lfoo -lbar``

         For more about ``LOCAL_LDLIBS``, see the `Android.mk docs <#>`__ documentation.

      -  If you are using `CMake <#>`__: Follow the instructions
         in Studio's `Add NDK APIs <#>`__ documentation.

   #. ``#include`` the appropriate headers from your code.

   .. rubric:: Core C/C++
      :name: core_cc

   .. rubric:: C library
      :name: c_library

   The standard C11 library headers such as ``<stdlib.h>`` and ``<stdio.h>`` are
   available as usual.

   Note that on Android, unlike Linux, there are no separate ``libpthread`` or
   ``librt`` libraries. That functionality is included directly in ``libc``,
   which does not need to be explicitly linked against.

   There is a separate ``libm`` for math functions (following the usual Unix
   tradition), but like ``libc`` this is automatically linked by the build
   systems.

   Dynamic linker functionality in ``<dlfcn.h>`` such as dlopen(3) and dlsym(3)
   is available, but you must explicitly link against ``libdl``.

   Library: ``libc`` / ``libm`` / ``libdl``

   .. rubric:: C++ library
      :name: cpp_library

   C++17 support is available. For more information on C++ library support, see
   `C++ library support <#>`__.

   .. rubric:: Logging
      :name: logging

   ``<android/log.h>`` contains APIs for logging to logcat.

   **Note:**\  ``<android/log.h>`` only provides logging primitives. For
   examples of more usable APIs, see Android's
   `log/log.h <https://android.googlesource.com/platform/system/logging/+/refs/heads/master/liblog/include/log/log.h>`__
   and
   `android-base/logging.h <https://cs.android.com/android/platform/superproject/+/master:system/libbase/include/android-base/logging.h>`__.
   Available since API level 3.

   Library: ``liblog``

   Reference: `Logging <#>`__

   .. rubric:: Trace
      :name: tracing

   The native tracing API ``<android/trace.h>`` provides the native equivalent
   of the ``android.os.Trace`` class in the Java programming language. This API
   lets you trace named units of work in your code by writing trace events to
   the system trace buffer. You can then collect and analyze the trace events
   using the `Systrace tool <#>`__.

   Available since API level 23.

   Library: ``libandroid``

   Guide: `Native Tracing <#>`__

   .. rubric:: zlib compression
      :name: zlib_compression

   You can use the `Zlib compression library <http://www.zlib.net/manual.html>`__
   by including ``<zlib.h>`` and linking against ``libz``.

   The NDK always includes the latest zlib header files at the time of release,
   and the ``libz.a`` included in the NDK for *static* linking is always that
   same version, but the ``libz.so`` for *dynamic* linking comes from the
   device, and be whatever version happened to be released on that device. In
   particular, this means that the headers you built against do not match the
   version of zlib on the device, so the usual warnings against making
   assumptions about implementation details are especially valid here. We are
   not aware of any issues with public API, but struct layout in particular has
   changed over time and will likely continue to do so. Note that new API in
   later zlib versions will obviously not be available on OS versions that
   predate the API. It is possible to avoid all these problems (at the cost of
   increased APK size) by always using the static ``libz.a`` instead of
   ``libz.so``.

   Available since API level 3 (but see note above).

   Library: ``libz``

   .. rubric:: Graphics
      :name: graphics

   .. rubric:: OpenGL ES 1.0 - 3.2
      :name: opengl_es_10_

   The standard OpenGL ES 1.x headers (``<GLES/gl.h>`` and ``<GLES/glext.h>``),
   2.0 headers (``<GLES2/gl2.h>`` and ``<GLES2/gl2ext.h>``), 3.0 headers
   (``<GLES3/gl3.h>`` and ``<GLES3/gl3ext.h>``), 3.1 headers (``<GLES3/gl31.h>``
   and ``<GLES3/gl3ext.h>``), and 3.2 headers (``<GLES3/gl32.h>`` and
   ``<GLES3/gl3ext.h>``) contain the declarations necessary for OpenGL ES.

   To use OpenGL ES 1.x, link your native module to ``libGLESv1_CM``.

   To use OpenGL ES 2.0, link your native module to ``libGLESv2``.

   To use OpenGL ES 3.x, link your native module to ``libGLESv3``.

   All Android-based devices support OpenGL ES 1.0 and 2.0.

   Only Android devices that have the necessary GPU fully support later versions
   of OpenGL ES, but the libraries are present on all devices that support the
   API level where they were introduced. It's safe to link against the
   libraries, but an app must query the OpenGL ES version string and extension
   string to determine whether the current device supports the features it
   needs. For information on how to perform this query, see the description of
   `glGetString() <http://www.khronos.org/opengles/sdk/1.1/docs/man/glGetString.xml>`__
   in the OpenGL specification.

   Additionally, you must put a
   `<uses-feature> <#>`__ tag in
   your manifest file to indicate the version of `OpenGL ES <#>`__ that you
   require.

   OpenGL ES 1.0 is available since API level 4.

   OpenGL ES 2.0 is available since API level 5.

   OpenGL ES 3.0 is available since API level 18.

   OpenGL ES 3.1 is available since API level 21.

   OpenGL ES 3.2 is available since API level 24.

   .. rubric:: EGL
      :name: egl

   EGL provides a native platform interface via the ``<EGL/egl.h>`` and
   ``<EGL/eglext.h>`` headers for allocating and managing OpenGL ES contexts and
   surfaces.

   EGL allows you to perform the following operations from native code:

   -  List supported EGL configurations.
   -  Allocate and release OpenGL ES surfaces.
   -  Create and destroy OpenGL ES contexts.
   -  Swap or flip surfaces.

   API level 24 added support for the
   `EGL_KHR_mutable_render_buffer <https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_mutable_render_buffer.txt>`__,
   `ANDROID_create_native_client_buffer <https://www.khronos.org/registry/EGL/extensions/ANDROID/EGL_ANDROID_create_native_client_buffer.txt>`__,
   and
   `ANDROID_front_buffer_auto_refresh <https://www.khronos.org/registry/EGL/extensions/ANDROID/EGL_ANDROID_front_buffer_auto_refresh.txt>`__
   extensions.

   Available since API level 9.

   Library: ``libEGL``

   Guide: `EGL Native Platform Interface <http://www.khronos.org/egl>`__

   .. rubric:: Vulkan
      :name: vulkan

   Vulkan is a low-overhead, cross-platform API for high-performance 3D graphics
   rendering. Vulkan is an `open standard <https://www.khronos.org/vulkan/>`__
   maintained by the Khronos Group. The standard ``<vulkan/vulkan.h>`` header
   file contains the declarations needed to perform Vulkan rendering calls from
   your code.

   For code samples, see the LunarG
   `VulkanSamples <https://github.com/LunarG/VulkanSamples>`__ and
   `android-vulkan-tutorials <https://github.com/googlesamples/android-vulkan-tutorials>`__
   projects on GitHub.

   The Vulkan library is present on all devices supporting API level 24 or
   later, but apps must check at runtime that the necessary GPU hardware support
   is available. Devices without Vulkan support will return zero devices from
   `vkEnumeratePhysicalDevices <https://www.khronos.org/registry/vulkan/specs/1.1/html/vkspec.html#vkEnumeratePhysicalDevices>`__.

   Available since API level 24.

   Library: ``libvulkan``

   Guide: `Vulkan graphics API guide <#>`__

   .. rubric:: Bitmaps
      :name: bitmaps

   The ``libjnigraphics`` library exposes API that allows access to the pixel
   buffers of Java ``Bitmap`` objects. The workflow is as follows:

   #. Call ``AndroidBitmap_getInfo()`` to retrieve information, such as width
      and height, about a given bitmap handle.

   #. Call ``AndroidBitmap_lockPixels()`` to lock the pixel buffer and retrieve
      a pointer to it. Doing so ensures that the pixels do not move until the
      app calls ``AndroidBitmap_unlockPixels()``.

   #. Modify the pixel buffer as appropriate for its pixel format, width, and
      other characteristics.

   #. Call ``AndroidBitmap_unlockPixels()`` to unlock the buffer.

   Available since API level 8.

   Library: ``libjnigraphics``

   Reference: `Bitmap API reference <#>`__

   .. rubric:: Sync API
      :name: sync_api

   Available since API level 26.

   Library: ``libsync``

   Reference: `Sync API reference <#>`__

   .. rubric:: Camera
      :name: camera

   The native camera APIs perform fine-grained photo capture and processing.
   Unlike the Java camera2 API, the native camera API does not support
   deprecated camera HAL 1.0 implementations (that is, the available camera list
   in the native camera API won’t list camera devices that have the
   `LEGACY <#>`__ hardware level).

   Available since API level 24.

   Library: ``libcamera2ndk``

   Reference: `Camera API reference <#>`__

   .. rubric:: Media
      :name: media

   .. rubric:: libmediandk
      :name: libmediandk

   The Media APIs provide low-level native interfaces similar to
   ``MediaExtractor``, ``MediaCodec`` and other related Java APIs.

   Library: ``libmediandk``

   Reference: `Media API reference <#>`__

   .. rubric:: OpenMAX AL
      :name: openmax_al

   Android native multimedia handling is based on Khronos Group OpenMAX AL 1.0.1
   API.

   The standard OpenMAX AL headers ``<OMXAL/OpenMAXAL.h>`` and
   ``<OMXAL/OpenMAXAL_Platform.h>`` contain the declarations necessary for
   performing multimedia output from the native side of Android.

   The NDK distribution of OpenMAX AL also provides Android-specific extensions.
   For information about these extensions, see the comments in
   ``<OMXAL/OpenMAXAL_Android.h>``.

   Available since API level 14.

   Library: ``libOpenMAXAL``

   .. rubric:: Android native application APIs
      :name: android_native_application_apis

   For more information, see the `Android NDK API reference <#>`__
   documentation.

   APIs include:

   -  `Asset <#>`__
   -  `Choreographer <#>`__
   -  `Configuration <#>`__
   -  `Input <#>`__
   -  `Looper <#>`__
   -  `Native Activity <#>`__
   -  `Native Hardware Buffers <#>`__
   -  `Native Window <#>`__
   -  `Memory <#>`__
   -  `Networking <#>`__
   -  `Sensor <#>`__
   -  `Storage <#>`__
   -  `SurfaceTexture <#>`__

   Library: ``libandroid``

   Library: ``libnativewindow`` for more recent Native Window functionality

   Full reference: `Android NDK API reference <#>`__

   .. rubric:: Hardware Buffer APIs
      :name: hardware_buffer_apis

   There are two native APIs that let you create your own pipelines for
   cross-process buffer management.

   The native hardware buffer API
   `<android/hardware_buffer.h> <#>`__ lets
   you directly allocate buffers to create your own pipelines for cross-process
   buffer management. You can allocate an ``AHardwareBuffer`` and use it to
   obtain an
   `EGLClientBuffer <https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_image_base.txt>`__
   resource type via the ``eglGetNativeClientBufferANDROID`` extension. You can
   pass that buffer to
   `eglCreateImageKHR <https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_image_base.txt>`__
   to create an
   `EGLImage <https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_image_base.txt>`__
   resource type, which may then be bound to a texture via
   `glEGLImageTargetTexture2DOES <https://www.khronos.org/registry/OpenGL/extensions/OES/OES_EGL_image.txt>`__
   on supported devices. This can be useful for creating textures that may be
   shared cross-process.

   The native hardware buffer JNI API (``<android/hardware_buffer_jni.h>``) lets
   you obtain a `HardwareBuffer <#>`__ object,
   which is a `Parcelable <#>`__ and thus may be
   transported between two different processes. This gives your app similar
   capabilities to
   `SurfaceFlinger <https://source.android.google.cn/devices/graphics/arch-sf-hwc.html#surfaceflinger>`__
   such as creating your own queue of buffers between processes without
   accessing internal Android APIs.

   .. rubric:: Audio
      :name: audio

   **Note:**\  Developers should consider using the open source Oboe library
   which is available on `GitHub <https://github.com/google/oboe>`__. Oboe is a
   C++ wrapper that provides an API that closely resembles AAudio. It calls
   AAudio when it is available, and falls back to OpenSL ES if AAudio is not
   available.

   .. rubric:: AAudio
      :name: aaudio

   AAudio is the currently-supported native audio API. It replaced OpenSL ES,
   and provides better support for high-performance audio apps that require
   low-latency audio.

   Available since API level 26.

   Library: ``libaaudio``

   Guide: `AAudio API guide <#>`__

   Reference: `AAudio API reference <#>`__

   .. rubric:: OpenSL ES
      :name: opensl_es

   OpenSL ES is another native audio API which is also supported, but see the
   note at the Guide below.

   Available since API level 9. API level 14 added PCM support.

   Library: ``libOpenSLES``

   Guide: `OpenSL ES for Android guide <#>`__

   .. rubric:: Neural Networks API
      :name: neural_networks_api

   The Neural Networks API (NNAPI) provides apps with hardware acceleration for
   on-device machine learning operations. The API supports on-device model
   creation, compilation, and execution. Apps typically do not use NNAPI
   directly; instead, the API is meant to be called by machine learning
   libraries, frameworks, and tools that let developers train their models and
   deploy them on Android devices.

   Available since API level 27.

   Library: ``libneuralnetworks``

   Guide: `Neural Networks guide <#>`__

   Reference: `Neural Networks API reference <#>`__

Last updated 2023-11-07 UTC.

/Intro: Debug and profile
=========================

.. https://developer.android.google.cn/ndk/guides/debug?hl=en

.. container:: devsite-article-body clearfix

   .. rubric:: Debug native crashes
      :name: debugging_native_crashes

   If you're struggling to understand a native crash dump or tombstone,
   `Debugging Native Android Platform Code <https://source.android.google.cn/devices/tech/debug/index.html>`__ 
   is a good introduction.

   For a fuller catalog of common types of crash and how to investigate them,
   see `Diagnosing Native Crashes <https://source.android.google.cn/devices/tech/debug/native-crash>`__.

   The `ndk-stack <#>`__ tool can help symbolize your
   crashes. You can debug crashes in Android Studio as described in the general
   `Debug your app <#>`__ documentation. If you prefer to use the
   command-line, `ndk-gdb <#>`__ lets you attach either
   ``gdb`` or ``lldb`` from your shell.

   .. rubric:: Provide apps direct access to tombstone traces
      :name: tombstone-traces

   Starting in Android 12 (API level 31), you can access your app's native crash
   tombstone as a `protocol buffer <https://developers.google.cn/protocol-buffers/>`__ through the
   `ApplicationExitInfo.getTraceInputStream() <#>`__
   method. The protocol buffer is serialized using 
   `this schema <https://android.googlesource.com/platform/system/core/+/refs/heads/main/debuggerd/proto/tombstone.proto>`__.
   Previously, the only way to get access to this information was through the
   `Android Debug Bridge <#>`__ (adb).

   Here’s an example of how to implement this in your app:

   .. code:: prettyprint

      ActivityManager activityManager: ActivityManager = getSystemService(Context.ACTIVITY_SERVICE);
      MutableList<ApplicationExitInfo> exitReasons = activityManager.getHistoricalProcessExitReasons(/* packageName = */ null, /* pid = */ 0, /* maxNum = */ 5);
      for (ApplicationExitInfo aei: exitReasons) {
          if (aei.getReason() == REASON_CRASH_NATIVE) {
              // Get the tombstone input stream.
              InputStream trace = aei.getTraceInputStream();
              // The tombstone parser built with protoc uses the tombstone schema, then parses the trace.
              Tombstone tombstone = Tombstone.parseFrom(trace);
          }
      }

   .. rubric:: Debug native memory issues
      :name: debugging_native_memory_issues

   .. rubric:: Address Sanitizer (HWASan/ASan)
      :name: address_sanitizer_hwasanasan

   `HWAddress Sanitizer <#>`__ (HWASan) and `Address Sanitizer <#>`__ (ASan) are similar to Valgrind, but
   significantly faster and much better supported on Android.

   These are your best option for debugging memory errors on Android.

   .. rubric:: Malloc debug
      :name: malloc_debug

   See `Malloc Debug <https://android.googlesource.com/platform/bionic/+/main/libc/malloc_debug/README.md>`__
   and `Native Memory Tracking using libc Callbacks <https://android.googlesource.com/platform/bionic/+/main/libc/malloc_debug/README_api.md>`__
   for a thorough description of the C library's built-in options for debugging
   native memory issues.

   .. rubric:: Malloc hooks
      :name: malloc_hooks

   If you want to build your own tools, Android's libc also supports
   intercepting all allocation/free calls that happen during program execution.
   See the `malloc_hooks documentation <https://android.googlesource.com/platform/bionic/+/main/libc/malloc_hooks/README.md>`__
   for usage instructions.

   .. rubric:: Malloc statistics
      :name: malloc_statistics

   Android supports the
   `mallinfo(3) <http://man7.org/linux/man-pages/man3/mallinfo.3.html>`__ and
   `malloc_info(3) <http://man7.org/linux/man-pages/man3/malloc_info.3.html>`__
   extensions to ``<malloc.h>``.

   The ``malloc_info`` functionality is available in Android 6.0 (Marshmallow)
   and higher and its XML schema is documented in Bionic's
   `malloc.h <https://android.googlesource.com/platform/bionic/+/main/libc/include/malloc.h>`__
   header.

   .. rubric:: Profiling
      :name: profiling

   For CPU profiling of native code, you can use
   `Simpleperf <#>`__.

Last updated 2024-01-03 UTC.

/Debug with Android Studio
==========================

.. https://developer.android.google.cn/studio/debug?hl=en

.. container:: devsite-article-body clearfix

   Android Studio provides a debugger that lets you do the following and more:

   -  Select a device to debug your app on.
   -  Set breakpoints in your Java, Kotlin, and C/C++ code.
   -  Examine variables and evaluate expressions at runtime.

   This page includes instructions for basic debugger operations. For more
   documentation, also see the 
   `IntelliJ IDEA debugging docs <https://www.jetbrains.com/help/idea/2023.3/debugging.html>`__.

   .. rubric:: Enable debugging
      :name: enable-debug

   Before you can begin debugging, do the following:

   Enable debugging on your device.
      If you're using the emulator, debugging is enabled by default. But for a
      connected device, you need to `enable debugging in the device developer options <#>`__.
   Run a debuggable build variant.
      Use a `build variant <#>`__ that includes
      `debuggable true <#>`__
      (``isDebuggable = true`` in Kotlin scripts) in the build configuration.

      Usually, you can select the default "debug" variant that's included in
      every Android Studio project, even though it's not visible in the
      ``build.gradle`` file. However, if you define new build types that should
      be debuggable, you must add ``debuggable true`` to the build type:

   Detect Automatically
      Select this debug type if you want Android Studio to automatically choose
      the best option for the code you are debugging. For example, if you have
      any C or C++ code in your project, Android Studio automatically uses the
      Dual debug type. Otherwise, Android Studio uses the Java-Only debug type.
   Java Only
      Select this debug type if you want to debug only code written in Java or
      Kotlin. The Java-Only debugger ignores any breakpoints or watches you set
      in your native code.
   Native Only (available only with C/C++ code)
      Select this debug type if you want to use only LLDB to debug your code.
      When using this debug type, the Java debugger session view is not
      available. By default, LLDB inspects only your native code and ignores
      breakpoints in your Java code. If you want to also debug your Java code,
      switch to either the Detect Automatically or Dual debug type.

      Native debugging only works on devices that meet the following
      requirements:

      -  **The device supports ``run-as``.**

         To check whether the device supports ``run-as``, run the following
         command on the ADB shell that is connected to your device:

         .. code:: none

            run-as your-package-name pwd

         Replace ``your-package-name`` with your app's package name. If the
         device supports ``run-as``, the command should return without any
         errors.

      -  **The device has ``ptrace`` enabled.**

         To check whether ``ptrace`` is enabled, run the following command on
         the ADB shell that is connected to your device:

         .. code:: none

            sysctl kernel.yama.ptrace_scope

         If ``ptrace`` is enabled, the command will print the value ``0`` or an
         an ``unknown key`` error. If ``ptrace`` is not enabled, it will print a
         value other than ``0``.

   Dual (Java + Native) - available only with C/C++ code
      Select this debug type if you want to switch between debugging both Java
      and native code. Android Studio attaches both the Java debugger and LLDB
      to your app process so you can inspect breakpoints in both your Java and
      native code without restarting your app or changing your debug
      configuration.

      In figure 2, notice the two tabs to the right of the Debug window title.
      Because the app has both Java and C++ code, one tab is for debugging the
      native code and the other for debugging Java code, as indicated by
      **-java**.

      .. figure:: https://developer.android.google.cn/static/studio/images/debug/db-attachprocess_2x.png
         :width: 708px

         **Figure 3.** Tab for debugging native code and tab for debugging Java
         code.

   Line breakpoint
      The most common type is a line breakpoint that pauses the execution of
      your app at a specified line of code. While paused, you can examine
      variables, evaluate expressions, and then continue execution line by line
      to determine the causes of runtime errors.
   Method breakpoint
      A method breakpoint pauses the execution of your app when it enters or
      exits a specific method. While paused, you can examine variables, evaluate
      expressions, and then continue execution line by line to determine the
      causes of runtime errors. When you set a breakpoint on a composable
      function, the debugger lists the parameters of the composable and their
      state to help identify what changes might have caused the recomposition.
   Field breakpoint
      A field breakpoint pauses the execution of your app when it reads from or
      writes to a specific field.
   Exception breakpoint
      An exception breakpoint pauses the execution of your app when an exception
      is thrown.

   You can set conditional breakpoints that will only suspend execution if
   specific conditions are met. You can also set logging breakpoints that write
   to Logcat without suspending execution. This can help avoid littering your
   code with log statements.

   To add a line breakpoint, proceed as follows:

   #. Locate the line of code where you want to pause execution.
   #. Click the left gutter along that line of code or place the caret on the
      line and press Control+F8 (on macOS, Command+F8).
   #. If your app is already running, click **Attach debugger to Android
      process** |image-toolbar-attach-debugger|. Otherwise, to start debugging, click **Debug**
      |image-toolbar-debug|.

   A red dot appears next to the line when you set a breakpoint, as shown in
   figure 5.

   .. figure:: https://developer.android.google.cn/static/images/tools/as-breakpointline.png

      **Figure 5.** A red dot appears next to the line when you set a
      breakpoint.

   When your code execution reaches the breakpoint, Android Studio pauses
   execution of your app.

   To identify the state of the app, use the tools in the Debugger tab:

   -  To examine the object tree for a variable, expand it in the Variables
      view. If the Variables view is not visible, click **Layout Settings**
      |image-as-layoutsettings| and ensure that **variables** is checked.

   -  To advance to the next line in the code without entering a method, click
      **Step Over** |image-debugger_button_stepover_2-0|.

   -  To advance to the first line inside a method call, click **Step Into**
      |image-debugger_button_stepinto_2-0|.

   -  To advance to the next line outside the current method, click **Step Out**
      |image-debugger_button_stepout_2-0|.

   -  To continue running the app normally, click **Resume Program** |image-debugger_button_resume_2-0|.

   If your project uses any native code, by default the Detect Automatically
   debug type attaches both the Java debugger and LLDB to your app as two
   separate processes. You can switch between inspecting Java and C/C++
   breakpoints without restarting your app or changing settings.

   **Note:** For Android Studio to detect breakpoints in your C or C++ code, you
   need to use a debug type that supports LLDB, such as Detect Automatically,
   Native, or Dual. You can change the debug type Android Studio uses by
   `editing your debug configuration <#>`__. To learn
   more about the different debug types, read the section about using other
   `debug types <#debug-types>`__.

   When Android Studio deploys your app to your target device, the Debug window
   opens with a tab or debug session view for each debugger process, as shown in
   figure 6.

   .. figure:: https://developer.android.google.cn/static/studio/images/debug/hybrid-debug-session_2-2_2x.png
      :width: 1020px

      **Figure 6.** Debugging native code using LLDB.

   #. Android Studio switches to the **``<your-module>``** tab when LLDB
      debugger encounters a breakpoint in your C/C++ code. The Frames,
      Variables, and Watches panes are also available and work exactly as they
      would if you were debugging Java code.

      Although the Threads pane is not available in the LLDB session view, you
      can access your app processes using the list in the Frames pane. Learn
      more about these panes in the sections about how to `debug window frames <#stackFrames>`__ and `inspect variables <#variablesAndWatches>`__.

      **Note:** While inspecting a breakpoint in your native code, the Android
      system suspends the virtual machine that runs your app’s Java bytecode.
      This means that you are unable to interact with the Java debugger or
      retrieve any state information from your Java debugger session while
      inspecting a breakpoint in your native code.

   #. Android Studio switches to the ``<your-module>``-java tab when the Java
      debugger encounters a breakpoint in your Java or Kotlin code.

   #. While debugging with LLDB, you can use the LLDB terminal in the LLDB
      session view to pass `command-line options to LLDB <http://lldb.llvm.org/tutorial.html>`__. If you have certain commands
      that you would like LLDB to execute each time you start debugging your
      app, either just before or just after the debugger attaches to your app
      process, you can `add those commands to your debug configuration <#>`__.

   While debugging C/C++ code, you can also set special types of breakpoints,
   called *watchpoints*, that can suspend your app process when your app
   interacts with a particular block of memory. To learn more, read the section
   about how to `add watchpoints <#watchpoints>`__.

   .. rubric:: View and configure breakpoints
      :name: breakPointsView

   To view all the breakpoints and configure breakpoint settings, click **View
   Breakpoints** |image-as-viewbreakbutton| in the Debug window. The Breakpoints window appears,
   as shown in figure 7.

   .. figure:: https://developer.android.google.cn/static/studio/images/debug/debugger-view-breakpoints_2x.png
      :width: 960px

      **Figure 7.** The Breakpoints window lists all the current breakpoints and
      includes behavior settings for each.

   The Breakpoints window lets you enable or disable each breakpoint from the
   list in the pane. If a breakpoint is disabled, Android Studio doesn't pause
   your app when it hits that breakpoint.

   Select a breakpoint from the list to configure its settings. You can
   configure a breakpoint to be disabled at first and have the system enable it
   after a different breakpoint is hit. You can also configure whether a
   breakpoint should be disabled after it is hit. To set a breakpoint for any
   exception, select **Exception Breakpoints** in the list of breakpoints.

   To temporarily disable all breakpoints, click **Mute Breakpoints** |image-debugger-mute-breakpoints|
   in the Debug window. Click again to re-enable.

   .. rubric:: Debug window frames
      :name: stackFrames

   In the Debugger window, the Frames pane lets you inspect the stack frame that
   caused the current breakpoint to be hit. This enables you to navigate and
   examine the stack frame and also inspect the list of threads in your Android
   app.

   To select a thread, use the thread selector menu and view its stack frame.
   Click the elements in the frame to open the source in the editor. You can
   also customize the thread presentation and export the stack frame as
   discussed in the `Examine Frames guide <https://www.jetbrains.com/help/idea/2023.3/examining-suspended-program.html#examine-frames>`__.

   .. rubric:: Inspect variables
      :name: variablesAndWatches

   In the Debugger window, the Variables pane lets you inspect variables when
   the system stops your app on a breakpoint and you select a frame from the
   Frames pane. The Variables pane also lets you evaluate ad hoc expressions
   using static methods and/or variables available within the selected frame.

   To add an expression to the object tree (while the application is being
   debugged):

   |image-debug_eval_watch|
   **Figure 8.** The object tree and expression entry box in the Debug window.

   #. Enter the expression to watch or display
   #. Click **Add to watches** or press Enter to evaluate the expression once.

   Alternatively, if the object tree contains the expression you want to watch,
   you can drag it to the top of the tree to add it as a watched expression.

   Watched expressions will update when breakpoints are hit or you step through
   your code.

   Evaluated expressions will remain displayed at the top of the object tree
   until you manually evaluate another expression or step through your code.

   To remove a watched expression from the object tree, right-click the
   expression and then click **Remove Watch**.

   .. rubric:: Add watchpoints
      :name: watchpoints

   While debugging C/C++ code, you can set special types of breakpoints, called
   *watchpoints*, that can suspend your app process when your app interacts with
   a particular block of memory. For example, if you set two pointers to a block
   of memory and assign a watchpoint to it, using either pointer to access that
   block of memory triggers the watchpoint.

   In Android Studio, you can create a watchpoint during runtime by selecting a
   specific variable, but LLDB assigns the watchpoint to only the block of
   memory the system allocates to that variable, not the variable itself. This
   is different from adding a variable to the Watches pane, which enables you to
   observe the value of a variable but doesn’t let you suspend your app process
   when the system reads or changes its value in memory.

   **Note:** When your app process exits a function and the system deallocates
   its local variables from memory, you need to reassign any watchpoints you
   created for those variables.

   To set a watchpoint, you must meet the following requirements:

   -  Your target physical device or emulator uses an x86 or x86_64 CPU. If your
      device uses an ARM CPU, then you must align the boundary of your
      variable's address in memory to either 4 bytes, for 32-bit processors, or
      8 bytes, for 64-bit processors. To align a variable in your native code,
      specify ``__attribute__((aligned(``\ ``num_bytes``\ ``)))`` in the
      variable deceleration, as shown below:

      .. code:: prettyprint

         // For a 64-bit ARM processor
         int my_counter __attribute__((aligned(8)));

   -  You have assigned three or fewer watchpoints already. Android Studio only
      supports up to four watchpoints on x86 or x86_64 target devices. Other
      devices may support fewer watchpoints.

   **Note:** When debugging your app with 32-bit ARM ABIs, adding a watchpoint
   or hovering over variables inside the code to investigate their values may
   cause a crash. As a workaround, debug using 64-bit ARM, x86, or x86_64
   binaries. This issue will be fixed in an upcoming Android Studio release.

   If you meet the requirements, you can add a watchpoint as follows:

   #. While your app is suspended on a breakpoint, navigate to the Variables
      pane in your LLDB session view.

   #. Right-click a variable that occupies the block of memory you want to track
      and select **Add Watchpoint**.

      .. figure:: https://developer.android.google.cn/static/studio/images/debug/add-watchpoint_2-2_2x.png
         :width: 604px

         **Figure 9.** Add a watchpoint to a variable in memory.

   #. A dialog to configure your watchpoint appears, as shown in figure 9.

      Configure your watchpoint with the following options:

      -  **Enabled:** Deselect this option if you want to tell Android Studio to
         ignore the watchpoint until you change the setting. Android Studio
         saves your watchpoint so you can access it later.
      -  **Suspend:** By default, the Android system suspends your app process
         when it accesses a block of memory you assign to a watchpoint. Deselect
         this option if you don’t want this behavior. This reveals additional
         options you can use to customize behavior when the system interacts
         with your watchpoint: **Log message to console** and **Remove when
         hit**.
      -  **Access Type:** Select whether your app should trigger your watchpoint
         when it tries to **Read** or **Write** to the block of memory the
         system allocates to the variable. To trigger your watchpoint on either
         a read or a write, select **Any**.

   #. Click **Done**.

   To view all your watchpoints and configure watchpoint settings, click **View
   Breakpoints** |image-viewbreakbutton| in the Debug window. The Breakpoints dialog appears,
   as shown in figure 10.

   .. figure:: https://developer.android.google.cn/static/studio/images/debug/watchpoint-config-dialog_2-2_2x.png
      :width: 960px

      **Figure 10.** The Breakpoints dialog lists your current watchpoints and
      includes behavior settings for each.

   After you add your watchpoint, click **Resume Program** |image-debugger_button_resume_2-0| in the
   Debug window to resume your app process. By default, if your app tries to
   access a block of memory that you have set a watchpoint to, the Android
   system suspends your app process and a watchpoint icon |image-watchpoint-icon_2-2_2x| appears next
   to the line of code that your app executed last, as shown in figure 11.

   .. figure:: https://developer.android.google.cn/static/studio/images/debug/stop-on-watchpoint_2-2_2x.png
      :width: 691px

      **Figure 11.** Android Studio indicates the line of code that your app
      executes just before triggering a watchpoint.

   .. rubric:: View and change resource value display format
      :name: viewAndChange

   In debug mode, you can view resource values and select a different display
   format for variables in your Java or Kotlin code. With the Variables tab
   displayed and a frame selected, do the following:

   #. In the Variables list, right-click anywhere on a resource line to display
      the list.

   #. In the list, select **View as** and select the format you want to use.

      The available formats depend on the data type of the resource you
      selected. You might see one or more of the following options:

      -  **Class:** Display the class definition.
      -  **toString:** Display string format.
      -  **Object:** Display the object (an instance of a class) definition.
      -  **Array:** Display in an array format.
      -  **Timestamp:** Display date and time as follows: yyyy-mm-dd hh:mm:ss.
      -  **Auto:** Android Studio chooses the best format based on the data
         type.
      -  **Binary:** Display a binary value using zeroes and ones.
      -  **MeasureSpec:** The value passed from the parent to the selected
         child. See
         `MeasureSpec. <#>`__
      -  **Hex:** Display as a hexadecimal value.
      -  **Primitive:** Display as a numeric value using a primitive data type.
      -  **Integer:** Display as a numeric value of type ``Integer``.

   To create a custom format, do the following:

   #. Right-click the resource value.
   #. Select **View as**.
   #. Select **Create**.
   #. The **Java Data Type Renderers** dialog displays. Follow the instructions
      at `Java Data type renderers <https://www.jetbrains.com/help/idea/2023.3/java-type-renderers.html>`__.

Last updated 2024-05-03 UTC.

.. |image-toolbar-attach-debugger| image:: https://developer.android.google.cn/static/studio/images/buttons/toolbar-attach-debugger.png
   :class: inline-icon
.. |image-toolbar-debug| image:: https://developer.android.google.cn/static/studio/images/buttons/toolbar-debug.png
   :class: inline-icon
.. |image-as-layoutsettings| image:: https://developer.android.google.cn/static/images/tools/as-layoutsettings.png
   :class: inline-icon
.. |image-debugger_button_stepover_2-0| image:: https://developer.android.google.cn/static/studio/images/debug/debugger_button_stepover_2-0.png
   :class: inline-icon
.. |image-debugger_button_stepinto_2-0| image:: https://developer.android.google.cn/static/studio/images/debug/debugger_button_stepinto_2-0.png
   :class: inline-icon
.. |image-debugger_button_stepout_2-0| image:: https://developer.android.google.cn/static/studio/images/debug/debugger_button_stepout_2-0.png
   :class: inline-icon
.. |image-debugger_button_resume_2-0| image:: https://developer.android.google.cn/static/studio/images/debug/debugger_button_resume_2-0.png
   :class: inline-icon
.. |image-as-viewbreakbutton| image:: https://developer.android.google.cn/static/images/tools/as-viewbreakbutton.png
   :class: inline-icon
.. |image-debugger-mute-breakpoints| image:: https://developer.android.google.cn/static/studio/images/debug/debugger-mute-breakpoints.png
   :class: inline-icon
.. |image-debug_eval_watch| image:: https://developer.android.google.cn/static/studio/images/debug/debug_eval_watch.png
.. |image-viewbreakbutton| image:: https://developer.android.google.cn/static/images/tools/as-viewbreakbutton.png
   :class: inline-icon
.. |image-debugger_button_resume_2-0| image:: https://developer.android.google.cn/static/studio/images/debug/debugger_button_resume_2-0.png
   :class: inline-icon
.. |image-watchpoint-icon_2-2_2x| image:: https://developer.android.google.cn/static/studio/images/debug/watchpoint-icon_2-2_2x.png
   :class: inline-icon

/ndk-gdb
========

.. https://developer.android.google.cn/ndk/guides/ndk-gdb?hl=en

.. container:: devsite-article-body clearfix

   The NDK includes a shell script named ``ndk-gdb`` to start a command-line
   native debugging session. Users who prefer to use a GUI should read the
   documentation for `debugging in Android Studio <#>`__ instead.

   .. rubric:: Requirements
      :name: req

   For command-line native debugging to work, these requirements must be met:

   -  Build your app using the ``ndk-build`` script. The ``ndk-gdb`` script does
      not support using the legacy ``make APP=<name>`` method to build.
   -  Enable app debugging in your ``AndroidManifest.xml`` file by including an
      ``<application>`` element that sets the ``android:debuggable`` attribute
      to ``true``.
   -  Build your app to run on Android 2.2 (Android API level 8) or higher.
   -  Debug on a device or emulator running Android 2.2 or higher. For debugging
      purposes, the target API level that you declare in your
      ``AndroidManifest.xml`` file does not matter.
   -  Develop your app in a Unix shell. On Windows, use
      `Cygwin <https://www.cygwin.com/>`__ or the experimental ``ndk-gdb-py``
      `Python <https://www.python.org/>`__ implementation.
   -  Use GNU Make 3.81 or higher.

   .. rubric:: Usage
      :name: use

   To invoke the ``ndk-gdb`` script, change into the application directory or
   any directory under it. For example:

   .. code:: none

      cd $PROJECT
      $NDK/ndk-gdb

   Here, ``$PROJECT`` points to your project's root directory, and ``$NDK``
   points to your NDK installation path.

   When you invoke ``ndk-gdb``, it configures the session to look for your
   source files and symbol/debug versions of your generated native libraries. On
   successfully attaching to your application process, ``ndk-gdb`` outputs a
   long series of error messages, noting that it cannot find various system
   libraries. This is normal, because your host machine does not contain
   symbol/debug versions of these libraries on your target device. You can
   safely ignore these messages.

   Next, ``ndk-gdb`` displays a normal GDB prompt.

   You interact with ``ndk-gdb`` in the same way as you would with GNU GDB. For
   example, you can use ``b <location>`` to set breakpoints, and ``c`` (for
   "continue") to resume execution. For a comprehensive list of commands, see
   the `GDB manual. <http://www.gnu.org/software/gdb/>`__ If you prefer using
   the `LLDB Debugger <https://lldb.llvm.org/>`__, use the ``--lldb`` option
   when invoking the ``ndk-gdb`` script.

   Note that when you quit the GDB prompt, the application process that you're
   debugging stops. This behavior is a gdb limitation.

   ``ndk-gdb`` handles many error conditions, and displays an informative error
   message if it finds a problem. these checks include making sure that the
   following conditions are satisfied:

   -  Checks that ADB is in your path.
   -  Checks that your application is declared debuggable in its manifest.
   -  Checks that, on the device, the installed application with the same
      package name is also debuggable.

   By default, ``ndk-gdb`` searches for an already-running application process,
   and displays an error if it doesn't find one. You can, however, use the
   ``--start`` or ``--launch=<name>`` option to automatically start your
   activity before the debugging session. For more information, see
   `Options <#opt>`__.

   .. rubric:: Options
      :name: opt

   To see a complete list of options, type ``ndk-gdb --help`` on the command
   line. Table 1 shows a number of the more commonly used ones, along with brief
   descriptions.

   **Table 1.** Common ndk-gdb options and their descriptions.

   .. list-table::

      -
         - Option
         - Description
      -
         - ``--lldb``
         -
            If set, the script will use the LLDB Debugger for the session instead of gdb.
      -
         - ``--verbose``
         -
            This option tells the build system to print verbose information about the
            native-debugging session setup. It is necessary only for debugging problems when
            the debugger can't connect to the app, and the error messages that ``ndk-gdb``
            displays are not enough.
      -
         - ``--force``
         -
            By default, ``ndk-gdb`` aborts if it finds that another native debugging session
            is already running on the same device. This option kills the other session, and
            replaces it with a new one. Note that this option does not kill the actual app
            being debugged, which you must kill separately.
      -
         - ``--start``
         -
            When you start ``ndk-gdb``, it tries by default to attach to an existing running
            instance of your app on the target device. You can override this default
            behavior by using ``--start`` to explicitly launch the application on the target
            device before the debugging session.

            Starting ``ndk-gdb`` with this option specified launches the first launchable
            activity listed in your application manifest. Use ``--launch=<name>`` to start
            the next launchable activity. To dump the list of launchable activities, run
            ``--launch-list`` from the command line.
      -
         - ``--launch=<name>``
         -
            This option is similar to ``--start``, except that it allows you to start a
            specific activity from your application. This feature is only useful if your
            manifest defines multiple launchable activities.
      -
         - ``--launch-list``
         -
            This convenience option prints the list of all launchable activity names found
            in your app manifest. ``--start`` uses the first activity name.
      -
         - ``--project=<path>``
         -
            This option specifies the app project directory. It is useful if you want to
            launch the script without first having to change to the project directory.
      -
         - ``--port=<port>``
         -
            By default, ``ndk-gdb`` uses local TCP port 5039 to communicate with the app it
            is debugging on the target device. Using a different port allows you to natively
            debug programs running on different devices or emulators connected to the same
            host machine.
      -
         - ``--adb=<file>``
         -
            This option specifies the `adb <#>`__ tool executable. It is only
            necessary if you have not set your path to include that executable.
      -
         - ``-d``

            ``-e``

            ``-s <serial>``
         -
            These flags are similar to the adb commands with the same names. Set these flags
            if you have several devices or emulators connected to your host machine. Their
            meanings are as follows:

            ``-d``
               Connect to a single physical device.
            ``-e``
               Connect to a single emulator device.
            ``-s <serial>``
               Connect to a specific device or emulator. Here, ``<serial>`` is the device's
               name as listed by the ``adb devices`` command.

            Alternatively, you can define the ``ADB_SERIAL`` environment variable to list a
            specific device, without the need for a specific option.
      -
         - ``--exec=<file>``
            ``-x <file>``
         -
            This option tells ``ndk-gdb`` to run the GDB initialization commands found in
            ``<file>`` after connecting to the process it is debugging. This is a useful
            feature if you want to do something repeatedly, such as setting up a list of
            breakpoints, and then resuming execution automatically.
      -
         - ``--nowait``
         -
            Disable pausing the Java code until GDB connects. Passing this option may cause
            the debugger to miss early breakpoints.
      -
         - ``--tui`` ``-t``
         -
            Enable Text User Interface if it is available.
      -
         - ``--gnumake-flag=<flag>``
         -
            This option is an extra flag (or flags) to pass to the ``ndk-build`` system when
            querying it for project information. You can use multiple instances of this
            option in the same command.

**Note:** The final three options in this table are only for the Python version
of ``ndk-gdb``.

.. _thread:

Thread support
--------------

If your app runs on a platform older than Android 2.3 (API level 9), ``ndk-gdb``
cannot debug native threads properly. The debugger can only debug the main
thread, abd completely ignores the execution of other threads.

If you place a breakpoint on a function executed on a non-main thread, the
program exits, and GDB displays the following message:

.. code:: none

   Program terminated with signal SIGTRAP, Trace/breakpoint trap.
         The program no longer exists.

Last updated 2020-11-03 UTC.

/ndk-stack
==========

.. https://developer.android.google.cn/ndk/guides/ndk-stack?hl=en

.. container:: devsite-article-body clearfix

   The ``ndk-stack`` tool allows you to symbolize stack traces from
   `adb logcat <#>`__ or a tombstone in
   ``/data/tombstones/``. It replaces any address inside a shared library with
   the corresponding ``<source-file>:<line-number>`` from your source code,
   making debugging easier.

   For example, it translates something like:

   .. code:: none

      I/DEBUG   (   31): *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
      I/DEBUG   (   31): Build fingerprint: 'generic/google_sdk/generic/:2.2/FRF91/43546:eng/test-keys'
      I/DEBUG   (   31): pid: 351, tid: 351  >>> /data/local/ndk-tests/crasher <<<
      I/DEBUG   (   31): signal 11 (SIGSEGV), fault addr 0d9f00d8
      I/DEBUG   (   31):  r0 0000af88  r1 0000a008  r2 baadf00d  r3 0d9f00d8
      I/DEBUG   (   31):  r4 00000004  r5 0000a008  r6 0000af88  r7 00013c44
      I/DEBUG   (   31):  r8 00000000  r9 00000000  10 00000000  fp 00000000
      I/DEBUG   (   31):  ip 0000959c  sp be956cc8  lr 00008403  pc 0000841e  cpsr 60000030
      I/DEBUG   (   31):          #00  pc 0000841e  /data/local/ndk-tests/crasher
      I/DEBUG   (   31):          #01  pc 000083fe  /data/local/ndk-tests/crasher
      I/DEBUG   (   31):          #02  pc 000083f6  /data/local/ndk-tests/crasher
      I/DEBUG   (   31):          #03  pc 000191ac  /system/lib/libc.so
      I/DEBUG   (   31):          #04  pc 000083ea  /data/local/ndk-tests/crasher
      I/DEBUG   (   31):          #05  pc 00008458  /data/local/ndk-tests/crasher
      I/DEBUG   (   31):          #06  pc 0000d362  /system/lib/libc.so
      I/DEBUG   (   31):

   into the more readable:

   .. code:: none

      ********** Crash dump: **********
      Build fingerprint: 'generic/google_sdk/generic/:2.2/FRF91/43546:eng/test-keys'
      pid: 351, tid: 351  >>> /data/local/ndk-tests/crasher <<<
      signal 11 (SIGSEGV), fault addr 0d9f00d8
      Stack frame #00  pc 0000841e  /data/local/ndk-tests/crasher : Routine zoo in /tmp/foo/crasher/jni/zoo.c:13
      Stack frame #01  pc 000083fe  /data/local/ndk-tests/crasher : Routine bar in /tmp/foo/crasher/jni/bar.c:5
      Stack frame #02  pc 000083f6  /data/local/ndk-tests/crasher : Routine my_comparison in /tmp/foo/crasher/jni/foo.c:9
      Stack frame #03  pc 000191ac  /system/lib/libc.so
      Stack frame #04  pc 000083ea  /data/local/ndk-tests/crasher : Routine foo in /tmp/foo/crasher/jni/foo.c:14
      Stack frame #05  pc 00008458  /data/local/ndk-tests/crasher : Routine main in /tmp/foo/crasher/jni/main.c:19
      Stack frame #06  pc 0000d362  /system/lib/libc.so

   .. rubric:: Usage
      :name: usage

   To use ``ndk-stack``, you first need a directory containing unstripped
   versions of your app's shared libraries. If you use ``ndk-build``, these
   unstripped shared libraries are found in ``$PROJECT_PATH/obj/local/<abi>``,
   where ``<abi>`` is your device's ABI.

   There are two ways to use the tool. You can feed the logcat text as direct
   input to the program. For example:

   .. code:: none

      adb logcat | $NDK/ndk-stack -sym $PROJECT_PATH/obj/local/armeabi-v7a

   You can also use the ``-dump`` option to specify the logcat as an input file.
   For example:

   .. code:: none

      adb logcat > /tmp/foo.txt
      $NDK/ndk-stack -sym $PROJECT_PATH/obj/local/armeabi-v7a -dump foo.txt

   When it begins parsing the logcat output, the tool looks for an initial line
   of asterisks. For example:

   .. code:: none

      *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***

   **Note:** When copy/pasting traces, don't forget this line, or ``ndk-stack``
   won't work correctly.

   .. rubric:: More information
      :name: more-info

   Google Play uses ``ndk-stack`` to symbolize stack traces for native apps in
   the Google Play Console. For information on how to enable this for your app
   in a production environment, see how to `include a native debug symbols file <#>`__ for your app in
   the Google Play Console.

Last updated 2020-08-17 UTC.

/Native tracing
===============

.. https://developer.android.google.cn/topic/performance/tracing/custom-events?hl=en

.. container:: devsite-article-body clearfix

   System tracing shows you information about processes only at the system
   level, so it's sometimes difficult to know which of your app or game's
   methods are executing at a given time relative to system events.

   Jetpack provides a tracing API that you can use to label a particular section
   of code. This information is then reported in traces captured on the device.
   `Macrobenchmark <#>`__
   captures traces with custom trace points automatically.

   When using the systrace command line tool to capture traces, the ``-a``
   option is required. Without this option, your app's methods don't appear in a
   system trace report.

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               class MyAdapter : RecyclerView.Adapter<MyViewHolder>() {
                   override fun onCreateViewHolder(parent: ViewGroup,
                           viewType: Int): MyViewHolder {
                       trace("MyAdapter.onCreateViewHolder") {
                           MyViewHolder.newInstance(parent)
                       }
                   }

                   override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
                       trace("MyAdapter.onBindViewHolder") {
                           trace("MyAdapter.queryDatabase")
                               val rowItem = queryDatabase(position)
                               dataset.add(rowItem)
                           }
                           holder.bind(dataset[position])
                       }
                   }
               }

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               public class MyAdapter extends RecyclerView.Adapter<MyViewHolder> {
                   @NonNull
                   @Override
                   public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
                       return TraceKt.trace(
                           "MyAdapter.onCreateViewHolder",
                           () -> MyViewHolder.newInstance(parent)
                       );
                   }

                   @Override
                   public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
                       TraceKt.trace(
                           "MyAdapter.onBindViewHolder",
                           () -> {
                               TraceKt.trace(
                                   "MyAdapter.queryDatabase",
                                   () -> {
                                       Item rowItem = queryDatabase(position);
                                       dataset.add(rowItem);
                                   }
                               );
                           }
                       );
                   }
               }

   We recommend using the Kotlin extension function, even in Java code, as it
   automatically ends the trace when the lambda completes. This removes the risk
   of forgetting to end the tracing.

   You can also use an NDK API for custom trace events. To learn about using
   this API for your native code, see `Custom trace events in native code <#>`__.

   .. rubric:: Recommended for you
      :name: recommended_for_you

   -  Note: link text is displayed when JavaScript is off
   -  `App startup time <#>`__
   -  `Slow rendering <#>`__

Last updated 2024-01-03 UTC.

/Order Files
============

.. https://developer.android.google.cn/ndk/guides/orderfile?hl=en

.. container:: devsite-article-body clearfix

   Order file is a recent linker optimization technique. These order files are
   text files containing symbols representing functions. Linkers like lld use
   order files to layout functions in a specific order. These binaries or
   libraries with ordered symbols reduce page faults and improve a program's
   launch time due to the efficient loading of symbols during a program's
   cold-start.

   Order file features can be added to your application by following three
   steps:

   #. Generate profiles and mapping file
   #. Create an order file from the profiles and mapping file
   #. Use the order file during the Release build to layout the symbols

   .. rubric:: Generate Order File
      :name: generate-order-file

   Generating an order file require three steps:

   #. Build an instrumented version of the app that writes the order file
   #. Run the app to generate the profiles
   #. Post-process the profiles and mapping file

   .. rubric:: Create an Instrumented Build
      :name: instrumented-build

   The profiles are generated by running an instrumented build of the
   application. An instrumented build requires adding
   ``-forder-file-instrumentation`` to both the compiler and linker flags with
   ``-mllvm -orderfile-write-mapping=<filename>-mapping.txt`` strictly being
   added to the compiler flags. The instrumentation flag enables order file
   instrumentation for profiling and loads the specific library needed for
   profiling. On the other hand, the mapping flag just outputs the mapping file
   that shows the MD5 hash for each function within the binary or library.

   In addition, make sure to pass any optimization flag but ``-O0`` because both
   the instrumentation flag and mapping flag require one. If no optimization
   flag is passed, the mapping file is not generated and the instrumented build
   might output wrong hashes to the profile file.

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: ndk-build
            :name: ndk-build

         Be sure to build with ``APP_OPTIM=release`` so ndk-build uses an
         optimization mode other than ``-O0``. When building with AGP this is
         automatic for release builds.

         .. code:: prettyprint

            LOCAL_CFLAGS += \
                -forder-file-instrumentation \
                -mllvm -orderfile-write-mapping=mapping.txt \

            LOCAL_LDFLAGS += -forder-file-instrumentation

      .. container:: section

         .. rubric:: CMake
            :name: cmake

         Be sure to use a ``CMAKE_BUILD_TYPE`` other than ``Debug`` so CMake
         uses an optimization mode other than ``-O0``. When building with AGP
         this is automatic for release builds.

         .. code:: prettyprint

            target_compile_options(orderfiledemo PRIVATE
                -forder-file-instrumentation
                -mllvm -orderfile-write-mapping=mapping.txt
            )
            target_link_options(orderfiledemo PRIVATE -forder-file-instrumentation)

      .. container:: section

         .. rubric:: Other build systems
            :name: other-build-systems

         Compile your code using
         ``-forder-file-instrumentation -O1 -mllvm -orderfile-write-mapping=mapping.txt``.

         ``-O1`` specifically is not required, but don't use ``-O0``.

         Omit ``-mllvm -orderfile-write-mapping=mapping.txt`` when linking.

   All these flags are not needed for a Release build so it should be controlled
   by a build variable. For simplicity, you can set this all up in the
   CMakeLists.txt like in our
   `sample <https://github.com/android/ndk-samples/blob/main/orderfile/app/src/main/cpp/CMakeLists.txt>`__.

   .. rubric:: Create an Order File Library
      :name: order-file-library

   In addition to the flags, the profile file needs to be set up and the
   instrumented binary needs to explicitly trigger a profile write during its
   execution.

   -  Call ``__llvm_profile_set_filename(PROFILE_DIR "/<filename>-%m.profraw")``
      for setting up the profile path. Although the argument passed is
      ``<filename>-%m.profraw``, the profile file is saved as
      ``<filename>-%m.profraw.order``. Make sure ``PROFILE_DIR`` is writable by
      the app and you have access to the directory.

      -  Due to many shared libraries being profiled, ``%m`` is useful because
         it expands to a unique module signature for the library, resulting in a
         separate profile per library. For more pattern specifiers, you can
         check out this
         `link <https://clang.llvm.org/docs/SourceBasedCodeCoverage.html#running-the-instrumented-program>`__.

   -  Call ``__llvm_profile_initialize_file()`` to set up the profile file
   -  Call ``__llvm_orderfile_dump()`` to explicitly write to the profile file

   The profiles are collected in memory and the dump function writes them to the
   file. You need to make sure the dump function is called at the end of startup
   so your profile file has all the symbols until the end of startup.

   .. code:: cpp

      extern "C" {
      extern int __llvm_profile_set_filename(const char*);
      extern int __llvm_profile_initialize_file(void);
      extern int __llvm_orderfile_dump(void);
      }

      #define PROFILE_DIR "<location-writable-from-app>"
      void workload() {
        // ...
        // run workload
        // ...

        // set path and write profiles after workload execution
        __llvm_profile_set_filename(PROFILE_DIR "/default-%m.profraw");
        __llvm_profile_initialize_file();
        __llvm_orderfile_dump();
        return;
      }

   .. rubric:: Run the Build for Profiles
      :name: run-build

   Run the instrumented app on either a physical or virtual device to generate
   the profiles. You can extract the profile files using ``adb pull``.

   .. code:: devsite-click-to-copy

      adb shell "run-as <package-name> sh -c 'cat /data/user/0/<package-name>/cache/default-%m.profraw.order' | cat > /data/local/tmp/default-%m.profraw.order"
      adb pull /data/local/tmp/default-%m.profraw.order .

   As mentioned before, make sure the folder containing the written profile file
   can be accessed by you. If it is a virtual device, you might want to avoid
   the emulators with Play Store due to not having access to many folders.

   .. rubric:: Postprocess the Profile and Mapping File
      :name: postprocess

   When you get the profiles, you need to find the mapping file and convert each
   profile into a hexadecimal format. Typically, you can find the mapping file
   in the build folder of the app. When you have both, you can use our
   `script <https://android.googlesource.com/toolchain/llvm_android/+/main/orderfiles/scripts/create_orderfile.py>`__
   to take a profile file and the correct mapping file to generate an order
   file.

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: Linux/Mac/ChromeOS
            :name: linuxmacchromeos

         .. code:: devsite-click-to-copy

            hexdump -C default-%m.profraw.order > default-%m.prof
            python3 create_orderfile.py --profile-file default-%m.prof --mapping-file <filename>-mapping.txt

      .. container:: section

         .. rubric:: Windows
            :name: windows

         .. code:: devsite-click-to-copy

            certutil -f -encodeHex default-%m.profraw.order default-%m.prof
            python3 create_orderfile.py --profile-file default-%m.prof --mapping-file <filename>-mapping.txt

   If you want to read more about the script, you can check out this
   `README <https://android.googlesource.com/toolchain/llvm_android/+/main/orderfiles/scripts/README.md>`__.

   .. rubric:: Use Order file to Build Application
      :name: use-order-file

   After generating an order file, you should remove the earlier flags and the
   order file functions because those are just meant for generation steps. You
   just need to pass ``-Wl,--symbol-ordering-file=<filename>.orderfile`` to the
   compile and linker flags. Sometimes, symbols cannot be found or cannot move
   and give out warnings so you can pass ``-Wl,--no-warn-symbol-ordering`` to
   suppress these warnings.

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: ndk-build
            :name: ndk-build_1

         .. code:: prettyprint

            LOCAL_CFLAGS += \
                -Wl,--symbol-ordering-file=<filename>.orderfile \
                -Wl,--no-warn-symbol-ordering \

            LOCAL_LDFLAGS += \
                -Wl,--symbol-ordering-file=<filename>.orderfile \
                -Wl,--no-warn-symbol-ordering \

      .. container:: section

         .. rubric:: CMake
            :name: cmake_1

         .. code:: prettyprint

            target_compile_options(orderfiledemo PRIVATE
                -Wl,--symbol-ordering-file=<filename>.orderfile
                -Wl,--no-warn-symbol-ordering
            )
            target_link_options(orderfiledemo PRIVATE
                -Wl,--symbol-ordering-file=<filename>.orderfile
                -Wl,--no-warn-symbol-ordering
            )

      .. container:: section

         .. rubric:: Other build systems
            :name: other-build-systems_1

         Compile your code using
         ``-Wl,--symbol-ordering-file=<filename>.orderfile -Wl,--no-warn-symbol-ordering``.

   For more information, check out `the order file example <https://github.com/android/ndk-samples/tree/main/orderfile>`__.

   .. rubric:: Order file implementation details
      :name: implementation-details

   There are many ways to generate order files and use them for building. The
   NDK uses LLVM's method so it is the most useful for your C or C++ shared
   libraries over the actual Java or Kotlin app. Clang takes every function name
   (symbol) and creates an MD5 hash of it and outputs this relation to a mapping
   file. A function's MD5 hash is written into the profile file (profraw format)
   when the function executes for the first time. Any subsequent executions of
   the function don't write its MD5 hash to the profile file because it wants to
   avoid duplicates. As a result, only the first execution of the function is
   recorded in the order. By going through the profile file and mapping file,
   you can take each MD5 hash and replace it with the corresponding function and
   get an order file.

   Examples of both a profile file in hexadecimal format and a mapping file can
   be found as
   `example.prof <https://android.googlesource.com/toolchain/llvm_android/+/main/orderfiles/test/example.prof>`__
   and
   `example-mapping.txt <https://android.googlesource.com/toolchain/llvm_android/+/main/orderfiles/test/example-mapping.txt>`__
   respectively.

Last updated 2023-08-29 UTC.

/Profile-guided Optimization
============================

.. https://developer.android.google.cn/ndk/guides/pgo?hl=en

.. container:: devsite-article-body clearfix

   `Profile-guided optimization (PGO) <https://clang.llvm.org/docs/UsersManual.html#profile-guided-optimization>`__
   is a well known compiler optimization technique. In PGO, runtime profiles
   from a program’s executions are used by the compiler to make optimal choices
   about inlining and code layout. This leads to improved performance and
   reduced code size.

   PGO can be deployed to your application or library with the following steps:
   1. Identify a representative workload. 2. Collect profiles. 3. Use the
   profiles in a Release build.

   .. rubric:: Step 1: Identify a Representative Workload
      :name: step_1_identify_a_representative_workload

   First, identify a representative benchmark or workload for your application.
   This is a critical step as the profiles collected from the workload identify
   the hot and cold regions in the code. When using the profiles, the compiler
   will perform aggressive optimizations and inlining in the hot regions. The
   compiler may also choose to reduce the code size of cold regions while
   trading off performance.

   Identifying a good workload is also beneficial to keep track of performance
   in general.

   .. rubric:: Step 2: Collect Profiles
      :name: step_2_collect_profiles

   Profile collection involves three steps: - building native code with
   instrumentation, - running the instrumented app on the device and generating
   profiles, and - merging/post-processing the profiles on the host.

   .. rubric:: Create Instrumented Build
      :name: create_instrumented_build

   The profiles are collected by running the workload from step 1 on an
   instrumented build of the application. To generate an instrumented build, add
   ``-fprofile-generate`` to the compiler and linker flags. This flag should be
   controlled by a separate build variable since the flag is not needed during a
   default build.

   .. rubric:: Generate Profiles
      :name: generate_profiles

   Next, run the instrumented app on the device and generate profiles. Profiles
   are collected in memory when the instrumented binary is run and get written
   to a file at exit. However, functions registered with ``atexit`` are not
   called in an Android app — the app just gets killed.

   The application/workload has to do extra work to set a path for the profile
   file and then explicitly trigger a profile write.

   -  To set the profile file path, call
      ``__llvm_profile_set_filename(PROFILE_DIR "/default-%m.profraw``. ``%m``
      is useful when there are multiple shared libraries. %m\` expands to a
      unique module signature for that library, resulting in a separate profile
      per library. See
      `here <https://clang.llvm.org/docs/SourceBasedCodeCoverage.html#running-the-instrumented-program>`__
      for other useful pattern specifiers. PROFILE_DIR is a directory that is
      writable from the app. See the `demo <#putting-it-all-together>`__ for
      detecting this directory at runtime.
   -  To explicitly trigger a profile write, call the
      ``__llvm_profile_write_file`` function.

   .. code:: prettyprint

      extern "C" {
      extern int __llvm_profile_set_filename(const char*);
      extern int __llvm_profile_write_file(void);
      }

      #define PROFILE_DIR "<location-writable-from-app>"
      void workload() {
        // ...
        // run workload
        // ...

        // set path and write profiles after workload execution
        __llvm_profile_set_filename(PROFILE_DIR "/default-%m.profraw");
        __llvm_profile_write_file();
        return;
      }

   NB: Generating the profile file is simpler if the workload is a standalone
   binary — just set the ``LLVM_PROFILE_FILE`` environment variable to
   ``%t/default-%m.profraw`` before running the binary.

   .. rubric:: Post-process Profiles
      :name: post-process_profiles

   The profile files are in the .profraw format. They must first be fetched from
   the device using ``adb pull``. After fetch, use the ``llvm-profdata`` utility
   in the NDK to convert from ``.profraw`` to ``.profdata``, which can then be
   passed to the compiler.

   .. code:: prettyprint

      $NDK/toolchains/llvm/prebuilt/linux-x86_64/bin/llvm-profdata \
          merge --output=pgo_profile.profdata \
          <list-of-profraw-files>

   Use the ``llvm-profdata`` and ``clang`` from the same NDK release to avoid
   version mismatch of the profile file formats.

   .. rubric:: Step 3 Use the Profiles to Build Application
      :name: step_3_use_the_profiles_to_build_application

   Use the profile from the previous step during a release build of your
   application by passing ``-fprofile-use=<>.profdata`` to the compiler and
   linker. The profiles can be used even as the code evolves — the Clang
   compiler can tolerate slight mismatch between the source and the profiles.

   NB: In general, for most libraries, the profiles are common across
   architectures. For e.g., profiles generated from arm64 build of the library
   can be used for all architectures. The caveat being that if there are
   architecture-specific code paths in the library (arm vs x86 or 32-bit vs
   64-bit), separate profiles should be used for each such configuration.

   .. rubric:: Putting it all together
      :name: putting_it_all_together

   https://github.com/DanAlbert/ndk-samples/tree/pgo/pgo shows an end-to-end
   demo for using PGO from an app. It provides additional details that were
   skimmed over in this doc.

   -  The `CMake build rules <https://github.com/DanAlbert/ndk-samples/blob/pgo/pgo/app/src/main/cpp/CMakeLists.txt>`__
      show how to setup a CMake variable that builds native code with
      instrumentation. When the build variable is not set, native code is
      optimized using previously generated PGO profiles.
   -  In an instrumented build,
      `pgodemo.cpp <https://github.com/DanAlbert/ndk-samples/blob/pgo/pgo/app/src/main/cpp/pgodemo.cpp>`__
      writes the profiles are workload execution.
   -  A writable location for the profiles is obtained at runtime in
      `MainActivity.kt <https://github.com/DanAlbert/ndk-samples/blob/pgo/pgo/app/src/main/java/com/example/pgodemo/MainActivity.kt>`__
      using ``applicationContext.cacheDir.toString()``.
   -  To pull profiles from the device without requiring ``adb root``, use the
      ``adb`` recipe
      `here <https://github.com/DanAlbert/ndk-samples/blob/pgo/pgo/app/src/main/cpp/CMakeLists.txt#L11>`__.

Last updated 2022-05-31 UTC.

/Simpleperf
===========

.. https://developer.android.google.cn/ndk/guides/simpleperf?hl=en

.. container:: devsite-article-body clearfix

   Android Studio includes a graphical front end to Simpleperf, documented in
   `Inspect CPU activity with CPU Profiler <https://developer.android.google.cn/studio/profile/cpu-profiler>`__.
   Most users will prefer to use that instead of using Simpleperf directly.

   If you prefer to use the command line, Simpleperf is a versatile command-line
   CPU profiling tool included in the NDK for Mac, Linux, and Windows.

   For full documentation, start with the Simpleperf
   `README <https://android.googlesource.com/platform/system/extras/+/master/simpleperf/doc/README.md>`__.

   .. rubric:: Simpleperf tips and recipes
      :name: recipes

   If you are just starting out with Simpleperf, here are some commands that you
   may find particularly useful. For more commands and options, see `Simpleperf command and options reference <#>`__.

   .. rubric:: Find which shared libraries take the longest to execute
      :name: so

   You can run this command to see which ``.so`` files take up the largest
   percentage of execution time (based on the number of CPU cycles). This is a
   good first command to run when starting your performance analysis session.

   .. code:: none

      $ simpleperf report --sort dso

   .. rubric:: Find which functions take the longest to execute
      :name: functions

   Once you have identified which shared library takes most of the execution
   time, you can run this command to see the percentage of time spent executing
   the functions of that ``.so`` file.

   .. code:: none

      $ simpleperf report --dsos library.so --sort symbol

   .. rubric:: Find percentage of time spent in threads
      :name: threads

   Execution time in a ``.so`` file can be split across multiple threads. You
   can run this command to see the percentage of time spent in each thread.

   .. code:: none

      $ simpleperf report --sort tid,comm

   .. rubric:: Find the percentage of time spent in object modules
      :name: object-modules

   After finding the threads where most of the execution time is spent, you can
   use this command to isolate the object modules taking the longest execution
   time on those threads.

   .. code:: none

      $ simpleperf report --tids threadID --sort dso

   .. rubric:: See how function calls are related
      :name: callgraph

   A *call graph* provides a visual representation of a stack trace that
   Simpleperf records during the profiling session.

   You can use the ``report -g`` command to print a call graph to see what
   functions are called by other functions. This is useful to determine if a
   function is slow by itself, or if it's because one or more of the functions
   it calls are slow.

   .. code:: none

      $ simpleperf report -g

   You can also use the Python script ``report.py -g`` to start an interactive
   tool that displays functions. You can click on each function to see how much
   time is spent in its children.

   .. rubric:: Profiling apps built with Unity
      :name: unity

   If you are profiling an app built with Unity, make sure to build the app with
   debug symbols by following these steps:

   #. Open your Android project in the Unity Editor.
   #. In the **Build Settings** window for the Android platform, make sure the
      **Development Build** option is checked.
   #. Click on **Player Settings** and set the **Stripping Level** property to
      **Disabled**.

Last updated 2024-01-03 UTC.

/Wrap shell script
==================

.. https://developer.android.google.cn/ndk/guides/wrap-script?hl=en

.. container:: devsite-article-body clearfix

   When debugging and profiling apps with native code, it’s often useful to use
   debugging tools that need to be enabled at process startup. This requires
   that you run your app in a fresh process rather than cloning from the zygote.
   Examples include:

   -  Tracing system calls with `strace <https://strace.io/>`__.
   -  Finding memory bugs with `malloc debug <https://android.googlesource.com/platform/bionic/+/master/libc/malloc_debug/README.md>`__
      or `Address Sanitizer (ASan) <https://github.com/google/sanitizers/wiki/AddressSanitizerOnAndroid>`__.
   -  Profiling with
      `Simpleperf <https://developer.android.google.cn/ndk/guides/simpleperf.html>`__.

   .. rubric:: Use the wrap shell script
      :name: using_the_wrap_shell_script

   **Note:**\  ``wrap.sh`` is only available for API level 27 and above.
   Using ``wrap.sh`` is easy:

   #. Compile a custom debuggable APK that packages the following:

      -  A shell script named ``wrap.sh``. See `Create the wrap shell script <#creating_the_wrap_shell_script>`__ and `Package wrap.sh <#packaging_wrapsh>`__ for more details.
      -  Any extra tools your shell script needs (such as your own ``strace``
         binary).

   #. Install the debuggable APK on a device.
   #. Launch the app.

   .. rubric:: Create the wrap shell script
      :name: creating_the_wrap_shell_script

   When you launch a debuggable APK that contains ``wrap.sh``, the system
   executes the script and passes the command to start the app as arguments. The
   script is responsible for starting the app, but can make any environment or
   argument changes. The script should follow `MirBSD Korn shell <https://www.mirbsd.org/mksh.htm>`__ (mksh) syntax.

   The following snippet shows how to write a simple ``wrap.sh`` file that just
   starts the app:

   .. code:: none

      #!/system/bin/sh
      exec "$@"

   .. rubric:: Malloc debug
      :name: malloc_debug

   To use `malloc debug <https://android.googlesource.com/platform/bionic/+/master/libc/malloc_debug/README.md>`__
   via ``wrap.sh``, you would include the following line:

   .. code:: none

      #!/system/bin/sh
      LIBC_DEBUG_MALLOC_OPTIONS=backtrace logwrapper "$@"

   .. rubric:: ASan
      :name: asan

   There's an example of how to do this for ASan in the `ASan documentation <#>`__.

   .. rubric:: Package wrap.sh
      :name: packaging_wrapsh

   To take advantage of ``wrap.sh``, your APK must be debuggable. Make sure that
   the ``android:debuggable="true"``\ setting is configured in the
   `<application> <https://developer.android.google.cn/guide/topics/manifest/application-element.html>`__
   element in your Android manifest, or if you are using Android Studio that
   you've configured a debug build in the
   `build.gradle <#>`__ file.

   It's also necessary to set
   `useLegacyPackaging <#>`__
   to ``true`` in your app's ``build.gradle`` file. In most cases, this option
   is set to ``false`` by default, so you might want to set this explicitly to
   ``true`` to avoid any surprises.

   You must package the ``wrap.sh`` script with the native libraries of the app.
   If your app does not contain native libraries, add the lib directory manually
   to your project directory. For each architecture that your app supports, you
   must provide a copy of the wrap shell script under that native library
   directory.

   The following example shows the file layout to support both the ARMv8 and
   x86-64 architectures:

   .. code:: none

      # App Directory
      |- AndroidManifest.xml
      |- …
      |- lib
         |- arm64-v8a
            |- ...
            |- wrap.sh
         |- x86_64
            |- ...
            |- wrap.sh

   Android Studio only packages ``.so`` files from the ``lib/`` directories, so
   if you're an Android Studio user, you'll need to place your ``wrap.sh`` files
   in the ``src/main/resources/lib/*`` directories instead, so that they'll be
   packaged correctly.

   Note that ``resources/lib/x86`` will be displayed in the UI as ``lib.x86``,
   but it should actually be a subdirectory:

   |Example of packaging wrap.sh in Android Studio|

   .. rubric:: Debug when using wrap.sh
      :name: debugging_when_using_wrapsh

   If you want to attach a debugger when using ``wrap.sh``, your shell script
   will need to manually enable debugging. How to do this has varied between
   releases, so this example shows how to add the appropriate options for all
   releases that support ``wrap.sh``:

   .. code:: prettyprint

      #!/system/bin/sh

      cmd=$1
      shift

      os_version=$(getprop ro.build.version.sdk)

      if [ "$os_version" -eq "27" ]; then
        cmd="$cmd -Xrunjdwp:transport=dt_android_adb,suspend=n,server=y -Xcompiler-option --debuggable $@"
      elif [ "$os_version" -eq "28" ]; then
        cmd="$cmd -XjdwpProvider:adbconnection -XjdwpOptions:suspend=n,server=y -Xcompiler-option --debuggable $@"
      else
        cmd="$cmd -XjdwpProvider:adbconnection -XjdwpOptions:suspend=n,server=y $@"
      fi

      exec $cmd

Last updated 2022-01-31 UTC.

.. |Example of packaging wrap.sh in Android Studio| image:: https://developer.android.google.cn/static/ndk/guides/images/wrap_sh_studio.png


/GLES layers
============

.. https://developer.android.google.cn/ndk/guides/rootless-debug-gles?hl=en

.. container:: devsite-article-body clearfix

   On devices running Android 10 (API level 29) and higher, OpenGL ES (GLES)
   layering is available. A debuggable app can load GLES layers from its APK,
   from its base directory, or from a selected layer APK.

   GLES layer usage is similar to `Vulkan validation layer <#>`__ usage.

   .. rubric:: Requirements
      :name: requirements

   GLES layers are supported only on GLES versions 2.0+.

   **Warning:**\  When layering is enabled, GLES 1.x exclusive functions
   continue to route to GLES 1.x drivers, but functions shared with GLES 2.0+,
   such as ``glGetString()``, are routed to 2.0+ drivers.

   .. rubric:: Layer initialization
      :name: egl-loader

   After populating standard entry points, the EGL Loader instantiates a GLES
   ``LayerLoader``. If debug layers are enabled, the ``LayerLoader`` scans
   specified directories for layers, like the `Vulkan loader <#>`__ does.

   If layering is enabled, the ``LayerLoader`` searches for and enumerates a
   specified layer list. The layer list is specified by colon separated
   filenames.

   The ``LayerLoader`` traverses the layers in the order you specify, so the
   first layer is directly below the application. For each layer, the
   ``LayerLoader`` tracks the ``AndroidGLESLayer_Initialize`` and
   ``AndroidGLESLayer_GetProcAddress`` entry points. The layers *must* provide
   these interfaces to be loadable.

   .. code:: prettyprint

      typedef void* (*PFNEGLGETNEXTLAYERPROCADDRESSPROC)(void*, const char*);
      void* AndroidGLESLayer_Initialize(void* layer_id, PFNEGLGETNEXTLAYERPROCADDRESSPROC get_next_layer_proc_address))

   ``AndroidGLESLayer_Initialize()`` provides an identifier for the layer to use
   (``layer_id``) and an entry point that can be called to look up functions
   below the layer. The entry point can be used as shown in the following code
   sample:

   .. code:: prettyprint

      const char* func = "eglFoo";
      void* gpa = get_next_layer_proc_address(layer_id, func);

   ``AndroidGLESLayer_GetProcAddress`` takes the address of the next call in the
   chain that the layer should call when finished. If there is only one layer,
   ``next`` points directly to the driver for most functions.

   .. code:: prettyprint

      typedef __eglMustCastToProperFunctionPointerType EGLFuncPointer;
      void* AndroidGLESLayer_GetProcAddress(const char *funcName, EGLFuncPointer next)

   For each layer that the GLES ``LayerLoader`` finds, it calls
   ``AndroidGLESLayer_Initialize``, walks ``libEGL``\ ’s function lists, and
   calls ``AndroidGLESLayer_GetProcAddress`` for all known functions. It is up
   to the layer to determine how to track the next address. If the layer
   intercepts a function, it tracks the function's address. If the layer doesn't
   intercept a function, ``AndroidGLESLayer_GetProcAddress`` returns the same
   function address it was passed. The ``LayerLoader`` then updates the function
   hook list to point to the layer's entry point.

   The layers aren't required to do anything with the information
   ``AndroidGLESLayer_Initialize`` and ``get_next_layer_proc_address`` provide,
   but providing the data makes it easier for existing layers, 
   like `Android GPU Inspector <#>`__ and `RenderDoc <https://renderdoc.org/>`__, to support
   Android. With that data, a layer can look up functions independently instead
   of waiting for calls to ``AndroidGLESLayer_GetProcAddress``. If the layers
   choose to initialize themselves before the loader has queried all the entry
   points, they must use ``get_next_layer_proc_address``. ``eglGetProcAddress``
   must be passed down the chain to the platform.

   .. rubric:: Place layers
      :name: place-layers

   The GLES ``LayerLoader`` searches for layers in the following locations, in
   order of priority:

   **1. System location for root**

   This requires root access

   .. code:: bash

      adb root
      adb disable-verity
      adb reboot
      adb root
      adb shell setenforce 0
      adb shell mkdir -p /data/local/debug/gles
      adb push <layer>.so /data/local/debug/gles/

   **2. Application's base directory**

   Target application must be debuggable, or you must have root access:

   .. code:: bash

      adb push libGLTrace.so /data/local/tmp
      adb shell run-as com.android.gl2jni cp /data/local/tmp/libGLTrace.so .
      adb shell run-as com.android.gl2jni ls | grep libGLTrace
      libGLTrace.so

   **3. External APK**

   Determine the ABI of your target application, then install an APK containing
   the layers you wish to load:

   .. code:: bash

      adb install --abi armeabi-v7a layers.apk

   **4. In the target application's APK**

   The following example shows how to place layers in the application APK:

   .. code:: none

      $ jar tf GLES_layers.apk
      lib/arm64-v8a/libGLES_glesLayer1.so
      lib/arm64-v8a/libGLES_glesLayer2.so
      lib/arm64-v8a/libGLES_glesLayer3.so
      lib/armeabi-v7a/libGLES_glesLayer1.so
      lib/armeabi-v7a/libGLES_glesLayer2.so
      lib/armeabi-v7a/libGLES_glesLayer3.so
      resources.arsc
      AndroidManifest.xml
      META-INF/CERT.SF
      META-INF/CERT.RSA
      META-INF/MANIFEST.MF

   .. rubric:: Enable layers
      :name: enable-layers

   You can enable GLES layers either per app or globally. Per-app settings
   persist across reboots, while global properties are cleared on reboot.

   Android's security model and policies differ significantly from other
   platforms. In order to load external layers, one of the following must be
   true:

   -  The target app's manifest file includes the following `meta-data element <#>`__ (only applies to
      apps that target Android 11 (API level 30) or higher):

      ``<meta-data android:name="com.android.graphics.injectLayers.enable" android:value="true" />``

      You should use this option to profile your application.

   -  The target app is debuggable. This option gives you more debug
      information, but might negatively affect the performance of your app.

   -  The target app is run on a userdebug build of the operating system which
      grants root access.

   To enable layers per app:

   .. code:: none

      # Enable layers
      adb shell settings put global enable_gpu_debug_layers 1

      # Specify target application
      adb shell settings put global gpu_debug_app <package_name>

      # Specify layer list (from top to bottom)
      # Layers are identified by their filenames, such as "libGLLayer.so"
      adb shell settings put global gpu_debug_layers_gles <layer1:layer2:layerN>

      # Specify packages to search for layers
      adb shell settings put global gpu_debug_layer_app <package1:package2:packageN>

   To disable layers per app:

   .. code:: none

      # Delete the global setting that enables layers
      adb shell settings delete global enable_gpu_debug_layers

      # Delete the global setting that selects target application
      adb shell settings delete global gpu_debug_app

      # Delete the global setting that specifies layer list
      adb shell settings delete global gpu_debug_layers_gles

      # Delete the global setting that specifies layer packages
      adb shell settings delete global gpu_debug_layer_app

   To enable layers globally:

   .. code:: none

      # This attempts to load layers for all applications, including native
      # executables
      adb shell setprop debug.gles.layers <layer1:layer2:layerN>

   .. rubric:: Create a layer
      :name: create-layer

   Layers must expose the following two functions described in `EGL Loader initialization <#egl-loader>`__:

   .. code:: prettyprint

      AndroidGLESLayer_Initialize
      AndroidGLESLayer_GetProcAddress

   .. rubric:: Passive layers
      :name: passive-layers

   For a layer that only intercepts a handful of functions, a passively
   initialized layer is optimal. The passively initialized layer waits for GLES
   ``LayerLoader`` to initialize the function it needs.

   The following code sample shows how to create a passive layer.

   .. code:: prettyprint

      namespace {

      std::unordered_map<std::string, EGLFuncPointer> funcMap;

      EGLAPI EGLBoolean EGLAPIENTRY glesLayer_eglChooseConfig (
        EGLDisplay dpy, const EGLint *attrib_list, EGLConfig *configs, EGLint config_size,
        EGLint *num_config) {

        EGLFuncPointer entry = funcMap["eglChooseConfig"];

        typedef EGLBoolean (*PFNEGLCHOOSECONFIGPROC)(
          EGLDisplay, const EGLint*, EGLConfig*, EGLint, EGLint*);

        PFNEGLCHOOSECONFIGPROC next = reinterpret_cast<PFNEGLCHOOSECONFIGPROC>(entry);

        return next(dpy, attrib_list, configs, config_size, num_config);
      }

      EGLAPI EGLFuncPointer EGLAPIENTRY eglGPA(const char* funcName) {

        #define GETPROCADDR(func) if(!strcmp(funcName, #func)) { \
          return (EGLFuncPointer)glesLayer_##func; }

        GETPROCADDR(eglChooseConfig);

        // Don't return anything for unrecognized functions
        return nullptr;
      }

      EGLAPI void EGLAPIENTRY glesLayer_InitializeLayer(
        void* layer_id, PFNEGLGETNEXTLAYERPROCADDRESSPROC get_next_layer_proc_address) {
           // This function is purposefully empty, since this layer does not proactively
           // look up any entrypoints
        }

      EGLAPI EGLFuncPointer EGLAPIENTRY glesLayer_GetLayerProcAddress(
        const char* funcName, EGLFuncPointer next) {
        EGLFuncPointer entry = eglGPA(funcName);
        if (entry != nullptr) {
          funcMap[std::string(funcName)] = next;
          return entry;
        }
        return next;
      }

      }  // namespace

      extern "C" {
        __attribute((visibility("default"))) EGLAPI void AndroidGLESLayer_Initialize(
          void* layer_id, PFNEGLGETNEXTLAYERPROCADDRESSPROC get_next_layer_proc_address) {
          return (void)glesLayer_InitializeLayer(layer_id, get_next_layer_proc_address);
        }
        __attribute((visibility("default"))) EGLAPI void* AndroidGLESLayer_GetProcAddress(
          const char *funcName, EGLFuncPointer next) {
          return (void*)glesLayer_GetLayerProcAddress(funcName, next);
        }
      }

   .. rubric:: Active layers
      :name: active-layers

   For more formalized layers that need to fully initialize up front, or layers
   that need to look up extensions not known to the EGL Loader, active layer
   initialization is required. The layer uses the
   ``get_next_layer_proc_address`` that ``AndroidGLESLayer_Initialize`` provides
   to look up a function. The layer must still respond to
   ``AndroidGLESLayer_GetProcAddress`` requests from the loader so the platform
   knows where to route calls. The following code sample shows how to create an
   active layer.

   .. code:: prettyprint

      namespace {

      std::unordered_map<std::string, EGLFuncPointer> funcMap;

      EGLAPI EGLBoolean EGLAPIENTRY glesLayer_eglChooseConfig (
        EGLDisplay dpy, const EGLint *attrib_list, EGLConfig *configs, EGLint config_size,
        EGLint *num_config) {

        EGLFuncPointer entry = funcMap["eglChooseConfig"];

        typedef EGLBoolean (*PFNEGLCHOOSECONFIGPROC)(
          EGLDisplay, const EGLint*, EGLConfig*, EGLint, EGLint*);

        PFNEGLCHOOSECONFIGPROC next = reinterpret_cast<PFNEGLCHOOSECONFIGPROC>(entry);

        return next(dpy, attrib_list, configs, config_size, num_config);
      }

      EGLAPI EGLFuncPointer EGLAPIENTRY eglGPA(const char* funcName) {

        #define GETPROCADDR(func) if(!strcmp(funcName, #func)) { \
          return (EGLFuncPointer)glesLayer_##func; }

        GETPROCADDR(eglChooseConfig);

        // Don't return anything for unrecognized functions
        return nullptr;
      }

      EGLAPI void EGLAPIENTRY glesLayer_InitializeLayer(
        void* layer_id, PFNEGLGETNEXTLAYERPROCADDRESSPROC get_next_layer_proc_address) {

        // Note: This is where the layer would populate its function map with all the
        // functions it cares about
        const char* func = “eglChooseConfig”;
        funcMap[func] = get_next_layer_proc_address(layer_id, func);
      }

      EGLAPI EGLFuncPointer EGLAPIENTRY glesLayer_GetLayerProcAddress(
        const char* funcName, EGLFuncPointer next) {
        EGLFuncPointer entry = eglGPA(funcName);
        if (entry != nullptr) {
          return entry;
        }

        return next;
      }

      }  // namespace

      extern "C" {
        __attribute((visibility("default"))) EGLAPI void AndroidGLESLayer_Initialize(
          void* layer_id, PFNEGLGETNEXTLAYERPROCADDRESSPROC get_next_layer_proc_address) {
          return (void)glesLayer_InitializeLayer(layer_id, get_next_layer_proc_address);
        }
        __attribute((visibility("default"))) EGLAPI void* AndroidGLESLayer_GetProcAddress(
          const char *funcName, EGLFuncPointer next) {
          return (void*)glesLayer_GetLayerProcAddress(funcName, next);
        }
      }

Last updated 2024-05-03 UTC.

/Intro: Memory error debugging and mitigation
=============================================

.. https://developer.android.google.cn/ndk/guides/memory-debug?hl=en

.. container:: devsite-article-body clearfix

   Android supports multiple tools for debugging memory errors. There are
   tradeoffs to each, so read below to decide which is best for your use case.
   This doc gives you an overview of the tools available so you can decide which
   to investigate further, but it aims to be succinct, so read the tool-specific
   docs for details.

   .. rubric:: tl;dr
      :name: tldr

   -  Use a `memory safe language <#memory-safe-languages>`__ whenever possible
      to make memory errors impossible
   -  Always use `PAC/BTI <#pacbti>`__ to mitigate ROP/JOP attacks
   -  Always use `GWP-ASan <#gwp-asan>`__ for detecting rare memory errors in
      production
   -  Use `HWASan <#hwasan>`__ to detect memory errors during testing
   -  `MTE <#mte>`__-capable devices are not generally available in 2023, but
      use it if you're able to detect errors in production
   -  Use `ASan <#asan>`__ during testing only as a last resort

   .. rubric:: Memory safe languages
      :name: memory-safe-languages

   A memory safe language is the only way to entirely avoid and mitigate memory
   errors. The other tools on this page can help you make your memory unsafe
   code safer and more reliable, but using a memory safe language eliminates the
   entire class of problems.

   The officially supported memory safe languages for Android are Java and
   Kotlin. Most Android applications are easier to develop in one of those
   languages.

   That said, there are app developers shipping code written in Rust, and if
   you're reading this page you probably do have a good reason to need native
   code (portability, performance, or both). Rust is the best choice for memory
   safe native code on Android. The NDK team is not necessarily able to help you
   with the problems you face if you go that route, but we are interested in
   `hearing about them <https://github.com/android/ndk/discussions>`__!

   .. rubric:: PAC/BTI
      :name: pacbti

   `Pointer Authentication and Branch Target Identification <#>`__, also
   known as PAC/BTI, are mitigation tools suitable for use in production. Though
   separate technologies, they are controlled by the same compiler flag so are
   always used together.

   These features are backward compatible with devices that don't support them
   because the new instructions used are no-ops on earlier devices. It's also
   necessary to have a new enough kernel and a new enough version of the OS.
   Looking for ``paca`` and ``bti`` in ``/proc/cpuinfo`` shows you whether you
   have new enough hardware and a new enough kernel. Android 12 (API 31) has the
   necessary userspace support.

   **Key Point:**\  Good mitigation requires defense in depth. Consider
   combining PAC/BTI with `MTE <#mte>`__.
   Pros:

   -  Can be enabled in all builds without causing problems on older devices or
      kernels (but make sure you've actually tested on a device/kernel/OS
      combination that *does* support it!)

   Cons:

   -  Only available for 64-bit apps
   -  Doesn't mitigate errors on devices that don't support it
   -  1% code size overhead

   .. rubric:: GWP-Asan
      :name: gwp-asan

   `GWP-ASan <#>`__ can be used to detect memory errors in
   the field, but the sampling rate is too low to be an effective mitigation.

   Pros:

   -  No significant CPU or memory overhead
   -  Trivial to deploy: does not require rebuilding native code
   -  Works for 32-bit apps

   Cons:

   -  Low sampling rate requires a large number of users to find bugs
      effectively
   -  Only detects heap errors, not stack errors

   .. rubric:: HWASan
      :name: hwasan

   `Hardware address sanitizer <#>`__, also known as HWASan, is
   the best fit for catching memory errors during testing. It's most useful when
   used with automated testing, especially if you're running fuzz tests, but
   depending on your app's performance needs it may also be usable on high end
   phones in a dogfood setting.

   Pros:

   -  No false positives
   -  Detects additional classes of errors that ASan cannot (stack use after
      return)
   -  Lower rate of false negatives than MTE (1 in 256 vs 1 in 16)
   -  Lower memory overhead than ASan, its closest alternative

   Cons:

   -  Significant CPU (~100%), code size (~50%), and memory (10% - 35%) overhead
   -  Until API 34 and NDK r26, requires flashing a HWASan compatible image
   -  Only works on 64-bit apps

   .. rubric:: MTE
      :name: mte

   `Memory tagging extension <#>`__, also known as MTE, is a
   lower- cost alternative to HWASan. In addition to debugging and testing
   capabilities, it can be used to detect and mitigate memory corruption in
   production. If you have `the hardware to test MTE builds <#>`__, you should enable it.

   Pros:

   -  Low enough overhead to be tolerable in production for many apps
   -  No false positives
   -  Does not require rebuilding code to detect heap errors (but does to detect
      stack errors)

   Cons:

   -  There are no commercially available devices with MTE enabled by default in
      2024, but Arm's documentation explains `how to enable MTE for testing on Pixel 8/Pixel 8
      Pro <https://learn.arm.com/learning-paths/smartphones-and-mobile/mte_on_pixel8/>`__.
   -  False negative rate of 1 in 16 vs HWASan's 1 in 256
   -  Only available for 64-bit apps
   -  Requires building separate libraries for targeting both MTE-enabled and
      non- MTE enabled devices

   .. rubric:: ASan
      :name: asan

   `Address sanitizer <#>`__, also known as ASan, is the oldest
   and most widely available of the tools available. It is useful for catching
   memory errors during testing and debugging issues that only affect old
   devices where none of the other tools are available. **Whenever possible,
   prefer HWASan.**

   **Deprecated:**\  ASan has been superseded by the other tools on this page,
   so is no longer receiving active development or support. ASan should only be
   used when HWASan is not an option.
   Pros:

   -  Widely available. May work on devices as old as KitKat
   -  No false positives or negatives when used correctly

   Cons:

   -  Difficult to build and package correctly
   -  Highest overhead of all options: ~100% CPU, ~50% code size, ~100% memory
      use
   -  No longer supported
   -  Has known bugs that won't be fixed

Last updated 2024-01-20 UTC.

/Address Sanitizer
==================

.. https://developer.android.google.cn/ndk/guides/asan?hl=en

.. container:: devsite-article-body clearfix

   **Note:**\  This document covers running Android applications built with the
   NDK under `Address Sanitizer <https://github.com/google/sanitizers/wiki/AddressSanitizer>`__.
   For information about using `Address Sanitizer <https://github.com/google/sanitizers/wiki/AddressSanitizer>`__ on
   Android platform components, see the `AOSP documentation <https://source.android.google.cn/devices/tech/debug/asan.html>`__.
   **Deprecated:**\  As of 2023, ASan is unsupported. It is recommended to use
   `HWASan <#>`__ instead. HWASan can be used on ARM64 devices
   running Android 14 (API level 34) or newer; or on Pixel devices running
   Android 10 (API level 29) by flashing a `special system image <#>`__. ASan may still be used but might have
   bugs.
   **Important:**\  Asan is one of many tools available for memory debugging and
   mitigation. See `Memory error debugging and mitigation <#>`__ for an overview of all the tools.
   The Android NDK supports `Address Sanitizer <https://github.com/google/sanitizers/wiki/AddressSanitizer>`__
   (also known as ASan) beginning with API level 27 (Android O MR 1).

   ASan is a fast compiler-based tool for detecting memory bugs in native code.
   ASan detects:

   -  Stack and heap buffer overflow/underflow
   -  Heap use after free
   -  Stack use outside scope
   -  Double free/wild free

   ASan's CPU overhead is roughly 2x, code size overhead is between 50% and 2x,
   and the memory overhead is large (dependent on your allocation patterns, but
   on the order of 2x).

   .. rubric:: Sample App
      :name: sample_app

   A `sample app <https://github.com/android/ndk-samples/tree/main/sanitizers>`__ shows
   how to configure a `build variant <#>`__ for asan.

   .. rubric:: Build
      :name: building

   To build your app's native (JNI) code with `Address Sanitizer <https://github.com/google/sanitizers/wiki/AddressSanitizer>`__, do
   the following:

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: ndk-build
            :name: ndk-build

         In your Application.mk:

         .. code:: prettyprint

            APP_STL := c++_shared # Or system, or none.
            APP_CFLAGS := -fsanitize=address -fno-omit-frame-pointer
            APP_LDFLAGS := -fsanitize=address

         For each module in your Android.mk:

         .. code:: prettyprint

            LOCAL_ARM_MODE := arm

      .. container:: section

         .. rubric:: CMake
            :name: cmake

         In your module's build.gradle:

         .. code:: prettyprint

            android {
                defaultConfig {
                    externalNativeBuild {
                        cmake {
                            // Can also use system or none as ANDROID_STL.
                            arguments "-DANDROID_ARM_MODE=arm", "-DANDROID_STL=c++_shared"
                        }
                    }
                }
            }

         For each target in your CMakeLists.txt:

         .. code:: prettyprint

            target_compile_options(${TARGET} PUBLIC -fsanitize=address -fno-omit-frame-pointer)
            set_target_properties(${TARGET} PROPERTIES LINK_FLAGS -fsanitize=address)

   **Caution:**\  ASan is currently incompatible with C++ exception handling
   when using ``libc++_static``. Apps using ``libc++_shared`` or not using
   exception handling are either unaffected or have workarounds available. See
   `Issue 988 <https://github.com/android-ndk/ndk/issues/988>`__ for more
   details.

   .. rubric:: Run
      :name: running

   Beginning with Android O MR1 (API level 27) an application can provide a
   `wrap shell script <#>`__ that can wrap or replace the
   application process. This allows a debuggable application to customize their
   application startup, which enables using ASan on production devices.

   **Note:**\  The following instructions describe how to use ASan with an
   Android Studio project. For a non-Android Studio project, refer to the `wrap shell script <#>`__ documentation.

   #. Add ``android:debuggable`` to the application manifest.

   #. Set
      `useLegacyPackaging <#>`__
      to ``true`` in your app's ``build.gradle`` file. See the `wrap shell script <#>`__ guide for more information.

   #. Add the ASan runtime library to your app module's ``jniLibs``.

   #. Add ``wrap.sh`` files with the following contents to each directory in
      your ``src/main/resources/lib`` directory.

      .. code:: prettyprint

         #!/system/bin/sh
         HERE="$(cd "$(dirname "$0")" && pwd)"
         export ASAN_OPTIONS=log_to_syslog=false,allow_user_segv_handler=1
         ASAN_LIB=$(ls $HERE/libclang_rt.asan-*-android.so)
         if [ -f "$HERE/libc++_shared.so" ]; then
             # Workaround for https://github.com/android-ndk/ndk/issues/988.
             export LD_PRELOAD="$ASAN_LIB $HERE/libc++_shared.so"
         else
             export LD_PRELOAD="$ASAN_LIB"
         fi
         "$@"

   **Note:**\  The NDK contains a recommended wrap.sh file for ASan
   `here <https://android.googlesource.com/platform/ndk/+/refs/heads/master/wrap.sh/asan.sh>`__.
   Assuming your project's application module is named ``app``, your final
   directory structure should include the following:

   .. code:: prettyprint

      <project root>
      └── app
          └── src
              └── main
                  ├── jniLibs
                  │   ├── arm64-v8a
                  │   │   └── libclang_rt.asan-aarch64-android.so
                  │   ├── armeabi-v7a
                  │   │   └── libclang_rt.asan-arm-android.so
                  │   ├── x86
                  │   │   └── libclang_rt.asan-i686-android.so
                  │   └── x86_64
                  │       └── libclang_rt.asan-x86_64-android.so
                  └── resources
                      └── lib
                          ├── arm64-v8a
                          │   └── wrap.sh
                          ├── armeabi-v7a
                          │   └── wrap.sh
                          ├── x86
                          │   └── wrap.sh
                          └── x86_64
                              └── wrap.sh

   .. rubric:: Stack traces
      :name: stack-traces

   `Address Sanitizer <https://github.com/google/sanitizers/wiki/AddressSanitizer>`__
   needs to unwind the stack on every ``malloc``/``realloc``/``free`` call.
   There are two options here:

   #. A "fast" frame pointer-based unwinder. This is what is used by following
      the instructions in the `building section <#building>`__.

   #. A "slow" CFI unwinder. In this mode ASan uses ``_Unwind_Backtrace``. It
      requires only ``-funwind-tables``, which is normally enabled by default.

      **Caution:**\  the "slow" unwinder is **slow** (10x or more, depending on
      how often you call ``malloc``/``free``).

   The fast unwinder is the default for malloc/realloc/free. The slow unwinder
   is the default for fatal stack traces. The slow unwinder can be enabled for
   all stack traces by adding ``fast_unwind_on_malloc=0`` to the
   ``ASAN_OPTIONS`` variable in your wrap.sh.

Last updated 2023-08-03 UTC.

/HWAddress Sanitizer
====================

.. https://developer.android.google.cn/ndk/guides/hwasan?hl=en

.. container:: devsite-article-body clearfix

   **Note:**\  This document covers running Android applications built with the
   NDK under `HWAddress Sanitizer <https://clang.llvm.org/docs/HardwareAssistedAddressSanitizerDesign.html>`__.
   For information about using `HWAddress Sanitizer <https://clang.llvm.org/docs/HardwareAssistedAddressSanitizerDesign.html>`__
   on Android platform components, see the `AOSP documentation <https://source.android.google.cn/devices/tech/debug/hwasan.html>`__.
   The Android NDK supports `HWAddress Sanitizer <https://clang.llvm.org/docs/HardwareAssistedAddressSanitizerDesign.html>`__,
   also known as HWASan, beginning with NDK r21 and Android 10 (API level 29).
   HWASan is only available on 64-bit Arm devices.

   **Important:**\  HWAsan is one of many tools available for memory debugging
   and mitigation. See `Memory error debugging and mitigation <#>`__ for an overview of all the tools.
   HWASan is a memory error detection tool similar to ASan. Compared to classic
   ASan, HWASan has:

   -  Similar CPU overhead (~2x)
   -  Similar code size overhead (40 – 50%)
   -  Much smaller RAM overhead (10% – 35%)

   HWASan detects the same set of bugs as ASan:

   -  Stack and heap buffer overflow or underflow
   -  Heap use after free
   -  Stack use outside scope
   -  Double free or wild free

   Additionally, HWASan also detects:

   -  Stack use after return

   .. rubric:: Sample App
      :name: sample_app

   A `sample app <https://github.com/android/ndk-samples/tree/main/sanitizers>`__ shows
   how to configure a `build variant <#>`__ for
   hwasan.

   .. rubric:: Build
      :name: build

   **Important:**\  Make sure you are using an up-to-date NDK to build your
   code.
   To build your app's native (JNI) code with `HWAddress Sanitizer <https://clang.llvm.org/docs/HardwareAssistedAddressSanitizerDesign.html>`__,
   do the following:

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: ndk-build
            :name: ndk-build

         In your ``Application.mk`` file:

         .. code:: prettyprint

            APP_STL := c++_shared # Or system, or none, but not c++_static.
            APP_CFLAGS := -fsanitize=hwaddress -fno-omit-frame-pointer
            APP_LDFLAGS := -fsanitize=hwaddress

      .. container:: section

         .. rubric:: CMake
            :name: cmake

         In your module's ``build.gradle`` file:

         .. code:: prettyprint

            android {
                defaultConfig {
                    externalNativeBuild {
                        cmake {
                            # Can also use system or none as ANDROID_STL, but not c++_static.
                            arguments "-DANDROID_STL=c++_shared"
                        }
                    }
                }
            }

         For each target in your CMakeLists.txt:

         .. code:: prettyprint

            target_compile_options(${TARGET} PUBLIC -fsanitize=hwaddress -fno-omit-frame-pointer)
            target_link_options(${TARGET} PUBLIC -fsanitize=hwaddress)

   **Note:**\  A shared library STL is required because implementations of the
   operators ``new`` and ``delete`` in the STL are usually built without frame
   pointers. HWASan brings its own implementation, but it can't be used if the
   STL is linked statically into the application.

   .. rubric:: Android 14 or newer: add wrap.sh
      :name: wrapsh

   If you are running Android 14 or newer, you can use a `wrap.sh script <#>`__ to run your **debuggable** app on any
   Android-powered device. You can skip this step if you chose to follow the
   steps in the `Setup Instructions <#setup>`__.

   Follow the instructions to `package a wrap.sh script <#>`__ to add the following
   wrap.sh script for ``arm64-v8a``.

   .. code:: prettyprint

      #!/system/bin/sh
      LD_HWASAN=1 exec "$@"

   .. rubric:: Run
      :name: run

   If you're running on an Android version older than 14, or didn't add a
   wrap.sh script, follow the `Setup Instructions <#setup>`__ before running
   your app.

   Run the app as usual. When a memory error is detected, an app crashes with
   SIGABRT and prints a detailed message to logcat. A copy of the message can be
   found in a file under ``/data/tombstones`` and looks like this:

   .. code:: devsite-click-to-copy

      ERROR: HWAddressSanitizer: tag-mismatch on address 0x0042a0826510 at pc 0x007b24d90a0c
      WRITE of size 1 at 0x0042a0826510 tags: 32/3d (ptr/mem) in thread T0
          #0 0x7b24d90a08  (/data/app/com.example.hellohwasan-eRpO2UhYylZaW0P_E0z7vA==/lib/arm64/libnative-lib.so+0x2a08)
          #1 0x7b8f1e4ccc  (/apex/com.android.art/lib64/libart.so+0x198ccc)
          #2 0x7b8f1db364  (/apex/com.android.art/lib64/libart.so+0x18f364)
          #3 0x7b8f2ad8d4  (/apex/com.android.art/lib64/libart.so+0x2618d4)

      0x0042a0826510 is located 0 bytes to the right of 16-byte region [0x0042a0826500,0x0042a0826510)
      allocated here:
          #0 0x7b92a322bc  (/apex/com.android.runtime/lib64/bionic/libclang_rt.hwasan-aarch64-android.so+0x212bc)
          #1 0x7b24d909e0  (/data/app/com.example.hellohwasan-eRpO2UhYylZaW0P_E0z7vA==/lib/arm64/libnative-lib.so+0x29e0)
          #2 0x7b8f1e4ccc  (/apex/com.android.art/lib64/libart.so+0x198ccc)

   The message may be followed by additional debugging information, including
   the list of live threads in the application, tags of nearby memory
   allocations and CPU register values.

   See `Understanding HWASan reports <https://source.android.google.cn/docs/security/memory-safety/hwasan-reports>`__
   for more information on HWASan error messages.

   .. rubric:: Building command-line executables
      :name: executables

   **Important:**\  Make sure you are using the newest NDK. This will fail for
   NDK before r26b.
   You can build and run executables instrumented with HWASan on Android 14 and
   newer. You can use the same configuration as described in `Build <#build>`__
   for ndk-build or CMake for your executables. Push the executables to a device
   running Android 14 or newer and run it as normal using the shell.

   If you are using libc++, make sure you are using the shared STL and push it
   to the device and set ``LD_LIBRARY_PATH`` to the directory containing it when
   running your binary.

   If you aren't using Gradle, see the NDK documentation to learn how to build
   from the command line with `CMake <#>`__ and
   `ndk-build <#>`__.

   .. rubric:: Android 13 or earlier: Setup
      :name: setup

   If your device runs Android 14 or newer, you can skip this step and follow
   the `instructions for using wrap.sh <#wrapsh>`__ in the `Build <#build>`__
   section below. You can also choose to follow this section and skip the
   instructions for using wrap.sh below.

   Before Android 14, HWASan applications need a HWASan build of Android to run.
   You can flash prebuilt HWASan images to supported Pixel devices. The builds
   are available on
   `ci.android.com <https://ci.android.com/builds/branches/git_aosp-main-with-phones-throttled/grid>`__,
   where you can click the square for the exact build you want to get a **Flash
   Build** link. This requires that you know the `codename for your phone <https://source.android.google.cn/setup/build/running>`__.

   |Flash a device build|

   It may be easier to instead go straight to
   `flash.android.com <https://flash.android.com>`__ because there the flow
   *starts* with detecting your device and only shows you builds you can use.
   The following images illustrate the setup flow in this tool.

   Enable developer mode on your device and connect it to your computer using a
   USB cable. Click **Add new device**, select your device from the dialog, and
   click **Connect**.

   |Detect a device to flash| |Select the device to connect to|

   .. container::

   After your device is connected, click it to configure the build. In the
   **Select a build ID** box, select the ``aosp-master-with-phones-throttled``
   branch to automatically choose the correct image for the device you have
   connected.

   |Select the device to flash| |Confirm flash options and flash the device|

   .. container::

   Click **Install** to flash your device.

   There's more detail about the necessary set up in the `Android Flash Tool documentation <https://source.android.google.cn/setup/contribute/flash>`__.
   Alternatively, you can check the `AOSP documentation <https://source.android.google.cn/devices/tech/debug/hwasan.html>`__
   for instructions for building a HWASan image from source.

Last updated 2024-03-21 UTC.

.. |Flash a device build| image:: https://developer.android.google.cn/static/ndk/guides/images/select-build-ci.png
   :class: screenshot
   :width: 600px
.. |Detect a device to flash| image:: https://developer.android.google.cn/static/ndk/guides/images/flash-tool-step1.png
   :class: screenshot attempt-left
   :width: 400px
.. |Select the device to connect to| image:: https://developer.android.google.cn/static/ndk/guides/images/flash-tool-step2.png
   :class: screenshot attempt-right
   :width: 400px
.. |Select the device to flash| image:: https://developer.android.google.cn/static/ndk/guides/images/flash-tool-step3.png
   :class: screenshot attempt-left
   :width: 400px
.. |Confirm flash options and flash the device| image:: https://developer.android.google.cn/static/ndk/guides/images/flash-tool-step4.png
   :class: screenshot attempt-right
   :width: 400px

/Arm Memory Tagging Extension
=============================

.. https://developer.android.google.cn/ndk/guides/arm-mte?hl=en

.. container:: devsite-article-body clearfix

   **Note:**\  This document covers running Android applications under MTE. For
   information about using MTE for Android platform development, see the 
   `AOSP documentation <https://source.android.google.cn/docs/security/test/memory-safety/arm-mte>`__.

   **Important:**\  MTE is one of many tools available for memory debugging and
   mitigation. See `Memory error debugging and mitigation <#>`__ for an overview of all the tools.

   .. rubric:: Why MTE?
      :name: why

   Memory safety bugs, which are errors in handling memory in native programming
   languages, are common code issues. They lead to security vulnerabilities as
   well as stability problems.

   Armv9 introduced the Arm Memory Tagging Extension (MTE), a hardware extension
   that allows you to catch use-after-free and buffer-overflow bugs in your
   native code.

   .. rubric:: Check for support
      :name: check

   Starting from Android 13, select devices have support for MTE. To check
   whether your device is running with MTE enabled, run the following command:

   .. code:: bash

      adb shell grep mte /proc/cpuinfo

   If the result is ``Features : [...] mte``, your device is running with MTE
   enabled.

   Some devices don't enable MTE by default, but allow developers to reboot with
   MTE enabled. This is an experimental configuration that is not recommended
   for normal use as it might decrease device performance or stability, but can
   be useful for app development. To access this mode, navigate to `Developer Options <#>`__ > Memory Tagging Extension in your
   Settings App. If this option is not present, your device does not support
   enabling MTE this way.

   .. rubric:: MTE operating modes
      :name: modes

   MTE supports two modes: SYNC and ASYNC. SYNC mode provides better diagnostic
   information and thus is more suited for development purposes, while ASYNC
   mode has high performance that allows it to be enabled for released apps.

   .. rubric:: Synchronous mode (SYNC)
      :name: sync

   This mode is optimized for debuggability over performance and can be used as
   a precise bug detection tool, when higher performance overhead is acceptable.
   When enabled, MTE SYNC also acts as a security mitigation.

   On a tag mismatch, the processor terminates the process on the offending load
   or store instruction with SIGSEGV (with si_code SEGV_MTESERR) and full
   information about the memory access and the faulting address.

   This mode is useful during testing as an faster alternative to
   `HWASan <#>`__ that does not require you to recompile your
   code, or in production, when the your app represents a vulnerable attack
   surface. In addition, when ASYNC mode (described below) has found a bug, an
   accurate bug report can be obtained by using the runtime APIs to switch
   execution to SYNC mode.

   Moreover, when running in SYNC mode, the Android allocator records the stack
   trace of every allocation and deallocation and uses them to provide better
   error reports that include explanation of a memory error, such as
   use-after-free or buffer-overflow, and the stack traces of the relevant
   memory events (see `Understanding MTE reports <https://source.android.google.cn/docs/security/test/memory-safety/mte-reports>`__
   for more details). Such reports provide more contextual information and make
   bugs easier to trace and fix than in ASYNC mode.

   .. rubric:: Asynchronous mode (ASYNC)
      :name: async

   This mode is optimized for performance over accuracy of bug reports and can
   be used for low-overhead detection of memory safety bugs. On a tag mismatch,
   the processor continues execution until the nearest kernel entry (such as a
   syscall or timer interrupt), where it terminates the process with SIGSEGV
   (code SEGV_MTEAERR) without recording the faulting address or memory access.

   This mode is useful for mitigating memory-safety vulnerabilities in
   production on well tested codebases where the density of memory safety bugs
   is known to be low, which is achieved by using the SYNC mode during testing.

   .. rubric:: Enable MTE
      :name: enable

   .. rubric:: For a single device
      :name: development

   For experimentation, app compatibility changes can be used to set the default
   value of ``memtagMode`` attribute for an application that does not specify
   any value in the manifest (or specifies ``"default"``).

   These can be found under System > Advanced > Developer options > App
   Compatibility Changes in the global setting menu. Setting
   ``NATIVE_MEMTAG_ASYNC`` or ``NATIVE_MEMTAG_SYNC`` enables MTE for a
   particular application.

   Alternatively, this can be set using the ``am`` command as follows:

   -  For SYNC mode:
      ``$ adb shell am compat enable NATIVE_MEMTAG_SYNC my.app.name``
   -  For ASYNC mode:
      ``$ adb shell am compat enable NATIVE_MEMTAG_ASYNC my.app.name``

   .. rubric:: In Gradle
      :name: gradle

   You can enable MTE for all debug builds of your Gradle project by putting

   .. code:: prettyprint

      <?xml version="1.0" encoding="utf-8"?>
      <manifest xmlns:android="http://schemas.android.com/apk/res/android"
          xmlns:tools="http://schemas.android.com/tools">

          <application android:memtagMode="sync" tools:replace="android:memtagMode"/>
      </manifest>

   into ``app/src/debug/AndroidManifest.xml``. This will override your
   manifest's ``memtagMode`` with sync for debug builds.

   Alternatively, you can enable MTE for all builds of a custom buildType. To do
   so, `create your own buildType <#>`__ and put
   the XML into ``app/src/<name of buildType>/AndroidManifest.xml``.

   .. rubric:: For an APK on any capable device
      :name: production

   MTE is disabled by default. Apps that want to use MTE can do so by setting
   ``android:memtagMode`` under the ``<application>`` or ``<process>`` tag in
   the ``AndroidManifest.xml``.

   **Warning:**\  Applications that enable MTE should be thoroughly tested on an
   MTE-compatible device before being shipped to the Play Store. Failure to do
   so may lead to critical bugs being discovered only on MTE-capable devices,
   which may harm usability of the app.
   .. code:: prettyprint

      android:memtagMode=(off|default|sync|async)

   When set on the ``<application>`` tag, the attribute affects all processes
   used by the application, and can be overridden for individual processes by
   setting the ``<process>`` tag.

   .. rubric:: Run your app
      :name: run

   Having enabled MTE, use and test your app as normal. If a memory safety issue
   is detected, your app crashes with a tombstone that looks similar to this
   (note the ``SIGSEGV`` with ``SEGV_MTESERR`` for SYNC or ``SEGV_MTEAERR`` for
   ASYNC):

   .. code:: prettyprint

      pid: 13935, tid: 13935, name: sanitizer-statu  >>> sanitizer-status <<<
      uid: 0
      tagged_addr_ctrl: 000000000007fff3
      signal 11 (SIGSEGV), code 9 (SEGV_MTESERR), fault addr 0x800007ae92853a0
      Cause: [MTE]: Use After Free, 0 bytes into a 32-byte allocation at 0x7ae92853a0
      x0  0000007cd94227cc  x1  0000007cd94227cc  x2  ffffffffffffffd0  x3  0000007fe81919c0
      x4  0000007fe8191a10  x5  0000000000000004  x6  0000005400000051  x7  0000008700000021
      x8  0800007ae92853a0  x9  0000000000000000  x10 0000007ae9285000  x11 0000000000000030
      x12 000000000000000d  x13 0000007cd941c858  x14 0000000000000054  x15 0000000000000000
      x16 0000007cd940c0c8  x17 0000007cd93a1030  x18 0000007cdcac6000  x19 0000007fe8191c78
      x20 0000005800eee5c4  x21 0000007fe8191c90  x22 0000000000000002  x23 0000000000000000
      x24 0000000000000000  x25 0000000000000000  x26 0000000000000000  x27 0000000000000000
      x28 0000000000000000  x29 0000007fe8191b70
      lr  0000005800eee0bc  sp  0000007fe8191b60  pc  0000005800eee0c0  pst 0000000060001000

      backtrace:
            #00 pc 00000000000010c0  /system/bin/sanitizer-status (test_crash_malloc_uaf()+40) (BuildId: 953fc93301472d0b72709b2b9a9f6f30)
            #01 pc 00000000000014a4  /system/bin/sanitizer-status (test(void (*)())+132) (BuildId: 953fc93301472d0b72709b2b9a9f6f30)
            #02 pc 00000000000019cc  /system/bin/sanitizer-status (main+1032) (BuildId: 953fc93301472d0b72709b2b9a9f6f30)
            #03 pc 00000000000487d8  /apex/com.android.runtime/lib64/bionic/libc.so (__libc_init+96) (BuildId: 6ab39e35a2fae7efbe9a04e9bbb14331)

      deallocated by thread 13935:
            #00 pc 000000000004643c  /apex/com.android.runtime/lib64/bionic/libc.so (scudo::Allocator<scudo::AndroidConfig, &(scudo_malloc_postinit)>::quarantineOrDeallocateChunk(scudo::Options, void*, scudo::Chunk::UnpackedHeader*, unsigned long)+688) (BuildId: 6ab39e35a2fae7efbe9a04e9bbb14331)
            #01 pc 00000000000421e4  /apex/com.android.runtime/lib64/bionic/libc.so (scudo::Allocator<scudo::AndroidConfig, &(scudo_malloc_postinit)>::deallocate(void*, scudo::Chunk::Origin, unsigned long, unsigned long)+212) (BuildId: 6ab39e35a2fae7efbe9a04e9bbb14331)
            #02 pc 00000000000010b8  /system/bin/sanitizer-status (test_crash_malloc_uaf()+32) (BuildId: 953fc93301472d0b72709b2b9a9f6f30)
            #03 pc 00000000000014a4  /system/bin/sanitizer-status (test(void (*)())+132) (BuildId: 953fc93301472d0b72709b2b9a9f6f30)

      allocated by thread 13935:
            #00 pc 0000000000042020  /apex/com.android.runtime/lib64/bionic/libc.so (scudo::Allocator<scudo::AndroidConfig, &(scudo_malloc_postinit)>::allocate(unsigned long, scudo::Chunk::Origin, unsigned long, bool)+1300) (BuildId: 6ab39e35a2fae7efbe9a04e9bbb14331)
            #01 pc 0000000000042394  /apex/com.android.runtime/lib64/bionic/libc.so (scudo_malloc+36) (BuildId: 6ab39e35a2fae7efbe9a04e9bbb14331)
            #02 pc 000000000003cc9c  /apex/com.android.runtime/lib64/bionic/libc.so (malloc+36) (BuildId: 6ab39e35a2fae7efbe9a04e9bbb14331)
            #03 pc 00000000000010ac  /system/bin/sanitizer-status (test_crash_malloc_uaf()+20) (BuildId: 953fc93301472d0b72709b2b9a9f6f30)
            #04 pc 00000000000014a4  /system/bin/sanitizer-status (test(void (*)())+132) (BuildId: 953fc93301472d0b72709b2b9a9f6f30)
      Learn more about MTE reports: https://source.android.com/docs/security/test/memory-safety/mte-report

   See `Understanding MTE reports <https://source.android.google.cn/docs/security/test/memory-safety/mte-reports>`__
   in the AOSP documentation for more details. You can also `debug your app with Android Studio <#>`__ and the debugger stops at the line causing
   the invalid memory access.

   .. rubric:: Advanced Users: Using MTE in your own allocator
      :name: custom

   **Note:**\  if you are not aware that you are using custom allocators, you
   can skip this section.
   To use MTE for memory not allocated through the normal system allocators, you
   need to modify your allocator to tag memory and pointers.

   The pages for your allocator need to be allocated using ``PROT_MTE`` in the
   ``prot`` flag of ``mmap`` (or ``mprotect``).

   All tagged allocations need to be 16-byte aligned, as tags can only be
   assigned for 16-byte chunks (also known as granules).

   Then, before returning a pointer, you need to use the
   `IRG <https://developer.arm.com/documentation/ddi0596/2020-12/Base-Instructions/IRG--Insert-Random-Tag->`__
   instruction to generate a random tag and store it in the pointer.

   Use the following instructions to tag the underlying memory:

   -  `STG <https://developer.arm.com/documentation/ddi0602/2021-12/Base-Instructions/STG--Store-Allocation-Tag->`__:
      tag a single 16-byte granule
   -  `ST2G <https://developer.arm.com/documentation/ddi0602/2022-06/Base-Instructions/ST2G--Store-Allocation-Tags->`__:
      tag two 16-byte granules
   -  `DC GVA <https://developer.arm.com/documentation/ddi0601/2020-12/AArch64-Instructions/DC-GVA--Data-Cache-set-Allocation-Tag-by-VA>`__:
      tag cacheline with the same tag

   Alternatively, the following instructions also zero-initialize the memory:

   -  `STZG <https://developer.arm.com/documentation/ddi0596/2020-12/Base-Instructions/STZG--Store-Allocation-Tag--Zeroing->`__:
      tag and zero-initialize a single 16-byte granule
   -  `STZ2G <https://developer.arm.com/documentation/ddi0596/2020-12/Base-Instructions/STZ2G--Store-Allocation-Tags--Zeroing->`__:
      tag and zero-initialize two 16-byte granules
   -  `DC GZVA <https://developer.arm.com/documentation/ddi0595/2021-06/AArch64-Instructions/DC-GZVA--Data-Cache-set-Allocation-Tags-and-Zero-by-VA>`__:
      tag and zero-initialize cacheline with the same tag

   Note that these instructions are *not supported* on older CPUs, so you need
   to conditionally run them when MTE is enabled. You can check whether MTE is
   enabled for your process:

   .. code:: cpp

      #include <sys/prctl.h>

      bool runningWithMte() {
            int mode = prctl(PR_GET_TAGGED_ADDR_CTRL, 0, 0, 0, 0);
            return mode != -1 && mode & PR_MTE_TCF_MASK;
      }

   You may find the `scudo implementation <https://cs.android.com/android/platform/superproject/+/main:external/scudo/standalone/memtag.h?q=symbol:setRandomTag>`__
   helpful as a reference.

   .. rubric:: Learn more
      :name: more

   You can learn more in the `MTE User Guide for Android OS <https://developer.arm.com/documentation/108035/latest/>`__ written by
   Arm.

Last updated 2024-01-04 UTC.

/GWP-ASan
=========

.. https://developer.android.google.cn/ndk/guides/gwp-asan?hl=en

.. container:: devsite-article-body clearfix

   **Important:**\  GWP-Asan is one of many tools available for memory debugging
   and mitigation. See `Memory error debugging and mitigation <#>`__ for an overview of all the tools.
   **Important:**\  On devices that run Android 14 (API level 34) or higher, all
   apps use `Recoverable GWP-ASan <#recoverable>`__ by default.
   GWP-ASan is a native memory allocator feature that helps find
   `use-after-free <https://cwe.mitre.org/data/definitions/416.html>`__ and
   `heap-buffer-overflow <https://cwe.mitre.org/data/definitions/122.html>`__
   bugs. Its informal name is a recursive acronym,"**G**\ WP-ASan **W**\ ill
   **P**\ rovide **A**\ llocation **SAN**\ ity". Unlike
   `HWASan <https://source.android.google.cn/devices/tech/debug/hwasan>`__ or
   `Malloc Debug <https://android.googlesource.com/platform/bionic/+/master/libc/malloc_debug/README.md>`__,
   GWP-ASan does not require source or recompilation (that is, works with
   prebuilts), and works on both 32- and 64-bit processes (although 32-bit
   crashes have `less debugging information <#allocation-deallocation-traces-are-missing>`__). This topic
   outlines the actions you need to take to enable this feature in your app.
   GWP-ASan is available on apps that target Android 11 (API level 30) or
   higher.

   .. rubric:: Overview
      :name: overview

   GWP-ASan is enabled on some randomly-selected system applications and
   platform executables upon process start-up (or when the zygote forks). Enable
   GWP-ASan in your own app to help you find memory-related bugs, and to prepare
   your app for `ARM Memory Tagging Extension (MTE) support <https://community.arm.com/developer/ip-products/processors/b/processors-ip-blog/posts/enhancing-memory-safety>`__.
   The allocation sampling mechanisms also provide reliability against `queries of
   death <https://landing.google.com/sre/sre-book/chapters/addressing-cascading-failures/>`__.

   Once enabled, GWP-ASan intercepts a randomly-chosen subset of heap
   allocations, and places them into a special region that catches
   difficult-to-detect heap memory corruption bugs. Given enough users, even
   this low sampling rate will find heap memory safety bugs that aren't being
   found through regular testing. For example, GWP-ASan has found `a significant number of
   bugs <https://bugs.chromium.org/p/chromium/issues/list?q=Hotlist%3DGWP-ASan&can=1>`__
   in the Chrome browser (many of which are still under restricted view).

   GWP-ASan collects additional information about all of the allocations that it
   intercepts. This information is available when GWP-ASan detects a memory
   safety violation and is automatically placed into the native crash report,
   which can aid significantly in debugging (see `Example <#example>`__).

   GWP-ASan is designed to not incur any significant CPU overhead. GWP-ASan
   introduces a small, fixed RAM overhead when enabled. This overhead is decided
   by the Android system and is currently approximately 70 kibibytes (KiB) for
   each affected process.

   .. rubric:: Opt-in your app
      :name: opt-in

   GWP-ASan may be enabled by apps on a per-process level by using the
   ``android:gwpAsanMode`` tag in the app manifest. The following options are
   supported:

   -  Always disabled (``android:gwpAsanMode="never"``): This setting completely
      disables GWP-ASan in your app and is the default for non-system apps.

   -  Default (``android:gwpAsanMode="default"`` or unspecified): Android 13
      (API level 33) and lower - GWP-ASan is disabled. Android 14 (API level 34)
      and higher - `Recoverable GWP-ASan <#recoverable>`__ is enabled.

   -  Always enabled (``android:gwpAsanMode="always"``): This setting enables
      GWP-ASan in your app, which includes the following:

      #. The operating system reserves a fixed amount of RAM for GWP-ASan
         operations, approximately ~70KiB for each affected process. (Enable
         GWP-ASan if your app is not critically sensitive to increases in memory
         usage.)

      #. GWP-ASan intercepts a randomly-chosen subset of heap allocations and
         places them into a special region that reliably detects memory safety
         violations.

      #. When a memory safety violation occurs in the special region, GWP-ASan
         terminates the process.

      #. GWP-ASan provides additional information about the fault in the crash
         report.

   To enable GWP-ASan globally for your app, add the following to your
   ``AndroidManifest.xml`` file:

   .. code:: prettyprint

      <application android:gwpAsanMode="always">
        ...
      </application>

   Additionally, GWP-ASan can be explicitly enabled or disabled for specific
   subprocesses of your app. You can target activities and services using
   processes that are explicitly opted-in or opted-out of GWP-ASan. See the
   following for an example:

   .. code:: prettyprint

      <application>
        <processes>
          <!-- Create the (empty) application process -->
          <process />

          <!-- Create subprocesses with GWP-ASan both explicitly enabled and disabled. -->
          <process android:process=":gwp_asan_enabled"
                     android:gwpAsanMode="always" />
          <process android:process=":gwp_asan_disabled"
                     android:gwpAsanMode="never" />
        </processes>

        <!-- Target services and activities to be run on either the GWP-ASan enabled or disabled processes. -->
        <activity android:name="android.gwpasan.GwpAsanEnabledActivity"
                  android:process=":gwp_asan_enabled" />
        <activity android:name="android.gwpasan.GwpAsanDisabledActivity"
                  android:process=":gwp_asan_disabled" />
        <service android:name="android.gwpasan.GwpAsanEnabledService"
                 android:process=":gwp_asan_enabled" />
        <service android:name="android.gwpasan.GwpAsanDisabledService"
                 android:process=":gwp_asan_disabled" />
      </application>

   .. rubric:: Recoverable GWP-ASan
      :name: recoverable

   Android 14 (API level 34) and higher support Recoverable GWP-ASan, which
   helps developers find heap-buffer-overflow and heap-use-after-free bugs in
   production without degrading user experience. When ``android:gwpAsanMode`` is
   unspecified in an ``AndroidManifest.xml``, the app uses Recoverable GWP-ASan.

   Recoverable GWP-ASan differs from the base GWP-ASan in the following ways:

   #. Recoverable GWP-ASan is enabled only on approximately 1% of app launches,
      rather than every application launch.
   #. When a heap-use-after-free or heap-buffer-overflow bug is detected, this
      bug appears in the crash report (tombstone). This crash report is
      available through the
      `ActivityManager#getHistoricalProcessExitReasons <#>`__
      API, the same as the original GWP-ASan.
   #. Instead of exiting after dumping the crash report, Recoverable GWP-ASan
      allows memory corruption to occur, and the app continues running. While
      the process may continue as usual, the app's behavior is no longer
      specified. Due to the memory corruption, the app may crash at some
      arbitrary point in the future, or it may continue without any user-visible
      impact.
   #. Recoverable GWP-ASan is disabled after the crash report is dumped.
      Therefore, an app can get only a single Recoverable GWP-ASan report per
      app launch.
   #. If a custom signal handler is installed in the app, it's never called for
      a SIGSEGV signal that's indicative of a Recoverable GWP-ASan fault.

   Because Recoverable GWP-ASan crashes indicate real instances of memory
   corruption on end-user devices, we highly recommend triaging and fixing bugs
   identified by Recoverable GWP-ASan with a high priority.

   .. rubric:: Developer support
      :name: developer-support

   These sections outline issues that might occur when using GWP-ASan and how to
   address them.

   .. rubric:: Allocation/deallocation traces are missing
      :name: allocation-deallocation-traces-are-missing

   If you are diagnosing a native crash that appears to be missing
   allocation/deallocation frames, your application is likely missing 
   `frame pointers <https://en.wikipedia.org/wiki/Call_stack#Stack_and_frame_pointers>`__.
   GWP-ASan uses frame pointers to record allocation and deallocation traces for
   performance reasons, and is unable to unwind the stack trace if they are not
   present.

   Frame pointers are on by default for arm64 devices, and off by default for
   arm32 devices. Because applications don't have control over libc, it is (in
   general) not possible for GWP-ASan to collect allocation/deallocation traces
   for 32-bit executables or apps. 64-bit applications should ensure that they
   are **not** built with ``-fomit-frame-pointer`` so that GWP-ASan can collect
   allocation and deallocation stack traces.

   .. rubric:: Reproducing safety violations
      :name: reproducing-safety-violations

   GWP-ASan is designed to catch heap memory safety violations on user devices.
   GWP-ASan provides as much context as possible about the crash (access trace
   of the violation, cause string, and allocation/deallocation traces), but it
   might still be hard to deduce how the violation occurred. Unfortunately, as
   the bug detection is probabilistic, GWP-ASan reports are often tricky to
   reproduce on a local device.

   In these instances, if the bug affects 64-bit devices, you should use
   `HWAddressSanitizer <#>`__ (HWASan). HWASan detects memory
   safety violations reliably on stack, heap, and globals. Running your
   application with HWASan might reliably reproduce the same result that's being
   reported by GWP-ASan.

   In cases where running your application under HWASan is insufficient to
   root-cause a bug, you should try to
   `fuzz <https://source.android.google.cn/preview/devices/tech/debug/libfuzzer>`__
   the code in question. You can target your fuzzing efforts based on
   information in the GWP-ASan report, which can reliably detect and reveal
   underlying code health problems.

   .. rubric:: Example
      :name: example

   This example native code has a heap use-after-free bug:

   .. code:: cpp

      #include <jni.h>
      #include <string>
      #include <string_view>

      jstring native_get_string(JNIEnv* env) {
         std::string s = "Hellooooooooooooooo ";
         std::string_view sv = s + "World\n";

         // BUG: Use-after-free. `sv` holds a dangling reference to the ephemeral
         // string created by `s + "World\n"`. Accessing the data here is a
         // use-after-free.
         return env->NewStringUTF(sv.data());
      }

      extern "C" JNIEXPORT jstring JNICALL
      Java_android11_test_gwpasan_MainActivity_nativeGetString(
          JNIEnv* env, jobject /* this */) {
        // Repeat the buggy code a few thousand times. GWP-ASan has a small chance
        // of detecting the use-after-free every time it happens. A single user who
        // triggers the use-after-free thousands of times will catch the bug once.
        // Alternatively, if a few thousand users each trigger the bug a single time,
        // you'll also get one report (this is the assumed model).
        jstring return_string;
        for (unsigned i = 0; i < 0x10000; ++i) {
          return_string = native_get_string(env);
        }

        return reinterpret_cast<jstring>(env->NewGlobalRef(return_string));
      }

   For a test run using the example code above, GWP-ASan successfully caught the
   illegal usage and triggered the crash report below. GWP-ASan has
   automatically enhanced the report by providing information about the type of
   crash, the allocation metadata, and the associated allocation and
   deallocation stack traces.

   .. code:: devsite-click-to-copy

      *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
      Build fingerprint: 'google/sargo/sargo:10/RPP3.200320.009/6360804:userdebug/dev-keys'
      Revision: 'PVT1.0'
      ABI: 'arm64'
      Timestamp: 2020-04-06 18:27:08-0700
      pid: 16227, tid: 16227, name: 11.test.gwpasan  >>> android11.test.gwpasan <<<
      uid: 10238
      signal 11 (SIGSEGV), code 2 (SEGV_ACCERR), fault addr 0x736ad4afe0
      Cause: [GWP-ASan]: Use After Free on a 32-byte allocation at 0x736ad4afe0

      backtrace:
            #00 pc 000000000037a090  /apex/com.android.art/lib64/libart.so (art::(anonymous namespace)::ScopedCheck::CheckNonHeapValue(char, art::(anonymous namespace)::JniValueType)+448)
            #01 pc 0000000000378440  /apex/com.android.art/lib64/libart.so (art::(anonymous namespace)::ScopedCheck::CheckPossibleHeapValue(art::ScopedObjectAccess&, char, art::(anonymous namespace)::JniValueType)+204)
            #02 pc 0000000000377bec  /apex/com.android.art/lib64/libart.so (art::(anonymous namespace)::ScopedCheck::Check(art::ScopedObjectAccess&, bool, char const*, art::(anonymous namespace)::JniValueType*)+612)
            #03 pc 000000000036dcf4  /apex/com.android.art/lib64/libart.so (art::(anonymous namespace)::CheckJNI::NewStringUTF(_JNIEnv*, char const*)+708)
            #04 pc 000000000000eda4  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (_JNIEnv::NewStringUTF(char const*)+40)
            #05 pc 000000000000eab8  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (native_get_string(_JNIEnv*)+144)
            #06 pc 000000000000edf8  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (Java_android11_test_gwpasan_MainActivity_nativeGetString+44)
            ...

      deallocated by thread 16227:
            #00 pc 0000000000048970  /apex/com.android.runtime/lib64/bionic/libc.so (gwp_asan::AllocationMetadata::CallSiteInfo::RecordBacktrace(unsigned long (*)(unsigned long*, unsigned long))+80)
            #01 pc 0000000000048f30  /apex/com.android.runtime/lib64/bionic/libc.so (gwp_asan::GuardedPoolAllocator::deallocate(void*)+184)
            #02 pc 000000000000f130  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (std::__ndk1::_DeallocateCaller::__do_call(void*)+20)
            ...
            #08 pc 000000000000ed6c  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (std::__ndk1::basic_string<char, std::__ndk1::char_traits<char>, std::__ndk1::allocator<char> >::~basic_string()+100)
            #09 pc 000000000000ea90  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (native_get_string(_JNIEnv*)+104)
            #10 pc 000000000000edf8  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (Java_android11_test_gwpasan_MainActivity_nativeGetString+44)
            ...

      allocated by thread 16227:
            #00 pc 0000000000048970  /apex/com.android.runtime/lib64/bionic/libc.so (gwp_asan::AllocationMetadata::CallSiteInfo::RecordBacktrace(unsigned long (*)(unsigned long*, unsigned long))+80)
            #01 pc 0000000000048e4c  /apex/com.android.runtime/lib64/bionic/libc.so (gwp_asan::GuardedPoolAllocator::allocate(unsigned long)+368)
            #02 pc 000000000003b258  /apex/com.android.runtime/lib64/bionic/libc.so (gwp_asan_malloc(unsigned long)+132)
            #03 pc 000000000003bbec  /apex/com.android.runtime/lib64/bionic/libc.so (malloc+76)
            #04 pc 0000000000010414  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (operator new(unsigned long)+24)
            ...
            #10 pc 000000000000ea6c  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (native_get_string(_JNIEnv*)+68)
            #11 pc 000000000000edf8  /data/app/android11.test.gwpasan/lib/arm64/libmy-test.so (Java_android11_test_gwpasan_MainActivity_nativeGetString+44)
            ...

   .. rubric:: More information
      :name: more-information

   To learn more about the implementation details of GWP-ASan, see the `LLVM documentation <http://llvm.org/docs/GwpAsan.html>`__. To learn more about
   Android native crash reports, see `Diagnosing Native Crashes <https://source.android.google.cn/devices/tech/debug/native-crash>`__.

Last updated 2024-05-03 UTC.

/Intro: High-performance audio
==============================

.. https://developer.android.google.cn/ndk/guides/audio?hl=en

.. container:: devsite-article-body clearfix

   High performance audio apps typically require more functionality than the
   simple ability to play or record sound. They demand responsive realtime
   system behavior. Some typical use cases include:

   -  Digital audio workstations
   -  Synthesizers
   -  Drum machines
   -  Music learning apps
   -  Karaoke apps
   -  DJ mixing
   -  Audio effects
   -  Video/audio conferencing

   This section explains the general principles of minimizing `audio latency <#>`__. It also provides `advice about audio sampling <#>`__, to help you choose the
   optimal sample rate and consider the pros and cons of using floating-point
   numbers to represent your audio data.

   The rest of the section describes the two libraries that are available for
   writing high-performance audio applications:

   -  `OpenSL ES <#>`__ is an Android-specific
      implementation of the OpenSL ES™ API specification from the Khronos Group.
      OpenSL ES is not recommended for new designs. App developers and
      middleware providers should target either Oboe or AAudio as the native
      audio interface.
   -  `AAudio <#>`__ was developed as a
      lightweight, native Android alternative to the OpenSL ES library. The
      AAudio API is smaller and easier to use than OpenSL ES.

   **Note:**\  Developers should consider using the open source Oboe library
   which is available on `GitHub <https://github.com/google/oboe>`__. Oboe is a
   C++ wrapper that provides an API that closely resembles AAudio. It calls
   AAudio when it is available, and falls back to OpenSL ES if AAudio is not
   available.

   .. rubric:: Additional resources
      :name: addt-resources

   To learn more, take advantage of the following resources:

   .. rubric:: Sample
      :name: sample

   -  `Oboe Samples <https://github.com/google/oboe/tree/master/samples>`__

   .. rubric:: Codelabs
      :name: codelabs

   -  `Making Waves Part 1 - Build a Synthesizer <#>`__
   -  `Making More Waves - Sampler <#>`__
   -  `Build a Musical Game using Oboe <https://developer.android.google.cn/codelabs/musicalgame-using-oboe>`__

   .. rubric:: Videos
      :name: videos

   -  `Getting Started with Oboe <http://bit.ly/Introducing-Oboe>`__
   -  `Best Practices for Android Audio (Google I/O '17) <https://www.youtube.com/watch?v=C0BPXZIvG-Q>`__

Last updated 2021-10-26 UTC.

/Audio latency
==============

.. https://developer.android.google.cn/ndk/guides/audio/audio-latency?hl=en

.. container:: devsite-article-body clearfix

   Latency is the time it takes for a signal to travel through a system. These
   are the common types of latency related to audio apps:

   -  **Audio output latency** is the time between an audio sample being
      generated by an app and the sample being played through the headphone jack
      or built-in speaker.

   -  **Audio input latency** is the time between an audio signal being received
      by a device’s audio input, such as the microphone, and that same audio
      data being available to an app.

   -  **Round-trip latency** is the sum of input latency, app processing time,
      and output latency.

   -  **Touch latency** is the time between a user touching the screen and that
      touch event being received by an app.

   -  **Warmup latency** is the time it takes to start up the audio pipeline the
      first time data is enqueued in a buffer.

   This page describes how to develop your audio app with low-latency input and
   output, and how to avoid warmup latency.

   .. container:: video-wrapper

   .. container:: video-wrapper-left

   .. rubric:: Measure latency
      :name: measure

   It is difficult to measure audio input and output latency in isolation since
   it requires knowing exactly when the first sample is sent into the audio path
   (although this can be done using a `light testing circuit <https://source.android.google.cn/devices/audio/testing_circuit.html>`__
   and an oscilloscope). If you know the round-trip audio latency, you can use
   the rough rule of thumb: **audio input (and output) latency is half the
   round-trip audio latency over paths without signal processing**.

   Round-trip audio latency varies greatly depending on device model and Android
   build. You can get a rough idea of round-trip latency for Nexus devices by
   reading the `published measurements <https://source.android.google.cn/devices/audio/latency_measurements.html>`__.

   You can measure round-trip audio latency by creating an app that generates an
   audio signal, listens for that signal, and measures the time between sending
   it and receiving it.

   Since the lowest latency is achieved over audio paths with minimal signal
   processing, you may also want to use an `Audio Loopback Dongle <https://source.android.google.cn/devices/audio/latency_measure.html#loopback>`__,
   which allows the test to be run over the headset connector.

   .. rubric:: Best practices to minimize latency
      :name: best-practices

   .. rubric:: Validate audio performance
      :name: validate

   The Android Compatibility Definition Document (CDD) enumerates the hardware
   and software requirements of a compatible Android device. See `Android Compatibility <https://source.android.google.cn/compatibility/>`__ for more
   information on the overall compatibility program, and
   `CDD <https://source.android.google.cn/compatibility/cdd>`__ for the actual
   CDD document.

   In the CDD, round-trip latency is specified as 20 ms or lower (even though
   musicians generally require 10 ms). This is because there are important use
   cases that are enabled by 20 ms.

   There is currently no API to determine audio latency over any path on an
   Android device at runtime. You can, however, use the following hardware
   feature flags to find out whether the device makes any guarantees for
   latency:

   -  `android.hardware.audio.low_latency <https://developer.android.google.cn/reference/android/content/pm/PackageManager.html#FEATURE_AUDIO_LOW_LATENCY>`__
      indicates a continuous output latency of 45 ms or less.
   -  `android.hardware.audio.pro <https://developer.android.google.cn/reference/android/content/pm/PackageManager.html#FEATURE_AUDIO_PRO>`__
      indicates a continuous round-trip latency of 20 ms or less.

   The criteria for reporting these flags is defined in the CDD in sections `5.6 Audio
   Latency <https://source.android.google.cn/compatibility/android-cdd.html#5_6_audio_latency>`__
   and `5.10 Professional Audio <https://source.android.google.cn/compatibility/android-cdd.html#5_10_pro_audio>`__.

   Here’s how to check for these features in Java:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               val hasLowLatencyFeature: Boolean =
                       packageManager.hasSystemFeature(PackageManager.FEATURE_AUDIO_LOW_LATENCY)

               val hasProFeature: Boolean =
                       packageManager.hasSystemFeature(PackageManager.FEATURE_AUDIO_PRO)

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               boolean hasLowLatencyFeature =
                   getPackageManager().hasSystemFeature(PackageManager.FEATURE_AUDIO_LOW_LATENCY);

               boolean hasProFeature =
                   getPackageManager().hasSystemFeature(PackageManager.FEATURE_AUDIO_PRO);

   Regarding the relationship of audio features, the
   ``android.hardware.audio.low_latency`` feature is a prerequisite for
   ``android.hardware.audio.pro``. A device can implement
   ``android.hardware.audio.low_latency`` and not
   ``android.hardware.audio.pro``, but not vice-versa.

   .. rubric:: Make no assumptions about audio performance
      :name: assumptions

   Beware of the following assumptions to help avoid latency issues:

   -  Don’t assume that the speakers and microphones used in mobile devices
      generally have good acoustics. Due to their small size, the acoustics are
      generally poor so signal processing is added to improve the sound quality.
      This signal processing introduces latency.
   -  Don't assume that your input and output callbacks are synchronized. For
      simultaneous input and output, separate buffer queue completion handlers
      are used for each side. There is no guarantee of the relative order of
      these callbacks or the synchronization of the audio clocks, even when both
      sides use the same sample rate. Your application should buffer the data
      with proper buffer synchronization.
   -  Don't assume that the actual sample rate exactly matches the nominal
      sample rate. For example, if the nominal sample rate is 48,000 Hz, it is
      normal for the audio clock to advance at a slightly different rate than
      the operating system ``CLOCK_MONOTONIC``. This is because the audio and
      system clocks may derive from different crystals.
   -  Don't assume that the actual playback sample rate exactly matches the
      actual capture sample rate, especially if the endpoints are on separate
      paths. For example, if you are capturing from the on-device microphone at
      48,000 Hz nominal sample rate, and playing on USB audio at 48,000 Hz
      nominal sample rate, the actual sample rates are likely to be slightly
      different from each other.

   A consequence of potentially independent audio clocks is the need for
   asynchronous sample rate conversion. A simple (though not ideal for audio
   quality) technique for asynchronous sample rate conversion is to duplicate or
   drop samples as needed near a zero-crossing point. More sophisticated
   conversions are possible.

   .. rubric:: Minimize input latency
      :name: input-latency

   This section provides suggestions to help you reduce audio input latency when
   recording with a built-in microphone or an external headset microphone.

   -  If your app is monitoring the input, suggest that your users use a headset
      (for example, by displaying a *Best with headphones* screen on first run).
      Note that just using the headset doesn’t guarantee the lowest possible
      latency. You may need to perform other steps to remove any unwanted signal
      processing from the audio path, such as by using the
      `VOICE_RECOGNITION <https://developer.android.google.cn/reference/android/media/MediaRecorder.AudioSource.html#VOICE_RECOGNITION>`__
      preset when recording.
   -  Be prepared to handle nominal sample rates of 44,100 and 48,000 Hz as
      reported by
      `getProperty(String) <#>`__
      for
      `PROPERTY_OUTPUT_SAMPLE_RATE <#>`__.
      Other sample rates are possible, but rare.
   -  Be prepared to handle the buffer size reported by
      `getProperty(String) <#>`__
      for
      `PROPERTY_OUTPUT_FRAMES_PER_BUFFER <#>`__.
      Typical buffer sizes include 96, 128, 160, 192, 240, 256, or 512 frames,
      but other values are possible.

   .. rubric:: Minimize output latency
      :name: output-latency

   .. rubric:: Use the optimal sample rate when you create your audio player
      :name: use-the-optimal-sample-rate-when-creating-your-audio-player

   To obtain the lowest latency, you must supply audio data that matches the
   device's optimal sample rate and buffer size. For more information, see
   `Design For Reduced Latency <https://source.android.google.cn/devices/audio/latency_design.html>`__.

   In Java, you can obtain the optimal sample rate from AudioManager as shown in
   the following code example:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               val am = getSystemService(Context.AUDIO_SERVICE) as AudioManager
               val sampleRateStr: String? = am.getProperty(AudioManager.PROPERTY_OUTPUT_SAMPLE_RATE)
               var sampleRate: Int = sampleRateStr?.let { str ->
                   Integer.parseInt(str).takeUnless { it == 0 }
               } ?: 44100 // Use a default value if property not found

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               AudioManager am = (AudioManager) getSystemService(Context.AUDIO_SERVICE);
               String sampleRateStr = am.getProperty(AudioManager.PROPERTY_OUTPUT_SAMPLE_RATE);
               int sampleRate = Integer.parseInt(sampleRateStr);
               if (sampleRate == 0) sampleRate = 44100; // Use a default value if property not found

   Once you know the optimal sample rate, you can supply it when creating your
   player. This example uses `OpenSL ES <#>`__:

   .. code:: prettyprint

      // create buffer queue audio player
      void Java_com_example_audio_generatetone_MainActivity_createBufferQueueAudioPlayer
              (JNIEnv* env, jclass clazz, jint sampleRate, jint framesPerBuffer)
      {
         ...
         // specify the audio source format
         SLDataFormat_PCM format_pcm;
         format_pcm.numChannels = 2;
         format_pcm.samplesPerSec = (SLuint32) sampleRate * 1000;
         ...
      }

   **Note:** ``samplesPerSec`` refers to the *sample rate per channel in
   millihertz* (1 Hz = 1000 mHz).

   .. rubric:: Use the optimal buffer size to enqueue audio data
      :name: buffer-size

   You can obtain the optimal buffer size in a similar way to the optimal sample
   rate, using the AudioManager API:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               val am = getSystemService(Context.AUDIO_SERVICE) as AudioManager
               val framesPerBuffer: String? = am.getProperty(AudioManager.PROPERTY_OUTPUT_FRAMES_PER_BUFFER)
               var framesPerBufferInt: Int = framesPerBuffer?.let { str ->
                   Integer.parseInt(str).takeUnless { it == 0 }
               } ?: 256 // Use default

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               AudioManager am = (AudioManager) getSystemService(Context.AUDIO_SERVICE);
               String framesPerBuffer = am.getProperty(AudioManager.PROPERTY_OUTPUT_FRAMES_PER_BUFFER);
               int framesPerBufferInt = Integer.parseInt(framesPerBuffer);
               if (framesPerBufferInt == 0) framesPerBufferInt = 256; // Use default

   The
   `PROPERTY_OUTPUT_FRAMES_PER_BUFFER <#>`__
   property indicates the number of audio frames that the HAL (Hardware
   Abstraction Layer) buffer can hold. You should construct your audio buffers
   so that they contain an exact multiple of this number. If you use the correct
   number of audio frames, your callbacks occur at regular intervals, which
   reduces jitter.

   It is important to use the API to determine buffer size rather than using a
   hardcoded value, because HAL buffer sizes differ across devices and across
   Android builds.

   .. rubric:: Don't add output interfaces that involve signal processing
      :name: avoid-adding-output-interfaces-that-involve-signal-processing

   Only these interfaces are supported by the fast mixer:

   -  SL_IID_ANDROIDSIMPLEBUFFERQUEUE
   -  SL_IID_VOLUME
   -  SL_IID_MUTESOLO

   These interfaces are not allowed because they involve signal processing and
   will cause your request for a fast-track to be rejected:

   -  SL_IID_BASSBOOST
   -  SL_IID_EFFECTSEND
   -  SL_IID_ENVIRONMENTALREVERB
   -  SL_IID_EQUALIZER
   -  SL_IID_PLAYBACKRATE
   -  SL_IID_PRESETREVERB
   -  SL_IID_VIRTUALIZER
   -  SL_IID_ANDROIDEFFECT
   -  SL_IID_ANDROIDEFFECTSEND

   When you create your player, make sure you only add *fast* interfaces, as
   shown in the following example:

   .. code:: prettyprint

      const SLInterfaceID interface_ids[2] = { SL_IID_ANDROIDSIMPLEBUFFERQUEUE, SL_IID_VOLUME };

   .. rubric:: Verify you're using a low-latency track
      :name: verify-youre-using-a-low-latency-track

   Complete these steps to verify that you have successfully obtained a
   low-latency track:

   #. Launch your app and then run the following command:
   #. Make a note of your app's process ID.
   #. Now, play some audio from your app. You have approximately three seconds
      to run the following command from the terminal:
   #. Scan for your process ID. If you see an *F* in the *Name* column, it's on
      a low-latency track (the F stands for *fast track*).

   .. rubric:: Minimize warmup latency
      :name: warmup-latency

   When you enqueue audio data for the first time, it takes a small, but still
   significant, amount of time for the device audio circuit to warm up. To avoid
   this warmup latency, you can enqueue buffers of audio data containing
   silence, as shown in the following code example:

   .. code:: prettyprint

      #define CHANNELS 1
      static short* silenceBuffer;
      int numSamples = frames * CHANNELS;
      silenceBuffer = malloc(sizeof(*silenceBuffer) * numSamples);
          for (i = 0; i<numSamples; i++) {
              silenceBuffer[i] = 0;
          }

   At the point when audio should be produced, you can switch to enqueuing
   buffers containing real audio data.

   **Note:** Constantly outputting audio incurs significant power consumption.
   Ensure that you stop the output in the
   `onPause() <#>`__ method. Also
   consider pausing the silent output after some period of user inactivity.

   .. rubric:: Additional sample code
      :name: sample

   To download a sample app showcasing audio latency, see `NDK Samples <https://github.com/android/ndk-samples>`__.

   .. rubric:: For more information
      :name: more-info

   #. `Audio Latency for App Developers <https://source.android.google.cn/devices/audio/latency_app.html>`__
   #. `Contributors to Audio Latency <https://source.android.google.cn/devices/audio/latency_contrib.html>`__
   #. `Measuring Audio Latency <https://source.android.google.cn/devices/audio/latency_measure.html>`__
   #. `Audio Warmup <https://source.android.google.cn/devices/audio/warmup.html>`__
   #. `Latency (audio) <https://en.wikipedia.org/wiki/Latency_%28audio%29>`__
   #. `Round-trip delay time <https://en.wikipedia.org/wiki/Round-trip_delay_time>`__

Last updated 2024-01-03 UTC.

/Sampling audio
===============

.. https://developer.android.google.cn/ndk/guides/audio/sampling-audio?hl=en

.. container:: devsite-article-body clearfix

   As of Android 5.0 (Lollipop), the audio resamplers are now entirely based on
   FIR filters derived from a Kaiser windowed-sinc function. The Kaiser
   windowed-sinc offers the following properties:

   -  It is straightforward to calculate for its design parameters (stopband
      ripple, transition bandwidth, cutoff frequency, filter length).
   -  It is nearly optimal for reduction of stopband energy compared to overall
      energy.

   See P.P. Vaidyanathan, `Multirate Systems and Filter Banks <https://books.google.com/books/about/Multirate_Systems_and_Filter_Banks.html?id=pAsfAQAAIAAJ>`__,
   p. 50 for discussions of the Kaiser Window and its optimality and
   relationship to Prolate Spheroidal Windows.

   The design parameters are automatically computed based on internal quality
   determination and the sampling ratios desired. Based on the design
   parameters, the windowed-sinc filter is generated. For music use, the
   resampler for 44.1 to 48 kHz and vice versa is generated at a higher quality
   than for arbitrary frequency conversion.

   The audio resamplers provide increased quality, as well as speed to achieve
   that quality. But resamplers can introduce small amounts of passband ripple
   and aliasing harmonic noise, and they can cause some high frequency loss in
   the transition band, so avoid using them unnecessarily.

   .. container:: video-wrapper

   .. container:: video-wrapper-left

   .. rubric:: Best practices for sampling and resampling
      :name: best

   This section describes some best practices to help you avoid problems with
   sampling rates.

   .. rubric:: Choose the sampling rate to fit the device
      :name: choose-the-sampling-rate-to-fit-the-device

   In general, it is best to choose the sampling rate to fit the device,
   typically 44.1 kHz or 48 kHz. Use of a sample rate greater than 48 kHz will
   typically result in decreased quality because a resampler must be used to
   play back the file.

   .. rubric:: Use simple resampling ratios (fixed versus interpolated
      polyphases)
      :name: use-simple-resampling-ratios-fixed-versus-interpolated-polyphases

   The resampler operates in one of the following modes:

   -  Fixed polyphase mode. The filter coefficients for each polyphase are
      precomputed.
   -  Interpolated polyphase mode. The filter coefficients for each polyphase
      must be interpolated from the nearest two precomputed polyphases.

   The resampler is fastest in fixed polyphase mode, when the ratio of input
   rate over output rate L/M (taking out the greatest common divisor) has M less
   than 256. For example, for 44,100 to 48,000 conversion, L = 147, M = 160.

   In fixed polyphase mode, the sampling rate is locked and does not change. In
   interpolated polyphase mode, the sampling rate is approximate. When playing
   on a 48-kHz device the sampling rate drift is generally one sample over a few
   hours. This is not usually a concern because the approximation error is much
   less than the frequency error contributed by internal quartz oscillators,
   thermal drift, or jitter (typically tens of ppm).

   Choose simple-ratio sampling rates such as 24 kHz (1:2) and 32 kHz (2:3) when
   playing back on a 48-kHz device, even though other sampling rates and ratios
   may be permitted through AudioTrack.

   .. rubric:: Use upsampling rather than downsampling to change sample rates
      :name: use-upsampling-rather-than-downsampling-when-changing-sample-rates

   Sampling rates can be changed on the fly. The granularity of such change is
   based on the internal buffering (typically a few hundred samples), not on a
   sample-by-sample basis. This can be used for effects.

   Do not dynamically change sampling rates when downsampling. When changing
   sample rates after an audio track is created, differences of around 5 to 10
   percent from the original rate may trigger a filter recomputation when
   downsampling (to properly suppress aliasing). This can consume computing
   resources and may cause an audible click if the filter is replaced in real
   time.

   .. rubric:: Limit downsampling to no more than 6:1
      :name: limit-downsampling-to-no-more-than-6:1

   Downsampling is typically triggered by hardware device requirements. When the
   Sample Rate converter is used for downsampling, try to limit the downsampling
   ratio to no more than 6:1 for good aliasing suppression (for example, no
   greater downsample than 48,000 to 8,000). The filter lengths adjust to match
   the downsampling ratio, but you sacrifice more transition bandwidth at higher
   downsampling ratios to avoid excessively increasing the filter length. There
   are no similar aliasing concerns for upsampling. Note that some parts of the
   audio pipeline may prevent downsampling greater than 2:1.

   .. rubric:: If you're concerned about latency, don't resample
      :name: latency

   Resampling prevents the track from being placed in the FastMixer path, which
   means that significantly higher latency occurs due to the additional, larger
   buffer in the ordinary Mixer path. Furthermore, there is an implicit delay
   from the filter length of the resampler, though this is typically on the
   order of one millisecond or less, which is not as large as the additional
   buffering for the ordinary Mixer path (typically 20 milliseconds).

   .. rubric:: Use of floating-point audio
      :name: floating-point

   Using floating-point numbers to represent audio data can significantly
   enhance audio quality in high-performance audio applications. Floating point
   offers the following advantages:

   -  Wider dynamic range.
   -  Consistent accuracy across the dynamic range.
   -  More headroom to avoid clipping during intermediate calculations and
      transients.

   While floating-point can enhance audio quality, it does present certain
   disadvantages:

   -  Floating-point numbers use more memory.
   -  Floating-point operations employ unexpected properties, for example,
      addition is not associative.
   -  Floating-point calculations can sometimes lose arithmetic precision due to
      rounding or numerically unstable algorithms.
   -  Using floating-point effectively requires greater understanding to achieve
      accurate and reproducible results.

   Formerly, floating-point was notorious for being unavailable or slow. This is
   still true for low-end and embedded processors. But processors on modern
   mobile devices now have hardware floating-point with performance that is
   similar (or in some cases even faster) than integer. Modern CPUs also support
   `SIMD <https://en.wikipedia.org/wiki/SIMD>`__ (Single instruction, multiple
   data), which can improve performance further.

   .. rubric:: Best practices for floating-point audio
      :name: best-fpa

   The following best practices help you avoid problems with floating-point
   calculations:

   -  Use double precision floating-point for infrequent calculations, such as
      computing filter coefficients.
   -  Pay attention to the order of operations.
   -  Declare explicit variables for intermediate values.
   -  Use parentheses liberally.
   -  If you get a NaN or infinity result, use binary search to discover where
      it was introduced.

   For floating-point audio, the audio format encoding
   ``AudioFormat.ENCODING_PCM_FLOAT`` is used similarly to
   ``ENCODING_PCM_16_BIT`` or ``ENCODING_PCM_8_BIT`` for specifying AudioTrack
   data formats. The corresponding overloaded method ``AudioTrack.write()``
   takes in a float array to deliver data.

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               fun write(
                       audioData: FloatArray,
                       offsetInFloats: Int,
                       sizeInFloats: Int,
                       writeMode: Int
               ): Int

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               public int write(float[] audioData,
                       int offsetInFloats,
                       int sizeInFloats,
                       int writeMode)

   .. rubric:: For more information
      :name: info

   This section lists some additional resources about sampling and
   floating-point.

   .. rubric:: Sampling
      :name: sampling

   Sample rates

   -  `Sampling (signal processing) <https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29>`__
      at Wikipedia.

   Resampling

   -  `Sample-rate conversion <https://en.wikipedia.org/wiki/Sample_rate_conversion>`__ at
      Wikipedia.
   -  `Sample Rate Conversion <https://source.android.google.cn/devices/audio/src.html>`__ at
      source.android.com.

   The high bit-depth and high kHz controversy

   -  `D/A and A/D \| Digital Show and Tell <https://www.youtube.com/watch?v=cIQ9IXSUzuM>`__ video by Christopher
      "Monty" Montgomery of Xiph.Org.
   -  `The Science of Sample Rates (When Higher Is Better - And When It Isn't) <http://www.trustmeimascientist.com/2013/02/04/the-science-of-sample-rates-when-higher-is-better-and-when-it-isnt/>`__.
   -  `Audio Myths & DAW Wars <http://www.image-line.com/support/FLHelp/html/app_audio.htm>`__
   -  `192kHz/24bit vs. 96kHz/24bit "debate"- Interesting revelation <http://forums.stevehoffman.tv/threads/192khz-24bit-vs-96khz-24bit-debate-interesting-revelation.317660/>`__

   .. rubric:: Floating point
      :name: floating-point_1

   The following Wikipedia pages are helpful in understanding floating-point
   audio:

   -  `Audio bit depth <https://en.wikipedia.org/wiki/Audio_bit_depth>`__
   -  `Floating-point arithmetic <https://en.wikipedia.org/wiki/Floating_point>`__
   -  `IEEE 754 floating-point <https://en.wikipedia.org/wiki/IEEE_floating_point>`__
   -  `Loss of significance <https://en.wikipedia.org/wiki/Loss_of_significance>`__
      (catastrophic cancellation)
   -  `Numerical stability <https://en.wikipedia.org/wiki/Numerical_stability>`__

   The following article provides information on those aspects of floating-point
   that have a direct impact on designers of computer systems:

   -  `What every computer scientist should know about floating-point arithmetic <http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html>`__
      by David Goldberg, Xerox PARC (edited reprint).

Last updated 2024-01-03 UTC.

/AAudio
=======

.. https://developer.android.google.cn/ndk/guides/audio/aaudio/aaudio?hl=en

.. container:: devsite-article-body clearfix

   **Note:**\  Developers should consider using the open source Oboe library
   which is available on `GitHub <https://github.com/google/oboe>`__. Oboe is a
   C++ wrapper that provides an API that closely resembles AAudio. It calls
   AAudio when it is available, and falls back to `OpenSL ES <#>`__ if AAudio is not available.
   AAudio is a new Android C API introduced in the Android O release. It is
   designed for high-performance audio applications that require low latency.
   Apps communicate with AAudio by reading and writing data to streams.

   The AAudio API is minimal by design, it doesn't perform these functions:

   -  Audio device enumeration
   -  Automated routing between audio endpoints
   -  File I/O
   -  Decoding of compressed audio
   -  Automatic presentation of all input/streams in a single callback.

   .. rubric:: Getting started
      :name: getting-started

   You can call AAudio from C++ code. To add the AAudio feature set to your app,
   include the AAudio.h header file:

   .. code:: cpp

      #include <aaudio/AAudio.h>

   .. rubric:: Audio streams
      :name: audio-streams

   AAudio moves audio data between your app and the audio inputs and outputs on
   your Android device. Your app passes data in and out by reading from and
   writing to *audio streams*, represented by the structure AAudioStream. The
   read/write calls can be blocking or non-blocking.

   A stream is defined by the following:

   -  The *audio* *device* that is the source or sink for the data in the
      stream.
   -  The *sharing mode* that determines whether a stream has exclusive access
      to an audio device that might otherwise be shared among multiple streams.
   -  The *format* of the audio data in the stream.

   .. rubric:: Audio device
      :name: audio-device

   Each stream is attached to a single audio device.

   An audio device is a hardware interface or virtual endpoint that acts as a
   source or sink for a continuous stream of digital audio data. Don't confuse
   an *audio device* (a built-in mic or bluetooth headset) with the *Android
   device* (the phone or watch) that is running your app.

   You can use the ``AudioManager`` method
   `getDevices() <#>`__
   to discover the audio devices that are available on your Android device. The
   method returns information about the
   `type <#>`__ of each device.

   Each audio device has a unique ID on the Android device. You can use the ID
   to bind an audio stream to a specific audio device. However, in most cases
   you can let AAudio choose the default primary device rather than specifying
   one yourself.

   The audio device attached to a stream determines whether the stream is for
   input or output. A stream can only move data in one direction. When you
   define a stream you also set its direction. When you open a stream Android
   checks to ensure that the audio device and stream direction agree.

   .. rubric:: Sharing mode
      :name: sharing-mode

   A stream has a sharing mode:

   -  ``AAUDIO_SHARING_MODE_EXCLUSIVE`` means the stream has exclusive access to
      its audio device; the device cannot be used by any other audio stream. If
      the audio device is already in use, it might not be possible for the
      stream to have exclusive access. Exclusive streams are likely to have
      lower latency, but they are also more likely to get disconnected. You
      should close exclusive streams as soon as you no longer need them, so that
      other apps can access the device. Exclusive streams provide the lowest
      possible latency.
   -  ``AAUDIO_SHARING_MODE_SHARED`` allows AAudio to mix audio. AAudio mixes
      all the shared streams assigned to the same device.

   You can set the sharing mode explicitly when you create a stream. By default,
   the sharing mode is ``SHARED``.

   .. rubric:: Audio format
      :name: audio-format

   The data passed through a stream has the usual digital audio attributes.
   These are as follows:

   -  Sample data format
   -  Channel count (samples per frame)
   -  Sample rate

   AAudio permits these sample formats:

   .. list-table::
      :header-rows: 1

      - 

         - aaudio_format_t
         - C data type
         - Notes
      - 

         - AAUDIO_FORMAT_PCM_I16
         - int16_t
         - common 16-bit samples, `Q0.15 format <https://source.android.google.cn/devices/audio/data_formats#androidFormats>`__
      - 

         - AAUDIO_FORMAT_PCM_FLOAT
         - float
         - -1.0 to +1.0
      - 

         - AAUDIO_FORMAT_PCM_I24_PACKED
         - uint8_t in groups of 3
         - packed 24-bit samples, `Q0.23 format <https://source.android.google.cn/devices/audio/data_formats#androidFormats>`__
      - 

         - AAUDIO_FORMAT_PCM_I32
         - int32_t
         - common 32-bit samples, `Q0.31 format <https://source.android.google.cn/devices/audio/data_formats#androidFormats>`__
      - 

         - AAUDIO_FORMAT_IEC61937
         - uint8_t
         - compressed audio wrapped in IEC61937 for HDMI or S/PDIF passthrough

   If you request a specific sample format then the stream will use that format,
   even if the format is not optimal for the device. If you do not specify a
   sample format, AAudio will choose one that is optimal. After the stream is
   opened you must query the sample data format and then convert data if
   necessary, as in this example:

   .. code:: prettyprint

      aaudio_format_t dataFormat = AAudioStream_getDataFormat(stream);
      //... later
      if (dataFormat == AAUDIO_FORMAT_PCM_I16) {
           convertFloatToPcm16(...)
      }

   .. rubric:: Creating an audio stream
      :name: creating-streams

   The AAudio library follows a `builder design pattern <https://en.wikipedia.org/wiki/Builder_pattern>`__ and provides
   AAudioStreamBuilder.

   #. Create an AAudioStreamBuilder:

      .. code:: prettyprint

         AAudioStreamBuilder *builder;
         aaudio_result_t result = AAudio_createStreamBuilder(&builder);

   #. Set the audio stream configuration in the builder, using the builder
      functions that correspond to the stream parameters. These optional set
      functions are available:

      .. code:: prettyprint

         AAudioStreamBuilder_setDeviceId(builder, deviceId);
         AAudioStreamBuilder_setDirection(builder, direction);
         AAudioStreamBuilder_setSharingMode(builder, mode);
         AAudioStreamBuilder_setSampleRate(builder, sampleRate);
         AAudioStreamBuilder_setChannelCount(builder, channelCount);
         AAudioStreamBuilder_setFormat(builder, format);
         AAudioStreamBuilder_setBufferCapacityInFrames(builder, frames);

      Note that these methods do not report errors, such as an undefined
      constant or value out of range.

      If you do not specify the deviceId, the default is the primary output
      device. If you do not specify the stream direction, the default is an
      output stream. For all other parameters, you can explicitly set a value,
      or let the system assign the optimal value by not specifying the parameter
      at all or setting it to ``AAUDIO_UNSPECIFIED``.

      To be safe, check the state of the audio stream after you create it, as
      explained in step 4, below.

   #. When the AAudioStreamBuilder is configured, use it to create a stream:

      .. code:: prettyprint

         AAudioStream *stream;
         result = AAudioStreamBuilder_openStream(builder, &stream);

   #. After creating the stream, verify its configuration. If you specified
      sample format, sample rate, or samples per frame they will not change. If
      you specified sharing mode or buffer capacity, they might change depending
      on the capabilities of the stream's audio device and the Android device on
      which it's running. As a matter of good defensive programming, you should
      check the stream's configuration before using it. There are functions to
      retrieve the stream setting that corresponds to each builder setting:

      .. list-table::

         - 

            - `AAudioStreamBuilder_setDeviceId() <#>`__
            - `AAudioStream_getDeviceId() <#>`__
         - 

            - `AAudioStreamBuilder_setDirection() <#>`__
            - `AAudioStream_getDirection() <#>`__
         - 

            - `AAudioStreamBuilder_setSharingMode() <#>`__
            - `AAudioStream_getSharingMode() <#>`__
         - 

            - `AAudioStreamBuilder_setSampleRate() <#>`__
            - `AAudioStream_getSampleRate() <#>`__
         - 

            - `AAudioStreamBuilder_setChannelCount() <#>`__
            - `AAudioStream_getChannelCount() <#>`__
         - 

            - `AAudioStreamBuilder_setFormat() <#>`__
            - `AAudioStream_getFormat() <#>`__
         - 

            - `AAudioStreamBuilder_setBufferCapacityInFrames() <#>`__
            - `AAudioStream_getBufferCapacityInFrames() <#>`__

   #. You can save the builder and reuse it in the future to make more streams.
      But if you don't plan to use it any more, you should delete it.

      .. code:: prettyprint

         AAudioStreamBuilder_delete(builder);

   .. rubric:: Using an audio stream
      :name: using-streams

   .. rubric:: State transitions
      :name: state-transitions

   An AAudio stream is usually in one of five stable states (the error state,
   Disconnected, is described at the end of this section):

   -  Open
   -  Started
   -  Paused
   -  Flushed
   -  Stopped

   Data only flows through a stream when the stream is in the Started state. To
   move a stream between states, use one of the functions that request a state
   transition:

   .. code:: prettyprint

      aaudio_result_t result;
      result = AAudioStream_requestStart(stream);
      result = AAudioStream_requestStop(stream);
      result = AAudioStream_requestPause(stream);
      result = AAudioStream_requestFlush(stream);

   Note that you can only request pause or flush on an output stream:

   These functions are asynchronous, and the state change doesn't happen
   immediately. When you request a state change, the stream moves one of the
   corresponding transient states:

   -  Starting
   -  Pausing
   -  Flushing
   -  Stopping
   -  Closing

   The state diagram below shows the stable states as rounded rectangles, and
   the transient states as dotted rectangles. Though it's not shown, you can
   call ``close()`` from any state

   |AAudio Lifecycle|

   AAudio doesn't provide callbacks to alert you to state changes. One special
   function,
   `AAudioStream_waitForStateChange(stream, inputState, nextState, timeout) <#>`__
   can be used to wait for a state change.

   The function does not detect a state change on its own, and does not wait for
   a specific state. It waits until the current state is *different* than
   ``inputState``, which you specify.

   For example, after requesting to pause, a stream should immediately enter the
   transient state Pausing, and arrive sometime later at the Paused state -
   though there's no guarantee it will. Since you can't wait for the Paused
   state, use ``waitForStateChange()`` to wait for *any state other than
   Pausing*. Here's how that's done:

   .. code:: prettyprint

      aaudio_stream_state_t inputState = AAUDIO_STREAM_STATE_PAUSING;
      aaudio_stream_state_t nextState = AAUDIO_STREAM_STATE_UNINITIALIZED;
      int64_t timeoutNanos = 100 * AAUDIO_NANOS_PER_MILLISECOND;
      result = AAudioStream_requestPause(stream);
      result = AAudioStream_waitForStateChange(stream, inputState, &nextState, timeoutNanos);

   If the stream's state is not Pausing (the ``inputState``, which we assumed
   was the current state at call time), the function returns immediately.
   Otherwise, it blocks until the state is no longer Pausing or the timeout
   expires. When the function returns, the parameter ``nextState`` shows the
   current state of the stream.

   You can use this same technique after calling request start, stop, or flush,
   using the corresponding transient state as the inputState. Do not call
   ``waitForStateChange()`` after calling ``AAudioStream_close()`` since the
   stream will be deleted as soon as it closes. And do not call
   ``AAudioStream_close()`` while ``waitForStateChange()`` is running in another
   thread.

   .. rubric:: Reading and writing to an audio stream
      :name: reading-writing-streams

   There are two ways to process the data in a stream after it is started:

   -  Use a `high priority callback <#high-priority-callback>`__.
   -  Use the functions
      `AAudioStream_read(stream, buffer, numFrames, timeoutNanos) <#>`__
      and
      `AAudioStream_write(stream, buffer, numFrames, timeoutNanos) <#>`__.
      to read or write the stream.

   For a blocking read or write that transfers the specified number of frames,
   set timeoutNanos greater than zero. For a non-blocking call, set timeoutNanos
   to zero. In this case the result is the actual number of frames transferred.

   When you read input, you should verify the correct number of frames was read.
   If not, the buffer might contain unknown data that could cause an audio
   glitch. You can pad the buffer with zeros to create a silent dropout:

   .. code:: prettyprint

      aaudio_result_t result =
          AAudioStream_read(stream, audioData, numFrames, timeout);
      if (result < 0) {
        // Error!
      }
      if (result != numFrames) {
        // pad the buffer with zeros
        memset(static_cast<sample_type*>(audioData) + result * samplesPerFrame, 0,
            sizeof(sample_type) * (numFrames - result) * samplesPerFrame);
      }

   You can prime the stream's buffer before starting the stream by writing data
   or silence into it. This must be done in a non-blocking call with
   timeoutNanos set to zero.

   The data in the buffer must match the data format returned by
   ``AAudioStream_getDataFormat()``.

   .. rubric:: Closing an audio stream
      :name: closing-streams

   When you are finished using a stream, close it:

   .. code:: prettyprint

      AAudioStream_close(stream);

   After you close a stream you cannot use it with any AAudio stream-based
   function.

   .. rubric:: Disconnected audio stream
      :name: disconnected-streams

   An audio stream can become disconnected at any time if one of these events
   happens:

   -  The associated audio device is no longer connected (for example when
      headphones are unplugged).
   -  An error occurs internally.
   -  An audio device is no longer the primary audio device.

   When a stream is disconnected, it has the state "Disconnected" and any
   attempts to execute AAudioStream_write() or other functions will return an
   error. You must always stop and close a disconnected stream, regardless of
   the error code.

   If you are using a data callback (as opposed to one of the direct read/write
   methods) then you will not receive any return code when the stream is
   disconnected. To be informed when this happens write an
   `AAudioStream_errorCallback <https://developer.android.google.cn/ndk/reference/group___audio.html#gab747ce9806538a0ec00827fc51bad4c9>`__
   function and register it using
   `AAudioStreamBuilder_setErrorCallback() <https://developer.android.google.cn/ndk/reference/group___audio.html#ga7f42413b553bbd92bfe9565c1851e760>`__.

   If you are notified of the disconnect in an error callback thread then the
   stopping and closing of the stream must be done from another thread.
   Otherwise you may have a deadlock.

   Note that if you open a new stream it might have different settings from the
   original stream (for example framesPerBurst):

   .. code:: prettyprint

      void errorCallback(AAudioStream *stream,
                         void *userData,
                         aaudio_result_t error) {
          // Launch a new thread to handle the disconnect.
          std::thread myThread(my_error_thread_proc, stream, userData);
          myThread.detach(); // Don't wait for the thread to finish.
      }

   .. rubric:: Optimizing performance
      :name: optimizing-performance

   You can optimize the performance of an audio application by adjusting its
   internal buffers and by using special high-priority threads.

   .. rubric:: Tuning buffers to minimize latency
      :name: tuning-buffers

   AAudio passes data in and out of internal buffers that it maintains, one for
   each audio device.

   **Note:**\  Don't confuse AAudio's internal buffers with the buffer parameter
   of the AAudio stream read and write functions.
   The buffer's *capacity* is the total amount of data a buffer can hold. You
   can call
   `AAudioStreamBuilder_setBufferCapacityInFrames() <#>`__
   to set the capacity. The method limits the capacity you can allocate to the
   maximum value that the device permits. Use
   `AAudioStream_getBufferCapacityInFrames() <#>`__
   to verify the actual capacity of the buffer.

   An app doesn't have to use the entire capacity of a buffer. AAudio fills a
   buffer up to a *size* which you can set. The size of a buffer can be no
   larger than its capacity, and it is often smaller. By controlling the buffer
   size you determine the number of bursts needed to fill it, and thus control
   latency. Use the methods
   `AAudioStreamBuilder_setBufferSizeInFrames() <#>`__
   and
   `AAudioStreamBuilder_getBufferSizeInFrames() <#>`__
   to work with the buffer size.

   When an application plays audio out, it writes to a buffer and blocks until
   the write is complete. AAudio reads from the buffer in discrete bursts. Each
   burst contains a multiple number of audio frames and is usually smaller than
   the size of the buffer being read. The system controls burst size and rate,
   these properties are typically dictated by the audio device's circuitry.
   Though you can't change the size of a burst or the burst rate, you can set
   the size of the internal buffer according to the number of bursts it
   contains. Generally, you get the lowest latency if your AAudioStream's buffer
   size is a multiple of the reported burst size.

         |AAudio Buffering|

   One way to optimize the buffer size is to start with a large buffer and
   gradually lower it until underruns begin, then nudge it back up.
   Alternatively, you can start with a small buffer size and if that produces
   underruns, increase the buffer size until the output flows cleanly again.

   This process can take place very quickly, possibly before the user plays the
   first sound. You may want to perform the initial buffer sizing first, using
   silence, so that the user won't hear any audio glitches. System performance
   may change over time (for example, the user might turn off airplane mode).
   Since buffer tuning adds very little overhead, your app can do it
   continuously while the app reads or writes data to a stream.

   Here is an example of a buffer optimization loop:

   .. code:: prettyprint

      int32_t previousUnderrunCount = 0;
      int32_t framesPerBurst = AAudioStream_getFramesPerBurst(stream);
      int32_t bufferSize = AAudioStream_getBufferSizeInFrames(stream);

      int32_t bufferCapacity = AAudioStream_getBufferCapacityInFrames(stream);

      while (go) {
          result = writeSomeData();
          if (result < 0) break;

          // Are we getting underruns?
          if (bufferSize < bufferCapacity) {
              int32_t underrunCount = AAudioStream_getXRunCount(stream);
              if (underrunCount > previousUnderrunCount) {
                  previousUnderrunCount = underrunCount;
                  // Try increasing the buffer size by one burst
                  bufferSize += framesPerBurst;
                  bufferSize = AAudioStream_setBufferSize(stream, bufferSize);
              }
          }
      }

   There is no advantage to using this technique to optimize the buffer size for
   an input stream. Input streams run as fast as possible, trying to keep the
   amount of buffered data to a minimum, and then filling up when the app is
   preempted.

   .. rubric:: Using a high priority callback
      :name: high-priority-callback

   If your app reads or writes audio data from an ordinary thread, it may be
   preempted or experience timing jitter. This can cause audio glitches. Using
   larger buffers might guard against such glitches, but a large buffer also
   introduces longer audio latency. For applications that require low latency,
   an audio stream can use an asynchronous callback function to transfer data to
   and from your app. AAudio executes the callback in a higher-priority thread
   that has better performance.

   The callback function has this prototype:

   .. code:: prettyprint

      typedef aaudio_data_callback_result_t (*AAudioStream_dataCallback)(
              AAudioStream *stream,
              void *userData,
              void *audioData,
              int32_t numFrames);

   Use the stream building to register the callback:

   .. code:: prettyprint

      AAudioStreamBuilder_setDataCallback(builder, myCallback, myUserData);

   In the simplest case, the stream periodically executes the callback function
   to acquire the data for its next burst.

   The callback function should not perform a read or write on the stream that
   invoked it. If the callback belongs to an input stream, your code should
   process the data that is supplied in the audioData buffer (specified as the
   third argument). If the callback belongs to an output stream, your code
   should place data into the buffer.

   For example, you could use a callback to continuously generate a sine wave
   output like this:

   .. code:: prettyprint

      aaudio_data_callback_result_t myCallback(
              AAudioStream *stream,
              void *userData,
              void *audioData,
              int32_t numFrames) {
          int64_t timeout = 0;

          // Write samples directly into the audioData array.
          generateSineWave(static_cast<float *>(audioData), numFrames);
          return AAUDIO_CALLABCK_RESULT_CONTINUE;
      }

   It is possible to process more than one stream using AAudio. You can use one
   stream as the master, and pass pointers to other streams in the user data.
   Register a callback for the master stream. Then use non-blocking I/O on the
   other streams. Here is an example of a round-trip callback that passes an
   input stream to an output stream. The master calling stream is the output
   stream. The input stream is included in the user data.

   The callback does a non-blocking read from the input stream placing the data
   into the buffer of the output stream:

   .. code:: prettyprint

      aaudio_data_callback_result_t myCallback(
              AAudioStream *stream,
              void *userData,
              void *audioData,
              int32_t numFrames) {
          AAudioStream *inputStream = (AAudioStream *) userData;
          int64_t timeout = 0;
          aaudio_result_t result =
              AAudioStream_read(inputStream, audioData, numFrames, timeout);

        if (result == numFrames)
            return AAUDIO_CALLABCK_RESULT_CONTINUE;
        if (result >= 0) {
            memset(static_cast<sample_type*>(audioData) + result * samplesPerFrame, 0,
                sizeof(sample_type) * (numFrames - result) * samplesPerFrame);
            return AAUDIO_CALLBACK_RESULT_CONTINUE;
        }
        return AAUDIO_CALLBACK_RESULT_STOP;
      }

   Note that in this example it is assumed the input and output streams have the
   same number of channels, format and sample rate. The format of the streams
   can be mismatched - as long as the code handles the translations properly.

   .. rubric:: Setting performance mode
      :name: performance-mode

   Every AAudioStream has a *performance mode* which has a large effect on your
   app's behavior. There are three modes:

   -  ``AAUDIO_PERFORMANCE_MODE_NONE`` is the default mode. It uses a basic
      stream that balances latency and power savings.
   -  ``AAUDIO_PERFORMANCE_MODE_LOW_LATENCY`` uses smaller buffers and an
      optimized data path for reduced latency.
   -  ``AAUDIO_PERFORMANCE_MODE_POWER_SAVING`` uses larger internal buffers and
      a data path that trades off latency for lower power.

   You can select the performance mode by calling
   `setPerformanceMode() <https://developer.android.google.cn/ndk/reference/group___audio.html#ga9e8b3c88f78cc8d5a4aaa3af57a46407>`__,
   and discover the current mode by calling
   `getPerformanceMode() <https://developer.android.google.cn/ndk/reference/group___audio.html#gaff802df793c10331b73a706c5f5f45e8>`__.

   If low latency is more important than power savings in your application, use
   ``AAUDIO_PERFORMANCE_MODE_LOW_LATENCY``. This is useful for apps that are
   very interactive, such as games or keyboard synthesizers.

   If saving power is more important than low latency in your application, use
   ``AAUDIO_PERFORMANCE_MODE_POWER_SAVING``. This is typical for apps that play
   back previously generated music, such as streaming audio or MIDI file
   players.

   In the current version of AAudio, in order to achieve the lowest possible
   latency you must use the ``AAUDIO_PERFORMANCE_MODE_LOW_LATENCY`` performance
   mode along with a high-priority callback. Follow this example:

   .. code:: prettyprint

      // Create a stream builder
      AAudioStreamBuilder *streamBuilder;
      AAudio_createStreamBuilder(&streamBuilder);
      AAudioStreamBuilder_setDataCallback(streamBuilder, dataCallback, nullptr);
      AAudioStreamBuilder_setPerformanceMode(streamBuilder, AAUDIO_PERFORMANCE_MODE_LOW_LATENCY);

      // Use it to create the stream
      AAudioStream *stream;
      AAudioStreamBuilder_openStream(streamBuilder, &stream);

   .. rubric:: Thread safety
      :name: thread-safety

   The AAudio API is not completely `thread safe <https://en.wikipedia.org/wiki/Thread_safety>`__. You cannot call some
   of the AAudio functions concurrently from more than one thread at a time.
   This is because AAudio avoids using mutexes, which can cause thread
   preemption and glitches.

   To be safe, don't call ``AAudioStream_waitForStateChange()`` or read or write
   to the same stream from two different threads. Similarly, don't close a
   stream in one thread while reading or writing to it in another thread.

   Calls that return stream settings, like ``AAudioStream_getSampleRate()`` and
   ``AAudioStream_getChannelCount()``, are thread safe.

   These calls are also thread safe:

   -  ``AAudio_convert*ToText()``
   -  ``AAudio_createStreamBuilder()``
   -  ``AAudioStream_get*()`` except for ``AAudioStream_getTimestamp()``

   **Note:**\  When a stream uses a callback function, it's safe to read/write
   from the callback thread while also closing the stream from the thread in
   which it is running.

   .. rubric:: Known issues
      :name: issues

   -  Audio latency is high for blocking write() because the Android O DP2
      release doesn't use a FAST track. Use a callback to get lower latency.

   .. rubric:: Additional resources
      :name: addt-resources

   To learn more, take advantage of the following resources:

   .. rubric:: API Reference
      :name: api-reference

   -  `AAudio <#>`__

   .. rubric:: Codelabs
      :name: codelabs

   -  `Making Waves Part 1 - Build a Synthesizer <https://developers.google.cn/codelabs/codelabs/making-waves-1-synth/index.html>`__
   -  `Making More Waves - Sampler <https://developers.google.cn/codelabs/codelabs/making-waves-2-sampler/index.html>`__

   .. rubric:: Videos
      :name: videos

   -  `Best Practices for Android Audio (Google I/O '17) <https://www.youtube.com/watch?v=C0BPXZIvG-Q>`__

Last updated 2023-05-04 UTC.

.. |AAudio Lifecycle| image:: https://developer.android.google.cn/static/ndk/guides/images/aaudio-lifecycle.png
.. |AAudio Buffering| image:: https://developer.android.google.cn/static/ndk/guides/images/aaudio-buffering.png
   :width: 60.0%

/OpenSL ES Overview
===================

.. https://developer.android.google.cn/ndk/guides/audio/opensl?hl=en

.. container:: devsite-article-body clearfix

   Note: Developers should consider using the open source Oboe library which is
   available on `GitHub <https://github.com/google/oboe>`__. Oboe is a C++
   wrapper that provides an API that closely resembles
   `AAudio <#>`__. Oboe calls AAudio when AAudio
   is available, and falls back to OpenSL ES if AAudio is not available.

   The NDK package includes an Android-specific implementation of the `OpenSL ES™ <https://www.khronos.org/opensles/>`__ 1.0.1 API specification from the
   `Khronos Group <https://www.khronos.org>`__. This library allows you to use C
   or C++ to implement high-performance, low-latency audio, whether you are
   writing a synthesizer, digital audio workstation, karaoke, game, or other
   real-time app.

   The OpenSL ES™ standard exposes audio features similar to those in the
   `MediaPlayer <#>`__ and
   `MediaRecorder <#>`__ APIs in the
   Android Java framework. OpenSL ES provides a C language interface as well as
   C++ bindings, allowing you to call the API from code written in either
   language.

   The OpenSL ES APIs are available to help you develop and improve your app's
   audio performance.

   The standard OpenSL ES headers <SLES/OpenSLES.h> and
   <SLES/OpenSLES_Platform.h> allow audio input and output. Additional
   Android-specific functionality is in <SLES/OpenSLES_Android.h> and
   <SLES/OpenSLES_AndroidConfiguration.h>.

   This section begins by explaining `how to incorporate OpenSL ES into your app <#>`__. Next, it explains what you
   need to know about the Android implementation of OpenSL ES, focusing first on
   the `differences <#>`__ between
   this implementation and the reference specification and then `additional extensions <#>`__ for Android
   compatibility. This section concludes with some supplemental `programming notes <#>`__ to ensure proper
   implementation of OpenSL ES.

Last updated 2019-12-27 UTC.

/OpenSL ES Get started
======================

.. https://developer.android.google.cn/ndk/guides/audio/opensl/getting-started?hl=en

.. container:: devsite-article-body clearfix

   This section provides the information needed to get started using the OpenSL
   ES APIs.

   .. rubric:: Add OpenSL ES to your app
      :name: adding

   You can call OpenSL ES from both C and C++ code. To add the core OpenSL ES
   feature set to your app, include the ``OpenSLES.h`` header file:

   .. code:: cpp

      #include <SLES/OpenSLES.h>

   To add the OpenSL ES `Android extensions <#>`__, too, include the
   ``OpenSLES_Android.h`` header file:

   .. code:: cpp

      #include <SLES/OpenSLES_Android.h>

   When you include the ``OpenSLES_Android.h`` header file, the following
   headers are included automatically:

   .. code:: cpp

      #include <SLES/OpenSLES_AndroidConfiguration.h>
      #include <SLES/OpenSLES_AndroidMetadata.h>

   **Note:** These headers are not required, but are shown as an aid in learning
   the API.

   .. rubric:: Build and debug
      :name: building

   You can incorporate OpenSL ES into your build by specifying it in the
   `Android.mk <#>`__ file that serves as one of the
   NDK build system's makefiles. Add the following line to
   `Android.mk <#>`__:

   .. code:: none

      LOCAL_LDLIBS += -lOpenSLES

   For robust debugging, we recommend that you examine the ``SLresult`` value
   that most of the OpenSL ES APIs return. You can use
   `asserts <https://en.wikipedia.org/wiki/Assertion_(computing)>`__ or more
   advanced error-handling logic for debugging; neither offers an inherent
   advantage for working with OpenSL ES, although one or the other might be more
   suitable for a given use case.

   We use asserts in our
   `examples <https://github.com/googlesamples/android-ndk>`__, because they
   help catch unrealistic conditions that would indicate a coding error. We have
   used explicit error handling for other conditions more likely to occur in
   production.

   Many API errors result in a log entry, in addition to a non-zero result code.
   Such log entries can provide additional detail that proves especially useful
   for relatively complex APIs such as
   `Engine::CreateAudioPlayer <https://www.khronos.org/registry/sles/specs/OpenSL_ES_Specification_1.1.pdf#page=243>`__.

   You can view the log either from the command line or from Android Studio. To
   examine the log from the command line, type the following:

   .. code:: none

      $ adb logcat

   To examine the log from Android Studio, select **View > Tool Windows >
   Logcat**. For more information, see `Write and View Logs with Logcat <#>`__.

   .. rubric:: Example code
      :name: example-code

   We recommend using supported and tested example code that is usable as a
   model for your own code, which is located in the
   `audio-echo <https://github.com/android/ndk-samples/tree/main/audio-echo>`__
   and
   `native-audio <https://github.com/android/ndk-samples/tree/main/native-audio>`__
   folders of the `android-ndk <https://github.com/android/ndk-samples>`__
   GitHub repository.

   **Caution:** The OpenSL ES 1.0.1 specification contains example code in the
   appendices (see `Khronos OpenSL ES Registry <https://www.khronos.org/registry/sles/>`__ for more details).
   However, the examples in *Appendix B: Sample Code* and *Appendix C: Use Case
   Sample Code* use features that are not supported by Android. Some examples
   also contain typographical errors, or use APIs that are likely to change.
   Proceed with caution when referring to these; though the code may be helpful
   in understanding the full OpenSL ES standard, it should not be used as-is
   with Android.

   .. rubric:: Audio content
      :name: audio-content

   The following are some of the many ways to package audio content for your
   application:

   -  **Resources**: By placing your audio files into the ``res/raw/`` folder,
      they can be accessed easily by the associated APIs for
      `Resources <#>`__. However,
      there is no direct native access to resources, so you must write Java
      programming language code to copy them out before use.
   -  **Assets**: By placing your audio files into the ``assets/`` folder, they
      are directly accessible by the Android native asset manager APIs. See the
      header files ``android/asset_manager.h`` and
      ``android/asset_manager_jni.h`` for more information on these APIs. The
      example code located in the
      `android-ndk <https://github.com/googlesamples/android-ndk>`__ GitHub
      repository uses these native asset manager APIs in conjunction with the
      Android file descriptor data locator.
   -  **Network**: You can use the URI data locator to play audio content
      directly from the network. However, be sure to read `Security and permissions <#>`__.
   -  **Local file system**: The URI data locator supports the ``file:`` scheme
      for local files, provided the files are accessible by the application.
      Note that the Android security framework restricts file access via the
      Linux user ID and group ID mechanisms.
   -  **Recorded**: Your application can record audio data from the microphone
      input, store this content, and then play it back later. The example code
      uses this method for the *Playback* clip.
   -  **Compiled and linked inline**: You can link your audio content directly
      into the shared library, and then play it using an audio player with a
      buffer queue data locator. This is most suitable for short PCM format
      clips. The example code uses this technique for the *Hello* and *Android*
      clips. The PCM data was converted to hex strings using a ``bin2c`` tool
      (not supplied).
   -  **Real-time synthesis**: Your application can synthesize PCM data on the
      fly and then play it using an audio player with buffer queue data locator.
      This is a relatively advanced technique, and the details of audio
      synthesis are beyond the scope of this article.

   **Note:** Finding or creating useful audio content for your application is
   beyond the scope of this article. You can use web search terms such as
   *interactive audio*, *game audio*, *sound design*, and *audio programming* to
   locate more information.

   **Caution:** It is your responsibility to ensure that you are legally
   permitted to play or record content. There may be privacy considerations for
   recording content.

   .. rubric:: Code samples
      :name: samples

   These sample apps are available on our GitHub page:

   -  `audio-echo <https://github.com/android/ndk-samples/tree/main/audio-echo>`__
      creates an input-to-output roundtrip loop.
   -  `native-audio <https://github.com/android/ndk-samples/tree/main/native-audio>`__
      is a simple audio recorder/player.

   The Android NDK implementation of OpenSL ES differs from the reference
   specification for OpenSL ES 1.0.1 in a number of respects. These differences
   are an important reason why sample code that you copy directly from the
   OpenSL ES reference specification may not work in your Android app.

   For more information on differences between the reference specification and
   the Android implementation, see `OpenSL ES for Android <#>`__.

Last updated 2020-10-30 UTC.

/OpenSL ES for Android
======================

.. https://developer.android.google.cn/ndk/guides/audio/opensl/opensl-for-android?hl=en

.. container:: devsite-article-body clearfix

   This page provides details about how the `NDK <#>`__
   implementation of OpenSL ES™ differs from the reference specification for
   OpenSL ES 1.0.1. When using sample code from the specification, you may need
   to modify it to work on Android.

   Unless otherwise noted, all features are available at Android 2.3 (API level
   9) and higher. Some features are only available for Android 4.0 (API level
   14); these are noted.

   **Note:** The Android Compatibility Definition Document (CDD) enumerates the
   hardware and software requirements of a compatible Android device. See
   `Android Compatibility <https://source.android.google.cn/compatibility/>`__
   for more information on the overall compatibility program, and
   `CDD <https://source.android.google.cn/compatibility/android-cdd.pdf>`__ for
   the actual CDD document.

   `OpenSL ES <https://www.khronos.org/opensles/>`__ provides a C language
   interface that is also accessible using C++. It exposes features similar to
   the audio portions of these Android Java APIs:

   -  `android.media.MediaPlayer <#>`__
   -  `android.media.MediaRecorder <#>`__

   As with all of the Android Native Development Kit (NDK), the primary purpose
   of OpenSL ES for Android is to facilitate the implementation of shared
   libraries to be called using the Java Native Interface
   (`JNI <https://en.wikipedia.org/wiki/Java_Native_Interface>`__ ). NDK is not
   intended for writing pure C/C++ applications. However, OpenSL ES is a
   full-featured API, and we expect that you should be able to accomplish most
   of your audio needs using only this API, without up-calls to code running in
   the Android runtime.

   **Note:** Though based on OpenSL ES, the Android native audio
   (high-performance audio) API is not a conforming implementation of any OpenSL
   ES 1.0.1 profile (game, music, or phone). This is because Android does not
   implement all of the features required by any one of the profiles. Any known
   cases where Android behaves differently than the specification are described
   in the `Android extensions <#>`__
   page.

   .. rubric:: Features inherited from the reference specification
      :name: inherited

   The Android NDK implementation of OpenSL ES inherits much of the feature set
   from the reference specification, with certain limitations.

   .. rubric:: Global entry points
      :name: global-entry-points

   OpenSL ES for Android supports all of the global entry points in the Android
   specification. These entry points include:

   -  ``slCreateEngine``
   -  ``slQueryNumSupportedEngineInterfaces``
   -  ``slQuerySupportedEngineInterfaces``

   .. rubric:: Objects and interfaces
      :name: objects-and-interfaces

   The following table shows the objects and interfaces that the Android NDK
   implementation of OpenSL ES supports. If a *Yes* appears in the cell, then
   the feature is available in this implementation.

   Android NDK support for objects and interfaces.

   .. list-table::
      :header-rows: 1

      - 

         - Feature
         - Audio player
         - Audio recorder
         - Engine
         - Output mix
      - 

         - Bass boost
         - Yes
         - No
         - No
         - Yes
      - 

         - Buffer queue
         - Yes
         - No
         - No
         - No
      - 

         - Buffer queue data locator
         - Yes: Source
         - No
         - No
         - No
      - 

         - Dynamic interface management
         - Yes
         - Yes
         - Yes
         - Yes
      - 

         - Effect send
         - Yes
         - No
         - No
         - No
      - 

         - Engine
         - No
         - No
         - Yes
         - No
      - 

         - Environmental reverb
         - No
         - No
         - No
         - Yes
      - 

         - Equalizer
         - Yes
         - No
         - No
         - Yes
      - 

         - I/O device data locator
         - No
         - Yes: Source
         - No
         - No
      - 

         - Metadata extraction
         - Yes: Decode to PCM
         - No
         - No
         - No
      - 

         - Mute solo
         - Yes
         - No
         - No
         - No
      - 

         - Object
         - Yes
         - Yes
         - Yes
         - Yes
      - 

         - Output mix locator
         - Yes: Sink
         - No
         - No
         - No
      - 

         - Play
         - Yes
         - No
         - No
         - No
      - 

         - Playback rate
         - Yes
         - No
         - No
         - No
      - 

         - Prefetch status
         - Yes
         - No
         - No
         - No
      - 

         - Preset reverb
         - No
         - No
         - No
         - Yes
      - 

         - Record
         - No
         - Yes
         - No
         - No
      - 

         - Seek
         - Yes
         - No
         - No
         - No
      - 

         - URI data locator
         - Yes: Source
         - No
         - No
         - No
      - 

         - Virtualizer
         - Yes
         - No
         - No
         - Yes
      - 

         - Volume
         - Yes
         - No
         - No
         - No

   The next section explains the limitations for some of these features.

   .. rubric:: Limitations
      :name: limitations

   Certain limitations apply to the features in Table 1. These limitations
   represent differences from the reference specification. The rest of this
   section provides information about these differences.

   .. rubric:: Dynamic interface management
      :name: dynamic-interface-management

   OpenSL ES for Android does not support ``RemoveInterface`` or
   ``ResumeInterface``.

   .. rubric:: Effect combinations: environment reverb and preset reverb
      :name: effect-combinations:-environment-reverb-and-preset-reverb

   You cannot have both environmental reverb and preset reverb on the same
   output mix.

   The platform might ignore effect requests if it estimates that the CPU load
   would be too high.

   .. rubric:: Effect send
      :name: effect-send

   ``SetSendLevel()`` supports a single send level per audio player.

   .. rubric:: Environmental reverb
      :name: environmental-reverb

   Environmental reverb does not support the ``reflectionsDelay``,
   ``reflectionsLevel``, or ``reverbDelay`` fields of the
   ``SLEnvironmentalReverbSettings`` struct.

   .. rubric:: MIME data format
      :name: mime-data-format

   You can use the MIME data format only with the URI data locator, and only for
   an audio player. You cannot use this data format for an audio recorder.

   The Android implementation of OpenSL ES requires you to initialize
   ``mimeType`` to either ``NULL`` or a valid UTF-8 string. You must also
   initialize ``containerType`` to a valid value. In the absence of other
   considerations, such as portability to other implementations or content
   formats that an app cannot identify by header, we recommend that you set
   ``mimeType`` to ``NULL`` and ``containerType`` to
   ``SL_CONTAINERTYPE_UNSPECIFIED``.

   OpenSL ES for Android supports the following audio formats, so long as the
   Android platform supports them as well:

   -  `WAV <https://en.wikipedia.org/wiki/WAV>`__ PCM.
   -  WAV alaw.
   -  WAV ulaw.
   -  MP3 Ogg Vorbis.
   -  AAC LC.
   -  HE-AACv1 (AAC+).
   -  HE-AACv2 (enhanced AAC+).
   -  AMR.
   -  FLAC.

   **Note:** For a list of audio formats that Android supports, see `Supported media formats <#>`__.

   The following limitations apply to the handling of these and other formats in
   this implementation of OpenSL ES:

   -  `AAC <https://en.wikipedia.org/wiki/Advanced_Audio_Coding>`__ formats must
      reside within an MP4 or ADTS container.
   -  OpenSL ES for Android does not support
      `MIDI <https://source.android.google.cn/devices/audio/midi.html>`__.
   -  WMA is not part of `AOSP <https://source.android.google.cn/>`__, and we
      have not verified its compatibility with OpenSL ES for Android.
   -  The Android NDK implementation of OpenSL ES does not support direct
      playback of DRM or encrypted content. To play back protected audio
      content, you must decrypt it in your application before playing, with your
      app enforcing any DRM restrictions.

   .. rubric:: Object-related methods
      :name: object-related-methods

   OpenSL ES for Android does not support the following methods for manipulating
   objects:

   -  ``Resume()``
   -  ``RegisterCallback()``
   -  ``AbortAsyncOperation()``
   -  ``SetPriority()``
   -  ``GetPriority()``
   -  ``SetLossOfControlInterfaces()``

   .. rubric:: PCM data format
      :name: pcm-data-format

   PCM is the only data format you can use with buffer queues. Supported PCM
   playback configurations have the following characteristics:

   -  8-bit unsigned or 16-bit signed.
   -  Mono or stereo.
   -  Little-endian byte ordering.
   -  Sample rates of:

      -  8,000 Hz.
      -  11,025 Hz.
      -  12,000 Hz.
      -  16,000 Hz.
      -  22,050 Hz.
      -  24,000 Hz.
      -  32,000 Hz.
      -  44,100 Hz.
      -  48,000 Hz.

   The configurations that OpenSL ES for Android supports for recording are
   device-dependent; usually, 16,000 Hz mono/16-bit signed is available
   regardless of the device.

   The value of the ``samplesPerSec`` field is in units of milliHz, despite the
   misleading name. To avoid accidentally using the wrong value, we recommend
   that you initialize this field using one of the symbolic constants defined
   for this purpose, such as ``SL_SAMPLINGRATE_44_1``.

   Android 5.0 (API level 21) and above support `floating-point data <#>`__.

   .. rubric:: Playback rate
      :name: playback-rate

   An OpenSL ES *playback rate* indicates the speed at which an object presents
   data, expressed in thousandths of normal speed, or *per mille*. For example,
   a playback rate of 1,000 per mille is 1,000/1,000, or normal speed. A *rate
   range* is a closed interval that expresses a range of possible playback
   rates.

   Support for playback rate ranges and other capabilities may vary depending on
   the platform version and implementation. Your app can determine these
   capabilities at runtime by using ``PlaybackRate::GetRateRange()`` or
   ``PlaybackRate::GetCapabilitiesOfRate()`` to query the device.

   A device typically supports the same rate range for a data source in PCM
   format, and a unity rate range of 1000 per mille to 1000 per mille for other
   formats; that is, the unity rate range is effectively a single value.

   .. rubric:: Record
      :name: record

   OpenSL ES for Android does not support the ``SL_RECORDEVENT_HEADATLIMIT`` or
   ``SL_RECORDEVENT_HEADMOVING`` events.

   .. rubric:: Seek
      :name: seek

   The ``SetLoop()`` method enables whole-file looping. To enable looping, set
   the ``startPos`` parameter to 0, and the ``endPos`` parameter to
   ``SL_TIME_UNKNOWN``.

   .. rubric:: Buffer queue data locator
      :name: buffer-queue-data-locator

   An audio player or recorder with a data locator for a buffer queue supports
   the PCM data format only.

   .. rubric:: I/O device data locator
      :name: io-device-data-locator

   OpenSL ES for Android only supports use of an I/O device data locator when
   you have specified the locator as the data source for
   ``Engine::CreateAudioRecorder()``. Initialize the device data locator using
   the values contained in the following code snippet:

   .. code:: prettyprint

      SLDataLocator_IODevice loc_dev =
        {SL_DATALOCATOR_IODEVICE, SL_IODEVICE_AUDIOINPUT,
        SL_DEFAULTDEVICEID_AUDIOINPUT, NULL};

   .. rubric:: URI data locator
      :name: uri-data-locator

   OpenSL ES for Android can only use the URI data locator with the MIME data
   format, and only for an audio player. You cannot use a URI data locator for
   an audio recorder. The URI can only use the ``http:`` and ``file:`` schemes.
   Other schemes, such as ``https:``, ``ftp:``, or ``content:`` are not allowed.

   We have not verified support for ``rtsp:`` with audio on the Android
   platform.

   .. rubric:: Data structures
      :name: data-structures

   Android supports these OpenSL ES 1.0.1 data structures:

   -  ``SLDataFormat_MIME``
   -  ``SLDataFormat_PCM``
   -  ``SLDataLocator_BufferQueue``
   -  ``SLDataLocator_IODevice``
   -  ``SLDataLocator_OutputMix``
   -  ``SLDataLocator_URI``
   -  ``SLDataSink``
   -  ``SLDataSource``
   -  ``SLEngineOption``
   -  ``SLEnvironmentalReverbSettings``
   -  ``SLInterfaceID``

   .. rubric:: Platform configuration
      :name: platform-configuration

   OpenSL ES for Android is designed for multi-threaded applications and is
   thread-safe. It supports a single engine per application and up to 32 objects
   per engine. Available device memory and CPU may further restrict the usable
   number of objects.

   These engine options are recognized, but they're ignored by
   ``slCreateEngine``:

   -  ``SL_ENGINEOPTION_THREADSAFE``
   -  ``SL_ENGINEOPTION_LOSSOFCONTROL``

   OpenMAX AL and OpenSL ES may be used together in the same application. In
   this case, there is a single shared engine object internally, and the 32
   object limit is shared between OpenMAX AL and OpenSL ES. The application
   should create both engines, use both engines, and finally destroy both
   engines. The implementation maintains a reference count on the shared engine
   so that it is correctly destroyed during the second destroy operation.

   .. rubric:: Programming notes
      :name: notes

   `OpenSL ES programming notes <#>`__
   provides supplemental information to ensure proper implementation of OpenSL
   ES.

   **Note:** For your convenience, we have included a copy of the OpenSL ES
   1.0.1 specification with the NDK in
   ``docs/opensles/OpenSL_ES_Specification_1.0.1.pdf``.

   .. rubric:: Platform issues
      :name: platform-issues

   This section describes known issues in the initial platform release that
   supports these APIs.

   .. rubric:: Dynamic interface management
      :name: dynamic-interface-management_1

   ``DynamicInterfaceManagement::AddInterface`` does not work. Instead, specify
   the interface in the array that is passed to ``Create()``, as shown in the
   example code for environmental reverb.

   .. rubric:: Plan for future versions of OpenSL ES
      :name: planning

   The Android high-performance audio APIs are based on `Khronos Group OpenSL ES 1.0.1 <https://www.khronos.org/registry/sles/>`__. Khronos has released a
   revised version 1.1 of the standard. The revised version includes new
   features, clarifications, corrections of typographical errors, and some
   incompatibilities. Most of the expected incompatibilities are relatively
   minor or are in areas of OpenSL ES that are not supported by Android.

   An application developed with this version should work on future versions of
   the Android platform, provided that you follow the guidelines that are
   outlined in the `Plan for binary compatibility <#binary-compat>`__ section
   below.

   **Note:** Future source compatibility is not a goal. That is, if you upgrade
   to a newer version of the NDK, you may need to modify your application source
   code to conform to the new API. We expect that most such changes will be
   minor; see details below.

   .. rubric:: Plan for binary compatibility
      :name: binary-compat

   We recommend that your application follow these guidelines to improve future
   binary compatibility:

   -  Use only the documented subset of Android-supported features from OpenSL
      ES 1.0.1.
   -  Do not depend on a particular result code for an unsuccessful operation;
      be prepared to deal with a different result code.
   -  Application callback handlers generally run in a restricted context. They
      should be written to perform their work quickly, and then return as soon
      as possible. Do not run complex operations within a callback handler. For
      example, within a buffer queue completion callback, you can enqueue
      another buffer, but do not create an audio player.
   -  Callback handlers should be prepared to be called more or less frequently,
      to receive additional event types, and should ignore event types that they
      do not recognize. Callbacks that are configured with an event mask made of
      enabled event types should be prepared to be called with multiple event
      type bits set simultaneously. Use "&" to test for each event bit rather
      than a switch case.
   -  Use prefetch status and callbacks as general indications of progress, but
      do not depend on specific hard-coded fill levels or callback sequences.
      The meaning of the prefetch status fill level, and the behavior for errors
      that are detected during prefetch, may change.

   **Note:** See the `Buffer queue behavior <#>`__ section
   below for more details.

   .. rubric:: Plan for source compatibility
      :name: planning-for-source-compatibility

   As mentioned, source code incompatibilities are expected in the next version
   of OpenSL ES from Khronos Group. The likely areas of change include:

   -  The buffer queue interface is expected to have significant changes,
      especially in the areas of ``BufferQueue::Enqueue``, the parameter list
      for ``slBufferQueueCallback``, and the name of field
      ``SLBufferQueueState.playIndex``. We recommend that your application code
      use Android simple buffer queues instead. In the example code that is
      supplied with the NDK, we have used Android simple buffer queues for
      playback for this reason. (We also use Android simple buffer queue for
      recording and decoding to PCM, but that is because standard OpenSL ES
      1.0.1 does not support record or decode to a buffer queue data sink.)
   -  There will be an addition of ``const`` to the input parameters passed by
      reference, and to ``SLchar *`` struct fields used as input values. This
      should not require any changes to your code.
   -  There will be a substitution of unsigned types for some parameters that
      are currently signed. You may need to change a parameter type from
      ``SLint32`` to ``SLuint32`` or similar, or add a cast.
   -  ``Equalizer::GetPresetName`` copies the string to application memory
      instead of returning a pointer to implementation memory. This will be a
      significant change, so we recommend that you either avoid calling this
      method, or isolate your use of it.
   -  There will be additional fields in the struct types. For output
      parameters, these new fields can be ignored, but for input parameters the
      new fields will need to be initialized. Fortunately, all of these fields
      are expected to be in areas that are not supported by Android.
   -  Interface
      `GUIDs <https://en.wikipedia.org/wiki/Globally_unique_identifier>`__ will
      change. Refer to interfaces by symbolic name rather than GUID to avoid a
      dependency.
   -  ``SLchar`` will change from ``unsigned char`` to ``char``. This primarily
      affects the URI data locator and MIME data format.
   -  ``SLDataFormat_MIME.mimeType`` will be renamed to ``pMimeType``, and
      ``SLDataLocator_URI.URI`` will be renamed to ``pURI``. We recommend that
      you initialize the ``SLDataFormat_MIME`` and ``SLDataLocator_URI`` data
      structures using a brace-enclosed, comma-separated list of values, rather
      than by field name, to isolate your code from this change. This technique
      is used in the example code.
   -  ``SL_DATAFORMAT_PCM`` does not permit the application to specify the
      representation of the data as signed integer, unsigned integer, or
      floating-point. The Android implementation assumes that 8-bit data is
      unsigned integer and 16-bit is signed integer. In addition, the field
      ``samplesPerSec`` is a misnomer, as the actual units are milliHz. These
      issues are expected to be addressed in the next OpenSL ES version, which
      will introduce a new extended PCM data format that permits the application
      to explicitly specify the representation and corrects the field name. As
      this will be a new data format, and the current PCM data format will still
      be available (though deprecated), it should not require any immediate
      changes to your code.

Last updated 2020-08-17 UTC.

/Android extensions
===================

.. https://developer.android.google.cn/ndk/guides/audio/opensl/android-extensions?hl=en

.. container:: devsite-article-body clearfix

   OpenSL ES for Android extends the reference OpenSL ES specification to make
   it compatible with Android, and to take advantage of the power and
   flexibility of the Android platform.

   The definition of the API for the Android extensions resides in
   ``OpenSLES_Android.h`` and the header files that it includes. Consult
   ``OpenSLES_Android.h`` for details about these extensions. This file is
   located under your installation root, in the ``sysroot/usr/include/SLES``
   directory. Unless otherwise noted, all interfaces are explicit.

   These extensions limit your application's portability to other OpenSL ES
   implementations, because they are Android-specific. You can mitigate this
   issue by avoiding use of the extensions or by using ``#ifdef`` to exclude
   them at compile time.

   The following table shows the Android-specific interfaces and data locators
   that Android OpenSL ES supports for each object type. The *Yes* values in the
   cells indicate the interfaces and data locators that are available for each
   object type.

   .. list-table::
      :header-rows: 1

      - 

         - Feature
         - Audio player
         - Audio recorder
         - Engine
         - Output mix
      - 

         - Android buffer queue
         - Yes: Source (decode)
         - No
         - No
         - No
      - 

         - Android configuration
         - Yes
         - Yes
         - No
         - No
      - 

         - Android effect
         - Yes
         - No
         - No
         - Yes
      - 

         - Android effect capabilities
         - No
         - No
         - Yes
         - No
      - 

         - Android effect send
         - Yes
         - No
         - No
         - No
      - 

         - Android simple buffer queue
         - Yes: Source (playback) or sink (decode)
         - Yes
         - No
         - No
      - 

         - Android buffer queue data locator
         - Yes: Source (decode)
         - No
         - No
         - No
      - 

         - Android file descriptor data locator
         - Yes: Source
         - No
         - No
         - No
      - 

         - Android simple buffer queue data locator
         - Yes: Source (playback) or sink (decode)
         - Yes: Sink
         - No
         - No

   .. rubric:: Android configuration interface
      :name: configuration-interface

   The Android configuration interface provides a means to set platform-specific
   parameters for objects. This interface is different from other OpenSL ES
   1.0.1 interfaces in that your app can use it before instantiating the
   corresponding object; thus, you can configure the object before instantiating
   it. The ``OpenSLES_AndroidConfiguration.h`` header file, which resides at
   ``/sysroot/usr/include/SLES``, documents the following available
   configuration keys and values:

   -  Stream type for audio players (default ``SL_ANDROID_STREAM_MEDIA``).
   -  Record profile for audio recorders (default
      ``SL_ANDROID_RECORDING_PRESET_GENERIC``).

   The following code snippet shows an example of how to set the Android audio
   stream type on an audio player:

   .. code:: prettyprint

      // CreateAudioPlayer and specify SL_IID_ANDROIDCONFIGURATION
      // in the required interface ID array. Do not realize player yet.
      // ...
      SLAndroidConfigurationItf playerConfig;
      result = (*playerObject)->GetInterface(playerObject,
          SL_IID_ANDROIDCONFIGURATION, &playerConfig);
      assert(SL_RESULT_SUCCESS == result);
      SLint32 streamType = SL_ANDROID_STREAM_ALARM;
      result = (*playerConfig)->SetConfiguration(playerConfig,
          SL_ANDROID_KEY_STREAM_TYPE, &streamType, sizeof(SLint32));
      assert(SL_RESULT_SUCCESS == result);
      // ...
      // Now realize the player here.

   You can use similar code to configure the preset for an audio recorder:

   .. code:: prettyprint

      // ... obtain the configuration interface as the first four lines above, then:
      SLuint32 presetValue = SL_ANDROID_RECORDING_PRESET_VOICE_RECOGNITION;
      result = (*playerConfig)->SetConfiguration(playerConfig,
          RECORDING_PRESET, &presetValue, sizeof(SLuint32));

   .. rubric:: Android effects interfaces
      :name: effects

   Android's effect, effect send, and effect capabilities interfaces provide a
   generic mechanism for an application to query and use device-specific audio
   effects. Device manufacturers should document any available device-specific
   audio effects that they provide.

   Portable applications should use the OpenSL ES 1.0.1 APIs for audio effects
   instead of the Android effect extensions.

   .. rubric:: Android file descriptor data locator
      :name: file-descriptor

   The Android file descriptor data locator permits you to specify the source
   for an audio player as an open file descriptor with read access. The data
   format must be MIME.

   This extension is especially useful in conjunction with the native asset
   manager, because the app reads assets from the APK via a file descriptor.

   .. rubric:: Android simple buffer queue data locator and interface
      :name: simple

   In the OpenSL ES 1.0.1 reference specification, buffer queues can be used for
   audio players only, and they are compatible with PCM and other data formats.
   The Android simple buffer queue data locator and interface specs are
   identical to the reference specification, with two exceptions:

   -  You can use Android simple buffer queues with audio recorders and audio
      players.
   -  You can only use the PCM data format with these queues.

   For recording, your app should enqueue empty buffers. When a registered
   callback sends a notification that the system has finished writing data to a
   buffer, the app can read from that buffer.

   Playback works in the same way. For future source code compatibility,
   however, we suggest that applications use Android simple buffer queues
   instead of OpenSL ES 1.0.1 buffer queues.

   .. rubric:: Buffer queue behavior
      :name: bq-behavior

   The Android implementation does not include the reference specification's
   requirement that the play cursor return to the beginning of the currently
   playing buffer when playback enters the ``SL_PLAYSTATE_STOPPED`` state. This
   implementation can conform to that behavior, or it can leave the location of
   the play cursor unchanged. As a result, your app cannot assume that either
   behavior occurs. Therefore, you should explicitly call the
   ``BufferQueue::Clear()`` method after a transition to
   ``SL_PLAYSTATE_STOPPED``. Doing so sets the buffer queue to a known state.

   Similarly, there is no specification governing whether the trigger for a
   buffer queue callback must be a transition to ``SL_PLAYSTATE_STOPPED`` or an
   execution of ``BufferQueue::Clear()``. Therefore, we recommend that you do
   not create a dependency on one or the other; instead, your app should be able
   to handle both.

   .. rubric:: Dynamic interfaces at object creation
      :name: dynamic-interfaces

   For convenience, the Android implementation of OpenSL ES 1.0.1 permits your
   app to specify dynamic interfaces when it instantiates an object. This is an
   alternative to using ``DynamicInterfaceManagement::AddInterface()`` to add
   these interfaces after instantiation.

   .. rubric:: Reporting of extensions
      :name: extensions

   There are three methods for querying whether the platform supports Android
   extensions. These methods are:

   -  ``Engine::QueryNumSupportedExtensions()``
   -  ``Engine::QuerySupportedExtension()``
   -  ``Engine::IsExtensionSupported()``

   Any of these methods returns ``ANDROID_SDK_LEVEL_<API-level>``, where
   ``API-level`` is the platform API level; for example,
   ``ANDROID_SDK_LEVEL_23``. A platform API level of 9 or higher means that the
   platform supports the extensions.

   .. rubric:: Decode audio to PCM
      :name: decode-audio

   This section describes a deprecated Android-specific extension to OpenSL ES
   1.0.1 for decoding an encoded stream to PCM without immediate playback. The
   table below gives recommendations for use of this extension and alternatives.

   .. list-table::
      :header-rows: 1

      - 

         - API level
         - Alternatives
      - 

         - 15 and below
         - An open-source codec with a suitable license
      - 

         - 16 to 20
         - The `MediaCodec <#>`__ class or
            an open-source codec with a suitable license
      - 

         - 21 and above
         - NDK MediaCodec in the ``<media/NdkMedia*.h>`` header files, the
            `MediaCodec <#>`__ class, or
            an open-source codec with a suitable license

   **Note:** There is currently no documentation for the NDK version of the
   ``MediaCodec`` API. However, you can refer to the
   `native-codec <https://github.com/android/ndk-samples/tree/main/native-codec>`__
   sample code for an example.

   A standard audio player plays back to an audio device, specifying the output
   mix as the data sink. The Android extension differs in that an audio player
   instead acts as a decoder if the app has specified the data source either as
   a URI or as an Android file descriptor data locator described using the MIME
   data format. In such a case, the data sink is an Android simple buffer queue
   data locator that uses the PCM data format.

   This feature is primarily intended for games to pre-load their audio assets
   when changing to a new game level, which is similar to the functionality that
   the `SoundPool <#>`__ class provides.

   The application should initially enqueue a set of empty buffers in the
   Android simple buffer queue. After that, the app fills the buffers with PCM
   data. The Android simple buffer queue callback fires after each buffer is
   filled. The callback handler processes the PCM data, re-enqueues the
   now-empty buffer, and then returns. The application is responsible for
   keeping track of decoded buffers; the callback parameter list does not
   include sufficient information to indicate the buffer that contains data or
   the buffer that should be enqueued next.

   The data source implicitly reports the end of stream (EOS) by delivering a
   ``SL_PLAYEVENT_HEADATEND`` event at the end of the stream. After the app has
   decoded all of the data it received, it makes no further calls to the Android
   simple buffer queue callback.

   The sink's PCM data format typically matches that of the encoded data source
   with respect to sample rate, channel count, and bit depth. However, you can
   decode to a different sample rate, channel count, or bit depth. For
   information about a provision to detect the actual PCM format, see `Determine the format of decoded PCM data via metadata <#meta>`__.

   OpenSL ES for Android's PCM decoding feature supports pause and initial seek;
   it does not support volume control, effects, looping, or playback rate.

   Depending on the platform implementation, decoding may require resources that
   cannot be left idle. Therefore, we recommend that you make sure to provide
   sufficient numbers of empty PCM buffers; otherwise, the decoder starves. This
   may happen, for example, if your app returns from the Android simple buffer
   queue callback without enqueueing another empty buffer. The result of decoder
   starvation is unspecified, but may include: dropping the decoded PCM data,
   pausing the decoding process, or terminating the decoder outright.

   **Note:** To decode an encoded stream to PCM but not play back immediately,
   for apps running on Android 4.x (API levels 16–20), we recommend using the
   `MediaCodec <#>`__ class. For new
   applications running on Android 5.0 (API level 21) or higher, we recommend
   using the NDK equivalent, ``<NdkMedia*.h>``. These header files reside in the
   ``media/`` directory under your installation root.

   .. rubric:: Decode streaming ADTS AAC to PCM
      :name: decode-streaming

   An audio player acts as a streaming decoder if the data source is an Android
   buffer queue data locator that uses the MIME data format, and the data sink
   is an Android simple buffer queue data locator that uses the PCM data format.
   Configure the MIME data format as follows:

   -  Container: ``SL_CONTAINERTYPE_RAW``
   -  MIME type string: ``SL_ANDROID_MIME_AACADTS``

   This feature is primarily intended for streaming media applications that deal
   with AAC audio but need to perform custom audio processing prior to playback.
   Most applications that need to decode audio to PCM should use the method that
   `Decode audio to PCM <#decode-audio>`__ describes, as that method is simpler
   and handles more audio formats. The technique described here is a more
   specialized approach, to be used only if both of these conditions apply:

   -  The compressed audio source is a stream of AAC frames contained in ADTS
      headers.
   -  The application manages this stream. The data is *not* located within a
      network resource whose identifier is a URI or within a local file whose
      identifier is a file descriptor.

   The application should initially enqueue a set of filled buffers in the
   Android buffer queue. Each buffer contains one or more complete ADTS AAC
   frames. The Android buffer queue callback fires after each buffer is emptied.
   The callback handler should refill and re-enqueue the buffer, and then
   return. The application need not keep track of encoded buffers; the callback
   parameter list includes sufficient information to indicate the buffer that
   should be enqueued next. The end of stream is explicitly marked by enqueuing
   an EOS item. After EOS, no more enqueues are permitted.

   We recommend that you make sure to provide full ADTS AAC buffers, to avoid
   starving the decoder. This may happen, for example, if your app returns from
   the Android buffer queue callback without enqueueing another full buffer. The
   result of decoder starvation is unspecified.

   In all respects except for the data source, the streaming decode method is
   the same as the one that `Decode audio to PCM <#decode-audio>`__ describes.

   Despite the similarity in names, an Android buffer queue is *not* the same as
   an `Android simple buffer queue <#simple>`__. The streaming decoder uses both
   kinds of buffer queues: an Android buffer queue for the ADTS AAC data source,
   and an Android simple buffer queue for the PCM data sink. For more
   information about the Android simple buffer queue API, see `Android simple buffer queue data locator and interface <#simple>`__. For more information
   about the Android buffer queue API, see the ``index.html`` file in the
   ``docs/Additional_library_docs/openmaxal/`` directory under the installation
   root.

   .. rubric:: Determine the format of decoded PCM data via metadata
      :name: meta

   The ``SLMetadataExtractionItf`` interface is part of the reference
   specification. However, the metadata keys that indicate the actual format of
   decoded PCM data are specific to Android. The ``OpenSLES_AndroidMetadata.h``
   header file defines these metadata keys. This header file resides under your
   installation root, in the ``/sysroot/usr/include/SLES`` directory.

   The metadata key indices are available immediately after the
   ``Object::Realize()`` method finishes executing. However, the associated
   values are not available until after the app decodes the first encoded data.
   A good practice is to query for the key indices in the main thread after
   calling the ``Object::Realize`` method, and to read the PCM format metadata
   values in the Android simple buffer queue callback handler when calling it
   for the first time. Consult the `example code in the NDK package <https://github.com/googlesamples/android-ndk>`__ for examples of
   working with this interface.

   Metadata key names are stable, but the key indices are not documented, and
   are subject to change. An application should not assume that indices are
   persistent across different execution runs, and should not assume that
   multiple object instances share indices within the same run.

   .. rubric:: Floating-point data
      :name: floating-point

   An app running on Android 5.0 (API level 21) and higher can supply data to an
   AudioPlayer in single-precision, floating-point format.

   In following example code, the ``Engine::CreateAudioPlayer()`` method creates
   an audio player that uses floating-point data:

   .. code:: cpp

      #include <SLES/OpenSLES_Android.h>
      ...
      SLAndroidDataFormat_PCM_EX pcm;
      pcm.formatType = SL_ANDROID_DATAFORMAT_PCM_EX;
      pcm.numChannels = 2;
      pcm.sampleRate = SL_SAMPLINGRATE_44_1;
      pcm.bitsPerSample = 32;
      pcm.containerSize = 32;
      pcm.channelMask = SL_SPEAKER_FRONT_LEFT | SL_SPEAKER_FRONT_RIGHT;
      pcm.endianness = SL_BYTEORDER_LITTLEENDIAN;
      pcm.representation = SL_ANDROID_PCM_REPRESENTATION_FLOAT;
      ...
      SLDataSource audiosrc;
      audiosrc.pLocator = ...
      audiosrc.pFormat = &pcm;

   Read more about `floating-point audio <#>`__ on the Sampling
   Audio page.

Last updated 2020-10-30 UTC.

/OpenSL ES programming notes
============================

.. https://developer.android.google.cn/ndk/guides/audio/opensl/opensl-prog-notes?hl=en

.. container:: devsite-article-body clearfix

   The notes in this section supplement the `OpenSL ES 1.0.1 specification <https://www.khronos.org/registry/sles/>`__.

   .. rubric:: Objects and interface initialization
      :name: init

   Two aspects of the OpenSL ES programming model that may be unfamiliar to new
   developers are the distinction between objects and interfaces, and the
   initialization sequence.

   Briefly, an OpenSL ES object is similar to the object concept in programming
   languages such as Java and C++, except an OpenSL ES object is only visible
   via its associated interfaces. This includes the initial interface for all
   objects, called ``SLObjectItf``. There is no handle for an object itself,
   only a handle to the ``SLObjectItf`` interface of the object.

   An OpenSL ES object is first *created*, which returns an ``SLObjectItf``,
   then *realized*. This is similar to the common programming pattern of first
   constructing an object (which should never fail other than for lack of memory
   or invalid parameters), and then completing initialization (which may fail
   due to lack of resources). The realize step gives the implementation a
   logical place to allocate additional resources if needed.

   As part of the API to create an object, an application specifies an array of
   desired interfaces that it plans to acquire later. Note that this array does
   not automatically acquire the interfaces; it merely indicates a future
   intention to acquire them. Interfaces are distinguished as *implicit* or
   *explicit*. An explicit interface must be listed in the array if it will be
   acquired later. An implicit interface need not be listed in the object create
   array, but there is no harm in listing it there. OpenSL ES has one more kind
   of interface called *dynamic*, which does not need to be specified in the
   object create array and can be added later after the object is created. The
   Android implementation provides a convenience feature to avoid this
   complexity, which is described in `Dynamic interfaces at object creation <#>`__.

   After the object is created and realized, the application should acquire
   interfaces for each feature it needs, using ``GetInterface`` on the initial
   ``SLObjectItf``.

   Finally, the object is available for use via its interfaces, though note that
   some objects require further setup. In particular, an audio player with URI
   data source needs a bit more preparation in order to detect connection
   errors. See the `Audio player prefetch <#prefetch>`__ section for details.

   After your application is done with the object, you should explicitly destroy
   it; see the `Destroy <#destroy>`__ section below.

   .. rubric:: Audio player prefetch
      :name: prefetch

   For an audio player with URI data source, ``Object::Realize`` allocates
   resources but does not connect to the data source (*prepare*) or begin
   pre-fetching data. These occur once the player state is set to either
   ``SL_PLAYSTATE_PAUSED`` or ``SL_PLAYSTATE_PLAYING``.

   Some information may still be unknown until relatively late in this sequence.
   In particular, initially ``Player::GetDuration`` returns ``SL_TIME_UNKNOWN``
   and ``MuteSolo::GetChannelCount`` either returns successfully with channel
   count zero or the error result ``SL_RESULT_PRECONDITIONS_VIOLATED``. These
   APIs return the proper values once they are known.

   Other properties that are initially unknown include the sample rate and
   actual media content type based on examining the content's header (as opposed
   to the application-specified MIME type and container type). These are also
   determined later during prepare/prefetch, but there are no APIs to retrieve
   them.

   The prefetch status interface is useful for detecting when all information is
   available, or your application can poll periodically. Note that some
   information, such as the duration of a streaming MP3, may *never* be known.

   The prefetch status interface is also useful for detecting errors. Register a
   callback and enable at least the ``SL_PREFETCHEVENT_FILLLEVELCHANGE`` and
   ``SL_PREFETCHEVENT_STATUSCHANGE`` events. If both of these events are
   delivered simultaneously, and ``PrefetchStatus::GetFillLevel`` reports a zero
   level, and ``PrefetchStatus::GetPrefetchStatus`` reports
   ``SL_PREFETCHSTATUS_UNDERFLOW``, then this indicates a non-recoverable error
   in the data source. This includes the inability to connect to the data source
   because the local filename does not exist or the network URI is invalid.

   The next version of OpenSL ES is expected to add more explicit support for
   handling errors in the data source. However, for future binary compatibility,
   we intend to continue to support the current method for reporting a
   non-recoverable error.

   In summary, a recommended code sequence is:

   #. ``Engine::CreateAudioPlayer``
   #. ``Object:Realize``
   #. ``Object::GetInterface`` for ``SL_IID_PREFETCHSTATUS``
   #. ``PrefetchStatus::SetCallbackEventsMask``
   #. ``PrefetchStatus::SetFillUpdatePeriod``
   #. ``PrefetchStatus::RegisterCallback``
   #. ``Object::GetInterface`` for ``SL_IID_PLAY``
   #. ``Play::SetPlayState`` to ``SL_PLAYSTATE_PAUSED``, or
      ``SL_PLAYSTATE_PLAYING``

   **Note:** Preparation and prefetching occur here; during this time your
   callback is called with periodic status updates.

   .. rubric:: Destroy
      :name: destroy

   Be sure to destroy all objects when exiting from your application. Objects
   should be destroyed in reverse order of their creation, as it is not safe to
   destroy an object that has any dependent objects. For example, destroy in
   this order: audio players and recorders, output mix, and then finally the
   engine.

   OpenSL ES does not support automatic garbage collection or `reference counting <https://en.wikipedia.org/wiki/Reference_counting>`__ of interfaces.
   After you call ``Object::Destroy``, all extant interfaces that are derived
   from the associated object become undefined.

   The Android OpenSL ES implementation does not detect the incorrect use of
   such interfaces. Continuing to use such interfaces after the object is
   destroyed can cause your application to crash or behave in unpredictable
   ways.

   We recommend that you explicitly set both the primary object interface and
   all associated interfaces to ``NULL`` as part of your object destruction
   sequence, which prevents the accidental misuse of a stale interface handle.

   .. rubric:: Stereo panning
      :name: panning

   When ``Volume::EnableStereoPosition`` is used to enable stereo panning of a
   mono source, there is a 3-dB reduction in total `sound power level <https://en.wikipedia.org/wiki/Sound_power_level>`__. This is needed to
   permit the total sound power level to remain constant as the source is panned
   from one channel to the other. Therefore, only enable stereo positioning if
   you need it. For more information see the Wikipedia article on `audio panning <https://en.wikipedia.org/wiki/Panning_(audio)>`__.

   .. rubric:: Callbacks and threads
      :name: callbacks

   Callback handlers are generally called synchronously when the implementation
   detects an event. This point is asynchronous with respect to the application,
   so you should use a non-blocking synchronization mechanism to control access
   to any variables shared between the application and the callback handler. In
   the example code, such as for buffer queues, we have either omitted this
   synchronization or used blocking synchronization in the interest of
   simplicity. However, proper non- blocking synchronization is critical for any
   production code.

   Callback handlers are called from internal non-application threads that are
   not attached to the Android runtime, so they are ineligible to use JNI.
   Because these internal threads are critical to the integrity of the OpenSL ES
   implementation, a callback handler should also not block or perform excessive
   work.

   If your callback handler needs to use JNI or execute work that is not
   proportional to the callback, the handler should instead post an event for
   another thread to process. Examples of acceptable callback workload include
   rendering and enqueuing the next output buffer (for an AudioPlayer),
   processing the just-filled input buffer and enqueueing the next empty buffer
   (for an AudioRecorder), or simple APIs such as most of the *Get* family. See
   the `Performance <#perform>`__ section below regarding the workload.

   Note that the converse is safe: an Android application thread that has
   entered JNI is allowed to directly call OpenSL ES APIs, including those that
   block. However, blocking calls are not recommended from the main thread, as
   they may result in *Application Not Responding* (ANR).

   The determination regarding the thread that calls a callback handler is
   largely left up to the implementation. The reason for this flexibility is to
   permit future optimizations, especially on multi-core devices.

   The thread on which the callback handler runs is not guaranteed to have the
   same identity across different calls. Therefore, do not rely on the
   ``pthread_t`` returned by ``pthread_self()`` or the ``pid_t`` returned by
   ``gettid()`` to be consistent across calls. For the same reason, do not use
   the thread local storage (TLS) APIs such as ``pthread_setspecific()`` and
   ``pthread_getspecific()`` from a callback.

   The implementation guarantees that concurrent callbacks of the same kind, for
   the same object, does not occur. However, concurrent callbacks of different
   kinds for the same object are possible on different threads.

   .. rubric:: Performance
      :name: perform

   As OpenSL ES is a native C API, non-runtime application threads that call
   OpenSL ES have no runtime-related overhead such as garbage collection pauses.
   With one exception described below, there is no additional performance
   benefit to the use of OpenSL ES other than this. In particular, the use of
   OpenSL ES does not guarantee enhancements such as lower audio latency and
   higher scheduling priority over that which the platform generally provides.
   On the other hand, as the Android platform and specific device
   implementations continue to evolve, an OpenSL ES application can expect to
   benefit from any future system performance improvements.

   One such evolution is support for reduced `audio output latency <#>`__. The
   underpinnings for reduced output latency were first included in Android 4.1
   (API level 16), and then continued progress occurred in Android 4.2 (API
   level 17). These improvements are available via OpenSL ES for device
   implementations that claim feature ``android.hardware.audio.low_latency``. If
   the device doesn't claim this feature but supports Android 2.3 (API level 9)
   or later, then you can still use the OpenSL ES APIs but the output latency
   may be higher. The lower output latency path is used only if the application
   requests a buffer size and sample rate that are compatible with the device's
   native output configuration. These parameters are device-specific and should
   be obtained as described below.

   Beginning with Android 4.2 (API level 17), an application can query for the
   platform native or optimal output sample rate and buffer size for the
   device's primary output stream. When combined with the feature test just
   mentioned, an app can now configure itself appropriately for lower latency
   output on devices that claim support.

   For Android 4.2 (API level 17) and earlier, a buffer count of two or more is
   required for lower latency. Beginning with Android 4.3 (API level 18), a
   buffer count of one is sufficient for lower latency.

   All OpenSL ES interfaces for output effects preclude the lower latency path.

   The recommended sequence is as follows:

   #. Check for API level 9 or higher to confirm the use of OpenSL ES.
   #. Check for the ``android.hardware.audio.low_latency`` feature using code
      such as this:

      .. container::

         .. container:: ds-selector-tabs

            .. container:: section

               .. rubric:: Kotlin
                  :name: kotlin

               .. code:: prettyprint

                  import android.content.pm.PackageManager
                  ...
                  val pm: PackageManager = context.packageManager
                  val claimsFeature: Boolean = pm.hasSystemFeature(PackageManager.FEATURE_AUDIO_LOW_LATENCY)

            .. container:: section

               .. rubric:: Java
                  :name: java

               .. code:: prettyprint

                  import android.content.pm.PackageManager;
                  ...
                  PackageManager pm = getContext().getPackageManager();
                  boolean claimsFeature = pm.hasSystemFeature(PackageManager.FEATURE_AUDIO_LOW_LATENCY);

   #. Check for API level 17 or higher to confirm the use of
      ``android.media.AudioManager.getProperty()``.
   #. Get the native or optimal output sample rate and buffer size for this
      device's primary output stream using code such as this:

      .. container::

         .. container:: ds-selector-tabs

            .. container:: section

               .. rubric:: Kotlin
                  :name: kotlin

               .. code:: prettyprint

                  import android.media.AudioManager
                  ...
                  val am = getSystemService(Context.AUDIO_SERVICE) as AudioManager
                  val sampleRate: String = am.getProperty(AudioManager.PROPERTY_OUTPUT_SAMPLE_RATE)
                  val framesPerBuffer: String = am.getProperty(AudioManager.PROPERTY_OUTPUT_FRAMES_PER_BUFFER)

            .. container:: section

               .. rubric:: Java
                  :name: java

               .. code:: prettyprint

                  import android.media.AudioManager;
                  ...
                  AudioManager am = (AudioManager) getSystemService(Context.AUDIO_SERVICE);
                  String sampleRate = am.getProperty(AudioManager.PROPERTY_OUTPUT_SAMPLE_RATE);
                  String framesPerBuffer = am.getProperty(AudioManager.PROPERTY_OUTPUT_FRAMES_PER_BUFFER);

      Note that ``sampleRate`` and ``framesPerBuffer`` are *strings*. First
      check for null and then convert to int using ``Integer.parseInt()``.
   #. Now use OpenSL ES to create an AudioPlayer with PCM buffer queue data
      locator.

   **Note:** You can use the `Audio Buffer Size <https://play.google.com/store/apps/details?id=com.levien.audiobuffersize>`__
   test app to determine the native buffer size and sample rate for OpenSL ES
   audio applications on your audio device. You can also visit GitHub to view
   `audio-buffer-size <https://github.com/gkasten/high-performance-audio/tree/master/audio-buffer-size>`__
   samples.

   The number of lower latency audio players is limited. If your application
   requires more than a few audio sources, consider mixing your audio at the
   application level. Be sure to destroy your audio players when your activity
   is paused, as they are a global resource shared with other apps.

   To avoid audible glitches, the buffer queue callback handler must execute
   within a small and predictable time window. This typically implies no
   unbounded blocking on mutexes, conditions, or I/O operations. Instead
   consider *try locks*, locks and waits with timeouts, and `non-blocking algorithms <https://source.android.google.cn/devices/audio/avoiding_pi.html#nonBlockingAlgorithms>`__.

   The computation required to render the next buffer (for AudioPlayer) or
   consume the previous buffer (for AudioRecord) should take approximately the
   same amount of time for each callback. Avoid algorithms that execute in a
   non-deterministic amount of time or are *bursty* in their computations. A
   callback computation is bursty if the CPU time spent in any given callback is
   significantly larger than the average. In summary, the ideal is for the CPU
   execution time of the handler to have variance near zero, and for the handler
   to not block for unbounded times.

   Lower latency audio is possible for these outputs only:

   -  On-device speakers.
   -  Wired headphones.
   -  Wired headsets.
   -  Line out.
   -  `USB digital audio <https://source.android.google.cn/devices/audio/usb.html>`__.

   On some devices, speaker latency is higher than other paths due to digital
   signal processing for speaker correction and protection.

   As of Android 5.0 (API Level 21), `lower latency audio input <#>`__ is supported on
   select devices. To take advantage of this feature, first confirm that lower
   latency output is available as described above. The capability for lower
   latency output is a prerequisite for the lower latency input feature. Then,
   create an AudioRecorder with the same sample rate and buffer size as would be
   used for output. OpenSL ES interfaces for input effects preclude the lower
   latency path. The record preset
   ``SL_ANDROID_RECORDING_PRESET_VOICE_RECOGNITION`` must be used for lower
   latency; this preset disables device-specific digital signal processing that
   may add latency to the input path. For more information on record presets,
   see the `Android configuration interface <#>`__
   section above.

   For simultaneous input and output, separate buffer queue completion handlers
   are used for each side. There is no guarantee of the relative order of these
   callbacks, or the synchronization of the audio clocks, even when both sides
   use the same sample rate. Your application should buffer the data with proper
   buffer synchronization.

   One consequence of potentially independent audio clocks is the need for
   asynchronous sample rate conversion. A simple (though not ideal for audio
   quality) technique for asynchronous sample rate conversion is to duplicate or
   drop samples as needed near a zero-crossing point. More sophisticated
   conversions are possible.

   .. rubric:: Performance modes
      :name: performancemodes
      :class: hide-from-toc

   Starting with Android 7.1 (API Level 25) OpenSL ES introduced a way to
   specify a performance mode for the audio path. The options are:

   -  ``SL_ANDROID_PERFORMANCE_NONE``: No specific performance requirement.
      Allows hardware and software effects.
   -  ``SL_ANDROID_PERFORMANCE_LATENCY``: Priority is given to latency. No
      hardware or software effects. This is the default mode.
   -  ``SL_ANDROID_PERFORMANCE_LATENCY_EFFECTS``: Priority is given to latency
      while still allowing hardware and software effects.
   -  ``SL_ANDROID_PERFORMANCE_POWER_SAVING``: Priority given to conserving
      power. Allows hardware and software effects.

   **Note:** If you do not require a low latency path and wish to take advantage
   of the device's built-in audio effects (for example to improve acoustic
   quality for video playback), you must explicitly set the performance mode to
   ``SL_ANDROID_PERFORMANCE_NONE``.

   To set the performance mode, you must call ``SetConfiguration`` using the
   Android configuration interface, as shown below:

   .. code:: prettyprint

        // Obtain the Android configuration interface using a previously configured SLObjectItf.
        SLAndroidConfigurationItf configItf = nullptr;
        (*objItf)->GetInterface(objItf, SL_IID_ANDROIDCONFIGURATION, &configItf);

        // Set the performance mode.
        SLuint32 performanceMode = SL_ANDROID_PERFORMANCE_NONE;
          result = (*configItf)->SetConfiguration(configItf, SL_ANDROID_KEY_PERFORMANCE_MODE,
                                                           &performanceMode, sizeof(performanceMode));

   .. rubric:: Security and permissions
      :name: sandp

   As far as who can do what, security in Android is done at the process level.
   Java programming language code cannot do anything more than native code, nor
   can native code do anything more than Java programming language code. The
   only differences between them are the available APIs.

   Applications using OpenSL ES must request the permissions that they would
   need for similar non-native APIs. For example, if your application records
   audio, then it needs the ``android.permission.RECORD_AUDIO`` permission.
   Applications that use audio effects need
   ``android.permission.MODIFY_AUDIO_SETTINGS``. Applications that play network
   URI resources need ``android.permission.NETWORK``. For more information see
   `Working with System Permissions <https://developer.android.google.cn/training/permissions/index.html>`__.

   Depending on the platform version and implementation, media content parsers
   and software codecs may run within the context of the Android application
   that calls OpenSL ES (hardware codecs are abstracted but are
   device-dependent). Malformed content designed to exploit parser and codec
   vulnerabilities is a known attack vector. We recommend that you play media
   only from trustworthy sources or that you partition your application such
   that code that handles media from untrustworthy sources runs in a relatively
   *sandboxed* environment. For example, you could process media from
   untrustworthy sources in a separate process. Though both processes would
   still run under the same UID, this separation does make an attack more
   difficult.

Last updated 2024-01-03 UTC.

/Native MIDI API
================

.. https://developer.android.google.cn/ndk/guides/audio/midi?hl=en

.. container:: devsite-article-body clearfix

   The `AMidi <#>`__ API is available in Android NDK
   r20b and later. It gives app developers the ability to send and receive MIDI
   data with C/C++code.

   Android MIDI apps usually use the
   `midi <#>`__ API to
   communicate with the Android MIDI service. MIDI apps primarily depend on the
   `MidiManager <#>`__ to discover,
   open, and close one or more
   `MidiDevice <#>`__ objects, and
   pass data to and from each device via the device's MIDI
   `input <#>`__ and
   `output <#>`__ ports:

   |image-midi|

   When you use AMidi you pass the address of a ``MidiDevice`` to the native
   code layer with a JNI call. From there, AMidi creates a reference to an
   ``AMidiDevice`` which has most of the functionality of a ``MidiDevice``. Your
   native code uses `AMidi functions <#>`__
   that communicate directly with an ``AMidiDevice`` The ``AMidiDevice``
   connects directly to the MIDI service:

   |image-amidi|

   Using AMidi calls, you can integrate your app's C/C++ audio/control logic
   closely with MIDI transmission. There is less need for JNI calls, or
   callbacks to the Java side of your app. For example, a digital synthesizer
   implemented in C code could receive key events directly from an
   ``AMidiDevice``, rather than waiting for a JNI call to send the events down
   from the Java side. Or an algorithmic composing process could send a MIDI
   performance directly to an ``AMidiDevice`` without calling back up to the
   Java side to transmit the key events.

   Although AMidi improves the direct connection to MIDI devices, apps must
   still use the ``MidiManager`` to discover and open ``MidiDevice`` objects.
   AMidi can take it from there.

   Sometimes you might need to pass information from the UI layer down to the
   native code. For example, when MIDI events are sent in response to buttons on
   the screen. To do this create custom JNI calls to your native logic. If you
   need to send data back to update the UI, you can call back from the native
   layer as usual.

   This document shows how to set up an AMidi native code app, giving examples
   of both sending and receiving MIDI commands. For a complete working example
   check out the
   `NativeMidi <https://github.com/android/ndk-samples/tree/main/native-midi>`__
   sample app.

   .. rubric:: Use AMidi
      :name: using_amidi

   All apps that use AMidi have the same setup and closing steps, whether they
   send or receive MIDI, or both.

   .. rubric:: Start AMidi
      :name: starting_amidi

   On the Java side, the app must discover an attached piece of MIDI hardware,
   create a corresponding ``MidiDevice``, and pass it to the native code.

   #. Discover MIDI hardware with the Java ``MidiManager`` class.
   #. Obtain a Java ``MidiDevice`` object corresponding to the MIDI hardware.
   #. Pass the Java ``MidiDevice`` to native code with JNI.

   .. rubric:: Discover hardware and ports
      :name: discover_hardware_and_ports

   The input and output port objects do not belong to the app. They represent
   ports *on the midi device*. To send MIDI data to a device, an app opens a
   ``MIDIInputPort`` and then writes data to it. Conversely, to receive data, an
   app opens a ``MIDIOutputPort``. To work properly, the app must be sure the
   ports it opens are the correct type. Device and port discovery are done on
   the Java side.

   Here is a method which discovers each MIDI device and looks at its ports. It
   returns either a list of devices with output ports for receiving data, or a
   list of devices with input ports for sending data. A MIDI device can have
   both input ports and output ports.

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               private fun getMidiDevices(isOutput: Boolean) : List {
                   if (isOutput) {
                       return mMidiManager.devices.filter { it.outputPortCount > 0 }
                   } else {
                       return mMidiManager.devices.filter { it.inputPortCount > 0 }
                   }
               }

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               private List getMidiDevices(boolean isOutput){
                 ArrayList filteredMidiDevices = new ArrayList<>();

                 for (MidiDeviceInfo midiDevice : mMidiManager.getDevices()){
                   if (isOutput){
                     if (midiDevice.getOutputPortCount() > 0) filteredMidiDevices.add(midiDevice);
                   } else {
                     if (midiDevice.getInputPortCount() > 0) filteredMidiDevices.add(midiDevice);
                   }
                 }
                 return filteredMidiDevices;
               }

   To use AMidi functions in your C/C++ code you must include ``AMidi/AMidi.h``
   and link against the ``amidi`` library. These can be both be found in the
   `Android NDK <#>`__.

   The Java side should pass one or more ``MidiDevice`` objects and port numbers
   to the native layer via a JNI call. The native layer should then perform the
   following steps:

   #. For each Java ``MidiDevice`` obtain an ``AMidiDevice`` using
      ``AMidiDevice_fromJava()``.
   #. Obtain an ``AMidiInputPort`` and/or ``AMidiOutputPort`` from the
      ``AMidiDevice`` with ``AMidiInputPort_open()`` and/or
      ``AMidiOutputPort_open()``.
   #. Use the obtained ports to send and/or receive MIDI data.

   .. rubric:: Stop AMidi
      :name: stopping_amidi

   The Java app should signal the native layer to release resources when it is
   no longer using the MIDI device. This could be because the MIDI device was
   disconnected or because the app is exiting.

   To release MIDI resources, your code should perform these tasks:

   #. Stop reading and/or writing to MIDI ports. If you were using a reading
      thread to poll for input (see `Implement a polling loop <#polling>`__
      below), stop the thread.
   #. Close any open ``AMidiInputPort`` and/or ``AMidiOutputPort`` objects with
      ``AMidiInputPort_close()`` and/or ``AMidiOutputPort_close()`` functions.
   #. Release the ``AMidiDevice`` with ``AMidiDevice_release()``.

   .. rubric:: Receive MIDI data
      :name: receiving_midi_data

   A typical example of a MIDI app that receives MIDI is a "virtual synthesizer"
   that receives MIDI performance data to control audio synthesis.

   Incoming MIDI data is received asynchronously. Therefore, it's best to read
   MIDI in a separate thread that continuously polls one or MIDI output ports.
   This could be a background thread, or an audio thread. AMidi does not block
   when reading from a port and is therefore safe to use inside an audio
   callback.

   .. rubric:: Set up a MidiDevice and its output ports
      :name: setting_up_a_mididevice_and_its_output_ports

   An app reads incoming MIDI data from a device's output ports. The Java side
   of your app must determine which device and ports to use.

   This snippet creates the ``MidiManager`` from Android's MIDI service and
   opens a ``MidiDevice`` for the first device it finds. When the ``MidiDevice``
   has been opened a callback is received to an instance of
   ``MidiManager.OnDeviceOpenedListener()``. The ``onDeviceOpened`` method of
   this listener is called which then calls ``startReadingMidi()`` to open
   output port 0 on the device. This is a JNI function defined in
   ``AppMidiManager.cpp``. This function is explained in the next snippet.

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               //AppMidiManager.kt
               class AppMidiManager(context : Context) {
                 private external fun startReadingMidi(midiDevice: MidiDevice,
                 portNumber: Int)
                 val mMidiManager : MidiManager = context.getSystemService(Context.MIDI_SERVICE) as MidiManager

                 init {
                   val midiDevices = getMidiDevices(true) // method defined in snippet above
                   if (midiDevices.isNotEmpty()){
                     midiManager.openDevice(midiDevices[0], {
                       startReadingMidi(it, 0)
                     }, null)
                   }
                 }
               }

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               //AppMidiManager.java
               public class AppMidiManager {
                 private native void startReadingMidi(MidiDevice device, int portNumber);
                 private MidiManager mMidiManager;
                 AppMidiManager(Context context){
                   mMidiManager = (MidiManager)
                     context.getSystemService(Context.MIDI_SERVICE);
                   List midiDevices = getMidiDevices(true); // method defined in snippet above
                   if (midiDevices.size() > 0){
                     mMidiManager.openDevice(midiDevices.get(0),
                       new MidiManager.OnDeviceOpenedListener() {
                       @Override
                       public void onDeviceOpened(MidiDevice device) {
                         startReadingMidi(device, 0);
                       }
                     },null);
                   }
                 }
               }

   The native code translates the Java-side MIDI device and its ports into
   references used by AMidi functions.

   Here is the JNI function that creates an ``AMidiDevice`` by calling
   ``AMidiDevice_fromJava()``, and then calls ``AMidiOutputPort_open()`` to open
   an output port on the device:

   **AppMidiManager.cpp**

   .. code:: prettyprint

      AMidiDevice midiDevice;
      static pthread_t readThread;

      static const AMidiDevice* midiDevice = AMIDI_INVALID_HANDLE;
      static std::atomic<AMidiOutputPort*> midiOutputPort(AMIDI_INVALID_HANDLE);

      void Java_com_nativemidiapp_AppMidiManager_startReadingMidi(
              JNIEnv* env, jobject, jobject deviceObj, jint portNumber) {
          AMidiDevice_fromJava(j_env, deviceObj, &midiDevice);

          AMidiOutputPort* outputPort;
          int32_t result =
            AMidiOutputPort_open(midiDevice, portNumber, &outputPort);
          // check for errors...

          // Start read thread
          int pthread_result =
            pthread_create(&readThread, NULL, readThreadRoutine, NULL);
          // check for errors...

      }

   .. rubric:: Implement a polling loop
      :name: polling

   Apps that receive MIDI data must poll the output port and respond when
   ``AMidiOutputPort_receive()`` returns a number greater than zero.

   For low-bandwidth apps, like a MIDI scope, you can poll in a low-priority
   background thread (with appropriate sleeps).

   For apps that generate audio and have stricter realtime performance
   requirements, you can poll in the main audio generation callback (the
   ``BufferQueue`` callback for OpenSL ES, the AudioStream data callback in
   AAudio). Since ``AMidiOutputPort_receive()`` is non-blocking, there is very
   little performance impact.

   The function ``readThreadRoutine()`` called from the ``startReadingMidi()``
   function above might look like this:

   .. code:: prettyprint

      void* readThreadRoutine(void * /*context*/) {
          uint8_t inDataBuffer[SIZE_DATABUFFER];
          int32_t numMessages;
          uint32_t opCode;
          uint64_t timestamp;
          reading = true;
          while (reading) {
              AMidiOutputPort* outputPort = midiOutputPort.load();
              numMessages =
                    AMidiOutputPort_receive(outputPort, &opCode, inDataBuffer,
                                      sizeof(inDataBuffer), &timestamp);
              if (numMessages >= 0) {
                  if (opCode == AMIDI_OPCODE_DATA) {
                      // Dispatch the MIDI data….
                  }
              } else {
                  // some error occurred, the negative numMessages is the error code
                  int32_t errorCode = numMessages;
              }
        }
      }

   An app using a native audio API (like OpenSL ES, or AAudio) can add MIDI
   receive code to the audio generation callback like this:

   .. code:: prettyprint

      void bqPlayerCallback(SLAndroidSimpleBufferQueueItf bq, void */*context*/)
      {
          uint8_t inDataBuffer[SIZE_DATABUFFER];
          int32_t numMessages;
          uint32_t opCode;
          uint64_t timestamp;

          // Read MIDI Data
          numMessages = AMidiOutputPort_receive(outputPort, &opCode, inDataBuffer,
              sizeof(inDataBuffer), &timestamp);
          if (numMessages >= 0 && opCode == AMIDI_OPCODE_DATA) {
              // Parse and respond to MIDI data
              // ...
          }

          // Generate Audio…
          // ...
      }

   The following diagram illustrates the flow of a MIDI reading app:

   |image-midi-reading-flow|

   .. rubric:: Send MIDI data
      :name: sending_midi_data

   A typical example of a MIDI writing app is a MIDI controller or sequencer.

   .. rubric:: Set up a MidiDevice and its input ports
      :name: setting_up_a_mididevice_and_its_input_ports

   An app writes outgoing MIDI data to a MIDI device's input ports. The Java
   side of your app must determine which MIDI device and ports to use.

   This setup code below is a variation on the receiving example above. It
   creates the ``MidiManager`` from Android's MIDI service. It then opens the
   first\ ``MidiDevice`` it finds and calls ``startWritingMidi()`` to open the
   first input port on the device. This is a JNI call defined in
   ``AppMidiManager.cpp``. The function is explained in the next snippet.

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               //AppMidiManager.kt
               class AppMidiManager(context : Context) {
                 private external fun startWritingMidi(midiDevice: MidiDevice,
                 portNumber: Int)
                 val mMidiManager : MidiManager = context.getSystemService(Context.MIDI_SERVICE) as MidiManager

                 init {
                   val midiDevices = getMidiDevices(false) // method defined in snippet above
                   if (midiDevices.isNotEmpty()){
                     midiManager.openDevice(midiDevices[0], {
                       startWritingMidi(it, 0)
                     }, null)
                   }
                 }
               }

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               //AppMidiManager.java
               public class AppMidiManager {
                 private native void startWritingMidi(MidiDevice device, int portNumber);
                 private MidiManager mMidiManager;

                 AppMidiManager(Context context){
                   mMidiManager = (MidiManager)
                     context.getSystemService(Context.MIDI_SERVICE);
                   List midiDevices = getMidiDevices(false); // method defined in snippet above
                   if (midiDevices.size() > 0){
                     mMidiManager.openDevice(midiDevices.get(0),
                       new MidiManager.OnDeviceOpenedListener() {
                       @Override
                       public void onDeviceOpened(MidiDevice device) {
                         startWritingMidi(device, 0);
                       }
                     },null);
                   }
                 }
               }

   Here is the JNI function that creates an ``AMidiDevice`` by calling
   ``AMidiDevice_fromJava()``, and then calls ``AMidiInputPort_open()`` to open
   an input port on the device:

   **AppMidiManager.cpp**

   .. code:: prettyprint

      void Java_com_nativemidiapp_AppMidiManager_startWritingMidi(
             JNIEnv* env, jobject, jobject midiDeviceObj, jint portNumber) {
         media_status_t status;
         status = AMidiDevice_fromJava(
           env, midiDeviceObj, &sNativeSendDevice);
         AMidiInputPort *inputPort;
         status = AMidiInputPort_open(
           sNativeSendDevice, portNumber, &inputPort);

         // store it in a global
         sMidiInputPort = inputPort;
      }

   .. rubric:: Send MIDI data
      :name: sending_midi_data_2

   Since the timing of the outgoing MIDI data is well understood and controlled
   by the app itself, the data transmission can be done in the MIDI app's main
   thread. However, for performance reasons (as in a sequencer) the generation
   and transmission of MIDI can be done in a separate thread.

   Apps can send MIDI data whenever required. Note that AMidi blocks when
   writing data.

   Here is an example JNI method that receives a buffer of MIDI commands and
   writes it out:

   .. code:: prettyprint

      void Java_com_nativemidiapp_TBMidiManager_writeMidi(
      JNIEnv* env, jobject, jbyteArray data, jint numBytes) {
         jbyte* bufferPtr = env->GetByteArrayElements(data, NULL);
         AMidiInputPort_send(sMidiInputPort, (uint8_t*)bufferPtr, numBytes);
         env->ReleaseByteArrayElements(data, bufferPtr, JNI_ABORT);
      }

   The following diagram illustrates the flow of a MIDI writing app:

   |image-midi-producing-flow|

   .. rubric:: Callbacks
      :name: callbacks

   Though not strictly an AMidi feature, your native code may need to pass data
   back to the Java side (to update the UI for example). To do that, you must
   write code in the Java side and the native layer:

   -  Create a callback method on the Java side.
   -  Write a JNI function that stores the information needed to invoke the
      callback.

   When its time to callback, your native code can construct

   Here is the Java-side callback method, ``onNativeMessageReceive()``:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               //MainActivity.kt
               private fun onNativeMessageReceive(message: ByteArray) {
                 // Messages are received on some other thread, so switch to the UI thread
                 // before attempting to access the UI
                 runOnUiThread { showReceivedMessage(message) }
               }

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               //MainActivity.java
               private void onNativeMessageReceive(final byte[] message) {
                       // Messages are received on some other thread, so switch to the UI thread
                       // before attempting to access the UI
                       runOnUiThread(new Runnable() {
                           public void run() {
                               showReceivedMessage(message);
                           }
                       });
               }

   Here is the C code for the JNI function that sets up thea callback to
   ``MainActivity.onNativeMessageReceive()``. Java ``MainActivity`` calls
   ``initNative()`` at startup:

   **MainActivity.cpp**

   .. code:: prettyprint

      /**
       * Initializes JNI interface stuff, specifically the info needed to call back into the Java
       * layer when MIDI data is received.
       */
      JNICALL void Java_com_example_nativemidi_MainActivity_initNative(JNIEnv * env, jobject instance) {
          env->GetJavaVM(&theJvm);

          // Setup the receive data callback (into Java)
          jclass clsMainActivity = env->FindClass("com/example/nativemidi/MainActivity");
          dataCallbackObj = env->NewGlobalRef(instance);
          midDataCallback = env->GetMethodID(clsMainActivity, "onNativeMessageReceive", "([B)V");
      }

   When it's time to send data back to Java, the native code retrieves the
   callback pointers and constructs the callback:

   **AppMidiManager.cpp**

   .. code:: prettyprint

      // The Data Callback
      extern JavaVM* theJvm;              // Need this for allocating data buffer for...
      extern jobject dataCallbackObj;     // This is the (Java) object that implements...
      extern jmethodID midDataCallback;   // ...this callback routine

      static void SendTheReceivedData(uint8_t* data, int numBytes) {
          JNIEnv* env;
          theJvm->AttachCurrentThread(&env, NULL);
          if (env == NULL) {
              LOGE("Error retrieving JNI Env");
          }

          // Allocate the Java array and fill with received data
          jbyteArray ret = env->NewByteArray(numBytes);
          env->SetByteArrayRegion (ret, 0, numBytes, (jbyte*)data);

          // send it to the (Java) callback
          env->CallVoidMethod(dataCallbackObj, midDataCallback, ret);
      }

   .. rubric:: Additional resources
      :name: additional_resources

   -  `AMidi reference <#>`__
   -  See the complete `Native MIDI sample app <https://github.com/android/ndk-samples/tree/main/native-midi>`__ on
      github.

Last updated 2024-05-03 UTC.

.. |image-midi| image:: https://developer.android.google.cn/static/ndk/images/midi/midi.svg
.. |image-amidi| image:: https://developer.android.google.cn/static/ndk/images/midi/amidi.svg
.. |image-midi-reading-flow| image:: https://developer.android.google.cn/static/ndk/images/midi/midi-reading-flow.png
.. |image-midi-producing-flow| image:: https://developer.android.google.cn/static/ndk/images/midi/midi-producing-flow.png

/Additional resources
=====================

.. https://developer.android.google.cn/ndk/guides/audio/additional-resources?hl=en

.. container:: devsite-article-body clearfix

   .. rubric:: Sample
      :name: samples

   `Oboe Samples <https://github.com/google/oboe/tree/master/samples>`__
   .. rubric:: Codelabs
      :name: codelabs

   `Making Waves Part 1 - Build a Synthesizer <https://developers.google.cn/codelabs/codelabs/making-waves-1-synth/index.html>`__
   `Making More Waves - Sampler <https://developers.google.cn/codelabs/codelabs/making-waves-2-sampler/index.html>`__
   `Build a Musical Game using Oboe <https://developers.google.cn/codelabs/codelabs/musicalgame-using-oboe/index.html>`__
   .. rubric:: Videos
      :name: videos

   `Getting Started with Oboe <http://bit.ly/Introducing-Oboe>`__
   `Best Practices for Android Audio (Google I/O '17) <https://www.youtube.com/watch?v=C0BPXZIvG-Q>`__

Last updated 2020-08-17 UTC.

/Intro: Vulkan
==============

.. https://developer.android.google.cn/ndk/guides/graphics?hl=en

.. container:: devsite-article-body clearfix

   The Android platform includes an Android-specific implementation of the
   `Vulkan <https://www.khronos.org/vulkan/>`__ API specification from the
   Khronos Group. Vulkan is a low-overhead, cross-platform API for
   high-performance, 3D graphics. It provides tools for creating high-quality,
   real-time graphics in applications. Vulkan also provides advantages such as
   reducing CPU overhead and providing support for the `SPIR-V Binary Intermediate language <https://www.khronos.org/spir>`__.

   This section begins with information on how to `get started <#>`__ using Vulkan in your
   Android app. Next, it provides useful information that you should know about
   `Vulkan design guidelines <#>`__ on the
   Android platform. From there, it explains how to use Vulkan's `shader compilers <#>`__. Last, it teaches you
   how to use `validation layers <#>`__ to
   help assure stability in apps using Vulkan.

   For more general information about this cross-platform API specification, see
   Khronos's `Vulkan Overview <http://khr.io/vulkanlaunchoverview>`__. You can
   also keep up with the latest Vulkan-related developments at the Vulkan `news page <https://www.khronos.org/#slider_vulkan>`__.

Last updated 2020-08-17 UTC.

/Get started
============

.. https://developer.android.google.cn/ndk/guides/graphics/getting-started?hl=en

.. container:: devsite-article-body clearfix

   **Note:**\  Although this page includes
   `NativeActivity <#>`__ description,
   `GameActivity inside AGDK jetpack library <#>`__ is an updated and well
   maintained implementation of ``NativeActivity``, with more functionality and
   fast release cycles. It is highly recommended to use ``GameActivity`` for
   your new projects.
   This document outlines how to get started with the Vulkan graphics library by
   downloading, compiling, and running Khronos© sample app.

   .. rubric:: Prerequisites
      :name: preparing

   Before beginning, make sure you have the right hardware and platform version
   prepared. You should use a device or an `emulator <#>`__
   that supports Vulkan, running Android 7.0 (Nougat), API level 24 or higher.

   You can confirm your Android version by going to the **Settings** menu, and
   selecting **About phone** > **Android Version**. Once you’ve confirmed that
   you have the right hardware and platform version set up, you can download the
   necessary software.

   .. rubric:: Download
      :name: downloading

   Before getting started, you must download several tools and other software.
   Note that on a Windows host, it is recommended that you avoid a deep file
   path hierarchy for tools and source code; this is to work around file path
   limits on some Windows OS versions.

   #. If you don’t already have Android Studio, `download it <#>`__. This
      includes the most recent Android SDK.
   #. `Install the NDK and CMake <#>`__ from within
      Android Studio or `download and install <#>`__ them
      separately.
   #. Build and Run the `Hello JNI sample <https://github.com/android/ndk-samples/tree/main/hello-jni>`__ to
      ensure Android Studio is working properly.
   #. Install python3 and other components listed in
      `build.md <https://github.com/KhronosGroup/Vulkan-Samples/blob/main/docs/build.adoc#android>`__
      for your host platform.

   .. rubric:: Import
      :name: creating

   In this section, you download `the Khronos© Vulkan© sample repository <https://github.com/KhronosGroup/Vulkan-Samples/>`__, generate an
   Android gradle project, then open it with the Android Studio IDE.

   #. Set the following environment variables:

      .. code:: none

         export ANDROID_HOME=/path/to/sdk-directory
         export ANDROID_NDK_HOME=$ANDROID_HOME/ndk/{your-ndk-version-dir}

   #. Add CMake to the $PATH, which is used to generate Android build scripts:

      .. code:: none

         export PATH=$PATH:$ANDROID_HOME/cmake/{your-cmake-version}/bin

   #. Open a terminal and download the source code to your development
      directory:

      .. code:: none

         cd dev-directory
         git clone --recursive https://github.com/KhronosGroup/Vulkan-Samples.git

   #. Follow these instructions (from
      `Build.md <https://github.com/KhronosGroup/Vulkan-Samples/blob/master/docs/build.md#android>`__)
      to generate the Android sample project:

      .. code:: none

         cd Vulkan-Samples
         ./scripts/generate.py android

   #. Open Android Studio. Choose **File > Open** and select
      ``Vulkan-Samples/build/android_gradle/build.gradle``. You should see
      something similar to the following after Android Studio loads the project:

      .. container:: attempt-center

         |Importing sample project to Studio.|
         **Figure 1.** The sample project inside Android Studio.

   .. rubric:: Compile
      :name: compiling

   All samples in this repo are organized into one Android project. To compile
   the project, do one of the following:

   -  To just compile the sources, use menu, **Build** > **Make Project**, or
      type the **Ctrl-F9** shortcut key.
   -  To generate the sample APK, select menu **Build** > **Build
      Bundle(s)/APK(s)** > **Build APK(s)**.

   You should see the build successful message inside Android Studio's **Build**
   window. In case there are errors showing up, fix them and re-compile.

   .. container:: attempt-center

      |Compiling sample project with Studio.|
      **Figure 2.** A successful sample build.

   .. rubric:: Execute
      :name: running

   Before running the sample project, make sure Android Studio recognizes your
   connected Vulkan device or Android Emulator. You should see something like
   the following:

   .. container:: attempt-center

      |Connecting test device to Studio.|
      **Figure 3.** Connect the test device to Android Studio.

   To run the project, do the following:

   #. Use menu **Run > Run vulkan_sample**, or click on the run button |image-vk-guide-run-button|
      on the toolbar, and wait for the sample to get installed and started on
      your connected device.
   #. On your connected Android device, authorize the needed access requests.

      -  enable **Allow access to manage all files**, then tap the arrow **Back
         button** to return the sample main start screen.
      -  allow the disk access:

         .. container:: attempt-center

            |allowing disk access.|
            **Figure 4.** Enable disk access.

   #. You should see the sample main menu screen, similar to the following:

      .. container:: attempt-center

         |sample main menu.|
         **Figure 5.** Sample main menu.

   #. Browse through the sample list, and select a few to run. If you are new to
      Vulkan development, you can start with “API” samples. For example, tapping
      “Hello Triangle” should display a rendered triangle similar to the
      following:

      .. container:: attempt-center

         |Triangle|
         **Figure 6.** Hello Triange sample.

   Your development system is now set up to run samples on your test device.

   Vulkan Samples are developed for multiple operating systems, including those
   for desktop and mobile. Some samples under **Performance**, **Extensions**,
   and **Tooling** may be unstable and crash on your device. This might be due
   to various reasons, such as:

   -  The specific Vulkan features weren't designed for Android.
   -  Your Android OS version is unsupported.
   -  The GPU capability of your hardware platform.

   .. rubric:: Explore
      :name: exploring

   The Java section of the Vulkan sample derives from the
   `NativeActivity <#>`__ class. It passes
   typical application lifecycle events, such as app creation, start, stop, and
   destroy to the C/C++ code. In the C/C++ section of the sample, there is a
   sample framework that implements the run-time sub sample switching
   functionality. At a very high level, Android system events/messages go
   through the following path to reach the sample app's Vulkan code:

   -  ``NativeSampleActivity`` Java section
   -  ``NativeSampleActivity`` C/C++ section
   -  ``android_native_glue`` code
   -  ``android_main``
   -  Sample framework
   -  Individual sub sample’s code

   ``android_main`` is the bridge between ``NativeSampleActivity`` and the app
   code, which can be the starting point for you to follow the sample code. If
   you just want to focus on the Vulkan specific sources, you can explore the
   code under ``Vulkan_Samples\samples``, which contains the following:

   -  The “api” category samples.
   -  The “performance” category samples.
   -  The “extensions” category samples.
   -  The “tooling” samples.

   The ``Vulkan_Samples\shaders`` are the home for all shaders.

   You can start browsing the “API” category samples to get familiar with basic
   Vulkan usage and the sample framework. Then you can progress to the
   “Performance” and “Extenstions” category samples. For shader code, you can
   use the **Project** view in Android Studio.

   .. container:: attempt-center

      |Triangle shader.|
      **Figure 7.** Explore shader with Studio.

   .. rubric:: Additional resources
      :name: advancing

   The Vulkan API has been through a few versions, so it is maturing. The Vulkan
   standard committee and the Vulkan community have created a rich set of Vulkan
   material that demonstrates the API's usage and best practices. The following
   list contains some resources for Vulkan application development:

   -  **Vulkan Specification.** The Khronos Group maintains the Vulkan
      specification. See the `Vulkan homepage <https://www.khronos.org/vulkan>`__ for the full specification,
      training, `guides <https://github.com/KhronosGroup/Vulkan-Guide>`__ and
      `tutorials <https://www.vulkan.org/learn#key-resources>`__.

   -  **Validation Layers.** Validation Layers are essential for application
      development. See the `Vulkan validation layers on Android <#>`__ documentation for
      details.

   -  **Shaderc.** Shaderc code in the NDK is the downstream of the `Shaderc repo <https://github.com/google/shaderc>`__. For the usage documentation
      and instructions to get the latest version, see `Shader compilers <#>`__.

Last updated 2024-05-03 UTC.

.. |Importing sample project to Studio.| image:: https://developer.android.google.cn/ndk/guides/images/vk-guide-init-project.png
   :name: figure1
.. |Compiling sample project with Studio.| image:: https://developer.android.google.cn/ndk/guides/images/vk-guide-compile-project.png
   :name: figure2
.. |Connecting test device to Studio.| image:: https://developer.android.google.cn/ndk/guides/images/vk-guide-test-device.png
   :name: figure3
.. |image-vk-guide-run-button| image:: https://developer.android.google.cn/ndk/guides/images/vk-guide-run-button.png
.. |allowing disk access.| image:: https://developer.android.google.cn/ndk/guides/images/vk-guide-allow-access.png
   :name: figure4
.. |sample main menu.| image:: https://developer.android.google.cn/ndk/guides/images/vk-guide-sample-menu.png
   :name: figure5
.. |Triangle| image:: https://developer.android.google.cn/ndk/guides/images/vk-guide-triangle.png
   :name: figure6
.. |Triangle shader.| image:: https://developer.android.google.cn/ndk/guides/images/vk-guide-shaders.png
   :name: figure7

/Design guidelines
==================

.. https://developer.android.google.cn/ndk/guides/graphics/design-notes?hl=en

.. container:: devsite-article-body clearfix

   Vulkan is unlike earlier graphics APIs in that drivers do not perform certain
   optimizations, such as pipeline reuse, for apps. Instead, apps using Vulkan
   must implement such optimizations themselves. If they do not, they may
   exhibit worse performance than apps running OpenGL ES.

   When apps implement these optimizations themselves, they have the potential
   to do so more successfully than the driver can, because they have access to
   more specific information for a given use case. As a result, skillfully
   optimizing an app that uses Vulkan can yield better performance than if the
   app were using OpenGL ES.

   This page introduces several optimizations that your Android app can
   implement to gain performance boosts from Vulkan.

   .. rubric:: Hardware acceleration
      :name: hardware-acceleration

   Most devices `support Vulkan 1.1 via hardware acceleration <#>`__
   while a small subset support it via software emulation. Apps can detect a
   software-based Vulkan device using ``vkGetPhysicalDeviceProperties`` and
   checking the ``deviceType`` field of the returned structure.
   `SwiftShader <https://github.com/google/swiftshader>`__ and other CPU-based
   implementations have the value ``VK_PHYSICAL_DEVICE_TYPE_CPU``. Apps can
   check specifically for SwiftShader by checking the ``vendorID`` and
   ``deviceID`` fields of this same structure for SwiftShader-specific values.

   Performance-critical apps should avoid using software-emulated Vulkan
   implementations and fall back to OpenGL ES instead.

   .. rubric:: Apply display rotation during rendering
      :name: apply

   When the upward-facing direction of an app doesn’t match the orientation of
   the device’s display, the compositor rotates the app’s swapchain images so
   that it does match. It performs this rotation as it displays the images,
   which results in more power consumption—sometimes significantly more—than if
   it were not rotating them.

   By contrast, rotating swapchain images while generating them results in
   little, if any, additional power consumption. The
   ``VkSurfaceCapabilitiesKHR::currentTransform`` field indicates the rotation
   that the compositor applies to the window. After an app applies that rotation
   during rendering, the app uses the ``VkSwapchainCreateInfoKHR::preTransform``
   field to report that the rotation is complete.

   .. rubric:: Minimize render passes per frame
      :name: minimize

   On most mobile GPU architectures, beginning and ending a render pass is an
   expensive operation. Your app can improve performance by organizing rendering
   operations into as few render passes as possible.

   Different attachment-load and attachment-store ops offer different levels of
   performance. For example, if you do not need to preserve the contents of an
   attachment, you can use the much faster ``VK_ATTACHMENT_LOAD_OP_CLEAR`` or
   ``VK_ATTACHMENT_LOAD_OP_DONT_CARE`` instead of
   ``VK_ATTACHMENT_LOAD_OP_LOAD``. Similarly, if you don't need to write the
   attachment's final values to memory for later use, you can use
   ``VK_ATTACHMENT_STORE_OP_DONT_CARE`` to attain much better performance than
   ``VK_ATTACHMENT_STORE_OP_STORE``.

   Also, in most render passes, your app doesn’t need to load or store the
   depth/stencil attachment. In such cases, you can avoid having to allocate
   physical memory for the attachment by using the
   ``VK_IMAGE_USAGE_TRANSIENT_ATTACHMENT_BIT`` flag when creating the attachment
   image. This bit provides the same benefits as does ``glFramebufferDiscard``
   in OpenGL ES.

   .. rubric:: Choose appropriate memory types
      :name: choose

   When allocating device memory, apps must choose a memory type. Memory type
   determines how an app can use the memory, and also describes caching and
   coherence properties of the memory. Different devices have different memory
   types available; different memory types exhibit different performance
   characteristics.

   An app can use a simple algorithm to pick the best memory type for a given
   use. This algorithm picks the first memory type in the
   ``VkPhysicalDeviceMemoryProperties::memoryTypes`` array that meets two
   criteria: The memory type must be allowed for the buffer or image, and must
   have the minimum properties that the app requires.

   Mobile systems generally don’t have separate physical memory heaps for the
   CPU and GPU. On such systems, ``VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT`` is not
   as significant as it is on systems that have discrete GPUs with their own,
   dedicated memory. An app should not assume this property is required.

   .. rubric:: Group descriptor sets by frequency
      :name: group

   If you have resource bindings that change at different frequencies, use
   multiple descriptor sets per pipeline rather than rebinding all resources for
   each draw. For example, you can have one set of descriptors for per-scene
   bindings, another set for per-material bindings, and a third set for
   per-mesh-instance bindings.

   Use immediate constants for the highest-frequency changes, such as changes
   executed with each draw call.

Last updated 2020-08-17 UTC.

/Shader compilers
=================

.. https://developer.android.google.cn/ndk/guides/graphics/shader-compilers?hl=en

.. container:: devsite-article-body clearfix

   A Vulkan app must manage shaders differently from the way an OpenGL ES app
   does: In OpenGL ES, you provide a shader as a set of strings forming the
   source text of a GLSL shader program. By contrast, the Vulkan API requires
   you to provide a shader in the form of an entry point in a
   `SPIR-V <https://www.khronos.org/spir>`__ module.

   The `NDK Release 12 and later <https://github.com/android-ndk/ndk/wiki>`__
   includes a runtime library for compiling GLSL into SPIR-V. The runtime
   library is the same as the one in the
   `Shaderc <https://github.com/google/shaderc>`__ open source project, and uses
   the same `Glslang GLSL <https://github.com/KhronosGroup/glslang>`__ reference
   compiler as its back end. By default, the Shaderc version of the compiler
   assumes you are compiling for Vulkan. After checking whether your code is
   valid for Vulkan, the compiler automatically enables the ``KHR_vulkan_glsl``
   extension. The Shaderc version of the compiler also generates
   Vulkan-compliant SPIR-V code.

   You can choose to compile SPIR-V modules into your Vulkan app during
   development, a practice called *ahead-of-time*, or *AOT*, compilation.
   Alternatively, you can have your app compile them from shipped or
   procedurally generated shader source when needed during runtime. This
   practice is called *runtime compiling*. Android Studio has integrated support
   to build Vulkan shaders.

   The rest of this page provides more detail about each practice, and then
   explains how to integrate shader compilation into your Vulkan app.

   .. rubric:: AOT compilation
      :name: aot

   There are two ways to achieve shader AOT compilation, described in the
   following sections.

   .. rubric:: Use Android Studio
      :name: asi

   Putting shaders into ``app/src/main/shaders/``, Android Studio recognizes
   shaders by `their file extensions <https://github.com/google/shaderc/tree/main/glslc>`__, and will
   complete the following actions:

   -  Compile all shader files recursively under that directory.
   -  Append the .spv suffix to the compiled SPIR-V shader files.
   -  Pack SPIRV-shaders into the APK's ``assets/shaders/`` directory.

   The application would load the compiled shaders from the corresponding
   ``assets/shaders/`` location at run time; the compiled spv shader file
   structure is the same as the application's GLSL shader file structure under
   ``app/src/main/shaders/``:

   .. code:: prettyprint

      AAsset* file = AAssetManager_open(assetManager,
                           "shaders/tri.vert.spv", AASSET_MODE_BUFFER);
      size_t fileLength = AAsset_getLength(file);
      char* fileContent = new char[fileLength];
      AAsset_read(file, fileContent, fileLength);

   Shaderc compile flags could be configured inside the gradle DSL ``shaders``
   block, as shown in the following example:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Groovy
               :name: groovy

            .. code:: prettyprint

               android {
                 defaultConfig {
                   shaders {
                     glslcArgs.addAll(['-c', '-g'])
                     scopedArgs.create('lights') {
                       glslcArgs.addAll(['-DLIGHT1=1', '-DLIGHT2=0'])
                     }
                   }
                 }
               }

         .. container:: section

            .. rubric:: Kotlin
               :name: kts

            .. code:: prettyprint

               android {
                 defaultConfig {
                   shaders {
                       glslcArgs += listOf("-c", "-g")
                       glslcScopedArgs("lights", "-DLIGHT1=1", "-DLIGHT2=0")
                   }
                 }
               }

   ``glslcArgs`` apply to all shader compilations; ``scopedArgs`` only apply
   when compiling for that scope. The above example creates a scope argument
   ``lights``, which will only apply to GLSL shaders under the
   ``app/src/main/shaders/lights/`` directory. Refer to
   `glslc <https://github.com/google/shaderc/tree/main/glslc>`__ for the
   complete list of available compilation flags. Note that Shaderc inside NDK is
   a snapshot from that github repo at the NDK release time; you can get the
   exact supported flags for that version with the command ``glslc --help``, as
   decribed in the next section.

   .. rubric:: Offline command-line compilation
      :name: occ

   GLSL Shaders can be compiled to SPIR-V independent of the main application
   using the *glslc* command-line compiler. NDK release 12 and later packs a
   version of pre-built *glslc* and related tools in the
   ``<android-ndk-dir>/shader-tools/`` directory to support this usage model.

   The compiler is also available from the
   `Shaderc <https://github.com/google/shaderc>`__ project; follow the
   instructions there to build a binary version.

   *glslc* provides a rich set of `command-line options <https://github.com/google/shaderc/tree/main/glslc>`__ for shader
   compilation to meet various requirements for an application.

   The glslc tool compiles a single-source file to a SPIR-V module with a single
   shader entry point. By default, the output file has the same name as that of
   the source file, but with the ``.spv`` extension appended.

   You use filename extensions to tell the glslc tool which graphics shader
   stage to compile, or whether a compute shader is being compiled. For
   information on how to use these filename extensions, and options you can use
   with the tool, see `Shader stage specification <https://github.com/google/shaderc/tree/main/glslc#user-content-shader-stage-specification>`__
   in the `glslc <https://github.com/google/shaderc/tree/main/glslc>`__ manual.

   .. rubric:: Runtime compilation
      :name: runtime

   For JIT compilation of shaders during runtime, the NDK provides the
   libshaderc library, which has both C and C++ APIs.

   C++ applications should use the C++ API. We recommend that apps in other
   languages use the C API, because the C ABI is lower level, and likely to
   provide better stability.

   The following example shows how to use the C++ API:

   .. code:: cpp

      #include <iostream>
      #include <string>
      #include <vector>
      #include <shaderc/shaderc.hpp>

      std::vector<uint32_t> compile_file(const std::string& name,
                                         shaderc_shader_kind kind,
                                         const std::string& data) {
        shaderc::Compiler compiler;
        shaderc::CompileOptions options;

        // Like -DMY_DEFINE=1
        options.AddMacroDefinition("MY_DEFINE", "1");

        shaderc::SpvCompilationResult module = compiler.CompileGlslToSpv(
            data.c_str(), data.size(), kind, name.c_str(), options);

        if (module.GetCompilationStatus() !=
            shaderc_compilation_status_success) {
          std::cerr << module.GetErrorMessage();
        }

        std::vector<uint32_t> result(module.cbegin(), module.cend());
        return result;
      }

   .. rubric:: Integrate into your projects
      :name: integrating

   You can integrate the Vulkan shader compiler into your app using either the
   project's ``Android.mk`` file or Gradle.

   .. rubric:: Android.mk
      :name: ”androidmk”

   Perform the following steps to use your project's ``Android.mk`` file to
   integrate the shader compiler.

   #. Include the following lines in your Android.mk file:

      .. code:: none

         include $(CLEAR_VARS)
              ...
         LOCAL_STATIC_LIBRARIES := shaderc
              ...
         include $(BUILD_SHARED_LIBRARY)

         $(call import-module, third_party/shaderc)

   #. Set APP_STL to one of ``c++_static``, ``c++_shared``, ``gnustl_static``,
      or ``gnustl_shared`` in app's Application.mk

   .. rubric:: Gradle's CMake integration
      :name: ”gradle”

   #. In a terminal window, navigate to
      ``ndk_root/sources/third_party/shaderc/``.

   #. Run the following command to build NDK's Shaderc. You only need to run
      this command once on each NDK version that you use:

      .. code:: none

         $ ../../../ndk-build NDK_PROJECT_PATH=. APP_BUILD_SCRIPT=Android.mk \
         APP_STL:=<stl_version> APP_ABI=all libshaderc_combined

      This command places two folders in
      <ndk_root>/sources/third_party/shaderc/. The directory structure is as
      follows:

      .. code:: none

         include/
           shaderc/
             shaderc.h
             shaderc.hpp
         libs/
           <stl_version>/
             {all of the abis}
                libshaderc.a

   #. Add the generated includes and libs using
      `target_include_directories <https://cmake.org/cmake/help/v3.12/command/target_include_directories.html?highlight=target_include_directories>`__
      and
      `target_link_libraries <https://cmake.org/cmake/help/v3.12/command/target_link_libraries.html?highlight=target_link_lib#target-link-libraries>`__,
      as you normally do for similar `external libraries <https://github.com/android/ndk-samples/blob/master/hello-libs/app/src/main/cpp/CMakeLists.txt>`__.
      Your app's STL type must match one of the ``stl`` types specified in
      ``stl_version``. The NDK recommends using ``c++_shared`` or
      ``c++_static``, although ``gnustl_static`` and ``gnustl_shared`` are also
      supported.

   .. rubric:: Get the latest Shaderc
      :name: Getting The Latest

   Shaderc in NDK comes from `Android Source tree <https://android.googlesource.com/platform/external/shaderc>`__, which
   is a snapshot of `the upstream Shaderc repo <https://github.com/google/shaderc>`__. If you need the latest Shaderc,
   refer to `build instruction for details <https://github.com/google/shaderc/blob/master/README.md>`__. The
   high-level steps are as follows:

   #. Download the latest Shaderc:

      .. code:: none

         git clone https://github.com/google/shaderc.git

   #. Update dependencies:

      .. code:: none

         ./utils/git-sync-deps

   #. Build Shaderc:

      .. code:: none

         <ndk_dir>/ndk-build NDK_PROJECT_PATH=. APP_BUILD_SCRIPT=Android.mk \
             APP_STL:=c++_static APP_ABI=all libshaderc_combined -j16

   #. Configure your project to use your own Shaderc build in your build script
      file.

Last updated 2023-06-27 UTC.

/Validation layers
==================

.. https://developer.android.google.cn/ndk/guides/graphics/validation-layer?hl=en

.. container:: devsite-article-body clearfix

   Most explicit graphics APIs don't perform error-checking because doing so can
   result in a performance penalty. Vulkan has *validation layers* that provide
   error-checking during development, avoiding the performance penalty in the
   release build of your app. Validation layers rely on a general purpose
   layering mechanism that intercepts API entry points.

   .. rubric:: Single Khronos validation layer
      :name: khronos-validation-layer

   Previously, Vulkan provided multiple validation layers that needed to be
   enabled in a specific order. Beginning with the 1.1.106.0 Vulkan SDK release,
   your app only has to enable a `single validation layer <https://vulkan.lunarg.com/doc/view/latest/windows/validation_layers.html>`__,
   ``VK_LAYER_KHRONOS_validation``, to get all features from the previous
   validation layers.

   **Note:**\  The unified ``VK_LAYER_KHRONOS_validation`` layer is also
   supported on non-mobile devices so you can share the same validation code
   across all platforms.

   .. rubric:: Use validation layers packaged in your APK
      :name: ilp

   Packaging validation layers within your APK ensures optimal compatibility.
   The validation layers are available as prebuilt binaries or are buildable
   from source code.

   **Note:**\  Android 9 (API level 28) and higher allows Vulkan to load layers
   that are located separately from your app's APK. See `Use external validation layers <#vl-external>`__ for more information.

   .. rubric:: Use prebuilt binaries
      :name: prebuilt-binaries

   Download the latest Android Vulkan Validation layer binaries from the `GitHub release
   page <https://github.com/KhronosGroup/Vulkan-ValidationLayers/releases>`__.

   The easiest way to add the layers to your APK is to extract the prebuilt
   layer binaries to the ``src/main/jniLibs/`` directory of your module, with
   ABI directories (such as ``arm64-v8a`` or ``x86-64``) intact, like this:

   .. code:: none

      src/main/jniLibs/
        arm64-v8a/
          libVkLayer_khronos_validation.so
        armeabi-v7a/
          libVkLayer_khronos_validation.so
        x86/
          libVkLayer_khronos_validation.so
        x86-64/
          libVkLayer_khronos_validation.so

   .. rubric:: Build the validation layer from source code
      :name: gls

   To debug into the validation layer source code, pull the latest source from
   the Khronos Group `GitHub repository <https://github.com/KhronosGroup/Vulkan-ValidationLayers>`__ and
   follow the build instructions there.

   .. rubric:: Verify the validation layer is packaged correctly
      :name: verifying

   Regardless of whether you build with the Khronos prebuilt layers or layers
   built from source, the build process produces a final file structure in your
   APK like the following:

   .. code:: none

      lib/
        arm64-v8a/
          libVkLayer_khronos_validation.so
        armeabi-v7a/
          libVkLayer_khronos_validation.so
        x86/
          libVkLayer_khronos_validation.so
        x86-64/
          libVkLayer_khronos_validation.so

   The following command shows how to verify that your APK contains the
   validation layer as expected:

   .. code:: none

      $ jar -tf project.apk | grep libVkLayer
      lib/x86_64/libVkLayer_khronos_validation.so
      lib/armeabi-v7a/libVkLayer_khronos_validation.so
      lib/arm64-v8a/libVkLayer_khronos_validation.so
      lib/x86/libVkLayer_khronos_validation.so

   .. rubric:: Enable a validation layer during instance creation
      :name: enabling

   The Vulkan API allows an app to enable layers during instance creation. Entry
   points that a layer intercepts must have one of the following objects as the
   first parameter:

   -  ``VkInstance``
   -  ``VkPhysicalDevice``
   -  ``VkDevice``
   -  ``VkCommandBuffer``
   -  ``VkQueue``

   Call
   `vkEnumerateInstanceLayerProperties() <https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/vkEnumerateInstanceLayerProperties.html>`__
   to list the available layers and their properties. Vulkan enables layers when
   `vkCreateInstance() <https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/vkCreateInstance.html>`__
   executes.

   The following code snippet shows how an app can use the Vulkan API to
   programmatically query and enable layers:

   .. code:: prettyprint

      // Enable just the Khronos validation layer.
      static const char *layers[] = {"VK_LAYER_KHRONOS_validation"};

      // Get the layer count using a null pointer as the last parameter.
      uint32_t instance_layer_present_count = 0;
      vkEnumerateInstanceLayerProperties(&instance_layer_present_count, nullptr);

      // Enumerate layers with a valid pointer in the last parameter.
      VkLayerProperties layer_props[instance_layer_present_count];
      vkEnumerateInstanceLayerProperties(&instance_layer_present_count, layer_props);

      // Make sure selected validation layers are available.
      VkLayerProperties *layer_props_end = layer_props + instance_layer_present_count;
      for (const char* layer:layers) {
        assert(layer_props_end !=
        std::find_if(layer_props, layer_props_end, [layer](VkLayerProperties layerProperties) {
          return strcmp(layerProperties.layerName, layer) == 0;
        }));
      }

      // Create a Vulkan instance, requesting all enabled layers or extensions
      // available on the system
      VkInstanceCreateInfo instanceCreateInfo{
        .sType = VK_STRUCTURE_TYPE_INSTANCE_CREATE_INFO,
        .pNext = nullptr,
        .pApplicationInfo = &appInfo,
        .enabledLayerCount = sizeof(layers) / sizeof(layers[0]),
        .ppEnabledLayerNames = layers,

   .. rubric:: Default logcat output
      :name: output

   The validation layer emits warning and error messages in logcat labeled with
   a ``VALIDATION`` tag. A validation layer message looks like the following
   (with line breaks added here for easier scrolling):

   .. code:: none

      Validation -- Validation Error:
        [ VUID-VkDeviceQueueCreateInfo-pQueuePriorities-parameter ]
      Object 0: VK_NULL_HANDLE, type = VK_OBJECT_TYPE_DEVICE; | MessageID = 0xd6d720c6 |
      vkCreateDevice: required parameter
        pCreateInfo->pQueueCreateInfos[0].pQueuePriorities specified as NULL.
      The Vulkan spec states: pQueuePriorities must be a valid pointer to an array of
        queueCount float values
        (https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html
        #VUID-VkDeviceQueueCreateInfo-pQueuePriorities-parameter)

   .. rubric:: Enable the debug callback
      :name: enable_the_debug_callback

   The Debug Utils extension ``VK_EXT_debug_utils`` lets your application create
   a debug messenger that passes validation layer messages to an
   application-supplied callback. Your device may not implement this extension,
   but it is implemented in the most recent validation layers. There's also a
   deprecated extension called ``VK_EXT_debug_report``, which provides similar
   capabilities if ``VK_EXT_debug_utils`` is not available.

   Before using the Debug Utils extension, you should make sure that your device
   or a loaded validation layer supports it. The following example shows how to
   check whether the debug utils extension is supported and register a callback
   if the extension is supported by either the device or validation layer.

   .. code:: prettyprint

      // Get the instance extension count.
      uint32_t inst_ext_count = 0;
      vkEnumerateInstanceExtensionProperties(nullptr, &inst_ext_count, nullptr);

      // Enumerate the instance extensions.
      VkExtensionProperties inst_exts[inst_ext_count];
      vkEnumerateInstanceExtensionProperties(nullptr, &inst_ext_count, inst_exts);

      // Check for debug utils extension within the system driver or loader.
      // Check if the debug utils extension is available (in the driver).
      VkExtensionProperties *inst_exts_end = inst_exts + inst_ext_count;
      bool debugUtilsExtAvailable = inst_exts_end !=
        std::find_if(inst_exts, inst_exts_end, [](VkExtensionProperties
          extensionProperties) {
          return strcmp(extensionProperties.extensionName,
            VK_EXT_DEBUG_UTILS_EXTENSION_NAME) == 0;
        });

      if ( !debugUtilsExtAvailable ) {
        // Also check the layers for the debug utils extension.
        for (auto layer: layer_props) {
          uint32_t layer_ext_count;
          vkEnumerateInstanceExtensionProperties(layer.layerName, &layer_ext_count,
            nullptr);
          if (layer_ext_count == 0) continue;
          VkExtensionProperties layer_exts[layer_ext_count];
          vkEnumerateInstanceExtensionProperties(layer.layerName, &layer_ext_count,
          layer_exts);

          VkExtensionProperties * layer_exts_end = layer_exts + layer_ext_count;
          debugUtilsExtAvailable = layer_exts != std::find_if(
            layer_exts, layer_exts_end,[](VkExtensionProperties extensionProperties) {
              return strcmp(extensionProperties.extensionName,
              VK_EXT_DEBUG_UTILS_EXTENSION_NAME) == 0;
            });
          if (debugUtilsExtAvailable) {
              // Add the including layer into the layer request list if necessary.
              break;
          }
        }
      }

      if (!debugUtilsExtAvailable) return; // since this snippet depends on debugUtils

      const char * enabled_inst_exts[] = { ..., VK_EXT_DEBUG_UTILS_EXTENSION_NAME };
      uint32_t enabled_extension_count =
        sizeof(enabled_inst_exts)/sizeof(enabled_inst_exts[0]);

      // Pass the instance extensions into vkCreateInstance.
      VkInstanceCreateInfo instance_info = {};
      instance_info.sType = VK_STRUCTURE_TYPE_INSTANCE_CREATE_INFO;
      instance_info.enabledExtensionCount = enabled_extension_count;
      instance_info.ppEnabledExtensionNames = enabled_inst_exts;

      // NOTE: Can still return VK_ERROR_EXTENSION_NOT_PRESENT if validation layer
      // isn't loaded.
      vkCreateInstance(&instance_info, nullptr, &instance);

      auto pfnCreateDebugUtilsMessengerEXT =
        (PFN_vkCreateDebugUtilsMessengerEXT)vkGetInstanceProcAddr(
          tutorialInstance, "vkCreateDebugUtilsMessengerEXT");
      auto pfnDestroyDebugUtilsMessengerEXT =
        (PFN_vkDestroyDebugUtilsMessengerEXT)vkGetInstanceProcAddr(
          tutorialInstance, "vkDestroyDebugUtilsMessengerEXT");

      // Create the debug messenger callback with your the settings you want.
      VkDebugUtilsMessengerEXT debugUtilsMessenger;
      if (pfnCreateDebugUtilsMessengerEXT) {
        VkDebugUtilsMessengerCreateInfoEXT messengerInfo;
        constexpr VkDebugUtilsMessageSeverityFlagsEXT kSeveritiesToLog =
          VK_DEBUG_UTILS_MESSAGE_SEVERITY_ERROR_BIT_EXT |
          VK_DEBUG_UTILS_MESSAGE_SEVERITY_WARNING_BIT_EXT;

      constexpr VkDebugUtilsMessageTypeFlagsEXT kMessagesToLog =
        VK_DEBUG_UTILS_MESSAGE_TYPE_GENERAL_BIT_EXT |
        VK_DEBUG_UTILS_MESSAGE_TYPE_VALIDATION_BIT_EXT |
        VK_DEBUG_UTILS_MESSAGE_TYPE_PERFORMANCE_BIT_EXT;

        messengerInfo.sType           = VK_STRUCTURE_TYPE_DEBUG_UTILS_MESSENGER_CREATE_INFO_EXT;
        messengerInfo.pNext           = nullptr;
        messengerInfo.flags           = 0;
        messengerInfo.messageSeverity = kSeveritiesToLog;
        messengerInfo.messageType     = kMessagesToLog;

        // The DebugUtilsMessenger callback is explained in the following section.
        messengerInfo.pfnUserCallback = &DebugUtilsMessenger;
        messengerInfo.pUserData       = nullptr; // Custom user data passed to callback

        pfnCreateDebugUtilsMessengerEXT(instance, &messengerInfo, nullptr,
          &debugUtilsMessenger);
      }

      // Later, when shutting down Vulkan, call the following:
      if (pfnDestroyDebugUtilsMessengerEXT) {
          pfnDestroyDebugUtilsMessengerEXT(instance, debugUtilsMessenger, nullptr);
      }

   After your app registers and enables the callback, the system routes
   debugging messages to it.

   .. code:: cpp

      #include <android/log.h>

      VKAPI_ATTR VkBool32 VKAPI_CALL DebugUtilsMessenger(
                              VkDebugUtilsMessageSeverityFlagBitsEXT messageSeverity,
                              VkDebugUtilsMessageTypeFlagsEXT messageTypes,
                              const VkDebugUtilsMessengerCallbackDataEXT *callbackData,
                              void *userData)
      {
        const char validation[]  = "Validation";
        const char performance[] = "Performance";
        const char error[]       = "ERROR";
        const char warning[]     = "WARNING";
        const char unknownType[] = "UNKNOWN_TYPE";
        const char unknownSeverity[] = "UNKNOWN_SEVERITY";
        const char* typeString      = unknownType;
        const char* severityString  = unknownSeverity;
        const char* messageIdName   = callbackData->pMessageIdName;
        int32_t messageIdNumber     = callbackData->messageIdNumber;
        const char* message         = callbackData->pMessage;
        android_LogPriority priority = ANDROID_LOG_UNKNOWN;

        if (messageSeverity & VK_DEBUG_UTILS_MESSAGE_SEVERITY_ERROR_BIT_EXT) {
          severityString = error;
          priority = ANDROID_LOG_ERROR;
        }
        else if (messageSeverity & VK_DEBUG_UTILS_MESSAGE_SEVERITY_WARNING_BIT_EXT) {
          severityString = warning;
          priority = ANDROID_LOG_WARN;
        }
        if (messageTypes & VK_DEBUG_UTILS_MESSAGE_TYPE_VALIDATION_BIT_EXT) {
           typeString = validation;
        }
        else if (messageTypes & VK_DEBUG_UTILS_MESSAGE_TYPE_PERFORMANCE_BIT_EXT) {
           typeString = performance;
        }

        __android_log_print(priority,
                           "AppName",
                           "%s %s: [%s] Code %i : %s",
                           typeString,
                           severityString,
                           messageIdName,
                           messageIdNumber,
                           message);

        // Returning false tells the layer not to stop when the event occurs, so
        // they see the same behavior with and without validation layers enabled.
        return VK_FALSE;
      }

   .. rubric:: Use external validation layers
      :name: vl-external

   You don't have to package validation layers in your APK; devices running
   Android 9 (API level 28) and higher can use validation layers external to
   your binary and turn them off and on dynamically. Follow the steps in this
   section to push validation layers to your test device:

   .. rubric:: Enable your app to use external validation layers
      :name: enable-debugging

   Android's security model and policies differ significantly from other
   platforms. To load external validation layers, one of the following
   conditions must be true:

   -  The target app is **debuggable**. This option results in more debug
      information, but might negatively affect the performance of your app.

   -  The target app is run on a **userdebug** build of the operating system
      that grants root access.

   -  Apps targeting Android 11 (API level 30) or higher only: Your target
      Android manifest file includes the following
      `meta-data <#>`__ element:

      .. code:: prettyprint

         <meta-data android:name="com.android.graphics.injectLayers.enable"
           android:value="true"/>

   .. rubric:: Load an external validation layer
      :name: load-layers

   Devices running Android 9 (API level 28) and higher allow Vulkan to `load the validation layer from your app's local storage <#layers-local-storage>`__.
   Starting in Android 10 (API level 29), Vulkan can also load the validation
   layer `from a separate APK <#apk-containing-layers>`__. You can choose
   whichever method you like as long as your Android version supports it.

   .. rubric:: Load a validation layer binary from your device’s local storage
      :name: layers-local-storage

   Because Vulkan looks for the binary in your device’s temporary data storage
   directory, you must first push the binary to that directory using `Android Debug Bridge (adb) <#>`__, as follows:

   #. Use the `adb push <#>`__ command to
      load the layer binary into your app’s data storage on the device:

      .. code:: none

         $ adb push libVkLayer_khronos_validation.so /data/local/tmp

   #. Use the `adb shell <#>`__ and
      ``run-as`` commands to load the layer through your app process. That is,
      the binary has the same device access that the app has without requiring
      root access.

      .. code:: none

         $ adb shell run-as com.example.myapp cp
           /data/local/tmp/libVkLayer_khronos_validation.so .
         $ adb shell run-as com.example.myapp ls libVkLayer_khronos_validation.so

   #. `Enable the layer <#enable-layers-outside-app>`__.

   .. rubric:: Load a validation layer binary from another APK
      :name: apk-containing-layers

   You can use ``adb`` to `install an APK <#>`__
   that contains the layer and then `enable the layer <#enable-layers-outside-app>`__.

   .. code:: none

      adb install --abi abi path_to_apk

   .. rubric:: Enable layers outside the application
      :name: enable-layers-outside-app

   You can enable Vulkan layers either per-app or globally. Per-app settings
   *persist* across reboots, while global properties are *cleared* on reboot.

   .. rubric:: Enable layers on a per-app basis
      :name: enable-outslide-layers-per-app

   The following steps describe how to enable layers on a per-app basis:

   #. Use adb shell settings to enable the layers:

      .. code:: devsite-click-to-copy

         $ adb shell settings put global enable_gpu_debug_layers 1

   #. Specify the target application to enable the layers on:

      .. code:: none

         $ adb shell settings put global gpu_debug_app <package_name>

   #. Specify the list of layers to enable (from top to bottom), separating each
      layer by a colon:

      .. code:: none

         $ adb shell settings put global gpu_debug_layers <layer1:layer2:layerN>

      Since we have a single Khronos validation layer, the command will likely
      look like:

      .. code:: devsite-click-to-copy

         $ adb shell settings put global gpu_debug_layers VK_LAYER_KHRONOS_validation

   #. Specify one or more packages to search for layers inside of:

      .. code:: none

         $ adb shell settings put global
           gpu_debug_layer_app <package1:package2:packageN>

   **Note:**\  You can also enable the ``enable_gpu_debug_layers`` setting
   through the on-device developer options. After you enable developer options,
   open the **Settings** app on your test device, navigate to **Developer
   options > Debugging** and make sure the option to **Enable GPU debug layers**
   is turned on.
   You can check whether the settings are enabled using the following commands:

   .. code:: none

      $ adb shell settings list global | grep gpu
      enable_gpu_debug_layers=1
      gpu_debug_app=com.example.myapp
      gpu_debug_layers=VK_LAYER_KHRONOS_validation

   Because the settings you apply persist across device reboots, you may want to
   clear the settings after the layers are loaded:

   .. code:: none

      $ adb shell settings delete global enable_gpu_debug_layers
      $ adb shell settings delete global gpu_debug_app
      $ adb shell settings delete global gpu_debug_layers
      $ adb shell settings delete global gpu_debug_layer_app

   .. rubric:: Enable layers globally
      :name: enable-validation-layers-globally

   You can enable one or more layers globally until the next reboot. This
   attempts to load the layers for all applications, including native
   executables.

   .. code:: none

      $ adb shell setprop debug.vulkan.layers <layer1:layer2:layerN>

Last updated 2024-05-03 UTC.

/Wide color support
===================

.. https://developer.android.google.cn/training/wide-color-gamut#vulkan?hl=en


/Extensions
===========

.. https://developer.android.google.cn/ndk/guides/graphics/extensions?hl=en

.. container:: devsite-article-body clearfix

   Android devices may fully or partially support `Vulkan extensions <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#extended-functionality-extensions>`__
   that provide additional functionality.

   To determine if a Vulkan extension is available on a particular target
   device, use the Vulkan extension enumeration functions
   (``vkEnumerateInstanceExtensionProperties()`` and
   ``vkEnumerateDeviceExtensionProperties()``) as described in the `Vulkan specification <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#extended-functionality-extensions>`__.
   To see an example, you can refer to this `code sample <https://github.com/LunarG/VulkanSamples/blob/master/API-Samples/instance_extension_properties/instance_extension_properties.cpp>`__
   in the Vulkan samples repo.

   The following table summarizes the list of Vulkan extensions that Android
   supports, the minimum OS version for the extension support, and the extension
   type.

   OS Version

Vulkan Extension

Extension Type

Android 8.0 (API level 26)

`VK_KHR_incremental_present <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#VK_KHR_incremental_present>`__

Device

`VK_KHR_shared_presentable_image <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#VK_KHR_shared_presentable_image>`__

Device

`VK_KHR_get_surface_capabilities2 <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#VK_KHR_get_surface_capabilities2>`__

Instance

`VK_EXT_hdr_metadata <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#VK_EXT_hdr_metadata>`__

Device

`VK_EXT_swapchain_colorspace <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#VK_EXT_swapchain_colorspace>`__

Instance

`VK_GOOGLE_display_timing <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#VK_GOOGLE_display_timing>`__

Device

Android 7.0 (API level 24)

`VK_KHR_android_surface <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#VK_KHR_android_surface>`__

Instance

`VK_KHR_surface <https://www.khronos.org/registry/vulkan/specs/1.0-extensions/html/vkspec.html#VK_KHR_surface>`__

Instance

Last updated 2020-08-17 UTC.

/Android Baseline profile
=========================

.. https://developer.android.google.cn/ndk/guides/graphics/android-baseline-profile?hl=en

.. container:: devsite-article-body clearfix

   Today, Google announced the release of the all new Android Baseline 2022
   profile for Vulkan.

   When we released the initial Android Baseline profile (version 2021), our
   motivations were simple but important. We wanted to remove the challenges
   developers consistently encountered when determining what functionality they
   could rely upon across the diverse set of Android devices.

   The Android Baseline 2021 profile addressed this pain point with a Vulkan
   profile that specified a set of Vulkan extensions, features, formats, and
   limits that were found on the vast majority of active Android devices in
   2021. This profile was created with available data and discussions with
   Khronos partners to be maximally compatible with both existing and future
   devices and represents the most advanced set of Vulkan functionality that
   meets these constraints.

   When we first launched the Android Baseline 2021 profile we committed to a
   2022 refresh of the profile because we knew that the adoption of Vulkan was
   quickly reaching toward an inflection point. Now, after a year of data
   analysis and coordination with our Khronos partners, we are happy to announce
   that we have successfully created the Android Baseline 2022 profile for
   Vulkan.

   Just as with our initial 2021 profile, the Android Baseline 2022 profile
   includes a collection of Vulkan extensions, features, formats and limits that
   are found on the vast majority of active Android devices. However, after only
   a year of ecosystem advancement we were able to push for a much wider set of
   functionality. We believe that many developers will be able to quickly
   benefit from the additional functionality found in this new profile.

   We encourage you to read through the full `Android Baseline 2022 profile <https://github.com/KhronosGroup/Vulkan-Profiles/blob/main/profiles/VP_ANDROID_baseline_2022.json>`__
   on Github.

   The Android Baseline 2022 profile contains all of the same support as the
   initial 2021 profile, which included such useful and important functionality
   as:

   -  Compressed textures through ASTC and ETC
   -  Variable colorspaces through ``VK_EXT_swapchain_colorspace``
   -  Sample shading and multisample interpolation through ``sampleRateShading``

   Extending this functionality, the Android Baseline 2022 profile also adds a
   collection of incredibly valuable improvements, such as:

   -  Full support for Vulkan 1.1
   -  16 bit integers in shaders through ``shaderInt16``
   -  Vulkan and `Android Hardware Buffer <https://developer.android.google.cn/reference/android/hardware/HardwareBuffer>`__
      interoperability through
      ``VK_ANDROID_external_memory_android_hardware_buffer``
   -  Querying Vulkan driver properties with ``VK_KHR_driver_properties``
   -  Greater control over renderpass creation with
      ``VK_KHR_create_renderpass2``

   Alongside the release of the 2022 profile we have also made the decision to
   amend the previous 2021 profile. When the 2021 profile shipped it contained
   support for the extended set of image gather instructions and extended image
   gather capability:

   -  ``"shaderImageGatherExtended": true,``
   -  ``"minTexelGatherOffset": -8``
   -  ``"maxTexelGatherOffset": 7``

   With greater data analysis and investigation we have discovered that this
   inclusion was a mistake. The extended image gather functionality is supported
   at a much lower adoption rate than we demand from the Android Baseline
   profile, so we chose to amend the 2021 profile to remove these requirements.
   This change is visible in the amended
   `Github <https://github.com/KhronosGroup/Vulkan-Profiles/blob/master/profiles/VP_ANDROID_baseline_2021.json>`__
   as ``"revision": 2`` under ``"history"``. The extended image gather
   functionality is also absent from the 2022 profile.
   The amended `Android Baseline 2021 profile <https://github.com/KhronosGroup/Vulkan-Profiles/blob/master/profiles/VP_ANDROID_baseline_2021.json>`__
   will remain visible on Github.

   The vast majority of Android devices already in use fully support both the
   2021 profile and the 2022 profile without the need for an over-the-air
   update.

   We will continue to broadcast the percentage of Android support for both
   profiles in the Android Distribution Dashboard at
   `https://developer.android.com/about/dashboards <https://developer.android.google.cn/about/dashboards>`__.

   Having successfully completed our committed refresh of the 2021 profile, we
   are not currently committing to any future refreshes of the Android Baseline
   profile. We will be updating to broader and more advanced sets of Vulkan
   functionality on an as-needed basis, as determined by developers, partners,
   and users.

Last updated 2023-01-17 UTC.

/Neural Networks API
====================

.. https://developer.android.google.cn/ndk/guides/neuralnetworks?hl=en

.. container:: devsite-article-body clearfix

   The Android Neural Networks API (NNAPI) is an Android C API designed for
   running computationally intensive operations for machine learning on Android
   devices. NNAPI is designed to provide a base layer of functionality for
   higher-level machine learning frameworks, such as `TensorFlow Lite <https://tensorflow.google.cn/lite>`__ and Caffe2, that build and train
   neural networks. The API is available on all Android devices running Android
   8.1 (API level 27) or higher.

   **Note:**\  This topic uses the term "device" to refer to CPUs, GPUs, and
   accelerators. In other topics on this site, "device" refers to Android
   devices. To clarify this distinction, when referring to an Android device,
   this topic includes the word "Android." All other instances of the word
   device refer to processors and accelerators.
   NNAPI supports inferencing by applying data from Android devices to
   previously trained, developer-defined models. Examples of inferencing include
   classifying images, predicting user behavior, and selecting appropriate
   responses to a search query.

   On-device inferencing has many benefits:

   -  **Latency**: You don’t need to send a request over a network connection
      and wait for a response. For example, this can be critical for video
      applications that process successive frames coming from a camera.
   -  **Availability**: The application runs even when outside of network
      coverage.
   -  **Speed**: New hardware that is specific to neural network processing
      provides significantly faster computation than a general-purpose CPU,
      alone.
   -  **Privacy**: The data does not leave the Android device.
   -  **Cost**: No server farm is needed when all the computations are performed
      on the Android device.

   There are also trade-offs that a developer should keep in mind:

   -  **System utilization**: Evaluating neural networks involves a lot of
      computation, which could increase battery power usage. You should consider
      monitoring the battery health if this is a concern for your app,
      especially for long-running computations.
   -  **Application size**: Pay attention to the size of your models. Models may
      take up multiple megabytes of space. If bundling large models in your APK
      would unduly impact your users, you may want to consider downloading the
      models after app installation, using smaller models, or running your
      computations in the cloud. NNAPI does not provide functionality for
      running models in the cloud.

   See the `Android Neural Networks API sample <https://github.com/android/ndk-samples/tree/main/nn-samples>`__ to
   see one example of how to use NNAPI.

   .. rubric:: Understand the Neural Networks API runtime
      :name: runtime

   NNAPI is meant to be called by machine learning libraries, frameworks, and
   tools that let developers train their models off-device and deploy them on
   Android devices. Apps typically would not use NNAPI directly, but would
   instead use higher-level machine learning frameworks. These frameworks in
   turn could use NNAPI to perform hardware-accelerated inference operations on
   supported devices.

   Based on an app’s requirements and the hardware capabilities on an Android
   device, Android’s neural network runtime can efficiently distribute the
   computation workload across available on-device processors, including
   dedicated neural network hardware, graphics processing units (GPUs), and
   digital signal processors (DSPs).

   For Android devices that lack a specialized vendor driver, the NNAPI runtime
   executes the requests on the CPU.

   Figure 1 shows the high-level system architecture for NNAPI.

   .. figure:: https://developer.android.google.cn/static/ndk/images/nnapi/nnapi_architecture.png
      name: nnapi-architecture

      **Figure 1.** System architecture for Android Neural Networks API

   .. rubric:: Neural Networks API programming model
      :name: neural_networks_api_programming_model

   To perform computations using NNAPI, you first need to construct a directed
   graph that defines the computations to perform. This computation graph,
   combined with your input data (for example, the weights and biases passed
   down from a machine learning framework), forms the model for NNAPI runtime
   evaluation.

   NNAPI uses four main abstractions:

   -  **Model**: A computation graph of mathematical operations and the constant
      values learned through a training process. These operations are specific
      to neural networks. They include 2-dimensional (2D)
      `convolution <https://en.wikipedia.org/wiki/Convolution>`__, logistic
      (`sigmoid <https://en.wikipedia.org/wiki/Sigmoid_function>`__) activation,
      `rectified linear <https://en.wikipedia.org/wiki/Rectifier_(neural_networks)>`__
      (ReLU) activation, and more. Creating a model is a synchronous operation.
      Once successfully created, it can be reused across threads and
      compilations. In NNAPI, a model is represented as an
      `ANeuralNetworksModel <#>`__
      instance.

   -  **Compilation**: Represents a configuration for compiling an NNAPI model
      into lower-level code. Creating a compilation is a synchronous operation.
      Once successfully created, it can be reused across threads and executions.
      In NNAPI, each compilation is represented as an
      `ANeuralNetworksCompilation <#>`__
      instance.

   -  **Memory**: Represents shared memory, memory mapped files, and similar
      memory buffers. Using a memory buffer lets the NNAPI runtime transfer data
      to drivers more efficiently. An app typically creates one shared memory
      buffer that contains every tensor needed to define a model. You can also
      use memory buffers to store the inputs and outputs for an execution
      instance. In NNAPI, each memory buffer is represented as an
      `ANeuralNetworksMemory <#>`__
      instance.

   -  **Execution**: Interface for applying an NNAPI model to a set of inputs
      and to gather the results. Execution can be performed synchronously or
      asynchronously.

      For asynchronous execution, multiple threads can wait on the same
      execution. When this execution completes, all threads are released.

      In NNAPI, each execution is represented as an
      `ANeuralNetworksExecution <#>`__
      instance.

   Figure 2 shows the basic programming flow.

   .. figure:: https://developer.android.google.cn/static/ndk/images/nnapi/nnapi_flow.png
      name: nnapi-flow

      **Figure 2.** Programming flow for Android Neural Networks API

   The rest of this section describes the steps to set up your NNAPI model to
   perform computation, compile the model, and execute the compiled model.

   **Tip:** For brevity, we've omitted checking the result codes from each
   operation in the code snippets below. You should make sure to do so in your
   production code.

   .. rubric:: Provide access to training data
      :name: training-data

   Your trained weights and biases data are likely stored in a file. To provide
   the NNAPI runtime with efficient access to this data, create an
   `ANeuralNetworksMemory <#>`__
   instance by calling the
   `ANeuralNetworksMemory_createFromFd() <#>`__
   function and passing in the file descriptor of the opened data file. You also
   specify memory protection flags and an offset where the shared memory region
   starts in the file.

   .. code:: prettyprint

      // Create a memory buffer from the file that contains the trained data
      ANeuralNetworksMemory* mem1 = NULL;
      int fd = open("training_data", O_RDONLY);
      ANeuralNetworksMemory_createFromFd(file_size, PROT_READ, fd, 0, &mem1);

   Although in this example we use only one
   `ANeuralNetworksMemory <#>`__
   instance for all our weights, it’s possible to use more than one
   ``ANeuralNetworksMemory`` instance for multiple files.

   .. rubric:: Use native hardware buffers
      :name: ahardwarebuffer

   You can use `native hardware buffers <#>`__ for model inputs,
   outputs, and constant operand values. In certain cases, an NNAPI accelerator
   can access
   `AHardwareBuffer <#>`__
   objects without the driver needing to copy the data. ``AHardwareBuffer`` has
   many different configurations, and not every NNAPI accelerator may support
   all of these configurations. Because of this limitation, refer to the
   constraints listed in `ANeuralNetworksMemory_createFromAHardwareBuffer
   reference
   documentation <#>`__
   and test ahead of time on target devices to ensure compilations and
   executions that use ``AHardwareBuffer`` behave as expected, using `device assignment <#device-assignment>`__ to specify the accelerator.

   To allow the NNAPI runtime to access an ``AHardwareBuffer`` object, create an
   `ANeuralNetworksMemory <#>`__
   instance by calling the ``ANeuralNetworksMemory_createFromAHardwareBuffer``
   function and passing in the ``AHardwareBuffer`` object, as shown in the
   following code sample:

   .. code:: prettyprint

      // Configure and create AHardwareBuffer object
      AHardwareBuffer_Desc desc = ...
      AHardwareBuffer* ahwb = nullptr;
      AHardwareBuffer_allocate(&desc, &ahwb);

      // Create ANeuralNetworksMemory from AHardwareBuffer
      ANeuralNetworksMemory* mem2 = NULL;
      ANeuralNetworksMemory_createFromAHardwareBuffer(ahwb, &mem2);

   When NNAPI no longer needs to access the ``AHardwareBuffer`` object, free the
   corresponding ``ANeuralNetworksMemory`` instance:

   .. code:: prettyprint

      ANeuralNetworksMemory_free(mem2);

   .. note::

      **Note:**

      -  You can use ``AHardwareBuffer`` only for the whole buffer; you cannot
         use it with an ``ARect`` parameter.
      -  The NNAPI runtime will not flush the buffer. You need to make sure that
         the input and output buffers are accessible before scheduling the
         execution.
      -  There is no support for sync fence file descriptors.
      -  For an ``AHardwareBuffer`` with vendor-specific formats and usage bits,
         it is up to the vendor implementation to determine whether the client
         or the driver is responsible for flushing the cache.

   .. rubric:: Model
      :name: model

   A model is the fundamental unit of computation in NNAPI. Each model is
   defined by one or more operands and operations.

   .. rubric:: Operands
      :name: operands

   Operands are data objects used in defining the graph. These include the
   inputs and outputs of the model, the intermediate nodes that contain the data
   that flows from one operation to another, and the constants that are passed
   to these operations.

   There are two types of operands that can be added to NNAPI models: *scalars*
   and *tensors*.

   A scalar represents a single value. NNAPI supports scalar values in boolean,
   16-bit floating point, 32-bit floating point, 32-bit integer, and unsigned
   32-bit integer formats.

   Most operations in NNAPI involve tensors. Tensors are n-dimensional arrays.
   NNAPI supports tensors with 16-bit floating point, 32-bit floating point,
   8-bit `quantized <#quantized_tensors>`__, 16-bit quantized, 32-bit integer,
   and 8-bit boolean values.

   For example, figure 3 represents a model with two operations: an addition
   followed by a multiplication. The model takes an input tensor and produces
   one output tensor.

   .. figure:: https://developer.android.google.cn/static/ndk/images/nnapi/nnapi_operands.png
      name: nnapi-operands

      **Figure 3.** Example of operands for an NNAPI model

   The model above has seven operands. These operands are identified implicitly
   by the index of the order in which they are added to the model. The first
   operand added has an index of 0, the second an index of 1, and so on.
   Operands 1, 2, 3, and 5 are constant operands.

   The order in which you add the operands does not matter. For example, the
   model output operand could be the first one added. The important part is to
   use the correct index value when referring to an operand.

   Operands have types. These are specified when they are added to the model.

   An operand cannot be used as both input and output of a model.

   Every operand must either be a model input, a constant, or the output operand
   of exactly one operation.

   For additional information on using operands, see `More about operands <#more_operands>`__.

   .. rubric:: Operations
      :name: operations

   An operation specifies the computations to be performed. Each operation
   consists of these elements:

   -  an operation type (for example, addition, multiplication, convolution),
   -  a list of indexes of the operands that the operation uses for input, and
   -  a list of indexes of the operands that the operation uses for output.

   The order in these lists matters; see the `NNAPI API reference <#>`__ for the expected inputs and
   outputs of each operation type.

   You must add the operands that an operation consumes or produces to the model
   before adding the operation.

   The order in which you add operations does not matter. NNAPI relies on the
   dependencies established by the computation graph of operands and operations
   to determine the order in which operations are executed.

   The operations that NNAPI supports are summarized in the table below:

   .. list-table::
      :widths: 40 40
      :header-rows: 1

      - 

         - Category
         - Operations
      - 

         - Element-wise mathematical operations
         - 

            -  `ANEURALNETWORKS_ABS <#>`__
            -  `ANEURALNETWORKS_ADD <#>`__
            -  `ANEURALNETWORKS_DIV <#>`__
            -  `ANEURALNETWORKS_EQUAL <#>`__
            -  `ANEURALNETWORKS_EXP <#>`__
            -  `ANEURALNETWORKS_FLOOR <#>`__
            -  `ANEURALNETWORKS_GREATER <#>`__
            -  `ANEURALNETWORKS_GREATER_OR_EQUAL <#>`__
            -  `ANEURALNETWORKS_LESS <#>`__
            -  `ANEURALNETWORKS_LESS_OR_EQUAL <#>`__
            -  `ANEURALNETWORKS_LOG <#>`__
            -  `ANEURALNETWORKS_LOGICAL_AND <#>`__
            -  `ANEURALNETWORKS_LOGICAL_NOT <#>`__
            -  `ANEURALNETWORKS_LOGICAL_OR <#>`__
            -  `ANEURALNETWORKS_MAXIMUM <#>`__
            -  `ANEURALNETWORKS_MINIMUM <#>`__
            -  `ANEURALNETWORKS_MUL <#>`__
            -  `ANEURALNETWORKS_NEG <#>`__
            -  `ANEURALNETWORKS_NOT_EQUAL <#>`__
            -  `ANEURALNETWORKS_POW <#>`__
            -  `ANEURALNETWORKS_RSQRT <#>`__
            -  `ANEURALNETWORKS_SIN <#>`__
            -  `ANEURALNETWORKS_SQRT <#>`__
            -  `ANEURALNETWORKS_SUB <#>`__
      - 

         - Tensor manipulation
         - 

            -  `ANEURALNETWORKS_ARGMAX <#>`__
            -  `ANEURALNETWORKS_ARGMIN <#>`__
            -  `ANEURALNETWORKS_BATCH_TO_SPACE_ND <#>`__
            -  `ANEURALNETWORKS_CAST <#>`__
            -  `ANEURALNETWORKS_CHANNEL_SHUFFLE <#>`__
            -  `ANEURALNETWORKS_CONCATENATION <#>`__
            -  `ANEURALNETWORKS_DEPTH_TO_SPACE <#>`__
            -  `ANEURALNETWORKS_DEQUANTIZE <#>`__
            -  `ANEURALNETWORKS_EXPAND_DIMS <#>`__
            -  `ANEURALNETWORKS_GATHER <#>`__
            -  `ANEURALNETWORKS_MEAN <#>`__
            -  `ANEURALNETWORKS_PAD <#>`__
            -  `ANEURALNETWORKS_PAD_V2 <#>`__
            -  `ANEURALNETWORKS_QUANTIZE <#>`__
            -  `ANEURALNETWORKS_REDUCE_ALL <#>`__
            -  `ANEURALNETWORKS_REDUCE_ANY <#>`__
            -  `ANEURALNETWORKS_REDUCE_MAX <#>`__
            -  `ANEURALNETWORKS_REDUCE_MIN <#>`__
            -  `ANEURALNETWORKS_REDUCE_PROD <#>`__
            -  `ANEURALNETWORKS_REDUCE_SUM <#>`__
            -  `ANEURALNETWORKS_RESHAPE <#>`__
            -  `ANEURALNETWORKS_SLICE <#>`__
            -  `ANEURALNETWORKS_SPACE_TO_BATCH_ND <#>`__
            -  `ANEURALNETWORKS_SPACE_TO_DEPTH <#>`__
            -  `ANEURALNETWORKS_SPLIT <#>`__
            -  `ANEURALNETWORKS_SQUEEZE <#>`__
            -  `ANEURALNETWORKS_STRIDED_SLICE <#>`__
            -  `ANEURALNETWORKS_TILE <#>`__
            -  `ANEURALNETWORKS_TOPK_V2 <#>`__
            -  `ANEURALNETWORKS_TRANSPOSE <#>`__
      - 

         - Image operations
         - 

            -  `ANEURALNETWORKS_RESIZE_BILINEAR <#>`__
            -  `ANEURALNETWORKS_RESIZE_NEAREST_NEIGHBOR <#>`__
      - 

         - Lookup operations
         - 

            -  `ANEURALNETWORKS_EMBEDDING_LOOKUP <#>`__
            -  `ANEURALNETWORKS_HASHTABLE_LOOKUP <#>`__
      - 

         - Normalization operations
         - 

            -  `ANEURALNETWORKS_INSTANCE_NORMALIZATION <#>`__
            -  `ANEURALNETWORKS_L2_NORMALIZATION <#>`__
            -  `ANEURALNETWORKS_LOCAL_RESPONSE_NORMALIZATION <#>`__
      - 

         - Convolution operations
         - 

            -  `ANEURALNETWORKS_CONV_2D <#>`__
            -  `ANEURALNETWORKS_DEPTHWISE_CONV_2D <#>`__
            -  `ANEURALNETWORKS_GROUPED_CONV_2D <#>`__
            -  `ANEURALNETWORKS_TRANSPOSE_CONV_2D <#>`__
      - 

         - Pooling operations
         - 

            -  `ANEURALNETWORKS_AVERAGE_POOL_2D <#>`__
            -  `ANEURALNETWORKS_L2_POOL_2D <#>`__
            -  `ANEURALNETWORKS_MAX_POOL_2D <#>`__
      - 

         - Activation operations
         - 

            -  `ANEURALNETWORKS_LOG_SOFTMAX <#>`__
            -  `ANEURALNETWORKS_LOGISTIC <#>`__
            -  `ANEURALNETWORKS_PRELU <#>`__
            -  `ANEURALNETWORKS_RELU <#>`__
            -  `ANEURALNETWORKS_RELU1 <#>`__
            -  `ANEURALNETWORKS_RELU6 <#>`__
            -  `ANEURALNETWORKS_SOFTMAX <#>`__
            -  `ANEURALNETWORKS_TANH <#>`__
      - 

         - Other operations
         - 

            -  `ANEURALNETWORKS_AXIS_ALIGNED_BBOX_TRANSFORM <#>`__
            -  `ANEURALNETWORKS_BIDIRECTIONAL_SEQUENCE_LSTM <#>`__
            -  `ANEURALNETWORKS_BIDIRECTIONAL_SEQUENCE_RNN <#>`__
            -  `ANEURALNETWORKS_BOX_WITH_NMS_LIMIT <#>`__
            -  `ANEURALNETWORKS_DETECTION_POSTPROCESSING <#>`__
            -  `ANEURALNETWORKS_FULLY_CONNECTED <#>`__
            -  `ANEURALNETWORKS_GENERATE_PROPOSALS <#>`__
            -  `ANEURALNETWORKS_HEATMAP_MAX_KEYPOINT <#>`__
            -  `ANEURALNETWORKS_LSH_PROJECTION <#>`__
            -  `ANEURALNETWORKS_LSTM <#>`__
            -  `ANEURALNETWORKS_RANDOM_MULTINOMIAL <#>`__
            -  `ANEURALNETWORKS_QUANTIZED_16BIT_LSTM <#>`__
            -  `ANEURALNETWORKS_RNN <#>`__
            -  `ANEURALNETWORKS_ROI_ALIGN <#>`__
            -  `ANEURALNETWORKS_ROI_POOLING <#>`__
            -  `ANEURALNETWORKS_SELECT <#>`__
            -  `ANEURALNETWORKS_SVDF <#>`__
            -  `ANEURALNETWORKS_UNIDIRECTIONAL_SEQUENCE_LSTM <#>`__
            -  `ANEURALNETWORKS_UNIDIRECTIONAL_SEQUENCE_RNN <#>`__

   **Known issue in API level 28:** When passing
   `ANEURALNETWORKS_TENSOR_QUANT8_ASYMM <#>`__
   tensors to the
   `ANEURALNETWORKS_PAD <#>`__
   operation, which is available on Android 9 (API level 28) and higher, the
   output from NNAPI may not match output from higher-level machine learning
   frameworks, such as `TensorFlow Lite <https://tensorflow.google.cn/lite>`__.
   You should instead pass only
   `ANEURALNETWORKS_TENSOR_FLOAT32 <#>`__.
   The issue is resolved in Android 10 (API level 29) and higher.

   .. rubric:: Build models
      :name: build-models

   In the following example, we create the two-operation model found in `figure 3 <#operands>`__.

   To build the model, follow these steps:

   #. Call the
      `ANeuralNetworksModel_create() <#>`__
      function to define an empty model.

      .. code:: prettyprint

         ANeuralNetworksModel* model = NULL;
         ANeuralNetworksModel_create(&model);

   #. Add the operands to your model by calling
      `ANeuralNetworks_addOperand() <#>`__.
      Their data types are defined using the
      `ANeuralNetworksOperandType <#>`__
      data structure.

      .. code:: prettyprint

         // In our example, all our tensors are matrices of dimension [3][4]
         ANeuralNetworksOperandType tensor3x4Type;
         tensor3x4Type.type = ANEURALNETWORKS_TENSOR_FLOAT32;
         tensor3x4Type.scale = 0.f;    // These fields are used for quantized tensors
         tensor3x4Type.zeroPoint = 0;  // These fields are used for quantized tensors
         tensor3x4Type.dimensionCount = 2;
         uint32_t dims[2] = {3, 4};
         tensor3x4Type.dimensions = dims;


         // We also specify operands that are activation function specifiers
         ANeuralNetworksOperandType activationType;
         activationType.type = ANEURALNETWORKS_INT32;
         activationType.scale = 0.f;
         activationType.zeroPoint = 0;
         activationType.dimensionCount = 0;
         activationType.dimensions = NULL;


         // Now we add the seven operands, in the same order defined in the diagram
         ANeuralNetworksModel_addOperand(model, &tensor3x4Type);  // operand 0
         ANeuralNetworksModel_addOperand(model, &tensor3x4Type);  // operand 1
         ANeuralNetworksModel_addOperand(model, &activationType); // operand 2
         ANeuralNetworksModel_addOperand(model, &tensor3x4Type);  // operand 3
         ANeuralNetworksModel_addOperand(model, &tensor3x4Type);  // operand 4
         ANeuralNetworksModel_addOperand(model, &activationType); // operand 5
         ANeuralNetworksModel_addOperand(model, &tensor3x4Type);  // operand 6

   #. For operands that have constant values, such as weights and biases that
      your app obtains from a training process, use the
      `ANeuralNetworksModel_setOperandValue() <#>`__
      and
      `ANeuralNetworksModel_setOperandValueFromMemory() <#>`__
      functions.

      In the following example, we set constant values from the training data
      file corresponding to the memory buffer we created in `Provide access to training data <#training-data>`__.

      .. code:: prettyprint

         // In our example, operands 1 and 3 are constant tensors whose values were
         // established during the training process
         const int sizeOfTensor = 3 * 4 * 4;    // The formula for size calculation is dim0 * dim1 * elementSize
         ANeuralNetworksModel_setOperandValueFromMemory(model, 1, mem1, 0, sizeOfTensor);
         ANeuralNetworksModel_setOperandValueFromMemory(model, 3, mem1, sizeOfTensor, sizeOfTensor);


         // We set the values of the activation operands, in our example operands 2 and 5
         int32_t noneValue = ANEURALNETWORKS_FUSED_NONE;
         ANeuralNetworksModel_setOperandValue(model, 2, &noneValue, sizeof(noneValue));
         ANeuralNetworksModel_setOperandValue(model, 5, &noneValue, sizeof(noneValue));

   #. For each operation in the directed graph you want to compute, add the
      operation to your model by calling the
      `ANeuralNetworksModel_addOperation() <#>`__
      function.

      As parameters to this call, your app must provide:

      -  the `operation type <#operations>`__
      -  the count of input values
      -  the array of the indexes for input operands
      -  the count of output values
      -  the array of the indexes for output operands

      Note that an operand cannot be used for both input and output of the same
      operation.

      .. code:: prettyprint

         // We have two operations in our example
         // The first consumes operands 1, 0, 2, and produces operand 4
         uint32_t addInputIndexes[3] = {1, 0, 2};
         uint32_t addOutputIndexes[1] = {4};
         ANeuralNetworksModel_addOperation(model, ANEURALNETWORKS_ADD, 3, addInputIndexes, 1, addOutputIndexes);


         // The second consumes operands 3, 4, 5, and produces operand 6
         uint32_t multInputIndexes[3] = {3, 4, 5};
         uint32_t multOutputIndexes[1] = {6};
         ANeuralNetworksModel_addOperation(model, ANEURALNETWORKS_MUL, 3, multInputIndexes, 1, multOutputIndexes);

   #. Identify which operands the model should treat as its inputs and outputs
      by calling the
      `ANeuralNetworksModel_identifyInputsAndOutputs() <#>`__
      function.

      .. code:: prettyprint

         // Our model has one input (0) and one output (6)
         uint32_t modelInputIndexes[1] = {0};
         uint32_t modelOutputIndexes[1] = {6};
         ANeuralNetworksModel_identifyInputsAndOutputs(model, 1, modelInputIndexes, 1 modelOutputIndexes);

   #. Optionally, specify whether
      `ANEURALNETWORKS_TENSOR_FLOAT32 <#>`__
      is allowed to be calculated with range or precision as low as that of the
      IEEE 754 16-bit floating-point format by calling
      `ANeuralNetworksModel_relaxComputationFloat32toFloat16() <#>`__.

   #. Call
      `ANeuralNetworksModel_finish() <#>`__
      to finalize the definition of your model. If there are no errors, this
      function returns a result code of
      `ANEURALNETWORKS_NO_ERROR <#>`__.

      .. code:: prettyprint

         ANeuralNetworksModel_finish(model);

   Once you create a model, you can compile it any number of times and execute
   each compilation any number of times.

   .. rubric:: Control flow
      :name: control-flow

   To incorporate control flow in an NNAPI model, do the following:

   #. Construct the corresponding execution subgraphs (``then`` and ``else``
      subgraphs for an ``IF`` statement, ``condition`` and ``body`` subgraphs
      for a ``WHILE`` loop) as standalone ``ANeuralNetworksModel*`` models:

      .. code:: prettyprint

         ANeuralNetworksModel* thenModel = makeThenModel();
         ANeuralNetworksModel* elseModel = makeElseModel();

   #. Create operands that reference those models within the model containing
      the control flow:

      .. code:: prettyprint

         ANeuralNetworksOperandType modelType = {
             .type = ANEURALNETWORKS_MODEL,
         };
         ANeuralNetworksModel_addOperand(model, &modelType);  // kThenOperandIndex
         ANeuralNetworksModel_addOperand(model, &modelType);  // kElseOperandIndex
         ANeuralNetworksModel_setOperandValueFromModel(model, kThenOperandIndex, &thenModel);
         ANeuralNetworksModel_setOperandValueFromModel(model, kElseOperandIndex, &elseModel);

   #. Add the control flow operation:

      .. code:: prettyprint

         uint32_t inputs[] = {kConditionOperandIndex,
                              kThenOperandIndex,
                              kElseOperandIndex,
                              kInput1, kInput2, kInput3};
         uint32_t outputs[] = {kOutput1, kOutput2};
         ANeuralNetworksModel_addOperation(model, ANEURALNETWORKS_IF,
                                           std::size(inputs), inputs,
                                           std::size(output), outputs);

   .. rubric:: Compilation
      :name: compiling

   The compilation step determines on which processors your model will be
   executed and asks the corresponding drivers to prepare for its execution.
   This could include the generation of machine code specific to the processors
   your model will run on.

   To compile a model, follow these steps:

   #. Call the
      `ANeuralNetworksCompilation_create() <#>`__
      function to create a new compilation instance.

      .. code:: prettyprint

         // Compile the model
         ANeuralNetworksCompilation* compilation;
         ANeuralNetworksCompilation_create(model, &compilation);

      Optionally, you can use `device assignment <#device-assignment>`__ to
      explicitly choose what devices to execute on.

   #. You can optionally influence how the runtime trades off between battery
      power usage and execution speed. You can do so by calling
      `ANeuralNetworksCompilation_setPreference() <#>`__.

      .. code:: prettyprint

         // Ask to optimize for low power consumption
         ANeuralNetworksCompilation_setPreference(compilation, ANEURALNETWORKS_PREFER_LOW_POWER);

      The preferences you can specify include:

      -  `ANEURALNETWORKS_PREFER_LOW_POWER <#>`__:
         Prefer executing in a way that minimizes battery drain. This is
         desirable for compilations that are executed often.
      -  `ANEURALNETWORKS_PREFER_FAST_SINGLE_ANSWER <#>`__:
         Prefer returning a single answer as fast as possible, even if this
         causes more power consumption. This is the default.
      -  `ANEURALNETWORKS_PREFER_SUSTAINED_SPEED <#>`__:
         Prefer maximizing the throughput of successive frames, such as when
         processing successive frames coming from the camera.

   #. You can optionally set up compilation caching by calling
      `ANeuralNetworksCompilation_setCaching <#>`__.

      .. code:: prettyprint

         // Set up compilation caching
         ANeuralNetworksCompilation_setCaching(compilation, cacheDir, token);

      Use
      `getCodeCacheDir() <#>`__
      for the ``cacheDir``. The ``token`` specified must be unique to each model
      within the application.

   #. Finalize the compilation definition by calling
      `ANeuralNetworksCompilation_finish() <#>`__.
      If there are no errors, this function returns a result code of
      `ANEURALNETWORKS_NO_ERROR <#>`__.

      .. code:: prettyprint

         ANeuralNetworksCompilation_finish(compilation);

   .. rubric:: Device discovery and assignment
      :name: discovery-assignment

   On Android devices running Android 10 (API level 29) and higher, NNAPI
   provides functions that allow machine learning framework libraries and apps
   to get information about the devices available and specify devices to be used
   for execution. Providing information about the available devices allows apps
   to get the exact version of the drivers found on a device to avoid known
   incompatibilities. By giving apps the ability to specify which devices are to
   execute different sections of a model, apps can be optimized for the Android
   device on which they are deployed.

   .. rubric:: Device discovery
      :name: device-discovery

   Use
   `ANeuralNetworks_getDeviceCount <#>`__
   to get the number of available devices. For each device, use
   `ANeuralNetworks_getDevice <#>`__
   to set an ``ANeuralNetworksDevice`` instance to a reference to that device.

   Once you have a device reference, you can find out additional information
   about that device using the following functions:

   -  `ANeuralNetworksDevice_getFeatureLevel <#>`__
   -  `ANeuralNetworksDevice_getName <#>`__
   -  `ANeuralNetworksDevice_getType <#>`__
   -  `ANeuralNetworksDevice_getVersion <#>`__

   .. rubric:: Device assignment
      :name: device-assignment

   Use
   `ANeuralNetworksModel_getSupportedOperationsForDevices <#>`__
   to discover which operations of a model can be run on specific devices.

   To control which accelerators to use for execution, call
   `ANeuralNetworksCompilation_createForDevices <#>`__
   in place of ``ANeuralNetworksCompilation_create``. Use the resulting
   ``ANeuralNetworksCompilation`` object, as normal. The function returns an
   error if the provided model contains operations that are not supported by the
   selected devices.

   If multiple devices are specified, the runtime is responsible for
   distributing the work across the devices.

   Similar to other devices, the NNAPI CPU implementation is represented by an
   ``ANeuralNetworksDevice`` with the name ``nnapi-reference`` and the type
   ``ANEURALNETWORKS_DEVICE_TYPE_CPU``. When calling
   ``ANeuralNetworksCompilation_createForDevices``, the CPU implementation is
   not used to handle the failure cases for model compilation and execution.

   It is an application’s responsibility to partition a model into sub-models
   that can run on the specified devices. Applications that don't need to do
   manual partitioning should continue to call the simpler
   `ANeuralNetworksCompilation_create <#>`__
   to use all available devices (including the CPU) to accelerate the model. If
   the model couldn't be fully supported by the devices you specified using
   ``ANeuralNetworksCompilation_createForDevices``,
   `ANEURALNETWORKS_BAD_DATA <#>`__
   is returned.

   .. rubric:: Model partitioning
      :name: model-partitioning

   When multiple devices are available for the model, the NNAPI runtime
   distributes the work across the devices. For example, if more than one device
   was provided to ``ANeuralNetworksCompilation_createForDevices``, all the
   specified ones will be considered when allocating the work. Note that, if the
   CPU device is not in the list, CPU execution will be disabled. When using
   ``ANeuralNetworksCompilation_create`` all available devices will be taken
   into account, including CPU.

   The distribution is done by selecting from the list of available devices, for
   each of the operations in the model, the device supporting the operation and
   declaring the best performance, i.e. the fastest execution time or the lowest
   power consumption, depending on the execution preference specified by the
   client. This partitioning algorithm doesn't account for possible
   inefficiencies caused by the IO between the different processors so, when
   specifying multiple processors (either explicitly when using
   ``ANeuralNetworksCompilation_createForDevices`` or implicitly by using
   ``ANeuralNetworksCompilation_create``) it's important to profile the
   resulting application.

   To understand how your model has been partitioned by NNAPI, check the Android
   logs for a message (at INFO level with tag ``ExecutionPlan``):

   .. code:: none

      ModelBuilder::findBestDeviceForEachOperation(op-name): device-index

   ``op-name`` is the descriptive name of the operation in the graph and
   ``device-index`` is the index of the candidate device in the list of devices.
   This list is the input provided to
   ``ANeuralNetworksCompilation_createForDevices`` or, if using
   ``ANeuralNetworksCompilation_createForDevices``, the list of devices returned
   when iterating over all devices using ``ANeuralNetworks_getDeviceCount`` and
   ``ANeuralNetworks_getDevice``.

   The message (at INFO level with tag ``ExecutionPlan``):

   .. code:: none

      ModelBuilder::partitionTheWork: only one best device: device-name

   This message indicates that the whole graph has been accelerated on the
   device ``device-name``.

   .. rubric:: Execution
      :name: executing

   The execution step applies the model to a set of inputs and stores the
   computation outputs to one or more user buffers or memory spaces that your
   app allocated.

   To execute a compiled model, follow these steps:

   #. Call the
      `ANeuralNetworksExecution_create() <#>`__
      function to create a new execution instance.

      .. code:: prettyprint

         // Run the compiled model against a set of inputs
         ANeuralNetworksExecution* run1 = NULL;
         ANeuralNetworksExecution_create(compilation, &run1);

   #. Specify where your app reads the input values for the computation. Your
      app can read input values from either a user buffer or an allocated memory
      space by calling
      `ANeuralNetworksExecution_setInput() <#>`__
      or
      `ANeuralNetworksExecution_setInputFromMemory() <#>`__
      respectively.

      .. code:: prettyprint

         // Set the single input to our sample model. Since it is small, we won't use a memory buffer
         float32 myInput[3][4] = { ...the data... };
         ANeuralNetworksExecution_setInput(run1, 0, NULL, myInput, sizeof(myInput));

      **Important:** The indexes you specify when setting execution inputs and
      outputs are indexes into the lists of inputs and outputs of the model as
      specified by
      `ANeuralNetworksModel_identifyInputsAndOutputs() <#>`__.
      Don't confuse them with the operand indexes used when creating the model.
      For example, for a model with three inputs, we should see three calls to
      `ANeuralNetworksExecution_setInput() <#>`__:
      one with an index of 0, one with an index of 1, and one with an index of
      2.

   #. Specify where your app writes the output values. Your app can write output
      values to either a user buffer or an allocated memory space, by calling
      `ANeuralNetworksExecution_setOutput() <#>`__
      or
      `ANeuralNetworksExecution_setOutputFromMemory() <#>`__
      respectively.

      .. code:: prettyprint

         // Set the output
         float32 myOutput[3][4];
         ANeuralNetworksExecution_setOutput(run1, 0, NULL, myOutput, sizeof(myOutput));

   #. Schedule the execution to start, by calling the
      `ANeuralNetworksExecution_startCompute() <#>`__
      function. If there are no errors, this function returns a result code of
      `ANEURALNETWORKS_NO_ERROR <#>`__.

      .. code:: prettyprint

         // Starts the work. The work proceeds asynchronously
         ANeuralNetworksEvent* run1_end = NULL;
         ANeuralNetworksExecution_startCompute(run1, &run1_end);

   #. Call the
      `ANeuralNetworksEvent_wait() <#>`__
      function to wait for the execution to complete. If the execution was
      successful, this function returns a result code of
      `ANEURALNETWORKS_NO_ERROR <#>`__.
      Waiting can be done on a different thread than the one starting the
      execution.

      .. code:: prettyprint

         // For our example, we have no other work to do and will just wait for the completion
         ANeuralNetworksEvent_wait(run1_end);
         ANeuralNetworksEvent_free(run1_end);
         ANeuralNetworksExecution_free(run1);

   #. Optionally, you can apply a different set of inputs to the compiled model
      by using the same compilation instance to create a new
      `ANeuralNetworksExecution <#>`__
      instance.

      .. code:: prettyprint

         // Apply the compiled model to a different set of inputs
         ANeuralNetworksExecution* run2;
         ANeuralNetworksExecution_create(compilation, &run2);
         ANeuralNetworksExecution_setInput(run2, ...);
         ANeuralNetworksExecution_setOutput(run2, ...);
         ANeuralNetworksEvent* run2_end = NULL;
         ANeuralNetworksExecution_startCompute(run2, &run2_end);
         ANeuralNetworksEvent_wait(run2_end);
         ANeuralNetworksEvent_free(run2_end);
         ANeuralNetworksExecution_free(run2);

   .. rubric:: Synchronous execution
      :name: synchronous-execution

   Asynchronous execution spends time to spawn and synchronize threads.
   Furthermore, the latency can be hugely variable, with the longest delays
   reaching up to 500 microseconds between the time a thread is notified or
   woken and the time it is eventually bound to a CPU core.

   To improve latency, you can instead direct an application to make a
   synchronous inference call to the runtime. That call will return only once an
   inference has been completed rather than returning once an inference has been
   started. Instead of calling
   `ANeuralNetworksExecution_startCompute <#>`__
   for an asynchronous inference call to the runtime, the application calls
   `ANeuralNetworksExecution_compute <#>`__
   to make a synchronous call to the runtime. A call to
   ``ANeuralNetworksExecution_compute`` does not take an
   ``ANeuralNetworksEvent`` and is not paired with a call to
   ``ANeuralNetworksEvent_wait``.

   **Note:**\  To estimate the impact of using
   ``ANeuralNetworksExecution_compute`` without modifying your application, set
   the ``debug.nn.syncexec-runtime`` property to ``1``, which causes
   ``ANeuralNetworksExecution_startCompute`` to function synchronously.

   .. rubric:: Burst executions
      :name: burst-executions

   On Android devices running Android 10 (API level 29) and higher, the NNAPI
   supports burst executions through the
   `ANeuralNetworksBurst <#>`__
   object. Burst executions are a sequence of executions of the same compilation
   that occur in rapid succession, such as those operating on frames of a camera
   capture or successive audio samples. Using ``ANeuralNetworksBurst`` objects
   may result in faster executions, as they indicate to accelerators that
   resources may be reused between executions and that accelerators should
   remain in a high-performance state for the duration of the burst.

   ``ANeuralNetworksBurst`` introduces only a small change in the normal
   execution path. You create a burst object using
   `ANeuralNetworksBurst_create <#>`__,
   as shown in the following code snippet:

   .. code:: prettyprint

      // Create burst object to be reused across a sequence of executions
      ANeuralNetworksBurst* burst = NULL;
      ANeuralNetworksBurst_create(compilation, &burst);

   Burst executions are synchronous. However, instead of using
   `ANeuralNetworksExecution_compute <#>`__
   to perform each inference, you pair the various
   `ANeuralNetworksExecution <#>`__
   objects with the same ``ANeuralNetworksBurst`` in calls to the function
   `ANeuralNetworksExecution_burstCompute <#>`__.

   .. code:: prettyprint

      // Create and configure first execution object
      // ...

      // Execute using the burst object
      ANeuralNetworksExecution_burstCompute(execution1, burst);

      // Use results of first execution and free the execution object
      // ...

      // Create and configure second execution object
      // ...

      // Execute using the same burst object
      ANeuralNetworksExecution_burstCompute(execution2, burst);

      // Use results of second execution and free the execution object
      // ...

   Free the ``ANeuralNetworksBurst`` object with
   `ANeuralNetworksBurst_free <#>`__
   when it is no longer needed.

   .. code:: prettyprint

      // Cleanup
      ANeuralNetworksBurst_free(burst);

   .. rubric:: Asynchronous command queues and fenced execution
      :name: async-command-queues

   In Android 11 and higher, NNAPI supports an additional way to schedule
   asynchronous execution through the
   `ANeuralNetworksExecution_startComputeWithDependencies() <#>`__
   method. When you use this method, the execution waits for all of the
   depending events to be signaled before starting the evaluation. Once the
   execution has completed and the outputs are ready to be consumed, the
   returned event is signaled.

   Depending on which devices handle the execution, the event might be backed by
   a `sync fence <https://source.android.google.cn/devices/graphics/sync#sync_fence>`__.
   You must call
   `ANeuralNetworksEvent_wait() <#>`__
   to wait for the event and recuperate the resources that the execution used.
   You can import sync fences to an event object using
   `ANeuralNetworksEvent_createFromSyncFenceFd() <#>`__,
   and you can export sync fences from an event object using
   `ANeuralNetworksEvent_getSyncFenceFd() <#>`__.

   .. rubric:: Dynamically sized outputs
      :name: dynamic-outputs

   To support models where the size of the output depends on the input data—that
   is, where the size cannot be determined at model execution time—use
   `ANeuralNetworksExecution_getOutputOperandRank <#>`__
   and
   `ANeuralNetworksExecution_getOutputOperandDimensions <#>`__.

   The following code sample shows how to do this:

   .. code:: prettyprint

      // Get the rank of the output
      uint32_t myOutputRank = 0;
      ANeuralNetworksExecution_getOutputOperandRank(run1, 0, &myOutputRank);

      // Get the dimensions of the output
      std::vector<uint32_t> myOutputDimensions(myOutputRank);
      ANeuralNetworksExecution_getOutputOperandDimensions(run1, 0, myOutputDimensions.data());

   .. rubric:: Cleanup
      :name: cleanup

   The cleanup step handles the freeing of internal resources used for your
   computation.

   .. code:: prettyprint

      // Cleanup
      ANeuralNetworksCompilation_free(compilation);
      ANeuralNetworksModel_free(model);
      ANeuralNetworksMemory_free(mem1);

   .. rubric:: Error management and CPU fallback
      :name: cpu-fallback

   If there is an error during partitioning, if a driver fails to compile a
   (piece of a) model, or if a driver fails to execute a compiled (piece of a)
   model, NNAPI might fall back to its own CPU implementation of the one or more
   operations.

   If the NNAPI client contains optimized versions of the operation (as, for
   example, TFLite) it might be advantageous to disable the CPU fallback and
   handle the failures with the client's optimized operation implementation.

   In Android 10, if compilation is performed using
   ``ANeuralNetworksCompilation_createForDevices``, then CPU fallback will be
   disabled.

   In Android P, NNAPI execution falls back to the CPU if execution on the
   driver fails. This is also true on Android 10 when
   ``ANeuralNetworksCompilation_create`` rather than
   ``ANeuralNetworksCompilation_createForDevices`` is used.

   First execution falls back for that single partition, and if that still
   fails, it retries the entire model on the CPU.

   If partitioning or compilation fails, the entire model will be tried on CPU.

   There are cases where some operations are not supported on CPU, and in such
   situations compilation or execution will fail rather than falling back.

   Even after disabling CPU fallback, there may still be operations in the model
   that are scheduled on the CPU. If the CPU is in the list of processors
   supplied to ``ANeuralNetworksCompilation_createForDevices``, and is either
   the only processor that supports those operations or is the processor that
   claims best performance for those operations, it will be chosen as a primary
   (non-fallback) executor.

   To ensure there is no CPU execution, use
   ``ANeuralNetworksCompilation_createForDevices`` while excluding the
   ``nnapi-reference`` from the list of devices. Starting in Android P, it is
   possible to disable fallback at execution time on DEBUG builds by setting the
   ``debug.nn.partition`` property to 2.

   .. rubric:: Memory domains
      :name: memory-domains

   In Android 11 and higher, NNAPI supports memory domains that provide
   allocator interfaces for opaque memories. This allows applications to pass
   device-native memories across executions, so that NNAPI does not copy or
   transform data unnecessarily when performing consecutive executions on the
   same driver.

   The memory domain feature is intended for tensors that are mostly internal to
   the driver and that don't need frequent access to the client side. Examples
   of such tensors include the state tensors in sequence models. For tensors
   that need frequent CPU access on the client side, use shared memory pools
   instead.

   To allocate an opaque memory, perform the following steps:

   #. Call the
      `ANeuralNetworksMemoryDesc_create() <#>`__
      function to create a new memory descriptor:

      .. code:: prettyprint

         // Create a memory descriptor
         ANeuralNetworksMemoryDesc* desc;
         ANeuralNetworksMemoryDesc_create(&desc);

   #. Specify all of the intended input and output roles by calling
      `ANeuralNetworksMemoryDesc_addInputRole() <#>`__
      and
      `ANeuralNetworksMemoryDesc_addOutputRole() <#>`__.

      .. code:: prettyprint

         // Specify that the memory may be used as the first input and the first output
         // of the compilation
         ANeuralNetworksMemoryDesc_addInputRole(desc, compilation, 0, 1.0f);
         ANeuralNetworksMemoryDesc_addOutputRole(desc, compilation, 0, 1.0f);

   #. Optionally, specify the memory dimensions by calling
      `ANeuralNetworksMemoryDesc_setDimensions() <#>`__.

      .. code:: prettyprint

         // Specify the memory dimensions
         uint32_t dims[] = {3, 4};
         ANeuralNetworksMemoryDesc_setDimensions(desc, 2, dims);

   #. Finalize the descriptor definition by calling
      `ANeuralNetworksMemoryDesc_finish() <#>`__.

      .. code:: prettyprint

         ANeuralNetworksMemoryDesc_finish(desc);

   #. Allocate as many memories as you need by passing the descriptor to
      `ANeuralNetworksMemory_createFromDesc() <#>`__.

      .. code:: prettyprint

         // Allocate two opaque memories with the descriptor
         ANeuralNetworksMemory* opaqueMem;
         ANeuralNetworksMemory_createFromDesc(desc, &opaqueMem);

   #. Free the memory descriptor when you no longer need it.

      .. code:: prettyprint

         ANeuralNetworksMemoryDesc_free(desc);

   The client may only use the created ``ANeuralNetworksMemory`` object with
   ``ANeuralNetworksExecution_setInputFromMemory()`` or
   ``ANeuralNetworksExecution_setOutputFromMemory()`` according to the roles
   specified in the ``ANeuralNetworksMemoryDesc`` object. The offset and length
   arguments must be set to 0, indicating that the whole memory is used. The
   client may also explicitly set or extract the contents of the memory by using
   `ANeuralNetworksMemory_copy() <#>`__.

   You can create opaque memories with roles of unspecified dimensions or rank.
   In that case, the memory creation might fail with the
   ``ANEURALNETWORKS_OP_FAILED`` status if it is not supported by the underlying
   driver. The client is encouraged to implement fallback logic by allocating a
   large enough buffer backed by Ashmem or BLOB-mode ``AHardwareBuffer``.

   When NNAPI no longer needs to access the opaque memory object, free the
   corresponding ``ANeuralNetworksMemory`` instance:

   .. code:: prettyprint

      ANeuralNetworksMemory_free(opaqueMem);

   .. rubric:: Measure performance
      :name: measure-performance

   You can evaluate your app's performance by measuring execution time or by
   profiling.

   .. rubric:: Execution time
      :name: execution_time

   When you want to determine total execution time through the runtime, you can
   use the synchronous execution API and measure the time taken by the call.
   When you want to determine total execution time through a lower level of the
   software stack, you can use
   `ANeuralNetworksExecution_setMeasureTiming <#>`__
   and
   `ANeuralNetworksExecution_getDuration <#>`__
   to get:

   -  execution time on an accelerator (not in the driver, which runs on the
      host processor).
   -  execution time in the driver, including time on the accelerator.

   The execution time in the driver excludes overhead such as that of the
   runtime itself and the IPC needed for the runtime to communicate with the
   driver.

   These APIs measure duration between the work submitted and work completed
   events, rather than the time a driver or accelerator devotes to performing
   the inference, possibly interrupted by context switching.

   For example, if inference 1 begins, then the driver stops work to perform
   inference 2, then it resumes and completes inference 1, the execution time
   for inference 1 will include the time when work was stopped to perform
   inference 2.

   This timing information may be useful for a production deployment of an
   application to collect telemetry for offline use. You can use the timing data
   to modify the app for higher performance.

   When using this functionality, bear in mind the following:

   -  Collecting timing information might have a performance cost.
   -  Only a driver is capable of computing the time spent in itself or on the
      accelerator, excluding time spent in NNAPI runtime and in IPC.
   -  You can use these APIs only with an ``ANeuralNetworksExecution`` that was
      created with ``ANeuralNetworksCompilation_createForDevices`` with
      ``numDevices = 1``.
   -  No driver is required to be able to report timing information.

   .. rubric:: Profile your application with Android Systrace
      :name: profile_your_application_using_android_systrace

   Starting with Android 10, NNAPI automatically generates
   `systrace <https://developer.android.google.cn/topic/performance/tracing/>`__
   events that you can use to profile your application.

   The NNAPI Source comes with a ``parse_systrace`` utility to process the
   systrace events generated by your application and generate a table view
   showing the time spent in the different phases of the model lifecycle
   (Instantiation, Preparation, Compilation Execution and Termination) and
   different layers of the applications. The layers in which your application is
   split are:

   -  ``Application``: the main application code
   -  ``Runtime``: NNAPI Runtime
   -  ``IPC``: The inter process communication between NNAPI Runtime and the
      Driver code
   -  ``Driver``: the accelerator driver process.

   .. rubric:: Generate the profiling analysys data
      :name: generating_the_profiling_analysys_data

   Assuming you checked out the AOSP source tree at $ANDROID_BUILD_TOP, and
   using the `TFLite image classification example <https://github.com/tensorflow/examples/tree/master/lite/examples/image_classification/android>`__
   as target application, you can generate the NNAPI profiling data with the
   following steps:

   #. Start the Android systrace with the following command:

   .. code:: prettyprint

      $ANDROID_BUILD_TOP/external/chromium-trace/systrace.py  -o trace.html -a org.tensorflow.lite.examples.classification nnapi hal freq sched idle load binder_driver

   The ``-o trace.html`` parameter indicates that the traces will be written in
   the ``trace.html``. When profiling own application you will need to replace
   ``org.tensorflow.lite.examples.classification`` with the process name
   specified in your app manifest.

   This will keep one of your shell console busy, don't run the command in
   background since it is interactively waiting for an ``enter`` to terminate.

   #. After the systrace collector is started, start your app and run your
      benchmark test.

   In our case you can start the *Image Classification* app from Android Studio
   or directly from your test phone UI if the app has already been installed. To
   generate some NNAPI data you need to configure the app to use NNAPI by
   selecting NNAPI as target device in the app configuration dialog.

   #. When the test completes, terminate the systrace by pressing ``enter`` on
      the console terminal active since step 1.

   #. Run the ``systrace_parser`` utility generate cumulative statistics:

   .. code:: prettyprint

      $ANDROID_BUILD_TOP/frameworks/ml/nn/tools/systrace_parser/parse_systrace.py --total-times trace.html

   The parser accepts the following parameters: - ``--total-times``: shows the
   total time spent in a layer including the time spent waiting for execution on
   a call to an underlying layer - ``--print-detail``: prints all the events
   that have been collected from systrace - ``--per-execution``: prints only the
   execution and its subphases (as per-execution times) instead of stats for all
   phases - ``--json``: produces the output in JSON format

   An example of the output is shown below:

   .. code:: devsite-click-to-copy

      ===========================================================================================================================================
      NNAPI timing summary (total time, ms wall-clock)                                                      Execution
                                                                 ----------------------------------------------------
                    Initialization   Preparation   Compilation           I/O       Compute      Results     Ex. total   Termination        Total
                    --------------   -----------   -----------   -----------  ------------  -----------   -----------   -----------   ----------
      Application              n/a         19.06       1789.25           n/a           n/a         6.70         21.37           n/a      1831.17*
      Runtime                    -         18.60       1787.48          2.93         11.37         0.12         14.42          1.32      1821.81
      IPC                     1.77             -       1781.36          0.02          8.86            -          8.88             -      1792.01
      Driver                  1.04             -       1779.21           n/a           n/a          n/a          7.70             -      1787.95

      Total                   1.77*        19.06*      1789.25*         2.93*        11.74*        6.70*        21.37*         1.32*     1831.17*
      ===========================================================================================================================================
      * This total ignores missing (n/a) values and thus is not necessarily consistent with the rest of the numbers

   The parser might fail if the collected events do not represent a complete
   application trace. In particular it might fail if systrace events generated
   to mark the end of a section are present in the trace without an associated
   section start event. This usually happens if some events from a previous
   profiling session are being generated when you start the systrace collector.
   In this case you would have to run your profiling again.

   .. rubric:: Add statistics for your application code to systrace_parser
      output
      :name: adding_statistics_for_your_application_code_to_systrace_parser_output

   The parse_systrace application is based on the built-in Android systrace
   functionality. You can add traces for specific operations in your app using
   the systrace API (`for
   Java <https://developer.android.google.cn/studio/profile/systrace/custom-events#managed-code>`__
   , `for native applications <https://developer.android.google.cn/studio/profile/systrace/custom-events#native-code>`__
   ) with custom event names.

   To associate your custom events with phases of the Application lifecycle,
   prepend your event name with one of the following strings:

   -  ``[NN_LA_PI]``: Application level event for Initialization
   -  ``[NN_LA_PP]``: Application level event for Preparation
   -  ``[NN_LA_PC]``: Application level event for Compilation
   -  ``[NN_LA_PE]``: Application level event for Execution

   Here is an example of how you can alter the TFLite image classification
   example code by adding a ``runInferenceModel`` section for the ``Execution``
   phase and the ``Application`` layer containing another other sections
   ``preprocessBitmap`` that won't be considered in NNAPI traces. The
   ``runInferenceModel`` section will be part of the systrace events processed
   by the nnapi systrace parser:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin
               :name: kotlin

            .. code:: kotlin

               /** Runs inference and returns the classification results. */
               fun recognizeImage(bitmap: Bitmap): List {
                  // This section won’t appear in the NNAPI systrace analysis
                  Trace.beginSection("preprocessBitmap")
                  convertBitmapToByteBuffer(bitmap)
                  Trace.endSection()

                  // Run the inference call.
                  // Add this method in to NNAPI systrace analysis.
                  Trace.beginSection("[NN_LA_PE]runInferenceModel")
                  long startTime = SystemClock.uptimeMillis()
                  runInference()
                  long endTime = SystemClock.uptimeMillis()
                  Trace.endSection()
                   ...
                  return recognitions
               }

         .. container:: section

            .. rubric:: Java
               :name: java

            .. code:: java

               /** Runs inference and returns the classification results. */
               public List recognizeImage(final Bitmap bitmap) {

                // This section won’t appear in the NNAPI systrace analysis
                Trace.beginSection("preprocessBitmap");
                convertBitmapToByteBuffer(bitmap);
                Trace.endSection();

                // Run the inference call.
                // Add this method in to NNAPI systrace analysis.
                Trace.beginSection("[NN_LA_PE]runInferenceModel");
                long startTime = SystemClock.uptimeMillis();
                runInference();
                long endTime = SystemClock.uptimeMillis();
                Trace.endSection();
                 ...
                Trace.endSection();
                return recognitions;
               }

   .. rubric:: Quality of service
      :name: quality-of-service

   In Android 11 and higher, NNAPI enables better quality of service (QoS) by
   allowing an application to indicate the relative priorities of its models,
   the maximum amount of time expected to prepare a given model, and the maximum
   amount of time expected to complete a given computation. Android 11 also
   introduces additional NNAPI `result codes <#>`__ that enable
   applications to understand failures such as missed execution deadlines.

   **Note:**\  The APIs for setting priority and timeouts act as hints to
   acceleration hardware and do not provide hard guarantees about execution
   time.

   .. rubric:: Set the priority of a workload
      :name: workload-priority

   To set the priority of an NNAPI workload, call
   `ANeuralNetworksCompilation_setPriority() <#>`__
   prior to calling ``ANeuralNetworksCompilation_finish()``.

   .. rubric:: Set deadlines
      :name: deadlines

   Applications can set deadlines for both model compilation and inference.

   -  To set the compilation timeout, call
      `ANeuralNetworksCompilation_setTimeout() <#>`__
      prior to calling ``ANeuralNetworksCompilation_finish()``.
   -  To set the inference timeout, call
      `ANeuralNetworksExecution_setTimeout() <#>`__
      prior to `starting the compilation <#compiling>`__.

   .. rubric:: More about operands
      :name: more_operands

   The following section covers advanced topics about using operands.

   .. rubric:: Quantized tensors
      :name: quantized_tensors

   A quantized tensor is a compact way to represent an n-dimensional array of
   floating point values.

   NNAPI supports 8-bit asymmetric quantized tensors. For these tensors, the
   value of each cell is represented by an 8-bit integer. Associated with the
   tensor is a scale and a zero point value. These are used to convert the 8-bit
   integers into the floating point values that are being represented.

   The formula is:

   .. code:: prettyprint

      (cellValue - zeroPoint) * scale

   where the zeroPoint value is a 32-bit integer and the scale a 32-bit floating
   point value.

   Compared to tensors of 32-bit floating point values, 8-bit quantized tensors
   have two advantages:

   -  Your application is smaller, as the trained weights take a quarter of the
      size of 32-bit tensors.
   -  Computations can often be executed faster. This is due to the smaller
      amount of data that needs to be fetched from memory and the efficiency of
      processors such as DSPs in doing integer math.

   While it is possible to convert a floating point model to a quantized one,
   our experience has shown that better results are achieved by training a
   quantized model directly. In effect, the neural network learns to compensate
   for the increased granularity of each value. For each quantized tensor, the
   scale and zeroPoint values are determined during the training process.

   In NNAPI, you define quantized tensor types by setting the type field of the
   `ANeuralNetworksOperandType <#>`__
   data structure to
   `ANEURALNETWORKS_TENSOR_QUANT8_ASYMM <#>`__.
   You also specify the scale and zeroPoint value of the tensor in that data
   structure.

   In addition to 8-bit asymmetric quantized tensors, NNAPI supports the
   following:

   -  `ANEURALNETWORKS_TENSOR_QUANT8_SYMM_PER_CHANNEL <#>`__
      which you can use for representing weights to
      ``CONV/DEPTHWISE_CONV/TRANSPOSED_CONV`` operations.
   -  `ANEURALNETWORKS_TENSOR_QUANT16_ASYMM <#>`__
      which you can use for the internal state of
      `QUANTIZED_16BIT_LSTM <#>`__.
   -  `ANEURALNETWORKS_TENSOR_QUANT8_SYMM <#>`__
      which can be an input to
      `ANEURALNETWORKS_DEQUANTIZE <#>`__.

   .. rubric:: Optional operands
      :name: optional_operands

   A few operations, like
   `ANEURALNETWORKS_LSH_PROJECTION <#>`__,
   take optional operands. To indicate in the model that the optional operand is
   omitted, call the
   `ANeuralNetworksModel_setOperandValue() <#>`__
   function, passing ``NULL`` for the buffer and 0 for the length.

   If the decision on whether the operand is present or not varies for each
   execution, you indicate that the operand is omitted by using the
   `ANeuralNetworksExecution_setInput() <#>`__
   or
   `ANeuralNetworksExecution_setOutput() <#>`__
   functions, passing ``NULL`` for the buffer and 0 for the length.

   .. rubric:: Tensors of unknown rank
      :name: tensors_of_unknown_rank

   Android 9 (API level 28) introduced model operands of unknown dimensions but
   known rank (the number of dimensions). Android 10 (API level 29) introduced
   tensors of unknown rank, as shown in
   `ANeuralNetworksOperandType <#>`__.

   .. rubric:: NNAPI benchmark
      :name: nnapi_benchmark

   The NNAPI benchmark is available on AOSP in ``platform/test/mlts/benchmark``
   (benchmark app) and ``platform/test/mlts/models`` (models and datasets).

   The benchmark evaluates latency and accuracy and compares drivers to the same
   work done using Tensorflow Lite running on the CPU, for the same models and
   datasets.

   To use the benchmark, do the following:

   #. Connect a target Android device to your computer, open a terminal window,
      and make sure the device is reachable through adb.

   #. If more than one Android device is connected, export the target device
      ``ANDROID_SERIAL`` environment variable.

   #. Navigate to the Android top-level source directory.

   #. Run the following commands:

      .. code:: none

         lunch aosp_arm-userdebug # Or aosp_arm64-userdebug if available
         ./test/mlts/benchmark/build_and_run_benchmark.sh

      At the end of a benchmark run, its results will be presented as an HTML
      page passed to ``xdg-open``.

   .. rubric:: NNAPI logs
      :name: nnapi_logs

   NNAPI generates useful diagnostic information in the system logs. To analyze
   the logs, use the
   `logcat <https://developer.android.google.cn/studio/command-line/logcat>`__
   utility.

   Enable verbose NNAPI logging for specific phases or components by setting the
   property ``debug.nn.vlog`` (using ``adb shell``) to the following list of
   values, separated by space, colon, or comma:

   -  ``model``: Model building
   -  ``compilation``: Generation of the model execution plan and compilation
   -  ``execution``: Model execution
   -  ``cpuexe``: Execution of operations using the NNAPI CPU implementation
   -  ``manager``: NNAPI extensions, available interfaces and capabilities
      related info
   -  ``all`` or ``1``: All the elements above

   For example, to enable full verbose logging use the command
   ``adb shell setprop debug.nn.vlog all``. To disable verbose logging, use the
   command ``adb shell setprop debug.nn.vlog '""'``.

   Once enabled, verbose logging generates log entries at INFO level with a tag
   set to the phase or component name.

   Beside the ``debug.nn.vlog`` controlled messages, NNAPI API components
   provide other log entries at various levels, each one using a specific log
   tag.

   To get a list of components, search the source tree using the following
   expression:

   ``grep -R 'define LOG_TAG' | awk -F '"' '{print $2}' | sort -u | egrep -v "Sample|FileTag|test"``

   This expression currently returns the following tags:

   -  BurstBuilder
   -  Callbacks
   -  CompilationBuilder
   -  CpuExecutor
   -  ExecutionBuilder
   -  ExecutionBurstController
   -  ExecutionBurstServer
   -  ExecutionPlan
   -  FibonacciDriver
   -  GraphDump
   -  IndexedShapeWrapper
   -  IonWatcher
   -  Manager
   -  Memory
   -  MemoryUtils
   -  MetaModel
   -  ModelArgumentInfo
   -  ModelBuilder
   -  NeuralNetworks
   -  OperationResolver
   -  Operations
   -  OperationsUtils
   -  PackageInfo
   -  TokenHasher
   -  TypeManager
   -  Utils
   -  ValidateHal
   -  VersionedInterfaces

   To control the level of log messages shown by ``logcat``, use the environment
   variable ``ANDROID_LOG_TAGS``.

   To show the full set of NNAPI log messages and disable any others, set
   ``ANDROID_LOG_TAGS`` to the following:

   .. code:: none

      BurstBuilder:V Callbacks:V CompilationBuilder:V CpuExecutor:V ExecutionBuilder:V ExecutionBurstController:V ExecutionBurstServer:V ExecutionPlan:V FibonacciDriver:V GraphDump:V IndexedShapeWrapper:V IonWatcher:V Manager:V MemoryUtils:V Memory:V MetaModel:V ModelArgumentInfo:V ModelBuilder:V NeuralNetworks:V OperationResolver:V OperationsUtils:V Operations:V PackageInfo:V TokenHasher:V TypeManager:V Utils:V ValidateHal:V VersionedInterfaces:V *:S.

   You can set ``ANDROID_LOG_TAGS`` using the following command:

   .. code:: none

      export ANDROID_LOG_TAGS=$(grep -R 'define LOG_TAG' | awk -F '"' '{ print $2 ":V" }' | sort -u | egrep -v "Sample|FileTag|test" | xargs echo -n; echo ' *:S')

   Note that this is just a filter that applies to ``logcat``. You still need to
   set the property ``debug.nn.vlog`` to ``all`` to generate verbose log info.

Last updated 2024-05-03 UTC.

/Image decoder
==============

.. https://developer.android.google.cn/ndk/guides/image-decoder?hl=en

.. container:: devsite-article-body clearfix

   The NDK `ImageDecoder <#>`__ API
   provides a standard API for Android C/C++ apps to decode images directly. App
   developers no longer need to use the Java APIs (via JNI) or third-party image
   decoding libraries. This API, along with encoding functions in the
   `Bitmap <#>`__ module, enables the following:

   -  Native apps and libraries can be smaller because they no longer have to
      link their own decoding libraries.
   -  Apps and libraries automatically benefit from platform security updates to
      decoding libraries.
   -  Apps can decode images directly into memory they provide. Apps can then
      post-process the image data (if desired) and pass it to OpenGL or their
      drawing code.

   This page describes how to use the API to decode an image.

   .. rubric:: Availability and capability
      :name: availability_and_capability

   The ``ImageDecoder`` API is available on apps that target Android 11 (API
   level 30) or higher. The implementation is inside the following files:

   -  ``imagedecoder.h`` for the decoder
   -  ``bitmap.h`` for the encoder
   -  ``libjnigraphics.so``

   The API supports the following image formats:

   -  JPEG

   -  PNG

   -  GIF

   -  WebP

   -  BMP

   -  ICO

   -  WBMP

   -  HEIF

   -  Digital negatives (via the DNG SDK)

   In order to cover all usages of the decoded raw images, this API does not
   provide higher level objects like those built on top of decoded images inside
   the Java framework, such as:

   -  `Drawable objects <#>`__.
   -  `NinePatch <#>`__: If present in
      an encoded image, NinePatch chunks are ignored.
   -  `Bitmap density <#>`__:
      ``AImageDecoder`` does not do any automatic size adjustment based on the
      screen's density, but it does allow decoding to a different size via
      `AImageDecoder_setTargetSize() <#>`__.
   -  Animations: Only decodes the first frame of an animated GIF or WebP file.

   .. rubric:: Decode an image
      :name: decode_an_image

   Decoding starts with some form of input representing the encoded image.
   ``AImageDecoder`` accepts multiple types of input:

   -  `AAsset <#>`__ (shown below)
   -  File descriptor
   -  Buffer

   The following code shows how to open an image ``Asset`` from a file, decode
   it, and then properly dispose of the decoder and asset. To see an example of
   rendering the decoded image, see the `teapot sample <https://github.com/android/ndk-samples/tree/develop/teapots/image-decoder/src/main/cpp/Texture.cpp#30>`__.

   .. code:: prettyprint

      AAssetManager* nativeManager = AAssetManager_fromJava(env, jAssets);
      const char* file = // Filename
      AAsset* asset = AAssetManager_open(nativeManager, file, AASSET_MODE_STREAMING);
      AImageDecoder* decoder;
      int result = AImageDecoder_createFromAAsset(asset, &decoder);
      if (result != ANDROID_IMAGE_DECODER_SUCCESS) {
        // An error occurred, and the file could not be decoded.
      }

      const AImageDecoderHeaderInfo* info = AImageDecoder_getHeaderInfo(decoder);
      int32_t width = AImageDecoderHeaderInfo_getWidth(info);
      int32_t height = AImageDecoderHeaderInfo_getHeight(info);
      AndroidBitmapFormat format =
             (AndroidBitmapFormat) AImageDecoderHeaderInfo_getAndroidBitmapFormat(info);
      size_t stride = AImageDecoder_getMinimumStride(decoder);  // Image decoder does not
                                                                // use padding by default
      size_t size = height * stride;
      void* pixels = malloc(size);

      result = AImageDecoder_decodeImage(decoder, pixels, stride, size);
      if (result != ANDROID_IMAGE_DECODER_SUCCESS) {
        // An error occurred, and the file could not be decoded.
      }

      // We’re done with the decoder, so now it’s safe to delete it.
      AImageDecoder_delete(decoder);

      // The decoder is no longer accessing the AAsset, so it is safe to
      // close it.
      AAsset_close(asset);

      // Draw the pixels somewhere

      // Free the pixels when done drawing with them
      free(pixels);

Last updated 2024-05-03 UTC.
::https://developer.android.google.cn/ndk/guides/cmake?hl=en
.. container:: devsite-article-body clearfix

   The Android NDK supports using `CMake <https://cmake.org/>`__ to compile C
   and C++ code for your application. This page discusses how to use CMake with
   the NDK via the Android Gradle Plugin's ``ExternalNativeBuild`` or when
   invoking CMake directly.

   **Note:**\  If you are using Android Studio, go to `Add C and C++ code to
   your project </studio/projects/add-native-code>`__ to learn the basics of
   adding native sources to your project, creating a CMake build script, adding
   your CMake project as a Gradle dependency, and using newer versions of CMake
   than those included in the SDK.
   .. rubric:: The CMake toolchain file
      :name: file

   The NDK supports CMake via a `toolchain
   file <https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html>`__.
   Toolchain files are CMake files that customize the behavior of the toolchain
   for cross-compiling. The toolchain file used for the NDK is located in the
   NDK at ``<NDK>/build/cmake/android.toolchain.cmake``.

   **Note:**\  If the Android SDK is installed, then the NDK is installed in the
   SDK directory in ``ndk/``\ ``version``\ ``/`` or ``ndk-bundle/``.
   Build parameters such as ABI, ``minSdkVersion``, etc. are given on the
   command line when invoking ``cmake``. For a list of supported arguments, see
   the `Toolchain arguments <#variables>`__ section.

   **Warning:**\  CMake has its `own built-in NDK
   support <https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html#cross-compiling-for-android>`__.
   Before CMake 3.21, this workflow is not supported by Android and is often
   broken with new NDK releases. Starting from CMake 3.21, the implementations
   are merged. CMake's built-in support has similar behavior to the NDK
   toolchain file, though variable names differ. Starting from Android NDK r23,
   the toolchain file will delegate to CMake's built-in support when using CMake
   3.21 or later. See `Issue 463 <https://github.com/android/ndk/issues/463>`__
   for more information. Note that the Android Gradle Plugin still uses the
   NDK's toolchain file automatically.
   .. rubric:: Usage
      :name: usage

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: Gradle
            :name: gradle

         Use of the CMake toolchain file is automatic when using
         ``externalNativeBuild``. See Android Studio's `Add C and C++ code to
         your project </studio/projects/add-native-code>`__ guide for more
         information.

      .. container:: section

         .. rubric:: Command Line
            :name: command-line

         When building with CMake outside of Gradle, the toolchain file itself
         and its arguments must be passed to CMake. For example:

         .. code:: prettyprint

            $ cmake \
                -DCMAKE_TOOLCHAIN_FILE=$NDK/build/cmake/android.toolchain.cmake \
                -DANDROID_ABI=$ABI \
                -DANDROID_PLATFORM=android-$MINSDKVERSION \
                $OTHER_ARGS

   .. rubric:: Toolchain arguments
      :name: variables

   The following arguments can be passed to the CMake toolchain file. If
   building with Gradle, add arguments to
   ``android.defaultConfig.externalNativeBuild.cmake.arguments`` as described in
   the `ExternalNativeBuild
   docs </reference/tools/gradle-api/7.1/com/android/build/api/dsl/ExternalNativeBuildOptions>`__.
   If building from the command line, pass arguments to CMake with ``-D``. For
   example, to force armeabi-v7a to not build with Neon support, pass
   ``-DANDROID_ARM_NEON=FALSE``.

   **Note:**\  Any required arguments are passed automatically by Gradle and
   need only be passed explicitly if building from the command line.
   .. rubric:: ``ANDROID_ABI``
      :name: android_abi

   **Note:**\  This is a required argument.
   The target ABI. For information on supported ABIs, see `Android
   ABIs </ndk/guides/abis>`__.

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: Gradle
            :name: gradle_1

         Gradle provides this argument automatically. Do not explicitly set this
         argument in your ``build.gradle`` file. To control what ABIs Gradle
         targets, use ``abiFilters`` as described in `Android
         ABIs </ndk/guides/abis>`__.

      .. container:: section

         .. rubric:: Command Line
            :name: command-line_1

         CMake builds for a single target per build. To target more than one
         Android ABI, you must build once per ABI. It is recommended to use
         different build directories for each ABI to avoid collisions between
         builds.

   ========================= ========================
   Value                     Notes
   ========================= ========================
   ``armeabi-v7a``           
   ``armeabi-v7a with NEON`` Same as ``armeabi-v7a``.
   ``arm64-v8a``             
   ``x86``                   
   ``x86_64``                
   ========================= ========================

   .. rubric:: ``ANDROID_ARM_MODE``
      :name: android_arm_mode

   Specifies whether to generate arm or thumb instructions for armeabi-v7a. Has
   no effect for other ABIs. For more information, see the `Android
   ABIs </ndk/guides/abis>`__ documentation.

   ===== =================
   Value Notes
   ===== =================
   arm   
   thumb Default behavior.
   ===== =================

   .. rubric:: ``ANDROID_ARM_NEON``
      :name: android_arm_neon

   Enables or disables NEON for armeabi-v7a. Has no effect for other ABIs.
   Defaults to true for API level (``minSdkVersion`` or ``ANDROID_PLATFORM``) 23
   or newer, false otherwise. For more information, see the `Neon
   support </ndk/guides/cpu-arm-neon>`__ documentation.

   ===== ==================================
   Value Notes
   ===== ==================================
   TRUE  Default for API level 23 or newer.
   FALSE Default for API level 22 or older.
   ===== ==================================

   .. rubric:: ``ANDROID_LD``
      :name: android_ld

   Selects which linker to use. `lld <https://lld.llvm.org>`__ is currently
   experimental for the NDK and can be enabled with this argument.

   ======= =========================================
   Value   Notes
   ======= =========================================
   lld     Enables lld.
   default Use the default linker for the given ABI.
   ======= =========================================

   .. rubric:: ``ANDROID_NATIVE_API_LEVEL``
      :name: android_native_api_level

   Alias for `ANDROID_PLATFORM <#android_platform>`__.

   .. rubric:: ``ANDROID_PLATFORM``
      :name: android_platform

   Specifies the minimum API level supported by the application or library. This
   value corresponds to the application's ``minSdkVersion``.

   .. container:: ds-selector-tabs

      .. container:: section

         .. rubric:: Gradle
            :name: gradle_2

         When using the Android Gradle Plugin, this value is automatically set
         to match the application's ``minSdkVersion`` and should not be set
         manually.

      .. container:: section

         .. rubric:: Command Line
            :name: command-line_2

         When invoking CMake directly, this value defaults to the lowest API
         level supported by the NDK in use. For example, with NDK r20 this value
         defaults to API level 16.

   **Warning:**\  NDK libraries cannot be run on devices with an API level below
   the ``ANDROID_PLATFORM`` value with which the code was built.
   Multiple formats are accepted for this parameter:

   -  ``android-$API_LEVEL``
   -  ``$API_LEVEL``
   -  ``android-$API_LETTER``

   The ``$API_LETTER`` format allows you to specify ``android-N`` without the
   need to determine the number associated with that release. Note that some
   releases received an API increase without a letter increase. These APIs can
   be specified by appending the ``-MR1`` suffix. For example, API level 25 is
   ``android-N-MR1``.

   .. rubric:: ``ANDROID_STL``
      :name: android_stl

   Specifies which STL to use for this application. For more information, see
   `C++ library support </ndk/guides/cpp-support>`__. By default, ``c++_static``
   will be used.

   **Caution:**\  The default behavior is not appropriate for all applications.
   Be sure to read the `C++ library support </ndk/guides/cpp-support>`__ guide
   and in particular the section about `static
   runtimes </ndk/guides/cpp-support#static_runtimes>`__ before choosing an STL.

   +------------+----------------------------------------------------------------+
   | Value      | Notes                                                          |
   +============+================================================================+
   | c++_shared | The shared library variant of                                  |
   |            | `libc++ </ndk/guides/cpp-support#libc>`__.                     |
   +------------+----------------------------------------------------------------+
   | c++_static | The static library variant of                                  |
   |            | `libc++ </ndk/guides/cpp-support#libc>`__.                     |
   +------------+----------------------------------------------------------------+
   | none       | No C++ standard library support.                               |
   +------------+----------------------------------------------------------------+
   | system     | The `system STL </ndk/guides/cpp-support#system>`__            |
   +------------+----------------------------------------------------------------+

   .. rubric:: Understand the CMake build command
      :name: build-command

   When debugging CMake build issues, it's helpful to know the specific build
   arguments that Gradle uses when cross-compiling for Android.

   The Android Gradle Plugin saves the build arguments it uses for executing a
   CMake build for each ABI and `build type </studio/build/build-variants>`__
   pair to the ``build_command.txt``. These files are found in the following
   directory:

   .. code:: prettyprint

      <project-root>/<module-root>/.cxx/cmake/<build-type>/<ABI>/

   The following snippet shows an example of the CMake arguments to build a
   debuggable release of the
   ```hello-jni`` <https://github.com/android/ndk-samples/tree/main/hello-jni>`__
   sample targeting the ``armeabi-v7a`` architecture.

   .. code:: prettyprint

                          Executable : ${HOME}/Android/Sdk/cmake/3.10.2.4988404/bin/cmake
      arguments :
      -H${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/src/main/cpp
      -DCMAKE_FIND_ROOT_PATH=${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/.cxx/cmake/universalDebug/prefab/armeabi-v7a/prefab
      -DCMAKE_BUILD_TYPE=Debug
      -DCMAKE_TOOLCHAIN_FILE=${HOME}/Android/Sdk/ndk/22.1.7171670/build/cmake/android.toolchain.cmake
      -DANDROID_ABI=armeabi-v7a
      -DANDROID_NDK=${HOME}/Android/Sdk/ndk/22.1.7171670
      -DANDROID_PLATFORM=android-23
      -DCMAKE_ANDROID_ARCH_ABI=armeabi-v7a
      -DCMAKE_ANDROID_NDK=${HOME}/Android/Sdk/ndk/22.1.7171670
      -DCMAKE_EXPORT_COMPILE_COMMANDS=ON
      -DCMAKE_LIBRARY_OUTPUT_DIRECTORY=${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/build/intermediates/cmake/universalDebug/obj/armeabi-v7a
      -DCMAKE_RUNTIME_OUTPUT_DIRECTORY=${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/build/intermediates/cmake/universalDebug/obj/armeabi-v7a
      -DCMAKE_MAKE_PROGRAM=${HOME}/Android/Sdk/cmake/3.10.2.4988404/bin/ninja
      -DCMAKE_SYSTEM_NAME=Android
      -DCMAKE_SYSTEM_VERSION=23
      -B${HOME}/Dev/github-projects/googlesamples/ndk-samples/hello-jni/app/.cxx/cmake/universalDebug/armeabi-v7a
      -GNinja
      jvmArgs :


                          Build command args: []
                          Version: 1

   .. rubric:: Use prebuilt libraries
      :name: using_prebuilt_libraries

   If the prebuilt library you need to import is distributed as an AAR, follow
   `Studio's dependency
   docs <https://developer.android.google.cn/studio/build/dependencies#native-dependencies-with-agp>`__
   to import and use those. If you are not using AGP you can follow
   https://google.github.io/prefab/example-workflow.html, but it is likely much
   easier to migrate to AGP.

   For libraries that are not distributed as an AAR, instructions on using
   prebuilt libraries with CMake, see the ``add_library`` documentation
   regarding ``IMPORTED`` targets in the `CMake
   manual <https://cmake.org/cmake/help/latest/command/add_library.html>`__.

   .. rubric:: Building third-party code
      :name: building_third-party_code

   There are a handful of ways to build third-party code as part of your CMake
   project, and which option works best will depend on your situation. The best
   option will often be to not do this at all. Instead, `build an
   AAR <https://developer.android.google.cn/studio/build/dependencies?buildsystem=cmake&agpversion=4.1#publish-native-libs-in-aars>`__
   for the library and consume that in your application. You do not necessarily
   need to *publish* that AAR. It can be internal to your Gradle project.

   If that's not an option:

   -  Vendor (i.e. copy) the third-party source into your repository and use
      `add_subdirectory <https://cmake.org/cmake/help/latest/command/add_subdirectory.html>`__
      to build it. This only works if the other library is also built with
      CMake.
   -  Define an
      `ExternalProject <https://cmake.org/cmake/help/latest/module/ExternalProject.html>`__.
   -  Build the library separately from your project and follow `Use prebuilt
      libraries <#using_prebuilt_libraries>`__ to import it as a prebuilt.

   .. rubric:: YASM support in CMake
      :name: yasm-cmake

   The NDK provides CMake support for building assembly code written in
   `YASM <http://yasm.tortall.net/>`__ to run on x86 and x86-64 architectures.
   YASM is an open-source assembler for x86 and x86-64 architectures, based on
   the NASM assembler.

   To build assembly code with CMake, make the following changes in your
   project's ``CMakeLists.txt``:

   #. Call
      ```enable_language`` <https://cmake.org/cmake/help/latest/command/enable_language.html>`__
      with the value set to ``ASM_NASM``.
   #. Depending on whether you are building a shared library or an executable
      binary, call
      ```add_library`` <https://cmake.org/cmake/help/latest/command/add_library.html>`__
      or
      ```add_executable`` <https://cmake.org/cmake/help/latest/command/add_executable.html>`__.
      In the arguments, pass in a list of source files consisting of the
      ``.asm`` files for the assembly program in YASM and the ``.c`` files for
      the associated C libraries or functions.

   The following snippet shows how you might configure your ``CMakeLists.txt``
   to build a YASM program as a shared library.

   .. code:: prettyprint

      cmake_minimum_required(VERSION 3.6.0)

      enable_language(ASM_NASM)

      add_library(test-yasm SHARED jni/test-yasm.c jni/print_hello.asm)

   For an example of how to build a YASM program as an executable, see the `yasm
   test <https://android.googlesource.com/platform/ndk/+/master/tests/device/yasm/>`__
   in the NDK git repository.

   .. rubric:: Report problems
      :name: issues

   If you run into any issues with the NDK or its CMake toolchain file, report
   them via the `android-ndk/ndk <https://github.com/android/ndk/issues>`__
   issue tracker on GitHub. For Gradle or Android Gradle Plugin issues, `report
   a Studio bug <https://developer.android.google.cn/studio/report-bugs>`__
   instead.

Content and code samples on this page are subject to the licenses described in
the `Content License </license>`__. Java and OpenJDK are trademarks or
registered trademarks of Oracle and/or its affiliates.

Last updated 2024-03-25 UTC.


/TOC 💛 NDK Samples
====================

.. https://developer.android.google.cn/ndk/samples?hl=en

.. container:: section

   -  `Overview <https://developer.android.google.cn/ndk/samples>`__

   -  Walkthroughs

      -  `Overview <https://developer.android.google.cn/ndk/samples/walkthroughs>`__
      -  `hello-jni <https://developer.android.google.cn/ndk/samples/sample_hellojni>`__
      -  `native-activity <https://developer.android.google.cn/ndk/samples/sample_na>`__
      -  `Teapot <https://developer.android.google.cn/ndk/samples/sample_teapot>`__


/Samples: Overview
==================

.. container:: section

   -  `Home <https://developer.android.google.cn/>`__
   -  `NDK <https://developer.android.google.cn/ndk>`__
   -  `Develop <https://developer.android.google.cn/develop>`__
   -  `Samples <https://developer.android.google.cn/ndk/samples>`__

   .. rubric:: Samples: Overview
      :name: samples-overview
      :class: devsite-page-title


   Welcome to the NDK samples area. Here, you can download a
   variety of sample apps to help deepen your understanding the NDK.

   .. rubric:: NDK Samples
      :name: ndk-samples

   From this page, you can download samples that provide a look
   at the NDK in action. A few of the topics covered are:

   -  Managing your native app's activity lifecycle.
   -  Using native OpenGL on an Android device.
   -  Implementing native audio.
   -  Exporting modules.

   .. container::
      :name: sdk-terms-form

      `Browse NDK samples on GitHub <https://github.com/android/ndk-samples/tree/main>`__

      .. rubric:: Vulkan Samples

      Vulkan samples are located separately from those for the rest
      of the NDK. To explore these samples, click on the link below.

   .. container::
      :name: Vulkan-terms-form

      `Browse Vulkan samples on GitHub <https://github.com/LunarG/VulkanSamples>`__

      .. rubric:: Google Play Games Samples
         :name: play-games-samples

      The Google Play games services C++ SDK samples illustrate how
      to use these services when building your Android apps. To
      explore these samples, click on the link below.

   .. container::
      :name: play-games-samples-terms-form

      `Browse Google Play Games C++ SDK samples on GitHub <https://github.com/playgameservices/cpp-android-basic-samples>`__

   Last updated 2020-10-30 UTC.


/Samples: Walkthroughs Overview
===============================

.. https://developer.android.google.cn/ndk/samples/walkthroughs?hl=en

.. container:: devsite-article-body clearfix

   This section provides detailed walkthroughs of several key samples. The
   samples are as follows:

   -  `hello-jni <https://developer.android.google.cn/ndk/samples/sample_hellojni>`__:
       A very basic app that illustrates core workings of the NDK.

   -  `native-activity <https://developer.android.google.cn/ndk/samples/sample_na>`__
      : An app that shows the fundamentals of constructing a purely native app. 
      It places particular emphasis on the ``android_native_app_glue library``.
      
   -  `Teapot <https://developer.android.google.cn/ndk/samples/sample_teapot>`__
      : A simple OpenGL demo, showcasing the ``ndk_helper`` class.

Last updated 2019-12-27 UTC.


/hello-jni
==========

.. https://developer.android.google.cn/ndk/samples/sample_hellojni?hl=en

.. container:: devsite-article-body clearfix

   .. container::

      .. container:: jd-descr

         This sample guides you through hello-jni, a minimal C/C++ application
         built with the NDK. This sample is in the
         `hello-jni <https://github.com/android/ndk-samples/tree/android-mk/hello-jni>`__ 
         directory of ndk-samples repo, inside 
         `android-mk branch <https://github.com/android/ndk-samples/tree/android-mk>`__.

         .. rubric:: Android.mk

         The following two lines provide the name of the native source file,
         along with the name of the shared library to build. The full name of
         the built library is ``libhello-jni.so``, once the build system adds
         the ``lib`` prefix and the ``.so`` extension.

         .. code::

            LOCAL_SRC_FILES := hello-jni.c
            LOCAL_MODULE    := hello-jni

         For more information about what the ``Android.mk`` file does, and how
         to use it, see `Android.mk <https://developer.android.google.cn/ndk/guides/android_mk>`__.

         .. rubric:: Application.mk

         This line tells the build system the CPU and architecture against which
         to build. In this example, the build system builds for all supported
         architectures.

         .. code::

            APP_ABI := all

         For more information about the ``Application.mk`` file, and how to use
         it, see `Application.mk <https://developer.android.google.cn/ndk/guides/application_mk>`__.

         .. rubric:: Java-side Implementation

         The ``helloJNI.java`` file is located in
         ``hellojni/src/com/example/hellojni/``. It calls a function to retrieve
         a string from the native side, then displays it on the screen.

         The source code contains three lines of particular interest to the NDK
         user. They are presented here in the order in which they are used,
         rather than by line order.

         This function call loads the ``.so`` file upon application startup.

         .. container::

            .. container:: ds-selector-tabs

               .. container:: section

                  .. rubric:: Kotlin

                  .. code:: kotlin

                     System.loadLibrary("hello-jni")

               .. container:: section

                  .. rubric:: Java

                  .. code:: java

                     System.loadLibrary("hello-jni");

         The ``native`` keyword in this method declaration tells the virtual
         machine that the function is in the shared library (that is,
         implemented on the native side).

         .. container::

            .. container:: ds-selector-tabs

               .. container:: section

                  .. rubric:: Kotlin

                  .. code:: kotlin

                     external fun stringFromJNI(): String

               .. container:: section

                  .. rubric:: Java

                  .. code:: java

                     public native String stringFromJNI();

         The Android framework calls the function loaded and declared in the
         previous steps, displaying the string on the screen.

         .. container::

            .. container:: ds-selector-tabs

               .. container:: section

                  .. rubric:: Kotlin

                  .. code:: kotlin

                     tv.text = stringFromJNI()

               .. container:: section

                  .. rubric:: Java

                  .. code:: java

                     tv.setText( stringFromJNI() );

         .. rubric:: C-side Implementation
            :name: ci

         The ``hello-jni.c`` file is located in ``hello-jni/jni/``. It contains
         a function that returns a string that `the Java side
         requested <#ji>`__). The function declaration is as follows:

         .. code:: cpp

            JNIEXPORT jstring JNICALL
            Java_com_example_hellojni_HelloJni_stringFromJNI( JNIEnv* env,
                                                              jobject thiz )

         This declaration corresponds to the native function declared in the
         Java source code. The return type, ``jstring``, is a data type defined
         in the `Java Native Interface
         Specification <http://docs.oracle.com/javase/7/docs/technotes/guides/jni/spec/jniTOC.html>`__.
         It is not actually a string, but a pointer to a Java string.

         After ``jstring`` comes the function name, which is based on the Java
         function name and the path to the file containing it. Construct it
         according to the following rules:

         -  Prepend ``Java_`` to it.
         -  Describe the filepath relative to the top-level source directory.
         -  Use underscores in place of forward slashes.
         -  Omit the ``.java`` file extension.
         -  After the last underscore, append the function name.

         Following these rules, this example uses the function name
         ``Java_com_example_hellojni_HelloJni_stringFromJNI``. This name refers
         to a Java function called ``stringFromJNI()``, which resides in
         ``hellojni/src/com/example/hellojni/HelloJni.java``.

         ``JNIEnv*`` is the pointer to the VM, and ``jobject`` is a pointer to
         the implicit ``this`` object passed from the Java side.

         The following line calls the VM API ``(*env)``, and passes it a return
         value: that is, the string that the function on the Java side had
         requested.

         .. code:: cpp

            return (*env)->NewStringUTF(env, "Hello from JNI !
            Compiled with ABI " ABI ".");

Last updated 2024-01-03 UTC.

/native-activity
================

.. https://developer.android.google.cn/ndk/samples/sample_na?hl=en

.. container:: devsite-article-body clearfix

   .. container::

      .. container:: jd-descr

         The native-activity sample resides under the `NDK samples
         root <https://github.com/android/ndk-samples/>`__, in folder
         ``native-activity``. It is a very simple example of a purely native
         application, with no Java source code. In the absence of any Java
         source, the Java compiler still creates an executable stub for the
         virtual machine to run. The stub serves as a wrapper for the actual,
         native program, which is located in the ``.so`` file.

         The app itself simply renders a color onto the entire screen, and then
         changes the color partly in response to movement that it detects.

         .. rubric:: AndroidManifest.xml

         An app with only native code must not specify an Android API level
         lower than 9, which introduced the
         `NativeActivity <https://developer.android.google.cn/ndk/guides/concepts#naa>`__ framework class.

         .. code:: xml

            <uses-sdk android:minSdkVersion="9" />

         The following line declares ``android:hasCode`` as ``false``, as this
         app has only native code–no Java.

         .. code:: xml

            <application android:label="@string/app_name"
                         android:hasCode="false">

         The next line declares the ``NativeActivity`` class.

         .. code:: xml

            <activity android:name="android.app.NativeActivity"

         Finally, the manifest specifies ``android:value`` as the name of the
         shared library to be built, minus the initial ``lib`` and the ``.so``
         extension. This value must be the same as the name of ``LOCAL_MODULE``
         in ``Android.mk``.

         .. code:: xml

            <meta-data android:name="android.app.lib_name"
                       android:value="native-activity" />

         .. rubric:: Android.mk

         This file begins by providing the name of the shared library to
         generate.

         .. code::

            LOCAL_MODULE    := native-activity

         Next, it declares the name of the native source-code file.

         .. code::

            LOCAL_SRC_FILES := main.c

         Next, it lists the external libraries for the build system to use in
         building the binary. The ``-l`` (link-against) option precedes each
         library name.

         -  ``log`` is a logging library.
         -  ``android`` encompasses the standard Android support APIs for NDK.
            For more information about the APIs that Android and the NDK
            support, see `Android NDK Native APIs <https://developer.android.google.cn/ndk/guides/stable_apis>`__.
         -  ``EGL`` corresponds to the platform-specific portion of the graphics
            API.
         -  ``GLESv1_CM`` corresponds to OpenGL ES, the version of OpenGL for
            Android. This library depends on EGL.

         For each library:

         -  The actual file name starts with ``lib``, and ends with the ``.so``
            extension. For example, the actual file name for the ``log`` library
            is ``liblog.so``.
         -  The library resides in the following directory, NDK root:
            ``<ndk>/platforms/android-<sdk_version>/arch-<abi>/usr/lib/``.

         .. code::

            LOCAL_LDLIBS    := -llog -landroid -lEGL -lGLESv1_CM

         The next line provides the name of the static library,
         ``android_native_app_glue``, which the application uses to manage
         ``NativeActivity`` lifecycle events and touch input.

         .. code::

            LOCAL_STATIC_LIBRARIES := android_native_app_glue

         The final line tells the build system to build this static library. The
         ``ndk-build`` script places the built library
         (``libandroid_native_app_glue.a``) into the ``obj`` directory generated
         during the build process. For more information about the
         ``android_native_app_glue`` library, see its
         ``android_native_app_glue.h`` header and corresponding ``.c`` source
         file.

         .. code::

            $(call import-module,android/native_app_glue)

         For more information about the ``Android.mk`` file, see
         `Android.mk <https://developer.android.google.cn/ndk/guides/android_mk>`__.

         .. rubric:: main.c
            :name: mac

         This file essentially contains the entire progam.

         The following includes correspond to the libraries, both shared and
         static, enumerated in ``Android.mk``.

         .. code:: cpp

            #include <EGL/egl.h>
            #include <GLES/gl.h>


            #include <android/sensor.h>
            #include <android/log.h>
            #include <android_native_app_glue>

         The ``android_native_app_glue`` library calls the following function,
         passing it a predefined state structure. It also serves as a wrapper
         that simplifies handling of ``NativeActivity`` callbacks.

         .. code:: cpp

            void android_main(struct android_app* state) {

         Next, the program handles events queued by the glue library. The event
         handler follows the state structure.

         .. code:: cpp

            struct engine engine;



            // Suppress link-time optimization that removes unreferenced code
            // to make sure glue isn't stripped.
            app_dummy();


            memset(&engine, 0, sizeof(engine));
            state->userData = &engine;
            state->onAppCmd = engine_handle_cmd;
            state->onInputEvent = engine_handle_input;
            engine.app = state;

         The application prepares to start monitoring the sensors, using the
         APIs in ``sensor.h``.

         .. code:: cpp

                engine.sensorManager = ASensorManager_getInstance();
                engine.accelerometerSensor =
                                ASensorManager_getDefaultSensor(engine.sensorManager,
                                    ASENSOR_TYPE_ACCELEROMETER);
                engine.sensorEventQueue =
                                ASensorManager_createEventQueue(engine.sensorManager,
                                    state->looper, LOOPER_ID_USER, NULL, NULL);

         Next, a loop begins, in which the application polls the system for
         messages (sensor events). It sends messages to
         ``android_native_app_glue``, which checks to see whether they match any
         ``onAppCmd`` events defined in ``android_main``. When a match occurs,
         the message is sent to the handler for execution.

         .. code:: cpp

            while (1) {
                    // Read all pending events.
                    int ident;
                    int events;
                    struct android_poll_source* source;


                    // If not animating, we will block forever waiting for events.
                    // If animating, we loop until all events are read, then continue
                    // to draw the next frame of animation.
                    while ((ident=ALooper_pollAll(engine.animating ? 0 : -1, NULL,
                            &events,
                            (void**)&source)) >= 0) {


                        // Process this event.
                        if (source != NULL) {
                            source->process(state, source);
                        }


                        // If a sensor has data, process it now.
                        if (ident == LOOPER_ID_USER) {
                            if (engine.accelerometerSensor != NULL) {
                                ASensorEvent event;
                                while (ASensorEventQueue_getEvents(engine.sensorEventQueue,
                                        &event, 1) > 0) {
                                    LOGI("accelerometer: x=%f y=%f z=%f",
                                            event.acceleration.x, event.acceleration.y,
                                            event.acceleration.z);
                                }
                            }
                        }


                    // Check if we are exiting.
                    if (state->destroyRequested != 0) {
                        engine_term_display(&engine);
                        return;
                    }
                }

         Once the queue is empty, and the program exits the polling loop, the
         program calls OpenGL to draw the screen.

         .. code:: cpp

                if (engine.animating) {
                    // Done with events; draw next animation frame.
                    engine.state.angle += .01f;
                    if (engine.state.angle > 1) {
                        engine.state.angle = 0;
                    }


                    // Drawing is throttled to the screen update rate, so there
                    // is no need to do timing here.
                    engine_draw_frame(&engine);
                }
            }

Last updated 2020-08-13 UTC.

/Teapot
=======

.. https://developer.android.google.cn/ndk/samples/sample_teapot?hl=en

.. container:: devsite-article-body clearfix

   The Teapot sample is located under in the ``samples/Teapot/`` directory,
   under the NDK installation's root directory. This sample uses the OpenGL
   library to render the iconic 
   `Utah teapot <http://math.hws.edu/bridgeman/courses/324/s06/doc/opengl.html#basic>`__.
   In particular, it showcases the ``ndk_helper`` helper class, a collection of
   native helper functions required for implementing games and similar
   applications as native applications. This class provides:

   -  An abstraction layer, ``GLContext``, that handles certain NDK-specific
      behaviors.
   -  Helper functions that are useful but not present in the NDK, such as tap
      detection.
   -  Wrappers for JNI calls for platform features such as texture loading.

   .. rubric:: AndroidManifest.xml

   The activity declaration here is not
   `NativeActivity <https://developer.android.google.cn/reference/android/app/NativeActivity>`__ 
   itself, but a subclass of it: ``TeapotNativeActivity``.

   .. code:: xml

      <activity android:name="com.sample.teapot.TeapotNativeActivity"
              android:label="@string/app_name"
              android:configChanges="orientation|keyboardHidden">

   Ultimately, the name of the shared-object file that the build system builds
   is ``libTeapotNativeActivity.so``. The build system adds the ``lib`` prefix
   and the ``.so`` extension; neither is part of the value that the manifest
   originally assigns to ``android:value``.

   .. code:: xml

      <meta-data android:name="android.app.lib_name"
              android:value="TeapotNativeActivity" />

   .. rubric:: Application.mk

   An app that uses the
   `NativeActivity <https://developer.android.google.cn/reference/android/app/NativeActivity>`__ 
   framework class must not specify an Android API level lower than 9, which introduced
   that class. For more information about the
   `NativeActivity <https://developer.android.google.cn/reference/android/app/NativeActivity>`__ 
   class, see `Native Activities and Applications <https://developer.android.google.cn/ndk/guides/concepts#naa>`__.

   .. code::

      APP_PLATFORM := android-9

   The next line tells the build system to build for all supported architectures.

   .. code::

      APP_ABI := all

   Next, the file tells the build system which 
   `C++ runtime support library <https://developer.android.google.cn/ndk/guides/cpp-support>`__ to use.

   .. code::

      APP_STL := stlport_static

   .. rubric:: Java-side Implementation

   The ``TeapotNativeActivity`` file is located in
   ``teapots/classic-teapot/src/com/sample/teapot``, under the 
   `NDK repo root directory <https://github.com/android/ndk-samples>`__ on GitHub. 
   It handles activity lifecycle events, creates a popup window to display text on the
   screen with the function ``ShowUI()``, and update frame rate dynamically with
   the function ``updateFPS()``. The following code might be interesting to you
   in that it prepares the app’s Activity to be full screen, immersive, and
   without system navigation bars, so that the whole screen could be used for
   displaying rendered teapot frames:

   .. container::

      .. container:: ds-selector-tabs

         .. container:: section

            .. rubric:: Kotlin

            .. code:: kotlin

               fun setImmersiveSticky() {
                   window.decorView.systemUiVisibility = (
                           View.SYSTEM_UI_FLAG_FULLSCREEN
                                   or View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                                   or View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                                   or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                                   or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                                   or View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                           )
               }

         .. container:: section

            .. rubric:: Java

            .. code:: java

               void setImmersiveSticky() {
                   View decorView = getWindow().getDecorView();
                   decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_FULLSCREEN
                           | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                           | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                           | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                           | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                           | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
               }

   .. rubric:: Native-side Implementation
      :name: ni

   This section explores the part of the Teapot app implemented in C++.

   .. rubric:: TeapotRenderer.h
      :name: teapotrenderer.h

   These function calls perform the actual rendering of the teapot. It uses
   ``ndk_helper`` for matrix calculation and to reposition the camera based on
   where the user taps.

   .. code:: cpp

      ndk_helper::Mat4 mat_projection_;
      ndk_helper::Mat4 mat_view_;
      ndk_helper::Mat4 mat_model_;


      ndk_helper::TapCamera* camera_;

   .. rubric:: TeapotNativeActivity.cpp
      :name: teapotnativeactivity.cpp

   The following lines include ``ndk_helper`` in the native source file, and
   define the helper-class name.

   .. code:: cpp


      #include "NDKHelper.h"

      //-------------------------------------------------------------------------
      //Preprocessor
      //-------------------------------------------------------------------------
      #define HELPER_CLASS_NAME "com/sample/helper/NDKHelper" //Class name of helper
      function

   The first use of the ``ndk_helper`` class is to handle the EGL-related
   lifecycle, associating EGL context states (created/lost) with Android
   lifecycle events. The ``ndk_helper`` class enables the application to
   preserve context information so that the system can restore a destroyed
   activity. This ability is useful, for example, when the target machine is
   rotated (causing an activity to be destroyed, then immediately restored in
   the new orientation), or when the lock screen appears.

   .. code:: cpp

      ndk_helper::GLContext* gl_context_; // handles EGL-related lifecycle.

   Next, ``ndk_helper`` provides touch control.

   .. code:: cpp

      ndk_helper::DoubletapDetector doubletap_detector_;
      ndk_helper::PinchDetector pinch_detector_;
      ndk_helper::DragDetector drag_detector_;
      ndk_helper::PerfMonitor monitor_;

   It also provides camera control (openGL view frustum).

   .. code:: cpp

      ndk_helper::TapCamera tap_camera_;

   The app then prepares to use the device's sensors, using the native APIs
   provided in the NDK.

   .. code:: cpp

      ASensorManager* sensor_manager_;
      const ASensor* accelerometer_sensor_;
      ASensorEventQueue* sensor_event_queue_;

   The app calls the following functions in response to various Android
   lifecycle events and EGL context state changes, using various functionalities
   provided by ``ndk_helper`` via the ``Engine`` class.

   .. code:: cpp


      void LoadResources();
      void UnloadResources();
      void DrawFrame();
      void TermDisplay();
      void TrimMemory();
      bool IsReady();

   Then, the following function calls back to the Java side to update the UI
   display.

   .. code:: cpp

      void Engine::ShowUI()
      {
          JNIEnv *jni;
          app_->activity->vm->AttachCurrentThread( &jni, NULL );


          //Default class retrieval
          jclass clazz = jni->GetObjectClass( app_->activity->clazz );
          jmethodID methodID = jni->GetMethodID( clazz, "showUI", "()V" );
          jni->CallVoidMethod( app_->activity->clazz, methodID );


          app_->activity->vm->DetachCurrentThread();
          return;
      }

   Next, this function calls back to the Java side to draw a text box
   superimposed on the screen rendered on the native side, and showing frame
   count.

   .. code:: cpp

      void Engine::UpdateFPS( float fFPS )
      {
          JNIEnv *jni;
          app_->activity->vm->AttachCurrentThread( &jni, NULL );


          //Default class retrieval
          jclass clazz = jni->GetObjectClass( app_->activity->clazz );
          jmethodID methodID = jni->GetMethodID( clazz, "updateFPS", "(F)V" );
          jni->CallVoidMethod( app_->activity->clazz, methodID, fFPS );


          app_->activity->vm->DetachCurrentThread();
          return;
      }

   The application gets the system clock and supplies it to the renderer for
   time-based animation based on real-time clock. This information is used, for
   example, in calculating momentum, where speed declines as a function of time.

   .. code:: cpp

      renderer_.Update( monitor_.GetCurrentTime() );

   The application now flips the rendered frame to the front buffer for display
   through ``GLcontext::Swap()`` function; it also handles possible errors
   happened during the flipping process.

   .. code:: cpp

      if( EGL_SUCCESS != gl_context_->Swap() )  // swaps buffer.

   The program passes touch-motion events to the gesture detector defined in the
   ``ndk_helper`` class. The gesture detector tracks multitouch gestures, such
   as pinch-and-drag, and sends a notification when triggered by any of these
   events.

   .. code:: cpp

      if( AInputEvent_getType( event ) == AINPUT_EVENT_TYPE_MOTION )
      {
          ndk_helper::GESTURE_STATE doubleTapState =
              eng->doubletap_detector_.Detect( event );
          ndk_helper::GESTURE_STATE dragState = eng->drag_detector_.Detect( event );
          ndk_helper::GESTURE_STATE pinchState = eng->pinch_detector_.Detect( event );

          //Double tap detector has a priority over other detectors
          if( doubleTapState == ndk_helper::GESTURE_STATE_ACTION )
          {
              //Detect double tap
              eng->tap_camera_.Reset( true );
          }
          else
          {
              //Handle drag state
              if( dragState & ndk_helper::GESTURE_STATE_START )
              {
                   //Otherwise, start dragging
                   ndk_helper::Vec2 v;
                   eng->drag_detector_.GetPointer( v );
                   eng->TransformPosition( v );
                   eng->tap_camera_.BeginDrag( v );
              }
              // ...else other possible drag states...

              //Handle pinch state
              if( pinchState & ndk_helper::GESTURE_STATE_START )
              {
                  //Start new pinch
                  ndk_helper::Vec2 v1;
                  ndk_helper::Vec2 v2;
                  eng->pinch_detector_.GetPointers( v1, v2 );
                  eng->TransformPosition( v1 );
                  eng->TransformPosition( v2 );
                  eng->tap_camera_.BeginPinch( v1, v2 );
              }
              // ...else other possible pinch states...
          }
          return 1;
      }

   The ``ndk_helper`` class also provides access to a vector-math library
   (``vecmath.h``), using it here to transform touch coordinates.

   .. code:: cpp

      void Engine::TransformPosition( ndk_helper::Vec2& vec )
      {
          vec = ndk_helper::Vec2( 2.0f, 2.0f ) * vec
                  / ndk_helper::Vec2( gl_context_->GetScreenWidth(),
                  gl_context_->GetScreenHeight() ) - ndk_helper::Vec2( 1.f, 1.f );
      }

   The ``HandleCmd()`` method handles commands posted from the
   android_native_app_glue library. For more information about what the messages
   mean, refer to the comments in the ``android_native_app_glue.h`` and ``.c``
   source files.

   .. code:: cpp

      void Engine::HandleCmd( struct android_app* app,
              int32_t cmd )
      {
          Engine* eng = (Engine*) app->userData;
          switch( cmd )
          {
          case APP_CMD_SAVE_STATE:
              break;
          case APP_CMD_INIT_WINDOW:
              // The window is being shown, get it ready.
              if( app->window != NULL )
              {
                  eng->InitDisplay();
                  eng->DrawFrame();
              }
              break;
          case APP_CMD_TERM_WINDOW:
              // The window is being hidden or closed, clean it up.
              eng->TermDisplay();
              eng->has_focus_ = false;
              break;
          case APP_CMD_STOP:
              break;
          case APP_CMD_GAINED_FOCUS:
              eng->ResumeSensors();
              //Start animation
              eng->has_focus_ = true;
              break;
          case APP_CMD_LOST_FOCUS:
              eng->SuspendSensors();
              // Also stop animating.
              eng->has_focus_ = false;
              eng->DrawFrame();
              break;
          case APP_CMD_LOW_MEMORY:
              //Free up GL resources
              eng->TrimMemory();
              break;
          }
      }

   The ``ndk_helper`` class posts ``APP_CMD_INIT_WINDOW`` when
   ``android_app_glue`` receives an ``onNativeWindowCreated()`` callback from
   the system. Applications can normally perform window initializations, such as
   EGL initialization. They do this outside of the activity lifecycle, since the
   activity is not yet ready.

   .. code:: cpp

      //Init helper functions
      ndk_helper::JNIHelper::Init( state->activity, HELPER_CLASS_NAME );

      state->userData = &g_engine;
      state->onAppCmd = Engine::HandleCmd;
      state->onInputEvent = Engine::HandleInput;

Last updated 2024-01-03 UTC.
