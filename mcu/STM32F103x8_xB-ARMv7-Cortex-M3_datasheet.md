
/STM32F103x8 STM32F103xB
========================
https://www.st.com/en/microcontrollers-microprocessors/stm32f103cb.html

This is information on a product in full production.
September 2023 DS5319 Rev 19 1/114

                                                            STM32F103x8
                                                            STM32F103xB

            Medium-density performance line Arm® -based 32-bit MCU with
      64 or 128 KB Flash, USB, CAN, 7 timers, 2 ADCs, 9 com. interfaces

                                            Datasheet - production data

/Features
=========

Includes ST state-of-the-art patented technology

* • Arm® 32-bit Cortex®-M3 CPU core
    – 72 MHz maximum frequency, 1.25 DMIPS/MHz (Dhrystone 2.1) performance at 0 wait state memory access
    – Single-cycle multiplication and hardware division

* • Memories
    – 64 or 128 Kbytes of Flash memory
    – 20 Kbytes of SRAM

* • Clock, reset and supply management
    – 2.0 to 3.6 V application supply and I/Os
    – POR, PDR, and programmable voltage detector (PVD)
    – 4 to 16 MHz crystal oscillator
    – Internal 8 MHz factory-trimmed RC
    – Internal 40 kHz RC
    – PLL for CPU clock
    – 32 kHz oscillator for RTC with calibration

* • Low-power
    – Sleep, Stop and Standby modes
    – V BAT supply for RTC and backup registers

* • 2x 12-bit, 1 µs A/D converters (up to 16 channels)
    – Conversion range: 0 to 3.6 V
    – Dual-sample and hold capability
    – Temperature sensor

* • DMA
    – 7-channel DMA controller
    – Peripherals supported: timers, ADC, SPIs, I2Cs and USARTs

* • Up to 80 fast I/O ports
    – 26/37/51/80 I/Os, all mappable on 16 external interrupt vectors and almost all 5 V-tolerant

* • Debug mode:
    – Serial wire debug (SWD) and JTAG interfaces

* • Seven timers
    – Three 16-bit timers, each with up to 4 IC/OC/PWM or pulse counter and quadrature (incremental) encoder input
    – 16-bit, motor control PWM timer with dead-time generation and emergency stop
    – Two watchdog timers (independent and window)
    – SysTick timer 24-bit downcounter

* • Up to nine communication interfaces
    – Up to two I2C interfaces (SMBus/PMBus® )
    – Up to three USARTs (ISO 7816 interface, LIN, IrDA capability, modem control)
    – Up to two SPIs (18 Mbit/s)
    – CAN interface (2.0B Active)
    – USB 2.0 full-speed interface

* • CRC calculation unit, 96-bit unique ID

* • Packages are ECOPACK®


**Table 1**. Device summary


|  Reference  |       Part number        |
|-------------|--------------------------|
| STM32F103x8 | STM32F103C8, STM32F103R8 |
|             | STM32F103V8, STM32F103T8 |
|-------------|--------------------------|
| STM32F103xB | STM32F103RB STM32F103VB, |
|             | STM32F103CB, STM32F103TB |

    | BGA100   10 × 10 mm
    | UFBGA100  7 x 7 mm
    | BGA64     5 × 5 mm
    | VFQFPN36  6 × 6 mm
    | LQFP100  14 × 14 mm
    | LQFP64   10 × 10 mm
    | LQFP48    7 × 7 mm
    | UFQFPN48  7 × 7 mm


/Table of Contents
==================

* 1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . [P9]
* 2 Description  . . . . . . . . . . . . . . . . . . . . . . . . . . [P9]
*   2.1 Device overview  . . . . . . . . . . . . . . . . . . . . . . . [P10]
*   2.2 Full compatibility throughout the family . . . . . . . . . . . [P13]
*   2.3 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . [P14]
*   2.3.1 Arm® Cortex®-M3 core with embedded flash and SRAM . . . . . [P14]
*   2.3.2 Embedded flash memory  . . . . . . . . . . . . . . . . . . . [P14]
*   2.3.3 CRC (cyclic redundancy check) calculation unit . . . . . . . [P14]
*   2.3.4 Embedded SRAM  . . . . . . . . . . . . . . . . . . . . . . . [P14]
*   2.3.5 Nested vectored interrupt controller (NVIC)  . . . . . . . . [P14]
*   2.3.6 External interrupt/event controller (EXTI) . . . . . . . . . [P15]
*   2.3.7 Clocks and startup . . . . . . . . . . . . . . . . . . . . . [P15]
*   2.3.8 Boot modes . . . . . . . . . . . . . . . . . . . . . . . . . [P15]
*   2.3.9 Power supply schemes . . . . . . . . . . . . . . . . . . . . [P15]
*   2.3.10 Power supply supervisor . . . . . . . . . . . . . . . . . . [P15]
*   2.3.11 Voltage regulator . . . . . . . . . . . . . . . . . . . . . [P16]
*   2.3.12 Low-power modes . . . . . . . . . . . . . . . . . . . . . . [P16]
*   2.3.13 DMA . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P17]
*   2.3.14 RTC (real-time clock) and backup registers  . . . . . . . . [P17]
*   2.3.15 Timers and watchdogs  . . . . . . . . . . . . . . . . . . . [P17]
*   2.3.16 I²C bus . . . . . . . . . . . . . . . . . . . . . . . . . . [P19]
*   2.3.17 Universal synchronous/asynchronous receiver transmitter (USART)  [P19]
*   2.3.18 Serial peripheral interface (SPI) . . . . . . . . . . . . . [P19]
*   2.3.19 Controller area network (CAN) . . . . . . . . . . . . . . . [P19]
*   2.3.20 Universal serial bus (USB)  . . . . . . . . . . . . . . . . [P19]
*   2.3.21 GPIOs (general-purpose inputs/outputs)  . . . . . . . . . . [P20]
*   2.3.22 ADC (analog-to-digital converter) . . . . . . . . . . . . . [P20]
*   2.3.23 Temperature sensor  . . . . . . . . . . . . . . . . . . . . [P20]
*   2.3.24 Serial wire JTAG debug port (SWJ-DP)  . . . . . . . . . . . [P20]
* 3 Pinouts and pin description  . . . . . . . . . . . . . . . . . . [P21]
* 4 Memory mapping . . . . . . . . . . . . . . . . . . . . . . . . . [P34]
* 5 Electrical characteristics . . . . . . . . . . . . . . . . . . . [P35]
*   5.1 Parameter conditions . . . . . . . . . . . . . . . . . . . . . [P35]
*   5.1.1 Minimum and maximum values . . . . . . . . . . . . . . . . . [P35]
*   5.1.2 Typical values . . . . . . . . . . . . . . . . . . . . . . . [P35]
*   5.1.3 Typical curves . . . . . . . . . . . . . . . . . . . . . . . [P35]
*   5.1.4 Loading capacitor  . . . . . . . . . . . . . . . . . . . . . [P35]
*   5.1.5 Pin input voltage  . . . . . . . . . . . . . . . . . . . . . [P35]
*   5.1.6 Power supply scheme  . . . . . . . . . . . . . . . . . . . . [P36]
*   5.1.7 Current consumption measurement  . . . . . . . . . . . . . . [P36]
*   5.2 Absolute maximum ratings . . . . . . . . . . . . . . . . . . . [P37]
*   5.3 Operating conditions . . . . . . . . . . . . . . . . . . . . . [P38]
*   5.3.1 General operating conditions . . . . . . . . . . . . . . . . [P38]
*   5.3.2 Operating conditions at power-up / power-down  . . . . . . . [P39]
*   5.3.3 Embedded reset and power control block characteristics . . . [P39]
*   5.3.4 Embedded reference voltage . . . . . . . . . . . . . . . . . [P40]
*   5.3.5 Supply current characteristics . . . . . . . . . . . . . . . [P40]
*   5.3.6 External clock source characteristics  . . . . . . . . . . . [P50]
*   5.3.7 Internal clock source characteristics  . . . . . . . . . . . [P54]
*   5.3.8 PLL characteristics  . . . . . . . . . . . . . . . . . . . . [P56]
*   5.3.9 Memory characteristics . . . . . . . . . . . . . . . . . . . [P56]
*   5.3.10 EMC characteristics . . . . . . . . . . . . . . . . . . . . [P57]
*   5.3.11 Absolute maximum ratings (electrical sensitivity) . . . . . [P59]
*   5.3.12 I/O current injection characteristics . . . . . . . . . . . [P60]
*   5.3.13 I/O port characteristics  . . . . . . . . . . . . . . . . . [P61]
*   5.3.14 NRST pin characteristics  . . . . . . . . . . . . . . . . . [P66]
*   5.3.15 TIM timer characteristics . . . . . . . . . . . . . . . . . [P67]
*   5.3.16 Communications interfaces . . . . . . . . . . . . . . . . . [P68]
*   5.3.17 CAN (controller area network) interface . . . . . . . . . . [P73]
*   5.3.18 12-bit ADC characteristics  . . . . . . . . . . . . . . . . [P74]
*   5.3.19 Temperature sensor characteristics  . . . . . . . . . . . . [P78]
* 6 Package information  . . . . . . . . . . . . . . . . . . . . . . [P79]
*   6.1 Device marking . . . . . . . . . . . . . . . . . . . . . . . . [P79]
*   6.2 VFQFPN36 package information . . . . . . . . . . . . . . . . . [P80]
*   6.3 UFQFPN48 package information (A0B9)  . . . . . . . . . . . . . [P83]
*   6.4 LFBGA100 package information . . . . . . . . . . . . . . . . . [P85]
*   6.5 LQFP100 package information (1L) . . . . . . . . . . . . . . . [P87]
*   6.6 UFBGA100 package information (A0C2)  . . . . . . . . . . . . . [P90]
*   6.7 LQFP64 package information (5W)  . . . . . . . . . . . . . . . [P93]
*   6.8 TFBGA64 package information  . . . . . . . . . . . . . . . . . [P96]
*   6.9 LQFP48 package information (5B)  . . . . . . . . . . . . . . . [P98]
*   6.10 Thermal characteristics . . . . . . . . . . . . . . . . . . . [P101]
*   6.10.1 Reference document  . . . . . . . . . . . . . . . . . . . . [P101]
*   6.10.2 Selecting the product temperature range . . . . . . . . . . [P102]
* 7 Ordering information scheme  . . . . . . . . . . . . . . . . . . [P104]
* 8 Important security notice  . . . . . . . . . . . . . . . . . . . [P105]
* 9 Revision history . . . . . . . . . . . . . . . . . . . . . . . . [P106]

//List of tables
----------------

*   [Table 1]. Device summary  . . . . . . . . . . . . . . . . . . . . . [P1]
*   [Table 2]. STM32F103xx medium-density device features and peripheral counts  [P10]
*   [Table 3]. STM32F103xx family  . . . . . . . . . . . . . . . . . . . [P13]
*   [Table 4]. Timer feature comparison  . . . . . . . . . . . . . . . . [P17]
*   [Table 5]. Medium-density STM32F103xx pin definitions  . . . . . . . [P28]
*   [Table 6]. Voltage characteristics . . . . . . . . . . . . . . . . . [P37]
*   [Table 7]. Current characteristics . . . . . . . . . . . . . . . . . [P37]
*   [Table 8]. Thermal characteristics . . . . . . . . . . . . . . . . . [P37]
*   [Table 9]. General operating conditions  . . . . . . . . . . . . . . [P38]
*   [Table 10]. Operating conditions at power-up / power-down  . . . . . [P39]
*   [Table 11]. Embedded reset and power control block characteristics . [P39]
*   [Table 12]. Embedded internal reference voltage  . . . . . . . . . . [P40]
*   [Table 13]. Maximum current consumption in Run mode, code with data processing running from Flash  [P41]
*   [Table 14]. Maximum current consumption in Run mode, code with data processing running from RAM  [P41]
*   [Table 15]. Maximum current consumption in Sleep mode, code running from Flash or RAM  [P43]
*   [Table 16]. Typical and maximum current consumptions in Stop and Standby modes  [P44]
*   [Table 17]. Typical current consumption in Run mode, code with data processing running from Flash  [P47]
*   [Table 18]. Typical current consumption in Sleep mode, code running from Flash or RAM  [P48]
*   [Table 19]. Peripheral current consumption . . . . . . . . . . . . . [P49]
*   [Table 20]. High-speed external user clock characteristics . . . . . [P50]
*   [Table 21]. Low-speed external user clock characteristics  . . . . . [P51]
*   [Table 22]. HSE 4-16 MHz oscillator characteristics  . . . . . . . . [P52]
*   [Table 23]. LSE oscillator characteristics (f_LSE = 32.768 kHz)  . . [P53]
*   [Table 24]. HSI oscillator characteristics . . . . . . . . . . . . . [P54]
*   [Table 25]. LSI oscillator characteristics . . . . . . . . . . . . . [P55]
*   [Table 26]. Low-power mode wakeup timings  . . . . . . . . . . . . . [P56]
*   [Table 27]. PLL characteristics  . . . . . . . . . . . . . . . . . . [P56]
*   [Table 28]. Flash memory characteristics . . . . . . . . . . . . . . [P56]
*   [Table 29]. Flash memory endurance and data retention  . . . . . . . [P57]
*   [Table 30]. EMS characteristics  . . . . . . . . . . . . . . . . . . [P58]
*   [Table 31]. EMI characteristics for fHSE = 8 MHz and fHCLK = 48 MHz  [P58]
*   [Table 32]. EMI characteristics for fHSE = 8 MHz and fHCLK = 72 MHz  [P59]
*   [Table 33]. ESD absolute maximum ratings . . . . . . . . . . . . . . [P59]
*   [Table 34]. Electrical sensitivities . . . . . . . . . . . . . . . . [P59]
*   [Table 35]. I/O current injection susceptibility . . . . . . . . . . [P60]
*   [Table 36]. I/O static characteristics . . . . . . . . . . . . . . . [P61]
*   [Table 37]. Output voltage characteristics . . . . . . . . . . . . . [P64]
*   [Table 38]. I/O AC characteristics . . . . . . . . . . . . . . . . . [P65]
*   [Table 39]. NRST pin characteristics . . . . . . . . . . . . . . . . [P66]
*   [Table 40]. TIMx characteristics . . . . . . . . . . . . . . . . . . [P67]
*   [Table 41]. I2C characteristics  . . . . . . . . . . . . . . . . . . [P68]
*   [Table 42]. SCL frequency (f_PCLK1 = 36 MHz, V_DD_I2C = 3.3 V) . . . [P69]
*   [Table 43]. SPI characteristics  . . . . . . . . . . . . . . . . . . [P70]
*   [Table 44]. USB startup time . . . . . . . . . . . . . . . . . . . . [P72]
*   [Table 45]. USB DC electrical characteristics  . . . . . . . . . . . [P73]
*   [Table 46]. USB: Full-speed electrical characteristics . . . . . . . [P73]
*   [Table 47]. ADC characteristics  . . . . . . . . . . . . . . . . . . [P74]
*   [Table 48]. R_AIN max for f_ADC = 14 MHz . . . . . . . . . . . . . . [P75]
*   [Table 49]. ADC accuracy - Limited test conditions . . . . . . . . . [P75]
*   [Table 50]. ADC accuracy . . . . . . . . . . . . . . . . . . . . . . [P76]
*   [Table 51]. TS characteristics . . . . . . . . . . . . . . . . . . . [P78]
*   [Table 52]. VFQFPN - 36 pin, 6x6 mm, 0.5 mm pitch very thin profile fine pitch quad flat package mechanical data  [P81]
*   [Table 53]. UFQFPN48 – Mechanical data . . . . . . . . . . . . . . . [P84]
*   [Table 54]. LFBGA100 – 100-ball low profile fine pitch ball grid array, 10 x 10 mm, 0.8 mm pitch, package mechanical data  [P85]
*   [Table 55]. LFBGA100 recommended PCB design rules (0.8 mm pitch BGA)  [P86]
*   [Table 56]. LQFP100 - Mechanical data  . . . . . . . . . . . . . . . [P88]
*   [Table 57]. UFBGA100 - Mechanical data . . . . . . . . . . . . . . . [P91]
*   [Table 58]. UFBGA100 - Example of PCB design rules (0.5 mm pitch BGA)  [P92]
*   [Table 59]. LQFP64 - Mechanical data . . . . . . . . . . . . . . . . [P94]
*   [Table 60]. TFBGA64 – 64-ball, 5 x 5 mm, 0.5 mm pitch, thin profile fine pitch ball grid array package mechanical data  [P96]
*   [Table 61]. TFBGA64 recommended PCB design rules (0.5 mm pitch BGA)  [P97]
*   [Table 62]. LQFP48 – Mechanical data . . . . . . . . . . . . . . . . [P99]
*   [Table 63]. Package thermal characteristics  . . . . . . . . . . . . [P101]
*   [Table 64]. Document revision history  . . . . . . . . . . . . . . . [P106]

//List of figures
-----------------

*   [Figure 1]. STM32F103xx performance line block diagram . . . . . . . [P11]
*   [Figure 2]. Clock tree . . . . . . . . . . . . . . . . . . . . . . . [P12]
*   [Figure 3]. STM32F103xx performance line LFBGA100 ballout  . . . . . [P21]
*   [Figure 4]. STM32F103xx performance line LQFP100 pinout  . . . . . . [P22]
*   [Figure 5]. STM32F103xx performance line UFBGA100 pinout . . . . . . [P23]
*   [Figure 6]. STM32F103xx performance line LQFP64 pinout . . . . . . . [P24]
*   [Figure 7]. STM32F103xx performance line TFBGA64 ballout . . . . . . [P25]
*   [Figure 8]. STM32F103xx performance line LQFP48 pinout . . . . . . . [P26]
*   [Figure 9]. STM32F103xx performance line UFQFPN48 pinout . . . . . . [P26]
*   [Figure 10]. STM32F103xx performance line VFQFPN36 pinout  . . . . . [P27]
*   [Figure 11]. Memory map  . . . . . . . . . . . . . . . . . . . . . . [P34]
*   [Figure 12]. Pin loading conditions  . . . . . . . . . . . . . . . . [P35]
*   [Figure 13]. Pin input voltage . . . . . . . . . . . . . . . . . . . [P35]
*   [Figure 14]. Power supply scheme . . . . . . . . . . . . . . . . . . [P36]
*   [Figure 15]. Current consumption measurement scheme  . . . . . . . . [P36]
*   [Figure 16]. Typical current consumption in Run mode versus frequency (at 3.6 V), code with data processing running from RAM, peripherals enabled  [P42]
*   [Figure 17]. Typical current consumption in Run mode versus frequency (at 3.6 V), code with data processing running from RAM, peripherals disabled  [P42]
*   [Figure 18]. Typical current consumption on V BAT (RTC on) . . . . . [P44]
*   [Figure 19]. Typical current consumption in Stop mode, with regulator in Run mode  [P45]
*   [Figure 20]. Typical current consumption in Stop mode, with regulator in Low-power mode  [P45]
*   [Figure 21]. Typical current consumption in Standby mode . . . . . . [P46]
*   [Figure 22]. High-speed external clock source AC timing diagram  . . [P51]
*   [Figure 23]. Low-speed external clock source AC timing diagram . . . [P52]
*   [Figure 24]. Typical application with an 8 MHz crystal . . . . . . . [P53]
*   [Figure 25]. Typical application with a 32.768 kHz crystal . . . . . [P54]
*   [Figure 26]. Standard I/O input characteristics - CMOS port  . . . . [P62]
*   [Figure 27]. Standard I/O input characteristics - TTL port . . . . . [P62]
*   [Figure 28]. 5 V tolerant I/O input characteristics - CMOS port  . . [P63]
*   [Figure 29]. 5 V tolerant I/O input characteristics - TTL port . . . [P63]
*   [Figure 30]. I/O AC characteristics definition . . . . . . . . . . . [P66]
*   [Figure 31]. Recommended NRST pin protection . . . . . . . . . . . . [P67]
*   [Figure 32]. I2C bus AC waveforms and measurement circuit  . . . . . [P69]
*   [Figure 33]. SPI timing diagram - slave mode and CPHA = 0  . . . . . [P71]
*   [Figure 34]. SPI timing diagram - slave mode and CPHA = 1  . . . . . [P71]
*   [Figure 35]. SPI timing diagram - master mode  . . . . . . . . . . . [P72]
*   [Figure 36]. USB timings: definition of data signal rise and fall time  [P73]
*   [Figure 37]. ADC accuracy characteristics  . . . . . . . . . . . . . [P76]
*   [Figure 38]. Typical connection diagram using the ADC  . . . . . . . [P77]
*   [Figure 39]. Power supply and reference decoupling (V_REF+ not connected to V_DDA )  [P77]
*   [Figure 40]. Power supply and reference decoupling (V_REF+ connected to V_DDA )  [P78]
*   [Figure 41]. VFQFPN - 36 pin, 6x6 mm, 0.5 mm pitch very thin profile fine pitch quad flat package outline  [P80]
*   [Figure 42]. VFQFPN - 36 pin, 6x6 mm, 0.5 mm pitch very thin profile fine pitch quad flat package recommended footprint  [P82]
*   [Figure 43]. UFQFPN48 – Outline  . . . . . . . . . . . . . . . . . . [P83]
*   [Figure 44]. UFQFPN48 – Footprint example  . . . . . . . . . . . . . [P84]
*   [Figure 45]. LFBGA100 – 100-ball low profile fine pitch ball grid array, 10 x 10 mm, 0.8 mm pitch, package outline  [P85]
*   [Figure 46]. LFBGA100 – 100-ball low profile fine pitch ball grid array, 10 x 10 mm, 0.8 mm pitch, package recommended footprint  [P86]
*   [Figure 47]. LQFP100 - Outline (15)  . . . . . . . . . . . . . . . . [P87]
*   [Figure 48]. LQFP100 - Footprint example . . . . . . . . . . . . . . [P89]
*   [Figure 49]. UFBGA100 - Outline (13) . . . . . . . . . . . . . . . . [P90]
*   [Figure 50]. UFBGA100 - Footprint example  . . . . . . . . . . . . . [P92]
*   [Figure 51]. LQFP64 - Outline (15) . . . . . . . . . . . . . . . . . [P93]
*   [Figure 52]. LQFP64 - Footprint example  . . . . . . . . . . . . . . [P95]
*   [Figure 53]. TFBGA64 – 64-ball, 5 x 5 mm, 0.5 mm pitch thin profile fine pitch ball grid array package outline  [P96]
*   [Figure 54]. TFBGA64 – 64-ball, 5 x 5 mm, 0.5 mm pitch, thin profile fine pitch ball grid array, recommended footprint  [P97]
*   [Figure 55]. LQFP48 – Outline (15) . . . . . . . . . . . . . . . . . [P98]
*   [Figure 56]. LQFP48 – Footprint example  . . . . . . . . . . . . . . [P100]
*   [Figure 57]. LQFP100 P_D max vs. T_A . . . . . . . . . . . . . . . . [P103]



                                <!-- *9*/114 -->


/1 Introduction
===============

This document provides the ordering information and mechanical device characteristics of
the STM32F103x8 and STM32F103xB medium-density performance line microcontrollers.
For more details on the whole STMicroelectronics STM32F103xx family, refer to
Section 2.2: Full compatibility throughout the family.
The medium-density STM32F103xx datasheet must be read in conjunction with the low-,
medium-, and high-density STM32F10xxx reference manual. For information on the device
errata with respect to the datasheet and reference manual, refer to the STM32F103x8/B
errata sheet (ES096). The errata sheet, reference manual, and flash programming manual
are all available on the STMicroelectronics website www.st.com.
For information on the Arm®(a) Cortex®-M3 core refer to the Cortex®-M3 Technical
Reference Manual, available from the www.arm.com website.

/2 Description
==============

The STM32F103xx medium-density performance line family incorporates the
high-performance Arm® Cortex®-M3 32-bit RISC core operating at a 72 MHz frequency,
high-speed embedded memories (Flash memory up to 128 Kbytes and SRAM up to
20 Kbytes), and an extensive range of enhanced I/Os and peripherals connected to two
APB buses. All devices offer two 12-bit ADCs, three general purpose 16-bit timers plus one
PWM timer, as well as standard and advanced communication interfaces: up to two I2Cs
and SPIs, three USARTs, an USB and a CAN.
The devices operate from a 2.0 to 3.6 V power supply. They are available in both the –40 to
+85°C temperature range and the –40 to +105 °C extended temperature range. A
comprehensive set of power-saving mode allows the design of low-power applications.
The STM32F103xx medium-density performance line family includes devices in six different
package types: from 36 pins to 100 pins. Depending on the device chosen, different sets of
peripherals are included, the description below gives an overview of the complete range of
peripherals proposed in this family.
These features make the STM32F103xx medium-density performance line microcontroller
family suitable for a wide range of applications such as motor drives, application control,
medical and handheld equipment, PC and gaming peripherals, GPS platforms, industrial
applications, PLCs, inverters, printers, scanners, alarm systems, video intercoms, and
HVACs.
a. Arm is a registered trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

                                <!-- *P10*/114 -->


//2.1 Device overview
---------------------



**Table 2**. STM32F103xx medium-density device features and peripheral counts

