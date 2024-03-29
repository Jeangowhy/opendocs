curl -s -L  | /c/opendocs/html2md.ts >> /c/opendocs/The_Linux_Programming_Interface.md
curl -s -L https://www.man7.org/tlpi/code/online/index.html | /c/opendocs/html2md.ts >> /c/opendocs/The_Linux_Programming_Interface.md
curl -s -L https://www.man7.org/tlpi/download/TLPI-00-Preface.pdf | /c/opendocs/html2md.ts >> /c/opendocs/The_Linux_Programming_Interface.md
curl -s -L https://www.man7.org/tlpi/reviews/index.html | /c/opendocs/html2md.ts >> /c/opendocs/The_Linux_Programming_Interface.md
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

I wanted a design that incorporated a [koru](https://en.wikipedia.org/wiki/Koru), a traditional New Zealand pattern that is an integral part of Māori art. The koru is an iconic image that connected to my homeland and related (loosely) to the subject of the book (the spiral pattern relates to the notion of moving inward from user space towards the kernel, as in when we make a system call).

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

*   If you are new to system programming, you can read TLPI linearly as an introductory guide: each chapter builds on concepts presented in earlier chapters, with forward references kept to a minimum. Most chapters conclude with a set of exercises intended to consolidate the reader's understanding of the topics covered in the chapter.
*   If you are an experienced system programmer, TLPI provides a [comprehensive reference] that you can consult for details of nearly the entire Linux and UNIX (i.e., POSIX) system programming interface. To support this use, the book is thoroughly cross referenced and has an extensive [index](https://www.man7.org/tlpi/download/TLPI-Index.pdf).

TLPI provides more than just the technical details of the system programming interface: it gives important context describing why and how to use the interfaces, accompanied by a rich set of (complete) [example programs](https://www.man7.org/tlpi/code/online/index.html).

In the book, I assume that reader has some prior programming experience, a reading knowledge of C, and understands how to use common Linux or UNIX commands. Previous experience of system programming is not required.

Here are some notable features of the book:

*   **Broad and deep topic coverage:** With 1550 pages, 115 diagrams, 88 tables, over 200 exercises, and 15,000 lines of program source code and shell sessions demonstrating the use of the programs, TLPI is the most detailed single-volume description of Linux and UNIX system programming available. As well as the topics covered in many other system programming books, TLPI includes thorough coverage of [multithreaded programming] (5 chapters), [sockets and network programming] (6 chapters), [shared libraries], [secure programming], [memory mappings], [process scheduling], [access control lists], and [login accounting].
*   **Extensive coverage of Linux-specific features:** TLPI covers features such as [_epoll_], [_inotify_], [capabilities] (a mechanism for improving security in privileged programs), [extended attributes] (attaching arbitrary metadata to a file), [i-node flags] (formerly known as _ext2_ extended attributes), the [_clone()_] system call, the [/proc file system], [_signalfd_], and Linux-specific details of the implementation of file I/O, signals, threads, shared libraries, interprocess communication, and sockets.
*   **A heavy [emphasis on portability](http://blog.man7.org/2010/08/standards-and-portability-in-tlpi.html):** You can use TLPI as a guide to system programming on _any_ UNIX system (hence the subtitle, _A Linux and UNIX System Programming Handbook_). TLPI pays close attention to UNIX standards, in particular [POSIX.1-2001/SUSv3](http://www.unix.org/version3/online.html) and [POSIX.1-2008/SUSv4](http://www.opengroup.org/onlinepubs/9699919799/), clearly distinguishing features that are Linux-specific from those that are present on most or all UNIX systems. Consequently, you can use TLPI as a guide while writing programs that need to be portable to all UNIX systems.
*   **The [author](https://www.man7.org/mtk/index.html):** I'm an active member of the Linux community. I've worked on the Linux [_man-pages_](https://www.kernel.org/doc/man-pages/) project since 2000, and have been the project maintainer since 2004. It's quite possible you've already read some of my published work, since I'm the author or coauthor of nearly 40% of the 1000+ pages in the _man-pages_ project.

The programming examples in TLPI are in C, but the concepts are equally applicable in a wide range of other languages, both compiled languages such as C++, Rust, D, Pascal, and FORTRAN, and scripting languages such as Perl, Python, and Ruby.

For more detail about the book, see the [preface].

TLPI has been very positively reviewed; some examples can be found in the [reviews page].

For information on **ordering** TLPI, see [purchasing TLPI].

curl -s -L https://www.man7.org/mtk/index.html | /c/opendocs/html2md.ts >> /c/opendocs/The_Linux_Programming_Interface.md
    Michael Kerrisk

[man7.org] > mtk

* * *

/About Michael Kerrisk
======================
https://www.man7.org/mtk/index.html


Contact information
-------------------

*   Email: mtk@man7.org; [signed](http://pgp.mit.edu:11371/pks/lookup?op=vindex&search=0x856199113A35CE5E) PGP [key](http://pgp.mit.edu:11371/pks/lookup?op=get&search=0x856199113A35CE5E)
    
    > > (**NOTE:** to make a _man-pages_ bug report, email **Alejandro Colomar <alx@kernel.org>** and CC **linux-man@vger.kernel.org**. For general information on contributing to the project, see the [CONTRIBUTING](https://git.kernel.org/pub/scm/docs/man-pages/man-pages.git/tree/CONTRIBUTING) file.)
    
*   For **contact regarding training courses**, please see [my Linux training page].  
      
    
*   Twitter: [@mkerrisk](https://twitter.com/mkerrisk)  
      
    

Impressum
---------

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


Professional summary
--------------------

Michael Kerrisk is a freelance trainer, writer, and consultant who has been using and programming on UNIX systems since 1987. He is the author of [The Linux Programming Interface], a book [widely-acclaimed] as the [definitive work] on Linux system programming. As a contributor and (past) maintainer of the [Linux man-pages project](https://www.kernel.org/doc/man-pages/), he has been actively involved in the Linux community for more than 20 years, performing testing, design review, and documentation of Linux APIs. (He also [wrote] many of the manual pages that are consulted on a daily basis by thousands of programmers around the world.)

Widely recognized for his Linux work, Michael regularly [presents] at Linux and free software conferences. A sought-after teacher, he conducts [training courses] for companies and governments across Europe and elsewhere around the world.

Michael holds a BSc(Hons) degree in Computer Science as well as a BA in Psychology and Art History, both from the University of Canterbury (NZ).

A personal journey: getting to know UNIX and Linux
--------------------------------------------------

My exposure to UNIX came in bits and pieces; I first encountered UNIX culture a few years before I actually met UNIX itself.

While I was doing my first (Computer Science) degree, I was introduced to regular expressions via _chef_, a prettied-up version of the early UNIX editor, _ed_, which had been ported to the [PRIMOS](https://en.wikipedia.org/wiki/PRIMOS) system at the [university](https://www.canterbury.ac.nz/). (At the time, [PRIME Computer](https://en.wikipedia.org/wiki/Prime_Computer) was a significant manufacturer of minicomputer hardware, and a notable competitor to [Digital](https://en.wikipedia.org/wiki/Digital_Equipment_Corporation).) At the same time, I met [Robert Biddle](https://carleton.ca/scs/people/robert-biddle/), then a graduate student fresh from the [University of Waterloo](https://uwaterloo.ca/). Waterloo had a fairly famous Computer Science department (it was the home of [WATFOR](https://en.wikipedia.org/wiki/WATFIV_%28programming_language%29#The_WATFOR_Story), a popular [FORTRAN](https://en.wikipedia.org/wiki/Fortran) compiler of the day), and was much closer to the UNIX wave that was then sweeping academia than New Zealand computer science departments, where UNIX had still to make a widespread appearance. Robert told intriguing stories of UNIX, C, and [Ratfor](https://en.wikipedia.org/wiki/Ratfor).

The next step on the way to meeting UNIX came when I met [_emacs_](https://en.wikipedia.org/wiki/Emacs) after taking up a position teaching Computing at the [University of Technology](https://www.unitech.ac.pg/) ("UNITECH"), in [Lae](https://en.wikipedia.org/wiki/Lae), [Papua New Guinea](https://en.wikipedia.org/wiki/Papua_New_Guinea). Although _emacs_ is nowadays most often associated with UNIX, it ran on many other operating systems as well, and so my second meeting with a "UNIX" editor was once more on a PRIMOS system. Once upon a time, I could hack up reasonable LISP macros for _emacs_. However, after I left PNG, I didn't see _emacs_ again for several years, and forgot most everything; so, for a long time, I generally stuck to [_vi(m)_](https://en.wikipedia.org/wiki/Vi). Later, driven by the need to maintain my sanity while working on large LaTeX/Beamer presentations, I rediscovered the joys of _emacs_.

In 1987, I finally met UNIX and C in person. After a spell of traveling, I ended up in England. There, a friend studying at the University of Sussex had access to a suite of [HP Bobcat](https://en.wikipedia.org/w/index.php?title=HP_Bobcat_%28computer%29) workstations running HP/UX, and the university library had a copy of the first edition of [Marc Rochkind](http://basepath.com/)'s wonderful _Advanced UNIX Programming_. For the next several weeks, I was glued to the workstation with AUP, Kernighan and Ritchie's [The C programming Language](https://en.wikipedia.org/wiki/The_c_programming_language), and a printed copy of the C shell man page at my side, writing a multitude of scripts and programs to test how things work. By the end of that time, I'd acquired a reasonable understanding of UNIX, C, and shell scripting.

Soon afterward, I got a job at Digital Equipment Corporation (UK), and soon moved into their training branch, where I was the founding member of what soon became a small group of [ULTRIX](https://en.wikipedia.org/wiki/Ultrix) trainers. I specialized in system programming training, and traveled quite a bit around Europe running system programming courses for Digital employees and customers.

A return to New Zealand, a second degree (Psychology plus a good measure of Art History, which gave me a lot more practice writing), and a short spell working on MS Windows applications took me away from UNIX for a few years. I first got interested in Linux when I picked up some Slackware CDs in the mid-1990s, but didn't do any serious work again with it until the late 1990s, when I moved to Munich, where my first job was at a company whose infrastructure was entirely Linux-based. Since then, all of my day jobs have employed Linux.

The _man-pages_ project
-----------------------

Soon after I began using Linux in earnest, I noticed errors and deficiencies in the system call and library function man pages. Eventually, I started sending notes, and then patches to the maintainer of the _man-pages_ project, [Andries Brouwer](https://www.win.tue.nl/~aeb/). When, in 2004, after more than 9 years as maintainer, Andries retired from the project and asked me to take over maintainership of the project, I accepted.

Although Andries did much good work, _man-pages_ was a largely invisible project when I took over. One of my goals was to turn that around. Under my maintainership, _man-pages_ acquired:

*   a version control system (initially, with _man-pages-2.00_, a private instance of Subversion; later, [starting with](http://linux-man-pages.blogspot.com/2008/09/man-pages-goes-git-at-last_11.html) _man-pages-3.10_ in Sep 2008, a public [Git repository](https://git.kernel.org/?p=docs/man-pages/man-pages.git;a=summary));
*   [changelogs](https://man7.org/linux/man-pages/changelog.html);
*   regular release announcements on the Linux kernel mailing list (starting with _man-pages-2.22_ in Feb 2006);
*   an occasional [blog](http://linux-man-pages.blogspot.com/) ([started](http://linux-man-pages.blogspot.com/2007/10/getting-started.html) in Oct 2007);
*   a [web site](https://www.kernel.org/doc/man-pages/) ([created](http://linux-man-pages.blogspot.com/2007/11/man-pages-website-and-mailing-list.html) in Nov 2007);
*   a [mailing list](http://vger.kernel.org/vger-lists.html#linux-man) ([activated](http://linux-man-pages.blogspot.com/2007/11/man-pages-website-and-mailing-list.html) Nov 2007);
*   a COLOPHON attached to each pages in the release tarballs (since Dec 2007, _man-pages-2.69_), explaining how to report bugs in the manual page (this was probably a key step in increasing the flow of incoming contribution);
*   a [bugzilla component](https://bugzilla.kernel.org/buglist.cgi?cmdtype=runnamed&list_id=838641&namedcmd=open%20man-pages%20bugs) (since Nov 2007);
*   and a set of [online pages](https://man7.org/linux/man-pages/index.html) updated ([since](http://linux-man-pages.blogspot.com/2007/11/man-pages-website-and-mailing-list.html) Nov 2007) with each release.

As of _man-pages-5.13_ (August 2021), when I ceased to maintain the project, I had made a total of 196 releases of _man-pages_ (based on about 22k commits). I'm also the [author or coauthor] of around 440 of the approximately 1060 pages in the project. Working on _man-pages_ is much more than writing documentation: any useful documentation involves spelunking in the kernel and _glibc_ source code, a lot of testing (the list of kernel bugs I've found while testing kernel and _glibc_ interfaces has become quite long), and review and critique of the design of new and proposed interfaces.

Most of my work on _man-pages_ has been on a private basis, and though documentation is a task dreaded by many, some people like what I do: conference paper selection committees seem to favor [presentations] on documentation and interface testing and design review; I was four times invited to the [Linux Kernel Summit](https://en.wikipedia.org/wiki/Linux_Kernel_Summit); and for some months in 2008-2009, I was a paid Fellow of the [Linux Foundation](https://www.linuxfoundation.org/), working full time on the project.

Personal
--------

I'm a New Zealander, but have lived in quite a few places around the world, including [Papua New Guinea](https://en.wikipedia.org/wiki/Papua_New_Guinea), England, Switzerland, the USA (California), and Colombia. These days, I live in Munich, Germany. While I miss spending more time in New Zealand, Germany—[Munich](https://en.wikipedia.org/wiki/Munich) in particular—is a [great place to live](https://www.muenchen.de/int/en/themen.html).

When I find time (not so often these days), I'm happy to get lost in a book—mainly history, politics, biography, popular science, literary fiction, and some genre fiction. Otherwise, my interests include photography, improving my Spanish, and travel (I come from an island and have visited quite a few others; I've also traveled in all continents except Antarctica).

* * *

(C) 2024 [Michael Kerrisk](http://man7.org/mtk/index.html)

* * *

