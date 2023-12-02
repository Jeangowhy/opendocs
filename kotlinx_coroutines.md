# TOC
<a name="toc"></a>

Sources https://github.com/Kotlin/kotlinx.coroutines

    00. README.md
    01. kotlinx.coroutines/docs/topics/coroutines-guide.md
    02. kotlinx.coroutines/docs/topics/coroutines-basics.md
    03. kotlinx.coroutines/docs/topics/coroutines-and-channels.md
    04. kotlinx.coroutines/docs/topics/cancellation-and-timeouts.md
    05. kotlinx.coroutines/docs/topics/composing-suspending-functions.md
    06. kotlinx.coroutines/docs/topics/coroutine-context-and-dispatchers.md
    07. kotlinx.coroutines/docs/topics/flow.md
    08. kotlinx.coroutines/docs/topics/channels.md
    09. kotlinx.coroutines/docs/topics/exception-handling.md
    10. kotlinx.coroutines/docs/topics/shared-mutable-state-and-concurrency.md
    11. kotlinx.coroutines/docs/topics/select-expression.md
    12. kotlinx.coroutines/docs/topics/debug-coroutines-with-idea.md
    13. kotlinx.coroutines/docs/topics/debug-flow-with-idea.md
    14. kotlinx.coroutines/docs/topics/compatibility.md
    15. kotlinx.coroutines/docs/topics/debugging.md

* [📜 00. kotlinx.coroutines](🔗00.)
* [00.1. Modules](🔗00.1.)
* [00.2. Documentation](🔗00.2.)
* [00.3. Using in your projects](🔗00.3.)
* [00.3.1. Maven](🔗00.3.1.)
* [00.3.2. Gradle](🔗00.3.2.)
* [00.3.3. Android](🔗00.3.3.)
* [00.3.3.1. R8 and ProGuard](🔗00.3.3.1.)
* [00.3.3.2. Avoiding including the debug infrastructure in the resulting APK](🔗00.3.3.2.)
* [00.3.4. Multiplatform](🔗00.3.4.)
* [00.3.4.1. JS](🔗00.3.4.1.)
* [00.3.4.2. Native](🔗00.3.4.2.)
* [00.4. Building and Contributing](🔗00.4.)
* [📜 01. Coroutines guide](#🔗01.)
* [01.1. Additional references](#🔗01.1.)
* [📜 02. Coroutines basics](#🔗02.)
* [02.1. Your first coroutine](#🔗02.1.)
* [02.1.1. Structured concurrency](#🔗02.1.1.)
* [02.2. Extract function refactoring](#🔗02.2.)
* [02.3. Scope builder](#🔗02.3.)
* [02.4. Scope builder and concurrency](#🔗02.4.)
* [02.5. An explicit job](#🔗02.5.)
* [02.6. Coroutines are light-weight](#🔗02.6.)
* [📜 03. Coroutines and channels − tutorial](#🔗03.)
* [03.1. Before you start](#🔗03.1.)
* [03.1.1. Generate a GitHub developer token](#🔗03.1.1.)
* [03.1.2. Run the code](#🔗03.1.2.)
* [03.2. Blocking requests](#🔗03.2.)
* [03.2.1. Task 1](#🔗03.2.1.)
* [03.2.1.1. Solution for task 1](#🔗03.2.1.1.)
* [03.3. Callbacks](#🔗03.3.)
* [03.3.1. Use a background thread](#🔗03.3.1.)
* [03.3.2. Task 2](#🔗03.3.2.)
* [03.3.2.1. Solution for task 2](#🔗03.3.2.1.)
* [03.3.3. Use the Retrofit callback API](#🔗03.3.3.)
* [03.3.4. Task 3 (optional)](#🔗03.3.4.)
* [03.3.4.1. The first attempted solution for task 3](#🔗03.3.4.1.)
* [03.3.4.2. The second attempted solution for task 3](#🔗03.3.4.2.)
* [03.3.4.3. The third attempted solution for task 3](#🔗03.3.4.3.)
* [03.4. Suspending functions](#🔗03.4.)
* [03.4.1. Task 4](#🔗03.4.1.)
* [03.4.1.1. Solution for task 4](#🔗03.4.1.1.)
* [03.5. Coroutines](#🔗03.5.)
* [03.5.1. Starting a new coroutine](#🔗03.5.1.)
* [03.6. Concurrency](#🔗03.6.)
* [03.6.1. Task 5](#🔗03.6.1.)
* [03.6.1.1. Tip for task 5](#🔗03.6.1.1.)
* [03.6.1.2. Solution for task 5](#🔗03.6.1.2.)
* [03.7. Structured concurrency](#🔗03.7.)
* [03.7.1. Canceling the loading of contributors](#🔗03.7.1.)
* [03.7.2. Using the outer scope's context](#🔗03.7.2.)
* [03.8. Showing progress](#🔗03.8.)
* [03.8.1. Task 6](#🔗03.8.1.)
* [03.8.1.1. Solution for task 6](#🔗03.8.1.1.)
* [03.8.1.2. Consecutive vs concurrent](#🔗03.8.1.2.)
* [03.9. Channels](#🔗03.9.)
* [03.9.1. Task 7](#🔗03.9.1.)
* [03.9.1.1. Tip for task 7](#🔗03.9.1.1.)
* [03.9.1.2. Solution for task 7](#🔗03.9.1.2.)
* [03.10. Testing coroutines](#🔗03.10.)
* [03.10.1. Task 8](#🔗03.10.1.)
* [03.10.1.1. Tip for task 8](#🔗03.10.1.1.)
* [03.10.1.2. Solution for task 8](#🔗03.10.1.2.)
* [03.11. What's next](#🔗03.11.)
* [📜 04. Cancellation and timeouts](#🔗04.)
* [04.1. Cancelling coroutine execution](#🔗04.1.)
* [04.2. Cancellation is cooperative](#🔗04.2.)
* [04.3. Making computation code cancellable](#🔗04.3.)
* [04.4. Closing resources with `finally`](#🔗04.4.)
* [04.5. Run non-cancellable block](#🔗04.5.)
* [04.6. Timeout](#🔗04.6.)
* [04.7. Asynchronous timeout and resources](#🔗04.7.)
* [📜 05. Composing suspending functions](#🔗05.)
* [05.1. Sequential by default](#🔗05.1.)
* [05.2. Concurrent using async](#🔗05.2.)
* [05.3. Lazily started async](#🔗05.3.)
* [05.4. Async-style functions](#🔗05.4.)
* [05.5. Structured concurrency with async ](#🔗05.5.)
* [📜 06. Coroutine context and dispatchers](#🔗06.)
* [06.1. Dispatchers and threads](#🔗06.1.)
* [06.2. Unconfined vs confined dispatcher](#🔗06.2.)
* [06.3. Debugging coroutines and threads](#🔗06.3.)
* [06.3.1. Debugging with IDEA](#🔗06.3.1.)
* [06.3.2. Debugging using logging](#🔗06.3.2.)
* [06.4. Jumping between threads](#🔗06.4.)
* [06.5. Job in the context](#🔗06.5.)
* [06.6. Children of a coroutine](#🔗06.6.)
* [06.7. Parental responsibilities ](#🔗06.7.)
* [06.8. Naming coroutines for debugging](#🔗06.8.)
* [06.9. Combining context elements](#🔗06.9.)
* [06.10. Coroutine scope](#🔗06.10.)
* [06.10.1. Thread-local data](#🔗06.10.1.)
* [📜 07. Asynchronous Flow](#🔗07.)
* [07.1. Representing multiple values](#🔗07.1.)
* [07.1.1. Sequences](#🔗07.1.1.)
* [07.1.2. Suspending functions](#🔗07.1.2.)
* [07.1.3. Flows](#🔗07.1.3.)
* [07.2. Flows are cold](#🔗07.2.)
* [07.3. Flow cancellation basics](#🔗07.3.)
* [07.4. Flow builders](#🔗07.4.)
* [07.5. Intermediate flow operators](#🔗07.5.)
* [07.5.1. Transform operator](#🔗07.5.1.)
* [07.5.2. Size-limiting operators](#🔗07.5.2.)
* [07.6. Terminal flow operators](#🔗07.6.)
* [07.7. Flows are sequential](#🔗07.7.)
* [07.8. Flow context](#🔗07.8.)
* [07.8.1. A common pitfall when using withContext](#🔗07.8.1.)
* [07.8.2. flowOn operator](#🔗07.8.2.)
* [07.9. Buffering](#🔗07.9.)
* [07.9.1. Conflation](#🔗07.9.1.)
* [07.9.2. Processing the latest value](#🔗07.9.2.)
* [07.10. Composing multiple flows](#🔗07.10.)
* [07.10.1. Zip](#🔗07.10.1.)
* [07.10.2. Combine](#🔗07.10.2.)
* [07.11. Flattening flows](#🔗07.11.)
* [07.11.1. flatMapConcat](#🔗07.11.1.)
* [07.11.2. flatMapMerge](#🔗07.11.2.)
* [07.11.3. flatMapLatest   ](#🔗07.11.3.)
* [07.12. Flow exceptions](#🔗07.12.)
* [07.12.1. Collector try and catch](#🔗07.12.1.)
* [07.12.2. Everything is caught](#🔗07.12.2.)
* [07.13. Exception transparency](#🔗07.13.)
* [07.13.1. Transparent catch](#🔗07.13.1.)
* [07.13.2. Catching declaratively](#🔗07.13.2.)
* [07.14. Flow completion](#🔗07.14.)
* [07.14.1. Imperative finally block](#🔗07.14.1.)
* [07.14.2. Declarative handling](#🔗07.14.2.)
* [07.14.3. Successful completion](#🔗07.14.3.)
* [07.15. Imperative versus declarative](#🔗07.15.)
* [07.16. Launching flow](#🔗07.16.)
* [07.16.1. Flow cancellation checks](#🔗07.16.1.)
* [07.16.1.1. Making busy flow cancellable ](#🔗07.16.1.1.)
* [07.17. Flow and Reactive Streams](#🔗07.17.)
* [📜 08. Channels](#🔗08.)
* [08.1. Channel basics](#🔗08.1.)
* [08.2. Closing and iteration over channels ](#🔗08.2.)
* [08.3. Building channel producers](#🔗08.3.)
* [08.4. Pipelines](#🔗08.4.)
* [08.5. Prime numbers with pipeline](#🔗08.5.)
* [08.6. Fan-out](#🔗08.6.)
* [08.7. Fan-in](#🔗08.7.)
* [08.8. Buffered channels](#🔗08.8.)
* [08.9. Channels are fair](#🔗08.9.)
* [08.10. Ticker channels](#🔗08.10.)
* [📜 09. Coroutine exceptions handling](#🔗09.)
* [09.1. Exception propagation](#🔗09.1.)
* [09.2. CoroutineExceptionHandler](#🔗09.2.)
* [09.3. Cancellation and exceptions](#🔗09.3.)
* [09.4. Exceptions aggregation](#🔗09.4.)
* [09.5. Supervision](#🔗09.5.)
* [09.5.1. Supervision job](#🔗09.5.1.)
* [09.5.2. Supervision scope](#🔗09.5.2.)
* [09.5.2.1. Exceptions in supervised coroutines](#🔗09.5.2.1.)
* [📜 10. Shared mutable state and concurrency](#🔗10.)
* [10.1. The problem](#🔗10.1.)
* [10.2. Volatiles are of no help](#🔗10.2.)
* [10.3. Thread-safe data structures](#🔗10.3.)
* [10.4. Thread confinement fine-grained](#🔗10.4.)
* [10.5. Thread confinement coarse-grained](#🔗10.5.)
* [10.6. Mutual exclusion](#🔗10.6.)
* [📜 11. Select expression (experimental)](#🔗11.)
* [11.1. Selecting from channels](#🔗11.1.)
* [11.2. Selecting on close](#🔗11.2.)
* [11.3. Selecting to send](#🔗11.3.)
* [11.4. Selecting deferred values](#🔗11.4.)
* [11.5. Switch over a channel of deferred values](#🔗11.5.)
* [📜 12. Debug coroutines using IntelliJ IDEA – tutorial](#🔗12.)
* [12.1. Create coroutines](#🔗12.1.)
* [12.2. Debug coroutines](#🔗12.2.)
* [12.2.1. Optimized-out variables](#🔗12.2.1.)
* [📜 13. Debug Kotlin Flow using IntelliJ IDEA – tutorial](#🔗13.)
* [13.1. Create a Kotlin flow](#🔗12.3.)
* [13.2. Debug the coroutine](#🔗12.4.)
* [13.2.1. Optimized-out variables](#🔗12.4.1.)
* [13.3. Add a concurrently running coroutine](#🔗12.5.)
* [13.4. Debug a Kotlin flow with two coroutines](#🔗12.6.)
* [📜 14. Compatibility](#🔗14.)
* [14.1. Public API types](#🔗12.8.)
* [14.1.1. Experimental API](#🔗12.8.1.)
* [14.1.2. Flow preview API](#🔗12.8.2.)
* [14.1.3. Obsolete API](#🔗12.8.3.)
* [14.1.4. Internal API](#🔗12.8.4.)
* [14.1.5. Stable API](#🔗12.8.5.)
* [14.1.6. Deprecation cycle](#🔗12.8.6.)
* [14.2. Using annotated API](#🔗12.9.)
* [14.2.1. Programmatically](#🔗12.9.1.)
* [14.2.2. Gradle](#🔗12.9.2.)
* [14.2.3. Maven](#🔗12.9.3.)
* [📜 15. Debugging coroutines](#🔗15.)
* [15.1. Debug mode](#🔗12.11.)
* [15.2. Stacktrace recovery](#🔗12.12.)
* [15.2.1. Stacktrace recovery machinery   ](#🔗12.12.1.)
* [15.3. Debug agent](#🔗12.13.)
* [15.4. Android optimization](#🔗12.14.)
* [📜 16. Kotlinx.Coroutines Modules](#🔗16.)
* [16.1. Module kotlinx-coroutines-core](#🔗16.1.)
* [16.1.1. Package kotlinx.coroutines](#🔗16.1.1.)
* [16.1.2. Package kotlinx.coroutines.sync](#🔗16.1.2.)
* [16.1.3. Package kotlinx.coroutines.channels](#🔗16.1.3.)
* [16.1.4. Package kotlinx.coroutines.flow](#🔗16.1.4.)
* [16.1.5. Package kotlinx.coroutines.selects](#🔗16.1.5.)
* [16.1.6. Package kotlinx.coroutines.intrinsics](#🔗16.1.6.)
* [📜 16.2. Module kotlinx-coroutines-debug](#🔗16.2.)
* [16.2.1. Overview](#🔗16.2.1.)
* [16.2.2. Using in your project](#🔗16.2.2.)
* [16.2.3. Using in unit tests](#🔗16.2.3.)
* [16.2.4. Using as JVM agent](#🔗16.2.4.)
* [16.2.5. Using in production environment](#🔗16.2.5.)
* [16.2.6. Example of usage](#🔗16.2.6.)
* [16.2.7. Status of the API](#🔗16.2.7.)
* [16.2.8. Debug agent and Android](#🔗16.2.8.)
* [16.2.8.1. Build failures due to duplicate resource files](#🔗16.2.8.1.)
* [📜 16.3. Module kotlinx-coroutines-test](#🔗16.3.)
* [16.3.1. Overview](#🔗16.3.1.)
* [16.3.2. Using in your project](#🔗16.3.2.)
* [16.3.3. Dispatchers.Main Delegation](#🔗16.3.3.)
* [16.3.4. runTest](#🔗16.3.4.)
* [16.3.5. Timeout](#🔗16.3.5.)
* [16.3.6. Delay-skipping](#🔗16.3.6.)
* [16.3.7. `launch` and `async`](#🔗16.3.7.)
* [16.3.8. Controlling the virtual time](#🔗16.3.8.)
* [16.3.9. Using multiple test dispatchers](#🔗16.3.9.)
* [16.3.0. Accessing the test coroutine scope](#🔗16.3.0.)
* [16.3.11. Running background work](#🔗16.3.11.)
* [16.3.12. Eagerly entering `launch` and `async` blocks](#🔗16.3.12.)
* [16.3.12.1. Using `withTimeout` inside `runTest`](#🔗16.3.12.1.)
* [16.3.13. Virtual time support with other dispatchers](#🔗16.3.13.)
* [16.3.13.1. Status of the API](#🔗16.3.13.1.)
* [16.4. Coroutines integration](#🔗16.4.)
* [📜 16.4.1. Module kotlinx-coroutines-guava](#🔗16.4.1.)
* [16.4.1.1. Example](#🔗16.4.1.1.)
* [16.4.1.2. Package kotlinx.coroutines.future](#🔗16.4.1.2.)
* [📜 16.4.2. Module kotlinx-coroutines-slf4j](#🔗16.4.2.)
* [16.4.2.1. Example](#🔗16.4.2.1.)
* [16.4.2.2. Package kotlinx.coroutines.slf4j](#🔗16.4.2.2.)
* [📜 16.4.3. Module kotlinx-coroutines-play-services](#🔗16.4.3.)
* [16.4.3.1. Example](#🔗16.4.3.1.)
* [16.5. Coroutines for reactive streams](#🔗16.5.)
* [📜 16.5.1. Module kotlinx-coroutines-reactive](#🔗16.5.1.)
* [16.5.1.1. Package kotlinx.coroutines.reactive](#🔗16.5.1.1.)
* [📜 16.5.2. Module kotlinx-coroutines-reactor](#🔗16.5.2.)
* [16.5.2.1. Package kotlinx.coroutines.reactor](#🔗16.5.2.1.)
* [📜 16.6.3. Module kotlinx-coroutines-rx2](#🔗16.6.3.)
* [16.6.3.1. Package kotlinx.coroutines.rx2](#🔗16.6.3.1.)
* [📜 16.6.4. Module kotlinx-coroutines-rx3](#🔗16.6.4.)
* [16.6.4.1. Package kotlinx.coroutines.rx3](#🔗16.6.4.1.)
* [16.6. Coroutines for UI](#🔗16.6.)
* [📜 16.6.0. Guide to UI programming with coroutines](🔗16.6.0.)
* [16.6.0.1. Table of contents](🔗16.6.0.1.)
* [16.6.0.2. Setup](🔗16.6.0.2.)
* [16.6.0.2.1. JavaFx](🔗16.6.0.2.1.)
* [16.6.0.2.2. Android](🔗16.6.0.2.2.)
* [16.6.0.3. Basic UI coroutines](🔗16.6.0.3.)
* [16.6.0.3.1. Launch UI coroutine](🔗16.6.0.3.1.)
* [16.6.0.3.2. Cancel UI coroutine](🔗16.6.0.3.2.)
* [16.6.0.4. Using actors within UI context](🔗16.6.0.4.)
* [16.6.0.4.1. Extensions for coroutines](🔗16.6.0.4.1.)
* [16.6.0.4.2. At most one concurrent job](🔗16.6.0.4.2.)
* [16.6.0.4.3. Event conflation](🔗16.6.0.4.3.)
* [16.6.0.5. Blocking operations](🔗16.6.0.5.)
* [16.6.0.5.1. The problem of UI freezes ](🔗16.6.0.5.1.)
* [16.6.0.5.2. Structured concurrency, lifecycle and coroutine parent-child hierarchy](🔗16.6.0.5.2.)
* [16.6.0.5.3. Blocking operations](🔗16.6.0.5.3.)
* [16.6.0.6. Advanced topics](🔗16.6.0.6.)
* [16.6.0.6.1. Starting coroutine in UI event handlers without dispatch](🔗16.6.0.6.1.)
* [📜 16.6.1. Module kotlinx-coroutines-android](#🔗16.6.1.)
* [16.6.1.1. Optimization](#🔗16.6.1.1.)
* [16.6.1.2. Package kotlinx.coroutines.android](#🔗16.6.1.2.)
* [📜 16.6.2. Module kotlinx-coroutines-javafx](#🔗16.6.2.)
* [16.6.2.1. Package kotlinx.coroutines.javafx](#🔗16.6.2.1.)
* [📜 16.6.3. Module kotlinx-coroutines-swing](#🔗16.6.3.)
* [16.6.3.1. Package kotlinx.coroutines.swing](#🔗16.6.3.1.)

<a name="🔗00."></a>

📜 00. kotlinx.coroutines 
==================================================

[![Kotlin Stable](https://kotl.in/badges/stable.svg)](https://kotlinlang.org/docs/components-stability.html)
[![JetBrains official project](https://jb.gg/badges/official.svg)](https://confluence.jetbrains.com/display/ALL/JetBrains+on+GitHub)
[![GitHub license](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg?style=flat)](https://www.apache.org/licenses/LICENSE-2.0)
[![Download](https://img.shields.io/maven-central/v/org.jetbrains.kotlinx/kotlinx-coroutines-core/1.7.3)](https://central.sonatype.com/artifact/org.jetbrains.kotlinx/kotlinx-coroutines-core/1.7.3)
[![Kotlin](https://img.shields.io/badge/kotlin-1.8.20-blue.svg?logo=kotlin)](http://kotlinlang.org)
[![Slack channel](https://img.shields.io/badge/chat-slack-green.svg?logo=slack)](https://kotlinlang.slack.com/messages/coroutines/)

Library support for Kotlin coroutines with [multiplatform](#multiplatform) support.
This is a companion version for the Kotlin `1.8.20` release.

```java,kotlin
suspend fun main() = coroutineScope {
    launch { 
       delay(1000)
       println("Kotlin Coroutines World!") 
    }
    println("Hello")
}
```

> Play with coroutines online [here](https://pl.kotl.in/9zva88r7S)

<a name="🔗00.1."></a>

00.1. Modules
==================================================

* [core](https://github.com/Kotlin/kotlinx.coroutines/blob/master/README.md) — common coroutines across all platforms:
  * [launch] and [async] coroutine builders returning [Job] and [Deferred] light-weight futures with cancellation support;
  * [Dispatchers] object with [Main][Dispatchers.Main] dispatcher for Android/Swing/JavaFx (which require the corresponding artifacts in runtime) and Darwin (included out of the box), and [Default][Dispatchers.Default] dispatcher for background coroutines;
  * [delay] and [yield] top-level suspending functions;
  * [Flow] — cold asynchronous stream with [flow][_flow] builder and comprehensive operator set ([filter], [map], etc);
  * [Channel], [Mutex], and [Semaphore] communication and synchronization primitives;
  * [coroutineScope][_coroutineScope], [supervisorScope][_supervisorScope], [withContext], and [withTimeout] scope builders;
  * [MainScope()] for Android and UI applications;
  * [SupervisorJob()] and [CoroutineExceptionHandler] for supervision of coroutines hierarchies;
  * [select] expression support and more.
* [core/jvm](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/) — additional core features available on Kotlin/JVM:
  * [Dispatchers.IO] dispatcher for blocking coroutines;
  * [Executor.asCoroutineDispatcher][asCoroutineDispatcher] extension, custom thread pools, and more.
  * Integrations with `CompletableFuture` and JVM-specific extensions.
* [core/js](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/js/) — additional core features available on Kotlin/JS:
  * Integration with `Promise` via [Promise.await] and [promise] builder;
  * Integration with `Window` via [Window.asCoroutineDispatcher], etc.
* [test](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-test/README.md) — test utilities for coroutines:
  * [Dispatchers.setMain] to override [Dispatchers.Main] in tests;
  * [TestCoroutineScope] to test suspending functions and coroutines.
* [debug](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-debug/README.md) — debug utilities for coroutines:
  * [DebugProbes] API to probe, keep track of, print and dump active coroutines;
  * [CoroutinesTimeout] test rule to automatically dump coroutines on test timeout.
  * Automatic integration with [BlockHound](https://github.com/reactor/BlockHound).
* [reactive](https://github.com/Kotlin/kotlinx.coroutines/blob/master/reactive/README.md) — modules that provide builders and iteration support for various reactive streams libraries:
  * Reactive Streams ([Publisher.collect], [Publisher.awaitSingle], [kotlinx.coroutines.reactive.publish], etc), 
  * Flow (JDK 9) (the same interface as for Reactive Streams),
  * RxJava 2.x ([rxFlowable], [rxSingle], etc), and
  * RxJava 3.x ([rxFlowable], [rxSingle], etc), and
  * Project Reactor ([flux], [mono], etc).
* [ui](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/README.md) — modules that provide the [Main][Dispatchers.Main] dispatcher for various single-threaded UI libraries:
  * Android, JavaFX, and Swing.
* [integration](https://github.com/Kotlin/kotlinx.coroutines/blob/master/integration/README.md) — modules that provide integration with various asynchronous callback- and future-based libraries:
  * Guava [ListenableFuture.await], and Google Play Services [Task.await];
  * SLF4J MDC integration via [MDCContext].

<a name="🔗00.2."></a>

00.2. Documentation
==================================================

* Presentations and videos:
  * [Kotlin Coroutines in Practice](https://www.youtube.com/watch?v=a3agLJQ6vt8) (Roman Elizarov at KotlinConf 2018, [slides](https://www.slideshare.net/elizarov/kotlin-coroutines-in-practice-kotlinconf-2018))
  * [Deep Dive into Coroutines](https://www.youtube.com/watch?v=YrrUCSi72E8) (Roman Elizarov at KotlinConf 2017, [slides](https://www.slideshare.net/elizarov/deep-dive-into-coroutines-on-jvm-kotlinconf-2017))
  * [History of Structured Concurrency in Coroutines](https://www.youtube.com/watch?v=Mj5P47F6nJg) (Roman Elizarov at Hydra 2019, [slides](https://speakerdeck.com/elizarov/structured-concurrency))
* Guides and manuals: 
  * [Guide to kotlinx.coroutines by example](https://kotlinlang.org/docs/coroutines-guide.html) (**read it first**)
  * [Guide to UI programming with coroutines](ui/coroutines-guide-ui.md)
  * [Debugging capabilities in kotlinx.coroutines](docs/topics/debugging.md)
* [Compatibility policy and experimental annotations](docs/topics/compatibility.md)
* [Change log for kotlinx.coroutines](CHANGES.md)
* [Coroutines design document (KEEP)](https://github.com/Kotlin/KEEP/blob/master/proposals/coroutines.md)
* [Full kotlinx.coroutines API reference](https://kotlinlang.org/api/kotlinx.coroutines/)
 
<a name="🔗00.3."></a>

00.3. Using in your projects
==================================================

<a name="🔗00.3.1."></a>

00.3.1. Maven
==================================================

Add dependencies (you can also add other modules that you need):

```xml
<dependency>
    <groupId>org.jetbrains.kotlinx</groupId>
    <artifactId>kotlinx-coroutines-core</artifactId>
    <version>1.7.3</version>
</dependency>
```

And make sure that you use the latest Kotlin version:

```xml
<properties>
    <kotlin.version>1.8.20</kotlin.version>
</properties>
```

<a name="🔗00.3.2."></a>

00.3.2. Gradle
==================================================

Add dependencies (you can also add other modules that you need):

```java,kotlin
dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")
}
```

And make sure that you use the latest Kotlin version:

```java,kotlin
plugins {
    // For build.gradle.kts (Kotlin DSL)
    kotlin("jvm") version "1.8.20"
    
    // For build.gradle (Groovy DSL)
    id "org.jetbrains.kotlin.jvm" version "1.8.20"
}
```

Make sure that you have `mavenCentral()` in the list of repositories:

```java,kotlin
repositories {
    mavenCentral()
}
```

<a name="🔗00.3.3."></a>

00.3.3. Android
==================================================

Add [`kotlinx-coroutines-android`](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/kotlinx-coroutines-android)
module as a dependency when using `kotlinx.coroutines` on Android:

```java,kotlin
implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3")
```

This gives you access to the Android [Dispatchers.Main]
coroutine dispatcher and also makes sure that in case of a crashed coroutine with an unhandled exception that
this exception is logged before crashing the Android application, similarly to the way uncaught exceptions in
threads are handled by the Android runtime.

<a name="🔗00.3.3.1."></a>

00.3.3.1. R8 and ProGuard
==================================================

R8 and ProGuard rules are bundled into the [`kotlinx-coroutines-android`](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/kotlinx-coroutines-android) module.
For more details see ["Optimization" section for Android](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/kotlinx-coroutines-android/README.md#optimization).

<a name="🔗00.3.3.2."></a>

00.3.3.2. Avoiding including the debug infrastructure in the resulting APK
==================================================

The `kotlinx-coroutines-core` artifact contains a resource file that is not required for the coroutines to operate
normally and is only used by the debugger. To exclude it at no loss of functionality, add the following snippet to the
`android` block in your Gradle file for the application subproject:

```java,kotlin
packagingOptions {
    resources.excludes += "DebugProbesKt.bin"
}
```

<a name="🔗00.3.4."></a>

00.3.4. Multiplatform
==================================================

Core modules of `kotlinx.coroutines` are also available for 
[Kotlin/JS](https://kotlinlang.org/docs/reference/js-overview.html) and [Kotlin/Native](https://kotlinlang.org/docs/reference/native-overview.html).

In common code that should get compiled for different platforms, you can add a dependency to `kotlinx-coroutines-core` right to the `commonMain` source set:

```java,kotlin
commonMain {
    dependencies {
        implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")
    }
}
```

No more additional dependencies are needed, platform-specific artifacts will be resolved automatically via Gradle metadata available since Gradle 5.3.

Platform-specific dependencies are recommended to be used only for non-multiplatform projects that are compiled only for target platform.

<a name="🔗00.3.4.1."></a>

00.3.4.1. JS
==================================================

Kotlin/JS version of `kotlinx.coroutines` is published as 
[`kotlinx-coroutines-core-js`](https://central.sonatype.com/artifact/org.jetbrains.kotlinx/kotlinx-coroutines-core-js/1.7.3)
(follow the link to get the dependency declaration snippet) and as [`kotlinx-coroutines-core`](https://www.npmjs.com/package/kotlinx-coroutines-core) NPM package. 

<a name="🔗00.3.4.2."></a>

00.3.4.2. Native
==================================================

Kotlin/Native version of `kotlinx.coroutines` is published as 
[`kotlinx-coroutines-core-$platform`](https://central.sonatype.com/search?q=kotlinx-coroutines-core&namespace=org.jetbrains.kotlinx) where `$platform` is 
the target Kotlin/Native platform. 
Targets are provided in accordance with [official K/N target support](https://kotlinlang.org/docs/native-target-support.html).

<a name="🔗00.4."></a>

00.4. Building and Contributing
==================================================

See [Contributing Guidelines](https://github.com/Kotlin/kotlinx.coroutines/blob/master/CONTRIBUTING.md).


<a name="🔗01."></a>

📜 01. Coroutines guide
==================================================

Kotlin provides only minimal low-level APIs in its standard library to enable other 
libraries to utilize coroutines. Unlike many other languages with similar capabilities, `async` and `await`
are not keywords in Kotlin and are not even part of its standard library. Moreover, Kotlin's concept
of _suspending function_ provides a safer and less error-prone abstraction for asynchronous 
operations than futures and promises.  

`kotlinx.coroutines` is a rich library for coroutines developed by JetBrains. It contains a number of high-level 
coroutine-enabled primitives that this guide covers, including `launch`, `async`, and others. 

This is a guide about the core features of `kotlinx.coroutines` with a series of examples, divided up into different topics.

In order to use coroutines as well as follow the examples in this guide, you need to add a dependency on the `kotlinx-coroutines-core` module as explained 
[in the project README](https://github.com/Kotlin/kotlinx.coroutines/blob/master/README.md#using-in-your-projects).

<!-- 
*Table of contents*

* [Coroutines basics](coroutines-basics.md)
* [Hands-on: Intro to coroutines and channels](https://play.kotlinlang.org/hands-on/Introduction%20to%20Coroutines%20and%20Channels)
* [Cancellation and timeouts](cancellation-and-timeouts.md)
* [Composing suspending functions](composing-suspending-functions.md)
* [Coroutine context and dispatchers](coroutine-context-and-dispatchers.md)
* [Asynchronous Flow](flow.md)
* [Channels](channels.md)
* [Coroutine exceptions handling](exception-handling.md)
* [Shared mutable state and concurrency](shared-mutable-state-and-concurrency.md)
* [Select expression (experimental)](select-expression.md)
* [Tutorial: Debug coroutines using IntelliJ IDEA](debug-coroutines-with-idea.md)
* [Tutorial: Debug Kotlin Flow using IntelliJ IDEA](debug-flow-with-idea.md)
-->

<a name="🔗01.1."></a>

01.1. Additional references
==================================================

* [Guide to UI programming with coroutines](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/coroutines-guide-ui.md)
* [Coroutines design document (KEEP)](https://github.com/Kotlin/KEEP/blob/master/proposals/coroutines.md)
* [Full kotlinx.coroutines API reference](https://kotlinlang.org/api/kotlinx.coroutines/)
* [Best practices for coroutines in Android](https://developer.android.com/kotlin/coroutines/coroutines-best-practices)
* [Additional Android resources for Kotlin coroutines and flow](https://developer.android.com/kotlin/coroutines/additional-resources)
<!--- TEST_NAME BasicsGuideTest -->

<a name="🔗02."></a>

📜 02. Coroutines basics
==================================================

This section covers basic coroutine concepts.

<a name="🔗02.1."></a>

02.1. Your first coroutine
==================================================

A _coroutine_ is an instance of a suspendable computation. It is conceptually similar to a thread, in the sense that it 
takes a block of code to run that works concurrently with the rest of the code.
However, a coroutine is not bound to any particular thread. It may suspend its execution in one thread and resume in another one. 

Coroutines can be thought of as light-weight threads, but there is a number
of important differences that make their real-life usage very different from threads.

Run the following code to get to your first working coroutine:

```java,kotlin
import kotlinx.coroutines.*

//sampleStart
fun main() = runBlocking { // this: CoroutineScope
    launch { // launch a new coroutine and continue
        delay(1000L) // non-blocking delay for 1 second (default time unit is ms)
        println("World!") // print after delay
    }
    println("Hello") // main coroutine continues while a previous one is delayed
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-basic-01.kt).
>
{type="note"}

You will see the following result:

```text
Hello
World!
```

<!--- TEST -->

Let's dissect what this code does. 

[launch] is a _coroutine builder_. It launches a new coroutine concurrently with 
the rest of the code, which continues to work independently. That's why `Hello` has been printed first.

[delay] is a special _suspending function_. It _suspends_ the coroutine for a specific time. Suspending a coroutine
does not _block_ the underlying thread, but allows other coroutines to run and use the underlying thread for 
their code. 

[runBlocking] is also a coroutine builder that bridges the non-coroutine world of a regular `fun main()` and 
the code with coroutines inside of `runBlocking { ... }` curly braces. This is highlighted in an IDE by
`this: CoroutineScope` hint right after the `runBlocking` opening curly brace.

If you remove or forget `runBlocking` in this code, you'll get an error on the [launch] call, since `launch`
is declared only on the [CoroutineScope]:

```Plain Text
Unresolved reference: launch
```

The name of `runBlocking` means that the thread that runs it (in this case — the main thread) gets _blocked_ for 
the duration of the call, until all the coroutines inside `runBlocking { ... }` complete their execution. You will 
often see `runBlocking` used like that at the very top-level of the application and quite rarely inside the real code, 
as threads are expensive resources and blocking them is inefficient and is often not desired. 

<a name="🔗02.1.1."></a>

02.1.1. Structured concurrency
==================================================

Coroutines follow a principle of 
**structured concurrency** which means that new coroutines can only be launched in a specific [CoroutineScope]
which delimits the lifetime of the coroutine. The above example shows that [runBlocking] establishes the corresponding
scope and that is why the previous example waits until `World!` is printed after a second's delay and only then exits.

In a real application, you will be launching a lot of coroutines. Structured concurrency ensures that they are not
lost and do not leak. An outer scope cannot complete until all its children coroutines complete. 
Structured concurrency also ensures that any errors in the code are properly reported and are never lost.  

<a name="🔗02.2."></a>

02.2. Extract function refactoring
==================================================

Let's extract the block of code inside `launch { ... }` into a separate function. When you
perform "Extract function" refactoring on this code, you get a new function with the `suspend` modifier.
This is your first _suspending function_. Suspending functions can be used inside coroutines
just like regular functions, but their additional feature is that they can, in turn,
use other suspending functions (like `delay` in this example) to _suspend_ execution of a coroutine.

```java,kotlin
import kotlinx.coroutines.*

//sampleStart
fun main() = runBlocking { // this: CoroutineScope
    launch { doWorld() }
    println("Hello")
}

// this is your first suspending function
suspend fun doWorld() {
    delay(1000L)
    println("World!")
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-basic-02.kt).
>
{type="note"}

<!--- TEST
Hello
World!
-->

<a name="🔗02.3."></a>

02.3. Scope builder
==================================================

In addition to the coroutine scope provided by different builders, it is possible to declare your own scope using the
[coroutineScope][_coroutineScope] builder. It creates a coroutine scope and does not complete until all launched children complete.

[runBlocking] and [coroutineScope][_coroutineScope] builders may look similar because they both wait for their body and all its children to complete.
The main difference is that the [runBlocking] method _blocks_ the current thread for waiting,
while [coroutineScope][_coroutineScope] just suspends, releasing the underlying thread for other usages.
Because of that difference, [runBlocking] is a regular function and [coroutineScope][_coroutineScope] is a suspending function.

You can use `coroutineScope` from any suspending function. 
For example, you can move the concurrent printing of `Hello` and `World` into a `suspend fun doWorld()` function: 

```java,kotlin
import kotlinx.coroutines.*

//sampleStart
fun main() = runBlocking {
    doWorld()
}

suspend fun doWorld() = coroutineScope {  // this: CoroutineScope
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello")
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-basic-03.kt).
>
{type="note"}

This code also prints:

```text
Hello
World!
```

<!--- TEST -->

<a name="🔗02.4."></a>

02.4. Scope builder and concurrency
==================================================

A [coroutineScope][_coroutineScope] builder can be used inside any suspending function to perform multiple concurrent operations.
Let's launch two concurrent coroutines inside a `doWorld` suspending function:

```java,kotlin
import kotlinx.coroutines.*

//sampleStart
// Sequentially executes doWorld followed by "Done"
fun main() = runBlocking {
    doWorld()
    println("Done")
}

// Concurrently executes both sections
suspend fun doWorld() = coroutineScope { // this: CoroutineScope
    launch {
        delay(2000L)
        println("World 2")
    }
    launch {
        delay(1000L)
        println("World 1")
    }
    println("Hello")
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-basic-04.kt).
>
{type="note"}

Both pieces of code inside `launch { ... }` blocks execute _concurrently_, with 
`World 1` printed first, after a second from start, and `World 2` printed next, after two seconds from start.
A [coroutineScope][_coroutineScope] in `doWorld` completes only after both are complete, so `doWorld` returns and 
allows `Done` string to be printed only after that:

```text
Hello
World 1
World 2
Done
```

<!--- TEST -->

<a name="🔗02.5."></a>

02.5. An explicit job
==================================================

A [launch] coroutine builder returns a [Job] object that is a handle to the launched coroutine and can be 
used to explicitly wait for its completion. For example, you can wait for completion of the child coroutine
and then print "Done" string:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val job = launch { // launch a new coroutine and keep a reference to its Job
        delay(1000L)
        println("World!")
    }
    println("Hello")
    job.join() // wait until child coroutine completes
    println("Done") 
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-basic-05.kt).
>
{type="note"}

This code produces: 

```text
Hello
World!
Done
```

<!--- TEST -->

<a name="🔗02.6."></a>

02.6. Coroutines are light-weight
==================================================

Coroutines are less resource-intensive than JVM threads. Code that exhausts the
JVM's available memory when using threads can be expressed using coroutines
without hitting resource limits. For example, the following code launches
50,000 distinct coroutines that each waits 5 seconds and then prints a period
('.') while consuming very little memory:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    repeat(50_000) { // launch a lot of coroutines
        launch {
            delay(5000L)
            print(".")
        }
    }
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-basic-06.kt).
>
{type="note"}

<!--- TEST lines.size == 1 && lines[0] == ".".repeat(50_000) -->

If you write the same program using threads (remove `runBlocking`, replace
`launch` with `thread`, and replace `delay` with `Thread.sleep`), it will
consume a lot of memory. Depending on your operating system, JDK version, 
and its settings, it will either throw an out-of-memory error or start threads slowly 
so that there are never too many concurrently running threads. 



<!--- END -->
<a name="🔗03."></a>

📜 03. Coroutines and channels − tutorial
==================================================

In this tutorial, you'll learn how to use coroutines in IntelliJ IDEA to perform network requests without blocking the
underlying thread or callbacks.

> No prior knowledge of coroutines is required, but you're expected to be familiar with basic Kotlin syntax.
>
{type="tip"}

You'll learn:

* Why and how to use suspending functions to perform network requests.
* How to send requests concurrently using coroutines.
* How to share information between different coroutines using channels.

For network requests, you'll need the [Retrofit](https://square.github.io/retrofit/) library, but the approach shown in
this tutorial works similarly for any other libraries that support coroutines.

> You can find solutions for all of the tasks on the `solutions` branch of the [project's repository](http://github.com/kotlin-hands-on/intro-coroutines).
>
{type="tip"}

<a name="🔗03.1."></a>

03.1. Before you start
==================================================

1. Download and install the latest version of [IntelliJ IDEA](https://www.jetbrains.com/idea/download/index.html).
2. Clone the [project template](http://github.com/kotlin-hands-on/intro-coroutines) by choosing **Get from VCS** on the
   Welcome screen or selecting **File | New | Project from Version Control**.

   You can also clone it from the command line:

   ```Bash
   git clone https://github.com/kotlin-hands-on/intro-coroutines
   ```

<a name="🔗03.1.1."></a>

03.1.1. Generate a GitHub developer token
==================================================

You'll be using the GitHub API in your project. To get access, provide your GitHub account name and either a password or a
token. If you have two-factor authentication enabled, a token will be enough.

Generate a new GitHub token to use the GitHub API with [your account](https://github.com/settings/tokens/new):

1. Specify the name of your token, for example, `coroutines-tutorial`:

   ![Generate a new GitHub token](https://kotlinlang.org/docs/images/generating-token.png){width=700}

2. Do not select any scopes. Click **Generate token** at the bottom of the page.
3. Copy the generated token.

<a name="🔗03.1.2."></a>

03.1.2. Run the code
==================================================

The program loads the contributors for all of the repositories under the given organization (named “kotlin” by default).
Later you'll add logic to sort the users by the number of their contributions.

1. Open the `src/contributors/main.kt` file and run the `main()` function. You'll see the following window:

   ![First window](https://kotlinlang.org/docs/images/initial-window.png){width=500}

   If the font is too small, adjust it by changing the value of `setDefaultFontSize(18f)` in the `main()` function.

2. Provide your GitHub username and token (or password) in the corresponding fields.
3. Make sure that the _BLOCKING_ option is selected in the _Variant_ dropdown menu.
4. Click _Load contributors_. The UI should freeze for some time and then show the list of contributors.
5. Open the program output to ensure the data has been loaded. The list of contributors is logged after each successful request.

There are different ways of implementing this logic: by using [blocking requests](#blocking-requests)
or [callbacks](#callbacks). You'll compare these solutions with one that uses [coroutines](#coroutines) and see how
[channels](#channels) can be used to share information between different coroutines.

<a name="🔗03.2."></a>

03.2. Blocking requests
==================================================

You will use the [Retrofit](https://square.github.io/retrofit/) library to perform HTTP requests to GitHub. It allows
requesting the list of repositories under the given organization and the list of contributors for each repository:

```java,kotlin
interface GitHubService {
    @GET("orgs/{org}/repos?per_page=100")
    fun getOrgReposCall(
        @Path("org") org: String
    ): Call<List<Repo>>

    @GET("repos/{owner}/{repo}/contributors?per_page=100")
    fun getRepoContributorsCall(
        @Path("owner") owner: String,
        @Path("repo") repo: String
    ): Call<List<User>>
}
```

This API is used by the `loadContributorsBlocking()` function to fetch the list of contributors for the given organization.

1. Open `src/tasks/Request1Blocking.kt` to see its implementation:

    ```java,kotlin
    fun loadContributorsBlocking(service: GitHubService, req: RequestData): List<User> {
        val repos = service
            .getOrgReposCall(req.org)   // #1
            .execute()                  // #2
            .also { logRepos(req, it) } // #3
            .body() ?: emptyList()      // #4
    
        return repos.flatMap { repo ->
            service
                .getRepoContributorsCall(req.org, repo.name) // #1
                .execute()                                   // #2
                .also { logUsers(repo, it) }                 // #3
                .bodyList()                                  // #4
        }.aggregate()
    }
    ```

    * At first, you get a list of the repositories under the given organization and store it in the `repos` list. Then for
      each repository, the list of contributors is requested, and all of the lists are merged into one final list of
      contributors.
    * `getOrgReposCall()` and `getRepoContributorsCall()` both return an instance of the `*Call` class (`#1`). At this point,
      no request is sent.
    * `*Call.execute()` is then invoked to perform the request (`#2`). `execute()` is a synchronous call that blocks the
      underlying thread.
    * When you get the response, the result is logged by calling the specific `logRepos()` and `logUsers()` functions (`#3`).
      If the HTTP response contains an error, this error will be logged here.
    * Finally, get the response's body, which contains the data you need. For this tutorial, you'll use an empty list as a
      result in case there is an error, and you'll log the corresponding error (`#4`).

2. To avoid repeating `.body() ?: emptyList()`, an extension function `bodyList()` is declared:

    ```java,kotlin
    fun <T> Response<List<T>>.bodyList(): List<T> {
        return body() ?: emptyList()
    }
    ```  

3. Run the program again and take a look at the system output in IntelliJ IDEA. It should have something like this:

    ```text
    1770 [AWT-EventQueue-0] INFO  Contributors - kotlin: loaded 40 repos
    2025 [AWT-EventQueue-0] INFO  Contributors - kotlin-examples: loaded 23 contributors
    2229 [AWT-EventQueue-0] INFO  Contributors - kotlin-koans: loaded 45 contributors
    ...
    ```

    * The first item on each line is the number of milliseconds that have passed since the program started, then the thread
      name in square brackets. You can see from which thread the loading request is called.
    * The final item on each line is the actual message: how many repositories or contributors were loaded.

    This log output demonstrates that all of the results were logged from the main thread. When you run the code with a _BLOCKING_
    option, the window freezes and doesn't react to input until the loading is finished. All of the requests are executed from
    the same thread as the one called `loadContributorsBlocking()` is from, which is the main UI thread (in Swing, it's an AWT
    event dispatching thread). This main thread becomes blocked, and that's why the UI is frozen:

    ![The blocked main thread](https://kotlinlang.org/docs/images/blocking.png){width=700}
    
    After the list of contributors has loaded, the result is updated.

4. In `src/contributors/Contributors.kt`, find the `loadContributors()` function responsible for choosing how
   the contributors are loaded and look at how `loadContributorsBlocking()` is called:

    ```java,kotlin
    when (getSelectedVariant()) {
        BLOCKING -> { // Blocking UI thread
            val users = loadContributorsBlocking(service, req)
            updateResults(users, startTime)
        }
    }
    ```

    * The `updateResults()` call goes right after the `loadContributorsBlocking()` call.
    * `updateResults()` updates the UI, so it must always be called from the UI thread.
    * Since `loadContributorsBlocking()` is also called from the UI thread, the UI thread becomes blocked and the UI is
      frozen.

<a name="🔗03.2.1."></a>

03.2.1. Task 1
==================================================

The first task helps you familiarize yourself with the task domain. Currently, each contributor's name is repeated
several times, once for every project they have taken part in. Implement the `aggregate()` function combining the users
so that each contributor is added only once. The `User.contributions` property should contain the total number of
contributions of the given user to _all_ the projects. The resulting list should be sorted in descending order according
to the number of contributions.

Open `src/tasks/Aggregation.kt` and implement the `List<User>.aggregate()` function. Users should be sorted by the total
number of their contributions.

The corresponding test file `test/tasks/AggregationKtTest.kt` shows an example of the expected result.

> You can jump between the source code and the test class automatically by using the [IntelliJ IDEA shortcut](https://www.jetbrains.com/help/idea/create-tests.html#test-code-navigation)
> `Ctrl+Shift+T` / `⇧ ⌘ T`.
>
{type="tip"}

After implementing this task, the resulting list for the "kotlin" organization should be similar to the following:

![The list for the "kotlin" organization](https://kotlinlang.org/docs/images/aggregate.png){width=500}

<a name="🔗03.2.1.1."></a>

03.2.1.1. Solution for task 1
==================================================

1. To group users by login, use [`groupBy()`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/group-by.html),
   which returns a map from a login to all occurrences of the user with this login in different repositories.
2. For each map entry, count the total number of contributions for each user and create a new instance of the `User` class
   by the given name and total of contributions.
3. Sort the resulting list in descending order:

    ```java,kotlin
    fun List<User>.aggregate(): List<User> =
        groupBy { it.login }
            .map { (login, group) -> User(login, group.sumOf { it.contributions }) }
            .sortedByDescending { it.contributions }
    ```

An alternative solution is to use the [`groupingBy()`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/grouping-by.html)
function instead of `groupBy()`.

<a name="🔗03.3."></a>

03.3. Callbacks
==================================================

The previous solution works, but it blocks the thread and therefore freezes the UI. A traditional approach that avoids this
is to use _callbacks_.

Instead of calling the code that should be invoked right after the operation is completed, you can extract it
into a separate callback, often a lambda, and pass that lambda to the caller in order for it to be called later.

To make the UI responsive, you can either move the whole computation to a separate thread or switch to the Retrofit API
which uses callbacks instead of blocking calls.

<a name="🔗03.3.1."></a>

03.3.1. Use a background thread
==================================================

1. Open `src/tasks/Request2Background.kt` and see its implementation. First, the whole computation is moved to a different
   thread. The `thread()` function starts a new thread:

    ```java,kotlin
    thread {
        loadContributorsBlocking(service, req)
    }
    ```

    Now that all of the loading has been moved to a separate thread, the main thread is free and can be occupied by other
    tasks:

    ![The freed main thread](https://kotlinlang.org/docs/images/background.png){width=700}

2. The signature of the `loadContributorsBackground()` function changes. It takes an `updateResults()`
   callback as the last argument to call it after all the loading completes:

    ```java,kotlin
    fun loadContributorsBackground(
        service: GitHubService, req: RequestData,
        updateResults: (List<User>) -> Unit
    )
    ```

3. Now when the `loadContributorsBackground()` is called, the `updateResults()` call goes in the callback, not immediately
   afterward as it did before:

    ```java,kotlin
    loadContributorsBackground(service, req) { users ->
        SwingUtilities.invokeLater {
            updateResults(users, startTime)
        }
    }
    ```

    By calling `SwingUtilities.invokeLater`, you ensure that the `updateResults()` call, which updates the results,
    happens on the main UI thread (AWT event dispatching thread).

However, if you try to load the contributors via the `BACKGROUND` option, you can see that the list is updated but
nothing changes.

<a name="🔗03.3.2."></a>

03.3.2. Task 2
==================================================

Fix the `loadContributorsBackground()` function in `src/tasks/Request2Background.kt` so that the resulting list is shown
in the UI.

<a name="🔗03.3.2.1."></a>

03.3.2.1. Solution for task 2
==================================================

If you try to load the contributors, you can see in the log that the contributors are loaded but the result isn't displayed.
To fix this, call `updateResults()` on the resulting list of users:

```java,kotlin
thread {
    updateResults(loadContributorsBlocking(service, req))
}
```

Make sure to call the logic passed in the callback explicitly. Otherwise, nothing will happen.

<a name="🔗03.3.3."></a>

03.3.3. Use the Retrofit callback API
==================================================

In the previous solution, the whole loading logic is moved to the background thread, but that still isn't the best use of
resources. All of the loading requests go sequentially and the thread is blocked while waiting for the loading result,
while it could have been occupied by other tasks. Specifically, the thread could start loading another request to
receive the entire result earlier.

Handling the data for each repository should then be divided into two parts: loading and processing the
resulting response. The second _processing_ part should be extracted into a callback.

The loading for each repository can then be started before the result for the previous repository is received (and the
corresponding callback is called):

![Using callback API](https://kotlinlang.org/docs/images/callbacks.png){width=700}

The Retrofit callback API can help achieve this. The `Call.enqueue()` function starts an HTTP request and takes a
callback as an argument. In this callback, you need to specify what needs to be done after each request.

Open `src/tasks/Request3Callbacks.kt` and see the implementation of `loadContributorsCallbacks()` that uses this API:

```java,kotlin
fun loadContributorsCallbacks(
    service: GitHubService, req: RequestData,
    updateResults: (List<User>) -> Unit
) {
    service.getOrgReposCall(req.org).onResponse { responseRepos ->  // #1
        logRepos(req, responseRepos)
        val repos = responseRepos.bodyList()

        val allUsers = mutableListOf<User>()
        for (repo in repos) {
            service.getRepoContributorsCall(req.org, repo.name)
                .onResponse { responseUsers ->  // #2
                    logUsers(repo, responseUsers)
                    val users = responseUsers.bodyList()
                    allUsers += users
                }
            }
        }
        // TODO: Why doesn't this code work? How to fix that?
        updateResults(allUsers.aggregate())
    }
```

* For convenience, this code fragment uses the `onResponse()` extension function declared in the same file. It takes a
  lambda as an argument rather than an object expression.
* The logic for handling the responses is extracted into callbacks: the corresponding lambdas start at lines `#1` and `#2`.

However, the provided solution doesn't work. If you run the program and load contributors by choosing the _CALLBACKS_
option, you'll see that nothing is shown. However, the tests that immediately return the result pass.

Think about why the given code doesn't work as expected and try to fix it, or see the solutions below.

<a name="🔗03.3.4."></a>

03.3.4. Task 3 (optional)
==================================================

Rewrite the code in the `src/tasks/Request3Callbacks.kt` file so that the loaded list of contributors is shown.

<a name="🔗03.3.4.1."></a>

03.3.4.1. The first attempted solution for task 3
==================================================

In the current solution, many requests are started concurrently, which decreases the total loading time. However,
the result isn't loaded. This is because the `updateResults()` callback is called right after all of the loading requests are started,
before the `allUsers` list has been filled with the data.

You could try to fix this with a change like the following:

```java,kotlin
val allUsers = mutableListOf<User>()
for ((index, repo) in repos.withIndex()) {   // #1
    service.getRepoContributorsCall(req.org, repo.name)
        .onResponse { responseUsers ->
            logUsers(repo, responseUsers)
            val users = responseUsers.bodyList()
            allUsers += users
            if (index == repos.lastIndex) {    // #2
                updateResults(allUsers.aggregate())
            }
        }
}
```

* First, you iterate over the list of repos with an index (`#1`).
* Then, from each callback, you check whether it's the last iteration (`#2`).
* And if that's the case, the result is updated.

However, this code also fails to achieve our objective. Try to find the answer yourself, or see the solution below.

<a name="🔗03.3.4.2."></a>

03.3.4.2. The second attempted solution for task 3
==================================================

Since the loading requests are started concurrently, there's no guarantee that the result for the last one comes last. The
results can come in any order.

Thus, if you compare the current index with the `lastIndex` as a condition for completion, you risk losing the results for
some repos.

If the request that processes the last repo returns faster than some prior requests (which is likely to happen), all of the
results for requests that take more time will be lost.

One way to fix this is to introduce an index and check whether all of the repositories have already been processed:

```java,kotlin
val allUsers = Collections.synchronizedList(mutableListOf<User>())
val numberOfProcessed = AtomicInteger()
for (repo in repos) {
    service.getRepoContributorsCall(req.org, repo.name)
        .onResponse { responseUsers ->
            logUsers(repo, responseUsers)
            val users = responseUsers.bodyList()
            allUsers += users
            if (numberOfProcessed.incrementAndGet() == repos.size) {
                updateResults(allUsers.aggregate())
            }
        }
}
```

This code uses a synchronized version of the list and `AtomicInteger()` because, in general, there's no guarantee that
different callbacks that process `getRepoContributors()` requests will always be called from the same thread.

<a name="🔗03.3.4.3."></a>

03.3.4.3. The third attempted solution for task 3
==================================================

An even better solution is to use the `CountDownLatch` class. It stores a counter initialized with the number of
repositories. This counter is decremented after processing each repository. It then waits until the latch is counted
down to zero before updating the results:

```java,kotlin
val countDownLatch = CountDownLatch(repos.size)
for (repo in repos) {
    service.getRepoContributorsCall(req.org, repo.name)
        .onResponse { responseUsers ->
            // processing repository
            countDownLatch.countDown()
        }
}
countDownLatch.await()
updateResults(allUsers.aggregate())
```

The result is then updated from the main thread. This is more direct than delegating the logic to the child threads.

After reviewing these three attempts at a solution, you can see that writing correct code with callbacks is non-trivial
and error-prone, especially when several underlying threads and synchronization occur.

> As an additional exercise, you can implement the same logic using a reactive approach with the RxJava library. All of the
> necessary dependencies and solutions for using RxJava can be found in a separate `rx` branch. It is also possible to
> complete this tutorial and implement or check the proposed Rx versions for a proper comparison.
>
{type="tip"}

<a name="🔗03.4."></a>

03.4. Suspending functions
==================================================

You can implement the same logic using suspending functions. Instead of returning `Call<List<Repo>>`, define the API
call as a [suspending function](composing-suspending-functions.md) as follows:

```java,kotlin
interface GitHubService {
    @GET("orgs/{org}/repos?per_page=100")
    suspend fun getOrgRepos(
        @Path("org") org: String
    ): List<Repo>
}
```

* `getOrgRepos()` is defined as a `suspend` function. When you use a suspending function to perform a request, the
  underlying thread isn't blocked. More details about how this works will come in later sections.
* `getOrgRepos()` returns the result directly instead of returning a `Call`. If the result is unsuccessful, an
  exception is thrown.

Alternatively, Retrofit allows returning the result wrapped in `Response`. In this case, the result body is
provided, and it is possible to check for errors manually. This tutorial uses the versions that return `Response`.

In `src/contributors/GitHubService.kt`, add the following declarations to the `GitHubService` interface:

```java,kotlin
interface GitHubService {
    // getOrgReposCall & getRepoContributorsCall declarations

    @GET("orgs/{org}/repos?per_page=100")
    suspend fun getOrgRepos(
        @Path("org") org: String
    ): Response<List<Repo>>

    @GET("repos/{owner}/{repo}/contributors?per_page=100")
    suspend fun getRepoContributors(
        @Path("owner") owner: String,
        @Path("repo") repo: String
    ): Response<List<User>>
}
```

<a name="🔗03.4.1."></a>

03.4.1. Task 4
==================================================

Your task is to change the code of the function that loads contributors to make use of two new suspending functions,
`getOrgRepos()` and `getRepoContributors()`. The new `loadContributorsSuspend()` function is marked as `suspend` to use the
new API.

> Suspending functions can't be called everywhere. Calling a suspending function from `loadContributorsBlocking()` will
> result in an error with the message "Suspend function 'getOrgRepos' should be called only from a coroutine or another
> suspend function".
>
{type="note"}

1. Copy the implementation of `loadContributorsBlocking()` that is defined in `src/tasks/Request1Blocking.kt`
   into the `loadContributorsSuspend()` that is defined in `src/tasks/Request4Suspend.kt`.
2. Modify the code so that the new suspending functions are used instead of the ones that return `Call`s.
3. Run the program by choosing the _SUSPEND_ option and ensure that the UI is still responsive while the GitHub requests
   are performed.

<a name="🔗03.4.1.1."></a>

03.4.1.1. Solution for task 4
==================================================

Replace `.getOrgReposCall(req.org).execute()` with `.getOrgRepos(req.org)` and repeat the same replacement for the
second "contributors" request:

```java,kotlin
suspend fun loadContributorsSuspend(service: GitHubService, req: RequestData): List<User> {
    val repos = service
        .getOrgRepos(req.org)
        .also { logRepos(req, it) }
        .bodyList()

    return repos.flatMap { repo ->
        service.getRepoContributors(req.org, repo.name)
            .also { logUsers(repo, it) }
            .bodyList()
    }.aggregate()
}
```

* `loadContributorsSuspend()` should be defined as a `suspend` function.
* You no longer need to call `execute`, which returned the `Response` before, because now the API functions return
  the `Response` directly. Note that this detail is specific to the Retrofit library. With other libraries, the API will be different,
  but the concept is the same.

<a name="🔗03.5."></a>

03.5. Coroutines
==================================================

The code with suspending functions looks similar to the "blocking" version. The major difference from the blocking version
is that instead of blocking the thread, the coroutine is suspended:

```text
block -> suspend
thread -> coroutine
```

> Coroutines are often called lightweight threads because you can run code on coroutines, similar to how you run code on
> threads. The operations that were blocking before (and had to be avoided) can now suspend the coroutine instead.
>
{type="note"}

<a name="🔗03.5.1."></a>

03.5.1. Starting a new coroutine
==================================================

If you look at how `loadContributorsSuspend()` is used in `src/contributors/Contributors.kt`, you can see that it's
called inside `launch`. `launch` is a library function that takes a lambda as an argument:

```java,kotlin
launch {
    val users = loadContributorsSuspend(req)
    updateResults(users, startTime)
}
```

Here `launch` starts a new computation that is responsible for loading the data and showing the results. The computation
is suspendable – when performing network requests, it is suspended and releases the underlying thread.
When the network request returns the result, the computation is resumed.

Such a suspendable computation is called a _coroutine_. So, in this case, `launch` _starts a new coroutine_ responsible
for loading data and showing the results.

Coroutines run on top of threads and can be suspended. When a coroutine is suspended, the
corresponding computation is paused, removed from the thread, and stored in memory. Meanwhile, the thread is free to be
occupied by other tasks:

![Suspending coroutines](https://kotlinlang.org/docs/images/suspension-process.gif){width=700}

When the computation is ready to be continued, it is returned to a thread (not necessarily the same one).

In the `loadContributorsSuspend()` example, each "contributors" request now waits for the result using the suspension
mechanism. First, the new request is sent. Then, while waiting for the response, the whole "load contributors" coroutine
that was started by the `launch` function is suspended.

The coroutine resumes only after the corresponding response is received:

![Suspending request](https://kotlinlang.org/docs/images/suspend-requests.png){width=700}

While the response is waiting to be received, the thread is free to be occupied by other tasks. The UI stays responsive,
despite all the requests taking place on the main UI thread:

1. Run the program using the _SUSPEND_ option. The log confirms that all of the requests are sent to the main UI thread:

    ```text
    2538 [AWT-EventQueue-0 @coroutine#1] INFO  Contributors - kotlin: loaded 30 repos
    2729 [AWT-EventQueue-0 @coroutine#1] INFO  Contributors - ts2kt: loaded 11 contributors
    3029 [AWT-EventQueue-0 @coroutine#1] INFO  Contributors - kotlin-koans: loaded 45 contributors
    ...
    11252 [AWT-EventQueue-0 @coroutine#1] INFO  Contributors - kotlin-coroutines-workshop: loaded 1 contributors
    ```

2. The log can show you which coroutine the corresponding code is running on. To enable it, open **Run | Edit configurations**
   and add the `-Dkotlinx.coroutines.debug` VM option:

   ![Edit run configuration](https://kotlinlang.org/docs/images/run-configuration.png){width=500}

   The coroutine name will be attached to the thread name while `main()` is run with this option. You can also
   modify the template for running all of the Kotlin files and enable this option by default.

Now all of the code runs on one coroutine, the "load contributors" coroutine mentioned above, denoted as `@coroutine#1`.
While waiting for the result, you shouldn't reuse the thread for sending other requests because the code is
written sequentially. The new request is sent only when the previous result is received.

Suspending functions treat the thread fairly and don't block it for "waiting". However, this doesn't yet bring any concurrency
into the picture.

<a name="🔗03.6."></a>

03.6. Concurrency
==================================================

Kotlin coroutines are much less resource-intensive than threads.
Each time you want to start a new computation asynchronously, you can create a new coroutine instead.

To start a new coroutine, use one of the main _coroutine builders_: `launch`, `async`, or `runBlocking`. Different
libraries can define additional coroutine builders.

`async` starts a new coroutine and returns a `Deferred` object. `Deferred` represents a concept known by other names
such as `Future` or `Promise`. It stores a computation, but it _defers_ the moment you get the final result;
it _promises_ the result sometime in the _future_.

The main difference between `async` and `launch` is that `launch` is used to start a computation that isn't expected to
return a specific result. `launch` returns a `Job` that represents the coroutine. It is possible to wait until it completes
by calling `Job.join()`.

`Deferred` is a generic type that extends `Job`. An `async` call can return a `Deferred<Int>` or a `Deferred<CustomType>`,
depending on what the lambda returns (the last expression inside the lambda is the result).

To get the result of a coroutine, you can call `await()` on the `Deferred` instance. While waiting for the result,
the coroutine that this `await()` is called from is suspended:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    val deferred: Deferred<Int> = async {
        loadData()
    }
    println("waiting...")
    println(deferred.await())
}

suspend fun loadData(): Int {
    println("loading...")
    delay(1000L)
    println("loaded!")
    return 42
}
```

`runBlocking` is used as a bridge between regular and suspending functions, or between the blocking and non-blocking worlds. It works
as an adaptor for starting the top-level main coroutine. It is intended primarily to be used in `main()` functions and
tests.

> Watch [this video](https://www.youtube.com/watch?v=zEZc5AmHQhk) for a better understanding of coroutines.
>
{type="tip"}

If there is a list of deferred objects, you can call `awaitAll()` to await the results of all of them:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    val deferreds: List<Deferred<Int>> = (1..3).map {
        async {
            delay(1000L * it)
            println("Loading $it")
            it
        }
    }
    val sum = deferreds.awaitAll().sum()
    println("$sum")
}
```

When each "contributors" request is started in a new coroutine, all of the requests are started asynchronously. A new request
can be sent before the result for the previous one is received:

![Concurrent coroutines](https://kotlinlang.org/docs/images/concurrency.png){width=700}

The total loading time is approximately the same as in the _CALLBACKS_ version, but it doesn't need any callbacks.
What's more, `async` explicitly emphasizes which parts run concurrently in the code.

<a name="🔗03.6.1."></a>

03.6.1. Task 5
==================================================

In the `Request5Concurrent.kt` file, implement a `loadContributorsConcurrent()` function by using the
previous `loadContributorsSuspend()` function.

<a name="🔗03.6.1.1."></a>

03.6.1.1. Tip for task 5
==================================================

You can only start a new coroutine inside a coroutine scope. Copy the content
from `loadContributorsSuspend()` to the `coroutineScope` call so that you can call `async` functions there:

```java,kotlin
suspend fun loadContributorsConcurrent(
    service: GitHubService,
    req: RequestData
): List<User> = coroutineScope {
    // ...
}
```

Base your solution on the following scheme:

```java,kotlin
val deferreds: List<Deferred<List<User>>> = repos.map { repo ->
    async {
        // load contributors for each repo
    }
}
deferreds.awaitAll() // List<List<User>>
```

<a name="🔗03.6.1.2."></a>

03.6.1.2. Solution for task 5
==================================================

Wrap each "contributors" request with `async` to create as many coroutines as there are repositories. `async`
returns `Deferred<List<User>>`. This is not an issue because creating new coroutines is not very resource-intensive, so you can
create as many as you need.

1. You can no longer use `flatMap` because the `map` result is now a list of `Deferred` objects, not a list of lists.
   `awaitAll()` returns `List<List<User>>`, so call `flatten().aggregate()` to get the result:

    ```java,kotlin
    suspend fun loadContributorsConcurrent(
        service: GitHubService, 
        req: RequestData
    ): List<User> = coroutineScope {
        val repos = service
            .getOrgRepos(req.org)
            .also { logRepos(req, it) }
            .bodyList()
    
        val deferreds: List<Deferred<List<User>>> = repos.map { repo ->
            async {
                service.getRepoContributors(req.org, repo.name)
                    .also { logUsers(repo, it) }
                    .bodyList()
            }
        }
        deferreds.awaitAll().flatten().aggregate()
    }
    ```

2. Run the code and check the log. All of the coroutines still run on the main UI thread because
   multithreading hasn't been employed yet, but you can already see the benefits of running coroutines concurrently.
3. To change this code to run "contributors" coroutines on different threads from the common thread pool,
   specify `Dispatchers.Default` as the context argument for the `async` function:

    ```java,kotlin
    async(Dispatchers.Default) { }
    ```

    * `CoroutineDispatcher` determines what thread or threads the corresponding coroutine should be run on. If you don't
      specify one as an argument, `async` will use the dispatcher from the outer scope.
    * `Dispatchers.Default` represents a shared pool of threads on the JVM. This pool provides a means for parallel execution.
      It consists of as many threads as there are CPU cores available, but it will still have two threads if there's only one core.

4. Modify the code in the `loadContributorsConcurrent()` function to start new coroutines on different threads from the
   common thread pool. Also, add additional logging before sending the request:

    ```java,kotlin
    async(Dispatchers.Default) {
        log("starting loading for ${repo.name}")
        service.getRepoContributors(req.org, repo.name)
            .also { logUsers(repo, it) }
            .bodyList()
    }
    ```

5. Run the program once again. In the log, you can see that each coroutine can be started on one thread from the
   thread pool and resumed on another:

    ```text
    1946 [DefaultDispatcher-worker-2 @coroutine#4] INFO  Contributors - starting loading for kotlin-koans
    1946 [DefaultDispatcher-worker-3 @coroutine#5] INFO  Contributors - starting loading for dokka
    1946 [DefaultDispatcher-worker-1 @coroutine#3] INFO  Contributors - starting loading for ts2kt
    ...
    2178 [DefaultDispatcher-worker-1 @coroutine#4] INFO  Contributors - kotlin-koans: loaded 45 contributors
    2569 [DefaultDispatcher-worker-1 @coroutine#5] INFO  Contributors - dokka: loaded 36 contributors
    2821 [DefaultDispatcher-worker-2 @coroutine#3] INFO  Contributors - ts2kt: loaded 11 contributors
    ```

   For instance, in this log excerpt, `coroutine#4` is started on the `worker-2` thread and continued on the
   `worker-1` thread.

In `src/contributors/Contributors.kt`, check the implementation of the _CONCURRENT_ option:

1. To run the coroutine only on the main UI thread, specify `Dispatchers.Main` as an argument:

    ```java,kotlin
    launch(Dispatchers.Main) {
        updateResults()
    }
    ```

    * If the main thread is busy when you start a new coroutine on it,
      the coroutine becomes suspended and scheduled for execution on this thread. The coroutine will only resume when the
      thread becomes free.
    * It's considered good practice to use the dispatcher from the outer scope rather than explicitly specifying it on each
      end-point. If you define `loadContributorsConcurrent()` without passing `Dispatchers.Default` as an
      argument, you can call this function in any context: with a `Default` dispatcher, with
      the main UI thread, or with a custom dispatcher.
    * As you'll see later, when calling `loadContributorsConcurrent()` from tests, you can call it in the context
      with `TestDispatcher`, which simplifies testing. That makes this solution much more flexible.

2. To specify the dispatcher on the caller side, apply the following change to the project while
   letting `loadContributorsConcurrent` start coroutines in the inherited context:

    ```java,kotlin
    launch(Dispatchers.Default) {
        val users = loadContributorsConcurrent(service, req)
        withContext(Dispatchers.Main) {
            updateResults(users, startTime)
        }
    }
    ```

    * `updateResults()` should be called on the main UI thread, so you call it with the context of `Dispatchers.Main`.
    * `withContext()` calls the given code with the specified coroutine context, is suspended until it completes, and returns
      the result. An alternative but more verbose way to express this would be to start a new coroutine and explicitly
      wait (by suspending) until it completes: `launch(context) { ... }.join()`.

3. Run the code and ensure that the coroutines are executed on the threads from the thread pool.

<a name="🔗03.7."></a>

03.7. Structured concurrency
==================================================

* The _coroutine scope_ is responsible for the structure and parent-child relationships between different coroutines. New
  coroutines usually need to be started inside a scope.
* The _coroutine context_ stores additional technical information used to run a given coroutine, like the coroutine custom
  name, or the dispatcher specifying the threads the coroutine should be scheduled on.

When `launch`, `async`, or `runBlocking` are used to start a new coroutine, they automatically create the corresponding
scope. All of these functions take a lambda with a receiver as an argument, and `CoroutineScope` is the implicit receiver type:

```java,kotlin
launch { /* this: CoroutineScope */ }
```

* New coroutines can only be started inside a scope.
* `launch` and `async` are declared as extensions to `CoroutineScope`, so an implicit or explicit receiver must always
  be passed when you call them.
* The coroutine started by `runBlocking` is the only exception because `runBlocking` is defined as a top-level function.
  But because it blocks the current thread, it's intended primarily to be used in `main()` functions and tests as a bridge
  function.

A new coroutine inside `runBlocking`, `launch`, or `async` is started automatically inside the scope:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking { /* this: CoroutineScope */
    launch { /* ... */ }
    // the same as:   
    this.launch { /* ... */ }
}
```

When you call `launch` inside `runBlocking`, it's called as an extension to the implicit receiver of
the `CoroutineScope` type. Alternatively, you could explicitly write `this.launch`.

The nested coroutine (started by `launch` in this example) can be considered as a child of the outer coroutine (started
by `runBlocking`). This "parent-child" relationship works through scopes; the child coroutine is started from the scope
corresponding to the parent coroutine.

It's possible to create a new scope without starting a new coroutine, by using the `coroutineScope` function.
To start new coroutines in a structured way inside a `suspend` function without access to the outer scope, you can create
a new coroutine scope that automatically becomes a child of the outer scope that this `suspend` function is called from.
`loadContributorsConcurrent()`is a good example.

You can also start a new coroutine from the global scope using `GlobalScope.async` or `GlobalScope.launch`.
This will create a top-level "independent" coroutine.

The mechanism behind the structure of the coroutines is called _structured concurrency_. It provides the following
benefits over global scopes:

* The scope is generally responsible for child coroutines, whose lifetime is attached to the lifetime of the scope.
* The scope can automatically cancel child coroutines if something goes wrong or a user changes their mind and decides
  to revoke the operation.
* The scope automatically waits for the completion of all child coroutines.
  Therefore, if the scope corresponds to a coroutine, the parent coroutine does not complete until all the coroutines
  launched in its scope have completed.

When using `GlobalScope.async`, there is no structure that binds several coroutines to a smaller scope.
Coroutines started from the global scope are all independent – their lifetime is limited only by the lifetime of the
whole application. It's possible to store a reference to the coroutine started from the global scope and wait for its
completion or cancel it explicitly, but that won't happen automatically as it would with structured concurrency.

<a name="🔗03.7.1."></a>

03.7.1. Canceling the loading of contributors
==================================================

Create two versions of the function that loads the list of contributors. Compare how both versions behave when you try to
cancel the parent coroutine. The first version will use `coroutineScope` to start all of the child coroutines,
whereas the second will use `GlobalScope`.

1. In `Request5Concurrent.kt`, add a 3-second delay to the `loadContributorsConcurrent()` function: 

   ```java,kotlin
   suspend fun loadContributorsConcurrent(
       service: GitHubService, 
       req: RequestData
   ): List<User> = coroutineScope {
       // ...
       async {
           log("starting loading for ${repo.name}")
           delay(3000)
           // load repo contributors
       }
       // ...
   }
   ```
   
   The delay affects all of the coroutines that send requests, so that there's enough time to cancel the loading
   after the coroutines are started but before the requests are sent.

2. Create the second version of the loading function: copy the implementation of `loadContributorsConcurrent()` to
   `loadContributorsNotCancellable()` in `Request5NotCancellable.kt` and then remove the creation of a new `coroutineScope`.
3. The `async` calls now fail to resolve, so start them by using `GlobalScope.async`:

    ```java,kotlin
    suspend fun loadContributorsNotCancellable(
        service: GitHubService,
        req: RequestData
    ): List<User> {   // #1
        // ...
        GlobalScope.async {   // #2
            log("starting loading for ${repo.name}")
            // load repo contributors
        }
        // ...
        return deferreds.awaitAll().flatten().aggregate()  // #3
    }
    ```

    * The function now returns the result directly, not as the last expression inside the lambda (lines `#1` and `#3`).
    * All of the "contributors" coroutines are started inside the `GlobalScope`, not as children of the coroutine scope
      (line `#2`).

4. Run the program and choose the _CONCURRENT_ option to load the contributors.
5. Wait until all of the "contributors" coroutines are started, and then click _Cancel_. The log shows no new results,
   which means that all of the requests were indeed canceled:

    ```text
    2896 [AWT-EventQueue-0 @coroutine#1] INFO  Contributors - kotlin: loaded 40 repos
    2901 [DefaultDispatcher-worker-2 @coroutine#4] INFO  Contributors - starting loading for kotlin-koans
    ...
    2909 [DefaultDispatcher-worker-5 @coroutine#36] INFO  Contributors - starting loading for mpp-example
    /* click on 'cancel' */
    /* no requests are sent */
    ```

6. Repeat step 5, but this time choose the `NOT_CANCELLABLE` option:

    ```text
    2570 [AWT-EventQueue-0 @coroutine#1] INFO  Contributors - kotlin: loaded 30 repos
    2579 [DefaultDispatcher-worker-1 @coroutine#4] INFO  Contributors - starting loading for kotlin-koans
    ...
    2586 [DefaultDispatcher-worker-6 @coroutine#36] INFO  Contributors - starting loading for mpp-example
    /* click on 'cancel' */
    /* but all the requests are still sent: */
    6402 [DefaultDispatcher-worker-5 @coroutine#4] INFO  Contributors - kotlin-koans: loaded 45 contributors
    ...
    9555 [DefaultDispatcher-worker-8 @coroutine#36] INFO  Contributors - mpp-example: loaded 8 contributors
    ```

    In this case, no coroutines are canceled, and all the requests are still sent.

7. Check how the cancellation is triggered in the "contributors" program. When the _Cancel_ button is clicked,
   the main "loading" coroutine is explicitly canceled and the child coroutines are canceled automatically:

    ```java,kotlin
    interface Contributors {
    
        fun loadContributors() {
            // ...
            when (getSelectedVariant()) {
                CONCURRENT -> {
                    launch {
                        val users = loadContributorsConcurrent(service, req)
                        updateResults(users, startTime)
                    }.setUpCancellation()      // #1
                }
            }
        }
    
        private fun Job.setUpCancellation() {
            val loadingJob = this              // #2
    
            // cancel the loading job if the 'cancel' button was clicked:
            val listener = ActionListener {
                loadingJob.cancel()            // #3
                updateLoadingStatus(CANCELED)
            }
            // add a listener to the 'cancel' button:
            addCancelListener(listener)
    
            // update the status and remove the listener
            // after the loading job is completed
        }
    }   
    ```

The `launch` function returns an instance of `Job`. `Job` stores a reference to the "loading coroutine", which loads
all of the data and updates the results. You can call the `setUpCancellation()` extension function on it (line `#1`),
passing an instance of `Job` as a receiver.

Another way you could express this would be to explicitly write:

```java,kotlin
val job = launch { }
job.setUpCancellation()
```

* For readability, you could refer to the `setUpCancellation()` function receiver inside the function with the
  new `loadingJob` variable (line `#2`).
* Then you could add a listener to the _Cancel_ button so that when it's clicked, the `loadingJob` is canceled (line `#3`).

With structured concurrency, you only need to cancel the parent coroutine and this automatically propagates cancellation
to all of the child coroutines.

<a name="🔗03.7.2."></a>

03.7.2. Using the outer scope's context
==================================================

When you start new coroutines inside the given scope, it's much easier to ensure that all of them run with the same
context. It is also much easier to replace the context if needed.

Now it's time to learn how using the dispatcher from the outer scope works. The new scope created by
the `coroutineScope` or by the coroutine builders always inherits the context from the outer scope. In this case, the
outer scope is the scope the `suspend loadContributorsConcurrent()` function was called from:

```java,kotlin
launch(Dispatchers.Default) {  // outer scope
    val users = loadContributorsConcurrent(service, req)
    // ...
}
```

All of the nested coroutines are automatically started with the inherited context. The dispatcher is a part of this
context. That's why all of the coroutines started by `async` are started with the context of the default dispatcher:

```java,kotlin
suspend fun loadContributorsConcurrent(
    service: GitHubService, req: RequestData
): List<User> = coroutineScope {
    // this scope inherits the context from the outer scope
    // ...
    async {   // nested coroutine started with the inherited context
        // ...
    }
    // ...
}
```

With structured concurrency, you can specify the major context elements (like dispatcher) once, when creating the
top-level coroutine. All the nested coroutines then inherit the context and modify it only if needed.

> When you write code with coroutines for UI applications, for example Android ones, it's a common practice to
> use `CoroutineDispatchers.Main` by default for the top coroutine and then to explicitly put a different dispatcher when
> you need to run the code on a different thread.
>
{type="tip"}

<a name="🔗03.8."></a>

03.8. Showing progress
==================================================

Despite the information for some repositories being loaded rather quickly, the user only sees the resulting list after all of
the data has been loaded. Until then, the loader icon runs showing the progress, but there's no information about the current
state or what contributors are already loaded.

You can show the intermediate results earlier and display all of the contributors after loading the data for each of the
repositories:

![Loading data](https://kotlinlang.org/docs/images/loading.gif){width=500}

To implement this functionality, in the `src/tasks/Request6Progress.kt`, you'll need to pass the logic updating the UI
as a callback, so that it's called on each intermediate state:

```java,kotlin
suspend fun loadContributorsProgress(
    service: GitHubService,
    req: RequestData,
    updateResults: suspend (List<User>, completed: Boolean) -> Unit
) {
    // loading the data
    // calling `updateResults()` on intermediate states
}
```

On the call site in `Contributors.kt`, the callback is passed to update the results from the `Main` thread for
the _PROGRESS_ option:

```java,kotlin
launch(Dispatchers.Default) {
    loadContributorsProgress(service, req) { users, completed ->
        withContext(Dispatchers.Main) {
            updateResults(users, startTime, completed)
        }
    }
}
```

* The `updateResults()` parameter is declared as `suspend` in `loadContributorsProgress()`. It's necessary to call
  `withContext`, which is a `suspend` function inside the corresponding lambda argument.
* `updateResults()` callback takes an additional Boolean parameter as an argument specifying whether the loading has
  completed and the results are final.

<a name="🔗03.8.1."></a>

03.8.1. Task 6
==================================================

In the `Request6Progress.kt` file, implement the `loadContributorsProgress()` function that shows the intermediate
progress. Base it on the `loadContributorsSuspend()` function from `Request4Suspend.kt`.

* Use a simple version without concurrency; you'll add it later in the next section.
* The intermediate list of contributors should be shown in an "aggregated" state, not just the list of users loaded for
  each repository.
* The total number of contributions for each user should be increased when the data for each new
  repository is loaded.

<a name="🔗03.8.1.1."></a>

03.8.1.1. Solution for task 6
==================================================

To store the intermediate list of loaded contributors in the "aggregated" state, define an `allUsers` variable which
stores the list of users, and then update it after contributors for each new repository are loaded:

```java,kotlin
suspend fun loadContributorsProgress(
    service: GitHubService,
    req: RequestData,
    updateResults: suspend (List<User>, completed: Boolean) -> Unit
) {
    val repos = service
        .getOrgRepos(req.org)
        .also { logRepos(req, it) }
        .bodyList()

    var allUsers = emptyList<User>()
    for ((index, repo) in repos.withIndex()) {
        val users = service.getRepoContributors(req.org, repo.name)
            .also { logUsers(repo, it) }
            .bodyList()

        allUsers = (allUsers + users).aggregate()
        updateResults(allUsers, index == repos.lastIndex)
    }
}
```

<a name="🔗03.8.1.2."></a>

03.8.1.2. Consecutive vs concurrent
==================================================

An `updateResults()` callback is called after each request is completed:

![Progress on requests](https://kotlinlang.org/docs/images/progress.png){width=700}

This code doesn't include concurrency. It's sequential, so you don't need synchronization.

The best option would be to send requests concurrently and update the intermediate results after getting the response
for each repository:

![Concurrent requests](https://kotlinlang.org/docs/images/progress-and-concurrency.png){width=700}

To add concurrency, use _channels_.

<a name="🔗03.9."></a>

03.9. Channels
==================================================

Writing code with a shared mutable state is quite difficult and error-prone (like in the solution using callbacks).
A simpler way is to share information by communication rather than by using a common mutable state.
Coroutines can communicate with each other through _channels_.

Channels are communication primitives that allow data to be passed between coroutines. One coroutine can _send_
some information to a channel, while another can _receive_ that information from it:

![Using channels](https://kotlinlang.org/docs/images/using-channel.png)

A coroutine that sends (produces) information is often called a producer, and a coroutine that receives (consumes)
information is called a consumer. One or multiple coroutines can send information to the same channel, and one or multiple
coroutines can receive data from it:

![Using channels with many coroutines](https://kotlinlang.org/docs/images/using-channel-many-coroutines.png)

When many coroutines receive information from the same channel, each element is handled only once by one of the
consumers. Once an element is handled, it is immediately removed from the channel.

You can think of a channel as similar to a collection of elements, or more precisely, a queue, in which elements are added
to one end and received from the other. However, there's an important difference: unlike collections, even in their
synchronized versions, a channel can _suspend_ `send()`and `receive()` operations. This happens when the channel is empty
or full. The channel can be full if the channel size has an upper bound.

`Channel` is represented by three different interfaces: `SendChannel`, `ReceiveChannel`, and `Channel`, with the latter
extending the first two. You usually create a channel and give it to producers as a `SendChannel` instance so that only
they can send information to the channel.
You give a channel to consumers as a `ReceiveChannel` instance so that only they can receive from it. Both `send`
and `receive` methods are declared as `suspend`:

```java,kotlin
interface SendChannel<in E> {
    suspend fun send(element: E)
    fun close(): Boolean
}

interface ReceiveChannel<out E> {
    suspend fun receive(): E
}

interface Channel<E> : SendChannel<E>, ReceiveChannel<E>
```

The producer can close a channel to indicate that no more elements are coming.

Several types of channels are defined in the library. They differ in how many elements they can internally store and
whether the `send()` call can be suspended or not.
For all of the channel types, the `receive()` call behaves similarly: it receives an element if the channel is not empty;
otherwise, it is suspended.


1.  **Unlimited channel**
    
    An unlimited channel is the closest analog to a queue: producers can send elements to this channel and it will
    keep growing indefinitely. The `send()` call will never be suspended.
    If the program runs out of memory, you'll get an `OutOfMemoryException`.
    The difference between an unlimited channel and a queue is that when a consumer tries to receive from an empty channel,
    it becomes suspended until some new elements are sent.

    ![Unlimited channel](https://kotlinlang.org/docs/images/unlimited-channel.png){width=500}

2.  **Buffered channel**
    
    The size of a buffered channel is constrained by the specified number.
    Producers can send elements to this channel until the size limit is reached. All of the elements are internally stored.
    When the channel is full, the next `send` call on it is suspended until more free space becomes available.

    ![Buffered channel](https://kotlinlang.org/docs/images/buffered-channel.png){width=500}

3.  **Rendezvous channel**
    
    The "Rendezvous" channel is a channel without a buffer, the same as a buffered channel with zero size.

    One of the functions (`send()` or `receive()`) is always suspended until the other is called. 
    
    If the `send()` function is called and there's no suspended `receive` call ready to process the element, then `send()`
    is suspended. Similarly, if the `receive` function is called and the channel is empty or, in other words, there's no
    suspended `send()` call ready to send the element, the `receive()` call is suspended. 
    
    The "rendezvous" name ("a meeting at an agreed time and place") refers to the fact that `send()` and `receive()`
    should "meet on time".

    ![Rendezvous channel](https://kotlinlang.org/docs/images/rendezvous-channel.png){width=500}

4.  **Conflated channel**
    
    A new element sent to the conflated channel will overwrite the previously sent element, so the receiver will always
    get only the latest element. The `send()` call is never suspended.

    ![Conflated channel](https://kotlinlang.org/docs/images/conflated-channel.gif){width=500}

When you create a channel, specify its type or the buffer size (if you need a buffered one):

```java,kotlin
val rendezvousChannel = Channel<String>()
val bufferedChannel = Channel<String>(10)
val conflatedChannel = Channel<String>(CONFLATED)
val unlimitedChannel = Channel<String>(UNLIMITED)
```

By default, a "Rendezvous" channel is created.

In the following task, you'll create a "Rendezvous" channel, two producer coroutines, and a consumer coroutine:

```java,kotlin
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
    val channel = Channel<String>()
    launch {
        channel.send("A1")
        channel.send("A2")
        log("A done")
    }
    launch {
        channel.send("B1")
        log("B done")
    }
    launch {
        repeat(3) {
            val x = channel.receive()
            log(x)
        }
    }
}

fun log(message: Any?) {
    println("[${Thread.currentThread().name}] $message")
}
```

> Watch [this video](https://www.youtube.com/watch?v=HpWQUoVURWQ) for a better understanding of channels.
>
{type="tip"}

<a name="🔗03.9.1."></a>

03.9.1. Task 7
==================================================

In `src/tasks/Request7Channels.kt`, implement the function `loadContributorsChannels()` that requests all of the GitHub
contributors concurrently and shows intermediate progress at the same time.

Use the previous functions, `loadContributorsConcurrent()` from `Request5Concurrent.kt`
and `loadContributorsProgress()` from `Request6Progress.kt`.

<a name="🔗03.9.1.1."></a>

03.9.1.1. Tip for task 7
==================================================

Different coroutines that concurrently receive contributor lists for different repositories can send all of the received
results to the same channel:

```java,kotlin
val channel = Channel<List<User>>()
for (repo in repos) {
    launch {
        val users = TODO()
        // ...
        channel.send(users)
    }
}
```

Then the elements from this channel can be received one by one and processed:

```java,kotlin
repeat(repos.size) {
    val users = channel.receive()
    // ...
}
```

Since the `receive()` calls are sequential, no additional synchronization is needed.

<a name="🔗03.9.1.2."></a>

03.9.1.2. Solution for task 7
==================================================

As with the `loadContributorsProgress()` function, you can create an `allUsers` variable to store the intermediate
states of the "all contributors" list.
Each new list received from the channel is added to the list of all users. You aggregate the result and update the state
using the `updateResults` callback:

```java,kotlin
suspend fun loadContributorsChannels(
    service: GitHubService,
    req: RequestData,
    updateResults: suspend (List<User>, completed: Boolean) -> Unit
) = coroutineScope {

    val repos = service
        .getOrgRepos(req.org)
        .also { logRepos(req, it) }
        .bodyList()

    val channel = Channel<List<User>>()
    for (repo in repos) {
        launch {
            val users = service.getRepoContributors(req.org, repo.name)
                .also { logUsers(repo, it) }
                .bodyList()
            channel.send(users)
        }
    }
    var allUsers = emptyList<User>()
    repeat(repos.size) {
        val users = channel.receive()
        allUsers = (allUsers + users).aggregate()
        updateResults(allUsers, it == repos.lastIndex)
    }
}
```

* Results for different repositories are added to the channel as soon as they are ready. At first, when all of the requests
  are sent, and no data is received, the `receive()` call is suspended. In this case, the whole "load contributors" coroutine
  is suspended.
* Then, when the list of users is sent to the channel, the "load contributors" coroutine resumes, the `receive()` call
  returns this list, and the results are immediately updated.

You can now run the program and choose the _CHANNELS_ option to load the contributors and see the result.

Although neither coroutines nor channels completely remove the complexity that comes with concurrency,
they make life easier when you need to understand what's going on.

<a name="🔗03.10."></a>

03.10. Testing coroutines
==================================================

Let's now test all solutions to check that the solution with concurrent coroutines is faster than the solution with
the `suspend` functions, and check that the solution with channels is faster than the simple "progress" one.

In the following task, you'll compare the total running time of the solutions. You'll mock a GitHub service and make
this service return results after the given timeouts:

```text
repos request - returns an answer within 1000 ms delay
repo-1 - 1000 ms delay
repo-2 - 1200 ms delay
repo-3 - 800 ms delay
```

The sequential solution with the `suspend` functions should take around 4000 ms (4000 = 1000 + (1000 + 1200 + 800)).
The concurrent solution should take around 2200 ms (2200 = 1000 + max(1000, 1200, 800)).

For the solutions that show progress, you can also check the intermediate results with timestamps.

The corresponding test data is defined in `test/contributors/testData.kt`, and the files `Request4SuspendKtTest`,
`Request7ChannelsKtTest`, and so on contain the straightforward tests that use mock service calls.

However, there are two problems here:

* These tests take too long to run. Each test takes around 2 to 4 seconds, and you need to wait for the results each
  time. It's not very efficient.
* You can't rely on the exact time the solution runs because it still takes additional time to prepare and run the code.
  You could add a constant, but then the time would differ from machine to machine. The mock service delays
  should be higher than this constant so you can see a difference. If the constant is 0.5 sec, making the delays
  0.1 sec won't be enough.

A better way would be to use special frameworks to test the timing while running the same code several times (which increases
the total time even more), but that is complicated to learn and set up.

To solve these problems and make sure that solutions with provided test delays behave as expected, one faster than the other,
use _virtual_ time with a special test dispatcher. This dispatcher keeps track of the virtual time passed from
the start and runs everything immediately in real time. When you run coroutines on this dispatcher,
the `delay` will return immediately and advance the virtual time.

Tests that use this mechanism run fast, but you can still check what happens at different moments in virtual time. The
total running time drastically decreases:

![Comparison for total running time](https://kotlinlang.org/docs/images/time-comparison.png){width=700}

To use virtual time, replace the `runBlocking` invocation with a `runTest`. `runTest` takes an
extension lambda to `TestScope` as an argument.
When you call `delay` in a `suspend` function inside this special scope, `delay` will increase the virtual time instead
of delaying in real time:

```java,kotlin
@Test
fun testDelayInSuspend() = runTest {
    val realStartTime = System.currentTimeMillis() 
    val virtualStartTime = currentTime
        
    foo()
    println("${System.currentTimeMillis() - realStartTime} ms") // ~ 6 ms
    println("${currentTime - virtualStartTime} ms")             // 1000 ms
}

suspend fun foo() {
    delay(1000)    // auto-advances without delay
    println("foo") // executes eagerly when foo() is called
}
```

You can check the current virtual time using the `currentTime` property of `TestScope`.

The actual running time in this example is several milliseconds, whereas virtual time equals the delay argument, which
is 1000 milliseconds.

To get the full effect of "virtual" `delay` in child coroutines,
start all of the child coroutines with `TestDispatcher`. Otherwise, it won't work. This dispatcher is
automatically inherited from the other `TestScope`, unless you provide a different dispatcher:

```java,kotlin
@Test
fun testDelayInLaunch() = runTest {
    val realStartTime = System.currentTimeMillis()
    val virtualStartTime = currentTime

    bar()

    println("${System.currentTimeMillis() - realStartTime} ms") // ~ 11 ms
    println("${currentTime - virtualStartTime} ms")             // 1000 ms
}

suspend fun bar() = coroutineScope {
    launch {
        delay(1000)    // auto-advances without delay
        println("bar") // executes eagerly when bar() is called
    }
}
```

If `launch` is called with the context of `Dispatchers.Default` in the example above, the test will fail. You'll get an
exception saying that the job has not been completed yet.

You can test the `loadContributorsConcurrent()` function this way only if it starts the child coroutines with the
inherited context, without modifying it using the `Dispatchers.Default` dispatcher.

You can specify the context elements like the dispatcher when _calling_ a function rather than when _defining_ it,
which allows for more flexibility and easier testing.

> The testing API that supports virtual time is [Experimental](components-stability.md) and may change in the future.
>
{type="warning"}

By default, the compiler shows warnings if you use the experimental testing API. To suppress these warnings, annotate
the test function or the whole class containing the tests with `@OptIn(ExperimentalCoroutinesApi::class)`.
Add the compiler argument instructing the compiler that you're using the experimental API:

```java,kotlin
compileTestKotlin {
    kotlinOptions {
        freeCompilerArgs += "-Xuse-experimental=kotlin.Experimental"
    }
}
```

In the project corresponding to this tutorial, the compiler argument has already been added to the Gradle script.

<a name="🔗03.10.1."></a>

03.10.1. Task 8
==================================================

Refactor the following tests in `tests/tasks/` to use virtual time instead of real time:

* Request4SuspendKtTest.kt
* Request5ConcurrentKtTest.kt
* Request6ProgressKtTest.kt
* Request7ChannelsKtTest.kt

Compare the total running times before and after applying your refactoring.

<a name="🔗03.10.1.1."></a>

03.10.1.1. Tip for task 8
==================================================

1. Replace the `runBlocking` invocation with `runTest`, and replace `System.currentTimeMillis()` with `currentTime`:

    ```java,kotlin
    @Test
    fun test() = runTest {
        val startTime = currentTime
        // action
        val totalTime = currentTime - startTime
        // testing result
    }
    ```

2. Uncomment the assertions that check the exact virtual time.
3. Don't forget to add `@UseExperimental(ExperimentalCoroutinesApi::class)`.

<a name="🔗03.10.1.2."></a>

03.10.1.2. Solution for task 8
==================================================

Here are the solutions for the concurrent and channels cases:

```java,kotlin
fun testConcurrent() = runTest {
    val startTime = currentTime
    val result = loadContributorsConcurrent(MockGithubService, testRequestData)
    Assert.assertEquals("Wrong result for 'loadContributorsConcurrent'", expectedConcurrentResults.users, result)
    val totalTime = currentTime - startTime

    Assert.assertEquals(
        "The calls run concurrently, so the total virtual time should be 2200 ms: " +
                "1000 for repos request plus max(1000, 1200, 800) = 1200 for concurrent contributors requests)",
        expectedConcurrentResults.timeFromStart, totalTime
    )
}
```

First, check that the results are available exactly at the expected virtual time, and then check the results
themselves:

```java,kotlin
fun testChannels() = runTest {
    val startTime = currentTime
    var index = 0
    loadContributorsChannels(MockGithubService, testRequestData) { users, _ ->
        val expected = concurrentProgressResults[index++]
        val time = currentTime - startTime
        Assert.assertEquals(
            "Expected intermediate results after ${expected.timeFromStart} ms:",
            expected.timeFromStart, time
        )
        Assert.assertEquals("Wrong intermediate results after $time:", expected.users, users)
    }
}
```

The first intermediate result for the last version with channels becomes available sooner than the progress version, and you
can see the difference in tests that use virtual time.

> The tests for the remaining "suspend" and "progress" tasks are very similar – you can find them in the project's
> `solutions` branch.
>
{type="tip"}

<a name="🔗03.11."></a>

03.11. What's next
==================================================

* Check out the [Asynchronous Programming with Kotlin](https://kotlinconf.com/workshops/) workshop at KotlinConf.
* Find out more about using [virtual time and the experimental testing package](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/).
<!--- TEST_NAME CancellationGuideTest -->

<a name="🔗04."></a>

📜 04. Cancellation and timeouts
==================================================

This section covers coroutine cancellation and timeouts.

<a name="🔗04.1."></a>

04.1. Cancelling coroutine execution
==================================================

In a long-running application you might need fine-grained control on your background coroutines.
For example, a user might have closed the page that launched a coroutine and now its result
is no longer needed and its operation can be cancelled. 
The [launch] function returns a [Job] that can be used to cancel the running coroutine:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val job = launch {
        repeat(1000) { i ->
            println("job: I'm sleeping $i ...")
            delay(500L)
        }
    }
    delay(1300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancel() // cancels the job
    job.join() // waits for job's completion 
    println("main: Now I can quit.")
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-01.kt).
>
{type="note"}

It produces the following output:

```text
job: I'm sleeping 0 ...
job: I'm sleeping 1 ...
job: I'm sleeping 2 ...
main: I'm tired of waiting!
main: Now I can quit.
```

<!--- TEST -->

As soon as main invokes `job.cancel`, we don't see any output from the other coroutine because it was cancelled. 
There is also a [Job] extension function [cancelAndJoin] 
that combines [cancel][Job.cancel] and [join][Job.join] invocations.

<a name="🔗04.2."></a>

04.2. Cancellation is cooperative
==================================================

Coroutine cancellation is _cooperative_. A coroutine code has to cooperate to be cancellable.
All the suspending functions in `kotlinx.coroutines` are _cancellable_. They check for cancellation of 
coroutine and throw [CancellationException] when cancelled. However, if a coroutine is working in 
a computation and does not check for cancellation, then it cannot be cancelled, like the following 
example shows:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val startTime = System.currentTimeMillis()
    val job = launch(Dispatchers.Default) {
        var nextPrintTime = startTime
        var i = 0
        while (i < 5) { // computation loop, just wastes CPU
            // print a message twice a second
            if (System.currentTimeMillis() >= nextPrintTime) {
                println("job: I'm sleeping ${i++} ...")
                nextPrintTime += 500L
            }
        }
    }
    delay(1300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancelAndJoin() // cancels the job and waits for its completion
    println("main: Now I can quit.")
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-02.kt).
>
{type="note"}

Run it to see that it continues to print "I'm sleeping" even after cancellation
until the job completes by itself after five iterations.

<!--- TEST 
job: I'm sleeping 0 ...
job: I'm sleeping 1 ...
job: I'm sleeping 2 ...
main: I'm tired of waiting!
job: I'm sleeping 3 ...
job: I'm sleeping 4 ...
main: Now I can quit.
-->

The same problem can be observed by catching a [CancellationException] and not rethrowing it:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val job = launch(Dispatchers.Default) {
        repeat(5) { i ->
            try {
                // print a message twice a second
                println("job: I'm sleeping $i ...")
                delay(500)
            } catch (e: Exception) {
                // log the exception
                println(e)
            }
        }
    }
    delay(1300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancelAndJoin() // cancels the job and waits for its completion
    println("main: Now I can quit.")
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-03.kt).
>
{type="note"}

While catching `Exception` is an anti-pattern, this issue may surface in more subtle ways, like when using the
[`runCatching`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/run-catching.html) function,
which does not rethrow [CancellationException].

<a name="🔗04.3."></a>

04.3. Making computation code cancellable
==================================================

There are two approaches to making computation code cancellable. The first one is to periodically 
invoke a suspending function that checks for cancellation. There is a [yield] function that is a good choice for that purpose.
The other one is to explicitly check the cancellation status. Let us try the latter approach. 

Replace `while (i < 5)` in the previous example with `while (isActive)` and rerun it. 

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val startTime = System.currentTimeMillis()
    val job = launch(Dispatchers.Default) {
        var nextPrintTime = startTime
        var i = 0
        while (isActive) { // cancellable computation loop
            // print a message twice a second
            if (System.currentTimeMillis() >= nextPrintTime) {
                println("job: I'm sleeping ${i++} ...")
                nextPrintTime += 500L
            }
        }
    }
    delay(1300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancelAndJoin() // cancels the job and waits for its completion
    println("main: Now I can quit.")
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-04.kt).
>
{type="note"}

As you can see, now this loop is cancelled. [isActive] is an extension property 
available inside the coroutine via the [CoroutineScope] object.

<!--- TEST
job: I'm sleeping 0 ...
job: I'm sleeping 1 ...
job: I'm sleeping 2 ...
main: I'm tired of waiting!
main: Now I can quit.
-->

<a name="🔗04.4."></a>

04.4. Closing resources with `finally`
==================================================

Cancellable suspending functions throw [CancellationException] on cancellation, which can be handled in 
the usual way. For example, the `try {...} finally {...}` expression and Kotlin's `use` function execute their
finalization actions normally when a coroutine is cancelled:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val job = launch {
        try {
            repeat(1000) { i ->
                println("job: I'm sleeping $i ...")
                delay(500L)
            }
        } finally {
            println("job: I'm running finally")
        }
    }
    delay(1300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancelAndJoin() // cancels the job and waits for its completion
    println("main: Now I can quit.")
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-05.kt).
>
{type="note"}

Both [join][Job.join] and [cancelAndJoin] wait for all finalization actions to complete, 
so the example above produces the following output:

```text
job: I'm sleeping 0 ...
job: I'm sleeping 1 ...
job: I'm sleeping 2 ...
main: I'm tired of waiting!
job: I'm running finally
main: Now I can quit.
```

<!--- TEST -->

<a name="🔗04.5."></a>

04.5. Run non-cancellable block
==================================================

Any attempt to use a suspending function in the `finally` block of the previous example causes
[CancellationException], because the coroutine running this code is cancelled. Usually, this is not a 
problem, since all well-behaving closing operations (closing a file, cancelling a job, or closing any kind of a 
communication channel) are usually non-blocking and do not involve any suspending functions. However, in the 
rare case when you need to suspend in a cancelled coroutine you can wrap the corresponding code in
`withContext(NonCancellable) {...}` using [withContext] function and [NonCancellable] context as the following example shows:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val job = launch {
        try {
            repeat(1000) { i ->
                println("job: I'm sleeping $i ...")
                delay(500L)
            }
        } finally {
            withContext(NonCancellable) {
                println("job: I'm running finally")
                delay(1000L)
                println("job: And I've just delayed for 1 sec because I'm non-cancellable")
            }
        }
    }
    delay(1300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancelAndJoin() // cancels the job and waits for its completion
    println("main: Now I can quit.")
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-06.kt).
>
{type="note"}

<!--- TEST
job: I'm sleeping 0 ...
job: I'm sleeping 1 ...
job: I'm sleeping 2 ...
main: I'm tired of waiting!
job: I'm running finally
job: And I've just delayed for 1 sec because I'm non-cancellable
main: Now I can quit.
-->

<a name="🔗04.6."></a>

04.6. Timeout
==================================================

The most obvious practical reason to cancel execution of a coroutine 
is because its execution time has exceeded some timeout.
While you can manually track the reference to the corresponding [Job] and launch a separate coroutine to cancel 
the tracked one after delay, there is a ready to use [withTimeout] function that does it.
Look at the following example:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    withTimeout(1300L) {
        repeat(1000) { i ->
            println("I'm sleeping $i ...")
            delay(500L)
        }
    }
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-07.kt).
>
{type="note"}

It produces the following output:

```text
I'm sleeping 0 ...
I'm sleeping 1 ...
I'm sleeping 2 ...
Exception in thread "main" kotlinx.coroutines.TimeoutCancellationException: Timed out waiting for 1300 ms
```

<!--- TEST STARTS_WITH -->

The `TimeoutCancellationException` that is thrown by [withTimeout] is a subclass of [CancellationException].
We have not seen its stack trace printed on the console before. That is because
inside a cancelled coroutine `CancellationException` is considered to be a normal reason for coroutine completion. 
However, in this example we have used `withTimeout` right inside the `main` function. 

Since cancellation is just an exception, all resources are closed in the usual way. 
You can wrap the code with timeout in a `try {...} catch (e: TimeoutCancellationException) {...}` block if 
you need to do some additional action specifically on any kind of timeout or use the [withTimeoutOrNull] function
that is similar to [withTimeout] but returns `null` on timeout instead of throwing an exception:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val result = withTimeoutOrNull(1300L) {
        repeat(1000) { i ->
            println("I'm sleeping $i ...")
            delay(500L)
        }
        "Done" // will get cancelled before it produces this result
    }
    println("Result is $result")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-08.kt).
>
{type="note"}

There is no longer an exception when running this code:

```text
I'm sleeping 0 ...
I'm sleeping 1 ...
I'm sleeping 2 ...
Result is null
```

<!--- TEST -->

<a name="🔗04.7."></a>

04.7. Asynchronous timeout and resources
==================================================

<!-- 
  NOTE: Don't change this section name. It is being referenced to from within KDoc of withTimeout functions.
-->

The timeout event in [withTimeout] is asynchronous with respect to the code running in its block and may happen at any time,
even right before the return from inside of the timeout block. Keep this in mind if you open or acquire some
resource inside the block that needs closing or release outside of the block. 

For example, here we imitate a closeable resource with the `Resource` class that simply keeps track of how many times 
it was created by incrementing the `acquired` counter and decrementing the counter in its `close` function.
Now let us create a lot of coroutines, each of which creates a `Resource` at the end of the `withTimeout` block
and releases the resource outside the block. We add a small delay so that it is more likely that the timeout occurs
right when the `withTimeout` block is already finished, which will cause a resource leak.

```java,kotlin
import kotlinx.coroutines.*

//sampleStart
var acquired = 0

class Resource {
    init { acquired++ } // Acquire the resource
    fun close() { acquired-- } // Release the resource
}

fun main() {
    runBlocking {
        repeat(10_000) { // Launch 10K coroutines
            launch { 
                val resource = withTimeout(60) { // Timeout of 60 ms
                    delay(50) // Delay for 50 ms
                    Resource() // Acquire a resource and return it from withTimeout block     
                }
                resource.close() // Release the resource
            }
        }
    }
    // Outside of runBlocking all coroutines have completed
    println(acquired) // Print the number of resources still acquired
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-09.kt).
>
{type="note"}

<!--- CLEAR -->

If you run the above code, you'll see that it does not always print zero, though it may depend on the timings 
of your machine. You may need to tweak the timeout in this example to actually see non-zero values. 

> Note that incrementing and decrementing `acquired` counter here from 10K coroutines is completely thread-safe,
> since it always happens from the same thread, the one used by `runBlocking`.
> More on that will be explained in the chapter on coroutine context.
> 
{type="note"}

To work around this problem you can store a reference to the resource in a variable instead of returning it 
from the `withTimeout` block. 

```java,kotlin
import kotlinx.coroutines.*

var acquired = 0

class Resource {
    init { acquired++ } // Acquire the resource
    fun close() { acquired-- } // Release the resource
}

fun main() {
//sampleStart
    runBlocking {
        repeat(10_000) { // Launch 10K coroutines
            launch { 
                var resource: Resource? = null // Not acquired yet
                try {
                    withTimeout(60) { // Timeout of 60 ms
                        delay(50) // Delay for 50 ms
                        resource = Resource() // Store a resource to the variable if acquired      
                    }
                    // We can do something else with the resource here
                } finally {  
                    resource?.close() // Release the resource if it was acquired
                }
            }
        }
    }
    // Outside of runBlocking all coroutines have completed
    println(acquired) // Print the number of resources still acquired
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-cancel-10.kt).
>
{type="note"}

This example always prints zero. Resources do not leak.

<!--- TEST 
0
-->



<!--- END -->
<!--- TEST_NAME ComposingGuideTest -->

<a name="🔗05."></a>

📜 05. Composing suspending functions
==================================================

This section covers various approaches to composition of suspending functions.

<a name="🔗05.1."></a>

05.1. Sequential by default
==================================================

Assume that we have two suspending functions defined elsewhere that do something useful like some kind of 
remote service call or computation. We just pretend they are useful, but actually each one just
delays for a second for the purpose of this example:

```java,kotlin
suspend fun doSomethingUsefulOne(): Int {
    delay(1000L) // pretend we are doing something useful here
    return 13
}

suspend fun doSomethingUsefulTwo(): Int {
    delay(1000L) // pretend we are doing something useful here, too
    return 29
}
```

What do we do if we need them to be invoked _sequentially_ — first `doSomethingUsefulOne` _and then_ 
`doSomethingUsefulTwo`, and compute the sum of their results? 
In practice, we do this if we use the result of the first function to make a decision on whether we need 
to invoke the second one or to decide on how to invoke it.

We use a normal sequential invocation, because the code in the coroutine, just like in the regular 
code, is _sequential_ by default. The following example demonstrates it by measuring the total 
time it takes to execute both suspending functions:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlin.system.*

fun main() = runBlocking<Unit> {
//sampleStart
    val time = measureTimeMillis {
        val one = doSomethingUsefulOne()
        val two = doSomethingUsefulTwo()
        println("The answer is ${one + two}")
    }
    println("Completed in $time ms")
//sampleEnd    
}

suspend fun doSomethingUsefulOne(): Int {
    delay(1000L) // pretend we are doing something useful here
    return 13
}

suspend fun doSomethingUsefulTwo(): Int {
    delay(1000L) // pretend we are doing something useful here, too
    return 29
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-compose-01.kt).
>
{type="note"}

It produces something like this:

```text
The answer is 42
Completed in 2017 ms
```

<!--- TEST ARBITRARY_TIME -->

<a name="🔗05.2."></a>

05.2. Concurrent using async
==================================================

What if there are no dependencies between invocations of `doSomethingUsefulOne` and `doSomethingUsefulTwo` and
we want to get the answer faster, by doing both _concurrently_? This is where [async] comes to help. 
 
Conceptually, [async] is just like [launch]. It starts a separate coroutine which is a light-weight thread 
that works concurrently with all the other coroutines. The difference is that `launch` returns a [Job] and 
does not carry any resulting value, while `async` returns a [Deferred] — a light-weight non-blocking future
that represents a promise to provide a result later. You can use `.await()` on a deferred value to get its eventual result,
but `Deferred` is also a `Job`, so you can cancel it if needed.

```java,kotlin
import kotlinx.coroutines.*
import kotlin.system.*

fun main() = runBlocking<Unit> {
//sampleStart
    val time = measureTimeMillis {
        val one = async { doSomethingUsefulOne() }
        val two = async { doSomethingUsefulTwo() }
        println("The answer is ${one.await() + two.await()}")
    }
    println("Completed in $time ms")
//sampleEnd    
}

suspend fun doSomethingUsefulOne(): Int {
    delay(1000L) // pretend we are doing something useful here
    return 13
}

suspend fun doSomethingUsefulTwo(): Int {
    delay(1000L) // pretend we are doing something useful here, too
    return 29
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-compose-02.kt).
>
{type="note"}

It produces something like this:

```text
The answer is 42
Completed in 1017 ms
```

<!--- TEST ARBITRARY_TIME -->

This is twice as fast, because the two coroutines execute concurrently. 
Note that concurrency with coroutines is always explicit.

<a name="🔗05.3."></a>

05.3. Lazily started async
==================================================

Optionally, [async] can be made lazy by setting its `start` parameter to [CoroutineStart.LAZY]. 
In this mode it only starts the coroutine when its result is required by 
[await][Deferred.await], or if its `Job`'s [start][Job.start] function 
is invoked. Run the following example:

```java,kotlin
import kotlinx.coroutines.*
import kotlin.system.*

fun main() = runBlocking<Unit> {
//sampleStart
    val time = measureTimeMillis {
        val one = async(start = CoroutineStart.LAZY) { doSomethingUsefulOne() }
        val two = async(start = CoroutineStart.LAZY) { doSomethingUsefulTwo() }
        // some computation
        one.start() // start the first one
        two.start() // start the second one
        println("The answer is ${one.await() + two.await()}")
    }
    println("Completed in $time ms")
//sampleEnd    
}

suspend fun doSomethingUsefulOne(): Int {
    delay(1000L) // pretend we are doing something useful here
    return 13
}

suspend fun doSomethingUsefulTwo(): Int {
    delay(1000L) // pretend we are doing something useful here, too
    return 29
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-compose-03.kt).
>
{type="note"}

It produces something like this:

```text
The answer is 42
Completed in 1017 ms
```

<!--- TEST ARBITRARY_TIME -->

So, here the two coroutines are defined but not executed as in the previous example, but the control is given to
the programmer on when exactly to start the execution by calling [start][Job.start]. We first 
start `one`, then start `two`, and then await for the individual coroutines to finish. 

Note that if we just call [await][Deferred.await] in `println` without first calling [start][Job.start] on individual 
coroutines, this will lead to sequential behavior, since [await][Deferred.await] starts the coroutine 
execution and waits for its finish, which is not the intended use-case for laziness. 
The use-case for `async(start = CoroutineStart.LAZY)` is a replacement for the 
standard `lazy` function in cases when computation of the value involves suspending functions.

<a name="🔗05.4."></a>

05.4. Async-style functions
==================================================

> This programming style with async functions is provided here only for illustration, because it is a popular style
> in other programming languages. Using this style with Kotlin coroutines is **strongly discouraged** for the
> reasons explained below.
>
{type="note"}

We can define async-style functions that invoke `doSomethingUsefulOne` and `doSomethingUsefulTwo`
_asynchronously_ using the [async] coroutine builder using a [GlobalScope] reference to 
opt-out of the structured concurrency.
We name such functions with the 
"...Async" suffix to highlight the fact that they only start asynchronous computation and one needs
to use the resulting deferred value to get the result.

> [GlobalScope] is a delicate API that can backfire in non-trivial ways, one of which will be explained
> below, so you must explicitly opt-in into using `GlobalScope` with `@OptIn(DelicateCoroutinesApi::class)`. 
>
{type="note"}

```java,kotlin
// The result type of somethingUsefulOneAsync is Deferred<Int>
@OptIn(DelicateCoroutinesApi::class)
fun somethingUsefulOneAsync() = GlobalScope.async {
    doSomethingUsefulOne()
}

// The result type of somethingUsefulTwoAsync is Deferred<Int>
@OptIn(DelicateCoroutinesApi::class)
fun somethingUsefulTwoAsync() = GlobalScope.async {
    doSomethingUsefulTwo()
}
```

Note that these `xxxAsync` functions are **not** _suspending_ functions. They can be used from anywhere.
However, their use always implies asynchronous (here meaning _concurrent_) execution of their action
with the invoking code.
 
The following example shows their use outside of coroutine:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlin.system.*

//sampleStart
// note that we don't have `runBlocking` to the right of `main` in this example
fun main() {
    val time = measureTimeMillis {
        // we can initiate async actions outside of a coroutine
        val one = somethingUsefulOneAsync()
        val two = somethingUsefulTwoAsync()
        // but waiting for a result must involve either suspending or blocking.
        // here we use `runBlocking { ... }` to block the main thread while waiting for the result
        runBlocking {
            println("The answer is ${one.await() + two.await()}")
        }
    }
    println("Completed in $time ms")
}
//sampleEnd

@OptIn(DelicateCoroutinesApi::class)
fun somethingUsefulOneAsync() = GlobalScope.async {
    doSomethingUsefulOne()
}

@OptIn(DelicateCoroutinesApi::class)
fun somethingUsefulTwoAsync() = GlobalScope.async {
    doSomethingUsefulTwo()
}

suspend fun doSomethingUsefulOne(): Int {
    delay(1000L) // pretend we are doing something useful here
    return 13
}

suspend fun doSomethingUsefulTwo(): Int {
    delay(1000L) // pretend we are doing something useful here, too
    return 29
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-compose-04.kt).
>
{type="note"}

<!--- TEST ARBITRARY_TIME
The answer is 42
Completed in 1085 ms
-->

Consider what happens if between the `val one = somethingUsefulOneAsync()` line and `one.await()` expression there is some logic
error in the code, and the program throws an exception, and the operation that was being performed by the program aborts. 
Normally, a global error-handler could catch this exception, log and report the error for developers, but the program 
could otherwise continue doing other operations. However, here we have `somethingUsefulOneAsync` still running in the background,
even though the operation that initiated it was aborted. This problem does not happen with structured
concurrency, as shown in the section below.

<a name="🔗05.5."></a>

05.5. Structured concurrency with async 
==================================================

Let us take the [Concurrent using async](#concurrent-using-async) example and extract a function that 
concurrently performs `doSomethingUsefulOne` and `doSomethingUsefulTwo` and returns the sum of their results.
Because the [async] coroutine builder is defined as an extension on [CoroutineScope], we need to have it in the 
scope and that is what the [coroutineScope][_coroutineScope] function provides:

```java,kotlin
suspend fun concurrentSum(): Int = coroutineScope {
    val one = async { doSomethingUsefulOne() }
    val two = async { doSomethingUsefulTwo() }
    one.await() + two.await()
}
```

This way, if something goes wrong inside the code of the `concurrentSum` function, and it throws an exception,
all the coroutines that were launched in its scope will be cancelled.

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlin.system.*

fun main() = runBlocking<Unit> {
//sampleStart
    val time = measureTimeMillis {
        println("The answer is ${concurrentSum()}")
    }
    println("Completed in $time ms")
//sampleEnd    
}

suspend fun concurrentSum(): Int = coroutineScope {
    val one = async { doSomethingUsefulOne() }
    val two = async { doSomethingUsefulTwo() }
    one.await() + two.await()
}

suspend fun doSomethingUsefulOne(): Int {
    delay(1000L) // pretend we are doing something useful here
    return 13
}

suspend fun doSomethingUsefulTwo(): Int {
    delay(1000L) // pretend we are doing something useful here, too
    return 29
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-compose-05.kt).
>
{type="note"}

We still have concurrent execution of both operations, as evident from the output of the above `main` function: 

```text
The answer is 42
Completed in 1017 ms
```

<!--- TEST ARBITRARY_TIME -->

Cancellation is always propagated through coroutines hierarchy:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
    try {
        failedConcurrentSum()
    } catch(e: ArithmeticException) {
        println("Computation failed with ArithmeticException")
    }
}

suspend fun failedConcurrentSum(): Int = coroutineScope {
    val one = async<Int> { 
        try {
            delay(Long.MAX_VALUE) // Emulates very long computation
            42
        } finally {
            println("First child was cancelled")
        }
    }
    val two = async<Int> { 
        println("Second child throws an exception")
        throw ArithmeticException()
    }
    one.await() + two.await()
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-compose-06.kt).
>
{type="note"}

Note how both the first `async` and the awaiting parent are cancelled on failure of one of the children
(namely, `two`):
```text
Second child throws an exception
First child was cancelled
Computation failed with ArithmeticException
```

<!--- TEST -->



<!--- END -->
<!--- TEST_NAME DispatcherGuideTest -->

<a name="🔗06."></a>

📜 06. Coroutine context and dispatchers
==================================================

Coroutines always execute in some context represented by a value of the 
[CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/) 
type, defined in the Kotlin standard library.

The coroutine context is a set of various elements. The main elements are the [Job] of the coroutine, 
which we've seen before, and its dispatcher, which is covered in this section.

<a name="🔗06.1."></a>

06.1. Dispatchers and threads
==================================================

The coroutine context includes a _coroutine dispatcher_ (see [CoroutineDispatcher]) that determines what thread or threads 
the corresponding coroutine uses for its execution. The coroutine dispatcher can confine coroutine execution 
to a specific thread, dispatch it to a thread pool, or let it run unconfined. 

All coroutine builders like [launch] and [async] accept an optional 
[CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/) 
parameter that can be used to explicitly specify the dispatcher for the new coroutine and other context elements. 

Try the following example:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
//sampleStart
    launch { // context of the parent, main runBlocking coroutine
        println("main runBlocking      : I'm working in thread ${Thread.currentThread().name}")
    }
    launch(Dispatchers.Unconfined) { // not confined -- will work with main thread
        println("Unconfined            : I'm working in thread ${Thread.currentThread().name}")
    }
    launch(Dispatchers.Default) { // will get dispatched to DefaultDispatcher 
        println("Default               : I'm working in thread ${Thread.currentThread().name}")
    }
    launch(newSingleThreadContext("MyOwnThread")) { // will get its own new thread
        println("newSingleThreadContext: I'm working in thread ${Thread.currentThread().name}")
    }
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-01.kt).
>
{type="note"}

It produces the following output (maybe in different order):

```text
Unconfined            : I'm working in thread main
Default               : I'm working in thread DefaultDispatcher-worker-1
newSingleThreadContext: I'm working in thread MyOwnThread
main runBlocking      : I'm working in thread main
```

<!--- TEST LINES_START_UNORDERED -->

When `launch { ... }` is used without parameters, it inherits the context (and thus dispatcher)
from the [CoroutineScope] it is being launched from. In this case, it inherits the
context of the main `runBlocking` coroutine which runs in the `main` thread. 

[Dispatchers.Unconfined] is a special dispatcher that also appears to run in the `main` thread, but it is,
in fact, a different mechanism that is explained later.

The default dispatcher is used when no other dispatcher is explicitly specified in the scope.
It is represented by [Dispatchers.Default] and uses a shared background pool of threads.
  
[newSingleThreadContext] creates a thread for the coroutine to run. 
A dedicated thread is a very expensive resource. 
In a real application it must be either released, when no longer needed, using the [close][ExecutorCoroutineDispatcher.close] 
function, or stored in a top-level variable and reused throughout the application.  

<a name="🔗06.2."></a>

06.2. Unconfined vs confined dispatcher
==================================================
 
The [Dispatchers.Unconfined] coroutine dispatcher starts a coroutine in the caller thread, but only until the
first suspension point. After suspension it resumes the coroutine in the thread that is fully determined by the
suspending function that was invoked. The unconfined dispatcher is appropriate for coroutines which neither
consume CPU time nor update any shared data (like UI) confined to a specific thread. 

On the other side, the dispatcher is inherited from the outer [CoroutineScope] by default. 
The default dispatcher for the [runBlocking] coroutine, in particular,
is confined to the invoker thread, so inheriting it has the effect of confining execution to
this thread with predictable FIFO scheduling.

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
//sampleStart
    launch(Dispatchers.Unconfined) { // not confined -- will work with main thread
        println("Unconfined      : I'm working in thread ${Thread.currentThread().name}")
        delay(500)
        println("Unconfined      : After delay in thread ${Thread.currentThread().name}")
    }
    launch { // context of the parent, main runBlocking coroutine
        println("main runBlocking: I'm working in thread ${Thread.currentThread().name}")
        delay(1000)
        println("main runBlocking: After delay in thread ${Thread.currentThread().name}")
    }
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-02.kt).
>
{type="note"}

Produces the output: 
 
```text
Unconfined      : I'm working in thread main
main runBlocking: I'm working in thread main
Unconfined      : After delay in thread kotlinx.coroutines.DefaultExecutor
main runBlocking: After delay in thread main
```

<!--- TEST LINES_START -->
 
So, the coroutine with the context inherited from `runBlocking {...}` continues to execute
in the `main` thread, while the unconfined one resumes in the default executor thread that the [delay]
function is using.

> The unconfined dispatcher is an advanced mechanism that can be helpful in certain corner cases where
> dispatching of a coroutine for its execution later is not needed or produces undesirable side-effects,
> because some operation in a coroutine must be performed right away. 
> The unconfined dispatcher should not be used in general code. 
>
{type="note"}

<a name="🔗06.3."></a>

06.3. Debugging coroutines and threads
==================================================

Coroutines can suspend on one thread and resume on another thread. 
Even with a single-threaded dispatcher it might be hard to
figure out what the coroutine was doing, where, and when if you don't have special tooling. 

<a name="🔗06.3.1."></a>

06.3.1. Debugging with IDEA
==================================================

The Coroutine Debugger of the Kotlin plugin simplifies debugging coroutines in IntelliJ IDEA.

> Debugging works for versions 1.3.8 or later of `kotlinx-coroutines-core`.
>
{type="note"}

The **Debug** tool window contains the **Coroutines** tab. In this tab, you can find information about both currently running and suspended coroutines. 
The coroutines are grouped by the dispatcher they are running on.

![Debugging coroutines](https://kotlinlang.org/docs/images/coroutine-idea-debugging-1.png){width=700}

With the coroutine debugger, you can:
* Check the state of each coroutine.
* See the values of local and captured variables for both running and suspended coroutines.
* See a full coroutine creation stack, as well as a call stack inside the coroutine. The stack includes all frames with 
variable values, even those that would be lost during standard debugging.
* Get a full report that contains the state of each coroutine and its stack. To obtain it, right-click inside the **Coroutines** tab, and then click **Get Coroutines Dump**.

To start coroutine debugging, you just need to set breakpoints and run the application in debug mode.

Learn more about coroutines debugging in the [tutorial](https://kotlinlang.org/docs/tutorials/coroutines/debug-coroutines-with-idea.html).

<a name="🔗06.3.2."></a>

06.3.2. Debugging using logging
==================================================

Another approach to debugging applications with 
threads without Coroutine Debugger is to print the thread name in the log file on each log statement. This feature is universally supported
by logging frameworks. When using coroutines, the thread name alone does not give much of a context, so 
`kotlinx.coroutines` includes debugging facilities to make it easier. 

Run the following code with `-Dkotlinx.coroutines.debug` JVM option:

```java,kotlin
import kotlinx.coroutines.*

fun log(msg: String) = println("[${Thread.currentThread().name}] $msg")

fun main() = runBlocking<Unit> {
//sampleStart
    val a = async {
        log("I'm computing a piece of the answer")
        6
    }
    val b = async {
        log("I'm computing another piece of the answer")
        7
    }
    log("The answer is ${a.await() * b.await()}")
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-03.kt).
>
{type="note"}

There are three coroutines. The main coroutine (#1) inside `runBlocking` 
and two coroutines computing the deferred values `a` (#2) and `b` (#3).
They are all executing in the context of `runBlocking` and are confined to the main thread.
The output of this code is:

```text
[main @coroutine#2] I'm computing a piece of the answer
[main @coroutine#3] I'm computing another piece of the answer
[main @coroutine#1] The answer is 42
```

<!--- TEST FLEXIBLE_THREAD -->

The `log` function prints the name of the thread in square brackets, and you can see that it is the `main`
thread with the identifier of the currently executing coroutine appended to it. This identifier 
is consecutively assigned to all created coroutines when the debugging mode is on.

> Debugging mode is also turned on when JVM is run with `-ea` option.
> You can read more about debugging facilities in the documentation of the [DEBUG_PROPERTY_NAME] property.
>
{type="note"}

<a name="🔗06.4."></a>

06.4. Jumping between threads
==================================================

Run the following code with the `-Dkotlinx.coroutines.debug` JVM option (see [debug](#debugging-coroutines-and-threads)):

```java,kotlin
import kotlinx.coroutines.*

fun log(msg: String) = println("[${Thread.currentThread().name}] $msg")

fun main() {
//sampleStart
    newSingleThreadContext("Ctx1").use { ctx1 ->
        newSingleThreadContext("Ctx2").use { ctx2 ->
            runBlocking(ctx1) {
                log("Started in ctx1")
                withContext(ctx2) {
                    log("Working in ctx2")
                }
                log("Back to ctx1")
            }
        }
    }
//sampleEnd
}
```

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-04.kt).
>
{type="note"}

It demonstrates several new techniques. One is using [runBlocking] with an explicitly specified context, and
the other one is using the [withContext] function to change the context of a coroutine while still staying in the
same coroutine, as you can see in the output below:

```text
[Ctx1 @coroutine#1] Started in ctx1
[Ctx2 @coroutine#1] Working in ctx2
[Ctx1 @coroutine#1] Back to ctx1
```

<!--- TEST -->

Note that this example also uses the `use` function from the Kotlin standard library to release threads
created with [newSingleThreadContext] when they are no longer needed. 

<a name="🔗06.5."></a>

06.5. Job in the context
==================================================

The coroutine's [Job] is part of its context, and can be retrieved from it 
using the `coroutineContext[Job]` expression:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
//sampleStart
    println("My job is ${coroutineContext[Job]}")
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-05.kt).
> 
{type="note"}

In the [debug mode](#debugging-coroutines-and-threads), it outputs something like this:

```
My job is "coroutine#1":BlockingCoroutine{Active}@6d311334
```

<!--- TEST lines.size == 1 && lines[0].startsWith("My job is \"coroutine#1\":BlockingCoroutine{Active}@") -->

Note that [isActive] in [CoroutineScope] is just a convenient shortcut for
`coroutineContext[Job]?.isActive == true`.

<a name="🔗06.6."></a>

06.6. Children of a coroutine
==================================================

When a coroutine is launched in the [CoroutineScope] of another coroutine,
it inherits its context via [CoroutineScope.coroutineContext] and 
the [Job] of the new coroutine becomes
a _child_ of the parent coroutine's job. When the parent coroutine is cancelled, all its children
are recursively cancelled, too. 

However, this parent-child relation can be explicitly overriden in one of two ways:

1. When a different scope is explicitly specified when launching a coroutine (for example, `GlobalScope.launch`), 
   then it does not inherit a `Job` from the parent scope.
2. When a different `Job` object is passed as the context for the new coroutine (as shown in the example below),
   then it overrides the `Job` of the parent scope.
   
In both cases, the launched coroutine is not tied to the scope it was launched from and operates independently.

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
//sampleStart
    // launch a coroutine to process some kind of incoming request
    val request = launch {
        // it spawns two other jobs
        launch(Job()) { 
            println("job1: I run in my own Job and execute independently!")
            delay(1000)
            println("job1: I am not affected by cancellation of the request")
        }
        // and the other inherits the parent context
        launch {
            delay(100)
            println("job2: I am a child of the request coroutine")
            delay(1000)
            println("job2: I will not execute this line if my parent request is cancelled")
        }
    }
    delay(500)
    request.cancel() // cancel processing of the request
    println("main: Who has survived request cancellation?")
    delay(1000) // delay the main thread for a second to see what happens
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-06.kt).
>
{type="note"}

The output of this code is:

```text
job1: I run in my own Job and execute independently!
job2: I am a child of the request coroutine
main: Who has survived request cancellation?
job1: I am not affected by cancellation of the request
```

<!--- TEST -->

<a name="🔗06.7."></a>

06.7. Parental responsibilities 
==================================================

A parent coroutine always waits for completion of all its children. A parent does not have to explicitly track
all the children it launches, and it does not have to use [Job.join] to wait for them at the end:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
//sampleStart
    // launch a coroutine to process some kind of incoming request
    val request = launch {
        repeat(3) { i -> // launch a few children jobs
            launch  {
                delay((i + 1) * 200L) // variable delay 200ms, 400ms, 600ms
                println("Coroutine $i is done")
            }
        }
        println("request: I'm done and I don't explicitly join my children that are still active")
    }
    request.join() // wait for completion of the request, including all its children
    println("Now processing of the request is complete")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-07.kt).
>
{type="note"}

The result is going to be:

```text
request: I'm done and I don't explicitly join my children that are still active
Coroutine 0 is done
Coroutine 1 is done
Coroutine 2 is done
Now processing of the request is complete
```

<!--- TEST -->

<a name="🔗06.8."></a>

06.8. Naming coroutines for debugging
==================================================

Automatically assigned ids are good when coroutines log often and you just need to correlate log records
coming from the same coroutine. However, when a coroutine is tied to the processing of a specific request
or doing some specific background task, it is better to name it explicitly for debugging purposes.
The [CoroutineName] context element serves the same purpose as the thread name. It is included in the thread name that
is executing this coroutine when the [debugging mode](#debugging-coroutines-and-threads) is turned on.

The following example demonstrates this concept:

```java,kotlin
import kotlinx.coroutines.*

fun log(msg: String) = println("[${Thread.currentThread().name}] $msg")

fun main() = runBlocking(CoroutineName("main")) {
//sampleStart
    log("Started main coroutine")
    // run two background value computations
    val v1 = async(CoroutineName("v1coroutine")) {
        delay(500)
        log("Computing v1")
        252
    }
    val v2 = async(CoroutineName("v2coroutine")) {
        delay(1000)
        log("Computing v2")
        6
    }
    log("The answer for v1 / v2 = ${v1.await() / v2.await()}")
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-08.kt).
>
{type="note"}

The output it produces with `-Dkotlinx.coroutines.debug` JVM option is similar to:
 
```text
[main @main#1] Started main coroutine
[main @v1coroutine#2] Computing v1
[main @v2coroutine#3] Computing v2
[main @main#1] The answer for v1 / v2 = 42
```

<!--- TEST FLEXIBLE_THREAD -->

<a name="🔗06.9."></a>

06.9. Combining context elements
==================================================

Sometimes we need to define multiple elements for a coroutine context. We can use the `+` operator for that.
For example, we can launch a coroutine with an explicitly specified dispatcher and an explicitly specified 
name at the same time: 

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
//sampleStart
    launch(Dispatchers.Default + CoroutineName("test")) {
        println("I'm working in thread ${Thread.currentThread().name}")
    }
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-09.kt).
>
{type="note"}

The output of this code with the `-Dkotlinx.coroutines.debug` JVM option is: 

```text
I'm working in thread DefaultDispatcher-worker-1 @test#2
```

<!--- TEST FLEXIBLE_THREAD -->

<a name="🔗06.10."></a>

06.10. Coroutine scope
==================================================

Let us put our knowledge about contexts, children and jobs together. Assume that our application has
an object with a lifecycle, but that object is not a coroutine. For example, we are writing an Android application
and launch various coroutines in the context of an Android activity to perform asynchronous operations to fetch 
and update data, do animations, etc. All of these coroutines must be cancelled when the activity is destroyed
to avoid memory leaks. We, of course, can manipulate contexts and jobs manually to tie the lifecycles of the activity 
and its coroutines, but `kotlinx.coroutines` provides an abstraction encapsulating that: [CoroutineScope].
You should be already familiar with the coroutine scope as all coroutine builders are declared as extensions on it. 

We manage the lifecycles of our coroutines by creating an instance of [CoroutineScope] tied to 
the lifecycle of our activity. A `CoroutineScope` instance can be created by the [CoroutineScope()] or [MainScope()]
factory functions. The former creates a general-purpose scope, while the latter creates a scope for UI applications and uses
[Dispatchers.Main] as the default dispatcher:

```java,kotlin
class Activity {
    private val mainScope = MainScope()
    
    fun destroy() {
        mainScope.cancel()
    }
    // to be continued ...
```

Now, we can launch coroutines in the scope of this `Activity` using the defined `scope`.
For the demo, we launch ten coroutines that delay for a different time:

```java,kotlin
    // class Activity continues
    fun doSomething() {
        // launch ten coroutines for a demo, each working for a different time
        repeat(10) { i ->
            mainScope.launch {
                delay((i + 1) * 200L) // variable delay 200ms, 400ms, ... etc
                println("Coroutine $i is done")
            }
        }
    }
} // class Activity ends
``` 

In our main function we create the activity, call our test `doSomething` function, and destroy the activity after 500ms.
This cancels all the coroutines that were launched from `doSomething`. We can see that because after the destruction 
of the activity no more messages are printed, even if we wait a little longer.

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*

class Activity {
    private val mainScope = CoroutineScope(Dispatchers.Default) // use Default for test purposes
    
    fun destroy() {
        mainScope.cancel()
    }

    fun doSomething() {
        // launch ten coroutines for a demo, each working for a different time
        repeat(10) { i ->
            mainScope.launch {
                delay((i + 1) * 200L) // variable delay 200ms, 400ms, ... etc
                println("Coroutine $i is done")
            }
        }
    }
} // class Activity ends

fun main() = runBlocking<Unit> {
//sampleStart
    val activity = Activity()
    activity.doSomething() // run test function
    println("Launched coroutines")
    delay(500L) // delay for half a second
    println("Destroying activity!")
    activity.destroy() // cancels all coroutines
    delay(1000) // visually confirm that they don't work
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-10.kt).
>
{type="note"}

The output of this example is:

```text
Launched coroutines
Coroutine 0 is done
Coroutine 1 is done
Destroying activity!
```

<!--- TEST -->

As you can see, only the first two coroutines print a message and the others are cancelled 
by a single invocation of `job.cancel()` in `Activity.destroy()`.

> Note, that Android has first-party support for coroutine scope in all entities with the lifecycle.
> See [the corresponding documentation](https://developer.android.com/topic/libraries/architecture/coroutines#lifecyclescope).
>
{type="note"}

<a name="🔗06.10.1."></a>

06.10.1. Thread-local data
==================================================

Sometimes it is convenient to have an ability to pass some thread-local data to or between coroutines. 
However, since they are not bound to any particular thread, this will likely lead to boilerplate if done manually.

For [`ThreadLocal`](https://docs.oracle.com/javase/8/docs/api/java/lang/ThreadLocal.html), 
the [asContextElement] extension function is here for the rescue. It creates an additional context element 
which keeps the value of the given `ThreadLocal` and restores it every time the coroutine switches its context.

It is easy to demonstrate it in action:

```java,kotlin
import kotlinx.coroutines.*

val threadLocal = ThreadLocal<String?>() // declare thread-local variable

fun main() = runBlocking<Unit> {
//sampleStart
    threadLocal.set("main")
    println("Pre-main, current thread: ${Thread.currentThread()}, thread local value: '${threadLocal.get()}'")
    val job = launch(Dispatchers.Default + threadLocal.asContextElement(value = "launch")) {
        println("Launch start, current thread: ${Thread.currentThread()}, thread local value: '${threadLocal.get()}'")
        yield()
        println("After yield, current thread: ${Thread.currentThread()}, thread local value: '${threadLocal.get()}'")
    }
    job.join()
    println("Post-main, current thread: ${Thread.currentThread()}, thread local value: '${threadLocal.get()}'")
//sampleEnd    
}
```  
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-context-11.kt).
>
{type="note"}

In this example we launch a new coroutine in a background thread pool using [Dispatchers.Default], so
it works on a different thread from the thread pool, but it still has the value of the thread local variable
that we specified using `threadLocal.asContextElement(value = "launch")`,
no matter which thread the coroutine is executed on.
Thus, the output (with [debug](#debugging-coroutines-and-threads)) is:

```text
Pre-main, current thread: Thread[main @coroutine#1,5,main], thread local value: 'main'
Launch start, current thread: Thread[DefaultDispatcher-worker-1 @coroutine#2,5,main], thread local value: 'launch'
After yield, current thread: Thread[DefaultDispatcher-worker-2 @coroutine#2,5,main], thread local value: 'launch'
Post-main, current thread: Thread[main @coroutine#1,5,main], thread local value: 'main'
```

<!--- TEST FLEXIBLE_THREAD -->

It's easy to forget to set the corresponding context element. The thread-local variable accessed from the coroutine may
then have an unexpected value, if the thread running the coroutine is different.
To avoid such situations, it is recommended to use the [ensurePresent] method
and fail-fast on improper usages.

`ThreadLocal` has first-class support and can be used with any primitive `kotlinx.coroutines` provides.
It has one key limitation, though: when a thread-local is mutated, a new value is not propagated to the coroutine caller 
(because a context element cannot track all `ThreadLocal` object accesses), and the updated value is lost on the next suspension.
Use [withContext] to update the value of the thread-local in a coroutine, see [asContextElement] for more details. 

Alternatively, a value can be stored in a mutable box like `class Counter(var i: Int)`, which is, in turn, 
stored in a thread-local variable. However, in this case you are fully responsible to synchronize 
potentially concurrent modifications to the variable in this mutable box.

For advanced usage, for example for integration with logging MDC, transactional contexts or any other libraries
which internally use thread-locals for passing data, see the documentation of the [ThreadContextElement] interface 
that should be implemented. 



<!--- END -->
<!--- TEST_NAME FlowGuideTest --> 

<a name="🔗07."></a>

📜 07. Asynchronous Flow
==================================================

A suspending function asynchronously returns a single value, but how can we return
multiple asynchronously computed values? This is where Kotlin Flows come in.

<a name="🔗07.1."></a>

07.1. Representing multiple values
==================================================

Multiple values can be represented in Kotlin using [collections]. 
For example, we can have a `simple` function that returns a [List] 
of three numbers and then print them all using [forEach]:

```java,kotlin
fun simple(): List<Int> = listOf(1, 2, 3)
 
fun main() {
    simple().forEach { value -> println(value) } 
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-01.kt).
>
{type="note"}

This code outputs:

```text
1
2
3
```

<!--- TEST -->

<a name="🔗07.1.1."></a>

07.1.1. Sequences
==================================================

If we are computing the numbers with some CPU-consuming blocking code 
(each computation taking 100ms), then we can represent the numbers using a [Sequence]:

```java,kotlin
fun simple(): Sequence<Int> = sequence { // sequence builder
    for (i in 1..3) {
        Thread.sleep(100) // pretend we are computing it
        yield(i) // yield next value
    }
}

fun main() {
    simple().forEach { value -> println(value) } 
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-02.kt).
>
{type="note"}

This code outputs the same numbers, but it waits 100ms before printing each one.

<!--- TEST 
1
2
3
-->

<a name="🔗07.1.2."></a>

07.1.2. Suspending functions
==================================================

However, this computation blocks the main thread that is running the code. 
When these values are computed by asynchronous code we can mark the `simple` function with a `suspend` modifier,
so that it can perform its work without blocking and return the result as a list:

```java,kotlin
import kotlinx.coroutines.*                 
                           
//sampleStart
suspend fun simple(): List<Int> {
    delay(1000) // pretend we are doing something asynchronous here
    return listOf(1, 2, 3)
}

fun main() = runBlocking<Unit> {
    simple().forEach { value -> println(value) } 
}
//sampleEnd
```  
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-03.kt).
>
{type="note"}

This code prints the numbers after waiting for a second.

<!--- TEST 
1
2
3
-->

<a name="🔗07.1.3."></a>

07.1.3. Flows
==================================================

Using the `List<Int>` result type, means we can only return all the values at once. To represent
the stream of values that are being computed asynchronously, we can use a [`Flow<Int>`][Flow] type just like we would use a `Sequence<Int>` type for synchronously computed values:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart               
fun simple(): Flow<Int> = flow { // flow builder
    for (i in 1..3) {
        delay(100) // pretend we are doing something useful here
        emit(i) // emit next value
    }
}

fun main() = runBlocking<Unit> {
    // Launch a concurrent coroutine to check if the main thread is blocked
    launch {
        for (k in 1..3) {
            println("I'm not blocked $k")
            delay(100)
        }
    }
    // Collect the flow
    simple().collect { value -> println(value) } 
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-04.kt).
>
{type="note"}

This code waits 100ms before printing each number without blocking the main thread. This is verified
by printing "I'm not blocked" every 100ms from a separate coroutine that is running in the main thread:

```text
I'm not blocked 1
1
I'm not blocked 2
2
I'm not blocked 3
3
```

<!--- TEST -->

Notice the following differences in the code with the [Flow] from the earlier examples:

* A builder function of [Flow] type is called [flow][_flow].
* Code inside a `flow { ... }` builder block can suspend.
* The `simple` function is no longer marked with a `suspend` modifier.   
* Values are _emitted_ from the flow using an [emit][FlowCollector.emit] function.
* Values are _collected_ from the flow using a [collect][collect] function.  

> We can replace [delay] with `Thread.sleep` in the body of `simple`'s `flow { ... }` and see that the main
> thread is blocked in this case. 
>
{type="note"}

<a name="🔗07.2."></a>

07.2. Flows are cold
==================================================

Flows are _cold_ streams similar to sequences — the code inside a [flow][_flow] builder does not
run until the flow is collected. This becomes clear in the following example:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart      
fun simple(): Flow<Int> = flow { 
    println("Flow started")
    for (i in 1..3) {
        delay(100)
        emit(i)
    }
}

fun main() = runBlocking<Unit> {
    println("Calling simple function...")
    val flow = simple()
    println("Calling collect...")
    flow.collect { value -> println(value) } 
    println("Calling collect again...")
    flow.collect { value -> println(value) } 
}
//sampleEnd
```  
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-05.kt).
>
{type="note"}

Which prints:

```text
Calling simple function...
Calling collect...
Flow started
1
2
3
Calling collect again...
Flow started
1
2
3
```

<!--- TEST -->
 
This is a key reason the `simple` function (which returns a flow) is not marked with `suspend` modifier.
The `simple()` call itself returns quickly and does not wait for anything. The flow starts afresh every time it is 
collected and that is why we see "Flow started" every time we call `collect` again.

<a name="🔗07.3."></a>

07.3. Flow cancellation basics
==================================================

Flows adhere to the general cooperative cancellation of coroutines. As usual, flow collection can be 
cancelled when the flow is suspended in a cancellable suspending function (like [delay]).
The following example shows how the flow gets cancelled on a timeout when running in a [withTimeoutOrNull] block 
and stops executing its code:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart           
fun simple(): Flow<Int> = flow { 
    for (i in 1..3) {
        delay(100)          
        println("Emitting $i")
        emit(i)
    }
}

fun main() = runBlocking<Unit> {
    withTimeoutOrNull(250) { // Timeout after 250ms 
        simple().collect { value -> println(value) } 
    }
    println("Done")
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-06.kt).
>
{type="note"}

Notice how only two numbers get emitted by the flow in the `simple` function, producing the following output: 

```text
Emitting 1
1
Emitting 2
2
Done
```

<!--- TEST -->

See [Flow cancellation checks](#flow-cancellation-checks) section for more details.

<a name="🔗07.4."></a>

07.4. Flow builders
==================================================

The `flow { ... }` builder from the previous examples is the most basic one. There are other builders 
that allow flows to be declared:

* The [flowOf] builder defines a flow that emits a fixed set of values.
* Various collections and sequences can be converted to flows using the `.asFlow()` extension function.

For example, the snippet that prints the numbers 1 to 3 from a flow can be rewritten as follows:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun main() = runBlocking<Unit> {
//sampleStart
    // Convert an integer range to a flow
    (1..3).asFlow().collect { value -> println(value) }
//sampleEnd 
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-07.kt).
>
{type="note"}

<!--- TEST
1
2
3
-->

<a name="🔗07.5."></a>

07.5. Intermediate flow operators
==================================================

Flows can be transformed using operators, in the same way as you would transform collections and 
sequences. 
Intermediate operators are applied to an upstream flow and return a downstream flow. 
These operators are cold, just like flows are. A call to such an operator is not
a suspending function itself. It works quickly, returning the definition of a new transformed flow. 

The basic operators have familiar names like [map] and [filter]. 
An important difference of these operators from sequences is that blocks of 
code inside these operators can call suspending functions. 

For example, a flow of incoming requests can be
mapped to its results with a [map] operator, even when performing a request is a long-running
operation that is implemented by a suspending function:   

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart           
suspend fun performRequest(request: Int): String {
    delay(1000) // imitate long-running asynchronous work
    return "response $request"
}

fun main() = runBlocking<Unit> {
    (1..3).asFlow() // a flow of requests
        .map { request -> performRequest(request) }
        .collect { response -> println(response) }
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-08.kt).
>
{type="note"}

It produces the following three lines, each appearing one second after the previous:

```text                                                                    
response 1
response 2
response 3
```

<!--- TEST -->

<a name="🔗07.5.1."></a>

07.5.1. Transform operator
==================================================

Among the flow transformation operators, the most general one is called [transform]. It can be used to imitate
simple transformations like [map] and [filter], as well as implement more complex transformations. 
Using the `transform` operator, we can [emit][FlowCollector.emit] arbitrary values an arbitrary number of times.

For example, using `transform` we can emit a string before performing a long-running asynchronous request 
and follow it with a response:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

suspend fun performRequest(request: Int): String {
    delay(1000) // imitate long-running asynchronous work
    return "response $request"
}

fun main() = runBlocking<Unit> {
//sampleStart
    (1..3).asFlow() // a flow of requests
        .transform { request ->
            emit("Making request $request") 
            emit(performRequest(request)) 
        }
        .collect { response -> println(response) }
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-09.kt).
>
{type="note"}

The output of this code is:

```text
Making request 1
response 1
Making request 2
response 2
Making request 3
response 3
```

<!--- TEST -->

<a name="🔗07.5.2."></a>

07.5.2. Size-limiting operators
==================================================

Size-limiting intermediate operators like [take] cancel the execution of the flow when the corresponding limit
is reached. Cancellation in coroutines is always performed by throwing an exception, so that all the resource-management
functions (like `try { ... } finally { ... }` blocks) operate normally in case of cancellation:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart
fun numbers(): Flow<Int> = flow {
    try {                          
        emit(1)
        emit(2) 
        println("This line will not execute")
        emit(3)    
    } finally {
        println("Finally in numbers")
    }
}

fun main() = runBlocking<Unit> {
    numbers() 
        .take(2) // take only the first two
        .collect { value -> println(value) }
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-10.kt).
>
{type="note"}

The output of this code clearly shows that the execution of the `flow { ... }` body in the `numbers()` function
stopped after emitting the second number:

```text       
1
2
Finally in numbers
```

<!--- TEST -->

<a name="🔗07.6."></a>

07.6. Terminal flow operators
==================================================

Terminal operators on flows are _suspending functions_ that start a collection of the flow.
The [collect] operator is the most basic one, but there are other terminal operators, which can make it easier:

* Conversion to various collections like [toList] and [toSet].
* Operators to get the [first] value and to ensure that a flow emits a [single] value.
* Reducing a flow to a value with [reduce] and [fold].

For example:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun main() = runBlocking<Unit> {
//sampleStart         
    val sum = (1..5).asFlow()
        .map { it * it } // squares of numbers from 1 to 5                           
        .reduce { a, b -> a + b } // sum them (terminal operator)
    println(sum)
//sampleEnd     
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-11.kt).
>
{type="note"}

Prints a single number:

```text
55
```

<!--- TEST -->

<a name="🔗07.7."></a>

07.7. Flows are sequential
==================================================

Each individual collection of a flow is performed sequentially unless special operators that operate
on multiple flows are used. The collection works directly in the coroutine that calls a terminal operator. 
No new coroutines are launched by default. 
Each emitted value is processed by all the intermediate operators from 
upstream to downstream and is then delivered to the terminal operator after. 

See the following example that filters the even integers and maps them to strings:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun main() = runBlocking<Unit> {
//sampleStart         
    (1..5).asFlow()
        .filter {
            println("Filter $it")
            it % 2 == 0              
        }              
        .map { 
            println("Map $it")
            "string $it"
        }.collect { 
            println("Collect $it")
        }    
//sampleEnd                  
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-12.kt).
>
{type="note"}

Producing:

```text
Filter 1
Filter 2
Map 2
Collect string 2
Filter 3
Filter 4
Map 4
Collect string 4
Filter 5
```

<!--- TEST -->

<a name="🔗07.8."></a>

07.8. Flow context
==================================================

Collection of a flow always happens in the context of the calling coroutine. For example, if there is 
a `simple` flow, then the following code runs in the context specified
by the author of this code, regardless of the implementation details of the `simple` flow:

```java,kotlin
withContext(context) {
    simple().collect { value ->
        println(value) // run in the specified context 
    }
}
```

<!--- CLEAR -->

This property of a flow is called _context preservation_.

So, by default, code in the `flow { ... }` builder runs in the context that is provided by a collector
of the corresponding flow. For example, consider the implementation of a `simple` function that prints the thread
it is called on and emits three numbers:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun log(msg: String) = println("[${Thread.currentThread().name}] $msg")
           
//sampleStart
fun simple(): Flow<Int> = flow {
    log("Started simple flow")
    for (i in 1..3) {
        emit(i)
    }
}  

fun main() = runBlocking<Unit> {
    simple().collect { value -> log("Collected $value") } 
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-13.kt).
>
{type="note"}

Running this code produces:

```text  
[main @coroutine#1] Started simple flow
[main @coroutine#1] Collected 1
[main @coroutine#1] Collected 2
[main @coroutine#1] Collected 3
```

<!--- TEST FLEXIBLE_THREAD -->

Since `simple().collect` is called from the main thread, the body of `simple`'s flow is also called in the main thread.
This is the perfect default for fast-running or asynchronous code that does not care about the execution context and
does not block the caller. 

<a name="🔗07.8.1."></a>

07.8.1. A common pitfall when using withContext
==================================================

However, the long-running CPU-consuming code might need to be executed in the context of [Dispatchers.Default] and UI-updating
code might need to be executed in the context of [Dispatchers.Main]. Usually, [withContext] is used
to change the context in the code using Kotlin coroutines, but code in the `flow { ... }` builder has to honor the context
preservation property and is not allowed to [emit][FlowCollector.emit] from a different context. 

Try running the following code:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
                      
//sampleStart
fun simple(): Flow<Int> = flow {
    // The WRONG way to change context for CPU-consuming code in flow builder
    kotlinx.coroutines.withContext(Dispatchers.Default) {
        for (i in 1..3) {
            Thread.sleep(100) // pretend we are computing it in CPU-consuming way
            emit(i) // emit next value
        }
    }
}

fun main() = runBlocking<Unit> {
    simple().collect { value -> println(value) } 
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-14.kt).
>
{type="note"}

This code produces the following exception:

```text
Exception in thread "main" java.lang.IllegalStateException: Flow invariant is violated:
		Flow was collected in [CoroutineId(1), "coroutine#1":BlockingCoroutine{Active}@5511c7f8, BlockingEventLoop@2eac3323],
		but emission happened in [CoroutineId(1), "coroutine#1":DispatchedCoroutine{Active}@2dae0000, Dispatchers.Default].
		Please refer to 'flow' documentation or use 'flowOn' instead
	at ...
``` 

<!--- TEST EXCEPTION -->

<a name="🔗07.8.2."></a>

07.8.2. flowOn operator
==================================================
   
The exception refers to the [flowOn] function that shall be used to change the context of the flow emission.
The correct way to change the context of a flow is shown in the example below, which also prints the 
names of the corresponding threads to show how it all works:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun log(msg: String) = println("[${Thread.currentThread().name}] $msg")
           
//sampleStart
fun simple(): Flow<Int> = flow {
    for (i in 1..3) {
        Thread.sleep(100) // pretend we are computing it in CPU-consuming way
        log("Emitting $i")
        emit(i) // emit next value
    }
}.flowOn(Dispatchers.Default) // RIGHT way to change context for CPU-consuming code in flow builder

fun main() = runBlocking<Unit> {
    simple().collect { value ->
        log("Collected $value") 
    } 
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-15.kt).
>
{type="note"}
  
Notice how `flow { ... }` works in the background thread, while collection happens in the main thread:   

<!--- TEST FLEXIBLE_THREAD
[DefaultDispatcher-worker-1 @coroutine#2] Emitting 1
[main @coroutine#1] Collected 1
[DefaultDispatcher-worker-1 @coroutine#2] Emitting 2
[main @coroutine#1] Collected 2
[DefaultDispatcher-worker-1 @coroutine#2] Emitting 3
[main @coroutine#1] Collected 3
-->

Another thing to observe here is that the [flowOn] operator has changed the default sequential nature of the flow.
Now collection happens in one coroutine ("coroutine#1") and emission happens in another coroutine
("coroutine#2") that is running in another thread concurrently with the collecting coroutine. The [flowOn] operator
creates another coroutine for an upstream flow when it has to change the [CoroutineDispatcher] in its context. 

<a name="🔗07.9."></a>

07.9. Buffering
==================================================

Running different parts of a flow in different coroutines can be helpful from the standpoint of the overall time it takes 
to collect the flow, especially when long-running asynchronous operations are involved. For example, consider a case when
the emission by a `simple` flow is slow, taking 100 ms to produce an element; and collector is also slow, 
taking 300 ms to process an element. Let's see how long it takes to collect such a flow with three numbers:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
import kotlin.system.*

//sampleStart
fun simple(): Flow<Int> = flow {
    for (i in 1..3) {
        delay(100) // pretend we are asynchronously waiting 100 ms
        emit(i) // emit next value
    }
}

fun main() = runBlocking<Unit> { 
    val time = measureTimeMillis {
        simple().collect { value -> 
            delay(300) // pretend we are processing it for 300 ms
            println(value) 
        } 
    }   
    println("Collected in $time ms")
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-16.kt).
>
{type="note"}

It produces something like this, with the whole collection taking around 1200 ms (three numbers, 400 ms for each):

```text
1
2
3
Collected in 1220 ms
```

<!--- TEST ARBITRARY_TIME -->

We can use a [buffer] operator on a flow to run emitting code of the `simple` flow concurrently with collecting code,
as opposed to running them sequentially:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
import kotlin.system.*

fun simple(): Flow<Int> = flow {
    for (i in 1..3) {
        delay(100) // pretend we are asynchronously waiting 100 ms
        emit(i) // emit next value
    }
}

fun main() = runBlocking<Unit> { 
//sampleStart
    val time = measureTimeMillis {
        simple()
            .buffer() // buffer emissions, don't wait
            .collect { value -> 
                delay(300) // pretend we are processing it for 300 ms
                println(value) 
            } 
    }   
    println("Collected in $time ms")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-17.kt).
>
{type="note"}

It produces the same numbers just faster, as we have effectively created a processing pipeline,
having to only wait 100 ms for the first number and then spending only 300 ms to process
each number. This way it takes around 1000 ms to run:

```text
1
2
3
Collected in 1071 ms
```                    

<!--- TEST ARBITRARY_TIME -->

> Note that the [flowOn] operator uses the same buffering mechanism when it has to change a [CoroutineDispatcher],
> but here we explicitly request buffering without changing the execution context.
>
{type="note"}

<a name="🔗07.9.1."></a>

07.9.1. Conflation
==================================================

When a flow represents partial results of the operation or operation status updates, it may not be necessary
to process each value, but instead, only most recent ones. In this case, the [conflate] operator can be used to skip
intermediate values when a collector is too slow to process them. Building on the previous example:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
import kotlin.system.*

fun simple(): Flow<Int> = flow {
    for (i in 1..3) {
        delay(100) // pretend we are asynchronously waiting 100 ms
        emit(i) // emit next value
    }
}

fun main() = runBlocking<Unit> { 
//sampleStart
    val time = measureTimeMillis {
        simple()
            .conflate() // conflate emissions, don't process each one
            .collect { value -> 
                delay(300) // pretend we are processing it for 300 ms
                println(value) 
            } 
    }   
    println("Collected in $time ms")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-18.kt).
>
{type="note"}

We see that while the first number was still being processed the second, and third were already produced, so
the second one was _conflated_ and only the most recent (the third one) was delivered to the collector:

```text
1
3
Collected in 758 ms
```             

<!--- TEST ARBITRARY_TIME -->

<a name="🔗07.9.2."></a>

07.9.2. Processing the latest value
==================================================

Conflation is one way to speed up processing when both the emitter and collector are slow. It does it by dropping emitted values.
The other way is to cancel a slow collector and restart it every time a new value is emitted. There is
a family of `xxxLatest` operators that perform the same essential logic of a `xxx` operator, but cancel the
code in their block on a new value. Let's try changing [conflate] to [collectLatest] in the previous example:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
import kotlin.system.*

fun simple(): Flow<Int> = flow {
    for (i in 1..3) {
        delay(100) // pretend we are asynchronously waiting 100 ms
        emit(i) // emit next value
    }
}

fun main() = runBlocking<Unit> { 
//sampleStart
    val time = measureTimeMillis {
        simple()
            .collectLatest { value -> // cancel & restart on the latest value
                println("Collecting $value") 
                delay(300) // pretend we are processing it for 300 ms
                println("Done $value") 
            } 
    }   
    println("Collected in $time ms")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-19.kt).
>
{type="note"}
 
Since the body of [collectLatest] takes 300 ms, but new values are emitted every 100 ms, we see that the block
is run on every value, but completes only for the last value:

```text 
Collecting 1
Collecting 2
Collecting 3
Done 3
Collected in 741 ms
``` 

<!--- TEST ARBITRARY_TIME -->

<a name="🔗07.10."></a>

07.10. Composing multiple flows
==================================================

There are lots of ways to compose multiple flows.

<a name="🔗07.10.1."></a>

07.10.1. Zip
==================================================

Just like the [Sequence.zip] extension function in the Kotlin standard library, 
flows have a [zip] operator that combines the corresponding values of two flows:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun main() = runBlocking<Unit> { 
//sampleStart                                                                           
    val nums = (1..3).asFlow() // numbers 1..3
    val strs = flowOf("one", "two", "three") // strings 
    nums.zip(strs) { a, b -> "$a -> $b" } // compose a single string
        .collect { println(it) } // collect and print
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-20.kt).
>
{type="note"}

This example prints:

```text
1 -> one
2 -> two
3 -> three
```
 
<!--- TEST -->

<a name="🔗07.10.2."></a>

07.10.2. Combine
==================================================

When flow represents the most recent value of a variable or operation (see also the related 
section on [conflation](#conflation)), it might be needed to perform a computation that depends on
the most recent values of the corresponding flows and to recompute it whenever any of the upstream
flows emit a value. The corresponding family of operators is called [combine].

For example, if the numbers in the previous example update every 300ms, but strings update every 400 ms, 
then zipping them using the [zip] operator will still produce the same result, 
albeit results that are printed every 400 ms:

> We use a [onEach] intermediate operator in this example to delay each element and make the code 
> that emits sample flows more declarative and shorter.
>
{type="note"}

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun main() = runBlocking<Unit> { 
//sampleStart                                                                           
    val nums = (1..3).asFlow().onEach { delay(300) } // numbers 1..3 every 300 ms
    val strs = flowOf("one", "two", "three").onEach { delay(400) } // strings every 400 ms
    val startTime = System.currentTimeMillis() // remember the start time 
    nums.zip(strs) { a, b -> "$a -> $b" } // compose a single string with "zip"
        .collect { value -> // collect and print 
            println("$value at ${System.currentTimeMillis() - startTime} ms from start") 
        } 
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-21.kt).
>
{type="note"}

<!--- TEST ARBITRARY_TIME
1 -> one at 437 ms from start
2 -> two at 837 ms from start
3 -> three at 1243 ms from start
-->

However, when using a [combine] operator here instead of a [zip]:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun main() = runBlocking<Unit> { 
//sampleStart                                                                           
    val nums = (1..3).asFlow().onEach { delay(300) } // numbers 1..3 every 300 ms
    val strs = flowOf("one", "two", "three").onEach { delay(400) } // strings every 400 ms          
    val startTime = System.currentTimeMillis() // remember the start time 
    nums.combine(strs) { a, b -> "$a -> $b" } // compose a single string with "combine"
        .collect { value -> // collect and print 
            println("$value at ${System.currentTimeMillis() - startTime} ms from start") 
        } 
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-22.kt).
>
{type="note"}

We get quite a different output, where a line is printed at each emission from either `nums` or `strs` flows:

```text 
1 -> one at 452 ms from start
2 -> one at 651 ms from start
2 -> two at 854 ms from start
3 -> two at 952 ms from start
3 -> three at 1256 ms from start
```

<!--- TEST ARBITRARY_TIME -->

<a name="🔗07.11."></a>

07.11. Flattening flows
==================================================

Flows represent asynchronously received sequences of values, and so it is quite easy to get into a situation 
where each value triggers a request for another sequence of values. For example, we can have the following
function that returns a flow of two strings 500 ms apart:

```java,kotlin
fun requestFlow(i: Int): Flow<String> = flow {
    emit("$i: First") 
    delay(500) // wait 500 ms
    emit("$i: Second")    
}
```

<!--- CLEAR -->

Now if we have a flow of three integers and call `requestFlow` on each of them like this:

```java,kotlin
(1..3).asFlow().map { requestFlow(it) }
```

<!--- CLEAR -->

Then we will end up with a flow of flows (`Flow<Flow<String>>`) that needs to be _flattened_ into a single flow for 
further processing. Collections and sequences have [flatten][Sequence.flatten] and [flatMap][Sequence.flatMap]
operators for this. However, due to the asynchronous nature of flows they call for different _modes_ of flattening, 
and hence, a family of flattening operators on flows exists.

<a name="🔗07.11.1."></a>

07.11.1. flatMapConcat
==================================================

Concatenation of flows of flows is provided by the [flatMapConcat] and [flattenConcat] operators. They are the 
most direct analogues of the corresponding sequence operators. They wait for the inner flow to complete before
starting to collect the next one as the following example shows:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun requestFlow(i: Int): Flow<String> = flow {
    emit("$i: First") 
    delay(500) // wait 500 ms
    emit("$i: Second")    
}

fun main() = runBlocking<Unit> { 
//sampleStart
    val startTime = System.currentTimeMillis() // remember the start time 
    (1..3).asFlow().onEach { delay(100) } // emit a number every 100 ms 
        .flatMapConcat { requestFlow(it) }                                                                           
        .collect { value -> // collect and print 
            println("$value at ${System.currentTimeMillis() - startTime} ms from start") 
        } 
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-23.kt).
>
{type="note"}

The sequential nature of [flatMapConcat] is clearly seen in the output:

```text                      
1: First at 121 ms from start
1: Second at 622 ms from start
2: First at 727 ms from start
2: Second at 1227 ms from start
3: First at 1328 ms from start
3: Second at 1829 ms from start
```

<!--- TEST ARBITRARY_TIME -->

<a name="🔗07.11.2."></a>

07.11.2. flatMapMerge
==================================================

Another flattening operation is to concurrently collect all the incoming flows and merge their values into
a single flow so that values are emitted as soon as possible.
It is implemented by [flatMapMerge] and [flattenMerge] operators. They both accept an optional 
`concurrency` parameter that limits the number of concurrent flows that are collected at the same time
(it is equal to [DEFAULT_CONCURRENCY] by default). 

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun requestFlow(i: Int): Flow<String> = flow {
    emit("$i: First") 
    delay(500) // wait 500 ms
    emit("$i: Second")    
}

fun main() = runBlocking<Unit> { 
//sampleStart
    val startTime = System.currentTimeMillis() // remember the start time 
    (1..3).asFlow().onEach { delay(100) } // a number every 100 ms 
        .flatMapMerge { requestFlow(it) }                                                                           
        .collect { value -> // collect and print 
            println("$value at ${System.currentTimeMillis() - startTime} ms from start") 
        } 
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-24.kt).
>
{type="note"}

The concurrent nature of [flatMapMerge] is obvious:

```text                      
1: First at 136 ms from start
2: First at 231 ms from start
3: First at 333 ms from start
1: Second at 639 ms from start
2: Second at 732 ms from start
3: Second at 833 ms from start
```                                               

<!--- TEST ARBITRARY_TIME -->

> Note that the [flatMapMerge] calls its block of code (`{ requestFlow(it) }` in this example) sequentially, but 
> collects the resulting flows concurrently, it is the equivalent of performing a sequential 
> `map { requestFlow(it) }` first and then calling [flattenMerge] on the result.
>
{type="note"}

<a name="🔗07.11.3."></a>

07.11.3. flatMapLatest   
==================================================

In a similar way to the [collectLatest] operator, that was described in the section
["Processing the latest value"](#processing-the-latest-value), there is the corresponding "Latest" 
flattening mode where the collection of the previous flow is cancelled as soon as new flow is emitted. 
It is implemented by the [flatMapLatest] operator.

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun requestFlow(i: Int): Flow<String> = flow {
    emit("$i: First") 
    delay(500) // wait 500 ms
    emit("$i: Second")    
}

fun main() = runBlocking<Unit> { 
//sampleStart
    val startTime = System.currentTimeMillis() // remember the start time 
    (1..3).asFlow().onEach { delay(100) } // a number every 100 ms 
        .flatMapLatest { requestFlow(it) }                                                                           
        .collect { value -> // collect and print 
            println("$value at ${System.currentTimeMillis() - startTime} ms from start") 
        } 
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-25.kt).
>
{type="note"}

The output here in this example is a good demonstration of how [flatMapLatest] works:

```text                      
1: First at 142 ms from start
2: First at 322 ms from start
3: First at 425 ms from start
3: Second at 931 ms from start
```                                               

<!--- TEST ARBITRARY_TIME -->
  
> Note that [flatMapLatest] cancels all the code in its block (`{ requestFlow(it) }` in this example) when a new value
> is received. 
> It makes no difference in this particular example, because the call to `requestFlow` itself is fast, not-suspending,
> and cannot be cancelled. However, a differnce in output would be visible if we were to use suspending functions 
> like `delay` in `requestFlow`.
>
{type="note"}

<a name="🔗07.12."></a>

07.12. Flow exceptions
==================================================

Flow collection can complete with an exception when an emitter or code inside the operators throw an exception. 
There are several ways to handle these exceptions.

<a name="🔗07.12.1."></a>

07.12.1. Collector try and catch
==================================================

A collector can use Kotlin's [`try/catch`][exceptions] block to handle exceptions: 

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart
fun simple(): Flow<Int> = flow {
    for (i in 1..3) {
        println("Emitting $i")
        emit(i) // emit next value
    }
}

fun main() = runBlocking<Unit> {
    try {
        simple().collect { value ->         
            println(value)
            check(value <= 1) { "Collected $value" }
        }
    } catch (e: Throwable) {
        println("Caught $e")
    } 
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-26.kt).
>
{type="note"}

This code successfully catches an exception in [collect] terminal operator and, 
as we see, no more values are emitted after that:

```text 
Emitting 1
1
Emitting 2
2
Caught java.lang.IllegalStateException: Collected 2
```

<!--- TEST -->

<a name="🔗07.12.2."></a>

07.12.2. Everything is caught
==================================================

The previous example actually catches any exception happening in the emitter or in any intermediate or terminal operators.
For example, let's change the code so that emitted values are [mapped][map] to strings,
but the corresponding code produces an exception:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart
fun simple(): Flow<String> = 
    flow {
        for (i in 1..3) {
            println("Emitting $i")
            emit(i) // emit next value
        }
    }
    .map { value ->
        check(value <= 1) { "Crashed on $value" }                 
        "string $value"
    }

fun main() = runBlocking<Unit> {
    try {
        simple().collect { value -> println(value) }
    } catch (e: Throwable) {
        println("Caught $e")
    } 
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-27.kt).
>
{type="note"}

This exception is still caught and collection is stopped:

```text 
Emitting 1
string 1
Emitting 2
Caught java.lang.IllegalStateException: Crashed on 2
```

<!--- TEST -->

<a name="🔗07.13."></a>

07.13. Exception transparency
==================================================

But how can code of the emitter encapsulate its exception handling behavior?  

Flows must be _transparent to exceptions_ and it is a violation of the exception transparency to [emit][FlowCollector.emit] values in the 
`flow { ... }` builder from inside of a `try/catch` block. This guarantees that a collector throwing an exception
can always catch it using `try/catch` as in the previous example.

The emitter can use a [catch] operator that preserves this exception transparency and allows encapsulation
of its exception handling. The body of the `catch` operator can analyze an exception
and react to it in different ways depending on which exception was caught:

* Exceptions can be rethrown using `throw`.
* Exceptions can be turned into emission of values using [emit][FlowCollector.emit] from the body of [catch].
* Exceptions can be ignored, logged, or processed by some other code.

For example, let us emit the text on catching an exception:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun simple(): Flow<String> = 
    flow {
        for (i in 1..3) {
            println("Emitting $i")
            emit(i) // emit next value
        }
    }
    .map { value ->
        check(value <= 1) { "Crashed on $value" }                 
        "string $value"
    }

fun main() = runBlocking<Unit> {
//sampleStart
    simple()
        .catch { e -> emit("Caught $e") } // emit on exception
        .collect { value -> println(value) }
//sampleEnd
}            
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-28.kt).
>
{type="note"} 
 
The output of the example is the same, even though we do not have `try/catch` around the code anymore. 

<!--- TEST  
Emitting 1
string 1
Emitting 2
Caught java.lang.IllegalStateException: Crashed on 2
-->

<a name="🔗07.13.1."></a>

07.13.1. Transparent catch
==================================================

The [catch] intermediate operator, honoring exception transparency, catches only upstream exceptions
(that is an exception from all the operators above `catch`, but not below it).
If the block in `collect { ... }` (placed below `catch`) throws an exception then it escapes:  

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart
fun simple(): Flow<Int> = flow {
    for (i in 1..3) {
        println("Emitting $i")
        emit(i)
    }
}

fun main() = runBlocking<Unit> {
    simple()
        .catch { e -> println("Caught $e") } // does not catch downstream exceptions
        .collect { value ->
            check(value <= 1) { "Collected $value" }                 
            println(value) 
        }
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-29.kt).
>
{type="note"}
 
A "Caught ..." message is not printed despite there being a `catch` operator: 

```text  
Emitting 1
1
Emitting 2
Exception in thread "main" java.lang.IllegalStateException: Collected 2
	at ...
```

<!--- TEST EXCEPTION -->

<a name="🔗07.13.2."></a>

07.13.2. Catching declaratively
==================================================

We can combine the declarative nature of the [catch] operator with a desire to handle all the exceptions, by moving the body
of the [collect] operator into [onEach] and putting it before the `catch` operator. Collection of this flow must
be triggered by a call to `collect()` without parameters:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun simple(): Flow<Int> = flow {
    for (i in 1..3) {
        println("Emitting $i")
        emit(i)
    }
}

fun main() = runBlocking<Unit> {
//sampleStart
    simple()
        .onEach { value ->
            check(value <= 1) { "Collected $value" }                 
            println(value) 
        }
        .catch { e -> println("Caught $e") }
        .collect()
//sampleEnd
}            
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-30.kt).
>
{type="note"} 
 
Now we can see that a "Caught ..." message is printed and so we can catch all the exceptions without explicitly
using a `try/catch` block: 

```text 
Emitting 1
1
Emitting 2
Caught java.lang.IllegalStateException: Collected 2
```

<!--- TEST EXCEPTION -->

<a name="🔗07.14."></a>

07.14. Flow completion
==================================================

When flow collection completes (normally or exceptionally) it may need to execute an action. 
As you may have already noticed, it can be done in two ways: imperative or declarative.

<a name="🔗07.14.1."></a>

07.14.1. Imperative finally block
==================================================

In addition to `try`/`catch`, a collector can also use a `finally` block to execute an action 
upon `collect` completion.

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart
fun simple(): Flow<Int> = (1..3).asFlow()

fun main() = runBlocking<Unit> {
    try {
        simple().collect { value -> println(value) }
    } finally {
        println("Done")
    }
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-31.kt).
>
{type="note"} 

This code prints three numbers produced by the `simple` flow followed by a "Done" string:

```text
1
2
3
Done
```

<!--- TEST  -->

<a name="🔗07.14.2."></a>

07.14.2. Declarative handling
==================================================

For the declarative approach, flow has [onCompletion] intermediate operator that is invoked
when the flow has completely collected.

The previous example can be rewritten using an [onCompletion] operator and produces the same output:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun simple(): Flow<Int> = (1..3).asFlow()

fun main() = runBlocking<Unit> {
//sampleStart
    simple()
        .onCompletion { println("Done") }
        .collect { value -> println(value) }
//sampleEnd
}            
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-32.kt).
>
{type="note"} 

<!--- TEST 
1
2
3
Done
-->

The key advantage of [onCompletion] is a nullable `Throwable` parameter of the lambda that can be used
to determine whether the flow collection was completed normally or exceptionally. In the following
example the `simple` flow throws an exception after emitting the number 1:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart
fun simple(): Flow<Int> = flow {
    emit(1)
    throw RuntimeException()
}

fun main() = runBlocking<Unit> {
    simple()
        .onCompletion { cause -> if (cause != null) println("Flow completed exceptionally") }
        .catch { cause -> println("Caught exception") }
        .collect { value -> println(value) }
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-33.kt).
>
{type="note"}

As you may expect, it prints:

```text
1
Flow completed exceptionally
Caught exception
```

<!--- TEST -->

The [onCompletion] operator, unlike [catch], does not handle the exception. As we can see from the above
example code, the exception still flows downstream. It will be delivered to further `onCompletion` operators
and can be handled with a `catch` operator.

<a name="🔗07.14.3."></a>

07.14.3. Successful completion
==================================================

Another difference with [catch] operator is that [onCompletion] sees all exceptions and receives
a `null` exception only on successful completion of the upstream flow (without cancellation or failure).

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart
fun simple(): Flow<Int> = (1..3).asFlow()

fun main() = runBlocking<Unit> {
    simple()
        .onCompletion { cause -> println("Flow completed with $cause") }
        .collect { value ->
            check(value <= 1) { "Collected $value" }                 
            println(value) 
        }
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-34.kt).
>
{type="note"}

We can see the completion cause is not null, because the flow was aborted due to downstream exception:

```text 
1
Flow completed with java.lang.IllegalStateException: Collected 2
Exception in thread "main" java.lang.IllegalStateException: Collected 2
```

<!--- TEST EXCEPTION -->

<a name="🔗07.15."></a>

07.15. Imperative versus declarative
==================================================

Now we know how to collect flow, and handle its completion and exceptions in both imperative and declarative ways.
The natural question here is, which approach is preferred and why?
As a library, we do not advocate for any particular approach and believe that both options
are valid and should be selected according to your own preferences and code style. 

<a name="🔗07.16."></a>

07.16. Launching flow
==================================================

It is easy to use flows to represent asynchronous events that are coming from some source.
In this case, we need an analogue of the `addEventListener` function that registers a piece of code with a reaction
for incoming events and continues further work. The [onEach] operator can serve this role. 
However, `onEach` is an intermediate operator. We also need a terminal operator to collect the flow. 
Otherwise, just calling `onEach` has no effect.
 
If we use the [collect] terminal operator after `onEach`, then the code after it will wait until the flow is collected:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart
// Imitate a flow of events
fun events(): Flow<Int> = (1..3).asFlow().onEach { delay(100) }

fun main() = runBlocking<Unit> {
    events()
        .onEach { event -> println("Event: $event") }
        .collect() // <--- Collecting the flow waits
    println("Done")
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-35.kt).
>
{type="note"} 
  
As you can see, it prints:

```text 
Event: 1
Event: 2
Event: 3
Done
```    

<!--- TEST -->
 
The [launchIn] terminal operator comes in handy here. By replacing `collect` with `launchIn` we can
launch a collection of the flow in a separate coroutine, so that execution of further code 
immediately continues:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

// Imitate a flow of events
fun events(): Flow<Int> = (1..3).asFlow().onEach { delay(100) }

//sampleStart
fun main() = runBlocking<Unit> {
    events()
        .onEach { event -> println("Event: $event") }
        .launchIn(this) // <--- Launching the flow in a separate coroutine
    println("Done")
}            
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-36.kt).
>
{type="note"} 
  
It prints:

```text          
Done
Event: 1
Event: 2
Event: 3
```    

<!--- TEST -->

The required parameter to `launchIn` must specify a [CoroutineScope] in which the coroutine to collect the flow is 
launched. In the above example this scope comes from the [runBlocking]
coroutine builder, so while the flow is running, this [runBlocking] scope waits for completion of its child coroutine
and keeps the main function from returning and terminating this example. 

In actual applications a scope will come from an entity with a limited 
lifetime. As soon as the lifetime of this entity is terminated the corresponding scope is cancelled, cancelling
the collection of the corresponding flow. This way the pair of `onEach { ... }.launchIn(scope)` works
like the `addEventListener`. However, there is no need for the corresponding `removeEventListener` function, 
as cancellation and structured concurrency serve this purpose.

Note that [launchIn] also returns a [Job], which can be used to [cancel][Job.cancel] the corresponding flow collection
coroutine only without cancelling the whole scope or to [join][Job.join] it.

<a name="🔗07.16.1."></a>

07.16.1. Flow cancellation checks
==================================================

For convenience, the [flow][_flow] builder performs additional [ensureActive] checks for cancellation on each emitted value. 
It means that a busy loop emitting from a `flow { ... }` is cancellable:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart           
fun foo(): Flow<Int> = flow { 
    for (i in 1..5) {
        println("Emitting $i") 
        emit(i) 
    }
}

fun main() = runBlocking<Unit> {
    foo().collect { value -> 
        if (value == 3) cancel()  
        println(value)
    } 
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-37.kt).
>
{type="note"}

We get only numbers up to 3 and a [CancellationException] after trying to emit number 4:

```text 
Emitting 1
1
Emitting 2
2
Emitting 3
3
Emitting 4
Exception in thread "main" kotlinx.coroutines.JobCancellationException: BlockingCoroutine was cancelled; job="coroutine#1":BlockingCoroutine{Cancelled}@6d7b4f4c
```

<!--- TEST EXCEPTION -->

However, most other flow operators do not do additional cancellation checks on their own for performance reasons. 
For example, if you use [IntRange.asFlow] extension to write the same busy loop and don't suspend anywhere, 
then there are no checks for cancellation:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart           
fun main() = runBlocking<Unit> {
    (1..5).asFlow().collect { value -> 
        if (value == 3) cancel()  
        println(value)
    } 
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-38.kt).
>
{type="note"}

All numbers from 1 to 5 are collected and cancellation gets detected only before return from `runBlocking`:

```text
1
2
3
4
5
Exception in thread "main" kotlinx.coroutines.JobCancellationException: BlockingCoroutine was cancelled; job="coroutine#1":BlockingCoroutine{Cancelled}@3327bd23
```

<!--- TEST EXCEPTION -->

<a name="🔗07.16.1.1."></a>

07.16.1.1. Making busy flow cancellable 
==================================================

In the case where you have a busy loop with coroutines you must explicitly check for cancellation.
You can add `.onEach { currentCoroutineContext().ensureActive() }`, but there is a ready-to-use
[cancellable] operator provided to do that:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

//sampleStart           
fun main() = runBlocking<Unit> {
    (1..5).asFlow().cancellable().collect { value -> 
        if (value == 3) cancel()  
        println(value)
    } 
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code from [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-flow-39.kt).
>
{type="note"}

With the `cancellable` operator only the numbers from 1 to 3 are collected:

```text
1
2
3
Exception in thread "main" kotlinx.coroutines.JobCancellationException: BlockingCoroutine was cancelled; job="coroutine#1":BlockingCoroutine{Cancelled}@5ec0a365
```

<!--- TEST EXCEPTION -->

<a name="🔗07.17."></a>

07.17. Flow and Reactive Streams
==================================================

For those who are familiar with [Reactive Streams](https://www.reactive-streams.org/) or reactive frameworks such as RxJava and project Reactor, 
design of the Flow may look very familiar.

Indeed, its design was inspired by Reactive Streams and its various implementations. But Flow main goal is to have as simple design as possible, 
be Kotlin and suspension friendly and respect structured concurrency. Achieving this goal would be impossible without reactive pioneers and their tremendous work. You can read the complete story in [Reactive Streams and Kotlin Flows](https://medium.com/@elizarov/reactive-streams-and-kotlin-flows-bfd12772cda4) article.

While being different, conceptually, Flow *is* a reactive stream and it is possible to convert it to the reactive (spec and TCK compliant) Publisher and vice versa.
Such converters are provided by `kotlinx.coroutines` out-of-the-box and can be found in corresponding reactive modules (`kotlinx-coroutines-reactive` for Reactive Streams, `kotlinx-coroutines-reactor` for Project Reactor and `kotlinx-coroutines-rx2`/`kotlinx-coroutines-rx3` for RxJava2/RxJava3).
Integration modules include conversions from and to `Flow`, integration with Reactor's `Context` and suspension-friendly ways to work with various reactive entities.
 
<!-- stdlib references -->




<!--- END -->
<!--- TEST_NAME ChannelsGuideTest -->

<a name="🔗08."></a>

📜 08. Channels
==================================================

Deferred values provide a convenient way to transfer a single value between coroutines.
Channels provide a way to transfer a stream of values.

<a name="🔗08.1."></a>

08.1. Channel basics
==================================================

A [Channel] is conceptually very similar to `BlockingQueue`. One key difference is that
instead of a blocking `put` operation it has a suspending [send][SendChannel.send], and instead of 
a blocking `take` operation it has a suspending [receive][ReceiveChannel.receive].

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun main() = runBlocking {
//sampleStart
    val channel = Channel<Int>()
    launch {
        // this might be heavy CPU-consuming computation or async logic, we'll just send five squares
        for (x in 1..5) channel.send(x * x)
    }
    // here we print five received integers:
    repeat(5) { println(channel.receive()) }
    println("Done!")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-01.kt).
>
{type="note"}

The output of this code is:

```text
1
4
9
16
25
Done!
```

<!--- TEST -->

<a name="🔗08.2."></a>

08.2. Closing and iteration over channels 
==================================================

Unlike a queue, a channel can be closed to indicate that no more elements are coming. 
On the receiver side it is convenient to use a regular `for` loop to receive elements 
from the channel. 
 
Conceptually, a [close][SendChannel.close] is like sending a special close token to the channel. 
The iteration stops as soon as this close token is received, so there is a guarantee 
that all previously sent elements before the close are received:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun main() = runBlocking {
//sampleStart
    val channel = Channel<Int>()
    launch {
        for (x in 1..5) channel.send(x * x)
        channel.close() // we're done sending
    }
    // here we print received values using `for` loop (until the channel is closed)
    for (y in channel) println(y)
    println("Done!")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-02.kt).
>
{type="note"}

<!--- TEST 
1
4
9
16
25
Done!
-->

<a name="🔗08.3."></a>

08.3. Building channel producers
==================================================

The pattern where a coroutine is producing a sequence of elements is quite common. 
This is a part of _producer-consumer_ pattern that is often found in concurrent code. 
You could abstract such a producer into a function that takes channel as its parameter, but this goes contrary
to common sense that results must be returned from functions. 

There is a convenient coroutine builder named [produce] that makes it easy to do it right on producer side,
and an extension function [consumeEach], that replaces a `for` loop on the consumer side:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun CoroutineScope.produceSquares(): ReceiveChannel<Int> = produce {
    for (x in 1..5) send(x * x)
}

fun main() = runBlocking {
//sampleStart
    val squares = produceSquares()
    squares.consumeEach { println(it) }
    println("Done!")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-03.kt).
>
{type="note"}

<!--- TEST 
1
4
9
16
25
Done!
-->

<a name="🔗08.4."></a>

08.4. Pipelines
==================================================

A pipeline is a pattern where one coroutine is producing, possibly infinite, stream of values:

```java,kotlin
fun CoroutineScope.produceNumbers() = produce<Int> {
    var x = 1
    while (true) send(x++) // infinite stream of integers starting from 1
}
```

And another coroutine or coroutines are consuming that stream, doing some processing, and producing some other results.
In the example below, the numbers are just squared:

```java,kotlin
fun CoroutineScope.square(numbers: ReceiveChannel<Int>): ReceiveChannel<Int> = produce {
    for (x in numbers) send(x * x)
}
```

The main code starts and connects the whole pipeline:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun main() = runBlocking {
//sampleStart
    val numbers = produceNumbers() // produces integers from 1 and on
    val squares = square(numbers) // squares integers
    repeat(5) {
        println(squares.receive()) // print first five
    }
    println("Done!") // we are done
    coroutineContext.cancelChildren() // cancel children coroutines
//sampleEnd
}

fun CoroutineScope.produceNumbers() = produce<Int> {
    var x = 1
    while (true) send(x++) // infinite stream of integers starting from 1
}

fun CoroutineScope.square(numbers: ReceiveChannel<Int>): ReceiveChannel<Int> = produce {
    for (x in numbers) send(x * x)
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-04.kt).
>
{type="note"}

<!--- TEST 
1
4
9
16
25
Done!
-->

> All functions that create coroutines are defined as extensions on [CoroutineScope],
> so that we can rely on [structured concurrency](#🔗05.5.) to make
> sure that we don't have lingering global coroutines in our application.
>
{type="note"}

<a name="🔗08.5."></a>

08.5. Prime numbers with pipeline
==================================================

Let's take pipelines to the extreme with an example that generates prime numbers using a pipeline 
of coroutines. We start with an infinite sequence of numbers.

```java,kotlin
fun CoroutineScope.numbersFrom(start: Int) = produce<Int> {
    var x = start
    while (true) send(x++) // infinite stream of integers from start
}
```

The following pipeline stage filters an incoming stream of numbers, removing all the numbers 
that are divisible by the given prime number:

```java,kotlin
fun CoroutineScope.filter(numbers: ReceiveChannel<Int>, prime: Int) = produce<Int> {
    for (x in numbers) if (x % prime != 0) send(x)
}
```

Now we build our pipeline by starting a stream of numbers from 2, taking a prime number from the current channel, 
and launching new pipeline stage for each prime number found:
 
```Plain Text
numbersFrom(2) -> filter(2) -> filter(3) -> filter(5) -> filter(7) ... 
```
 
The following example prints the first ten prime numbers, 
running the whole pipeline in the context of the main thread. Since all the coroutines are launched in
the scope of the main [runBlocking] coroutine 
we don't have to keep an explicit list of all the coroutines we have started. 
We use [cancelChildren][kotlin.coroutines.CoroutineContext.cancelChildren] 
extension function to cancel all the children coroutines after we have printed
the first ten prime numbers.

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun main() = runBlocking {
//sampleStart
    var cur = numbersFrom(2)
    repeat(10) {
        val prime = cur.receive()
        println(prime)
        cur = filter(cur, prime)
    }
    coroutineContext.cancelChildren() // cancel all children to let main finish
//sampleEnd    
}

fun CoroutineScope.numbersFrom(start: Int) = produce<Int> {
    var x = start
    while (true) send(x++) // infinite stream of integers from start
}

fun CoroutineScope.filter(numbers: ReceiveChannel<Int>, prime: Int) = produce<Int> {
    for (x in numbers) if (x % prime != 0) send(x)
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-05.kt).
>
{type="note"}

The output of this code is:

```text
2
3
5
7
11
13
17
19
23
29
```

<!--- TEST -->

Note that you can build the same pipeline using 
[`iterator`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/iterator.html) 
coroutine builder from the standard library. 
Replace `produce` with `iterator`, `send` with `yield`, `receive` with `next`, 
`ReceiveChannel` with `Iterator`, and get rid of the coroutine scope. You will not need `runBlocking` either.
However, the benefit of a pipeline that uses channels as shown above is that it can actually use 
multiple CPU cores if you run it in [Dispatchers.Default] context.

Anyway, this is an extremely impractical way to find prime numbers. In practice, pipelines do involve some
other suspending invocations (like asynchronous calls to remote services) and these pipelines cannot be
built using `sequence`/`iterator`, because they do not allow arbitrary suspension, unlike
`produce`, which is fully asynchronous.
 
<a name="🔗08.6."></a>

08.6. Fan-out
==================================================

Multiple coroutines may receive from the same channel, distributing work between themselves.
Let us start with a producer coroutine that is periodically producing integers 
(ten numbers per second):

```java,kotlin
fun CoroutineScope.produceNumbers() = produce<Int> {
    var x = 1 // start from 1
    while (true) {
        send(x++) // produce next
        delay(100) // wait 0.1s
    }
}
```

Then we can have several processor coroutines. In this example, they just print their id and
received number:

```java,kotlin
fun CoroutineScope.launchProcessor(id: Int, channel: ReceiveChannel<Int>) = launch {
    for (msg in channel) {
        println("Processor #$id received $msg")
    }    
}
```

Now let us launch five processors and let them work for almost a second. See what happens:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun main() = runBlocking<Unit> {
//sampleStart
    val producer = produceNumbers()
    repeat(5) { launchProcessor(it, producer) }
    delay(950)
    producer.cancel() // cancel producer coroutine and thus kill them all
//sampleEnd
}

fun CoroutineScope.produceNumbers() = produce<Int> {
    var x = 1 // start from 1
    while (true) {
        send(x++) // produce next
        delay(100) // wait 0.1s
    }
}

fun CoroutineScope.launchProcessor(id: Int, channel: ReceiveChannel<Int>) = launch {
    for (msg in channel) {
        println("Processor #$id received $msg")
    }    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-06.kt).
>
{type="note"}

The output will be similar to the the following one, albeit the processor ids that receive
each specific integer may be different:

```text
Processor #2 received 1
Processor #4 received 2
Processor #0 received 3
Processor #1 received 4
Processor #3 received 5
Processor #2 received 6
Processor #4 received 7
Processor #0 received 8
Processor #1 received 9
Processor #3 received 10
```

<!--- TEST lines.size == 10 && lines.withIndex().all { (i, line) -> line.startsWith("Processor #") && line.endsWith(" received ${i + 1}") } -->

Note that cancelling a producer coroutine closes its channel, thus eventually terminating iteration
over the channel that processor coroutines are doing.

Also, pay attention to how we explicitly iterate over channel with `for` loop to perform fan-out in `launchProcessor` code. 
Unlike `consumeEach`, this `for` loop pattern is perfectly safe to use from multiple coroutines. If one of the processor 
coroutines fails, then others would still be processing the channel, while a processor that is written via `consumeEach` 
always consumes (cancels) the underlying channel on its normal or abnormal completion.     

<a name="🔗08.7."></a>

08.7. Fan-in
==================================================

Multiple coroutines may send to the same channel.
For example, let us have a channel of strings, and a suspending function that 
repeatedly sends a specified string to this channel with a specified delay:

```java,kotlin
suspend fun sendString(channel: SendChannel<String>, s: String, time: Long) {
    while (true) {
        delay(time)
        channel.send(s)
    }
}
```

Now, let us see what happens if we launch a couple of coroutines sending strings 
(in this example we launch them in the context of the main thread as main coroutine's children):

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun main() = runBlocking {
//sampleStart
    val channel = Channel<String>()
    launch { sendString(channel, "foo", 200L) }
    launch { sendString(channel, "BAR!", 500L) }
    repeat(6) { // receive first six
        println(channel.receive())
    }
    coroutineContext.cancelChildren() // cancel all children to let main finish
//sampleEnd
}

suspend fun sendString(channel: SendChannel<String>, s: String, time: Long) {
    while (true) {
        delay(time)
        channel.send(s)
    }
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-07.kt).
>
{type="note"}

The output is:

```text
foo
foo
BAR!
foo
foo
BAR!
```

<!--- TEST -->

<a name="🔗08.8."></a>

08.8. Buffered channels
==================================================

The channels shown so far had no buffer. Unbuffered channels transfer elements when sender and receiver 
meet each other (aka rendezvous). If send is invoked first, then it is suspended until receive is invoked, 
if receive is invoked first, it is suspended until send is invoked.

Both [Channel()] factory function and [produce] builder take an optional `capacity` parameter to
specify _buffer size_. Buffer allows senders to send multiple elements before suspending, 
similar to the `BlockingQueue` with a specified capacity, which blocks when buffer is full.

Take a look at the behavior of the following code:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

fun main() = runBlocking<Unit> {
//sampleStart
    val channel = Channel<Int>(4) // create buffered channel
    val sender = launch { // launch sender coroutine
        repeat(10) {
            println("Sending $it") // print before sending each element
            channel.send(it) // will suspend when buffer is full
        }
    }
    // don't receive anything... just wait....
    delay(1000)
    sender.cancel() // cancel sender coroutine
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-08.kt).
>
{type="note"}

It prints "sending" _five_ times using a buffered channel with capacity of _four_:

```text
Sending 0
Sending 1
Sending 2
Sending 3
Sending 4
```

<!--- TEST -->

The first four elements are added to the buffer and the sender suspends when trying to send the fifth one.

<a name="🔗08.9."></a>

08.9. Channels are fair
==================================================

Send and receive operations to channels are _fair_ with respect to the order of their invocation from 
multiple coroutines. They are served in first-in first-out order, e.g. the first coroutine to invoke `receive` 
gets the element. In the following example two coroutines "ping" and "pong" are 
receiving the "ball" object from the shared "table" channel. 

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

//sampleStart
data class Ball(var hits: Int)

fun main() = runBlocking {
    val table = Channel<Ball>() // a shared table
    launch { player("ping", table) }
    launch { player("pong", table) }
    table.send(Ball(0)) // serve the ball
    delay(1000) // delay 1 second
    coroutineContext.cancelChildren() // game over, cancel them
}

suspend fun player(name: String, table: Channel<Ball>) {
    for (ball in table) { // receive the ball in a loop
        ball.hits++
        println("$name $ball")
        delay(300) // wait a bit
        table.send(ball) // send the ball back
    }
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-09.kt).
>
{type="note"}

The "ping" coroutine is started first, so it is the first one to receive the ball. Even though "ping"
coroutine immediately starts receiving the ball again after sending it back to the table, the ball gets
received by the "pong" coroutine, because it was already waiting for it:

```text
ping Ball(hits=1)
pong Ball(hits=2)
ping Ball(hits=3)
pong Ball(hits=4)
```

<!--- TEST -->

Note that sometimes channels may produce executions that look unfair due to the nature of the executor
that is being used. See [this issue](https://github.com/Kotlin/kotlinx.coroutines/issues/111) for details.

<a name="🔗08.10."></a>

08.10. Ticker channels
==================================================

Ticker channel is a special rendezvous channel that produces `Unit` every time given delay passes since last consumption from this channel.
Though it may seem to be useless standalone, it is a useful building block to create complex time-based [produce] 
pipelines and operators that do windowing and other time-dependent processing.
Ticker channel can be used in [select] to perform "on tick" action.

To create such channel use a factory method [ticker]. 
To indicate that no further elements are needed use [ReceiveChannel.cancel] method on it.

Now let's see how it works in practice:

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*

//sampleStart
fun main() = runBlocking<Unit> {
    val tickerChannel = ticker(delayMillis = 100, initialDelayMillis = 0) // create ticker channel
    var nextElement = withTimeoutOrNull(1) { tickerChannel.receive() }
    println("Initial element is available immediately: $nextElement") // no initial delay

    nextElement = withTimeoutOrNull(50) { tickerChannel.receive() } // all subsequent elements have 100ms delay
    println("Next element is not ready in 50 ms: $nextElement")

    nextElement = withTimeoutOrNull(60) { tickerChannel.receive() }
    println("Next element is ready in 100 ms: $nextElement")

    // Emulate large consumption delays
    println("Consumer pauses for 150ms")
    delay(150)
    // Next element is available immediately
    nextElement = withTimeoutOrNull(1) { tickerChannel.receive() }
    println("Next element is available immediately after large consumer delay: $nextElement")
    // Note that the pause between `receive` calls is taken into account and next element arrives faster
    nextElement = withTimeoutOrNull(60) { tickerChannel.receive() } 
    println("Next element is ready in 50ms after consumer pause in 150ms: $nextElement")

    tickerChannel.cancel() // indicate that no more elements are needed
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-channel-10.kt).
>
{type="note"}

It prints following lines:

```text
Initial element is available immediately: kotlin.Unit
Next element is not ready in 50 ms: null
Next element is ready in 100 ms: kotlin.Unit
Consumer pauses for 150ms
Next element is available immediately after large consumer delay: kotlin.Unit
Next element is ready in 50ms after consumer pause in 150ms: kotlin.Unit
```

<!--- TEST -->

Note that [ticker] is aware of possible consumer pauses and, by default, adjusts next produced element 
delay if a pause occurs, trying to maintain a fixed rate of produced elements.
 
Optionally, a `mode` parameter equal to [TickerMode.FIXED_DELAY] can be specified to maintain a fixed
delay between elements.



<!--- END -->
<!--- TEST_NAME ExceptionsGuideTest -->

<a name="🔗09."></a>

📜 09. Coroutine exceptions handling
==================================================

This section covers exception handling and cancellation on exceptions.
We already know that a cancelled coroutine throws [CancellationException] in suspension points and that it
is ignored by the coroutines' machinery. Here we look at what happens if an exception is thrown during cancellation or multiple children of the same
coroutine throw an exception.

<a name="🔗09.1."></a>

09.1. Exception propagation
==================================================

Coroutine builders come in two flavors: propagating exceptions automatically ([launch] and [actor]) or
exposing them to users ([async] and [produce]).
When these builders are used to create a _root_ coroutine, that is not a _child_ of another coroutine,
the former builders treat exceptions as **uncaught** exceptions, similar to Java's `Thread.uncaughtExceptionHandler`,
while the latter are relying on the user to consume the final
exception, for example via [await][Deferred.await] or [receive][ReceiveChannel.receive] 
([produce] and [receive][ReceiveChannel.receive] are covered in [Channels](https://github.com/Kotlin/kotlinx.coroutines/blob/master/docs/channels.md) section).

It can be demonstrated by a simple example that creates root coroutines using the [GlobalScope]:

> [GlobalScope] is a delicate API that can backfire in non-trivial ways. Creating a root coroutine for the
> whole application is one of the rare legitimate uses for `GlobalScope`, so you must explicitly opt-in into 
> using `GlobalScope` with `@OptIn(DelicateCoroutinesApi::class)`.
>
{type="note"}

```java,kotlin
import kotlinx.coroutines.*

//sampleStart
@OptIn(DelicateCoroutinesApi::class)
fun main() = runBlocking {
    val job = GlobalScope.launch { // root coroutine with launch
        println("Throwing exception from launch")
        throw IndexOutOfBoundsException() // Will be printed to the console by Thread.defaultUncaughtExceptionHandler
    }
    job.join()
    println("Joined failed job")
    val deferred = GlobalScope.async { // root coroutine with async
        println("Throwing exception from async")
        throw ArithmeticException() // Nothing is printed, relying on user to call await
    }
    try {
        deferred.await()
        println("Unreached")
    } catch (e: ArithmeticException) {
        println("Caught ArithmeticException")
    }
}
//sampleEnd
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-exceptions-01.kt).
>
{type="note"}

The output of this code is (with [debug](#🔗06.3.)):

```text
Throwing exception from launch
Exception in thread "DefaultDispatcher-worker-2 @coroutine#2" java.lang.IndexOutOfBoundsException
Joined failed job
Throwing exception from async
Caught ArithmeticException
```

<!--- TEST EXCEPTION-->

<a name="🔗09.2."></a>

09.2. CoroutineExceptionHandler
==================================================

It is possible to customize the default behavior of printing **uncaught** exceptions to the console.
[CoroutineExceptionHandler] context element on a _root_ coroutine can be used as a generic `catch` block for
this root coroutine and all its children where custom exception handling may take place.
It is similar to [`Thread.uncaughtExceptionHandler`](https://docs.oracle.com/javase/8/docs/api/java/lang/Thread.html#setUncaughtExceptionHandler(java.lang.Thread.UncaughtExceptionHandler)).
You cannot recover from the exception in the `CoroutineExceptionHandler`. The coroutine had already completed
with the corresponding exception when the handler is called. Normally, the handler is used to
log the exception, show some kind of error message, terminate, and/or restart the application.


`CoroutineExceptionHandler` is invoked only on **uncaught** exceptions — exceptions that were not handled in any other way.
In particular, all _children_ coroutines (coroutines created in the context of another [Job]) delegate handling of
their exceptions to their parent coroutine, which also delegates to the parent, and so on until the root,
so the `CoroutineExceptionHandler` installed in their context is never used. 
In addition to that, [async] builder always catches all exceptions and represents them in the resulting [Deferred] object, 
so its `CoroutineExceptionHandler` has no effect either.

> Coroutines running in supervision scope do not propagate exceptions to their parent and are
> excluded from this rule. A further [Supervision](#supervision) section of this document gives more details.
>
{type="note"}  

```java,kotlin
import kotlinx.coroutines.*

@OptIn(DelicateCoroutinesApi::class)
fun main() = runBlocking {
//sampleStart
    val handler = CoroutineExceptionHandler { _, exception -> 
        println("CoroutineExceptionHandler got $exception") 
    }
    val job = GlobalScope.launch(handler) { // root coroutine, running in GlobalScope
        throw AssertionError()
    }
    val deferred = GlobalScope.async(handler) { // also root, but async instead of launch
        throw ArithmeticException() // Nothing will be printed, relying on user to call deferred.await()
    }
    joinAll(job, deferred)
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-exceptions-02.kt).
>
{type="note"}

The output of this code is:

```text
CoroutineExceptionHandler got java.lang.AssertionError
```

<!--- TEST-->

<a name="🔗09.3."></a>

09.3. Cancellation and exceptions
==================================================

Cancellation is closely related to exceptions. Coroutines internally use `CancellationException` for cancellation, these
exceptions are ignored by all handlers, so they should be used only as the source of additional debug information, which can
be obtained by `catch` block.
When a coroutine is cancelled using [Job.cancel], it terminates, but it does not cancel its parent.

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val job = launch {
        val child = launch {
            try {
                delay(Long.MAX_VALUE)
            } finally {
                println("Child is cancelled")
            }
        }
        yield()
        println("Cancelling child")
        child.cancel()
        child.join()
        yield()
        println("Parent is not cancelled")
    }
    job.join()
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-exceptions-03.kt).
>
{type="note"}

The output of this code is:

```text
Cancelling child
Child is cancelled
Parent is not cancelled
```

<!--- TEST-->

If a coroutine encounters an exception other than `CancellationException`, it cancels its parent with that exception. 
This behaviour cannot be overridden and is used to provide stable coroutines hierarchies for
[structured concurrency](#🔗05.5.).
[CoroutineExceptionHandler] implementation is not used for child coroutines.

> In these examples, [CoroutineExceptionHandler] is always installed to a coroutine
> that is created in [GlobalScope]. It does not make sense to install an exception handler to a coroutine that
> is launched in the scope of the main [runBlocking], since the main coroutine is going to be always cancelled
> when its child completes with exception despite the installed handler.
>
{type="note"}

The original exception is handled by the parent only when all its children terminate,
which is demonstrated by the following example.

```java,kotlin
import kotlinx.coroutines.*

@OptIn(DelicateCoroutinesApi::class)
fun main() = runBlocking {
//sampleStart
    val handler = CoroutineExceptionHandler { _, exception -> 
        println("CoroutineExceptionHandler got $exception") 
    }
    val job = GlobalScope.launch(handler) {
        launch { // the first child
            try {
                delay(Long.MAX_VALUE)
            } finally {
                withContext(NonCancellable) {
                    println("Children are cancelled, but exception is not handled until all children terminate")
                    delay(100)
                    println("The first child finished its non cancellable block")
                }
            }
        }
        launch { // the second child
            delay(10)
            println("Second child throws an exception")
            throw ArithmeticException()
        }
    }
    job.join()
//sampleEnd 
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-exceptions-04.kt).
>
{type="note"}

The output of this code is:

```text
Second child throws an exception
Children are cancelled, but exception is not handled until all children terminate
The first child finished its non cancellable block
CoroutineExceptionHandler got java.lang.ArithmeticException
```

<!--- TEST-->

<a name="🔗09.4."></a>

09.4. Exceptions aggregation
==================================================

When multiple children of a coroutine fail with an exception, the
general rule is "the first exception wins", so the first exception gets handled.
All additional exceptions that happen after the first one are attached to the first exception as suppressed ones. 

<!--- INCLUDE
import kotlinx.coroutines.exceptions.*
-->

```java,kotlin
import kotlinx.coroutines.*
import java.io.*

@OptIn(DelicateCoroutinesApi::class)
fun main() = runBlocking {
    val handler = CoroutineExceptionHandler { _, exception ->
        println("CoroutineExceptionHandler got $exception with suppressed ${exception.suppressed.contentToString()}")
    }
    val job = GlobalScope.launch(handler) {
        launch {
            try {
                delay(Long.MAX_VALUE) // it gets cancelled when another sibling fails with IOException
            } finally {
                throw ArithmeticException() // the second exception
            }
        }
        launch {
            delay(100)
            throw IOException() // the first exception
        }
        delay(Long.MAX_VALUE)
    }
    job.join()  
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-exceptions-05.kt).
>
{type="note"}

> Note: This above code will work properly only on JDK7+ that supports `suppressed` exceptions
>
{type="note"}

The output of this code is:

```text
CoroutineExceptionHandler got java.io.IOException with suppressed [java.lang.ArithmeticException]
```

<!--- TEST-->

> Note that this mechanism currently only works on Java version 1.7+. 
> The JS and Native restrictions are temporary and will be lifted in the future.
>
{type="note"}

Cancellation exceptions are transparent and are unwrapped by default:

```java,kotlin
import kotlinx.coroutines.*
import java.io.*

@OptIn(DelicateCoroutinesApi::class)
fun main() = runBlocking {
//sampleStart
    val handler = CoroutineExceptionHandler { _, exception ->
        println("CoroutineExceptionHandler got $exception")
    }
    val job = GlobalScope.launch(handler) {
        val inner = launch { // all this stack of coroutines will get cancelled
            launch {
                launch {
                    throw IOException() // the original exception
                }
            }
        }
        try {
            inner.join()
        } catch (e: CancellationException) {
            println("Rethrowing CancellationException with original cause")
            throw e // cancellation exception is rethrown, yet the original IOException gets to the handler  
        }
    }
    job.join()
//sampleEnd    
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-exceptions-06.kt).
>
{type="note"}

The output of this code is:

```text
Rethrowing CancellationException with original cause
CoroutineExceptionHandler got java.io.IOException
```

<!--- TEST-->

<a name="🔗09.5."></a>

09.5. Supervision
==================================================

As we have studied before, cancellation is a bidirectional relationship propagating through the whole
hierarchy of coroutines. Let us take a look at the case when unidirectional cancellation is required. 

A good example of such a requirement is a UI component with the job defined in its scope. If any of the UI's child tasks
have failed, it is not always necessary to cancel (effectively kill) the whole UI component,
but if the UI component is destroyed (and its job is cancelled), then it is necessary to cancel all child jobs as their results are no longer needed.

Another example is a server process that spawns multiple child jobs and needs to _supervise_
their execution, tracking their failures and only restarting the failed ones.

<a name="🔗09.5.1."></a>

09.5.1. Supervision job
==================================================

The [SupervisorJob][SupervisorJob()] can be used for these purposes. 
It is similar to a regular [Job][Job()] with the only exception that cancellation is propagated
only downwards. This can easily be demonstrated using the following example:

```java,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val supervisor = SupervisorJob()
    with(CoroutineScope(coroutineContext + supervisor)) {
        // launch the first child -- its exception is ignored for this example (don't do this in practice!)
        val firstChild = launch(CoroutineExceptionHandler { _, _ ->  }) {
            println("The first child is failing")
            throw AssertionError("The first child is cancelled")
        }
        // launch the second child
        val secondChild = launch {
            firstChild.join()
            // Cancellation of the first child is not propagated to the second child
            println("The first child is cancelled: ${firstChild.isCancelled}, but the second one is still active")
            try {
                delay(Long.MAX_VALUE)
            } finally {
                // But cancellation of the supervisor is propagated
                println("The second child is cancelled because the supervisor was cancelled")
            }
        }
        // wait until the first child fails & completes
        firstChild.join()
        println("Cancelling the supervisor")
        supervisor.cancel()
        secondChild.join()
    }
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-supervision-01.kt).
>
{type="note"}

The output of this code is:

```text
The first child is failing
The first child is cancelled: true, but the second one is still active
Cancelling the supervisor
The second child is cancelled because the supervisor was cancelled
```

<!--- TEST-->

<a name="🔗09.5.2."></a>

09.5.2. Supervision scope
==================================================

Instead of [coroutineScope][_coroutineScope], we can use [supervisorScope][_supervisorScope] for _scoped_ concurrency. It propagates the cancellation
in one direction only and cancels all its children only if it failed itself. It also waits for all children before completion
just like [coroutineScope][_coroutineScope] does.

```java,kotlin
import kotlin.coroutines.*
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    try {
        supervisorScope {
            val child = launch {
                try {
                    println("The child is sleeping")
                    delay(Long.MAX_VALUE)
                } finally {
                    println("The child is cancelled")
                }
            }
            // Give our child a chance to execute and print using yield 
            yield()
            println("Throwing an exception from the scope")
            throw AssertionError()
        }
    } catch(e: AssertionError) {
        println("Caught an assertion error")
    }
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-supervision-02.kt).
>
{type="note"}

The output of this code is:

```text
The child is sleeping
Throwing an exception from the scope
The child is cancelled
Caught an assertion error
```

<!--- TEST-->

<a name="🔗09.5.2.1."></a>

09.5.2.1. Exceptions in supervised coroutines
==================================================

Another crucial difference between regular and supervisor jobs is exception handling.
Every child should handle its exceptions by itself via the exception handling mechanism.
This difference comes from the fact that child's failure does not propagate to the parent.
It means that coroutines launched directly inside the [supervisorScope][_supervisorScope] _do_ use the [CoroutineExceptionHandler]
that is installed in their scope in the same way as root coroutines do
(see the [CoroutineExceptionHandler](#coroutineexceptionhandler) section for details). 

```java,kotlin
import kotlin.coroutines.*
import kotlinx.coroutines.*

fun main() = runBlocking {
//sampleStart
    val handler = CoroutineExceptionHandler { _, exception -> 
        println("CoroutineExceptionHandler got $exception") 
    }
    supervisorScope {
        val child = launch(handler) {
            println("The child throws an exception")
            throw AssertionError()
        }
        println("The scope is completing")
    }
    println("The scope is completed")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-supervision-03.kt).
>
{type="note"}

The output of this code is:

```text
The scope is completing
The child throws an exception
CoroutineExceptionHandler got java.lang.AssertionError
The scope is completed
```

<!--- TEST-->



<!--- END -->
<!--- TEST_NAME SharedStateGuideTest -->

<a name="🔗10."></a>

📜 10. Shared mutable state and concurrency
==================================================

Coroutines can be executed parallelly using a multi-threaded dispatcher like the [Dispatchers.Default]. It presents
all the usual parallelism problems. The main problem being synchronization of access to **shared mutable state**. 
Some solutions to this problem in the land of coroutines are similar to the solutions in the multi-threaded world, 
but others are unique.

<a name="🔗10.1."></a>

10.1. The problem
==================================================

Let us launch a hundred coroutines all doing the same action a thousand times. 
We'll also measure their completion time for further comparisons:

```java,kotlin
suspend fun massiveRun(action: suspend () -> Unit) {
    val n = 100  // number of coroutines to launch
    val k = 1000 // times an action is repeated by each coroutine
    val time = measureTimeMillis {
        coroutineScope { // scope for coroutines 
            repeat(n) {
                launch {
                    repeat(k) { action() }
                }
            }
        }
    }
    println("Completed ${n * k} actions in $time ms")    
}
```

We start with a very simple action that increments a shared mutable variable using 
multi-threaded [Dispatchers.Default].

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlin.system.*    

suspend fun massiveRun(action: suspend () -> Unit) {
    val n = 100  // number of coroutines to launch
    val k = 1000 // times an action is repeated by each coroutine
    val time = measureTimeMillis {
        coroutineScope { // scope for coroutines 
            repeat(n) {
                launch {
                    repeat(k) { action() }
                }
            }
        }
    }
    println("Completed ${n * k} actions in $time ms")    
}

//sampleStart
var counter = 0

fun main() = runBlocking {
    withContext(Dispatchers.Default) {
        massiveRun {
            counter++
        }
    }
    println("Counter = $counter")
}
//sampleEnd    
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-sync-01.kt).
>
{type="note"}

<!--- TEST LINES_START
Completed 100000 actions in
Counter =
-->

What does it print at the end? It is highly unlikely to ever print "Counter = 100000", because a hundred coroutines 
increment the `counter` concurrently from multiple threads without any synchronization.

<a name="🔗10.2."></a>

10.2. Volatiles are of no help
==================================================

There is a common misconception that making a variable `volatile` solves concurrency problem. Let us try it:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlin.system.*

suspend fun massiveRun(action: suspend () -> Unit) {
    val n = 100  // number of coroutines to launch
    val k = 1000 // times an action is repeated by each coroutine
    val time = measureTimeMillis {
        coroutineScope { // scope for coroutines 
            repeat(n) {
                launch {
                    repeat(k) { action() }
                }
            }
        }
    }
    println("Completed ${n * k} actions in $time ms")    
}

//sampleStart
@Volatile // in Kotlin `volatile` is an annotation 
var counter = 0

fun main() = runBlocking {
    withContext(Dispatchers.Default) {
        massiveRun {
            counter++
        }
    }
    println("Counter = $counter")
}
//sampleEnd    
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-sync-02.kt).
>
{type="note"}

<!--- TEST LINES_START
Completed 100000 actions in
Counter =
-->

This code works slower, but we still don't always get "Counter = 100000" at the end, because volatile variables guarantee
linearizable (this is a technical term for "atomic") reads and writes to the corresponding variable, but
do not provide atomicity of larger actions (increment in our case).

<a name="🔗10.3."></a>

10.3. Thread-safe data structures
==================================================

The general solution that works both for threads and for coroutines is to use a thread-safe (aka synchronized,
linearizable, or atomic) data structure that provides all the necessary synchronization for the corresponding 
operations that needs to be performed on a shared state. 
In the case of a simple counter we can use `AtomicInteger` class which has atomic `incrementAndGet` operations:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import java.util.concurrent.atomic.*
import kotlin.system.*

suspend fun massiveRun(action: suspend () -> Unit) {
    val n = 100  // number of coroutines to launch
    val k = 1000 // times an action is repeated by each coroutine
    val time = measureTimeMillis {
        coroutineScope { // scope for coroutines 
            repeat(n) {
                launch {
                    repeat(k) { action() }
                }
            }
        }
    }
    println("Completed ${n * k} actions in $time ms")    
}

//sampleStart
val counter = AtomicInteger()

fun main() = runBlocking {
    withContext(Dispatchers.Default) {
        massiveRun {
            counter.incrementAndGet()
        }
    }
    println("Counter = $counter")
}
//sampleEnd    
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-sync-03.kt).
>
{type="note"}

<!--- TEST ARBITRARY_TIME
Completed 100000 actions in xxx ms
Counter = 100000
-->

This is the fastest solution for this particular problem. It works for plain counters, collections, queues and other
standard data structures and basic operations on them. However, it does not easily scale to complex
state or to complex operations that do not have ready-to-use thread-safe implementations. 

<a name="🔗10.4."></a>

10.4. Thread confinement fine-grained
==================================================

_Thread confinement_ is an approach to the problem of shared mutable state where all access to the particular shared
state is confined to a single thread. It is typically used in UI applications, where all UI state is confined to 
the single event-dispatch/application thread. It is easy to apply with coroutines by using a single-threaded context. 

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlin.system.*

suspend fun massiveRun(action: suspend () -> Unit) {
    val n = 100  // number of coroutines to launch
    val k = 1000 // times an action is repeated by each coroutine
    val time = measureTimeMillis {
        coroutineScope { // scope for coroutines 
            repeat(n) {
                launch {
                    repeat(k) { action() }
                }
            }
        }
    }
    println("Completed ${n * k} actions in $time ms")    
}

//sampleStart
val counterContext = newSingleThreadContext("CounterContext")
var counter = 0

fun main() = runBlocking {
    withContext(Dispatchers.Default) {
        massiveRun {
            // confine each increment to a single-threaded context
            withContext(counterContext) {
                counter++
            }
        }
    }
    println("Counter = $counter")
}
//sampleEnd      
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-sync-04.kt).
>
{type="note"}

<!--- TEST ARBITRARY_TIME
Completed 100000 actions in xxx ms
Counter = 100000
-->

This code works very slowly, because it does _fine-grained_ thread-confinement. Each individual increment switches 
from multi-threaded [Dispatchers.Default] context to the single-threaded context using 
[withContext(counterContext)][withContext] block.

<a name="🔗10.5."></a>

10.5. Thread confinement coarse-grained
==================================================

In practice, thread confinement is performed in large chunks, e.g. big pieces of state-updating business logic
are confined to the single thread. The following example does it like that, running each coroutine in 
the single-threaded context to start with.

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlin.system.*

suspend fun massiveRun(action: suspend () -> Unit) {
    val n = 100  // number of coroutines to launch
    val k = 1000 // times an action is repeated by each coroutine
    val time = measureTimeMillis {
        coroutineScope { // scope for coroutines 
            repeat(n) {
                launch {
                    repeat(k) { action() }
                }
            }
        }
    }
    println("Completed ${n * k} actions in $time ms")    
}

//sampleStart
val counterContext = newSingleThreadContext("CounterContext")
var counter = 0

fun main() = runBlocking {
    // confine everything to a single-threaded context
    withContext(counterContext) {
        massiveRun {
            counter++
        }
    }
    println("Counter = $counter")
}
//sampleEnd     
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-sync-05.kt).
>
{type="note"}

<!--- TEST ARBITRARY_TIME
Completed 100000 actions in xxx ms
Counter = 100000
-->

This now works much faster and produces correct result.

<a name="🔗10.6."></a>

10.6. Mutual exclusion
==================================================

Mutual exclusion solution to the problem is to protect all modifications of the shared state with a _critical section_
that is never executed concurrently. In a blocking world you'd typically use `synchronized` or `ReentrantLock` for that.
Coroutine's alternative is called [Mutex]. It has [lock][Mutex.lock] and [unlock][Mutex.unlock] functions to 
delimit a critical section. The key difference is that `Mutex.lock()` is a suspending function. It does not block a thread.

There is also [withLock] extension function that conveniently represents 
`mutex.lock(); try { ... } finally { mutex.unlock() }` pattern:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.sync.*
import kotlin.system.*

suspend fun massiveRun(action: suspend () -> Unit) {
    val n = 100  // number of coroutines to launch
    val k = 1000 // times an action is repeated by each coroutine
    val time = measureTimeMillis {
        coroutineScope { // scope for coroutines 
            repeat(n) {
                launch {
                    repeat(k) { action() }
                }
            }
        }
    }
    println("Completed ${n * k} actions in $time ms")    
}

//sampleStart
val mutex = Mutex()
var counter = 0

fun main() = runBlocking {
    withContext(Dispatchers.Default) {
        massiveRun {
            // protect each increment with lock
            mutex.withLock {
                counter++
            }
        }
    }
    println("Counter = $counter")
}
//sampleEnd    
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-sync-06.kt).
>
{type="note"}

<!--- TEST ARBITRARY_TIME
Completed 100000 actions in xxx ms
Counter = 100000
-->

The locking in this example is fine-grained, so it pays the price. However, it is a good choice for some situations
where you absolutely must modify some shared state periodically, but there is no natural thread that this state
is confined to.



<!--- END -->
<!--- TEST_NAME SelectGuideTest --> 

<a name="🔗11."></a>

📜 11. Select expression (experimental)
==================================================

Select expression makes it possible to await multiple suspending functions simultaneously and _select_
the first one that becomes available.

> Select expressions are an experimental feature of `kotlinx.coroutines`. Their API is expected to 
> evolve in the upcoming updates of the `kotlinx.coroutines` library with potentially
> breaking changes.
>
{type="note"}

<a name="🔗11.1."></a>

11.1. Selecting from channels
==================================================

Let us have two producers of strings: `fizz` and `buzz`. The `fizz` produces "Fizz" string every 500 ms:

```java,kotlin
fun CoroutineScope.fizz() = produce<String> {
    while (true) { // sends "Fizz" every 500 ms
        delay(500)
        send("Fizz")
    }
}
```

And the `buzz` produces "Buzz!" string every 1000 ms:

```java,kotlin
fun CoroutineScope.buzz() = produce<String> {
    while (true) { // sends "Buzz!" every 1000 ms
        delay(1000)
        send("Buzz!")
    }
}
```

Using [receive][ReceiveChannel.receive] suspending function we can receive _either_ from one channel or the
other. But [select] expression allows us to receive from _both_ simultaneously using its
[onReceive][ReceiveChannel.onReceive] clauses:

```java,kotlin
suspend fun selectFizzBuzz(fizz: ReceiveChannel<String>, buzz: ReceiveChannel<String>) {
    select<Unit> { // <Unit> means that this select expression does not produce any result 
        fizz.onReceive { value ->  // this is the first select clause
            println("fizz -> '$value'")
        }
        buzz.onReceive { value ->  // this is the second select clause
            println("buzz -> '$value'")
        }
    }
}
```

Let us run it all seven times:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*
import kotlinx.coroutines.selects.*

fun CoroutineScope.fizz() = produce<String> {
    while (true) { // sends "Fizz" every 500 ms
        delay(500)
        send("Fizz")
    }
}

fun CoroutineScope.buzz() = produce<String> {
    while (true) { // sends "Buzz!" every 1000 ms
        delay(1000)
        send("Buzz!")
    }
}

suspend fun selectFizzBuzz(fizz: ReceiveChannel<String>, buzz: ReceiveChannel<String>) {
    select<Unit> { // <Unit> means that this select expression does not produce any result 
        fizz.onReceive { value ->  // this is the first select clause
            println("fizz -> '$value'")
        }
        buzz.onReceive { value ->  // this is the second select clause
            println("buzz -> '$value'")
        }
    }
}

fun main() = runBlocking<Unit> {
//sampleStart
    val fizz = fizz()
    val buzz = buzz()
    repeat(7) {
        selectFizzBuzz(fizz, buzz)
    }
    coroutineContext.cancelChildren() // cancel fizz & buzz coroutines
//sampleEnd        
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-select-01.kt).
>
{type="note"}

The result of this code is: 

```text
fizz -> 'Fizz'
buzz -> 'Buzz!'
fizz -> 'Fizz'
fizz -> 'Fizz'
buzz -> 'Buzz!'
fizz -> 'Fizz'
fizz -> 'Fizz'
```

<!--- TEST -->

<a name="🔗11.2."></a>

11.2. Selecting on close
==================================================

The [onReceive][ReceiveChannel.onReceive] clause in `select` fails when the channel is closed causing the corresponding
`select` to throw an exception. We can use [onReceiveCatching][ReceiveChannel.onReceiveCatching] clause to perform a
specific action when the channel is closed. The following example also shows that `select` is an expression that returns 
the result of its selected clause:

```java,kotlin
suspend fun selectAorB(a: ReceiveChannel<String>, b: ReceiveChannel<String>): String =
    select<String> {
        a.onReceiveCatching { it ->
            val value = it.getOrNull()
            if (value != null) {
                "a -> '$value'"
            } else {
                "Channel 'a' is closed"
            }
        }
        b.onReceiveCatching { it ->
            val value = it.getOrNull()
            if (value != null) {
                "b -> '$value'"
            } else {
                "Channel 'b' is closed"
            }
        }
    }
```


Let's use it with channel `a` that produces "Hello" string four times and 
channel `b` that produces "World" four times:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*
import kotlinx.coroutines.selects.*

suspend fun selectAorB(a: ReceiveChannel<String>, b: ReceiveChannel<String>): String =
    select<String> {
        a.onReceiveCatching { it ->
            val value = it.getOrNull()
            if (value != null) {
                "a -> '$value'"
            } else {
                "Channel 'a' is closed"
            }
        }
        b.onReceiveCatching { it ->
            val value = it.getOrNull()
            if (value != null) {
                "b -> '$value'"
            } else {
                "Channel 'b' is closed"
            }
        }
    }
    
fun main() = runBlocking<Unit> {
//sampleStart
    val a = produce<String> {
        repeat(4) { send("Hello $it") }
    }
    val b = produce<String> {
        repeat(4) { send("World $it") }
    }
    repeat(8) { // print first eight results
        println(selectAorB(a, b))
    }
    coroutineContext.cancelChildren()  
//sampleEnd      
}    
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-select-02.kt).
>
{type="note"}

The result of this code is quite interesting, so we'll analyze it in more detail:

```text
a -> 'Hello 0'
a -> 'Hello 1'
b -> 'World 0'
a -> 'Hello 2'
a -> 'Hello 3'
b -> 'World 1'
Channel 'a' is closed
Channel 'a' is closed
```

<!--- TEST -->

There are a couple of observations to make out of it. 

First of all, `select` is _biased_ to the first clause. When several clauses are selectable at the same time, 
the first one among them gets selected. Here, both channels are constantly producing strings, so `a` channel,
being the first clause in select, wins. However, because we are using unbuffered channel, the `a` gets suspended from
time to time on its [send][SendChannel.send] invocation and gives a chance for `b` to send, too.

The second observation, is that [onReceiveCatching][ReceiveChannel.onReceiveCatching] gets immediately selected when the 
channel is already closed.

<a name="🔗11.3."></a>

11.3. Selecting to send
==================================================

Select expression has [onSend][SendChannel.onSend] clause that can be used for a great good in combination 
with a biased nature of selection.

Let us write an example of a producer of integers that sends its values to a `side` channel when 
the consumers on its primary channel cannot keep up with it:

```java,kotlin
fun CoroutineScope.produceNumbers(side: SendChannel<Int>) = produce<Int> {
    for (num in 1..10) { // produce 10 numbers from 1 to 10
        delay(100) // every 100 ms
        select<Unit> {
            onSend(num) {} // Send to the primary channel
            side.onSend(num) {} // or to the side channel     
        }
    }
}
```

Consumer is going to be quite slow, taking 250 ms to process each number:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*
import kotlinx.coroutines.selects.*

fun CoroutineScope.produceNumbers(side: SendChannel<Int>) = produce<Int> {
    for (num in 1..10) { // produce 10 numbers from 1 to 10
        delay(100) // every 100 ms
        select<Unit> {
            onSend(num) {} // Send to the primary channel
            side.onSend(num) {} // or to the side channel     
        }
    }
}

fun main() = runBlocking<Unit> {
//sampleStart
    val side = Channel<Int>() // allocate side channel
    launch { // this is a very fast consumer for the side channel
        side.consumeEach { println("Side channel has $it") }
    }
    produceNumbers(side).consumeEach { 
        println("Consuming $it")
        delay(250) // let us digest the consumed number properly, do not hurry
    }
    println("Done consuming")
    coroutineContext.cancelChildren()  
//sampleEnd      
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-select-03.kt).
>
{type="note"}
  
So let us see what happens:
 
```text
Consuming 1
Side channel has 2
Side channel has 3
Consuming 4
Side channel has 5
Side channel has 6
Consuming 7
Side channel has 8
Side channel has 9
Consuming 10
Done consuming
```

<!--- TEST -->

<a name="🔗11.4."></a>

11.4. Selecting deferred values
==================================================

Deferred values can be selected using [onAwait][Deferred.onAwait] clause. 
Let us start with an async function that returns a deferred string value after 
a random delay:

```java,kotlin
fun CoroutineScope.asyncString(time: Int) = async {
    delay(time.toLong())
    "Waited for $time ms"
}
```

Let us start a dozen of them with a random delay.

```java,kotlin
fun CoroutineScope.asyncStringsList(): List<Deferred<String>> {
    val random = Random(3)
    return List(12) { asyncString(random.nextInt(1000)) }
}
```

Now the main function awaits for the first of them to complete and counts the number of deferred values
that are still active. Note that we've used here the fact that `select` expression is a Kotlin DSL, 
so we can provide clauses for it using an arbitrary code. In this case we iterate over a list
of deferred values to provide `onAwait` clause for each deferred value.

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.selects.*
import java.util.*
    
fun CoroutineScope.asyncString(time: Int) = async {
    delay(time.toLong())
    "Waited for $time ms"
}

fun CoroutineScope.asyncStringsList(): List<Deferred<String>> {
    val random = Random(3)
    return List(12) { asyncString(random.nextInt(1000)) }
}

fun main() = runBlocking<Unit> {
//sampleStart
    val list = asyncStringsList()
    val result = select<String> {
        list.withIndex().forEach { (index, deferred) ->
            deferred.onAwait { answer ->
                "Deferred $index produced answer '$answer'"
            }
        }
    }
    println(result)
    val countActive = list.count { it.isActive }
    println("$countActive coroutines are still active")
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-select-04.kt).
>
{type="note"}

The output is:

```text
Deferred 4 produced answer 'Waited for 128 ms'
11 coroutines are still active
```

<!--- TEST -->

<a name="🔗11.5."></a>

11.5. Switch over a channel of deferred values
==================================================

Let us write a channel producer function that consumes a channel of deferred string values, waits for each received
deferred value, but only until the next deferred value comes over or the channel is closed. This example puts together 
[onReceiveCatching][ReceiveChannel.onReceiveCatching] and [onAwait][Deferred.onAwait] clauses in the same `select`:

```java,kotlin
fun CoroutineScope.switchMapDeferreds(input: ReceiveChannel<Deferred<String>>) = produce<String> {
    var current = input.receive() // start with first received deferred value
    while (isActive) { // loop while not cancelled/closed
        val next = select<Deferred<String>?> { // return next deferred value from this select or null
            input.onReceiveCatching { update ->
                update.getOrNull()
            }
            current.onAwait { value ->
                send(value) // send value that current deferred has produced
                input.receiveCatching().getOrNull() // and use the next deferred from the input channel
            }
        }
        if (next == null) {
            println("Channel was closed")
            break // out of loop
        } else {
            current = next
        }
    }
}
```

To test it, we'll use a simple async function that resolves to a specified string after a specified time:

```java,kotlin
fun CoroutineScope.asyncString(str: String, time: Long) = async {
    delay(time)
    str
}
```

The main function just launches a coroutine to print results of `switchMapDeferreds` and sends some test
data to it:

<!--- CLEAR -->

```java,kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*
import kotlinx.coroutines.selects.*
    
fun CoroutineScope.switchMapDeferreds(input: ReceiveChannel<Deferred<String>>) = produce<String> {
    var current = input.receive() // start with first received deferred value
    while (isActive) { // loop while not cancelled/closed
        val next = select<Deferred<String>?> { // return next deferred value from this select or null
            input.onReceiveCatching { update ->
                update.getOrNull()
            }
            current.onAwait { value ->
                send(value) // send value that current deferred has produced
                input.receiveCatching().getOrNull() // and use the next deferred from the input channel
            }
        }
        if (next == null) {
            println("Channel was closed")
            break // out of loop
        } else {
            current = next
        }
    }
}

fun CoroutineScope.asyncString(str: String, time: Long) = async {
    delay(time)
    str
}

fun main() = runBlocking<Unit> {
//sampleStart
    val chan = Channel<Deferred<String>>() // the channel for test
    launch { // launch printing coroutine
        for (s in switchMapDeferreds(chan)) 
            println(s) // print each received string
    }
    chan.send(asyncString("BEGIN", 100))
    delay(200) // enough time for "BEGIN" to be produced
    chan.send(asyncString("Slow", 500))
    delay(100) // not enough time to produce slow
    chan.send(asyncString("Replace", 100))
    delay(500) // give it time before the last one
    chan.send(asyncString("END", 500))
    delay(1000) // give it time to process
    chan.close() // close the channel ... 
    delay(500) // and wait some time to let it finish
//sampleEnd
}
```
{kotlin-runnable="true" kotlin-min-compiler-version="1.3"}

> You can get the full code [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-select-05.kt).
>
{type="note"}

The result of this code:

```text
BEGIN
Replace
END
Channel was closed
```

<!--- TEST -->



<!--- END -->
<a name="🔗12."></a>

📜 12. Debug coroutines using IntelliJ IDEA – tutorial
==================================================

This tutorial demonstrates how to create Kotlin coroutines and debug them using IntelliJ IDEA.

The tutorial assumes you have prior knowledge of the [coroutines](coroutines-guide.md) concept.

<a name="🔗12.1."></a>

12.1. Create coroutines
==================================================

1. Open a Kotlin project in IntelliJ IDEA. If you don't have a project, [create one](https://kotlinlang.org/docs/jvm-get-started.html#create-a-project).
2. To use the `kotlinx.coroutines` library in a Gradle project, add the following dependency to `build.gradle(.kts)`:

   <tabs group="build-script">
   <tab title="Kotlin" group-key="kotlin">

   ```java,kotlin
   dependencies {
       implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:%coroutinesVersion%")
   }
   ``` 

   </tab>
   <tab title="Groovy" group-key="groovy">
   
   ```groovy
   dependencies {
       implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core:%coroutinesVersion%'
   }
   ```
   
   </tab>
   </tabs>

   For other build systems, see instructions in the [`kotlinx.coroutines` README](https://github.com/Kotlin/kotlinx.coroutines#using-in-your-projects).
   
3. Open the `Main.kt` file in `src/main/kotlin`.

    The `src` directory contains Kotlin source files and resources. The `Main.kt` file contains sample code that will print `Hello World!`.

4. Change code in the `main()` function:

    * Use the [`runBlocking()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-blocking.html) block to wrap a coroutine.
    * Use the [`async()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/async.html) function to create coroutines that compute deferred values `a` and `b`.
    * Use the [`await()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/await.html) function to await the computation result.
    * Use the [`println()`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/println.html) function to print computing status and the result of multiplication to the output.

    ```java,kotlin
    import kotlinx.coroutines.*
    
    fun main() = runBlocking<Unit> {
        val a = async {
            println("I'm computing part of the answer")
            6
        }
        val b = async {
            println("I'm computing another part of the answer")
            7
        }
        println("The answer is ${a.await() * b.await()}")
    }
    ```

5. Build the code by clicking **Build Project**.

    ![Build an application](https://kotlinlang.org/docs/images/flow-build-project.png)

<a name="🔗12.2."></a>

12.2. Debug coroutines
==================================================

1. Set breakpoints at the lines with the `println()` function call:

    ![Build a console application](https://kotlinlang.org/docs/images/coroutine-breakpoint.png)

2. Run the code in debug mode by clicking **Debug** next to the run configuration at the top of the screen.

    ![Build a console application](https://kotlinlang.org/docs/images/flow-debug-project.png)

    The **Debug** tool window appears: 
    * The **Frames** tab contains the call stack.
    * The **Variables** tab contains variables in the current context.
    * The **Coroutines** tab contains information on running or suspended coroutines. It shows that there are three coroutines.
    The first one has the **RUNNING** status, and the other two have the **CREATED** status.

    ![Debug the coroutine](https://kotlinlang.org/docs/images/coroutine-debug-1.png)

3. Resume the debugger session by clicking **Resume Program** in the **Debug** tool window:

    ![Debug the coroutine](https://kotlinlang.org/docs/images/coroutine-debug-2.png)
    
    Now the **Coroutines** tab shows the following:
    * The first coroutine has the **SUSPENDED** status – it is waiting for the values so it can multiply them.
    * The second coroutine is calculating the `a` value – it has the **RUNNING** status.
    * The third coroutine has the **CREATED** status and isn’t calculating the value of `b`.

4. Resume the debugger session by clicking **Resume Program** in the **Debug** tool window:

    ![Build a console application](https://kotlinlang.org/docs/images/coroutine-debug-3.png)

    Now the **Coroutines** tab shows the following:
    * The first coroutine has the **SUSPENDED** status – it is waiting for the values so it can multiply them.
    * The second coroutine has computed its value and disappeared.
    * The third coroutine is calculating the value of `b` – it has the **RUNNING** status.

Using IntelliJ IDEA debugger, you can dig deeper into each coroutine to debug your code.

<a name="🔗12.2.1."></a>

12.2.1. Optimized-out variables
==================================================

If you use `suspend` functions, in the debugger, you might see the "was optimized out" text next to a variable's name:

![Variable "a" was optimized out](https://kotlinlang.org/docs/images/variable-optimised-out.png)

This text means that the variable's lifetime was decreased, and the variable doesn't exist anymore.
It is difficult to debug code with optimized variables because you don't see their values.
You can disable this behavior with the `-Xdebug` compiler option.

> __Never use this flag in production__: `-Xdebug` can [cause memory leaks](https://youtrack.jetbrains.com/issue/KT-48678/Coroutine-debugger-disable-was-optimised-out-compiler-feature#focus=Comments-27-6015585.0-0).
>
{type="warning"}

<a name="🔗13."></a>

📜 13. Debug Kotlin Flow using IntelliJ IDEA – tutorial
==================================================

This tutorial demonstrates how to create Kotlin Flow and debug it using IntelliJ IDEA.

The tutorial assumes you have prior knowledge of the [coroutines](🔗01.) and [Kotlin Flow](#🔗07.1.3.) concepts.

<a name="🔗13.1."></a>

13.1. Create a Kotlin flow
==================================================

Create a Kotlin [flow](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flow.html) with a slow emitter and a slow collector:

1. Open a Kotlin project in IntelliJ IDEA. If you don't have a project, [create one](https://kotlinlang.org/docs/jvm-get-started.html#create-a-project).
2. To use the `kotlinx.coroutines` library in a Gradle project, add the following dependency to `build.gradle(.kts)`:
   
   <tabs group="build-script">
   <tab title="Kotlin" group-key="kotlin">
   
   ```java,kotlin
   dependencies {
       implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:%coroutinesVersion%")
   }
   ``` 
   
   </tab>
   <tab title="Groovy" group-key="groovy">
   
   ```groovy
   dependencies {
       implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core:%coroutinesVersion%'
   }
   ```
   
   </tab>
   </tabs>
   
   For other build systems, see instructions in the [`kotlinx.coroutines` README](https://github.com/Kotlin/kotlinx.coroutines#using-in-your-projects).

3. Open the `Main.kt` file in `src/main/kotlin`.

    The `src` directory contains Kotlin source files and resources. The `Main.kt` file contains sample code that will print `Hello World!`.

4. Create the `simple()` function that returns a flow of three numbers:

    * Use the [`delay()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html) function to imitate CPU-consuming blocking code. It suspends the coroutine for 100 ms without blocking the thread.
    * Produce the values in the `for` loop using the [`emit()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-flow-collector/emit.html) function.

    ```java,kotlin
    import kotlinx.coroutines.*
    import kotlinx.coroutines.flow.*
    import kotlin.system.*
 
    fun simple(): Flow<Int> = flow {
        for (i in 1..3) {
            delay(100)
            emit(i)
        }
    }
    ```

5. Change the code in the `main()` function:

    * Use the [`runBlocking()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-blocking.html) block to wrap a coroutine.
    * Collect the emitted values using the [`collect()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/collect.html) function.
    * Use the [`delay()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html) function to imitate CPU-consuming code. It suspends the coroutine for 300 ms without blocking the thread.
    * Print the collected value from the flow using the [`println()`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/println.html) function.

    ```java,kotlin
    fun main() = runBlocking {
        simple()
            .collect { value ->
                delay(300)
                println(value)
            }
    }
    ```

6. Build the code by clicking **Build Project**.

    ![Build an application](https://kotlinlang.org/docs/images/flow-build-project.png)

<a name="🔗13.2."></a>

13.2. Debug the coroutine
==================================================

1. Set a breakpoint at the line where the `emit()` function is called:

    ![Build a console application](https://kotlinlang.org/docs/images/flow-breakpoint.png)

2. Run the code in debug mode by clicking **Debug** next to the run configuration at the top of the screen.

    ![Build a console application](https://kotlinlang.org/docs/images/flow-debug-project.png)

    The **Debug** tool window appears: 
    * The **Frames** tab contains the call stack.
    * The **Variables** tab contains variables in the current context. It tells us that the flow is emitting the first value.
    * The **Coroutines** tab contains information on running or suspended coroutines.

    ![Debug the coroutine](https://kotlinlang.org/docs/images/flow-debug-1.png)

3. Resume the debugger session by clicking **Resume Program** in the **Debug** tool window. The program stops at the same breakpoint.

    ![Debug the coroutine](https://kotlinlang.org/docs/images/flow-resume-debug.png)

    Now the flow emits the second value.

    ![Debug the coroutine](https://kotlinlang.org/docs/images/flow-debug-2.png)

<a name="🔗13.2.1."></a>

13.2.1. Optimized-out variables
==================================================

If you use `suspend` functions, in the debugger, you might see the "was optimized out" text next to a variable's name:

![Variable "a" was optimized out](https://kotlinlang.org/docs/images/variable-optimised-out.png)

This text means that the variable's lifetime was decreased, and the variable doesn't exist anymore.
It is difficult to debug code with optimized variables because you don't see their values.
You can disable this behavior with the `-Xdebug` compiler option.

> __Never use this flag in production__: `-Xdebug` can [cause memory leaks](https://youtrack.jetbrains.com/issue/KT-48678/Coroutine-debugger-disable-was-optimised-out-compiler-feature#focus=Comments-27-6015585.0-0).
>
{type="warning"}

<a name="🔗13.3."></a>

13.3. Add a concurrently running coroutine
==================================================

1. Open the `Main.kt` file in `src/main/kotlin`.

2. Enhance the code to run the emitter and collector concurrently:

    * Add a call to the [`buffer()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/buffer.html) function to run the emitter and collector concurrently. `buffer()` stores emitted values and runs the flow collector in a separate coroutine. 
 
    ```java,kotlin
    fun main() = runBlocking<Unit> {
        simple()
            .buffer()
            .collect { value ->
                delay(300)
                println(value)
            }
    }
    ```

3. Build the code by clicking **Build Project**.

<a name="🔗13.4."></a>

13.4. Debug a Kotlin flow with two coroutines
==================================================

1. Set a new breakpoint at `println(value)`.

2. Run the code in debug mode by clicking **Debug** next to the run configuration at the top of the screen.

    ![Build a console application](https://kotlinlang.org/docs/images/flow-debug-3.png)

    The **Debug** tool window appears.

    In the **Coroutines** tab, you can see that there are two coroutines running concurrently. The flow collector and emitter run in separate coroutines because of the `buffer()` function.
    The `buffer()` function buffers emitted values from the flow.
    The emitter coroutine has the **RUNNING** status, and the collector coroutine has the **SUSPENDED** status.

3. Resume the debugger session by clicking **Resume Program** in the **Debug** tool window.

    ![Debugging coroutines](https://kotlinlang.org/docs/images/flow-debug-4.png)

    Now the collector coroutine has the **RUNNING** status, while the emitter coroutine has the **SUSPENDED** status.

    You can dig deeper into each coroutine to debug your code.
<!--- TOC -->

* [Compatibility](#compatibility)
* [Public API types](#public-api-types)
  * [Experimental API](#experimental-api)
  * [Flow preview API](#flow-preview-api)
  * [Obsolete API](#obsolete-api)
  * [Internal API](#internal-api)
  * [Stable API](#stable-api)
  * [Deprecation cycle](#deprecation-cycle)
* [Using annotated API](#using-annotated-api)
  * [Programmatically](#programmatically)
  * [Gradle](#gradle)
  * [Maven](#maven)

<!--- END -->

<a name="🔗14."></a>

📜 14. Compatibility
==================================================

This document describes the compatibility policy of `kotlinx.coroutines` library since version 1.0.0 and semantics of compatibility-specific annotations.


<a name="🔗14.1."></a>

14.1. Public API types
==================================================
`kotlinx.coroutines` public API comes in five flavours: stable, experimental, obsolete, internal and deprecated. 
All public API except stable is marked with the corresponding annotation.

<a name="🔗14.1.1."></a>

14.1.1. Experimental API
==================================================
Experimental API is marked with [@ExperimentalCoroutinesApi][ExperimentalCoroutinesApi] annotation.
API is marked experimental when its design has potential open questions which may eventually lead to 
either semantics changes of the API or its deprecation.

By default, most of the new API is marked as experimental and becomes stable in one of the next major releases if no new issues arise.
Otherwise, either semantics is fixed without changes in ABI or API goes through deprecation cycle. 

When using experimental API may be dangerous:
* You are writing a library which depends on `kotlinx.coroutines` and want to use experimental coroutines API in a stable library API.
It may lead to undesired consequences when end users of your library update their `kotlinx.coroutines` version where experimental API
has slightly different semantics.
* You want to build core infrastructure of the application around experimental API. 

<a name="🔗14.1.2."></a>

14.1.2. Flow preview API
==================================================
All [Flow]-related API is marked with [@FlowPreview][FlowPreview] annotation.
This annotation indicates that Flow API is in preview status.
We provide no compatibility guarantees between releases for preview features, including binary, source and semantics compatibility.

When using preview API may be dangerous:
* You are writing a library/framework and want to use [Flow] API in a stable release or in a stable API.
* You want to use [Flow] in the core infrastructure of your application.
* You want to use [Flow] as "write-and-forget" solution and cannot afford additional maintenance cost when 
  it comes to `kotlinx.coroutines` updates.


<a name="🔗14.1.3."></a>

14.1.3. Obsolete API
==================================================
Obsolete API is marked with [@ObsoleteCoroutinesApi][ObsoleteCoroutinesApi] annotation.
Obsolete API is similar to experimental, but already known to have serious design flaws and its potential replacement, 
but replacement is not yet implemented.

The semantics of this API won't be changed, but it will go through a deprecation cycle as soon as the replacement is ready.

<a name="🔗14.1.4."></a>

14.1.4. Internal API
==================================================
Internal API is marked with [@InternalCoroutinesApi][InternalCoroutinesApi] or is part of `kotlinx.coroutines.internal` package.
This API has no guarantees on its stability, can and will be changed and/or removed in the future releases. 
If you can't avoid using internal API, please report it to [issue tracker](https://github.com/Kotlin/kotlinx.coroutines/issues/new).

<a name="🔗14.1.5."></a>

14.1.5. Stable API
==================================================
Stable API is guaranteed to preserve its ABI and documented semantics. If at some point unfixable design flaws will be discovered, 
this API will go through a deprecation cycle and remain binary compatible as long as possible.

<a name="🔗14.1.6."></a>

14.1.6. Deprecation cycle
==================================================
When some API is deprecated, it goes through multiple stages and there is at least one major release between stages.
* Feature is deprecated with compilation warning. Most of the time, proper replacement 
(and corresponding `replaceWith` declaration) is provided to automatically migrate deprecated usages with a help of IntelliJ IDEA.
* Deprecation level is increased to `error` or `hidden`. It is no longer possible to compile new code against deprecated API, 
  though it is still present in the ABI.
* API is completely removed. While we give our best efforts not to do so and have no plans of removing any API, we still are leaving 
this option in case of unforeseen problems such as security holes.

<a name="🔗14.2."></a>

14.2. Using annotated API
==================================================
All API annotations are [kotlin.Experimental](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-experimental/).
It is done in order to produce compilation warning about using experimental or obsolete API.
Warnings can be disabled either programmatically for a specific call site or globally for the whole module.

<a name="🔗14.2.1."></a>

14.2.1. Programmatically
==================================================
For a specific call-site, warning can be disabled by using [OptIn](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-opt-in/) annotation:
```java,kotlin
@OptIn(ExperimentalCoroutinesApi::class) // Disables warning about experimental coroutines API 
fun experimentalApiUsage() {
    someKotlinxCoroutinesExperimentalMethod()
}
``` 

<a name="🔗14.2.2."></a>

14.2.2. Gradle
==================================================
For the Gradle project, a warning can be disabled by passing a compiler flag in your `build.gradle` file:

```groovy
tasks.withType(org.jetbrains.kotlin.gradle.tasks.AbstractKotlinCompile).all {
    kotlinOptions.freeCompilerArgs += ["-Xuse-experimental=kotlinx.coroutines.ExperimentalCoroutinesApi"]
}

```

<a name="🔗14.2.3."></a>

14.2.3. Maven
==================================================
For the Maven project, a warning can be disabled by passing a compiler flag in your `pom.xml` file:
```xml
<plugin>
    <artifactId>kotlin-maven-plugin</artifactId>
    <groupId>org.jetbrains.kotlin</groupId>
    ... your configuration ...
    <configuration>
        <args>
            <arg>-Xuse-experimental=kotlinx.coroutines.ExperimentalCoroutinesApi</arg>
        </args>
    </configuration>
</plugin>
```




**Table of contents**


* [Debugging coroutines](#debugging-coroutines)
* [Debug mode](#debug-mode)
* [Stacktrace recovery](#stacktrace-recovery)
  * [Stacktrace recovery machinery](#stacktrace-recovery-machinery)
* [Debug agent](#debug-agent)
* [Android optimization](#android-optimization)


<a name="🔗15."></a>

📜 15. Debugging coroutines
==================================================

Debugging asynchronous programs is challenging, because multiple concurrent coroutines are typically working at the same time.
To help with that, `kotlinx.coroutines` comes with additional features for debugging: debug mode, stacktrace recovery 
and debug agent.

<a name="🔗15.1."></a>

15.1. Debug mode
==================================================

The first debugging feature of `kotlinx.coroutines` is debug mode.
It can be enabled either by setting system property [DEBUG_PROPERTY_NAME] or by running Java with enabled assertions (`-ea` flag).
The latter is helpful to have debug mode enabled by default in unit tests.

Debug mode attaches a unique [name][CoroutineName] to every launched coroutine.
Coroutine name can be seen in a regular Java debugger, 
in a string representation of the coroutine or in the thread name executing named coroutine. 
Overhead of this feature is negligible and it can be safely turned on by default to simplify logging and diagnostic.

<a name="🔗15.2."></a>

15.2. Stacktrace recovery
==================================================

Stacktrace recovery is another useful feature of debug mode. It is enabled by default in the debug mode, 
but can be separately disabled by setting `kotlinx.coroutines.stacktrace.recovery` system property to `false`.

Stacktrace recovery tries to stitch asynchronous exception stacktrace with a stacktrace of the receiver by copying it, providing
not only information where an exception was thrown, but also where it was asynchronously rethrown or caught.

It is easy to demonstrate with actual stacktraces of the same program that awaits asynchronous operation in `main` function 
(runnable code is [here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-debug/test/RecoveryExample.kt)):

| Without recovery | With recovery |
| - | - |
| ![before](https://github.com/Kotlin/kotlinx.coroutines/raw/master/docs/images/before.png "before") | ![after](https://github.com/Kotlin/kotlinx.coroutines/raw/master/docs/images/after.png "after") |

The only downside of this approach is losing referential transparency of the exception. 

> Note that suppressed exceptions are not copied and are left intact in the cause
> in order to prevent cycles in the exceptions chain, obscure`[CIRCULAR REFERENCE]` messages
> and even [crashes](https://jira.qos.ch/browse/LOGBACK-1027) in some frameworks

<a name="🔗15.2.1."></a>

15.2.1. Stacktrace recovery machinery   
==================================================

This section explains the inner mechanism of stacktrace recovery and can be skipped.

When an exception is rethrown between coroutines (e.g. through `withContext` or `Deferred.await` boundary), stacktrace recovery
machinery tries to create a copy of the original exception (with the original exception as the cause), then rewrite stacktrace
of the copy with coroutine-related stack frames (using [Throwable.setStackTrace](https://docs.oracle.com/javase/9/docs/api/java/lang/Throwable.html#setStackTrace-java.lang.StackTraceElement:A-)) 
and then throws the resulting exception instead of the original one.

Exception copy logic is straightforward:
  1) If the exception class implements [CopyableThrowable], [CopyableThrowable.createCopy] is used.
     `null` can be returned from `createCopy` to opt-out specific exception from being recovered.
  2) If the exception class has class-specific fields not inherited from Throwable, the exception is not copied.
  3) Otherwise, one of the public exception's constructor is invoked reflectively with an optional `initCause` call. 
  4) If the reflective copy has a changed message (exception constructor passed a modified `message` parameter to the superclass), 
     the exception is not copied in order to preserve a human-readable message. [CopyableThrowable] does not have such a limitation
     and allows the copy to have a `message` different from that of the original.

<a name="🔗15.3."></a>

15.3. Debug agent
==================================================

[kotlinx-coroutines-debug](../../kotlinx-coroutines-debug) module provides one of the most powerful debug capabilities in `kotlinx.coroutines`.

This is a separate module with a JVM agent that keeps track of all alive coroutines, introspects and dumps them similar to thread dump command,
additionally enhancing stacktraces with information where coroutine was created.

The full tutorial of how to use debug agent can be found in the corresponding [readme](../../kotlinx-coroutines-debug/README.md).

<!---
Make an exception googlable
java.lang.NoClassDefFoundError: Failed resolution of: Ljava/lang/management/ManagementFactory;
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent$ProcessProvider$ForCurrentVm$ForLegacyVm.resolve(ByteBuddyAgent.java:1055)
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent$ProcessProvider$ForCurrentVm.resolve(ByteBuddyAgent.java:1038)
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent.install(ByteBuddyAgent.java:374)
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent.install(ByteBuddyAgent.java:342)
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent.install(ByteBuddyAgent.java:328)
        at kotlinx.coroutines.debug.internal.DebugProbesImpl.install(DebugProbesImpl.kt:39)
        at kotlinx.coroutines.debug.DebugProbes.install(DebugProbes.kt:49)
-->

<a name="🔗15.4."></a>

15.4. Android optimization
==================================================

In optimized (release) builds with R8 version 1.6.0 or later both 
[Debugging mode](#🔗15.1.) and 
[Stacktrace recovery](#🔗15.2.) 
are permanently turned off. 
For more details see ["Optimization" section for Android](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/kotlinx-coroutines-android/README.md#optimization). 


<a name="🔗16."></a>

📜 16. Kotlinx.Coroutines Modules
==================================================

[List]: https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/ 
[Sequence.flatMap]: https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/flat-map.html
[Sequence.flatten]: https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/flatten.html
[Sequence.zip]: https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/zip.html
[Sequence]: https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/
[collections]: https://kotlinlang.org/docs/reference/collections-overview.html 
[exceptions]: https://kotlinlang.org/docs/reference/exceptions.html
[forEach]: https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/for-each.html

<a name="🔗16.1."></a>

📜 16.1. Module kotlinx-coroutines-core
==================================================

Core primitives to work with coroutines.

Coroutine builder functions:

| **Name**                                       | **Result**                                                   | **Scope**                                                  | **Description**
| ---------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- | ---------------
| [launch][kotlinx.coroutines.launch]            | [Job][kotlinx.coroutines.Job]                                | [CoroutineScope][kotlinx.coroutines.CoroutineScope]        | Launches coroutine that does not have any result 
| [async][kotlinx.coroutines.async]              | [Deferred][kotlinx.coroutines.Deferred]                      | [CoroutineScope][kotlinx.coroutines.CoroutineScope]        | Returns a single value with the future result
| [produce][kotlinx.coroutines.channels.produce] | [ReceiveChannel][kotlinx.coroutines.channels.ReceiveChannel] | [ProducerScope][kotlinx.coroutines.channels.ProducerScope] | Produces a stream of elements
| [runBlocking][kotlinx.coroutines.runBlocking]  | `T`                                                          | [CoroutineScope][kotlinx.coroutines.CoroutineScope]        | Blocks the thread while the coroutine runs

Coroutine dispatchers implementing [CoroutineDispatcher]:
 
| **Name**                                                            | **Description**
| ------------------------------------------------------------------- | ---------------
| [Dispatchers.Default][kotlinx.coroutines.Dispatchers.Default]       | Confines coroutine execution to a shared pool of background threads
| [Dispatchers.Unconfined][kotlinx.coroutines.Dispatchers.Unconfined] | Does not confine coroutine execution in any way

More context elements:

| **Name**                                                                  | **Description**
| ------------------------------------------------------------------------- | ---------------
| [NonCancellable][kotlinx.coroutines.NonCancellable]                       | A non-cancelable job that is always active
| [CoroutineExceptionHandler][kotlinx.coroutines.CoroutineExceptionHandler] | Handler for uncaught exception

Synchronization primitives for coroutines:

| **Name**                                        | **Suspending functions**                                                                                            | **Description**
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------
| [Mutex][kotlinx.coroutines.sync.Mutex]          | [lock][kotlinx.coroutines.sync.Mutex.lock]                                                                          | Mutual exclusion 
| [Channel][kotlinx.coroutines.channels.Channel]  | [send][kotlinx.coroutines.channels.SendChannel.send], [receive][kotlinx.coroutines.channels.ReceiveChannel.receive] | Communication channel (aka queue or exchanger)

Top-level suspending functions:

| **Name**                                                  | **Description**
| --------------------------------------------------------- | ---------------
| [delay][kotlinx.coroutines.delay]                         | Non-blocking sleep
| [yield][kotlinx.coroutines.yield]                         | Yields thread in single-threaded dispatchers
| [withContext][kotlinx.coroutines.withContext]             | Switches to a different context
| [withTimeout][kotlinx.coroutines.withTimeout]             | Set execution time-limit with exception on timeout 
| [withTimeoutOrNull][kotlinx.coroutines.withTimeoutOrNull] | Set execution time-limit will null result on timeout
| [awaitAll][kotlinx.coroutines.awaitAll]                   | Awaits for successful completion of all given jobs or exceptional completion of any
| [joinAll][kotlinx.coroutines.joinAll]                     | Joins on all given jobs

Cancellation support for user-defined suspending functions is available with [suspendCancellableCoroutine]
helper function. [NonCancellable] job object is provided to suppress cancellation with 
`withContext(NonCancellable) {...}` block of code.

[Select][kotlinx.coroutines.selects.select] expression waits for the result of multiple suspending functions simultaneously:

| **Receiver**                                                 | **Suspending function**                                         | **Select clause**                                                 | **Non-suspending version**
| ------------------------------------------------------------ | --------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------
| [Job][kotlinx.coroutines.Job]                                | [join][kotlinx.coroutines.Job.join]                             | [onJoin][kotlinx.coroutines.Job.onJoin]                           | [isCompleted][kotlinx.coroutines.Job.isCompleted]
| [Deferred][kotlinx.coroutines.Deferred]                      | [await][kotlinx.coroutines.Deferred.await]                      | [onAwait][kotlinx.coroutines.Deferred.onAwait]                    | [isCompleted][kotlinx.coroutines.Job.isCompleted]
| [SendChannel][kotlinx.coroutines.channels.SendChannel]       | [send][kotlinx.coroutines.channels.SendChannel.send]            | [onSend][kotlinx.coroutines.channels.SendChannel.onSend]          | [trySend][kotlinx.coroutines.channels.SendChannel.trySend]
| [ReceiveChannel][kotlinx.coroutines.channels.ReceiveChannel] | [receive][kotlinx.coroutines.channels.ReceiveChannel.receive]   | [onReceive][kotlinx.coroutines.channels.ReceiveChannel.onReceive] | [tryReceive][kotlinx.coroutines.channels.ReceiveChannel.tryReceive]
| [ReceiveChannel][kotlinx.coroutines.channels.ReceiveChannel] | [receiveCatching][kotlinx.coroutines.channels.receiveCatching]  | [onReceiveCatching][kotlinx.coroutines.channels.onReceiveCatching] | [tryReceive][kotlinx.coroutines.channels.ReceiveChannel.tryReceive]
| none                                                         | [delay][kotlinx.coroutines.delay]                               | [onTimeout][kotlinx.coroutines.selects.SelectBuilder.onTimeout]   | none

<a name="🔗16.1.1."></a>

16.1.1. Package kotlinx.coroutines
==================================================

General-purpose coroutine builders, contexts, and helper functions.

<a name="🔗16.1.2."></a>

16.1.2. Package kotlinx.coroutines.sync
==================================================

Synchronization primitives (mutex).

<a name="🔗16.1.3."></a>

16.1.3. Package kotlinx.coroutines.channels
==================================================

Channels &mdash; non-blocking primitives for communicating a stream of elements between coroutines.

<a name="🔗16.1.4."></a>

16.1.4. Package kotlinx.coroutines.flow
==================================================

Flow &mdash; asynchronous cold stream of elements.

<a name="🔗16.1.5."></a>

16.1.5. Package kotlinx.coroutines.selects
==================================================

Select expression to perform multiple suspending operations simultaneously until one of them succeeds.

<a name="🔗16.1.6."></a>

16.1.6. Package kotlinx.coroutines.intrinsics
==================================================

Low-level primitives for finer-grained control of coroutines.

[CancellationException]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-cancellation-exception/index.html
[Channel()]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-channel.html
[Channel.Factory.CONFLATED]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-channel/-factory/-c-o-n-f-l-a-t-e-d.html
[Channel]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-channel/index.html
[CopyableThrowable.createCopy]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-copyable-throwable/create-copy.html
[CopyableThrowable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-copyable-throwable/index.html
[CoroutineDispatcher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-dispatcher/index.html
[CoroutineExceptionHandler]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-exception-handler/index.html
[CoroutineName]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-name/index.html
[CoroutineScope()]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope.html
[CoroutineScope.coroutineContext]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/coroutine-context.html
[CoroutineScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/index.html
[CoroutineStart.LAZY]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-start/-l-a-z-y/index.html
[CoroutineStart.UNDISPATCHED]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-start/-u-n-d-i-s-p-a-t-c-h-e-d/index.html
[CoroutineStart]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-start/index.html
[DEBUG_PROPERTY_NAME]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-d-e-b-u-g_-p-r-o-p-e-r-t-y_-n-a-m-e.html
[DEFAULT_CONCURRENCY]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-d-e-f-a-u-l-t_-c-o-n-c-u-r-r-e-n-c-y.html
[Deferred.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/await.html
[Deferred.onAwait]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/on-await.html
[Deferred]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/index.html
[Dispatchers.Default]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-default.html
[Dispatchers.IO]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-i-o.html
[Dispatchers.Main]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-main.html
[Dispatchers.Unconfined]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-unconfined.html
[Dispatchers]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/index.html
[ExecutorCoroutineDispatcher.close]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-executor-coroutine-dispatcher/close.html
[ExperimentalCoroutinesApi]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-experimental-coroutines-api/index.html
[FlowCollector.emit]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-flow-collector/emit.html
[FlowPreview]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-flow-preview/index.html
[Flow]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-flow/index.html
[GlobalScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-global-scope/index.html
[IntRange.asFlow]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/as-flow.html
[InternalCoroutinesApi]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-internal-coroutines-api/index.html
[Job()]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job.html
[Job.cancel]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/cancel.html
[Job.join]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/join.html
[Job.start]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/start.html
[Job]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/index.html
[MainScope()]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-main-scope.html
[Mutex.lock]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-mutex/lock.html
[Mutex.unlock]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-mutex/unlock.html
[Mutex]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-mutex/index.html
[NonCancellable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-non-cancellable/index.html
[ObsoleteCoroutinesApi]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-obsolete-coroutines-api/index.html
[Promise.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/await.html
[ReceiveChannel.cancel]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/cancel.html
[ReceiveChannel.onReceiveCatching]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/on-receive-catching.html
[ReceiveChannel.onReceive]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/on-receive.html
[ReceiveChannel.receive]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/receive.html
[Semaphore]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-semaphore/index.html
[SendChannel.close]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-send-channel/close.html
[SendChannel.onSend]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-send-channel/on-send.html
[SendChannel.send]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-send-channel/send.html
[SendChannel.trySend]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-send-channel/try-send.html
[SendChannel]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-send-channel/index.html
[SupervisorJob()]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-supervisor-job.html
[ThreadContextElement]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-thread-context-element/index.html
[TickerMode.FIXED_DELAY]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-ticker-mode/-f-i-x-e-d_-d-e-l-a-y/index.html
[Window.asCoroutineDispatcher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/as-coroutine-dispatcher.html
[_coroutineScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/coroutine-scope.html
[_flow]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flow.html
[_supervisorScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/supervisor-scope.html
[actor]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/actor.html
[asContextElement]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/as-context-element.html
[asCoroutineDispatcher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/as-coroutine-dispatcher.html
[async]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/async.html
[buffer]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/buffer.html
[cancelAndJoin]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/cancel-and-join.html
[cancellable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/cancellable.html
[catch]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/catch.html
[collectLatest]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/collect-latest.html
[collect]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/collect.html
[combine]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/combine.html
[conflate]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/conflate.html
[consumeEach]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/consume-each.html
[delay]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html
[ensureActive]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/ensure-active.html
[ensurePresent]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/ensure-present.html
[filter]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/filter.html
[first]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/first.html
[flatMapConcat]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flat-map-concat.html
[flatMapLatest]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flat-map-latest.html
[flatMapMerge]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flat-map-merge.html
[flattenConcat]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flatten-concat.html
[flattenMerge]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flatten-merge.html
[flowOf]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flow-of.html
[flowOn]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flow-on.html
[fold]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/fold.html
[isActive]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/is-active.html
[kotlin.coroutines.CoroutineContext.cancelChildren]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/cancel-children.html
[kotlinx.coroutines.CoroutineExceptionHandler]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-exception-handler/index.html
[kotlinx.coroutines.CoroutineScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/index.html
[kotlinx.coroutines.Deferred.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/await.html
[kotlinx.coroutines.Deferred.onAwait]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/on-await.html
[kotlinx.coroutines.Deferred]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/index.html
[kotlinx.coroutines.Dispatchers.Default]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-default.html
[kotlinx.coroutines.Dispatchers.Unconfined]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-unconfined.html
[kotlinx.coroutines.Job.isCompleted]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/is-completed.html
[kotlinx.coroutines.Job.join]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/join.html
[kotlinx.coroutines.Job.onJoin]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/on-join.html
[kotlinx.coroutines.Job]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/index.html
[kotlinx.coroutines.NonCancellable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-non-cancellable/index.html
[kotlinx.coroutines.async]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/async.html
[kotlinx.coroutines.awaitAll]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/await-all.html
[kotlinx.coroutines.channels.Channel]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-channel/index.html
[kotlinx.coroutines.channels.ProducerScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-producer-scope/index.html
[kotlinx.coroutines.channels.ReceiveChannel.onReceive]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/on-receive.html
[kotlinx.coroutines.channels.ReceiveChannel.receive]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/receive.html
[kotlinx.coroutines.channels.ReceiveChannel.tryReceive]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/try-receive.html
[kotlinx.coroutines.channels.ReceiveChannel]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/index.html
[kotlinx.coroutines.channels.SendChannel.onSend]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-send-channel/on-send.html
[kotlinx.coroutines.channels.SendChannel.send]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-send-channel/send.html
[kotlinx.coroutines.channels.SendChannel.trySend]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-send-channel/try-send.html
[kotlinx.coroutines.channels.SendChannel]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-send-channel/index.html
[kotlinx.coroutines.channels.onReceiveCatching]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/on-receive-catching.html
[kotlinx.coroutines.channels.produce]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/produce.html
[kotlinx.coroutines.channels.receiveCatching]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/-receive-channel/receive-catching.html
[kotlinx.coroutines.delay]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html
[kotlinx.coroutines.joinAll]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/join-all.html
[kotlinx.coroutines.launch]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html
[kotlinx.coroutines.runBlocking]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-blocking.html
[kotlinx.coroutines.selects.SelectBuilder.onTimeout]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.selects/on-timeout.html
[kotlinx.coroutines.selects.select]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.selects/select.html
[kotlinx.coroutines.sync.Mutex.lock]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-mutex/lock.html
[kotlinx.coroutines.sync.Mutex]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-mutex/index.html
[kotlinx.coroutines.withContext]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/with-context.html
[kotlinx.coroutines.withTimeoutOrNull]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/with-timeout-or-null.html
[kotlinx.coroutines.withTimeout]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/with-timeout.html
[kotlinx.coroutines.yield]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/yield.html
[launchIn]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/launch-in.html
[launch]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html
[map]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/map.html
[newSingleThreadContext]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/new-single-thread-context.html
[onCompletion]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/on-completion.html
[onEach]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/on-each.html
[produce]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/produce.html
[promise]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/promise.html
[reduce]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/reduce.html
[runBlocking]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-blocking.html
[select]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.selects/select.html
[single]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/single.html
[suspendCancellableCoroutine]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/suspend-cancellable-coroutine.html
[take]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/take.html
[ticker]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.channels/ticker.html
[toList]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/to-list.html
[toSet]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/to-set.html
[transform]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/transform.html
[withContext]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/with-context.html
[withLock]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/with-lock.html
[withTimeoutOrNull]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/with-timeout-or-null.html
[withTimeout]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/with-timeout.html
[yield]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/yield.html
[zip]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/zip.html

<a name="🔗16.2."></a>

📜 16.2. Module kotlinx-coroutines-debug
==================================================

Debugging facilities for `kotlinx.coroutines` on JVM.

<a name="🔗16.2.1."></a>

16.2.1. Overview
==================================================

This module provides a debug JVM agent that allows to track and trace existing coroutines.
The main entry point to debug facilities is [DebugProbes] API.
Call to [DebugProbes.install] installs debug agent via ByteBuddy and starts spying on coroutines when they are created, suspended and resumed.

After that, you can use [DebugProbes.dumpCoroutines] to print all active (suspended or running) coroutines, including their state, creation and
suspension stacktraces.
Additionally, it is possible to process the list of such coroutines via [DebugProbes.dumpCoroutinesInfo] or dump isolated parts
of coroutines hierarchy referenced by a [Job] or [CoroutineScope] instances using  [DebugProbes.printJob] and [DebugProbes.printScope] respectively.

This module also provides an automatic [BlockHound](https://github.com/reactor/BlockHound) integration
that detects when a blocking operation was called in a coroutine context that prohibits it. In order to use it,
please follow the BlockHound [quick start guide](
https://github.com/reactor/BlockHound/blob/1.0.8.RELEASE/docs/quick_start.md).

<a name="🔗16.2.2."></a>

16.2.2. Using in your project
==================================================

Add `kotlinx-coroutines-debug` to your project test dependencies:
```
dependencies {
    testImplementation 'org.jetbrains.kotlinx:kotlinx-coroutines-debug:1.4.0'
}
```

<a name="🔗16.2.3."></a>

16.2.3. Using in unit tests
==================================================

For JUnit4 debug module provides special test rule, [CoroutinesTimeout], for installing debug probes
and to dump coroutines on timeout to simplify tests debugging.

Its usage is better demonstrated by the example (runnable code is [here](test/TestRuleExample.kt)):
 
```kotlin
class TestRuleExample {
    @get:Rule
    public val timeout = CoroutinesTimeout.seconds(1)

    private suspend fun someFunctionDeepInTheStack() {
        withContext(Dispatchers.IO) {
            delay(Long.MAX_VALUE) // Hang method
        }  
    }

    @Test
    fun hangingTest() = runBlocking {
        val job = launch {
            someFunctionDeepInTheStack()
        }
        job.join() // Join will hang
    }
}
```

After 1 second, test will fail with `TestTimeoutException` and all coroutines (`runBlocking` and `launch`) and their
stacktraces will be dumped to the console.

<a name="🔗16.2.4."></a>

16.2.4. Using as JVM agent
==================================================

Debug module can also be used as a standalone JVM agent to enable debug probes on the application startup.
You can run your application with an additional argument: `-javaagent:kotlinx-coroutines-debug-1.7.3.jar`.
Additionally, on Linux and Mac OS X you can use `kill -5 $pid` command in order to force your application to print all alive coroutines.
When used as Java agent, `"kotlinx.coroutines.debug.enable.creation.stack.trace"` system property can be used to control 
[DebugProbes.enableCreationStackTraces] along with agent startup.

<a name="🔗16.2.5."></a>

16.2.5. Using in production environment
==================================================

It is possible to run an application in production environments with debug probes in order to monitor its 
state and improve its observability. 
For that, it is strongly recommended to switch off [DebugProbes.enableCreationStackTraces] property to significantly 
reduce the overhead of debug probes and make it insignificant.
With creation stack-traces disabled, the typical overhead of enabled debug probes is a single-digit percentage of the total
application throughput.


<a name="🔗16.2.6."></a>

16.2.6. Example of usage
==================================================

Capabilities of this module can be demonstrated by the following example 
(runnable code is [here](test/Example.kt)):

```kotlin
suspend fun computeValue(): String = coroutineScope {
    val one = async { computeOne() }
    val two = async { computeTwo() }
    combineResults(one, two)
}

suspend fun combineResults(one: Deferred<String>, two: Deferred<String>): String =
    one.await() + two.await()

suspend fun computeOne(): String {
    delay(5000)
    return "4"
}

suspend fun computeTwo(): String {
    delay(5000)
    return "2"
}

fun main() = runBlocking {
    DebugProbes.install()
    val deferred = async { computeValue() }
    // Delay for some time
    delay(1000)
    // Dump running coroutines
    DebugProbes.dumpCoroutines()
    println("\nDumping only deferred")
    DebugProbes.printJob(deferred)
}
```

Printed result will be:

```
Coroutines dump 2018/11/12 21:44:02

Coroutine "coroutine#2":DeferredCoroutine{Active}@289d1c02, state: SUSPENDED
    at kotlinx.coroutines.DeferredCoroutine.await$suspendImpl(Builders.common.kt:99)
    at ExampleKt.combineResults(Example.kt:11)
    at ExampleKt$computeValue$2.invokeSuspend(Example.kt:7)
    at ExampleKt$main$1$deferred$1.invokeSuspend(Example.kt:25)
    at _COROUTINE._CREATION._(CoroutineDebugging.kt)
    at kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted(IntrinsicsJvm.kt:116)
    at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:25)
    at kotlinx.coroutines.BuildersKt.async$default(Unknown Source)
    at ExampleKt$main$1.invokeSuspend(Example.kt:25)
    at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:32)
    at kotlinx.coroutines.DispatchedTask.run(Dispatched.kt:233)
    at kotlinx.coroutines.BuildersKt.runBlocking$default(Unknown Source)
    at ExampleKt.main(Example.kt:23)
    at ExampleKt.main(Example.kt)

... More coroutines here ...

Dumping only deferred
"coroutine#2":DeferredCoroutine{Active}, continuation is SUSPENDED at line kotlinx.coroutines.DeferredCoroutine.await$suspendImpl(Builders.common.kt:99)
    "coroutine#3":DeferredCoroutine{Active}, continuation is SUSPENDED at line ExampleKt.computeOne(Example.kt:14)
    "coroutine#4":DeferredCoroutine{Active}, continuation is SUSPENDED at line ExampleKt.computeTwo(Example.kt:19)
```

<a name="🔗16.2.7."></a>

16.2.7. Status of the API
==================================================

API is experimental, and it is not guaranteed it won't be changed (while it is marked as `@ExperimentalCoroutinesApi`).
Like the rest of experimental API, `DebugProbes` is carefully designed, tested and ready to use in both test and production 
environments. It is marked as experimental to leave us the room to enrich the output data in a potentially backwards incompatible manner
to further improve diagnostics and debugging experience.

The output format of [DebugProbes] can be changed in the future and it is not recommended to rely on the string representation
of the dump programmatically.

<a name="🔗16.2.8."></a>

16.2.8. Debug agent and Android
==================================================

Android runtime does not support Instrument API necessary for `kotlinx-coroutines-debug` to function, triggering `java.lang.NoClassDefFoundError: Failed resolution of: Ljava/lang/management/ManagementFactory;`,
and it is not possible to use coroutine debugger along with Android emulator.

<!---
Make an exception googlable
java.lang.NoClassDefFoundError: Failed resolution of: Ljava/lang/management/ManagementFactory;
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent$ProcessProvider$ForCurrentVm$ForLegacyVm.resolve(ByteBuddyAgent.java:1055)
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent$ProcessProvider$ForCurrentVm.resolve(ByteBuddyAgent.java:1038)
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent.install(ByteBuddyAgent.java:374)
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent.install(ByteBuddyAgent.java:342)
        at kotlinx.coroutines.repackaged.net.bytebuddy.agent.ByteBuddyAgent.install(ByteBuddyAgent.java:328)
        at kotlinx.coroutines.debug.internal.DebugProbesImpl.install(DebugProbesImpl.kt:39)
        at kotlinx.coroutines.debug.DebugProbes.install(DebugProbes.kt:49)
-->

<a name="🔗16.2.8.1."></a>

16.2.8.1. Build failures due to duplicate resource files
==================================================

Building an Android project that depends on `kotlinx-coroutines-debug` (usually introduced by being a transitive
dependency of `kotlinx-coroutines-test`) may fail with `DuplicateRelativeFileException` for `META-INF/AL2.0`,
`META-INF/LGPL2.1`, or `win32-x86/attach_hotspot_windows.dll` when trying to merge the Android resource.

The problem is that Android merges the resources of all its dependencies into a single directory and complains about
conflicts, but:
* `kotlinx-coroutines-debug` transitively depends on JNA and JNA-platform, both of which include license files in their
  META-INF directories. Trying to merge these files leads to conflicts, which means that any Android project that
  depends on JNA and JNA-platform will experience build failures.
* Additionally, `kotlinx-coroutines-debug` embeds `byte-buddy-agent` and `byte-buddy`, along with their resource files.
  Then, if the project separately depends on `byte-buddy`, merging the resources of `kotlinx-coroutines-debug` with ones
  from `byte-buddy` and `byte-buddy-agent` will lead to conflicts as the resource files are duplicated.

One possible workaround for these issues is to add the following to the `android` block in your gradle file for the
application subproject:
```groovy
     packagingOptions {
         // for JNA and JNA-platform
         exclude "META-INF/AL2.0"
         exclude "META-INF/LGPL2.1"
         // for byte-buddy
         exclude "META-INF/licenses/ASM"
         pickFirst "win32-x86-64/attach_hotspot_windows.dll"
         pickFirst "win32-x86/attach_hotspot_windows.dll"
     }
```
This will cause the resource merge algorithm to exclude the problematic license files altogether and only leave a single
copy of the files needed for `byte-buddy-agent` to work.

Alternatively, avoid depending on `kotlinx-coroutines-debug`. In particular, if the only reason why this library a
dependency of your project is that `kotlinx-coroutines-test` in turn depends on it, you may change your dependency on
`kotlinx.coroutines.test` to exclude `kotlinx-coroutines-debug`. For example, you could replace
```kotlin
androidTestImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:$coroutines_version")
```
with
```groovy
androidTestImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:$coroutines_version") {
    exclude group: "org.jetbrains.kotlinx", module: "kotlinx-coroutines-debug"
}
```
<!---
Snippets of stacktraces for googling:

org.gradle.api.tasks.TaskExecutionException: Execution failed for task ':app:mergeDebugAndroidTestJavaResource'.
        ...
Caused by: org.gradle.workers.intelrnal.DefaultWorkerExecutor$WorkExecutionException: A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade
        ...
Caused by: com.android.builder.merge.DuplicateRelativeFileException: More than one file was found with OS independent path 'META-INF/AL2.0'.
        at com.android.builder.merge.StreamMergeAlgorithms.lambda$acceptOnlyOne$2(StreamMergeAlgorithms.java:85)
        at com.android.builder.merge.StreamMergeAlgorithms.lambda$select$3(StreamMergeAlgorithms.java:106)
        at com.android.builder.merge.IncrementalFileMergerOutputs$1.create(IncrementalFileMergerOutputs.java:88)
        at com.android.builder.merge.DelegateIncrementalFileMergerOutput.create(DelegateIncrementalFileMergerOutput.java:64)
        at com.android.build.gradle.internal.tasks.MergeJavaResourcesDelegate$run$output$1.create(MergeJavaResourcesDelegate.kt:230)
        at com.android.builder.merge.IncrementalFileMerger.updateChangedFile(IncrementalFileMerger.java:242)
        at com.android.builder.merge.IncrementalFileMerger.mergeChangedInputs(IncrementalFileMerger.java:203)
        at com.android.builder.merge.IncrementalFileMerger.merge(IncrementalFileMerger.java:80)
        at com.android.build.gradle.internal.tasks.MergeJavaResourcesDelegate.run(MergeJavaResourcesDelegate.kt:276)
        at com.android.build.gradle.internal.tasks.MergeJavaResRunnable.run(MergeJavaResRunnable.kt:81)
        at com.android.build.gradle.internal.tasks.Workers$ActionFacade.run(Workers.kt:242)
        at org.gradle.workers.internal.AdapterWorkAction.execute(AdapterWorkAction.java:50)
        at org.gradle.workers.internal.DefaultWorkerServer.execute(DefaultWorkerServer.java:50)
        at org.gradle.workers.internal.NoIsolationWorkerFactory$1$1.create(NoIsolationWorkerFactory.java:63)
        at org.gradle.workers.internal.NoIsolationWorkerFactory$1$1.create(NoIsolationWorkerFactory.java:59)
        at org.gradle.internal.classloader.ClassLoaderUtils.executeInClassloader(ClassLoaderUtils.java:98)
        at org.gradle.workers.internal.NoIsolationWorkerFactory$1.lambda$execute$0(NoIsolationWorkerFactory.java:59)
        at org.gradle.workers.internal.AbstractWorker$1.call(AbstractWorker.java:44)
        at org.gradle.workers.internal.AbstractWorker$1.call(AbstractWorker.java:41)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor$CallableBuildOperationWorker.execute(DefaultBuildOperationExecutor.java:416)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor$CallableBuildOperationWorker.execute(DefaultBuildOperationExecutor.java:406)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor$1.execute(DefaultBuildOperationExecutor.java:165)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.execute(DefaultBuildOperationExecutor.java:250)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.execute(DefaultBuildOperationExecutor.java:158)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.call(DefaultBuildOperationExecutor.java:102)
        at org.gradle.internal.operations.DelegatingBuildOperationExecutor.call(DelegatingBuildOperationExecutor.java:36)
        at org.gradle.workers.internal.AbstractWorker.executeWrappedInBuildOperation(AbstractWorker.java:41)
        at org.gradle.workers.internal.NoIsolationWorkerFactory$1.execute(NoIsolationWorkerFactory.java:53)
        at org.gradle.workers.internal.DefaultWorkerExecutor.lambda$submitWork$2(DefaultWorkerExecutor.java:200)
        at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner.runExecution(DefaultConditionalExecutionQueue.java:215)
        at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner.runBatch(DefaultConditionalExecutionQueue.java:164)
        at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner.run(DefaultConditionalExecutionQueue.java:131)

Execution failed for task ':app:mergeStagingDebugAndroidTestJavaResource'.
Execution failed for task ':app:mergeDebugAndroidTestJavaResource'.
Execution failed for task ':app:mergeDebugTestJavaResource'

More than one file was found with OS independent path 'META-INF/LGPL2.1'
More than one file was found with OS independent path 'win32-x86/attach_hotspot_windows.dll'
More than one file was found with OS independent path 'win32-x86-64/attach_hotspot_windows.dll'
-->

[CoroutineScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/index.html
[CoroutinesTimeout]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-debug/kotlinx.coroutines.debug.junit4/-coroutines-timeout/index.html
[DebugProbes.dumpCoroutinesInfo]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-debug/kotlinx.coroutines.debug/-debug-probes/dump-coroutines-info.html
[DebugProbes.dumpCoroutines]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-debug/kotlinx.coroutines.debug/-debug-probes/dump-coroutines.html
[DebugProbes.enableCreationStackTraces]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-debug/kotlinx.coroutines.debug/-debug-probes/enable-creation-stack-traces.html
[DebugProbes.install]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-debug/kotlinx.coroutines.debug/-debug-probes/install.html
[DebugProbes.printJob]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-debug/kotlinx.coroutines.debug/-debug-probes/print-job.html
[DebugProbes.printScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-debug/kotlinx.coroutines.debug/-debug-probes/print-scope.html
[DebugProbes]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-debug/kotlinx.coroutines.debug/-debug-probes/index.html
[Job]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/index.html
[ListenableFuture.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-guava/kotlinx.coroutines.guava/await.html


<a name="🔗16.3."></a>

📜 16.3. Module kotlinx-coroutines-test
==================================================

Test utilities for `kotlinx.coroutines`.

<a name="🔗16.3.1."></a>

16.3.1. Overview
==================================================

This package provides utilities for efficiently testing coroutines.

| Name | Description |
| ---- | ----------- |
| [runTest] | Runs the test code, automatically skipping delays and handling uncaught exceptions. |
| [TestCoroutineScheduler] | The shared source of virtual time, used for controlling execution order and skipping delays. |
| [TestScope] | A [CoroutineScope] that integrates with [runTest], providing access to [TestCoroutineScheduler]. |
| [TestDispatcher] | A [CoroutineDispatcher] whose delays are controlled by a [TestCoroutineScheduler]. |
| [Dispatchers.setMain] | Mocks the main dispatcher using the provided one. If mocked with a [TestDispatcher], its [TestCoroutineScheduler] is used everywhere by default. |

Provided [TestDispatcher] implementations:

| Name | Description |
| ---- | ----------- |
| [StandardTestDispatcher] | A simple dispatcher with no special behavior other than being linked to a [TestCoroutineScheduler]. |
| [UnconfinedTestDispatcher] | A dispatcher that behaves like [Dispatchers.Unconfined]. |

<a name="🔗16.3.2."></a>

16.3.2. Using in your project
==================================================

Add `kotlinx-coroutines-test` to your project test dependencies:
```
dependencies {
    testImplementation 'org.jetbrains.kotlinx:kotlinx-coroutines-test:1.7.3'
}
```

**Do not** depend on this project in your main sources, all utilities here are intended and designed to be used only from tests.

<a name="🔗16.3.3."></a>

16.3.3. Dispatchers.Main Delegation
==================================================

`Dispatchers.setMain` will override the `Main` dispatcher in test scenarios.
This is helpful when one wants to execute a test in situations where the platform `Main` dispatcher is not available,
or to replace `Dispatchers.Main` with a testing dispatcher.

On the JVM,
the [`ServiceLoader`](https://docs.oracle.com/javase/8/docs/api/java/util/ServiceLoader.html) mechanism is responsible
for overwriting [Dispatchers.Main] with a testable implementation, which by default will delegate its calls to the real
`Main` dispatcher, if any.

The `Main` implementation can be overridden using [Dispatchers.setMain][setMain] method with any [CoroutineDispatcher]
implementation, e.g.:

```kotlin

class SomeTest {

    private val mainThreadSurrogate = newSingleThreadContext("UI thread")

    @Before
    fun setUp() {
        Dispatchers.setMain(mainThreadSurrogate)
    }

    @After
    fun tearDown() {
        Dispatchers.resetMain() // reset the main dispatcher to the original Main dispatcher
        mainThreadSurrogate.close()
    }

    @Test
    fun testSomeUI() = runBlocking {
        launch(Dispatchers.Main) {  // Will be launched in the mainThreadSurrogate dispatcher
            // ...
        }
    }
}
```

Calling `setMain` or `resetMain` immediately changes the `Main` dispatcher globally.

If `Main` is overridden with a [TestDispatcher], then its [TestCoroutineScheduler] is used when new [TestDispatcher] or
[TestScope] instances are created without [TestCoroutineScheduler] being passed as an argument.

<a name="🔗16.3.4."></a>

16.3.4. runTest
==================================================

[runTest] is the way to test code that involves coroutines. `suspend` functions can be called inside it.

**IMPORTANT: in order to work with on Kotlin/JS, the result of `runTest` must be immediately `return`-ed from each test.**
The typical invocation of [runTest] thus looks like this:

```kotlin
@Test
fun testFoo() = runTest {
    // code under test
}
```

In more advanced scenarios, it's possible instead to use the following form:
```kotlin
@Test
fun testFoo(): TestResult {
    // initialize some test state
    return runTest {
        // code under test
    }
}
```

[runTest] is similar to running the code with `runBlocking` on Kotlin/JVM and Kotlin/Native, or launching a new promise
on Kotlin/JS. The main differences are the following:

* **The calls to `delay` are automatically skipped**, preserving the relative execution order of the tasks. This way,
  it's possible to make tests finish more-or-less immediately.
* **The execution times out after 10 seconds**, cancelling the test coroutine to prevent tests from hanging forever 
  and eating up the CI resources.
* **Controlling the virtual time**: in case just skipping delays is not sufficient, it's possible to more carefully
  guide the execution, advancing the virtual time by a duration, draining the queue of the awaiting tasks, or running
  the tasks scheduled at the present moment.
* **Handling uncaught exceptions** spawned in the child coroutines by throwing them at the end of the test.
* **Waiting for asynchronous callbacks**.
  Sometimes, especially when working with third-party code, it's impossible to mock all the dispatchers in use.
  [runTest] will handle the situations where some code runs in dispatchers not integrated with the test module.

<a name="🔗16.3.5."></a>

16.3.5. Timeout
==================================================

Test automatically time out after 10 seconds. For example, this test will fail with a timeout exception:

```kotlin
@Test
fun testHanging() = runTest {
    CompletableDeferred<Unit>().await() // will hang forever
}
```

In case the test is expected to take longer than 10 seconds, the timeout can be increased by passing the `timeout`
parameter:

```kotlin
@Test
fun testTakingALongTime() = runTest(timeout = 30.seconds) {
    val result = withContext(Dispatchers.Default) {
        delay(20.seconds) // this delay is not in the test dispatcher and will not be skipped
        3
    }
    assertEquals(3, result)
}
```

<a name="🔗16.3.6."></a>

16.3.6. Delay-skipping
==================================================

To test regular suspend functions, which may have a delay, just run them inside the [runTest] block.

```kotlin
@Test
fun testFoo() = runTest { // a coroutine with an extra test control
    val actual = foo()
    // ...
}

suspend fun foo() {
    delay(1_000) // when run in `runTest`, will finish immediately instead of delaying
    // ...
}
```

<a name="🔗16.3.7."></a>

16.3.7. `launch` and `async`
==================================================

The coroutine dispatcher used for tests is single-threaded, meaning that the child coroutines of the [runTest] block
will run on the thread that started the test, and will never run in parallel.

If several coroutines are waiting to be executed next, the one scheduled after the smallest delay will be chosen.
The virtual time will automatically advance to the point of its resumption.

```kotlin
@Test
fun testWithMultipleDelays() = runTest {
    launch {
        delay(1_000)
        println("1. $currentTime") // 1000
        delay(200)
        println("2. $currentTime") // 1200
        delay(2_000)
        println("4. $currentTime") // 3200
    }
    val deferred = async {
        delay(3_000)
        println("3. $currentTime") // 3000
        delay(500)
        println("5. $currentTime") // 3500
    }
    deferred.await()
}
```

<a name="🔗16.3.8."></a>

16.3.8. Controlling the virtual time
==================================================

Inside [runTest], the execution is scheduled by [TestCoroutineScheduler], which is a virtual time scheduler.
The scheduler has several special methods that allow controlling the virtual time:
* `currentTime` gets the current virtual time.
* `runCurrent()` runs the tasks that are scheduled at this point of virtual time.
* `advanceUntilIdle()` runs all enqueued tasks until there are no more.
* `advanceTimeBy(timeDelta)` runs the enqueued tasks until the current virtual time advances by `timeDelta`.
* `timeSource` returns a `TimeSource` that uses the virtual time.

```kotlin
@Test
fun testFoo() = runTest {
    launch {
        val workDuration = testScheduler.timeSource.measureTime {
            println(1)   // executes during runCurrent()
            delay(1_000) // suspends until time is advanced by at least 1_000
            println(2)   // executes during advanceTimeBy(2_000)
            delay(500)   // suspends until the time is advanced by another 500 ms
            println(3)   // also executes during advanceTimeBy(2_000)
            delay(5_000) // will suspend by another 4_500 ms
            println(4)   // executes during advanceUntilIdle()
        }
        assertEquals(6500.milliseconds, workDuration) // the work took 6_500 ms of virtual time
    }
    // the child coroutine has not run yet
    testScheduler.runCurrent()
    // the child coroutine has called println(1), and is suspended on delay(1_000)
    testScheduler.advanceTimeBy(2.seconds) // progress time, this will cause two calls to `delay` to resume
    // the child coroutine has called println(2) and println(3) and suspends for another 4_500 virtual milliseconds
    testScheduler.advanceUntilIdle() // will run the child coroutine to completion
    assertEquals(6500, currentTime) // the child coroutine finished at virtual time of 6_500 milliseconds
}
```

<a name="🔗16.3.9."></a>

16.3.9. Using multiple test dispatchers
==================================================

The virtual time is controlled by an entity called the [TestCoroutineScheduler], which behaves as the shared source of
virtual time.

Several dispatchers can be created that use the same [TestCoroutineScheduler], in which case they will share their
knowledge of the virtual time.

To access the scheduler used for this test, use the [TestScope.testScheduler] property.

```kotlin
@Test
fun testWithMultipleDispatchers() = runTest {
        val scheduler = testScheduler // the scheduler used for this test
        val dispatcher1 = StandardTestDispatcher(scheduler, name = "IO dispatcher")
        val dispatcher2 = StandardTestDispatcher(scheduler, name = "Background dispatcher")
        launch(dispatcher1) {
            delay(1_000)
            println("1. $currentTime") // 1000
            delay(200)
            println("2. $currentTime") // 1200
            delay(2_000)
            println("4. $currentTime") // 3200
        }
        val deferred = async(dispatcher2) {
            delay(3_000)
            println("3. $currentTime") // 3000
            delay(500)
            println("5. $currentTime") // 3500
        }
        deferred.await()
    }
```

**Note: if [Dispatchers.Main] is replaced by a [TestDispatcher], [runTest] will automatically use its scheduler.
This is done so that there is no need to go through the ceremony of passing the correct scheduler to [runTest].**

<a name="🔗16.3.0."></a>

16.3.0. Accessing the test coroutine scope
==================================================

Structured concurrency ties coroutines to scopes in which they are launched.
[TestScope] is a special coroutine scope designed for testing coroutines, and a new one is automatically created
for [runTest] and used as the receiver for the test body.

However, it can be convenient to access a `CoroutineScope` before the test has started, for example, to perform mocking
of some
parts of the system in `@BeforeTest` via dependency injection.
In these cases, it is possible to manually create [TestScope], the scope for the test coroutines, in advance,
before the test begins.

[TestScope] on its own does not automatically run the code launched in it.
In addition, it is stateful in order to keep track of executing coroutines and uncaught exceptions.
Therefore, it is important to ensure that [TestScope.runTest] is called eventually.

```kotlin
val scope = TestScope()

@BeforeTest
fun setUp() {
    Dispatchers.setMain(StandardTestDispatcher(scope.testScheduler))
    TestSubject.setScope(scope)
}

@AfterTest
fun tearDown() {
    Dispatchers.resetMain()
    TestSubject.resetScope()
}

@Test
fun testSubject() = scope.runTest {
    // the receiver here is `testScope`
}
```

<a name="🔗16.3.11."></a>

16.3.11. Running background work
==================================================

Sometimes, the fact that [runTest] waits for all the coroutines to finish is undesired.
For example, the system under test may need to receive data from coroutines that always run in the background.
Emulating such coroutines by launching them from the test body is not sufficient, because [runTest] will wait for them
to finish, which they never typically do.

For these cases, there is a special coroutine scope: [TestScope.backgroundScope].
Coroutines launched in it will be cancelled at the end of the test.

```kotlin
@Test
fun testExampleBackgroundJob() = runTest {
  val channel = Channel<Int>()
  backgroundScope.launch {
    var i = 0
    while (true) {
      channel.send(i++)
    }
  }
  repeat(100) {
    assertEquals(it, channel.receive())
  }
}
```

<a name="🔗16.3.12."></a>

16.3.12. Eagerly entering `launch` and `async` blocks
==================================================

Some tests only test functionality and don't particularly care about the precise order in which coroutines are
dispatched.
In these cases, it can be cumbersome to always call [runCurrent] or [yield] to observe the effects of the coroutines
after they are launched.

If [runTest] executes with an [UnconfinedTestDispatcher], the child coroutines launched at the top level are entered
*eagerly*, that is, they don't go through a dispatch until the first suspension.

```kotlin
@Test
fun testEagerlyEnteringChildCoroutines() = runTest(UnconfinedTestDispatcher()) {
    var entered = false
    val deferred = CompletableDeferred<Unit>()
    var completed = false
    launch {
        entered = true
        deferred.await()
        completed = true
    }
    assertTrue(entered) // `entered = true` already executed.
    assertFalse(completed) // however, the child coroutine then suspended, so it is enqueued.
    deferred.complete(Unit) // resume the coroutine.
    assertTrue(completed) // now the child coroutine is immediately completed.
}
```

If this behavior is desirable, but some parts of the test still require accurate dispatching, for example, to ensure
that the code executes on the correct thread, then simply `launch` a new coroutine with the [StandardTestDispatcher].

```kotlin
@Test
fun testEagerlyEnteringSomeChildCoroutines() = runTest(UnconfinedTestDispatcher()) {
    var entered1 = false
    launch {
        entered1 = true
    }
    assertTrue(entered1) // `entered1 = true` already executed

    var entered2 = false
    launch(StandardTestDispatcher(testScheduler)) {
        // this block and every coroutine launched inside it will explicitly go through the needed dispatches
        entered2 = true
    }
    assertFalse(entered2)
    runCurrent() // need to explicitly run the dispatched continuation
    assertTrue(entered2)
}
```

<a name="🔗16.3.12.1."></a>

16.3.12.1. Using `withTimeout` inside `runTest`
==================================================

Timeouts are also susceptible to time control, so the code below will immediately finish.

```kotlin
@Test
fun testFooWithTimeout() = runTest {
    assertFailsWith<TimeoutCancellationException> {
        withTimeout(1_000) {
            delay(999)
            delay(2)
            println("this won't be reached")
        }
    }
}
```

<a name="🔗16.3.13."></a>

16.3.13. Virtual time support with other dispatchers
==================================================

Calls to `withContext(Dispatchers.IO)`, `withContext(Dispatchers.Default)` ,and `withContext(Dispatchers.Main)` are
common in coroutines-based code bases. Unfortunately, just executing code in a test will not lead to these dispatchers
using the virtual time source, so delays will not be skipped in them.

```kotlin
suspend fun veryExpensiveFunction() = withContext(Dispatchers.Default) {
    delay(1_000)
    1
}

fun testExpensiveFunction() = runTest {
    val result = veryExpensiveFunction() // will take a whole real-time second to execute
    // the virtual time at this point is still 0
}
```

Tests should, when possible, replace these dispatchers with a [TestDispatcher] if the `withContext` calls `delay` in the
function under test. For example, `veryExpensiveFunction` above should allow mocking with a [TestDispatcher] using
either dependency injection, a service locator, or a default parameter, if it is to be used with virtual time.

<a name="🔗16.3.13.1."></a>

16.3.13.1. Status of the API
==================================================

Many parts of the API is experimental, and it is may change before migrating out of experimental (while it is marked as
[`@ExperimentalCoroutinesApi`][ExperimentalCoroutinesApi]).
Changes during experimental may have deprecation applied when possible, but it is not
advised to use the API in stable code before it leaves experimental due to possible breaking changes.

If you have any suggestions for improvements to this experimental API please share them on the
[issue tracker](https://github.com/Kotlin/kotlinx.coroutines/issues).

[runTest]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/run-test.html
[TestCoroutineScheduler]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/-test-coroutine-scheduler/index.html
[TestScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/-test-scope/index.html
[TestDispatcher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/-test-dispatcher/index.html
[Dispatchers.setMain]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/set-main.html
[StandardTestDispatcher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/-standard-test-dispatcher.html
[UnconfinedTestDispatcher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/-unconfined-test-dispatcher.html
[setMain]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/set-main.html
[TestScope.testScheduler]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/-test-scope/test-scheduler.html
[TestScope.runTest]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/run-test.html
[TestScope.backgroundScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/-test-scope/background-scope.html
[runCurrent]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/run-current.html
[TestCoroutineScope]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/-test-coroutine-scope/index.html


<a name="🔗16.4."></a>

16.4. Coroutines integration
==================================================

This directory contains modules that provide integration with various asynchronous callback- and future-based libraries.
Module names below correspond to the artifact names in Maven/Gradle.

* [kotlinx-coroutines-guava](https://github.com/Kotlin/kotlinx.coroutines/tree/master/integration/kotlinx-coroutines-guava/README.md) -- integration with Guava [ListenableFuture](https://github.com/google/guava/wiki/ListenableFutureExplained).
* [kotlinx-coroutines-slf4j](https://github.com/Kotlin/kotlinx.coroutines/tree/master/integration/kotlinx-coroutines-slf4j/README.md) -- integration with SLF4J [MDC](https://logback.qos.ch/manual/mdc.html).
* [kotlinx-coroutines-play-services](https://github.com/Kotlin/kotlinx.coroutines/tree/master/integration/kotlinx-coroutines-play-services) -- integration with Google Play Services [Tasks API](https://developers.google.com/android/guides/tasks).


<a name="🔗16.4.1."></a>

📜 16.4.1. Module kotlinx-coroutines-guava
==================================================

Integration with Guava [ListenableFuture](https://github.com/google/guava/wiki/ListenableFutureExplained).

Coroutine builders:

| **Name** | **Result** | **Scope**  | **Description**
| -------- | ---------- | ---------- | ---------------
| [future] | [ListenableFuture][com.google.common.util.concurrent.ListenableFuture] | [CoroutineScope] | Returns a single value with the future result 

Extension functions:

| **Name** | **Description**
| -------- | ---------------
| [ListenableFuture.await][com.google.common.util.concurrent.ListenableFuture.await] | Awaits for completion of the future (cancellable)
| [Deferred.asListenableFuture][kotlinx.coroutines.Deferred.asListenableFuture] | Converts a deferred value to the future

<a name="🔗16.4.1.1."></a>

16.4.1.1. Example
==================================================

Given the following functions defined in some Java API based on Guava:

```java
public ListenableFuture<Image> loadImageAsync(String name); // starts async image loading
public Image combineImages(Image image1, Image image2); // synchronously combines two images using some algorithm
```

We can consume this API from Kotlin coroutine to load two images and combine then asynchronously. 
The resulting function returns `ListenableFuture<Image>` for ease of use back from Guava-based Java code. 

```kotlin
fun combineImagesAsync(name1: String, name2: String): ListenableFuture<Image> = future {
    val future1 = loadImageAsync(name1) // start loading first image
    val future2 = loadImageAsync(name2) // start loading second image
    combineImages(future1.await(), future2.await()) // wait for both, combine, and return result
}
```

Note that this module should be used only for integration with existing Java APIs based on `ListenableFuture`. 
Writing pure-Kotlin code that uses `ListenableFuture` is highly not recommended, since the resulting APIs based
on the futures are quite error-prone. See the discussion on 
[Asynchronous Programming Styles](https://github.com/Kotlin/kotlin-coroutines/blob/master/kotlin-coroutines-informal.md#asynchronous-programming-styles)
for details on general problems pertaining to any future-based API and keep in mind that `ListenableFuture` exposes
a _blocking_ method 
[get](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html#get--) 
that makes it especially bad choice for coroutine-based Kotlin code.

<a name="🔗16.4.1.2."></a>

16.4.1.2. Package kotlinx.coroutines.future
==================================================

Integration with Guava [ListenableFuture](https://github.com/google/guava/wiki/ListenableFutureExplained).

[future]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-guava/kotlinx.coroutines.guava/future.html
[com.google.common.util.concurrent.ListenableFuture.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-guava/kotlinx.coroutines.guava/await.html
[kotlinx.coroutines.Deferred.asListenableFuture]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-guava/kotlinx.coroutines.guava/as-listenable-future.html
[com.google.common.util.concurrent.ListenableFuture]: https://kotlinlang.org/api/kotlinx.coroutines/https://google.github.io/guava/releases/31.0.1-jre/api/docs/com/google/common/util/concurrent/ListenableFuture.html

<a name="🔗16.4.2."></a>

📜 16.4.2. Module kotlinx-coroutines-slf4j
==================================================

Integration with SLF4J [MDC](https://logback.qos.ch/manual/mdc.html).

<a name="🔗16.4.2.1."></a>

16.4.2.1. Example
==================================================

Add [MDCContext] to the coroutine context so that the SLF4J MDC context is captured and passed into the coroutine.

```kotlin
MDC.put("kotlin", "rocks") // put a value into the MDC context

launch(MDCContext()) {
   logger.info { "..." }   // the MDC context will contain the mapping here
}
```

<a name="🔗16.4.2.2."></a>

16.4.2.2. Package kotlinx.coroutines.slf4j
==================================================

Integration with SLF4J [MDC](https://logback.qos.ch/manual/mdc.html).

[MDCContext]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-slf4j/kotlinx.coroutines.slf4j/-m-d-c-context/index.html


<a name="🔗16.4.3."></a>

📜 16.4.3. Module kotlinx-coroutines-play-services
==================================================

Integration with Google Play Services [Tasks API](https://developers.google.com/android/guides/tasks).

Extension functions:

| **Name** | **Description**
| -------- | ---------------
| [Task.asDeferred][asDeferred] | Converts a Task into a Deferred
| [Task.await][await] | Awaits for completion of the Task (cancellable)
| [Deferred.asTask][asTask] | Converts a deferred value to a Task

<a name="🔗16.4.3.1."></a>

16.4.3.1. Example
==================================================

Using Firebase APIs becomes simple:

```kotlin
FirebaseAuth.getInstance().signInAnonymously().await()
val snapshot = try {
    FirebaseFirestore.getInstance().document("users/$id").get().await() // Cancellable await
} catch (e: FirebaseFirestoreException) {
    // Handle exception
    return@async
}

// Do stuff
```

If the `Task` supports cancellation via passing a `CancellationToken`, pass the corresponding `CancellationTokenSource` to `asDeferred` or `await` to support bi-directional cancellation:

```kotlin
val cancellationTokenSource = CancellationTokenSource()
val currentLocationTask = fusedLocationProviderClient.getCurrentLocation(PRIORITY_HIGH_ACCURACY, cancellationTokenSource.token)
val currentLocation = currentLocationTask.await(cancellationTokenSource) // cancelling `await` also cancels `currentLocationTask`, and vice versa
```

[asDeferred]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-play-services/kotlinx.coroutines.tasks/as-deferred.html
[await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-play-services/kotlinx.coroutines.tasks/await.html
[asTask]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-play-services/kotlinx.coroutines.tasks/as-task.html
[Task.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-play-services/kotlinx.coroutines.tasks/await.html

<a name="🔗16.5."></a>

16.5. Coroutines for reactive streams
==================================================

This directory contains modules with utilities for various reactive stream libraries.
Module name below corresponds to the artifact name in Maven/Gradle.

* [kotlinx-coroutines-reactive](kotlinx-coroutines-reactive/README.md) -- utilities for [Reactive Streams](https://www.reactive-streams.org)
* [kotlinx-coroutines-reactor](kotlinx-coroutines-reactor/README.md) -- utilities for [Reactor](https://projectreactor.io)
* [kotlinx-coroutines-rx2](kotlinx-coroutines-rx2/README.md) -- utilities for [RxJava 2.x](https://github.com/ReactiveX/RxJava)
* [kotlinx-coroutines-rx3](kotlinx-coroutines-rx3/README.md) -- utilities for [RxJava 3.x](https://github.com/ReactiveX/RxJava)

<a name="🔗16.5.1."></a>

📜 16.5.1. Module kotlinx-coroutines-reactive
==================================================

Utilities for [Reactive Streams](https://www.reactive-streams.org).

Coroutine builders:

| **Name**        | **Result**                    | **Scope**        | **Description**
| --------------- | ----------------------------- | ---------------- | ---------------
| [kotlinx.coroutines.reactive.publish]       | `Publisher`                   | [ProducerScope] | Cold reactive publisher that starts the coroutine on subscribe

Integration with [Flow]:

| **Name**            | **Result**        | **Description**
| ---------------     | --------------    | ---------------
| [Publisher.asFlow]  | `Flow`            | Converts the given publisher to a flow
| [Flow.asPublisher]  | `Publisher`       | Converts the given flow to a TCK-compliant publisher

If these adapters are used along with `kotlinx-coroutines-reactor` in the classpath, then Reactor's `Context` is properly
propagated as coroutine context element (`ReactorContext`) and vice versa.

Suspending extension functions and suspending iteration:

| **Name** | **Description**
| -------- | ---------------
| [Publisher.awaitFirst][org.reactivestreams.Publisher.awaitFirst] | Returns the first value from the given publisher
| [Publisher.awaitFirstOrDefault][org.reactivestreams.Publisher.awaitFirstOrDefault] | Returns the first value from the given publisher or default
| [Publisher.awaitFirstOrElse][org.reactivestreams.Publisher.awaitFirstOrElse] | Returns the first value from the given publisher or default from a function
| [Publisher.awaitFirstOrNull][org.reactivestreams.Publisher.awaitFirstOrNull] | Returns the first value from the given publisher or null
| [Publisher.awaitLast][org.reactivestreams.Publisher.awaitFirst] | Returns the last value from the given publisher
| [Publisher.awaitSingle][org.reactivestreams.Publisher.awaitSingle] | Returns the single value from the given publisher

<a name="🔗16.5.1.1."></a>

16.5.1.1. Package kotlinx.coroutines.reactive
==================================================

Utilities for [Reactive Streams](https://www.reactive-streams.org).


[kotlinx.coroutines.reactive.publish]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/publish.html
[Publisher.asFlow]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/as-flow.html
[Publisher.awaitSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/await-single.html
[Publisher.collect]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/collect.html
[Flow.asPublisher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/as-publisher.html
[org.reactivestreams.Publisher.awaitFirst]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/await-first.html
[org.reactivestreams.Publisher.awaitFirstOrDefault]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/await-first-or-default.html
[org.reactivestreams.Publisher.awaitFirstOrElse]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/await-first-or-else.html
[org.reactivestreams.Publisher.awaitFirstOrNull]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/await-first-or-null.html
[org.reactivestreams.Publisher.awaitSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactive/kotlinx.coroutines.reactive/await-single.html


<a name="🔗16.5.2."></a>

📜 16.5.2. Module kotlinx-coroutines-reactor
==================================================

Utilities for [Reactor](https://projectreactor.io).

Coroutine builders:

| **Name**        | **Result**  | **Scope**        | **Description**
| --------------- | ------------| ---------------- | ---------------
| [mono]          | `Mono`      | [CoroutineScope] | A cold Mono that starts the coroutine on subscription
| [flux]          | `Flux`      | [CoroutineScope] | A cold Flux that starts the coroutine on subscription

Note that `Mono` and `Flux` are subclasses of [Reactive Streams](https://www.reactive-streams.org)'
`Publisher` and extensions for it are covered by the
[kotlinx-coroutines-reactive](../kotlinx-coroutines-reactive) module.

Integration with [Flow]:

| **Name**        | **Result**     | **Description**
| --------------- | -------------- | ---------------
| [Flow.asFlux]   | `Flux`         | Converts the given flow to a TCK-compliant Flux.

This adapter is integrated with Reactor's `Context` and coroutines' [ReactorContext].

Conversion functions:

| **Name** | **Description**
| -------- | ---------------
| [Job.asMono][kotlinx.coroutines.Job.asMono] | Converts a job to a hot Mono
| [Deferred.asMono][kotlinx.coroutines.Deferred.asMono] | Converts a deferred value to a hot Mono
| [Scheduler.asCoroutineDispatcher][reactor.core.scheduler.Scheduler.asCoroutineDispatcher] | Converts a scheduler to a [CoroutineDispatcher]


<a name="🔗16.5.2.1."></a>

16.5.2.1. Package kotlinx.coroutines.reactor
==================================================

Utilities for [Reactor](https://projectreactor.io).


[mono]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactor/kotlinx.coroutines.reactor/mono.html
[flux]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactor/kotlinx.coroutines.reactor/flux.html
[Flow.asFlux]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactor/kotlinx.coroutines.reactor/as-flux.html
[ReactorContext]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactor/kotlinx.coroutines.reactor/-reactor-context/index.html
[kotlinx.coroutines.Job.asMono]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactor/kotlinx.coroutines.reactor/as-mono.html
[kotlinx.coroutines.Deferred.asMono]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactor/kotlinx.coroutines.reactor/as-mono.html
[reactor.core.scheduler.Scheduler.asCoroutineDispatcher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-reactor/kotlinx.coroutines.reactor/as-coroutine-dispatcher.html


<a name="🔗16.6.3."></a>

📜 16.6.3. Module kotlinx-coroutines-rx2
==================================================

Utilities for [RxJava 2.x](https://github.com/ReactiveX/RxJava).

Coroutine builders:

| **Name**        | **Result**                              | **Scope**        | **Description**
| --------------- | --------------------------------------- | ---------------- | ---------------
| [rxCompletable] | `Completable`                           | [CoroutineScope] | Cold completable that starts coroutine on subscribe
| [rxMaybe]       | `Maybe`                                 | [CoroutineScope] | Cold maybe that starts coroutine on subscribe
| [rxSingle]      | `Single`                                | [CoroutineScope] | Cold single that starts coroutine on subscribe
| [rxObservable]  | `Observable`                            | [ProducerScope]  | Cold observable that starts coroutine on subscribe
| [rxFlowable]    | `Flowable`                              | [ProducerScope]  | Cold observable that starts coroutine on subscribe with **backpressure** support 

Integration with [Flow]:

| **Name**                   | **Result**      | **Description**
| ---------------            | --------------  | ---------------
| [Flow.asFlowable]          | `Flowable`      | Converts the given flow to a cold Flowable.
| [Flow.asObservable]        | `Observable`    | Converts the given flow to a cold Observable.
| [ObservableSource.asFlow]  | `Flow`          | Converts the given cold ObservableSource to flow

Suspending extension functions and suspending iteration:

| **Name** | **Description**
| -------- | ---------------
| [CompletableSource.await][io.reactivex.CompletableSource.await] | Awaits for completion of the completable value 
| [MaybeSource.awaitSingle][io.reactivex.MaybeSource.awaitSingle] | Awaits for the value of the maybe and returns it or throws an exception
| [MaybeSource.awaitSingleOrNull][io.reactivex.MaybeSource.awaitSingleOrNull] | Awaits for the value of the maybe and returns it or null 
| [SingleSource.await][io.reactivex.SingleSource.await] | Awaits for completion of the single value and returns it 
| [ObservableSource.awaitFirst][io.reactivex.ObservableSource.awaitFirst] | Awaits for the first value from the given observable
| [ObservableSource.awaitFirstOrDefault][io.reactivex.ObservableSource.awaitFirstOrDefault] | Awaits for the first value from the given observable or default
| [ObservableSource.awaitFirstOrElse][io.reactivex.ObservableSource.awaitFirstOrElse] | Awaits for the first value from the given observable or default from a function
| [ObservableSource.awaitFirstOrNull][io.reactivex.ObservableSource.awaitFirstOrNull] | Awaits for the first value from the given observable or null
| [ObservableSource.awaitLast][io.reactivex.ObservableSource.awaitFirst] | Awaits for the last value from the given observable
| [ObservableSource.awaitSingle][io.reactivex.ObservableSource.awaitSingle] | Awaits for the single value from the given observable

Note that `Flowable` is a subclass of [Reactive Streams](https://www.reactive-streams.org)
`Publisher` and extensions for it are covered by
[kotlinx-coroutines-reactive](../kotlinx-coroutines-reactive) module.

Conversion functions:

| **Name** | **Description**
| -------- | ---------------
| [Job.asCompletable][kotlinx.coroutines.Job.asCompletable] | Converts job to hot completable
| [Deferred.asSingle][kotlinx.coroutines.Deferred.asSingle] | Converts deferred value to hot single
| [Scheduler.asCoroutineDispatcher][io.reactivex.Scheduler.asCoroutineDispatcher] | Converts scheduler to [CoroutineDispatcher]

<a name="🔗16.6.3.1."></a>

16.6.3.1. Package kotlinx.coroutines.rx2
==================================================

Utilities for [RxJava 2.x](https://github.com/ReactiveX/RxJava).


[rxCompletable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/rx-completable.html
[rxMaybe]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/rx-maybe.html
[rxSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/rx-single.html
[rxObservable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/rx-observable.html
[rxFlowable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/rx-flowable.html
[Flow.asFlowable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/as-flowable.html
[Flow.asObservable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/as-observable.html
[ObservableSource.asFlow]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/as-flow.html
[io.reactivex.CompletableSource.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/await.html
[io.reactivex.MaybeSource.awaitSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/await-single.html
[io.reactivex.MaybeSource.awaitSingleOrNull]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/await-single-or-null.html
[io.reactivex.SingleSource.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/await.html
[io.reactivex.ObservableSource.awaitFirst]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/await-first.html
[io.reactivex.ObservableSource.awaitFirstOrDefault]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/await-first-or-default.html
[io.reactivex.ObservableSource.awaitFirstOrElse]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/await-first-or-else.html
[io.reactivex.ObservableSource.awaitFirstOrNull]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/await-first-or-null.html
[io.reactivex.ObservableSource.awaitSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/await-single.html
[kotlinx.coroutines.Job.asCompletable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/as-completable.html
[kotlinx.coroutines.Deferred.asSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/as-single.html
[io.reactivex.Scheduler.asCoroutineDispatcher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx2/kotlinx.coroutines.rx2/as-coroutine-dispatcher.html


<a name="🔗16.6.4."></a>

📜 16.6.4. Module kotlinx-coroutines-rx3
==================================================

Utilities for [RxJava 3.x](https://github.com/ReactiveX/RxJava).

Coroutine builders:

| **Name**        | **Result**                              | **Scope**        | **Description**
| --------------- | --------------------------------------- | ---------------- | ---------------
| [rxCompletable] | `Completable`                           | [CoroutineScope] | Cold completable that starts coroutine on subscribe
| [rxMaybe]       | `Maybe`                                 | [CoroutineScope] | Cold maybe that starts coroutine on subscribe
| [rxSingle]      | `Single`                                | [CoroutineScope] | Cold single that starts coroutine on subscribe
| [rxObservable]  | `Observable`                            | [ProducerScope]  | Cold observable that starts coroutine on subscribe
| [rxFlowable]    | `Flowable`                              | [ProducerScope]  | Cold observable that starts coroutine on subscribe with **backpressure** support 

Integration with [Flow]:

| **Name**                   | **Result**      | **Description**
| ---------------            | --------------  | ---------------
| [Flow.asFlowable]          | `Flowable`      | Converts the given flow to a cold Flowable.
| [Flow.asObservable]        | `Observable`    | Converts the given flow to a cold Observable.
| [ObservableSource.asFlow]  | `Flow`          | Converts the given cold ObservableSource to flow

Suspending extension functions and suspending iteration:

| **Name** | **Description**
| -------- | ---------------
| [CompletableSource.await][io.reactivex.rxjava3.core.CompletableSource.await] | Awaits for completion of the completable value 
| [MaybeSource.awaitSingle][io.reactivex.rxjava3.core.MaybeSource.awaitSingle] | Awaits for the value of the maybe and returns it or throws an exception
| [MaybeSource.awaitSingleOrNull][io.reactivex.rxjava3.core.MaybeSource.awaitSingleOrNull] | Awaits for the value of the maybe and returns it or null 
| [SingleSource.await][io.reactivex.rxjava3.core.SingleSource.await] | Awaits for completion of the single value and returns it 
| [ObservableSource.awaitFirst][io.reactivex.rxjava3.core.ObservableSource.awaitFirst] | Awaits for the first value from the given observable
| [ObservableSource.awaitFirstOrDefault][io.reactivex.rxjava3.core.ObservableSource.awaitFirstOrDefault] | Awaits for the first value from the given observable or default
| [ObservableSource.awaitFirstOrElse][io.reactivex.rxjava3.core.ObservableSource.awaitFirstOrElse] | Awaits for the first value from the given observable or default from a function
| [ObservableSource.awaitFirstOrNull][io.reactivex.rxjava3.core.ObservableSource.awaitFirstOrNull] | Awaits for the first value from the given observable or null
| [ObservableSource.awaitLast][io.reactivex.rxjava3.core.ObservableSource.awaitFirst] | Awaits for the last value from the given observable
| [ObservableSource.awaitSingle][io.reactivex.rxjava3.core.ObservableSource.awaitSingle] | Awaits for the single value from the given observable

Note that `Flowable` is a subclass of [Reactive Streams](https://www.reactive-streams.org)
`Publisher` and extensions for it are covered by
[kotlinx-coroutines-reactive](../kotlinx-coroutines-reactive) module.

Conversion functions:

| **Name** | **Description**
| -------- | ---------------
| [Job.asCompletable][kotlinx.coroutines.Job.asCompletable] | Converts job to hot completable
| [Deferred.asSingle][kotlinx.coroutines.Deferred.asSingle] | Converts deferred value to hot single
| [Scheduler.asCoroutineDispatcher][io.reactivex.rxjava3.core.Scheduler.asCoroutineDispatcher] | Converts scheduler to [CoroutineDispatcher]

<a name="🔗16.6.4.1."></a>

16.6.4.1. Package kotlinx.coroutines.rx3
==================================================

Utilities for [RxJava 3.x](https://github.com/ReactiveX/RxJava).


[rxCompletable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/rx-completable.html
[rxMaybe]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/rx-maybe.html
[rxSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/rx-single.html
[rxObservable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/rx-observable.html
[rxFlowable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/rx-flowable.html
[Flow.asFlowable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/as-flowable.html
[Flow.asObservable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/as-observable.html
[ObservableSource.asFlow]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/as-flow.html
[io.reactivex.rxjava3.core.CompletableSource.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/await.html
[io.reactivex.rxjava3.core.MaybeSource.awaitSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/await-single.html
[io.reactivex.rxjava3.core.MaybeSource.awaitSingleOrNull]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/await-single-or-null.html
[io.reactivex.rxjava3.core.SingleSource.await]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/await.html
[io.reactivex.rxjava3.core.ObservableSource.awaitFirst]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/await-first.html
[io.reactivex.rxjava3.core.ObservableSource.awaitFirstOrDefault]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/await-first-or-default.html
[io.reactivex.rxjava3.core.ObservableSource.awaitFirstOrElse]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/await-first-or-else.html
[io.reactivex.rxjava3.core.ObservableSource.awaitFirstOrNull]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/await-first-or-null.html
[io.reactivex.rxjava3.core.ObservableSource.awaitSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/await-single.html
[kotlinx.coroutines.Job.asCompletable]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/as-completable.html
[kotlinx.coroutines.Deferred.asSingle]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/as-single.html
[io.reactivex.rxjava3.core.Scheduler.asCoroutineDispatcher]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-rx3/kotlinx.coroutines.rx3/as-coroutine-dispatcher.html

<a name="🔗16.6."></a>

16.6. Coroutines for UI
==================================================

This directory contains modules for coroutine programming with various single-threaded UI libraries.
After adding dependency to the UI library, corresponding UI dispatcher will be available via `Dispatchers.Main`.
Module name below corresponds to the artifact name in Maven/Gradle.

Modules

* [kotlinx-coroutines-android](https://github.com/Kotlin/kotlinx.coroutines/tree/master/ui/kotlinx-coroutines-android/README.md) -- `Dispatchers.Main` context for Android applications.
* [kotlinx-coroutines-javafx](https://github.com/Kotlin/kotlinx.coroutines/tree/master/ui/kotlinx-coroutines-javafx/README.md) -- `Dispatchers.JavaFx` context for JavaFX UI applications.
* [kotlinx-coroutines-swing](https://github.com/Kotlin/kotlinx.coroutines/tree/master/ui/kotlinx-coroutines-swing/README.md) -- `Dispatchers.Swing` context for Swing UI applications.

<a name="🔗16.6.0."></a>

📜 16.6.0. Guide to UI programming with coroutines
==================================================

This guide assumes familiarity with basic coroutine concepts that are 
covered in [Guide to kotlinx.coroutines](../docs/topics/coroutines-guide.md) and gives specific 
examples on how to use coroutines in UI applications. 

All UI application libraries have one thing in common. They have the single main thread where all state of the UI 
is confined, and all updates to the UI has to happen in this particular thread. With respect to coroutines, 
it means that you need an appropriate _coroutine dispatcher context_ that confines the coroutine 
execution to this main UI thread. 

In particular, `kotlinx.coroutines` has three modules that provide coroutine context for 
different UI application libraries:
 
* [kotlinx-coroutines-android](🔗16.6.1.) -- `Dispatchers.Main` context for Android applications.
* [kotlinx-coroutines-javafx](🔗16.6.2.) -- `Dispatchers.JavaFx` context for JavaFX UI applications.
* [kotlinx-coroutines-swing](🔗16.6.3.) -- `Dispatchers.Swing` context for Swing UI applications.

Also, UI dispatcher is available via `Dispatchers.Main` from `kotlinx-coroutines-core` and corresponding 
implementation (Android, JavaFx or Swing) is discovered by [`ServiceLoader`](https://docs.oracle.com/javase/8/docs/api/java/util/ServiceLoader.html) API.
For example, if you are writing JavaFx application, you can use either `Dispatchers.Main` or `Dispachers.JavaFx` extension, it will be the same object.

This guide covers all UI libraries simultaneously, because each of these modules consists of just one
object definition that is a couple of pages long. You can use any of them as an example to write the corresponding
context object for your favourite UI library, even if it is not included out of the box here.

<a name="🔗16.6.0.1."></a>

16.6.0.1. Table of contents
==================================================


* [Setup](🔗16.6.0.2.)
  * [JavaFx](🔗16.6.0.2.1.)
  * [Android](🔗16.6.0.2.2.)
* [Basic UI coroutines](🔗16.6.0.3.)
  * [Launch UI coroutine](🔗16.6.0.3.1.)
  * [Cancel UI coroutine](🔗16.6.0.3.2.)
* [Using actors within UI context](🔗16.6.0.4.)
  * [Extensions for coroutines](🔗16.6.0.4.1.)
  * [At most one concurrent job](🔗16.6.0.4.2.)
  * [Event conflation](🔗16.6.0.4.3.)
* [Blocking operations](🔗16.6.0.5.)
  * [The problem of UI freezes](🔗16.6.0.5.1.)
  * [Structured concurrency, lifecycle and coroutine parent-child hierarchy](🔗16.6.0.5.2.)
  * [Blocking operations](🔗16.6.0.5.3.)
* [Advanced topics](🔗16.6.0.6.)
  * [Starting coroutine in UI event handlers without dispatch](🔗16.6.0.6.1.)

<a name="🔗16.6.0.2."></a>

16.6.0.2. Setup
==================================================


The runnable examples in this guide are presented for JavaFx. The advantage is that all the examples can 
be directly started on any OS without the need for emulators or anything like that and they are fully self-contained
(each example is in one file). 
There are separate notes on what changes need to be made (if any) to reproduce them on Android. 

<a name="🔗16.6.0.2.1."></a>

16.6.0.2.1. JavaFx
==================================================


The basic example application for JavaFx consists of a window with a text label named `hello` that initially
contains "Hello World!" string and a pinkish circle in the bottom-right corner named `fab` (floating action button).

![UI example for JavaFx](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/ui-example-javafx.png)

The `start` function of JavaFX application invokes `setup` function, passing it reference to `hello` and `fab`
nodes. That is where various code is placed in the rest of this guide:

```kotlin
fun setup(hello: Text, fab: Circle) {
    // placeholder
}
```

> You can get the full code [here](kotlinx-coroutines-javafx/test/guide/example-ui-basic-01.kt).

You can clone [kotlinx.coroutines](https://github.com/Kotlin/kotlinx.coroutines) project from GitHub onto your 
workstation and open the project in IDE. All the examples from this guide are in the test folder of 
[`ui/kotlinx-coroutines-javafx`](kotlinx-coroutines-javafx) module. 
This way you'll be able to run and see how each example works and to 
experiment with them by making changes.

<a name="🔗16.6.0.2.2."></a>

16.6.0.2.2. Android
==================================================


Follow the guide on [Getting Started With Android and Kotlin](https://kotlinlang.org/docs/tutorials/kotlin-android.html)
to create Kotlin project in Android Studio. You are also encouraged to add 
[Kotlin Android Extensions](https://kotlinlang.org/docs/tutorials/android-plugin.html)
to your application.

In Android Studio 2.3 you'll get an application that looks similarly to the one shown below:

![UI example for Android](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/ui-example-android.png)

Go to the `context_main.xml` of your application and assign an ID of "hello" to the text view with "Hello World!" string,
so that it is available in your application as `hello` with Kotlin Android extensions. The pinkish floating
action button is already named `fab` in the project template that gets created.

In the `MainActivity.kt` of your application remove the block `fab.setOnClickListener { ... }` and instead
add `setup(hello, fab)` invocation as the last line of `onCreate` function.
Create a placeholder `setup` function at the end of the file. 
That is where various code is placed in the rest of this guide:

```kotlin
fun setup(hello: TextView, fab: FloatingActionButton) {
    // placeholder
}
```

Add dependencies on `kotlinx-coroutines-android` module to the `dependencies { ... }` section of
`app/build.gradle` file:

```groovy
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3"
```

You can clone [kotlinx.coroutines](https://github.com/Kotlin/kotlinx.coroutines) project from GitHub onto your 
workstation. The resulting template project for Android resides in 
[`ui/kotlinx-coroutines-android/example-app`](kotlinx-coroutines-android/example-app) directory. 
You can load it in Android Studio to follow this guide on Android.

<a name="🔗16.6.0.3."></a>

16.6.0.3. Basic UI coroutines
==================================================


This section shows basic usage of coroutines in UI applications.

<a name="🔗16.6.0.3.1."></a>

16.6.0.3.1. Launch UI coroutine
==================================================


The `kotlinx-coroutines-javafx` module contains 
[Dispatchers.JavaFx][kotlinx.coroutines.Dispatchers.JavaFx] 
dispatcher that dispatches coroutine execution to
the JavaFx application thread. We import it as `Main` to make all the presented examples 
easily portable to Android:
 
```kotlin
import kotlinx.coroutines.javafx.JavaFx as Main
```

Coroutines confined to the main UI thread can freely update anything in UI and suspend without blocking the main thread.
For example, we can perform animations by coding them in imperative style. The following code updates the
text with a 10 to 1 countdown twice a second, using [launch] coroutine builder:

```kotlin
fun setup(hello: Text, fab: Circle) {
    GlobalScope.launch(Dispatchers.Main) { // launch coroutine in the main thread
        for (i in 10 downTo 1) { // countdown from 10 to 1 
            hello.text = "Countdown $i ..." // update text
            delay(500) // wait half a second
        }
        hello.text = "Done!"
    }
}
```

> You can get the full code [here](kotlinx-coroutines-javafx/test/guide/example-ui-basic-02.kt).

So, what happens here? Because we are launching coroutine in the main UI context, we can freely update UI from 
inside this coroutine and invoke _suspending functions_ like [delay] at the same time. UI is not frozen
while `delay` waits, because it does not block the UI thread -- it just suspends the coroutine.

> The corresponding code for Android application is the same. 
  You just need to copy the body of `setup` function into the corresponding function of Android project. 

  <a name="🔗16.6.0.3.2."></a>

16.6.0.3.2. Cancel UI coroutine
==================================================


We can keep a reference to the [Job] object that `launch` function returns and use it to cancel
coroutine when we want to stop it. Let us cancel the coroutine when pinkish circle is clicked:

```kotlin
fun setup(hello: Text, fab: Circle) {
    val job = GlobalScope.launch(Dispatchers.Main) { // launch coroutine in the main thread
        for (i in 10 downTo 1) { // countdown from 10 to 1 
            hello.text = "Countdown $i ..." // update text
            delay(500) // wait half a second
        }
        hello.text = "Done!"
    }
    fab.onMouseClicked = EventHandler { job.cancel() } // cancel coroutine on click
}
```

> You can get the full code [here](kotlinx-coroutines-javafx/test/guide/example-ui-basic-03.kt).

Now, if the circle is clicked while countdown is still running, the countdown stops. 
Note that [Job.cancel] is completely thread-safe and non-blocking. It just signals the coroutine to cancel 
its job, without waiting for it to actually terminate. It can be invoked from anywhere.
Invoking it on a coroutine that was already cancelled or has completed does nothing. 

> The corresponding line for Android is shown below: 

```kotlin
fab.setOnClickListener { job.cancel() }  // cancel coroutine on click
```

<a name="🔗16.6.0.4."></a>

16.6.0.4. Using actors within UI context
==================================================


In this section we show how UI applications can use actors within their UI context make sure that 
there is no unbounded growth in the number of launched coroutines.

<a name="🔗16.6.0.4.1."></a>

16.6.0.4.1. Extensions for coroutines
==================================================


Our goal is to write an extension _coroutine builder_ function named `onClick`, 
so that we can perform countdown animation every time when the circle is clicked with this simple code:

```kotlin
fun setup(hello: Text, fab: Circle) {
    fab.onClick { // start coroutine when the circle is clicked
        for (i in 10 downTo 1) { // countdown from 10 to 1 
            hello.text = "Countdown $i ..." // update text
            delay(500) // wait half a second
        }
        hello.text = "Done!"
    }
}
```

Our first implementation for `onClick` just launches a new coroutine on each mouse event and
passes the corresponding mouse event into the supplied action (just in case we need it):

```kotlin
fun Node.onClick(action: suspend (MouseEvent) -> Unit) {
    onMouseClicked = EventHandler { event ->
        GlobalScope.launch(Dispatchers.Main) { 
            action(event)
        }
    }
}
```  

> You can get the full code [here](kotlinx-coroutines-javafx/test/guide/example-ui-actor-01.kt).

Note that each time the circle is clicked, it starts a new coroutine and they all compete to 
update the text. Try it. It does not look very good. We'll fix it later.

> On Android, the corresponding extension can be written for `View` class, so that the code
  in `setup` function that is shown above can be used without changes. There is no `MouseEvent`
  used in OnClickListener on Android, so it is omitted.

```kotlin
fun View.onClick(action: suspend () -> Unit) {
    setOnClickListener { 
        GlobalScope.launch(Dispatchers.Main) {
            action()
        }
    }
}
```

<a name="🔗16.6.0.4.2."></a>

16.6.0.4.2. At most one concurrent job
==================================================


We can cancel an active job before starting a new one to ensure that at most one coroutine is animating 
the countdown. However, it is generally not the best idea. The [cancel][Job.cancel] function serves only as a signal
to abort a coroutine. Cancellation is cooperative and a coroutine may, at the moment, be doing something non-cancellable
or otherwise ignore a cancellation signal. A better solution is to use an [actor] for tasks that should
not be performed concurrently. Let us change `onClick` extension implementation:
  
```kotlin
fun Node.onClick(action: suspend (MouseEvent) -> Unit) {
    // launch one actor to handle all events on this node
    val eventActor = GlobalScope.actor<MouseEvent>(Dispatchers.Main) {
        for (event in channel) action(event) // pass event to action
    }
    // install a listener to offer events to this actor
    onMouseClicked = EventHandler { event ->
        eventActor.trySend(event)
    }
}
```  

> You can get the full code [here](kotlinx-coroutines-javafx/test/guide/example-ui-actor-02.kt).
  
The key idea that underlies an integration of an actor coroutine and a regular event handler is that 
there is an [trySend][SendChannel.trySend] function on [SendChannel] that does not wait. It sends an element to the actor immediately,
if it is possible, or discards an element otherwise. A `trySend` actually returns a `ChanneResult` instance which we ignore here.

Try clicking repeatedly on a circle in this version of the code. The clicks are just ignored while the countdown 
animation is running. This happens because the actor is busy with an animation and does not receive from its channel.
By default, an actor's mailbox is backed by `RendezvousChannel`, whose `trySend` operation succeeds only when 
the `receive` is active. 

> On Android, there is `View` sent in OnClickListener, so we send the `View` to the actor as a signal. 
  The corresponding extension for `View` class looks like this:

```kotlin
fun View.onClick(action: suspend (View) -> Unit) {
    // launch one actor
    val eventActor = GlobalScope.actor<View>(Dispatchers.Main) {
        for (event in channel) action(event)
    }
    // install a listener to activate this actor
    setOnClickListener { 
        eventActor.trySend(it)
    }
}
```


<a name="🔗16.6.0.4.3."></a>

16.6.0.4.3. Event conflation
==================================================

 
Sometimes it is more appropriate to process the most recent event, instead of just ignoring events while we were busy
processing the previous one.  The [actor] coroutine builder accepts an optional `capacity` parameter that 
controls the implementation of the channel that this actor is using for its mailbox. The description of all 
the available choices is given in documentation of the [`Channel()`][Channel] factory function.

Let us change the code to use a conflated channel by passing [Channel.CONFLATED][Channel.Factory.CONFLATED] capacity value. The 
change is only to the line that creates an actor:

```kotlin
fun Node.onClick(action: suspend (MouseEvent) -> Unit) {
    // launch one actor to handle all events on this node
    val eventActor = GlobalScope.actor<MouseEvent>(Dispatchers.Main, capacity = Channel.CONFLATED) { // <--- Changed here
        for (event in channel) action(event) // pass event to action
    }
    // install a listener to send events to this actor
    onMouseClicked = EventHandler { event ->
        eventActor.trySend(event)
    }
}
```  

> You can get full JavaFx code [here](kotlinx-coroutines-javafx/test/guide/example-ui-actor-03.kt).
  On Android you need to update `val eventActor = ...` line from the previous example. 

Now, if a circle is clicked while the animation is running, it restarts animation after the end of it. Just once. 
Repeated clicks while the animation is running are _conflated_ and only the most recent event gets to be 
processed. 

This is also a desired behaviour for UI applications that have to react to incoming high-frequency
event streams by updating their UI based on the most recently received update. A coroutine that is using
a conflated channel (`capacity = Channel.CONFLATED`, or a buffered channel with
`onBufferOverflow = DROP_OLDEST` or `onBufferOverflow = DROP_LATEST`) avoids delays 
that are usually introduced by buffering of events.

You can experiment with `capacity` parameter in the above line to see how it affects the behaviour of the code.
Setting `capacity = Channel.UNLIMITED` creates a coroutine with an unbounded mailbox that buffers all 
events. In this case, the animation runs as many times as the circle is clicked.

<a name="🔗16.6.0.5."></a>

16.6.0.5. Blocking operations
==================================================


This section explains how to use UI coroutines with thread-blocking operations.

<a name="🔗16.6.0.5.1."></a>

16.6.0.5.1. The problem of UI freezes 
==================================================


It would have been great if all APIs out there were written as suspending functions that never blocks an 
execution thread. However, it is quite often not the case. Sometimes you need to do a CPU-consuming computation
or just need to invoke some 3rd party APIs for network access, for example, that blocks the invoker thread. 
You cannot do that from the main UI thread nor from the UI-confined coroutine directly, because that would
block the main UI thread and cause the freeze up of the UI.

<!--- INCLUDE .*/example-ui-blocking-([0-9]+).kt
fun Node.onClick(action: suspend (MouseEvent) -> Unit) {
    val eventActor = GlobalScope.actor<MouseEvent>(Dispatchers.Main, capacity = Channel.CONFLATED) {
        for (event in channel) action(event) // pass event to action
    }
    onMouseClicked = EventHandler { event ->
        eventActor.trySend(event)
    }
}
-->

The following example illustrates the problem. We are going to use `onClick` extension with UI-confined
event-conflating actor from the last section to process the last click in the main UI thread. 
For this example, we are going to 
perform naive computation of [Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number):
 
```kotlin
fun fib(x: Int): Int =
    if (x <= 1) x else fib(x - 1) + fib(x - 2)
``` 
 
We'll be computing larger and larger Fibonacci number each time the circle is clicked. 
To make the UI freeze more obvious, there is also a fast counting animation that is always running 
and is constantly updating the text in the main UI dispatcher:

```kotlin
fun setup(hello: Text, fab: Circle) {
    var result = "none" // the last result
    // counting animation 
    GlobalScope.launch(Dispatchers.Main) {
        var counter = 0
        while (true) {
            hello.text = "${++counter}: $result"
            delay(100) // update the text every 100ms
        }
    }
    // compute the next fibonacci number of each click
    var x = 1
    fab.onClick {
        result = "fib($x) = ${fib(x)}"
        x++
    }
}
```
 
> You can get full JavaFx code [here](kotlinx-coroutines-javafx/test/guide/example-ui-blocking-01.kt).
  You can just copy the `fib` function and the body of the `setup` function to your Android project.

Try clicking on the circle in this example. After around 30-40th click our naive computation is going to become
quite slow and you would immediately see how the main UI thread freezes, because the animation stops running 
during UI freeze.

<a name="🔗16.6.0.5.2."></a>

16.6.0.5.2. Structured concurrency, lifecycle and coroutine parent-child hierarchy
==================================================


A typical UI application has a number of elements with a lifecycle. Windows, UI controls, activities, views, fragments
and other visual elements are created and destroyed. A long-running coroutine, performing some IO or a background
computation, can retain references to the corresponding UI elements for longer than it is needed, preventing garbage
collection of the whole trees of UI objects that were already destroyed and will not be displayed anymore.

The natural solution to this problem is to associate a [CoroutineScope] object with each UI object that has a
lifecycle and create all the coroutines in the context of this scope.
For the sake of simplicity, [MainScope()] factory can be used. It automatically provides `Dispatchers.Main` and
a parent job for all the children coroutines.

For example, in Android application an `Activity` is initially _created_ and is _destroyed_ when it is no longer
needed and when its memory must be released. A natural solution is to attach an
instance of a `CoroutineScope` to an instance of an `Activity`:

```kotlin
class MainActivity : AppCompatActivity() {
    private val scope = MainScope()

    override fun onDestroy() {
        super.onDestroy()
        scope.cancel()
    } 

    fun asyncShowData() = scope.launch { // Is invoked in UI context with Activity's scope as a parent
        // actual implementation
    }
    
    suspend fun showIOData() {
        val data = withContext(Dispatchers.IO) {
            // compute data in background thread      
        }
        withContext(Dispatchers.Main) {
            // Show data in UI
        }
    }
}
```

Every coroutine launched from within a `MainActivity` has its job as a parent and is immediately cancelled when
activity is destroyed.

> Note, that Android has first-party support for coroutine scope in all entities with the lifecycle.
See [the corresponding documentation](https://developer.android.com/topic/libraries/architecture/coroutines#lifecyclescope).

Parent-child relation between jobs forms a hierarchy. A coroutine that performs some background job on behalf of
the activity can create further children coroutines. The whole tree of coroutines gets cancelled
when the parent job is cancelled. An example of that is shown in the
["Children of a coroutine"](../docs/topics/coroutine-context-and-dispatchers.md#children-of-a-coroutine) section of the guide to coroutines.

<a name="🔗16.6.0.5.3."></a>

16.6.0.5.3. Blocking operations
==================================================


The fix for the blocking operations on the main UI thread is quite straightforward with coroutines. We'll 
convert our "blocking" `fib` function to a non-blocking suspending function that runs the computation in 
the background thread by using [withContext] function to change its execution context to [Dispatchers.Default] that is 
backed by the background pool of threads. 
Notice, that `fib` function is now marked with `suspend` modifier. It does not block the coroutine that
it is invoked from anymore, but suspends its execution when the computation in the background thread is working:

<!--- INCLUDE .*/example-ui-blocking-0[23].kt

fun setup(hello: Text, fab: Circle) {
    var result = "none" // the last result
    // counting animation 
    GlobalScope.launch(Dispatchers.Main) {
        var counter = 0
        while (true) {
            hello.text = "${++counter}: $result"
            delay(100) // update the text every 100ms
        }
    }
    // compute next fibonacci number of each click
    var x = 1
    fab.onClick {
        result = "fib($x) = ${fib(x)}"
        x++
    }
}
-->

```kotlin
suspend fun fib(x: Int): Int = withContext(Dispatchers.Default) {
    if (x <= 1) x else fib(x - 1) + fib(x - 2)
}
```

> You can get the full code [here](kotlinx-coroutines-javafx/test/guide/example-ui-blocking-02.kt).

You can run this code and verify that UI is not frozen while large Fibonacci numbers are being computed. 
However, this code computes `fib` somewhat slower, because every recursive call to `fib` goes via `withContext`. This is 
not a big problem in practice, because `withContext` is smart enough to check that the coroutine is already running
in the required context and avoids overhead of dispatching coroutine to a different thread again. It is an 
overhead nonetheless, which is visible on this primitive code that does nothing else, but only adds integers 
in between invocations to `withContext`. For some more substantial code, the overhead of an extra `withContext` invocation is 
not going to be significant.

Still, this particular `fib` implementation can be made to run as fast as before, but in the background thread, by renaming
the original `fib` function to `fibBlocking` and defining `fib` with `withContext` wrapper on top of `fibBlocking`:

```kotlin
suspend fun fib(x: Int): Int = withContext(Dispatchers.Default) {
    fibBlocking(x)
}

fun fibBlocking(x: Int): Int = 
    if (x <= 1) x else fibBlocking(x - 1) + fibBlocking(x - 2)
```

> You can get the full code [here](kotlinx-coroutines-javafx/test/guide/example-ui-blocking-03.kt).

You can now enjoy full-speed naive Fibonacci computation without blocking the main UI thread. 
All we need is `withContext(Dispatchers.Default)`.

Note that because the `fib` function is invoked from the single actor in our code, there is at most one concurrent 
computation of it at any given time, so this code has a natural limit on the resource utilization. 
It can saturate at most one CPU core.
  
<a name="🔗16.6.0.6."></a>

16.6.0.6. Advanced topics
==================================================


This section covers various advanced topics. 

<a name="🔗16.6.0.6.1."></a>

16.6.0.6.1. Starting coroutine in UI event handlers without dispatch
==================================================


Let us write the following code in `setup` to visualize the order of execution when coroutine is launched
from the UI thread:


```kotlin
fun setup(hello: Text, fab: Circle) {
    fab.onMouseClicked = EventHandler {
        println("Before launch")
        GlobalScope.launch(Dispatchers.Main) {
            println("Inside coroutine")
            delay(100)
            println("After delay")
        } 
        println("After launch")
    }
}
```
 
> You can get full JavaFx code [here](kotlinx-coroutines-javafx/test/guide/example-ui-advanced-01.kt).

When we start this code and click on a pinkish circle, the following messages are printed to the console:
 
```text
Before launch
After launch
Inside coroutine
After delay
```

As you can see, execution immediately continues after [launch], while the coroutine gets posted onto the main UI thread
for execution later. All UI dispatchers in `kotlinx.coroutines` are implemented this way. Why so? 

Basically, the choice here is between "JS-style" asynchronous approach (async actions
are always postponed to be executed later in the event dispatch thread) and "C#-style" approach
(async actions are executed in the invoker thread until the first suspension point).
While, C# approach seems to be more efficient, it ends up with recommendations like
"use `yield` if you need to ....". This is error-prone. JS-style approach is more consistent
and does not require programmers to think about whether they need to yield or not.

However, in this particular case when coroutine is started from an event handler and there is no other code around it,
this extra dispatch does indeed add an extra overhead without bringing any additional value. 
In this case an optional [CoroutineStart] parameter to [launch], [async] and [actor] coroutine builders 
can be used for performance optimization. 
Setting it to the value of [CoroutineStart.UNDISPATCHED] has the effect of starting to execute
coroutine immediately until its first suspension point as the following example shows:

```kotlin
fun setup(hello: Text, fab: Circle) {
    fab.onMouseClicked = EventHandler {
        println("Before launch")
        GlobalScope.launch(Dispatchers.Main, CoroutineStart.UNDISPATCHED) { // <--- Notice this change
            println("Inside coroutine")
            delay(100)                            // <--- And this is where coroutine suspends      
            println("After delay")
        }
        println("After launch")
    }
}
```
 
> You can get full JavaFx code [here](kotlinx-coroutines-javafx/test/guide/example-ui-advanced-02.kt).

It prints the following messages on click, confirming that code in the coroutine starts to execute immediately:

```text
Before launch
Inside coroutine
After launch
After delay
```

[kotlinx.coroutines.Dispatchers.JavaFx]: https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-javafx/kotlinx.coroutines.javafx/-java-fx.html


<a name="🔗16.6.1."></a>

📜 16.6.1. Module kotlinx-coroutines-android
==================================================

Provides `Dispatchers.Main` context for Android applications.

Read [Guide to UI programming with coroutines](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/coroutines-guide-ui.md)
for tutorial on this module.

<a name="🔗16.6.1.1."></a>

16.6.1.1. Optimization
==================================================

R8 and ProGuard rules are bundled into this module. 
R8 is a replacement for ProGuard in Android ecosystem, it is enabled by default since Android gradle plugin 3.4.0
(3.3.0-beta also had it enabled). 
For best results it is recommended to use a recent version of R8, which produces a smaller binary.

When optimizations are enabled with R8 version 1.6.0 or later
the following debugging features are permanently turned off to reduce the size of the resulting binary:

* [Debugging mode](../../docs/debugging.md#debug-mode)
* [Stacktrace recovery](../../docs/debugging.md#stacktrace-recovery)
* The internal assertions in the library are also permanently removed.

You can examine the corresponding rules in this 
[`coroutines.pro`](resources/META-INF/com.android.tools/r8-from-1.6.0/coroutines.pro) file.

<a name="🔗16.6.1.2."></a>

16.6.1.2. Package kotlinx.coroutines.android
==================================================

Provides `Dispatchers.Main` context for Android applications.


<a name="🔗16.6.2."></a>

📜 16.6.2. Module kotlinx-coroutines-javafx
==================================================

Provides `Dispatchers.JavaFx` context and `Dispatchers.Main` implementation for JavaFX UI applications.

Read [Guide to UI programming with coroutines](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/coroutines-guide-ui.md)
for tutorial on this module.

<a name="🔗16.6.2.1."></a>

16.6.2.1. Package kotlinx.coroutines.javafx
==================================================

Provides `Dispatchers.JavaFx` context and `Dispatchers.Main` implementation for JavaFX UI applications.


<a name="🔗16.6.3."></a>

📜 16.6.3. Module kotlinx-coroutines-swing
==================================================

Provides `Dispatchers.Swing` context and `Dispatchers.Main` implementation for Swing UI applications.

Read [Guide to UI programming with coroutines](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/coroutines-guide-ui.md)
for tutorial on this module.

<a name="🔗16.6.3.1."></a>

16.6.3.1. Package kotlinx.coroutines.swing
==================================================

Provides `Dispatchers.Swing` context and `Dispatchers.Main` implementation  for Swing UI applications.

