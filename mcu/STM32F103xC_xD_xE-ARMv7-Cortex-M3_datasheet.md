/STM32F103xC, STM32F103xD, STM32F103xE
======================================
https://www.st.com/en/microcontrollers-microprocessors/stm32f103ze.html

https://www.st.com/resource/en/datasheet/stm32f103ze.pdf

                          This is information on a product in full production.
                                        February 2015 DocID14611 Rev 10 1/136

                                        STM32F103xC, STM32F103xD, STM32F103xE
       High-density performance line ARM® -based 32-bit MCU with 256 to 512KB
              Flash, USB, CAN, 11 timers, 3 ADCs, 13 communication interfaces
                                                  Datasheet − production data

```sh
# curl -i -L https://www.st.com/en/microcontrollers-microprocessors/stm32f103ze.html | /c/opendocs/html2md.ts | clip
pwsh -c 'Get-Clipboard' | /c/opendocs/html2md.ts | clip
```

/Features
=========

*   • Core: ARM® 32-bit Cortex®-M3 CPU
    – 72 MHz maximum frequency, 1.25 DMIPS/MHz (Dhrystone 2.1) performance at 0 wait state memory access
    – Single-cycle multiplication and hardware division
*   • Memories
    – 256 to 512 Kbytes of Flash memory
    – up to 64 Kbytes of SRAM
    – Flexible static memory controller with 4 Chip Select. Supports Compact Flash, SRAM, PSRAM, NOR and NAND memories
    – LCD parallel interface, 8080/6800 modes
*   • Clock, reset and supply management
    – 2.0 to 3.6 V application supply and I/Os
    – POR, PDR, and programmable voltage detector (PVD)
    – 4-to-16 MHz crystal oscillator
    – Internal 8 MHz factory-trimmed RC
    – Internal 40 kHz RC with calibration
    – 32 kHz oscillator for RTC with calibration
*   • Low power
    – Sleep, Stop and Standby modes
    – V BAT supply for RTC and backup registers
*   • 3 × 12-bit, 1 µs A/D converters (up to 21 channels)
    – Conversion range: 0 to 3.6 V
    – Triple-sample and hold capability
    – Temperature sensor
*   • 2 × 12-bit D/A converters
*   • DMA: 12-channel DMA controller
    – Supported peripherals: timers, ADCs, DAC, SDIO, I2Ss, SPIs, I2Cs and USARTs
*   • Debug mode
    – Serial wire debug (SWD) & JTAG interfaces
    – Cortex®-M3 Embedded Trace Macrocell™
*   • Up to 112 fast I/O ports
    – 51/80/112 I/Os, all mappable on 16 external interrupt vectors and almost all 5 V-tolerant
*   • Up to 11 timers
    – Up to four 16-bit timers, each with up to 4 IC/OC/PWM or pulse counter and quadrature (incremental) encoder input
    – 2 × 16-bit motor control PWM timers with dead-time generation and emergency stop
    – 2 × watchdog timers (Independent and Window)
    – SysTick timer: a 24-bit downcounter
    – 2 × 16-bit basic timers to drive the DAC
*   • Up to 13 communication interfaces
    – Up to 2 × I2C interfaces (SMBus/PMBus)
    – Up to 5 USARTs (ISO 7816 interface, LIN, IrDA capability, modem control)
    – Up to 3 SPIs (18 Mbit/s), 2 with I2S interface multiplexed
    – CAN interface (2.0B Active)
    – USB 2.0 full speed interface
    – SDIO interface
*   • CRC calculation unit, 96-bit unique ID
*   • ECOPACK® packages


**Table 1**.  Device summary


|  Reference  |             Part number             |
|-------------|-------------------------------------|
| STM32F103xC | STM32F103RC STM32F103VC STM32F103ZC |
| STM32F103xD | STM32F103RD STM32F103VD STM32F103ZD |
| STM32F103xE | STM32F103RE STM32F103ZE STM32F103VE |


    LQFP64   10 × 10 mm,
    LQFP100  14 × 14 mm,
    LQFP144  20 × 20 mm
    LFBGA100 10 × 10 mm
    LFBGA144 10 × 10 mm
    WLCSP64

/Table of Contents
==================

* 1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P9]
* 2 Description  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P10]
*   2.1 Device overview  . . . . . . . . . . . . . . . . . . . . . . . . . . [P11]
*   2.2 Full compatibility throughout the family . . . . . . . . . . . . . . [P14]
*   2.3 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P15]
*   2.3.1 ARM® Cortex®-M3 core with embedded Flash and SRAM . . . . . . . [P15]
*   2.3.2 Embedded Flash memory  . . . . . . . . . . . . . . . . . . . . . . [P15]
*   2.3.3 CRC (cyclic redundancy check) calculation unit . . . . . . . . . . [P15]
*   2.3.4 Embedded SRAM  . . . . . . . . . . . . . . . . . . . . . . . . . . [P15]
*   2.3.5 FSMC (flexible static memory controller) . . . . . . . . . . . . . [P15]
*   2.3.6 LCD parallel interface . . . . . . . . . . . . . . . . . . . . . . [P16]
*   2.3.7 Nested vectored interrupt controller (NVIC)  . . . . . . . . . . . [P16]
*   2.3.8 External interrupt/event controller (EXTI) . . . . . . . . . . . . [P16]
*   2.3.9 Clocks and startup . . . . . . . . . . . . . . . . . . . . . . . . [P16]
*   2.3.10 Boot modes  . . . . . . . . . . . . . . . . . . . . . . . . . . . [P17]
*   2.3.11 Power supply schemes  . . . . . . . . . . . . . . . . . . . . . . [P17]
*   2.3.12 Power supply supervisor . . . . . . . . . . . . . . . . . . . . . [P17]
*   2.3.13 Voltage regulator . . . . . . . . . . . . . . . . . . . . . . . . [P17]
*   2.3.14 Low-power modes . . . . . . . . . . . . . . . . . . . . . . . . . [P18]
*   2.3.15 DMA . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P18]
*   2.3.16 RTC (real-time clock) and backup registers  . . . . . . . . . . . [P18]
*   2.3.17 Timers and watchdogs  . . . . . . . . . . . . . . . . . . . . . . [P19]
*   2.3.18 I²C bus . . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P21]
*   2.3.19 Universal synchronous/asynchronous receiver transmitters (USARTs) [P21]
*   2.3.20 Serial peripheral interface (SPI) . . . . . . . . . . . . . . . . [P21]
*   2.3.21 Inter-integrated sound (I2S)  . . . . . . . . . . . . . . . . . [P21]
*   2.3.22 SDIO  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P22]
*   2.3.23 Controller area network (CAN) . . . . . . . . . . . . . . . . . . [P22]
*   2.3.24 Universal serial bus (USB)  . . . . . . . . . . . . . . . . . . . [P22]
*   2.3.25 GPIOs (general-purpose inputs/outputs)  . . . . . . . . . . . . . [P22]
*   2.3.26 ADC (analog to digital converter) . . . . . . . . . . . . . . . . [P22]
*   2.3.27 DAC (digital-to-analog converter) . . . . . . . . . . . . . . . . [P23]
*   2.3.28 Temperature sensor  . . . . . . . . . . . . . . . . . . . . . . . [P24]
*   2.3.29 Serial wire JTAG debug port (SWJ-DP)  . . . . . . . . . . . . . . [P24]
*   2.3.30 Embedded Trace Macrocell™ . . . . . . . . . . . . . . . . . . . . [P24]
* 3 Pinouts and pin descriptions . . . . . . . . . . . . . . . . . . . . . [P25]
* 4 Memory mapping . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P39]
* 5 Electrical characteristics . . . . . . . . . . . . . . . . . . . . . . [P40]
*   5.1 Parameter conditions . . . . . . . . . . . . . . . . . . . . . . . . [P40]
*   5.1.1 Minimum and maximum values . . . . . . . . . . . . . . . . . . . . [P40]
*   5.1.2 Typical values . . . . . . . . . . . . . . . . . . . . . . . . . . [P40]
*   5.1.3 Typical curves . . . . . . . . . . . . . . . . . . . . . . . . . . [P40]
*   5.1.4 Loading capacitor  . . . . . . . . . . . . . . . . . . . . . . . . [P40]
*   5.1.5 Pin input voltage  . . . . . . . . . . . . . . . . . . . . . . . . [P40]
*   5.1.6 Power supply scheme  . . . . . . . . . . . . . . . . . . . . . . . [P41]
*   5.1.7 Current consumption measurement  . . . . . . . . . . . . . . . . . [P41]
*   5.2 Absolute maximum ratings . . . . . . . . . . . . . . . . . . . . . . [P42]
*   5.3 Operating conditions . . . . . . . . . . . . . . . . . . . . . . . . [P43]
*   5.3.1 General operating conditions . . . . . . . . . . . . . . . . . . . [P43]
*   5.3.2 Operating conditions at power-up / power-down  . . . . . . . . . . [P44]
*   5.3.3 Embedded reset and power control block characteristics . . . . . . [P44]
*   5.3.4 Embedded reference voltage . . . . . . . . . . . . . . . . . . . . [P45]
*   5.3.5 Supply current characteristics . . . . . . . . . . . . . . . . . . [P45]
*   5.3.6 External clock source characteristics  . . . . . . . . . . . . . . [P56]
*   5.3.7 Internal clock source characteristics  . . . . . . . . . . . . . . [P61]
*   5.3.8 PLL characteristics  . . . . . . . . . . . . . . . . . . . . . . . [P63]
*   5.3.9 Memory characteristics . . . . . . . . . . . . . . . . . . . . . . [P63]
*   5.3.10 FSMC characteristics  . . . . . . . . . . . . . . . . . . . . . . [P65]
*   5.3.11 EMC characteristics . . . . . . . . . . . . . . . . . . . . . . . [P84]
*   5.3.12 Absolute maximum ratings (electrical sensitivity) . . . . . . . . [P85]
*   5.3.13 I/O current injection characteristics . . . . . . . . . . . . . . [P86]
*   5.3.14 I/O port characteristics  . . . . . . . . . . . . . . . . . . . . [P87]
*   5.3.15 NRST pin characteristics  . . . . . . . . . . . . . . . . . . . . [P92]
*   5.3.16 TIM timer characteristics . . . . . . . . . . . . . . . . . . . . [P93]
*   5.3.17 Communications interfaces . . . . . . . . . . . . . . . . . . . . [P94]
*   5.3.18 CAN (controller area network) interface . . . . . . . . . . . . . [P103]
*   5.3.19 12-bit ADC characteristics  . . . . . . . . . . . . . . . . . . . [P104]
*   5.3.20 DAC electrical specifications . . . . . . . . . . . . . . . . . . [P109]
*   5.3.21 Temperature sensor characteristics  . . . . . . . . . . . . . . . [P111]
* 6 Package characteristics  . . . . . . . . . . . . . . . . . . . . . . . [P112]
*   6.1 Package mechanical data  . . . . . . . . . . . . . . . . . . . . . . [P112]
*   6.2 Thermal characteristics  . . . . . . . . . . . . . . . . . . . . . . [P126]
*   6.2.1 Reference document . . . . . . . . . . . . . . . . . . . . . . . . [P126]
*   6.2.2 Selecting the product temperature range  . . . . . . . . . . . . . [P127]
* 7 Part numbering . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P129]
* 8 Revision history . . . . . . . . . . . . . . . . . . . . . . . . . . . [P130]


//List of tables
-----------------

*   [Table 1]. Device summary  . . . . . . . . . . . . . . . . . . . . . . . . [P1]
*   [Table 2]. STM32F103xC, STM32F103xD and STM32F103xE features and peripheral counts [P11]
*   [Table 3]. STM32F103xx family  . . . . . . . . . . . . . . . . . . . . . . [P14]
*   [Table 4]. High-density timer feature comparison . . . . . . . . . . . . . [P19]
*   [Table 5]. High-density STM32F103xx pin definitions  . . . . . . . . . . . [P31]
*   [Table 6]. FSMC pin definition . . . . . . . . . . . . . . . . . . . . . . [P37]
*   [Table 7]. Voltage characteristics . . . . . . . . . . . . . . . . . . . . [P42]
*   [Table 8]. Current characteristics . . . . . . . . . . . . . . . . . . . . [P42]
*   [Table 9]. Thermal characteristics . . . . . . . . . . . . . . . . . . . . [P43]
*   [Table 10]. General operating conditions . . . . . . . . . . . . . . . . . [P43]
*   [Table 11]. Operating conditions at power-up / power-down  . . . . . . . . [P44]
*   [Table 12]. Embedded reset and power control block characteristics . . . . [P44]
*   [Table 13]. Embedded internal reference voltage  . . . . . . . . . . . . . [P45]
*   [Table 14]. Maximum current consumption in Run mode, code with data processing running from Flash [P46]
*   [Table 15]. Maximum current consumption in Run mode, code with data processing running from RAM [P46]
*   [Table 16]. Maximum current consumption in Sleep mode, code running from Flash or RAM [P48]
*   [Table 17]. Typical and maximum current consumptions in Stop and Standby modes [P49]
*   [Table 18]. Typical current consumption in Run mode, code with data processing running from Flash [P53]
*   [Table 19]. Typical current consumption in Sleep mode, code running from Flash or RAM [P54]
*   [Table 20]. Peripheral current consumption . . . . . . . . . . . . . . . . [P55]
*   [Table 21]. High-speed external user clock characteristics . . . . . . . . [P56]
*   [Table 22]. Low-speed external user clock characteristics  . . . . . . . . [P57]
*   [Table 23]. HSE 4-16 MHz oscillator characteristics  . . . . . . . . . . . [P59]
*   [Table 24]. LSE oscillator characteristics (f LSE = 32.768 kHz)  . . . . . [P60]
*   [Table 25]. HSI oscillator characteristics . . . . . . . . . . . . . . . . [P61]
*   [Table 26]. LSI oscillator characteristics . . . . . . . . . . . . . . . . [P62]
*   [Table 27]. Low-power mode wakeup timings  . . . . . . . . . . . . . . . . [P62]
*   [Table 28]. PLL characteristics  . . . . . . . . . . . . . . . . . . . . . [P63]
*   [Table 29]. Flash memory characteristics . . . . . . . . . . . . . . . . . [P63]
*   [Table 30]. Flash memory endurance and data retention  . . . . . . . . . . [P64]
*   [Table 31]. Asynchronous non-multiplexed SRAM/PSRAM/NOR read timings . . . [P66]
*   [Table 32]. Asynchronous non-multiplexed SRAM/PSRAM/NOR write timings  . . [P67]
*   [Table 33]. Asynchronous multiplexed PSRAM/NOR read timings  . . . . . . . [P68]
*   [Table 34]. Asynchronous multiplexed PSRAM/NOR write timings . . . . . . . [P69]
*   [Table 35]. Synchronous multiplexed NOR/PSRAM read timings . . . . . . . . [P71]
*   [Table 36]. Synchronous multiplexed PSRAM write timings  . . . . . . . . . [P73]
*   [Table 37]. Synchronous non-multiplexed NOR/PSRAM read timings . . . . . . [P74]
*   [Table 38]. Synchronous non-multiplexed PSRAM write timings  . . . . . . . [P75]
*   [Table 39]. Switching characteristics for PC Card/CF read and write cycles [P80]
*   [Table 40]. Switching characteristics for NAND Flash read and write cycles [P83]
*   [Table 41]. EMS characteristics  . . . . . . . . . . . . . . . . . . . . . [P84]
*   [Table 42]. EMI characteristics  . . . . . . . . . . . . . . . . . . . . . [P85]
*   [Table 43]. ESD absolute maximum ratings . . . . . . . . . . . . . . . . . [P85]
*   [Table 44]. Electrical sensitivities . . . . . . . . . . . . . . . . . . . [P86]
*   [Table 45]. I/O current injection susceptibility . . . . . . . . . . . . . [P86]
*   [Table 46]. I/O static characteristics . . . . . . . . . . . . . . . . . . [P87]
*   [Table 47]. Output voltage characteristics . . . . . . . . . . . . . . . . [P89]
*   [Table 48]. I/O AC characteristics . . . . . . . . . . . . . . . . . . . . [P91]
*   [Table 49]. NRST pin characteristics . . . . . . . . . . . . . . . . . . . [P92]
*   [Table 50]. TIMx characteristics . . . . . . . . . . . . . . . . . . . . . [P93]
*   [Table 51]. I2C characteristics  . . . . . . . . . . . . . . . . . . . . [P94]
*   [Table 52]. SCL frequency (f PCLK1 = 36 MHz.,V DD = 3.3 V) . . . . . . . . [P95]
*   [Table 53]. SPI characteristics  . . . . . . . . . . . . . . . . . . . . . [P96]
*   [Table 54]. I2S characteristics  . . . . . . . . . . . . . . . . . . . . [P99]
*   [Table 55]. SD / MMC characteristics . . . . . . . . . . . . . . . . . . . [P102]
*   [Table 56]. USB startup time . . . . . . . . . . . . . . . . . . . . . . . [P102]
*   [Table 57]. USB DC electrical characteristics  . . . . . . . . . . . . . . [P103]
*   [Table 58]. USB: full-speed electrical characteristics . . . . . . . . . . [P103]
*   [Table 59]. ADC characteristics  . . . . . . . . . . . . . . . . . . . . . [P104]
*   [Table 60]. R AIN max for f ADC = 14 MHz . . . . . . . . . . . . . . . . . [P105]
*   [Table 61]. ADC accuracy - limited test conditions . . . . . . . . . . . . [P105]
*   [Table 62]. ADC accuracy . . . . . . . . . . . . . . . . . . . . . . . . . [P106]
*   [Table 63]. DAC characteristics  . . . . . . . . . . . . . . . . . . . . . [P109]
*   [Table 64]. TS characteristics . . . . . . . . . . . . . . . . . . . . . . [P111]
*   [Table 65]. Recommended PCB design rules (0.80/0.75 mm pitch BGA)  . . . . [P112]
*   [Table 66]. LFBGA144 – 144-ball low profile fine pitch ball grid array, 10 x 10 mm, 0.8 mm pitch, package data [P113]
*   [Table 67]. LFBGA100 - 10 x 10 mm low profile fine pitch ball grid array package mechanical data [P114]
*   [Table 68]. WLCSP, 64-ball 4.466 × 4.395 mm, 0.500 mm pitch, wafer-level chip-scale package mechanical data [P115]
*   [Table 69]. Recommended PCB design rules (0.5mm pitch BGA) . . . . . . . . [P116]
*   [Table 70]. LQFP144, 20 x 20 mm, 144-pin low-profile quad flat package mechanical data [P117]
*   [Table 71]. LQPF100 – 14 x 14 mm 100-pin low-profile quad flat package mechanical data [P121]
*   [Table 72]. LQFP64 – 10 x 10 mm 64 pin low-profile quad flat package mechanical data [P123]
*   [Table 73]. Package thermal characteristics  . . . . . . . . . . . . . . . [P126]
*   [Table 74]. Ordering information scheme  . . . . . . . . . . . . . . . . . [P129]

/List of figures
----------------

*   [Figure 1]. STM32F103xC, STM32F103xD and STM32F103xE performance line block diagram [P12]
*   [Figure 2]. Clock tree . . . . . . . . . . . . . . . . . . . . . . . . . . [P13]
*   [Figure 3]. STM32F103xC and STM32F103xE performance line BGA144 ballout  . [P25]
*   [Figure 4]. STM32F103xC and STM32F103xE performance line BGA100 ballout  . [P26]
*   [Figure 5]. STM32F103xC and STM32F103xE performance line LQFP144 pinout  . [P27]
*   [Figure 6]. STM32F103xC and STM32F103xE performance line LQFP100 pinout  . [P28]
*   [Figure 7]. STM32F103xC and STM32F103xE performance line LQFP64 pinout . . [P29]
*   [Figure 8]. STM32F103xC and STM32F103xE performance line WLCSP64 ballout, ball side [P30]
*   [Figure 9]. Memory map . . . . . . . . . . . . . . . . . . . . . . . . . . [P39]
*   [Figure 10]. Pin loading conditions  . . . . . . . . . . . . . . . . . . . [P40]
*   [Figure 11]. Pin input voltage . . . . . . . . . . . . . . . . . . . . . . [P40]
*   [Figure 12]. Power supply scheme . . . . . . . . . . . . . . . . . . . . . [P41]
*   [Figure 13]. Current consumption measurement scheme  . . . . . . . . . . . [P41]
*   [Figure 14]. Typical current consumption in Run mode versus frequency (at 3.6 V) - code with data processing running from RAM, peripherals enabled [P47]
*   [Figure 15]. Typical current consumption in Run mode versus frequency (at 3.6 V)- code with data processing running from RAM, peripherals disabled [P47]
*   [Figure 16]. Typical current consumption on V BAT with RTC on vs. temperature at different V BAT values [P49]
*   [Figure 17]. Typical current consumption in Stop mode with regulator in run mode versus temperature at different V DD values [P50]
*   [Figure 18]. Typical current consumption in Stop mode with regulator in low-power mode versus temperature at different V DD values [P51]
*   [Figure 19]. Typical current consumption in Standby mode versus temperature at different V DD values [P52]
*   [Figure 20]. High-speed external clock source AC timing diagram  . . . . . [P57]
*   [Figure 21]. Low-speed external clock source AC timing diagram . . . . . . [P58]
*   [Figure 22]. Typical application with an 8 MHz crystal . . . . . . . . . . [P59]
*   [Figure 23]. Typical application with a 32.768 kHz crystal . . . . . . . . [P61]
*   [Figure 24]. Asynchronous non-multiplexed SRAM/PSRAM/NOR read waveforms  . [P65]
*   [Figure 25]. Asynchronous non-multiplexed SRAM/PSRAM/NOR write waveforms . [P66]
*   [Figure 26]. Asynchronous multiplexed PSRAM/NOR read waveforms . . . . . . [P67]
*   [Figure 27]. Asynchronous multiplexed PSRAM/NOR write waveforms  . . . . . [P68]
*   [Figure 28]. Synchronous multiplexed NOR/PSRAM read timings  . . . . . . . [P70]
*   [Figure 29]. Synchronous multiplexed PSRAM write timings . . . . . . . . . [P72]
*   [Figure 30]. Synchronous non-multiplexed NOR/PSRAM read timings  . . . . . [P74]
*   [Figure 31]. Synchronous non-multiplexed PSRAM write timings . . . . . . . [P75]
*   [Figure 32]. PC Card/CompactFlash controller waveforms for common memory read access [P76]
*   [Figure 33]. PC Card/CompactFlash controller waveforms for common memory write access [P77]
*   [Figure 34]. PC Card/CompactFlash controller waveforms for attribute memory read access [P78]
*   [Figure 35]. PC Card/CompactFlash controller waveforms for attribute memory write access [P79]
*   [Figure 36]. PC Card/CompactFlash controller waveforms for I/O space read access [P79]
*   [Figure 37]. PC Card/CompactFlash controller waveforms for I/O space write access [P80]
*   [Figure 38]. NAND controller waveforms for read access . . . . . . . . . . [P82]
*   [Figure 39]. NAND controller waveforms for write access  . . . . . . . . . [P82]
*   [Figure 40]. NAND controller waveforms for common memory read access . . . [P82]
*   [Figure 41]. NAND controller waveforms for common memory write access  . . [P83]
*   [Figure 42]. Standard I/O input characteristics - CMOS port  . . . . . . . [P88]
*   [Figure 43]. Standard I/O input characteristics - TTL port . . . . . . . . [P88]
*   [Figure 44]. 5 V tolerant I/O input characteristics - CMOS port  . . . . . [P88]
*   [Figure 45]. 5 V tolerant I/O input characteristics - TTL port . . . . . . [P89]
*   [Figure 46]. I/O AC characteristics definition . . . . . . . . . . . . . . [P92]
*   [Figure 47]. Recommended NRST pin protection . . . . . . . . . . . . . . . [P92]
*   [Figure 48]. I2C bus AC waveforms and measurement circuit  . . . . . . . [P95]
*   [Figure 49]. SPI timing diagram - slave mode and CPHA = 0  . . . . . . . . [P97]
*   [Figure 50]. SPI timing diagram - slave mode and CPHA = 1 (1)  . . . . . . [P97]
*   [Figure 51]. SPI timing diagram - master mode (1)  . . . . . . . . . . . . [P98]
*   [Figure 52]. I2S slave timing diagram (Philips protocol) (1) . . . . . . [P100]
*   [Figure 53]. I2S master timing diagram (Philips protocol) (1)  . . . . . [P100]
*   [Figure 54]. SDIO high-speed mode  . . . . . . . . . . . . . . . . . . . . [P101]
*   [Figure 55]. SD default mode . . . . . . . . . . . . . . . . . . . . . . . [P101]
*   [Figure 56]. USB timings: definition of data signal rise and fall time . . [P103]
*   [Figure 57]. ADC accuracy characteristics  . . . . . . . . . . . . . . . . [P106]
*   [Figure 58]. Typical connection diagram using the ADC  . . . . . . . . . . [P107]
*   [Figure 59]. Power supply and reference decoupling (V REF+ not connected to V DDA ) [P107]
*   [Figure 60]. Power supply and reference decoupling (V REF+ connected to V DDA ) [P108]
*   [Figure 61]. 12-bit buffered /non-buffered DAC . . . . . . . . . . . . . . [P110]
*   [Figure 62]. BGA pad footprint . . . . . . . . . . . . . . . . . . . . . . [P112]
*   [Figure 63]. LFBGA144 – 144-ball low profile fine pitch ball grid array, 10 x 10 mm, 0.8 mm pitch, package outline [P113]
*   [Figure 64]. LFBGA100 - 10 x 10 mm low profile fine pitch ball grid array package outline [P114]
*   [Figure 65]. WLCSP, 64-ball 4.466 × 4.395 mm, 0.500 mm pitch, wafer-level chip-scale package outline [P115]
*   [Figure 66]. BGA pad footprint . . . . . . . . . . . . . . . . . . . . . . [P116]
*   [Figure 67]. LQFP144, 20 x 20 mm, 144-pin low-profile quad flat package outline [P117]
*   [Figure 68]. LQFP144 recommended footprint . . . . . . . . . . . . . . . . [P118]
*   [Figure 69]. LQFP144 marking example (package top view)  . . . . . . . . . [P119]
*   [Figure 70]. LFP100 – 14 x 14 mm 100 pin low-profile quad flat package outline [P120]
*   [Figure 71]. LQFP100 recommended footprint . . . . . . . . . . . . . . . . [P121]
*   [Figure 72]. LQFP100 marking example (package top view)  . . . . . . . . . [P122]
*   [Figure 73]. LFP64 – 10 x 10 mm 64 pin low-profile quad flat package outline [P123]
*   [Figure 74]. LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat recommended footprint [P124]
*   [Figure 75]. LQFP64 marking example (package top view) . . . . . . . . . . [P125]
*   [Figure 76]. LQFP100 P_D max vs. T_A . . . . . . . . . . . . . . . . . . . [P128]



/1 Introduction
===============

This datasheet provides the ordering information and mechanical device characteristics of
the STM32F103xC, STM32F103xD and STM32F103xE high-density performance line
microcontrollers. For more details on the whole STMicroelectronics STM32F103xx family,
please refer to Section 2.2: Full compatibility throughout the family.
The high-density STM32F103xx datasheet should be read in conjunction with the
STM32F10xxx reference manual.

For information on programming, erasing and protection of the internal Flash memory
please refer to the STM32F10xxx Flash programming manual.

The reference and Flash programming manuals are both available from the
STMicroelectronics website www.st.com.

For information on the Cortex®-M3 core please refer to the Cortex®-M3 Technical Reference
Manual, available from the www.arm.com website at the following address:
http://infocenter.arm.com.



<!-- *P10*/136 -->
[P10]: #P10
<a id="P10"></a>


/2 Description
==============

The STM32F103xC, STM32F103xD and STM32F103xE performance line family
incorporates the high-performance ARM® Cortex®-M3 32-bit RISC core operating at a
72 MHz frequency, high-speed embedded memories (Flash memory up to 512 Kbytes and
SRAM up to 64 Kbytes), and an extensive range of enhanced I/Os and peripherals
connected to two APB buses. All devices offer three 12-bit ADCs, four general-purpose 
16-bit timers plus two PWM timers, as well as standard and advanced communication
interfaces: up to two I2Cs, three SPIs, two I2Ss, one SDIO, five USARTs, an USB and a
CAN.

The STM32F103xx high-density performance line family operates in the –40 to +105 °C
temperature range, from a 2.0 to 3.6 V power supply. A comprehensive set of power-saving
mode allows the design of low-power applications.

These features make the STM32F103xx high-density performance line microcontroller
family suitable for a wide range of applications such as motor drives, application control,
medical and handheld equipment, PC and gaming peripherals, GPS platforms, industrial
applications, PLCs, inverters, printers, scanners, alarm systems video intercom, and HVAC.

<!-- *P11*/136 -->
[P11]: #P11
<a id="P11"></a>



//2.1 Device overview
---------------------

The STM32F103xx high-density performance line family offers devices in six different
package types: from 64 pins to 144 pins. Depending on the device chosen, different sets of
peripherals are included, the description below gives an overview of the complete range of
peripherals proposed in this family.
Figure 1 shows the general block diagram of the device family.


**Table 2**. STM32F103xC, STM32F103xD and STM32F103xE features

