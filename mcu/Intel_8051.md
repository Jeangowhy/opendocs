curl -s -L  | /c/opendocs/html2md.ts >> /c/opendocs/mcu/intel_8051.md


/Intel Microcontroller Families MCS-48 MCS-41 MCS-51 MCS-96
===========================================================
https://www.cpushack.com/IntelMicrocontrollers.html
https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-3714-Microcontroller-8051-AT89LP51RD2-ED2-ID2-Datasheet.pdf

//CPU History - The CPU Museum - Intel Microcontroller Families
---------------------------------------------------------------

Since 1975 Intel has been producing many different types of microcontrollers. 
In general each MCU that Intel has made falls into one of the below families. 
The families differ mostly in instruction sets and architecture. Within each 
family there are many different CPUs. While each CPU may have the same core 
the feature set can vary a lot. Common differences within a single family are:

*   On-Board ROM size
*   On-Board RAM size
*   Reprogrammability
*   ADCs
*   Timers
*   And many other features

Microcontroller usually contain the programs they run on the chip themselves, 
or off the chip on a ROM. Intel used several naming conventions to specify wether 
the chip had ROM or not. and wether it was programmable.

*   80xxx **   ROMLESS
*   82xxx      Predesigned Mask ROM (8242 keyboard controller)
*   83xxx      Mask ROM
*   87xx       UVEPROM
*   86xx       OTP ROM
*   87Axx      Automotive Grade

** 80 was used for ROM and ROMLESS versions of MCS41 48 and 51 before  
Intel created a better nameing convention.  

Below is a general overview of each type of Intel Microcontroller Family  

* * *

//Intel MCS-48 - Introduced 1976
--------------------------------

The Intel 8048 microcontroller, Intel's first µC, was used in the Magnavox Odyssey² 
video game console (as a 100KHz 8021) and (in its 8042 variant) in the original 
IBM PC keyboard. The 8048 is probably the most prominent member of Intel's 
MCS-48 familiy of microcontrollers. It was inspired by, and is somewhat similar to, 
the Fairchild F8 microprocessor.

The MCS-48 has over 90 instructions with 90% of them being single byte.  
  
The 8048 has a modified Harvard architecture, with internal or external program 
ROM and 64–256 bytes of internal (on-chip) RAM. The I/O is mapped into its own 
address space, separate from programs and data. Though the 8048 was eventually 
replaced by the very popular Intel 8051, even at the turn of the millennium it 
remains quite popular, due to its low cost, wide availability, memory efficient 
one-byte instruction set, and mature development tools. Because of this it is 
much used in high-volume consumer electronics devices such as TV sets, TV remotes, 
toys, and other gadgets where cost-cutting is essential.

|    Device    | RAM (bytes) | ROM  |   Speed    | Timers |  Ports   |  Picture   |
|--------------|-------------|------|------------|--------|----------|------------|
| 8021 8021H** |          64 | 1024 | 100-400KHz |      2 | 2x8, 1x4 | ![][IntelP8021]           |
| 8022 8022H** |         128 | 2048 | 100-400KHz |      2 | 3x8      | Has an ADC |
|              |             |      |            |        |          |            |
| 8035         |          64 | -    | 11MHz      |        |          | ![][IntelP8035L]           |
| 8038         |          64 | -    |            |        | 3x8      |            |
| 8039         |         128 | -    | 11MHz      |        | 3x8      | ![][IntelP8039HL]           |
| 8040         |         256 | -    | 11MHz      |        |          |            |
| 8048         |          64 | 1024 | 11MHz      |      2 | 3x8      | ![][IntelC8748_2]           |
| 8049         |         128 | 2048 | 11MHz      |      2 | 3x8      | ![][IntelP8049AH]           |
| 8050         |         256 | 4096 | 11MHz      |        |          |            |

