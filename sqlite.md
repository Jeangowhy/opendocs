# 🍀 Sqlite 文艺复兴

1. [译] 抛弃你的成见，SQLite 不是一个玩具数据库!
2. https://antonz.org/sqlite-is-not-a-toy-database/
3. https://juejin.cn/post/6962910344545042463
4. Sqlite.Wasm https://sqlite.org/fiddle/
5. Architecture of SQLite https://www.sqlite.org/arch.html
6. SQLite的文艺复兴 https://www.bmpi.dev/dev/renaissance-sqlite/
7. Podcast：The Untold Story of SQLite https://www.bilibili.com/video/BV1Tv4y1C7DZ/

> SQLite - Small. Fast. Reliable. Choose any three.


SQLite 是一个数据库软件，但与绝大部分数据库系统拥有完全不同的运行方式。大部分数据库（MySQL、SQL Server、PostgreSQL或Oracle）系统是 Client/Server 的架构，客户端通过特定的协议比如 JDBC/ODBC 与数据库服务器通信，数据库服务器通过监听某个 Socket 端口去接收客户端的查询请求，之后将结果返回给客户端。

与其他数据库网络通信的方式相比，SQLite是一个库，它是通过 In-Process 的方式来与应用程序通信的。当应用程序发出查询请求时，这些请求是通过函数调用的方式在与应用程序相同的线程内执行的。SQLite 的数据库也是存放在磁盘上的单个文件。

作者 Dwayne Richard Hipp 是一个完美主义者，为了能自由的开发 SQLite，他编写了底层的存储引擎、Parser、源码托管工具 Fossil，除了 C 编译器和一些底层库如 libc 外，Richard 几乎从零构建了 SQLite 所依赖的库或工具。

1. The Althttpd Webserver https://sqlite.org/althttpd/file?name=althttpd.md
2. Fossil Distributed VCS http://www.fossil-scm.org/
3. sqlite3 WebAssembly https://sqlite.org/wasm/doc/trunk/index.md

The core SQLite project releases only "vanilla JS" distributions which are independent of any given developer-side toolchain. However, a community-maintained npm-based distribution of the SQLite3 WASM components can be found at @sqlite.org/sqlite-wasm.

1. https://www.npmjs.com/package/@sqlite.org/sqlite-wasm
2. https://deno.land/x/sqlite

It can be installed from a command-line shell using:

```sh
# Node Package Manager (npm)
$ npm install @sqlite.org/sqlite-wasm
```

SQLite 官网的说法，保守估计，在任何每天点击量少于10万的网站上，SQLite 都不会是其访问的瓶颈。多个进程可以同时打开同一个数据库，多个进程可以同时执行 SELECT，但是，在任何时候，只有一个进程可以对数据库进行更改。

SQLite 适合于高查询、低写入类型地网站，如果一个网站有非常多地写操作，那SQLite就不再适合它了。SQLite支持无限数量的同时读取，但是在任何时候都只允许一个写入，虽然可以排队，但是无法应对网站高并发的要求。除了网站，依赖网络来传输数据的B/S架构的桌面应用程序和移动应用程序也在此列。

SQLite 官网说明数据库的大小限制在 140TB，对于更大型的数据，将其进行分布式存储无疑是更好的选择。



## TOC01. ▼ Document Lists And Indexes

1. Alphabetical Listing Of All Documents  
   https://www.sqlite.org/doclist.html              [doclist_html]
2. Website Keyword Index  
   https://www.sqlite.org/keyword_index.html        [keyword_index_html]
3. Permuted Title Index  
   https://www.sqlite.org/sitemap.html             [sitemap_html]

## TOC02. ▼ Overview Documents

4. About SQLite  
   https://www.sqlite.org/about.html               [about_html]
   → A high-level overview of what SQLite is and why you might be interested in using it.
5. Appropriate Uses For SQLite  
   https://www.sqlite.org/whentouse.html           [whentouse_html]
   → This document describes situations where SQLite is an appropriate database engine to use versus situations where a client/server database engine might be a better choice.
6. Distinctive Features  
   https://www.sqlite.org/different.html           [different_html]
   → This document enumerates and describes some of the features of SQLite that make it different from other SQL database engines.
7. Quirks of SQLite  
   https://www.sqlite.org/quirks.html              [quirks_html]
   → This document is a short list of some unusual features of SQLite that tend to cause misunderstandings and confusion. The list includes both deliberate innovations and "misfeatures" that are retained only for backwards compatibility.
8. How SQLite Is Tested  
   https://www.sqlite.org/testing.html             [testing_html]
   → The reliability and robustness of SQLite is achieved in large part by thorough and careful testing. This document identifies the many tests that occur before every release of SQLite.
9. Copyright  
   https://www.sqlite.org/copyright.html            [copyright_html]
   → SQLite is in the public domain. This document describes what that means and the implications for contributors.
10. Frequently Asked Questions  
   https://www.sqlite.org/faq.html                [faq_html]
   → The title of the document says all...
11. Books About SQLite  
   https://www.sqlite.org/books.html               [books_html]
   → A list of independently written books about SQLite.

## TOC03. ▼ Programming Interfaces

12. SQLite In 5 Minutes Or Less  
   https://www.sqlite.org/quickstart.html           [quickstart_html]
   → A very quick introduction to programming with SQLite.
13. Introduction to the C/C++ API  
   https://www.sqlite.org/cintro.html              [cintro_html]
   → This document introduces the C/C++ API. Users should read this document before the C/C++ API Reference Guide linked below.
14. How To Compile SQLite  
   https://www.sqlite.org/howtocompile.html          [howtocompile_html]
   → Instructions and hints for compiling SQLite C code and integrating that code with your own application.
15. C/C++ API Reference  
   https://www.sqlite.org/c3ref/intro.html          [c3ref_intro_html]
   → This document describes each API function separately.
16. Result and Error Codes  
   https://www.sqlite.org/rescode.html             [rescode_html]
   → A description of the meanings of the numeric result codes returned by various C/C++ interfaces.
17. SQL Syntax  
   https://www.sqlite.org/lang.html               [lang_html]
   → This document describes the SQL language that is understood by SQLite.
18. Pragma commands  
   https://www.sqlite.org/pragma.html              [pragma_html]
   → This document describes SQLite performance tuning options and other special purpose database commands.
19. Core SQL Functions  
   https://www.sqlite.org/lang_corefunc.html        [lang_corefunc_html]
   → General-purpose built-in scalar SQL functions.
20. Aggregate SQL Functions  
   https://www.sqlite.org/lang_aggfunc.html         [lang_aggfunc_html]
   → General-purpose built-in aggregate SQL functions.
21. Date and Time SQL Functions  
   https://www.sqlite.org/lang_datefunc.html        [lang_datefunc_html]
   → SQL functions for manipulating dates and times.
22. Window Functions  
   https://www.sqlite.org/windowfunctions.html       [windowfunctions_html]
   → SQL Window functions.
23. Generated Columns  
   https://www.sqlite.org/gencol.html              [gencol_html]
   → Stored and virtual columns in table definitions.
24. System.Data.SQLite  
   http://system.data.sqlite.org/
   → C#/.NET bindings for SQLite
25. Tcl API  
   https://www.sqlite.org/tclsqlite.html             [tclsqlite_html]
   → A description of the TCL interface bindings for SQLite.
26. DataTypes  
   https://www.sqlite.org/datatype3.html           [datatype3_html]
   → SQLite version 3 introduces the concept of manifest typing, where the type of a value is associated with the value itself, not the column that it is stored in. This page describes data typing for SQLite version 3 in further detail.

## TOC04. ▼ Extensions

27. Json1 - JSON Integration  
   https://www.sqlite.org/json1.html               [json1_html]
   → SQL functions for creating, parsing, and querying JSON content.
28. FTS5 - Full Text Search  
   https://www.sqlite.org/fts5.html               [fts5_html]
   → A description of the SQLite Full Text Search (FTS5) extension.
29. FTS3 - Full Text Search  
   https://www.sqlite.org/fts3.html               [fts3_html]
   → A description of the SQLite Full Text Search (FTS3) extension.
30. R-Tree Module  
   https://www.sqlite.org/rtree.html               [rtree_html]
   → A description of the SQLite R-Tree extension. An R-Tree is a specialized data structure that supports fast multi-dimensional range queries often used in geospatial systems.
31. Sessions  
   https://www.sqlite.org/sessionintro.html          [sessionintro_html]
   → The Sessions extension allows change to an SQLite database to be captured in a compact file which can be reverted on the original database (to implement "undo") or transferred and applied to another similar database.
32. Run-Time Loadable Extensions  
   https://www.sqlite.org/loadext.html             [loadext_html]
   → A general overview on how run-time loadable extensions work, how they are compiled, and how developers can create their own run-time loadable extensions for SQLite.
33. SQLite Android Bindings  
   http://sqlite.org/android/
   → Information on how to deploy your own private copy of SQLite on Android, bypassing the built-in SQLite, but using the same Java interface.
34. Dbstat Virtual Table  
   https://www.sqlite.org/dbstat.html              [dbstat_html]
   → The DBSTAT virtual table reports on the sizes and geometries of tables storing content in an SQLite database, and is the basis for the [sqlite3_analyzer] utility program.