and peripheral counts
Peripherals STM32F103Rx STM32F103Vx STM32F103Zx
Flash memory in Kbytes 256 384 512 256 384 512 256 384 512
SRAM in Kbytes 48 64 (1)
1. 64 KB RAM for 256 KB Flash are available on devices delivered in CSP packages only.
48 64 48 64
FSMC No Yes (2)
2. For the LQFP100 and BGA100 packages, only FSMC Bank1 and Bank2 are available. Bank1 can only
support a multiplexed NOR/PSRAM memory using the NE1 Chip Select. Bank2 can only support a 16- or
8-bit NAND Flash memory using the NCE2 Chip Select. The interrupt line cannot be used since Port G is
not available in this package.
Yes
Timers
General-purpose 4
Advanced-control 2
Basic 2
Comm
SPI(I2S) (3)
3. The SPI2 and SPI3 interfaces give the flexibility to work in an exclusive way in either the SPI mode or the
I2S audio mode.
3(2)
I2C 2
USART 5
USB 1
CAN 1
SDIO 1
GPIOs 51 80 112
12-bit ADC
Number of channels
3
16
3
16
3
21
12-bit DAC
Number of channels
2
2
CPU frequency 72 MHz
Operating voltage 2.0 to 3.6 V
Operating temperatures
Ambient temperatures: –40 to +85 °C /–40 to +105 °C (see Table 10)
Junction temperature: –40 to + 125 °C (see Table 10)
Package LQFP64, WLCSP64 LQFP100, BGA100 LQFP144, BGA144

<!-- *P12*/136 -->
[P12]: #P12
<a id="P12"></a>


**Figure 1**. STM32F103xC, STM32F103xD and STM32F103xE performance line block diagram

1. T A = –40 °C to +85 °C (suffix 6, see Table 74) or –40 °C to +105 °C (suffix 7, see Table 74), junction temperature up to
105 °C or 125 °C, respectively.
2. AF = alternate function on I/O port pin.9
PA[15:0]
EXT.IT
112AF
AHB2
2x(8x16b it)
WKUP
F max : 48/72 MHz
V SS
I2C2
GP DMA1
TIM2
TIM3
XTAL 32kHz
Flash 512 Kbytes
V DD
Backup interface
TIM4
Bus Matrix
64 bit
RTC
RC 8 MHz
Cortex-M3 CPU
Dbus
obl Flash
interface
USART2
SPI2 / I2S2
Backup
reg
TIM1
I2C1
RX, TX, CTS, RTS,
USART3
RC 40 kHz
Standby
IWDG
@ V BAT
POR / PDR
@V DDA
V BAT =1.8 V to 3.6 V
CK as AF
RX, TX, CTS, RTS,
CK as AF
NVIC
SPI1
interface
@V DDA
PVD
Int
APB2
AWU
TIM8

2x(8x16b it)
SPI3 / I2S3

UART4
RX,TX as AF
UART5
RX,TX as AF
TIM5
PLL
@V DDA
FSMC
DAC_OUT1 as AF
DAC_OUT2 as AF
SRAM
64 KB
GP DMA2
TIM6
TIM7
NJTRST
JTDI
JTCK/SWCLK
JTMS/SWDIO
JTDO
as AF
A[25:0]
D[15:0]
CLK
NOE
NWE
NE[4:1]
NBL[1:0]
NWAIT
NL (or NADV)
as AF
7 channels
5 channels
GPIO port A
GPIO port B
GPIO port C
GPIO port D
GPIO port E
GPIO port F
GPIO port G
USART1
Temp. sensor
12-bit ADC1
12-bit ADC2
12-bit ADC3
IF
IF
IF
PB[15:0]
PC[15:0]
PD[15:0]
PE[15:0]
PF[15:0]
PG[15:0]
4 channels
3 compl. channels
BKIN, ETR as AF
4 channels
3 compl. channels
BKIN, ETR as AF
MOSI, MISO,
SCK, NSS as AF
RX, TX, CTS,
RTS, CK as AF
8 ADC123_INs
common to the 3 ADCs
8 ADC12_INs common
to ADC1 & ADC2
5 ADC3_INs on ADC3
V REF+
V REF–
@ V DDA
APB2: Fmax = 48/72 MHz
APB1
Trace
controller
Pbus
Ibus
System
Reset &
Clock
control
PCLK1
PCLK2
HCLK
FCLK
Power
Volt. reg.
3.3 V to 1.8 V
Supply
supervision
@V DD
POR
Reset
NRST
V DDA
V SSA
OSC_IN
OSC_OUT
@V DD
XTAL OSC
4-16 MHz
OSC32_IN
OSC32_OUT
TAMPER-RTC/
ALARM/SECOND OUT
4 channels, ETR as AF
4 channels, ETR as AF
4 channels, ETR as AF
4 channels as AF
MOSI/SD, MISO
SCK/CK, MCK, NSS/WS as AF
MOSI/SD, MISO
SCK/CK, MCK, NSS/WS as AF
SCL, SDA, SMBA as AF
SCL, SDA, SMBA as AF
bxCAN device
USB 2.0 FS
device
USBDP/CAN_TX
USBDM/CAN_RX
SRAM 512 B
WWDG
ai14666f
APB1: F max = 24/36 MHz
TRACECLK
TRACED[0:3]
as AS
SW/JTAG
TPIU
Trace/trig
SDIO
D[7:0]
CMD
CK as AF
AHB: Fmax = 48/72 MHz
AHB2
12bit DAC1 IF IF
IF
12bit DAC 2

<!-- *P13*/136 -->
[P13]: #P13
<a id="P13"></a>



**Figure 2**. Clock tree

1. When the HSI is used as a PLL clock input, the maximum system clock frequency that can be achieved is
64 MHz.
2. For the USB function to be available, both HSE and PLL must be enabled, with the USBCLK at 48 MHz.
3. To have an ADC conversion time of 1 µs, APB2 must be at 14 MHz, 28 MHz or 56 MHz.
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
HSE = High Speed External clock signal
LSE = Low Speed External clock signal
LSI = Low Speed Internal clock signal
HSI = High Speed Internal clock signal
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
USB
Prescaler
/1, 1.5
to ADC1, 2 or 3
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
Enable (20 bits)
Enable (6 bits)
Peripheral Clock
APB2
Prescaler
/1, 2, 4, 8, 16
PCLK2
TIM1 & 8 timers
to TIM1 and TIM8
peripherals to APB2
Peripheral Clock
Enable (15 bits)
Enable (2 bit)
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
Enable (4 bits)
SYSCLK
max
RTCCLK
RTCSEL[1:0]
TIMxCLK
TIMXCLK
IWDGCLK
SYSCLK
FCLK Cortex
free running clock
/2
TIM2,3,4,5,6,7
to TIM2,3,4,5,6 and 7
To SDIO AHB interface
Peripheral clock
enable
HCLK/2
to FSMC
FSMCCLK
to SDIO
Peripheral clock
enable
Peripheral clock
enable
to I2S3
to I2S2
Peripheral clock
enable
Peripheral clock
enable
I2S3CLK
I2S2CLK
SDIOCLK
ai14752b
If (APB1 prescaler =1) x1
else x2
If (APB2 prescaler =1) x1
else x2
FLITFCLK
to Flash programming interface

<!-- *P14*/136 -->
[P14]: #P14
<a id="P14"></a>


//2.2 Full compatibility throughout the family
----------------------------------------------

The STM32F103xx is a complete family whose members are fully pin-to-pin, software and
feature compatible. In the reference manual, the STM32F103x4 and STM32F103x6 are
identified as low-density devices, the STM32F103x8 and STM32F103xB are referred to as
medium-density devices and the STM32F103xC, STM32F103xD and STM32F103xE are
referred to as high-density devices.
Low-density and high-density devices are an extension of the STM32F103x8/B medium-
density devices, they are specified in the STM32F103x4/6 and STM32F103xC/D/E
datasheets, respectively. Low-density devices feature lower Flash memory and RAM
capacities, less timers and peripherals. High-density devices have higher Flash memory
and RAM capacities, and additional peripherals like SDIO, FSMC, I2S and DAC while
remaining fully compatible with the other members of the family.
The STM32F103x4, STM32F103x6, STM32F103xC, STM32F103xD and STM32F103xE
are a drop-in replacement for the STM32F103x8/B devices, allowing the user to try different
memory densities and providing a greater degree of freedom during the development cycle.
Moreover, the STM32F103xx performance line family is fully compatible with all existing
STM32F101xx access line and STM32F102xx USB access line devices.


**Table 3**. STM32F103xx family

Pinout
Low-density devices Medium-density devices High-density devices
16 KB
Flash
32 KB
Flash (1)
1. For orderable part numbers that do not show the A internal code after the temperature range code (6 or 7),
the reference datasheet for electrical characteristics is that of the STM32F103x8/B medium-density
devices.
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
6 KB RAM 10 KB RAM 20 KB RAM 20 KB RAM 48 RAM 64 KB RAM 64 KB RAM
144 5 × USARTs
4 × 16-bit timers, 2 × basic timers
3 × SPIs, 2 × I2Ss, 2 × I2Cs
USB, CAN, 2 × PWM timers
3 × ADCs, 2 × DACs, 1 × SDIO
FSMC (100- and 144-pin packages (2) )
2. Ports F and G are not available in devices delivered in 100-pin packages.
100
3 × USARTs
3 × 16-bit timers
2 × SPIs, 2 × I2Cs, USB,
CAN, 1 × PWM timer
2 × ADCs
64
2 × USARTs
2 × 16-bit timers
1 × SPI, 1 × I2C, USB,
CAN, 1 × PWM timer
2 × ADCs
48
36

<!-- *P15*/136 -->
[P15]: #P15
<a id="P15"></a>



//2.3 Overview
--------------


//2.3.1 ARM® Cortex®-M3 core with embedded Flash and SRAM
------------------------------------------------------------

The ARM Cortex®-M3 processor is the latest generation of ARM processors for embedded
systems. It has been developed to provide a low-cost platform that meets the needs of MCU
implementation, with a reduced pin count and low-power consumption, while delivering
outstanding computational performance and an advanced system response to interrupts.
The ARM Cortex®-M3 32-bit RISC processor features exceptional code-efficiency,
delivering the high-performance expected from an ARM core in the memory size usually
associated with 8- and 16-bit devices.
With its embedded ARM core, STM32F103xC, STM32F103xD and STM32F103xE
performance line family is compatible with all ARM tools and software.
Figure 1 shows the general block diagram of the device family.

//2.3.2 Embedded Flash memory
-----------------------------

Up to 512 Kbytes of embedded Flash is available for storing programs and data.

//2.3.3 CRC (cyclic redundancy check) calculation unit
------------------------------------------------------

The CRC (cyclic redundancy check) calculation unit is used to get a CRC code from a 32-bit
data word and a fixed generator polynomial.
Among other applications, CRC-based techniques are used to verify data transmission or
storage integrity. In the scope of the EN/IEC 60335-1 standard, they offer a means of
verifying the Flash memory integrity. The CRC calculation unit helps compute a signature of
the software during runtime, to be compared with a reference signature generated at link-
time and stored at a given memory location.

//2.3.4 Embedded SRAM
---------------------

Up to 64 Kbytes of embedded SRAM accessed (read/write) at CPU clock speed with 0 wait
states.

//2.3.5 FSMC (flexible static memory controller)
------------------------------------------------

The FSMC is embedded in the STM32F103xC, STM32F103xD and STM32F103xE
performance line family. It has four Chip Select outputs supporting the following modes: PC
Card/Compact Flash, SRAM, PSRAM, NOR and NAND.
Functionality overview:
● The three FSMC interrupt lines are ORed in order to be connected to the NVIC
● Write FIFO
● Code execution from external memory except for NAND Flash and PC Card
● The targeted frequency, f CLK , is HCLK/2, so external access is at 36 MHz when HCLK
is at 72 MHz and external access is at 24 MHz when HCLK is at 48 MHz

<!-- *P16*/136 -->
[P16]: #P16
<a id="P16"></a>


//2.3.6 LCD parallel interface
------------------------------

The FSMC can be configured to interface seamlessly with most graphic LCD controllers. It
supports the Intel 8080 and Motorola 6800 modes, and is flexible enough to adapt to
specific LCD interfaces. This LCD parallel interface capability makes it easy to build cost-
effective graphic applications using LCD modules with embedded controllers or high-
performance solutions using external controllers with dedicated acceleration.

//2.3.7 Nested vectored interrupt controller (NVIC)
---------------------------------------------------

The STM32F103xC, STM32F103xD and STM32F103xE performance line embeds a nested
vectored interrupt controller able to handle up to 60 maskable interrupt channels (not
including the 16 interrupt lines of Cortex®-M3) and 16 priority levels.
● Closely coupled NVIC gives low latency interrupt processing
● Interrupt entry vector table address passed directly to the core
● Closely coupled NVIC core interface
● Allows early processing of interrupts
● Processing of late arriving higher priority interrupts
● Support for tail-chaining
● Processor state automatically saved
● Interrupt entry restored on interrupt exit with no instruction overhead
This hardware block provides flexible interrupt management features with minimal interrupt
latency.

//2.3.8 External interrupt/event controller (EXTI)
--------------------------------------------------

The external interrupt/event controller consists of 19 edge detector lines used to generate
interrupt/event requests. Each line can be independently configured to select the trigger
event (rising edge, falling edge, both) and can be masked independently. A pending register
maintains the status of the interrupt requests. The EXTI can detect an external line with a
pulse width shorter than the Internal APB2 clock period. Up to 112 GPIOs can be connected
to the 16 external interrupt lines.

//2.3.9 Clocks and startup
--------------------------

System clock selection is performed on startup, however the internal RC 8 MHz oscillator is
selected as default CPU clock on reset. An external 4-16 MHz clock can be selected, in
which case it is monitored for failure. If failure is detected, the system automatically switches
back to the internal RC oscillator. A software interrupt is generated if enabled. Similarly, full
interrupt management of the PLL clock entry is available when necessary (for example with
failure of an indirectly used external oscillator).
Several prescalers allow the configuration of the AHB frequency, the high speed APB
(APB2) and the low speed APB (APB1) domains. The maximum frequency of the AHB and
the high speed APB domains is 72 MHz. The maximum allowed frequency of the low speed
APB domain is 36 MHz. See Figure 2 for details on the clock tree.

<!-- *P17*/136 -->
[P17]: #P17
<a id="P17"></a>



//2.3.10 Boot modes
-------------------

At startup, boot pins are used to select one of three boot options:
● Boot from user Flash: you have an option to boot from any of two memory banks. By
default, boot from Flash memory bank 1 is selected. You can choose to boot from Flash
memory bank 2 by setting a bit in the option bytes.
● Boot from system memory
● Boot from embedded SRAM
The boot loader is located in system memory. It is used to reprogram the Flash memory by
using USART1.

//2.3.11 Power supply schemes
-----------------------------

● V DD = 2.0 to 3.6 V: external power supply for I/Os and the internal regulator.
Provided externally through V DD pins.
● V SSA , V DDA = 2.0 to 3.6 V: external analog power supplies for ADC, DAC, Reset
blocks, RCs and PLL (minimum voltage to be applied to VDDA is 2.4 V when the ADC
or DAC is used). V DDA and V SSA must be connected to V DD and V SS , respectively.
● V BAT = 1.8 to 3.6 V: power supply for RTC, external clock 32 kHz oscillator and backup
registers (through power switch) when V DD is not present.
For more details on how to connect power pins, refer to Figure 12: Power supply scheme.

//2.3.12 Power supply supervisor
--------------------------------

The device has an integrated power-on reset (POR)/power-down reset (PDR) circuitry. It is
always active, and ensures proper operation starting from/down to 2 V. The device remains
in reset mode when V DD is below a specified threshold, V POR/PDR , without the need for an
external reset circuit.
The device features an embedded programmable voltage detector (PVD) that monitors the
V DD /V DDA power supply and compares it to the V PVD threshold. An interrupt can be
generated when V DD /V DDA drops below the V PVD threshold and/or when V DD /V DDA is
higher than the V PVD threshold. The interrupt service routine can then generate a warning
message and/or put the MCU into a safe state. The PVD is enabled by software. Refer to
Table 12: Embedded reset and power control block characteristics for the values of
V POR/PDR and V PVD .

//2.3.13 Voltage regulator
--------------------------

The regulator has three operation modes: main (MR), low power (LPR) and power down.
● MR is used in the nominal regulation mode (Run)
● LPR is used in the Stop modes.
● Power down is used in Standby mode: the regulator output is in high impedance: the
kernel circuitry is powered down, inducing zero consumption (but the contents of the
registers and SRAM are lost)
This regulator is always enabled after reset. It is disabled in Standby mode.

<!-- *P18*/136 -->
[P18]: #P18
<a id="P18"></a>


//2.3.14 Low-power modes
------------------------

The STM32F103xC, STM32F103xD and STM32F103xE performance line supports three
low-power modes to achieve the best compromise between low power consumption, short
startup time and available wakeup sources:
● Sleep mode
In Sleep mode, only the CPU is stopped. All peripherals continue to operate and can
wake up the CPU when an interrupt/event occurs.
● Stop mode
Stop mode achieves the lowest power consumption while retaining the content of
SRAM and registers. All clocks in the 1.8 V domain are stopped, the PLL, the HSI RC
and the HSE crystal oscillators are disabled. The voltage regulator can also be put
either in normal or in low-power mode.
The device can be woken up from Stop mode by any of the EXTI line. The EXTI line
source can be one of the 16 external lines, the PVD output, the RTC alarm or the USB
wakeup.
● Standby mode
The Standby mode is used to achieve the lowest power consumption. The internal
voltage regulator is switched off so that the entire 1.8 V domain is powered off. The
PLL, the HSI RC and the HSE crystal oscillators are also switched off. After entering
Standby mode, SRAM and register contents are lost except for registers in the Backup
domain and Standby circuitry.
The device exits Standby mode when an external reset (NRST pin), an IWDG reset, a
rising edge on the WKUP pin, or an RTC alarm occurs.
Note: The RTC, the IWDG, and the corresponding clock sources are not stopped by entering Stop
or Standby mode.

//2.3.15 DMA
------------

The flexible 12-channel general-purpose DMAs (7 channels for DMA1 and 5 channels for
DMA2) are able to manage memory-to-memory, peripheral-to-memory and memory-to-
peripheral transfers. The two DMA controllers support circular buffer management,
removing the need for user code intervention when the controller reaches the end of the
buffer.
Each channel is connected to dedicated hardware DMA requests, with support for software
trigger on each channel. Configuration is made by software and transfer sizes between
source and destination are independent.
The DMA can be used with the main peripherals: SPI, I2C, USART, general-purpose, basic
and advanced-control timers TIMx, DAC, I2S, SDIO and ADC.

//2.3.16 RTC (real-time clock) and backup registers
---------------------------------------------------

The RTC and the backup registers are supplied through a switch that takes power either on
V DD supply when present or through the V BAT pin. The backup registers are forty-two 16-bit
registers used to store 84 bytes of user application data when V DD power is not present.
They are not reset by a system or power reset, and they are not reset when the device
wakes up from the Standby mode.
The real-time clock provides a set of continuously running counters which can be used with
suitable software to provide a clock calendar function, and provides an alarm interrupt and a

<!-- *P19*/136 -->
[P19]: #P19
<a id="P19"></a>


periodic interrupt. It is clocked by a 32.768 kHz external crystal, resonator or oscillator, the
internal low power RC oscillator or the high-speed external clock divided by 128. The
internal low-speed RC has a typical frequency of 40 kHz. The RTC can be calibrated using
an external 512 Hz output to compensate for any natural quartz deviation. The RTC features
a 32-bit programmable counter for long term measurement using the Compare register to
generate an alarm. A 20-bit prescaler is used for the time base clock and is by default
configured to generate a time base of 1 second from a clock at 32.768 kHz.

//2.3.17 Timers and watchdogs
-----------------------------

The high-density STM32F103xx performance line devices include up to two advanced-
control timers, up to four general-purpose timers, two basic timers, two watchdog timers and
a SysTick timer.
Table 4 compares the features of the advanced-control, general-purpose and basic timers.


**Table 4**. High-density timer feature comparison

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
TIM1,
TIM8
16-bit
Up,
down,
up/down
Any integer
between 1
and 65536
Yes 4 Yes
TIM2,
TIM3,
TIM4,
TIM5
16-bit
Up,
down,
up/down
Any integer
between 1
and 65536
Yes 4 No
TIM6,
TIM7
16-bit Up
Any integer
between 1
and 65536
Yes 0 No

<!-- *P20*/136 -->
[P20]: #P20
<a id="P20"></a>

Advanced-control timers (TIM1 and TIM8)
The two advanced-control timers (TIM1 and TIM8) can each be seen as a three-phase
PWM multiplexed on 6 channels. They have complementary PWM outputs with
programmable inserted dead-times. They can also be seen as a complete general-purpose
timer. The 4 independent channels can be used for:
● Input capture
● Output compare
● PWM generation (edge or center-aligned modes)
● One-pulse mode output
If configured as a standard 16-bit timer, it has the same features as the TIMx timer. If
configured as the 16-bit PWM generator, it has full modulation capability (0-100%).
In debug mode, the advanced-control timer counter can be frozen and the PWM outputs
disabled to turn off any power switch driven by these outputs.
Many features are shared with those of the general-purpose TIM timers which have the
same architecture. The advanced-control timer can therefore work together with the TIM
timers via the Timer Link feature for synchronization or event chaining.
General-purpose timers (TIMx)
There are up to 4 synchronizable general-purpose timers (TIM2, TIM3, TIM4 and TIM5)
embedded in the STM32F103xC, STM32F103xD and STM32F103xE performance line
devices. These timers are based on a 16-bit auto-reload up/down counter, a 16-bit prescaler
and feature 4 independent channels each for input capture/output compare, PWM or one-
pulse mode output. This gives up to 16 input captures / output compares / PWMs on the
largest packages.
The general-purpose timers can work together with the advanced-control timer via the Timer
Link feature for synchronization or event chaining. Their counter can be frozen in debug
mode. Any of the general-purpose timers can be used to generate PWM outputs. They all
have independent DMA request generation.
These timers are capable of handling quadrature (incremental) encoder signals and the
digital outputs from 1 to 3 hall-effect sensors.
Basic timers TIM6 and TIM7
These timers are mainly used for DAC trigger generation. They can also be used as a
generic 16-bit time base.
Independent watchdog
The independent watchdog is based on a 12-bit downcounter and 8-bit prescaler. It is
clocked from an independent 40 kHz internal RC and as it operates independently from the
main clock, it can operate in Stop and Standby modes. It can be used either as a watchdog
to reset the device when a problem occurs, or as a free running timer for application timeout
management. It is hardware or software configurable through the option bytes. The counter
can be frozen in debug mode.
Window watchdog
The window watchdog is based on a 7-bit downcounter that can be set as free running. It
can be used as a watchdog to reset the device when a problem occurs. It is clocked from

<!-- *P21*/136 -->
[P21]: #P21
<a id="P21"></a>


the main clock. It has an early warning interrupt capability and the counter can be frozen in
debug mode.
SysTick timer
This timer is dedicated to real-time operating systems, but could also be used as a standard
down counter. It features:
● A 24-bit down counter
● Autoreload capability
● Maskable system interrupt generation when the counter reaches 0.
● Programmable clock source

//2.3.18 I²C bus
----------------

Up to two I²C bus interfaces can operate in multimaster and slave modes. They can support
standard and fast modes.
They support 7/10-bit addressing mode and 7-bit dual addressing mode (as slave). A
hardware CRC generation/verification is embedded.
They can be served by DMA and they support SMBus 2.0/PMBus.

//2.3.19 Universal synchronous/asynchronous receiver transmitters (USARTs)
--------------------------------------------------------------------------

The STM32F103xC, STM32F103xD and STM32F103xE performance line embeds three
universal synchronous/asynchronous receiver transmitters (USART1, USART2 and
USART3) and two universal asynchronous receiver transmitters (UART4 and UART5).
These five interfaces provide asynchronous communication, IrDA SIR ENDEC support,
multiprocessor communication mode, single-wire half-duplex communication mode and
have LIN Master/Slave capability.
The USART1 interface is able to communicate at speeds of up to 4.5 Mbit/s. The other
available interfaces communicate at up to 2.25 Mbit/s.
USART1, USART2 and USART3 also provide hardware management of the CTS and RTS
signals, Smart Card mode (ISO 7816 compliant) and SPI-like communication capability. All
interfaces can be served by the DMA controller except for UART5.

//2.3.20 Serial peripheral interface (SPI)
------------------------------------------

Up to three SPIs are able to communicate up to 18 Mbits/s in slave and master modes in
full-duplex and simplex communication modes. The 3-bit prescaler gives 8 master mode
frequencies and the frame is configurable to 8 bits or 16 bits. The hardware CRC
generation/verification supports basic SD Card/MMC modes.
All SPIs can be served by the DMA controller.

//2.3.21 Inter-integrated sound (I2S)
---------------------------------------

Two standard I2S interfaces (multiplexed with SPI2 and SPI3) are available, that can be
operated in master or slave mode. These interfaces can be configured to operate with 16/32
bit resolution, as input or output channels. Audio sampling frequencies from 8 kHz up to
48 kHz are supported. When either or both of the I2S interfaces is/are configured in master

<!-- *P22*/136 -->
[P22]: #P22
<a id="P22"></a>

mode, the master clock can be output to the external DAC/CODEC at 256 times the
sampling frequency.

//2.3.22 SDIO
-------------

An SD/SDIO/MMC host interface is available, that supports MultiMediaCard System
Specification Version 4.2 in three different databus modes: 1-bit (default), 4-bit and 8-bit.
The interface allows data transfer at up to 48 MHz in 8-bit mode, and is compliant with SD
Memory Card Specifications Version 2.0.
The SDIO Card Specification Version 2.0 is also supported with two different databus
modes: 1-bit (default) and 4-bit.
The current version supports only one SD/SDIO/MMC4.2 card at any one time and a stack
of MMC4.1 or previous.
In addition to SD/SDIO/MMC, this interface is also fully compliant with the CE-ATA digital
protocol Rev1.1.

//2.3.23 Controller area network (CAN)
--------------------------------------

The CAN is compliant with specifications 2.0A and B (active) with a bit rate up to 1 Mbit/s. It
can receive and transmit standard frames with 11-bit identifiers as well as extended frames
with 29-bit identifiers. It has three transmit mailboxes, two receive FIFOs with 3 stages and
14 scalable filter banks.

//2.3.24 Universal serial bus (USB)
-----------------------------------

The STM32F103xC, STM32F103xD and STM32F103xE performance line embed a USB
device peripheral compatible with the USB full-speed 12 Mbs. The USB interface
implements a full-speed (12 Mbit/s) function interface. It has software-configurable endpoint
setting and suspend/resume support. The dedicated 48 MHz clock is generated from the
internal main PLL (the clock source must use a HSE crystal oscillator).

//2.3.25 GPIOs (general-purpose inputs/outputs)
-----------------------------------------------

Each of the GPIO pins can be configured by software as output (push-pull or open-drain), as
input (with or without pull-up or pull-down) or as peripheral alternate function. Most of the
GPIO pins are shared with digital or analog alternate functions. All GPIOs are high current-
capable.
The I/Os alternate function configuration can be locked if needed following a specific
sequence in order to avoid spurious writing to the I/Os registers.

//2.3.26 ADC (analog to digital converter)
------------------------------------------

Three 12-bit analog-to-digital converters are embedded into STM32F103xC, STM32F103xD
and STM32F103xE performance line devices and each ADC shares up to 21 external
channels, performing conversions in single-shot or scan modes. In scan mode, automatic
conversion is performed on a selected group of analog inputs.
Additional logic functions embedded in the ADC interface allow:
● Simultaneous sample and hold
● Interleaved sample and hold
● Single shunt

<!-- *P23*/136 -->
[P23]: #P23
<a id="P23"></a>


The ADC can be served by the DMA controller.
An analog watchdog feature allows very precise monitoring of the converted voltage of one,
some or all selected channels. An interrupt is generated when the converted voltage is
outside the programmed thresholds.
The events generated by the general-purpose timers (TIMx) and the advanced-control
timers (TIM1 and TIM8) can be internally connected to the ADC start trigger and injection
trigger, respectively, to allow the application to synchronize A/D conversion and timers.

//2.3.27 DAC (digital-to-analog converter)
------------------------------------------

The two 12-bit buffered DAC channels can be used to convert two digital signals into two
analog voltage signal outputs. The chosen design structure is composed of integrated
resistor strings and an amplifier in inverting configuration.
This dual digital Interface supports the following features:
● two DAC converters: one for each output channel
● 8-bit or 12-bit monotonic output
● left or right data alignment in 12-bit mode
● synchronized update capability
● noise-wave generation
● triangular-wave generation
● dual DAC channel independent or simultaneous conversions
● DMA capability for each channel
● external triggers for conversion
● input voltage reference V REF+
Eight DAC trigger inputs are used in the STM32F103xC, STM32F103xD and
STM32F103xE performance line family. The DAC channels are triggered through the timer
update outputs that are also connected to different DMA channels.

<!-- *P24*/136 -->
[P24]: #P24
<a id="P24"></a>


//2.3.28 Temperature sensor
---------------------------

The temperature sensor has to generate a voltage that varies linearly with temperature. The
conversion range is between 2 V < V DDA < 3.6 V. The temperature sensor is internally
connected to the ADC1_IN16 input channel which is used to convert the sensor output
voltage into a digital value.

//2.3.29 Serial wire JTAG debug port (SWJ-DP)
---------------------------------------------

The ARM SWJ-DP Interface is embedded, and is a combined JTAG and serial wire debug
port that enables either a serial wire debug or a JTAG probe to be connected to the target.
The JTAG TMS and TCK pins are shared respectively with SWDIO and SWCLK and a
specific sequence on the TMS pin is used to switch between JTAG-DP and SW-DP.

//2.3.30 Embedded Trace Macrocell™
----------------------------------