Peripheral STM32F103Tx STM32F103Cx STM32F103Rx STM32F103Vx
Flash - Kbytes 64 128 64 128 64 128 64 128
SRAM - Kbytes 20 20 20 20
Timers
General-purpose 3 3 3 3
Advanced-control 1 1 1 1
Communication
SPI 1 2 2 2
I2C 1 2 2 2
USART 2 3 3 3
USB 1 1 1 1
CAN 1 1 1 1
GPIOs 26 37 51 80
12-bit synchronized ADC
Number of channels
2
10 channels
2
10 channels
2
16 channels (1)
1. On the TFBGA64 package only 15 channels are available (one analog input pin has been replaced by
V REF+ ).
2
16 channels
CPU frequency 72 MHz
Operating voltage 2.0 to 3.6 V
Operating temperatures
Ambient temperatures: -40 to +85 °C / -40 to +105 °C (see Table 9)
Junction temperature: -40 to + 125 °C (see Table 9)
Packages VFQFPN36
LQFP48,
UFQFPN48
LQFP64,
TFBGA64
LQFP100,
LFBGA100,
UFBGA100

                                <!-- *11*/114 -->


**Figure 1**. STM32F103xx performance line block diagram

1. T A = –40°C to +105°C (junction temperature up to 125°C).
2. AF = alternate function on I/O port pin.
USBDP/CAN_TX
PA[15:0]
EXTI
WW DG
12bit ADC1
16AF
JTDI
JTCK/SWCLK
JTMS/SWDIO
NJ TRST
JTDO
NRST
V DD = 2 to 3.6V
80AF
PB[15:0]
PC[15:0]
AHB2
MOSI,MISO,SCK,NSS
SRAM
2x(8x16bit)
WAKEUP
GPIOA
GPIOB
GPIOC
F max : 72 MHz
V SS
SCL,SDA I2C2
V REF+
GP DMA
TIM2
TIM3
XTAL OSC
4-16 MHz
XTAL 32 kHz
OSC_IN
OSC_OUT
OSC32_OUT
OSC32_IN
PLL &
APB1 : F max =24 / 36 MHz
PCLK1
HCLK
CLOCK
MANAGT
PCLK2
as AF
as AF
Flash 128 KB
VOLT. REG.
3.3V TO 1.8V
POWER
Backup interface
as AF
TIM 4
BusMatrix
64 bit
Interface
20 KB
RTC
RC 8 MHz
Cortex-M3 CPU
Ibus
Dbus
pbus
obl flash
SRAM 512B
Trace
Controller
USART1
USART2
SPI2
bxCAN
7 channels
Backup
reg
4 Channels
TIM1
3 compl. Channels
SCL,SDA,SMBA I2C1
as AF
RX,TX, CTS, RTS,
USART3
Temp sensor
V REF-
PD[15:0]
GPIOD
PE[15:0]
GPIOE
AHB:F max =48/72 MHz
ETR and BKIN
4 Channels
4 Channels
4 Channels
FCLK
RC 40 kHz
Standby
IWDG
@VBAT
POR / PDR
SUPPLY
@VDDA
VDDA
VSSA
@VDDA
V BAT
RX,TX, CTS, RTS,
SmartCard as AF
RX,TX, CTS, RTS,
CK, SmartCard as AF
APB2 : F max =48 / 72 MHz
NVIC
SPI1
MOSI,MISO,
SCK,NSS as AF
12bit ADC2
IF
IF
interface
@VDDA
SUPERVISION
PVD
Rst
Int
@VDD
AHB2
APB2 APB1
AWU
TAMPER-RTC
@VDD
USB 2.0 FS
USBDM/CAN_RX
System
ai14390d
TRACECLK
TRACED[0:3]
as AS
SW/JTAG
TPIU
Trace/trig
CK, SmartCard as AF

                                <!-- *P12*/114 -->


**Figure 2**. Clock tree

1. When the HSI is used as a PLL clock input, the maximum system clock frequency that can be achieved is
64 MHz.
2. For the availability of the USB function both HSE and PLL must be enabled, with USBCLK running at
48 MHz.
3. To have an ADC conversion time of 1 µs, APB2 must be at 14 MHz, 28 MHz, or 56 MHz.
HSE OSC
4-16 MHz
OSC_IN
OSC_OUT
OSC32_IN
OSC32_OUT
LSE OSC
32.768 kHz
HSI RC
8 MHz
LSI RC
40 kHz
to Independent Watchdog (IWDG)
PLL
x2, x3, x4
PLLMUL
Legend:
MCO
Clock Output
Main
PLLXTPRE
/2
..., x16
AHB
Prescaler
/1, 2..512
/2 PLLCLK
HSI
HSE
APB1
Prescaler
/1, 2, 4, 8, 16
ADC
Prescaler
/2, 4, 6, 8
ADCCLK
PCLK1
HCLK
PLLCLK
to AHB bus, core,
memory and DMA
USBCLK
to USB interface
to TIM2, 3
and 4
USB
Prescaler
/1, 1.5
to ADC
LSE
LSI
HSI
/128
/2
HSI
HSE
peripherals
to APB1
Peripheral Clock
Enable (13 bits)
Enable (3 bits)
Peripheral Clock
APB2
Prescaler
/1, 2, 4, 8, 16
PCLK2
to TIM1
peripherals
to APB2
Peripheral Clock
Enable (11 bits)
Enable (1 bit)
Peripheral Clock
48 MHz
72 MHz max
72 MHz
72 MHz max
36 MHz max
to RTC
PLLSRC
SW
MCO
CSS
to Cortex System timer
/8
Clock
Enable (3 bits)
SYSCLK
max
RTCCLK
RTCSEL[1:0]
TIM1CLK
TIMXCLK
IWDGCLK
SYSCLK
FCLK Cortex
free running clock
TIM2,3, 4
If (APB1 prescaler =1) x1
else x2
TIM1 timer
If (APB2 prescaler =1) x1
else x2
HSE = high-speed external clock signal
HSI = high-speed internal clock signal
LSI = low-speed internal clock signal
LSE = low-speed external clock signal
ai14903
FLITFCLK
to Flash programming interface

                                <!-- *13*/114 -->


//2.2 Full compatibility throughout the family
----------------------------------------------
STM32F103xx is a complete family whose members are fully pin-to-pin, software, and
feature compatible. In the reference manual, STM32F103x4 and STM32F103x6 are
identified as low-density devices, STM32F103x8 and STM32F103xB are referred to as
medium-density devices, and STM32F103xC, STM32F103xD, and STM32F103xE are
referred to as high-density devices.
Low- and high-density devices are an extension of the STM32F103x8/B devices; they are
specified in the STM32F103x4/6 and STM32F103xC/D/E datasheets, respectively.
Low-density devices feature lower flash memory and RAM capacities, and fewer timers and
peripherals. High-density devices have higher flash memory and RAM capacities, and
additional peripherals like SDIO, FSMC, I 2 S, and DAC, while remaining fully compatible with
the other members of the STM32F103xx family.
The STM32F103x4, STM32F103x6, STM32F103xC, STM32F103xD and STM32F103xE
are a drop-in replacement for STM32F103x8/B medium-density devices, allowing the user
to try different memory densities and providing a greater degree of freedom during the
development cycle.
Moreover, the STM32F103xx performance line family is fully compatible with all existing
STM32F101xx access line and STM32F102xx USB access line devices.


**Table 3**. STM32F103xx family

Pinout
Low-density devices Medium-density devices High-density devices
16 KB
Flash
32 KB
Flash
64 KB
Flash
128 KB
Flash
256 KB
Flash
384 KB
Flash
512 KB
Flash
6 KB RAM 10 KB RAM 20 KB RAM 20 KB RAM 48 KB RAM 64 KB RAM 64 KB RAM
144 - - - - 5× USARTs
4× 16-bit timers, 2× basic timers
3× SPIs, 2× I 2 Ss, 2× I2Cs
USB, CAN, 2× PWM timers
3× ADCs, 2× DACs, 1× SDIO
FSMC (100 and 144 pins)
100 - -
3× USARTs
3× 16-bit timers
2× SPIs, 2× I2Cs, USB,
CAN, 1× PWM timer
2× ADCs
64
2× USARTs
2× 16-bit timers
1× SPI, 1× I2C, USB,
CAN, 1× PWM timer
2× ADCs
48 - - -
36 - - -

                                <!-- *P14*/114 -->


//2.3 Overview
--------------

//2.3.1 Arm® Cortex®-M3 core with embedded flash and SRAM
---------------------------------------------------------
The Arm® Cortex®-M3 processor is the latest generation of Arm® processors for embedded
systems. It has been developed to provide a low-cost platform that meets the needs of MCU
implementation, with a reduced pin count and low-power consumption, while delivering
outstanding computational performance and an advanced system response to interrupts.
The Arm® Cortex®-M3 32-bit RISC processor features exceptional code-efficiency,
delivering the high-performance expected from an Arm® core in the memory size usually
associated with 8- and 16-bit devices.
The STM32F103xx performance line family having an embedded Arm® core, it is
compatible with all Arm® tools and software.
Figure 1 shows the general block diagram of the device family.

//2.3.2 Embedded flash memory
-----------------------------
64 or 128 Kbytes of embedded flash memory is available for storing programs and data.

//2.3.3 CRC (cyclic redundancy check) calculation unit
------------------------------------------------------
The CRC (cyclic redundancy check) calculation unit is used to get a CRC code from a 32-bit
data word and a fixed generator polynomial.
Among other applications, CRC-based techniques are used to verify data transmission or
storage integrity. In the scope of the EN/IEC 60335-1 standard, they offer a means of
verifying the flash memory integrity. The CRC calculation unit helps compute a signature of
the software during runtime, to be compared with a reference signature generated at link-
time and stored at a given memory location.

//2.3.4 Embedded SRAM
---------------------
Twenty Kbytes of embedded SRAM accessed (read/write) at CPU clock speed with 0 wait
states.

//2.3.5 Nested vectored interrupt controller (NVIC)
---------------------------------------------------
The STM32F103xx performance line embeds a nested vectored interrupt controller able to
handle up to 43 maskable interrupt channels (not including the 16 interrupt lines of Cortex® -
M3) and 16 priority levels.
• Closely coupled NVIC gives low-latency interrupt processing
• Interrupt entry vector table address passed directly to the core
• Closely coupled NVIC core interface
• Allows early processing of interrupts
• Processing of late arriving higher priority interrupts
• Support for tail-chaining
• Processor state automatically saved
• Interrupt entry restored on interrupt exit with no instruction overhead

                                <!-- *15*/114 -->

This hardware block provides flexible interrupt management features with minimal interrupt
latency.

//2.3.6 External interrupt/event controller (EXTI)
--------------------------------------------------
The external interrupt/event controller consists of 19 edge detector lines used to generate
interrupt/event requests. Each line can be independently configured to select the trigger
event (rising edge, falling edge, both) and can be masked independently. A pending register
maintains the status of the interrupt requests. The EXTI can detect an external line with a
pulse width shorter than the internal APB2 clock period. Up to 80 GPIOs can be connected
to the 16 external interrupt lines.

//2.3.7 Clocks and startup
--------------------------
System clock selection is performed on startup, but the internal RC 8 MHz oscillator is
selected as the default CPU clock on reset. An external 4-16 MHz clock can be selected, in
which case it is monitored for failure. If failure is detected, the system automatically switches
back to the internal RC oscillator. A software interrupt is generated if enabled. Similarly, full
interrupt management of the PLL clock entry is available when necessary (for example, on
failure of an indirectly used external crystal, resonator, or oscillator).
Several prescalers allow the configuration of the AHB frequency, the high-speed APB
(APB2) and the low-speed APB (APB1) domains. The maximum frequency of the AHB and
the high-speed APB domains is 72 MHz. The maximum allowed frequency of the low-speed
APB domain is 36 MHz. See Figure 2 for details on the clock tree.

//2.3.8 Boot modes
------------------
At startup, boot pins are used to select one of three boot options:
• Boot from user Flash
• Boot from system memory
• Boot from embedded SRAM
The bootloader is located in the system memory. It is used to reprogram the flash memory
by using USART1. For further details, refer to AN2606, available on www.st.com.

//2.3.9 Power supply schemes
----------------------------
• V DD = 2.0 to 3.6 V: external power supply for I/Os and the internal regulator.
Provided externally through V DD pins.
• V SSA , V DDA = 2.0 to 3.6 V: external analog power supplies for ADC, reset blocks, RCs,
and PLL (minimum voltage to be applied to V DDA is 2.4 V when the ADC is used).
V DDA and V SSA must be connected to V DD and V SS , respectively.
• V BAT = 1.8 to 3.6 V: power supply for RTC, external clock 32 kHz oscillator and backup
registers (through power switch) when V DD is not present.
For more details on how to connect power pins, refer to Figure 14: Power supply scheme.

//2.3.10 Power supply supervisor
--------------------------------
The device has an integrated power-on reset (POR)/power-down reset (PDR) circuitry. It is
always active, and ensures proper operation starting from/down to 2 V. The device remains

                                <!-- *P16*/114 -->

in reset mode when V DD is below a specified threshold, V POR/PDR , without the need for an
external reset circuit.
The device features an embedded programmable voltage detector (PVD) that monitors the
V DD /V DDA power supply and compares it to the V PVD threshold. An interrupt can be
generated when V DD /V DDA drops below the V PVD threshold and/or when V DD /V DDA is
higher than the V PVD threshold. The interrupt service routine can then generate a warning
message and/or put the MCU into a safe state. The PVD is enabled by software.
Refer to Table 11 for the values of V POR/PDR and V PVD .

//2.3.11 Voltage regulator
--------------------------
The regulator has three operation modes: main (MR), low-power (LPR) and power down.
• MR is used in the nominal regulation mode (Run)
• LPR is used in the Stop mode
• Power down is used in Standby mode: the regulator output is in high impedance: the
kernel circuitry is powered down, inducing zero consumption (but the contents of the
registers and SRAM are lost)
This regulator is always enabled after reset. It is disabled in Standby mode, providing high
impedance output.

//2.3.12 Low-power modes
------------------------
The STM32F103xx performance line supports three low-power modes to achieve the best
compromise between low-power consumption, short startup time and available wakeup
sources:
• Sleep mode
In Sleep mode, only the CPU is stopped. All peripherals continue to operate and can
wake up the CPU when an interrupt/event occurs.
• Stop mode
The Stop mode achieves the lowest power consumption while retaining the content of
SRAM and registers. All clocks in the 1.8 V domain are stopped, the PLL, the HSI RC
and the HSE crystal oscillators are disabled. The voltage regulator can also be put
either in normal or in low-power mode.
The device can be woken up from Stop mode by any of the EXTI lines. The EXTI line
source can be one of the 16 external lines, the PVD output, the RTC alarm or the USB
wakeup.
• Standby mode
The Standby mode is used to achieve the lowest power consumption. The internal
voltage regulator is switched off so that the entire 1.8 V domain is powered off. The
PLL, the HSI RC and the HSE crystal oscillators are also switched off. After entering
Standby mode, SRAM and register contents are lost except for registers in the Backup
domain and Standby circuitry.
The device exits Standby mode when an external reset (NRST pin), an IWDG reset, a
rising edge on the WKUP pin, or an RTC alarm occurs.
Note: The RTC, the IWDG, and the corresponding clock sources are not stopped by entering Stop
or Standby mode.

                                <!-- *17*/114 -->


//2.3.13 DMA
------------
The flexible 7-channel general-purpose DMA is able to manage memory-to-memory,
peripheral-to-memory and memory-to-peripheral transfers. The DMA controller supports
circular buffer management avoiding the generation of interrupts when the controller
reaches the end of the buffer.
Each channel is connected to dedicated hardware DMA requests, with support for software
trigger on each channel. Configuration is made by software and transfer sizes between
source and destination are independent.
The DMA can be used with the main peripherals: SPI, I2C, USART, general-purpose and
advanced-control timers TIMx and ADC.

//2.3.14 RTC (real-time clock) and backup registers
---------------------------------------------------
The RTC and the backup registers are supplied through a switch that takes power either on
V DD supply when present or through the V BAT pin. The backup registers are ten 16-bit
registers used to store 20 bytes of user application data when V DD power is not present.
The real-time clock provides a set of continuously running counters which can be used with
suitable software to provide a clock calendar function, and provides an alarm interrupt and a
periodic interrupt. It is clocked by a 32.768 kHz external crystal, resonator or oscillator, the
internal low-power RC oscillator or the high-speed external clock divided by 128. The
internal low-power RC has a typical frequency of 40 kHz. The RTC can be calibrated using
an external 512 Hz output to compensate for any natural crystal deviation. The RTC
features a 32-bit programmable counter for long-term measurement using the Compare
register to generate an alarm. A 20-bit prescaler is used for the time base clock and is by
default configured to generate a time base of 1 second from a clock at 32.768 kHz.

//2.3.15 Timers and watchdogs
-----------------------------
The medium-density STM32F103xx performance line devices include an advanced-control
timer, three general-purpose timers, two watchdog timers and a SysTick timer.
Table 4 compares the features of the advanced-control and general-purpose timers.


**Table 4**. Timer feature comparison

Timer
Counter
resolution
Counter
type
Prescaler
factor
DMA request
generation
Capture/compare
channels
Complementary
outputs
TIM1 16-bit
Up,
down,
up/down
Any integer
between 1
and 65536
Yes 4 Yes
TIM2,
TIM3,
TIM4
16-bit
Up,
down,
up/down
Any integer
between 1
and 65536
Yes 4 No

                                <!-- *P18*/114 -->

Advanced-control timer (TIM1)
The advanced-control timer (TIM1) can be seen as a three-phase PWM multiplexed on 6
channels. It has complementary PWM outputs with programmable inserted dead-times. It
can also be seen as a complete general-purpose timer. The 4 independent channels can be
used for
• Input capture
• Output compare
• PWM generation (edge- or center-aligned modes)
• One-pulse mode output
If configured as a general-purpose 16-bit timer, it has the same features as the TIMx timer. If
configured as the 16-bit PWM generator, it has full modulation capability (0-100%).
In debug mode, the advanced-control timer counter can be frozen and the PWM outputs
disabled to turn off any power switch driven by these outputs.
Many features are shared with those of the general-purpose TIM timers which have the
same architecture. The advanced-control timer can therefore work together with the TIM
timers via the Timer Link feature for synchronization or event chaining.
General-purpose timers (TIMx)
There are up to three synchronizable general-purpose timers embedded in the
STM32F103xx performance line devices. These timers are based on a 16-bit auto-reload
up/down counter, a 16-bit prescaler and feature four independent channels each for input
capture/output compare, PWM or one-pulse mode output. This gives up to 12 input
captures/output compares/PWMs on the largest packages.
The general-purpose timers can work together with the advanced-control timer via the Timer
Link feature for synchronization or event chaining. Their counter can be frozen in debug
mode. Any of the general-purpose timers can be used to generate PWM outputs. They all
have independent DMA request generation.
These timers are capable of handling quadrature (incremental) encoder signals and the
digital outputs from one to three Hall-effect sensors.
Independent watchdog
The independent watchdog is based on a 12-bit downcounter and 8-bit prescaler. It is
clocked from an independent 40 kHz internal RC and as it operates independently of the
main clock, it can operate in Stop and Standby modes. It can be used either as a watchdog
to reset the device when a problem occurs, or as a free-running timer for application timeout
management. It is hardware- or software-configurable through the option bytes. The counter
can be frozen in debug mode.
Window watchdog
The window watchdog is based on a 7-bit downcounter that can be set as free-running. It
can be used as a watchdog to reset the device when a problem occurs. It is clocked from
the main clock. It has an early warning interrupt capability and the counter can be frozen in
debug mode.

                                <!-- *19*/114 -->

SysTick timer
This timer is dedicated for OS, but can be used also as a standard downcounter. It features:
• A 24-bit downcounter
• Autoreload capability
• Maskable system interrupt generation when the counter reaches 0
• Programmable clock source

//2.3.16 I²C bus
----------------
Up to two I²C bus interfaces can operate in multimaster and slave modes. They can support
standard and fast modes.
They support dual slave addressing (7-bit only) and both 7/10-bit addressing in master
mode. A hardware CRC generation/verification is embedded.
They can be served by DMA and they support SM Bus 2.0/PM Bus.

//2.3.17 Universal synchronous/asynchronous receiver transmitter (USART)
------------------------------------------------------------------------
One of the USART interfaces is able to communicate at speeds of up to 4.5 Mbit/s. The
other available interfaces communicate at up to 2.25 Mbit/s. They provide hardware
management of the CTS and RTS signals, IrDA SIR ENDEC support, are ISO 7816
compliant and have LIN Master/Slave capability.
All USART interfaces can be served by the DMA controller.

//2.3.18 Serial peripheral interface (SPI)
------------------------------------------
Up to two SPIs are able to communicate up to 18 Mbits/s in slave and master modes in
full-duplex and simplex communication modes. The 3-bit prescaler gives 8 master mode
frequencies and the frame is configurable to 8 bits or 16 bits. The hardware CRC
generation/verification supports basic SD Card/MMC modes.
Both SPIs can be served by the DMA controller.

//2.3.19 Controller area network (CAN)
--------------------------------------
The CAN is compliant with specifications 2.0A and B (active) with a bit rate up to 1 Mbit/s. It
can receive and transmit standard frames with 11-bit identifiers as well as extended frames
with 29-bit identifiers. It has three transmit mailboxes, two receive FIFOs with three stages
and 14 scalable filter banks.

//2.3.20 Universal serial bus (USB)
-----------------------------------
The STM32F103xx performance line embeds a USB device peripheral compatible with the
USB full-speed 12 Mbs. The USB interface implements a full-speed (12 Mbit/s) function
interface. It has software-configurable endpoint setting and suspend/resume support. The
dedicated 48 MHz clock is generated from the internal main PLL (the clock source must use
a HSE crystal oscillator).

                                <!-- *P20*/114 -->


//2.3.21 GPIOs (general-purpose inputs/outputs)
-----------------------------------------------
Each of the GPIO pins can be configured by software as output (push-pull or open-drain), as
input (with or without pull-up or pull-down) or as peripheral alternate function. Most of the
GPIO pins are shared with digital or analog alternate functions. All GPIOs are high current-
capable.
The I/Os alternate function configuration can be locked if needed following a specific
sequence in order to avoid spurious writing to the I/Os registers.
I/Os on APB2 with up to 18 MHz toggling speed.

//2.3.22 ADC (analog-to-digital converter)
------------------------------------------
Two 12-bit analog-to-digital converters are embedded into STM32F103xx performance line
devices and each ADC shares up to 16 external channels, performing conversions in single-
shot or scan modes. In scan mode, automatic conversion is performed on a selected group
of analog inputs.
Additional logic functions embedded in the ADC interface allow:
• Simultaneous sample and hold
• Interleaved sample and hold
• Single shunt
The ADC can be served by the DMA controller.
An analog watchdog feature allows very precise monitoring of the converted voltage of one,
some or all selected channels. An interrupt is generated when the converted voltage is
outside the programmed thresholds.
The events generated by the general-purpose timers (TIMx) and the advanced-control timer
(TIM1) can be internally connected to the ADC start trigger, injection trigger, and DMA
trigger respectively, to allow the application to synchronize A/D conversion and timers.

//2.3.23 Temperature sensor
---------------------------
The temperature sensor has to generate a voltage that varies linearly with temperature. The
conversion range is between 2 V < V DDA < 3.6 V. The temperature sensor is internally
connected to the ADC12_IN16 input channel which is used to convert the sensor output
voltage into a digital value.

//2.3.24 Serial wire JTAG debug port (SWJ-DP)
---------------------------------------------
The Arm SWJ-DP Interface is embedded. and is a combined JTAG and serial wire debug
port that enables either a serial wire debug or a JTAG probe to be connected to the target.
The JTAG TMS and TCK pins are shared with SWDIO and SWCLK, respectively, and a
specific sequence on the TMS pin is used to switch between JTAG-DP and SW-DP.

                                <!-- *21*/114 -->


/3 Pinouts and pin description
==============================


**Figure 3**. STM32F103xx performance line LFBGA100 ballout


                                <!-- *P22*/114 -->


**Figure 4**. STM32F103xx performance line LQFP100 pinout

ai14391
100
99
98
97
96
95
94
93
92
91
90
89
88
87
86
85
84
83
82
81
80
79
78
77
76
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
75
74
73
72
71
70
69
68
67
66
65
64
63
62
61
60
59
58
57
56
55
54
53
52
51
VDD_2
VSS_2
NC
PA 13
PA 12
PA 11
PA 10
PA 9
PA 8
PC9
PC8
PC7
PC6
PD15
PD14
PD13
PD12
PD11
PD10
PD9
PD8
PB15
PB14
PB13
PB12
PA3
VSS_4
VDD_4
PA4
PA5
PA6
PA7
PC4
PC5
PB0
PB1
PB2
PE7
PE8
PE9
PE10
PE11
PE12
PE13
PE14
PE15
PB10
PB11
VSS_1
VDD_1
VDD_3
VSS_3
PE1
PE0
PB9
PB8
BOOT0
PB7
PB6
PB5
PB4
PB3
PD7
PD6
PD5
PD4
PD3
PD2
PD1
PD0
PC12
PC11
PC10
PA15
PA14
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
PE2
PE3
PE4
PE5
PE6
VBAT
PC13-TAMPER-RTC
PC14-OSC32_IN
PC15-OSC32_OUT
VSS_5
VDD_5
OSC_IN
OSC_OUT
NRST
PC0
PC1
PC2
PC3
VSSA
VREF-
VREF+
VDDA
PA0-WKUP
PA1
PA2
LQFP100

                                <!-- *23*/114 -->


**Figure 5**. STM32F103xx performance line UFBGA100 pinout

