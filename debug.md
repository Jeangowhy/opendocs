


# 🚩 WinDbg
- https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/
- https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/symbols
- 看雪 CTF 攻防竟赛 https://bbs.pediy.com/thread-267161.htm
- Windows via C/C++ Fifth Edition https://2lib.org/book/5225444/4558f0
- https://docs.microsoft.com/zh-cn/windows-hardware/drivers/debugger/windbg-command-line-preview

WinDgb 是 Windows 专用调试工具，可独立安装，也可以通过 Windows Driver Kit (WDK) 或 Windows SDK 安装。

自从知名的内核调试工具 SoftICE 停止开发后，WinDbg 就成了内核调试领域的首选调试器。因为它是微软公司的产品，所以在 Windows 平台的兼容性上有着强大的先天优势，WinDbg 支持的平台包括x86、IA64、AMD64。

但是 WinDbg 界面提供的反汇编视图很简陋，这很容易让调试者受花指令影响。

安装后获得以下调试工具，需要根据不同的调试类型来选择工具：

- WinDbg  (Windbg.exe) 是 user-mode and kernel-mode 调试工具，包装 NTSD 和 KD 提供一个更好用的用户界面。
- KD  (Kd.exe) Kernel Debugger 是 kernel-mode 调试工具，只提供命令行界面。
- CDB  (Cdb.exe) 是 user-mode 调试工具，只提供命令行界面。
- NTSD  (Ntsd.exe) 是 user-mode 调试工具，只提供命令行界面。

和 GDB 类似，WinDbg 也是 S/C 结构，调试器运行在 host system，被调试程序运行在 target system。

要看懂 WinDbg 手册，需要对 Intel x86 CPU 有很丰富的认识，其所以命令基本都是按 CPU 规则办事的。

Console Debugger (CDB) 和 NT Symbolic Debugger (NTSD) 可以看作等价关系，有一点不同，CDB 在创建新进程时会继承命令行窗口。

    start cdb parameters 
    ntsd parameters 

可以在 Windows Stores 安装最新的 WinDbg Preview 版，提供的界面更好用，同时也提供命令行的支持。

此版本只提供一个 DbgX.Shell.exe 程序，需要通过命令行启动选项来指定一些功能选项。同时，这个版本引入一个新功能 Time Travel Debugging (TTD)，时间施行调试工具。


WinDbg 命令多达上百条，涉及以下方面：

- Numerical Expression
    - MASM Numbers and Operators
    - C++ Numbers and Operators
    - MASM Expressions vs. C++ Expressions
    - Sign Extension
- String Wildcard
- Register
- Pseudo-Register
- Source Line
- Address and Address Range
- Thread
- Process
- System
- Multiprocessor

WinDbg 界面提供的调试功能都可以找到相应的命令：

```sh
g # Run F5
gu # Step Out Shift-F11
t # Step Into F8/F11
p # Step Over F10
.restart # Ctrl-Shift-F5
ENTER (Repeat Last Command)
```

使用 p 执行还可以指定步数。

Expression Examples

```sh
#// Conditional Expressions
? ecx*(eax>ebx) + 7*(eax<ebx) + 3*(eax=ebx) 
?? @ecx*(int)(@eax>@ebx) + 7*(int)(@eax<@ebx) + 3*(int)(@eax==@ebx) 
.if (@eax == 1234) { .echo 1234 } .else { t "$<eaxstep" }

#// C++ Expression Examples
?? myInt 
dd myInt L1 

#// Mixed Expression Examples
?? MyPtr = @@( `myfile.c:43` )
.expr /s masm 
bp Expression1 + @@( Expression2 ) + Expression3 
ba r8 @@( &myInt + 1 ) 
ba r8 myInt + 8 

#// Structures
kd> ??  @$teb->ClientId.UniqueProcess 

#// r (Registers) command 
r eax = @ebx

#// Pseudo-Register Syntax
? $exp
? @$exp

#// C++ expression syntax, the at sign ( @ ) is always required.
r $t1 = @$t2
```

流程与控制：

```sh
.printf [/D] [Option] "FormatString" [, Argument , ...] 

Commands ; .catch { Commands } ; Commands 
 .catch { ... ; .if (Condition) .leave ; ... } 

.if (Condition) { Commands } 
.if (Condition) { Commands } .else { Commands } 
.if (Condition) { Commands } .elsif (Condition) { Commands } 
.if (Condition) { Commands } .elsif (Condition) { Commands } .else { Commands } 

.for (InitialCommand ; Condition ; IncrementCommands) { Commands } 
.foreach [Options] ( Variable  { InCommands } ) { OutCommands } 
.foreach [Options] /s ( Variable  "InString" ) { OutCommands } 
.foreach [Options] /f ( Variable  "InFile" ) { OutCommands } 

.do { ... ; .if (Condition) .break ; ...} (DoCondition)  
.while (Condition) { ... ; .if (Condition) .continue ; ...} 
```

Address Modes and Segment Support

    | Prefix |    Name    |                      Address types                      |
    |--------|------------|---------------------------------------------------------|
    | %      | flat       | 64-bit 寻址，或者使用 16-bit 段选择器的 32-bit 分段寻址 |
    | &      | virtual 86 | Real-mode addresses. x86-based only.                    |
    | #      | plain      | Real-mode addresses. x86-based only.                    |

寻址方式的表达：

- `offset` 虚拟地址空间的绝对地址，如果是 16-bit 模式，这个偏移就是 16-bit，如果是 32-bit 分段模式，偏移就是 32-bit
- `&[[ segment:]] offset` 实地址模式。
- `%segment:[[ offset]]` 分段模式寻址 32-bit or 64-bit。
- `%[[ offset]]` 虚拟寻址空间的绝对地址 (32-bit or 64-bit) 。
- `name[[ +|− ]] offset` 展平模式 32-bit or 64-bit，相对 name 这个符号的地址偏移。 

例如，使用内存检查命令，检查一个 long * 指针指向的内存，或者使用 MASM 汇编解引用操作符 poi 获取内存指针指向的数据：

    dd *( (long*) 0x123456 ) 
    dd poi(0x77afecc2)

执行命令快捷键为 F5，使用命令方式具有更多功能，可以指定要执行线程，Step Out 对应的命令是 gu：

```sh
#// User-Mode Syntax
[~Thread] g[a] [= StartAddress] [BreakAddress ... [; BreakCommands]]

#// Kernel-Mode Syntax
g[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 

#// gu (Go Up)
#// User-Mode Syntax
[~Thread] gu 
#// Kernel-Mode Syntax
gu

#// gn, gN (Go with Exception Not Handled)
#// User-Mode Syntax
[~Thread] gn[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 
[~Thread] gN[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 
#// Kernel-Mode Syntax
gn[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 
gN[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 

#// gh (Go with Exception Handled)
#// User-Mode Syntax
[~Thread] gh[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 
#// Kernel-Mode Syntax
gh[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 
```

### 👉 TTD - Time Travel Debugging
- https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/time-travel-debugging-overview
- https://www.phodal.com/blog/arts-of-research-time-travel-debugger-as-example/
- https://docs.microsoft.com/zh-cn/windows-hardware/drivers/debugger/windbg-timeline-preview
- https://docs.microsoft.com/zh-cn/windows-hardware/drivers/debugger/using-linq-with-the-debugger-objects
- GDB and Reverse Debugging https://www.gnu.org/software/gdb/news/reversible.html

TTD 是一种工具，它使您可以记录正在运行的进程的执行情况，然后在以后向前和向后重放它。TTD 通过倒带调试器会话，来帮助您更轻松地调试问题，而不必在发现错误之前重现问题。

所以，关键逻辑在于 record-replay-rewind，所以 record-replay debugging，reverse-debugging，Timeless debugging 这些都是相同的概念。

TTD 改变了目前调试分析 Windows app 漏洞时候一遍遍的栈回溯、bp 断点、重新加载等问题，大大提高漏洞分析过程的效率。还可以将调试过程保存成文件，方便分享给他人调试，目前只在 WinDbg Preview 版本提供，只支持 User-Mode。

通常有三个与时间旅行调试相关的关键组件：

- 一个记录器，记录所有发生的事；
- 一个跟踪文件，记录所有生成的文件；
- 一个重放器，重放所有发生的事。

使用 TTD 需要提升操作权限，使用具有管理员权限的帐户安装 WinDbg 预览版，并在调试器中记录时使用该帐户运行调试器。

跟踪文件可能会很大，TTD 用户需要确保有足够的可用空间。如果记录程序甚至几分钟，跟踪文件可能会快速增长到几 GB。 TTD 不会设置跟踪文件的最大大小，以允许复杂的长时间运行方案。 快速重新创建问题， 将尽可能减小跟踪文件大小。

跟踪文件 .run 存储记录下运行中的代码，可以使用 WinDbg 打开重复播放，文件 > 启动调试 > 打开跟踪文件。停止记录后，会创建索引 .IDX 文件以便更快地访问跟踪信息。当 WinDbg 预览版打开跟踪文件时，也会自动创建索引文件。索引文件也可以很大，通常比跟踪文件大两倍。

可以使用 `!tt.index` 命令从跟踪文件重新创建索引文件，这个扩展命令需要 tt 模块。

要使用 TTD 记录，打开 WinDbg -> 文件 -> Launch Executable(advanced) 并且勾选右下角的 Record with Time Travel Debugging，另外还支持附加到进程并记录 TTD 跟踪。

When the application being recorded terminates, the trace file will be closed and written out to disk. This is the case if your program crashes as well.

When a trace file is opened, the debugger will automatically index the trace file. Indexing allows for more accurate and faster memory value look ups. This indexing process will take longer for larger trace files.

程序正常运行的过程会被记录下来，完成操作扣关闭应用程序，这时跟踪文件将关闭并写出到磁盘。如果程序崩溃，也会出现这种情况。

打开跟踪文件时，调试器将自动为跟踪文件编制索引。索引可实现更准确、更快的内存价值查找。对于较大的跟踪文件，此索引过程需要更长的时间。

关键帧是跟踪中用于索引的位置，自动生成关键帧。较大的跟踪将包含更多关键帧，对跟踪进行索引后，将显示关键帧的数量。

此时，你处于跟踪文件的开头，并且已准备好向前和向后移动。

使用断点是一种在相关事件中暂停代码执行的常见方法。TTD 是唯一的，你可以设置断点，并在记录跟踪后，在命中该断点之前及时播放。 在出现问题后检查进程状态的功能，确定断点的最佳位置，启用其他调试工作流。

在 TTD 模式下，程序的行为已经形成记录，而通常的 Setp Into 这样的命令，就可以逆向回溯，所以 t 命令的倒带形式 `t-` 就是 Step Into Back!

所有断点也会在倒带时触发并中断调试器，`g-` 倒带运行会在中断点停止运行。只读播放，可以使用读取内存命令，但不能使用修改或写入内存的命令。

- `g-` Go Back
- `t-` Step Into Back
- `p-` Step Over Back
- `g-u` Step Out Back
- `!tt 0` Time Travel to Start
- `!tt 100` Time Travel to End
- `!positions` 显示所有活动线程，包括它们在跟踪中的位置。

时间线可以 0% 到 100% 来定位，`!tt 0` 给倒带到程序准备执行的位置，或者指定线程的时间线位置如 `!tt 13:100`。

在 ttdext 中实现了 TTD 扩展命令，时间旅行扩展命令自动加载，无需使用 load 命令手动加载 TtdExt.dll 扩展，所以，可以直接使用扩展模块调用时间旅行命令，如 `!ttdext.tt 465:0`。

界面中的时间线面板可以进一步筛选特定异常代码的异常，可以显示以下事件：

- 断点
- 函数调用 (按 module！ function 形式搜索)
- 内存访问 (两个内存地址之间的读取/写入/执行)

将鼠标悬停在每个事件上，以通过工具提示获取详细信息。单击某个事件将对该事件运行查询并显示详细信息。双击某个事件将跳转到 TTD 跟踪文件中的该位置。

时间线是执行过程中发生的事件的直观表示形式，这些事件可以是以下位置：断点、内存读取/写入、函数调用和返回以及异常。

使用 "时间线" 窗口可以快速查看重要事件，了解相对位置，并轻松跳到它们在 TTD 跟踪文件中的位置，使用多个时间线直观地浏览行程跟踪中的事件并发现事件相关。

时间线可用鼠标操控：

- 使用 Ctrl + 滚轮放大和缩小。
- 使用 Shift + 滚轮从一端平移。

时光穿越调试可以使用任何对象建立时间线模型：

```sh
#// TTD 调用对象 
dx -r2 @$cursession.TTD.Calls("ucrtbase!initterm")
#// TTD 堆对象
dx -g @$cursession.TTD.Data.Heap()
#// TTD 内存对象
dx -g @$cursession.TTD.Memory(0x00a4fca0,0x00a4fca4, "r")
#// TTD 事件对象
dx -r2 @$curprocess.TTD.Events.Where(t => t.Type == "Exception").Select(e => e.Exception)
#// TTD 异常对象
dx -r2 @$cursession.TTD.Calls("kernelbase!GetLastError").OrderByDescending(c => c.TimeStart)
#// TTD 线程对象
dx -g @$curprocess.TTD.Threads
dx -r2 @$curprocess.TTD.Threads[0]
dx @$curprocess.TTD.Threads[0].@"ActiveTime".@"MinPosition".SeekTo()
#// TTD 位置对象
#// TTD 范围对象
#// TTD 模块对象
#// TTD 集合对象
#// JavaScript TTD 命令自动化
```

使用显示调试器对象模型表达式命令可以查询这些对象：

    dx [-g|-gc #][-c #][-n|-v]-r[#] Expression[,<FormatSpecifier> ]
    dx [{-?}|{-h}]

使用 LINQ 查询语言查询调试器对象的常规信息，如下是会话对象和当前进程的 TTD 命名空间：

```sh
0:003> dx @$cursession.TTD
@$cursession.TTD                
    Calls            [Returns call information from the trace for the specified set of methods: TTD.Calls("module!method1", "module!method2", ...) For example: dx @$cursession.TTD.Calls("user32!SendMessageA")]
    Memory           [Returns memory access information for specified address range: TTD.Memory(startAddress, endAddress [, "rwec"])]
    MemoryForPositionRange [Returns memory access information for specified address range and position range: TTD.MemoryForPositionRange(startAddress, endAddress [, "rwec"], minPosition, maxPosition)]
    PinObjectPosition [Pins an object to the given time position: TTD.PinObjectPosition(obj, pos)]
    AsyncQueryEnabled : false
    RichQueryTypesEnabled : true
    DefaultParameterCount : 0x4
    Resources       
    Data             : Normalized data sources based on the contents of the time travel trace
    Utility          : Methods that can be useful when analyzing time travel traces
0:003> dx @$curprocess.TTD
@$curprocess.TTD                
    Index           
    Threads         
    Events          
    Islands         
    Lifetime         : [13:0, 1047:0]
    DefaultMemoryPolicy : InFragmentAggressive
    SetPosition      [Sets the debugger to point to the given position on this process.]
    GatherMemoryUse  [0]
```

基本属性：

- Lifetime 描述整个跟踪的生存期的 TTD 范围对象。
- Threads 包含 TTD 线程对象的集合，每个线程在跟踪的整个生存期内都一个。
- Events  包含 TTD 事件对象的集合，其中每个事件都对应于跟踪中的每个事件。
- SetPosition 方法，采用 0 到 100 之间的整数或以 N：N 形式表示的字符串作为输入，并将跟踪跳转到该位置。

例如，以下使用 LinQ 查询语言查询 GetLastError 事件列表，使用 OrderBy 进行排序，且按 TimeStart 按升序排序。

```sh
0:003> dx -r2 @$cursession.TTD.Calls("kernelbase!GetLastError").OrderBy(c => c.TimeStart)
@$cursession.TTD.Calls("kernelbase!GetLastError").OrderBy(c => c.TimeStart)                
    [0x0]           
        EventType        : 0x0
        ThreadId         : 0x48f0
        UniqueThreadId   : 0x2
        TimeStart        : 21:214 [Time Travel]
        SystemTimeStart  : 2021年5月12日 10:10:02.399
        TimeEnd          : 21:217 [Time Travel]
        SystemTimeEnd    : 2021年5月12日 10:10:02.399
        Function         : UnknownOrMissingSymbols
        FunctionAddress  : 0x76152ad0
        ReturnAddress    : 0x7713a9a8
        ReturnValue      : 0x0
        Parameters      
    ...
```

LinQ 提供的诸如 Last()、First()、GroupBy、Where 等一系列方法，就像使用 SQL 一样方便。




### 👉 Breakpoints

断点基本功能：

- 断点可以与线程关联。
- 断点可以设定在固定的内存地址上，CPU 经过时触发。
- 断点触发时可以自动执行命令。
- 断点可以设置在内存的非执行区，CPU 读写数据时触发。

使用 ba 设置断点可以根据访问类型 Access 触发：

- e (execute) CPU 获取指定地址的指令时中断。
- r (read/write) CPU 读写指定地址时中断。
- w (write) CPU 写指定地址时中断。
- i (I/O) 访问 I/O 端口时中断，Windows XP+ 系统有效，x86 架构，kernel mode 模式下有效。

断点命令：

- `bl` (Breakpoint List)
- `.bpcmds` (Display Breakpoint Commands) 
- `bp` (Set Breakpoint) F9
- `bu` (Set Unresolved Breakpoint)
- `bm` (Set Symbol Breakpoint) 
- `ba` (Break on Access) 
- `bc` (Breakpoint Clear) 
- `bd` (Breakpoint Disable)
- `be` (Breakpoint Enable)
- `br` (Breakpoint Renumber)
- `bs` (Update Breakpoint Command)
- `bsc` (Update Conditional Breakpoint)

Bp 断点与未解析断点 bu 断点之间有三个主要差异：

- bp 断点位置始终转换为地址。 bu 断点与符号值关联，即使其地址发生更改，也会跟踪该符号位置。
- bp 断点在卸载该模块后，会从断点列表中删除该断点。在重复卸载和加载后，bu 断点会保持不变。
- bp 断点不保存在 WinDbg 工作区中，而 bu 设置的断点保存在工作区中。

```sh
# Conditional Breakpoints
bp MyFunction+0x43 "j ( poi(MyVar)>0n20 ) ''; 'gc' " 
bp /t @$thread nt!ntopenfile
# bp, bu, bm (Set Breakpoint) 
bp[ID] [Options] [Address [Passes]] ["CommandString"] 
bu[ID] [Options] [Address [Passes]] ["CommandString"] 
bm [Options] SymbolPattern [Passes] ["CommandString"]
bm /d myprog!closef* 
bm myprog!openf* 
bp 0040108c
bp main+5c
bp `source.c:31`
# ba (Break on Access) 
ba[ID] Access Size [Options] [Address [Passes]] ["CommandString"]
```



### 👉 Stack Frames

Stack Frame 栈命令：

```sh
#// k (Display Stack Backtrace)
User-Mode, x86 Processor
[~Thread] k[b|p|P|v] [c] [n] [f] [L] [M] [FrameCount]
[~Thread] k[b|p|P|v] [c] [n] [f] [L] [M] = BasePtr [FrameCount]
[~Thread] k[b|p|P|v] [c] [n] [f] [L] [M] = BasePtr StackPtr InstructionPtr
[~Thread] kd [WordCount]
#// Kernel-Mode, x86 Processor
[Processor] k[b|p|P|v] [c] [n] [f] [L] [M] [FrameCount]
[Processor] k[b|p|P|v] [c] [n] [f] [L] [M] = StackPtr FrameCount
[Processor] k[b|p|P|v] [c] [n] [f] [L] [M] = BasePtr StackPtr InstructionPtr
[Processor] kd [WordCount]
#// User-Mode, x64 Processor
[~Thread] k[b|p|P|v] [c] [n] [f] [L] [M] [FrameCount]
[~Thread] k[b|p|P|v] [c] [n] [f] [L] [M] = StackPtr FrameCount
[~Thread] k[b|p|P|v] [c] [n] [f] [L] [M] = StackPtr InstructionPtr FrameCount
[~Thread] kd [WordCount]
#// Kernel-Mode, x64 Processor
[Processor] k[b|p|P|v] [c] [n] [f] [L] [M] [FrameCount]
[Processor] k[b|p|P|v] [c] [n] [f] [L] [M] = StackPtr FrameCount
[Processor] k[b|p|P|v] [c] [n] [f] [L] [M] = StackPtr InstructionPtr FrameCount
[Processor] kd [WordCount]
#// User-Mode, ARM Processor
[~Thread] k[b|p|P|v] [c] [n] [f] [L] [M] [FrameCount]
[~Thread] k[b|p|P|v] [c] [n] [f] [L] [M] = StackPtr FrameCount
[~Thread] k[b|p|P|v] [c] [n] [f] [L] [M] = StackPtr InstructionPtr FrameCount
[~Thread] kd [WordCount]
#// Kernel-Mode, ARM Processor
[Processor] k[b|p|P|v] [c] [n] [f] [L] [M] [FrameCount]
[Processor] k[b|p|P|v] [c] [n] [f] [L] [M] = StackPtr FrameCount
[Processor] k[b|p|P|v] [c] [n] [f] [L] [M] = StackPtr InstructionPtr FrameCount
[Processor] kd [WordCount]
```

在不同的 CPU 架构或模式中，可以使用不同的参数，也可以指定线程、处理器等前缀，约束命令作用的具体对象。

使用参数如下：

- `Thread` 指定要显示调用栈的线程，参考线程标志命令，通过波浪号获取线程标志。
- `Processor` 指定要显示调用栈的处理器，参考 Multiprocessor 命令语法，通过双管道符号获取处理器标志。
- `b` 显示前传入函数的三个参数。
- `c` 显示整洁的栈轨。
- `p` 显示所有传入函数的参数。
- `P` 类似 p 但参数显示在第二行。
- `v` 显示帧指针省略信息 frame pointer omission (FPO)。
- `n` 显示帧号。
- `f` 显示内存距离。
- `L` 隐藏行号。
- `M` 输出使用 Debugger Markup Language，这样可以点击链接定位到内存。
- `FrameCount` 指定显示的帧数量。
- `BasePtr` 指定栈轨基址。
- `StackPtr` 指定栈指针，省略 StackPtr 表示使用 rsp (esp) 寄存器。
- `InstructionPtr` 指定指令指针，省略 InstructionPtr 表示使用 rip (eip) 寄存器。
- `WordCount` 指定栈内存检查的 DWORD_PTR 数量，默认为 .kframes 256。


### 👉 Assembly & Enter

提供汇编指令输入、数据录入命令，`.asm` 和 `e`，不要混淆 `~e` (Thread-Specific Command)：

```sh
# e, ea, eb, ed, eD, ef, ep, eq, eu, ew, eza (Enter Values)
e{b|d|D|f|p|q|w} Address [Values] 
e{a|u|za|zu} Address "String" 
e Address [Values]

.asm[-] Options # Change Disassembly Options
a [Address] # Assemble Code
```

数据录入模式中，直接按 ENTER 表示结束录入，返回正常命令状态。

反汇编命令如下：

```sh
# u, ub, uu (Unassemble)
# b Determines the memory range to disassemble by counting backward. 
# u Specifies that the disassembly will continue even if there is a memory read error.
u[u|b] Range 
u[u|b] Address
u[u|b] 

u @eip

# (Unassemble Function)
# /c Displays only the call instructions in a routine instead of the full disassembly.
# /D Creates linked callee names for navigation of the call graph.
# /m Relaxes the blocking requirements to permit multiple exits.
# /o Sorts the display by address instead of by function offset.
# /O Creates linked call lines for accessing call information and creating breakpoints.
# /i Displays the number of instructions in a routine
uf [Options] Address 

# (Unassemble from Physical Memory)
up Range 
up Address 
up 

# (Unassemble Real Mode BIOS) for 16-bit real-mode code.
ur Range 
ur Address
ur 

ux [Address] # (Unassemble x86 BIOS)
```


### 👉 Memory Check

显示内存数据的命令：

```sh
# d, da, db, dc, dd, dD, df, dp, dq, du, dw (Display Memory)
d{a|b|c|d|D|f|p|q|u|w|W} [Options] [Range] 
dy{b|d} [Options] [Range] 
d [Options] [Range] 
d /c4
```

例如，使用内存检查命令，检查一个 long * 指针指向的内存，或者使用 MASM 汇编解引用操作符 poi 获取内存指针指向的数据：

    dd *( (long*) 0x123456 ) 
    dd poi(0x77afecc2)

搜索内存数据的命令：

```sh
# s (Search Memory)
s [-[[Flags]Type]] Range Pattern 
s -[[Flags]]v Range Object 
s -[[Flags]]sa Range 
s -[[Flags]]su Range 
```

注意不要混淆 `~s` (Set Current Thread), `|s` (Set Current Process), `||s` (Set Current System) 这些命令。

可以为搜索命令指定以下标志：

- `s` 保存当前的搜索结果，可以后续再搜索。
- `r` 读取已经保存的搜索结果，并执行再搜索。
- `n Hits` 为 s 标志指定命中次数，默认值为 1024。与其它标志使用，n 必需放在最后，和数字的空间可以省略。后续任何使用 s 标志的搜索，命中次数超过指定的次数，则会显示溢出错误消息，通知您并非所有的命中都被保存。
- `l Length` 只搜索指定长度以上的 ASCII 或 Unicode 字符串，默认长度为 3，只和 -sa or -su 标志配合使用。
- `w` 只搜索可写内存区，必需使用方括号 [w]。
- `1` 只显示搜索匹配到的地址，可以配合 .foreach 命令使用。
- `sa` 搜索可打印的 ASCII 字符串，使用 `l Length` 指定长度。
- `su` 搜索可打印的 Unicode 字符串，使用 `l Length` 指定长度。
- `-v` 搜索和指定对象相同的类型。
- Object 指定一个对象的地址，或对象指针的地址，调试器会在搜索时查找相同类型。 

类型 Type 指定如下，使用连字符号 - 与 Flasg 拼接： 

    | Type |                       Description                        |
    |------|----------------------------------------------------------|
    | b    | Byte (8 bits)                                            |
    | w    | WORD (16 bits)                                           |
    | d    | DWORD (32 bits)                                          |
    | q    | QWORD (64 bits)                                          |
    | a    | ASCII string(not necessarily a null-terminated string)   |
    | u    | Unicode string(not necessarily a null-terminated string) |

示范：

```sh
# 在 0000000140000000 位置向后 400 字节处查找 ASCII 字符串。 
s-sa 0000000140000000 L400
# 查找 length >=4 的 ASCII 字符串。
s -[l4]sa 0000000140000000 L400
# 在可写内存区查找 ASCII 字符串
s -[wl4]sa 0000000140000000 L400
# 显示匹配的字符串的地址，而不是地址和值。
s -[1wl4]sa 0000000140000000 L400
# 假设 n 指定 base is 16，以下三个命令都是搜索 "Hello"
s 0012ff40 L20 'H' 'e' 'l' 'l' 'o' 
s 0012ff40 L20 48 65 6c 6c 6f 
s -a 0012ff40 L20 "Hello" 
```


### 👉 DebuggerBreak
- pragma data_seg https://docs.microsoft.com/en-us/cpp/preprocessor/data-seg?view=msvc-160
- https://isc.sans.edu/forums/diary/How+Malware+Defends+Itself+Using+TLS+Callback+Functions/6655/
- https://developpaper.com/manual-addition-of-tls-callback-function/
- TLS回调函数 https://www.cnblogs.com/dliv3/p/6489629.html

在运行一个新的进程，Windows 会通过系统 API 调入进程代码，并从初始代码执行，直到程序的 main 入口：

```sh
************* Path validation summary **************
Response                         Time (ms)     Location
Deferred                                       srv*
Symbol search path is: srv*
Executable search path is: 
ModLoad: 00400000 00441000   image00400000
ModLoad: 77e40000 77fda000   ntdll.dll
ModLoad: 75790000 75870000   C:\Windows\SysWOW64\KERNEL32.DLL
ModLoad: 774b0000 776af000   C:\Windows\SysWOW64\KERNELBASE.dll
ModLoad: 75af0000 75baf000   C:\Windows\SysWOW64\msvcrt.dll
(3650.41a0): Break instruction exception - code 80000003 (first chance)
eax=00000000 ebx=00285000 ecx=c0eb0000 edx=00000000 esi=008944d0 edi=77e4687c
eip=77eeecc2 esp=0064fa20 ebp=0064fa4c iopl=0         nv up ei pl zr na pe nc
cs=0023  ss=002b  ds=002b  es=002b  fs=0053  gs=002b             efl=00000246
ntdll!LdrpDoDebuggerBreak+0x2b:
77eeecc2 cc              int     3
```

Windows 的进程加载器在完成最基本的用户态初始化之后，系统的初始化函数就会主动执行断点指令 INT3 触发断点，提供一个机会让调试人员尽早的分析目标程序，这个也叫初始断点 Initial break point。

在初始断点中，可以打印当前的栈轨，包含以下几个 Windows 提供的系统初始化 API，触发初始断点的 API 就是 LdrpDoDebuggerBreak：

```sh
0:000> k
# ChildEBP RetAddr      
00 0064fa4c 77ee9486     ntdll!LdrpDoDebuggerBreak+0x2b
01 0064fcac 77e72fe1     ntdll!LdrpInitializeProcess+0x1ba6
02 0064fd04 77e72ed1     ntdll!_LdrpInitialize+0xba
03 0064fd10 00000000     ntdll!LdrInitializeThunk+0x11
```

除调用初始断点，在 LdrpInitializeProcess 这个进程初始化 API 里会执行一系列的初始化工作，然后返回 LdrInitializeThunk 再通过 Ntdll.ntcontinue 执行程序代码。

进程的信息存放在进程环境块 PEB - Process Envirorment Block，还有线程环境块 TEB - thread environment block，其第一个成员 NtTib 即为线程信息块 TIB - Thread Information Block。

软件保护技术可以通过 PEB 存储的信息来检测是否有调试器正在调试被保护的软件，然后需要获取是否被调试的消息，这个消息存储在 PEB 结构中的第三个字节 BeingDebugged。可以使用 API 来检测是否有调试器存在，返回非 0 值代表被调试，如果返回 0 代表没有被调试。

    BOOL WINAPI IsDebuggerPresent(void);

WinDbg 提供了扩展命令来读取这些结体体，`!peb` 和 `!teb`，这些都是常规扩展命令 General Extensions。

也可以使用内存检查命令 d 来查看原始数据，或者使用编辑命令 e 来修改它，比如 BeingDebugged 调试标记位，这样就不能通过 API 检测标记位了，直接回车结束编辑输入：

```
db @$peb
eb @$peb+2
```

每个线程都有自己独立的局部存储区，Windows 提供线程局部存储机制 TLS - Thread Local Storage，使用 TLS 技术可在线程内部独立使用或修改进程的全局数据或静态数据。使用 `!tls -1` 命令查看所有 TLS slots，或者指定 TEB 地址 `!tls -1 @$teb`。

TLS 中比较重要的成员为 AddressOfCallbacks，该值指向含有 TLS 回调函数地址(VA)的数据，一个程序中可以注册多个 TLS 回调函数。

参考 Windows via C/C++, Fifth Edition - Chapter 21: Thread-Local Storage

TLS 回调函数会在创建/终止进程的线程时自动调用，并且创建进程的主线程先于 EP 代码执行，该特性使它可以作为一种反调试技术使用。有些保护壳程序的反调试技术采用类似的手法，一旦壳程序的预设的异常处理程序没有被调用，则表明程序处于被调试状态。

使用 -G 命令行选项会使 WINDBG 或 CDB 忽略初始断点，如果要在应用程序执行开始时启动新目标并将其中断，请不要使用 -g 选项。

使用 Visual Studio 可以很方便地使用 TLS 回调函数，但是 GCC 本身包含 TLS 数据和回调，需要进行手动调整。

```c
// gcc -m32 tls.cpp -o tls
// g++ -m32 -std=c++11 tls.c -o tls
#include <windows.h>
#include <iostream>
#include <vector>
#include <string>

int main(int argc, char *argv[]) {
    bool status;
    status = IsDebuggerPresent();
    if (status) {
        MessageBox(nullptr, "Detecting debugger", "Find Debugger", MB_OK);
    }
    else {
        MessageBox(nullptr, "Not detect debugger", "No Debugger", MB_OK);
    }
    return 0;
}
```

```sh
#include <windows.h>

#pragma comment(linker, "/INCLUDE:__tls_used")

// 先于 TLS 回调函数使用 printf 可能会发生 Runtime Error
void print_console(char* szMsg)
{
    HANDLE hStdout = GetStdHandle(STD_OUTPUT_HANDLE);
    WriteConsoleA(hStdout, szMsg, strlen(szMsg), NULL, NULL);
}

void NTAPI TLS_CALLBACK1(PVOID DllHandle, DWORD Reason, PVOID Reserved)
{
    char szMsg[80] = {0,};
    wsprintfA(szMsg, "TLS_CALLBACK1() : DllHandle = %X, Reason = %d\n", DllHandle, Reason);
    print_console(szMsg);
}

void NTAPI TLS_CALLBACK2(PVOID DllHandle, DWORD Reason, PVOID Reserved)
{
    char szMsg[80] = {0,};
    wsprintfA(szMsg, "TLS_CALLBACK2() : DllHandle = %X, Reason = %d\n", DllHandle, Reason);
    print_console(szMsg);
}
/*
注册 TLS 函数：
- CRT 表示使用 C Runtime 机制
- X 表示表示名随机
- L 表示 TLS Callback section
- X 也可以换成 B~Y 任意一个字符
*/
#pragma data_seg(".CRT$XLX")
    PIMAGE_TLS_CALLBACK pTLS_CALLBACKs[] = { TLS_CALLBACK1, TLS_CALLBACK2, 0 };
#pragma data_seg()

DWORD WINAPI ThreadProc(LPVOID lParam)
{
    print_console("ThreadProc()\n");
    return 0;
}

int main(void)
{
    HANDLE hThread = NULL;

    print_console("main() start\n");
    hThread = CreateThread(NULL, 0, ThreadProc, NULL, 0, NULL);

    WaitForSingleObject(hThread, 60*1000);
    CloseHandle(hThread);

    print_console("main() end\n");

    return 0;
}
```

### 👉 Exceptions & Event
- https://docs.microsoft.com/zh-cn/windows-hardware/drivers/debugger/controlling-exceptions-and-events
- Structured Exception Handling https://docs.microsoft.com/en-us/windows/win32/debug/structured-exception-handling

初始断点不是调试器可以得到的最早控制机会，如进程创建事件和 EXE 模块加载事件都会比它早。

Windows 程序设计中最重要的理念就是消息传递，事件驱动。异常也当作是一种消息，应用程序发生异常时就触发了该消息并告知系统。系统接收后同样会找它的“回调函数”，也就是我们的异常处理例程。当然，如果我们在程序中没有做异常处理的话，系统也不会置之不理，它将弹出我们常见的应用程序错误框，然后结束该程序。所以，当我们改变思维方式，以 CALLBACK 的思想来看待 SEH，它将不再神秘。

SEH - Structured Exception Handling 结构化异常处理是 Windows 操作系统提供给程序设计者的强有力的错误或异常的处理机制，在 VISUAL C++ 包装成 `_try{} _finally{}` 和 `_try{} _except {}` 结构。

所以当建立一个 C++ try 语句块时，编译器就生成一个 SEH_try 块。一个 C++ catch 测试变成一个 SEH 异常过滤器，并且 catch 中的代码变成 SEH_except 块中的代码。

异常处理器其实包含内核异常处理，和常用的 Ring 3 异常处理，这种异常处理流程如下：

1. 交给调试器(first-chance) 
2. 执行 VEH
3. 执行 SEH
4. TopLevelEH(进程被调试时不会被执行)
5. 交给调试器(second-chance)
6. 调用异常端口通知 csrss.exe

- `SetUnhandledExceptionFilter` 为每一个进程或线程注册一个处理 catch/expect 没有处理的异常处理函数，这是应用程序处理异常的最后机会。
- `UnhandledExceptionFilter` 将未处理的异常传递给调试器处理，如果程序处理于调试中。

好多壳程序注册安装了异常处理程序来愚弄 Ollydbg 这类逆向工具。

程序可以主动触发一个异常，`RaiseException`，且不在 try-catch 中处理它，如果存在调试器则调试器就会接管这个异常，那么这个异常就不会走到我们的 SetUnhandledExceptionFilter 注册的异常处理函数，当然调试器也可以选择不接管这个异常，所以这属于一种比较低级的反调试手段。

发生异常时，系统首先判断目标程序如果正在调试中，则系统挂起程序并向调试器发送 DEBUG_EVENT 结构体携带 EXCEPTION_DEBUG_EVENT 消息。

在所有可能的处理途径都尝试过后，系统会提供默认的异常处理程序，通常显示一个对话框，可以选择关闭或附加到调试器上进行调试，如果不调试就调用 ExitProcess 终结程序。

在终结之前，系统仍然对发生异常的线程异常处理句柄来一次展开，这是线程异常处理例程最后清理的机会。


进程创建事件 cpr 默认是忽略处理的，可以通过命令 sxe cpr 来修改处理状态，将其改变为 break 中断状态。然后 .restart 就可以在进程创建的时候断点调试。

```sh
0:000> sx
  ct - Create thread - ignore
  et - Exit thread - ignore
 cpr - Create process - ignore
 epr - Exit process - break
  ld - Load module - output
  ud - Unload module - ignore
 ser - System error - ignore
 ibp - Initial breakpoint - ignore
 iml - Initial module load - ignore
 out - Debuggee output - output
 ...
```

又以 ld - Load module 事件为例，默认是 output 状态，即调试会输出模块加载的信息：

```sh
ModLoad: 753f0000 75415000   C:\Windows\SysWOW64\IMM32.DLL
ModLoad: 77390000 7739f000   C:\Windows\SysWOW64\kernel.appcore.dll
ModLoad: 76380000 7643f000   C:\Windows\SysWOW64\msvcrt.dll
```

可以通过命令 sxe ld 来修改模块加载事件发生时，进入中断。

还可以使用以下和模块相关的命令：

```sh
# ld (Load Symbols)
ld ModuleName [/f FileName]

# lm (List Loaded Modules)
lm Options [a Address] [m Pattern | M Pattern]

# .load, .loadby (Load Extension DLL)
.load DLLName  
!DLLName.load 
.loadby DLLName ModuleName

# .reload (Reload Module)
.reload [Options] [Module[=Address[,Size[,Timestamp]]]] 
.reload -?
```

在手册调试技术部分，专门介绍了控制异常与事件 Controlling Exceptions and Events。

当 Windows 操作系统允许调试器处理异常时，生成异常的应用程序会中断调试器。 也就是说，应用程序会停止并且调试器会处于活动状态。 然后，调试器可以通过某种方式处理异常或分析这种情况。 然后，调试器可以结束进程，或让它继续运行。

如果调试器忽略异常并使应用程序继续运行，则操作系统将查找其他异常处理程序，就像没有调试器一样。 如果异常被处理，应用程序将继续运行。 但是，如果异常仍未处理，这种情况则会向调试器提供二次机会来处理异常。

当异常或事件中断调试器时，可以使用调试器来检查正在执行的代码和应用程序正在使用的内存。可以跳转到程序的不同位置，也可以删除此异常来源。

可以通过 gh (Go with Exception Handled) 命令，或 gn (Go with Exception Not Handled) 命令处理异常，以继续执行程序。

如果在调试器的第二个机会中发出 gn 命令来处理异常，则应用程序将结束。

```sh
#// User-Mode Syntax
[~Thread] gh[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 
[~Thread] gn[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 
[~Thread] gN[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 

#// Kernel-Mode Syntax
gh[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 
gn[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 
gN[a] [= StartAddress] [BreakAddress ... [; BreakCommands]] 

```

使用 gh 命令时，指定 a 标志表示类似 ba 创建的处理器中断，而不是类似 bp 或 bm 创建的软中断。如果 BreakAddress 省略，则不创建中断，a 标志无效。

可以使用 .lastevent 命令显示最近的异常或事件。

调试中使用以下命令来控制调试如何响应异常或事件，主要涉及处理状态或中断状态：

```sh
#// sx, sxd, sxe, sxi, sxn, sxr, sx- (Set Exceptions)
sx{e|d|i|n} [-c "Cmd1"] [-c2 "Cmd2"] [-h] {Exception|Event|*} 
sx- [-c "Cmd1"] [-c2 "Cmd2"] {Exception|Event|*} 
sx  #// displays the default behavior of the debugger for each exception and event.
sxr #// state reset to defaults
```

调试器可以设置每个异常或事件的中断状态：

- 事件发生 ("第一次机会" ) 后，就会立即中断调试器。
- 如果其他错误处理程序有机会响应 ("第二次机会" ) ，事件可能会在中中断。
- 此事件还可以向调试器发送消息，但会继续执行。
- 调试器可以忽略此事件。

命令解析：

- sx 命令显示当前进程异常列表，包括默认处理行为。
- sxe, sxd, sxn, sxi 等命令设置调试器如何处理异常或事件。
- sxr 命令恢复所有异常或事件的默认处理方式和状态。
- sx- 命令用来更改指定事件的 first-chance 和 second-chance 命令关联，但不改变其它状态设置。
- 如果使用 -h 选项，或者指定 cc, hc, bpec, ssec 事件，那么，sxe, sxd, sxn, sxi 命令将控制异常或事件的处理状态。在所有其他情况下，这些命令控制异常或事件的中断状态。

设置异常或事件的中断状态时，可以使用以下命令：

    | Command |   Status name   |                                        Description           |
    |---------|-----------------|--------------------------------------------------------------|
    | sxe     | Break (Enabled) | 异常发生时立即中断，其它异常处理激活前，这种是首次处理机会。        |
    | sxd     | (Disabled)      | 调试器不进行 first-chance 中断，但为后续不能处理的异常进行中断。   |
    | sxn     | Output (Notify) | 发生此异常时，目标应用程序根本不会中断调试器，只显示一条消息。 |
    | sxi     | Ignore          | 发生此异常时，目标应用程序不会中断到调试器中，并且不会显示任何消息。|

设置处理状态时，命令作用如下：

    |   Command   | Status name |           Description            |
    |-------------|-------------|----------------------------------|
    | sxe         | Handled     | 恢复执行时当作已经处理。         |
    | sxd,sxn,sxi | Not Handled | 继续执行时，该事件被视为未处理。 |


以下事件定义或异常的默认处理状态都是 Not Handled，修改这些方式时要特别小心。如果将方式修改为 Handled，则所有第一次异常和第二次异常都被认为是已处理，原有的所有异常处理函数都会被跳过。

    | 事件代码 |              原义             |      说明      |     默认中断方式    |
    |----------|-------------------------------|----------------|---------------------|
    | asrt     | Assertion failure             | 断言错误       | Break               |
    | av       | Access violation              | 访问违例       | Break               |
    | dm       | Data misaligned               | 数据未对齐     | Break               |
    | dz       | Divide by zero                | 除零           | Break               |
    | eh       | C++ EH exception              | C++ EH 异常    | Second-chance break |
    | gp       | Guard page violation          | 页保护违例     | Break               |
    | ii       | Illegal instruction           | 非法指令       | Second-chance break |
    | iov      | Integer overflow              | 整数溢出       | Break               |
    | ip       | In-page I/O error             | 页面I/O错误    | Break               |
    | isc      | Invalid system call           | 非法系统调用   | Break               |
    | lsq      | Invalid lock sequence         | 非法加锁次序   | Break               |
    | sbo      | Stack buffer overflow         | 栈缓冲区溢出   | Break               |
    | sov      | Stack overflow                | 栈溢出         | Break               |
    | wkd      | Wake debugger                 | 唤醒调试器     | Break               |
    | aph      | Application hang              | 应用程序挂起   | Break               |
    | 3c       | Child application termination | 子程序终止     | Second-chance break |
    | ch hc    | Invalid handle                | 非法句柄       | Break               |
    | Number   | Any numbered exception        | 所有编号的异常 | Second-chance break |

Application hang 这个异常在 Windows 系统结束，并停止相应的进程时触发，即挂起。

可以使用 ah 命令指定一个地址来重写 asrt 中断状态。另外 ch 和 hc 指的是同一个异常，控制其中断状态使用 sx* ch 命令格式。

```sh
# ah (Assertion Handling)
ahb [Address] 
ahi [Address] 
ahd [Address] 
ahc 
ah 
```

命令解释：

- ahb 在指定的地址发生 assertion fails 则中断。
- ahi 忽略指定地址的 assertion failure 异常。
- ahd 删除指定地址的 assertion-handling 信息，恢复默认设置。
- ahc Deletes all assertion-handling information for the current process.
- ah Displays the current assertion-handling settings.

以下异常的默认处理方式都是"Handled"。由于这些异常是用来和调试器通信的，所以一般不能把它们设置为"Not Handled"，否则调试器会跳过这些异常并由其他异常处理器来处理。

应用程序可以使用 DBG_COMMAND_EXCEPTION (dbce) 来和调试器通信，这个异常类似断点，但是可以使用 SX* 命令来指定该异常发生时的对待方式。

    | 事件代码 |                含义                |                          | 默认中断方式 |
    |----------|------------------------------------|--------------------------|--------------|
    | dbce     | Special debugger command exception | 专用调试器命令异常       | Ignore       |
    | vcpp     | Special Visual C++ exception       | 专用 Virtual C++ 异常    | Ignore       |
    | wos      | WOW64 single-step exception        | WOW64 单步异常           | Break        |
    | wob      | WOW64 breakpoint exception         | WOW64 断点异常           | Break        |
    | sse ssec | Single-step exception              | 单步异常                 | Break        |
    | bpe bpec | Breakpoint exception               | 断点异常                 | Break        |
    | cce cc   | CTRL+C or CTRL+BREAK               | 控制台程序输入中断信号。 | Break        |

上表中最后三个异常有两个不同的事件代码，控制中断方式时，使用 sse, bpe, 和 cce。控制异常处理方式时，使用 ssec, bpec 和 cc。

以下异常在调试 CLR 托管代码时有用：

    | Event code |                    Meaning                     |          Default status         |
    |------------|------------------------------------------------|---------------------------------|
    | clr        | Common Language Runtime exception              | Second-chance break Not handled |
    | clrn       | Common Language Runtime notification exception | Second-chance break Handled     |
     

可以修改下面这些事件的中断方式，这些不是异常，所以和异常处理方式无关。

|    事件代码   |                     含义                    |           默认中断方式           |
|---------------|---------------------------------------------|----------------------------------|
| ser           | 系统错误(System error)                      | Ignore                           |
| cpr[:Process] | 创建进程(Process creation)                  | Ignore                           |
| epr[:Process] | 进程退出(Process exit)                      | Ignore                           |
| ct            | 线程创建(Thread creation)                   | Ignore                           |
| et            | 线程退出(Thread exit)                       | Ignore                           |
| ld[:Module]   | 加载模块(Load module)                       | Output                           |
| ud[:Module]   | 卸载模块(Unload module)                     | Output                           |
| out[:Output]  | 目标程序输出(Target application output)     | Ignore                           |
| ibp           | 初始断点(Initial break point)               | 用户模式：Break 内核模式：Ignore |
| iml           | 初始模块加载(Initial module load)仅内核模式 | Ignore                           |

Ignore。可以通过几种方法设置为"Break" 关于修改该方式的更多信息，查看崩溃和重起目标机。

其中 cpr 和 epr 两个事件只在 CDB 的 -o 命令行选项或 WinDbg .childdbg (Debug Child Processes) 命令启用子进程调试时，该事件才可控制。进程名可以包含任意扩展名和 * ? 通配符。

如果指定了Module，则当名字为指定值的模块加载时发生中断。如果没有指定Module，任何模块加载时都会中断。调试器只会记录最近一次的 ld 或 ud 设置，不支持对多个模块多次设置。Module 可以指定模块的名字或地址。如果指定名字，Module 可以包含通配符和说明。在 ld、ud 和 Module 之间需要加上一个冒号或者空格。如果 Module 包含通配符，则字符串模板会被保存下来在之后的卸载事件发生时用来匹配。

极少数情况下，调试器在卸载事件发生时有地址匹配的模块，但是没有它的模块名信息。因此，如果Module 包含通配符，这种情况下调试器无法确定被卸载模块的名字，所以任何模块被卸载都会中断。

如果指定了 Output，仅当接收到和模板字符串匹配的输出时才中断。Output 可以包含数个通配符和说明。但是，Output 中不能包含冒号或者空格。匹配不是大小写敏感的。在 out 和 Output 之间应该加上一个冒号或者空格。

初始断点 ibp 事件在开始调试会话和重起目标机时发生，可以在启动调试器时使用 -g 命令行选项将这个方式将用户模式下的设置修改为 Ignore。 

初始模块加载事件也可以将中断方式修改为 "Break"，参考 Crashing and Rebooting the Target Computer。



### 👉 Thread & Processor

许多命令需要线程 ID 作为参数，使用管道符号，后面指定具体的线程 ID：

- `~.` 当前线程。
- `~#` 当前引发异常的线程。
- `~*` 当前进程所有的线程。
- `~Number` 指定线程索引号 Number
- `~~[TID]` 线程 TID，方括号不要省略。
- `~[Expression]` 使用表达式指定线程 ID。

在用户模式下使用 `~s` 命令设置或显示当前线程数。

```
~Thread s 
~ s 
``` 

请勿内核模式下的多处理命令 | Change Current Processor) 混淆：

    |s | Set Current Process) 
    || (Set Current System)