The ARM® Embedded Trace Macrocell provides a greater visibility of the instruction and
data flow inside the CPU core by streaming compressed data at a very high rate from the
STM32F10xxx through a small number of ETM pins to an external hardware trace port
analyzer (TPA) device. The TPA is connected to a host computer using USB, Ethernet, or
any other high-speed channel. Real-time instruction and data flow activity can be recorded
and then formatted for display on the host computer running debugger software. TPA
hardware is commercially available from common development tool vendors. It operates
with third party debugger software tools.

<!-- *P25*/136 -->
[P25]: #P25
<a id="P25"></a>



/3 Pinouts and pin descriptions
===============================


**Figure 3**. STM32F103xC and STM32F103xE performance line BGA144 ballout

AI14798b
V DD_7
PC3 PC2
PF6
V DD_6 V SS_4 PF8
H
V DD_1
D PG13
PG14
PE6 PE5
C
PG10
PG11
V DD_5
PB8
NRST
B PG12 PG15
PC15-
OSC32_OUT
PB9
A
8 7 6 5 4 3 2 1
V BAT
OSC_IN
OSC_OUT
V SS_5
G
F
E
PF7
PC0
PF0 PF1
PF2
V SS_10 PG9 PF4 PF3 V SS_3 PF5
V DD_8 V DD_3 V DD_4
V SS_8
PE4 PB5
PB6
BOOT0 PB7
V SS_11
PF10
PC1
V DD_11 V DD_10
PF9
10 9
K
J
V SS_2
PD3
PD4
PD1
PC12
PC11 PD5
PD2 PD0
V DD_9
V SS_9
V DD_2
PG1
PC5 PA5 PE9
PB2/
BOOT1
PC4 PA4 PE10
PG0 PF13 V REF–
PE12 V SSA
PA1 PE13
PA0-WKUP
PD9
PD10 PG4
PD13
12 11
PG8
PA10
NC
PA9
PA11
PA12 PC10
PC9 PA8
PC7
PC6
PC8
PD14
PG3 PG2
PD15
M
L PF15
PB1 PA7 PE7
PF12 PB0 PA6 PE8
PF14 PF11 V DDA
PE14 V REF+
PA3 PE15
PA2
PB10
PD8 PD12
PB11 PB12
PB14 PB15
PB13
PC13-
TAMPER-RTC
PE3 PE2 PE1 PE0
PB4
JTRST
PB3
JTDO
PD6 PD7
PA15
JTDI
PA14
JTCK
PA13
JTMS
PE11 V SS_6 V SS_7 V SS_1 PG7 PD11 PG5 PG6
PC14-
OSC32_IN

<!-- *P26*/136 -->
[P26]: #P26
<a id="P26"></a>


**Figure 4**. STM32F103xC and STM32F103xE performance line BGA100 ballout

AI14601c
PE10
PC14-
OSC32_IN
PC5 PA5
PC3
PB4
PE15
PB2 PC4 PA4
H
PE14
PE11 PE7
D PD4
PD3
PB8 PE3
C
PD0
PC12
PE5
PB5
PC0
PE2
B PC11 PD2
PC15-
OSC32_OUT
PB7
PB6
A
8 7 6 5 4 3 2 1
V SS_5 OSC_IN
OSC_OUT V DD_5
G
F
E
PC1
V REF–
PC13-
TAMPER-RTC
PB9 PA15 PB3
PE4 PE1
PE0
V SS_1 PD1 PE6 NRST PC2 V SS_3 V SS_4
NC V DD_3 V DD_4
PB15
V BAT PD5
PD6
BOOT0 PD7
V SS_2
V SSA
PA1
V DD_2 V DD_1
PB14
PA0-WKUP
10 9
K
J
PD10
PD11
PA8
PA9
PA10
PA11
PA12 PC10
PA13 PA14
PC9 PC7
PC6
PD15
PC8
PD14
PE12
PB1 PA7 PB11
PE8 PB0 PA6 PB10
PE13 PE9 V DDA
PB13 V REF+
PA3 PB12
PA2
PD8
PD9 PD13
PD12

<!-- *P27*/136 -->
[P27]: #P27
<a id="P27"></a>



**Figure 5**. STM32F103xC and STM32F103xE performance line LQFP144 pinout

V DD_3
V SS_3
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
PG15
V DD_11
V SS_11
PG14
PG13
PG12
PG11
PG10
PG9
PD7
PD6
V DD_10
V SS_10
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
PE2
V DD_2
PE3
V SS_2
PE4
NC
PE5
PA13
PE6
PA12
VBAT
PA11
PC13-TAMPER-RTC
PA10
PC14-OSC32_IN
PA9
PC15-OSC32_OUT
PA8
PF0
PC9
PF1
PC8
PF2
PC7
PF3
PC6
PF4
V DD_9
PF5
V SS_9
V SS_5
PG8
V DD_5
PG7
PF6
PG6
PF7
PG5
PF8
PG4
PF9
PG3
PF10
PG2
OSC_IN
PD15
OSC_OUT
PD14
NRST
V DD_8
PC0
V SS_8
PC1
PD13
PC2
PD12
PC3
PD11
V SSA
PD10
V REF-
PD9
V REF+
PD8
V DDA
PB15
PA0-WKUP
PB14
PA1
PB13
PA2
PB12
PA3
V SS_4
V DD_4
PA4
PA5
PA6
PA7
PC4
PC5
PB0
PB1
PB2
PF11
PF12
VSS_6
V DD_6
PF13
PF14
PF15
PG0
PG1
PE7
PE8
PE9
V SS_7
V DD_7
PE10
PE11
PE12
PE13
PE14
PE15
PB10
PB11
V SS_1
V DD_1
144
143
142
141
140
139
138
137
136
135
134
133
132
131
130
129
128
127
126
125
124
123
122
121
109
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
108
107
106
105
104
103
102
101
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
51
52
53
54
55
56
57
58
59
60
72
LQFP144
120
119
118
117
116
115
114
113
112
111
110
61
62
63
64
65
66
67
68
69
70
71
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
83
82
81
80
79
78
77
76
75
74
73
ai14667

<!-- *P28*/136 -->
[P28]: #P28
<a id="P28"></a>


**Figure 6**. STM32F103xC and STM32F103xE performance line LQFP100 pinout

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
ai14391
LQFP100

<!-- *P29*/136 -->
[P29]: #P29
<a id="P29"></a>



**Figure 7**. STM32F103xC and STM32F103xE performance line

LQFP64 pinout
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
VBAT
PC13-TAMPER-RTC
PC14-OSC32_IN
PC15-OSC32_OUT
PD0 OSC_IN
PD1 OSC_OUT
NRST
PC0
PC1
PC2
PC3
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
PD2
PC12
PC11
PC10
PA15
PA14
VDD_2
VSS_2
PA13
PA12
PA11
PA10
PA9
PA8
PC9
PC8
PC7
PC6
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
PB10
PB11
VSS_1
VDD_1
LQFP64
ai14392

<!-- *P30*/136 -->
[P30]: #P30
<a id="P30"></a>


**Figure 8**. STM32F103xC and STM32F103xE performance line

WLCSP64 ballout, ball side
ai15460b
H
D
C
B
A
8 7 6 5 4 3 2 1
G
F
E
V DD_2
PC10 PD2 PB5 PB3 BOOT0
V SS_3 V DD_3
BYPASS/
V SS_2
PA14 PC11 PB4 PB6 PB9 PC15 PC14
PC13 NRST V BAT PB7 PC12 PA15 PA12 PA11
OSC_IN OSC_OUT PC2 PB8 PA13 PA10 PA9 PC9
PC0 V SSA PA1 PA5 PA8 PC8 PC7 PC6
PC1
V REF+
PA0-
WKUP
V SS_4
PB1 PB11 PB14 PB15
V DDA
PA3
V DD_4
PA6 PA7 PB10 PB12 PB13
PA2 PA4 PC4 PC5 PB0 PB2
V SS_1 V DD_1

<!-- *P31*/136 -->
[P31]: #P31
<a id="P31"></a>




**Table 5**. High-density STM32F103xx pin definitions

Pins
Pin name
Type (1)
I / O Level (2)
Main
function (3)
(after reset)
Alternate functions (4)
LFBGA144
LFBGA100
WLCSP64
LQFP64
LQFP100
LQFP144
Default Remap
A3 A3 - - 1 1 PE2 I/O FT PE2 TRACECK/ FSMC_A23
A2 B3 - - 2 2 PE3 I/O FT PE3 TRACED0/FSMC_A19
B2 C3 - - 3 3 PE4 I/O FT PE4 TRACED1/FSMC_A20
B3 D3 - - 4 4 PE5 I/O FT PE5 TRACED2/FSMC_A21
B4 E3 - - 5 5 PE6 I/O FT PE6 TRACED3/FSMC_A22
C2 B2 C6 1 6 6 V BAT S V BAT
A1 A2 C8 2 7 7
PC13-TAMPER-
RTC (5)
I/O PC13 (6) TAMPER-RTC
B1 A1 B8 3 8 8
PC14-
OSC32_IN (5)
I/O PC14 (6) OSC32_IN
C1 B1 B7 4 9 9
PC15-
OSC32_OUT (5)
I/O PC15 (6) OSC32_OUT
C3 - - - - 10 PF0 I/O FT PF0 FSMC_A0
C4 - - - - 11 PF1 I/O FT PF1 FSMC_A1
D4 - - - - 12 PF2 I/O FT PF2 FSMC_A2
E2 - - - - 13 PF3 I/O FT PF3 FSMC_A3
E3 - - - - 14 PF4 I/O FT PF4 FSMC_A4
E4 - - - - 15 PF5 I/O FT PF5 FSMC_A5
D2 C2 - - 10 16 V SS_5 S V SS_5
D3 D2 - - 11 17 V DD_5 S V DD_5
F3 - - - - 18 PF6 I/O PF6 ADC3_IN4/FSMC_NIORD
F2 - - - - 19 PF7 I/O PF7 ADC3_IN5/FSMC_NREG
G3 - - - - 20 PF8 I/O PF8 ADC3_IN6/FSMC_NIOWR
G2 - - - - 21 PF9 I/O PF9 ADC3_IN7/FSMC_CD
G1 - - - - 22 PF10 I/O PF10 ADC3_IN8/FSMC_INTR
D1 C1 D8 5 12 23 OSC_IN I OSC_IN
E1 D1 D7 6 13 24 OSC_OUT O OSC_OUT
F1 E1 C7 7 14 25 NRST I/O NRST
H1 F1 E8 8 15 26 PC0 I/O PC0 ADC123_IN10
H2 F2 F8 9 16 27 PC1 I/O PC1 ADC123_IN11
H3 E2 D6 10 17 28 PC2 I/O PC2 ADC123_IN12
H4 F3 - 11 18 29 PC3 (7) I/O PC3 ADC123_IN13
J1 G1 E7 12 19 30 V SSA S V SSA

<!-- *P32*/136 -->
[P32]: #P32
<a id="P32"></a>

K1 H1 - - 20 31 V REF- S V REF-
L1 J1
F7
(8)
- 21 32 V REF+ S V REF+
M1 K1 G8 13 22 33 V DDA S V DDA
J2 G2 F6 14 23 34 PA0-WKUP I/O PA0
WKUP/USART2_CTS (9)
ADC123_IN0
TIM2_CH1_ETR
TIM5_CH1/TIM8_ETR
K2 H2 E6 15 24 35 PA1 I/O PA1
USART2_RTS (9)
ADC123_IN1/
TIM5_CH2/TIM2_CH2 (9)
L2 J2 H8 16 25 36 PA2 I/O PA2
USART2_TX (9) /TIM5_CH3
ADC123_IN2/
TIM2_CH3 (9)
M2 K2 G7 17 26 37 PA3 I/O PA3
USART2_RX (9) /TIM5_CH4
ADC123_IN3/TIM2_CH4 (9)
G4 E4 F5 18 27 38 V SS_4 S V SS_4
F4 F4 G6 19 28 39 V DD_4 S V DD_4
J3 G3 H7 20 29 40 PA4 I/O PA4
SPI1_NSS (9) /
USART2_CK (9)
DAC_OUT1/ADC12_IN4
K3 H3 E5 21 30 41 PA5 I/O PA5
SPI1_SCK (9)
DAC_OUT2 ADC12_IN5
L3 J3 G5 22 31 42 PA6 I/O PA6
SPI1_MISO (9)
TIM8_BKIN/ADC12_IN6
TIM3_CH1 (9)
TIM1_BKIN
M3 K3 G4 23 32 43 PA7 I/O PA7
SPI1_MOSI (9) /
TIM8_CH1N/ADC12_IN7
TIM3_CH2 (9)
TIM1_CH1N
J4 G4 H6 24 33 44 PC4 I/O PC4 ADC12_IN14
K4 H4 H5 25 34 45 PC5 I/O PC5 ADC12_IN15
L4 J4 H4 26 35 46 PB0 I/O PB0
ADC12_IN8/TIM3_CH3
TIM8_CH2N
TIM1_CH2N
M4 K4 F4 27 36 47 PB1 I/O PB1
ADC12_IN9/TIM3_CH4 (9)
TIM8_CH3N
TIM1_CH3N
J5 G5 H3 28 37 48 PB2 I/O FT PB2/BOOT1
M5 - - - - 49 PF11 I/O FT PF11 FSMC_NIOS16
L5 - - - - 50 PF12 I/O FT PF12 FSMC_A6

Table 5. High-density STM32F103xx pin definitions (continued)

Pins
Pin name
Type (1)
I / O Level (2)
Main
function (3)
(after reset)
Alternate functions (4)
LFBGA144
LFBGA100
WLCSP64
LQFP64
LQFP100
LQFP144
Default Remap

<!-- *P33*/136 -->
[P33]: #P33
<a id="P33"></a>


H5 - - - - 51 V SS_6 S V SS_6
G5 - - - - 52 V DD_6 S V DD_6
K5 - - - - 53 PF13 I/O FT PF13 FSMC_A7
M6 - - - - 54 PF14 I/O FT PF14 FSMC_A8
L6 - - - - 55 PF15 I/O FT PF15 FSMC_A9
K6 - - - - 56 PG0 I/O FT PG0 FSMC_A10
J6 - - - - 57 PG1 I/O FT PG1 FSMC_A11
M7 H5 - - 38 58 PE7 I/O FT PE7 FSMC_D4 TIM1_ETR
L7 J5 - - 39 59 PE8 I/O FT PE8 FSMC_D5 TIM1_CH1N
K7 K5 - - 40 60 PE9 I/O FT PE9 FSMC_D6 TIM1_CH1
H6 - - - - 61 V SS_7 S V SS_7
G6 - - - - 62 V DD_7 S V DD_7
J7 G6 - - 41 63 PE10 I/O FT PE10 FSMC_D7 TIM1_CH2N
H8 H6 - - 42 64 PE11 I/O FT PE11 FSMC_D8 TIM1_CH2
J8 J6 - - 43 65 PE12 I/O FT PE12 FSMC_D9 TIM1_CH3N
K8 K6 - - 44 66 PE13 I/O FT PE13 FSMC_D10 TIM1_CH3
L8 G7 - - 45 67 PE14 I/O FT PE14 FSMC_D11 TIM1_CH4
M8 H7 - - 46 68 PE15 I/O FT PE15 FSMC_D12 TIM1_BKIN
M9 J7 G3 29 47 69 PB10 I/O FT PB10 I2C2_SCL/USART3_TX (9) TIM2_CH3
M10 K7 F3 30 48 70 PB11 I/O FT PB11 I2C2_SDA/USART3_RX (9) TIM2_CH4
H7 E7 H2 31 49 71 V SS_1 S V SS_1
G7 F7 H1 32 50 72 V DD_1 S V DD_1
M11 K8 G2 33 51 73 PB12 I/O FT PB12
SPI2_NSS/I2S2_WS/
I2C2_SMBA/
USART3_CK (9) /
TIM1_BKIN (9)
M12 J8 G1 34 52 74 PB13 I/O FT PB13
SPI2_SCK/I2S2_CK
USART3_CTS (9) /
TIM1_CH1N
L11 H8 F2 35 53 75 PB14 I/O FT PB14
SPI2_MISO/TIM1_CH2N
USART3_RTS (9) /
L12 G8 F1 36 54 76 PB15 I/O FT PB15
SPI2_MOSI/I2S2_SD
TIM1_CH3N (9) /
L9 K9 - - 55 77 PD8 I/O FT PD8 FSMC_D13 USART3_TX
K9 J9 - - 56 78 PD9 I/O FT PD9 FSMC_D14 USART3_RX

Table 5. High-density STM32F103xx pin definitions (continued)

Pins
Pin name
Type (1)
I / O Level (2)
Main
function (3)
(after reset)
Alternate functions (4)
LFBGA144
LFBGA100
WLCSP64
LQFP64
LQFP100
LQFP144
Default Remap

<!-- *P34*/136 -->
[P34]: #P34
<a id="P34"></a>

J9 H9 - - 57 79 PD10 I/O FT PD10 FSMC_D15 USART3_CK
H9 G9 - - 58 80 PD11 I/O FT PD11 FSMC_A16 USART3_CTS
L10 K10 - - 59 81 PD12 I/O FT PD12 FSMC_A17
TIM4_CH1 /
USART3_RTS
K10 J10 - - 60 82 PD13 I/O FT PD13 FSMC_A18 TIM4_CH2
G8 - - - - 83 V SS_8 S V SS_8
F8 - - - - 84 V DD_8 S V DD_8
K11 H10 - - 61 85 PD14 I/O FT PD14 FSMC_D0 TIM4_CH3
K12 G10 - - 62 86 PD15 I/O FT PD15 FSMC_D1 TIM4_CH4
J12 - - - - 87 PG2 I/O FT PG2 FSMC_A12
J11 - - - - 88 PG3 I/O FT PG3 FSMC_A13
J10 - - - - 89 PG4 I/O FT PG4 FSMC_A14
H12 - - - - 90 PG5 I/O FT PG5 FSMC_A15
H11 - - - - 91 PG6 I/O FT PG6 FSMC_INT2
H10 - - - - 92 PG7 I/O FT PG7 FSMC_INT3
G11 - - - - 93 PG8 I/O FT PG8
G10 - - - - 94 V SS_9 S V SS_9
F10 - - - - 95 V DD_9 S V DD_9
G12 F10 E1 37 63 96 PC6 I/O FT PC6
I2S2_MCK/
TIM8_CH1/SDIO_D6
TIM3_CH1
F12 E10 E2 38 64 97 PC7 I/O FT PC7
I2S3_MCK/
TIM8_CH2/SDIO_D7
TIM3_CH2
F11 F9 E3 39 65 98 PC8 I/O FT PC8 TIM8_CH3/SDIO_D0 TIM3_CH3
E11 E9 D1 40 66 99 PC9 I/O FT PC9 TIM8_CH4/SDIO_D1 TIM3_CH4
E12 D9 E4 41 67 100 PA8 I/O FT PA8
USART1_CK/
TIM1_CH1 (9) /MCO
D12 C9 D2 42 68 101 PA9 I/O FT PA9
USART1_TX (9) /
TIM1_CH2 (9)
D11 D10 D3 43 69 102 PA10 I/O FT PA10
USART1_RX (9) /
TIM1_CH3 (9)
C12 C10 C1 44 70 103 PA11 I/O FT PA11
USART1_CTS/USBDM
CAN_RX (9) /TIM1_CH4 (9)
B12 B10 C2 45 71 104 PA12 I/O FT PA12
USART1_RTS/USBDP/
CAN_TX (9) /TIM1_ETR (9)

Table 5. High-density STM32F103xx pin definitions (continued)

Pins
Pin name
Type (1)
I / O Level (2)
Main
function (3)
(after reset)
Alternate functions (4)
LFBGA144
LFBGA100
WLCSP64
LQFP64
LQFP100
LQFP144
Default Remap

<!-- *P35*/136 -->
[P35]: #P35
<a id="P35"></a>


A12 A10 D4 46 72 105 PA13 I/O FT
JTMS-
SWDIO
PA13
C11 F8 - - 73 106 Not connected
G9 E6 B1 47 74 107 V SS_2 S V SS_2
F9 F6 A1 48 75 108 V DD_2 S V DD_2
A11 A9 B2 49 76 109 PA14 I/O FT
JTCK-
SWCLK
PA14
A10 A8 C3 50 77 110 PA15 I/O FT JTDI
SPI3_NSS/
I2S3_WS
TIM2_CH1_ETR
PA 15 / SPI1_NSS
B11 B9 A2 51 78 111 PC10 I/O FT PC10 UART4_TX/SDIO_D2 USART3_TX
B10 B8 B3 52 79 112 PC11 I/O FT PC11 UART4_RX/SDIO_D3 USART3_RX
C10 C8 C4 53 80 113 PC12 I/O FT PC12 UART5_TX/SDIO_CK USART3_CK
E10 D8 D8 5 81 114 PD0 I/O FT OSC_IN (10) FSMC_D2 (11) CAN_RX
D10 E8 D7 6 82 115 PD1 I/O FT OSC_OUT (10) FSMC_D3 (11) CAN_TX
E9 B7 A3 54 83 116 PD2 I/O FT PD2
TIM3_ETR/UART5_RX
SDIO_CMD
D9 C7 - - 84 117 PD3 I/O FT PD3 FSMC_CLK USART2_CTS
C9 D7 - - 85 118 PD4 I/O FT PD4 FSMC_NOE USART2_RTS
B9 B6 - - 86 119 PD5 I/O FT PD5 FSMC_NWE USART2_TX
E7 - - - - 120 V SS_10 S V SS_10
F7 - - - - 121 V DD_10 S V DD_10
A8 C6 - - 87 122 PD6 I/O FT PD6 FSMC_NWAIT USART2_RX
A9 D6 - - 88 123 PD7 I/O FT PD7 FSMC_NE1/FSMC_NCE2 USART2_CK
E8 - - - - 124 PG9 I/O FT PG9 FSMC_NE2/FSMC_NCE3
D8 - - - - 125 PG10 I/O FT PG10
FSMC_NCE4_1/
FSMC_NE3
C8 - - - - 126 PG11 I/O FT PG11 FSMC_NCE4_2
B8 - - - - 127 PG12 I/O FT PG12 FSMC_NE4
D7 - - - - 128 PG13 I/O FT PG13 FSMC_A24
C7 - - - - 129 PG14 I/O FT PG14 FSMC_A25
E6 - - - - 130 V SS_11 S V SS_11
F6 - - - - 131 V DD_11 S V DD_11
B7 - - - - 132 PG15 I/O FT PG15

Table 5. High-density STM32F103xx pin definitions (continued)

Pins
Pin name
Type (1)
I / O Level (2)
Main
function (3)
(after reset)
Alternate functions (4)
LFBGA144
LFBGA100
WLCSP64
LQFP64
LQFP100
LQFP144
Default Remap

<!-- *P36*/136 -->
[P36]: #P36
<a id="P36"></a>

A7 A7 A4 55 89 133 PB3 I/O FT JTDO SPI3_SCK / I2S3_CK/
PB3 / TRACESWO
TIM2_CH2 /
SPI1_SCK
A6 A6 B4 56 90 134 PB4 I/O FT NJTRST SPI3_MISO
PB4 / TIM3_CH1
SPI1_MISO
B6 C5 A5 57 91 135 PB5 I/O PB5
I2C1_SMBA/ SPI3_MOSI
I2S3_SD
TIM3_CH2 /
SPI1_MOSI
C6 B5 B5 58 92 136 PB6 I/O FT PB6 I2C1_SCL (9) / TIM4_CH1 (9) USART1_TX
D6 A5 C5 59 93 137 PB7 I/O FT PB7
I2C1_SDA (9) /
FSMC_NADV /
TIM4_CH2 (9)
USART1_RX
D5 D5 A6 60 94 138 BOOT0 I BOOT0
C5 B4 D5 61 95 139 PB8 I/O FT PB8 TIM4_CH3 (9) /SDIO_D4
I2C1_SCL/
CAN_RX
B5 A4 B6 62 96 140 PB9 I/O FT PB9 TIM4_CH4 (9) /SDIO_D5
I2C1_SDA /
CAN_TX
A5 D4 - - 97 141 PE0 I/O FT PE0 TIM4_ETR / FSMC_NBL0
A4 C4 - - 98 142 PE1 I/O FT PE1 FSMC_NBL1
E5 E5 A7 63 99 143 V SS_3 S V SS_3
F5 F5 A8 64 100 144 V DD_3 S V DD_3
1. I = input, O = output, S = supply.
2. FT = 5 V tolerant.
3. Function availability depends on the chosen device.
4. If several peripherals share the same I/O pin, to avoid conflict between these alternate functions only one peripheral should
be enabled at a time through the peripheral clock enable bit (in the corresponding RCC peripheral clock enable register).
5. PC13, PC14 and PC15 are supplied through the power switch. Since the switch only sinks a limited amount of current (3
mA), the use of GPIOs PC13 to PC15 in output mode is limited: the speed should not exceed 2 MHz with a maximum load
of 30 pF and these IOs must not be used as a current source (e.g. to drive an LED).
6. Main function after the first backup domain power-up. Later on, it depends on the contents of the Backup registers even
after reset (because these registers are not reset by the main reset). For details on how to manage these IOs, refer to the
Battery backup domain and BKP register description sections in the STM32F10xxx reference manual, available from the
STMicroelectronics website: www.st.com.
7. In the WCLSP64 package, the PC3 I/O pin is not bonded and it must be configured by software to output mode (Push-pull)
and writing 0 to the data register in order to avoid an extra consumption during low power modes.
8. Unlike in the LQFP64 package, there is no PC3 in the WLCSP package. The V REF+ functionality is provided instead.
9. This alternate function can be remapped by software to some other port pins (if available on the used package). For more
details, refer to the Alternate function I/O and debug configuration section in the STM32F10xxx reference manual,
available from the STMicroelectronics website: www.st.com.
10. For the WCLSP64/LQFP64 package, the pins number 5 and 6 are configured as OSC_IN/OSC_OUT after reset, however
the functionality of PD0 and PD1 can be remapped by software on these pins. For the LQFP100/BGA100 and
LQFP144/BGA144 packages, PD0 and PD1 are available by default, so there is no need for remapping. For more details,
refer to Alternate function I/O and debug configuration section in the STM32F10xxx reference manual.
11. For devices delivered in LQFP64 packages, the FSMC function is not available.

Table 5. High-density STM32F103xx pin definitions (continued)

Pins
Pin name
Type (1)
I / O Level (2)
Main
function (3)
(after reset)
Alternate functions (4)
LFBGA144
LFBGA100
WLCSP64
LQFP64
LQFP100
LQFP144
Default Remap

<!-- *P37*/136 -->
[P37]: #P37
<a id="P37"></a>




**Table 6**. FSMC pin definition

Pins
FSMC
LQFP100
BGA100 (1)
CF CF/IDE
NOR/PSRAM/
SRAM
NOR/PSRAM Mux NAND 16 bit
PE2 A23 A23 Yes
PE3 A19 A19 Yes
PE4 A20 A20 Yes
PE5 A21 A21 Yes
PE6 A22 A22 Yes
PF0 A0 A0 A0 -
PF1 A1 A1 A1 -
PF2 A2 A2 A2 -
PF3 A3 A3 -
PF4 A4 A4 -
PF5 A5 A5 -
PF6 NIORD NIORD -
PF7 NREG NREG -
PF8 NIOWR NIOWR -
PF9 CD CD -
PF10 INTR INTR -
PF11 NIOS16 NIOS16 -
PF12 A6 A6 -
PF13 A7 A7 -
PF14 A8 A8 -
PF15 A9 A9 -
PG0 A10 A10 -
PG1 A11 -
PE7 D4 D4 D4 DA4 D4 Yes
PE8 D5 D5 D5 DA5 D5 Yes
PE9 D6 D6 D6 DA6 D6 Yes
PE10 D7 D7 D7 DA7 D7 Yes
PE11 D8 D8 D8 DA8 D8 Yes
PE12 D9 D9 D9 DA9 D9 Yes
PE13 D10 D10 D10 DA10 D10 Yes
PE14 D11 D11 D11 DA11 D11 Yes
PE15 D12 D12 D12 DA12 D12 Yes
PD8 D13 D13 D13 DA13 D13 Yes

<!-- *P38*/136 -->
[P38]: #P38
<a id="P38"></a>

PD9 D14 D14 D14 DA14 D14 Yes
PD10 D15 D15 D15 DA15 D15 Yes
PD11 A16 A16 CLE Yes
PD12 A17 A17 ALE Yes
PD13 A18 A18 Yes
PD14 D0 D0 D0 DA0 D0 Yes
PD15 D1 D1 D1 DA1 D1 Yes
PG2 A12 -
PG3 A13 -
PG4 A14 -
PG5 A15 -
PG6 INT2 -
PG7 INT3 -
PD0 D2 D2 D2 DA2 D2 Yes
PD1 D3 D3 D3 DA3 D3 Yes
PD3 CLK CLK Yes
PD4 NOE NOE NOE NOE NOE Yes
PD5 NWE NWE NWE NWE NWE Yes
PD6 NWAIT NWAIT NWAIT NWAIT NWAIT Yes
PD7 NE1 NE1 NCE2 Yes
PG9 NE2 NE2 NCE3 -
PG10 NCE4_1 NCE4_1 NE3 NE3 -
PG11 NCE4_2 NCE4_2 -
PG12 NE4 NE4 -
PG13 A24 A24 -
PG14 A25 A25 -
PB7 NADV NADV Yes
PE0 NBL0 NBL0 Yes
PE1 NBL1 NBL1 Yes
1. Ports F and G are not available in devices delivered in 100-pin packages.