MS30481V1
A
B
E
D
C
F
G
H
J
K
L
M
PE3
OSC_IN
PC15
OSC32_OUT
PC14
RTC_TAMPER
PE4
OSC_OUT
PC0
VSSA
VREF-
VREF+
VDDA
PE1
PE5
PE2
PE6
VBAT
VSS_5
VDD_5
NRST
PC1
PC3
PA0
WKUP1
PA1
PB8
PE0
PB9
VSS_3
VSS_4
VDD_4
PC2
PA2
PA3
PA4
BOOT0
PB7
VDD_3
PA5
PA6
PA7
PD7
PB6
PB5
PC4
PC5
PB0
PD5
PD6
PB2
PB1
PB4
PD4
PE8
PE7
PB3
PD3
PD2
PD9
PE10
PE9
PA15
PD1
PD0
PD8
PE12
PE11
PA14
PC12
PC11
PC8
PA9
PD15
PD12
PB15
PB10
PE13
PA13
PC10
NC
PA8
PC7
PD14
PD11
PB14
PB11
PE14
VSS_2
VDD_2
PA12
PA11
PA10
PC9
PC6
PD13
PD10
PB13
PB12
PE15
VSS_1
VDD_1
2 3 4 5 6 7 8 9 10 11 12 1
PC13
OSC32_IN

                                <!-- *P24*/114 -->


**Figure 6**. STM32F103xx performance line LQFP64 pinout

64 63 62 61 60 59 58 57 56 55 54 53 52 51 50 49
48
47
46
45
44
43
42
41
40
39
38
37
36
35
34
33
17 18 19 20 21 22 23 24 29 30 31 32 25 26 27 28
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
V BAT
PC13-TAMPER-RTC
PC 14-OSC 32_IN
PC 15-OSC 32_OU T
PD0-OS C_IN
PD1-OS C_OUT
NRST
PC0
PC1
PC2
PC3
V SSA
V DDA
PA 0-WKUP
PA 1
PA 2
V DD_3
V SS_3
PB 9
PB 8
BOO T0
PB 7
PB 6
PB 5
PB 4
PB 3
PD2
PC12
PC11
PC10
PA 15
PA 14
V DD_2
V SS_2
PA 13
PA 12
PA 11
PA 10
PA 9
PA 8
PC9
PC8
PC7
PC6
PB 15
PB 14
PB 13
PB 12
PA 3
V SS_4
V DD_4
PA 4
PA 5
PA 6
PA 7
PC4
PC5
PB 0
PB 1
PB 2
PB1 0
PB1 1
V SS_1
V DD_1
LQFP64
ai14392

                                <!-- *25*/114 -->


**Figure 7**. STM32F103xx performance line TFBGA64 ballout

AI15494
PB2
PC14-
OSC32_IN
PA7 PA4
PA2
PA15
PB11
PB1 PA6 PA3
H
PB10
PC5 PC4
D PA8
PA9
BOOT0
PB8
C
PC9
PA11
PB6
PC12
V DDA
PB9
B PA12 PC10
PC15-
OSC32_OUT
PB3
PD2
A
8 7 6 5 4 3 2 1
V SS_4 OSC_IN
OSC_OUT
V DD_4
G
F
E
PC2
V REF+
PC13-
TAMPER-RTC
PB4 PA13 PA14
PB7 PB5
V SS_3
PC7 PC8 PC0 NRST PC1
PB0 PA5 PB14
V DD_2 V DD_3
PB13
V BAT
PC11
PA10
V SS_2 V SS_1
PC6 V SSA
PA1
V DD_1
PB15
PB12
PA0-WKUP

                                <!-- *P26*/114 -->


**Figure 8**. STM32F103xx performance line LQFP48 pinout


**Figure 9**. STM32F103xx performance line UFQFPN48 pinout

44 43 42 41 40 39 38 37
36
35
34
33
32
31
30
29
28
27
26
25
24 23
12
13 14 15 16 17 18 19 20 21 22
1
2
3
4
5
6
7
8
9
10
11
48 47 46 45
PA3
PA4
PA5
PA6
PA7
PB0
PB1
PB2
PB10
PB11
VSS_1
VDD_1
VDD_2
VSS_2
PA13
PA12
PA11
PA10
PA9
PA8
PB15
PB14
PB13
PB12
VBAT
PC13-TAMPER-RTC
PC14-OSC32_IN
PC15-OSC32_OUT
PD0-OSC_IN
PD1-OSC_OUT
NRST
VSSA
VDDA
PA0-WKUP
PA1
PA2
VDD_3
VSS_3
PB9
PB8
BOOT0
PB7
PB6
PB5
PB4
PB3
PA15
PA14
LQFP48
ai14393b

MS31472V1
VDD_3
VSS_3
PB9
PB8
BOOT0
PB7
PB6
PB5
PB4
PB3
PA15
PA14
PA3
PA4
PA5
PA6
PA7
PB0
PB1
PB2
PB10
PB11
VSS_1
VDD_1
VBAT
PC13-TAMPER-RTC
PC14-OSC32_IN
PC15-OSC32_OUT
PD0-OSC_IN
PD1-OSC_OUT
NRST
VSSA
VDDA
PA0-WKUP
PA1
PA2
VDD_2
VSS_2
PA13
PA12
PA11
PA10
PA9
PA8
PB15
PB14
PB13
PB12
48
QFPN48
47 46 45 44 43 42 41 40 39 38 37
36
35
34
33
32
31
30
29
28
27
26
25
13 14 15 16 17 18 19 20 21 22 23 24
1
2
3
4
5
6
7
8
9
10
11
12

                                <!-- *27*/114 -->


**Figure 10**. STM32F103xx performance line VFQFPN36 pinout

V SS_3
BOOT0
PB7
PB6
PB5
PB4
PB3
PA15
PA14
36 35 34 33 32 31 30 29 28
V DD_3
1 27
V DD_2
OSC_IN/PD0 2
26
V SS_2
OSC_OUT/PD1 3
25
PA13
NRST 4
QFN36
24 PA12
V SSA 5 23 PA11
V DDA 6 22 PA10
PA0-WKUP 7
21
PA9
PA1 8 20 PA8
PA2 9
19
V DD_1
10 11 12 13 14 15 16 17 18
PA3
PA4
PA5
PA6
PA7
PB0
PB1
PB2
V SS_1
ai14654


                                <!-- *P28*/114 -->



**Table 5**. Medium-density STM32F103xx pin definitions

Pins
Pin name
Type (1)
I / O Level (2)
Main
function (3)
(after reset)
Alternate functions (4)
LFBGA100
UFBG100
LQFP48/UFQFPN48
TFBGA64
LQFP64
LQFP100
VFQFPN36
Default Remap
A3 B2 - - - 1 - PE2 I/O FT PE2 TRACECK -
B3 A1 - - - 2 - PE3 I/O FT PE3 TRACED0 -
C3 B1 - - - 3 - PE4 I/O FT PE4 TRACED1 -
D3 C2 - - - 4 - PE5 I/O FT PE5 TRACED2 -
E3 D2 - - - 5 - PE6 I/O FT PE6 TRACED3 -
B2 E2 1 B2 1 6 - V BAT S - V BAT - -
A2 C1 2 A2 2 7 -
PC13-TAMPER-
RTC (5)
I/O - PC13 (6) TAMPER-RTC -
A1 D1 3 A1 3 8 - PC14-OSC32_IN (5) I/O - PC14 (6) OSC32_IN -
B1 E1 4 B1 4 9 -
PC15-
OSC32_OUT (5)
I/O - PC15 (6) OSC32_OUT -
C2 F2 - - - 10 - V SS_5 S - V SS_5 - -
D2 G2 - - - 11 - V DD_5 S - V DD_5 -
C1 F1 5 C1 5 12 2 OSC_IN I - OSC_IN - PD0 (7)
D1 G1 6 D1 6 13 3 OSC_OUT O - OSC_OUT PD1 (7)
E1 H2 7 E1 7 14 4 NRST I/O - NRST - -
F1 H1 - E3 8 15 - PC0 I/O - PC0 ADC12_IN10 -
F2 J2 - E2 9 16 - PC1 I/O - PC1 ADC12_IN11 -
E2 J3 - F2 10 17 - PC2 I/O - PC2 ADC12_IN12 -
F3 K2 - - (8) 11 18 - PC3 I/O - PC3 ADC12_IN13 -
G1 J1 8 F1 12 19 5 V SSA S - V SSA - -
H1 K1 - - - 20 - V REF- S - V REF- - -
J1 L1 - G1 (8) - 21 - V REF+ S - V REF+ - -
K1 M1 9 H1 13 22 6 V DDA S - V DDA - -

                                <!-- *29*/114 -->

    G2 L2 10 G2 14 23 7 PA0-WKUP I/O - PA0
    WKUP/
    USART2_CTS (9) /
    ADC12_IN0/
    TIM2_CH1_
    ETR (9)
    -
    H2 M2 11 H2 15 24 8 PA1 I/O - PA1
    USART2_RTS (9) /
    ADC12_IN1/
    TIM2_CH2 (9)
    -
    J2 K3 12 F3 16 25 9 PA2 I/O - PA2
    USART2_TX (9) /
    ADC12_IN2/
    TIM2_CH3 (9)
    -
    K2 L3 13 G3 17 26 10 PA3 I/O - PA3
    USART2_RX (9) /
    ADC12_IN3/
    TIM2_CH4 (9)
    -
    E4 E3 - C2 18 27 - V SS_4 S - V SS_4 - -
    F4 H3 - D2 19 28 - V DD_4 S - V DD_4 - -
    G3 M3 14 H3 20 29 11 PA4 I/O - PA4
    SPI1_NSS (9) /
    USART2_CK (9) /
    ADC12_IN4
    -
    H3 K4 15 F4 21 30 12 PA5 I/O - PA5
    SPI1_SCK (9) /
    ADC12_IN5
    -
    J3 L4 16 G4 22 31 13 PA6 I/O - PA6
    SPI1_MISO (9) /
    ADC12_IN6/
    TIM3_CH1 (9)
    TIM1_BKIN
    K3 M4 17 H4 23 32 14 PA7 I/O - PA7
    SPI1_MOSI (9) /
    ADC12_IN7/
    TIM3_CH2 (9)
    TIM1_CH1N
    G4 K5 - H5 24 33 PC4 I/O - PC4 ADC12_IN14 -
    H4 L5 - H6 25 34 PC5 I/O - PC5 ADC12_IN15 -
    J4 M5 18 F5 26 35 15 PB0 I/O - PB0
    ADC12_IN8/
    TIM3_CH3 (9)
    TIM1_CH2N
    K4 M6 19 G5 27 36 16 PB1 I/O - PB1
    ADC12_IN9/
    TIM3_CH4 (9)
    TIM1_CH3N
    Table 5. Medium-density STM32F103xx pin definitions (continued)
    Pins
    Pin name
    Type (1)
    I / O Level (2)
    Main
    function (3)
    (after reset)
    Alternate functions (4)
    LFBGA100
    UFBG100
    LQFP48/UFQFPN48
    TFBGA64
    LQFP64
    LQFP100
    VFQFPN36
    Default Remap

                                <!-- *P30*/114 -->

    G5 L6 20 G6 28 37 17 PB2 I/O FT PB2/BOOT1 - -
    H5 M7 - - - 38 - PE7 I/O FT PE7 - TIM1_ETR
    J5 L7 - - - 39 - PE8 I/O FT PE8 - TIM1_CH1N
    K5 M8 - - - 40 - PE9 I/O FT PE9 - TIM1_CH1
    G6 L8 - - - 41 - PE10 I/O FT PE10 - TIM1_CH2N
    H6 M9 - - - 42 - PE11 I/O FT PE11 - TIM1_CH2
    J6 L9 - - - 43 - PE12 I/O FT PE12 - TIM1_CH3N
    K6 M10 - - - 44 - PE13 I/O FT PE13 - TIM1_CH3
    G7 M11 - - - 45 - PE14 I/O FT PE14 - TIM1_CH4
    H7 M12 - - - 46 - PE15 I/O FT PE15 - TIM1_BKIN
    J7 L10 21 G7 29 47 - PB10 I/O FT PB10
    I2C2_SCL/
    USART3_TX (9)
    TIM2_CH3
    K7 L11 22 H7 30 48 - PB11 I/O FT PB11
    I2C2_SDA/
    USART3_RX (9)
    TIM2_CH4
    E7 F12 23 D6 31 49 18 V SS_1 S - V SS_1 - -
    F7 G12 24 E6 32 50 19 V DD_1 S - V DD_1 - -
    K8 L12 25 H8 33 51 - PB12 I/O FT PB12
    SPI2_NSS/
    I2C2_SMBAl/
    USART3_CK (9) /
    TIM1_BKIN (9)
    -
    J8 K12 26 G8 34 52 - PB13 I/O FT PB13
    SPI2_SCK/
    USART3_CTS (9) /
    TIM1_CH1N (9)
    -
    H8 K11 27 F8 35 53 - PB14 I/O FT PB14
    SPI2_MISO/
    USART3_RTS (9)
    TIM1_CH2N (9)
    -
    G8 K10 28 F7 36 54 - PB15 I/O FT PB15
    SPI2_MOSI/
    TIM1_CH3N (9)
    -
    K9 K9 - - - 55 - PD8 I/O FT PD8 - USART3_TX
    J9 K8 - - - 56 - PD9 I/O FT PD9 - USART3_RX
    Table 5. Medium-density STM32F103xx pin definitions (continued)
    Pins
    Pin name
    Type (1)
    I / O Level (2)
    Main
    function (3)
    (after reset)
    Alternate functions (4)
    LFBGA100
    UFBG100
    LQFP48/UFQFPN48
    TFBGA64
    LQFP64
    LQFP100
    VFQFPN36
    Default Remap

                                <!-- *31*/114 -->

    H9 J12 - - - 57 - PD10 I/O FT PD10 - USART3_CK
    G9 J11 - - - 58 - PD11 I/O FT PD11 - USART3_CTS
    K10 J10 - - - 59 - PD12 I/O FT PD12 -
    TIM4_CH1 /
    USART3_RTS
    J10 H12 - - - 60 - PD13 I/O FT PD13 - TIM4_CH2
    H10 H11 - - - 61 - PD14 I/O FT PD14 - TIM4_CH3
    G10 H10 - - - 62 - PD15 I/O FT PD15 - TIM4_CH4
    F10 E12 - F6 37 63 - PC6 I/O FT PC6 - TIM3_CH1
    E10 E11 E7 38 64 - PC7 I/O FT PC7 - TIM3_CH2
    F9 E10 E8 39 65 - PC8 I/O FT PC8 - TIM3_CH3
    E9 D12 - D8 40 66 - PC9 I/O FT PC9 - TIM3_CH4
    D9 D11 29 D7 41 67 20 PA8 I/O FT PA8
    USART1_CK/
    TIM1_CH1 (9) /
    MCO
    -
    C9 D10 30 C7 42 68 21 PA9 I/O FT PA9
    USART1_TX (9) /
    TIM1_CH2 (9)
    -
    D10 C12 31 C6 43 69 22 PA10 I/O FT PA10
    USART1_RX (9) /
    TIM1_CH3 (9)
    -
    C10 B12 32 C8 44 70 23 PA11 I/O FT PA11
    USART1_CTS/
    CANRX (9) /
    USBDM/
    TIM1_CH4 (9)
    -
    B10 A12 33 B8 45 71 24 PA12 I/O FT PA12
    USART1_RTS/
    CANTX (9)
    /USBDP
    TIM1_ETR (9)
    -
    A10 A11 34 A8 46 72 25 PA13 I/O FT JTMS/SWDIO - PA13
    F8 C11 - - - 73 - Not connected -
    E6 F11 35 D5 47 74 26 V SS_2 S - V SS_2 - -
    F6 G11 36 E5 48 75 27 V DD_2 S - V DD_2 - -
    Table 5. Medium-density STM32F103xx pin definitions (continued)
    Pins
    Pin name
    Type (1)
    I / O Level (2)
    Main
    function (3)
    (after reset)
    Alternate functions (4)
    LFBGA100
    UFBG100
    LQFP48/UFQFPN48
    TFBGA64
    LQFP64
    LQFP100
    VFQFPN36
    Default Remap

                                <!-- *P32*/114 -->

A9 A10 37 A7 49 76 28 PA14 I/O FT JTCK/SWCLK - PA14
A8 A9 38 A6 50 77 29 PA15 I/O FT JTDI -
TIM2_CH1_
ETR/ PA15
/SPI1_NSS
B9 B11 - B7 51 78 PC10 I/O FT PC10 - USART3_TX
B8 C10 - B6 52 79 PC11 I/O FT PC11 - USART3_RX
C8 B10 - C5 53 80 PC12 I/O FT PC12 - USART3_CK
D8 C9 - C1 - 81 2 PD0 I/O FT PD0 - CANRX
E8 B9 - D1 - 82 3 PD1 I/O FT PD1 - CANTX
B7 C8 B5 54 83 - PD2 I/O FT PD2 TIM3_ETR -
C7 B8 - - - 84 - PD3 I/O FT PD3 - USART2_CTS
D7 B7 - - - 85 - PD4 I/O FT PD4 - USART2_RTS
B6 A6 - - - 86 - PD5 I/O FT PD5 - USART2_TX
C6 B6 - - - 87 - PD6 I/O FT PD6 - USART2_RX
D6 A5 - - - 88 - PD7 I/O FT PD7 - USART2_CK
A7 A8 39 A5 55 89 30 PB3 I/O FT JTDO -
TIM2_CH2 /
PB3
TRACESWO
SPI1_SCK
A6 A7 40 A4 56 90 31 PB4 I/O FT JNTRST -
TIM3_CH1/
PB4/
SPI1_MISO
C5 C5 41 C4 57 91 32 PB5 I/O PB5 I2C1_SMBAl
TIM3_CH2 /
SPI1_MOSI
B5 B5 42 D3 58 92 33 PB6 I/O FT PB6
I2C1_SCL (9) /
TIM4_CH1 (9)
USART1_TX
A5 B4 43 C3 59 93 34 PB7 I/O FT PB7
I2C1_SDA (9) /
TIM4_CH2 (9)
USART1_RX
D5 A4 44 B4 60 94 35 BOOT0 I BOOT0 - -
Table 5. Medium-density STM32F103xx pin definitions (continued)
Pins
Pin name
Type (1)
I / O Level (2)
Main
function (3)
(after reset)
Alternate functions (4)
LFBGA100
UFBG100
LQFP48/UFQFPN48
TFBGA64
LQFP64
LQFP100
VFQFPN36
Default Remap

                                <!-- *33*/114 -->

B4 A3 45 B3 61 95 - PB8 I/O FT PB8 TIM4_CH3 (9)
I2C1_SCL /
CANRX
A4 B3 46 A3 62 96 - PB9 I/O FT PB9 TIM4_CH4 (9)
I2C1_SDA/
CANTX
D4 C3 - - - 97 - PE0 I/O FT PE0 TIM4_ETR -
C4 A2 - - - 98 - PE1 I/O FT PE1 - -
E5 D3 47 D4 63 99 36 V SS_3 S - V SS_3 - -
F5 C4 48 E4 64 100 1 V DD_3 S - V DD_3 - -
1. I = input, O = output, S = supply.
2. FT = 5 V tolerant.
3. Function availability depends upon the chosen device. For devices having reduced peripheral counts, it is always the lower
number of peripheral that is included. For example, if a device has only one SPI and two USARTs, they are called SPI1 and
USART1 and USART2, respectively. Refer to Table 2.
4. If several peripherals share the same I/O pin, to avoid conflict between these alternate functions only one peripheral should
be enabled at a time through the peripheral clock enable bit (in the corresponding RCC peripheral clock enable register).
5. PC13, PC14 and PC15 are supplied through the power switch. Since the switch only sinks a limited amount of current
(3 mA), the use of GPIOs PC13 to PC15 in output mode is limited: the speed should not exceed 2 MHz with a maximum
load of 30 pF and these IOs must not be used as a current source (e.g. to drive a LED).
6. Main function after the first backup domain power-up. Later on, it depends on the contents of the Backup registers even
after reset (because these registers are not reset by the main reset). For details on how to manage these IOs, refer to the
Battery backup domain and BKP register description sections in the STM32F10xxx reference manual, available from the
STMicroelectronics website: www.st.com.
7. The pins number 2 and 3 in the VFQFPN36 package, 5 and 6 in the LQFP48, UFQFP48 and LQFP64 packages, and C1
and C2 in the TFBGA64 package are configured as OSC_IN/OSC_OUT after reset, however the functionality of PD0 and
PD1 can be remapped by software on these pins. For the LQFP100 package, PD0 and PD1 are available by default, so
there is no need for remapping. For more details, refer to the Alternate function I/O and debug configuration section in the
STM32F10xxx reference manual.
The use of PD0 and PD1 in output mode is limited as they can only be used at 50 MHz in output mode.
8. Unlike in the LQFP64 package, there is no PC3 in the TFBGA64 package. The V REF+ functionality is provided instead.
9. This alternate function can be remapped by software to some other port pins (if available on the used package). For more
details, refer to the Alternate function I/O and debug configuration section in the STM32F10xxx reference manual, available
from the STMicroelectronics website: www.st.com.
Table 5. Medium-density STM32F103xx pin definitions (continued)
Pins
Pin name
Type (1)
I / O Level (2)
Main
function (3)
(after reset)
Alternate functions (4)
LFBGA100
UFBG100
LQFP48/UFQFPN48
TFBGA64
LQFP64
LQFP100
VFQFPN36
Default Remap

                                <!-- *P34*/114 -->


/4 Memory mapping
=================

The memory map is shown in Figure 11.

**Figure 11**. Memory map

MSv73632V1
TIM2
TIM3
TIM4
Reserved
RTC
WWDG
IWDG
Reserved
SPI2
Reserved
USART2
USART3
Reserved
I2C1
I2C2
USB registers
shared 512 byte
USB/CAN SRAM
bxCAN
Reserved
BKP
PWR
Reserved
AFIO
EXTI
Port A
Port B
Port C
Port D
Port E
Reserved
ADC1
ADC2
TIM1
SPI1
Reserved
USART1
Reserved
DMA
Reserved
RCC
Reserved
Flash interface
Reserved
CRC
Reserved
Reserved
Reserved
APB memory space
0xFFFF FFFF
0xE010 0000
0x6000 0000
0x4002 3400
0x4002 3000
0x4002 2400
0x4002 2000
0x4002 1400
0x4002 1000
0x4002 0400
0x4002 0000
0x4001 3C00
0x4001 3800
0x4001 3400
0x4001 3000
0x4001 2C00
0x4001 2800
0x4001 2400
0x4001 1C00
0x4001 1800
0x4001 1400
0x4001 1000
0x4001 0C00
0x4001 0800
0x4001 0400
0x4001 0000
0x4000 7400
0x4000 7000
0x4000 6C00
0x4000 6800
0x4000 6400
0x4000 6000
0x4000 5C00
0x4000 5800
0x4000 5400
0x4000 4C00
0x4000 4800
0x4000 4400
0x4000 3C00
0x4000 3800
0x4000 3400
0x4000 3000
0x4000 2C00
0x4000 2800
0x4000 0C00
0x4000 0800
0x4000 0400
0x4000 0000
Reserved
Option Bytes
System memory
Reserved
Flash memory
Aliased to flash or system
memory depending on
BOOT pins
0x1FFF FFFF
0x1FFF F80F
0x1FFF F800
0x1FFF F000
0x0801 FFFF
0x0800 0000
0x0000 0000
0x0000 0000
SRAM
Peripherals
Cortex-M3
internal
peripherals
0x2000 0000
0x4000 0000
0x6000 0000
0x8000 0000
0xA000 0000
0xC000 0000
0xE000 0000
0xE010 0000
0xFFFF FFFF
Reserved
7
6
5
4
3
2
1
0

                                <!-- *35*/114 -->


/5 Electrical characteristics
=============================


//5.1 Parameter conditions
--------------------------
Unless otherwise specified, all voltages are referenced to V SS .

//5.1.1 Minimum and maximum values
----------------------------------
Unless otherwise specified the minimum and maximum values are guaranteed in the worst
conditions of ambient temperature, supply voltage and frequencies by tests in production on
100% of the devices with an ambient temperature at T A = 25°C and T A = T A max (given by
the selected temperature range).
Data based on characterization results, design simulation and/or technology characteristics
are indicated in the table footnotes and are not tested in production. Based on
characterization, the minimum and maximum values refer to sample tests and represent the
mean value plus or minus three times the standard deviation (mean ± 3σ).

//5.1.2 Typical values
----------------------
Unless otherwise specified, typical data are based on T A = 25°C, V DD = 3.3 V (for the
2 V ≤ V DD ≤ 3.6 V voltage range). They are given only as design guidelines and are not
tested.
Typical ADC accuracy values are determined by characterization of a batch of samples from
a standard diffusion lot over the full temperature range, where 95% of the devices have an
error less than or equal to the value indicated (mean ± 2σ) .

//5.1.3 Typical curves
----------------------
Unless otherwise specified, all typical curves are given only as design guidelines and are
not tested.

//5.1.4 Loading capacitor
-------------------------
The loading conditions used for pin parameter measurement are shown in Figure 12.

//5.1.5 Pin input voltage
-------------------------
The input voltage measurement on a pin of the device is described in Figure 13.


**Figure 12**. Pin loading conditions 

**Figure 13**. Pin input voltage


             STM32F103xx pin                   STM32F103xx pin
                  │                                 │                    
     C = 50 pF  ┌─┴─┐                             ┌─┴─┐                  
         ┌─────>│   │                      ┌─────>│   │                  
         │      └─┬─┘                      │      └─┬─┘                  
       ──┴──      │                        ◯        │                    
       ──┬──      │                      ░░░░░      │                    
         │        └────────────            │  Vᵢₙ    └────────────        
         ⏚            ai14141              ⏚            ai14142


                                <!-- *P36*/114 -->