许多命令需要进程 ID 作为参数，使用管道符号，后面指定具体的进程 ID：

- `|.` The current process.
- `|#` The process that caused the current exception or debug event.
- `|*` All processes.
- `|Number` 指定索引号 Number 的进程。
- `|~[PID]` 指定 PID 的进程。
- `|[Expression]` 使用表达式指定 PID 的进程。


许多命令需要系统 ID 作为参数，使用双管道符号后面指定标识：

- `||.` The current system
- `||#` The system that caused the current exception or debug event.
- `||*` All systems.
- `||ddd` The system whose ordinal is ddd.


### 👉 WinDbg Symbols

Windows 的调试符号文件为 .pdb or .dbg，通常包含以下内容：

- Global variables
- Local variables
- Function names and the addresses of their entry points
- Frame pointer omission (FPO) records
- Source-line numbers

调试符号文件是必不可少的辅助，调试过程中，完整的调试符号信息可以让你更清晰地掌握程序当前所在的位置。

使用 cl.exe 编译命令，可以指定调试符号以生成 pdb 文件：

    cl /DDEBUG /Zi tls.c user32.lib

用于调试的 CL.EXE 选项：

    |  Option |                                 Purpose                                 |
    |---------|-------------------------------------------------------------------------|
    | /c      | Compiles without linking.                                               |
    | /FD     | Generate file dependencies                                              |
    | /Od     | Disables optimization.                                                  |
    | /Oi     | Generates intrinsic functions.                                          |
    | /DDEBUG | 定义 DEBUG 符号，使用调试模式，自动生成 PDB 符号文件，还可以定义 _DEBUG     |
    | /MDd    | 使用 MSVCRTD.LIB 创建多线程 DLL 程序调试版                                |
    | /MLd    | 使用 LIBCD.LIB 创建单线程程序调试版                                       |
    | /MTd    | 使用 LIBCMTD.LIB 创建多线程程序调试版                                     |
    | /Gm     | ⛔ Enables minimal rebuild.                                            |
    | /GX     | ⛔ Enables synchronous exception handling. Use /EH instead.            |
    | /GZ     | ⛔ Enables fast checks. (Same as /RTC1)                                |
    | /EH     | Specifies the model of exception handling.                              |
    | /YX     | Automates precompiled header                                            |
    | /ZI     | Debug 在程序中包含调试信息，x86 有效                                      |

在联网状态下，只要调试到一个新模块，WinDbg Preview 会自动下载 Windows 提供的调试符号文件：

```sh
# Using a Symbol Server
.sympath srv*
.sympath srv*https://msdl.microsoft.com/download/symbols
.sympath c:\somedir;srv*c:\MyServerSymbols*https://msdl.microsoft.com/download/symbols

# Caching Symbols Locally
.sympath cache*c:\MySymbols;\\someshare
.sympath cache*c:\MySymbols;srv*https://msdl.microsoft.com/download/symbols

# Combining cache* and srv*
.sympath cache*;srv*https://msdl.microsoft.com/download/symbols
.sympath cache*c:\MySymbols;srv*https://msdl.microsoft.com/download/symbols
```

默认缓存路径：

    C:\ProgramData\dbg\sym\

符号文件可以提供给 IDA 调试器使用，在其安装目录下 cfg\pdb.cfg 指定 PDBSYM_DOWNLOAD_PATH 为符号安装目录，或者使用环境变量 `_NT_SYMBOL_PATH` 设置符号文件的缓存位置、服务器地址。

    set _NT_SYMBOL_PATH="cache*c:\symbols;SRV*c:\\symbols*http://msdl.microsoft.com/download/symbols"

打开 IDA 通过文件菜单也可以载入 PDB 符号文件。

指定符号文件路径 somedir，调试器会依次搜索：

- somedir\symbols\dll
- somedir\dll
- somedir

Windows 按以下目录进行不同类型符号的组织：

    | Directory |         Contains Symbol Files for         |
    |-----------|-------------------------------------------|
    | ACM       | Microsoft Audio Compression Manager files |
    | COM       | Executable files (.com)                   |
    | CPL       | Control Panel programs                    |
    | DLL       | Dynamic-link library files (.dll)         |
    | DRV       | Driver files (.drv)                       |
    | EXE       | Executable files (.exe)                   |
    | SCR       | Screen-saver files                        |
    | SYS       | Driver files (.sys)                       |


### 👉 WinDbg Commands

快速参考：

```sh
# Attach to Process 
windbg -p ProcessID
windbg -pn ProcessName
# Attaching to a Running Process Noninvasively
windbg -pv -p ProcessID
windbg -pv -pn ProcessName

# Opening a Dump File 
windbg -y SymbolPath -i ImagePath -z DumpFileName

.opendump DumpFile 
.opendump /c "DumpFileInArchive" [CabFile] 

# Ending a User-Mode Session Without Exiting
.kill
.detach # (Detach from Process) command.
.abandon # (Abandon Process) command.
q  # (Quit) command (unless you started the debugger with the -pd option).
qd # (Quit and Detach) 


# .attach (Attach to Process)
.attach [-premote RemoteOptions] AttachOptions PID

# .create (Create Process)
.create [-premote RemoteOptions] [-f] CommandLine 


# 设置源代码目录
.srcpath srv*;c:\someSourceCode
# 打开源代码文件
.open [-m Address] FileName 
.open -a Address 

.symfix[+] [LocalSymbolCache] # Set Symbol Store Path
.sympath[+] [Path [; ...]]  # Set Symbol Path

.exepath[+] [Directory [; ...]] # (Set Executable Path) 

# Remote Debugging 
windbg -server tcp:port=5005 -k 1394:channel=32
windbg -remote tcp:Port=5005,Server=YourHostComputer

.server tcp:port=5005
# On the remote computer, connect to Remote Session from the File menu.
tcp:Port=5005,Server=YourHostComputer

# x (Examine Symbols)
# /0 Displays only the address of each symbol.
# /1 Displays only the name of each symbol.
# /2 Displays only the address and name of each symbol (not the data type).
# /D Displays the output using Debugger Markup Language.
# /t Displays the data type of each symbol, if the data type is known.
# /v Displays the symbol type (local, global, parameter, function, or unknown) of each symbol. 
# /s Size Display only those symbols whose size, in bytes, equals the value of Size. 
# /q Displays symbol names in quoted format.
# /p Omits the space before the opening parenthesis when the debugger displays a function name and its arguments.
# /f Displays the data size of a function.
# /d Displays the data size of data.
# /a Sorts the display by address, in ascending order.
# /A Sorts the display by address, in descending order.
# /n Sorts the display by name, in ascending order.
# /N Sorts the display by name, in descending order.
# /z Sorts the display by size, in ascending order.
# /Z Sorts the display by size, in descending order.
x [Options] Module!Symbol 
x [Options] *
x *! 

# .tlist (List Process IDs)
.tlist [Options][FileNamePattern]
.tlist node
.tlist /c
```

新版本提供 DML（Debugger Markup Language）功能，窗口内容可以像 HTML 一样具有链接跳转功能，默认开启 `.prefer_dml 1`。

命令行是调试工具的强大功能，所有 WinDbg 界面提供的功能都可以通过命令行实现，附带的手册 debugger.chm 提供了完整的参考，可以使用 .hh 命令打开。

具体命令的帮助信息查询 `.hh <command>`，所有命令列表 `.help`，可以获取一组命令列表，`.help /D a*` 获取指定前缀的命令列表。