Table 6. FSMC pin definition (continued)

Pins
FSMC
LQFP100
BGA100 (1)
CF CF/IDE
NOR/PSRAM/
SRAM
NOR/PSRAM Mux NAND 16 bit

<!-- *P39*/136 -->
[P39]: #P39
<a id="P39"></a>



/4 Memory mapping
=================

The memory map is shown in Figure 9.

**Figure 9**. Memory map

512-Mbyte
block 7
Cortex-M3's
internal
peripherals
512-Mbyte
block 6
Not used
512-Mbyte
block 5
FSMC register
512-Mbyte
block 4
FSMC bank 3
& bank4
512-Mbyte
block 3
FSMC bank1
& bank2
512-Mbyte
block 2
Peripherals
512-Mbyte
block 1
SRAM
0x0000 0000
0x1FFF FFFF
0x2000 0000
0x3FFF FFFF
0x4000 0000
0x5FFF FFFF
0x6000 0000
0x7FFF FFFF
0x8000 0000
0x9FFF FFFF
0xA000 0000
0xBFFF FFFF
0xC000 0000
0xDFFF FFFF
0xE000 0000
0xFFFF FFFF
512-Mbyte
block 0
Code
Flash
0x0808 0000
0x1FFF EFFF
0x1FFF F000- 0x1FFF F7FF
0x1FFF F800 - 0x1FFF F80F
0x0800 0000
0x0807 FFFF
0x0008 0000
0x07FF FFFF
0x0000 0000
0x0007 FFFF
System memory
Reserved
Reserved
Aliased to Flash or system
memory depending on
BOOT pins
SRAM (64 KB aliased
by bit-banding)
Reserved
0x2000 0000
0x2000 FFFF
0x2001 0000
0x3FFF FFFF
TIM2
TIM3
0x4000 0000 - 0x4000 03FF
TIM4
TIM5
TIM6
TIM7
Reserved
0x4000 0400 - 0x4000 07FF
0x4000 0800 - 0x4000 0BFF
0x4000 0C00 - 0x4000 0FFF
0x4000 1000 - 0x4000 13FF
0x4000 1400 - 0x4000 17FF
0x4000 1800 - 0x4000 27FF
RTC
0x4000 2800 - 0x4000 2BFF
WWDG
0x4000 2C00 - 0x4000 2FFF
IWDG
0x4000 3000 - 0x4000 33FF
Reserved 0x4000 3400 - 0x4000 37FF
SPI2/I2S2
0x4000 3800 - 0x4000 3BFF
SPI3/I2S3
0x4000 3C00 - 0x4000 3FFF
Reserved
0x4000 4000 - 0x4000 43FF
USART2
0x4000 4400 - 0x4000 47FF
0x4000 4800 - 0x4000 4BFF USART3
UART4 0x4000 4C00 - 0x4000 4FFF
UART5
0x4000 5000 - 0x4000 53FF
I2C1 0x4000 5400 - 0x4000 57FF
I2C2
0x4000 5800 - 0x4000 5BFF
Reserved 0x4000 6800 - 0x4000 6BFF
BKP 0x4000 6C00 - 0x4000 6FFF
PWR
0x4000 7000 - 0x4000 73FF
DAC 0x4000 7400 - 0x4000 77FF
Reserved
0x4000 7800 - 0x4000 FFFF
AFIO
0x4001 0000 - 0x4001 03FF
Port A
EXTI
0x4001 0400 - 0x4001 07FF
0x4001 0800 - 0x4001 0BFF
Port B
0x4001 0C00 - 0x4001 0FFF
Port C
0x4001 1000 - 0x4001 13FF
Port D
0x4001 1400 - 0x4001 17FF
Port E
0x4001 1800 - 0x4001 1BFF
Port F
0x4001 1C00 - 0x4001 1FFF
Port G 0x4001 2000 - 0x4001 23FF
ADC1 0x4001 2400 - 0x4001 27FF
0x4001 2800 - 0x4001 2BFF
SPI1
0x4001 3000 - 0x4001 33FF
0x4001 3400 - 0x4001 37FF
USART1
0x4001 3800 - 0x4001 3BFF
Reserved 0x4001 400 - 0x4001 7FFF
DMA1
0x4002 0000 - 0x4002 03FF
DMA2
0x4002 0400 - 0x4002 07FF
Reserved
0x4002 0400 - 0x4002 0FFF
RCC
0x4002 1000 - 0x4002 13FF
Reserved
0x4002 1400 - 0x4002 1FFF
Flash interface 0x4002 2000 - 0x4002 23FF
Reserved 0x4002 2400 - 0x4002 2FFF
CRC
0x4002 3000 - 0x4002 33FF
Reserved
0x4002 4400 - 0x5FFF FFFF
FSMC bank1 NOR/PSRAM 1
0x6000 0000 - 0x63FF FFFF
FSMC bank1 NOR/PSRAM 2
0x6400 0000 - 0x67FF FFFF
FSMC bank1 NOR/PSRAM 3
0x6800 0000 - 0x6BFF FFFF
FSMC bank1 NOR/PSRAM 4
0x6C00 0000 - 0x6FFF FFFF
FSMC bank2 NAND (NAND1)
0x7000 0000 - 0x7FFF FFFF
FSMC bank3 NAND (NAND2)
0x8000 0000 - 0x8FFF FFFF
FSMC bank4 PCCARD
0x9000 0000 - 0x9FFF FFFF
FSMC register
0xA000 0000 - 0xA000 0FFF
Reserved 0xA000 1000 - 0xBFFF FFFF
ai14753d
Option Bytes
TIM8
ADC2
0x4001 8000 - 0x4001 83FF
0x4001 8400 - 0x4001 FFFF
SDIO
Reserved
ADC3
0x4001 3C00 - 0x4001 3FFF
TIM1
0x4001 2C00 - 0x4001 2FFF
USB registers
Shared USB/CAN SRAM 512
bytes
BxCAN
0x4000 5C00 - 0x4000 5FFF
0x4000 6000 - 0x4000 63FF
0x4000 6400 - 0x4000 67FF

<!-- *P40*/136 -->
[P40]: #P40
<a id="P40"></a>


/5 Electrical characteristics
=============================


//5.1 Parameter conditions
--------------------------

Unless otherwise specified, all voltages are referenced to V SS .

//5.1.1 Minimum and maximum values
----------------------------------

Unless otherwise specified the minimum and maximum values are guaranteed in the worst
conditions of ambient temperature, supply voltage and frequencies by tests in production on
100% of the devices with an ambient temperature at T A = 25 °C and T A = T A max (given by
the selected temperature range).
Data based on characterization results, design simulation and/or technology characteristics
are indicated in the table footnotes and are not tested in production. Based on
characterization, the minimum and maximum values refer to sample tests and represent the
mean value plus or minus three times the standard deviation (mean±3Σ).

//5.1.2 Typical values
----------------------

Unless otherwise specified, typical data are based on T A = 25 °C, V DD = 3.3 V (for the
2 V £ V DD £ 3.6 V voltage range). They are given only as design guidelines and are not
tested.
Typical ADC accuracy values are determined by characterization of a batch of samples from
a standard diffusion lot over the full temperature range, where 95% of the devices have an
error less than or equal to the value indicated (mean±2Σ) .

//5.1.3 Typical curves
----------------------

Unless otherwise specified, all typical curves are given only as design guidelines and are
not tested.

//5.1.4 Loading capacitor
-------------------------

The loading conditions used for pin parameter measurement are shown in Figure 10.

//5.1.5 Pin input voltage
-------------------------

The input voltage measurement on a pin of the device is described in Figure 11.


**Figure 10**. Pin loading conditions 

**Figure 11**. Pin input voltage


             STM32F103xx pin                   STM32F103xx pin
                  │                                 │                    
     C = 50 pF  ┌─┴─┐                             ┌─┴─┐                  
         ┌─────>│   │                      ┌─────>│   │                  
         │      └─┬─┘                      │      └─┬─┘                  
       ──┴──      │                        ◯        │                    
       ──┬──      │                      ░░░░░      │                    
         │        └────────────            │  Vᵢₙ    └────────────        
         ⏚            ai14141              ⏚            ai14142



<!-- *P41*/136 -->
[P41]: #P41
<a id="P41"></a>



//5.1.6 Power supply scheme
---------------------------


**Figure 12**. Power supply scheme

Caution: In Figure 12, the 4.7 µF capacitor must be connected to V DD3 .

//5.1.7 Current consumption measurement
---------------------------------------


**Figure 13**. Current consumption measurement scheme

???????
?
? ????????????
????????
?????????
???
????????????
? ???
???????
???
??
?????????????
??????
????????
????????????
????????????????
????????????
?????????????????
?????????????
???????????
????????????
????????
?
?????????
? ????????????
? ???
? ????
? ????
? ???
????
???
?????????????
??
?????
? ??
?????
??????
? ???
?????
??????
? ??
ai14126
V BAT
V DD
V DDA
I DD _V BAT
I DD

<!-- *P42*/136 -->
[P42]: #P42
<a id="P42"></a>


//5.2 Absolute maximum ratings
------------------------------

Stresses above the absolute maximum ratings listed in Table 7: Voltage characteristics,
Table 8: Current characteristics, and Table 9: Thermal characteristics may cause permanent
damage to the device. These are stress ratings only and functional operation of the device
at these conditions is not implied. Exposure to maximum rating conditions for extended
periods may affect device reliability.



**Table 7**. Voltage characteristics

Symbol Ratings Min Max Unit
V DD –V SS
External main supply voltage (including V DDA
and V DD ) (1)
1. All main power (V DD , V DDA ) and ground (V SS , V SSA ) pins must always be connected to the external power
supply, in the permitted range.
–0.3 4.0
V
V IN (2)
2. V IN maximum must always be respected. Refer to Table 8: Current characteristics for the maximum
allowed injected current values.
Input voltage on five volt tolerant pin V SS − 0.3 V DD + 4.0
Input voltage on any other pin V SS − 0.3 4.0
|ΔV DDx | Variations between different V DD power pins - 50
mV
|V SSX − V SS | Variations between all the different ground pins - 50
V ESD(HBM)
Electrostatic discharge voltage (human body
model)
see Section 5.3.12:
Absolute maximum ratings
(electrical sensitivity)

**Table 8**. Current characteristics

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
2. Negative injection disturbs the analog performance of the device. See note 3 below Table 62 on page 106.
Injected current on five volt tolerant pins (3)
3. Positive injection is not possible on these I/Os. A negative injection is induced by V IN <V SS . I INJ(PIN) must
never be exceeded. Refer to Table 7: Voltage characteristics for the maximum allowed input voltage
values.
-5/+0
Injected current on any other pin (4)
4. A positive injection is induced by V IN >V DD while a negative injection is induced by V IN <V SS . I INJ(PIN) must
never be exceeded. Refer to Table 7: Voltage characteristics for the maximum allowed input voltage
values.
± 5
ΣI INJ(PIN) Total injected current (sum of all I/O and control pins) (5)
5. When several inputs are submitted to a current injection, the maximum ΣI INJ(PIN) is the absolute sum of the
positive and negative injected currents (instantaneous values).
± 25

<!-- *P43*/136 -->
[P43]: #P43
<a id="P43"></a>




//5.3 Operating conditions
--------------------------


//5.3.1 General operating conditions
------------------------------------



**Table 9**. Thermal characteristics

Symbol Ratings Value Unit
T STG Storage temperature range –65 to +150 °C
T J Maximum junction temperature 150 °C

**Table 10**. General operating conditions

Symbol Parameter Conditions Min Max Unit
f HCLK Internal AHB clock frequency 0 72
MHz f PCLK1 Internal APB1 clock frequency 0 36
f PCLK2 Internal APB2 clock frequency 0 72
V DD Standard operating voltage 2 3.6 V
V DDA (1)
1. When the ADC is used, refer to Table 59: ADC characteristics.
Analog operating voltage
(ADC not used)
Must be the same potential
as V DD (2)
2. It is recommended to power V DD and V DDA from the same source. A maximum difference of 300 mV
between V DD and V DDA can be tolerated during power-up and operation.
2 3.6
V
Analog operating voltage
(ADC used)
2.4 3.6
V BAT Backup operating voltage 1.8 3.6 V
P D
Power dissipation at T A =
85 °C for suffix 6 or T A =
105 °C for suffix 7 (3)
3. If T A is lower, higher P D values are allowed as long as T J does not exceed T J max (see Table 6.2: Thermal
characteristics on page 126).
LQFP144 666
mW
LQFP100 434
LQFP64 444
LFBGA100 500
LFBGA144 500
WLCSP64 - 400
T A
Ambient temperature for 6
suffix version
Maximum power dissipation –40 85
°C
Low power dissipation (4)
4. In low power dissipation state, T A can be extended to this range as long as T J does not exceed T J max (see

Table 6.2: Thermal characteristics on page 126).

–40 105
Ambient temperature for 7
suffix version
Maximum power dissipation –40 105
°C
Low power dissipation (4) –40 125
T J Junction temperature range
6 suffix version –40 105
°C
7 suffix version –40 125

<!-- *P44*/136 -->
[P44]: #P44
<a id="P44"></a>


//5.3.2 Operating conditions at power-up / power-down
-----------------------------------------------------

The parameters given in Table 11 are derived from tests performed under the ambient
temperature condition summarized in Table 10.

**Table 11**. Operating conditions at power-up / power-down


//5.3.3 Embedded reset and power control block characteristics
--------------------------------------------------------------

The parameters given in Table 12 are derived from tests performed under ambient
temperature and V DD supply voltage conditions summarized in Table 10.

Symbol Parameter Conditions Min Max Unit
t VDD
V DD rise time rate 0 ∞
µs/V
V DD fall time rate 20 ∞

**Table 12**. Embedded reset and power control block characteristics

Symbol Parameter Conditions Min Typ Max Unit
V PVD
Programmable voltage
detector level selection
PLS[2:0]=000 (rising edge) 2.1 2.18 2.26 V
PLS[2:0]=000 (falling edge) 2 2.08 2.16 V
PLS[2:0]=001 (rising edge) 2.19 2.28 2.37 V
PLS[2:0]=001 (falling edge) 2.09 2.18 2.27 V
PLS[2:0]=010 (rising edge) 2.28 2.38 2.48 V
PLS[2:0]=010 (falling edge) 2.18 2.28 2.38 V
PLS[2:0]=011 (rising edge) 2.38 2.48 2.58 V
PLS[2:0]=011 (falling edge) 2.28 2.38 2.48 V
PLS[2:0]=100 (rising edge) 2.47 2.58 2.69 V
PLS[2:0]=100 (falling edge) 2.37 2.48 2.59 V
PLS[2:0]=101 (rising edge) 2.57 2.68 2.79 V
PLS[2:0]=101 (falling edge) 2.47 2.58 2.69 V
PLS[2:0]=110 (rising edge) 2.66 2.78 2.9 V
PLS[2:0]=110 (falling edge) 2.56 2.68 2.8 V
PLS[2:0]=111 (rising edge) 2.76 2.88 3 V
PLS[2:0]=111 (falling edge) 2.66 2.78 2.9 V
V PVDhyst (2) PVD hysteresis - 100 - mV
V POR/PDR
Power on/power down
reset threshold
Falling edge
1.8 (1)
1. The product behavior is guaranteed by design down to the minimum V POR/PDR value.
1.88 1.96 V
Rising edge 1.84 1.92 2.0 V
V PDRhyst (2) PDR hysteresis - 40 - mV
T RSTTEMPO (2)
2. Guaranteed by design, not tested in production.
Reset temporization 1 2.5 4.5 mS

<!-- *P45*/136 -->
[P45]: #P45
<a id="P45"></a>



//5.3.4 Embedded reference voltage
----------------------------------

The parameters given in Table 13 are derived from tests performed under ambient
temperature and V DD supply voltage conditions summarized in Table 10.


//5.3.5 Supply current characteristics
--------------------------------------

The current consumption is a function of several parameters and factors such as the
operating voltage, ambient temperature, I/O pin loading, device software configuration,
operating frequencies, I/O pin switching rate, program location in memory and executed
binary code.
The current consumption is measured as described in Figure 13: Current consumption
measurement scheme.
All Run-mode current consumption measurements given in this section are performed with a
reduced code that gives a consumption equivalent to Dhrystone 2.1 code.
Maximum current consumption
The MCU is placed under the following conditions:
● All I/O pins are in input mode with a static value at V DD or V SS (no load)
● All peripherals are disabled except when explicitly mentioned
● The Flash memory access time is adjusted to the f HCLK frequency (0 wait state from 0
to 24 MHz, 1 wait state from 24 to 48 MHz and 2 wait states above)
● Prefetch in ON (reminder: this bit must be set before clock setting and bus prescaling)
● When the peripherals are enabled f PCLK1 = f HCLK /2, f PCLK2 = f HCLK
The parameters given in Table 14, Table 15 and Table 16 are derived from tests performed
under ambient temperature and V DD supply voltage conditions summarized in Table 10.

**Table 13**. Embedded internal reference voltage

Symbol Parameter Conditions Min
Typ
Max Unit
V REFINT Internal reference voltage
–40 °C < T A < +105 °C 1.16 1.20 1.26 V
–40 °C < T A < +85 °C 1.16 1.20 1.24 V
T S_vrefint (1)
1. Shortest sampling time can be determined in the application by multiple iterations.
ADC sampling time when
reading the internal reference
voltage
- 5.1 17.1 (2)
2. Guaranteed by design, not tested in production.
µs
V RERINT (2)
Internal reference voltage
spread over the temperature
range
V DD = 3 V ±10 mV - - 10 mV
T Coeff (2) Temperature coefficient - - 100 ppm/°C

<!-- *P46*/136 -->
[P46]: #P46
<a id="P46"></a>


CIAO

**Table 14**. Maximum current consumption in Run mode, code with data processing

running from Flash
Symbol Parameter Conditions f HCLK
Max (1)
1. Based on characterization, not tested in production.
Unit
T A = 85 °C T A = 105 °C
I DD
Supply current in
Run mode
External clock (2) , all
peripherals enabled
2. External clock is 8 MHz and PLL is on when f HCLK > 8 MHz.
72 MHz 69 70
mA
48 MHz 50 50.5
36 MHz 39 39.5
24 MHz 27 28
16 MHz 20 20.5
8 MHz 11 11.5
External clock (2) , all
peripherals disabled
72 MHz 37 37.5
48 MHz 28 28.5
36 MHz 22 22.5
24 MHz 16.5 17
16 MHz 12.5 13
8 MHz 8 8

**Table 15**. Maximum current consumption in Run mode, code with data processing

running from RAM
Symbol Parameter Conditions f HCLK
Max (1)
1. Data based on characterization results, tested in production at V DD max, f HCLK max.
Unit
T A = 85 °C T A = 105 °C
I DD
Supply current
in Run mode
External clock (2) , all
peripherals enabled
2. External clock is 8 MHz and PLL is on when f HCLK > 8 MHz.
72 MHz 66 67
mA
48 MHz 43.5 45.5
36 MHz 33 35
24 MHz 23 24.5
16 MHz 16 18
8 MHz 9 10.5
External clock (2) , all
peripherals disabled
72 MHz 33 33.5
48 MHz 23 23.5
36 MHz 18 18.5
24 MHz 13 13.5
16 MHz 10 10.5
8 MHz 6 6.5

<!-- *P47*/136 -->
[P47]: #P47
<a id="P47"></a>



**Figure 14**. Typical current consumption in Run mode versus frequency (at 3.6 V) -

code with data processing running from RAM, peripherals enabled

**Figure 15**. Typical current consumption in Run mode versus frequency (at 3.6 V)-

code with data processing running from RAM, peripherals disabled
0
10
20
30
40
50
60
70
-45 25 70 85 105
Temperature (°C)
Consumption (mA)
8 MHz
16 MHz
24 MHz
36 MHz
48 MHz
72 MHz
0
5
10
15
20
25
30
35
-45 25 70 85 105
Temperature (°C)
Consumption (mA)
8 MHz
16 MHz
24 MHz
36 MHz
48 MHz
72 MHz

<!-- *P48*/136 -->
[P48]: #P48
<a id="P48"></a>



**Table 16**. Maximum current consumption in Sleep mode, code running from Flash or

RAM
Symbol Parameter Conditions f HCLK
Max (1)
1. Based on characterization, tested in production at V DD max, f HCLK max with peripherals enabled.
Unit
T A = 85 °C T A = 105 °C
I DD
Supply current
in Sleep mode
External clock (2) , all
peripherals enabled
2. External clock is 8 MHz and PLL is on when f HCLK > 8 MHz.
72 MHz 45 46
mA
48 MHz 31 32
36 MHz 24 25
24 MHz 17 17.5
16 MHz 12.5 13
8 MHz 8 8
External clock (2) , all
peripherals disabled
72 MHz 8.5 9
48 MHz 7 7.5
36 MHz 6 6.5
24 MHz 5 5.5
16 MHz 4.5 5
8 MHz 4 4

<!-- *P49*/136 -->
[P49]: #P49
<a id="P49"></a>




**Figure 16**. Typical current consumption on V BAT with RTC on vs. temperature at

different V BAT
values

**Table 17**. Typical and maximum current consumptions in Stop and Standby modes

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
Supply current in
Stop mode
Regulator in run mode, low-speed
and high-speed internal RC
oscillators and high-speed oscillator
OFF (no independent watchdog)
34.5 35 379 1130
µA
Regulator in low-power mode, low-
speed and high-speed internal RC
oscillators and high-speed oscillator
OFF (no independent watchdog)
24.5 25 365 1110
Supply current in
Standby mode
Low-speed internal RC oscillator
and independent watchdog ON
3 3.8 - -
Low-speed internal RC oscillator
ON, independent watchdog OFF
2.8 3.6 - -
Low-speed internal RC oscillator
and independent watchdog OFF,
low-speed oscillator and RTC OFF
1.9 2.1 5 (2) 6.5 (2)
I DD_VBAT
Backup domain
supply current
Low-speed oscillator and RTC ON 1.05 1.1 1.4 2 (2) 2.3 (2)
1. Typical values are measured at T A = 25 °C.
2. Based on characterization, not tested in production.
0
0.5
1
1.5
2
2.5
–45 25 85 105
Temperature (°C)
Consumption (µA)
1.8 V
2 V
2.4 V
3.3 V
3.6 V
ai17337

<!-- *P50*/136 -->
[P50]: #P50
<a id="P50"></a>


**Figure 17**. Typical current consumption in Stop mode with regulator in run mode

versus temperature at different V DD values
0
100
200
300
400
500
600
700
-45 25 70 85 105
Temperature (°C)
Consumption (µA)
2.4V
2.7V
3.0V
3.3V
3.6V
?
???
???
???
???
???
???
???? ??? ??? ????
????????????????
????????????????
????
????
????
????
????
???????

<!-- *P51*/136 -->
[P51]: #P51
<a id="P51"></a>



**Figure 18**. Typical current consumption in Stop mode with regulator in low-power

mode versus temperature at different V DD values
0
100
200
300
400
500
600
700
-45 25 70 85 105
Temperature (°C)
Consumption (µA)
2.4V
2.7V
3.0V
3.3V
3.6V

<!-- *P52*/136 -->
[P52]: #P52
<a id="P52"></a>


**Figure 19**. Typical current consumption in Standby mode versus temperature at

different V DD values
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
-45 25 70 85 105
Temperature (°C)
Consumption (µA)
2.4V
2.7V
3.0V
3.3V
3.6V
?
???
?
???
?
???
?
???
?
???
???? ??? ??? ???
????????????????
????????????????
????
????
????
????
????
???????

<!-- *P53*/136 -->
[P53]: #P53
<a id="P53"></a>


Typical current consumption
The MCU is placed under the following conditions:
● All I/O pins are in input mode with a static value at V DD or V SS (no load).
● All peripherals are disabled except if it is explicitly mentioned.
● The Flash access time is adjusted to f HCLK frequency (0 wait state from 0 to 24 MHz, 1
wait state from 24 to 48 MHZ and 2 wait states above).
● Ambient temperature and V DD supply voltage conditions summarized in Table 10.
● Prefetch is ON (Reminder: this bit must be set before clock setting and bus prescaling)
When the peripherals are enabled f PCLK1 = f HCLK /4, f PCLK 2 = f HCLK /2, f ADCCLK = f PCLK2 /4


**Table 18**. Typical current consumption in Run mode, code with data processing

running from Flash
Symbol Parameter Conditions f HCLK
Typ (1)
1. Typical values are measures at T A = 25 °C, V DD = 3.3 V.
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
72 MHz 51 30.5
mA
48 MHz 34.6 20.7
36 MHz 26.6 16.2
24 MHz 18.5 11.4
16 MHz 12.8 8.2
8 MHz 7.2 5
4 MHz 4.2 3.1
2 MHz 2.7 2.1
1 MHz 2 1.7
500 kHz 1.6 1.4
125 kHz 1.3 1.2
Running on high
speed internal RC
(HSI), AHB
prescaler used to
reduce the
frequency
64 MHz 45 27
mA
48 MHz 34 20.1
36 MHz 26 15.6
24 MHz 17.9 10.8
16 MHz 12.2 7.6
8 MHz 6.6 4.4
4 MHz 3.6 2.5
2 MHz 2.1 1.5
1 MHz 1.4 1.1
500 kHz 1 0.8
125 kHz 0.7 0.6

<!-- *P54*/136 -->
[P54]: #P54
<a id="P54"></a>



**Table 19**. Typical current consumption in Sleep mode, code running from Flash or

RAM
Symbol Parameter Conditions f HCLK
Typ (1)
1. Typical values are measures at T A = 25 °C, V DD = 3.3 V.
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
72 MHz 29.5 6.4
mA
48 MHz 20 4.6
36 MHz 15.1 3.6
24 MHz 10.4 2.6
16 MHz 7.2 2
8 MHz 3.9 1.3
4 MHz 2.6 1.2
2 MHz 1.85 1.15
1 MHz 1.5 1.1
500 kHz 1.3 1.05
125 kHz 1.2 1.05
Running on high
speed internal RC
(HSI), AHB prescaler
used to reduce the
frequency
64 MHz 25.6 5.1
48 MHz 19.4 4
36 MHz 14.5 3
24 MHz 9.8 2
16 MHz 6.6 1.4
8 MHz 3.3 0.7
4 MHz 2 0.6
2 MHz 1.25 0.55
1 MHz 0.9 0.5
500 kHz 0.7 0.45
125 kHz 0.6 0.45

<!-- *P55*/136 -->
[P55]: #P55
<a id="P55"></a>


On-chip peripheral current consumption
The current consumption of the on-chip peripherals is given in Table 20. The MCU is placed
under the following conditions:
● all I/O pins are in input mode with a static value at V DD or V SS (no load)
● all peripherals are disabled unless otherwise mentioned
● the given value is calculated by measuring the current consumption
– with all peripherals clocked off
– with only one peripheral clocked on
● ambient operating temperature and V DD supply voltage conditions summarized in
Table 7


**Table 20**. Peripheral current consumption (1)

Peripheral Typical consumption at 25 °C Unit
APB1
TIM2 1.2
mA
TIM3 1.2
TIM4 1.2
TIM5 1.2
TIM6 0.4
TIM7 0.4
SPI2 0.2
SPI3 0.2
USART2 0.4
USART3 0.4
UART4 0.5
UART5 0.6
I2C1 0.4
I2C2 0.4
USB 0.65
CAN 0.72
DAC 0.72

<!-- *P56*/136 -->
[P56]: #P56
<a id="P56"></a>


//5.3.6 External clock source characteristics
---------------------------------------------

High-speed external user clock generated from an external source
The characteristics given in Table 21 result from tests performed using an high-speed
external clock source, and under ambient temperature and supply voltage conditions
summarized in Table 10.

APB2
GPIOA 0.55
mA
GPIOB 0.72
GPIOC 0.72
GPIOD 0.55
GPIOE 1
GPIOF 0.72
GPIOG 1
ADC1 (2) 1.9
ADC2 1.7
TIM1 1.8
SPI1 0.4
TIM8 1.7
USART1 0.9
ADC3 1.7
1. f HCLK = 72 MHz, f APB1 = f HCLK /2, f APB2 = f HCLK , default prescaler value for each peripheral.
2. Specific conditions for ADC: f HCLK = 56 MHz, f APB1 = f HCLK /2, f APB2 = f HCLK , f ADCCLK = f APB2/4 , ADON bit
in the ADC_CR2 register is set to 1.

Table 20. Peripheral current consumption (1) (continued)

Peripheral Typical consumption at 25 °C Unit

**Table 21**. High-speed external user clock characteristics

Symbol Parameter Conditions Min Typ Max Unit
f HSE_ext
User external clock source
frequency (1)
1. Guaranteed by design, not tested in production.
1 8 25 MHz
V HSEH OSC_IN input pin high level voltage 0.7V DD - V DD
V
V HSEL OSC_IN input pin low level voltage V SS - 0.3V DD
t w(HSE)
t w(HSE)
OSC_IN high or low time (1) 5 - -
ns
t r(HSE)
t f(HSE)
OSC_IN rise or fall time (1) - - 20
C in(HSE) OSC_IN input capacitance (1) - 5 - pF
DuCy (HSE) Duty cycle 45 - 55 %
I L OSC_IN Input leakage current V SS ≤V IN ≤V DD - - ±1 µA

<!-- *P57*/136 -->
[P57]: #P57
<a id="P57"></a>


Low-speed external user clock generated from an external source
The characteristics given in Table 22 result from tests performed using an low-speed
external clock source, and under ambient temperature and supply voltage conditions
summarized in Table 10.


**Figure 20**. High-speed external clock source AC timing diagram