<!-- 
![Intel MISC IntelP8021](http://www.cpushack.net/chippics/Intel/MISC/IntelP8021.jpg)
![Intel 8x35 IntelP8035L](http://www.cpushack.net/chippics/Intel/8x35/IntelP8035L.jpg)
![Intel 8x39 IntelP8039HL](http://www.cpushack.net/chippics/Intel/8x39/IntelP8039HL.jpg)
![Intel 8x48 IntelC8748_2](http://www.cpushack.net/chippics/Intel/8x48/IntelC8748_2.jpg)
![Intel 8x49 IntelP8049AH](http://www.cpushack.net/chippics/Intel/8x49/IntelP8049AH.jpg)
 -->

[IntelP8021]: http://www.cpushack.net/chippics/Intel/MISC/IntelP8021.jpg
[IntelP8035L]: http://www.cpushack.net/chippics/Intel/8x35/IntelP8035L.jpg
[IntelP8039HL]: http://www.cpushack.net/chippics/Intel/8x39/IntelP8039HL.jpg
[IntelC8748_2]: http://www.cpushack.net/chippics/Intel/8x48/IntelC8748_2.jpg
[IntelP8049AH]: http://www.cpushack.net/chippics/Intel/8x49/IntelP8049AH.jpg

**Notes:**  
** 2 pins are High Current Driving outputs

* * *

//Intel MCS-41 - Introduced 1979
--------------------------------

MCS-41 are slave controllers commonly used for keyboard control or other 
simple tasks such as ADC control.

The Intel UPI-41/42 is a general-purpose Universal Peripheral Interface that allows 
designers to grow their own customized solution for peripheral device control. 
It contains a low-cost microcomputer with 2K of program memory, 128 bytes of 
data memory, 8-bit timer/counter, and clock generator in a single 40-pin package. 
Interface registers are included to enable the UPI device to function as a 
peripheral controller in the MCSÉ-48, MCS-51, MCS-80, MCS-85, 8088, 8086 and 
other 8-, 16-bit systems. The 8742 is software, pin, and architecturally compatible  
with the 8741A. The 8742 doubles the on-chip memory space to allow for additional 
features and performance to be incorporated in upgraded 8741A designs. 
For new designs, the additional memory and performance of the 8742 extends the 
UPI concept to more complex motor control tasks, 80-column printers and 
process control applications as examples.

The UPI-41 has over 90 instructions with 70% of them being single byte.  

  
| Device | RAM (bytes) | ROM  |  Speed  | ADCs | Timers | Ports |      Picture      |
|--------|-------------|------|---------|------|--------|-------|-------------------|
|   8041 |         128 | 1024 | 6MHz    |      |      2 | 3x8   | ![][IntelC8741A]  |
|   8042 |         256 | 2048 | 12.5MHz |      |      2 |       | ![][IntelP8742AH] |
|        |             |      |         |      |        |       |                   |

[IntelC8741A]: http://www.cpushack.net/chippics/Intel/8x41/IntelC8741A.jpg
[IntelP8742AH]: http://www.cpushack.net/chippics/Intel/8x42/IntelP8742AH.jpg
  

* * *

  

//Intel MCS-51 - Introduced 1980
-------------------------------

The MCS-51 Family includes 2 timers and 4 ports as well as 128bytes or more of 
on board RAM. The 51 is one of the most popular MCUs on the market. It is now 
being made in speeds of up to 100MHz by SiLabs, while Intel continues to make 
them up to 33MHz.

The standard MCS-51 instruction set has 111 instructions with 64 of them 
executing in a single cycle. They can support up to 64k of external prgram, 
and 54k of external memory space.

The MCS-51 family is now made by dozens of companies, with many different 
features. Below is but a small list of these companies:  

1. All told there areover 1000 versions of the 8051 core.  
2. AMD  
3. Atmel 89x  
4. Dallas-Maxim  
5. Infineon C500  
6. Intel  
7. SiLabs  
8. Philips  
9. And many more...

The Intel 8xC251TB/TQ and 8xC251SA/SB/SP/SQ are based on the new high performance 
MCS® 251 micro-controller architecture. Being members of the MCS 251 microcontroller 
family, the 8xC251TB/TQ and 8xC251SA/SB/SP/SQ have the same advanced register based 
CPU architecture and a pipelined instruction execution unit. They use the powerful 
MCS 251 microcontroller instruction set, with many enhanced 8, 16 and 32-bit 
instructions available. The new microcontrollers are also specially designed to 
execute C code efficiently. Most importantly, the 8xC251TB/TQ and 8xC251SA/SB/SP/SQ 
are binary code and pin compatible with the existing MCS 51 microcontrollers. 
They represent the easiest way to upgrade performance of existing MCS 51 
microcontroller applications, delivering up to 15 times the performance.  
  
|    Device   | RAM (bytes) |  ROM  | Speed | Timers | Ports |        Picture        |
|-------------|-------------|-------|-------|--------|-------|-----------------------|
| 8031        | 128         | -     | 12MHz |      2 | 4x8   | ![][IntelMD80C31BH-Q] |
| 8032        | 256         | -     | 12MHz |      2 | 4x8   | ![][IntelP8032AH]     |
| 8044 *      | 192         | 4096  | 12MHz |      2 | 4x8   | ![][IntelC8744-8ES]   |
| 8051        | 128         | 4096  | 12MHz |      2 | 4x8   | ![][IntelC8751H]      |
| 8052        | 256         | 8192  | 24MHz |      2 | 4x8   | ![][IntelD8752BH]     |
| 8054        | 256         | 16K   | 24MHz |      3 | 4x8   | ![][IntelN87C54]      |
| 8058        | 256         | 32K   | 33MHz |      3 | 4x8   |                       |
| **MCS-251** |             |       |       |        |       |                       |
| 8x251SA     | 1k          | 8k    | 16MHz |      3 | 32    |                       |
| 8x251SB     | 1k          | 16k   | 16MHz |      3 | 32    |                       |
| 8x251SP     | 512         | 8k    | 16MHz |      3 | 32    |                       |
| 8x251SQ     | 512         | 16k   | 16MHz |      3 | 32    |                       |
| 8x251TB     | 1K          | 16k   | 24MHz |      3 | 32    | ![][IntelN80C251TB24] |
| 8251TQ      | 512         | -     | 24MHz |      3 | 32    |                       |
| MCS-251-USB |             |       |       |        |       |                       |
| 80930Ax     | 512-1024    | -     | 12MHz |        |       |                       |
| 83930Ax     | 512-1024    | 8-16K | 12MHz |        |       |                       |

\* 8044 Includes a high-speed serial interface.

[IntelMD80C31BH-Q]: http://www.cpushack.net/chippics/Intel/8x31/IntelMD80C31BH-Q.jpg
[IntelP8032AH]: http://www.cpushack.net/chippics/Intel/8x32/IntelP8032AH.jpg
[IntelC8744-8ES]: http://www.cpushack.net/chippics/Intel/8x44/IntelC8744-8ES.jpg
[IntelC8751H]: http://www.cpushack.net/chippics/Intel/8x51/IntelC8751H.jpg
[IntelD8752BH]: http://www.cpushack.net/chippics/Intel/8x52/IntelD8752BH.jpg
[IntelN87C54]: http://www.cpushack.net/chippics/Intel/8x54/IntelN87C54.jpg
[IntelN80C251TB24]: http://www.cpushack.net/chippics/Intel/8x51/IntelN80C251TB24.jpg

https://www.cpushack.com/chippics/Intel/8x51/IntelC8751H.html

        Modified:  May 23, 2005, 6:33 pm
    Manufacturer:  Intel
           Model:  C8751H
           Speed:  12MHz
            Type:  MCS-51
       Data Code:  8450
      Introduced:  1980
     Transistors:  ??
         Package:  40CDIP w/ Gold Lid
         Process:  3 Micron
    Architecture:  8 bit MCU
         Used in:  Control applications
     Description:  The MCS-51 Family includes 2 timers and
                    4 ports as well as 128bytes or more of
                    on board RAM. The 51 is one of the most
                    popular MCUs on the market.
                    It is now being made in speeds of up to
                    100MHz by SiLabs, while Intel continues to
                    make them up to 33MHz.

                    MCS-51
                        8031 128*8 RAM ROMless
                        8032 256*8 RAM ROMless
                        8044 192*8 RAM 64K*8 ROM RUPI Serial
                        8051 128*8 RAM 4k*8 ROM
                        8052 256*8 RAM 8K*8 ROM
                        8053 128*8 RAM 8k*8 ROM
                        8054 256*8 RAM 16k*8 ROM
                        8058 256*8 RAM 32k*8 ROM

 

* * *

/Intel MCS-96 - Introduced 1982
-------------------------------

Intel® MCS 96 microcontroller family of products are popular for 16-bit embedded 
microcontrollers. The 8XC196 products are found in a variety of embedded applications. 
The high-performance register to register architecture is well suited for complex 
real-time control applications such as hard disk drives, modems, printers, pattern 
recognition and motor control. Our broad portfolio of 8XC196 microcontroller 
products has been designed to meet your varying peripheral, memory size, 
addressability and performance requirements.  
  
  
The 8XC196 family shares a common core architecture which is register based. 
The MCS 96 microcontroller register architecture eliminates the accumulator 
bottleneck and enables fast context switching. All devices have bit, byte, 
word and some 32-bit operations. The table below summarizes the capture and 
generation of high speed signals on the HSIO and EPA.  
  
The MCS-96, like the MCS-51 is a MCU that is still being made, after 25 years of 
production there is still no plans to terminate it, just add more features, 
and get the clock even higher.  
  
|  Device  | RAM (bytes) | ROM  | Speed | ADCs | Timers | I/O Lines |        Picture        |
|----------|-------------|------|-------|------|--------|-----------|-----------------------|
| 8095     | 232         | -    | 12MHz | 4    |      2 | 5x8       | ![][IntelC8095-90]    |
| 8395     | 232         | 8192 | 12MHz | 4    |      2 | 5x8       |                       |
| 8096     | 232         | -    | 12MHz | -    |      2 | 5x8       |                       |
| 8396     | 232         | 8192 | 12MHz | -    |      2 | 5x8       |                       |
| 8097     | 232         | -    | 12MHz | 8    |      2 | 5x8       |                       |
| 8397     | 232         | 8192 |       | 8    |      2 | 5x8       |                       |
|           Next Generation                                            |
| 87C196KR | 488/256     | 16K  | 16MHz | 8    |      2 | 56        |                       |
| 87C196KQ | 360/128     | 12K  | 16MHz | 8    |      2 | 56        |                       |
| 87C196JV | 1.5K/512    | 48K  | 16MHz | 6    |      2 | 41        |                       |
| 87C196JT | 1K/512      | 32K  | 16MHz | 6    |      2 | 41        |                       |
| 87C196JR | 488/256     | 16K  | 16MHz | 6    |      2 | 41        |                       |
| 87C196JQ | 360/128     | 12K  | 16MHz | 6    |      2 | 41        |                       |
| 87C196LA | 768         | 24K  | 20MHz | 6    |      2 |           |                       |
| 87C196LB | 768         | 24k  | 20MHz | 6    |      2 |           |                       |
| 83C196LC | 1K/512      | 32K  | 22MHz | 6    |      2 |           |                       |
| 83C196LD | 384         | 16K  | 22MHz | 6    |      2 |           |                       |
|           High Speed I/O Family                                      |
| 8x196KB  | 232         | 8k   | 16MHz | 8    |      2 | 48        | ![][IntelR87C196KB12] |
| 8x196KC  | 488         | 16k  | 20MHz | 8    |      2 | 48        | ![][IntelN80C196KC18] |
| 8x196KD  | 1000        | 32k  | 20MHz | 8    |      2 | 48        | ![][IntelN87C196KD20] |
|           Motor Control Family                                       |
| 8x196MC  | 488         | 16k  | 16MHz | 13   |      2 | 53        |                       |
| 8x196MD  | 488         | 16k  | 16MHz | 14   |      2 | 64        |                       |
| 8x196MH  | 744         | 32k  | 16MHz | 8    |      2 | 52        |                       |
|           EPA Famlily (Event processor array)                        |
| 87C196CA | 1000        | 32k  | 16MHz | 6    |      2 | 44        |                       |
| 87C196CB | 1.5k        | 56k  | 16MHz | 8    |      2 | 56        |                       |
| 87C196NP | 1000        | 4k   | 14MHz | 0    |      2 | 32        |                       |
| 87C196NT | 1000        | 32k  | 20MHz | 4    |      2 | 56        |                       |
| 87C196NU | 1024        | -    | 50MHz | 0    |      2 | 32        |                       |
| 87C196EA | 1000        | -    | 40MHz | 16   |      4 | 83        |                       |
|           MCS-296  (DSP Enhanced)                                    |
| 80296SA  | 512         | 2k   | 50MHz | 0    |      2 | 32        |                       |


/8051 Instruction Set
=====================
https://www.win.tue.nl/~aeb/comp/8051


//Instructions by opcode
------------------------

```
|      |  0x00  |   0x01  |   0x02  |  0x03  |  0x04  |  0x05  |  0x06  |  0x07  |  0x08  |  0x09  |  0x0a  |  0x0b  |  0x0c  |  0x0d  |  0x0e  |  0x0f  |
|------|--------|---------|---------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|
| 0x00 | [NOP]  | [AJMP]  | [LJMP]  | [RR]   | [INC]  | [INC]  | [INC]  | [INC]  | [INC]  | [INC]  | [INC]  | [INC]  | [INC]  | [INC]  | [INC]  | [INC]  |
| 0x10 | [JBC]  | [ACALL] | [LCALL] | [RRC]  | [DEC]  | [DEC]  | [DEC]  | [DEC]  | [DEC]  | [DEC]  | [DEC]  | [DEC]  | [DEC]  | [DEC]  | [DEC]  | [DEC]  |
| 0x20 | [JB]   | [AJMP]  | [RET]   | [RL]   | [ADD]  | [ADD]  | [ADD]  | [ADD]  | [ADD]  | [ADD]  | [ADD]  | [ADD]  | [ADD]  | [ADD]  | [ADD]  | [ADD]  |
| 0x30 | [JNB]  | [ACALL] | [RETI]  | [RLC]  | [ADDC] | [ADDC] | [ADDC] | [ADDC] | [ADDC] | [ADDC] | [ADDC] | [ADDC] | [ADDC] | [ADDC] | [ADDC] | [ADDC] |
| 0x40 | [JC]   | [AJMP]  | [ORL]   | [ORL]  | [ORL]  | [ORL]  | [ORL]  | [ORL]  | [ORL]  | [ORL]  | [ORL]  | [ORL]  | [ORL]  | [ORL]  | [ORL]  | [ORL]  |
| 0x50 | [JNC]  | [ACALL] | [ANL]   | [ANL]  | [ANL]  | [ANL]  | [ANL]  | [ANL]  | [ANL]  | [ANL]  | [ANL]  | [ANL]  | [ANL]  | [ANL]  | [ANL]  | [ANL]  |
| 0x60 | [JZ]   | [AJMP]  | [XRL]   | [XRL]  | [XRL]  | [XRL]  | [XRL]  | [XRL]  | [XRL]  | [XRL]  | [XRL]  | [XRL]  | [XRL]  | [XRL]  | [XRL]  | [XRL]  |
| 0x70 | [JNZ]  | [ACALL] | [ORL]   | [JMP]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  |
| 0x80 | [SJMP] | [AJMP]  | [ANL]   | [MOVC] | [DIV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  |
| 0x90 | [MOV]  | [ACALL] | [MOV]   | [MOVC] | [SUBB] | [SUBB] | [SUBB] | [SUBB] | [SUBB] | [SUBB] | [SUBB] | [SUBB] | [SUBB] | [SUBB] | [SUBB] | [SUBB] |
| 0xa0 | [ORL]  | [AJMP]  | [MOV]   | [INC]  | [MUL]  | [?]    | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  |
| 0xb0 | [ANL]  | [ACALL] | [CPL]   | [CPL]  | [CJNE] | [CJNE] | [CJNE] | [CJNE] | [CJNE] | [CJNE] | [CJNE] | [CJNE] | [CJNE] | [CJNE] | [CJNE] | [CJNE] |
| 0xc0 | [PUSH] | [AJMP]  | [CLR]   | [CLR]  | [SWAP] | [XCH]  | [XCH]  | [XCH]  | [XCH]  | [XCH]  | [XCH]  | [XCH]  | [XCH]  | [XCH]  | [XCH]  | [XCH]  |
| 0xd0 | [POP]  | [ACALL] | [SETB]  | [SETB] | [DA]   | [DJNZ] | [XCHD] | [XCHD] | [DJNZ] | [DJNZ] | [DJNZ] | [DJNZ] | [DJNZ] | [DJNZ] | [DJNZ] | [DJNZ] |
| 0xe0 | [MOVX] | [AJMP]  | [MOVX]  | [MOVX] | [CLR]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  |
| 0xf0 | [MOVX] | [ACALL] | [MOVX]  | [MOVX] | [CPL]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  | [MOV]  |
```

//Alphabetical List of Instructions
-----------------------------------

01. [ACALL](#51acall) - Absolute Call
02. [ADD, ADDC](#51add) - Add Accumulator (With Carry)
03. [AJMP](#51ajmp) - Absolute Jump
04. [ANL](#51anl) - Bitwise AND
05. [CJNE](#51cjne) - Compare and Jump if Not Equal
06. [CLR](#51clr) - Clear Register
07. [CPL](#51cpl) - Complement Register
08. [DA](#51da) - Decimal Adjust
09. [DEC](#51dec) - Decrement Register
10. [DIV](#51div) - Divide Accumulator by B
11. [DJNZ](#51djnz) - Decrement Register and Jump if Not Zero
12. [INC](#51inc) - Increment Register
13. [JB](#51jb) - Jump if Bit Set
14. [JBC](#51jbc) - Jump if Bit Set and Clear Bit
15. [JC](#51jc) - Jump if Carry Set
16. [JMP](#51jmp) - Jump to Address
17. [JNB](#51jnb) - Jump if Bit Not Set
18. [JNC](#51jnc) - Jump if Carry Not Set
19. [JNZ](#51jnz) - Jump if Accumulator Not Zero
20. [JZ](#51jz) - Jump if Accumulator Zero
21. [LCALL](#51lcall) - Long Call
22. [LJMP](#51ljmp) - Long Jump
23. [MOV](#51mov) - Move Memory
24. [MOVC](#51movc) - Move Code Memory
25. [MOVX](#51movx) - Move Extended Memory
26. [MUL](#51mul) - Multiply Accumulator by B
27. [NOP](#51nop) - No Operation
28. [ORL](#51orl) - Bitwise OR
29. [POP](#51pop) - Pop Value From Stack
30. [PUSH](#51push) - Push Value Onto Stack
31. [RET](#51ret) - Return From Subroutine
32. [RETI](#51reti) - Return From Interrupt
33. [RL](#51rl) - Rotate Accumulator Left
34. [RLC](#51rlc) - Rotate Accumulator Left Through Carry
35. [RR](#51rr) - Rotate Accumulator Right
36. [RRC](#51rrc) - Rotate Accumulator Right Through Carry
37. [SETB](#51setb) - Set Bit
38. [SJMP](#51sjmp) - Short Jump
39. [SUBB](#51subb) - Subtract From Accumulator With Borrow
40. [SWAP](#51swap) - Swap Accumulator Nibbles
41. [XCH](#51xch) - Exchange Bytes
42. [XCHD](#51xchd) - Exchange Digits
43. [XRL](#51xrl) - Bitwise Exclusive OR
44. [Undefined](#51und) - Undefined Instruction




<hr *51acall*         *ACALL*               />         <a name="51acall"></a>

//8051 Instruction Set: ACALL
-----------------------------


```sh
|------------|-------------------------------|
| Operation: | ACALL                         |
| Function:  | Absolute Call Within 2K Block |
| Syntax:    | ACALL code address            |
|------------|-------------------------------|
```


| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| ACALL page0  | 0x11   |     2 | None  |
| ACALL page1  | 0x31   |     2 | None  |
| ACALL page2  | 0x51   |     2 | None  |
| ACALL page3  | 0x71   |     2 | None  |
| ACALL page4  | 0x91   |     2 | None  |
| ACALL page5  | 0xB1   |     2 | None  |
| ACALL page6  | 0xD1   |     2 | None  |
| ACALL page7  | 0xF1   |     2 | None  |


Description: `ACALL` unconditionally calls a subroutine at the indicated
code address.  `ACALL` pushes the address of the instruction that follows `ACALL`
onto the stack, least-significant-byte first, most-significant-byte second.
The Program Counter is then updated so that program execution continues at
the indicated address.

The new value for the Program Counter is calculated by replacing the
least-significant-byte of the Program Counter with the second byte of the
`ACALL` instruction, and replacing bits 0-2 of the most-significant-byte of
the Program Counter with 3 bits that indicate the page.  Bits 3-7 of the
most-significant-byte of the Program Counter remain unchaged.

Since only 11 bits of the Program Counter are affected by `ACALL`, calls may only
be made to routines located within the same 2k block as the first byte that
follows `ACALL`.

See Also: [LCALL](#51lcall), [RET](#51ret)



<hr *51add*           *ADD*                 />           <a name="51add"></a>

//8051 Instruction Set: ADD
---------------------------

```sh
|------------|---------------------------------------------|
| Operation: | ADD, ADDC                                   |
| Function:  | Add Accumulator, Add Accumulator With Carry |
| Syntax:    | ADD A,operand                               |
|            | ADDC A,operand                              |
|------------|---------------------------------------------|
```

|   Instructions  | OpCode | Bytes |   Flags   |   Instructions   | OpCode | Bytes |   Flags   |
|-----------------|--------|-------|-----------|------------------|--------|-------|-----------|
| ADD A,#data     | 0x24   |     2 | C, AC, OV | ADDC A,#data     | 0x34   |     2 | C, AC, OV |
| ADD A,iram addr | 0x25   |     2 | C, AC, OV | ADDC A,iram addr | 0x35   |     2 | C, AC, OV |
| ADD A,@R0       | 0x26   |     1 | C, AC, OV | ADDC A,@R0       | 0x36   |     1 | C, AC, OV |
| ADD A,@R1       | 0x27   |     1 | C, AC, OV | ADDC A,@R1       | 0x37   |     1 | C, AC, OV |
| ADD A,R0        | 0x28   |     1 | C, AC, OV | ADDC A,R0        | 0x38   |     1 | C, AC, OV |
| ADD A,R1        | 0x29   |     1 | C, AC, OV | ADDC A,R1        | 0x39   |     1 | C, AC, OV |
| ADD A,R2        | 0x2A   |     1 | C, AC, OV | ADDC A,R2        | 0x3A   |     1 | C, AC, OV |
| ADD A,R3        | 0x2B   |     1 | C, AC, OV | ADDC A,R3        | 0x3B   |     1 | C, AC, OV |
| ADD A,R4        | 0x2C   |     1 | C, AC, OV | ADDC A,R4        | 0x3C   |     1 | C, AC, OV |
| ADD A,R5        | 0x2D   |     1 | C, AC, OV | ADDC A,R5        | 0x3D   |     1 | C, AC, OV |
| ADD A,R6        | 0x2E   |     1 | C, AC, OV | ADDC A,R6        | 0x3E   |     1 | C, AC, OV |
| ADD A,R7        | 0x2F   |     1 | C, AC, OV | ADDC A,R7        | 0x3F   |     1 | C, AC, OV |

Description: Description: `ADD` and `ADDC` both add the value operand to
the value of the Accumulator, leaving the resulting value in the Accumulator.
The value operand is not affected.  `ADD` and `ADDC` function identically except
that `ADDC` adds the value of operand as well as the value of the Carry flag
whereas `ADD` does not add the Carry flag to the result.

The Carry bit (C) is set if there is a carry-out of bit 7.  In other words, if
the unsigned summed value of the Accumulator, operand and (in the case of
`ADDC`) the Carry flag exceeds 255 Carry is set.  Otherwise, the Carry bit is
cleared.

The Auxillary Carry (AC) bit is set if there is a carry-out of bit 3.  In
other words, if the unsigned summed value of the low nibble of the Accumulator,
operand and (in the case of `ADDC`) the Carry flag exceeds 15 the Auxillary Carry
flag is set.  Otherwise, the Auxillary Carry flag is cleared.

The `Overflow` (OV) bit is set if there is a carry-out of bit 6 or out of bit 7,
but not both.  In other words, if the addition of the Accumulator, operand and
(in the case of `ADDC`) the Carry flag treated as signed values results in a value
that is out of the range of a signed byte (-128 through +127) the Overflow flag
is set.  Otherwise, the Overflow flag is cleared.

See Also: [SUBB](#51subb), [DA](#51da), [INC](#51inc), [DEC](#51dec)


<hr *51ajmp*          *AJMP*                />          <a name="51ajmp"></a>

//8051 Instruction Set: AJMP
----------------------------

```sh
| Operation: | AJMP                          |
| Function:  | Absolute Jump Within 2K Block |
| Syntax:    | AJMP code address             |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| AJMP page0   | 0x01   |     2 | None  |
| AJMP page1   | 0x21   |     2 | None  |
| AJMP page2   | 0x41   |     2 | None  |
| AJMP page3   | 0x61   |     2 | None  |
| AJMP page4   | 0x81   |     2 | None  |
| AJMP page5   | 0xA1   |     2 | None  |
| AJMP page6   | 0xC1   |     2 | None  |
| AJMP page7   | 0xE1   |     2 | None  |

Description: AJMP unconditionally jumps to the indicated code address.  The
 new value for the Program Counter is calculated by replacing the
 least-significant-byte of the Program Counter with the second byte of the
 AJMP instruction, and replacing bits 0-2 of the most-significant-byte of the
 Program Counter with 3 bits that indicate the page of the byte following the AJMP instruction.  
 Bits 3-7 of the  most-significant-byte of the Program Counter remain unchaged.

 Since only 11 bits of the Program Counter are affected by AJMP, jumps may only be
 made to code located within the same 2k block as the first byte that follows AJMP.

See Also: [LJMP](#51ljmp), [SJMP](#51sjmp)


<hr *51anl*           *ANL*                 />           <a name="51anl"></a>

//8051 Instruction Set: ANL
---------------------------

```sh
| Operation: | ANL                    |
| Function:  | Bitwise AND            |
| Syntax:    | ANL operand1, operand2 |
```

|     Instructions    | OpCode | Bytes | Flags |
|---------------------|--------|-------|-------|
| ANL iram addr,A     | 0x52   |     2 | None  |
| ANL iram addr,#data | 0x53   |     3 | None  |
| ANL A,#data         | 0x54   |     2 | None  |
| ANL A,iram addr     | 0x55   |     2 | None  |
| ANL A,@R0           | 0x56   |     1 | None  |
| ANL A,@R1           | 0x57   |     1 | None  |
| ANL A,R0            | 0x58   |     1 | None  |
| ANL A,R1            | 0x59   |     1 | None  |
| ANL A,R2            | 0x5A   |     1 | None  |
| ANL A,R3            | 0x5B   |     1 | None  |
| ANL A,R4            | 0x5C   |     1 | None  |
| ANL A,R5            | 0x5D   |     1 | None  |
| ANL A,R6            | 0x5E   |     1 | None  |
| ANL A,R7            | 0x5F   |     1 | None  |
| ANL C,bit addr      | 0x82   |     2 | C     |
| ANL C,/bit addr     | 0xB0   |     2 | C     |

Description: ANL does a bitwise "AND" operation between operand1 and operand2,
 leaving the resulting value in operand1.  The value of operand2 is not affected.  A logical
 "AND" compares the bits of each operand and sets the corresponding bit in the resulting byte only
 if the bit was set in both of the original operands, otherwise the resulting bit is cleared.

See Also: [ORL](#51orl), [XRL](#51xrl)




<hr *51cjne*          *CJNE*                />          <a name="51cjne"></a>

//8051 Instruction Set: CJNE
----------------------------

```sh
| Operation: | CJNE                           |
| Function:  | Compare and Jump If Not Equal  |
| Syntax:    | CJNE operand1,operand2,reladdr |
```

|       Instructions       | OpCode | Bytes | Flags |
|--------------------------|--------|-------|-------|
| CJNE A,#data,reladdr     | 0xB4   |     3 | C     |
| CJNE A,iram addr,reladdr | 0xB5   |     3 | C     |
| CJNE @R0,#data,reladdr   | 0xB6   |     3 | C     |
| CJNE @R1,#data,reladdr   | 0xB7   |     3 | C     |
| CJNE R0,#data,reladdr    | 0xB8   |     3 | C     |
| CJNE R1,#data,reladdr    | 0xB9   |     3 | C     |
| CJNE R2,#data,reladdr    | 0xBA   |     3 | C     |
| CJNE R3,#data,reladdr    | 0xBB   |     3 | C     |
| CJNE R4,#data,reladdr    | 0xBC   |     3 | C     |
| CJNE R5,#data,reladdr    | 0xBD   |     3 | C     |
| CJNE R6,#data,reladdr    | 0xBE   |     3 | C     |
| CJNE R7,#data,reladdr    | 0xBF   |     3 | C     |

Description: CJNE compares the value of operand1 and operand2 and branches to
 the indicated relative address if operand1 and operand2 are not equal.  If the two
 operands are equal program flow continues with the instruction following the CJNE instruction.

The Carry bit (C) is set if operand1 is less than operand2, otherwise it is cleared.

See Also: [DJNZ](#51djnz)


<hr *51clr*           *CLR*                 />           <a name="51clr"></a>

//8051 Instruction Set: CLR
---------------------------

```sh
| Operation: | CLR            |
| Function:  | Clear Register |
| Syntax:    | CLR register   |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| CLR bit addr | 0xC2   |     2 | None  |
| CLR C        | 0xC3   |     1 | C     |
| CLR A        | 0xE4   |     1 | None  |

Description: CLR clears (sets to 0) all the bit(s) of the indicated register.  If the register
 is a bit (including the carry bit), only the specified bit is affected.  Clearing the Accumulator sets
 the Accumulator's value to 0.

See Also: [SETB](#51setb)


<hr *51cpl*           *CPL*                 />           <a name="51cpl"></a>

//8051 Instruction Set: CPL
---------------------------

```sh
| Operation: | CPL                 |
| Function:  | Complement Register |
| Syntax:    | CPL operand         |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| CPL A        | 0xF4   |     1 | None  |
| CPL C        | 0xB3   |     1 | C     |
| CPL bit addr | 0xB2   |     2 | None  |

Description: CPL complements operand, leaving the result in operand.  If operand is
 a single bit then the state of the bit will be reversed.  If operand is the Accumulator
 then all the bits in the Accumulator will be reversed.  This can be thought of as "Accumulator
 Logical Exclusive OR 255" or as "255-Accumulator."  If the operand refers to a bit of an output
 Port, the value that will be complemented is based on the last value written to that bit, not the last
 value read from it.

See Also: [CLR](#51clr), [SETB](#51setb)


<hr *51da*            *DA*                  />            <a name="51da"></a>

//8051 Instruction Set: DA
--------------------------

```sh
| Operation: | DA                         |
| Function:  | Decimal Adjust Accumulator |
| Syntax:    | DA A                       |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| DA           | 0xD4   |     1 | C     |

Description: DA adjusts the contents of the Accumulator to correspond to
 a BCD (Binary Coded Decimal) number after two BCD numbers have been added by the
 ADD or ADDC instruction.  If the carry bit is set or if the value of bits 0-3
 exceed 9, 0x06 is added to the accumulator.  If the carry bit was set when the
 instruction began, or if 0x06 was added to the accumulator in the first step,
 0x60 is added to the accumulator.

The Carry bit (C) is set if the resulting value is greater than 0x99, otherwise it is cleared.

See Also: [ADD](#51add), [ADDC](#51add)


<hr *51dec*           *DEC*                 />           <a name="51dec"></a>

//8051 Instruction Set: DEC
---------------------------

```sh
| Operation: | DEC                |
| Function:  | Decrement Register |
| Syntax:    | DEC register       |
```

|  Instructions | OpCode | Bytes | Flags |
|---------------|--------|-------|-------|
| DEC A         | 0x14   |     1 | None  |
| DEC iram addr | 0x15   |     2 | None  |
| DEC @R0       | 0x16   |     1 | None  |
| DEC @R1       | 0x17   |     1 | None  |
| DEC R0        | 0x18   |     1 | None  |
| DEC R1        | 0x19   |     1 | None  |
| DEC R2        | 0x1A   |     1 | None  |
| DEC R3        | 0x1B   |     1 | None  |
| DEC R4        | 0x1C   |     1 | None  |
| DEC R5        | 0x1D   |     1 | None  |
| DEC R6        | 0x1E   |     1 | None  |
| DEC R7        | 0x1F   |     1 | None  |

Description: DEC decrements the value of register by 1.  If the initial value of
 register is 0, decrementing the value will cause it to reset to 255 (0xFF Hex).  Note:
 The Carry Flag is NOT set when the value "rolls over" from 0 to 255.

See Also: [INC](#51inc), [SUBB](#51subb)


<hr *51div*           *DIV*                 />           <a name="51div"></a>

//8051 Instruction Set: DIV
---------------------------

```sh
| Operation: | DIV                     |
| Function:  | Divide Accumulator by B |
| Syntax:    | DIV AB                  |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| DIV AB       | 0x84   |     1 | C, OV |

Description: Divides the unsigned value of the Accumulator by the unsigned value of
 the "B" register.  The resulting quotient is placed in the Accumulator and the remainder
 is placed in the "B" register.

The Carry flag (C) is always cleared.

The Overflow flag (OV) is set if division by 0 was attempted, otherwise it is cleared.

See Also: [MUL AB](#51mul)



<hr *51djnz*          *DJNZ*                />          <a name="51djnz"></a>

//8051 Instruction Set: DJNZ
----------------------------

```sh
| Operation: | DJNZ                           |
| Function:  | Decrement and Jump if Not Zero |
| Syntax:    | DJNZ register,reladdr          |
```

|      Instructions      | OpCode | Bytes | Flags |
|------------------------|--------|-------|-------|
| DJNZ iram addr,reladdr | 0xD5   |     3 | None  |
| DJNZ R0,reladdr        | 0xD8   |     2 | None  |
| DJNZ R1,reladdr        | 0xD9   |     2 | None  |
| DJNZ R2,reladdr        | 0xDA   |     2 | None  |
| DJNZ R3,reladdr        | 0xDB   |     2 | None  |
| DJNZ R4,reladdr        | 0xDC   |     2 | None  |
| DJNZ R5,reladdr        | 0xDD   |     2 | None  |
| DJNZ R6,reladdr        | 0xDE   |     2 | None  |
| DJNZ R7,reladdr        | 0xDF   |     2 | None  |

Description: DJNZ decrements the value of register by 1.  If the initial value of register
 is 0, decrementing the value will cause it to reset to 255 (0xFF Hex).  If the new value of
 register is not 0 the program will branch to the address indicated by relative addr. If the new
 value of register is 0 program flow continues with the instruction following the DJNZ instruction.

See Also: [DEC](#51dec), [JZ](#51jz), [JNZ](#51jnz)


<hr *51inc*           *INC*                 />           <a name="51inc"></a>

//8051 Instruction Set: INC
---------------------------

```sh
| Operation: | INC                |
| Function:  | Increment Register |
| Syntax:    | INC register       |
```

|  Instructions | OpCode | Bytes | Flags |
|---------------|--------|-------|-------|
| INC A         | 0x04   |     1 | None  |
| INC iram addr | 0x05   |     2 | None  |
| INC @R0       | 0x06   |     1 | None  |
| INC @R1       | 0x07   |     1 | None  |
| INC R0        | 0x08   |     1 | None  |
| INC R1        | 0x09   |     1 | None  |
| INC R2        | 0x0A   |     1 | None  |
| INC R3        | 0x0B   |     1 | None  |
| INC R4        | 0x0C   |     1 | None  |
| INC R5        | 0x0D   |     1 | None  |
| INC R6        | 0x0E   |     1 | None  |
| INC R7        | 0x0F   |     1 | None  |
| INC DPTR      | 0xA3   |     1 | None  |

Description: INC increments the value of register by 1.  If the initial value of register
 is 255 (0xFF Hex), incrementing the value will cause it to reset to 0.  Note: The Carry Flag is
 NOT set when the value "rolls over" from 255 to 0.

In the case of "INC DPTR", the value two-byte unsigned integer value of DPTR is incremented.  If the initial
value of DPTR is 65535 (0xFFFF Hex), incrementing the value will cause it to reset to 0.  Again, the Carry Flag
 is NOT set when the value of DPTR "rolls over" from 65535 to 0.

See Also: [ADD](#51add), [ADDC](#51add), [DEC](#51dec)



<hr *51jb*            *JB*                  />            <a name="51jb"></a>

//8051 Instruction Set: JB
--------------------------

```sh
| Operation: | JB                   |
| Function:  | Jump if Bit Set      |
| Syntax:    | JB bit addr, reladdr |
```

|     Instructions    | OpCode | Bytes | Flags |
|---------------------|--------|-------|-------|
| JB bit addr,reladdr | 0x20   |     3 | None  |

Description: JB branches to the address indicated by reladdr if the bit indicated
 by bit addr is set.  If the bit is not set program execution continues with the instruction following
 the JB instruction.

See Also: [JBC](#51jbc), [JNB](#51jnb)



<hr *51jbc*           *JBC*                 />           <a name="51jbc"></a>

//8051 Instruction Set: JBC
---------------------------

```sh
| Operation: | JBC                           |
| Function:  | Jump if Bit Set and Clear Bit |
| Syntax:    | JB bit addr, reladdr          |
```

|     Instructions     | OpCode | Bytes | Flags |
|----------------------|--------|-------|-------|
| JBC bit addr,reladdr | 0x10   |     3 | None  |

Description: JBC will branch to the address indicated by reladdr
 if the bit indicated by bit addr is set.  Before branching to reladdr the
 instruction will clear the indicated bit. If the bit is not set program execution
 continues with the instruction following the JBC instruction. 

See Also: [JB](#51jb), [JNB](#51jnb)
 




<hr *51jc*            *JC*                  />            <a name="51jc"></a>

//8051 Instruction Set: JC
--------------------------

```sh
| Operation: | JC                |
| Function:  | Jump if Carry Set |
| Syntax:    | JC reladdr        |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| JC reladdr   | 0x40   |     2 | None  |

Description: JC will branch to the address indicated by reladdr if the
 Carry Bit is set.  If the Carry Bit is not set program execution continues with the
 instruction following the JC instruction.

See Also: [JNC](#51jnc)




<hr *51jmp*           *JMP*                 />           <a name="51jmp"></a>

//8051 Instruction Set: JMP
---------------------------

```sh
| Operation: | JMP                                |
| Function:  | Jump to Data Pointer + Accumulator |
| Syntax:    | JMP @A+DPTR                        |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| JMP @A+DPTR  | 0x73   |     1 | None  |

Description: JMP jumps unconditionally to the address represented by the sum of the
 value of DPTR and the value of the Accumulator.

See Also: [LJMP](#51ljmp), [AJMP](#51ajmp), [SJMP](#51sjmp)


<hr *51jnb*           *JNB*                 />           <a name="51jnb"></a>

//8051 Instruction Set: JNB
---------------------------

```sh
| Operation: | JNB                  |
| Function:  | Jump if Bit Not Set  |
| Syntax:    | JNB bit addr,reladdr |
```

|     Instructions     | OpCode | Bytes | Flags |
|----------------------|--------|-------|-------|
| JNB bit addr,reladdr | 0x30   |     3 | None  |

Description: JNB will branch to the address indicated by reladdress if
 the indicated bit is not set.  If the bit is set program execution continues with
 the instruction following the JNB instruction. 

See Also: [JB](#51jb), [JBC](#51jbc)


<hr *51jnc*           *JNC*                 />           <a name="51jnc"></a>

//8051 Instruction Set: JNC
---------------------------

```sh
| Operation: | JNC                   |
| Function:  | Jump if Carry Not Set |
| Syntax:    | JNC reladdr           |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| JNC reladdr  | 0x50   |     2 | None  |

Description: JNC branches to the address indicated by reladdr if
 the carry bit is not set.  If the carry bit is set program execution continues with
 the instruction following the JNB instruction.

See Also: [JC](#51jc)


<hr *51jnz*           *JNZ*                 />           <a name="51jnz"></a>

//8051 Instruction Set: JNZ
---------------------------

```sh
| Operation: | JNZ                          |
| Function:  | Jump if Accumulator Not Zero |
| Syntax:    | JNZ reladdr                  |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| JNZ reladdr  | 0x70   |     2 | None  |

Description: JNZ will branch to the address indicated by reladdr if the
 Accumulator contains any value except 0. If the value of the Accumulator is zero program
 execution continues with the instruction following the JNZ instruction.

See Also: [JZ](#51jz)




<hr *51jz*            *JZ*                  />            <a name="51jz"></a>

//8051 Instruction Set: JZ
--------------------------

```sh
| Operation: | JZ                       |
| Function:  | Jump if Accumulator Zero |
| Syntax:    | JNZ reladdr              |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| JZ reladdr   | 0x60   |     2 | None  |

Description: JZ branches to the address indicated by reladdr if the
 Accumulator contains the value 0.  If the value of the Accumulator is non-zero program
 execution continues with the instruction following the JNZ instruction.

See Also: [JNZ](#51jnz)




<hr *51lcall*         *LCALL*               />         <a name="51lcall"></a>

//8051 Instruction Set: LCALL
-----------------------------

```sh
| Operation: | LCALL           |
| Function:  | Long Call       |
| Syntax:    | LCALL code addr |
```

|   Instructions  | OpCode | Bytes | Flags |
|-----------------|--------|-------|-------|
| LCALL code addr | 0x12   |     3 | None  |

Description: LCALL calls a program subroutine.  LCALL increments the program counter
 by 3 (to point to the instruction following LCALL) and pushes that value onto the stack
 (low byte first, high byte second).  The Program Counter is then set to the 16-bit value
 which follows the LCALL opcode, causing program execution to continue at that address.

See Also: [ACALL](#51acall), [RET](#51ret)




<hr *51ljmp*          *LJMP*                />          <a name="51ljmp"></a>

//8051 Instruction Set: LJMP
----------------------------

```sh
| Operation: | LJMP           |
| Function:  | Long Jump      |
| Syntax:    | LJMP code addr |
```

|  Instructions  | OpCode | Bytes | Flags |
|----------------|--------|-------|-------|
| LJMP code addr | 0x02   |     3 | None  |

Description: LJMP jumps unconditionally to the specified code addr.

See Also: [AJMP](#51ajmp), [SJMP](#51sjmp), [JMP](#51jmp)
 




<hr *51mov*           *MOV*                 />           <a name="51mov"></a>

//8051 Instruction Set: MOV
---------------------------

```sh
| Operation: | MOV                   |
| Function:  | Move Memory           |
| Syntax:    | MOV operand1,operand2 |
```

|       Instructions      | OpCode | Bytes | Flags |
|-------------------------|--------|-------|-------|
| MOV @R0,#data           | 0x76   |     2 | None  |
| MOV @R1,#data           | 0x77   |     2 | None  |
| MOV @R0,A               | 0xF6   |     1 | None  |
| MOV @R1,A               | 0xF7   |     1 | None  |
| MOV @R0,iram addr       | 0xA6   |     2 | None  |
| MOV @R1,iram addr       | 0xA7   |     2 | None  |
| MOV A,#data             | 0x74   |     2 | None  |
| MOV A,@R0               | 0xE6   |     1 | None  |
| MOV A,@R1               | 0xE7   |     1 | None  |
| MOV A,R0                | 0xE8   |     1 | None  |
| MOV A,R1                | 0xE9   |     1 | None  |
| MOV A,R2                | 0xEA   |     1 | None  |
| MOV A,R3                | 0xEB   |     1 | None  |
| MOV A,R4                | 0xEC   |     1 | None  |
| MOV A,R5                | 0xED   |     1 | None  |
| MOV A,R6                | 0xEE   |     1 | None  |
| MOV A,R7                | 0xEF   |     1 | None  |
| MOV A,iram addr         | 0xE5   |     2 | None  |
| MOV C,bit addr          | 0xA2   |     2 | C     |
| MOV DPTR,#data16        | 0x90   |     3 | None  |
| MOV R0,#data            | 0x78   |     2 | None  |
| MOV R1,#data            | 0x79   |     2 | None  |
| MOV R2,#data            | 0x7A   |     2 | None  |
| MOV R3,#data            | 0x7B   |     2 | None  |
| MOV R4,#data            | 0x7C   |     2 | None  |
| MOV R5,#data            | 0x7D   |     2 | None  |
| MOV R6,#data            | 0x7E   |     2 | None  |
| MOV R7,#data            | 0x7F   |     2 | None  |
| MOV R0,A                | 0xF8   |     1 | None  |
| MOV R1,A                | 0xF9   |     1 | None  |
| MOV R2,A                | 0xFA   |     1 | None  |
| MOV R3,A                | 0xFB   |     1 | None  |
| MOV R4,A                | 0xFC   |     1 | None  |
| MOV R5,A                | 0xFD   |     1 | None  |
| MOV R6,A                | 0xFE   |     1 | None  |
| MOV R7,A                | 0xFF   |     1 | None  |
| MOV R0,iram addr        | 0xA8   |     2 | None  |
| MOV R1,iram addr        | 0xA9   |     2 | None  |
| MOV R2,iram addr        | 0xAA   |     2 | None  |
| MOV R3,iram addr        | 0xAB   |     2 | None  |
| MOV R4,iram addr        | 0xAC   |     2 | None  |
| MOV R5,iram addr        | 0xAD   |     2 | None  |
| MOV R6,iram addr        | 0xAE   |     2 | None  |
| MOV R7,iram addr        | 0xAF   |     2 | None  |
| MOV bit addr,C          | 0x92   |     2 | None  |
| MOV iram addr,#data     | 0x75   |     3 | None  |
| MOV iram addr,@R0       | 0x86   |     2 | None  |
| MOV iram addr,@R1       | 0x87   |     2 | None  |
| MOV iram addr,R0        | 0x88   |     2 | None  |
| MOV iram addr,R1        | 0x89   |     2 | None  |
| MOV iram addr,R2        | 0x8A   |     2 | None  |
| MOV iram addr,R3        | 0x8B   |     2 | None  |
| MOV iram addr,R4        | 0x8C   |     2 | None  |
| MOV iram addr,R5        | 0x8D   |     2 | None  |
| MOV iram addr,R6        | 0x8E   |     2 | None  |
| MOV iram addr,R7        | 0x8F   |     2 | None  |
| MOV iram addr,A         | 0xF5   |     2 | None  |
| MOV iram addr,iram addr | 0x85   |     3 | None  |

Description: MOV copies the value of operand2 into operand1.  The value of
 operand2 is not affected.  Both operand1 and operand2 must be in Internal
 RAM.  No flags are affected unless the instruction is moving the value of a bit into the carry bit
 in which case the carry bit is affected or unless the instruction is moving a value into
 the PSW register (which contains all the program flags).

** Note: In the case of  "MOV iram addr,iram addr", the operand bytes of the instruction are
 stored in reverse order.  That is, the instruction consisting of the bytes 0x85, 0x20, 0x50
 means "Move the contents of Internal RAM location 0x20 to Internal RAM location 0x50" whereas
 the opposite would be generally presumed.

See Also: [MOVC](#51movc), [MOVX](#51movx),
[XCH](#51xch), [XCHD](#51xchd),
[PUSH](#51push), [POP](#51pop)




<hr *51movc*          *MOVC*                />          <a name="51movc"></a>

//8051 Instruction Set: MOVC
----------------------------

```sh
| Operation: | MOVC                          |
| Function:  | Move Code Byte to Accumulator |
| Syntax:    | MOVC A,@A+register            |
```

|  Instructions  | OpCode | Bytes | Flags |
|----------------|--------|-------|-------|
| MOVC A,@A+DPTR | 0x93   |     1 | None  |
| MOVC A,@A+PC   | 0x83   |     1 | None  |

Description: MOVC moves a byte from Code Memory into the Accumulator.  The Code
 Memory address from which the byte will be moved is calculated by summing the value of
 the Accumulator with either DPTR or the Program Counter (PC).  In the case of the Program
 Counter, PC is first incremented by 1 before being summed with the Accumulator. 

See Also: [MOV](#51mov), [MOVX](#51movx)


<hr *51movx*          *MOVX*                />          <a name="51movx"></a>

//8051 Instruction Set: MOVX
----------------------------

```sh
| Operation: | MOVX                                     |
| Function:  | Move Data To/From External Memory (XRAM) |
| Syntax:    | MOVX operand1,operand2                   |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| MOVX @DPTR,A | 0xF0   |     1 | None  |
| MOVX @R0,A   | 0xF2   |     1 | None  |
| MOVX @R1,A   | 0xF3   |     1 | None  |
| MOVX A,@DPTR | 0xE0   |     1 | None  |
| MOVX A,@R0   | 0xE2   |     1 | None  |
| MOVX A,@R1   | 0xE3   |     1 | None  |

Description: MOVX moves a byte to or from External Memory into or from the Accumulator.

If operand1 is @DPTR, the Accumulator is moved to the 16-bit External Memory address indicated
 by DPTR.  This instruction uses both P0 (port 0) and P2 (port 2) to output the 16-bit address and
 data.  If operand2 is DPTR then the byte is moved from External Memory into the Accumulator.

If operand1 is @R0 or @R1, the Accumulator is moved to the 8-bit External Memory address indicated
 by the specified Register.  This instruction uses only P0 (port 0) to output the 8-bit address and data. 
 P2 (port 2) is not affected.  If operand2 is @R0 or @R1 then the byte is moved from External
 Memory into the Accumulator.

See Also: [MOV](#51mov), [MOVC](#51movc)




<hr *51mul*           *MUL*                 />           <a name="51mul"></a>

//8051 Instruction Set: MUL
---------------------------

```sh
| Operation: | MUL                       |
| Function:  | Multiply Accumulator by B |
| Syntax:    | MUL AB                    |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| MUL AB       | 0xA4   |     1 | C, OV |

Description: Multiples the unsigned value of the Accumulator by the unsigned value of
 the "B" register.  The least significant byte of the result is placed in the Accumulator and
 the most-significant-byte is placed in the "B" register.

The Carry Flag (C) is always cleared.

The Overflow Flag (OV) is set if the result is greater than 255 (if the most-significant
 byte is not zero), otherwise it is cleared.

See Also: [DIV](#51div)


<hr *51nop*           *NOP*                 />           <a name="51nop"></a>

//8051 Instruction Set: NOP
---------------------------

```sh
| Operation: | NOP              |
| Function:  | None, waste time |
| Syntax:    | No Operation     |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| NOP          | 0x00   |     1 | None  |

Description: NOP, as it's name suggests, causes No Operation
to take place for one machine cycle.  NOP is generally used only
for timing purposes.  Absolutely no flags or registers are affected.


<hr *51orl*           *ORL*                 />           <a name="51orl"></a>

//8051 Instruction Set: ORL
---------------------------

```sh
| Operation: | ORL                   |
| Function:  | Bitwise OR            |
| Syntax:    | ORL operand1,operand2 |
```

|     Instructions    | OpCode | Bytes | Flags |
|---------------------|--------|-------|-------|
| ORL iram addr,A     | 0x42   |     2 | None  |
| ORL iram addr,#data | 0x43   |     3 | None  |
| ORL A,#data         | 0x44   |     2 | None  |
| ORL A,iram addr     | 0x45   |     2 | None  |

|ORL A,@R0|0x46|1|None|
|ORL A,@R1|0x47|1|None|
|ORL A,R0|0x48|1|None|
|ORL A,R1|0x49|1|None|
|ORL A,R2|0x4A|1|None|
|ORL A,R3|0x4B|1|None|
|ORL A,R4|0x4C|1|None|
|ORL A,R5|0x4D|1|None|
|ORL A,R6|0x4E|1|None|
|ORL A,R7|0x4F|1|None|
|ORL C,bit addr|0x72|2|C|
|ORL C,/bit addr|0xA0|2|C|

Description: ORL does a bitwise "OR" operation between operand1 and operand2,
 leaving the resulting value in operand1.  The value of operand2 is not affected. 
 A logical "OR" compares the bits of each operand and sets the corresponding bit in the resulting
 byte if the bit was set in either of the original operands, otherwise the resulting bit is cleared.

See Also: [ANL](#51anl), [XRL](#51xrl)


<hr *51pop*           *POP*                 />           <a name="51pop"></a>

//8051 Instruction Set: POP
---------------------------

```sh
| Operation: | POP                  |
| Function:  | Pop Value From Stack |
| Syntax:    | POP                  |
```

|  Instructions | OpCode | Bytes | Flags |
|---------------|--------|-------|-------|
| POP iram addr | 0xD0   |     2 | None  |

Description: POP "pops" the last value placed on the stack into the iram addr specified. 
 In other words, POP will load iram addr with the value of the Internal RAM address pointed to
 by the current Stack Pointer.  The stack pointer is then decremented by 1.

See Also: [PUSH](#51push)




<hr *51push*          *PUSH*                />          <a name="51push"></a>

//8051 Instruction Set: PUSH
----------------------------

```sh
| Operation: | PUSH                  |
| Function:  | Push Value Onto Stack |
| Syntax:    | PUSH                  |
```

|  Instructions  | OpCode | Bytes | Flags |
|----------------|--------|-------|-------|
| PUSH iram addr | 0xC0   |     2 | None  |

Description: PUSH "pushes" the value of the specified iram addr onto the stack.  PUSH
 first increments the value of the Stack Pointer by 1, then takes the value stored in iram addr
  and stores it in Internal RAM at the location pointed to by the incremented Stack Pointer.

See Also: [POP](#51pop)


<hr *51ret*           *RET*                 />           <a name="51ret"></a>

//8051 Instruction Set: RET
---------------------------

```sh
| Operation: | RET                    |
| Function:  | Return From Subroutine |
| Syntax:    | RET                    |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| RET          | 0x22   |     1 | None  |

Description: RET is used to return from a subroutine previously called by LCALL or ACALL.
 Program execution continues at the address that is calculated by popping the topmost 2 bytes off
 the stack.  The most-significant-byte is popped off the stack first, followed by the
 least-significant-byte.

See Also: [LCALL](#51lcall), [ACALL](#51acall), [RETI](#51reti)




<hr *51reti*          *RETI*                />          <a name="51reti"></a>

//8051 Instruction Set: RETI
----------------------------

```sh
| Operation: | RETI                  |
| Function:  | Return From Interrupt |
| Syntax:    | RETI                  |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| RETI         | 0x32   |     1 | None  |

Description: RETI is used to return from an interrupt service routine.  RETI first enables interrupts
 of equal and lower priorities to the interrupt that is terminating.  Program execution continues at the address
 that is calculated by popping the topmost 2 bytes off the stack.  The most-significant-byte is popped off the
 stack first, followed by the least-significant-byte.

RETI functions identically to RET if it is executed outside of an interrupt service routine.

See Also: [RET](#51ret)


<hr *51rl*            *RL*                  />            <a name="51rl"></a>

//8051 Instruction Set: RL
--------------------------

```sh
| Operation: | RL                      |
| Function:  | Rotate Accumulator Left |
| Syntax:    | RL A                    |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| RL A         | 0x23   |     1 | C     |

Description: Shifts the bits of the Accumulator to the left.  The left-most bit (bit 7) of the
 Accumulator is loaded into bit 0.

See Also: [RLC](#51rlc), [RR](#51rr), [RRC](#51rrc)



<hr *51rlc*           *RLC*                 />           <a name="51rlc"></a>

//8051 Instruction Set: RLC
---------------------------

```sh
| Operation: | RLC                                   |
| Function:  | Rotate Accumulator Left Through Carry |
| Syntax:    | RLC A                                 |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| RLC A        | 0x33   |     1 | C     |

Description: Shifts the bits of the Accumulator to the left.  The left-most bit (bit 7) of the
 Accumulator is loaded into the Carry Flag, and the original Carry Flag is loaded into bit 0 of the
 Accumulator.  This function can be used to quickly multiply a byte by 2.

See Also: [RL](#51rl), [RR](#51rr), [RRC](#51rrc)




<hr *51rr*            *RR*                  />            <a name="51rr"></a>

//8051 Instruction Set: RR
--------------------------

```sh
| Operation: | RR                       |
| Function:  | Rotate Accumulator Right |
| Syntax:    | RR A                     |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| RR A         | 0x03   |     1 | None  |

Description: Shifts the bits of the Accumulator to the right.  The right-most bit (bit 0) of the
 Accumulator is loaded into bit 7.

See Also: [RL](#51rl), [RLC](#51rlc), [RRC](#51rrc)


<hr *51rrc*           *RRC*                 />           <a name="51rrc"></a>

//8051 Instruction Set: RRC
---------------------------

```sh
| Operation: | RRC                                    |
| Function:  | Rotate Accumulator Right Through Carry |
| Syntax:    | RRC A                                  |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| RRC A        | 0x13   |     1 | C     |

Description: Shifts the bits of the Accumulator to the right.  The right-most bit (bit 0) of the Accumulator
 is loaded into the Carry Flag, and the original Carry Flag is loaded into bit 7.  This function can be used to
 quickly divide a byte by 2.

See Also: [RL](#51rl), [RLC](#51rlc), [RR](#51rr)




<hr *51setb*          *SETB*                />          <a name="51setb"></a>

//8051 Instruction Set: SETB
----------------------------

```sh
| Operation: | SETB          |
| Function:  | Set Bit       |
| Syntax:    | SETB bit addr |
```

|  Instructions | OpCode | Bytes | Flags |
|---------------|--------|-------|-------|
| SETB C        | 0xD3   |     1 | C     |
| SETB bit addr | 0xD2   |     2 | None  |

Description: Sets the specified bit.

See Also: [CLR](#51clr)


<hr *51sjmp*          *SJMP*                />          <a name="51sjmp"></a>

//8051 Instruction Set: SJMP
----------------------------

```sh
| Operation: | SJMP         |
| Function:  | Short Jump   |
| Syntax:    | SJMP reladdr |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| SJMP reladdr | 0x80   |     2 | None  |

Description: SJMP jumps unconditionally to the address specified reladdr.  Reladdr must
 be within -128 or +127 bytes of the instruction that follows the SJMP instruction.

See Also: [LJMP](#51ljmp), [AJMP](#51ajmp)


<hr *51subb*          *SUBB*                />          <a name="51subb"></a>

//8051 Instruction Set: SUBB
----------------------------

```sh
| Operation: | SUBB                                  |
| Function:  | Subtract from Accumulator With Borrow |
| Syntax:    | SUBB A,operand                        |
```

|   Instructions   | OpCode | Bytes |   Flags   |
|------------------|--------|-------|-----------|
| SUBB A,#data     | 0x94   |     2 | C, AC, OV |
| SUBB A,iram addr | 0x95   |     2 | C, AC, OV |
| SUBB A,@R0       | 0x96   |     1 | C, AC, OV |
| SUBB A,@R1       | 0x97   |     1 | C, AC, OV |
| SUBB A,R0        | 0x98   |     1 | C, AC, OV |
| SUBB A,R1        | 0x99   |     1 | C, AC, OV |
| SUBB A,R2        | 0x9A   |     1 | C, AC, OV |
| SUBB A,R3        | 0x9B   |     1 | C, AC, OV |
| SUBB A,R4        | 0x9C   |     1 | C, AC, OV |
| SUBB A,R5        | 0x9D   |     1 | C, AC, OV |
| SUBB A,R6        | 0x9E   |     1 | C, AC, OV |
| SUBB A,R7        | 0x9F   |     1 | C, AC, OV |


Description: SUBB subtract the value of operand and the Carry Flag from the value of the Accumulator, leaving the resulting
 value in the Accumulator.  The value operand is not affected.

The Carry Bit (C) is set if a borrow was required for bit 7, otherwise it is cleared.  In other
 words, if the unsigned value being subtracted is greater than the Accumulator the Carry Flag is set.

The Auxillary Carry (AC) bit is set if a borrow was required for bit 3, otherwise it is cleared. In
 other words, the bit is set if the low nibble of the value being subtracted was greater than the low nibble
 of the Accumulator.

The Overflow (OV) bit is set if a borrow was required for bit 6 or for bit 7, but not both. In other
 words, the subtraction of two signed bytes resulted in a value outside the range of a signed byte
 (-128 to 127).  Otherwise it is cleared.

See Also: [ADD](#51add), [ADDC](#51add), [DEC](#51dec)


<hr *51swap*          *SWAP*                />          <a name="51swap"></a>

//8051 Instruction Set: SWAP
----------------------------

```sh
| Operation: | SWAP                     |
| Function:  | Swap Accumulator Nibbles |
| Syntax:    | SWAP A                   |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| SWAP A       | 0xC4   |     1 | None  |

Description: SWAP swaps bits 0-3 of the Accumulator with bits 4-7 of the Accumulator.  This
 instruction is identical to executing "RR A" or "RL A" four times.

See Also: [RL](#51rl), [RLC](#51rlc), [RR](#51rr), [RRC](#51rrc)


<hr *51instruction*   *INSTRUCTION*         />   <a name="51instruction"></a>

//8051 Instruction Set: Undefined Instruction
---------------------------------------------

```sh
| Operation: | Undefined Instruction |
| Function:  | Undefined             |
| Syntax:    | ???                   |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| ???          | 0xA5   |     1 | C     |

Description: The "Undefined" instruction is, as the name suggests, not a documented instruction.  The
 8051 supports 255 instructions and OpCode 0xA5 is the single OpCode that is not used by any documented function.
 Since it is not documented nor defined it is not recommended that it be executed.  However, based on my research,
 executing this undefined instruction takes 1 machine cycle and appears to have no effect on the system except
 that the Carry Bit always seems to be set.

Note: We received input from an 8052.com user that the undefined instruction
 really has a format of Undefined bit1,bit2 and effectively copies the
 value of bit2 to bit1.  In this case, it would be a three-byte instruction.
 We haven't had an opportunity to verify or disprove this report, so we present
 it to the world as "additional information."

Note: It has been reported that
Philips 8051 model P89C669 uses instruction prefix 0xA5 to let the user access a different (extended) SFR area.



<hr *51xch*           *XCH*                 />           <a name="51xch"></a>

//8051 Instruction Set: XCH
---------------------------

```sh
| Operation: | XCH            |
| Function:  | Exchange Bytes |
| Syntax:    | XCH A,register |
```

|   Instructions  | OpCode | Bytes | Flags |
|-----------------|--------|-------|-------|
| XCH A,@R0       | 0xC6   |     1 | None  |
| XCH A,@R1       | 0xC7   |     1 | None  |
| XCH A,R0        | 0xC8   |     1 | None  |
| XCH A,R1        | 0xC9   |     1 | None  |
| XCH A,R2        | 0xCA   |     1 | None  |
| XCH A,R3        | 0xCB   |     1 | None  |
| XCH A,R4        | 0xCC   |     1 | None  |
| XCH A,R5        | 0xCD   |     1 | None  |
| XCH A,R6        | 0xCE   |     1 | None  |
| XCH A,R7        | 0xCF   |     1 | None  |
| XCH A,iram addr | 0xC5   |     2 | None  |

Description: Exchanges the value of the Accumulator with the value contained in register.

See Also: [MOV](#51mov)




<hr *51xchd*          *XCHD*                />          <a name="51xchd"></a>

//8051 Instruction Set: XCHD
----------------------------

```sh
| Operation: | XCHD             |
| Function:  | Exchange Digit   |
| Syntax:    | XCHD A,[@R0/@R1] |
```

| Instructions | OpCode | Bytes | Flags |
|--------------|--------|-------|-------|
| XCHD A,@R0   | 0xD6   |     1 | None  |
| XCHD A,@R1   | 0xD7   |     1 | None  |

Description: Exchanges bits 0-3 of the Accumulator with bits 0-3 of the Internal RAM address
 pointed to indirectly by R0 or R1.  Bits 4-7 of each register are unaffected.

See Also: [DA](#51da)



<hr *51xrl*           *XRL*                 />           <a name="51xrl"></a>

//8051 Instruction Set: XRL
---------------------------

```sh
| Operation: | XRL                   |
| Function:  | Bitwise Exclusive OR  |
| Syntax:    | XRL operand1,operand2 |
```

|     Instructions    | OpCode | Bytes | Flags |
|---------------------|--------|-------|-------|
| XRL iram addr,A     | 0x62   |     2 | None  |
| XRL iram addr,#data | 0x63   |     3 | None  |
| XRL A,#data         | 0x64   |     2 | None  |
| XRL A,iram addr     | 0x65   |     2 | None  |
| XRL A,@R0           | 0x66   |     1 | None  |
| XRL A,@R1           | 0x67   |     1 | None  |
| XRL A,R0            | 0x68   |     1 | None  |
| XRL A,R1            | 0x69   |     1 | None  |
| XRL A,R2            | 0x6A   |     1 | None  |
| XRL A,R3            | 0x6B   |     1 | None  |
| XRL A,R4            | 0x6C   |     1 | None  |
| XRL A,R5            | 0x6D   |     1 | None  |
| XRL A,R6            | 0x6E   |     1 | None  |
| XRL A,R7            | 0x6F   |     1 | None  |

Description: XRL does a bitwise "EXCLUSIVE OR" operation between operand1 and operand2,
 leaving the resulting value in operand1.  The value of operand2 is not affected.  A logical 
 "EXCLUSIVE OR" compares the bits of each operand and sets the corresponding bit in the resulting byte if
 the bit was set in either (but not both) of the original operands, otherwise the bit is cleared.

See Also: [ANL](#51anl), [ORL](#51orl)
