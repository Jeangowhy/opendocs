


# ð© WinDbg
- https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/
- https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/symbols
- çéª CTF æ»é²ç«èµ https://bbs.pediy.com/thread-267161.htm
- Windows via C/C++ Fifth Edition https://2lib.org/book/5225444/4558f0
- https://docs.microsoft.com/zh-cn/windows-hardware/drivers/debugger/windbg-command-line-preview

WinDgb æ¯ Windows ä¸ç¨è°è¯å·¥å·ï¼å¯ç¬ç«å®è£ï¼ä¹å¯ä»¥éè¿ Windows Driver Kit (WDK) æ Windows SDK å®è£ã

èªä»ç¥åçåæ ¸è°è¯å·¥å· SoftICE åæ­¢å¼ååï¼WinDbg å°±æäºåæ ¸è°è¯é¢åçé¦éè°è¯å¨ãå ä¸ºå®æ¯å¾®è½¯å¬å¸çäº§åï¼æä»¥å¨ Windows å¹³å°çå¼å®¹æ§ä¸æçå¼ºå¤§çåå¤©ä¼å¿ï¼WinDbg æ¯æçå¹³å°åæ¬x86ãIA64ãAMD64ã

ä½æ¯ WinDbg çé¢æä¾çåæ±ç¼è§å¾å¾ç®éï¼è¿å¾å®¹æè®©è°è¯èåè±æä»¤å½±åã

å®è£åè·å¾ä»¥ä¸è°è¯å·¥å·ï¼éè¦æ ¹æ®ä¸åçè°è¯ç±»åæ¥éæ©å·¥å·ï¼

- WinDbg  (Windbg.exe) æ¯ user-mode and kernel-mode è°è¯å·¥å·ï¼åè£ NTSD å KD æä¾ä¸ä¸ªæ´å¥½ç¨çç¨æ·çé¢ã
- KD  (Kd.exe) Kernel Debugger æ¯ kernel-mode è°è¯å·¥å·ï¼åªæä¾å½ä»¤è¡çé¢ã
- CDB  (Cdb.exe) æ¯ user-mode è°è¯å·¥å·ï¼åªæä¾å½ä»¤è¡çé¢ã
- NTSD  (Ntsd.exe) æ¯ user-mode è°è¯å·¥å·ï¼åªæä¾å½ä»¤è¡çé¢ã

å GDB ç±»ä¼¼ï¼WinDbg ä¹æ¯ S/C ç»æï¼è°è¯å¨è¿è¡å¨ host systemï¼è¢«è°è¯ç¨åºè¿è¡å¨ target systemã

è¦çæ WinDbg æåï¼éè¦å¯¹ Intel x86 CPU æå¾ä¸°å¯çè®¤è¯ï¼å¶æä»¥å½ä»¤åºæ¬é½æ¯æ CPU è§ååäºçã

Console Debugger (CDB) å NT Symbolic Debugger (NTSD) å¯ä»¥çä½ç­ä»·å³ç³»ï¼æä¸ç¹ä¸åï¼CDB å¨åå»ºæ°è¿ç¨æ¶ä¼ç»§æ¿å½ä»¤è¡çªå£ã

    start cdb parameters 
    ntsd parameters 

å¯ä»¥å¨ Windows Stores å®è£ææ°ç WinDbg Preview çï¼æä¾ççé¢æ´å¥½ç¨ï¼åæ¶ä¹æä¾å½ä»¤è¡çæ¯æã

æ­¤çæ¬åªæä¾ä¸ä¸ª DbgX.Shell.exe ç¨åºï¼éè¦éè¿å½ä»¤è¡å¯å¨éé¡¹æ¥æå®ä¸äºåè½éé¡¹ãåæ¶ï¼è¿ä¸ªçæ¬å¼å¥ä¸ä¸ªæ°åè½ Time Travel Debugging (TTD)ï¼æ¶é´æ½è¡è°è¯å·¥å·ã


WinDbg å½ä»¤å¤è¾¾ä¸ç¾æ¡ï¼æ¶åä»¥ä¸æ¹é¢ï¼

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

WinDbg çé¢æä¾çè°è¯åè½é½å¯ä»¥æ¾å°ç¸åºçå½ä»¤ï¼

```sh
g # Run F5
gu # Step Out Shift-F11
t # Step Into F8/F11
p # Step Over F10
.restart # Ctrl-Shift-F5
ENTER (Repeat Last Command)
```

ä½¿ç¨ p æ§è¡è¿å¯ä»¥æå®æ­¥æ°ã

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

æµç¨ä¸æ§å¶ï¼

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
    | %      | flat       | 64-bit å¯»åï¼æèä½¿ç¨ 16-bit æ®µéæ©å¨ç 32-bit åæ®µå¯»å |
    | &      | virtual 86 | Real-mode addresses. x86-based only.                    |
    | #      | plain      | Real-mode addresses. x86-based only.                    |

å¯»åæ¹å¼çè¡¨è¾¾ï¼

- `offset` èæå°åç©ºé´çç»å¯¹å°åï¼å¦ææ¯ 16-bit æ¨¡å¼ï¼è¿ä¸ªåç§»å°±æ¯ 16-bitï¼å¦ææ¯ 32-bit åæ®µæ¨¡å¼ï¼åç§»å°±æ¯ 32-bit
- `&[[ segment:]] offset` å®å°åæ¨¡å¼ã
- `%segment:[[ offset]]` åæ®µæ¨¡å¼å¯»å 32-bit or 64-bitã
- `%[[ offset]]` èæå¯»åç©ºé´çç»å¯¹å°å (32-bit or 64-bit) ã
- `name[[ +|â ]] offset` å±å¹³æ¨¡å¼ 32-bit or 64-bitï¼ç¸å¯¹ name è¿ä¸ªç¬¦å·çå°ååç§»ã 

ä¾å¦ï¼ä½¿ç¨åå­æ£æ¥å½ä»¤ï¼æ£æ¥ä¸ä¸ª long * æéæåçåå­ï¼æèä½¿ç¨ MASM æ±ç¼è§£å¼ç¨æä½ç¬¦ poi è·ååå­æéæåçæ°æ®ï¼

    dd *( (long*) 0x123456 ) 
    dd poi(0x77afecc2)

æ§è¡å½ä»¤å¿«æ·é®ä¸º F5ï¼ä½¿ç¨å½ä»¤æ¹å¼å·ææ´å¤åè½ï¼å¯ä»¥æå®è¦æ§è¡çº¿ç¨ï¼Step Out å¯¹åºçå½ä»¤æ¯ guï¼

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

### ð TTD - Time Travel Debugging
- https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/time-travel-debugging-overview
- https://www.phodal.com/blog/arts-of-research-time-travel-debugger-as-example/
- https://docs.microsoft.com/zh-cn/windows-hardware/drivers/debugger/windbg-timeline-preview
- https://docs.microsoft.com/zh-cn/windows-hardware/drivers/debugger/using-linq-with-the-debugger-objects
- GDB and Reverse Debugging https://www.gnu.org/software/gdb/news/reversible.html

TTD æ¯ä¸ç§å·¥å·ï¼å®ä½¿æ¨å¯ä»¥è®°å½æ­£å¨è¿è¡çè¿ç¨çæ§è¡æåµï¼ç¶åå¨ä»¥ååååååéæ¾å®ãTTD éè¿åå¸¦è°è¯å¨ä¼è¯ï¼æ¥å¸®å©æ¨æ´è½»æ¾å°è°è¯é®é¢ï¼èä¸å¿å¨åç°éè¯¯ä¹åéç°é®é¢ã

æä»¥ï¼å³é®é»è¾å¨äº record-replay-rewindï¼æä»¥ record-replay debuggingï¼reverse-debuggingï¼Timeless debugging è¿äºé½æ¯ç¸åçæ¦å¿µã

TTD æ¹åäºç®åè°è¯åæ Windows app æ¼æ´æ¶åä¸ééçæ åæº¯ãbp æ­ç¹ãéæ°å è½½ç­é®é¢ï¼å¤§å¤§æé«æ¼æ´åæè¿ç¨çæçãè¿å¯ä»¥å°è°è¯è¿ç¨ä¿å­ææä»¶ï¼æ¹ä¾¿åäº«ç»ä»äººè°è¯ï¼ç®ååªå¨ WinDbg Preview çæ¬æä¾ï¼åªæ¯æ User-Modeã

éå¸¸æä¸ä¸ªä¸æ¶é´æè¡è°è¯ç¸å³çå³é®ç»ä»¶ï¼

- ä¸ä¸ªè®°å½å¨ï¼è®°å½ææåççäºï¼
- ä¸ä¸ªè·è¸ªæä»¶ï¼è®°å½ææçæçæä»¶ï¼
- ä¸ä¸ªéæ¾å¨ï¼éæ¾ææåççäºã

ä½¿ç¨ TTD éè¦æåæä½æéï¼ä½¿ç¨å·æç®¡çåæéçå¸æ·å®è£ WinDbg é¢è§çï¼å¹¶å¨è°è¯å¨ä¸­è®°å½æ¶ä½¿ç¨è¯¥å¸æ·è¿è¡è°è¯å¨ã

è·è¸ªæä»¶å¯è½ä¼å¾å¤§ï¼TTD ç¨æ·éè¦ç¡®ä¿æè¶³å¤çå¯ç¨ç©ºé´ãå¦æè®°å½ç¨åºçè³å åéï¼è·è¸ªæä»¶å¯è½ä¼å¿«éå¢é¿å°å  GBã TTD ä¸ä¼è®¾ç½®è·è¸ªæä»¶çæå¤§å¤§å°ï¼ä»¥åè®¸å¤æçé¿æ¶é´è¿è¡æ¹æ¡ã å¿«ééæ°åå»ºé®é¢ï¼ å°å°½å¯è½åå°è·è¸ªæä»¶å¤§å°ã

è·è¸ªæä»¶ .run å­å¨è®°å½ä¸è¿è¡ä¸­çä»£ç ï¼å¯ä»¥ä½¿ç¨ WinDbg æå¼éå¤æ­æ¾ï¼æä»¶ > å¯å¨è°è¯ > æå¼è·è¸ªæä»¶ãåæ­¢è®°å½åï¼ä¼åå»ºç´¢å¼ .IDX æä»¶ä»¥ä¾¿æ´å¿«å°è®¿é®è·è¸ªä¿¡æ¯ãå½ WinDbg é¢è§çæå¼è·è¸ªæä»¶æ¶ï¼ä¹ä¼èªå¨åå»ºç´¢å¼æä»¶ãç´¢å¼æä»¶ä¹å¯ä»¥å¾å¤§ï¼éå¸¸æ¯è·è¸ªæä»¶å¤§ä¸¤åã

å¯ä»¥ä½¿ç¨ `!tt.index` å½ä»¤ä»è·è¸ªæä»¶éæ°åå»ºç´¢å¼æä»¶ï¼è¿ä¸ªæ©å±å½ä»¤éè¦ tt æ¨¡åã

è¦ä½¿ç¨ TTD è®°å½ï¼æå¼ WinDbg -> æä»¶ -> Launch Executable(advanced) å¹¶ä¸å¾éå³ä¸è§ç Record with Time Travel Debuggingï¼å¦å¤è¿æ¯æéå å°è¿ç¨å¹¶è®°å½ TTD è·è¸ªã

When the application being recorded terminates, the trace file will be closed and written out to disk. This is the case if your program crashes as well.

When a trace file is opened, the debugger will automatically index the trace file. Indexing allows for more accurate and faster memory value look ups. This indexing process will take longer for larger trace files.

ç¨åºæ­£å¸¸è¿è¡çè¿ç¨ä¼è¢«è®°å½ä¸æ¥ï¼å®ææä½æ£å³é­åºç¨ç¨åºï¼è¿æ¶è·è¸ªæä»¶å°å³é­å¹¶ååºå°ç£çãå¦æç¨åºå´©æºï¼ä¹ä¼åºç°è¿ç§æåµã

æå¼è·è¸ªæä»¶æ¶ï¼è°è¯å¨å°èªå¨ä¸ºè·è¸ªæä»¶ç¼å¶ç´¢å¼ãç´¢å¼å¯å®ç°æ´åç¡®ãæ´å¿«çåå­ä»·å¼æ¥æ¾ãå¯¹äºè¾å¤§çè·è¸ªæä»¶ï¼æ­¤ç´¢å¼è¿ç¨éè¦æ´é¿çæ¶é´ã

å³é®å¸§æ¯è·è¸ªä¸­ç¨äºç´¢å¼çä½ç½®ï¼èªå¨çæå³é®å¸§ãè¾å¤§çè·è¸ªå°åå«æ´å¤å³é®å¸§ï¼å¯¹è·è¸ªè¿è¡ç´¢å¼åï¼å°æ¾ç¤ºå³é®å¸§çæ°éã

æ­¤æ¶ï¼ä½ å¤äºè·è¸ªæä»¶çå¼å¤´ï¼å¹¶ä¸å·²åå¤å¥½åååååç§»å¨ã

ä½¿ç¨æ­ç¹æ¯ä¸ç§å¨ç¸å³äºä»¶ä¸­æåä»£ç æ§è¡çå¸¸è§æ¹æ³ãTTD æ¯å¯ä¸çï¼ä½ å¯ä»¥è®¾ç½®æ­ç¹ï¼å¹¶å¨è®°å½è·è¸ªåï¼å¨å½ä¸­è¯¥æ­ç¹ä¹ååæ¶æ­æ¾ã å¨åºç°é®é¢åæ£æ¥è¿ç¨ç¶æçåè½ï¼ç¡®å®æ­ç¹çæä½³ä½ç½®ï¼å¯ç¨å¶ä»è°è¯å·¥ä½æµã

å¨ TTD æ¨¡å¼ä¸ï¼ç¨åºçè¡ä¸ºå·²ç»å½¢æè®°å½ï¼èéå¸¸ç Setp Into è¿æ ·çå½ä»¤ï¼å°±å¯ä»¥éååæº¯ï¼æä»¥ t å½ä»¤çåå¸¦å½¢å¼ `t-` å°±æ¯ Step Into Back!

æææ­ç¹ä¹ä¼å¨åå¸¦æ¶è§¦åå¹¶ä¸­æ­è°è¯å¨ï¼`g-` åå¸¦è¿è¡ä¼å¨ä¸­æ­ç¹åæ­¢è¿è¡ãåªè¯»æ­æ¾ï¼å¯ä»¥ä½¿ç¨è¯»ååå­å½ä»¤ï¼ä½ä¸è½ä½¿ç¨ä¿®æ¹æåå¥åå­çå½ä»¤ã

- `g-` Go Back
- `t-` Step Into Back
- `p-` Step Over Back
- `g-u` Step Out Back
- `!tt 0` Time Travel to Start
- `!tt 100` Time Travel to End
- `!positions` æ¾ç¤ºæææ´»å¨çº¿ç¨ï¼åæ¬å®ä»¬å¨è·è¸ªä¸­çä½ç½®ã

æ¶é´çº¿å¯ä»¥ 0% å° 100% æ¥å®ä½ï¼`!tt 0` ç»åå¸¦å°ç¨åºåå¤æ§è¡çä½ç½®ï¼æèæå®çº¿ç¨çæ¶é´çº¿ä½ç½®å¦ `!tt 13:100`ã

å¨ ttdext ä¸­å®ç°äº TTD æ©å±å½ä»¤ï¼æ¶é´æè¡æ©å±å½ä»¤èªå¨å è½½ï¼æ éä½¿ç¨ load å½ä»¤æå¨å è½½ TtdExt.dll æ©å±ï¼æä»¥ï¼å¯ä»¥ç´æ¥ä½¿ç¨æ©å±æ¨¡åè°ç¨æ¶é´æè¡å½ä»¤ï¼å¦ `!ttdext.tt 465:0`ã

çé¢ä¸­çæ¶é´çº¿é¢æ¿å¯ä»¥è¿ä¸æ­¥ç­éç¹å®å¼å¸¸ä»£ç çå¼å¸¸ï¼å¯ä»¥æ¾ç¤ºä»¥ä¸äºä»¶ï¼

- æ­ç¹
- å½æ°è°ç¨ (æ moduleï¼ function å½¢å¼æç´¢)
- åå­è®¿é® (ä¸¤ä¸ªåå­å°åä¹é´çè¯»å/åå¥/æ§è¡)

å°é¼ æ æ¬åå¨æ¯ä¸ªäºä»¶ä¸ï¼ä»¥éè¿å·¥å·æç¤ºè·åè¯¦ç»ä¿¡æ¯ãåå»æä¸ªäºä»¶å°å¯¹è¯¥äºä»¶è¿è¡æ¥è¯¢å¹¶æ¾ç¤ºè¯¦ç»ä¿¡æ¯ãåå»æä¸ªäºä»¶å°è·³è½¬å° TTD è·è¸ªæä»¶ä¸­çè¯¥ä½ç½®ã

æ¶é´çº¿æ¯æ§è¡è¿ç¨ä¸­åççäºä»¶çç´è§è¡¨ç¤ºå½¢å¼ï¼è¿äºäºä»¶å¯ä»¥æ¯ä»¥ä¸ä½ç½®ï¼æ­ç¹ãåå­è¯»å/åå¥ãå½æ°è°ç¨åè¿åä»¥åå¼å¸¸ã

ä½¿ç¨ "æ¶é´çº¿" çªå£å¯ä»¥å¿«éæ¥çéè¦äºä»¶ï¼äºè§£ç¸å¯¹ä½ç½®ï¼å¹¶è½»æ¾è·³å°å®ä»¬å¨ TTD è·è¸ªæä»¶ä¸­çä½ç½®ï¼ä½¿ç¨å¤ä¸ªæ¶é´çº¿ç´è§å°æµè§è¡ç¨è·è¸ªä¸­çäºä»¶å¹¶åç°äºä»¶ç¸å³ã

æ¶é´çº¿å¯ç¨é¼ æ ææ§ï¼

- ä½¿ç¨ Ctrl + æ»è½®æ¾å¤§åç¼©å°ã
- ä½¿ç¨ Shift + æ»è½®ä»ä¸ç«¯å¹³ç§»ã

æ¶åç©¿è¶è°è¯å¯ä»¥ä½¿ç¨ä»»ä½å¯¹è±¡å»ºç«æ¶é´çº¿æ¨¡åï¼

```sh
#// TTD è°ç¨å¯¹è±¡ 
dx -r2 @$cursession.TTD.Calls("ucrtbase!initterm")
#// TTD å å¯¹è±¡
dx -g @$cursession.TTD.Data.Heap()
#// TTD åå­å¯¹è±¡
dx -g @$cursession.TTD.Memory(0x00a4fca0,0x00a4fca4, "r")
#// TTD äºä»¶å¯¹è±¡
dx -r2 @$curprocess.TTD.Events.Where(t => t.Type == "Exception").Select(e => e.Exception)
#// TTD å¼å¸¸å¯¹è±¡
dx -r2 @$cursession.TTD.Calls("kernelbase!GetLastError").OrderByDescending(c => c.TimeStart)
#// TTD çº¿ç¨å¯¹è±¡
dx -g @$curprocess.TTD.Threads
dx -r2 @$curprocess.TTD.Threads[0]
dx @$curprocess.TTD.Threads[0].@"ActiveTime".@"MinPosition".SeekTo()
#// TTD ä½ç½®å¯¹è±¡
#// TTD èå´å¯¹è±¡
#// TTD æ¨¡åå¯¹è±¡
#// TTD éåå¯¹è±¡
#// JavaScript TTD å½ä»¤èªå¨å
```

ä½¿ç¨æ¾ç¤ºè°è¯å¨å¯¹è±¡æ¨¡åè¡¨è¾¾å¼å½ä»¤å¯ä»¥æ¥è¯¢è¿äºå¯¹è±¡ï¼

    dx [-g|-gc #][-c #][-n|-v]-r[#] Expression[,<FormatSpecifier> ]
    dx [{-?}|{-h}]

ä½¿ç¨ LINQ æ¥è¯¢è¯­è¨æ¥è¯¢è°è¯å¨å¯¹è±¡çå¸¸è§ä¿¡æ¯ï¼å¦ä¸æ¯ä¼è¯å¯¹è±¡åå½åè¿ç¨ç TTD å½åç©ºé´ï¼

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

åºæ¬å±æ§ï¼

- Lifetime æè¿°æ´ä¸ªè·è¸ªççå­æç TTD èå´å¯¹è±¡ã
- Threads åå« TTD çº¿ç¨å¯¹è±¡çéåï¼æ¯ä¸ªçº¿ç¨å¨è·è¸ªçæ´ä¸ªçå­æåé½ä¸ä¸ªã
- Events  åå« TTD äºä»¶å¯¹è±¡çéåï¼å¶ä¸­æ¯ä¸ªäºä»¶é½å¯¹åºäºè·è¸ªä¸­çæ¯ä¸ªäºä»¶ã
- SetPosition æ¹æ³ï¼éç¨ 0 å° 100 ä¹é´çæ´æ°æä»¥ Nï¼N å½¢å¼è¡¨ç¤ºçå­ç¬¦ä¸²ä½ä¸ºè¾å¥ï¼å¹¶å°è·è¸ªè·³è½¬å°è¯¥ä½ç½®ã

ä¾å¦ï¼ä»¥ä¸ä½¿ç¨ LinQ æ¥è¯¢è¯­è¨æ¥è¯¢ GetLastError äºä»¶åè¡¨ï¼ä½¿ç¨ OrderBy è¿è¡æåºï¼ä¸æ TimeStart æååºæåºã

```sh
0:003> dx -r2 @$cursession.TTD.Calls("kernelbase!GetLastError").OrderBy(c => c.TimeStart)
@$cursession.TTD.Calls("kernelbase!GetLastError").OrderBy(c => c.TimeStart)                
    [0x0]           
        EventType        : 0x0
        ThreadId         : 0x48f0
        UniqueThreadId   : 0x2
        TimeStart        : 21:214 [Time Travel]
        SystemTimeStart  : 2021å¹´5æ12æ¥ 10:10:02.399
        TimeEnd          : 21:217 [Time Travel]
        SystemTimeEnd    : 2021å¹´5æ12æ¥ 10:10:02.399
        Function         : UnknownOrMissingSymbols
        FunctionAddress  : 0x76152ad0
        ReturnAddress    : 0x7713a9a8
        ReturnValue      : 0x0
        Parameters      
    ...
```

LinQ æä¾çè¯¸å¦ Last()ãFirst()ãGroupByãWhere ç­ä¸ç³»åæ¹æ³ï¼å°±åä½¿ç¨ SQL ä¸æ ·æ¹ä¾¿ã




### ð Breakpoints

æ­ç¹åºæ¬åè½ï¼

- æ­ç¹å¯ä»¥ä¸çº¿ç¨å³èã
- æ­ç¹å¯ä»¥è®¾å®å¨åºå®çåå­å°åä¸ï¼CPU ç»è¿æ¶è§¦åã
- æ­ç¹è§¦åæ¶å¯ä»¥èªå¨æ§è¡å½ä»¤ã
- æ­ç¹å¯ä»¥è®¾ç½®å¨åå­çéæ§è¡åºï¼CPU è¯»åæ°æ®æ¶è§¦åã

ä½¿ç¨ ba è®¾ç½®æ­ç¹å¯ä»¥æ ¹æ®è®¿é®ç±»å Access è§¦åï¼

- e (execute) CPU è·åæå®å°åçæä»¤æ¶ä¸­æ­ã
- r (read/write) CPU è¯»åæå®å°åæ¶ä¸­æ­ã
- w (write) CPU åæå®å°åæ¶ä¸­æ­ã
- i (I/O) è®¿é® I/O ç«¯å£æ¶ä¸­æ­ï¼Windows XP+ ç³»ç»ææï¼x86 æ¶æï¼kernel mode æ¨¡å¼ä¸ææã

æ­ç¹å½ä»¤ï¼

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

Bp æ­ç¹ä¸æªè§£ææ­ç¹ bu æ­ç¹ä¹é´æä¸ä¸ªä¸»è¦å·®å¼ï¼

- bp æ­ç¹ä½ç½®å§ç»è½¬æ¢ä¸ºå°åã bu æ­ç¹ä¸ç¬¦å·å¼å³èï¼å³ä½¿å¶å°ååçæ´æ¹ï¼ä¹ä¼è·è¸ªè¯¥ç¬¦å·ä½ç½®ã
- bp æ­ç¹å¨å¸è½½è¯¥æ¨¡ååï¼ä¼ä»æ­ç¹åè¡¨ä¸­å é¤è¯¥æ­ç¹ãå¨éå¤å¸è½½åå è½½åï¼bu æ­ç¹ä¼ä¿æä¸åã
- bp æ­ç¹ä¸ä¿å­å¨ WinDbg å·¥ä½åºä¸­ï¼è bu è®¾ç½®çæ­ç¹ä¿å­å¨å·¥ä½åºä¸­ã

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



### ð Stack Frames

Stack Frame æ å½ä»¤ï¼

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

å¨ä¸åç CPU æ¶æææ¨¡å¼ä¸­ï¼å¯ä»¥ä½¿ç¨ä¸åçåæ°ï¼ä¹å¯ä»¥æå®çº¿ç¨ãå¤çå¨ç­åç¼ï¼çº¦æå½ä»¤ä½ç¨çå·ä½å¯¹è±¡ã

ä½¿ç¨åæ°å¦ä¸ï¼

- `Thread` æå®è¦æ¾ç¤ºè°ç¨æ ççº¿ç¨ï¼åèçº¿ç¨æ å¿å½ä»¤ï¼éè¿æ³¢æµªå·è·åçº¿ç¨æ å¿ã
- `Processor` æå®è¦æ¾ç¤ºè°ç¨æ çå¤çå¨ï¼åè Multiprocessor å½ä»¤è¯­æ³ï¼éè¿åç®¡éç¬¦å·è·åå¤çå¨æ å¿ã
- `b` æ¾ç¤ºåä¼ å¥å½æ°çä¸ä¸ªåæ°ã
- `c` æ¾ç¤ºæ´æ´çæ è½¨ã
- `p` æ¾ç¤ºææä¼ å¥å½æ°çåæ°ã
- `P` ç±»ä¼¼ p ä½åæ°æ¾ç¤ºå¨ç¬¬äºè¡ã
- `v` æ¾ç¤ºå¸§æéçç¥ä¿¡æ¯ frame pointer omission (FPO)ã
- `n` æ¾ç¤ºå¸§å·ã
- `f` æ¾ç¤ºåå­è·ç¦»ã
- `L` éèè¡å·ã
- `M` è¾åºä½¿ç¨ Debugger Markup Languageï¼è¿æ ·å¯ä»¥ç¹å»é¾æ¥å®ä½å°åå­ã
- `FrameCount` æå®æ¾ç¤ºçå¸§æ°éã
- `BasePtr` æå®æ è½¨åºåã
- `StackPtr` æå®æ æéï¼çç¥ StackPtr è¡¨ç¤ºä½¿ç¨ rsp (esp) å¯å­å¨ã
- `InstructionPtr` æå®æä»¤æéï¼çç¥ InstructionPtr è¡¨ç¤ºä½¿ç¨ rip (eip) å¯å­å¨ã
- `WordCount` æå®æ åå­æ£æ¥ç DWORD_PTR æ°éï¼é»è®¤ä¸º .kframes 256ã


### ð Assembly & Enter

æä¾æ±ç¼æä»¤è¾å¥ãæ°æ®å½å¥å½ä»¤ï¼`.asm` å `e`ï¼ä¸è¦æ··æ· `~e` (Thread-Specific Command)ï¼

```sh
# e, ea, eb, ed, eD, ef, ep, eq, eu, ew, eza (Enter Values)
e{b|d|D|f|p|q|w} Address [Values] 
e{a|u|za|zu} Address "String" 
e Address [Values]

.asm[-] Options # Change Disassembly Options
a [Address] # Assemble Code
```

æ°æ®å½å¥æ¨¡å¼ä¸­ï¼ç´æ¥æ ENTER è¡¨ç¤ºç»æå½å¥ï¼è¿åæ­£å¸¸å½ä»¤ç¶æã

åæ±ç¼å½ä»¤å¦ä¸ï¼

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


### ð Memory Check

æ¾ç¤ºåå­æ°æ®çå½ä»¤ï¼

```sh
# d, da, db, dc, dd, dD, df, dp, dq, du, dw (Display Memory)
d{a|b|c|d|D|f|p|q|u|w|W} [Options] [Range] 
dy{b|d} [Options] [Range] 
d [Options] [Range] 
d /c4
```

ä¾å¦ï¼ä½¿ç¨åå­æ£æ¥å½ä»¤ï¼æ£æ¥ä¸ä¸ª long * æéæåçåå­ï¼æèä½¿ç¨ MASM æ±ç¼è§£å¼ç¨æä½ç¬¦ poi è·ååå­æéæåçæ°æ®ï¼

    dd *( (long*) 0x123456 ) 
    dd poi(0x77afecc2)

æç´¢åå­æ°æ®çå½ä»¤ï¼

```sh
# s (Search Memory)
s [-[[Flags]Type]] Range Pattern 
s -[[Flags]]v Range Object 
s -[[Flags]]sa Range 
s -[[Flags]]su Range 
```

æ³¨æä¸è¦æ··æ· `~s` (Set Current Thread), `|s` (Set Current Process), `||s` (Set Current System) è¿äºå½ä»¤ã

å¯ä»¥ä¸ºæç´¢å½ä»¤æå®ä»¥ä¸æ å¿ï¼

- `s` ä¿å­å½åçæç´¢ç»æï¼å¯ä»¥åç»­åæç´¢ã
- `r` è¯»åå·²ç»ä¿å­çæç´¢ç»æï¼å¹¶æ§è¡åæç´¢ã
- `n Hits` ä¸º s æ å¿æå®å½ä¸­æ¬¡æ°ï¼é»è®¤å¼ä¸º 1024ãä¸å¶å®æ å¿ä½¿ç¨ï¼n å¿éæ¾å¨æåï¼åæ°å­çç©ºé´å¯ä»¥çç¥ãåç»­ä»»ä½ä½¿ç¨ s æ å¿çæç´¢ï¼å½ä¸­æ¬¡æ°è¶è¿æå®çæ¬¡æ°ï¼åä¼æ¾ç¤ºæº¢åºéè¯¯æ¶æ¯ï¼éç¥æ¨å¹¶éææçå½ä¸­é½è¢«ä¿å­ã
- `l Length` åªæç´¢æå®é¿åº¦ä»¥ä¸ç ASCII æ Unicode å­ç¬¦ä¸²ï¼é»è®¤é¿åº¦ä¸º 3ï¼åªå -sa or -su æ å¿éåä½¿ç¨ã
- `w` åªæç´¢å¯ååå­åºï¼å¿éä½¿ç¨æ¹æ¬å· [w]ã
- `1` åªæ¾ç¤ºæç´¢å¹éå°çå°åï¼å¯ä»¥éå .foreach å½ä»¤ä½¿ç¨ã
- `sa` æç´¢å¯æå°ç ASCII å­ç¬¦ä¸²ï¼ä½¿ç¨ `l Length` æå®é¿åº¦ã
- `su` æç´¢å¯æå°ç Unicode å­ç¬¦ä¸²ï¼ä½¿ç¨ `l Length` æå®é¿åº¦ã
- `-v` æç´¢åæå®å¯¹è±¡ç¸åçç±»åã
- Object æå®ä¸ä¸ªå¯¹è±¡çå°åï¼æå¯¹è±¡æéçå°åï¼è°è¯å¨ä¼å¨æç´¢æ¶æ¥æ¾ç¸åç±»åã 

ç±»å Type æå®å¦ä¸ï¼ä½¿ç¨è¿å­ç¬¦å· - ä¸ Flasg æ¼æ¥ï¼ 

    | Type |                       Description                        |
    |------|----------------------------------------------------------|
    | b    | Byte (8 bits)                                            |
    | w    | WORD (16 bits)                                           |
    | d    | DWORD (32 bits)                                          |
    | q    | QWORD (64 bits)                                          |
    | a    | ASCII string(not necessarily a null-terminated string)   |
    | u    | Unicode string(not necessarily a null-terminated string) |

ç¤ºèï¼

```sh
# å¨ 0000000140000000 ä½ç½®åå 400 å­èå¤æ¥æ¾ ASCII å­ç¬¦ä¸²ã 
s-sa 0000000140000000 L400
# æ¥æ¾ length >=4 ç ASCII å­ç¬¦ä¸²ã
s -[l4]sa 0000000140000000 L400
# å¨å¯ååå­åºæ¥æ¾ ASCII å­ç¬¦ä¸²
s -[wl4]sa 0000000140000000 L400
# æ¾ç¤ºå¹éçå­ç¬¦ä¸²çå°åï¼èä¸æ¯å°ååå¼ã
s -[1wl4]sa 0000000140000000 L400
# åè®¾ n æå® base is 16ï¼ä»¥ä¸ä¸ä¸ªå½ä»¤é½æ¯æç´¢ "Hello"
s 0012ff40 L20 'H' 'e' 'l' 'l' 'o' 
s 0012ff40 L20 48 65 6c 6c 6f 
s -a 0012ff40 L20 "Hello" 
```


### ð DebuggerBreak
- pragma data_seg https://docs.microsoft.com/en-us/cpp/preprocessor/data-seg?view=msvc-160
- https://isc.sans.edu/forums/diary/How+Malware+Defends+Itself+Using+TLS+Callback+Functions/6655/
- https://developpaper.com/manual-addition-of-tls-callback-function/
- TLSåè°å½æ° https://www.cnblogs.com/dliv3/p/6489629.html

å¨è¿è¡ä¸ä¸ªæ°çè¿ç¨ï¼Windows ä¼éè¿ç³»ç» API è°å¥è¿ç¨ä»£ç ï¼å¹¶ä»åå§ä»£ç æ§è¡ï¼ç´å°ç¨åºç main å¥å£ï¼

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

Windows çè¿ç¨å è½½å¨å¨å®ææåºæ¬çç¨æ·æåå§åä¹åï¼ç³»ç»çåå§åå½æ°å°±ä¼ä¸»å¨æ§è¡æ­ç¹æä»¤ INT3 è§¦åæ­ç¹ï¼æä¾ä¸ä¸ªæºä¼è®©è°è¯äººåå°½æ©çåæç®æ ç¨åºï¼è¿ä¸ªä¹å«åå§æ­ç¹ Initial break pointã

å¨åå§æ­ç¹ä¸­ï¼å¯ä»¥æå°å½åçæ è½¨ï¼åå«ä»¥ä¸å ä¸ª Windows æä¾çç³»ç»åå§å APIï¼è§¦ååå§æ­ç¹ç API å°±æ¯ LdrpDoDebuggerBreakï¼

```sh
0:000> k
# ChildEBP RetAddr      
00 0064fa4c 77ee9486     ntdll!LdrpDoDebuggerBreak+0x2b
01 0064fcac 77e72fe1     ntdll!LdrpInitializeProcess+0x1ba6
02 0064fd04 77e72ed1     ntdll!_LdrpInitialize+0xba
03 0064fd10 00000000     ntdll!LdrInitializeThunk+0x11
```

é¤è°ç¨åå§æ­ç¹ï¼å¨ LdrpInitializeProcess è¿ä¸ªè¿ç¨åå§å API éä¼æ§è¡ä¸ç³»åçåå§åå·¥ä½ï¼ç¶åè¿å LdrInitializeThunk åéè¿ Ntdll.ntcontinue æ§è¡ç¨åºä»£ç ã

è¿ç¨çä¿¡æ¯å­æ¾å¨è¿ç¨ç¯å¢å PEB - Process Envirorment Blockï¼è¿æçº¿ç¨ç¯å¢å TEB - thread environment blockï¼å¶ç¬¬ä¸ä¸ªæå NtTib å³ä¸ºçº¿ç¨ä¿¡æ¯å TIB - Thread Information Blockã

è½¯ä»¶ä¿æ¤ææ¯å¯ä»¥éè¿ PEB å­å¨çä¿¡æ¯æ¥æ£æµæ¯å¦æè°è¯å¨æ­£å¨è°è¯è¢«ä¿æ¤çè½¯ä»¶ï¼ç¶åéè¦è·åæ¯å¦è¢«è°è¯çæ¶æ¯ï¼è¿ä¸ªæ¶æ¯å­å¨å¨ PEB ç»æä¸­çç¬¬ä¸ä¸ªå­è BeingDebuggedãå¯ä»¥ä½¿ç¨ API æ¥æ£æµæ¯å¦æè°è¯å¨å­å¨ï¼è¿åé 0 å¼ä»£è¡¨è¢«è°è¯ï¼å¦æè¿å 0 ä»£è¡¨æ²¡æè¢«è°è¯ã

    BOOL WINAPI IsDebuggerPresent(void);

WinDbg æä¾äºæ©å±å½ä»¤æ¥è¯»åè¿äºç»ä½ä½ï¼`!peb` å `!teb`ï¼è¿äºé½æ¯å¸¸è§æ©å±å½ä»¤ General Extensionsã

ä¹å¯ä»¥ä½¿ç¨åå­æ£æ¥å½ä»¤ d æ¥æ¥çåå§æ°æ®ï¼æèä½¿ç¨ç¼è¾å½ä»¤ e æ¥ä¿®æ¹å®ï¼æ¯å¦ BeingDebugged è°è¯æ è®°ä½ï¼è¿æ ·å°±ä¸è½éè¿ API æ£æµæ è®°ä½äºï¼ç´æ¥åè½¦ç»æç¼è¾è¾å¥ï¼

```
db @$peb
eb @$peb+2
```

æ¯ä¸ªçº¿ç¨é½æèªå·±ç¬ç«çå±é¨å­å¨åºï¼Windows æä¾çº¿ç¨å±é¨å­å¨æºå¶ TLS - Thread Local Storageï¼ä½¿ç¨ TLS ææ¯å¯å¨çº¿ç¨åé¨ç¬ç«ä½¿ç¨æä¿®æ¹è¿ç¨çå¨å±æ°æ®æéææ°æ®ãä½¿ç¨ `!tls -1` å½ä»¤æ¥çææ TLS slotsï¼æèæå® TEB å°å `!tls -1 @$teb`ã

TLS ä¸­æ¯è¾éè¦çæåä¸º AddressOfCallbacksï¼è¯¥å¼æåå«æ TLS åè°å½æ°å°å(VA)çæ°æ®ï¼ä¸ä¸ªç¨åºä¸­å¯ä»¥æ³¨åå¤ä¸ª TLS åè°å½æ°ã

åè Windows via C/C++, Fifth Edition - Chapter 21: Thread-Local Storage

TLS åè°å½æ°ä¼å¨åå»º/ç»æ­¢è¿ç¨ççº¿ç¨æ¶èªå¨è°ç¨ï¼å¹¶ä¸åå»ºè¿ç¨çä¸»çº¿ç¨åäº EP ä»£ç æ§è¡ï¼è¯¥ç¹æ§ä½¿å®å¯ä»¥ä½ä¸ºä¸ç§åè°è¯ææ¯ä½¿ç¨ãæäºä¿æ¤å£³ç¨åºçåè°è¯ææ¯éç¨ç±»ä¼¼çææ³ï¼ä¸æ¦å£³ç¨åºçé¢è®¾çå¼å¸¸å¤çç¨åºæ²¡æè¢«è°ç¨ï¼åè¡¨æç¨åºå¤äºè¢«è°è¯ç¶æã

ä½¿ç¨ -G å½ä»¤è¡éé¡¹ä¼ä½¿ WINDBG æ CDB å¿½ç¥åå§æ­ç¹ï¼å¦æè¦å¨åºç¨ç¨åºæ§è¡å¼å§æ¶å¯å¨æ°ç®æ å¹¶å°å¶ä¸­æ­ï¼è¯·ä¸è¦ä½¿ç¨ -g éé¡¹ã

ä½¿ç¨ Visual Studio å¯ä»¥å¾æ¹ä¾¿å°ä½¿ç¨ TLS åè°å½æ°ï¼ä½æ¯ GCC æ¬èº«åå« TLS æ°æ®ååè°ï¼éè¦è¿è¡æå¨è°æ´ã

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

// åäº TLS åè°å½æ°ä½¿ç¨ printf å¯è½ä¼åç Runtime Error
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
æ³¨å TLS å½æ°ï¼
- CRT è¡¨ç¤ºä½¿ç¨ C Runtime æºå¶
- X è¡¨ç¤ºè¡¨ç¤ºåéæº
- L è¡¨ç¤º TLS Callback section
- X ä¹å¯ä»¥æ¢æ B~Y ä»»æä¸ä¸ªå­ç¬¦
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

### ð Exceptions & Event
- https://docs.microsoft.com/zh-cn/windows-hardware/drivers/debugger/controlling-exceptions-and-events
- Structured Exception Handling https://docs.microsoft.com/en-us/windows/win32/debug/structured-exception-handling

åå§æ­ç¹ä¸æ¯è°è¯å¨å¯ä»¥å¾å°çææ©æ§å¶æºä¼ï¼å¦è¿ç¨åå»ºäºä»¶å EXE æ¨¡åå è½½äºä»¶é½ä¼æ¯å®æ©ã

Windows ç¨åºè®¾è®¡ä¸­æéè¦ççå¿µå°±æ¯æ¶æ¯ä¼ éï¼äºä»¶é©±å¨ãå¼å¸¸ä¹å½ä½æ¯ä¸ç§æ¶æ¯ï¼åºç¨ç¨åºåçå¼å¸¸æ¶å°±è§¦åäºè¯¥æ¶æ¯å¹¶åç¥ç³»ç»ãç³»ç»æ¥æ¶ååæ ·ä¼æ¾å®çâåè°å½æ°âï¼ä¹å°±æ¯æä»¬çå¼å¸¸å¤çä¾ç¨ãå½ç¶ï¼å¦ææä»¬å¨ç¨åºä¸­æ²¡æåå¼å¸¸å¤ççè¯ï¼ç³»ç»ä¹ä¸ä¼ç½®ä¹ä¸çï¼å®å°å¼¹åºæä»¬å¸¸è§çåºç¨ç¨åºéè¯¯æ¡ï¼ç¶åç»æè¯¥ç¨åºãæä»¥ï¼å½æä»¬æ¹åæç»´æ¹å¼ï¼ä»¥ CALLBACK çææ³æ¥çå¾ SEHï¼å®å°ä¸åç¥ç§ã

SEH - Structured Exception Handling ç»æåå¼å¸¸å¤çæ¯ Windows æä½ç³»ç»æä¾ç»ç¨åºè®¾è®¡èçå¼ºæåçéè¯¯æå¼å¸¸çå¤çæºå¶ï¼å¨ VISUAL C++ åè£æ `_try{} _finally{}` å `_try{} _except {}` ç»æã

æä»¥å½å»ºç«ä¸ä¸ª C++ try è¯­å¥åæ¶ï¼ç¼è¯å¨å°±çæä¸ä¸ª SEH_try åãä¸ä¸ª C++ catch æµè¯åæä¸ä¸ª SEH å¼å¸¸è¿æ»¤å¨ï¼å¹¶ä¸ catch ä¸­çä»£ç åæ SEH_except åä¸­çä»£ç ã

å¼å¸¸å¤çå¨å¶å®åå«åæ ¸å¼å¸¸å¤çï¼åå¸¸ç¨ç Ring 3 å¼å¸¸å¤çï¼è¿ç§å¼å¸¸å¤çæµç¨å¦ä¸ï¼

1. äº¤ç»è°è¯å¨(first-chance) 
2. æ§è¡ VEH
3. æ§è¡ SEH
4. TopLevelEH(è¿ç¨è¢«è°è¯æ¶ä¸ä¼è¢«æ§è¡)
5. äº¤ç»è°è¯å¨(second-chance)
6. è°ç¨å¼å¸¸ç«¯å£éç¥ csrss.exe

- `SetUnhandledExceptionFilter` ä¸ºæ¯ä¸ä¸ªè¿ç¨æçº¿ç¨æ³¨åä¸ä¸ªå¤ç catch/expect æ²¡æå¤ççå¼å¸¸å¤çå½æ°ï¼è¿æ¯åºç¨ç¨åºå¤çå¼å¸¸çæåæºä¼ã
- `UnhandledExceptionFilter` å°æªå¤ççå¼å¸¸ä¼ éç»è°è¯å¨å¤çï¼å¦æç¨åºå¤çäºè°è¯ä¸­ã

å¥½å¤å£³ç¨åºæ³¨åå®è£äºå¼å¸¸å¤çç¨åºæ¥æå¼ Ollydbg è¿ç±»éåå·¥å·ã

ç¨åºå¯ä»¥ä¸»å¨è§¦åä¸ä¸ªå¼å¸¸ï¼`RaiseException`ï¼ä¸ä¸å¨ try-catch ä¸­å¤çå®ï¼å¦æå­å¨è°è¯å¨åè°è¯å¨å°±ä¼æ¥ç®¡è¿ä¸ªå¼å¸¸ï¼é£ä¹è¿ä¸ªå¼å¸¸å°±ä¸ä¼èµ°å°æä»¬ç SetUnhandledExceptionFilter æ³¨åçå¼å¸¸å¤çå½æ°ï¼å½ç¶è°è¯å¨ä¹å¯ä»¥éæ©ä¸æ¥ç®¡è¿ä¸ªå¼å¸¸ï¼æä»¥è¿å±äºä¸ç§æ¯è¾ä½çº§çåè°è¯ææ®µã

åçå¼å¸¸æ¶ï¼ç³»ç»é¦åå¤æ­ç®æ ç¨åºå¦ææ­£å¨è°è¯ä¸­ï¼åç³»ç»æèµ·ç¨åºå¹¶åè°è¯å¨åé DEBUG_EVENT ç»æä½æºå¸¦ EXCEPTION_DEBUG_EVENT æ¶æ¯ã

å¨ææå¯è½çå¤çéå¾é½å°è¯è¿åï¼ç³»ç»ä¼æä¾é»è®¤çå¼å¸¸å¤çç¨åºï¼éå¸¸æ¾ç¤ºä¸ä¸ªå¯¹è¯æ¡ï¼å¯ä»¥éæ©å³é­æéå å°è°è¯å¨ä¸è¿è¡è°è¯ï¼å¦æä¸è°è¯å°±è°ç¨ ExitProcess ç»ç»ç¨åºã

å¨ç»ç»ä¹åï¼ç³»ç»ä»ç¶å¯¹åçå¼å¸¸ççº¿ç¨å¼å¸¸å¤çå¥ææ¥ä¸æ¬¡å±å¼ï¼è¿æ¯çº¿ç¨å¼å¸¸å¤çä¾ç¨æåæ¸ççæºä¼ã


è¿ç¨åå»ºäºä»¶ cpr é»è®¤æ¯å¿½ç¥å¤ççï¼å¯ä»¥éè¿å½ä»¤ sxe cpr æ¥ä¿®æ¹å¤çç¶æï¼å°å¶æ¹åä¸º break ä¸­æ­ç¶æãç¶å .restart å°±å¯ä»¥å¨è¿ç¨åå»ºçæ¶åæ­ç¹è°è¯ã

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

åä»¥ ld - Load module äºä»¶ä¸ºä¾ï¼é»è®¤æ¯ output ç¶æï¼å³è°è¯ä¼è¾åºæ¨¡åå è½½çä¿¡æ¯ï¼

```sh
ModLoad: 753f0000 75415000   C:\Windows\SysWOW64\IMM32.DLL
ModLoad: 77390000 7739f000   C:\Windows\SysWOW64\kernel.appcore.dll
ModLoad: 76380000 7643f000   C:\Windows\SysWOW64\msvcrt.dll
```

å¯ä»¥éè¿å½ä»¤ sxe ld æ¥ä¿®æ¹æ¨¡åå è½½äºä»¶åçæ¶ï¼è¿å¥ä¸­æ­ã

è¿å¯ä»¥ä½¿ç¨ä»¥ä¸åæ¨¡åç¸å³çå½ä»¤ï¼

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

å¨æåè°è¯ææ¯é¨åï¼ä¸é¨ä»ç»äºæ§å¶å¼å¸¸ä¸äºä»¶ Controlling Exceptions and Eventsã

å½ Windows æä½ç³»ç»åè®¸è°è¯å¨å¤çå¼å¸¸æ¶ï¼çæå¼å¸¸çåºç¨ç¨åºä¼ä¸­æ­è°è¯å¨ã ä¹å°±æ¯è¯´ï¼åºç¨ç¨åºä¼åæ­¢å¹¶ä¸è°è¯å¨ä¼å¤äºæ´»å¨ç¶æã ç¶åï¼è°è¯å¨å¯ä»¥éè¿æç§æ¹å¼å¤çå¼å¸¸æåæè¿ç§æåµã ç¶åï¼è°è¯å¨å¯ä»¥ç»æè¿ç¨ï¼æè®©å®ç»§ç»­è¿è¡ã

å¦æè°è¯å¨å¿½ç¥å¼å¸¸å¹¶ä½¿åºç¨ç¨åºç»§ç»­è¿è¡ï¼åæä½ç³»ç»å°æ¥æ¾å¶ä»å¼å¸¸å¤çç¨åºï¼å°±åæ²¡æè°è¯å¨ä¸æ ·ã å¦æå¼å¸¸è¢«å¤çï¼åºç¨ç¨åºå°ç»§ç»­è¿è¡ã ä½æ¯ï¼å¦æå¼å¸¸ä»æªå¤çï¼è¿ç§æåµåä¼åè°è¯å¨æä¾äºæ¬¡æºä¼æ¥å¤çå¼å¸¸ã

å½å¼å¸¸æäºä»¶ä¸­æ­è°è¯å¨æ¶ï¼å¯ä»¥ä½¿ç¨è°è¯å¨æ¥æ£æ¥æ­£å¨æ§è¡çä»£ç ååºç¨ç¨åºæ­£å¨ä½¿ç¨çåå­ãå¯ä»¥è·³è½¬å°ç¨åºçä¸åä½ç½®ï¼ä¹å¯ä»¥å é¤æ­¤å¼å¸¸æ¥æºã

å¯ä»¥éè¿ gh (Go with Exception Handled) å½ä»¤ï¼æ gn (Go with Exception Not Handled) å½ä»¤å¤çå¼å¸¸ï¼ä»¥ç»§ç»­æ§è¡ç¨åºã

å¦æå¨è°è¯å¨çç¬¬äºä¸ªæºä¼ä¸­ååº gn å½ä»¤æ¥å¤çå¼å¸¸ï¼ååºç¨ç¨åºå°ç»æã

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

ä½¿ç¨ gh å½ä»¤æ¶ï¼æå® a æ å¿è¡¨ç¤ºç±»ä¼¼ ba åå»ºçå¤çå¨ä¸­æ­ï¼èä¸æ¯ç±»ä¼¼ bp æ bm åå»ºçè½¯ä¸­æ­ãå¦æ BreakAddress çç¥ï¼åä¸åå»ºä¸­æ­ï¼a æ å¿æ æã

å¯ä»¥ä½¿ç¨ .lastevent å½ä»¤æ¾ç¤ºæè¿çå¼å¸¸æäºä»¶ã

è°è¯ä¸­ä½¿ç¨ä»¥ä¸å½ä»¤æ¥æ§å¶è°è¯å¦ä½ååºå¼å¸¸æäºä»¶ï¼ä¸»è¦æ¶åå¤çç¶ææä¸­æ­ç¶æï¼

```sh
#// sx, sxd, sxe, sxi, sxn, sxr, sx- (Set Exceptions)
sx{e|d|i|n} [-c "Cmd1"] [-c2 "Cmd2"] [-h] {Exception|Event|*} 
sx- [-c "Cmd1"] [-c2 "Cmd2"] {Exception|Event|*} 
sx  #// displays the default behavior of the debugger for each exception and event.
sxr #// state reset to defaults
```

è°è¯å¨å¯ä»¥è®¾ç½®æ¯ä¸ªå¼å¸¸æäºä»¶çä¸­æ­ç¶æï¼

- äºä»¶åç ("ç¬¬ä¸æ¬¡æºä¼" ) åï¼å°±ä¼ç«å³ä¸­æ­è°è¯å¨ã
- å¦æå¶ä»éè¯¯å¤çç¨åºææºä¼ååº ("ç¬¬äºæ¬¡æºä¼" ) ï¼äºä»¶å¯è½ä¼å¨ä¸­ä¸­æ­ã
- æ­¤äºä»¶è¿å¯ä»¥åè°è¯å¨åéæ¶æ¯ï¼ä½ä¼ç»§ç»­æ§è¡ã
- è°è¯å¨å¯ä»¥å¿½ç¥æ­¤äºä»¶ã

å½ä»¤è§£æï¼

- sx å½ä»¤æ¾ç¤ºå½åè¿ç¨å¼å¸¸åè¡¨ï¼åæ¬é»è®¤å¤çè¡ä¸ºã
- sxe, sxd, sxn, sxi ç­å½ä»¤è®¾ç½®è°è¯å¨å¦ä½å¤çå¼å¸¸æäºä»¶ã
- sxr å½ä»¤æ¢å¤ææå¼å¸¸æäºä»¶çé»è®¤å¤çæ¹å¼åç¶æã
- sx- å½ä»¤ç¨æ¥æ´æ¹æå®äºä»¶ç first-chance å second-chance å½ä»¤å³èï¼ä½ä¸æ¹åå¶å®ç¶æè®¾ç½®ã
- å¦æä½¿ç¨ -h éé¡¹ï¼æèæå® cc, hc, bpec, ssec äºä»¶ï¼é£ä¹ï¼sxe, sxd, sxn, sxi å½ä»¤å°æ§å¶å¼å¸¸æäºä»¶çå¤çç¶æãå¨ææå¶ä»æåµä¸ï¼è¿äºå½ä»¤æ§å¶å¼å¸¸æäºä»¶çä¸­æ­ç¶æã

è®¾ç½®å¼å¸¸æäºä»¶çä¸­æ­ç¶ææ¶ï¼å¯ä»¥ä½¿ç¨ä»¥ä¸å½ä»¤ï¼

    | Command |   Status name   |                                        Description           |
    |---------|-----------------|--------------------------------------------------------------|
    | sxe     | Break (Enabled) | å¼å¸¸åçæ¶ç«å³ä¸­æ­ï¼å¶å®å¼å¸¸å¤çæ¿æ´»åï¼è¿ç§æ¯é¦æ¬¡å¤çæºä¼ã        |
    | sxd     | (Disabled)      | è°è¯å¨ä¸è¿è¡ first-chance ä¸­æ­ï¼ä½ä¸ºåç»­ä¸è½å¤ççå¼å¸¸è¿è¡ä¸­æ­ã   |
    | sxn     | Output (Notify) | åçæ­¤å¼å¸¸æ¶ï¼ç®æ åºç¨ç¨åºæ ¹æ¬ä¸ä¼ä¸­æ­è°è¯å¨ï¼åªæ¾ç¤ºä¸æ¡æ¶æ¯ã |
    | sxi     | Ignore          | åçæ­¤å¼å¸¸æ¶ï¼ç®æ åºç¨ç¨åºä¸ä¼ä¸­æ­å°è°è¯å¨ä¸­ï¼å¹¶ä¸ä¸ä¼æ¾ç¤ºä»»ä½æ¶æ¯ã|

è®¾ç½®å¤çç¶ææ¶ï¼å½ä»¤ä½ç¨å¦ä¸ï¼

    |   Command   | Status name |           Description            |
    |-------------|-------------|----------------------------------|
    | sxe         | Handled     | æ¢å¤æ§è¡æ¶å½ä½å·²ç»å¤çã         |
    | sxd,sxn,sxi | Not Handled | ç»§ç»­æ§è¡æ¶ï¼è¯¥äºä»¶è¢«è§ä¸ºæªå¤çã |


ä»¥ä¸äºä»¶å®ä¹æå¼å¸¸çé»è®¤å¤çç¶æé½æ¯ Not Handledï¼ä¿®æ¹è¿äºæ¹å¼æ¶è¦ç¹å«å°å¿ãå¦æå°æ¹å¼ä¿®æ¹ä¸º Handledï¼åææç¬¬ä¸æ¬¡å¼å¸¸åç¬¬äºæ¬¡å¼å¸¸é½è¢«è®¤ä¸ºæ¯å·²å¤çï¼åæçææå¼å¸¸å¤çå½æ°é½ä¼è¢«è·³è¿ã

    | äºä»¶ä»£ç  |              åä¹             |      è¯´æ      |     é»è®¤ä¸­æ­æ¹å¼    |
    |----------|-------------------------------|----------------|---------------------|
    | asrt     | Assertion failure             | æ­è¨éè¯¯       | Break               |
    | av       | Access violation              | è®¿é®è¿ä¾       | Break               |
    | dm       | Data misaligned               | æ°æ®æªå¯¹é½     | Break               |
    | dz       | Divide by zero                | é¤é¶           | Break               |
    | eh       | C++ EH exception              | C++ EH å¼å¸¸    | Second-chance break |
    | gp       | Guard page violation          | é¡µä¿æ¤è¿ä¾     | Break               |
    | ii       | Illegal instruction           | éæ³æä»¤       | Second-chance break |
    | iov      | Integer overflow              | æ´æ°æº¢åº       | Break               |
    | ip       | In-page I/O error             | é¡µé¢I/Oéè¯¯    | Break               |
    | isc      | Invalid system call           | éæ³ç³»ç»è°ç¨   | Break               |
    | lsq      | Invalid lock sequence         | éæ³å éæ¬¡åº   | Break               |
    | sbo      | Stack buffer overflow         | æ ç¼å²åºæº¢åº   | Break               |
    | sov      | Stack overflow                | æ æº¢åº         | Break               |
    | wkd      | Wake debugger                 | å¤éè°è¯å¨     | Break               |
    | aph      | Application hang              | åºç¨ç¨åºæèµ·   | Break               |
    | 3c       | Child application termination | å­ç¨åºç»æ­¢     | Second-chance break |
    | ch hc    | Invalid handle                | éæ³å¥æ       | Break               |
    | Number   | Any numbered exception        | ææç¼å·çå¼å¸¸ | Second-chance break |

Application hang è¿ä¸ªå¼å¸¸å¨ Windows ç³»ç»ç»æï¼å¹¶åæ­¢ç¸åºçè¿ç¨æ¶è§¦åï¼å³æèµ·ã

å¯ä»¥ä½¿ç¨ ah å½ä»¤æå®ä¸ä¸ªå°åæ¥éå asrt ä¸­æ­ç¶æãå¦å¤ ch å hc æçæ¯åä¸ä¸ªå¼å¸¸ï¼æ§å¶å¶ä¸­æ­ç¶æä½¿ç¨ sx* ch å½ä»¤æ ¼å¼ã

```sh
# ah (Assertion Handling)
ahb [Address] 
ahi [Address] 
ahd [Address] 
ahc 
ah 
```

å½ä»¤è§£éï¼

- ahb å¨æå®çå°ååç assertion fails åä¸­æ­ã
- ahi å¿½ç¥æå®å°åç assertion failure å¼å¸¸ã
- ahd å é¤æå®å°åç assertion-handling ä¿¡æ¯ï¼æ¢å¤é»è®¤è®¾ç½®ã
- ahc Deletes all assertion-handling information for the current process.
- ah Displays the current assertion-handling settings.

ä»¥ä¸å¼å¸¸çé»è®¤å¤çæ¹å¼é½æ¯"Handled"ãç±äºè¿äºå¼å¸¸æ¯ç¨æ¥åè°è¯å¨éä¿¡çï¼æä»¥ä¸è¬ä¸è½æå®ä»¬è®¾ç½®ä¸º"Not Handled"ï¼å¦åè°è¯å¨ä¼è·³è¿è¿äºå¼å¸¸å¹¶ç±å¶ä»å¼å¸¸å¤çå¨æ¥å¤çã

åºç¨ç¨åºå¯ä»¥ä½¿ç¨ DBG_COMMAND_EXCEPTION (dbce) æ¥åè°è¯å¨éä¿¡ï¼è¿ä¸ªå¼å¸¸ç±»ä¼¼æ­ç¹ï¼ä½æ¯å¯ä»¥ä½¿ç¨ SX* å½ä»¤æ¥æå®è¯¥å¼å¸¸åçæ¶çå¯¹å¾æ¹å¼ã

    | äºä»¶ä»£ç  |                å«ä¹                |                          | é»è®¤ä¸­æ­æ¹å¼ |
    |----------|------------------------------------|--------------------------|--------------|
    | dbce     | Special debugger command exception | ä¸ç¨è°è¯å¨å½ä»¤å¼å¸¸       | Ignore       |
    | vcpp     | Special Visual C++ exception       | ä¸ç¨ Virtual C++ å¼å¸¸    | Ignore       |
    | wos      | WOW64 single-step exception        | WOW64 åæ­¥å¼å¸¸           | Break        |
    | wob      | WOW64 breakpoint exception         | WOW64 æ­ç¹å¼å¸¸           | Break        |
    | sse ssec | Single-step exception              | åæ­¥å¼å¸¸                 | Break        |
    | bpe bpec | Breakpoint exception               | æ­ç¹å¼å¸¸                 | Break        |
    | cce cc   | CTRL+C or CTRL+BREAK               | æ§å¶å°ç¨åºè¾å¥ä¸­æ­ä¿¡å·ã | Break        |

ä¸è¡¨ä¸­æåä¸ä¸ªå¼å¸¸æä¸¤ä¸ªä¸åçäºä»¶ä»£ç ï¼æ§å¶ä¸­æ­æ¹å¼æ¶ï¼ä½¿ç¨ sse, bpe, å cceãæ§å¶å¼å¸¸å¤çæ¹å¼æ¶ï¼ä½¿ç¨ ssec, bpec å ccã

ä»¥ä¸å¼å¸¸å¨è°è¯ CLR æç®¡ä»£ç æ¶æç¨ï¼

    | Event code |                    Meaning                     |          Default status         |
    |------------|------------------------------------------------|---------------------------------|
    | clr        | Common Language Runtime exception              | Second-chance break Not handled |
    | clrn       | Common Language Runtime notification exception | Second-chance break Handled     |
     

å¯ä»¥ä¿®æ¹ä¸é¢è¿äºäºä»¶çä¸­æ­æ¹å¼ï¼è¿äºä¸æ¯å¼å¸¸ï¼æä»¥åå¼å¸¸å¤çæ¹å¼æ å³ã

|    äºä»¶ä»£ç    |                     å«ä¹                    |           é»è®¤ä¸­æ­æ¹å¼           |
|---------------|---------------------------------------------|----------------------------------|
| ser           | ç³»ç»éè¯¯(System error)                      | Ignore                           |
| cpr[:Process] | åå»ºè¿ç¨(Process creation)                  | Ignore                           |
| epr[:Process] | è¿ç¨éåº(Process exit)                      | Ignore                           |
| ct            | çº¿ç¨åå»º(Thread creation)                   | Ignore                           |
| et            | çº¿ç¨éåº(Thread exit)                       | Ignore                           |
| ld[:Module]   | å è½½æ¨¡å(Load module)                       | Output                           |
| ud[:Module]   | å¸è½½æ¨¡å(Unload module)                     | Output                           |
| out[:Output]  | ç®æ ç¨åºè¾åº(Target application output)     | Ignore                           |
| ibp           | åå§æ­ç¹(Initial break point)               | ç¨æ·æ¨¡å¼ï¼Break åæ ¸æ¨¡å¼ï¼Ignore |
| iml           | åå§æ¨¡åå è½½(Initial module load)ä»åæ ¸æ¨¡å¼ | Ignore                           |

Ignoreãå¯ä»¥éè¿å ç§æ¹æ³è®¾ç½®ä¸º"Break" å³äºä¿®æ¹è¯¥æ¹å¼çæ´å¤ä¿¡æ¯ï¼æ¥çå´©æºåéèµ·ç®æ æºã

å¶ä¸­ cpr å epr ä¸¤ä¸ªäºä»¶åªå¨ CDB ç -o å½ä»¤è¡éé¡¹æ WinDbg .childdbg (Debug Child Processes) å½ä»¤å¯ç¨å­è¿ç¨è°è¯æ¶ï¼è¯¥äºä»¶æå¯æ§å¶ãè¿ç¨åå¯ä»¥åå«ä»»ææ©å±åå * ? ééç¬¦ã

å¦ææå®äºModuleï¼åå½åå­ä¸ºæå®å¼çæ¨¡åå è½½æ¶åçä¸­æ­ãå¦ææ²¡ææå®Moduleï¼ä»»ä½æ¨¡åå è½½æ¶é½ä¼ä¸­æ­ãè°è¯å¨åªä¼è®°å½æè¿ä¸æ¬¡ç ld æ ud è®¾ç½®ï¼ä¸æ¯æå¯¹å¤ä¸ªæ¨¡åå¤æ¬¡è®¾ç½®ãModule å¯ä»¥æå®æ¨¡åçåå­æå°åãå¦ææå®åå­ï¼Module å¯ä»¥åå«ééç¬¦åè¯´æãå¨ ldãud å Module ä¹é´éè¦å ä¸ä¸ä¸ªåå·æèç©ºæ ¼ãå¦æ Module åå«ééç¬¦ï¼åå­ç¬¦ä¸²æ¨¡æ¿ä¼è¢«ä¿å­ä¸æ¥å¨ä¹åçå¸è½½äºä»¶åçæ¶ç¨æ¥å¹éã

æå°æ°æåµä¸ï¼è°è¯å¨å¨å¸è½½äºä»¶åçæ¶æå°åå¹éçæ¨¡åï¼ä½æ¯æ²¡æå®çæ¨¡ååä¿¡æ¯ãå æ­¤ï¼å¦æModule åå«ééç¬¦ï¼è¿ç§æåµä¸è°è¯å¨æ æ³ç¡®å®è¢«å¸è½½æ¨¡åçåå­ï¼æä»¥ä»»ä½æ¨¡åè¢«å¸è½½é½ä¼ä¸­æ­ã

å¦ææå®äº Outputï¼ä»å½æ¥æ¶å°åæ¨¡æ¿å­ç¬¦ä¸²å¹éçè¾åºæ¶æä¸­æ­ãOutput å¯ä»¥åå«æ°ä¸ªééç¬¦åè¯´æãä½æ¯ï¼Output ä¸­ä¸è½åå«åå·æèç©ºæ ¼ãå¹éä¸æ¯å¤§å°åææçãå¨ out å Output ä¹é´åºè¯¥å ä¸ä¸ä¸ªåå·æèç©ºæ ¼ã

åå§æ­ç¹ ibp äºä»¶å¨å¼å§è°è¯ä¼è¯åéèµ·ç®æ æºæ¶åçï¼å¯ä»¥å¨å¯å¨è°è¯å¨æ¶ä½¿ç¨ -g å½ä»¤è¡éé¡¹å°è¿ä¸ªæ¹å¼å°ç¨æ·æ¨¡å¼ä¸çè®¾ç½®ä¿®æ¹ä¸º Ignoreã 

åå§æ¨¡åå è½½äºä»¶ä¹å¯ä»¥å°ä¸­æ­æ¹å¼ä¿®æ¹ä¸º "Break"ï¼åè Crashing and Rebooting the Target Computerã



### ð Thread & Processor

è®¸å¤å½ä»¤éè¦çº¿ç¨ ID ä½ä¸ºåæ°ï¼ä½¿ç¨ç®¡éç¬¦å·ï¼åé¢æå®å·ä½ççº¿ç¨ IDï¼

- `~.` å½åçº¿ç¨ã
- `~#` å½åå¼åå¼å¸¸ççº¿ç¨ã
- `~*` å½åè¿ç¨ææççº¿ç¨ã
- `~Number` æå®çº¿ç¨ç´¢å¼å· Number
- `~~[TID]` çº¿ç¨ TIDï¼æ¹æ¬å·ä¸è¦çç¥ã
- `~[Expression]` ä½¿ç¨è¡¨è¾¾å¼æå®çº¿ç¨ IDã

å¨ç¨æ·æ¨¡å¼ä¸ä½¿ç¨ `~s` å½ä»¤è®¾ç½®ææ¾ç¤ºå½åçº¿ç¨æ°ã

```
~Thread s 
~ s 
``` 

è¯·å¿åæ ¸æ¨¡å¼ä¸çå¤å¤çå½ä»¤ | Change Current Processor) æ··æ·ï¼

    |s | Set Current Process) 
    || (Set Current System)

è®¸å¤å½ä»¤éè¦è¿ç¨ ID ä½ä¸ºåæ°ï¼ä½¿ç¨ç®¡éç¬¦å·ï¼åé¢æå®å·ä½çè¿ç¨ IDï¼

- `|.` The current process.
- `|#` The process that caused the current exception or debug event.
- `|*` All processes.
- `|Number` æå®ç´¢å¼å· Number çè¿ç¨ã
- `|~[PID]` æå® PID çè¿ç¨ã
- `|[Expression]` ä½¿ç¨è¡¨è¾¾å¼æå® PID çè¿ç¨ã


è®¸å¤å½ä»¤éè¦ç³»ç» ID ä½ä¸ºåæ°ï¼ä½¿ç¨åç®¡éç¬¦å·åé¢æå®æ è¯ï¼

- `||.` The current system
- `||#` The system that caused the current exception or debug event.
- `||*` All systems.
- `||ddd` The system whose ordinal is ddd.


### ð WinDbg Symbols

Windows çè°è¯ç¬¦å·æä»¶ä¸º .pdb or .dbgï¼éå¸¸åå«ä»¥ä¸åå®¹ï¼

- Global variables
- Local variables
- Function names and the addresses of their entry points
- Frame pointer omission (FPO) records
- Source-line numbers

è°è¯ç¬¦å·æä»¶æ¯å¿ä¸å¯å°çè¾å©ï¼è°è¯è¿ç¨ä¸­ï¼å®æ´çè°è¯ç¬¦å·ä¿¡æ¯å¯ä»¥è®©ä½ æ´æ¸æ°å°ææ¡ç¨åºå½åæå¨çä½ç½®ã

ä½¿ç¨ cl.exe ç¼è¯å½ä»¤ï¼å¯ä»¥æå®è°è¯ç¬¦å·ä»¥çæ pdb æä»¶ï¼

    cl /DDEBUG /Zi tls.c user32.lib

ç¨äºè°è¯ç CL.EXE éé¡¹ï¼

    |  Option |                                 Purpose                                 |
    |---------|-------------------------------------------------------------------------|
    | /c      | Compiles without linking.                                               |
    | /FD     | Generate file dependencies                                              |
    | /Od     | Disables optimization.                                                  |
    | /Oi     | Generates intrinsic functions.                                          |
    | /DDEBUG | å®ä¹ DEBUG ç¬¦å·ï¼ä½¿ç¨è°è¯æ¨¡å¼ï¼èªå¨çæ PDB ç¬¦å·æä»¶ï¼è¿å¯ä»¥å®ä¹ _DEBUG     |
    | /MDd    | ä½¿ç¨ MSVCRTD.LIB åå»ºå¤çº¿ç¨ DLL ç¨åºè°è¯ç                                |
    | /MLd    | ä½¿ç¨ LIBCD.LIB åå»ºåçº¿ç¨ç¨åºè°è¯ç                                       |
    | /MTd    | ä½¿ç¨ LIBCMTD.LIB åå»ºå¤çº¿ç¨ç¨åºè°è¯ç                                     |
    | /Gm     | â Enables minimal rebuild.                                            |
    | /GX     | â Enables synchronous exception handling. Use /EH instead.            |
    | /GZ     | â Enables fast checks. (Same as /RTC1)                                |
    | /EH     | Specifies the model of exception handling.                              |
    | /YX     | Automates precompiled header                                            |
    | /ZI     | Debug å¨ç¨åºä¸­åå«è°è¯ä¿¡æ¯ï¼x86 ææ                                      |

å¨èç½ç¶æä¸ï¼åªè¦è°è¯å°ä¸ä¸ªæ°æ¨¡åï¼WinDbg Preview ä¼èªå¨ä¸è½½ Windows æä¾çè°è¯ç¬¦å·æä»¶ï¼

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

é»è®¤ç¼å­è·¯å¾ï¼

    C:\ProgramData\dbg\sym\

ç¬¦å·æä»¶å¯ä»¥æä¾ç» IDA è°è¯å¨ä½¿ç¨ï¼å¨å¶å®è£ç®å½ä¸ cfg\pdb.cfg æå® PDBSYM_DOWNLOAD_PATH ä¸ºç¬¦å·å®è£ç®å½ï¼æèä½¿ç¨ç¯å¢åé `_NT_SYMBOL_PATH` è®¾ç½®ç¬¦å·æä»¶çç¼å­ä½ç½®ãæå¡å¨å°åã

    set _NT_SYMBOL_PATH="cache*c:\symbols;SRV*c:\\symbols*http://msdl.microsoft.com/download/symbols"

æå¼ IDA éè¿æä»¶èåä¹å¯ä»¥è½½å¥ PDB ç¬¦å·æä»¶ã

æå®ç¬¦å·æä»¶è·¯å¾ somedirï¼è°è¯å¨ä¼ä¾æ¬¡æç´¢ï¼

- somedir\symbols\dll
- somedir\dll
- somedir

Windows æä»¥ä¸ç®å½è¿è¡ä¸åç±»åç¬¦å·çç»ç»ï¼

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


### ð WinDbg Commands

å¿«éåèï¼

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


# è®¾ç½®æºä»£ç ç®å½
.srcpath srv*;c:\someSourceCode
# æå¼æºä»£ç æä»¶
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

æ°çæ¬æä¾ DMLï¼Debugger Markup Languageï¼åè½ï¼çªå£åå®¹å¯ä»¥å HTML ä¸æ ·å·æé¾æ¥è·³è½¬åè½ï¼é»è®¤å¼å¯ `.prefer_dml 1`ã

å½ä»¤è¡æ¯è°è¯å·¥å·çå¼ºå¤§åè½ï¼ææ WinDbg çé¢æä¾çåè½é½å¯ä»¥éè¿å½ä»¤è¡å®ç°ï¼éå¸¦çæå debugger.chm æä¾äºå®æ´çåèï¼å¯ä»¥ä½¿ç¨ .hh å½ä»¤æå¼ã

å·ä½å½ä»¤çå¸®å©ä¿¡æ¯æ¥è¯¢ `.hh <command>`ï¼ææå½ä»¤åè¡¨ `.help`ï¼å¯ä»¥è·åä¸ç»å½ä»¤åè¡¨ï¼`.help /D a*` è·åæå®åç¼çå½ä»¤åè¡¨ã

è¿æéè¿ DLL æä¾çæ©å±å½ä»¤ï¼æ¥è¯¢å½ä»¤ `.chain /D`ï¼List Debugger Extensionsã

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


# ð© IDA éåå± é¾å®å
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
- IDA Pro æå¨æåï¼ç¬¬2çï¼PDF https://2lib.org/book/11448830/fa7cc5
- The IDA Pro book https://2lib.org/book/1178717/1a4beb
- Disassembling Code: IDA Pro and SoftICE https://2lib.org/book/490550/06c59a
- Reverse Engineering Code with IDA Pro https://2lib.org/book/633233/230ebc
- PYG ç ´è§£ IDA Pro 7.5 SP3 (x86/x64/ARM/ARM64/PPC/PPC64/MIPS + SDK+DOC) https://pan.baidu.com/s/1m8aYbprfc6-Gan0mdi7y2w#IPYG
- IDA Help: Cross reference attributes https://hex-rays.com/products/ida/support/idadoc/1305.shtml
- Ghidra Software Reverse Engineering Framework https://github.com/NationalSecurityAgency/ghidra

è½¯ä»¶éåå·¥ç¨ (Software Reverse Engineering)åç§°è½¯ä»¶ååå·¥ç¨ï¼æ¯æä»å¯è¿è¡çç¨åºç³»ç»åºåï¼è¿ç¨åæ±ç¼ãç³»ç»åæãç¨åºçè§£ç­å¤ç§è®¡ç®æºææ¯ï¼å¯¹è½¯ä»¶çç»æãæµç¨ãç®æ³ãä»£ç ç­è¿è¡éåæè§£ååæã

IDA Pro æå¨æåç½åäºå ä¸ªè½¯ä»¶éåææ¯çç¨éï¼

- Analysis of malware
- Analysis of closed-source software for vulnerabilities
- Analysis of closed-source software for interoperability
- Analysis of compiler-generated code to validate compiler performance/correctness
- Display of program instructions while debugging

å¨éåå·¥ç¨é¢åï¼æä¸¤ä¸ªæ³å¤´å·¥å·ï¼ä¸ä¸ªæ¯åè´¹æé¿å¨æåæç OllyDbg 2.01ï¼è¿æ¯èª 2013 å¹´æ´æ°åççæ¬ï¼å®æå¼ºå¤§çæä»¶æºå¶ãææ°ç OllyDbg x64 å¨æè°è¯å¨æ¯ç»§æ¿èï¼64-bit éåå·¥å·ï¼ä¸è¿å¼å®¹æ§ä¼¼ä¹ä¸å¤ªå¤ç¨ï¼è°è¯è¿è¡ç¨åºé½æ¯é®é¢ã

OllyDbg æ¯ä¸ä¸ªå¨æè¿½è¸ªå·¥å·ï¼å° IDA ä¸ SoftICE ç»åèµ·æ¥çäº§ç©ï¼Ring 3 çº§è°è¯å¨ï¼å¦å¤ç±äº OllyDbg æ¯ä¸ä¸ªéç¨ç 32-bit æ±ç¼åæè°è¯å¨ï¼ä¸æä½çé¢éå¸¸ç´è§ç®åï¼å·±ä»£æ¿ SoftICE æä¸ºå½ä»æä¸ºæµè¡çè°è¯è§£å¯å·¥å·ã

ç±äº OllyDbg v2.x ç®åæä»¶åè½è¿ä¸å¤ªå®åï¼å æ­¤æ²¡æ OllyDbg 1.1 çæ¬å¥½ç¨ã

å¦ä¸ä¸ªåæ¯æ¶è´¹ç IDA Proï¼å®æ¯ç®åææ£çä¸ä¸ªéæåç¼è¯è½¯ä»¶ï¼åè½æä¸°å¯ï¼ ä»å®æ¹è®°å½ç IDA 3.74 (15/02/98) å°ç°å¨ï¼è¶è¿ 20 å¹´çåå±è®© IDA Pro æä¸ºå½ä¹æ æ§çéåççå·¥å·ãå½ç¶ï¼æä¾äºåè´¹çç IDA Freewareï¼åªæ¯ç¼ºå¤± IDA > v7.6 çåè½ï¼å¹¶ä¸æ²¡æææ¯æ¯ææå¡ï¼ä½æ¯æ 32-bit å 64-bit åºç¨çåæï¼æ¯æå¤ç³»ç»å¯æ§è¡æä»¶æ ¼å¼ã

IDA Proï¼Interactive Disassembler Professionalï¼æ¯ Hex-Rays å¬å¸åºåçä¸æ¬¾äº¤äºå¼åæ±ç¼å·¥å·ï¼å®åè½å¼ºå¤§ãæä½å¤æï¼è¦å®å¨ææ¡å®ï¼éè¦å·å¤å¾å¤ç¥è¯ãIDA æä¸»è¦çç¹æ§æ¯äº¤äºåå¤å¤çå¨ï¼ç¨æ·å¯ä»¥éè¿å¯¹ IDA çäº¤äºæ¥æå¯¼ IDA æ´å¥½å°è¿è¡åæ±ç¼ãIDA å¹¶ä¸èªå¨è§£å³ç¨åºä¸­çé®é¢ï¼ä½ä¼æç¨æ·çæä»¤æ¾å°ç¨åºä¸­çå¯çä¹å¤ï¼ç¨æ·çå·¥ä½æ¯éç¥ IDA ææ ·å»åï¼äº¤äºæ§æ¯ IDA çç¹è²ä¹æ¯å¶åç§°çæ¥ç±ãIDA çä½èï¼å³ Hex-Rays å¬å¸ç CEO Ilfak Guilfanov çæ¯ä¸ªç¼ç¨å¤©æã

Kali Linux ç³»ç»é¢è£äº OllyDbgï¼OllyDbg å¯ä»¥å¨ Windows/Linux ç¯å¢ä¸­è¿è¡ï¼å¨ Linux ç WINE ä¸­è¿è¡ã

Kali æ¯åºäº Debian çæä½ç³»ç»ï¼ç± Offensive Security å¬å¸å¼ååç»´æ¤ãå®å¨å®å¨é¢åæ¯ä¸å®¶ç¥åçãå¼å¾ä¿¡èµçå¬å¸ï¼å®çè³è¿æä¸äºåäººå°æ¬çè®¤è¯ï¼æ¥å¯¹å®å¨ä»ä¸äººååèµæ ¼è®¤è¯ãæ¥æè¶è¿ 300 ä¸ªæ¸éæµè¯å·¥å·ï¼æ¥æå¼æº Git æ ç­ï¼çè³è¿éæäº 600 å¤ç§é»å®¢å·¥å·ã

å¦æï¼è¿æ³å°è¯å¶å®åè´¹çéåå·¥å·ï¼Ghidra ä¹è®¸æ¯ä¸ªä¸éçéæ©ï¼å®æ¯ç¾å½å½å®¶å®å¨å±ï¼NSAï¼ç ç©¶é¨é¨å¼åçè½¯ä»¶éåå·¥ç¨ï¼SREï¼å¥ä»¶ï¼ç¨äºæ¯æç½ç»å®å¨ä»»å¡ï¼åæ¬ä¸å¥åè½é½å¨çé«ç«¯è½¯ä»¶åæå·¥å·ãè½å¤å¨åç§å¹³å°ä¸åæç¼è¯åçä»£ç ï¼åæ¬ WindowsãMac OS å Linuxãåè½åæ¬åæ±ç¼ï¼æ±ç¼ï¼åç¼è¯ï¼ç»å¾åèæ¬ï¼ä»¥åæ°ç¾ä¸ªå¶ä»åè½ãGhidra æ¯æåç§å¤çå¨æä»¤éåå¯æ§è¡æ ¼å¼ï¼å¯ä»¥å¨ç¨æ·äº¤äºæ¨¡å¼åèªå¨æ¨¡å¼ä¸è¿è¡ï¼è¿å¯ä»¥ä½¿ç¨å¬å¼ç API å¼å Ghidra æä»¶åèæ¬ã

IDA Pro ä½ä¸ºæä½³éåå·¥å·ï¼ä»ä¸ä¸ª F5 å¿«æ·é®æä¾çåè½å¯è§ä¸æï¼ä»çæ ¸å¿å¢éçç®æ å°±æ¯å¸æä¸ºç¨æ·æä¾ä¸é®åç¼è¯è¿ä¼¼ C è¯­è¨æºä»£ç çåè½ãå¨ IDA Pro èåä¸­æ View -> Open SubViews -> Pseudocode F5ï¼å®è£äº Hex Rays decompiler æä»¶å°±æè¿é¡¹åè½ï¼å¯ä»¥å¨æ¥çæ±ç¼çæ¶åï¼æ F5 çæ C ä¼ªä»£ç ãæ³¨æï¼æä»¶æå¯¹åºä¸åç CPU æ¶æççæ¬ï¼å¦ hexrays.dll, hexarm.dll, hexarm64.dllã

IDA æä¾çä»£ç æµç¨è§å¾æ¯éå¸¸ä¼ç§çåè½ï¼ä»£ç é»è¾è¡¨è¾¾æ´æ¸æ°ï¼ç®åæäºå°è½çåºç¨åºçæ§è¡æµç¨ï¼å°¤å¶æ¯å¨ç if åæ¯ä»£ç åå¾ªç¯ä»£ç çæ¶åï¼éå¸¸ç´è§ï¼ä½¿ç¨ç©ºæ ¼é®å¯ä»¥åæ¢åæ±ç¼ä»£ç ææ¬è§å¾ã

å¨èåæ ä¸­è®¾ç½® option -> general -> line prefixes (graph) å¯ä»¥ç»è§å¾æ·»å å°ååç§»ï¼éè¦åå°åæ¶å°±éå¸¸æ¹ä¾¿ï¼ä¸åéè¦æç©ºæ ¼åæ¢è§å¾å»æ¾ã


çº¿æ§æ«æï¼linear sweepï¼åéå½ä¸éï¼recursive descentï¼æ¯ä¸¤ç§æä¸»è¦çåæ±ç¼ç®æ³ã

æ¬è´¨ä¸ IDA æ¯ä¸ç§éå½ä¸éåæ±ç¼å¨ï¼ä¸ºäºæé«éå½ä¸éè¿ç¨çæçï¼IDA å¼åèéè¦ä»åºå·¨å¤§çåªåãIDA å¨åºåæ°æ®ä¸ä»£ç çåæ¶ï¼è¿è®¾æ³ç¡®å®è¿äºæ°æ®çç±»åãè½ç¶ä½ å¨ IDA ä¸­çå°çæ¯æ±ç¼è¯­è¨å½¢å¼çä»£ç ï¼ä½ IDA çä¸»è¦ç®æ ä¹ä¸ï¼å¨äºåç°å°½å¯è½æ¥è¿æºä»£ç çä»£ç ãæ­¤å¤ï¼IDA ä¸ä»ä½¿ç¨æ°æ®ç±»åä¿¡æ¯ï¼èä¸éè¿æ´¾ççåéåå½æ°åç§°æ¥å°½å¶æè½å°æ³¨éçæçåæ±ç¼ä»£ç ãè¿äºæ³¨éå°åå§åå­è¿å¶ä»£ç çæ°éåå°æå°ï¼å¹¶æ¾èå¢å äºåç¨æ·æä¾çç¬¦å·åä¿¡æ¯çæ°éã

çº¿æ§æ«æç®æ³çä¸»è¦ä¼ç¹ï¼å¨äºå®è½å¤å®å¨è¦çç¨åºçææä»£ç æ®µãçº¿æ§æ«ææ¹æ³çä¸ä¸ªä¸»è¦ç¼ºç¹ï¼æ¯å®æ²¡æèèå°ä»£ç ä¸­å¯è½æ··ææ°æ®ãè¿è¡åæ±ç¼æ¶ï¼å¯ä»¥ç»´æ¤ä¸ä¸ªæéæ¥æ æ³¨å½åæ­£å¨åæ±ç¼çæä»¤çèµ·å§ä½ç½®ãå¨åæ±ç¼è¿ç¨ä¸­ï¼æ¯ä¸æ¡æä»¤çé¿åº¦é½è¢«è®¡ç®åºæ¥ï¼å¹¶ç¨æ¥ç¡®å®ä¸ä¸æ¡å°è¦åæ±ç¼çæä»¤çä½ç½®ãä¸ºæ­¤ï¼å¯¹ç±é¿åº¦åºå®çæä»¤ææçæä»¤éï¼å¦ MIPSï¼è¿è¡åæ±ç¼ææ¶ä¼æ´å å®¹æï¼å ä¸ºè¿æ¶å¯è½»æ¾å®ä½éåçæä»¤ã

GNU ç GDB è°è¯å¨ãå¾®è½¯ç WinDbg è°è¯å¨å objdump å·¥å·çåæ±ç¼å¼æåéç¨çº¿æ§æ«æç®æ³ã

éå½ä¸éåæ±ç¼ Recursive Descent Disassembly éç¨å¦å¤ä¸ç§ä¸åçæ¹æ³æ¥å®ä½æä»¤ï¼ç®æ³å¼ºè°æ§å¶æµçæ¦å¿µï¼æ ¹æ®ä¸æ¡æä»¤æ¯å¦è¢«å¦ä¸æ¡æä»¤å¼ç¨æ¥å³å®æ¯å¦å¯¹å¶è¿è¡åæ±ç¼ï¼è¿å¨ä¸å®çå±æ¬¡ä¸ç¸å½äºæ¨¡æ CPU çè¿è¡è¿ç¨ã


å¯¹äºè¿å¶æä»¶è¿è¡éåå·¥ç¨æ¶ï¼æä¸åºè¯¥åçäºææ¯ï¼æµªè´¹æ¶é´éååºå½æ°ï¼é£äºåªééè¯»ä¸æ¬æåãä¸æ®µæºä»£ç ææç´¢ä¸ä¸å ç¹ç½å°±å¯ä»¥æ´è½»æå°äºè§£å¶è¡ä¸ºçåºå½æ°ã

IDA ä½¿ç¨åºå¿«éè¯å«åé´å®ææ¯ FLIRT èªå¨ä¸ºä½ ä¸å°è¿äºåºä»£ç å¤çå¥½ï¼å¹¶ä¸è®¾ç½®ç¸åºçå½æ°ç¬¦å·ãFLIRT çæ ¸å¿æ¯åç§æ¨¡å¼å¹éç®æ³ï¼è¿äºç®æ³ä½¿ IDA è½å¤è¿éç¡®å®ï¼ä¸ä¸ªç»è¿åæ±ç¼çå½æ°æ¯å¦ä¸ IDA å·²ç¥çè®¸å¤ç­¾åä¸­çæä¸ä¸ªç¸å¹éãShift_F5 å¯ä»¥å¿«éæå¼ View -> Open subview -> Signaturesï¼æ¥çå½ååºç¨çåºå½æ°ç­¾åï¼è¿éå¯ä»¥äºè§£ç¨åºä½¿ç¨äºä»ä¹ç³»ç»æä¾çåºå½æ°ã

é¤äº IDA æä¾ç°æçåºç­¾åï¼ç¨æ·å¯ä»¥å¶ä½ä¸ç¨çç­¾åï¼ç¶åéè¿èåå è½½ File -> Load File -> FLIRT Signature Fileã

IDA æä¾äºä¸å¥å·¥å·ï¼ä» Object or Library æä»¶ä¸­çæç­¾åæä»¶ï¼ä¾ IDA Pro v3.8 ä»¥ä¸çæ¬ä½¿ç¨ï¼

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


IDA 7.2 å¼å¥ Lumina å¨çº¿åè½è¯å«åè½ï¼å½åæå¡éå¸¸ç®åï¼å®åå«æå³ç¥åå½æ°çåæ°æ®ï¼å½æ°åç§°ï¼ååï¼æ³¨éï¼æä½æ°ç±»ååå¶ä»ä¿¡æ¯ï¼ãä»»ä½ç¨æ·é½å¯ä»¥ä» Lumina åéææ¥æ¶åæ°æ®ãIDA åéç¸å³ä»£ç çåå¸å¼ï¼è¿è¶³ä»¥ä½¿ Lumina æ¾å°ç¸åºçåæ°æ®ãå¦ææ¾å°åæ°æ®ï¼åå°å¶ä¸è½½å¹¶åºç¨äºå½åæ°æ®åºã

ç®èè¨ä¹ï¼Lumina æ¯ä¸ç§å¾å¥½ç FLIRTï¼å¿«éåºè¯å«åè¯å«ææ¯ï¼æºå¶çåå±ï¼å¹¶è¿è¡äºä¸äºæ¹è¿ï¼

- åè½åµå¥å¨ IDA GUI ä¸­ï¼ä¸åéè¦ç¨äºçæç­¾åçå¤é¨å·¥å·ï¼
- æç»ç¨æ·å¯ä»¥éæ©è¦ä¸ºå¶çæç­¾åçåè½ï¼
- ä¸åäº FLIRTï¼ææç­¾åååæ°æ®é½å­å¨å¨åä¸ªæ°æ®åºä¸­ï¼ä»¥é¿åæ¯ä¸ªç­¾åæä»¶çåç¬å è½½ï¼
- å­å¨äºå¶ä»åæ°æ®ï¼èä¸ä»ä»æ¯è¿å»çå½æ°ååæ³¨éã

IDA 7.6 å¢å äºå¯¹ Google ç Go è¯­è¨çæ¯æï¼å å¶æç¨æ§ãé«æ§è½ãä»¥åæ éä¾èµé¡¹çèªåå«äºè¿å¶æä»¶ç¹æ§èåå¾éå¸¸æµè¡ï¼Go äºè¿å¶æä»¶ä¸å¶ä»ç¼è¯å¨çæçäºè¿å¶æä»¶å®å¨ä¸åï¼å æ­¤ IDA éè¦è¿è¡ä¸äºåæ´æ¥æ­£ç¡®æ¯æå¶ç¹æ§ã


ç¬¦å·æä»¶éç½®ï¼ç¡®è®¤ .\cfg\pdb.cfg å­å¨ï¼ä¸è¬ï¼åªéä¿®æ¹ IDA é»è®¤çéç½®æä»¶ PDBSYM_SYMPATH åé¢çæ³¨éå³å¯ãä¸ºäºä¿é©ï¼è¯·ç¡®ä¿å¯¹åºçè·¯å¾ï¼c:\symbolsï¼æ¯å­å¨çã

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

è¯´æï¼å¦æéç½®äº `_NT_SYMBOL_PATH` ç¯å¢åéå°±ä¸ç¨ä¿®æ¹è¯¥æä»¶ï¼è¿çæ­£åå°äºä¸æ¬¡è®¾ç½®ï¼å°å¤éç¨ã

éç½®å¥½åï¼éè¿ File - Load file - PDB file... æ¥å è½½ pdb ç¬¦å·æä»¶ã


## â¡ Interactive Disassembler
- IDA Help: Cross reference attributes https://hex-rays.com/products/ida/support/idadoc/1305.shtml

IDA æ¯ä¸ä¸ªäº¤äºå¼åæ±ç¼å·¥å·ï¼ä¸å¸¸è§çåæ±ç¼è°è¯å·¥å·ä¸åï¼IDA åè®¸è°è¯äººåæ·±åº¦è½å¨ä¸èµ·åæ±ç¼çè¿ç¨ã

å·¥ä½åºä¸»è¦çªå£ï¼

- Functions å½æ°è¡¨ï¼å½åç¨åºçå½æ°ååè¡¨ï¼
- IDA View-A æ¯åæ±ç¼çªå£ï¼A åªæ¯ä¸ä¸ªç¼å·ï¼
- HexView åå­è¿å¶æ ¼å¼æ°æ®æ¾ç¤ºçªå£ï¼
- Imports å¯¼å¥è¡¨ï¼ç¨åºä¸­è°ç¨å°çå¤é¢çå½æ°ï¼
- Structures ç»æçªå£ï¼
- Enums æä¸¾çªå£ã

ä¾å¦ï¼ä½¿ç¨ä»¥ä¸å¿«æ·é®å°ç¨åºä¸­åå«çæ°æ®ä½ä¸ºæä»¤ãå­ç¬¦ä¸²ææ°æ®è¿è¡è§£æï¼

  - convert to instruction : the hotkey is "C"
  - convert to string : the hotkey is "A" or Alt-A
  - convert to data : the hotkey is "D"
  - convert to undefined : the hotkey is "U"

è¿äºæä½å¯¹åº Edit èåä¸çæ°æ®ç±»åè½¬æ¢åè½ï¼æ­¤èåä¸ç Operand Type è¿ææ´å·ä½çç±»åæä½ï¼åæ¬ Enum å Structã

ä½¿ç¨é¼ æ éä¸­ä¸çåºåï¼å¯ä»¥ä½¿ç¨å¿«æ·é®"ALT+L"éè¿é®çä¸ä¸ç®­å¤´é®éæ©ä¸ä¸ªåºåï¼ç¶åæå¿«æ·é® D ä¹å¯ä»¥å°æ°æ®è½¬æ¢ææ°ç»å½¢å¼ã

ä½¿ç¨ D å¿«æ·é®å¾å®¹æçå°æ°æ®åä¸äºæ°æ®åºç¡ç±»åèç³»èµ·æ¥ï¼é»è®¤ä¼å¨ db(Byte)ãdw(Word)ãdd(Double Word) ä¹é´è¿è¡å¾ªç¯åæ¢ã

å¯ä»¥å®ä¹å¾ªç¯åæ¢åå«çæ°æ®ç±»åï¼ä½¿ç¨èåè®¾ç½® Options -> Setup data typesï¼å¿«æ·é® `Alt+D`ï¼ç¶åå¨å³ä¾§å¾ééè¦çæ°æ®ç±»åã

å¨è½¬æ¢æ°æ®ç±»åæ¶ï¼ä¼å¼¹åºå¯¹è¯æ¡ç¡®è®¤ï¼å¯ä»¥ä½¿ç¨èåä¿®æ¹æä¸éè¦ç¡®è®¤ç´æ¥è½¬æ¢æ°æ®ç±»åï¼Options -> General -> Misc -> Convert already
defined bytesï¼å° Ask to convert ä¿®æ¹ä¸º Always to convertã

ä¹å¯ä»¥ä½¿ç¨å¿«æ·é® U æ¥åæ¶å¯¹æ°æ®çå®ä¹ã

æ°ç»åæ°è®¾ç½®ï¼

- Array size è®¾ç½®æ°ç»åç´ è®¡æ°ï¼
- Item on a line å³æ¯è¡æ¾ç¤ºçåç´ ä¸ªæ°ï¼
- Element print width è®¾ç½®åç´ æ¾ç¤ºå®½åº¦ï¼
- Display indexes æ¾ç¤ºæ°ç»åç´ ç´¢å¼ç¼å·ï¼

è®¾ç½®æ°ç»åï¼æ°æ®çå³ä¾§çå°åè¡å·å°ä»¥é¦ä¸ªåç´ å°åä¸ºåèï¼è®¾ç½®æ°ç»æ¶ä¼ä»¥ç¬¬ä¸ä¸ªåç´ çç±»åä½ä¸ºæ°ç»åç´ çç±»åã

IDA è¿å¯ä»¥å®ä¹æ´é«çº§çæ½è±¡ç±»åï¼ç»æä½åæä¸¾ç±»åï¼æä¸¾ç±»åååæ¬ä½åï¼ä» IDA çè§åº¦çï¼ä½ååªæ¯ä¸ç§ç¹æ®çæä¸¾ç±»åï¼åªéè¦å¨å®ä¹æä¸¾ç±»åæ¶éæ© bitfield éé¡¹ã


æ°æ®ç±»åç¡®å®åï¼å°±å¯ä»¥ç¨ç¹å®çæ ¼å¼æ¥æ¾ç¤ºï¼ä½¿ç¨èå Edit -> Operands type è¿è¡è®¾ç½®ï¼ä»¥ä¸æ¯å¸¸ç¨çå¿«æ·é®æä½ï¼

- `R` Character
- `S` Segment
- `K` Stack variable
- `M` Enum member
- `H` Decimal
- `Q` Hexadecimal
- `B` Binary
- `_` Change sign

è®¾ç½®å­ç¬¦æ¾ç¤ºæ ¼å¼ä¸è®¾ç½®å­ç¬¦ä¸²ç±»åçå·®å«è¡¨ç°å¨ï¼å­ç¬¦ä¸²ç±»åä¼åéä¸ä¸ªåéåã

å¨ä¸»ä»£ç è§å¾ IDA View ä¸­æç©ºæ ¼åæ¢æ±ç¼ä»£ç è§å¾ãGraph è§å¾ã

- `Alt_T` search for a substring (case-insensitive) `Ctrl_T` repeat last search 
- `Ctrl_E` éæ©å¥å£ç¹
- `Ctrl_Alt_B` æ­ç¹åè¡¨

IDA å¯ä»¥æç´¢ Unicode å­ç¬¦ä¸²ï¼Shift_F12 æå¼å­ç¬¦ä¸²çªå£ï¼å¨å­ç¬¦ä¸²åè¡¨çªå£å³é®ç¹å» Setupï¼å¯¹è¯æ¡å¾ä¸ Unicode C-style (16 bits) å³å¯ã

æ³¨æï¼Minimal string lenght è®¾ç½®æå°çå­ç¬¦ä¸²é¿åº¦ï¼æ¯å¦è®¾ç½®ä¸º 5ï¼é£ä¹é¿åº¦å°äº 5 çå­ç¬¦ä¸²å°±æ¾ç¤ºä¸åºæ¥ï¼è¿ä¸ªå¯ä»¥æ ¹æ®ä¸åçæåµéç½®ãå¦æéç½®çå¤ªå°äºï¼å°±ä¼åºç°å¾å¤æ æä¹çæ°æ®ï¼å¯è½å¹¶ä¸æ¯å­ç¬¦ä¸²ã


æ¯æå¼ºå¤§ç¬¦å·è·³è½¬åè½ï¼ä¸å°åå³èçç¬¦å·å¯ä»¥è¿è¡å½åï¼n å¿«æ·é®ï¼ç±»ä¼¼çä½éªå¨ä½¿ç¨ Sublime Text ç¼è¾å¨ä¸­ä¹æã

- `G` è·³è½¬æå®å°åï¼ä¾å¦ main+5
- X XREF è·³è½¬
- `Ctrl_E` è·³è½¬å°å¥å£ç¹
- `Ctrl_L` è·³è½¬å°åç§°
- `Ctrl_P` è·³è½¬å°å½æ°
- `Ctrl_S` è·³è½¬å°åå­æ®µ
- `Ctrl_G` è·³è½¬å°æ®µå¯å­å¨åæ´ç¹
- `Ctrl_Q` è·³è½¬å°æé®é¢çä»£ç 
- `ESC` è·³è½¬å°ä¸ä¸ä¸ªä½ç½®
- `Ctrl_Enter` è·³è½¬å°ä¸ä¸ä¸ªä½ç½®


IDA åæ±ç¼ä»¥ call æä»¤ååç§è·³è½¬æä»¤ä¸ºä¸ä¸ªé»è¾ååè¿è¡ç»ç»ï¼è¿äºååç¸äºäº¤åå¼ç¨ XREFï¼è¿æ¯ IDA æåºæ¬çæ¦å¿µï¼å¨ä»£ç çæ³¨è§£ä¹ä¼ç»åºåèä¿¡æ¯ã

ä¾å¦ï¼ä»£ç äº¤åå¼ç¨ CODE XREF åæ°æ®äº¤åå¼ç¨ DATA XREFï¼

    .text:004B3FA0 loc_4B3FA0:  ; CODE XREF: sub_4B3F40+57âj

    .text:004B4130 sub_4B4130    proc near  ; DATA XREF: .text:004B4384âo

ä»£ç æ³¨è§£é¨åç CODE XREF è¡¨ç¤ºè¯¥è°ç¨å°åæ¯ 4B3F40ï¼sub åç¼è¡¨ç¤ºå­è¿ç¨ï¼+57 è¡¨ç¤ºè¿ä¸ªåç§»è¿ä¸ªè¿ç¨ç 0x57 å­èå¤ï¼åç¼çç®­å¤´å j è¡¨ç¤ºå¨ä¸æ¹ near jump æä»¤è·³è½¬æ¥è¿ï¼ç±»ä¼¼çåç¼åèæå IDA Help: Cross reference attributesï¼

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

åå»æ³¨è§£æä¾çäº¤åå¼ç¨ï¼ææåè½¦é®å¯ä»¥è·³å°ç¸åºçå°åä¸ã

å¨åç§°åè¡¨çªå£ï¼æ¯ä¸ªåç§°åé¢é½æä¸ä¸ªç¬¦å·å¸¦æå­æ¯çå¾æ å­æ¯å«ä¹å¦ä¸ï¼

- `F` å½æ°ï¼åæ¬æªè¯å«çåºå½æ°ã 
- `L` åºå½æ°ã
- `i` å¯¼å¥ç¬¦å·ï¼ååºå½æ°çåºå«å¨äºåºå½æ°æ²¡æåæ±ç¼ä»£ç 
- `C` Named code å³ä¸å±äºä»»ä½å½æ°çç¦»æ£çä»£ç ã
- `D` Data éå¸¸è¡¨ç¤ºå¨å±åéã
- `A` String ææ IDA è½è¯å«çå­ç¬¦ä¸²ï¼å¦ C è¨è¯­ç null-terminated ASCII æ ¼å¼ã

å¨åæ±ç¼ä»£ç ä¸­ï¼å¯ä»¥æ ¹æ®éè¦å°æäºä»£ç å®ä¹ä¸ºå½æ°ï¼ä½¿ç¨èå Edit -> Functionsï¼æèä½¿ç¨å¿«æ·é®ï¼

- `P`    Create function
- `Alt_P`  Edit function   
- `E`      Set function end
- `Ctrl_K` Stack variables 
- `Alt_K`  Change stack pointer    
- `N`  Rename

IDA ä¼å°½å¶æè½è·è¸ªå½æ°åæ¯ä¸æ¡æä»¤ä¸çæ æéçååï¼å¦æ IDA æ æ³ç¡®å®ä¸æ¡æä»¤æ¯å¦æ´æ¹äºæ æéï¼å¯ä»¥è¿è¡æå¨è°æ´ï¼æå®æä»¤ä¿®æ¹äºå¤å°æ æéåç§»ã

å½ä¸ä¸ªå½æ°è°ç¨å¦ä¸ä¸ªä½¿ç¨ stdcall è°ç¨çº¦å®çå½æ°ï¼å°±å¯è½åºç° IDA æ æ³åç¡®å¤æ­æ æéçååï¼è¿æ¯æç®åçä¸ç§æåµãstdcall è°ç¨çº¦å®è¦æ±å½æ°åæ°æç§ä»å³å°å·¦çé¡ºåºå¥æ ï¼è¢«è°ç¨çå½æ°å¨è¿ååæ¸çä¼ éåæ°çæ ãå¦æè¢«è°ç¨çå½æ°ä½äº IDA æ æ³è¯å«çå±äº«åºä¸­ï¼é£ä¹ï¼IDA ä¹å°±æ æ³ç¡®å®ï¼è¢«è°ç¨çå½æ°ä¼å°æ æéä¿®æ¹åè¿åãå æ­¤ï¼IDA ä¼ä¸ºå½æ°çå©ä½é¨åæä¾ä¸ä¸ªéè¯¯çæ æéå¼ã

è¦è¿è¡æ è°æ´ï¼é¦åå°åæ å®ä½å°éè¦è°æ´çä½ç½®ï¼æ§è¡èå Edit -> Func-tions -> Change Stack Pointerï¼ç­é®ä¸º `ALT+K`ï¼ç¶åæå®æ æéæ´æ¹çå­èæ°ã

å¯¹äºä»»æå½æ°ï¼å¯ä»¥éä¸­æ­¤å½æ°ï¼åä½¿ç¨ Edit -> Functions -> Edit Functionsâ¦ è¿è¡ç¼è¾ã

å¦ææ¯å¯¼å¥å½æ°ï¼åå»è½¬å° .rdata ç®å½ï¼ç¶ååä½¿ç¨ç¼è¾å½æ°ï¼æ è°æ´å¯¹åº Purged bytesã

å¨ IDA Freeware åè´¹çæ¬ï¼ä¸æ¯æç¨åºç C è¯­è¨ä¼ªä»£ç çæãå¯¹ 32-bit ç¨åºç¬¦å·åæåè½æ²¡æ IDA Pro å¼ºå¤§ï¼å¯è½åªåæå° start ç¬¦å·ï¼è¿æ¯è¿ç¨åå§åï¼è¿éè¦è·è¸ª call æä»¤æ¾ main å¥å£ã

ä¸è¬å¨å¨ IDA å½æ°çªå£æç´¢ç³»ç»æä¾çç»æè¿ç¨ API `_exit` ç¶ååå»è·³è½¬è¿å»ï¼åä½¿ç¨å¼ç¨è·³è½¬ x å°å¼ç¨ä½ç½®ï¼å¼ç¨è¿ä¸ª API çä½ç½®éå¸¸åè¿ç¨åå§åè¿ç¨ä¸æ ·ï¼æ¯ç³»ç»ä»£ç ãåå¾ä¸æ¾ä¸ä¸ª call æä»¤ï¼æ ¹æ® main å¥å£çç¹ç¹ï¼call æä»¤åæ 3 ä¸ª push æä»¤å¯¹åºæä¸ä¸ªåæ°ï¼å½ç¶ push æä»¤ä¹å¯è½ç± mov esp æä»¤æ¿ä»£ã

- `X` è·³è½¬å°äº¤åå¼ç¨çæä½æ°
- `Ctrl_X` åè¡¨ææäº¤åå¼ç¨
- `Ctrl_J` è·³è½¬å°è¢«å¼ç¨çæ°æ®
- `F5` æ¾ç¤º C ä¼ªä»£ç ï¼å¯ä»¥åæç¨åºå¥å£

å¦æèåä¸­æ View -> Open SubViews -> Pseudocode F5ï¼è¯´æä½ å·²ç»å®è£äº Hex Rays decompiler æä»¶ï¼å¯ä»¥å¨æ¥çæ±ç¼çæ¶åï¼æ F5 çæ C ä¼ªä»£ç ã

C è¯­è¨ç¼è¯åºæ¥çç¨åºå¹¶ä¸ä¸å®å°±æ main å½æ°ï¼åå¦åæ ¸å¼å¯¼ç¨åºï¼ä½¿ç¨ QEMU æ¨¡æå¨å¯ä»¥å®éª uboot (Universal Boot Loader) å¼å¯¼ç¨åºå è½½åæ ¸ç¨åºã

GCC ä¹æä¾äº -e éé¡¹æå®ç¨åºå¥å£ç¬¦å·ï¼è¿ä¸ªå¥å£ä¼ä¼ éç» ld.exe é¾æ¥ç¨åºçæå·ä½çå¯æ§è¡ç¨åºã

IDA ä½¿ç¨ F2 è®¾ç½®æ­ç¹ï¼å¨æ±ç¼ä»£ç åä¼ª C è¯­è¨ä»£ç é´éè¿ Tab åæ¢ï¼è¿æ ·æ¹ä¾¿æ­ç¹è®¾ç½®ã


å¨ Hex View çªå£å¯ä»¥ä¿®æ¹ç¨åºçæä»¤æèæ°æ®ï¼å¹¶è¿è¡ä¿å­ï¼å½ä½æè¡¥ä¸ã

- ç¹å»è¦ä¿®æ¹çå°æ¹ï¼
- F2 å¿«æ·é®è¿å¥ä¿®æ¹ç¶æï¼
- F2 åæå¿«æ·é®éåºä¿®æ¹æ¨¡å¼ã

è¿äºä¿®æ¹åªå¯¹ IDA æ°æ®åºææï¼å°ä¿®æ¹åºç¨å°ç¨åºæä»¶ï¼Edit -> Patch program -> Apply pathes to input file > OKï¼ä½¿ç¨å¿«æ·é® Ctrl_Alt_P æåè¡¥è®¢è®°å½çªå£ï¼æ¥çæ¯å¦æè®°å½ã

å¾é Restore original byte åå¯¹è¡¥ä¸è¿çæ°æ®è¿è¡è¿åï¼ä½æ¯ Patched bytes è®°å½è¿å¨ãå¦æå°æ°æ®æå¨æ¹ååå¼åä¸ä¼æè¡¥ä¸è®°å½ï¼å¹¶ä¸æè¡¥ä¸æ¶å¾éè¿åä¹ä¸èµ·ä½ç¨ã

è¡¥ä¸èåçæ±ç¼å½ä»¤ Edit -> Patch program -> assemble å¯ä»¥ç´æ¥è¾å¥æ±ç¼æä»¤æ¿ä»£ç°æä»£ç ï¼å¦æè¦ä¿®æ¹æ°æ®ï¼å°±éè¦åå°æ°æ®è½¬æ¢ä¸ºä»£ç ï¼å¿«æ·é® D/C è¿è¡åæ¢ã

è¦æ¹åç¨åºæ§è¡æµç¨ï¼

- ä¿®æ¹è·³è½¬æä»¤ã
- ä¿®æ¹åå­æ°æ®ã
- IDA View ä¸­ä½¿ç¨å½ä»¤ Jump to IP, Set IP, Run to cursorã

æäº IDA çè¡¥ä¸åè½ï¼å°±å¯ä»¥ä¸åç¨å¶ä»å·¥å·ä¿®æ¹åå§ç¨åºæä»¶ï¼å¦ WinHexãUltraEdit æ Hex Workshopã

å¦å¤ï¼Edit -> Other -> Manual instruction åªè½ç¼è¾æ±ç¼æä»¤ï¼ä½ä¸è½åºç¨å°ç¨åºæä»¶ä¸­ã


## â¡ Hello World
- PE Format https://docs.microsoft.com/en-us/windows/win32/debug/pe-format
- IntelÂ® 64 and IA-32 Architectures Software Developer Manuals https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html
- Executable and Linkable Format (ELF) http://www.skyfree.org/linux/references/ELF_Format.pdf
- Mastering Malware Analysis https://2lib.org/book/5215463/a31b5c
- Malware Analysis And Detection Engineering: A Comprehensive Approach To Detect And Analyze Modern Malware https://2lib.org/book/5938549/863d4f
- Learning Malware Analysis: Explore the concepts, tools, and techniques to analyze and investigate Windows malware https://2lib.org/book/3598265/fca2bd
- Practical Malware Analysis: The Hands-On Guide to Dissecting Malicious Software https://2lib.org/book/1274723/254e0e
- Hacking: the art of exploitation, 2nd edition https://2lib.org/book/11038148/650a59
- Hacking The Art of Exploitation 2nd Jon Erickson Official LiveCD ISO https://resources.oreilly.com/examples/9781593271442
- The MASM32 SDK http://www.masm32.com

è¯·å®è£åè´¹ç Visual Studio ç¤¾åºçï¼ä»¥ç¼è¯ä»¥ä¸æµè¯ç¨çæ±ç¼ç¨åºï¼æèå®è£ MASM32 SDK åªç¼è¯ MASM å®æ±ç¼è¯­è¨ã 

ä»£ç æ¥èª Disassembling CodeâIDA Pro and SoftICEï¼

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

ç¨åºä»ä»£ç æææ¥çå¾ç®åï¼åªæ¯è°ç¨ MessageBox è¿ä¸ªç³»ç» API å¼¹åºä¸ä¸ªæ¶æ¯å¯¹è¯æ¡ï¼EXTERN å£°æè¿æ¯ä¸ä¸ªå¤é¨å½æ°ãå¦å¤ä½¿ç¨äºä¸¤ä¸ªå­ç¬¦ä¸²èµæºï¼TEXT1 ä½ä¸ºæ¶æ¯åå®¹ï¼TEXT2 ä½ä¸ºå¯¹è¯æ¡æ é¢ã

ä½æ¯ï¼ä»ç¨åºç»æåæä½ç³»ç»çå³ç³»æ¥åæï¼è¿æ¯ç¸å½å¤æçç¨åºç»æã

åå­ç®¡çåºå½æ°å¯ä»¥è¯´æ¯æä½ç³»ç»æéè¦çä¸é¨åï¼å æ±ç¼è¯­è¨æ C/C++ è¯­è¨æ²¡æå¼å¥å¨æåå­åæ¶ææ¯ï¼è¿ä¹æ¯å®ä»¬æ§è½æå¥½çä¸ä¸ªåå ãåæ¶è¿ç»ä½¿ç¨èå¸¦æ¥äºé¢å¤çåå­ç®¡çè´£ä»»ï¼å¼åèå¿éèªå·±å®ç°åå­ç®¡çã

å¯¹ç³»ç»ä¸­è¿è¡çç¨åºæ¥è¯´ï¼æä½ç³»ç»è¿è¡ç¨åºæ¶ä¼ä¸æ¾åå­èµæºï¼è¿é¨ååå­èµæºç§°ä¸º User Spaceã

å¯¹äºç¨åºæ¥è¯´ï¼ä¸»è¦çåå­ç¯å¢å¯ä»¥åä¸ºä¸¤ä¸ªé¨åï¼

- ç³»ç»åå­ç©ºé´ï¼æä½ç³»ç»è¿è¡çç¯å¢ä¸­æææ§çåå­èµæºï¼ç³»ç»è¿è¡æä½¿ç¨çé¨åç§°ä¸º Kernel spaceï¼
- ç¨åºä½¿ç¨ç©ºé´ï¼User Spaceï¼

ä» CPU çç»æä¸çï¼æä½ç³»ç»çåå­ç®¡çå°±æ¯ä¸ä¸ªå¤æçæºæï¼éè¿å·ä½çåå­æ¨¡åï¼åºç¨ç¨åºä½¿ç¨èæå¯»åç©ºé´ï¼éè¿åé¡µæºå¶æ å°å°ç©çåå­ä¸ï¼æåæè½è¯»åå·ä½çæ°æ®ãå¹¶ä¸ï¼CPU çä¿æ¤æºå¶ï¼ä½¿å¾ä¸åçåå­é¡µå·æä¸åçæééç½®ãä¾å¦ï¼å¯¹äºä»£ç æ®µï¼åéåªè¯»ãå¯æ§è¡æéï¼å¯¹äºæ°æ®æ®µåéå¯è¯»åæéï¼å¹¶ä¸ï¼åºç¨ç¨åºä¹é´çèæå¯»åç¸äºéç¦»ï¼ä¸å¯äºç¸èªç±è®¿é®ï¼è¿ä½¿å¾æ´ä¸ªè¿è¡ç¯å¢éå¸¸å®å¨å¯é ã

ä» x86 CPU æ¶æåå±åå²æ¥çï¼åå­æ¨¡åæä»¥ä¸ä¸ç§ï¼

- Real-Address Mode Model
- Segmented Model
- Flat Model

ä»æ©æçå®å°åæ¨¡å¼ï¼åºç¨ç¨åºå¯ä»¥ç´æ¥è®¿é®ææåå­ç©ºé´ï¼å¹¶ä¸ç¸äºå¯ä»¥è¯»åå¯¹æ¹çåå­ï¼ççæ¯ç³ç³çä¸ä¸ªè¿è¡ç¯å¢ãæ©æä¹ç»åäºåæ®µåå­ç®¡çæ¨¡åï¼ä½åå±æçåæäºå±å¹³åå­æ¨¡åï¼åºç¨ç¨åºä½¿ç¨çä¸åæ¯å®å°åï¼èæ¯èæå¯»åç©ºé´ï¼å¶å°åä¹å«å Logical Addressï¼ç»è¿ CPU çåæ®µæè¿°ç¬¦è¡¨ GDT/LDT ç­æ å°è½¬æ¢ä¸ºçº¿æ§å°å Linear Addressï¼æåç»è¿åé¡µæºå¶å½±å°è½¬æ¢ä¸º Physical Addressï¼è¿ææ¯æ¯ç°ä»£æµè¡çåå­ç®¡çæµç¨ã

å·ä½åè Intel's Architecture software developer's manual æåçåå®¹ï¼

- Volume 3 - Chapter 2 System Architecture Overview
- Volume 3 - Chapter 3 Protected-Mode Memory Management
- Volume 3 - Chapter 4 Paging
- Volume 3 - Chapter 20 8086 Emulation ä¸é¨æè¿° Real-address mode å Virtual-8086 modeã

Intel æ¶æçå¼åèæåç°å¨å·²ç»åºçå° 4 å·ï¼

- Volume 1: æè¿° IntelÂ® 64 å IA-32 æ¶æ CPU çç¼ç¨ç¯å¢ï¼åæ¬ x86 ä½ç³»çåå±åå²ã
- Volume 2: åå«å®æ´çæä»¤éï¼æè¿°æä»¤æ ¼å¼ï¼æä¾æä»¤åèï¼åä¸º 2Aã2Bã2Cã2D åå·ã
- Volume 3: åå«å®æ´çç³»ç»ç¼è¯æå¯¼ï¼æè¿° IntelÂ® 64 å IA-32 æ¶æçæä½ç³»ç»ç¯å¢æ¯æï¼åæ¬åå­ç®¡çãä¿æ¤ãä»»å¡ç®¡çãä¸­æ­å¼å¸¸å¤çãå¤æ ¸å¿æ¯æãç­éåçµæºç®¡çãè°è¯ãæ§è½çè§ãç³»ç»ç®¡çæ¨¡å¼ãVMX èææºæ©å±æä»¤ãIntelÂ® Virtualization Technology (IntelÂ® VT)ãIntelÂ® Software Guard Extensions (IntelÂ® SGX)ï¼åæ ·åä¸º 3Aã3Bã3Cã3D åå·ã
- Volume 4: æè¿°æ¯æ IA-32 å IntelÂ® 64 å¤çå¨æ¶æçç¹å®åå·çå¯å­å¨ã

å®ç½ä¸æä¾åéï¼æåå·æä»¶ PDFï¼æä¸è½½åç¬åå·å± 10 ä¸ªæä»¶ï¼å ä¸ºææ¡£æ¯ä¸æ­ä¿®æ­£çï¼æäºåå®¹åæ¯åæ¥è¡¥åçï¼æä»¥é¨å Volume 2 çåå·æå¯è½æ¯ Volume 3 çè¦æ°ãå»ºè®®ä½¿ç¨ Four-Volume Set å³åä¸ªåå·åä¸ªæä»¶ï¼æä¸»é¢ç»ç»æ¹ä¾¿æ¥éãå¦ææ¯å¨éä¸ä¸ªæä»¶ï¼åå®¹å¤ªå¤ä¸å¥½å®ä½ï¼60MB è¶å¤§æä»¶ä¹ä¸å¥½å¤çã

æ©æçåèèµææ¯ Intel 80386 Programmer's Reference Manual 1986ã

ä»ç³»ç»å±é¢æ¥çï¼å¯æ§è¡ç¨åºæä»¶å®éå°±æ¯éæçç¨åºï¼è¦æ§è¡ç¨åºï¼ç³»ç»éè¦åå»ºè¿ç¨æ§è¡ç¨åºçä»£ç ãæä»¥ï¼ç¨åºæä»¶å°±æ¯è¿ç¨æ å Process Imageãè¿ç¨æ ååè®°å½äºåç§ segments æ¥å­å¨ç¸åºçåå®¹ã

ç¼è¯å¨é¾æ¥ç¨åºçæçå¯æ§è¡ç¨æ¶ä¹ç¸åºå¯¹åå­çç¨éè¿è¡æ´ç»è´çååï¼è¯·ä¸è¦æ··æ·æä½ç³»ç»åºäº CPU çåæ®µåå­ç®¡çæºå¶ã

- .text  è¿æ¯æ´ä¸ªç¨æ·ç©ºé´çæä½å°åé¨åï¼å­æ¾æºå¨æä»¤çä½ç½®ã
- .data è¿éå­æ¾çæ¯åå§åè¿çå¨å±åéã
- .bss è¿éå­æ¾çæ¯æªåå§åçå¨å±åéã

éè¦éç¹å³æ³¨çæä¸¤ä¸ªåå­åºï¼

- Heap å åå­å¯ä»¥å¨ç¨åºè¿è¡æ¶èªè¡ç³è¯·åéã
- Stack è°ç¨æ åºåï¼èªé«å°ååä½å°åå¢é¿ã

ç¨åºæ§è¡æ ç©ºé´ Stack æ¯ä¸ä¸ª FILO - First In Last Out æ°æ®ç»æï¼ç¨åºæ§è¡åå°±å¨ç³»ç»çå®æä¸é¢åè®¾å®å¥½ï¼CPU åæ ESP å¯å­å¨æåæ é¡¶ï¼æå¶å®éç½®æä»¤ç®¡çï¼å¦ PUSH/POPãå åå­ç©ºé´ Heap ç±ç¨åºè¿è¡è¿ç¨ä¸­éè¿ malloc ç­å½æ°å¨æç³è¯·åéã

ä¸è¬æ¥è¯´ï¼ç³»ç»åºè¯¥æä¾è®¾ç½®ï¼æ¥æå®ç¨åºè¿è¡æ¶ç¯å¢éç½®ï¼å¦ Linux å°±å¯ä»¥éè¿ ulimit -s è®¾å®ç¨åºè¿è¡æ¶ç Stack å¤§å°ã

å åå­çå®ç°æä¸åçå½¢å¼ï¼æä¸ç§åæ³æ¯ï¼æè¿ç¨çåå­ç®¡çäº¤ç»æä½ç³»ç»åæ ¸å»åï¼ä½å®éä¸è¿æ ·åçæ§è½æ¯è¾å·®ï¼åå å¨äºæ¯æ¬¡ç¨åºç³è¯·æèéæ¾å ç©ºé´é½éè¦è¿è¡ç³»ç»è°ç¨ã

æ¯è¾å¥½çåæ³å°±æ¯ï¼ç¨åºåæä½ç³»ç»ç³è¯·ä¸åéå½å¤§å°çå ç©ºé´ï¼ç¶åç±ç¨åºèªå·±ç®¡çè¿åç©ºé´ï¼èå·ä½æ¥è®²ï¼ç®¡ççå ç©ºé´åéçå¾å¾æ¯ç¨åºçè¿è¡åºï¼å³ malloc è¿ç±»å½æ°èåçåºå®ç°ãè¿ç§æ¹å¼ç¸å½äºåæä½ç³»ç»æ¹åä¸åè¾å¤§çåå­ï¼å°ç¨åºè¿è¾¹é¶å®ï¼å½åå­ç¨å®ååç³»ç»è¦ã

èå¾®è½¯ç³»çå¼åå·¥å·åºäº PE å¯æ§è¡æä»¶æ ¼å¼å®ä¹ä»¥ä¸åç§åæ®µï¼è¯¦ç»åè PE Format ææ¡£ï¼è¿éç»äºå¸¸ç¨åæ®µçè¯´æï¼

- .text: Code 
- .data: Initialized data
- .bss: Uninitialized data
- .rdata: Const/read-only (and initialized) data
- .edata: Export descriptors
- .idata: Import descriptors
- .reloc: Relocation table å¨æ¨¡åä¸è½æé»è®¤å°åå è½½æ¶æ§è¡ä»£ç ç»å¯¹å°åéå®ä½ä½¿ç¨
- .rsrc: Resources (icon, bitmap, dialog, ...)
- .tls: `__declspec(thread)` data (Fails with dynamically loaded DLLs -> hard to find bugs)

Linux ç³»ç»ä½¿ç¨ ELF æ ¼å¼ä¹æèªå·±çä¸å¥ä¸ç¨è®¾ç½®ï¼ 

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

- `.bss` æªåå§åæ°æ®åºï¼éå¸¸å¨ç¨åºè¿è¡æ¶ç±ç³»ç»å¡«å 0 å¼ï¼æä»¥æ­¤åºå¹¶ä¸å å­å¨ç©ºé´ï¼å³ SHT_NOBITS ç±»åã
- `.comment` åå«çæ¬æ§å¶ä¿¡æ¯ã
- `.data` & `.data1` å·²åå§æ°æ®åºï¼ç´æ¥è½½å¥åå­ç©ºé´æé ç¨åºæ åã
- `.debug` åå«è°è¯ç¬¦å·ã
- `.dynamic` å¨æé¾æ¥ä¿¡æ¯åºï¼åå« SHF_ALLOC å±æ§ä½ï¼æ ¹æ® CPU å³å®æ¯ä¸è®¾ç½® SHF_WRITE å±æ§ä½ã
- `.dynstr` éè¦å¨æè¿æ¥çå­ç¬¦ä¸²åºï¼éå¸¸è¿äºå­ç¬¦ä¸²å³èç¬¦å·è¡¨æ¡ç®çåç§°ã
- `.dynsym` å¨æé¾æ¥ç¬¦å·è¡¨ï¼è®°å½ imports/exports ç¬¦å·ï¼åèè§èç Symbol Table åå®¹ã
- `.fini` æå³è¿ç¨ç»æ­¢ä»£ç çå¯æ§è¡æä»¤ï¼ç¨åºæ­£å¸¸éåºæ¶ï¼ç³»ç»å®ææ§è¡æ¬èä¸­çä»£ç ã
- `.got` åèè§èåå®¹ Dynamic Linking - Global Offset Tableã
- `.hash` ç¬¦å· Hash è¡¨ï¼åè Dynamic Linking - Hash Tableã
- `.init` ç¨åºåå§ä»£ç åºï¼å­æ¾è¿ç¨åå§è¿æ§è¡çæä»¤ï¼ç³»ç»å¨è°ç¨ main ä¹åæ§è¡ã
- `.interp`ç¨åºæ§è¡å¨è·¯å¾ï¼æ¥ç®¡ç³»ç»ç¨åºå è½½å·¥ä½ï¼è®¾ç½® SHF_ALLOCï¼åè Dynamic Linking - Program Interpreterã
- `.line` ä¸ºè°è¯ç¬¦å·ä¿çæºä»£ç è¡å·ä¿¡æ¯ã
- `.note` ç¬è®°ä¿¡æ¯åºï¼ç¨åºä¾åºåå¯ä»¥ç¨æ¥è®°å½ä¸ç¨ä¿¡æ¯ï¼SHT_NOTE æ PT_NOTE é½å¯ä»¥æ è®°è¿ç§åæ®µã
- `.plt` ç¨åºé¾æ¥è¡¨ï¼åèè§è Procedure Linkage Tableã
- `.relname` & `.relaname` éå®ä½ä¿¡æ¯åºï¼å¦ææä»¶å·æåå«éå®ä½çå¯å è½½æ®µï¼åè®¾ç½® SHF_ALLOC å±æ§ä½ã
- `.rodata` & `.rodata1` Read-only æ°æ®åºã
- `.shstrtab` åæ®µåç§°è®°å½åºã
- `.strtab` å­ç¬¦ä¸²åæ®µï¼éå¸¸å³èç¬¦å·è¡¨æ¡ç®çåç§°ï¼å¦ææä»¶åå«å¯å è½½åæ®µå¹¶åå«å­ç¬¦ä¸²åæ®µï¼ååæ®µè®¾ç½® SHF_ALLOC å±æ§ä½ã
- `.symtab` Symbol Tableï¼å¦ææä»¶åå«å¯å è½½åæ®µï¼ä¸åå«æ­¤ç¬¦å·è¡¨ï¼åæ®µå°±è®¾ç½® SHF_ALLOC å±æ§ä½ã
- `.text` å¯æ§è¡ä»£ç åºï¼è£è½½ä½äºåå­ä½å°ååºåã

æç§æ¯ä¾ï¼`.relname` æ `.relaname` éå®ä½åºç¨å°ä»ä¹åæ®µï¼ç±å¶æä¾ `name`ãæä»¥ï¼åºç¨äº `.text` çç¬¦å·éå®ä½å°±å¯¹åº `.rel.text` or `.rela.text` åæ®µã

å°±åå¨å±åç§»è¡¨ `.got` å°ä½ç½®æ å³çå°åéå®åå°ç»å¯¹å°åä¸æ ·ï¼è¿ç¨é¾æ¥è¡¨ `.plt` å°ä½ç½®æ å³å½æ°è°ç¨éå®åå°ç»å¯¹ä½ç½®ãé¾æ¥ç¼è¾å¨æ æ³ä»ä¸ä¸ªå¯æ§è¡æå±äº«å¯¹è±¡ï¼æ§è¡ä¼ è¾å°å¦ä¸ä¸ªå¯¹è±¡ä¸ï¼å¦å½æ°è°ç¨ã

è¦æ¥çç¨åºæä»¶æç®æ æä»¶ä¸­çåæ®µä¿¡æ¯ï¼GNU æä¾äºä¸å¥éå¸¸æç¨çäºè¿å¶æä»¶å·¥å·ï¼ç»ç§°ä¸º Binutilsã

å¶ä¸­ objdump å°±æ¯ä¸ç¨ç ELF ä¿¡æ¯æ¥è¯¢å·¥å·ï¼ä¹å¯ä»¥ä½¿ç¨ Linux ç readelf ä¸ç¨å½ä»¤ï¼è¿æ ldd å½ä»¤å¯ä»¥æ¥è¯¢ç¨åºä¾èµçå¨æé¾æ¥åºï¼

    ldd  jos\user\hello
    readelf -S jos\user\hello
    objdump -h jos\user\hello
    objdump -h jos\user\hello.obj

å¾®è½¯ä¹æç¸åºçå¼åå·¥å· Dumperï¼

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

å¯ä»¥çå°ï¼ç¨åºæä»¶ä¸­åªææåºæ¬çåä¸ªæ®µå®ä¹ï¼å¹¶æ²¡æç¬¦å·å¯¼å¥æ®µï¼ä½æ¯è¿æ¯æå¯¼å¥ç API ä¿¡æ¯ãå¾®è½¯ç PE ç¨åºæ ¼å¼ä¸­å®ä¹äº Import Address Table(IAT) æ¥å¯¼å¥å¨æé¾æ¥åºä¸­çå¯¼åº APIãIAT è®°å½äºæ¯ä¸ªå¯¼å¥å½æ°çåå­åæå¨ç DLL æä»¶åç§°ï¼ç³»ç»å¨å è½½ PE æ¶ä¼å è½½è¿äº DLL å°ç¨æ·ç¨åºå°åç©ºé´åï¼ç¶åå°å½æ°çå è½½å°åè¦çååå­ä¸­ç IAT è¡¨ä¸­ã

ä½¿ç¨ IDA å è½½ç¨åºåï¼é¦åä¼åæç¨åºçç»æï¼å¹¶çæåæ±ç¼ä»£ç åç¸å³ä¿¡æ¯ã

åæ¥çåæ±ç¼è§å¾çé¡¶é¡¶é¨ï¼è¿éåå«çæ¯ç¨åºçåºæ¬ä¿¡æ¯ï¼

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

å¯ä»¥çå°å°åå°±æ¯ç¨åºçå¥å£å°åï¼å¶å®è¿äºä¿¡æ¯å¹¶ä¸å ç¨åå­ï¼æ¾ç¤ºå°ååªæ¯æ¹ä¾¿å±ç¤ºå³èæ§ï¼å¶ä¸­è¾éè¦çæ Imagebase è¡¨ç¤ºç¨åºæä»¶å è½½çåå­é¦å°åã

ç¶åå°±æ¯ CPU æ¶æåæä»¤éï¼è¿æåå­æ¨¡åï¼è¿äºä¿¡æ¯æ¯ç¨åºè¿è¡çä¸ä¸ªåºæ¬æ¡ä»¶ç¶æï¼æ¯å CPU ç¡¬ä»¶å®ç°ç¸å³çï¼

    .686p
    .mmx
    .model flat

åå­åæ®µè¯´æä¿¡æ¯æ¾ç¤ºï¼.text åæ®µæ¯çº¯ä»£ç ï¼å·æå¯è¯»åå¯æ§è¡æéï¼è¿åå¸¸è¯æ¯ä¸è´çã

ç¶åæ¯ä¸»ç¨åºä»£ç é¨åï¼ä»£ç ååé¢çæ±ç¼æ¯ä¸è´çï¼

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

å¶ä¸­ï¼å¯¼å¥ç API åªæ¾ç¤ºäºæå åçç­¾åä¿¡æ¯ï¼ä½¿ç¨æ°å­é®çç + å·æèåå»é¼ æ å°±å¯ä»¥çå°ä»¥ä¸å¤äºå±å¼çä¿¡æ¯ï¼åæ¬ API çåæ°ä¿¡æ¯ï¼

```sh
.text:00401014 ; =============== S U B R O U T I N E =======================================
.text:00401014
.text:00401014 ; Attributes: thunk
.text:00401014
.text:00401014 ; int __stdcall MessageBoxA(HWND hWnd, LPCSTR lpText, LPCSTR lpCaption, UINT uType)
.text:00401014 MessageBoxA     proc near               ; CODE XREF: start+Eâp
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

éè¿ dumpbin æ¥è¯¢å°çä¿¡æ¯ï¼402000 Import Address Tableï¼å¯ä»¥å¨ IDA å¤ççæç .idata æ®µæ¾å°ç¸åºçå°åæ£æ¥å¯¼å¥ç¬¦å·æ®µï¼

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
.idata:00402000                                         ; DATA XREF: MessageBoxAâr
.idata:00402000                                         ; .rdata:004020E8âo
.idata:00402004
.idata:00402004
```

æåï¼æ¥ççæ°æ®æ®µï¼ç¸æ¯ .text ä»£ç æ®µï¼æ°æ®æ®µå¨åå­ä¸­çå°åæ´é«äºï¼ä½ä¸ºæåä¸æ®µï¼ç»ææ è®° `end start` ååé¢ç `public start` ç¸å¼åºã

å¯ä»¥çå° IDA å±ç¤ºåºæ¥çæç¤ºä¿¡æ¯ï¼ä¹å°±æ¯å¯æ§è¡æä»¶ä¸­å®ä¹çï¼æ°æ®æ®µåªçè¯»åæéèæ²¡ææ§è¡æï¼å½ç¶å¯ä»¥éè¿ææ¯ææ®µè®©æ°æ®åºä¹å¯ä»¥å­å¨ä»£ç ï¼å°è®¾ç½®æ§è¡æéï¼

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
.data:00403000 Text            db 'No problem!',0      ; DATA XREF: start+7âo
.data:0040300C ; CHAR Caption[]
.data:0040300C Caption         db 'Message',0          ; DATA XREF: start+2âo
.data:00403014                 align 1000h
.data:00403014 _data           ends
.data:00403014
.data:00403014
.data:00403014                 end start
```

IDA çéæåæè½åæ¯å¾å¼ºå¤§çï¼ä¾å¦ï¼ä»¥ä¸ä»£ç ç¨ä½ä¿®æ¹ï¼éè¿ ESI å¯å­å¨çä¸ä¸ªå°åæ¥è°ç¨ä¸ä¸ªå­è¿ç¨ï¼

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

ä»ååç¼è¯çä»£ç å¯ä»¥çå°ï¼å­è¿ç¨çå°åå·²ç»è§£æåºæ¥ï¼è½ç¶å¶å°åç»è¿è¡æ ãåç»è¿ CALL å RETN æä»¤ç 3 ä¸ªå­èåç§»ï¼åéè¿ ESI å¯å­å¨è°ç¨ï¼

```sh
.text:00401013                 mov     esi, 3
.text:00401018                 add     esi, offset loc_40101E
.text:0040101E
.text:0040101E loc_40101E:                             ; DATA XREF: start+18âo
.text:0040101E                 call    esi ; sub_401021
.text:00401020                 retn
.text:00401020 start           endp
.text:00401020
.text:00401021
.text:00401021 ; =============== S U B R O U T I N E =======================================
.text:00401021
.text:00401021
.text:00401021 sub_401021      proc near               ; CODE XREF: start:loc_40101Eâp
.text:00401021                 xor     eax, eax
.text:00401023                 retn
.text:00401023 sub_401021      endp
```

EAX éå¸¸å¨ç¨åºç»ææ¶ç¨æ¥å­å¨ä¸ä¸ªç¶æç ï¼è¿åç»æä½ç³»ç»ï¼ç¸å½äº C è¯­è¨ä¸­ç main å½æ°è¿åçæ°å¼ï¼è¿éæ§è¡ XOR å¯¹å¶è¿è¡æ¸é¶è¡¨ç¤ºæ­£å¸¸éåºã

ä»¥ä¸ä»£ç åªæ¯ä¸ä¸ªå°å°æä¿©ï¼å¦æåæå¥ä¸äºè±æä»¤å¨è¿ä¸­é´ï¼é£ä¹å¾å¤åæ±ç¼å·¥å·å°è§£æä¸å°æ­£ç¡®çæä»¤ã

å¦æï¼åå æ·±ä¸ç¹é¾åº¦ï¼å°åç§»éå¤ççæä»¤æ¾å°åé¢ï¼å¹¶ä½¿ç¨å¦å¤ä¸å¯å­å¨å CALL éåï¼

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

ç¶åï¼ä½¿ç¨ IDA å è½½ç¨åºï¼æ­£å¦ææï¼åæ±ç¼ç¨åºæ æ³è¯å«éè¿å¦ä¸ä¸ªå¯å­å¨ EDI è°ç¨çå­è¿ç¨ã

ä½æ¯ï¼IDA ä½ä¸ºä¸ä¸ªäº¤äºåæ±ç¼å·¥å·ï¼è¿æ¶åå°±ä½ç°ç¨æ·çåä¸çéè¦æ§äºï¼åªéè¦ä¸¤æ­¥å°±å¯ä»¥ä¿®æ­£æªè¢«è¯å«çå­è¿ç¨ï¼

- å°åæ å®å¨ XOR æä»¤æå¨è¡ï¼ç¶åä¸­æä¸å¿«æ·é® P å°ä»£ç å®ä¹ä¸ºä¸ä¸ªå­è¿ç¨çèµ·ç¹ï¼å®ä¹ç»æç¹ä½¿ç¨ Eï¼
- ç¶åï¼å°åæ å®å¨ CALL EDI æä»¤å¤ï¼å¹¶ä½¿ç¨ `;` å¿«æ·é®è¾å¥æ æ³¨åå®¹ `DATA XREF: sub_401023`ï¼æ­£ç¡®æ¥è®²ï¼æ¯ `CODE XREF`ï¼ç¡®è®¤å IDA å°±ç¥éå®ä»¬çå³ç³»äºï¼

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
.text:00401020 loc_401020:                             ; DATA XREF: start+1Aâo
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

## â¡ Array & Struct

çè§£äºè¿å¶ç¨åºçè¡ä¸ºï¼å¿é¡»è¯å«ç¨åºè°ç¨çåºå½æ°ï¼IDA å¦ä½åç¨æ·ä¼ éæ°æ®ä¿¡æ¯ï¼æ°æ®ç»æå¦ä½å­å¨å¨åå­ä¸­ï¼ä»¥å
å¦ä½è®¿é®è¿äºæ°æ®ç»æä¸­çæ°æ®ã

IDA ç¥éæå½æ°çååï¼é£ä¹å¦æä¸ä¸ªåéä½ä¸ºå½æ°çåæ°ï¼å¨åæé¶æ®µï¼IDA ä¼å°½å¶æè½æ¨æ­åºè¯¥åéçæ°æ®ç±»åãå¦æå¯è½ï¼IDA ä¼å¯¹è¯¥
åéä½¿ç¨ä¸ä¸ªä»å½æ°ååä¸­æååºçæ­£å¼åç§°ï¼èä¸æ¯ä¸ºå¶çæé»è®¤çååã

æ±ç¼æä»¤ä¸­ä½¿ç¨çæ°æ®éå¸¸æ¯é«çº§è¯­è¨ä¸­çæ°æ®ç»æï¼æä»¥å¦ä½å°æ±ç¼æä»¤ä¸é«çº§è¯­è¨ä¸­çæ°æ®ç±»åå¯¹åºèµ·æ¥æ¯éå¸¸åºç¡èéè¦çä¸ä¸ªç¯èã

å¦æå¨ç¨åºçå¨å±æ°æ®åºåç»ä¸ä¸ªæ°ç»åéåå­ï¼ç¼è¯æ¶å°ä¼åéå¨ .data æ .bss èåºï¼å¹¶ä¸ºå¶æå®æ°ç»çåºåãç±äºåºååºå®ï¼ç¼è¯å¨å¯ä»¥è®¡ç®åºä½¿ç¨åºå®ç´¢å¼è®¿é®çä»»ä½æ°ç»åç´ çåºå®å°
åã

å¦æä½ä¸ºæ ååéç»æ°ç»åéçåå­ï¼é£ä¹ç¼è¯å¨å¨ç¼è¯æ¶æ æ³è·å¾ç»å¯¹å°åï¼å ä¸ºæ°ç»åæ°çå°åéè¦æ ¹æ®è¿è¡æ¶æ æé ESP å¯å­å¨è¿è¡åç§»è®¿é®ï¼å³ä½¿æ¯ä½¿ç¨å¸¸éç´¢å¼çè®¿é®ä¹å¿é¡»å¨è¿è¡æ¶è¿è¡æç§è®¡ç®ã

å¨å åå­ç»æ°ç»åéç©ºé´ï¼éè¦ä½¿ç¨ä¸ä¸ªå¨æåå­åéå½æ°ï¼å¦ C è¯­è¨ä¸­ç malloc æ C++ ä¸­ç new å³é®å­ãä»ç¼è¯å¨çè§åº¦è®²ï¼å®å¿é¡»æ ¹æ®åå­åéå½æ°è¿åçå°åå¼ï¼çæå¯¹æ°ç»çææå¼ç¨ã

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

ä»¥ä¸æµè¯ç¨åºç¼è¯åï¼ä½¿ç¨ IDA éåå¾å°ä»¥ä¸æ±ç¼æä»¤ï¼

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

å¯ä»¥çå°ï¼å¨å±æ°ç»ç´æ¥ä½¿ç¨ä¸ä¸ªå°åç¬¦å· ga å¼ç¨ï¼å ä¸ºå¨ç¼è¯å¶å·²ç»å®æåå§åï¼æ°æ®ç´æ¥ä» .data æ .bss æ®µåºè£å¥åå­ï¼èå±é¨ç msg åæ¯å¨æ åå­ [esp+12h] åç§»å¤ï¼å¹¶ä¸éè¿ mov æä»¤è¿è¡åå§åã

èä½¿ç¨ malloc åéçå åå­åå¨ eax å¯å­å¨è¿åä¸ä¸ªåéå¥½çå°åï¼å¹¶å°è¿ä¸ªå°åå­å¨å°æ åå­ [esp+28h]ï¼ç¶ååå¾è¿ä¸ªå°ååå¥æ°æ®ï¼è¿éåå¥çæ¯ âWorld!âã

åå¨å±åéçæ°ç»ä¸æ ·ï¼å¨å±åéçç»æä½ä¹ä¼å¨ç¼è¯æç¡®å®å°åï¼ä¸ååå§åæ°æ®ä¸å¹¶åå¥ .data æ .bss æ®µåºãç¼è¯å¨è½å¤å¨ç¼è¯æ¶è®¡ç®åºç»æä½ä¸­æ¯ä¸ªæåçå°åï¼èä¸å¿å¨è¿è¡æ¶è¿è¡ä»»ä½è®¡ç®ã

å¦æå¨æ åå­åéä¸ä¸ªç»æä½ï¼åæ åçæ°ç»ä¸æ ·ï¼ä»ä»æ ¹æ®æ å¸å±ï¼å¾é¾è¯å«åºæ åéçç»æä½ã

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

IDA éåä»¥ä¸æµè¯ç¨åºå¯ä»¥å¾å°ä»¥ä¸ä»£ç ï¼å¨å±åéçç»æä½åä¸è¬æ°æ®æ²¡æä»ä¹å·®å«ï¼èä¸è®¿é®æ¯éè¿å°åç¬¦å·ç´æ¥è¯»åæ°æ®ã

èæ ååéçç»æä½ï¼åéè¿æ æéå¯å­å¨å åç§»å°åè¿è¡è¯»åï¼ä»æ±ç¼æä»¤ä¸æ ¹æ¬ä¸è½è¯å«æºä»£ç ä¸­ä½¿ç¨çé«çº§è¯­è¨çæ½è±¡æ°æ®ç±»åã

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

å¦ææ¯å åéçç»æä½ï¼åå¯ä»¥ä»ä¼ å¥ malloc çåæ°åæ¨ç»æä½çå¤§å°åå¶å­æ®µçå¸å±ãä»è¿ä¸ªä¾å­ä¸­ä¼ å¥ç 0CH è¡¨ç¤ºç»æä½å ç¨ 12 ä¸ªå­èï¼

- [esp+1Ch] ä¸ºç»æä½çé¦å°åï¼åå¥äºå­ç¬¦ä¸²åå®¹ï¼æ¯ä¸ªæéï¼
- [eax+4] ç»æä½çç¬¬äºä¸ªå­æ®µï¼åå¥äºå­ç¬¦ä¸²çé¿åº¦ï¼
- [eax+8] ç»æä½çç¬¬ä¸ä¸ªå­æ®µï¼åå¥äº byte ptr [esp+18h] æéæåçä¸ä¸ª 8-bit æ°å¼ï¼

å¯ä»¥çå°ï¼å ä¸ºåå­å¯¹é½ï¼æåå­æ®µåªä½¿ç¨äºå¶ä¸­çä¸ä¸ªå­èï¼ä½è¿æ¯å ç¨ 4 ä¸ªå­èçç©ºé´ã

å¯¹äºå¨å±åéçç»æä½ï¼ç¼è¯å¨è½å¤è®¡ç®åºä¸ä¸ªåºå®çèµ·å§å°åãå¯¹äºæ åéçç»æä½ï¼ç¼è¯å¨è½å¤è®¡ç®åºç»æä½èµ·å§ä½ç½®ä¸ç¸å³æ å¸§çæ æéä¹é´çåºå®å³ç³»ã

å¦æä¸ä¸ªç»æä½å¨ç¨åºå ä¸­åéï¼é£ä¹ï¼å¨è®¿é®å¶ä¸­çå­æ®µæ¶ï¼ç¼è¯å¨éè¦çæä»£ç æ¥è¯»åç»æä½çå­æ®µï¼å¹¶ä½¿ç¨ç¸åºçåç§»éã

æ­¤å¤ï¼å¯ä»¥åå»ºç»æä½æ°ç»ï¼ç»æä½ä¸­çç»æä½ï¼ä»¥åä»¥æ°ç»ä¸ºæåçç»æä½ãå¨å¤çè¿äºåµå¥ç»ææ¶ï¼åé¢æå³æ°ç»åç»æä½çè®¨è®ºåæ ·éç¨ã

IDA æä¾äºç»æä½åæä¸¾ç±»åå·¥å·æ¥æ¹åæçºµç»æä½çä»£ç çå¯è¯»æ§ãåªè¦åç°ä¸ä¸ªç¨åºæ­£æçºµæç§æ°æ®ç»æï¼å°±å¯ä»¥èèå°ç»æä½çå­æ®µåç§°åå¹¶å°åæ±ç¼ä»£ç æ¸åä¸­ï¼æèä¿æåæåæ£å¨ä»£ç æ¸åä¸­çæ°å­åç§»éã

ä½¿ç¨ Structures çªå£æ¥åå»ºæ°çç»æä½ï¼é¤éç»æä½å·²ç»ååºï¼å¦åå°±æ æ³å°ç»æä½åå«å°åæ±ç¼ä»£ç æ¸åä¸­ãå¨ Structures çªå£ä¸­ååºçç»æä½è¡¨ç¤º IDA è½å¤è¯å«ãå¹¶ç¡®å®å·²è¢«ä¸ä¸ªç¨åºä½¿ç¨çç»æä½ã

å¯ä»¥éæ© .data ä¸­çç»æä½ï¼å¹¶éè¿å³é®èå create struct from selection æ¥åå»ºæ°çç»æä½ï¼ä¹å¯ä»¥éæ©å¥½æ°æ®èµ·ç¹ï¼éè¿ Edit -> Struct var... å¿«æ·é® `Alt+Q` å°æ°æ®å®ä¹ä¸ºç°æçç»æä½ç±»åã

å®ä¹ç»æä½æ¶ï¼å¯ä»¥ä½¿ç¨ N æ¥ä¿®æ¹å­æ®µåç§°ï¼ä½¿ç¨ Edit -> Field type æ¥ä¿®æ¹å­æ®µçæ°æ®ç±»åï¼ä½¿ç¨ D æ¥å®ä¹å­èãåå­èãåå­èãå«å­èçæ°æ®ç±»åï¼å¦ææ¯å­ç¬¦ä¸²å°±ä½¿ç¨ A å®ä¹ãå¯¹äºæ²¡ææä¾å¿«æ·é®çç±»åå®ä¹ï¼ä½¿ç¨ Y ç´æ¥è¾å¥ç±»åå®ä¹ï¼å¦ `char *`ã

å¦æè¦å é¤å­æ®µï¼æå¢å å­æ®µä½¿ç¨ä»¥ä¸èåï¼

- Expand struct type... `Ctrl+E`
- Shrink struct type... `Ctrl+S`

å¢å å­æ®µå®ä¹è¿å¯ä»¥å¨ ends æ è®°ä¸æä½ï¼æç¸åºçæ°æ®ç±»åå³å¯ãå¦æå ä¸ºåå­å¯¹é½å¯¼è´ç»æä½å¤åºä¸äºå­èï¼å°±å¯ä»¥ä½¿ç¨ Shrink å°å¶ç§»é¤ã

å¯ä»¥å¨æ¬å°ç±»åä¸­å®ä¹ç»æä½ï¼

- é¦åä½¿ç¨å¿«æ·é® Shift+F1 æå¼æ¬å°ç±»åçªå£ View -> Open Subviews -> Local Typesã
- æä¸ insert å¿«æ·é®ï¼å¨å¼¹åºçªå£çè¾å¥ C è¯­è¨è¯­æ³å®ä¹çç»æä½ã
- ç¶åï¼å¨åè¡¨ä¸­åå»ä¸é¢å®ä¹çç»æä½ï¼å¹¶éæ©å¯¼å¥å°å½åæ°æ®åºå³å¯ä»¥ä½¿ç¨ã

æ´å¿«æ·çæ¹æ³æ¯ï¼ç´æ¥è§£æ C è¯­è¨å¤´æä»¶ï¼File -> Load File -> Parse C Header Fileãå®æå¤´æä»¶çç±»åè§£æï¼IDA ä¼éç¥ Compilation successfulã

å¯¹äºæ åå­åéçç»æä½ï¼åè®¾ ESP å¯å­å¨è¢«åå§åä¸ºæåä¸ä¸ªç»æä½çæéï¼å¨æ´ä¸ªå½æ°ä¸­ï¼ESP å¯å­å¨é½ä»£è¡¨è¿ä¸ªç»æä½ãå¨éæåæè¿ç¨ä¸­ï¼ESP å¹¶æ²¡æä¸ä¸ªå·ä½å¼ï¼ä½æ¯å¯ä»¥ä½¿ç¨ä¸ä¸ªç»æä½åç§»å¼æ¥æå¯¼ IDA å°å¯å­å¨ä¸ç»æä½å³èèµ·æ¥ãå°åæ å®ä½å°éè¦æå®åç§»çå¯å­å¨å¯»åï¼å¦åé¢ç [eax+4]ï¼ç¶åç¹å»èå Edit -> Operands type -> Offset -> Offset (struct) å½ä»¤ï¼å¿«æ·é® Tï¼ç¶åéæ©ç¸åºçç»æä½å­æ®µåå­æ®µï¼åæä¸æ¬¡å¿«æ·é® T è¿åã

ç»è¿ç»æä½åç§»å¤çåï¼åé¢çä»£ç å°ä¸ç»æä½çå­æ®µå³èèµ·æ¥ï¼å¦ä¸ï¼

```sh
.text:0040167C                 call    _strlen
.text:00401681                 mov     edx, eax
.text:00401683                 mov     eax, [esp+(Sd.type+1Ch)]
.text:00401687                 mov     [eax+Sd.len], edx
.text:0040168A                 movzx   edx, byte ptr [esp+(Sd.len+14h)]
.text:0040168F                 mov     eax, [esp+(Sd.type+1Ch)]
.text:00401693                 mov     [eax+Sd.value], dl
```

IDA å·²ç»å¤çç³»ç» SDK æä¾ç API å½æ°åæå³çæ°æ®ç»æï¼å¨åå»ºç¨åºéåæ°æ®åºæ¶ä¼å°è¯ç¡®å®ä¸äºè¿å¶æä»¶æå³çç¼è¯å¨åå¹³å°ï¼å¹¶å è½½éå½çç»æä½æ¨¡æ¿ãå½ IDA å¨åæ±ç¼ä»£ç æ¸åä¸­æçºµç»æä½æ¶ï¼å®ä¼å¨ Structures çªå£ä¸­æ·»å ç¸åºçç»æä½å®ä¹ï¼è¿æ¯å·²ç¥ç»æä½çå­éãéè¦ä½¿ç¨ IDA å¤çå¥½ è¿äºå·²ç¥ç»æä½ï¼å³æ åç»æä½ï¼å¯ä»¥å¨æ·»å ä¸ä¸ªæ°ç»æä½æ¶ï¼å¨åå»ºç»æå¯¹è¯æ¡ä¸­éæ© Add standard structureã

åå¦ï¼å¯¹ä¸ä¸ª PE äºè¿å¶æä»¶è¿è¡è§£ææ¶ï¼å¤´é¨å¯ä»¥ä½¿ç¨ IMAGE_DOS_HEADER ç»æä½è§£æç¸åºç MS-DOS Stub ç¨åºç»æãå¦å¤ï¼IMAGE_DOS_HEADER ä¸­çæ°æ®æåä¸ä¸ª IMAGE_NE_HEADER ç»æä½ï¼å®è¯¦ç»è¯´æäº PE äºè¿å¶æä»¶çåå­å¸å±ï¼å¯ä»¥ä½¿ç¨ Windows æä¾ç SDK å¤´æä»¶å®ä¹çç»æä½è¿è¡è§£æã

çè³å¯ä»¥ç¨ IDA æ¥è§£æ Bitmap è¿æ ·å¾åæä»¶çä¿¡æ¯å¤´ï¼BMP æä»¶çå¤´é¨å¯¹åº BITMAPFILEHEADER ç»æä½ï¼ç¶åç´§è· BITMAPCOREHEADER ç»æã

ä½¿ç¨ IDA Freeware åè´¹çæ¬éè¦å¨å è½½ç¨åºæä»¶åï¼åéè¿èå File -> Load file -> Addition binary file æ¥å è½½äºè¿å¶æä»¶ï¼ç¶åå®ä¹ç¸åºçç»æä½è¿è¡æ°æ®è§£æã


## â¡ C++ Object Model
- Inside the C++ Object Model Stanley B. Lippman https://2lib.org/book/769263/c938f7

C++ ä¸ä¸ªéè¦çæ½è±¡å°±æ¯ Abstract data type (ADT)ï¼å°åç§æ°æ®å°è£å°ç±»åé¨ï¼å¹¶åå¤é¨æ´é²å¬å¼æ¥å£ã

C++ åºäºå¤ç»§æ¿åèæç»§æ¿ï¼multiple or virtual inheritanceï¼è¦å¨åå­ä¸­å®ç°è¿äºå¤æçæ°æ®ç»æï¼è¿å°±æ¯ C++ çå¯¹è±¡åå­æ¨¡åã

å¨ Stanley B. Lippman ç¼åç Inside the C++ Object Model è¿æ¬åªæä¸å° 200 é¡µçå°åå­ä¸­æè¾è¯¦ç»çæè¿°ã

è¿éåªå¯¹å¶ä¸­ä¸ä¸ªéå¸¸éè¦çæ°æ®ç»ææ¦å¿µ Virtual Tableï¼ä½ä¸ºéç¹å»çè§£ C++ ç±»åå¨åå­çç»ç»ã

å¨ C++ ç±»å½¢ä¸­ç»ç»çåç§å½æ°ãæåï¼ä»æ ¹æ¬ä¸å C è¯­è¨çå½æ°ãæ°æ®æ¯æ²¡æä»»ä½å·®å«çã

ä¸ºäºå®ç°æ½è±¡çå¯¹è±¡å°è£ï¼Stroustrup å¨æåç C++ å¯¹è±¡æ¨¡åè®¾è®¡å¦ä¸ï¼

- static æ°æ®æåå¨å®ä¾å¯¹è±¡å¤ï¼å¯¹ææç±»å®ä¾ææï¼
- nonstatic æ°æ®æåå¨å®ä¾å¯¹è±¡åé¨ï¼åªç±ç±»å®ä¾æ¬èº«ç®¡çï¼
- staticãnonstatic æåå½æ°ä¹æ¾å¨ç±»å¯¹è±¡ä¹å¤ï¼
- virtual èå½æ°ï¼éæåééæï¼åéè¿ä»¥ä¸ä¸¤ä¸ªæ­¥éª¤æ¯æï¼
    - ç¨ä¸ä¸ªç§°ä¸º vtbl - virtual table çè¡¨æ ¼ç®¡çç±»å½¢ä¸­äº§ççæåèå½æ°çæéï¼
    - ç±»å®ä¾å¯¹è±¡æ·»å äºä¸ä¸ªæé vptrï¼æåç¸å³çèå½æ°è¡¨ãèè¡¨æéçè®¾å®åéç½®ç±æé å½æ°ãææå½æ°åæ·è´èµå¼è¿ç®ç¬¦èªå¨å®æã

å¦å¤ï¼èå½æ°è¡¨ç first slot è®¾ç½®äºä¸ä¸ªæå type_info çæéï¼RTTI - Run Time Type Identification è¿è¡æ¶ç±»åè¯å«ï¼ç±ç¼è¯å¨å¨ç¼è¯å¨çæçç¹æ®ç±»åä¿¡æ¯ï¼åæ¬å¯¹è±¡ç»§æ¿å³ç³»ï¼å¯¹è±¡æ¬èº«çæè¿°ï¼RTTI æ¯ä¸ºå¤æèçæçä¿¡æ¯ï¼æä»¥åªæå·æèå½æ°çå¯¹è±¡å¨ä¼çæã

è¿ä¸ªæ¨¡åçä¸»è¦ä¼ç¹å¨äºå®çç©ºé´åå­åæ¶é´çæçï¼ä¸»è¦ç¼ºç¹åæ¯ï¼å¦æåºç¨ç¨åºä»£ç æ¬èº«æªæ¾æ¹åï¼ä½æç¨å°çç±»å¯¹è±¡çééææ°æ®æåææå¢å ãç§»é¤æä¿®æ¹ï¼é£ä¹è¿äºåºç¨ç¨åºçä»£ç åæ ·å¾éæ°ç¼è¯ã

C++ æ¯æåä¸ç»§æ¿åå¤éç»§æ¿ï¼çè³ç»§æ¿å³ç³»ä¹å¯ä»¥æå®ä¸º virtualï¼ä¹å°±æ¯å±äº«çææï¼ãå¨èæç»§æ¿çæåµä¸ï¼åºç±»ä¸ç®¡å¨ç»§æ¿ä¸²é¾ä¸­è¢«æ´¾çå¤å°æ¬¡ï¼æ°¸è¿åªä¼å­å¨ä¸ä¸ªå®ä½ã

ä¾å¦ï¼ä»¥ä¸ç»§æ¿å³ç³»åå¯¹åºçåå­æ¨¡åç»æï¼

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

ä½ C++ çç»§æ¿è¿ä¸åªæè¿æ ·çä¸ç§å¤ç»§æ¿å³ç³»ï¼è¿å¯è½æä»¥ä¸è¿äºç»§æ¿ï¼

- éå¤ç»§æ¿ï¼åç»§æ¿çå¤ä¸ªç¶ç±»ä¸­æç¸åçè¶ç±»ï¼ï¼
- å¤éèæç»§æ¿ï¼ä½¿ç¨ virtual æ¹å¼ç»§æ¿ï¼ä¸ºäºä¿è¯ç»§æ¿åç¶ç±»çåå­å¸å±åªä¼å­å¨ä¸ä»½ï¼

èç»§æ¿è½å¤å¾å¥½å°é²æ­¢å¤éç»§æ¿æ¶åºç°åä¸ä¸ªç±»çå¤ä¸ªæ·è´ï¼

åè®¾ï¼ç´æ¥ç¶ç±» Base1ãBase2 é½ç»§æ¿ä¸ä¸ªè¶ç±» Baseï¼è¿ä¼å¯¼è´ Derived å®ä¾ä¸­æä¸¤ä»½ Base ç±»çèå½æ°è¡¨ãåæåå­å¨ã

æèå¯ä»¥å¨ Derived ç±»ä¸­ç¨ using æå®ç¨é£ä¸ä¸ªç¶ç±»ççæ¬ï¼

    using Base1::abc;
    using Base2::abc;

ä½æ¯éè¿èç»§æ¿ï¼è½æ´å¥½å°å¤çè¿ç§æå½¢ã


å°ä»¥ä¸è§ååå®¹å®ç¨¿ makefile æä»¶ï¼ç¶åéè¿ make all æ§è¡èªå¨åç¼è¯ï¼

```
all: model model_s

# use make model
model: model.o; g++ -o $@ $?
model.o: model.cpp; g++ -c -std=c++11 $?

model_s: model_s.o; g++ -s -O3 -o $@ $?
model_s.o: model.cpp; g++ -c -std=c++11 -o model_s.o $?
```

ç¤ºèï¼ç±»ç±»çåå­æ¨¡åï¼

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

ç¨åºå¨ééææåå­æ®µå®ä¹æ¶ç´æ¥ä½¿ç¨äºçåå§åè¯­æ³ï¼è¿éè¦ C++11 è§èè¯­æ³æ¯æã

ä»¥ä¸ç¨åºæ¼ç¤ºï¼C++ èå½æ°ççå¤æï¼å¦æä¸»å½æ°ä¸­æ²¡ `b->bar()` è¿ä¸ªè°ç¨ï¼ç¼è¯ç¨åºæ¶ï¼è¦ä¸å°±ä¸ä¼åå« B:bar() è¿ä¸ªå½æ°çä»£ç ï¼å ä¸ºæ²¡æä»»ä½ä½¿ç¨å®ï¼ä»ä»£ç åä¼åçè§åº¦ä¸å®ä¹æ¯ä¸åºè¯¥åºç°å¨å¯æ§è¡ç¨åº¦ä¸­çã

ç»æä½å¯å°åç§ä¸åçæ°æ®ç±»åé¡¹ç»åå°ä¸ä¸ªå¤åæ°æ®ç±»åä¸­ï¼åæ°ç»ä¸åï¼ç»æä½ä¸­çæ°æ®å­æ®µæ¯éè¿åç§°è®¿é®ï¼èä¸æ¯åæ°
ç»é£æ ·éè¿ç´¢å¼è®¿é®ãä½æ¯å¨æ±ç¼ä»£ç æ¥çï¼ç»æä½å­æ®µåç§°è¢«ç¼è¯å¨è½¬æ¢æäºåå­ä¸­çåç§»éï¼æä»¥è®¿é®ç»æä½å­æ®µçæ¹å¼çèµ·æ¥ä¸ä½¿ç¨ç´¢å¼è®¿é®æ°ç»åç´ çæ¹å¼æå¶ç¸ä¼¼ã

åæ¥è§å¯ IDA çæçæ°æ®æ®µåå®¹ï¼å¯ä»¥çå° `name` å­æ®µçæ°æ®ä¼å¨æé å¨ä¸­å¼ç¨ï¼è¿è¡¨ç¤ºç±»åæ§è¡åå§åæ¶å°æ°æ®å¡«åå°ç±»å®ä¾çåå­ç©ºé´ï¼

```sh
.rdata:00404065 aAFooIsCalled   db 'A::foo() is called',0 ; DATA XREF: A::foo(void)+9âo
.rdata:00404078 aABarIsCalled   db 'A::bar() is called',0 ; DATA XREF: A::bar(void)+9âo
.rdata:0040408B aBFooIsCalled   db 'B::foo() is called',0 ; DATA XREF: B::foo(void)+9âo
.rdata:0040409E aBBarIsCalled   db 'B::bar() is called',0 ; DATA XREF: B::bar(void)+9âo
.rdata:004040B1 aStructa        db 'StructA',0            ; DATA XREF: A::A(void)+16âo
.rdata:004040B9 aStructb        db 'StructB',0            ; DATA XREF: B::B(void)+20âo
```

å¯ä»¥ä»é»è®¤æé å¨çä»£ç è§å¯å°ï¼

```
.text:00402918 ; A *A::A(A *__hidden this)
.text:00402918                 public __ZN1AC2Ev
.text:00402918 __ZN1AC2Ev      proc near               ; CODE XREF: B::B(void)+Eâp
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
.text:004029A0 __ZN1BC1Ev      proc near               ; CODE XREF: _main+33âp
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

å¨ä¸»å½æ°ä¸­ï¼æ§è¡åºåå§å½æ° `___main` åï¼å°±ä¼å°å®ä¾çåå­åç§» 0Ch å°åä¼ éå°æ åå­ä¸­ï¼

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

ä»è°ç¨ B::foo() å½æ°çä»£ç å¯ä»¥çå°ï¼ç»åäºå¤æ¬¡çåå­å¯»åï¼ä» ebx è·åå®ä¾åºåå°åå¾èå½æ°ï¼ä¸­é´ç»åäºåæ¡ mov æä»¤æå° foo() å½æ°å°åååºå¹¶ä¼ éå° eax å¯å­å¨ã

ç»åç±»æåæ¹æ³çä»£ç ï¼å¯ä»¥è§å¯å°ï¼ç±»å®ä¾æé this æ¯éè¿ ecx å¯å­å¨ä¼ éçã

ä»¥ä¸ä»£ç å¯ä»¥æ»ç»å°ï¼èå½æ°çè°ç¨ç»è¿çæ¥è¡¨è¿ç¨ï¼ç¸å¯¹äºå¶å®æåå½æ°ç´æ¥ä½¿ç¨ç¬¦å·è°ç¨è¦æ¶èæ´å¤å¤ç CPU æä»¤å¨æã

æ¥ä¸æ¥æ¯ C++ å¯¹è±¡åå­æ¨¡åä¸­æéè¦çé¨åï¼

```
.rdata:00404300 ; public A
.rdata:00404300                 public __ZTI1A
.rdata:00404300 ; `typeinfo for'A
.rdata:00404300 __ZTI1A         dd offset __imp___ZTVN10__cxxabiv117__class_type_infoE+8
.rdata:00404300                                         ; DATA XREF: .rdata:00404310âo
.rdata:00404300                                         ; .rdata:00404320âo
.rdata:00404300                                         ; reference to RTTI's type class
.rdata:00404304                 dd offset __ZTS1A       ; reference to type's name
.rdata:00404308 ; public B :
.rdata:00404308 ;   public /* offset 0x0 */ A
.rdata:00404308                 public __ZTI1B
.rdata:00404308 ; `typeinfo for'B
.rdata:00404308 __ZTI1B         dd offset __imp___ZTVN10__cxxabiv120__si_class_type_infoE+8
.rdata:00404308                                         ; DATA XREF: .rdata:0040432Câo
.rdata:00404308                                         ; reference to RTTI's type class
.rdata:0040430C                 dd offset __ZTS1B       ; reference to type's name
.rdata:00404310                 dd offset __ZTI1A       ; reference to parent's type name
.rdata:00404314                 public __ZTS1A
.rdata:00404314 ; `typeinfo name for'A
.rdata:00404314 __ZTS1A         db '1A',0               ; DATA XREF: .rdata:00404304âo
.rdata:00404314                                         ; type descriptor name
.rdata:00404317                 align 4
.rdata:00404318                 public __ZTS1B
.rdata:00404318 ; `typeinfo name for'B
.rdata:00404318 __ZTS1B         db '1B',0               ; DATA XREF: .rdata:0040430Câo
.rdata:00404318                                         ; type descriptor name
.rdata:0040431B                 align 4
.rdata:0040431C                 public __ZTV1A
.rdata:0040431C ; `vtable for'A
.rdata:0040431C __ZTV1A         dd 0                    ; offset to this
.rdata:00404320                 dd offset __ZTI1A       ; `typeinfo for'A
.rdata:00404324 off_404324      dd offset __ZN1A3fooEv  ; DATA XREF: A::A(void)+9âo
.rdata:00404324                                         ; A::foo(void)
.rdata:00404328                 public __ZTV1B
.rdata:00404328 ; `vtable for'B
.rdata:00404328 __ZTV1B         dd 0                    ; offset to this
.rdata:0040432C                 dd offset __ZTI1B       ; `typeinfo for'B
.rdata:00404330 off_404330      dd offset __ZN1B3fooEv  ; DATA XREF: B::B(void)+13âo
.rdata:00404330                                         ; B::foo(void)
```

å¯ä»¥çå°ï¼å¼å¤´é¨åæ¯ RTTI ä¿¡æ¯ï¼A ç±»æ²¡æç»§æ¿å¶å®ç¶ç±»ï¼ç¸æ¯è¾ B ç±»ç»§æ¿äº A ç±»ï¼æä»¥å®ç RTTI ä¸­æä¸¤ä¸ªåå­ï¼ä¸ä¸ªæ¯èªèº«çåå­ï¼å¦ä¸ä¸ªæ¯ç¶ç±»çåå­ã

æ³¨æï¼è¿éåªè®°å½èæå½æ° fooï¼èå¦å¤ A å B é½æ²¡æè®°å½ééæç bar æåå½æ°ã

ææå½æ°ä½åæ¯æ¾å¨å¦ä¸åè¿ç»­çåå­ä¸­ï¼åå­å¼åå°åå¯ä»¥ç§°ä¸ºç±»åºåãå¨è°è¯æåå½æ°æ¶ï¼ä½¿ç¨ç±»åºåå åç§»çå½¢å¼è®¿é®ç¸åºçå½æ°ã

æ ¹æ®å½æ°ä½çä»£ç éä¸åï¼å½æ°å®ä¾çå°åä¹ä¸ç¸åï¼

```sh
.text:004028B0 ; _DWORD A::bar(A *__hidden this)
.text:004028E4 ; _DWORD A::foo(A *__hidden this)
.text:00402918 ; A *A::A(A *__hidden this)
.text:00402938 ; _DWORD B::bar(B *__hidden this)
.text:0040296C ; _DWORD B::foo(B *__hidden this)
.text:004029A0 ; B *B::B(B *__hidden this)
```


## â¡ OLLVM æ··æ·ç®æ³
- https://blog.quarkslab.com/deobfuscation-recovering-an-ollvm-protected-program.html
- https://github.com/obfuscator-llvm/obfuscator.git
- Obfuscating C++ Programs Via Control Flow Flattening http://ac.inf.elte.hu/Vol_030_2009/003.pdf

ollvm çç¼è¯ä½¿ç¨ cmakeï¼g++

    apt-get install cmake
    sudo apt-get install g++

    git clone -b llvm-4.0 git@github.com:obfuscator-llvm/obfuscator.git
    cd llvm-4.0
    mkdir build
    cd build
    cmake -DCMAKE_BUILD_TYPE:String=Release ../
    make âj4

ä½¿ç¨ 4 çº¿ç¨åæ¶è¿è¡ç¼è¯ï¼å¯ä»¥ææå°æé«ç¼è¯çæçï¼å¯ä»¥æ ¹æ® CPU çæ ¸å¿æ°è¿è¡ä¿®æ¹ã

ç¼è¯å®æåï¼ç¨åºé½å¨ build/bin å build/lib ä¹ä¸­ã

å¯ä»¥å° ollvm å½æä¸ä¸ªç¼è¯å¨ä½¿ç¨ï¼

    obfuscator-llvm-3.4/build/bin/clang  demo.c âo demo -mllvm -fla

åè½

- `-fla` Control flow flattening
- `-sub` Instruction substitution
- `-bcf` Bogus control flow

æ§å¶æµå¹³å¦å(control flow flattening)çåºæ¬ææ³æ¯éè¿ä¸ä¸ªä¸»ååå¨æ¥æ§å¶ç¨åºåºæ¬åçæ§è¡æµç¨ï¼ç»è¿æ§å¶æµå¹³å¦ååå¯ä»¥æ¨¡ç³åºæ¬åä¹é´çååå³ç³»ï¼å¢å ç¨åºåæçé¾åº¦ï¼åæ¶è¿ä¸ªæµç¨ä¹å¾å VM çæ§è¡æµç¨ã

ç¬¦å·æ§è¡ Symbolic Execution æ¯ä¸ç§éè¦çå½¢å¼åæ¹æ³åè½¯ä»¶åæææ¯ï¼éè¿ä½¿ç¨ç¬¦å·æ§è¡ææ¯ï¼å°ç¨åºä¸­åéçå¼è¡¨ç¤ºä¸ºç¬¦å·å¼åå¸¸éç»æçè®¡ç®è¡¨è¾¾å¼ï¼ç¬¦å·æ¯æåå¼éåçè®°å·ï¼ç¨åºè®¡ç®çè¾åºè¢«è¡¨ç¤ºä¸ºè¾å¥ç¬¦å·å¼çå½æ°ï¼å¶å¨è½¯ä»¶æµè¯åç¨åºéªè¯ä¸­åæ¥çéè¦ä½ç¨ï¼å¹¶å¯ä»¥åºç¨äºç¨åºæ¼æ´çæ£æµã

ç¬¦å·æ§è¡çåå±æ¯ä»éæç¬¦å·æ§è¡å°å¨æç¬¦å·æ§è¡å°éæ©æ§ç¬¦å·æ§è¡ï¼å¨æç¬¦å·æ§è¡ä¼ä»¥å·ä½æ°å¼ä½ä¸ºè¾å¥æ¥æ¨¡ææ§è¡ç¨åºï¼æ¯æ··åæ§è¡(concolic execution)çå¸åä»£è¡¨ï¼æå¾é«çç²¾ç¡®åº¦ï¼ç®åè¾æ°çç¬¦å·æ§è¡å·¥å·æ Triton å angrã 


## â¡ Command line switches

IDA å¯ä»¥ä½¿ç¨ä»¥ä¸å½ä»¤è¡ï¼

    ida input-file
    ida64 input-file        (Start 64-bit graphical interface)
    idat input-file       (Start text interface)

æ¹å¤çæ¨¡å¼ IDA å¿ééè¿ä»¥ä¸å½ä»¤åæ°æ§è¡ï¼

    ida -B input-file
    ida -c -A -Sanalysis.idc input-file

ä½¿ç¨æ§å¶å°ç¨åº idat.exe/idat æ´èçèµæºï¼åæ¹å¤çæ´å¥½ï¼æ³¨æå¨æ¹å¤çæ¶æä»¶ä¸ä¼èªå¨å è½½ï¼å ä¸º analysis.idc èæ¬æä»¶ï¼åæ ¸æ²¡ææºä¼å è½½å®ä»¬ã

ä»¥ä¸æ¯ IDA æ¯æçå½ä»¤è¡åæ°ï¼

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


## â¡ Debugger
- Debuggers https://www.hex-rays.com/products/ida/debugger/
- Remote debugging tutorial https://www.hex-rays.com/products/ida/support/freefiles/remotedbg.pdf
- Debugging a Linux executable from a Windows machine https://www.hex-rays.com/products/ida/debugger/cross-win-linux/win32tolinux/
- Debugging a Windows executable from a Linux machine https://www.hex-rays.com/products/ida/debugger/cross-win-linux/linuxtowin32

IDA ä»¥åæ±ç¼å¨é»åï¼æ¯å¯¹äºè¿å¶æä»¶æ§è¡éæåæçæä½³å·¥å·ä¹ä¸ãç±äºç°ä»£åéæåææå·§å¾å¤æï¼å¸¸å¸¸éè¦å°éæåææå·§ä¸å¨æåææå·§ç»åèµ·æ¥ï¼ä»¥å©ç¨
å®ä»¬äºèçä¼å¿ã

å¨ IDA è°è¯ç¨åºåï¼å³æä¸ F9 æ§è¡ç¨åºï¼éè¦è®¾ç½®ç¸åºçè°è¯å¨ï¼å·²ç»éæ©å¥½è°è¯å¨è¿å¯ä»¥éè¿ Debugger -> Switch debugger... è¿è¡åæ¢ã

å¯å¨è°è¯å¨è°è¯ä¸ä¸ªç¨åºæå³çå®çä»£ç å°å¨æ¨çç³»ç»ä¸è¿è¡ï¼è¯·å°å¿æ¶æç¨åºãçæ¯åæ¨é©¬ï¼IDA ä¼å¼¹æ¡è¿è¡è­¦åï¼

IDA ç®åæ¯æå¤ç§è°è¯å¨ï¼éè¿ remote debugging serverï¼å¯ä»¥å¨ Windows/Linux/Mac OS X ç­å¹³å°ä¸è°è¯ä»»ä½å·²æ¯æçå¶å®å¹³å°çç¨åºï¼å®æ¹ç½ç«æä¾äºåç§è¿ç¨è°è¯æç¨ã

- Local Bochs debugger
- Local Windows debugger
- PIN tracer
- Remote GDB debugger
- Remote Windows debugger
- Trace replayer
- Windbg debugger

éè¦å®è£ç¸åºçè°è¯å¨ï¼å¹¶è®¾ç½®å° ida.cfg éç½®æä»¶ï¼æç¯å¢åéä¸­ä»¥ä¾ IDA è°ç¨ã

IDA Pro æä¾äº dbgsrv è¿è¡è¿ç¨è°è¯ï¼æ¯æå¤ç§å¹³å°ï¼

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

ä¾å¦ï¼Win32 ç¨åºçè¿ç¨è°è¯ï¼

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


ä½¿ç¨è¿ç¨è°è¯ï¼éè¦è¿è¡ gdbserver.exe æè dbgsrv.exe æå¡ç«¯ï¼ç¶ååéè¿ IDA è¿æ¥è°è¯å¨ã

å¨ Windows å¹³å°ä¸ï¼IDA ç windbg plugin ä¾èµäº WinDbg å®è£ç®å½ä¸ç dbgeng.dllï¼å®æ¹å»ºè®®ä¿®æ¹ IDA å®è£ç®å½ä¸ cfg/ida.cfg ä¸­ç DBGTOOLS çè·¯å¾ï¼ä½¿ä»æå windbg.exe è°è¯å¨æå¨çç®å½ãå½ç¶ï¼ä½ä¸ºæ¿ä»£æ¹æ¡ï¼å¯ä»¥å° windbg.exe æå¨ç®å½æ·»å å° PATH ç¯å¢åéä¸­ã

éº»ççå·¥ç MIT 6.828 æä½ç³»ç»å·¥ç¨è¯¾ç¨å®éªä¹å¯ä»¥ä½¿ç¨ IDA æ¥è°è¯ JOS åæ ¸ï¼åªéè¦è¿è¡èææºè¿å¥ç­å¾è°è¯ç¶æï¼åéç½® IDA ä½¿ç¨ Remote GDB è°è¯å¨ï¼å¹¶è®¾ç½® Debugger -> Process options çé¢ä¸­ä¸çä¸»æºååç«¯å£ï¼è¯¾ç¨éç½®çç«¯å£ä¸º 26000ï¼å¦æå¨æ¬æºä¸è¿è¡ QEMU æ¨¡æå¨ï¼åä¸»æºå¡« localhost å³å¯ã

è°è¯è¿ç¨ä¸­åæ§è¡çæ¯ BIOS ä»£ç ï¼å¯ä»¥å¨ QEMU å®è£ç®å½æ¾å°ç¸åºçç¨åºï¼è¿éååè¡¨å ä¸ªåæ ¸å¼å¯¼ç¸å³çå³é®ä»£ç ç¹ï¼

|   ä»£ç æä»¶   |                            å³é®å°å                            |
|--------------|----------------------------------------------------------------|
| qemu/pc-bios | `0xfffffff0` CPU æå®ç BIOS å¥å£ç¹ï¼16-bit æ¶æå¯¹åº 0xffff0ã |
| boot/boot.S  | `0x7c00` çº¦å®ä¿æç Boot Loader å¥å£ç¹ï¼ç± BIOS è°ç¨ã         |
| boot/main.c  | `0x7c45` call `0x7d25` åå¤è¿å¥ bootmain å½æ°å è½½ JOS åæ ¸ã   |
| kern/entry.S | `0x7d81` call (void ( * )(void) `0x10018` æ§è¡åæ ¸ä»£ç ã       |
| kern/init.c  | `0x7d9a` jmp `0x7d9a` è¿å¥ i386_init åå§ååæ ¸ã              |

åæ ¸å è½½å°åå­çå°åï¼å¯ä»¥éè¿ objdump -h obj/kern/kernel æ¥è¯¢ï¼å³ start address 0x0010000cã

ä½¿ç¨ IDA å¸¦æ¥çæå¤§å¥½å¤å°±æ¯ä¾¿å©æ§ï¼è¿ææç¤ºä¿¡æ¯æ´å¨é¢ï¼è¿äºé½æ¯ GDB ç­åè´¹å·¥å·æä¸è½æä¾çãä¸è¿æç¹ä¸è¶³çæ¯ä¸è½åæ¶å è½½ Boot Loader å Kernel è¿ä¸¤ä¸ªç¬ç«çç¨åºï¼å®ä»¬ä¼å¨åæ ¸å¼å¯¼è¿ç¨æé¡ºåºæ§è¡ãå¦æä½¿ç¨ IDA å°±éè¦è°è¯å® Boot Loader ç¨åºåæ­å¼è¿æ¥ï¼åå è½½ Kernel ç¨åºç»§ç»­è°è¯ã

å¨ Windows å¹³å°ä¸è°è¯ Linux ç¨åºæ­¥éª¤å¦ä¸ï¼

- Step1ï¼å° "IDA_Pro_v7.0\dbgsrv" ç®å½ä¸ç "liunux_server" å "linux_server64" æ·è´å°èææºä¸­ã
- Step2ï¼å¨èææºä¸­æ¾å°å¾è°è¯æä»¶ï¼ä½¿ç¨å½ä»¤ "chmod 777 filename" èµäºææç¨æ·è¯»åæ§è¡æéã
- Step3ï¼å¨èææºä¸­è¿è¡ "linux_server(64)"ï¼æ²¡ææ§è¡æéæ·»å ä¸ä¸ã
- Step4ï¼å¾è°è¯ç ELF æä»¶æ·è´ä¸ä»½å°ä¸»æºï¼ä½¿ç¨å¯¹åºçæ¬ç IDA æå¼ï¼å¨èåæ ç¹å» "Debugger -> Select debugger"ï¼F9ï¼ã
- Step5ï¼éæ© "Remote Linux debugger"ï¼æå¼è°è¯å¨èå "Process options"ï¼éç½®å¥½åºç¨ç¨åºãè¿ç¨ä¸»æºåãç«¯å£ã
- Step6ï¼ç¶åéè¿ "Debug -> Attach -> Remote Liunx debugger" éæ©èææºä¸çè¿ç¨ï¼F9 å¯å¨ç¨åºè¿ç¨ä¼æç¤ºã


## â¡ IDA & Android
- Magisk Android Rooting https://topjohnwu.github.io/Magisk/
- æµè° Android åè°è¯ä¹ è½¬åç«¯å£ https://www.cnblogs.com/jiaoxiake/p/6801093.html
- IDA Dalvik debugger: tips and tricks https://www.hex-rays.com/blog/ida-dalvik-debugger-tips-and-tricks/
- A Guide to Debugging Android Binaries https://resources.infosecinstitute.com/topic/guide-debugging-android-binaries
- Debugging Android Libraries using IDA https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/debugging-android-libraries-using-ida/
- Java Debug Wire Protocol https://docs.oracle.com/javase/7/docs/technotes/guides/jpda/jdwp-spec.html
- OWASP Mobile Security Testing Guide https://github.com/OWASP/owasp-mstg
- OWASP Mobile Security Testing Guide https://mobile-security.gitbook.io/mobile-security-testing-guide/
- Android NDK API Reference https://developer.android.google.cn/ndk/reference?hl=en
- /proc æä»¶ç³»ç» https://www.kernel.org/doc/Documentation/filesystems/proc.txt
- 2021 KCTF ç¬¬äºé¢ åå±±è®ºå https://bbs.pediy.com/thread-266937.htm

ä½¿ç¨ IDA ç android_server è°è¯ APK æ¶é»è®¤ä½¿ç¨ç«¯å£æ¯ 23946ï¼å¯è½æåè°è¯ä»£ç ä¼æ£æµæ­¤ç«¯å£æ¯å¦å ç¨ï¼æä»¥ä¿é©èµ·è§ä¸å¦¨ä½¿ç¨å«çç«¯å£ã

å¯ä»¥ä½¿ç¨ ./android_server -p12345 æå®ç«¯å£ï¼ä¹å¯ä»¥ä½¿ç¨ IDA æè¡¥ä¸ç´æ¥éåä¿®æ¹é»è®¤ç«¯å£ãæå¼ IDA è½½å¥ android_serverï¼è¿å¥ main å½æ°ï¼æ F5 æ¥çä¼ªä»£ç ï¼å®ä½å° 23946ï¼0x5dbaï¼ä½ç½®ï¼ç´æ¥ä¿®æ¹å³å¯ã å¯ä»¥æ 5D BA æ¹ä¸º 39 30ï¼å³ 12345 ç«¯å£ã

å¯ä»¥ä½¿ç¨èæè®¾å¤è¿è¡è°è¯ï¼åå»º AVD è®¾å¤åï¼å°±å¯ä»¥ä½¿ç¨èæå¨å¯å¨å®ï¼

    avdmanager create avd --name "Pixel_XL" -d pixel_xl --tag google_apis --package "system-images;android-28;google_apis;x86"
    avdmanager delete avd -n Pixel_XL

å¯å¨ AVD è®¾å¤ Starting the emulator

    # emulator -avd avd_name [ {-option [value]} â¦ ]
    # emulator @avd_name [ {-option [value]} â¦ ]

    emulator -avd Pixel_XL
    emulator @Pixel_XL

ç¶åå°è°è¯æå¡ç¨åºä¼ éå° Android ç³»ç»ï¼å¯ä»¥ä½¿ç¨ /data ç®å½ï¼

    $ adb push C:\IDA_Pro_7.6\dbgsrv\android_server64 /data
    $ adb shell chmod +rwx /data/android_server64

    $ adb shell /data/android_server -p23946
    IDA Android 32-bit remote debug server(ST) v7.5.26. Hex-Rays (c) 2004-2020
    Listening on 0.0.0.0:23946...

Apktool å¯ä»¥ç¨æ¥ è§£å APKï¼å¦æç´æ¥ä½¿ç¨ unzip è§£åå¯è½å¾å°ä¸äºä¸å¯éè¯»çæä»¶ï¼å¦ AndroidManifest.xml æ¯äºè¿å¶ç¼ç çæ ¼å¼ã

    apktool_2.5.0.jar d KCTF-2.sign.apk

Apk åå«ç resources.arsc æä»¶æ¯ aapt å·¥å·ç¼è¯èµæºæ¶çæçä¸ä¸ªéè¦æä»¶ãå®æ¯ App ä½¿ç¨çèµæºç´¢å¼ï¼ä¾å¦ Android è®¾å¤è¯­è¨ï¼å±å¹è®¾å¤å°ºå¯¸ä¸åæ¶ï¼app éè¿åæ ·ç ID ä½å´è½æ¾å°ä¸åçèµæºè¿è¡æ¾ç¤ºã

è§£åå¯è½å¾å° Smali æä»¶ï¼è¿æ¯ Android Dalvik èææºä½¿ç¨çé«çº§æ±ç¼è¯­è¨ï¼æ¯æç±»ä¸æ¹æ³ç­é«çº§è¯­è¨æ¦å¿µï¼Smali æ¯ä¸ç§å®½æ¾å¼ç Jasmin/dedexer è¯­æ³ãéå¸¸éè¿éåç¼è¯ .DEX å¦ classes.dex æä»¶å¾å°ï¼è¿æ¯ Dalvik èææºçå¯æ§è¡æä»¶ã å¯ä»¥ä½¿ç¨ dex2jar å° DEX æ ¼å¼è½¬æ¢ä¸º JAR æ ¼å¼ï¼åä½¿ç¨åç¼è¯å·¥å· jd-gui çæ Java ä»£ç ãä¹å¯ä»¥ä½¿ç¨ jadx (Dex to Java Decompiler) ç´æ¥éååç¼è¯ã

å³äºå¨æåº so å¯¹åºç CPU æ¶æï¼

- `x86`ï¼Intel x86 32-bit CPU ææ¶ï¼è¿æ¯å¤ææä»¤æ¶æ CISC - Complex Instruction Set Computingï¼
- `x86_64`ï¼AMD æ¨åºçå¼å®¹ x86 ç 64-bit CPU ææ¶ï¼
- `arm64-v8a`ï¼ARMv8 64-bit CPU ææ¶ï¼å¦éªé¾ 810ï¼820ï¼835 ç­ï¼åæ¶å¼å®¹ A32, T32 æä»¤éï¼
- `armeabi-v7a`ï¼ARMv7 32-bit CPU ææ¶ï¼å¦éªé¾ 800ï¼801 ç­ï¼åä¸å¼å®¹ ARMv5,ARMv6ï¼
- `armeabi`ï¼æ§çæ¬ç ARMv5 ARMv6 ææ¶ï¼åºæ¬å·²ç»æ·æ±°ï¼
- `mips` ï¼MIPS 32-bit çç²¾ç®æä»¤éæ¶æ RISC - Reduced Instruction Set Computerï¼
- `mips64` ï¼MIPS64 64-bit çç²¾ç®æä»¤éæ¶æ RISC - Reduced Instruction Set Computerï¼

ARMv9 æ¯ 2021 å¹´ææ°æ¶æï¼ARMv8 æ¯ä¸ä¸ªçæ­£æä¹ä¸ç 64-bit æ¶æï¼åæ¶è¿ä¸ªæ¶æåå«å¯ä¸ç Cortex-A32 æä¾äº 32-bit çæ¯æã

ARM ææ¶é½æ¯åä¸å¼å®¹çï¼ä¾å¦å¦æ ARMv8ï¼æ²¡æå¯¹åº arm64-v8a æä»¶å¤¹ï¼åä¼æ§è¡ armeabi-v7a ä¸­ç so å¨æé¾æ¥åºæä»¶ã

é¡¹ç®ä¸­ä½¿ç¨ NDK å°±ä¼çæå¨æåº .so æä»¶ï¼å³ä½¿å¨é¡¹ç®ä¸­åªæ¯ä½¿ç¨ Java è¯­è¨ï¼å¾å¤æåµä¸ï¼ä½ å¯è½å¹¶æ²¡ææè¯å°é¡¹ç®ä¸­ä¾èµçå½æ°åºæèå¼æåºéé¢å·²ç»åµå¥äº .so æä»¶ï¼å¹¶ä¾èµäºä¸åç ABI - Application Binary Interfaceã

ä» AndroidManifest.xml æä»¶å¯ä»¥æ¥è¯¢å°ç¨åºç Activity å¥å£ç±»åï¼ç¶åå®è£éè¦è°è¯ç APK å¹¶æ§è¡ç­ç­å¾è°è¯ï¼

    $ adb install \ctf\q5\KCTF-2.sign.apk
    $ adb shell am start -D -n com.example.hellojni/.HelloJni
    Starting: Intent { cmp=com.example.hellojni/.HelloJni }

ä½¿ç¨ -D åæ°ç®çæ¯è°è¯ç¨åºçå¯å¨è¿ç¨ï¼æ­¤æ¶ Android è®¾å¤ä¸ä¼ç»åºæç¤ºï¼âWaiting For Debuggerâï¼è¡¨ç¤ºæ­£å¨ç­å¾è°è¯å¨çé¾æ¥ã

ä¹å¯ä»¥è®© APP æ­£å¸¸å¯å¨ï¼ç¶å IDA ä¾ç¶å¯ä»¥ attach å°å·²ç»è¿è¡çè¿ç¨ä¸ï¼ä½æ¯è¿æ ·æ æ³è°è¯å° APP å¯å¨é¶æ®µçé»è¾ã

æ³¨æï¼ç´æ¥ä¼ éå° /sdcard å°å¯¼è´ä¸è½ä¿®æ¹å¯æ§è¡æéï¼ä¼ éå° /bin ç®å½å¯è½éå° Read-only é®é¢ã

```sh
# mount -o rw,remount -t yaffs2 /dev/block/mtdblock3
# chmod 777 /system
# mount -o rw,remount -t rootfs /
```

Linux ç³»ç»ç /proc æ¯è¿ç¨æä»¶ç³»ç»ï¼åå«è®¸å¤ç³»ç»ä¿¡æ¯ï¼åæ¶æ¯ä¸ªè¿è¡ä¸­çè¿ç¨ï¼å¨è¿ä¸ªç®å½ä¸æå¯¹åº PID çå­ç®å½ï¼å¶ä¸­ exe å°±æ¯ APK ç¨åºå è½½ç¨åºæä»¶ï¼

```sh
# ps -A|grep "com.example.hellojni"
u0_a85        6670  1695 1580044 154020 ptrace_stop  e950eb39 t com.example.hellojni
# ls -l /proc/6670/exe
lrwxrwxrwx 1 u0_a85 u0_a85 0 2021-05-15 16:55 /proc/6670/exe -> /system/bin/app_process32
```


å¦å¤ä¸ä¸ªè®¾ç½®è¦ç¹æ¯ä¸º AVD è®¾ç½®ç«¯å£è½¬åï¼å³å°ä¸å°è®¾å¤æ¥æ¶å°ç socket è¿æ¥è¯·æ±ï¼è½¬åç»å¦ä¸å°è®¾å¤è¿è¡å¤çã

```sh
# adb forward <local> <remote>
# set up forwarding of host <local> port to emulator/device <remote> port
adb forward tcp:23946 tcp:23946
```

è¿å¯ä»¥è½¬åå° JDWP - Java Debug Wire Protocol ç«¯å£ï¼åå©ç¨ JDB è°è¯ Java ä»£ç ï¼

```js
$ adb jdwp
14342
$ adb forward tcp:7777 jdwp:14342
$ { echo "suspend"; cat; } | jdb -attach localhost:7777
```

ç¶åæå¼ IDAï¼ä»è°è¯èåä¸­éæ© Debugger -> Attach -> Remote ARM Linux/Android debugger å¹¶ä¸è®¾ç½® localhost ä¸»æºï¼ç«¯å£é»è®¤ä¸º 23946ï¼å¯ç å android_server è¿è¡æ¶æå®çä¸è´ï¼æèçç©ºå¦ææ²¡æè®¾ç½®å¯ç ã

ç¶åä»è¿ç¨åè¡¨ä¸­éæ©éè¦è°è¯ç Android è¿ç¨ï¼å¦åé¢æ¥è¯¢å°ç com.example.hellojniã

å¦æåä» IDA å è½½ APKï¼åè¿æ¥è°è¯æå¡ï¼ä¼åºç°éè¯¯ä¿¡æ¯ï¼å¥½å Dalvik Debugger ä¸æ¯æ AVD è°è¯ä¸æ ·ï¼å¥æªçæ¯ç«¯å£éæ©äº 23915ï¼

> ADB error: listener 'tcp:23915' not found
> TCP-connection to adb server
> Target Android version 9, SDK version of the framework 28 (ART)

å¦æ android_server è®¾ç½®çå¬ 23915 ç«¯å£ï¼å¹¶è®¾ç½® adb forwardï¼è¿æ¯åºéï¼è°è¯å¨æ¾ä¸å°ç¸åºè¿ç¨ï¼é¾éæ¯åè°è¯ç¨åºé®é¢ï¼

> The debugger could not find running processes corresponding to this database

Android ææä½¿ç¨ä¸­ç TCP ç«¯å£å¯ä»¥æ¥è¯¢ /proc/net/tcp æä»¶ï¼åå­è¿å¶ç«¯å£å·æ¯ 5D8Aï¼åè¿å¶ä¸º 23946ï¼å¯ä»¥ä½¿ç¨å½ä»¤è½¬æ¢ echo $((0x5d8a))ï¼

```sh
$ adb root
restarting adbd as root

$ adb shell cat /proc/net/tcp
  sl  local_address rem_address   st tx_queue rx_queue tr tm->when retrnsmt   uid  timeout inode

   0: 00000000:5D8A 00000000:0000 0A 00000000:00000000 00:00000000 00000000     0        0 48801 1 0000000000000000 100 0 0 10 0
   1: 0100007F:13AD 00000000:0000 0A 00000000:00000000 00:00000000 00000000     0        0 38860 1 0000000000000000 100 0 0 10 0
   2: 02E8A8C0:881C 0302000A:0355 06 00000000:00000000 03:0000113D 00000000     0        0 0 3 0000000000000000
```

ç¸å³å·¥å·é¾æ¥ï¼

- å·¥å·ä»ç» https://mobile-security.gitbook.io/mobile-security-testing-guide/appendix/0x08-testing-tools
- Apktool v2.5.0 https://github.com/iBotPeaches/Apktool
- JADX GUI 1.2.0 https://github.com/skylot/jadx/releases/tag/v1.2.0

ä¸è½½ JADX æ³¨æï¼éè¦ 64-bit JREï¼å¦ææ²¡æå®è£å°±ä¸è½½å¸¦ JRE çåç¼©åã


## â¡ DBI - Dynamic Binary Instrumentation
- Frida - Dynamic instrumentation toolkit https://frida.re/
- Intel Pin - A Dynamic Binary Instrumentation Tool https://software.intel.com/content/www/us/en/develop/articles/pin-a-dynamic-binary-instrumentation-tool.html

Frida æ¡æ¶å¯ç¨äºä»£ç ææ¡©ï¼å®åä¸ºä¸¤é¨åï¼

- è¿è¡å¨ç³»ç»ä¸çäº¤äºå·¥å· frida CLIï¼
- è¿è¡å¨ç®æ æºå¨ä¸çä»£ç æ³¨å¥å·¥å· frida-serverã

ææ¡©ææ¯æ¯æå°é¢å¤çä»£ç æ³¨å¥ç¨åºä¸­ä»¥æ¶éè¿è¡æ¶çä¿¡æ¯ï¼å¯åä¸ºä¸¤ç§ï¼

- æºä»£ç ææ¡© Source Code Instrumentation(SCI) å¨ç¨åºæºä»£ç ä¸­æ³¨å¥é¢å¤ä»£ç ã
- äºè¿å¶ææ¡© Binary Instrumentation å¨äºè¿å¶å¯æ§è¡æä»¶ä¸­æ³¨å¥é¢å¤ä»£ç ï¼ååéæåå¨æä¸¤ç§ã
    - éæäºè¿å¶ææ¡© Static Binary Instrumentation(SBI) å¨å¯æ§è¡ç¨åºæä»¶ä¸­æå¥é¢å¤çä»£ç åæ°æ®ã
    - å¨æäºè¿å¶ææ¡© Dynamic Binary Instrumentation(DBI) å¨ç¨åºè¿è¡æ¶å®æ¶å°æå¥é¢å¤ä»£ç åæ°æ®ã

ä½¿ç¨ DBI åäºä»ä¹å¢ï¼

- 1ï¼è®¿é®è¿ç¨çåå­ï¼
- 2ï¼å¨åºç¨ç¨åºè¿è¡æ¶è¦çä¸äºåè½ï¼
- 3ï¼ä»å¯¼å¥çç±»ä¸­è°ç¨å½æ°ï¼
- 4ï¼å¨å ä¸æ¥æ¾å¯¹è±¡å®ä¾å¹¶ä½¿ç¨è¿äºå¯¹è±¡å®ä¾ï¼
- 5ï¼Hookï¼è·è¸ªåæ¦æªå½æ°ç­ç­ï¼

Frida çæ³¨å¥èæ¬æ¯ JavaScriptï¼èä¸ä½¿ç¨çæ¯ QuickJS èæ¬å¼æï¼å æ­¤å¯ä»¥éè¿èæ¬æ¥æä½è®¾å¤ä¸ç Java ä»£ç çã



## â¡ Smali vs Java
- Dalvik Executable format http://www.dre.vanderbilt.edu/~schmidt/android/android-4.0/dalvik/docs/dex-format.html
- smali-2.5.2.jar https://bitbucket.org/JesusFreke/smali/downloads/
- Dalvik opcodes http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html
- Dalvik and ART - Part I - Dalvik Internals http://newandroidbook.com/files/Andevcon-DEX.pdf
- Dalvik and ART - Part II - Android Runtime http://newandroidbook.com/files/Andevcon-ART.pdf

ART - Android RunTime å¨ Android KitKat (4.4) çæ¬ä¸­å¼å¥çæ°ï¼ç®çæ¯ä¸ºäºåæ DalvÃ­k ç°æçä¸è¶³ï¼ä» DalvÃ­k ä½¿ç¨ç JIT - Just-In-Time ç¼è¯ææ¯è½¬æ¢ä¸º AOT - Ahead-Of-Time å³éæç¼è¯æ¹å¼ã

DalvÃ­k çä¸è¶³ä¹å¤å¨äºï¼

â Virtual machine maintenance is expensive
    - Interpreter/JIT simply aren't efficient as native code
    - Doing JIT all over again on every execution is wasteful
    - Maintenance threads require significantly more CPU cycles
    - CPU cycles translate to slower performance â and shorter battery life
â DalvÃ­k garbage collection frequently causes hangs/pauses
â Virtual machine architecture is 32-bit only
    - Android is following iOS into the 64-bit space

Jesus Freke å¼åç smali/baksmali è¿ä¸¤ä¸ªå·¥å·æ¯ DEX å­èç æ ¼å¼çç¼è¯/åç¼è¯ç¨åºï¼Android ç DalvÃ­k èææºè¿è¡ dex æ ¼å¼çç¨åºæä»¶ï¼å¯¹åºçæ±ç¼è¯­è¨å°±æ¯ Smaliã

ä½¿ç¨ smali-2.5.2.jar å¯ä»¥ç¼è¯ Smali ä¸º Dalvik èææºè¿è¡çç¨åºï¼-o æå®è¾åºç dex æä»¶ï¼ç¶ååæå®ç¼è¯ç smali æä»¶å³å¯ã

    java -jar smali-2.2.1.jar a -o hello.dex SmaliHello.smali 

æ§è¡çæä¸ä¸ª hello.dex æä»¶ï¼è¿éè¦ä½¿ç¨ adb push å°ç¨åºæ¨éå° Android è®¾å¤ä¸ï¼å¹¶ä½¿ç¨ dalvikvm å½ä»¤æ¥è¿è¡ï¼

    adb push hello.dex /data/hello.dex
    adb shell dalvikvm -cp /data/hello.dex com.example.hellojni.HelloJni

Android SDK æä¾ç dx å½ä»¤å¯ä»¥å° Java ç¼è¯åçç±»æä»¶è½¬æ¢æ DEX æ ¼å¼ï¼

```sh
javac -source 1.7 -target 1.7 Helloworld.java
dx --dex --output=Hellworld.dex Helloworld.class
```

Android çç¨åºå è½½ç¨åº app_process åæ°æ ¼å¼å¦ä¸ï¼

    app_process [vm-options] cmd-dir [options] start-class-name [main-options]

è¿ä¸ªå½ä»¤æ²¡ææä¾ helpï¼è¦ä¹æ¥èµæï¼è¦ä¹çæºç äºè§£å¶ä½¿ç¨æ¹æ³ï¼

    vm-options â VM éé¡¹
    cmd-dir âç¶ç®å½ (/system/bin)
    options âè¿è¡çåæ° :
        âzygote
        âstart-system-server
        âapplication (api>=14)
        ânice-name=nice_proc_name (api>=14)
    start-class-name âåå« main æ¹æ³çä¸»ç±»
    main-options âå¯å¨æ¶åä¼ éå°mainæ¹æ³ä¸­çåæ°

å°ç¼è¯å¾å°ç dex(jar) æä»¶ push å° /data/local/tmp æä»¶å¤¹ä¸ï¼ä½¿ç¨ app_process è¿è¡å®ï¼

    app_process -Djava.class.path=Helloworld.dex /data/local/tmp Helloworld


DalvÃ­k èææºç¸æ¯ JVM éåº¦è¦æ´å¿«ï¼å ç¨ç©ºé´æ´å°ã

DalvÃ­k æ¯åºäºå¯å­å¨æ¶æçï¼å¯å­å¨é½æ¯ 32-bitï¼å¦ææ¯ 64-bit ç±»åçæ°æ®åç¨ä¸¤ä¸ªç¸é»ç 32-bit å¯å­å¨è¡¨ç¤ºï¼ä¹å°±æ¯è¯´ï¼å¯¹äº double è¿ç§ç±»åçæ°æ®ï¼éè¦ç¨å°ä¸¤ä¸ªç¸é»çå¯å­å¨æ¥å­å¨ã

DalvÃ­k æå¤æ¯æ 65536 ä¸ªå¯å­å¨ï¼ç¼å· 0 ~ 65535ãä½æ¯ ARM æ¶æç CPU åªå­å¨ 37 ä¸ªå¯å­å¨ï¼æä¹è§£å³å¹éé®é¢ï¼

DalvÃ­k çå¯å­å¨æ¯èæå¯å­å¨ï¼éè¿æ å°çå®çå¯å­å¨æ¥å®ç°ï¼DalvÃ­k ç»´æ¤äºä¸ä¸ªè°ç¨æ ç¨æ¥æ¯æèæå¯å­å¨åçå®å¯å­å¨ç¸äºæ å°çãå¨æ§è¡å·ä½å½æ°æ¶ï¼DalvÃ­k æ ¹æ® `.registers` æä»¤æ¥ç¡®å®è¯¥å½æ°è¦ç¨å°çå¯å­å¨æ°ç®ã

å¯¹äºä¸ä¸ªä½¿ç¨ m ä¸ªå¯å­å¨çæ¹æ³èè¨ï¼åå«å±é¨åéååæ°ä½¿ç¨çå¯å­å¨ï¼å±é¨å¯å­å¨ç¼å·ä½¿ç¨ä» v0 å¼å§ï¼èåæ°å¯å­å¨åä½¿ç¨æåç n ä¸ªå¯å­å¨ï¼åè®¾æ n ä¸ªåæ°ã

ä¸¾ä¸ªä¾å­ï¼åè®¾å®ä¾æ¹æ³ test(String a,String b) ä¸å±ä½¿ç¨äº 5 ä¸ªå¯å­å¨ï¼ç¼å· v0, v1, v2, v3, v4ï¼é£ä¹åæ°å¯å­å¨æ¯è½ä½¿ç¨ v2, v3, v4 è¿ä¸ä¸ªå¯å­å¨ã

å¯å­å¨çå½åæä¸¤ç§ä¸åçå½åæ¹æ³ï¼v åç¼å½åæ³å p åç¼å½åæ³ï¼è¿ä¸¤ç§å½åæ³ä»ä»æ¯å½±åäºå­èç çå¯è¯»æ§ï¼éå¸¸ p åç¼å½åç¨æ¥è¡¨ç¤ºåæ°ï¼åæ°åç§°ä» p0 å¼å§ä¾æ¬¡å¢å¤§ç¼å·ã

Java ç±»åä¸ DalvÃ­k å¯¹åºç±»åè¡¨è¾¾ï¼

    |      DalvÃ­k Types      |          Java Types          |
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

æ°ç»è¿ç§è¡¨è¾¾æç¹æªï¼

    [I      int[] ä¸ç»´æ°ç»
    [[I     int[][] äºç»´æ°ç»
    [Ljava/lang/String  String[] å¯¹è±¡æ°ç»

æ¯å¦ com.ex.Test ç±»å®ä¹äº name å­æ®µå age å­æ®µï¼ç±»ååå«ä¸º Stringãint ç±»åï¼é£ä¹ Smali æè¿°ä¸ºï¼

    Lcom/ex/Test;->name:Ljava/lang/String;
    Lcom/ex/test;->age:I

æ¹æ³è¡¨è¾¾è§åä¹ç±»ä¼¼ï¼éè¿å ä¸ªä¾å­æ¥è¯´æï¼

```java
// Java æ¹æ³
public char charAt(int a){...}
public void getChars(int a,int b, char c[], int d){...}
public boolean equals(Object a){...}

// Davilk æè¿°
Ljava/lang/String;->charAt(I)C
Ljava/lang/String;->getChars(II[CI)V
Ljava/lang/String;->equals(Ljava/lang/Object)Z
```

Smali æä»¶è¯­æ³è¦ç¹ï¼

- `#comments` æ³¨è§£åå®¹ï¼
- `L....;`  å¯¹è±¡ç±»åæ è¯å­ç¬¦ä¸²ï¼æå®ä¸ä¸ªç±»åå½åç©ºé´ï¼
- `.class`  æ è¯ä¸ä¸ªç±»å®ä¹ï¼
- `.super`  æ è¯ç¶ç±»ï¼
- `.source` æºä»£ç æä»¶ï¼
- `.field`  æ è¯ä¸ä¸ªæåå­æ®µï¼
- `.method` æ è¯ä¸ä¸ªæåæ¹æ³ï¼ä½¿ç¨æ¬å·æç¤ºä¼ å¥ä»ä¹åæ°ç±»åï¼ä¾å¦ ([LJava/lang/String;])V è¡¨ç¤ºä¼ éä¸ä¸ªæ°ç»ï¼
- `.param`  æ è¯ä¸ä¸ªä¼ å¥æ¹æ³åçåæ°ï¼å `.paramter` å«ä¹ä¸è´ï¼ä½æ¯è¡¨è¾¾æ ¼å¼ä¸åï¼
- `.filed`  å®ä¹å­æ®µï¼
- `.method` å¯¹åº `.end method`  å®ä¹æ¹æ³ï¼
- `.annotation` å¯¹åº `.end annotation`  å®ä¹æ æ³¨ãæ³¨è§£ï¼
- `.implements` å®ä¹æ¥å£æä»¤
- `.local`  å®ä¹å±é¨åéçä¸ªæ°ï¼
- `.registers`  å®ä¹æ¹æ³åä½¿ç¨å¯å­å¨çæ»æ°ï¼
- `.prologue`   æ¹æ³ä»£ç å¼å§ï¼
- `.line`   æç¤º Java æºæä»¶å¯¹åºçè¡å·ï¼

ææ¡ä»¥ä¸çå­æ®µåæ¹æ³çæè¿°åªæ¯ä¸ä¸ªåºç¡ï¼èæ´å·ä½çé»è¾åéè¦äºè§£ DalvÃ­k æä»¤éï¼DalvÃ­k æ¯åºäºå¯å­å¨æ¶æçï¼å æ­¤æä»¤éå JVM ä¸­çæä»¤éåºå«è¾å¤§ï¼åèæ´ç±»ä¼¼ x86 æ±ç¼æä»¤ï¼è¯¦ç»æä»¤åè DalvÃ­k opcodes ææ¡£ã

Davilk çæ¹æ³è°ç¨æä»¤å JVM çæä»¤ç±»ä¼¼ï¼ç®åå±æäºæ¡æä»¤ï¼

    |                    æä»¤                   |                        è¯´æ                       |
    |-------------------------------------------|---------------------------------------------------|
    | invoke-direct{parameters},methodtocall    | è°ç¨å®ä¾ç private æ¹æ³ï¼ç¬¬ä¸ä¸ªåæ°ä¸º this æéã |
    | invoke-static{parameters},methodtocall    | è°ç¨å®ä¾çéææ¹æ³                                |
    | invoke-super{parameters},methodtocall     | è°ç¨ç¶ç±»æ¹æ³                                      |
    | invoke-virtual{parameters},methodtocall   | è°ç¨å®ä¾ç publicãprotected ä¿®é¥°ä¿®é¥°çæ¹æ³       |
    | invoke-interface{parameters},methodtocall | è°ç¨æ¥å£æ¹æ³                                      |

æ¯å¦ï¼invoke-virtual {v3,v1,v4},Test2.method5:(II)V æä»¤ä¸­ç v3 è¡¨ç¤º Test2 å®ä¾å¯¹è±¡ï¼è v1, v4 ææ¯æ¹æ³åæ°ã

è¿äºç§æä»¤æ¯åºæ¬æä»¤ï¼é¤æ­¤ä¹å¤ï¼è¿æååå½¢å¼ï¼

- invoke-direct/range
- invoke-static/range
- invoke-super/range
- invoke-virtual/range
- invoke-interface/range

ååé¢çæä»¤å¯ä¸çåºå«ï¼å°±æ¯å¸¦ range å½¢å¼çæä»¤å¯ä»¥è®¾ç½®æ¹æ³åæ°å¯ä»¥ä½¿ç¨çå¯å­å¨çèå´ï¼å¨åæ°å¤äºåä¸ªæ¶åä½¿ç¨ã

æ³¨æï¼å¦æè¦è·åæ¹æ³æ§è¡æè¿åå¼ï¼éè¦éè¿ move-result æä»¤è·åæ§è¡ç»æã

æ°æ®è¿ç®ä¸»è¦åæ¬ç®æ°è¿ç®åé»è¾è¿ç®ä¸¤ç±»ï¼æ¯ä¸ç±»æä»¤é½å¸¦ææ°æ®ç±»ååç¼ã

ä»¥ä¸æä»¤ä½¿ç¨ type åç¼æ¿ä»£å·ä½çæ°æ®ç±»åï¼å¯ä»¥æ¯ int, float, long, double ç­ã

ç®æ¯è¿ç®æä»¤

    |   æä»¤   |   è¯´æ   |
    |----------|----------|
    | add-type | å æ³æä»¤ |
    | sub-type | åæ³æä»¤ |
    | mul-type | ä¹æ³æä»¤ |
    | div-type | é¤æ³æä»¤ |
    | rem-type | æ±ä½     |

é»è¾è¿ç®æä»¤

    |   æä»¤   |     è¯´æ     |
    |----------|--------------|
    | and-type | ä¸è¿ç®æä»¤   |
    | or-type  | æè¿ç®æä»¤   |
    | xor-type | å¼æåç®æä»¤ |

ä½ç§»æä»¤

    |    æä»¤   |      è¯´æ      |
    |-----------|----------------|
    | shl-type  | æç¬¦å·å·¦ç§»æä»¤ |
    | shr-type  | æç¬¦å·å³ç§»æä»¤ |
    | ushr-type | æ ç¬¦å·å³ç§»æä»¤ |

æ¯è¾æä»¤åºæ¬æ ¼å¼æ ¼å¼æ 3 ä¸ªå¯å­å¨ï¼ç¬¬ä¸ä¸ªç¨æ¥å­æ¾æ¯è¾ç»æï¼æä¸ç§æ¯è¾æä»¤ï¼

- cmpl è¡¨ç¤º compare lessï¼
- cmpg è¡¨ç¤º compare greaterï¼
- cmp è¡¨ç¤º compareï¼ç­ä»· cmpg çæ¯è¾é»è¾ã

å·ä½ç Davilk æ¯è¾æä»¤:

- 2d: cmpl-float (lt bias)
- 2e: cmpg-float (gt bias)
- 2f: cmpl-double (lt bias)
- 30: cmpg-double (gt bias)
- 31: cmp-long

æµ®ç¹æ¯è¾è¿ç®æä»¤ååºç bias è¡¨ç¤ºå¦ä½å¤ç NaN å¼çæ¯è¾ï¼gt bias è¡¨ç¤º NaN å¼æ¯è¾è¿å 1ï¼lt bias è¡¨ç¤º NaN å¼æ¯è¾è¿å -1ã

ä¸¾ä¾è¯´æï¼ä½¿ç¨ cmpg float æä»¤æ£æ¥æµ®ç¹ x < yï¼è¿å -1 è¡¨ç¤ºæç«ï¼æ¯è¾ç»æä¸º trueï¼å¶å®å¼ä¸º falseï¼æ è®ºæ¯æ°å¼çæ¯è¾ç»æç¸ç­è¿å 0ï¼è¿æ¯å ä¸º NaN å¼ã


å¨ Davilk æä¾ return æä»¤æ¥è¿åè¿è¡ç»æï¼

    |       æä»¤       |              è¯´æ              |
    |------------------|--------------------------------|
    | return-void      | æ è¿å                         |
    | return v0        | è¿åä¸ä¸ª 32-bit éå¯¹è±¡ç±»åçå¼ |
    | return-wide v0   | è¿åä¸ä¸ª 64-bit éå¯¹è±¡ç±»åçå¼ |
    | return-object v0 | è¿åä¸ä¸ªå¯¹è±¡ç±»åçå¼ç¨         |

é¨å Dalvik Opcode åèï¼

    | Op |       Opcode name        |                          Explanation                           |                Example                 |
    |----|--------------------------|----------------------------------------------------------------|----------------------------------------|
    | 00 | nop                      | æ æä½ No operation                                            | 0000 - nop                             |
    | 01 | move vx,vy               | æ°æ®ä» vy ç§»å° vxï¼ä¸¤ä¸ªå¯å­å¨å¿éä¸ºå 256 ä¸ªã                 | 0110 - move v0, v1                     |
    | 02 | move/from16 vx,vy        | æ°æ®ä» vy ç§»å° vxï¼è¦æ± vx å¯å­å¨å¿éä¸ºå 256 ä¸ªã             | 0200 1900 - move/from16 v0, v25        |
    | 03 | move/16                  |                                                                |                                        |
    | 04 | move-wide                |                                                                |                                        |
    | 05 | move-wide/from16 vx,vy   | long/double æ°æ®ä» vy ç§»å° vxï¼è¦æ± vx å¯å­å¨ä¸ºå 256 ä¸ªã     | 0516 0000 - move-wide/from16 v22, v0   |
    | 06 | move-wide/16             |                                                                |                                        |
    | 07 | move-object vx,vy        | å¯¹è±¡å¼ç¨ä» vy ç§»å° vxã                                        | 0781 - move-object v1, v8              |
    | 08 | move-object/from16 vx,vy | å¯¹è±¡å¼ç¨ä» vy ç§»å° vxï¼è¦æ± vx å¯å¯»åå 256 ä¸ªå¯å­å¨ã         | 0801 1500 - move-object/from16 v1, v21 |
    | 09 | move-object/16           |                                                                |                                        |
    | 0A | move-result vx           | å°ä¸ä¸æ­¥æä½çç»æç§»å° vxã                                    | 0A00 - move-result v0                  |
    | 0B | move-result-wide vx      | å°æ¹æ³è¿åç long/double æ°æ®ç§»å° vx,vx+1 ä¸¤ä¸ªç¸é»çå¯å­å¨ä¸­ã | 0B02 - move-result-wide v2             |
    | 0C | move-result-object vx    | å°æ¹æ³è¿åçå¯¹è±¡å¼ç¨ç§»å¨å° vxã                                | 0C00 - move-result-object v0           |
    | 0D | move-exception vx        | å°æ¹æ³æåºçå¼å¸¸å¯¹è±¡çå¼ç¨ç§»å° vx å¯å­å¨ã                     | 0D19 - move-exception v25              |

    | Op |       Opcode name       |              Explanation               |                              Example                              |
    |----|-------------------------|----------------------------------------|-------------------------------------------------------------------|
    | 22 | new-instance vx,type    | å®ä¾åå¯¹è±¡å¹¶å°å¼ç¨ç§»å° vxã            | 2200 1500 - new-instance v0, java.io.FileInputStream // type@0015 |
    | 23 | new-array vx,vy,type_id | å®ä¾åæ°ç»å¹¶å°å¼ç¨ç§»å° vxï¼vy ä¸ºå¤§å°ã | 2312 2500 - new-array v2, v1, char[] // type@0025                 |
    | 24 | filled-new-array {parameters},type_id | ç¨åæ°å¡«åæ°ç»ï¼éå move æä»¤ä½¿ç¨ã | 2420 530D 0000 - filled-new-array {v0,v0},[I // type@0D53 |
    | 25 | filled-new-array-range {vx..vy},type_id | ä½¿ç¨èå´åæ°å¡«åæ°ç»ï¼éå move æä»¤ä½¿ç¨ã | 2503 0600 1300 - filled-new-array/range {v19..v21}, [B // type@0006 |
    | 26 | fill-array-data vx,array_data_offset | ä½¿ç¨éææ°æ®å¡«åæ°ç» vxï¼æ°æ®ä»å½åæä»¤ä½å°å¾åæå®åç§»éã | 2606 2500 0000 - fill-array-data v6, 00e6 // +0025 |

éææ°æ®å¡«åæ°ç»æä»¤ fill-array-data çæ°æ®æ ¼å¼å¦ä¸ï¼

    0003 // Table type: static array data
    0400 // Byte per array element (in this case, 4 byte integers)
    0300 0000 // Number of elements in the table
    0100 0000  // Element #0: integer 1
    0200 0000 // Element #1: integer 2
    0300 0000 // Element #2: integer3

å®ä¾åæä»¤ä¸­åç¼ç type@0015 è¡¨ç¤ºç±»åå¯¹åº Type Table ä¸­ç #15H ä½ç½®çè®°å½æ¡ç®ã


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
            str = "nameä¸ºç©º";
        } else if (input2 == null || input2.isEmpty()) {
            str = "serialä¸ºç©º";
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

## â¡ Keyboard Map

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

- `F2`  å½åè¡åæ¢æ­ç¹
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
- `Alt_1â¦N` Select tab
- `Ctrl_F4` Close current view
- `Alt_X`   Exit
- `Shift_F2`IDC Command

Edit (Data Types â etc) å¿«æ·é®ï¼

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

Operand Type å¿«æ·é®ï¼

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

Comments å¿«æ·é®ï¼

- `:`   Enter comment
- `;`   Enter repeatable comment
- `Ins` Enter anterior lines
- `Shift_Ins`   Enter posterior lines
- `Shift_F1`    Insert predefined comment

Segments å¿«æ·é®ï¼

- `Alt_S`   Edit segment   
- `Alt_G`   Change segment register value

Structs å¿«æ·é®ï¼

- `Alt_Q`   Struct var   
- `Ctrl_Z`  Force zero offset field  
- `Alt_Y`   Select union member

Functions å¿«æ·é®ï¼

- `P`    Create function
- `Alt_P`  Edit function   
- `E`      Set function end
- `Ctrl_K` Stack variables 
- `Alt_K`  Change stack pointer    
- `V`    Rename register
- `Y`  Set function type
- `N`  Rename



## â¡ User & Kernel space 
- Kernel Documentation https://www.kernel.org/doc/
- Understanding the Linux Virtual Memory Manager https://www.kernel.org/doc/gorman/html/understand/
- Kernel Virtual Address Layout https://codemachine.com/articles/x64_kernel_virtual_address_space_layout.html

ç°ä»£ CPU ä»ç¡¬ä»¶ä¸æä¾ Ring 0 - 3 è± 4 ä¸ªç¹æçº§ï¼ä¸è¬æä½ç³»ç»åªä½¿ç¨ææ ¸å¿ç Ring 0 åç¨æ·ç¹æ Ring 3ï¼åæ¶å°åå­ååæ User space ä¸ Kernel space ä¸¤å¤§ç©ºé´ï¼è¿ä½¿å¾ç¨æ·ç¨åºä¸æä½ç³»ç»çç¹æç®¡çæ´æ¸æ°ï¼ç¨åºè¿è¡èµ·æ¥ä¹æ´å®å¨ï¼ä¸ä¼å ä¸ºç¨æ·ç¨åºçé®é¢å¯¼è´ç³»ç»éä¹±ã

Linux æä½ç³»ç»èè¨ï¼åæ ¸ç©ºé´è¿è¡å¨ç©çåå­çæé«ä½ç½®ç 1GB ç©ºé´ãä»¥ 32-bit æºå¨ä¸ºä¾ï¼æé«ç 1G ç©ºé´çèæå°å `[0xC0000000, 0xFFFFFFFF]` ç±åæ ¸ä½¿ç¨ï¼èè¾ä½ç 3G ç©ºé´èæå°å `[0x00000000, 0xBFFFFFFF]` ç±ç¨æ·è¿ç¨ä½¿ç¨ï¼ç§°ä¸ºç¨æ·ç©ºé´ãå¨ Linux ä¸ï¼å¦æå¯æ§è¡æä»¶ä¾èµå¶å®å±äº«åºï¼é£ä¹ç³»ç»å°±ä¼ä¸ºå®å¨ä» 0x40000000 å¼å§çå°ååéç¸åºçç©ºé´ï¼å¹¶å°å±äº«åºè½½å¥è¯¥ç©ºé´ã

Windows åé»è®¤å°é«å°åç 2GB ç©ºé´ `[0x80000000, 0xFFFFFFFF]` åéç»åæ ¸ï¼ä¹å¯ä»¥éç½® 1GB ç©ºé´ã

æä»¥ï¼å¨éåè°è¯ç¨åºè¿ç¨ï¼äºè§è¿äºæä½ç³»ç»çåºæ¬ç¹ç¹æ¯éå¸¸ææå¯¼æä¹çã

Windows æ¯æ··ååæ ¸ï¼åæ ¸æä»¶ï¼å³ ntoskrnl.exe å¾ï¼ç½ä¸ææ³é²ç WIN2K/NT4 çæºç ï¼åæ¶è¿æå¼å®¹ Windows åæ ¸ API çå¼æºç ReactOS çæºç ï¼å¯ä»¥çå°å³ä½¿æ¯ Windows çåæ ¸ï¼ä»£ç è§æ¨¡ä¹æ¯éå¸¸å·¨å¤§çã

Linux æ¯å®åæ ¸ï¼Monolithic Kernelï¼åæ ¸æ¯ä¸ä¸ªå®æ´çå¯æ§è¡ç¨åºï¼ä¸æ¥ææé«çæéãLinux æ¬èº«å¯ä»¥å¨åæ ¸ééæå¤§éé©±å¨ï¼ç¬¼ç»çè®²ï¼ntosknrl è¯å®æ¯ Linux åæ ¸è¦å°å¾å¤ã

å¨æ¡é¢é¢å Windows çé©±å¨å¿ç¶æ¯æ¯ Linux è¦å¤çï¼åºç¨ç¨åºä¹æ´å¤ï¼ä½éæ¡é¢é¢åï¼Linux çé©±å¨ä¹ä¸å°ãè Windows è½æåï¼è·åæ ¸å³ç³»ä¸å¤§ï¼æäººå¼åé©±å¨ï¼æäººå¼åçæç¯å¢ï¼è¿æ¯åæ ¸éè¦å¤äºã

Linux Memory model


## â¡ IDC èæ¬
- Disassembling Code IDA Pro and SoftICE by Vlad Pirogov
- IDA ä¸­çIDCèæ¬ç¼åç¬è®° https://www.cnblogs.com/LyShark/p/13100048.html

IDA æä¾ IDC èæ¬æ¯æï¼è¯­æ³ç±»ä¼¼ C è¯­è¨ï¼åè´¹çæ¬ä¹æ¯æ IDCï¼Shift_F2 å¯è°åºèæ¬ç¼è¾å¨ï¼ä½ Python æ¥å£åªæ IDA Pro æ¯æã

åç½®å½æ°åèæå Alphabetical list of IDC functionsã

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

å¦æä¸ä¸ªåéæ²¡æå®ä¹ï¼IDA ä¼å°è¯ä»åæ±ç¼ä¸­å¼ç¨ç¸åçç¬¦å·ï¼

    .data:00413060 errtable        dd 1   ; oscode
    .data:00413060                 dd 16h ; errnocode

    msg("address is: %x\n", _errtable); // 413060
    msg("address is: %x\n", _errtable.errnocode); // 413064

IDC è¯­å¥ï¼

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

IDC ä¸æ¯æ goto æ switch è¿æ ·çè¯­å¥ã

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

IDC å­ç¬¦ä¸²åçï¼

    str[i1:i2] - substring from i1 to i2. i2 is excluded
    str[idx]   - one character substring at 'idx', it is equivalent to str[idx:idx+1]
    str[:idx]  - substring from the beginning of the string to idx, this is equivalent to str[0:idx]
    str[idx:]  - substring from idx to the end of the string, this is equivalent to str[idx:0x7fffffff]

ä¾å¦ï¼æ¿æ¢å¶ä¸­ä¸¤ä¸ªå­ç¬¦ä¸º "abc"ï¼ 

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

# ð© junk-code è±æä»¤
- çéª.TSRC 2017CTF ç§å­£èµ ç¬¬äºé¢ ctf2017_Fpc https://ctf.pediy.com/game-fight-47.htm
- çéª TSRC 2017CTF ç§å­£èµ ç¬¬ 2 é¢åºé¢æè·¯ https://bbs.pediy.com/thread-222404.htm
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

è±æä»¤æ¯ä»£ç ä¸­æå¥ä¸äºå·æå¹²æ°æ§çæ°æ®æçå®ç CPU æä»¤ï¼ä¼å¾å¹²æ°éåå·¥å·æäººåå¯¹ææä»£ç çè¯å«ã

å¨çå®ä»£ç ä¸­æå¥ä¸äºåå¾ä»£ç ï¼åæ¶è¿ä¿è¯åæç¨åºçæ­£ç¡®æ§è¡ï¼èç¨åºæ æ³å¾å¥½å°åç¼è¯, é¾ä»¥çè§£ç¨åºåå®¹ï¼è¾¾å°æ··æ·è§å¬çææã

è±æä»¤å¯ä»¥æ§è¡ï¼ä¹å¯ä»¥ä¸æ§è¡ï¼ä½æ§è¡è¿äº junk-code å¯¹äºéåå·¥ç¨æ²¡æä»»ä½æä¹ï¼åèå¢å å·¥ä½éãç±äºè¿æ­¤æ æä»£ç ä¼è¢«åæ±ç¼å¨æ­£å¸¸è¯å«ï¼æä»¥å¢å äºéåå·¥ç¨çå·¥ä½éã

è±æä»¤åæä»¤è¨èæ¯ç¸åçåéåç­ç¥ï¼å°±æ¯å¢å éåçå·¥ä½éåé¾åº¦ï¼ä»èè¾¾å°é»æ­¢éåè¡ä¸ºãæéå¯¹æ§çè±æä»¤è¿å¯ä»¥è®©ç¹å®çéåå·¥å·åºç°å¼å¸¸ï¼ä¸è½æ­£ç¡®å¾å°åæ±ç¼ä»£ç ã

å¯æ§è¡è±æä»¤ä¼å¨éææå¨æåæçè¿ç¨äº§çå¹²æ°ï¼ä¸å¯æ§è¡è±æä»¤åå©ç¨åæ±ç¼å¨çº¿æ§æ«æç®æ³çç¼ºé·ä½¿å¾éæåæçæ¶åä¼çå°ä¸äºéè¯¯çä»£ç ã

è±æä»¤å¯¹ x86 è¿ç§ CSIC ç¹å«ææï¼ç±äºæä»¤çé¿åº¦ä¸ç»ä¸ï¼éäºä¸ä¸ªå­èåé¢å¯è½å¨éãå¦æåæ±ç¼ç¨åºä¹ä¸å¤å®ç¾ï¼å°±ä¼ç»å¸¸ç¢°å°æ æ³åæ±ç¼çæºå¨æä»¤ã

çæ¯ææ¨é©¬è¿å¯ä»¥éè¿è±æä»¤è¾¾å°åæææï¼åçå°±æ¯éè¿æ·»å è±æä»¤æ¹åäºç¹å¾ç ï¼å¯¼è´é²æ¤è½¯ä»¶ä¸è½è¯å«å¶ç¹æ§èå¤±æã

Visual C++ æä¾äºåµå¥æ±ç¼ä»¥å emit ä¼ªæä»¤ï¼ç±»ä¼¼ db, dwï¼å¯ä»¥å¨å½åä½ç½®ç´æ¥æå¥ä»»æçæ°æ®ï¼è¿æ ·å°±å¯ä»¥ä»»æå°æé è±æä»¤ã

    asm-block:
        __asm assembly-instruction ;opt
        __asm { assembly-instruction-list } ;opt

    assembly-instruction-list:
        assembly-instruction ;opt
        assembly-instruction ; assembly-instruction-list ;opt

ä¾å¦ï¼ä»¥ä¸ç¨åºä½¿ç¨ååµæ±ç¼ï¼å¹¶ä½¿ç¨ emit ç´æ¥æå¥ ADD æä»¤ï¼æ³¨æ x86 ADD æä»¤æ 01 02 03 04 05 ç­å½¢å¼ã

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

ä»¥ä¸æä»¤å¹¶ä¸è½å½±å IDA è¿æ ·çéåå·¥å·ï¼å¾ææ¾ï¼å¨éå½ä¸éç®æ³ä¸ï¼å¯ä»¥è¯å« JMP æä»¤è·³è½¬åçæ¥æ¿èææ¯æä»¤ï¼è JMP åé¢çä¸ä¸å®æ¯æä»¤ï¼

```sh
.text:00401006                 jmp     short loc_40100C
.text:00401006 ; ---------------------------------------------------------------------------
.text:00401008                 dd 4030201h
.text:0040100C ; ---------------------------------------------------------------------------
.text:0040100C
.text:0040100C loc_40100C:                             ; CODE XREF: _main+6âj
.text:0040100C                 mov     eax, 12345678h
```

ä¸é¢ä¸¤ä¸ªæµè¯ç¨åºå¯ä»¥ä½¿ç¨ä»¥ä¸ makefile èæ¬ï¼æ§è¡ nmake junk-code-01 æ make junk-code-02 å½ä»¤ç¼è¯ï¼

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



# ð© BSF BSR Bit Scan
- 32/64-BIT 80 x 86 Assembly Language Architecture by James Leiterman - Chapter 5: Bit Wrangling

æ¯ç¹ä½æ«ææä»¤ï¼æ¾æºæä½æ°é¦ä¸ª 1 åºç°çä½ç½®ï¼å°ä½ç½®ç´¢å¼å·èµå¼ç»ç®æ æä½æ°ï¼

- BSF(Bit Scan Forward) ä½ -> é«
- BSR(Bit Scan Reverse) é« -> ä½

å½±åæ å¿:

- ZERO = source == 0?  1 : 0;

ç¤ºèï¼æ«ææºæä½æ° 1 çåºç°çæ¯ç¹ä½ï¼ç´¢å¼ä»¥ 1 ä¸ºèµ·ç¹ï¼

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

ä»¥ä¸ä»£ç ä¸­ BSF å¯è½ä¼ç´æ¥å° EAX å½ä½æºæä½æ°ï¼å¹¶ä¸åæ¶åå½ä½ç®æ æä½æ°ï¼æä»¥è¿æ ·ä¼æ¹å %1 å³èå¯å­å¨çæ°æ®ï¼åç»­æä»¤ä¸è½éè¿å®æ¥è·åæºæä½æ°ã

å¼å¾è§å¯çæ¯æ°ç»çåå§åä¸ printf åæ°çå¥æ å¤çæ¯éè¿ mov esp å½¢å¼å®ç°çã 

```
.text:00401659 ; int __cdecl main(int argc, const char **argv, const char **envp)
.text:00401659                 public _main
.text:00401659 _main           proc near               ; CODE XREF: ___tmainCRTStartup+25Dâp
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
.text:0040169F loc_40169F:                             ; CODE XREF: _main+95âj
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
.text:004016C1 loc_4016C1:                             ; CODE XREF: _main+65âj
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
.text:004016F0 loc_4016F0:                             ; CODE XREF: _main+4Bâj
.text:004016F0                 mov     eax, 0
.text:004016F5                 leave
.text:004016F6                 retn
.text:004016F6 ; } // starts at 401659
.text:004016F6 _main           endp
```

IDA æ è®°ä¸ä¸ªå½æ° `__unwind` å­æ ·ï¼`__try` å `__except` è¿æ ·çä»£ç æ®µç»åæ¯å¼å¸¸å¤çå




# ð© GDB Guide
- [GDB: The GNU Project Debugger](https://www.gnu.org/software/gdb/documentation/)
- [GDB Text User Interface](https://sourceware.org/gdb/onlinedocs/gdb/TUI.html)
- [A Sample GDB Session](https://sourceware.org/gdb/current/onlinedocs/gdb/Sample-Session.html)
- [Debugging Remote Programs](https://sourceware.org/gdb/current/onlinedocs/gdb/Remote-Debugging.html)
- [The Art of Debugging with GDB, DDD, and Eclipse](https://2lib.org/book/688564/c29aad)
- [Software Development, Design and Coding](https://2lib.org/book/3420268/ea9617)
- [è½¯ä»¶è°è¯çèºæ¯: Linux/Unixå¹³å°è½¯ä»¶è°è¯æå¨èä½](https://2lib.org/book/5640379/db64ac)
- [The Debugger's Handbook](https://2lib.org/book/487559/76e000)
- [How debuggers work](https://eli.thegreenplace.net/2011/01/27/how-debuggers-work-part-2-breakpoints)
- [Computer Science Lab](http://www.computersciencelab.com/index.htm)
- [IntelÂ® 64 and IA-32 Architectures Software Developer Manuals](https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html)
- [[Computer Organization & Systems] This CS107 gdb Reference Card](https://web.stanford.edu/class/cs107/resources/gdb_refcard.pdf)

æ ¹æ®åé¢çæå¯¼æ­å»ºå¥½å¼åç¯å¢ï¼å®è£ GCC ç¼è¯å¥ä»¶è¿æè°è¯å·¥å·åï¼åè¦ææ¡ GDB è°è¯å·¥å·çä½¿ç¨ã

è°è¯ææ¯ï¼é¦åè¦æä¸ä¸ªå·æè°è¯åè½ç¨åºï¼å®åºäºç¼è¯ææ¯ï¼å¯ä»¥å®ç°å°å¯æ§è¡ç¨åºä¸­ä¿å­çäºè¿å¶æä»¤
ååæ±ç¼ææ±ç¼æä»¤ï¼åªè¦ç¥éç¨åºæ¯åºäºä»ä¹ CPU æ¶æï¼å¹¶ä¸å¯æ§è¡ç¨åºæä»¶çæ ¼å¼ç¬¦åè°è¯å¨çè¦æ±ï¼
å°±å¯ä»¥è¢«æ­£ç¡®è§£æã

ç¶åè°è¯å¨éè¿è·åæä½ç³»ç»æä¾ä¸å®çæéï¼å®ç°å¯¹è¢«è°è¯ç¨åºçè¯»åï¼å¹¶æéè¦æå¥è°è¯ç¨çä»£ç ï¼
ä»¥å®ç°è°è¯åè½ã

è¢«è°è¯çç¨åºä¼ä»¥å¦ä¸ä¸ªè¿ç¨è¿è¡ï¼å¹¶ä¸è°è¯å¨éçäºè¢«è°è¯ç¨åºä¹ä¸ï¼ä»¥æ§å¶å¶ä»£ç çæ§è¡ï¼å½è°è¯å¨ 
detach è¿ç¨åï¼å°±æå³è°è¯è¡ä¸ºçç»æã

å·ä½å®ç°å¨ä¸åçç³»ç»ä¸å¯è½ä¼ç¸å·®å¾å¤§ï¼Unix ç±»æä½ç³»ç»ï¼å¦ Linux ä¸ GDB è°è¯å¨å°±ä½¿ç¨ ptrace 
ç³»ç»è°ç¨ï¼éè¿è¿ä¸ªåè½ä¼å¤ä¸ç¸å½å¤æçå·¥å·ï¼è½åè®¸ä¸ä¸ªè¿ç¨è¯»åãæ§å¶å¦ä¸ä¸ªè¿ç¨çè¿è¡ï¼èä¸å¯ä»¥
çè§åæ¸å¥å°è¿ç¨åé¨ã

Windows ç³»ç»ä¸ï¼éè¿ CreateProcess API åå»ºè¢«è°è¯çè¿ç¨ï¼å¹¶è®¾ç½® DEBUG_PROCESS æ 
DEBUG_ONLY_THIS_PROCESS æ è¯ï¼è¿æå¶å®ç¨äºè°è¯ç APIï¼å¦ IsDebuggerPresent å½åè¿ç¨
å¯ä»¥ç¨æ¥å¤æ­æ¯å¦å¤äºè°è¯ç¶æã

é¤äºç³»ç»æä¾ç Debugging API ä¹å¤ï¼CPU ç¡¬ä»¶æ¬èº«æä¾ç¨äºè°è¯çåè½æ´å éè¦ãæ¯å¦ï¼åæ­¥æ§è¡ï¼
å¯¹åº CPU æ å¿å¯å­å¨ç TF - Trap Flagãå½è¯¥æ å¿ç½®ä½ï¼CPU æ¯æ§è¡ä¸æ¡æä»¤å°±ä¼å¼åä¸æ¬¡ä¸­æ­ï¼
CPU ä¼éåèªå¨å° TF æ¸ 0ã

Intel x86 æ¶æ CPU æä¾äº INT3 ä¸­æ­æä»¤ï¼æä»¤ç ä¸º 0xCC åå¥½ä¸ä¸ªå­èï¼å®æå¸¸è§çç¨éæ¯
è§¦åä¸ä¸ªä¸­æ­ãå ä¸ºæ¯éè¿è½¯ä»¶è§¦åçï¼æä»¥ç§°ä¸ºè½¯ä¸­æ­ï¼soft interuptsï¼è¿ç§æä»¤ä¹ç§°ä¸ºé·é±æä»¤ 
trap instructionãå¦å¤éè¿ INT n å¯ä»¥è§¦å 256 ç§é·é±é¨ï¼å 32 ä¸ªç± CPU èªå·±ä¿çã

Intel's Architecture software developer's manual ä¸­æè¯¦ç»çè¯´æï¼INT3 æä»¤ä¸»è¦ç®ç
å°±æ¯ç¨æ¥è°ç¨å¼å¸¸å¤çä¾ç¨çãè¿ä¸ªåå­èå½¢å¼çæä»¤éå¸¸æç¨ï¼å¯ä»¥ç¨æ¥æ¿æ¢ä»»ä½æä»¤çç¬¬ä¸ä¸ªå­èï¼è
ä¸ä¼è¦çå°å¶å®çæä½ç ï¼åªéè¦å¤ä»½ä¸ä¸ªå­èæ°æ®ã

ä»¥ä¸ä¸¤è¡¨åå«äº INT ä¸­æ­æä»¤çåç§å½¢å¼ï¼åä¸è¡¨è§£æäºæä½æ°åç¼ç ï¼Op/En ç®åè¡¨ç¤ºï¼

INT n/INTO/INT3/INT1âCall to Interrupt Procedure

| Opcode | Instruction | Op/En | 64-Bit Mode | Compat/Leg Mode |        Description         |
|--------|-------------|-------|-------------|-----------------|----------------------------|
| CC     | INT3        | ZO    | Valid       | Valid           | äº§çæ­ç¹é·é±                 |
| CD ib  | INT imm8    | I     | Valid       | Valid           | éå¸¦ä¸­æ­åéçè½¯ä¸­æ­          |
| CE     | INTO        | ZO    | Invalid     | Valid           | æº¢åºé·é±ï¼å¦ææº¢åºæ å¿ç½®ä½      |
| F1     | INT1        | ZO    | Valid       | Valid           | Generate debug trap.       |

Instruction Operand Encoding

| Op/En | Operand 1 | Operand 2 | Operand 3 | Operand 4 |
|-------|-----------|-----------|-----------|-----------|
| ZO    | NA        | NA        | NA        | NA        |
| I     | imm8      | NA        | NA N      | A         |

Intel æ¶æçå¼åèæåç°å¨å·²ç»åºçå° 4 å·ï¼

01. Volume 1: æè¿° IntelÂ® 64 å IA-32 æ¶æ CPU çç¼ç¨ç¯å¢ï¼åæ¬ x86 ä½ç³»çåå±åå²ã
02. Volume 2: åå«å®æ´çæä»¤éï¼æè¿°æä»¤æ ¼å¼ï¼æä¾æä»¤åèï¼åä¸º 2Aã2Bã2Cã2D åå·ã
03. Volume 3: åå«å®æ´çç³»ç»ç¼è¯æå¯¼ï¼æè¿° IntelÂ® 64 å IA-32 æ¶æçæä½ç³»ç»ç¯å¢æ¯æï¼
    åæ¬åå­ç®¡çãä¿æ¤ãä»»å¡ç®¡çãä¸­æ­å¼å¸¸å¤çãå¤æ ¸å¿æ¯æãç­éåçµæºç®¡çãè°è¯ãæ§è½çè§ãç³»ç»
    ç®¡çæ¨¡å¼ãVMX èææºæ©å±æä»¤ãIntelÂ® Virtualization Technology (IntelÂ® VT)ã
    IntelÂ® Software Guard Extensions (IntelÂ® SGX)ï¼åæ ·åä¸º 3Aã3Bã3Cã3D åå·ã
04. Volume 4: æè¿°æ¯æ IA-32 å IntelÂ® 64 å¤çå¨æ¶æçç¹å®åå·çå¯å­å¨ã

å®ç½ä¸æä¾åéï¼æåå·æä»¶ PDFï¼æä¸è½½åç¬åå·å± 10 ä¸ªæä»¶ï¼å ä¸ºææ¡£æ¯ä¸æ­ä¿®æ­£çï¼æäºåå®¹å
æ¯åæ¥è¡¥åçï¼æä»¥é¨å Volume 2 çåå·æå¯è½æ¯ Volume 3 çè¦æ°ãå»ºè®®ä½¿ç¨ Four-Volume Set
å³åä¸ªåå·åä¸ªæä»¶ï¼æä¸»é¢ç»ç»æ¹ä¾¿æ¥éãå¦ææ¯å¨éä¸ä¸ªæä»¶ï¼åå®¹å¤ªå¤ä¸å¥½å®ä½ï¼60MB è¶å¤§æä»¶
ä¹ä¸å¥½å¤çã

æ©æçåèèµææ¯ Intel 80386 Programmer's Reference Manual 1986ã


ä½¿ç¨ gdb è°è¯ç¨åºï¼éè¦ä»ä»¥ä¸å ä¸ªæ¹é¢æ¥å¥æï¼

01. Breakpoints æ­ç¹è®©ç¨åºå¨å³é®ä½ç½®ä¸­æ­ï¼å¹¶æä¾æ¶æºè®©è°è¯èè·è¸ªå·ä½ä»£ç ã
02. Watchpoints çè§ç¹è®©è°è¯èè·ç¥å·²è®¾ç½®å³é®åå®¹ï¼æä¾äºä¸ä¸ªå¾å¥½çä¿¡æ¯åé¦éå¾ã
03. Variables and Expressions éè¿åéä¸è¡¨è¾¾å¼è·åæ´ç´è§çç»æã
04. Backtrace è°ç¨æ ååè¿½è¸ªï¼è·åä»£ç è°ç¨è·³è½¬å±æ¬¡å³ç³»ã
05. Stack Frames è°ç¨æ å±ä¿¡æ¯ï¼è·åæå®ä¸ä¸ªè°ç¨å½¢æ frame æ°æ®ã
06. Controlling Execution æä¾äºè®¸å¤å½ä»¤æ§å¶ç¨åºçæ§è¡ï¼å¦åæ­¥ sï¼åæä»¤ siï¼ä¸ä¸æ­¥ n ç­ç­ã
07. Examining Memory åå­æ£æ¥å¯ä»¥å®ç°å¯¹ä»»ææå®å°åãæ°éçåå­åºåè¿è¡åæ±ç¼ãæ°æ®æ£æ¥ï¼
    å¹¶æä¸åçè¿å¶æ ¼å¼æ¾ç¤ºã

GDB è°è¯å½ä»¤åèï¼ä½¿ç¨ help command æ¥è¯¢å½ä»¤å¸®å©ä¿¡æ¯ã

æåºæ¬ç gdb ä½¿ç¨æ¯åèå®æ¹ææ¡£ç Sample Sessionï¼éé¢åå«æåºæ¬è°è¯çé¢çä½¿ç¨ï¼å½ä»¤ä½¿ç¨æ¹æ³
å¯ä»¥éè¿ help command å½ä»¤å»æ¥è¯¢ï¼å¨æ²¡ææ­§ä¹çåæä¸ï¼å½ä»¤å¯ä»¥ç¨çç¥æ¹å¼è¡¨è¾¾ãå¦æ¥è¯¢æ­ç¹å½ä»¤ç
ä½¿ç¨ `help break` æè `h b`ï¼åé¢è¿ç§æ¯çç¥è¡¨è¾¾æ¹å¼ã

å¤§å¤æ°å½ä»¤é½æç¸åºçç®ç­è¡¨è¾¾ï¼å¦ `run` å½ä»¤ç¸åºç­ä»· `r` ç®ç­å½¢å¼ï¼ç´æ¥æåè½¦æ§è¡ä¸æ¬¡çå½ä»¤ï¼
ä½¿ç¨ TAB å¯ä»¥èªå¨å®æå½ä»¤è¾å¥ï¼

01. `run` è¿è¡å½ä»¤ï¼å¯ä»¥ä¼ å¥ä»»æåæ°ï¼å¦ `run 1st 2nd 3rd 4th`ï¼æèå°æ åè¾åºéå®å
    `run > out.txt`ã
02. `Ctrl-c` å¿«æ·é®ç»ææºå¨ï¼ææ­ GDB å½åçæä»¤ï¼å¦æ QEMU æ¨¡æå¤ CPUï¼è¿ä¼ç»æå®ä»¬ã
03. `quit` éåºï¼ç»æè°è¯ã
04. `dir` æ·»å ç®å½å°æºä»£ç æç´¢ç®å½åè¡¨ï¼ç­ä»·å½ä»¤è¡åæ° -directory=directoryã
05. `symbol-file file` åæ¢è°è¯ç¬¦å·æä»¶ï¼å½ GDB éå å° QEMU æ¨¡æå¨æ¶ï¼ä¸ç¥éè¿ç¨çè¾¹çï¼
    å°±éè¦ç¨å®æ¥æå®ä½¿ç¨ä»ä¹ç¬¦å·ï¼å¯¹äºå®éªä¸è¬ä½¿ç¨åæ ¸ç¬¦å·æä»¶ obj/kern/kernelãQEMU å°æ¯ä¸ª
    èæ CPU å½ä½ä¸ä¸ª GDB ççº¿ç¨ï¼å¯ä»¥ä½¿ç¨ææ GDB çº¿ç¨ç¸å³å½ä»¤æ¥æä½ QEMU çèæ CPUã
06. `thread n` GDB å¼ºå¶æ¯å»åªå³æ³¨ä¸ä¸ªçº¿ç¨æ CPUï¼éè¿è¿ä¸ªå½ä»¤å¯ä»¥å³æ³¨ n å·çº¿ç¨ï¼æ°å¼ä» 0 å¼å§ã

è¦ç»æè°è¯ï¼ç´æ¥ä½¿ç¨ `quit` å½ä»¤ãå¦æä¸æ³æ¶å° A debugging session is active è¿æ ·çæç¤ºï¼
åéè¦åéè¿ `detach` å°å·²ç»ææ¥çç¨åºéåºæ¥ã


## ð Text User Interface

*Text User Interface*

ä½¿ç¨å½ä»¤è¡åæ° --tui æ GDB å½ä»¤ `tui enabled` æ¿æ´» Text User Interface çé¢ï¼è¿æ¯ä¸ä¸ª
æ¯çº¯å­ç¬¦çé¢æ´å¥½ç¨çä»¿ GUI çé¢ã

è¦ä½¿ç¨ TUI çé¢åè½ï¼éè¦å¨ç¼è¯ GDB æ¶éç½®å¯ç¨ --enable-tui æ¨¡åç¼è¯éé¡¹ï¼ææ¯æå¼å¯ TUI 
è°è¯çé¢ã

TUI æ¯éå¸¸å¥½ç¨çå­ç¬¦ç¨æ·çé¢ï¼å¯ä»¥ä½¿ç¨å¿«æ·é®ï¼

- C-x 1/2 åæ¢ä¸ºå­çªå£ä¸ªæ°ï¼å¯¹åºææºä»£ç ååæ±ç¼ã
- C-x o åæ¢æ´»å¨çªå£ã
- C-x s åæ¢åæé®æ¨¡å¼ï¼åæ `q` éåº SingleKey æ¨¡å¼ã
    - `c` continue
    - `d` down
    - `f` finish
    - `n` next
    - `o` nexti. The shortcut letter âoâ stands for âstep Overâ.
    - `r` run
    - `s` step
    - `i` stepi. The shortcut letter âiâ stands for âstep Intoâ.
    - `u` up
    - `v` info locals
    - `w` where
- C-L å·æ°å±å¹ã
- `layout src`ï¼æ¾ç¤ºæºä»£ç çªå£
- `layout asm`ï¼æ¾ç¤ºåæ±ç¼çªå£
- `layout regs`ï¼æ¾ç¤ºæºä»£ç /åæ±ç¼åCPUå¯å­å¨çªå£
- `layout split`ï¼æ¾ç¤ºæºä»£ç ååæ±ç¼çªå£

å¯ä»¥è®¾ç½®å­çªå£å¸å±ï¼ä½¿ç¨ info win æ¥è¯¢çªå£ä¿¡æ¯ï¼

    tui new-layout name window weight [window weightâ¦]

    tui new-layout example src 0 asm 1 regs 1 status 1 cmd 1

    tui reg 1


## ð Before debuggging

*Before debuggging* å¨å¼å§è°è¯ç¨åºä¹åï¼éè¦ææ¡ä¸äºåºæ¬ç¥è¯ã

æ³¨æ GCC ç¼è¯æ¶å  -g åæ°äº§ççé¢å¤è°è¯ï¼-O æ¯ä¼åéé¡¹ï¼ä¼åé¤è°è¯ä¿¡æ¯ï¼é¤éæ¯ä½¿ç¨ -Og è°è¯
ä½éªä¼åã

æäºé¢å¤çè°è¯ç¬¦å·è½è®© gdb è°è¯å·¥ä½æ¹ä¾¿å°å¼å±ï¼

- `-g` äº§çå½åæä½ç³»ç»é»è®¤è°è¯ä¿¡æ¯æ ¼å¼ã
- `-ggdb` äº§ç GDB ä¸ç¨çè°åº¦ä¿¡æ¯æ ¼å¼ã
- `-g3` æå®è°è¯ä¿¡æ¯ç­çº§ä¸º Level 3ï¼
    - Level 0 ä¸äº§çè°è¯ä¿¡æ¯ï¼é»è®¤ Level 2ï¼æä»¥ -g0 ä¸ -g ä¸åã
    - Level 1 äº§çæå°çè°è¯ä¿¡æ¯ï¼åæ¬å½æ°åå¤é¨åéçæè¿°ï¼ä»¥åè¡å·è¡¨ï¼ä½æ²¡æå³äºå±é¨åéçä¿¡æ¯ã
    - Level 3 åå«é¢å¤çä¿¡æ¯ï¼å¦ macro å®ä¹ï¼é¨åè°è¯å¨æ¯æ -g3 çæçå®æ©å±ã
- `-gstabs` çæ stabs æ ¼å¼è°è¯ä¿¡æ¯ï¼ä½æ¯ä¸åæ¬ gdb ä¸ç¨çé¢å¤è°è¯ä¿¡æ¯ã
- `-gstabs+` çæ stabs+ æ ¼å¼è°è¯ä¿¡æ¯ï¼å¹¶ä¸åå« gdb ä¸ç¨çé¢å¤è°è¯ä¿¡æ¯ã

GCC è°è¯ä½éªä¼å `-Og` å¨ä¿æ -O0 å¿«éç¼è¯åè¯å¥½è°è¯ä½éªçåæ¶ï¼æä¾åççä¼åçº§å«ï¼ç¦ç¨å¶ä¸­
ä¼å¹²æ°è°è¯çæ å¿ãç¨äºçæå¯è°è¯ä»£ç ï¼åå«å¨ -O0 ä¼åçº§å«ä¸­ï¼æäºè¢«ç¦ç¨çæ¶éè°è¯ä¿¡æ¯çç¼è¯å¨ééã

æäº Symbol Table è°è¯ç¬¦å·è¡¨ä¿¡æ¯åï¼GDB éè¿å®æ¥æ¾å°äºè¿å¶ç¨åºæä»¶ä¸­çæä»¤ä¸æºä»£ç çå³ç³»ã
è¿æ¶ï¼å è½½çæºæä»¶å°±å¯ä»¥å¨è°è¯è¿ç¨ä¸­å¯¹åºèµ·æ¥ãæ¯å¦ï¼ä½¿ç¨ list å½ä»¤å¯ä»¥ååºæå®è¡å·çæºä»£ç åå®¹ã

å¦ææ²¡æè°è¯ç¬¦å·è¡¨ï¼é£ä¹ GDB å°±æ¾ä¸å°ç¨åºä¸­çæä»¤å¯¹åºçä»£ç ï¼å³ä½¿ç¨ææºä»£ç æä»¶ä¹å³èä¸èµ·æ¥ã
ä¹å°±æ æ³ä½¿ç¨åæ­¥æ§è¡ step æåæ­¥è·³è¿ next è¿ç§è°è¯è¿è¡æ¹å¼ï¼å ä¸º GDB æ¾ä¸å°ä»£ç æä»¶å¯¹åºæå¨
è¡çæºä»£ç ï¼æ æ³å¨æ­£ç¡®çä½ç½®è®¾ç½®æ­ç¹ãåªè½æ§è¡æä»¤ï¼stepi æ nextiã

å¦å¤ï¼ç¼è¯åºæ¥çå¯æ§è¡ç¨åºä¸è¬é½ä¼ä¾èµå¨æé¾æ¥åºï¼è³å°ä¾èµæä½ç³»ç»çå¨æåºï¼å¦æä»»ä½ä¾èµåºä¸¢å¤±ï¼
æèä¸ä¼è¢«å®ä½ï¼å°±å¯è½å¯¼è´ç¨åºæ æ³å¯å¨ï¼

    During startup program exited with code 0xc000007b.

å¯ä»¥ä½¿ç¨ ldd æè dumpbin å·¥å·æ¥è¯¢ç¨åºä¸­å¯¼å¥çå¨æåºä¿¡æ¯ï¼

    ldd ELF_Format
    dumpbin -imports COFF_PE

Windows ç³»ç» DLL å è½½æµç¨æç§å¦ä¸é¡ºåºè¿è¡ï¼

- åå­ä¸­å·²ç»å è½½æåå DLLï¼åç´æ¥ä½¿ç¨ï¼
- ç³»ç» KnownDLLs åè¡¨è®°å½ä¸­æåå DLLï¼ç³»ç»ç´æ¥ä½¿ç¨å·²ç¥ DLL çæ·è´ï¼
- å¦æä¾èµå¶ä» DLLï¼ç³»ç»ä¼ä¼åæç§åå­æç´¢å¹¶å è½½è¢«ä¾èµç DLLã

é»è®¤ç³»ç»å®å¨ DLL æç´¢æ¨¡å¼ä¸ï¼æç§å¦ä¸é¡ºåºæç´¢ DLLï¼

- åºç¨ç¨åºç®å½ï¼å¯éè¿ GetModuleFileName è·å¾ï¼ç¨åºå¯å¨åä¸ºåºå®å¼ã
- Windows ç³»ç»ç®å½ï¼ä¸è¬ä¸º C:\Windows\system32
- Windows ç®å½ï¼ä¸è¬ä¸º C:\Windows
- è¿ç¨å½åå·¥ä½ç®å½ï¼éè¿ GetCurrentDirectory å SetCurrentDirectory è¿è¡è¯»åã
- PATH ç¯å¢åéä¸­çç®å½ï¼å¦æå¤ä¸ªç®å½åå«åå DLLï¼åé åçä¼åä½¿ç¨ã


GDB 8.1 å¼å§ï¼æä¾æ°ç starti å½ä»¤ï¼å®è¿è¡ç¨åºå¹¶å¨ç¬¬ä¸æ¡æä»¤å¤ä¸­æ­ã

GDB åæ±ç¼å½ä»¤ disassemble å¨ä¸ç¥éå½æ°è¾¹çï¼å³å½æ°å¨åå­ä¸­çèµ·æ­¢ä½ç½®æ¶ï¼ä¹æ æ³è¿è¡åæ±ç¼ã
è¿æ¶å°±éè¦æå®åå­è¾¹çè¿è¡åæ±ç¼ï¼æèä½¿ç¨åå­æ£æ¥å½ä»¤ Examine æ¥è¿è¡ä»»æä½ç½®çæä»¤æ¥çåè½ï¼
ä¾å¦ `x/5i $pc-1` å°ç¨åºè®¡æ°å¨ææä½ç½®ç 5 æ¡æä»¤æå°åºæ¥ãæ³¨æï¼è¿ç§æä»¤ä¸ä¸å®æ¯ç¨åºçæ­£
è¿è¡çæä»¤ï¼åå­æ£æ¥å½ä»¤æ¯åªå°è¯å°æå®ä½ç½®çåå®¹ææå®çå½¢å¼æå°åºæ¥ã

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

æ¯å¦ï¼ä½¿ç¨ gcc -s å½ä»¤å°±æ¯çææ¸çè¿è°è¯ç¬¦å·çç¨åºæä»¶ï¼Stripped binariesï¼GDB å°±ä¸ç¥é
æä¹å¤çä¸æºä»£ç çå³ç³»äºã

GDB å®æ¹æåæä¸ç« è Debugging Optimized Codeï¼è®²äº Inline Functions å 
Tail Call Frames çä¼åé®é¢ãå¨ä¼åç¼è¯çæåµä¸ï¼åèå½æ°çä»£ç ä¼è¢«æ·è´å°è°ç¨å®çå°æ¹ï¼
èä¸æ¯éè¿ call æä»¤æ¥è°ç¨ãèå°¾è°ç¨æ¯æï¼åæ¬ B å½æ°åå¥½å¨å¶è¿ååè° C å½æ°ï¼å¨æ ä¼åçæåµä¸ï¼
å°±æ¯å¨ä¸æ¡ ret æä»¤ä¹åæ¾ç½®äºä¸ä¸ª call æä»¤æ¥è°ç¨ C å½æ°ãèä¼ååçå°¾è°ç¨å°ä¸ä½¿ç¨ call æä»¤ï¼
èä½¿ç¨ jump æä»¤æ¿ä»£ãèçäºä¸ä¸ª call æä»¤çå¤æè°ç¨ï¼é¿åäºå æ æ°æ®çåºå¥å¤çï¼å
stack frame çå¤çã

åªè½ä»¥åæä»¤çæ¹å¼æ§è¡è°è¯ï¼ä»¥ä¸æ¼ç¤ºå¦ä½åæ­¥æ§è¡è°è¯ï¼å¹¶è®¾ç½®èªå¨æ¾ç¤º $pc å¯å­å¨çå¼ï¼ä»¥ç¡®å®
å½åè¿è¡çä½ç½®ï¼

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

å¨æ²¡ææºä»£ç åè°è¯ç¬¦å·çæåµä¸è°è¯ç¨åºæ¯ä¸ç§å¤æçå·¥ä½ï¼ç§°ä¸ºéåå·¥ç¨ Reverse Engineeringï¼
æ¯ä¸ç§ç»åçé¢åã

å¨éåå·¥ä½ä¸­ï¼éå¸¸ä¼æ Patching Programs çéè¦ï¼ä½¿ç¨ `set write on` æå¼ç¼è¾åè½ï¼
æèè¿è¡æ¶æå¼éè¿å½ä»¤è¡åæ° -write æå¼ã

æ ¹æ®ä¸åçæä½ç³»ç»ï¼å¯æ§è¡ç¨åºæä»¶ä¹æä¸åçæ ¼å¼ï¼Windows ä½¿ç¨ PE æ ¼å¼ï¼è Linux éå¸¸
ä½¿ç¨ ELF æ ¼å¼ãå¯¹åºæ dumpbin å readelf è¿äºå·¥å·æ¥è·åç¨åºæä»¶ä¸­çä¿¡æ¯ãä¹å¯ä»¥ä½¿ç¨
objdump å·¥å·æ¥æ§è¡åæ±ç¼ï¼æ¥è¯¢åç§ä¿¡æ¯ï¼åæ¬æä»¶ä¸­çç¬¦å·è¡¨ï¼æä»¶å¤´ä¿¡æ¯ç­ã

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

è¿äºå·¥å·åªè½è·åå°ä¸ä¸ª Entry pointï¼ä½è¿åªæ¯ä¸ä¸ªèæåå­ç©ºé´çå¥å£å°åãç¨åºçæ­£çå¥å£å°å
éè¦å¨è£å¥åå­åï¼æä¼ç¡®å®ä¸æ¥ãèæå¥å£å°åå¯ä»¥å¨ç¼è¯å¨ä¸­è®¾ç½®ï¼ç¼è¯çæçç¨åºå°±æå¯¹åºçèæ
å¥å£å°åã

å³ä½¿ç¡®å®ä¸æ¥ï¼è¿ä¸ªå¥å£ä¹ä¸æ¯ C/C++ ç¨åºç main å½æ°ï¼èæ¯åºç±»åºçå°åãåºç¡ä»£ç éè¦åä¸äº
ä¸æä½ç³»ç»åè°çå·¥ä½ï¼å®æååè°ç¨ main å½æ°ï¼è¿è¡ç¨åºä¸»ä½ã

æä¸ªçåæ°çå¥½åæ³ï¼å°±æ¯ç´æ¥ä½¿ç¨ææ¯åè¿çå·¥å·ï¼å¦ IDAãVisualGDB ç­ç­ã

å½ç¶ï¼ç¨åºçå¥å£ä¹æ¯æç¹å¾çï¼ä¸åç¼è¯å¨åæä½ç³»ç»ï¼å³å®äºç¨åºå¥å£éè¦æ§è¡ä¸äºåºæçç³»ç»è°ç¨ã
MSVC å¼åçç¨åºï¼å¨è°è¯æ¶æ»æ¯ä» main æ WinMain å½æ°å¼å§ï¼ä½å®ä»¬ä¸æ¯ç¨åºçç¬¬ä¸æ¡æä»¤æ§è¡å¤ã
å¨å®ä»¬è¢«è°ç¨åï¼ç¼è¯å¨çæçåå¤ææ§è¡åå§åçä»£ç å·²ç»åäºå¾å¤äºæã

æä½ç³»ç»å è½½ç¨åºï¼ä¼æ ¹æ®æ§è¡æä»¶åçæ°æ®åéç¸å³èµæºï¼è¯»åæ§è¡æä»¶ä¸­çä»£ç åæ°æ®å°åéçåå­ååï¼
ä¸ºå¶åå¤å¥½è¿è¡ç¯å¢ãç¶åææ¯æ§è¡å¥å£ä»£ç ï¼å¥å£ä»£ç å¶å®å¹¶ä¸æ¯ main æ WinMainï¼éå¸¸æ¯æ ¹æ®ç¼è¯æ¶
è®¾ç½®æä½¿ç¨ç C Runtime åºç¡ä»£ç åºå³å®ã

å¨ Windows å¹³å°è¿è¡çç¨åºå¤§æ¦åä¸ºç±»ï¼æ§å¶å°ç¨åºåçªä½ç¨åºï¼ç»é¾æ¥ç¨åºæå®åæ°åï¼ä¼æ ¹æ®ç¨åº
ç±»åéæ©é¾æ¥çå¥å£å½æ°ï¼

|      é¾æ¥æ¹å¼      |    ç¨åºç±»å    | C Runtime åºå¥å£ç¹ |    å¥å£å½æ°    |
|--------------------|----------------|--------------------|----------------|
| /SUBSYSTEM:CONSOLE | æ§å¶å°ç¨åº     | mainCRTStartup     | main           |
| /SUBSYSTEM:CONSOLE | æ§å¶å°ç¨åº     | wmainCRTStartup    | wmain          |
| /SUBSYSTEM:WINDOWS | GUI ç¨åº       | WinMainCRTStartup  | WinMain        |
| /SUBSYSTEM:WINDOWS | GUI ç¨åº       | wWinMainCRTStartup | wWinMain       |
| /DLL               | DLL å¨æé¾æ¥åº | _DllMainCRTStartup | DllMain [å¯é] |

MSVC ç¼è¯å¨å¯ä»¥æå® /NOENTRY åå»ºæ²¡æå¥å£ççº¯èµæº DLLã

ä»¥ mainCRTStartup ä¸ºä¾ï¼ç¼è¯å¨å° CRT åå§ååç»æ­¢çåºä»£ç æå¥å°ç¨åºä¸­ï¼å¯¹ C Runtime åº
åå§åï¼åå§åçä¸ä¸ªéè¦ä»»å¡å°±æ¯åå§å CRT å ï¼å¨æ­¤ä¹åä¸è½ä½¿ç¨ CRT çåéåå­å½æ°ãå®æ
åå§ååï¼åè°ç¨ç¨åºå¥å£å½æ°æ§è¡ç¨åºã

è¿è¡åºåå«äº C Runtime åºå¥å£ç¹ä»£ç ï¼è®¾ç½®é¾æ¥éé¡¹åï¼é¾æ¥éè¦å¶ä¸­å¯¹åºçä¸ä¸ªåºæä»¶ï¼å¦åå°±ä¼
åºç°é¾æ¥ç¨åºæ¾ä¸å°å¥å£çéè¯¯ãä¸è¬æ¥è¯´ï¼ç¯å¢åéæ­£ç¡®è®¾ç½®ï¼MSVC ä¼èªå¨æ ¹æ®ç¼è¯ãé¾æ¥åæ°æ­£ç¡®éæ©
C Runtime è¿è¡åºãä½æ¯ï¼ä½¿ç¨å½ä»¤è¡çç¼è¯æ¹å¼ææ¶ä¸è½æ­£ç¡®ä½¿ç¨è¿è¡åºï¼è¿å°±éè¦æå¨æå®å¶ä¸­ä¸ä¸ªã

MSVC 6.0 ç¨åºæ§è¡ main å½æ°ä¹åè¦åè°ç¨çå½æ°å¦ä¸ï¼

- *GetVersion()*
- *_heap_init()*
- *GetCommandLineA()*
- *_crtGetEnvironmentStringsA()*
- *_setargv()*
- *_setenvp()*
- *_cinit()*

è¿äºå½æ°è°ç¨ç»æåå°±ä¼è°ç¨mainå½æ°ãæ ¹æ®mainå½æ°è°ç¨çç¹å¾ï¼ä¼å°3ä¸ªåæ°å
å¥æ åä½ä¸ºå½æ°çåæ°ã


ç¼è¯å¨ä¸ºäºæ¯æ C++ ç¹æ§ï¼å¦éè½½ï¼ä½¿ç¨åç§°åå½¢ `name mangling` ææ¯ãéè¿åæ¥å½æ°ä¿®é¥°åå­
Decorated Name ä¹è½ç¥éå¯¹åºçåå§åå­æ¯ä»ä¹ã

C++ ç¼è¯æ¶å½æ°åä¿®é¥°çº¦å®è§åæ ¹æ®ä¸åçå½æ°è°ç¨çº¦å®å¶å®ï¼å¨ `__stdcall` è°ç¨çº¦å®è§åä¸ï¼
å½æ°åä¿®é¥°è§åå¦ä¸ï¼

01. ä»¥**?**æ è¯å½æ°åçå¼å§ï¼åè·å½æ°åï¼
02. å½æ°ååé¢ä»¥ **@@YG**ã**@@YA** å **@@YI** æ è¯ **__stdcall**ã**__cdecl** 
    å **__fastcall** è°ç¨çº¦å®ï¼åè·åæ°è¡¨ï¼
03. åæ°è¡¨ä»¥å­æ¯ä»£å·è¡¨ç¤ºï¼å¦ D è¡¨ç¤ºå­ç¬¦ç±»ååæ°ï¼
04. åæ°è¡¨çç¬¬ä¸é¡¹ä¸ºè¯¥å½æ°çè¿åå¼ç±»åï¼å¶åä¾æ¬¡ä¸ºåæ°çæ°æ®ç±»åï¼æéæ è¯å¨å¶æææ°æ®ç±»ååï¼
05. åæ°è¡¨åä»¥**@Z**æ è¯æ´ä¸ªåå­çç»æï¼å¦æè¯¥å½æ°æ åæ°æ è¿åï¼åä»¥**Z**æ è¯ç»æã

| å­æ¯ä»£ç  |  å¯¹åºæ°æ®ç±»å |
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
| PA       | æé          |
| PB       | constæé     |
| U        | struct        |

PA è¡¨ç¤ºæéï¼åé¢çä»£å·è¡¨ææ°æ®ç±»åï¼æ¯ä¸ä¸ªè¿ç»­ç¸åç±»åæéä»¥ä¸ä¸ª**0**ä»£æ¿ã

å¯¹äº C++ ç±»æåå½æ°ï¼å¶è°ç¨æ¹å¼æ¯ **thiscall**ãå½æ°çåå­ä¿®é¥°ä¸éæåç C++ å½æ°ç¨æä¸åï¼
é¦åå°±æ¯å¨å½æ°åå­ååæ°è¡¨ä¹é´æå¥ **@class** å­ ç¬¦æ è®°ãå¶æ¬¡æ¯åæ°è¡¨çéå§æ è¯ä¸åï¼

- å¬æ public æåå½æ°çæ è¯æ¯ **@@QEA**(@@QAE ???)ï¼
- ä¿æ¤ protected æåå½æ°çæ è¯æ¯ **@@IAE**ï¼
- ç§æ private æåå½æ°çæ è¯æ¯ **@@AAE**ï¼
- åè®¾å½æ°å£°æä½¿ç¨äº **const** å³é®å­ï¼åå¯¹åºçæ è¯åºåå«ä¸º **@@QBE**ï¼**@@IBE** å **@@ABE**ï¼
- å¦æåæ°ç±»åæ¯ç±»å®ä¾çå¼ç¨ï¼åä½¿ç¨ **AAV1**ï¼const å¼ç¨åä¸º **ABV1**ï¼

ä¾å¦ï¼**?Test@LibTest@@QEAAXXZ** è¡¨ç¤ºä¸ä¸ªç±»æåå½æ°ï¼åç§°ä¸º LibTest::Testï¼ç»æä½ç½®ç
Z è¡¨ç¤ºå½æ°æ²¡æåæ°æ²¡æè¿åå¼ã**@@QEA** è¡¨ææ¯ä¸ä¸ªå¬æå½æ°ï¼

    public: void __cdecl LibTest::Test(void) __ptr64


## ð Examining the Symbol Table

*Examining the Symbol Table*ï¼info æ¯ä¸ä¸ªå¤ç¨å½ä»¤ï¼å¯ä»¥ç¨å®æ¥æ¥è¯¢åç§åæ ¡çä¿¡æ¯ã

è½½å¥ Symbol Table åï¼å°±å¯ä»¥ç¨å®æ¥æ¥è¯¢æå®ä»£ç è¡çç¸å³æºå¨ä»£ç ä¿¡æ¯ï¼æèä»æºå¨ä»£ç å°åä¸­å¾å°
ç¸åºçæºä»£ç ä¿¡æ¯ã

å¯ä»¥ç»å®æå® LINENUMï¼FILE:LINENUMï¼FUNCTIONï¼FILE:FUNCTION æå·ä½å°åæ¥æ¥è¯¢ä¿¡æ¯ï¼

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

- `info address symbol` æ¥è¯¢æå®ç¬¦å·å¯¹åºçå°åã
- `info symbol address` æ¥è¯¢æå®å°åçå¯¹åºç¬¦å·ã
- `info functions [-q] [-n] [-t type_regexp] [regexp]` æ¥è¯¢å½æ°ä¿¡æ¯ã
- `info variables [-q] [-n] [-t type_regexp] [regexp]` æ¥è¯¢åéä¿¡æ¯ã
- `info sources` æ¥è¯¢å½åæºä»£ç æä»¶ä¿¡æ¯ã
- `info sources [-dirname | -basename] [--] [regexp]` æ¥è¯¢æææºä»£ç æä»¶ä¿¡æ¯ã
- `demangle [-l language] [--] name` æ¥è¯¢æå®å°åçå¯¹åºç¬¦å·ã

- `info types [-q] [regexp]` æ¥è¯¢ç±»åä¿¡æ¯ï¼
- `ptype[/FLAGS] TYPE | EXPRESSION` æå°ç±»åå®ä¹ï¼ææ FLAGS åæ°å¦ä¸ï¼
    - */r* åå§æ ¼å¼ï¼ä¸æ¿æ¢ typedefsã
    - */m* ä¸æå°ç±»æåã
    - */M* æå°ç±»æåã
    - */t* ä¸æå°åé¨ç±»å½¢ã
    - */T* æå°åé¨ç±»å½¢ã

- `info watchpoints` æ¥è¯¢æ­ç¹ breakpointsãçè§ç¹ watchpointsãæè·ç¹ catchpointsã
- `info threads` åè¡¨ææçº¿ç¨æ CPUï¼åæ¬å®ä»¬çç¶æï¼(active or halted)ï¼ä»¥åå½åè¿å¥çå½æ°ã
- `info registers` å¨è¿è¡è°è¯ä¸­æ¥è¯¢å¯å­å¨ä¿¡æ¯ï¼åç§å¯å­å¨, eip, eflags, åæ¬æ®µéæ©å¨ç­ã
- `info reg cs ds es ss ` è¿è¡è°è¯ä¸­æ¥è¯¢æå®çæ®µå¯å­å¨ã


## ð Run GNU debugger

*GNU debugger* å½ä»¤è¡åèï¼

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

GDB æ¯æè¿ç¨è°è¯åæ¬å°è°å¼ä¸¤ç§å·¥ä½æ¨¡å¼ï¼å¨æ¬å°è°è¯æ¨¡å¼ä¸­ï¼å¯ä»¥æå®è¦è°è¯çç¨åºï¼æèå·²ç»è¿è¡ä¸­
çç¨åºè¿ç¨ PIDï¼

> gdb program
gdb program core
gdb program 1234
gdb -p 1234

è°è¯ä¿¡æ¯ä¸»è¦æ¥èªç¼è¯å¨ç¼è¯ç¨åºæ¶çæçä¿¡æ¯ï¼æèä½¿ç¨æ ¸å¿è½¬å¨æä»¶ (core dumped)ã

å½ç¨åºè¿è¡è¿ç¨ä¸­åºç°éè¯¯åæ­¢è¿è¡ï¼ä¼äº§ç core æä»¶ï¼åå«æ ¸å¿è½¬å¨ (core dumped)ï¼å®æ¯ç¨åº
è¿è¡ç¶æçåå­æ è±¡ãä½¿ç¨ gdb è°è¯ core æä»¶ï¼å¯ä»¥å¸®å©æä»¬å¿«éå®ä½ç¨åºåºç°æ®µéè¯¯çä½ç½®ã

æ ¸å¿è½¬å¨ç Core Memory æ¯æç£å¿è´®å­å¨ï¼æ§å¼ççº¿ååå­ï¼ä¸»è¦æ¯ç±çå® Wang Laboratories 
å¨ 1950 å¹´ä¸»å¯¼åæçä¸ç§ææ¯ï¼å¹¶æä¸ºå½æ¶çæ åå­å¨ææ¯ï¼ææ¯é¢åé¿è¾¾ 20 å¤å¹´ãå¦ä»ï¼åå¯¼ä½å·¥ä¸
æ¾ååå±ï¼å·²ç»æ²¡æäººç¨ç£å¿è´®å­å¨äºãä¸è¿ï¼ä½ä¸ºå½æ¶é¢åçææ¯ï¼ç°å¨è®¸å¤æåµä¸ï¼è¿æ¯æè®°å¿ä½å«ä½ Coreã

å½ç¨åºè®¿é®çåå­è¶åºäºç³»ç»ç»å®çåå­ç©ºé´ï¼å°±ä¼äº§ç Segmentation faultï¼å æ­¤ï¼æ®µéè¯¯äº§çç
æåµä¸»è¦æï¼ 

- è®¿é®ä¸å­å¨çåå­å°åï¼ 
- è®¿é®ç³»ç»ä¿æ¤çåå­å°åï¼ 
- æ°ç»è®¿é®è¶çç­ã

GDB åè®¸å¨ä¸ä¸ªä¼è¯ä¸­è¿è¡åè°è¯å¤ä¸ªç¨åºãæ­¤å¤ï¼æäºç³»ç»ä¸ç GDB å¯è½åè®¸æ¨åæ¶è¿è¡å¤ä¸ªç¨åºï¼
çè³å¨ä¸åçè¿ç¨ç³»ç»ä¸åæ¶è°è¯å¤ä¸ªç¨åºãå¨æå¸¸è§çæåµä¸ï¼å¯ä»¥å¨å¤ä¸ªè¿ç¨ä¸­çæ¯ä¸ªè¿ç¨ä¸­æå¤ä¸ª
æ§è¡çº¿ç¨ï¼è¿äºçº¿ç¨ä»å¤ä¸ªå¯æ§è¡æä»¶å¯å¨ï¼è¿è¡å¨ä¸åçæºå¨ä¸ã

è inferior å°±æ¯ GDB ç¨æ¥è¡¨ç¤ºæ¯ä¸ªç¨åºæ§è¡çç¶æçå¯¹è±¡ï¼å®éå¸¸ä»£è¡¨ä¸ä¸ªè¿ç¨ãä½æ¯ï¼ä¹éç¨äº
æ²¡æè¿ç¨çç®æ ãInferior å¯ä»¥å¨è¿ç¨è¿è¡ä¹ååå»ºï¼ä¹å¯ä»¥å¨è¿ç¨éåºåä¿çãæ¯ä¸ª Inferior ä¹
ä¼æèªå·±å¯ä¸ IDï¼ä½ä¸åäºè¿ç¨ ID çå¯ä¸æ è¯ç¬¦ãéå¸¸æèªå·±ç¬ç¹çå°åç©ºé´ï¼å°½ç®¡ï¼ä¸äºåµå¥å¼
ç®æ å¯è½æå ä¸ª inferior å¨åä¸ä¸ªå°åç©ºé´çä¸åé¨åè¿è¡ãæ¯ä¸ª inferior å¯è½è½®æµå¨å¶åé¨
è¿è¡å¤ä¸ªçº¿ç¨ã

- `info inferiors` æ¥è¯¢å½å gdb ç®¡çä¸­çåè°è¯ç¨åºã
- `info connections` æå° gdb ç®åç®¡çä¸­çç®æ è¿æ¥ã

è¿å¥ GDB åï¼å¯ä»¥ä½¿ç¨ exec å½ä»¤æ¥å è½½å¾è°è¯çç®æ ç¨åºï¼å¹¶ä½¿ç¨ file å½ä»¤æ¥å è½½è°è¯ç¬¦å·è¡¨ã

å¼å§æ§è¡ç¨åºæ¶æä¸ç»å½ä»¤ç¨æ¥æ§å¶æ§è¡ï¼é¨åå½ä»¤å¯ä»¥æå®å¾ªç¯æ¬¡æ°ï¼

- `run` æ r å¯å¨ç¨åºï¼
- `next` æ n åæ­¥æ§è¡è·³è¿å½æ°ï¼
- `step` æ s åæ­¥æ§è¡è¿å¥å½æ°ï¼
- `until` ç¨æ¥éåºå¾ªç¯ä½ï¼
- `finish` ç¨æ¥å®æå½æ°è°ç¨ï¼
- `continue` æ c ç»§ç»­æ§è¡ç´å°ä¸ä¸ä¸ªä¸­æ­ä¸ºæ­¢ã
- `jump` å½ä»¤åå¯ä»¥ç¨æ¥æ¹åè¿è¡æµç¨ï¼æèä½¿ç¨ `call` æ¥å¼ºå¶æ§è¡ã
- å¦å¤åè½¦åè½å¯ä»¥ç¨æ¥éå¤ä¸ä¸æ¬¡çå¨ä½ï¼æèä½¿ç¨ TAB æ¥èªå¨å®æå½ä»¤è¾å¥ã

GDB è¿è¡æ¶å¯ä»¥éæ©å è½½éç½®æä»¶ï¼ 

>gdb -n -x .gdbinit

01. `-symbols file` or `-s file` ä»æä»¶è£å¥è°è¯ç¨ç symbol tableã
02. `-exec file` or `-e file` å°æä»¶ä½ä¸ºå¯æ§è¡æä»¶å è½½ï¼ä»¥ä¾¿å¨éå½æ¶æ§è¡ï¼å¹¶ä¸æ ¸å¿è½¬å¨
    æä»¶ç¸ç»åè¿è¡çº¯æ°æ®æ£æ¥ã
03. `-se file` å°æä»¶ä½ä¸ºå¯æ§è¡ç¨åºå¹¶ä»ä¸­è¯»å symbol tableã
04. `-core file` or `-c file` å è½½ core dump åå­è½¬å¨æä»¶ã
05. `-pid number` or `-p number` è¿æ¥å°è¿è¡ä¸­çè¿ç¨ä»¥è°æå®ï¼ç¸å½äºä½¿ç¨ attach å½ä»¤ã
06. `-directory directory` or `-d directory` å°ç®å½æ·»å å°æç´¢è·¯å¾åè¡¨ä¸­ï¼ä»¥å®ä½æºä»£ç 
    æèæ¬æä»¶ã
07. `-write` æå¼å¯æ§è¡ç¨åºå Core Dump æä»¶çè¯»ååè½ï¼ç¨äºç»ç¨åºæè¡¥ä¸ Patching Programsã
08. `-command file` or `-x file` æ§è¡æä»¶ä¸­ç GDB å½ä»¤ã
09. `-eval-command` or `-ex command` æ§è¡åæ¡ gdb å½ä»¤ï¼å¯å¤æ¬¡ä½¿ç¨ä»¥æ§è¡å¤æ¡å½ä»¤ã
10. `-init-command file` or `-ix file` å¨å è½½ .gdbinit æä»¶ä¹åä»¥å inferior ä¹åï¼
    æ§è¡å½ä»¤èæ¬ã
11. `gdb -ex 'target sim' -ex 'load' -x setbreakpoints -ex 'run' a.out` ç¤ºè
    æ§è¡åæ¡å½ä»¤åå½ä»¤èæ¬ã
12. `source [-s] [-v] FILE` å è½½èæ¬æä»¶å¹¶æ§è¡ï¼-s å¨æç´¢è·¯å¾ä¸­çèæ¬æä»¶ï¼-v æå°å½ä»¤ååã

è¿å¥ gdb çé¢åï¼ä¹å¯ä»¥å¯¹æç´¢ç®å½åè¡¨è¿è¡éç½®ï¼æèå è½½å¾è°è¯æä»¶åç¬¦å·æä»¶ï¼

- `show directories` æå°å½åçæºä»£ç æä»¶æç´¢ç®å½åè¡¨ï¼
- `dir dirname ...` æ·»å ç®å½å°æç´¢è·¯å¾åè¡¨ä¸­ã
- `dir` éç½®æç´¢ç®å½è·¯å¾åè¡¨ï¼é»è®¤å¼ä¸º *$cdir;$cwd*ã
- `info source` è¿è¡è°è¯åï¼æ¥è¯¢å½åå è½½çæºä»£ç æä»¶ã
- `info files` æ¾ç¤ºå½åæ­£å¨è°è¯çç®æ çæ´ä¸ªå æ ï¼åæ¬ç¨åºæä»¶ãæ ¸å¿è½¬å¨æä»¶ãè¿ç¨ä»¥åç¬¦å·æä»¶åã

æç´¢è·¯å¾åè¡¨ä½¿ç¨ : æ ; ä½ä¸ºåéç¬¦ï¼å¨ Windows å¹³å°ä¸ä½¿ç¨åèï¼å ä¸ºåå·ç¨ä½è·¯å¾ã

é»è®¤çæç´¢ç®å½åªæä¸¤ä¸ªï¼å¨æç´¢è·¯å¾ä¸­ä»¥ç¹æ®çå­ç¬¦è¡¨ç¤ºï¼

- *$cdir* æ¯æ compilation directoryï¼å³ç¼è¯å¨è¾åºçç®å½ã
- *$cwd* æ¯æç¨åºçå½åå·¥ä½ç®å½ current working directoryã


## ð Patching Programs

GDB å¯ä»¥ç¨äºç»ç¨åºæè¡¥ä¸ï¼æ§è¡éè¿å½ä»¤è¡åæ°`-write` æå½ä»¤ `set write on` æå¼å¯æ§è¡ç¨åº
å Core Dump æä»¶çè¯»ååè½ãå¨éåå·¥ä½ä¸­ï¼éå¸¸ä¼æ Patching Programs çéè¦ã

æµè¯ä¸­åç `set write on` æéè¿å½ä»¤è¡åæ° -write å¯ç¨ä¸çæï¼ä¾ç¶ Cannot access memoryã

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

ä½¿ç¨ GDB è®¾ç½®å½ä»¤æ¥ä¿®æ¹æ°æ®ï¼åå¨ main å½æ°æå¥½æ­ç¹ï¼æ§è¡è°è¯åååå¥æ°æ®ï¼å¯ä»¥ç´æ¥æå®å°åï¼
ä¹å¯ä»¥éè¿ç¬¦å·è·åç¸åºçå°åï¼

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

è¦å¨ç¨åºæ§è¡å°ç¸åºä½ç½®ï¼åéçå°åç¡®å®æ¶åå¥æ°æ®ï¼

> (gdb) p/x &main::person
> $25 = 0x63fe91
> (gdb) p/s (char *)0x63fe91
> $26 = 0x63fe91 "Done!\n"
> (gdb) set (char[4])*0x63fe91 = "boB"
> (gdb) set {char[5]}0x63fe91 = "boB!"

æå®æ¾å¼å°åæ¶ï¼è±æ¬å·å®ä¹ç±»åä¼å¯¹æ°å¼æ¾ç¤ºçå°åè¿è¡è§£å¼ç¨ï¼èåæ¬å·ä¸ä¼ï¼æ³¨æä½¿ç¨è§£å¼ç¨å¤çã

é¢åå§æ°æ®åºä¸å¯åå¥ï¼

> (gdb) p/x (char*)main::ai
> $33 = 0x40806b
> (gdb) p/s (char*)main::ai
> $34 = 0x40806b "AI"
> (gdb) set (char[3])*main::ai = "ia"
> Cannot access memory at address 0x40806b



## ð Continuing and stepping

*Continuing and stepping* åæ­¥è°è¯å½ä»¤ï¼

- `continue [ignore-count]` ç»§ç»­æ§è¡ç´å°ä¸ä¸ä¸ªæ­ç¹ï¼ignore-count æå®è·³è¿æ­¥æ°ã
- `c [ignore-count]` ç»§ç»­æ§è¡å½ä»¤ç®åå½¢å¼ã
- `fg [ignore-count]` åæ­¥å¹¶ä½¿ç¨ç¨åºä»¥ foreground æ¹å¼è¿è¡ã 
- `set step-mode on` è®¾ç½®åæ­¥æ¨¡å¼ï¼å¨å½æ°ç¬¬ä¸æ¡æä»¤åæåï¼æ²¡æè°è¯ç¬¦å·çæ¶åæ¹ä¾¿æ¢æµå½æ°æä»¤èä¸æ¯è·³è¿ã
- `step [count]` åæ­¥æ§è¡ä¸è¡ä»£ç ï¼step inï¼å¯ä»¥æå®è¡æ°ã
- `next [count]` åæ­¥è·³è¿å½æ°æ§è¡ä¸è¡ä»£ç ï¼æ§è¡å½å stack frame ä¸ä¸è¡ä»£ç ï¼step overï¼å¯ä»¥æå®è¡æ°ã
- `finish` å®æå½åå½æ°çæ§è¡ï¼æå°è¿åå¼ï¼å¦ææçè¯ã
- `until` ç»§ç»­è¿è¡ï¼ç´å°å°è¾¾å½å stack frame éè¿å½åè¡çæºè¡ã
- `until location` ç»§ç»­è¿è¡å°æå®ä½ç½®ï¼location æ¯æ­ç¹æä»¤å¯ä»¥æ¥æ¶çä½ç½®å½¢å¼ã
- `stepi [count]` æ§è¡ä¸æ¡æºå¶æä»¤ï¼ç»å¸¸åèªå¨æ¾ç¤ºå½ä»¤ `display/i $pc` ç»åä½¿ç¨ï¼èªå¨æå°å½åæä»¤ã
- `nexti [count]` æ§è¡ä¸æ¡æºå¶æä»¤ï¼å¦ææ¯å½æ°è°ç¨æä»¤ï¼æ§è¡ç´å°å½æ°è¿åã

## ð Breakpoints

*Breakpoints* æ­ç¹è®¾ç½®ï¼åå« watchpoints å catchpointsï¼å¦å½æ°ææå®æä»¶è¡ä½ç½®ï¼
æä»¤å¯å­å¨ $eip ç­äºæå®çå°åæ¶ä¼ä¸­æ­ç¨åºè¿è¡ï¼

    break [PROBE_MODIFIER] [LOCATION] [thread THREADNUM] [if CONDITION]

- *PROBE_MODIFIER* ä¿®é¥°ç¬¦å¦æå½ä»¤è¦æ¾å¨æ¢æµç¹ä¸ï¼ååºè¯¥ä½¿ç¨ä¿®é¥°ç¬¦ï¼
    - `-probe` (for a generic, automatically guessed probe type)
    - `-probe-stap` (for a SystemTap probe) 
    - `-probe-dtrace` (for a DTrace probe).
- *LOCATION* æå®ä½ç½®ï¼å¯ä»¥æ¯è¡å·ãå°åææ¾å¼æå®åä¸ªåæ°ï¼
- *CONDITION* å¸å°è¡¨è¾¾å¼ï¼éåä¸åæ¡ä»¶ï¼å¯ä»¥åä¸ä½ç½®å¯è®¾ç½®å¤æ­ç¹ï¼
- *THREADNUM* æå®çº¿ç¨å·ï¼éè¿ `info threads` å½ä»¤æ¥è¯¢ï¼

æå®ä½ç½®ä½¿ç¨è¡å·è§èï¼å³ä½¿ç¨åå·åéç¬¦ï¼å¦ file:linenumï¼

- `break` æ²¡ææå®ä½ç½®ï¼ç»å½å stack frame çæ§è¡å°åä¸æ­ç¹ã
- `b function` ç»å½åæä»¶çå½æ°ä¸æ­ç¹ï¼å¦ `b main`ï¼`b A::B::func()`ã
- `b function(types)` ç» C++ éè½½å½æ°ä¸æ­ç¹ï¼ä¸æå®åæ°ç±»åä¼åºç°èåè¿è¡éæ©ã
- `b linenum` ç»å½åæä»¶çæå®è¡ä¸æ­ç¹ã
- `b file:linenum` ç»æå®æä»¶åè¡å·ä¸æ­ç¹ã
- `b file:label` ç»æå®æä»¶åæ ç­¾ä¸æ­ç¹ã
- `b file:function` ç»æå®æä»¶ä¸­çå½æ°ä¸æ­ç¹ã
- `b -source factorial.c --function fact -label the_top` æ¾å¼æå®åç§ä½ç½®ã
- `b *main + 4` ç»æå®çå°åä¸æ­ç¹ï¼ä½¿ç¨ * ç¬¦å·å¼å¤´ï¼æå®ç¬¦å·å°åå åç§»ã
- `b *0x4061c2` ç´æ¥æå®åå­å°åä¸æ­ç¹ã
- `b +offset` å¾å offset è¡ä¸æ­ç¹ã
- `b -offset` å¾å offset è¡ä¸æ­ç¹ã

- `hbreak args` è®¾ç½®ç¡¬ä»¶è¾å©çæ­ç¹ï¼args åæ°å break å½ä»¤ä¸è´ã
- `rbreak regex` éåæ­£åè¡¨è¾¾å¼ç»ææå¹éçå½æ°è®¾ç½®æ­ç¹ï¼è®¾ç½®æ æ¡ä»¶æ­ç¹ï¼å¹éçæ­ç¹ä¼æå°åºæ¥ã
- `tbreak args` åæ¬¡ææçæ­ç¹ï¼å»ä¸­æ­ç¹åä¼èªå¨å é¤ã
- `thbreak args` åæ¬¡ææçç¡¬ä»¶è¾å©æ­ç¹ï¼å»ä¸­æ­ç¹åèªå¨å é¤ã

ç¡¬ä»¶è¾å©æ­ç¹ä¸»è¦æ¯ä¸º EPROM/ROM è°è¯è®¾å¤ä½¿ç¨ï¼SPARClite DSU åé¨å x86 åµå¥å¼è®¾å¤å¯ä»¥æä¾
é·é±é¨ï¼å¦è®¿é®ç¹å®æ°æ®æ¶æè°è¯å¯å­å¨æå®å°åçæä»¤ãç¼ºç¹æ¯ï¼ç¡¬ä»¶èµæºæéï¼å DSU åæ¶åªæä¾ä¸¤ä¸ª
æ°æ®ä¸­æ­ã

æ­£åè¡¨è¾¾å¼ä½¿ç¨çæ¯ç±»ä¼¼ grep å·¥å·ä½¿ç¨çè§åï¼å¦ä¸ `foo*` å¹éææåå« fo å¼å¤´ï¼å¹¶ä¸åæä»»æä¸ª
å­ç¬¦ o çå½æ°ãè¦ä»å¹éä»¥ foo å¼å¤´çå½æ°ï¼ä½¿ç¨ `^foo.*`ãè°è¯ C++ ç¨åºæ¶ï¼rbreak è®¾ç½®é
ç±»æåçéè½½å½æ°çæ­ç¹å¾æç¨ã

æ­ç¹å¯ä»¥æå¨ ELF å¯æ§è¡ç¨åºæä»¶çå¥å£ç¹ `b _start`ï¼è¿ä¸ªå¥å£æ¯ç¼è¯å¨ãé¾æ¥ç¨åºçæç¨åºæ¶
å°±æå®çï¼ä½æ¯è¿ä¸ä¸å®æ¯å¥å£å½æ°ã

å¦å¤ï¼è¯´è¯´ x86 ç segment:offset è¿ç§å®å°åè¡¨è¾¾æ¹å¼ï¼è¿ç§éå¸¸è§å°åè¡¨è¾¾å¨ gdb ä¸­å¹¶ä¸æ¯æï¼
éè¦æå®ä¸ä¸ªçº¿æ§å°åã

æ­ç¹æ¡ä»¶è®¾ç½®æ ¼å¼åèï¼

    b file.cpp:26 if var == value

å½æ­ç¹ä½ç½®å°è¾¾æ¶ï¼å°±æ§è¡æ¡ä»¶è¡¨è¾¾å¼ï¼æç«æ¶ä¸­æ­ã

å¯¹äºå·²ç»è®¾ç½®çæ­ç¹å¯ä»¥ä½¿ç¨ info b å½ä»¤æ¥æ£æ¥ï¼æèéè¿ `clear` æ¥æ¸é¤æ­ç¹ï¼d æ `delete` 
å é¤æææ­ç¹ã    
    
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

Setting watchpoints è®¾ç½®çè§ç¹ï¼å½çè§çå¼åå¨æ¶å°±ä¼ä¸­æ­æ§è¡ï¼ä¸éè¦æå®å·ä½çä¸­æ­å°åã
æ ¹æ®ä¸åçç³»ç»ï¼è¿å¯è½æ¯è½¯ä»¶æç¡¬ä»¶ä¸­æ­å®ç°ãå¨åæ­¥æ§è¡æ¶ï¼æ¯æ¬¡é½éè¦è¿è¡è¡¨è¾¾å¼å¼ï¼è¿å¯è½å¾
æµªè´¹æ¶é´ãä½æ¯ï¼å¨ä¸ç¥éç¨åºçåªä¸ªé¨åæ¯ç¥¸æ ¹çå¢å°ï¼æ¯æä»·å¼çã

å¨ HP-UX, Linux åé¨å x86 æºå¨ä¸ï¼GDB æ¯æç¡¬ä»¶çè§ç¹ï¼è¿ä¸ä¼å¯¼è´è¿è¡åæ¢ã

- `watch expr` è®¾ç½®ä¸ä¸ªçè§è¡¨è¾¾å¼ï¼å½å¶å¼æ¹åæ¶ GDB ä¼ä¸­æ­ç¨åºæ§è¡ã
- `rwatch expr` è®¾ç½®ä¸ä¸ªçè§è¡¨è¾¾å¼ï¼å½ç¨åºè¯»åæ¶ GDB ä¼ä¸­æ­ç¨åºæ§è¡ã
- `awatch expr` è®¾ç½®ä¸ä¸ªçè§è¡¨è¾¾å¼ï¼å½ç¨åºè¯»åæ¶ GDB ä¼ä¸­æ­ç¨åºæ§è¡ã
- `info watchpoints` æ¥è¯¢å·²ç»è®¾ç½®ççè§ç¹ã

çè§ç¹ Watchpoint æ¯å¾éè¦çä¸ç§è°è¯å·¥å·ï¼å®ä¸åäºæ­ç¹ï¼å®åªä¼å¨ä»£ç æ§è¡å°çè§ç¹æ¶æçè§ç
è¡¨è¾¾å¼åå®¹æååæ¶ä¸­æ­ï¼å°çè§åå®¹èªå¨æå°åºæ¥ï¼ä¾è°è¯èåèã

çè§ç¹çè®¾å®ä¸ä¾èµäºæ­ç¹çä½ç½®ï¼ä½æ¯ä¸åéçä½ç¨åæå³ï¼ä¹å°±æ¯è¯´ï¼è¦è®¾ç½®çè§ç¹å¿é¡»å¨ç¨åºè¿è¡æ¶
æå¯è®¾ç½®ãè®¾ç½®çè§ç¹çå½ä»¤æ 3 ä¸ªï¼watch çè§ï¼rwatch è¯»çè§ä»¥å awatch è¡¨è¾¾å¼çè§ï¼å¯ä»¥
ä½¿ç¨ `apropos watch` å½ä»¤æ¥è¯¢ææå³çè§ç¹çå½ä»¤ã

ä¾å¦ï¼ä»¥ä¸ç®åè®¾ç½®çè§çç®æ ä¸ºå¯å­å¨ååå­æä¸ªå°åçåå®¹ï¼çè§ EIPï¼é£ä¹æ¯æ¬¡æ§è¡æä»¤åé½ä¼å°
ç¸åºçå¼æå°åºæ¥ï¼

    watch $eip
    watch *0xf000e05c

    (r/a)watch var
    (r/a)watch *0xdeadbeef
    (r/a)watch *(int *)0xdeadbeef
    (r/a)watch -l *(int *)0xdeadbeef

çè§åé var å¹¶å¨å¼æ¹åãè¢«è¯»åæ¶ä¸­æ­ãçè§åå­å°åï¼æ³¨æä½¿ç¨ * å·ï¼å½è¯¥å°åçåå®¹ååãè¢«è¯»åæ¶ä¸­æ­ã

è¿å¯ä»¥çè§æå®ç±»åçæéï¼`(int *)` è¡¨ç¤ºä¸ä¸ªæ´å½¢æ°æ®æéï¼å½è¯¥å°åçä¸­ç int æéæåçåå®¹
ååãè¢«è¯»åæ¶ä¸­æ­ï¼ä½¿ç¨ -l éé¡¹ï¼ä¼åæ¶çè§è¡¨è¾¾å¼æ¬èº«ä»¥åè¡¨è¾¾å¼æåçåå®¹ã

è¿å¯ä»¥è®¾ç½®è§æµç¹æ¥å®ç°ç¨åºä¸­æ­ï¼è§æµç¹æ watch æå®çè¡¨è¾¾å¼æååå°±ä¸­æ­, rwatch æå®è¡¨è¾¾å¼
è¢«è¯»åæ¶ä¸­æ­, awwatch æå®è¡¨è¾¾å¼è¢«èµå¼ææåå¥å¨ä½æ¶ä¸­æ­ã

ç®åï¼awatch å rwatch å½ä»¤åªè½è®¾ç½®ç¡¬ä»¶çè§ç¹ï¼å ä¸ºä¸éè¿æ¯ä¸ªæä»¤çæ£æµå°±ä¸è½åç°é£äºä¸æ¹å
æ°æ®çè®¿é®è¡ä¸ºãä½ GDB æ²¡æå®ç°ï¼å ä¸ºå¨ä¸æ¯æç¡¬ä»¶çè§ç¹çæ¶åä½¿ç¨ï¼å°±å¯è½åºç°æç¤ºãå¦æè®¾ç½®
å¤ªå¤çè§ç¹ï¼å°±ä¼æç¤ºä¸è½æå¥çè§ç¹ã

    Expression cannot be implemented with read/access watchpoint.
    Hardware watchpoint num: Could not insert watchpoint

Setting catchpoints è®¾ç½®æè·ç¹å¯ä»¥è®©è°è¯å¨å¨ç¹å®çç¨åºäºä»¶ä¸­æ­æ§è¡ï¼å¦ C++ å¼å¸¸æºå¶ï¼å è½½
å±äº«åºè¡ä¸ºç­ç­ã

- `catch event` å¨ä»¥ä¸äºä»¶åçæ¶ä¸­æ­ï¼
    - C++ å¼å¸¸æºå¶å¨ä½ `throw`, `catch`ï¼
    - HP-UX ç³»ç»ä¸æ§è¡ `exec`, `fork`, `vfork`ï¼
    - `load [libname]` å è½½å±äº«åºè¡ä¸ºï¼å¯ä»¥æå®ç¹å®åºï¼å½ååªæ¯æ HP-UX ç³»ç»ã
    - `unload [libname]` å¸è½½å±äº«åºè¡ä¸ºï¼å¯ä»¥æå®ç¹å®åºï¼å½ååªæ¯æ HP-UX ç³»ç»ã
- `tcatch event` åæ¬¡äºä»¶ï¼ç¬¬ä¸æ¬¡æè·äºä»¶åï¼æè·ç¹ä¼èªå¨å é¤ã

ç®åï¼GDB å¨ C++ å¼å¸¸å¤çæéå¶ (catch throw å catch catch) :

01. äº¤äºå¼è°ç¨å½æ°ï¼GDB ä¼å¨å½æ°å®ææ§è¡æ¶äº¤åºæ§å¶æãä½å¦æè°ç¨æåºå¼å¸¸ï¼è¿å¯è½å¯¼è´æ§å¶æä¸è½
    æ­£å¸¸è¿åï¼ä½¿ç¨ç¨åºå¡æ­»ï¼æç»§æ¿è¿è¡ç´å°å»ä¸­æ­ç¹ï¼æ GDB æè·å°ä¸ä¸ªå¨çå¬çç³»ç»ä¿¡å·ãå³
    è®¾ç½®äºæè·ç¹ï¼å ä¸ºå¨äº¤äºè°ç¨æ¶å®æ¯ç¦ç¨çã
02. ä¸å¯ä»¥äº¤äºå°æåºå¼å¸¸ã
03. ä¸å¯ä»¥äº¤äºå°è®¾ç½®å¼å¸¸å¤çå¨ã

å¼å¸¸æè·å¹¶éæå¥½çè°è¯æ¹å¼ï¼ç¥éå¼å¸¸æåºçä½ç½®ï¼å°±å¯ä»¥å¨å¼å¸¸å¤çç¨åºæ§è¡åä¸­æ­å®ãè¿æ ·å°±å¯ä»¥æ¥ç
å æ ï¼èä¸æ¯åå¥ä¹±éº»ä¹ä¸­ãå¦ææ¯å¨å¼å¸¸å¤çç¨åºä¸­ä¸æ­ç¹ï¼è¿å°±èªæ¾éº»ç¦ï¼å¾é¾åç°æ¯åªéæåºäºå¼å¸¸ã

è¦æ³å¨å¼å¸¸å¤çè¢«æ§è¡åä¸­æ­ï¼éè¦ç¥éå¼å¸¸çå®ç°ãGNU C++ ä¸­çå¼å¸¸æ¯éè¿ `__raise_exception` 
å½æ°å®ç°çï¼åºè¯¥å¨æ­¤è®¾ç½®æ­ç¹ï¼

```c
/* addr is where the exception identifier is stored.
   id is the exception identifier.  */
void __raise_exception (void **addr, void *id);
```

æ¥è¯¢æ­ç¹ä¿¡æ¯ï¼åæ¬ç¹ç±»åï¼å°åï¼æ¯å¦è®¾ç½®å¨å»ä¸­æ¶ç¦ç¨ï¼æ¯å¦å¯ç¨ï¼ä»¥åå»ä¸­æ¬¡æ°ï¼

- `info breakpoints [n]`
- `info break [n]`
- `info watchpoints [n]`

Break conditions ä¸­æ­æ¡ä»¶åªæå¨ä¸æ­ç¹æ¶è®¾ç½®çæ¡ä»¶æ»¡è¶³æ¶æä¼ä¸­æ­ç¨åºçæ§è¡ãè¿ä¸ä½¿ç¨æ­è¨è¿è¡
ç¨åºéªè¯ç¸åï¼æ­è¨åªææ¡ä»¶ä¸æç«æ¶åæ­¢æ§è¡ã

æ¡ä»¶ä¹å¯ä»¥å¨ watchpoints ä½¿ç¨ï¼watch å½ä»¤å¯ä»¥ä½¿ç¨ ifï¼ä½ catch å½ä»¤ä¸å¯ä»¥ãéå¸¸ï¼çè§ç¹
ä¸éè¦è®¾ç½®æ¡ä»¶ï¼çè§ç¹ä¼ä¾¦æµè¡¨è¾¾å¼çå¼æ¯å¦æ¯æå´è¶£çé£ä¸ªå¼ã

æ¡ä»¶ä¸­æ­å¯ä»¥æå¯ä½ç¨ï¼å¯ä»¥è°ç¨ç¨åºçå½æ°ã

- `condition bnum expr` ä¸ºæ­ç¹ãçè§ç¹ãæè·ç¹è®¾ç½®ä¸­æ­æ¡ä»¶ï¼æ¡ä»¶ä¸º true æ¶æä¼ä¸­æ­æ§è¡ã
- `condition bnum` ç§»é¤ç¸åºæ­ç¹ãçè§ç¹ãæè·ç¹çä¸­æ­æ¡ä»¶ã
- `ignore bnum count` è®¾ç½®å¿½ç¥è®¡æ°ï¼å¦æ count å¼ä¸º nï¼åæ­ç¹ä¼å¨ç¨åºå°è¾¾å® n + 1 æ¬¡æ¶åæ­¢ãã

GDB ä¼å¯¹è¡¨è¾¾å¼ä¸­ä½¿ç¨å°çç¬¦å·è¿è¡æ£æµï¼ä½ä¸ä¼æ§è¡è¡¨è¾¾å¼ï¼åæ¬ break å½ä»¤ä¸­ç if æ¡ä»¶è¡¨è¾¾å¼ä¹
ä¸ä¼å¨è®¾ç½®æ¶æ§è¡ã

æ­ç¹æ¡ä»¶çä¸ç§ç¹æ®æåµæ¯ï¼ä»å½æ­ç¹è¾¾å°ä¸å®æ¬¡æ°æ¶æåæ­¢ãè¿éå¸¸æç¨ï¼ç¨æ­ç¹çå¿½ç¥è®¡æ°å¯ä»¥å®ç°ã
æ¯ä¸ªæ­ç¹é½æä¸ä¸ªå¿½ç¥è®¡æ°ï¼å®æ¯ä¸ä¸ªæ´æ°ãå¦æï¼ç¨åºå°è¾¾çæ­ç¹çå¿½ç¥è®¡æ°ä¸ºæ­£ï¼å°±ä¼è¿è¡éåï¼ç¶åç»§ç»­ã
ä¸ä¼å¯¹æ¡ä»¶è¿å¤æ­ï¼åªæå°è¾¾ 0 å¼æ¶æä¼æ£æ¥ä¸­æ­æ¡ä»¶ãä½¿ç¨ `$foo-- <= 0` è¿æ ·çä¸­æ­æ¡ä»¶å°±å¯ä»¥
æ¨¡æå¿½ç¥è®¡æ°å¨çä½ç¨ã


Breakpoint command lists ç»æå®çä¸­æ­æå®ä¸ç»è¦æ§è¡çå½ä»¤ï¼å»ä¸­ç¸åºä¸­æ­æ¶æ§è¡ï¼

    commands [bnum]
    ... command-list ...
    end

    break foo if x>0
    commands
    silent
    printf "x is %d\n",x
    cont
    end

## ð Examining the Stack

*Examining the Stack* æ£æ¥ç¨åºè¿è¡å æ çå¸§ï¼æ¯å°å½æ°è°ç¨æ¶ï¼åå­ä¸­ä¸­éè¦ç¨ä¸ä¸ªå¸è®°å½å½åå½æ°çä¸ä¸æä¿¡æ¯ãå æ æå¨åå­ååå²ä¸ºå¸§çå½¢å¼ï¼ä¿å­ç¸å³æ°æ®ãå±é¨åéãå¯å­å¨ç¶æç­ãGDB æä¾ frame å½ä»¤æ¥éæ©å æ å¸§ã

ç¨åºè¿è¡æ¶åªæä¸ä¸ª initial å¸§ä¹å« outermost å¸§å¯¹åº main å½æ°ï¼å½è°ç¨å¶å®å½æ°æ¶å°±åå»ºä¸ä¸ªæ°çå¸§ï¼å½åç¨åºæ§è¡æå¨çå¸§æ¯ innermost å¸§ãæ¯ä¸ªå¸§é½ä¸ä¸ªå°åç¡®å®ï¼æ¯ä¸ªå¸§é¤äºæ°æ®ä¹åå«èªèº«çå°åãæ¯ç§è®¡ç®æºé½æä¸ä¸ªéæ©ä¸ä¸ªå­èä½ä¸ºå¸§å°åççº¦å®ï¼éå¸¸ä½¿ç¨ frame pointer register æ¥ä¿å­å½åéæ©çå¸§å°åãç¨åºè®¡æ°å¨ Program Counter å³ $pc å¯å­å¨ï¼å®çå¼æåå½åå¸§è¦è¿åçå°åï¼å½åå¸§è¿åæ¶ï¼å®å°±ä¼è¢«CPU æä»¤ pop æ¢å¤å°å¯å­å¨ä¸­ã

- `frame n` éæ©ç¬¬ n å·å¸§ï¼0 å·è¡¨ç¤ºæåé¨çå¸ï¼å³å½åç¨åºæ§è¡çå¸§ã
- `frame addr` éæ©å æ åå­å°åç¸å³çå¸§ã
- `up n` åä¸ç§»å¨å° n ä¸ªå¸§ï¼æ­£æ°åå¤ï¼åè¾é«å¸§å·åè¿ï¼åè¾æ©çå­å¨çå¸§ï¼é»è®¤ n ä¸º 1ã
- `down n` å¨å æ ä¸­åä¸ç§»å¨ n å¸§ãæ­£æ°ååï¼åè¾ä½çå¸§ç¼å·åè¿ï¼åæè¿åå»ºçå¸§åè¿ï¼é»è®¤ n ä¸º 1ã
- `up-silently n` éé»æ¨¡å¼ç§»å¨ã
- `down-silently n` éé»æ¨¡å¼ç§»å¨ã

ç§»å¨å¸§æ¶ï¼å½ä»¤ä¼æå°ä¸¤è¡ä¿¡æ¯ï¼å¦æä¸æ¯éé»æ¨¡å¼ç§»å¨ãåå®¹æ¯å¸§å·ãå½æ°åãåæ°åæºæä»¶å¯¹åºçè¡å·ï¼åä¸è¡ä¸ºå¯¹åºä»£ç ã

Backtraces åæº¯å½ä»¤ç¨æ¥æ£æ¥å¸§çç¶æï¼ä»¥ç¡®å®ç¨åºæ§è¡å°ä»ä¹ä½ç½®ãæå°ä¿¡æ¯ä¸­ï¼æ¯ä¸è¡æ¾ç¤ºä¸ä¸ªå¸§çä¿¡æ¯ï¼å¾ä¸å¢å å¸§åºå·ã

- `backtrace` æå°å®æ´çå æ å¸§ã
- `info stack` åæº¯å½ä»¤å«åï¼åè½åä¸ã
- `bt n` æå°ååæè¿ç n ä¸ªå¸§ã
- `bt -n` æå°å¤åæè¿ç n ä¸ªå¸§ã

- `frame` ä»æå°ç®è¦çå¸§ä¿¡æ¯ã
- `info frame` æå°è¯¦å°½çå¸§ä¿¡æ¯ï¼åæ¬å¶å°åãä¸ä¸å¸§å°åãå¯¹åºæºä»£ç ãå¸§åæ°å°åãå¸§å±é¨åéå°åï¼ä»¥å $pcã
- `info f addr` æå°ç®æ å°åæå¨å¸§çè¯¦ç»ä¿¡æ¯ã
- `info args` æå°å½åå¸§çä¼ å¥åæ°ã
- `info locals` æå°å½åå¸§çå±é¨åéã
- `info catch` æåå½åå¸§çå¼å¸¸ææå¤çå¨ã

## ð Automatic display

*Automatic display* å¨ç¨åºä¸­æ­æ¶èªå¨æ¾ç¤ºæå®è¡¨è¾¾å¼ä¿¡æ¯ï¼

- `display` æ `info display` æ¥è¯¢å½åè®¾ç½®çèªå¨è¡¨è¾¾å¼ã
- `display expr` è®¾ç½®ä¸æ¡èªå¨è¡¨è¾¾å¼ã
- `display/fmt expr` è®¾ç½®ä¸æ¡å¸¦æ ¼å¼çèªå¨è¡¨è¾¾å¼ã
- `display/fmt addr` è®¾ç½®ä¸æ¡å¸¦æ ¼å¼çèªå¨è¡¨è¾¾å¼ã
- `disable display dnums...` ç¦ç¨æå®èªå¨è¡¨è¾¾å¼ã
- `enable display dnums...` å¯ç¨æå®èªå¨è¡¨è¾¾å¼ã
- `undisplay dnums...` å é¤æå®èªå¨è¡¨è¾¾å¼ã
- `delete display` å é¤å¨é¨èªå¨è¡¨è¾¾å¼ã

ä½¿ç¨åä½æ `i` å `s` ä¸¤ç§ x å½ä»¤æ ¼å¼æ¶è°ç¨ x å½ä»¤ï¼å¦åä½¿ç¨ print å½ä»¤ï¼è¿å¯ä»¥ç»æ ¼å¼åæ°è®¾ç½®åä½ä¿¡æ¯ãå¦æèªå¨è¡¨è¾¾å¼ä¸­å«æå±é¨åéï¼åä¼å¨è¶åºä½ç¨åæ¶èªå¨ç¦ç¨ã

å¦æå°ç¨åºè®¡æ°å¨æåçæä»¤ `display/4i $pc`ï¼æ³¨æï¼åè¿æ ·å¸¦åç§»å¼çè¡¨è¾¾å¼ `display/i $pc-2` å¯ä»¥å¾ä¸å°æ­£ç¡®æä»¤ï¼å ä¸ºä¸è½ç¡®å®ä¸ä¸æ¡æä»¤æä¸ä¸æ¡æä»¤çå­èåç§»éã


## ð Commands for controlled output

*Commands for controlled output* æ§å¶çæè¾åºçå½ä»¤ï¼å¨æ§è¡å½ä»¤æ¶ï¼æ åç GDB è¾åºè¢«ç¦æ­¢ï¼å¯ä¸è¾åºçæ¯å½ä»¤æ¾å¼å®ä¹ä¸­çæå°çåå®¹ãä»¥ä¸æ¯ä¸ç¨æ§å¶è¾åºçå½ä»¤ï¼

- echo text æå°å­ç¬¦ä¸²ï¼å¯ä»¥ä½¿ç¨ C è¯­è¨çè½¬ä¹å­ç¬¦ï¼å¦ `\n` æå°æ¢è¡ç¬¦ï¼ä¹å¯ä»¥ä½¿ç¨æ«å°¾ç \ æ¥æ¼æ¥å¤è¡åå®¹ãç¨æ¥æå°å¼å¤´ææ«å°¾å«ç©ºæ ¼çåå®¹å¾æç¨ï¼å ä¸ºé»è®¤ä¼å¤çæåå¯¼æåç¼çç©ºæ ¼ã
- output expression æå°è¡¨è¾¾å¼çå¼ï¼åªæå¼æ²¡æå¶å®åå®¹ï¼æ²¡æé»è®¤ç `$nn` ä¹æ²¡ææ¢è¡ã
- output/fmt expression å¸¦æ ¼å¼è¡¨è¾¾å¼å¼æå°ã
- printf string, expressions... æ ¼å¼åå­ç¬¦ä¸²ãè¡¨è¾¾å¼æå°å½ä»¤ï¼å C è¯­è¨çå½æ°ä¸æ ·ã

        printf "foo, bar-foo = 0x%x, 0x%x\n", foo, bar-foo


## ð Output formats

*Output formats* è¾åºåå®¹æ ¼å¼ä¸åä½ï¼GDB é»è®¤æ ¹æ®æ°æ®ç±»åä»¥ä¸åæ¹å¼æå°ï¼x æ print ç­å½ä»¤å¯ä»¥æå®æ ¼å¼ï¼

- `/x` å° bits ä½ä¸ºæ´æ°ä»¥åå­è¿å¶æå°ï¼å¦ `p/x $pc`ï¼
- `/d` å¸¦ç¬¦å·åè¿å¶æå°æ´æ°ï¼
- `/o` å«è¿å¶æå°æ´æ°ï¼
- `/t` äºè¿å¶æå°æ´æ°ï¼t æ¯ two çç¼©åï¼
- `/f` å° bits ä½ä¸ºæµ®ç¹æ°æå°ã
- `/u` ææ ç¬¦å·åè¿å¶æå°æ´æ°ï¼
- `/a` ä½ä¸ºå°åæå°ï¼hex å åç§»å¼æ ¼å¼ï¼å¦ `p/a 0x54320` è¾åºç±»ä¼¼ *0x54320 <_initialize_vx+396>*ï¼
- `/c` å­ç¬¦
- `/s` å­ç¬¦ä¸²
- `/i` æ¾ç¤ºæ±ç¼æä»¤ï¼å°åå­æ°æ®ä½ä¸º CPU æä»¤è§£æ
- `/z` åç¼ 0 çåå­è¿å¶
- `b` Bytes.
- `h` Halfwords (two bytes).
- `w` Words (four bytes).
- `g` Giant words (eight bytes)

## ð Program variables

*Program variables* ç¨åºåéä½¿ç¨ï¼æ ¹æ®ç¨åºè¿è¡æ¶ç stack frameï¼ç¨åºåéçä½ç¨åçä¸åï¼å¨å±çæå±é¨çï¼å¯ç¨çåéä¹ä¸åãå¹¶ä¸ï¼å½åéæ©ç stack frame ä¹ä¼å½±ååå­çæ°æ®ã

ä½¿ç¨ `file::variable` å¯ä»¥è®¿é®æä»¶ä½ç¨åä¸çéæåéï¼æèå½æ°åé¨åé `function::variable`ãæ³¨æï¼ååå·ä¸æ¯ C++ ä¸­çä½ç¨åè¿ç®ç¬¦ï¼å°½ç®¡ GDB æ¯æã

- `p 'hello.cpp'::main` æå° hello.cpp æä»¶ä¸­ç main å½æ°ï¼æ³¨æå ä¸ºæä»¶åæç¹èä½¿ç¨åå¼å·ã
- `p 'hello.cpp'::main::xman` æå° hello.cpp æä»¶ä¸­ç main å½æ°åç xman åéã
- `p main::xman` æå° main å½æ°åç xman åéã

å¦æåºç°éè¯¯æç¤ºï¼No symbol "foo" in current contextï¼è§£å³æ¹æ³æ¯ä¸è¦ä½¿ç¨ä¼åç¼è¯ï¼ä½¿ç¨å¸¦è°è¯ç¬¦å·çç¼è¯å¨éé¡¹ï¼å¦ GNU C/C++ compiler æ¯æ `-gstabs` éé¡¹ä»¥äº§çå¸¦è°è¯ä¿¡æ¯ç COFF æä»¶ï¼ä¹å¯ä»¥ä½¿ç¨ DWARF2 (`-gdwarf-2`)ã

## ð Convenience variables

*Convenience variables* ä¾¿å©åéï¼ä½¿ç¨åç¼ `$` æ¥å®ä¹ä¾¿å©åéç¬¦å·ï¼æ²¡æåºå®ç±»åï¼å¯ä»¥ä½¿ç¨ set å½ä»¤è¿è¡ç®¡çãå¨  HP-UX ç³»ç»ä¸­ï¼GDB ä¼ä¼åæç´¢ç¨æ·æç³»ç»åç§°ï¼å¶æ¬¡ææ¯ä¾¿å©åéã

- `show convenience` æ¥è¯¢åéä¿¡æ¯ã
- `set $foo = *object_ptr` å°å¯¹è±¡å¼ç¨çå¼ä¿å­å° $fooã
- `set $i = 0` è®¾ç½®ä¸ä¸ªæ°å¼ã
- `print bar[$i++]->contents` ä½¿ç¨ä¾¿å©åéã
- `$_` åç½®åéï¼æ§è¡ x å½ä»¤æ¶ä¼è®¾ç½®ä¸ºæåæ£æ¥çåå­å°åï¼é»è®¤ç±»åæ¯ void * ã
- `$__` åç½®åéï¼æ§è¡ x å½ä»¤æ¶ä¼å°ç±»åä¿å­å°è¿ä¸ªåéã
- `$_exitcode` è¢«è°è¯ç¨åºéåºæ¶çç¶æä»£ç ã
- `set $eax=0` è®¾ç½®ä¿®æ¹å¯å­å¨çå¼ï¼

## ð Value history

*Value history* æ¯ GDB æ§è¡å½ä»¤æ¶çè¾åºè®°å½ï¼æ¯ä¸ªè®°å½ä½¿ç¨ä¸ä¸ªåç¼åºå·çåéã

ä¾¿å©åéååå²å¼ä½¿ç¨ç¤ºèï¼

- `$` æ¯æåä¸æ¬¡è¾åºçåå®¹ï¼ç­äº `$$0`ï¼å¦ `p *$` æå°æåä¸æ¬¡è¾åºçåå®¹ï¼
- `$$` æåè¾åºçåä¸ä¸ªåå®¹ï¼ç­äº `$$1`ï¼
- `$$n` æåè¾åºçç¬¬å n ä¸ªåå®¹ï¼å¦ `$$2` æ¯ `$$` çåä¸ä¸ªåå®¹ã
- `p *$.next` é¾å¼è¡¨è¾¾ï¼åè®¾ $ æ¯æåä¸ä¸ªç»æä½å¹¶å«æ next æåæéã
- `show values [n]` æ¥è¯¢åå²å¼ï¼ä»¥ n åºå·ä¸ºä¸­å¿ã
- `show values +` æ¥è¯¢æè¿ 10 ä¸ªåå²å¼ã

## ð Artificial arrays

*Artificial arrays* æ°ç»ç¾åï¼ä½¿ç¨ `@` äºåè¿ç®ç¬¦ï¼ç¨äºå°è¿ç»­çåå­æ°æ®å½ä½æ°ç»æå°ï¼å¦ FOO@NUM è¿æ ·çæ ¼å¼ï¼FOO æ¯åå­æ°æ®å¯¹è±¡ï¼è¿æä¾¿å©å½¢å¼ `(type[])value`ï¼GDB ä¼æ§è¡ `sizeof(value)/sizeof(type)` è¿ç®æ±è§£ãåå®ä»¥ä¸æ°ç»å®ä¹ï¼

```cpp
int main(){
    int len = 3;
    char *ai = (char *) malloc (len * sizeof (char));
    ai = "AI";
}
```
gdb example.exe -write

- `p *ai@len` å·¦ä¾§ç ai å¿é¡»æ¯åå­ä¸­çæ°æ®ã
- `p/x (short[2])0x12345678` æå°ä¸¤ä¸ªç­æ´å½¢æ°æ®ï¼è¾åºç±»ä¼¼ *{0x1234, 0x5678}*ã

ä»¥ä¸æµè¯ GDB å¨ä¸åçæå°æ¹å¼ä¸å¯¹ä¸ä¸ªæéçå¤çï¼

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


å° ai è¿ä¸ªæéå½ä½å­ç¬¦ä¸²æ¥ä½¿ç¨æ¯æ­£ç¡®çï¼å ä¸ºæ¬èº«å°±æ¯æåå­ç¬¦ä¸²ï¼`p/s main::ai` è¿ä¸ªå½ä»¤è¾åºå­ç¬¦ä¸²çåæ¶ï¼è¿ç»åºäºç¸åºçå°åã

å¦æç´æ¥ç» p/s å½ä»¤ä¼ å°åä¼æä¹æ ·ï¼å¯ä»¥çå°ï¼`p/s 0x408072` å½ä»¤åªæ¯å°è¿ä¸ªå°åä½ä¸ºæ´æ°ä»¥åè¿å¶æå°åºæ¥èå·²ãè¿æ¯å ä¸ºï¼å­ç¬¦ä¸²æå°éè¦æ¥æ¶ä¸ä¸ªå­ç¬¦ä¸²æéï¼èç´æ¥ä½¿ç¨è¿ä¸ªå°åå¼ï¼å®åªæ¯ä¸ä¸ªæ°å¼èä¸ä¼è¢«çä½æ¯æéã

æä»¥éè¦åè¯ GDB è¿ä¸ªæ°å¼æ¯ä¸ä¸ªæéï¼ä½¿ç¨å C è¯­è¨ä¸æ ·çç±»åè½¬æ¢ `(char *)0x408072`ï¼ç¶åå°±å¯ä»¥æ­£ç¡®å¤çäºã

å¦æå° 0x408072 è¿ä¸ªå°åå£°æä¸ºå­ç¬¦æ°ç»ä¼æä¹å¤çå¢ï¼å½ä»¤ `p/s (char [])(0x408072)` æå°åºæ¥çæ¯ä¹±ç ä¸æ ·çä¸è¥¿ï¼è¿éæä¸ªå¾å®¹æè¢«å¿½è§çç»èï¼å°±æ¯è¿ä¸ªå°åæ¬èº«æ¯ä¸ä¸ªæéçå°åï¼è¿ä¸ªå°åéçæ°æ®å°±æ¯æéçå¼ï¼å®ææ¯çæ­£çæ°æ®ãæä»¥éè¦è¿è¡ä¸æ¬¡è§£å¼ç¨æè½åå°å­ç¬¦ä¸²çé¦å°åï¼ç¶åï¼æè½å°å®å½å­ç¬¦æ°ç»ä½¿ç¨ã

é£ä¹ï¼ä¸ºä½ç´æ¥ä½¿ç¨ main::ai è¿ä¸ªç¬¦å·ä¸ç¨è®¾ç½®ç±»åå¢ï¼è¿éå ä¸ºç¬¦å·è¡¨æ¬èº«å°±æå®çç±»åä¿¡æ¯ã

å¦ä¸ä¸ªå·®å«ï¼è±æ¬å·å®ä¹ç±»åä¼å¯¹æ°å¼æ¾ç¤ºçå°åè¿è¡è§£å¼ç¨ï¼èåæ¬å·ä¸ä¼ï¼

> (gdb) p/s {char*}0x408072
> $7 = 0x4941 <error: Cannot access memory at address 0x4941>
> (gdb) p/s (char*)0x408072
> $8 = 0x408072 "AI"

å¦æå°ï¼è¿ä¸ªç¬¦å·å½ä½å­ç¬¦æ¥çå¾å¢ï¼é£ä¹ `p/c main::ai` å½ä»¤å°å®å½æå­ç¬¦æ¥å¤çï¼å°±æå°åºäºä¸ä¸ªârâï¼è¿æ¯å ä¸ºæéçå¼æ¯ 0x408072ï¼æåä¸ä¸ªå­èå°±æ¯ 0x72 å¯¹åº ârâãä¸ºäºè¯å®å®ï¼ç¨ç¬¬äºæ¡å½ä»¤ `p/c main::array+1` æå°åºæ¥ä¸ä¸ªâsâã

è¦æ³è·åå°æéçå­ç¬¦ï¼å°±å C è¯­è¨ä¸æ ·ä½¿ç¨è§£å¼ç¨æä½ç¬¦å·ï¼`*main::ai`ï¼`*(main::ai+1)` åå«å¯¹åºäºç¬¬ä¸ãäºä¸ªå­ç¬¦ãè¿ç§è¡¨è¾¾å¼ä¸­ï¼å¯ä»¥ç´æ¥ç¨ 0x408072 è¿ä¸ªæ°å¼æ¿æ¢ç¬¦åï¼å ä¸ºè§£å³å¼ç¨ä¹ååªéè¦ååºææåçç¬¬ä¸ä¸ªå­èçæ°æ®ãå¦ææ¯å­ç¬¦ä¸²æå°ï¼å°±ä¸è½è¿æ ·å¤çï¼ä¸å®è¦å ç±»åè½¬æ¢ã

åç»­ç `p/x main::ai` æ `p/x 0x408072` å½ä»¤å°å®å½ä½æ´æ°æåå­è¿å¶æå°ï¼ä¹æ²¡éï¼å°±æ¯å°å°åæå°åºæ¥äºãè `p/x *0x408072` å½ä»¤åæ¯å°å®è§£å¼ç¨åï¼å³è·åå°è¿ä¸ªåå­å°åçæ°æ®ååä½ä¸ºæ´æ°æå°åºæ¥ï¼ä¹å°±æ¯ "AI" å¯¹åºç ASCII ç ã

åæå®åé¢çæéä¸ GDB çå¤çæ¹å¼åï¼åæ¥çæä¸ä¸æéãåéä¸æ°ç»ã

é¦åï¼è¦åºåæ®éåéåæéï¼è½ç¶å¨ç¼è¯è¯­è¨ä¸­å®ä»¬æ¯ä¸¤ç§ä¸åçä¸è¥¿ï¼ä½æ¬è´¨ä¸æ²¡æä»ä¹å·®å«ãæéå°±å­å¨åå­å°åçï¼èåéæ¯å­å¨ä¸ä¸ªå¼ï¼å¦æå°æéå­å¨çåå­å°åå½ä½æ®éçæ´å½¢æ°å¼æ¥çå¾ï¼é£ä¹æéå°±ç¸å½äºä¸ä¸ªæ´å½¢åéãå¦æè¯´äºå®ä¸æéåæ®éåéåºå«æ¯å·¨å¤§çï¼é£å°±æ¯å ä¸ºæéçåè½æä½¿ç¨åºåãä½¿ç¨æ¹å¼çä¸åå³å®çãç¹å«æ¯æéå¨åå­ç®¡çä¸­çåºç¨ï¼è¿å°±æ¯æéååéäº§çå·¨å¤§å·®å«çåå ã

èæ°ç»ååéçåºå«å°±å¨äºæ°ç»æ¯è¿ç»­çæ°æ®ï¼å¦ææ°ç»åªæä¸ä¸ªåç´ ï¼é£ä¹å®åæ®éåéæ²¡æå·®å«ãè¿ç§æåµä¸ï¼æ°ç»åå¯ä»¥çè§£ä¸ºä¸ä¸ªåéåï¼åéåä¹å¯ä»¥çè§£æåç¬¬ä¸ä¸ªåç´ çæ°ç»åï¼å¦å¤ä¸ä¸ªåºå«æ¯ï¼æ°ç»çæä½ä¸çåºå«ï¼æ¯ç«ååéå­å¨çåå®¹å¨è¿ç»­æ§ä¸æå·®å«ãæä»¥æ°ç»é¢å¤å¤äºä¸æ è¿ç®ï¼å®å­å¨çæä¹å¨äºï¼å¯ä»¥æ ¹æ®æ°ç»åååç´ å æ®å­èçå¤§å°æ¥è¿è¡ä¸ä¸ªå°ååç§»çè¿ç®ï¼ä»æ­¤èä»¥ã

```cpp
  char matrix = 'm';
  char a = 'a';
  char r = 'r';
  char i = 'i';
  char x = 'x';
```

éå¸¸ï¼Multi-dimensional Arraysï¼å¦ä¸¤ç»´æ°ç»è¡¨ç¤ºä¸º `[row][col]`ï¼ä¸ç»´æ°æ®å¯ä»¥è¡¨ç¤ºä¸º `[plane][row][col]`ï¼å¦æå¯¹ä¸ç»´æ°ç»æéè¿è¡è¿ç®ï¼è¿ç®è¡¨è¾¾å¼ä¸º `*(*(*(im+plane)+row)+col)`ï¼äºç»´ä¹ç±»ä¼¼ï¼`*(*(im+row)+col)`åè®¡ç®çæ°¸è¿æ¯æå·¦ä¾§çæ¹æ¬å·ã

å½ç¶ï¼å¦æä¸ææ··æ·ï¼ç´æ¥ä½¿ç¨ç¬¬åä¸ç»´åç§»ä¹å¯ä»¥è®¿é®ææåç´ ï¼æ¯å¦äºç»´æ°ç»ï¼åªè¦ offset è¶³å¤å¤§ï¼`*(*im+offset)` è¿æ ·çå°±åªå¯ä»¥è®¿é®å°ææåç´ ï¼ä½¿ç¨ä¸ä¸ªä¹æ°ä¹å¯ä»¥å° offset è½¬æ¢æå¶å®ç»´åº¦çæéè¿ç®ï¼æ²¡ææ¬è´¨åºå«ã

åé¢çä»£ç çæ­ä¸­ï¼è¿æä¸ç¹éè¦æ³¨æï¼ä½ä¸ºå°åä½¿ç¨ `im` å¯ä»¥ç´æ¥éè¿ printf æå°åºæ¥ï¼ä½æ¯å¦æéè¦åå¼ï¼å°±å¿ééè¿ * è§£å¼ç¨ï¼å¤å°ç»´çæ°æ®å°±æå¤å°ä¸ª * è¿è¡è§£å¼ç¨ï¼è¿æ¯ç¼è¯å¨çº¦å®çè§åï¼å¦åå®å°±æ¯ä¸ä¸ªæéï¼ä¸ä¸ªå°åï¼èä¸æ¯ä¸ä¸ªå¼ãå¹¶ä¸ï¼æ¯ä¸æ¬¡è§£å¼ç¨åï¼å¾å°çå°åçç»´åº¦ä¿¡æ¯é½ä¸ä¸æ ·ï¼æä»¥ + - è¿ç®çæä¹ä¹ä¸åã

å¯ä»¥ç¨ä»¥ä¸å¾è¡¨ç®åçè§£ï¼

      ð´im                im+1                     *(im+2)+1
       |                   |                         |
       |                   |                         |
       V                   V                         V
    { ð´1  ð´2  ð´3 }, { ð´4  ð´5  ð´6 }, { ð´7  ð´8  ð´9 }  <-- Memory Cell
    row = 0              row = 1             row = 2


åºè¯¥æ³¨æå°ï¼é¤äº im åéï¼å `im+1` æ `*(im+2)+1` å¹¶æ²¡æå åç¹ï¼è¡¨ç¤ºç¼è¯å¨æ²¡æä¸ºå®ä»¬åéç¸åºçåå­ï¼å°½ç®¡å®ä»¬ä½ä¸ºè¡¨è¾¾å¼ç¡®å®ä¼äº§çç¸åºçä»£ç å¹¶å æ®ä¸å®åå­ã

ä»ä¸é¢çç¤ºæå¾ä¸­ï¼åºè¯¥çè§£å°ï¼å¤ç»´æ°ç»æ¬è´¨åä¸ç»´æ°ç»æ¯æ²¡æåºå«çï¼å°±æ¯è¿ç»­çåå­ç©ºé´ï¼å¯ä¸å·®å«å°±æ¯è¿è¡æéè®¡ç®æ¶ï¼ä¸åçè§£å¼ç¨å¯¹åºäºä¸åçä¸ä¸ªä¹æ°ï¼å³åç§»éçä¹æ°ã

å¯¹äºè®¸å¤ C è¯­è¨æææ¥è¯´ï¼ä»¥ä¸è¿ç¹æ¯æ²¡ææ¸æ°è§£éçï¼ä¹æ²¡æç»åºä¸ä¸ªå¾å¥½çå¥é¨çº§è§£éã

ä»¥ä¸åå®¹è½¬èªæçè¯»ä¹¦ç¬è®°ãéè¯» The C Programming Languageã


## ð Printing source lines

*Printing source lines* ä½¿ç¨ list å½ä»¤æå°æºä»£ç ï¼

- `list` æä¸æ¬¡ä½ç½®ç»§ç»­æå°æ´å¤çåå®¹ã
- `l -` æåæ¹åæå°ï¼çº¦ 10 è¡åå®¹ã
- `l LINENUM` æå°æå°è¡å·éè¿ 10 è¡åå®¹ã
- `l START,END` æå°æå®å¯å§è¡åç»æè¡ä¹é´çåå®¹ã
- `l FILE:LINENUM` æå°æä»¶æå®è¡å·éè¿åå®¹ã
- `l FUNCTION` æå°å½æ°éè¿åå®¹ã
- `l FILE:FUNCTION` æå°æä»¶ä¸­å½æ°éè¿åå®¹ã
- `l *ADDRESS` åè¡¨æå®åå­å°åç¸å³çæºä»£ç ã
- `set listsize` æ `show listsize` å¯ä»¥æ¥è¯¢åè®¾ç½®é»è®¤çè¡æ°ã 
- `set listsize unlimited` è®¾ç½®æ éè¡æ°ã

## ð Memory examine

*Memory examine* ä½¿ç¨ examine å½ä»¤æ£æ¥åå­æ°æ®ï¼

- `x/nfu addr` åå­åºæ£æ¥ï¼è¿æ¯ examine å½ä»¤çç®åï¼å¯ä»¥ä½¿ç¨ $eip ä½å°åï¼åæ°ä½ç¨ï¼
    - n ä¸ºéå¤æ°ï¼é»è®¤å¼ 1ï¼
    - f æå®æ ¼å¼ï¼å print å½ä»¤ä½¿ç¨ä¸æ ·çæ ¼å¼å­ç¬¦è®¾ç½®ã
    - u æå®åä½ï¼é»è®¤æ¯ w Wordsã

ä¾å¦ä¸åå­æ£æ¥å½ä»¤åå«ä»¥é»è®¤çæ¹å¼åèªå®ä¹çæ¹å¼æ£æ¥åå­ï¼

    x/16    0x401462    æ£æ¥ 0x401462 å¤ 16 ä¸ªå­èåå®¹
    x/16w   0x401462    æ£æ¥ 0x401462 å¤ 16 ä¸ªå­ï¼å± 32 å­èåå®¹
    x/16db  0x401462    æ£æ¥ 0x401462 å¤ 16 ä¸ªå­èåå®¹ï¼åè¿å¶æ¾ç¤º
    x/4xb   $eax        æ£æ¥å¯å­å¨æåçå°åç 4 ä¸ªå­èåå®¹

    x/10i $pc
    x/10i $eip

è¦æ³¨æ GAS æ±ç¼ä½¿ç¨ç AT&T ä¸ Intel çè¯­æ³å·®å¼ï¼$ æ¬åºè¡¨ç¤ºç«å³æ°ï¼ä½å¨ gdb å½ä»¤ä¸­ä½¿ç¨å°±å½ä½å¯¹å¯å­å¨çå¼ç¨ï¼ä¾å¦æ£æ¥ EDX æåçåå­ï¼

    (gdb) i r edx
    edx            0xf07c4             985028
    (gdb) x/8x $edx
    0xf07c4:        0x53    0x83    0xec    0x20    0xe8    0x31    0xc9    0xff
    (gdb) x/8x 0xf07c4
    0xf07c4:        0x53    0x83    0xec    0x20    0xe8    0x31    0xc9    0xff


è¿æå¸¸ç¨ disassemble åæ±ç¼å½ä»¤ï¼ç´æ¥æå®ä¸ä¸ªåå­å°åå°±å¯ä»¥åæ±ç¼äºï¼å®ä¼ç´æ¥å°åå«æå®å°åçæ´ä¸ªå½æ°é½åæ±ç¼åºæ¥ãä¹å¯ä»¥æå®åå­åºåï¼è¿æ ·éå®åºååï¼å°æç§æå®çè¾¹çå¼å§å¤è¿è¡åæ±ç¼ï¼å æ­¤å³ä½¿åç§»ä¸ä¸ªå­èï¼å¾å°çç»æä¹ä¼æå·¨å¤§å·®å«ã

å¯ä»¥æå®åæ°æ¥éæ©æ··åæºä»£ç (m/s)æç¬¦å·(r)æå°ï¼åºæ¬æ ¼å¼å¦ä¸ï¼åå­å°åå¯ä»¥ç´æ¥ä»¥æ°å¼ç»åºï¼æèéè¿å½æ°åãPC å¯å­å¨æ¥ç»åºï¼

    disassemble
    disassemble start,end
    disassemble start,+length
    disas /m OnInit, $pc+4

    disas $pc, +10
    disas $eip,+10

å¨æ²¡æ Symbol Table çæ¶åï¼ä¸è½èªå¨ç¡®å®å½æ°è¾¹çï¼æä»¥å°±éè¦æå®èµ·æ­¢ç¹ã


## ð Printing Expression

*Printing Expression* ä½¿ç¨ `print` è¡¨è¾¾å¼æå°å½ä»¤ï¼ç±»ä¼¼ x åå­æ£æ¥å½ä»¤ï¼é¤äºç¨æ¥æ¾ç¤ºä¿¡æ¯ï¼è¿å¯ä»¥æå°ç¨åºçåéæ°æ®ï¼å½æ°ï¼æå¯¹è±¡ç­ã

- *$NUM* å¼ç¨ NUM åºå·æå®çä¸´æ¶åéï¼*$* å *$$* åå«è¡¨ç¤ºå¼ç¨æåä¸¤æ¬¡è¾åºåå®¹ã
- *$$NUM* å¼ç¨å¾å  NUM ä¸ªè¾åºåå®¹ã
- *$* å¼å¤´çåç§°ç¨æ¥è¡¨ç¤º CPU å¯å­å¨ï¼å¦ $eax $eipã
- ä½¿ç¨èµå¼è¡¨è¾¾å¼ä¸ºæ¹ä¾¿åéèµå¼ï¼å¦ p $a = 1, p $b = 2, p $a + $bã
- `{TYPE}ADREXP` è¡¨ç¤º TYPE çæ°æ®ç±»åçæ°æ®ï¼ä½äºå°å ADREXPï¼ä¾å¦ `p Foo 0x400`ã
- è¡¨è¾¾å¼ä¹åå¯ä»¥è®¾ç½®æ ¼å¼å­ï¼å x å½ä»¤å±ç¨æ ¼å¼å­ç¬¦ï¼å¯ä»¥ç¨ help x æ¥è¯¢ã

>print [[options] --] expr
>print [[options] --] /f expr

>print [Expression]
>print $[Previous value number]
>print {[Type]}[Address]
>print [First element address]@[Element count]
>print /[Format] [Expression]

å¦ main å½æ°ãåéãå¯å­å¨çåå®¹æå°åæå°ï¼

    p main
    p &var
    p /x $edx

å¨ç¨åºè¿è¡è°è¯è¿ç¨ä¸­ï¼ä½¿ç¨ Print å½ä»¤æ¥æ§è¡å½æ°ï¼

> (gdb) p/x malloc(20)
> $3 = (void *) 0x6ce81808
> (gdb) p/x strcpy($3, "my string")
> $4 = 236128
> (gdb) x/s $3
> 0x6ce81808: "my string"
> (gdb) p/x free($3)
> $5 = 1

å¦å¤ï¼ä¸ºäºç¾åæå°ï¼ä½¿ç¨å°ä»¥ä¸ Debugging with GDB - Print Settingsï¼è¿äºåè½å C++ è°è¯å³ç³»æ¯è¾å¯åã

- `set print pretty on` è®¾ç½®ç¾åç»æä½çæå°ã
- `set print union on` æå¼èåä½çæ ¼å¼åæ¾ç¤ºï¼
- `set print array on` æå¼æ°ç»çæ ¼å¼åæ¾ç¤ºï¼
- `set print demangle on` æå¼ C++ åå­å¤åæ¾ç¤ºï¼
- `set print asm-demangle` on æå¼æ±ç¼å¯¹è±¡åå­å¤åæ¾ç¤ºï¼
- `set demangle-style style` è®¾ç½® C++ åå­å¤åæ¹æ¡ï¼
    - auto å°ç± GDB èªå¨å¤çï¼
    - gnu  æ GNU C++ compiler (g++) åå­ç¼ç æ¹æ¡å¤çï¼
    - hp   æ HP ANSI C++ (aCC) åå­ç¼ç æ¹æ¡å¤çï¼
    - lucid æ Lucid C++ compiler (lcc) åå­ç¼ç æ¹æ¡å¤çï¼
    - arm  æ C++ Annotated Reference Manual æ¹æ¡ï¼
- `set print object on` æå°å¯¹è±¡æ¶ï¼éè¿ virtual function table ç¡®è®¤çå®çæ´¾çç±»å½¢ï¼èä¸æ¯å£°æç±»åã
- `set print static-members on` æå° C++ éæå½æ°ï¼é»è®¤å¼å¯ã
- `set print vtbl on` æ ¼å¼åæå° C++ èå½æ°è¡¨ï¼æ¨èæå¼ãä½ä¸æ¯æ HP ANSI C++ compiler aCCã

å° set å½ä»¤æ¹å show å½ä»¤ï¼å¹¶ä¸å»æåé¢ç on/off åæ°å¼ï¼å¯ä»¥æ¥è¯¢å½åçè®¾ç½®å¼ã

## â¡ GDB Sessions demo

ä»¥ä¸æ¯ä¸ä¸ªç¨åºè°è¯çä¸è¬è¿ç¨ï¼

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


ä»¥ä¸è°è¯ä¸ä¸ª Hello World ä½ä¸ºæ¼ç¤ºï¼

```c
#include <stdio.h>

void main(){
  printf("Hello World!");
}
```

ä½¿ç¨ GCC ç¼è¯æ¶ï¼ä½¿ç¨ `-g` æ `-ggdb` çæç¨äºè°è¯çç¬¦å·ä¿¡æ¯ï¼ä¸ºäºè§£è°è¯ç¬¦å·çä½ç¨ï¼ä»¥ä¸ç¼è¯çæä¸¤ä¸ªç¨åºï¼ç¸å½äº ReleaseãDebug ä¸¤ä¸ªçæ¬ï¼

```sh
gcc -o hello hello.c
gcc -o hello_d -g hello.c
```

æ§è¡ gdb å½ä»¤æ¶ï¼å¯ä»¥ç´æ¥æå®è¦è°è¯çç¨åºï¼ä¹å¯ä»¥åè¿å¥è°è¯çé¢åï¼åéè¿ `file` æ `exec` å½ä»¤å è½½éè¦è°è¯çç¨åºã

ä»¥ä¸å°è¯å è½½æ è°è¯ä¿¡æ¯ç Release çæ¬ä¼åç°æç¤ºæ²¡æè°è¯ç¬¦å·ï¼

```sh
(gdb) file hello_d
Reading symbols from hello_d...
(gdb) file hello
Load new symbol table from "hello"? (y or n) y
Reading symbols from hello...
(No debugging symbols found in hello)
```

å¦æå°è¯è°è¯ Release çæ¬è¿ä¸ªç¨åºï¼ä¼åç°è°è¯å¨å¹¶ä¸è½åç¡®å°ç»åºæ­ç¹è°è¯ä½ç½®çç¸å³ä¿¡æ¯ï¼åæ¬æºä»£ç è¡å·ãåå®¹ç­ï¼å¹¶ä¸åæ­¥æ§è¡æ¶ä¼è¿å¥ C è¯­è¨æ ååºåé¨ï¼åæ ·ä¹æç¤ºæ¾ä¸å°æ ååºçæºä»£ç æä»¶ï¼å ä¸ºå½åç¯å¢ä¸­å¹¶æ²¡æè®¾ç½® C è¯­è¨æ ååºçæºä»£ç ä½ç½®ï¼

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

å¯¹æ¯ Debug çæ¬çè°è¯ï¼æ§è¡è¿è¡å½ä»¤åï¼ç´æ¥å°æ­ç¹å¤çæºä»£ç ä¹æ¾ç¤ºåºæ¥äºï¼

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

è°è¯è¿è¡æ¶ï¼å¯ä»¥éè¿æä½ç³»ç»çä»»å¡æ¥è¯¢å½ä»¤è§å¯è¢«è°è¯çè¿ç¨ï¼

```sh
$ tasklist |findstr hello_d
hello_d.exe                   296 Console                    1      2,716 K
```

è¦ç»æè°è¯è¿ç¨ï¼å¯ä»¥ä½¿ç¨ kill æ detach å½ä»¤ã



## â¡ Cross-Compiling
- [GCC Cross-Compiler - OSDev Wiki](https://wiki.osdev.org/GCC_Cross-Compiler)
- [GNU Arm Embedded Toolchain](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm)
- [gcc-arm-none-eabi package in Ubuntu](https://launchpad.net/ubuntu/+source/gcc-arm-none-eabi)
- [GNU Arm Embedded Toolchain](https://launchpad.net/gcc-arm-embedded/+download)
- [binutils-arm-none-eabi](https://packages.debian.org/jessie/gcc-arm-none-eabi)
- [æ¸åå¤§å­¦å¼æºè½¯ä»¶éåç«](https://mirrors.tuna.tsinghua.edu.cn/armbian-releases/_toolchain)
- [CGDB Manual 0.7.1](http://cgdb.github.io/docs/cgdb.html)
- [Code::Blocks Binary releases with MinGW](https://www.codeblocks.org/downloads/binaries/)
- [MSYS2](https://www.msys2.org/docs/what-is-msys2/)

å¨è°è®ºäº¤åç¼è¯æ¶ï¼ä¸»è¦æ¶å CPU æ¶æåæä½ç³»ç»ä¸¤æ¹é¢é®é¢ï¼å½ç¶è¿æ¶åå°å½åå·¥ä½å¹³å°ï¼

- CPU æ¶æç¸åãæä½ç³»ç»ä¸åçäº¤åç¼è¯ã
- CPU æ¶æä¸åãæä½ç³»ç»ç¸åçäº¤åç¼è¯ã
- CPU æ¶æåæä½ç³»ç»é½ä¸åçäº¤åç¼è¯ã

å¦æéè¦è¿è¡äº¤åè°è¯ï¼æ¯å¦å¨ Windows ç³»ç»ä¸è°è¯åµå¥å¼ç¨åºï¼åºäº ARM æ¶æå Linux ç³»ç»ï¼é£ä¹å°±éè¦å¨ GDB ç¼è¯éç½®èæ¬ä¸­æå® --targetï¼

    ./configure --target=arm-linux
    ./configure --target=i686-pc-linux-gnu

ä½¿ç¨ ./configure --help å¯ä»¥æ¥è¯¢å¸®å©ä¿¡æ¯ï¼System types æä¸ä¸ªåæ°è®¾ç½®ï¼gdbserver ä¹ä¸æ ·ï¼åªéè¦è¿å¥ gdb/gdbserver å­ç®å½ä¸ç¼è¯:

    System types:  
      --build=BUILD     configure for building on BUILD [guessed]  
      --host=HOST       cross-compile to build programs to run on HOST [BUILD]  
      --target=TARGET   configure for building compilers for TARGET [HOST]System types:  
  
- build è¡¨ç¤ºæ§è¡ç¼è¯å·¥ä½çå¹³å°ï¼ä¼èªå¨æ¨æµå½åçç³»ç»ã  
- host è¡¨ç¤ºç¼è¯å¾å°ç gdb è¦è¿è¡çå¹³å°ã
- target è¡¨ç¤º gdb è§£æå¨è¦è§£æä»ä¹å¹³å°ç ABIï¼å³è§£æä»ä¹å¹³å°çå¯æ§è¡æä»¶ã  

GCC ä½¿ç¨ç»ä¸çå½åè§åï¼`architecture-vendor-os`ï¼æ¯å¦ i686-pc-windowsï¼i686-pc-linux-gnuï¼å¦æåªæå® CPU æ¶æï¼è¡¥å¨é»è®¤å¼ï¼å¦åªæå® ARM å°±ä¼è¡¥å¨ä¸º arm-unknown-noneã

å¦æéè¦è¿è¡äº¤åç¼è¯ä»¥å®ç° cross-debuggingï¼éç½®èæ¬ä¼æ£æ¥ç¸åºçç¼è¯å¨æ¯å¦å·²ç»å®è£ï¼æ¯å¦å¨ Linux ä¸­ç¼è¯ Windows å¹³å°ä¸è¿è¡ç gdb ååæ¶éè¦ i386-windows-gcc æ i686-pc-linux-gnu-gcc è¿æ ·çç¼è¯å¨ã

GNU æ¨åºçç ARM äº¤åç¼è¯å·¥å· GNU Arm Embedded Toolchain æ¯ä¸ä¸ªå¼æºç ARM å·¥å·é¾ï¼éç¨äº Cortex-M0/M0+/M3/M4, Cortex-R4/R5/R7 å Cortex-A* ç³»åå¤çå¨ï¼åæ¬ GNU ç¼è¯å¨ï¼GCCï¼ï¼ä»¥åGDBï¼å¯ç¨äº Windowsï¼Linuxï¼MacOS ä¸çäº¤åç¼è¯ã

ä»¥ GNU Arm Embedded Toolchain äº¤åç¼è¯å·¥å·é¾ gcc-arm-none-eabi çå½åè§åä¸ºä¾ï¼

    arch [-vendor] [-os] [-(gnu)eabi]

- arch - ä½ç³»æ¶æï¼å¦ ARMï¼MIPSï¼
- vendor - å·¥å·é¾æä¾åï¼è¿éå°±æ¯ ARM å¬å¸æä¾çå·¥å·ã
- os - ç®æ æä½ç³»ç»
- eabi - åµå¥å¼åºç¨äºè¿å¶æ¥å£ Embedded Application Binary Interface

å½ä»¤å½ååæ¯åç¼ç¸åºçå½ä»¤åï¼å¦ arm-linux-gnueabi-gcc è¡¨ç¤ºè¿æ¯ä¸ä¸ª gcc å½ä»¤ï¼å¯ç¨äº ARM æ¶æäº¤åç¼è¯ï¼åæ¬è£¸æºç¨åºãu-bootãLinux kernelãfilesystemã

è¿éè¯´è¯´ Windows å¹³å°ä¸ä½¿ç¨ GCC å¥ä»¶ï¼GCC åæ¬æ¯ç¨äº Linux ç³»ç»çç¼è¯å¥ä»¶ï¼ä½ç±äºå¤ªå¥½ç¨ååè´¹ï¼ææå¾é¡¹ç®å° GCC ç§»æ¤å° Windows å·¥ä½ï¼å¸¸ç¨çç TDM-GCCãCygwinãMsysãMinGW-64wï¼æç°æç¼è¯å¥½çå·¥å·ï¼ä¸è½½å³å¯ä½¿ç¨ã

ä¸å¾ä¸è¯´è¯´ç»´æ¤æ¯è¾å¥½ç Msys 2.0ï¼å®æ¬èº«åºäº Cygwin æå»ºï¼ç»åäº Arch Linux ç pacman ä¾èµç®¡çå·¥å·ï¼ä½¿ç¨å®å¯ä»¥å¾æ¹ä¾¿å°å®è£éè¦çç»ä»¶ï¼æ¯å¦ ARM åµå¥å¼å¼åéè¦ä½¿ç¨ GCC äº¤åç¼è¯ï¼é£ä¹å°±å¯ä»¥éè¿ pacman å®è£ç°æçç¼è¯å¥ä»¶ã

Msys æä¾äºä¸ä¸ª msys2_shell èæ¬ï¼å¯ä»¥éè¿å®æ¥éç½®ä¸åå·¥å·çè¿è¡ç¯å¢ï¼åªéè¦å¨ç¸åºç®å½ä¸å®è£å¯¹åºçå·¥å·å½ä»¤å³å¯ä½¿ç¨ï¼

    msys2_shell -mingw32
    msys2_shell -mingw64
    msys2_shell -ucrt64
    msys2_shell -clang64
    msys2_shell -msys

å¯ä»¥éæ©å®è£æ´ä¸ªå·¥å·åï¼æèåç¬å®è£æå®çå·¥å·:

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

åæèæ¯ Windows + Intel x86 æ¶æå¹³å°ç GCC 10.2.0 ç¼è¯å¥ä»¶çå®è£ï¼åæ ·å¯ä»¥éæ©æ´ä¸ªå·¥å·ç»æåç¬å®è£ï¼

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

éå¥ (GDB) 9.2ï¼å¹¶ä¸å¯ç¨ --enable-tui ç¼è¯ï¼æ¯æå¼å¯ TUI è°è¯çé¢ã

è¿æä»¿ vi çå¿µç Curses debugger v0.7.1ï¼ä½¿ç¨ä¸­è¿æ¯è§å¾ TUI æ´å¥½ç¨ï¼

```sh
pacman -S cgdb
```

CGDB å TUI è°è¯çé¢å¾ç¸ä¼¼ï¼å°±å¨å­ç¬¦çé¢ä¸æä¾çªå£åæ¨¡æï¼å°å­ç¬¦çé¢èææä»¥ä¸çªå£ï¼å¯ä»¥åæ¢ï¼

- Source Window
- GDB Window
- File Dialog
- Status Bar

å¨ CGDB ä¸­æ¨¡ä»¿äº viï¼æä»¥å¯ä»¥è¿è¡æ¨¡å¼åæ¢ï¼

- ESC åæ¢å° CGDB æ¨¡å¼ï¼
- ç¶åæ i è¿å GDB çé¢æ¨¡å¼ã
- s è¿è¡åå®¹æ»å¨æ¨¡å¼ï¼q æ i éåºæ»å¨æ¨¡å¼ã

CGDB æ¨¡å¼å¿«æ·é®æä½ï¼

|       Keys       |                    Description                     |
|------------------|----------------------------------------------------|
| Ctrl-T           | Opens a new tty for the debugged program.          |
| Ctrl-W           | Toggle the window orientation.                     |
| [N]k or [N]up    | åä¸ç¿» N è¡åå®¹ã                                  |
| [N]j or [N]down  | åä¸ç¿» N è¡åå®¹ã                                  |
| h or left arrow  | Move left a line.                                  |
| l or right arrow | Move right a line.                                 |
| Ctrl-b or PgUp   | Move up a page.                                    |
| Ctrl-u           | Move up 1/2 a page.                                |
| Ctrl-f or PgDown | Move down a page.                                  |
| Ctrl-d           | Move down 1/2 a page.                              |
| gg               | Move to the top of file.                           |
| [N]G             | Move to the bottom of file or to a line number     |
| m[a-zA-Z]        | è®¾ç½®ä¸ä¸ªæ ç­¾ï¼å°å­æ¯å½åæä»¶ææï¼å¤§å­æ¯å¨å±ææã |
| '[a-zA-Z]        | è·³è½¬å°æå®æ ç­¾ã                                   |
| ''               | è·³è½¬å°æåè·³è½¬ä½ç½®ã                               |
| '.               | è·³è½¬å½åæ§è¡ä½ç½®ã                                 |
| /                | å½åä½ç½®å¼å§æç´¢ã                                 |
| ?                | åå°æç´¢ã                                         |
| n                | åä¸æç´¢ã                                         |
| N                | ååæç´¢ã                                         |
| spacebar         | å¨å½åä½ç½®è®¾ç½®ä¸ä¸ªæ­ç¹ã                           |
| t                | è®¾ç½®ä¸ä¸ªä¸´æ¶æ­ç¹ã                                 |
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

GDB æ¨¡å¼å¿«æ·é®ç±»ä¼¼ã

æ³¨æï¼å¨ Windows ä¸ä½¿ç¨ o æå¼å¯¹è¯æ¡ï¼ä¼å¡æ­» GDBã

æä»¶å¯¹è¯æ¡å¿«æ·é®ï¼

|        Keys       |                 Description                  |
|-------------------|----------------------------------------------|
| q                 | éåºå¯¹è¯æ¡ï¼è¿åæºä»£ç çªå£ã                 |
| k or up           | Move up a line.                              |
| j or down         | Move down a line.                            |
| h or left         | Move left a line.                            |
| l or right        | Move right a line.                           |
| Ctrl -b or PgUp   | Move up a page.                              |
| Ctrl -u           | Move up 1/2 a page.                          |
| Ctrl -f or PgDown | Move down a page.                            |
| Ctrl -d           | Move down 1/2 a page.                        |
| gg                | Move to the top of the file dialog.          |
| [N]G              | ç§»å¨å°åºé¨æ N è¡ã                          |
| /                 | search from current cursor position.         |
| ?                 | reverse search from current cursor position. |
| n                 | next forward search.                         |
| N                 | next reverse search.                         |
| enter             | Select the current file.                     |


CGDB æ¨¡å¼æ§è¡å½ä»¤ï¼

|          Command          |           Description           |
|---------------------------|---------------------------------|
| :c :continue              | Send a continue command to GDB. |
| :down                     | Send a down command to GDB.     |
| :e :edit                  | å è½½æä»¶å°æºä»£ç çªå£            |
| :f :finish                | Send a finish command to GDB.   |
| :help                     | æ¾ç¤ºå¸®å©ä¿¡æ¯ã                  |
| :logo                     | æ¾ç¤º CGDB Logoã                |
| :n :next                  | Send a next command to GDB.     |
| :q :quit                  | Quit CGDB.                      |
| :r :run                   | Send a run command to GDB.      |
| :start                    | Send a start command to GDB.    |
| :k :kill                  | Send a kill command to GDB.     |
| :s :step                  | Send a step command to GDB.     |
| :syntax                   | Turn the syntax on or off.      |
| :u :until                 | Send an until command to GDB.   |
| :up                       | Send an up command to GDB.      |
| :map lhs rhs              | ä¸º CGDB æ¨¡å¼åå»ºä¸ä¸ªæ°æ å°ã    |
| :unm lhs :unmap lhs       | å é¤ CGDB æ¨¡å¼ç°ææ å°ã        |
| :im lhs rhs :imap lhs rhs | ä¸º GDB æ¨¡å¼åå»ºæ°æ å°ã         |
| :iu lhs :iunmap lhs       | å é¤ç°æ GDB æ¨¡å¼æ å°ã         |
| :insert                   | Move focus to the GDB window.   |

æ­¤å¤è¿æéç½®å½ä»¤ï¼ä¾å¦è®¾ç½®é¢è² :set color Whiteã

è®¾ç½®é«äº®éç½®ï¼

    :hi group cterm=attributes ctermfg=color ctermbg=color term=attributes 
    :highlight group cterm=attributes ctermfg=color ctermbg=color term=attributes 
    :highlight Logo cterm=bold,underline ctermfg=Red ctermbg=Black 
    :highlight Normal cterm=reverse ctermfg=White ctermbg=Black 
    :hi Normal term=bold



## â¡ GDB: Debugging Remote Programs
- GDB: The GNU Project Debugger https://www.gnu.org/software/gdb/documentation/
- A Sample GDB Session https://sourceware.org/gdb/current/onlinedocs/gdb/Sample-Session.html
- Debugging Remote Programs https://sourceware.org/gdb/current/onlinedocs/gdb/Remote-Debugging.html
- Requirements for Building GDB https://sourceware.org/gdb/current/onlinedocs/gdb/Requirements.html
- The Architecture of Open Source Applications (Volume 2): GDB http://www.aosabook.org/en/gdb.html
- The Architecture Of Open Source Applications, Volume II Amy Brown, Greg Wilson https://2lib.org/book/2576350/69be9e
- 500 Lines or Less https://2lib.org/book/5590896/0707e7

è¿å°èåå®¹æ¯éç¹ï¼GDB Remote Debugï¼éè¦ä»¥ä¸è¿äºå¾å®¹ææ»¡è¶³çæ¡ä»¶ï¼

- æ¬å°ä¸»æº: macOS / Linux / Windows å¯ä»¥è¿è¡ gdb å³å¯ï¼å¹¶ä¸éè¦è¢«è°è¯ç¨åºçè°è¯ç¬¦å·æä»¶ã
- ç®æ ä¸»æº: ä»»ä½æ¯æ gdbserver å½ä»¤çç³»ç»ï¼å¹¶å è½½è¿è¡è¢«è°è¯çç¨åºã
- ç»ä¸çç³»ç»å CPU æ¶æï¼æ¯å¦ Windows ä¸çç¨åºä¸è½æ­£ç¡® Linux ä¸è¿è¡ï¼äº¤åè°è¯éè¦äº¤åç¼è¯ç GDBï¼å³è¿è¡äº Windows ä½è°è¯ç®æ ä¸º Linuxã

å·¥ä½ç«ä½¿ç¨ä»»ä½å¯ä»¥è¿è¡ gdb çä¸»æºï¼è¢«è°è¯çç®æ æºå¨éè¦æ¯æ gdbserver å³å¯ï¼ç¶åå¨ç®æ ä¸»æºä¸éè¿ gdbserver è¿è¡å°è¦è°è¯çç¨åºï¼å¨æ¬å°ä¸»æºè¿è¡ gdb å¹¶å è½½ç¨åºçè°è¯ç¬¦å·æä»¶ãéå¸¸ï¼å¯ä»¥ä¸º gdb æå®éç½®æä»¶ï¼GDB Remote Debug configurationï¼æä»¶åä¸º .gdbinitã


å¯å¨ GDB çæ¶åä¼çå°æç¤ºï¼å½åå¤çä»ä¹ CPU æ¶æä¸ï¼

    This GDB was configured as "x86_64-w64-mingw32".

åæ ·çäºè¿å¶æ°æ®ä½¿ç¨ä¸åç CPU æ¶æè§£æåºæ¥çæä»¤æ¯ä¸åçï¼ç¨ gdb `set architecture` å½ä»¤è®¾ç½®æ­£ç¡®ç CPU æ¶æï¼

```sh
(gdb) set architecture
Requires an argument. Valid arguments are i386, i386:x86-64, i386:x64-32, i8086, i386:intel, 
i386:x86-64:intel, i386:x64-32:intel, i386:nacl, i386:x86-64:nacl, i386:x64-32:nacl, auto.   
```

è°è¯åæ ¸è¿ç¨ç§ï¼ä¹å¯è½å ä¸ºæ§è¡äº CPU æ¨¡å¼è½¬æ¢æä»¤ï¼èå¤äºä¸åçæ¶æã


GDB æ´ä¸ªè°è¯ç³»ç»åæä¸¤ä¸ªé¨åï¼

- Symbol ç¬¦å·ç«¯ï¼è¢«è°è¯ç¨åºçç¬¦å·ä¿¡æ¯ï¼åå«å½æ°åï¼åéåï¼åéç±»åï¼è¡å·ï¼å¯å­å¨ä½¿ç¨æåµç­ç­ã
- Target ç®æ ç«¯ï¼æ¶åå°ç®æ ç³»ç»çææ§ï¼åæ¬å¯å¨åç»æ­¢ç¨åºï¼è¯»åæä¿®æ¹åå­åå¯å­å¨ï¼ææä¿¡å·ç­ç­ã

è¿ä¸¤ä¸ªç³»ç»å¯ä»¥æ¯å¨åç¬ç gdb è¿ç¨ä¸­ï¼å³æ¬å°è°è¯ï¼ä¹å¯ä»¥åå«å¨ gdb å gdbserver ä¸¤ä¸ªç¬ç«è¿ç¨ä¸­ï¼å³è¿ç¨è°è¯ï¼å®ä»¬éè¿ socket æä¸²å£ USB è¿æ¥ã

å¯¹äºåµå¥å¼ç³»ç»çäº¤åè°è¯ï¼è¿ç¨ææä¸åï¼ç®æ ç«¯éè¿æ°æ®çº¿åéæ¶æ¯åï¼ç¶åç­å¾åºç­ã


Stub è¿ä¸ªè¯ææ®å­çææï¼å¨ Windows ç¨åºä¸­ï¼ä¸ºé²æ­¢å¨ DOS ç³»ç»ä¸­è¿è¡ï¼éå¸¸ç¼è¯æ¶ä¼å¨çæçå¯æ§è¡ç¨åºæä»¶ä¸­æå¥ä¸æ®µ DOS å¯ä»¥è¿è¡çä»£ç ï¼åªä¸ºäºæå°ä»¥ä¸ä¿¡æ¯ï¼è¿æ®µç¨åºä»£ç å°±å« DOS Stubï¼

> This program cannot be run in DOS mode

å¨ gdbserver ç¨åºä¹ä½¿ç¨è¿ä¸ªè¯ï¼å®å¯ä»¥ç§°ä½ä¸º debugging stub ç¨åºï¼æ¯ç¨äº Unix-like ç³»ç»çæ§å¶ç¨åºï¼åè®¸ä½ éè¿ remote å extended-remote æ¹å¼é¾æ¥ gdb è¿è¡ç¨åºè°è¯ï¼ä½ä¸éè¦é¾æ¥å¸¸è§ç debugging stub ç¨åºãè¿ä¸ªç¨åºå¨ç®æ ä¸»æºä¸åäºä¸äºä¸ gdb éè®¯çå·¥ä½ï¼å®æ¬èº«æ¯ gdb å°å¤äºï¼ä¹æ²¡æå®å¨æªæ½ï¼æä»¥ä¸å¯ä»¥å¨å¬ç½ç¯å¢ä¸­ä½¿ç¨ï¼ä½æ¯æ¹ä¾¿è¿è¡ç§»æ¤ã

å®ç°ä¸ä¸ª stub æå¡ç¨åºå°±æ GDB çè¿ç¨åè®®æä¾è¿æ¥æ¯æï¼è¿ä¸ªåè®®æ²¡æåºå®çåå­ï¼å¯ä»¥å« Remote Protocol ä¹å¯ä»¥æå®æ¹ææ¡£å« RSP - Remote Serial Protocolã

åè®®æ¬èº«æ¯ç®åçï¼åå° 1980 å¹´ä»£ï¼å½æ¶çåµå¥å¼è®¾å¤åå­æä»¥ KB ä¸ºåä½ï¼ä¸¾ä¸ªåå­ï¼åè®®å `$g` ä¹å°±æ¯ GBD æ¾ç¤ºç 'g'packet æ¥è¯¢ææå¯å­å¨ï¼å¹¶æå¾è¿åææå¯å­å¨çå­èæ°æ®ï¼åè®¾å®ä»¬çæ°éãå¤§å°åé¡ºåºç¬¦å GDB é¢æãåè®®æå¾æ¯åéä¸ä¸ªåå°±åºè¯¥å¾å°ä¸ä¸ªåå¤åï¼åè®¾è¿æ¥æ¯å¯é çï¼åªéè¦åä¼ ä¸ä¸ªé¢å¤çæ ¡éªç ï¼ä¾å¦ `$g` åå¾å°çåå¤å°±å¦ `$g#67`ã

å¦æéè¦ï¼å¯ä»¥å¼åèªå·±ç debugging stubs ç¨åºï¼å¦å¨åµå¥å¼å®æ¶ç³»ç»å¼åä¸­ï¼éè¦å¼åå¯ä»¥å¨ ARM å¤çå¨ä¸è¿è¡çæ¬ã

å¨éè¦è¿ç¨è°è¯çç¨åºä¸ï¼é¾æ¥ä¸ä¸ª debugging stub ç¨åºï¼å®ç° RSP åè®®å°±å¯ä»¥ã

GDB æºä»£ç ä¸­éå¸¦äºä»¥ä¸ Stub ç¨åºï¼

- i386-stub.c å¯¹åº CPU æ¶æ Intel 386
- m68k-stub.c å¯¹åº CPU æ¶æ Motorola 680x0
- sh-stub.c å¯¹åº CPU æ¶æ Renesas SH
- sparc-stub.c å¯¹åº CPU æ¶æ SPARC
- sparcl-stub.c å¯¹åº CPU æ¶æ Fujitsu SPARCLITE


å¨ç®æ ä¸»æºè¿è¡ gdbserver æå¡ï¼åªéè¦å¯æ§è¡ç¨åºï¼ä¸éè¦ç¬¦å·æä»¶ï¼è¿è¡å½ä»¤éè¦æå®éä¿¡æ¹å¼ï¼ä¸²å£æ TCP æ¹å¼ï¼æè stdio æä»¶ï¼

```sh
# target> gdbserver comm program [ args â¦ ]

# - or stdio to use stdin/stdout of gdbserver.
target> gdbserver stdio hello out.txt

# communicate with GDB over the serial port /dev/com1:
target> gdbserver /dev/com1 emacs foo.txt

# To use a TCP connection instead of a serial line:
target> gdbserver host:2345 emacs foo.txt
```

ä½¿ç¨ stdio è¿æ¥æ¹å¼å¯ä»¥å ssh ç»å gdbserver ä½¿ç¨ï¼

```sh
(gdb) target remote | ssh -T hostname gdbserver - hello
```

éé¡¹ `-T` è¡¨ç¤ºä½¿ç¨ ssh èä¸éè¦è¿ç¨ç pty ç»ç«¯ï¼å¹¶ä¸ä¸æ³å»å¤çè½¬ä¹å­ç¬¦ï¼èè¿ä¸ªåæ°æ¯é»è®¤çãæå® stdio è¿æ¥æ¹å¼ç gdbserver æä¸ä¸ª /dev/null ä½ä¸º stdinï¼è stdout å stderr éè¿åä¸ç®¡éåéç»å·²ç»è¿æ¥ç gdbã


å¯ä»¥å°è°è¯æå¡éå å°å·²ç»å¨è¿è¡çç¨åºä¸ï¼æå®è¿æ¥æ¹å¼ååæå®è¿ç¨ PIDã

å¯ä»¥æ ¹æ®è¿ç¨åå­æ¥è°è¯ï¼èä¸æ¯ä½¿ç¨è¿ç¨ PIDï¼éè¿ pidof å½ä»¤å¯ä»¥è·åæå®è¿ç¨åç§°ç PIDï¼å¦ææ¯å¤çº¿ç¨ç¨åºï¼å¯ä»¥ä½¿ç¨ -s è¿åç¬¬ä¸ä¸ª PIDã

```sh
# Attaching to a Running Program with pid
target> gdbserver --attach comm pid
target> gdbserver --attach comm `pidof program`
```

å¦å¤ GDB 8.1 ä¸è½å¨ Windows ä¸è¿è¡ gdbserverï¼Bug 23158 - gdbserver no longer functional on Windowsï¼

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

è¿ç¨è°è¯æä¸¤ç§è¿æ¥æ¨¡å¼ï¼remote å extended-remote æ¨¡å¼ï¼å®ä»¬çåè½å·®å¼å¦ä¸åä¸ªæ¹é¢ï¼

- Result of detach or program exit
- Specifying the program to debug
- The run command
- Attaching

`remote` æ¨¡å¼ç¹ç¹ï¼

- å½ç¨åºéåºæè±é©æ¶ï¼GDB å°±ä¸ç®æ æ­å¼è¿æ¥ï¼gdbserver ä¼éåºã
- å¿ééè¿ gdbserver å½ä»¤è¡æå®è¦è°è¯çç¨åºï¼æèä½¿ç¨ --attach éé¡¹éçå°å·²è¿è¡çç¨åºä¸ã
- ä¸æ¯æ `run` å½ä»¤ï¼ä¸æ¦è¿æ¥å»ºç«ï¼è¢«è°è¯ç¨åºå°±å·²ç»å¤äºè¿è¡ä¸­ï¼å¯ä»¥ä½¿ç¨å¶å®è°è¯å½ä»¤ã
- ä¸æ¯æ GDB ä½¿ç¨ attachï¼éè¦ä½¿ç¨ gdbserver éçå°è¿è¡ä¸­çç¨åºï¼å¿éæå® --attach éé¡¹ã

`extended-remote` æ¨¡å¼ç¹ç¹ï¼

- å½ç¨åºéåºæè±é©æ¶ï¼GDB ä¿æä¸ç®æ çè¿æ¥ï¼å¯ä»¥ä½¿ç¨ monitor å½ä»¤æå®ç®æ ï¼æèåéå½ä»¤ä½¿ gdbserver éåºã
- å¯ä»¥éè¿ gdbserver å½ä»¤è¡æå®ï¼æèå è½½æå®ç¨åºï¼è¿å¯ä»¥å¨ GDB è¿æ¥ç®æ ä¸»æºååéçå°å·²è¿è¡çç¨åºä¸ã
- æ¯æ `run` å½ä»¤ï¼å¹¶ä¸éè¿ `set remote exec-file` æ¥æå®ç®æ ä¸»æºè¿è¡çç¨åºï¼æ¯æä¼ è¾å½ä»¤è¡åæ°ï¼ä½ééç¬¦æ©å±å I/O éå®åé¤å¤ã
- è¿æ¥ç®æ ä¸»æºåï¼æ¯æ GDB ä½¿ç¨ attach å½ä»¤æ¥éçå°è¿è¡ä¸­çç¨åºï¼å¦æä½¿ç¨ gdbserver éè¦æå® --attach éé¡¹ã


å¨æ¬å°ä¸»æºä¸å¯ä»¥ä½¿ç¨çå½ä»¤åè `help target`ï¼æèä½¿ç¨ `apropos target` æç´¢ç¸å³å½ä»¤ä¿¡æ¯ï¼

```sh
info target -- Names of targets and files being debugged.
disconnect -- Disconnect from a target.

target extended-remote -- Use a remote computer via a serial line, using a gdb-specific protocol.
target remote -- Use a remote computer via a serial line, using a gdb-specific protocol.
```

ç¤ºèï¼å¨ç®æ ä¸»æºä¸è¿è¡è°è¯æå¡çå¬æ¬æºç 1234 ç«¯å£ï¼IP å°åçç¥äºï¼ç¶åå¨æ¬å°ä¸»æºè¿è¡ gdb å¹¶è¿æ¥å°ç®æ ä¸»æºçå¬ç IP åç«¯å£ä¸ï¼

```sh
# remote target host
target> gdbserver :1234 hello_d

# local host
(gdb) target remote :1234 hello_d
```

ä¹å¯ä»¥å¨è¿å¥è°è¯çé¢ååè¿æ¥ï¼è¿æ ·å¯ä»¥ä½¿ç¨ `file` å½ä»¤å è½½ç¬¦å·æä»¶ï¼

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

ä»¥ä¸è¿æ¥æ¯ Winodws ä¸è¿è¡ gdb è¿æ¥ Linux ç®æ ä¸»æºï¼è¿ç§æ¶æä¸ä¸è´çè°è¯æ¯ä¸æ­£å¸¸çï¼ä¸é¢å·²ç»æç¤ºæ°æ®è§£æåºéäºï¼å¯ä»¥ä½¿ç¨ gdb `set architecture` å½ä»¤è®¾ç½®

ä¸éç½®çåç«¯è¿æ¥è¿å¯è½å¯¼è´æ¥æ¶æ°æ®æ ¼å¼ä¸ä¸è´ï¼äº§çéè¯¯ä¿¡æ¯ Remote 'g'packet reply is too longï¼å¯ä»¥å¨ gdb è¿æ¥ç®æ ä¸»æºåï¼set architecture i386:x86-64:intel è®¾ç½®æ¶æã

ä¸é¢è¿æç¤ºå·²ç»éè¿ç®æ ä¸»æºä¼ è¾äºç¬¦å·æä»¶ï¼è¿å¯è½å ä¸ºç½ç»ç¶æå½±åèåå¾å¾æ¢ãå¯ä»¥éè¿æ¬å°æ§è¡å½ä»¤ `set sysroot` ä»æ¬å°å è½½ç¬¦å·æä»¶æ¥é¿åä»è¿ç¨ä¸»æºè¯»åæä»¶ãæå®ç®å½æ¶ï¼åºè¯¥æå®åå«ç®æ æ¶æåºæä»¶çç®å½ï¼å­ç®å½åºè¯¥æ¯å¯¹åºçæ¶æç®å½ã

```sh
set sysroot [Directory]
set sysroot remote:/
set sysroot remote:[Remote directory]
set solib-absolute-prefix [Directory]
show sysroot
```

ä»¥ä¸ç¤ºèï¼éè¿ TCP 1234 ä»¥ extended-remote æ¨¡å¼ä¸ç®æ ä¸»æºè¿æ¥ï¼ææ­¥è¿è¡ç¨åºï¼å¹¶ä¸å¨ç®æ ä¸»æºä¸è¾åºè¿è¡ç»æï¼

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

è¿æ¥ç®æ ä¸»æºåï¼å¯ä»¥éè¿ monitor å½ä»¤åéæä»¤ï¼

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

å¯ä»¥ç¨ monitor å gdbserver åéç»æå½ä»¤ï¼æèä½¿ç¨ kill å½ä»¤åéç»æä¿¡å·ï¼

```sh
$ kill -s SIGINT `pidof gdbserver`
```

æ¶åæä»¶ä½¿ç¨ remote å½ä»¤ï¼

```sh
# Copy file from the host system (the machine running GDB) to the target system.
remote put hostfile targetfile

# Copy file from the target system to the host system.
remote get targetfile hostfile

# Delete targetfile from the target system.
remote delete targetfile
```

## â¡ VSCode & gdb
- Configuring C/C++ debugging https://code.visualstudio.com/docs/cpp/launch-json-reference
- C/C++ for Visual Studio Code https://code.visualstudio.com/docs/languages/cpp
- Configure launch.json for C/C++ debugging https://code.visualstudio.com/docs/cpp/launch-json-reference
- https://github.com/microsoft/vscode-cpptools

VScode æä¾äº CPP æ©å±ï¼å¯ä»¥å¾æ¹ä¾¿å°è°è¯ C++ ç¨åºã

éè¦å®è£ MinGW ä»¥æä¾ç¼è¯å·¥å·å gdb è°è¯å¨ï¼å¯ä»¥å¨ VSCode ä»»å¡éç½® tasks.json ä¸­è®¾ç½®ç¼è¯å½ä»¤ä»¥çæè°è¯ä¿¡æ¯ï¼ä½¿ç¨ -g åæ°ï¼å¦åå°±åªè½åæ±ç¼è°è¯ï¼

    setup tasks in Visual Code (gcc -g FILE -o FILE.exe)
    "command": "gcc",
    "args": ["-g", "${file}", "-o", "${workspaceRoot}\${fileBasename}.exe"]

ä»¥ä¸ä»»å¡éç½®å¯ä»¥ç¨æ¥ç¼è¯å½åæ´»å¨çæºä»£ç æä»¶ï¼ä¹å¯ä»¥ä½¿ç¨ workspaceRoot å¦ææä»¶å¨å·¥ä½åºç®å½ä¸ï¼

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

éç½® "isDefault": true å°±å¯ä»¥ä½¿ç¨å¿«æ·é® Ctrl+Shift+B æ¥æ§è¡è¿ä¸ªä»»å¡ã

ç¶åä¿®æ¹éç½®æä»¶ launch.jsonï¼è®¾ç½®å¦ä½å è½½è°è¯å¨ï¼å¯ä»¥è®¾ç½® symbolSearchPath ä»¥å è½½ VC++ PDB è°è¯ç¬¦å·æä»¶

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

æ§çéè¿ "console" æ¥è®¾ç½®è¢«è°è¯ç¨åºè¿è¡å¨ä»ä¹ç»ç«¯ä¸ï¼æ°çæ¬éè¿ externalConsole è®¾ç½®ï¼å¦æç¨åºéè¦è¾å¥æ°æ®ï¼é£ä¹å°±è®¾ç½®ä¸º trueï¼è¿æ ·å°±å¨å¤é¨ç»ç«¯ä¸­è¿è¡ç¨åºï¼å¹¶åè®¸è¾å¥æ°æ®ã

Visual Studio Code å·¥ç¨ä¸­è¿å¯ä»¥ä½¿ç¨ .vscode/c_cpp_properties.json éç½®æä»¶ï¼è®¾ç½®ç¼è¯åæ°ï¼

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

è¿æ¥ gdbserver è¿è¡è¿ç¨è°è¯éç½®ï¼

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

preLaunchTask æå®è¦å¨è°è¯åæ§è¡çä»»å¡ï¼å³ task.json è®¾ç½®çä»»å¡ lableï¼è¿æ ·ï¼æ F5 æ§è¡è°è¯å°±ä¼èªå¨ç¼è¯ç¨åºã

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
      "description": "ä¸º gdb å¯ç¨æ´é½æå°",
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

è¿è¡è°è¯åï¼å¯ä»¥éè¿è°è¯å½ä»¤çªå£ä¸è°è¯æ©å±è¿è¡äº¤äºï¼

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


# ð© PE Format
- Portable executable (PE) manipulation toolkit https://petoolse.github.io/petools
- PE Format https://docs.microsoft.com/en-us/windows/win32/debug/pe-format
- [MSVC Build Tools](https://docs.microsoft.com/zh-cn/cpp/build/reference/c-cpp-build-tools?view=vs-2019)

å®è£ Microsoft Visual Studio ç¤¾åºçå³å¯è·å MSVC ç¼è¯å¥ä»¶ï¼å¥ä»¶èªå¸¦çç¼è¯ç¨åºæä»¥ä¸è¿äºï¼

|   å½ä»¤ç¨åº  |                      åè½                     |               ä½¿ç¨ç¤ºè              |
|-------------|-----------------------------------------------|-------------------------------------|
| cl.exe      | ç¼è¯ç¨åº                                      | cl /c /Fo:Test.obj Test.cpp         |
| link.exe    | é¾æ¥ç¨åº                                      | link /out:Test.exe Test.obj         |
| lib.exe     | åºç®¡çç¨åºï¼å¯çæéæåºï¼æ ¹æ® DEF åå»ºå¯¼å¥åº | lib /machine:x86 /DEF:Test.def      |
| errlook.exe | æ ¹æ®éè¯¯å·æ£ç´¢ç³»ç»éè¯¯æ¶æ¯ææ¨¡åéè¯¯æ¶æ¯      |                                     |
| nmake.exe   | Makefile èæ¬æå»ºå·¥å·                         |                                     |
| ml64.exe    | æ±ç¼ç¨åº                                      | ml64.exe Test.asm                   |
| editbin.exe | COFF/PE ç¨åºæä»¶ç¼è¾å¨ï¼å¦ä¿®æ¹ç¨åºå­ç³»ç»      | editbin /SUBSYSTEM:CONSOLE Test.exe |
| dumpbin     | COFF/PE ä¿¡æ¯æ¥çå·¥å·ï¼å¦æ¥çå¯¼åºç¬¦å·          | dumpbin -exports Test.dll           |

å¯¹äºä¸ä¸ª PE - Portable Execute äºè¿å¶æä»¶ï¼æä»¶å¼å§çä½ç½®å°±æ¯ä¸ä¸ª DOS ç¨åºï¼åå«ä¸ä¸ª DOS ä¿¡æ¯å¤´åä¸ä¸ª DOS Stub ç¨åºä½ã

DOS å¤´é¨å¯¹åº IMAGE_DOS_HEADER ç»æä½å®ä¹ï¼å¦ä¸ï¼

```cpp
typedef long LONG;
typedef unsigned short      WORD;

typedef struct _IMAE_DOS_HEADER {  // åç§» DOS .EXE header  
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

ç»æä½çå¹»æ° Magic number å­æ®µæ è¯ä¸ä¸ª DOS å¯æ§è¡æä»¶ï¼è¯¥å­æ®µå ç¨ä¸¤ä¸ªå­èï¼é»è®¤æ¯å­ç¬¦âMZâï¼å¨ winnt.h å®ä¹å¦ä¸ï¼

```cpp
#define IMAGE_DOS_SIGNATURE                 0x4D5A      // MZ
#define IMAGE_OS2_SIGNATURE                 0x4E45      // NE
#define IMAGE_OS2_SIGNATURE_LE              0x4C45      // LE
#define IMAGE_NT_SIGNATURE                  0x50450000  // PE00
```

æåä¸ä¸ªå­æ®µ e_lfanew æå Windows 32-bit/64-bit ç¨åºï¼æ°æ§æçæ¯ç¸å¯¹ DOS æ¶ä»£ç 16-bit æ§ç¨åºï¼DOS Stub åªæ¯ä¸æ®µç¨äºå¼å®¹æ§ PE ç¨åºçä»£ç ï¼åªæ¾ç¤ºä¸æ®µä¿¡æ¯ï¼

    This program cannot be run in DOS mode.

å¨ DOS Hedaer åé¢ç´§è·ç 16-bit æä»¤ï¼å¦æå¨ DOS ç³»ç»ä¸è¿è¡ç¨åºå°±æ§è¡è¿æ®µä»£ç ï¼å¦æå¨ Windows ç³»ç»ä¸è¿è¡åæ§è¡ e_lfanew æåçæ°ç¨åºã


# ð© ELF Format
- ELF (Executable and Linkable Format) https://wiki.osdev.org/ELF
- Linux Foundation Referenced Specifications https://refspecs.linuxfoundation.org/index.shtml
- Executable and Linking Format (ELF) Specification v1.2 https://refspecs.linuxfoundation.org/elf/elf.pdf
- GCC - the GNU Compiler Collection https://gcc.gnu.org/
- GNU Binutils https://www.gnu.org/software/binutils/
- GNU Binary Utilities https://sourceware.org/binutils/docs-2.36/binutils/index.html

GNU æä¾äºä¸å¥éå¸¸æç¨çäºè¿å¶æä»¶å·¥å·ï¼ç»ç§°ä¸º Binutilsï¼å¶ä¸­ as å ls ä¸¤ä¸ªæ¯ GCC ç¼è¯å¥ä»¶ä¹ç»å¸¸ç¨å°çæ±ç¼ãé¾æ¥å·¥å·ï¼

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

æ­¤å¤è¿æä¸ä¸ª ldd å·¥å·ï¼å¯ä»¥æ¥è¯¢ç¨åºå¯¼å¥äºä»ä¹å¨æé¾æ¥åºã

ä¾å¦ï¼ä½¿ç¨ nm æ¥è¯¢ç¨åºä¸­å¯¼å¥çç¬¦å·ï¼

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
       [objfileâ¦]

è objdump åè½æ´å¼ºå¤§ï¼å®å¯ä»¥æ¥è¯¢ ELF æ ¼å¼æä»¶çææä¿¡æ¯ï¼åæ¬å¯¹ä»£ç è¿è¡åæ±ç¼ï¼

    objdump options objfile

    è³å°å¿é¡»ç»åºä»¥ä¸éé¡¹ä¹ä¸ï¼
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

     ä»¥ä¸éé¡¹æ¯å¯éçï¼
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

    objdumpï¼æ¯æçç®æ ï¼ pe-x86-64 pei-x86-64 pe-bigobj-x86-64 elf64-x86-64 elf64-l1om elf64-k1om pe-i386 pei-i386 elf32-i386 elf32-iamcu elf64-little elf64-big elf32-little elf32-big srec symbolsrec verilog tekhex binary ihex plugin
    objdumpï¼æ¯æçä½ç³»ç»æï¼ i386 i386:x86-64 i386:x64-32 i8086 i386:intel i386:x86-64:intel i386:x64-32:intel iamcu iamcu:intel l1om l1om:intel k1om k1om:intel

    ä¸å i386/x86-64 ç¹å®çåæ±ç¼å¨éé¡¹å¨ä½¿ç¨ -M å¼å³æ¶å¯ç¨ï¼ä½¿ç¨éå·åéå¤ä¸ªéé¡¹ï¼ï¼
      x86-64      å¨ 64 ä½æ¨¡å¼ä¸åæ±ç¼
      i386        å¨ 32 ä½æ¨¡å¼ä¸åæ±ç¼
      i8086       å¨ 16 ä½æ¨¡å¼ä¸åæ±ç¼
      att         ç¨ AT&T è¯­æ³æ¾ç¤ºæä»¤
      intel       ç¨ Intel è¯­æ³æ¾ç¤ºæä»¤
      att-mnemonic Display instruction in AT&T mnemonic
      intel-mnemonic Display instruction in Intel mnemonic
      addr64      åå® 64 ä½å°åå¤§å°
      addr32      åå® 32 ä½å°åå¤§å°
      addr16      åå® 16 ä½å°åå¤§å°
      data32      åå® 32 ä½æ°æ®å¤§å°
      data16      åå® 16 ä½æ°æ®å¤§å°
      suffix      å¨ AT&T è¯­æ³ä¸­å§ç»æ¾ç¤ºæä»¤åç¼
      amd64       Display instruction in AMD64 ISA
      intel64     Display instruction in Intel64 ISA

       
ELF æä»¶æ ¼å¼åºæ¬ç»æï¼ææä»¶åå®¹åºç°çé¡ºåºå¦ä¸ï¼

            ===================================
            | æä»¶å¤´ï¼ELF Headerï¼             |
            ===================================
             | Program header table position
            =v=================================
    +-------| ç¨åºå¤´è¡¨ï¼Program Head Tableï¼   |
    |       ===================================
    |       
    |       ===================================
    |       | åä¸ªæ®µè½ï¼Sections/Segmentsï¼    |
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
            | æ®µè½å¤´è¡¨ï¼Section Header Tableï¼ |------+
            ===================================

å¯ä»¥éè¿ objdump æ¥è¯¢è¿äºå¤´åä¿¡æ¯ï¼å¯ä»¥çå° MIT 6.828 ç boot ç¨åºçå¥å£æçº¦å®ç¼è¯å¨ 0x7c00ã

å ä¸º BIOS å è½½å¼å¯¼ç¨åºåï¼ä¼æçº¦å®æ§è¡ 0x7c00 å°åçä»£ç å¥å£ï¼æä»¥å¨ç¼è¯å¼å¯¼ç¨åºæ¶ï¼å¨ boot/Makefrag èæ¬æå®é¾æ¥åæ° -Ttext 0x7C00 è®©é¾æ¥ç¨åºçææ­£ç¡®çåå­å°åã

é¾æ¥ç¨åºåæ°å¯ä»¥ç´æ¥ä¼ éç» gcc å½ä»¤ï¼ç±å®è°ç¨é¾æ¥ç¨åºï¼

    gcc -o hello -Ttext 0x7c00 hello.c

æ³¨æ LMA - Load Memory Address ææ¯ç¨åºæ®µè£å¥åå­çå¥å£æå¨ï¼VMA æ¯ Virtual Memory Addressï¼

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

æä»¶å¤´ï¼ELF Headerï¼

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

Flags æ å¿å¯¹åº CPU æ¶æ

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

ELF æä»¶å¯ä»¥åå«ä¸ç» Program headerï¼æ ¹æ®æä»¶å¤´ç Number of entries æ¥æä½ï¼ä½éè¦æ­£ç¡®ä½¿ç¨ 32-bit æ 64-bit ççæ¬ã

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