**Table 22**. Low-speed external user clock characteristics

Symbol Parameter Conditions Min Typ Max Unit
f LSE_ext
User External clock source
frequency (1)
1. Guaranteed by design, not tested in production.
- 32.768 1000 kHz
V LSEH
OSC32_IN input pin high level
voltage
0.7V DD - V DD
V
V LSEL
OSC32_IN input pin low level
voltage
V SS - 0.3V DD
t w(LSE)
t w(LSE)
OSC32_IN high or low time (1) 450 - -
ns
t r(LSE)
t f(LSE)
OSC32_IN rise or fall time (1) - - 50
C in(LSE) OSC32_IN input capacitance (1) - 5 - pF
DuCy (LSE) Duty cycle 30 - 70 %
I L OSC32_IN Input leakage current V SS ≤V IN ≤V DD - - ±1 µA
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

<!-- *P58*/136 -->
[P58]: #P58
<a id="P58"></a>


**Figure 21**. Low-speed external clock source AC timing diagram

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

<!-- *P59*/136 -->
[P59]: #P59
<a id="P59"></a>


High-speed external clock generated from a crystal/ceramic resonator
The high-speed external (HSE) clock can be supplied with a 4 to 16 MHz crystal/ceramic
resonator oscillator. All the information given in this paragraph are based on
characterization results obtained with typical external components specified in Table 23. In
the application, the resonator and the load capacitors have to be placed as close as
possible to the oscillator pins in order to minimize output distortion and startup stabilization
time. Refer to the crystal resonator manufacturer for more details on the resonator
characteristics (frequency, package, accuracy).

For C L1 and C L2 , it is recommended to use high-quality external ceramic capacitors in the
5 pF to 25 pF range (typ.), designed for high-frequency applications, and selected to match
the requirements of the crystal or resonator (see Figure 22). C L1 and C L2 are usually the
same size. The crystal manufacturer typically specifies a load capacitance which is the
series combination of C L1 and C L2 . PCB and MCU pin capacitance must be included (10 pF
can be used as a rough estimate of the combined pin and board capacitance) when sizing
C L1 and C L2 . Refer to the application note AN2867 “Oscillator design guide for ST
microcontrollers” available from the ST website www.st.com.

**Figure 22**. Typical application with an 8 MHz crystal

1. R EXT value depends on the crystal characteristics.

**Table 23**. HSE 4-16 MHz oscillator characteristics (1)(2)

1. Resonator characteristics given by the crystal/ceramic resonator manufacturer.
2. Based on characterization results, not tested in production.
Symbol Parameter Conditions Min Typ Max Unit
f OSC_IN Oscillator frequency 4 8 16 MHz
R F Feedback resistor - 200 - kΩ
C
Recommended load capacitance
versus equivalent serial
resistance of the crystal (R S ) (3)
3. The relatively low value of the RF resistor offers a good protection against issues resulting from use in a
humid environment, due to the induced leakage and the bias condition change. However, it is
recommended to take this point into account if the MCU is used in tough humidity conditions.
R S = 30 Ω - 30 - pF
i 2 HSE driving current
V DD = 3.3 V, V IN = V SS
with 30 pF load
- - 1 mA
g m Oscillator transconductance Startup 25 - mA/V
t SU(HSE) (4)
4. t SU(HSE) is the startup time measured from the moment it is enabled (by software) to a stabilized 8 MHz
oscillation is reached. This value is measured for a standard crystal resonator and it can vary significantly
with the crystal manufacturer
Startup time V DD is stabilized - 2 - ms
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

<!-- *P60*/136 -->
[P60]: #P60
<a id="P60"></a>

Low-speed external clock generated from a crystal/ceramic resonator
The low-speed external (LSE) clock can be supplied with a 32.768 kHz crystal/ceramic
resonator oscillator. All the information given in this paragraph are based on
characterization results obtained with typical external components specified in Table 24. In
the application, the resonator and the load capacitors have to be placed as close as
possible to the oscillator pins in order to minimize output distortion and startup stabilization
time. Refer to the crystal resonator manufacturer for more details on the resonator
characteristics (frequency, package, accuracy).

Note: For C L1 and C L2 , it is recommended to use high-quality ceramic capacitors in the 5 pF to
15 pF range selected to match the requirements of the crystal or resonator (see Figure 23).
C L1 and C L2, are usually the same size. The crystal manufacturer typically specifies a load
capacitance which is the series combination of C L1 and C L2 .
Load capacitance C L has the following formula: C L = C L1 x C L2 / (C L1 + C L2 ) + C stray where
C stray is the pin capacitance and board or trace PCB-related capacitance. Typically, it is
between 2 pF and 7 pF.
Caution: To avoid exceeding the maximum value of C L1 and C L2 (15 pF) it is strongly recommended
to use a resonator with a load capacitance C L ≤ 7 pF. Never use a resonator with a load
capacitance of 12.5 pF.
Example: if you choose a resonator with a load capacitance of C L = 6 pF, and C stray = 2 pF,
then C L1 = C L2 = 8 pF.

**Table 24**. LSE oscillator characteristics (f LSE = 32.768 kHz) (1)(2)

Symbol Parameter Conditions Min Typ Max Unit
R F Feedback resistor - 5 - MΩ
C (2)
Recommended load capacitance
versus equivalent serial
resistance of the crystal (R S )
R S = 30 kΩ - - 15 pF
I 2 LSE driving current V DD = 3.3 V, V IN = V SS - - 1.4 µA
g m Oscillator transconductance 5 - - µA/V
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
1. Based on characterization, not tested in production.
2. Refer to the note and caution paragraphs below the table, and to the application note AN2867 “Oscillator design guide for
ST microcontrollers”.
3. t SU(LSE) is the startup time measured from the moment it is enabled (by software) until a stabilized 32.768 kHz oscillation is
reached. This value is measured for a standard crystal and it can vary significantly with the crystal manufacturer, PCB
layout and humidity.

<!-- *P61*/136 -->
[P61]: #P61
<a id="P61"></a>



**Figure 23**. Typical application with a 32.768 kHz crystal


//5.3.7 Internal clock source characteristics
---------------------------------------------

The parameters given in Table 25 are derived from tests performed under ambient
temperature and V DD supply voltage conditions summarized in Table 10.
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

**Table 25**. HSI oscillator characteristics (1)

1. V DD = 3.3 V, T A = –40 to 105 °C unless otherwise specified.
Symbol Parameter Conditions Min Typ Max Unit
f HSI Frequency - 8 MHz
DuCy (HSI) Duty cycle 45 - 55 %
ACC HSI
Accuracy of the HSI
oscillator
User-trimmed with the RCC_CR
register (2)
2. Refer to application note AN2868 “STM32F10xxx internal RC oscillator (HSI) calibration” available from
the ST website www.st.com.
- - 1 (3)
3. Guaranteed by design, not tested in production.
%
Factory-
calibrated (4)
4. Based on characterization, not tested in production.
T A = –40 to 105 °C –2 - 2.5 %
T A = –10 to 85 °C –1.5 - 2.2 %
T A = 0 to 70 °C –1.3 - 2 %
T A = 25 °C –1.1 - 1.8 %
t su(HSI) (4)
HSI oscillator
startup time
1 - 2 µs
I DD(HSI) (4)
HSI oscillator power
consumption
- 80 100 µA

<!-- *P62*/136 -->
[P62]: #P62
<a id="P62"></a>

Low-speed internal (LSI) RC oscillator

Wakeup time from low-power mode
The wakeup times given in Table 27 is measured on a wakeup phase with a 8-MHz HSI RC
oscillator. The clock source used to wake up the device depends from the current operating
mode:
● Stop or Standby mode: the clock source is the RC oscillator
● Sleep mode: the clock source is the clock that was set before entering Sleep mode.
All timings are derived from tests performed under ambient temperature and V DD supply
voltage conditions summarized in Table 10.


**Table 26**. LSI oscillator characteristics (1)

1. V DD = 3 V, T A = –40 to 105 °C unless otherwise specified.
Symbol Parameter Min Typ Max Unit
f LSI (2)
2. Based on characterization, not tested in production.
Frequency 30 40 60 kHz
t su(LSI) (3)
3. Guaranteed by design, not tested in production.
LSI oscillator startup time - - 85 µs
I DD(LSI) (3) LSI oscillator power consumption - 0.65 1.2 µA

**Table 27**. Low-power mode wakeup timings

Symbol Parameter Typ Unit
t WUSLEEP (1)
1. The wakeup times are measured from the wakeup event to the point in which the user application code
reads the first instruction.
Wakeup from Sleep mode 1.8 µs
t WUSTOP (1)
Wakeup from Stop mode (regulator in run mode) 3.6
µs
Wakeup from Stop mode (regulator in low power mode) 5.4
t WUSTDBY (1) Wakeup from Standby mode 50 µs

<!-- *P63*/136 -->
[P63]: #P63
<a id="P63"></a>



//5.3.8 PLL characteristics
---------------------------

The parameters given in Table 28 are derived from tests performed under ambient
temperature and V DD supply voltage conditions summarized in Table 10.


//5.3.9 Memory characteristics
------------------------------

Flash memory
The characteristics are given at T A = –40 to 105 °C unless otherwise specified.


**Table 28**. PLL characteristics

Symbol Parameter
Value
Unit
Min Typ Max (1)
1. Based on characterization, not tested in production.
f PLL_IN
PLL input clock (2)
2. Take care of using the appropriate multiplier factors so as to have PLL input clock values compatible with
the range defined by f PLL_OUT .
1 8.0 25 MHz
PLL input clock duty cycle 40 - 60 %
f PLL_OUT PLL multiplier output clock 16 - 72 MHz
t LOCK PLL lock time - - 200 µs
Jitter Cycle-to-cycle jitter - - 300 ps

**Table 29**. Flash memory characteristics

Symbol Parameter Conditions Min Typ Max (1)
1. Guaranteed by design, not tested in production.
Unit
t prog 16-bit programming time T A = –40 to +105 °C 40 52.5 70 µs
t ERASE Page (2 KB) erase time T A = –40 to +105 °C 20 - 40 ms
t ME Mass erase time T A = –40 to +105 °C 20 - 40 ms
I DD Supply current
Read mode
f HCLK = 72 MHz with 2 wait
states, V DD = 3.3 V
- - 28 mA
Write mode
f HCLK = 72 MHz, V DD = 3.3 V
- - 7 mA
Erase mode
f HCLK = 72 MHz, V DD = 3.3 V
- - 5 mA
Power-down mode / Halt,
V DD = 3.0 to 3.6 V
- - 50 µA
V prog Programming voltage 2 - 3.6 V

<!-- *P64*/136 -->
[P64]: #P64
<a id="P64"></a>



**Table 30**. Flash memory endurance and data retention

Symbol Parameter Conditions
Value
Unit
Min (1)
1. Based on characterization not tested in production.
N END Endurance
T A = –40 to +85 °C (6 suffix versions)
T A = –40 to +105 °C (7 suffix versions)
10 kcycles
t RET Data retention
1 kcycle (2) at T A = 85 °C
2. Cycling performed over the whole temperature range.
30
Years 1 kcycle (2) at T A = 105 °C 10
10 kcycles (2) at T A = 55 °C 20

<!-- *P65*/136 -->
[P65]: #P65
<a id="P65"></a>



//5.3.10 FSMC characteristics
-----------------------------

Asynchronous waveforms and timings
Figure 24 through Figure 27 represent asynchronous waveforms and Table 31 through
Table 34 provide the corresponding timings. The results shown in these tables are obtained
with the following FSMC configuration:
● AddressSetupTime = 0
● AddressHoldTime = 1
● DataSetupTime = 1

**Figure 24**. Asynchronous non-multiplexed SRAM/PSRAM/NOR read waveforms

1. Mode 2/B, C and D only. In Mode 1, FSMC_NADV is not used.
????
???????
?????????????
????????????
? ????????
? ??????????
????????
???????
????????????
? ???????
????????
? ???????????
? ?????
?????????
??????
?
? ?????????
? ?????????
? ???????????
? ????????
? ?????????
? ????????????
????????? ???
? ??????????
? ???????

<!-- *P66*/136 -->
[P66]: #P66
<a id="P66"></a>



**Figure 25**. Asynchronous non-multiplexed SRAM/PSRAM/NOR write waveforms

1. Mode 2/B, C and D only. In Mode 1, FSMC_NADV is not used.

**Table 31**. Asynchronous non-multiplexed SRAM/PSRAM/NOR read timings (1)

1. C L = 15 pF.
Symbol Parameter Min Max Unit
t w(NE) FSMC_NE low time 5t HCLK – 1.5 5t HCLK + 2 ns
t v(NOE_NE) FSMC_NEx low to FSMC_NOE low 0.5 1.5 ns
t w(NOE) FSMC_NOE low time 5t HCLK – 1.5 5t HCLK + 1.5 ns
t h(NE_NOE) FSMC_NOE high to FSMC_NE high hold time –1.5 - ns
t v(A_NE) FSMC_NEx low to FSMC_A valid - 0 ns
t h(A_NOE) Address hold time after FSMC_NOE high 0.1 - ns
t v(BL_NE) FSMC_NEx low to FSMC_BL valid - 0 ns
t h(BL_NOE) FSMC_BL hold time after FSMC_NOE high 0 - ns
t su(Data_NE) Data to FSMC_NEx high setup time 2t HCLK + 25 - ns
t su(Data_NOE) Data to FSMC_NOEx high setup time 2t HCLK + 25 - ns
t h(Data_NOE) Data hold time after FSMC_NOE high 0 - ns
t h(Data_NE) Data hold time after FSMC_NEx high 0 - ns
t v(NADV_NE) FSMC_NEx low to FSMC_NADV low - 5 ns
t w(NADV) FSMC_NADV low time - t HCLK + 1.5 ns
NBL
Data
FSMC_NEx
FSMC_NBL[3:0]
FSMC_D[15:0]
t v(BL_NE)
t h(Data_NWE)
FSMC_NOE
Address FSMC_A[25:0]
t v(A_NE)
t w(NWE)
FSMC_NWE
t v(NWE_NE) t h(NE_NWE)
t h(A_NWE)
t h(BL_NWE)
t v(Data_NE)
t w(NE)
ai14990
FSMC_NADV (1)
t v(NADV_NE)
t w(NADV)

<!-- *P67*/136 -->
[P67]: #P67
<a id="P67"></a>




**Figure 26**. Asynchronous multiplexed PSRAM/NOR read waveforms


**Table 32**. Asynchronous non-multiplexed SRAM/PSRAM/NOR write timings (1)(2)

1. C L = 15 pF.
2. Based on characterization, not tested in production.
Symbol Parameter Min Max Unit
t w(NE) FSMC_NE low time 3t HCLK – 1 3t HCLK + 2 ns
t v(NWE_NE) FSMC_NEx low to FSMC_NWE low t HCLK – 0.5 t HCLK + 1.5 ns
t w(NWE) FSMC_NWE low time t HCLK – 0.5 t HCLK + 1.5 ns
t h(NE_NWE) FSMC_NWE high to FSMC_NE high hold time t HCLK - ns
t v(A_NE) FSMC_NEx low to FSMC_A valid - 7.5 ns
t h(A_NWE) Address hold time after FSMC_NWE high t HCLK - ns
t v(BL_NE) FSMC_NEx low to FSMC_BL valid - 0 ns
t h(BL_NWE) FSMC_BL hold time after FSMC_NWE high t HCLK – 0.5 - ns
t v(Data_NE) FSMC_NEx low to Data valid - t HCLK + 7 ns
t h(Data_NWE) Data hold time after FSMC_NWE high t HCLK - ns
t v(NADV_NE) FSMC_NEx low to FSMC_NADV low - 5.5 ns
t w(NADV) FSMC_NADV low time - t HCLK + 1.5 ns
NBL
Data
FSMC_NBL[1:0]
FSMC_ AD[15:0]
t v(BL_NE)
t h(Data_NE)
Address
FSMC_A[25:16]
t v(A_NE)
FSMC_NWE
t v(A_NE)
ai14892b
Address
FSMC_NADV
t v(NADV_NE)
t w(NADV)
t su(Data_NE)
t h(AD_NADV)
FSMC_NE
FSMC_NOE
t w(NE)
t w(NOE)
t v(NOE_NE) t h(NE_NOE)
t h(A_NOE)
t h(BL_NOE)
t su(Data_NOE) t h(Data_NOE)

<!-- *P68*/136 -->
[P68]: #P68
<a id="P68"></a>



**Figure 27**. Asynchronous multiplexed PSRAM/NOR write waveforms


**Table 33**. Asynchronous multiplexed PSRAM/NOR read timings (1)(2)

1. C L = 15 pF.
2. Based on characterization, not tested in production.
Symbol Parameter Min Max Unit
t w(NE) FSMC_NE low time 7t HCLK – 2 7t HCLK + 2 ns
t v(NOE_NE) FSMC_NEx low to FSMC_NOE low 3t HCLK – 0.5 3t HCLK + 1.5 ns
t w(NOE) FSMC_NOE low time 4t HCLK – 1 4t HCLK + 2 ns
t h(NE_NOE) FSMC_NOE high to FSMC_NE high hold time –1 - ns
t v(A_NE) FSMC_NEx low to FSMC_A valid - 0 ns
t v(NADV_NE) FSMC_NEx low to FSMC_NADV low 3 5 ns
t w(NADV) FSMC_NADV low time t HCLK –1.5 t HCLK + 1.5 ns
t h(AD_NADV)
FSMC_AD (address) valid hold time after
FSMC_NADV high
t HCLK - ns
t h(A_NOE) Address hold time after FSMC_NOE high t HCLK -2 - ns
t h(BL_NOE) FSMC_BL hold time after FSMC_NOE high 0 - ns
t v(BL_NE) FSMC_NEx low to FSMC_BL valid - 0 ns
t su(Data_NE) Data to FSMC_NEx high setup time 2t HCLK + 24 ns
t su(Data_NOE) Data to FSMC_NOE high setup time 2t HCLK + 25 - ns
t h(Data_NE) Data hold time after FSMC_NEx high 0 - ns
t h(Data_NOE) Data hold time after FSMC_NOE high 0 - ns
NBL
Data
FSMC_NEx
FSMC_NBL[1:0]
FSMC_ AD[15:0]
t v(BL_NE)
t h(Data_NWE)
FSMC_NOE
Address
FSMC_A[25:16]
t v(A_NE)
t w(NWE)
FSMC_NWE
t v(NWE_NE) t h(NE_NWE)
t h(A_NWE)
t h(BL_NWE)
t v(A_NE)
t w(NE)
ai14891B
Address
FSMC_NADV
t v(NADV_NE)
t w(NADV)
t v(Data_NADV)
t h(AD_NADV)

<!-- *P69*/136 -->
[P69]: #P69
<a id="P69"></a>



Synchronous waveforms and timings
Figure 28 through Figure 31 represent synchronous waveforms and Table 36 through
Table 38 provide the corresponding timings. The results shown in these tables are obtained
with the following FSMC configuration:
● BurstAccessMode = FSMC_BurstAccessMode_Enable;
● MemoryType = FSMC_MemoryType_CRAM;
● WriteBurst = FSMC_WriteBurst_Enable;
● CLKDivision = 1; (0 is not supported, see the STM32F10xxx reference manual)
● DataLatency = 1 for NOR Flash; DataLatency = 0 for PSRAM

**Table 34**. Asynchronous multiplexed PSRAM/NOR write timings (1)(2)

1. C L = 15 pF.
2. Based on characterization, not tested in production.
Symbol Parameter Min Max Unit
t w(NE) FSMC_NE low time 5t HCLK – 1 5t HCLK + 2 ns
t v(NWE_NE) FSMC_NEx low to FSMC_NWE low 2t HCLK 2t HCLK + 1 ns
t w(NWE) FSMC_NWE low time 2t HCLK – 1 2t HCLK + 2 ns
t h(NE_NWE) FSMC_NWE high to FSMC_NE high hold time t HCLK – 1 - ns
t v(A_NE) FSMC_NEx low to FSMC_A valid - 7 ns
t v(NADV_NE) FSMC_NEx low to FSMC_NADV low 3 5 ns
t w(NADV) FSMC_NADV low time t HCLK – 1 t HCLK + 1 ns
t h(AD_NADV)
FSMC_AD (address) valid hold time after
FSMC_NADV high
t HCLK – 3 - ns
t h(A_NWE) Address hold time after FSMC_NWE high 4t HCLK - ns
t v(BL_NE) FSMC_NEx low to FSMC_BL valid - 1.6 ns
t h(BL_NWE) FSMC_BL hold time after FSMC_NWE high t HCLK – 1.5 - ns
t v(Data_NADV) FSMC_NADV high to Data valid - t HCLK + 1.5 ns
t h(Data_NWE) Data hold time after FSMC_NWE high t HCLK – 5 - ns

<!-- *P70*/136 -->
[P70]: #P70
<a id="P70"></a>


**Figure 28**. Synchronous multiplexed NOR/PSRAM read timings

????????
????????
?????????
?????????????
????????
????????????? ???????? ?? ??
??????????
????????????????????????????
??????????
????????????????????????????
? ?????? ? ??????
????????????????
???????????
? ???????????? ? ????????????
? ?????????????
? ??????????
? ?????????????
? ???????????
? ????????????
? ????????????
? ???????????
? ????????????
? ????????????
? ???????????
? ????????????
? ???????????
? ???????????????
? ??????????????
? ???????????????
? ??????????????
? ??????????????? ? ??????????????
????????
??

<!-- *P71*/136 -->
[P71]: #P71
<a id="P71"></a>




**Table 35**. Synchronous multiplexed NOR/PSRAM read timings (1)(2)

1. C L = 15 pF.
2. Based on characterization, not tested in production.
Symbol Parameter Min Max Unit
t w(CLK) FSMC_CLK period 27.7 - ns
t d(CLKL-NExL) FSMC_CLK low to FSMC_NEx low (x = 0...2) - 1.5 ns
t d(CLKL-NExH) FSMC_CLK low to FSMC_NEx high (x = 0...2) 2 - ns
t d(CLKL-NADVL) FSMC_CLK low to FSMC_NADV low - 4 ns
t d(CLKL-NADVH) FSMC_CLK low to FSMC_NADV high 5 - ns
t d(CLKL-AV) FSMC_CLK low to FSMC_Ax valid (x = 16...25) - 0 ns
t d(CLKL-AIV) FSMC_CLK low to FSMC_Ax invalid (x = 16...25) 2 - ns
t d(CLKL-NOEL) FSMC_CLK low to FSMC_NOE low - 1 ns
t d(CLKL-NOEH) FSMC_CLK low to FSMC_NOE high 1.5 - ns
t d(CLKL-ADV) FSMC_CLK low to FSMC_AD[15:0] valid - 12 ns
t d(CLKL-ADIV) FSMC_CLK low to FSMC_AD[15:0] invalid 0 - ns
t su(ADV-CLKH)
FSMC_A/D[15:0] valid data before FSMC_CLK
high
6 - ns
t h(CLKH-ADV) FSMC_A/D[15:0] valid data after FSMC_CLK high 0 - ns
t su(NWAITV-CLKH) FSMC_NWAIT valid before FSMC_CLK high 8 ns
t h(CLKH-NWAITV) FSMC_NWAIT valid after FSMC_CLK high 2 ns

<!-- *P72*/136 -->
[P72]: #P72
<a id="P72"></a>


**Figure 29**. Synchronous multiplexed PSRAM write timings

????????
????????
?????????
?????????????
????????
????????????? ???????? ?? ??
??????????
????????????????????????????
? ?????? ? ??????
????????????????
???????????
? ????????????
? ????????????
? ?????????????
? ??????????
? ?????????????
? ???????????
? ???????????? ? ????????????
? ????????????
? ???????????
? ???????????? ? ????????????
? ??????????????? ? ??????????????
????????
? ????????????
????????

<!-- *P73*/136 -->
[P73]: #P73
<a id="P73"></a>




**Table 36**. Synchronous multiplexed PSRAM write timings (1)(2)

1. C L = 15 pF.
2. Based on characterization, not tested in production.
Symbol Parameter Min Max Unit
t w(CLK) FSMC_CLK period 27.7 - ns
t d(CLKL-NExL) FSMC_CLK low to FSMC_Nex low (x = 0...2) - 2 ns
t d(CLKL-NExH) FSMC_CLK low to FSMC_NEx high (x = 0...2) 2 - ns
t d(CLKL-NADVL) FSMC_CLK low to FSMC_NADV low - 4 ns
t d(CLKL-NADVH) FSMC_CLK low to FSMC_NADV high 5 - ns
t d(CLKL-AV) FSMC_CLK low to FSMC_Ax valid (x = 16...25) - 0 ns
t d(CLKL-AIV) FSMC_CLK low to FSMC_Ax invalid (x = 16...25) 2 - ns
t d(CLKL-NWEL) FSMC_CLK low to FSMC_NWE low - 1 ns
t d(CLKL-NWEH) FSMC_CLK low to FSMC_NWE high 1 - ns
t d(CLKL-ADV) FSMC_CLK low to FSMC_AD[15:0] valid 12 ns
t d(CLKL-ADIV) FSMC_CLK low to FSMC_AD[15:0] invalid 3 ns
t d(CLKL-Data) FSMC_A/D[15:0] valid after FSMC_CLK low 6 ns
t d(CLKL-NBLH) FSMC_CLK low to FSMC_NBL high 1 - ns
t su(NWAITV-CLKH) FSMC_NWAIT valid before FSMC_CLK high 7 ns
t h(CLKH-NWAITV) FSMC_NWAIT valid after FSMC_CLK high 2 ns

<!-- *P74*/136 -->
[P74]: #P74
<a id="P74"></a>


**Figure 30**. Synchronous non-multiplexed NOR/PSRAM read timings



**Table 37**. Synchronous non-multiplexed NOR/PSRAM read timings (1)(2)

1. C L = 15 pF.
2. Based on characterization, not tested in production.
Symbol Parameter Min Max Unit
t w(CLK) FSMC_CLK period 27.7 ns
t d(CLKL-NExL) FSMC_CLK low to FSMC_NEx low (x = 0...2) 1.5 ns
t d(CLKL-NExH) FSMC_CLK low to FSMC_NEx high (x = 0...2) 2 ns
t d(CLKL-NADVL) FSMC_CLK low to FSMC_NADV low 4 ns
t d(CLKL-NADVH) FSMC_CLK low to FSMC_NADV high 5 ns
t d(CLKL-AV) FSMC_CLK low to FSMC_Ax valid (x = 0...25) 0 ns
t d(CLKL-AIV) FSMC_CLK low to FSMC_Ax invalid (x = 0...25) 4 ns
t d(CLKL-NOEL) FSMC_CLK low to FSMC_NOE low 1.5 ns
t d(CLKL-NOEH) FSMC_CLK low to FSMC_NOE high 1.5 ns
t su(DV-CLKH) FSMC_D[15:0] valid data before FSMC_CLK high 6.5 ns
t h(CLKH-DV) FSMC_D[15:0] valid data after FSMC_CLK high 7 ns
t su(NWAITV-CLKH) FSMC_NWAIT valid before FSMC_SMCLK high 7 ns
t h(CLKH-NWAITV) FSMC_NWAIT valid after FSMC_CLK high 2 ns
????????
????????
????????????
????????
???????????? ?? ??
??????????
????????????????????????????
??????????
????????????????????????????
? ?????? ? ??????
????????????????
???????????
? ???????????? ? ????????????
? ??????????
? ???????????
? ???????????? ? ????????????
? ???????????
? ??????????
? ??????????? ? ??????????
? ??????????????? ? ??????????????
? ??????????????? ? ??????????????
? ??????????????? ? ??????????????
????????
?????????
? ?????????????
? ?????????????
??

<!-- *P75*/136 -->
[P75]: #P75
<a id="P75"></a>



**Figure 31**. Synchronous non-multiplexed PSRAM write timings



**Table 38**. Synchronous non-multiplexed PSRAM write timings (1)(2)

1. C L = 15 pF.
2. Based on characterization, not tested in production.
Symbol Parameter Min Max Unit
t w(CLK) FSMC_CLK period 27.7 ns
t d(CLKL-NExL) FSMC_CLK low to FSMC_NEx low (x = 0...2) 2 ns
t d(CLKL-NExH) FSMC_CLK low to FSMC_NEx high (x = 0...2) 2 ns
t d(CLKL-NADVL) FSMC_CLK low to FSMC_NADV low 4 ns
t d(CLKL-NADVH) FSMC_CLK low to FSMC_NADV high 5 ns
t d(CLKL-AV) FSMC_CLK low to FSMC_Ax valid (x = 16...25) 0 ns
t d(CLKL-AIV) FSMC_CLK low to FSMC_Ax invalid (x = 16...25) 2 ns
t d(CLKL-NWEL) FSMC_CLK low to FSMC_NWE low 1 ns
t d(CLKL-NWEH) FSMC_CLK low to FSMC_NWE high 1 ns
t d(CLKL-Data) FSMC_D[15:0] valid data after FSMC_CLK low 6 ns
t d(CLKL-NBLH) FSMC_CLK low to FSMC_NBL high 1 ns
t su(NWAITV-CLKH) FSMC_NWAIT valid before FSMC_CLK high 7 ns
t h(CLKH-NWAITV) FSMC_NWAIT valid after FSMC_CLK high 2 ns
????????
????????
????????????
????????
???????????? ?? ??
??????????
????????????????????????????
? ?????? ? ??????
????????????????
???????????
? ????????????
? ????????????
? ?????????? ? ???????????
? ???????????? ? ????????????
? ????????????
? ???????????????
? ??????????????
????????
?????????
? ?????????????
? ?????????????
? ????????????
????????
? ????????????

