curl -s -L  | /c/opendocs/html2md.ts >> /c/opendocs/The_Linux_Programming_Interface.md
curl -s -L https://www.man7.org/tlpi/code/online/index.html | /c/opendocs/html2md.ts >> /c/opendocs/The_Linux_Programming_Interface.md
/The Linux Programming Interface
==================================
1. https://www.man7.org/tlpi/
2. https://www.man7.org/tlpi/code/online/all_files_by_chapter.html


* * *

/Short Table of Contents for _The Linux Programming Interface_
==============================================================

```sh
curl -s -L https://www.man7.org/tlpi/toc-short.html | /c/opendocs/html2md.ts >> /c/opendocs/The_Linux_Programming_Interface.md
```

    Preface

    1    History and Standards
    2    Fundamental Concepts
    3    System Programming Concepts
    4    File I/O: The Universal I/O Model
    5    File I/O: Further Details
    6    Processes
    7    Memory Allocation
    8    Users and Groups
    9    Process Credentials
    10   Times and Dates
    11   System Limits and Options
    12   Retrieving System and Process Information
    13   File I/O Buffering
    14   File Systems
    15   File Attributes
    16   Extended Attributes
    17   Access Control Lists
    18   Directories and Links
    19   Monitoring File Events with inotify
    20   Signals: Fundamental Concepts
    21   Signals: Signal Handlers
    22   Signals: Advanced Features
    23   Timers and Sleeping
    24   Process Creation
    25   Process Termination
    26   Monitoring Child Processes
    27   Program Execution
    28   Process Creation and Program Execution in More Detail
    29   Threads: Introduction
    30   Threads: Thread Synchronization
    31   Threads: Thread Safety and Per-thread Storage
    32   Threads: Thread Cancellation
    33   Threads: Further Details
    34   Process Groups, Sessions, and Job Control
    35   Process Priorities and Scheduling
    36   Process Resources
    37   Daemons
    38   Writing Secure Privileged Programs
    39   Capabilities
    40   Login Accounting
    41   Fundamentals of Shared Libraries
    42   Advanced Features of Shared Libraries
    43   Interprocess Communication Overview
    44   Pipes and FIFOs
    45   Introduction to System V IPC
    46   System V Message Queues
    47   System V Semaphores
    48   System V Shared Memory
    49   Memory Mappings
    50   Virtual Memory Operations
    51   Introduction to POSIX IPC
    52   POSIX Message Queues
    53   POSIX Semaphores
    54   POSIX Shared Memory
    55   File Locking
    56   Sockets: Introduction
    57   Sockets: Unix Domain
    58   Sockets: Fundamentals of TCP/IP Networks
    59   Sockets: Internet Domains
    60   Sockets: Server Design
    61   Sockets: Advanced Topics
    62   Terminals
    63   Alternative I/O Models
    64   Pseudoterminals
    A   Tracing System Calls
    B   Parsing Command-Line Options
    C   Casting the NULL Pointer
    D   Kernel Configuration
    E   Further Sources of Information
    F   Solutions to Selected Exercises
    Bibliography
    Index

* * *