35. Csv Virtual Table  
   https://www.sqlite.org/csv.html                [csv_html]
   → The CSV virtual table allows SQLite to directly read and query [https://www.ietf.org/rfc/rfc4180.txt|RFC 4180] formatted files.
36. Carray  
   https://www.sqlite.org/carray.html              [carray_html]
   → CARRAY is a [table-valued function] that allows C-language arrays to be used in SQL queries.
37. generate_series  
   https://www.sqlite.org/series.html              [series_html]
   → A description of the generate_series() [table-valued function].
38. Spellfix1  
   https://www.sqlite.org/spellfix1.html            [spellfix1_html]
   → The spellfix1 extension is an experiment in doing spelling correction for [full-text search].

## TOC05. ▼ Features

39. 8+3 Filenames  
   https://www.sqlite.org/shortnames.html           [shortnames_html]
   → How to make SQLite work on filesystems that only support 8+3 filenames.
40. Autoincrement  
   https://www.sqlite.org/autoinc.html             [autoinc_html]
   → A description of the AUTOINCREMENT keyword in SQLite, what it does, why it is sometimes useful, and why it should be avoided if not strictly necessary.
41. Backup API  
   https://www.sqlite.org/backup.html              [backup_html]
   → The [sqlite3_backup_init | online-backup interface] can be used to copy content from a disk file into an in-memory database or vice versa and it can make a hot backup of a live database. This application note gives examples of how.
42. Error and Warning Log  
   https://www.sqlite.org/errlog.html              [errlog_html]
   → SQLite supports an "error and warning log" design to capture information about suspicious and/or error events during operation. Embedded applications are encouraged to enable the error and warning log to help with debugging application problems that arise in the field. This document explains how to do that.
43. Foreign Key Support  
   https://www.sqlite.org/foreignkeys.html          [foreignkeys_html]
   → This document describes the support for foreign key constraints introduced in version 3.6.19.
44. Indexes On Expressions  
   https://www.sqlite.org/expridx.html             [expridx_html]
   → Notes on how to create indexes on expressions instead of just individual columns.
45. Internal versus External Blob Storage  
   https://www.sqlite.org/intern-v-extern-blob.html  [intern_v_extern_blob_html]
   → Should you store large BLOBs directly in the database, or store them in files and just record the filename in the database? This document seeks to shed light on that question.
46. Limits In SQLite  
   https://www.sqlite.org/limits.html              [limits_html]
   → This document describes limitations of SQLite (the maximum length of a string or blob, the maximum size of a database, the maximum number of tables in a database, etc.) and how these limits can be altered at compile-time and run-time.
47. Memory-Mapped I/O  
   https://www.sqlite.org/mmap.html               [mmap_html]
   → SQLite supports memory-mapped I/O. Learn how to enable memory-mapped I/O and about the various advantages and disadvantages to using memory-mapped I/O in this document.
48. Multi-threaded Programs and SQLite  
   https://www.sqlite.org/threadsafe.html           [threadsafe_html]
   → SQLite is safe to use in multi-threaded programs. This document provides the details and hints on how to maximize performance.
49. Null Handling  
   https://www.sqlite.org/nulls.html               [nulls_html]
   → Different SQL database engines handle NULLs in different ways. The SQL standards are ambiguous. This (circa 2003) document describes how SQLite handles NULLs in comparison with other SQL database engines.
50. Partial Indexes  
   https://www.sqlite.org/partialindex.html          [partialindex_html]
   → A partial index is an index that only covers a subset of the rows in a table. Learn how to use partial indexes in SQLite from this document.
51. Shared Cache Mode  
   https://www.sqlite.org/sharedcache.html          [sharedcache_html]
   → Version 3.3.0 and later supports the ability for two or more database connections to share the same page and schema cache. This feature is useful for certain specialized applications.
52. Unlock Notify  
   https://www.sqlite.org/unlock_notify.html         [unlock_notify_html]
   → The "unlock notify" feature can be used in conjunction with [shared cache mode] to more efficiently manage resource conflict (database table locks).
53. URI Filenames  
   https://www.sqlite.org/uri.html                [uri_html]
   → The names of database files can be specified using either an ordinary filename or a URI. Using URI filenames provides additional capabilities, as this document describes.
54. WITHOUT ROWID Tables  
   https://www.sqlite.org/withoutrowid.html         [withoutrowid_html]
   → The WITHOUT ROWID optimization is a option that can sometimes result in smaller and faster databases.
55. Write-Ahead Log (WAL) Mode  
   https://www.sqlite.org/wal.html                [wal_html]
   → Transaction control using a write-ahead log offers more concurrency and is often faster than the default rollback transactions. This document explains how to use WAL mode for improved performance.

## TOC06. ▼ Tools

56. Command-Line Shell (sqlite3.exe)  
   https://www.sqlite.org/cli.html                 [cli_html]
   → Notes on using the "sqlite3.exe" command-line interface that can be used to create, modify, and query arbitrary SQLite database files.
57. SQLite Database Analyzer (sqlite3_analyzer.exe)  
   https://www.sqlite.org/sqlanalyze.html           [sqlanalyze_html]
   → This stand-alone program reads an SQLite database and outputs a file showing the space used by each table and index and other statistics. Built using the [dbstat virtual table].
58. RBU  
   https://www.sqlite.org/rbu.html                [rbu_html]
   → The "Resumable Bulk Update" utility program allows a batch of changes to be applied to a remote database running on embedded hardware in a way that is resumeable and does not interrupt ongoing operation.
59. SQLite Database Diff (sqldiff.exe)  
   https://www.sqlite.org/sqldiff.html             [sqldiff_html]
   → This stand-alone program compares two SQLite database files and outputs the SQL needed to convert one into the other.
60. Database Hash (dbhash.exe)  
   https://www.sqlite.org/dbhash.html              [dbhash_html]
   → This program demonstrates how to compute a hash over the content of an SQLite database.
61. The Fossil Version Control System
   http://www.fossil-scm.org/                   [fossil]
   → The Fossil Version Control System is a distributed VCS designed specifically to support SQLite development. Fossil uses SQLite as for storage.
62. SQLite Archiver (sqlar.exe)  
   http://www.sqlite.org/sqlar/
   → A ZIP-like archive program that uses SQLite for storage.

## TOC07. ▼ Advocacy

63. SQLite As An Application File Format  
   https://www.sqlite.org/appfileformat.html         [appfileformat_html]
   → This article advocates using SQLite as an application file format in place of XML or JSON or a "pile-of-file".
64. Well Known Users  
   https://www.sqlite.org/famous.html             [famous_html]
   → This page lists a small subset of the many thousands of devices and application programs that make use of SQLite.
65. 35% Faster Than The Filesystem  
   https://www.sqlite.org/fasterthanfs.html         [fasterthanfs_html]
   → This article points out that reading blobs out of an SQLite database is often faster than reading the same blobs from individual files in the filesystem.

## TOC08. ▼ Technical and Design Documentation

66. How Database Corruption Can Occur  
   https://www.sqlite.org/howtocorrupt.html          [howtocorrupt_html]
   → SQLite is highly resistant to database corruption. But application, OS, and hardware bugs can still result in corrupt database files. This article describes many of the ways that SQLite database files can go corrupt.
67. Temporary Files Used By SQLite  
   https://www.sqlite.org/tempfiles.html            [tempfiles_html]
   → SQLite can potentially use many different temporary files when processing certain SQL statements. This document describes the many kinds of temporary files that SQLite uses and offers suggestions for avoiding them on systems where creating a temporary file is an expensive operation.
68. In-Memory Databases  
   https://www.sqlite.org/inmemorydb.html          [inmemorydb_html]
   → SQLite normally stores content in a disk file. However, it can also be used as an in-memory database engine. This document explains how.
69. How SQLite Implements Atomic Commit  
   https://www.sqlite.org/atomiccommit.html         [atomiccommit_html]
   → A description of the logic within SQLite that implements transactions with atomic commit, even in the face of power failures.
70. Dynamic Memory Allocation in SQLite  
   https://www.sqlite.org/malloc.html              [malloc_html]
   → SQLite has a sophisticated memory allocation subsystem that can be configured and customized to meet memory usage requirements of the application and that is robust against out-of-memory conditions and leak-free. This document provides the details.
71. Customizing And Porting SQLite  
   https://www.sqlite.org/custombuild.html          [custombuild_html]
   → This document explains how to customize the build of SQLite and how to port SQLite to new platforms.
72. Locking And Concurrency In SQLite Version 3  
   https://www.sqlite.org/lockingv3.html            [lockingv3_html]
   → A description of how the new locking code in version 3 increases concurrency and decreases the problem of writer starvation.
73. Isolation In SQLite  
   https://www.sqlite.org/isolation.html             [isolation_html]
   → When we say that SQLite transactions are "serializable" what exactly does that mean? How and when are changes made visible within the same database connection and to other database connections?
74. Overview Of The Optimizer  
   https://www.sqlite.org/optoverview.html          [optoverview_html]
   → A quick overview of the various query optimizations that are attempted by the SQLite code generator.
75. The Next-Generation Query Planner  
   https://www.sqlite.org/queryplanner-ng.html      [queryplanner_ng_html]
   → Additional information about the SQLite query planner, and in particular the redesign of the query planner that occurred for version 3.8.0.
76. Architecture  
   https://www.sqlite.org/arch.html               [arch_html]
   → An architectural overview of the SQLite library, useful for those who want to hack the code.
77. VDBE Opcodes  
   https://www.sqlite.org/opcode.html              [opcode_html]
   → This document is an automatically generated description of the various opcodes that the VDBE understands. Programmers can use this document as a reference to better understand the output of EXPLAIN listings from SQLite.
78. Virtual Filesystem  
   https://www.sqlite.org/vfs.html                [vfs_html]
   → The "VFS" object is the interface between the SQLite core and the underlying operating system. Learn more about how the VFS object works and how to create new VFS objects from this article.
79. Virtual Tables  
   https://www.sqlite.org/vtab.html                [vtab_html]
   → This article describes the virtual table mechanism and API in SQLite and how it can be used to add new capabilities to the core SQLite library.
80. SQLite File Format  
   https://www.sqlite.org/fileformat2.html          [fileformat2_html]
   → A description of the format used for SQLite database and journal files, and other details required to create software to read and write SQLite databases without using SQLite.
81. Compilation Options  
   https://www.sqlite.org/compile.html             [compile_html]
   → This document describes the compile time options that may be set to modify the default behavior of the library or omit optional features in order to reduce binary size.
82. Android Bindings for SQLite  
   https://sqlite.org/android/
   → A description of how to compile your own SQLite for Android (bypassing the SQLite that is built into Android) together with code and makefiles.
83. Debugging Hints  
   https://www.sqlite.org/debugging.html           [debugging_html]
   → A list of tricks and techniques used to trace, examine, and understand the operation of the core SQLite library.

## TOC09. ▼ Upgrading SQLite, Backwards Compatibility

84. Moving From SQLite 3.5 to 3.6  
   https://www.sqlite.org/35to36.html             [35to36_html]
   → A document describing the differences between SQLite version 3.5.9 and 3.6.0.
85. Moving From SQLite 3.4 to 3.5  
   https://www.sqlite.org/34to35.html             [34to35_html]
   → A document describing the differences between SQLite version 3.4.2 and 3.5.0.
86. Release History  
   https://www.sqlite.org/changes.html             [changes_html]
   → A chronology of SQLite releases going back to version 1.0.0
87. Backwards Compatibility  
   https://www.sqlite.org/formatchng.html          [formatchng_html]
   → This document details all of the incompatible changes to the SQLite file format that have occurred since version 1.0.0.
88. Private Branches  
   https://www.sqlite.org/privatebranch.html         [privatebranch_html]
   → This document suggests procedures for maintaining a private branch or fork of SQLite and keeping that branch or fork in sync with the public SQLite source tree.

## TOC10. ▼ Obsolete Documents

89. Asynchronous IO Mode  
   https://www.sqlite.org/asyncvfs.html            [asyncvfs_html]
   → This page describes the asynchronous IO extension developed alongside SQLite. Using asynchronous IO can cause SQLite to appear more responsive by delegating database writes to a background thread. NB: This extension is deprecated. [WAL mode] is recommended as a replacement.
90. Version 2 C/C++ API  
   https://www.sqlite.org/c_interface.html          [c_interface_html]
   → A description of the C/C++ interface bindings for SQLite through version 2.8
91. Version 2 DataTypes  
   https://www.sqlite.org/datatypes.html            [datatypes_html]
   → A description of how SQLite version 2 handles SQL datatypes. Short summary: Everything is a string.
92. VDBE Tutorial  
   https://www.sqlite.org/vdbe.html               [vdbe_html]
   → The VDBE is the subsystem within SQLite that does the actual work of executing SQL statements. This page describes the principles of operation for the VDBE in SQLite version 2.7. This is essential reading for anyone who want to modify the SQLite sources.
93. SQLite Version 3  
   https://www.sqlite.org/version3.html            [version3_html]
   → A summary of the changes between SQLite version 2.8 and SQLite version 3.0.
94. Version 3 C/C++ API  
   https://www.sqlite.org/capi3.html               [capi3_html]
   → A summary of the API related changes between SQLite version 2.8 and SQLite version 3.0.
95. Speed Comparison  
   https://www.sqlite.org/speed.html               [speed_html]
   → The speed of version 2.7.6 of SQLite is compared against PostgreSQL and MySQL.



# 🍀 /17. SQL Syntax  
   https://www.sqlite.org/lang.html               *lang_html*


SQL As Understood By SQLite

SQLite understands most of the standard SQL language. But it does 
[omit some features](https://www.sqlite.org/omitted.html) while at the same time adding 
a few features of its own. This document attempts to describe precisely 
what parts of the SQL language SQLite does and does not support. 
A list of [SQL keywords](https://www.sqlite.org/lang_keywords.html) is also provided. 
The SQL language syntax is described by [syntax diagrams](https://www.sqlite.org/syntaxdiagrams.html).

The following syntax documentation topics are available:

*   [keywords](https://www.sqlite.org/lang_keywords.html)
*   [comment](https://www.sqlite.org/lang_comment.html)
*   [expression](https://www.sqlite.org/lang_expr.html)
*   [core functions](https://www.sqlite.org/lang_corefunc.html)
*   [aggregate functions](https://www.sqlite.org/lang_aggfunc.html)
*   [date and time functions](https://www.sqlite.org/lang_datefunc.html)

*   [ALTER TABLE](https://www.sqlite.org/lang_altertable.html)
*   [ANALYZE](https://www.sqlite.org/lang_analyze.html)
*   [ATTACH DATABASE](https://www.sqlite.org/lang_attach.html)
*   [BEGIN TRANSACTION](https://www.sqlite.org/lang_transaction.html)
*   [COMMIT TRANSACTION](https://www.sqlite.org/lang_transaction.html)
*   [CREATE INDEX](https://www.sqlite.org/lang_createindex.html)
*   [CREATE TABLE](https://www.sqlite.org/lang_createtable.html)
*   [CREATE TRIGGER](https://www.sqlite.org/lang_createtrigger.html)
*   [CREATE VIEW](https://www.sqlite.org/lang_createview.html)
*   [CREATE VIRTUAL TABLE](https://www.sqlite.org/lang_createvtab.html)
*   [DELETE](https://www.sqlite.org/lang_delete.html)
*   [DETACH DATABASE](https://www.sqlite.org/lang_detach.html)
*   [DROP INDEX](https://www.sqlite.org/lang_dropindex.html)
*   [DROP TABLE](https://www.sqlite.org/lang_droptable.html)
*   [DROP TRIGGER](https://www.sqlite.org/lang_droptrigger.html)
*   [DROP VIEW](https://www.sqlite.org/lang_dropview.html)
*   [END TRANSACTION](https://www.sqlite.org/lang_transaction.html)
*   [EXPLAIN](https://www.sqlite.org/lang_explain.html)
*   [INDEXED BY](https://www.sqlite.org/lang_indexedby.html)
*   [INSERT](https://www.sqlite.org/lang_insert.html)
*   [ON CONFLICT clause](https://www.sqlite.org/lang_conflict.html)
*   [PRAGMA](https://www.sqlite.org/pragma.html#syntax)
*   [REINDEX](https://www.sqlite.org/lang_reindex.html)
*   [RELEASE SAVEPOINT](https://www.sqlite.org/lang_savepoint.html)
*   [REPLACE](https://www.sqlite.org/lang_replace.html)
*   [RETURNING clause](https://www.sqlite.org/lang_returning.html)
*   [ROLLBACK TRANSACTION](https://www.sqlite.org/lang_transaction.html)
*   [SAVEPOINT](https://www.sqlite.org/lang_savepoint.html)
*   [SELECT](https://www.sqlite.org/lang_select.html)
*   [UPDATE](https://www.sqlite.org/lang_update.html)
*   [UPSERT](https://www.sqlite.org/lang_upsert.html)
*   [VACUUM](https://www.sqlite.org/lang_vacuum.html)
*   [WITH clause](https://www.sqlite.org/lang_with.html)

The routines 
[sqlite3_prepare_v2()](https://www.sqlite.org/c3ref/prepare.html), 
[sqlite3_prepare()](https://www.sqlite.org/c3ref/prepare.html), 
[sqlite3_prepare16()](https://www.sqlite.org/c3ref/prepare.html), 
[sqlite3_prepare16_v2()](https://www.sqlite.org/c3ref/prepare.html), 
[sqlite3_exec()](https://www.sqlite.org/c3ref/exec.html), and 
[sqlite3_get_table()](https://www.sqlite.org/c3ref/free_table.html) 
accept an SQL statement list (sql-stmt-list) which is a semicolon-separated list of statements.

**[sql-stmt-list:](https://www.sqlite.org/syntax/sql-stmt-list.html)**

    sql-stmt ;

Each SQL statement in the statement list is an instance of the following:

**[sql-stmt:](https://www.sqlite.org/syntax/sql-stmt.html)**

    [ EXPLAIN ] --> [ QUERY ] --> [ PLAN ] -->
                                        ➊ alter-table-stmt
                                        ➋ analyze-stmt
                                        ➌ attach-stmt
                                        ➍ begin-stmt
                                        ➎ commit-stmt
                                        ➏ create-index-stmt
                                        ➐ create-table-stmt
                                        ➑ create-trigger-stmt
                                        ➒ create-view-stmt
                                        ➓ create-virtual-table-stmt
                                        ⓫ delete-stmt
                                        ⓬ delete-stmt-limited
                                        ⓭ detach-stmt
                                        ⓮ drop-index-stmt
                                        ⓯ drop-table-stmt
                                        ⓰ drop-trigger-stmt
                                        ⓱ drop-view-stmt
                                        ⓲ insert-stmt
                                        ⓳ pragma-stmt
                                        ⓴ reindex-stmt
                                        ➊ release-stmt
                                        ➋ rollback-stmt
                                        ➌ savepoint-stmt
                                        ➍ select-stmt
                                        ➎ update-stmt
                                        ➏ update-stmt-limited
                                        ➐ vacuum-stmt

## 🐣 Keywords
https://www.sqlite.org/lang_keywords.html        *keywords*

SQLite Keywords

The SQL standard specifies a large number of keywords which may not be used as 
the names of tables, indices, columns, databases, user-defined functions, 
collations, virtual table modules, or any other named object. 
The list of keywords is so long that few people can remember them all. 
For most SQL code, your safest bet is to never use any English language word 
as the name of a user-defined object.

If you want to use a keyword as a name, you need to quote it. 
There are four ways of quoting keywords in SQLite:

    'keyword'   A keyword in single quotes is a string literal.
    
    "keyword"   A keyword in double-quotes is an identifier.
    
    [keyword]   A keyword enclosed in square brackets is an identifier. 
                This is not standard SQL. This quoting mechanism is used by 
                MS Access and SQL Server and is included in SQLite for compatibility.
    
    `keyword`   A keyword enclosed in grave accents (ASCII code 96) is an identifier. 
                This is not standard SQL. This quoting mechanism is used by 
                MySQL and is included in SQLite for compatibility.

For resilience when confronted with historical SQL statements, SQLite will 
sometimes bend the quoting rules above:

*   If a keyword in single quotes (ex: **'key'** or **'glob'**) is used in  a context
    where an identifier is allowed but where a string literal is not allowed, 
    then the token is understood to be an identifier instead of a string literal.
    
*   If a keyword in double quotes (ex: **"key"** or **"glob"**) is used in a context 
    where it cannot be resolved to an identifier but where a string literal is allowed, 
    then the token is understood to be a string literal instead of an identifier.
    

Programmers are cautioned not to use the two exceptions described in the 
previous bullets. We emphasize that they exist only so that old and ill-formed 
SQL statements will run correctly. Future versions of SQLite might raise errors 
instead of accepting the malformed statements covered by the exceptions above.

SQLite adds new keywords from time to time when it takes on new features. 
So to prevent your code from being broken by future enhancements, you should normally 
quote any identifier that is an English language word, even if you do not have to.

The list below shows all possible keywords used by any build of SQLite regardless of 
[compile-time options](compile.html). Most reasonable configurations use most 
or all of these keywords, but some keywords may be omitted when SQL language 
features are disabled. Applications can use the 
[sqlite3_keyword_count()](c3ref/keyword_check.html), 
[sqlite3_keyword_name()](c3ref/keyword_check.html), and 
[sqlite3_keyword_check()](c3ref/keyword_check.html) interfaces 
to determine the keywords recognized by SQLite at run-time. 
Regardless of the compile-time configuration, any identifier that is not 
on the following 147-element list is not a keyword to the SQL parser in SQLite:

    *   ABORT                *   EXISTS           *   OTHERS
    *   ACTION               *   EXPLAIN          *   OUTER
    *   ADD                  *   FAIL             *   OVER
    *   AFTER                *   FILTER           *   PARTITION
    *   ALL                  *   FIRST            *   PLAN
    *   ALTER                *   FOLLOWING        *   PRAGMA
    *   ALWAYS               *   FOR              *   PRECEDING
    *   ANALYZE              *   FOREIGN          *   PRIMARY
    *   AND                  *   FROM             *   QUERY
    *   AS                   *   FULL             *   RAISE
    *   ASC                  *   GENERATED        *   RANGE
    *   ATTACH               *   GLOB             *   RECURSIVE
    *   AUTOINCREMENT        *   GROUP            *   REFERENCES
    *   BEFORE               *   GROUPS           *   REGEXP
    *   BEGIN                *   HAVING           *   REINDEX
    *   BETWEEN              *   IF               *   RELEASE
    *   BY                   *   IGNORE           *   RENAME
    *   CASCADE              *   IMMEDIATE        *   REPLACE
    *   CASE                 *   IN               *   RESTRICT
    *   CAST                 *   INDEX            *   RETURNING
    *   CHECK                *   INDEXED          *   RIGHT
    *   COLLATE              *   INITIALLY        *   ROLLBACK
    *   COLUMN               *   INNER            *   ROW
    *   COMMIT               *   INSERT           *   ROWS
    *   CONFLICT             *   INSTEAD          *   SAVEPOINT
    *   CONSTRAINT           *   INTERSECT        *   SELECT
    *   CREATE               *   INTO             *   SET
    *   CROSS                *   IS               *   TABLE
    *   CURRENT              *   ISNULL           *   TEMP
    *   CURRENT_DATE         *   JOIN             *   TEMPORARY
    *   CURRENT_TIME         *   KEY              *   THEN
    *   CURRENT_TIMESTAMP    *   LAST             *   TIES
    *   DATABASE             *   LEFT             *   TO
    *   DEFAULT              *   LIKE             *   TRANSACTION
    *   DEFERRABLE           *   LIMIT            *   TRIGGER
    *   DEFERRED             *   MATCH            *   UNBOUNDED
    *   DELETE               *   MATERIALIZED     *   UNION
    *   DESC                 *   NATURAL          *   UNIQUE
    *   DETACH               *   NO               *   UPDATE
    *   DISTINCT             *   NOT              *   USING
    *   DO                   *   NOTHING          *   VACUUM
    *   DROP                 *   NOTNULL          *   VALUES
    *   EACH                 *   NULL             *   VIEW
    *   ELSE                 *   NULLS            *   VIRTUAL
    *   END                  *   OF               *   WHEN
    *   ESCAPE               *   OFFSET           *   WHERE
    *   EXCEPT               *   ON               *   WINDOW
    *   EXCLUDE              *   OR               *   WITH
    *   EXCLUSIVE            *   ORDER            *   WITHOUT

## 🐣 Comment
https://www.sqlite.org/lang_comment.html        *comment*


SQL Comment Syntax

    comment-syntax: 

    -- anything-except-newline newline end-of-input
    /* anything-except-*/      */      end-of-input

Comments are not SQL commands, but can occur within the text of SQL queries 
passed to [sqlite3_prepare_v2()](c3ref/prepare.html and related interfaces. 
Comments are treated as whitespace by the parser. Comments can begin anywhere 
whitespace can be found, including inside expressions that span multiple lines.

SQL comments begin with two consecutive "-" characters (ASCII 0x2d) and 
extend up to and including the next newline character (ASCII 0x0a) 
or until the end of input, whichever comes first.

C-style comments begin with "/*" and extend up to and including the next "*/" 
character pair or until the end of input, whichever comes first. 
C-style comments can span multiple lines.

Comments can appear anywhere whitespace can occur, including inside expressions 
and in the middle of other SQL statements. Comments do not nest.


## 🐣 Expression
https://www.sqlite.org/lang_expr.html        *expression*



# 🍀 /18. Pragma commands  
   https://www.sqlite.org/pragma.html              *pragma_html*


# 🍀 /19. Core SQL Functions  
   https://www.sqlite.org/lang_corefunc.html        *lang_corefunc_html*


# 🍀 /20. Aggregate SQL Functions  
   https://www.sqlite.org/lang_aggfunc.html         *lang_aggfunc_html*


# 🍀 /21. Date and Time SQL Functions  
   https://www.sqlite.org/lang_datefunc.html        *lang_datefunc_html*


# 🍀 /22. Window Functions  
   https://www.sqlite.org/windowfunctions.html       *windowfunctions_html*

# 🍀 /22. Math functions
   https://www.sqlite.org/lang_mathfunc.html

# 🍀 /22. JSON functions
   https://www.sqlite.org/json1.html                 *jsonfunctions*

Database script db_init.sql for Testing:

```sql
DROP TABLE IF EXISTS blob;
CREATE TABLE blob(
  rid INTEGER PRIMARY KEY,
  rcvid INTEGER,
  size INTEGER,
  uuid TEXT UNIQUE NOT NULL,
  content BLOB,
  CHECK( length(uuid)>=40 AND rid>0 )
);
```

```sh
npm install -g uuid
sqlite3 -init db_init.sql db.sqlite '.tables' '.exit'
# count=$(sqlite3 db.sqlite 'select count(*) from blob;')
# sqlite3 db.sqlite "INSERT INTO blob VALUES ($((count+1)),0,0,'UUID$(uuid)',null)"
for id in {1..10}; do
  sqlite3 db.sqlite "INSERT INTO blob VALUES ($id,0,0,'UUID$(uuid)',null)"
done
sqlite3 db.sqlite '.mode column' 'select rid,uuid from blob LIMIT 0,5;'  
sqlite3 db.sqlite '.mode json' 'select rid,uuid from blob LIMIT 0,5;'
sqlite3 db.sqlite "select json(' { \"this\" : [ \"is a test\" ] } ') AS Obj"
sqlite3 db.sqlite "select json_group_array(json_object('id', rid, 'uuid', uuid)) from blob"
```

JSON Functions And Operators

► Table Of Contents

*  [1. Overview](#overview)
*  [2. Compiling in JSON Support](#compiling_in_json_support)
*  [3. Interface Overview](#interface_overview)
*  [3.1. JSON arguments](#json_arguments)
*  [3.2. JSONB](#jsonb)
*  [3.2.1. The JSONB format](#the_jsonb_format)
*  [3.2.2. Handling of malformed JSONB](#handling_of_malformed_jsonb)
*  [3.3. PATH arguments](#path_arguments)
*  [3.4. VALUE arguments](#value_arguments)
*  [3.5. Compatibility](#compatibility)
*  [3.6. JSON5 Extensions](#json5_extensions)
*  [3.7. Performance Considerations](#performance_considerations)
*  [3.8. The JSON BLOB Input Bug](#the_json_blob_input_bug)
*  [4. Function Details](#function_details)
*  [4.1. The json() function](#the_json_function)
*  [4.2. The jsonb() function](#the_jsonb_function)
*  [4.3. The json_array() function](#the_json_array_function)
*  [4.4. The jsonb_array() function](#the_jsonb_array_function)
*  [4.5. The json_array_length() function](#the_json_array_length_function)
*  [4.6. The json_error_position() function](#the_json_error_position_function)
*  [4.7. The json_extract() function](#the_json_extract_function)
*  [4.8. The jsonb_extract() function](#the_jsonb_extract_function)
*  [4.9. The -and ->operators](#the_and_operators)
*  [4.10. The json_insert(), json_replace, and json_set() functions](#the_json_insert_json_replace_and_json_set_functions)
*  [4.11. The jsonb_insert(), jsonb_replace, and jsonb_set() functions](#the_jsonb_insert_jsonb_replace_and_jsonb_set_functions)
*  [4.12. The json_object() function](#the_json_object_function)
*  [4.13. The jsonb_object() function](#the_jsonb_object_function)
*  [4.14. The json_patch() function](#the_json_patch_function)
*  [4.15. The jsonb_patch() function](#the_jsonb_patch_function)
*  [4.16. The json_remove() function](#the_json_remove_function)
*  [4.17. The jsonb_remove() function](#the_jsonb_remove_function)
*  [4.18. The json_type() function](#the_json_type_function)
*  [4.19. The json_valid() function](#the_json_valid_function)
*  [4.20. The json_quote() function](#the_json_quote_function)
*  [4.21. Array and object aggregate functions](#array_and_object_aggregate_functions)
*  [4.22. The json_each() and json_tree() table-valued functions](#the_json_each_and_json_tree_table_valued_functions)
*  [4.22.1. Examples using json_each() and json_tree()](#examples_using_json_each_and_json_tree_)


## 1. Overview

By default, SQLite supports twenty-nine functions and two operators for 
dealing with JSON values. There are also two [table-valued functions](vtab.html#tabfunc2) 
that can be used to decompose a JSON string.

There are 25 scalar functions and operators:

1.  [json](#jmini)(_json_)
2.  [jsonb](#jminib)(_json_)
3.  [json_array](#jarray)(_value1_,_value2_,...)
4.  [jsonb_array](#jarrayb)(_value1_,_value2_,...)
5.  [json_array_length](#jarraylen)(_json_)  
    [json_array_length](#jarraylen)(_json_,_path_)
6.  [json_error_position](#jerr)(_json_)
7.  [json_extract](#jex)(_json_,_path_,...)
8.  [jsonb_extract](#jexb)(_json_,_path_,...)
9.  _json_ [->](#jptr) _path_
10.  _json_ [->>](#jptr) _path_
11.  [json_insert](#jins)(_json_,_path_,_value_,...)
12.  [jsonb_insert](#jinsb)(_json_,_path_,_value_,...)
13.  [json_object](#jobj)(_label1_,_value1_,...)
14.  [jsonb_object](#jobjb)(_label1_,_value1_,...)
15.  [json_patch](#jpatch)(_json_1,json2)
16.  [jsonb_patch](#jpatchb)(_json_1,json2)
17.  [json_remove](#jrm)(_json_,_path_,...)
18.  [jsonb_remove](#jrmb)(_json_,_path_,...)
19.  [json_replace](#jrepl)(_json_,_path_,_value_,...)
20.  [jsonb_replace](#jreplb)(_json_,_path_,_value_,...)
21.  [json_set](#jset)(_json_,_path_,_value_,...)
22.  [jsonb_set](#jsetb)(_json_,_path_,_value_,...)
23.  [json_type](#jtype)(_json_)  
    [json_type](#jtype)(_json_,_path_)
24.  [json_valid](#jvalid)(_json_)  
    [json_valid](#jvalid)(_json_,flags)
25.  [json_quote](#jquote)(_value_)

There are four [aggregate SQL functions](lang_aggfunc.html):

1.  [json_group_array](#jgrouparray)(_value_)
2.  [jsonb_group_array](#jgrouparrayb)(_value_)
3.  [json_group_object](#jgroupobject)(_label_,_value_)
4.  [jsonb_group_object](#jgroupobjectb)(name,_value_)

The two [table-valued functions](vtab.html#tabfunc2) are:

1.  [json_each](#jeach)(_json_)  
    [json_each](#jeach)(_json_,_path_)
2.  [json_tree](#jtree)(_json_)  
    [json_tree](#jtree)(_json_,_path_)


## 2. Compiling in JSON Support

The JSON functions and operators are built into SQLite by default, as of SQLite 
version 3.38.0 (2022-02-22). They can be omitted by adding the -DSQLITE_OMIT_JSON 
compile-time option. Prior to version 3.38.0, the JSON functions were an extension 
that would only be included in builds if the -DSQLITE_ENABLE_JSON1 compile-time 
option was included. In other words, the JSON functions went from being opt-in 
with SQLite version 3.37.2 and earlier to opt-out with SQLite version 3.38.0 and later.

## 3. Interface Overview

SQLite stores JSON as ordinary text. Backwards compatibility constraints mean 
that SQLite is only able to store values that are NULL, integers, floating-point 
numbers, text, and BLOBs. It is not possible to add a new "JSON" type.

### 3.1. JSON arguments

For functions that accept JSON as their first argument, that argument can be 
a JSON object, array, number, string, or null. SQLite numeric values and NULL 
values are interpreted as JSON numbers and nulls, respectively. SQLite text 
values can be understood as JSON objects, arrays, or strings. If an SQLite 
text value that is not a well-formed JSON object, array, or string is passed 
into JSON function, that function will usually throw an error. 
(Exceptions to this rule are [json_valid()](json1.html#jvalid), 
[json_quote()](json1.html#jquote), and [json_error_position()](json1.html#jerr).)

These routines understand all [rfc-8259 JSON syntax](https://www.rfc-editor.org/rfc/rfc8259.txt) 
and also [JSON5 extensions](https://spec.json5.org/). JSON text generated by 
these routines always strictly conforms to the [canonical JSON definition](https://json.org) 
and does not contain any JSON5 or other extensions. The ability to read and 
understand JSON5 was added in version 3.42.0 (2023-05-16). Prior versions of 
SQLite would only read canonical JSON.

### 3.2. JSONB

Beginning with version 3.45.0 (2024-01-15), SQLite allows its internal "parse tree" 
representation of JSON to be stored on disk, as a BLOB, in a format that we 
call "JSONB". By storing SQLite's internal binary representation of JSON 
directly in the database, applications can bypass the overhead of parsing 
and rendering JSON when reading and updating JSON values. 
The internal JSONB format also uses slightly less disk space then text JSON.

Any SQL function parameter that accepts text JSON as an input will also accept 
a BLOB in the JSONB format. The function will operate the same in either case, 
except that it will run faster when the input is JSONB, 
since it does not need to run the JSON parser.

Most SQL functions that return JSON text have a corresponding function that 
returns the equivalent JSONB. The functions that return JSON in the 
text format begin with "json_" and functions that return the binary 
JSONB format begin with "jsonb_".

### 3.2.1. The JSONB format

JSONB is a binary representation of JSON used by SQLite and is intended for 
internal use by SQLite only. Applications should not use JSONB outside of 
SQLite nor try to reverse-engineer the JSONB format.

The "JSONB" name is inspired by [PostgreSQL](https://postgresql.org), 
but the on-disk format for SQLite's JSONB is not the same as PostgreSQL's. 
The two formats have the same name, but are not binary compatible. 

The PostgreSQL JSONB format claims to offer O(1) lookup of elements in 
objects and arrays. SQLite's JSONB format makes no such claim. 

SQLite's JSONB has O(N) time complexity for most operations in SQLite, 
just like text JSON. The advantage of JSONB in SQLite is that it is smaller 
and faster than text JSON - potentially several times faster. 
There is space in the on-disk JSONB format to add enhancements and 
future versions of SQLite might include options to provide O(1) lookup of 
elements in JSONB, but no such capability is currently available.

### 3.2.2. Handling of malformed JSONB

The JSONB that is generated by SQLite will always be well-formed. 
If you follow recommended practice and treat JSONB as an opaque BLOB, 
then you will not have any problems. But JSONB is just a BLOB, so a 
mischievous programmer could devise BLOBs that are similar to JSONB 
but that are technically malformed. When misformatted JSONB is feed into 
JSON functions, any of the following might happen:

*   The SQL statement might abort with a "malformed JSON" error.
    
*   The correct answer might be returned, if the malformed parts of 
    the JSONB blob do not impact the answer.
    
*   A goofy or nonsensical answer might be returned.
    

The way in which SQLite handles invalid JSONB might change from one version 
of SQLite to the next. The system follows the garbage-in/garbage-out rule: 
If you feed the JSON functions invalid JSONB, you get back an invalid answer. 
If you are in doubt about the validity of our JSONB, use the 
[json_valid()](json1.html#jvalid) function to verify it.

We do make this one promise: Malformed JSONB will never cause a memory error 
or similar problem that might lead to a vulnerability. Invalid JSONB might lead 
to crazy answers, or it might cause queries to abort, but it won't cause a crash.

### 3.3. PATH arguments

For functions that accept PATH arguments, that PATH must be well-formed or else 
the function will throw an error. A well-formed PATH is a text value that 
begins with exactly one '$' character followed by zero or more instances of 
"._objectlabel_" or "[_arrayindex_]".

The _arrayindex_ is usually a non-negative integer _N_. In that case, 
the array element selected is the _N_-th element of the array, 
starting with zero on the left. The _arrayindex_ can also be of 
the form "**#-**_N_" in which case the element selected is the _N_-th 
from the right. The last element of the array is "**#-1**". 
Think of the "#" characters as the "number of elements in the array". 
Then the expression "#-1" evaluates to the integer that corresponds to the last 
entry in the array. It is sometimes useful for the array index to be just 
the **#** character, for example when appending a value to an existing JSON array:

    json_set('[0,1,2]','$[#]','new')        → '[0,1,2,"new"]'

### 3.4. VALUE arguments

For functions that accept "_value_" arguments (also shown as "_value1_" and "_value2_"), 
those arguments are usually understood to be literal strings that are quoted 
and become JSON string values in the result. Even if the input _value_ strings 
look like well-formed JSON, they are still interpreted as literal strings in the result.

However, if a _value_ argument comes directly from the result of another 
JSON function or from [the -operator](json1.html#jptr) (but not [the ->operator](json1.html#jptr)), 
then the argument is understood to be actual JSON and the complete JSON 
is inserted rather than a quoted string.

For example, in the following call to json_object(), the _value_ argument looks 
like a well-formed JSON array. However, because it is just ordinary SQL text, 
it is interpreted as a literal string and added to the result as a quoted string:

    json_object('ex','[52,3.14159]')           → '{"ex":"[52,3.14159]"}'
    json_object('ex',('[52,3.14159]'->>'$'))   → '{"ex":"[52,3.14159]"}'

But if the _value_ argument in the outer json_object() call is the result of 
another JSON function like [json()](json1.html#jmini) or [json_array()](json1.html#jarray), 
then the value is understood to be actual JSON and is inserted as such:

    json_object('ex',json('[52,3.14159]'))      → '{"ex":[52,3.14159]}'
    json_object('ex',json_array(52,3.14159))    → '{"ex":[52,3.14159]}'
    json_object('ex','[52,3.14159]'->'$')       → '{"ex":[52,3.14159]}'

To be clear: "_json_" arguments are always interpreted as JSON regardless 
of where the value for that argument comes from. But "_value_" arguments 
are only interpreted as JSON if those arguments come directly from another 
JSON function or [the -operator](json1.html#jptr).

Within JSON value arguments interpreted as JSON strings, Unicode escape 
sequences are not treated as equivalent to the characters or escaped control 
characters represented by the expressed Unicode code point. 
Such escape sequences are not translated or specially treated; 
they are treated as plain text by SQLite's JSON functions.

### 3.5. Compatibility

The current implementation of this JSON library uses a recursive descent parser. 
In order to avoid using excess stack space, any JSON input that has more 
than 1000 levels of nesting is considered invalid. Limits on nesting depth are 
allowed for compatible implementations of JSON by 
[RFC-8259 section 9](https://tools.ietf.org/html/rfc8259#section-9).

### 3.6. JSON5 Extensions

Beginning in version 3.42.0 (2023-05-16), these routines will read and 
interpret input JSON text that includes [JSON5](https://spec.json5.org/) 
extensions. However, JSON text generated by these routines will always be 
strictly conforming to the [canonical definition of JSON](https://json.org).

Here is a synopsis of JSON5 extensions (adapted from the 
[JSON5 specification](https://spec.json5.org/#introduction)):

*   Object keys may be unquoted identifiers.
*   Objects may have a single trailing comma.
*   Arrays may have a single trailing comma.
*   Strings may be single quoted.
*   Strings may span multiple lines by escaping new line characters.
*   Strings may include new character escapes.
*   Numbers may be hexadecimal.
*   Numbers may have a leading or trailing decimal point.
*   Numbers may be "Infinity", "-Infinity", and "NaN".
*   Numbers may begin with an explicit plus sign.
*   Single (//...) and multi-line (/\*...\*/) comments are allowed.
*   Additional white space characters are allowed.

To convert string X from JSON5 into canonical JSON, invoke "[json(X)](json1.html#jmini)". 
The output of the "[json()](json1.html#jmini)" function will be canonical JSON 
regardless of any JSON5 extensions that are present in the input. 
For backwards compatibility, the [json_valid(X)](json1.html#jvalid) function 
without a "flags" argument continues to report false for inputs that are 
not canonical JSON, even if the input is JSON5 that the function is able 
to understand. To determine whether or not an input string is valid JSON5, 
include the 0x02 bit in the "flags" argument to json_valid: "json_valid(X,2)".

These routines understand all of JSON5, plus a little more. SQLite extends 
the JSON5 syntax in these two ways:

1.  Strict JSON5 requires that unquoted object keys must be ECMAScript 5.1 
    IdentifierNames. But large unicode tables and lots of code is required 
    in order to determine whether or not a key is an ECMAScript 5.1 IdentifierName. 
    For this reason, SQLite allows object keys to include any unicode 
    characters greater than U+007f that are not whitespace characters. 
    This relaxed definition of "identifier" greatly simplifies the 
    implementation and allows the JSON parser to be smaller and run faster.
    
2.  JSON5 allows floating-point infinities to be expressed as "Infinity", 
    "-Infinity", or "+Infinity" in exactly that case - the initial "I" is 
    capitalized and all other characters are lower case. SQLite also allows 
    the abbreviation "Inf" to be used in place of "Infinity" and it allows 
    both keywords to appear in any combination of upper and lower case letters. 
    Similarly, JSON5 allows "NaN" for not-a-number. SQLite extends this to 
    also allow "QNaN" and "SNaN" in any combination of upper and lower case 
    letters. Note that SQLite interprets NaN, QNaN, and SNaN as just an 
    alternative spellings for "null". This extension has been added because 
    (we are told) there exists a lot of JSON in the wild that includes 
    these non-standard representations for infinity and not-a-number.
    

### 3.7. Performance Considerations

Most JSON functions do their internal processing using JSONB. So if the 
input is text, they first must translate the input text into JSONB. 
If the input is already in the JSONB format, no translation is needed, 
that step can be skipped, and performance is faster.

For that reason, when an argument to one JSON function is supplied by 
another JSON function, it is usually more efficient to use the "jsonb_" 
variant for the function used as the argument.

    ... json_insert(A,'$.b',json(C)) ...   ← Less efficient.
    ... json_insert(A,'$.b',jsonb(C)) ...   ← More efficient.

The [aggregate JSON SQL functions](json1.html#jgroupobjectb) are an exception 
to this rule. Those functions all do their processing using text instead of JSONB. 
So for the aggregate JSON SQL functions, it is more efficient for the arguments 
to be supplied using "json_" functions than "jsonb_" functions.

    ... json_group_array(json(A))) ...   ← More efficient.
    ... json_group_array(jsonb(A))) ...   ← Less efficient.

### 3.8. The JSON BLOB Input Bug

If a JSON input is a BLOB that is not JSONB and that looks like text JSON 
when cast to text, then it is accepted as text JSON. This is actually a 
long-standing bug in the original implementation that the SQLite developers 
were unaware of. The documentation stated that a BLOB input to a JSON 
function should raise an error. But in the actual implementation, 
the input would be accepted as long as the BLOB content was a valid JSON 
string in the text encoding of the database.

This JSON BLOB input bug was accidentally fixed when the JSON routines 
were reimplemented for the 3.45.0 release (2024-01-15). That caused 
breakage in applications that had come to depend on the old behavior. 
(In defense of those applications: they were often lured into using BLOBs 
as JSON by the [readfile()](cli.html#fileio) SQL function available in the 
[CLI](cli.html). Readfile() was used to read JSON from disk files, 
but readfile() returns a BLOB. And that worked for them, so why not just do it?)

For backwards compatibility, the (formerly incorrect) legacy behavior of 
interpreting BLOBs as text JSON if no other interpretation works is hereby 
documented and is be officially supported in version 3.45.1 (2024-01-30) 
and all subsequent releases.

## 4. Function Details

The following sections provide additional detail on the operation of 
the various JSON functions and operators:

### 4.1. The json() function

The json(X) function verifies that its argument X is a valid JSON string or 
JSONB blob and returns a minified version of that JSON string with all 
unnecessary whitespace removed. If X is not a well-formed JSON string or 
JSONB blob, then this routine throws an error.

If the input is JSON5 text, then it is converted into canonical RFC-8259 
text prior to being returned.

If the argument X to json(X) contains JSON objects with duplicate labels, 
then it is undefined whether or not the duplicates are preserved. The current 
implementation preserves duplicates. However, future enhancements to this 
routine may choose to silently remove duplicates.

Example:

    json(' { "this" : "is", "a": [ "test" ] } ') → '{"this":"is","a":["test"]}'

### 4.2. The jsonb() function

The jsonb(X) function returns the binary JSONB representation of the JSON 
provided as argument X. An error is raised if X is TEXT that does not have 
valid JSON syntax.

If X is a BLOB and appears to be JSONB, then this routine simply returns 
a copy of X. Only the outer-most element of the JSONB input is examined, 
however. The deep structure of the JSONB is not validated.

### 4.3. The json_array() function

The json_array() SQL function accepts zero or more arguments and returns 
a well-formed JSON array that is composed from those arguments. If any 
argument to json_array() is a BLOB then an error is thrown.

An argument with SQL type TEXT is normally converted into a quoted JSON string. 
However, if the argument is the output from another json1 function, then it 
is stored as JSON. This allows calls to json_array() and 
[json_object()](json1.html#jobj) to be nested. The [json()](json1.html#jmini) 
function can also be used to force strings to be recognized as JSON.

Examples:

    json_array(1,2,'3',4)                           → '[1,2,"3",4]'
    json_array('[1,2]')                             → '["[1,2]"]'
    json_array(json_array(1,2))                     → '[[1,2]]'
    json_array(1,null,'3','[4,5]','{"six":7.7}')    → '[1,null,"3","[4,5]","{\\"six\\":7.7}"]'
    json_array(1,null,'3',json('[4,5]'),json('{"six":7.7}')) → '[1,null,"3",[4,5],{"six":7.7}]'

### 4.4. The jsonb_array() function

The jsonb_array() SQL function works just like the [json_array()](json1.html#jarray) 
function except that it returns the constructed JSON array in the SQLite's 
private JSONB format rather than in the standard RFC 8259 text format.

### 4.5. The json_array_length() function

The json_array_length(X) function returns the number of elements in the 
JSON array X, or 0 if X is some kind of JSON value other than an array. 
The json_array_length(X,P) locates the array at path P within X and 
returns the length of that array, or 0 if path P locates an element in X 
that is not a JSON array, and NULL if path P does not locate any element of X. 
Errors are thrown if either X is not well-formed JSON or if P is not a well-formed path.

Examples:

    json_array_length('[1,2,3,4]')                   → 4
    json_array_length('[1,2,3,4]', '$')              → 4
    json_array_length('[1,2,3,4]', '$[2]')           → 0
    json_array_length('{"one":[1,2,3]}')             → 0
    json_array_length('{"one":[1,2,3]}', '$.one')    → 3
    json_array_length('{"one":[1,2,3]}', '$.two')    → NULL

### 4.6. The json_error_position() function

The json_error_positionf(X) function returns 0 if the input X is a 
well-formed JSON or JSON5 string. If the input X contains one or 
more syntax errors, then this function returns the character position of 
the first syntax error. The left-most character is position 1.

If the input X is a BLOB, then this routine returns 0 if X is a well-formed 
JSONB blob. If the return value is positive, then it represents the _approximate_ 
1-based position in the BLOB of the first detected error.

The json_error_position() function was added with SQLite version 3.42.0 (2023-05-16).

### 4.7. The json_extract() function

The json_extract(X,P1,P2,...) extracts and returns one or more values from the 
well-formed JSON at X. If only a single path P1 is provided, then the SQL 
datatype of the result is NULL for a JSON null, INTEGER or REAL for a JSON 
numeric value, an INTEGER zero for a JSON false value, an INTEGER one for a 
JSON true value, the dequoted text for a JSON string value, and a text 
representation for JSON object and array values. If there are multiple path 
arguments (P1, P2, and so forth) then this routine returns SQLite text which 
is a well-formed JSON array holding the various values.

Examples:

    json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$')          → '{"a":2,"c":[4,5,{"f":7}]}'
    json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.c')        → '[4,5,{"f":7}]'
    json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.c[2]')     → '{"f":7}'
    json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.c[2].f')   → 7
    json_extract('{"a":2,"c":[4,5],"f":7}','$.c','$.a')     → '[[4,5],2]'
    json_extract('{"a":2,"c":[4,5],"f":7}','$.c[#-1]')      → 5
    json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.x')        → NULL
    json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.x', '$.a') → '[null,2]'
    json_extract('{"a":"xyz"}', '$.a')                      → 'xyz'
    json_extract('{"a":null}', '$.a')                       → NULL

There is a subtle incompatibility between the json_extract() function in 
SQLite and the json_extract() function in MySQL. The MySQL version of 
json_extract() always returns JSON. The SQLite version of json_extract() 
only returns JSON if there are two or more PATH arguments (because the 
result is then a JSON array) or if the single PATH argument references 
an array or object. In SQLite, if json_extract() has only a single PATH 
argument and that PATH references a JSON null or a string or a numeric value, 
then json_extract() returns the corresponding SQL NULL, TEXT, INTEGER, or REAL value.

The difference between MySQL json_extract() and SQLite json_extract() really 
only stands out when accessing individual values within the JSON that are 
strings or NULLs. The following table demonstrates the difference:

    | Operation | SQLite Result | MySQL Result

    json_extract('{"a":null,"b":"xyz"}','$.a')    NULL      'null'
    json_extract('{"a":null,"b":"xyz"}','$.b')   'xyz'      '"xyz"'

### 4.8. The jsonb_extract() function

The jsonb_extract() function works the same as the [json_extract()](json1.html#jex) 
function, except in cases where json_extract() would normally return a text 
JSON array object, this routine returns the array or object in the JSONB format. 
For the common case where a text, numeric, null, or boolean JSON element is 
returned, this routine works exactly the same as json_extract().

### 4.9. The -and ->operators

Beginning with SQLite version 3.38.0 (2022-02-22), the -and ->operators are 
available for extracting subcomponents of JSON. The SQLite implementation of 
-and ->strives to be compatible with both MySQL and PostgreSQL. 
The -and ->operators take a JSON string or JSONB blob as their left operand 
and a PATH expression or object field label or array index as their right operand. 
The -operator returns a text JSON representation of the selected subcomponent 
or NULL if that subcomponent does not exist. The ->operator returns an SQL 
TEXT, INTEGER, REAL, or NULL value that represents the selected subcomponent, 
or NULL if the subcomponent does not exist.

Both the -and ->operators select the same subcomponent of the JSON to their left. 
The difference is that -always returns a JSON representation of that subcomponent 
and the ->operator always returns an SQL representation of that subcomponent. 
Thus, these operators are subtly different from a two-argument [json_extract()](json1.html#jex) 
function call. A call to json_extract() with two arguments will return a 
JSON representation of the subcomponent if and only if the subcomponent is a 
JSON array or object, and will return an SQL representation of the subcomponent 
if the subcomponent is a JSON null, string, or numeric value.

When the -operator returns JSON, it always returns the RFC 8565 text 
representation of that JSON, not JSONB. Use the [jsonb_extract()](json1.html#jexb) 
function if you need a subcomponent in the JSONB format.

The right-hand operand to the -and ->operators can be a well-formed JSON 
path expression. This is the form used by MySQL. For compatibility with 
PostgreSQL, the -and ->operators also accept a text object label or 
integer array index as their right-hand operand. If the right operand 
is a text label X, then it is interpreted as the JSON path '$.X'. If the 
right operand is an integer value N, then it is interpreted as the JSON path '$[N]'.

Examples:

    '{"a":2,"c":[4,5,{"f":7}]}' -'$'           → '{"a":2,"c":[4,5,{"f":7}]}'
    '{"a":2,"c":[4,5,{"f":7}]}' -'$.c'         → '[4,5,{"f":7}]'
    '{"a":2,"c":[4,5,{"f":7}]}' -'c'           → '[4,5,{"f":7}]'
    '{"a":2,"c":[4,5,{"f":7}]}' -'$.c[2]'      → '{"f":7}'
    '{"a":2,"c":[4,5,{"f":7}]}' -'$.c[2].f'    → '7'
    '{"a":2,"c":[4,5,{"f":7}]}' ->'$.c[2].f'   → 7
    '{"a":2,"c":[4,5,{"f":7}]}' -'c' -2 ->'f'  → 7
    '{"a":2,"c":[4,5],"f":7}' -'$.c[#-1]'      → '5'
    '{"a":2,"c":[4,5,{"f":7}]}' -'$.x'         → NULL
    '[11,22,33,44]' -3                         → '44'
    '[11,22,33,44]' ->3                        → 44
    '{"a":"xyz"}' -'$.a'                       → '"xyz"'
    '{"a":"xyz"}' ->'$.a'                      → 'xyz'
    '{"a":null}' -'$.a'                        → 'null'
    '{"a":null}' ->'$.a'                       → NULL

### 4.10. The json_insert(), json_replace, and json_set() functions

The json_insert(), json_replace, and json_set() functions all take a 
single JSON value as their first argument followed by zero or more pairs 
of path and value arguments, and return a new JSON string formed by updating 
the input JSON by the path/value pairs. The functions differ only in how 
they deal with creating new values and overwriting preexisting values.

    | Function | Overwrite if already exists? | Create if does not exist?

    json_insert()       No          Yes
    json_replace()      Yes         No
    json_set()          Yes         Yes

The json_insert(), json_replace(), and json_set() functions always take 
an odd number of arguments. The first argument is always the original 
JSON to be edited. Subsequent arguments occur in pairs with the first element 
of each pair being a path and the second element being the value to insert 
or replace or set on that path.

Edits occur sequentially from left to right. Changes caused by prior edits 
can affect the path search for subsequent edits.

If the value of a path/value pair is an SQLite TEXT value, then it is normally 
inserted as a quoted JSON string, even if the string looks like valid JSON. 
However, if the value is the result of another json function 
(such as [json()](json1.html#jmini) or [json_array()](json1.html#jarray) or 
[json_object()](json1.html#jobj)) or if it is the result of [the -operator](json1.html#jptr), 
then it is interpreted as JSON and is inserted as JSON retaining all of 
its substructure. Values that are the result of [the ->operator](json1.html#jptr) 
are always interpreted as TEXT and are inserted as a JSON string 
even if they look like valid JSON.

These routines throw an error if the first JSON argument is not well-formed 
or if any PATH argument is not well-formed or if any argument is a BLOB.

To append an element onto the end of an array, using json_insert() with 
an array index of "#". Examples:

    json_insert('[1,2,3,4]','$[#]',99)          → '[1,2,3,4,99]'
    json_insert('[1,[2,3],4]','$[1][#]',99)     → '[1,[2,3,99],4]'

Other examples:

    json_insert('{"a":2,"c":4}', '$.a', 99)             → '{"a":2,"c":4}'
    json_insert('{"a":2,"c":4}', '$.e', 99)             → '{"a":2,"c":4,"e":99}'
    json_replace('{"a":2,"c":4}', '$.a', 99)            → '{"a":99,"c":4}'
    json_replace('{"a":2,"c":4}', '$.e', 99)            → '{"a":2,"c":4}'
    json_set('{"a":2,"c":4}', '$.a', 99)                → '{"a":99,"c":4}'
    json_set('{"a":2,"c":4}', '$.e', 99)                → '{"a":2,"c":4,"e":99}'
    json_set('{"a":2,"c":4}', '$.c', '[97,96]')         → '{"a":2,"c":"[97,96]"}'
    json_set('{"a":2,"c":4}', '$.c', json('[97,96]'))   → '{"a":2,"c":[97,96]}'
    json_set('{"a":2,"c":4}', '$.c', json_array(97,96)) → '{"a":2,"c":[97,96]}'

### 4.11. The jsonb_insert(), jsonb_replace, and jsonb_set() functions

The jsonb_insert(), jsonb_replace(), and jsonb_set() functions work 
the same as [json_insert()](json1.html#jins), [json_replace()](json1.html#jrepl), 
and [json_set()](json1.html#jset), respectively, except that "jsonb_" 
versions return their result in the binary JSONB format.

### 4.12. The json_object() function

The json_object() SQL function accepts zero or more pairs of arguments and 
returns a well-formed JSON object that is composed from those arguments. 
The first argument of each pair is the label and the second argument of each 
pair is the value. If any argument to json_object() is a BLOB then an error is thrown.

The json_object() function currently allows duplicate labels without complaint, 
though this might change in a future enhancement.

An argument with SQL type TEXT it is normally converted into a quoted JSON 
string even if the input text is well-formed JSON. However, if the argument 
is the direct result from another JSON function or [the -operator](json1.html#jptr) 
(but not [the ->operator](json1.html#jptr)), then it is treated as JSON and 
all of its JSON type information and substructure is preserved. This allows 
calls to json_object() and [json_array()](json1.html#jarray) to be nested. 
The [json()](json1.html#jmini) function can also be used to force strings 
to be recognized as JSON.

Examples:

    json_object('a',2,'c',4)                    → '{"a":2,"c":4}'
    json_object('a',2,'c','{e:5}')              → '{"a":2,"c":"{e:5}"}'
    json_object('a',2,'c',json_object('e',5))   → '{"a":2,"c":{"e":5}}'

### 4.13. The jsonb_object() function

The jsonb_object() function works just like the [json_object()](json1.html#jobj) 
function except that the generated object is returned in the binary JSONB format.

### 4.14. The json_patch() function

The json_patch(T,P) SQL function runs the [RFC-7396](https://tools.ietf.org/html/rfc7396) 
MergePatch algorithm to apply patch P against input T. The patched copy of T is returned.

MergePatch can add, modify, or delete elements of a JSON Object, and so for 
JSON Objects, the json_patch() routine is a generalized replacement for 
[json_set()](json1.html#jset) and [json_remove()](json1.html#jrm). However, 
MergePatch treats JSON Array objects as atomic. MergePatch cannot append to 
an Array nor modify individual elements of an Array. It can only insert, replace, 
or delete the whole Array as a single unit. Hence, json_patch() is not as useful 
when dealing with JSON that includes Arrays, especially Arrays with lots of substructure.

Examples:

    json_patch('{"a":1,"b":2}','{"c":3,"d":4}')          → '{"a":1,"b":2,"c":3,"d":4}'
    json_patch('{"a":[1,2],"b":2}','{"a":9}')            → '{"a":9,"b":2}'
    json_patch('{"a":[1,2],"b":2}','{"a":null}')         → '{"b":2}'
    json_patch('{"a":1,"b":2}','{"a":9,"b":null,"c":8}') → '{"a":9,"c":8}'
    json_patch('{"a":{"x":1,"y":2},"b":3}','{"a":{"y":9},"c":8}') → '{"a":{"x":1,"y":9},"b":3,"c":8}'

### 4.15. The jsonb_patch() function

The jsonb_patch() function works just like the [json_patch()](json1.html#jpatch) 
function except that the patched JSON is returned in the binary JSONB format.

### 4.16. The json_remove() function

The json_remove(X,P,...) function takes a single JSON value as its first 
argument followed by zero or more path arguments. The json_remove(X,P,...) 
function returns a copy of the X parameter with all the elements identified 
by path arguments removed. Paths that select elements not found in X are silently ignored.

Removals occurs sequentially from left to right. Changes caused by prior 
removals can affect the path search for subsequent arguments.

If the json_remove(X) function is called with no path arguments, then it 
returns the input X reformatted, with excess whitespace removed.

The json_remove() function throws an error if the first argument is not 
well-formed JSON or if any later argument is not a well-formed path.

Examples:

    json_remove('[0,1,2,3,4]','$[2]')           → '[0,1,3,4]'
    json_remove('[0,1,2,3,4]','$[2]','$[0]')    → '[1,3,4]'
    json_remove('[0,1,2,3,4]','$[0]','$[2]')    → '[1,2,4]'
    json_remove('[0,1,2,3,4]','$[#-1]','$[0]')  → '[1,2,3]'
    json_remove('{"x":25,"y":42}')              → '{"x":25,"y":42}'
    json_remove('{"x":25,"y":42}','$.z')        → '{"x":25,"y":42}'
    json_remove('{"x":25,"y":42}','$.y')        → '{"x":25}'
    json_remove('{"x":25,"y":42}','$')          → NULL

### 4.17. The jsonb_remove() function

The jsonb_remove() function works just like the [json_remove()](json1.html#jrm) 
function except that the edited JSON result is returned in the binary JSONB format.

### 4.18. The json_type() function

The json_type(X) function returns the "type" of the outermost element of X. 
The json_type(X,P) function returns the "type" of the element in X that 
is selected by path P. The "type" returned by json_type() is one of the 
following SQL text values: 'null', 'true', 'false', 'integer', 'real', 
'text', 'array', or 'object'. If the path P in json_type(X,P) selects 
an element that does not exist in X, then this function returns NULL.

The json_type() function throws an error if its first argument is not 
well-formed JSON or JSONB or if its second argument is not a well-formed JSON path.

Examples:

    json_type('{"a":[2,3.5,true,false,null,"x"]}')          → 'object'
    json_type('{"a":[2,3.5,true,false,null,"x"]}','$')      → 'object'
    json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a')    → 'array'
    json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[0]') → 'integer'
    json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[1]') → 'real'
    json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[2]') → 'true'
    json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[3]') → 'false'
    json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[4]') → 'null'
    json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[5]') → 'text'
    json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[6]') → NULL

### 4.19. The json_valid() function

The json_valid(X,Y) function return 1 if the argument X is well-formed JSON, 
or returns 0 if X is not well-formed. The Y parameter is an integer bitmask that 
defines what is meant by "well-formed". The following bits of Y are currently defined:

*   **0x01** → The input is text that strictly complies with canonical 
RFC-8259 JSON, without any extensions.
*   **0x02** → The input is text that is JSON with [JSON5](json1.html#json5) extensions described above.
*   **0x04** → The input is a BLOB that superficially appears to be [JSONB](json1.html#jsonbx).
*   **0x08** → The input is a BLOB that strictly conforms to the internal [JSONB](json1.html#jsonbx) format.

By combining bits, the following useful values of Y can be derived:

*   **1** → X is RFC-8259 JSON text
*   **2** → X is [JSON5](json1.html#json5) text
*   **4** → X is probably [JSONB](json1.html#jsonbx)
*   **5** → X is RFC-8259 JSON text or [JSONB](json1.html#jsonbx)
*   **6** → X is [JSON5](json1.html#json5) text or [JSONB](json1.html#jsonbx) ← _This is probably the value you want_
*   **8** → X is strictly conforming [JSONB](json1.html#jsonbx)
*   **9** → X is RFC-8259 or strictly conforming [JSONB](json1.html#jsonbx)
*   **10** → X is JSON5 or strictly conforming [JSONB](json1.html#jsonbx)

The Y parameter is optional. If omitted, it defaults to 1, which means that 
the default behavior is to return true only if the input X is strictly 
conforming RFC-8259 JSON text without any extensions. This makes the 
one-argument version of json_valid() compatible with older versions of SQLite, 
prior to the addition of support for [JSON5](json1.html#json5) and [JSONB](json1.html#jsonbx).

The difference between 0x04 and 0x08 bits in the Y parameter is that 0x04 
only examines the outer wrapper of the BLOB to see if it superficially looks 
like [JSONB](json1.html#jsonbx). This is sufficient for must purposes and 
is very fast. The 0x08 bit does a thorough examination of all internal details 
of the BLOB. The 0x08 bit takes time that is linear in the size of the X 
input and is much slower. The 0x04 bit is recommended for most purposes.

If you just want to know if a value is a plausible input to one of the other 
JSON functions, a Y value of 6 is probably what you want to use.

Any Y value less than 1 or greater than 15 raises an error, for the latest 
version of json_valid(). However, future versions of json_valid() might be 
enhanced to accept flag values outside of this range, having new meanings 
that we have not yet thought of.

If either X or Y inputs to json_valid() are NULL, then the function returns NULL.

Examples:

    json_valid('{"x":35}')          → 1
    json_valid('{x:35}')            → 0
    json_valid('{x:35}',6)          → 1
    json_valid('{"x":35')           → 0
    json_valid(NULL)                → NULL

### 4.20. The json_quote() function

The json_quote(X) function converts the SQL value X (a number or a string) 
into its corresponding JSON representation. If X is a JSON value returned 
by another JSON function, then this function is a no-op.

Examples:

    json_quote(3.14159)             → 3.14159
    json_quote('verdant')           → '"verdant"'
    json_quote('[1]')               → '"[1]"'
    json_quote(json('[1]'))         → '[1]'
    json_quote('[1,')               → '"[1,"'

### 4.21. Array and object aggregate functions

The json_group_array(X) function is an [aggregate SQL function](lang_aggfunc.html) 
that returns a JSON array comprised of all X values in the aggregation. 
Similarly, the json_group_object(NAME,VALUE) function returns a JSON object 
comprised of all NAME/VALUE pairs in the aggregation. The "jsonb_" variants 
are the same except that they return their result in the binary 
[JSONB](json1.html#jsonbx) format.

### 4.22. The json_each() and json_tree() table-valued functions

The json_each(X) and json_tree(X) [table-valued functions](vtab.html#tabfunc2) 
walk the JSON value provided as their first argument and return one row 
for each element. The json_each(X) function only walks the immediate 
children of the top-level array or object, or just the top-level element 
itself if the top-level element is a primitive value. The json_tree(X) 
function recursively walks through the JSON substructure starting with
the top-level element.

The json_each(X,P) and json_tree(X,P) functions work just like their 
one-argument counterparts except that they treat the element identified 
by path P as the top-level element.

The schema for the table returned by json_each() and json_tree() is as follows:

    CREATE TABLE json_tree(
        key ANY,             -- key for current element relative to its parent
        value ANY,           -- value for the current element
        type TEXT,           -- 'object','array','string','integer', etc.
        atom ANY,            -- value for primitive types, null for array & object
        id INTEGER,          -- integer ID for this element
        parent INTEGER,      -- integer ID for the parent of this element
        fullkey TEXT,        -- full path describing the current element
        path TEXT,           -- path to the container of the current row
        json JSON HIDDEN,    -- 1st input parameter: the raw JSON
        root TEXT HIDDEN     -- 2nd input parameter: the PATH at which to start
    );

The "key" column is the integer array index for elements of a JSON array and 
the text label for elements of a JSON object. The key column is NULL in all other cases.

The "atom" column is the SQL value corresponding to primitive elements - elements 
other than JSON arrays and objects. The "atom" column is NULL for a JSON array 
or object. The "value" column is the same as the "atom" column for primitive 
JSON elements but takes on the text JSON value for arrays and objects.

The "type" column is an SQL text value taken from ('null', 'true', 'false', 
'integer', 'real', 'text', 'array', 'object') according to the type of 
the current JSON element.

The "id" column is an integer that identifies a specific JSON element within 
the complete JSON string. The "id" integer is an internal housekeeping number, 
the computation of which might change in future releases. The only guarantee 
is that the "id" column will be different for every row.

The "parent" column is always NULL for json_each(). For json_tree(), 
the "parent" column is the "id" integer for the parent of the current element, 
or NULL for the top-level JSON element or the element identified by
the root path in the second argument.

The "fullkey" column is a text path that uniquely identifies the current 
row element within the original JSON string. The complete key to the true 
top-level element is returned even if an alternative starting point is 
provided by the "root" argument.

The "path" column is the path to the array or object container that holds 
the current row, or the path to the current row in the case where the iteration 
starts on a primitive type and thus only provides a single row of output.

### 4.22.1. Examples using json_each() and json_tree()

Suppose the table "CREATE TABLE user(name,phone)" stores zero or more phone 
numbers as a JSON array object in the user.phone field. To find all users
who have any phone number with a 704 area code:

    SELECT DISTINCT user.name
      FROM user, json_each(user.phone)
     WHERE json_each.value LIKE '704-%';

Now suppose the user.phone field contains plain text if the user has only 
a single phone number and a JSON array if the user has multiple phone numbers. 
The same question is posed: "Which users have a phone number in the 704 area code?" 
But now the json_each() function can only be called for those users that have 
two or more phone numbers since json_each() requires well-formed JSON as its first argument:

    SELECT name FROM user WHERE phone LIKE '704-%'
    UNION
    SELECT user.name
      FROM user, json_each(user.phone)
     WHERE json_valid(user.phone)
       AND json_each.value LIKE '704-%';

Consider a different database with "CREATE TABLE big(json JSON)". 
To see a complete line-by-line decomposition of the data:

    SELECT big.rowid, fullkey, value
      FROM big, json_tree(big.json)
     WHERE json_tree.type NOT IN ('object','array');

In the previous, the "type NOT IN ('object','array')" term of the WHERE 
clause suppresses containers and only lets through leaf elements. 
The same effect could be achieved this way:

    SELECT big.rowid, fullkey, atom
      FROM big, json_tree(big.json)
     WHERE atom IS NOT NULL;

Suppose each entry in the BIG table is a JSON object with a '$.id' field 
that is a unique identifier and a '$.partlist' field that can be a deeply 
nested object. You want to find the id of every entry that contains one or 
more references to uuid '6fa5181e-5721-11e5-a04e-57f3d7b32808' anywhere 
in its '$.partlist'.

    SELECT DISTINCT json_extract(big.json,'$.id')
      FROM big, json_tree(big.json, '$.partlist')
     WHERE json_tree.key='uuid'
       AND json_tree.value='6fa5181e-5721-11e5-a04e-57f3d7b32808';



# 🍀 /56. Command-Line Shell (sqlite3.exe) 
                                   *cli_html*  *command-line shell*

01. Getting Started
                                                  [getting_started]
02. Double-click Startup On Windows
                                      [double_click_startup_on_windows]
03. Special commands to sqlite3 (dot-commands)
                            [special_commands_to_sqlite3_dot_commands_]
04. Rules for "dot-commands", SQL and More
                                [rules_for_dot_commands_sql_and_more]
04.1. Line Structure
                                                  [line_structure]
04.2. Dot-command arguments
                                           [dot_command_arguments]
04.3. Dot-command execution
                                            [dot_command_execution]
05. Changing Output Formats
                                            [changing_output_formats]
06. Querying the database schema
                                        [querying_the_database_schema]
07. Opening Database Files
                                            [opening_database_files]
08. Redirecting I/O
                                                  [redirecting_i_o]
08.1. Writing results to a file
                                          [writing_results_to_a_file]
08.2. Reading SQL from a file
                                           [reading_sql_from_a_file]
08.3. File I/O Functions
                                               [file_i_o_functions]
08.4. The edit() SQL function
                                             [the_edit_sql_function]
08.5. Importing files as CSV or other formats
                              [importing_files_as_csv_or_other_formats]
08.6. Export to CSV
                                                   [export_to_csv]
09. Accessing ZIP Archives As Database Files
                                [accessing_zip_archives_as_database_files]
09.1. How ZIP archive access is implemented
                                [how_zip_archive_access_is_implemented]
10. Converting An Entire Database To A Text File
                            [converting_an_entire_database_to_a_text_file]
11. Recover Data From a Corrupted Database
                                [recover_data_from_a_corrupted_database]
12. Loading Extensions
                                                [loading_extensions]
13. Cryptographic Hashes Of Database Content
                              [cryptographic_hashes_of_database_content]
14. Database Content Self-Tests
                                        [database_content_self_tests]
15. SQLite Archive Support
                                              [sqlite_archive_support]
15.1. SQLite Archive Create Command 
                                     [_sqlite_archive_create_command_]
15.2. SQLite Archive Extract Command 
                                    [_sqlite_archive_extract_command_]
15.3. SQLite Archive List Command 
                                      [_sqlite_archive_list_command_]
15.4. SQLite Archive Insert And Update Commands 
                           [_sqlite_archive_insert_and_update_commands_]
15.5. SQLite Archive Remove Command 
                                    [_sqlite_archive_remove_command_]
15.6. Operations On ZIP Archives 
                                       [_operations_on_zip_archives_]
15.7. SQL Used To Implement SQLite Archive Operations 
                        [_sql_used_to_implement_sqlite_archive_operations_]
16. SQL Parameters
                                                  [sql_parameters]
17. Index Recommendations (SQLite Expert)
                                  [index_recommendations_sqlite_expert_]
18. Working With Multiple Database Connections
                              [working_with_multiple_database_connections]
19. Miscellaneous Extension Features
                                    [miscellaneous_extension_features]
20. Other Dot Commands
                                              [other_dot_commands]
21. Using sqlite3 in a shell script
                                      [using_sqlite3_in_a_shell_script]
22. Marking The End Of An SQL Statement
                                [marking_the_end_of_an_sql_statement]
23. Command-line Options
                                              [command_line_options]
23.1. The --safe command-line option
                                       [the_safe_command_line_option]
23.2. The --unsafe-testing command-line option
                               [the_unsafe_testing_command_line_option]
23.3. The --utf8 command-line option
                                      [the_utf8_command_line_option]
24. Compiling the sqlite3 program from sources
                            [compiling_the_sqlite3_program_from_sources]
24.1. Do-It-Yourself Builds 
                                           [_do_it_yourself_builds_]

## 🐣 01. Getting Started
                                                  *getting_started*

The SQLite project provides a simple command-line program named
**sqlite3** (or **sqlite3.exe** on Windows)
that allows the user to manually enter and execute SQL
statements against an SQLite database or against a
<a href="#zipdb">ZIP archive</a>.  This document provides a brief
introduction on how to use the **sqlite3** program.

Start the **sqlite3** program by typing "sqlite3" at the
command prompt, optionally followed
by the name of the file that holds the SQLite database
(or <a href="#zipdb">ZIP archive</a>).  If the named
file does not exist, a new database file with the given name will be
created automatically.  If no database file is specified on the
command-line, a temporary database is created and automatically deleted when
the "sqlite3" program exits.

On startup, the **sqlite3** program will show a brief banner
message then prompt you to enter SQL.  Type in SQL statements (terminated
by a semicolon), press "Enter" and the SQL will be executed.

For example, to create a new SQLite database named "ex1"
with a single table named "tbl1", you might do this:

```sh
$ sqlite3 ex1
SQLite version 3.36.0 2021-06-18 18:36:39
Enter ".help" for usage hints.
sqlite> create table tbl1(one text, two int);
sqlite> insert into tbl1 values('hello!',10);
sqlite> insert into tbl1 values('goodbye', 20);
sqlite> select * from tbl1;
hello!|10
goodbye|20
sqlite>
```

Terminate the sqlite3 program by typing your system
End-Of-File character (usually a Control-D).  Use the interrupt
character (usually a Control-C) to stop a long-running SQL statement.

Make sure you type a semicolon at the end of each SQL command!
The sqlite3 program looks for a semicolon to know when your SQL command is
complete.  If you omit the semicolon, sqlite3 will give you a
continuation prompt and wait for you to enter more text to
complete the SQL command.  This feature allows you to
enter SQL commands that span multiple lines.  For example:


```sql
sqlite> CREATE TABLE tbl2 (
   ...>   f1 varchar(30) primary key,
   ...>   f2 text,
   ...>   f3 real
   ...> );
sqlite>
```

<a name="dblclick"></a>

## 🐣 02. Double-click Startup On Windows
                                      *double_click_startup_on_windows*

Windows users can double-click on the **sqlite3.exe** icon to cause
the command-line shell to pop-up a terminal window running SQLite.  However,
because double-clicking starts the sqlite3.exe without command-line arguments,
no database file will have been specified, so SQLite will use a temporary
database that is deleted when the session exits.
To use a persistent disk file as the database, enter the ".open" command
immediately after the terminal window starts up:

```sql
SQLite version 3.36.0 2021-06-18 18:36:39
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> .open ex1.db
sqlite>
```

The example above causes the database file named "ex1.db" to be opened
and used.  The "ex1.db" file is created if it does not previously exist.
You might want to
use a full pathname to ensure that the file is in the directory that you
think it is in.  Use forward-slashes as the directory separator character.
In other words use "c:/work/ex1.db", not "c:\work\ex1.db".

Alternatively, you can create a new database using the default temporary
storage, then save that database into a disk file using the ".save" command:

```sql
SQLite version 3.36.0 2021-06-18 18:36:39
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> ... many SQL commands omitted ...
sqlite> .save ex1.db
sqlite>
```

Be careful when using the ".save" command as it will overwrite any
preexisting database files having the same name without prompting for
confirmation.  As with the ".open" command, you might want to use a
full pathname with forward-slash directory separators to avoid ambiguity.

<a name="dotcmd"></a>

## 🐣 03. Special commands to sqlite3 (dot-commands)
                            *special_commands_to_sqlite3_dot_commands_*


Most of the time, sqlite3 just reads lines of input and passes them
on to the SQLite library for execution.
But input lines that begin with a dot (".")
are intercepted and interpreted by the sqlite3 program itself.
These "dot commands" are typically used to change the output format
of queries, or to execute certain prepackaged query statements.
There were originally just a few dot commands, but over the years
many new features have accumulated so that today there are over 60.



For a listing of the available dot commands, you can enter ".help" with
no arguments.  Or enter ".help TOPIC" for detailed information about TOPIC.
The list of available dot-commands follows:


```sql
sqlite> .help
.archive ...             Manage SQL archives
.auth ON|OFF             Show authorizer callbacks
.backup ?DB? FILE        Backup DB (default "main") to FILE
.bail on|off             Stop after hitting an error.  Default OFF
.binary on|off           Turn binary output on or off.  Default OFF
.cd DIRECTORY            Change the working directory to DIRECTORY
.changes on|off          Show number of rows changed by SQL
.check GLOB              Fail if output since .testcase does not match
.clone NEWDB             Clone data into NEWDB from the existing database
.connection [close] [#]  Open or close an auxiliary database connection
.databases               List names and files of attached databases
.dbconfig ?op? ?val?     List or change sqlite3_db_config() options
.dbinfo ?DB?             Show status information about the database
.dump ?OBJECTS?          Render database content as SQL
.echo on|off             Turn command echo on or off
.eqp on|off|full|...     Enable or disable automatic EXPLAIN QUERY PLAN
.excel                   Display the output of next command in spreadsheet
.exit ?CODE?             Exit this program with return-code CODE
.expert                  EXPERIMENTAL. Suggest indexes for queries
.explain ?on|off|auto?   Change the EXPLAIN formatting mode.  Default: auto
.filectrl CMD ...        Run various sqlite3_file_control() operations
.fullschema ?--indent?   Show schema and the content of sqlite_stat tables
.headers on|off          Turn display of headers on or off
.help ?-all? ?PATTERN?   Show help text for PATTERN
.import FILE TABLE       Import data from FILE into TABLE
.imposter INDEX TABLE    Create imposter table TABLE on index INDEX
.indexes ?TABLE?         Show names of indexes
.limit ?LIMIT? ?VAL?     Display or change the value of an SQLITE_LIMIT
.lint OPTIONS            Report potential schema issues.
.load FILE ?ENTRY?       Load an extension library
.log FILE|off            Turn logging on or off.  FILE can be stderr/stdout
.mode MODE ?TABLE?       Set output mode
.nonce STRING            Disable safe mode for one command if the nonce matches
.nullvalue STRING        Use STRING in place of NULL values
.once ?OPTIONS? ?FILE?   Output for the next SQL command only to FILE
.open ?OPTIONS? ?FILE?   Close existing database and reopen FILE
.output ?FILE?           Send output to FILE or stdout if FILE is omitted
.parameter CMD ...       Manage SQL parameter bindings
.print STRING...         Print literal STRING
.progress N              Invoke progress handler after every N opcodes
.prompt MAIN CONTINUE    Replace the standard prompts
.quit                    Stop interpreting input stream, exit if primary.
.read FILE               Read input from FILE
.recover                 Recover as much data as possible from corrupt db.
.restore ?DB? FILE       Restore content of DB (default "main") from FILE
.save FILE               Write in-memory database into FILE
.scanstats on|off        Turn sqlite3_stmt_scanstatus() metrics on or off
.schema ?PATTERN?        Show the CREATE statements matching PATTERN
.selftest ?OPTIONS?      Run tests defined in the SELFTEST table
.separator COL ?ROW?     Change the column and row separators
.session ?NAME? CMD ...  Create or control sessions
.sha3sum ...             Compute a SHA3 hash of database content
.shell CMD ARGS...       Run CMD ARGS... in a system shell
.show                    Show the current values for various settings
.stats ?ARG?             Show stats or turn stats on or off
.system CMD ARGS...      Run CMD ARGS... in a system shell
.tables ?TABLE?          List names of tables matching LIKE pattern TABLE
.testcase NAME           Begin redirecting output to 'testcase-out.txt'
.testctrl CMD ...        Run various sqlite3_test_control() operations
.timeout MS              Try opening locked tables for MS milliseconds
.timer on|off            Turn SQL timer on or off
.trace ?OPTIONS?         Output each SQL statement as it is run
.vfsinfo ?AUX?           Information about the top-level VFS
.vfslist                 List all available VFSes
.vfsname ?AUX?           Print the name of the VFS stack
.width NUM1 NUM2 ...     Set minimum column widths for columnar output
sqlite>
```

<a name="dotrules"></a>

## 🐣 04. Rules for "dot-commands", SQL and More
                                *rules_for_dot_commands_sql_and_more*

### 04.1. Line Structure
                                                  *line_structure*

The CLI's input is parsed into a sequence consisting of:
  
1. SQL statements;
2. dot-commands; or
3. CLI comments

SQL statements are free-form, and can be spread across multiple lines,
  with whitespace or SQL comments embedded anywhere.
  They are terminated by either a ';' character at the end of an input line,
  or a '/' character or the word "go" on a line by itself.
  When not at the end of an input line, the ';' character
  acts to separate SQL statements.
  Trailing whitespace is ignored for purposes of termination.
A dot-command has a more restrictive structure:

-  It must begin with its "." at the left margin
    with no preceding whitespace.
-  It must be entirely contained on a single input line.
-  It cannot occur in the middle of an ordinary SQL
    statement.  In other words, it cannot occur at a
    continuation prompt.
-  There is no comment syntax for dot-commands.

The CLI also accepts whole-line comments that
begin with a '#' character and extend to the end of the line.
There can be no with whitespace prior to the '#'.

### 04.2. Dot-command arguments
                                           *dot_command_arguments*
The arguments passed to dot-commands are parsed from the command tail,
  per these rules:
<ol>
  <li>The trailing newline and any other trailing whitespace is discarded;
  <li>Whitespace immediately following the dot-command name, or any argument
    input end bound is discarded;
  <li>An argument input begins with any non-whitespace character;
  <li>An argument input ends with a character which
    depends upon its leading character thusly:
  
  <li>for a leading single-quote ('), a single-quote acts
      as the end delimiter;
  <li>for a leading double-quote ("), an unescaped double-quote
      acts as the end delimiter;
  <li>for any other leading character, the end delimiter is
      any whitespace; and
  <li>the command tail end acts as the end delimiter for any argument;

  <li>Within a double-quoted argument input, a backslash-escaped double-quote
    is part of the argument rather than its terminating quote;
  <li>Within a double-quoted argument, traditional C-string literal, backslash
    escape sequence translation is done; and
  <li>Argument input delimiters (the bounding quotes or whitespace)
    are discarded to yield the passed argument.
</ol>

### 04.3. Dot-command execution
                                            *dot_command_execution*
The dot-commands
are interpreted by the sqlite3.exe command-line program, not by
SQLite itself.  So none of the dot-commands will work as an argument
to SQLite interfaces such as <a href="c3ref/prepare.html">sqlite3_prepare()</a> or <a href="c3ref/exec.html">sqlite3_exec()</a>.

<a name="dotmode"></a>

## 🐣 05. Changing Output Formats
                                            *changing_output_formats*

The sqlite3 program is able to show the results of a query
in 14 different output formats:

    ascii box csv column html insert json line list markdown quote table tabs tcl

You can use the ".mode" dot command to switch between these output
formats.
The default output mode is "list".  In
list mode, each row of a query result is written on one line of
output and each column within that row is separated by a specific
separator string.  The default separator is a pipe symbol ("|").
List mode is especially useful when you are going to send the output
of a query to another program (such as AWK) for additional processing.

```sql
sqlite> .mode list
sqlite> select * from tbl1;
hello!|10
goodbye|20
sqlite>
```

Type ".mode" with no arguments to show the current mode:

```sql
sqlite> .mode
current output mode: list
sqlite>
```

Use the ".separator" dot command to change the separator.
For example, to change the separator to a comma and
a space, you could do this:

```sql
sqlite> .separator ", "
sqlite> select * from tbl1;
hello!, 10
goodbye, 20
sqlite>
```

The next ".mode" command might reset the ".separator" back to some
default value (depending on its arguments).
So you will likely need to repeat the ".separator" command whenever you
change modes if you want to continue using a non-standard separator.

<a name="dotmodequote"></a>

In "quote" mode, the output is formatted as SQL literals.  Strings are
enclosed in single-quotes and internal single-quotes are escaped by doubling.
Blobs are displayed in hexadecimal blob literal notation (Ex: x'abcd').
Numbers are displayed as ASCII text and NULL values are shown as "NULL".
All columns are separated from each other by a comma (or whatever alternative
character is selected using ".separator").

```sql
sqlite> .mode quote
sqlite> select * from tbl1;
'hello!',10
'goodbye',20
sqlite>
```

In "line" mode, each column in a row of the database
is shown on a line by itself.  Each line consists of the column
name, an equal sign and the column data.  Successive records are
separated by a blank line.  Here is an example of line mode
output:

```sql
sqlite> .mode line
sqlite> select * from tbl1;
one = hello!
two = 10

one = goodbye
two = 20
sqlite>
```

<a name="clmnr"></a>


In column mode, each record is shown on a separate line with the
data aligned in columns.  For example:

```sql
sqlite> .mode column
sqlite> select * from tbl1;
one       two
--------  ---
hello!    10
goodbye   20
sqlite>
```

In "column" mode (and also in "box", "table", and "markdown" modes)
the width of columns adjusts automatically.  But you can override this,
providing a speicified width for each column using the ".width" command.
The arguments to ".width" are integers which are the number of
characters to devote to each column.  Negative numbers mean right-justify.
Thus:

```sql
sqlite> .width 12 -6
sqlite> select * from tbl1;
one              two
------------  ------
hello!            10
goodbye           20
sqlite>
```

A width of 0 means the column width is chosen automatically.
Unspecified column widths become zero.  Hence, the command
".width" with no arguments resets all column widths to zero and
hence causes all column widths to be determined automatically.

The "column" mode is a tabular output format.  Other
tabular output formats are "box", "markdown", and "table":

```sql
sqlite> .width
sqlite> .mode markdown
sqlite> select * from tbl1;
|   one   | two |
|---------|-----|
| hello!  | 10  |
| goodbye | 20  |
sqlite> .mode table
sqlite> select * from tbl1;
+---------+-----+
|   one   | two |
+---------+-----+
| hello!  | 10  |
| goodbye | 20  |
+---------+-----+
sqlite> .mode box
sqlite> select * from tbl1;
┌─────────┬─────┐
│   one   │ two │
├─────────┼─────┤
│ hello!  │ 10  │
│ goodbye │ 20  │
└─────────┴─────┘
sqlite>
```

<a name="wrap1"></a>


The columnar modes accept some addition options to control formatting.
The "--wrap N" option (where N is an integer) causes columns
to wrap text that is longer than N characters.  Wrapping is disabled if
N is zero.

```sql
sqlite> insert into tbl1 values('The quick fox jumps over a lazy brown dog.',90);
sqlite> .mode box --wrap 30
sqlite> select * from tbl1 where two>50;
┌────────────────────────────────┬─────┐
│              one               │ two │
├────────────────────────────────┼─────┤
│ The quick fox jumps over a laz │ 90  │
│ y brown dog.                   │     │
└────────────────────────────────┴─────┘
sqlite>
```

Wrapping happens after exactly N characters,
which might be in the middle of a word.
To wrap at a word boundary, add the "--wordwrap on" option
(or just "-ww" for short):

```sql
sqlite> .mode box --wrap 30 -ww
sqlite> select * from tbl1 where two>50;
┌─────────────────────────────┬─────┐
│             one             │ two │
├─────────────────────────────┼─────┤
│ The quick fox jumps over a  │ 90  │
│ lazy brown dog.             │     │
└─────────────────────────────┴─────┘
sqlite>
```

The "--quote" option causes the results in each column to be
quoted like an SQL literal, as in the "quote" mode.  See the on-line
help for additional options.

<a name="qbox"></a>

The command ".mode box --wrap 60 --quote" is so useful for general-purpose
database queries that it is given its own alias.  Instead of typing out
that whole 27-character command, you can just say ".mode qbox".

Another useful output mode is "insert".  In insert mode, the output
is formatted to look like SQL INSERT statements.  Use insert
mode to generate text that can later be used to input data into a
different database.

When specifying insert mode, you have to give an extra argument
which is the name of the table to be inserted into.  For example:

```sql
sqlite> .mode insert new_table
sqlite> select * from tbl1 where two<50;
INSERT INTO "new_table" VALUES('hello',10);
INSERT INTO "new_table" VALUES('goodbye',20);
sqlite>
```


Other output modes include "csv", "json", and "tcl".  Try these
yourself to see what they do.


<a name="schema"></a>

## 🐣 06. Querying the database schema
                                        *querying_the_database_schema*

The sqlite3 program provides several convenience commands that
are useful for looking at the schema of the database.  There is
nothing that these commands do that cannot be done by some other
means.  These commands are provided purely as a shortcut.

<a name="dtables"></a>

For example, to see a list of the tables in the database, you
can enter ".tables".


```sql
sqlite> .tables
tbl1 tbl2
sqlite>
```


The ".tables" command is similar to setting list mode then
executing the following query:

```sql
SELECT name FROM sqlite_schema
WHERE type IN ('table','view') AND name NOT LIKE 'sqlite_%'
ORDER BY 1
```

But the ".tables" command does more.  It queries the <a href="schematab.html">sqlite_schema</a> table
for all <a href="lang_attach.html">attached</a> databases, not just the primary database.  And it arranges
its output into neat columns.

The ".indexes" command works in a similar way to list all of
the indexes. If the ".indexes" command is given an argument which is
the name of a table, then it shows just indexes on that table.

<a name="dschema"></a>

The ".schema" command shows the complete schema for the database,
or for a single table if an optional tablename argument is provided:

```sql
sqlite> .schema
create table tbl1(one varchar(10), two smallint)
CREATE TABLE tbl2 (
  f1 varchar(30) primary key,
  f2 text,
  f3 real
);
sqlite> .schema tbl2
CREATE TABLE tbl2 (
  f1 varchar(30) primary key,
  f2 text,
  f3 real
);
sqlite>
```


The ".schema" command is roughly the same as setting
list mode, then entering the following query:

```sql
SELECT sql FROM sqlite_schema
ORDER BY tbl_name, type DESC, name
```

As with ".tables", the ".schema" command shows the schema for
all <a href="lang_attach.html">attached</a> databases.  If you only want to see the schema for
a single database (perhaps "main") then you can add an argument
to ".schema" to restrict its output:

```sql
sqlite> .schema main.*
```

The ".schema" command can be augmented with the "--indent" option,
in which case it tries to reformat the various CREATE statements of
the schema so that they are more easily readable by humans.

<a name="dotdatabases"></a>

The ".databases" command shows a list of all databases open in
the current connection.  There will always be at least 2.  The first
one is "main", the original database opened.  The second is "temp",
the database used for temporary tables. There may be additional
databases listed for databases attached using the ATTACH statement.
The first output column is the name the database is attached with,
and the second result column is the filename of the external file.
There may be a third result column which will be either "'r/o'" or
"'r/w'" depending on whether the database file is read-only or read-write.
And there might be a fourth result column showing the result of
<a href="c3ref/txn_state.html">sqlite3_txn_state()</a> for that database file.

```sql
sqlite> .databases
```

<a name="fullschema"></a>

The ".fullschema" dot-command works like the ".schema" command in
that it displays the entire database schema.  But ".fullschema" also
includes dumps of the statistics tables "sqlite_stat1", "sqlite_stat3",
and "sqlite_stat4", if they exist.  The ".fullschema" command normally
provides all of the information needed to exactly recreate a query
plan for a specific query.  When reporting suspected problems with
the SQLite query planner to the SQLite development team, developers
are requested to provide the complete ".fullschema" output as part
of the trouble report.  Note that the sqlite_stat3 and sqlite_stat4
tables contain samples of index entries and so might contain sensitive
data, so do not send the ".fullschema" output of a proprietary database
over a public channel.

<a name="dotopen"></a>

## 🐣 07. Opening Database Files
                                            *opening_database_files*

The ".open" command opens a new database connection, after first closing the
previously opened database command.  In its simplest form, the ".open" command merely
invokes <a href="c3ref/open.html">sqlite3_open()</a> on the file named as its argument.  Use the name ":memory:"
to open a new in-memory database that disappears when the CLI exits or when the
".open" command is run again.
Or use no name to open a private, temporary on-disk database which
will also disappear upon exit or use of ".open".

If the --new option is included with ".open", then the database is reset prior
to being opened.  Any prior data is destroyed.  This is a destructive overwrite of
prior data and no confirmation is requested, so use this option carefully.

The --readonly option opens the database in read-only mode.  Write will be
prohibited.

The --deserialize option causes the entire content of the on-disk file to be
read into memory and then opened as an in-memory database using the
<a href="c3ref/deserialize.html">sqlite3_deserialize()</a> interface.  This will, of course, require a lot of memory
if you have a large database.  Also, any changes you make to the database will not
be saved back to disk unless you explicitly save them using the ".save" or ".backup"
commands.

The --append option causes the SQLite database to be appended to an existing
file rather than working as a stand-alone file.  See the
<a href="https://www.sqlite.org/src/file/ext/misc/appendvfs.c">appendvfs extension</a> for
more information.

The --zip option causes the specified input file to be interpreted as a ZIP archive
instead of as an SQLite database file.

The --hexdb option causes the database content to be to be read from subsequent
lines of input in a hex format, rather than from a separate file on disk.
The "dbtotxt" command-line tool can be used to generate
the appropriate text for a database.  The --hexdb option is intended for use by the
SQLite developers for testing purposes.  We do not know of any use cases for this
option outside of internal SQLite testing and development.

## 🐣 08. Redirecting I/O
                                                  *redirecting_i_o*

<a name="dotoutput"></a>

### 08.1. Writing results to a file
                                          *writing_results_to_a_file*

By default, sqlite3 sends query results to standard output.  You
can change this using the ".output" and ".once" commands.  Just put
the name of an output file as an argument to .output and all subsequent
query results will be written to that file.  Or use the .once command
instead of .output and output will only be redirected for the single next
command before reverting to the console.  Use .output with no arguments to
begin writing to standard output again.  For example:

```sql
sqlite> .mode list
sqlite> .separator |
sqlite> .output test_file_1.txt
sqlite> select * from tbl1;
sh> .exit
$ cat test_file_1.txt
hello|10
goodbye|20
$
```

If the first character of the ".output" or ".once" filename is a pipe
symbol ("|") then the remaining characters are treated as a command and the
output is sent to that command.  This makes it easy to pipe the results
of a query into some other process.  For example, the
"open -f" command on a Mac opens a text editor to display the content that
it reads from standard input.  So to see the results of a query
in a text editor, one could type:

```sql
sqlite> .once | open -f
sqlite> SELECT * FROM bigTable;
```

If the ".output" or ".once" commands have an argument of "-e" then
output is collected into a temporary file and the system text editor is
invoked on that text file.  Thus, the command ".once -e" achieves the
same result as ".once '|open -f'" but with the benefit of being portable
across all systems.

If the ".output" or ".once" commands have a "-x" argument, that causes
them to accumulate output as Comma-Separated-Values (CSV) in a temporary
file, then invoke the default system utility for viewing CSV files
(usually a spreadsheet program) on the result.  This is a quick way of
sending the result of a query to a spreadsheet for easy viewing:

```sql
sqlite> .once -x
sqlite> SELECT * FROM bigTable;
```

<a name="dotexcel"></a>

The ".excel" command is an alias for ".once -x".  It does exactly the same
thing.

<a name="dotread"></a>

### 08.2. Reading SQL from a file
                                           *reading_sql_from_a_file*

In interactive mode, sqlite3 reads input text (either SQL statements
or <a href="cli.html#dotcmd">dot-commands</a>) from the keyboard.  You can also redirect input from
a file when you launch sqlite3, of course, but then you do not have the
ability to interact with the program.  Sometimes it is useful to run an
SQL script contained in a file entering other commands from the command-line.
For this, the ".read" dot-command is provided.

The ".read" command takes a single argument which is (usually) the name
of a file from which to read input text.

```sql
sqlite> .read myscript.sql
```

The ".read" command temporarily stops reading from the keyboard and instead
takes its input from the file named.  Upon reaching the end of the file,
input reverts back to the keyboard.  The script file may contain dot-commands,
just like ordinary interactive input.

If the argument to ".read" begins with the "|" character, then instead of
opening the argument as a file, it runs the argument (without the leading "|")
as a command, then uses the output of that command as its input.  Thus, if you
have a script that generates SQL, you can execute that SQL directly using
a command similar to the following:

```sql
sqlite> .read |myscript.bat
```


<a name="fileio"></a>

### 08.3. File I/O Functions
                                               *file_i_o_functions*

The command-line shell adds two <a href="appfunc.html">application-defined SQL functions</a> that
facilitate reading content from a file into a table column, and writing the
content of a column into a file, respectively.

The readfile(X) SQL function reads the entire content of the file named
X and returns that content as a BLOB.  This can be used to load content into
a table.  For example:

```sql
sqlite> CREATE TABLE images(name TEXT, type TEXT, img BLOB);
sqlite> INSERT INTO images(name,type,img*
   ...>   VALUES('icon','jpeg',readfile('icon.jpg'));
```

The writefile(X,Y) SQL function write the blob Y into the file named X
and returns the number of bytes written.  Use this function to extract
the content of a single table column into a file.  For example:

```sql
sqlite> SELECT writefile('icon.jpg',img) FROM images WHERE name='icon';
```

Note that the readfile(X) and writefile(X,Y) functions are extension
functions and are not built into the core SQLite library.  These routines
are available as a <a href="loadext.html">loadable extension</a> in the
<a href="http://www.sqlite.org/src/artifact?ci=trunk&filename=ext/misc/fileio.c">ext/misc/fileio.c</a>
source file in the <a href="download.html#srctree">SQLite source code repositories</a>.

<a name="editfunc"></a>

### 08.4. The edit() SQL function
                                             *the_edit_sql_function*

The CLI has another built-in SQL function named edit().  Edit() takes
one or two arguments.  The first argument is a value - often a large
multi-line string to be edited.  The second argument is the invocation
for a text editor. (It may include options to affect the editor's
behavior.) If the second argument is omitted, the VISUAL environment
variable is used.  The edit() function writes its first argument into a
temporary file, invokes the editor on the temporary file, rereads the file
back into memory after the editor is done, then returns the edited text.

The edit() function can be used to make changes to large text
values.  For example:

```sql
sqlite> UPDATE docs SET body=edit(body) WHERE name='report-15';
```

In this example, the content of the docs.body field for the entry where
docs.name is "report-15" will be sent to the editor.  After the editor returns,
the result will be written back into the docs.body field.

The default operation of edit() is to invoke a text editor.  But by using
an alternative edit program in the second argument, you can also get it to edit
images or other non-text resources.  For example, if you want to modify a JPEG
image that happens to be stored in a field of a table, you could run:

```sql
sqlite> UPDATE pics SET img=edit(img,'gimp') WHERE id='pic-1542';
```

The edit program can also be used as a viewer, by simply ignoring the
return value.  For example, to merely look at the image above, you might run:

```sql
sqlite> SELECT length(edit(img,'gimp')) WHERE id='pic-1542';
```

<a name="csv"></a>

### 08.5. Importing files as CSV or other formats
                              *importing_files_as_csv_or_other_formats*

Use the ".import" command to import CSV (comma separated value)
or similarly delimited data into an SQLite table.
The ".import" command takes two arguments which are the
source from which data is to be read and the name of the
SQLite table into which the data is to be inserted. The source argument
is the name of a file to be read or, if it begins with a "|" character,
it specifies a command which will be run to produce the input data.

Note that it may be important to set the "mode" before running the
 ".import" command.  This is prudent to prevent the command-line shell
from trying to interpret the input file text as some format other than
how the file is structured. If the --csv or --ascii options are used,
they control import input delimiters. Otherwise, the delimiters are
those in effect for the current output mode.

To import into a table not in the "main" schema, the --schema option
may be used to specify that the table is in some other schema. This can
be useful for ATTACH'ed databases or to import into a TEMP table.

When .import is run, its treatment of the first input row depends
upon whether the target table already exists. If it does not exist,
the table is automatically created and the content of the first input
row is used to set the name of all the columns in the table. In this
case, the table data content is taken from the second and subsequent
input rows. If the target table already exists, every row of the
input, including the first, is taken to be actual data content.  If
the input file contains an initial row of column labels, you can make
the .import command skip that initial row using the "--skip 1" option.

Here is an example usage, loading a pre-existing temporary table
from a CSV file which has column names in its first row:

```sql
sqlite> .import --csv --skip 1 --schema temp C:/work/somedata.csv tab1
```

While reading input data in modes other than 'ascii', ".import"
interprets input as records composed of fields according to the RFC 4180
specification with this exception: The input record and field separators
are as set by the mode or by use of the .separator command. Fields are
always subject to quote removal to reverse quoting done per RFC 4180,
except in ascii mode.

To import data with arbitrary delimiters and no quoting,
first set ascii mode (".mode ascii"), then set the field
and record delimiters using the ".separators" command. This
will suppress dequoting. Upon ".import", the data will be split
into fields and records according to the delimiters so specified.

<a name="csvout"></a>

### 08.6. Export to CSV
                                                   *export_to_csv*

To export an SQLite table (or part of a table) as CSV, simply set
the "mode" to "csv" and then run a query to extract the desired rows
of the table. The output will formatted as CSV per RFC 4180.

```sql
sqlite> .headers on
sqlite> .mode csv
sqlite> .once c:/work/dataout.csv
sqlite> SELECT * FROM tab1;
sqlite> .system c:/work/dataout.csv
```

In the example above, the ".headers on" line causes column labels to
be printed as the first row of output.  This means that the first row of
the resulting CSV file will contain column labels.  If column labels are
not desired, set ".headers off" instead. (The ".headers off" setting is
the default and can be omitted if the headers have not been previously
turned on.)

The line ".once FILENAME" causes all query output to go into
the named file instead of being printed on the console.  In the example
above, that line causes the CSV content to be written into a file named
"C:/work/dataout.csv".

The final line of the example (the ".system c:/work/dataout.csv")
has the same effect as double-clicking on the c:/work/dataout.csv file
in windows.  This will typically bring up a spreadsheet program to display
the CSV file.

That command only works as written on Windows.
The equivalent line on a Mac would be:

```sql
sqlite> .system open dataout.csv
```

On Linux and other unix systems you will need to enter something like:


```sql
sqlite> .system xdg-open dataout.csv
```

<a name="exexcel*"></a>

<h3 id="_export_to_excel_">8.6.1.  Export to Excel </h3>

To simplify export to a spreadsheet, the CLI provides the
".excel" command which captures the output of a single query and sends
that output to the default spreadsheet program on the host computer.
Use it like this:

```sql
sqlite> .excel
sqlite> SELECT * FROM tab;
```


The command above writes the output of the query as CSV into a temporary
file, invokes the default handler for CSV files (usually the preferred
spreadsheet program such as Excel or LibreOffice), then deletes the
temporary file.  This is essentially a short-hand method of doing
the sequence of ".csv", ".once", and ".system" commands described above.


The ".excel" command is really an alias for ".once -x".  The -x option
to .once causes it to writes results as CSV into a temporary file that
is named with a ".csv" suffix, then invoke the systems default handler
for CSV files.


There is also a ".once -e" command which works similarly, except that
it names the temporary file with a ".txt" suffix so that the default
text editor for the system will be invoked, instead of the default
spreadsheet.

<a name="extsv*"></a>

<h3 id="_export_to_tsv_tab_separated_values_">8.6.2.  Export to TSV (tab separated values)</h3>


Exporting to pure TSV, without any field quoting, can be done by
entering ".mode tabs" before running a query. However, the output
will not be read correctly in tabs mode by the ".import" command
if it contains doublequote characters. To get TSV quoted per
RFC 4180 so that it can be input in tabs mode with ".import",
first enter ".mode csv", then enter '.separator "\t"'
before running a query.

<a name="zipdb"></a>

## 🐣 09. Accessing ZIP Archives As Database Files
                                *accessing_zip_archives_as_database_files*

In addition to reading and writing SQLite database files,
the **sqlite3** program will also read and write ZIP archives.
Simply specify a ZIP archive filename in place of an SQLite database
filename on the initial command line, or in the ".open" command,
and **sqlite3** will automatically detect that the file is a
ZIP archive instead of an SQLite database and will open it as such.
This works regardless of file suffix.  So you can open JAR, DOCX,
and ODP files and any other file format that is really a ZIP
archive and SQLite will read it for you.

A ZIP archive appears to be a database containing a single table
with the following schema:

```sql
CREATE TABLE zip(
  name,     // Name of the file
  mode,     // Unix-style file permissions
  mtime,    // Timestamp, seconds since 1970
  sz,       // File size after decompression
  rawdata,  // Raw compressed file data
  data,     // Uncompressed file content
  method    // ZIP compression method code
);
```

So, for example, if you wanted to see the compression efficiency
(expressed as the size of the compressed content relative to the
original uncompressed file size) for all files in the ZIP archive,
sorted from most compressed to least compressed, you could run a
query like this:

```sql
sqlite> SELECT name, (100.0*length(rawdata))/sz FROM zip ORDER BY 2;
```

Or using <a href="cli.html#fileio">file I/O functions</a>, you can extract elements of the
ZIP archive:

```sql
sqlite> SELECT writefile(name,content) FROM zip
   ...> WHERE name LIKE 'docProps/%';
```

### 09.1. How ZIP archive access is implemented
                                *how_zip_archive_access_is_implemented*

The command-line shell uses the <a href="zipfile.html">Zipfile virtual table</a> to
access ZIP archives.  You can see this by running the ".schema"
command when a ZIP archive is open:

```sql
sqlite> .schema
CREATE VIRTUAL TABLE zip USING zipfile('document.docx')
/* zip(name,mode,mtime,sz,rawdata,data,method) */;
```

When opening a file, if the command-line client discovers that the
file is ZIP archive instead of an SQLite database, it actually opens
an <a href="inmemorydb.html">in-memory database</a> and then in that in-memory database it creates
an instance of the <a href="zipfile.html">Zipfile virtual table</a> that is attached to the
ZIP archive.

The special processing for opening ZIP archives is a trick of the
command-line shell, not the core SQLite library.  So if you want to
open a ZIP archive as a database in your application, you will need to
activate the <a href="zipfile.html">Zipfile virtual table</a> module then run an appropriate
<a href="lang_createvtab.html">CREATE VIRTUAL TABLE</a> statement.


<a name="dump"></a>

## 🐣 10. Converting An Entire Database To A Text File
                            *converting_an_entire_database_to_a_text_file*

Use the ".dump" command to convert the entire contents of a
database into a single UTF-8 text file.  This file can be converted
back into a database by piping it back into **sqlite3**.

A good way to make an archival copy of a database is this:


```sh
$ sqlite3 ex1 .dump | gzip -c >ex1.dump.gz
```


This generates a file named **ex1.dump.gz** that contains everything
you need to reconstruct the database at a later time, or on another
machine.  To reconstruct the database, just type:


```sh
$ zcat ex1.dump.gz | sqlite3 ex2
```


The text format is pure SQL so you
can also use the .dump command to export an SQLite database
into other popular SQL database engines.  Like this:


```sh
$ createdb ex2
$ sqlite3 ex1 .dump | psql ex2
```

<a name="recover"></a>

## 🐣 11. Recover Data From a Corrupted Database
                                *recover_data_from_a_corrupted_database*

Like the ".dump" command, ".recover" attempts to convert the entire
contents of a database file to text. The difference is that instead of
reading data using the normal SQL database interface, ".recover"
attempts to reassemble the database based on data extracted directly from
as many database pages as possible. If the database is corrupt, ".recover"
is usually able to recover data from all uncorrupted parts of the database,
whereas ".dump" stops when the first sign of corruption is encountered.

If the ".recover" command recovers one or more rows that it cannot
attribute to any database table, the output script creates a "lost_and_found"
table to store the orphaned rows. The schema of the lost_and_found
table is as follows:

```sql
CREATE TABLE lost_and_found(
    rootpgno INTEGER,             -- root page of tree pgno is a part of
    pgno INTEGER,                 -- page number row was found on
    nfield INTEGER,               -- number of fields in row
    id INTEGER,                   -- value of rowid field, or NULL
    c0, c1, c2, c3...             -- columns for fields of row
);
```

The "lost_and_found" table contains one row for each orphaned row recovered
from the database. Additionally, there is one row for each recovered index
entry that cannot be attributed to any SQL index. This is because, in an
SQLite database, the same format is used to store SQL index entries and
WITHOUT ROWID table entries.

| Column   | Contents |
| rootpgno  | Even though it may not be possible to attribute the
      row to a specific database table, it may be part of a tree structure
      within the database file. In this case, the root page number of that
      tree structure is stored in this column. Or, if the page the row was
      found on is not part of a tree structure, this column stores a copy of
      the value in column "pgno" - the page number of the page the row was
      found on. In many, although not all, cases, all rows in the
      lost_and_found table with the same value in this column belong to the
      same table.
| pgno  |  The page number of the page on which this row was found.
| nfield |  The number of fields in this row.
| id    |  If the row comes from a WITHOUT ROWID table, this column
      contains NULL. Otherwise, it contains the 64-bit integer rowid value for
      the row.
| c0, c1, c2... |  The values for each column of the row
      are stored in these columns. The ".recover" command creates the
      lost_and_found table with as many columns as required by the longest
      orphaned row.

If the recovered database schema already contains a table named
"lost_and_found", the ".recover" command uses the name "lost_and_found0". If
the name "lost_and_found0" is also already taken, "lost_and_found1", and so
on. The default name "lost_and_found" may be overridden by invoking ".recover"
with the --lost-and-found switch. For example, to have the output script call
the table "orphaned_rows":

```sql
sqlite> .recover --lost-and-found orphaned_rows
```

<a name="dotload"></a>

## 🐣 12. Loading Extensions
                                                *loading_extensions*

You can add new custom <a href="appfunc.html">application-defined SQL functions</a>,
<a href="datatype3.html#collation">collating sequences</a>, <a href="vtab.html">virtual tables</a>, and <a href="vfs.html">VFSes</a> to the command-line
shell at run-time using the ".load" command.  First, build the
extension as a DLL or shared library (as described in the
<a href="loadext.html">Run-Time Loadable Extensions</a> document) then type:

```sql
sqlite> .load /path/to/my_extension
```

Note that SQLite automatically adds the appropriate extension suffix
(".dll" on windows, ".dylib" on Mac, ".so" on most other unixes) to the
extension filename.  It is generally a good idea to specify the full
pathname of the extension.

SQLite computes the entry point for the extension based on the extension
filename.  To override this choice, simply add the name of the extension
as a second argument to the ".load" command.

Source code for several useful extensions can be found in the ext/misc
subdirectory of the SQLite source tree.  You can use these extensions
as-is, or as a basis for creating your own custom extensions to address
your own particular needs.

http://www.sqlite.org/src/tree?name=ext/misc&ci=trunk

<a name="sha3sum"></a>

## 🐣 13. Cryptographic Hashes Of Database Content
                              *cryptographic_hashes_of_database_content*

The ".sha3sum" dot-command computes a
<a href="https://en.wikipedia.org/wiki/SHA-3">SHA3</a> hash of the content
of the database.  To be clear, the hash is computed over the database content,
not its representation on disk.  This means, for example, that a <a href="lang_vacuum.html">VACUUM</a>
or similar data-preserving transformation does not change the hash.

The ".sha3sum" command supports options "--sha3-224", "--sha3-256",
"--sha3-384", and "--sha3-512" to define which variety of SHA3 to use
for the hash.  The default is SHA3-256.

The database schema (in the <a href="schematab.html">sqlite_schema</a> table) is not normally
included in the hash, but can be added by the "--schema" option.

The ".sha3sum" command takes a single optional argument which is a
<a href="lang_expr.html#like">LIKE</a> pattern.  If this option is present, only tables whose names match
the <a href="lang_expr.html#like">LIKE</a> pattern will be hashed.

The ".sha3sum" command is implemented with the help of the
<a href="https://www.sqlite.org/src/file/ext/misc/shathree.c">extension function "sha3_query()"</a>
that is included with the command-line shell.

<a name="selftest"></a>

## 🐣 14. Database Content Self-Tests
                                        *database_content_self_tests*

The ".selftest" command attempts to verify that a database is
intact and is not corrupt.
The .selftest command looks for a table in schema named "selftest"
and defined as follows:

```sql
CREATE TABLE selftest(
  tno INTEGER PRIMARY KEY,  -- Test number
  op TEXT,                  -- 'run' or 'memo'
  cmd TEXT,                 -- SQL command to run, or text of "memo"
  ans TEXT                  -- Expected result of the SQL command
);
```

The .selftest command reads the rows of the selftest table in
selftest.tno order.
For each 'memo' row, it writes the text in 'cmd' to the output.  For
each 'run' row, it runs the 'cmd' text as SQL and compares the result
to the value in 'ans', and shows an error message if the results differ.

If there is no selftest table, the ".selftest" command runs
<a href="pragma.html#pragma_integrity_check">PRAGMA integrity_check</a>.

The ".selftest --init" command creates the selftest table if it
does not already exists, then appends entries that check the SHA3
hash of the content of all tables.  Subsequent runs of ".selftest"
will verify that the database has not been changed in any way.  To
generate tests to verify that a subset of the tables is unchanged,
simply run ".selftest --init" then <a href="lang_delete.html">DELETE</a> the selftest rows that
refer to tables that are not constant.

<a name="sqlar"></a>

## 🐣 15. SQLite Archive Support
                                              *sqlite_archive_support*

The ".archive" dot-command and the "-A" command-line option
provide built-in support for the
<a href="sqlar.html">SQLite Archive format</a>. The interface is similar to
that of the "tar" command on unix systems. Each invocation of the ".ar"
command must specify a single command option. The following commands
are available for ".archive":

| Option | Long Option | Purpose |
|--------|-------------|---------|
| -c   | --create  |  Create a new archive containing specified files.
| -x   | --extract |  Extract specified files from archive.
| -i   | --insert  |  Add files to existing archive.
| -r   | --remove |  Remove files from the archive.
| -t   | --list   |  List the files in the archive.
| -u   | --update |  Add files to existing archive `if` they have changed.

As well as the command option, each invocation of ".ar" may specify
one or more modifier options. Some modifier options require an argument,
some do not. The following modifier options are available:

| Option  | Long Option | Purpose  |
|--------|-------------|---------|
| -v    | --verbose | List each file as it is processed.
| -f FILE | --file FILE | If specified, use file FILE as the
  archive. Otherwise, assume that the current "main" database is the
  archive to be operated on.
| -a FILE | --append FILE | Like --file, use file FILE as the
  archive, but open the file using the apndvfs VFS so that
  the archive will be appended to the end of FILE if FILE already exists.
| -C DIR | --directory DIR | If specified, interpret all relative
  paths as relative to DIR, instead of the current working directory.
| -g    | --glob   | Use glob(Y,X) to match arguments
  against names in the archive.
| -n    | --dryrun | Show the SQL that would be run to carry out the
                       archive operation, but do not actually change anything.
| --   | -- | All subsequent command line words are command arguments,
  not options.

https://sqlite.org/src/file/ext/misc/appendvfs.c

For command-line usage, add the short style command-line options immediately
following the "-A", without an intervening space.  All subsequent arguments
are considered to be part of the .archive command.  For example, the following
commands are equivalent:

```sql
sqlite3 new_archive.db -Acv file1 file2 file3
sqlite3 new_archive.db ".ar -cv file1 file2 file3"
```

Long and short style options may be mixed. For example, the following are
equivalent:

```sql
-- Two ways to create a new archive named "new_archive.db" containing
-- files "file1", "file2" and "file3".
.ar -c --file new_archive.db file1 file2 file3
.ar -f new_archive.db --create file1 file2 file3
```

Alternatively, the first argument following to ".ar" may be the concatenation
of the short form of all required options (without the "-" characters). In
this case arguments for options requiring them are read from the command line
next, and any remaining words are considered command arguments. For example:

```sql
-- Create a new archive "new_archive.db" containing files "file1" and
-- "file2" from directory "dir1".
.ar cCf dir1 new_archive.db file1 file2 file3
```

### 15.1. SQLite Archive Create Command 
                                     *_sqlite_archive_create_command_*

Create a new archive, overwriting any existing archive (either in the current
"main" db or in the file specified by a --file option). Each argument following
the options is a file to add to the archive. Directories are imported
recursively. See above for examples.

### 15.2. SQLite Archive Extract Command 
                                    *_sqlite_archive_extract_command_*

Extract files from the archive (either to the current working directory or
to the directory specified by a --directory option).
Files or directories whose names match the arguments,
as affected by the --glob option, are extracted.
Or, if no arguments follow the options, all files and directories are extracted.
Any specified directories are extracted recursively. It is an error if any
specified names or match patterns cannot be found in the archive.

```sql
-- Extract all files from the archive in the current "main" db to the
-- current working directory. List files as they are extracted. 
.ar --extract --verbose

-- Extract file "file1" from archive "ar.db" to directory "dir1".
.ar fCx ar.db dir1 file1

-- Extract files with ".h" extension to directory "headers".
.ar -gCx headers *.h
```

### 15.3. SQLite Archive List Command 
                                      *_sqlite_archive_list_command_*

List the contents of the archive. If no arguments are specified, then all
files are listed. Otherwise, only those which match the arguments,
as affected by the --glob option, are listed. Currently,
the --verbose option does not change the behaviour of this command. That may
change in the future.

```sql
-- List contents of archive in current "main" db..
.ar --list
```

<a name="arinsup"></a>

### 15.4. SQLite Archive Insert And Update Commands 
                           *_sqlite_archive_insert_and_update_commands_*

 The --update and --insert commands work like --create command, except that
they do not delete the current archive before commencing. New versions of
files silently replace existing files with the same names, but otherwise
the initial contents of the archive (if any) remain intact.

 For the --insert command, all files listed are inserted into the archive.
For the --update command, files are only inserted if they do not previously
exist in the archive, or if their "mtime" or "mode" is different from what
is currently in the archive.

 Compatibility node:  Prior to SQLite version 3.28.0 (2019-04-16) only
the --update option was supported but that option worked like --insert in that
it always reinserted every file regardless of whether or not it had changed.

### 15.5. SQLite Archive Remove Command 
                                    *_sqlite_archive_remove_command_*

 The --remove command deletes files and directories which match the
provided arguments (if any) as affected by the --glob option.
It is an error to provide arguments which match nothing in the archive.

### 15.6. Operations On ZIP Archives 
                                       *_operations_on_zip_archives_*

If FILE is a ZIP archive rather than an SQLite Archive, the ".archive"
command and the "-A" command-line option still work.  This is accomplished
using of the <a href="zipfile.html">zipfile</a> extension.
Hence, the following commands are roughly equivalent,
differing only in output formatting:

| Traditional Command | Equivalent sqlite3.exe Command |
|------------|------------------|
| unzip archive.zip       | sqlite3 -Axf archive.zip
| unzip -l archive.zip    | sqlite3 -Atvf archive.zip
| zip -r archive2.zip dir | sqlite3 -Acf archive2.zip dir

### 15.7. SQL Used To Implement SQLite Archive Operations 
                        *_sql_used_to_implement_sqlite_archive_operations_*

The various SQLite Archive Archive commands are implemented using SQL statements.
Application developers can easily add SQLite Archive Archive reading and writing
support to their own projects by running the appropriate SQL.

To see what SQL statements are used to implement an SQLite Archive
operation, add the --dryrun or -n option.  This causes the SQL to be
displayed but inhibits the execution of the SQL.

The SQL statements used to implement SQLite Archive operations make use of
various <a href="loadext.html">loadable extensions</a>.  
These extensions are all available in the SQLite source tree in the ext/misc/ subfolder.

1. https://sqlite.org/src
2. https://sqlite.org/src/file/ext/misc

The extensions needed for full SQLite Archive support include:

https://sqlite.org/src/file/ext/misc/fileio.c
fileio.c ➡
This extension adds SQL functions readfile() and writefile() for
reading and writing content from files on disk.  The fileio.c
extension also includes fsdir() table-valued function for listing
the contents of a directory and the lsmode() function for converting
numeric st_mode integers from the stat() system call into human-readable
strings after the fashion of the "ls -l" command.

https://sqlite.org/src/file/ext/misc/sqlar.c
sqlar.c ➡
This extension adds the sqlar_compress() and sqlar_uncompress()
functions that are needed to compress and uncompress file content
as it is inserted and extracted from an SQLite Archive.

<a href="zipfile.html">zipfile.c</a> ➡
This extension implements the "zipfile(FILE)" table-valued function
which is used to read ZIP archives.  This extension is only needed
when reading ZIP archives instead of SQLite archives.

https://sqlite.org/src/file/ext/misc/appendvfs.c
<li>
appendvfs.c ➡
This extension implements a new <a href="vfs.html">VFS</a> that allows an SQLite database
to be appended to some other file, such as an executable.  This
extension is only needed if the --append option to the .archive
command is used.

<a name="param"></a>

## 🐣 16. SQL Parameters
                                                  *sql_parameters*

SQLite allows <a href="lang_expr.html#varparam">bound parameters</a> to appear in an SQL statement anywhere
that a literal value is allowed.  The values for these parameters are set
using the <a href="c3ref/bind_blob.html">sqlite3_bind_...()</a> family of APIs.

Parameters can be either named or unnamed.  An unnamed parameter is a single
question mark ("?").  Named parameters are a "?" followed immediately by a number
(ex: "?15" or "?123") or one of the characters "$", ":", or "@" followed by an
alphanumeric name (ex: "$var1", ":xyz", "@bingo").

This command-line shell leaves unnamed parameters unbound, meaning that they
will have a value of an SQL NULL, but named parameters might be assigned values.
If there exists a TEMP table named "sqlite_parameters" with a schema like this:

```sql
CREATE TEMP TABLE sqlite_parameters(
  key TEXT PRIMARY KEY,
  value
) WITHOUT ROWID;
```

And if there is an entry in that table where the key column exactly matches
the name of parameter (including the initial "?", "$", ":", or "@" character)
then the parameter is assigned the value of the value column.  If no entry exists,
the parameter defaults to NULL.

The ".parameter" command exists to simplify managing this table.  The
".parameter init" command (often abbreviated as just ".param init") creates
the temp.sqlite_parameters table if it does not already exist.  The ".param list"
command shows all entries in the temp.sqlite_parameters table.  The ".param clear"
command drops the temp.sqlite_parameters table.  The ".param set KEY VALUE" and
".param unset KEY" commands create or delete entries from the
temp.sqlite_parameters table.

The VALUE passed to ".param set KEY VALUE" can be either a SQL literal
or any other SQL expression or query which can be evaluated to yield a value.
This allows values of differing types to be set.
If such evaluation fails, the provided VALUE is instead quoted and inserted
as text.
Because such initial evaluation may or may not fail depending upon
the VALUE content, the reliable way to get a text value is to enclose it
with single-quotes protected from the above-described command-tail parsing.
For example, (unless one intends a value of -1365):<br>
```sql
.parameter init
.parameter set @phoneNumber "'202-456-1111'"
```
Note that the double-quotes serve to protect the single-quotes
and ensure that the quoted text is parsed as one argument.

The temp.sqlite_parameters table only provides values for parameters in the
command-line shell.  The temp.sqlite_parameter table has no effect on queries
that are run directly using the SQLite C-language API.  Individual applications
are expected to implement their own parameter binding.  You can search for
"sqlite_parameters" in the command-line shell source code
to see how the command-line shell does parameter binding, and use that as
a hint for how to implement it yourself.

https://sqlite.org/src/file/src/shell.c.in

<a name="expert"></a>

## 🐣 17. Index Recommendations (SQLite Expert)
                                  *index_recommendations_sqlite_expert_*

**Note: This command is experimental. It may be removed or the
interface modified in incompatible ways at some point in the future.**

For most non-trivial SQL databases, the key to performance is creating
the right SQL indexes. In this context "the right SQL indexes" means those
that cause the queries that an application needs to optimize run fast. The
".expert" command can assist with this by proposing indexes that might
assist with specific queries, were they present in the database.

The ".expert" command is issued first, followed by the SQL query
on a separate line. For example, consider the following session:

```sql
sqlite> CREATE TABLE x1(a, b, c);                  -- Create table in database 
sqlite> .expert
sqlite> SELECT * FROM x1 WHERE a=? AND b>?;        -- Analyze this SELECT 
CREATE INDEX x1_idx_000123a7 ON x1(a, b);

0|0|0|SEARCH TABLE x1 USING INDEX x1_idx_000123a7 (a=? AND b>?)

sqlite> CREATE INDEX x1ab ON x1(a, b);             -- Create the recommended index 
sqlite> .expert
sqlite> SELECT * FROM x1 WHERE a=? AND b>?;        -- Re-analyze the same SELECT 
(no new indexes)

0|0|0|SEARCH TABLE x1 USING INDEX x1ab (a=? AND b>?)
```

In the above, the user creates the database schema (a single table - "x1"),
and then uses the ".expert" command to analyze a query, in this case
"SELECT * FROM x1 WHERE a=? AND b>?". The shell tool recommends that the
user create a new index (index "x1_idx_000123a7") and outputs the plan
that the query would use in <a href="eqp.html">EXPLAIN QUERY PLAN</a> format. The user then creates
an index with an equivalent schema and runs the analysis on the same query
again. This time the shell tool does not recommend any new indexes, and
outputs the plan that SQLite will use for the query given the existing
indexes.

The ".expert" command accepts the following options:

| Option | Purpose
| --verbose |  If present, output a more verbose report for each query analyzed.
| --sample PERCENT |  
         This parameter defaults to 0, causing the ".expert" command to
         recommend indexes based on the query and database schema alone.
         This is similar to the way the <a href="optoverview.html">SQLite query planner</a> selects
         indexes for queries if the user has not run the <a href="lang_analyze.html">ANALYZE</a> command
         on the database to generate data distribution statistics.

         If this option is passed a non-zero argument, the ".expert" command
         generates similar data distribution statistics for all indexes
         considered based on PERCENT percent of the rows currently stored in
         each database table. For databases with unusual data distributions,
         this may lead to better index recommendations, particularly if the
         application intends to run ANALYZE.
         
         For small databases and modern CPUs, there is usually no reason not
         to pass "--sample 100". However, gathering data distribution
         statistics can be expensive for large database tables. If the
         operation is too slow, try passing a smaller value for the --sample
         option.

The functionality described in this section may be integrated into other
applications or tools using the SQLite expert extension code.
http://www.sqlite.org/src/dir?ci=trunk&name=ext/expert

A database schema which incorporate SQL custom functions made available
via the extension load mechanism may need special provision to work with
the .expert feature. Because the feature uses additional connections to
implement its functionality, those custom functions must be made available
to those additional connections. This can be done by means of the extension
load/usage options described at
<a href="c3ref/auto_extension.html">
Automatically Load Statically Linked Extensions</a>
and <a href="loadext.html#persist">
Persistent Loadable Extensions</a>.

<a name="dotconn"></a>

## 🐣 18. Working With Multiple Database Connections
                              *working_with_multiple_database_connections*


Beginning with version 3.37.0 (2021-11-27), the CLI has the ability to
hold multiple <a href="c3ref/sqlite3.html">database connections</a> open at once.  Only one database connection
is active at a time.  The inactive connections are still open but are idle.


Use the ".connection" dot-command (often abbreviated as just ".conn") to see a
list of database connections and an indication of which one is currently active.
Each database connection is identified by an integer between 0 and 9.  (There
can be at most 10 simultaneously open connections.)  Change to another database
connection, creating it if it does not already exist, by typing the ".conn"
command followed by its number.  Close a database connection by typing
".conn close N" where N is the connection number.


Though the underlying SQLite database connections are completely independent
of one another, many of the CLI settings, such as the output format, are
shared across all database connections.  Thus, changing the <a href="cli.html#dotmode">output mode</a> in
one connection will change it in them all.  On the other hand, some
<a href="cli.html#dotcmd">dot-commands</a> such as <a href="cli.html#dotopen">.open</a> only affect the current connection.

<a name="miscfeatures"></a>

## 🐣 19. Miscellaneous Extension Features
                                    *miscellaneous_extension_features*


The CLI is built with several SQLite extensions that are not
included with the SQLite library. A few add features
not described in the preceding sections, namely:

01. the UINT collating sequence which treats unsigned integers embedded in text 
    according to their value, along with other text, for ordering;
02. decimal arithmetic as provided by the 
    <a href="floatingpoint.html#decext">decimal extension</a>; 
03. the <a href="series.html">generate_series</a>() table-valued function; 
    the base64() and base85() functions which encode a blob to base64 or base85 text or decode the same to a blob; and
04. support for POSIX extended regular expressions bound to
    the <a href="lang_expr.html#regexp">REGEXP</a> operator.

<a name="dotother"></a>

## 🐣 20. Other Dot Commands
                                              *other_dot_commands*

There are many other dot-commands available in the command-line
shell.  See the ".help" command for a complete list for any particular
version and build of SQLite.

<a name="insh"></a>

## 🐣 21. Using sqlite3 in a shell script
                                      *using_sqlite3_in_a_shell_script*


One way to use sqlite3 in a shell script is to use "echo" or
"cat" to generate a sequence of commands in a file, then invoke sqlite3
while redirecting input from the generated command file.  This
works fine and is appropriate in many circumstances.  But as
an added convenience, sqlite3 allows a single SQL command to be
entered on the command line as a second argument after the
database name.  When the sqlite3 program is launched with two
arguments, the second argument is passed to the SQLite library
for processing, the query results are printed on standard output
in list mode, and the program exits.  This mechanism is designed
to make sqlite3 easy to use in conjunction with programs like
"awk".  For example:

```sql
$ sqlite3 ex1 'select * from tbl1' \
>  | awk '{printf "<tr><td>%s<td>%s\n",$1,$2 }'
<tr><td>hello<td>10
<tr><td>goodbye<td>20
$
```

<a name="endsh"></a>

## 🐣 22. Marking The End Of An SQL Statement
                                *marking_the_end_of_an_sql_statement*


SQLite commands are normally terminated by a semicolon.  In the CLI
you can also use the word "GO" (case-insensitive) or a slash character
"/" on a line by itself to end a command.  These are used by SQL Server
and Oracle, respectively, and are supported by the SQLite CLI for
compatibility.  These won't work in **sqlite3_exec()**,
because the CLI translates these inputs into a semicolon before passing
them down into the SQLite core.

<a name="clopts"></a>

## 🐣 23. Command-line Options
                                              *command_line_options*


There are many command-line options available to the CLI.  Use the --help
command-line option to see a list:

```sh
$ sqlite3 --help
Usage: ./sqlite3 [OPTIONS] FILENAME [SQL]
FILENAME is the name of an SQLite database. A new database is created
if the file does not previously exist.
OPTIONS include:
   -A ARGS...           run ".archive ARGS" and exit
   -append              append the database to the end of the file
   -ascii               set output mode to 'ascii'
   -bail                stop after hitting an error
   -batch               force batch I/O
   -box                 set output mode to 'box'
   -column              set output mode to 'column'
   -cmd COMMAND         run "COMMAND" before reading stdin
   -csv                 set output mode to 'csv'
   -deserialize         open the database using sqlite3_deserialize()
   -echo                print commands before execution
   -init FILENAME       read/process named file
   -[no]header          turn headers on or off
   -help                show this message
   -html                set output mode to HTML
   -interactive         force interactive I/O
   -json                set output mode to 'json'
   -line                set output mode to 'line'
   -list                set output mode to 'list'
   -lookaside SIZE N    use N entries of SZ bytes for lookaside memory
   -markdown            set output mode to 'markdown'
   -maxsize N           maximum size for a --deserialize database
   -memtrace            trace all memory allocations and deallocations
   -mmap N              default mmap size set to N
   -newline SEP         set output row separator. Default: '\n'
   -nofollow            refuse to open symbolic links to database files
   -nonce STRING        set the safe-mode escape nonce
   -nullvalue TEXT      set text string for NULL values. Default ''
   -pagecache SIZE N    use N slots of SZ bytes each for page cache memory
   -quote               set output mode to 'quote'
   -readonly            open the database read-only
   -safe                enable safe-mode
   -separator SEP       set output column separator. Default: '|'
   -stats               print memory stats before each finalize
   -table               set output mode to 'table'
   -tabs                set output mode to 'tabs'
   -utf8                setup interactive console code page for UTF-8
   -version             show SQLite version
   -vfs NAME            use NAME as the default VFS
   -zip                 open the file as a ZIP Archive
```

The CLI is flexible regarding command-line option formatting.
Either one or two leading "-" characters are permitted.
Thus "-box" and "--box" mean the same thing.
Command-line options are processed from left to right.
Hence a "--box" option will override a prior "--quote" option.


Most of the command-line options are self-explanatory, but a few merit additional
discussion below.

<a name="safemode"></a>

### 23.1. The --safe command-line option
                                       *the_safe_command_line_option*

The --safe command-line option attempts to disable all features of the CLI that
might cause any changes to the host computer other than changes to the specific database
file named on the command-line.  The idea is that if you receive a large SQL script
from an unknown or untrusted source, you can run that script to see what it does without
risking an exploit by using the --safe option.  The --safe option disables (among other
things):


-  The <a href="cli.html#dotopen">.open command</a>, unless the --hexdb option is used or the filename is ":memory:".
     This prevents the script from reading or writing any database files not named on
     the original command-line.
-  The <a href="lang_attach.html">ATTACH</a> SQL command.
-  SQL functions that have potentially harmful side-effects, such as
     edit(), fts3_tokenizer(), load_extension(), readfile() and writefile().
-  The <a href="cli.html#sqlar">.archive command</a>.
-  The .backup and .save commands.
-  The <a href="cli.html#csv">.import command</a>.
-  The <a href="cli.html#dotload">.load command</a>.
-  The .log command.
-  The .shell and .system commands.
-  The .excel, .once and .output commands.
-  Other commands that can have deleterious side effects.

Basically, any feature of the CLI that reads or writes from a file on disk other
than the main database file is disabled.

<h3 id="bypassing_safe_restrictions_for_specific_commands">23.1.1. Bypassing --safe restrictions for specific commands</h3>

If the "--nonce NONCE" option is also included on the command-line, for some
large and arbitrary NONCE string, then the ".nonce NONCE" command (with the
same large nonce string) will permit the next SQL statement or dot-command
to bypass the --safe restrictions.

Suppose you want to run a suspicious script and the script requires one or
two of the features that --safe normally disables.  For example, suppose it
needs to ATTACH one additional database.  Or suppose the script needs to load
a specific extension. This can be accomplished by preceding the (carefully
audited) ATTACH statement or the ".load" command with an appropriate ".nonce"
command and supplying the same nonce value using the "--nonce" command-line
option.  Those specific commands will then be allowed to execute normally,
but all other unsafe commands will still be restricted.

The use of ".nonce" is dangerous in the sense that a mistake can allow a
hostile script to damage your system.  Therefore, use ".nonce" carefully,
sparingly, and as a last resort when there are no other ways to get a
script to run under --safe mode.

<a name="testing_mode"></a>

### 23.2. The --unsafe-testing command-line option
                               *the_unsafe_testing_command_line_option*

The --unsafe-testing command-line option supports use of the CLI for
internal testing of the SQLite library. It is not needed or useful for using
the CLI as a utility for creating, modifying or querying SQLite databases.
Its intended use is to permit scripted testing with direct schema changes,
defensive measures defeated, and certain special-purpose, undocumented,
test-oriented dot-commands enabled.

Misbehavior which requires use of the --unsafe-testing option to be induced
will generally not be considered a bug for that reason alone. CLI behavior
with --unsafe-testing is not supported or defined.

### 23.3. The --utf8 command-line option
                                      *the_utf8_command_line_option*

On the Windows platform, during an interactive console session only,
this option has several effects:


1. The console code page is set for UTF-8 I/O during the session.
2. Translations from/to MBCS for console I/O are not done.
3. Console screen Copy and Paste deal in UTF-8 content. 
4. The original console settings are restored at termination.


On non-Windows platforms, the option has no effect and does not
appear in the option help displayed by "sqlite3 -help".

<a name="compiling"></a>

## 🐣 24. Compiling the sqlite3 program from sources
                            *compiling_the_sqlite3_program_from_sources*


To compile the command-line shell on unix systems and on Windows with MinGW,
the usual configure-make command works:

```sql
sh configure; make
```


The configure-make works whether you are building from the canonical sources
from the source tree, or from an amalgamated bundle.  There are few
dependencies.  When building from canonical sources, a working
<a href="https://www.tcl.tk/man/tcl8.3/UserCmd/tclsh.htm">tclsh</a> is required.
If using an amalgamation bundle, all the preprocessing work normally
done by tclsh will have already been carried out and only normal build
tools are required.


A working <a href="https://zlib.net">zlib compression library</a> is
needed in order for the <a href="cli.html#sqlar">.archive command</a> to operate.


On Windows with MSVC, use nmake with the Makefile.msc:

```sql
nmake /f Makefile.msc
```


For correct operation of the <a href="cli.html#sqlar">.archive command</a>, make a copy of the
<a href="https://zlib.net">zlib source code</a> into the compat/zlib subdirectory
of the source tree and compile this way:

```sql
nmake /f Makefile.msc USE_ZLIB=1
```

### 24.1. Do-It-Yourself Builds 
                                           *_do_it_yourself_builds_*


The source code to the sqlite3 command line interface is in a single
file named "shell.c".  The shell.c source file is generated from other
sources, but most of the code for shell.c can be found in
<a href="https://sqlite.org/src/file/src/shell.c.in">src/shell.c.in</a>.
(Regenerate shell.c by typing "make shell.c" from the canonical source tree.)
<a href="howtocompile.html">Compile</a> the shell.c file (together
with the <a href="amalgamation.html">sqlite3 library source code</a>) to generate
the executable.  For example:

```sql
gcc -o sqlite3 shell.c sqlite3.c -ldl -lpthread -lz -lm
```


The following additional compile-time options are recommended in order to
provide a full-featured command-line shell:


01. -DSQLITE_THREADSAFE=0
    https://www.sqlite.org/howtocompile.html#threadsafe
02. -DSQLITE_ENABLE_EXPLAIN_COMMENTS
    https://www.sqlite.org/howtocompile.html#enable_explain_comments
03. -DSQLITE_HAVE_ZLIB
    https://www.sqlite.org/howtocompile.html#have_zlib
04. -DSQLITE_INTROSPECTION_PRAGMAS
    https://www.sqlite.org/howtocompile.html#introspection_pragmas
05. -DSQLITE_ENABLE_UNKNOWN_SQL_FUNCTION
    https://www.sqlite.org/howtocompile.html#enable_unknown_sql_function
06. -DSQLITE_ENABLE_STMTVTAB
    https://www.sqlite.org/howtocompile.html#enable_stmtvtab
07. -DSQLITE_ENABLE_DBPAGE_VTAB
    https://www.sqlite.org/howtocompile.html#enable_dbpage_vtab
08. -DSQLITE_ENABLE_DBSTAT_VTAB
    https://www.sqlite.org/howtocompile.html#enable_dbstat_vtab
09. -DSQLITE_ENABLE_OFFSET_SQL_FUNC
    https://www.sqlite.org/howtocompile.html#enable_offset_sql_func
10. -DSQLITE_ENABLE_JSON1
    https://www.sqlite.org/howtocompile.html#enable_json1
11. -DSQLITE_ENABLE_RTREE
    https://www.sqlite.org/howtocompile.html#enable_rtree
12. -DSQLITE_ENABLE_FTS4
    https://www.sqlite.org/howtocompile.html#enable_fts4
13. -DSQLITE_ENABLE_FTS5
    https://www.sqlite.org/howtocompile.html#enable_fts5


# 🍀 /57. SQLite Database Analyzer (sqlite3_analyzer.exe)
                                                *sqlanalyze_html*
https://www.sqlite.org/sqlanalyze.html


The sqlite3_analyzer.exe binary is a command-line utility program that measures 
and displays how much and how efficiently space is used by individual tables and 
indexes with an SQLite database file. Example usage:

    sqlite3_analyzer database.sqlite

The output is a human-readable ASCII text report that provides information on 
the space utilization of the database file. The report is intended to be 
self-explanatory, though there is some [additional explanation](sqlanalyze.html#defs) 
of the various parameters reported toward the end of the report.

The output is also valid SQL. Most of the report text is contained within 
a header comment, with various SQL statements that create and initialize 
a database at the [end of the report](sqlanalyze.html#sqlx). 
The constructed database contains the raw data from which the report was extracted. 
Hence the original report can be read into an instance of the [command-line shell](cli.html) 
and then the raw data can be queried to dig deeper into the space utilization 
of a particular database file.

1.1. Implementation
-------------------

The sqlite3_analyzer.exe program is a [TCL](http://www.tcl.tk/) program that 
uses the [dbstat virtual table](dbstat.html) to gather information about the 
database file and then format that information neatly.

1.2. Example Output
-------------------

The following is sqlite3_analyzer output for an example places.sqlite database used by Firefox.

    /** Disk-Space Utilization Report For ██████████████████/places.sqlite
    
    Page size in bytes................................ 32768     
    Pages in the whole file (measured)................ 221       
    Pages in the whole file (calculated).............. 221       
    Pages that store data............................. 221        100.0% 
    Pages on the freelist (per header)................ 0            0.0% 
    Pages on the freelist (calculated)................ 0            0.0% 
    Pages of auto-vacuum overhead..................... 0            0.0% 
    Number of tables in the database.................. 14        
    Number of indices................................. 23        
    Number of defined indices......................... 17        
    Number of implied indices......................... 6         
    Size of the file in bytes......................... 7241728   
    Bytes of user payload stored...................... 2503069     34.6% 
    
    *** Page counts for all tables with their indices *****************************
    
    MOZ_PLACES........................................ 142         64.3% 
    MOZ_HISTORYVISITS................................. 41          18.6% 
    MOZ_FAVICONS...................................... 15           6.8% 
    MOZ_BOOKMARKS..................................... 5            2.3% 
    MOZ_KEYWORDS...................................... 3            1.4% 
    MOZ_ANNO_ATTRIBUTES............................... 2            0.90% 
    MOZ_ANNOS......................................... 2            0.90% 
    MOZ_BOOKMARKS_ROOTS............................... 2            0.90% 
    MOZ_HOSTS......................................... 2            0.90% 
    MOZ_INPUTHISTORY.................................. 2            0.90% 
    MOZ_ITEMS_ANNOS................................... 2            0.90% 
    SQLITE_SCHEMA..................................... 1            0.45% 
    SQLITE_SEQUENCE................................... 1            0.45% 
    SQLITE_STAT1...................................... 1            0.45% 
    
    *** Page counts for all tables and indices separately *************************
    
    MOZ_PLACES........................................ 63          28.5% 
    MOZ_PLACES_URL_UNIQUEINDEX........................ 37          16.7% 
    MOZ_HISTORYVISITS................................. 13           5.9% 
    MOZ_FAVICONS...................................... 12           5.4% 
    MOZ_HISTORYVISITS_PLACEDATEINDEX.................. 12           5.4% 
    MOZ_PLACES_HOSTINDEX.............................. 11           5.0% 
    MOZ_HISTORYVISITS_DATEINDEX....................... 10           4.5% 
    MOZ_PLACES_GUID_UNIQUEINDEX....................... 9            4.1% 
    MOZ_PLACES_LASTVISITDATEINDEX..................... 7            3.2% 
    MOZ_HISTORYVISITS_FROMINDEX....................... 6            2.7% 
    MOZ_PLACES_FAVICONINDEX........................... 5            2.3% 
    MOZ_PLACES_FRECENCYINDEX.......................... 5            2.3% 
    MOZ_PLACES_VISITCOUNT............................. 5            2.3% 
    SQLITE_AUTOINDEX_MOZ_FAVICONS_1................... 3            1.4% 
    MOZ_ANNO_ATTRIBUTES............................... 1            0.45% 
    MOZ_ANNOS......................................... 1            0.45% 
    MOZ_ANNOS_PLACEATTRIBUTEINDEX..................... 1            0.45% 
    MOZ_BOOKMARKS..................................... 1            0.45% 
    MOZ_BOOKMARKS_GUID_UNIQUEINDEX.................... 1            0.45% 
    MOZ_BOOKMARKS_ITEMINDEX........................... 1            0.45% 
    MOZ_BOOKMARKS_ITEMLASTMODIFIEDINDEX............... 1            0.45% 
    MOZ_BOOKMARKS_PARENTINDEX......................... 1            0.45% 
    MOZ_BOOKMARKS_ROOTS............................... 1            0.45% 
    MOZ_HOSTS......................................... 1            0.45% 
    MOZ_INPUTHISTORY.................................. 1            0.45% 
    MOZ_ITEMS_ANNOS................................... 1            0.45% 
    MOZ_ITEMS_ANNOS_ITEMATTRIBUTEINDEX................ 1            0.45% 
    MOZ_KEYWORDS...................................... 1            0.45% 
    MOZ_KEYWORDS_PLACEPOSTDATA_UNIQUEINDEX............ 1            0.45% 
    SQLITE_AUTOINDEX_MOZ_ANNO_ATTRIBUTES_1............ 1            0.45% 
    SQLITE_AUTOINDEX_MOZ_BOOKMARKS_ROOTS_1............ 1            0.45% 
    SQLITE_AUTOINDEX_MOZ_HOSTS_1...................... 1            0.45% 
    SQLITE_AUTOINDEX_MOZ_INPUTHISTORY_1............... 1            0.45% 
    SQLITE_AUTOINDEX_MOZ_KEYWORDS_1................... 1            0.45% 
    SQLITE_SCHEMA..................................... 1            0.45% 
    SQLITE_SEQUENCE................................... 1            0.45% 
    SQLITE_STAT1...................................... 1            0.45% 
    
    *** All tables and indices ****************************************************
    
    Percentage of total database...................... 100.0%    
    Number of entries................................. 154969    
    Bytes of storage consumed......................... 7241728   
    Bytes of payload.................................. 4969404     68.6% 
    Average payload per entry......................... 32.07     
    Average unused bytes per entry.................... 11.15     
    Average fanout.................................... 14.00     
    Maximum payload per entry......................... 7640      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 14        
    Primary pages used................................ 207       
    Overflow pages used............................... 0         
    Total pages used.................................. 221       
    Unused bytes on index pages....................... 448010      97.7% 
    Unused bytes on primary pages..................... 1280642     18.9% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 1728652     23.9% 
    
    *** All tables ****************************************************************
    
    Percentage of total database......................  44.8%    
    Number of entries................................. 28530     
    Bytes of storage consumed......................... 3244032   
    Bytes of payload.................................. 2508257     77.3% 
    Average payload per entry......................... 87.92     
    Average unused bytes per entry.................... 20.13     
    Average fanout.................................... 28.00     
    Maximum payload per entry......................... 7640      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 3         
    Primary pages used................................ 96        
    Overflow pages used............................... 0         
    Total pages used.................................. 99        
    Unused bytes on index pages....................... 97551       99.23% 
    Unused bytes on primary pages..................... 476741      15.2% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 574292      17.7% 
    
    *** All indices ***************************************************************
    
    Percentage of total database......................  55.2%    
    Number of entries................................. 126439    
    Bytes of storage consumed......................... 3997696   
    Bytes of payload.................................. 2461147     61.6% 
    Average payload per entry......................... 19.47     
    Average unused bytes per entry.................... 9.13      
    Average fanout.................................... 11.00     
    Maximum payload per entry......................... 7259      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 11        
    Primary pages used................................ 111       
    Overflow pages used............................... 0         
    Total pages used.................................. 122       
    Unused bytes on index pages....................... 350459      97.2% 
    Unused bytes on primary pages..................... 803901      22.1% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 1154360     28.9% 
    
    *** Table MOZ_ANNO_ATTRIBUTES and all its indices *****************************
    
    Percentage of total database......................   0.90%   
    Number of entries................................. 24        
    Bytes of storage consumed......................... 65536     
    Bytes of payload.................................. 721          1.1% 
    Average payload per entry......................... 30.04     
    Average unused bytes per entry.................... 2696.46   
    Maximum payload per entry......................... 43        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 2         
    Overflow pages used............................... 0         
    Total pages used.................................. 2         
    Unused bytes on primary pages..................... 64715       98.7% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 64715       98.7% 
    
    *** Table MOZ_ANNO_ATTRIBUTES w/o any indices *********************************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 12        
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 355          1.1% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 29.58     
    Average unused bytes per entry.................... 2696.42   
    Maximum payload per entry......................... 42        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32357       98.7% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32357       98.7% 
    
    *** Index SQLITE_AUTOINDEX_MOZ_ANNO_ATTRIBUTES_1 of table MOZ_ANNO_ATTRIBUTES *
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 12        
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 366          1.1% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 30.50     
    Average unused bytes per entry.................... 2696.50   
    Maximum payload per entry......................... 43        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32358       98.7% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32358       98.7% 
    
    *** Table MOZ_ANNOS and all its indices ***************************************
    
    Percentage of total database......................   0.90%   
    Number of entries................................. 390       
    Bytes of storage consumed......................... 65536     
    Bytes of payload.................................. 13986       21.3% 
    Average payload per entry......................... 35.86     
    Average unused bytes per entry.................... 128.22    
    Maximum payload per entry......................... 127       
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 2         
    Overflow pages used............................... 0         
    Total pages used.................................. 2         
    Unused bytes on primary pages..................... 50006       76.3% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 50006       76.3% 
    
    *** Table MOZ_ANNOS w/o any indices *******************************************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 195       
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 12115       37.0% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 62.13     
    Average unused bytes per entry.................... 101.04    
    Maximum payload per entry......................... 127       
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 19702       60.1% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 19702       60.1% 
    
    *** Index MOZ_ANNOS_PLACEATTRIBUTEINDEX of table MOZ_ANNOS ********************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 195       
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 1871         5.7% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 9.59      
    Average unused bytes per entry.................... 155.41    
    Maximum payload per entry......................... 10        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 30304       92.5% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 30304       92.5% 
    
    *** Table MOZ_BOOKMARKS and all its indices ***********************************
    
    Percentage of total database......................   2.3%    
    Number of entries................................. 1565      
    Bytes of storage consumed......................... 163840    
    Bytes of payload.................................. 37104       22.6% 
    Average payload per entry......................... 23.71     
    Average unused bytes per entry.................... 77.62     
    Maximum payload per entry......................... 518       
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 5         
    Overflow pages used............................... 0         
    Total pages used.................................. 5         
    Unused bytes on primary pages..................... 121475      74.1% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 121475      74.1% 
    
    *** Table MOZ_BOOKMARKS w/o any indices ***************************************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 313       
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 21937       66.9% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 70.09     
    Average unused bytes per entry.................... 29.90     
    Maximum payload per entry......................... 518       
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 9358        28.6% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 9358        28.6% 
    
    *** Indices of table MOZ_BOOKMARKS ********************************************
    
    Percentage of total database......................   1.8%    
    Number of entries................................. 1252      
    Bytes of storage consumed......................... 131072    
    Bytes of payload.................................. 15167       11.6% 
    Average payload per entry......................... 12.11     
    Average unused bytes per entry.................... 89.55     
    Maximum payload per entry......................... 17        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 4         
    Overflow pages used............................... 0         
    Total pages used.................................. 4         
    Unused bytes on primary pages..................... 112117      85.5% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 112117      85.5% 
    
    *** Index MOZ_BOOKMARKS_GUID_UNIQUEINDEX of table MOZ_BOOKMARKS ***************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 313       
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 5207        15.9% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 16.64     
    Average unused bytes per entry.................... 85.03     
    Maximum payload per entry......................... 17        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 26614       81.2% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 26614       81.2% 
    
    *** Index MOZ_BOOKMARKS_ITEMINDEX of table MOZ_BOOKMARKS **********************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 313       
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 2547         7.8% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 8.14      
    Average unused bytes per entry.................... 93.53     
    Maximum payload per entry......................... 9         
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 29274       89.3% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 29274       89.3% 
    
    *** Index MOZ_BOOKMARKS_ITEMLASTMODIFIEDINDEX of table MOZ_BOOKMARKS **********
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 313       
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 5020        15.3% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 16.04     
    Average unused bytes per entry.................... 85.63     
    Maximum payload per entry......................... 17        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 26801       81.8% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 26801       81.8% 
    
    *** Index MOZ_BOOKMARKS_PARENTINDEX of table MOZ_BOOKMARKS ********************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 313       
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 2393         7.3% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 7.65      
    Average unused bytes per entry.................... 94.02     
    Maximum payload per entry......................... 9         
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 29428       89.8% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 29428       89.8% 
    
    *** Table MOZ_BOOKMARKS_ROOTS and all its indices *****************************
    
    Percentage of total database......................   0.90%   
    Number of entries................................. 10        
    Bytes of storage consumed......................... 65536     
    Bytes of payload.................................. 94           0.14% 
    Average payload per entry......................... 9.40      
    Average unused bytes per entry.................... 6539.10   
    Maximum payload per entry......................... 11        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 2         
    Overflow pages used............................... 0         
    Total pages used.................................. 2         
    Unused bytes on primary pages..................... 65391       99.78% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 65391       99.78% 
    
    *** Table MOZ_BOOKMARKS_ROOTS w/o any indices *********************************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 5         
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 47           0.14% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 9.40      
    Average unused bytes per entry.................... 6538.60   
    Maximum payload per entry......................... 11        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32693       99.77% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32693       99.77% 
    
    *** Index SQLITE_AUTOINDEX_MOZ_BOOKMARKS_ROOTS_1 of table MOZ_BOOKMARKS_ROOTS *
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 5         
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 47           0.14% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 9.40      
    Average unused bytes per entry.................... 6539.60   
    Maximum payload per entry......................... 11        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32698       99.79% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32698       99.79% 
    
    *** Table MOZ_FAVICONS and all its indices ************************************
    
    Percentage of total database......................   6.8%    
    Number of entries................................. 941       
    Bytes of storage consumed......................... 491520    
    Bytes of payload.................................. 332765      67.7% 
    Average payload per entry......................... 353.63    
    Average unused bytes per entry.................... 164.00    
    Average fanout.................................... 7.00      
    Maximum payload per entry......................... 7640      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 2         
    Primary pages used................................ 13        
    Overflow pages used............................... 0         
    Total pages used.................................. 15        
    Unused bytes on index pages....................... 65340       99.70% 
    Unused bytes on primary pages..................... 88980       20.9% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 154320      31.4% 
    
    *** Table MOZ_FAVICONS w/o any indices ****************************************
    
    Percentage of total database......................   5.4%    
    Number of entries................................. 471       
    Bytes of storage consumed......................... 393216    
    Bytes of payload.................................. 297630      75.7% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 631.91    
    Average unused bytes per entry.................... 196.60    
    Average fanout.................................... 11.00     
    Non-sequential pages.............................. 6           54.5% 
    Maximum payload per entry......................... 7640      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 11        
    Overflow pages used............................... 0         
    Total pages used.................................. 12        
    Unused bytes on index pages....................... 32676       99.72% 
    Unused bytes on primary pages..................... 59923       16.6% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 92599       23.5% 
    
    *** Index SQLITE_AUTOINDEX_MOZ_FAVICONS_1 of table MOZ_FAVICONS ***************
    
    Percentage of total database......................   1.4%    
    Number of entries................................. 470       
    Bytes of storage consumed......................... 98304     
    Bytes of payload.................................. 35135       35.7% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 74.76     
    Average unused bytes per entry.................... 131.32    
    Average fanout.................................... 3.00      
    Non-sequential pages.............................. 1           50.0% 
    Maximum payload per entry......................... 7259      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 2         
    Overflow pages used............................... 0         
    Total pages used.................................. 3         
    Unused bytes on index pages....................... 32664       99.68% 
    Unused bytes on primary pages..................... 29057       44.3% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 61721       62.8% 
    
    *** Table MOZ_HISTORYVISITS and all its indices *******************************
    
    Percentage of total database......................  18.6%    
    Number of entries................................. 63470     
    Bytes of storage consumed......................... 1343488   
    Bytes of payload.................................. 882233      65.7% 
    Average payload per entry......................... 13.90     
    Average unused bytes per entry.................... 3.76      
    Average fanout.................................... 10.00     
    Maximum payload per entry......................... 21        
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 4         
    Primary pages used................................ 37        
    Overflow pages used............................... 0         
    Total pages used.................................. 41        
    Unused bytes on index pages....................... 130482      99.55% 
    Unused bytes on primary pages..................... 108158       8.9% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 238640      17.8% 
    
    *** Table MOZ_HISTORYVISITS w/o any indices ***********************************
    
    Percentage of total database......................   5.9%    
    Number of entries................................. 15873     
    Bytes of storage consumed......................... 425984    
    Bytes of payload.................................. 308447      72.4% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 19.43     
    Average unused bytes per entry.................... 2.40      
    Average fanout.................................... 12.00     
    Non-sequential pages.............................. 8           66.7% 
    Maximum payload per entry......................... 21        
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 12        
    Overflow pages used............................... 0         
    Total pages used.................................. 13        
    Unused bytes on index pages....................... 32668       99.69% 
    Unused bytes on primary pages..................... 5435         1.4% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 38103        8.9% 
    
    *** Indices of table MOZ_HISTORYVISITS ****************************************
    
    Percentage of total database......................  12.7%    
    Number of entries................................. 47597     
    Bytes of storage consumed......................... 917504    
    Bytes of payload.................................. 573786      62.5% 
    Average payload per entry......................... 12.06     
    Average unused bytes per entry.................... 4.21      
    Average fanout.................................... 9.00      
    Maximum payload per entry......................... 17        
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 3         
    Primary pages used................................ 25        
    Overflow pages used............................... 0         
    Total pages used.................................. 28        
    Unused bytes on index pages....................... 97814       99.50% 
    Unused bytes on primary pages..................... 102723      12.5% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 200537      21.9% 
    
    *** Index MOZ_HISTORYVISITS_DATEINDEX of table MOZ_HISTORYVISITS **************
    
    Percentage of total database......................   4.5%    
    Number of entries................................. 15865     
    Bytes of storage consumed......................... 327680    
    Bytes of payload.................................. 206221      62.9% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 13.00     
    Average unused bytes per entry.................... 4.65      
    Average fanout.................................... 10.00     
    Non-sequential pages.............................. 6           66.7% 
    Maximum payload per entry......................... 13        
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 9         
    Overflow pages used............................... 0         
    Total pages used.................................. 10        
    Unused bytes on index pages....................... 32596       99.48% 
    Unused bytes on primary pages..................... 41128       13.9% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 73724       22.5% 
    
    *** Index MOZ_HISTORYVISITS_FROMINDEX of table MOZ_HISTORYVISITS **************
    
    Percentage of total database......................   2.7%    
    Number of entries................................. 15869     
    Bytes of storage consumed......................... 196608    
    Bytes of payload.................................. 100292      51.0% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 6.32      
    Average unused bytes per entry.................... 3.06      
    Average fanout.................................... 6.00      
    Non-sequential pages.............................. 4           80.0% 
    Maximum payload per entry......................... 7         
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 5         
    Overflow pages used............................... 0         
    Total pages used.................................. 6         
    Unused bytes on index pages....................... 32702       99.80% 
    Unused bytes on primary pages..................... 15927        9.7% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 48629       24.7% 
    
    *** Index MOZ_HISTORYVISITS_PLACEDATEINDEX of table MOZ_HISTORYVISITS *********
    
    Percentage of total database......................   5.4%    
    Number of entries................................. 15863     
    Bytes of storage consumed......................... 393216    
    Bytes of payload.................................. 267273      68.0% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 16.85     
    Average unused bytes per entry.................... 4.93      
    Average fanout.................................... 12.00     
    Non-sequential pages.............................. 8           72.7% 
    Maximum payload per entry......................... 17        
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 11        
    Overflow pages used............................... 0         
    Total pages used.................................. 12        
    Unused bytes on index pages....................... 32516       99.23% 
    Unused bytes on primary pages..................... 45668       12.7% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 78184       19.9% 
    
    *** Table MOZ_HOSTS and all its indices ***************************************
    
    Percentage of total database......................   0.90%   
    Number of entries................................. 1256      
    Bytes of storage consumed......................... 65536     
    Bytes of payload.................................. 27640       42.2% 
    Average payload per entry......................... 22.01     
    Average unused bytes per entry.................... 26.18     
    Maximum payload per entry......................... 49        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 2         
    Overflow pages used............................... 0         
    Total pages used.................................. 2         
    Unused bytes on primary pages..................... 32888       50.2% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32888       50.2% 
    
    *** Table MOZ_HOSTS w/o any indices *******************************************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 628       
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 14640       44.7% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 23.31     
    Average unused bytes per entry.................... 23.90     
    Maximum payload per entry......................... 49        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 15012       45.8% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 15012       45.8% 
    
    *** Index SQLITE_AUTOINDEX_MOZ_HOSTS_1 of table MOZ_HOSTS *********************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 628       
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 13000       39.7% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 20.70     
    Average unused bytes per entry.................... 28.46     
    Maximum payload per entry......................... 47        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 17876       54.6% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 17876       54.6% 
    
    *** Table MOZ_INPUTHISTORY and all its indices ********************************
    
    Percentage of total database......................   0.90%   
    Number of entries................................. 16        
    Bytes of storage consumed......................... 65536     
    Bytes of payload.................................. 642          0.98% 
    Average payload per entry......................... 40.12     
    Average unused bytes per entry.................... 4050.88   
    Maximum payload per entry......................... 71        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 2         
    Overflow pages used............................... 0         
    Total pages used.................................. 2         
    Unused bytes on primary pages..................... 64814       98.9% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 64814       98.9% 
    
    *** Table MOZ_INPUTHISTORY w/o any indices ************************************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 8         
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 341          1.0% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 42.62     
    Average unused bytes per entry.................... 4047.38   
    Maximum payload per entry......................... 71        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32379       98.8% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32379       98.8% 
    
    *** Index SQLITE_AUTOINDEX_MOZ_INPUTHISTORY_1 of table MOZ_INPUTHISTORY *******
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 8         
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 301          0.92% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 37.62     
    Average unused bytes per entry.................... 4054.38   
    Maximum payload per entry......................... 65        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32435       99.0% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32435       99.0% 
    
    *** Table MOZ_ITEMS_ANNOS and all its indices *********************************
    
    Percentage of total database......................   0.90%   
    Number of entries................................. 158       
    Bytes of storage consumed......................... 65536     
    Bytes of payload.................................. 9211        14.1% 
    Average payload per entry......................... 58.30     
    Average unused bytes per entry.................... 352.56    
    Maximum payload per entry......................... 384       
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 2         
    Overflow pages used............................... 0         
    Total pages used.................................. 2         
    Unused bytes on primary pages..................... 55704       85.0% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 55704       85.0% 
    
    *** Table MOZ_ITEMS_ANNOS w/o any indices *************************************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 79        
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 8649        26.4% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 109.48    
    Average unused bytes per entry.................... 300.54    
    Maximum payload per entry......................... 384       
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 23743       72.5% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 23743       72.5% 
    
    *** Index MOZ_ITEMS_ANNOS_ITEMATTRIBUTEINDEX of table MOZ_ITEMS_ANNOS *********
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 79        
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 562          1.7% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 7.11      
    Average unused bytes per entry.................... 404.57    
    Maximum payload per entry......................... 9         
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 31961       97.5% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 31961       97.5% 
    
    *** Table MOZ_KEYWORDS and all its indices ************************************
    
    Percentage of total database......................   1.4%    
    Number of entries................................. 0         
    Bytes of storage consumed......................... 98304     
    Bytes of payload.................................. 0            0.0% 
    Average payload per entry......................... 0.0       
    Average unused bytes per entry.................... 0.0       
    Maximum payload per entry......................... 0         
    Entries that use overflow......................... 0         
    Primary pages used................................ 3         
    Overflow pages used............................... 0         
    Total pages used.................................. 3         
    Unused bytes on primary pages..................... 98280       99.976% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 98280       99.976% 
    
    *** Table MOZ_KEYWORDS w/o any indices ****************************************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 0         
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 0            0.0% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 0.0       
    Average unused bytes per entry.................... 0.0       
    Maximum payload per entry......................... 0         
    Entries that use overflow......................... 0         
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32760       99.976% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32760       99.976% 
    
    *** Indices of table MOZ_KEYWORDS *********************************************
    
    Percentage of total database......................   0.90%   
    Number of entries................................. 0         
    Bytes of storage consumed......................... 65536     
    Bytes of payload.................................. 0            0.0% 
    Average payload per entry......................... 0.0       
    Average unused bytes per entry.................... 0.0       
    Maximum payload per entry......................... 0         
    Entries that use overflow......................... 0         
    Primary pages used................................ 2         
    Overflow pages used............................... 0         
    Total pages used.................................. 2         
    Unused bytes on primary pages..................... 65520       99.976% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 65520       99.976% 
    
    *** Index MOZ_KEYWORDS_PLACEPOSTDATA_UNIQUEINDEX of table MOZ_KEYWORDS ********
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 0         
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 0            0.0% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 0.0       
    Average unused bytes per entry.................... 0.0       
    Maximum payload per entry......................... 0         
    Entries that use overflow......................... 0         
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32760       99.976% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32760       99.976% 
    
    *** Index SQLITE_AUTOINDEX_MOZ_KEYWORDS_1 of table MOZ_KEYWORDS ***************
    
    Percentage of total database......................   0.45%   
    Number of entries................................. 0         
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 0            0.0% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 0.0       
    Average unused bytes per entry.................... 0.0       
    Maximum payload per entry......................... 0         
    Entries that use overflow......................... 0         
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32760       99.976% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32760       99.976% 
    
    *** Table MOZ_PLACES and all its indices **************************************
    
    Percentage of total database......................  64.3%    
    Number of entries................................. 87087     
    Bytes of storage consumed......................... 4653056   
    Bytes of payload.................................. 3659043     78.6% 
    Average payload per entry......................... 42.02     
    Average unused bytes per entry.................... 7.93      
    Average fanout.................................... 17.00     
    Maximum payload per entry......................... 1867      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 8         
    Primary pages used................................ 134       
    Overflow pages used............................... 0         
    Total pages used.................................. 142       
    Unused bytes on index pages....................... 252188      96.2% 
    Unused bytes on primary pages..................... 438258      10.0% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 690446      14.8% 
    
    *** Table MOZ_PLACES w/o any indices ******************************************
    
    Percentage of total database......................  28.5%    
    Number of entries................................. 10894     
    Bytes of storage consumed......................... 2064384   
    Bytes of payload.................................. 1838131     89.0% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 168.73    
    Average unused bytes per entry.................... 14.10     
    Average fanout.................................... 62.00     
    Non-sequential pages.............................. 30          48.4% 
    Maximum payload per entry......................... 1867      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 62        
    Overflow pages used............................... 0         
    Total pages used.................................. 63        
    Unused bytes on index pages....................... 32207       98.3% 
    Unused bytes on primary pages..................... 121406       6.0% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 153613       7.4% 
    
    *** Indices of table MOZ_PLACES ***********************************************
    
    Percentage of total database......................  35.7%    
    Number of entries................................. 76193     
    Bytes of storage consumed......................... 2588672   
    Bytes of payload.................................. 1820912     70.3% 
    Average payload per entry......................... 23.90     
    Average unused bytes per entry.................... 7.05      
    Average fanout.................................... 11.00     
    Maximum payload per entry......................... 1823      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 7         
    Primary pages used................................ 72        
    Overflow pages used............................... 0         
    Total pages used.................................. 79        
    Unused bytes on index pages....................... 219981      95.9% 
    Unused bytes on primary pages..................... 316852      13.4% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 536833      20.7% 
    
    *** Index MOZ_PLACES_FAVICONINDEX of table MOZ_PLACES *************************
    
    Percentage of total database......................   2.3%    
    Number of entries................................. 10891     
    Bytes of storage consumed......................... 163840    
    Bytes of payload.................................. 83178       50.8% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 7.64      
    Average unused bytes per entry.................... 4.40      
    Average fanout.................................... 5.00      
    Non-sequential pages.............................. 3           75.0% 
    Maximum payload per entry......................... 8         
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 4         
    Overflow pages used............................... 0         
    Total pages used.................................. 5         
    Unused bytes on index pages....................... 32711       99.83% 
    Unused bytes on primary pages..................... 15213       11.6% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 47924       29.3% 
    
    *** Index MOZ_PLACES_FRECENCYINDEX of table MOZ_PLACES ************************
    
    Percentage of total database......................   2.3%    
    Number of entries................................. 10891     
    Bytes of storage consumed......................... 163840    
    Bytes of payload.................................. 76772       46.9% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 7.05      
    Average unused bytes per entry.................... 4.99      
    Average fanout.................................... 5.00      
    Non-sequential pages.............................. 3           75.0% 
    Maximum payload per entry......................... 9         
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 4         
    Overflow pages used............................... 0         
    Total pages used.................................. 5         
    Unused bytes on index pages....................... 32714       99.84% 
    Unused bytes on primary pages..................... 21616       16.5% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 54330       33.2% 
    
    *** Index MOZ_PLACES_GUID_UNIQUEINDEX of table MOZ_PLACES *********************
    
    Percentage of total database......................   4.1%    
    Number of entries................................. 10887     
    Bytes of storage consumed......................... 294912    
    Bytes of payload.................................. 196000      66.5% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 18.00     
    Average unused bytes per entry.................... 6.07      
    Average fanout.................................... 9.00      
    Non-sequential pages.............................. 5           62.5% 
    Maximum payload per entry......................... 18        
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 8         
    Overflow pages used............................... 0         
    Total pages used.................................. 9         
    Unused bytes on index pages....................... 32581       99.43% 
    Unused bytes on primary pages..................... 33545       12.8% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 66126       22.4% 
    
    *** Index MOZ_PLACES_HOSTINDEX of table MOZ_PLACES ****************************
    
    Percentage of total database......................   5.0%    
    Number of entries................................. 10885     
    Bytes of storage consumed......................... 360448    
    Bytes of payload.................................. 237383      65.9% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 21.81     
    Average unused bytes per entry.................... 8.29      
    Average fanout.................................... 11.00     
    Non-sequential pages.............................. 7           70.0% 
    Maximum payload per entry......................... 49        
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 10        
    Overflow pages used............................... 0         
    Total pages used.................................. 11        
    Unused bytes on index pages....................... 32473       99.10% 
    Unused bytes on primary pages..................... 57782       17.6% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 90255       25.0% 
    
    *** Index MOZ_PLACES_LASTVISITDATEINDEX of table MOZ_PLACES *******************
    
    Percentage of total database......................   3.2%    
    Number of entries................................. 10889     
    Bytes of storage consumed......................... 229376    
    Bytes of payload.................................. 150784      65.7% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 13.85     
    Average unused bytes per entry.................... 4.21      
    Average fanout.................................... 7.00      
    Non-sequential pages.............................. 4           66.7% 
    Maximum payload per entry......................... 14        
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 6         
    Overflow pages used............................... 0         
    Total pages used.................................. 7         
    Unused bytes on index pages....................... 32651       99.64% 
    Unused bytes on primary pages..................... 13179        6.7% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 45830       20.0% 

    *** Index MOZ_PLACES_URL_UNIQUEINDEX of table MOZ_PLACES **********************

    Percentage of total database......................  16.7%    
    Number of entries................................. 10859     
    Bytes of storage consumed......................... 1212416   
    Bytes of payload.................................. 1010666     83.4% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 93.07     
    Average unused bytes per entry.................... 15.42     
    Average fanout.................................... 37.00     
    Non-sequential pages.............................. 16          44.4% 
    Maximum payload per entry......................... 1823      
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 36        
    Overflow pages used............................... 0         
    Total pages used.................................. 37        
    Unused bytes on index pages....................... 24134       73.7% 
    Unused bytes on primary pages..................... 143261      12.1% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 167395      13.8% 

    *** Index MOZ_PLACES_VISITCOUNT of table MOZ_PLACES ***************************

    Percentage of total database......................   2.3%    
    Number of entries................................. 10891     
    Bytes of storage consumed......................... 163840    
    Bytes of payload.................................. 66129       40.4% 
    B-tree depth...................................... 2         
    Average payload per entry......................... 6.07      
    Average unused bytes per entry.................... 5.97      
    Average fanout.................................... 5.00      
    Non-sequential pages.............................. 3           75.0% 
    Maximum payload per entry......................... 8         
    Entries that use overflow......................... 0            0.0% 
    Index pages used.................................. 1         
    Primary pages used................................ 4         
    Overflow pages used............................... 0         
    Total pages used.................................. 5         
    Unused bytes on index pages....................... 32717       99.84% 
    Unused bytes on primary pages..................... 32256       24.6% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 64973       39.7% 

    *** Table SQLITE_SCHEMA *******************************************************

    Percentage of total database......................   0.45%   
    Number of entries................................. 36        
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 5188        15.8% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 144.11    
    Average unused bytes per entry.................... 758.58    
    Maximum payload per entry......................... 379       
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 27309       83.3% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 27309       83.3% 

    *** Table SQLITE_SEQUENCE *****************************************************

    Percentage of total database......................   0.45%   
    Number of entries................................. 1         
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 15           0.046% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 15.00     
    Average unused bytes per entry.................... 32741.00  
    Maximum payload per entry......................... 15        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 32741       99.918% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 32741       99.918% 

    *** Table SQLITE_STAT1 ********************************************************

    Percentage of total database......................   0.45%   
    Number of entries................................. 15        
    Bytes of storage consumed......................... 32768     
    Bytes of payload.................................. 762          2.3% 
    B-tree depth...................................... 1         
    Average payload per entry......................... 50.80     
    Average unused bytes per entry.................... 2128.20   
    Maximum payload per entry......................... 62        
    Entries that use overflow......................... 0            0.0% 
    Primary pages used................................ 1         
    Overflow pages used............................... 0         
    Total pages used.................................. 1         
    Unused bytes on primary pages..................... 31923       97.4% 
    Unused bytes on overflow pages.................... 0         
    Unused bytes on all pages......................... 31923       97.4% 

    *** Definitions ***************************************************************
    See below ...

    *******************************************************************************
    The entire text of this report can be sourced into any SQL database
    engine for further analysis.  All of the text above is an SQL comment.
    The data used to generate this report follows:
    */
    BEGIN;
    CREATE TABLE space_used(
       name clob,        -- Name of a table or index in the database file
       tblname clob,     -- Name of associated table
       is_index boolean, -- TRUE if it is an index, false for a table
       nentry int,       -- Number of entries in the BTree
       leaf_entries int, -- Number of leaf entries
       depth int,        -- Depth of the b-tree
       payload int,      -- Total amount of data stored in this table or index
       ovfl_payload int, -- Total amount of data stored on overflow pages
       ovfl_cnt int,     -- Number of entries that use overflow
       mx_payload int,   -- Maximum payload size
       int_pages int,    -- Number of interior pages used
       leaf_pages int,   -- Number of leaf pages used
       ovfl_pages int,   -- Number of overflow pages used
       int_unused int,   -- Number of unused bytes on interior pages
       leaf_unused int,  -- Number of unused bytes on primary pages
       ovfl_unused int,  -- Number of unused bytes on overflow pages
       gap_cnt int,      -- Number of gaps in the page layout
       compressed_size int  -- Total bytes stored on disk
    );
    INSERT INTO space_used VALUES('sqlite_schema','sqlite_schema',0,36,36,1,5188,0,0,379,0,1,0,0,27309,0,0,32768);
    INSERT INTO space_used VALUES('moz_places','moz_places',0,10955,10894,2,1838131,0,0,1867,1,62,0,32207,121406,0,30,2064384);
    INSERT INTO space_used VALUES('moz_historyvisits','moz_historyvisits',0,15884,15873,2,308447,0,0,21,1,12,0,32668,5435,0,8,425984);
    INSERT INTO space_used VALUES('moz_inputhistory','moz_inputhistory',0,8,8,1,341,0,0,71,0,1,0,0,32379,0,0,32768);
    INSERT INTO space_used VALUES('sqlite_autoindex_moz_inputhistory_1','moz_inputhistory',1,8,8,1,301,0,0,65,0,1,0,0,32435,0,0,32768);
    INSERT INTO space_used VALUES('moz_hosts','moz_hosts',0,628,628,1,14640,0,0,49,0,1,0,0,15012,0,0,32768);
    INSERT INTO space_used VALUES('sqlite_autoindex_moz_hosts_1','moz_hosts',1,628,628,1,13000,0,0,47,0,1,0,0,17876,0,0,32768);
    INSERT INTO space_used VALUES('moz_bookmarks','moz_bookmarks',0,313,313,1,21937,0,0,518,0,1,0,0,9358,0,0,32768);
    INSERT INTO space_used VALUES('moz_bookmarks_roots','moz_bookmarks_roots',0,5,5,1,47,0,0,11,0,1,0,0,32693,0,0,32768);
    INSERT INTO space_used VALUES('sqlite_autoindex_moz_bookmarks_roots_1','moz_bookmarks_roots',1,5,5,1,47,0,0,11,0,1,0,0,32698,0,0,32768);
    INSERT INTO space_used VALUES('moz_keywords','moz_keywords',0,0,0,1,0,0,0,0,0,1,0,0,32760,0,0,32768);
    INSERT INTO space_used VALUES('sqlite_autoindex_moz_keywords_1','moz_keywords',1,0,0,1,0,0,0,0,0,1,0,0,32760,0,0,32768);
    INSERT INTO space_used VALUES('sqlite_sequence','sqlite_sequence',0,1,1,1,15,0,0,15,0,1,0,0,32741,0,0,32768);
    INSERT INTO space_used VALUES('moz_favicons','moz_favicons',0,481,471,2,297630,0,0,7640,1,11,0,32676,59923,0,6,393216);
    INSERT INTO space_used VALUES('sqlite_autoindex_moz_favicons_1','moz_favicons',1,471,470,2,35135,0,0,7259,1,2,0,32664,29057,0,1,98304);
    INSERT INTO space_used VALUES('moz_anno_attributes','moz_anno_attributes',0,12,12,1,355,0,0,42,0,1,0,0,32357,0,0,32768);
    INSERT INTO space_used VALUES('sqlite_autoindex_moz_anno_attributes_1','moz_anno_attributes',1,12,12,1,366,0,0,43,0,1,0,0,32358,0,0,32768);
    INSERT INTO space_used VALUES('moz_annos','moz_annos',0,195,195,1,12115,0,0,127,0,1,0,0,19702,0,0,32768);
    INSERT INTO space_used VALUES('moz_items_annos','moz_items_annos',0,79,79,1,8649,0,0,384,0,1,0,0,23743,0,0,32768);
    INSERT INTO space_used VALUES('sqlite_stat1','sqlite_stat1',0,15,15,1,762,0,0,62,0,1,0,0,31923,0,0,32768);
    INSERT INTO space_used VALUES('moz_places_faviconindex','moz_places',1,10894,10891,2,83178,0,0,8,1,4,0,32711,15213,0,3,163840);
    INSERT INTO space_used VALUES('moz_places_hostindex','moz_places',1,10894,10885,2,237383,0,0,49,1,10,0,32473,57782,0,7,360448);
    INSERT INTO space_used VALUES('moz_places_visitcount','moz_places',1,10894,10891,2,66129,0,0,8,1,4,0,32717,32256,0,3,163840);
    INSERT INTO space_used VALUES('moz_places_frecencyindex','moz_places',1,10894,10891,2,76772,0,0,9,1,4,0,32714,21616,0,3,163840);
    INSERT INTO space_used VALUES('moz_places_lastvisitdateindex','moz_places',1,10894,10889,2,150784,0,0,14,1,6,0,32651,13179,0,4,229376);
    INSERT INTO space_used VALUES('moz_historyvisits_placedateindex','moz_historyvisits',1,15873,15863,2,267273,0,0,17,1,11,0,32516,45668,0,8,393216);
    INSERT INTO space_used VALUES('moz_historyvisits_fromindex','moz_historyvisits',1,15873,15869,2,100292,0,0,7,1,5,0,32702,15927,0,4,196608);
    INSERT INTO space_used VALUES('moz_historyvisits_dateindex','moz_historyvisits',1,15873,15865,2,206221,0,0,13,1,9,0,32596,41128,0,6,327680);
    INSERT INTO space_used VALUES('moz_bookmarks_itemindex','moz_bookmarks',1,313,313,1,2547,0,0,9,0,1,0,0,29274,0,0,32768);
    INSERT INTO space_used VALUES('moz_bookmarks_parentindex','moz_bookmarks',1,313,313,1,2393,0,0,9,0,1,0,0,29428,0,0,32768);
    INSERT INTO space_used VALUES('moz_bookmarks_itemlastmodifiedindex','moz_bookmarks',1,313,313,1,5020,0,0,17,0,1,0,0,26801,0,0,32768);
    INSERT INTO space_used VALUES('moz_places_url_uniqueindex','moz_places',1,10894,10859,2,1010666,0,0,1823,1,36,0,24134,143261,0,16,1212416);
    INSERT INTO space_used VALUES('moz_places_guid_uniqueindex','moz_places',1,10894,10887,2,196000,0,0,18,1,8,0,32581,33545,0,5,294912);
    INSERT INTO space_used VALUES('moz_bookmarks_guid_uniqueindex','moz_bookmarks',1,313,313,1,5207,0,0,17,0,1,0,0,26614,0,0,32768);
    INSERT INTO space_used VALUES('moz_annos_placeattributeindex','moz_annos',1,195,195,1,1871,0,0,10,0,1,0,0,30304,0,0,32768);
    INSERT INTO space_used VALUES('moz_items_annos_itemattributeindex','moz_items_annos',1,79,79,1,562,0,0,9,0,1,0,0,31961,0,0,32768);
    INSERT INTO space_used VALUES('moz_keywords_placepostdata_uniqueindex','moz_keywords',1,0,0,1,0,0,0,0,0,1,0,0,32760,0,0,32768);
    COMMIT;

1.3. Definitions
-------------------

    *** Definitions ***************************************************************

    Page size in bytes

        The number of bytes in a single page of the database file.  
        Usually 1024.

    Number of pages in the whole file

        The number of 32768-byte pages that go into forming the complete
        database

    Pages that store data

        The number of pages that store data, either as primary B*Tree pages or
        as overflow pages.  The number at the right is the data pages divided by
        the total number of pages in the file.

    Pages on the freelist

        The number of pages that are not currently in use but are reserved for
        future use.  The percentage at the right is the number of freelist pages
        divided by the total number of pages in the file.

    Pages of auto-vacuum overhead

        The number of pages that store data used by the database to facilitate
        auto-vacuum. This is zero for databases that do not support auto-vacuum.

    Number of tables in the database

        The number of tables in the database, including the SQLITE_SCHEMA table
        used to store schema information.

    Number of indices

        The total number of indices in the database.

    Number of defined indices

        The number of indices created using an explicit CREATE INDEX statement.

    Number of implied indices

        The number of indices used to implement PRIMARY KEY or UNIQUE constraints
        on tables.

    Size of the file in bytes

        The total amount of disk space used by the entire database files.

    Bytes of user payload stored

        The total number of bytes of user payload stored in the database. The
        schema information in the SQLITE_SCHEMA table is not counted when
        computing this number.  The percentage at the right shows the payload
        divided by the total file size.

    Percentage of total database

        The amount of the complete database file that is devoted to storing
        information described by this category.

    Number of entries

        The total number of B-Tree key/value pairs stored under this category.

    Bytes of storage consumed

        The total amount of disk space required to store all B-Tree entries
        under this category.  The is the total number of pages used times
        the pages size.

    Bytes of payload

        The amount of payload stored under this category.  Payload is the data
        part of table entries and the key part of index entries.  The percentage
        at the right is the bytes of payload divided by the bytes of storage 
        consumed.

    Average payload per entry

        The average amount of payload on each entry.  This is just the bytes of
        payload divided by the number of entries.

    Average unused bytes per entry

        The average amount of free space remaining on all pages under this
        category on a per-entry basis.  This is the number of unused bytes on
        all pages divided by the number of entries.

    Non-sequential pages

        The number of pages in the table or index that are out of sequence.
        Many filesystems are optimized for sequential file access so a small
        number of non-sequential pages might result in faster queries,
        especially for larger database files that do not fit in the disk cache.
        Note that after running VACUUM, the root page of each table or index is
        at the beginning of the database file and all other pages are in a
        separate part of the database file, resulting in a single non-
        sequential page.

    Maximum payload per entry

        The largest payload size of any entry.

    Entries that use overflow

        The number of entries that user one or more overflow pages.

    Total pages used

        This is the number of pages used to hold all information in the current
        category.  This is the sum of index, primary, and overflow pages.

    Index pages used

        This is the number of pages in a table B-tree that hold only key (rowid)
        information and no data.

    Primary pages used

        This is the number of B-tree pages that hold both key and data.

    Overflow pages used

        The total number of overflow pages used for this category.

    Unused bytes on index pages

        The total number of bytes of unused space on all index pages.  The
        percentage at the right is the number of unused bytes divided by the
        total number of bytes on index pages.

    Unused bytes on primary pages

        The total number of bytes of unused space on all primary pages.  The
        percentage at the right is the number of unused bytes divided by the
        total number of bytes on primary pages.

    Unused bytes on overflow pages

        The total number of bytes of unused space on all overflow pages.  The
        percentage at the right is the number of unused bytes divided by the
        total number of bytes on overflow pages.

    Unused bytes on all pages

        The total number of bytes of unused space on all primary and overflow 
        pages.  The percentage at the right is the number of unused bytes 
        divided by the total number of bytes.



# 🍀 /61. The Fossil Version Control System
                                                         *fossil*
7. https://www.fossil-scm.org/home/doc/trunk/www/quickstart.wiki

01. Installing
                                                         [install]
02. General Work Flow
                                                       [workflow]
03. Starting A New Project
                                                           [new]
04. Cloning An Existing Repository
                                                          [clone]
05. Importing From Another Version Control System
                                                         [import]
06. Checking Out A Local Tree
                                                        [checkout]
07. Making and Committing Changes
                                                        [changes]
08. Naming of Files, Checkins, and Branches
                                                         [naming]
09. Configuring Your Local Repository
                                                         [config]
10. Sharing Changes
                                                        [sharing]
11. Branching And Merging
                                                         [branch]
12. Setting Up A Server
                                                         [server]
13. HTTP Proxies
                                                          [proxy]
14. Other Resources
                                                          [links]

Fossil Quick Start

This is a guide to help you get started using the Fossil Distributed Version Control System quickly and painlessly.
https://en.wikipedia.org/wiki/Distributed_version_control

## 🐣 Installing
                                                         *install*

Fossil is a single self-contained C program.  You need to
either download a
<a href="https://fossil-scm.org/home/uv/download.html">precompiled
binary</a>
or <a href="build.wiki">compile it yourself</a> from sources.
Install Fossil by putting the fossil binary
someplace on your $PATH.

You can test that Fossil is present and working like this:

```sh
fossil version
This is fossil version 2.13 [309af345ab] 2020-09-28 04:02:55 UTC
```


## 🐣 General Work Flow
                                                       *workflow*

Fossil works with repository files (a database in a single file with the project's
complete history) and with checked-out local trees (the working directory
you use to do your work). 
(See <a href="./glossary.md">the glossary</a> for more background.)
The workflow looks like this:

01. Create or clone a repository file.  (fossil init or fossil clone)
02. Check out a local tree.  (fossil open)
03. Perform operations on the repository (including repository configuration).

Fossil can be entirely driven from the command line. Many features
can also be conveniently accessed from the built-in web user interface.

The following sections give a brief overview of these
operations.

## 🐣 Starting A New Project
                                                           *new*

To start a new project with fossil create a new empty repository
this way: (<a href="/home/help/init">more info</a>)

```sh
fossil init  repository-filename
```

You can name the database anything you like, and you can place it anywhere in the filesystem.
The .fossil extension is traditional but only required if you are going to use the 
<a href="/home/help/server">fossil server DIRECTORY</a> feature.”

## 🐣 Cloning An Existing Repository
                                                          *clone*

Most fossil operations interact with a repository that is on the
local disk drive, not on a remote system.  Hence, before accessing
a remote repository it is necessary to make a local copy of that
repository.  Making a local copy of a remote repository is called
"cloning".

Clone a remote repository as follows: (<a href="/home/help/clone">more info</a>)

```sh
fossil clone URL  repository-filename
```

The URL specifies the fossil repository
you want to clone.  The repository-filename is the new local
filename into which the cloned repository will be written.  For
example, to clone the source code of Fossil itself:

```sh
fossil clone https://fossil-scm.org/ myclone.fossil
```

If your logged-in username is 'exampleuser', you should see output something like this:

```sh
    Round-trips: 8   Artifacts sent: 0  received: 39421
    Clone done, sent: 2424  received: 42965725  ip: 10.10.10.0
    Rebuilding repository meta-data...
    100% complete...
    Extra delta compression... 
    Vacuuming the database... 
    project-id: 94259BB9F186226D80E49D1FA2DB29F935CCA0333
    server-id:  016595e9043054038a9ea9bc526d7f33f7ac0e42
    admin-user: exampleuser (password is "yoWgDR42iv")>
```

If the remote repository requires a login, include a
userid in the URL like this:

```sh
fossil clone https://remoteuserid@www.example.org/ myclone.fossil
```

You will be prompted separately for the password.
Use <a href="https://en.wikipedia.org/wiki/Percent-encoding#Percent-encoding_reserved_characters">"%HH"</a> escapes for special characters in the userid.
For example "/" would be replaced by "%2F" meaning that a userid of "Projects/Budget" would become "Projects%2FBudget")

If you are behind a restrictive firewall, you might need
to <a href="#proxy">specify an HTTP proxy</a>.

A Fossil repository is a single disk file.  Instead of cloning,
you can just make a copy of the repository file (for example, using
"scp").  Note, however, that the repository file contains auxiliary
information above and beyond the versioned files, including some
sensitive information such as password hashes and email addresses.  If you
want to share Fossil repositories directly by copying, consider running the
<a href="/home/help/scrub">fossil scrub</a> command to remove sensitive information
before transmitting the file.

## 🐣 Importing From Another Version Control System
                                                         *import*

Rather than start a new project, or clone an existing Fossil project,
you might prefer to
<a href="./inout.wiki">import an existing Git project</a>
into Fossil using the <a href="/home/help/import">fossil import</a> command. 

You can even decide to export your project back into git using the
<a href="/home/help/git">fossil git</a> command, which is how the Fossil project maintains
<a href="https://github.com/drhsqlite/fossil-mirror">its public GitHub mirror</a>. There
is no limit to the number of times a tree can be imported and exported between
Fossil and git.

The <a href="https://git-scm.com/docs/git-fast-export">Git fast-export format</a> has become
a popular way to move files between version management systems, including from
<a href="https://www.mercurial-scm.org/">Mercurial</a>.
Fossil can also import <a href="https://subversion.apache.org/">Subversion projects</a> directly.

## 🐣 Checking Out A Local Tree
                                                        *checkout*

To work on a project in fossil, you need to check out a local
copy of the source tree.  Create the directory you want to be
the root of your tree and cd into that directory.  Then
do this: (<a href="/home/help/open">more info</a>)

```sh
fossil open  repository-filename
```

for example:

```sh

    fossil open ../myclone.fossil
    BUILD.txt
    COPYRIGHT-BSD2.txt
    README.md
      ︙

```

(or "fossil open ..\myclone.fossil" on Windows).

This leaves you with the newest version of the tree
checked out.
From anywhere underneath the root of your local tree, you
can type commands like the following to find out the status of
your local tree:

```sh
fossil info
fossil status
fossil changes
fossil diff
fossil timeline
fossil ls
fossil branch
```

If you created a new repository using "fossil init" some commands will not
produce much output.

Note that Fossil allows you to make multiple check-outs in
separate directories from the same repository.  This enables you,
for example, to do builds from multiple branches or versions at
the same time without having to generate extra clones.

To switch a checkout between different versions and branches,
use:<

```sh
fossil update
fossil checkout
```

<a href="/home/help/update">update</a> honors the "autosync" option and
does a "soft" switch, merging any local changes into the target
version, whereas <a href="/home/help/checkout">checkout</a> does not
automatically sync and does a "hard" switch, overwriting local
changes if told to do so.

## 🐣 Making and Committing Changes
                                                        *changes*

To add new files to your project or remove existing ones, use these
commands:

```sh
fossil add file...
fossil rm file...
fossil addremove file...
```

The command:

```sh
fossil changes
```

lists files that have changed since the last commit to the repository. For
example, if you edit the file "README.md":

```sh
    fossil changes
    EDITED     README.md
```

To see exactly what change was made you can use the command
<a href="/home/help/diff">fossil diff</a>:

```sh
    fossil diff 
    Index: README.md
    ============================================================
    --- README.md
    +++ README.md
    @@ -1,5 +1,6 @@
    +Made some changes to the project
    # Original text
```

"fossil diff" shows the difference between your tree on disk now and as
the tree was when you last committed changes. If you haven't committed
yet, then it shows the difference relative to the tip-of-trunk commit in
the repository, being what you get when you "fossil open" a repository
without specifying a version, populating the working directory.

To see the most recent changes made to the repository by other users, use "fossil timeline" to
find out the most recent commit, and then "fossil diff" between that commit and the
current tree:

```sh
    fossil timeline 
    === 2021-03-28 === 
    03:18:54 <span class="brokenlink">[ad75dfa4a0]</span> *CURRENT* Added details to frobnicate command (user: user-one tags: trunk) 
    === 2021-03-27 === 
    23:58:05 <span class="brokenlink">[ab975c6632]</span> Update README.md. (user: user-two tags: trunk) 
         ⋮ 
    
    fossil diff --from current --to ab975c6632 
    Index: frobnicate.c
    ============================================================
    --- frobnicate.c
    +++ frobnicate.c
    @@ -1,10 +1,11 @@
    +/* made a change to the source file */
    # Original text
```

"current" is an alias for the checkout version, so the command
"fossil diff --from ad75dfa4a0 --to ab975c6632" gives identical results.

To commit your changes to a local-only repository:

```sh
fossil commit     (... Fossil will start your editor, if defined)
# Enter a commit message for this check-in. Lines beginning with # are ignored.
#
# user: exampleuser
# tags: trunk
#
# EDITED     README.md
Edited file to add description of code changes
New_Version: 7b9a416ced4a69a60589dde1aedd1a30fde8eec3528d265dbeed5135530440ab
```

You will be prompted for check-in comments using whatever editor
is specified by your VISUAL or EDITOR environment variable. If none is
specified Fossil uses line-editing in the terminal.

To commit your changes to a repository that was cloned from a remote
repository, you give the same command, but the results are different.
Fossil defaults to <a href="./concepts.wiki#workflow">autosync</a> mode, a
single-stage commit that sends all changes committed to the local
repository immediately on to the remote parent repository. This only
works if you have write permission to the remote respository.

## 🐣 Naming of Files, Checkins, and Branches
                                                         *naming*

Fossil deals with information artifacts. This Quickstart document only deals
with files and collections of files, but be aware there are also tickets, wiki pages and more. 
Every artifact in Fossil has a universally-unique hash id, and may also have a
human-readable name.

The following are all equivalent ways of identifying a Fossil file,
checkin or branch artifact:


-   the full unique SHA-256 hash, such as 
    be836de35a821523beac2e53168e135d5ebd725d7af421e5f736a28e8034673a
-   an abbreviated hash prefix, such as the first ten characters: 
    be836de35a . This won't be universally unique, but it is usually unique within any one repository. As an example, the <a href="https://fossil-scm.org/home/hash-collisions">Fossil project hash collisions</a> showed at the time of writing that there are no artifacts with identical first 8 characters
-   a branch name, such as "special-features" or "juliet-testing". 
    Each branch also has a unique SHA-256 hash


A special convenience branch is "trunk", which is Fossil's default branch name for
the first checkin, and the default for any time a branch name is needed but not
specified.

This will get you started on identifying checkins. The
<a href="./checkin_names.wiki">Checkin Names document</a> is a complete reference, including
how timestamps can also be used.

## 🐣 Configuring Your Local Repository
                                                         *config*

When you create a new repository, either by cloning an existing
project or create a new project of your own, you usually want to do some
local configuration.  This is easily accomplished using the web-server
that is built into fossil.  Start the fossil web server like this:
(<a href="/home/help/ui">more info</a>)

```sh
fossil ui  repository-filename
```

You can omit the repository-filename from the command above
if you are inside a checked-out local tree.

This starts a web server then automatically launches your
web browser and makes it point to this web server.  If your system
has an unusual configuration, fossil might not be able to figure out
how to start your web browser.  In that case, first tell fossil
where to find your web browser using a command like this:

```sh
fossil setting web-browser   path-to-web-browser
```

By default, fossil does not require a login for HTTP connections
coming in from the IP loopback address 127.0.0.1.  You can, and perhaps
should, change this after you create a few users.

When you are finished configuring, just press Control-C or use
the kill command to shut down the mini-server.

## 🐣 Sharing Changes
                                                        *sharing*

When <a href="./concepts.wiki#workflow">autosync</a> is turned off,
the changes you <a href="/home/help/commit">commit</a> are only
on your local repository.
To share those changes with other repositories, do:

```sh
fossil push URL
```

Where URL is the http: URL of the server repository you
want to share your changes with.  If you omit the URL argument,
fossil will use whatever server you most recently synced with.

The <a href="/home/help/push">push</a> command only sends your changes to others.  To
Receive changes from others, use <a href="/home/help/pull">pull</a>.  Or go both ways at
once using <a href="/home/help/sync">sync</a>:

```sh
fossil pull URL
fossil sync URL
```

When you pull in changes from others, they go into your repository,
not into your checked-out local tree.  To get the changes into your
local tree, use <a href="/home/help/update">update</a>:

```sh
fossil update VERSION
```

The VERSION can be the name of a branch or tag or any
abbreviation to the 40-character
artifact identifier for a particular check-in, or it can be a
date/time stamp.  (<a href="./checkin_names.wiki">more info</a>)
If you omit
the VERSION, then fossil moves you to the
latest version of the branch your are currently on.

The default behavior is for <a href="./concepts.wiki#workflow">autosync</a> to
be turned on.  That means that a <a href="/home/help/pull">pull</a> automatically occurs
when you run <a href="/home/help/update">update</a> and a <a href="/home/help/push">push</a> happens
automatically after you <a href="/home/help/commit">commit</a>.  So in normal practice,
the push, pull, and sync commands are rarely used.  But it is important
to know about them, all the same.

```sh
fossil checkout VERSION
```

Is similar to update except that it does not honor the autosync
setting, nor does it merge in local changes - it prefers to overwrite
them and fails if local changes exist unless the --force
flag is used.

## 🐣 Branching And Merging
                                                         *branch*

Use the --branch option to the <a href="/home/help/commit">commit</a> command
to start a new branch.  Note that in Fossil, branches are normally
created when you commit, not before you start editing.  You can
use the <a href="/home/help/branch">branch new</a> command to create a new branch
before you start editing, if you want, but most people just wait
until they are ready to commit.

To merge two branches back together, first
<a href="/home/help/update">update</a> to the branch you want to merge into.
Then do a <a href="/home/help/merge">merge</a> of the other branch that you want to incorporate
the changes from.  For example, to merge "featureX" changes into "trunk"
do this:

```sh
fossil update trunk
fossil merge featureX
# make sure the merge didn't break anything...
fossil commit
```

The argument to the <a href="/home/help/merge">merge</a> command can be any of the
version identifier forms that work for <a href="/home/help/update">update</a>.
(<a href="./checkin_names.wiki">more info</a>.)
The merge command has options to cherry-pick individual
changes, or to back out individual changes, if you don't want to
do a full merge.

The merge command puts all changes in your working check-out.
No changes are made to the repository.
You must run <a href="/home/help/commit">commit</a> separately
to add the merge changes into your repository to make them persistent
and so that your coworkers can see them.
But before you do that, you will normally want to run a few tests
to verify that the merge didn't cause logic breaks in your code.

The same branch can be merged multiple times without trouble. Fossil
automatically keeps up with things and avoids conflicts when doing
multiple merges.  So even if you have merged the featureX branch
into trunk previously, you can do so again and Fossil will automatically
know to pull in only those changes that have occurred since the previous
merge.

If a merge or update doesn't work out (perhaps something breaks or
there are many merge conflicts) then you back up using:

```sh
fossil undo
```

This will back out the changes that the merge or update made to the
working checkout.  There is also a <a href="/home/help/redo">redo</a> command if you undo by
mistake.  Undo and redo only work for changes that have
not yet been checked in using commit and there is only a single
level of undo/redo.

## 🐣 Setting Up A Server
                                                         *server*

Fossil can act as a stand-alone web server using one of these
commands:

```sh
fossil server repository-filename
fossil ui repository-filename
```

The repository-filename can be omitted when these commands
are run from within an open check-out, which is a particularly useful
shortcut with the fossil ui command.

The ui command is intended for accessing the web user interface
from a local desktop. (We sometimes call this mode "Fossil UI.")
The ui command differs from the
server command by binding to the loopback IP
address only (thus making the web UI visible only on the
local machine) and by automatically starting your default web browser,
pointing it at the running UI
server. The localhost restriction exists because it also gives anyone
who can access the resulting web UI full control over the
repository. (This is the <a href="./caps/admin-v-setup.md#apsu">all-powerful
Setup capabliity</a>.)

For cross-machine collaboration, use the server command instead,
which binds on all IP addresses, does not try to start a web browser,
and enforces <a href="./caps/">Fossil's role-based access control system</a>.

Servers are also easily configured as:

01. inetd 
    https://www.fossil-scm.org/home/doc/trunk/www/server/any/inetd.md
02. systemd 
    https://www.fossil-scm.org/home/doc/trunk/www/server/debian/service.md
03. CGI 
    https://www.fossil-scm.org/home/doc/trunk/www/server/any/cgi.md
04. SCGI 
    https://www.fossil-scm.org/home/doc/trunk/www/server/any/scgi.md

…along with <a href="./server/#matrix">several other options</a>.

The <a href="./selfhost.wiki">self-hosting fossil repositories</a> use
CGI.

You might need to set up a server, whether you know it yet or
not.  See the <a href="./server/whyuseaserver.wiki">Benefits of a Fossil Server</a>
article for details.

## 🐣 HTTP Proxies
                                                          *proxy*

If you are behind a restrictive firewall that requires you to use
an HTTP proxy to reach the internet, then you can configure the proxy
in three different ways.  You can tell fossil about your proxy using
a command-line option on commands that use the network,
sync, clone, push, and pull.

```sh
fossil clone URL  --proxy Proxy-URL
```

It is annoying to have to type in the proxy URL every time you
sync your project, though, so you can make the proxy configuration
persistent using the <a href="/home/help/setting">setting</a> command:

```sh
fossil setting proxy Proxy-URL
```

Or, you can set the "http_proxy" environment variable:

```sh
export http_proxy=Proxy-URL
```

To stop using the proxy, do:

```sh
fossil setting proxy off
```

Or unset the environment variable.  The fossil setting for the
HTTP proxy takes precedence over the environment variable and the
command-line option overrides both.  If you have a persistent
proxy setting that you want to override for a one-time sync, that
is easily done on the command-line.  For example, to sync with
a co-worker's repository on your LAN, you might type:

```sh
fossil sync http://192.168.1.36:8080/ --proxy off
```

## 🐣 Other Resources
                                                          *links*

01. Hints For Users With Prior Git Experience
    https://www.fossil-scm.org/home/doc/trunk/www/gitusers.md
02. Why You Should Use Fossil
    https://www.fossil-scm.org/home/doc/trunk/www/whyusefossil.wiki
03. The History and Purpose of Fossil
    https://www.fossil-scm.org/home/doc/trunk/www/history.md
04. Branching, Forking, and Tagging
    https://www.fossil-scm.org/home/doc/trunk/www/branching.wiki
05. Fossil Tips and Usage Hints
    https://www.fossil-scm.org/home/doc/trunk/www/hints.wiki
06. Comprehensive Fossil Doc Index
    https://www.fossil-scm.org/home/doc/trunk/www/permutedindex.html


# 🍀 /Sqlite3 WebAssembly & JavaScript Documentation Index
https://sqlite.org/wasm/doc/trunk/index.md

This site is home to the documentation for the SQLite project's
WebAssembly- and JavaScript-related APIs, which enable the use of
<a href="https://sqlite.org/">sqlite3</a> in modern WASM-capable browsers. These components
were initially released for public beta with version 3.40 and will
tentatively be made API-stable with the 3.41 release, pending
community feedback.

Disclaimer: this site requires a modern, JavaScript-capable browser
for full functionality. This site uses client-side storage for storing
certain browsing preferences (like the bright/dark mode toggle) but
does not store any user information server-side, except for logged-in
developers. The only user-level details this site shares with any
other systems are the public SCM-related details of this site's own
developers.

Site Overview
<!-- https://unicode.org/emoji/charts/full-emoji-list.html -->

https://sqlite.org/wasm/doc/trunk/about.md
About the sqlite3 WASM subproject:


-  📰 https://sqlite.org/wasm/doc/trunk//news.md
        Project news
-  💬 https://sqlite.org/wasm/doc/trunk//faq.md
        Frequently Asked Questions
-  🚧 https://sqlite.org/wasm/doc/trunk//todo.md
        TODOs and (un)planned features
-  ☎ https://sqlite.org/forum/
    Technical support is provided, and feedback gladly accepted, via the sqlite forum. Those with <a href="https://sqlite.org/prosupport.html">commercial SQLite support contracts may use their usual support channels.


Making use of this project:

-  👣 https://sqlite.org/wasm/doc/trunk/demo-123.md
    The three-step HOWTO demonstrates how to include and run the sqlite3 WASM module and its associated JavaScript APIs.
-  💾 https://sqlite.org/download.html
    Downloads are available via the main project downloads page.
    -  📸 https://sqlite.org/wasm/uv/snapshot.html
        Prerelease snapshots are updated from time to time
    -  📦 https://sqlite.org/wasm/doc/trunk/npm.md
        npm module
-  🛠 https://sqlite.org/wasm/doc/trunk/building.md
    Building sqlite3 WASM and its associated JS code.
    -  https://sqlite.org/wasm/doc/trunk/emscripten.md
        Emscripten build specifics
-  📇 https://sqlite.org/wasm/doc/trunk/api-index.md
    The API index describes the various API variants and how to load and access them.

    -  🧑‍🍳 https://sqlite.org/wasm/doc/trunk/cookbook.md
        Cookbook of recipes for client-level code
    -  💾 https://sqlite.org/wasm/doc/trunk/persistence.md
        Persistent storage options
    -  🤓 https://sqlite.org/wasm/doc/trunk/c-structs.md
        Using C-structs in the JS API
    -  🧱 https://sqlite.org/wasm/doc/trunk/vtab.md
        Creating virtual tables and table-valued functions in JS
    -  💣 https://sqlite.org/wasm/doc/trunk/api-changes.md
        API changes which might affect clients
    -  🔭 https://sqlite.org/wasm/doc/trunk/module-symbols.html
        sqlite3 Module Symbols
        The module symbols app generates lists of sqlite3 API symbols from the JavaScript/WASM module.


About this documentation:


-  📜 https://sqlite.org/wasm/doc/trunk/license.md
-  🚧 https://sqlite.org/wasm/doc/trunk/doc-maintenance.md
    Doc and repository maintenance


## 🐣 In the Wild
Third-party projects known to be using this project include (in order
of their addition to this list)...


-  https://github.com/nalgeon/sqlime
    SQLime provides a database browser interface.
-  https://github.com/evoluhq/evolu
    Evolu is a React Hooks library for local-first apps.
-  https://github.com/mandolyte/sqlitenext
    SQLiteNext provides a demo of integrating this project with next.js.
-  https://github.com/overtone-app/sqlite-wasm-esm
    sqlite-wasm-esm demonstrates how to use this project with the Vite toolchain.
-  https://www.npmjs.com/package/sqlite-wasm-http
    sqlite-wasm-http provides an SQLite VFS with read-only access to databases which are served directly over HTTP.


## 🐣 Related Works

(In the order in which we became aware of them...)

-  Alon Zakai's sql.js is the first known direct usage of sqlite3 in 
    a web browser, dating back to 2012, not counting WebSQL (which was a native-level feature and has long since been removed from most browsers).
    https://github.com/sql-js/sql.js
    https://github.com/kripken/sql.js/commit/cebd80648dbd369b34804c5a00b4d0bddc1cbf05
-  Roy Hashimoto's wa-sqlite is home to the first known implementation of
    OPFS storage of sqlite3 databases.
    https://github.com/rhashimoto/wa-sqlite
    https://sqlite.org/wasm/doc/trunk/persistence.md
-  James Long's absurd-js demonstrates storing sqlite3 databases inside IndexedDB databases.
    https://github.com/jlongster/absurd-sql
-  postgres-wasm runs a Postgres database server in a browser.
    https://www.postgresql.org
    https://supabase.com/blog/postgres-wasm
-  Jaccwabyt is a small JS library for manipulating WASM-hosted C structs 
    via JS code, created specifically to support the OPFS sqlite3_vfs implementation in this project. This project embeds a copy but does not expose it to client applications.
    https://fossil.wanderinghorse.net/r/jaccwabyt
    https://sqlite.org/wasm/doc/trunk/persistence.md#vfs-opfs
-  CoWasm is "Collaborative WebAssembly for Servers and Browsers". 
    Their demo app includes a WASM build of the sqlite3 shell application.
    https://github.com/sagemathinc/cowasm
    https://cowasm.sh/
-  Evan Brass's build uses a WASI SDK build, instead of Emscripten, 
    and demonstrates some novel features which this project's WASM build does not.
    https://sqlite.org/forum/forumpost/ca6139791c
    https://github.com/WebAssembly/wasi-sdk


## 🐣 Third-party Documentation and Articles
The following links reference articles and documentation published
about SQLite WASM by third parties:

<!-- , listed in order of their addition here: -->


-  Porting WebSQL to OPFS, by the Google Chrome dev team
    https://developer.chrome.com/blog/from-web-sql-to-sqlite-wasm/
-  The VMWare OCTO team writes about building SQLite3 for WASI
    https://wasmlabs.dev/articles/sqlite-wasi-support/


## 🐣 Sqlite3 Wasm Module Symbols

C-language Interface Specification for SQLite
https://sqlite.org/capi3ref.html

The sqlite3 namespace object exposes the following...

01. capi  [object] C-style API https://sqlite.org/capi3ref.html
02. oo1  [object] high-level OO API https://sqlite.org/wasm/doc/trunk/api-oo1.md
03. vfs   [object] virtual filesystem (VFS) https://www.sqlite.org/vfs.html
04. vtab  [object] virtual table module https://www.sqlite.org/vtab.html
05. wasm [object] WebAssembly module https://sqlite.org/wasm/
06. client [undefined]
07. config [object]
08. initWorker1API()
09. installOpfsSAHPoolVfs()
10. SQLite3Error()
11. version [object]
12. WasmAllocError()


The sqlite3.version object exposes the following...

    downloadVersion = 3430000
    libVersion = "3.43.0"
    libVersionNumber = 3043000
    sourceId = "2023-08-11 11:30:43 00bc9f1b573d683829bf5eb301606c38d6a60fba957d8edaf59116c02cc6alt1"

sqlite3_...() Function List
The sqlite3.capi namespace exposes the following
https://sqlite.org/c3ref/funclist.html

WASM = function is specific to the JS/WASM bindings, not part of the C API.


SQLITE_... Constants
The sqlite3.capi namespace exposes the following
https://sqlite.org/c3ref/constlist.html


sqlite3.oo1 Namespace
The sqlite3.oo1 namespace exposes the following...

    DB()        JsStorageDb()           Stmt()

sqlite3.wasm Namespace
The sqlite3.wasm namespace exposes the following...

    alloc()                heapForSize()         poke8()
    allocCString()         installFunction()     pokePtr()
    allocFromTypedArray()  isPtr()               pstack [object]
    allocMainArgv()        isPtr32()             ptrIR = "i32"
    allocPtr()             jsFuncToWasm()        ptrSizeof = 4
    bigIntEnabled = true   jstrcpy()             realloc()
    cArgvToJs()            jstrlen()             scopedAlloc()
    compileOptionUsed()    jstrToUintArray()     scopedAllocCall()
    cstrlen()              memory [object]       scopedAllocCString()
    cstrncpy()             peek()                scopedAllocMainArgv()
    cstrToJs()             peek16()              scopedAllocPop()
    dealloc()              peek32()              scopedAllocPtr()
    exports [object]       peek32f()             scopedAllocPush()
    functionEntry()        peek64()              scopedInstallFunction()
    functionTable()        peek64f()             setMemValue()
    getMemValue()          peek8()               setPtrValue()
    getPtrValue()          peekPtr()             sizeofIR()
    heap16()               poke()                uninstallFunction()
    heap16u()              poke16()              xCall()
    heap32()               poke32()              xCallWrapped()
    heap32u()              poke32f()             xGet()
    heap8()                poke64()              xWrap()
    heap8u()               poke64f()             


sqlite3.wasm.pstack Namespace
The sqlite3.wasm.pstack namespace exposes the following...

    alloc()
    allocChunks()
    allocPtr()
    pointer = 132960
    quota = 4096
    remaining = 4096
    restore()

Compilation Options
SQLITE_... compilation options used in this build of sqlite3.wasm...

ATOMIC_INTRINSICS = 1             ENABLE_STMTVTAB = true
COMPILER = "clang-17.0.0"         ENABLE_UNKNOWN_SQL_FUNCTION = true
DEFAULT_AUTOVACUUM = true         MALLOC_SOFT_LIMIT = 1024
DEFAULT_CACHE_SIZE = -16384       MAX_ATTACHED = 10
DEFAULT_FILE_FORMAT = 4           MAX_COLUMN = 2000
DEFAULT_JOURNAL_SIZE_LIMIT = -1   MAX_COMPOUND_SELECT = 500
DEFAULT_MMAP_SIZE = 0             MAX_DEFAULT_PAGE_SIZE = 8192
DEFAULT_PAGE_SIZE = 8192          MAX_EXPR_DEPTH = 1000
DEFAULT_PCACHE_INITSZ = 20        MAX_FUNCTION_ARG = 127
DEFAULT_RECURSIVE_TRIGGERS = true MAX_LENGTH = 1000000000
DEFAULT_SECTOR_SIZE = 4096        MAX_LIKE_PATTERN_LENGTH = 50000
DEFAULT_SYNCHRONOUS = 2           MAX_MMAP_SIZE = 0
DEFAULT_WAL_AUTOCHECKPOINT = 1000 MAX_PAGE_COUNT = 1073741823
DEFAULT_WAL_SYNCHRONOUS = 2       MAX_PAGE_SIZE = 65536
DEFAULT_WORKER_THREADS = 0        MAX_SQL_LENGTH = 1000000000
DQS = 0                           MAX_TRIGGER_DEPTH = 1000
ENABLE_BYTECODE_VTAB = true       MAX_VARIABLE_NUMBER = 32766
ENABLE_DBPAGE_VTAB = true         MAX_VDBE_OP = 250000000
ENABLE_DBSTAT_VTAB = true         MAX_WORKER_THREADS = 0
ENABLE_EXPLAIN_COMMENTS = true    MUTEX_OMIT = true
ENABLE_FTS3 = true                OMIT_DEPRECATED = true
ENABLE_FTS4 = true                OMIT_LOAD_EXTENSION = true
ENABLE_FTS5 = true                OMIT_SHARED_CACHE = true
ENABLE_MATH_FUNCTIONS = true      OMIT_UTF16 = true
ENABLE_OFFSET_SQL_FUNC = true     SYSTEM_MALLOC = true
ENABLE_PREUPDATE_HOOK = true      TEMP_STORE = 2
ENABLE_RTREE = true               THREADSAFE = 0
ENABLE_SESSION = true             USE_URI = true


## 🐣 Cookbook
https://sqlite.org/wasm/doc/trunk/cookbook.md

This page collects "recipes" and tips for implementing common
application-level features, such as...

Upload and Download Databases

A commonly-useful capability is uploading and downloading databases.

### Downloading (exporting) a Database

Downloading is straightforward and easy to implement given just an
opened database handle. Getting the raw bytes of the database is the
first (and easiest) step:

```js
const byteArray = sqlite3.capi.sqlite3_js_db_export(myDb);
```

Then we need a good deal more code to export that byte array
out of the browser. Here's one approach:

```js
const blob = new Blob([byteArray.buffer],
                      {type:"application/x-sqlite3"});
const a = document.createElement('a');
document.body.appendChild(a);
a.href = window.URL.createObjectURL(blob);
a.download = (myDb.filename.split('/').pop() || "my.sqlite3");
a.addEventListener('click',function(){
  setTimeout(function(){
    console.log("Exported (possibly auto-downloaded) database");
    window.URL.revokeObjectURL(a.href);
    a.remove();
  },500);
});
a.click();
```

### Upoading (importing) a Database
Forewarning: this will not work with WAL-mode databases. The WASM
environment lacks the shared-memory APIs required by WASM, so
the WASM build cannot read WAL-mode databases.

Uploading a database into the browser is trickier because the client
has to be able to store the database somewhere, and such storage is
sqlite3_vfs-dependent.  The first step, getting the database bytes, is
fairly generic. First, we need a UI element with which to fetch the
database:

```html
<input type='file' id='load-db'>
```

Then we need to listen to events which will transfer uploaded files
into our JS code. Ignoring such details as a load progress indicator,
that looks something like...

```js
const eUploadDb = document.querySelector('#load-db');
eUploadDb.addEventListener('change',function(){
  const f = this.files[0];
  if(!f) return;
  const r = new FileReader();
  r.addEventListener('load', function(){
    // this.result is an ArrayBuffer with the file's contents
  });
  r.readAsArrayBuffer(f);
});
```

>Sidebar: the loading process includes optional events for things
  such as upload cancellation and upload status. More details about
  those can be found at MDN,
  https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event
  noting that reporting upload status will likely be superfluous for
  all but the most unusual cases, as the transfer of the file content
  into the browser's memory is normally extremely quick.

Once that ArrayBuffer is loaded, we need to decide what to do with it.
We have at least two options. Most simply, we can load it into an
in-memory database:

```js
// assuming arrayBuffer contains the result of the above operation...
const p = sqlite3.wasm.allocFromTypedArray(arrayBuffer);
const db = new sqlite3.oo1.DB();
const rc = sqlite3.capi.sqlite3_deserialize(
  db.pointer, 'main', p, arrayBuffer.byteLength, arrayBuffer.byteLength,
  sqlite3.capi.SQLITE_DESERIALIZE_FREEONCLOSE
  // Optionally:
  // | sqlite3.capi.SQLITE_DESERIALIZE_RESIZEABLE
);
db.checkRc(rc);
```

The last argument to `sqlite3_deserialize()` is significant here for
reasons discussed in the docs for `sqlite3_deserialize()`.
https://sqlite.org/wasm/doc/trunk/api-c-style.md#sqlite3_deserialize

Another alternative is to write the database to storage in a VFS-specific way...

-  For the "opfs" VFS, see the OpfsDb docs.
    https://sqlite.org/wasm/doc/trunk/api-oo1.md#opfsdb
-  For the "opfs-sahpool" VFS, see that VFS's docs.
    https://sqlite.org/wasm/doc/trunk/persistence.md#opfs-sahpool-util
-  For the default VFS ("unix" and its variants), see `sqlite3_js_posix_create_file()`.
    https://sqlite.org/wasm/doc/trunk/api-c-style.md#sqlite3_js_posix_create_file
-  The `"kvvfs"` VFS docs demonstrate how to import another database into kvvfs using `VACUUM INTO`.
    https://sqlite.org/wasm/doc/trunk/persistence.md#kvvfs