<!-- *P76*/136 -->
[P76]: #P76
<a id="P76"></a>

PC Card/CompactFlash controller waveforms and timings
Figure 32 through Figure 37 represent synchronous waveforms and Table 39 provides the
corresponding timings. The results shown in this table are obtained with the following FSMC
configuration:
● COM.FSMC_SetupTime = 0x04;
● COM.FSMC_WaitSetupTime = 0x07;
● COM.FSMC_HoldSetupTime = 0x04;
● COM.FSMC_HiZSetupTime = 0x00;
● ATT.FSMC_SetupTime = 0x04;
● ATT.FSMC_WaitSetupTime = 0x07;
● ATT.FSMC_HoldSetupTime = 0x04;
● ATT.FSMC_HiZSetupTime = 0x00;
● IO.FSMC_SetupTime = 0x04;
● IO.FSMC_WaitSetupTime = 0x07;
● IO.FSMC_HoldSetupTime = 0x04;
● IO.FSMC_HiZSetupTime = 0x00;
● TCLRSetupTime = 0;
● TARSetupTime = 0;

**Figure 32**. PC Card/CompactFlash controller waveforms for common memory read

access
1. FSMC_NCE4_2 remains high (inactive during 8-bit access.
FSMC_NWE
t w(NOE)
FSMC_N OE
FSMC_D[15:0]
FSMC_A[10:0]
FSMC_NCE4_2 (1)
FSMC_NCE4_1
FSMC_NREG
FSMC_NIOWR
FSMC_NIORD
t d(NCE4_1-NOE)
t su(D-NOE) t h(NOE-D)
t v(NCEx-A)
t d(NREG-NCEx)
t d(NIORD-NCEx)
t h(NCEx-AI)
t h(NCEx-NREG)
t h(NCEx-NIORD)
t h(NCEx- NIOWR )
ai14895b

<!-- *P77*/136 -->
[P77]: #P77
<a id="P77"></a>



**Figure 33**. PC Card/CompactFlash controller waveforms for common memory write

access
t d(NCE4_1-NWE)
t w(NWE)
t h(NWE-D)
t v(NCE4_1-A)
t d(NREG-NCE4_1)
t d(NIORD-NCE4_1)
t h(NCE4_1-AI)
MEMxHIZ =1
t v(NWE-D)
t h(NCE4_1-NREG)
t h(NCE4_1-NIORD)
t h(NCE4_1-NIOWR)
ai14896b
FSMC_NWE
FSMC_N OE
FSMC_D[15:0]
FSMC_A[10:0]
FSMC_NCE4_1
FSMC_NREG
FSMC_NIOWR
FSMC_NIORD
t d(NWE-NCE4_1)
t d(D-NWE)
FSMC_NCE4_2
High

<!-- *P78*/136 -->
[P78]: #P78
<a id="P78"></a>


**Figure 34**. PC Card/CompactFlash controller waveforms for attribute memory read

access
1. Only data bits 0...7 are read (bits 8...15 are disregarded).
t d(NCE4_1-NOE) t w(NOE)
t su(D-NOE) t h(NOE-D)
t v(NCE4_1-A) t h(NCE4_1-AI)
t d(NREG-NCE4_1) t h(NCE4_1-NREG)
ai14897b
FSMC_NWE
FSMC_NOE
FSMC_D[15:0] (1)
FSMC_A[10:0]
FSMC_NCE4_2
FSMC_NCE4_1
FSMC_NREG
FSMC_NIOWR
FSMC_NIORD
t d(NOE-NCE4_1)
High

<!-- *P79*/136 -->
[P79]: #P79
<a id="P79"></a>



**Figure 35**. PC Card/CompactFlash controller waveforms for attribute memory write

access
1. Only data bits 0...7 are driven (bits 8...15 remains HiZ).

**Figure 36**. PC Card/CompactFlash controller waveforms for I/O space read access

t w(NWE)
t v(NCE4_1-A)
t d(NREG-NCE4_1)
t h(NCE4_1-AI)
t h(NCE4_1-NREG)
t v(NWE-D)
ai14898b
FSMC_NWE
FSMC_NOE
FSMC_D[7:0](1)
FSMC_A[10:0]
FSMC_NCE4_2
FSMC_NCE4_1
FSMC_NREG
FSMC_NIOWR
FSMC_NIORD
t d(NWE-NCE4_1)
High
t d(NCE4_1-NWE)
t d(NIORD-NCE4_1) t w(NIORD)
t su(D-NIORD) t d(NIORD-D)
t v(NCEx-A) t h(NCE4_1-AI)
ai14899B
FSMC_NWE
FSMC_NOE
FSMC_D[15:0]
FSMC_A[10:0]
FSMC_NCE4_2
FSMC_NCE4_1
FSMC_NREG
FSMC_NIOWR
FSMC_NIORD

<!-- *P80*/136 -->
[P80]: #P80
<a id="P80"></a>


**Figure 37**. PC Card/CompactFlash controller waveforms for I/O space write access


? ??????????????? ? ????????
? ????????? ? ????????????
? ??????????
??????????
? ??????????
????????
????????
????????
????????????
????????????
???????????
???????????
?????????
??????????
??????????

**Table 39**. Switching characteristics for PC Card/CF read and write cycles (1)(2)

Symbol Parameter Min Max Unit
t v(NCEx-A)
t v(NCE4_1-A)
FSMC_NCEx low (x = 4_1/4_2) to FSMC_Ay valid (y =
0...10) FSMC_NCE4_1 low (x = 4_1/4_2) to FSMC_Ay valid
(y = 0...10)
0 ns
t h(NCEx-AI)
t h(NCE4_1-AI)
FSMC_NCEx high (x = 4_1/4_2) to FSMC_Ax invalid (x =
0...10) FSMC_NCE4_1 high (x = 4_1/4_2) to FSMC_Ax
invalid (x = 0...10)
2.5 ns
t d(NREG-NCEx)
t d(NREG-NCE4_1)
FSMC_NCEx low to FSMC_NREG valid FSMC_NCE4_1
low to FSMC_NREG valid
5 ns
t h(NCEx-NREG)
t h(NCE4_1-NREG)
FSMC_NCEx high to FSMC_NREG invalid FSMC_NCE4_1
high to FSMC_NREG invalid
t HCLK + 3 ns
t d(NCE4_1-NOE) FSMC_NCE4_1 low to FSMC_NOE low 5t HCLK + 2 ns
t w(NOE) FSMC_NOE low width 8t HCLK –1.5 8t HCLK + 1 ns
t d(NOE-NCE4_1 FSMC_NOE high to FSMC_NCE4_1 high 5t HCLK + 2 ns
t su(D-NOE) FSMC_D[15:0] valid data before FSMC_NOE high 25 ns
t h(NOE-D) FSMC_D[15:0] valid data after FSMC_NOE high 15 ns
t w(NWE) FSMC_NWE low width 8t HCLK – 1 8t HCLK + 2 ns
t d(NWE-NCE4_1) FSMC_NWE high to FSMC_NCE4_1 high 5t HCLK + 2 ns
t d(NCE4_1-NWE) FSMC_NCE4_1 low to FSMC_NWE low 5t HCLK + 1.5 ns
t v(NWE-D) FSMC_NWE low to FSMC_D[15:0] valid 0 ns
t h(NWE-D) FSMC_NWE high to FSMC_D[15:0] invalid 11t HCLK ns
t d(D-NWE) FSMC_D[15:0] valid before FSMC_NWE high 13t HCLK ns

<!-- *P81*/136 -->
[P81]: #P81
<a id="P81"></a>



NAND controller waveforms and timings
Figure 38 through Figure 41 represent synchronous waveforms and Table 40 provides the
corresponding timings. The results shown in this table are obtained with the following FSMC
configuration:
● COM.FSMC_SetupTime = 0x01;
● COM.FSMC_WaitSetupTime = 0x03;
● COM.FSMC_HoldSetupTime = 0x02;
● COM.FSMC_HiZSetupTime = 0x01;
● ATT.FSMC_SetupTime = 0x01;
● ATT.FSMC_WaitSetupTime = 0x03;
● ATT.FSMC_HoldSetupTime = 0x02;
● ATT.FSMC_HiZSetupTime = 0x01;
● Bank = FSMC_Bank_NAND;
● MemoryDataWidth = FSMC_MemoryDataWidth_16b;
● ECC = FSMC_ECC_Enable;
● ECCPageSize = FSMC_ECCPageSize_512Bytes;
● TCLRSetupTime = 0;
● TARSetupTime = 0;
t w(NIOWR) FSMC_NIOWR low width 8t HCLK + 3 ns
t v(NIOWR-D) FSMC_NIOWR low to FSMC_D[15:0] valid 5t HCLK +1 ns
t h(NIOWR-D) FSMC_NIOWR high to FSMC_D[15:0] invalid 11t HCLK ns
t d(NCE4_1-NIOWR) FSMC_NCE4_1 low to FSMC_NIOWR valid 5t HCLK +3ns ns
t h(NCEx-NIOWR)
t h(NCE4_1-NIOWR)
FSMC_NCEx high to FSMC_NIOWR invalid
FSMC_NCE4_1 high to FSMC_NIOWR invalid
5t HCLK – 5 ns
t d(NIORD-NCEx)
t d(NIORD-NCE4_1)
FSMC_NCEx low to FSMC_NIORD valid FSMC_NCE4_1
low to FSMC_NIORD valid
5t HCLK + 2.5 ns
t h(NCEx-NIORD)
t h(NCE4_1-NIORD)
FSMC_NCEx high to FSMC_NIORD invalid
FSMC_NCE4_1 high to FSMC_NIORD invalid
5t HCLK – 5 ns
t su(D-NIORD) FSMC_D[15:0] valid before FSMC_NIORD high 4.5 ns
t d(NIORD-D) FSMC_D[15:0] valid after FSMC_NIORD high 9 ns
t w(NIORD) FSMC_NIORD low width 8t HCLK + 2 ns
1. C L = 15 pF.
2. Based on characterization, not tested in production.

Table 39. Switching characteristics for PC Card/CF read and write cycles (1)(2) (continued)

Symbol Parameter Min Max Unit

<!-- *P82*/136 -->
[P82]: #P82
<a id="P82"></a>


**Figure 38**. NAND controller waveforms for read access


**Figure 39**. NAND controller waveforms for write access


**Figure 40**. NAND controller waveforms for common memory read access

FSMC_NWE
FSMC_NOE (NRE)
FSMC_D[15:0]
t su(D-NOE) t h(NOE-D)
ai14901b
ALE (FSMC_A17)
CLE (FSMC_A16)
FSMC_NCEx
Low
t d(ALE-NOE) t h(NOE-ALE)
t h(NWE-D)
t v(NWE-D)
ai14902b
FSMC_NWE
FSMC_NOE (NRE)
FSMC_D[15:0]
ALE (FSMC_A17)
CLE (FSMC_A16)
FSMC_NCEx
Low
t d(ALE-NWE) t h(NWE-ALE)
FSMC_NWE
FSMC_N OE
FSMC_D[15:0]
t w(NOE)
t su(D-NOE) t h(NOE-D)
ai14912b
ALE (FSMC_A17)
CLE (FSMC_A16)
FSMC_NCEx
Low
t d(ALE-NOE) t h(NOE-ALE)

<!-- *P83*/136 -->
[P83]: #P83
<a id="P83"></a>



**Figure 41**. NAND controller waveforms for common memory write access



**Table 40**. Switching characteristics for NAND Flash read and write cycles (1)

1. C L = 15 pF.
Symbol Parameter Min Max Unit
t d(D-NWE) (2)
2. Based on characterization, not tested in production.
FSMC_D[15:0] valid before FSMC_NWE high 5t HCLK + 12 - ns
t w(NOE) (2) FSMC_NWE low width 4t HCLK -1.5 4t HCLK +1.5 ns
t su(D-NOE) (2)
FSMC_D[15:0] valid data before FSMC_NOE
high
25 -
ns
t h(NOE-D) (2) FSMC_D[15:0] valid data after FSMC_NOE high 7 -
t w(NWE) (2) FSMC_NWE low width 4t HCLK -1 4t HCLK +1 ns
t v(NWE-D) (2) FSMC_NWE low to FSMC_D[15:0] valid - 0 ns
t h(NWE-D) (2) FSMC_NWE high to FSMC_D[15:0] invalid 2t HCLK + 4 - ns
t d(ALE-NWE) (3)
3. Guaranteed by design, not tested in production.
FSMC_ALE valid before FSMC_NWE low - 3t HCLK + 1.5 ns
t h(NWE-ALE) (3) FSMC_NWE high to FSMC_ALE invalid 3t HCLK + 4.5 - ns
t d(ALE-NOE) (3) FSMC_ALE valid before FSMC_NOE low - 3t HCLK + 2 ns
t h(NOE-ALE) (3) FSMC_NWE high to FSMC_ALE invalid 3t HCLK + 4.5 - ns
t w(NWE)
t h(NWE-D) t v(NWE-D)
ai14913b
FSMC_NWE
FSMC_N OE
FSMC_D[15:0]
t d(D-NWE)
ALE (FSMC_A17)
CLE (FSMC_A16)
FSMC_NCEx
Low
t d(ALE-NOE)
t h(NOE-ALE)

<!-- *P84*/136 -->
[P84]: #P84
<a id="P84"></a>


//5.3.11 EMC characteristics
----------------------------

Susceptibility tests are performed on a sample basis during device characterization.
Functional EMS (electromagnetic susceptibility)
While a simple application is executed on the device (toggling 2 LEDs through I/O ports).
the device is stressed by two electromagnetic events until a failure occurs. The failure is
indicated by the LEDs:
● Electrostatic discharge (ESD) (positive and negative) is applied to all device pins until
a functional disturbance occurs. This test is compliant with the IEC 61000-4-2 standard.
● FTB: A Burst of Fast Transient voltage (positive and negative) is applied to V DD and
V SS through a 100 pF capacitor, until a functional disturbance occurs. This test is
compliant with the IEC 61000-4-4 standard.
A device reset allows normal operations to be resumed.
The test results are given in Table 41. They are based on the EMS levels and classes
defined in application note AN1709.

Designing hardened software to avoid noise problems
EMC characterization and optimization are performed at component level with a typical
application environment and simplified MCU software. It should be noted that good EMC
performance is highly dependent on the user application and the software in particular.
Therefore it is recommended that the user applies EMC software optimization and
prequalification tests in relation with the EMC level requested for his application.
Software recommendations
The software flowchart must include the management of runaway conditions such as:
● Corrupted program counter
● Unexpected reset
● Critical Data corruption (control registers...)

**Table 41**. EMS characteristics

Symbol Parameter Conditions
Level/
Class
V FESD
Voltage limits to be applied on any I/O pin to
induce a functional disturbance
V DD = 3.3 V, LQFP144, T A = +25 °C,
f HCLK = 72 MHz
conforms to IEC 61000-4-2
2B
V EFTB
Fast transient voltage burst limits to be
applied through 100 pF on V DD and V SS
pins to induce a functional disturbance
V DD = 3.3 V, LQFP144, T A = +25 °C,
f HCLK = 72 MHz
conforms to IEC 61000-4-4
4A

<!-- *P85*/136 -->
[P85]: #P85
<a id="P85"></a>


Prequalification trials
Most of the common failures (unexpected reset and program counter corruption) can be
reproduced by manually forcing a low state on the NRST pin or the Oscillator pins for 1
second.
To complete these trials, ESD stress can be applied directly on the device, over the range of
specification values. When unexpected behavior is detected, the software can be hardened
to prevent unrecoverable errors occurring (see application note AN1015).
Electromagnetic Interference (EMI)
The electromagnetic field emitted by the device are monitored while a simple application is
executed (toggling 2 LEDs through the I/O ports). This emission test is compliant with
IEC 61967-2 standard which specifies the test board and the pin loading.


//5.3.12 Absolute maximum ratings (electrical sensitivity)
----------------------------------------------------------

Based on three different tests (ESD, LU) using specific measurement methods, the device is
stressed in order to determine its performance in terms of electrical sensitivity.
Electrostatic discharge (ESD)
Electrostatic discharges (a positive then a negative pulse separated by 1 second) are
applied to the pins of each sample according to each pin combination. The sample size
depends on the number of supply pins in the device (3 parts × (n+1) supply pins). This test
conforms to the JESD22-A114/C101 standard.


**Table 42**. EMI characteristics

Symbol Parameter Conditions
Monitored
frequency band
Max vs. [f HSE /f HCLK ]
Unit
8/48 MHz 8/72 MHz
S EMI Peak level
V DD = 3.3 V, T A = 25 °C,
LQFP144 package
compliant with IEC
61967-2
0.1 to 30 MHz 8 12
dBµV 30 to 130 MHz 31 21
130 MHz to 1GHz 28 33
SAE EMI Level 4 4 -

**Table 43**. ESD absolute maximum ratings

Symbol Ratings Conditions Class Maximum value (1)
1. Based on characterization results, not tested in production.
Unit
V ESD(HBM)
Electrostatic discharge
voltage (human body model)
T A = +25 °C, conforming
to JESD22-A114
2 2000
V
V ESD(CDM)
Electrostatic discharge
voltage (charge device model)
T A = +25 °C, conforming
to JESD22-C101
II 500

<!-- *P86*/136 -->
[P86]: #P86
<a id="P86"></a>

Static latch-up
Two complementary static tests are required on six parts to assess the latch-up
performance:
● A supply overvoltage is applied to each power supply pin
● A current injection is applied to each input, output and configurable I/O pin
These tests are compliant with EIA/JESD 78A IC latch-up standard.


//5.3.13 I/O current injection characteristics
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
The failure is indicated by an out of range parameter: ADC error above a certain limit (>5
LSB TUE), out of spec current injection on adjacent pins or other functional failure (for
example reset, oscillator frequency deviation).
The test results are given in Table 45


**Table 44**. Electrical sensitivities

Symbol Parameter Conditions Class
LU Static latch-up class T A = +105 °C conforming to JESD78A II level A

**Table 45**. I/O current injection susceptibility

Symbol Description
Functional susceptibility
Unit
Negative
injection
Positive
injection
I INJ
Injected current on OSC_IN32,
OSC_OUT32, PA4, PA5, PC13
-0 +0
mA
Injected current on all FT pins -5 +0
Injected current on any other pin -5 +5

<!-- *P87*/136 -->
[P87]: #P87
<a id="P87"></a>



//5.3.14 I/O port characteristics
---------------------------------

General input/output characteristics
Unless otherwise specified, the parameters given in Table 46 are derived from tests
performed under the conditions summarized in Table 10. All I/Os are CMOS and TTL
compliant.

All I/Os are CMOS and TTL compliant (no software configuration required). Their
characteristics cover more than the strict CMOS-technology or TTL parameters. The
coverage of these requirements is shown in Figure 42 and Figure 43 for standard I/Os, and
in Figure 44 and Figure 45 for 5 V tolerant I/Os.

**Table 46**. I/O static characteristics

Symbol Parameter Conditions Min Typ Max Unit
V IL
Standard IO input low
level voltage
–0.3 -
0.28*(V DD -2
V)+0.8 V
V
IO FT (1) input low level
voltage
–0.3 -
0.32*(V DD -2
V)+0.75 V
V
V IH
Standard IO input high
level voltage
0.41*(V DD -2
V)+1.3 V
- V DD +0.3 V
IO FT (1) input high level
voltage
V DD > 2 V
0.42*(V DD -2
V)+1 V
-
5.5
V
V DD ≤ 2 V 5.2
V hys
Standard IO Schmitt
trigger voltage
hysteresis (2)
200 - - mV
IO FT Schmitt trigger
voltage hysteresis (2)
5% V DD (3)
-
- mV
I lkg Input leakage current (4)
V SS ≤ V IN ≤ V DD
Standard I/Os
- - ±1
µA
V IN = 5 V, I/O FT - - 3
R PU
Weak pull-up equivalent
resistor (5)
V IN = V SS 30 40 50 kΩ
R PD
Weak pull-down
equivalent resistor (5)
V IN = V DD 30 40 50 kΩ
C IO I/O pin capacitance - 5 - pF
1. FT = Five-volt tolerant. In order to sustain a voltage higher than V DD +0.3 the internal pull-up/pull-down resistors must be
disabled.
2. Hysteresis voltage between Schmitt trigger switching levels. Based on characterization, not tested in production.
3. With a minimum of 100 mV.
4. Leakage could be higher than max. if negative current is injected on adjacent pins.
5. Pull-up and pull-down resistors are designed with a true resistance in series with a switchable PMOS/NMOS. This
MOS/NMOS contribution to the series resistance is minimum (~10% order) .

<!-- *P88*/136 -->
[P88]: #P88
<a id="P88"></a>


**Figure 42**. Standard I/O input characteristics - CMOS port


**Figure 43**. Standard I/O input characteristics - TTL port


**Figure 44**. 5 V tolerant I/O input characteristics - CMOS port

????????
? ?? ????
???
???
? ???
????????????
??????????????
????
?
???
? ?? ??????? ?? ???????
?
???
??????????????????????????? ?? ?????? ?? ?
???
? ?? ?? ?? ????
??????????????????????????? ?? ?????? ??
? ?? ??????? ?? ???????
????
????
????
????
????
?
????
????
? ?????
? ?????
???????
? ???
????????????
??????????????
? ?? ?? ?? ????
???
???
???
????
????
????
????????????????? ? ?? ???
? ?? ??????? ?? ???????
? ?? ??????? ?? ???????
????????????????? ? ?? ?????
? ?? ????
? ?????
? ?????
???
???
? ???
??????????????????????????? ?? ?????? ?? ?
?????????????????????????? ?? ?????? ??
????
?
???
???
? ???
?
????
?????
?????
????
????
????
????
? ?? ?? ?? ????
? ?? ????
????????????
??????????????
????????
? ?? ??????? ?? ?????
? ?? ??????? ?? ????????

<!-- *P89*/136 -->
[P89]: #P89
<a id="P89"></a>



**Figure 45**. 5 V tolerant I/O input characteristics - TTL port

Output driving current
The GPIOs (general purpose input/outputs) can sink or source up to ±8 mA, and sink or
source up to ± 20 mA (with a relaxed V OL/ V OH ) except PC13, PC14 and PC15 which can
sink or source up to ±3 mA. When using the GPIOs PC13 to PC15 in output mode, the
speed should not exceed 2 MHz with a maximum load of 30 pF.
In the user application, the number of I/O pins which can drive current must be limited to
respect the absolute maximum rating specified in Section 5.2:
● The sum of the currents sourced by all the I/Os on V DD, plus the maximum Run
consumption of the MCU sourced on V DD, cannot exceed the absolute maximum rating
I VDD (see Table 8).
● The sum of the currents sunk by all the I/Os on V SS plus the maximum Run
consumption of the MCU sunk on V SS cannot exceed the absolute maximum rating
I VSS (see Table 8).
Output voltage levels
Unless otherwise specified, the parameters given in Table 47 are derived from tests
performed under ambient temperature and V DD supply voltage conditions summarized in

Table 10. All I/Os are CMOS and TTL compliant.


???
???
? ??? ????
???????????????
???????????
????
?
????
?????????????????? ?? ???
? ?? ???????? ?? ?????
? ?? ???????? ?? ????????
?????????????????? ?? ??????
? ?? ?? ?? ????
? ?? ????
? ?????
? ?????
???????

**Table 47**. Output voltage characteristics

Symbol Parameter Conditions Min Max Unit
V OL (1)
Output low level voltage for an I/O pin
when 8 pins are sunk at same time
TTL port (3)
I IO = +8 mA
2.7 V < V DD < 3.6 V
- 0.4
V
V OH (2)
Output high level voltage for an I/O pin
when 8 pins are sourced at same time
V DD –0.4 -
V OL (1)
Output low level voltage for an I/O pin
when 8 pins are sunk at same time
CMOS port (3)
I IO =+ 8mA
2.7 V < V DD < 3.6 V
- 0.4
V
V OH (2)
Output high level voltage for an I/O pin
when 8 pins are sourced at same time
2.4 -

<!-- *P90*/136 -->
[P90]: #P90
<a id="P90"></a>

V OL (1)(4)
Output low level voltage for an I/O pin
when 8 pins are sunk at same time
I IO = +20 mA
2.7 V < V DD < 3.6 V
- 1.3
V
V OH (2)(4)
Output high level voltage for an I/O pin
when 8 pins are sourced at same time
V DD –1.3 -
V OL (1)(4)
Output low level voltage for an I/O pin
when 8 pins are sunk at same time
I IO = +6 mA
2 V < V DD < 2.7 V
- 0.4
V
V OH (2)(4)
Output high level voltage for an I/O pin
when 8 pins are sourced at same time
V DD –0.4 -
1. The I IO current sunk by the device must always respect the absolute maximum rating specified in Table 8
and the sum of I IO (I/O ports and control pins) must not exceed I VSS .
2. The I IO current sourced by the device must always respect the absolute maximum rating specified in
Table 8 and the sum of I IO (I/O ports and control pins) must not exceed I VDD .
3. TTL and CMOS outputs are compatible with JEDEC standards JESD36 and JESD52.
4. Based on characterization data, not tested in production.

Table 47. Output voltage characteristics (continued)

Symbol Parameter Conditions Min Max Unit

<!-- *P91*/136 -->
[P91]: #P91
<a id="P91"></a>


Input/output AC characteristics
The definition and values of input/output AC characteristics are given in Figure 46 and
Table 48, respectively.
Unless otherwise specified, the parameters given in Table 48 are derived from tests
performed under ambient temperature and V DD supply voltage conditions summarized in

Table 10.



**Table 48**. I/O AC characteristics (1)

1. The I/O speed is configured using the MODEx[1:0] bits. Refer to the STM32F10xxx reference manual for a
description of GPIO Port configuration register.
MODEx[1:0]
bit value (1)
Symbol Parameter Conditions Min Max Unit
10
f max(IO)out Maximum frequency (2)
2. The maximum frequency is defined in Figure 46.
C L = 50 pF, V DD = 2 V to 3.6 V - 2 MHz
t f(IO)out
Output high to low
level fall time
C L = 50 pF, V DD = 2 V to 3.6 V
- 125 (3)
3. Guaranteed by design, not tested in production.
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
C L = 30 pF, V DD = 2.7 V to 3.6 V - 50 MHz
C L = 50 pF, V DD = 2.7 V to 3.6 V - 30 MHz
C L = 50 pF, V DD = 2 V to 2.7 V - 20 MHz
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
Pulse width of
external signals
detected by the EXTI
controller
10 - ns

<!-- *P92*/136 -->
[P92]: #P92
<a id="P92"></a>


**Figure 46**. I/O AC characteristics definition


//5.3.15 NRST pin characteristics
---------------------------------

The NRST pin input driver uses CMOS technology. It is connected to a permanent pull-up
resistor, R PU (see Table 46).
Unless otherwise specified, the parameters given in Table 49 are derived from tests
performed under ambient temperature and V DD supply voltage conditions summarized in

Table 10.



**Figure 47**. Recommended NRST pin protection

1. The reset network protects the device against parasitic resets.
2. The user must ensure that the level on the NRST pin can go below the V IL(NRST) max level specified in

Table 49. Otherwise the reset will not be taken into account by the device.

ai14131
10%
90%
50%
t r(IO)out
OUTPUT
EXTERNAL
ON 50pF
Maximum frequency is achieved if (t r + t f ) 2/3)T and if the duty cycle is (45-55%)

10%
50%
90%
when loaded by 50pF
T
t r(IO)out

**Table 49**. NRST pin characteristics

Symbol Parameter Conditions Min Typ Max Unit
V IL(NRST) (1)
1. Guaranteed by design, not tested in production.
NRST Input low level voltage –0.5 - 0.8
V
V IH(NRST) (1) NRST Input high level voltage 2 - V DD +0.5
V hys(NRST)
NRST Schmitt trigger voltage
hysteresis
- 200 - mV
R PU Weak pull-up equivalent resistor (2)
2. The pull-up is designed with a true resistance in series with a switchable PMOS. This PMOS contribution
to the series resistance must be minimum (~10% order) .
V IN = V SS 30 40 50 kΩ
V F(NRST) (1) NRST Input filtered pulse - - 100 ns
V NF(NRST) (1) NRST Input not filtered pulse 300 - - ns
ai14132d
STM32F10xxx
R PU
NRST (2)
V DD
Filter
Internal Reset
0.1 µF
External
reset circuit (1)

<!-- *P93*/136 -->
[P93]: #P93
<a id="P93"></a>



//5.3.16 TIM timer characteristics
----------------------------------

The parameters given in Table 50 are guaranteed by design.
Refer to Section 5.3.14: I/O port characteristics for details on the input/output alternate
function characteristics (output compare, input capture, external clock, PWM output).


**Table 50**. TIMx (1) characteristics

1. TIMx is used as a general term to refer to the TIM1, TIM2, TIM3 and TIM4 timers.
Symbol Parameter Conditions Min Max Unit
t res(TIM) Timer resolution time
1 - t TIMxCLK
f TIMxCLK = 72 MHz 13.9 - ns
f EXT
Timer external clock
frequency on CH1 to CH4
 0 f TIMxCLK /2 MHz
f TIMxCLK = 72 MHz 0 36 MHz
Res TIM Timer resolution - 16 bit
t COUNTER
16-bit counter clock period
when internal clock is
selected
1 65536 t TIMxCLK
f TIMxCLK = 72 MHz 0.0139 910 µs
t MAX_COUNT Maximum possible count
- 65536 × 65536 t TIMxCLK
f TIMxCLK = 72 MHz - 59.6 s

<!-- *P94*/136 -->
[P94]: #P94
<a id="P94"></a>


//5.3.17 Communications interfaces
----------------------------------

I2C interface characteristics
Unless otherwise specified, the parameters given in Table 51 are derived from tests
performed under ambient temperature, f PCLK1 frequency and V DD supply voltage conditions
summarized in Table 10.
The STM32F103xC, STM32F103xD and STM32F103xESTM32F103xF and STM32F103xG
performance line I2C interface meets the requirements of the standard I2C communication
protocol with the following restrictions: the I/O pins SDA and SCL are mapped to are not
“true” open-drain. When configured as open-drain, the PMOS connected between the I/O
pin and V DD is disabled, but is still present.
The I2C characteristics are described in Table 51. Refer also to Section 5.3.14: I/O port
characteristics for more details on the input/output alternate function characteristics (SDA
and SCL).


**Table 51**. I2C characteristics

Symbol Parameter
Standard mode I2C (1)
1. Guaranteed by design, not tested in production.
Fast mode I2C (1)(2)
2. f PCLK1 must be at least 2 MHz to achieve standard mode I2C frequencies. It must be at least 4 MHz to
achieve the fast mode I2C frequencies and it must be a multiple of 10 MHz in order to reach the I2C fast
mode maximum clock speed of 400 kHz.
Unit
Min Max Min Max
t w(SCLL) SCL clock low time 4.7 - 1.3 -
µs
t w(SCLH) SCL clock high time 4.0 - 0.6 -
t su(SDA) SDA setup time 250 - 100 -
ns
t h(SDA) SDA data hold time 0 (3)
3. The maximum Data hold time has only to be met if the interface does not stretch the low period of SCL
signal.
- 0 (4)
4. The device must internally provide a hold time of at least 300ns for the SDA signal in order to bridge the
undefined region on the falling edge of SCL.
900 (3)
t r(SDA)
t r(SCL)
SDA and SCL rise time - 1000 20 + 0.1C b 300
t f(SDA)
t f(SCL)
SDA and SCL fall time - 300
-
300
t h(STA) Start condition hold time 4.0 - 0.6 -
µs
t su(STA)
Repeated Start condition
setup time
4.7 - 0.6 -
t su(STO) Stop condition setup time 4.0 - 0.6 - μs
t w(STO:STA)
Stop to Start condition time
(bus free)
4.7 - 1.3 - μs
C b
Capacitive load for each bus
line
- 400 - 400 pF

<!-- *P95*/136 -->
[P95]: #P95
<a id="P95"></a>



**Figure 48**. I2C bus AC waveforms and measurement circuit

1. Measurement points are done at CMOS levels: 0.3V DD and 0.7V DD .

ai14149c
START
SDA
100
4.7k
I2C bus
4.7k
100
V DD V DD
STM32F103xx
SDA
SCL
t f(SDA) t r(SDA)
SCL
t h(STA)
t w(SCLH)
t w(SCLL)
t su(SDA)
t r(SCL)
t f(SCL)
t h(SDA)
START REPEATED
START
t su(STA)
t su(STO)
STOP
t w(STO:STA)

**Table 52**. SCL frequency (f PCLK1 = 36 MHz.,V DD = 3.3 V) (1)(2)

1. R P = External pull-up resistance, f SCL = I2C speed.
2. For speeds around 200 kHz, the tolerance on the achieved speed is of ±5%. For other speed ranges, the
tolerance on the achieved speed ±2%. These variations depend on the accuracy of the external
components used to design the application.
f SCL (kHz)
I2C_CCR value
R P = 4.7 kΩ
400 0x801E
300 0x8028
200 0x803C
100 0x00B4
50 0x0168
20 0x0384

<!-- *P96*/136 -->
[P96]: #P96
<a id="P96"></a>

I2S - SPI characteristics
Unless otherwise specified, the parameters given in Table 53 for SPI or in Table 54 for I2S
are derived from tests performed under ambient temperature, f PCLKx frequency and V DD
supply voltage conditions summarized in Table 10.
Refer to Section 5.3.14: I/O port characteristics for more details on the input/output alternate
function characteristics (NSS, SCK, MOSI, MISO for SPI and WS, CK, SD for I2S).


**Table 53**. SPI characteristics

Symbol Parameter Conditions Min Max Unit
f SCK
1/t c(SCK)
SPI clock frequency
Master mode - 18
MHz
Slave mode - 18
t r(SCK)
t f(SCK)
SPI clock rise and fall
time
Capacitive load: C = 30 pF - 8 ns
DuCy(SCK)
SPI slave input clock duty
cycle
Slave mode 30 70 %
t su(NSS) (1)
1. Based on characterization, not tested in production.
NSS setup time Slave mode 4t PCLK -
ns
t h(NSS) (1) NSS hold time Slave mode 2t PCLK -
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
Data output access time Slave mode, f PCLK = 20 MHz 0 3t PCLK
t dis(SO) (1)(3)
3. Min time is for the minimum time to invalidate the output and the max time is for the maximum time to put
the data in Hi-Z
Data output disable time Slave mode 2 10
t v(SO) (1) Data output valid time Slave mode (after enable edge) - 25
t v(MO) (1) Data output valid time Master mode (after enable edge) - 5
t h(SO) (1)
Data output hold time
Slave mode (after enable edge) 15 -
t h(MO) (1) Master mode (after enable edge) 2 -

<!-- *P97*/136 -->
[P97]: #P97
<a id="P97"></a>



**Figure 49**. SPI timing diagram - slave mode and CPHA = 0


**Figure 50**. SPI timing diagram - slave mode and CPHA = 1 (1)

1. Measurement points are done at CMOS levels: 0.3V DD and 0.7V DD .
ai14134c
SCK Input
CPHA=0
MOSI
INPUT
MISO
OUTPUT
CPHA=0
MSB O UT
MSB IN
BIT6 OUT
LSB IN
LSB OUT
CPOL=0
CPOL=1
BIT1 IN
NSS input
t SU(NSS)
t c(SCK)
t h(NSS)
t a(SO)
t w(SCKH)
t w(SCKL)
t v(SO) t h(SO)
t r(SCK)
t f(SCK)
t dis(SO)
t su(SI)
t h(SI)
ai14135
SCK Input
CPHA=1
MOSI
INPUT
MISO
OUTPUT
CPHA=1
MSB O UT
MSB IN
BIT6 OUT
LSB IN
LSB OUT
CPOL=0
CPOL=1
BIT1 IN
t SU(NSS)
t c(SCK) t h(NSS)
t a(SO)
t w(SCKH)
t w(SCKL)
t v(SO) t h(SO)
t r(SCK)
t f(SCK)
t dis(SO)
t su(SI)
t h(SI)
NSS input

<!-- *P98*/136 -->
[P98]: #P98
<a id="P98"></a>


**Figure 51**. SPI timing diagram - master mode (1)

1. Measurement points are done at CMOS levels: 0.3V DD and 0.7V DD .
?????????
??????????
??????
????
??????
????
?????
??????
?????
???????
???????
???????
??????
??????
??????
????????
?????????
? ??????
? ???????
? ???????
? ??????
? ??????
? ?????
????
??????????
??????
??????
??????
??????
? ??????
? ????? ? ?????

<!-- *P99*/136 -->
[P99]: #P99
<a id="P99"></a>




**Table 54**. I2S characteristics

Symbol Parameter Conditions Min Max Unit
DuCy(SCK) I2S slave input clock duty cycle Slave mode 30 70 %
f CK
1/t c(CK)
I2S clock frequency
Master mode (data: 16 bits,
Audio frequency = 48 kHz)
1.522 1.525
MHz
Slave mode 0 6.5
t r(CK)
t f(CK)
I2S clock rise and fall time Capacitive load C L = 50 pF - 8
ns
t v(WS) (1) WS valid time Master mode 3 -
t h(WS) (1) WS hold time Master mode
I2S2 2 -
I2S3 0 -
t su(WS) (1) WS setup time Slave mode 4 -
t h(WS) (1) WS hold time Slave mode 0 -
t w(CKH) (1)
CK high and low time
Master f PCLK = 16 MHz, audio
frequency = 48 kHz
312.5 -
t w(CKL) (1) 345 -
t su(SD_MR) (1) Data input setup time Master receiver
I2S2 2 -
I2S3 6.5 -
t su(SD_SR) (1) Data input setup time Slave receiver 1.5 -
t h(SD_MR) (1)(2)
Data input hold time
Master receiver 0 -
t h(SD_SR) (1)(2) Slave receiver 0.5 -
t v(SD_ST) (1)(2) Data output valid time
Slave transmitter (after enable
edge)
- 18
t h(SD_ST) (1) Data output hold time
Slave transmitter (after enable
edge)
11 -
t v(SD_MT) (1)(2) Data output valid time
Master transmitter (after enable
edge)
- 3
t h(SD_MT) (1) Data output hold time
Master transmitter (after enable
edge)
0 -
1. Based on design simulation and/or characterization results, not tested in production.
2. Depends on f PCLK . For example, if f PCLK =8 MHz, then T PCLK = 1/f PLCLK =125 ns.

<!-- *P100*/136 -->
[P100]: #P100
<a id="P100"></a>


**Figure 52**. I2S slave timing diagram (Philips protocol) (1)

1. Measurement points are done at CMOS levels: 0.3 × V DD and 0.7 × V DD .
2. LSB transmit/receive of the previously transmitted byte. No LSB transmit/receive is sent before the first
byte.

**Figure 53**. I2S master timing diagram (Philips protocol) (1)

1. Based on characterization, not tested in production.
2. LSB transmit/receive of the previously transmitted byte. No LSB transmit/receive is sent before the first
byte.
CK Input
CPOL = 0
CPOL = 1
t c(CK)
WS input
SD transmit
SD receive
t w(CKH) t w(CKL)
t su(WS) t v(SD_ST) t h(SD_ST)
t h(WS)
t su(SD_SR) t h(SD_SR)
MSB receive Bitn receive LSB receive
MSB transmit Bitn transmit LSB transmit
ai14881b
LSB receive (2)
LSB transmit (2)
CK output
CPOL = 0
CPOL = 1
t c(CK)
WS output
SD receive
SD transmit
t w(CKH)
t w(CKL)
t su(SD_MR)
t v(SD_MT) t h(SD_MT)
t h(WS)
t h(SD_MR)
MSB receive Bitn receive LSB receive
MSB transmit Bitn transmit LSB transmit
ai14884b
t f(CK) t r(CK)
t v(WS)
LSB receive (2)
LSB transmit (2)

<!-- *P101*/136 -->
[P101]: #P101
<a id="P101"></a>


SD/SDIO MMC card host interface (SDIO) characteristics
Unless otherwise specified, the parameters given in Table 55 are derived from tests
performed under ambient temperature, f PCLKx frequency and V DD supply voltage conditions
summarized in Table 10.
Refer to Section 5.3.14: I/O port characteristics for more details on the input/output alternate
function characteristics (D[7:0], CMD, CK).

**Figure 54**. SDIO high-speed mode


**Figure 55**. SD default mode

t W(CKH)
CK
D, CMD
(output)
D, CMD
(input)
t C
t W(CKL)
t OV t OH
t ISU t IH
t f t r
ai14887
CK
D, CMD
(output)
t OVD t OHD
ai14888

<!-- *P102*/136 -->
[P102]: #P102
<a id="P102"></a>


USB characteristics
The USB interface is USB-IF certified (Full Speed).


**Table 55**. SD / MMC characteristics

Symbol Parameter Conditions Min Max Unit
f PP
Clock frequency in data transfer
mode
C L ≤ 30 pF 0 48 MHz
t W(CKL) Clock low time, f PP = 16 MHz C L ≤ 30 pF 32 -
ns
t W(CKH) Clock high time, f PP = 16 MHz C L ≤ 30 pF 30 -
t r Clock rise time C L ≤ 30 pF - 4
t f Clock fall time C L ≤ 30 pF - 5
CMD, D inputs (referenced to CK)
t ISU Input setup time C L ≤ 30 pF 2 -
ns
t IH Input hold time C L ≤ 30 pF 0 -
CMD, D outputs (referenced to CK) in MMC and SD HS mode
t OV Output valid time C L ≤ 30 pF - 6
ns
t OH Output hold time C L ≤ 30 pF 0 -
CMD, D outputs (referenced to CK) in SD default mode (1)
1. Refer to SDIO_CLKCR, the SDI clock control register to control the CK output.
t OVD Output valid default time C L ≤ 30 pF - 7
ns
t OHD Output hold default time C L ≤ 30 pF 0.5 -

**Table 56**. USB startup time

Symbol Parameter Max Unit
t STARTUP (1)
1. Guaranteed by design, not tested in production.
USB transceiver startup time 1 µs

<!-- *P103*/136 -->
[P103]: #P103
<a id="P103"></a>




**Figure 56**. USB timings: definition of data signal rise and fall time



//5.3.18 CAN (controller area network) interface
------------------------------------------------

Refer to Section 5.3.14: I/O port characteristics for more details on the input/output alternate
function characteristics (CAN_TX and CAN_RX).

**Table 57**. USB DC electrical characteristics

Symbol Parameter Conditions Min. (1)
1. All the voltages are measured from the local ground potential.
Max. (1) Unit
Input levels
V DD USB operating voltage (2)
2. To be compliant with the USB 2.0 full-speed electrical specification, the USBDP (D+) pin should be pulled
up with a 1.5 kΩ resistor to a 3.0-to-3.6 V voltage range.
3.0 (3)
3. The STM32F103xx USB functionality is ensured down to 2.7 V but not the full USB electrical
characteristics which are degraded in the 2.7-to-3.0 V V DD voltage range.
3.6 V
V DI (4)
4. Guaranteed by characterization, not tested in production.
Differential input sensitivity I(USBDP, USBDM) 0.2
V V CM (4) Differential common mode range Includes V DI range 0.8 2.5
V SE (4) Single ended receiver threshold 1.3 2.0
Output levels
V OL Static output level low R L of 1.5 k Ω to 3.6 V (5)
5. R L is the load connected on the USB drivers
0.3
V
V OH Static output level high R L of 15 k Ω to V SS (5) 2.8 3.6

**Table 58**. USB: full-speed electrical characteristics

Driver characteristics (1)
1. Guaranteed by design, not tested in production.
Symbol Parameter Conditions Min Max Unit
t r Rise time (2)
2. Measured from 10% to 90% of the data signal. For more detailed informations, please refer to USB
Specification - Chapter 7 (version 2.0).
C L = 50 pF 4 20 ns
t f Fall Time (2) C L = 50 pF 4 20 ns
t rfm Rise/ fall time matching t r /t f 90 110 %
V CRS Output signal crossover voltage 1.3 2.0 V
ai14137
t f
Differential
data lines
V SS
V CRS
t r
Crossover
points

<!-- *P104*/136 -->
[P104]: #P104
<a id="P104"></a>


//5.3.19 12-bit ADC characteristics
-----------------------------------

Unless otherwise specified, the parameters given in Table 59 are preliminary values derived
from tests performed under ambient temperature, f PCLK2 frequency and V DDA supply
voltage conditions summarized in Table 10.
Note: It is recommended to perform a calibration after each power-up.


**Table 59**. ADC characteristics

Symbol Parameter Conditions Min Typ Max Unit
V DDA Power supply 2.4 - 3.6 V
V REF+ Positive reference voltage 2.4 - V DDA V
I VREF
Current on the V REF input
pin
- 160 (1) 220 µA
f ADC ADC clock frequency 0.6 - 14 MHz
f S (2) Sampling rate 0.05 - 1 MHz
f TRIG (2) External trigger frequency
f ADC = 14 MHz - - 823 kHz
- - 17 1/f ADC
V AIN Conversion voltage range (3)
0 (V SSA or V REF-
tied to ground)
- V REF+ V
R AIN (2) External input impedance
See Equation 1 and
Table 60 for details
- - 50 kΩ
R ADC (2) Sampling switch resistance - - 1 kΩ
C ADC (2)
Internal sample and hold
capacitor
- - 8 pF
t CAL (2) Calibration time
f ADC = 14 MHz 5.9 µs
83 1/f ADC
t lat (2)
Injection trigger conversion
latency
f ADC = 14 MHz - - 0.214 µs
- - 3 (4) 1/f ADC
t latr (2)
Regular trigger conversion
latency
f ADC = 14 MHz - - 0.143 µs
- - 2 (4) 1/f ADC
t S (2) Sampling time
f ADC = 14 MHz 0.107 - 17.1 µs
1.5 - 239.5 1/f ADC
t STAB (2) Power-up time 0 0 1 µs
t CONV (2)
Total conversion time
(including sampling time)
f ADC = 14 MHz 1 18 µs
14 to 252 (t S for sampling +12.5 for
successive approximation)
1/f ADC
1. Based on characterization, not tested in production.
2. Guaranteed by design, not tested in production.
3. V REF+ can be internally connected to V DDA and V REF- can be internally connected to V SSA , depending on the package.
Refer to Section 3: Pinouts and pin descriptions for further details.
4. For external triggers, a delay of 1/f PCLK2 must be added to the latency specified in Table 59.

<!-- *P105*/136 -->
[P105]: #P105
<a id="P105"></a>


Equation 1: R AIN max formula
The formula above (Equation 1) is used to determine the maximum external impedance
allowed for an error below 1/4 of LSB. Here N = 12 (from 12-bit resolution).



**Table 60**. R AIN max for f ADC = 14 MHz (1)

1. Guaranteed by design, not tested in production.
T s (cycles) t S (µs) R AIN max (kΩ)
1.5 0.11 0.4
7.5 0.54 5.9
13.5 0.96 11.4
28.5 2.04 25.2
41.5 2.96 37.2
55.5 3.96 50
71.5 5.11 NA
239.5 17.1 NA

**Table 61**. ADC accuracy - limited test conditions (1)(2)

1. ADC DC accuracy values are measured after internal calibration.
2. ADC Accuracy vs. Negative Injection Current: Injecting negative current on any analog input pins should
be avoided as this significantly reduces the accuracy of the conversion being performed on another analog
input. It is recommended to add a Schottky diode (pin to ground) to analog pins which may potentially
inject negative current.
Any positive injection current within the limits specified for I INJ(PIN) and ΣI INJ(PIN) in Section 5.3.14 does not
affect the ADC accuracy.
Symbol Parameter Test conditions Typ Max (3)
3. Based on characterisation, not tested in production.
Unit
ET Total unadjusted error f PCLK2 = 56 MHz,
f ADC = 14 MHz, R AIN < 10 kΩ,
V DDA = 3 V to 3.6 V
T A = 25 °C
Measurements made after
ADC calibration
V REF+ = V DDA
±1.3 ±2
LSB
EO Offset error ±1 ±1.5
EG Gain error ±0.5 ±1.5
ED Differential linearity error ±0.7 ±1
EL Integral linearity error ±0.8 ±1.5
R AIN
T S
f ADC C ADC 2 N
2 +
( ) ln × ×
--------------------------------------------------------------- - R ADC – <

<!-- *P106*/136 -->
[P106]: #P106
<a id="P106"></a>



**Figure 57**. ADC accuracy characteristics


**Table 62**. ADC accuracy (1) (2)(3)

1. ADC DC accuracy values are measured after internal calibration.
2. Better performance could be achieved in restricted V DD , frequency, V REF and temperature ranges.
3. ADC Accuracy vs. Negative Injection Current: Injecting negative current on any analog input pins should
be avoided as this significantly reduces the accuracy of the conversion being performed on another analog
input. It is recommended to add a Schottky diode (pin to ground) to analog pins which may potentially
inject negative current.
Any positive injection current within the limits specified for I INJ(PIN) and ΣI INJ(PIN) in Section 5.3.14 does not
affect the ADC accuracy.
Symbol Parameter Test conditions Typ Max (4)
4. Based on characterisation, not tested in production.
Unit
ET Total unadjusted error
f PCLK2 = 56 MHz,
f ADC = 14 MHz, R AIN < 10 kΩ,
V DDA = 2.4 V to 3.6 V
Measurements made after
ADC calibration
±2 ±5
LSB
EO Offset error ±1.5 ±2.5
EG Gain error ±1.5 ±3
ED Differential linearity error ±1 ±2
EL Integral linearity error ±1.5 ±3
E O
E G
1 LSB IDEAL
(1) Example of an actual transfer curve
(2) The ideal transfer curve
(3) End point correlation line
E T =Total Unadjusted Error: maximum deviation
between the actual and the ideal transfer curves.
E O =Offset Error: deviation between the first actual
transition and the first ideal one.
E G =Gain Error: deviation between the last ideal
transition and the last actual one.
E D =Differential Linearity Error: maximum deviation
between actual steps and the ideal one.
E L =Integral Linearity Error: maximum deviation
between any actual transition and the end point
correlation line.
4095
4094
4093
5
4
3
2
1
0
7
6
1 2 3 4 5 6 7 4093 4094 4095 4096
(1)
(2)
E T
E D
E L
(3)
V DDA V SSA
ai14395b
V REF+
4096
(or depending on package)]
V DDA
4096
[1LSB IDEAL =

<!-- *P107*/136 -->
[P107]: #P107
<a id="P107"></a>



**Figure 58**. Typical connection diagram using the ADC

1. Refer to Table 59 for the values of R AIN , R ADC and C ADC .
2. C parasitic represents the capacitance of the PCB (dependent on soldering and PCB layout quality) plus the
pad capacitance (roughly 7 pF). A high C parasitic value will downgrade conversion accuracy. To remedy
this, f ADC should be reduced.
General PCB design guidelines
Power supply decoupling should be performed as shown in Figure 59 or Figure 60,
depending on whether V REF+ is connected to V DDA or not. The 10 nF capacitors should be
ceramic (good quality). They should be placed them as close as possible to the chip.

**Figure 59**. Power supply and reference decoupling (V REF+ not connected to V DDA )

1. V REF+ and V REF– inputs are available only on 100-pin packages.
ai14150c
STM32F103xx
V DD
AINx
I L ±1 µA
0.6 V
V T
R AIN (1)
C parasitic
V AIN
0.6 V
V T
R ADC (1)
12-bit
converter
C ADC (1)
Sample and hold ADC
converter
V REF+
(see note 1)
STM32F103xx
V DDA
V SSA /V REF–
(see note 1)
1 µF // 10 nF
1 µF // 10 nF
ai14388b

<!-- *P108*/136 -->
[P108]: #P108
<a id="P108"></a>


**Figure 60**. Power supply and reference decoupling (V REF+ connected to V DDA )

1. V REF+ and V REF– inputs are available only on 100-pin packages.
V REF+ /V DDA
STM32F103xx
1 µF // 10 nF
V REF– /V SSA
ai14389
(See note 1)
(See note 1)

<!-- *P109*/136 -->
[P109]: #P109
<a id="P109"></a>



//5.3.20 DAC electrical specifications
--------------------------------------



**Table 63**. DAC characteristics

Symbol Parameter Min Typ Max Unit Comments
V DDA Analog supply voltage 2.4 - 3.6 V
V REF+ Reference supply voltage 2.4 - 3.6 V V REF+ must always be below V DDA
V SSA Ground 0 - 0 V
R LOAD (1) Resistive load with buffer ON 5 - kΩ
R O (1)
Impedance output with buffer
OFF
- - 15 kΩ
When the buffer is OFF, the Minimum
resistive load between DAC_OUT
and V SS to have a 1% accuracy is
1.5 MΩ
C LOAD (1) Capacitive load - - 50 pF
Maximum capacitive load at
DAC_OUT pin (when the buffer is
ON).
DAC_OUT
min (1)
Lower DAC_OUT voltage
with buffer ON
0.2 - - V
It gives the maximum output
excursion of the DAC.
It corresponds to 12-bit input code
(0x0E0) to (0xF1C) at V REF+ = 3.6 V
and (0x155) and (0xEAB) at V REF+ =
2.4 V
DAC_OUT
max (1)
Higher DAC_OUT voltage
with buffer ON
- - V DDA – 0.2 V
DAC_OUT
min (1)
Lower DAC_OUT voltage
with buffer OFF
- 0.5 mV
It gives the maximum output
excursion of the DAC.
DAC_OUT
max (1)
Higher DAC_OUT voltage
with buffer OFF
- V REF+ – 1LSB V
I DDVREF+
DAC DC current
consumption in quiescent
mode (Standby mode)
- 220 µA
With no load, worst code (0xF1C) at
V REF+ = 3.6 V in terms of DC
consumption on the inputs
I DDA
DAC DC current
consumption in quiescent
mode (Standby mode)
- 380 µA
With no load, middle code (0x800) on
the inputs
- 480 µA
With no load, worst code (0xF1C) at
V REF+ = 3.6 V in terms of DC
consumption on the inputs
DNL (2)
Differential non linearity
Difference between two
consecutive code-1LSB)
- ±0.5 LSB
Given for the DAC in 10-bit
configuration
- ±2 LSB
Given for the DAC in 12-bit
configuration
INL (2)
Integral non linearity
(difference between
measured value at Code i
and the value at Code i on a
line drawn between Code 0
and last Code 1023)
- - ±1 LSB
Given for the DAC in 10-bit
configuration
- - ±4 LSB
Given for the DAC in 12-bit
configuration