还有通过 DLL 提供的扩展命令，查询命令 `.chain /D`，List Debugger Extensions。

    B[C|D|E][<bps>] - clear/disable/enable breakpoint(s)
    BL - list breakpoints
    BA <access> <size> <addr> - set processor breakpoint
    BP <address> - set soft breakpoint
    D[type][<range>] - dump memory
    DT [-n|y] [[mod!]name] [[-n|y]fields]
       [address] [-l list] [-a[]|c|i|o|r[#]|v] - dump using type information
    DV [<name>] - dump local variables
    DX [-r[#]] <expr> - display C++ expression using extension model (e.g.: NatVis)
    E[type] <address> [<values>] - enter memory values
    G[H|N] [=<address> [<address>...]] - go
    K <count> - stacktrace
    KP <count> - stacktrace with source arguments
    LM[k|l|u|v] - list modules
    LN <expr> - list nearest symbols
    P [=<addr>] [<value>] - step over
    Q - quit
    R [[<reg> [= <expr>]]] - view or set registers
    S[<opts>] <range> <values> - search memory
    SX [{e|d|i|n} [-c "Cmd1"] [-c2 "Cmd2"] [-h] {Exception|Event|*}] - event filter
    T [=<address>] [<expr>] - trace into
    U [<range>] - unassemble
    version - show debuggee and debugger version
    X [<*|module>!]<*|symbol> - view symbols
    ? <expr> - display expression
    ?? <expr> - display C++ expression
    $< <filename> - take input from a command file

    <expr> unary ops: + - not by wo dwo qwo poi hi low
           binary ops: + - * / mod(%) and(&) xor(^) or(|)
           comparisons: == (=) < > !=
           operands: number in current radix, public symbol, <reg>
    <type> : b (byte), w (word), d[s] (doubleword [with symbols]),
             a (ascii), c (dword and Char), u (unicode), l (list)
             f (float), D (double), s|S (ascii/unicode string)
             q (quadword)
    <pattern> : [(nt | <dll-name>)!]<var-name> (<var-name> can include ? and *)
    <range> : <address> <address>
            : <address> L <count>

    User-mode options:
    ~ - list threads status
    ~#s - set default thread
    | - list processes status
    |#s - set default process

    x86 options:
    DG <selector> - dump selector
    <reg> : [e]ax, [e]bx, [e]cx, [e]dx, [e]si, [e]di, [e]bp, [e]sp, [e]ip, [e]fl,
            al, ah, bl, bh, cl, ch, dl, dh, cs, ds, es, fs, gs, ss
            dr0, dr1, dr2, dr3, dr6, dr7
            fpcw, fpsw, fptw, st0-st7, mm0-mm7
             xmm0-xmm7
    <flag> : iopl, of, df, if, tf, sf, zf, af, pf, cf
    <addr> : #<16-bit protect-mode [seg:]address>,
             &<V86-mode [seg:]address>


# 🚩 IDA 逆向屠龙宝刀
- OllyDbg 2.01 http://www.ollydbg.de/version2.html
- OllyDbg 2.01 Plugin API http://www.ollydbg.de/Help/Main.htm
- Kali Linux Downloads https://www.kali.org/downloads/
- Kali Linux - An Ethical Hacker's Cookbook https://2lib.org/book/3388241/bbc70d
- Hacking: The Art of Exploitation Jon Erickson https://2lib.org/book/1053096/4eac6c
- Metasploit: The Penetration Tester's Guide https://2lib.org/book/1216358/a8f462
- Mastering Metasploit https://2lib.org/book/5593662/907935
- The Complete Metasploit Guide https://2lib.org/book/6863087/220e65
- Kali Linux Cookbook 2nd https://2lib.org/book/3365351/cddd21
- Kali Linux Cookbook https://2lib.org/book/2188749/13fca6
- Mastering Kali Linux for Web Penetration Testing https://2lib.org/book/3382159/3955b6
- Mastering Kali Linux for Web Penetration Testing [epub] https://2lib.org/book/3382158/58fdf5
- IDA Freeware https://www.hex-rays.com/ida-free/
- IDA Pro 权威指南（第2版）PDF https://2lib.org/book/11448830/fa7cc5
- The IDA Pro book https://2lib.org/book/1178717/1a4beb
- Disassembling Code: IDA Pro and SoftICE https://2lib.org/book/490550/06c59a
- Reverse Engineering Code with IDA Pro https://2lib.org/book/633233/230ebc
- PYG 破解 IDA Pro 7.5 SP3 (x86/x64/ARM/ARM64/PPC/PPC64/MIPS + SDK+DOC) https://pan.baidu.com/s/1m8aYbprfc6-Gan0mdi7y2w#IPYG
- IDA Help: Cross reference attributes https://hex-rays.com/products/ida/support/idadoc/1305.shtml
- Ghidra Software Reverse Engineering Framework https://github.com/NationalSecurityAgency/ghidra

软件逆向工程 (Software Reverse Engineering)又称软件反向工程，是指从可运行的程序系统出发，运用反汇编、系统分析、程序理解等多种计算机技术，对软件的结构、流程、算法、代码等进行逆向拆解和分析。

IDA Pro 权威指南罗列了几个软件逆向技术的用途：

- Analysis of malware
- Analysis of closed-source software for vulnerabilities
- Analysis of closed-source software for interoperability
- Analysis of compiler-generated code to validate compiler performance/correctness
- Display of program instructions while debugging

在逆向工程领域，有两个拳头工具，一个是免费擅长动态分析的 OllyDbg 2.01，这是自 2013 年更新后的版本，它有强大的插件机制。最新的 OllyDbg x64 动态调试器是继承者，64-bit 逆向工具，不过兼容性似乎不太够用，调试运行程序都是问题。

OllyDbg 是一个动态追踪工具，将 IDA 与 SoftICE 结合起来的产物，Ring 3 级调试器，另外由于 OllyDbg 是一个通用的 32-bit 汇编分析调试器，且操作界面非常直观简单，己代替 SoftICE 成为当今最为流行的调试解密工具。

由于 OllyDbg v2.x 目前插件功能还不太完善，因此没有 OllyDbg 1.1 版本好用。

另一个则是收费的 IDA Pro，它是目前最棒的一个静态反编译软件，功能极丰富！ 从官方记录的 IDA 3.74 (15/02/98) 到现在，超过 20 年的发展让 IDA Pro 成为当之无愧的逆向王牌工具。当然，提供了免费版的 IDA Freeware，只是缺失 IDA > v7.6 的功能，并且没有技术支持服务，但支持 32-bit 和 64-bit 应用的分析，支持多系统可执行文件格式。

IDA Pro（Interactive Disassembler Professional）是 Hex-Rays 公司出品的一款交互式反汇编工具，它功能强大、操作复杂，要完全掌握它，需要具备很多知识。IDA 最主要的特性是交互和多处理器，用户可以通过对 IDA 的交互来指导 IDA 更好地进行反汇编。IDA 并不自动解决程序中的问题，但会按用户的指令找到程序中的可疑之处，用户的工作是通知 IDA 怎样去做，交互性是 IDA 的特色也是其名称的来由。IDA 的作者，即 Hex-Rays 公司的 CEO Ilfak Guilfanov 真是个编程天才。

Kali Linux 系统预装了 OllyDbg，OllyDbg 可以在 Windows/Linux 环境中运行，在 Linux 的 WINE 中运行。

Kali 是基于 Debian 的操作系统，由 Offensive Security 公司开发和维护。它在安全领域是一家知名的、值得信赖的公司，它甚至还有一些受人尊敬的认证，来对安全从业人员做资格认证。拥有超过 300 个渗透测试工具，拥有开源 Git 树等，甚至还集成了 600 多种黑客工具。

如果，还想尝试其它免费的逆向工具，Ghidra 也许是个不错的选择，它是美国国家安全局（NSA）研究部门开发的软件逆向工程（SRE）套件，用于支持网络安全任务，包括一套功能齐全的高端软件分析工具。能够在各种平台上分析编译后的代码，包括 Windows、Mac OS 和 Linux。功能包括反汇编，汇编，反编译，绘图和脚本，以及数百个其他功能。Ghidra 支持各种处理器指令集和可执行格式，可以在用户交互模式和自动模式下运行，还可以使用公开的 API 开发 Ghidra 插件和脚本。

IDA Pro 作为最佳逆向工具，从一个 F5 快捷键提供的功能可见一斑，他的核心团队的目标就是希望为用户提供一键反编译近似 C 语言源代码的功能。在 IDA Pro 菜单中有 View -> Open SubViews -> Pseudocode F5，安装了 Hex Rays decompiler 插件就有这项功能，可以在查看汇编的时候，按 F5 生成 C 伪代码。注意，插件有对应不同的 CPU 架构的版本，如 hexrays.dll, hexarm.dll, hexarm64.dll。

IDA 提供的代码流程视图是非常优秀的功能，代码逻辑表达更清晰，简单明了地能看出程序的执行流程，尤其是在看 if 分支代码和循环代码的时候，非常直观，使用空格键可以切换反汇编代码文本视图。

在菜单栏中设置 option -> general -> line prefixes (graph) 可以给视图添加地址偏移，需要取地址时就非常方便，不再需要按空格切换视图去找。


线性扫描（linear sweep）和递归下降（recursive descent）是两种最主要的反汇编算法。

本质上 IDA 是一种递归下降反汇编器，为了提高递归下降过程的效率，IDA 开发者需要付出巨大的努力。IDA 在区分数据与代码的同时，还设法确定这些数据的类型。虽然你在 IDA 中看到的是汇编语言形式的代码，但 IDA 的主要目标之一，在于呈现尽可能接近源代码的代码。此外，IDA 不仅使用数据类型信息，而且通过派生的变量和函数名称来尽其所能地注释生成的反汇编代码。这些注释将原始十六进制代码的数量减到最少，并显著增加了向用户提供的符号化信息的数量。

线性扫描算法的主要优点，在于它能够完全覆盖程序的所有代码段。线性扫描方法的一个主要缺点，是它没有考虑到代码中可能混有数据。进行反汇编时，可以维护一个指针来标注当前正在反汇编的指令的起始位置。在反汇编过程中，每一条指令的长度都被计算出来，并用来确定下一条将要反汇编的指令的位置。为此，对由长度固定的指令构成的指令集（如 MIPS）进行反汇编有时会更加容易，因为这时可轻松定位随后的指令。

GNU 的 GDB 调试器、微软的 WinDbg 调试器和 objdump 工具的反汇编引擎均采用线性扫描算法。

递归下降反汇编 Recursive Descent Disassembly 采用另外一种不同的方法来定位指令，算法强调控制流的概念，根据一条指令是否被另一条指令引用来决定是否对其进行反汇编，这在一定的层次上相当于模拟 CPU 的运行过程。


对二进制文件进行逆向工程时，最不应该做的事情是，浪费时间逆向库函数，那些只需阅读一本手册、一段源代码或搜索一下因特网就可以更轻易地了解其行为的库函数。

IDA 使用库快速识别和鉴定技术 FLIRT 自动为你不将这些库代码处理好，并且设置相应的函数符号。FLIRT 的核心是各种模式匹配算法，这些算法使 IDA 能够迅速确定：一个经过反汇编的函数是否与 IDA 已知的许多签名中的某一个相匹配。Shift_F5 可以快速打开 View -> Open subview -> Signatures，查看当前应用的库函数签名，这里可以了解程序使用了什么系统提供的库函数。

除了 IDA 提供现成的库签名，用户可以制作专用的签名，然后通过菜单加载 File -> Load File -> FLIRT Signature File。

IDA 提供了一套工具，从 Object or Library 文件中生成签名文件，供 IDA Pro v3.8 以上版本使用：

     FLAIR -- Fast Library Acquisition for Identification and Recognition
     ====================================================================

    FLAIR consists of the following executables:

    plb      parselib  processes OMF  libraries and creates PAT file
    pcf      parsecoff processes COFF libraries and creates PAT file
    pelf     parseelf  processes ELF  libraries and creates PAT file
    ppsx     parsepsx  processes PSX  libraries and creates PAT file (Sony Playstation)
    ptmobj   parsetobj processes Trimedia libraries .... .... ....
    sigmake  sigmake takes PAT files as input and creates SIG file
    zipsig   zipsig compresses and uncompresses SIG files
    dumpsig  dumpsig dumps contents of SIG file in a text form.


IDA 7.2 引入 Lumina 在线功能识别功能，当前服务非常简单：它包含有关知名函数的元数据（函数名称，原型，注释，操作数类型和其他信息）。任何用户都可以从 Lumina 发送或接收元数据。IDA 发送相关代码的哈希值，这足以使 Lumina 找到相应的元数据。如果找到元数据，则将其下载并应用于当前数据库。

简而言之，Lumina 是一种很好的 FLIRT（快速库识别和识别技术）机制的发展，并进行了一些改进：

- 功能嵌入在 IDA GUI 中，不再需要用于生成签名的外部工具；
- 最终用户可以选择要为其生成签名的功能；
- 不同于 FLIRT，所有签名和元数据都存储在单个数据库中，以避免每个签名文件的单独加载；
- 存储了其他元数据，而不仅仅是过去的函数名和注释。

IDA 7.6 增加了对 Google 的 Go 语言的支持，因其易用性、高性能、以及无需依赖项的自包含二进制文件特性而变得非常流行，Go 二进制文件与其他编译器生成的二进制文件完全不同，因此 IDA 需要进行一些变更来正确支持其特性。


符号文件配置，确认 .\cfg\pdb.cfg 存在，一般，只需修改 IDA 默认的配置文件 PDBSYM_SYMPATH 前面的注释即可。为了保险，请确保对应的路径（c:\symbols）是存在的。

```js
// PDB plugin

// PDB information provider
#define PDB_PROVIDER_MSDIA  1   // use MSDIA local/remote provider
#define PDB_PROVIDER_PDBIDA 2   // use PDBIDA provider
//PDB_PROVIDER = PDB_PROVIDER_PDBIDA

// The downloaded symbols are stored in the specified directory.
// Microsoft's public symbol store is used for downloading the symbols.
//
// If this option is omitted or empty  - use _NT_SYMBOL_PATH if set, otherwise use %TEMP%\ida directory
// If the value is not empty           - use it

//PDBSYM_DOWNLOAD_PATH    = "c:\\symbols";

// Full symbol path (in _NT_SYMBOL_PATH format)
// If set, PDBSYM_DOWNLOAD_PATH and _NT_SYMBOL_PATH are ignored
// BCN: uncomment line below to configure symbol path
//PDBSYM_SYMPATH = "cache*c:\symbols;SRV*c:\\symbols*http://symbols.mozilla.org/firefox;SRV*c:\\symbols*http://msdl.microsoft.com/download/symbols";

// remote server where win32_remote.exe is running
// used when loading PDB symbols on non-Windows platforms
// NB: it will be used only if there is not already an existing debugging session started
PDB_REMOTE_SERVER = "localhost";
PDB_REMOTE_PORT   = 23946
// password for the remote server
PDB_REMOTE_PASSWD = "";
```

说明：如果配置了 `_NT_SYMBOL_PATH` 环境变量就不用修改该文件，这真正做到了一次设置，到处适用。

配置好后，通过 File - Load file - PDB file... 来加载 pdb 符号文件。


## ⚡ Interactive Disassembler
- IDA Help: Cross reference attributes https://hex-rays.com/products/ida/support/idadoc/1305.shtml

IDA 是一个交互式反汇编工具，与常规的反汇编调试工具不同，IDA 允许调试人员深度能在一起反汇编的过程。

工作区主要窗口：

- Functions 函数表，当前程序的函数名列表；
- IDA View-A 是反汇编窗口，A 只是一个编号；
- HexView 十六进制格式数据显示窗口；
- Imports 导入表，程序中调用到的外面的函数；
- Structures 结构窗口；
- Enums 枚举窗口。

例如，使用以下快捷键将程序中包含的数据作为指令、字符串或数据进行解析：

  - convert to instruction : the hotkey is "C"
  - convert to string : the hotkey is "A" or Alt-A
  - convert to data : the hotkey is "D"
  - convert to undefined : the hotkey is "U"

这些操作对应 Edit 菜单下的数据类型转换功能，此菜单下的 Operand Type 还有更具体的类型操作，包括 Enum 各 Struct。

使用鼠标选中一片区域，可以使用快捷键"ALT+L"通过键盘上下箭头键选择一个区域，然后按快捷键 D 也可以将数据转换成数组形式。

使用 D 快捷键很容易的将数据和一些数据基础类型联系起来，默认会在 db(Byte)、dw(Word)、dd(Double Word) 之间进行循环切换。

可以定义循环切换包含的数据类型，使用菜单设置 Options -> Setup data types，快捷键 `Alt+D`，然后在右侧勾选需要的数据类型。

在转换数据类型时，会弹出对话框确认，可以使用菜单修改成不需要确认直接转换数据类型，Options -> General -> Misc -> Convert already
defined bytes，将 Ask to convert 修改为 Always to convert。

也可以使用快捷键 U 来取消对数据的定义。

数组参数设置：

- Array size 设置数组元素计数；
- Item on a line 即每行显示的元素个数；
- Element print width 设置元素显示宽度；
- Display indexes 显示数组元素索引编号；

设置数组后，数据的右侧的地址行号将以首个元素地址为参考，设置数组时会以第一个元素的类型作为数组元素的类型。

IDA 还可以定义更高级的抽象类型，结构体和枚举类型，枚举类型又包括位域，从 IDA 的角度看，位域只是一种特殊的枚举类型，只需要在定义枚举类型时选择 bitfield 选项。


数据类型确定后，就可以用特定的格式来显示，使用菜单 Edit -> Operands type 进行设置，以下是常用的快捷键操作：

- `R` Character
- `S` Segment
- `K` Stack variable
- `M` Enum member
- `H` Decimal
- `Q` Hexadecimal
- `B` Binary
- `_` Change sign

设置字符显示格式与设置字符串类型的差别表现在，字符串类型会分配一个变量名。

在主代码视图 IDA View 中按空格切换汇编代码视图、Graph 视图。

- `Alt_T` search for a substring (case-insensitive) `Ctrl_T` repeat last search 
- `Ctrl_E` 选择入口点
- `Ctrl_Alt_B` 断点列表

IDA 可以搜索 Unicode 字符串，Shift_F12 打开字符串窗口，在字符串列表窗口右键点击 Setup，对话框勾上 Unicode C-style (16 bits) 即可。

注意，Minimal string lenght 设置最小的字符串长度，比如设置为 5，那么长度小于 5 的字符串就显示不出来，这个可以根据不同的情况配置。如果配置的太小了，就会出现很多无意义的数据，可能并不是字符串。


支持强大符号跳转功能，与地址关联的符号可以进行命名，n 快捷键，类似的体验在使用 Sublime Text 编辑器中也有。

- `G` 跳转指定地址，例如 main+5
- X XREF 跳转
- `Ctrl_E` 跳转到入口点
- `Ctrl_L` 跳转到名称
- `Ctrl_P` 跳转到函数
- `Ctrl_S` 跳转到内存段
- `Ctrl_G` 跳转到段寄存器变更点
- `Ctrl_Q` 跳转到有问题的代码
- `ESC` 跳转到上一个位置
- `Ctrl_Enter` 跳转到下一个位置


IDA 反汇编以 call 指令和各种跳转指令为一个逻辑单元进行组织，这些单元相互交叉引用 XREF，这是 IDA 最基本的概念，在代码的注解也会给出参考信息。

例如，代码交叉引用 CODE XREF 和数据交叉引用 DATA XREF：

    .text:004B3FA0 loc_4B3FA0:  ; CODE XREF: sub_4B3F40+57↑j

    .text:004B4130 sub_4B4130    proc near  ; DATA XREF: .text:004B4384↓o

代码注解部分的 CODE XREF 表示该调用地址是 4B3F40，sub 前缀表示子过程，+57 表示这个偏移这个过程的 0x57 字节处，后缀的箭头和 j 表示在上方 near jump 指令跳转来过，类似的后缀参考手册 IDA Help: Cross reference attributes：

    Type
        The following types exist:
          o - offset, the address of the item is taken
          r - read access
          w - write access
          t - textual referenced (used for manually specified operands)
          i - informational (e.g. a derived class refers to its base class)
          J - far (intersegment) jump
          j - near (intrasegment) jump
          P - far (intersegment) call
          p - near (intrasegment) call
          ^ - ordinary flow
          s - xref from a structure
          m - xref from a structure member
          k - xref from a stack variable
    Address
        For 'xrefs to' dialogs: where the reference comes from (source)
        For 'xrefs from' dialogs: where the reference goes to (destination)
    Text
        Additional info about the cross reference

双击注解提供的交叉引用，或按回车键可以跳到相应的地址上。

在名称列表窗口，每个名称前面都有一个符号带有字母的图标字母含义如下：

- `F` 函数，包括未识别的库函数。 
- `L` 库函数。
- `i` 导入符号，和库函数的区别在于库函数没有反汇编代码
- `C` Named code 即不属于任何函数的离散的代码。
- `D` Data 通常表示全局变量。
- `A` String 所有 IDA 能识别的字符串，如 C 言语的 null-terminated ASCII 格式。

在反汇编代码中，可以根据需要将某些代码定义为函数，使用菜单 Edit -> Functions，或者使用快捷键：

- `P`    Create function
- `Alt_P`  Edit function   
- `E`      Set function end
- `Ctrl_K` Stack variables 
- `Alt_K`  Change stack pointer    
- `N`  Rename

IDA 会尽其所能跟踪函数内每一条指令上的栈指针的变化，如果 IDA 无法确定一条指令是否更改了栈指针，可以进行手动调整，指定指令修改了多少栈指针偏移。

当一个函数调用另一个使用 stdcall 调用约定的函数，就可能出现 IDA 无法准确判断栈指针的变化，这是最简单的一种情况。stdcall 调用约定要求函数参数按照从右到左的顺序入栈，被调用的函数在返回前清理传送参数的栈。如果被调用的函数位于 IDA 无法识别的共享库中，那么，IDA 也就无法确定：被调用的函数会将栈指针修改后返回。因此，IDA 会为函数的剩余部分提供一个错误的栈指针值。

要进行栈调整，首先将光标定位到需要调整的位置，执行菜单 Edit -> Func-tions -> Change Stack Pointer，热键为 `ALT+K`，然后指定栈指针更改的字节数。

对于任意函数，可以选中此函数，再使用 Edit -> Functions -> Edit Functions… 进行编辑。

如果是导入函数，双击转到 .rdata 目录，然后再使用编辑函数，栈调整对应 Purged bytes。

在 IDA Freeware 免费版本，不支持程序的 C 语言伪代码生成。对 32-bit 程序符号分析功能没有 IDA Pro 强大，可能只分析到 start 符号，这是进程初始化，还需要跟踪 call 指令找 main 入口。

一般在在 IDA 函数窗口搜索系统提供的结束进程 API `_exit` 然后双击跳转过去，再使用引用跳转 x 到引用位置，引用这个 API 的位置通常和进程初始化过程一样，是系统代码。再往上找一个 call 指令，根据 main 入口的特点，call 指令前有 3 个 push 指令对应有三个参数，当然 push 指令也可能由 mov esp 指令替代。

- `X` 跳转到交叉引用的操作数
- `Ctrl_X` 列表所有交叉引用
- `Ctrl_J` 跳转到被引用的数据
- `F5` 显示 C 伪代码，可以分析程序入口

如果菜单中有 View -> Open SubViews -> Pseudocode F5，说明你已经安装了 Hex Rays decompiler 插件，可以在查看汇编的时候，按 F5 生成 C 伪代码。

C 语言编译出来的程序并不一定就有 main 函数，列如内核引导程序，使用 QEMU 模拟器可以实验 uboot (Universal Boot Loader) 引导程序加载内核程序。

GCC 也提供了 -e 选项指定程序入口符号，这个入口会传递给 ld.exe 链接程序生成具体的可执行程序。

IDA 使用 F2 设置断点，在汇编代码和伪 C 语言代码间通过 Tab 切换，这样方便断点设置。


在 Hex View 窗口可以修改程序的指令或者数据，并进行保存，当作打补丁。

- 点击要修改的地方；
- F2 快捷键进入修改状态；
- F2 再按快捷键退出修改模式。

这些修改只对 IDA 数据库有效，将修改应用到程序文件，Edit -> Patch program -> Apply pathes to input file > OK，使用快捷键 Ctrl_Alt_P 打包补订记录窗口，查看是否有记录。

勾选 Restore original byte 则对补丁过的数据进行还原，但是 Patched bytes 记录还在。如果将数据手动改回原值则不会有补丁记录，并且打补丁时勾选还原也不起作用。

补丁菜单的汇编命令 Edit -> Patch program -> assemble 可以直接输入汇编指令替代现有代码，如果要修改数据，就需要先将数据转换为代码，快捷键 D/C 进行切换。

要改变程序执行流程：

- 修改跳转指令。
- 修改内存数据。
- IDA View 中使用命令 Jump to IP, Set IP, Run to cursor。

有了 IDA 的补丁功能，就可以不借用其他工具修改原始程序文件，如 WinHex、UltraEdit 或 Hex Workshop。

另外，Edit -> Other -> Manual instruction 只能编辑汇编指令，但不能应用到程序文件中。


## ⚡ Hello World
- PE Format https://docs.microsoft.com/en-us/windows/win32/debug/pe-format
- Intel® 64 and IA-32 Architectures Software Developer Manuals https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html
- Executable and Linkable Format (ELF) http://www.skyfree.org/linux/references/ELF_Format.pdf
- Mastering Malware Analysis https://2lib.org/book/5215463/a31b5c
- Malware Analysis And Detection Engineering: A Comprehensive Approach To Detect And Analyze Modern Malware https://2lib.org/book/5938549/863d4f
- Learning Malware Analysis: Explore the concepts, tools, and techniques to analyze and investigate Windows malware https://2lib.org/book/3598265/fca2bd
- Practical Malware Analysis: The Hands-On Guide to Dissecting Malicious Software https://2lib.org/book/1274723/254e0e
- Hacking: the art of exploitation, 2nd edition https://2lib.org/book/11038148/650a59
- Hacking The Art of Exploitation 2nd Jon Erickson Official LiveCD ISO https://resources.oreilly.com/examples/9781593271442
- The MASM32 SDK http://www.masm32.com

请安装免费的 Visual Studio 社区版，以编译以下测试用的汇编程序，或者安装 MASM32 SDK 只编译 MASM 宏汇编语言。 

代码来自 Disassembling Code—IDA Pro and SoftICE：

```sh
; Listing 1.43: An elementary Assembly program 
; The program in Listing 1.43 is a trivial one. 
; Its only goal is to display the MessageBox dialog. 
; To obtain an executable module, issue the following two commands:
;
;      vcvars32.bat
;      ML /c /coff  prog.asm
;      LINK /subsystem:console prog.obj 

.586P
.MODEL FLAT, STDCALL
includelib user32.lib ; f:\masm32\lib\user32.lib
EXTERN        MessageBoxA@16:NEAR
; Data segment
_DATA SEGMENT
TEXT1 DB 'No problem!', 0
TEXT2 DB 'Message', 0
_DATA ENDS
; Code segment
_TEXT SEGMENT
START:
        PUSH OFFSET 0
        PUSH OFFSET TEXT2
        PUSH OFFSET TEXT1
        PUSH 0
        CALL MessageBoxA@16
        RETN
_TEXT ENDS
END START
```

程序从代码构成来看很简单，只是调用 MessageBox 这个系统 API 弹出一个消息对话框，EXTERN 声明这是一个外部函数。另外使用了两个字符串资源，TEXT1 作为消息内容，TEXT2 作为对话框标题。

但是，从程序结构和操作系统的关系来分析，这是相当复杂的程序结构。

内存管理库函数可以说是操作系统最重要的一部分，像 汇编语言或 C/C++ 语言没有引入动态内存回收技术，这也是它们性能极好的一个原因。同时这给使用者带来了额外的内存管理责任，开发者必需自己实现内存管理。

对系统中运行的程序来说，操作系统运行程序时会下放内存资源，这部分内存资源称为 User Space。

对于程序来说，主要的内存环境可以分为两个部分：

- 系统内存空间，操作系统运行的环境中所掌控的内存资源，系统运行所使用的部分称为 Kernel space；
- 程序使用空间，User Space；

从 CPU 的结构上看，操作系统的内存管理就是一个复杂的机构，通过具体的内存模型，应用程序使用虚拟寻址空间，通过分页机制映射到物理内存上，最后才能读取具体的数据。并且，CPU 的保护机制，使得不同的内存页具有不同的权限配置。例如，对于代码段，分配只读、可执行权限，对于数据段分配可读写权限，并且，应用程序之间的虚拟寻址相互隔离，不可互相自由访问，这使得整个运行环境非常安全可靠。

从 x86 CPU 架构发展历史来看，内存模型有以下三种：

- Real-Address Mode Model
- Segmented Model
- Flat Model

从早期的实地址模式，应用程序可以直接访问所有内存空间，并且相互可以读写对方的内存，真的是糟糕的一个运行环境。早期也结合了分段内存管理模型，但发展成熟后有了展平内存模型，应用程序使用的不再是实地址，而是虚拟寻址空间，其地址也叫做 Logical Address，经过 CPU 的分段描述符表 GDT/LDT 等映射转换为线性地址 Linear Address，最后经过分页机制影射转换为 Physical Address，这才是是现代流行的内存管理流程。

具体参考 Intel's Architecture software developer's manual 手册的内容：

- Volume 3 - Chapter 2 System Architecture Overview
- Volume 3 - Chapter 3 Protected-Mode Memory Management
- Volume 3 - Chapter 4 Paging
- Volume 3 - Chapter 20 8086 Emulation 专门描述 Real-address mode 和 Virtual-8086 mode。

Intel 架构的开发者手册现在已经出版到 4 卷：

- Volume 1: 描述 Intel® 64 和 IA-32 架构 CPU 的编程环境，包括 x86 体系的发展历史。
- Volume 2: 包含完整的指令集，描述指令格式，提供指令参考，分为 2A、2B、2C、2D 分卷。
- Volume 3: 包含完整的系统编译指导，描述 Intel® 64 和 IA-32 架构的操作系统环境支持，包括内存管理、保护、任务管理、中断异常处理、多核心支持、热量和电源管理、调试、性能监视、系统管理模式、VMX 虚拟机扩展指令、Intel® Virtualization Technology (Intel® VT)、Intel® Software Guard Extensions (Intel® SGX)，同样分为 3A、3B、3C、3D 分卷。
- Volume 4: 描述支持 IA-32 和 Intel® 64 处理器架构的特定型号的寄存器。

官网上提供合集，或分卷文件 PDF，或下载单独分卷共 10 个文件，因为文档是不断修正的，有些内容则是后来补充的，所以部分 Volume 2 的分卷有可能比 Volume 3 的要新。建议使用 Four-Volume Set 即四个分卷四个文件，按主题组织方便查阅。如果是全集一个文件，内容太多不好定位，60MB 超大文件也不好处理。

早期的参考资料是 Intel 80386 Programmer's Reference Manual 1986。

从系统层面来看，可执行程序文件实际就是静态的程序，要执行程序，系统需要创建进程执行程序的代码。所以，程序文件就是进程映像 Process Image。进程映像内记录了各种 segments 来存储相应的内容。

编译器链接程序生成的可执行程时也相应对内存的用途进行更细致的划分，请不要混淆操作系统基于 CPU 的分段内存管理机制。

- .text  这是整个用户空间的最低地址部分，存放机器指令的位置。
- .data 这里存放的是初始化过的全局变量。
- .bss 这里存放的是未初始化的全局变量。

需要重点关注的有两个内存区：

- Heap 堆内存可以在程序运行时自行申请分配。
- Stack 调用栈区域，自高地址向低地址增长。

程序执行栈空间 Stack 是一个 FILO - First In Last Out 数据结构，程序执行前就在系统的安排下预先设定好，CPU 内有 ESP 寄存器指向栈顶，有其它配置指令管理，如 PUSH/POP。堆内存空间 Heap 由程序运行过程中通过 malloc 等函数动态申请分配。

一般来说，系统应该提供设置，来指定程序运行时环境配置，如 Linux 就可以通过 ulimit -s 设定程序运行时的 Stack 大小。

堆内存的实现有不同的形式，有一种做法是，把进程的内存管理交给操作系统内核去做，但实际上这样做的性能比较差，原因在于每次程序申请或者释放堆空间都需要进行系统调用。

比较好的做法就是：程序向操作系统申请一块适当大小的堆空间，然后由程序自己管理这块空间，而具体来讲，管理着堆空间分配的往往是程序的运行库，即 malloc 这类函数背后的库实现。这种方式相当于向操作系统批发一块较大的内存，到程序这边零售，当内存用完再向系统要。

而微软系的开发工具基于 PE 可执行文件格式定义以下各种分段，详细参考 PE Format 文档，这里给些常用分段的说明：

- .text: Code 
- .data: Initialized data
- .bss: Uninitialized data
- .rdata: Const/read-only (and initialized) data
- .edata: Export descriptors
- .idata: Import descriptors
- .reloc: Relocation table 在模块不能按默认地址加载时执行代码绝对地址重定位使用
- .rsrc: Resources (icon, bitmap, dialog, ...)
- .tls: `__declspec(thread)` data (Fails with dynamically loaded DLLs -> hard to find bugs)

Linux 系统使用 ELF 格式也有自己的一套专用设置： 

    Figure 1-14: Special Sections

    |    Name   |     Type     |         Attributes        |
    |-----------|--------------|---------------------------|
    | .bss      | SHT_NOBITS   | SHF_ALLOC + SHF_WRITE     |
    | .comment  | SHT_PROGBITS | none                      |
    | .data     | SHT_PROGBITS | SHF_ALLOC + SHF_WRITE     |
    | .data1    | SHT_PROGBITS | SHF_ALLOC + SHF_WRITE     |
    | .debug    | SHT_PROGBITS | none                      |
    | .dynamic  | SHT_DYNAMIC  | see below                 |
    | .dynstr   | SHT_STRTAB   | SHF_ALLOC                 |
    | .dynsym   | SHT_DYNSYM   | SHF_ALLOC                 |
    | .fini     | SHT_PROGBITS | SHF_ALLOC + SHF_EXECINSTR |
    | .got      | SHT_PROGBITS | see below                 |
    | .hash     | SHT_HASH     | SHF_ALLOC                 |
    | .init     | SHT_PROGBITS | SHF_ALLOC + SHF_EXECINSTR |
    | .interp   | SHT_PROGBITS | see below                 |
    | .line     | SHT_PROGBITS | none                      |
    | .note     | SHT_NOTE     | none                      |
    | .plt      | SHT_PROGBITS | see below                 |
    | .relname  | SHT_REL      | see below                 |
    | .relaname | SHT_RELA     | see below                 |
    | .rodata   | SHT_PROGBITS | SHF_ALLOC                 |
    | .rodata1  | SHT_PROGBITS | SHF_ALLOC                 |
    | .shstrtab | SHT_STRTAB   | none                      |
    | .strtab   | SHT_STRTAB   | see below                 |
    | .symtab   | SHT_SYMTAB   | see below                 |
    | .text     | SHT_PROGBITS | SHF_ALLOC + SHF_EXECINSTR |

- `.bss` 未初始化数据区，通常在程序运行时由系统填充 0 值，所以此区并不占存储空间，即 SHT_NOBITS 类型。
- `.comment` 包含版本控制信息。
- `.data` & `.data1` 已初始数据区，直接载入内存空间构造程序映像。
- `.debug` 包含调试符号。
- `.dynamic` 动态链接信息区，包含 SHF_ALLOC 属性位，根据 CPU 决定是不设置 SHF_WRITE 属性位。
- `.dynstr` 需要动态连接的字符串区，通常这些字符串关联符号表条目的名称。
- `.dynsym` 动态链接符号表，记录 imports/exports 符号，参考规范的 Symbol Table 内容。
- `.fini` 有关进程终止代码的可执行指令，程序正常退出时，系统安排执行本节中的代码。
- `.got` 参考规范内容 Dynamic Linking - Global Offset Table。
- `.hash` 符号 Hash 表，参考 Dynamic Linking - Hash Table。
- `.init` 程序初始代码区，存放进程初始进执行的指令，系统在调用 main 之前执行。
- `.interp`程序执行器路径，接管系统程序加载工作，设置 SHF_ALLOC，参考 Dynamic Linking - Program Interpreter。
- `.line` 为调试符号保留源代码行号信息。
- `.note` 笔记信息区，程序供应商可以用来记录专用信息，SHT_NOTE 或 PT_NOTE 都可以标记这种分段。
- `.plt` 程序链接表，参考规范 Procedure Linkage Table。
- `.relname` & `.relaname` 重定位信息区，如果文件具有包含重定位的可加载段，则设置 SHF_ALLOC 属性位。
- `.rodata` & `.rodata1` Read-only 数据区。
- `.shstrtab` 分段名称记录区。
- `.strtab` 字符串分段，通常关联符号表条目的名称，如果文件包含可加载分段并包含字符串分段，则分段设置 SHF_ALLOC 属性位。
- `.symtab` Symbol Table，如果文件包含可加载分段，且包含此符号表，分段就设置 SHF_ALLOC 属性位。
- `.text` 可执行代码区，装载位于内存低地址区域。

按照惯例，`.relname` 或 `.relaname` 重定位应用到什么分段，由其提供 `name`。所以，应用于 `.text` 的符号重定位就对应 `.rel.text` or `.rela.text` 分段。

就像全局偏移表 `.got` 将位置无关的地址重定向到绝对地址一样，过程链接表 `.plt` 将位置无关函数调用重定向到绝对位置。链接编辑器无法从一个可执行或共享对象，执行传输到另一个对象上，如函数调用。

要查看程序文件或目标文件中的分段信息，GNU 提供了一套非常有用的二进制文件工具，统称为 Binutils。

其中 objdump 就是专用的 ELF 信息查询工具，也可以使用 Linux 的 readelf 专用命令，还有 ldd 命令可以查询程序依赖的动态链接库：

    ldd  jos\user\hello
    readelf -S jos\user\hello
    objdump -h jos\user\hello
    objdump -h jos\user\hello.obj

微软也有相应的开发工具 Dumper：

```sh
# dumpbin /imports prog.exe

  Section contains the following imports:

    USER32.dll
                402000 Import Address Table
                402100 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                  27F MessageBoxA

  Summary

        1000 .data
        1000 .rdata
        1000 .reloc
        1000 .text
```

可以看到，程序文件中只有最基本的四个段定义，并没有符号导入段，但是还是有导入的 API 信息。微软的 PE 程序格式中定义了 Import Address Table(IAT) 来导入动态链接库中的导出 API。IAT 记录了每个导入函数的名字和所在的 DLL 文件名称，系统在加载 PE 时会加载这些 DLL 到用户程序地址空间内，然后将函数的加载地址覆盖回内存中的 IAT 表中。

使用 IDA 加载程序后，首先会分析程序的结构，并生成反汇编代码和相关信息。

先来看反汇编视图的顶顶部，这里包含的是程序的基本信息：

```sh
.text:00401000 ;
.text:00401000 ; +-------------------------------------------------------------------------+
.text:00401000 ; |      This file was generated by The Interactive Disassembler (IDA)      |
.text:00401000 ; |           Copyright (c) 2020 Hex-Rays, <support@hex-rays.com>           |
.text:00401000 ; |                      License info: 50-5947-5F4E-42                      |
.text:00401000 ; |                      P.Y.G Team, Personal license                       |
.text:00401000 ; +-------------------------------------------------------------------------+
.text:00401000 ;
.text:00401000 ; Input SHA256 : BCED7BEBA38EE255383EA02CEE29C5BC2E841A55DD70F011C3229DCB0E9C9202
.text:00401000 ; Input MD5    : 37227AD67F1AC24CD2C45FFCE99A8B65
.text:00401000 ; Input CRC32  : AA8A0594
.text:00401000
.text:00401000 ; File Name   : /ctf/ida/prog.exe
.text:00401000 ; Format      : Portable executable for 80386 (PE)
.text:00401000 ; Imagebase   : 400000
.text:00401000 ; Timestamp   : 60A109F9 (Sun May 16 12:03:05 2021)
.text:00401000 ; Section 1. (virtual address 00001000)
.text:00401000 ; Virtual size                  : 0000001A (     26.)
.text:00401000 ; Section size in file          : 00000200 (    512.)
.text:00401000 ; Offset to raw data for section: 00000400
.text:00401000 ; Flags 60000020: Text Executable Readable
.text:00401000 ; Alignment     : default
.text:00401000
.text:00401000                 .686p
.text:00401000                 .mmx
.text:00401000                 .model flat
.text:00401000
.text:00401000 ; ===========================================================================
.text:00401000
.text:00401000 ; Segment type: Pure code
.text:00401000 ; Segment permissions: Read/Execute
.text:00401000 _text           segment para public 'CODE' use32
.text:00401000                 assume cs:_text
.text:00401000                 ;org 401000h
.text:00401000                 assume es:nothing, ss:nothing, ds:_data, fs:nothing, gs:nothing
.text:00401000
```

可以看到地址就是程序的入口地址，其实这些信息并不占用内存，显示地址只是方便展示关联性，其中较重要的有 Imagebase 表示程序文件加载的内存首地址。

然后就是 CPU 架构和指令集，还有内存模型，这些信息是程序运行的一个基本条件状态，是和 CPU 硬件实现相关的：

    .686p
    .mmx
    .model flat

内存分段说明信息显示，.text 分段是纯代码，具有可读取可执行权限，这和常识是一致的。

然后是主程序代码部分，代码和前面的汇编是一致的：

```sh
.text:00401000 ; =============== S U B R O U T I N E =======================================
.text:00401000
.text:00401000
.text:00401000                 public start
.text:00401000 start           proc near
.text:00401000                 push    0               ; uType
.text:00401002                 push    offset Caption  ; "Message"
.text:00401007                 push    offset Text     ; "No problem!"
.text:0040100C                 push    0               ; hWnd
.text:0040100E                 call    MessageBoxA
.text:00401013                 retn
.text:00401013 start           endp
.text:00401013
.text:00401014 ; [00000006 BYTES: COLLAPSED FUNCTION MessageBoxA. PRESS CTRL-NUMPAD+ TO EXPAND]
```

其中，导入的 API 只显示了折叠后的签名信息，使用数字键盘的 + 号或者双击鼠标就可以看到以下处于展开的信息，包括 API 的参数信息：

```sh
.text:00401014 ; =============== S U B R O U T I N E =======================================
.text:00401014
.text:00401014 ; Attributes: thunk
.text:00401014
.text:00401014 ; int __stdcall MessageBoxA(HWND hWnd, LPCSTR lpText, LPCSTR lpCaption, UINT uType)
.text:00401014 MessageBoxA     proc near               ; CODE XREF: start+E↑p
.text:00401014
.text:00401014 hWnd            = dword ptr  4
.text:00401014 lpText          = dword ptr  8
.text:00401014 lpCaption       = dword ptr  0Ch
.text:00401014 uType           = dword ptr  10h
.text:00401014
.text:00401014                 jmp     ds:__imp_MessageBoxA
.text:00401014 MessageBoxA     endp
.text:00401014
.text:00401014 ; ---------------------------------------------------------------------------
```

通过 dumpbin 查询到的信息，402000 Import Address Table，可以在 IDA 处理生成的 .idata 段找到相应的地址检查导入符号段：

```sh
.idata:00402000 ; Section 2. (virtual address 00002000)
.idata:00402000 ; Virtual size                  : 00000122 (    290.)
.idata:00402000 ; Section size in file          : 00000200 (    512.)
.idata:00402000 ; Offset to raw data for section: 00000600
.idata:00402000 ; Flags 40000040: Data Readable
.idata:00402000 ; Alignment     : default
.idata:00402000 ;
.idata:00402000 ; Imports from USER32.dll
.idata:00402000 ;
.idata:00402000 ; ===========================================================================
.idata:00402000
.idata:00402000 ; Segment type: Externs
.idata:00402000 ; _idata
.idata:00402000 ; int __stdcall MessageBoxA(HWND hWnd, LPCSTR lpText, LPCSTR lpCaption, UINT uType)
.idata:00402000                 extrn __imp_MessageBoxA:dword
.idata:00402000                                         ; DATA XREF: MessageBoxA↑r
.idata:00402000                                         ; .rdata:004020E8↓o
.idata:00402004
.idata:00402004
```

最后，来看看数据段，相比 .text 代码段，数据段在内存中的地址更高了，作为最后一段，结束标记 `end start` 和前面的 `public start` 相呼应。

可以看到 IDA 展示出来的提示信息，也就是可执行文件中定义的，数据段只的读写权限而没有执行权，当然可以通过技术手段让数据区也可以存储代码，将设置执行权限：

```sh
.data:00403000 ; Section 3. (virtual address 00003000)
.data:00403000 ; Virtual size                  : 00000014 (     20.)
.data:00403000 ; Section size in file          : 00000200 (    512.)
.data:00403000 ; Offset to raw data for section: 00000800
.data:00403000 ; Flags C0000040: Data Readable Writable
.data:00403000 ; Alignment     : default
.data:00403000 ; ===========================================================================
.data:00403000
.data:00403000 ; Segment type: Pure data
.data:00403000 ; Segment permissions: Read/Write
.data:00403000 _data           segment para public 'DATA' use32
.data:00403000                 assume cs:_data
.data:00403000                 ;org 403000h
.data:00403000 ; CHAR Text[]
.data:00403000 Text            db 'No problem!',0      ; DATA XREF: start+7↑o
.data:0040300C ; CHAR Caption[]
.data:0040300C Caption         db 'Message',0          ; DATA XREF: start+2↑o
.data:00403014                 align 1000h
.data:00403014 _data           ends
.data:00403014
.data:00403014
.data:00403014                 end start
```

IDA 的静态分析能力是很强大的，例如，以下代码稍作修改，通过 ESI 寄存器的一个地址来调用一个子过程：

```sh
; Code segment
_TEXT SEGMENT
START:
       PUSH OFFSET 0
       PUSH OFFSET TEXT2
       PUSH OFFSET TEXT1
       PUSH 0
       CALL MessageBoxA@16
       MOV ESI, 3
       ADD ESI, OFFSET L2
L2:
       CALL ESI
       RETN
L1:
       XOR EAX, EAX
       RETN
END START
_TEXT ENDS
```

从反向编译的代码可以看到，子过程的地址已经解析出来，虽然其地址经过行标、又经过 CALL 和 RETN 指令的 3 个字节偏移，再通过 ESI 寄存器调用：

```sh
.text:00401013                 mov     esi, 3
.text:00401018                 add     esi, offset loc_40101E
.text:0040101E
.text:0040101E loc_40101E:                             ; DATA XREF: start+18↑o
.text:0040101E                 call    esi ; sub_401021
.text:00401020                 retn
.text:00401020 start           endp
.text:00401020
.text:00401021
.text:00401021 ; =============== S U B R O U T I N E =======================================
.text:00401021
.text:00401021
.text:00401021 sub_401021      proc near               ; CODE XREF: start:loc_40101E↑p
.text:00401021                 xor     eax, eax
.text:00401023                 retn
.text:00401023 sub_401021      endp
```

EAX 通常在程序结束时用来存储一个状态码，返回给操作系统，相当于 C 语言中的 main 函数返回的数值，这里执行 XOR 对其进行清零表示正常退出。

以上代码只是一个小小技俩，如果再插入一些花指令在这中间，那么很多反汇编工具将解析不到正确的指令。

如果，再加深一点难度，将偏移量处理的指令放到前面，并使用另外一寄存器和 CALL 配合：

```sh
; Code segment
_TEXT SEGMENT
START:
       MOV  ESI, 3
       PUSH ESI
       PUSH OFFSET 0
       PUSH OFFSET TEXT2
       PUSH OFFSET TEXT1
       PUSH 0
       CALL MessageBoxA@16
       POP  EDI
       ADD  EDI, OFFSET L2
L2:
       CALL EDI
       RETN
L1:
       XOR EAX, EAX
       RETN
END START
_TEXT ENDS
```

然后，使用 IDA 加载程序，正如所料，反汇编程序无法识别通过另一个寄存器 EDI 调用的子过程。

但是，IDA 作为一个交互反汇编工具，这时候就体现用户的参与的重要性了，只需要两步就可以修正未被识别的子过程：

- 将光标定在 XOR 指令所在行，然后中按下快捷键 P 将代码定义为一个子过程的起点，定义结束点使用 E；
- 然后，将光标定在 CALL EDI 指令处，并使用 `;` 快捷键输入标注内容 `DATA XREF: sub_401023`，正确来讲，是 `CODE XREF`，确认后 IDA 就知道它们的关系了；

```sh
.text:00401000 ; =============== S U B R O U T I N E =======================================
.text:00401000
.text:00401000
.text:00401000                 public start
.text:00401000 start           proc near
.text:00401000                 mov     esi, 3
.text:00401005                 push    esi
.text:00401006                 push    0               ; uType
.text:00401008                 push    offset Caption  ; "Message"
.text:0040100D                 push    offset Text     ; "No problem!"
.text:00401012                 push    0               ; hWnd
.text:00401014                 call    MessageBoxA
.text:00401019                 pop     edi
.text:0040101A                 add     edi, offset loc_401020 ; DATA XREF: sub_401023
.text:00401020
.text:00401020 loc_401020:                             ; DATA XREF: start+1A↑o
.text:00401020                 call    edi             ; DATA XREF: sub_401023
.text:00401022                 retn
.text:00401022 start           endp
.text:00401022
.text:00401023
.text:00401023 ; =============== S U B R O U T I N E =======================================
.text:00401023
.text:00401023
.text:00401023 sub_401023      proc near
.text:00401023                 xor     eax, eax
.text:00401025                 retn
.text:00401025 sub_401023      endp
```

## ⚡ Array & Struct

理解二进制程序的行为，必须识别程序调用的库函数，IDA 如何向用户传递数据信息，数据结构如何存储在内存中，以及
如何访问这些数据结构中的数据。

IDA 知道某函数的原型，那么如果一个变量作为函数的参数，在分析阶段，IDA 会尽其所能推断出该变量的数据类型。如有可能，IDA 会对该
变量使用一个从函数原型中提取出的正式名称，而不是为其生成默认的哑名。

汇编指令中使用的数据通常是高级语言中的数据结构，所以如何将汇编指令与高级语言中的数据类型对应起来是非常基础而重要的一个环节。

如果在程序的全局数据区内给一个数组分配内存，编译时将会分配在 .data 或 .bss 节区，并为其指定数组的基址。由于基址固定，编译器可以计算出使用固定索引访问的任何数组元素的固定地
址。

如果作为栈内变量给数组分配的内存，那么编译器在编译时无法获得绝对地址，因为数组元数的地址需要根据运行时栈指针 ESP 寄存器进行偏移访问，即使是使用常量索引的访问也必须在运行时进行某种计算。

在堆内存给数组分配空间，需要使用一个动态内存分配函数，如 C 语言中的 malloc 或 C++ 中的 new 关键字。从编译器的角度讲，它必须根据内存分配函数返回的地址值，生成对数组的所有引用。

```cpp
#include <iostream>
#include <cstdlib>
#include <cstring>
#include <cinttypes>

uint8_t ga[] = {'H', 'e', 'l', 'l', 'o', 0};

int main()
{
  char msg[] = "Hello, World!";
  uint32_t len = strlen(msg);
  char *mm = (char *) malloc(len);
  mm = (char *)"World!";
  printf("%s, %s\n", ga, mm);
}
```

以上测试程序编译后，使用 IDA 逆向得到以下汇编指令：

```sh
.text:00401667                 mov     dword ptr [esp+12h], 6C6C6548h
.text:0040166F                 mov     dword ptr [esp+16h], 57202C6Fh
.text:00401677                 mov     dword ptr [esp+1Ah], 646C726Fh
.text:0040167F                 mov     word ptr [esp+1Eh], 21h ; '!'
.text:00401686                 lea     eax, [esp+30h+Str]
.text:0040168A                 mov     [esp], eax      ; Str
.text:0040168D                 call    _strlen
.text:00401692                 mov     [esp+2Ch], eax
.text:00401696                 mov     eax, [esp+2Ch]
.text:0040169A                 mov     [esp], eax      ; Size
.text:0040169D                 call    _malloc
.text:004016A2                 mov     [esp+28h], eax
.text:004016A6                 mov     dword ptr [esp+28h], offset aWorld ; "World!"
.text:004016AE                 mov     eax, [esp+28h]
.text:004016B2                 mov     [esp+8], eax
.text:004016B6                 mov     dword ptr [esp+4], offset _ga ; "Hello"
.text:004016BE                 mov     dword ptr [esp], offset aSS ; "%s, %s\n"
.text:004016C5                 call    __ZL6printfPKcz ; printf(char const*,...)
```

可以看到，全局数组直接使用一个地址符号 ga 引用，因为在编译其已经完成初始化，数据直接从 .data 或 .bss 段区装入内存，而局部的 msg 则是在栈内存 [esp+12h] 偏移处，并且通过 mov 指令进行初始化。

而使用 malloc 分配的堆内存则在 eax 寄存器返回一个分配好的地址，并将这个地址存储到栈内存 [esp+28h]，然后再往这个地址写入数据，这里写入的是 “World!”。

和全局分配的数组一样，全局分配的结构体也会在编译期确定地址，且和初始化数据一并写入 .data 或 .bss 段区。编译器能够在编译时计算出结构体中每个成员的地址，而不必在运行时进行任何计算。

如果在栈内存分配一个结构体，和栈内的数组一样，仅仅根据栈布局，很难识别出栈分配的结构体。

```cpp
#include <iostream>
#include <cstdlib>
#include <cstring>
#include <cinttypes>

typedef struct {
  char *type;
  int len;
  uint8_t value;
} Sd;

Sd a = {(char *)"Demo", 4, 127};

int main()
{
  Sd b;
  b.type = (char *)"Stack";
  b.len = 5;
  b.value = a.value;
  Sd *c = (Sd *) malloc(sizeof(Sd));
  c->type = (char *)"malloc";
  c->len  = strlen(c->type);
  c->value = b.value;
}
```

IDA 逆向以上测试程序可以得到以下代码，全局分配的结构体和一般数据没有什么差别，而且访问是通过地址符号直接读写数据。

而栈内分配的结构体，则通过栈指针寄存器加偏移地址进行读写，从汇编指令上根本不能识别源代码中使用的高级语言的抽象数据类型。

```sh
.text:0040163E                 mov     dword ptr [esp+10h], offset aStack ; "Stack"
.text:00401646                 mov     dword ptr [esp+14h], 5
.text:0040164E                 movzx   eax, byte_403010
.text:00401655                 mov     [esp+18h], al
.text:00401659                 mov     dword ptr [esp], 0Ch ; Size
.text:00401660                 call    _malloc
.text:00401665                 mov     [esp+1Ch], eax
.text:00401669                 mov     eax, [esp+1Ch]
.text:0040166D                 mov     dword ptr [eax], offset aMalloc ; "malloc"
.text:00401673                 mov     eax, [esp+1Ch]
.text:00401677                 mov     eax, [eax]
.text:00401679                 mov     [esp], eax      ; Str
.text:0040167C                 call    _strlen
.text:00401681                 mov     edx, eax
.text:00401683                 mov     eax, [esp+1Ch]
.text:00401687                 mov     [eax+4], edx         ; c->len = strlen(c->type);
.text:0040168A                 movzx   edx, byte ptr [esp+18h]
.text:0040168F                 mov     eax, [esp+1Ch]       ; c-value = b.value;
.text:00401693                 mov     [eax+8], dl
```

如果是堆分配的结构体，则可以从传入 malloc 的参数反推结构体的大小及其字段的布局。从这个例子中传入的 0CH 表示结构体占用 12 个字节：

- [esp+1Ch] 为结构体的首地址，写入了字符串内容，是个指针；
- [eax+4] 结构体的第二个字段，写入了字符串的长度；
- [eax+8] 结构体的第三个字段，写入了 byte ptr [esp+18h] 指针指向的一个 8-bit 数值；

可以看到，因为内存对齐，最后字段只使用了其中的一个字节，但还是占用 4 个字节的空间。

对于全局分配的结构体，编译器能够计算出一个固定的起始地址。对于栈分配的结构体，编译器能够计算出结构体起始位置与相关栈帧的栈指针之间的固定关系。

如果一个结构体在程序堆中分配，那么，在访问其中的字段时，编译器需要生成代码来读写结构体的字段，并使用相应的偏移量。

此外，可以创建结构体数组，结构体中的结构体，以及以数组为成员的结构体。在处理这些嵌套结构时，前面有关数组和结构体的讨论同样适用。

IDA 提供了结构体和枚举类型工具来改善操纵结构体的代码的可读性。只要发现一个程序正操纵某种数据结构，就可以考虑将结构体的字段名称合并到反汇编代码清单中，或者保持原有分散在代码清单中的数字偏移量。

使用 Structures 窗口来创建新的结构体，除非结构体已经列出，否则就无法将结构体包含到反汇编代码清单中。在 Structures 窗口中列出的结构体表示 IDA 能够识别、并确定已被一个程序使用的结构体。

可以选择 .data 中的结构体，并通过右键菜单 create struct from selection 来创建新的结构体，也可以选择好数据起点，通过 Edit -> Struct var... 快捷键 `Alt+Q` 将数据定义为现有的结构体类型。

定义结构体时，可以使用 N 来修改字段名称，使用 Edit -> Field type 来修改字段的数据类型，使用 D 来定义字节、双字节、四字节、八字节的数据类型，如果是字符串就使用 A 定义。对于没有提供快捷键的类型定义，使用 Y 直接输入类型定义，如 `char *`。

如果要删除字段，或增加字段使用以下菜单：

- Expand struct type... `Ctrl+E`
- Shrink struct type... `Ctrl+S`

增加字段定义还可以在 ends 标记上操作，按相应的数据类型即可。如果因为内存对齐导致结构体多出一些字节，就可以使用 Shrink 将其移除。

可以在本地类型中定义结构体：

- 首先使用快捷键 Shift+F1 打开本地类型窗口 View -> Open Subviews -> Local Types。
- 按下 insert 快捷键，在弹出窗口的输入 C 语言语法定义的结构体。
- 然后，在列表中双击上面定义的结构体，并选择导入到当前数据库即可以使用。

更快捷的方法是，直接解析 C 语言头文件，File -> Load File -> Parse C Header File。完成头文件的类型解析，IDA 会通知 Compilation successful。

对于栈内存分配的结构体，假设 ESP 寄存器被初始化为指向一个结构体的指针，在整个函数中，ESP 寄存器都代表这个结构体。在静态分析过程中，ESP 并没有一个具体值，但是可以使用一个结构体偏移值来指导 IDA 将寄存器与结构体关联起来。将光标定位到需要指定偏移的寄存器寻址，如前面的 [eax+4]，然后点击菜单 Edit -> Operands type -> Offset -> Offset (struct) 命令，快捷键 T，然后选择相应的结构体字段及字段，再按一次快捷键 T 还原。

经过结构体偏移处理后，前面的代码将与结构体的字段关联起来，如下：

```sh
.text:0040167C                 call    _strlen
.text:00401681                 mov     edx, eax
.text:00401683                 mov     eax, [esp+(Sd.type+1Ch)]
.text:00401687                 mov     [eax+Sd.len], edx
.text:0040168A                 movzx   edx, byte ptr [esp+(Sd.len+14h)]
.text:0040168F                 mov     eax, [esp+(Sd.type+1Ch)]
.text:00401693                 mov     [eax+Sd.value], dl
```

IDA 已经处理系统 SDK 提供的 API 函数和有关的数据结构，在创建程序逆向数据库时会尝试确定与二进制文件有关的编译器和平台，并加载适当的结构体模板。当 IDA 在反汇编代码清单中操纵结构体时，它会在 Structures 窗口中添加相应的结构体定义，这是已知结构体的子集。需要使用 IDA 处理好 这些已知结构体，即标准结构体，可以在添加一个新结构体时，在创建结构对话框中选择 Add standard structure。

列如，对一个 PE 二进制文件进行解析时，头部可以使用 IMAGE_DOS_HEADER 结构体解析相应的 MS-DOS Stub 程序结构。另外，IMAGE_DOS_HEADER 中的数据指向一个 IMAGE_NE_HEADER 结构体，它详细说明了 PE 二进制文件的内存布局，可以使用 Windows 提供的 SDK 头文件定义的结构体进行解析。

甚至可以用 IDA 来解析 Bitmap 这样图像文件的信息头，BMP 文件的头部对应 BITMAPFILEHEADER 结构体，然后紧跟 BITMAPCOREHEADER 结构。

使用 IDA Freeware 免费版本需要在加载程序文件后，再通过菜单 File -> Load file -> Addition binary file 来加载二进制文件，然后定义相应的结构体进行数据解析。


## ⚡ C++ Object Model
- Inside the C++ Object Model Stanley B. Lippman https://2lib.org/book/769263/c938f7

C++ 一个重要的抽象就是 Abstract data type (ADT)，将各种数据封装到类内部，并向外部暴露公开接口。

C++ 基于多继承和虚拟继承，multiple or virtual inheritance，要在内存中实现这些复杂的数据结构，这就是 C++ 的对象内存模型。

在 Stanley B. Lippman 编写的 Inside the C++ Object Model 这本只有不到 200 页的小册子中有较详细的描述。

这里只对其中一个非常重要的数据结构概念 Virtual Table，作为重点去理解 C++ 类型在内存的组织。

在 C++ 类形中组织的各种函数、成员，从根本上和 C 语言的函数、数据是没有任何差别的。

为了实现抽象的对象封装，Stroustrup 在最初的 C++ 对象模型设计如下：

- static 数据成员在实例对象外，对所有类实例有效；
- nonstatic 数据成员在实例对象内部，只由类实例本身管理；
- static、nonstatic 成员函数也放在类对象之外；
- virtual 虚函数，静态及非静态，则通过以下两个步骤支持：
    - 用一个称为 vtbl - virtual table 的表格管理类形中产生的指向虚函数的指针；
    - 类实例对象添加了一个指针 vptr，指向相关的虚函数表。虚表指针的设定和重置由构造函数、析构函数和拷贝赋值运算符自动完成。

另外，虚函数表的 first slot 设置了一个指向 type_info 的指针，RTTI - Run Time Type Identification 运行时类型识别，由编译器在编译器生成的特殊类型信息，包括对象继承关系，对象本身的描述，RTTI 是为多态而生成的信息，所以只有具有虚函数的对象在会生成。

这个模型的主要优点在于它的空间和存取时间的效率；主要缺点则是，如果应用程序代码本身未曾改变，但所用到的类对象的非静态数据成员有所增加、移除或修改，那么这些应用程序的代码同样得重新编译。

C++ 支持单一继承和多重继承，甚至继承关系也可以指定为 virtual（也就是共享的意思）。在虚拟继承的情况下，基类不管在继承串链中被派生多少次，永远只会存在一个实体。

例如，以下继承关系及对应的内存模型结构：

    class Derived : public Base1, public Base2

    ===================
    | Base1::vptr     |
    ===================
    | Base1::members  |
    ===================
    | Base2::vptr     |
    ===================
    | Base1::members  |
    ===================
    | Drived::members |
    ===================

但 C++ 的继承远不只有这样的一种多继承关系，还可能有以下这些继承：

- 重复继承（和继承的多个父类中有相同的超类）；
- 多重虚拟继承（使用 virtual 方式继承，为了保证继承后父类的内存布局只会存在一份）

虚继承能够很好地防止多重继承时出现同一个类的多个拷贝：

假设，直接父类 Base1、Base2 都继承一个超类 Base，这会导致 Derived 实例中有两份 Base 类的虚函数表、及成员存在。

或者可以在 Derived 类中用 using 指定用那一个父类的版本：

    using Base1::abc;
    using Base2::abc;

但是通过虚继承，能更好地处理这种情形。


将以下规则内容定稿 makefile 文件，然后通过 make all 执行自动化编译：

```
all: model model_s

# use make model
model: model.o; g++ -o $@ $?
model.o: model.cpp; g++ -c -std=c++11 $?

model_s: model_s.o; g++ -s -O3 -o $@ $?
model_s.o: model.cpp; g++ -c -std=c++11 -o model_s.o $?
```

示范，类类的内存模型：

```
#include <iostream>

struct A
{
  char * name = (char*)"StructA";
  virtual void foo() { 
    std::cout << "A::foo() is called" << std::endl; 
  }
  void bar() { 
    std::cout << "A::bar() is called" << std::endl; 
  }
};
struct B : public A
{
  char * name = (char*)"StructB";
  void foo() { 
    std::cout << "B::foo() is called" << std::endl; 
  }
  void bar() { 
    std::cout << "B::bar() is called" << std::endl; 
  }
};

int main()
{
  A *a = new B();
  a->foo(); // B::foo() is called
  a->bar(); // A::bar() is called
  B *b = (B*)a;
  b->bar(); // B::bar() is call
}
```

程序在非静态成员字段定义时直接使用了的初始化语法，这需要 C++11 规范语法支持。

以上程序演示，C++ 虚函数的的多态，如果主函数中没 `b->bar()` 这个调用，编译程序时，要不就不会包含 B:bar() 这个函数的代码，因为没有任何使用它，从代码做优化的角度上它也是不应该出现在可执行程度中的。

结构体可将各种不同的数据类型项组合到一个复合数据类型中，和数组不同，结构体中的数据字段是通过名称访问，而不是像数
组那样通过索引访问。但是在汇编代码来看，结构体字段名称被编译器转换成了内存中的偏移量，所以访问结构体字段的方式看起来与使用索引访问数组元素的方式极其相似。

先来观察 IDA 生成的数据段内容，可以看到 `name` 字段的数据会在构造器中引用，这表示类型执行初始化时将数据填充到类实例的内存空间：

```sh
.rdata:00404065 aAFooIsCalled   db 'A::foo() is called',0 ; DATA XREF: A::foo(void)+9↑o
.rdata:00404078 aABarIsCalled   db 'A::bar() is called',0 ; DATA XREF: A::bar(void)+9↑o
.rdata:0040408B aBFooIsCalled   db 'B::foo() is called',0 ; DATA XREF: B::foo(void)+9↑o
.rdata:0040409E aBBarIsCalled   db 'B::bar() is called',0 ; DATA XREF: B::bar(void)+9↑o
.rdata:004040B1 aStructa        db 'StructA',0            ; DATA XREF: A::A(void)+16↑o
.rdata:004040B9 aStructb        db 'StructB',0            ; DATA XREF: B::B(void)+20↑o
```

可以从默认构造器的代码观察到：

```
.text:00402918 ; A *A::A(A *__hidden this)
.text:00402918                 public __ZN1AC2Ev
.text:00402918 __ZN1AC2Ev      proc near               ; CODE XREF: B::B(void)+E↓p
.text:00402918
.text:00402918 var_4           = dword ptr -4
.text:00402918 this            = dword ptr  8
.text:00402918
.text:00402918 ; __unwind {
.text:00402918                 push    ebp
.text:00402919                 mov     ebp, esp
.text:0040291B                 sub     esp, 4
.text:0040291E                 mov     [ebp+var_4], ecx
.text:00402921                 mov     edx, offset off_404324
.text:00402926                 mov     eax, [ebp+var_4]
.text:00402929                 mov     [eax], edx
.text:0040292B                 mov     eax, [ebp+var_4]
.text:0040292E                 mov     dword ptr [eax+4], offset aStructa ; "StructA"
.text:00402935                 nop
.text:00402936                 leave
.text:00402937                 retn
.text:00402937 ; } // starts at 402918
.text:00402937 __ZN1AC2Ev      endp

.text:004029A0 ; B *B::B(B *__hidden this)
.text:004029A0                 public __ZN1BC1Ev
.text:004029A0 __ZN1BC1Ev      proc near               ; CODE XREF: _main+33↑p
.text:004029A0
.text:004029A0 var_4           = dword ptr -4
.text:004029A0 this            = dword ptr  8
.text:004029A0
.text:004029A0 ; __unwind {
.text:004029A0                 push    ebp
.text:004029A1                 mov     ebp, esp
.text:004029A3                 sub     esp, 4
.text:004029A6                 mov     [ebp+var_4], ecx
.text:004029A9                 mov     eax, [ebp+var_4]
.text:004029AC                 mov     ecx, eax
.text:004029AE                 call    __ZN1AC2Ev      ; A::A(void)
.text:004029B3                 mov     edx, offset off_404330
.text:004029B8                 mov     eax, [ebp+var_4]
.text:004029BB                 mov     [eax], edx
.text:004029BD                 mov     eax, [ebp+var_4]
.text:004029C0                 mov     dword ptr [eax+8], offset aStructb ; "StructB"
.text:004029C7                 nop
.text:004029C8                 leave
.text:004029C9                 retn
.text:004029C9 ; } // starts at 4029A0
.text:004029C9 __ZN1BC1Ev      endp
```

在主函数中，执行库初始函数 `___main` 后，就会将实例的内存偏移 0Ch 地址传送到栈内存中：

```sh
.text:00401630                 push    ebp
.text:00401631                 mov     ebp, esp
.text:00401633                 push    ebx
.text:00401634                 and     esp, 0FFFFFFF0h
.text:00401637                 sub     esp, 20h
.text:0040163A                 call    ___main
.text:0040163F                 mov     dword ptr [esp], 0Ch ; this
.text:00401646                 call    __Znwj          ; operator new(uint)
.text:0040164B                 mov     ebx, eax
.text:0040164D                 mov     dword ptr [ebx], 0
.text:00401653                 mov     dword ptr [ebx+4], 0
.text:0040165A                 mov     dword ptr [ebx+8], 0
.text:00401661                 mov     ecx, ebx
.text:00401663                 call    __ZN1BC1Ev      ; B::B(void)
.text:00401668                 mov     [esp+1Ch], ebx  ; fetch base this
.text:0040166C                 mov     eax, [esp+1Ch]  ; fetch address of off_404330
.text:00401670                 mov     eax, [eax]      ; 
.text:00401672                 mov     eax, [eax]      ; virtual B::foo(void) address
.text:00401674                 mov     edx, [esp+1Ch]
.text:00401678                 mov     ecx, edx        ; pass this to member function
.text:0040167A                 call    eax             ; call B::foo(void)
.text:0040167C                 mov     eax, [esp+1Ch]
.text:00401680                 mov     ecx, eax
.text:00401682                 call    __ZN1A3barEv    ; A::bar(void)
.text:00401687                 mov     eax, [esp+1Ch]
.text:0040168B                 mov     [esp+18h], eax
.text:0040168F                 mov     eax, [esp+18h]
.text:00401693                 mov     ecx, eax
.text:00401695                 call    __ZN1B3barEv    ; B::bar(void)
.text:0040169A                 mov     eax, 0
.text:0040169F                 mov     ebx, [ebp+var_4]
.text:004016A2                 leave
.text:004016A3                 retn
```

从调用 B::foo() 函数的代码可以看到，经历了多次的内存寻址，从 ebx 获取实例基址到取得虚函数，中间经历了四条 mov 指令才将 foo() 函数地址取出并传送到 eax 寄存器。

结合类成员方法的代码，可以观察到，类实例指针 this 是通过 ecx 寄存器传递的。

以上代码可以总结到，虚函数的调用经过的查表过程，相对于其它成员函数直接使用符号调用要消耗更多多的 CPU 指令周期。

接下来是 C++ 对象内存模型中最重要的部分：

```
.rdata:00404300 ; public A
.rdata:00404300                 public __ZTI1A
.rdata:00404300 ; `typeinfo for'A
.rdata:00404300 __ZTI1A         dd offset __imp___ZTVN10__cxxabiv117__class_type_infoE+8
.rdata:00404300                                         ; DATA XREF: .rdata:00404310↓o
.rdata:00404300                                         ; .rdata:00404320↓o
.rdata:00404300                                         ; reference to RTTI's type class
.rdata:00404304                 dd offset __ZTS1A       ; reference to type's name
.rdata:00404308 ; public B :
.rdata:00404308 ;   public /* offset 0x0 */ A
.rdata:00404308                 public __ZTI1B
.rdata:00404308 ; `typeinfo for'B
.rdata:00404308 __ZTI1B         dd offset __imp___ZTVN10__cxxabiv120__si_class_type_infoE+8
.rdata:00404308                                         ; DATA XREF: .rdata:0040432C↓o
.rdata:00404308                                         ; reference to RTTI's type class
.rdata:0040430C                 dd offset __ZTS1B       ; reference to type's name
.rdata:00404310                 dd offset __ZTI1A       ; reference to parent's type name
.rdata:00404314                 public __ZTS1A
.rdata:00404314 ; `typeinfo name for'A
.rdata:00404314 __ZTS1A         db '1A',0               ; DATA XREF: .rdata:00404304↑o
.rdata:00404314                                         ; type descriptor name
.rdata:00404317                 align 4
.rdata:00404318                 public __ZTS1B
.rdata:00404318 ; `typeinfo name for'B
.rdata:00404318 __ZTS1B         db '1B',0               ; DATA XREF: .rdata:0040430C↑o
.rdata:00404318                                         ; type descriptor name
.rdata:0040431B                 align 4
.rdata:0040431C                 public __ZTV1A
.rdata:0040431C ; `vtable for'A
.rdata:0040431C __ZTV1A         dd 0                    ; offset to this
.rdata:00404320                 dd offset __ZTI1A       ; `typeinfo for'A
.rdata:00404324 off_404324      dd offset __ZN1A3fooEv  ; DATA XREF: A::A(void)+9↑o
.rdata:00404324                                         ; A::foo(void)
.rdata:00404328                 public __ZTV1B
.rdata:00404328 ; `vtable for'B
.rdata:00404328 __ZTV1B         dd 0                    ; offset to this
.rdata:0040432C                 dd offset __ZTI1B       ; `typeinfo for'B
.rdata:00404330 off_404330      dd offset __ZN1B3fooEv  ; DATA XREF: B::B(void)+13↑o
.rdata:00404330                                         ; B::foo(void)
```

可以看到，开头部分是 RTTI 信息，A 类没有继承其它父类，相比较 B 类继承了 A 类，所以它的 RTTI 中有两个名字，一个是自身的名字，另一个是父类的名字。

注意，这里只记录虚拟函数 foo，而另外 A 和 B 都没有记录非静态的 bar 成员函数。

所有函数体则是放在另一块连续的内存中，内存开取地址可以称为类基址。在调试成员函数时，使用类基址加偏移的形式访问相应的函数。

根据函数体的代码量不同，函数实例的地址也不相同：

```sh
.text:004028B0 ; _DWORD A::bar(A *__hidden this)
.text:004028E4 ; _DWORD A::foo(A *__hidden this)
.text:00402918 ; A *A::A(A *__hidden this)
.text:00402938 ; _DWORD B::bar(B *__hidden this)
.text:0040296C ; _DWORD B::foo(B *__hidden this)
.text:004029A0 ; B *B::B(B *__hidden this)
```


## ⚡ OLLVM 混淆算法
- https://blog.quarkslab.com/deobfuscation-recovering-an-ollvm-protected-program.html
- https://github.com/obfuscator-llvm/obfuscator.git
- Obfuscating C++ Programs Via Control Flow Flattening http://ac.inf.elte.hu/Vol_030_2009/003.pdf

ollvm 的编译使用 cmake，g++

    apt-get install cmake
    sudo apt-get install g++

    git clone -b llvm-4.0 git@github.com:obfuscator-llvm/obfuscator.git
    cd llvm-4.0
    mkdir build
    cd build
    cmake -DCMAKE_BUILD_TYPE:String=Release ../
    make –j4

使用 4 线程同时进行编译，可以有效地提高编译的效率，可以根据 CPU 的核心数进行修改。

编译完成后，程序都在 build/bin 和 build/lib 之中。

可以将 ollvm 当成一个编译器使用：

    obfuscator-llvm-3.4/build/bin/clang  demo.c –o demo -mllvm -fla

功能

- `-fla` Control flow flattening
- `-sub` Instruction substitution
- `-bcf` Bogus control flow

控制流平坦化(control flow flattening)的基本思想是通过一个主分发器来控制程序基本块的执行流程，经过控制流平坦化后可以模糊基本块之间的前后关系，增加程序分析的难度，同时这个流程也很像 VM 的执行流程。

符号执行 Symbolic Execution 是一种重要的形式化方法和软件分析技术，通过使用符号执行技术，将程序中变量的值表示为符号值和常量组成的计算表达式，符号是指取值集合的记号，程序计算的输出被表示为输入符号值的函数，其在软件测试和程序验证中发挥着重要作用，并可以应用于程序漏洞的检测。

符号执行的发展是从静态符号执行到动态符号执行到选择性符号执行，动态符号执行会以具体数值作为输入来模拟执行程序，是混合执行(concolic execution)的典型代表，有很高的精确度，目前较新的符号执行工具有 Triton 和 angr。 


## ⚡ Command line switches

IDA 可以使用以下命令行：

    ida input-file
    ida64 input-file        (Start 64-bit graphical interface)
    idat input-file       (Start text interface)

批处理模式 IDA 必需通过以下命令参数执行：

    ida -B input-file
    ida -c -A -Sanalysis.idc input-file

使用控制台程序 idat.exe/idat 更节省资源，做批处理更好，注意在批处理时插件不会自动加载，因为 analysis.idc 脚本文件，内核没有机会加载它们。

以下是 IDA 支持的命令行参数：

     ?      this screen (works for the text version)
     -?     this screen (works for the text version)

     -a     disable auto analysis. (-a- enables it)
     -A     autonomous mode. IDA will not display dialog boxes.
            Designed to be used together with -S switch.
     -b#### loading address, a hexadecimal number, in paragraphs
            (a paragraph is 16 bytes)
     -B     batch mode. IDA will generate .IDB and .ASM files automatically
     -c     disassemble a new file (delete the old database)
     -C#### set compiler in format name:abi
     -ddirective
            A configuration directive which must be processed at the first
            pass. Example:
                    -dVPAGESIZE=8192
     -Ddirective
            A configuration directive which must be processed at the second
            pass.
     -f     disable FPP instructions (IBM PC only)
     -h     help screen
     -i#### program entry point (hex)
     -I#    set IDA as just-in-time debugger (0 to disable and 1 to enable)
     -L#### name of the log file
     -M     disable mouse (text only)
     -O#### options to pass to plugins.
            This switch is not available in the IDA Home edition.
     -o#### specify the output database (implies -c)
     -p#### processor type
     -P+    compress database (create zipped idb)
     -P     pack database (create unzipped idb)
     -P-    do not pack database (not recommended, see Abort command)
     -r###  immediately run the built-in debugger
            format of this switch is explained here
     -R     load MS Windows exe file resources
     -S###  Execute a script file when the database is opened.
            The script file extension is used to determine which extlang
            will run the script.

            It is possible to pass command line arguments after the script name.

            For example: -S"myscript.idc argument1 \"argument 2\" argument3"

            The passed parameters are stored in the "ARGV" global IDC variable.
            Use "ARGV.count" to determine the number of arguments.
            The first argument "ARGV[0]" contains the script name.

            This switch is not available in the IDA Home edition.

     -T###  interpret the input file as the specified file type
            The file type is specified as a prefix of a file type
            visible in the 'load file' dialog box
            To specify archive member put it after the colon char,
            for example: -TZIP:classes.dex
            You can specify any nested paths:
            -T<ftype>[:<member>{:<ftype>:<member>}[:<ftype>]]
            IDA does not display the 'load file' dialog in this case
     -t     create an empty database.
     -W###  specify MS Windows directory
     -x     do not create segmentation
            (used in pair with Dump database command)
            this switch affects EXE and COM format files only.
     -z     debug:
                    00000001 drefs
                    00000002 offsets
                    00000004 flirt
                    00000008 idp module
                    00000010 ldr module
                    00000020 plugin module
                    00000040 ids files
                    00000080 config file
                    00000100 check heap
                    00000200 checkarg
                    00000400 demangler
                    00000800 queue
                    00001000 rollback
                    00002000 already data or code
                    00004000 type system
                    00008000 show all notifications
                    00010000 debugger
                    00020000 dbg_appcall
                    00040000 source-level debugger
                    00080000 accessibility
                    00100000 network
                    00200000 full stack analysis (simplex method)
                    00400000 handling of debug info (e.g. pdb, dwarf)
                    00800000 lumina


## ⚡ Debugger
- Debuggers https://www.hex-rays.com/products/ida/debugger/
- Remote debugging tutorial https://www.hex-rays.com/products/ida/support/freefiles/remotedbg.pdf
- Debugging a Linux executable from a Windows machine https://www.hex-rays.com/products/ida/debugger/cross-win-linux/win32tolinux/
- Debugging a Windows executable from a Linux machine https://www.hex-rays.com/products/ida/debugger/cross-win-linux/linuxtowin32

IDA 以反汇编器闻名，是对二进制文件执行静态分析的最佳工具之一。由于现代反静态分析技巧很复杂，常常需要将静态分析技巧与动态分析技巧结合起来，以利用
它们二者的优势。

在 IDA 调试程序前，即按下 F9 执行程序，需要设置相应的调试器，已经选择好调试器还可以通过 Debugger -> Switch debugger... 进行切换。

启动调试器调试一个程序意味着它的代码将在您的系统上运行，请小心恶意程序、病毒和木马，IDA 会弹框进行警告！

IDA 目前支持多种调试器，通过 remote debugging server，可以在 Windows/Linux/Mac OS X 等平台下调试任何已支持的其它平台的程序，官方网站提供了各种远程调试教程。

- Local Bochs debugger
- Local Windows debugger
- PIN tracer
- Remote GDB debugger
- Remote Windows debugger
- Trace replayer
- Windbg debugger

需要安装相应的调试器，并设置到 ida.cfg 配置文件，或环境变量中以供 IDA 调用。

IDA Pro 提供了 dbgsrv 进行远程调试，支持多种平台：

     File name             Target system         Debugged programs
     ------------------    ------------------    ----------------------------
     android_server        ARM Android           32-bit ELF files
     android_server64      AArch64 Android       64-bit ELF files
     android_x64_server    x86 Android 32-bit    32-bit ELF files
     android_x86_server    x86 Android 64-bit    64-bit ELF files
     armlinux_server       ARM Linux             32-bit ELF files
     linux_server          Linux 32-bit          32-bit ELF files
     linux_server64        Linux 64-bit          64-bit ELF files
     mac_server            Mac OS X              32-bit Mach-O files (x86)
     mac_server64          Mac OS X/macOS 11     64-bit Mach-O files (x64)
     mac_server_arm64      ARM macOS 11          64-bit Mach-O files (arm64)
     mac_server_arm64e     ARM macOS 11          64-bit Mach-O files (arm64e)
     win32_remote.exe      MS Windows 32-bit     32-bit PE files
     win64_remote64.exe    MS Windows 64-bit     64-bit PE files

例如，Win32 程序的远程调试：

    win32_remote -Pmy_secret_password

    IDA Windows 32-bit remote debug server(MT) v7.5.26. Hex-Rays (c) 2004-2020
    Usage: win32_remote.exe [options]
      -p ...  (--port-number ...) Port number
      -i ...  (--ip-address ...) IP address to bind to (default to any)
      -s      (--use-tls) Use TLS
      -c ...  (--certchain-file ...) TLS certificate chain file
      -k ...  (--privkey-file ...) TLS private key file
      -v      (--verbose) Verbose mode
      -P ...  (--password ...) Password
      -k      (--on-broken-connection-keep-session) Keep debugger session alive when connection breaks
      -K      (--on-stop-kill-process) Kill debuggee when closing session


使用远程调试，需要运行 gdbserver.exe 或者 dbgsrv.exe 服务端，然后再通过 IDA 连接调试器。

在 Windows 平台下，IDA 的 windbg plugin 依赖于 WinDbg 安装目录下的 dbgeng.dll，官方建议修改 IDA 安装目录下 cfg/ida.cfg 中的 DBGTOOLS 的路径，使他指向 windbg.exe 调试器所在的目录。当然，作为替代方案，可以将 windbg.exe 所在目录添加到 PATH 环境变量中。

麻省理工的 MIT 6.828 操作系统工程课程实验也可以使用 IDA 来调试 JOS 内核，只需要运行虚拟机进入等待调试状态，再配置 IDA 使用 Remote GDB 调试器，并设置 Debugger -> Process options 界面中上的主机名和端口，课程配置的端口为 26000，如果在本机上运行 QEMU 模拟器，则主机填 localhost 即可。

调试过程中先执行的是 BIOS 代码，可以在 QEMU 安装目录找到相应的程序，这里先列表几个内核引导相关的关键代码点：

|   代码文件   |                            关键地址                            |
|--------------|----------------------------------------------------------------|
| qemu/pc-bios | `0xfffffff0` CPU 指定的 BIOS 入口点，16-bit 架构对应 0xffff0。 |
| boot/boot.S  | `0x7c00` 约定俗成的 Boot Loader 入口点，由 BIOS 调用。         |
| boot/main.c  | `0x7c45` call `0x7d25` 准备进入 bootmain 函数加载 JOS 内核。   |
| kern/entry.S | `0x7d81` call (void ( * )(void) `0x10018` 执行内核代码。       |
| kern/init.c  | `0x7d9a` jmp `0x7d9a` 进入 i386_init 初始化内核。              |

内核加载到内存的地址，可以通过 objdump -h obj/kern/kernel 查询，即 start address 0x0010000c。

使用 IDA 带来的最大好处就是便利性，还有提示信息更全面，这些都是 GDB 等免费工具所不能提供的。不过有点不足的是不能同时加载 Boot Loader 和 Kernel 这两个独立的程序，它们会在内核引导过程按顺序执行。如果使用 IDA 就需要调试完 Boot Loader 程序后断开连接，再加载 Kernel 程序继续调试。

在 Windows 平台上调试 Linux 程序步骤如下：

- Step1：将 "IDA_Pro_v7.0\dbgsrv" 目录下的 "liunux_server" 和 "linux_server64" 拷贝到虚拟机中。
- Step2：在虚拟机中找到待调试文件，使用命令 "chmod 777 filename" 赋予所有用户读写执行权限。
- Step3：在虚拟机中运行 "linux_server(64)"，没有执行权限添加一下。
- Step4：待调试的 ELF 文件拷贝一份到主机，使用对应版本的 IDA 打开，在菜单栏点击 "Debugger -> Select debugger"（F9）。
- Step5：选择 "Remote Linux debugger"，打开调试器菜单 "Process options"，配置好应用程序、远程主机名、端口。
- Step6：然后通过 "Debug -> Attach -> Remote Liunx debugger" 选择虚拟机上的进程，F9 启动程序进程会提示。


## ⚡ IDA & Android
- Magisk Android Rooting https://topjohnwu.github.io/Magisk/
- 浅谈 Android 反调试之 转发端口 https://www.cnblogs.com/jiaoxiake/p/6801093.html
- IDA Dalvik debugger: tips and tricks https://www.hex-rays.com/blog/ida-dalvik-debugger-tips-and-tricks/
- A Guide to Debugging Android Binaries https://resources.infosecinstitute.com/topic/guide-debugging-android-binaries
- Debugging Android Libraries using IDA https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/debugging-android-libraries-using-ida/
- Java Debug Wire Protocol https://docs.oracle.com/javase/7/docs/technotes/guides/jpda/jdwp-spec.html
- OWASP Mobile Security Testing Guide https://github.com/OWASP/owasp-mstg
- OWASP Mobile Security Testing Guide https://mobile-security.gitbook.io/mobile-security-testing-guide/
- Android NDK API Reference https://developer.android.google.cn/ndk/reference?hl=en
- /proc 文件系统 https://www.kernel.org/doc/Documentation/filesystems/proc.txt
- 2021 KCTF 第五题 华山论剑 https://bbs.pediy.com/thread-266937.htm

使用 IDA 的 android_server 调试 APK 时默认使用端口是 23946，可能有反调试代码会检测此端口是否占用，所以保险起见不妨使用别的端口。

可以使用 ./android_server -p12345 指定端口，也可以使用 IDA 打补丁直接逆向修改默认端口。打开 IDA 载入 android_server，进入 main 函数，按 F5 查看伪代码，定位到 23946（0x5dba）位置，直接修改即可。 可以把 5D BA 改为 39 30，即 12345 端口。

可以使用虚拟设备进行调试，创建 AVD 设备后，就可以使用虚拟器启动它：

    avdmanager create avd --name "Pixel_XL" -d pixel_xl --tag google_apis --package "system-images;android-28;google_apis;x86"
    avdmanager delete avd -n Pixel_XL

启动 AVD 设备 Starting the emulator

    # emulator -avd avd_name [ {-option [value]} … ]
    # emulator @avd_name [ {-option [value]} … ]

    emulator -avd Pixel_XL
    emulator @Pixel_XL

然后将调试服务程序传送到 Android 系统，可以使用 /data 目录：

    $ adb push C:\IDA_Pro_7.6\dbgsrv\android_server64 /data
    $ adb shell chmod +rwx /data/android_server64

    $ adb shell /data/android_server -p23946
    IDA Android 32-bit remote debug server(ST) v7.5.26. Hex-Rays (c) 2004-2020
    Listening on 0.0.0.0:23946...

Apktool 可以用来 解压 APK，如果直接使用 unzip 解压可能得到一些不可阅读的文件，如 AndroidManifest.xml 是二进制编码的格式。

    apktool_2.5.0.jar d KCTF-2.sign.apk

Apk 包含的 resources.arsc 文件是 aapt 工具编译资源时生成的一个重要文件。它是 App 使用的资源索引，例如 Android 设备语言，屏幕设备尺寸不同时，app 通过同样的 ID 但却能找到不同的资源进行显示。

解包可能得到 Smali 文件，这是 Android Dalvik 虚拟机使用的高级汇编语言，支持类与方法等高级语言概念，Smali 是一种宽松式的 Jasmin/dedexer 语法。通常通过逆向编译 .DEX 如 classes.dex 文件得到，这是 Dalvik 虚拟机的可执行文件。 可以使用 dex2jar 将 DEX 格式转换为 JAR 格式，再使用反编译工具 jd-gui 生成 Java 代码。也可以使用 jadx (Dex to Java Decompiler) 直接逆向反编译。

关于动态库 so 对应的 CPU 架构：

- `x86`：Intel x86 32-bit CPU 构架，这是复杂指令架构 CISC - Complex Instruction Set Computing；
- `x86_64`：AMD 推出的兼容 x86 的 64-bit CPU 构架；
- `arm64-v8a`：ARMv8 64-bit CPU 构架，如骁龙 810，820，835 等，同时兼容 A32, T32 指令集；
- `armeabi-v7a`：ARMv7 32-bit CPU 构架，如骁龙 800，801 等，向下兼容 ARMv5,ARMv6；
- `armeabi`：旧版本的 ARMv5 ARMv6 构架，基本已经淘汰；
- `mips` ：MIPS 32-bit 的精简指令集架构 RISC - Reduced Instruction Set Computer；
- `mips64` ：MIPS64 64-bit 的精简指令集架构 RISC - Reduced Instruction Set Computer；

ARMv9 是 2021 年最新架构，ARMv8 是一个真正意义上的 64-bit 架构，同时这个架构包含唯一的 Cortex-A32 提供了 32-bit 的支持。

ARM 构架都是向下兼容的，例如如果 ARMv8，没有对应 arm64-v8a 文件夹，则会执行 armeabi-v7a 中的 so 动态链接库文件。

项目中使用 NDK 就会生成动态库 .so 文件，即使在项目中只是使用 Java 语言，很多情况下，你可能并没有意识到项目中依赖的函数库或者引擎库里面已经嵌入了 .so 文件，并依赖于不同的 ABI - Application Binary Interface。

从 AndroidManifest.xml 文件可以查询到程序的 Activity 入口类名，然后安装需要调试的 APK 并执行等等待调试：

    $ adb install \ctf\q5\KCTF-2.sign.apk
    $ adb shell am start -D -n com.example.hellojni/.HelloJni
    Starting: Intent { cmp=com.example.hellojni/.HelloJni }

使用 -D 参数目的是调试程序的启动过程，此时 Android 设备上会给出提示：“Waiting For Debugger”，表示正在等待调试器的链接。

也可以让 APP 正常启动，然后 IDA 依然可以 attach 到已经运行的进程上，但是这样无法调试到 APP 启动阶段的逻辑。

注意，直接传递到 /sdcard 将导致不能修改可执行权限，传送到 /bin 目录可能遇到 Read-only 问题。

```sh
# mount -o rw,remount -t yaffs2 /dev/block/mtdblock3
# chmod 777 /system
# mount -o rw,remount -t rootfs /
```

Linux 系统的 /proc 是进程文件系统，包含许多系统信息，同时每个运行中的进程，在这个目录下有对应 PID 的子目录，其中 exe 就是 APK 程序加载程序文件：

```sh
# ps -A|grep "com.example.hellojni"
u0_a85        6670  1695 1580044 154020 ptrace_stop  e950eb39 t com.example.hellojni
# ls -l /proc/6670/exe
lrwxrwxrwx 1 u0_a85 u0_a85 0 2021-05-15 16:55 /proc/6670/exe -> /system/bin/app_process32
```


另外一个设置要点是为 AVD 设置端口转发，即将一台设备接收到的 socket 连接请求，转发给另一台设备进行处理。

```sh
# adb forward <local> <remote>
# set up forwarding of host <local> port to emulator/device <remote> port
adb forward tcp:23946 tcp:23946
```

还可以转发到 JDWP - Java Debug Wire Protocol 端口，再利用 JDB 调试 Java 代码：

```js
$ adb jdwp
14342
$ adb forward tcp:7777 jdwp:14342
$ { echo "suspend"; cat; } | jdb -attach localhost:7777
```

然后打开 IDA，从调试菜单中选择 Debugger -> Attach -> Remote ARM Linux/Android debugger 并且设置 localhost 主机，端口默认为 23946，密码和 android_server 运行时指定的一致，或者留空如果没有设置密码。

然后从进程列表中选择需要调试的 Android 进程，如前面查询到的 com.example.hellojni。

如果先从 IDA 加载 APK，再连接调试服务，会出现错误信息，好像 Dalvik Debugger 不支持 AVD 调试一样，奇怪的是端口选择了 23915：

> ADB error: listener 'tcp:23915' not found
> TCP-connection to adb server
> Target Android version 9, SDK version of the framework 28 (ART)

如果 android_server 设置监听 23915 端口，并设置 adb forward，还是出错，调试器找不到相应进程，难道是反调试程序问题？

> The debugger could not find running processes corresponding to this database

Android 所有使用中的 TCP 端口可以查询 /proc/net/tcp 文件，十六进制端口号是 5D8A，十进制为 23946，可以使用命令转换 echo $((0x5d8a))：

```sh
$ adb root
restarting adbd as root

$ adb shell cat /proc/net/tcp
  sl  local_address rem_address   st tx_queue rx_queue tr tm->when retrnsmt   uid  timeout inode

   0: 00000000:5D8A 00000000:0000 0A 00000000:00000000 00:00000000 00000000     0        0 48801 1 0000000000000000 100 0 0 10 0
   1: 0100007F:13AD 00000000:0000 0A 00000000:00000000 00:00000000 00000000     0        0 38860 1 0000000000000000 100 0 0 10 0
   2: 02E8A8C0:881C 0302000A:0355 06 00000000:00000000 03:0000113D 00000000     0        0 0 3 0000000000000000
```

相关工具链接：

- 工具介绍 https://mobile-security.gitbook.io/mobile-security-testing-guide/appendix/0x08-testing-tools
- Apktool v2.5.0 https://github.com/iBotPeaches/Apktool
- JADX GUI 1.2.0 https://github.com/skylot/jadx/releases/tag/v1.2.0

下载 JADX 注意，需要 64-bit JRE，如果没有安装就下载带 JRE 的压缩包。


## ⚡ DBI - Dynamic Binary Instrumentation
- Frida - Dynamic instrumentation toolkit https://frida.re/
- Intel Pin - A Dynamic Binary Instrumentation Tool https://software.intel.com/content/www/us/en/develop/articles/pin-a-dynamic-binary-instrumentation-tool.html

Frida 框架可用于代码插桩，它分为两部分：

- 运行在系统上的交互工具 frida CLI；
- 运行在目标机器上的代码注入工具 frida-server。

插桩技术是指将额外的代码注入程序中以收集运行时的信息，可分为两种：

- 源代码插桩 Source Code Instrumentation(SCI) 在程序源代码中注入额外代码。
- 二进制插桩 Binary Instrumentation 在二进制可执行文件中注入额外代码，双分静态和动态两种。
    - 静态二进制插桩 Static Binary Instrumentation(SBI) 在可执行程序文件中插入额外的代码和数据。
    - 动态二进制插桩 Dynamic Binary Instrumentation(DBI) 在程序运行时实时地插入额外代码和数据。

使用 DBI 做些什么呢？

- 1）访问进程的内存；
- 2）在应用程序运行时覆盖一些功能；
- 3）从导入的类中调用函数；
- 4）在堆上查找对象实例并使用这些对象实例；
- 5）Hook，跟踪和拦截函数等等；

Frida 的注入脚本是 JavaScript，而且使用的是 QuickJS 脚本引擎，因此可以通过脚本来操作设备上的 Java 代码的。



## ⚡ Smali vs Java
- Dalvik Executable format http://www.dre.vanderbilt.edu/~schmidt/android/android-4.0/dalvik/docs/dex-format.html
- smali-2.5.2.jar https://bitbucket.org/JesusFreke/smali/downloads/
- Dalvik opcodes http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html
- Dalvik and ART - Part I - Dalvik Internals http://newandroidbook.com/files/Andevcon-DEX.pdf
- Dalvik and ART - Part II - Android Runtime http://newandroidbook.com/files/Andevcon-ART.pdf

ART - Android RunTime 在 Android KitKat (4.4) 版本中引入的新，目的是为了克服 Dalvík 现有的不足，从 Dalvík 使用的 JIT - Just-In-Time 编译技术转换为 AOT - Ahead-Of-Time 即静态编译方式。

Dalvík 的不足之处在于：

– Virtual machine maintenance is expensive
    - Interpreter/JIT simply aren't efficient as native code
    - Doing JIT all over again on every execution is wasteful
    - Maintenance threads require significantly more CPU cycles
    - CPU cycles translate to slower performance – and shorter battery life
– Dalvík garbage collection frequently causes hangs/pauses
– Virtual machine architecture is 32-bit only
    - Android is following iOS into the 64-bit space

Jesus Freke 开发的 smali/baksmali 这两个工具是 DEX 字节码格式的编译/反编译程序，Android 的 Dalvík 虚拟机运行 dex 格式的程序文件，对应的汇编语言就是 Smali。

使用 smali-2.5.2.jar 可以编译 Smali 为 Dalvik 虚拟机运行的程序，-o 指定输出的 dex 文件，然后再指定编译的 smali 文件即可。

    java -jar smali-2.2.1.jar a -o hello.dex SmaliHello.smali 

执行生成一个 hello.dex 文件，还需要使用 adb push 将程序推送到 Android 设备上，并使用 dalvikvm 命令来运行：

    adb push hello.dex /data/hello.dex
    adb shell dalvikvm -cp /data/hello.dex com.example.hellojni.HelloJni

Android SDK 提供的 dx 命令可以将 Java 编译后的类文件转换成 DEX 格式：

```sh
javac -source 1.7 -target 1.7 Helloworld.java
dx --dex --output=Hellworld.dex Helloworld.class
```

Android 的程序加载程序 app_process 参数格式如下：

    app_process [vm-options] cmd-dir [options] start-class-name [main-options]

这个命令没有提供 help，要么查资料，要么看源码了解其使用方法：

    vm-options – VM 选项
    cmd-dir –父目录 (/system/bin)
    options –运行的参数 :
        –zygote
        –start-system-server
        –application (api>=14)
        –nice-name=nice_proc_name (api>=14)
    start-class-name –包含 main 方法的主类
    main-options –启动时候传递到main方法中的参数

将编译得到的 dex(jar) 文件 push 到 /data/local/tmp 文件夹下，使用 app_process 运行它：

    app_process -Djava.class.path=Helloworld.dex /data/local/tmp Helloworld


Dalvík 虚拟机相比 JVM 速度要更快，占用空间更少。

Dalvík 是基于寄存器架构的，寄存器都是 32-bit，如果是 64-bit 类型的数据则用两个相邻的 32-bit 寄存器表示，也就是说，对于 double 这种类型的数据，需要用到两个相邻的寄存器来存储。

Dalvík 最多支持 65536 个寄存器，编号 0 ~ 65535。但是 ARM 架构的 CPU 只存在 37 个寄存器，怎么解决匹配问题？

Dalvík 的寄存器是虚拟寄存器，通过映射真实的寄存器来实现，Dalvík 维护了一个调用栈用来支持虚拟寄存器和真实寄存器相互映射的。在执行具体函数时，Dalvík 根据 `.registers` 指令来确定该函数要用到的寄存器数目。

对于一个使用 m 个寄存器的方法而言，包含局部变量和参数使用的寄存器，局部寄存器编号使用从 v0 开始，而参数寄存器则使用最后的 n 个寄存器，假设有 n 个参数。

举个例子，假设实例方法 test(String a,String b) 一共使用了 5 个寄存器，编号 v0, v1, v2, v3, v4，那么参数寄存器是能使用 v2, v3, v4 这三个寄存器。

寄存器的命名有两种不同的命名方法，v 前缀命名法和 p 前缀命名法，这两种命名法仅仅是影响了字节码的可读性，通常 p 前缀命名用来表示参数，参数名称从 p0 开始依次增大编号。

Java 类型与 Dalvík 对应类型表达：

    |      Dalvík Types      |          Java Types          |
    |------------------------|------------------------------|
    | [descriptor            | Array: descriptor[]          |
    | B                      | byte                         |
    | C                      | char                         |
    | D                      | double(64-bit)               |
    | F                      | float                        |
    | I                      | int                          |
    | J                      | long(64-bit)                 |
    | Lfully/qualified/Name; | Object: fully.qualified.Name |
    | S                      | short                        |
    | V                      | void                         |
    | Z                      | boolean                      |

数组这种表达有点怪：

    [I      int[] 一维数组
    [[I     int[][] 二维数组
    [Ljava/lang/String  String[] 对象数组

比如 com.ex.Test 类定义了 name 字段及 age 字段，类型分别为 String、int 类型，那么 Smali 描述为：

    Lcom/ex/Test;->name:Ljava/lang/String;
    Lcom/ex/test;->age:I

方法表达规则也类似，通过几个例子来说明：

```java
// Java 方法
public char charAt(int a){...}
public void getChars(int a,int b, char c[], int d){...}
public boolean equals(Object a){...}

// Davilk 描述
Ljava/lang/String;->charAt(I)C
Ljava/lang/String;->getChars(II[CI)V
Ljava/lang/String;->equals(Ljava/lang/Object)Z
```

Smali 文件语法要点：

- `#comments` 注解内容；
- `L....;`  对象类型标识字符串，指定一个类型命名空间；
- `.class`  标识一个类定义；
- `.super`  标识父类；
- `.source` 源代码文件；
- `.field`  标识一个成员字段；
- `.method` 标识一个成员方法，使用括号指示传入什么参数类型，例如 ([LJava/lang/String;])V 表示传递一个数组；
- `.param`  标识一个传入方法内的参数，和 `.paramter` 含义一致，但是表达格式不同；
- `.filed`  定义字段；
- `.method` 对应 `.end method`  定义方法；
- `.annotation` 对应 `.end annotation`  定义标注、注解；
- `.implements` 定义接口指令
- `.local`  定义局部变量的个数；
- `.registers`  定义方法内使用寄存器的总数；
- `.prologue`   方法代码开始；
- `.line`   指示 Java 源文件对应的行号；

掌握以上的字段和方法的描述只是一个基础，而更具体的逻辑则需要了解 Dalvík 指令集，Dalvík 是基于寄存器架构的，因此指令集和 JVM 中的指令集区别较大，反而更类似 x86 汇编指令，详细指令参考 Dalvík opcodes 文档。

Davilk 的方法调用指令和 JVM 的指令类似，目前共有五条指令：

    |                    指令                   |                        说明                       |
    |-------------------------------------------|---------------------------------------------------|
    | invoke-direct{parameters},methodtocall    | 调用实例的 private 方法，第一个参数为 this 指针。 |
    | invoke-static{parameters},methodtocall    | 调用实例的静态方法                                |
    | invoke-super{parameters},methodtocall     | 调用父类方法                                      |
    | invoke-virtual{parameters},methodtocall   | 调用实例的 public、protected 修饰修饰的方法       |
    | invoke-interface{parameters},methodtocall | 调用接口方法                                      |

比如，invoke-virtual {v3,v1,v4},Test2.method5:(II)V 指令中的 v3 表示 Test2 实例对象，而 v1, v4 才是方法参数。

这五种指令是基本指令，除此之外，还有变化形式：

- invoke-direct/range
- invoke-static/range
- invoke-super/range
- invoke-virtual/range
- invoke-interface/range

和前面的指令唯一的区别，就是带 range 形式的指令可以设置方法参数可以使用的寄存器的范围，在参数多于四个时候使用。

注意，如果要获取方法执行有返回值，需要通过 move-result 指令获取执行结果。

数据运算主要包括算数运算和逻辑运算两类，每一类指令都带有数据类型后缀。

以下指令使用 type 后缀替代具体的数据类型，可以是 int, float, long, double 等。

算术运算指令

    |   指令   |   说明   |
    |----------|----------|
    | add-type | 加法指令 |
    | sub-type | 减法指令 |
    | mul-type | 乘法指令 |
    | div-type | 除法指令 |
    | rem-type | 求余     |

逻辑运算指令

    |   指令   |     说明     |
    |----------|--------------|
    | and-type | 与运算指令   |
    | or-type  | 或运算指令   |
    | xor-type | 异或元算指令 |

位移指令

    |    指令   |      说明      |
    |-----------|----------------|
    | shl-type  | 有符号左移指令 |
    | shr-type  | 有符号右移指令 |
    | ushr-type | 无符号右移指令 |

比较指令基本格式格式有 3 个寄存器，第一个用来存放比较结果，有三种比较指令：

- cmpl 表示 compare less；
- cmpg 表示 compare greater；
- cmp 表示 compare，等价 cmpg 的比较逻辑。

具体的 Davilk 比较指令:

- 2d: cmpl-float (lt bias)
- 2e: cmpg-float (gt bias)
- 2f: cmpl-double (lt bias)
- 30: cmpg-double (gt bias)
- 31: cmp-long

浮点比较运算指令列出的 bias 表示如何处理 NaN 值的比较，gt bias 表示 NaN 值比较返回 1，lt bias 表示 NaN 值比较返回 -1。

举例说明，使用 cmpg float 指令检查浮点 x < y，返回 -1 表示成立，比较结果为 true，其它值为 false，无论是数值的比较结果相等返回 0，还是因为 NaN 值。


在 Davilk 提供 return 指令来返回运行结果：

    |       指令       |              说明              |
    |------------------|--------------------------------|
    | return-void      | 无返回                         |
    | return v0        | 返回一个 32-bit 非对象类型的值 |
    | return-wide v0   | 返回一个 64-bit 非对象类型的值 |
    | return-object v0 | 返回一个对象类型的引用         |

部分 Dalvik Opcode 参考：

    | Op |       Opcode name        |                          Explanation                           |                Example                 |
    |----|--------------------------|----------------------------------------------------------------|----------------------------------------|
    | 00 | nop                      | 无操作 No operation                                            | 0000 - nop                             |
    | 01 | move vx,vy               | 数据从 vy 移到 vx，两个寄存器必需为前 256 个。                 | 0110 - move v0, v1                     |
    | 02 | move/from16 vx,vy        | 数据从 vy 移到 vx，要求 vx 寄存器必需为前 256 个。             | 0200 1900 - move/from16 v0, v25        |
    | 03 | move/16                  |                                                                |                                        |
    | 04 | move-wide                |                                                                |                                        |
    | 05 | move-wide/from16 vx,vy   | long/double 数据从 vy 移到 vx，要求 vx 寄存器为前 256 个。     | 0516 0000 - move-wide/from16 v22, v0   |
    | 06 | move-wide/16             |                                                                |                                        |
    | 07 | move-object vx,vy        | 对象引用从 vy 移到 vx。                                        | 0781 - move-object v1, v8              |
    | 08 | move-object/from16 vx,vy | 对象引用从 vy 移到 vx，要求 vx 可寻址前 256 个寄存器。         | 0801 1500 - move-object/from16 v1, v21 |
    | 09 | move-object/16           |                                                                |                                        |
    | 0A | move-result vx           | 将上一步操作的结果移到 vx。                                    | 0A00 - move-result v0                  |
    | 0B | move-result-wide vx      | 将方法返回的 long/double 数据移到 vx,vx+1 两个相邻的寄存器中。 | 0B02 - move-result-wide v2             |
    | 0C | move-result-object vx    | 将方法返回的对象引用移动到 vx。                                | 0C00 - move-result-object v0           |
    | 0D | move-exception vx        | 将方法抛出的异常对象的引用移到 vx 寄存器。                     | 0D19 - move-exception v25              |

    | Op |       Opcode name       |              Explanation               |                              Example                              |
    |----|-------------------------|----------------------------------------|-------------------------------------------------------------------|
    | 22 | new-instance vx,type    | 实例化对象并将引用移到 vx。            | 2200 1500 - new-instance v0, java.io.FileInputStream // type@0015 |
    | 23 | new-array vx,vy,type_id | 实例化数组并将引用移到 vx，vy 为大小。 | 2312 2500 - new-array v2, v1, char[] // type@0025                 |
    | 24 | filled-new-array {parameters},type_id | 用参数填充数组，配合 move 指令使用。 | 2420 530D 0000 - filled-new-array {v0,v0},[I // type@0D53 |
    | 25 | filled-new-array-range {vx..vy},type_id | 使用范围参数填充数组，配合 move 指令使用。 | 2503 0600 1300 - filled-new-array/range {v19..v21}, [B // type@0006 |
    | 26 | fill-array-data vx,array_data_offset | 使用静态数据填充数组 vx，数据从当前指令位到往后指定偏移量。 | 2606 2500 0000 - fill-array-data v6, 00e6 // +0025 |

静态数据填充数组指令 fill-array-data 的数据格式如下：

    0003 // Table type: static array data
    0400 // Byte per array element (in this case, 4 byte integers)
    0300 0000 // Number of elements in the table
    0100 0000  // Element #0: integer 1
    0200 0000 // Element #1: integer 2
    0300 0000 // Element #2: integer3

实例化指令中后缀的 type@0015 表示类型对应 Type Table 中的 #15H 位置的记录条目。


```java
package com.example.hellojni;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class HelloJni extends Activity {
    public static Context mContext;
    Button button;
    EditText text;
    EditText text2;

    public native String stringFromJNI(String str, String str2);

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mContext = this;
        this.button = (Button) findViewById(R.id.mybtn1);
        this.text = (EditText) findViewById(R.id.edit1);
        this.text2 = (EditText) findViewById(R.id.edit2);
    }

    public void Btn1_Click(View view) {
        String str;
        String input = this.text.getText().toString();
        String input2 = this.text2.getText().toString();
        if (input == null || input.isEmpty()) {
            str = "name为空";
        } else if (input2 == null || input2.isEmpty()) {
            str = "serial为空";
        } else {
            System.loadLibrary("hello-jni");
            str = stringFromJNI(input, input2);
        }
        AlertDialog.Builder builder = new AlertDialog.Builder(mContext);
        builder.setTitle("");
        builder.setMessage(str);
        builder.show();
    }
}
```


```js
.class public Lcom/example/hellojni/HelloJni;
.super Landroid/app/Activity;
.source "HelloJni.java"


# static fields
.field public static mContext:Landroid/content/Context;


# instance fields
.field button:Landroid/widget/Button;

.field text:Landroid/widget/EditText;

.field text2:Landroid/widget/EditText;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 44
    invoke-direct {p0}, Landroid/app/Activity;-><init>()V

    return-void
.end method


# virtual methods
.method public Btn1_Click(Landroid/view/View;)V
    .locals 5
    .param p1, "view"    # Landroid/view/View;

    .line 64
    iget-object v0, p0, Lcom/example/hellojni/HelloJni;->text:Landroid/widget/EditText;

    invoke-virtual {v0}, Landroid/widget/EditText;->getText()Landroid/text/Editable;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v0

    .line 65
    .local v0, "input":Ljava/lang/String;
    iget-object v1, p0, Lcom/example/hellojni/HelloJni;->text2:Landroid/widget/EditText;

    invoke-virtual {v1}, Landroid/widget/EditText;->getText()Landroid/text/Editable;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v1

    .line 66
    .local v1, "input2":Ljava/lang/String;
    if-eqz v0, :cond_3

    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v2

    if-eqz v2, :cond_0

    goto :goto_1

    .line 68
    :cond_0
    if-eqz v1, :cond_2

    invoke-virtual {v1}, Ljava/lang/String;->isEmpty()Z

    move-result v2

    if-eqz v2, :cond_1

    goto :goto_0

    .line 72
    :cond_1
    const-string v2, "hello-jni"

    invoke-static {v2}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V

    .line 73
    invoke-virtual {p0, v0, v1}, Lcom/example/hellojni/HelloJni;->stringFromJNI(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .local v2, "str":Ljava/lang/String;
    goto :goto_2

    .line 69
    .end local v2    # "str":Ljava/lang/String;
    :cond_2
    :goto_0
    const-string v2, "serial\u4e3a\u7a7a"

    .restart local v2    # "str":Ljava/lang/String;
    goto :goto_2

    .line 67
    .end local v2    # "str":Ljava/lang/String;
    :cond_3
    :goto_1
    const-string v2, "name\u4e3a\u7a7a"

    .line 76
    .restart local v2    # "str":Ljava/lang/String;
    :goto_2
    new-instance v3, Landroid/app/AlertDialog$Builder;

    sget-object v4, Lcom/example/hellojni/HelloJni;->mContext:Landroid/content/Context;

    invoke-direct {v3, v4}, Landroid/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

    .line 77
    .local v3, "builder":Landroid/app/AlertDialog$Builder;
    const-string v4, ""

    invoke-virtual {v3, v4}, Landroid/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    .line 78
    invoke-virtual {v3, v2}, Landroid/app/AlertDialog$Builder;->setMessage(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    .line 79
    invoke-virtual {v3}, Landroid/app/AlertDialog$Builder;->show()Landroid/app/AlertDialog;

    .line 81
    return-void
.end method

.method public onCreate(Landroid/os/Bundle;)V
    .locals 1
    .param p1, "savedInstanceState"    # Landroid/os/Bundle;

    .line 53
    invoke-super {p0, p1}, Landroid/app/Activity;->onCreate(Landroid/os/Bundle;)V

    .line 54
    const/high16 v0, 0x7f020000

    invoke-virtual {p0, v0}, Lcom/example/hellojni/HelloJni;->setContentView(I)V

    .line 55
    sput-object p0, Lcom/example/hellojni/HelloJni;->mContext:Landroid/content/Context;

    .line 56
    const v0, 0x7f010002

    invoke-virtual {p0, v0}, Lcom/example/hellojni/HelloJni;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/Button;

    iput-object v0, p0, Lcom/example/hellojni/HelloJni;->button:Landroid/widget/Button;

    .line 57
    const/high16 v0, 0x7f010000

    invoke-virtual {p0, v0}, Lcom/example/hellojni/HelloJni;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/EditText;

    iput-object v0, p0, Lcom/example/hellojni/HelloJni;->text:Landroid/widget/EditText;

    .line 58
    const v0, 0x7f010001

    invoke-virtual {p0, v0}, Lcom/example/hellojni/HelloJni;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/EditText;

    iput-object v0, p0, Lcom/example/hellojni/HelloJni;->text2:Landroid/widget/EditText;

    .line 59
    return-void
.end method

.method public native stringFromJNI(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
.end method
```

## ⚡ Keyboard Map

Open Subviews

- `Shift_F4`    Names Window
- `Shift_F3`    Functions Window
- `Shift_F12`   Strings Window
- `Shift_F7`    Segments
- `Shift_F8`    Segment registers
- `Shift_F5`    Signatures
- `Shift_F11`   Type libraries
- `Shift_F9`    Structures
- `Shift_F10`   Enumerations

Data Format Options

- `Alt_A`   ASCII strings style   
- `Alt_D`   Setup data types   

File Operations

- `Ctrl_F9` Parse C header file 
- `Alt_F10` Create ASM file 
- `Ctrl_W`  Save database  

Navigation

- `Enter`   Jump to operand   
- `Alt_Enter`   Jump in new window   
- `Esc`     Jump to previous position 
- `Ctrl_Enter`  Jump to next position  
- `G`       Jump to address   
- `Ctrl_L`  Jump by name  
- `Ctrl_P`  Jump to function  
- `Ctrl_S`  Jump to segment  
- `Ctrl_G`  Jump to segment register  
- `Ctrl_Q`  Jump to problem  
- `Ctrl_X`  Jump to cross reference  
- `X`       Jump to xref to operand   
- `Ctrl_E`  Jump to entry point  
- `Alt_M`   Mark Position   
- `Ctrl_M`  Jump to marked position  

Hex View

- `1`   Data fromat: 1-byte integer
- `2`   Data fromat: 2-byte integer
- `4`   Data fromat: 4-byte integer
- `8`   Data fromat: 8-byte integer
- `F`   Data fromat: Single Float(32-bit) 
- `D`   Data fromat: Double Float(64-bit)
- `L`   Data fromat: Long Double(80-bit)
- `H`   Data format: Hexadecimal
- `U`   Data format: Unsigned
- `S`   Data format: Signed
- `F2`  Edit Data

Debugger

- `F9`  Start process
- `Ctrl_F2` Terminate process 
- `F7`  Step into
- `F8`  Step over
- `Ctrl_F7` Run until return 
- `F4`  Run to cursor

Breakpoints

- `F2`  当前行切换断点
- `Ctrl_Alt_B`  Breakpoint list  

Watches

- `Del` Delete watch

Tracing

- `Ctrl_Alt_S`  Stack trace  

Search

- `Alt_C`   Next code
- `Ctrl_D`  Next data
- `Ctrl_A`  Next explored
- `Ctrl_U`  Next unexplored
- `Alt_I`   Immediate value
- `Ctrl_I`  Next immediate value
- `Alt_T`   Text
- `Ctrl_T`  Next text
- `Alt_B`   Sequence of bytes
- `Ctrl_B`  Next sequence of bytes
- `Alt_U`   Not function
- `Ctrl_V`  Next void
- `Ctrl_F`  Error operand

Graphing

- `F12` Flow chart
- `Ctrl_F12` Function calls

Miscellaneous

- `?`   Calculator
- `Ctrl_Tab`Cycle through open views
- `Alt_1…N` Select tab
- `Ctrl_F4` Close current view
- `Alt_X`   Exit
- `Shift_F2`IDC Command

Edit (Data Types – etc) 快捷键：

- `Ctrl_Ins`Copy
- `Alt_L`   Begin selection
- `Alt_F2`  Manual instruction
- `C`   Code
- `D`   Data
- `Alt_Q`   Struct variable
- `A`   ASCII string
- `Num*`Array   
- `U`   Undefine
- `N`   Rename

Operand Type 快捷键：

- `O`   Offset (data segment)
- `Ctrl_O`  Offset (current segment)
- `Alt_R`   Offset by (any segment)
- `Ctrl_R`  Offset (user-defined)
- `T`   Offset (struct)
- `#`   Number (default)
- `Q`   Hexadecimal
- `H`   Decimal
- `B`   Binary
- `R`   Character
- `S`   Segment
- `M`   Enum member
- `K`   Stack variable
- `_`   Change sign
- `~`   Bitwise negate
- `Alt_F1`  Manual

Comments 快捷键：

- `:`   Enter comment
- `;`   Enter repeatable comment
- `Ins` Enter anterior lines
- `Shift_Ins`   Enter posterior lines
- `Shift_F1`    Insert predefined comment

Segments 快捷键：

- `Alt_S`   Edit segment   
- `Alt_G`   Change segment register value

Structs 快捷键：

- `Alt_Q`   Struct var   
- `Ctrl_Z`  Force zero offset field  
- `Alt_Y`   Select union member

Functions 快捷键：

- `P`    Create function
- `Alt_P`  Edit function   
- `E`      Set function end
- `Ctrl_K` Stack variables 
- `Alt_K`  Change stack pointer    
- `V`    Rename register
- `Y`  Set function type
- `N`  Rename



## ⚡ User & Kernel space 
- Kernel Documentation https://www.kernel.org/doc/
- Understanding the Linux Virtual Memory Manager https://www.kernel.org/doc/gorman/html/understand/
- Kernel Virtual Address Layout https://codemachine.com/articles/x64_kernel_virtual_address_space_layout.html

现代 CPU 从硬件上提供 Ring 0 - 3 花 4 个特权级，一般操作系统只使用最核心的 Ring 0 和用户特权 Ring 3，同时将内存分划成 User space 与 Kernel space 两大空间，这使得用户程序与操作系统的特权管理更清晰，程序运行起来也更安全，不会因为用户程序的问题导致系统错乱。

Linux 操作系统而言，内核空间运行在物理内存的最高位置的 1GB 空间。以 32-bit 机器为例，最高的 1G 空间的虚拟地址 `[0xC0000000, 0xFFFFFFFF]` 由内核使用，而较低的 3G 空间虚拟地址 `[0x00000000, 0xBFFFFFFF]` 由用户进程使用，称为用户空间。在 Linux 下，如果可执行文件依赖其它共享库，那么系统就会为它在从 0x40000000 开始的地址分配相应的空间，并将共享库载入该空间。

Windows 则默认将高地址的 2GB 空间 `[0x80000000, 0xFFFFFFFF]` 分配给内核，也可以配置 1GB 空间。

所以，在逆向调试程序过程，了角这些操作系统的基本特点是非常有指导意义的。

Windows 是混合内核，内核文件，即 ntoskrnl.exe 很，网上有泄露的 WIN2K/NT4 的源码，同时还有兼容 Windows 内核 API 的开源的 ReactOS 的源码，可以看到即使是 Windows 的内核，代码规模也是非常巨大的。

Linux 是宏内核，Monolithic Kernel，内核是一个完整的可执行程序，且拥有最高的权限。Linux 本身可以在内核里集成大量驱动，笼统的讲，ntosknrl 肯定比 Linux 内核要小很多。

在桌面领域 Windows 的驱动必然是比 Linux 要多的，应用程序也更多，但非桌面领域，Linux 的驱动也不少。而 Windows 能成功，跟内核关系不大，有人开发驱动，有人开发生态环境，这比内核重要多了。

Linux Memory model


## ⚡ IDC 脚本
- Disassembling Code IDA Pro and SoftICE by Vlad Pirogov
- IDA 中的IDC脚本编写笔记 https://www.cnblogs.com/LyShark/p/13100048.html

IDA 提供 IDC 脚本支持，语法类似 C 语言，免费版本也支持 IDC，Shift_F2 可调出脚本编辑器，但 Python 接口只有 IDA Pro 支持。

内置函数参考手册 Alphabetical list of IDC functions。

```c
auto  s1, s2, s3;
s1 = "Hello";
s2 = "world!";
s3 = s1 + " " + s2;
Message("%s\n", s3);
```

A variable can contain: 

- LONG: a 32-bit signed long integer (64-bit in 64-bit version of IDA)
- INT64: a 64-bit signed long integer
- STR: a character string
- FLOAT: a floating point number (extra precision, up to 25 decimal digits)
- OBJECT: an object with attributes and methods
- REF: a reference to another variable
- FUNC: a function reference

A local variable is declared this way: 

    auto var1;
    auto var2 = <expr>;

Global variables are declared like this: 

    extern var;

Listing 5.11: Structure of the IDC function 

```c
static func(argl, arg2, ...)
{
...
}
```

如果一个变量没有定义，IDA 会尝试从反汇编中引用相同的符号：

    .data:00413060 errtable        dd 1   ; oscode
    .data:00413060                 dd 16h ; errnocode

    msg("address is: %x\n", _errtable); // 413060
    msg("address is: %x\n", _errtable.errnocode); // 413064

IDC 语句：

    expression;        (expression-statement)
    if (expression) statement
    if (expression) statement else statement
    for ( expr1; expr2; expr3 ) statement
    while (expression) statement
    do statement while (expression);
    break;
    continue;
    return <expr>;
    return;              the same as 'return 0;'
    { statements... }
    try statement catch ( var ) statement
    throw <expr>;
    ;                    (empty statement)

IDC 不支持 goto 或 switch 这样的语句。

IDC: Predefined symbols  

    _NT_           IDA is running under MS Windows
    _LINUX_        IDA is running under Linux
    _MAC_          IDA is running under Mac OS X
    _UNIX_         IDA is running under Unix (linux or mac)
    _EA64_         64-bit version IDA
    _QT_           GUI version of IDA (Qt)
    _GUI           GUI version of IDA
    _TXT_          Text version of IDA
    _IDA_VERSION_  The current IDA version. For example: "7.5"
    _IDAVER_       The current, numerical IDA version. For example: "750" means v7.5

    #define 
    #undef 
    #include 
    #error 
    #ifdef, #ifndef, #else, #endif 

IDC 字符串切片：

    str[i1:i2] - substring from i1 to i2. i2 is excluded
    str[idx]   - one character substring at 'idx', it is equivalent to str[idx:idx+1]
    str[:idx]  - substring from the beginning of the string to idx, this is equivalent to str[0:idx]
    str[idx:]  - substring from idx to the end of the string, this is equivalent to str[idx:0x7fffffff]

例如，替换其中两个字符为 "abc"： 

    str[0:2] = "abc";

For objects, the slice operator denotes a subset of attributes. It can be used to emulate arrays: 

    auto x = object();
    x[0] = value1;
    x[1] = "value2";

x[i1:i2] denotes all attributes with numeric values between i1 and i2 (i2 is excluded). Any non-numeric attributes are ignored by the slice operator. 


Listing 5.16: Example IDC program illustrating memory access and navigation 

```c
#include <idc.idc>
static main()
{
    auto ad;
    ad = 0x401020;
    while(ad <= 0x401041)
    {
          Message("%x\n", ad);
          ad = NextAddr(ad);
    };
}
```

Listing 5.17: Simple IDC program that illustrating memory reading 

```c
#include <idc.idc>

static main()
{
auto ad, i;
   for(ad = 0x401020; ad <= 0x401041; ad++)
   {
      Message("%x........", ad);
      if(GetFlags(ad) & FF_IVL)
      {
         i = Byte (ad);
         if (i > 31)
         Message("%x..,%c\n", i, i);
         else
         Message("%x...\n", i);
      } else
      {
         Message("Error!\n");
      }
   }
}
```

# 🚩 junk-code 花指令
- 看雪.TSRC 2017CTF 秋季赛 第二题 ctf2017_Fpc https://ctf.pediy.com/game-fight-47.htm
- 看雪 TSRC 2017CTF 秋季赛 第 2 题出题思路 https://bbs.pediy.com/thread-222404.htm
- Visual C++ Inline Assembler https://docs.microsoft.com/en-us/cpp/assembler/inline/inline-assembler
- How to Use Inline Assembly Language in C Code https://gcc.gnu.org/onlinedocs/gcc/Using-Assembly-Language-with-C.html
- Professional Assembly Language Richard Blum https://2lib.org/book/493331/89d801
- The Art of Assembly Language Randall Hyde 1nd https://2lib.org/book/461957/77af80
- The Art of Assembly Language Randall Hyde 2nd https://2lib.org/book/764350/b2b155
- HLA On-line Documentation and Resources https://www.plantation-productions.com/Webster/HighLevelAsm/
- 32/64-Bit 80X86 Assembly Language Architecture https://2lib.org/book/489436/021948
- 32/64-Bit 80x86 Assembly Language Architecture https://www.leiterman.com/Book80x86.html
- Assembly Language Step-by-step: Programming with DOS and Linux https://2lib.org/book/460443/a13568
- Assembly Language Step-By-Step - Programming with Linux, 3rd edition Wiley, 2009 http://www.staroceans.org/kernel-and-driver/Assembly%20Language%20Step-By-Step%20-%20Programming%20with%20Linux,%203rd%20edition%20(Wiley,%202009,%200470497025).pdf

花指令是代码中插入一些具有干扰性的数据或真实的 CPU 指令，企图干扰逆向工具或人员对敏感代码的识别。

在真实代码中插入一些垃圾代码，同时还保证原有程序的正确执行，而程序无法很好地反编译, 难以理解程序内容，达到混淆视听的效果。

花指令可以执行，也可以不执行，但执行这些 junk-code 对于逆向工程没有任何意义，反而增加工作量。由于这此无效代码会被反汇编器正常识别，所以增加了逆向工程的工作量。

花指令和指令膨胀是相同的反逆向策略，就是增加逆向的工作量和难度，从而达到阻止逆向行为。有针对性的花指令还可以让特定的逆向工具出现异常，不能正确得到反汇编代码。

可执行花指令会在静态或动态分析的过程产生干扰，不可执行花指令则利用反汇编器线性扫描算法的缺陷使得静态分析的时候会看到一些错误的代码。

花指令对 x86 这种 CSIC 特别有效，由于指令的长度不统一，错了一个字节后面可能全错。如果反汇编程序也不够完美，就会经常碰到无法反汇编的机器指令。

病毒或木马还可以通过花指令达到免杀效果，原理就是通过添加花指令改变了特征码，导致防护软件不能识别其特性而失效。

Visual C++ 提供了嵌入汇编以及 emit 伪指令，类似 db, dw，可以在当前位置直接插入任意的数据，这样就可以任意地构造花指令。

    asm-block:
        __asm assembly-instruction ;opt
        __asm { assembly-instruction-list } ;opt

    assembly-instruction-list:
        assembly-instruction ;opt
        assembly-instruction ; assembly-instruction-list ;opt

例如，以下程序使用内嵌汇编，并使用 emit 直接插入 ADD 指令，注意 x86 ADD 指令有 01 02 03 04 05 等形式。

```cpp
#include <iostream>

void main()
{
    _asm
    {
        jmp l2
        _EMIT 0x1
        _EMIT 0x2
        _EMIT 0x3
        _EMIT 0x4
l2:
        mov eax,0x12345678
    }
}
```

以上指令并不能影响 IDA 这样的逆向工具，很明显，在递归下降算法下，可以识别 JMP 指令跳转后的接替者才是指令，而 JMP 后面的不一定是指令：

```sh
.text:00401006                 jmp     short loc_40100C
.text:00401006 ; ---------------------------------------------------------------------------
.text:00401008                 dd 4030201h
.text:0040100C ; ---------------------------------------------------------------------------
.text:0040100C
.text:0040100C loc_40100C:                             ; CODE XREF: _main+6↑j
.text:0040100C                 mov     eax, 12345678h
```

上面两个测试程序可以使用以下 makefile 脚本，执行 nmake junk-code-01 或 make junk-code-02 命令编译：

    LFLAGS=/subsystem:console
    LFLAGS_S=/DEBUG:NONE /RELEASE /OPT:REF /subsystem:console
    CPPFLAGS=/c
    CPPFLAGS_S=/c /Ox /MD /Zl /Zi /W3 /O2 /D WIN32 /D NDEBUG

    all: junk-code-01 junk-code-01_s junk-code-02 junk-code-02_s

    junk-code-01: junk-code-01.obj; link $(LFLAGS) $?
    junk-code-01.obj: junk-code-01.cpp; $(CXX) $(CPPFLAGS) $?

    junk-code-01_s: junk-code-01.obj; link /OUT:$@.exe $(LFLAGS_S) $?
    junk-code-01_s.obj: junk-code-01.cpp; $(CXX) $(CPPFLAGS_S) $?

    junk-code-02: junk-code-02.o; g++ -o $@ $?
    junk-code-02.o: junk-code-02.cpp; g++ -c $?

    junk-code-02_s: junk-code-02.o; g++ -o $@ -s -O3 $?
    junk-code-02_s.o: junk-code-02.cpp; g++ -c -o $@ $?



# 🚩 BSF BSR Bit Scan
- 32/64-BIT 80 x 86 Assembly Language Architecture by James Leiterman - Chapter 5: Bit Wrangling

比特位扫描指令，找源操作数首个 1 出现的位置，将位置索引号赋值给目标操作数：

- BSF(Bit Scan Forward) 低 -> 高
- BSR(Bit Scan Reverse) 高 -> 低

影响标志:

- ZERO = source == 0?  1 : 0;

示范，扫描源操作数 1 的出现的比特位，索引以 1 为起点：

    #include <iostream>
    #include <stdint.h>

    int main()
    {
      uint32_t dwRes;
      uint32_t list[] = {0x0, 0xf1, 0xf2, 0xf4, 0xf8, 0xf0};

      for (uint32_t x = 0; x < 5; x++)
      {
        uint32_t dwSomeValue = list[x];
        // Assumes dwSomeValue is not zero.
        __asm__(
          "bsfl %1,%0\n"
          // "test $0xff, %1\n"
          "jz   L2\n"
          "incl %0\n"
          "L2:"
          : "=r"(dwRes)
          : "r"(dwSomeValue)
          : "cc");

        printf("%u: %u %u\n", x, dwSomeValue, dwRes);
      }
      return 0;
    }

以上代码中 BSF 可能会直接将 EAX 当作源操作数，并且同时又当作目标操作数，所以这样会改变 %1 关联寄存器的数据，后续指令不能通过它来获取源操作数。

值得观察的是数组的初始化与 printf 参数的入栈处理是通过 mov esp 形式实现的。 

```
.text:00401659 ; int __cdecl main(int argc, const char **argv, const char **envp)
.text:00401659                 public _main
.text:00401659 _main           proc near               ; CODE XREF: ___tmainCRTStartup+25D↑p
.text:00401659
.text:00401659 argc            = dword ptr  8
.text:00401659 argv            = dword ptr  0Ch
.text:00401659 envp            = dword ptr  10h
.text:00401659
.text:00401659 ; __unwind {
.text:00401659                 push    ebp
.text:0040165A                 mov     ebp, esp
.text:0040165C                 and     esp, 0FFFFFFF0h
.text:0040165F                 sub     esp, 40h
.text:00401662                 call    ___main
.text:00401667                 mov     dword ptr [esp+1Ch], 0
.text:0040166F                 mov     dword ptr [esp+20h], 0F1h
.text:00401677                 mov     dword ptr [esp+24h], 0F2h
.text:0040167F                 mov     dword ptr [esp+28h], 0F4h
.text:00401687                 mov     dword ptr [esp+2Ch], 0F8h
.text:0040168F                 mov     dword ptr [esp+30h], 0F0h
.text:00401697                 mov     dword ptr [esp+3Ch], 0
.text:0040169F
.text:0040169F loc_40169F:                             ; CODE XREF: _main+95↓j
.text:0040169F                 cmp     dword ptr [esp+3Ch], 4
.text:004016A4                 ja      short loc_4016F0
.text:004016A6                 mov     eax, [esp+3Ch]
.text:004016AA                 mov     eax, [esp+eax*4+1Ch]
.text:004016AE                 mov     [esp+38h], eax
.text:004016B2                 mov     eax, [esp+38h]
.text:004016B6                 bsf     eax, eax
.text:004016B9                 test    eax, 0FFh
.text:004016BE                 jz      short loc_4016C1
.text:004016C0                 inc     eax
.text:004016C1
.text:004016C1 loc_4016C1:                             ; CODE XREF: _main+65↑j
.text:004016C1                 mov     [esp+34h], eax
.text:004016C5                 mov     eax, [esp+34h]
.text:004016C9                 mov     [esp+0Ch], eax
.text:004016CD                 mov     eax, [esp+38h]
.text:004016D1                 mov     [esp+8], eax
.text:004016D5                 mov     eax, [esp+3Ch]
.text:004016D9                 mov     [esp+4], eax
.text:004016DD                 mov     dword ptr [esp], offset aUUU ; "%u: %u %u\n"
.text:004016E4                 call    __ZL6printfPKcz ; printf(char const*,...)
.text:004016E9                 add     dword ptr [esp+3Ch], 1
.text:004016EE                 jmp     short loc_40169F
.text:004016F0 ; ---------------------------------------------------------------------------
.text:004016F0
.text:004016F0 loc_4016F0:                             ; CODE XREF: _main+4B↑j
.text:004016F0                 mov     eax, 0
.text:004016F5                 leave
.text:004016F6                 retn
.text:004016F6 ; } // starts at 401659
.text:004016F6 _main           endp
```

IDA 标记一个函数 `__unwind` 字样，`__try` 和 `__except` 这样的代码段组合是异常处理吗




# 🚩 GDB Guide
- [GDB: The GNU Project Debugger](https://www.gnu.org/software/gdb/documentation/)
- [GDB Text User Interface](https://sourceware.org/gdb/onlinedocs/gdb/TUI.html)
- [A Sample GDB Session](https://sourceware.org/gdb/current/onlinedocs/gdb/Sample-Session.html)
- [Debugging Remote Programs](https://sourceware.org/gdb/current/onlinedocs/gdb/Remote-Debugging.html)
- [The Art of Debugging with GDB, DDD, and Eclipse](https://2lib.org/book/688564/c29aad)
- [Software Development, Design and Coding](https://2lib.org/book/3420268/ea9617)
- [软件调试的艺术: Linux/Unix平台软件调试权威著作](https://2lib.org/book/5640379/db64ac)
- [The Debugger's Handbook](https://2lib.org/book/487559/76e000)
- [How debuggers work](https://eli.thegreenplace.net/2011/01/27/how-debuggers-work-part-2-breakpoints)
- [Computer Science Lab](http://www.computersciencelab.com/index.htm)
- [Intel® 64 and IA-32 Architectures Software Developer Manuals](https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html)
- [[Computer Organization & Systems] This CS107 gdb Reference Card](https://web.stanford.edu/class/cs107/resources/gdb_refcard.pdf)

根据前面的指导搭建好开发环境，安装 GCC 编译套件还有调试工具后，先要掌握 GDB 调试工具的使用。

调试技术，首先要有一个具有调试功能程序，它基于编译技术，可以实现将可执行程序中保存的二进制指令
反向汇编成汇编指令，只要知道程序是基于什么 CPU 架构，并且可执行程序文件的格式符合调试器的要求，
就可以被正确解析。

然后调试器通过获取操作系统提供一定的权限，实现对被调试程序的读写，并按需要插入调试用的代码，
以实现调试功能。

被调试的程序会以另一个进程运行，并且调试器附着于被调试程序之上，以控制其代码的执行，当调试器 
detach 进程后，就意味调试行为的结束。

具体实现在不同的系统上可能会相差很大，Unix 类操作系统，如 Linux 下 GDB 调试器就使用 ptrace 
系统调用，通过这个功能众多且相当复杂的工具，能允许一个进程读写、控制另一个进程的运行，而且可以
监视和渗入到进程内部。

Windows 系统上，通过 CreateProcess API 创建被调试的进程，并设置 DEBUG_PROCESS 或 
DEBUG_ONLY_THIS_PROCESS 标识，还有其它用于调试的 API，如 IsDebuggerPresent 当前进程
可以用来判断是否处于调试状态。

除了系统提供的 Debugging API 之外，CPU 硬件本身提供用于调试的功能更加重要。比如，单步执行，
对应 CPU 标志寄存器的 TF - Trap Flag。当该标志置位，CPU 每执行一条指令就会引发一次中断，
CPU 会随后自动将 TF 清 0。

Intel x86 架构 CPU 提供了 INT3 中断指令，指令码为 0xCC 刚好一个字节，它最常见的用途是
触发一个中断。因为是通过软件触发的，所以称为软中断，soft interupts，这种指令也称为陷阱指令 
trap instruction。另外通过 INT n 可以触发 256 种陷阱门，前 32 个由 CPU 自己保留。

Intel's Architecture software developer's manual 中有详细的说明，INT3 指令主要目的
就是用来调用异常处理例程的。这个单字节形式的指令非常有用，可以用来替换任何指令的第一个字节，而
不会覆盖到其它的操作码，只需要备份一个字节数据。

以下两表包含了 INT 中断指令的各种形式，后一表解析了操作数和编码，Op/En 简写表示：

INT n/INTO/INT3/INT1—Call to Interrupt Procedure

| Opcode | Instruction | Op/En | 64-Bit Mode | Compat/Leg Mode |        Description         |
|--------|-------------|-------|-------------|-----------------|----------------------------|
| CC     | INT3        | ZO    | Valid       | Valid           | 产生断点陷阱                 |
| CD ib  | INT imm8    | I     | Valid       | Valid           | 附带中断向量的软中断          |
| CE     | INTO        | ZO    | Invalid     | Valid           | 溢出陷阱，如果溢出标志置位      |
| F1     | INT1        | ZO    | Valid       | Valid           | Generate debug trap.       |

Instruction Operand Encoding

| Op/En | Operand 1 | Operand 2 | Operand 3 | Operand 4 |
|-------|-----------|-----------|-----------|-----------|
| ZO    | NA        | NA        | NA        | NA        |
| I     | imm8      | NA        | NA N      | A         |

Intel 架构的开发者手册现在已经出版到 4 卷：

01. Volume 1: 描述 Intel® 64 和 IA-32 架构 CPU 的编程环境，包括 x86 体系的发展历史。
02. Volume 2: 包含完整的指令集，描述指令格式，提供指令参考，分为 2A、2B、2C、2D 分卷。
03. Volume 3: 包含完整的系统编译指导，描述 Intel® 64 和 IA-32 架构的操作系统环境支持，
    包括内存管理、保护、任务管理、中断异常处理、多核心支持、热量和电源管理、调试、性能监视、系统
    管理模式、VMX 虚拟机扩展指令、Intel® Virtualization Technology (Intel® VT)、
    Intel® Software Guard Extensions (Intel® SGX)，同样分为 3A、3B、3C、3D 分卷。
04. Volume 4: 描述支持 IA-32 和 Intel® 64 处理器架构的特定型号的寄存器。

官网上提供合集，或分卷文件 PDF，或下载单独分卷共 10 个文件，因为文档是不断修正的，有些内容则
是后来补充的，所以部分 Volume 2 的分卷有可能比 Volume 3 的要新。建议使用 Four-Volume Set
即四个分卷四个文件，按主题组织方便查阅。如果是全集一个文件，内容太多不好定位，60MB 超大文件
也不好处理。

早期的参考资料是 Intel 80386 Programmer's Reference Manual 1986。


使用 gdb 调试程序，需要从以下几个方面来入手：

01. Breakpoints 断点让程序在关键位置中断，并提供时机让调试者跟踪具体代码。
02. Watchpoints 监视点让调试者获知已设置关键内容，提供了一个很好的信息反馈途径。
03. Variables and Expressions 通过变量与表达式获取更直观的结果。
04. Backtrace 调用栈反向追踪，获取代码调用跳转层次关系。
05. Stack Frames 调用栈层信息，获取指定一个调用形成 frame 数据。
06. Controlling Execution 提供了许多命令控制程序的执行，如单步 s，单指令 si，下一步 n 等等。
07. Examining Memory 内存检查可以实现对任意指定地址、数量的内存区域进行反汇编、数据检查，
    并按不同的进制格式显示。

GDB 调试命令参考，使用 help command 查询命令帮助信息。

最基本的 gdb 使用是参考官方文档的 Sample Session，里面包含最基本调试界面的使用，命令使用方法
可以通过 help command 命令去查询，在没有歧义的前提下，命令可以用省略方式表达。如查询断点命令的
使用 `help break` 或者 `h b`，后面这种是省略表达方式。

大多数命令都有相应的简短表达，如 `run` 命令相应等价 `r` 简短形式，直接按回车执行上次的命令，
使用 TAB 可以自动完成命令输入：

01. `run` 运行命令，可以传入任意参数，如 `run 1st 2nd 3rd 4th`，或者将标准输出重定向
    `run > out.txt`。
02. `Ctrl-c` 快捷键结束机器，打断 GDB 当前的指令，如果 QEMU 模拟多 CPU，这会结束它们。
03. `quit` 退出，结构调试。
04. `dir` 添加目录到源代码搜索目录列表，等价命令行参数 -directory=directory。
05. `symbol-file file` 切换调试符号文件，当 GDB 附加到 QEMU 模拟器时，不知道进程的边界，
    就需要用它来指定使用什么符号，对于实验一般使用内核符号文件 obj/kern/kernel。QEMU 将每个
    虚拟 CPU 当作一个 GDB 的线程，可以使用所有 GDB 线程相关命令来操作 QEMU 的虚拟 CPU。
06. `thread n` GDB 强制每刻只关注一个线程或 CPU，通过这个命令可以关注 n 号线程，数值从 0 开始。

要结束调试，直接使用 `quit` 命令。如果不想收到 A debugging session is active 这样的提示，
则需要先通过 `detach` 将已经挂接的程序退出来。


## 🗝 Text User Interface

*Text User Interface*

使用命令行参数 --tui 或 GDB 命令 `tui enabled` 激活 Text User Interface 界面，这是一个
比纯字符界面更好用的仿 GUI 界面。

要使用 TUI 界面功能，需要在编译 GDB 时配置启用 --enable-tui 模块编译选项，才支持开启 TUI 
调试界面。

TUI 是非常好用的字符用户界面，可以使用快捷键：

- C-x 1/2 切换为子窗口个数，对应有源代码和反汇编。
- C-x o 切换活动窗口。
- C-x s 切换单按键模式，再按 `q` 退出 SingleKey 模式。
    - `c` continue
    - `d` down
    - `f` finish
    - `n` next
    - `o` nexti. The shortcut letter ‘o’ stands for “step Over”.
    - `r` run
    - `s` step
    - `i` stepi. The shortcut letter ‘i’ stands for “step Into”.
    - `u` up
    - `v` info locals
    - `w` where
- C-L 刷新屏幕。
- `layout src`：显示源代码窗口
- `layout asm`：显示反汇编窗口
- `layout regs`：显示源代码/反汇编和CPU寄存器窗口
- `layout split`：显示源代码和反汇编窗口

可以设置子窗口布局，使用 info win 查询窗口信息：

    tui new-layout name window weight [window weight…]

    tui new-layout example src 0 asm 1 regs 1 status 1 cmd 1

    tui reg 1


## 🗝 Before debuggging

*Before debuggging* 在开始调试程序之前，需要掌握一些基本知识。

注意 GCC 编译时加 -g 参数产生的额外调试，-O 是优化选项，会剔除调试信息，除非是使用 -Og 调试
体验优化。

有了额外的调试符号能让 gdb 调试工作方便地开展：

- `-g` 产生当前操作系统默认调试信息格式。
- `-ggdb` 产生 GDB 专用的调度信息格式。
- `-g3` 指定调试信息等级为 Level 3：
    - Level 0 不产生调试信息，默认 Level 2，所以 -g0 与 -g 不同。
    - Level 1 产生最小的调试信息，包括函数和外部变量的描述，以及行号表，但没有关于局部变量的信息。
    - Level 3 包含额外的信息，如 macro 定义，部分调试器支持 -g3 生成的宏扩展。
- `-gstabs` 生成 stabs 格式调试信息，但是不包括 gdb 专用的额外调试信息。
- `-gstabs+` 生成 stabs+ 格式调试信息，并且包含 gdb 专用的额外调试信息。

GCC 调试体验优化 `-Og` 在保持 -O0 快速编译和良好调试体验的同时，提供合理的优化级别，禁用其中
会干扰调试的标志。用于生成可调试代码，包含在 -O0 优化级别中，某些被禁用的收集调试信息的编译器通道。

有了 Symbol Table 调试符号表信息后，GDB 通过它来找到二进制程序文件中的指令与源代码的关系。
这时，加载的源文件就可以在调试过程中对应起来。比如，使用 list 命令可以列出指定行号的源代码内容。

如果没有调试符号表，那么 GDB 就找不到程序中的指令对应的代码，即使用有源代码文件也关联不起来。
也就无法使用单步执行 step 或单步跳过 next 这种调试运行方式，因为 GDB 找不到代码文件对应所在
行的源代码，无法在正确的位置设置断点。只能执行指令，stepi 或 nexti。

另外，编译出来的可执行程序一般都会依赖动态链接库，至少依赖操作系统的动态库，如果任何依赖库丢失，
或者不会被定位，就可能导致程序无法启动：

    During startup program exited with code 0xc000007b.

可以使用 ldd 或者 dumpbin 工具查询程序中导入的动态库信息：

    ldd ELF_Format
    dumpbin -imports COFF_PE

Windows 系统 DLL 加载流程按照如下顺序进行：

- 内存中已经加载有同名 DLL，则直接使用；
- 系统 KnownDLLs 列表记录中有同名 DLL，系统直接使用已知 DLL 的拷贝；
- 如果依赖其他 DLL，系统会优先按照名字搜索并加载被依赖的 DLL。

默认系统安全 DLL 搜索模式下，按照如下顺序搜索 DLL：

- 应用程序目录，可通过 GetModuleFileName 获得，程序启动后为固定值。
- Windows 系统目录，一般为 C:\Windows\system32
- Windows 目录，一般为 C:\Windows
- 进程当前工作目录，通过 GetCurrentDirectory 和 SetCurrentDirectory 进行读写。
- PATH 环境变量中的目录，如果多个目录包含同名 DLL，则靠前的优先使用。


GDB 8.1 开始，提供新的 starti 命令，它运行程序并在第一条指令处中断。

GDB 反汇编命令 disassemble 在不知道函数边界，即函数在内存中的起止位置时，也无法进行反汇编。
这时就需要指定内存边界进行反汇编，或者使用内存检查命令 Examine 来进行任意位置的指令查看功能，
例如 `x/5i $pc-1` 将程序计数器所指位置的 5 条指令打印出来。注意，这种指令不一定是程序真正
运行的指令，内存检查命令是只尝试将指定位置的内容按指定的形式打印出来。

>(gdb) disas $pc-2,$pc+32
Dump of assembler code from 0x4018bf to 0x4018e1:
   0x004018bf:  nop
   0x004018c0:  push   %ebp
=> 0x004018c1:  push   %edi
   0x004018c2:  push   %esi
   0x004018c3:  push   %ebx
   0x004018c4:  sub    $0x2c,%esp
   0x004018c7:  mov    0x40702c,%eax
   0x004018cc:  movl   $0x0,0x10(%esp)
   0x004018d4:  movl   $0x0,0x14(%esp)
   0x004018dc:  cmp    $0xbb40e64e,%eax
End of assembler dump.

比如，使用 gcc -s 命令就是生成清理过调试符号的程序文件，Stripped binaries，GDB 就不知道
怎么处理与源代码的关系了。

GDB 官方手册有一章节 Debugging Optimized Code，讲了 Inline Functions 和 
Tail Call Frames 的优化问题。在优化编译的情况下，内联函数的代码会被拷贝到调用它的地方，
而不是通过 call 指令来调用。而尾调用是指，原本 B 函数刚好在其返回前调 C 函数，在无优化的情况下，
就是在一条 ret 指令之前放置了一个 call 指令来调用 C 函数。而优化后的尾调用将不使用 call 指令，
而使用 jump 指令替代。节省了一个 call 指令的复杂调用，避免了堆栈数据的出入处理，和
stack frame 的处理。

只能以单指令的方式执行调试，以下演示如何单步执行调试，并设置自动显示 $pc 寄存器的值，以确定
当前运行的位置：

> (gdb) display $pc
> 1: $pc = (void (*)()) 0x4014e3
> (gdb) s
> Cannot find bounds of current function
> (gdb) n
> Cannot find bounds of current function
> (gdb) si
> 0x004014ed in ?? ()
> 1: $pc = (void (*)()) 0x4014ed
> (gdb) disassemble
> No function contains program counter for selected frame.
> (gdb) x/5i $pc - 1
>    0x4014eb:    add    %al,(%eax)
> => 0x4014ed:    call   0x4018c0
>    0x4014f2:    add    $0xc,%esp
>    0x4014f5:    jmp    0x401170
>    0x4014fa:    nop
> (gdb) si
> 0x004018c0 in ?? ()
> 1: $pc = (void (*)()) 0x4018c0
> (gdb) undisplay 1

在没有源代码和调试符号的情况下调试程序是一种复杂的工作，称为逆向工程 Reverse Engineering，
是一种细分的领域。

在逆向工作中，通常会有 Patching Programs 的需要，使用 `set write on` 打开编辑功能，
或者运行时打开通过命令行参数 -write 打开。

根据不同的操作系统，可执行程序文件也有不同的格式，Windows 使用 PE 格式，而 Linux 通常
使用 ELF 格式。对应有 dumpbin 和 readelf 这些工具来获取程序文件中的信息。也可以使用
objdump 工具来执行反汇编，查询各种信息，包括文件中的符号表，文件头信息等。

> objdump -f -t build\ostrich.exe
> build\ostrich.exe:     file format pei-i386
> architecture: i386, flags 0x00000102:
> EXEC_P, D_PAGED
> start address 0x004014e0
> 
> SYMBOL TABLE:
> no symbols

> (gdb) info files
Symbols from "/spine-runtimes/spine-sfml/build/ostrich.exe".
Local exec file:
        `/spine-runtimes/spine-sfml/build/ostrich.exe', file type pei-i386.
        Entry point: 0x004014e0
        0x00401000 - 0x00406274 is .text
        0x00407000 - 0x00407038 is .data
        0x00408000 - 0x004088d8 is .rdata
        0x00409000 - 0x0040a520 is .eh_fram
        0x0040b000 - 0x0040b428 is .bss
        0x0040c000 - 0x0040c868 is .idata
        0x0040d000 - 0x0040d034 is .CRT
        0x0040e000 - 0x0040e020 is .tls
        0x77aa1000 - 0x77bb9ef2 is .text in C:\Windows\SYSTEM32\ntdll.dll
        ...

这些工具只能获取到一个 Entry point，但这只是一个虚拟内存空间的入口地址。程序真正的入口地址
需要在装入内存后，才会确定下来。虚拟入口地址可以在编译器中设置，编译生成的程序就有对应的虚拟
入口地址。

即使确定下来，这个入口也不是 C/C++ 程序的 main 函数，而是基类库的地址。基础代码需要做一些
与操作系统协调的工作，完成后再调用 main 函数，运行程序主体。

有个省力气的好办法，就是直接使用技术先进的工具，如 IDA、VisualGDB 等等。

当然，程序的入口也是有特征的，不同编译器及操作系统，决定了程序入口需要执行一些固有的系统调用。
MSVC 开发的程序，在调试时总是从 main 或 WinMain 函数开始，但它们不是程序的第一条指令执行处。
在它们被调用前，编译器生成的准备期执行初始化的代码已经做了很多事情。

操作系统加载程序，会根据执行文件内的数据分配相关资源，读取执行文件中的代码和数据到合适的内存单元，
为其准备好运行环境。然后才是执行入口代码，入口代码其实并不是 main 或 WinMain，通常是根据编译时
设置所使用的 C Runtime 基础代码库决定。

在 Windows 平台运行的程序大概分为类，控制台程序和窗体程序，给链接程序指定参数后，会根据程序
类型选择链接的入口函数：

|      链接方式      |    程序类型    | C Runtime 库入口点 |    入口函数    |
|--------------------|----------------|--------------------|----------------|
| /SUBSYSTEM:CONSOLE | 控制台程序     | mainCRTStartup     | main           |
| /SUBSYSTEM:CONSOLE | 控制台程序     | wmainCRTStartup    | wmain          |
| /SUBSYSTEM:WINDOWS | GUI 程序       | WinMainCRTStartup  | WinMain        |
| /SUBSYSTEM:WINDOWS | GUI 程序       | wWinMainCRTStartup | wWinMain       |
| /DLL               | DLL 动态链接库 | _DllMainCRTStartup | DllMain [可选] |

MSVC 编译器可以指定 /NOENTRY 创建没有入口的纯资源 DLL。

以 mainCRTStartup 为例，编译器将 CRT 初始化和终止的库代码插入到程序中，对 C Runtime 库
初始化，初始化的一个重要任务就是初始化 CRT 堆，在此之前不能使用 CRT 的分配内存函数。完成
初始化后，再调用程序入口函数执行程序。

运行库包含了 C Runtime 库入口点代码，设置链接选项后，链接需要其中对应的一个库文件，否则就会
出现链接程序找不到入口的错误。一般来说，环境变量正确设置，MSVC 会自动根据编译、链接参数正确选择
C Runtime 运行库。但是，使用命令行的编译方式有时不能正确使用运行库，这就需要手动指定其中一个。

MSVC 6.0 程序执行 main 函数之前要先调用的函数如下：

- *GetVersion()*
- *_heap_init()*
- *GetCommandLineA()*
- *_crtGetEnvironmentStringsA()*
- *_setargv()*
- *_setenvp()*
- *_cinit()*

这些函数调用结束后就会调用main函数。根据main函数调用的特征，会将3个参数压
入栈内作为函数的参数。


编译器为了支持 C++ 特性，如重载，使用名称变形 `name mangling` 技术。通过反查函数修饰名字
Decorated Name 也能知道对应的原始名字是什么。

C++ 编译时函数名修饰约定规则根据不同的函数调用约定制定，在 `__stdcall` 调用约定规则下，
函数名修饰规则如下：

01. 以**?**标识函数名的开始，后跟函数名；
02. 函数名后面以 **@@YG**、**@@YA** 和 **@@YI** 标识 **__stdcall**、**__cdecl** 
    和 **__fastcall** 调用约定，后跟参数表；
03. 参数表以字母代号表示，如 D 表示字符类型参数；
04. 参数表的第一项为该函数的返回值类型，其后依次为参数的数据类型，指针标识在其所指数据类型前；
05. 参数表后以 **@Z** 标识整个名字的结束，如果该函数无参数无返回，则以 **Z** 标识结束。

| 字母代码 |  对应数据类型 |
|----------|---------------|
| X        | void          |
| D        | char          |
| E        | unsigned char |
| F        | short         |
| H        | int           |
| I        | unsigned int  |
| J        | long          |
| K        | unsigned long |
| M        | float         |
| N        | double        |
| _N       | bool          |
| PA       | 指针          |
| PB       | const指针     |
| U        | struct        |

PA 表示指针，后面的代号表明数据类型，每一个连续相同类型指针以一个**0**代替。

对于 C++ 类成员函数，其调用方式是 **thiscall**。函数的名字修饰与非成员的 C++ 函数稍有不同，
首先就是在函数名字和參数表之间插入 **@class** 字 符标记。其次是參数表的開始标识不同：

- 公有 public 成员函数的标识是 **@@QEA**(@@QAE ???)；
- 保护 protected 成员函数的标识是 **@@IAE**；
- 私有 private 成员函数的标识是 **@@AAE**；
- 假设函数声明使用了 **const** 关键字，则对应的标识应分别为 **@@QBE**，**@@IBE** 和 **@@ABE**；
- 如果参数类型是类实例的引用，则使用 **AAV1**，const 引用则为 **ABV1**；

例如，**?Test@LibTest@@QEAAXXZ** 表示一个类成员函数，名称为 LibTest::Test，结束位置的
Z 表示函数没有参数没有返回值。**@@QEA** 表明是一个公有函数，

    public: void __cdecl LibTest::Test(void) __ptr64


## 🗝 Examining the Symbol Table

*Examining the Symbol Table*，info 是一个多用命令，可以用它来查询各种各校的信息。

载入 Symbol Table 后，就可以用它来查询指定代码行的相关机器代码信息，或者从机器代码地址中得到
相应的源代码信息。

可以给它指定 LINENUM，FILE:LINENUM，FUNCTION，FILE:FUNCTION 或具体地址来查询信息：

> (gdb) info line 9
> Line 9 of "/spine-runtimes/spine-sfml/examples\XMan.cpp"
>    starts at address 0x406430 <HumanBeing::HumanBeing(int)> and ends at 0x406439 <HumanBeing::HumanBeing(int)+9>.
> (gdb)     info line *0x401457
> No line number information available for address 0x401457 <__tmainCRTStartup+743>
> (gdb) info line *0x406430
> Line 9 of "/spine-runtimes/spine-sfml/examples\XMan.cpp"
>    starts at address 0x406430 <HumanBeing::HumanBeing(int)> and ends at 0x406439 <HumanBeing::HumanBeing(int)+9>.
> (gdb) info line main
> Line 43 of "/spine-runtimes/spine-sfml/examples\XMan.cpp" starts at address 0x401630 <main()>
>    and ends at 0x401642 <main()+18>.
> (gdb) info symbol *$pc
> main + 43 in section .text of /spine-runtimes/spine-sfml/build\xman.exe
> (gdb) info address main
> Symbol "main()" is a function at address 0x401630.

- `info address symbol` 查询指定符号对应的地址。
- `info symbol address` 查询指定地址的对应符号。
- `info functions [-q] [-n] [-t type_regexp] [regexp]` 查询函数信息。
- `info variables [-q] [-n] [-t type_regexp] [regexp]` 查询变量信息。
- `info sources` 查询当前源代码文件信息。
- `info sources [-dirname | -basename] [--] [regexp]` 查询所有源代码文件信息。
- `demangle [-l language] [--] name` 查询指定地址的对应符号。

- `info types [-q] [regexp]` 查询类型信息；
- `ptype[/FLAGS] TYPE | EXPRESSION` 打印类型定义，有效 FLAGS 参数如下：
    - */r* 原始格式，不替换 typedefs。
    - */m* 不打印类成员。
    - */M* 打印类成员。
    - */t* 不打印内部类形。
    - */T* 打印内部类形。

- `info watchpoints` 查询断点 breakpoints、监视点 watchpoints、捕获点 catchpoints。
- `info threads` 列表所有线程或 CPU，包括它们的状态，(active or halted)，以及当前进入的函数。
- `info registers` 在运行调试中查询寄存器信息，各种寄存器, eip, eflags, 包括段选择器等。
- `info reg cs ds es ss ` 运行调试中查询指定的段寄存器。


## 🗝 Run GNU debugger

*GNU debugger* 命令行参考：

    gdb [options] [executable-file [core-file or process-id]]
    gdb [options] --args executable-file [inferior-arguments ...]

    Selection of debuggee and its files:

      --args             Arguments after executable-file are passed to inferior
      --core=COREFILE    Analyze the core dump COREFILE.
      --exec=EXECFILE    Use EXECFILE as the executable.
      --pid=PID          Attach to running process PID.
      --directory=DIR    Search for source files in DIR.
      --se=FILE          Use FILE as symbol file and executable file.
      --symbols=SYMFILE  Read symbols from SYMFILE.
      --readnow          Fully read symbol files on first access.
      --write            Set writing into executable and core files.

GDB 支持远程调试和本地调式两种工作模式，在本地调试模式中，可以指定要调试的程序，或者已经运行中
的程序进程 PID：

> gdb program
gdb program core
gdb program 1234
gdb -p 1234

调试信息主要来自编译器编译程序时生成的信息，或者使用核心转储文件 (core dumped)。

当程序运行过程中出现错误停止运行，会产生 core 文件，又叫核心转储 (core dumped)，它是程序
运行状态的内存映象。使用 gdb 调试 core 文件，可以帮助我们快速定位程序出现段错误的位置。

核心转储的 Core Memory 是指磁心贮存器，旧式的线圈内存，主要是由王安 Wang Laboratories 
在 1950 年主导发明的一种技术，并成为当时的标准存储技术，技术领先长达 20 多年。如今，半导体工业
澎勃发展，已经没有人用磁心贮存器了。不过，作为当时领先的技术，现在许多情况下，还是把记忆体叫作 Core。

当程序访问的内存超出了系统给定的内存空间，就会产生 Segmentation fault，因此，段错误产生的
情况主要有： 

- 访问不存在的内存地址； 
- 访问系统保护的内存地址； 
- 数组访问越界等。

GDB 允许在一个会话中运行和调试多个程序。此外，某些系统上的 GDB 可能允许您同时运行多个程序，
甚至在不同的远程系统上同时调试多个程序。在最常见的情况下，可以在多个进程中的每个进程中有多个
执行线程，这些线程从多个可执行文件启动，运行在不同的机器上。

而 inferior 就是 GDB 用来表示每个程序执行的状态的对象，它通常代表一个进程。但是，也适用于
没有进程的目标。Inferior 可以在进程运行之前创建，也可以在进程退出后保留。每个 Inferior 也
会有自己唯一 ID，但不同于进程 ID 的唯一标识符。通常有自己独特的地址空间，尽管，一些嵌入式
目标可能有几个 inferior 在同一个地址空间的不同部分运行。每个 inferior 可能轮流在其内部
运行多个线程。

- `info inferiors` 查询当前 gdb 管理中的受调试程序。
- `info connections` 打印 gdb 目前管理中的目标连接。

进入 GDB 后，可以使用 exec 命令来加载待调试的目标程序，并使用 file 命令来加载调试符号表。

开始执行程序时有一组命令用来控制执行，部分命令可以指定循环次数：

- `run` 或 r 启动程序；
- `next` 或 n 单步执行跳过函数；
- `step` 或 s 单步执行进入函数；
- `until` 用来退出循环体；
- `finish` 用来完成函数调用；
- `continue` 或 c 继续执行直到下一个中断为止。
- `jump` 命令则可以用来改变运行流程，或者使用 `call` 来强制执行。
- 另外回车功能可以用来重复上一次的动作，或者使用 TAB 来自动完成命令输入。

GDB 运行时可以选择加载配置文件： 

>gdb -n -x .gdbinit

01. `-symbols file` or `-s file` 从文件装入调试用的 symbol table。
02. `-exec file` or `-e file` 将文件作为可执行文件加载，以便在适当时执行，并与核心转储
    文件相结合进行纯数据检查。
03. `-se file` 将文件作为可执行程序并从中读取 symbol table。
04. `-core file` or `-c file` 加载 core dump 内存转储文件。
05. `-pid number` or `-p number` 连接到运行中的进程以调戏它，相当于使用 attach 命令。
06. `-directory directory` or `-d directory` 将目录添加到搜索路径列表中，以定位源代码
    或脚本文件。
07. `-write` 打开可执行程序及 Core Dump 文件的读写功能，用于给程序打补丁 Patching Programs。
08. `-command file` or `-x file` 执行文件中的 GDB 命令。
09. `-eval-command` or `-ex command` 执行单条 gdb 命令，可多次使用以执行多条命令。
10. `-init-command file` or `-ix file` 在加载 .gdbinit 文件之后以及 inferior 之前，
    执行命令脚本。
11. `gdb -ex 'target sim' -ex 'load' -x setbreakpoints -ex 'run' a.out` 示范
    执行单条命令和命令脚本。
12. `source [-s] [-v] FILE` 加载脚本文件并执行，-s 在搜索路径中的脚本文件，-v 打印命令回响。

进入 gdb 界面后，也可以对搜索目录列表进行配置，或者加载待调试文件及符号文件：

- `show directories` 打印当前的源代码文件搜索目录列表；
- `dir dirname ...` 添加目录到搜索路径列表中。
- `dir` 重置搜索目录路径列表，默认值为 *$cdir;$cwd*。
- `info source` 运行调试后，查询当前加载的源代码文件。
- `info files` 显示当前正在调试的目标的整个堆栈，包括程序文件、核心转储文件、进程以及符号文件名。

搜索路径列表使用 : 或 ; 作为分隔符，在 Windows 平台下使用后者，因为冒号用作路径。

默认的搜索目录只有两个，在搜索路径中以特殊的字符表示：

- *$cdir* 是指 compilation directory，即编译器输出的目录。
- *$cwd* 是指程序的当前工作目录 current working directory。


## 🗝 Patching Programs

GDB 可以用于给程序打补丁，执行通过命令行参数`-write` 或命令 `set write on` 打开可执行程序
及 Core Dump 文件的读写功能。在逆向工作中，通常会有 Patching Programs 的需要。

测试中发生 `set write on` 或通过命令行参数 -write 启用不生效，依然 Cannot access memory。

> (gdb) set write on
> (gdb) set {char *}0x40806b = "AOI!"
> Cannot access memory at address 0x40806b

Say you have the following program:

```cpp
int main(void){
    char[] person = "Bob";
    char[] p2 = "Alice";

    printf("Hello %s\n");
}
```

使用 GDB 设置命令来修改数据，先在 main 函数打好断点，执行调试后再写入数据，可以直接指定地址，
也可以通过符号获取相应的地址：

> (gdb) b main
> Breakpoint 1 at 0x4016fd: file example.cpp, line 1.
> (gdb) r
> Starting program: example.exe
> Thread 1 hit Breakpoint 1, main () at example.cpp:1
> (gdb) p/x main::person
> $1 = 0x40806b
> (gdb) x/s main::person
> 0x40806b:       "Bob"
> (gdb) p/s (char *)0x40806b
> $2 = 0x40806b "Bob"
> (gdb) p *(char*)0x40806b@3
> $15 = "Bob"
> (gdb) set main::person = { 'S', 'a', 'm', 0x00 }
> (gdb) set main::person = "Sam"
> (gdb) set {char [4]} 0x40806b = "Ace"

要在程序执行到相应位置，变量的地址确定时写入数据：

> (gdb) p/x &main::person
> $25 = 0x63fe91
> (gdb) p/s (char *)0x63fe91
> $26 = 0x63fe91 "Done!\n"
> (gdb) set (char[4])*0x63fe91 = "boB"
> (gdb) set {char[5]}0x63fe91 = "boB!"

指定显式地址时，花括号定义类型会对数值显示的地址进行解引用，而圆括号不会，注意使用解引用处理。

预初始数据区不可写入：

> (gdb) p/x (char*)main::ai
> $33 = 0x40806b
> (gdb) p/s (char*)main::ai
> $34 = 0x40806b "AI"
> (gdb) set (char[3])*main::ai = "ia"
> Cannot access memory at address 0x40806b



## 🗝 Continuing and stepping

*Continuing and stepping* 单步调试命令：

- `continue [ignore-count]` 继续执行直到下一个断点，ignore-count 指定跳过步数。
- `c [ignore-count]` 继续执行命令简写形式。
- `fg [ignore-count]` 单步并使用程序以 foreground 方式运行。 
- `set step-mode on` 设置单步模式，在函数第一条指令前暂停，没有调试符号的时候方便探测函数指令而不是跳过。
- `step [count]` 单步执行一行代码，step in，可以指定行数。
- `next [count]` 单步跳过函数执行一行代码，执行当前 stack frame 下一行代码，step over，可以指定行数。
- `finish` 完成当前函数的执行，打印返回值，如果有的话。
- `until` 继续运行，直到到达当前 stack frame 通过当前行的源行。
- `until location` 继续运行到指定位置，location 是断点指令可以接收的位置形式。
- `stepi [count]` 执行一条机制指令，经常和自动显示命令 `display/i $pc` 结合使用，自动打印当前指令。
- `nexti [count]` 执行一条机制指令，如果是函数调用指令，执行直到函数返回。

## 🗝 Breakpoints

*Breakpoints* 断点设置，包含 watchpoints 和 catchpoints，如函数或指定文件行位置，
指令寄存器 $eip 等于指定的地址时会中断程序运行：

    break [PROBE_MODIFIER] [LOCATION] [thread THREADNUM] [if CONDITION]

- *PROBE_MODIFIER* 修饰符如果命令要放在探测点上，则应该使用修饰符；
    - `-probe` (for a generic, automatically guessed probe type)
    - `-probe-stap` (for a SystemTap probe) 
    - `-probe-dtrace` (for a DTrace probe).
- *LOCATION* 指定位置，可以是行号、地址或显式指定各个参数；
- *CONDITION* 布尔表达式，配合不同条件，可以同一位置可设置多断点；
- *THREADNUM* 指定线程号，通过 `info threads` 命令查询；

指定位置使用行号规范，即使用冒号分隔符，如 file:linenum：

- `break` 没有指定位置，给当前 stack frame 的执行地址下断点。
- `b function` 给当前文件的函数下断点，如 `b main`，`b A::B::func()`。
- `b function(types)` 给 C++ 重载函数下断点，不指定参数类型会出现菜单进行选择。
- `b linenum` 给当前文件的指定行下断点。
- `b file:linenum` 给指定文件及行号下断点。
- `b file:label` 给指定文件及标签下断点。
- `b file:function` 给指定文件中的函数下断点。
- `b -source factorial.c --function fact -label the_top` 显式指定各种位置。
- `b *main + 4` 给指定的地址下断点，使用 * 符号开头，指定符号地址加偏移。
- `b *0x4061c2` 直接指定内存地址下断点。
- `b +offset` 往前 offset 行下断点。
- `b -offset` 往后 offset 行下断点。

- `hbreak args` 设置硬件辅助的断点，args 参数和 break 命令一致。
- `rbreak regex` 配合正则表达式给所有匹配的函数设置断点，设置无条件断点，匹配的断点会打印出来。
- `tbreak args` 单次有效的断点，击中断点后会自动删除。
- `thbreak args` 单次有效的硬件辅助断点，击中断点后自动删除。

硬件辅助断点主要是为 EPROM/ROM 调试设备使用，SPARClite DSU 和部分 x86 嵌入式设备可以提供
陷阱门，如访问特定数据时或调试寄存器指定地址的指令。缺点是，硬件资源有限，像 DSU 同时只提供两个
数据中断。

正则表达式使用的是类似 grep 工具使用的规则，如丝 `foo*` 匹配所有包含 fo 开头，并且后有任意个
字符 o 的函数。要仅匹配以 foo 开头的函数，使用 `^foo.*`。调试 C++ 程序时，rbreak 设置非
类成员的重载函数的断点很有用。

断点可以打在 ELF 可执行程序文件的入口点 `b _start`，这个入口是编译器、链接程序生成程序时
就指定的，但是这不一定是入口函数。

另外，说说 x86 的 segment:offset 这种实地址表达方式，这种非常规地址表达在 gdb 中并不支持，
需要指定一个线性地址。

断点条件设置格式参考：

    b file.cpp:26 if var == value

当断点位置到达时，就执行条件表达式，成立时中断。

对于已经设置的断点可以使用 info b 命令来检查，或者透过 `clear` 来清除断点，d 或 `delete` 
删除所有断点。    
    
    (gdb) info b
    (gdb) clear 26
    (gdb) clear main

    delete bookmark -- Delete a bookmark from the bookmark list.
    delete breakpoints -- Delete all or some breakpoints or auto-display expressions.
    delete checkpoint -- Delete a checkpoint (experimental).
    delete display -- Cancel some expressions to be displayed when program stops.
    delete mem -- Delete memory region.
    delete tracepoints -- Delete specified tracepoints.
    delete tvariable -- Delete one or more trace state variables.

Setting watchpoints 设置监视点，当监视的值变动时就会中断执行，不需要指定具体的中断地址。
根据不同的系统，这可能是软件或硬件中断实现。在单步执行时，每次都需要进行表达式值，这可能很
浪费时间。但是，在不知道程序的哪个部分是祸根的境地，是有价值的。

在 HP-UX, Linux 和部分 x86 机器上，GDB 支持硬件监视点，这不会导致运行变慢。

- `watch expr` 设置一个监视表达式，当其值改变时 GDB 会中断程序执行。
- `rwatch expr` 设置一个监视表达式，当程序读取时 GDB 会中断程序执行。
- `awatch expr` 设置一个监视表达式，当程序读写时 GDB 会中断程序执行。
- `info watchpoints` 查询已经设置的监视点。

监视点 Watchpoint 是很重要的一种调试工具，它不同于断点，它只会在代码执行到监视点时或监视的
表达式内容有变化时中断，将监视内容自动打印出来，供调试者参考。

监视点的设定不依赖于断点的位置，但是与变量的作用域有关，也就是说，要设置监视点必须在程序运行时
才可设置。设置监视点的命令有 3 个，watch 监视，rwatch 读监视以及 awatch 表达式监视，可以
使用 `apropos watch` 命令查询所有关监视点的命令。

例如，以下简单设置监视的目标为寄存器和内存某个地址的内容，监视 EIP，那么每次执行指令后都会将
相应的值打印出来：

    watch $eip
    watch *0xf000e05c

    (r/a)watch var
    (r/a)watch *0xdeadbeef
    (r/a)watch *(int *)0xdeadbeef
    (r/a)watch -l *(int *)0xdeadbeef

监视变量 var 并在值改变、被读取时中断。监视内存地址，注意使用 * 号，当该地址的内容变化、被读取时中断。

还可以监视指定类型的指针，`(int *)` 表示一个整形数据指针，当该地址的中的 int 指针指向的内容
变化、被读取时中断，使用 -l 选项，会同时监视表达式本身以及表达式指向的内容。

还可以设置观测点来实现程序中断，观测点有 watch 指定的表达式有变化就中断, rwatch 指定表达式
被读取时中断, awwatch 指定表达式被赋值或有写入动作时中断。

目前，awatch 和 rwatch 命令只能设置硬件监视点，因为不通过每个指令的检测就不能发现那些不改变
数据的访问行为。但 GDB 没有实现，因为在不支持硬件监视点的时候使用，就可能出现提示。如果设置
太多监视点，就会提示不能插入监视点。

    Expression cannot be implemented with read/access watchpoint.
    Hardware watchpoint num: Could not insert watchpoint

Setting catchpoints 设置捕获点可以让调试器在特定的程序事件中断执行，如 C++ 异常机制，加载
共享库行为等等。

- `catch event` 在以下事件发生时中断：
    - C++ 异常机制动作 `throw`, `catch`；
    - HP-UX 系统上执行 `exec`, `fork`, `vfork`；
    - `load [libname]` 加载共享库行为，可以指定特定库，当前只支持 HP-UX 系统。
    - `unload [libname]` 卸载共享库行为，可以指定特定库，当前只支持 HP-UX 系统。
- `tcatch event` 单次事件，第一次捕获事件后，捕获点会自动删除。

目前，GDB 在 C++ 异常处理有限制 (catch throw 和 catch catch) :

01. 交互式调用函数，GDB 会在函数完成执行时交出控制权。但如果调用抛出异常，这可能导致控制权不能
    正常返回，使用程序卡死，或继承运行直到击中断点，或 GDB 捕获到一个在监听的系统信号。即
    设置了捕获点，因为在交互调用时它是禁用的。
02. 不可以交互地抛出异常。
03. 不可以交互地设置异常处理器。

异常捕获并非最好的调试方式，知道异常抛出的位置，就可以在异常处理程序执行前中断它。这样就可以查看
堆栈，而不是圈入乱麻之中。如果是在异常处理程序中下断点，这就自找麻烦，很难发现是哪里抛出了异常。

要想在异常处理被执行前中断，需要知道异常的实现。GNU C++ 中的异常是通过 `__raise_exception` 
函数实现的，应该在此设置断点：

```c
/* addr is where the exception identifier is stored.
   id is the exception identifier.  */
void __raise_exception (void **addr, void *id);
```

查询断点信息，包括点类型，地址，是否设置在击中时禁用，是否启用，以及击中次数：

- `info breakpoints [n]`
- `info break [n]`
- `info watchpoints [n]`

Break conditions 中断条件只有在下断点时设置的条件满足时才会中断程序的执行。这与使用断言进行
程序验证相反，断言只有条件不成立时停止执行。

条件也可以在 watchpoints 使用，watch 命令可以使用 if，但 catch 命令不可以。通常，监视点
不需要设置条件，监视点会侦测表达式的值是否是感兴趣的那个值。

条件中断可以有副作用，可以调用程序的函数。

- `condition bnum expr` 为断点、监视点、捕获点设置中断条件，条件为 true 时才会中断执行。
- `condition bnum` 移除相应断点、监视点、捕获点的中断条件。
- `ignore bnum count` 设置忽略计数，如果 count 值为 n，则断点会在程序到达它 n + 1 次时停止。。

GDB 会对表达式中使用到的符号进行检测，但不会执行表达式，包括 break 命令中的 if 条件表达式也
不会在设置时执行。

断点条件的一种特殊情况是，仅当断点达到一定次数时才停止。这非常有用，用断点的忽略计数可以实现。
每个断点都有一个忽略计数，它是一个整数。如果，程序到达的断点的忽略计数为正，就会进行递减，然后继续。
不会对条件进判断，只有到达 0 值时才会检查中断条件。使用 `$foo-- <= 0` 这样的中断条件就可以
模拟忽略计数器的作用。


Breakpoint command lists 给指定的中断指定一组要执行的命令，击中相应中断时执行：

    commands [bnum]
    ... command-list ...
    end

    break foo if x>0
    commands
    silent
    printf "x is %d\n",x
    cont
    end

## 🗝 Examining the Stack

*Examining the Stack* 检查程序运行堆栈的帧，每到函数调用时，内存中中需要用一个帖记录当前函数的上下文信息。堆栈所在内存分分割为帧的形式，保存相关数据、局部变量、寄存器状态等。GDB 提供 frame 命令来选择堆栈帧。

程序运行时只有一个 initial 帧也叫 outermost 帧对应 main 函数，当调用其它函数时就创建一个新的帧，当前程序执行所在的帧是 innermost 帧。每个帧都一个地址确定，每个帧除了数据也包含自身的地址。每种计算机都有一个选择一个字节作为帧地址的约定，通常使用 frame pointer register 来保存当前选择的帧地址。程序计数器 Program Counter 即 $pc 寄存器，它的值指向当前帧要返回的地址，当前帧返回时，它就会被CPU 指令 pop 恢复到寄存器中。

- `frame n` 选择第 n 号帧，0 号表示最内部的帖，即当前程序执行的帧。
- `frame addr` 选择堆栈内存地址相关的帧。
- `up n` 向上移动到 n 个帧，正数向外，向较高帧号前进，向较早的存在的帧，默认 n 为 1。
- `down n` 在堆栈中向下移动 n 帧。正数向内，向较低的帧编号前进，向最近创建的帧前进，默认 n 为 1。
- `up-silently n` 静默模式移动。
- `down-silently n` 静默模式移动。

移动帧时，命令会打印两行信息，如果不是静默模式移动。内容是帧号、函数名、参数及源文件对应的行号，后一行为对应代码。

Backtraces 回溯命令用来检查帧的状态，以确定程序执行到什么位置。打印信息中，每一行显示一个帧的信息，往下增加帧序号。

- `backtrace` 打印完整的堆栈帧。
- `info stack` 回溯命令别名，功能同上。
- `bt n` 打印内向最近的 n 个帧。
- `bt -n` 打印外向最近的 n 个帧。

- `frame` 仅打印简要的帧信息。
- `info frame` 打印详尽的帧信息，包括其地址、上下帧地址、对应源代码、帧参数地址、帧局部变量地址，以及 $pc。
- `info f addr` 打印目标地址所在帧的详细信息。
- `info args` 打印当前帧的传入参数。
- `info locals` 打印当前帧的局部变量。
- `info catch` 打包当前帧的异常捕捉处理器。

## 🗝 Automatic display

*Automatic display* 在程序中断时自动显示指定表达式信息：

- `display` 或 `info display` 查询当前设置的自动表达式。
- `display expr` 设置一条自动表达式。
- `display/fmt expr` 设置一条带格式的自动表达式。
- `display/fmt addr` 设置一条带格式的自动表达式。
- `disable display dnums...` 禁用指定自动表达式。
- `enable display dnums...` 启用指定自动表达式。
- `undisplay dnums...` 删除指定自动表达式。
- `delete display` 删除全部自动表达式。

使用单位或 `i` 和 `s` 两种 x 命令格式时调用 x 命令，否则使用 print 命令，还可以给格式参数设置单位信息。如果自动表达式中含有局部变量，则会在超出作用域时自动禁用。

如打印程序计数器指向的指令 `display/4i $pc`，注意，像这样带偏移值的表达式 `display/i $pc-2` 可以得不到正确指令，因为不能确定上一条指令或下一条指令的字节偏移量。


## 🗝 Commands for controlled output

*Commands for controlled output* 控制生成输出的命令：在执行命令时，标准的 GDB 输出被禁止，唯一输出的是命令显式定义中的打印的内容。以下是专用控制输出的命令：

- echo text 打印字符串，可以使用 C 语言的转义字符，如 `\n` 打印换行符，也可以使用末尾的 \ 来拼接多行内容。用来打印开头或末尾含空格的内容很有用，因为默认会处理掉前导或后缀的空格。
- output expression 打印表达式的值，只有值没有其它内容，没有默认的 `$nn` 也没有换行。
- output/fmt expression 带格式表达式值打印。
- printf string, expressions... 格式化字符串、表达式打印命令，像 C 语言的函数一样。

        printf "foo, bar-foo = 0x%x, 0x%x\n", foo, bar-foo


## 🗝 Output formats

*Output formats* 输出内容格式与单位，GDB 默认根据数据类型以不同方式打印，x 或 print 等命令可以指定格式：

- `/x` 将 bits 作为整数以十六进制打印，如 `p/x $pc`；
- `/d` 带符号十进制打印整数；
- `/o` 八进制打印整数；
- `/t` 二进制打印整数，t 是 two 的缩写；
- `/f` 将 bits 作为浮点数打印。
- `/u` 按无符号十进制打印整数；
- `/a` 作为地址打印，hex 加偏移值格式，如 `p/a 0x54320` 输出类似 *0x54320 <_initialize_vx+396>*；
- `/c` 字符
- `/s` 字符串
- `/i` 显示汇编指令，将内存数据作为 CPU 指令解析
- `/z` 前缀 0 的十六进制
- `b` Bytes.
- `h` Halfwords (two bytes).
- `w` Words (four bytes).
- `g` Giant words (eight bytes)

## 🗝 Program variables

*Program variables* 程序变量使用，根据程序运行时的 stack frame，程序变量的作用域的不同，全局的或局部的，可用的变量也不同。并且，当前选择的 stack frame 也会影响内存的数据。

使用 `file::variable` 可以访问文件作用域下的静态变量，或者函数内部变量 `function::variable`。注意，双冒号不是 C++ 中的作用域运算符，尽管 GDB 支持。

- `p 'hello.cpp'::main` 打印 hello.cpp 文件中的 main 函数，注意因为文件名有点而使用单引号。
- `p 'hello.cpp'::main::xman` 打印 hello.cpp 文件中的 main 函数内的 xman 变量。
- `p main::xman` 打印 main 函数内的 xman 变量。

如果出现错误提示：No symbol "foo" in current context，解决方法是不要使用优化编译，使用带调试符号的编译器选项，如 GNU C/C++ compiler 支持 `-gstabs` 选项以产生带调试信息的 COFF 文件，也可以使用 DWARF2 (`-gdwarf-2`)。

## 🗝 Convenience variables

*Convenience variables* 便利变量，使用前缀 `$` 来定义便利变量符号，没有固定类型，可以使用 set 命令进行管理。在  HP-UX 系统中，GDB 会优先搜索用户或系统名称，其次才是便利变量。

- `show convenience` 查询变量信息。
- `set $foo = *object_ptr` 将对象引用的值保存到 $foo。
- `set $i = 0` 设置一个数值。
- `print bar[$i++]->contents` 使用便利变量。
- `$_` 内置变量，执行 x 命令时会设置为最后检查的内存地址，默认类型是 void * 。
- `$__` 内置变量，执行 x 命令时会将类型保存到这个变量。
- `$_exitcode` 被调试程序退出时的状态代码。
- `set $eax=0` 设置修改寄存器的值：

## 🗝 Value history

*Value history* 是 GDB 执行命令时的输出记录，每个记录使用一个后缀序号的变量。

便利变量及历史值使用示范：

- `$` 是最后一次输出的内容，等于 `$$0`，如 `p *$` 打印最后一次输出的内容；
- `$$` 最后输出的前一个内容，等于 `$$1`；
- `$$n` 最后输出的第前 n 个内容，如 `$$2` 是 `$$` 的前一个内容。
- `p *$.next` 链式表达，假设 $ 是指向一个结构体并含有 next 成员指针。
- `show values [n]` 查询历史值，以 n 序号为中心。
- `show values +` 查询最近 10 个历史值。

## 🗝 Artificial arrays

*Artificial arrays* 数组美化，使用 `@` 二元运算符，用于将连续的内存数据当作数组打印，如 FOO@NUM 这样的格式，FOO 是内存数据对象，还有便利形式 `(type[])value`，GDB 会执行 `sizeof(value)/sizeof(type)` 运算求解。假定以下数组定义：

```cpp
int main(){
    int len = 3;
    char *ai = (char *) malloc (len * sizeof (char));
    ai = "AI";
}
```
gdb example.exe -write

- `p *ai@len` 左侧的 ai 必须是内存中的数据。
- `p/x (short[2])0x12345678` 打印两个短整形数据，输出类似 *{0x1234, 0x5678}*。

以下测试 GDB 在不同的打印方式下对一个指针的处理：

> (gdb) p/s main::ai
> $1 = 0x408072 "AI"
> (gdb) p/s 0x408072
> $2 = 4227186
> (gdb) p/s (char *)0x408072
> $3 = 0x408072 "AI"
> (gdb) p/s (char [])(0x408072)
> $4 = "r\200@"
> (gdb) p/s (char [])*(0x408072)
> $41 = "AI\000"

> (gdb) p/c main::ai
> $6 = 114 'r'
> (gdb) p/c main::array+1
> $7 = 115 's'
> (gdb) p/x main::ai
> $9 = 0x408072
> (gdb) p/x 0x408072
> $10 = 0x408072
> (gdb) p/x *0x408072
> $11 = 0x4941
> (gdb) p/c *main::ai
> $12 = 'A'
> (gdb) p/c *(main::ai+1)
> $13 = 'I'


将 ai 这个指针当作字符串来使用是正确的，因为本身就是指向字符串，`p/s main::ai` 这个命令输出字符串的同时，还给出了相应的地址。

如果直接给 p/s 命令传地址会怎么样？可以看到，`p/s 0x408072` 命令只是将这个地址作为整数以十进制打印出来而已。这是因为，字符串打印需要接收一个字符串指针，而直接使用这个地址值，它只是一个数值而不会被看作是指针。

所以需要告诉 GDB 这个数值是一个指针，使用像 C 语言一样的类型转换 `(char *)0x408072`，然后就可以正确处理了。

如果将 0x408072 这个地址声明为字符数组会怎么处理呢？命令 `p/s (char [])(0x408072)` 打印出来的是乱码一样的东西，这里有个很容易被忽视的细节，就是这个地址本身是一个指针的地址，这个地址里的数据就是指针的值，它才是真正的数据。所以需要进行一次解引用才能取到字符串的首地址，然后，才能将它当字符数组使用。

那么，为何直接使用 main::ai 这个符号不用设置类型呢？这里因为符号表本身就有它的类型信息。

另一个差别，花括号定义类型会对数值显示的地址进行解引用，而圆括号不会：

> (gdb) p/s {char*}0x408072
> $7 = 0x4941 <error: Cannot access memory at address 0x4941>
> (gdb) p/s (char*)0x408072
> $8 = 0x408072 "AI"

如果将，这个符号当作字符来看待呢？那么 `p/c main::ai` 命令将它当成字符来处理，就打印出了一个‘r’，这是因为指针的值是 0x408072，最后一个字节就是 0x72 对应 ‘r’。为了证实它，用第二条命令 `p/c main::array+1` 打印出来一个‘s’。

要想获取将指针的字符，就像 C 语言一样使用解引用操作符号，`*main::ai`，`*(main::ai+1)` 分别对应了第一、二个字符。这种表达式中，可以直接用 0x408072 这个数值替换符合，因为解决引用之后只需要取出所指向的第一个字节的数据。如果是字符串打印，就不能这样处理，一定要加类型转换。

后续的 `p/x main::ai` 或 `p/x 0x408072` 命令将它当作整数按十六进制打印，也没错，就是将地址打印出来了。而 `p/x *0x408072` 命令则是将它解引用后，即获取到这个内存地址的数据后再作为整数打印出来，也就是 "AI" 对应的 ASCII 码。

分析完前面的指针与 GDB 的处理方式后，再来熟悉一下指针、变量与数组。

首先，要区分普通变量和指针，虽然在编译语言中它们是两种不同的东西，但本质上没有什么差别。指针就存储内存地址的，而变量是存储一个值，如果将指针存储的内存地址当作普通的整形数值来看待，那么指针就相当于一个整形变量。如果说事实上指针和普通变量区别是巨大的，那就是因为指针的功能或使用场合、使用方式的不同决定的。特别是指针在内存管理中的应用，这就是指针和变量产生巨大差别的原因。

而数组和变量的区别就在于数组是连续的数据，如果数组只有一个元素，那么它和普通变量没有差别。这种情况下，数组名可以理解为一个变量名，变量名也可以理解指向第一个元素的数组名！另外一个区别是，数组的操作上的区别，毕竟和变量存储的内容在连续性上有差别。所以数组额外多了下标运算，它存在的意义在于，可以根据数组名和元素占据字节的大小来进行一个地址偏移的运算，仅此而以。

```cpp
  char matrix = 'm';
  char a = 'a';
  char r = 'r';
  char i = 'i';
  char x = 'x';
```

通常，Multi-dimensional Arrays，如两维数组表示为 `[row][col]`，三维数据可以表示为 `[plane][row][col]`，如果对三维数组指针进行运算，运算表达式为 `*(*(*(im+plane)+row)+col)`，二维也类似，`*(*(im+row)+col)`先计算的永远是最左侧的方括号。

当然，如果不怕混淆，直接使用第后一维偏移也可以访问所有元素，比如二维数组，只要 offset 足够大，`*(*im+offset)` 这样的就只可以访问到所有元素，使用一个乘数也可以将 offset 转换成其它维度的指针运算，没有本质区别。

前面的代码片断中，还有一点需要注意，作为地址使用 `im` 可以直接通过 printf 打印出来，但是如果需要取值，就必需通过 * 解引用，多少维的数据就有多少个 * 进行解引用，这是编译器约定的规则，否则它就是一个指针，一个地址，而不是一个值。并且，每一次解引用后，得到的地址的维度信息都不一样，所以 + - 运算的意义也不同。

可以用以下图表简化理解：

      🔴im                im+1                     *(im+2)+1
       |                   |                         |
       |                   |                         |
       V                   V                         V
    { 🔴1  🔴2  🔴3 }, { 🔴4  🔴5  🔴6 }, { 🔴7  🔴8  🔴9 }  <-- Memory Cell
    row = 0              row = 1             row = 2


应该注意到，除了 im 变量，像 `im+1` 或 `*(im+2)+1` 并没有加圆点，表示编译器没有为它们分配相应的内存，尽管它们作为表达式确实会产生相应的代码并占据一定内存。

从上面的示意图中，应该理解到，多维数组本质和一维数组是没有区别的，就是连续的内存空间，唯一差别就是进行指针计算时，不同的解引用对应了不同的一个乘数，即偏移量的乘数。

对于许多 C 语言教材来说，以上这点是没有清晰解释的，也没有给出一个很好的入门级解释。

以上内容转自我的读书笔记《重读 The C Programming Language》


## 🗝 Printing source lines

*Printing source lines* 使用 list 命令打印源代码：

- `list` 按上次位置继续打印更多的内容。
- `l -` 或反方向打印，约 10 行内容。
- `l LINENUM` 打印指印行号附近 10 行内容。
- `l START,END` 打印指定启始行和结束行之间的内容。
- `l FILE:LINENUM` 打印文件指定行号附近内容。
- `l FUNCTION` 打印函数附近内容。
- `l FILE:FUNCTION` 打印文件中函数附近内容。
- `l *ADDRESS` 列表指定内存地址相关的源代码。
- `set listsize` 或 `show listsize` 可以查询及设置默认的行数。 
- `set listsize unlimited` 设置无限行数。

## 🗝 Memory examine

*Memory examine* 使用 examine 命令检查内存数据：

- `x/nfu addr` 内存区检查，这是 examine 命令的简写，可以使用 $eip 作地址：参数作用：
    - n 为重复数，默认值 1；
    - f 指定格式，像 print 命令使用一样的格式字符设置。
    - u 指定单位，默认是 w Words。

例如下内存检查命令分别以默认的方式和自定义的方式检查内存：

    x/16    0x401462    检查 0x401462 处 16 个字节内容
    x/16w   0x401462    检查 0x401462 处 16 个字，共 32 字节内容
    x/16db  0x401462    检查 0x401462 处 16 个字节内容，十进制显示
    x/4xb   $eax        检查寄存器指向的地址的 4 个字节内容

    x/10i $pc
    x/10i $eip

要注意 GAS 汇编使用的 AT&T 与 Intel 的语法差异，$ 本应表示立即数，但在 gdb 命令中使用就当作对寄存器的引用，例如检查 EDX 指向的内存：

    (gdb) i r edx
    edx            0xf07c4             985028
    (gdb) x/8x $edx
    0xf07c4:        0x53    0x83    0xec    0x20    0xe8    0x31    0xc9    0xff
    (gdb) x/8x 0xf07c4
    0xf07c4:        0x53    0x83    0xec    0x20    0xe8    0x31    0xc9    0xff


还有常用 disassemble 反汇编命令，直接指定一个内存地址就可以反汇编了，它会直接将包含指定地址的整个函数都反汇编出来。也可以指定内存区域，这样限定区域后，将按照指定的边界开始处进行反汇编，因此即使偏移一个字节，得到的结果也会有巨大差别。

可以指定参数来选择混合源代码(m/s)或符号(r)打印，基本格式如下，内存地址可以直接以数值给出，或者通过函数名、PC 寄存器来给出：

    disassemble
    disassemble start,end
    disassemble start,+length
    disas /m OnInit, $pc+4

    disas $pc, +10
    disas $eip,+10

在没有 Symbol Table 的时候，不能自动确定函数边界，所以就需要指定起止点。


## 🗝 Printing Expression

*Printing Expression* 使用 `print` 表达式打印命令，类似 x 内存检查命令，除了用来显示信息，还可以打印程序的变量数据，函数，或对象等。

- *$NUM* 引用 NUM 序号指定的临时变量，*$* 和 *$$* 分别表示引用最后两次输出内容。
- *$$NUM* 引用往加 NUM 个输出内容。
- *$* 开头的名称用来表示 CPU 寄存器，如 $eax $eip。
- 使用赋值表达式为方便变量赋值，如 p $a = 1, p $b = 2, p $a + $b。
- `{TYPE}ADREXP` 表示 TYPE 的数据类型的数据，位于地址 ADREXP，例如 `p Foo 0x400`。
- 表达式之前可以设置格式字，和 x 命令共用格式字符，可以用 help x 查询。

>print [[options] --] expr
>print [[options] --] /f expr

>print [Expression]
>print $[Previous value number]
>print {[Type]}[Address]
>print [First element address]@[Element count]
>print /[Format] [Expression]

如 main 函数、变量、寄存器的内容或地址打印：

    p main
    p &var
    p /x $edx

在程序运行调试过程中，使用 Print 命令来执行函数：

> (gdb) p/x malloc(20)
> $3 = (void *) 0x6ce81808
> (gdb) p/x strcpy($3, "my string")
> $4 = 236128
> (gdb) x/s $3
> 0x6ce81808: "my string"
> (gdb) p/x free($3)
> $5 = 1

另外，为了美化打印，使用到以下 Debugging with GDB - Print Settings，这些功能和 C++ 调试关系比较密切。

- `set print pretty on` 设置美化结构体的打印。
- `set print union on` 打开联合体的格式化显示；
- `set print array on` 打开数组的格式化显示；
- `set print demangle on` 打开 C++ 名字复原显示；
- `set print asm-demangle` on 打开汇编对象名字复原显示；
- `set demangle-style style` 设置 C++ 名字复原方案：
    - auto 将由 GDB 自动处理；
    - gnu  按 GNU C++ compiler (g++) 名字编码方案处理；
    - hp   按 HP ANSI C++ (aCC) 名字编码方案处理；
    - lucid 按 Lucid C++ compiler (lcc) 名字编码方案处理；
    - arm  按 C++ Annotated Reference Manual 方案；
- `set print object on` 打印对象时，通过 virtual function table 确认真实的派生类形，而不是声明类型。
- `set print static-members on` 打印 C++ 静态函数，默认开启。
- `set print vtbl on` 格式化打印 C++ 虚函数表，推荐打开。但不支持 HP ANSI C++ compiler aCC。

将 set 命令改变 show 命令，并且去掉后面的 on/off 参数值，可以查询当前的设置值。

## ⚡ GDB Sessions demo

以下是一个程序调试的一般过程：

    gcc source.cpp -lstdlib++ -g -o hello.exe
    gdb hello.exe

    (gdb) exec hello.exe
    (gdb) file hello.o
    Reading symbols from /hello.o...done.
    (gdb) l 47
    42      int main() {
    43          vector<HumanBeing*> b;
    44          HumanBeing *vman1 = new VMan1;
    45          b.push_back(vman1);
    ...
    (gdb) b 44
    Breakpoint 2 at 0x401651: file /spine-runtimes/spine-sfml/hello.cpp, line 44.
    (gdb) b main
    Breakpoint 1 at 0x401647: file /spine-runtimes/spine-sfml/hello.cpp, line 43.
    (gdb) i b
    Num     Type           Disp Enb Address    What
    1       breakpoint     keep y   0x00401647 in main()
                                               at /spine-runtimes/spine-sfml/hello.cpp:43
            breakpoint already hit 1 time
    2       breakpoint     keep y   0x00401651 in main()
                                               at /spine-runtimes/spine-sfml/hello.cpp:44
            breakpoint already hit 1 time
    (gdb) delete 1 2
    (gdb) info stack
    #0  main () at /spine-runtimes/spine-sfml/hello.cpp:51
    (gdb) info registers
    eax            0x729b28 7510824
    ecx            0x729b2c 7510828
    edx            0x409a80 4233856
    ebx            0x729b28 7510824
    esp            0x63fe60 0x63fe60
    ebp            0x63fe98 0x63fe98
    esi            0x729a30 7510576
    edi            0x3b     59
    eip            0x40173a 0x40173a <main()+266>
    eflags         0x206    [ PF IF ]
    cs             0x23     35
    ss             0x2b     43
    ds             0x2b     43
    es             0x2b     43
    fs             0x53     83
    gs             0x2b     43

    (gdb) p vman1
    $2 = (HumanBeing *) 0x729ac8
    (gdb) p &vman1
    $3 = (HumanBeing **) 0x63fe7c
    (gdb) p *vman1
    $4 = {_vptr.HumanBeing = 0x409aa0 <vtable for VMan1+20>}
    (gdb) p vman1->vf
    $5 = {const char *(const HumanBeing * const)} 0x4068a4 <HumanBeing::vf() const>
    (gdb) p VMan1::VMan1
    $6 = {void (VMan1 * const)} 0x406620 <VMan1::VMan1()>
    (gdb) p b
    $7 = std::vector of length 1, capacity 1 = {0x729ac8}
    (gdb) p b@1
    $8 = {std::vector of length 1, capacity 1 = {0x729ac8}}

    (gdb) p &hb
    $3 = (HumanBeing *) 0x63fe68
    (gdb) p &man
    $2 = (XMan *) 0x63fe60

    (gdb) p hb
    $4 = {_vptr.HumanBeing = 0x409a00 <vtable for HumanBeing+8>}
    (gdb) p man
    $1 = {<MI> = {<VMan1> = {<HumanBeing> = {
            _vptr.HumanBeing = 0x409a60 <vtable for XMan+20>}, <No data fields>}, <VMan2> = {<No data fields>}, <No data fields>}, <No data fields>}

    (gdb) r
    Starting program: /spine-runtimes/spine-sfml/hello.exe
    (gdb) c
    Continuing.
    (gdb) quit


以下调试一个 Hello World 作为演示：

```c
#include <stdio.h>

void main(){
  printf("Hello World!");
}
```

使用 GCC 编译时，使用 `-g` 或 `-ggdb` 生成用于调试的符号信息，为了解调试符号的作用，以下编译生成两个程序，相当于 Release、Debug 两个版本：

```sh
gcc -o hello hello.c
gcc -o hello_d -g hello.c
```

执行 gdb 命令时，可以直接指定要调试的程序，也可以先进入调试界面后，再通过 `file` 或 `exec` 命令加载需要调试的程序。

以下尝试加载无调试信息的 Release 版本会发现提示没有调试符号：

```sh
(gdb) file hello_d
Reading symbols from hello_d...
(gdb) file hello
Load new symbol table from "hello"? (y or n) y
Reading symbols from hello...
(No debugging symbols found in hello)
```

如果尝试调试 Release 版本这个程序，会发现调试器并不能准确地给出断点调试位置的相关信息，包括源代码行号、内容等，并且单步执行时会进入 C 语言标准库内部，同样也提示找不到标准库的源代码文件，因为当前环境中并没有设置 C 语言标准库的源代码位置：

```sh
(gdb) b main
Breakpoint 1 at 0x8001149
(gdb) run
Starting program: /jos/hello 

Breakpoint 1, 0x0000000008001149 in main ()
(gdb) s
Single stepping until exit from function main,
which has no line number information.
__printf (format=0x8002004 "Hello World!") at printf.c:28
28      printf.c: No such file or directory.
(gdb) c
Continuing.
Hello World![Inferior 1 (process 3525) exited with code 014]
```

对比 Debug 版本的调试，执行运行命令后，直接将断点处的源代码也显示出来了：

```sh
(gdb) b main
Breakpoint 1 at 0x8001149: file hello.c, line 3.
(gdb) run
Starting program: /jos/hello_d 
warning: Probes-based dynamic linker interface failed.
Reverting to original interface.

Breakpoint 1, main () at hello.c:3
3       void main(){
(gdb) s
4         printf("Hello World!");
(gdb) s
5       }
(gdb) s
      3510:
      3510:     runtime linker statistics:
      3510:                final number of relocations: 92
      3510:     final number of relocations from cache: 3
Hello World![Inferior 1 (process 3510) exited with code 014]
(gdb) s
The program is not being run.
```

调试进行时，可以通过操作系统的任务查询命令观察被调试的进程：

```sh
$ tasklist |findstr hello_d
hello_d.exe                   296 Console                    1      2,716 K
```

要结束调试进程，可以使用 kill 或 detach 命令。



## ⚡ Cross-Compiling
- [GCC Cross-Compiler - OSDev Wiki](https://wiki.osdev.org/GCC_Cross-Compiler)
- [GNU Arm Embedded Toolchain](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm)
- [gcc-arm-none-eabi package in Ubuntu](https://launchpad.net/ubuntu/+source/gcc-arm-none-eabi)
- [GNU Arm Embedded Toolchain](https://launchpad.net/gcc-arm-embedded/+download)
- [binutils-arm-none-eabi](https://packages.debian.org/jessie/gcc-arm-none-eabi)
- [清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/armbian-releases/_toolchain)
- [CGDB Manual 0.7.1](http://cgdb.github.io/docs/cgdb.html)
- [Code::Blocks Binary releases with MinGW](https://www.codeblocks.org/downloads/binaries/)
- [MSYS2](https://www.msys2.org/docs/what-is-msys2/)

在谈论交叉编译时，主要涉及 CPU 架构和操作系统两方面问题，当然还涉及到当前工作平台：

- CPU 架构相同、操作系统不同的交叉编译。
- CPU 架构不同、操作系统相同的交叉编译。
- CPU 架构和操作系统都不同的交叉编译。

如果需要进行交叉调试，比如在 Windows 系统下调试嵌入式程序，基于 ARM 架构和 Linux 系统，那么就需要在 GDB 编译配置脚本中指定 --target：

    ./configure --target=arm-linux
    ./configure --target=i686-pc-linux-gnu

使用 ./configure --help 可以查询帮助信息，System types 有三个参数设置，gdbserver 也一样，只需要进入 gdb/gdbserver 子目录下编译:

    System types:  
      --build=BUILD     configure for building on BUILD [guessed]  
      --host=HOST       cross-compile to build programs to run on HOST [BUILD]  
      --target=TARGET   configure for building compilers for TARGET [HOST]System types:  
  
- build 表示执行编译工作的平台，会自动推测当前的系统。  
- host 表示编译得到的 gdb 要运行的平台。
- target 表示 gdb 解析器要解析什么平台的 ABI，即解析什么平台的可执行文件。  

GCC 使用统一的命名规则，`architecture-vendor-os`，比如 i686-pc-windows，i686-pc-linux-gnu，如果只指定 CPU 架构，补全默认值，如只指定 ARM 就会补全为 arm-unknown-none。

如果需要进行交叉编译以实现 cross-debugging，配置脚本会检查相应的编译器是否已经安装，比如在 Linux 中编译 Windows 平台下运行的 gdb 则同时需要 i386-windows-gcc 或 i686-pc-linux-gnu-gcc 这样的编译器。

GNU 推出的的 ARM 交叉编译工具 GNU Arm Embedded Toolchain 是一个开源的 ARM 工具链，适用于 Cortex-M0/M0+/M3/M4, Cortex-R4/R5/R7 和 Cortex-A* 系列处理器，包括 GNU 编译器（GCC），以及GDB，可用于 Windows，Linux，MacOS 上的交叉编译。

以 GNU Arm Embedded Toolchain 交叉编译工具链 gcc-arm-none-eabi 的命名规则为例：

    arch [-vendor] [-os] [-(gnu)eabi]

- arch - 体系架构，如 ARM，MIPS，
- vendor - 工具链提供商，这里就是 ARM 公司提供的工具。
- os - 目标操作系统
- eabi - 嵌入式应用二进制接口 Embedded Application Binary Interface

命令命名则是后缀相应的命令名，如 arm-linux-gnueabi-gcc 表示这是一个 gcc 命令，可用于 ARM 架构交叉编译，包括裸机程序、u-boot、Linux kernel、filesystem。

这里说说 Windows 平台下使用 GCC 套件，GCC 原本是用于 Linux 系统的编译套件，但由于太好用又免费，所有很项目将 GCC 移植到 Windows 工作，常用的的 TDM-GCC、Cygwin、Msys、MinGW-64w，有现成编译好的工具，下载即可使用。

不得不说说维护比较好的 Msys 2.0，它本身基于 Cygwin 构建，结合了 Arch Linux 的 pacman 依赖管理工具，使用它可以很方便地安装需要的组件，比如 ARM 嵌入式开发需要使用 GCC 交叉编译，那么就可以通过 pacman 安装现有的编译套件。

Msys 提供了一个 msys2_shell 脚本，可以通过它来配置不同工具的运行环境，只需要在相应目录下安装对应的工具命令即可使用：

    msys2_shell -mingw32
    msys2_shell -mingw64
    msys2_shell -ucrt64
    msys2_shell -clang64
    msys2_shell -msys

可以选择安装整个工具包，或者单独安装指定的工具:

```sh
# Group Installation:
pacman -S mingw-w64-i686-arm-none-eabi-toolchain
# Packages:
pacman -S mingw-w64-i686-arm-none-eabi-binutils
pacman -S mingw-w64-i686-arm-none-eabi-gcc
pacman -S mingw-w64-i686-arm-none-eabi-gdb
pacman -S mingw-w64-i686-arm-none-eabi-newlib

# Group Installation:
pacman -S mingw-w64-x86_64-arm-none-eabi-toolchain
# Packages:
pacman -S mingw-w64-x86_64-arm-none-eabi-binutils
pacman -S mingw-w64-x86_64-arm-none-eabi-gcc
pacman -S mingw-w64-x86_64-arm-none-eabi-gdb
pacman -S mingw-w64-x86_64-arm-none-eabi-newlib
```

又或者是 Windows + Intel x86 架构平台的 GCC 10.2.0 编译套件的安装，同样可以选择整个工具组或单独安装：

```sh
# Group Installation:
pacman -S msys2-devel
#Packages:
pacman -S binutils
pacman -S cocom
pacman -S gcc
pacman -S gcc-fortran
pacman -S gcc-libs
pacman -S msys2-runtime-devel
pacman -S msys2-w32api-headers
pacman -S msys2-w32api-runtime
```

配套 (GDB) 9.2，并且启用 --enable-tui 编译，支持开启 TUI 调试界面。

还有仿 vi 理念的 Curses debugger v0.7.1，使用中还是觉得 TUI 更好用：

```sh
pacman -S cgdb
```

CGDB 和 TUI 调试界面很相似，就在字符界面上提供窗口化模拟，将字符界面虚拟成以下窗口，可以切换：

- Source Window
- GDB Window
- File Dialog
- Status Bar

在 CGDB 中模仿了 vi，所以可以进行模式切换：

- ESC 切换到 CGDB 模式；
- 然后按 i 返回 GDB 界面模式。
- s 进行内容滚动模式，q 或 i 退出滚动模式。

CGDB 模式快捷键操作：

|       Keys       |                    Description                     |
|------------------|----------------------------------------------------|
| Ctrl-T           | Opens a new tty for the debugged program.          |
| Ctrl-W           | Toggle the window orientation.                     |
| [N]k or [N]up    | 向上翻 N 行内容。                                  |
| [N]j or [N]down  | 向下翻 N 行内容。                                  |
| h or left arrow  | Move left a line.                                  |
| l or right arrow | Move right a line.                                 |
| Ctrl-b or PgUp   | Move up a page.                                    |
| Ctrl-u           | Move up 1/2 a page.                                |
| Ctrl-f or PgDown | Move down a page.                                  |
| Ctrl-d           | Move down 1/2 a page.                              |
| gg               | Move to the top of file.                           |
| [N]G             | Move to the bottom of file or to a line number     |
| m[a-zA-Z]        | 设置一个标签，小字母当前文件有效，大字母全局有效。 |
| '[a-zA-Z]        | 跳转到指定标签。                                   |
| ''               | 跳转到最后跳转位置。                               |
| '.               | 跳转当前执行位置。                                 |
| /                | 当前位置开始搜索。                                 |
| ?                | 反射搜索。                                         |
| n                | 向下搜索。                                         |
| N                | 反向搜索。                                         |
| spacebar         | 在当前位置设置一个断点。                           |
| t                | 设置一个临时断点。                                 |
| -                | Shrink source window 1 line or column.             |
| =                | Grow source window 1 line or column.               |
| _                | Shrink source window 25%                           |
| +                | Grow source window 25%                             |
| Ctrl-l           | Clear and redraw the screen.                       |
| F5               | Send a run command to GDB.                         |
| F6               | Send a continue command to GDB.                    |
| F7               | Send a finish command to GDB.                      |
| F8               | Send a next command to GDB.                        |
| F10              | Send a step command to GDB                         |

GDB 模式快捷键类似。

注意，在 Windows 下使用 o 打开对话框，会卡死 GDB。

文件对话框快捷键：

|        Keys       |                 Description                  |
|-------------------|----------------------------------------------|
| q                 | 退出对话框，返回源代码窗口。                 |
| k or up           | Move up a line.                              |
| j or down         | Move down a line.                            |
| h or left         | Move left a line.                            |
| l or right        | Move right a line.                           |
| Ctrl -b or PgUp   | Move up a page.                              |
| Ctrl -u           | Move up 1/2 a page.                          |
| Ctrl -f or PgDown | Move down a page.                            |
| Ctrl -d           | Move down 1/2 a page.                        |
| gg                | Move to the top of the file dialog.          |
| [N]G              | 移动到底部或 N 行。                          |
| /                 | search from current cursor position.         |
| ?                 | reverse search from current cursor position. |
| n                 | next forward search.                         |
| N                 | next reverse search.                         |
| enter             | Select the current file.                     |


CGDB 模式执行命令：

|          Command          |           Description           |
|---------------------------|---------------------------------|
| :c :continue              | Send a continue command to GDB. |
| :down                     | Send a down command to GDB.     |
| :e :edit                  | 加载文件到源代码窗口            |
| :f :finish                | Send a finish command to GDB.   |
| :help                     | 显示帮助信息。                  |
| :logo                     | 显示 CGDB Logo。                |
| :n :next                  | Send a next command to GDB.     |
| :q :quit                  | Quit CGDB.                      |
| :r :run                   | Send a run command to GDB.      |
| :start                    | Send a start command to GDB.    |
| :k :kill                  | Send a kill command to GDB.     |
| :s :step                  | Send a step command to GDB.     |
| :syntax                   | Turn the syntax on or off.      |
| :u :until                 | Send an until command to GDB.   |
| :up                       | Send an up command to GDB.      |
| :map lhs rhs              | 为 CGDB 模式创建一个新映射。    |
| :unm lhs :unmap lhs       | 删除 CGDB 模式现有映射。        |
| :im lhs rhs :imap lhs rhs | 为 GDB 模式创建新映射。         |
| :iu lhs :iunmap lhs       | 删除现有 GDB 模式映射。         |
| :insert                   | Move focus to the GDB window.   |

此外还有配置命令，例如设置颜色 :set color White。

设置高亮配置：

    :hi group cterm=attributes ctermfg=color ctermbg=color term=attributes 
    :highlight group cterm=attributes ctermfg=color ctermbg=color term=attributes 
    :highlight Logo cterm=bold,underline ctermfg=Red ctermbg=Black 
    :highlight Normal cterm=reverse ctermfg=White ctermbg=Black 
    :hi Normal term=bold



## ⚡ GDB: Debugging Remote Programs
- GDB: The GNU Project Debugger https://www.gnu.org/software/gdb/documentation/
- A Sample GDB Session https://sourceware.org/gdb/current/onlinedocs/gdb/Sample-Session.html
- Debugging Remote Programs https://sourceware.org/gdb/current/onlinedocs/gdb/Remote-Debugging.html
- Requirements for Building GDB https://sourceware.org/gdb/current/onlinedocs/gdb/Requirements.html
- The Architecture of Open Source Applications (Volume 2): GDB http://www.aosabook.org/en/gdb.html
- The Architecture Of Open Source Applications, Volume II Amy Brown, Greg Wilson https://2lib.org/book/2576350/69be9e
- 500 Lines or Less https://2lib.org/book/5590896/0707e7

这小节内容是重点，GDB Remote Debug，需要以下这些很容易满足的条件：

- 本地主机: macOS / Linux / Windows 可以运行 gdb 即可，并且需要被调试程序的调试符号文件。
- 目标主机: 任何支持 gdbserver 命令的系统，并加载运行被调试的程序。
- 统一的系统和 CPU 架构，比如 Windows 下的程序不能正确 Linux 上运行，交叉调试需要交叉编译的 GDB，即运行于 Windows 但调试目标为 Linux。

工作站使用任何可以运行 gdb 的主机，被调试的目标机器需要支持 gdbserver 即可，然后在目标主机上通过 gdbserver 运行将要调试的程序，在本地主机运行 gdb 并加载程序的调试符号文件。通常，可以为 gdb 指定配置文件，GDB Remote Debug configuration，文件名为 .gdbinit。


启动 GDB 的时候会看到提示，当前处理什么 CPU 架构下：

    This GDB was configured as "x86_64-w64-mingw32".

同样的二进制数据使用不同的 CPU 架构解析出来的指令是不同的，用 gdb `set architecture` 命令设置正确的 CPU 架构：

```sh
(gdb) set architecture
Requires an argument. Valid arguments are i386, i386:x86-64, i386:x64-32, i8086, i386:intel, 
i386:x86-64:intel, i386:x64-32:intel, i386:nacl, i386:x86-64:nacl, i386:x64-32:nacl, auto.   
```

调试内核过程种，也可能因为执行了 CPU 模式转换指令，而处于不同的架构。


GDB 整个调试系统分成两个部分：

- Symbol 符号端，被调试程序的符号信息，包含函数名，变量名，变量类型，行号，寄存器使用情况等等。
- Target 目标端，涉及到目标系统的操控，包括启动和终止程序，读取或修改内存和寄存器，捕捉信号等等。

这两个系统可以是在单独的 gdb 进程中，即本地调试，也可以分别在 gdb 和 gdbserver 两个独立进程中，即远程调试，它们通过 socket 或串口 USB 连接。

对于嵌入式系统的交叉调试，过程有所不同，目标端通过数据线发送消息包，然后等待应答。


Stub 这个词有残存的意思，在 Windows 程序中，为防止在 DOS 系统中运行，通常编译时会在生成的可执行程序文件中插入一段 DOS 可以运行的代码，只为了打印以下信息，这段程序代码就叫 DOS Stub：

> This program cannot be run in DOS mode

在 gdbserver 程序也使用这个词，它可以称作为 debugging stub 程序，是用于 Unix-like 系统的控制程序，允许你通过 remote 和 extended-remote 方式链接 gdb 进行程序调试，但不需要链接常规的 debugging stub 程序。这个程序在目标主机上做了一些与 gdb 通讯的工作，它本身比 gdb 小多了，也没有安全措施，所以不可以在公网环境中使用，但是方便进行移植。

实现一个 stub 服务程序就按 GDB 的远程协议提供连接支持，这个协议没有固定的名字，可以叫 Remote Protocol 也可以按官方文档叫 RSP - Remote Serial Protocol。

协议本身是简单的，回到 1980 年代，当时的嵌入式设备内存才以 KB 为单位，举个列子，协议包 `$g` 也就是 GBD 显示的 'g'packet 查询所有寄存器，并期待返回所有寄存器的字节数据，假设它们的数量、大小和顺序符合 GDB 预期。协议期待每发送一个包就应该得到一个回复包，假设连接是可靠的，只需要回传一个额外的校验码，例如 `$g` 包得到的回复就如 `$g#67`。

如果需要，可以开发自己的 debugging stubs 程序，如在嵌入式实时系统开发中，需要开发可以在 ARM 处理器上运行版本。

在需要远程调试的程序上，链接一个 debugging stub 程序，实现 RSP 协议就可以。

GDB 源代码中附带了以下 Stub 程序：

- i386-stub.c 对应 CPU 架构 Intel 386
- m68k-stub.c 对应 CPU 架构 Motorola 680x0
- sh-stub.c 对应 CPU 架构 Renesas SH
- sparc-stub.c 对应 CPU 架构 SPARC
- sparcl-stub.c 对应 CPU 架构 Fujitsu SPARCLITE


在目标主机运行 gdbserver 服务，只需要可执行程序，不需要符号文件，运行命令需要指定通信方式，串口或 TCP 方式，或者 stdio 文件：

```sh
# target> gdbserver comm program [ args … ]

# - or stdio to use stdin/stdout of gdbserver.
target> gdbserver stdio hello out.txt

# communicate with GDB over the serial port /dev/com1:
target> gdbserver /dev/com1 emacs foo.txt

# To use a TCP connection instead of a serial line:
target> gdbserver host:2345 emacs foo.txt
```

使用 stdio 连接方式可以和 ssh 结合 gdbserver 使用：

```sh
(gdb) target remote | ssh -T hostname gdbserver - hello
```

选项 `-T` 表示使用 ssh 而不需要运程的 pty 终端，并且不想去处理转义字符，而这个参数是默认的。指定 stdio 连接方式的 gdbserver 有一个 /dev/null 作为 stdin，而 stdout 和 stderr 通过同一管道发送给已经连接的 gdb。


可以将调试服务附加到已经在运行的程序上，指定连接方式后再指定进程 PID。

可以根据进程名字来调试，而不是使用进程 PID，通过 pidof 命令可以获取指定进程名称的 PID，如果是多线程程序，可以使用 -s 返回第一个 PID。

```sh
# Attaching to a Running Program with pid
target> gdbserver --attach comm pid
target> gdbserver --attach comm `pidof program`
```

另外 GDB 8.1 不能在 Windows 上运行 gdbserver，Bug 23158 - gdbserver no longer functional on Windows：

```sh
>gdbserver localhost:1234 hello_wd.exe
glob could not process pattern '(null)'.
Exiting

>gdbserver --version
GNU gdbserver (GDB) 8.1
Copyright (C) 2018 Free Software Foundation, Inc.
gdbserver is free software, covered by the GNU General Public License.
This gdbserver was configured as "x86_64-w64-mingw32"
```

远程调试有两种连接模式，remote 和 extended-remote 模式，它们的功能差异如下四个方面：

- Result of detach or program exit
- Specifying the program to debug
- The run command
- Attaching

`remote` 模式特点：

- 当程序退出或脱钩时，GDB 就与目标断开连接，gdbserver 会退出。
- 必需通过 gdbserver 命令行指定要调试的程序，或者使用 --attach 选项附着到已运行的程序上。
- 不支持 `run` 命令，一旦连接建立，被调试程序就已经处于运行中，可以使用其它调试命令。
- 不支持 GDB 使用 attach，需要使用 gdbserver 附着到运行中的程序，必需指定 --attach 选项。

`extended-remote` 模式特点：

- 当程序退出或脱钩时，GDB 保持与目标的连接，可以使用 monitor 命令指定目标，或者发送命令使 gdbserver 退出。
- 可以通过 gdbserver 命令行指定，或者加载指定程序，还可以在 GDB 连接目标主机后再附着到已运行的程序上。
- 支持 `run` 命令，并且通过 `set remote exec-file` 来指定目标主机运行的程序，支持传输命令行参数，但通配符扩展和 I/O 重定向除外。
- 连接目标主机后，支持 GDB 使用 attach 命令来附着到运行中的程序，如果使用 gdbserver 需要指定 --attach 选项。


在本地主机上可以使用的命令参考 `help target`，或者使用 `apropos target` 搜索相关命令信息：

```sh
info target -- Names of targets and files being debugged.
disconnect -- Disconnect from a target.

target extended-remote -- Use a remote computer via a serial line, using a gdb-specific protocol.
target remote -- Use a remote computer via a serial line, using a gdb-specific protocol.
```

示范，在目标主机上运行调试服务监听本机的 1234 端口，IP 地址省略了，然后在本地主机运行 gdb 并连接到目标主机监听的 IP 和端口上：

```sh
# remote target host
target> gdbserver :1234 hello_d

# local host
(gdb) target remote :1234 hello_d
```

也可以在进入调试界面后再连接，这样可以使用 `file` 命令加载符号文件：

```sh
(gdb) target extended-remote 127.0.0.1:1235 
Remote debugging using 127.0.0.1:1235
warning: A handler for the OS ABI "GNU/Linux" is not built into this configuration
of GDB.  Attempting to continue with the default i386:x86-64 settings.

warning: Architecture rejected target-supplied description
Reading /home/jos/hello_d from remote target...
warning: File transfers from remote targets can be slow. Use "set sysroot" to access files locally instead.
warning: A handler for the OS ABI "GNU/Linux" is not built into this configuration
of GDB.  Attempting to continue with the default i386:x86-64 settings.

Reading symbols from target:/home/jos/hello_d...done.
Remote register badly formatted: T0506:0000000000000000;07:50d3feffff7f0000;10:00117bffff7f0000;thread:pde4.de4;core:0;
here: 00000000;07:50d3feffff7f0000;10:00117bffff7f0000;thread:pde4.de4;core:0;
```

以上连接是 Winodws 上运行 gdb 连接 Linux 目标主机，这种架构不一致的调试是不正常的，上面已经提示数据解析出错了，可以使用 gdb `set architecture` 命令设置

不配置的双端连接还可能导致接收数据格式不一致，产生错误信息 Remote 'g'packet reply is too long，可以在 gdb 连接目标主机后，set architecture i386:x86-64:intel 设置架构。

上面还提示已经通过目标主机传输了符号文件，这可能因为网络状态影响而变得很慢。可以通过本地执行命令 `set sysroot` 从本地加载符号文件来避免从远程主机读取文件。指定目录时，应该指定包含目标架构库文件的目录，子目录应该是对应的架构目录。

```sh
set sysroot [Directory]
set sysroot remote:/
set sysroot remote:[Remote directory]
set solib-absolute-prefix [Directory]
show sysroot
```

以下示范，通过 TCP 1234 以 extended-remote 模式与目标主机连接，按步运行程序，并且在目标主机上输出运行结果：

```sh
(gdb) set sysroot /usr
(gdb) show sysroot
The current system root is "/usr".
(gdb) file hello_d
Reading symbols from hello_d...
(gdb) target extended-remote 127.0.0.1:1234
Remote debugging using 127.0.0.1:1234
Reading symbols from /usr/lib64/ld-linux-x86-64.so.2...
Reading symbols from /usr/lib/debug/lib/x86_64-linux-gnu//ld-2.31.so...
0x00007fffff7b1100 in _start () from /usr/lib64/ld-linux-x86-64.so.2
(gdb) b main
Breakpoint 1 at 0x8001149: file hello.c, line 3.
(gdb) r
The program being debugged has been started already.
Start it from the beginning? (y or n) n
Program not restarted.
(gdb) n
Single stepping until exit from function _start,
which has no line number information.

Breakpoint 1, main () at hello.c:3
3       void main(){
(gdb) n
4         printf("Hello World!");
(gdb) n
5       }
(gdb) n
__libc_start_main (main=0x8001149 <main>, argc=1, argv=0x7ffffffed358, 
    init = <optimized out>, fini=<optimized out>, rtld_fini=<optimized out>, 
    stack_end = 0x7ffffffed348) at ../csu/libc-start.c:342
342     ../csu/libc-start.c: No such file or directory.
(gdb) n
[Inferior 1 (process 3891) exited with code 014]
(gdb) disconnect
Ending remote debugging.
```

连接目标主机后，可以通过 monitor 命令发送指令：

```sh
# Send any debug output to the given file, or to stderr.
monitor set debug-file filename
monitor set debug-file

# Enable general debugging messages
monitor set debug <0|1>
# Enable h/w breakpoint/watchpoint debugging messages
monitor set debug-hw-points <0|1>
# Enable remote protocol debugging messages
monitor set remote-debug <0|1>

# Add additional information to debugging messages
# Options: all, none, timestamp
monitor set debug-format option1[,option2,...]

# Quit GDBserver
monitor exit
```

可以用 monitor 向 gdbserver 发送结束命令，或者使用 kill 命令发送结束信号：

```sh
$ kill -s SIGINT `pidof gdbserver`
```

收发文件使用 remote 命令：

```sh
# Copy file from the host system (the machine running GDB) to the target system.
remote put hostfile targetfile

# Copy file from the target system to the host system.
remote get targetfile hostfile

# Delete targetfile from the target system.
remote delete targetfile
```

## ⚡ VSCode & gdb
- Configuring C/C++ debugging https://code.visualstudio.com/docs/cpp/launch-json-reference
- C/C++ for Visual Studio Code https://code.visualstudio.com/docs/languages/cpp
- Configure launch.json for C/C++ debugging https://code.visualstudio.com/docs/cpp/launch-json-reference
- https://github.com/microsoft/vscode-cpptools

VScode 提供了 CPP 扩展，可以很方便地调试 C++ 程序。

需要安装 MinGW 以提供编译工具和 gdb 调试器，可以在 VSCode 任务配置 tasks.json 中设置编译命令以生成调试信息，使用 -g 参数，否则就只能反汇编调试：

    setup tasks in Visual Code (gcc -g FILE -o FILE.exe)
    "command": "gcc",
    "args": ["-g", "${file}", "-o", "${workspaceRoot}\${fileBasename}.exe"]

以下任务配置可以用来编译当前活动的源代码文件，也可以使用 workspaceRoot 如果文件在工作区目录下：

```js
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "C/C++: g++.exe build active file",
      "command": "g++.exe",
      "args": ["-g", "${file}", "-o", "${fileDirname}\\${fileBasenameNoExtension}.exe"],
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "problemMatcher": ["$gcc"],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

配置 "isDefault": true 就可以使用快捷键 Ctrl+Shift+B 来执行这个任务。

然后修改配置文件 launch.json，设置如何加载调试器，可以设置 symbolSearchPath 以加载 VC++ PDB 调试符号文件

```js
{
  "name": "C++ Launch (Windows)",
  "type": "cppvsdbg",
  "request": "launch",
  "program": "C:\\app1\\Debug\\app1.exe",
  "symbolSearchPath": "C:\\Symbols;C:\\SymbolDir2",
  "externalConsole": true,
  "logging": {
    "moduleLoad": false,
    "trace": true
  },
  "visualizerFile": "${workspaceFolder}/my.natvis",
  "showDisplayString": true
}
```

旧版通过 "console" 来设置被调试程序运行在什么终端下，新版本通过 externalConsole 设置，如果程序需要输入数据，那么就设置为 true，这样就在外部终端中运行程序，并允许输入数据。

Visual Studio Code 工程中还可以使用 .vscode/c_cpp_properties.json 配置文件，设置编译参数：

```js
{
  "configurations": [
    {
      "name": "Linux",
      "includePath": ["${workspaceFolder}/**"],
      "defines": [],
      "compilerPath": "/usr/bin/gcc",
      "cStandard": "c11",
      "cppStandard": "c++17",
      "intelliSenseMode": "clang-x64"
    }
  ],
  "version": 4
}
```

连接 gdbserver 进行远程调试配置：

```js
{
    "type": "gdb",
    "request": "attach",
    "name": "Attach to gdbserver",
    "executable": "<path to the elf/exe file relative to workspace root in order to load the symbols>",
    "target": "X.X.X.X:9999",
    "remote": true,
    "cwd": "${workspaceRoot}", 
    "gdbpath": "path/to/your/gdb",
    "autorun": [
        "any gdb commands to initiate your environment, if it is needed"
    ]
}
```

preLaunchTask 指定要在调试前执行的任务，即 task.json 设置的任务 lable，这样，按 F5 执行调试就会自动编译程序。

```js
{
  "name": "C++ Launch",
  "type": "cppdbg",
  "request": "launch",
  "program": "${workspaceFolder}/a.out",
  "stopAtEntry": false,
  "args": ["arg1", "arg2"],
  "environment": [{ "name": "config", "value": "Debug" }],
  "cwd": "${workspaceFolder}"
  "preLaunchTask": "C/C++: g++.exe build active file",
  "externalConsole": true,
  "MIMode": "gdb",
  "miDebuggerPath": "gdb",
  "setupCommands": [
    {
      "description": "为 gdb 启用整齐打印",
      "text": "-enable-pretty-printing",
      "ignoreFailures": true
    },
  ],
  "customLaunchSetupCommands": [
    { "text": "target-run", "description": "run target", "ignoreFailures": false }
  ],
  "launchCompleteCommand": "exec-run",
  "linux": {
    "MIMode": "gdb",
    "miDebuggerPath": "/usr/bin/gdb"
  },
  "osx": {
    "MIMode": "lldb"
  },
  "windows": {
    "MIMode": "gdb",
    "miDebuggerPath": "C:\\MinGw\\bin\\gdb.exe"
  }
}
```

运行调试后，可以通过调试命令窗口与调试扩展进行交互：

    -exec help
    -exec <gdb_command>
    -exec -enable-pretty-printing
    -exec info registers
    -exec directory folder/of/source
    -exec set $pc = main

    -exec disas
    -exec disassemble
    -exec disassemble start,end
    -exec disassemble start,+length
    -exec disas /m OnInit, $pc+4
    -exec disas $pc, +10
    -exec disas $eip,+10


# 🚩 PE Format
- Portable executable (PE) manipulation toolkit https://petoolse.github.io/petools
- PE Format https://docs.microsoft.com/en-us/windows/win32/debug/pe-format
- [MSVC Build Tools](https://docs.microsoft.com/zh-cn/cpp/build/reference/c-cpp-build-tools?view=vs-2019)

安装 Microsoft Visual Studio 社区版即可获取 MSVC 编译套件，套件自带的编译程序有以下这些：

|   命令程序  |                      功能                     |               使用示范              |
|-------------|-----------------------------------------------|-------------------------------------|
| cl.exe      | 编译程序                                      | cl /c /Fo:Test.obj Test.cpp         |
| link.exe    | 链接程序                                      | link /out:Test.exe Test.obj         |
| lib.exe     | 库管理程序，可生成静态库，根据 DEF 创建导入库 | lib /machine:x86 /DEF:Test.def      |
| errlook.exe | 根据错误号检索系统错误消息或模块错误消息      |                                     |
| nmake.exe   | Makefile 脚本构建工具                         |                                     |
| ml64.exe    | 汇编程序                                      | ml64.exe Test.asm                   |
| editbin.exe | COFF/PE 程序文件编辑器，如修改程序子系统      | editbin /SUBSYSTEM:CONSOLE Test.exe |
| dumpbin     | COFF/PE 信息查看工具，如查看导出符号          | dumpbin -exports Test.dll           |

对于一个 PE - Portable Execute 二进制文件，文件开始的位置就是一个 DOS 程序，包含一个 DOS 信息头和一个 DOS Stub 程序体。

DOS 头部对应 IMAGE_DOS_HEADER 结构体定义，如下：

```cpp
typedef long LONG;
typedef unsigned short      WORD;

typedef struct _IMAE_DOS_HEADER {  // 偏移 DOS .EXE header  
    WORD e_magic;                  // 0x00 Magic number;  
    WORD e_cblp;                   // 0x02 Bytes on last page of file  
    WORD e_cp;                     // 0x04 Pages in file  
    WORD e_crlc;                   // 0x06 Relocations  
    WORD e_cparhdr;                // 0x08 Size of header in paragraphs  
    WORD e_minalloc;               // 0x0A Minimum extra paragraphs needed  
    WORD e_maxalloc;               // 0x0C Maximum extra paragraphs needed  
    WORD e_ss;                     // 0x0E Initial (relative) SS value  
    WORD e_sp;                     // 0x10 Initial SP value  
    WORD e_csum;                   // 0x12 Checksum  
    WORD e_ip;                     // 0x14 Initial IP value  
    WORD e_cs;                     // 0x16 Initial (relative) CS value  
    WORD e_lfarlc;                 // 0x18 File address of relocation table  
    WORD e_ovno;                   // 0x1A Overlay number  
    WORD e_res[4];                 // 0x1C Reserved words  
    WORD e_oemid;                  // 0x24 OEM identifier (for e_oeminfo)  
    WORD e_oeminfo;                // 0x26 OEM information; e_oemid specific   
    WORD e_res2[10];               // 0x28 Reserved words  
    LONG e_lfanew;                 // 0x3C File address of new exe header  
} IMAGE_DOS-HEADER, *PIMAGE_DOS_HEADER;
```

结构体的幻数 Magic number 字段标识一个 DOS 可执行文件，该字段占用两个字节，默认是字符“MZ”，在 winnt.h 定义如下：

```cpp
#define IMAGE_DOS_SIGNATURE                 0x4D5A      // MZ
#define IMAGE_OS2_SIGNATURE                 0x4E45      // NE
#define IMAGE_OS2_SIGNATURE_LE              0x4C45      // LE
#define IMAGE_NT_SIGNATURE                  0x50450000  // PE00
```

最后一个字段 e_lfanew 指向 Windows 32-bit/64-bit 程序，新旧指的是相对 DOS 时代的 16-bit 旧程序，DOS Stub 只是一段用于兼容旧 PE 程序的代码，只显示一段信息：

    This program cannot be run in DOS mode.

在 DOS Hedaer 后面紧跟着 16-bit 指令，如果在 DOS 系统下运行程序就执行这段代码，如果在 Windows 系统下运行则执行 e_lfanew 指向的新程序。


# 🚩 ELF Format
- ELF (Executable and Linkable Format) https://wiki.osdev.org/ELF
- Linux Foundation Referenced Specifications https://refspecs.linuxfoundation.org/index.shtml
- Executable and Linking Format (ELF) Specification v1.2 https://refspecs.linuxfoundation.org/elf/elf.pdf
- GCC - the GNU Compiler Collection https://gcc.gnu.org/
- GNU Binutils https://www.gnu.org/software/binutils/
- GNU Binary Utilities https://sourceware.org/binutils/docs-2.36/binutils/index.html

GNU 提供了一套非常有用的二进制文件工具，统称为 Binutils，其中 as 和 ls 两个是 GCC 编译套件也经常用到的汇编、链接工具：

- `as` - the GNU assembler.
- `ld` - the GNU linker.
- `ar` - A utility for creating, modifying and extracting from archives.
- `addr2line` - Converts addresses into filenames and line numbers.
- `c++filt` - Filter to demangle encoded C++ symbols.
- `dlltool` - Creates files for building and using DLLs.
- `gold` - A new, faster, ELF only linker, still in beta test.
- `gprof` - Displays profiling information.
- `nlmconv` - Converts object code into an NLM.
- `nm` - Lists symbols from object files.
- `objcopy` - Copies and translates object files.
- `objdump` - Displays information from object files.
- `ranlib` - Generates an index to the contents of an archive.
- `readelf` - Displays information from any ELF format object file.
- `size` - Lists the section sizes of an object or archive file.
- `strings` - Lists printable strings from files.
- `strip` - Discards symbols.
- `windmc` - A Windows compatible message compiler.
- `windres` - A compiler for Windows resource files.

此外还有一个 ldd 工具，可以查询程序导入了什么动态链接库。

例如，使用 nm 查询程序中导入的符号：

    nm -g a.exe

    nm [-A|-o|--print-file-name] [-a|--debug-syms]
       [-B|--format=bsd] [-C|--demangle[=style]]
       [-D|--dynamic] [-fformat|--format=format]
       [-g|--extern-only] [-h|--help]
       [--ifunc-chars=CHARS]
       [-l|--line-numbers] [--inlines]
       [-n|-v|--numeric-sort]
       [-P|--portability] [-p|--no-sort]
       [-r|--reverse-sort] [-S|--print-size]
       [-s|--print-armap] [-t radix|--radix=radix]
       [-u|--undefined-only] [-V|--version]
       [-X 32_64] [--defined-only] [--no-demangle]
       [--plugin name]
       [--no-recurse-limit|--recurse-limit]]
       [--size-sort] [--special-syms]
       [--synthetic] [--target=bfdname]
       [objfile…]

而 objdump 功能更强大，它可以查询 ELF 格式文件的所有信息，包括对代码进行反汇编：

    objdump options objfile

    至少必须给出以下选项之一：
      -a, --archive-headers    Display archive header information
      -f, --file-headers       Display the contents of the overall file header
      -p, --private-headers    Display object format specific file header contents
      -P, --private=OPT,OPT... Display object format specific contents
      -h, --[section-]headers  Display the contents of the section headers
      -x, --all-headers        Display the contents of all headers
      -d, --disassemble        Display assembler contents of executable sections
      -D, --disassemble-all    Display assembler contents of all sections
          --disassemble=<sym>  Display assembler contents from <sym>
      -S, --source             Intermix source code with disassembly
          --source-comment[=<txt>] Prefix lines of source code with <txt>
      -s, --full-contents      Display the full contents of all sections requested
      -g, --debugging          Display debug information in object file
      -e, --debugging-tags     Display debug information using ctags style
      -G, --stabs              Display (in raw form) any STABS info in the file
      -W[lLiaprmfFsoORtUuTgAckK] or
      --dwarf[=rawline,=decodedline,=info,=abbrev,=pubnames,=aranges,=macro,=frames,
              =frames-interp,=str,=str-offsets,=loc,=Ranges,=pubtypes,
              =gdb_index,=trace_info,=trace_abbrev,=trace_aranges,
              =addr,=cu_index,=links,=follow-links]
                               Display DWARF info in the file
      --ctf=SECTION            Display CTF info from SECTION
      -t, --syms               Display the contents of the symbol table(s)
      -T, --dynamic-syms       Display the contents of the dynamic symbol table
      -r, --reloc              Display the relocation entries in the file
      -R, --dynamic-reloc      Display the dynamic relocation entries in the file
      @<file>                  Read options from <file>
      -v, --version            Display this program's version number
      -i, --info               List object formats and architectures supported
      -H, --help               Display this information

     以下选项是可选的：
      -b, --target=BFDNAME           Specify the target object format as BFDNAME
      -m, --architecture=MACHINE     Specify the target architecture as MACHINE
      -j, --section=NAME             Only display information for section NAME
      -M, --disassembler-options=OPT Pass text OPT on to the disassembler
      -EB --endian=big               Assume big endian format when disassembling
      -EL --endian=little            Assume little endian format when disassembling
          --file-start-context       Include context from start of file (with -S)
      -I, --include=DIR              Add DIR to search list for source files
      -l, --line-numbers             Include line numbers and filenames in output
      -F, --file-offsets             Include file offsets when displaying information
      -C, --demangle[=STYLE]         Decode mangled/processed symbol names
                                      The STYLE, if specified, can be `auto', `gnu',
                                      `lucid', `arm', `hp', `edg', `gnu-v3', `java'
                                      or `gnat'
          --recurse-limit            Enable a limit on recursion whilst demangling.  [Default]  
          --no-recurse-limit         Disable a limit on recursion whilst demangling
      -w, --wide                     Format output for more than 80 columns
      -z, --disassemble-zeroes       Do not skip blocks of zeroes when disassembling
          --start-address=ADDR       Only process data whose address is >= ADDR
          --stop-address=ADDR        Only process data whose address is < ADDR
          --no-addresses             Do not print address alongside disassembly
          --prefix-addresses         Print complete address alongside disassembly
          --[no-]show-raw-insn       Display hex alongside symbolic disassembly
          --insn-width=WIDTH         Display WIDTH bytes on a single line for -d
          --adjust-vma=OFFSET        Add OFFSET to all displayed section addresses
          --special-syms             Include special symbols in symbol dumps
          --inlines                  Print all inlines for source line (with -l)
          --prefix=PREFIX            Add PREFIX to absolute paths for -S
          --prefix-strip=LEVEL       Strip initial directory names for -S
          --dwarf-depth=N        Do not display DIEs at depth N or greater
          --dwarf-start=N        Display DIEs starting with N, at the same depth
                                 or deeper
          --dwarf-check          Make additional dwarf internal consistency checks.
          --ctf-parent=SECTION     Use SECTION as the CTF parent
          --visualize-jumps          Visualize jumps by drawing ASCII art lines
          --visualize-jumps=color    Use colors in the ASCII art
          --visualize-jumps=extended-color   Use extended 8-bit color codes
          --visualize-jumps=off      Disable jump visualization

    objdump：支持的目标： pe-x86-64 pei-x86-64 pe-bigobj-x86-64 elf64-x86-64 elf64-l1om elf64-k1om pe-i386 pei-i386 elf32-i386 elf32-iamcu elf64-little elf64-big elf32-little elf32-big srec symbolsrec verilog tekhex binary ihex plugin
    objdump：支持的体系结构： i386 i386:x86-64 i386:x64-32 i8086 i386:intel i386:x86-64:intel i386:x64-32:intel iamcu iamcu:intel l1om l1om:intel k1om k1om:intel

    下列 i386/x86-64 特定的反汇编器选项在使用 -M 开关时可用（使用逗号分隔多个选项）：
      x86-64      在 64 位模式下反汇编
      i386        在 32 位模式下反汇编
      i8086       在 16 位模式下反汇编
      att         用 AT&T 语法显示指令
      intel       用 Intel 语法显示指令
      att-mnemonic Display instruction in AT&T mnemonic
      intel-mnemonic Display instruction in Intel mnemonic
      addr64      假定 64 位地址大小
      addr32      假定 32 位地址大小
      addr16      假定 16 位地址大小
      data32      假定 32 位数据大小
      data16      假定 16 位数据大小
      suffix      在 AT&T 语法中始终显示指令后缀
      amd64       Display instruction in AMD64 ISA
      intel64     Display instruction in Intel64 ISA

       
ELF 文件格式基本结构，按文件内容出现的顺序如下：

            ===================================
            | 文件头（ELF Header）             |
            ===================================
             | Program header table position
            =v=================================
    +-------| 程序头表（Program Head Table）   |
    |       ===================================
    |       
    |       ===================================
    |       | 各个段落（Sections/Segments）    |
    |       |=================================|
    +------>| .text                           | <----+
    |       |=================================|      |
    +------>| .rodata                         | <----+
    |       |=================================|      |
    |       | ...                             |      |
    |       |=================================|      |
    +------>| .data                           | <----+
            ===================================      |
                                                     |
            ===================================      |
            | 段落头表（Section Header Table）  |------+
            ===================================

可以通过 objdump 查询这些头块信息，可以看到 MIT 6.828 的 boot 程序的入口按约定编译在 0x7c00。

因为 BIOS 加载引导程序后，会按约定执行 0x7c00 地址的代码入口，所以在编译引导程序时，在 boot/Makefrag 脚本指定链接参数 -Ttext 0x7C00 让链接程序生成正确的内存地址。

链接程序参数可以直接传递给 gcc 命令，由它调用链接程序：

    gcc -o hello -Ttext 0x7c00 hello.c

注意 LMA - Load Memory Address 才是程序段装入内存的入口所在，VMA 是 Virtual Memory Address：

```sh
$ objdump -fh obj/boot/boot.out

obj/boot/boot.out:     file format elf32-i386
architecture: i386, flags 0x00000012:
EXEC_P, HAS_SYMS
start address 0x00007c00

Sections:
Idx Name          Size      VMA       LMA       File off  Algn
  0 .text         0000019c  00007c00  00007c00  00000074  2**2
                  CONTENTS, ALLOC, LOAD, CODE
  1 .eh_frame     0000009c  00007d9c  00007d9c  00000210  2**2
                  CONTENTS, ALLOC, LOAD, READONLY, DATA
  2 .stab         00000870  00000000  00000000  000002ac  2**2
                  CONTENTS, READONLY, DEBUGGING
  3 .stabstr      00000940  00000000  00000000  00000b1c  2**0
                  CONTENTS, READONLY, DEBUGGING
  4 .comment      00000024  00000000  00000000  0000145c  2**0
                  CONTENTS, READONLY

$ objdump -fh obj/kern/kernel

obj/kern/kernel:     file format elf32-i386
architecture: i386, flags 0x00000112:
EXEC_P, HAS_SYMS, D_PAGED
start address 0x0010000c

Sections:
Idx Name          Size      VMA       LMA       File off  Algn
  0 .text         00001acd  f0100000  00100000  00001000  2**4
                  CONTENTS, ALLOC, LOAD, READONLY, CODE
  1 .rodata       000006bc  f0101ae0  00101ae0  00002ae0  2**5
                  CONTENTS, ALLOC, LOAD, READONLY, DATA
  2 .stab         00004291  f010219c  0010219c  0000319c  2**2
                  CONTENTS, ALLOC, LOAD, READONLY, DATA
  3 .stabstr      0000197f  f010642d  0010642d  0000742d  2**0
                  CONTENTS, ALLOC, LOAD, READONLY, DATA
  4 .data         00009300  f0108000  00108000  00009000  2**12
                  CONTENTS, ALLOC, LOAD, DATA
  5 .got          00000008  f0111300  00111300  00012300  2**2
                  CONTENTS, ALLOC, LOAD, DATA
  6 .got.plt      0000000c  f0111308  00111308  00012308  2**2
                  CONTENTS, ALLOC, LOAD, DATA
  7 .data.rel.local 00001000  f0112000  00112000  00013000  2**12
                  CONTENTS, ALLOC, LOAD, DATA
  8 .data.rel.ro.local 00000044  f0113000  00113000  00014000  2**2
                  CONTENTS, ALLOC, LOAD, DATA
  9 .bss          00000648  f0113060  00113060  00014060  2**5
                  CONTENTS, ALLOC, LOAD, DATA
 10 .comment      00000024  00000000  00000000  000146a8  2**0
                  CONTENTS, READONLY
```

文件头（ELF Header）

    | Position (32 bit) | Position (64 bit) |                         Value                         |
    |-------------------|-------------------|-------------------------------------------------------|
    | 0-3               | 0-3               | Magic number - 0x7F, then 'ELF' in ASCII              |
    | 4                 | 4                 | 1 = 32 bit, 2 = 64 bit                                |
    | 5                 | 5                 | 1 = little endian, 2 = big endian                     |
    | 6                 | 6                 | ELF header version                                    |
    | 7                 | 7                 | OS ABI - usually 0 for System V                       |
    | 8-15              | 8-15              | Unused/padding                                        |
    | 16-17             | 16-17             | 1 = relocatable, 2 = executable, 3 = shared, 4 = core |
    | 18-19             | 18-19             | Instruction set - see table below                     |
    | 20-23             | 20-23             | ELF Version                                           |
    | 24-27             | 24-31             | Program entry position                                |
    | 28-31             | 32-39             | Program header table position                         |
    | 32-35             | 40-47             | Section header table position                         |
    | 36-39             | 48-51             | Flags - architecture dependent                        |
    | 40-41             | 52-53             | Header size                                           |
    | 42-43             | 54-55             | Size of an entry in the program header table          |
    | 44-45             | 56-57             | Number of entries in the program header table         |
    | 46-47             | 58-59             | Size of an entry in the section header table          |
    | 48-49             | 60-61             | Number of entries in the section header table         |
    | 50-51             | 62-63             | Index in section header table with the section names  |

Flags 标志对应 CPU 架构

    |      Name      | Value |           Meaning           |
    |----------------|-------|-----------------------------|
    | ET_NONE        |     0 | No machine                  |
    | EM_M32         |     1 | AT&T WE 32100               |
    | EM_SPARC       |     2 | SPARC                       |
    | EM_386         |     3 | Intel Architecture          |
    | EM_68K         |     4 | Motorola 68000              |
    | EM_88K         |     5 | Motorola 88000              |
    | EM_860         |     7 | Intel 80860                 |
    | EM_MIPS        |     8 | MIPS RS3000 Big-Endian      |
    | EM_MIPS_RS4_BE |    10 | MIPS RS4000 Big-Endian      |
    | RESERVED       |    11 | -16 Reserved for future use |

ELF 文件可以包含一组 Program header，根据文件头的 Number of entries 来操作，但需要正确使用 32-bit 或 64-bit 的版本。

    32 bit version:

    | Position |                                     Value                                     |
    |----------|-------------------------------------------------------------------------------|
    | 0-3      | Type of segment (see below)                                                   |
    | 4-7      | The offset in the file that the data for this segment can be found (p_offset) |
    | 8-11     | Where you should start to put this segment in virtual memory (p_vaddr)        |
    | 12-15    | Undefined for the System V ABI                                                |
    | 16-19    | Size of the segment in the file (p_filesz)                                    |
    | 20-23    | Size of the segment in memory (p_memsz)                                       |
    | 24-27    | Flags (see below)                                                             |
    | 28-31    | The required alignment for this section (must be a power of 2)                |

    64 bit version:

    | Position |                                     Value                                     |
    |----------|-------------------------------------------------------------------------------|
    | 0-3      | Type of segment (see below)                                                   |
    | 4-7      | Flags (see below)                                                             |
    | 8-15     | The offset in the file that the data for this segment can be found (p_offset) |
    | 16-23    | Where you should start to put this segment in virtual memory (p_vaddr)        |
    | 24-31    | Undefined for the System V ABI                                                |
    | 32-39    | Size of the segment in the file (p_filesz)                                    |
    | 40-47    | Size of the segment in memory (p_memsz)                                       |
    | 48-55    | The required alignment for this section (must be a power of 2)                |
