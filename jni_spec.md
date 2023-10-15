Java Native Interface Specification Contents
============================================

文档处理脚本：

```sh
cat > index.js << EOF
/// <reference types="node" />
var TurndownService = require('turndown')

var turndownService = new TurndownService()
// var markdown = turndownService.turndown('<h1>Hello world!</h1>')
// process.stdout.write(markdown)

process.stdin.on("data", (it) => {
  // console.log('HTML data:' + it.length + it.toString());
  process.stdout.write(turndownService.turndown(it.toString()));
})
EOF
pages="https://docs.oracle.com/en/java/javase/17/docs/specs/jni/intro.html \
     https://docs.oracle.com/en/java/javase/17/docs/specs/jni/design.html \
     https://docs.oracle.com/en/java/javase/17/docs/specs/jni/types.html \
     https://docs.oracle.com/en/java/javase/17/docs/specs/jni/functions.html \
     https://docs.oracle.com/en/java/javase/17/docs/specs/jni/invocation.html"
for url in $pages; do 
  curl $url | node index.js >> /c/opendoc/jni_spec.md;
done
```

TOC
============================================

[1. Introduction](#chapter-1-introduction)
    1.1. [Java Native Interface Overview](#java-native-interface-overview)
    1.2. [Historical Background](#historical-background)
    1.2.1.  [JDK 1.0 Native Method Interface](#jdk-1.0-native-method-interface)
    1.2.2.  [Java Runtime Interface](#java-runtime-interface)
    1.2.3.  [Raw Native Interface and Java/COM Interface](#raw-native-interface-and-javacom-interface)
    1.3. [Objectives](#objectives)
    1.4. [Java Native Interface Approach](#java-native-interface-approach)
    1.5. [Programming to the JNI](#programming-to-the-jni)
[2. Design Overview](#chapter-2-design-overview)
    2.1.  [JNI Interface Functions and Pointers](#jni-interface-functions-and-pointers)
    2.2.  [Compiling, Loading and Linking Native Methods](#compiling-loading-and-linking-native-methods)
    2.2.1.   [Resolving Native Method Names](#resolving-native-method-names)
    2.2.2.   [Native Method Arguments](#native-method-arguments)
    2.3.  [Referencing Java Objects](#referencing-java-objects)
    2.3.1.   [Global and Local References](#global-and-local-references)
    2.3.2.   [Implementing Local References](#implementing-local-references)
    2.4.  [Accessing Java Objects](#accessing-java-objects)
    2.4.1.   [Accessing Primitive Arrays](#accessing-primitive-arrays)
    2.4.2.   [Accessing Fields and Methods](#accessing-fields-and-methods)
    2.5.  [Reporting Programming Errors](#reporting-programming-errors)
    2.6.  [Java Exceptions](#java-exceptions)
    2.6.1.   [Exceptions and Error Codes](#exceptions-and-error-codes)
    2.6.2.   [Asynchronous Exceptions](#asynchronous-exceptions)
    2.6.3.   [Exception Handling](#exception-handling)
[3. JNI Types and Data Structures](#chapter-3-jni-types-and-data-structures)
    3.1.  [Primitive Types](#primitive-types)
    3.2.  [Reference Types](#reference-types)
    3.3.  [Field and Method IDs](#field-and-method-ids)
    3.4.  [The Value Type](#the-value-type)
    3.5.  [Type Signatures](#type-signatures)
    3.6.  [Modified UTF-8 Strings](#modified-utf-8-strings)
[4. JNI Functions](#chapter-4-jni-functions)
    1.   [Interface Function Table](#interface-function-table)
    2.   [Constants](#constants)
    2.1.    [Boolean values](#boolean-values)
    2.2.    [Return codes](#return-codes)
    3.   [Version Information](#version-information)
    3.1.    [GetVersion](#getversion)
    3.2.    [Version Constants](#version-constants)
    4.   [Class Operations](#class-operations)
    4.1.    [DefineClass](#defineclass)
    4.2.    [FindClass](#findclass)
    4.3.    [GetSuperclass](#getsuperclass)
    4.4.    [IsAssignableFrom](#isassignablefrom)
    5.   [Module Operations](#module-operations)
    5.1.    [GetModule](#getmodule)
    6.   [Exceptions](#exceptions)
    6.1.    [Throw](#throw)
    6.2.    [ThrowNew](#thrownew)
    6.3.    [ExceptionOccurred](#exceptionoccurred)
    6.4.    [ExceptionDescribe](#exceptiondescribe)
    6.5.    [ExceptionClear](#exceptionclear)
    6.6.    [FatalError](#fatalerror)
    6.7.    [ExceptionCheck](#exceptioncheck)
    7.   [Global and Local References](#global-and-local-references)
    7.1.    [Global References](#global-references)
    7.2.    [NewGlobalRef](#newglobalref)
    7.3.    [DeleteGlobalRef](#deleteglobalref)
    7.4.    [Local References](#local-references)
    7.5.    [DeleteLocalRef](#deletelocalref)
    7.6.    [EnsureLocalCapacity](#ensurelocalcapacity)
    7.7.    [PushLocalFrame](#pushlocalframe)
    7.8.    [PopLocalFrame](#poplocalframe)
    7.9.    [NewLocalRef](#newlocalref)
    8.   [Weak Global References](#weak-global-references)
    8.1.    [NewWeakGlobalRef](#newweakglobalref)
    8.2.    [DeleteWeakGlobalRef](#deleteweakglobalref)
    9.   [Object Operations](#object-operations)
    9.1.    [AllocObject](#allocobject)
    9.2.    [NewObject, NewObjectA, NewObjectV](#newobject-newobjecta-newobjectv)
    9.3.    [GetObjectClass](#getobjectclass)
    9.4.    [GetObjectRefType](#getobjectreftype)
    9.5.    [IsInstanceOf](#isinstanceof)
    9.6.    [IsSameObject](#issameobject)
    10.   [Accessing Fields of Objects](#accessing-fields-of-objects)
    10.1.   [GetFieldID](#getfieldid)
    10.2.   [Get<type>Field Routines](#gettypefield-routines)
    10.3.   [Set<type>Field Routines](#settypefield-routines)
    11.   [Calling Instance Methods](#calling-instance-methods)
    11.1.   [GetMethodID](#getmethodid)
    11.2.   [Call<type>Method Routines, Call<type>MethodA Routines, Call<type>MethodV Routines](#calltypemethod-routines-calltypemethoda-routines-calltypemethodv-routines)
    11.3.   [CallNonvirtual<type>Method Routines, CallNonvirtual<type>MethodA Routines, CallNonvirtual<type>MethodV Routines](#callnonvirtualtypemethod-routines-callnonvirtualtypemethoda-routines-callnonvirtualtypemethodv-routines)
    12.   [Accessing Static Fields](#accessing-static-fields)
    12.1.   [GetStaticFieldID](#getstaticfieldid)
    12.2.   [GetStatic<type>Field Routines](#getstatictypefield-routines)
    12.3.   [SetStatic<type>Field Routines](#setstatictypefield-routines)
    13.   [Calling Static Methods](#calling-static-methods)
    13.1.   [GetStaticMethodID](#getstaticmethodid)
    13.2.   [CallStatic<type>Method Routines, CallStatic<type>MethodA Routines, CallStatic<type>MethodV Routines](#callstatictypemethod-routines-callstatictypemethoda-routines-callstatictypemethodv-routines)
    14.   [String Operations](#string-operations)
    14.01.  [NewString](#newstring)
    14.02.  [GetStringLength](#getstringlength)
    14.03.  [GetStringChars](#getstringchars)
    14.04.  [ReleaseStringChars](#releasestringchars)
    14.05.  [NewStringUTF](#newstringutf)
    14.06.  [GetStringUTFLength](#getstringutflength)
    14.07.  [GetStringUTFChars](#getstringutfchars)
    14.08.  [ReleaseStringUTFChars](#releasestringutfchars)
    14.09.  [GetStringRegion](#getstringregion)
    14.10.  [GetStringUTFRegion](#getstringutfregion)
    14.11.  [GetStringCritical, ReleaseStringCritical](#getstringcritical-releasestringcritical)
    15.   [Array Operations](#array-operations)
    15.01.  [GetArrayLength](#getarraylength)
    15.02.  [NewObjectArray](#newobjectarray)
    15.03.  [GetObjectArrayElement](#getobjectarrayelement)
    15.04.  [SetObjectArrayElement](#setobjectarrayelement)
    15.05.  [New<PrimitiveType>Array Routines](#newprimitivetypearray-routines)
    15.06.  [Get<PrimitiveType>ArrayElements Routines](#getprimitivetypearrayelements-routines)
    15.07.  [Release<PrimitiveType>ArrayElements Routines](#releaseprimitivetypearrayelements-routines)
    15.08.  [Get<PrimitiveType>ArrayRegion Routines](#getprimitivetypearrayregion-routines)
    15.09.  [Set<PrimitiveType>ArrayRegion Routines](#setprimitivetypearrayregion-routines)
    15.10.  [GetPrimitiveArrayCritical, ReleasePrimitiveArrayCritical](#getprimitivearraycritical-releaseprimitivearraycritical)
    16.   [Registering Native Methods](#registering-native-methods)
    16.1.   [RegisterNatives](#registernatives)
    16.2.   [UnregisterNatives](#unregisternatives)
    17.   [Monitor Operations](#monitor-operations)
    17.1.   [MonitorEnter](#monitorenter)
    17.2.   [MonitorExit](#monitorexit)
    18.   [NIO Support](#nio-support)
    18.1.   [NewDirectByteBuffer](#newdirectbytebuffer)
    18.2.   [GetDirectBufferAddress](#getdirectbufferaddress)
    18.3.   [GetDirectBufferCapacity](#getdirectbuffercapacity)
    19.   [Reflection Support](#reflection-support)
    19.1.   [FromReflectedMethod](#fromreflectedmethod)
    19.2.   [FromReflectedField](#fromreflectedfield)
    19.3.   [ToReflectedMethod](#toreflectedmethod)
    19.4.   [ToReflectedField](#toreflectedfield)
    20.   [Java VM Interface](#java-vm-interface)
    20.1.    [GetJavaVM](#getjavavm)
[5. The Invocation API](#chapter-5-the-invocation-api)
    1.    [Overview](#overview)
    1.1.    [Creating the VM](#creating-the-vm)
    1.2.    [Attaching to the VM](#attaching-to-the-vm)
    1.3.    [Detaching from the VM](#detaching-from-the-vm)
    1.4.    [Unloading the VM](#unloading-the-vm)
    2.    [Library and Version Management](#library-and-version-management)
    2.1.    [Support for Statically Linked Libraries](#support-for-statically-linked-libraries)
    2.2.    [Library Lifecycle Function Hooks](#library-lifecycle-function-hooks)
    2.3.    [JNI_OnLoad](#jni_onload)
    2.4.    [JNI_OnUnload](#jni_onunload)
    2.5.    [JNI_OnLoad_L](#jni_onload_l)
    2.6.    [JNI_OnUnload_L](#jni_onunload_l)
    3.    [Invocation API Functions](#invocation-api-functions)
    3.1.    [JNI_GetDefaultJavaVMInitArgs](#jni_getdefaultjavavminitargs)
    3.2.    [JNI_GetCreatedJavaVMs](#jni_getcreatedjavavms)
    3.3.    [JNI_CreateJavaVM](#jni_createjavavm)
    3.4.    [DestroyJavaVM](#destroyjavavm)
    3.5.    [AttachCurrentThread](#attachcurrentthread)
    3.6.    [AttachCurrentThreadAsDaemon](#attachcurrentthreadasdaemon)
    3.7.    [DetachCurrentThread](#detachcurrentthread)
    3.8.    [GetEnv](#getenv)

Copyright © 1993, 2023, Oracle and/or its affiliates, 500 Oracle Parkway, Redwood Shores, CA 94065 USA.  
All rights reserved. Use is subject to [license terms](https://www.oracle.com/java/javase/terms/license/java17speclicense.html) and the [documentation redistribution policy](https://www.oracle.com/technetwork/java/redist-137594.html).

Chapter 1: Introduction
=======================

This chapter introduces the _Java Native Interface_ (JNI). The JNI is a native programming interface. It allows Java code that runs inside a Java Virtual Machine (VM) to interoperate with applications and libraries written in other programming languages, such as C, C++, and assembly.

The most important benefit of the JNI is that it imposes no restrictions on the implementation of the underlying Java VM. Therefore, Java VM vendors can add support for the JNI without affecting other parts of the VM. Programmers can write one version of a native application or library and expect it to work with all Java VMs supporting the JNI.

This chapter covers the following topics:

*   [Java Native Interface Overview](#java-native-interface-overview)
*   [Historical Background](#historical-background)
    *   [JDK 1.0 Native Method Interface](#jdk-1.0-native-method-interface)
    *   [Java Runtime Interface](#java-runtime-interface)
    *   [Raw Native Interface and Java/COM Interface](#raw-native-interface-and-javacom-interface)
*   [Objectives](#objectives)
*   [Java Native Interface Approach](#java-native-interface-approach)
*   [Programming to the JNI](#programming-to-the-jni)

Java Native Interface Overview
------------------------------

While you can write applications entirely in Java, there are situations where Java alone does not meet the needs of your application. Programmers use the JNI to write _Java native methods_ to handle those situations when an application cannot be written entirely in Java.

The following examples illustrate when you need to use Java native methods:

*   The standard Java class library does not support the platform-dependent features needed by the application.
*   You already have a library written in another language, and wish to make it accessible to Java code through the JNI.
*   You want to implement a small portion of time-critical code in a lower-level language such as assembly.

By programming through the JNI, you can use native methods to:

*   Create, inspect, and update Java objects (including arrays and strings).
*   Call Java methods.
*   Catch and throw exceptions.
*   Load classes and obtain class information.
*   Perform runtime type checking.

You can also use the JNI with the _Invocation API_ to enable an arbitrary native application to embed the Java VM. This allows programmers to easily make their existing applications Java-enabled without having to link with the VM source code.

Historical Background
---------------------

VMs from different vendors offer different native method interfaces. These different interfaces force programmers to produce, maintain, and distribute multiple versions of native method libraries on a given platform.

We briefly examine some of the native method interfaces, such as:

*   JDK 1.0 native method interface
*   Netscape's Java Runtime Interface
*   Microsoft's Raw Native Interface and Java/COM interface

### JDK 1.0 Native Method Interface

JDK 1.0 was shipped with a native method interface. Unfortunately, there were two major reasons that this interface was unsuitable for adoption by other Java VMs.

First, the native code accessed fields in Java objects as members of C structures. However, the _Java Language Specification_ does not define how objects are laid out in memory. If a Java VM lays out objects differently in memory, then the programmer would have to recompile the native method libraries.

Second, JDK 1.0's native method interface relied on a conservative garbage collector. The unrestricted use of the `unhand` macro, for example, made it necessary to conservatively scan the native stack.

### Java Runtime Interface

Netscape had proposed the Java Runtime Interface (JRI), a general interface for services provided in the Java virtual machine. JRI was designed with portability in mind---it makes few assumptions about the implementation details in the underlying Java VM. The JRI addressed a wide range of issues, including native methods, debugging, reflection, embedding (invocation), and so on.

### Raw Native Interface and Java/COM Interface

The Microsoft Java VM supports two native method interfaces. At the low level, it provides an efficient Raw Native Interface (RNI). The RNI offers a high degree of source-level backward compatibility with the JDK’s native method interface, although it has one major difference. Instead of relying on conservative garbage collection, the native code must use RNI functions to interact explicitly with the garbage collector.

At a higher level, Microsoft's Java/COM interface offers a language-independent standard binary interface to the Java VM. Java code can use a COM object as if it were a Java object. A Java class can also be exposed to the rest of the system as a COM class.

Objectives
----------

We believe that a uniform, well-thought-out standard interface offers the following benefits for everyone:

*   Each VM vendor can support a larger body of native code.
*   Tool builders will not have to maintain different kinds of native method interfaces.
*   Application programmers will be able to write one version of their native code and this version will run on different VMs.

The best way to achieve a standard native method interface is to involve all parties with an interest in Java VMs. Therefore we organized a series of discussions among the Java licensees on the design of a uniform native method interface. It is clear from the discussions that the standard native method interface must satisfy the following requirements:

*   Binary compatibility - The primary goal is binary compatibility of native method libraries across all Java VM implementations on a given platform. Programmers should maintain only one version of their native method libraries for a given platform.
*   Efficiency - To support time-critical code, the native method interface must impose little overhead. All known techniques to ensure VM-independence (and thus binary compatibility) carry a certain amount of overhead. We must somehow strike a compromise between efficiency and VM-independence.
*   Functionality - The interface must expose enough Java VM internals to allow native methods to accomplish useful tasks.

Java Native Interface Approach
------------------------------

We hoped to adopt one of the existing approaches as the standard interface, because this would have imposed the least burden on programmers who had to learn multiple interfaces in different VMs. Unfortunately, no existing solutions are completely satisfactory in achieving our goals.

Netscape’s JRI is the closest to what we envision as a portable native method interface, and was used as the starting point of our design. Readers familiar with the JRI will notice the similarities in the API naming convention, the use of method and field IDs, the use of local and global references, and so on. Despite our best efforts, however, the JNI is not binary-compatible with the JRI, although a VM can support both the JRI and the JNI.

Microsoft’s RNI was an improvement over JDK 1.0 because it solved the problem of native methods working with a nonconservative garbage collector. The RNI, however, was not suitable as a VM-independent native method interface. Like the JDK, RNI native methods access Java objects as C structures, leading to two problems:

*   RNI exposed the layout of internal Java objects to native code.
*   Direct access of Java objects as C structures makes it impossible to efficiently incorporate "write barriers," which are necessary in advanced garbage collection algorithms.

As a binary standard, COM ensures complete binary compatibility across different VMs. Invoking a COM method requires only an indirect call, which carries little overhead. In addition, COM objects are a great improvement over dynamic-link libraries in solving versioning problems.

The use of COM as the standard Java native method interface, however, is hampered by a few factors:

*   First, the Java/COM interface lacks certain desired functions, such as accessing private fields and raising general exceptions.
*   Second, the Java/COM interface automatically provides the standard IUnknown and IDispatch COM interfaces for Java objects, so that native code can access public methods and fields. Unfortunately, the IDispatch interface does not deal with overloaded Java methods and is case-insensitive in matching method names. Furthermore, all Java methods exposed through the IDispatch interface are wrapped to perform dynamic type checking and coercion. This is because the IDispatch interface is designed with weakly-typed languages (such as Basic) in mind.
*   Third, instead of dealing with individual low-level functions, COM is designed to allow software components (including full-fledged applications) to work together. We believe that it is not appropriate to treat all Java classes or low-level native methods as software components.
*   Fourth, the immediate adoption of COM is hampered by the lack of its support on UNIX platforms.

Although Java objects are not exposed to the native code as COM objects, the JNI interface itself is binary-compatible with COM. JNI uses the same jump table structure and calling convention that COM does. _This means that, as soon as cross-platform support for COM is available, the JNI can become a COM interface to the Java VM._

JNI is not believed to be the only native method interface supported by a given Java VM. A standard interface benefits programmers, who would like to load their native code libraries into different Java VMs. In some cases, the programmer may have to use a lower-level, VM-specific interface to achieve top efficiency. In other cases, the programmer might use a higher-level interface to build software components. Indeed, as the Java environment and component software technologies become more mature, native methods will gradually lose their significance.

Programming to the JNI
----------------------

Native method programmers should program to the JNI. Programming to the JNI insulates you from unknowns, such as the vendor’s VM that the end user might be running. By conforming to the JNI standard, you will give a native library the best chance to run in a given Java VM.

If you are implementing a Java VM, you should implement the JNI. JNI has been time tested and ensured to not impose any overhead or restrictions on your VM implementation, including object representation, garbage collection scheme, and so on. Please send us your feedback if you run into any problems we may have overlooked.



Chapter 2: Design Overview
==========================

This chapter focuses on major design issues in the JNI. Most design issues in this section are related to native methods. The design of the Invocation API is covered in [Chapter 5: The Invocation API](invocation.html).

This chapter covers the following topics:

*   [JNI Interface Functions and Pointers](#jni-interface-functions-and-pointers)
*   [Compiling, Loading and Linking Native Methods](#compiling-loading-and-linking-native-methods)
    *   [Resolving Native Method Names](#resolving-native-method-names)
    *   [Native Method Arguments](#native-method-arguments)
*   [Referencing Java Objects](#referencing-java-objects)
    *   [Global and Local References](#global-and-local-references)
    *   [Implementing Local References](#implementing-local-references)
*   [Accessing Java Objects](#accessing-java-objects)
    *   [Accessing Primitive Arrays](#accessing-primitive-arrays)
    *   [Accessing Fields and Methods](#accessing-fields-and-methods)
        *   [Calling Caller-Sensitive Methods](#calling-caller-sensitive-methods)
*   [Reporting Programming Errors](#reporting-programming-errors)
*   [Java Exceptions](#java-exceptions)
    *   [Exceptions and Error Codes](#exceptions-and-error-codes)
    *   [Asynchronous Exceptions](#asynchronous-exceptions)
    *   [Exception Handling](#exception-handling)

JNI Interface Functions and Pointers
------------------------------------

Native code accesses Java VM features by calling JNI functions. JNI functions are available through an _interface pointer_. An interface pointer is a pointer to a pointer. This pointer points to an array of pointers, each of which points to an interface function. Every interface function is at a predefined offset inside the array. The following figure, [Interface Pointer](#interface-pointer), illustrates the organization of an interface pointer.

![Interface pointer](images/interface-pointer.gif)

Interface pointer

[Description of Figure Interface Pointer](interface-pointer.html)

The JNI interface is organized like a C++ virtual function table or a COM interface. The advantage to using an interface table, rather than hard-wired function entries, is that the JNI name space becomes separate from the native code. A VM can easily provide multiple versions of JNI function tables. For example, the VM may support two JNI function tables:

*   one performs thorough illegal argument checks, and is suitable for debugging;
*   the other performs the minimal amount of checking required by the JNI specification, and is therefore more efficient.

The JNI interface pointer is only valid in the current thread. A native method, therefore, must not pass the interface pointer from one thread to another. A VM implementing the JNI may allocate and store thread-local data in the area pointed to by the JNI interface pointer.

Native methods receive the JNI interface pointer as an argument. The VM is guaranteed to pass the same interface pointer to a native method when it makes multiple calls to the native method from the same Java thread. However, a native method can be called from different Java threads, and therefore may receive different JNI interface pointers.

Compiling, Loading and Linking Native Methods
---------------------------------------------

Since the Java VM is multithreaded, native libraries should also be compiled and linked with multithread aware native compilers. For example, the `-mt` flag should be used for C++ code compiled with the Sun Studio compiler. For code complied with the GNU gcc compiler, the flags `-D_REENTRANT` or `-D_POSIX_C_SOURCE` should be used. For more information please refer to the native compiler documentation.

Native methods are loaded with the `System.loadLibrary` method. In the following example, the class initialization method loads a platform-specific native library in which the native method `f` is defined:

    package p.q.r;
    
    class A {
        native double f(int i, String s);
        static {
            System.loadLibrary("p_q_r_A");
        }
    }

The argument to `System.loadLibrary` is a library name chosen arbitrarily by the programmer. The system follows a standard, but platform-specific, approach to convert the library name to a native library name. For example, a Linux system converts the name `p_q_r_A` to `libp_q_r_A.so`, while a Windows system converts the same `p_q_r_A` name to `p_q_r_A.dll`.

The programmer may use a single library to store all the native methods needed by any number of classes, as long as these classes are to be loaded with the same class loader. The VM internally maintains a list of loaded native libraries for each class loader. Vendors should choose native library names that minimize the chance of name clashes.

Support for both dynamically and statically linked libraries, and their respective lifecycle management _"load"_ and _"unload"_ function hooks are detailed in the [Invocation API section on _Library and Version Management_](invocation.html#library-and-version-management).

### Resolving Native Method Names

The JNI defines a 1:1 mapping from the name of a `native` method declared in Java to the name of a native method residing in a native library. The VM uses this mapping to dynamically link a Java invocation of a `native` method to the corresponding implementation in the native library.

The mapping produces a native method name by concatenating the following components derived from a `native` method declaration:

1.  the prefix `Java_`
2.  given the binary name, in internal form, of the class which declares the `native` method: the result of escaping the name.
3.  an underscore ("_")
4.  the escaped method name
5.  if the `native` method declaration is overloaded: two underscores ("__") followed by the escaped parameter descriptor (JVMS 4.3.3) of the method declaration.

Escaping leaves every alphanumeric ASCII character (`A-Za-z0-9`) unchanged, and replaces each UTF-16 code unit in the table below with the corresponding escape sequence. If the name to be escaped contains a surrogate pair, then the high-surrogate code unit and the low-surrogate code unit are escaped separately. The result of escaping is a string consisting only of the ASCII characters `A-Za-z0-9` and underscore.

 

UTF-16 code unit

Escape sequence

Forward slash (`/`, U+002F)

_

Underscore (`_`, U+005F)

_1

Semicolon (`;`, U+003B)

_2

Left square bracket (`[`, U+005B)

_3

Any UTF-16 code unit `\u`_WXYZ_ that does not represent alphanumeric ASCII (`A-Za-z0-9`), forward slash, underscore, semicolon, or left square bracket

`_0wxyz` where `w`, `x`, `y`, and `z` are the lower-case forms of the hexadecimal digits `W`, `X`, `Y`, and `Z`. (For example, `U+ABCD` becomes `_0abcd`.)

Escaping is necessary for two reasons. First, to ensure that class and method names in Java source code, which may include Unicode characters, translate into valid function names in C source code. Second, to ensure that the parameter descriptor of a `native` method, which uses ";" and "\[" characters to encode parameter types, can be encoded in a C function name.

When a Java program invokes a `native` method, the VM searches the native library by looking first for the short version of the native method name, that is, the name without the escaped argument signature. If a native method with the short name is not found, then the VM looks for the long version of the native method name, that is, the name including the escaped argument signature.

Looking for the short name first makes it easier to declare implementations in the native library. For example, given this `native` method in Java:

    package p.q.r;
    class A {
        native double f(int i, String s);
    }

The corresponding C function can be named `Java_p_q_r_A_f`, rather than `Java_p_q_r_A_f__ILjava_lang_String_2`.

Declaring implementations with long names in the native library is only necessary when two or more `native` methods in a class have the same name. For example, given these `native` methods in Java:

    package p.q.r;
    class A {
        native double f(int i, String s);
        native double f(int i, Object s);
    }

The corresponding C functions must be named `Java_p_q_r_A_f__ILjava_lang_String_2` and `Java_p_q_r_A_f__ILjava_lang_Object_2`, because the `native` methods are overloaded.

Long names in the native library are not necessary if a `native` method in Java is overloaded by non-`native` methods only. In the following example, the `native` method `g` does not have to be linked using the long name because the other method `g` is not `native` and thus does not reside in the native library.

    package p.q.r;
    class B {
        int g(int i);
        native int g(double d);
    }

Note that escape sequences can safely begin `_0`, `_1`, etc, because class and method names in Java source code never begin with a number. However, that is not the case in class files that were not generated from Java source code. To preserve the 1:1 mapping to a native method name, the VM checks the resulting name as follows. If the process of escaping any precursor string from the `native` method declaration (class or method name, or argument type) causes a "`0`", "`1`", "`2`", or "`3`" character from the precursor string to appear unchanged in the result _either_ immediately after an underscore _or_ at the beginning of the escaped string (where it will follow an underscore in the fully assembled name), then the escaping process is said to have "failed". In such cases, no native library search is performed, and the attempt to link the `native` method invocation will throw `UnsatisfiedLinkError`. It would be possible to extend the present simple mapping scheme to cover such cases, but the complexity costs would outweigh any benefit.

Both the native methods and the interface APIs follow the standard library-calling convention on a given platform. For example, UNIX systems use the C calling convention, while Win32 systems use __stdcall.

Native methods can also be explicitly linked using the [`RegisterNatives` function](functions.html#registering-native-methods). Be aware that `RegisterNatives` can change the documented behavior of the JVM (including cryptographic algorithms, correctness, security, type safety), by changing the native code to be executed for a given native Java method. Therefore use applications that have native libraries utilizing the `RegisterNatives` function with caution.

### Native Method Arguments

The JNI interface pointer is the first argument to native methods. The JNI interface pointer is of type _JNIEnv_. The second argument differs depending on whether the native method is static or nonstatic. The second argument to a nonstatic native method is a reference to the object. The second argument to a static native method is a reference to its Java class.

The remaining arguments correspond to regular Java method arguments. The native method call passes its result back to the calling routine via the return value. [Chapter 3: JNI Types and Data Structures](types.html) describes the mapping between Java and C types.

The following code example illustrates using a C function to implement the native method `f`. The native method `f` is declared as follows:

    package p.q.r;
    
    class A {
        native double f(int i, String s);
        // ...
    }

The C function with the long name `Java_p_q_r_A_f_ILjava_lang_String_2` implements native method `f`:

    jdouble Java_p_q_r_A_f__ILjava_lang_String_2 (
         JNIEnv *env,        /* interface pointer */
         jobject obj,        /* "this" pointer */
         jint i,             /* argument #1 */
         jstring s)          /* argument #2 */
    {
         /* Obtain a C-copy of the Java string */
         const char *str = (*env)->GetStringUTFChars(env, s, 0);
    
         /* process the string */
         ...
    
         /* Now we are done with str */
         (*env)->ReleaseStringUTFChars(env, s, str);
    
         return ...
    }

Note that we always manipulate Java objects using the interface pointer _env_. Using C++, you can write a slightly cleaner version of the code, as shown in the following code example:

    extern "C" /* specify the C calling convention */
    
    jdouble Java_p_q_r_A_f__ILjava_lang_String_2 (
    
         JNIEnv *env,        /* interface pointer */
         jobject obj,        /* "this" pointer */
         jint i,             /* argument #1 */
         jstring s)          /* argument #2 */
    
    {
         const char *str = env->GetStringUTFChars(s, 0);
    
         // ...
    
         env->ReleaseStringUTFChars(s, str);
    
         // return ...
    }

With C++, the extra level of indirection and the interface pointer argument disappear from the source code. However, the underlying mechanism is exactly the same as with C. In C++, JNI functions are defined as inline member functions that expand to their C counterparts.

Referencing Java Objects
------------------------

Primitive types, such as integers, characters, and so on, are copied between Java and native code. Arbitrary Java objects, on the other hand, are passed by reference. The VM must keep track of all objects that have been passed to the native code, so that these objects are not freed by the garbage collector. The native code, in turn, must have a way to inform the VM that it no longer needs the objects. In addition, the garbage collector must be able to move an object referred to by the native code.

### Global and Local References

The JNI divides object references used by the native code into two categories: _local_ and _global references_. Local references are valid for the duration of a native method call, and are automatically freed after the native method returns. Global references remain valid until they are explicitly freed.

Objects are passed to native methods as local references. All Java objects returned by JNI functions are local references. The JNI allows the programmer to create global references from local references. JNI functions that expect Java objects accept both global and local references. A native method may return a local or global reference to the VM as its result.

In most cases, the programmer should rely on the VM to free all local references after the native method returns. However, there are times when the programmer should explicitly free a local reference. Consider, for example, the following situations:

*   A native method accesses a large Java object, thereby creating a local reference to the Java object. The native method then performs additional computation before returning to the caller. The local reference to the large Java object will prevent the object from being garbage collected, even if the object is no longer used in the remainder of the computation.
*   A native method creates a large number of local references, although not all of them are used at the same time. Since the VM needs a certain amount of space to keep track of a local reference, creating too many local references may cause the system to run out of memory. For example, a native method loops through a large array of objects, retrieves the elements as local references, and operates on one element at each iteration. After each iteration, the programmer no longer needs the local reference to the array element.

The JNI allows the programmer to manually delete local references at any point within a native method. To ensure that programmers can manually free local references, JNI functions are not allowed to create extra local references, except for references they return as the result.

Local references are only valid in the thread in which they are created. The native code must not pass local references from one thread to another.

### Implementing Local References

To implement local references, the Java VM creates a registry for each transition of control from Java to a native method. A registry maps nonmovable local references to Java objects, and keeps the objects from being garbage collected. All Java objects passed to the native method (including those that are returned as the results of JNI function calls) are automatically added to the registry. The registry is deleted after the native method returns, allowing all of its entries to be garbage collected.

There are different ways to implement a registry, such as using a table, a linked list, or a hash table. Although reference counting may be used to avoid duplicated entries in the registry, a JNI implementation is not obliged to detect and collapse duplicate entries.

Note that local references cannot be faithfully implemented by conservatively scanning the native stack. The native code may store local references into global or heap data structures.

Accessing Java Objects
----------------------

The JNI provides a rich set of accessor functions on global and local references. This means that the same native method implementation works no matter how the VM represents Java objects internally. This is a crucial reason why the JNI can be supported by a wide variety of VM implementations.

The overhead of using accessor functions through opaque references is higher than that of direct access to C data structures. We believe that, in most cases, Java programmers use native methods to perform nontrivial tasks that overshadow the overhead of this interface.

### Accessing Primitive Arrays

This overhead is not acceptable for large Java objects containing many primitive data types, such as integer arrays and strings. (Consider native methods that are used to perform vector and matrix calculations.) It would be grossly inefficient to iterate through a Java array and retrieve every element with a function call.

One solution introduces a notion of "pinning" so that the native method can ask the VM to pin down the contents of an array. The native method then receives a direct pointer to the elements. This approach, however, has two implications:

*   The garbage collector must support pinning.
*   The VM must lay out primitive arrays contiguously in memory. Although this is the most natural implementation for most primitive arrays, boolean arrays can be implemented as packed or unpacked. Therefore, native code that relies on the exact layout of boolean arrays will not be portable.

We adopt a compromise that overcomes both of the above problems.

First, we provide a set of functions to copy primitive array elements between a segment of a Java array and a native memory buffer. Use these functions if a native method needs access to only a small number of elements in a large array.

Second, programmers can use another set of functions to retrieve a pinned-down version of array elements. Keep in mind that these functions may require the Java VM to perform storage allocation and copying. Whether these functions in fact copy the array depends on the VM implementation, as follows:

*   If the garbage collector supports pinning, and the layout of the array is the same as expected by the native method, then no copying is needed.
*   Otherwise, the array is copied to a nonmovable memory block (for example, in the C heap) and the necessary format conversion is performed. A pointer to the copy is returned.

Lastly, the interface provides functions to inform the VM that the native code no longer needs to access the array elements. When you call these functions, the system either unpins the array, or it reconciles the original array with its non-movable copy and frees the copy.

Our approach provides flexibility. A garbage collector algorithm can make separate decisions about copying or pinning for each given array. For example, the garbage collector may copy small objects, but pin the larger objects.

A JNI implementation must ensure that native methods running in multiple threads can simultaneously access the same array. For example, the JNI may keep an internal counter for each pinned array so that one thread does not unpin an array that is also pinned by another thread. Note that the JNI does not need to lock primitive arrays for exclusive access by a native method. Simultaneously updating a Java array from different threads leads to nondeterministic results.

### Accessing Fields and Methods

The JNI allows native code to access the fields and to call the methods of Java objects. The JNI identifies methods and fields by their symbolic names and type signatures. A two-step process factors out the cost of locating the field or method from its name and signature. For example, to call the method `f` in class _cls_, the native code first obtains a method ID, as follows:

    jmethodID mid = env->GetMethodID(cls, "f", "(ILjava/lang/String;)D");

The native code can then use the method ID repeatedly without the cost of method lookup, as follows:

    jdouble result = env->CallDoubleMethod(obj, mid, 10, str);

A field or method ID does not prevent the VM from unloading the class from which the ID has been derived. After the class is unloaded, the method or field ID becomes invalid. The native code, therefore, must make sure to:

*   keep a live reference to the underlying class, or
*   recompute the method or field ID

if it intends to use a method or field ID for an extended period of time.

The JNI does not impose any restrictions on how field and method IDs are implemented internally.

#### Calling Caller-Sensitive Methods

A small number of Java methods have a special property called caller sensitivity. A _caller-sensitive_ method can behave differently depending on the identity of its immediate caller. For example, [AccessibleObject::canAccess](../../api/java.base/java/lang/reflect/AccessibleObject.html#canAccess(java.lang.Object)) needs to know the caller to determine accessibility.

When native code calls such a method, there may not be any Java caller on the call stack. It is the responsibility of the programmer to know whether the Java methods being called from their native code are caller-sensitive, and how those methods will respond if there is no Java caller. If necessary the programmer can provide Java code for the native code to call, which in turn calls the original Java method.

Reporting Programming Errors
----------------------------

The JNI does not check for programming errors such as passing in NULL pointers or illegal argument types. Illegal argument types includes such things as using a normal Java object instead of a Java class object. The JNI does not check for these programming errors for the following reasons:

*   Forcing JNI functions to check for all possible error conditions degrades the performance of normal (correct) native methods.
*   In many cases, there is not enough runtime type information to perform such checking.

Most C library functions do not guard against programming errors. The `printf()` function, for example, usually causes a runtime error, rather than returning an error code, when it receives an invalid address. Forcing C library functions to check for all possible error conditions would likely result in such checks to be duplicated--once in the user code, and then again in the library.

The programmer must not pass illegal pointers or arguments of the wrong type to JNI functions. Doing so could result in arbitrary consequences, including a corrupted system state or VM crash.

Java Exceptions
---------------

The JNI allows native methods to raise arbitrary Java exceptions. The native code may also handle outstanding Java exceptions. The Java exceptions left unhandled are propagated back to the VM.

### Exceptions and Error Codes

Certain JNI functions use the Java exception mechanism to report error conditions. In most cases, JNI functions report error conditions by returning an error code _and_ throwing a Java exception. The error code is usually a special return value (such as NULL) that is outside of the range of normal return values. Therefore, the programmer can:

*   quickly check the return value of the last JNI call to determine if an error has occurred, and
*   call a function, `ExceptionOccurred()`, to obtain the exception object that contains a more detailed description of the error condition.

There are two cases where the programmer needs to check for exceptions without being able to first check an error code:

*   The JNI functions that invoke a Java method return the result of the Java method. The programmer must call `ExceptionOccurred()` to check for possible exceptions that occurred during the execution of the Java method.
*   Some of the JNI array access functions do not return an error code, but may throw an `ArrayIndexOutOfBoundsException` or `ArrayStoreException`.

In all other cases, a non-error return value guarantees that no exceptions have been thrown.

### Asynchronous Exceptions

One thread may raise an asynchronous exception in another thread by calling the `Thread.stop()` method, which has been deprecated since Java 2 SDK release 1.2. Programmers are strongly discouraged from using `Thread.stop()` as it generally leads to an indeterminate application state.

Furthermore, the JVM may produce exceptions in the current thread without being the direct result of a JNI API call, but because of various JVM internal errors, for example: `VirtualMachineError` like `StackOverflowError` or `OutOfMemoryError`. These are also referred to as asynchronous exceptions.

Asynchronous exceptions do not immediately affect the execution of the native code in the current thread, until:

*   the native code calls one of the JNI functions that could raise synchronous exceptions, or
*   the native code uses `ExceptionOccurred()` to explicitly check for synchronous and asynchronous exceptions.

Note that only those JNI functions that could potentially raise synchronous exceptions check for asynchronous exceptions.

Native methods should insert `ExceptionOccurred()` checks in necessary places, such as in any long running code without other exception checks (this may include tight loops). This ensures that the current thread responds to asynchronous exceptions in a reasonable amount of time. However, because of their asynchronous nature, making an exception check before a call is no guarantee that an asynchronous exception won't be raised between the check and the call.

### Exception Handling

There are two ways to handle an exception in native code:

*   The native method can choose to return immediately, causing the exception to be thrown in the Java code that initiated the native method call.
*   The native code can clear the exception by calling `ExceptionClear()`, and then execute its own exception-handling code.

After an exception has been raised, the native code must first clear the exception before making other JNI calls. When there is a pending exception, the JNI functions that are safe to call are:

    ExceptionOccurred()
    ExceptionDescribe()
    ExceptionClear()
    ExceptionCheck()
    ReleaseStringChars()
    ReleaseStringUTFChars()
    ReleaseStringCritical()
    Release<Type>ArrayElements()
    ReleasePrimitiveArrayCritical()
    DeleteLocalRef()
    DeleteGlobalRef()
    DeleteWeakGlobalRef()
    MonitorExit()
    PushLocalFrame()
    PopLocalFrame()
    DetachCurrentThread()



Chapter 3: JNI Types and Data Structures
========================================

This chapter discusses how the JNI maps Java types to native C types.

This chapter covers the following topics:

*   [Primitive Types](#primitive-types)
*   [Reference Types](#reference-types)
*   [Field and Method IDs](#field-and-method-ids)
*   [The Value Type](#the-value-type)
*   [Type Signatures](#type-signatures)
*   [Modified UTF-8 Strings](#modified-utf-8-strings)

Primitive Types
---------------

The following table describes Java primitive types and their machine-dependent native equivalents.

Primitive Types and Native Equivalents

Java Type

Native Type

Description

boolean

jboolean

unsigned 8 bits

byte

jbyte

signed 8 bits

char

jchar

unsigned 16 bits

short

jshort

signed 16 bits

int

jint

signed 32 bits

long

jlong

signed 64 bits

float

jfloat

32 bits

double

jdouble

64 bits

void

void

not applicable

The following definition is provided for convenience.

    #define JNI_FALSE  0
    #define JNI_TRUE   1

The `jsize` integer type is used to describe cardinal indices and sizes:

    typedef jint jsize;

Reference Types
---------------

The JNI includes a number of reference types that correspond to different kinds of Java objects. JNI reference types are organized in the following hierarchy:

*   `jobject`
    *   `jclass` (`java.lang.Class` objects)
    *   `jstring` (`java.lang.String` objects)
    *   `jarray` (arrays)
        *   `jobjectArray` (object arrays)
        *   `jbooleanArray` (`boolean` arrays)
        *   `jbyteArray` (`byte` arrays)
        *   `jcharArray` (`char` arrays)
        *   `jshortArray` (`short` arrays)
        *   `jintArray` (`int` arrays)
        *   `jlongArray` (`long` arrays)
        *   `jfloatArray` (`float` arrays)
        *   `jdoubleArray` (`double` arrays)
    *   `jthrowable` (`java.lang.Throwable` objects)

In C, all other JNI reference types are defined to be the same as jobject. For example:

    typedef jobject jclass;

In C++, JNI introduces a set of dummy classes to enforce the subtyping relationship. For example:

    class _jobject {};
    class _jclass : public _jobject {};
    // ...
    typedef _jobject *jobject;
    typedef _jclass *jclass;

Field and Method IDs
--------------------

Method and field IDs are regular C pointer types:

    struct _jfieldID;              /* opaque structure */
    typedef struct _jfieldID *jfieldID;   /* field IDs */
    
    struct _jmethodID;              /* opaque structure */
    typedef struct _jmethodID *jmethodID; /* method IDs */

The Value Type
--------------

The `jvalue` union type is used as the element type in argument arrays. It is declared as follows:

    typedef union jvalue {
        jboolean z;
        jbyte    b;
        jchar    c;
        jshort   s;
        jint     i;
        jlong    j;
        jfloat   f;
        jdouble  d;
        jobject  l;
    } jvalue;

Type Signatures
---------------

The JNI uses the Java VM’s representation of type signatures. The following table shows these type signatures.

Java VM Type Signatures

Type Signature

Java Type

`Z`

boolean

`B`

byte

`C`

char

`S`

short

`I`

int

`J`

long

`F`

float

`D`

double

`L` fully-qualified-class `;`

fully-qualified-class

`[` type

type\[\]

`(` arg-types `)` ret-type

method type

For example, the Java method:

    long f (int n, String s, int[] arr);

has the following type signature:

    (ILjava/lang/String;[I)J

Modified UTF-8 Strings
----------------------

The JNI uses modified UTF-8 strings to represent various string types. Modified UTF-8 strings are the same as those used by the Java VM. Modified UTF-8 strings are encoded so that character sequences that contain only non-null ASCII characters can be represented using only one byte per character, but all Unicode characters can be represented.

All characters in the range \\u0001 to \\u007F are represented by a single byte, as follows:

*   `0xxxxxxx`

The seven bits of data in the byte give the value of the character represented.

The null character (`'\u0000'`) and characters in the range `'\u0080'` to `'\u07FF'` are represented by a pair of bytes x and y:

*   x: `110xxxxx`
*   y: `10yyyyyy`

The bytes represent the character with the value ((x & `0x1f`) << `6`) + (y & `0x3f`).

Characters in the range `'\u0800'` to `'\uFFFF'` are represented by 3 bytes x, y, and z:

*   x: `1110xxxx`
*   y: `10yyyyyy`
*   z: `10zzzzzz`

The character with the value ((x & `0xf`) << `12`) + ((y & `0x3f`) << `6`) + (z & `0x3f`) is represented by the bytes.

Characters with code points above U+FFFF (so-called _supplementary characters_) are represented by separately encoding the two surrogate code units of their UTF-16 representation. Each of the surrogate code units is represented by three bytes. This means, supplementary characters are represented by six bytes, _u_, _v_, _w_, _x_, _y_, and _z_:

*   u: `11101101`
*   v: `1010vvvv`
*   w: `10wwwwww`
*   x: `11101101`
*   y: `1011yyyy`
*   z: `10zzzzzz`

The character with the value 0x10000+((v&0x0f)<<16)+((w&0x3f)<<10)+(y&0x0f)<<6)+(z&0x3f) is represented by the six bytes.

The bytes of multibyte characters are stored in the `class` file in big-endian (high byte first) order.

There are two differences between this format and the standard UTF-8 format. First, the null character `(char)0` is encoded using the two-byte format rather than the one-byte format. This means that modified UTF-8 strings never have embedded nulls. Second, only the one-byte, two-byte, and three-byte formats of standard UTF-8 are used. The Java VM does not recognize the four-byte format of standard UTF-8; it uses its own two-times-three-byte format instead.

For more information regarding the standard UTF-8 format, see section _3.9 Unicode Encoding Forms_ of _The Unicode Standard, Version 4.0_.



Chapter 4: JNI Functions
========================

This chapter serves as the reference section for the JNI functions. It provides a complete listing of all the JNI functions. It also presents the exact layout of the JNI function table.

Note the use of the term "must" to describe restrictions on JNI programmers. For example, when you see that a certain JNI function _must_ receive a non-NULL object, it is your responsibility to ensure that NULL is not passed to that JNI function. As a result, a JNI implementation does not need to perform NULL pointer checks in that JNI function. Passing NULL when explicity not allowed may result in an unexpected exception or a fatal crash.

Functions whose definition may both return `NULL` and throw an exception on error, may choose only to return `NULL` to indicate an error, but not throw any exception. For example, a JNI implementation may consider an "out of memory" condition temporary, and may not wish to throw an `OutOfMemoryError` since this would appear fatal (JDK API `java.lang.Error` documentation: _"indicates serious problems that a reasonable application should not try to catch"_).

A portion of this chapter is adapted from Netscape’s JRI documentation.

The reference material groups functions by their usage. The reference section is organized by the following functional areas:

*   [Interface Function Table](#interface-function-table)
*   [Constants](#constants)
    *   [Boolean values](#boolean-values)
    *   [Return codes](#return-codes)
*   [Version Information](#version-information)
    *   [GetVersion](#getversion)
    *   [Version Constants](#version-constants)
*   [Class Operations](#class-operations)
    *   [DefineClass](#defineclass)
    *   [FindClass](#findclass)
    *   [GetSuperclass](#getsuperclass)
    *   [IsAssignableFrom](#isassignablefrom)
*   [Module Operations](#module-operations)
    *   [GetModule](#getmodule)
*   [Exceptions](#exceptions)
    *   [Throw](#throw)
    *   [ThrowNew](#thrownew)
    *   [ExceptionOccurred](#exceptionoccurred)
    *   [ExceptionDescribe](#exceptiondescribe)
    *   [ExceptionClear](#exceptionclear)
    *   [FatalError](#fatalerror)
    *   [ExceptionCheck](#exceptioncheck)
*   [Global and Local References](#global-and-local-references)
    *   [Global References](#global-references)
    *   [NewGlobalRef](#newglobalref)
    *   [DeleteGlobalRef](#deleteglobalref)
    *   [Local References](#local-references)
    *   [DeleteLocalRef](#deletelocalref)
    *   [EnsureLocalCapacity](#ensurelocalcapacity)
    *   [PushLocalFrame](#pushlocalframe)
    *   [PopLocalFrame](#poplocalframe)
    *   [NewLocalRef](#newlocalref)
*   [Weak Global References](#weak-global-references)
    *   [NewWeakGlobalRef](#newweakglobalref)
    *   [DeleteWeakGlobalRef](#deleteweakglobalref)
*   [Object Operations](#object-operations)
    *   [AllocObject](#allocobject)
    *   [NewObject, NewObjectA, NewObjectV](#newobject-newobjecta-newobjectv)
    *   [GetObjectClass](#getobjectclass)
    *   [GetObjectRefType](#getobjectreftype)
    *   [IsInstanceOf](#isinstanceof)
    *   [IsSameObject](#issameobject)
*   [Accessing Fields of Objects](#accessing-fields-of-objects)
    *   [GetFieldID](#getfieldid)
    *   [Get<type>Field Routines](#gettypefield-routines)
    *   [Set<type>Field Routines](#settypefield-routines)
*   [Calling Instance Methods](#calling-instance-methods)
    *   [GetMethodID](#getmethodid)
    *   [Call<type>Method Routines, Call<type>MethodA Routines, Call<type>MethodV Routines](#calltypemethod-routines-calltypemethoda-routines-calltypemethodv-routines)
    *   [CallNonvirtual<type>Method Routines, CallNonvirtual<type>MethodA Routines, CallNonvirtual<type>MethodV Routines](#callnonvirtualtypemethod-routines-callnonvirtualtypemethoda-routines-callnonvirtualtypemethodv-routines)
*   [Accessing Static Fields](#accessing-static-fields)
    *   [GetStaticFieldID](#getstaticfieldid)
    *   [GetStatic<type>Field Routines](#getstatictypefield-routines)
    *   [SetStatic<type>Field Routines](#setstatictypefield-routines)
*   [Calling Static Methods](#calling-static-methods)
    *   [GetStaticMethodID](#getstaticmethodid)
    *   [CallStatic<type>Method Routines, CallStatic<type>MethodA Routines, CallStatic<type>MethodV Routines](#callstatictypemethod-routines-callstatictypemethoda-routines-callstatictypemethodv-routines)
*   [String Operations](#string-operations)
    *   [NewString](#newstring)
    *   [GetStringLength](#getstringlength)
    *   [GetStringChars](#getstringchars)
    *   [ReleaseStringChars](#releasestringchars)
    *   [NewStringUTF](#newstringutf)
    *   [GetStringUTFLength](#getstringutflength)
    *   [GetStringUTFChars](#getstringutfchars)
    *   [ReleaseStringUTFChars](#releasestringutfchars)
    *   [GetStringRegion](#getstringregion)
    *   [GetStringUTFRegion](#getstringutfregion)
    *   [GetStringCritical, ReleaseStringCritical](#getstringcritical-releasestringcritical)
*   [Array Operations](#array-operations)
    *   [GetArrayLength](#getarraylength)
    *   [NewObjectArray](#newobjectarray)
    *   [GetObjectArrayElement](#getobjectarrayelement)
    *   [SetObjectArrayElement](#setobjectarrayelement)
    *   [New<PrimitiveType>Array Routines](#newprimitivetypearray-routines)
    *   [Get<PrimitiveType>ArrayElements Routines](#getprimitivetypearrayelements-routines)
    *   [Release<PrimitiveType>ArrayElements Routines](#releaseprimitivetypearrayelements-routines)
    *   [Get<PrimitiveType>ArrayRegion Routines](#getprimitivetypearrayregion-routines)
    *   [Set<PrimitiveType>ArrayRegion Routines](#setprimitivetypearrayregion-routines)
    *   [GetPrimitiveArrayCritical, ReleasePrimitiveArrayCritical](#getprimitivearraycritical-releaseprimitivearraycritical)
*   [Registering Native Methods](#registering-native-methods)
    *   [RegisterNatives](#registernatives)
    *   [UnregisterNatives](#unregisternatives)
*   [Monitor Operations](#monitor-operations)
    *   [MonitorEnter](#monitorenter)
    *   [MonitorExit](#monitorexit)
*   [NIO Support](#nio-support)
    *   [NewDirectByteBuffer](#newdirectbytebuffer)
    *   [GetDirectBufferAddress](#getdirectbufferaddress)
    *   [GetDirectBufferCapacity](#getdirectbuffercapacity)
*   [Reflection Support](#reflection-support)
    *   [FromReflectedMethod](#fromreflectedmethod)
    *   [FromReflectedField](#fromreflectedfield)
    *   [ToReflectedMethod](#toreflectedmethod)
    *   [ToReflectedField](#toreflectedfield)
*   [Java VM Interface](#java-vm-interface)
    *   [GetJavaVM](#getjavavm)

Interface Function Table
------------------------

Each function is accessible at a fixed offset through the _JNIEnv_ argument. The _JNIEnv_ type is a pointer to a structure storing all JNI function pointers. It is defined as follows:

    typedef const struct JNINativeInterface *JNIEnv;

The VM initializes the function table, as shown by the following code example. Note that the first three entries are reserved for future compatibility with COM. In addition, we reserve a number of additional `NULL` entries near the beginning of the function table, so that, for example, a future class-related JNI operation can be added after FindClass, rather than at the end of the table.

Note that the function table can be shared among all JNI interface pointers.

    const struct JNINativeInterface ... = {
    
        NULL,
        NULL,
        NULL,
        NULL,
        GetVersion,
    
        DefineClass,
        FindClass,
    
        FromReflectedMethod,
        FromReflectedField,
        ToReflectedMethod,
    
        GetSuperclass,
        IsAssignableFrom,
    
        ToReflectedField,
    
        Throw,
        ThrowNew,
        ExceptionOccurred,
        ExceptionDescribe,
        ExceptionClear,
        FatalError,
    
        PushLocalFrame,
        PopLocalFrame,
    
        NewGlobalRef,
        DeleteGlobalRef,
        DeleteLocalRef,
        IsSameObject,
        NewLocalRef,
        EnsureLocalCapacity,
    
        AllocObject,
        NewObject,
        NewObjectV,
        NewObjectA,
    
        GetObjectClass,
        IsInstanceOf,
    
        GetMethodID,
    
        CallObjectMethod,
        CallObjectMethodV,
        CallObjectMethodA,
        CallBooleanMethod,
        CallBooleanMethodV,
        CallBooleanMethodA,
        CallByteMethod,
        CallByteMethodV,
        CallByteMethodA,
        CallCharMethod,
        CallCharMethodV,
        CallCharMethodA,
        CallShortMethod,
        CallShortMethodV,
        CallShortMethodA,
        CallIntMethod,
        CallIntMethodV,
        CallIntMethodA,
        CallLongMethod,
        CallLongMethodV,
        CallLongMethodA,
        CallFloatMethod,
        CallFloatMethodV,
        CallFloatMethodA,
        CallDoubleMethod,
        CallDoubleMethodV,
        CallDoubleMethodA,
        CallVoidMethod,
        CallVoidMethodV,
        CallVoidMethodA,
    
        CallNonvirtualObjectMethod,
        CallNonvirtualObjectMethodV,
        CallNonvirtualObjectMethodA,
        CallNonvirtualBooleanMethod,
        CallNonvirtualBooleanMethodV,
        CallNonvirtualBooleanMethodA,
        CallNonvirtualByteMethod,
        CallNonvirtualByteMethodV,
        CallNonvirtualByteMethodA,
        CallNonvirtualCharMethod,
        CallNonvirtualCharMethodV,
        CallNonvirtualCharMethodA,
        CallNonvirtualShortMethod,
        CallNonvirtualShortMethodV,
        CallNonvirtualShortMethodA,
        CallNonvirtualIntMethod,
        CallNonvirtualIntMethodV,
        CallNonvirtualIntMethodA,
        CallNonvirtualLongMethod,
        CallNonvirtualLongMethodV,
        CallNonvirtualLongMethodA,
        CallNonvirtualFloatMethod,
        CallNonvirtualFloatMethodV,
        CallNonvirtualFloatMethodA,
        CallNonvirtualDoubleMethod,
        CallNonvirtualDoubleMethodV,
        CallNonvirtualDoubleMethodA,
        CallNonvirtualVoidMethod,
        CallNonvirtualVoidMethodV,
        CallNonvirtualVoidMethodA,
    
        GetFieldID,
    
        GetObjectField,
        GetBooleanField,
        GetByteField,
        GetCharField,
        GetShortField,
        GetIntField,
        GetLongField,
        GetFloatField,
        GetDoubleField,
        SetObjectField,
        SetBooleanField,
        SetByteField,
        SetCharField,
        SetShortField,
        SetIntField,
        SetLongField,
        SetFloatField,
        SetDoubleField,
    
        GetStaticMethodID,
    
        CallStaticObjectMethod,
        CallStaticObjectMethodV,
        CallStaticObjectMethodA,
        CallStaticBooleanMethod,
        CallStaticBooleanMethodV,
        CallStaticBooleanMethodA,
        CallStaticByteMethod,
        CallStaticByteMethodV,
        CallStaticByteMethodA,
        CallStaticCharMethod,
        CallStaticCharMethodV,
        CallStaticCharMethodA,
        CallStaticShortMethod,
        CallStaticShortMethodV,
        CallStaticShortMethodA,
        CallStaticIntMethod,
        CallStaticIntMethodV,
        CallStaticIntMethodA,
        CallStaticLongMethod,
        CallStaticLongMethodV,
        CallStaticLongMethodA,
        CallStaticFloatMethod,
        CallStaticFloatMethodV,
        CallStaticFloatMethodA,
        CallStaticDoubleMethod,
        CallStaticDoubleMethodV,
        CallStaticDoubleMethodA,
        CallStaticVoidMethod,
        CallStaticVoidMethodV,
        CallStaticVoidMethodA,
    
        GetStaticFieldID,
    
        GetStaticObjectField,
        GetStaticBooleanField,
        GetStaticByteField,
        GetStaticCharField,
        GetStaticShortField,
        GetStaticIntField,
        GetStaticLongField,
        GetStaticFloatField,
        GetStaticDoubleField,
    
        SetStaticObjectField,
        SetStaticBooleanField,
        SetStaticByteField,
        SetStaticCharField,
        SetStaticShortField,
        SetStaticIntField,
        SetStaticLongField,
        SetStaticFloatField,
        SetStaticDoubleField,
    
        NewString,
    
        GetStringLength,
        GetStringChars,
        ReleaseStringChars,
    
        NewStringUTF,
        GetStringUTFLength,
        GetStringUTFChars,
        ReleaseStringUTFChars,
    
        GetArrayLength,
    
        NewObjectArray,
        GetObjectArrayElement,
        SetObjectArrayElement,
    
        NewBooleanArray,
        NewByteArray,
        NewCharArray,
        NewShortArray,
        NewIntArray,
        NewLongArray,
        NewFloatArray,
        NewDoubleArray,
    
        GetBooleanArrayElements,
        GetByteArrayElements,
        GetCharArrayElements,
        GetShortArrayElements,
        GetIntArrayElements,
        GetLongArrayElements,
        GetFloatArrayElements,
        GetDoubleArrayElements,
    
        ReleaseBooleanArrayElements,
        ReleaseByteArrayElements,
        ReleaseCharArrayElements,
        ReleaseShortArrayElements,
        ReleaseIntArrayElements,
        ReleaseLongArrayElements,
        ReleaseFloatArrayElements,
        ReleaseDoubleArrayElements,
    
        GetBooleanArrayRegion,
        GetByteArrayRegion,
        GetCharArrayRegion,
        GetShortArrayRegion,
        GetIntArrayRegion,
        GetLongArrayRegion,
        GetFloatArrayRegion,
        GetDoubleArrayRegion,
        SetBooleanArrayRegion,
        SetByteArrayRegion,
        SetCharArrayRegion,
        SetShortArrayRegion,
        SetIntArrayRegion,
        SetLongArrayRegion,
        SetFloatArrayRegion,
        SetDoubleArrayRegion,
    
        RegisterNatives,
        UnregisterNatives,
    
        MonitorEnter,
        MonitorExit,
    
        GetJavaVM,
    
        GetStringRegion,
        GetStringUTFRegion,
    
        GetPrimitiveArrayCritical,
        ReleasePrimitiveArrayCritical,
    
        GetStringCritical,
        ReleaseStringCritical,
    
        NewWeakGlobalRef,
        DeleteWeakGlobalRef,
    
        ExceptionCheck,
    
        NewDirectByteBuffer,
        GetDirectBufferAddress,
        GetDirectBufferCapacity,
    
        GetObjectRefType,
    
        GetModule
      };

Constants
---------

There are a number of general constants used throughout the JNI API.

### Boolean values

    #define JNI_FALSE 0
    #define JNI_TRUE 1

### Return codes

General return value constants for JNI functions.

    #define JNI_OK           0                 /* success */
    #define JNI_ERR          (-1)              /* unknown error */
    #define JNI_EDETACHED    (-2)              /* thread detached from the VM */
    #define JNI_EVERSION     (-3)              /* JNI version error */
    #define JNI_ENOMEM       (-4)              /* not enough memory */
    #define JNI_EEXIST       (-5)              /* VM already created */
    #define JNI_EINVAL       (-6)              /* invalid arguments */

Version Information
-------------------

### GetVersion

`jint GetVersion(JNIEnv *env);`

Returns the version of the native method interface. For Java SE Platform 10 and later, it returns `JNI_VERSION_10`. The following table gives the version of JNI included in each release of the Java SE Platform (for older versions of JNI, the JDK release is used instead of the Java SE Platform):

Java SE Platform

JNI Version

1.1

`JNI_VERSION_1_1`

1.2

`JNI_VERSION_1_2`

1.3

`JNI_VERSION_1_2`

1.4

`JNI_VERSION_1_4`

5.0

`JNI_VERSION_1_4`

6

`JNI_VERSION_1_6`

7

`JNI_VERSION_1_6`

8

`JNI_VERSION_1_8`

9

`JNI_VERSION_9`

10+

`JNI_VERSION_10`

#### LINKAGE:

Index 4 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

#### RETURNS:

Returns the major version number in the higher 16 bits and the minor version number in the lower 16 bits.

### Version Constants

    #define JNI_VERSION_1_1 0x00010001
    #define JNI_VERSION_1_2 0x00010002
    #define JNI_VERSION_1_4 0x00010004
    #define JNI_VERSION_1_6 0x00010006
    #define JNI_VERSION_1_8 0x00010008
    #define JNI_VERSION_9   0x00090000
    #define JNI_VERSION_10  0x000a0000

Class Operations
----------------

### DefineClass

`jclass DefineClass(JNIEnv *env, const char *name, jobject loader, const jbyte *buf, jsize bufLen);`

Loads a class from a buffer of raw class data. The buffer containing the raw class data is not referenced by the VM after the DefineClass call returns, and it may be discarded if desired.

#### LINKAGE:

Index 5 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`name`: the name of the class or interface to be defined. The string is encoded in modified UTF-8. This value may be `NULL`, or it must match the name encoded within the class file data.

`loader`: a class loader assigned to the defined class. This value may be `NULL`, indicating the _"null class loader"_ (or _"bootstrap class loader"_).

`buf`: buffer containing the `.class` file data. A `NULL` value will cause a `ClassFormatError`.

`bufLen`: buffer length.

#### RETURNS:

Returns a Java class object or `NULL` if an error occurs.

#### THROWS:

`ClassFormatError`: if the class data does not specify a valid class.

`ClassCircularityError`: if a class or interface would be its own superclass or superinterface.

`OutOfMemoryError`: if the system runs out of memory.

`SecurityException`: if the caller attempts to define a class in the "java" package tree.

### FindClass

`jclass FindClass(JNIEnv *env, const char *name);`

In JDK release 1.1, this function loads a locally-defined class. It searches the directories and zip files specified by the `CLASSPATH` environment variable for the class with the specified name.

Since JDK 1.2, the Java security model allows non-system classes to load and call native methods. `FindClass` locates the class loader associated with the current native method; that is, the class loader of the class that declared the native method. If the native method belongs to a system class, no class loader will be involved. Otherwise, the proper class loader will be invoked to load, link, and initialize, the named class.

Since JDK 1.2, when `FindClass` is called through the Invocation Interface, there is no current native method or its associated class loader. In that case, the result of `ClassLoader.getSystemClassLoader` is used. This is the class loader the virtual machine creates for applications, and is able to locate classes listed in the `java.class.path` property.

If `FindClass` is called from a library lifecycle function hook, the class loader is determined as follows:

*   for `JNI_OnLoad` and `JNI_OnLoad_L` the class loader of the class that is loading the native library is used
*   for `JNI_OnUnload` and `JNI_OnUnload_L` the class loader returned by `ClassLoader.getSystemClassLoader` is used (as the class loader used at on-load time may no longer exist)

The `name` argument is a fully-qualified class name or an array type signature. For example, the fully-qualified class name for the `java.lang.String` class is:

        "java/lang/String"

The array type signature of the array class `java.lang.Object[]` is:

        "[Ljava/lang/Object;"

#### LINKAGE:

Index 6 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`name`: a fully-qualified class name (that is, a package name, delimited by "`/`", followed by the class name). If the name begins with "`[`" (the array signature character), it returns an array class. The string is encoded in modified UTF-8. A `NULL` value may cause `NoClassDefFoundError` to occur, or a crash.

#### RETURNS:

Returns a class object from a fully-qualified name, or `NULL` if the class cannot be found.

#### THROWS:

`ClassFormatError`: if the class data does not specify a valid class.

`ClassCircularityError`: if a class or interface would be its own superclass or superinterface.

`NoClassDefFoundError`: if no definition for a requested class or interface can be found.

`OutOfMemoryError`: if the system runs out of memory.

### GetSuperclass

`jclass GetSuperclass(JNIEnv *env, jclass clazz);`

If `clazz` represents any class other than the class `Object`, then this function returns the object that represents the superclass of the class specified by `clazz`.

If `clazz` specifies the class `Object`, or `clazz` represents an interface, this function returns `NULL`.

#### LINKAGE:

Index 10 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

#### RETURNS:

Returns the superclass of the class represented by `clazz`, or `NULL`.

### IsAssignableFrom

`jboolean IsAssignableFrom(JNIEnv *env, jclass clazz1, jclass clazz2);`

Determines whether an object of `clazz1` can be safely cast to `clazz2`.

#### LINKAGE:

Index 11 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz1`: the first class argument, must not be `NULL`.

`clazz2`: the second class argument, must not be `NULL`.

#### RETURNS:

Returns `JNI_TRUE` if either of the following is true:

*   The first and second class arguments refer to the same Java class.
*   The first class is a subclass of the second class.
*   The first class has the second class as one of its interfaces.

Module Operations
-----------------

### GetModule

`jobject GetModule(JNIEnv *env, jclass clazz);`

Returns the `java.lang.Module` object for the module that the class is a member of. If the class is not in a named module then the unnamed module of the class loader for the class is returned. If the class represents an array type then this function returns the `Module` object for the element type. If the class represents a primitive type or `void`, then the `Module` object for the `java.base` module is returned.

#### LINKAGE:

Index 233 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

#### RETURNS:

Returns the module that the class or interface is a member of.

#### SINCE:

JDK/JRE 9

Exceptions
----------

### Throw

`jint Throw(JNIEnv *env, jthrowable obj);`

Causes a `java.lang.Throwable` object to be thrown.

#### LINKAGE:

Index 13 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a `java.lang.Throwable` object, must not be `NULL`.

#### RETURNS:

Returns 0 on success; a negative value on failure.

#### THROWS:

The `java.lang.Throwable` object `obj`.

### ThrowNew

`jint ThrowNew(JNIEnv *env, jclass clazz, const char *message);`

Constructs an exception object from the specified class with the message specified by `message` and causes that exception to be thrown.

#### LINKAGE:

Index 14 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a subclass of `java.lang.Throwable`, must not be `NULL`.

`message`: the message used to construct the `java.lang.Throwable` object. The string is encoded in modified UTF-8. This value may be `NULL`.

#### RETURNS:

Returns 0 on success; a negative value on failure.

#### THROWS:

The newly constructed `java.lang.Throwable` object.

### ExceptionOccurred

`jthrowable ExceptionOccurred(JNIEnv *env);`

Determines if an exception is being thrown. The exception stays being thrown until either the native code calls `ExceptionClear()`, or the Java code handles the exception.

#### LINKAGE:

Index 15 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

#### RETURNS:

Returns the exception object that is currently in the process of being thrown, or `NULL` if no exception is currently being thrown.

### ExceptionDescribe

`void ExceptionDescribe(JNIEnv *env);`

Prints an exception and a backtrace of the stack to a system error-reporting channel, such as `stderr`. The pending exception is cleared as a side-effect of calling this function. This is a convenience routine provided for debugging.

#### LINKAGE:

Index 16 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

### ExceptionClear

`void ExceptionClear(JNIEnv *env);`

Clears any exception that is currently being thrown. If no exception is currently being thrown, this routine has no effect.

#### LINKAGE:

Index 17 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

### FatalError

`void FatalError(JNIEnv *env, const char *msg);`

Raises a fatal error and does not expect the VM to recover. This function does not return.

#### LINKAGE:

Index 18 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`msg`: an error message. The string is encoded in modified UTF-8. May be a `NULL` value.

### ExceptionCheck

We introduce a convenience function to check for pending exceptions without creating a local reference to the exception object.

`jboolean ExceptionCheck(JNIEnv *env);`

Returns `JNI_TRUE` when there is a pending exception; otherwise, returns `JNI_FALSE`.

#### LINKAGE:

Index 228 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

Global and Local References
---------------------------

### Global References

### NewGlobalRef

`jobject NewGlobalRef(JNIEnv *env, jobject obj);`

Creates a new global reference to the object referred to by the `obj` argument. The `obj` argument may be a global or local reference. Global references must be explicitly disposed of by calling `DeleteGlobalRef()`.

#### LINKAGE:

Index 21 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a global or local reference. May be a `NULL` value, in which case this function will return `NULL`.

#### RETURNS:

Returns a global reference to the given `obj`.

May return `NULL` if:

*   `obj` refers to `null`
*   the system has run out of memory
*   `obj` was a weak global reference and has already been garbage collected

### DeleteGlobalRef

`void DeleteGlobalRef(JNIEnv *env, jobject globalRef);`

Deletes the global reference pointed to by `globalRef`.

#### LINKAGE:

Index 22 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`globalRef`: a global reference. May be a `NULL` value, in which case this function does nothing.

### Local References

Local references are valid for the duration of a native method call. They are freed automatically after the native method returns. Each local reference costs some amount of Java Virtual Machine resource. Programmers need to make sure that native methods do not excessively allocate local references. Although local references are automatically freed after the native method returns to Java, excessive allocation of local references may cause the VM to run out of memory during the execution of a native method.

### DeleteLocalRef

`void DeleteLocalRef(JNIEnv *env, jobject localRef);`

Deletes the local reference pointed to by `localRef`.

#### LINKAGE:

Index 23 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`localRef`: a local reference. The function does nothing in the case of a `NULL` value passed here.

**Note**: JDK/JRE 1.1 provides the `DeleteLocalRef` function above so that programmers can manually delete local references. For example, if native code iterates through a potentially large array of objects and uses one element in each iteration, it is a good practice to delete the local reference to the no-longer-used array element before a new local reference is created in the next iteration. As of JDK/JRE 1.2 an additional set of functions are provided for local reference lifetime management. They are the four functions listed below.

### EnsureLocalCapacity

`jint EnsureLocalCapacity(JNIEnv *env, jint capacity);`

Ensures that _at least_ a given number of local references can be created in the current thread. Returns 0 on success; otherwise returns a negative number and throws an `OutOfMemoryError`.

Before it enters a native method, the VM automatically ensures that at least **16** local references can be created.

For backward compatibility, the VM allocates local references beyond the ensured capacity. (As a debugging support, the VM may give the user warnings that too many local references are being created. In the JDK, the programmer can supply the `-verbose:jni` command line option to turn on these messages.) The VM calls `FatalError` if no more local references can be created beyond the ensured capacity.

Some Java Virtual Machine implementations may choose to limit the maximum `capacity`, which may cause the function to return an error (e.g. `JNI_ERR` or `JNI_EINVAL`). The HotSpot JVM implementation, for example, uses the `-XX:+MaxJNILocalCapacity` flag (default: 65536).

#### LINKAGE:

Index 26 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`capacity`: the minimum number of required local references. Must be >= 0.

#### RETURNS:

`JNI_OK` upon succcess.

#### SINCE:

JDK/JRE 1.2

### PushLocalFrame

`jint PushLocalFrame(JNIEnv *env, jint capacity);`

Creates a new local reference frame, in which at least a given number of local references can be created. Returns 0 on success, a negative number and a pending `OutOfMemoryError` on failure.

Note that local references already created in previous local frames are still valid in the current local frame.

As with `EnsureLocalCapacity`, some Java Virtual Machine implementations may choose to limit the maximum `capacity`, which may cause the function to return an error.

#### LINKAGE:

Index 19 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`capacity`: the minimum number of required local references. Must be > 0.

#### RETURNS:

`JNI_OK` upon succcess.

#### SINCE:

JDK/JRE 1.2

### PopLocalFrame

`jobject PopLocalFrame(JNIEnv *env, jobject result);`

Pops off the current local reference frame, frees all the local references, and returns a local reference in the previous local reference frame for the given `result` object.

Pass `NULL` as `result` if you do not need to return a reference to the previous frame.

#### LINKAGE:

Index 20 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`result`: an object to be passed to the previous local reference frame, may be `NULL`.

#### RETURNS:

Returns a local reference in the previous local reference frame for the given `result` object, or `NULL` if the given `result` object was `NULL`.

#### SINCE:

JDK/JRE 1.2

### NewLocalRef

`jobject NewLocalRef(JNIEnv *env, jobject ref);`

Creates a new local reference that refers to the same object as `ref`. The given `ref` may be a global, a local reference or `NULL`. Returns `NULL` if `ref` refers to `null`.

#### LINKAGE:

Index 25 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`ref`: a reference to the object for which the function creates a new local reference. May be a `NULL` value.

#### RETURNS:

Returns a new local reference that refers to the same object as `ref`.

May return `NULL` if:

*   `ref` refers to `null`
*   the system has run out of memory
*   `ref` was a weak global reference and has already been garbage collected

#### SINCE:

JDK/JRE 1.2

Weak Global References
----------------------

Weak global references are a special kind of global reference. Unlike normal global references, a weak global reference allows the underlying Java object to be garbage collected. Weak global references may be used in any situation where global or local references are used.

Weak global references are related to Java phantom references (`java.lang.ref.PhantomReference`). A weak global reference to a specific object is treated as a phantom reference referring to that object when determining whether the object is _phantom reachable_ (see `java.lang.ref`). Such a weak global reference will become functionally equivalent to `NULL` at the same time as a `PhantomReference` referring to that same object would be cleared by the garbage collector.

Since garbage collection may occur while native methods are running, objects referred to by weak global references can be freed at any time. While weak global references _can_ be used where global references are used, it is generally inappropriate to do so, as they may become functionally equivalent to `NULL` without notice.

`IsSameObject` can be used to compare a weak global reference to a non-`NULL` local or global reference. If the objects are the same, the weak global reference won't become functionally equivalent to `NULL` so long as the other reference has not been deleted.

`IsSameObject` can also be used to compare a weak global reference to `NULL` to determine whether the underlying object has been freed. However, programmers should not rely on this check to determine whether a weak global reference may be used (as a non-`NULL` reference) in any future JNI function call, since an intervening garbage collection could change the weak global reference.

Instead, it is recommended that a (strong) local or global reference to the underlying object be acquired using one of the JNI functions `NewLocalRef` or `NewGlobalRef`. These functions will return `NULL` if the object has been freed. Otherwise, the new reference will prevent the underlying object from being freed. The new reference, if non-`NULL`, can then be used to access the underlying object, and deleted when such access is no longer needed.

### NewWeakGlobalRef

`jweak NewWeakGlobalRef(JNIEnv *env, jobject obj);`

Creates a new weak global reference. The weak global reference will not prevent garbage collection of the given object. `IsSameObject` may be used to test if the object referred to by the reference has been freed. Returns `NULL` if `obj` refers to `null`, or if `obj` was a weak global reference, or if the VM runs out of memory. If the VM runs out of memory, an `OutOfMemoryError` will be thrown.

#### LINKAGE:

Index 226 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: the object to create a global weak reference for.

#### RETURNS:

Return a global weak reference to the given `obj`.

May return `NULL` if:

*   `obj` refers to `null`
*   the system has run out of memory
*   `obj` was a weak global reference and has already been garbage collected

#### THROWS:

`OutOfMemoryError` if the system runs out of memory.

#### SINCE:

JDK/JRE 1.2

### DeleteWeakGlobalRef

`void DeleteWeakGlobalRef(JNIEnv *env, jweak obj);`

Delete the VM resources needed for the given weak global reference.

#### LINKAGE:

Index 227 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: global weak reference to delete. This function does nothing if passed `NULL`.

#### SINCE:

JDK/JRE 1.2

Object Operations
-----------------

### AllocObject

`jobject AllocObject(JNIEnv *env, jclass clazz);`

Allocates a new Java object **without invoking any of the constructors for the object**. Returns a reference to the object.

**Note:** The Java Language Specification, "Implementing Finalization" ([JLS §12.6.1](http://docs.oracle.com/javase/specs/jls/se17/html/jls-12.html#jls-12.6.1)) states: "An object o is not finalizable until its constructor has invoked the constructor for Object on o and that invocation has completed successfully". Since AllocObject() does not invoke a constructor, objects created with this function are not eligible for finalization.

The clazz argument must not refer to an array class.

#### LINKAGE:

Index 27 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a reference to a Java class object, must not be `NULL`.

#### RETURNS:

Returns a Java object, or `NULL` if the object cannot be constructed.

#### THROWS:

`InstantiationException`: if the class is an interface or an abstract class.

`OutOfMemoryError`: if the system runs out of memory.

### NewObject, NewObjectA, NewObjectV

`jobject NewObject(JNIEnv *env, jclass clazz, jmethodID methodID, ...);`

`jobject NewObjectA(JNIEnv *env, jclass clazz, jmethodID methodID, const jvalue *args);`

`jobject NewObjectV(JNIEnv *env, jclass clazz, jmethodID methodID, va_list args);`

Constructs a new Java object. The method ID indicates which constructor method to invoke. This ID must be obtained by calling `GetMethodID()` with `<init>` as the method name and `void` (`V`) as the return type.

The `clazz` argument must not refer to an array class.

#### NewObject

Programmers place all arguments that are to be passed to the constructor immediately following the `methodID` argument. `NewObject()` accepts these arguments and passes them to the Java method that the programmer wishes to invoke.

#### LINKAGE:

Index 28 in the JNIEnv interface function table.

#### NewObjectA

Programmers place all arguments that are to be passed to the constructor in an `args` array of `jvalues` that immediately follows the `methodID` argument. `NewObjectA()` accepts the arguments in this array, and, in turn, passes them to the Java method that the programmer wishes to invoke.

#### LINKAGE:

Index 30 in the JNIEnv interface function table.

#### NewObjectV

Programmers place all arguments that are to be passed to the constructor in an `args` argument of type `va_list` that immediately follows the `methodID` argument. `NewObjectV()` accepts these arguments, and, in turn, passes them to the Java method that the programmer wishes to invoke.

#### LINKAGE:

Index 29 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a reference to a Java class object, must not be `NULL`.

`methodID`: the method ID of the constructor.

#### Additional Parameter for NewObject:

arguments to the constructor.

#### Additional Parameter for NewObjectA:

`args`: an array of arguments to the constructor.

#### Additional Parameter for NewObjectV:

`args`: a `va_list` of arguments to the constructor.

#### RETURNS:

Returns a Java object, or `NULL` if the object cannot be constructed.

#### THROWS:

`InstantiationException`: if the class is an interface or an abstract class.

`OutOfMemoryError`: if the system runs out of memory.

Any exceptions thrown by the constructor.

### GetObjectClass

`jclass GetObjectClass(JNIEnv *env, jobject obj);`

Returns the class of an object.

#### LINKAGE:

Index 31 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a Java object, must not be `NULL`.

#### RETURNS:

Returns a Java class object.

### GetObjectRefType

`jobjectRefType GetObjectRefType(JNIEnv* env, jobject obj);`

Returns the type of the object referred to by the `obj` argument. The argument `obj` can either be a local, global or weak global reference, or `NULL`.

#### LINKAGE:

Index 232 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a local, global or weak global reference.

#### RETURNS:

The function `GetObjectRefType` returns one of the following enumerated values defined as a `jobjectRefType`:

    JNIInvalidRefType    = 0
    JNILocalRefType      = 1
    JNIGlobalRefType     = 2
    JNIWeakGlobalRefType = 3

If the argument `obj` is a weak global reference type, the return will be `JNIWeakGlobalRefType`.

If the argument `obj` is a global reference type, the return value will be `JNIGlobalRefType`.

If the argument `obj` is a local reference type, the return will be `JNILocalRefType`.

If the `obj` argument is not a valid reference, the return value for this function will be `JNIInvalidRefType`.

An invalid reference is a reference which is not a valid handle. That is, the `obj` pointer address does not point to a location in memory which has been allocated from one of the Ref creation functions or returned from a JNI function.

As such, `NULL` would be an invalid reference and `GetObjectRefType(env,NULL)` would return `JNIInvalidRefType`.

On the other hand, a null reference, which is a reference that points to a null, would return the type of reference that the null reference was originally created as.

`GetObjectRefType` cannot be used on deleted references.

Since references are typically implemented as pointers to memory data structures that can potentially be reused by any of the reference allocation services in the VM, once deleted, it is not specified what value the `GetObjectRefType` will return.

#### SINCE:

JDK/JRE 1.6

### IsInstanceOf

`jboolean IsInstanceOf(JNIEnv *env, jobject obj, jclass clazz);`

Tests whether an object is an instance of a class.

#### LINKAGE:

Index 32 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a Java object, possibly a `NULL` value.

`clazz`: a Java class object, must not be `NULL`.

#### RETURNS:

Returns `JNI_TRUE` if `obj` can be cast to `clazz`; otherwise, returns `JNI_FALSE`. A `NULL` object can be cast to any class.

### IsSameObject

`jboolean IsSameObject(JNIEnv *env, jobject ref1, jobject ref2);`

Tests whether two references refer to the same Java object.

#### LINKAGE:

Index 24 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`ref1`: a Java object, may be `NULL`.

`ref2`: a Java object, may be `NULL`.

#### RETURNS:

Returns `JNI_TRUE` if `ref1` and `ref2` refer to the same Java object, or are both `NULL`; otherwise, returns `JNI_FALSE`.

Accessing Fields of Objects
---------------------------

### GetFieldID

`jfieldID GetFieldID(JNIEnv *env, jclass clazz, const char *name, const char *sig);`

Returns the field ID for an instance (nonstatic) field of a class. The field is specified by its name and signature. The _Get<type>Field_ and _Set<type>Field_ families of accessor functions use field IDs to retrieve object fields.

`GetFieldID()` causes an uninitialized class to be initialized.

`GetFieldID()` cannot be used to obtain the length field of an array. Use `GetArrayLength()` instead.

#### LINKAGE:

Index 94 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

`name`: the field name in a 0-terminated modified UTF-8 string, must not be `NULL`.

`sig`: the field signature in a 0-terminated modified UTF-8 string, must not be `NULL`.

#### RETURNS:

Returns a field ID, or `NULL` if the operation fails.

#### THROWS:

`NoSuchFieldError`: if the specified field cannot be found.

`ExceptionInInitializerError`: if the class initializer fails due to an exception.

`OutOfMemoryError`: if the system runs out of memory.

### Get<type>Field Routines

_NativeType_ _Get<type>Field_`(JNIEnv *env, jobject obj, jfieldID fieldID);`

This family of accessor routines returns the value of an instance (nonstatic) field of an object. The field to access is specified by a field ID obtained by calling `GetFieldID()`.

The following table describes the _Get<type>Field_ routine name and result type. You should replace _type_ in _Get<type>Field_ with the Java type of the field, or use one of the actual routine names from the table, and replace _NativeType_ with the corresponding native type for that routine.

_Get<type>Field_ Family of Accessor Routines

_Get<type>Field_ Routine Name

Native Type

`GetObjectField()`

jobject

`GetBooleanField()`

jboolean

`GetByteField()`

jbyte

`GetCharField()`

jchar

`GetShortField()`

jshort

`GetIntField()`

jint

`GetLongField()`

jlong

`GetFloatField()`

jfloat

`GetDoubleField()`

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table:

_Get<type>Field_ Family of Accessor Routines

_Get<type>Field_ Routine Name

Index

`GetObjectField()`

95

`GetBooleanField()`

96

`GetByteField()`

97

`GetCharField()`

98

`GetShortField()`

99

`GetIntField()`

100

`GetLongField()`

101

`GetFloatField()`

102

`GetDoubleField()`

103

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a Java object, must not be `NULL`.

`fieldID`: a valid field ID.

#### RETURNS:

Returns the content of the field.

### Set<type>Field Routines

`void` _Set<type>Field_`(JNIEnv *env, jobject obj, jfieldID fieldID,` _NativeType_ `value);`

This family of accessor routines sets the value of an instance (nonstatic) field of an object. The field to access is specified by a field ID obtained by calling `GetFieldID()`.

The following table describes the _Set<type>Field_ routine name and value type. You should replace _type_ in _Set<type>Field_ with the Java type of the field, or use one of the actual routine names from the table, and replace _NativeType_ with the corresponding native type for that routine.

_Set<type>Field_ Family of Accessor Routines

_Set<type>Field_ Routine

Native Type

`SetObjectField()`

jobject

`SetBooleanField()`

jboolean

`SetByteField()`

jbyte

`SetCharField()`

jchar

`SetShortField()`

jshort

`SetIntField()`

jint

`SetLongField()`

jlong

`SetFloatField()`

jfloat

`SetDoubleField()`

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table.

_Set<type>Field_ Family of Accessor Routines

_Set<type>Field_ Routine

Index

`SetObjectField()`

104

`SetBooleanField()`

105

`SetByteField()`

106

`SetCharField()`

107

`SetShortField()`

108

`SetIntField()`

109

`SetLongField()`

110

`SetFloatField()`

111

`SetDoubleField()`

112

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a Java object, must not be `NULL`.

`fieldID`: a valid field ID.

`value`: the new value of the field.* * *

Calling Instance Methods
------------------------

When calling methods from native code be mindful of whether those methods may be [caller-sensitive](design.html#calling-caller-sensitive-methods).

### GetMethodID

`jmethodID GetMethodID(JNIEnv *env, jclass clazz, const char *name, const char *sig);`

Returns the method ID for an instance (nonstatic) method of a class or interface. The method may be defined in one of the `clazz`’s supertypes and inherited by `clazz`. The method is determined by its name and signature.

`GetMethodID()` causes an uninitialized class to be initialized.

To obtain the method ID of a constructor, supply `<init>` as the method name and `void` (`V`) as the return type.

#### LINKAGE:

Index 33 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

`name`: the method name in a 0-terminated modified UTF-8 string, must not be `NULL`.

`sig`: the method signature in 0-terminated modified UTF-8 string, must not be `NULL`.

#### RETURNS:

Returns a method ID, or `NULL` if the specified method cannot be found.

#### THROWS:

`NoSuchMethodError`: if the specified method cannot be found.

`ExceptionInInitializerError`: if the class initializer fails due to an exception.

`OutOfMemoryError`: if the system runs out of memory.

### Call<type>Method Routines, Call<type>MethodA Routines, Call<type>MethodV Routines

_NativeType_ _Call<type>Method_`(JNIEnv *env, jobject obj, jmethodID methodID, ...);`

_NativeType_ _Call<type>MethodA_`(JNIEnv *env, jobject obj, jmethodID methodID, const jvalue *args);`

_NativeType_ _Call<type>MethodV_`(JNIEnv *env, jobject obj, jmethodID methodID, va_list args);`

Methods from these three families of operations are used to call a Java instance method from a native method.They only differ in their mechanism for passing parameters to the methods that they call.

These families of operations invoke an instance (nonstatic) method on a Java object, according to the specified method ID. The `methodID` argument must be obtained by calling `GetMethodID()`.

When these functions are used to call private methods and constructors, the method ID must be derived from the real class of `obj`, not from one of its superclasses.

#### Call<type>Method Routines

Programmers place all arguments that are to be passed to the method immediately following the `methodID` argument. The _Call<type>Method_ routine accepts these arguments and passes them to the Java method that the programmer wishes to invoke.

#### Call<type>MethodA Routines

Programmers place all arguments to the method in an `args` array of `jvalues` that immediately follows the `methodID` argument. The _Call<type>MethodA_ routine accepts the arguments in this array, and, in turn, passes them to the Java method that the programmer wishes to invoke.

#### Call<type>MethodV Routines

Programmers place all arguments to the method in an `args` argument of type `va_list` that immediately follows the `methodID` argument. The _Call<type>MethodV_ routine accepts the arguments, and, in turn, passes them to the Java method that the programmer wishes to invoke.

The following table describes each of the method calling routines according to their result type. You should replace _type_ in _Call<type>Method_ with the Java type of the method you are calling (or use one of the actual method calling routine names from the table) and replace _NativeType_ with the corresponding native type for that routine.

Instance Method Calling Routines  

_Call<type>Method_ Routine Name

Native Type

`CallVoidMethod()`  
`CallVoidMethodA()`  
`CallVoidMethodV()`

void

`CallObjectMethod()`  
`CallObjectMethodA()`  
`CallObjectMethodV()`

jobject

`CallBooleanMethod()`  
`CallBooleanMethodA()`  
`CallBooleanMethodV()`

jboolean

`CallByteMethod()`  
`CallByteMethodA()`  
`CallByteMethodV()`

jbyte

`CallCharMethod()`  
`CallCharMethodA()`  
`CallCharMethodV()`

jchar

`CallShortMethod()`  
`CallShortMethodA()`  
`CallShortMethodV()`

jshort

`CallIntMethod()`  
`CallIntMethodA()`  
`CallIntMethodV()`

jint

`CallLongMethod()`  
`CallLongMethodA()`  
`CallLongMethodV()`

jlong

`CallFloatMethod()`  
`CallFloatMethodA()`  
`CallFloatMethodV()`

jfloat

`CallDoubleMethod()`  
`CallDoubleMethodA()`  
`CallDoubleMethodV()`

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table:

Instance Method Calling Routines  

_Call<type>Method_ Routine Name

Index

`CallVoidMethod()`  
`CallVoidMethodA()`  
`CallVoidMethodV()`

61  
63  
62

`CallObjectMethod()`  
`CallObjectMethodA()`  
`CallObjectMethodV()`

34  
36  
35

`CallBooleanMethod()`  
`CallBooleanMethodA()`  
`CallBooleanMethodV()`

37  
39  
38

`CallByteMethod()`  
`CallByteMethodA()`  
`CallByteMethodV()`

40  
42  
41

`CallCharMethod()`  
`CallCharMethodA()`  
`CallCharMethodV()`

43  
45  
44

`CallShortMethod()`  
`CallShortMethodA()`  
`CallShortMethodV()`

46  
48  
47

`CallIntMethod()`  
`CallIntMethodA()`  
`CallIntMethodV()`

49  
51  
50

`CallLongMethod()`  
`CallLongMethodA()`  
`CallLongMethodV()`

52  
54  
53

`CallFloatMethod()`  
`CallFloatMethodA()`  
`CallFloatMethodV()`

55  
57  
56

`CallDoubleMethod()`  
`CallDoubleMethodA()`  
`CallDoubleMethodV()`

58  
60  
59

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a Java object, must not be `NULL`.

`methodID`: a valid method ID.

#### Additional Parameter for Call<type>Method Routines:

arguments to the Java method.

#### Additional Parameter for Call<type>MethodA Routines:

`args`: an array of arguments.

#### Additional Parameter for Call<type>MethodV Routines:

`args`: a `va_list` of arguments.

#### RETURNS:

Returns the result of calling the Java method.

#### THROWS:

Exceptions raised during the execution of the Java method.

### CallNonvirtual<type>Method Routines, CallNonvirtual<type>MethodA Routines, CallNonvirtual<type>MethodV Routines

_NativeType_ _CallNonvirtual<type>Method_`(JNIEnv *env, jobject obj, jclass clazz, jmethodID methodID, ...);`

_NativeType_ _CallNonvirtual<type>MethodA_`(JNIEnv *env, jobject obj, jclass clazz, jmethodID methodID, const jvalue *args);`

_NativeType_ _CallNonvirtual<type>MethodV_`(JNIEnv *env, jobject obj, jclass clazz, jmethodID methodID, va_list args);`

These families of operations invoke an instance (nonstatic) method on a Java object, according to the specified class and method ID. The `methodID` argument must be obtained by calling `GetMethodID()` on the class `clazz`.

The _CallNonvirtual<type>Method_ families of routines and the _Call<type>Method_ families of routines are different. _Call<type>Method_ routines invoke the method based on the class or interface of the object, while _CallNonvirtual<type>Method_ routines invoke the method based on the class, designated by the `clazz` parameter, from which the method ID is obtained. The method ID must be obtained from the real class of the object or from one of its supertypes.

_CallNonvirtual<type>Method_ routines are the mechanism for invoking _"default interface methods"_ introduced in Java 8.

#### CallNonvirtual<type>Method Routines

Programmers place all arguments that are to be passed to the method immediately following the `methodID` argument. The _CallNonvirtual<type>Method_ routine accepts these arguments and passes them to the Java method that the programmer wishes to invoke.

#### CallNonvirtual<type>MethodA Routines

Programmers place all arguments to the method in an `args` array of `jvalues` that immediately follows the `methodID` argument. The _CallNonvirtual<type>MethodA_ routine accepts the arguments in this array, and, in turn, passes them to the Java method that the programmer wishes to invoke.

#### CallNonvirtual<type>MethodV Routines

Programmers place all arguments to the method in an `args` argument of type `va_list` that immediately follows the `methodID` argument. The _CallNonvirtualMethodV_ routine accepts the arguments, and, in turn, passes them to the Java method that the programmer wishes to invoke.

The following table describes each of the method calling routines according to their result type. You should replace _type_ in _CallNonvirtual<type>Method_ with the Java type of the method, or use one of the actual method calling routine names from the table, and replace _NativeType_ with the corresponding native type for that routine.

_CallNonvirtual<type>Method_ Routines  

_CallNonvirtual<type>Method_ Routine Name

Native Type

`CallNonvirtualVoidMethod()`  
`CallNonvirtualVoidMethodA()`  
`CallNonvirtualVoidMethodV()`

void

`CallNonvirtualObjectMethod()`  
`CallNonvirtualObjectMethodA()`  
`CallNonvirtualObjectMethodV()`

jobject

`CallNonvirtualBooleanMethod()`  
`CallNonvirtualBooleanMethodA()`  
`CallNonvirtualBooleanMethodV()`

jboolean

`CallNonvirtualByteMethod()`  
`CallNonvirtualByteMethodA()`  
`CallNonvirtualByteMethodV()`

jbyte

`CallNonvirtualCharMethod()`  
`CallNonvirtualCharMethodA()`  
`CallNonvirtualCharMethodV()`

jchar

`CallNonvirtualShortMethod()`  
`CallNonvirtualShortMethodA()`  
`CallNonvirtualShortMethodV()`

jshort

`CallNonvirtualIntMethod()`  
`CallNonvirtualIntMethodA()`  
`CallNonvirtualIntMethodV()`

jint

`CallNonvirtualLongMethod()`  
`CallNonvirtualLongMethodA()`  
`CallNonvirtualLongMethodV()`

jlong

`CallNonvirtualFloatMethod()`  
`CallNonvirtualFloatMethodA()`  
`CallNonvirtualFloatMethodV()`

jfloat

`CallNonvirtualDoubleMethod()`  
`CallNonvirtualDoubleMethodA()`  
`CallNonvirtualDoubleMethodV()`

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table.

_CallNonvirtual<type>Method_ Routines  

_CallNonvirtual<type>Method_ Routine Name

Index

`CallNonvirtualVoidMethod()`  
`CallNonvirtualVoidMethodA()`  
`CallNonvirtualVoidMethodV()`

91  
93  
92

`CallNonvirtualObjectMethod()`  
`CallNonvirtualObjectMethodA()`  
`CallNonvirtualObjectMethodV()`

64  
66  
65

`CallNonvirtualBooleanMethod()`  
`CallNonvirtualBooleanMethodA()`  
`CallNonvirtualBooleanMethodV()`

67  
69  
68

`CallNonvirtualByteMethod()`  
`CallNonvirtualByteMethodA()`  
`CallNonvirtualByteMethodV()`

70  
72  
71

`CallNonvirtualCharMethod()`  
`CallNonvirtualCharMethodA()`  
`CallNonvirtualCharMethodV()`

73  
75  
74

`CallNonvirtualShortMethod()`  
`CallNonvirtualShortMethodA()`  
`CallNonvirtualShortMethodV()`

76  
78  
77

`CallNonvirtualIntMethod()`  
`CallNonvirtualIntMethodA()`  
`CallNonvirtualIntMethodV()`

79  
81  
80

`CallNonvirtualLongMethod()`  
`CallNonvirtualLongMethodA()`  
`CallNonvirtualLongMethodV()`

82  
84  
83

`CallNonvirtualFloatMethod()`  
`CallNonvirtualFloatMethodA()`  
`CallNonvirtualFloatMethodV()`

85  
87  
86

`CallNonvirtualDoubleMethod()`  
`CallNonvirtualDoubleMethodA()`  
`CallNonvirtualDoubleMethodV()`

88  
90  
89

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class, must not be `NULL`.

`obj`: a Java object, must not be `NULL`.

`methodID`: a method ID.

#### Additional Parameter for CallNonvirtual<type>Method Routines:

arguments to the Java method.

#### Additional Parameter for CallNonvirtual<type>MethodA Routines:

`args`: an array of arguments.

#### Additional Parameter for CallNonvirtual<type>MethodV Routines:

`args`: a `va_list` of arguments.

#### RETURNS:

Returns the result of calling the Java method.

#### THROWS:

Exceptions raised during the execution of the Java method.

Accessing Static Fields
-----------------------

### GetStaticFieldID

`jfieldID GetStaticFieldID(JNIEnv *env, jclass clazz, const char *name, const char *sig);`

Returns the field ID for a static field of a class. The field is specified by its name and signature. The _GetStatic<type>Field_ and _SetStatic<type>Field_ families of accessor functions use field IDs to retrieve static fields.

`GetStaticFieldID()` causes an uninitialized class to be initialized.

#### LINKAGE:

Index 144 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

`name`: the static field name in a 0-terminated modified UTF-8 string, must not be `NULL`.

`sig`: the field signature in a 0-terminated modified UTF-8 string, must not be `NULL`.

#### RETURNS:

Returns a field ID, or `NULL` if the specified static field cannot be found.

#### THROWS:

`NoSuchFieldError`: if the specified static field cannot be found.

`ExceptionInInitializerError`: if the class initializer fails due to an exception.

`OutOfMemoryError`: if the system runs out of memory.

### GetStatic<type>Field Routines

_NativeType_ _GetStatic<type>Field_`(JNIEnv *env, jclass clazz, jfieldID fieldID);`

This family of accessor routines returns the value of a static field of an object. The field to access is specified by a field ID, which is obtained by calling `GetStaticFieldID()`.

The following table describes the family of get routine names and result types. You should replace _type_ in _GetStatic<type>Field_ with the Java type of the field, or one of the actual static field accessor routine names from the table, and replace _NativeType_ with the corresponding native type for that routine.

_GetStatic<type>Field_ Family of Accessor Routines

_GetStatic<type>Field_ Routine Name

Native Type

`GetStaticObjectField()`

jobject

`GetStaticBooleanField()`

jboolean

`GetStaticByteField()`

jbyte

`GetStaticCharField()`

jchar

`GetStaticShortField()`

jshort

`GetStaticIntField()`

jint

`GetStaticLongField()`

jlong

`GetStaticFloatField()`

jfloat

`GetStaticDoubleField()`

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table.

_GetStatic<type>Field_ Family of Accessor Routines

_GetStatic<type>Field_ Routine Name

Index

`GetStaticObjectField()`

145

`GetStaticBooleanField()`

146

`GetStaticByteField()`

147

`GetStaticCharField()`

148

`GetStaticShortField()`

149

`GetStaticIntField()`

150

`GetStaticLongField()`

151

`GetStaticFloatField()`

152

`GetStaticDoubleField()`

153

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

`fieldID`: a valid static field ID.

#### RETURNS:

Returns the content of the static field.

### SetStatic<type>Field Routines

`void` _SetStatic<type>Field_`(JNIEnv *env, jclass clazz, jfieldID fieldID,` _NativeType_ `value);`

This family of accessor routines sets the value of a static field of an object. The field to access is specified by a field ID, which is obtained by calling `GetStaticFieldID()`.

The following table describes the set routine name and value types. You should replace _type_ in _SetStatic<type>Field_ with the Java type of the field, or one of the actual set static field routine names from the table, and replace _NativeType_ with the corresponding native type for that routine.

_SetStatic<type>Field_ Family of Accessor Routines

_SetStatic<type>Field_ Routine Name

NativeType

`SetStaticObjectField()`

jobject

`SetStaticBooleanField()`

jboolean

`SetStaticByteField()`

jbyte

`SetStaticCharField()`

jchar

`SetStaticShortField()`

jshort

`SetStaticIntField()`

jint

`SetStaticLongField()`

jlong

`SetStaticFloatField()`

jfloat

`SetStaticDoubleField()`

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table.

_SetStatic<type>Field_ Family of Accessor Routines

_SetStatic<type>Field_ Routine Name

Index

`SetStaticObjectField()`

154

`SetStaticBooleanField()`

155

`SetStaticByteField()`

156

`SetStaticCharField()`

157

`SetStaticShortField()`

158

`SetStaticIntField()`

159

`SetStaticLongField()`

160

`SetStaticFloatField()`

161

`SetStaticDoubleField()`

162

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

`fieldID`: a valid static field ID.

`value`: the new value of the field.

Calling Static Methods
----------------------

When calling methods from native code be mindful of whether those methods may be [caller-sensitive](design.html#calling-caller-sensitive-methods).

### GetStaticMethodID

`jmethodID GetStaticMethodID(JNIEnv *env, jclass clazz, const char *name, const char *sig);`

Returns the method ID for a static method of a class. The method is specified by its name and signature.

`GetStaticMethodID()` causes an uninitialized class to be initialized.

#### LINKAGE:

Index 113 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

`name`: the static method name in a 0-terminated modified UTF-8 string, must not be `NULL`.

`sig`: the method signature in a 0-terminated modified UTF-8 string, must not be `NULL`.

#### RETURNS:

Returns a method ID, or `NULL` if the operation fails.

#### THROWS:

`NoSuchMethodError`: if the specified static method cannot be found.

`ExceptionInInitializerError`: if the class initializer fails due to an exception.

`OutOfMemoryError`: if the system runs out of memory.

### CallStatic<type>Method Routines, CallStatic<type>MethodA Routines, CallStatic<type>MethodV Routines

_NativeType_ _CallStatic<type>Method_`(JNIEnv *env, jclass clazz, jmethodID methodID, ...);`

_NativeType_ _CallStatic<type>MethodA_`(JNIEnv *env, jclass clazz, jmethodID methodID, jvalue *args);`

_NativeType_ _CallStatic<type>MethodV_`(JNIEnv *env, jclass clazz, jmethodID methodID, va_list args);`

This family of operations invokes a static method on a Java object, according to the specified method ID. The `methodID` argument must be obtained by calling `GetStaticMethodID()`.

The method ID must be derived from `clazz`, not from one of its superclasses.

#### CallStatic<type>Method Routines

Programmers should place all arguments that are to be passed to the method immediately following the `methodID` argument. The _CallStatic<type>Method_ routine accepts these arguments and passes them to the Java method that the programmer wishes to invoke.

#### CallStatic<type>MethodA Routines

Programmers should place all arguments to the method in an `args` array of `jvalues` that immediately follows the `methodID` argument. The _CallStaticMethodA_ routine accepts the arguments in this array, and, in turn, passes them to the Java method that the programmer wishes to invoke.

#### CallStatic<type>MethodV Routines

Programmers should place all arguments to the method in an `args` argument of type `va_list` that immediately follows the `methodID` argument. The _CallStaticMethodV_ routine accepts the arguments, and, in turn, passes them to the Java method that the programmer wishes to invoke.

The following table describes each of the method calling routines according to their result types. You should replace _type_ in _CallStatic<type>Method_ with the Java type of the method, or one of the actual method calling routine names from the table, and replace _NativeType_ with the corresponding native type for that routine.

_CallStatic<type>Method_ Calling Routines  

_CallStatic<type>Method_ Routine Name

Native Type

`CallStaticVoidMethod()`  
`CallStaticVoidMethodA()`  
`CallStaticVoidMethodV()`

void

`CallStaticObjectMethod()`  
`CallStaticObjectMethodA()`  
`CallStaticObjectMethodV()`

jobject

`CallStaticBooleanMethod()`  
`CallStaticBooleanMethodA()`  
`CallStaticBooleanMethodV()`

jboolean

`CallStaticByteMethod()`  
`CallStaticByteMethodA()`  
`CallStaticByteMethodV()`

jbyte

`CallStaticCharMethod()`  
`CallStaticCharMethodA()`  
`CallStaticCharMethodV()`

jchar

`CallStaticShortMethod()`  
`CallStaticShortMethodA()`  
`CallStaticShortMethodV()`

jshort

`CallStaticIntMethod()`  
`CallStaticIntMethodA()`  
`CallStaticIntMethodV()`

jint

`CallStaticLongMethod()`  
`CallStaticLongMethodA()`  
`CallStaticLongMethodV()`

jlong

`CallStaticFloatMethod()`  
`CallStaticFloatMethodA()`  
`CallStaticFloatMethodV()`

jfloat

`CallStaticDoubleMethod()`  
`CallStaticDoubleMethodA()`  
`CallStaticDoubleMethodV()`

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table.

_CallStatic<type>Method_ Calling Routines  

_CallStatic<type>Method_ Routine Name

Index

`CallStaticVoidMethod()`  
`CallStaticVoidMethodA()`  
`CallStaticVoidMethodV()`

141  
143  
142

`CallStaticObjectMethod()`  
`CallStaticObjectMethodA()`  
`CallStaticObjectMethodV()`

114  
116  
115

`CallStaticBooleanMethod()`  
`CallStaticBooleanMethodA()`  
`CallStaticBooleanMethodV()`

117  
119  
118

`CallStaticByteMethod()`  
`CallStaticByteMethodA()`  
`CallStaticByteMethodV()`

120  
122  
121

`CallStaticCharMethod()`  
`CallStaticCharMethodA()`  
`CallStaticCharMethodV()`

123  
125  
124

`CallStaticShortMethod()`  
`CallStaticShortMethodA()`  
`CallStaticShortMethodV()`

126  
128  
127

`CallStaticIntMethod()`  
`CallStaticIntMethodA()`  
`CallStaticIntMethodV()`

129  
131  
130

`CallStaticLongMethod()`  
`CallStaticLongMethodA()`  
`CallStaticLongMethodV()`

132  
134  
133

`CallStaticFloatMethod()`  
`CallStaticFloatMethodA()`  
`CallStaticFloatMethodV()`

135  
137  
136

`CallStaticDoubleMethod()`  
`CallStaticDoubleMethodA()`  
`CallStaticDoubleMethodV()`

138  
140  
139

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

`methodID`: a valid static method ID.

#### Additional Parameter for CallStatic<type>Method Routines:

arguments to the static method.

#### Additional Parameter for CallStatic<type>MethodA Routines:

`args`: an array of arguments.

#### Additional Parameter for CallStatic<type>MethodV Routines:

`args`: a `va_list` of arguments.

#### RETURNS:

Returns the result of calling the static Java method.

#### THROWS:

Exceptions raised during the execution of the Java method.

String Operations
-----------------

This specification makes no assumptions on how a JVM represent Java strings internally. Strings returned from these operations:

*   `GetStringChars()`
*   `GetStringUTFChars()`
*   `GetStringRegion()`
*   `GetStringUTFRegion()`
*   `GetStringCritical()`

are therefore not required to be NULL terminated. Programmers are expected to determine buffer capacity requirements via [`GetStringLength()`](#getstringlength) or [`GetStringUTFLength()`](#getstringutflength).

### NewString

`jstring NewString(JNIEnv *env, const jchar *unicodeChars, jsize len);`

Constructs a new `java.lang.String` object from an array of Unicode characters.

#### LINKAGE:

Index 163 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`unicodeChars`: pointer to a Unicode string. May be a `NULL` value, in which case `len` must be 0.

`len`: length of the Unicode string. May be 0.

#### RETURNS:

Returns a Java string object, or `NULL` if the string cannot be constructed.

#### THROWS:

`OutOfMemoryError`: if the system runs out of memory.

### GetStringLength

`jsize GetStringLength(JNIEnv *env, jstring string);`

Returns the length (the count of Unicode characters) of a Java string.

#### LINKAGE:

Index 164 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`string`: a Java string object, must not be `NULL`.

#### RETURNS:

Returns the length of the Java string.

### GetStringChars

`const jchar * GetStringChars(JNIEnv *env, jstring string, jboolean *isCopy);`

Returns a pointer to the array of Unicode characters of the string. This pointer is valid until `ReleaseStringChars()` is called.

If `isCopy` is not `NULL`, then `*isCopy` is set to `JNI_TRUE` if a copy is made; or it is set to `JNI_FALSE` if no copy is made.

#### LINKAGE:

Index 165 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`string`: a Java string object, must not be `NULL`.

`isCopy`: a pointer to a boolean, may be a `NULL` value.

#### RETURNS:

Returns a pointer to a Unicode string, or `NULL` if the operation fails.

### ReleaseStringChars

`void ReleaseStringChars(JNIEnv *env, jstring string, const jchar *chars);`

Informs the VM that the native code no longer needs access to `chars`. The `chars` argument is a pointer obtained from `string` using `GetStringChars()`.

#### LINKAGE:

Index 166 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`string`: a Java string object, must not be `NULL`.

`chars`: a pointer to a Unicode string, as previously returned by `GetStringChars()`.

### NewStringUTF

`jstring NewStringUTF(JNIEnv *env, const char *bytes);`

Constructs a new `java.lang.String` object from an array of characters in modified UTF-8 encoding.

#### LINKAGE:

Index 167 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`bytes`: the pointer to a modified UTF-8 string, must not be `NULL`.

#### RETURNS:

Returns a Java string object, or `NULL` if the string cannot be constructed.

#### THROWS:

`OutOfMemoryError`: if the system runs out of memory.

### GetStringUTFLength

`jsize GetStringUTFLength(JNIEnv *env, jstring string);`

Returns the length in bytes of the modified UTF-8 representation of a string.

#### LINKAGE:

Index 168 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`string`: a Java string object, must not be `NULL`.

#### RETURNS:

Returns the UTF-8 length of the string.

### GetStringUTFChars

`const char * GetStringUTFChars(JNIEnv *env, jstring string, jboolean *isCopy);`

Returns a pointer to an array of bytes representing the string in modified UTF-8 encoding. This array is valid until it is released by `ReleaseStringUTFChars()`.

If `isCopy` is not `NULL`, then `*isCopy` is set to `JNI_TRUE` if a copy is made; or it is set to `JNI_FALSE` if no copy is made.

#### LINKAGE:

Index 169 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`string`: a Java string object, must not be `NULL`.

`isCopy`: a pointer to a boolean, may be a `NULL` value.

#### RETURNS:

Returns a pointer to a modified UTF-8 string, or `NULL` if the operation fails.

### ReleaseStringUTFChars

`void ReleaseStringUTFChars(JNIEnv *env, jstring string, const char *utf);`

Informs the VM that the native code no longer needs access to `utf`. The `utf` argument is a pointer derived from `string` using `GetStringUTFChars()`.

#### LINKAGE:

Index 170 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`string`: a Java string object, must not be `NULL`.

`utf`: a pointer to a modified UTF-8 string, previously returned by `GetStringUTFChars()`.

**Note**: In JDK/JRE 1.1, programmers can get primitive array elements in a user-supplied buffer. As of JDK/JRE 1.2 additional set of functions are provided allowing native code to obtain characters in Unicode (UTF-16) or modified UTF-8 encoding in a user-supplied buffer. See the functions below.

### GetStringRegion

`void GetStringRegion(JNIEnv *env, jstring str, jsize start, jsize len, jchar *buf);`

Copies `len` number of Unicode characters beginning at offset `start` to the given buffer `buf`.

#### LINKAGE:

Index 220 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`str`: a Java string object, must not be `NULL`.

`start`: the index of the first unicode character in the string to copy. Must be greater than or equal to zero, and less than string length ("`GetStringLength()`").

`len`: the number of unicode characters to copy. Must be greater than or equal to zero, and "`start + len`" must be less than string length ("`GetStringLength()`").

`buf`: the unicode character buffer into which to copy the string region. Must not be `NULL` if given `len` is > 0.

#### THROWS:

`StringIndexOutOfBoundsException`: on index overflow.

#### SINCE:

JDK/JRE 1.2

### GetStringUTFRegion

`void GetStringUTFRegion(JNIEnv *env, jstring str, jsize start, jsize len, char *buf);`

Translates `len` number of Unicode characters beginning at offset `start` into modified UTF-8 encoding and place the result in the given buffer `buf`.

The `len` argument specifies the number of _unicode characters_. The resulting number modified UTF-8 encoding characters may be greater than the given `len` argument. `GetStringUTFLength()` may be used to determine the maximum size of the required character buffer.

Since this specification does not require the resulting string copy be NULL terminated, it is advisable to clear the given character buffer (e.g. "`memset()`") before using this function, in order to safely perform `strlen()`.

#### LINKAGE:

Index 221 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`str`: a Java string object, must not be `NULL`.

`start`: the index of the first unicode character in the string to copy. Must be greater than or equal to zero, and less than the string length.

`len`: the number of unicode characters to copy. Must be greater than zero, and "`start + len`" must be less than string length ("`GetStringLength()`").

`buf`: the unicode character buffer into which to copy the string region. Must not be `NULL` if given `len` is > 0.

#### THROWS:

`StringIndexOutOfBoundsException`: on index overflow.

#### SINCE:

JDK/JRE 1.2

### GetStringCritical, ReleaseStringCritical

`const jchar * GetStringCritical(JNIEnv *env, jstring string, jboolean *isCopy);`

`void ReleaseStringCritical(JNIEnv *env, jstring string, const jchar *carray);`

The semantics of these two functions are similar to the existing `Get/ReleaseStringChars` functions. If possible, the VM returns a pointer to string elements; otherwise, a copy is made. **However, there are significant restrictions on how these functions can be used.** In a code segment enclosed by `Get/ReleaseStringCritical` calls, the native code must not issue arbitrary JNI calls, or cause the current thread to block.

The restrictions on `Get/ReleaseStringCritical` are similar to those on `Get/ReleasePrimitiveArrayCritical`.

#### LINKAGE (GetStringCritical):

Index 224 in the JNIEnv interface function table.

#### LINKAGE (ReleaseStingCritical):

Index 225 in the JNIEnv interface function table.

#### SEE ALSO:

[GetStringChars](#getstringchars)

[ReleaseStringChars](#releasestringchars)

#### SINCE:

JDK/JRE 1.2

Array Operations
----------------

### GetArrayLength

`jsize GetArrayLength(JNIEnv *env, jarray array);`

Returns the number of elements in the array.

#### LINKAGE:

Index 171 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`array`: a Java array object, must not be `NULL`.

#### RETURNS:

Returns the length of the array.

### NewObjectArray

`jobjectArray NewObjectArray(JNIEnv *env, jsize length, jclass elementClass, jobject initialElement);`

Constructs a new array holding objects in class `elementClass`. All elements are initially set to `initialElement`.

#### LINKAGE:

Index 172 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`length`: array size, must be >= 0.

`elementClass`: array element class, must not be `NULL`.

`initialElement`: initialization value, may be a `NULL` value.

#### RETURNS:

Returns a Java array object, or `NULL` if the array cannot be constructed.

#### THROWS:

`OutOfMemoryError`: if the system runs out of memory.

### GetObjectArrayElement

`jobject GetObjectArrayElement(JNIEnv *env, jobjectArray array, jsize index);`

Returns an element of an `Object` array.

#### LINKAGE:

Index 173 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`array`: a Java array, must not be `NULL`.

`index`: array index, must be >= 0 and less than array length ("`GetArrayLength()`").

#### RETURNS:

Returns a Java object.

#### THROWS:

`ArrayIndexOutOfBoundsException`: if `index` does not specify a valid index in the array.

### SetObjectArrayElement

`void SetObjectArrayElement(JNIEnv *env, jobjectArray array, jsize index, jobject value);`

Sets an element of an `Object` array.

#### LINKAGE:

Index 174 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`array`: a Java array, must not be `NULL`.

`index`: array index, must be >= 0 and less than array length ("`GetArrayLength()`").

`value`: the new value, may be a `NULL` value.

#### THROWS:

`ArrayIndexOutOfBoundsException`: if `index` does not specify a valid index in the array.

`ArrayStoreException`: if the class of `value` is not a subclass of the element class of the array.

### New<PrimitiveType>Array Routines

_ArrayType_ _New<PrimitiveType>Array_`(JNIEnv *env, jsize length);`

A family of operations used to construct a new primitive array object. The following table describes the specific primitive array constructors. You should replace _New<PrimitiveType>Array_ with one of the actual primitive array constructor routine names from this table, and replace ArrayType with the corresponding array type for that routine.

_New<PrimitiveType>Array_ Family of Array Constructors

_New<PrimitiveType>Array_ Routines

Array Type

`NewBooleanArray()`

jbooleanArray

`NewByteArray()`

jbyteArray

`NewCharArray()`

jcharArray

`NewShortArray()`

jshortArray

`NewIntArray()`

jintArray

`NewLongArray()`

jlongArray

`NewFloatArray()`

jfloatArray

`NewDoubleArray()`

jdoubleArray

#### LINKAGE:

Indices in the JNIEnv interface function table.

_New<PrimitiveType>Array_ Family of Array Constructors

_New<PrimitiveType>Array_ Routines

Index

`NewBooleanArray()`

175

`NewByteArray()`

176

`NewCharArray()`

177

`NewShortArray()`

178

`NewIntArray()`

179

`NewLongArray()`

180

`NewFloatArray()`

181

`NewDoubleArray()`

182

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`length`: the array length, must be >= 0.

#### RETURNS:

Returns a Java array, or `NULL` if the array cannot be constructed.

#### THROWS:

`OutOfMemoryError`: if the system runs out of memory.

### Get<PrimitiveType>ArrayElements Routines

_NativeType_ `*`_Get<PrimitiveType>ArrayElements_`(JNIEnv *env,` _ArrayType_ `array, jboolean *isCopy);`

A family of functions that returns the body of the primitive array. The result is valid until the corresponding _Release<PrimitiveType>ArrayElements()_ function is called. **Since the returned array may be a copy of the Java array, changes made to the returned array will not necessarily be reflected in the original array until _Release<PrimitiveType>ArrayElements()_ is called.**

If `isCopy` is not `NULL`, then `*isCopy` is set to `JNI_TRUE` if a copy is made; or it is set to `JNI_FALSE` if no copy is made.

The following table describes the specific primitive array element accessors. You should make the following substitutions:

*   Replace _Get<PrimitiveType>ArrayElements_ with one of the actual primitive element accessor routine names from the following table.
*   Replace _ArrayType_ with the corresponding array type.
*   Replace _NativeType_ with the corresponding native type for that routine.

Regardless of how boolean arrays are represented in the Java VM, `GetBooleanArrayElements()` always returns a pointer to `jbooleans`, with each byte denoting an element (the unpacked representation). All arrays of other types are guaranteed to be contiguous in memory.

_Get<PrimitiveType>ArrayElements_ Family of Accessor Routines

_Get<PrimitiveType>ArrayElements_ Routines

Array Type

Native Type

`GetBooleanArrayElements()`

jbooleanArray

jboolean

`GetByteArrayElements()`

jbyteArray

jbyte

`GetCharArrayElements()`

jcharArray

jchar

`GetShortArrayElements()`

jshortArray

jshorte>GetIntArrayElements() jintArray jint `GetLongArrayElements()` jlongArray jlong `GetFloatArrayElements()` jfloatArray jfloat `GetDoubleArrayElements()` jdoubleArray jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table.

_Get<PrimitiveType>ArrayElements_ Family of Accessor Routines

_Get<PrimitiveType>ArrayElements_ Routines

Index

`GetBooleanArrayElements()`

183

`GetByteArrayElements()`

184

`GetCharArrayElements()`

185

`GetShortArrayElements()`

186

`GetIntArrayElements()`

187

`GetLongArrayElements()`

188

`GetFloatArrayElements()`

189

`GetDoubleArrayElements()`

190

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`array`: a Java array object, must not be `NULL`.

`isCopy`: a pointer to a boolean, may be a `NULL` value.

#### RETURNS:

Returns a pointer to the array elements, or `NULL` if the operation fails.

#### THROWS:

`OutOfMemoryError`: if the system runs out of memory.

### Release<PrimitiveType>ArrayElements Routines

`void` _Release<PrimitiveType>ArrayElements_`(JNIEnv *env,` _ArrayType_ `array,` _NativeType_ `*elems, jint mode);`

A family of functions that informs the VM that the native code no longer needs access to `elems`. The `elems` argument is a pointer derived from `array` using the corresponding _Get<PrimitiveType>ArrayElements()_ function. If necessary, this function copies back all changes made to `elems` to the original array.

The `mode` argument provides information on how the array buffer should be released. `mode` has no effect if `elems` is not a copy of the elements in `array`. Otherwise, `mode` has the following impact, as shown in the following table:

Primitive Array Release Modes

mode

actions

`0`

copy back the content and free the `elems` buffer

`JNI_COMMIT`

copy back the content but do not free the `elems` buffer

`JNI_ABORT`

free the buffer without copying back the possible changes

In most cases, programmers pass "0" as the `mode` argument to ensure consistent behavior for both pinned and copied arrays. The other options give the programmer more control over memory management and should be used with extreme care. If `JNI_COMMIT` is passed as the `mode` argument when `elems` is a copy of the elements in `array`, then a final call to _Release<PrimitiveType>ArrayElements_ passing a `mode` argument of "0" or `JNI_ABORT`, should be made to free the `elems` buffer.

The next table describes the specific routines that comprise the family of primitive array disposers. You should make the following substitutions:

*   Replace _Release<PrimitiveType>ArrayElements_ with one of the actual primitive array disposer routine names from the following table.
*   Replace _ArrayType_ with the corresponding array type.
*   Replace _NativeType_ with the corresponding native type for that routine.

_Release<PrimitiveType>ArrayElements_ Family of Array Routines

_Release<PrimitiveType>ArrayElements_ Routines

Array Type

Native Type

`ReleaseBooleanArrayElements()`

jbooleanArray

jboolean

`ReleaseByteArrayElements()`

jbyteArray

jbyte

`ReleaseCharArrayElements()`

jcharArray

jchar

`ReleaseShortArrayElements()`

jshortArray

jshort

`ReleaseIntArrayElements()`

jintArray

jint

`ReleaseLongArrayElements()`

jlongArray

jlong

`ReleaseFloatArrayElements()`

jfloatArray

jfloat

`ReleaseDoubleArrayElements()`

jdoubleArray

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table.

_Release<PrimitiveType>ArrayElements_ Family of Array Routines

_Release<PrimitiveType>ArrayElements_ Routines

Index

`ReleaseBooleanArrayElements()`

191

`ReleaseByteArrayElements()`

192

`ReleaseCharArrayElements()`

193

`ReleaseShortArrayElements()`

194

`ReleaseIntArrayElements()`

195

`ReleaseLongArrayElements()`

196

`ReleaseFloatArrayElements()`

197

`ReleaseDoubleArrayElements()`

198

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`array`: a Java array object, must not be `NULL`.

`elems`: a pointer to array elements, as returned by previous _Get<PrimitiveType>ArrayElements_ call.

`mode`: the release mode: `0`, `JNI_COMMIT` or `JNI_ABORT`.

### Get<PrimitiveType>ArrayRegion Routines

`void` _Get<PrimitiveType>ArrayRegion_`(JNIEnv *env,` _ArrayType_ `array, jsize start, jsize len,` _NativeType_ `*buf);`

A family of functions that copies a region of a primitive array into a buffer.

The following table describes the specific primitive array element accessors. You should do the following substitutions:

*   Replace _Get<PrimitiveType>ArrayRegion_ with one of the actual primitive element accessor routine names from the following table.
*   Replace _ArrayType_ with the corresponding array type.
*   Replace _NativeType_ with the corresponding native type for that routine.

_Get<PrimitiveType>ArrayRegion_ Family of Array Accessor Routines

_Get<PrimitiveType>ArrayRegion_ Routine

Array Type

Native Type

`GetBooleanArrayRegion()`

jbooleanArray

jboolean

`GetByteArrayRegion()`

jbyteArray

jbyte

`GetCharArrayRegion()`

jcharArray

jchar

`GetShortArrayRegion()`

jshortArray

jhort

`GetIntArrayRegion()`

jintArray

jint

`GetLongArrayRegion()`

jlongArray

jlong

`GetFloatArrayRegion()`

jfloatArray

jloat

`GetDoubleArrayRegion()`

jdoubleArray

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table.

_Get<PrimitiveType>ArrayRegion_ Family of Array Accessor Routines

_Get<PrimitiveType>ArrayRegion_ Routine

Index

`GetBooleanArrayRegion()`

199

`GetByteArrayRegion()`

200

`GetCharArrayRegion()`

201

`GetShortArrayRegion()`

202

`GetIntArrayRegion()`

203

`GetLongArrayRegion()`

204

`GetFloatArrayRegion()`

205

`GetDoubleArrayRegion()`

206

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`array`: a Java array, must not be `NULL`.

`start`: the starting index, must be greater than or equal to zero, and less than the array length (`GetArrayLength()`).

`len`: the number of elements to be copied, must be greater than or equal to zero, and "`start + len`" must be less than array length ("`GetArrayLength()`").

`buf`: the destination buffer, must not be `NULL`.

#### THROWS:

`ArrayIndexOutOfBoundsException`: if one of the indexes in the region is not valid.

### Set<PrimitiveType>ArrayRegion Routines

`void` _Set<PrimitiveType>ArrayRegion_`(JNIEnv *env,` _ArrayType_ `array, jsize start, jsize len, const` _NativeType_ `*buf);`

A family of functions that copies back a region of a primitive array from a buffer.

The following table describes the specific primitive array element accessors. You should make the following replacements:

*   Replace _Set<PrimitiveType>ArrayRegion_ with one of the actual primitive element accessor routine names from the following table.
*   Replace _ArrayType_ with the corresponding array type.
*   Replace _NativeType_ with the corresponding native type for that routine.

_Set<PrimitiveType>ArrayRegion_ Family of Array Accessor Routines

_Set<PrimitiveType>ArrayRegion_ Routine

Array Type

Native Type

`SetBooleanArrayRegion()`

jbooleanArray

jboolean

`SetByteArrayRegion()`

jbyteArray

jbyte

`SetCharArrayRegion()`

jcharArray

jchar

`SetShortArrayRegion()`

jshortArray

jshort

`SetIntArrayRegion()`

jintArray

jint

`SetLongArrayRegion()`

jlongArray

jlong

`SetFloatArrayRegion()`

jfloatArray

jfloat

`SetDoubleArrayRegion()`

jdoubleArray

jdouble

#### LINKAGE:

Indices in the JNIEnv interface function table.

_Set<PrimitiveType>ArrayRegion_ Family of Array Accessor Routines

_Set<PrimitiveType>ArrayRegion_ Routine

Index

`SetBooleanArrayRegion()`

207

`SetByteArrayRegion()`

208

`SetCharArrayRegion()`

209

`SetShortArrayRegion()`

210

`SetIntArrayRegion()`

211

`SetLongArrayRegion()`

212

`SetFloatArrayRegion()`

213

`SetDoubleArrayRegion()`

214

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`array`: a Java array, must not be `NULL`.

`start`: the starting index, must be greater than or equal to zero, and less than the array length (`GetArrayLength()`).

`len`: the number of elements to be copied, must be greater than or equal to zero, and "`start + len`" must be less than array length ("`GetArrayLength()`").

`buf`: the source buffer, must not be `NULL`.

#### THROWS:

`ArrayIndexOutOfBoundsException`: if one of the indexes in the region is not valid.

**Note**: Programmers can use _Get/Release<primitivetype>ArrayElements_ functions to obtain a pointer to primitive array elements. If the VM supports pinning, the pointer to the original data is returned; otherwise, a copy is made. The _Get/Release<primitivetype>ArrayCritical_ functions allow native code to obtain a direct pointer to array elements even if the VM does not support pinning.

### GetPrimitiveArrayCritical, ReleasePrimitiveArrayCritical

`void * GetPrimitiveArrayCritical(JNIEnv *env, jarray array, jboolean *isCopy);`

`void ReleasePrimitiveArrayCritical(JNIEnv *env, jarray array, void *carray, jint mode);`

The semantics of these two functions are very similar to the existing _Get/Release<primitivetype>ArrayElements_ functions. If possible, the VM returns a pointer to the primitive array; otherwise, a copy is made. **However, there are significant restrictions on how these functions can be used.**

After calling `GetPrimitiveArrayCritical`, the native code should not run for an extended period of time before it calls `ReleasePrimitiveArrayCritical`. We must treat the code inside this pair of functions as running in a "critical region." Inside a critical region, native code must not call other JNI functions, or any system call that may cause the current thread to block and wait for another Java thread. (For example, the current thread must not call `read` on a stream being written by another Java thread.)

**These restrictions make it more likely that the native code will obtain an uncopied version of the array, even if the VM does not support pinning.** For example, a VM may temporarily disable garbage collection when the native code is holding a pointer to an array obtained via `GetPrimitiveArrayCritical`.

Multiple pairs of `GetPrimtiveArrayCritical` and `ReleasePrimitiveArrayCritical` may be nested. For example:

      jint len = (*env)->GetArrayLength(env, arr1);
      jbyte *a1 = (*env)->GetPrimitiveArrayCritical(env, arr1, 0);
      jbyte *a2 = (*env)->GetPrimitiveArrayCritical(env, arr2, 0);
      /* We need to check in case the VM tried to make a copy. */
      if (a1 == NULL || a2 == NULL) {
        ... /* out of memory exception thrown */
      }
      memcpy(a1, a2, len);
      (*env)->ReleasePrimitiveArrayCritical(env, arr2, a2, 0);
      (*env)->ReleasePrimitiveArrayCritical(env, arr1, a1, 0);

Note that `GetPrimitiveArrayCritical` might still make a copy of the array if the VM internally represents arrays in a different format. Therefore we need to check its return value against `NULL` for possible out of memory situations.

#### GetPrimitiveArrayCritical

#### LINKAGE:

Linkage Index 222 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`array`: a Java array, must not be `NULL`.

`isCopy`: a pointer to a boolean, may be a `NULL` value.

#### RETURNS:

Returns a pointer to the array elements, or NULL if the operation fails.

#### THROWS:

`OutOfMemoryError`: if the system runs out of memory.

#### SINCE:

JDK/JRE 1.2

#### ReleasePrimitiveArrayCritical

#### LINKAGE:

Linkage Index 223 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`array`: a Java array, must not be `NULL`.

`carray`: critical array pointer as returned by `GetPrimitiveArrayCritical`.

`mode`: the release mode (see [Primitive Array Release Modes](#ReleaseMode)): `0`, `JNI_COMMIT` or `JNI_ABORT`. Ignored if `carray` was a not copy.

#### SINCE:

JDK/JRE 1.2

Registering Native Methods
--------------------------

### RegisterNatives

`jint RegisterNatives(JNIEnv *env, jclass clazz, const JNINativeMethod *methods, jint nMethods);`

Registers native methods with the class specified by the `clazz` argument. The `methods` parameter specifies an array of `JNINativeMethod` structures that contain the names, signatures, and function pointers of the native methods. The `name` and `signature` fields of the JNINativeMethod structure are pointers to modified UTF-8 strings. The `nMethods` parameter specifies the number of native methods in the array. The `JNINativeMethod` structure is defined as follows:

    typedef struct {
        char *name;
        char *signature;
        void *fnPtr;
    } JNINativeMethod;

The function pointers nominally must have the following signature:

    ReturnType (*fnPtr)(JNIEnv *env, jobject objectOrClass, ...);

Be aware that `RegisterNatives` can change the documented behavior of the JVM (including cryptographic algorithms, correctness, security, type safety), by changing the native code to be executed for a given native Java method. Therefore use applications that have native libraries utilizing the `RegisterNatives` function with caution.

#### LINKAGE:

Index 215 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

`methods`: the native methods in the class, must not be `NULL`.

`nMethods`: the number of native methods in the class, must be greater than zero.

#### RETURNS:

Returns "0" on success; returns a negative value on failure.

#### THROWS:

`NoSuchMethodError`: if a specified method cannot be found or if the method is not native.

### UnregisterNatives

`jint UnregisterNatives(JNIEnv *env, jclass clazz);`

Unregisters native methods of a class. The class goes back to the state before it was linked or registered with its native method functions.

This function should not be used in normal native code. Instead, it provides special programs a way to reload and relink native libraries.

#### LINKAGE:

Index 216 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`clazz`: a Java class object, must not be `NULL`.

#### RETURNS:

Returns "0" on success; returns a negative value on failure.

Monitor Operations
------------------

### MonitorEnter

`jint MonitorEnter(JNIEnv *env, jobject obj);`

Enters the monitor associated with the underlying Java object referred to by `obj`.

Enters the monitor associated with the object referred to by obj. The `obj` reference must not be `NULL`.

Each Java object has a monitor associated with it. If the current thread already owns the monitor associated with `obj`, it increments a counter in the monitor indicating the number of times this thread has entered the monitor. If the monitor associated with `obj` is not owned by any thread, the current thread becomes the owner of the monitor, setting the entry count of this monitor to 1. If another thread already owns the monitor associated with `obj`, the current thread waits until the monitor is released, then tries again to gain ownership.

A monitor entered through a `MonitorEnter` JNI function call cannot be exited using the `monitorexit` Java virtual machine instruction or a synchronized method return. A `MonitorEnter` JNI function call and a `monitorenter` Java virtual machine instruction may race to enter the monitor associated with the same object.

To avoid deadlocks, a monitor entered through a `MonitorEnter` JNI function call must be exited using the `MonitorExit` JNI call, unless the `DetachCurrentThread` call is used to implicitly release JNI monitors.

#### LINKAGE:

Index 217 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a normal Java object or class object, must not be `NULL`.

#### RETURNS:

Returns "0" on success; returns a negative value on failure.

### MonitorExit

`jint MonitorExit(JNIEnv *env, jobject obj);`

The current thread must be the owner of the monitor associated with the underlying Java object referred to by `obj`. The thread decrements the counter indicating the number of times it has entered this monitor. If the value of the counter becomes zero, the current thread releases the monitor.

Native code must not use `MonitorExit` to exit a monitor entered through a synchronized method or a `monitorenter` Java virtual machine instruction.

#### LINKAGE:

Index 218 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`obj`: a normal Java object or class object, must not be `NULL`.

#### RETURNS:

Returns "0" on success; returns a negative value on failure.

#### THROWS:

`IllegalMonitorStateException`: if the current thread does not own the monitor.

NIO Support
-----------

The NIO-related entry points allow native code to access `java.nio` _direct buffers_. The contents of a direct buffer can, potentially, reside in native memory outside of the ordinary garbage-collected heap. For information about direct buffers, please see [buffers in the NIO package](../../api/java.base/java/nio/package-summary.html#buffers) and the specification of the [`java.nio.ByteBuffer`](../../api/java.base/java/nio/ByteBuffer.html) class.

Three functions allow JNI code to create, examine, and manipulate direct buffers:

*   [`NewDirectByteBuffer`](#newdirectbytebuffer)
*   [`GetDirectBufferAddress`](#getdirectbufferaddress)
*   [`GetDirectBufferCapacity`](#getdirectbuffercapacity)

Every implementation of the Java virtual machine must support these functions, but not every implementation is required to support JNI access to direct buffers. If a JVM does not support such access then the `NewDirectByteBuffer` and `GetDirectBufferAddress` functions must always return `NULL`, and the `GetDirectBufferCapacity` function must always return `-1`. If a JVM _does_ support such access then these three functions must be implemented to return the appropriate values.

### NewDirectByteBuffer

`jobject NewDirectByteBuffer(JNIEnv* env, void* address, jlong capacity);`

Allocates and returns a direct `java.nio.ByteBuffer` referring to the block of memory starting at the memory address `address` and extending `capacity` bytes. The byte order of the returned buffer is always big-endian (high byte first; `java.nio.ByteOrder.BIG_ENDIAN`).

Native code that calls this function and returns the resulting byte-buffer object to Java-level code should ensure that the buffer refers to a valid region of memory that is accessible for reading and, if appropriate, writing. An attempt to access an invalid memory location from Java code will either return an arbitrary value, have no visible effect, or cause an unspecified exception to be thrown.

#### LINKAGE:

Index 229 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`address`: the starting address of the memory region, must not be `NULL`.

`capacity`: the size in bytes of the memory region, must be positive.

#### RETURNS:

Returns a local reference to the newly-instantiated `java.nio.ByteBuffer` object. Returns `NULL` if an exception occurs, or if JNI access to direct buffers is not supported by this virtual machine.

#### THROWS:

`OutOfMemoryError`: if allocation of the `ByteBuffer` object fails

#### SINCE:

JDK/JRE 1.4

### GetDirectBufferAddress

`void* GetDirectBufferAddress(JNIEnv* env, jobject buf);`

Fetches and returns the starting address of the memory region referenced by the given direct `java.nio.Buffer`.

This function allows native code to access the same memory region that is accessible to Java code via the buffer object.

#### LINKAGE:

Index 230 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`buf`: a direct `java.nio.Buffer` object, must not be `NULL`.

#### RETURNS:

Returns the starting address of the memory region referenced by the buffer. Returns `NULL` if the memory region is undefined, if the given object is not a direct `java.nio.Buffer`, or if JNI access to direct buffers is not supported by this virtual machine.

#### SINCE:

JDK/JRE 1.4

### GetDirectBufferCapacity

`jlong GetDirectBufferCapacity(JNIEnv* env, jobject buf);`

Fetches and returns the capacity of the memory region referenced by the given direct `java.nio.Buffer`. The capacity is the number of _elements_ that the memory region contains.

#### LINKAGE:

Index 231 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`buf`: a direct `java.nio.Buffer` object, must not be `NULL`.

#### RETURNS:

Returns the capacity of the memory region associated with the buffer. Returns `-1` if the given object is not a direct `java.nio.Buffer`, if the object is an unaligned view buffer and the processor architecture does not support unaligned access, or if JNI access to direct buffers is not supported by this virtual machine.

#### SINCE:

JDK/JRE 1.4

Reflection Support
------------------

Programmers can use the JNI to call Java methods or access Java fields if they know the name and type of the methods or fields. The Java Core Reflection API allows programmers to introspect Java classes at runtime. JNI provides a set of conversion functions between field and method IDs used in the JNI to field and method objects used in the Java Core Reflection API.

### FromReflectedMethod

`jmethodID FromReflectedMethod(JNIEnv *env, jobject method);`

Converts a `java.lang.reflect.Method` or `java.lang.reflect.Constructor` object to a method ID.

#### LINKAGE:

Index 7 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`method`: a `java.lang.reflect.Method` or `java.lang.reflect.Constructor` object, must not be `NULL`.

#### RETURNS:

A JNI method ID that corresponds to the given Java reflection method, or NULL if the operation fails.

#### SINCE:

JDK/JRE 1.2

### FromReflectedField

`jfieldID FromReflectedField(JNIEnv *env, jobject field);`

Converts a `java.lang.reflect.Field` to a field ID.

#### LINKAGE:

Index 8 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`field`: a `java.lang.reflect.Field` object, must not be `NULL`.

#### RETURNS:

A JNI field ID that corresponds to the given Java reflection `field`, or `NULL` if the operation fails.

#### SINCE:

JDK/JRE 1.2

### ToReflectedMethod

`jobject ToReflectedMethod(JNIEnv *env, jclass cls, jmethodID methodID, jboolean isStatic);`

Converts a method ID derived from `cls` to a `java.lang.reflect.Method` or `java.lang.reflect.Constructor` object. `isStatic` must be set to `JNI_TRUE` if the method ID refers to a static field, and `JNI_FALSE` otherwise.

Throws `OutOfMemoryError` and returns 0 if fails.

#### LINKAGE:

Index 9 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`cls`: a Java class object, must not be `NULL`.

`methodID`: a method ID, must not be `NULL`.

`isStatic`: denotes whether the given `methodID` is a static method.

#### RETURNS:

Returns an instance of the `java.lang.reflect.Method` or `java.lang.reflect.Constructor` which corresponds to the given `methodID`, or `NULL` if the operation fails.

#### SINCE:

JDK/JRE 1.2

### ToReflectedField

`jobject ToReflectedField(JNIEnv *env, jclass cls, jfieldID fieldID, jboolean isStatic);`

Converts a field ID derived from `cls` to a `java.lang.reflect.Field` object. `isStatic` must be set to `JNI_TRUE` if `fieldID` refers to a static field, and `JNI_FALSE` otherwise.

Throws `OutOfMemoryError` and returns 0 if fails.

#### LINKAGE:

Index 12 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`cls`: a Java class object, must not be `NULL`.

`fieldID`: a field ID, must not be `NULL`.

`isStatic`: denotes whether the given `fieldID` is a static field.

#### RETURNS:

Returns an instance of the `java.lang.reflect.Field` which corresponds to the given `fieldID`, or `NULL` if the operation fails.

#### SINCE:

JDK/JRE 1.2

Java VM Interface
-----------------

### GetJavaVM

`jint GetJavaVM(JNIEnv *env, JavaVM **vm);`

Returns the Java VM interface (used in the Invocation API) associated with the current thread. The result is placed at the location pointed to by the second argument, `vm`.

#### LINKAGE:

Index 219 in the JNIEnv interface function table.

#### PARAMETERS:

`env`: the JNI interface pointer, must not be `NULL`.

`vm`: a pointer to where the result should be placed, must not be `NULL`.

#### RETURNS:

Returns "0" on success; returns a negative value on failure.



Chapter 5: The Invocation API
=============================

The Invocation API allows software vendors to load the Java VM into an arbitrary native application. Vendors can deliver Java-enabled applications without having to link with the Java VM source code.

This chapter begins with an overview of the Invocation API. This is followed by reference pages for all Invocation API functions. It covers the following topics:

*   [Overview](#overview)
    *   [Creating the VM](#creating-the-vm)
    *   [Attaching to the VM](#attaching-to-the-vm)
    *   [Detaching from the VM](#detaching-from-the-vm)
    *   [Unloading the VM](#unloading-the-vm)
*   [Library and Version Management](#library-and-version-management)
    *   [Support for Statically Linked Libraries](#support-for-statically-linked-libraries)
    *   [Library Lifecycle Function Hooks](#library-lifecycle-function-hooks)
    *   [JNI_OnLoad](#jni_onload)
    *   [JNI_OnUnload](#jni_onunload)
    *   [JNI_OnLoad_L](#jni_onload_l)
    *   [JNI_OnUnload_L](#jni_onunload_l)
*   [Invocation API Functions](#invocation-api-functions)
    *   [JNI_GetDefaultJavaVMInitArgs](#jni_getdefaultjavavminitargs)
    *   [JNI_GetCreatedJavaVMs](#jni_getcreatedjavavms)
    *   [JNI_CreateJavaVM](#jni_createjavavm)
    *   [DestroyJavaVM](#destroyjavavm)
    *   [AttachCurrentThread](#attachcurrentthread)
    *   [AttachCurrentThreadAsDaemon](#attachcurrentthreadasdaemon)
    *   [DetachCurrentThread](#detachcurrentthread)
    *   [GetEnv](#getenv)

Overview
--------

The following code example illustrates how to use functions in the Invocation API. In this example, the C++ code creates a Java VM and invokes a static method, called `Main.test`. For clarity, we omit error checking.

    #include <jni.h>       /* where everything is defined */
    ...
    JavaVM *jvm;       /* denotes a Java VM */
    JNIEnv *env;       /* pointer to native method interface */
    JavaVMInitArgs vm_args; /* JDK/JRE 10 VM initialization arguments */
    JavaVMOption* options = new JavaVMOption[1];
    options[0].optionString = "-Djava.class.path=/usr/lib/java";
    vm_args.version = JNI_VERSION_10;
    vm_args.nOptions = 1;
    vm_args.options = options;
    vm_args.ignoreUnrecognized = false;
    /* load and initialize a Java VM, return a JNI interface
     * pointer in env */
    JNI_CreateJavaVM(&jvm, (void**)&env, &vm_args);
    delete options;
    /* invoke the Main.test method using the JNI */
    jclass cls = env->FindClass("Main");
    jmethodID mid = env->GetStaticMethodID(cls, "test", "(I)V");
    env->CallStaticVoidMethod(cls, mid, 100);
    /* We are done. */
    jvm->DestroyJavaVM();

This example uses three functions in the API. The Invocation API allows a native application to use the JNI interface pointer to access VM features. The design is similar to Netscape’s JRI Embedding Interface.

### Creating the VM

The `JNI_CreateJavaVM()` function loads and initializes a Java VM and returns a pointer to the JNI interface pointer. The thread that called `JNI_CreateJavaVM()` is considered to be the _main thread_.

_Note:_ Depending on the operating system, the primordial process thread may be subject to special handling that impacts its ability to function properly as a normal Java thread (such as having a limited stack size and being able to throw `StackOverflowError`). It is strongly recommended that the primordial thread is not used to load the Java VM, but that a new thread is created just for that purpose.

### Attaching to the VM

The JNI interface pointer (`JNIEnv`) is valid only in the current thread. Should another thread need to access the Java VM, it must first call `AttachCurrentThread()` to attach itself to the VM and obtain a JNI interface pointer. Once attached to the VM, a native thread works just like an ordinary Java thread running inside a native method, with the one exception that there is no Java caller when calling [caller-sensitive methods](design.html#calling-caller-sensitive-methods). The native thread remains attached to the VM until it calls `DetachCurrentThread()` to detach itself.

The attached thread should have enough stack space to perform a reasonable amount of work. The allocation of stack space per thread is operating system-specific. For example, using pthreads, the stack size can be specified in the `pthread_attr_t` argument to `pthread_create`.

### Detaching from the VM

A native thread attached to the VM must call `DetachCurrentThread()` to detach itself before exiting. A thread cannot detach itself if there are Java methods on the call stack.

### Unloading the VM

The `JNI_DestroyJavaVM()` function unloads a Java VM.

The VM waits until the current thread is the only non-daemon user thread before it actually unloads. User threads include both Java threads and attached native threads. This restriction exists because a Java thread or attached native thread may be holding system resources, such as locks, windows, and so on. The `VM` cannot automatically free these resources. By restricting the current thread to be the only running thread when the VM is unloaded, the burden of releasing system resources held by arbitrary threads is on the programmer.

Library and Version Management
------------------------------

A native library may be either dynamically linked or statically linked with the VM. The manner in which the library and VM image are combined is implementation dependent. A `System.loadLibrary` or equivalent API must succeed for a library to be considered loaded, this applies to both dynamically and even statically linked libraries.

Once a native library is loaded, it is visible from all class loaders. Therefore two classes in different class loaders may link with the same native method. This leads to two problems:

*   A class may mistakenly link with native libraries loaded by a class with the same name in a different class loader.
*   Native methods can easily mix classes from different class loaders. This breaks the name space separation offered by class loaders, and leads to type safety problems.

Each class loader manages its own set of native libraries. **The same JNI native library cannot be loaded into more than one class loader.** Doing so causes `UnsatisfiedLinkError` to be thrown. For example, `System.loadLibrary` throws an `UnsatisfiedLinkError` when used to load a native library into two class loaders. The benefits of this approach are:

*   Name space separation based on class loaders is preserved in native libraries. A native library cannot easily mix classes from different class loaders.
*   In addition, native libraries can be unloaded when their corresponding class loaders are garbage collected.

### Support for Statically Linked Libraries

The following rules apply to statically linked libraries, for the statically linked library given in these examples named 'L':

*   A library 'L' whose image has been combined with the VM is defined as statically linked if and only if the library exports a function called `JNI_OnLoad_L`.
*   If a statically linked library L exports a function called `JNI_OnLoad_L` and a function called `JNI_OnLoad`, the `JNI_OnLoad` function will be ignored.
*   If a library L is statically linked, then upon the first invocation of `System.loadLibrary("L")` or equivalent API, a `JNI_OnLoad_L` function will be invoked with the same arguments and expected return value as specified for the `JNI_OnLoad function`.
*   A library L that is statically linked will prohibit a library of the same name from being loaded dynamically.
*   When the class loader containing a statically linked native library L is garbage collected, the VM will invoke the `JNI_OnUnload_L` function of the library if such a function is exported.
*   If a statically linked library L exports a function called `JNI_OnUnload_L` and a function called `JNI_OnUnload`, the `JNI_OnUnload` function will be ignored.

The programmer can also call the JNI function `RegisterNatives()` to register the native methods associated with a class. The `RegisterNatives()` function is particularly useful with statically linked functions.

If dynamically linked library defines `JNI_OnLoad_L` and/or `JNI_OnUnload_L` functions, these functions will be ignored.

### Library Lifecycle Function Hooks

To facilitate version control and resource management, JNI libraries may define _load_ and _unload_ function hooks. Naming of these of functions depends upon whether the library was dynamically or statically linked.

### JNI_OnLoad

`jint JNI_OnLoad(JavaVM *vm, void *reserved);`

Optional function defined by dynamically linked libraries. The VM calls `JNI_OnLoad` when the native library is loaded (for example, through `System.loadLibrary`).

In order to make use of functions defined at a certain version of the JNI API, `JNI_OnLoad` must return a constant defining at least that version. For example, libraries wishing to use `AttachCurrentThreadAsDaemon` function introduced in JDK 1.4, need to return at least `JNI_VERSION_1_4`. If the native library does not export a `JNI_OnLoad` function, the VM assumes that the library only requires JNI version `JNI_VERSION_1_1`. If the VM does not recognize the version number returned by `JNI_OnLoad`, the VM will unload the library and act as if the library was never loaded.

#### LINKAGE:

Exported from dynamically linked native libraries that contain native method implementations.

#### PARAMETERS:

`vm`: a pointer to the current VM structure.

`reserved`: unused pointer.

#### RETURNS:

Return the required `JNI_VERSION` constant (see also `GetVersion`).

### JNI_OnUnload

`void JNI_OnUnload(JavaVM *vm, void *reserved);`

Optional function defined by dynamically linked libraries. The VM calls `JNI_OnUnload` when the class loader containing the native library is garbage collected.

This function can be used to perform cleanup operations. Because this function is called in an unknown context (such as from a finalizer), the programmer should be conservative on using Java VM services, and refrain from arbitrary Java call-backs.

#### LINKAGE:

Exported from dynamically linked native libraries that contain native method implementations.

#### PARAMETERS:

`vm`: a pointer to the current VM structure.

`reserved`: unused pointer.

### JNI_OnLoad_L

`jint JNI_Onload_<L>(JavaVM *vm, void *reserved);`

Mandatory function that **must be defined by statically linked libraries** .

If a library, named 'L', is statically linked, then upon the first invocation of `System.loadLibrary("L")` or equivalent API, a `JNI_OnLoad_L` function will be invoked with the same arguments and expected return value as specified for the `JNI_OnLoad` function. `JNI_OnLoad_L` must return the JNI version needed by the native library. This version must be `JNI_VERSION_1_8` or later. If the VM does not recognize the version number returned by `JNI_OnLoad_L`, the VM will act as if the library was never loaded.

#### LINKAGE:

Exported from statically linked native libraries that contain native method implementations.

#### PARAMETERS:

`vm`: a pointer to the current VM structure.

`reserved`: unused pointer.

#### RETURNS:

Return the required `JNI_VERSION` constant (see also `GetVersion`). The minimum version returned being at least `JNI_VERSION_1_8`.

#### SINCE:

JDK/JRE 1.8

### JNI_OnUnload_L

`void JNI_OnUnload_<L>(JavaVM *vm, void *reserved);`

Optional function defined by statically linked libraries. When the class loader containing a statically linked native library 'L' is garbage collected, the VM will invoke the `JNI_OnUnload_L` function of the library if such a function is exported.

This function can be used to perform cleanup operations. Because this function is called in an unknown context (such as from a finalizer), the programmer should be conservative on using Java VM services, and refrain from arbitrary Java call-backs.

#### LINKAGE:

Exported from statically linked native libraries that contain native method implementations.

#### PARAMETERS:

`vm`: a pointer to the current VM structure.

`reserved`: unused pointer.

#### SINCE:

JDK/JRE 1.8

#### Informational Note:

The act of loading a native library is the complete process of making the library and its native entry points known and registered to the Java VM and runtime. Note that simply performing operating system level operations to load a native library, such as `dlopen` on a UNIX(R) system, does not fully accomplish this goal. A native function is normally called from the Java class loader to perform a call to the host operating system that will load the library into memory and return a handle to the native library. This handle will be stored and used in subsequent searches for native library entry points. The Java native class loader will complete the load process once the handle is successfully returned to register the library.

Invocation API Functions
------------------------

The `JavaVM` type is a pointer to the Invocation API function table. The following code example shows this function table.

    typedef const struct JNIInvokeInterface *JavaVM;
    
    const struct JNIInvokeInterface ... = {
        NULL,
        NULL,
        NULL,
    
        DestroyJavaVM,
        AttachCurrentThread,
        DetachCurrentThread,
    
        GetEnv,
    
        AttachCurrentThreadAsDaemon
    };

Note that three Invocation API functions, `JNI_GetDefaultJavaVMInitArgs()`, `JNI_GetCreatedJavaVMs()`, and `JNI_CreateJavaVM()`, are not part of the JavaVM function table. These functions can be used without a preexisting `JavaVM` structure.

### JNI_GetDefaultJavaVMInitArgs

`jint JNI_GetDefaultJavaVMInitArgs(void *vm_args);`

Returns a default configuration for the Java VM. Before calling this function, native code must set the vm_args->version field to the JNI version it expects the VM to support. After this function returns, vm_args->version will be set to the actual JNI version the VM supports.

#### LINKAGE:

Exported from the native library that implements the Java virtual machine.

#### PARAMETERS:

`vm_args`: a pointer to a `JavaVMInitArgs` structure in to which the default arguments are filled, must not be `NULL`.

#### RETURNS:

Returns `JNI_OK` if the requested version is supported; returns a JNI error code (a negative number) if the requested version is not supported.

### JNI_GetCreatedJavaVMs

`jint JNI_GetCreatedJavaVMs(JavaVM **vmBuf, jsize bufLen, jsize *nVMs);`

Returns all Java VMs that have been created. Pointers to VMs are written in the buffer vmBuf in the order they are created. At most bufLen number of entries will be written. The total number of created VMs is returned in \*nVMs.

Creation of multiple VMs in a single process is not supported.

#### LINKAGE:

Exported from the native library that implements the Java virtual machine.

#### PARAMETERS:

`vmBuf`: pointer to the buffer where the VM structures will be placed, must not be `NULL`.

`bufLen`: the length of the buffer.

`nVMs`: a pointer to an integer. May be a `NULL` value.

#### RETURNS:

Returns `JNI_OK` on success; returns a suitable JNI error code (a negative number) on failure.

### JNI_CreateJavaVM

`jint JNI_CreateJavaVM(JavaVM **p_vm, void **p_env, void *vm_args);`

Loads and initializes a Java VM. The current thread becomes the main thread. Sets the `env` argument to the JNI interface pointer of the main thread.

Creation of multiple VMs in a single process is not supported.

The second argument to `JNI_CreateJavaVM` is always a pointer to `JNIEnv *`, while the third argument is a pointer to a `JavaVMInitArgs` structure which uses option strings to encode arbitrary VM start up options:

    typedef struct JavaVMInitArgs {
        jint version;
    
        jint nOptions;
        JavaVMOption *options;
        jboolean ignoreUnrecognized;
    } JavaVMInitArgs;

The `options` field is an array of the following type:

    typedef struct JavaVMOption {
        char *optionString;  /* the option as a string in the default platform encoding */
        void *extraInfo;
    } JavaVMOption;

The size of the array is denoted by the nOptions field in `JavaVMInitArgs`. If `ignoreUnrecognized` is `JNI_TRUE`, `JNI_CreateJavaVM` ignores all unrecognized option strings that begin with "`-X`" or "`_`". If `ignoreUnrecognized` is `JNI_FALSE`, `JNI_CreateJavaVM` returns `JNI_ERR` as soon as it encounters any unrecognized option strings. All Java VMs must recognize the following set of standard options:

Standard Options  

optionString

meaning

`-D<name>=<value>`

Set a system property

`-verbose[:class|gc|jni]`

Enable verbose output. The options can be followed by a comma-separated list of names indicating what kind of messages will be printed by the VM. For example, "`-verbose:gc,class`" instructs the VM to print GC and class loading related messages. Standard names include: `gc`, `class`, and `jni`. All nonstandard (VM-specific) names must begin with "`X`".

`vfprintf`

`extraInfo` is a pointer to the `vfprintf` hook.

`exit`

`extraInfo` is a pointer to the `exit` hook.

`abort`

`extraInfo` is a pointer to the `abort` hook.

The module related options, `--add-reads`, `--add-exports`, `--add-opens`, `--add-modules`, `--limit-modules`, `--module-path`, `--patch-module`, and `--upgrade-module-path` must be passed as option strings using their "option=value" format instead of their "option value" format. (Note the required `=` between "option" and "value".) For example, to export `java.management/sun.management` to `ALL-UNNAMED` pass option string `"--add-exports=java.management/sun.management=ALL-UNNAMED"`.

In addition, each VM implementation may support its own set of non-standard option strings. Non-standard option names must begin with "`-X`" or an underscore ("`_`"). For example, the JDK/JRE supports `-Xms` and `-Xmx` options to allow programmers specify the initial and maximum heap size. Options that begin with "`-X`" are accessible from the "`java`" command line.

Here is the example code that creates a Java VM in the JDK/JRE:

    JavaVMInitArgs vm_args;
    JavaVMOption options[4];
    
    options[0].optionString = "-Djava.compiler=NONE";           /* disable JIT */
    options[1].optionString = "-Djava.class.path=c:\myclasses"; /* user classes */
    options[2].optionString = "-Djava.library.path=c:\mylibs";  /* set native library path */
    options[3].optionString = "-verbose:jni";                   /* print JNI-related messages */
    
    vm_args.version = JNI_VERSION_1_2;
    vm_args.options = options;
    vm_args.nOptions = 4;
    vm_args.ignoreUnrecognized = TRUE;
    
    /* Note that in the JDK/JRE, there is no longer any need to call
     * JNI_GetDefaultJavaVMInitArgs.
     */
    res = JNI_CreateJavaVM(&vm, (void **)&env, &vm_args);
    if (res < 0) ...

#### LINKAGE:

Exported from the native library that implements the Java virtual machine.

#### PARAMETERS:

`p_vm`: pointer to the location where the resulting VM structure will be placed, must not be `NULL`.

`p_env`: pointer to the location where the JNI interface pointer for the main thread will be placed, must not be `NULL`.

`vm_args`: Java VM initialization arguments, must not be `NULL`.

#### RETURNS:

Returns `JNI_OK` on success; returns a suitable JNI error code (a negative number) on failure.

### DestroyJavaVM

    jint DestroyJavaVM(JavaVM *vm);

Unloads a Java VM and reclaims its resources.

Any thread, whether attached or not, can invoke this function. If the current thread is attached, the VM waits until the current thread is the only non-daemon user-level Java thread. If the current thread is not attached, the VM attaches the current thread and then waits until the current thread is the only non-daemon user-level thread.

#### LINKAGE:

Index 3 in the JavaVM interface function table.

#### PARAMETERS:

`vm`: the Java VM that will be destroyed, must not be `NULL`.

#### RETURNS:

Returns `JNI_OK` on success; returns a suitable JNI error code (a negative number) on failure.

Unloading of the VM is not supported.

### AttachCurrentThread

`jint AttachCurrentThread(JavaVM *vm, void **p_env, void *thr_args);`

Attaches the current thread to a Java VM. Returns a JNI interface pointer in the `JNIEnv` argument.

Trying to attach a thread that is already attached is a no-op.

A native thread cannot be attached simultaneously to two Java VMs.

When a thread is attached to the VM, the context class loader is the bootstrap loader.

#### LINKAGE:

Index 4 in the JavaVM interface function table.

#### PARAMETERS:

`vm`: the VM to which the current thread will be attached, must not be `NULL`.

`p_env`: pointer to the location where the JNI interface pointer of the current thread will be placed, must not be `NULL`.

`thr_args`: can be NULL or a pointer to a `JavaVMAttachArgs` structure to specify additional information:

The second argument to `AttachCurrentThread` is always a pointer to `JNIEnv`. The third argument to `AttachCurrentThread` was reserved, and should be set to `NULL`.

You pass a pointer to the following structure to specify additional information:

    typedef struct JavaVMAttachArgs {
        jint version;
        char *name;    /* the name of the thread as a modified UTF-8 string, or NULL */
        jobject group; /* global ref of a ThreadGroup object, or NULL */
    } JavaVMAttachArgs

#### RETURNS:

Returns `JNI_OK` on success; returns a suitable JNI error code (a negative number) on failure.

### AttachCurrentThreadAsDaemon

`jint AttachCurrentThreadAsDaemon(JavaVM* vm, void** penv, void* args);`

Same semantics as `AttachCurrentThread`, but the newly-created `java.lang.Thread` instance is a _daemon_.

If the thread has already been attached via either `AttachCurrentThread` or `AttachCurrentThreadAsDaemon`, this routine simply sets the value pointed to by `penv` to the `JNIEnv` of the current thread. In this case neither `AttachCurrentThread` nor this routine have any effect on the _daemon_ status of the thread.

#### LINKAGE:

Index 7 in the JavaVM interface function table.

#### PARAMETERS:

`vm`: the virtual machine instance to which the current thread will be attached, must not be `NULL`.

`penv`: a pointer to the location in which the `JNIEnv` interface pointer for the current thread will be placed.

`args`: a pointer to a `JavaVMAttachArgs` structure. May be a `NULL` value.

#### RETURNS

Returns `JNI_OK` on success; returns a suitable JNI error code (a negative number) on failure.

### DetachCurrentThread

`jint DetachCurrentThread(JavaVM *vm);`

Detaches the current thread from a Java VM. All Java monitors held by this thread are released. All Java threads waiting for this thread to die are notified.

The main thread can be detached from the VM.

Trying to detach a thread that is not attached is a no-op.

If an exception is pending when `DetachCurrentThread` is called, the VM may choose to report its existence.

#### LINKAGE:

Index 5 in the JavaVM interface function table.

#### PARAMETERS:

`vm`: the VM from which the current thread will be detached, must not be `NULL`.

#### RETURNS:

Returns `JNI_OK` on success; returns a suitable JNI error code (a negative number) on failure.

### GetEnv

`jint GetEnv(JavaVM *vm, void **env, jint version);`

#### LINKAGE:

Index 6 in the JavaVM interface function table.

#### PARAMETERS:

`vm`: The virtual machine instance from which the interface will be retrieved, must not be `NULL`.

`env`: pointer to the location where the JNI interface pointer for the current thread will be placed, must not be `NULL`.

`version`: The requested JNI version.

#### RETURNS:

If the current thread is not attached to the VM, sets `*env` to `NULL`, and returns `JNI_EDETACHED`. If the specified version is not supported, sets `*env` to `NULL`, and returns `JNI_EVERSION`. Otherwise, sets `*env` to the appropriate interface, and returns `JNI_OK`.