<!-- *P110*/136 -->
[P110]: #P110
<a id="P110"></a>


**Figure 61**. 12-bit buffered /non-buffered DAC

1. The DAC integrates an output buffer that can be used to reduce the output impedance and to drive external loads directly
without the use of an external operational amplifier. The buffer can be bypassed by configuring the BOFFx bit in the
DAC_CR register.
Offset (2)
Offset error
(difference between
measured value at Code
(0x800) and the ideal value =
V REF+ /2)
- - ±10 mV
Given for the DAC in 12-bit
configuration
- - ±3 LSB
Given for the DAC in 10-bit at V REF+
= 3.6 V
- - ±12 LSB
Given for the DAC in 12-bit at V REF+
= 3.6 V
Gain
error (2)
Gain error - - ±0.5 %
Given for the DAC in 12bit
configuration
t SETTLING (2)
Settling time (full scale: for a
10-bit input code transition
between the lowest and the
highest input codes when
DAC_OUT reaches final
value ±1LSB
- 3 4 µs C LOAD ≤ 50 pF, R LOAD ≥ 5 kΩ
Update
rate (2)
Max frequency for a correct
DAC_OUT change when
small variation in the input
code (from code i to i+1LSB)
- - 1 MS/s C LOAD ≤ 50 pF, R LOAD ≥ 5 kΩ
t WAKEUP (2)
Wakeup time from off state
(Setting the ENx bit in the
DAC Control register)
- 6.5 10 µs
C LOAD ≤ 50 pF, R LOAD ≥ 5 kΩ
input code between lowest and
highest possible ones.
PSRR+ (1)
Power supply rejection ratio
(to V DDA ) (static DC
measurement
- –67 –40 dB No R LOAD , C LOAD = 50 pF
1. Guaranteed by design, not tested in production.
2. Guaranteed by characterization, not tested in production.

Table 63. DAC characteristics (continued)

Symbol Parameter Min Typ Max Unit Comments
R LOAD
C LOAD
Buffered/Non-buffered DAC
DACx_OUT
Buffer(1)
12-bit
digital to
analog
converter
ai17157

<!-- *P111*/136 -->
[P111]: #P111
<a id="P111"></a>



//5.3.21 Temperature sensor characteristics
-------------------------------------------



**Table 64**. TS characteristics

Symbol Parameter Min Typ Max Unit
T L V SENSE linearity with temperature - ±1 ±2 °C
Avg_Slope Average slope 4.0 4.3 4.6 mV/°C
V 25 Voltage at 25 °C 1.34 1.43 1.52 V
t START (1)
1. Guaranteed by design, not tested in production.
Startup time 4 - 10 µs
T S_temp (2)(1)
2. Shortest sampling time can be determined in the application by multiple iterations.
ADC sampling time when reading the
temperature
- - 17.1 µs

<!-- *P112*/136 -->
[P112]: #P112
<a id="P112"></a>


/6 Package characteristics
==========================


//6.1 Package mechanical data
-----------------------------

In order to meet environmental requirements, ST offers these devices in different grades of
ECOPACK® packages, depending on their level of environmental compliance. ECOPACK®
specifications, grade definitions and product status are available at: www.st.com.
ECOPACK® is an ST trademark.

**Figure 62**. BGA pad footprint



**Table 65**. Recommended PCB design rules (0.80/0.75 mm pitch BGA)

Dimension Recommended values
Dpad ∅ = 0.37 mm
Dsm ∅ = 0.52 mm typ. (depends on solder mask registration tolerance)
Solder paste 0.37 mm aperture diameter
– Non solder mask defined pads are recommended
– 4 to 6 mils screen print
????
???
?????????

<!-- *P113*/136 -->
[P113]: #P113
<a id="P113"></a>



**Figure 63**. LFBGA144 – 144-ball low profile fine pitch ball grid array, 10 x 10 mm,

0.8 mm pitch, package outline
1. Drawing is not to scale.


**Table 66**. LFBGA144 – 144-ball low profile fine pitch ball grid array, 10 x 10 mm,

0.8 mm pitch, package data
Symbol
millimeters inches (1)
1. Values in inches are converted from mm and rounded to 4 decimal digits.
Min Typ Max Typ Min Max
A 1.70 0.0669
A1 0.21 0.0083
A2 1.07 0.0421
A3 0.27 0.0106
A4 0.85 0.0335
b 0.35 0.40 0.45 0.0138 0.0157 0.0177
D 9.85 10.00 10.15 0.3878 0.3937 0.3996
D1 8.80 0.3465
E 9.85 10.00 10.15 0.3878 0.3937 0.3996
E1 8.80 0.3465
e 0.80 0.0315
F 0.60 0.0236
ddd 0.10 0.0039
eee 0.15 0.0059
fff 0.08 0.0031
Seating plane
C
A2
A4
A3
C ddd
A1
A
B
A
D1
e F
D
F
E1 E
e
M
eee M C A B
C fff
(144 balls) Øb
M
Ø
Ø
X3_ME
Ball A1

<!-- *P114*/136 -->
[P114]: #P114
<a id="P114"></a>


**Figure 64**. LFBGA100 - 10 x 10 mm low profile fine pitch ball grid array package

outline
1. Drawing is not to scale.


**Table 67**. LFBGA100 - 10 x 10 mm low profile fine pitch ball grid array package

mechanical data
Symbol
millimeters inches (1)
1. Values in inches are converted from mm and rounded to 4 decimal digits.
Min Typ Max Min Typ Max
A 1.700 0.0669
A1 0.270 0.0106
A2 1.085 0.0427
A3 0.30 0.0118
A4 0.80 0.0315
b 0.45 0.50 0.55 0.0177 0.0197 0.0217
D 9.85 10.00 10.15 0.3878 0.3937 0.3996
D1 7.20 0.2835
E 9.85 10.00 10.15 0.3878 0.3937 0.3996
E1 7.20 0.2835
e 0.80 0.0315
F 1.40 0.0551
ddd 0.12 0.0047
eee 0.15 0.0059
fff 0.08 0.0031

<!-- *P115*/136 -->
[P115]: #P115
<a id="P115"></a>



**Figure 65**. WLCSP, 64-ball 4.466 × 4.395 mm, 0.500 mm pitch, wafer-level chip-scale

package outline
1. Drawing is not to scale.
2. Primary datum Z and seating plane are defined by the spherical crowns of the ball.


**Table 68**. WLCSP, 64-ball 4.466 × 4.395 mm, 0.500 mm pitch, wafer-level chip-scale

package mechanical data
Symbol
millimeters inches (1)
1. Values in inches are converted from mm and rounded to 4 decimal digits.
Min Typ Max Min Typ Max
A 0.535 0.585 0.635 0.0211 0.0230 0.0250
A1 0.205 0.230 0.255 0.0081 0.0091 0.0100
A2 0.330 0.355 0.380 0.0130 0.0140 0.0150
b (2)
2. Dimension is measured at the maximum ball diameter parallel to primary datum Z.
0.290 0.320 0.350 0.0114 0.0126 0.0138
e 0.500 0.0197
e1 3.500 0.1378
F 0.447 0.0176
G 0.483 0.0190
D 4.446 4.466 4.486 0.1750 0.1758 0.1766
E 4.375 4.395 4.415 0.1722 0.1730 0.1738
H 0.250 0.0098
L 0.200 0.0079
eee 0.05 0.0020
aaa 0.10 0.0039
Number of balls 64
A
B
C
D
E
F
G
H
1 2 3 4 5 6 7 8
Detail A
Side view
Ball side
Wafer back side
Marking area
A1 ball corner
A
A2
A1 ball corner
Notch
Ball
A1
b
Seating plane (see note 2)
Detail A rotated 90 ˚ CR_ME
e
e
e1
e1
F
G
D
E
aaa
eee
H
L
L

<!-- *P116*/136 -->
[P116]: #P116
<a id="P116"></a>


**Figure 66**. BGA pad footprint



**Table 69**. Recommended PCB design rules (0.5mm pitch BGA)

Dimension Recommended values
Dpad ∅ = 300 µm (circular) - 250 µm recommended
Dsm ∅ = 340 µm min (for 300 µm diameter pad)
PCD pad size Cu - Ni (2-6 µm) - Au (0.2 µm max)
– Non solder mask defined
– Micro via under bump allowed
????
???
?????????

<!-- *P117*/136 -->
[P117]: #P117
<a id="P117"></a>



**Figure 67**. LQFP144, 20 x 20 mm, 144-pin low-profile quad flat package outline

1. Drawing is not to scale. Dimensions are in millimeter.

?
??????????????
?????
???????????
???????
???????
?????
?
??
??
??
??
?
?
??? ?
?
? ??
??
???
???
??? ??
??
????????
??
?
??
??
?
?
?
??

**Table 70**. LQFP144, 20 x 20 mm, 144-pin low-profile quad flat package mechanical data

Symbol
millimeters inches (1)
Min Typ Max Min Typ Max
A - - 1600 - - 0.0630
A1 0.050 - 0.150 0.0020 - 0.0059
A2 1.350 1.400 1.450 0.0531 0.0551 0.0571
b 0.170 0.220 0.270 0.0067 0.0087 0.0106
c 0.090 - 0.200 0.0035 - 0.0079
D 21.800 22.000 22.200 0.8583 0.8661 0.8740
D1 19.800 20.000 20.200 0.7795 0.7874 0.7953
D3 - 17.500 - - 0.6890 -
E 21.800 22.000 22.200 0.8583 0.8661 0.8740
E1 19.800 20.000 20.200 0.7795 0.7874 0.7953

<!-- *P118*/136 -->
[P118]: #P118
<a id="P118"></a>


**Figure 68**. LQFP144 recommended footprint

E3 - 17.500 - - 0.6890 -
e - 0.500 - - 0.0197 -
L 0.450 0.600 0.750 0.0177 0.0236 0.0295
L1 - 1.000 - - 0.0394 -
k 0° 3.5° 7° 0° 3.5° 7°
ccc - - 0.08 - - 0.0031
1. Values in inches are converted from mm and rounded to 4 decimal digits.

Table 70. LQFP144, 20 x 20 mm, 144-pin low-profile quad flat package mechanical data

Symbol
millimeters inches (1)
Min Typ Max Min Typ Max
???
????
????
?????
????
????
????
????
????????
?
??
??
??
?? ???
???
???

<!-- *P119*/136 -->
[P119]: #P119
<a id="P119"></a>


Device marking for LQFP144
The following figure shows the device marking for the LQFP144 package.

**Figure 69**. LQFP144 marking example (package top view)

1. Parts marked as “ES”, “E” or accompanied by an Engineering Sample notification letter, are not yet
qualified and therefore not yet ready to be used in production and any consequences deriving from such
usage will not be at ST charge. In no event, ST will be liable for any customer usage of these engineering
samples in production. ST Quality has to be contacted prior to any decision to use these Engineering
samples to run qualification activity.
??????????
?????????
????????????????
?????????????
?
?????????????????????? ???
?????????????
? ??
??????????????????

<!-- *P120*/136 -->
[P120]: #P120
<a id="P120"></a>


**Figure 70**. LFP100 – 14 x 14 mm 100 pin low-profile quad flat package outline

1. Drawing is not to scale.
?
??????????????
?????
???????????
???????
?????????????
?
??
??
??
??
?
?
??? ?
?
? ??
??
???
??
?? ??
??
????????
??
?
??
??
?
?
?
??

<!-- *P121*/136 -->
[P121]: #P121
<a id="P121"></a>




**Figure 71**. LQFP100 recommended footprint

1. Dimensions are in millimeters.

**Table 71**. LQPF100 – 14 x 14 mm 100-pin low-profile quad flat package mechanical data

Symbol
millimeters inches (1)
Min Typ Max Min Typ Max
A - - 1.600 - - 0.0630
A1 0.050 - 0.150 0.0020 - 0.0059
A2 1.350 1.400 1.450 0.0531 0.0551 0.0571
b 0.170 0.220 0.270 0.0067 0.0087 0.0106
c 0.090 - 0.200 0.0035 - 0.0079
D 15.800 16.000 16.200 0.6220 0.6299 0.6378
D1 13.800 14.000 14.200 0.5433 0.5512 0.5591
D3 - 12.000 - - 0.4724 -
E 15.800 16.000 16.200 0.6220 0.6299 0.6378
E1 13.800 14.000 14.200 0.5433 0.5512 0.5591
E3 - 12.000 - - 0.4724 -
e - 0.500 - - 0.0197 -
L 0.450 0.600 0.750 0.0177 0.0236 0.0295
L1 - 1.000 - - 0.0394 -
k 0° 3.5° 7° 0° 3.5° 7°
ccc - - 0.08 - - 0.0031
1. Values in inches are converted from mm and rounded to 4 decimal digits.
?? ??
?? ??
???
???
???? ????
??? ??
????
??
???
????
?
????????

<!-- *P122*/136 -->
[P122]: #P122
<a id="P122"></a>

Device marking for LQFP100
The following figure shows the device marking for the LQFP100 package.

**Figure 72**. LQFP100 marking example (package top view)

1. Parts marked as “ES”, “E” or accompanied by an Engineering Sample notification letter, are not yet
qualified and therefore not yet ready to be used in production and any consequences deriving from such
usage will not be at ST charge. In no event, ST will be liable for any customer usage of these engineering
samples in production. ST Quality has to be contacted prior to any decision to use these Engineering
samples to run qualification activity.
??????????
?????????
?????? ?
?????????????????????? ???
?????????????
?? ?
?????????
??????????????
????
????????????????

<!-- *P123*/136 -->
[P123]: #P123
<a id="P123"></a>



**Figure 73**. LFP64 – 10 x 10 mm 64 pin low-profile quad flat package outline

1. Drawing is not in scale.

????????
??
??
?
?????????????
??? ?
?
?
?
??
?
??
?
??????????????
?????
?
??
??
?
? ??
??
??
?? ??
??
??
??
??
?
???????????
???????

**Table 72**. LQFP64 – 10 x 10 mm 64 pin low-profile quad flat package mechanical data

Symbol
millimeters inches (1)
Min Typ Max Min Typ Max
A - - 1.600 - - 0.0630
A1 0.050 - 0.150 0.0020 - 0.0059
A2 1.350 1.400 1.450 0.0531 0.0551 0.0571
b 0.170 0.220 0.270 0.0067 0.0087 0.0106
c 0.090 - 0.200 0.0035 - 0.0079
D - 12.000 - - 0.4724 -
D1 - 10.000 - - 0.3937 -
D3 - 7.500 - - 0.2953 -
E - 12.000 - - 0.4724 -
E1 - 10.000 - - 0.3937 -
E3 - 7.500 - - 0.2953 -
e - 0.500 - - 0.0197 -

<!-- *P124*/136 -->
[P124]: #P124
<a id="P124"></a>


**Figure 74**. LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat recommended footprint

1. Dimensions are in millimeters.
θ 0° 3.5° 7° 0° 3.5° 7°
L 0.450 0.600 0.750 0.0177 0.0236 0.0295
L1 - 1.000 - - 0.0394 -
ccc - - 0.080 - - 0.0031
1. Values in inches are converted from mm and rounded to 4 decimal digits.

Table 72. LQFP64 – 10 x 10 mm 64 pin low-profile quad flat package mechanical data

Symbol
millimeters inches (1)
Min Typ Max Min Typ Max
??
??
??
??
??
?
??
???
???
??
????
????
????
???
???
????
????????

<!-- *P125*/136 -->
[P125]: #P125
<a id="P125"></a>


Device marking for LQFP64
The following figure shows the device marking for the LQFP64 package.

**Figure 75**. LQFP64 marking example (package top view)

1. Parts marked as “ES”, “E” or accompanied by an Engineering Sample notification letter, are not yet
qualified and therefore not yet ready to be used in production and any consequences deriving from such
usage will not be at ST charge. In no event, ST will be liable for any customer usage of these engineering
samples in production. ST Quality has to be contacted prior to any decision to use these Engineering
samples to run qualification activity.

??????????
?????????
?
? ??
?????????????
?????????
????????????????
?????????????????????? ???
????

<!-- *P126*/136 -->
[P126]: #P126
<a id="P126"></a>


//6.2 Thermal characteristics
-----------------------------

The maximum chip junction temperature (T J max) must never exceed the values given in
Table 10: General operating conditions on page 43.
The maximum chip-junction temperature, T J max, in degrees Celsius, may be calculated
using the following equation:
T J max = T A max + (P D max x Θ JA )
Where:
● T A max is the maximum ambient temperature in °C,
● Θ JA is the package junction-to-ambient thermal resistance, in °C/W,
● P D max is the sum of P INT max and P I/O max (P D max = P INT max + P I/O max),
● P INT max is the product of I DD and V DD , expressed in Watts. This is the maximum chip
internal power.
P I/O max represents the maximum power dissipation on output pins where:
P I/O max = Σ (V OL × I OL ) + Σ((V DD – V OH ) × I OH ),
taking into account the actual V OL / I OL and V OH / I OH of the I/Os at low and high level in the
application.


//6.2.1 Reference document
--------------------------

JESD51-2 Integrated Circuits Thermal Test Method Environment Conditions - Natural
Convection (Still Air). Available from www.jedec.org

**Table 73**. Package thermal characteristics

Symbol Parameter Value Unit
Θ JA
Thermal resistance junction-ambient
LFBGA144 - 10 × 10 mm / 0.8 mm pitch
40
°C/W
Thermal resistance junction-ambient
LQFP144 - 20 × 20 mm / 0.5 mm pitch
30
Thermal resistance junction-ambient
LFBGA100 - 10 × 10 mm / 0.8 mm pitch
40
Thermal resistance junction-ambient
LQFP100 - 14 × 14 mm / 0.5 mm pitch
46
Thermal resistance junction-ambient
LQFP64 - 10 × 10 mm / 0.5 mm pitch
45
Thermal resistance junction-ambient
WLCSP64
50

<!-- *P127*/136 -->
[P127]: #P127
<a id="P127"></a>



//6.2.2 Selecting the product temperature range
-----------------------------------------------

When ordering the microcontroller, the temperature range is specified in the ordering
information scheme shown in Table 74: Ordering information scheme.
Each temperature range suffix corresponds to a specific guaranteed ambient temperature at
maximum dissipation and, to a specific maximum junction temperature.
As applications do not commonly use the STM32F103xC, STM32F103xD and
STM32F103xE at maximum dissipation, it is useful to calculate the exact power
consumption and junction temperature to determine which temperature range will be best
suited to the application.
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
Using the values obtained in Table 73 T Jmax is calculated as follows:
– For LQFP100, 46 °C/W
T Jmax = 82 °C + (46 °C/W × 447 mW) = 82 °C + 20.6 °C = 102.6 °C
This is within the range of the suffix 6 version parts (–40 < T J < 105 °C).
In this case, parts must be ordered at least with the temperature range suffix 6 (see
Table 74: Ordering information scheme).
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

<!-- *P128*/136 -->
[P128]: #P128
<a id="P128"></a>

Using the values obtained in Table 73 T Jmax is calculated as follows:
– For LQFP100, 46 °C/W
T Jmax = 115 °C + (46 °C/W × 134 mW) = 115 °C + 6.2 °C = 121.2 °C
This is within the range of the suffix 7 version parts (–40 < T J < 125 °C).
In this case, parts must be ordered at least with the temperature range suffix 7 (see
Table 74: Ordering information scheme).

**Figure 76**. LQFP100 P D max vs. T A

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

<!-- *P129*/136 -->
[P129]: #P129
<a id="P129"></a>



/7 Part numbering
=================


For a list of available options (speed, package, etc.) or for further information on any aspect
of this device, please contact your nearest ST sales office.

**Table 74**. Ordering information scheme

Example: STM32 F 103 R C T 6 xxx
Device family
STM32 = ARM-based 32-bit microcontroller
Product type
F = general-purpose
Device subfamily
103 = performance line
Pin count
R = 64 pins
V = 100 pins
Z = 144 pins
Flash memory size
C = 256 Kbytes of Flash memory
D = 384 Kbytes of Flash memory
E = 512 Kbytes of Flash memory
Package
H = BGA
T = LQFP
Y = WLCSP64
Temperature range
6 = Industrial temperature range, –40 to 85 °C.
7 = Industrial temperature range, –40 to 105 °C.
Options
xxx = programmed parts
TR = tape and real

<!-- *P130*/136 -->
[P130]: #P130
<a id="P130"></a>


/8 Revision history
===================



**Table 75**. Document revision history

Date Revision Changes
07-Apr-2008 1 Initial release.
22-May-2008 2
Document status promoted from Target Specification to Preliminary
Data.
Section 1: Introduction and Section 2.2: Full compatibility throughout
the family modified. Small text changes.
Note 2 added in Table 2: STM32F103xC, STM32F103xD and
STM32F103xE features and peripheral counts on page 11.
LQPF100/BGA100 column added to Table 6: FSMC pin definition on
page 37.
Values and Figures added to Maximum current consumption on
page 62 (see Table 18, Table 19, Table 20 and Table 21 and see
Figure 14, Figure 15, Figure 17, Figure 18 and Figure 19).
Values added to Typical current consumption on page 73 (see
Table 22, Table 23 and Table 24). Table 19: Typical current
consumption in Standby mode removed.
Note 4 and Note 1 added to Table 65: USB DC electrical characteristics
and Table 66: USB: full-speed electrical characteristics on page 129,
respectively.
V USB added to Table 65: USB DC electrical characteristics on
page 129.
Figure 68: Recommended footprint (1) on page 143 corrected.
Equation 1 corrected. Figure 73: LQFP100 P D max vs. T A on page 149
modified.
Tolerance values corrected in Table 74: LFBGA144 – 144-ball low
profile fine pitch ball grid array, 10 x 10 mm, 0.8 mm pitch, package
data on page 139.

<!-- *P131*/136 -->
[P131]: #P131
<a id="P131"></a>


21-Jul-2008 3
Document status promoted from Preliminary Data to full datasheet.
FSMC (flexible static memory controller) on page 22 modified.
Number of complementary channels corrected in Figure 1:
STM32F103xF, STM32F103xD and STM32F103xGSTM32F103xF and
STM32F103xG performance line block diagram.
Power supply supervisor on page 23 modified and V DDA added to
Table 14: General operating conditions on page 59.
Table notes revised in Section 5: Electrical characteristics.
Capacitance modified in Figure 12: Power supply scheme on page 57.
Table 60: SCL frequency (f PCLK1 = 36 MHz.,V DD = 3.3 V) updated.
Table 61: SPI characteristics modified, t h(NSS) modified in Figure 49:
SPI timing diagram - slave mode and CPHA = 0 on page 123.
Minimum SDA and SCL fall time value for Fast mode removed from
Table 59: I2C characteristics on page 120, note 1 modified.
I DD_VBAT values and some I DD values with regulator in run mode added
to Table 21: Typical and maximum current consumptions in Stop and
Standby modes on page 68.
Table 34: Flash memory endurance and data retention on page 87
updated.
t su(NSS) modified in Table 61: SPI characteristics on page 122.
EO corrected in Table 70: ADC accuracy on page 132. Figure 58:
Typical connection diagram using the ADC on page 133 and note below
corrected.
Typical T S_temp value removed from Table 72: TS characteristics on
page 137.
Section 6.1: Package mechanical data on page 138 updated.
Small text changes.

Table 75. Document revision history

Date Revision Changes

<!-- *P132*/136 -->
[P132]: #P132
<a id="P132"></a>

12-Dec-2008 4
Timers specified on page 1 (motor control capability mentioned).
Section 2.2: Full compatibility throughout the family updated.
Table 6: High-density timer feature comparison added.
General-purpose timers (TIMx) and Advanced-control timers (TIM1 and
TIM8) on page 27 updated.
Figure 1: STM32F103xF, STM32F103xD and
STM32F103xGSTM32F103xF and STM32F103xG performance line
block diagram modified.
Note 10 added, main function after reset and Note 5 on page 44
updated in Table 8: High-density STM32F103xx pin definitions.
Note 2 modified below Table 11: Voltage characteristics on page 58,
|ΔV DDx | min and |ΔV DDx | min removed.
Note 2 and P D values for LQFP144 and LFBGA144 packages added to
Table 14: General operating conditions on page 59.
Measurement conditions specified in Section 5.3.5: Supply current
characteristics on page 62.
Max values at T A = 85 °C and T A = 105 °C updated in Table 21: Typical
and maximum current consumptions in Stop and Standby modes on
page 68.
Section 5.3.10: FSMC characteristics on page 87 updated.
Data added to Table 50: EMI characteristics on page 111.
I VREF added to Table 67: ADC characteristics on page 130.
Table 81: Package thermal characteristics on page 146 updated.
Small text changes.

Table 75. Document revision history

Date Revision Changes

<!-- *P133*/136 -->
[P133]: #P133
<a id="P133"></a>


30-Mar-2009 5
I/O information clarified on page 1. Figure 4: STM32F103xC and
STM32F103xE performance line BGA100 ballout corrected.
I/O information clarified on page 1.
In Table 5: High-density STM32F103xx pin definitions:
– I/O level of pins PF11, PF12, PF13, PF14, PF15, G0, G1 and G15
updated
– PB4, PB13, PB14, PB15, PB3/TRACESWO moved from Default
column to Remap column
PG14 pin description modified in Table 6: FSMC pin definition.
Figure 9: Memory map on page 54 modified.
Note modified in Table 18: Maximum current consumption in Run mode,
code with data processing running from Flash and Table 20: Maximum
current consumption in Sleep mode, code running from Flash or RAM.
Figure 17, Figure 18 and Figure 19 show typical curves (titles
changed).
Table 25: High-speed external user clock characteristics and Table 26:
Low-speed external user clock characteristics modified. ACC HSI max
values modified in Table 29: HSI oscillator characteristics.
FSMC configuration modified for Asynchronous waveforms and timings.
Notes modified below Figure 24: Asynchronous non-multiplexed
SRAM/PSRAM/NOR read waveforms and Figure 25: Asynchronous
non-multiplexed SRAM/PSRAM/NOR write waveforms.
t w(NADV) values modified in Table 35: Asynchronous non-multiplexed
SRAM/PSRAM/NOR read timings and Table 39: Asynchronous
multiplexed PSRAM/NOR write timings. t h(Data_NWE) modified in
Table 36: Asynchronous non-multiplexed SRAM/PSRAM/NOR write
timings
In Table 41: Synchronous multiplexed PSRAM write timings and
Table 43: Synchronous non-multiplexed PSRAM write timings:
– t v(Data-CLK) renamed as t d(CLKL-Data)
– t d(CLKL-Data) min value removed and max value added
– t h(CLKL-DV) / t h(CLKL-ADV) removed
Figure 28: Synchronous multiplexed NOR/PSRAM read timings,
Figure 29: Synchronous multiplexed PSRAM write timings and
Figure 31: Synchronous non-multiplexed PSRAM write timings
modified.
Figure 52: I2S slave timing diagram (Philips protocol)(1) and Figure 53:
I2S master timing diagram (Philips protocol)(1) modified.
WLCSP64 package added (see Figure 8: STM32F103xC and
STM32F103xE performance line WLCSP64 ballout, ball side, Table 8:
High-density STM32F103xx pin definitions, Figure 65: WLCSP, 64-ball
4.466 × 4.395 mm, 0.500 mm pitch, wafer-level chip-scale package
outline and Table 76: WLCSP, 64-ball 4.466 × 4.395 mm, 0.500 mm
pitch, wafer-level chip-scale package mechanical data).
Small text changes.

Table 75. Document revision history

Date Revision Changes

<!-- *P134*/136 -->
[P134]: #P134
<a id="P134"></a>

21-Jul-2009 6
Figure 1: STM32F103xC, STM32F103xD and STM32F103xE
performance line block diagram updated.
Note 5 updated and Note 4 added in Table 5: High-density
STM32F103xx pin definitions.
V RERINT and T Coeff added to Table 13: Embedded internal reference
voltage.
Table 16: Maximum current consumption in Sleep mode, code running
from Flash or RAM modified.
f HSE_ext min modified in Table 21: High-speed external user clock
characteristics.
C L1 and C L2 replaced by C in Table 23: HSE 4-16 MHz oscillator
characteristics and Table 24: LSE oscillator characteristics (fLSE =
32.768 kHz), notes modified and moved below the tables.
Note 1 modified below Figure 29: Synchronous multiplexed PSRAM
write timings. Table 25: HSI oscillator characteristics modified.
Conditions removed from Table 27: Low-power mode wakeup timings.
Jitter added to Table 28: PLL characteristics.
Figure 47: Recommended NRST pin protection modified.
In Table 31: Asynchronous non-multiplexed SRAM/PSRAM/NOR read
timings: t h(BL_NOE) and t h(A_NOE) modified.
In Table 32: Asynchronous non-multiplexed SRAM/PSRAM/NOR write
timings: t h(A_NWE) and t h(Data_NWE) modified.
In Table 33: Asynchronous multiplexed PSRAM/NOR read timings:
t h(AD_NADV) and t h(A_NOE) modified.
In Table 34: Asynchronous multiplexed PSRAM/NOR write timings:
t h(A_NWE) modified.
In Table 35: Synchronous multiplexed NOR/PSRAM read timings:
t h(CLKH-NWAITV) modified.
In Table 40: Switching characteristics for NAND Flash read and write
cycles: t h(NOE-D) modified.
Table 53: SPI characteristics modified. Values added to Table 54: I2S
characteristics and Table 55: SD / MMC characteristics.
C ADC and R AIN parameters modified in Table 59: ADC characteristics.
R AIN max values modified in Table 60: RAIN max for fADC = 14 MHz.
Table 71: DAC characteristics modified. Figure 61: 12-bit buffered /non-
buffered DAC added.
Figure 63: LFBGA100 - 10 x 10 mm low profile fine pitch ball grid array
package outline and Table 75: LFBGA100 - 10 x 10 mm low profile fine
pitch ball grid array package mechanical data updated.
24-Sep-2009 7
Number of DACs corrected in Table 3: STM32F103xx family.
I DD_VBAT updated in Table 17: Typical and maximum current
consumptions in Stop and Standby modes.
Figure 16: Typical current consumption on VBAT with RTC on vs.
temperature at different VBAT values added.
IEC 1000 standard updated to IEC 61000 and SAE J1752/3 updated to
IEC 61967-2 in Section 5.3.11: EMC characteristics on page 84.
Table 63: DAC characteristics modified. Small text changes.

Table 75. Document revision history

Date Revision Changes

<!-- *P135*/136 -->
[P135]: #P135
<a id="P135"></a>


19-Apr-2011 8
Updated package choice for 103Rx in Table 2
Updated footnotes below Table 7: Voltage characteristics on page 42
and Table 8: Current characteristics on page 42
Updated tw min in Table 21: High-speed external user clock
characteristics on page 56
Updated startup time in Table 24: LSE oscillator characteristics (fLSE =
32.768 kHz) on page 60
Updated note 2 in Table 51: I2C characteristics on page 94
Updated Figure 48: I2C bus AC waveforms and measurement circuit
Updated Figure 47: Recommended NRST pin protection
Updated Section 5.3.14: I/O port characteristics
Updated Table 35: Synchronous multiplexed NOR/PSRAM read timings
on page 71
Updated FSMC Figure 26 thru Figure 31
Updated Figure 41.: NAND controller waveforms for common memory
write access and Figure 48.: I2C bus AC waveforms and measurement
circuit
Added Section 5.3.13: I/O current injection characteristics
Updated Figure 67 and added Table 68: WLCSP, 64-ball 4.466 × 4.395
mm, 0.500 mm pitch, wafer-level chip-scale package mechanical data
on page 115
LQFP64 package mechanical data updated: see Figure 73.: LQFP64 –
10 x 10 mm 64 pin low-profile quad flat package outline and Table 72:
LQFP64 – 10 x 10 mm 64 pin low-profile quad flat package mechanical
data on page 123.
30-Sept-2014 9
Added Note 7 in Table 5: High-density STM32F103xx pin definitions on
page 31.
Updated Note 10 in Table 5: High-density STM32F103xx pin definitions
on page 31.
Modified Note 2 in Table 62: ADC accuracy on page 106
Modified Note 3 in Table 62: ADC accuracy on page 106
Modified notes in Table 51: I2C characteristics on page 94
Updated Figure 51: SPI timing diagram - master mode(1) on page 98
23-Feb-2015 10
Updated Figure 67.: LQFP144, 20 x 20 mm, 144-pin low-profile quad
flat package outline, Figure 68.: LQFP144 recommended footprint,

Figure 70.: LFP100 – 14 x 14 mm 100 pin low-profile quad flat package

outline, Figure 71.: LQFP100 recommended footprint, Figure 73.:
LFP64 – 10 x 10 mm 64 pin low-profile quad flat package outline,

Figure 74.: LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat

recommended footprint
Added Figure 69.: LQFP144 marking example (package top view),

Figure 72.: LQFP100 marking example (package top view), Figure 75.:

LQFP64 marking example (package top view)
Updated Table 70: LQFP144, 20 x 20 mm, 144-pin low-profile quad flat
package mechanical data, Table 71: LQPF100 – 14 x 14 mm 100-pin
low-profile quad flat package mechanical data, Table 72: LQFP64 – 10
x 10 mm 64 pin low-profile quad flat package mechanical data

Table 75. Document revision history

Date Revision Changes

<!-- *P136*/136 -->
[P136]: #P136
<a id="P136"></a>


IMPORTANT NOTICE – PLEASE READ CAREFULLY
STMicroelectronics NV and its subsidiaries (“ST”) reserve the right to make changes, corrections, enhancements, modifications, and
improvements to ST products and/or to this document at any time without notice. Purchasers should obtain the latest relevant information on
ST products before placing orders. ST products are sold pursuant to ST’s terms and conditions of sale in place at the time of order
acknowledgement.
Purchasers are solely responsible for the choice, selection, and use of ST products and ST assumes no liability for application assistance or
the design of Purchasers’ products.
No license, express or implied, to any intellectual property right is granted by ST herein.
Resale of ST products with provisions different from the information set forth herein shall void any warranty granted by ST for such product.
ST and the ST logo are trademarks of ST. All other product or service names are the property of their respective owners.
Information in this document supersedes and replaces information previously supplied in any prior versions of this document.
© 2015 STMicroelectronics – All rights reserved