(C) 2024 [Michael Kerrisk](http://man7.org/mtk/index.html)

* * *



* * *

/Detailed Table of Contents for _The Linux Programming Interface_
=================================================================
https://www.man7.org/tlpi/toc-detailed.html
https://www.man7.org/tlpi/download/TLPI-TOC-detailed.pdf

    PREFACE

    1   HISTORY AND STANDARDS
    1.1   A Brief History of UNIX and C
    1.2   A Brief History of Linux
    1.2.1   The GNU Project
    1.2.2   The Linux Kernel
    1.3   Standardization
    1.3.1   The C Programming Language
    1.3.2   The First POSIX Standards
    1.3.3   X/Open Company and The Open Group
    1.3.4   SUSv3 and POSIX.1-2001
    1.3.5   SUSv4 and POSIX.1-2008
    1.3.6   UNIX Standards Timeline
    1.3.7   Implementation Standards
    1.3.8   Linux, Standards, and the Linux Standard Base
    1.4   Summary

    2   FUNDAMENTAL CONCEPTS
    2.1   The Core Operating System: The Kernel
    2.2   The Shell
    2.3   Users and Groups
    2.4   Single Directory Hierarchy, Directories, Links, and Files
    2.5   File I/O Model
    2.6   Programs
    2.7   Processes
    2.8   Memory Mappings
    2.9   Static and Shared Libraries
    2.10   Interprocess Communication and Synchronization
    2.11   Signals
    2.12   Threads
    2.13   Process Groups and Shell Job Control
    2.14   Sessions, Controlling Terminals, and Controlling Processes
    2.15   Pseudoterminals
    2.16   Date and Time
    2.17   Client-Server Architecture
    2.18   Realtime
    2.19   The /proc File System
    2.20   Summary

    3   SYSTEM PROGRAMMING CONCEPTS
    3.1   System Calls
    3.2   Library Functions
    3.3   The Standard C Library; The GNU C Library (glibc)
    3.4   Handling Errors from System Calls and Library Functions
    3.5   Notes on the Example Programs in This Book
    3.5.1   Command-Line Options and Arguments
    3.5.2   Common Functions and Header Files
    3.6   Portability Issues
    3.6.1   Feature Test Macros
    3.6.2   System Data Types
    3.6.3   Miscellaneous Portability Issues
    3.7   Summary
    3.8   Exercise

    4   FILE I/O: THE UNIVERSAL I/O MODEL
    4.1   Overview
    4.2   Universality of I/O
    4.3   Opening a File: open()
    4.3.1   The open() flags Argument
    4.3.2   Errors from open()
    4.3.3   The creat() System Call
    4.4   Reading from a File: read()
    4.5   Writing to a File: write()
    4.6   Closing a File: close()
    4.7   Changing the File Offset: lseek()
    4.8   Operations Outside the Universal I/O Model: ioctl()
    4.9   Summary
    4.10   Exercises

    5   FILE I/O: FURTHER DETAILS
    5.1   Atomicity and Race Conditions
    5.2   File Control Operations: fcntl()
    5.3   Open File Status Flags
    5.4   Relationship Between File Descriptors and Open Files
    5.5   Duplicating File Descriptors
    5.6   File I/O at a Specified Offset: pread() and pwrite()
    5.7   Scatter-Gather I/O: readv() and writev()
    5.8   Truncating a File: truncate() and ftruncate()
    5.9   Nonblocking I/O
    5.10   I/O on Large Files
    5.11   The /dev/fd Directory
    5.12   Creating Temporary Files
    5.13   Summary
    5.14   Exercises

    6   PROCESSES
    6.1   Processes and Programs
    6.2   Process ID and Parent Process ID
    6.3   Memory Layout of a Process
    6.4   Virtual Memory Management
    6.5   The Stack and Stack Frames
    6.6   Command-Line Arguments (argc, argv)
    6.7   Environment List
    6.8   Performing a Nonlocal Goto: setjmp() and longjmp()
    6.9   Summary
    6.10   Exercises

    7   MEMORY ALLOCATION
    7.1   Allocating Memory on the Heap
    7.1.1   Adjusting the Program Break: brk() and sbrk()
    7.1.2   Allocating Memory on the Heap: malloc() and free()
    7.1.3   Implementation of malloc() and free()
    7.1.4   Other Methods of Allocating Memory on the Heap
    7.2   Allocating Memory on the Stack: alloca()
    7.3   Summary
    7.4   Exercises

    8   USERS AND GROUPS
    8.1   The Password File: /etc/passwd
    8.2   The Shadow Password File: /etc/shadow
    8.3   The Group File: /etc/group
    8.4   Retrieving User and Group Information
    8.5   Password Encryption and User Authentication
    8.6   Summary
    8.7   Exercises

    9   PROCESS CREDENTIALS
    9.1   Real User ID and Real Group ID
    9.2   Effective User ID and Effective Group ID
    9.3   Set-User-ID and Set-Group-ID Programs
    9.4   Saved Set-User-ID and Saved Set-Group-ID
    9.5   File-System User ID and File-System Group ID
    9.6   Supplementary Group IDs
    9.7   Retrieving and Modifying Process Credentials
    9.7.1   Retrieving and Modifying Real, Effective, and Saved Set IDs
    9.7.2   Retrieving and Modifying File-System IDs
    9.7.3   Retrieving and Modifying Supplementary Group IDs
    9.7.4   Summary of Calls for Modifying Process Credentials
    9.7.5   Example: Displaying Process Credentials
    9.8   Summary
    9.9   Exercises

    10   TIME
    10.1   Calendar Time
    10.2   Time-Conversion Functions
    10.2.1   Converting time\_t to Printable Form
    10.2.2   Converting Between time\_t and Broken-Down Time
    10.2.3   Converting Between Broken-Down Time and Printable Form
    10.3   Timezones
    10.4   Locales
    10.5   Updating the System Clock
    10.6   The Software Clock (Jiffies)
    10.7   Process Time
    10.8   Summary
    10.9   Exercise

    11   SYSTEM LIMITS AND OPTIONS
    11.1   System Limits
    11.2   Retrieving System Limits (and Options) at Run Time
    11.3   Retrieving File-Related Limits (and Options) at Run Time
    11.4   Indeterminate Limits
    11.5   System Options
    11.6   Summary
    11.7   Exercises

    12   SYSTEM AND PROCESS INFORMATION
    12.1   The /proc File System
    12.1.1   Obtaining Information About a Process: /proc/PID
    12.1.2   System Information Under /proc
    12.1.3   Accessing /proc Files
    12.2   System Identification: uname()
    12.3   Summary
    12.4   Exercises

    13   FILE I/O BUFFERING
    13.1   Kernel Buffering of File I/O: The Buffer Cache
    13.2   Buffering in the stdio Library
    13.3   Controlling Kernel Buffering of File I/O
    13.4   Summary of I/O Buffering
    13.5   Giving the Kernel Hints About I/O Patterns: posix\_fadvise()
    13.6   Bypassing the Buffer Cache: Direct I/O
    13.7   Mixing Library Functions and System Calls for File I/O
    13.8   Summary
    13.9   Exercises

    14   FILE SYSTEMS
    14.1   Device Special Files (Devices)
    14.2   Disks and Partitions
    14.3   File Systems
    14.4   I-nodes
    14.5   The Virtual File System (VFS)
    14.6   Journaling File Systems
    14.7   Single Directory Hierarchy and Mount Points
    14.8   Mounting and Unmounting File Systems
    14.8.1   Mounting a File System: mount()
    14.8.2   Unmounting a File System: umount() and umount2()
    14.9   Advanced Mount Features
    14.9.1   Mounting a File System at Multiple Mount Points
    14.9.2   Stacking Multiple Mounts on the Same Mount Point
    14.9.3   Mount Flags That Are Per-Mount Options
    14.9.4   Bind Mounts
    14.9.5   Recursive Bind Mounts
    14.10   A Virtual Memory File System: tmpfs
    14.11   Obtaining Information About a File System: statvfs()
    14.12   Summary
    14.13   Exercise

    15   FILE ATTRIBUTES
    15.1   Retrieving File Information: stat()
    15.2   File Timestamps
    15.2.1   Changing File Timestamps with utime() and utimes()
    15.2.2   Changing File Timestamps with utimensat() and futimens()
    15.3   File Ownership
    15.3.1   Ownership of New Files
    15.3.2   Changing File Ownership: chown(), fchown(), and lchown()
    15.4   File Permissions
    15.4.1   Permissions on Regular Files
    15.4.2   Permissions on Directories
    15.4.3   Permission-Checking Algorithm
    15.4.4   Checking File Accessibility: access()
    15.4.5   Set-User-ID, Set-Group-ID, and Sticky Bits
    15.4.6   The Process File Mode Creation Mask: umask()
    15.4.7   Changing File Permissions: chmod() and fchmod()
    15.5   I-node Flags (ext2 Extended File Attributes)
    15.6   Summary
    15.7   Exercises

    16   EXTENDED ATTRIBUTES
    16.1   Overview
    16.2   Extended Attribute Implementation Details
    16.3   System Calls for Manipulating Extended Attributes
    16.4   Summary
    16.5   Exercise

    17   ACCESS CONTROL LISTS
    17.1   Overview
    17.2   ACL Permission-Checking Algorithm
    17.3   Long and Short Text Forms for ACLs
    17.4   The ACL\_MASK Entry and the ACL Group Class
    17.5   The getfacl and setfacl Commands
    17.6   Default ACLs and File Creation
    17.7   ACL Implementation Limits
    17.8   The ACL API
    17.9   Summary
    17.10   Exercise

    18   DIRECTORIES AND LINKS
    18.1   Directories and (Hard) Links
    18.2   Symbolic (Soft) Links
    18.3   Creating and Removing (Hard) Links: link() and unlink()
    18.4   Changing the Name of a File: rename()
    18.5   Working with Symbolic Links: symlink() and readlink()
    18.6   Creating and Removing Directories: mkdir() and rmdir()
    18.7   Removing a File or Directory: remove()
    18.8   Reading Directories: opendir() and readdir()
    18.9   File Tree Walking: nftw()
    18.10   The Current Working Directory of a Process
    18.11   Operating Relative to a Directory File Descriptor
    18.12   Changing the Root Directory of a Process: chroot()
    18.13   Resolving a Pathname: realpath()
    18.14   Parsing Pathname Strings: dirname() and basename()
    18.15   Summary
    18.16   Exercises

    19   MONITORING FILE EVENTS
    19.1   Overview
    19.2   The inotify API
    19.3   inotify Events
    19.4   Reading inotify Events
    19.5   Queue Limits and /proc Files
    19.6   An Older System for Monitoring File Events: dnotify
    19.7   Summary
    19.8   Exercise

    20   SIGNALS: FUNDAMENTAL CONCEPTS
    20.1   Concepts and Overview
    20.2   Signal Types and Default Actions
    20.3   Changing Signal Dispositions: signal()
    20.4   Introduction to Signal Handlers
    20.5   Sending Signals: kill()
    20.6   Checking for the Existence of a Process
    20.7   Other Ways of Sending Signals: raise() and killpg()
    20.8   Displaying Signal Descriptions
    20.9   Signal Sets
    20.10   The Signal Mask (Blocking Signal Delivery)
    20.11   Pending Signals
    20.12   Signals Are Not Queued
    20.13   Changing Signal Dispositions: sigaction()
    20.14   Waiting for a Signal: pause()
    20.15   Summary
    20.16   Exercises

    21   SIGNALS: SIGNAL HANDLERS
    21.1   Designing Signal Handlers
    21.1.1   Signals Are Not Queued (Revisited)
    21.1.2   Reentrant and Async-Signal-Safe Functions
    21.1.3   Global Variables and the sig\_atomic\_t Data Type
    21.2   Other Methods of Terminating a Signal Handler
    21.2.1   Performing a Nonlocal Goto from a Signal Handler
    21.2.2   Terminating a Process Abnormally: abort()
    21.3   Handling a Signal on an Alternate Stack: sigaltstack()
    21.4   The SA\_SIGINFO Flag
    21.5   Interruption and Restarting of System Calls
    21.6   Summary
    21.7   Exercise

    22   SIGNALS: ADVANCED FEATURES
    22.1   Core Dump Files
    22.2   Special Cases for Signal Delivery, Disposition, and Handling
    22.3   Interruptible and Uninterruptible Process Sleep States
    22.4   Hardware-Generated Signals
    22.5   Synchronous and Asynchronous Signal Generation
    22.6   Timing and Order of Signal Delivery
    22.7   Implementation and Portability of signal()
    22.8   Realtime Signals
    22.8.1   Sending Realtime Signals
    22.8.2   Handling Realtime Signals
    22.9   Waiting for a Signal Using a Mask: sigsuspend()
    22.10   Synchronously Waiting for a Signal
    22.11   Fetching Signals via a File Descriptor
    22.12   Interprocess Communication with Signals
    22.13   Earlier Signal APIs (System V and BSD)
    22.14   Summary
    22.15   Exercises

    23   TIMERS AND SLEEPING
    23.1   Interval Timers
    23.2   Scheduling and Accuracy of Timers
    23.3   Setting Timeouts on Blocking Operations
    23.4   Suspending Execution for a Fixed Interval (Sleeping)
    23.4.1   Low-Resolution Sleeping: sleep()
    23.4.2   High-Resolution Sleeping: nanosleep()
    23.5   POSIX Clocks
    23.5.1   Retrieving the Value of a Clock: clock\_gettime()
    23.5.2   Setting the Value of a Clock: clock\_settime()
    23.5.3   Obtaining the Clock ID of a Specific Process or Thread
    23.5.4   Improved High-Resolution Sleeping: clock\_nanosleep()
    23.6   POSIX Interval Timers
    23.6.1   Creating a Timer: timer\_create()
    23.6.2   Arming and Disarming a Timer: timer\_settime()
    23.6.3   Retrieving the Current Value of a Timer: timer\_gettime()
    23.6.4   Deleting a Timer: timer\_delete()
    23.6.5   Notification via a Signal
    23.6.6   Timer Overruns
    23.6.7   Notification via a Thread
    23.7   Timers That Notify via File Descriptors: the timerfd API
    23.8   Summary
    23.9   Exercises

    24   PROCESS CREATION
    24.1   Overview of fork(), exit(), wait(), and execve()
    24.2   Creating a New Process: fork()
    24.2.1   File Sharing Between Parent and Child
    24.2.2   Memory Semantics of fork()
    24.3   The vfork() System Call
    24.4   Race Conditions After fork()
    24.5   Avoiding Race Conditions by Synchronizing with Signals
    24.6   Summary

    25   PROCESS TERMINATION
    25.1   Terminating a Process: \_exit() and exit()
    25.2   Details of Process Termination
    25.3   Exit Handlers
    25.4   Interactions Between fork(), stdio Buffers, and \_exit()
    25.5   Summary
    25.6   Exercise

    26   MONITORING CHILD PROCESSES
    26.1   Waiting on a Child Process
    26.1.1   The wait() System Call
    26.1.2   The waitpid() System Call
    26.1.3   The Wait Status Value
    26.1.4   Process Termination from a Signal Handler
    26.1.5   The waitid() System Call
    26.1.6   The wait3() and wait4() System Calls
    26.2   Orphans and Zombies
    26.3   The SIGCHLD Signal
    26.3.1   Establishing a Handler for SIGCHLD
    26.3.2   Delivery of SIGCHLD for Stopped Children
    26.3.3   Ignoring Dead Child Processes
    26.4   Summary
    26.5   Exercises

    27   PROGRAM EXECUTION
    27.1   Executing a New Program: execve()
    27.2   The exec() Library Functions
    27.2.1   The PATH Environment Variable
    27.2.2   Specifying Program Arguments As a List
    27.2.3   Passing the Caller's Environment to the New Program
    27.2.4   Executing a File Referred to by a Descriptor: fexecve()
    27.3   Interpreter Scripts
    27.4   File Descriptors and exec()
    27.5   Signals and exec()
    27.6   Executing a Shell Command: system()
    27.7   Implementing system()
    27.8   Summary
    27.9   Exercises

    28   PROCESS CREATION AND PROGRAM EXECUTION IN MORE DETAIL
    28.1   Process Accounting
    28.2   The clone() System Call
    28.2.1   The clone() flags Argument
    28.2.2   Extensions to waitpid() for Cloned Children
    28.3   Speed of Process Creation
    28.4   Effect of exec() and fork() on Process Attributes
    28.5   Summary
    28.6   Exercise

    29   THREADS: INTRODUCTION
    29.1   Overview
    29.2   Background Details of the Pthreads API
    29.3   Thread Creation
    29.4   Thread Termination
    29.5   Thread IDs
    29.6   Joining with a Terminated Thread: pthread\_join()
    29.7   Detaching a Thread: pthread\_detach()
    29.8   Thread Attributes
    29.9   Threads Versus Processes
    29.10   Summary
    29.11   Exercises

    30   THREADS: THREAD SYNCHRONIZATION
    30.1   Protecting Accesses to Shared Variables: Mutexes
    30.1.1   Statically Allocated Mutexes
    30.1.2   Locking and Unlocking a Mutex
    30.1.3   Performance of Mutexes
    30.1.4   Mutex Deadlocks
    30.1.5   Dynamically Initializing a Mutex
    30.1.6   Mutex Attributes
    30.1.7   Mutex Types
    30.2   Signaling Changes of State: Condition Variables
    30.2.1   Statically Allocated Condition Variables
    30.2.2   Signaling and Waiting on Condition Variables
    30.2.3   Testing a Condition Variable's Predicate
    30.2.4   Example Program: Joining Any Terminated Thread
    30.2.5   Dynamically Allocated Condition Variables
    30.3   Summary
    30.4   Exercises

    31   THREADS: THREAD SAFETY AND PER-THREAD STORAGE
    31.1   Thread Safety (and Reentrancy Revisited)
    31.2   One-Time Initialization
    31.3   Thread-Specific Data
    31.3.1   Thread-Specific Data from the Library Function's Perspective
    31.3.2   Overview of the Thread-Specific Data API
    31.3.3   Details of the Thread-Specific Data API
    31.3.4   Employing the Thread-Specific Data API
    31.3.5   Thread-Specific Data Implementation Limits
    31.4   Thread-Local Storage
    31.5   Summary
    31.6   Exercises

    32   THREADS: THREAD CANCELLATION
    32.1   Canceling a Thread
    32.2   Cancellation State and Type
    32.3   Cancellation Points
    32.4   Testing for Thread Cancellation
    32.5   Cleanup Handlers
    32.6   Asynchronous Cancelability
    32.7   Summary
    32.8   Exercises

    33   THREADS: FURTHER DETAILS
    33.1   Thread Stacks
    33.2   Threads and Signals
    33.2.1   How the UNIX Signal Model Maps to Threads
    33.2.2   Manipulating the Thread Signal Mask
    33.2.3   Sending a Signal to a Thread
    33.2.4   Dealing with Asynchronous Signals Sanely
    33.3   Threads and Process Control
    33.4   Thread Implementation Models
    33.5   Linux Implementations of POSIX Threads
    33.5.1   LinuxThreads
    33.5.2   NPTL
    33.5.3   Which Threading Implementation?
    33.6   Advanced Features of the Pthreads API
    33.7   Summary
    33.8   Exercises

    34   PROCESS GROUPS, SESSIONS, AND JOB CONTROL
    34.1   Overview
    34.2   Process Groups
    34.3   Sessions
    34.4   Controlling Terminals and Controlling Processes
    34.5   Foreground and Background Process Groups
    34.6   The SIGHUP Signal
    34.6.1   Handling of SIGHUP by the Shell
    34.6.2   SIGHUP and Termination of the Controlling Process
    34.7   Job Control
    34.7.1   Using Job Control Within the Shell
    34.7.2   Implementing Job Control
    34.7.3   Handling Job-Control Signals
    34.7.4   Orphaned Process Groups (and SIGHUP Revisited)
    34.8   Summary
    34.9   Exercises

    35   PROCESS PRIORITIES AND SCHEDULING
    35.1   Process Priorities (Nice Values)
    35.2   Overview of Realtime Process Scheduling
    35.2.1   The SCHED\_RR Policy
    35.2.2   The SCHED\_FIFO Policy
    35.2.3   The SCHED\_BATCH and SCHED\_IDLE Policies
    35.3   Realtime Process Scheduling API
    35.3.1   Realtime Priority Ranges
    35.3.2   Modifying and Retrieving Policies and Priorities
    35.3.3   Relinquishing the CPU
    35.3.4   The SCHED\_RR Time Slice
    35.4   CPU Affinity
    35.5   Summary
    35.6   Exercises

    36   PROCESS RESOURCES
    36.1   Process Resource Usage: getrusage()
    36.2   Process Resource Limits: getrlimit() and setrlimit()
    36.3   Details of Specific Resource Limits
    36.4   Summary
    36.5   Exercises

    37   DAEMONS
    37.1   Overview
    37.2   Creating a Daemon
    37.3   Guidelines for Writing Daemons
    37.4   Using SIGHUP to Reinitialize a Daemon
    37.5   Logging Messages and Errors Using syslog
    37.5.1   Overview
    37.5.2   The syslog API
    37.5.3   The /etc/syslog.conf File
    37.6   Summary
    37.7   Exercise

    38   WRITING SECURE PRIVILEGED PROGRAMS
    38.1   Is a Set-User-ID or Set-Group-ID Program Required?
    38.2   Operate with Least Privilege
    38.3   Be Careful when Executing a Program
    38.4   Avoid Exposing Sensitive Information
    38.5   Confine the Process
    38.6   Beware of Signals and Race Conditions
    38.7   Pitfalls when Performing File Operations and File I/O
    38.8   Don't Trust Inputs or the Environment
    38.9   Beware of Buffer Overruns
    38.10   Beware of Denial-of-Service Attacks
    38.11   Check for Failures; Fail Safely
    38.12   Summary
    38.13   Exercises

    39   CAPABILITIES
    39.1   Rationale for Capabilities
    39.2   The Linux Capabilities
    39.3   Process and File Capabilities
    39.3.1   Process Capabilities
    39.3.2   File Capabilities
    39.3.3   Purpose of the Process Permitted and Effective Capability Sets
    39.3.4   Purpose of the File Permitted and Effective Capability Sets
    39.3.5   Purpose of the Process and File Inheritable Sets
    39.3.6   Assigning and Viewing File Capabilities from the Shell
    39.4   The Modern Capabilities Implementation
    39.5   Transformation of Process Capabilities During exec()
    39.5.1   Capability Bounding Set
    39.5.2   Preserving root Semantics
    39.6   Effect on Process Capabilities of Changing User IDs
    39.7   Changing Process Capabilities Programmatically
    39.8   Creating Capabilities-Only Environments
    39.9   Discovering the Capabilities Required by a Program
    39.10   Older Kernels and Systems Without File Capabilities
    39.11   Summary
    39.12   Exercise

    40   LOGIN ACCOUNTING
    40.1   Overview of the utmp and wtmp Files
    40.2   The utmpx API
    40.3   The utmpx Structure
    40.4   Retrieving Information from the utmp and wtmp Files
    40.5   Retrieving the Login Name: getlogin()
    40.6   Updating the utmp and wtmp Files for a Login Session
    40.7   The lastlog File
    40.8   Summary
    40.9   Exercises

    41   FUNDAMENTALS OF SHARED LIBRARIES
    41.1   Object Libraries
    41.2   Static Libraries
    41.3   Overview of Shared Libraries
    41.4   Creating and Using Shared Libraries—A First Pass
    41.4.1   Creating a Shared Library
    41.4.2   Position-Independent Code
    41.4.3   Using a Shared Library
    41.4.4   The Shared Library Soname
    41.5   Useful Tools for Working with Shared Libraries
    41.6   Shared Library Versions and Naming Conventions
    41.7   Installing Shared Libraries
    41.8   Compatible Versus Incompatible Libraries
    41.9   Upgrading Shared Libraries
    41.10   Specifying Library Search Directories in an Object File
    41.11   Finding Shared Libraries at Run Time
    41.12   Run-Time Symbol Resolution
    41.13   Using a Static Library Instead of a Shared Library
    41.14   Summary
    41.15   Exercise

    42   ADVANCED FEATURES OF SHARED LIBRARIES
    42.1   Dynamically Loaded Libraries
    42.1.1   Opening a Shared Library
    42.1.2   Diagnosing Errors from the dlopen API
    42.1.3   Obtaining the Address of a Symbol: dlsym()
    42.1.4   Closing a Shared Library: dlclose()
    42.1.5   Obtaining Information About Loaded Symbols: dladdr()
    42.1.6   Accessing Symbols in the Main Program
    42.2   Controlling Symbol Visibility
    42.3   Linker Version Scripts
    42.3.1   Controlling Symbol Visibility with Version Scripts
    42.3.2   Symbol Versioning
    42.4   Initialization and Finalization Functions
    42.5   Preloading Shared Libraries
    42.6   Monitoring the Dynamic Linker: LD\_DEBUG
    42.7   Summary
    42.8   Exercises

    43   INTERPROCESS COMMUNICATION OVERVIEW
    43.1   A Taxonomy of IPC Facilities
    43.2   Communication Facilities
    43.3   Synchronization Facilities
    43.4   Comparing IPC Facilities
    43.5   Summary
    43.6   Exercises

    44   PIPES AND FIFOS
    44.1   Overview
    44.2   Creating and Using Pipes
    44.3   Pipes As a Method of Process Synchronization
    44.4   Using Pipes to Connect Filters
    44.5   Talking to a Shell Command via a Pipe: popen() and pclose()
    44.6   Pipes and stdio Buffering
    44.7   FIFOs
    44.8   A Client-Server Application Using FIFOs
    44.9   Nonblocking I/O
    44.10   Semantics of read() and write() on Pipes and FIFOs
    44.11   Summary
    44.12   Exercises

    45   INTRODUCTION TO SYSTEM V IPC
    45.1   API Overview
    45.2   IPC Keys
    45.3   Associated Data Structure and Object Permissions
    45.4   IPC Identifiers and Client-Server Applications
    45.5   Algorithm Employed by System V IPC get Calls
    45.6   The ipcs and ipcrm Commands
    45.7   Obtaining a List of All IPC Objects
    45.8   IPC Limits
    45.9   Summary
    45.10   Exercises

    46   SYSTEM V MESSAGE QUEUES
    46.1   Creating or Opening a Message Queue: msgget()
    46.2   Exchanging Messages
    46.2.1   Sending Messages: msgsnd()
    46.2.2   Receiving Messages: msgrcv()
    46.3   Message Queue Control Operations: msgctl()
    46.4   Message Queue Associated Data Structure
    46.5   Message Queue Limits
    46.6   Displaying All Message Queues on the System
    46.7   Client-Server Programming with Message Queues
    46.8   A File-Server Application Using Message Queues
    46.9   Disadvantages of System V Message Queues
    46.10   Summary
    46.11   Exercises

    47   SYSTEM V SEMAPHORES
    47.1   Overview
    47.2   Creating or Opening a Semaphore Set: semget()
    47.3   Semaphore Control Operations: semctl()
    47.4   Semaphore Associated Data Structure
    47.5   Semaphore Initialization
    47.6   Semaphore Operations: semop()
    47.7   Handling of Multiple Blocked Semaphore Operations
    47.8   Semaphore Undo Values
    47.9   Implementing a Binary Semaphores Protocol
    47.10   Semaphore Limits
    47.11   Disadvantages of System V Semaphores
    47.12   Summary
    47.13   Exercises

    48   SYSTEM V SHARED MEMORY
    48.1   Overview
    48.2   Creating or Opening a Shared Memory Segment: shmget()
    48.3   Using Shared Memory: shmat() and shmdt()
    48.4   Example: Transferring Data Via Shared Memory
    48.5   Location of Shared Memory Segments in Virtual Memory
    48.6   Storing Pointers in Shared Memory
    48.7   Shared Memory Control Operations: shmctl()
    48.8   Shared Memory Associated Data Structure
    48.9   Shared Memory Limits
    48.10   Summary
    48.11   Exercises

    49   MEMORY MAPPINGS
    49.1   Overview
    49.2   Creating a Mapping: mmap()
    49.3   Unmapping a Mapped Region: munmap()
    49.4   File Mappings
    49.4.1   Private File Mappings
    49.4.2   Shared File Mappings
    49.4.3   Boundary Cases
    49.4.4   Memory Protection and File Access Mode Interactions
    49.5   Synchronizing a Mapped Region: msync()
    49.6   Additional mmap() Flags
    49.7   Anonymous Mappings
    49.8   Remapping a Mapped Region: mremap()
    49.9   The MAP\_NORESERVE Flag and Swap Space Overcommitting
    49.10   The MAP\_FIXED Flag
    49.11   Nonlinear Mappings: remap\_file\_pages()
    49.12   Summary
    49.13   Exercises

    50   VIRTUAL MEMORY OPERATIONS
    50.1   Changing Memory Protection: mprotect()
    50.2   Memory Locking: mlock() and mlockall()
    50.3   Determining Memory Residence: mincore()
    50.4   Advising Future Memory Usage Patterns: madvise()
    50.5   Summary
    50.6   Exercises

    51   INTRODUCTION TO POSIX IPC
    51.1   API Overview
    51.2   Comparison of System V IPC and POSIX IPC
    51.3   Summary

    52   POSIX MESSAGE QUEUES
    52.1   Overview
    52.2   Opening, Closing, and Unlinking a Message Queue
    52.3   Relationship Between Descriptors and Message Queues
    52.4   Message Queue Attributes
    52.5   Exchanging Messages
    52.5.1   Sending Messages: mq\_send()
    52.5.2   Receiving Messages: mq\_receive()
    52.5.3   Sending and Receiving Messages with a Timeout
    52.6   Message Notification
    52.6.1   Receiving Notification via a Signal
    52.6.2   Receiving Notification via a Thread
    52.7   Linux-Specific Features
    52.8   Message Queue Limits
    52.9   Comparison of POSIX and System V Message Queues
    52.10   Summary
    52.11   Exercises

    53   POSIX SEMAPHORES
    53.1   Overview
    53.2   Named Semaphores
    53.2.1   Opening a Named Semaphore
    53.2.2   Closing a Semaphore
    53.2.3   Removing a Named Semaphore
    53.3   Semaphore Operations
    53.3.1   Waiting on a Semaphore
    53.3.2   Posting a Semaphore
    53.3.3   Retrieving the Current Value of a Semaphore
    53.4   Unnamed Semaphores
    53.4.1   Initializing an Unnamed Semaphore
    53.4.2   Destroying an Unnamed Semaphore
    53.5   Comparisons with Other Synchronization Techniques
    53.6   Semaphore Limits
    53.7   Summary
    53.8   Exercises

    54   POSIX SHARED MEMORY
    54.1   Overview
    54.2   Creating Shared Memory Objects: shm\_open()
    54.3   Using Shared Memory Objects
    54.4   Removing Shared Memory Objects: shm\_unlink()
    54.5   Comparisons Between Shared Memory APIs
    54.6   Summary
    54.7   Exercise

    55   FILE LOCKING
    55.1   Overview
    55.2   File Locking with flock()
    55.2.1   Semantics of Lock Inheritance and Release
    55.2.2   Limitations of flock()
    55.3   Record Locking with fcntl()
    55.3.1   Deadlock
    55.3.2   Example: An Interactive Locking Program
    55.3.3   Example: A Library of Locking Functions
    55.3.4   Lock Limits and Performance
    55.3.5   Semantics of Lock Inheritance and Release
    55.3.6   Lock Starvation and Priority of Queued Lock Requests
    55.4   Mandatory Locking
    55.5   The /proc/locks File
    55.6   Running Just One Instance of a Program
    55.7   Older Locking Techniques
    55.8   Summary
    55.9   Exercises

    56   SOCKETS: INTRODUCTION
    56.1   Overview
    56.2   Creating a Socket: socket()
    56.3   Binding a Socket to an Address: bind()
    56.4   Generic Socket Address Structures: struct sockaddr
    56.5   Stream Sockets
    56.5.1   Listening for Incoming Connections: listen()
    56.5.2   Accepting a Connection: accept()
    56.5.3   Connecting to a Peer Socket: connect()
    56.5.4   I/O on Stream Sockets
    56.5.5   Connection Termination: close()
    56.6   Datagram Sockets
    56.6.1   Exchanging Datagrams: recvfrom() and sendto()
    56.6.2   Using connect() with Datagram Sockets
    56.7   Summary

    57   SOCKETS: UNIX DOMAIN
    57.1   UNIX Domain Socket Addresses: struct sockaddr\_un
    57.2   Stream Sockets in the UNIX Domain
    57.3   Datagram Sockets in the UNIX Domain
    57.4   UNIX Domain Socket Permissions
    57.5   Creating a Connected Socket Pair: socketpair()
    57.6   The Linux Abstract Socket Namespace
    57.7   Summary
    57.8   Exercises

    58   SOCKETS: FUNDAMENTALS OF TCP/IP NETWORKS
    58.1   Internets
    58.2   Networking Protocols and Layers
    58.3   The Data-Link Layer
    58.4   The Network Layer: IP
    58.5   IP Addresses
    58.6   The Transport Layer
    58.6.1   Port Numbers
    58.6.2   User Datagram Protocol (UDP)
    58.6.3   Transmission Control Protocol (TCP)
    58.7   Requests for Comments (RFCs)
    58.8   Summary

    59   SOCKETS: INTERNET DOMAINS
    59.1   Internet Domain Sockets
    59.2   Network Byte Order
    59.3   Data Representation
    59.4   Internet Socket Addresses
    59.5   Overview of Host and Service Conversion Functions
    59.6   IPv6 and IPv4 Address Conversion: inet\_pton() and inet\_ntop()
    59.7   Client-Server Example (Datagram Sockets)
    59.8   Domain Name System (DNS)
    59.9   The /etc/services File
    59.10   Protocol-Independent Host and Service Conversion
    59.10.1   The getaddrinfo() Function
    59.10.2   Freeing addrinfo Lists: freeaddrinfo()
    59.10.3   Diagnosing Errors: gai\_strerror()
    59.10.4   The getnameinfo() Function
    59.11   Client-Server Example (Stream Sockets)
    59.12   An Internet Domain Sockets Library
    59.13   Obsolete APIs for Host, Service, and Address Conversion
    59.13.1   The inet\_aton() and inet\_ntoa() Functions
    59.13.2   The gethostbyname() and gethostbyaddr() Functions
    59.13.3   The getservbyname() and getservbyport() Functions
    59.14   UNIX Versus Internet Domain Sockets
    59.15   Further Information
    59.16   Summary
    59.17   Exercises

    60   SOCKETS: SERVER DESIGN
    60.1   Iterative and Concurrent Servers
    60.2   An Iterative UDP echo Server
    60.3   A Concurrent TCP echo Server
    60.4   Other Concurrent Server Designs
    60.5   The inetd (Internet Superserver) Daemon
    60.6   Summary
    60.7   Exercises

    61   SOCKETS: ADVANCED TOPICS
    61.1   Partial Reads and Writes on Stream Sockets
    61.2   The shutdown() system call
    61.3   Socket-Specific I/O System Calls: recv() and send()
    61.4   The sendfile() System Call
    61.5   Retrieving Socket Addresses: getsockname() and getpeername()
    61.6   A Closer Look at TCP
    61.6.1   Format of a TCP Segment
    61.6.2   TCP Sequence Numbers and Acknowledgements
    61.6.3   TCP State Machine and State Transition Diagram
    61.6.4   TCP Connection Establishment
    61.6.5   TCP Connection Termination
    61.6.6   Calling shutdown() on a TCP Socket
    61.6.7   The TIME\_WAIT State
    61.7   Monitoring Sockets: netstat
    61.8   Using tcpdump to Monitor TCP Traffic
    61.9   Socket Options: setsockopt() and getsockopt()
    61.10   The SO\_REUSEADDR Socket Option
    61.11   Inheritance of File Flags and Socket Options across accept()
    61.12   TCP Versus UDP
    61.13   Advanced Features
    61.13.1   Out-of-Band Data
    61.13.2   The sendmsg() and recvmsg() System Calls
    61.13.3   Passing File Descriptors
    61.13.4   Receiving Sender Credentials
    61.13.5   Sequenced-Packet Sockets
    61.13.6   SCTP and DCCP Transport-Layer Protocols
    61.14   Summary
    61.15   Exercises

    62   TERMINALS
    62.1   Overview
    62.2   Retrieving and Modifying Terminal Attributes
    62.3   The stty Command
    62.4   Terminal Special Characters
    62.5   Terminal Flags
    62.6   Terminal I/O Modes
    62.6.1   Canonical Mode
    62.6.2   Noncanonical Mode
    62.6.3   Cooked, Cbreak, and Raw Modes
    62.7   Terminal Line Speed (Bit Rate)
    62.8   Terminal Line Control
    62.9   Terminal Window Size
    62.10   Terminal Identification
    62.11   Summary
    62.12   Exercises

    63   ALTERNATIVE I/O MODELS
    63.1   Overview
    63.1.1   Level-Triggered and Edge-Triggered Notification
    63.1.2   Employing Nonblocking I/O with Alternative I/O Models
    63.2   I/O Multiplexing
    63.2.1   The select() System Call
    63.2.2   The poll() System Call
    63.2.3   When Is a File Descriptor Ready?
    63.2.4   Comparison of select() and poll()
    63.2.5   Problems with select() and poll()
    63.3   Signal-Driven I/O
    63.3.1   When Is "I/O Possible" Signaled?
    63.3.2   Refining the Use of Signal-Driven I/O
    63.4   The epoll API
    63.4.1   Creating an epoll Instance: epoll\_create()
    63.4.2   Modifying the epoll Interest List: epoll\_ctl()
    63.4.3   Waiting for Events: epoll\_wait()
    63.4.4   A Closer Look at epoll Semantics
    63.4.5   Performance of epoll Versus I/O Multiplexing
    63.4.6   Edge-Triggered Notification
    63.5   Waiting on Signals and File Descriptors
    63.5.1   The pselect() System Call
    63.5.2   The Self-Pipe Trick
    63.6   Summary
    63.7   Exercises

    64   PSEUDOTERMINALS
    64.1   Overview

    64.2   UNIX 98 Pseudoterminals
    64.2.1   Opening an Unused Master: posix\_openpt()
    64.2.2   Changing Slave Ownership and Permissions: grantpt()
    64.2.3   Unlocking the Slave: unlockpt()
    64.2.4   Obtaining the Name of the Slave: ptsname()
    64.3   Opening a Pseudoterminal Master: ptyMasterOpen()
    64.4   Connecting Two Processes with a Pseudoterminal: ptyFork()
    64.5   Pseudoterminal I/O
    64.6   Implementing script(1)
    64.7   Terminal Attributes and Window Size
    64.8   BSD Pseudoterminals
    64.9   Summary
    64.10   Exercises

    A   TRACING SYSTEM CALLS
    B   PARSING COMMAND-LINE OPTIONS
    C   CASTING THE NULL POINTER
    D   KERNEL CONFIGURATION
    E   FURTHER SOURCES OF INFORMATION
    F   SOLUTIONS TO SELECTED EXERCISES
    BIBLIOGRAPHY
    INDEX


* * *

/The Cover Story
================
https://www.man7.org/tlpi/cover/index.html

Many people have commented that they really like the cover design of _The Linux Programming Interface_. I really like it too.

The cover looks simple, but as usual, good design, even when the results look simple, requires a lot of work. A lot of people were involved in that work.

I wanted a design that incorporated a [koru], a traditional New Zealand pattern that is an integral part of Māori art. The koru is an iconic image that connected to my homeland and related (loosely) to the subject of the book (the spiral pattern relates to the notion of moving inward from user space towards the kernel, as in when we make a system call).

Initially, Bill Pollock (the head of No Starch Press) and I considered using a stylized koru graphic within one of NSP's themed cover designs (see the [No Starch catalog](https://www.nostarch.com/catalog.htm) for some examples). After some deliberation, we concluded that this wouldn't work, and Bill suggested we use a photograph of the natural object from which the koru derives: an unfurling fern frond.

A bit of web searching turned up this photograph:

![Black Tree Fern](https://www.man7.org/tlpi/cover/34958FP00_w.jpg)

This wonderful image of a Black Tree Fern (_Cyathea Medullaris_; Māori name: _Mamaku_) is taken from the [stock collection](http://www.naturespic.com/contents/) of the well-known and [widely published](http://www.naturespic.com/bookmain/bookmain.html) New Zealand photographer, [Rob Suisted](http://www.naturespic.com/about/about.html) ([blog](http://blog.naturespic.com/)).

Bill and I rapidly agreed that this image would make a great basis for the cover.

The actual cover design was performed by [Octopod Studios](http://www.octopodstudios.com/). After a few iterations reviewed by Bill and me (thanks for private help from [Claudio Scalmazzi](http://www.scalmazzi.ch/) and the [late](http://dearsusquehanna.blogspot.com/2010/09/in-memoriam-karen-korell.html) [Karen Korell](http://splashdownpa.blogspot.com/)), we had a front cover:

![TLPI front cover](https://www.man7.org/tlpi/cover/TLPI-front-cover.png)

Of course, the front is just one-third of the cover… What remained to be done was the spine and the back cover.

The text on the back of the book (the so-called "back cover copy") is the place to succinctly sell the book to the reader. The text was composed partially by the NSP marketing team (who in a number of ways were much better and bolder at selling the idea of the book than me) and partially by me (since, obviously, I had the best knowledge of the technical content of the book).

The author photograph on the back cover was made by a friend of many years, the all-but-professional photographer, Lynley Cook.

The back cover copy and the author photograph went back to [Octopod Studios](http://www.octopodstudios.com/) for completion of the cover design. When the result came back, I thought it looked stunning:

![TLPI complete cover](https://www.man7.org/tlpi/cover/TLPI-complete-cover.png)

(Even the spine of the book left room for good design ideas. Initially, the spine didn't include the fern image. That addition was an inspired last-minute idea by Bill.)


* * *

/_The Linux Programming Interface_ in Brief
===========================================
https://www.man7.org/tlpi/tlpi_in_brief.html

_The Linux Programming Interface_ (2010, [No Starch Press](https://www.nostarch.com/tlpi/)) is a detailed guide and reference for system programming on Linux and UNIX systems.

With 1552 pages, 115 diagrams, 88 tables, nearly 200 example programs, and over 200 exercises, TLPI is the most comprehensive description of Linux and UNIX system programming available.

The author, [Michael Kerrisk], is a software engineer, writer, [trainer], and regular [conference speaker]. He is the maintainer of the Linux [_man-pages_](https://www.kernel.org/doc/man-pages/) project, and has long been active in the documentation, testing, and design review of Linux kernel-user-space interfaces.

The [TLPI web site] contains the [detailed table of contents](https://www.man7.org/tlpi/download/TLPI-TOC-detailed.pdf), [preface], sample chapters, [bibliography], and [index] for download. It also provides complete [source code] for the example programs and a [more detailed description](https://www.man7.org/tlpi/tlpi_in_detail.html) of the book.

TLPI has been very positively reviewed; see the [reviews page].

For information on **ordering** TLPI, see [purchasing TLPI].

![Photo of TLPI](https://www.man7.org/tlpi/TLPI-copy-1.png)
_The author's first copy of TLPI_  
(or see the [complete cover])


* * *

/About _The Linux Programming Interface_
========================================
https://www.man7.org/tlpi/tlpi_in_detail.html

_The Linux Programming Interface_ (TLPI) describes system programming on Linux and UNIX.

![TLPI front cover](https://www.man7.org/tlpi/cover/TLPI-front-cover.png)
(or see the [complete cover])

TLPI is both a guide and reference book for system programming:

*   If you are new to system programming, you can read TLPI linearly as an introductory guide: 
    each chapter builds on concepts presented in earlier chapters, with forward references kept to a minimum. Most chapters conclude with a set of exercises intended to consolidate the reader's understanding of the topics covered in the chapter.

*   If you are an experienced system programmer, TLPI provides a [comprehensive reference] 
    that you can consult for details of nearly the entire Linux and UNIX (i.e., POSIX) system programming interface. To support this use, the book is thoroughly cross referenced and has an extensive [index](https://www.man7.org/tlpi/download/TLPI-Index.pdf).

TLPI provides more than just the technical details of the system programming interface: it gives important context describing why and how to use the interfaces, accompanied by a rich set of (complete) [example programs](https://www.man7.org/tlpi/code/online/index.html).

In the book, I assume that reader has some prior programming experience, a reading knowledge of C, and understands how to use common Linux or UNIX commands. Previous experience of system programming is not required.

Here are some notable features of the book:

*   **Broad and deep topic coverage:** 
    With 1550 pages, 115 diagrams, 88 tables, over 200 exercises, and 15,000 lines of program source code and shell sessions demonstrating the use of the programs, TLPI is the most detailed single-volume description of Linux and UNIX system programming available. As well as the topics covered in many other system programming books, TLPI includes thorough coverage of [multithreaded programming] (5 chapters), [sockets and network programming] (6 chapters), [shared libraries], [secure programming], [memory mappings], [process scheduling], [access control lists], and [login accounting].

*   **Extensive coverage of Linux-specific features:** TLPI covers features 
    such as [_epoll_], [_inotify_], [capabilities] (a mechanism for improving security in privileged programs), [extended attributes] (attaching arbitrary metadata to a file), [i-node flags] (formerly known as _ext2_ extended attributes), the [_clone()_] system call, the [/proc file system], [_signalfd_], and Linux-specific details of the implementation of file I/O, signals, threads, shared libraries, interprocess communication, and sockets.

*   **A heavy [emphasis on portability](http://blog.man7.org/2010/08/standards-and-portability-in-tlpi.html):** 
    You can use TLPI as a guide to system programming on _any_ UNIX system (hence the subtitle, _A Linux and UNIX System Programming Handbook_). TLPI pays close attention to UNIX standards, in particular [POSIX.1-2001/SUSv3](http://www.unix.org/version3/online.html) and [POSIX.1-2008/SUSv4](http://www.opengroup.org/onlinepubs/9699919799/), clearly distinguishing features that are Linux-specific from those that are present on most or all UNIX systems. Consequently, you can use TLPI as a guide while writing programs that need to be portable to all UNIX systems.

*   **The [author](https://www.man7.org/mtk/index.html):** 
    I'm an active member of the Linux community. I've worked on the Linux [_man-pages_](https://www.kernel.org/doc/man-pages/) project since 2000, and have been the project maintainer since 2004. It's quite possible you've already read some of my published work, since I'm the author or coauthor of nearly 40% of the 1000+ pages in the _man-pages_ project.

The programming examples in TLPI are in C, but the concepts are equally applicable in a wide range of other languages, both compiled languages such as C++, Rust, D, Pascal, and FORTRAN, and scripting languages such as Perl, Python, and Ruby.

For more detail about the book, see the [preface].

TLPI has been very positively reviewed; some examples can be found in the [reviews page].

For information on **ordering** TLPI, see [purchasing TLPI].

    Michael Kerrisk

[man7.org] > mtk

* * *

/About Michael Kerrisk
======================
https://www.man7.org/mtk/index.html


//Contact information
---------------------

*   Email: mtk@man7.org; 
    [signed](http://pgp.mit.edu:11371/pks/lookup?op=vindex&search=0x856199113A35CE5E) 
    PGP [key](http://pgp.mit.edu:11371/pks/lookup?op=get&search=0x856199113A35CE5E)
    
    > > (**NOTE:** to make a _man-pages_ bug report, email **Alejandro Colomar <alx@kernel.org>** and CC **linux-man@vger.kernel.org**. For general information on contributing to the project, see the [CONTRIBUTING](https://git.kernel.org/pub/scm/docs/man-pages/man-pages.git/tree/CONTRIBUTING) file.)
    
*   For **contact regarding training courses**, please see [my Linux training page].  
      
    
*   Twitter: [@mkerrisk](https://twitter.com/mkerrisk)  
      
    

//Impressum
-----------

> **Name:**
> 
> Michael Kerrisk, man7.org Training and Consulting
> 
> **Address:**
> 
> Klarastrasse 17, 80636 Munich
> 
> **Telephone:**
> 
> +49 (89) 2155 2990 (German landline) -- **absolutely no recruiter or solicitation calls please!**
> 
> **Email:**
> 
> mtk@man7.org
> 
> **VAT Number (USt-ID-Nr):**
> 
> DE 286549638
> 
> **Responsible for site content:** 
> 
> Michael Kerrisk


//Professional summary
----------------------

Michael Kerrisk is a freelance trainer, writer, and consultant who has been using and programming on UNIX systems since 1987. He is the author of [The Linux Programming Interface], a book [widely-acclaimed] as the [definitive work] on Linux system programming. As a contributor and (past) maintainer of the [Linux man-pages project](https://www.kernel.org/doc/man-pages/), he has been actively involved in the Linux community for more than 20 years, performing testing, design review, and documentation of Linux APIs. (He also [wrote] many of the manual pages that are consulted on a daily basis by thousands of programmers around the world.)

Widely recognized for his Linux work, Michael regularly [presents] at Linux and free software conferences. A sought-after teacher, he conducts [training courses] for companies and governments across Europe and elsewhere around the world.

Michael holds a BSc(Hons) degree in Computer Science as well as a BA in Psychology and Art History, both from the University of Canterbury (NZ).

//A personal journey: getting to know UNIX and Linux
----------------------------------------------------

My exposure to UNIX came in bits and pieces; I first encountered UNIX culture a few years before I actually met UNIX itself.

While I was doing my first (Computer Science) degree, I was introduced to regular expressions via _chef_, a prettied-up version of the early UNIX editor, _ed_, which had been ported to the [PRIMOS] system at the [university](https://www.canterbury.ac.nz/). (At the time, [PRIME Computer] was a significant manufacturer of minicomputer hardware, and a notable competitor to [Digital].) At the same time, I met [Robert Biddle](https://carleton.ca/scs/people/robert-biddle/), then a graduate student fresh from the [University of Waterloo](https://uwaterloo.ca/). Waterloo had a fairly famous Computer Science department (it was the home of [WATFOR], a popular [FORTRAN] compiler of the day), and was much closer to the UNIX wave that was then sweeping academia than New Zealand computer science departments, where UNIX had still to make a widespread appearance. Robert told intriguing stories of UNIX, C, and [Ratfor].

The next step on the way to meeting UNIX came when I met [_emacs_] after taking up a position teaching Computing at the [University of Technology](https://www.unitech.ac.pg/) ("UNITECH"), in [Lae], [Papua New Guinea]. Although _emacs_ is nowadays most often associated with UNIX, it ran on many other operating systems as well, and so my second meeting with a "UNIX" editor was once more on a PRIMOS system. Once upon a time, I could hack up reasonable LISP macros for _emacs_. However, after I left PNG, I didn't see _emacs_ again for several years, and forgot most everything; so, for a long time, I generally stuck to [_vi(m)_]. Later, driven by the need to maintain my sanity while working on large LaTeX/Beamer presentations, I rediscovered the joys of _emacs_.

In 1987, I finally met UNIX and C in person. After a spell of traveling, I ended up in England. There, a friend studying at the University of Sussex had access to a suite of [HP Bobcat] workstations running HP/UX, and the university library had a copy of the first edition of [Marc Rochkind](http://basepath.com/)'s wonderful _Advanced UNIX Programming_. For the next several weeks, I was glued to the workstation with AUP, Kernighan and Ritchie's [The C programming Language], and a printed copy of the C shell man page at my side, writing a multitude of scripts and programs to test how things work. By the end of that time, I'd acquired a reasonable understanding of UNIX, C, and shell scripting.

Soon afterward, I got a job at Digital Equipment Corporation (UK), and soon moved into their training branch, where I was the founding member of what soon became a small group of [ULTRIX] trainers. I specialized in system programming training, and traveled quite a bit around Europe running system programming courses for Digital employees and customers.

A return to New Zealand, a second degree (Psychology plus a good measure of Art History, which gave me a lot more practice writing), and a short spell working on MS Windows applications took me away from UNIX for a few years. I first got interested in Linux when I picked up some Slackware CDs in the mid-1990s, but didn't do any serious work again with it until the late 1990s, when I moved to Munich, where my first job was at a company whose infrastructure was entirely Linux-based. Since then, all of my day jobs have employed Linux.

//The _man-pages_ project
-------------------------

Soon after I began using Linux in earnest, I noticed errors and deficiencies in the system call and library function man pages. Eventually, I started sending notes, and then patches to the maintainer of the _man-pages_ project, [Andries Brouwer](https://www.win.tue.nl/~aeb/). When, in 2004, after more than 9 years as maintainer, Andries retired from the project and asked me to take over maintainership of the project, I accepted.

Although Andries did much good work, _man-pages_ was a largely invisible project when I took over. One of my goals was to turn that around. Under my maintainership, _man-pages_ acquired:

*   a version control system 
    (initially, with _man-pages-2.00_, a private instance of Subversion; later, [starting with](http://linux-man-pages.blogspot.com/2008/09/man-pages-goes-git-at-last_11.html) _man-pages-3.10_ in Sep 2008, a public [Git repository](https://git.kernel.org/?p=docs/man-pages/man-pages.git;a=summary));

*   [changelogs](https://man7.org/linux/man-pages/changelog.html);

*   regular release announcements on the Linux kernel mailing list 
    (starting with _man-pages-2.22_ in Feb 2006);

*   an occasional [blog](http://linux-man-pages.blogspot.com/) 
    ([started](http://linux-man-pages.blogspot.com/2007/10/getting-started.html) in Oct 2007);

*   a [web site](https://www.kernel.org/doc/man-pages/) 
    ([created](http://linux-man-pages.blogspot.com/2007/11/man-pages-website-and-mailing-list.html) in Nov 2007);

*   a [mailing list](http://vger.kernel.org/vger-lists.html#linux-man) 
    ([activated](http://linux-man-pages.blogspot.com/2007/11/man-pages-website-and-mailing-list.html) Nov 2007);

*   a COLOPHON attached to each pages in the release tarballs 
    (since Dec 2007, _man-pages-2.69_), explaining how to report bugs in the manual page (this was probably a key step in increasing the flow of incoming contribution);

*   a [bugzilla component](https://bugzilla.kernel.org/buglist.cgi?cmdtype=runnamed&list_id=838641&namedcmd=open%20man-pages%20bugs) (since Nov 2007);

*   and a set of [online pages](https://man7.org/linux/man-pages/index.html) 
    updated ([since](http://linux-man-pages.blogspot.com/2007/11/man-pages-website-and-mailing-list.html) Nov 2007) with each release.

As of _man-pages-5.13_ (August 2021), when I ceased to maintain the project, I had made a total of 196 releases of _man-pages_ (based on about 22k commits). I'm also the [author or coauthor] of around 440 of the approximately 1060 pages in the project. Working on _man-pages_ is much more than writing documentation: any useful documentation involves spelunking in the kernel and _glibc_ source code, a lot of testing (the list of kernel bugs I've found while testing kernel and _glibc_ interfaces has become quite long), and review and critique of the design of new and proposed interfaces.

Most of my work on _man-pages_ has been on a private basis, and though documentation is a task dreaded by many, some people like what I do: conference paper selection committees seem to favor [presentations] on documentation and interface testing and design review; I was four times invited to the [Linux Kernel Summit]; and for some months in 2008-2009, I was a paid Fellow of the [Linux Foundation](https://www.linuxfoundation.org/), working full time on the project.

//Personal
----------

I'm a New Zealander, but have lived in quite a few places around the world, including [Papua New Guinea], England, Switzerland, the USA (California), and Colombia. These days, I live in Munich, Germany. While I miss spending more time in New Zealand, Germany—[Munich] in particular—is a [great place to live](https://www.muenchen.de/int/en/themen.html).

When I find time (not so often these days), I'm happy to get lost in a book—mainly history, politics, biography, popular science, literary fiction, and some genre fiction. Otherwise, my interests include photography, improving my Spanish, and travel (I come from an island and have visited quite a few others; I've also traveled in all continents except Antarctica).


/PREFACE
========


//Subject
---------

In this book, I describe the Linux programming interface—the system calls, library
functions, and other low-level interfaces provided by Linux, a free implementation
of the UNIX operating system. These interfaces are used, directly or indirectly, by
every program that runs on Linux. They allow applications to perform tasks such as
file I/O, creating and deleting files and directories, creating new processes, executing
programs, setting timers, communicating between processes and threads on the
same computer, and communicating between processes residing on different
computers connected via a network. This set of low-level interfaces is sometimes
also known as the system programming interface.

Although I focus on Linux, I give careful attention to standards and portability
issues, and clearly distinguish the discussion of Linux-specific details from the 
discussion of features that are common to most UNIX implementations and standardized
by POSIX and the Single UNIX Specification. Thus, this book also provides a comprehensive description of the UNIX/POSIX programming interface and can be
used by programmers writing applications targeted at other UNIX systems or
intended to be portable across multiple systems.

//Intended audience
-------------------

This book is aimed primarily at the following audience:

1.  programmers and software designers building applications for Linux, other
    UNIX systems, or other POSIX-conformant systems;

2.  programmers porting applications between Linux and other UNIX implementations 
    or between Linux and other operating systems;

3.  instructors and advanced students teaching or 
    learning Linux or UNIX system programming; and

4.  system managers and “power users” wishing to gain a greater 
    understanding of the Linux/UNIX programming interface and of how 
    various pieces of system software are implemented.

I assume you have some prior programming experience, but no previous system
programming experience is required. I also assume you have a reading knowledge
of the C programming language, and know how to use the shell and common Linux
or UNIX commands. If you are new to Linux or UNIX, you will find it helpful to
read the programmer-oriented review of fundamental concepts of Linux and UNIX
systems in Chapter 2.

> The standard tutorial reference for C is [Kernighan & Ritchie, 1988]. 
> [Harbison & Steele, 2002] goes into even more detail on C, and includes coverage of
> changes introduced with the C99 standard. [van der Linden, 1994] is an 
> alternative look at C that is both highly amusing and instructive. [Peek et al., 2001]
> provides a good, brief introduction to using a UNIX system.
> 
> Throughout this book, indented small-font paragraphs like these are used
> for asides containing rationale, implementation details, background information, 
> historical notes, and other topics that are ancillary to the main text.

// Linux and UNIX
-----------------

This book could have been purely about standard UNIX (that is, POSIX) system
programming because most features found on other UNIX implementations are
also present on Linux and vice versa. However, while writing portable applications
is a worthy goal, it is also important to describe Linux extensions to the standard
UNIX programming interface. One reason for this is the popularity of Linux.

Another is that the use of nonstandard extensions is sometimes essential, either for
performance reasons or to access functionality that is unavailable in the standard
UNIX programming interface. (All UNIX implementations provide nonstandard
extensions for these reasons.)

Therefore, while I’ve designed this book to be useful to programmers working
with all UNIX implementations, I also provide full coverage of programming 
features that are specific to Linux. These features include:

*   epoll, a mechanism for obtaining notification of file I/O events;

*   inotify, a mechanism for monitoring changes in files and directories;

*   capabilities, a mechanism for granting a process a subset of the powers of the superuser;

*   extended attributes;

*   i-node flags;

*   the clone() system call;

*   the /proc file system; and

*   Linux-specific details of the implementation of file I/O, signals, timers,
    threads, shared libraries, interprocess communication, and sockets.

//Usage and organization
------------------------

You can use this book in at least two ways:

1.  As a tutorial introduction to the Linux/UNIX programming interface. You can
    read the book linearly. Later chapters build on material presented in earlier
    chapters, with forward references minimized as far as possible.

2.  As a comprehensive reference to the Linux/UNIX programming interface. 
    An extensive index and frequent cross-references allow topics to be read in random order.

I’ve grouped the chapters of this book into the following parts:

1.  Background and concepts: 
    history of UNIX, C, and Linux and overview of UNIX standards [Chapter 1]; 
    a programmer-oriented introduction to Linux and UNIX concepts [Chapter 2]; 
    and fundamental concepts for system programming on Linux and UNIX [Chapter 3].

2.  Fundamental features of the system programming interface: 
    file I/O (Chapter 4 and Chapter 5); 
    processes [Chapter 6]; 
    memory allocation [Chapter 7]; 
    users and groups [Chapter 8];
    process credentials [Chapter 9]; 
    time [Chapter 10]; 
    system limits and options [Chapter 11];
    and retrieving system and process information [Chapter 12].

3.  More advanced features of the system programming interface: 
    file I/O buffering [Chapter 13]; 
    file systems [Chapter 14]; 
    file attributes [Chapter 15]; 
    extended attributes [Chapter 16];
    access control lists [Chapter 17]; 
    directories and links [Chapter 18];
    monitoring file events [Chapter 19]; 
    signals (Chapter 20 to Chapter 22); 
    and timers [Chapter 23].

4.  Processes, programs, and threads: 
    process creation, process termination, monitoring child processes, and executing programs [Chapter 24] to [Chapter 28];
    and POSIX threads [Chapter 29] to [Chapter 33].

5.  Advanced process and program topics: 
    process groups, sessions, and job control [Chapter 34]; 
    process priorities and scheduling [Chapter 35]; 
    process resources [Chapter 36];
    daemons [Chapter 37]; 
    writing secure privileged programs [Chapter 38]; 
    capabilities [Chapter 39]; 
    login accounting [Chapter 40];
    and shared libraries [Chapter 41] and [Chapter 42].

6.  Interprocess communication (IPC): 
    IPC overview [Chapter 43]; 
    pipes and FIFOs [Chapter 44];
    System V IPC—message queues, semaphores, and shared memory ([Chapter 45] to [Chapter 48]); 
    memory mappings [Chapter 49]; 
    virtual memory operations [Chapter 50];
    POSIX IPC—message queues, semaphores, and shared memory ([Chapter 51] to [Chapter 54]);
    and file locking [Chapter 55].

7.  Sockets and network programming: 
    IPC and network programming with sockets ([Chapter 56] to [Chapter 61]).

8.  Advanced I/O topics: 
    terminals [Chapter 62]; 
    alternative I/O models [Chapter 63];
    and pseudoterminals [Chapter 64].

//Example programs
-------------------

I illustrate the use of most of the interfaces described in this book with short, complete
programs, many of which are designed to allow you to easily experiment from the
command line to see just how various system calls and library functions work.
Consequently, this book contains a lot of example code—around 15,000 lines of C
source code and shell session logs.

Although reading and experimenting with the example programs is a useful
starting point, the most effective way to consolidate the concepts discussed in this
book is to write code, either modifying the example programs to try out your own
ideas or writing new programs.

All of the source code in this book is available for download from the book’s
web site. The source code distribution also includes many additional programs that
don’t appear in the book. The purpose and details of these programs are described
in comments in the source code. Makefiles are provided for building the programs,
and an accompanying README file gives further details about the programs.

The source code is freely redistributable and modifiable under the terms of the
GNU Affero General Public License (Affero GPL) version 3, a copy of which is provided in the source code distribution.

//Exercises
-----------

Most chapters conclude with a set of exercises, some of which are suggestions for
various experiments using the provided example programs. Other exercises are
questions relating to concepts discussed in the chapter, and still others are suggestions
for programs you might write in order to consolidate your understanding of the
material. You’ll find solutions to selected exercises in Appendix F.

//Standards and portability
-------------------
Throughout this book, I’ve taken special care to consider portability issues. You’ll
find frequent references to relevant standards, especially the combined POSIX.1-2001
and Single UNIX Specification version 3 (SUSv3) standard. You’ll also find details
about changes in the recent revision of that standard, the combined POSIX.1-2008
and SUSv4 standard. (Because SUSv3 was a much larger revision, and it is the
UNIX standard that is in most widespread effect at the time of writing, discussions of
standards in the book are generally framed in terms of SUSv3, with notes on the differences in SUSv4. However, you can assume that, except where noted, statements
about specifications in SUSv3 also hold true in SUSv4.)

For features that are not standardized, I indicate the range of differences on
other UNIX implementations. I also highlight those major features of Linux that
are implementation-specific, as well as minor differences between the implementation of system calls and library functions on Linux and other UNIX implementations.
Where a feature is not indicated as being Linux-specific, you can normally assume
that it is a standard feature that appears on most or all UNIX implementations.

I’ve tested most of the example programs presented in this book (other than
those that exploit features that are noted as being Linux-specific) on some or all of
Solaris, FreeBSD, Mac OS X, Tru64 UNIX, and HP-UX. To improve portability to
some of these systems, the web site for this book provides alternative versions of
certain example programs with extra code that doesn’t appear in the book.

//Linux kernel and C library versions
-------------------------------------

The primary focus of this book is on Linux 2.6.x, the kernel version in widest use at the
time of writing. Details for Linux 2.4 are also covered, and I’ve indicated where
features differ between Linux 2.4 and 2.6. Where new features appear in the Linux
2.6.x series, the exact kernel version number of their appearance (e.g., 2.6.34) is noted.
With respect to the C library, the main focus is on the GNU C library (glibc)
version 2. Where relevant, differences across glibc 2.x versions are noted.
As this book was heading to press, Linux kernel version 2.6.35 had just been
released, and glibc version 2.12 had been recently released. This book is current
with respect to both of these software versions. Changes that occur in the Linux
and glibc interfaces after publication of this book will be noted on the book’s
web site.

//Using the programming interface from other languages
------------------------------------------------------

Although the example programs are written in C, you can use the interfaces described
in this book from other programming languages—for example, compiled languages
such as C++, Pascal, Modula, Ada, FORTRAN, D, and scripting languages such as
Perl, Python, and Ruby. (Java requires a different approach; see, for example,
[Rochkind, 2004].) Different techniques will be required to obtain the necessary
constant definitions and function declarations (except in the case of C++), and some
extra work may be needed to pass function arguments in the manner required by C
linkage conventions. Notwithstanding these differences, the essential concepts are
the same, and you’ll find the information in this book is applicable even if you are
working in another programming language.

//About the author
------------------

I started using UNIX and C in 1987, when I spent several weeks sitting in front of an
HP Bobcat workstation with a copy of the first edition of Marc Rochkind’s Advanced
UNIX Programming and what ultimately became a very dog-eared printed copy of
the C shell manual page. My approach then was one that I still try to follow today,
and that I recommend to anyone approaching a new software technology: take the
time to read the documentation (if it exists) and write small (but increasingly large)
test programs until you become confident of your understanding of the software.
I’ve found that, in the long run, this kind of self-training more than pays for itself in
terms of saved time. Many of the programming examples in this book are constructed
in ways that encourage this learning approach.

I’ve primarily been a software engineer and designer. However, I’m also a passionate teacher, and have spent several years teaching in both academic and commercial
environments. I’ve run many week-long courses teaching UNIX system programming,
and that experience informs the writing of this book.

I’ve been using Linux for about half as long as I’ve been using UNIX, and, over
that time, my interest has increasingly centered on the boundary between the kernel
and user space: the Linux programming interface. This interest has drawn me into
a number of interrelated activities. I intermittently provide input and bug reports
for the POSIX/SUS standard; I carry out tests and design reviews of new user-space
interfaces added to the Linux kernel (and have helped find and fix many code and
design bugs in those interfaces); I’ve been a regular speaker at conferences on topics
related to interfaces and their documentation; and I’ve been invited on a number
of occasions to the annual Linux Kernel Developers Summit. The common thread
tying all of these activities together is my most visible contribution in the Linux
world: my work on the man-pages project (http://www.kernel.org/doc/man-pages/).

The man-pages project provides pages in sections 2, 3, 4, 5, and 7 of the Linux
manual pages. These are the manual pages describing the programming interfaces
provided by the Linux kernel and the GNU C library—the same topic area as this
book. I’ve been involved with man-pages for more than a decade. Since 2004, I’ve
been the project maintainer, a task that involves, in roughly equal measure, writing
documentation, reading kernel and library source code, and writing programs to
verify the details for documentation. (Documenting an interface is a great way to
find bugs in that interface.) I’ve also been the biggest contributor to man-pages—of
the approximately 900 pages in man-pages, I am the author of 140, and the coauthor
of another 125. So, even before you picked up this book, it’s quite likely you’ve
read some of my published work. I hope that you’ve found that work useful, and
that you’ll find this book even more so.

//Acknowledgements
------------------

Without the support of a good many people, this book would have been far less than
it is. It is a great pleasure to thank them.

A large team of technical reviewers around the world read drafts, found errors,
pointed out confusing explanations, suggested rewordings and diagrams, tested
programs, proposed exercises, identified aspects of the behavior of Linux and
other UNIX implementations that I was not aware of, and offered support and
encouragement. Many reviewers generously supplied insights and comments that I
was able to incorporate into the book, at times making me look more knowledgeable 
than I am. Any mistakes that remain are, of course, my own.

Thanks especially to the following reviewers (listed alphabetically by surname),
who either commented on large sections of the manuscript, commented extensively
on smaller sections of the manuscript, or (magnificently) commented extensively on
large sections of the manuscript:

1.  Christophe Blaess is a consulting software engineer and professional trainer
    who specializes in industrial (realtime and embedded) applications of Linux.
    Christophe is the author of Programmation système en C sous Linux, a fine French
    book covering many of the same topics as this book. He generously read and
    commented on many chapters of my book.

2.  David Butenhof (Hewlett-Packard) was a member of the original working
    group for POSIX threads and for the Single UNIX Specification threads extensions, 
    and is the author of Programming with POSIX Threads. He wrote the original
    DCE Threads reference implementation for the Open Software Foundation,
    and was lead architect of the threads implementation for OpenVMS and Digital
    UNIX. David reviewed the threads chapters, suggested many improvements,
    and patiently corrected several details of my understanding of the POSIX
    threads API.

3.  Geoff Clare works at The Open Group on their UNIX conformance test suites,
    has been involved with UNIX standardization for more than 20 years, and is
    one of half a dozen key participants in the Austin Group, which develops the
    joint standard that forms POSIX.1 and the base volumes of the Single UNIX
    Specification. Geoff provided detailed review of parts of the manuscript
    related to standard UNIX interfaces, patiently and politely suggested numerous
    fixes and improvements, spotted many obscure bugs, and provided much assistance 
    in focusing on the importance of standards for portable programming.

4.  Loïc Domaigné (then at German Air Traffic Control) is a software systems
    engineer working on the design and development of distributed, concurrent,
    and fault-tolerant embedded systems with hard realtime requirements. He provided 
    review input for the threads specification in SUSv3, and is an enthusiastic
    educator and knowledgeable contributor in various online technical forums.
    Loïc carried out a detailed review of the threads chapters, as well as many other
    parts of the book. He also implemented a number of clever programs to verify
    details of the Linux threads implementation, provided a great deal of enthusiasm
    and encouragement, and proposed numerous ideas to improve the overall
    presentation of the material.

5.  Gert Döring programmed mgetty and sendfax, a pair of programs that together
    are one of the most widely used open source fax packages for UNIX and Linux.
    These days, he works mainly on building and operating large IPv4-based and
    IPv6-based networks, a task that includes working with colleagues across
    Europe to define the operational policies that ensure the smooth operation of
    the infrastructure of the Internet. Gert provided extensive and useful feedback
    on the chapters covering terminals, login accounting, process groups, sessions,
    and job control.

6.  Wolfram Gloger is an IT consultant who has worked on a range of Free and
    Open Source Software (FOSS) projects in the past decade and a half. Among
    other things, Wolfram is the implementer of the malloc package used in the
    GNU C library. Currently, he works on web services development, with a particular 
    focus on E-learning, although he still does occasional work on the kernel
    and system libraries. Wolfram reviewed a number of chapters, especially helping
    with my discussion of memory-related topics.

7.  Fernando Gont is a member of the Centro de Estudios de Informática (CEDI)
    at the Universidad Tecnológica Nacional, Argentina. He focuses on Internet
    engineering, with active participation in the Internet Engineering Task Force
    (IETF), where he has authored a number of Request for Comments (RFC) documents. 
    Fernando also works on security assessment of communications protocols
    for the UK Centre for the Protection of National Infrastructure (CPNI), and
    has produced the first thorough security assessment of the TCP and IP protocols.
    Fernando provided a very thorough review of the network programming
    chapters, explained many details of TCP/IP, and suggested a multitude of
    improvements to the material.

8.  Andreas Grünbacher (SUSE Labs) is a kernel hacker and author of the Linux
    implementation of extended attributes and POSIX access control lists.
    Andreas provided thorough review of many chapters, much encouragement,
    and the single comment that probably most changed the structure of the book.

9.  Christoph Hellwig is a Linux storage and file-systems consultant and a 
    wellknown kernel hacker who has worked on many parts of the Linux kernel.
    Christoph kindly took time out from writing and reviewing Linux kernel
    patches to review several chapters of this book, suggesting many useful 
    corrections and improvements.

10. Andreas Jaeger led the development of the Linux port to the x86-64 
    architecture. As a GNU C Library developer, he ported the library to x86-64, 
    and helped make the library standards-conformant in several areas, especially in
    the math library. He is currently Program Manager for openSUSE at Novell.
    Andreas reviewed far more chapters than I could possibly have hoped, suggested 
    a multitude of improvements, and warmly encouraged the ongoing
    work on the book.

11. Rick Jones, also known as “Mr. Netperf” (Networked Systems Performance
    Curmudgeon at Hewlett-Packard), provided valuable review of the network
    programming chapters.

12. Andi Kleen (then at SUSE Labs) is a well-known and long-term kernel hacker
    who has worked on many and diverse areas of the Linux kernel, including networking, error handling, scalability, and low-level architecture code. Andi did
    an extensive review of the material on network programming, expanded my
    knowledge of many details of the Linux TCP/IP implementation, and suggested many ways to improve my presentation of the subject.

13. Martin Landers (Google) was still a student when I had the good fortune to meet
    him as a colleague. Since then, he has managed to pack rather a lot into a short
    time, having worked variously as software architect, IT trainer, and professional hacker. 
    I was fortunate indeed to have Martin as a reviewer. He contributed
    numerous incisive comments and corrections that greatly improved many
    chapters of the book.

14. Jamie Lokier is a well-known kernel hacker who has been contributing to Linux
    development for 15 years. He nowadays describes himself as “a consultant in
    solving difficult problems that often have embedded Linux somewhere.” Jamie
    provided an extraordinarily thorough review of the chapters on memory mappings, POSIX shared memory, and virtual memory operations. His comments
    corrected many details of my understanding of these topics and greatly
    improved the structure of the chapters.

15. Barry Margolin has been a system programmer, system administrator, and support
    engineer throughout his 25-year career. He is currently a Senior Performance
    Engineer at Akamai Technologies. He is a frequent, well-respected contributor in
    various online forums discussing UNIX and Internet topics, and has reviewed a
    number of books on these topics. Barry reviewed a number of chapters of this
    book, suggesting many improvements.

16. Paul Pluzhnikov (Google) was formerly the technical lead and a key developer
    of the Insure++ memory-debugging tool. He is also a sometime gdb hacker, and
    a frequent responder in online forums answering questions on debugging,
    memory allocation, shared libraries, and run-time environments. Paul reviewed a
    wide range of chapters, suggesting many valuable improvements.

17. John Reiser (with Tom London) carried out one of the earliest ports of UNIX
    to a 32-bit architecture: the VAX-11/780. He is also the creator of the mmap()
    system call. John reviewed many chapters (including, obviously, the chapter on
    mmap()), providing a multitude of historical insights and crystal-clear technical
    explanations that greatly improved the chapters.

18. Anthony Robins (Associate Professor of Computer Science, University of
    Otago, New Zealand), a close friend of more than three decades, was the first
    reader of the drafts of several chapters, and offered valuable early comments
    and ongoing encouragement as the project evolved.

19. Michael Schröder (Novell) is one of the main authors of the GNU screen program,
     a task that has imbued him with a thorough knowledge of the subtleties and
    differences in terminal-driver implementations. Michael reviewed the chapters
    covering terminals and pseudoterminals, and the chapter on process groups,
    sessions, and job control, providing much useful feedback.

20. Manfred Spraul, who worked on the IPC code (among other things) in the
    Linux kernel, generously reviewed several of the chapters on IPC and suggested many improvements.
    21.  Tom Swigg, a former UNIX training colleague at Digital, was an early reviewer
    who supplied important feedback on several chapters. A software engineer and
    IT trainer for more than 25 years, Tom currently works at London South Bank
    University, programming and supporting Linux in a VMware environment.

22. Jens Thoms Törring is part of a fine tradition of physicists turned programmers,
    and has produced a variety of open source device drivers and other software.
    Jens read a surprisingly diverse collection of chapters, providing unique and
    valuable insight on how each could be improved.

Many other technical reviewers also read various parts of the book and made valuable
comments. In alphabetical order by surname, thank you to George Anzinger
(MontaVista Software), Stefan Becher, Krzysztof Benedyczak, Daniel Brahneborg,
Andries Brouwer, Annabel Church, Dragan Cvetkovic, Floyd L. Davidson, Stuart
Davidson (Hewlett-Packard Consulting), Kasper Dupont, Peter Fellinger (jambit
GmbH), Mel Gorman (IBM), Niels Göllesch, Claus Gratzl, Serge Hallyn (IBM),
Markus Hartinger (jambit GmbH), Richard Henderson (Red Hat), Andrew Josey
(The Open Group), Dan Kegel (Google), Davide Libenzi, Robert Love (Google),
H.J. Lu (Intel Corporation), Paul Marshall, Chris Mason, Michael Matz (SUSE),
Trond Myklebust, James Peach, Mark Phillips (Automated Test Systems), Nick Piggin
(SUSE Labs, Novell), Kay Johannes Potthoff, Florian Rampp, Stephen Rothwell (Linux
Technology Centre, IBM), Markus Schwaiger, Stephen Tweedie (Red Hat), Britta
Vargas, Chris Wright, Michal Wronski, and Umberto Zamuner.

Aside from technical review, I received many other kinds of help from various
people and organizations.

Thanks to the following people for answering technical questions: Jan Kara,
Dave Kleikamp, and Jon Snader. Thanks to Claus Gratzl and Paul Marshall for system
management assistance.

Thanks to the Linux Foundation (LF), which, during 2008, funded me as a Fellow
to work full time on the man-pages project and on testing and design review of the
Linux programming interface. Although the Fellowship provided no direct financial 
support for working on this book, it did keep me and my family fed, and the
ability to focus full time on documenting and testing the Linux programming interface
was a boon to my “private” project. At a more individual level, thanks to Jim Zemlin
for being my “interface” while working at the LF, and to the members of the LF
Technical Advisory Board, who supported my application for the Fellowship.

Thanks to Alejandro Forero Cuervo for suggesting the title of the book!
More than 25 years ago, Robert Biddle intrigued me during my first degree
with tales of UNIX, C, and Ratfor; thank you. Thanks to the following people, who,
although not directly connected with this project, encouraged me on the path of
writing during my second degree at the University of Canterbury, New Zealand:
Michael Howard, Jonathan Mane-Wheoki, Ken Strongman, Garth Fletcher, Jim
Pollard, and Brian Haig.

The late Richard Stevens wrote several superb books on UNIX programming
and TCP/IP, which I, like a multitude of programmers, have found to be a wonderful source of technical information over the years. Readers of those books will note
several visual aspects that are similar between my book and those of Richard Stevens.
This is no accident. As I considered how to design my book, and looked around
more generally at book designs, time and again, the approach employed by Richard
Stevens seemed the best solution, and where this was so, I have employed the same
visual approach.

Thanks to the following people and organizations for providing UNIX systems
that enabled me to run test programs and verify details on other UNIX implementations: Anthony Robins and Cathy Chandra, for test systems at the University of
Otago, New Zealand; Martin Landers, Ralf Ebner, and Klaus Tilk, for test systems
at the Technische Universität in Munich, Germany; Hewlett-Packard, for making
their testdrive systems freely available on the Internet; and Paul de Weerd for providing 
OpenBSD access.

Heartfelt thanks to two Munich companies, and their owners, who, in addition
to providing me with flexible employment and enjoyable colleagues, were 
extraordinarily generous in allowing me to use their offices while writing this book.
Thanks to Thomas Kahabka and Thomas Gmelch of exolution GmbH, and, especially, 
to Peter Fellinger and Markus Hartinger of jambit GmbH.

Thanks for various kinds of help to the following people: Dan Randow, Karen
Korrel, Claudio Scalmazzi, Michael Schüpbach, and Liz Wright. Thanks to Rob
Suisted and Lynley Cook for the photographs used on the front and back covers.

Thanks to the following people who encouraged and supported me in various
ways on this project: Deborah Church, Doris Church, and Annie Currie.

Thanks to the team at No Starch Press for all sorts of help on an enormous
project. Thanks to Bill Pollock for being straight-talking from the start, having 
rocksolid faith in the project, and patiently keeping an eye on the project. Thanks to my
initial production editor, Megan Dunchak. Thanks to my copyeditor, Marilyn Smith,
who, despite my best efforts at clarity and consistency, still found many things to fix.
Riley Hoffman had overall responsibility for layout and design of the book, and
also took up the reins as production editor as we came into the home straight. Riley
graciously bore with my many requests to achieve the right layout and produced a
superb final result. Thank you.

I now know the truth of the cliché that a writer’s family also pays the price of
the writer’s work. Thanks to Britta and Cecilia for their support, and for putting up
with the many hours that I had to be away from family as I finished the book.

//Permissions
-------------

The Institute of Electrical and Electronics Engineers and The Open Group have kindly
given permission to quote portions of text from IEEE Std 1003.1, 2004 Edition,
Standard for Information Technology—Portable Operating System Interface (POSIX),
The Open Group Base Specifications Issue 6. The complete standard can be consulted
online at http://www.unix.org/version3/online.html.

//Web site and source code of example programs
----------------------------------------------

You can find further information about this book, including errata and source code
for the example programs, at http://www.man7.org/tlpi.

//Feedback
----------

I welcome bug reports, suggestions for code improvements, and fixes to further
improve code portability. Book bugs and general suggestions about how the
explanations in the book can be improved are also welcome. Since changes in the
Linux programming interface are varied and sometimes too frequent for one person
to keep up with, I would be happy to receive suggestions about new and changed
features that should be covered in a future edition of this book.


> [!TIP]
> 
> Michael Timothy Kerrisk
>
> Munich, Germany and Christchurch, New Zealand
>
> August 2010
>
> mtk@man7.org


* * *

/Reviews of _The Linux Programming Interface_
=============================================

As reviews for _[The Linux Programming Interface](../index.html)_ appear, I'll add links below. If you see a review that isn't listed here, please email me with a pointer to the review. Where I've managed to find the individuals who wrote reviews in forums such as Amazon, I've hyperlinked to their homepages.

**And a request:** if you appreciate my book, please consider reviewing it in an online magazine, online bookseller's web site (Amazon or elsewhere), blog, or web site. Reviews really do make a difference in getting the word out and improving sales.

"Kerrisk's book is more thorough, more comprehensive and just as well written as the Stevens and Rochkind books… It is now easily THE standard book on Linux/UNIX system programming."

> —[Vladimir G Ivanovic](http://www.leonora.org/), [reviewing on Amazon.com (28 Oct 2010)

"Absolutely, without question, the best longform technical writer. Reading his books, where he gets to exercise all of the skills in terms of sequencing, layering, explanation, repetition, etc is like receiving an architectural download from the universe."

> —Jonah Benton [on Hacker News](https://news.ycombinator.com/item?id=31632856) (6 Jun 2022)

"This is one of the best technical books i have ever read (in any topic). It is comprehensive, authoritative, well organized and a pleasure to read. The author uses MANY example programs that are great at illustrating the concept being discussed."

> —Kanak Kshetri [reviewing on Amazon.com (19 Sep 2019)

"… Crystal clear writing, great explanations and motivations, and tons of technical detail. It's one of the best technical books I've ever read, on par with K&R and Stevens… Thanks to the author for this wonderful contribution to the systems community."

> —[Prof. David O'Hallaron](http://www.cs.cmu.edu/~droh/), Carnegie Mellon University, [reviewing on Amazon.com (3 May 2012)

"I was hoping this book would serve as a handy reference \[...\] but it has far surpassed that expectation. This is THE most detailed programming book that I own."

> —Lee Mazzoleni [reviewing on Amazon.com (10 Mar 2020)

"This is without a doubt the best written technical book I've ever read; it's honestly hard to believe only one person wrote and organized it. In an era where you can often get a better answer from a highly voted Stack Overflow question than you'll find most books, TLPI is 100% an exception."

> —Bill Harper [reviewing on Amazon.com (8 Mar 2016)

"Beautifully written book, a model of clarity and succinctness, equivalent to K&R's C Programming Language book, but surprisingly readable from front to back too."

> —webbje [reviewing on Amazon.co.uk](https://www.amazon.co.uk/review/R1UZ4KBKIXHBAH/ref=cm_cr_rdp_perm?ie=UTF8&ASIN=1593272200&tag=man7org-20) (2 Jun 2017)

"I have read a lot of technical books … and really I have NEVER seen a technical book as well written as this one."

> —"Read and think" [reviewing on Amazon.ca](https://www.amazon.ca/review/R247H1969XIY60/ref=cm_cr_rdp_perm?ie=UTF8&ASIN=1593272200&tag=man7org-20) (18 Jul 2017)

"…the author beautifully explains how Linux kernel programming works… the writing flows elegantly with each sentence conveying valuable information"

> —William P Ross [reviewing on Amazon.com (8 Jul 2016)

"… a beautifully written book. The author, Michael Kerrisk, combines technical knowledge about Linux internals with a clear, precise writing style. This book is **fun** to read. Each chapter deals with a single topic and consists of roughly 25 pages. This is an excellent organisation: it lets you completely understand one area at a time in manageable chunks. … a case study in pleasant, lucid writing."

> —Vikram Aggarwal, [reviewing on eggwall.com](http://www.eggwall.com/2011/08/linux-programming-interface-beautifully.html) (29 Aug 2011)

"some books … are so good that they become classics and a standard for other books and "must reads" for everyone interested in the topic. … "The Linux Programming Interface" … is such a book."

> —Markus Jais, [reviewing on markusjais.com](http://markusjais.com/short-book-review-the-linux-programming-interface/) (12 Nov 2011)

"I don't think I've mentioned just how good this book is in a while. You all have a copy of it, right? You should, it's that good."

> —Greg Kroah-Hartman, Linux kernel developer, [Google+](https://plus.google.com/111049168280159033135/posts/ddqAn41cX9y) (23 May 2013)

"Kerrisk's book 'The Linux Programming Interface' (#tlpi) http://man7.org/tlpi/ is slowly, but inexorably, replacing #apue in my heart"

> —(Professor) Stefano Zacchiroli, Free Software activist, former Debian Project Leader, [Twitter](https://twitter.com/zacchiro/status/136396264815337472) (15 Nov 2011)

"1500+ pages of awe inspiring, amazing technical blessing. It is a fabulous example to everyone in the I.T. industry, and a very high bar for any technical books to come."

> —J. Kayser, [reviewing on Amazon.com (30 Nov 2012)

"This is not just a great Linux book, but probably one of the best technical book I've ever read."

> —The Shepherd, [reviewing on Amazon.com (20 Jul 2012)

"I've seldom (maybe never) come across a better programming book in my 40 years as a professional programmer."

> —Mark Doyle, [reviewing on Amazon.com (12 Apr 2014)

"I've been doing Linux systems programming nearly my entire career (16 years so far...), and this is the most valuable resource I've found… The amount of detail and coverage of subjects completely surpassed my expectations."

> —Jeff Woods, [reviewing on Amazon.com (23 Sep 2014)

"Everything worthy of knowing about programming 'NIXes and LINUX in particular is summarized in this work as best as would be humanly possible."

> —Reza Mostafid, [reviewing on Amazon.com (22 Apr 2012)

"The explanations therein are lucid, the sample programs truly illustrate the concepts…"

> —Leslie Satenstein, [reviewing on Amazon.ca (2 Dec 2013)

"A masterpiece, full of essential information."

> —Charles A, [reviewing on Amazon.com (11 Aug 2013)

"… an outstanding book in the style of \[the\] beloved classic Advanced Programming in the UNIX Environment… The treatment of each system call is very thorough, indicating deviations from the Single UNIX Specification and comparisons with various Unix flavors."

> —John Wiersba, [reviewing on Amazon.com (26 Nov 2010)

"By far, this is the most interesting book I've read about the Linux operating system. It contains fantastic coverage of a wide range of topics at varying levels of detail. The writing style is very appealing and the details are wonderfully selected and presented.

> —Masood Mortazavi, [reviewing on Amazon.com (30 Nov 2012)

"The coverage of the Linux system call interface is encyclopedic, but the writing style is very approachable… an excellent reference that will likely find its way onto the bookshelves of user-space developers and kernel hackers"

> —Jake Edge, [reviewing on LWN.net](http://lwn.net/Articles/423417/) (19 Jan 2010)

"I expect this beautiful work to significantly impact the future of the linux community."

> —T. B. Gausen, [reviewing on Amazon.com (3 Mar 2011)

"…a work of encyclopedic breadth and depth, spanning in great detail concepts usually spread in a multitude of medium-sized books… Kerrisk's work is priceless: any subject be it timers, UNIX signals, memory allocation or the most classical of topics (file I/O) gets its deserved 15-30 page treatment, and you can pick just what you need, in any order."

> —Federico Lucifredi, [reviewing on slashdot.org](http://books.slashdot.org/story/10/11/08/1430238/The-Linux-Programming-Interface) (8 Nov 2010)

"… an essential resource for the serious or professional Linux and UNIX systems programmer. Michael Kerrisk covers the use of all the key APIs across both the Linux and UNIX system interfaces with clear descriptions and tutorial examples and stresses the importance and benefits of following standards such as the Single UNIX Specification and POSIX 1003.1."

> —Andrew Josey, Director, Standards, [The Open Group](http://www.opengroup.org/), and Chair of The POSIX 1003.1 Working Group, [in prepublication praise for the book](https://www.nostarch.com/tlpi#reviews) (Full disclosure: Andrew was a technical reviewer for TLPI)

"It's a wonderful book… well written and never boring… the author has achieved the right balance in his descriptions and is able to explain clearly a huge variety of topics."

> —[John Graham-Cummings](http://jgc.org/), [reviewing on Amazon.com (29 Oct 2010)

"\[TLPI\] will no doubt become the standard guide for Linux system programming."

> —Pedro Pinto, [reviewing on Amazon.com (15 Dec 2010)

"… \[the author's\] familiarity with the system shines through; fortunately, he also happens to be a good writer, and rather than just telling you what a particular system call does, he first explains why something is useful and when you might want to use it."

> —William Springer, [reviewing on his blog](http://vulcanears.com/technical/the-linux-programming-interface/) (5 Mar 2011)

"Michael Kerrisk's new book \[is\] a thing of beauty. A book you're proud to just have on the shelf, but too useful to stay there."

> —Serge Hallyn, Linux kernel developer, [blog post](http://s3hh.wordpress.com/2010/12/17/the-linux-programming-interface/) (17 Dec 2010) (Full disclosure: Serge was a technical reviewer for TLPI)

"After reading a few initial sample chapters… I can say with great relief that it appears that Erik and I do not need to prepare a third edition of Linux Application Development—we can name TLPI as LAD's successor."

> —[Michael K. Johnson](https://musings.danlj.org/2010/09/01/the-linux-programming-interface-preview.html), one of the authors of [Linux Application Development](http://www.danlj.org/mkj/lad/) (a book I picked up early in my work with Linux and very much liked), after reading a few chapters of TLPI that were released before publication (1 Sep 2010).  
>   
> Notwithstanding Michael's very kind words, there are some topics covered in LAD that are not covered in TLPI, so you may still want to check out the former book.

"the Rosetta Stone of Linux system programming"

> —Fred Woolsey, [reviewing on Amazon.com (23 Sep 2011)

"… it's obvious that this is a clear, well thought out, and well written book by someone who knows their subject matter inside and out."

> —[David Walker](http://guzzloid.net/), [reviewing on Amazon.co.uk (28 Nov 2010)

"This book is, hands down, the best \[computer book\] I have ever bought."

> —Christopher R. Sherwood, [reviewing on Amazon.com (9 Apr 2011)

"The book is one of the most well written I've ever read."

> —Guilherme Maciel Ferreira, [reviewing on his blog](http://guilhermemacielferreira.com/2013/07/23/the-linux-programming-interface/) (23 July 2013)

"… one of the best programming books that I have ever encountered."

> —David W., [reviewing on Amazon.com (2 Dec 2010)

"… il ne fait pour moi aucun doute qu'il appartient d'emblée à la catégorie des grands classiques du genre."

> —filofel, [reviewing on Amazon.fr (18 Nov 2010; French; [translation)

"Derzeit das beste Buch zu diesem Themenbereich"

> —Jens Thoms Toerring, [reviewing on Lehmnanns.de](http://www.lehmanns.de/shop/mathematik-informatik/11829198-9781593272203-linux-programming-interface) (22 Dec 2010; German; [translation) (Full disclosure: Jens was a technical reviewer for TLPI)

"Für mich mit Sicherheit für die nächsten zehn Jahre das Referenz-Werk zum Thema Linux-spezifische System-Programmierung, völlig ohne auch nur ansatzweise gleichwertige Alternative."

> —Philipp M. Frank, [reviewing on Amazon.de (6 Jul 2011; German; [translation)

"hat das Buch das Zeug zum Standardwerk"

> —[Maik Schmidt](http://maik-schmidt.de/) reviewing in [c't Magazin](http://www.heise.de/ct/), Heft 19, 2011, p190 (no online version available, as far as I know).

"É sem dúvida a obra escrita mais completa sobre este tema, e tornar-se-á definitivamente num clássico dos livros técnicos de Informática.

> —[Review on ticnologia.pt](http://ticnologia.pt/revisoes/livros-a-elearning/livro-the-linux-programming-interface.html) (4 Feb 2011; Portuguese; [translation)

"Enfim, se hoje eu tivesse que escolher apenas um livre sobre programação Linux para levar em qualquer lugar, "The Linux Programming Interface" seria o livro."

> —Sergio Prado, [Reviewing on his blog](http://www.sergioprado.org/resenha-the-linux-programming-interface/) (10 Jan 2011; Portuguese; [translation)

A nice [write-up at isecur1ty.org](http://www.isecur1ty.org/%D9%83%D8%AA%D8%A7%D8%A8-the-linux-programming-interface/); in Arabic, so I don't feel confident to quote, but here's a [translation (21 Nov 2010)

A nice [write-up on fcamel's blog](http://fcamel-fc.blogspot.com/2012/05/linux-programming-interface.html); in Chinese, so I won't try to quote, but here's a [translation (6 May 2012)

"Michael Kerrisk has not only written a great book about Linux programming and how it relates to various standards, but has also taken care that bugs he noticed got fixed and the man pages were (greatly) improved. In all three ways, he has made Linux programming easier. The in-depth treatment of topics in The Linux Programming Interface… makes it a must-have reference for both new and experienced Linux programmers."

> —[Andreas Jaeger](http://www.suse.de/~aj/), Program Manager, OpenSUSE, [in prepublication praise for the book](https://www.nostarch.com/tlpi#reviews) (Full disclosure: Andreas was a technical reviewer for TLPI)

"_The Linux Programming Interface_ is a tour de force"

> —[Peter Cooper](http://peterc.org/), author of _Beginning Ruby_ (and doer of many other things!) [tweeted](http://twitter.com/#!/peterc/status/78988335808385025) (19 Jun 2011)

Pointers to a few other reviews, as well as prepublication praise from a number of readers, can be found on the [No Starch Press web page for the book](https://www.nostarch.com/tlpi#reviews).
