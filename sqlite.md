# 🍀 Sqlite 文艺复兴

1. [译] 抛弃你的成见，SQLite 不是一个玩具数据库!
2. https://antonz.org/sqlite-is-not-a-toy-database/
3. https://juejin.cn/post/6962910344545042463
4. Sqlite.Wasm https://sqlite.org/fiddle/
5. Architecture of SQLite https://www.sqlite.org/arch.html
6. SQLite的文艺复兴 https://www.bmpi.dev/dev/renaissance-sqlite/
7. Podcast：The Untold Story of SQLite https://www.bilibili.com/video/BV1Tv4y1C7DZ/

> SQLite - Small. Fast. Reliable. Choose any three.


SQLite 是一个数据库软件，但与绝大部分数据库系统拥有完全不同的运行方式。大部分数据库（MySQL、SQL Server、
PostgreSQL 或 Oracle）系统是 Client/Server 的架构，客户端通过特定的协议比如 JDBC/ODBC 
与数据库服务器通信，数据库服务器通过监听某个 Socket 端口去接收客户端的查询请求，之后将结果返回给客户端。

与其他数据库网络通信的方式相比，SQLite是一个库，它是通过 In-Process 的方式来与应用程序通信的。
当应用程序发出查询请求时，这些请求是通过函数调用的方式在与应用程序相同的线程内执行的。SQLite 
数据库也是存放在磁盘上的单个文件。

作者 Dwayne Richard Hipp 是一个完美主义者，为了能自由的开发 SQLite，他编写了底层的存储引擎、
Parser、源码托管工具 Fossil，除了 C 编译器和一些底层库如 libc 外，Richard 几乎从零构建了 
SQLite 所依赖的库或工具。

1. The Althttpd Webserver https://sqlite.org/althttpd/file?name=althttpd.md
2. Fossil Distributed VCS http://www.fossil-scm.org/
3. sqlite3 WebAssembly https://sqlite.org/wasm/doc/trunk/index.md

The core SQLite project releases only "vanilla JS" distributions which are 
independent of any given developer-side toolchain. However, a community-maintained 
npm-based distribution of the SQLite3 WASM components can be found at 
@sqlite.org/sqlite-wasm.

1. https://www.npmjs.com/package/@sqlite.org/sqlite-wasm
2. https://deno.land/x/sqlite

It can be installed from a command-line shell using:

```sh
# Node Package Manager (npm)
$ npm install @sqlite.org/sqlite-wasm
```

SQLite 官网的说法，保守估计，在任何每天点击量少于10万的网站上，SQLite 都不会是其访问的瓶颈。
多个进程可以同时打开同一个数据库，多个进程可以同时执行 SELECT，但是，在任何时候，只有一个进程
可以对数据库进行更改。

SQLite 适合于高查询、低写入类型地网站，如果一个网站有非常多地写操作，那SQLite就不再适合它了。
SQLite 支持无限数量的同时读取，但是在任何时候都只允许一个写入，虽然可以排队，但是无法应对网站
高并发的要求。除了网站，依赖网络来传输数据的B/S架构的桌面应用程序和移动应用程序也在此列。

SQLite 官网说明数据库的大小限制在 140TB，对于更大型的数据，将其进行分布式存储无疑是更好的选择。



## TOC01. ▼ Document Lists And Indexes

- S01. Alphabetical Listing Of All Documents  
   https://www.sqlite.org/doclist.html                            [doclist_html]

- S02. Website Keyword Index  
   https://www.sqlite.org/keyword_index.html                [keyword_index_html]

- S03. Permuted Title Index  
   https://www.sqlite.org/sitemap.html                            [sitemap_html]

## TOC02. ▼ Overview Documents

- S04. About SQLite  
   https://www.sqlite.org/about.html                                [about_html]
   → A high-level overview of what SQLite is and why you might be interested in 
   using it.

- S05. Appropriate Uses For SQLite  
   https://www.sqlite.org/whentouse.html                        [whentouse_html]
   → This document describes situations where SQLite is an appropriate database 
   engine to use versus situations where a client/server database engine might 
   be a better choice.

- S06. Distinctive Features  
   https://www.sqlite.org/different.html                        [different_html]
   → This document enumerates and describes some of the features of SQLite that 
   make it different from other SQL database engines.

- S07. Quirks of SQLite  
   https://www.sqlite.org/quirks.html                              [quirks_html]
   → This document is a short list of some unusual features of SQLite that tend 
   to cause misunderstandings and confusion. The list includes both deliberate
   innovations and "misfeatures" that are retained only for backwards compatibility.

- S08. How SQLite Is Tested  
   https://www.sqlite.org/testing.html                            [testing_html]
   → The reliability and robustness of SQLite is achieved in large part by thorough
   and careful testing. This document identifies the many tests that occur before
   every release of SQLite.

- S09. Copyright  
   https://www.sqlite.org/copyright.html                        [copyright_html]
   → SQLite is in the public domain. This document describes what that means and
   the implications for contributors.

- S10. Frequently Asked Questions  
   https://www.sqlite.org/faq.html                                    [faq_html]
   → The title of the document says all...

- S11. Books About SQLite  
   https://www.sqlite.org/books.html                                [books_html]
   → A list of independently written books about SQLite.

## TOC03. ▼ Programming Interfaces

- S12. SQLite In 5 Minutes Or Less  
   https://www.sqlite.org/quickstart.html                      [quickstart_html]
   → A very quick introduction to programming with SQLite.

- S13. Introduction to the C/C++ API  
   https://www.sqlite.org/cintro.html                              [cintro_html]
   → This document introduces the C/C++ API. Users should read this document before
   the C/C++ API Reference Guide linked below.

- S14. How To Compile SQLite  
   https://www.sqlite.org/howtocompile.html                  [howtocompile_html]
   → Instructions and hints for compiling SQLite C code and integrating that code 
   with your own application.

- S15. C/C++ API Reference  
   https://www.sqlite.org/c3ref/intro.html                    [c3ref_intro_html]
   → This document describes each API function separately.

- S16. Result and Error Codes  
   https://www.sqlite.org/rescode.html                            [rescode_html]
   → A description of the meanings of the numeric result codes returned by various 
   C/C++ interfaces.

- S17. SQL Syntax  
   https://www.sqlite.org/lang.html                                  [lang_html]
   → This document describes the SQL language that is understood by SQLite.

- S18. Pragma commands  
   https://www.sqlite.org/pragma.html                              [pragma_html]
   → This document describes SQLite performance tuning options and other special 
   purpose database commands.

- S19. Core SQL Functions  
   https://www.sqlite.org/lang_corefunc.html                [lang_corefunc_html]
   → General-purpose built-in scalar SQL functions.

- S20. Aggregate SQL Functions  
   https://www.sqlite.org/lang_aggfunc.html                  [lang_aggfunc_html]
   → General-purpose built-in aggregate SQL functions.

- S21. Date and Time SQL Functions  
   https://www.sqlite.org/lang_datefunc.html                [lang_datefunc_html]
   → SQL functions for manipulating dates and times.

- S22. Window Functions  
   https://www.sqlite.org/windowfunctions.html            [windowfunctions_html]
   → SQL Window functions.

- S23. Generated Columns  
   https://www.sqlite.org/gencol.html                              [gencol_html]
   → Stored and virtual columns in table definitions.

- S24. System.Data.SQLite  
   http://system.data.sqlite.org/
   → C#/.NET bindings for SQLite

- S25. Tcl API  
   https://www.sqlite.org/tclsqlite.html                        [tclsqlite_html]
   → A description of the TCL interface bindings for SQLite.

- S26. DataTypes  
   https://www.sqlite.org/datatype3.html                        [datatype3_html]
   → SQLite version 3 introduces the concept of manifest typing, where the type 
   of a value is associated with the value itself, not the column that it is 
   stored in. This page describes data typing for SQLite version 3 in further detail.

## TOC04. ▼ Extensions

- S27. Json1 - JSON Integration  
   https://www.sqlite.org/json1.html                                [json1_html]
   → SQL functions for creating, parsing, and querying JSON content.

- S28. FTS5 - Full Text Search  
   https://www.sqlite.org/fts5.html                                  [fts5_html]
   → A description of the SQLite Full Text Search (FTS5) extension.

- S29. FTS3 - Full Text Search  
   https://www.sqlite.org/fts3.html                                  [fts3_html]
   → A description of the SQLite Full Text Search (FTS3) extension.

- S30. R-Tree Module  
   https://www.sqlite.org/rtree.html                                [rtree_html]
   → A description of the SQLite R-Tree extension. An R-Tree is a specialized 
   data structure that supports fast multi-dimensional range queries often used 
   in geospatial systems.

- S31. Sessions  
   https://www.sqlite.org/sessionintro.html                  [sessionintro_html]
   → The Sessions extension allows change to an SQLite database to be captured 
   in a compact file which can be reverted on the original database (to implement
   "undo") or transferred and applied to another similar database.

- S32. Run-Time Loadable Extensions  
   https://www.sqlite.org/loadext.html                            [loadext_html]
   → A general overview on how run-time loadable extensions work, how they are 
   compiled, and how developers can create their own run-time loadable extensions 
   for SQLite.

- S33. SQLite Android Bindings  
   http://sqlite.org/android/
   → Information on how to deploy your own private copy of SQLite on Android, 
   bypassing the built-in SQLite, but using the same Java interface.

- S34. Dbstat Virtual Table  
   https://www.sqlite.org/dbstat.html                              [dbstat_html]
   → The DBSTAT virtual table reports on the sizes and geometries of tables storing 
   content in an SQLite database, and is the basis for the [sqlite3_analyzer] 
   utility program.

- S35. Csv Virtual Table  
   https://www.sqlite.org/csv.html                                    [csv_html]
   → The CSV virtual table allows SQLite to directly read and query 
   https://www.ietf.org/rfc/rfc4180.txt formatted files.

- S36. Carray  
   https://www.sqlite.org/carray.html                              [carray_html]
   → CARRAY is a [table-valued function] that allows C-language arrays to be used 
   in SQL queries.

- S37. generate_series  
   https://www.sqlite.org/series.html                              [series_html]
   → A description of the generate_series() [table-valued function].

- S38. Spellfix1  
   https://www.sqlite.org/spellfix1.html                        [spellfix1_html]
   → The spellfix1 extension is an experiment in doing spelling correction for 
   [full-text search].

## TOC05. ▼ Features

- S39. 8+3 Filenames  
   https://www.sqlite.org/shortnames.html                      [shortnames_html]
   → How to make SQLite work on filesystems that only support 8+3 filenames.

- S40. Autoincrement  
   https://www.sqlite.org/autoinc.html                            [autoinc_html]
   → A description of the AUTOINCREMENT keyword in SQLite, what it does, why it 
   is sometimes useful, and why it should be avoided if not strictly necessary.

- S41. Backup API  
   https://www.sqlite.org/backup.html                              [backup_html]
   → The [sqlite3_backup_init | online-backup interface] can be used to copy content 
   from a disk file into an in-memory database or vice versa and it can make a hot 
   backup of a live database. This application note gives examples of how.

- S42. Error and Warning Log  
   https://www.sqlite.org/errlog.html                              [errlog_html]
   → SQLite supports an "error and warning log" design to capture information 
   about suspicious and/or error events during operation. Embedded applications 
   are encouraged to enable the error and warning log to help with debugging 
   application problems that arise in the field. This document explains how to do that.

- S43. Foreign Key Support  
   https://www.sqlite.org/foreignkeys.html                    [foreignkeys_html]
   → This document describes the support for foreign key constraints introduced 
   in version 3.6.19.

- S44. Indexes On Expressions  
   https://www.sqlite.org/expridx.html                            [expridx_html]
   → Notes on how to create indexes on expressions instead of just individual columns.

- S45. Internal versus External Blob Storage  
   https://www.sqlite.org/intern-v-extern-blob.html  [intern_v_extern_blob_html]
   → Should you store large BLOBs directly in the database, or store them in files 
   and just record the filename in the database? This document seeks to shed light 
   on that question.

- S46. Limits In SQLite  
   https://www.sqlite.org/limits.html                              [limits_html]
   → This document describes limitations of SQLite (the maximum length of a string 
   or blob, the maximum size of a database, the maximum number of tables in a 
   database, etc.) and how these limits can be altered at compile-time and run-time.

- S47. Memory-Mapped I/O  
   https://www.sqlite.org/mmap.html                                  [mmap_html]
   → SQLite supports memory-mapped I/O. Learn how to enable memory-mapped I/O 
   and about the various advantages and disadvantages to using memory-mapped I/O 
   in this document.

- S48. Multi-threaded Programs and SQLite  
   https://www.sqlite.org/threadsafe.html                      [threadsafe_html]
   → SQLite is safe to use in multi-threaded programs. This document provides t
   he details and hints on how to maximize performance.

- S49. Null Handling  
   https://www.sqlite.org/nulls.html                                [nulls_html]
   → Different SQL database engines handle NULLs in different ways. The SQL 
   standards are ambiguous. This (circa 2003) document describes how SQLite handles 
   NULLs in comparison with other SQL database engines.

- S50. Partial Indexes  
   https://www.sqlite.org/partialindex.html                  [partialindex_html]
   → A partial index is an index that only covers a subset of the rows in a table. 
   Learn how to use partial indexes in SQLite from this document.

- S51. Shared Cache Mode  
   https://www.sqlite.org/sharedcache.html                    [sharedcache_html]
   → Version 3.3.0 and later supports the ability for two or more database 
   connections to share the same page and schema cache. This feature is useful 
   for certain specialized applications.

- S52. Unlock Notify  
   https://www.sqlite.org/unlock_notify.html                [unlock_notify_html]
   → The "unlock notify" feature can be used in conjunction with [shared cache mode] 
   to more efficiently manage resource conflict (database table locks).

- S53. URI Filenames  
   https://www.sqlite.org/uri.html                                    [uri_html]
   → The names of database files can be specified using either an ordinary filename 
   or a URI. Using URI filenames provides additional capabilities, as this document 
   describes.

- S54. WITHOUT ROWID Tables  
   https://www.sqlite.org/withoutrowid.html                  [withoutrowid_html]
   → The WITHOUT ROWID optimization is a option that can sometimes result in smaller 
   and faster databases.

- S55. Write-Ahead Log (WAL) Mode  
   https://www.sqlite.org/wal.html                                    [wal_html]
   → Transaction control using a write-ahead log offers more concurrency and is 
   often faster than the default rollback transactions. This document explains how 
   to use WAL mode for improved performance.

## TOC06. ▼ Tools

- S56. Command-Line Shell (sqlite3.exe)  
   https://www.sqlite.org/cli.html                                    [cli_html]
   → Notes on using the "sqlite3.exe" command-line interface that can be used to 
   create, modify, and query arbitrary SQLite database files.

- S57. SQLite Database Analyzer (sqlite3_analyzer.exe)  
   https://www.sqlite.org/sqlanalyze.html                      [sqlanalyze_html]
   → This stand-alone program reads an SQLite database and outputs a file showing 
   the space used by each table and index and other statistics. Built using the 
   [dbstat virtual table].

- S58. RBU  
   https://www.sqlite.org/rbu.html                                    [rbu_html]
   → The "Resumable Bulk Update" utility program allows a batch of changes to be 
   applied to a remote database running on embedded hardware in a way that is 
   resumeable and does not interrupt ongoing operation.

- S59. SQLite Database Diff (sqldiff.exe)  
   https://www.sqlite.org/sqldiff.html                            [sqldiff_html]
   → This stand-alone program compares two SQLite database files and outputs the 
   SQL needed to convert one into the other.

- S60. Database Hash (dbhash.exe)  
   https://www.sqlite.org/dbhash.html                              [dbhash_html]
   → This program demonstrates how to compute a hash over the content of an SQLite database.

- S61. The Fossil Version Control System
   http://www.fossil-scm.org/                                           [fossil]
   → The Fossil Version Control System is a distributed VCS designed specifically 
   to support SQLite development. Fossil uses SQLite as for storage.

- S62. SQLite Archiver (sqlar.exe)  
   http://www.sqlite.org/sqlar/
   → A ZIP-like archive program that uses SQLite for storage.

## TOC07. ▼ Advocacy

- S63. SQLite As An Application File Format  
   https://www.sqlite.org/appfileformat.html                [appfileformat_html]
   → This article advocates using SQLite as an application file format in place 
   of XML or JSON or a "pile-of-file".

- S64. Well Known Users  
   https://www.sqlite.org/famous.html                              [famous_html]
   → This page lists a small subset of the many thousands of devices and application 
   programs that make use of SQLite.

- S65. 35% Faster Than The Filesystem  
   https://www.sqlite.org/fasterthanfs.html                  [fasterthanfs_html]
   → This article points out that reading blobs out of an SQLite database is often 
   faster than reading the same blobs from individual files in the filesystem.

## TOC08. ▼ Technical and Design Documentation

- S66. How Database Corruption Can Occur  
   https://www.sqlite.org/howtocorrupt.html                  [howtocorrupt_html]
   → SQLite is highly resistant to database corruption. But application, OS, and 
   hardware bugs can still result in corrupt database files. This article describes 
   many of the ways that SQLite database files can go corrupt.

- S67. Temporary Files Used By SQLite  
   https://www.sqlite.org/tempfiles.html                        [tempfiles_html]
   → SQLite can potentially use many different temporary files when processing certain 
   SQL statements. This document describes the many kinds of temporary files that 
   SQLite uses and offers suggestions for avoiding them on systems where creating a 
   temporary file is an expensive operation.

- S68. In-Memory Databases  
   https://www.sqlite.org/inmemorydb.html                      [inmemorydb_html]
   → SQLite normally stores content in a disk file. However, it can also be used as 
   an in-memory database engine. This document explains how.

- S69. How SQLite Implements Atomic Commit  
   https://www.sqlite.org/atomiccommit.html                  [atomiccommit_html]
   → A description of the logic within SQLite that implements transactions with 
   atomic commit, even in the face of power failures.

- S70. Dynamic Memory Allocation in SQLite  
   https://www.sqlite.org/malloc.html                              [malloc_html]
   → SQLite has a sophisticated memory allocation subsystem that can be configured 
   and customized to meet memory usage requirements of the application and that is 
   robust against out-of-memory conditions and leak-free. This document provides 
   the details.

- S71. Customizing And Porting SQLite  
   https://www.sqlite.org/custombuild.html                    [custombuild_html]
   → This document explains how to customize the build of SQLite and how to port 
   SQLite to new platforms.

- S72. Locking And Concurrency In SQLite Version 3  
   https://www.sqlite.org/lockingv3.html                        [lockingv3_html]
   → A description of how the new locking code in version 3 increases concurrency 
   and decreases the problem of writer starvation.

- S73. Isolation In SQLite  
   https://www.sqlite.org/isolation.html                        [isolation_html]
   → When we say that SQLite transactions are "serializable" what exactly does 
   that mean? How and when are changes made visible within the same database 
   connection and to other database connections?

- S74. Overview Of The Optimizer  
   https://www.sqlite.org/optoverview.html                    [optoverview_html]
   → A quick overview of the various query optimizations that are attempted by 
   the SQLite code generator.

- S75. The Next-Generation Query Planner  
   https://www.sqlite.org/queryplanner-ng.html            [queryplanner_ng_html]
   → Additional information about the SQLite query planner, and in particular the 
   redesign of the query planner that occurred for version 3.8.0.

- S76. Architecture  
   https://www.sqlite.org/arch.html                                  [arch_html]
   → An architectural overview of the SQLite library, useful for those who want 
   to hack the code.

- S77. VDBE Opcodes  
   https://www.sqlite.org/opcode.html                              [opcode_html]
   → This document is an automatically generated description of the various opcodes 
   that the VDBE understands. Programmers can use this document as a reference to 
   better understand the output of EXPLAIN listings from SQLite.

- S78. Virtual Filesystem  
   https://www.sqlite.org/vfs.html                                    [vfs_html]
   → The "VFS" object is the interface between the SQLite core and the underlying 
   operating system. Learn more about how the VFS object works and how to create 
   new VFS objects from this article.

- S79. Virtual Tables  
   https://www.sqlite.org/vtab.html                                  [vtab_html]
   → This article describes the virtual table mechanism and API in SQLite and how 
   it can be used to add new capabilities to the core SQLite library.

- S80. SQLite File Format  
   https://www.sqlite.org/fileformat2.html                    [fileformat2_html]
   → A description of the format used for SQLite database and journal files, and 
   other details required to create software to read and write SQLite databases 
   without using SQLite.

- S81. Compilation Options  
   https://www.sqlite.org/compile.html                            [compile_html]
   → This document describes the compile time options that may be set to modify 
   the default behavior of the library or omit optional features in order to 
   reduce binary size.

- S82. Android Bindings for SQLite  
   https://sqlite.org/android/
   → A description of how to compile your own SQLite for Android (bypassing the 
   SQLite that is built into Android) together with code and makefiles.

- S83. Debugging Hints  
   https://www.sqlite.org/debugging.html                        [debugging_html]
   → A list of tricks and techniques used to trace, examine, and understand the 
   operation of the core SQLite library.

## TOC09. ▼ Upgrading SQLite, Backwards Compatibility

- S84. Moving From SQLite 3.5 to 3.6  
   https://www.sqlite.org/35to36.html                              [35to36_html]
   → A document describing the differences between SQLite version 3.5.9 and 3.6.0.

- S85. Moving From SQLite 3.4 to 3.5  
   https://www.sqlite.org/34to35.html                              [34to35_html]
   → A document describing the differences between SQLite version 3.4.2 and 3.5.0.

- S86. Release History  
   https://www.sqlite.org/changes.html                            [changes_html]
   → A chronology of SQLite releases going back to version 1.0.0

- S87. Backwards Compatibility  
   https://www.sqlite.org/formatchng.html                      [formatchng_html]
   → This document details all of the incompatible changes to the SQLite file format 
   that have occurred since version 1.0.0.

- S88. Private Branches  
   https://www.sqlite.org/privatebranch.html                [privatebranch_html]
   → This document suggests procedures for maintaining a private branch or fork 
   of SQLite and keeping that branch or fork in sync with the public SQLite source tree.

## TOC10. ▼ Obsolete Documents

- S89. Asynchronous IO Mode  
   https://www.sqlite.org/asyncvfs.html                          [asyncvfs_html]
   → This page describes the asynchronous IO extension developed alongside SQLite. 
   Using asynchronous IO can cause SQLite to appear more responsive by delegating 
   database writes to a background thread. NB: This extension is deprecated. [WAL mode] 
   is recommended as a replacement.

- S90. Version 2 C/C++ API  
   https://www.sqlite.org/c_interface.html                    [c_interface_html]
   → A description of the C/C++ interface bindings for SQLite through version 2.8

- S91. Version 2 DataTypes  
   https://www.sqlite.org/datatypes.html                        [datatypes_html]
   → A description of how SQLite version 2 handles SQL datatypes. Short summary: 
   Everything is a string.

- S92. VDBE Tutorial  
   https://www.sqlite.org/vdbe.html                                  [vdbe_html]
   → The VDBE is the subsystem within SQLite that does the actual work of executing 
   SQL statements. This page describes the principles of operation for the VDBE 
   in SQLite version 2.7. This is essential reading for anyone who want to modify 
   the SQLite sources.

- S93. SQLite Version 3  
   https://www.sqlite.org/version3.html                          [version3_html]
   → A summary of the changes between SQLite version 2.8 and SQLite version 3.0.

- S94. Version 3 C/C++ API  
   https://www.sqlite.org/capi3.html                                [capi3_html]
   → A summary of the API related changes between SQLite version 2.8 and SQLite 
   version 3.0.

- S95. Speed Comparison  
   https://www.sqlite.org/speed.html                                [speed_html]
   → The speed of version 2.7.6 of SQLite is compared against PostgreSQL and MySQL.



# 🍀 /S01. Alphabetical Listing Of All Documents  
   https://www.sqlite.org/doclist.html                            *doclist_html*

See Also:

-  [Categorical Document List](https://www.sqlite.org/docs.html)
-  [Books About SQLite](https://www.sqlite.org/books.html)
-  [Permuted Title Index](https://www.sqlite.org/sitemap.html)
-  [Website Keyword Index](https://www.sqlite.org/keyword_index.html)

#. [D001. 35% Faster Than The Filesystem](https://www.sqlite.org/fasterthanfs.html)
#. [D002. 8+3 Filenames](https://www.sqlite.org/shortnames.html)
#. [D003. About SQLite](https://www.sqlite.org/about.html)
#. [D004. Alphabetical List Of SQLite Documents](https://www.sqlite.org/doclist.html)
#. [D005. ALTER TABLE](https://www.sqlite.org/lang_altertable.html)
#. [D006. An Asynchronous I/O Module For SQLite](https://www.sqlite.org/asyncvfs.html)
#. [D007. An Introduction To The SQLite C/C++ Interface](https://www.sqlite.org/cintro.html)
#. [D008. ANALYZE](https://www.sqlite.org/lang_analyze.html)
#. [D009. Android Bindings](https://www.sqlite.org/https://sqlite.org/android/)
#. [D010. Application-Defined SQL Functions](https://www.sqlite.org/appfunc.html)
#. [D011. Appropriate Uses For SQLite](https://www.sqlite.org/whentouse.html)
#. [D012. Architecture of SQLite](https://www.sqlite.org/arch.html)
#. [D013. Atomic Commit In SQLite](https://www.sqlite.org/atomiccommit.html)
#. [D014. ATTACH DATABASE](https://www.sqlite.org/lang_attach.html)
#. [D015. Automatic Undo/Redo With SQLite](https://www.sqlite.org/undoredo.html)
#. [D016. Benefits of SQLite As A File Format](https://www.sqlite.org/aff_short.html)
#. [D017. Books About SQLite](https://www.sqlite.org/books.html)
#. [D018. Built-in Aggregate Functions](https://www.sqlite.org/lang_aggfunc.html)
#. [D019. Built-In Mathematical SQL Functions](https://www.sqlite.org/lang_mathfunc.html)
#. [D020. Built-In Scalar SQL Functions](https://www.sqlite.org/lang_corefunc.html)
#. [D021. C/C++ Interface For SQLite Version 3](https://www.sqlite.org/capi3ref.html)
#. [D022. C/C++ Interface For SQLite Version 3 (old)](https://www.sqlite.org/capi3.html)
#. [D023. Change in Default Page Size in SQLite Version 3.12.0](https://www.sqlite.org/pgszchng2016.html)
#. [D024. Clustered Indexes and the WITHOUT ROWID Optimization](https://www.sqlite.org/withoutrowid.html)
#. [D025. Command Line Shell For SQLite](https://www.sqlite.org/cli.html)
#. [D026. Compile-time Options](https://www.sqlite.org/compile.html)
#. [D027. Constraint Conflict Resolution in SQLite](https://www.sqlite.org/conflict.html)
#. [D028. CREATE INDEX](https://www.sqlite.org/lang_createindex.html)
#. [D029. CREATE TABLE](https://www.sqlite.org/lang_createtable.html)
#. [D030. CREATE TRIGGER](https://www.sqlite.org/lang_createtrigger.html)
#. [D031. CREATE VIEW](https://www.sqlite.org/lang_createview.html)
#. [D032. CREATE VIRTUAL TABLE](https://www.sqlite.org/lang_createvtab.html)
#. [D033. Custom Builds Of SQLite](https://www.sqlite.org/custombuild.html)
#. [D034. Database File Format](https://www.sqlite.org/fileformat2.html)
#. [D035. Database Object Name Resolution](https://www.sqlite.org/lang_naming.html)
#. [D036. Datatypes In SQLite](https://www.sqlite.org/datatype3.html)
#. [D037. Datatypes In SQLite version 2](https://www.sqlite.org/datatypes.html)
#. [D038. Date And Time Functions](https://www.sqlite.org/lang_datefunc.html)
#. [D039. Defense Against The Dark Arts](https://www.sqlite.org/security.html)
#. [D040. DELETE](https://www.sqlite.org/lang_delete.html)
#. [D041. DETACH](https://www.sqlite.org/lang_detach.html)
#. [D042. Deterministic SQL Functions](https://www.sqlite.org/deterministic.html)
#. [D043. Distinctive Features Of SQLite](https://www.sqlite.org/different.html)
#. [D044. DROP INDEX](https://www.sqlite.org/lang_dropindex.html)
#. [D045. DROP TABLE](https://www.sqlite.org/lang_droptable.html)
#. [D046. DROP TRIGGER](https://www.sqlite.org/lang_droptrigger.html)
#. [D047. DROP VIEW](https://www.sqlite.org/lang_dropview.html)
#. [D048. Dynamic Memory Allocation In SQLite](https://www.sqlite.org/malloc.html)
#. [D049. EXPLAIN](https://www.sqlite.org/lang_explain.html)
#. [D050. EXPLAIN QUERY PLAN](https://www.sqlite.org/eqp.html)
#. [D051. Features Of SQLite](https://www.sqlite.org/features.html)
#. [D052. File Format Changes in SQLite](https://www.sqlite.org/formatchng.html)
#. [D053. File Locking And Concurrency In SQLite Version 3](https://www.sqlite.org/lockingv3.html)
#. [D054. Floating Point Numbers](https://www.sqlite.org/floatingpoint.html)
#. [D055. Full-Featured SQL](https://www.sqlite.org/fullsql.html)
#. [D056. Generated Columns](https://www.sqlite.org/gencol.html)
#. [D057. High Reliability](https://www.sqlite.org/hirely.html)
#. [D058. Hints for Debugging SQLite](https://www.sqlite.org/debugging.html)
#. [D059. History Of SQLite Releases](https://www.sqlite.org/chronology.html)
#. [D060. How SQLite Is Tested](https://www.sqlite.org/testing.html)
#. [D061. How SQLite Works](https://www.sqlite.org/howitworks.html)
#. [D062. How To Compile SQLite](https://www.sqlite.org/howtocompile.html)
#. [D063. How To Corrupt An SQLite Database File](https://www.sqlite.org/howtocorrupt.html)
#. [D064. How To Download Canonical SQLite Source Code](https://www.sqlite.org/getthecode.html)
#. [D065. Implementation Limits For SQLite](https://www.sqlite.org/limits.html)
#. [D066. Imposter Tables](https://www.sqlite.org/imposter.html)
#. [D067. In-Memory Databases](https://www.sqlite.org/inmemorydb.html)
#. [D068. Indexes On Expressions](https://www.sqlite.org/expridx.html)
#. [D069. INSERT](https://www.sqlite.org/lang_insert.html)
#. [D070. Internal Versus External BLOBs](https://www.sqlite.org/intern-v-extern-blob.html)
#. [D071. Invalid UTF Policy](https://www.sqlite.org/invalidutf.html)
#. [D072. Isolation In SQLite](https://www.sqlite.org/isolation.html)
#. [D073. JSON Functions And Operators](https://www.sqlite.org/json1.html)
#. [D074. List of SQLite Syntax Diagrams](https://www.sqlite.org/syntax.html)
#. [D075. List Of Virtual Tables](https://www.sqlite.org/vtablist.html)
#. [D076. LoC Recommended Storage Format](https://www.sqlite.org/locrsf.html)
#. [D077. Long Term Support](https://www.sqlite.org/lts.html)
#. [D078. Maintaining Private Branches Of SQLite](https://www.sqlite.org/privatebranch.html)
#. [D079. Many Small Queries Are Efficient In SQLite](https://www.sqlite.org/np1queryprob.html)
#. [D080. Measuring and Reducing CPU Usage in SQLite](https://www.sqlite.org/cpu.html)
#. [D081. Memory-Mapped I/O](https://www.sqlite.org/mmap.html)
#. [D082. Most Widely Deployed SQL Database Engine](https://www.sqlite.org/mostdeployed.html)
#. [D083. NUL Characters In Strings](https://www.sqlite.org/nulinstr.html)
#. [D084. NULL Handling in SQLite](https://www.sqlite.org/nulls.html)
#. [D085. Partial Indexes](https://www.sqlite.org/partialindex.html)
#. [D086. Pointer Passing Interfaces](https://www.sqlite.org/bindptr.html)
#. [D087. Powersafe Overwrite](https://www.sqlite.org/psow.html)
#. [D088. Pragma statements supported by SQLite](https://www.sqlite.org/pragma.html)
#. [D089. Profiling SQL Queries](https://www.sqlite.org/profile.html)
#. [D090. Quality Management](https://www.sqlite.org/qmplan.html)
#. [D091. Query Language Understood by SQLite](https://www.sqlite.org/lang.html)
#. [D092. Query Planning](https://www.sqlite.org/queryplanner.html)
#. [D093. Quirks, Caveats, and Gotchas In SQLite](https://www.sqlite.org/quirks.html)
#. [D094. Recent SQLite News](https://www.sqlite.org/news.html)
#. [D095. Recovering Data From A Corrupt SQLite Database](https://www.sqlite.org/recovery.html)
#. [D096. REINDEX](https://www.sqlite.org/lang_reindex.html)
#. [D097. Release History Of SQLite](https://www.sqlite.org/changes.html)
#. [D098. REPLACE](https://www.sqlite.org/lang_replace.html)
#. [D099. Result and Error Codes](https://www.sqlite.org/rescode.html)
#. [D100. RETURNING](https://www.sqlite.org/lang_returning.html)
#. [D101. Row Values](https://www.sqlite.org/rowvalue.html)
#. [D102. Rowid Tables](https://www.sqlite.org/rowidtable.html)
#. [D103. Run-Time Loadable Extensions](https://www.sqlite.org/loadext.html)
#. [D104. Savepoints](https://www.sqlite.org/lang_savepoint.html)
#. [D105. SELECT](https://www.sqlite.org/lang_select.html)
#. [D106. SQL Comment Syntax](https://www.sqlite.org/lang_comment.html)
#. [D107. SQL Features That SQLite Does Not Implement](https://www.sqlite.org/omitted.html)
#. [D108. SQL Language Expressions](https://www.sqlite.org/lang_expr.html)
#. [D109. sqldiff.exe: Database Difference Utility](https://www.sqlite.org/sqldiff.html)
#. [D110. SQLite Archive Files](https://www.sqlite.org/sqlar.html)
#. [D111. SQLite Archiver (sqlar.exe)](https://www.sqlite.org/https://sqlite.org/sqlar/)
#. [D112. SQLite As An Application File Format](https://www.sqlite.org/appfileformat.html)
#. [D113. SQLite Autoincrement](https://www.sqlite.org/autoinc.html)
#. [D114. SQLite Backup API](https://www.sqlite.org/backup.html)
#. [D115. SQLite Changes From Version 3.4.2 To 3.5.0](https://www.sqlite.org/34to35.html)
#. [D116. SQLite Changes From Version 3.5.9 To 3.6.0](https://www.sqlite.org/35to36.html)
#. [D117. SQLite Consortium](https://www.sqlite.org/consortium.html)
#. [D118. SQLite Copyright](https://www.sqlite.org/copyright.html)
#. [D119. SQLite Database Speed Comparison](https://www.sqlite.org/speed.html)
#. [D120. SQLite Developers](https://www.sqlite.org/crew.html)
#. [D121. SQLite Documentation](https://www.sqlite.org/docs.html)
#. [D122. SQLite Download Page](https://www.sqlite.org/download.html)
#. [D123. SQLite Foreign Key Support](https://www.sqlite.org/foreignkeys.html)
#. [D124. SQLite Frequently Asked Questions](https://www.sqlite.org/faq.html)
#. [D125. SQLite FTS3 and FTS4 Extensions](https://www.sqlite.org/fts3.html)
#. [D126. SQLite FTS5 Extension](https://www.sqlite.org/fts5.html)
#. [D127. SQLite Home Page](https://www.sqlite.org/index.html)
#. [D128. SQLite In 5 Minutes Or Less](https://www.sqlite.org/quickstart.html)
#. [D129. SQLite is a Self Contained System](https://www.sqlite.org/selfcontained.html)
#. [D130. SQLite Is Serverless](https://www.sqlite.org/serverless.html)
#. [D131. SQLite Is Transactional](https://www.sqlite.org/transactional.html)
#. [D132. SQLite Keywords](https://www.sqlite.org/lang_keywords.html)
#. [D133. SQLite Library Footprint](https://www.sqlite.org/footprint.html)
#. [D134. SQLite Older News](https://www.sqlite.org/oldnews.html)
#. [D135. SQLite Over a Network, Caveats and Considerations](https://www.sqlite.org/useovernet.html)
#. [D136. SQLite Pro Support](https://www.sqlite.org/prosupport.html)
#. [D137. SQLite Requirements](https://www.sqlite.org/requirements.html)
#. [D138. SQLite Session Module C/C++ Interface](https://www.sqlite.org/session.html)
#. [D139. SQLite Shared-Cache Mode](https://www.sqlite.org/sharedcache.html)
#. [D140. SQLite Site Map](https://www.sqlite.org/sitemap.html)
#. [D141. SQLite Support Options](https://www.sqlite.org/support.html)
#. [D142. SQLite Unlock-Notify API](https://www.sqlite.org/unlock_notify.html)
#. [D143. SQLite Version 3 Overview](https://www.sqlite.org/version3.html)
#. [D144. SQLite's Built-in printf()](https://www.sqlite.org/printf.html)
#. [D145. SQLite: Single File Database](https://www.sqlite.org/onefile.html)
#. [D146. STRICT Tables](https://www.sqlite.org/stricttables.html)
#. [D147. Swarmvtab Virtual Table](https://www.sqlite.org/swarmvtab.html)
#. [D148. Syntax Diagrams For SQLite](https://www.sqlite.org/syntaxdiagrams.html)
#. [D149. System.Data.SQLite](https://www.sqlite.org/https://system.data.sqlite.org/)
#. [D150. Temporary Files Used By SQLite](https://www.sqlite.org/tempfiles.html)
#. [D151. TH3](https://www.sqlite.org/th3.html)
#. [D152. The Advantages Of Flexible Typing](https://www.sqlite.org/flextypegood.html)
#. [D153. The Bytecode() And Tables_Used() Table-Valued Functions](https://www.sqlite.org/bytecodevtab.html)
#. [D154. The C language interface to SQLite Version 2](https://www.sqlite.org/c_interface.html)
#. [D155. The Carray() Table-Valued Function](https://www.sqlite.org/carray.html)
#. [D156. The Checksum VFS Shim](https://www.sqlite.org/cksumvfs.html)
#. [D157. The COMPLETION() Table-Valued Function](https://www.sqlite.org/completion.html)
#. [D158. The CSV Virtual Table](https://www.sqlite.org/csv.html)
#. [D159. The dbhash.exe Utility Program](https://www.sqlite.org/dbhash.html)
#. [D160. The DBSTAT Virtual Table](https://www.sqlite.org/dbstat.html)
#. [D161. The Error And Warning Log](https://www.sqlite.org/errlog.html)
#. [D162. The Fossil Version Control System](https://www.sqlite.org/https://www.fossil-scm.org/)
#. [D163. The generate_series Table-Valued Function](https://www.sqlite.org/series.html)
#. [D164. The Geopoly Interface To The SQLite R*Tree Module](https://www.sqlite.org/geopoly.html)
#. [D165. The INDEXED BY Clause](https://www.sqlite.org/lang_indexedby.html)
#. [D166. The Lemon LALR(1) Parser Generator](https://www.sqlite.org/lemon.html)
#. [D167. The Next-Generation Query Planner](https://www.sqlite.org/queryplanner-ng.html)
#. [D168. The ON CONFLICT Clause](https://www.sqlite.org/lang_conflict.html)
#. [D169. The RBU Extension](https://www.sqlite.org/rbu.html)
#. [D170. The Schema Table](https://www.sqlite.org/schematab.html)
#. [D171. The Session Extension](https://www.sqlite.org/sessionintro.html)
#. [D172. The Spellfix1 Virtual Table](https://www.sqlite.org/spellfix1.html)
#. [D173. The SQLite Amalgamation](https://www.sqlite.org/amalgamation.html)
#. [D174. The SQLite Bytecode Engine](https://www.sqlite.org/opcode.html)
#. [D175. The SQLite OS Interface or "VFS"](https://www.sqlite.org/vfs.html)
#. [D176. The SQLite Query Optimizer Overview](https://www.sqlite.org/optoverview.html)
#. [D177. The SQLite R*Tree Module](https://www.sqlite.org/rtree.html)
#. [D178. The SQLite Zipfile Module](https://www.sqlite.org/zipfile.html)
#. [D179. The sqlite3_analyzer.exe Utility Program](https://www.sqlite.org/sqlanalyze.html)
#. [D180. The SQLITE_DBPAGE Virtual Table](https://www.sqlite.org/dbpage.html)
#. [D181. The SQLITE_MEMSTAT Virtual Table](https://www.sqlite.org/memstat.html)
#. [D182. The SQLITE_STMT Virtual Table](https://www.sqlite.org/stmt.html)
#. [D183. The Tcl interface to the SQLite library](https://www.sqlite.org/tclsqlite.html)
#. [D184. The UINT Collating Sequence](https://www.sqlite.org/uintcseq.html)
#. [D185. The UNION Virtual Table](https://www.sqlite.org/unionvtab.html)
#. [D186. The Use Of assert() In SQLite](https://www.sqlite.org/assert.html)
#. [D187. The Virtual Database Engine of SQLite](https://www.sqlite.org/vdbe.html)
#. [D188. The Virtual Table Mechanism Of SQLite](https://www.sqlite.org/vtab.html)
#. [D189. The WITH Clause](https://www.sqlite.org/lang_with.html)
#. [D190. Transaction](https://www.sqlite.org/lang_transaction.html)
#. [D191. Uniform Resource Identifiers](https://www.sqlite.org/uri.html)
#. [D192. UPDATE](https://www.sqlite.org/lang_update.html)
#. [D193. UPSERT](https://www.sqlite.org/lang_upsert.html)
#. [D194. Using SQLite In Multi-Threaded Applications](https://www.sqlite.org/threadsafe.html)
#. [D195. VACUUM](https://www.sqlite.org/lang_vacuum.html)
#. [D196. Version Numbers in SQLite](https://www.sqlite.org/versionnumbers.html)
#. [D197. Vulnerabilities](https://www.sqlite.org/cves.html)
#. [D198. WAL-mode File Format](https://www.sqlite.org/walformat.html)
#. [D199. Website Keyword Index](https://www.sqlite.org/keyword_index.html)
#. [D200. Well-Known Users Of SQLite](https://www.sqlite.org/famous.html)
#. [D201. What If OpenDocument Used SQLite?](https://www.sqlite.org/affcase1.html)
#. [D202. Why Is SQLite Coded In C](https://www.sqlite.org/whyc.html)
#. [D203. Why SQLite Does Not Use Git](https://www.sqlite.org/whynotgit.html)
#. [D204. Why SQLite Uses Bytecode](https://www.sqlite.org/whybytecode.html)
#. [D205. Window Functions](https://www.sqlite.org/windowfunctions.html)
#. [D206. Write-Ahead Logging](https://www.sqlite.org/wal.html)
#. [D207. Zero-Configuration](https://www.sqlite.org/zeroconf.html)

## 🐣 D170. The Schema Table
   [D170. The Schema Table](https://www.sqlite.org/schematab.html)

Example:

```sh
   # https://github.com/aitjcize/cppman/blob/master/cppman/lib/index.db
   sqlite3 /c/dl/index.db .tables \
      "pragma table_info('cplusplus.com');" \
      "SELECT sql FROM sqlite_schema WHERE name = 'cplusplus.com';" \
      "SELECT count(*) FROM 'cplusplus.com';" \
      "SELECT count(*) FROM 'cppreference.com';" \
      "SELECT id,title,url FROM 'cplusplus.com' LIMIT 0,10;" \
      "SELECT id,title,url FROM 'cppreference.com' WHERE title LIKE '%Concepts%';" \
      .exit
```

[1. Introduction](#introduction)
[2. Alternative Names](#alternative_names)
[3. Interpretation Of The Schema Table](#interpretation_of_the_schema_table)
[4. Creation and Modification Of The Schema Table](#creation_and_modification_of_the_schema_table)

### 1. Introduction

   Every SQLite database contains a single "schema table" that stores
   the schema for that database. The schema for a database is a
   description of all of the other tables, indexes, triggers, and views
   that are contained within the database. The schema table looks like
   this:

         CREATE TABLE sqlite_schema(
           type text,
           name text,
           tbl_name text,
           rootpage integer,
           sql text
         );

   The sqlite_schema table contains one row for each table, index, view,
   and trigger (collectively "objects") in the schema, except there is
   no entry for the sqlite_schema table itself. See the [schema
   storage](https://www.sqlite.org/fileformat2.html#ffschema) subsection of the [file
   format](https://www.sqlite.org/fileformat2.html) documentation for additional information
   on how SQLite uses the sqlite_schema table internally.

### 2. Alternative Names

   The schema table can always be referenced using the name
   "sqlite_schema", especially if qualifed by the schema name like
   "main.sqlite_schema" or "temp.sqlite_schema". But for historical
   compatibility, some alternative names are also recognized, including:

   #. sqlite_master
   #. sqlite_temp_schema
   #. sqlite_temp_master

   Alternatives (2) and (3) only work for the TEMP database associated
   with each database connection, but alternative (1) works anywhere.
   For historical reasons, callbacks from the
   [sqlite3_set_authorizer()](https://www.sqlite.org/c3ref/set_authorizer.html) interface
   always refer to the schema table using names (1) or (3).

### 3. Interpretation Of The Schema Table

   The meanings of the fields of the schema table are as follows:

  - **type**
      The sqlite_schema.type column will be one of the following text
      strings: 'table', 'index', 'view', or 'trigger' according to the
      type of object defined. The 'table' string is used for both
      ordinary and [virtual tables](https://www.sqlite.org/vtab.html).

  - **name**
      The sqlite_schema.name column will hold the name of the object.
      [UNIQUE](https://www.sqlite.org/lang_createtable.html#uniqueconst) and [PRIMARY
      KEY](https://www.sqlite.org/lang_createtable.html#primkeyconst) constraints on tables
      cause SQLite to create [internal
      indexes](https://www.sqlite.org/fileformat2.html#intschema) with names of the form
      "sqlite_autoindex_TABLE_N" where TABLE is replaced by the name of
      the table that contains the constraint and N is an integer
      beginning with 1 and increasing by one with each constraint seen
      in the table definition. In a [WITHOUT
      ROWID](https://www.sqlite.org/withoutrowid.html) table, there is no sqlite_schema
      entry for the PRIMARY KEY, but the "sqlite_autoindex_TABLE_N" name
      is set aside for the PRIMARY KEY as if the sqlite_schema entry did
      exist. This will affect the numbering of subsequent UNIQUE
      constraints. The "sqlite_autoindex_TABLE_N" name is never
      allocated for an [INTEGER PRIMARY
      KEY](https://www.sqlite.org/lang_createtable.html#rowid), either in rowid tables or
      WITHOUT ROWID tables.

  - **tbl_name**
      The sqlite_schema.tbl_name column holds the name of a table or
      view that the object is associated with. For a table or view, the
      tbl_name column is a copy of the name column. For an index, the
      tbl_name is the name of the table that is indexed. For a trigger,
      the tbl_name column stores the name of the table or view that
      causes the trigger to fire.

  - **rootpage**
      The sqlite_schema.rootpage column stores the page number of the
      root b-tree page for tables and indexes. For rows that define
      views, triggers, and virtual tables, the rootpage column is 0 or
      NULL.

  - **sql**
      The sqlite_schema.sql column stores SQL text that describes the
      object. This SQL text is a 
          [CREATE TABLE](https://www.sqlite.org/lang_createtable.html), 
          [CREATE VIRTUAL TABLE](https://www.sqlite.org/lang_createvtab.html), 
          [CREATE INDEX](https://www.sqlite.org/lang_createindex.html), 
          [CREATE VIEW](https://www.sqlite.org/lang_createview.html), or 
          [CREATE TRIGGER](https://www.sqlite.org/lang_createtrigger.html) statement that if evaluated
      against the database file when it is the main database of a
      [database connection](https://www.sqlite.org/c3ref/sqlite3.html) would recreate the
      object. The text is usually a copy of the original statement used
      to create the object but with normalizations applied so that the
      text conforms to the following rules:

      -  The CREATE, TABLE, VIEW, TRIGGER, and INDEX keywords at the
         beginning of the statement are converted to all upper case
         letters.
      -  The TEMP or TEMPORARY keyword is removed if it occurs after the
         initial CREATE keyword.
      -  Any database name qualifier that occurs prior to the name of
         the object being created is removed.
      -  Leading spaces are removed.
      -  All spaces following the first two keywords are converted into
         a single space.

      The text in the sqlite_schema.sql column is a copy of the original
      CREATE statement text that created the object, except normalized
      as described above and as modified by subsequent [ALTER
      TABLE](https://www.sqlite.org/lang_altertable.html) statements. The sqlite_schema.sql
      is NULL for the [internal indexes](https://www.sqlite.org/fileformat2.html#intschema)
      that are automatically created by
      [UNIQUE](https://www.sqlite.org/lang_createtable.html#uniqueconst) or [PRIMARY
      KEY](https://www.sqlite.org/lang_createtable.html#primkeyconst) constraints.

### 4. Creation and Modification Of The Schema Table

   SQLite creates the schema table upon database creation and modifies
   its content as SQLite users submit DDL statements for execution.
   There is no need for users to modify it under normal circumstances,
   and they bear the risk of [database corruption](https://www.sqlite.org/howtocorrupt.html#cfgerr) if they do modify it.

   *This page last modified on* [2023-06-16 10:11:06](https://sqlite.org/docsrc/honeypot) *UTC*


# 🍀 /S02. Website Keyword Index  
   https://www.sqlite.org/keyword_index.html                *keyword_index_html*


Other Documentation Indexes:

-  [Categorical Document List](https://www.sqlite.org/docs.html)
-  [Books About SQLite](https://www.sqlite.org/books.html)
-  [Alphabetical List Of Documents](https://www.sqlite.org/doclist.html)
-  [Permuted Document Title Index](https://www.sqlite.org/sitemap.html)


Keyword Index

-  [%q](https://www.sqlite.org/printf.html#percentq)
-  [%w](https://www.sqlite.org/printf.html#percentw)
-  [%z](https://www.sqlite.org/printf.html#percentz)
-  [35% Faster Than The Filesystem](https://www.sqlite.org/fasterthanfs.html)
-  [3rd-party fuzzers](https://www.sqlite.org/testing.html#3pfuzz)
-  [about 200 SQL statements per webpage](https://www.sqlite.org/np1queryprob.html)
-  [abs() SQL function](https://www.sqlite.org/lang_corefunc.html#abs)
-  [ACID](https://www.sqlite.org/transactional.html)
-  [acos() SQL function](https://www.sqlite.org/lang_mathfunc.html#acos)
-  [acosh() SQL function](https://www.sqlite.org/lang_mathfunc.html#acosh)
-  [add column](https://www.sqlite.org/lang_altertable.html#altertabaddcol)
-  [Adding to Zip](https://www.sqlite.org/zipfile.html#adding_entries_to_a_zip_archive)
-  [advanced](https://www.sqlite.org/swarmvtab.html#advanced_usage)
-  [advantages of WAL-mode](https://www.sqlite.org/wal.html#advantages)
-  [affinity](https://www.sqlite.org/datatype3.html#affinity)
-  [affinity in compound VIEWs](https://www.sqlite.org/datatype3.html#affcompoundview)
-  [Affinity Of Expressions](https://www.sqlite.org/datatype3.html#expraff)
-  [AFL](https://www.sqlite.org/testing.html#aflfuzz)
-  [Aggregate Functions](https://www.sqlite.org/lang_aggfunc.html)
-  [aggregate JSON SQL functions](https://www.sqlite.org/json1.html#jgroupobjectb)
-  [aggregate SQL functions](https://www.sqlite.org/lang_aggfunc.html)
-  [aggregate window functions](https://www.sqlite.org/windowfunctions.html#aggwinfunc)
-  [aggregate-function-invocation](https://www.sqlite.org/syntax/aggregate-function-invocation.html)
-  [aggregate-function-invocation syntax diagram](https://www.sqlite.org/syntax/aggregate-function-invocation.html)
-  [alphabetical listing of documents](https://www.sqlite.org/doclist.html)
-  [ALTER](https://www.sqlite.org/lang_altertable.html)
-  [ALTER TABLE](https://www.sqlite.org/lang_altertable.html)
-  [ALTER TABLE ADD COLUMN](https://www.sqlite.org/lang_altertable.html#altertabaddcol)
-  [ALTER TABLE DROP COLUMN](https://www.sqlite.org/lang_altertable.html#altertabdropcol)
-  [ALTER TABLE RENAME](https://www.sqlite.org/lang_altertable.html#altertabrename)
-  [ALTER TABLE RENAME COLUMN](https://www.sqlite.org/lang_altertable.html#altertabmvcol)
-  [ALTER TABLE RENAME documentation](https://www.sqlite.org/lang_altertable.html#altertabrename)
-  [alter-table-stmt](https://www.sqlite.org/syntax/alter-table-stmt.html)
-  [alter-table-stmt syntax diagram](https://www.sqlite.org/syntax/alter-table-stmt.html)
-  [amalgamation](https://www.sqlite.org/amalgamation.html)
-  [amalgamation tarball](https://www.sqlite.org/download.html#amalgtarball)
-  [ambiguous dates](https://www.sqlite.org/lang_datefunc.html#dtambg)
-  [American Fuzzy Lop fuzzer](https://www.sqlite.org/testing.html#aflfuzz)
-  [analysis_limit pragma](https://www.sqlite.org/pragma.html#pragma_analysis_limit)
-  [analyze-stmt](https://www.sqlite.org/syntax/analyze-stmt.html)
-  [analyze-stmt syntax diagram](https://www.sqlite.org/syntax/analyze-stmt.html)
-  [Application File Format](https://www.sqlite.org/appfileformat.html)
-  [application file-format](https://www.sqlite.org/appfileformat.html)
-  [Application ID](https://www.sqlite.org/fileformat2.html#appid)
-  [application-defined function attacks](https://www.sqlite.org/appfunc.html#sec)
-  [application-defined SQL function](https://www.sqlite.org/appfunc.html)
-  [application-defined window functions](https://www.sqlite.org/windowfunctions.html#udfwinfunc)
-  [application_id pragma](https://www.sqlite.org/pragma.html#pragma_application_id)
-  [appreciate the freedom](https://www.sqlite.org/flextypegood.html)
-  [Appropriate Uses For SQLite](https://www.sqlite.org/whentouse.html)
-  [approximate ANALYZE](https://www.sqlite.org/lang_analyze.html#approx)
-  [Approximate ANALYZE For Large Databases](https://www.sqlite.org/lang_analyze.html#approx)
-  [.archive command](https://www.sqlite.org/cli.html#sqlar)
-  [asin() SQL function](https://www.sqlite.org/lang_mathfunc.html#asin)
-  [asinh() SQL function](https://www.sqlite.org/lang_mathfunc.html#asinh)
-  [asynchronous I/O backend](https://www.sqlite.org/asyncvfs.html)
-  [asynchronous VFS](https://www.sqlite.org/asyncvfs.html)
-  [atan() SQL function](https://www.sqlite.org/lang_mathfunc.html#atan)
-  [atan2() SQL function](https://www.sqlite.org/lang_mathfunc.html#atan2)
-  [atanh() SQL function](https://www.sqlite.org/lang_mathfunc.html#atanh)
-  [atomic commit](https://www.sqlite.org/atomiccommit.html)
-  [attach](https://www.sqlite.org/lang_attach.html)
-  [ATTACH DATABASE](https://www.sqlite.org/lang_attach.html)
-  [attach-stmt](https://www.sqlite.org/syntax/attach-stmt.html)
-  [attach-stmt syntax diagram](https://www.sqlite.org/syntax/attach-stmt.html)
-  [attached](https://www.sqlite.org/lang_attach.html)
-  [attack resistance](https://www.sqlite.org/security.html)
-  [authorizer callback](https://www.sqlite.org/c3ref/set_authorizer.html)
-  [authorizer method](https://www.sqlite.org/tclsqlite.html#authorizer)
-  [auto modifier](https://www.sqlite.org/lang_datefunc.html#automod)
-  [auto_vacuum pragma](https://www.sqlite.org/pragma.html#pragma_auto_vacuum)
-  [autocommit mode](https://www.sqlite.org/c3ref/get_autocommit.html)
-  [AUTOINCREMENT](https://www.sqlite.org/autoinc.html)
-  [automated undo/redo stack](https://www.sqlite.org/undoredo.html)
-  [automatic indexes](https://www.sqlite.org/optoverview.html#autoindex)
-  [automatic indexing](https://www.sqlite.org/optoverview.html#autoindex)
-  [automatic_index pragma](https://www.sqlite.org/pragma.html#pragma_automatic_index)
-  [automatically running ANALYZE](https://www.sqlite.org/lang_analyze.html#autoanalyze)
-  ["automerge" command](https://www.sqlite.org/fts3.html#*fts4automergecmd)
-  [auxiliary columns](https://www.sqlite.org/rtree.html#auxcol)
-  [auxiliary columns in r-tree tables](https://www.sqlite.org/rtree.html#auxcol)
-  [auxiliary function mapping](https://www.sqlite.org/fts5.html#sorting_by_auxiliary_function_results)
-  [avg() aggregate function](https://www.sqlite.org/lang_aggfunc.html#avg)
-  [avoiding large WAL files](https://www.sqlite.org/wal.html#bigwal)
-  [B*-Trees](https://www.sqlite.org/fileformat2.html#btree)
-  [B-tree](https://www.sqlite.org/fileformat2.html#btree)
-  [backup API](https://www.sqlite.org/backup.html)
-  [backup method](https://www.sqlite.org/tclsqlite.html#backup)
-  [bare aggregate terms](https://www.sqlite.org/lang_select.html#bareagg)
-  [base64() SQL function](https://www.sqlite.org/cli.html#base64)
-  [base85() SQL function](https://www.sqlite.org/cli.html#base85)
-  [bcvtab](https://www.sqlite.org/bytecodevtab.html)
-  [BEGIN](https://www.sqlite.org/lang_transaction.html)
-  [BEGIN EXCLUSIVE](https://www.sqlite.org/lang_transaction.html#immediate)
-  [BEGIN IMMEDIATE](https://www.sqlite.org/lang_transaction.html#immediate)
-  [begin-stmt](https://www.sqlite.org/syntax/begin-stmt.html)
-  [begin-stmt syntax diagram](https://www.sqlite.org/syntax/begin-stmt.html)
-  [benefits of using WITHOUT ROWID](https://www.sqlite.org/withoutrowid.html#bene)
-  [BETWEEN](https://www.sqlite.org/lang_expr.html#between)
-  [BINARY collating function](https://www.sqlite.org/datatype3.html#collation)
-  [binary operators](https://www.sqlite.org/lang_expr.html#binaryops)
-  [bind_fallback method](https://www.sqlite.org/tclsqlite.html#bind_fallback)
-  [BLOB handle](https://www.sqlite.org/c3ref/blob.html)
-  [BLOB I/O performance](https://www.sqlite.org/intern-v-extern-blob.html)
-  [block sorting](https://www.sqlite.org/queryplanner.html#partialsort)
-  [books about SQLite](https://www.sqlite.org/books.html)
-  [boolean datatype](https://www.sqlite.org/datatype3.html#boolean)
-  [boolean expression](https://www.sqlite.org/lang_expr.html#booleanexpr)
-  [bound parameter](https://www.sqlite.org/lang_expr.html#varparam)
-  [bugs](https://www.sqlite.org/fts3.html#limitations)
-  [build product names](https://www.sqlite.org/download.html#encoding)
-  [building a DLL](https://www.sqlite.org/howtocompile.html#dll)
-  [building the amalgamation](https://www.sqlite.org/howtocompile.html#amal)
-  [built-in memory allocators](https://www.sqlite.org/malloc.html#altalloc)
-  [built-in printf()](https://www.sqlite.org/printf.html)
-  [built-in SQL math functions](https://www.sqlite.org/lang_mathfunc.html)
-  [built-in window functions](https://www.sqlite.org/windowfunctions.html#builtins)
-  [built-ins](https://www.sqlite.org/windowfunctions.html#builtins)
-  [builtin window functions](https://www.sqlite.org/windowfunctions.html#biwinfunc)
-  [busy handler](https://www.sqlite.org/c3ref/busy_handler.html)
-  [busy method](https://www.sqlite.org/tclsqlite.html#busy)
-  [busy-handler callback](https://www.sqlite.org/c3ref/busy_handler.html)
-  [busy_timeout pragma](https://www.sqlite.org/pragma.html#pragma_busy_timeout)
-  [byte-order determination rules](https://www.sqlite.org/c3ref/bind_blob.html#byteorderdeterminationrules)
-  [bytecode](https://www.sqlite.org/opcode.html)
-  [bytecode and tables_used virtual tables](https://www.sqlite.org/bytecodevtab.html)
-  [bytecode engine](https://www.sqlite.org/opcode.html)
-  [bytecode virtual table](https://www.sqlite.org/bytecodevtab.html)
-  [C-API function list](https://www.sqlite.org/c3ref/funclist.html)
-  [C-language Interface](https://www.sqlite.org/c3ref/intro.html)
-  [cache method](https://www.sqlite.org/tclsqlite.html#cache)
-  ["cache" query parameter](https://www.sqlite.org/uri.html#uricache)
-  [cache_size pragma](https://www.sqlite.org/pragma.html#pragma_cache_size)
-  [cache_spill pragma](https://www.sqlite.org/pragma.html#pragma_cache_spill)
-  [canonical source code](https://www.sqlite.org/getthecode.html)
-  [carray](https://www.sqlite.org/carray.html)
-  [carray() table-valued function](https://www.sqlite.org/carray.html)
-  [CASE expression](https://www.sqlite.org/lang_expr.html#case)
-  [case_sensitive_like pragma](https://www.sqlite.org/pragma.html#pragma_case_sensitive_like)
-  [CAST](https://www.sqlite.org/lang_expr.html#castexpr)
-  [CAST expression](https://www.sqlite.org/lang_expr.html#castexpr)
-  [CAST operator](https://www.sqlite.org/lang_expr.html#castexpr)
-  [categorical listing of SQLite documents](https://www.sqlite.org/docs.html)
-  [ceil](https://www.sqlite.org/lang_mathfunc.html#ceil)
-  [ceiling](https://www.sqlite.org/lang_mathfunc.html#ceil)
-  [cell format summary](https://www.sqlite.org/fileformat2.html#cellformat)
-  [cell payload](https://www.sqlite.org/fileformat2.html#cell_payload)
-  [cell_size_check pragma](https://www.sqlite.org/pragma.html#pragma_cell_size_check)
-  [cfgerrors*](https://www.sqlite.org/howtocorrupt.html#cfgerr)
-  [change counter](https://www.sqlite.org/fileformat2.html#chngctr)
-  [changes method](https://www.sqlite.org/tclsqlite.html#changes)
-  [changes() SQL function](https://www.sqlite.org/lang_corefunc.html#changes)
-  [changeset](https://www.sqlite.org/sessionintro.html#changeset)
-  [char() SQL function](https://www.sqlite.org/lang_corefunc.html#char)
-  [CHECK](https://www.sqlite.org/lang_createtable.html#ckconst)
-  [CHECK constraint](https://www.sqlite.org/lang_createtable.html#ckconst)
-  [checklist](https://www.sqlite.org/testing.html#cklist)
-  [checkpoint](https://www.sqlite.org/wal.html#ckpt)
-  [checkpoint mode](https://www.sqlite.org/c3ref/c_checkpoint_full.html)
-  [checkpoint_fullfsync pragma](https://www.sqlite.org/pragma.html#pragma_checkpoint_fullfsync)
-  [checkpointed](https://www.sqlite.org/wal.html#ckpt)
-  [checkpointing](https://www.sqlite.org/wal.html#ckpt)
-  [checksum VFS](https://www.sqlite.org/cksumvfs.html)
-  [checksum VFS shim](https://www.sqlite.org/cksumvfs.html)
-  [child key](https://www.sqlite.org/foreignkeys.html#parentchild)
-  [child table](https://www.sqlite.org/foreignkeys.html#parentchild)
-  [chronology](https://www.sqlite.org/chronology.html)
-  [cksumvfs](https://www.sqlite.org/cksumvfs.html)
-  [CLI](https://www.sqlite.org/cli.html)
-  [clone the entire repository](https://www.sqlite.org/getthecode.html#clone)
-  [close method](https://www.sqlite.org/tclsqlite.html#close)
-  [Clustered indexes](https://www.sqlite.org/withoutrowid.html)
-  [co-routines](https://www.sqlite.org/optoverview.html#coroutines)
-  [coalesce() SQL function](https://www.sqlite.org/lang_corefunc.html#coalesce)
-  [Code of Conduct](https://www.sqlite.org/codeofconduct.html)
-  [Code of Ethics](https://www.sqlite.org/codeofethics.html)
-  [Code of Ethics of the Project Founder](https://www.sqlite.org/codeofethics.html)
-  [code repositories](https://www.sqlite.org/download.html#srctree)
-  [COLLATE](https://www.sqlite.org/lang_createindex.html#collidx)
-  [COLLATE clause](https://www.sqlite.org/lang_createtable.html#collateclause)
-  [COLLATE constraint](https://www.sqlite.org/lang_createtable.html#collateclause)
-  [collate method](https://www.sqlite.org/tclsqlite.html#collate)
-  [COLLATE operator](https://www.sqlite.org/lang_expr.html#collateop)
-  [collating function](https://www.sqlite.org/datatype3.html#collation)
-  [collation_list pragma](https://www.sqlite.org/pragma.html#pragma_collation_list)
-  [collation_needed method](https://www.sqlite.org/tclsqlite.html#collation_needed)
-  [column access functions](https://www.sqlite.org/c3ref/column_blob.html)
-  [column affinity](https://www.sqlite.org/datatype3.html#affinity)
-  [column definition](https://www.sqlite.org/lang_createtable.html#tablecoldef)
-  [column-constraint](https://www.sqlite.org/syntax/column-constraint.html)
-  [column-constraint syntax diagram](https://www.sqlite.org/syntax/column-constraint.html)
-  [column-def](https://www.sqlite.org/syntax/column-def.html)
-  [column-def syntax diagram](https://www.sqlite.org/syntax/column-def.html)
-  [column-name-list](https://www.sqlite.org/syntax/column-name-list.html)
-  [column-name-list syntax diagram](https://www.sqlite.org/syntax/column-name-list.html)
-  [columnar output modes](https://www.sqlite.org/cli.html#clmnr)
-  [colUsed field](https://www.sqlite.org/vtab.html#colUsed)
-  [comma option](https://www.sqlite.org/printf.html#comma)
-  [Command Line Interface](https://www.sqlite.org/cli.html)
-  [command-line interface](https://www.sqlite.org/cli.html)
-  [command-line options](https://www.sqlite.org/cli.html#clopts)
-  [command-line shell](https://www.sqlite.org/cli.html)
-  [commands](https://www.sqlite.org/fts3.html#commands)
-  [comment](https://www.sqlite.org/lang_comment.html)
-  [comment-syntax](https://www.sqlite.org/syntax/comment-syntax.html)
-  [comment-syntax syntax diagram](https://www.sqlite.org/syntax/comment-syntax.html)
-  [COMMIT](https://www.sqlite.org/lang_transaction.html)
-  [commit-stmt](https://www.sqlite.org/syntax/commit-stmt.html)
-  [commit-stmt syntax diagram](https://www.sqlite.org/syntax/commit-stmt.html)
-  [commit_hook method](https://www.sqlite.org/tclsqlite.html#commit_hook)
-  [common table expressions](https://www.sqlite.org/lang_with.html)
-  [common-table-expression](https://www.sqlite.org/syntax/common-table-expression.html)
-  [common-table-expression syntax diagram](https://www.sqlite.org/syntax/common-table-expression.html)
-  [comparison affinity rules](https://www.sqlite.org/datatype3.html#compaff)
-  [comparison expressions](https://www.sqlite.org/datatype3.html#comparisons)
-  [comparison with fts4](https://www.sqlite.org/fts5.html#appendix_a)
-  [compilation](https://www.sqlite.org/swarmvtab.html#compiling_and_using_swarmvtab)
-  [compile fts](https://www.sqlite.org/fts3.html#compiling_and_enabling_fts3_and_fts4)
-  [compile loadable extensions](https://www.sqlite.org/loadext.html#build)
-  [compile-time options](https://www.sqlite.org/compile.html)
-  [compile_options pragma](https://www.sqlite.org/pragma.html#pragma_compile_options)
-  [Compiling Loadable Extensions](https://www.sqlite.org/loadext.html#build)
-  [compiling the CLI](https://www.sqlite.org/howtocompile.html#cli)
-  [compiling the TCL interface](https://www.sqlite.org/howtocompile.html#tcl)
-  [complete list of SQLite releases](https://www.sqlite.org/changes.html)
-  [complete method](https://www.sqlite.org/tclsqlite.html#complete)
-  [COMPLETION](https://www.sqlite.org/completion.html)
-  [COMPLETION extension](https://www.sqlite.org/completion.html)
-  [COMPLETION table-valued function](https://www.sqlite.org/completion.html)
-  [compound query](https://www.sqlite.org/lang_select.html#compound)
-  [compound select](https://www.sqlite.org/lang_select.html#compound)
-  [compound-operator](https://www.sqlite.org/syntax/compound-operator.html)
-  [compound-operator syntax diagram](https://www.sqlite.org/syntax/compound-operator.html)
-  [compound-select-stmt](https://www.sqlite.org/syntax/compound-select-stmt.html)
-  [compound-select-stmt syntax diagram](https://www.sqlite.org/syntax/compound-select-stmt.html)
-  [compressed FTS4 content](https://www.sqlite.org/fts3.html#*fts4compression)
-  [compute the Mandelbrot set](https://www.sqlite.org/lang_with.html#mandelbrot)
-  [computed columns](https://www.sqlite.org/gencol.html)
-  [concat() SQL function](https://www.sqlite.org/lang_corefunc.html#concat)
-  [concat_ws() SQL function](https://www.sqlite.org/lang_corefunc.html#concat_ws)
-  [config method](https://www.sqlite.org/tclsqlite.html#config)
-  [configurable edit distances](https://www.sqlite.org/spellfix1.html#configeditdist)
-  [configuration option](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html)
-  [conflict clause](https://www.sqlite.org/lang_conflict.html)
-  [conflict resolution algorithm](https://www.sqlite.org/lang_conflict.html)
-  [conflict resolution mode](https://www.sqlite.org/c3ref/c_fail.html)
-  [conflict-clause](https://www.sqlite.org/syntax/conflict-clause.html)
-  [conflict-clause syntax diagram](https://www.sqlite.org/syntax/conflict-clause.html)
-  [.connection](https://www.sqlite.org/cli.html#dotconn)
-  [constant-propagation optimization](https://www.sqlite.org/optoverview.html#constprop)
-  [contentless fts4 tables](https://www.sqlite.org/fts3.html#_contentless_fts4_tables_)
-  [contentless-delete](https://www.sqlite.org/fts5.html#clssdeltab)
-  [copy method](https://www.sqlite.org/tclsqlite.html#copy)
-  [copyright](https://www.sqlite.org/copyright.html)
-  [Core Functions](https://www.sqlite.org/lang_corefunc.html)
-  [core URI query parameters](https://www.sqlite.org/c3ref/open.html#coreuriqueryparameters)
-  [correlated subqueries](https://www.sqlite.org/lang_expr.html#cosub)
-  [cos() SQL function](https://www.sqlite.org/lang_mathfunc.html#cos)
-  [cosh() SQL function](https://www.sqlite.org/lang_mathfunc.html#cosh)
-  [count() aggregate function](https://www.sqlite.org/lang_aggfunc.html#count)
-  [count_changes pragma](https://www.sqlite.org/pragma.html#pragma_count_changes)
-  [coverage testing vs. fuzz testing](https://www.sqlite.org/testing.html#tension)
-  [covering index](https://www.sqlite.org/queryplanner.html#covidx)
-  [covering indexes](https://www.sqlite.org/queryplanner.html#covidx)
-  [covering indices](https://www.sqlite.org/queryplanner.html#covidx)
-  [CPU cycles used](https://www.sqlite.org/cpu.html)
-  [CPU performance measurement](https://www.sqlite.org/cpu.html)
-  [CREATE INDEX](https://www.sqlite.org/lang_createindex.html)
-  [CREATE TABLE](https://www.sqlite.org/lang_createtable.html)
-  [CREATE TABLE AS](https://www.sqlite.org/lang_createtable.html#createtabas)
-  [CREATE TRIGGER](https://www.sqlite.org/lang_createtrigger.html)
-  [CREATE VIEW](https://www.sqlite.org/lang_createview.html)
-  [CREATE VIRTUAL TABLE](https://www.sqlite.org/lang_createvtab.html)
-  [create-index-stmt](https://www.sqlite.org/syntax/create-index-stmt.html)
-  [create-index-stmt syntax diagram](https://www.sqlite.org/syntax/create-index-stmt.html)
-  [create-table-stmt](https://www.sqlite.org/syntax/create-table-stmt.html)
-  [create-table-stmt syntax diagram](https://www.sqlite.org/syntax/create-table-stmt.html)
-  [create-trigger-stmt](https://www.sqlite.org/syntax/create-trigger-stmt.html)
-  [create-trigger-stmt syntax diagram](https://www.sqlite.org/syntax/create-trigger-stmt.html)
-  [create-view-stmt](https://www.sqlite.org/syntax/create-view-stmt.html)
-  [create-view-stmt syntax diagram](https://www.sqlite.org/syntax/create-view-stmt.html)
-  [create-virtual-table-stmt](https://www.sqlite.org/syntax/create-virtual-table-stmt.html)
-  [create-virtual-table-stmt syntax diagram](https://www.sqlite.org/syntax/create-virtual-table-stmt.html)
-  [crew](https://www.sqlite.org/crew.html)
-  [CROSS JOIN](https://www.sqlite.org/optoverview.html#crossjoin)
-  [csv](https://www.sqlite.org/csv.html)
-  [CSV export](https://www.sqlite.org/cli.html#csvout)
-  [CSV import](https://www.sqlite.org/cli.html#csv)
-  [CSV virtual table](https://www.sqlite.org/csv.html)
-  [cte-table-name](https://www.sqlite.org/syntax/cte-table-name.html)
-  [cte-table-name syntax diagram](https://www.sqlite.org/syntax/cte-table-name.html)
-  [custom auxiliary functions](https://www.sqlite.org/fts5.html#custom_auxiliary_functions_api_reference)
-  [custom auxiliary overview](https://www.sqlite.org/fts5.html#custom_auxiliary_functions_api_overview)
-  [custom builds](https://www.sqlite.org/custombuild.html)
-  [custom r-tree queries](https://www.sqlite.org/rtree.html#customquery)
-  [custom SQL function](https://www.sqlite.org/appfunc.html)
-  [custom tokenizers](https://www.sqlite.org/fts5.html#custom_tokenizers)
-  [custom virtual tables](https://www.sqlite.org/vtab.html#customvtab)
-  [CVEs](https://www.sqlite.org/cves.html)
-  [Dan Kennedy](https://www.sqlite.org/crew.html#dan)
-  [data container](https://www.sqlite.org/whentouse.html#container)
-  [data transfer format](https://www.sqlite.org/whentouse.html#wireproto)
-  [data_store_directory pragma](https://www.sqlite.org/pragma.html#pragma_data_store_directory)
-  [data_version pragma](https://www.sqlite.org/pragma.html#pragma_data_version)
-  [database as container object](https://www.sqlite.org/sqlar.html#dbasobj)
-  [database as object](https://www.sqlite.org/sqlar.html#dbasobj)
-  [database connection](https://www.sqlite.org/c3ref/sqlite3.html)
-  [database corruption caused by inconsistent use of 8+3 filenames](https://www.sqlite.org/shortnames.html#db83corrupt)
-  [database filename aliasing](https://www.sqlite.org/howtocorrupt.html#alias)
-  [database header](https://www.sqlite.org/fileformat2.html#database_header)
-  [database_list pragma](https://www.sqlite.org/pragma.html#pragma_database_list)
-  [.databases](https://www.sqlite.org/cli.html#dotdatabases)
-  [.databases command](https://www.sqlite.org/cli.html#dotdatabases)
-  [datatype](https://www.sqlite.org/datatype3.html)
-  [date and time datatype](https://www.sqlite.org/datatype3.html#datetime)
-  [date and time functions](https://www.sqlite.org/lang_datefunc.html)
-  [date()](https://www.sqlite.org/lang_datefunc.html#dttm)
-  [date() SQL function](https://www.sqlite.org/lang_datefunc.html#dttm)
-  [date/time modifiers](https://www.sqlite.org/lang_datefunc.html#dtmods)
-  [date/time special case](https://www.sqlite.org/deterministic.html#dtexception)
-  [datetime()](https://www.sqlite.org/lang_datefunc.html#dttm)
-  [datetime() SQL function](https://www.sqlite.org/lang_datefunc.html#dttm)
-  [dbghints](https://www.sqlite.org/debugging.html)
-  [dbhash](https://www.sqlite.org/dbhash.html)
-  [dbhash.exe](https://www.sqlite.org/dbhash.html)
-  [dbsqlfuzz](https://www.sqlite.org/testing.html#dbsqlfuzz)
-  [dbstat](https://www.sqlite.org/dbstat.html)
-  [DBSTAT aggregated mode](https://www.sqlite.org/dbstat.html#dbstatagg)
-  [dbstat virtual table](https://www.sqlite.org/dbstat.html)
-  [debugging hints](https://www.sqlite.org/debugging.html)
-  [debugging memory allocator](https://www.sqlite.org/malloc.html#memdebug)
-  [decimal extension](https://www.sqlite.org/floatingpoint.html#decext)
-  [decision checklist](https://www.sqlite.org/whentouse.html#dbcklst)
-  [DEFAULT clauses](https://www.sqlite.org/lang_createtable.html#dfltval)
-  [default column value](https://www.sqlite.org/lang_createtable.html#dfltval)
-  [default memory allocator](https://www.sqlite.org/malloc.html#defaultalloc)
-  [default value](https://www.sqlite.org/lang_createtable.html#dfltval)
-  [default_cache_size pragma](https://www.sqlite.org/pragma.html#pragma_default_cache_size)
-  [defense against dark arts](https://www.sqlite.org/security.html)
-  [defense against the dark arts](https://www.sqlite.org/security.html)
-  [defensive code](https://www.sqlite.org/testing.html#defcode)
-  [defer_foreign_keys pragma](https://www.sqlite.org/pragma.html#pragma_defer_foreign_keys)
-  [degrees() SQL function](https://www.sqlite.org/lang_mathfunc.html#degrees)
-  [delete-stmt](https://www.sqlite.org/syntax/delete-stmt.html)
-  [delete-stmt syntax diagram](https://www.sqlite.org/syntax/delete-stmt.html)
-  [delete-stmt-limited](https://www.sqlite.org/syntax/delete-stmt-limited.html)
-  [delete-stmt-limited syntax diagram](https://www.sqlite.org/syntax/delete-stmt-limited.html)
-  [deletemerge](https://www.sqlite.org/fts5.html#the_deletemerge_configuration_option)
-  [deleting a hot journal](https://www.sqlite.org/howtocorrupt.html#delhotjrnl)
-  [deprecated](https://www.sqlite.org/c3ref/experimental.html)
-  [DESC](https://www.sqlite.org/lang_createindex.html#descidx)
-  [descending index](https://www.sqlite.org/lang_createindex.html#descidx)
-  [descending indexes](https://www.sqlite.org/lang_createindex.html#descidx)
-  [descending indices](https://www.sqlite.org/lang_createindex.html#descidx)
-  [deserialize method](https://www.sqlite.org/tclsqlite.html#deserialize)
-  [DETACH DATABASE](https://www.sqlite.org/lang_detach.html)
-  [detach-stmt](https://www.sqlite.org/syntax/detach-stmt.html)
-  [detach-stmt syntax diagram](https://www.sqlite.org/syntax/detach-stmt.html)
-  [deterministic function](https://www.sqlite.org/deterministic.html)
-  [deterministic SQL functions](https://www.sqlite.org/deterministic.html)
-  [-DHAVE_FDATASYNC](https://www.sqlite.org/compile.html#fdatasync)
-  [-DHAVE_GMTIME_R](https://www.sqlite.org/compile.html#gmtime_r)
-  [-DHAVE_ISNAN](https://www.sqlite.org/compile.html#isnan)
-  [-DHAVE_LOCALTIME_R](https://www.sqlite.org/compile.html#localtime_r)
-  [-DHAVE_LOCALTIME_S](https://www.sqlite.org/compile.html#localtime_s)
-  [-DHAVE_MALLOC_USABLE_SIZE](https://www.sqlite.org/compile.html#malloc_usable_size)
-  [-DHAVE_SQLITE_CONFIG_H](https://www.sqlite.org/compile.html#sqlite_config_h)
-  [-DHAVE_STRCHRNUL](https://www.sqlite.org/compile.html#strchrnul)
-  [-DHAVE_UTIME](https://www.sqlite.org/compile.html#utime)
-  [DISTINCT](https://www.sqlite.org/lang_select.html#distinct)
-  [documents by category](https://www.sqlite.org/docs.html)
-  [dot-commands](https://www.sqlite.org/cli.html#dotcmd)
-  [double-quoted string literal](https://www.sqlite.org/quirks.html#dblquote)
-  [double-quoted string misfeature](https://www.sqlite.org/quirks.html#dblquote)
-  [download page](https://www.sqlite.org/download.html)
-  [drop column](https://www.sqlite.org/lang_altertable.html#altertabdropcol)
-  [DROP INDEX](https://www.sqlite.org/lang_dropindex.html)
-  [DROP TABLE](https://www.sqlite.org/lang_droptable.html)
-  [DROP TRIGGER](https://www.sqlite.org/lang_droptrigger.html)
-  [DROP VIEW](https://www.sqlite.org/lang_dropview.html)
-  [drop-index-stmt](https://www.sqlite.org/syntax/drop-index-stmt.html)
-  [drop-index-stmt syntax diagram](https://www.sqlite.org/syntax/drop-index-stmt.html)
-  [drop-table-stmt](https://www.sqlite.org/syntax/drop-table-stmt.html)
-  [drop-table-stmt syntax diagram](https://www.sqlite.org/syntax/drop-table-stmt.html)
-  [drop-trigger-stmt](https://www.sqlite.org/syntax/drop-trigger-stmt.html)
-  [drop-trigger-stmt syntax diagram](https://www.sqlite.org/syntax/drop-trigger-stmt.html)
-  [drop-view-stmt](https://www.sqlite.org/syntax/drop-view-stmt.html)
-  [drop-view-stmt syntax diagram](https://www.sqlite.org/syntax/drop-view-stmt.html)
-  [-DSQLITE_4_BYTE_ALIGNED_MALLOC](https://www.sqlite.org/compile.html#4_byte_aligned_malloc)
-  [-DSQLITE_ALLOW_COVERING_INDEX_SCAN](https://www.sqlite.org/compile.html#allow_covering_index_scan)
-  [-DSQLITE_ALLOW_URI_AUTHORITY](https://www.sqlite.org/compile.html#allow_uri_authority)
-  [-DSQLITE_API](https://www.sqlite.org/compile.html#api)
-  [-DSQLITE_APICALL](https://www.sqlite.org/compile.html#apicall)
-  [-DSQLITE_BYTEORDER](https://www.sqlite.org/compile.html#byteorder)
-  [-DSQLITE_CALLBACK](https://www.sqlite.org/compile.html#callback)
-  [-DSQLITE_CASE_SENSITIVE_LIKE](https://www.sqlite.org/compile.html#case_sensitive_like)
-  [-DSQLITE_CDECL](https://www.sqlite.org/compile.html#cdecl)
-  [-DSQLITE_DEBUG](https://www.sqlite.org/compile.html#debug)
-  [-DSQLITE_DEFAULT_AUTOMATIC_INDEX](https://www.sqlite.org/compile.html#default_automatic_index)
-  [-DSQLITE_DEFAULT_AUTOVACUUM](https://www.sqlite.org/compile.html#default_autovacuum)
-  [-DSQLITE_DEFAULT_CACHE_SIZE](https://www.sqlite.org/compile.html#default_cache_size)
-  [-DSQLITE_DEFAULT_FILE_FORMAT](https://www.sqlite.org/compile.html#default_file_format)
-  [-DSQLITE_DEFAULT_FILE_PERMISSIONS](https://www.sqlite.org/compile.html#default_file_permissions)
-  [-DSQLITE_DEFAULT_FOREIGN_KEYS](https://www.sqlite.org/compile.html#default_foreign_keys)
-  [-DSQLITE_DEFAULT_JOURNAL_SIZE_LIMIT](https://www.sqlite.org/compile.html#default_journal_size_limit)
-  [-DSQLITE_DEFAULT_LOCKING_MODE](https://www.sqlite.org/compile.html#default_locking_mode)
-  [-DSQLITE_DEFAULT_LOOKASIDE](https://www.sqlite.org/compile.html#default_lookaside)
-  [-DSQLITE_DEFAULT_MEMSTATUS](https://www.sqlite.org/compile.html#default_memstatus)
-  [-DSQLITE_DEFAULT_MMAP_SIZE](https://www.sqlite.org/compile.html#default_mmap_size)
-  [-DSQLITE_DEFAULT_PAGE_SIZE](https://www.sqlite.org/compile.html#default_page_size)
-  [-DSQLITE_DEFAULT_PCACHE_INITSZ](https://www.sqlite.org/compile.html#default_pcache_initsz)
-  [-DSQLITE_DEFAULT_SYNCHRONOUS](https://www.sqlite.org/compile.html#default_synchronous)
-  [-DSQLITE_DEFAULT_WAL_AUTOCHECKPOINT](https://www.sqlite.org/compile.html#default_wal_autocheckpoint)
-  [-DSQLITE_DEFAULT_WAL_SYNCHRONOUS](https://www.sqlite.org/compile.html#default_wal_synchronous)
-  [-DSQLITE_DEFAULT_WORKER_THREADS](https://www.sqlite.org/compile.html#default_worker_threads)
-  [-DSQLITE_DIRECT_OVERFLOW_READ](https://www.sqlite.org/compile.html#direct_overflow_read)
-  [-DSQLITE_DISABLE_DIRSYNC](https://www.sqlite.org/compile.html#disable_dirsync)
-  [-DSQLITE_DISABLE_FTS3_UNICODE](https://www.sqlite.org/compile.html#disable_fts3_unicode)
-  [-DSQLITE_DISABLE_FTS4_DEFERRED](https://www.sqlite.org/compile.html#disable_fts4_deferred)
-  [-DSQLITE_DISABLE_INTRINSIC](https://www.sqlite.org/compile.html#disable_intrinsic)
-  [-DSQLITE_DISABLE_LFS](https://www.sqlite.org/compile.html#disable_lfs)
-  [-DSQLITE_DISABLE_PAGECACHE_OVERFLOW_STATS](https://www.sqlite.org/compile.html#disable_pagecache_overflow_stats)
-  [-DSQLITE_DQS](https://www.sqlite.org/compile.html#dqs)
-  [-DSQLITE_ENABLE_8_3_NAMES](https://www.sqlite.org/compile.html#enable_8_3_names)
-  [-DSQLITE_ENABLE_API_ARMOR](https://www.sqlite.org/compile.html#enable_api_armor)
-  [-DSQLITE_ENABLE_ATOMIC_WRITE](https://www.sqlite.org/compile.html#enable_atomic_write)
-  [-DSQLITE_ENABLE_BATCH_ATOMIC_WRITE](https://www.sqlite.org/compile.html#enable_batch_atomic_write)
-  [-DSQLITE_ENABLE_BYTECODE_VTAB](https://www.sqlite.org/compile.html#enable_bytecode_vtab)
-  [-DSQLITE_ENABLE_COLUMN_METADATA](https://www.sqlite.org/compile.html#enable_column_metadata)
-  [-DSQLITE_ENABLE_DBPAGE_VTAB](https://www.sqlite.org/compile.html#enable_dbpage_vtab)
-  [-DSQLITE_ENABLE_DBSTAT_VTAB](https://www.sqlite.org/compile.html#enable_dbstat_vtab)
-  [-DSQLITE_ENABLE_DESERIALIZE](https://www.sqlite.org/compile.html#enable_deserialize)
-  [-DSQLITE_ENABLE_EXPLAIN_COMMENTS](https://www.sqlite.org/compile.html#enable_explain_comments)
-  [-DSQLITE_ENABLE_FTS3](https://www.sqlite.org/compile.html#enable_fts3)
-  [-DSQLITE_ENABLE_FTS3_PARENTHESIS](https://www.sqlite.org/compile.html#enable_fts3_parenthesis)
-  [-DSQLITE_ENABLE_FTS3_TOKENIZER](https://www.sqlite.org/compile.html#enable_fts3_tokenizer)
-  [-DSQLITE_ENABLE_FTS4](https://www.sqlite.org/compile.html#enable_fts4)
-  [-DSQLITE_ENABLE_FTS5](https://www.sqlite.org/compile.html#enable_fts5)
-  [-DSQLITE_ENABLE_GEOPOLY](https://www.sqlite.org/compile.html#enable_geopoly)
-  [-DSQLITE_ENABLE_HIDDEN_COLUMNS](https://www.sqlite.org/compile.html#enable_hidden_columns)
-  [-DSQLITE_ENABLE_ICU](https://www.sqlite.org/compile.html#enable_icu)
-  [-DSQLITE_ENABLE_IOTRACE](https://www.sqlite.org/compile.html#enable_iotrace)
-  [-DSQLITE_ENABLE_JSON1](https://www.sqlite.org/compile.html#enable_json1)
-  [-DSQLITE_ENABLE_LOCKING_STYLE](https://www.sqlite.org/compile.html#enable_locking_style)
-  [-DSQLITE_ENABLE_MATH_FUNCTIONS](https://www.sqlite.org/compile.html#enable_math_functions)
-  [-DSQLITE_ENABLE_MEMORY_MANAGEMENT](https://www.sqlite.org/compile.html#enable_memory_management)
-  [-DSQLITE_ENABLE_MEMSYS3](https://www.sqlite.org/compile.html#enable_memsys3)
-  [-DSQLITE_ENABLE_MEMSYS5](https://www.sqlite.org/compile.html#enable_memsys5)
-  [-DSQLITE_ENABLE_NORMALIZE](https://www.sqlite.org/compile.html#enable_normalize)
-  [-DSQLITE_ENABLE_NULL_TRIM](https://www.sqlite.org/compile.html#enable_null_trim)
-  [-DSQLITE_ENABLE_OFFSET_SQL_FUNC](https://www.sqlite.org/compile.html#enable_offset_sql_func)
-  [-DSQLITE_ENABLE_PREUPDATE_HOOK](https://www.sqlite.org/compile.html#enable_preupdate_hook)
-  [-DSQLITE_ENABLE_QPSG](https://www.sqlite.org/compile.html#enable_qpsg)
-  [-DSQLITE_ENABLE_RBU](https://www.sqlite.org/compile.html#enable_rbu)
-  [-DSQLITE_ENABLE_RTREE](https://www.sqlite.org/compile.html#enable_rtree)
-  [-DSQLITE_ENABLE_SESSION](https://www.sqlite.org/compile.html#enable_session)
-  [-DSQLITE_ENABLE_SNAPSHOT](https://www.sqlite.org/compile.html#enable_snapshot)
-  [-DSQLITE_ENABLE_SORTER_REFERENCES](https://www.sqlite.org/compile.html#enable_sorter_references)
-  [-DSQLITE_ENABLE_SQLLOG](https://www.sqlite.org/compile.html#enable_sqllog)
-  [-DSQLITE_ENABLE_STAT2](https://www.sqlite.org/compile.html#enable_stat2)
-  [-DSQLITE_ENABLE_STAT3](https://www.sqlite.org/compile.html#enable_stat3)
-  [-DSQLITE_ENABLE_STAT4](https://www.sqlite.org/compile.html#enable_stat4)
-  [-DSQLITE_ENABLE_STMT_SCANSTATUS](https://www.sqlite.org/compile.html#enable_stmt_scanstatus)
-  [-DSQLITE_ENABLE_STMTVTAB](https://www.sqlite.org/compile.html#enable_stmtvtab)
-  [-DSQLITE_ENABLE_TREE_EXPLAIN](https://www.sqlite.org/compile.html#enable_tree_explain)
-  [-DSQLITE_ENABLE_UNKNOWN_SQL_FUNCTION](https://www.sqlite.org/compile.html#enable_unknown_sql_function)
-  [-DSQLITE_ENABLE_UNLOCK_NOTIFY](https://www.sqlite.org/compile.html#enable_unlock_notify)
-  [-DSQLITE_ENABLE_UPDATE_DELETE_LIMIT](https://www.sqlite.org/compile.html#enable_update_delete_limit)
-  [-DSQLITE_EXTERN](https://www.sqlite.org/compile.html#extern)
-  [-DSQLITE_EXTRA_DURABLE](https://www.sqlite.org/compile.html#extra_durable)
-  [-DSQLITE_FTS3_MAX_EXPR_DEPTH](https://www.sqlite.org/compile.html#fts3_max_expr_depth)
-  [-DSQLITE_HAVE_ISNAN](https://www.sqlite.org/compile.html#have_isnan)
-  [-DSQLITE_HAVE_ZLIB](https://www.sqlite.org/compile.html#have_zlib)
-  [-DSQLITE_INTROSPECTION_PRAGMAS](https://www.sqlite.org/compile.html#introspection_pragmas)
-  [-DSQLITE_JSON_MAX_DEPTH](https://www.sqlite.org/compile.html#json_max_depth)
-  [-DSQLITE_LIKE_DOESNT_MATCH_BLOBS](https://www.sqlite.org/compile.html#like_doesnt_match_blobs)
-  [-DSQLITE_MAX_ALLOCATION_SIZE](https://www.sqlite.org/compile.html#max_allocation_size)
-  [-DSQLITE_MAX_MEMORY](https://www.sqlite.org/compile.html#max_memory)
-  [-DSQLITE_MAX_MMAP_SIZE](https://www.sqlite.org/compile.html#max_mmap_size)
-  [-DSQLITE_MAX_SCHEMA_RETRY](https://www.sqlite.org/compile.html#max_schema_retry)
-  [-DSQLITE_MAX_WORKER_THREADS](https://www.sqlite.org/compile.html#max_worker_threads)
-  [-DSQLITE_MEMDB_DEFAULT_MAXSIZE](https://www.sqlite.org/compile.html#memdb_default_maxsize)
-  [-DSQLITE_MEMDEBUG](https://www.sqlite.org/compile.html#memdebug)
-  [-DSQLITE_MINIMUM_FILE_DESCRIPTOR](https://www.sqlite.org/compile.html#minimum_file_descriptor)
-  [-DSQLITE_OMIT_ALTERTABLE](https://www.sqlite.org/compile.html#omit_altertable)
-  [-DSQLITE_OMIT_ANALYZE](https://www.sqlite.org/compile.html#omit_analyze)
-  [-DSQLITE_OMIT_ATTACH](https://www.sqlite.org/compile.html#omit_attach)
-  [-DSQLITE_OMIT_AUTHORIZATION](https://www.sqlite.org/compile.html#omit_authorization)
-  [-DSQLITE_OMIT_AUTOINCREMENT](https://www.sqlite.org/compile.html#omit_autoincrement)
-  [-DSQLITE_OMIT_AUTOINIT](https://www.sqlite.org/compile.html#omit_autoinit)
-  [-DSQLITE_OMIT_AUTOMATIC_INDEX](https://www.sqlite.org/compile.html#omit_automatic_index)
-  [-DSQLITE_OMIT_AUTORESET](https://www.sqlite.org/compile.html#omit_autoreset)
-  [-DSQLITE_OMIT_AUTOVACUUM](https://www.sqlite.org/compile.html#omit_autovacuum)
-  [-DSQLITE_OMIT_BETWEEN_OPTIMIZATION](https://www.sqlite.org/compile.html#omit_between_optimization)
-  [-DSQLITE_OMIT_BLOB_LITERAL](https://www.sqlite.org/compile.html#omit_blob_literal)
-  [-DSQLITE_OMIT_BTREECOUNT](https://www.sqlite.org/compile.html#omit_btreecount)
-  [-DSQLITE_OMIT_BUILTIN_TEST](https://www.sqlite.org/compile.html#omit_builtin_test)
-  [-DSQLITE_OMIT_CASE_SENSITIVE_LIKE_PRAGMA](https://www.sqlite.org/compile.html#omit_case_sensitive_like_pragma)
-  [-DSQLITE_OMIT_CAST](https://www.sqlite.org/compile.html#omit_cast)
-  [-DSQLITE_OMIT_CHECK](https://www.sqlite.org/compile.html#omit_check)
-  [-DSQLITE_OMIT_COMPILEOPTION_DIAGS](https://www.sqlite.org/compile.html#omit_compileoption_diags)
-  [-DSQLITE_OMIT_COMPLETE](https://www.sqlite.org/compile.html#omit_complete)
-  [-DSQLITE_OMIT_COMPOUND_SELECT](https://www.sqlite.org/compile.html#omit_compound_select)
-  [-DSQLITE_OMIT_CTE](https://www.sqlite.org/compile.html#omit_cte)
-  [-DSQLITE_OMIT_DATETIME_FUNCS](https://www.sqlite.org/compile.html#omit_datetime_funcs)
-  [-DSQLITE_OMIT_DECLTYPE](https://www.sqlite.org/compile.html#omit_decltype)
-  [-DSQLITE_OMIT_DEPRECATED](https://www.sqlite.org/compile.html#omit_deprecated)
-  [-DSQLITE_OMIT_DESERIALIZE](https://www.sqlite.org/compile.html#omit_deserialize)
-  [-DSQLITE_OMIT_DISKIO](https://www.sqlite.org/compile.html#omit_diskio)
-  [-DSQLITE_OMIT_EXPLAIN](https://www.sqlite.org/compile.html#omit_explain)
-  [-DSQLITE_OMIT_FLAG_PRAGMAS](https://www.sqlite.org/compile.html#omit_flag_pragmas)
-  [-DSQLITE_OMIT_FLOATING_POINT](https://www.sqlite.org/compile.html#omit_floating_point)
-  [-DSQLITE_OMIT_FOREIGN_KEY](https://www.sqlite.org/compile.html#omit_foreign_key)
-  [-DSQLITE_OMIT_GENERATED_COLUMNS](https://www.sqlite.org/compile.html#omit_generated_columns)
-  [-DSQLITE_OMIT_GET_TABLE](https://www.sqlite.org/compile.html#omit_get_table)
-  [-DSQLITE_OMIT_HEX_INTEGER](https://www.sqlite.org/compile.html#omit_hex_integer)
-  [-DSQLITE_OMIT_INCRBLOB](https://www.sqlite.org/compile.html#omit_incrblob)
-  [-DSQLITE_OMIT_INTEGRITY_CHECK](https://www.sqlite.org/compile.html#omit_integrity_check)
-  [-DSQLITE_OMIT_INTROSPECTION_PRAGMAS](https://www.sqlite.org/compile.html#omit_introspection_pragmas)
-  [-DSQLITE_OMIT_JSON](https://www.sqlite.org/compile.html#omit_json)
-  [-DSQLITE_OMIT_LIKE_OPTIMIZATION](https://www.sqlite.org/compile.html#omit_like_optimization)
-  [-DSQLITE_OMIT_LOAD_EXTENSION](https://www.sqlite.org/compile.html#omit_load_extension)
-  [-DSQLITE_OMIT_LOCALTIME](https://www.sqlite.org/compile.html#omit_localtime)
-  [-DSQLITE_OMIT_LOOKASIDE](https://www.sqlite.org/compile.html#omit_lookaside)
-  [-DSQLITE_OMIT_MEMORYDB](https://www.sqlite.org/compile.html#omit_memorydb)
-  [-DSQLITE_OMIT_OR_OPTIMIZATION](https://www.sqlite.org/compile.html#omit_or_optimization)
-  [-DSQLITE_OMIT_PAGER_PRAGMAS](https://www.sqlite.org/compile.html#omit_pager_pragmas)
-  [-DSQLITE_OMIT_PRAGMA](https://www.sqlite.org/compile.html#omit_pragma)
-  [-DSQLITE_OMIT_PROGRESS_CALLBACK](https://www.sqlite.org/compile.html#omit_progress_callback)
-  [-DSQLITE_OMIT_QUICKBALANCE](https://www.sqlite.org/compile.html#omit_quickbalance)
-  [-DSQLITE_OMIT_REINDEX](https://www.sqlite.org/compile.html#omit_reindex)
-  [-DSQLITE_OMIT_SCHEMA_PRAGMAS](https://www.sqlite.org/compile.html#omit_schema_pragmas)
-  [-DSQLITE_OMIT_SCHEMA_VERSION_PRAGMAS](https://www.sqlite.org/compile.html#omit_schema_version_pragmas)
-  [-DSQLITE_OMIT_SHARED_CACHE](https://www.sqlite.org/compile.html#omit_shared_cache)
-  [-DSQLITE_OMIT_SUBQUERY](https://www.sqlite.org/compile.html#omit_subquery)
-  [-DSQLITE_OMIT_TCL_VARIABLE](https://www.sqlite.org/compile.html#omit_tcl_variable)
-  [-DSQLITE_OMIT_TEMPDB](https://www.sqlite.org/compile.html#omit_tempdb)
-  [-DSQLITE_OMIT_TRACE](https://www.sqlite.org/compile.html#omit_trace)
-  [-DSQLITE_OMIT_TRIGGER](https://www.sqlite.org/compile.html#omit_trigger)
-  [-DSQLITE_OMIT_TRUNCATE_OPTIMIZATION](https://www.sqlite.org/compile.html#omit_truncate_optimization)
-  [-DSQLITE_OMIT_UTF16](https://www.sqlite.org/compile.html#omit_utf16)
-  [-DSQLITE_OMIT_VACUUM](https://www.sqlite.org/compile.html#omit_vacuum)
-  [-DSQLITE_OMIT_VIEW](https://www.sqlite.org/compile.html#omit_view)
-  [-DSQLITE_OMIT_VIRTUALTABLE](https://www.sqlite.org/compile.html#omit_virtualtable)
-  [-DSQLITE_OMIT_WAL](https://www.sqlite.org/compile.html#omit_wal)
-  [-DSQLITE_OMIT_WINDOWFUNC](https://www.sqlite.org/compile.html#omit_windowfunc)
-  [-DSQLITE_OMIT_WSD](https://www.sqlite.org/compile.html#omit_wsd)
-  [-DSQLITE_OMIT_XFER_OPT](https://www.sqlite.org/compile.html#omit_xfer_opt)
-  [-DSQLITE_OS_OTHER](https://www.sqlite.org/compile.html#os_other)
-  [-DSQLITE_POWERSAFE_OVERWRITE](https://www.sqlite.org/compile.html#powersafe_overwrite)
-  [-DSQLITE_PRINTF_PRECISION_LIMIT](https://www.sqlite.org/compile.html#printf_precision_limit)
-  [-DSQLITE_QUERY_PLANNER_LIMIT](https://www.sqlite.org/compile.html#query_planner_limit)
-  [-DSQLITE_QUERY_PLANNER_LIMIT_INCR](https://www.sqlite.org/compile.html#query_planner_limit_incr)
-  [-DSQLITE_REVERSE_UNORDERED_SELECTS](https://www.sqlite.org/compile.html#reverse_unordered_selects)
-  [-DSQLITE_RTREE_INT_ONLY](https://www.sqlite.org/compile.html#rtree_int_only)
-  [-DSQLITE_SECURE_DELETE](https://www.sqlite.org/compile.html#secure_delete)
-  [-DSQLITE_SORTER_PMASZ](https://www.sqlite.org/compile.html#sorter_pmasz)
-  [-DSQLITE_SOUNDEX](https://www.sqlite.org/compile.html#soundex)
-  [-DSQLITE_STDCALL](https://www.sqlite.org/compile.html#stdcall)
-  [-DSQLITE_STMTJRNL_SPILL](https://www.sqlite.org/compile.html#stmtjrnl_spill)
-  [-DSQLITE_STRICT_SUBTYPE](https://www.sqlite.org/compile.html#strict_subtype)
-  [-DSQLITE_SYSAPI](https://www.sqlite.org/compile.html#sysapi)
-  [-DSQLITE_TCLAPI](https://www.sqlite.org/compile.html#tclapi)
-  [-DSQLITE_TEMP_STORE](https://www.sqlite.org/compile.html#temp_store)
-  [-DSQLITE_THREADSAFE](https://www.sqlite.org/compile.html#threadsafe)
-  [-DSQLITE_TRACE_SIZE_LIMIT](https://www.sqlite.org/compile.html#trace_size_limit)
-  [-DSQLITE_TRUSTED_SCHEMA](https://www.sqlite.org/compile.html#trusted_schema)
-  [-DSQLITE_UNTESTABLE](https://www.sqlite.org/compile.html#untestable)
-  [-DSQLITE_USE_ALLOCA](https://www.sqlite.org/compile.html#use_alloca)
-  [-DSQLITE_USE_FCNTL_TRACE](https://www.sqlite.org/compile.html#use_fcntl_trace)
-  [-DSQLITE_USE_SEH](https://www.sqlite.org/compile.html#use_seh)
-  [-DSQLITE_USE_URI](https://www.sqlite.org/compile.html#use_uri)
-  [-DSQLITE_WIN32_HEAP_CREATE](https://www.sqlite.org/compile.html#win32_heap_create)
-  [-DSQLITE_WIN32_MALLOC](https://www.sqlite.org/compile.html#win32_malloc)
-  [-DSQLITE_WIN32_MALLOC_VALIDATE](https://www.sqlite.org/compile.html#win32_malloc_validate)
-  [-DSQLITE_ZERO_MALLOC](https://www.sqlite.org/compile.html#zero_malloc)
-  [.dump](https://www.sqlite.org/cli.html#dump)
-  [dynamic string](https://www.sqlite.org/c3ref/str.html)
-  [dynamic typing](https://www.sqlite.org/datatype3.html)
-  [edit() SQL function](https://www.sqlite.org/cli.html#editfunc)
-  [editdist3](https://www.sqlite.org/spellfix1.html#editdist3)
-  [embedded](https://www.sqlite.org/serverless.html)
-  [empty_result_callbacks pragma](https://www.sqlite.org/pragma.html#pragma_empty_result_callbacks)
-  [enable_load_extension method](https://www.sqlite.org/tclsqlite.html#enable_load_extension)
-  [encoding pragma](https://www.sqlite.org/pragma.html#pragma_encoding)
-  [enhanced query syntax](https://www.sqlite.org/fts3.html#_set_operations_using_the_enhanced_query_syntax)
-  [eponymous virtual table](https://www.sqlite.org/vtab.html#epovtab)
-  [eponymous-only virtual table](https://www.sqlite.org/vtab.html#epoonlyvtab)
-  [errlog](https://www.sqlite.org/errlog.html)
-  [error code](https://www.sqlite.org/rescode.html)
-  [error log](https://www.sqlite.org/errlog.html)
-  [errorcode method](https://www.sqlite.org/tclsqlite.html#errorcode)
-  [ESCAPE](https://www.sqlite.org/lang_expr.html#like)
-  [eval method](https://www.sqlite.org/tclsqlite.html#eval)
-  [.excel](https://www.sqlite.org/cli.html#dotexcel)
-  [exclude clause](https://www.sqlite.org/windowfunctions.html#wexcls)
-  [exclusive locking mode](https://www.sqlite.org/pragma.html#pragma_locking_mode)
-  [exists method](https://www.sqlite.org/tclsqlite.html#exists)
-  [EXISTS operator](https://www.sqlite.org/lang_expr.html#exists_op)
-  [exp() SQL function](https://www.sqlite.org/lang_mathfunc.html#exp)
-  [experimental](https://www.sqlite.org/c3ref/experimental.html)
-  [experimental memory allocators](https://www.sqlite.org/malloc.html#memsysx)
-  [.expert command](https://www.sqlite.org/cli.html#expert)
-  [explain query plan](https://www.sqlite.org/eqp.html)
-  [export to excel](https://www.sqlite.org/cli.html#exexcel*)
-  [export to TSV](https://www.sqlite.org/cli.html#extsv*)
-  [expr](https://www.sqlite.org/syntax/expr.html)
-  [expr syntax diagram](https://www.sqlite.org/syntax/expr.html)
-  [expression affinity](https://www.sqlite.org/datatype3.html#expraff)
-  [expression index](https://www.sqlite.org/expridx.html)
-  [expression indexes](https://www.sqlite.org/expridx.html)
-  [expression syntax](https://www.sqlite.org/lang_expr.html)
-  [extended error code](https://www.sqlite.org/rescode.html#extrc)
-  [extended result code](https://www.sqlite.org/rescode.html#extrc)
-  [extended result code definitions](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [Extending FTS5](https://www.sqlite.org/fts5.html#extending_fts5)
-  [extension loading](https://www.sqlite.org/loadext.html)
-  [external content fts4 tables](https://www.sqlite.org/fts3.html#_external_content_fts4_tables_)
-  [extract](https://www.sqlite.org/lang_expr.html#extract)
-  [factored-select-stmt](https://www.sqlite.org/syntax/factored-select-stmt.html)
-  [factored-select-stmt syntax diagram](https://www.sqlite.org/syntax/factored-select-stmt.html)
-  [faster than the filesystem](https://www.sqlite.org/fasterthanfs.html)
-  [file control](https://www.sqlite.org/c3ref/file_control.html)
-  [file control opcode](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html)
-  [file format](https://www.sqlite.org/fileformat2.html)
-  [file format version numbers](https://www.sqlite.org/fileformat2.html#vnums)
-  [file I/O functions](https://www.sqlite.org/cli.html#fileio)
-  [file locking and concurrency control](https://www.sqlite.org/lockingv3.html)
-  [file locking states](https://www.sqlite.org/lockingv3.html#locking)
-  [file-format benefits](https://www.sqlite.org/aff_short.html)
-  [filesystem corruption](https://www.sqlite.org/howtocorrupt.html#fscorruption)
-  [FILTER clause on aggregate functions](https://www.sqlite.org/lang_aggfunc.html#aggfilter)
-  [filter-clause](https://www.sqlite.org/syntax/filter-clause.html)
-  [filter-clause syntax diagram](https://www.sqlite.org/syntax/filter-clause.html)
-  [flattened](https://www.sqlite.org/optoverview.html#flattening)
-  [flattening optimization](https://www.sqlite.org/optoverview.html#flattening)
-  [flexible type system](https://www.sqlite.org/datatype3.html)
-  [Flexible typing is a feature](https://www.sqlite.org/flextypegood.html)
-  [floor() SQL function](https://www.sqlite.org/lang_mathfunc.html#floor)
-  [footprint](https://www.sqlite.org/footprint.html)
-  [foreign key actions](https://www.sqlite.org/foreignkeys.html#fk_actions)
-  [foreign key constraint](https://www.sqlite.org/foreignkeys.html)
-  [foreign key constraints are enabled](https://www.sqlite.org/foreignkeys.html#fk_enable)
-  [foreign-key-clause](https://www.sqlite.org/syntax/foreign-key-clause.html)
-  [foreign-key-clause syntax diagram](https://www.sqlite.org/syntax/foreign-key-clause.html)
-  [foreign_key_check pragma](https://www.sqlite.org/pragma.html#pragma_foreign_key_check)
-  [foreign_key_list pragma](https://www.sqlite.org/pragma.html#pragma_foreign_key_list)
-  [foreign_keys pragma](https://www.sqlite.org/pragma.html#pragma_foreign_keys)
-  [format() SQL function](https://www.sqlite.org/lang_corefunc.html#format)
-  [forum](https://www.sqlite.org/support.html#fx)
-  [frame boundary](https://www.sqlite.org/windowfunctions.html#frameboundary)
-  [frame specification](https://www.sqlite.org/windowfunctions.html#framespec)
-  [frame type](https://www.sqlite.org/windowfunctions.html#frametype)
-  [frame-spec](https://www.sqlite.org/syntax/frame-spec.html)
-  [frame-spec syntax diagram](https://www.sqlite.org/syntax/frame-spec.html)
-  [frames](https://www.sqlite.org/windowfunctions.html#framespec)
-  [free-page list](https://www.sqlite.org/fileformat2.html#freelist)
-  [freelist](https://www.sqlite.org/fileformat2.html#freelist)
-  [freelist_count pragma](https://www.sqlite.org/pragma.html#pragma_freelist_count)
-  [FROM clause](https://www.sqlite.org/lang_select.html#fromclause)
-  [FTS auxiliary functions](https://www.sqlite.org/fts3.html#snippet)
-  [FTS hidden column](https://www.sqlite.org/fts3.html#hiddencol)
-  [FTS MATCH](https://www.sqlite.org/fts3.html#full_text_index_queries)
-  [FTS shadow tables](https://www.sqlite.org/fts3.html#*shadowtab)
-  [fts3_tokenizer](https://www.sqlite.org/fts3.html#f3tknzr)
-  [fts3tokenize](https://www.sqlite.org/fts3.html#fts3tok)
-  [fts3tokenize virtual table](https://www.sqlite.org/fts3.html#fts3tok)
-  [FTS4](https://www.sqlite.org/fts3.html#fts4)
-  [FTS4 "automerge" command](https://www.sqlite.org/fts3.html#*fts4automergecmd)
-  [FTS4 "integrity-check" command](https://www.sqlite.org/fts3.html#*fts4ickcmd)
-  [FTS4 "merge" command](https://www.sqlite.org/fts3.html#*fts4mergecmd)
-  [FTS4 "optimize" command](https://www.sqlite.org/fts3.html#*fts4optcmd)
-  [FTS4 "rebuild" command](https://www.sqlite.org/fts3.html#*fts4rebuidcmd)
-  [FTS4 commands](https://www.sqlite.org/fts3.html#*cmds)
-  [fts4 compress option](https://www.sqlite.org/fts3.html#the_compress_and_uncompress_options)
-  [FTS4 content option](https://www.sqlite.org/fts3.html#*fts4content)
-  [FTS4 languageid option](https://www.sqlite.org/fts3.html#*fts4languageid)
-  [FTS4 matchinfo option](https://www.sqlite.org/fts3.html#fts4matchinfo)
-  [FTS4 notindexed option](https://www.sqlite.org/fts3.html#fts4notindexed)
-  [FTS4 options](https://www.sqlite.org/fts3.html#fts4_options)
-  [FTS4 order option](https://www.sqlite.org/fts3.html#fts4order)
-  [FTS4 prefix option](https://www.sqlite.org/fts3.html#fts4prefix)
-  [fts4aux](https://www.sqlite.org/fts3.html#fts4aux)
-  [fts4aux languageid column](https://www.sqlite.org/fts3.html#f4alid)
-  [FTS5 automerge option](https://www.sqlite.org/fts5.html#the_automerge_configuration_option)
-  [FTS5 auxiliary functions](https://www.sqlite.org/fts5.html#_auxiliary_functions_)
-  [FTS5 bm25](https://www.sqlite.org/fts5.html#the_bm25_function)
-  [FTS5 boolean operators](https://www.sqlite.org/fts5.html#fts5_boolean_operators)
-  [FTS5 building](https://www.sqlite.org/fts5.html#compiling_and_using_fts5)
-  [FTS5 column filters](https://www.sqlite.org/fts5.html#fts5_column_filters)
-  [FTS5 columnsize option](https://www.sqlite.org/fts5.html#the_columnsize_option)
-  [FTS5 content option](https://www.sqlite.org/fts5.html#external_content_and_contentless_tables)
-  [FTS5 contentless tables](https://www.sqlite.org/fts5.html#contentless_tables)
-  [FTS5 contentless-delete tables](https://www.sqlite.org/fts5.html#contentless_delete_tables)
-  [FTS5 CREATE TABLE Options](https://www.sqlite.org/fts5.html#fts5_table_creation_and_initialization)
-  [FTS5 custom auxiliary functions](https://www.sqlite.org/fts5.html#custom_auxiliary_functions)
-  [FTS5 delete command](https://www.sqlite.org/fts5.html#the_delete_command)
-  [FTS5 delete-all command](https://www.sqlite.org/fts5.html#the_delete_all_command)
-  [FTS5 detail option](https://www.sqlite.org/fts5.html#the_detail_option)
-  [FTS5 external content pitfalls](https://www.sqlite.org/fts5.html#external_content_table_pitfalls)
-  [FTS5 external content tables](https://www.sqlite.org/fts5.html#external_content_tables)
-  [FTS5 highlight](https://www.sqlite.org/fts5.html#the_highlight_function)
-  [FTS5 initial token](https://www.sqlite.org/fts5.html#carrotq)
-  [FTS5 initial token queries](https://www.sqlite.org/fts5.html#fts5_initial_token_queries)
-  [FTS5 merge command](https://www.sqlite.org/fts5.html#the_merge_command)
-  [FTS5 NEAR queries](https://www.sqlite.org/fts5.html#fts5_near_queries)
-  [FTS5 optimize command](https://www.sqlite.org/fts5.html#the_optimize_command)
-  [FTS5 pgsz option](https://www.sqlite.org/fts5.html#the_pgsz_configuration_option)
-  [FTS5 Phrases](https://www.sqlite.org/fts5.html#fts5_phrases)
-  [FTS5 prefix indexes](https://www.sqlite.org/fts5.html#prefix_indexes)
-  [FTS5 prefix queries](https://www.sqlite.org/fts5.html#fts5_prefix_queries)
-  [FTS5 query syntax](https://www.sqlite.org/fts5.html#full_text_query_syntax)
-  [FTS5 rank configuration option](https://www.sqlite.org/fts5.html#the_rank_configuration_option)
-  [FTS5 rebuild command](https://www.sqlite.org/fts5.html#the_rebuild_command)
-  [FTS5 secure-delete command](https://www.sqlite.org/fts5.html#the_secure_delete_configuration_option)
-  [fts5 shadow tables](https://www.sqlite.org/fts5.html#fts5shadowtables)
-  [FTS5 snippet](https://www.sqlite.org/fts5.html#the_snippet_function)
-  [FTS5 Strings](https://www.sqlite.org/fts5.html#fts5_strings)
-  [fts5 technical differences](https://www.sqlite.org/fts5.html#_summary_of_technical_differences_)
-  [FTS5 tokendata option](https://www.sqlite.org/fts5.html#the_tokendata_option)
-  [FTS5 tokenizers](https://www.sqlite.org/fts5.html#tokenizers)
-  [FTS5 usermerge option](https://www.sqlite.org/fts5.html#the_usermerge_configuration_option)
-  [fts5vocab](https://www.sqlite.org/fts5.html#the_fts5vocab_virtual_table_module)
-  [FULL JOIN](https://www.sqlite.org/lang_select.html#fulljoin)
-  [FULL OUTER JOIN](https://www.sqlite.org/lang_select.html#fulljoin)
-  [Full-featured SQL](https://www.sqlite.org/fullsql.html)
-  [full-text search](https://www.sqlite.org/fts3.html)
-  [full_column_names pragma](https://www.sqlite.org/pragma.html#pragma_full_column_names)
-  [fullfsync pragma](https://www.sqlite.org/pragma.html#pragma_fullfsync)
-  [.fullschema](https://www.sqlite.org/cli.html#fullschema)
-  [function creation routines](https://www.sqlite.org/c3ref/create_function.html)
-  [function method](https://www.sqlite.org/tclsqlite.html#function)
-  [function-arguments](https://www.sqlite.org/syntax/function-arguments.html)
-  [function-arguments syntax diagram](https://www.sqlite.org/syntax/function-arguments.html)
-  [function_list pragma](https://www.sqlite.org/pragma.html#pragma_function_list)
-  [functions within expressions](https://www.sqlite.org/lang_expr.html#*funcinexpr)
-  [fuzz testing](https://www.sqlite.org/testing.html#fuzztesting)
-  [fuzzcheck](https://www.sqlite.org/testing.html#fuzzcheck)
-  [generalized ALTER TABLE procedure](https://www.sqlite.org/lang_altertable.html#otheralter)
-  [generate_series](https://www.sqlite.org/series.html)
-  [generated column](https://www.sqlite.org/gencol.html)
-  [geopoly](https://www.sqlite.org/geopoly.html)
-  [Geopoly extension](https://www.sqlite.org/geopoly.html)
-  [Geopoly module](https://www.sqlite.org/geopoly.html)
-  [geopoly_area](https://www.sqlite.org/geopoly.html#garea)
-  [geopoly_bbox](https://www.sqlite.org/geopoly.html#gbbox)
-  [geopoly_blob](https://www.sqlite.org/geopoly.html#gblob)
-  [geopoly_ccw](https://www.sqlite.org/geopoly.html#ccw)
-  [geopoly_contains_point](https://www.sqlite.org/geopoly.html#gpoint)
-  [geopoly_group_bbox](https://www.sqlite.org/geopoly.html#gbbox)
-  [geopoly_json](https://www.sqlite.org/geopoly.html#gjson)
-  [geopoly_overlap](https://www.sqlite.org/geopoly.html#goverlap)
-  [geopoly_regular](https://www.sqlite.org/geopoly.html#regpoly)
-  [geopoly_svg](https://www.sqlite.org/geopoly.html#gsvg)
-  [geopoly_within](https://www.sqlite.org/geopoly.html#gwithin)
-  [geopoly_xform](https://www.sqlite.org/geopoly.html#xform)
-  [get the canonical source code](https://www.sqlite.org/getthecode.html)
-  [glob() SQL function](https://www.sqlite.org/lang_corefunc.html#glob)
-  [GROUP BY](https://www.sqlite.org/lang_select.html#resultset)
-  [GROUP BY clause](https://www.sqlite.org/lang_select.html#resultset)
-  [group_concat() aggregate function](https://www.sqlite.org/lang_aggfunc.html#group_concat)
-  [GROUPS frames](https://www.sqlite.org/windowfunctions.html#grouptype)
-  [hard_heap_limit pragma](https://www.sqlite.org/pragma.html#pragma_hard_heap_limit)
-  [hash join](https://www.sqlite.org/optoverview.html#hashjoin)
-  [HAVE_FDATASYNC](https://www.sqlite.org/compile.html#fdatasync)
-  [HAVE_GMTIME_R](https://www.sqlite.org/compile.html#gmtime_r)
-  [HAVE_ISNAN](https://www.sqlite.org/compile.html#isnan)
-  [HAVE_LOCALTIME_R](https://www.sqlite.org/compile.html#localtime_r)
-  [HAVE_LOCALTIME_S](https://www.sqlite.org/compile.html#localtime_s)
-  [HAVE_MALLOC_USABLE_SIZE](https://www.sqlite.org/compile.html#malloc_usable_size)
-  [HAVE_SQLITE_CONFIG_H](https://www.sqlite.org/compile.html#sqlite_config_h)
-  [HAVE_STRCHRNUL](https://www.sqlite.org/compile.html#strchrnul)
-  [HAVE_UTIME](https://www.sqlite.org/compile.html#utime)
-  [HAVING](https://www.sqlite.org/lang_select.html#resultset)
-  [HAVING clause](https://www.sqlite.org/lang_select.html#resultset)
-  [hazards of upgrading to the NGQP](https://www.sqlite.org/queryplanner-ng.html#hazards)
-  [hex() SQL function](https://www.sqlite.org/lang_corefunc.html#hex)
-  [hexadecimal integer literals](https://www.sqlite.org/lang_expr.html#hexint)
-  [hexadecimal integers](https://www.sqlite.org/lang_expr.html#hexint)
-  [hidden column](https://www.sqlite.org/vtab.html#hiddencol)
-  [high-reliability](https://www.sqlite.org/hirely.html)
-  [Hipp](https://www.sqlite.org/crew.html)
-  [host parameter](https://www.sqlite.org/c3ref/bind_blob.html)
-  [host parameter name](https://www.sqlite.org/c3ref/bind_blob.html)
-  [hot journal](https://www.sqlite.org/fileformat2.html#hotjrnl)
-  [hot journal files](https://www.sqlite.org/fileformat2.html#hotjrnl)
-  [how collation is determined](https://www.sqlite.org/datatype3.html#colrules)
-  [How SQL Works](https://www.sqlite.org/howitworks.html)
-  [How SQLite Works](https://www.sqlite.org/howitworks.html)
-  [how to compile](https://www.sqlite.org/howtocompile.html)
-  [How To Compile SQLite](https://www.sqlite.org/howtocompile.html)
-  [how to corrupt](https://www.sqlite.org/howtocorrupt.html)
-  [how to corrupt a database](https://www.sqlite.org/useovernet.html)
-  [How To Corrupt Your Database Files](https://www.sqlite.org/lockingv3.html#how_to_corrupt)
-  [how vacuum works](https://www.sqlite.org/lang_vacuum.html#howvacuumworks)
-  [IEEE 754 floating point values are approximations](https://www.sqlite.org/floatingpoint.html#fpapprox)
-  [ieee754 extension](https://www.sqlite.org/floatingpoint.html#ieee754ext)
-  [ieee754() function](https://www.sqlite.org/floatingpoint.html#ieee754)
-  [ieee754_exponent() function](https://www.sqlite.org/floatingpoint.html#ieee754m)
-  [ieee754_from_blob() function](https://www.sqlite.org/floatingpoint.html#ieee754b)
-  [ieee754_mantissa() function](https://www.sqlite.org/floatingpoint.html#ieee754m)
-  [ieee754_to_blob() function](https://www.sqlite.org/floatingpoint.html#ieee754b)
-  [ifnull() SQL function](https://www.sqlite.org/lang_corefunc.html#ifnull)
-  [ignore_check_constraints pragma](https://www.sqlite.org/pragma.html#pragma_ignore_check_constraints)
-  [iif() SQL function](https://www.sqlite.org/lang_corefunc.html#iif)
-  ["immutable" query parameter](https://www.sqlite.org/uri.html#uriimmutable)
-  [.import](https://www.sqlite.org/cli.html#csv)
-  [.import command](https://www.sqlite.org/cli.html#csv)
-  [.imposter dot-command](https://www.sqlite.org/imposter.html#dotimposter)
-  [imposter tables](https://www.sqlite.org/imposter.html)
-  [IN operator](https://www.sqlite.org/lang_expr.html#in_op)
-  [in-header database size](https://www.sqlite.org/fileformat2.html#filesize)
-  [in-memory database](https://www.sqlite.org/inmemorydb.html)
-  [in-memory shared cache database](https://www.sqlite.org/inmemorydb.html#sharedmemdb)
-  [in-memory shared-cache](https://www.sqlite.org/sharedcache.html#inmemsharedcache)
-  [incrblob method](https://www.sqlite.org/tclsqlite.html#incrblob)
-  [increase in the default page size](https://www.sqlite.org/pgszchng2016.html)
-  [incremental_vacuum pragma](https://www.sqlite.org/pragma.html#pragma_incremental_vacuum)
-  [index b-tree](https://www.sqlite.org/fileformat2.html#btypes)
-  [index_info pragma](https://www.sqlite.org/pragma.html#pragma_index_info)
-  [index_list pragma](https://www.sqlite.org/pragma.html#pragma_index_list)
-  [index_xinfo pragma](https://www.sqlite.org/pragma.html#pragma_index_xinfo)
-  [INDEXED BY](https://www.sqlite.org/lang_indexedby.html)
-  [indexed expression](https://www.sqlite.org/expridx.html)
-  [indexed-column](https://www.sqlite.org/syntax/indexed-column.html)
-  [indexed-column syntax diagram](https://www.sqlite.org/syntax/indexed-column.html)
-  [Indexes](https://www.sqlite.org/lang_createindex.html)
-  [indexes on expressions](https://www.sqlite.org/expridx.html)
-  [indexing](https://www.sqlite.org/queryplanner.html)
-  [indexing tutorial](https://www.sqlite.org/queryplanner.html)
-  [--insert option](https://www.sqlite.org/cli.html#arinsup)
-  [insert-stmt](https://www.sqlite.org/syntax/insert-stmt.html)
-  [insert-stmt syntax diagram](https://www.sqlite.org/syntax/insert-stmt.html)
-  [INSTEAD OF](https://www.sqlite.org/lang_createtrigger.html#instead_of_trigger)
-  [INSTEAD OF trigger](https://www.sqlite.org/lang_createtrigger.html#instead_of_trigger)
-  [instr() SQL function](https://www.sqlite.org/lang_corefunc.html#instr)
-  [INTEGER PRIMARY KEY](https://www.sqlite.org/lang_createtable.html#rowid)
-  [integer-valued r-trees](https://www.sqlite.org/rtree.html#intrtree)
-  [integrity_check pragma](https://www.sqlite.org/pragma.html#pragma_integrity_check)
-  [internal index](https://www.sqlite.org/fileformat2.html#intschema)
-  [internal indexes](https://www.sqlite.org/fileformat2.html#intschema)
-  [internal schema object](https://www.sqlite.org/fileformat2.html#intschema)
-  [internal table](https://www.sqlite.org/fileformat2.html#intschema)
-  [Internal Versus External BLOBs](https://www.sqlite.org/intern-v-extern-blob.html)
-  [interrupt method](https://www.sqlite.org/tclsqlite.html#interrupt)
-  [invalid UTF](https://www.sqlite.org/invalidutf.html)
-  [IS DISTINCT FROM](https://www.sqlite.org/lang_expr.html#isdf)
-  [IS NOT DISTINCT FROM](https://www.sqlite.org/lang_expr.html#isdf)
-  [IS NOT operator](https://www.sqlite.org/lang_expr.html#isisnot)
-  [IS operator](https://www.sqlite.org/lang_expr.html#isisnot)
-  [isolation](https://www.sqlite.org/isolation.html)
-  [jfuzz](https://www.sqlite.org/testing.html#dbsqlfuzz)
-  [join order](https://www.sqlite.org/optoverview.html#joins)
-  [join-clause](https://www.sqlite.org/syntax/join-clause.html)
-  [join-clause syntax diagram](https://www.sqlite.org/syntax/join-clause.html)
-  [join-constraint](https://www.sqlite.org/syntax/join-constraint.html)
-  [join-constraint syntax diagram](https://www.sqlite.org/syntax/join-constraint.html)
-  [join-operator](https://www.sqlite.org/syntax/join-operator.html)
-  [join-operator syntax diagram](https://www.sqlite.org/syntax/join-operator.html)
-  [journal_mode pragma](https://www.sqlite.org/pragma.html#pragma_journal_mode)
-  [journal_size_limit pragma](https://www.sqlite.org/pragma.html#pragma_journal_size_limit)
-  [json](https://www.sqlite.org/json1.html#jmini)
-  [JSON BLOB input bug](https://www.sqlite.org/json1.html#jblobbug)
-  [JSON function path arguments](https://www.sqlite.org/json1.html#jsonpath)
-  [JSON paths](https://www.sqlite.org/json1.html#jsonpath)
-  [json SQL function](https://www.sqlite.org/json1.html#jmini)
-  [json1](https://www.sqlite.org/json1.html)
-  [JSON5](https://www.sqlite.org/json1.html#json5)
-  [JSON5 extensions](https://www.sqlite.org/json1.html#json5)
-  [json_array](https://www.sqlite.org/json1.html#jarray)
-  [json_array SQL function](https://www.sqlite.org/json1.html#jarray)
-  [json_array_length](https://www.sqlite.org/json1.html#jarraylen)
-  [json_array_length SQL function](https://www.sqlite.org/json1.html#jarraylen)
-  [json_each](https://www.sqlite.org/json1.html#jeach)
-  [json_each table-valued function](https://www.sqlite.org/json1.html#jeach)
-  [json_error_position](https://www.sqlite.org/json1.html#jerr)
-  [json_error_position SQL function](https://www.sqlite.org/json1.html#jerr)
-  [json_extract](https://www.sqlite.org/json1.html#jex)
-  [json_extract SQL function](https://www.sqlite.org/json1.html#jex)
-  [json_group_array](https://www.sqlite.org/json1.html#jgrouparray)
-  [json_group_array SQL function](https://www.sqlite.org/json1.html#jgrouparray)
-  [json_group_object](https://www.sqlite.org/json1.html#jgroupobject)
-  [json_group_object SQL function](https://www.sqlite.org/json1.html#jgroupobject)
-  [json_insert](https://www.sqlite.org/json1.html#jins)
-  [json_insert SQL function](https://www.sqlite.org/json1.html#jins)
-  [json_object](https://www.sqlite.org/json1.html#jobj)
-  [json_object SQL function](https://www.sqlite.org/json1.html#jobj)
-  [json_patch](https://www.sqlite.org/json1.html#jpatch)
-  [json_patch SQL function](https://www.sqlite.org/json1.html#jpatch)
-  [json_pretty](https://www.sqlite.org/json1.html#jpretty)
-  [json_pretty SQL function](https://www.sqlite.org/json1.html#jpretty)
-  [json_quote](https://www.sqlite.org/json1.html#jquote)
-  [json_quote SQL function](https://www.sqlite.org/json1.html#jquote)
-  [json_remove](https://www.sqlite.org/json1.html#jrm)
-  [json_remove SQL function](https://www.sqlite.org/json1.html#jrm)
-  [json_replace](https://www.sqlite.org/json1.html#jrepl)
-  [json_replace SQL function](https://www.sqlite.org/json1.html#jrepl)
-  [json_set](https://www.sqlite.org/json1.html#jset)
-  [json_set SQL function](https://www.sqlite.org/json1.html#jset)
-  [json_tree](https://www.sqlite.org/json1.html#jtree)
-  [json_tree table-valued function](https://www.sqlite.org/json1.html#jtree)
-  [json_type](https://www.sqlite.org/json1.html#jtype)
-  [json_type SQL function](https://www.sqlite.org/json1.html#jtype)
-  [json_valid](https://www.sqlite.org/json1.html#jvalid)
-  [json_valid SQL function](https://www.sqlite.org/json1.html#jvalid)
-  [JSONB](https://www.sqlite.org/json1.html#jsonbx)
-  [jsonb SQL function](https://www.sqlite.org/json1.html#jminib)
-  [jsonb_array](https://www.sqlite.org/json1.html#jarrayb)
-  [jsonb_array SQL function](https://www.sqlite.org/json1.html#jarrayb)
-  [jsonb_extract](https://www.sqlite.org/json1.html#jexb)
-  [jsonb_extract SQL function](https://www.sqlite.org/json1.html#jexb)
-  [jsonb_group_array](https://www.sqlite.org/json1.html#jgrouparrayb)
-  [jsonb_group_array SQL function](https://www.sqlite.org/json1.html#jgrouparrayb)
-  [jsonb_group_object](https://www.sqlite.org/json1.html#jgroupobjectb)
-  [jsonb_group_object SQL function](https://www.sqlite.org/json1.html#jgroupobjectb)
-  [jsonb_insert](https://www.sqlite.org/json1.html#jinsb)
-  [jsonb_insert SQL function](https://www.sqlite.org/json1.html#jinsb)
-  [jsonb_object](https://www.sqlite.org/json1.html#jobjb)
-  [jsonb_object SQL function](https://www.sqlite.org/json1.html#jobjb)
-  [jsonb_patch](https://www.sqlite.org/json1.html#jpatchb)
-  [jsonb_patch SQL function](https://www.sqlite.org/json1.html#jpatchb)
-  [jsonb_remove](https://www.sqlite.org/json1.html#jrmb)
-  [jsonb_remove SQL function](https://www.sqlite.org/json1.html#jrmb)
-  [jsonb_replace](https://www.sqlite.org/json1.html#jreplb)
-  [jsonb_replace SQL function](https://www.sqlite.org/json1.html#jreplb)
-  [jsonb_set](https://www.sqlite.org/json1.html#jsetb)
-  [jsonb_set SQL function](https://www.sqlite.org/json1.html#jsetb)
-  [julianday modifier](https://www.sqlite.org/lang_datefunc.html#jdmod)
-  [julianday()](https://www.sqlite.org/lang_datefunc.html#jlndy)
-  [julianday() SQL function](https://www.sqlite.org/lang_datefunc.html#jlndy)
-  [Kennedy](https://www.sqlite.org/crew.html)
-  [keyword index](https://www.sqlite.org/keyword_index.html)
-  [keywords](https://www.sqlite.org/lang_keywords.html)
-  [languageid](https://www.sqlite.org/fts3.html#*fts4languageid)
-  [large WAL files](https://www.sqlite.org/wal.html#bigwal)
-  [last_insert_rowid method](https://www.sqlite.org/tclsqlite.html#last_insert_rowid)
-  [last_insert_rowid() SQL function](https://www.sqlite.org/lang_corefunc.html#last_insert_rowid)
-  [LEFT JOIN strength reduction optimization](https://www.sqlite.org/optoverview.html#leftjoinreduction)
-  [legacy_alter_table pragma](https://www.sqlite.org/pragma.html#pragma_legacy_alter_table)
-  [legacy_file_format pragma](https://www.sqlite.org/pragma.html#pragma_legacy_file_format)
-  [Lemon](https://www.sqlite.org/lemon.html)
-  [Lemon LALR parser generator](https://www.sqlite.org/lemon.html)
-  [Lemon parser generator](https://www.sqlite.org/lemon.html)
-  [length() SQL function](https://www.sqlite.org/lang_corefunc.html#length)
-  [library size](https://www.sqlite.org/footprint.html)
-  [license](https://www.sqlite.org/copyright.html)
-  [LIKE optimization](https://www.sqlite.org/optoverview.html#like_opt)
-  [like() SQL function](https://www.sqlite.org/lang_corefunc.html#like)
-  [likelihood() SQL function](https://www.sqlite.org/lang_corefunc.html#likelihood)
-  [likely() SQL function](https://www.sqlite.org/lang_corefunc.html#likely)
-  [LIMIT](https://www.sqlite.org/lang_select.html#limitoffset)
-  [limit category](https://www.sqlite.org/c3ref/c_limit_attached.html)
-  [list of current bytecodes](https://www.sqlite.org/opcode.html#codes)
-  [list of virtual tables](https://www.sqlite.org/vtablist.html)
-  [literal value](https://www.sqlite.org/lang_expr.html#litvalue)
-  [literal-value](https://www.sqlite.org/syntax/literal-value.html)
-  [literal-value syntax diagram](https://www.sqlite.org/syntax/literal-value.html)
-  [ln() SQL function](https://www.sqlite.org/lang_mathfunc.html#ln)
-  [.load command](https://www.sqlite.org/cli.html#dotload)
-  [load_extension() SQL function](https://www.sqlite.org/lang_corefunc.html#load_extension)
-  [loadable extension](https://www.sqlite.org/loadext.html)
-  [loadext](https://www.sqlite.org/loadext.html)
-  [localtime modifier](https://www.sqlite.org/lang_datefunc.html#localtime)
-  [lock-byte page](https://www.sqlite.org/fileformat2.html#lockbyte)
-  [locking_mode pragma](https://www.sqlite.org/pragma.html#pragma_locking_mode)
-  [log](https://www.sqlite.org/lang_mathfunc.html#log)
-  [log10](https://www.sqlite.org/lang_mathfunc.html#log)
-  [log2() SQL function](https://www.sqlite.org/lang_mathfunc.html#log2)
-  [long term support](https://www.sqlite.org/lts.html)
-  [lookaside](https://www.sqlite.org/malloc.html#lookaside)
-  [lookaside buffer](https://www.sqlite.org/malloc.html#lookaside)
-  [lookaside memory](https://www.sqlite.org/malloc.html#lookaside)
-  [lookaside memory allocator](https://www.sqlite.org/malloc.html#lookaside)
-  [low-dependency](https://www.sqlite.org/selfcontained.html)
-  [lower() SQL function](https://www.sqlite.org/lang_corefunc.html#lower)
-  [ltrim() SQL function](https://www.sqlite.org/lang_corefunc.html#ltrim)
-  [mailing lists](https://www.sqlite.org/support.html#mailinglists)
-  [managing SQLite Archives from the command-line](https://www.sqlite.org/sqlar.html#cltools)
-  [Manual Control Of Query Plans Using CROSS JOIN](https://www.sqlite.org/optoverview.html#crossjoin)
-  [Manual Control Of Query Plans Using SQLITE_STAT Tables](https://www.sqlite.org/optoverview.html#manctrl)
-  [master journal](https://www.sqlite.org/tempfiles.html#superjrnl)
-  [MATCH](https://www.sqlite.org/lang_expr.html#match)
-  [matchinfo](https://www.sqlite.org/fts3.html#matchinfo)
-  [matchinfo b flag](https://www.sqlite.org/fts3.html#matchinfo-b)
-  [matchinfo x flag](https://www.sqlite.org/fts3.html#matchinfo-x)
-  [matchinfo y flag](https://www.sqlite.org/fts3.html#matchinfo-y)
-  [materialization hints](https://www.sqlite.org/lang_with.html#mathint)
-  [MATERIALIZED](https://www.sqlite.org/lang_with.html#mathint)
-  [Math Functions](https://www.sqlite.org/lang_mathfunc.html)
-  [max() aggregate function](https://www.sqlite.org/lang_aggfunc.html#max_agg)
-  [max() SQL function](https://www.sqlite.org/lang_corefunc.html#max_scalar)
-  [max_page_count pragma](https://www.sqlite.org/pragma.html#pragma_max_page_count)
-  [maxopen parameter](https://www.sqlite.org/swarmvtab.html#the_maxopen_parameter)
-  [MC/DC testing](https://www.sqlite.org/testing.html#mcdc)
-  [memory](https://www.sqlite.org/inmemorydb.html)
-  [memory allocation](https://www.sqlite.org/malloc.html)
-  [memory statistics](https://www.sqlite.org/malloc.html#memstatus)
-  [memory-mapped I/O](https://www.sqlite.org/mmap.html)
-  ["merge" command](https://www.sqlite.org/fts3.html#*fts4mergecmd)
-  [microoptimizations](https://www.sqlite.org/cpu.html#microopt)
-  [min() aggregate function](https://www.sqlite.org/lang_aggfunc.html#min_agg)
-  [min() SQL function](https://www.sqlite.org/lang_corefunc.html#min_scalar)
-  [min/max optimization](https://www.sqlite.org/optoverview.html#minmax)
-  [missing callback](https://www.sqlite.org/swarmvtab.html#the_missing_callback)
-  [mmap](https://www.sqlite.org/mmap.html)
-  [mmap_size pragma](https://www.sqlite.org/pragma.html#pragma_mmap_size)
-  [mod() SQL function](https://www.sqlite.org/lang_mathfunc.html#mod)
-  [.mode](https://www.sqlite.org/cli.html#dotmode)
-  [.mode quote](https://www.sqlite.org/cli.html#dotmodequote)
-  ["mode" query parameter](https://www.sqlite.org/uri.html#urimode)
-  [modeof](https://www.sqlite.org/uri.html#urimodeof)
-  ["modeof" query parameter](https://www.sqlite.org/uri.html#urimodeof)
-  [modifiers](https://www.sqlite.org/lang_datefunc.html#dtmods)
-  [module_list pragma](https://www.sqlite.org/pragma.html#pragma_module_list)
-  [most used](https://www.sqlite.org/mostdeployed.html)
-  [most widely deployed](https://www.sqlite.org/mostdeployed.html)
-  [most widely used](https://www.sqlite.org/mostdeployed.html)
-  [mutation test script](https://www.sqlite.org/th3.html#muttest)
-  [mutation testing](https://www.sqlite.org/testing.html#mutationtests)
-  [mxFrame](https://www.sqlite.org/walformat.html#mxframe)
-  [nBackfill](https://www.sqlite.org/walformat.html#nbackfill)
-  [NEAR queries](https://www.sqlite.org/fts3.html#near)
-  [network filesystem use](https://www.sqlite.org/useovernet.html)
-  [next generation query planner](https://www.sqlite.org/queryplanner-ng.html)
-  [NGQP](https://www.sqlite.org/queryplanner-ng.html)
-  [NOCASE collating function](https://www.sqlite.org/datatype3.html#collation)
-  ["nolock" query parameter](https://www.sqlite.org/uri.html#urinolock)
-  [non-deterministic functions](https://www.sqlite.org/deterministic.html)
-  [non-standard SELECT syntax](https://www.sqlite.org/lang_select.html#nonstd)
-  [NOT EXISTS operator](https://www.sqlite.org/lang_expr.html#exists_op)
-  [NOT IN operator](https://www.sqlite.org/lang_expr.html#in_op)
-  [NOT INDEXED](https://www.sqlite.org/lang_indexedby.html)
-  [NOT MATERIALIZED](https://www.sqlite.org/lang_with.html#mathint)
-  [NOT NULL](https://www.sqlite.org/lang_createtable.html#notnullconst)
-  [NOT NULL constraint](https://www.sqlite.org/lang_createtable.html#notnullconst)
-  [not open-contributin](https://www.sqlite.org/copyright.html#notopencontrib)
-  [NUL characters in strings](https://www.sqlite.org/nulinstr.html)
-  [nullif() SQL function](https://www.sqlite.org/lang_corefunc.html#nullif)
-  [NULLS FIRST](https://www.sqlite.org/lang_select.html#nullslast)
-  [NULLS LAST](https://www.sqlite.org/lang_select.html#nullslast)
-  [nullvalue method](https://www.sqlite.org/tclsqlite.html#nullvalue)
-  [numeric literals](https://www.sqlite.org/lang_expr.html#litvalue)
-  [numeric-literal](https://www.sqlite.org/syntax/numeric-literal.html)
-  [numeric-literal syntax diagram](https://www.sqlite.org/syntax/numeric-literal.html)
-  [object resolution](https://www.sqlite.org/lang_naming.html)
-  [octet_length() SQL function](https://www.sqlite.org/lang_corefunc.html#octet_length)
-  [OFFSET](https://www.sqlite.org/lang_select.html#limitoffset)
-  [omit-left-join optimization](https://www.sqlite.org/optoverview.html#omitnoopjoin)
-  [omit-outer-join optimization](https://www.sqlite.org/optoverview.html#omitnoopjoin)
-  [omitfeatures](https://www.sqlite.org/compile.html#omitfeatures)
-  [ON CONFLICT](https://www.sqlite.org/lang_conflict.html)
-  [ON CONFLICT clause](https://www.sqlite.org/lang_conflict.html)
-  [on-disk format](https://www.sqlite.org/fileformat2.html)
-  [.once](https://www.sqlite.org/cli.html#dotoutput)
-  [onecolumn method](https://www.sqlite.org/tclsqlite.html#onecolumn)
-  [opcode definitions](https://www.sqlite.org/opcode.html#codes)
-  [opcodes](https://www.sqlite.org/opcode.html)
-  [.open](https://www.sqlite.org/cli.html#dotopen)
-  [.open command](https://www.sqlite.org/cli.html#dotopen)
-  [OPEN_EXRESCODE](https://www.sqlite.org/c3ref/open.html#openexrescode)
-  [OPEN_NOFOLLOW](https://www.sqlite.org/c3ref/open.html#opennofollow)
-  [openclose callback](https://www.sqlite.org/swarmvtab.html#the_openclose_callback)
-  [OpenOffice case study](https://www.sqlite.org/affcase1.html)
-  [optimize pragma](https://www.sqlite.org/pragma.html#pragma_optimize)
-  ["optimize" command](https://www.sqlite.org/fts3.html#*fts4optcmd)
-  [optimizer](https://www.sqlite.org/optoverview.html)
-  [or optimization](https://www.sqlite.org/optoverview.html#or_opt)
-  [or-connected-terms](https://www.sqlite.org/queryplanner.html#or_in_where)
-  [order by](https://www.sqlite.org/lang_select.html#orderby)
-  [ORDER BY clause in aggregate functions](https://www.sqlite.org/lang_aggfunc.html#aggorderby)
-  [orderByConsumed](https://www.sqlite.org/vtab.html#obc)
-  [ordering-term](https://www.sqlite.org/syntax/ordering-term.html)
-  [ordering-term syntax diagram](https://www.sqlite.org/syntax/ordering-term.html)
-  [ordinary common table expressions](https://www.sqlite.org/lang_with.html#ordinarycte)
-  [OS backend](https://www.sqlite.org/vfs.html)
-  [OSS Fuzz](https://www.sqlite.org/testing.html#ossfuzz)
-  [OUTER JOIN strength reduction](https://www.sqlite.org/optoverview.html#leftjoinreduction)
-  [OUTER JOIN strength reduction optimization](https://www.sqlite.org/optoverview.html#leftjoinreduction)
-  [.output](https://www.sqlite.org/cli.html#dotoutput)
-  [output mode](https://www.sqlite.org/cli.html#dotmode)
-  [over-clause](https://www.sqlite.org/syntax/over-clause.html)
-  [over-clause syntax diagram](https://www.sqlite.org/syntax/over-clause.html)
-  [overflow page](https://www.sqlite.org/fileformat2.html#ovflpgs)
-  [page cache](https://www.sqlite.org/c3ref/pcache_methods2.html)
-  [page_count pragma](https://www.sqlite.org/pragma.html#pragma_page_count)
-  [page_size pragma](https://www.sqlite.org/pragma.html#pragma_page_size)
-  [pagecache memory allocator](https://www.sqlite.org/malloc.html#pagecache)
-  [parameter](https://www.sqlite.org/lang_expr.html#varparam)
-  [parameter binding](https://www.sqlite.org/c3ref/bind_blob.html)
-  [.parameter command](https://www.sqlite.org/cli.html#param)
-  [parent key](https://www.sqlite.org/foreignkeys.html#parentchild)
-  [parent table](https://www.sqlite.org/foreignkeys.html#parentchild)
-  [parser_trace pragma](https://www.sqlite.org/pragma.html#pragma_parser_trace)
-  [partial index](https://www.sqlite.org/partialindex.html)
-  [partial indexes](https://www.sqlite.org/partialindex.html)
-  [partial indices](https://www.sqlite.org/partialindex.html)
-  [partial sorting by index](https://www.sqlite.org/queryplanner.html#partialsort)
-  [partition](https://www.sqlite.org/windowfunctions.html#ptxn)
-  [patchset](https://www.sqlite.org/sessionintro.html#changeset)
-  [permuted index](https://www.sqlite.org/sitemap.html)
-  [persistent journal mode](https://www.sqlite.org/pragma.html#pragma_journal_mode)
-  [persistent loadable extensions](https://www.sqlite.org/loadext.html#persist)
-  [phrase queries](https://www.sqlite.org/fts3.html#phrase)
-  [pi() SQL function](https://www.sqlite.org/lang_mathfunc.html#pi)
-  [pointer leak](https://www.sqlite.org/bindptr.html#ptrleak)
-  [pointer passing interface](https://www.sqlite.org/bindptr.html)
-  [pointer types](https://www.sqlite.org/bindptr.html#ptrtyp)
-  [pointer value](https://www.sqlite.org/bindptr.html)
-  [porting SQLite](https://www.sqlite.org/custombuild.html)
-  [pow() SQL function](https://www.sqlite.org/lang_mathfunc.html#pow)
-  [power-safe](https://www.sqlite.org/transactional.html)
-  [power-safe transactions](https://www.sqlite.org/transactional.html)
-  [powersafe overwrite](https://www.sqlite.org/psow.html)
-  [PRAGMA](https://www.sqlite.org/pragma.html#syntax)
-  [PRAGMA analysis_limit](https://www.sqlite.org/pragma.html#pragma_analysis_limit)
-  [PRAGMA application_id](https://www.sqlite.org/pragma.html#pragma_application_id)
-  [PRAGMA auto_vacuum](https://www.sqlite.org/pragma.html#pragma_auto_vacuum)
-  [PRAGMA automatic_index](https://www.sqlite.org/pragma.html#pragma_automatic_index)
-  [PRAGMA busy_timeout](https://www.sqlite.org/pragma.html#pragma_busy_timeout)
-  [PRAGMA cache_size](https://www.sqlite.org/pragma.html#pragma_cache_size)
-  [PRAGMA cache_spill](https://www.sqlite.org/pragma.html#pragma_cache_spill)
-  [PRAGMA case_sensitive_like](https://www.sqlite.org/pragma.html#pragma_case_sensitive_like)
-  [PRAGMA cell_size_check](https://www.sqlite.org/pragma.html#pragma_cell_size_check)
-  [PRAGMA checkpoint_fullfsync](https://www.sqlite.org/pragma.html#pragma_checkpoint_fullfsync)
-  [PRAGMA collation_list](https://www.sqlite.org/pragma.html#pragma_collation_list)
-  [PRAGMA compile_options](https://www.sqlite.org/pragma.html#pragma_compile_options)
-  [PRAGMA count_changes](https://www.sqlite.org/pragma.html#pragma_count_changes)
-  [PRAGMA data_store_directory](https://www.sqlite.org/pragma.html#pragma_data_store_directory)
-  [PRAGMA data_version](https://www.sqlite.org/pragma.html#pragma_data_version)
-  [PRAGMA database_list](https://www.sqlite.org/pragma.html#pragma_database_list)
-  [PRAGMA default_cache_size](https://www.sqlite.org/pragma.html#pragma_default_cache_size)
-  [PRAGMA defer_foreign_keys](https://www.sqlite.org/pragma.html#pragma_defer_foreign_keys)
-  [PRAGMA empty_result_callbacks](https://www.sqlite.org/pragma.html#pragma_empty_result_callbacks)
-  [PRAGMA encoding](https://www.sqlite.org/pragma.html#pragma_encoding)
-  [PRAGMA foreign_key_check](https://www.sqlite.org/pragma.html#pragma_foreign_key_check)
-  [PRAGMA foreign_key_list](https://www.sqlite.org/pragma.html#pragma_foreign_key_list)
-  [PRAGMA foreign_keys](https://www.sqlite.org/pragma.html#pragma_foreign_keys)
-  [PRAGMA freelist_count](https://www.sqlite.org/pragma.html#pragma_freelist_count)
-  [PRAGMA full_column_names](https://www.sqlite.org/pragma.html#pragma_full_column_names)
-  [PRAGMA fullfsync](https://www.sqlite.org/pragma.html#pragma_fullfsync)
-  [PRAGMA function](https://www.sqlite.org/pragma.html#pragfunc)
-  [PRAGMA function_list](https://www.sqlite.org/pragma.html#pragma_function_list)
-  [PRAGMA hard_heap_limit](https://www.sqlite.org/pragma.html#pragma_hard_heap_limit)
-  [PRAGMA ignore_check_constraints](https://www.sqlite.org/pragma.html#pragma_ignore_check_constraints)
-  [PRAGMA incremental_vacuum](https://www.sqlite.org/pragma.html#pragma_incremental_vacuum)
-  [PRAGMA index_info](https://www.sqlite.org/pragma.html#pragma_index_info)
-  [PRAGMA index_list](https://www.sqlite.org/pragma.html#pragma_index_list)
-  [PRAGMA index_xinfo](https://www.sqlite.org/pragma.html#pragma_index_xinfo)
-  [PRAGMA integrity_check](https://www.sqlite.org/pragma.html#pragma_integrity_check)
-  [PRAGMA journal_mode](https://www.sqlite.org/pragma.html#pragma_journal_mode)
-  [PRAGMA journal_size_limit](https://www.sqlite.org/pragma.html#pragma_journal_size_limit)
-  [PRAGMA legacy_alter_table](https://www.sqlite.org/pragma.html#pragma_legacy_alter_table)
-  [PRAGMA legacy_file_format](https://www.sqlite.org/pragma.html#pragma_legacy_file_format)
-  [pragma list](https://www.sqlite.org/pragma.html#toc)
-  [PRAGMA locking_mode](https://www.sqlite.org/pragma.html#pragma_locking_mode)
-  [PRAGMA max_page_count](https://www.sqlite.org/pragma.html#pragma_max_page_count)
-  [PRAGMA mmap_size](https://www.sqlite.org/pragma.html#pragma_mmap_size)
-  [PRAGMA module_list](https://www.sqlite.org/pragma.html#pragma_module_list)
-  [PRAGMA optimize](https://www.sqlite.org/pragma.html#pragma_optimize)
-  [PRAGMA page_count](https://www.sqlite.org/pragma.html#pragma_page_count)
-  [PRAGMA page_size](https://www.sqlite.org/pragma.html#pragma_page_size)
-  [PRAGMA parser_trace](https://www.sqlite.org/pragma.html#pragma_parser_trace)
-  [PRAGMA pragma_list](https://www.sqlite.org/pragma.html#pragma_pragma_list)
-  [PRAGMA query_only](https://www.sqlite.org/pragma.html#pragma_query_only)
-  [PRAGMA quick_check](https://www.sqlite.org/pragma.html#pragma_quick_check)
-  [PRAGMA read_uncommitted](https://www.sqlite.org/pragma.html#pragma_read_uncommitted)
-  [PRAGMA recursive_triggers](https://www.sqlite.org/pragma.html#pragma_recursive_triggers)
-  [PRAGMA reverse_unordered_selects](https://www.sqlite.org/pragma.html#pragma_reverse_unordered_selects)
-  [PRAGMA schema_version](https://www.sqlite.org/pragma.html#pragma_schema_version)
-  [PRAGMA secure_delete](https://www.sqlite.org/pragma.html#pragma_secure_delete)
-  [PRAGMA short_column_names](https://www.sqlite.org/pragma.html#pragma_short_column_names)
-  [PRAGMA shrink_memory](https://www.sqlite.org/pragma.html#pragma_shrink_memory)
-  [PRAGMA soft_heap_limit](https://www.sqlite.org/pragma.html#pragma_soft_heap_limit)
-  [PRAGMA stats](https://www.sqlite.org/pragma.html#pragma_stats)
-  [PRAGMA synchronous](https://www.sqlite.org/pragma.html#pragma_synchronous)
-  [PRAGMA table_info](https://www.sqlite.org/pragma.html#pragma_table_info)
-  [PRAGMA table_list](https://www.sqlite.org/pragma.html#pragma_table_list)
-  [PRAGMA table_xinfo](https://www.sqlite.org/pragma.html#pragma_table_xinfo)
-  [PRAGMA temp_store](https://www.sqlite.org/pragma.html#pragma_temp_store)
-  [PRAGMA temp_store_directory](https://www.sqlite.org/pragma.html#pragma_temp_store_directory)
-  [PRAGMA threads](https://www.sqlite.org/pragma.html#pragma_threads)
-  [PRAGMA trusted_schema](https://www.sqlite.org/pragma.html#pragma_trusted_schema)
-  [PRAGMA user_version](https://www.sqlite.org/pragma.html#pragma_user_version)
-  [PRAGMA vdbe_addoptrace](https://www.sqlite.org/pragma.html#pragma_vdbe_addoptrace)
-  [PRAGMA vdbe_debug](https://www.sqlite.org/pragma.html#pragma_vdbe_debug)
-  [PRAGMA vdbe_listing](https://www.sqlite.org/pragma.html#pragma_vdbe_listing)
-  [PRAGMA vdbe_trace](https://www.sqlite.org/pragma.html#pragma_vdbe_trace)
-  [PRAGMA wal_autocheckpoint](https://www.sqlite.org/pragma.html#pragma_wal_autocheckpoint)
-  [PRAGMA wal_checkpoint](https://www.sqlite.org/pragma.html#pragma_wal_checkpoint)
-  [PRAGMA writable_schema](https://www.sqlite.org/pragma.html#pragma_writable_schema)
-  [pragma-stmt](https://www.sqlite.org/syntax/pragma-stmt.html)
-  [pragma-stmt syntax diagram](https://www.sqlite.org/syntax/pragma-stmt.html)
-  [pragma-value](https://www.sqlite.org/syntax/pragma-value.html)
-  [pragma-value syntax diagram](https://www.sqlite.org/syntax/pragma-value.html)
-  [pragma_list pragma](https://www.sqlite.org/pragma.html#pragma_pragma_list)
-  [precompiled amalgamation tarballs](https://www.sqlite.org/amalgamation.html#amalgtarball)
-  [prefix queries](https://www.sqlite.org/fts3.html#termprefix)
-  [prefix query](https://www.sqlite.org/fts3.html#termprefix)
-  [prepared statement](https://www.sqlite.org/c3ref/stmt.html)
-  [preupdate method](https://www.sqlite.org/tclsqlite.html#preupdate)
-  [PRIMARY KEY](https://www.sqlite.org/lang_createtable.html#primkeyconst)
-  [PRIMARY KEY constraint](https://www.sqlite.org/lang_createtable.html#primkeyconst)
-  [primary versus extended result codes](https://www.sqlite.org/rescode.html#pve)
-  [printf() SQL function](https://www.sqlite.org/lang_corefunc.html#printf)
-  [prior releases](https://www.sqlite.org/chronology.html)
-  [private branches](https://www.sqlite.org/privatebranch.html)
-  [professional support](https://www.sqlite.org/prosupport.html)
-  [profile method](https://www.sqlite.org/tclsqlite.html#profile)
-  [Programming Loadable Extensions](https://www.sqlite.org/loadext.html#write)
-  [progress method](https://www.sqlite.org/tclsqlite.html#progress)
-  [protected sqlite3_value](https://www.sqlite.org/c3ref/value.html)
-  [PSOW](https://www.sqlite.org/psow.html)
-  ["psow" query parameter](https://www.sqlite.org/uri.html#uripsow)
-  [public-domain](https://www.sqlite.org/copyright.html)
-  [push-down optimization](https://www.sqlite.org/optoverview.html#pushdown)
-  [qbox](https://www.sqlite.org/cli.html#qbox)
-  [qbox output mode](https://www.sqlite.org/cli.html#qbox)
-  [QPSG](https://www.sqlite.org/queryplanner-ng.html#qpstab)
-  [qualified-table-name](https://www.sqlite.org/syntax/qualified-table-name.html)
-  [qualified-table-name syntax diagram](https://www.sqlite.org/syntax/qualified-table-name.html)
-  [queries against graphs](https://www.sqlite.org/lang_with.html#rcex3)
-  [query flattener](https://www.sqlite.org/optoverview.html#flattening)
-  [query parameters with special meaning to SQLite](https://www.sqlite.org/uri.html#coreqp)
-  [query planner](https://www.sqlite.org/optoverview.html)
-  [query planner checklist](https://www.sqlite.org/queryplanner-ng.html#howtofix)
-  [query planner stability guarantee](https://www.sqlite.org/queryplanner-ng.html#qpstab)
-  [query-time index](https://www.sqlite.org/optoverview.html#autoindex)
-  [Query-time indexes](https://www.sqlite.org/optoverview.html#autoindex)
-  [query-time indexing](https://www.sqlite.org/optoverview.html#autoindex)
-  [query_only pragma](https://www.sqlite.org/pragma.html#pragma_query_only)
-  [Quick Start Guide](https://www.sqlite.org/quickstart.html)
-  [quick_check pragma](https://www.sqlite.org/pragma.html#pragma_quick_check)
-  [Quirks](https://www.sqlite.org/quirks.html)
-  [quote() SQL function](https://www.sqlite.org/lang_corefunc.html#quote)
-  [R-Tree extension](https://www.sqlite.org/rtree.html)
-  [R-Trees](https://www.sqlite.org/rtree.html)
-  [radians() SQL function](https://www.sqlite.org/lang_mathfunc.html#radians)
-  [RAISE function](https://www.sqlite.org/lang_createtrigger.html#raise)
-  [raise-function](https://www.sqlite.org/syntax/raise-function.html)
-  [raise-function syntax diagram](https://www.sqlite.org/syntax/raise-function.html)
-  [random() SQL function](https://www.sqlite.org/lang_corefunc.html#random)
-  [randomblob() SQL function](https://www.sqlite.org/lang_corefunc.html#randomblob)
-  [RANGE frames](https://www.sqlite.org/windowfunctions.html#rangetype)
-  [RANGE n FOLLOWING](https://www.sqlite.org/windowfunctions.html#exprrange)
-  [RANGE n PRECEDING](https://www.sqlite.org/windowfunctions.html#exprrange)
-  [range query optimization](https://www.sqlite.org/optoverview.html#rangequery)
-  [RBU](https://www.sqlite.org/rbu.html)
-  [RBU Database Contents](https://www.sqlite.org/rbu.html#database_contents)
-  [RBU Database Tables](https://www.sqlite.org/rbu.html#database_tables)
-  [RBU extension](https://www.sqlite.org/rbu.html)
-  [RBU FTS3/4 Tables](https://www.sqlite.org/rbu.html#fts4_tables)
-  [RBU Update](https://www.sqlite.org/rbu.html#rbu_updates)
-  [RBU Vacuum](https://www.sqlite.org/rbu.html#rbu_vacuum)
-  [.read](https://www.sqlite.org/cli.html#dotread)
-  [read-only WAL databases](https://www.sqlite.org/wal.html#readonly)
-  [read_uncommitted pragma](https://www.sqlite.org/pragma.html#pragma_read_uncommitted)
-  [reading and writing an rtree at the same time](https://www.sqlite.org/rtree.html#readwrite)
-  ["rebuild" command](https://www.sqlite.org/fts3.html#*fts4rebuidcmd)
-  [recent CVEs](https://www.sqlite.org/cves.html#cvetab)
-  [recommended by the US Library of Congress](https://www.sqlite.org/locrsf.html)
-  [recommended compile-time option](https://www.sqlite.org/compile.html#rcmd)
-  [recommended storage format](https://www.sqlite.org/locrsf.html)
-  [Recommended usage patterns for ANALYZE](https://www.sqlite.org/lang_analyze.html#req)
-  [record format](https://www.sqlite.org/fileformat2.html#record_format)
-  [.recover dot-command](https://www.sqlite.org/cli.html#recover)
-  [recovery](https://www.sqlite.org/walformat.html#recovery)
-  [recovery extension](https://www.sqlite.org/recovery.html)
-  [recursive common table expression](https://www.sqlite.org/lang_with.html#recursivecte)
-  [recursive query](https://www.sqlite.org/lang_with.html#recursivecte)
-  [recursive-cte](https://www.sqlite.org/syntax/recursive-cte.html)
-  [recursive-cte syntax diagram](https://www.sqlite.org/syntax/recursive-cte.html)
-  [recursive_triggers pragma](https://www.sqlite.org/pragma.html#pragma_recursive_triggers)
-  [REGEXP](https://www.sqlite.org/lang_expr.html#regexp)
-  [reindex-stmt](https://www.sqlite.org/syntax/reindex-stmt.html)
-  [reindex-stmt syntax diagram](https://www.sqlite.org/syntax/reindex-stmt.html)
-  [RELEASE](https://www.sqlite.org/lang_savepoint.html)
-  [release history](https://www.sqlite.org/changes.html)
-  [release testing checklists](https://www.sqlite.org/testing.html#cklist)
-  [release-stmt](https://www.sqlite.org/syntax/release-stmt.html)
-  [release-stmt syntax diagram](https://www.sqlite.org/syntax/release-stmt.html)
-  [relfootprint](https://www.sqlite.org/footprint.html)
-  [rename column](https://www.sqlite.org/lang_altertable.html#altertabmvcol)
-  [rename table](https://www.sqlite.org/lang_altertable.html#altertabrename)
-  [replace() SQL function](https://www.sqlite.org/lang_corefunc.html#replace)
-  [reported vulnerabilities](https://www.sqlite.org/cves.html)
-  [reserve bytes](https://www.sqlite.org/fileformat2.html#resbyte)
-  [reset the WAL](https://www.sqlite.org/fileformat2.html#walreset)
-  [restore method](https://www.sqlite.org/tclsqlite.html#restore)
-  [result code](https://www.sqlite.org/rescode.html)
-  [result code definitions](https://www.sqlite.org/c3ref/c_abort.html)
-  [result-column](https://www.sqlite.org/syntax/result-column.html)
-  [result-column syntax diagram](https://www.sqlite.org/syntax/result-column.html)
-  [result-set expressions](https://www.sqlite.org/lang_select.html#resultset)
-  [RETURNING clause](https://www.sqlite.org/lang_returning.html)
-  [returning-clause](https://www.sqlite.org/syntax/returning-clause.html)
-  [returning-clause syntax diagram](https://www.sqlite.org/syntax/returning-clause.html)
-  [reverse_unordered_selects pragma](https://www.sqlite.org/pragma.html#pragma_reverse_unordered_selects)
-  [RIGHT and FULL OUTER JOIN](https://www.sqlite.org/lang_select.html#rjoin)
-  [RIGHT JOIN](https://www.sqlite.org/lang_select.html#rjoin)
-  [Robson proof](https://www.sqlite.org/malloc.html#nofrag)
-  [ROLLBACK](https://www.sqlite.org/lang_transaction.html)
-  [rollback journal](https://www.sqlite.org/lockingv3.html#rollback)
-  [rollback journal format](https://www.sqlite.org/fileformat2.html#rollbackjournal)
-  [rollback-stmt](https://www.sqlite.org/syntax/rollback-stmt.html)
-  [rollback-stmt syntax diagram](https://www.sqlite.org/syntax/rollback-stmt.html)
-  [rollback_hook method](https://www.sqlite.org/tclsqlite.html#rollback_hook)
-  [round() SQL function](https://www.sqlite.org/lang_corefunc.html#round)
-  [row value](https://www.sqlite.org/rowvalue.html)
-  [row value IN operator](https://www.sqlite.org/rowvalue.html#rvinop)
-  [ROWID](https://www.sqlite.org/lang_createtable.html#rowid)
-  [rowid table](https://www.sqlite.org/rowidtable.html)
-  [rowvalue](https://www.sqlite.org/rowvalue.html)
-  [rtree shadow tables](https://www.sqlite.org/rtree.html#xshadow)
-  [rtreecheck()](https://www.sqlite.org/rtree.html#rtreecheck)
-  [RTRIM collating function](https://www.sqlite.org/datatype3.html#collation)
-  [rtrim() SQL function](https://www.sqlite.org/lang_corefunc.html#rtrim)
-  [rules for determining column affinity](https://www.sqlite.org/datatype3.html#affname)
-  [rules for determining column affinity in VIEWs](https://www.sqlite.org/datatype3.html#affview)
-  [Run-Time Loadable Extensions](https://www.sqlite.org/loadext.html)
-  [running ANALYZE via PRAGMA optimize](https://www.sqlite.org/lang_analyze.html#pragopt)
-  [safe command-line option](https://www.sqlite.org/cli.html#safemode)
-  [--safe command-line option](https://www.sqlite.org/cli.html#safemode)
-  [SAVEPOINT bug](https://www.sqlite.org/howtocorrupt.html#svptbug)
-  [savepoint-stmt](https://www.sqlite.org/syntax/savepoint-stmt.html)
-  [savepoint-stmt syntax diagram](https://www.sqlite.org/syntax/savepoint-stmt.html)
-  [Scalar Functions](https://www.sqlite.org/lang_corefunc.html)
-  [scan status flags](https://www.sqlite.org/c3ref/c_scanstat_complex.html)
-  [scanstatus options](https://www.sqlite.org/c3ref/c_scanstat_est.html)
-  [.schema](https://www.sqlite.org/cli.html#dschema)
-  [schema format](https://www.sqlite.org/fileformat2.html#schemaformat)
-  [schema format number](https://www.sqlite.org/fileformat2.html#schemaformat)
-  [schema storage](https://www.sqlite.org/fileformat2.html#ffschema)
-  [schema_version pragma](https://www.sqlite.org/pragma.html#pragma_schema_version)
-  [search application tips](https://www.sqlite.org/fts3.html#appendix_a)
-  [second edition file format document](https://www.sqlite.org/fileformat2.html)
-  [secure_delete pragma](https://www.sqlite.org/pragma.html#pragma_secure_delete)
-  [security](https://www.sqlite.org/security.html)
-  [segment btree](https://www.sqlite.org/fts3.html#data_structures)
-  [select](https://www.sqlite.org/lang_select.html)
-  [SELECT query](https://www.sqlite.org/lang_select.html)
-  [SELECT statement](https://www.sqlite.org/lang_select.html)
-  [select-core](https://www.sqlite.org/syntax/select-core.html)
-  [select-core syntax diagram](https://www.sqlite.org/syntax/select-core.html)
-  [select-stmt](https://www.sqlite.org/syntax/select-stmt.html)
-  [select-stmt syntax diagram](https://www.sqlite.org/syntax/select-stmt.html)
-  [self-contained](https://www.sqlite.org/selfcontained.html)
-  [.selftest dot-command](https://www.sqlite.org/cli.html#selftest)
-  [separating a database from its journal](https://www.sqlite.org/howtocorrupt.html#roguejrnl)
-  [serial type](https://www.sqlite.org/fileformat2.html#serialtype)
-  [serialize method](https://www.sqlite.org/tclsqlite.html#serialize)
-  [series](https://www.sqlite.org/series.html)
-  [server-side database](https://www.sqlite.org/whentouse.html#serversidedb)
-  [serverless](https://www.sqlite.org/serverless.html)
-  [session](https://www.sqlite.org/sessionintro.html)
-  [session extension](https://www.sqlite.org/sessionintro.html)
-  [Session Extension C-language Interface](https://www.sqlite.org/session/intro.html)
-  [Session Module C-API function list](https://www.sqlite.org/session/funclist.html)
-  [.sha3sum dot-command](https://www.sqlite.org/cli.html#sha3sum)
-  [shadow table](https://www.sqlite.org/vtab.html#xshadowname)
-  [shadowtabs](https://www.sqlite.org/fts3.html#shadow_tables)
-  [shared cache](https://www.sqlite.org/sharedcache.html)
-  [shared cache mode](https://www.sqlite.org/sharedcache.html)
-  [shims](https://www.sqlite.org/vfs.html#shim)
-  ["shm" file](https://www.sqlite.org/walformat.html#shm)
-  [short filenames](https://www.sqlite.org/shortnames.html)
-  [short_column_names pragma](https://www.sqlite.org/pragma.html#pragma_short_column_names)
-  [shrink_memory pragma](https://www.sqlite.org/pragma.html#pragma_shrink_memory)
-  [sign() SQL function](https://www.sqlite.org/lang_corefunc.html#sign)
-  [signed-number](https://www.sqlite.org/syntax/signed-number.html)
-  [signed-number syntax diagram](https://www.sqlite.org/syntax/signed-number.html)
-  [simple fts queries](https://www.sqlite.org/fts3.html#simple_fts_queries)
-  [simple SELECT](https://www.sqlite.org/lang_select.html#simpleselect)
-  [simple-function-invocation](https://www.sqlite.org/syntax/simple-function-invocation.html)
-  [simple-function-invocation syntax diagram](https://www.sqlite.org/syntax/simple-function-invocation.html)
-  [simple-select-stmt](https://www.sqlite.org/syntax/simple-select-stmt.html)
-  [simple-select-stmt syntax diagram](https://www.sqlite.org/syntax/simple-select-stmt.html)
-  [sin() SQL function](https://www.sqlite.org/lang_mathfunc.html#sin)
-  [single-argument carray](https://www.sqlite.org/carray.html#onearg)
-  [sinh() SQL function](https://www.sqlite.org/lang_mathfunc.html#sinh)
-  [skip-scan](https://www.sqlite.org/optoverview.html#skipscan)
-  [skip-scan optimization](https://www.sqlite.org/optoverview.html#skipscan)
-  [SLT](https://www.sqlite.org/testing.html#slt)
-  [snapshot](https://www.sqlite.org/c3ref/snapshot.html)
-  [snippet](https://www.sqlite.org/fts3.html#snippet)
-  [soft_heap_limit pragma](https://www.sqlite.org/pragma.html#pragma_soft_heap_limit)
-  [solve Sudoku puzzles](https://www.sqlite.org/lang_with.html#sudoku)
-  [sort order](https://www.sqlite.org/datatype3.html#sortorder)
-  [sorting](https://www.sqlite.org/queryplanner.html#sorting)
-  [sorting subsets of the result](https://www.sqlite.org/optoverview.html#partsort)
-  [soundex() SQL function](https://www.sqlite.org/lang_corefunc.html#soundex)
-  [spellfix1](https://www.sqlite.org/spellfix1.html)
-  [split amalgamation](https://www.sqlite.org/amalgamation.html#amal32k)
-  [SQL Archive](https://www.sqlite.org/sqlar.html)
-  [SQL fuzzing](https://www.sqlite.org/testing.html#fuzztesting)
-  [SQL Logic Tests](https://www.sqlite.org/testing.html#slt)
-  [SQL parameter](https://www.sqlite.org/c3ref/bind_blob.html)
-  [SQL statement compiler](https://www.sqlite.org/c3ref/prepare.html)
-  [sql-stmt](https://www.sqlite.org/syntax/sql-stmt.html)
-  [sql-stmt syntax diagram](https://www.sqlite.org/syntax/sql-stmt.html)
-  [sql-stmt-list](https://www.sqlite.org/syntax/sql-stmt-list.html)
-  [sql-stmt-list syntax diagram](https://www.sqlite.org/syntax/sql-stmt-list.html)
-  [SQLAR](https://www.sqlite.org/sqlar.html)
-  [sqldiff](https://www.sqlite.org/sqldiff.html)
-  [sqldiff --rbu](https://www.sqlite.org/rbu.html#sqldiff)
-  [sqldiff.exe](https://www.sqlite.org/sqldiff.html)
-  [SQLite amalgamation source file](https://www.sqlite.org/amalgamation.html)
-  [SQLite Archive](https://www.sqlite.org/sqlar.html)
-  [SQLite Archive files](https://www.sqlite.org/sqlar.html)
-  [SQLite Archive format](https://www.sqlite.org/sqlar.html)
-  [SQLite Archive smaller than ZIP](https://www.sqlite.org/affcase1.html#smaller)
-  [SQLite Consortium](https://www.sqlite.org/consortium.html)
-  [SQLite database file format](https://www.sqlite.org/fileformat2.html)
-  [SQLite extension](https://www.sqlite.org/loadext.html)
-  [SQLite Keywords](https://www.sqlite.org/lang_keywords.html)
-  [SQLite query planner](https://www.sqlite.org/optoverview.html)
-  [SQLite Shared-Cache Mode](https://www.sqlite.org/sharedcache.html)
-  [SQLite source code repositories](https://www.sqlite.org/download.html#srctree)
-  [sqlite3](https://www.sqlite.org/c3ref/sqlite3.html)
-  [sqlite3.exe](https://www.sqlite.org/cli.html)
-  [sqlite3.exe command-line shell](https://www.sqlite.org/cli.html)
-  [sqlite3_aggregate_context](https://www.sqlite.org/c3ref/aggregate_context.html)
-  [sqlite3_aggregate_count](https://www.sqlite.org/c3ref/aggregate_count.html)
-  [sqlite3_analyzer](https://www.sqlite.org/sqlanalyze.html)
-  [sqlite3_analyzer.exe](https://www.sqlite.org/sqlanalyze.html)
-  [sqlite3_api_routines](https://www.sqlite.org/c3ref/api_routines.html)
-  [sqlite3_auto_extension](https://www.sqlite.org/c3ref/auto_extension.html)
-  [sqlite3_autovacuum_pages](https://www.sqlite.org/c3ref/autovacuum_pages.html)
-  [sqlite3_backup](https://www.sqlite.org/c3ref/backup.html)
-  [sqlite3_backup_finish()](https://www.sqlite.org/c3ref/backup_finish.html#sqlite3backupfinish)
-  [sqlite3_backup_init()](https://www.sqlite.org/c3ref/backup_finish.html#sqlite3backupinit)
-  [sqlite3_backup_pagecount()](https://www.sqlite.org/c3ref/backup_finish.html#sqlite3backuppagecount)
-  [sqlite3_backup_remaining()](https://www.sqlite.org/c3ref/backup_finish.html#sqlite3backupremaining)
-  [sqlite3_backup_step()](https://www.sqlite.org/c3ref/backup_finish.html#sqlite3backupstep)
-  [sqlite3_bind_blob](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_blob64](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_double](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_int](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_int64](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_null](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_parameter_count](https://www.sqlite.org/c3ref/bind_parameter_count.html)
-  [sqlite3_bind_parameter_index](https://www.sqlite.org/c3ref/bind_parameter_index.html)
-  [sqlite3_bind_parameter_name](https://www.sqlite.org/c3ref/bind_parameter_name.html)
-  [sqlite3_bind_pointer](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_text](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_text16](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_text64](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_value](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_zeroblob](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_bind_zeroblob64](https://www.sqlite.org/c3ref/bind_blob.html)
-  [sqlite3_blob](https://www.sqlite.org/c3ref/blob.html)
-  [sqlite3_blob_bytes](https://www.sqlite.org/c3ref/blob_bytes.html)
-  [sqlite3_blob_close](https://www.sqlite.org/c3ref/blob_close.html)
-  [sqlite3_blob_open](https://www.sqlite.org/c3ref/blob_open.html)
-  [sqlite3_blob_read](https://www.sqlite.org/c3ref/blob_read.html)
-  [sqlite3_blob_reopen](https://www.sqlite.org/c3ref/blob_reopen.html)
-  [sqlite3_blob_write](https://www.sqlite.org/c3ref/blob_write.html)
-  [sqlite3_busy_handler](https://www.sqlite.org/c3ref/busy_handler.html)
-  [sqlite3_busy_timeout](https://www.sqlite.org/c3ref/busy_timeout.html)
-  [sqlite3_cancel_auto_extension](https://www.sqlite.org/c3ref/cancel_auto_extension.html)
-  [sqlite3_carray_bind](https://www.sqlite.org/carray.html#onearg)
-  [sqlite3_changegroup](https://www.sqlite.org/session/changegroup.html)
-  [sqlite3_changes](https://www.sqlite.org/c3ref/changes.html)
-  [sqlite3_changes64](https://www.sqlite.org/c3ref/changes.html)
-  [sqlite3_changeset_iter](https://www.sqlite.org/session/changeset_iter.html)
-  [sqlite3_clear_bindings](https://www.sqlite.org/c3ref/clear_bindings.html)
-  [sqlite3_close](https://www.sqlite.org/c3ref/close.html)
-  [sqlite3_close_v2](https://www.sqlite.org/c3ref/close.html)
-  [sqlite3_collation_needed](https://www.sqlite.org/c3ref/collation_needed.html)
-  [sqlite3_collation_needed16](https://www.sqlite.org/c3ref/collation_needed.html)
-  [sqlite3_column_blob](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_column_bytes](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_column_bytes16](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_column_count](https://www.sqlite.org/c3ref/column_count.html)
-  [sqlite3_column_database_name](https://www.sqlite.org/c3ref/column_database_name.html)
-  [sqlite3_column_database_name16](https://www.sqlite.org/c3ref/column_database_name.html)
-  [sqlite3_column_decltype](https://www.sqlite.org/c3ref/column_decltype.html)
-  [sqlite3_column_decltype16](https://www.sqlite.org/c3ref/column_decltype.html)
-  [sqlite3_column_double](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_column_int](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_column_int64](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_column_name](https://www.sqlite.org/c3ref/column_name.html)
-  [sqlite3_column_name16](https://www.sqlite.org/c3ref/column_name.html)
-  [sqlite3_column_origin_name](https://www.sqlite.org/c3ref/column_database_name.html)
-  [sqlite3_column_origin_name16](https://www.sqlite.org/c3ref/column_database_name.html)
-  [sqlite3_column_table_name](https://www.sqlite.org/c3ref/column_database_name.html)
-  [sqlite3_column_table_name16](https://www.sqlite.org/c3ref/column_database_name.html)
-  [sqlite3_column_text](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_column_text16](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_column_type](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_column_value](https://www.sqlite.org/c3ref/column_blob.html)
-  [sqlite3_commit_hook](https://www.sqlite.org/c3ref/commit_hook.html)
-  [sqlite3_compileoption_get](https://www.sqlite.org/c3ref/compileoption_get.html)
-  [sqlite3_compileoption_used](https://www.sqlite.org/c3ref/compileoption_get.html)
-  [sqlite3_complete](https://www.sqlite.org/c3ref/complete.html)
-  [sqlite3_complete16](https://www.sqlite.org/c3ref/complete.html)
-  [sqlite3_config](https://www.sqlite.org/c3ref/config.html)
-  [sqlite3_context](https://www.sqlite.org/c3ref/context.html)
-  [sqlite3_context_db_handle](https://www.sqlite.org/c3ref/context_db_handle.html)
-  [sqlite3_create_collation](https://www.sqlite.org/c3ref/create_collation.html)
-  [sqlite3_create_collation16](https://www.sqlite.org/c3ref/create_collation.html)
-  [sqlite3_create_collation_v2](https://www.sqlite.org/c3ref/create_collation.html)
-  [sqlite3_create_filename](https://www.sqlite.org/c3ref/create_filename.html)
-  [sqlite3_create_function](https://www.sqlite.org/c3ref/create_function.html)
-  [sqlite3_create_function16](https://www.sqlite.org/c3ref/create_function.html)
-  [sqlite3_create_function_v2](https://www.sqlite.org/c3ref/create_function.html)
-  [sqlite3_create_module](https://www.sqlite.org/c3ref/create_module.html)
-  [sqlite3_create_module_v2](https://www.sqlite.org/c3ref/create_module.html)
-  [sqlite3_create_window_function](https://www.sqlite.org/c3ref/create_function.html)
-  [sqlite3_data_count](https://www.sqlite.org/c3ref/data_count.html)
-  [sqlite3_data_directory](https://www.sqlite.org/c3ref/data_directory.html)
-  [sqlite3_database_file_object](https://www.sqlite.org/c3ref/database_file_object.html)
-  [sqlite3_db_cacheflush](https://www.sqlite.org/c3ref/db_cacheflush.html)
-  [sqlite3_db_config](https://www.sqlite.org/c3ref/db_config.html)
-  [sqlite3_db_filename](https://www.sqlite.org/c3ref/db_filename.html)
-  [sqlite3_db_handle](https://www.sqlite.org/c3ref/db_handle.html)
-  [sqlite3_db_mutex](https://www.sqlite.org/c3ref/db_mutex.html)
-  [sqlite3_db_name](https://www.sqlite.org/c3ref/db_name.html)
-  [sqlite3_db_readonly](https://www.sqlite.org/c3ref/db_readonly.html)
-  [sqlite3_db_release_memory](https://www.sqlite.org/c3ref/db_release_memory.html)
-  [sqlite3_db_status](https://www.sqlite.org/c3ref/db_status.html)
-  [sqlite3_declare_vtab](https://www.sqlite.org/c3ref/declare_vtab.html)
-  [sqlite3_deserialize](https://www.sqlite.org/c3ref/deserialize.html)
-  [sqlite3_drop_modules](https://www.sqlite.org/c3ref/drop_modules.html)
-  [sqlite3_enable_load_extension](https://www.sqlite.org/c3ref/enable_load_extension.html)
-  [sqlite3_enable_shared_cache](https://www.sqlite.org/c3ref/enable_shared_cache.html)
-  [sqlite3_errcode](https://www.sqlite.org/c3ref/errcode.html)
-  [sqlite3_errmsg](https://www.sqlite.org/c3ref/errcode.html)
-  [sqlite3_errmsg16](https://www.sqlite.org/c3ref/errcode.html)
-  [sqlite3_error_offset](https://www.sqlite.org/c3ref/errcode.html)
-  [sqlite3_errstr](https://www.sqlite.org/c3ref/errcode.html)
-  [sqlite3_exec](https://www.sqlite.org/c3ref/exec.html)
-  [sqlite3_expanded_sql](https://www.sqlite.org/c3ref/expanded_sql.html)
-  [sqlite3_expired](https://www.sqlite.org/c3ref/aggregate_count.html)
-  [sqlite3_extended_errcode](https://www.sqlite.org/c3ref/errcode.html)
-  [sqlite3_extended_result_codes](https://www.sqlite.org/c3ref/extended_result_codes.html)
-  [sqlite3_file](https://www.sqlite.org/c3ref/file.html)
-  [sqlite3_file_control](https://www.sqlite.org/c3ref/file_control.html)
-  [sqlite3_filename](https://www.sqlite.org/c3ref/filename.html)
-  [sqlite3_filename_database](https://www.sqlite.org/c3ref/filename_database.html)
-  [sqlite3_filename_journal](https://www.sqlite.org/c3ref/filename_database.html)
-  [sqlite3_filename_wal](https://www.sqlite.org/c3ref/filename_database.html)
-  [sqlite3_finalize](https://www.sqlite.org/c3ref/finalize.html)
-  [sqlite3_free](https://www.sqlite.org/c3ref/free.html)
-  [sqlite3_free_filename](https://www.sqlite.org/c3ref/create_filename.html)
-  [sqlite3_free_table](https://www.sqlite.org/c3ref/free_table.html)
-  [sqlite3_get_autocommit](https://www.sqlite.org/c3ref/get_autocommit.html)
-  [sqlite3_get_auxdata](https://www.sqlite.org/c3ref/get_auxdata.html)
-  [sqlite3_get_clientdata](https://www.sqlite.org/c3ref/get_clientdata.html)
-  [sqlite3_get_table](https://www.sqlite.org/c3ref/free_table.html)
-  [sqlite3_global_recover](https://www.sqlite.org/c3ref/aggregate_count.html)
-  [sqlite3_hard_heap_limit64](https://www.sqlite.org/c3ref/hard_heap_limit64.html)
-  [sqlite3_index_info](https://www.sqlite.org/c3ref/index_info.html)
-  [sqlite3_initialize](https://www.sqlite.org/c3ref/initialize.html)
-  [sqlite3_int64](https://www.sqlite.org/c3ref/int64.html)
-  [sqlite3_interrupt](https://www.sqlite.org/c3ref/interrupt.html)
-  [sqlite3_io_methods](https://www.sqlite.org/c3ref/io_methods.html)
-  [sqlite3_is_interrupted](https://www.sqlite.org/c3ref/interrupt.html)
-  [sqlite3_keyword_check](https://www.sqlite.org/c3ref/keyword_check.html)
-  [sqlite3_keyword_count](https://www.sqlite.org/c3ref/keyword_check.html)
-  [sqlite3_keyword_name](https://www.sqlite.org/c3ref/keyword_check.html)
-  [sqlite3_last_insert_rowid](https://www.sqlite.org/c3ref/last_insert_rowid.html)
-  [sqlite3_libversion](https://www.sqlite.org/c3ref/libversion.html)
-  [sqlite3_libversion_number](https://www.sqlite.org/c3ref/libversion.html)
-  [sqlite3_limit](https://www.sqlite.org/c3ref/limit.html)
-  [sqlite3_load_extension](https://www.sqlite.org/c3ref/load_extension.html)
-  [sqlite3_log](https://www.sqlite.org/c3ref/log.html)
-  [sqlite3_malloc](https://www.sqlite.org/c3ref/free.html)
-  [sqlite3_malloc64](https://www.sqlite.org/c3ref/free.html)
-  [sqlite3_mem_methods](https://www.sqlite.org/c3ref/mem_methods.html)
-  [sqlite3_memory_alarm](https://www.sqlite.org/c3ref/aggregate_count.html)
-  [sqlite3_memory_highwater](https://www.sqlite.org/c3ref/memory_highwater.html)
-  [sqlite3_memory_used](https://www.sqlite.org/c3ref/memory_highwater.html)
-  [sqlite3_module](https://www.sqlite.org/c3ref/module.html)
-  [sqlite3_module.xBegin](https://www.sqlite.org/vtab.html#xBegin)
-  [sqlite3_module.xBestIndex](https://www.sqlite.org/vtab.html#xbestindex)
-  [sqlite3_module.xClose](https://www.sqlite.org/vtab.html#xclose)
-  [sqlite3_module.xColumn](https://www.sqlite.org/vtab.html#xcolumn)
-  [sqlite3_module.xCommit](https://www.sqlite.org/vtab.html#xcommit)
-  [sqlite3_module.xConnect](https://www.sqlite.org/vtab.html#xconnect)
-  [sqlite3_module.xCreate](https://www.sqlite.org/vtab.html#xcreate)
-  [sqlite3_module.xDisconnect](https://www.sqlite.org/vtab.html#xdisconnect)
-  [sqlite3_module.xEof](https://www.sqlite.org/vtab.html#xeof)
-  [sqlite3_module.xFilter](https://www.sqlite.org/vtab.html#xfilter)
-  [sqlite3_module.xFindFunction](https://www.sqlite.org/vtab.html#xfindfunction)
-  [sqlite3_module.xIntegrity](https://www.sqlite.org/vtab.html#xintegrity)
-  [sqlite3_module.xNext](https://www.sqlite.org/vtab.html#xnext)
-  [sqlite3_module.xOpen](https://www.sqlite.org/vtab.html#xopen)
-  [sqlite3_module.xRename](https://www.sqlite.org/vtab.html#xrename)
-  [sqlite3_module.xRollback](https://www.sqlite.org/vtab.html#xrollback)
-  [sqlite3_module.xRowid](https://www.sqlite.org/vtab.html#xrowid)
-  [sqlite3_module.xSavepoint](https://www.sqlite.org/vtab.html#xsavepoint)
-  [sqlite3_module.xShadowName](https://www.sqlite.org/vtab.html#xshadowname)
-  [sqlite3_module.xSync](https://www.sqlite.org/vtab.html#xsync)
-  [sqlite3_module.xUpdate](https://www.sqlite.org/vtab.html#xupdate)
-  [sqlite3_mprintf](https://www.sqlite.org/c3ref/mprintf.html)
-  [sqlite3_msize](https://www.sqlite.org/c3ref/free.html)
-  [sqlite3_mutex](https://www.sqlite.org/c3ref/mutex.html)
-  [sqlite3_mutex_alloc](https://www.sqlite.org/c3ref/mutex_alloc.html)
-  [sqlite3_mutex_enter](https://www.sqlite.org/c3ref/mutex_alloc.html)
-  [sqlite3_mutex_free](https://www.sqlite.org/c3ref/mutex_alloc.html)
-  [sqlite3_mutex_held](https://www.sqlite.org/c3ref/mutex_held.html)
-  [sqlite3_mutex_leave](https://www.sqlite.org/c3ref/mutex_alloc.html)
-  [sqlite3_mutex_methods](https://www.sqlite.org/c3ref/mutex_methods.html)
-  [sqlite3_mutex_notheld](https://www.sqlite.org/c3ref/mutex_held.html)
-  [sqlite3_mutex_try](https://www.sqlite.org/c3ref/mutex_alloc.html)
-  [sqlite3_next_stmt](https://www.sqlite.org/c3ref/next_stmt.html)
-  [sqlite3_normalized_sql](https://www.sqlite.org/c3ref/expanded_sql.html)
-  [sqlite3_open](https://www.sqlite.org/c3ref/open.html)
-  [sqlite3_open16](https://www.sqlite.org/c3ref/open.html)
-  [sqlite3_open_v2](https://www.sqlite.org/c3ref/open.html)
-  [sqlite3_os_end](https://www.sqlite.org/c3ref/initialize.html)
-  [sqlite3_os_init](https://www.sqlite.org/c3ref/initialize.html)
-  [sqlite3_overload_function](https://www.sqlite.org/c3ref/overload_function.html)
-  [sqlite3_pcache](https://www.sqlite.org/c3ref/pcache.html)
-  [sqlite3_pcache_methods2](https://www.sqlite.org/c3ref/pcache_methods2.html)
-  [sqlite3_pcache_page](https://www.sqlite.org/c3ref/pcache_page.html)
-  [sqlite3_prepare](https://www.sqlite.org/c3ref/prepare.html)
-  [sqlite3_prepare16](https://www.sqlite.org/c3ref/prepare.html)
-  [sqlite3_prepare16_v2](https://www.sqlite.org/c3ref/prepare.html)
-  [sqlite3_prepare16_v3](https://www.sqlite.org/c3ref/prepare.html)
-  [sqlite3_prepare_v2](https://www.sqlite.org/c3ref/prepare.html)
-  [sqlite3_prepare_v3](https://www.sqlite.org/c3ref/prepare.html)
-  [sqlite3_preupdate_blobwrite](https://www.sqlite.org/c3ref/preupdate_blobwrite.html)
-  [sqlite3_preupdate_count](https://www.sqlite.org/c3ref/preupdate_blobwrite.html)
-  [sqlite3_preupdate_depth](https://www.sqlite.org/c3ref/preupdate_blobwrite.html)
-  [sqlite3_preupdate_hook](https://www.sqlite.org/c3ref/preupdate_blobwrite.html)
-  [sqlite3_preupdate_new](https://www.sqlite.org/c3ref/preupdate_blobwrite.html)
-  [sqlite3_preupdate_old](https://www.sqlite.org/c3ref/preupdate_blobwrite.html)
-  [sqlite3_profile](https://www.sqlite.org/c3ref/profile.html)
-  [sqlite3_progress_handler](https://www.sqlite.org/c3ref/progress_handler.html)
-  [sqlite3_randomness](https://www.sqlite.org/c3ref/randomness.html)
-  [sqlite3_realloc](https://www.sqlite.org/c3ref/free.html)
-  [sqlite3_realloc64](https://www.sqlite.org/c3ref/free.html)
-  [sqlite3_rebaser](https://www.sqlite.org/session/rebaser.html)
-  [sqlite3_release_memory](https://www.sqlite.org/c3ref/release_memory.html)
-  [sqlite3_reset](https://www.sqlite.org/c3ref/reset.html)
-  [sqlite3_reset_auto_extension](https://www.sqlite.org/c3ref/reset_auto_extension.html)
-  [sqlite3_result_blob](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_blob64](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_double](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_error](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_error16](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_error_code](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_error_nomem](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_error_toobig](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_int](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_int64](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_null](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_pointer](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_subtype](https://www.sqlite.org/c3ref/result_subtype.html)
-  [sqlite3_result_text](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_text16](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_text16be](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_text16le](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_text64](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_value](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_zeroblob](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_result_zeroblob64](https://www.sqlite.org/c3ref/result_blob.html)
-  [sqlite3_rollback_hook](https://www.sqlite.org/c3ref/commit_hook.html)
-  [sqlite3_rtree_query_callback](https://www.sqlite.org/rtree.html#xquery)
-  [sqlite3_serialize](https://www.sqlite.org/c3ref/serialize.html)
-  [sqlite3_session](https://www.sqlite.org/session/session.html)
-  [sqlite3_set_authorizer](https://www.sqlite.org/c3ref/set_authorizer.html)
-  [sqlite3_set_auxdata](https://www.sqlite.org/c3ref/get_auxdata.html)
-  [sqlite3_set_clientdata](https://www.sqlite.org/c3ref/get_clientdata.html)
-  [sqlite3_set_last_insert_rowid](https://www.sqlite.org/c3ref/set_last_insert_rowid.html)
-  [sqlite3_shutdown](https://www.sqlite.org/c3ref/initialize.html)
-  [sqlite3_sleep](https://www.sqlite.org/c3ref/sleep.html)
-  [sqlite3_snapshot](https://www.sqlite.org/c3ref/snapshot.html)
-  [sqlite3_snapshot_cmp](https://www.sqlite.org/c3ref/snapshot_cmp.html)
-  [sqlite3_snapshot_free](https://www.sqlite.org/c3ref/snapshot_free.html)
-  [sqlite3_snapshot_get](https://www.sqlite.org/c3ref/snapshot_get.html)
-  [sqlite3_snapshot_open](https://www.sqlite.org/c3ref/snapshot_open.html)
-  [sqlite3_snapshot_recover](https://www.sqlite.org/c3ref/snapshot_recover.html)
-  [sqlite3_snprintf](https://www.sqlite.org/c3ref/mprintf.html)
-  [sqlite3_soft_heap_limit](https://www.sqlite.org/c3ref/soft_heap_limit.html)
-  [sqlite3_soft_heap_limit64](https://www.sqlite.org/c3ref/hard_heap_limit64.html)
-  [sqlite3_sourceid](https://www.sqlite.org/c3ref/libversion.html)
-  [sqlite3_sql](https://www.sqlite.org/c3ref/expanded_sql.html)
-  [sqlite3_status](https://www.sqlite.org/c3ref/status.html)
-  [sqlite3_status64](https://www.sqlite.org/c3ref/status.html)
-  [sqlite3_step](https://www.sqlite.org/c3ref/step.html)
-  [sqlite3_stmt](https://www.sqlite.org/c3ref/stmt.html)
-  [sqlite3_stmt_busy](https://www.sqlite.org/c3ref/stmt_busy.html)
-  [sqlite3_stmt_explain](https://www.sqlite.org/c3ref/stmt_explain.html)
-  [sqlite3_stmt_isexplain](https://www.sqlite.org/c3ref/stmt_isexplain.html)
-  [sqlite3_stmt_readonly](https://www.sqlite.org/c3ref/stmt_readonly.html)
-  [sqlite3_stmt_scanstatus](https://www.sqlite.org/c3ref/stmt_scanstatus.html)
-  [sqlite3_stmt_scanstatus_reset](https://www.sqlite.org/c3ref/stmt_scanstatus_reset.html)
-  [sqlite3_stmt_scanstatus_v2](https://www.sqlite.org/c3ref/stmt_scanstatus.html)
-  [sqlite3_stmt_status](https://www.sqlite.org/c3ref/stmt_status.html)
-  [sqlite3_str](https://www.sqlite.org/c3ref/str.html)
-  [sqlite3_str_append](https://www.sqlite.org/c3ref/str_append.html)
-  [sqlite3_str_appendall](https://www.sqlite.org/c3ref/str_append.html)
-  [sqlite3_str_appendchar](https://www.sqlite.org/c3ref/str_append.html)
-  [sqlite3_str_appendf](https://www.sqlite.org/c3ref/str_append.html)
-  [sqlite3_str_errcode](https://www.sqlite.org/c3ref/str_errcode.html)
-  [sqlite3_str_finish](https://www.sqlite.org/c3ref/str_finish.html)
-  [sqlite3_str_length](https://www.sqlite.org/c3ref/str_errcode.html)
-  [sqlite3_str_new](https://www.sqlite.org/c3ref/str_new.html)
-  [sqlite3_str_reset](https://www.sqlite.org/c3ref/str_append.html)
-  [sqlite3_str_value](https://www.sqlite.org/c3ref/str_errcode.html)
-  [sqlite3_str_vappendf](https://www.sqlite.org/c3ref/str_append.html)
-  [sqlite3_strglob](https://www.sqlite.org/c3ref/strglob.html)
-  [sqlite3_stricmp](https://www.sqlite.org/c3ref/stricmp.html)
-  [sqlite3_strlike](https://www.sqlite.org/c3ref/strlike.html)
-  [sqlite3_strnicmp](https://www.sqlite.org/c3ref/stricmp.html)
-  [sqlite3_system_errno](https://www.sqlite.org/c3ref/system_errno.html)
-  [sqlite3_table_column_metadata](https://www.sqlite.org/c3ref/table_column_metadata.html)
-  [sqlite3_temp_directory](https://www.sqlite.org/c3ref/temp_directory.html)
-  [sqlite3_test_control](https://www.sqlite.org/c3ref/test_control.html)
-  [sqlite3_thread_cleanup](https://www.sqlite.org/c3ref/aggregate_count.html)
-  [sqlite3_threadsafe](https://www.sqlite.org/c3ref/threadsafe.html)
-  [sqlite3_total_changes](https://www.sqlite.org/c3ref/total_changes.html)
-  [sqlite3_total_changes64](https://www.sqlite.org/c3ref/total_changes.html)
-  [sqlite3_trace](https://www.sqlite.org/c3ref/profile.html)
-  [sqlite3_trace_v2](https://www.sqlite.org/c3ref/trace_v2.html)
-  [sqlite3_transfer_bindings](https://www.sqlite.org/c3ref/aggregate_count.html)
-  [sqlite3_txn_state](https://www.sqlite.org/c3ref/txn_state.html)
-  [sqlite3_uint64](https://www.sqlite.org/c3ref/int64.html)
-  [sqlite3_unlock_notify](https://www.sqlite.org/c3ref/unlock_notify.html)
-  [sqlite3_update_hook](https://www.sqlite.org/c3ref/update_hook.html)
-  [sqlite3_uri_boolean](https://www.sqlite.org/c3ref/uri_boolean.html)
-  [sqlite3_uri_int64](https://www.sqlite.org/c3ref/uri_boolean.html)
-  [sqlite3_uri_key](https://www.sqlite.org/c3ref/uri_boolean.html)
-  [sqlite3_uri_parameter](https://www.sqlite.org/c3ref/uri_boolean.html)
-  [sqlite3_user_data](https://www.sqlite.org/c3ref/user_data.html)
-  [sqlite3_value](https://www.sqlite.org/c3ref/value.html)
-  [sqlite3_value_blob](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_bytes](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_bytes16](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_double](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_dup](https://www.sqlite.org/c3ref/value_dup.html)
-  [sqlite3_value_encoding](https://www.sqlite.org/c3ref/value_encoding.html)
-  [sqlite3_value_free](https://www.sqlite.org/c3ref/value_dup.html)
-  [sqlite3_value_frombind](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_int](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_int64](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_nochange](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_numeric_type](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_pointer](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_subtype](https://www.sqlite.org/c3ref/value_subtype.html)
-  [sqlite3_value_text](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_text16](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_text16be](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_text16le](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_value_type](https://www.sqlite.org/c3ref/value_blob.html)
-  [sqlite3_version](https://www.sqlite.org/c3ref/libversion.html)
-  [sqlite3_vfs](https://www.sqlite.org/c3ref/vfs.html)
-  [sqlite3_vfs.xAccess](https://www.sqlite.org/c3ref/vfs.html#sqlite3vfsxaccess)
-  [sqlite3_vfs.xOpen](https://www.sqlite.org/c3ref/vfs.html#sqlite3vfsxopen)
-  [sqlite3_vfs_find](https://www.sqlite.org/c3ref/vfs_find.html)
-  [sqlite3_vfs_register](https://www.sqlite.org/c3ref/vfs_find.html)
-  [sqlite3_vfs_unregister](https://www.sqlite.org/c3ref/vfs_find.html)
-  [sqlite3_vmprintf](https://www.sqlite.org/c3ref/mprintf.html)
-  [sqlite3_vsnprintf](https://www.sqlite.org/c3ref/mprintf.html)
-  [sqlite3_vtab](https://www.sqlite.org/c3ref/vtab.html)
-  [sqlite3_vtab_collation](https://www.sqlite.org/c3ref/vtab_collation.html)
-  [sqlite3_vtab_config](https://www.sqlite.org/c3ref/vtab_config.html)
-  [sqlite3_vtab_cursor](https://www.sqlite.org/c3ref/vtab_cursor.html)
-  [sqlite3_vtab_distinct](https://www.sqlite.org/c3ref/vtab_distinct.html)
-  [sqlite3_vtab_in](https://www.sqlite.org/c3ref/vtab_in.html)
-  [sqlite3_vtab_in_first](https://www.sqlite.org/c3ref/vtab_in_first.html)
-  [sqlite3_vtab_in_next](https://www.sqlite.org/c3ref/vtab_in_first.html)
-  [sqlite3_vtab_nochange](https://www.sqlite.org/c3ref/vtab_nochange.html)
-  [sqlite3_vtab_on_conflict](https://www.sqlite.org/c3ref/vtab_on_conflict.html)
-  [sqlite3_vtab_rhs_value](https://www.sqlite.org/c3ref/vtab_rhs_value.html)
-  [sqlite3_wal_autocheckpoint](https://www.sqlite.org/c3ref/wal_autocheckpoint.html)
-  [sqlite3_wal_checkpoint](https://www.sqlite.org/c3ref/wal_checkpoint.html)
-  [sqlite3_wal_checkpoint_v2](https://www.sqlite.org/c3ref/wal_checkpoint_v2.html)
-  [sqlite3_wal_hook](https://www.sqlite.org/c3ref/wal_hook.html)
-  [sqlite3_win32_set_directory](https://www.sqlite.org/c3ref/win32_set_directory.html)
-  [sqlite3_win32_set_directory16](https://www.sqlite.org/c3ref/win32_set_directory.html)
-  [sqlite3_win32_set_directory8](https://www.sqlite.org/c3ref/win32_set_directory.html)
-  [sqlite3changegroup_add](https://www.sqlite.org/session/sqlite3changegroup_add.html)
-  [sqlite3changegroup_add_change](https://www.sqlite.org/session/sqlite3changegroup_add_change.html)
-  [sqlite3changegroup_add_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3changegroup_delete](https://www.sqlite.org/session/sqlite3changegroup_delete.html)
-  [sqlite3changegroup_new](https://www.sqlite.org/session/sqlite3changegroup_new.html)
-  [sqlite3changegroup_output](https://www.sqlite.org/session/sqlite3changegroup_output.html)
-  [sqlite3changegroup_output_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3changegroup_schema](https://www.sqlite.org/session/sqlite3changegroup_schema.html)
-  [sqlite3changeset_apply](https://www.sqlite.org/session/sqlite3changeset_apply.html)
-  [sqlite3changeset_apply_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3changeset_apply_v2](https://www.sqlite.org/session/sqlite3changeset_apply.html)
-  [sqlite3changeset_apply_v2_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3changeset_concat](https://www.sqlite.org/session/sqlite3changeset_concat.html)
-  [sqlite3changeset_concat_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3changeset_conflict](https://www.sqlite.org/session/sqlite3changeset_conflict.html)
-  [sqlite3changeset_finalize](https://www.sqlite.org/session/sqlite3changeset_finalize.html)
-  [sqlite3changeset_fk_conflicts](https://www.sqlite.org/session/sqlite3changeset_fk_conflicts.html)
-  [sqlite3changeset_invert](https://www.sqlite.org/session/sqlite3changeset_invert.html)
-  [sqlite3changeset_invert_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3changeset_new](https://www.sqlite.org/session/sqlite3changeset_new.html)
-  [sqlite3changeset_next](https://www.sqlite.org/session/sqlite3changeset_next.html)
-  [sqlite3changeset_old](https://www.sqlite.org/session/sqlite3changeset_old.html)
-  [sqlite3changeset_op](https://www.sqlite.org/session/sqlite3changeset_op.html)
-  [sqlite3changeset_pk](https://www.sqlite.org/session/sqlite3changeset_pk.html)
-  [sqlite3changeset_start](https://www.sqlite.org/session/sqlite3changeset_start.html)
-  [sqlite3changeset_start_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3changeset_start_v2](https://www.sqlite.org/session/sqlite3changeset_start.html)
-  [sqlite3changeset_start_v2_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3changeset_upgrade](https://www.sqlite.org/session/sqlite3changeset_upgrade.html)
-  [sqlite3rebaser_configure](https://www.sqlite.org/session/sqlite3rebaser_configure.html)
-  [sqlite3rebaser_create](https://www.sqlite.org/session/sqlite3rebaser_create.html)
-  [sqlite3rebaser_delete](https://www.sqlite.org/session/sqlite3rebaser_delete.html)
-  [sqlite3rebaser_rebase](https://www.sqlite.org/session/sqlite3rebaser_rebase.html)
-  [sqlite3rebaser_rebase_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3session_attach](https://www.sqlite.org/session/sqlite3session_attach.html)
-  [sqlite3session_changeset](https://www.sqlite.org/session/sqlite3session_changeset.html)
-  [sqlite3session_changeset_size](https://www.sqlite.org/session/sqlite3session_changeset_size.html)
-  [sqlite3session_changeset_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3session_config](https://www.sqlite.org/session/sqlite3session_config.html)
-  [sqlite3session_create](https://www.sqlite.org/session/sqlite3session_create.html)
-  [sqlite3session_delete](https://www.sqlite.org/session/sqlite3session_delete.html)
-  [sqlite3session_diff](https://www.sqlite.org/session/sqlite3session_diff.html)
-  [sqlite3session_enable](https://www.sqlite.org/session/sqlite3session_enable.html)
-  [sqlite3session_indirect](https://www.sqlite.org/session/sqlite3session_indirect.html)
-  [sqlite3session_isempty](https://www.sqlite.org/session/sqlite3session_isempty.html)
-  [sqlite3session_memory_used](https://www.sqlite.org/session/sqlite3session_memory_used.html)
-  [sqlite3session_object_config](https://www.sqlite.org/session/sqlite3session_object_config.html)
-  [sqlite3session_patchset](https://www.sqlite.org/session/sqlite3session_patchset.html)
-  [sqlite3session_patchset_strm](https://www.sqlite.org/session/sqlite3changegroup_add_strm.html)
-  [sqlite3session_table_filter](https://www.sqlite.org/session/sqlite3session_table_filter.html)
-  [SQLITE_4_BYTE_ALIGNED_MALLOC](https://www.sqlite.org/compile.html#4_byte_aligned_malloc)
-  [SQLITE_ABORT](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_ABORT_ROLLBACK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_ACCESS_EXISTS](https://www.sqlite.org/c3ref/c_access_exists.html)
-  [SQLITE_ACCESS_READ](https://www.sqlite.org/c3ref/c_access_exists.html)
-  [SQLITE_ACCESS_READWRITE](https://www.sqlite.org/c3ref/c_access_exists.html)
-  [SQLITE_ALLOW_COVERING_INDEX_SCAN](https://www.sqlite.org/compile.html#allow_covering_index_scan)
-  [SQLITE_ALLOW_URI_AUTHORITY](https://www.sqlite.org/compile.html#allow_uri_authority)
-  [SQLITE_ALTER_TABLE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_ANALYZE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_ANY](https://www.sqlite.org/c3ref/c_any.html)
-  [SQLITE_API](https://www.sqlite.org/compile.html#api)
-  [SQLITE_APICALL](https://www.sqlite.org/compile.html#apicall)
-  [SQLITE_ATTACH](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_AUTH](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_AUTH_USER](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_BLOB](https://www.sqlite.org/c3ref/c_blob.html)
-  [SQLITE_BUSY](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_BUSY_RECOVERY](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_BUSY_SNAPSHOT](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_BUSY_TIMEOUT](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_BYTEORDER](https://www.sqlite.org/compile.html#byteorder)
-  [SQLITE_CALLBACK](https://www.sqlite.org/compile.html#callback)
-  [SQLITE_CANTOPEN](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_CANTOPEN_CONVPATH](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CANTOPEN_DIRTYWAL](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CANTOPEN_FULLPATH](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CANTOPEN_ISDIR](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CANTOPEN_NOTEMPDIR](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CANTOPEN_SYMLINK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CASE_SENSITIVE_LIKE](https://www.sqlite.org/compile.html#case_sensitive_like)
-  [SQLITE_CDECL](https://www.sqlite.org/compile.html#cdecl)
-  [SQLITE_CHANGESET_ABORT](https://www.sqlite.org/session/c_changeset_abort.html)
-  [SQLITE_CHANGESET_CONFLICT](https://www.sqlite.org/session/c_changeset_conflict.html)
-  [SQLITE_CHANGESET_CONSTRAINT](https://www.sqlite.org/session/c_changeset_conflict.html)
-  [SQLITE_CHANGESET_DATA](https://www.sqlite.org/session/c_changeset_conflict.html)
-  [SQLITE_CHANGESET_FOREIGN_KEY](https://www.sqlite.org/session/c_changeset_conflict.html)
-  [SQLITE_CHANGESET_NOTFOUND](https://www.sqlite.org/session/c_changeset_conflict.html)
-  [SQLITE_CHANGESET_OMIT](https://www.sqlite.org/session/c_changeset_abort.html)
-  [SQLITE_CHANGESET_REPLACE](https://www.sqlite.org/session/c_changeset_abort.html)
-  [SQLITE_CHANGESETAPPLY_FKNOACTION](https://www.sqlite.org/session/c_changesetapply_fknoaction.html)
-  [SQLITE_CHANGESETAPPLY_IGNORENOOP](https://www.sqlite.org/session/c_changesetapply_fknoaction.html)
-  [SQLITE_CHANGESETAPPLY_INVERT](https://www.sqlite.org/session/c_changesetapply_fknoaction.html)
-  [SQLITE_CHANGESETAPPLY_NOSAVEPOINT](https://www.sqlite.org/session/c_changesetapply_fknoaction.html)
-  [SQLITE_CHANGESETSTART_INVERT](https://www.sqlite.org/session/c_changesetstart_invert.html)
-  [SQLITE_CHECKPOINT_FULL](https://www.sqlite.org/c3ref/c_checkpoint_full.html)
-  [SQLITE_CHECKPOINT_PASSIVE](https://www.sqlite.org/c3ref/c_checkpoint_full.html)
-  [SQLITE_CHECKPOINT_RESTART](https://www.sqlite.org/c3ref/c_checkpoint_full.html)
-  [SQLITE_CHECKPOINT_TRUNCATE](https://www.sqlite.org/c3ref/c_checkpoint_full.html)
-  [sqlite_compileoption_get() SQL function](https://www.sqlite.org/lang_corefunc.html#sqlite_compileoption_get)
-  [sqlite_compileoption_used() SQL function](https://www.sqlite.org/lang_corefunc.html#sqlite_compileoption_used)
-  [SQLITE_CONFIG_COVERING_INDEX_SCAN](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigcoveringindexscan)
-  [SQLITE_CONFIG_GETMALLOC](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfiggetmalloc)
-  [SQLITE_CONFIG_GETMUTEX](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfiggetmutex)
-  [SQLITE_CONFIG_GETPCACHE](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfiggetpcache)
-  [SQLITE_CONFIG_GETPCACHE2](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfiggetpcache2)
-  [SQLITE_CONFIG_HEAP](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigheap)
-  [SQLITE_CONFIG_LOG](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfiglog)
-  [SQLITE_CONFIG_LOOKASIDE](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfiglookaside)
-  [SQLITE_CONFIG_MALLOC](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigmalloc)
-  [SQLITE_CONFIG_MEMDB_MAXSIZE](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigmemdbmaxsize)
-  [SQLITE_CONFIG_MEMSTATUS](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigmemstatus)
-  [SQLITE_CONFIG_MMAP_SIZE](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigmmapsize)
-  [SQLITE_CONFIG_MULTITHREAD](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigmultithread)
-  [SQLITE_CONFIG_MUTEX](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigmutex)
-  [SQLITE_CONFIG_PAGECACHE](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigpagecache)
-  [SQLITE_CONFIG_PCACHE](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigpcache)
-  [SQLITE_CONFIG_PCACHE2](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigpcache2)
-  [SQLITE_CONFIG_PCACHE_HDRSZ](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigpcachehdrsz)
-  [SQLITE_CONFIG_PMASZ](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigpmasz)
-  [SQLITE_CONFIG_ROWID_IN_VIEW](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigrowidinview)
-  [SQLITE_CONFIG_SCRATCH](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigscratch)
-  [SQLITE_CONFIG_SERIALIZED](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigserialized)
-  [SQLITE_CONFIG_SINGLETHREAD](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigsinglethread)
-  [SQLITE_CONFIG_SMALL_MALLOC](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigsmallmalloc)
-  [SQLITE_CONFIG_SORTERREF_SIZE](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigsorterrefsize)
-  [SQLITE_CONFIG_SQLLOG](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigsqllog)
-  [SQLITE_CONFIG_STMTJRNL_SPILL](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigstmtjrnlspill)
-  [SQLITE_CONFIG_URI](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfiguri)
-  [SQLITE_CONFIG_WIN32_HEAPSIZE](https://www.sqlite.org/c3ref/c_config_covering_index_scan.html#sqliteconfigwin32heapsize)
-  [SQLITE_CONSTRAINT](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_CONSTRAINT_CHECK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_COMMITHOOK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_DATATYPE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_FOREIGNKEY](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_FUNCTION](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_NOTNULL](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_PINNED](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_PRIMARYKEY](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_ROWID](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_TRIGGER](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_UNIQUE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CONSTRAINT_VTAB](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_COPY](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_CORRUPT](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_CORRUPT_INDEX](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CORRUPT_SEQUENCE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CORRUPT_VTAB](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_CREATE_INDEX](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_CREATE_TABLE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_CREATE_TEMP_INDEX](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_CREATE_TEMP_TABLE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_CREATE_TEMP_TRIGGER](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_CREATE_TEMP_VIEW](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_CREATE_TRIGGER](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_CREATE_VIEW](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_CREATE_VTABLE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DBCONFIG_DEFENSIVE](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigdefensive)
-  [SQLITE_DBCONFIG_DQS_DDL](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigdqsddl)
-  [SQLITE_DBCONFIG_DQS_DML](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigdqsdml)
-  [SQLITE_DBCONFIG_ENABLE_FKEY](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigenablefkey)
-  [SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigenablefts3tokenizer)
-  [SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigenableloadextension)
-  [SQLITE_DBCONFIG_ENABLE_QPSG](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigenableqpsg)
-  [SQLITE_DBCONFIG_ENABLE_TRIGGER](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigenabletrigger)
-  [SQLITE_DBCONFIG_ENABLE_VIEW](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigenableview)
-  [SQLITE_DBCONFIG_LEGACY_ALTER_TABLE](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfiglegacyaltertable)
-  [SQLITE_DBCONFIG_LEGACY_FILE_FORMAT](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfiglegacyfileformat)
-  [SQLITE_DBCONFIG_LOOKASIDE](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfiglookaside)
-  [SQLITE_DBCONFIG_MAINDBNAME](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigmaindbname)
-  [SQLITE_DBCONFIG_MAX](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html)
-  [SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfignockptonclose)
-  [SQLITE_DBCONFIG_RESET_DATABASE](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigresetdatabase)
-  [SQLITE_DBCONFIG_REVERSE_SCANORDER](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigreversescanorder)
-  [SQLITE_DBCONFIG_STMT_SCANSTATUS](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigstmtscanstatus)
-  [SQLITE_DBCONFIG_TRIGGER_EQP](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigtriggereqp)
-  [SQLITE_DBCONFIG_TRUSTED_SCHEMA](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigtrustedschema)
-  [SQLITE_DBCONFIG_WRITABLE_SCHEMA](https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigwritableschema)
-  [sqlite_dbpage](https://www.sqlite.org/dbpage.html)
-  [SQLITE_DBPAGE virtual table](https://www.sqlite.org/dbpage.html)
-  [SQLITE_DBSTATUS options](https://www.sqlite.org/c3ref/c_dbstatus_options.html)
-  [SQLITE_DBSTATUS_CACHE_HIT](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuscachehit)
-  [SQLITE_DBSTATUS_CACHE_MISS](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuscachemiss)
-  [SQLITE_DBSTATUS_CACHE_SPILL](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuscachespill)
-  [SQLITE_DBSTATUS_CACHE_USED](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuscacheused)
-  [SQLITE_DBSTATUS_CACHE_USED_SHARED](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuscacheusedshared)
-  [SQLITE_DBSTATUS_CACHE_WRITE](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuscachewrite)
-  [SQLITE_DBSTATUS_DEFERRED_FKS](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatusdeferredfks)
-  [SQLITE_DBSTATUS_LOOKASIDE_HIT](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuslookasidehit)
-  [SQLITE_DBSTATUS_LOOKASIDE_MISS_FULL](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuslookasidemissfull)
-  [SQLITE_DBSTATUS_LOOKASIDE_MISS_SIZE](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuslookasidemisssize)
-  [SQLITE_DBSTATUS_LOOKASIDE_USED](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatuslookasideused)
-  [SQLITE_DBSTATUS_MAX](https://www.sqlite.org/c3ref/c_dbstatus_options.html)
-  [SQLITE_DBSTATUS_SCHEMA_USED](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatusschemaused)
-  [SQLITE_DBSTATUS_STMT_USED](https://www.sqlite.org/c3ref/c_dbstatus_options.html#sqlitedbstatusstmtused)
-  [SQLITE_DEBUG](https://www.sqlite.org/compile.html#debug)
-  [SQLITE_DEFAULT_AUTOMATIC_INDEX](https://www.sqlite.org/compile.html#default_automatic_index)
-  [SQLITE_DEFAULT_AUTOVACUUM](https://www.sqlite.org/compile.html#default_autovacuum)
-  [SQLITE_DEFAULT_CACHE_SIZE](https://www.sqlite.org/compile.html#default_cache_size)
-  [SQLITE_DEFAULT_FILE_FORMAT](https://www.sqlite.org/compile.html#default_file_format)
-  [SQLITE_DEFAULT_FILE_PERMISSIONS](https://www.sqlite.org/compile.html#default_file_permissions)
-  [SQLITE_DEFAULT_FOREIGN_KEYS](https://www.sqlite.org/compile.html#default_foreign_keys)
-  [SQLITE_DEFAULT_JOURNAL_SIZE_LIMIT](https://www.sqlite.org/compile.html#default_journal_size_limit)
-  [SQLITE_DEFAULT_LOCKING_MODE](https://www.sqlite.org/compile.html#default_locking_mode)
-  [SQLITE_DEFAULT_LOOKASIDE](https://www.sqlite.org/compile.html#default_lookaside)
-  [SQLITE_DEFAULT_MEMSTATUS](https://www.sqlite.org/compile.html#default_memstatus)
-  [SQLITE_DEFAULT_MMAP_SIZE](https://www.sqlite.org/compile.html#default_mmap_size)
-  [SQLITE_DEFAULT_PAGE_SIZE](https://www.sqlite.org/compile.html#default_page_size)
-  [SQLITE_DEFAULT_PCACHE_INITSZ](https://www.sqlite.org/compile.html#default_pcache_initsz)
-  [SQLITE_DEFAULT_SYNCHRONOUS](https://www.sqlite.org/compile.html#default_synchronous)
-  [SQLITE_DEFAULT_WAL_AUTOCHECKPOINT](https://www.sqlite.org/compile.html#default_wal_autocheckpoint)
-  [SQLITE_DEFAULT_WAL_SYNCHRONOUS](https://www.sqlite.org/compile.html#default_wal_synchronous)
-  [SQLITE_DEFAULT_WORKER_THREADS](https://www.sqlite.org/compile.html#default_worker_threads)
-  [SQLITE_DELETE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DENY](https://www.sqlite.org/c3ref/c_deny.html)
-  [SQLITE_DESERIALIZE_FREEONCLOSE](https://www.sqlite.org/c3ref/c_deserialize_freeonclose.html)
-  [SQLITE_DESERIALIZE_READONLY](https://www.sqlite.org/c3ref/c_deserialize_freeonclose.html)
-  [SQLITE_DESERIALIZE_RESIZEABLE](https://www.sqlite.org/c3ref/c_deserialize_freeonclose.html)
-  [SQLITE_DETACH](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DETERMINISTIC](https://www.sqlite.org/c3ref/c_deterministic.html#sqlitedeterministic)
-  [SQLITE_DIRECT_OVERFLOW_READ](https://www.sqlite.org/compile.html#direct_overflow_read)
-  [SQLITE_DIRECTONLY](https://www.sqlite.org/c3ref/c_deterministic.html#sqlitedirectonly)
-  [SQLITE_DISABLE_DIRSYNC](https://www.sqlite.org/compile.html#disable_dirsync)
-  [SQLITE_DISABLE_FTS3_UNICODE](https://www.sqlite.org/compile.html#disable_fts3_unicode)
-  [SQLITE_DISABLE_FTS4_DEFERRED](https://www.sqlite.org/compile.html#disable_fts4_deferred)
-  [SQLITE_DISABLE_INTRINSIC](https://www.sqlite.org/compile.html#disable_intrinsic)
-  [SQLITE_DISABLE_LFS](https://www.sqlite.org/compile.html#disable_lfs)
-  [SQLITE_DISABLE_PAGECACHE_OVERFLOW_STATS](https://www.sqlite.org/compile.html#disable_pagecache_overflow_stats)
-  [SQLITE_DONE](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_DQS](https://www.sqlite.org/compile.html#dqs)
-  [SQLITE_DROP_INDEX](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DROP_TABLE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DROP_TEMP_INDEX](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DROP_TEMP_TABLE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DROP_TEMP_TRIGGER](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DROP_TEMP_VIEW](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DROP_TRIGGER](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DROP_VIEW](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_DROP_VTABLE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_EMPTY](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_ENABLE_8_3_NAMES](https://www.sqlite.org/compile.html#enable_8_3_names)
-  [SQLITE_ENABLE_API_ARMOR](https://www.sqlite.org/compile.html#enable_api_armor)
-  [SQLITE_ENABLE_ATOMIC_WRITE](https://www.sqlite.org/compile.html#enable_atomic_write)
-  [SQLITE_ENABLE_BATCH_ATOMIC_WRITE](https://www.sqlite.org/compile.html#enable_batch_atomic_write)
-  [SQLITE_ENABLE_BYTECODE_VTAB](https://www.sqlite.org/compile.html#enable_bytecode_vtab)
-  [SQLITE_ENABLE_COLUMN_METADATA](https://www.sqlite.org/compile.html#enable_column_metadata)
-  [SQLITE_ENABLE_DBPAGE_VTAB](https://www.sqlite.org/compile.html#enable_dbpage_vtab)
-  [SQLITE_ENABLE_DBSTAT_VTAB](https://www.sqlite.org/compile.html#enable_dbstat_vtab)
-  [SQLITE_ENABLE_DESERIALIZE](https://www.sqlite.org/compile.html#enable_deserialize)
-  [SQLITE_ENABLE_EXPLAIN_COMMENTS](https://www.sqlite.org/compile.html#enable_explain_comments)
-  [SQLITE_ENABLE_FTS3](https://www.sqlite.org/compile.html#enable_fts3)
-  [SQLITE_ENABLE_FTS3_PARENTHESIS](https://www.sqlite.org/compile.html#enable_fts3_parenthesis)
-  [SQLITE_ENABLE_FTS3_TOKENIZER](https://www.sqlite.org/compile.html#enable_fts3_tokenizer)
-  [SQLITE_ENABLE_FTS4](https://www.sqlite.org/compile.html#enable_fts4)
-  [SQLITE_ENABLE_FTS5](https://www.sqlite.org/compile.html#enable_fts5)
-  [SQLITE_ENABLE_GEOPOLY](https://www.sqlite.org/compile.html#enable_geopoly)
-  [SQLITE_ENABLE_HIDDEN_COLUMNS](https://www.sqlite.org/compile.html#enable_hidden_columns)
-  [SQLITE_ENABLE_ICU](https://www.sqlite.org/compile.html#enable_icu)
-  [SQLITE_ENABLE_IOTRACE](https://www.sqlite.org/compile.html#enable_iotrace)
-  [SQLITE_ENABLE_JSON1](https://www.sqlite.org/compile.html#enable_json1)
-  [SQLITE_ENABLE_LOCKING_STYLE](https://www.sqlite.org/compile.html#enable_locking_style)
-  [SQLITE_ENABLE_MATH_FUNCTIONS](https://www.sqlite.org/compile.html#enable_math_functions)
-  [SQLITE_ENABLE_MEMORY_MANAGEMENT](https://www.sqlite.org/compile.html#enable_memory_management)
-  [SQLITE_ENABLE_MEMSYS3](https://www.sqlite.org/compile.html#enable_memsys3)
-  [SQLITE_ENABLE_MEMSYS5](https://www.sqlite.org/compile.html#enable_memsys5)
-  [SQLITE_ENABLE_NORMALIZE](https://www.sqlite.org/compile.html#enable_normalize)
-  [SQLITE_ENABLE_NULL_TRIM](https://www.sqlite.org/compile.html#enable_null_trim)
-  [SQLITE_ENABLE_OFFSET_SQL_FUNC](https://www.sqlite.org/compile.html#enable_offset_sql_func)
-  [SQLITE_ENABLE_PREUPDATE_HOOK](https://www.sqlite.org/compile.html#enable_preupdate_hook)
-  [SQLITE_ENABLE_QPSG](https://www.sqlite.org/compile.html#enable_qpsg)
-  [SQLITE_ENABLE_RBU](https://www.sqlite.org/compile.html#enable_rbu)
-  [SQLITE_ENABLE_RTREE](https://www.sqlite.org/compile.html#enable_rtree)
-  [SQLITE_ENABLE_SESSION](https://www.sqlite.org/compile.html#enable_session)
-  [SQLITE_ENABLE_SNAPSHOT](https://www.sqlite.org/compile.html#enable_snapshot)
-  [SQLITE_ENABLE_SORTER_REFERENCES](https://www.sqlite.org/compile.html#enable_sorter_references)
-  [SQLITE_ENABLE_SQLLOG](https://www.sqlite.org/compile.html#enable_sqllog)
-  [SQLITE_ENABLE_STAT2](https://www.sqlite.org/compile.html#enable_stat2)
-  [SQLITE_ENABLE_STAT3](https://www.sqlite.org/compile.html#enable_stat3)
-  [SQLITE_ENABLE_STAT4](https://www.sqlite.org/compile.html#enable_stat4)
-  [SQLITE_ENABLE_STMT_SCANSTATUS](https://www.sqlite.org/compile.html#enable_stmt_scanstatus)
-  [SQLITE_ENABLE_STMTVTAB](https://www.sqlite.org/compile.html#enable_stmtvtab)
-  [SQLITE_ENABLE_TREE_EXPLAIN](https://www.sqlite.org/compile.html#enable_tree_explain)
-  [SQLITE_ENABLE_UNKNOWN_SQL_FUNCTION](https://www.sqlite.org/compile.html#enable_unknown_sql_function)
-  [SQLITE_ENABLE_UNLOCK_NOTIFY](https://www.sqlite.org/compile.html#enable_unlock_notify)
-  [SQLITE_ENABLE_UPDATE_DELETE_LIMIT](https://www.sqlite.org/compile.html#enable_update_delete_limit)
-  [SQLITE_ERROR](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_ERROR_MISSING_COLLSEQ](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_ERROR_RETRY](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_ERROR_SNAPSHOT](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_EXTERN](https://www.sqlite.org/compile.html#extern)
-  [SQLITE_EXTRA_DURABLE](https://www.sqlite.org/compile.html#extra_durable)
-  [SQLITE_FAIL](https://www.sqlite.org/c3ref/c_fail.html)
-  [SQLITE_FCNTL_BEGIN_ATOMIC_WRITE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlbeginatomicwrite)
-  [SQLITE_FCNTL_BUSYHANDLER](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlbusyhandler)
-  [SQLITE_FCNTL_CHUNK_SIZE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlchunksize)
-  [SQLITE_FCNTL_CKPT_DONE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlckptdone)
-  [SQLITE_FCNTL_CKPT_START](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlckptstart)
-  [SQLITE_FCNTL_CKSM_FILE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlcksmfile)
-  [SQLITE_FCNTL_COMMIT_ATOMIC_WRITE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlcommitatomicwrite)
-  [SQLITE_FCNTL_COMMIT_PHASETWO](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlcommitphasetwo)
-  [SQLITE_FCNTL_DATA_VERSION](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntldataversion)
-  [SQLITE_FCNTL_EXTERNAL_READER](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlexternalreader)
-  [SQLITE_FCNTL_FILE_POINTER](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlfilepointer)
-  [SQLITE_FCNTL_GET_LOCKPROXYFILE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html)
-  [SQLITE_FCNTL_HAS_MOVED](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlhasmoved)
-  [SQLITE_FCNTL_JOURNAL_POINTER](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntljournalpointer)
-  [SQLITE_FCNTL_LAST_ERRNO](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html)
-  [SQLITE_FCNTL_LOCK_TIMEOUT](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntllocktimeout)
-  [SQLITE_FCNTL_LOCKSTATE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntllockstate)
-  [SQLITE_FCNTL_MMAP_SIZE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlmmapsize)
-  [SQLITE_FCNTL_OVERWRITE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntloverwrite)
-  [SQLITE_FCNTL_PDB](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html)
-  [SQLITE_FCNTL_PERSIST_WAL](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlpersistwal)
-  [SQLITE_FCNTL_POWERSAFE_OVERWRITE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlpowersafeoverwrite)
-  [SQLITE_FCNTL_PRAGMA](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlpragma)
-  [SQLITE_FCNTL_RBU](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlrbu)
-  [SQLITE_FCNTL_RESERVE_BYTES](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html)
-  [SQLITE_FCNTL_RESET_CACHE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlresetcache)
-  [SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlrollbackatomicwrite)
-  [SQLITE_FCNTL_SET_LOCKPROXYFILE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html)
-  [SQLITE_FCNTL_SIZE_HINT](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlsizehint)
-  [SQLITE_FCNTL_SIZE_LIMIT](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlsizelimit)
-  [SQLITE_FCNTL_SYNC](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlsync)
-  [SQLITE_FCNTL_SYNC_OMITTED](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlsyncomitted)
-  [SQLITE_FCNTL_TEMPFILENAME](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntltempfilename)
-  [SQLITE_FCNTL_TRACE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntltrace)
-  [SQLITE_FCNTL_VFS_POINTER](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlvfspointer)
-  [SQLITE_FCNTL_VFSNAME](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlvfsname)
-  [SQLITE_FCNTL_WAL_BLOCK](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlwalblock)
-  [SQLITE_FCNTL_WIN32_AV_RETRY](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlwin32avretry)
-  [SQLITE_FCNTL_WIN32_GET_HANDLE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlwin32gethandle)
-  [SQLITE_FCNTL_WIN32_SET_HANDLE](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlwin32sethandle)
-  [SQLITE_FCNTL_ZIPVFS](https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlzipvfs)
-  [SQLITE_FLOAT](https://www.sqlite.org/c3ref/c_blob.html)
-  [SQLITE_FORMAT](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_FTS3_MAX_EXPR_DEPTH](https://www.sqlite.org/compile.html#fts3_max_expr_depth)
-  [SQLITE_FULL](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_FUNCTION](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_HAVE_ISNAN](https://www.sqlite.org/compile.html#have_isnan)
-  [SQLITE_HAVE_ZLIB](https://www.sqlite.org/compile.html#have_zlib)
-  [SQLITE_IGNORE](https://www.sqlite.org/c3ref/c_deny.html)
-  [SQLITE_INDEX_CONSTRAINT_EQ](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_FUNCTION](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_GE](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_GLOB](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_GT](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_IS](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_ISNOT](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_ISNOTNULL](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_ISNULL](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_LE](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_LIKE](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_LIMIT](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_LT](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_MATCH](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_NE](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_OFFSET](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_CONSTRAINT_REGEXP](https://www.sqlite.org/c3ref/c_index_constraint_eq.html)
-  [SQLITE_INDEX_SCAN_UNIQUE](https://www.sqlite.org/c3ref/c_index_scan_unique.html)
-  [SQLITE_INNOCUOUS](https://www.sqlite.org/c3ref/c_deterministic.html#sqliteinnocuous)
-  [SQLITE_INSERT](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [sqlite_int64](https://www.sqlite.org/c3ref/int64.html)
-  [SQLITE_INTEGER](https://www.sqlite.org/c3ref/c_blob.html)
-  [SQLITE_INTERNAL](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_INTERRUPT](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_INTROSPECTION_PRAGMAS](https://www.sqlite.org/compile.html#introspection_pragmas)
-  [SQLITE_IOCAP_ATOMIC](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_ATOMIC16K](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_ATOMIC1K](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_ATOMIC2K](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_ATOMIC32K](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_ATOMIC4K](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_ATOMIC512](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_ATOMIC64K](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_ATOMIC8K](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_BATCH_ATOMIC](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_IMMUTABLE](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_POWERSAFE_OVERWRITE](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_SAFE_APPEND](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_SEQUENTIAL](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN](https://www.sqlite.org/c3ref/c_iocap_atomic.html)
-  [SQLITE_IOERR](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_IOERR_ACCESS](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_AUTH](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_BEGIN_ATOMIC](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_BLOCKED](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_CHECKRESERVEDLOCK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_CLOSE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_COMMIT_ATOMIC](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_CONVPATH](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_CORRUPTFS](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_DATA](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_DELETE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_DELETE_NOENT](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_DIR_CLOSE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_DIR_FSYNC](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_FSTAT](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_FSYNC](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_GETTEMPPATH](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_IN_PAGE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_LOCK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_MMAP](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_NOMEM](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_RDLOCK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_READ](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_ROLLBACK_ATOMIC](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_SEEK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_SHMLOCK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_SHMMAP](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_SHMOPEN](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_SHMSIZE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_SHORT_READ](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_TRUNCATE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_UNLOCK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_VNODE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_IOERR_WRITE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_JSON_MAX_DEPTH](https://www.sqlite.org/compile.html#json_max_depth)
-  [SQLITE_LIKE_DOESNT_MATCH_BLOBS](https://www.sqlite.org/compile.html#like_doesnt_match_blobs)
-  [SQLITE_LIMIT_ATTACHED](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitattached)
-  [SQLITE_LIMIT_COLUMN](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitcolumn)
-  [SQLITE_LIMIT_COMPOUND_SELECT](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitcompoundselect)
-  [SQLITE_LIMIT_EXPR_DEPTH](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitexprdepth)
-  [SQLITE_LIMIT_FUNCTION_ARG](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitfunctionarg)
-  [SQLITE_LIMIT_LENGTH](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitlength)
-  [SQLITE_LIMIT_LIKE_PATTERN_LENGTH](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitlikepatternlength)
-  [SQLITE_LIMIT_SQL_LENGTH](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitsqllength)
-  [SQLITE_LIMIT_TRIGGER_DEPTH](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimittriggerdepth)
-  [SQLITE_LIMIT_VARIABLE_NUMBER](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitvariablenumber)
-  [SQLITE_LIMIT_VDBE_OP](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitvdbeop)
-  [SQLITE_LIMIT_WORKER_THREADS](https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitworkerthreads)
-  [SQLITE_LOCK_EXCLUSIVE](https://www.sqlite.org/c3ref/c_lock_exclusive.html)
-  [SQLITE_LOCK_NONE](https://www.sqlite.org/c3ref/c_lock_exclusive.html)
-  [SQLITE_LOCK_PENDING](https://www.sqlite.org/c3ref/c_lock_exclusive.html)
-  [SQLITE_LOCK_RESERVED](https://www.sqlite.org/c3ref/c_lock_exclusive.html)
-  [SQLITE_LOCK_SHARED](https://www.sqlite.org/c3ref/c_lock_exclusive.html)
-  [SQLITE_LOCKED](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_LOCKED_SHAREDCACHE](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_LOCKED_VTAB](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [sqlite_master table](https://www.sqlite.org/schematab.html)
-  [SQLITE_MAX_ALLOCATION_SIZE](https://www.sqlite.org/compile.html#max_allocation_size)
-  [SQLITE_MAX_ATTACHED](https://www.sqlite.org/limits.html#max_attached)
-  [SQLITE_MAX_COLUMN](https://www.sqlite.org/limits.html#max_column)
-  [SQLITE_MAX_COMPOUND_SELECT](https://www.sqlite.org/limits.html#max_compound_select)
-  [SQLITE_MAX_EXPR_DEPTH](https://www.sqlite.org/limits.html#max_expr_depth)
-  [SQLITE_MAX_FUNCTION_ARG](https://www.sqlite.org/limits.html#max_function_arg)
-  [SQLITE_MAX_LENGTH](https://www.sqlite.org/limits.html#max_length)
-  [SQLITE_MAX_LIKE_PATTERN_LENGTH](https://www.sqlite.org/limits.html#max_like_pattern_length)
-  [SQLITE_MAX_MEMORY](https://www.sqlite.org/compile.html#max_memory)
-  [SQLITE_MAX_MMAP_SIZE](https://www.sqlite.org/compile.html#max_mmap_size)
-  [SQLITE_MAX_PAGE_COUNT](https://www.sqlite.org/limits.html#max_page_count)
-  [SQLITE_MAX_SCHEMA_RETRY](https://www.sqlite.org/compile.html#max_schema_retry)
-  [SQLITE_MAX_SQL_LENGTH](https://www.sqlite.org/limits.html#max_sql_length)
-  [SQLITE_MAX_TRIGGER_DEPTH](https://www.sqlite.org/limits.html#max_trigger_depth)
-  [SQLITE_MAX_VARIABLE_NUMBER](https://www.sqlite.org/limits.html#max_variable_number)
-  [SQLITE_MAX_WORKER_THREADS](https://www.sqlite.org/compile.html#max_worker_threads)
-  [SQLITE_MEMDB_DEFAULT_MAXSIZE](https://www.sqlite.org/compile.html#memdb_default_maxsize)
-  [SQLITE_MEMDEBUG](https://www.sqlite.org/compile.html#memdebug)
-  [sqlite_memstat](https://www.sqlite.org/memstat.html)
-  [SQLITE_MEMSTAT virtual table](https://www.sqlite.org/memstat.html)
-  [SQLITE_MINIMUM_FILE_DESCRIPTOR](https://www.sqlite.org/compile.html#minimum_file_descriptor)
-  [SQLITE_MISMATCH](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_MISUSE](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_MUTEX_FAST](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_RECURSIVE](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_APP1](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_APP2](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_APP3](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_LRU](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_LRU2](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_MAIN](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_MEM](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_MEM2](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_OPEN](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_PMEM](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_PRNG](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_VFS1](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_VFS2](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_MUTEX_STATIC_VFS3](https://www.sqlite.org/c3ref/c_mutex_fast.html)
-  [SQLITE_NOLFS](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_NOMEM](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_NOTADB](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_NOTFOUND](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_NOTICE](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_NOTICE_RBU](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_NOTICE_RECOVER_ROLLBACK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_NOTICE_RECOVER_WAL](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_NULL](https://www.sqlite.org/c3ref/c_blob.html)
-  [sqlite_offset() SQL function](https://www.sqlite.org/lang_corefunc.html#sqlite_offset)
-  [SQLITE_OK](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_OK_LOAD_PERMANENTLY](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_OK_SYMLINK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_OMIT_ALTERTABLE](https://www.sqlite.org/compile.html#omit_altertable)
-  [SQLITE_OMIT_ANALYZE](https://www.sqlite.org/compile.html#omit_analyze)
-  [SQLITE_OMIT_ATTACH](https://www.sqlite.org/compile.html#omit_attach)
-  [SQLITE_OMIT_AUTHORIZATION](https://www.sqlite.org/compile.html#omit_authorization)
-  [SQLITE_OMIT_AUTOINCREMENT](https://www.sqlite.org/compile.html#omit_autoincrement)
-  [SQLITE_OMIT_AUTOINIT](https://www.sqlite.org/compile.html#omit_autoinit)
-  [SQLITE_OMIT_AUTOMATIC_INDEX](https://www.sqlite.org/compile.html#omit_automatic_index)
-  [SQLITE_OMIT_AUTORESET](https://www.sqlite.org/compile.html#omit_autoreset)
-  [SQLITE_OMIT_AUTOVACUUM](https://www.sqlite.org/compile.html#omit_autovacuum)
-  [SQLITE_OMIT_BETWEEN_OPTIMIZATION](https://www.sqlite.org/compile.html#omit_between_optimization)
-  [SQLITE_OMIT_BLOB_LITERAL](https://www.sqlite.org/compile.html#omit_blob_literal)
-  [SQLITE_OMIT_BTREECOUNT](https://www.sqlite.org/compile.html#omit_btreecount)
-  [SQLITE_OMIT_BUILTIN_TEST](https://www.sqlite.org/compile.html#omit_builtin_test)
-  [SQLITE_OMIT_CASE_SENSITIVE_LIKE_PRAGMA](https://www.sqlite.org/compile.html#omit_case_sensitive_like_pragma)
-  [SQLITE_OMIT_CAST](https://www.sqlite.org/compile.html#omit_cast)
-  [SQLITE_OMIT_CHECK](https://www.sqlite.org/compile.html#omit_check)
-  [SQLITE_OMIT_COMPILEOPTION_DIAGS](https://www.sqlite.org/compile.html#omit_compileoption_diags)
-  [SQLITE_OMIT_COMPLETE](https://www.sqlite.org/compile.html#omit_complete)
-  [SQLITE_OMIT_COMPOUND_SELECT](https://www.sqlite.org/compile.html#omit_compound_select)
-  [SQLITE_OMIT_CTE](https://www.sqlite.org/compile.html#omit_cte)
-  [SQLITE_OMIT_DATETIME_FUNCS](https://www.sqlite.org/compile.html#omit_datetime_funcs)
-  [SQLITE_OMIT_DECLTYPE](https://www.sqlite.org/compile.html#omit_decltype)
-  [SQLITE_OMIT_DEPRECATED](https://www.sqlite.org/compile.html#omit_deprecated)
-  [SQLITE_OMIT_DESERIALIZE](https://www.sqlite.org/compile.html#omit_deserialize)
-  [SQLITE_OMIT_DISKIO](https://www.sqlite.org/compile.html#omit_diskio)
-  [SQLITE_OMIT_EXPLAIN](https://www.sqlite.org/compile.html#omit_explain)
-  [SQLITE_OMIT_FLAG_PRAGMAS](https://www.sqlite.org/compile.html#omit_flag_pragmas)
-  [SQLITE_OMIT_FLOATING_POINT](https://www.sqlite.org/compile.html#omit_floating_point)
-  [SQLITE_OMIT_FOREIGN_KEY](https://www.sqlite.org/compile.html#omit_foreign_key)
-  [SQLITE_OMIT_GENERATED_COLUMNS](https://www.sqlite.org/compile.html#omit_generated_columns)
-  [SQLITE_OMIT_GET_TABLE](https://www.sqlite.org/compile.html#omit_get_table)
-  [SQLITE_OMIT_HEX_INTEGER](https://www.sqlite.org/compile.html#omit_hex_integer)
-  [SQLITE_OMIT_INCRBLOB](https://www.sqlite.org/compile.html#omit_incrblob)
-  [SQLITE_OMIT_INTEGRITY_CHECK](https://www.sqlite.org/compile.html#omit_integrity_check)
-  [SQLITE_OMIT_INTROSPECTION_PRAGMAS](https://www.sqlite.org/compile.html#omit_introspection_pragmas)
-  [SQLITE_OMIT_JSON](https://www.sqlite.org/compile.html#omit_json)
-  [SQLITE_OMIT_LIKE_OPTIMIZATION](https://www.sqlite.org/compile.html#omit_like_optimization)
-  [SQLITE_OMIT_LOAD_EXTENSION](https://www.sqlite.org/compile.html#omit_load_extension)
-  [SQLITE_OMIT_LOCALTIME](https://www.sqlite.org/compile.html#omit_localtime)
-  [SQLITE_OMIT_LOOKASIDE](https://www.sqlite.org/compile.html#omit_lookaside)
-  [SQLITE_OMIT_MEMORYDB](https://www.sqlite.org/compile.html#omit_memorydb)
-  [SQLITE_OMIT_OR_OPTIMIZATION](https://www.sqlite.org/compile.html#omit_or_optimization)
-  [SQLITE_OMIT_PAGER_PRAGMAS](https://www.sqlite.org/compile.html#omit_pager_pragmas)
-  [SQLITE_OMIT_PRAGMA](https://www.sqlite.org/compile.html#omit_pragma)
-  [SQLITE_OMIT_PROGRESS_CALLBACK](https://www.sqlite.org/compile.html#omit_progress_callback)
-  [SQLITE_OMIT_QUICKBALANCE](https://www.sqlite.org/compile.html#omit_quickbalance)
-  [SQLITE_OMIT_REINDEX](https://www.sqlite.org/compile.html#omit_reindex)
-  [SQLITE_OMIT_SCHEMA_PRAGMAS](https://www.sqlite.org/compile.html#omit_schema_pragmas)
-  [SQLITE_OMIT_SCHEMA_VERSION_PRAGMAS](https://www.sqlite.org/compile.html#omit_schema_version_pragmas)
-  [SQLITE_OMIT_SHARED_CACHE](https://www.sqlite.org/compile.html#omit_shared_cache)
-  [SQLITE_OMIT_SUBQUERY](https://www.sqlite.org/compile.html#omit_subquery)
-  [SQLITE_OMIT_TCL_VARIABLE](https://www.sqlite.org/compile.html#omit_tcl_variable)
-  [SQLITE_OMIT_TEMPDB](https://www.sqlite.org/compile.html#omit_tempdb)
-  [SQLITE_OMIT_TRACE](https://www.sqlite.org/compile.html#omit_trace)
-  [SQLITE_OMIT_TRIGGER](https://www.sqlite.org/compile.html#omit_trigger)
-  [SQLITE_OMIT_TRUNCATE_OPTIMIZATION](https://www.sqlite.org/compile.html#omit_truncate_optimization)
-  [SQLITE_OMIT_UTF16](https://www.sqlite.org/compile.html#omit_utf16)
-  [SQLITE_OMIT_VACUUM](https://www.sqlite.org/compile.html#omit_vacuum)
-  [SQLITE_OMIT_VIEW](https://www.sqlite.org/compile.html#omit_view)
-  [SQLITE_OMIT_VIRTUALTABLE](https://www.sqlite.org/compile.html#omit_virtualtable)
-  [SQLITE_OMIT_WAL](https://www.sqlite.org/compile.html#omit_wal)
-  [SQLITE_OMIT_WINDOWFUNC](https://www.sqlite.org/compile.html#omit_windowfunc)
-  [SQLITE_OMIT_WSD](https://www.sqlite.org/compile.html#omit_wsd)
-  [SQLITE_OMIT_XFER_OPT](https://www.sqlite.org/compile.html#omit_xfer_opt)
-  [SQLITE_OPEN_AUTOPROXY](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_CREATE](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_DELETEONCLOSE](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_EXCLUSIVE](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_EXRESCODE](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_FULLMUTEX](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_MAIN_DB](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_MAIN_JOURNAL](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_MEMORY](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_NOFOLLOW](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_NOMUTEX](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_PRIVATECACHE](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_READONLY](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_READWRITE](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_SHAREDCACHE](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_SUBJOURNAL](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_SUPER_JOURNAL](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_TEMP_DB](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_TEMP_JOURNAL](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_TRANSIENT_DB](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_URI](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OPEN_WAL](https://www.sqlite.org/c3ref/c_open_autoproxy.html)
-  [SQLITE_OS_OTHER](https://www.sqlite.org/compile.html#os_other)
-  [SQLITE_PERM](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_POWERSAFE_OVERWRITE](https://www.sqlite.org/compile.html#powersafe_overwrite)
-  [SQLITE_PRAGMA](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_PREPARE_NO_VTAB](https://www.sqlite.org/c3ref/c_prepare_normalize.html#sqlitepreparenovtab)
-  [SQLITE_PREPARE_NORMALIZE](https://www.sqlite.org/c3ref/c_prepare_normalize.html#sqlitepreparenormalize)
-  [SQLITE_PREPARE_PERSISTENT](https://www.sqlite.org/c3ref/c_prepare_normalize.html#sqlitepreparepersistent)
-  [SQLITE_PRINTF_PRECISION_LIMIT](https://www.sqlite.org/compile.html#printf_precision_limit)
-  [SQLITE_PROTOCOL](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_QUERY_PLANNER_LIMIT](https://www.sqlite.org/compile.html#query_planner_limit)
-  [SQLITE_QUERY_PLANNER_LIMIT_INCR](https://www.sqlite.org/compile.html#query_planner_limit_incr)
-  [SQLITE_RANGE](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_READ](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_READONLY](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_READONLY_CANTINIT](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_READONLY_CANTLOCK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_READONLY_DBMOVED](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_READONLY_DIRECTORY](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_READONLY_RECOVERY](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_READONLY_ROLLBACK](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_RECURSIVE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_REINDEX](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_REPLACE](https://www.sqlite.org/c3ref/c_fail.html)
-  [SQLITE_RESULT_SUBTYPE](https://www.sqlite.org/c3ref/c_deterministic.html#sqliteresultsubtype)
-  [SQLITE_REVERSE_UNORDERED_SELECTS](https://www.sqlite.org/compile.html#reverse_unordered_selects)
-  [SQLITE_ROLLBACK](https://www.sqlite.org/c3ref/c_fail.html)
-  [SQLITE_ROW](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_RTREE_INT_ONLY](https://www.sqlite.org/compile.html#rtree_int_only)
-  [SQLITE_SAVEPOINT](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_SCANSTAT_COMPLEX](https://www.sqlite.org/c3ref/c_scanstat_complex.html)
-  [SQLITE_SCANSTAT_EST](https://www.sqlite.org/c3ref/c_scanstat_est.html#sqlitescanstatest)
-  [SQLITE_SCANSTAT_EXPLAIN](https://www.sqlite.org/c3ref/c_scanstat_est.html#sqlitescanstatexplain)
-  [SQLITE_SCANSTAT_NAME](https://www.sqlite.org/c3ref/c_scanstat_est.html#sqlitescanstatname)
-  [SQLITE_SCANSTAT_NCYCLE](https://www.sqlite.org/c3ref/c_scanstat_est.html#sqlitescanstatncycle)
-  [SQLITE_SCANSTAT_NLOOP](https://www.sqlite.org/c3ref/c_scanstat_est.html#sqlitescanstatnloop)
-  [SQLITE_SCANSTAT_NVISIT](https://www.sqlite.org/c3ref/c_scanstat_est.html#sqlitescanstatnvisit)
-  [SQLITE_SCANSTAT_PARENTID](https://www.sqlite.org/c3ref/c_scanstat_est.html#sqlitescanstatparentid)
-  [SQLITE_SCANSTAT_SELECTID](https://www.sqlite.org/c3ref/c_scanstat_est.html#sqlitescanstatselectid)
-  [SQLITE_SCHEMA](https://www.sqlite.org/c3ref/c_abort.html)
-  [sqlite_schema table](https://www.sqlite.org/schematab.html)
-  [SQLITE_SECURE_DELETE](https://www.sqlite.org/compile.html#secure_delete)
-  [SQLITE_SELECT](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [sqlite_sequence](https://www.sqlite.org/fileformat2.html#seqtab)
-  [SQLITE_SERIALIZE_NOCOPY](https://www.sqlite.org/c3ref/c_serialize_nocopy.html)
-  [SQLITE_SESSION_CONFIG_STRMSIZE](https://www.sqlite.org/session/c_session_config_strmsize.html)
-  [SQLITE_SESSION_OBJCONFIG_ROWID](https://www.sqlite.org/session/c_session_objconfig_rowid.html)
-  [SQLITE_SESSION_OBJCONFIG_SIZE](https://www.sqlite.org/session/c_session_objconfig_rowid.html)
-  [SQLITE_SHM_EXCLUSIVE](https://www.sqlite.org/c3ref/c_shm_exclusive.html)
-  [SQLITE_SHM_LOCK](https://www.sqlite.org/c3ref/c_shm_exclusive.html)
-  [SQLITE_SHM_NLOCK](https://www.sqlite.org/c3ref/c_shm_nlock.html)
-  [SQLITE_SHM_SHARED](https://www.sqlite.org/c3ref/c_shm_exclusive.html)
-  [SQLITE_SHM_UNLOCK](https://www.sqlite.org/c3ref/c_shm_exclusive.html)
-  [SQLITE_SORTER_PMASZ](https://www.sqlite.org/compile.html#sorter_pmasz)
-  [SQLITE_SOUNDEX](https://www.sqlite.org/compile.html#soundex)
-  [SQLITE_SOURCE_ID](https://www.sqlite.org/c3ref/c_source_id.html)
-  [sqlite_source_id() SQL function](https://www.sqlite.org/lang_corefunc.html#sqlite_source_id)
-  [sqlite_stat1](https://www.sqlite.org/fileformat2.html#stat1tab)
-  [sqlite_stat2](https://www.sqlite.org/fileformat2.html#stat2tab)
-  [sqlite_stat3](https://www.sqlite.org/fileformat2.html#stat3tab)
-  [sqlite_stat4](https://www.sqlite.org/fileformat2.html#stat4tab)
-  [SQLITE_STATIC](https://www.sqlite.org/c3ref/c_static.html)
-  [SQLITE_STATUS_MALLOC_COUNT](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatusmalloccount)
-  [SQLITE_STATUS_MALLOC_SIZE](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatusmallocsize)
-  [SQLITE_STATUS_MEMORY_USED](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatusmemoryused)
-  [SQLITE_STATUS_PAGECACHE_OVERFLOW](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatuspagecacheoverflow)
-  [SQLITE_STATUS_PAGECACHE_SIZE](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatuspagecachesize)
-  [SQLITE_STATUS_PAGECACHE_USED](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatuspagecacheused)
-  [SQLITE_STATUS_PARSER_STACK](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatusparserstack)
-  [SQLITE_STATUS_SCRATCH_OVERFLOW](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatusscratchoverflow)
-  [SQLITE_STATUS_SCRATCH_SIZE](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatusscratchsize)
-  [SQLITE_STATUS_SCRATCH_USED](https://www.sqlite.org/c3ref/c_status_malloc_count.html#sqlitestatusscratchused)
-  [SQLITE_STDCALL](https://www.sqlite.org/compile.html#stdcall)
-  [sqlite_stmt](https://www.sqlite.org/stmt.html)
-  [SQLITE_STMT virtual table](https://www.sqlite.org/stmt.html)
-  [SQLITE_STMTJRNL_SPILL](https://www.sqlite.org/compile.html#stmtjrnl_spill)
-  [SQLITE_STMTSTATUS counter](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html)
-  [SQLITE_STMTSTATUS_AUTOINDEX](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatusautoindex)
-  [SQLITE_STMTSTATUS_FILTER HIT](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatusfilterhit)
-  [SQLITE_STMTSTATUS_FILTER_HIT](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html)
-  [SQLITE_STMTSTATUS_FILTER_MISS](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatusfiltermiss)
-  [SQLITE_STMTSTATUS_FULLSCAN_STEP](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatusfullscanstep)
-  [SQLITE_STMTSTATUS_MEMUSED](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatusmemused)
-  [SQLITE_STMTSTATUS_REPREPARE](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatusreprepare)
-  [SQLITE_STMTSTATUS_RUN](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatusrun)
-  [SQLITE_STMTSTATUS_SORT](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatussort)
-  [SQLITE_STMTSTATUS_VM_STEP](https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatusvmstep)
-  [SQLITE_STRICT_SUBTYPE](https://www.sqlite.org/compile.html#strict_subtype)
-  [SQLITE_SUBTYPE](https://www.sqlite.org/c3ref/c_deterministic.html#sqlitesubtype)
-  [SQLITE_SYNC_DATAONLY](https://www.sqlite.org/c3ref/c_sync_dataonly.html)
-  [SQLITE_SYNC_FULL](https://www.sqlite.org/c3ref/c_sync_dataonly.html)
-  [SQLITE_SYNC_NORMAL](https://www.sqlite.org/c3ref/c_sync_dataonly.html)
-  [SQLITE_SYSAPI](https://www.sqlite.org/compile.html#sysapi)
-  [SQLITE_TCLAPI](https://www.sqlite.org/compile.html#tclapi)
-  [sqlite_temp_schema](https://www.sqlite.org/schematab.html)
-  [SQLITE_TEMP_STORE](https://www.sqlite.org/compile.html#temp_store)
-  [SQLITE_TESTCTRL_ALWAYS](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_ASSERT](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_BENIGN_MALLOC_HOOKS](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_BITVEC_TEST](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_BYTEORDER](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_EXPLAIN_STMT](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_EXTRA_SCHEMA_CHECKS](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_FAULT_INSTALL](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_FIRST](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_FK_NO_ACTION](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_IMPOSTER](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_INTERNAL_FUNCTIONS](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_ISINIT](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_ISKEYWORD](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_JSON_SELFCHECK](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_LAST](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_LOCALTIME_FAULT](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_LOGEST](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_NEVER_CORRUPT](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_ONCE_RESET_THRESHOLD](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_OPTIMIZATIONS](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_PARSER_COVERAGE](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_PENDING_BYTE](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_PRNG_RESET](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_PRNG_RESTORE](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_PRNG_SAVE](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_PRNG_SEED](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_RESERVE](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_RESULT_INTREAL](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_SCRATCHMALLOC](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_SEEK_COUNT](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_SORTER_MMAP](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_TRACEFLAGS](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_TUNE](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_USELONGDOUBLE](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TESTCTRL_VDBE_COVERAGE](https://www.sqlite.org/c3ref/c_testctrl_always.html)
-  [SQLITE_TEXT](https://www.sqlite.org/c3ref/c_blob.html)
-  [SQLITE_THREADSAFE](https://www.sqlite.org/compile.html#threadsafe)
-  [SQLITE_TOOBIG](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_TRACE](https://www.sqlite.org/c3ref/c_trace.html)
-  [SQLITE_TRACE_CLOSE](https://www.sqlite.org/c3ref/c_trace.html#sqlitetraceclose)
-  [SQLITE_TRACE_PROFILE](https://www.sqlite.org/c3ref/c_trace.html#sqlitetraceprofile)
-  [SQLITE_TRACE_ROW](https://www.sqlite.org/c3ref/c_trace.html#sqlitetracerow)
-  [SQLITE_TRACE_SIZE_LIMIT](https://www.sqlite.org/compile.html#trace_size_limit)
-  [SQLITE_TRACE_STMT](https://www.sqlite.org/c3ref/c_trace.html#sqlitetracestmt)
-  [SQLITE_TRANSACTION](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_TRANSIENT](https://www.sqlite.org/c3ref/c_static.html)
-  [SQLITE_TRUSTED_SCHEMA](https://www.sqlite.org/compile.html#trusted_schema)
-  [SQLITE_TXN_NONE](https://www.sqlite.org/c3ref/c_txn_none.html#sqlitetxnnone)
-  [SQLITE_TXN_READ](https://www.sqlite.org/c3ref/c_txn_none.html#sqlitetxnread)
-  [SQLITE_TXN_WRITE](https://www.sqlite.org/c3ref/c_txn_none.html#sqlitetxnwrite)
-  [sqlite_uint64](https://www.sqlite.org/c3ref/int64.html)
-  [SQLITE_UNTESTABLE](https://www.sqlite.org/compile.html#untestable)
-  [SQLITE_UPDATE](https://www.sqlite.org/c3ref/c_alter_table.html)
-  [SQLITE_USE_ALLOCA](https://www.sqlite.org/compile.html#use_alloca)
-  [SQLITE_USE_FCNTL_TRACE](https://www.sqlite.org/compile.html#use_fcntl_trace)
-  [SQLITE_USE_SEH](https://www.sqlite.org/compile.html#use_seh)
-  [SQLITE_USE_URI](https://www.sqlite.org/compile.html#use_uri)
-  [SQLITE_UTF16](https://www.sqlite.org/c3ref/c_any.html)
-  [SQLITE_UTF16_ALIGNED](https://www.sqlite.org/c3ref/c_any.html)
-  [SQLITE_UTF16BE](https://www.sqlite.org/c3ref/c_any.html)
-  [SQLITE_UTF16LE](https://www.sqlite.org/c3ref/c_any.html)
-  [SQLITE_UTF8](https://www.sqlite.org/c3ref/c_any.html)
-  [SQLITE_VERSION](https://www.sqlite.org/c3ref/c_source_id.html)
-  [sqlite_version() SQL function](https://www.sqlite.org/lang_corefunc.html#sqlite_version)
-  [SQLITE_VERSION_NUMBER](https://www.sqlite.org/c3ref/c_source_id.html)
-  [SQLITE_VTAB_CONSTRAINT_SUPPORT](https://www.sqlite.org/c3ref/c_vtab_constraint_support.html#sqlitevtabconstraintsupport)
-  [SQLITE_VTAB_DIRECTONLY](https://www.sqlite.org/c3ref/c_vtab_constraint_support.html#sqlitevtabdirectonly)
-  [SQLITE_VTAB_INNOCUOUS](https://www.sqlite.org/c3ref/c_vtab_constraint_support.html#sqlitevtabinnocuous)
-  [SQLITE_VTAB_USES_ALL_SCHEMAS](https://www.sqlite.org/c3ref/c_vtab_constraint_support.html#sqlitevtabusesallschemas)
-  [SQLITE_WARNING](https://www.sqlite.org/c3ref/c_abort.html)
-  [SQLITE_WARNING_AUTOINDEX](https://www.sqlite.org/c3ref/c_abort_rollback.html)
-  [SQLITE_WIN32_DATA_DIRECTORY_TYPE](https://www.sqlite.org/c3ref/c_win32_data_directory_type.html)
-  [SQLITE_WIN32_HEAP_CREATE](https://www.sqlite.org/compile.html#win32_heap_create)
-  [SQLITE_WIN32_MALLOC](https://www.sqlite.org/compile.html#win32_malloc)
-  [SQLITE_WIN32_MALLOC_VALIDATE](https://www.sqlite.org/compile.html#win32_malloc_validate)
-  [SQLITE_WIN32_TEMP_DIRECTORY_TYPE](https://www.sqlite.org/c3ref/c_win32_data_directory_type.html)
-  [SQLITE_ZERO_MALLOC](https://www.sqlite.org/compile.html#zero_malloc)
-  [sqrt() SQL function](https://www.sqlite.org/lang_mathfunc.html#sqrt)
-  [stale file descriptor](https://www.sqlite.org/howtocorrupt.html#stalefd)
-  [standard query parameters](https://www.sqlite.org/uri.html#coreqp)
-  [statement journal](https://www.sqlite.org/tempfiles.html#stmtjrnl)
-  [static ANALYZE results](https://www.sqlite.org/lang_analyze.html#statanal)
-  [statically linked extensions](https://www.sqlite.org/loadext.html#statext)
-  [stats pragma](https://www.sqlite.org/pragma.html#pragma_stats)
-  [status method](https://www.sqlite.org/tclsqlite.html#status)
-  [status parameters](https://www.sqlite.org/c3ref/c_status_malloc_count.html)
-  [storage class](https://www.sqlite.org/datatype3.html#storageclasses)
-  [strategies](https://www.sqlite.org/queryplanner.html#searching)
-  [strftime()](https://www.sqlite.org/lang_datefunc.html#strftm)
-  [strftime() SQL function](https://www.sqlite.org/lang_datefunc.html#strftm)
-  [STRICT](https://www.sqlite.org/stricttables.html)
-  [STRICT table](https://www.sqlite.org/stricttables.html)
-  [strict type checking](https://www.sqlite.org/stricttables.html)
-  [string_agg](https://www.sqlite.org/lang_aggfunc.html#group_concat)
-  [string_agg() aggregate function](https://www.sqlite.org/lang_aggfunc.html#group_concat)
-  [subprograms](https://www.sqlite.org/opcode.html#subprog)
-  [Subqueries](https://www.sqlite.org/lang_expr.html#subq)
-  [subquery co-routines](https://www.sqlite.org/optoverview.html#coroutines)
-  [subsec modifier](https://www.sqlite.org/lang_datefunc.html#subsec)
-  [subsecond modifier](https://www.sqlite.org/lang_datefunc.html#subsec)
-  [substr() SQL function](https://www.sqlite.org/lang_corefunc.html#substr)
-  [sum() aggregate function](https://www.sqlite.org/lang_aggfunc.html#sumunc)
-  [super-journal](https://www.sqlite.org/tempfiles.html#superjrnl)
-  [swarmvtab](https://www.sqlite.org/swarmvtab.html#overview)
-  [swarmvtab context](https://www.sqlite.org/swarmvtab.html#component_table_context_values)
-  [synchronous pragma](https://www.sqlite.org/pragma.html#pragma_synchronous)
-  [syntax diagrams](https://www.sqlite.org/syntaxdiagrams.html)
-  [table b-tree](https://www.sqlite.org/fileformat2.html#btypes)
-  [table data format](https://www.sqlite.org/fileformat2.html##sqltab)
-  [table-constraint](https://www.sqlite.org/syntax/table-constraint.html)
-  [table-constraint syntax diagram](https://www.sqlite.org/syntax/table-constraint.html)
-  [table-options](https://www.sqlite.org/syntax/table-options.html)
-  [table-options syntax diagram](https://www.sqlite.org/syntax/table-options.html)
-  [table-or-subquery](https://www.sqlite.org/syntax/table-or-subquery.html)
-  [table-or-subquery syntax diagram](https://www.sqlite.org/syntax/table-or-subquery.html)
-  [table-valued function](https://www.sqlite.org/vtab.html#tabfunc2)
-  [table-valued functions in the FROM clause](https://www.sqlite.org/lang_select.html#tabfunc1)
-  [table_info pragma](https://www.sqlite.org/pragma.html#pragma_table_info)
-  [table_list pragma](https://www.sqlite.org/pragma.html#pragma_table_list)
-  [table_xinfo pragma](https://www.sqlite.org/pragma.html#pragma_table_xinfo)
-  [.tables](https://www.sqlite.org/cli.html#dtables)
-  [tables_used virtual table](https://www.sqlite.org/bytecodevtab.html)
-  [tan() SQL function](https://www.sqlite.org/lang_mathfunc.html#tan)
-  [tanh() SQL function](https://www.sqlite.org/lang_mathfunc.html#tanh)
-  [Tcl extension](https://www.sqlite.org/tclsqlite.html)
-  [TCL Interface](https://www.sqlite.org/tclsqlite.html)
-  [TCL interface authorizer method](https://www.sqlite.org/tclsqlite.html#authorizer)
-  [TCL interface backup method](https://www.sqlite.org/tclsqlite.html#backup)
-  [TCL interface bind_fallback method](https://www.sqlite.org/tclsqlite.html#bind_fallback)
-  [TCL interface busy method](https://www.sqlite.org/tclsqlite.html#busy)
-  [TCL interface cache method](https://www.sqlite.org/tclsqlite.html#cache)
-  [TCL interface changes method](https://www.sqlite.org/tclsqlite.html#changes)
-  [TCL interface close method](https://www.sqlite.org/tclsqlite.html#close)
-  [TCL interface collate method](https://www.sqlite.org/tclsqlite.html#collate)
-  [TCL interface collation_needed method](https://www.sqlite.org/tclsqlite.html#collation_needed)
-  [TCL interface commit_hook method](https://www.sqlite.org/tclsqlite.html#commit_hook)
-  [TCL interface complete method](https://www.sqlite.org/tclsqlite.html#complete)
-  [TCL interface config method](https://www.sqlite.org/tclsqlite.html#config)
-  [TCL interface copy method](https://www.sqlite.org/tclsqlite.html#copy)
-  [TCL interface deserialize method](https://www.sqlite.org/tclsqlite.html#deserialize)
-  [TCL interface enable_load_extension method](https://www.sqlite.org/tclsqlite.html#enable_load_extension)
-  [TCL interface errorcode method](https://www.sqlite.org/tclsqlite.html#errorcode)
-  [TCL interface eval method](https://www.sqlite.org/tclsqlite.html#eval)
-  [TCL interface exists method](https://www.sqlite.org/tclsqlite.html#exists)
-  [TCL interface function method](https://www.sqlite.org/tclsqlite.html#function)
-  [TCL interface incrblob method](https://www.sqlite.org/tclsqlite.html#incrblob)
-  [TCL interface interrupt method](https://www.sqlite.org/tclsqlite.html#interrupt)
-  [TCL interface last_insert_rowid method](https://www.sqlite.org/tclsqlite.html#last_insert_rowid)
-  [TCL interface nullvalue method](https://www.sqlite.org/tclsqlite.html#nullvalue)
-  [TCL interface onecolumn method](https://www.sqlite.org/tclsqlite.html#onecolumn)
-  [TCL interface preupdate method](https://www.sqlite.org/tclsqlite.html#preupdate)
-  [TCL interface profile method](https://www.sqlite.org/tclsqlite.html#profile)
-  [TCL interface progress method](https://www.sqlite.org/tclsqlite.html#progress)
-  [TCL interface restore method](https://www.sqlite.org/tclsqlite.html#restore)
-  [TCL interface rollback_hook method](https://www.sqlite.org/tclsqlite.html#rollback_hook)
-  [TCL interface serialize method](https://www.sqlite.org/tclsqlite.html#serialize)
-  [TCL interface status method](https://www.sqlite.org/tclsqlite.html#status)
-  [TCL interface timeout method](https://www.sqlite.org/tclsqlite.html#timeout)
-  [TCL interface total_changes method](https://www.sqlite.org/tclsqlite.html#total_changes)
-  [TCL interface trace method](https://www.sqlite.org/tclsqlite.html#trace)
-  [TCL interface trace_v2 method](https://www.sqlite.org/tclsqlite.html#trace_v2)
-  [TCL interface transaction method](https://www.sqlite.org/tclsqlite.html#transaction)
-  [TCL interface unlock_notify method](https://www.sqlite.org/tclsqlite.html#unlock_notify)
-  [TCL interface update_hook method](https://www.sqlite.org/tclsqlite.html#update_hook)
-  [TCL interface version method](https://www.sqlite.org/tclsqlite.html#version)
-  [TCL interface wal_hook method](https://www.sqlite.org/tclsqlite.html#wal_hook)
-  [TCL test suite](https://www.sqlite.org/testing.html#tcl)
-  [TCL variable substitution](https://www.sqlite.org/tclsqlite.html#varsubst)
-  [TEA tarball](https://www.sqlite.org/download.html#amalgtarball)
-  [TEMP triggers on non-TEMP tables](https://www.sqlite.org/lang_createtrigger.html#temptrig)
-  [temp_store pragma](https://www.sqlite.org/pragma.html#pragma_temp_store)
-  [temp_store_directory pragma](https://www.sqlite.org/pragma.html#pragma_temp_store_directory)
-  [temporary databases](https://www.sqlite.org/inmemorydb.html#temp_db)
-  [temporary directory search algorithm](https://www.sqlite.org/tempfiles.html#tempdir)
-  [temporary disk files](https://www.sqlite.org/tempfiles.html)
-  [temporary tables](https://www.sqlite.org/inmemorydb.html#temp_db)
-  [test coverage](https://www.sqlite.org/testing.html#coverage)
-  [test harness](https://www.sqlite.org/testing.html#harnesses)
-  [test suite](https://www.sqlite.org/testing.html)
-  [testcase macros](https://www.sqlite.org/testing.html#testcase)
-  [testing](https://www.sqlite.org/testing.html)
-  [text encoding](https://www.sqlite.org/fileformat2.html#enc)
-  [TH3](https://www.sqlite.org/th3.html)
-  [the -> and ->> operators](https://www.sqlite.org/json1.html#jptr)
-  [the -> operator](https://www.sqlite.org/json1.html#jptr)
-  [the .fullschema dot-command](https://www.sqlite.org/cli.html#fullschema)
-  [the amalgamation](https://www.sqlite.org/amalgamation.html)
-  [the ext3 barrier problem](https://www.sqlite.org/lockingv3.html#ext3-barrier-problem)
-  [The Fossil NGQP Upgrade Case Study](https://www.sqlite.org/queryplanner-ng.html#fossilcasestudy)
-  [the json1 extension](https://www.sqlite.org/json1.html)
-  [the SQLITE_DBPAGE extension](https://www.sqlite.org/dbpage.html)
-  [the SQLITE_MEMSTAT extension](https://www.sqlite.org/memstat.html)
-  [the SQLITE_STMT extension](https://www.sqlite.org/stmt.html)
-  [The Use Of assert() In SQLite](https://www.sqlite.org/assert.html)
-  [the xCachesize() page cache method](https://www.sqlite.org/c3ref/pcache_methods2.html#thexcachesizepagecachemethod)
-  [the xCreate() page cache methods](https://www.sqlite.org/c3ref/pcache_methods2.html#thexcreatepagecachemethods)
-  [the xDestroy() page cache method](https://www.sqlite.org/c3ref/pcache_methods2.html#thexdestroypagecachemethod)
-  [the xFetch() page cache methods](https://www.sqlite.org/c3ref/pcache_methods2.html#thexfetchpagecachemethods)
-  [the xInit() page cache method](https://www.sqlite.org/c3ref/pcache_methods2.html#thexinitpagecachemethod)
-  [the xPagecount() page cache methods](https://www.sqlite.org/c3ref/pcache_methods2.html#thexpagecountpagecachemethods)
-  [the xRekey() page cache methods](https://www.sqlite.org/c3ref/pcache_methods2.html#thexrekeypagecachemethods)
-  [the xShrink() page cache method](https://www.sqlite.org/c3ref/pcache_methods2.html#thexshrinkpagecachemethod)
-  [the xShutdown() page cache method](https://www.sqlite.org/c3ref/pcache_methods2.html#thexshutdownpagecachemethod)
-  [the xUnpin() page cache method](https://www.sqlite.org/c3ref/pcache_methods2.html#thexunpinpagecachemethod)
-  [Things That Can Go Wrong](https://www.sqlite.org/atomiccommit.html#sect_9_0)
-  [threading mode](https://www.sqlite.org/threadsafe.html)
-  [threads pragma](https://www.sqlite.org/pragma.html#pragma_threads)
-  [three test harnesses](https://www.sqlite.org/testing.html#harnesses)
-  [time shift modifiers](https://www.sqlite.org/lang_datefunc.html#tmshf)
-  [time value](https://www.sqlite.org/lang_datefunc.html#tmval)
-  [time()](https://www.sqlite.org/lang_datefunc.html#dttm)
-  [time() SQL function](https://www.sqlite.org/lang_datefunc.html#dttm)
-  [time-value](https://www.sqlite.org/lang_datefunc.html#tmval)
-  [timediff()](https://www.sqlite.org/lang_datefunc.html#tmdif)
-  [timediff() SQL function](https://www.sqlite.org/lang_datefunc.html#tmdif)
-  [timeout method](https://www.sqlite.org/tclsqlite.html#timeout)
-  [tokenizer](https://www.sqlite.org/fts3.html#tokenizer)
-  [torn page](https://www.sqlite.org/psow.html#tornpage)
-  [total() aggregate function](https://www.sqlite.org/lang_aggfunc.html#sumunc)
-  [total_changes method](https://www.sqlite.org/tclsqlite.html#total_changes)
-  [total_changes() SQL function](https://www.sqlite.org/lang_corefunc.html#total_changes)
-  [trace method](https://www.sqlite.org/tclsqlite.html#trace)
-  [trace_v2 method](https://www.sqlite.org/tclsqlite.html#trace_v2)
-  [transaction](https://www.sqlite.org/lang_transaction.html)
-  [transaction method](https://www.sqlite.org/tclsqlite.html#transaction)
-  [transaction state](https://www.sqlite.org/c3ref/c_txn_none.html)
-  [transactional](https://www.sqlite.org/transactional.html)
-  [treats the CROSS JOIN operator specially](https://www.sqlite.org/lang_select.html#crossjoin)
-  [trigger](https://www.sqlite.org/lang_createtrigger.html)
-  [trigram indexes](https://www.sqlite.org/fts5.html#trigramidx)
-  [trigram tokenizer](https://www.sqlite.org/fts5.html#trigramidx)
-  [trim() SQL function](https://www.sqlite.org/lang_corefunc.html#trim)
-  [trunc() SQL function](https://www.sqlite.org/lang_mathfunc.html#trunc)
-  [truncate optimization](https://www.sqlite.org/lang_delete.html#truncateopt)
-  [trusted_schema pragma](https://www.sqlite.org/pragma.html#pragma_trusted_schema)
-  [type affinity](https://www.sqlite.org/datatype3.html#affinity)
-  [type-name](https://www.sqlite.org/syntax/type-name.html)
-  [type-name syntax diagram](https://www.sqlite.org/syntax/type-name.html)
-  [typeof() SQL function](https://www.sqlite.org/lang_corefunc.html#typeof)
-  [UINT](https://www.sqlite.org/uintcseq.html)
-  [UINT collating sequence](https://www.sqlite.org/uintcseq.html)
-  [undefined BEFORE trigger behavior](https://www.sqlite.org/lang_createtrigger.html#undef_before)
-  [undo/redo](https://www.sqlite.org/undoredo.html)
-  [unhex() SQL function](https://www.sqlite.org/lang_corefunc.html#unhex)
-  [unicode() SQL function](https://www.sqlite.org/lang_corefunc.html#unicode)
-  [unicode61](https://www.sqlite.org/fts3.html#unicode61)
-  [Uniform Resource Identifier](https://www.sqlite.org/uri.html)
-  [unindexed](https://www.sqlite.org/fts5.html#the_unindexed_column_option)
-  [UNION virtual table](https://www.sqlite.org/unionvtab.html)
-  [union-vtab](https://www.sqlite.org/unionvtab.html)
-  [unionvtab](https://www.sqlite.org/unionvtab.html)
-  [UNIQUE](https://www.sqlite.org/lang_createtable.html#uniqueconst)
-  [unique constraint](https://www.sqlite.org/lang_createtable.html#uniqueconst)
-  [unique index](https://www.sqlite.org/lang_createindex.html#uniqueidx)
-  [unixepoch modifier](https://www.sqlite.org/lang_datefunc.html#jdmod)
-  [unixepoch()](https://www.sqlite.org/lang_datefunc.html#uepch)
-  [unixepoch() function](https://www.sqlite.org/lang_datefunc.html#uepch)
-  [unixepoch() SQL function](https://www.sqlite.org/lang_datefunc.html#uepch)
-  [unlikely() SQL function](https://www.sqlite.org/lang_corefunc.html#unlikely)
-  [unlink corruption](https://www.sqlite.org/howtocorrupt.html#unlink)
-  [unlinked database files](https://www.sqlite.org/howtocorrupt.html#unlink)
-  [unlock_notify method](https://www.sqlite.org/tclsqlite.html#unlock_notify)
-  [unprotected sqlite3_value](https://www.sqlite.org/c3ref/value.html)
-  [unsafe-testing command-line option](https://www.sqlite.org/cli.html#testing_mode)
-  [--unsafe-testing command-line option](https://www.sqlite.org/cli.html#testing_mode)
-  [untrusted database files](https://www.sqlite.org/security.html#baddb)
-  [UPDATE](https://www.sqlite.org/lang_update.html)
-  [UPDATE FROM](https://www.sqlite.org/lang_update.html#upfrom)
-  [--update option](https://www.sqlite.org/cli.html#arinsup)
-  [UPDATE trigger](https://www.sqlite.org/lang_createtrigger.html)
-  [update-stmt](https://www.sqlite.org/syntax/update-stmt.html)
-  [update-stmt syntax diagram](https://www.sqlite.org/syntax/update-stmt.html)
-  [update-stmt-limited](https://www.sqlite.org/syntax/update-stmt-limited.html)
-  [update-stmt-limited syntax diagram](https://www.sqlite.org/syntax/update-stmt-limited.html)
-  [update_hook method](https://www.sqlite.org/tclsqlite.html#update_hook)
-  [upper() SQL function](https://www.sqlite.org/lang_corefunc.html#upper)
-  [upsert clause](https://www.sqlite.org/lang_upsert.html)
-  [UPSERT parsing ambiguity](https://www.sqlite.org/lang_upsert.html#parseambig)
-  [upsert-clause](https://www.sqlite.org/syntax/upsert-clause.html)
-  [upsert-clause syntax diagram](https://www.sqlite.org/syntax/upsert-clause.html)
-  [URI](https://www.sqlite.org/uri.html)
-  [URI filename](https://www.sqlite.org/uri.html)
-  [URI filename examples](https://www.sqlite.org/c3ref/open.html#urifilenameexamples)
-  [URI filenames in sqlite3_open()](https://www.sqlite.org/c3ref/open.html#urifilenamesinsqlite3open)
-  [URI query parameters](https://www.sqlite.org/uri.html#coreqp)
-  [usable size](https://www.sqlite.org/fileformat2.html#usable_size)
-  [use of shared cache mode is discouraged](https://www.sqlite.org/sharedcache.html#dontuse)
-  [user-defined window functions](https://www.sqlite.org/windowfunctions.html#udfwinfunc)
-  [user_version pragma](https://www.sqlite.org/pragma.html#pragma_user_version)
-  [using SQLite for websites](https://www.sqlite.org/whentouse.html#website)
-  [Using the SQLite Online Backup API](https://www.sqlite.org/backup.html)
-  [Using the SQLite Unlock Notification Feature](https://www.sqlite.org/unlock_notify.html)
-  ['utc' and 'localtime' modifiers](https://www.sqlite.org/lang_datefunc.html#localtime)
-  ['utc' modifier](https://www.sqlite.org/lang_datefunc.html#localtime)
-  [vacuum](https://www.sqlite.org/lang_vacuum.html)
-  [VACUUM INTO](https://www.sqlite.org/lang_vacuum.html#vacuuminto)
-  [vacuum-stmt](https://www.sqlite.org/syntax/vacuum-stmt.html)
-  [vacuum-stmt syntax diagram](https://www.sqlite.org/syntax/vacuum-stmt.html)
-  [value argument](https://www.sqlite.org/json1.html#varg)
-  [VALUES](https://www.sqlite.org/lang_select.html#values)
-  [VALUES clause](https://www.sqlite.org/lang_select.html#values)
-  [variable-length integer](https://www.sqlite.org/fileformat2.html#varint)
-  [varint](https://www.sqlite.org/fileformat2.html#varint)
-  [VDBE](https://www.sqlite.org/opcode.html)
-  [vdbe_addoptrace pragma](https://www.sqlite.org/pragma.html#pragma_vdbe_addoptrace)
-  [vdbe_debug pragma](https://www.sqlite.org/pragma.html#pragma_vdbe_debug)
-  [vdbe_listing pragma](https://www.sqlite.org/pragma.html#pragma_vdbe_listing)
-  [vdbe_trace pragma](https://www.sqlite.org/pragma.html#pragma_vdbe_trace)
-  [vectors](https://www.sqlite.org/rowvalue.html)
-  [Version 3.0.0](https://www.sqlite.org/releaselog/3_0_0.html)
-  [Version 3.0.1](https://www.sqlite.org/releaselog/3_0_1.html)
-  [Version 3.0.2](https://www.sqlite.org/releaselog/3_0_2.html)
-  [Version 3.0.3](https://www.sqlite.org/releaselog/3_0_3.html)
-  [Version 3.0.4](https://www.sqlite.org/releaselog/3_0_4.html)
-  [Version 3.0.5](https://www.sqlite.org/releaselog/3_0_5.html)
-  [Version 3.0.6](https://www.sqlite.org/releaselog/3_0_6.html)
-  [Version 3.0.7](https://www.sqlite.org/releaselog/3_0_7.html)
-  [Version 3.0.8](https://www.sqlite.org/releaselog/3_0_8.html)
-  [Version 3.1.0](https://www.sqlite.org/releaselog/3_1_0.html)
-  [Version 3.1.1](https://www.sqlite.org/releaselog/3_1_1.html)
-  [Version 3.1.2](https://www.sqlite.org/releaselog/3_1_2.html)
-  [Version 3.1.3](https://www.sqlite.org/releaselog/3_1_3.html)
-  [Version 3.1.4](https://www.sqlite.org/releaselog/3_1_4.html)
-  [Version 3.1.5](https://www.sqlite.org/releaselog/3_1_5.html)
-  [Version 3.1.6](https://www.sqlite.org/releaselog/3_1_6.html)
-  [Version 3.10.0](https://www.sqlite.org/releaselog/3_10_0.html)
-  [Version 3.10.1](https://www.sqlite.org/releaselog/3_10_1.html)
-  [Version 3.10.2](https://www.sqlite.org/releaselog/3_10_2.html)
-  [Version 3.11.0](https://www.sqlite.org/releaselog/3_11_0.html)
-  [Version 3.11.1](https://www.sqlite.org/releaselog/3_11_1.html)
-  [Version 3.12.0](https://www.sqlite.org/releaselog/3_12_0.html)
-  [version 3.12.0 page size change](https://www.sqlite.org/pgszchng2016.html)
-  [Version 3.12.1](https://www.sqlite.org/releaselog/3_12_1.html)
-  [Version 3.12.2](https://www.sqlite.org/releaselog/3_12_2.html)
-  [Version 3.13.0](https://www.sqlite.org/releaselog/3_13_0.html)
-  [Version 3.13.0.0](https://www.sqlite.org/releaselog/3_13_0.html)
-  [Version 3.14](https://www.sqlite.org/releaselog/3_14.html)
-  [Version 3.14.0](https://www.sqlite.org/releaselog/3_14.html)
-  [Version 3.14.1](https://www.sqlite.org/releaselog/3_14_1.html)
-  [Version 3.14.2](https://www.sqlite.org/releaselog/3_14_2.html)
-  [Version 3.15.0](https://www.sqlite.org/releaselog/3_15_0.html)
-  [Version 3.15.1](https://www.sqlite.org/releaselog/3_15_1.html)
-  [Version 3.15.2](https://www.sqlite.org/releaselog/3_15_2.html)
-  [Version 3.16.0](https://www.sqlite.org/releaselog/3_16_0.html)
-  [Version 3.16.1](https://www.sqlite.org/releaselog/3_16_1.html)
-  [Version 3.16.2](https://www.sqlite.org/releaselog/3_16_2.html)
-  [Version 3.17.0](https://www.sqlite.org/releaselog/3_17_0.html)
-  [Version 3.18.0](https://www.sqlite.org/releaselog/3_18_0.html)
-  [Version 3.18.1](https://www.sqlite.org/releaselog/3_18_1.html)
-  [Version 3.18.2](https://www.sqlite.org/releaselog/3_18_2.html)
-  [Version 3.19.0](https://www.sqlite.org/releaselog/3_19_0.html)
-  [Version 3.19.1](https://www.sqlite.org/releaselog/3_19_1.html)
-  [Version 3.19.2](https://www.sqlite.org/releaselog/3_19_2.html)
-  [Version 3.19.3](https://www.sqlite.org/releaselog/3_19_3.html)
-  [Version 3.2.0](https://www.sqlite.org/releaselog/3_2_0.html)
-  [Version 3.2.1](https://www.sqlite.org/releaselog/3_2_1.html)
-  [Version 3.2.2](https://www.sqlite.org/releaselog/3_2_2.html)
-  [Version 3.2.3](https://www.sqlite.org/releaselog/3_2_3.html)
-  [Version 3.2.4](https://www.sqlite.org/releaselog/3_2_4.html)
-  [Version 3.2.5](https://www.sqlite.org/releaselog/3_2_5.html)
-  [Version 3.2.6](https://www.sqlite.org/releaselog/3_2_6.html)
-  [Version 3.2.7](https://www.sqlite.org/releaselog/3_2_7.html)
-  [Version 3.2.8](https://www.sqlite.org/releaselog/3_2_8.html)
-  [Version 3.20.0](https://www.sqlite.org/releaselog/3_20_0.html)
-  [Version 3.20.1](https://www.sqlite.org/releaselog/3_20_1.html)
-  [Version 3.21.0](https://www.sqlite.org/releaselog/3_21_0.html)
-  [Version 3.22.0](https://www.sqlite.org/releaselog/3_22_0.html)
-  [Version 3.23.0](https://www.sqlite.org/releaselog/3_23_0.html)
-  [Version 3.23.0.0](https://www.sqlite.org/releaselog/3_23_0.html)
-  [Version 3.23.1](https://www.sqlite.org/releaselog/3_23_1.html)
-  [Version 3.23.1.0](https://www.sqlite.org/releaselog/3_23_1.html)
-  [Version 3.24.0](https://www.sqlite.org/releaselog/3_24_0.html)
-  [Version 3.25.0](https://www.sqlite.org/releaselog/3_25_0.html)
-  [Version 3.25.1](https://www.sqlite.org/releaselog/3_25_1.html)
-  [Version 3.25.2](https://www.sqlite.org/releaselog/3_25_2.html)
-  [Version 3.25.3](https://www.sqlite.org/releaselog/3_25_3.html)
-  [Version 3.26.0](https://www.sqlite.org/releaselog/3_26_0.html)
-  [Version 3.27.0](https://www.sqlite.org/releaselog/3_27_0.html)
-  [Version 3.27.1](https://www.sqlite.org/releaselog/3_27_1.html)
-  [Version 3.27.2](https://www.sqlite.org/releaselog/3_27_2.html)
-  [Version 3.28.0](https://www.sqlite.org/releaselog/3_28_0.html)
-  [Version 3.29.0](https://www.sqlite.org/releaselog/3_29_0.html)
-  [Version 3.3.0](https://www.sqlite.org/releaselog/3_3_0.html)
-  [Version 3.3.0.0](https://www.sqlite.org/releaselog/3_3_0.html)
-  [Version 3.3.1](https://www.sqlite.org/releaselog/3_3_1.html)
-  [Version 3.3.1.0](https://www.sqlite.org/releaselog/3_3_1.html)
-  [Version 3.3.10](https://www.sqlite.org/releaselog/3_3_10.html)
-  [Version 3.3.10.0](https://www.sqlite.org/releaselog/3_3_10.html)
-  [Version 3.3.11](https://www.sqlite.org/releaselog/3_3_11.html)
-  [Version 3.3.11.0](https://www.sqlite.org/releaselog/3_3_11.html)
-  [Version 3.3.12](https://www.sqlite.org/releaselog/3_3_12.html)
-  [Version 3.3.12.0](https://www.sqlite.org/releaselog/3_3_12.html)
-  [Version 3.3.13](https://www.sqlite.org/releaselog/3_3_13.html)
-  [Version 3.3.13.0](https://www.sqlite.org/releaselog/3_3_13.html)
-  [Version 3.3.14](https://www.sqlite.org/releaselog/3_3_14.html)
-  [Version 3.3.14.0](https://www.sqlite.org/releaselog/3_3_14.html)
-  [Version 3.3.15](https://www.sqlite.org/releaselog/3_3_15.html)
-  [Version 3.3.15.0](https://www.sqlite.org/releaselog/3_3_15.html)
-  [Version 3.3.16](https://www.sqlite.org/releaselog/3_3_16.html)
-  [Version 3.3.16.0](https://www.sqlite.org/releaselog/3_3_16.html)
-  [Version 3.3.17](https://www.sqlite.org/releaselog/3_3_17.html)
-  [Version 3.3.17.0](https://www.sqlite.org/releaselog/3_3_17.html)
-  [Version 3.3.2](https://www.sqlite.org/releaselog/3_3_2.html)
-  [Version 3.3.2.0](https://www.sqlite.org/releaselog/3_3_2.html)
-  [Version 3.3.3](https://www.sqlite.org/releaselog/3_3_3.html)
-  [Version 3.3.3.0](https://www.sqlite.org/releaselog/3_3_3.html)
-  [Version 3.3.4](https://www.sqlite.org/releaselog/3_3_4.html)
-  [Version 3.3.4.0](https://www.sqlite.org/releaselog/3_3_4.html)
-  [Version 3.3.5](https://www.sqlite.org/releaselog/3_3_5.html)
-  [Version 3.3.5.0](https://www.sqlite.org/releaselog/3_3_5.html)
-  [Version 3.3.6](https://www.sqlite.org/releaselog/3_3_6.html)
-  [Version 3.3.6.0](https://www.sqlite.org/releaselog/3_3_6.html)
-  [Version 3.3.7](https://www.sqlite.org/releaselog/3_3_7.html)
-  [Version 3.3.7.0](https://www.sqlite.org/releaselog/3_3_7.html)
-  [Version 3.3.8](https://www.sqlite.org/releaselog/3_3_8.html)
-  [Version 3.3.8.0](https://www.sqlite.org/releaselog/3_3_8.html)
-  [Version 3.3.9](https://www.sqlite.org/releaselog/3_3_9.html)
-  [Version 3.3.9.0](https://www.sqlite.org/releaselog/3_3_9.html)
-  [Version 3.30.0](https://www.sqlite.org/releaselog/3_30_0.html)
-  [Version 3.30.1](https://www.sqlite.org/releaselog/3_30_1.html)
-  [Version 3.31.0](https://www.sqlite.org/releaselog/3_31_0.html)
-  [Version 3.31.1](https://www.sqlite.org/releaselog/3_31_1.html)
-  [Version 3.32.0](https://www.sqlite.org/releaselog/3_32_0.html)
-  [Version 3.32.1](https://www.sqlite.org/releaselog/3_32_1.html)
-  [Version 3.32.2](https://www.sqlite.org/releaselog/3_32_2.html)
-  [Version 3.32.3](https://www.sqlite.org/releaselog/3_32_3.html)
-  [Version 3.33.0](https://www.sqlite.org/releaselog/3_33_0.html)
-  [Version 3.33.0.0](https://www.sqlite.org/releaselog/3_33_0.html)
-  [Version 3.34.0](https://www.sqlite.org/releaselog/3_34_0.html)
-  [Version 3.34.1](https://www.sqlite.org/releaselog/3_34_1.html)
-  [Version 3.35.0](https://www.sqlite.org/releaselog/3_35_0.html)
-  [Version 3.35.1](https://www.sqlite.org/releaselog/3_35_1.html)
-  [Version 3.35.2](https://www.sqlite.org/releaselog/3_35_2.html)
-  [Version 3.35.3](https://www.sqlite.org/releaselog/3_35_3.html)
-  [Version 3.35.4](https://www.sqlite.org/releaselog/3_35_4.html)
-  [Version 3.35.5](https://www.sqlite.org/releaselog/3_35_5.html)
-  [Version 3.36.0](https://www.sqlite.org/releaselog/3_36_0.html)
-  [Version 3.37.0](https://www.sqlite.org/releaselog/3_37_0.html)
-  [Version 3.37.1](https://www.sqlite.org/releaselog/3_37_1.html)
-  [Version 3.37.2](https://www.sqlite.org/releaselog/3_37_2.html)
-  [Version 3.38.0](https://www.sqlite.org/releaselog/3_38_0.html)
-  [Version 3.38.1](https://www.sqlite.org/releaselog/3_38_1.html)
-  [Version 3.38.2](https://www.sqlite.org/releaselog/3_38_2.html)
-  [Version 3.38.3](https://www.sqlite.org/releaselog/3_38_3.html)
-  [Version 3.38.4](https://www.sqlite.org/releaselog/3_38_4.html)
-  [Version 3.38.5](https://www.sqlite.org/releaselog/3_38_5.html)
-  [Version 3.39.0](https://www.sqlite.org/releaselog/3_39_0.html)
-  [Version 3.39.1](https://www.sqlite.org/releaselog/3_39_1.html)
-  [Version 3.39.2](https://www.sqlite.org/releaselog/3_39_2.html)
-  [Version 3.39.3](https://www.sqlite.org/releaselog/3_39_3.html)
-  [Version 3.39.4](https://www.sqlite.org/releaselog/3_39_4.html)
-  [Version 3.4.0](https://www.sqlite.org/releaselog/3_4_0.html)
-  [Version 3.4.1](https://www.sqlite.org/releaselog/3_4_1.html)
-  [Version 3.4.2](https://www.sqlite.org/releaselog/3_4_2.html)
-  [Version 3.40.0](https://www.sqlite.org/releaselog/3_40_0.html)
-  [Version 3.40.1](https://www.sqlite.org/releaselog/3_40_1.html)
-  [Version 3.41.0](https://www.sqlite.org/releaselog/3_41_0.html)
-  [Version 3.41.1](https://www.sqlite.org/releaselog/3_41_1.html)
-  [Version 3.41.2](https://www.sqlite.org/releaselog/3_41_2.html)
-  [Version 3.42.0](https://www.sqlite.org/releaselog/3_42_0.html)
-  [Version 3.43.0](https://www.sqlite.org/releaselog/3_43_0.html)
-  [Version 3.43.0.0](https://www.sqlite.org/releaselog/3_43_0.html)
-  [Version 3.43.1](https://www.sqlite.org/releaselog/3_43_1.html)
-  [Version 3.43.1.0](https://www.sqlite.org/releaselog/3_43_1.html)
-  [Version 3.43.2](https://www.sqlite.org/releaselog/3_43_2.html)
-  [Version 3.43.2.0](https://www.sqlite.org/releaselog/3_43_2.html)
-  [Version 3.44.0](https://www.sqlite.org/releaselog/3_44_0.html)
-  [Version 3.44.1](https://www.sqlite.org/releaselog/3_44_1.html)
-  [Version 3.44.2](https://www.sqlite.org/releaselog/3_44_2.html)
-  [Version 3.45.0](https://www.sqlite.org/releaselog/3_45_0.html)
-  [Version 3.45.1](https://www.sqlite.org/releaselog/3_45_1.html)
-  [Version 3.45.2](https://www.sqlite.org/releaselog/3_45_2.html)
-  [Version 3.45.3](https://www.sqlite.org/releaselog/3_45_3.html)
-  [Version 3.46.0](https://www.sqlite.org/releaselog/3_46_0.html)
-  [Version 3.5.0](https://www.sqlite.org/releaselog/3_5_0.html)
-  [Version 3.5.1](https://www.sqlite.org/releaselog/3_5_1.html)
-  [Version 3.5.2](https://www.sqlite.org/releaselog/3_5_2.html)
-  [Version 3.5.3](https://www.sqlite.org/releaselog/3_5_3.html)
-  [Version 3.5.4](https://www.sqlite.org/releaselog/3_5_4.html)
-  [Version 3.5.5](https://www.sqlite.org/releaselog/3_5_5.html)
-  [Version 3.5.6](https://www.sqlite.org/releaselog/3_5_6.html)
-  [Version 3.5.7](https://www.sqlite.org/releaselog/3_5_7.html)
-  [Version 3.5.8](https://www.sqlite.org/releaselog/3_5_8.html)
-  [Version 3.5.9](https://www.sqlite.org/releaselog/3_5_9.html)
-  [Version 3.6.0](https://www.sqlite.org/releaselog/3_6_0.html)
-  [Version 3.6.1](https://www.sqlite.org/releaselog/3_6_1.html)
-  [Version 3.6.10](https://www.sqlite.org/releaselog/3_6_10.html)
-  [Version 3.6.11](https://www.sqlite.org/releaselog/3_6_11.html)
-  [Version 3.6.12](https://www.sqlite.org/releaselog/3_6_12.html)
-  [Version 3.6.13](https://www.sqlite.org/releaselog/3_6_13.html)
-  [Version 3.6.14](https://www.sqlite.org/releaselog/3_6_14.html)
-  [Version 3.6.14.1](https://www.sqlite.org/releaselog/3_6_14_1.html)
-  [Version 3.6.14.2](https://www.sqlite.org/releaselog/3_6_14_2.html)
-  [Version 3.6.15](https://www.sqlite.org/releaselog/3_6_15.html)
-  [Version 3.6.16](https://www.sqlite.org/releaselog/3_6_16.html)
-  [Version 3.6.16.1](https://www.sqlite.org/releaselog/3_6_16_1.html)
-  [Version 3.6.17](https://www.sqlite.org/releaselog/3_6_17.html)
-  [Version 3.6.18](https://www.sqlite.org/releaselog/3_6_18.html)
-  [Version 3.6.19](https://www.sqlite.org/releaselog/3_6_19.html)
-  [Version 3.6.2](https://www.sqlite.org/releaselog/3_6_2.html)
-  [Version 3.6.20](https://www.sqlite.org/releaselog/3_6_20.html)
-  [Version 3.6.21](https://www.sqlite.org/releaselog/3_6_21.html)
-  [Version 3.6.22](https://www.sqlite.org/releaselog/3_6_22.html)
-  [Version 3.6.23](https://www.sqlite.org/releaselog/3_6_23.html)
-  [Version 3.6.23.1](https://www.sqlite.org/releaselog/3_6_23_1.html)
-  [Version 3.6.23.1.0](https://www.sqlite.org/releaselog/3_6_23_1.html)
-  [Version 3.6.3](https://www.sqlite.org/releaselog/3_6_3.html)
-  [Version 3.6.4](https://www.sqlite.org/releaselog/3_6_4.html)
-  [Version 3.6.5](https://www.sqlite.org/releaselog/3_6_5.html)
-  [Version 3.6.6](https://www.sqlite.org/releaselog/3_6_6.html)
-  [Version 3.6.6.1](https://www.sqlite.org/releaselog/3_6_6_1.html)
-  [Version 3.6.6.2](https://www.sqlite.org/releaselog/3_6_6_2.html)
-  [Version 3.6.7](https://www.sqlite.org/releaselog/3_6_7.html)
-  [Version 3.6.8](https://www.sqlite.org/releaselog/3_6_8.html)
-  [Version 3.6.9](https://www.sqlite.org/releaselog/3_6_9.html)
-  [Version 3.7.0](https://www.sqlite.org/releaselog/3_7_0.html)
-  [Version 3.7.0.1](https://www.sqlite.org/releaselog/3_7_0_1.html)
-  [Version 3.7.1](https://www.sqlite.org/releaselog/3_7_1.html)
-  [Version 3.7.10](https://www.sqlite.org/releaselog/3_7_10.html)
-  [Version 3.7.11](https://www.sqlite.org/releaselog/3_7_11.html)
-  [Version 3.7.12](https://www.sqlite.org/releaselog/3_7_12.html)
-  [Version 3.7.12.1](https://www.sqlite.org/releaselog/3_7_12_1.html)
-  [Version 3.7.13](https://www.sqlite.org/releaselog/3_7_13.html)
-  [Version 3.7.14](https://www.sqlite.org/releaselog/3_7_14.html)
-  [Version 3.7.14.1](https://www.sqlite.org/releaselog/3_7_14_1.html)
-  [Version 3.7.15](https://www.sqlite.org/releaselog/3_7_15.html)
-  [Version 3.7.15.1](https://www.sqlite.org/releaselog/3_7_15_1.html)
-  [Version 3.7.15.2](https://www.sqlite.org/releaselog/3_7_15_2.html)
-  [Version 3.7.16](https://www.sqlite.org/releaselog/3_7_16.html)
-  [Version 3.7.16.1](https://www.sqlite.org/releaselog/3_7_16_1.html)
-  [Version 3.7.16.2](https://www.sqlite.org/releaselog/3_7_16_2.html)
-  [Version 3.7.17](https://www.sqlite.org/releaselog/3_7_17.html)
-  [Version 3.7.2](https://www.sqlite.org/releaselog/3_7_2.html)
-  [Version 3.7.3](https://www.sqlite.org/releaselog/3_7_3.html)
-  [Version 3.7.4](https://www.sqlite.org/releaselog/3_7_4.html)
-  [Version 3.7.5](https://www.sqlite.org/releaselog/3_7_5.html)
-  [Version 3.7.6](https://www.sqlite.org/releaselog/3_7_6.html)
-  [Version 3.7.6.1](https://www.sqlite.org/releaselog/3_7_6_1.html)
-  [Version 3.7.6.2](https://www.sqlite.org/releaselog/3_7_6_2.html)
-  [Version 3.7.6.3](https://www.sqlite.org/releaselog/3_7_6_3.html)
-  [Version 3.7.7](https://www.sqlite.org/releaselog/3_7_7.html)
-  [Version 3.7.7.1](https://www.sqlite.org/releaselog/3_7_7_1.html)
-  [Version 3.7.8](https://www.sqlite.org/releaselog/3_7_8.html)
-  [Version 3.7.9](https://www.sqlite.org/releaselog/3_7_9.html)
-  [Version 3.8.0](https://www.sqlite.org/releaselog/3_8_0.html)
-  [Version 3.8.0.1](https://www.sqlite.org/releaselog/3_8_0_1.html)
-  [Version 3.8.0.2](https://www.sqlite.org/releaselog/3_8_0_2.html)
-  [Version 3.8.1](https://www.sqlite.org/releaselog/3_8_1.html)
-  [Version 3.8.10](https://www.sqlite.org/releaselog/3_8_10.html)
-  [Version 3.8.10.1](https://www.sqlite.org/releaselog/3_8_10_1.html)
-  [Version 3.8.10.2](https://www.sqlite.org/releaselog/3_8_10_2.html)
-  [Version 3.8.11](https://www.sqlite.org/releaselog/3_8_11.html)
-  [Version 3.8.11.1](https://www.sqlite.org/releaselog/3_8_11_1.html)
-  [Version 3.8.2](https://www.sqlite.org/releaselog/3_8_2.html)
-  [Version 3.8.3](https://www.sqlite.org/releaselog/3_8_3.html)
-  [Version 3.8.3.1](https://www.sqlite.org/releaselog/3_8_3_1.html)
-  [Version 3.8.3.1.0](https://www.sqlite.org/releaselog/3_8_3_1.html)
-  [Version 3.8.4](https://www.sqlite.org/releaselog/3_8_4.html)
-  [Version 3.8.4.1](https://www.sqlite.org/releaselog/3_8_4_1.html)
-  [Version 3.8.4.2](https://www.sqlite.org/releaselog/3_8_4_2.html)
-  [Version 3.8.4.3](https://www.sqlite.org/releaselog/3_8_4_3.html)
-  [Version 3.8.5](https://www.sqlite.org/releaselog/3_8_5.html)
-  [Version 3.8.6](https://www.sqlite.org/releaselog/3_8_6.html)
-  [Version 3.8.7](https://www.sqlite.org/releaselog/3_8_7.html)
-  [Version 3.8.7.1](https://www.sqlite.org/releaselog/3_8_7_1.html)
-  [Version 3.8.7.2](https://www.sqlite.org/releaselog/3_8_7_2.html)
-  [Version 3.8.7.3](https://www.sqlite.org/releaselog/3_8_7_3.html)
-  [Version 3.8.7.4](https://www.sqlite.org/releaselog/3_8_7_4.html)
-  [Version 3.8.8](https://www.sqlite.org/releaselog/3_8_8.html)
-  [Version 3.8.8.1](https://www.sqlite.org/releaselog/3_8_8_1.html)
-  [Version 3.8.8.2](https://www.sqlite.org/releaselog/3_8_8_2.html)
-  [Version 3.8.8.3](https://www.sqlite.org/releaselog/3_8_8_3.html)
-  [Version 3.8.9](https://www.sqlite.org/releaselog/3_8_9.html)
-  [Version 3.9.0](https://www.sqlite.org/releaselog/3_9_0.html)
-  [Version 3.9.1](https://www.sqlite.org/releaselog/3_9_1.html)
-  [Version 3.9.2](https://www.sqlite.org/releaselog/3_9_2.html)
-  [Version 3.9.3](https://www.sqlite.org/releaselog/3_9_3.html)
-  [version method](https://www.sqlite.org/tclsqlite.html#version)
-  [version numbering conventions](https://www.sqlite.org/versionnumbers.html)
-  [version-valid-for number](https://www.sqlite.org/fileformat2.html#validfor)
-  [VFS](https://www.sqlite.org/vfs.html)
-  [VFS shim](https://www.sqlite.org/vfs.html#shim)
-  ["vfs" query parameter](https://www.sqlite.org/uri.html#urivfs)
-  [VFSes](https://www.sqlite.org/vfs.html)
-  [view](https://www.sqlite.org/lang_createview.html)
-  [virtual machine](https://www.sqlite.org/opcode.html)
-  [virtual machine instructions](https://www.sqlite.org/opcode.html)
-  [virtual table](https://www.sqlite.org/vtab.html)
-  [virtual table configuration option](https://www.sqlite.org/c3ref/c_vtab_constraint_support.html)
-  [virtual table cursor](https://www.sqlite.org/c3ref/vtab_cursor.html)
-  [virtual table list](https://www.sqlite.org/vtablist.html)
-  [virtual table module](https://www.sqlite.org/c3ref/module.html)
-  [vulnerabilities](https://www.sqlite.org/cves.html)
-  [WAL](https://www.sqlite.org/wal.html)
-  [WAL backwards compatibility](https://www.sqlite.org/wal.html#bkwrds)
-  [WAL checksum algorithm](https://www.sqlite.org/fileformat2.html#walcksm)
-  [WAL concurrency](https://www.sqlite.org/wal.html#concurrency)
-  [WAL file](https://www.sqlite.org/wal.html#walfile)
-  [WAL file format](https://www.sqlite.org/fileformat2.html#walformat)
-  [WAL format](https://www.sqlite.org/fileformat2.html#walformat)
-  [WAL mode](https://www.sqlite.org/wal.html)
-  [WAL read algorithm](https://www.sqlite.org/fileformat2.html#walread)
-  [WAL reset](https://www.sqlite.org/fileformat2.html#walreset)
-  [WAL without shared memory](https://www.sqlite.org/wal.html#noshm)
-  [wal-index](https://www.sqlite.org/walformat.html#shm)
-  [WAL-index File Format](https://www.sqlite.org/walformat.html#walidxfmt)
-  [WAL-index format](https://www.sqlite.org/walformat.html#walidxfmt)
-  [WAL-mode crash recovery](https://www.sqlite.org/walformat.html#recovery)
-  [WAL-mode File Format](https://www.sqlite.org/walformat.html)
-  [WAL-mode locks](https://www.sqlite.org/walformat.html#locks)
-  [WAL-mode read blocking](https://www.sqlite.org/wal.html#busy)
-  [wal_autocheckpoint pragma](https://www.sqlite.org/pragma.html#pragma_wal_autocheckpoint)
-  [wal_checkpoint pragma](https://www.sqlite.org/pragma.html#pragma_wal_checkpoint)
-  [wal_hook method](https://www.sqlite.org/tclsqlite.html#wal_hook)
-  [Warranty of Title](https://www.sqlite.org/copyright.html#warrantyoftitle)
-  [What If OpenOffice Used SQLite](https://www.sqlite.org/affcase1.html)
-  [when to use WITHOUT ROWID](https://www.sqlite.org/withoutrowid.html#wtu)
-  [WHERE clause](https://www.sqlite.org/lang_select.html#whereclause)
-  [WHERE-clause push-down optimization](https://www.sqlite.org/optoverview.html#pushdown)
-  [why ALTER TABLE is so difficult](https://www.sqlite.org/lang_altertable.html#altertableishard)
-  [Why SQLite Uses Bytecode](https://www.sqlite.org/whybytecode.html)
-  [Win32 native memory allocator](https://www.sqlite.org/malloc.html#win32heap)
-  [window chaining](https://www.sqlite.org/windowfunctions.html#wchaining)
-  [window function](https://www.sqlite.org/windowfunctions.html)
-  [window-defn](https://www.sqlite.org/syntax/window-defn.html)
-  [window-defn syntax diagram](https://www.sqlite.org/syntax/window-defn.html)
-  [window-function-invocation](https://www.sqlite.org/syntax/window-function-invocation.html)
-  [window-function-invocation syntax diagram](https://www.sqlite.org/syntax/window-function-invocation.html)
-  [WITH clause](https://www.sqlite.org/lang_with.html)
-  [with-clause](https://www.sqlite.org/syntax/with-clause.html)
-  [with-clause syntax diagram](https://www.sqlite.org/syntax/with-clause.html)
-  [WITHOUT rowid](https://www.sqlite.org/withoutrowid.html)
-  [WITHOUT ROWID virtual table](https://www.sqlite.org/vtab.html#worid)
-  [wrapping text](https://www.sqlite.org/cli.html#wrap1)
-  [writable_schema pragma](https://www.sqlite.org/pragma.html#pragma_writable_schema)
-  [write-ahead log](https://www.sqlite.org/wal.html)
-  [writer starvation](https://www.sqlite.org/lockingv3.html#writer_starvation)
-  [xBegin](https://www.sqlite.org/vtab.html#xBegin)
-  [xBestIndex](https://www.sqlite.org/vtab.html#xbestindex)
-  [xColumn](https://www.sqlite.org/vtab.html#xcolumn)
-  [xCommit](https://www.sqlite.org/vtab.html#xcommit)
-  [xConnect](https://www.sqlite.org/vtab.html#xconnect)
-  [xCreate](https://www.sqlite.org/vtab.html#xcreate)
-  [xDestroy](https://www.sqlite.org/vtab.html#sqlite3_module.xDestroy)
-  [xDisconnect](https://www.sqlite.org/vtab.html#xdisconnect)
-  [xEof](https://www.sqlite.org/vtab.html#xeof)
-  [xFilter](https://www.sqlite.org/vtab.html#xfilter)
-  [xFindFunction](https://www.sqlite.org/vtab.html#xfindfunction)
-  [xIntegrity](https://www.sqlite.org/vtab.html#xintegrity)
-  [xIntegrity method](https://www.sqlite.org/vtab.html#xintegrity)
-  [xNext](https://www.sqlite.org/vtab.html#xnext)
-  [xQueryFunc R*Tree callback](https://www.sqlite.org/rtree.html#xquery)
-  [xRelease](https://www.sqlite.org/vtab.html#xsavepoint)
-  [xRename](https://www.sqlite.org/vtab.html#xrename)
-  [xRollback](https://www.sqlite.org/vtab.html#xrollback)
-  [xRollbackTo](https://www.sqlite.org/vtab.html#xsavepoint)
-  [xRowid](https://www.sqlite.org/vtab.html#xrowid)
-  [xSavepoint](https://www.sqlite.org/vtab.html#xsavepoint)
-  [xShadowName](https://www.sqlite.org/vtab.html#xshadowname)
-  [xUpdate](https://www.sqlite.org/vtab.html#xupdate)
-  [YYSTACKDEPTH](https://www.sqlite.org/compile.html#yystackdepth)
-  [YYTRACKMAXSTACKDEPTH](https://www.sqlite.org/compile.html#yytrackmaxstackdepth)
-  [zero-configuration](https://www.sqlite.org/zeroconf.html)
-  [zero-malloc memory allocator](https://www.sqlite.org/malloc.html#memsys5)
-  [zeroblob() SQL function](https://www.sqlite.org/lang_corefunc.html#zeroblob)
-  [ZIP file as database](https://www.sqlite.org/cli.html#zipdb)
-  [zipfile](https://www.sqlite.org/zipfile.html)
-  [Zipfile virtual table](https://www.sqlite.org/zipfile.html)


# 🍀 /S17. SQL Syntax  
   https://www.sqlite.org/lang.html                                  *lang_html*


SQL As Understood By SQLite

SQLite understands most of the standard SQL language. But it does 
[omit some features](https://www.sqlite.org/omitted.html) while at the same time 
adding a few features of its own. This document attempts to describe precisely
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
accept an SQL statement list (sql-stmt-list) which is a semicolon-separated 
list of statements.

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
https://www.sqlite.org/lang_expr.html                               *expression*



# 🍀 /S18. Pragma commands  
   https://www.sqlite.org/pragma.html                              *pragma_html*


# 🍀 /S19. Core SQL Functions  
   https://www.sqlite.org/lang_corefunc.html                *lang_corefunc_html*

Built-In Scalar SQL Functions

## 🐣 1. Overview

   The core functions shown below are available by default. 
   [Date & Time functions](https://www.sqlite.org/lang_datefunc.html),
   [aggregate functions](https://www.sqlite.org/lang_aggfunc.html),
   [window functions](https://www.sqlite.org/windowfunctions.html),
   [math functions](https://www.sqlite.org/lang_mathfunc.html), and
   [JSON functions](https://www.sqlite.org/json1.html) are documented separately. 
   An application may define additional functions written in C and added to the
   database engine using the
   [sqlite3_create_function()](https://www.sqlite.org/c3ref/create_function.html) API.

   [simple-function-invocation:](https://www.sqlite.org/syntax/simple-function-invocation.html)


   See the [functions within expressions](https://www.sqlite.org/lang_expr.html#*funcinexpr)
   documentation for more information about how SQL function invocations
   fit into the context of an SQL expression.

## 🐣 2. List Of Core Functions

  -  [abs(X)](https://www.sqlite.org/lang_corefunc.html#abs)
  -  [changes()](https://www.sqlite.org/lang_corefunc.html#changes)
  -  [char(X1,X2,...,XN)](https://www.sqlite.org/lang_corefunc.html#char)
  -  [coalesce(X,Y,...)](https://www.sqlite.org/lang_corefunc.html#coalesce)
  -  [concat(X,...)](https://www.sqlite.org/lang_corefunc.html#concat)
  -  [concat_ws(SEP,X,...)](https://www.sqlite.org/lang_corefunc.html#concat_ws)
  -  [format(FORMAT,...)](https://www.sqlite.org/lang_corefunc.html#format)
  -  [glob(X,Y)](https://www.sqlite.org/lang_corefunc.html#glob)
  -  [hex(X)](https://www.sqlite.org/lang_corefunc.html#hex)
  -  [ifnull(X,Y)](https://www.sqlite.org/lang_corefunc.html#ifnull)
  -  [iif(X,Y,Z)](https://www.sqlite.org/lang_corefunc.html#iif)
  -  [instr(X,Y)](https://www.sqlite.org/lang_corefunc.html#instr)
  -  [last_insert_rowid()](https://www.sqlite.org/lang_corefunc.html#last_insert_rowid)
  -  [length(X)](https://www.sqlite.org/lang_corefunc.html#length)
  -  [like(X,Y)](https://www.sqlite.org/lang_corefunc.html#like)
  -  [like(X,Y,Z)](https://www.sqlite.org/lang_corefunc.html#like)
  -  [likelihood(X,Y)](https://www.sqlite.org/lang_corefunc.html#likelihood)
  -  [likely(X)](https://www.sqlite.org/lang_corefunc.html#likely)
  -  [load_extension(X)](https://www.sqlite.org/lang_corefunc.html#load_extension)
  -  [load_extension(X,Y)](https://www.sqlite.org/lang_corefunc.html#load_extension)
  -  [lower(X)](https://www.sqlite.org/lang_corefunc.html#lower)
  -  [ltrim(X)](https://www.sqlite.org/lang_corefunc.html#ltrim)
  -  [ltrim(X,Y)](https://www.sqlite.org/lang_corefunc.html#ltrim)
  -  [max(X,Y,...)](https://www.sqlite.org/lang_corefunc.html#max_scalar)
  -  [min(X,Y,...)](https://www.sqlite.org/lang_corefunc.html#min_scalar)
  -  [nullif(X,Y)](https://www.sqlite.org/lang_corefunc.html#nullif)
  -  [octet_length(X)](https://www.sqlite.org/lang_corefunc.html#octet_length)
  -  [printf(FORMAT,...)](https://www.sqlite.org/lang_corefunc.html#printf)
  -  [quote(X)](https://www.sqlite.org/lang_corefunc.html#quote)
  -  [random()](https://www.sqlite.org/lang_corefunc.html#random)
  -  [randomblob(N)](https://www.sqlite.org/lang_corefunc.html#randomblob)
  -  [replace(X,Y,Z)](https://www.sqlite.org/lang_corefunc.html#replace)
  -  [round(X)](https://www.sqlite.org/lang_corefunc.html#round)
  -  [round(X,Y)](https://www.sqlite.org/lang_corefunc.html#round)
  -  [rtrim(X)](https://www.sqlite.org/lang_corefunc.html#rtrim)
  -  [rtrim(X,Y)](https://www.sqlite.org/lang_corefunc.html#rtrim)
  -  [sign(X)](https://www.sqlite.org/lang_corefunc.html#sign)
  -  [soundex(X)](https://www.sqlite.org/lang_corefunc.html#soundex)
  -  [sqlite_compileoption_get(N)](https://www.sqlite.org/lang_corefunc.html#sqlite_compileoption_get)
  -  [sqlite_compileoption_used(X)](https://www.sqlite.org/lang_corefunc.html#sqlite_compileoption_used)
  -  [sqlite_offset(X)](https://www.sqlite.org/lang_corefunc.html#sqlite_offset)
  -  [sqlite_source_id()](https://www.sqlite.org/lang_corefunc.html#sqlite_source_id)
  -  [sqlite_version()](https://www.sqlite.org/lang_corefunc.html#sqlite_version)
  -  [substr(X,Y)](https://www.sqlite.org/lang_corefunc.html#substr)
  -  [substr(X,Y,Z)](https://www.sqlite.org/lang_corefunc.html#substr)
  -  [substring(X,Y)](https://www.sqlite.org/lang_corefunc.html#substr)
  -  [substring(X,Y,Z)](https://www.sqlite.org/lang_corefunc.html#substr)
  -  [total_changes()](https://www.sqlite.org/lang_corefunc.html#total_changes)
  -  [trim(X)](https://www.sqlite.org/lang_corefunc.html#trim)
  -  [trim(X,Y)](https://www.sqlite.org/lang_corefunc.html#trim)
  -  [typeof(X)](https://www.sqlite.org/lang_corefunc.html#typeof)
  -  [unhex(X)](https://www.sqlite.org/lang_corefunc.html#unhex)
  -  [unhex(X,Y)](https://www.sqlite.org/lang_corefunc.html#unhex)
  -  [unicode(X)](https://www.sqlite.org/lang_corefunc.html#unicode)
  -  [unlikely(X)](https://www.sqlite.org/lang_corefunc.html#unlikely)
  -  [upper(X)](https://www.sqlite.org/lang_corefunc.html#upper)
  -  [zeroblob(N)](https://www.sqlite.org/lang_corefunc.html#zeroblob)

## 🐣 3. Descriptions of built-in scalar SQL functions

-  **abs(X)**

   The abs(X) function returns the absolute value of the numeric
   argument X. Abs(X) returns NULL if X is NULL. Abs(X) returns 0.0 if X
   is a string or blob that cannot be converted to a numeric value. If X
   is the integer -9223372036854775808 then abs(X) throws an integer
   overflow error since there is no equivalent positive 64-bit two
   complement value.

-  **changes()**

   The changes() function returns the number of database rows that were
   changed or inserted or deleted by the most recently completed INSERT,
   DELETE, or UPDATE statement, exclusive of statements in lower-level
   triggers. The changes() SQL function is a wrapper around the
   [sqlite3_changes64()](https://www.sqlite.org/c3ref/changes.html) C/C++ function and hence
   follows the same rules for counting changes.

-  **char(X1,X2,...,XN)**

   The char(X1,X2,...,XN) function returns a string composed of
   characters having the unicode code point values of integers X1
   through XN, respectively.

-  **coalesce(X,Y,...)**

   The coalesce() function returns a copy of its first non-NULL
   argument, or NULL if all arguments are NULL. Coalesce() must have at
   least 2 arguments.

-  **concat(X,...)**

   The concat(...) function returns a string which is the concatenation
   of the string representation of all of its non-NULL arguments. If all
   arguments are NULL, then concat() returns an empty string.

-  **concat_ws(SEP,X,...)**

   The concat_ws(SEP,...) function returns a string that is the
   concatenation of all non-null arguments beyond the first argument,
   using the text value of the first argument as a separator. If the
   first argument is NULL, then concat_ws() returns NULL. If all
   arguments other than the first are NULL, then concat_ws() returns an
   empty string.

-  **format(FORMAT,...)**

   The format(FORMAT,...) SQL function works like the
   [sqlite3_mprintf()](https://www.sqlite.org/c3ref/mprintf.html) C-language function and
   the printf() function from the standard C library. The first argument
   is a format string that specifies how to construct the output string
   using values taken from subsequent arguments. If the FORMAT argument
   is missing or NULL then the result is NULL. The %n format is silently
   ignored and does not consume an argument. The %p format is an alias
   for %X. The %z format is interchangeable with %s. If there are too
   few arguments in the argument list, missing arguments are assumed to
   have a NULL value, which is translated into 0 or 0.0 for numeric
   formats or an empty string for %s. See the [built-in
   printf()](https://www.sqlite.org/printf.html) documentation for additional information.

-  **glob(X,Y)**

   The glob(X,Y) function is equivalent to the expression "**Y GLOB
   X**". Note that the X and Y arguments are reversed in the glob()
   function relative to the infix [GLOB](https://www.sqlite.org/lang_expr.html#glob)
   operator. Y is the string and X is the pattern. So, for example, the
   following expressions are equivalent:

        name GLOB '*helium*'
        glob('*helium*',name)
           

   If the [sqlite3_create_function()](https://www.sqlite.org/c3ref/create_function.html)
   interface is used to override the glob(X,Y) function with an
   alternative implementation then the [GLOB](https://www.sqlite.org/lang_expr.html#glob)
   operator will invoke the alternative implementation.

-  **hex(X)**

   The hex() function interprets its argument as a BLOB and returns a
   string which is the upper-case hexadecimal rendering of the content
   of that blob.

   If the argument *X* in "hex(*X*)" is an integer or floating point
   number, then "interprets its argument as a BLOB" means that the
   binary number is first converted into a UTF8 text representation,
   then that text is interpreted as a BLOB. Hence, "hex(12345678)"
   renders as "3132333435363738" not the binary representation of the
   integer value "0000000000BC614E".

   See also: [unhex()](https://www.sqlite.org/lang_corefunc.html#unhex)

-  **ifnull(X,Y)**

   The ifnull() function returns a copy of its first non-NULL argument,
   or NULL if both arguments are NULL. Ifnull() must have exactly 2
   arguments. The ifnull() function is equivalent to
   [coalesce()](https://www.sqlite.org/lang_corefunc.html#coalesce) with two arguments.

-  **iif(X,Y,Z)**

   The iif(X,Y,Z) function returns the value Y if X is true, and Z
   otherwise. The iif(X,Y,Z) function is logically equivalent to and
   generates the same [bytecode](https://www.sqlite.org/opcode.html) as the [CASE
   expression](https://www.sqlite.org/lang_expr.html#case) "CASE WHEN X THEN Y ELSE Z END".

-  **instr(X,Y)**

   The instr(X,Y) function finds the first occurrence of string Y within
   string X and returns the number of prior characters plus 1, or 0 if Y
   is nowhere found within X. Or, if X and Y are both BLOBs, then
   instr(X,Y) returns one more than the number bytes prior to the first
   occurrence of Y, or 0 if Y does not occur anywhere within X. If both
   arguments X and Y to instr(X,Y) are non-NULL and are not BLOBs then
   both are interpreted as strings. If either X or Y are NULL in
   instr(X,Y) then the result is NULL.

-  **last_insert_rowid()**

   The last_insert_rowid() function returns the
   [ROWID](https://www.sqlite.org/lang_createtable.html#rowid) of the last row insert from
   the database connection which invoked the function. The
   last_insert_rowid() SQL function is a wrapper around the
   [sqlite3_last_insert_rowid()](https://www.sqlite.org/c3ref/last_insert_rowid.html) C/C++
   interface function.

-  **length(X)**

   For a string value X, the length(X) function returns the number of
   characters (not bytes) in X prior to the first NUL character. Since
   SQLite strings do not normally contain NUL characters, the length(X)
   function will usually return the total number of characters in the
   string X. For a blob value X, length(X) returns the number of bytes
   in the blob. If X is NULL then length(X) is NULL. If X is numeric
   then length(X) returns the length of a string representation of X.

   Note that for strings, the length(X) function returns the *character*
   length of the string, not the byte length. The character length is
   the number of characters in the string. The character length is
   always different from the byte length for UTF-16 strings, and can be
   different from the byte length for UTF-8 strings if the string
   contains multi-byte characters. Use the
   [octet_length()](https://www.sqlite.org/lang_corefunc.html#octet_length) function to find
   the byte length of a string.

   For BLOB values, length(X) always returns the byte-length of the
   BLOB.

   For string values, length(X) must read the entire string into memory
   in order to compute the character length. But for BLOB values, that
   is not necessary as SQLite knows how many bytes are in the BLOB.
   Hence, for multi-megabyte values, the length(X) function is usually
   much faster for BLOBs than for strings, since it does not need to
   load the value into memory.

-  **like(X,Y)
   like(X,Y,Z)**

   The like() function is used to implement the "**Y LIKE X [ESCAPE
   Z]**" expression. If the optional ESCAPE clause is present, then the
   like() function is invoked with three arguments. Otherwise, it is
   invoked with two arguments only. Note that the X and Y parameters are
   reversed in the like() function relative to the infix
   [LIKE](https://www.sqlite.org/lang_expr.html#like) operator. X is the pattern and Y is
   the string to match against that pattern. Hence, the following
   expressions are equivalent:

        name LIKE '%neon%'
        like('%neon%',name)
           

   The [sqlite3_create_function()](https://www.sqlite.org/c3ref/create_function.html)
   interface can be used to override the like() function and thereby
   change the operation of the [LIKE](https://www.sqlite.org/lang_expr.html#like) operator.
   When overriding the like() function, it may be important to override
   both the two and three argument versions of the like() function.
   Otherwise, different code may be called to implement the
   [LIKE](https://www.sqlite.org/lang_expr.html#like) operator depending on whether or not
   an ESCAPE clause was specified.

-  **likelihood(X,Y)**

   The likelihood(X,Y) function returns argument X unchanged. The value
   Y in likelihood(X,Y) must be a floating point constant between 0.0
   and 1.0, inclusive. The likelihood(X) function is a no-op that the
   code generator optimizes away so that it consumes no CPU cycles
   during run-time (that is, during calls to
   [sqlite3_step()](https://www.sqlite.org/c3ref/step.html)). The purpose of the
   likelihood(X,Y) function is to provide a hint to the query planner
   that the argument X is a boolean that is true with a probability of
   approximately Y. The [unlikely(X)](https://www.sqlite.org/lang_corefunc.html#unlikely)
   function is short-hand for likelihood(X,0.0625). The
   [likely(X)](https://www.sqlite.org/lang_corefunc.html#likely) function is short-hand for
   likelihood(X,0.9375).

-  **likely(X)**

   The likely(X) function returns the argument X unchanged. The
   likely(X) function is a no-op that the code generator optimizes away
   so that it consumes no CPU cycles at run-time (that is, during calls
   to [sqlite3_step()](https://www.sqlite.org/c3ref/step.html)). The purpose of the
   likely(X) function is to provide a hint to the query planner that the
   argument X is a boolean value that is usually true. The likely(X)
   function is equivalent to
   [likelihood](https://www.sqlite.org/lang_corefunc.html#likelihood)(X,0.9375). See also:
   [unlikely(X)](https://www.sqlite.org/lang_corefunc.html#unlikely).

-  **load_extension(X)
   load_extension(X,Y)**

   The load_extension(X,Y) function loads [SQLite
   extensions](https://www.sqlite.org/loadext.html) out of the shared library file named X
   using the entry point Y. The result of load_extension() is always a
   NULL. If Y is omitted then the default entry point name is used. The
   load_extension() function raises an exception if the extension fails
   to load or initialize correctly.

   The load_extension() function will fail if the extension attempts to
   modify or delete an SQL function or collating sequence. The extension
   can add new functions or collating sequences, but cannot modify or
   delete existing functions or collating sequences because those
   functions and/or collating sequences might be used elsewhere in the
   currently running SQL statement. To load an extension that changes or
   deletes functions or collating sequences, use the
   [sqlite3_load_extension()](https://www.sqlite.org/c3ref/load_extension.html) C-language
   API.

   For security reasons, extension loading is disabled by default and
   must be enabled by a prior call to
   [sqlite3_enable_load_extension()](https://www.sqlite.org/c3ref/enable_load_extension.html).

-  **lower(X)**

   The lower(X) function returns a copy of string X with all ASCII
   characters converted to lower case. The default built-in lower()
   function works for ASCII characters only. To do case conversions on
   non-ASCII characters, load the ICU extension.

-  **ltrim(X)
   ltrim(X,Y)**

   The ltrim(X,Y) function returns a string formed by removing any and
   all characters that appear in Y from the left side of X. If the Y
   argument is omitted, ltrim(X) removes spaces from the left side of X.

-  **max(X,Y,...)**

   The multi-argument max() function returns the argument with the
   maximum value, or return NULL if any argument is NULL. The
   multi-argument max() function searches its arguments from left to
   right for an argument that defines a collating function and uses that
   collating function for all string comparisons. If none of the
   arguments to max() define a collating function, then the BINARY
   collating function is used. Note that **max()** is a simple function
   when it has 2 or more arguments but operates as an [aggregate
   function](https://www.sqlite.org/lang_aggfunc.html#max_agg) if given only a single
   argument.

-  **min(X,Y,...)**

   The multi-argument min() function returns the argument with the
   minimum value. The multi-argument min() function searches its
   arguments from left to right for an argument that defines a collating
   function and uses that collating function for all string comparisons.
   If none of the arguments to min() define a collating function, then
   the BINARY collating function is used. Note that **min()** is a
   simple function when it has 2 or more arguments but operates as an
   [aggregate function](https://www.sqlite.org/lang_aggfunc.html#min_agg) if given only a
   single argument.

-  **nullif(X,Y)**

   The nullif(X,Y) function returns its first argument if the arguments
   are different and NULL if the arguments are the same. The nullif(X,Y)
   function searches its arguments from left to right for an argument
   that defines a collating function and uses that collating function
   for all string comparisons. If neither argument to nullif() defines a
   collating function then the BINARY collating function is used.

-  **octet_length(X)**

   The octet_length(X) function returns the number of bytes in the
   encoding of text string X. If X is NULL then octet_length(X) returns
   NULL. If X is a BLOB value, then octet_length(X) is the same as
   [length(X)](https://www.sqlite.org/lang_corefunc.html#length). If X is a numeric value,
   then octet_length(X) returns the number of bytes in a text rendering
   of that number.

   Because octet_length(X) returns the number of bytes in X, not the
   number of characters, the value returned depends on the database
   encoding. The octet_length() function can return different answers
   for the same input string if the database encoding is UTF16 instead
   of UTF8.

   If argument X is a table column and the value is of type text or
   blob, then octet_length(X) avoids reading the content of X from disk,
   as the byte length can be computed from metadata. Thus,
   octet_length(X) is efficient even if X is a column containing a
   multi-megabyte text or blob value.

-  **printf(FORMAT,...)**

   The printf() SQL function is an alias for the [format() SQL
   function](https://www.sqlite.org/lang_corefunc.html#format). The format() SQL function
   was originally named printf(). But the name was later changed to
   format() for compatibility with other database engines. The printf()
   name is retained as an alias so as not to break legacy code.

-  **quote(X)**

   The quote(X) function returns the text of an SQL literal which is the
   value of its argument suitable for inclusion into an SQL statement.
   Strings are surrounded by single-quotes with escapes on interior
   quotes as needed. BLOBs are encoded as hexadecimal literals. Strings
   with embedded NUL characters cannot be represented as string literals
   in SQL and hence the returned string literal is truncated prior to
   the first NUL.

-  **random()**

   The random() function returns a pseudo-random integer between
   -9223372036854775808 and +9223372036854775807.

-  **randomblob(N)**

   The randomblob(N) function return an N-byte blob containing
   pseudo-random bytes. If N is less than 1 then a 1-byte random blob is
   returned.

   Hint: applications can generate globally unique identifiers using
   this function together with [hex()](https://www.sqlite.org/lang_corefunc.html#hex) and/or
   [lower()](https://www.sqlite.org/lang_corefunc.html#lower) like this:

      hex(randomblob(16))
      lower(hex(randomblob(16)))

-  **replace(X,Y,Z)**

   The replace(X,Y,Z) function returns a string formed by substituting
   string Z for every occurrence of string Y in string X. The
   [BINARY](https://www.sqlite.org/datatype3.html#collation) collating sequence is used for
   comparisons. If Y is an empty string then return X unchanged. If Z is
   not initially a string, it is cast to a UTF-8 string prior to
   processing.

-  **round(X)
   round(X,Y)**

   The round(X,Y) function returns a floating-point value X rounded to Y
   digits to the right of the decimal point. If the Y argument is
   omitted or negative, it is taken to be 0.

-  **rtrim(X)
   rtrim(X,Y)**

   The rtrim(X,Y) function returns a string formed by removing any and
   all characters that appear in Y from the right side of X. If the Y
   argument is omitted, rtrim(X) removes spaces from the right side of
   X.

-  **sign(X)**

   The sign(X) function returns -1, 0, or +1 if the argument X is a
   numeric value that is negative, zero, or positive, respectively. If
   the argument to sign(X) is NULL or is a string or blob that cannot be
   losslessly converted into a number, then sign(X) returns NULL.

-  **soundex(X)**

   The soundex(X) function returns a string that is the soundex encoding
   of the string X. The string "?000" is returned if the argument is
   NULL or contains no ASCII alphabetic characters. This function is
   omitted from SQLite by default. It is only available if the
   [SQLITE_SOUNDEX](https://www.sqlite.org/compile.html#soundex) compile-time option is used
   when SQLite is built.

-  **sqlite_compileoption_get(N)**

   The sqlite_compileoption_get() SQL function is a wrapper around the
   [sqlite3_compileoption_get()](https://www.sqlite.org/c3ref/compileoption_get.html) C/C++
   function. This routine returns the N-th compile-time option used to
   build SQLite or NULL if N is out of range. See also the
   [compile_options pragma](https://www.sqlite.org/pragma.html#pragma_compile_options).

-  **sqlite_compileoption_used(X)**

   The sqlite_compileoption_used() SQL function is a wrapper around the
   [sqlite3_compileoption_used()](https://www.sqlite.org/c3ref/compileoption_get.html) C/C++
   function. When the argument X to sqlite_compileoption_used(X) is a
   string which is the name of a compile-time option, this routine
   returns true (1) or false (0) depending on whether or not that option
   was used during the build.

-  **sqlite_offset(X)**

   The sqlite_offset(X) function returns the byte offset in the database
   file for the beginning of the record from which value would be read.
   If X is not a column in an ordinary table, then sqlite_offset(X)
   returns NULL. The value returned by sqlite_offset(X) might reference
   either the original table or an index, depending on the query. If the
   value X would normally be extracted from an index, the
   sqlite_offset(X) returns the offset to the corresponding index
   record. If the value X would be extracted from the original table,
   then sqlite_offset(X) returns the offset to the table record.

   The sqlite_offset(X) SQL function is only available if SQLite is
   built using the
   [-DSQLITE_ENABLE_OFFSET_SQL_FUNC](https://www.sqlite.org/compile.html#enable_offset_sql_func)
   compile-time option.

-  **sqlite_source_id()**

   The sqlite_source_id() function returns a string that identifies the
   specific version of the source code that was used to build the SQLite
   library. The string returned by sqlite_source_id() is the date and
   time that the source code was checked in followed by the SHA3-256
   hash for that check-in. This function is an SQL wrapper around the
   [sqlite3_sourceid()](https://www.sqlite.org/c3ref/libversion.html) C interface.

-  **sqlite_version()**

   The sqlite_version() function returns the version string for the
   SQLite library that is running. This function is an SQL wrapper
   around the [sqlite3_libversion()](https://www.sqlite.org/c3ref/libversion.html)
   C-interface.

-  **substr(X,Y,Z)
   substr(X,Y)
   substring(X,Y,Z)
   substring(X,Y)**

   The substr(X,Y,Z) function returns a substring of input string X that
   begins with the Y-th character and which is Z characters long. If Z
   is omitted then substr(X,Y) returns all characters through the end of
   the string X beginning with the Y-th. The left-most character of X is
   number 1. If Y is negative then the first character of the substring
   is found by counting from the right rather than the left. If Z is
   negative then the abs(Z) characters preceding the Y-th character are
   returned. If X is a string then characters indices refer to actual
   UTF-8 characters. If X is a BLOB then the indices refer to bytes.

   "substring()" is an alias for "substr()" beginning with SQLite
   version 3.34.

-  **total_changes()**

   The total_changes() function returns the number of row changes caused
   by INSERT, UPDATE or DELETE statements since the current database
   connection was opened. This function is a wrapper around the
   [sqlite3_total_changes64()](https://www.sqlite.org/c3ref/total_changes.html) C/C++
   interface.

-  **trim(X)
   trim(X,Y)**

   The trim(X,Y) function returns a string formed by removing any and
   all characters that appear in Y from both ends of X. If the Y
   argument is omitted, trim(X) removes spaces from both ends of X.

-  **typeof(X)**

   The typeof(X) function returns a string that indicates the
   [datatype](https://www.sqlite.org/datatype3.html) of the expression X: "null", "integer",
   "real", "text", or "blob".

-  **unhex(X)
   unhex(X,Y)**

   The unhex(X,Y) function returns a BLOB value which is the decoding of
   the hexadecimal string X. If X contains any characters that are not
   hexadecimal digits and which are not in Y, then unhex(X,Y) returns
   NULL. If Y is omitted, it is understood to be an empty string and
   hence X must be a pure hexadecimal string. All hexadecimal digits in
   X must occur in pairs, with both digits of each pair beginning
   immediately adjacent to one another, or else unhex(X,Y) returns NULL.
   If either parameter X or Y is NULL, then unhex(X,Y) returns NULL. The
   X input may contain an arbitrary mix of upper and lower case
   hexadecimal digits. Hexadecimal digits in Y have no affect on the
   translation of X. Only characters in Y that are not hexadecimal
   digits are ignored in X.

   See also: [hex()](https://www.sqlite.org/lang_corefunc.html#hex)

-  **unicode(X)**

   The unicode(X) function returns the numeric unicode code point
   corresponding to the first character of the string X. If the argument
   to unicode(X) is not a string then the result is undefined.

-  **unlikely(X)**

   The unlikely(X) function returns the argument X unchanged. The
   unlikely(X) function is a no-op that the code generator optimizes
   away so that it consumes no CPU cycles at run-time (that is, during
   calls to [sqlite3_step()](https://www.sqlite.org/c3ref/step.html)). The purpose of the
   unlikely(X) function is to provide a hint to the query planner that
   the argument X is a boolean value that is usually not true. The
   unlikely(X) function is equivalent to
   [likelihood](https://www.sqlite.org/lang_corefunc.html#likelihood)(X, 0.0625).

-  **upper(X)**

   The upper(X) function returns a copy of input string X in which all
   lower-case ASCII characters are converted to their upper-case
   equivalent.

-  **zeroblob(N)**

   The zeroblob(N) function returns a BLOB consisting of N bytes of
   0x00. SQLite manages these zeroblobs very efficiently. Zeroblobs can
   be used to reserve space for a BLOB that is later written using
   [incremental BLOB I/O](https://www.sqlite.org/c3ref/blob_open.html). This SQL function is
   implemented using the
   [sqlite3_result_zeroblob()](https://www.sqlite.org/c3ref/result_blob.html) routine from
   the C/C++ interface.

   *This page last modified on* [2023-12-05 14:43:20](https://www.sqlite.org/https://sqlite.org/docsrc/honeypot) *UTC*


# 🍀 /S20. Aggregate SQL Functions  
   https://www.sqlite.org/lang_aggfunc.html                  *lang_aggfunc_html*


# 🍀 /S21. Date and Time SQL Functions  
   https://www.sqlite.org/lang_datefunc.html                *lang_datefunc_html*


# 🍀 /S22. Window Functions  
   https://www.sqlite.org/windowfunctions.html            *windowfunctions_html*


# 🍀 /S22. Math functions
   https://www.sqlite.org/lang_mathfunc.html                *lang_mathfunc_html*


# 🍀 /S22. JSON functions
   https://www.sqlite.org/json1.html                             *jsonfunctions*

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



# 🍀 /S56. Command-Line Shell (sqlite3.exe) 
   https://www.sqlite.org/cli.html              *cli_html*  *command-line shell*

01. Getting Started                                              [getting_started]
02. Double-click Startup On Windows              [double_click_startup_on_windows]
03. Special commands to sqlite3 (dot-commands) [special_commands_to_sqlite3_dot_commands_]
04. Rules for "dot-commands", SQL and More   [rules_for_dot_commands_sql_and_more]
04.1. Line Structure                                              [line_structure]
04.2. Dot-command arguments                                [dot_command_arguments]
04.3. Dot-command execution                                [dot_command_execution]
05. Changing Output Formats                              [changing_output_formats]
06. Querying the database schema                    [querying_the_database_schema]
07. Opening Database Files                                [opening_database_files]
08. Redirecting I/O                                              [redirecting_i_o]
08.1. Writing results to a file                        [writing_results_to_a_file]
08.2. Reading SQL from a file                            [reading_sql_from_a_file]
08.3. File I/O Functions                                      [file_i_o_functions]
08.4. The edit() SQL function                              [the_edit_sql_function]
08.5. Importing files as CSV or other formats [importing_files_as_csv_or_other_formats]
08.6. Export to CSV                                                [export_to_csv]
09. Accessing ZIP Archives As Database Files [accessing_zip_archives_as_database_files]
09.1. How ZIP archive access is implemented [how_zip_archive_access_is_implemented]
10. Converting An Entire Database To A Text File [converting_an_entire_database_to_a_text_file]
11. Recover Data From a Corrupted Database [recover_data_from_a_corrupted_database]
12. Loading Extensions                                        [loading_extensions]
13. Cryptographic Hashes Of Database Content [cryptographic_hashes_of_database_content]
14. Database Content Self-Tests                      [database_content_self_tests]
15. SQLite Archive Support                                [sqlite_archive_support]
15.1. SQLite Archive Create Command              [_sqlite_archive_create_command_]
15.2. SQLite Archive Extract Command            [_sqlite_archive_extract_command_]
15.3. SQLite Archive List Command                  [_sqlite_archive_list_command_]
15.4. SQLite Archive Insert And Update Commands [_sqlite_archive_insert_and_update_commands_]
15.5. SQLite Archive Remove Command              [_sqlite_archive_remove_command_]
15.6. Operations On ZIP Archives                    [_operations_on_zip_archives_]
15.7. SQL Used To Implement SQLite Archive Operations [_sql_used_to_implement_sqlite_archive_operations_]
16. SQL Parameters                                                [sql_parameters]
17. Index Recommendations (SQLite Expert)   [index_recommendations_sqlite_expert_]
18. Working With Multiple Database Connections [working_with_multiple_database_connections]
19. Miscellaneous Extension Features            [miscellaneous_extension_features]
20. Other Dot Commands                                        [other_dot_commands]
21. Using sqlite3 in a shell script              [using_sqlite3_in_a_shell_script]
22. Marking The End Of An SQL Statement      [marking_the_end_of_an_sql_statement]
23. Command-line Options                                    [command_line_options]
23.1. The --safe command-line option                [the_safe_command_line_option]
23.2. The --unsafe-testing command-line option [the_unsafe_testing_command_line_option]
23.3. The --utf8 command-line option                [the_utf8_command_line_option]
24. Compiling the sqlite3 program from sources [compiling_the_sqlite3_program_from_sources]
24.1. Do-It-Yourself Builds                              [_do_it_yourself_builds_]

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
to SQLite interfaces such as <a href="c3ref/prepare.html">sqlite3_prepare()</a> 
or <a href="c3ref/exec.html">sqlite3_exec()</a>.

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
For example, (unless one intends a value of -1365):

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


# 🍀 /S57. SQLite Database Analyzer (sqlite3_analyzer.exe)
   https://www.sqlite.org/sqlanalyze.html                      *sqlanalyze_html*


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



# 🍀 /S61. The Fossil Version Control System
   https://www.fossil-scm.org/home/doc/trunk/www/quickstart.wiki        *fossil*
   http://www.fossil-scm.org/

01. Installing                                                         [install]
02. General Work Flow                                                 [workflow]
03. Starting A New Project                                                 [new]
04. Cloning An Existing Repository                                       [clone]
05. Importing From Another Version Control System                       [import]
06. Checking Out A Local Tree                                         [checkout]
07. Making and Committing Changes                                      [changes]
08. Naming of Files, Checkins, and Branches                             [naming]
09. Configuring Your Local Repository                                   [config]
10. Sharing Changes                                                    [sharing]
11. Branching And Merging                                               [branch]
12. Setting Up A Server                                                 [server]
13. HTTP Proxies                                                         [proxy]
14. Other Resources                                                      [links]

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