<!-- 
@startuml
[-> Boy
@enduml
-->

//5.1.6 Power supply scheme
---------------------------

**Figure 14**. Power supply scheme

Caution: In Figure 14, the 4.7 µF capacitor must be connected to V DD3 .

//5.1.7 Current consumption measurement
---------------------------------------

**Figure 15**. Current consumption measurement scheme

ai14125d
V DD
1/2/3/4/5
Analog:
RCs,
PLL,...
Power switch
GP I/Os
OUT
IN
Kernel logic
(CPU, Digital &
Memories)
Backup circuitry (OSC32K,
RTC, Backup registers,
Wake-up logic)
5 × 100 nF
+ 1 × 4.7 μF
1.8 - 3.6V
Regulator
V DDA
V REF+
ADC/
DAC
Level shifter
IO
Logic
V DD
10 nF +
1 μF
V REF
10 nF +
1 μF
V REF-
V SSA
V SS
1/2/3/4/5
V DD
V BAT
ai14126
V BAT
V DD
V DDA
I DD _V BAT
I DD

                                <!-- *37*/114 -->


//5.2 Absolute maximum ratings
------------------------------
Stresses above the absolute maximum ratings listed in Table 6, Table 7, and Table 8 may
cause permanent damage to the device. These are stress ratings only and functional
operation of the device at these conditions is not implied. Exposure to maximum rating
conditions for extended periods may affect device reliability.




**Table 6**. Voltage characteristics

Symbol Ratings Min Max Unit
V DD − V SS External main supply voltage (including V DDA and V DD ) (1)
1. All main power (V DD , V DDA ) and ground (V SS , V SSA ) pins must always be connected to the external power
supply, in the permitted range.
–0.3 4.0
V
V IN (2)
2. V IN maximum must always be respected. Refer to Table 7 for the maximum allowed injected current
values.
Input voltage on 5 V tolerant pin V SS − 0.3 V DD + 4.0
Input voltage on any other pin V SS − 0.3 4.0
|ΔV DDx | Variations between different V DD power pins - 50
mV
|V SSX − V SS | Variations between all the different ground pins - 50
V ESD(HBM) Electrostatic discharge voltage (human body model) See Section 5.3.11

**Table 7**. Current characteristics

Symbol Ratings Max. Unit
I VDD Total current into V DD /V DDA power lines (source) (1)
1. All main power (V DD , V DDA ) and ground (V SS , V SSA ) pins must always be connected to the external power
supply, in the permitted range.
150
mA
I VSS Total current out of V SS ground lines (sink) (1) 150
I IO
Output current sunk by any I/O and control pin 25
Output current source by any I/Os and control pin − 25
I INJ(PIN) (2)
2. Negative injection disturbs the analog performance of the device. See footnote 2 of Table 49.
Injected current on five volt tolerant pins (3)
3. Positive injection is not possible on these I/Os. A negative injection is induced by V IN <V SS . I INJ(PIN) must
never be exceeded. Refer to Table 6 for the maximum allowed input voltage values.
-5/+0
Injected current on any other pin (4)
4. A positive injection is induced by V IN > V DD , while a negative injection is induced by V IN < V SS .
I INJ(PIN) must never be exceeded. Refer to Table 6 for the maximum allowed input voltage values.
± 5
ΣI INJ(PIN) Total injected current (sum of all I/O and control pins) (5)
5. When several inputs are submitted to a current injection, the maximum ΣI INJ(PIN) is the absolute sum of the
positive and negative injected currents (instantaneous values).
± 25

**Table 8**. Thermal characteristics

Symbol Ratings Value Unit
T STG Storage temperature range –65 to +150
°C
T J Maximum junction temperature 150

                                <!-- *P38*/114 -->


//5.3 Operating conditions
--------------------------

//5.3.1 General operating conditions
------------------------------------


**Table 9**. General operating conditions

Symbol Parameter Conditions Min Max Unit
f HCLK Internal AHB clock frequency - 0 72
MHz f PCLK1 Internal APB1 clock frequency - 0 36
f PCLK2 Internal APB2 clock frequency - 0 72
V DD Standard operating voltage - 2 3.6
V V DDA (1)
1. When the ADC is used, refer to Table 47.
Analog operating voltage
(ADC not used)
Must be the same potential
as V DD (2)
2. It is recommended to power V DD and V DDA from the same source. A maximum difference of 300 mV
between V DD and V DDA can be tolerated during power-up and operation.
2 3.6
Analog operating voltage
(ADC used)
2.4 3.6
V BAT Backup operating voltage - 1.8 3.6
V IN I/O input voltage
Standard IO –0.3
V DD +
0.3
V
FT IO (3)
3. To sustain a voltage higher than V DD + 0.3 V, the internal pull-up/pull-down resistors must be disabled.
2 V < V DD ≤ 3.6 V –0.3 5.5
V DD = 2 V –0.3 5.2
BOOT0 0 5.5
P D
Power dissipation at
T A = 85 °C for suffix 6 or
T A = 105 °C for suffix 7 (4)
4. If T A is lower, higher P D values are allowed as long as T J does not exceed T J max (see Section 6.10).
LFBGA100 - 454
mW
LQFP100 - 434
UFBGA100 - 339
TFBGA64 - 308
LQFP64 - 444
LQFP48 - 363
UFQFPN48 - 624
VFQFPN36 - 1000
T A
Ambient temperature for 6
suffix version
Maximum power dissipation –40 85
°C
Low-power dissipation (5)
5. In low-power dissipation state, T A can be extended to this range as long as T J does not exceed T J max (see
Section 6.10).
–40 105
Ambient temperature for 7
suffix version
Maximum power dissipation –40 105
Low-power dissipation (5) –40 125
T J Junction temperature range
6 suffix version –40 105
7 suffix version –40 125

                                <!-- *39*/114 -->


//5.3.2 Operating conditions at power-up / power-down
-----------------------------------------------------
Subject to general operating conditions for T A .


//5.3.3 Embedded reset and power control block characteristics
--------------------------------------------------------------
The parameters given in Table 11 are derived from tests performed under ambient
temperature and V DD supply voltage conditions summarized in Table 9.


**Table 10**. Operating conditions at power-up / power-down

Symbol Parameter Conditions Min Max Unit
t VDD
V DD rise time rate
-
0 ∞
µs/V
V DD fall time rate 20 ∞

**Table 11**. Embedded reset and power control block characteristics

Symbol Parameter Conditions Min Typ Max Unit
V PVD
Programmable voltage
detector level selection
PLS[2:0] = 000 (rising edge) 2.10 2.18 2.26
V
PLS[2:0] = 000 (falling edge) 2,00 2.08 2.16
PLS[2:0] = 001 (rising edge) 2.19 2.28 2.37
PLS[2:0] = 001 (falling edge) 2.09 2.18 2.27
PLS[2:0] = 010 (rising edge) 2.28 2.38 2.48
PLS[2:0] = 010 (falling edge) 2.18 2.28 2.38
PLS[2:0] = 011 (rising edge) 2.38 2.48 2.58
PLS[2:0] = 011 (falling edge) 2.28 2.38 2.48
PLS[2:0] = 100 (rising edge) 2.47 2.58 2.69
PLS[2:0] = 100 (falling edge) 2.37 2.48 2.59
PLS[2:0] = 101 (rising edge) 2.57 2.68 2.79
PLS[2:0] = 101 (falling edge) 2.47 2.58 2.69
PLS[2:0] = 110 (rising edge) 2.66 2.78 2.90
PLS[2:0] = 110 (falling edge) 2.56 2.68 2.80
PLS[2:0] = 111 (rising edge) 2.76 2.88 3.00
PLS[2:0] = 111 (falling edge) 2.66 2.78 2.90
V PVDhyst (2) PVD hysteresis - - 100 - mV
V POR/PDR
Power on/power down
reset threshold
Falling edge
1.8 (1)
1. The product behavior is specified by design down to the minimum V POR/PDR value.
1.88 1.96
V
Rising edge 1.84 1.92 2.0
V PDRhyst (2) PDR hysteresis - - 40 - mV
T RSTTEMPO (2)
2. Specified by design, not tested in production.
Reset temporization - 1.0 2.5 4.5 ms

                                <!-- *P40*/114 -->


//5.3.4 Embedded reference voltage
----------------------------------
The parameters given in Table 12 are derived from tests performed under ambient
temperature and V DD supply voltage conditions summarized in Table 9.


//5.3.5 Supply current characteristics
--------------------------------------
The current consumption is a function of several parameters and factors such as operating
voltage, ambient temperature, I/O pin loading, device software configuration, operating
frequencies, I/O pin switching rate, program location in memory, and executed binary code.
The current consumption is measured as described in Figure 15.
All Run-mode current consumption measurements given in this section are performed with a
reduced code that gives a consumption equivalent to Dhrystone 2.1 code.
Maximum current consumption
The MCU is placed under the following conditions:
• All I/O pins are in input mode with a static value at V DD or V SS (no load)
• All peripherals are disabled except when explicitly mentioned
• The flash memory access time is adjusted to the f HCLK frequency (0 wait state from 0 to
24 MHz, one wait state from 24 to 48 MHz and two wait states above)
• Prefetch in ON (reminder: this bit must be set before clock setting and bus prescaling)
• When the peripherals are enabled f PCLK1 = f HCLK /2, f PCLK2 = f HCLK
The parameters given in Table 13, Table 14 and Table 15 are derived from tests performed
under ambient temperature and V DD supply voltage conditions summarized in Table 9.

**Table 12**. Embedded internal reference voltage

Symbol Parameter Conditions Min
Typ
Max Unit
V REFINT Internal reference voltage
–40 °C < T A < +105 °C 1.16 1.20 1.26
V
–40 °C < T A < +85 °C 1.16 1.20 1.24
T S_vrefint (1)
1. Shortest sampling time can be determined in the application by multiple iterations.
ADC sampling time when
reading the internal reference
voltage
- - 5.1
17.1 (2)
2. Specified by design, not tested in production.
µs
V RERINT (2)
Internal reference voltage
spread over the temperature
range
V DD = 3 V ±10 mV - - 10 mV
T Coeff (2) Temperature coefficient - - - 100 ppm/°C

                                <!-- *41*/114 -->




**Table 13**. Maximum current consumption in Run mode, code with data processing

running from Flash
Symbol Parameter Conditions f HCLK
Max (1)
1. Evaluated by characterization, not tested in production, unless otherwise specified.
Unit
T A = 85 °C T A = 105 °C
I DD
Supply current in
Run mode
External clock (2) , all
peripherals enabled
2. External clock is 8 MHz and PLL is on when f HCLK > 8 MHz.
72 MHz 50.0 50.3
mA
48 MHz 36.1 36.2
36 MHz 28.6 28.7
24 MHz 19.9 20.1
16 MHz 14.7 14.9
8 MHz 8.6 8.9
External clock (2) , all
peripherals disabled
72 MHz 32.8 32.9
48 MHz 24.4 24.5
36 MHz 19.8 19.9
24 MHz 13.9 14.2
16 MHz 10.7 11.0
8 MHz 6.8 7.1

**Table 14**. Maximum current consumption in Run mode, code with data processing

running from RAM
Symbol Parameter Conditions f HCLK
Max (1)
1. Based on characterization, tested in production at V DD max, f HCLK max.
Unit
T A = 85 °C T A = 105 °C
I DD
Supply
current in
Run mode
External clock (2) , all
peripherals enabled
2. External clock is 8 MHz and PLL is on when f HCLK > 8 MHz.
72 MHz 48 50
mA
48 MHz 31.5 32
36 MHz 24 25.5
24 MHz 17.5 18
16 MHz 12.5 13
8 MHz 7.5 8
External clock (2) , all
peripherals disabled
72 MHz 29 29.5
48 MHz 20.5 21
36 MHz 16 16.5
24 MHz 11.5 12
16 MHz 8.5 9
8 MHz 5.5 6

                                <!-- *P42*/114 -->


**Figure 16**. Typical current consumption in Run mode versus frequency (at 3.6 V),

code with data processing running from RAM, peripherals enabled

**Figure 17**. Typical current consumption in Run mode versus frequency (at 3.6 V),

code with data processing running from RAM, peripherals disabled

0
5
10
15
20
25
30
35
40
45
-40 0 25 70 85 105
Temperature (°C)
Consumption (mA)
72 MHz
36 MHz
16 MHz
8 MHz
0
5
10
15
20
25
30
-40 0 25 70 85 105
Temperature (°C)
Consumption (mA)
72 MHz
36 MHz
16 MHz
8 MHz

                                <!-- *43*/114 -->


**Table 15**. Maximum current consumption in Sleep mode, code running

from Flash or RAM
Symbol Parameter Conditions f HCLK
Max (1)
Unit
T A = 85 °C T A = 105 °C
I DD
Supply current in
Sleep mode
External clock (2) , all
peripherals enabled
72 MHz 30 32
mA
48 MHz 20 20.5
36 MHz 15.5 16
24 MHz 11.5 12
16 MHz 8.5 9
8 MHz 5.5 6
External clock (2) , all
peripherals disabled
72 MHz 7.5 8
48 MHz 6 6.5
36 MHz 5 5.5
24 MHz 4.5 5
16 MHz 4 4.5
8 MHz 3 4
1. Based on characterization, tested in production at V DD max , f HCLK max with peripherals enabled.
2. External clock is 8 MHz and PLL is on when f HCLK > 8 MHz.

                                <!-- *P44*/114 -->



**Figure 18**. Typical current consumption on V BAT (RTC on)


**Table 16**. Typical and maximum current consumptions in Stop and Standby modes

Symbol Parameter Conditions
Typ (1) Max
Unit
V DD /V BAT
= 2.0 V
V DD /V BAT
= 2.4 V
V DD /V BAT
= 3.3 V
T A =
85 °C
T A =
105 °C
I DD
Supply current
in Stop mode
Regulator in Run mode, low-speed
and high-speed internal RC
oscillators and high-speed oscillator
OFF (no independent watchdog)
- 23.5 24 200 370
µA
Regulator in Low-power mode, low-
speed and high-speed internal RC
oscillators and high-speed oscillator
OFF (no independent watchdog)
- 13.5 14 180 340
Supply current
in Standby
mode
Low-speed internal RC oscillator and
independent watchdog ON
- 2.6 3.4 - -
Low-speed internal RC oscillator
ON, independent watchdog OFF
- 2.4 3.2 - -
Low-speed internal RC oscillator and
independent watchdog OFF,
low-speed oscillator and RTC OFF
- 1.7 2 4 5
I DD_VBAT
Backup
domain supply
current
Low-speed oscillator and RTC ON 0.9 1.1 1.4 1.9 (2) 2.2
1. Typical values are measured at T A = 25°C.
2. Evaluated by characterization, not tested in production, unless otherwise specified.
0
0.5
1
1.5
2
2.5
–40 °C 25 °C 70 °C 85 °C 105 °C
Temperature (°C)
Consumption ( µA )
2 V
2.4 V
3 V
3.6 V
ai17351

                                <!-- *45*/114 -->


**Figure 19**. Typical current consumption in Stop mode, with regulator in Run mode


**Figure 20**. Typical current consumption in Stop mode, with regulator in Low-power mode

0
50
100
150
200
250
300
-45 25 70 90 110
Temperature (°C)
Consumption (µA)
3.3 V
3.6 V
0
50
100
150
200
250
300
-40 0 25 70 85 105
Temperature (°C)
Consumption (µA)
3.3 V
3.6 V

                                <!-- *P46*/114 -->


**Figure 21**. Typical current consumption in Standby mode

Typical current consumption
The MCU is placed under the following conditions:
• All I/O pins are in input mode with a static value at V DD or V SS (no load)
• All peripherals are disabled except if explicitly mentioned
• The flash access time is adjusted to f HCLK frequency (0 wait state from 0 to 24 MHz,
one wait state from 24 to 48 MHz and two wait states above)
• Ambient temperature and V DD supply voltage conditions summarized in Table 9
• Prefetch is ON (this bit must be set before clock setting and bus prescaling)
• When the peripherals are enabled f PCLK1 = f HCLK / 4, f PCLK2 = f HCLK / 2,
f ADCCLK = f PCLK2 /4
0
0.5
1
1.5
2
2.5
3
3.5
4
4.5
–45 °C 25 °C 85 °C 105 °C
Temperature (°C)
Consumption (µA)
3.3 V
3.6 V

                                <!-- *47*/114 -->



**Table 17**. Typical current consumption in Run mode, code with data processing

running from Flash
Symbol Parameter Conditions f HCLK
Typ (1)
1. Typical values are measures at T A = 25°C, V DD = 3.3 V.
Unit
All peripherals
enabled (2)
2. Add an additional power consumption of 0.8 mA per ADC for the analog part. In applications, this
consumption occurs only while the ADC is on (ADON bit is set in the ADC_CR2 register).
All peripherals
disabled
I DD
Supply
current in
Run mode
External clock (3)
3. External clock is 8 MHz and PLL is on when f HCLK > 8 MHz.
72 MHz 36 27
mA
48 MHz 24.2 18.6
36 MHz 19.0 14.8
24 MHz 12.9 10.1
16 MHz 9.3 7.4
8 MHz 5.5 4.6
4 MHz 3.3 2.8
2 MHz 2.2 1.9
1 MHz 1.6 1.45
500 kHz 1.3 1.25
125 kHz 1.08 1.06
Running on high
speed internal RC
(HSI), AHB
prescaler used to
reduce the
frequency
64 MHz 31.4 23.9
mA
48 MHz 23.5 17.9
36 MHz 18.3 14.1
24 MHz 12.2 9.5
16 MHz 8.5 6.8
8 MHz 4.9 4.0
4 MHz 2.7 2.2
2 MHz 1.6 1.4
1 MHz 1.02 0.9
500 kHz 0.73 0.67
125 kHz 0.5 0.48

                                <!-- *P48*/114 -->



**Table 18**. Typical current consumption in Sleep mode, code running

from Flash or RAM
Symbol Parameter Conditions f HCLK
Typ (1)
1. Typical values are measures at T A = 25°C, V DD = 3.3 V.
Unit
All peripherals
enabled (2)
2. Add an additional power consumption of 0.8 mA per ADC for the analog part. In applications, this
consumption occurs only while the ADC is on (ADON bit is set in the ADC_CR2 register).
All peripherals
disabled
I DD
Supply
current in
Sleep mode
External clock (3)
3. External clock is 8 MHz and PLL is on when f HCLK > 8 MHz.
72 MHz 14.4 5.5
mA
48 MHz 9.9 3.9
36 MHz 7.6 3.1
24 MHz 5.3 2.3
16 MHz 3.8 1.8
8 MHz 2.1 1.2
4 MHz 1.6 1.1
2 MHz 1.3 1.0
1 MHz 1.11 0.98
500 kHz 1.04 0.96
125 kHz 0.98 0.95
Running on high
speed internal RC
(HSI), AHB prescaler
used to reduce the
frequency
64 MHz 12.3 4.4
48 MHz 9.3 3.3
36 MHz 7 2.5
24 MHz 4.8 1.8
16 MHz 3.2 1.2
8 MHz 1.6 0.6
4 MHz 1.0 0.5
2 MHz 0.72 0.47
1 MHz 0.56 0.44
500 kHz 0.49 0.42
125 kHz 0.43 0.41

                                <!-- *49*/114 -->

On-chip peripheral current consumption
The current consumption of the on-chip peripherals is given in Table 19. The MCU is put
under the following conditions:
• all I/O pins are in input mode with a static value at V DD or V SS (no load)
• all peripherals are disabled unless otherwise mentioned
• the given value is calculated by measuring the current consumption
– with all peripherals clocked off
– with only one peripheral clocked on
• ambient operating temperature and V DD supply voltage conditions summarized in
Table 6


**Table 19**. Peripheral current consumption

Peripherals µA/MHz
AHB (up to 72 MHz)
DMA1 16.53
BusMatrix (1) 8.33
APB1 (up to 36 MHz)
APB1-Bridge 10.28
TIM2 32.50
TIM3 31.39
TIM4 31.94
SPI2 4.17
USART2 12.22
USART3 12.22
I2C1 10.00
I2C2 10.00
USB 17.78
CAN1 18.06
WWDG 2.50
PWR 1.67
BKP 2.50
IWDG 11.67

                                <!-- *P50*/114 -->


//5.3.6 External clock source characteristics
---------------------------------------------
High-speed external user clock generated from an external source
The characteristics given in Table 20 result from tests performed using a high-speed
external clock source, and under ambient temperature and supply voltage conditions
summarized in Table 9.

APB2 (up to 72 MHz)
APB2-Bridge 3.75
GPIOA 6.67
GPIOB 6.53
GPIOC 6.53
GPIOD 6.53
GPIOE 6.39
SPI1 4.72
USART1 11.94
TIM1 23.33
ADC1 (2) 17.50
ADC2 (2) 16.07
1. The BusMatrix is automatically active when at least one master peripheral is ON (CPU or DMA).
2. Specific conditions for measuring ADC current consumption: f HCLK = 56 MHz, f APB1 = f HCLK / 2,
f APB2 = f HCLK , f ADCCLK = f APB2 / 4, When ADON bit in the ADCx_CR2 register is set to 1, a current
consumption of analog part equal to 0.65 mA must be added for each ADC.
Table 19. Peripheral current consumption (continued)
Peripherals µA/MHz

**Table 20**. High-speed external user clock characteristics

Symbol Parameter Conditions Min Typ Max Unit
f HSE_ext User external clock source frequency (1)
-
1 8 25 MHz
V HSEH OSC_IN input pin high level voltage 0.7V DD - V DD
V
V HSEL OSC_IN input pin low level voltage V SS - 0.3V DD
t w(HSE)
t w(HSE)
OSC_IN high or low time (1)
1. Specified by design, not tested in production.
5 - -
ns
t r(HSE)
t f(HSE)
OSC_IN rise or fall time (1) - - 20
C in(HSE) OSC_IN input capacitance (1) - - 5 - pF
DuCy (HSE) Duty cycle - 45 - 55 %
I L OSC_IN Input leakage current V SS ≤ V IN ≤ V DD - - ±1 µA

                                <!-- *51*/114 -->

Low-speed external user clock generated from an external source
The characteristics given in Table 21 result from tests performed using a low-speed external
clock source, and under ambient temperature and supply voltage conditions summarized in
Table 9.


**Figure 22**. High-speed external clock source AC timing diagram


**Table 21**. Low-speed external user clock characteristics

Symbol Parameter Conditions Min Typ Max Unit
f LSE_ext
User external clock source
frequency (1)
-
32.768 1000 kHz
V LSEH OSC32_IN input pin high level voltage 0.7V DD - V DD
V
V LSEL OSC32_IN input pin low level voltage V SS - 0.3V DD
t w(LSE)
t w(LSE)
OSC32_IN high or low time (1) 450 - -
ns
t r(LSE)
t f(LSE)
OSC32_IN rise or fall time (1) - - 50
C in(LSE) OSC32_IN input capacitance (1) - - 5 - pF
DuCy (LSE) Duty cycle - 30 - 70 %
I L OSC32_IN Input leakage current V SS ≤
 V IN ≤ V DD
- - ±1 µA
1. Specified by design, not tested in production.
ai14143
OSC_IN
EXTERNAL
STM32F103xx
CLOCK SOURCE
V HSEH
t f(HSE) t W(HSE)
I L
90%
10%
T HSE
t
t r(HSE)
t W(HSE)
f HSE_ext
V HSEL

                                <!-- *P52*/114 -->


**Figure 23**. Low-speed external clock source AC timing diagram

High-speed external clock generated from a crystal/ceramic resonator
The high-speed external (HSE) clock can be supplied with a 4 to 16 MHz crystal/ceramic
resonator oscillator. All the information given in this paragraph is based on characterization
results obtained with typical external components specified in Table 22. In the application,
the resonator and the load capacitors have to be placed as close as possible to the
oscillator pins in order to minimize output distortion and startup stabilization time. Refer to
the crystal resonator manufacturer for more details on the resonator characteristics
(frequency, package, accuracy).

For C L1 and C L2 , it is recommended to use high-quality external ceramic capacitors in the
5 pF to 25 pF range (typ.), designed for high-frequency applications, and selected to match
the requirements of the crystal or resonator (see Figure 24). C L1 and C L2 are usually the
same size. The crystal manufacturer typically specifies a load capacitance that is the series
combination of C L1 and C L2 . PCB and MCU pin capacitance must be included (10 pF can be
used as a rough estimate of the combined pin and board capacitance) when sizing C L1 and
ai14144b
OSC32_IN
EXTERNAL
STM32F103xx
CLOCK SOURCE
V LSEH
t f(LSE) t W(LSE)
I L
90%
10%
T LSE
t
t r(LSE)
t W(LSE)
f LSE_ext
V LSEL

**Table 22**. HSE 4-16 MHz oscillator characteristics (1) (2)

Symbol Parameter Conditions Min Typ Max Unit
f OSC_IN Oscillator frequency - 4 8 16 MHz
R F Feedback resistor - - 200 - kΩ
i 2 HSE driving current
V DD = 3.3 V, V IN = V SS
with 30 pF load
- - 1 mA
g m Oscillator transconductance Startup 25 - - mA/V
t SU(HSE (3) Startup time V DD is stabilized - 2 - ms
1. Resonator characteristics given by the crystal/ceramic resonator manufacturer.
2. Evaluated by characterization, not tested in production, unless otherwise specified.
3. t SU(HSE) is the startu.p time measured from the moment it is enabled (by software) to a stabilized 8 MHz
oscillation is reached. This value is measured for a standard crystal resonator and it can vary significantly
with the crystal manufacturer

                                <!-- *53*/114 -->

C L2 . Refer to AN2867 “Oscillator design guide for ST microcontrollers”, available from the
STMicroelectronics website www.st.com.

**Figure 24**. Typical application with an 8 MHz crystal

1. R EXT value depends on the crystal characteristics.
Low-speed external clock generated from a crystal/ceramic resonator
The low-speed external (LSE) clock can be supplied with a 32.768 kHz crystal/ceramic
resonator oscillator. All the information given in this paragraph is based on characterization
results obtained with typical external components specified in Table 23. In the application,
the resonator and the load capacitors have to be placed as close as possible to the
oscillator pins tortion and startup stabilization time. Refer to the crystal resonator
manufacturer for more details on the resonator characteristics (frequency, package,
accuracy).

Note: For C L1 and C L2 it is recommended to use high-quality ceramic capacitors in the 5 to 15 pF
range selected to match the requirements of the crystal or resonator. C L1 and C L2, are
ai14145
OSC_OUT
OSC_IN
f HSE
C L1
R F
STM32F103xx
8 MHz
resonator
R EXT (1)
C L2
Resonator with
integrated capacitors
Bias
controlled
gain

**Table 23**. LSE oscillator characteristics (f LSE = 32.768 kHz) (1) (2)

Symbol Parameter Conditions Min Typ Max Unit
R F Feedback resistor - - 5 - MΩ
I 2 LSE driving current V DD = 3.3 V, V IN = V SS - - 1.4 µA
g m Oscillator transconductance - 5 - - µA/V
t SU(LSE) (3) Startup time
V DD is
stabilized
T A = 50 °C - 1.5 -
s
T A = 25 °C - 2.5 -
T A = 10 °C - 4 -
T A = 0 °C - 6 -
T A = -10 °C - 10 -
T A = -20 °C - 17 -
T A = -30 °C - 32 -
T A = -40 °C - 60 -
1. Evaluated by characterization, not tested in production, unless otherwise specified.
2. Refer to the note and caution paragraphs below the table, and to AN2867 “Oscillator design guide for ST microcontrollers”.
3. t SU(LSE) is the startup time measured from the moment it is enabled (by softwinformation given in this paragraph is) to a
stabilized 32.768 kHz oscillation is reached. This value is measured for a standard crystal and it can vary significantly with
the crystal manufacturer

                                <!-- *P54*/114 -->

usually the same size. The crystal manufacturer typically specifies a load capacitance,
which is the series combination of C L1 and C L2 .
Load capacitance C L has the following formula: C L = C L1 x C L2 / (C L1 + C L2 ) + C stray , where
C stray is the pin capacitance and board or trace PCB-related capacitance. Typically, it is
between 2 and 7 pF.
Caution: To avoid exceeding the maximum value of C L1 and C L2 (15 pF) it is strongly recommended
to use a resonator with a load capacitance C L ≤ 7 pF. Never use a resonator with a load
capacitance of 12.5 pF.
Example: when choosing a resonator with a load capacitance of C L = 6 pF and
C stray = 2 pF, then C L1 = C L2 = 8 pF.

**Figure 25**. Typical application with a 32.768 kHz crystal


//5.3.7 Internal clock source characteristics
---------------------------------------------
The parameters given in Table 24 are derived from tests performed under ambient
temperature and V DD supply voltage conditions summarized in Table 9.
High-speed internal (HSI) RC oscillator

ai14146
OSC32_OUT
OSC32_IN
f LSE
C L1
R F
STM32F103xx
32.768 kHz
resonator
C L2
Resonator with
integrated capacitors
Bias
controlled
gain

**Table 24**. HSI oscillator characteristics (1)

1. V DD = 3.3 V, T A = –40 to 105 °C unless otherwise specified.
Symbol Parameter Conditions Min Typ Max Unit
f HSI Frequency - - 8 - MHz
DuCy (HSI) Duty cycle - 45 - 55
%
ACC HSI
Accuracy of the HSI
oscillator
User-trimmed with the RCC_CR
register (2)
2. Refer to AN2868 “STM32F10xxx internal RC oscillator (HSI) calibration” available from www.st.com.
- - 1 (3)
Factory-
calibrated
(4)(5)
T A = –40 to 105 °C –2 - 2.5
T A = –10 to 85 °C –1.5 - 2.2
T A = 0 to 70 °C –1.3 - 2
T A = 25 °C –1.1 - 1.8
t su(HSI) (4)
HSI oscillator startup
time
- 1 - 2 µs
I DD(HSI) (4)
HSI oscillator power
consumption
- - 80 100 µA

                                <!-- *55*/114 -->

Low-speed internal (LSI) RC oscillator

Wakeup time from low-power mode
The wakeup times given in Table 26 are measured on a wakeup phase with an 8-MHz HSI
RC oscillator. The clock source used to wake up the device depends from the current
operating mode:
• Stop or Standby mode: the clock source is the RC oscillator
• Sleep mode: the clock source is the clock that was set before entering Sleep mode.
All timings are derived from tests performed under ambient temperature and V DD supply
voltage conditions summarized in Table 9.
3. Specified by design, not tested in production.
4. Evaluated by characterization, not tested in production, unless otherwise specified.
5. The actual frequency of HSI oscillator may be impacted by a reflow, but does not drift out of the specified
range.

**Table 25**. LSI oscillator characteristics (1)

1. V DD = 3 V, T A = –40 to 105°C unless otherwise specified.
Symbol Parameter Min Typ Max Unit
f LSI (2)
2. Evaluated by characterization, not tested in production, unless otherwise specified.
Frequency 30 40 60 kHz
t su(LSI) (3)
3. Specified by design, not tested in production.
LSI oscillator startup time - - 85 µs
I DD(LSI) (3) LSI oscillator power consumption - 0.65 1.2 µA

                                <!-- *P56*/114 -->



//5.3.8 PLL characteristics
---------------------------
The parameters given in Table 27 are derived from tests performed under ambient
temperature and V DD supply voltage conditions summarized in Table 9.


//5.3.9 Memory characteristics
------------------------------
Flash memory
The characteristics are given at T A = – 40 to 105°C unless otherwise specified.


**Table 26**. Low-power mode wakeup timings

Symbol Parameter Typ Unit
t WUSLEEP (1)
1. The wakeup times are measured from the wakeup event to the point in which the user application code
reads the first instruction.
Wakeup from Sleep mode 1.8
µs t WUSTOP (1)
Wakeup from Stop mode (regulator in run mode) 3.6
Wakeup from Stop mode (regulator in low-power mode) 5.4
t WUSTDBY (1) Wakeup from Standby mode 50

**Table 27**. PLL characteristics

Symbol Parameter
Value
Unit
Min (1)
1. Evaluated by characterization, not tested in production, unless otherwise specified.
Typ Max (1)
f PLL_IN
PLL input clock (2)
2. Take care of using the appropriate multiplier factors so as to have PLL input clock values compatible with
the range defined by f PLL_OUT .
1 8.0 25 MHz
PLL input clock duty cycle 40 - 60 %
f PLL_OUT PLL multiplier output clock 16 - 72 MHz
t LOCK PLL lock time - - 200 µs
Jitter Cycle-to-cycle jitter - - 300 ps

**Table 28**. Flash memory characteristics

Symbol Parameter Conditions Min (1) Typ Max (1) Unit
t prog 16-bit programming time T A = –40 to +105 °C 40 52.5 70 µs
t ERASE Page (1 KB) erase time T A = –40 to +105 °C 20 - 40
ms
t ME Mass erase time T A = –40 to +105 °C 20 - 40

                                <!-- *57*/114 -->



//5.3.10 EMC characteristics
----------------------------
Susceptibility tests are performed on a sample basis during device characterization.
Functional EMS (electromagnetic susceptibility)
While a simple application is executed on the device (toggling 2 LEDs through I/O ports).
the device is stressed by two electromagnetic events until a failure occurs. The failure is
indicated by the LEDs:
• Electrostatic discharge (ESD) (positive and negative) is applied to all device pins until
a functional disturbance occurs. This test is compliant with the IEC 61000-4-2 standard.
• FTB: A Burst of Fast Transient voltage (positive and negative) is applied to V DD and
V SS through a 100 pF capacitor, until a functional disturbance occurs. This test is
compliant with the IEC 61000-4-4 standard.
A device reset allows normal operations to be resumed.
The test results are given in Table 30. They are based on the EMS levels and classes
defined in application note AN1709, available on www.st.com.
I DD Supply current
Read mode
f HCLK = 72 MHz with two wait
states, V DD = 3.3 V
- - 20
mA
Write / Erase modes
f HCLK = 72 MHz, V DD = 3.3 V
- - 5
Power-down mode / Halt,
V DD = 3.0 to 3.6 V
- - 50 µA
V prog Programming voltage - 2 - 3.6 V
1. Specified by design, not tested in production.

**Table 29**. Flash memory endurance and data retention

Symbol Parameter Conditions
Value
Unit
Min (1)
1. Evaluated by characterization, not tested in production, unless otherwise specified.
Typ Max
N END Endurance
T A = –40 to +85 °C (6 suffix versions)
T A = –40 to +105 °C (7 suffix versions)
10 - - kcycles
t RET Data retention
1 kcycle (2) at T A = 85 °C
2. Cycling performed over the whole temperature range.
30 - -
Years 1 kcycle (2) at T A = 105 °C 10 - -
10 kcycles (2) at T A = 55 °C 20 - -
Table 28. Flash memory characteristics (continued)
Symbol Parameter Conditions Min (1) Typ Max (1) Unit

                                <!-- *P58*/114 -->


Designing hardened software to avoid noise problems
EMC characterization and optimization are performed at component level with a typical
application environment and simplified MCU software. It should be noted that good EMC
performance is highly dependent on the user application and the software in particular.
Therefore it is recommended that the user applies EMC software optimization and
prequalification tests in relation with the EMC level requested for his application.
Software recommendations
The software flow must include the management of runaway conditions such as:
• Corrupted program counter
• Unexpected reset
• Critical data corruption (control registers...)
Prequalification trials
Most of the common failures (unexpected reset and program counter corruption) can be
reproduced by manually forcing a low state on the NRST pin or the Oscillator pins for 1
second.
To complete these trials, ESD stress can be applied directly on the device, over the range of
specification values. When unexpected behavior is detected, the software can be hardened
to prevent unrecoverable errors occurring (see application note AN1015, available on
www.st.com).
Electromagnetic Interference (EMI)
The electromagnetic field emitted by the device are monitored while a simple application is
executed (toggling 2 LEDs through the I/O ports). This emission test is compliant with
IEC 61967-2 standard which specifies the test board and the pin loading.


**Table 30**. EMS characteristics

Symbol Parameter Conditions Level/Class
V FESD
Voltage limits to be applied on any I/O pin
to induce a functional disturbance
V DD = 3.3 V, T A = +25 °C,
f HCLK = 72 MHz
conforms to IEC 61000-4-2
2B
V EFTB
Fast transient voltage burst limits to be
applied through 100 pF on V DD and V SS
pins to induce a functional disturbance
V DD = 3.3 V, T A = +25 °C,
f HCLK = 72 MHz
conforms to IEC 61000-4-4
4A

**Table 31**. EMI characteristics for f HSE = 8 MHz and f HCLK = 48 MHz

Symbol Parameter Conditions
Monitored
frequency band
Value Unit
S EMI
Peak (1)
1. Refer to AN1709 “EMI radiated test” chapter.
V DD = 3.3 V, T A = 25 °C,
LQFP100 package
compliant with
IEC 61967-2
0.1 to 30 MHz 12
dBµV 30 to 130 MHz 22
130 MHz to 1GHz 23
Level (2)
2. Refer to AN1709 “EMI level classification” chapter.
0.1 MHz to 1GHz 4 -

                                <!-- *59*/114 -->



//5.3.11 Absolute maximum ratings (electrical sensitivity)
----------------------------------------------------------
Based on three different tests (ESD, LU) using specific measurement methods, the device is
stressed in order to determine its performance in terms of electrical sensitivity.
Electrostatic discharge (ESD)
Electrostatic discharges (a positive then a negative pulse separated by 1 second) are
applied to the pins of each sample according to each pin combination. The sample size
depends on the number of supply pins in the device (3 parts × (n + 1) supply pins). This test
conforms to the JESD22-A114/C101 standard.

Static latch-up
Two complementary static tests are required on six parts to assess the latch-up
performance:
• A supply overvoltage is applied to each power supply pin
• A current injection is applied to each input, output and configurable I/O pin
These tests are compliant with EIA/JESD 78A IC latch-up standard.


**Table 32**. EMI characteristics for f HSE = 8 MHz and f HCLK = 72 MHz

Symbol Parameter Conditions
Monitored
frequency band
Value Unit
S EMI
Peak (1)
1. Refer to AN1709 “EMI radiated test” chapter.
V DD = 3.3 V, T A = 25 °C,
LQFP100 package
compliant with
IEC 61967-2
0.1 to 30 MHz 12
dBµV 30 to 130 MHz 19
130 MHz to 1GHz 29
Level (2)
2. Refer to AN1709 “EMI level classification” chapter.
0.1 MHz to 1GHz 4 -

**Table 33**. ESD absolute maximum ratings

Symbol Ratings Conditions Class Maximum value (1) Unit
V ESD(HBM)
Electrostatic discharge
voltage (human body model)
T A = +25 °C
conforming to
JESD22-A114
2 2000
V
V ESD(CDM)
Electrostatic discharge
voltage (charge device
model)
T A = +25 °C
conforming to
ANSI/ESD STM5.3.1
II 500
1. Guaranteed based on test during characterization

**Table 34**. Electrical sensitivities

Symbol Parameter Conditions Class
LU Static latch-up class T A = +105 °C conforming to JESD78A II level A

                                <!-- *P60*/114 -->


//5.3.12 I/O current injection characteristics
----------------------------------------------
As a general rule, current injection to the I/O pins, due to external voltage below V SS or
above V DD (for standard, 3 V-capable I/O pins) should be avoided during normal product
operation. However, in order to give an indication of the robustness of the microcontroller in
cases when abnormal injection accidentally happens, susceptibility tests are performed on a
sample basis during device characterization.
Functional susceptibilty to I/O current injection
While a simple application is executed on the device, the device is stressed by injecting
current into the I/O pins programmed in floating input mode. While current is injected into
the I/O pin, one at a time, the device is checked for functional failures.
The failure is indicated by an out of range parameter: ADC error above a certain limit
(>5 LSB TUE), out of spec current injection on adjacent pins or other functional failure (for
example reset, oscillator frequency deviation).
The test results are given in Table 35


**Table 35**. I/O current injection susceptibility

Symbol Description
Functional susceptibility
Unit
Negative injection Positive injection
I INJ
Injected current on OSC_IN32,
OSC_OUT32, PA4, PA5, PC13
-0 +0
mA
Injected current on all FT pins -5 +0
Injected current on any other pin -5 +5

                                <!-- *61*/114 -->


//5.3.13 I/O port characteristics
---------------------------------
General input/output characteristics
Unless otherwise specified, the parameters given in Table 36 are derived from tests
performed under the conditions summarized in Table 9. All I/Os are CMOS and TTL
compliant.


**Table 36**. I/O static characteristics

Symbol Parameter Conditions Min Typ Max Unit
V IL
Low level
input voltage
Standard IO
input low level
voltage
- - 0.28*(V DD -2 V)+0.8 V (1)
V
IO FT (3) input
low level voltage
- - 0.32*(V DD -2V)+0.75 V (1)
All I/Os except
BOOT0
- - 0.35 V DD (2)
V IH
High level
input voltage
Standard IO
input high level
voltage
0.41*(V DD -2 V)+1.3 V (1) - -
IO FT (3) input
high level
voltage
0.42*(V DD -2 V)+1 V (1) - -
All I/Os except
BOOT0
0.65 V DD (2) - -
V hys
Standard IO
Schmitt trigger
voltage hysteresis (4)
- 200 - -
mV
IO FT Schmitt trigger
voltage hysteresis (4)
- 5% V DD (5) - -
I lkg
Input leakage
current (6)
V SS ≤ V IN ≤ V DD
Standard I/Os
- - ±1
µA
V IN = 5 V
I/O FT
- - 3
R PU
Weak pull-up
equivalent resistor (7)
V IN = V SS 30 40 50
kΩ
R PD
Weak pull-down
equivalent resistor (7)
V IN = V DD 30 40 50
C IO I/O pin capacitance - 5 - pF
1. Data based on design simulation.
2. Tested in production.
3. FT = 5 V tolerant. To sustain a voltage higher than V DD + 0.3 V the internal pull-up/pull-down resistors must be disabled.
4. Hysteresis voltage between Schmitt trigger switching levels. Evaluated by characterization, not tested in production, unless
otherwise specified.
5. With a minimum of 100 mV.
6. Leakage can be higher than Max if negative current is injected on adjacent pins.

                                <!-- *P62*/114 -->

All I/Os are CMOS and TTL compliant (no software configuration required). Their
characteristics cover more than the strict CMOS-technology or TTL parameters. The
coverage of these requirements is shown in Figure 26 and Figure 27 for standard I/Os, and
in Figure 28 and Figure 29 for 5 V tolerant I/Os.

**Figure 26**. Standard I/O input characteristics - CMOS port


**Figure 27**. Standard I/O input characteristics - TTL port

7. Pull-up and pull-down resistors are designed with a true resistance in series with a switchable PMOS/NMOS. This
PMOS/NMOS contribution to the series resistance is minimum (~10%).
ai17277c
V DD (V)
1.3
0.8
2 3.6 2.7 3
0.7
CMOS standard requirement V IH =0.65V DD

3.3
V IH /V IL (V)
1.25
1.96
1.71
1.71
1.59
1
1.08
1.08
V ILmax
V IHmin
Tested in production
V
DD -2)+0.8
=0.28(V
IL
CMOS standard requirement V IL =0.35V DD
V IH =0.41(V DD -2)+1.3
Tested in production
Based on design simulations
Based on design simulations
Area not
determined
ai17278b
2 3.6
V IH /V IL (V)
1.3
2.0
0.8
2.16
TTL requirements V IH =2V
V IH =0.41(V DD -2)+1.3
V IL =0.28(V DD -2)+0.8
TTL requirements V IL =0.8V
1.96
1.25
V DD (V)
V ILmax
V IHmin
Based on design simulations
Based on design simulations
Area not
determined

                                <!-- *63*/114 -->


**Figure 28**. 5 V tolerant I/O input characteristics - CMOS port


**Figure 29**. 5 V tolerant I/O input characteristics - TTL port

VDD
1.3
2 3.6
CMOS standard requirements V IH =0.65V DD

CMOS standard requirment V IL =0.35V DD
1.67
1
2.7
0.7
3 3.3
1
0.75
1.295
0.975
1.42
1.07
1.55
1.16
V IH /V IL (V)
V DD (V)
ai17279c
V IH =0.42(V DD -2)+1
V IL =0.32(V DD -2)+0.75
Based on design simulations
Based on design simulations
Tested in production
Tested in production
Area not
determined
2.0
0.8
2 3.6 2.16
1.67
1
0.75
TTL requirement V IH =2V
TTL requirements V IL =0.8V
V IH /V IL (V)
V DD (V)
V ILmax
V IHmin
ai17280b
V IH =0.42*(V DD -2)+1
V IL =0.32*(V DD -2)+0.75
Based on design simulations
Based on design simulations
Area not
determined

                                <!-- *P64*/114 -->

Output driving current
The GPIOs (general-purpose inputs/outputs) can sink or source up to ±8 mA, and sink or
source up to ±20 mA (with a relaxed V OL /V OH ) except PC13, PC14 and PC15, which can
sink or source up to ±3 mA. When using the GPIOs PC13 to PC15 in output mode, the
speed should not exceed 2 MHz with a maximum load of 30 pF.
In the user application, the number of I/O pins which can drive current must be limited to
respect the absolute maximum rating specified in Section 5.2:
• The sum of the currents sourced by all the I/Os on V DD, plus the maximum Run
consumption of the MCU sourced on V DD, cannot exceed the absolute maximum rating
I VDD (see Table 7).
• The sum of the currents sunk by all the I/Os on V SS plus the maximum Run
consumption of the MCU sunk on V SS cannot exceed the absolute maximum rating
I VSS (see Table 7).
Output voltage levels
Unless otherwise specified, the parameters given in Table 37 are derived from tests
performed under ambient temperature and V DD supply voltage conditions summarized in
Table 9. All I/Os are CMOS and TTL compliant.


**Table 37**. Output voltage characteristics

Symbol Parameter Conditions Min Max Unit
V OL (1)
Output low level voltage for an I/O pin
when 8 pins are sunk at same time
CMOS port (2) ,
I IO = +8 mA
2.7 V < V DD < 3.6 V
- 0.4
V
V OH (3)
Output high level voltage for an I/O pin
when 8 pins are sourced at same time
V DD –0.4 -
V OL (1)
Output low level voltage for an I/O pin
when 8 pins are sunk at same time
TTL port (2)
I IO =+ 8mA
2.7 V < V DD < 3.6 V
- 0.4
V OH (3)
Output high level voltage for an I/O pin
when 8 pins are sourced at same time
2.4 -
V OL (1)(4)
Output low level voltage for an I/O pin
when 8 pins are sunk at same time
I IO = +20 mA
2.7 V < V DD < 3.6 V
- 1.3
V OH (3)(4)
Output high level voltage for an I/O pin
when 8 pins are sourced at same time
V DD –1.3 -
V OL (1)(4)
Output low level voltage for an I/O pin
when 8 pins are sunk at same time
I IO = +6 mA
2 V < V DD < 2.7 V
- 0.4
V OH (3)(4)
Output high level voltage for an I/O pin
when 8 pins are sourced at same time
V DD –0.4 -
1. The I IO current sunk by the device must always respect the absolute maximum rating specified in Table 7
and the sum of I IO (I/O ports and control pins) must not exceed I VSS .
2. TTL and CMOS outputs are compatible with JEDEC standards JESD36 and JESD52.
3. The I IO current sourced by the device must always respect the absolute maximum rating specified in
Table 7 and the sum of I IO (I/O ports and control pins) must not exceed I VDD .
4. Evaluated by characterization, not tested in production, unless otherwise specified.

                                <!-- *65*/114 -->

Input/output AC characteristics
The definition and values of input/output AC characteristics are given in Figure 30 and
Table 38, respectively.
Unless otherwise specified, the parameters given in Table 38 are derived from tests
performed under the ambient temperature and V DD supply voltage conditions summarized
in Table 9.


**Table 38**. I/O AC characteristics (1)

1. The I/O speed is configured using the MODEx[1:0] bits. Refer to the STM32F10xxx reference manual for a
description of GPIO port configuration register.
MODEx[1:0]
bit value (1)
Symbol Parameter Conditions Min Max Unit
10
f max(IO)out Maximum frequency (2)
2. The maximum frequency is defined in Figure 30.
C L = 50 pF, V DD = 2 V to 3.6 V - 2 MHz
t f(IO)out
Output high to low
level fall time
C L = 50 pF, V DD = 2 V to 3.6 V
- 125 (3)
3. Specified by design, not tested in production.
ns
t r(IO)out
Output low to high
level rise time
- 125 (3)
01
f max(IO)out Maximum frequency (2) C L = 50 pF, V DD = 2 V to 3.6 V - 10 MHz
t f(IO)out
Output high to low
level fall time
C L = 50 pF, V DD = 2 V to 3.6 V
- 25 (3)
ns
t r(IO)out
Output low to high
level rise time
- 25 (3)
11
F max(IO)out Maximum frequency (2)
C L = 30 pF, V DD = 2.7 V to 3.6 V - 50
MHz C L = 50 pF, V DD = 2.7 V to 3.6 V - 30
C L = 50 pF, V DD = 2 V to 2.7 V - 20
t f(IO)out
Output high to low
level fall time
C L = 30 pF, V DD = 2.7 V to 3.6 V - 5 (3)
ns
C L = 50 pF, V DD = 2.7 V to 3.6 V - 8 (3)
C L = 50 pF, V DD = 2 V to 2.7 V - 12 (3)
t r(IO)out
Output low to high
level rise time
C L = 30 pF, V DD = 2.7 V to 3.6 V - 5 (3)
C L = 50 pF, V DD = 2.7 V to 3.6 V - 8 (3)
C L = 50 pF, V DD = 2 V to 2.7 V - 12 (3)
- t EXTIpw
Pulse width of external
signals detected by
the EXTI controller
- 10 - ns

                                <!-- *P66*/114 -->


**Figure 30**. I/O AC characteristics definition


//5.3.14 NRST pin characteristics
---------------------------------
The NRST pin input driver uses CMOS technology. It is connected to a permanent pull-up
resistor, R PU (see Table 36).
Unless otherwise specified, the parameters given in Table 39 are derived from tests
performed under the ambient temperature and V DD supply voltage conditions summarized
in Table 9.

ai14131c
10%
90%
50%
t r(IO)out
OUTPUT
EXTERNAL
ON 50pF
Maximum frequency is achieved if (t r + t f ) ? 2/3)T and if the duty cycle is (45-55%)

10%
50%
90%
when loaded by 50pF
T
t f(IO)out

**Table 39**. NRST pin characteristics

Symbol Parameter Conditions Min Typ Max Unit
V IL(NRST) (1)
1. Specified by design, not tested in production.
NRST Input low level voltage - –0.5 - 0.8
V
V IH(NRST) (1) NRST Input high level voltage - 2 - V DD +0.5
V hys(NRST) NRST Schmitt trigger voltage hysteresis - - 200 - mV
R PU Weak pull-up equivalent resistor (2)
2. The pull-up is designed with a true resistance in series with a switchable PMOS. This PMOS contribution to
the series resistance must be minimum (~10%).
V IN = V SS 30 40 50 kΩ
V F(NRST) (1) NRST Input filtered pulse - - - 100 ns
V NF(NRST) (1) NRST Input not filtered pulse - 300 - - ns

                                <!-- *67*/114 -->


**Figure 31**. Recommended NRST pin protection

2. The reset network protects the device against parasitic resets.
3. The user must ensure that the level on the NRST pin can go below the V IL(NRST) max level specified in
Table 39, otherwise the reset is not taken into account by the device.

//5.3.15 TIM timer characteristics
----------------------------------
The parameters given in Table 40 are specified by design, not tested in production.
Refer to Section 5.3.12 for details on the input/output alternate function characteristics
(output compare, input capture, external clock, PWM output).

ai14132d
STM32
R PU
NRST (2)
V DD
Filter
Internal Reset
0.1 μF
External
reset circuit (1)

**Table 40**. TIMx (1) characteristics

1. TIMx is used as a general term to refer to the TIM1, TIM2, TIM3 and TIM4 timers.
Symbol Parameter Conditions Min Max Unit
t res(TIM) Timer resolution time
- 1 - t TIMxCLK
f TIMxCLK = 72 MHz 13.9 - ns
f EXT
Timer external clock
frequency on CH1 to CH4
- 0 f TIMxCLK /2 MHz
f TIMxCLK = 72 MHz 0 36 MHz
Res TIM Timer resolution - - 16 bit
t COUNTER
16-bit counter clock period
when internal clock is
selected
- 1 65536 t TIMxCLK
f TIMxCLK = 72 MHz 0.0139 910 µs
t MAX_COUNT Maximum possible count
- - 65536 × 65536 t TIMxCLK
f TIMxCLK = 72 MHz - 59.6 s

                                <!-- *P68*/114 -->


//5.3.16 Communications interfaces
----------------------------------
I2C interface characteristics
The STM32F103xx performance line I2C interface meets the requirements of the standard
I2C communication protocol with the following restrictions: the I/O pins SDA and SCL are
mapped to are not “true” open-drain. When configured as open-drain, the PMOS connected
between the I/O pin and V DD is disabled, but is still present.
The I2C characteristics are described in Table 41. Refer also to Section 5.3.12 for more
details on the input/output alternate function characteristics (SDA and SCL).


**Table 41**. I2C characteristics

Symbol Parameter
Standard mode I2C (1)(2) Fast mode I2C (1)(2)
Unit
Min Max Min Max
t w(SCLL) SCL clock low time 4.7 - 1.3 -
µs
t w(SCLH) SCL clock high time 4.0 - 0.6
t su(SDA) SDA setup time 250 - 100 -
ns
t h(SDA) SDA data hold time - 3450 (3) - 900 (3)
t r(SDA)
t r(SCL)
SDA and SCL rise time - 1000 - 300
t f(SDA)
t f(SCL)
SDA and SCL fall time - 300 - 300
t h(STA) Start condition hold time 4.0 - 0.6 -
µs
t su(STA) Repeated Start condition setup time 4.7 - 0.6 -
t su(STO) Stop condition setup time 4.0 - 0.6 - μs
t w(STO:STA) Stop to Start condition time (bus free) 4.7 - 1.3 - μs
C b Capacitive load for each bus line - 400 - 400 pF
t SP
Pulse width of spikes suppressed by
the analog filter
0 50 (4) 0 50 (4) ns
1. Specified by design, not tested in production.
2. f PCLK1 must be at least 2 MHz to achieve standard mode I2C frequencies. It must be at least 4 MHz to achieve fast mode
I2C frequencies. It must be a multiple of 10 MHz to reach the 400 kHz maximum I2C fast mode clock.
3. The maximum Data hold time must be met if the interface does not stretch the low period of SCL signal.
4. The minimum width of the spikes filtered by the analog filter is above t SP (max).

                                <!-- *69*/114 -->


**Figure 32**. I2C bus AC waveforms and measurement circuit

1. Measurement points are done at CMOS levels: 0.3 V DD and 0.7 V DD .
2. Rs = Series protection resistors, Rp = Pull-up resistors, V DD_I2C = I2C bus supply.


**Table 42**. SCL frequency (f PCLK1 = 36 MHz, V DD_I2C = 3.3 V) (1)(2)

1. R P = External pull-up resistance, f SCL = I2C speed,
2. For speeds around 200 kHz, the tolerance on the achieved speed is ±5%. For other speed ranges, the
tolerance on the achieved speed is ±2%. These variations depend upon the accuracy of the external
components used to design the application.
f SCL (kHz)
I2C_CCR value
R P = 4.7 kΩ
400 0x801E
300 0x8028
200 0x803C
100 0x00B4
50 0x0168
20 0x0384
ai14133g
Start
SDA
I²C bus
V DD_I2C V DD_I2C
STM32F10x
SDA
SCL
t f(SDA) t r(SDA)
SCL
t h(STA)
t w(SCLL)
t w(SCLH)
t su(SDA)
t r(SCL) t f(SCL)
t h(SDA)
Start repeated
Start
t su(STA)
t su(STO)
Stop
t su(STO:STA)
Rp Rp
Rs
Rs

                                <!-- *P70*/114 -->

SPI interface characteristics
Unless otherwise specified, the parameters given in Table 43 are derived from tests
performed under the ambient temperature, f PCLKx frequency and V DD supply voltage
conditions summarized in Table 9.
Refer to Section 5.3.12 for more details on the input/output alternate function characteristics
(NSS, SCK, MOSI, MISO).


**Table 43**. SPI characteristics

Symbol Parameter Conditions Min Max Unit
f SCK
1/t c(SCK)
SPI clock frequency
Master mode - 18
MHz
Slave mode - 18
t r(SCK)
t f(SCK)
SPI clock rise and fall time Capacitive load: C = 30 pF - 8 ns
DuCy(SCK)
SPI slave input clock
duty cycle
Slave mode 30 70 %
t su(NSS) (1)
1. Evaluated by characterization, not tested in production, unless otherwise specified.
NSS setup time Slave mode 4 t PCLK -
ns
t h(NSS) (1) NSS hold time Slave mode 2 t PCLK -
t w(SCKH) (1)
t w(SCKL) (1)
SCK high and low time
Master mode, f PCLK = 36 MHz,
presc = 4
50 60
t su(MI) (1)
t su(SI) (1)
Data input setup time
Master mode 5 -
Slave mode 5 -
t h(MI) (1)
Data input hold time
Master mode 5 -
t h(SI) (1) Slave mode 4 -
t a(SO) (1)(2)
2. Min time is for the minimum time to drive the output and the max time is for the maximum time to validate
the data.
Data output access time Slave mode, f PCLK = 20 MHz 0 3 t PCLK
t dis(SO) (1)(3)
3. Min time is for the minimum time to invalidate the output and the max time is for the maximum time to put
the data in Hi-Z.
Data output disable time Slave mode 2 10
t v(SO) (1) Data output valid time Slave mode (after enable edge) - 25
t v(MO) (1) Data output valid time Master mode (after enable edge) - 5
t h(SO) (1)
Data output hold time
Slave mode (after enable edge) 15 -
t h(MO) (1) Master mode (after enable edge) 2 -

                                <!-- *71*/114 -->


**Figure 33**. SPI timing diagram - slave mode and CPHA = 0


**Figure 34**. SPI timing diagram - slave mode and CPHA = 1

MSv41658V2
NSS input
CPHA=0
CPOL=0
SCK input
CPHA=0
CPOL=1
MISO output
MOSI input
t su(SI) t h(SI)
t w(SCKL)
t w(SCKH)
t c(SCK) t h(NSS)
t dis(SO)
t su(NSS)
t a(SO) t v(SO)
Next bits IN
Last bit OUT
First bit IN
First bit OUT Next bits OUT
t h(SO)
Last bit IN
MSv41659V2
t h(SI)
t c(SCK)
t w(SCKH)
t w(SCKL)
t su(NSS)
t a(SO) t v(SO)
t h(NSS)
t dis(SO)
t su(SI)
NSS input
CPHA=1
CPOL=0
CPHA=1
CPOL=1
MISO output
MOSI input
SCK input
First bit OUT Next bits OUT
Last bit OUT
First bit IN Last bit IN Next bits IN
t h(SO)

                                <!-- *P72*/114 -->


**Figure 35**. SPI timing diagram - master mode

USB characteristics
The USB interface is USB-IF certified (Full Speed).

MSv72626V1
t h(MI)
t c(SCK)
t w(SCKH)
t w(SCKL)
t su(MI)
NSS input
CPHA=0
CPOL=0
CPHA=0
CPOL=1
MOSI output
MISO input
SCK output
First bit OUT Last bit OUT Next bits OUT
First bit IN Last bit IN Next bits IN
CPHA=1
CPOL=0
CPHA=1
CPOL=1
SCK output
High
t v(MO) t h(MO)

**Table 44**. USB startup time

Symbol Parameter Max Unit
t STARTUP (1) USB transceiver startup time 1 µs
1. Guaranteed by design.

                                <!-- *73*/114 -->



**Figure 36**. USB timings: definition of data signal rise and fall time



//5.3.17 CAN (controller area network) interface
------------------------------------------------
Refer to Section 5.3.12 for more details on the input/output alternate function characteristics
(CAN_TX and CAN_RX).

**Table 45**. USB DC electrical characteristics

Symbol Parameter Conditions Min. (1)
1. All the voltages are measured from the local ground potential.
Max. (1) Unit
Input levels
V DD USB operating voltage (2)
2. To be compliant with the USB 2.0 full-speed electrical specification, the USBDP (D+) pin must be pulled up
with a 1.5 kΩ resistor to a 3.0 to 3.6 V voltage range.
3.0 (3)
3. The STM32F103xx USB functionality is ensured down to 2.7 V, but not the full USB electrical
characteristics, which are degraded in the 2.7 to 3.0 V V DD voltage range.
3.6 V
V DI (4)
4. Specified by design, not tested in production.
Differential input sensitivity I(USBDP, USBDM) 0.2 -
V V CM (4) Differential common mode range Includes V DI range 0.8 2.5
V SE (4) Single ended receiver threshold 1.3 2.0
Output levels
V OL Static output level low R L of 1.5 kΩ to 3.6 V (5)
5. R L is the load connected on the USB drivers.
- 0.3
V
V OH Static output level high R L of 15 kΩ to V SS (5) 2.8 3.6

**Table 46**. USB: Full-speed electrical characteristics (1)

1. Specified by design, not tested in production.
Symbol Parameter Conditions Min Max Unit
Driver characteristics
t r Rise time (2)
2. Measured from 10% to 90% of the data signal. For more detailed informations, refer to USB specification -
Section 7 (version 2.0).
C L = 50 pF 4 20 ns
t f Fall time (2) C L = 50 pF 4 20 ns
t rfm Rise/ fall time matching t r /t f 90 110 %
V CRS Output signal crossover voltage - 1.3 2.0 V
ai14137b
Cross over
points
Differential
data lines
V CRS
V SS
t f t r

                                <!-- *P74*/114 -->


//5.3.18 12-bit ADC characteristics
-----------------------------------
Unless otherwise specified, the parameters given in Table 47 are derived from tests
performed under the ambient temperature, f PCLK2 frequency and V DDA supply voltage
conditions summarized in Table 9.
Note: It is recommended to perform a calibration after each power-up.


**Table 47**. ADC characteristics

Symbol Parameter Conditions Min Typ Max Unit
V DDA Power supply - 2.4 - 3.6 V
V REF+ Positive reference voltage - 2.4 - V DDA V
I VREF Current on the V REF input pin - - 160 (1) 220 (1) µA
f ADC ADC clock frequency - 0.6 - 14 MHz
f S (2) Sampling rate - 0.05 - 1 MHz
f TRIG (2) External trigger frequency
f ADC = 14 MHz - - 823 kHz
- - 17 1 / f ADC
V AIN (3) Conversion voltage range
0 (V SSA or V REF-
tied to ground)
- V REF+ V
R AIN (2) External input impedance
See Equation 1 and
Table 48 for details
- - 50 kΩ
R ADC (2) Sampling switch resistance - - - 1 kΩ
C ADC (2)
Internal sample and hold
capacitor
- - - 8 pF
t CAL (2) Calibration time
f ADC = 14 MHz 5.9 µs
- 83 1 / f ADC
t lat (2)
Injection trigger conversion
latency
f ADC = 14 MHz - - 0.214 µs
- - - 3 (4) 1 / f ADC
t latr (2)
Regular trigger conversion
latency
f ADC = 14 MHz - - 0.143 µs
- - - 2 (4) 1 / f ADC
t S (2) Sampling time
f ADC = 14 MHz 0.107 - 17.1 µs
- 1.5 - 239.5 1 / f ADC
t STAB (2) Power-up time - 0 0 1 µs
t CONV (2)
Total conversion time
(including sampling time)
f ADC = 14 MHz 1 - 18 µs
-
14 to 252 (t S for sampling +12.5 for
successive approximation)
1 / f ADC
1. Evaluated by characterization, not tested in production, unless otherwise specified.
2. Specified by design, not tested in production.
3. In devices delivered in VFQFPN and LQFP packages, V REF+ is internally connected to V DDA and V REF- is internally
connected to V SSA . Devices that come in the TFBGA64 package have a V REF+ pin but no V REF- pin (V REF- is internally
connected to V SSA ), see Table 5 and Figure 7.
4. For external triggers, a delay of 1/f PCLK2 must be added to the latency specified in Table 47.

                                <!-- *75*/114 -->

Equation 1: R AIN max formula:
The formula above (Equation 1) is used to determine the maximum external impedance allowed for an
error below 1/4 of LSB. Here N = 12 (from 12-bit resolution).



**Table 48**. R AIN max for f ADC = 14 MHz (1)

1. Evaluated by characterization, not tested in production, unless otherwise specified.
T s (cycles) t S (µs) R AIN max (kΩ)
1.5 0.11 0.4
7.5 0.54 5.9
13.5 0.96 11.4
28.5 2.04 25.2
41.5 2.96 37.2
55.5 3.96 50
71.5 5.11 NA
239.5 17.1 NA

**Table 49**. ADC accuracy - Limited test conditions (1) (2)

1. ADC DC accuracy values are measured after internal calibration.
2. Injecting a negative current on any analog input pins should be avoided as this significantly reduces the
accuracy of the conversion being performed on another analog input. It is recommended to add a Schottky
diode (pin to ground) to analog pins that may potentially inject negative currents.
Any positive injection current within the limits specified for I INJ(PIN) and ΣI INJ(PIN) in Section 5.3.12 does not
affect the ADC accuracy.
Symbol Parameter Test conditions Typ Max (3)
3. Evaluated by characterization, not tested in production, unless otherwise specified.
Unit
ET Total unadjusted error
f PCLK2 = 56 MHz,
f ADC = 14 MHz, R AIN < 10 kΩ,
V DDA = 3 V to 3.6 V,
T A = 25 °C
Measurements made after
ADC calibration
±1.3 ±2
LSB
EO Offset error ±1.0 ±1.5
EG Gain error ±0.5 ±1.5
ED Differential linearity error ±0.7 ±1.0
EL Integral linearity error ±0.8 ±1.5
R AIN
T S
f ADC C ADC 2 N
2 +
( ) ln × ×
--------------------------------------------------------------- - R ADC – <

                                <!-- *P76*/114 -->



**Figure 37**. ADC accuracy characteristics


**Table 50**. ADC accuracy (1) (2) (3)

1. ADC DC accuracy values are measured after internal calibration.
2. Better performance can be achieved in restricted V DD , frequency and temperature ranges.
3. Injecting a negative current on any analog input pins should be avoided as this significantly reduces the
accuracy of the conversion being performed on another analog input. It is recommended to add a Schottky
diode (pin to ground) to standard analog pins which may potentially inject negative current.
Any positive injection current within the limits specified for I INJ(PIN) and ΣI INJ(PIN) in Section 5.3.12 does not
affect the ADC accuracy.
Symbol Parameter Test conditions Typ Max (4)
4. Evaluated by characterization, not tested in production, unless otherwise specified.
Unit
ET Total unadjusted error
f PCLK2 = 56 MHz,
f ADC = 14 MHz, R AIN < 10 kΩ,
V DDA = 2.4 V to 3.6 V
Measurements made after
ADC calibration
±2 ±5
LSB
EO Offset error ±1.5 ±2.5
EG Gain error ±1.5 ±3
ED Differential linearity error ±1 ±2
EL Integral linearity error ±1.5 ±3
MSv19880V6
(1) Example of an actual transfer curve
(2) Ideal transfer curve
(3) End-point correlation line
n = ADC resolution
E T = total unadjusted error: maximum deviation
between the actual and ideal transfer curves
E O = offset error: maximum deviation between the first
actual transition and the first ideal one
E G = gain error: deviation between the last ideal
transition and the last actual one
E D = differential linearity error: maximum deviation
between actual steps and the ideal one
E L = integral linearity error: maximum deviation between
any actual transition and the end point correlation line
2 n -1
7
6
5
4
3
2
1
0
(1/2 n )*V REF+
Output code
E O
V SSA
2 n -2
2 n -3
V REF+ (V DDA )
E T
E L
E D
1 LSB ideal
E G
(1)
(2)
(3)
(or )] [1LSB =
V DDA
2 n
V REF+
2 n
(2/2 n )*V REF+
(3/2 n )*V REF+
(4/2 n )*V REF+
(5/2 n )*V REF+
(6/2 n )*V REF+
(7/2 n )*V REF+
(2 n-3 /2 n )*V REF+
(2 n-2 /2 n )*V REF+
(2 n-1 /2 n )*V REF+
(2 n /2 n )*V REF+

                                <!-- *77*/114 -->


**Figure 38**. Typical connection diagram using the ADC

1. Refer to Table 47 for the values of R AIN , R ADC and C ADC .
2. C parasitic represents the capacitance of the PCB (dependent on soldering and PCB layout quality) plus the
pad capacitance (refer to Table 36 for the value of the pad capacitance). A high C parasitic value will
downgrade conversion accuracy. To remedy this, f ADC should be reduced.
3. Refer to Table 36 for the values of I lkg .
4. Refer to Figure 14.
General PCB design guidelines
Power supply decoupling must be performed as shown in Figure 39 or Figure 40, depending
on whether V REF+ is connected to V DDA or not. The 10 nF capacitors should be ceramic
(good quality), and placed as close as possible to the chip.

**Figure 39**. Power supply and reference decoupling (V REF+ not connected to V DDA )

1. V REF+ and V REF– inputs are available only on 100-pin packages.
MSv67871V3
Sample-and-hold ADC converter
Converter
C parasitic (2)
I lkg (3)
C ADC
V DDA (4)
R AIN (1)
V AIN
R ADC
V REF+ (4)
V SSA
I/O
analog
switch
Sampling
switch with
multiplexing
V SS V SS
V REF+
(see note 1)
STM32F103xx
V DDA
V SSA /V REF–
(see note 1)
1 μF // 10 nF
1 μF // 10 nF
ai14388b

                                <!-- *P78*/114 -->


**Figure 40**. Power supply and reference decoupling (V REF+ connected to V DDA )

1. V REF+ and V REF– inputs are available only on 100-pin packages.

//5.3.19 Temperature sensor characteristics
-------------------------------------------

V REF+ /V DDA
STM32F103xx
1 μF // 10 nF
V REF– /V SSA
ai14389
(See note 1)
(See note 1)

**Table 51**. TS characteristics

Symbol Parameter Min Typ Max Unit
T L (1)
1. Evaluated by characterization, not tested in production, unless otherwise specified.
V SENSE linearity with temperature - ±1 ±2 °C
Avg_Slope (1) Average slope 4.0 4.3 4.6 mV/°C
V 25 (1) Voltage at 25 °C 1.34 1.43 1.52 V
t START (2)
2. Specified by design, not tested in production.
Startup time 4 - 10
µs
T S_temp (3)(2)
3. Shortest sampling time can be determined in the application by multiple iterations.
ADC sampling time when reading the temperature - - 17.1

                                <!-- *79*/114 -->


/6 Package information
======================

In order to meet environmental requirements, ST offers these devices in different grades of
ECOPACK® packages, depending on their level of environmental compliance. ECOPACK®
specifications, grade definitions and product status are available at: www.st.com.
ECOPACK® is an ST trademark.

//6.1 Device marking
--------------------
Refer to technical note “Reference device marking schematics for STM32 microcontrollers
and microprocessors” (TN1433), available on www.st.com, for the location of pin 1/ ball A1,
as well as the location and orientation of the marking areas versus pin 1/ball A1.
Parts marked as “ES”, “E”, or accompanied by an engineering sample notification letter, are
not yet qualified and therefore not approved for use in production. ST is not responsible for
any consequences resulting from such use. In no event will ST be liable for the customer
using any of these engineering samples in production. ST’s Quality department must be
contacted prior to any decision to use these engineering samples to run a qualification
activity.

                                <!-- *P80*/114 -->


//6.2 VFQFPN36 package information
----------------------------------

**Figure 41**. VFQFPN - 36 pin, 6x6 mm, 0.5 mm pitch very thin profile fine pitch quad flat

package outline
1. Drawing is not to scale.
ZR_ME_V3
Seating plane
ddd C
C
A3
A1
A
A2
Pin # 1 IDR = 0.20
E2
b
1
9
10
18
27
28
36
19
D2
E
D
e
L
L
K

                                <!-- *81*/114 -->



**Table 52**. VFQFPN - 36 pin, 6x6 mm, 0.5 mm pitch very thin profile fine pitch quad flat

package mechanical data
Symbol
millimeters inches (1)
1. Values in inches are converted from mm and rounded to 4 decimal digits.
Min Typ Max Min Typ Max
A 0.800 0.900 1.000 0.0315 0.0354 0.0394
A1 - 0.020 0.050 - 0.0008 0.0020
A2 - 0.650 1.000 - 0.0256 0.0394
A3 - 0.200 - - 0.0079 -
b 0.180 0.230 0.300 0.0071 0.0091 0.0118
D 5.875 6.000 6.125 0.2313 0.2362 0.2411
D2 1.750 3.700 4.250 0.0689 0.1457 0.1673
E 5.875 6.000 6.125 0.2313 0.2362 0.2411
E2 1.750 3.700 4.250 0.0689 0.1457 0.1673
e 0.450 0.500 0.550 0.0177 0.0197 0.0217
L 0.350 0.550 0.750 0.0138 0.0217 0.0295
K 0.250 - - 0.0098 - -
ddd - - 0.080 - - 0.0031

                                <!-- *P82*/114 -->


**Figure 42**. VFQFPN - 36 pin, 6x6 mm, 0.5 mm pitch very thin profile fine pitch quad flat

package recommended footprint
1. Dimensions are expressed in millimeters.
ZR_FP_V1
0.30
6.30
0.50
1.00 4.30
4.30
4.80
4.80
4.10
4.10
1
28
9
19
36
27
18
10
0.75

                                <!-- *83*/114 -->


//6.3 UFQFPN48 package information (A0B9)
-----------------------------------------
This UFQFPN is a 48-lead, 7 x 7 mm, 0.5 mm pitch, ultra thin fine pitch quad flat package.

**Figure 43**. UFQFPN48 – Outline

1. Drawing is not to scale.
2. All leads/pads should also be soldered to the PCB to improve the lead/pad solder joint life.
3. There is an exposed die pad on the underside of the UFQFPN48 package. It is recommended to connect
and solder this back-side pad to PCB ground.
D1
E1
EXPOSED PAD
E2
e
D2
PIN 1 idenfier
BOTTOM VIEW
L
A
A3
C
FRONT VIEW
DETAIL A
SEATING PLANE
LEADS COPLANARITY
C ddd
SEATING PLANE
A1
A1 A
C
C ddd
PIN 1 IDENTIFIER
LASER MAKER AREA
E
D
TOP VIEW
A0B9_UFQFPN48_ME_V4

                                <!-- *P84*/114 -->



**Figure 44**. UFQFPN48 – Footprint example

1. Dimensions are expressed in millimeters.

**Table 53**. UFQFPN48 – Mechanical data

Symbol
millimeters inches (1)
1. Values in inches are converted from mm and rounded to four decimal digits.
Min Typ Max Min Typ Max
A 0.500 0.550 0.600 0.0197 0.0217 0.0236
A1 0.000 0.020 0.050 0.0000 0.0008 0.0020
A3 - 0.152 - - 0.0060 -
b 0.200 0.250 0.300 0.0079 0.0098 0.0118
D (2)
2. Dimensions D and E do not include mold protrusion, not exceed 0.15 mm.
6.900 7.000 7.100 0.2717 0.2756 0.2795
D1 5.400 5.500 5.600 0.2126 0.2165 0.2205
D2 (3)
3. Dimensions D2 and E2 are not in accordance with JEDEC.
5.500 5.600 5.700 0.2165 0.2205 0.2244
E (2) 6.900 7.000 7.100 0.2717 0.2756 0.2795
E1 5.400 5.500 5.600 0.2126 0.2165 0.2205
E2 (3) 5.500 5.600 5.700 0.2165 0.2205 0.2244
e - 0.500 - - 0.0197 -
L 0.300 0.400 0.500 0.0118 0.0157 0.0197
ddd - - 0.080 - - 0.0031
7.30
7.30
0.20
0.30
0.55
0.50
5.80
6.20
6.20
5.60
5.60
5.80
0.75
A0B9_UFQFPN48_FP_V3
48
1
12
13 24
25
36
37

                                <!-- *85*/114 -->


//6.4 LFBGA100 package information
----------------------------------

**Figure 45**. LFBGA100 – 100-ball low profile fine pitch ball grid array, 10 x 10 mm,

0.8 mm pitch, package outline
1. Drawing is not to scale.


**Table 54**. LFBGA100 – 100-ball low profile fine pitch ball grid array, 10 x 10 mm,

0.8 mm pitch, package mechanical data
Symbol
millimeters inches (1)
Min Typ Max Typ Min Max
A - - 1.700 0.0669
A1 0.270 - - 0.0106
A2 - 0.300 - 0.0118
A4 - - 0.800 - - 0.0315
b 0.450 0.500 0.550 0.0177 0.0197 0.0217
D 9.850 10.000 10.150 0.3878 0.3937 0.3996
D1 - 7.200 - - 0.2835 -
E 9.850 10.000 10.150 0.3878 0.3937 0.3996
E1 - 7.200 - - 0.2835 -
e - 0.800 - - 0.0315 -
F - 1.400 - - 0.0551 -
ddd - - 0.120 - - 0.0047
H0_ME_V2
Seating plane
A4
A1
e F
F
D
K
eee Z Y X
fff
Øb (100 balls)
Ø
Ø
A
M
M
E
TOP VIEW BOTTOM VIEW
1 10
e
A
A2
Z
Y
X
Z
ddd Z
D1
E1
A1 ball
identifier
A1 ball
index area

                                <!-- *P86*/114 -->


**Figure 46**. LFBGA100 – 100-ball low profile fine pitch ball grid array, 10 x 10 mm,

0.8 mm pitch, package recommended footprint

eee - - 0.150 - - 0.0059
fff - - 0.080 - - 0.0031
1. Values in inches are converted from mm and rounded to 4 decimal digits.

**Table 55**. LFBGA100 recommended PCB design rules (0.8 mm pitch BGA)

Dimension Recommended values
Pitch 0.8
Dpad 0.500 mm
Dsm
0.570 mm typ. (depends on the soldermask
registration tolerance)
Stencil opening 0.500 mm
Stencil thickness Between 0.100 mm and 0.125 mm
Pad trace width 0.120 mm
Table 54. LFBGA100 – 100-ball low profile fine pitch ball grid array, 10 x 10 mm,
0.8 mm pitch, package mechanical data (continued)
Symbol
millimeters inches (1)
Min Typ Max Typ Min Max
H0_FP_V1
Dpad
Dsm

                                <!-- *87*/114 -->


//6.5 LQFP100 package information (1L)
--------------------------------------
This LQFP is 100 lead, 14 x 14 mm low-profile quad flat package.
Note: See list of notes in the notes section.

**Figure 47**. LQFP100 - Outline (15)

D1/4
E1/4
4x N/4 TIPS
aaaC A-BD
bbb H A-B D
4x
(N-4) x e
A
0.05
A2 A1 b
aaa C A-BD
ccc C
C
D
D1
D
N
A
1
2
3
SECTION A-A
A
A
B
E E1
SECTION A-A
GAUGE PLANE
B
B
SECTION B-B
H
E1/4
D1/4
L
S
R1
R2
SECTION B-B
b
b1
c
c1
WITH PLATING
BASE METAL
TOP VIEW
SIDE VIEW
BOTTOM VIEW
1L_LQFP100_ME_V3
(6)
(6)
(10)
? 2
??
??
?
(13)
(12)
(5) (2)
(4)
(4)
(5)
(2)
(3)
(L1)
(9) (11)
(11)
(11)
(11)
(2)
(11) (1)

                                <!-- *P88*/114 -->



**Table 56**. LQFP100 - Mechanical data

Symbol
millimeters inches (14)
Min Typ Max Min Typ Max
A - 1.50 1.60 - 0.0590 0.0630
A1 (12) 0.05 - 0.15 0.0019 - 0.0059
A2 1.35 1.40 1.45 0.0531 0.0551 0.0570
b (9)(11) 0.17 0.22 0.27 0.0067 0.0087 0.0106
b1 (11) 0.17 0.20 0.23 0.0067 0.0079 0.0090
c (11) 0.09 - 0.20 0.0035 - 0.0079
c1 (11) 0.09 - 0.16 0.0035 - 0.0063
D (4) 16.00 BSC 0.6299 BSC
D1 (2)(5) 14.00 BSC 0.5512 BSC
E (4) 16.00 BSC 0.6299 BSC
E1 (2)(5) 14.00 BSC 0.5512 BSC
e 0.50 BSC 0.0197 BSC
L 0.45 0.60 0.75 0.177 0.0236 0.0295
L1 (1)(11) 1.00 - 0.0394 -
N (13) 100
θ 0° 3.5° 7° 0° 3.5° 7°
θ1 0° - - 0° - -
θ2 10° 12° 14° 10° 12° 14°
θ3 10° 12° 14° 10° 12° 14°
R1 0.08 - - 0.0031 - -
R2 0.08 - 0.20 0.0031 - 0.0079
S 0.20 - - 0.0079 - -
aaa (1) 0.20 0.0079
bbb (1) 0.20 0.0079
ccc (1) 0.08 0.0031
ddd (1) 0.08 0.0031

                                <!-- *89*/114 -->

Notes:
1. Dimensioning and tolerancing schemes conform to ASME Y14.5M-1994.
2. The Top package body size may be smaller than the bottom package size by as much
as 0.15 mm.
3. Datums A-B and D to be determined at datum plane H.
4. To be determined at seating datum plane C.
5. Dimensions D1 and E1 do not include mold flash or protrusions. Allowable mold flash
or protrusions is “0.25 mm” per side. D1 and E1 are Maximum plastic body size
dimensions including mold mismatch.
6. Details of pin 1 identifier are optional but must be located within the zone indicated.
7. All Dimensions are in millimeters.
8. No intrusion allowed inwards the leads.
9. Dimension “b” does not include dambar protrusion. Allowable dambar protrusion shall
not cause the lead width to exceed the maximum “b” dimension by more than 0.08 mm.
Dambar cannot be located on the lower radius or the foot. Minimum space between
protrusion and an adjacent lead is 0.07 mm for 0.4 mm and 0.5 mm pitch packages.
10. Exact shape of each corner is optional.
11. These dimensions apply to the flat section of the lead between 0.10 mm and 0.25 mm
from the lead tip.
12. A1 is defined as the distance from the seating plane to the lowest point on the package
body.
13. “N” is the number of terminal positions for the specified body size.
14. Values in inches are converted from mm and rounded to 4 decimal digits.
15. Drawing is not to scale.

**Figure 48**. LQFP100 - Footprint example

1. Dimensions are expressed in millimeters.
75 51
50 76
0.5
0.3
16.7 14.3
100 26
12.3
25
1.2
16.7
1
1L_LQFP100_FP_V1

                                <!-- *P90*/114 -->


//6.6 UFBGA100 package information (A0C2)
-----------------------------------------
This UFBGA is a 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball grid array package.
Note: See list of notes in the notes section.

**Figure 49**. UFBGA100 - Outline (13)

A0C2_UFBGA_ME_V8
e
D
A
Øb (N balls)
E
TOP VIEW
BOTTOM VIEW
1
e
A
A
B
D1
E1
eee
C A B
fff
Ø
Ø
M
M C
A1 ball pad
corner
B
C
E
D
F
G
H
J
K
L
M
3 2 4 5 7 6 8 9 11 10
Seating plane
C
A1 A2
ddd
ccc C
C
Detail A
Solder balls
Mold resin
Substrate
(8)
(DATUM A)
(DATUM B)
aaa C
(4X)
(9)
SIDE VIEW
DETAIL A
C
12
SE
SD
A1 ball pad
corner

                                <!-- *91*/114 -->


Notes:
1. Dimensioning and tolerancing schemes conform to ASME Y14.5M-2009 apart
European projection.
2. UFBGA stands for ulta profile fine pitch ball grid array: 0.50 mm < A ≤ 0.65 mm / fine
pitch e < 1.00 mm.
3. The profile height, A, is the distance from the seating plane to the highest point on the
package. It is measured perpendicular to the seating plane.
4. A1 is defined as the distance from the seating plane to the lowest point on the package
body.
5. Dimension b is measured at the maximum diameter of the terminal (ball) in a plane
parallel to primary datum C.
6. BSC stands for BASIC dimensions. It corresponds to the nominal value and has no
tolerance. For tolerances refer to form and position table. On the drawing these
dimensions are framed.
7. Primary datum C is defined by the plane established by the contact points of three or
more solder balls that support the device when it is placed on top of a planar surface.
8. The terminal (ball) A1 corner must be identified on the top surface of the package by
using a corner chamfer, ink or metalized markings, or other feature of package body or

**Table 57**. UFBGA100 - Mechanical data

Symbol
millimeters (1) inches (12)
Min. Typ. Max. Min. Typ. Max.
A (2)(3) - - 0.60 - - 0.0236
A1 (4) 0.05 - - 0.0020 - -
A2 - 0.43 - - 0.0169 -
b (5) 0.23 0.28 0.33 0.0090 0.0110 0.0130
D (6) 7.00 BSC 0.2756 BSC
D1 5.50 BSC 0.2165 BSC
E 7.00 BSC 0.2756 BSC
E1 5.50 BSC 0.2165 BSC
e (9) 0.50 BSC 0.0197 BSC
N (11) 100
SD (12) 0.25 BSC 0.0098 BSC
SE (12) 0.25 BSC 0.0098 BSC
aaa 0.15 0.0059
ccc 0.20 0.0079
ddd 0.08 0.0031
eee 0.15 0.0059
fff 0.05 0.0020

                                <!-- *P92*/114 -->

integral heat slug. A distinguish feature is allowable on the bottom surface of the
package to identify the terminal A1 corner. Exact shape of each corner is optional.
9. e represents the solder ball grid pitch.
10. N represents the total number of balls on the BGA.
11. Basic dimensions SD and SE are defined with respect to datums A and B. It defines the
position of the centre ball(s) in the outer row or column of a fully populated matrix.
12. Values in inches are converted from mm and rounded to 4 decimal digits.
13. Drawing is not to scale.

**Figure 50**. UFBGA100 - Footprint example



**Table 58**. UFBGA100 - Example of PCB design rules (0.5 mm pitch BGA)

Dimension Values
Pitch 0.50 mm
Dpad 0.280 mm
Dsm
0.370 mm typ. (depends on the solder mask
registration tolerance)
Stencil opening 0.280 mm
Stencil thickness Between 0.100 mm and 0.125 mm
BGA_WLCSP_FT_V1
Dsm
Dpad

                                <!-- *93*/114 -->


//6.7 LQFP64 package information (5W)
-------------------------------------
This LQFP is 64-pin, 10 x 10 mm low-profile quad flat package.
Note: See list of notes in the notes section.

**Figure 51**. LQFP64 - Outline (15)

D 1/4
E 1/4
(6)
aaa C A-BD
4x N/4 TIPS
bbbHA-B D 4x
(13) (N – 4)x e
0.05
A
A2 A1 (12)
b
ddd C A-B D
ccc
C
C
D
(5) (2)
(4)
D1
D (3)
D 1/4
E 1/4
(6)
1
2
3
(3) A
B (3)
(5)
(2)
E1 E
A A
(Section A-A)
(4)
5W_LQFP64_ME_V1
(10)
N
BOTTOM VIEW
TOP VIEW
SECTION A-A
GAUGE PLANE
B
B
SECTION B-B
H
L
S
R1
R2
SECTION B-B
b
b1
c
c1
WITH PLATING
BASE METAL
1
3
2
(L1)
(2)
0.25
(11)
(9)(11)
(11) (11)
(11)
(1)

                                <!-- *P94*/114 -->



**Table 59**. LQFP64 - Mechanical data

Symbol
millimeters inches (14)
Min Typ Max Min Typ Max
A - - 1.60 - - 0.0630
A1 (12) 0.05 - 0.15 0.0020 - 0.0059
A2 1.35 1.40 1.45 0.0531 0.0551 0.0570
b (9)(11) 0.17 0.22 0.27 0.0067 0.0087 0.0106
b1 (11) 0.17 0.20 0.23 0.0067 0.0079 0.0091
c (11) 0.09 - 0.20 0.0035 - 0.0079
c1 (11) 0.09 - 0.16 0.0035 - 0.0063
D (4) 12.00 BSC 0.4724 BSC
D1 (2)(5) 10.00 BSC 0.3937 BSC
E (4) 12.00 BSC 0.4724 BSC
E1 (2)(5) 10.00 BSC 0.3937 BSC
e 0.50 BSC 0.1970 BSC
L 0.45 0.60 0.75 0.0177 0.0236 0.0295
L1 1.00 REF 0.0394 REF
N (13) 64
θ 0° 3.5° 7° 0° 3.5° 7°
θ1 0° - - 0° - -
θ2 10° 12° 14° 10° 12° 14°
θ3 10° 12° 14° 10° 12° 14°
R1 0.08 - - 0.0031 - -
R2 0.08 - 0.20 0.0031 - 0.0079
S 0.20 - - 0.0079 - -
aaa (1) 0.20 0.0079
bbb (1) 0.20 0.0079
ccc (1) 0.08 0.0031
ddd (1) 0.08 0.0031

                                <!-- *95*/114 -->

Notes:
1. Dimensioning and tolerancing schemes conform to ASME Y14.5M-1994.
2. The Top package body size may be smaller than the bottom package size by as much
as 0.15 mm.
3. Datums A-B and D to be determined at datum plane H.
4. To be determined at seating datum plane C.
5. Dimensions D1 and E1 do not include mold flash or protrusions. Allowable mold flash
or protrusions is “0.25 mm” per side. D1 and E1 are Maximum plastic body size
dimensions including mold mismatch.
6. Details of pin 1 identifier are optional but must be located within the zone indicated.
7. All Dimensions are in millimeters.
8. No intrusion allowed inwards the leads.
9. Dimension “b” does not include dambar protrusion. Allowable dambar protrusion shall
not cause the lead width to exceed the maximum “b” dimension by more than 0.08 mm.
Dambar cannot be located on the lower radius or the foot. Minimum space between
protrusion and an adjacent lead is 0.07 mm for 0.4 mm and 0.5 mm pitch packages.
10. Exact shape of each corner is optional.
11. These dimensions apply to the flat section of the lead between 0.10 mm and 0.25 mm
from the lead tip.
12. A1 is defined as the distance from the seating plane to the lowest point on the package
body.
13. “N” is the number of terminal positions for the specified body size.
14. Values in inches are converted from mm and rounded to 4 decimal digits.
15. Drawing is not to scale.


**Figure 52**. LQFP64 - Footprint example

1. Dimensions are expressed in millimeters.
48
32
49
64
17
1
16
1.20
0.30
33
10.30
12.70
10.30
0.5
7.80
12.70
5W_LQFP64_FP_V2

                                <!-- *P96*/114 -->


//6.8 TFBGA64 package information
---------------------------------

**Figure 53**. TFBGA64 – 64-ball, 5 x 5 mm, 0.5 mm pitch thin profile fine pitch ball grid

array
package outline
1. Drawing is not to scale.
 Table 60. TFBGA64 – 64-ball, 5 x 5 mm, 0.5 mm pitch, thin profile fine pitch ball grid
array
package mechanical data
Symbol
millimeters inches (1)
Min Typ Max Min Typ Max
A - - 1.200 - - 0.0472
A1 0.150 - - 0.0059 - -
A2 - 0.200 - - 0.0079 -
A4 - - 0.600 - - 0.0236
b 0.250 0.300 0.350 0.0098 0.0118 0.0138
D 4.850 5.000 5.150 0.1909 0.1969 0.2028
D1 - 3.500 - - 0.1378 -
E 4.850 5.000 5.150 0.1909 0.1969 0.2028
R8_ME_V4
Seating plane
A1
e F
F
D
H
Øb (64 balls)
A
E
TOP VIEW BOTTOM VIEW
1 8
e
A
B
A
C
ddd C
D1
E1
eee C B A
fff
Ø
Ø
M
M C
A2
A4
A1 ball
identifier
A1 ball
index area
SIDE VIEW

                                <!-- *97*/114 -->



**Figure 54**. TFBGA64 – 64-ball, 5 x 5 mm, 0.5 mm pitch, thin profile fine pitch ball grid

array
, recommended footprint

E1 - 3.500 - - 0.1378 -
e - 0.500 - - 0.0197 -
F - 0.750 - - 0.0295 -
ddd - - 0.080 - - 0.0031
eee - - 0.150 - - 0.0059
fff - - 0.050 - - 0.0020
1. Values in inches are converted from mm and rounded to 4 decimal digits.

**Table 61**. TFBGA64 recommended PCB design rules (0.5 mm pitch BGA)

Dimension Recommended values
Pitch 0.5
Dpad 0.280 mm
Dsm
0.370 mm typ. (depends on the soldermask
registration tolerance)
Stencil opening 0.280 mm
Stencil thickness Between 0.100 mm and 1.125 mm
Pad trace width 0.100 mm

**Table 60**. TFBGA64 – 64-ball, 5 x 5 mm, 0.5 mm pitch, thin profile fine pitch ball grid

array
package mechanical data (continued)
Symbol
millimeters inches (1)
Min Typ Max Min Typ Max
R8_FP_V1
Dpad
Dsm

                                <!-- *P98*/114 -->


//6.9 LQFP48 package information (5B)
-------------------------------------
This LQFP is a 48-pin, 7 x 7 mm low-profile quad flat package
Note: See list of notes in the notes section.

**Figure 55**. LQFP48 – Outline (15)

SECTION A-A
GAUGE PLANE
B
B
SECTION B-B
H
L
S
R1
R2
SECTION B-B
b
b1
c
c1
WITH PLATING
BASE METAL
1
3
2
5B_LQFP48_ME_V1
(6)
aaa C A-BD
4x N/4 TIPS
bbbHA-B D 4x
ddd C A-B D
(12)
(13)
(N – 4)x e
ccc C
A
D 1/4
E 1/4
0.05
A1
A2
b
C
(3)
E1
D 1/4
(3)
(4)
A
1
2
3
(2)(5)
D1
D
D (3)
(4)
E
(Section A-A)
B
E 1/4
N
(10)
(5)
(2)
(6)
A A
BOTTOM VIEW
TOP VIEW
(L1)
(2)
0.25
(11)
(9)(11)
(11) (11)
(11)
(1)

                                <!-- *99*/114 -->



**Table 62**. LQFP48 – Mechanical data

Symbol
millimeters inches (14)
Min Typ Max Min Typ Max
A - - 1.60 - - 0.0630
A1 (12) 0.05 - 0.15 0.0020 - 0.0059
A2 1.35 1.40 1.45 0.0531 0.0551 0.0571
b (9)(11) 0.17 0.22 0.27 0.0067 0.0087 0.0106
b1 (11) 0.17 0.20 0.23 0.0067 0.0079 0.0090
c (11) 0.09 - 0.20 0.0035 - 0.0079
c1 (11) 0.09 - 0.16 0.0035 - 0.0063
D (4) 9.00 BSC 0.3543 BSC
D1 (2)(5) 7.00 BSC 0.2756 BSC
E (4) 9.00 BSC 0.3543 BSC
E1 (2)(5) 7.00 BSC 0.2756 BSC
e 0.50 BSC 0.1970 BSC
L 0.45 0.60 0.75 0.0177 0.0236 0.0295
L1 1.00 REF 0.0394 REF
N (13) 48
θ 0° 3.5° 7° 0° 3.5° 7°
θ1 0° - - 0° - -
θ2 10° 12° 14° 10° 12° 14°
θ3 10° 12° 14° 10° 12° 14°
R1 0.08 - - 0.0031 - -
R2 0.08 - 0.20 0.0031 - 0.0079
S 0.20 - - 0.0079 - -
aaa (1)(7) 0.20 0.0079
bbb (1)(7) 0.20 0.0079
ccc (1)(7) 0.08 0.0031
ddd (1)(7) 0.08 0.0031

                                <!-- *P100*/114 -->

Notes:
1. Dimensioning and tolerancing schemes conform to ASME Y14.5M-1994.
2. The Top package body size may be smaller than the bottom package size by as much
as 0.15 mm.
3. Datums A-B and D to be determined at datum plane H.
4. To be determined at seating datum plane C.
5. Dimensions D1 and E1 do not include mold flash or protrusions. Allowable mold flash
or protrusions is “0.25 mm” per side. D1 and E1 are Maximum plastic body size
dimensions including mold mismatch.
6. Details of pin 1 identifier are optional but must be located within the zone indicated.
7. All Dimensions are in millimeters.
8. No intrusion allowed inwards the leads.
9. Dimension “b” does not include dambar protrusion. Allowable dambar protrusion shall
not cause the lead width to exceed the maximum “b” dimension by more than 0.08 mm.
Dambar cannot be located on the lower radius or the foot. Minimum space between
protrusion and an adjacent lead is 0.07 mm for 0.4 mm and 0.5 mm pitch packages.
10. Exact shape of each corner is optional.
11. These dimensions apply to the flat section of the lead between 0.10 mm and 0.25 mm
from the lead tip.
12. A1 is defined as the distance from the seating plane to the lowest point on the package
body.
13. “N” is the number of terminal positions for the specified body size.
14. Values in inches are converted from mm and rounded to 4 decimal digits.
15. Drawing is not to scale.

**Figure 56**. LQFP48 – Footprint example

1. Dimensions are expressed in millimeters.
12
24
1
37
36
5.80
0.30
25
1.20
0.50
13 48
9.70 7.30
9.70
0.20
5B_LQFP48_FP_V1

                                <!-- *101*/114 -->


//6.10 Thermal characteristics
------------------------------
The maximum chip junction temperature (T J max) must never exceed the values given in
Table 9: General operating conditions.
The maximum chip-junction temperature, T J max, in degrees Celsius, may be calculated
using the following equation:
T J max = T A max + (P D max × Θ JA )
where:
• T A max is the maximum ambient temperature in °C,
• Θ JA is the package junction-to-ambient thermal resistance, in °C/W,
• P D max is the sum of P INT max and P I/O max (P D max = P INT max + P I/O max),
• P INT max is the product of I DD and V DD , expressed in Watts. This is the maximum chip
internal power.
P I/O max represents the maximum power dissipation on output pins where:
P I/O max = Σ (V OL × I OL ) + Σ((V DD – V OH ) × I OH ),
taking into account the actual V OL / I OL and V OH / I OH of the I/Os at low and high level in the
application.


//6.10.1 Reference document
---------------------------
JESD51-2 Integrated Circuits Thermal Test Method Environment Conditions - Natural
Convection (Still Air). Available from www.jedec.org.

**Table 63**. Package thermal characteristics

Symbol Parameter Value Unit
Θ JA
Thermal resistance junction-ambient
LFBGA100 - 10 × 10 mm / 0.8 mm pitch
44
°C/W
Thermal resistance junction-ambient
LQFP100 - 14 × 14 mm / 0.5 mm pitch
46
Thermal resistance junction-ambient
UFBGA100 - 7 × 7 mm / 0.5 mm pitch
59
Thermal resistance junction-ambient
LQFP64 - 10 × 10 mm / 0.5 mm pitch
45
Thermal resistance junction-ambient
TFBGA64 - 5 × 5 mm / 0.5 mm pitch
65
Thermal resistance junction-ambient
LQFP48 - 7 x 7 mm / 0.5 mm pitch
55
Thermal resistance junction-ambient
UFQFPN 48 - 7 × 7 mm / 0.5 mm pitch
32
Thermal resistance junction-ambient
VFQFPN 36 - 6 × 6 mm / 0.5 mm pitch
18

                                <!-- *P102*/114 -->


//6.10.2 Selecting the product temperature range
------------------------------------------------
When ordering the microcontroller, the temperature range is specified in the ordering
information scheme shown in Section 7.
Each temperature range suffix corresponds to a specific guaranteed ambient temperature at
maximum dissipation and, to a specific maximum junction temperature.
As applications do not commonly use the STM32F103xx at maximum dissipation, it is useful
to calculate the exact power consumption and junction temperature to determine which
temperature range will be best suited to the application.
The following examples show how to calculate the temperature range needed for a given
application.
Example 1: High-performance application
Assuming the following application conditions:
Maximum ambient temperature T Amax = 82 °C (measured according to JESD51-2),
I DDmax = 50 mA, V DD = 3.5 V, maximum 20 I/Os used at the same time in output at low
level with I OL = 8 mA, V OL = 0.4 V and maximum 8 I/Os used at the same time in output
at low level with I OL = 20 mA, V OL = 1.3 V
P INTmax = 50 mA × 3.5 V= 175 mW
P IOmax = 20 × 8 mA × 0.4 V + 8 × 20 mA × 1.3 V = 272 mW
This gives: P INTmax = 175 mW and P IOmax = 272 mW:
P Dmax = 175 + 272 = 447 mW
Thus: P Dmax = 447 mW
Using the values obtained in Table 63 T Jmax is calculated as follows:
– For LQFP100, 46 °C/W
T Jmax = 82 °C + (46 °C/W × 447 mW) = 82 °C + 20.6 °C = 102.6 °C
This is within the range of the suffix 6 version parts (–40 < T J < 105°C).
In this case, parts must be ordered at least with the temperature range suffix 6 (see
Section 7).
Example 2: High-temperature application
Using the same rules, it is possible to address applications that run at high ambient
temperatures with a low dissipation, as long as junction temperature T J remains within the
specified range.
Assuming the following application conditions:
Maximum ambient temperature T Amax = 115 °C (measured according to JESD51-2),
I DDmax = 20 mA, V DD = 3.5 V, maximum 20 I/Os used at the same time in output at low
level with I OL = 8 mA, V OL = 0.4 V
P INTmax = 20 mA × 3.5 V= 70 mW
P IOmax = 20 × 8 mA × 0.4 V = 64 mW
This gives: P INTmax = 70 mW and P IOmax = 64 mW:
P Dmax = 70 + 64 = 134 mW
Thus: P Dmax = 134 mW

                                <!-- *103*/114 -->

Using the values obtained in Table 63 T Jmax is calculated as follows:
– For LQFP100, 46 °C/W
T Jmax = 115 °C + (46 °C/W × 134 mW) = 115 °C + 6.2 °C = 121.2 °C
This is within the range of the suffix 7 version parts (–40 < T J < 125 °C).
In this case, parts must be ordered at least with the temperature range suffix 7 (see
Section 7).

**Figure 57**. LQFP100 P D max vs. T A

0
100
200
300
400
500
600
700
65 75 85 95 105 115 125 135
T A (°C)
P D (mW)
Suffix 6
Suffix 7

                                <!-- *P104*/114 -->


/7 Ordering information scheme
==============================


For a list of available options (speed, package, etc.) or for further information on any aspect
of this device, contact your nearest ST sales office.

Example: STM32 F 103 C 8 T 7 xxx
Device family
STM32 = Arm-based 32-bit microcontroller
Product type
F = General-purpose
Device subfamily
103 = Performance line
Pin count
T = 36 pins
C = 48 pins
R = 64 pins
V = 100 pins
Flash memory size
8 = 64 Kbytes of Flash memory
B = 128 Kbytes of Flash memory
Package
H = BGA
I = UFBGA
T = LQFP
U = VFQFPN or UFQFPN
Temperature range
6 = Industrial temperature range, –40 to 85 °C
7 = Industrial temperature range, –40 to 105 °C
Options
xxx = programmed parts
TR = tape and reel

                                <!-- *105*/114 -->


/8 Important security notice
============================

The STMicroelectronics group of companies (ST) places a high value on product security,
which is why the ST product(s) identified in this documentation may be certified by various
security certification bodies and/or may implement our own security measures as set forth
herein. However, no level of security certification and/or built-in security measures can
guarantee that ST products are resistant to all forms of attacks. As such, it is the
responsibility of each of ST's customers to determine if the level of security provided in an
ST product meets the customer needs both in relation to the ST product alone, as well as
when combined with other components and/or software for the customer end product or
application. In particular, take note that:
• ST products may have been certified by one or more security certification bodies, such
as Platform Security Architecture (www.psacertified.org) and/or Security Evaluation
standard for IoT Platforms (www.trustcb.com). For details concerning whether the ST
product(s) referenced herein have received security certification along with the level
and current status of such certification, either visit the relevant certification standards
website or go to the relevant product page on www.st.com for the most up to date
information. As the status and/or level of security certification for an ST product can
change from time to time, customers should re-check security certification status/level
as needed. If an ST product is not shown to be certified under a particular security
standard, customers should not assume it is certified.
• Certification bodies have the right to evaluate, grant and revoke security certification in
relation to ST products. These certification bodies are therefore independently
responsible for granting or revoking security certification for an ST product, and ST
does not take any responsibility for mistakes, evaluations, assessments, testing, or
other activity carried out by the certification body with respect to any ST product.
• Industry-based cryptographic algorithms (such as AES, DES, or MD5) and other open
standard technologies which may be used in conjunction with an ST product are based
on standards which were not developed by ST. ST does not take responsibility for any
flaws in such cryptographic algorithms or open technologies or for any methods which
have been or may be developed to bypass, decrypt or crack such algorithms or
technologies.
• While robust security testing may be done, no level of certification can absolutely
guarantee protections against all attacks, including, for example, against advanced
attacks which have not been tested for, against new or unidentified forms of attack, or
against any form of attack when using an ST product outside of its specification or
intended use, or in conjunction with other components or software which are used by
customer to create their end product or application. ST is not responsible for resistance
against such attacks. As such, regardless of the incorporated security features and/or
any information or support that may be provided by ST, each customer is solely
responsible for determining if the level of attacks tested for meets their needs, both in
relation to the ST product alone and when incorporated into a customer end product or
application.
• All security features of ST products (inclusive of any hardware, software,
documentation, and the like), including but not limited to any enhanced security
features added by ST, are provided on an "AS IS" BASIS. AS SUCH, TO THE EXTENT
PERMITTED BY APPLICABLE LAW, ST DISCLAIMS ALL WARRANTIES, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, unless the
applicable written and signed contract terms specifically provide otherwise.

                                <!-- *P106*/114 -->


/9 Revision history
===================



**Table 64**. Document revision history

Date Revision Changes
01-Jun-2007 1 Initial release.
20-Jul-2007 2
Flash memory size modified in Note 9, Note 5, Note 7, Note 7 and
BGA100 pins added to Table 5: Medium-density STM32F103xx pin
definitions.
Figure 3: STM32F103xx performance line LFBGA100 ballout added.
T HSE changed to T LSE in Figure 23: Low-speed external clock source AC
timing diagram. V BAT ranged modified in Power supply schemes.
t SU(LSE) changed to t SU(HSE) in Table 22: HSE 4-16 MHz oscillator
characteristics. I DD(HSI) max value added to Table 24: HSI oscillator
characteristics.
Sample size modified and machine model removed in Electrostatic
discharge (ESD).
Number of parts modified and standard reference updated in Static latch-
up. 25 °C and 85 °C conditions removed and class name modified in
Table 33: Electrical sensitivities. R PU and R PD min and max values added
to Table 35: I/O static characteristics. R PU min and max values added to
Table 38: NRST pin characteristics.
Figure 32: I2C bus AC waveforms and measurement circuit and Figure
31: Recommended NRST pin protection corrected.
Notes removed below Table 9, Table 38, Table 44.
I DD typical values changed in Table 11: Maximum current consumption in
Run and Sleep modes. Table 39: TIMx characteristics modified.
t STAB , V REF+ value, t lat and f TRIG added to Table 46: ADC characteristics.
In Table: typical endurance and data retention for T A = 85 °C added, data
retention for T A = 25 °C removed.
V BG changed to V REFINT in Table 12: Embedded internal reference
voltage. Document title changed. Controller area network (CAN) section
modified.
Figure 14: Power supply scheme modified.
Features on page 1 list optimized. Small text changes.

                                <!-- *107*/114 -->

18-Oct-2007 3
STM32F103CBT6, STM32F103T6 and STM32F103T8 root part numbers
added (see Table 2: STM32F103xx medium-density device features and
peripheral counts)
VFQFPN36 package added (see Section 6: Package information). All
packages are ECOPACK® compliant. Package mechanical data inch
values are calculated from mm and rounded to 4 decimal digits (see
Section 6: Package information).
Table 5: Medium-density STM32F103xx pin definitions updated and
clarified.
Table 26: Low-power mode wakeup timings updated.
T A min corrected in Table 12: Embedded internal reference voltage.
Note 2 added below Table 22: HSE 4-16 MHz oscillator characteristics.
V ESD(CDM) value added to Table 32: ESD absolute maximum ratings.
Note 4 added and V OH parameter description modified in Table 36:
Output voltage characteristics.
Note 1 modified under Table 37: I/O AC characteristics.
Equation 1 and Table 47: R AIN max for f ADC = 14 MHz added to Section
5.3.18: 12-bit ADC characteristics.
V AIN , t S max, t CONV , V REF+ min and t lat max modified, notes modified and
t latr added in Table 46: ADC characteristics.
Figure 37: ADC accuracy characteristics updated. Note 1 modified below
Figure 38: Typical connection diagram using the ADC.
Electrostatic discharge (ESD) on page 59 modified.
Number of TIM4 channels modified in Figure 1: STM32F103xx
performance line block diagram.
Maximum current consumption Table 13, Table 14 and Table 15 updated.
V hys modified in Table 35: I/O static characteristics.
Table 49: ADC accuracy updated. V FESD value added in Table 30: EMS
characteristics. Values corrected, note 2 modified and note 3 removed in
Table 26: Low-power mode wakeup timings.
Table 16: Typical and maximum current consumptions in Stop and
Standby modes: Typical values added for V DD /V BAT = 2.4 V, Note 2
modified, Note 2 added.
Table 21: Typical current consumption in Standby mode added.
On-chip peripheral current consumption on page 49 added.
ACC HSI values updated in Table 24: HSI oscillator characteristics.
V prog added to Table 28: Flash memory characteristics.
Upper option byte address modified in Figure 11: Memory map.
Typical f LSI value added in Table 25: LSI oscillator characteristics and
internal RC value corrected from 32 to 40 kHz in entire document.
T S_temp added to Table 50: TS characteristics. N END modified in Table.
T S_vrefint added to Table 12: Embedded internal reference voltage.
Handling of unused pins specified in General input/output characteristics
on page 61. All I/Os are CMOS and TTL compliant.
Figure 39: Power supply and reference decoupling (V REF+ not connected
to V DDA ) modified.
t JITTER and f VCO removed from Table 27: PLL characteristics. Appendix
A: Important notes on page 81 added.
Added Figure 16, Figure 17, Figure 19 and Figure 21.
Table 64. Document revision history (continued)
Date Revision Changes

                                <!-- *P108*/114 -->

22-Nov-2007 4
Document status promoted from preliminary data to datasheet.
STM32F103xx is USB certified. Small text changes.
Power supply schemes on page 15 modified. Number of communication
peripherals corrected for STM32F103Tx and number of GPIOs corrected
for LQFP package in Table 2: STM32F103xx medium-density device
features and peripheral counts.
Main function and default alternate function modified for PC14 and PC15
in, Note 6 added and Remap column added in Table 5: Medium-density
STM32F103xx pin definitions.
V DD –V SS ratings and Note 1 modified in Table 6: Voltage characteristics,
Note 1 modified in Table 7: Current characteristics.
Note 1 and Note 2 added in Table 11: Embedded reset and power control
block characteristics.
I DD value at 72 MHz with peripherals enabled modified in Table 14:
Maximum current consumption in Run mode, code with data processing
running from RAM.
I DD value at 72 MHz with peripherals enabled modified in Table 15:
Maximum current consumption in Sleep mode, code running from Flash
or RAM on page 43.
I DD_VBAT typical value at 2.4 V modified and I DD_VBAT maximum values
added in Table 16: Typical and maximum current consumptions in Stop
and Standby modes. Note added in Table 17 on page 47 and Table 18 on
page 48. ADC1 and ADC2 consumption and notes modified in Table 19:
Peripheral current consumption.
t SU(HSE) and t SU(LSE) conditions modified in Table 22 and Table 23,
respectively.
Maximum values removed from Table 26: Low-power mode wakeup
timings. t RET conditions modified in Table. Figure 14: Power supply
scheme corrected.
Figure 20: Typical current consumption in Stop mode, with regulator in
Low-power mode added.
Note removed below Figure 33: SPI timing diagram - slave mode and
CPHA = 0. Note added below Figure 34: SPI timing diagram - slave mode
and CPHA = 1(1).
Details on unused pins removed from General input/output
characteristics on page 61.
Table 42: SPI characteristics updated. Table 43: USB startup time added.
V AIN , t lat and t latr modified, note added and I lkg removed in Table 46: ADC
characteristics. Test conditions modified and note added in Table 49:
ADC accuracy. Note added below Table 47 and Table 50.
Inch values corrected in Table 55: LQPF100 mechanical data, Table 58:
LQFP64 mechanical data and Table 60: LQFP48, 7 x 7 mm, 48-pin low-
profile quad flat package mechanical data.
Θ JA value for VFQFPN36 package added in Table 62: Package thermal
characteristics.
Order codes replaced by Section 7: Ordering information scheme.
MCU ‘s operating conditions modified in Typical current consumption on
page 46. Avg_Slope and V 25 modified in Table 50: TS characteristics. I2C
interface characteristics on page 68 modified.
Impedance specified in A.4: Voltage glitch on ADC input 0 on page 81.
Table 64. Document revision history (continued)
Date Revision Changes

                                <!-- *109*/114 -->

14-Mar-2008 5
Figure 2: Clock tree on page 12 added.
Maximum T J value given in Table 8: Thermal characteristics on page 37.
CRC feature added (see CRC (cyclic redundancy check) calculation unit
on page 9 and Figure 11: Memory map on page 34 for address).
I DD modified in Table 16: Typical and maximum current consumptions in
Stop and Standby modes.
ACC HSI modified in Table 24: HSI oscillator characteristics on page 54,
note 2 removed.
P D , T A and T J added, t prog values modified and t prog description clarified
in Table 28: Flash memory characteristics on page 56.
t RET modified in Table.
V NF(NRST) unit corrected in Table 38: NRST pin characteristics on page
66.
Table 42: SPI characteristics on page 70 modified.
I VREF added to Table 46: ADC characteristics on page 74.
Table 48: ADC accuracy - Limited test conditions added. Table 49: ADC
accuracy modified.
LQFP100 package specifications updated (see Section 6: Package
information on page 79).
Recommended LQFP100, LQFP 64, LQFP48 and VFQFPN36 footprints
added (see Figure 55, Figure 60, Figure 64 and Figure 44).
Section 6.9: Thermal characteristics on page 104 modified, Section 6.9.1
and Section 6.9.2 added.
Appendix A: Important notes on page 81 removed.
21-Mar-2008 6
Small text changes. Figure 11: Memory map clarified.
In Table:
N END tested over the whole temperature range, cycling conditions
specified for t RET, t RET min modified at T A = 55 °C
V 25 , Avg_Slope and T L modified in Table 50: TS characteristics.
CRC feature removed.
22-May-2008 7
CRC feature added back. Small text changes. Section 1: Introduction
modified. Section 2.2: Full compatibility throughout the family added.
I DD at T A max = 105 °C added to Table 16: Typical and maximum current
consumptions in Stop and Standby modes on page 44.
I DD_VBAT removed from Table 21: Typical current consumption in Standby
mode on page 47.
Values added to Table 41: SCL frequency (f PCLK1 = 36 MHz, V DD_I2C =
3.3 V) on page 69.
Figure 33: SPI timing diagram - slave mode and CPHA = 0 on page 71
modified. Equation 1 corrected.
t RET at T A = 105 °C modified in Table on page 57.
V USB added to Table 44: USB DC electrical characteristics on page 73.
Figure 65: LQFP100 P D max vs. T A on page 106 modified.
Axx option added to Table 63: Ordering information scheme on page 110.
Table 64. Document revision history (continued)
Date Revision Changes

                                <!-- *P110*/114 -->

21-Jul-2008 8
Power supply supervisor updated and V DDA added to Table 9: General
operating conditions.
Capacitance modified in Figure 14: Power supply scheme on page 36.
Table notes revised in Section 5: Electrical characteristics.
Table 16: Typical and maximum current consumptions in Stop and
Standby modes modified.
Data added to Table 16: Typical and maximum current consumptions in
Stop and Standby modes and Table 21: Typical current consumption in
Standby mode removed.
f HSE_ext modified in Table 20: High-speed external user clock
characteristics on page 50. f PLL_IN modified in Table 27: PLL
characteristics on page 56.
Minimum SDA and SCL fall time value for Fast mode removed from Table
40: I2C characteristics on page 68, note 1 modified.
t h(NSS) modified in Table 42: SPI characteristics on page 70 and Figure
33: SPI timing diagram - slave mode and CPHA = 0 on page 71.
C ADC modified in Table 46: ADC characteristics on page 74 and Figure
38: Typical connection diagram using the ADC modified.
Typical T S_temp value removed from Table 50: TS characteristics on page
78.
LQFP48 package specifications updated (see Table 60 and Table 64),
Section 6: Package information revised.
Axx option removed from Table 63: Ordering information scheme on page
110.
Small text changes.
22-Sep-2008 9
STM32F103x6 part numbers removed (see Table 63: Ordering
information scheme). Small text changes.
General-purpose timers (TIMx) and Advanced-control timer (TIM1) on
page 18 updated.
Notes updated in Table 5: Medium-density STM32F103xx pin definitions
on page 28.
Note 2 modified below Table 6: Voltage characteristics on page 37,
|ΔV DDx | min and |ΔV DDx | min removed.
Measurement conditions specified in Section 5.3.5: Supply current
characteristics on page 40.
I DD in standby mode at 85 °C modified in Table 16: Typical and maximum
current consumptions in Stop and Standby modes on page 44.
General input/output characteristics on page 61 modified.
f HCLK conditions modified in Table 30: EMS characteristics on page 58.
Θ JA and pitch value modified for LFBGA100 package in Table 62:
Package thermal characteristics. Small text changes.
Table 64. Document revision history (continued)
Date Revision Changes

                                <!-- *111*/114 -->

23-Apr-2009 10
I/O information clarified on page 1.
Figure 3: STM32F103xx performance line LFBGA100 ballout modified.
Figure 11: Memory map modified.
Table 4: Timer feature comparison added.
PB4, PB13, PB14, PB15, PB3/TRACESWO moved from Default column
to Remap column in Table 5: Medium-density STM32F103xx pin
definitions.
P D for LFBGA100 corrected in Table 9: General operating conditions.
Note modified in Table 13: Maximum current consumption in Run mode,
code with data processing running from Flash and Table 15: Maximum
current consumption in Sleep mode, code running from Flash or RAM.
Table 20: High-speed external user clock characteristics and Table 21:
Low-speed external user clock characteristics modified.
Figure 20 shows a typical curve (title modified). ACC HSI max values
modified in Table 24: HSI oscillator characteristics.
TFBGA64 package added (see Table 59 and Table 60). Small text
changes.
22-Sep-2009 11
Note 5 updated and Note 4 added in Table 5: Medium-density
STM32F103xx pin definitions.
V RERINT and T Coeff added to Table 12: Embedded internal reference
voltage. I DD_VBAT value added to Table 16: Typical and maximum current
consumptions in Stop and Standby modes. Figure 18: Typical current
consumption on V BAT (RTC on) added.
f HSE_ext min modified in Table 20: High-speed external user clock
characteristics.
C L1 and C L2 replaced by C in Table 22: HSE 4-16 MHz oscillator
characteristics and Table 23: LSE oscillator characteristics (f LSE = 32.768
kHz), notes modified and moved below the tables. Table 24: HSI oscillator
characteristics modified. Conditions removed from Table 26: Low-power
mode wakeup timings.
Note 1 modified below Figure 24: Typical application with an 8 MHz
crystal.
IEC 1000 standard updated to IEC 61000 and SAE J1752/3 updated to
IEC 61967-2 in Section 5.3.10: EMC characteristics on page 57.
Jitter added to Table 27: PLL characteristics.
Table 42: SPI characteristics modified.
C ADC and R AIN parameters modified in Table 46: ADC characteristics.
R AIN max values modified in Table 47: R AIN max for f ADC = 14 MHz.
Figure 47: LFBGA100 outline updated.
03-Jun-2010 12
Added STM32F103TB devices.
Added VFQFPN48 package.
Updated note 2 below Table 40: I2C characteristics
Updated Figure 32: I2C bus AC waveforms and measurement circuit
Updated Figure 31: Recommended NRST pin protection
Updated Section 5.3.12: I/O current injection characteristics
Table 64. Document revision history (continued)
Date Revision Changes

                                <!-- *P112*/114 -->

19-Apr-2011 13
Updated footnotes below Table 6: Voltage characteristics on page 37 and
Table 7: Current characteristics on page 37
Updated tw min in Table 20: High-speed external user clock
characteristics on page 50
Updated startup time in Table 23: LSE oscillator characteristics (f LSE =
32.768 kHz) on page 53
Added Section 5.3.12: I/O current injection characteristics
Updated Section 5.3.13: I/O port characteristics
07-Dec-2012 14
Added UFBGA100 7 x 7 mm.
Updated Figure 59: LQFP64, 10 x 10 mm, 64-pin low-profile quad flat
package outline to add pin 1 identification.
14-May-2013 15
Replaced VQFN48 package with UQFN48 in cover page packages, Table
2: STM32F103xx medium-density device features and peripheral counts,
Figure 9: STM32F103xx performance line UFQFPN48 pinout, Table 2:
STM32F103xx medium-density device features and peripheral counts,
Table 56: UFBGA100 mechanical data, Table 63: Ordering information
scheme and updated Table 62: Package thermal characteristics
Added footnote for TFBGA ADC channels in Table 2: STM32F103xx
medium-density device features and peripheral counts
Updated ‘All GPIOs are high current...’ in Section 2.3.21: GPIOs (general-
purpose inputs/outputs)
Updated Table 5: Medium-density STM32F103xx pin definitions
Corrected Sigma letter in Section 5.1.1: Minimum and maximum values
Removed the first sentence in Section 5.3.16: Communications interfaces
Added ‘V IN ’ in Table 9: General operating conditions
Updated first sentence in Output driving current
Added note 5. in Table 24: HSI oscillator characteristics
Updated ‘V IL ’ and ‘V IH ’ in Table 35: I/O static characteristics
Added notes to Figure 26: Standard I/O input characteristics - CMOS
port, Figure 27: Standard I/O input characteristics - TTL port, Figure 28: 5
V tolerant I/O input characteristics - CMOS port and Figure 29: 5 V
tolerant I/O input characteristics - TTL port
Updated Figure 32: I2C bus AC waveforms and measurement circuit
Updated notes 2 and 3,removed note “the device must internally...” in
Table 40: I2C characteristics
Updated title of Table 41: SCL frequency (f PCLK1 = 36 MHz, V DD_I2C = 3.3
V)
Updated note 2. in Table 49: ADC accuracy
Updated Figure 53: UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra
fine pitch ball grid array package outline and Table 56: UFBGA100
mechanical data
Updated Figure 47: LFBGA100 outline and Table 53: LFBGA100
mechanical data
Updated Figure 60: TFBGA64 - 8 x 8 active ball array, 5 x 5 mm, 0.5 mm
pitch, package outline and Table 59: TFBGA64 - 8 x 8 active ball array, 5
x 5 mm, 0.5 mm pitch, package mechanical data
Table 64. Document revision history (continued)
Date Revision Changes

                                <!-- *113*/114 -->

05-Aug-2013 16
Updated the reference for ‘V ESD(CDM) ’ in Table 32: ESD absolute
maximum ratings
Corrected ‘tf(IO)out’ in Figure 30: I/O AC characteristics definition
Updated Table 52: UFQFPN48 mechanical data
21-Aug-2015 17
Updated Table 3: STM32F103xx family removing the note.
Updated Table 63: Ordering information scheme removing the note.
Updated Section 6: Package information and added Section: Marking of
engineering samples for all packages.
Updated I2C characteristics, added t SP parameter and note 4 in Table 40:
I2C characteristics.
Updated Figure 32: I2C bus AC waveforms and measurement circuit
swapping SCLL and SCLH.
Updated Figure 33: SPI timing diagram - slave mode and CPHA = 0.
Updated min/max value notes replacing ‘Guaranteed by design, not
tested in production” by “guaranteed by design”.
Updated min/max value notes replacing ‘based on characterization, not
tested in production” by “Guaranteed based on test during
characterization”.
Updated Table 19: Peripheral current consumption.
29-Mar-2022 18
Updated Table 5: Medium-density STM32F103xx pin definitions.
Updated Figure 37: ADC accuracy characteristics, Figure 38: Typical
connection diagram using the ADC and its footnotes.
Minor text edits across the whole document.
18-Sep-2023 19
Updated Features.
Updated Section 1: Introduction.
Updated Figure 11: Memory map.
Updated Table 22: HSE 4-16 MHz oscillator characteristics and Table 23:
LSE oscillator characteristics (f LSE = 32.768 kHz).
Updated Table 31: EMI characteristics for fHSE = 8 MHz and fHCLK = 48
MHz and created Table 32: EMI characteristics for fHSE = 8 MHz and
fHCLK = 72 MHz.
Updated Figure 33: SPI timing diagram - slave mode and CPHA = 0,
Figure 34: SPI timing diagram - slave mode and CPHA = 1, and
Figure 35: SPI timing diagram - master mode.
Updated Table 44: USB startup time.
Added Section 8: Important security notice.
Updated all packages in Section 6: Package information.
Table 64. Document revision history (continued)
Date Revision Changes

                                <!-- *114*/114 -->

IMPORTANT NOTICE – PLEASE READ CAREFULLY
STMicroelectronics NV and its subsidiaries (“ST”) reserve the right to make changes, corrections, enhancements, modifications, and
improvements to ST products and/or to this document at any time without notice. Purchasers should obtain the latest relevant information on
ST products before placing orders. ST products are sold pursuant to ST’s terms and conditions of sale in place at the time of order
acknowledgement.
Purchasers are solely responsible for the choice, selection, and use of ST products and ST assumes no liability for application assistance or
the design of Purchasers’ products.
No license, express or implied, to any intellectual property right is granted by ST herein.
Resale of ST products with provisions different from the information set forth herein shall void any warranty granted by ST for such product.
ST and the ST logo are trademarks of ST. For additional information about ST trademarks, please refer to www.st.com/trademarks. All other
product or service names are the property of their respective owners.
Information in this document supersedes and replaces information previously supplied in any prior versions of this document.
© 2023 STMicroelectronics – All rights reserved
