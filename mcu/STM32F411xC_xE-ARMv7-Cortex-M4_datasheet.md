/STM32F411xC STM32F411xE Datasheeet
===================================
https://www.st.com/en/microcontrollers-microprocessors/stm32f411.html

https://www.st.com/resource/en/datasheet/stm32f411re.pdf

                        This is information on a product in full production. 
                                            December 2017 DocID026289 Rev 7 

                                                    STM32F411xC STM32F411xE 
                       Arm ® Cortex®-M4 32b MCU+FPU, 125 DMIPS, 512KB Flash, 
                 128KB RAM, USB OTG FS, 11 TIMs, 1 ADC, 13 comm. interfaces 
                                                Datasheet - production data 
/Features
=========

*   • Dynamic Efficiency Line with BAM (Batch Acquisition Mode)
    – 1.7 V to 3.6 V power supply
    – - 40°C to 85/105/125 °C temperature range
*   • Core: Arm ® 32-bit Cortex®-M4 CPU with FPU, Adaptive real-time accelerator 
    (ART Accelerator™) allowing 0-wait state execution from Flash memory, 
    frequency up to 100 MHz, memory protection unit, 125 DMIPS/1.25 DMIPS/MHz (Dhrystone 2.1), and DSP instructions
*   • Memories
    – Up to 512 Kbytes of Flash memory
    – 128 Kbytes of SRAM
*   • Clock, reset and supply management
    – 1.7 V to 3.6 V application supply and I/Os
    – POR, PDR, PVD and BOR
    – 4-to-26 MHz crystal oscillator
    – Internal 16 MHz factory-trimmed RC
    – 32 kHz oscillator for RTC with calibration
    – Internal 32 kHz RC with calibration
*   • Power consumption
    – Run: 100 µA/MHz (peripheral off)
    – Stop (Flash in Stop mode, fast wakeup time): 42 µA Typ @ 25C; 65 µA max @25 °C
    – Stop (Flash in Deep power down mode, slow wakeup time): down to 9 µA @ 25 °C; 28 µA max @25 °C
    – Standby: 1.8 µA @25 °C / 1.7 V without RTC; 11 µA @85 °C @1.7 V
    – V BAT supply for RTC: 1 µA @25 °C
*   • 1×12-bit, 2.4 MSPS A/D converter: up to 16 channels
*   • General-purpose DMA: 16-stream DMA controllers with FIFOs and burst support
*   • Up to 11 timers: up to six 16-bit, two 32-bit timers up to 100 MHz, 
    each with up to four IC/OC/PWM or pulse counter and quadrature (incremental) encoder input, two watchdog timers (independent and window) and a SysTick timer
*   • Debug mode
    – Serial wire debug (SWD) & JTAG interfaces
    – Cortex®-M4 Embedded Trace Macrocell™
*   • Up to 81 I/O ports with interrupt capability
    – Up to 78 fast I/Os up to 100 MHz
    – Up to 77 5 V-tolerant I/Os
*   • Up to 13 communication interfaces
    – Up to 3 x I2C interfaces (SMBus/PMBus)
    – Up to 3 USARTs (2 x 12.5 Mbit/s, 1 x 6.25 Mbit/s), ISO 7816 interface, LIN, IrDA, modem control)
    – Up to 5 SPI/I2Ss (up to 50 Mbit/s, SPI or I2S audio protocol), SPI2 and SPI3 with muxed full-duplex I2S to achieve audio class accuracy via internal audio PLL or external clock
    – SDIO interface (SD/MMC/eMMC)
    – Advanced connectivity: USB 2.0 full-speed device/host/OTG controller with on-chip PHY
*   • CRC calculation unit
*   • 96-bit unique ID
*   • RTC: subsecond accuracy, hardware calendar
*   • All packages (WLCSP49, LQFP64/100, UFQFPN48, UFBGA100) are ECOPACK ® 2


[Table 1]: #Table%201
<a id="Table 1"></a>

**Table 1**. Device summary


|  Reference  |              Part number              |
|-------------|---------------------------------------|
| STM32F411xC | STM32F411CC, STM32F411RC, STM32F411VC |
| STM32F411xE | STM32F411CE, STM32F411RE, STM32F411VE |

    WLCSP49  (2.999x3.185 mm)
    UFQFPN48 (7 × 7 mm)
    UFBGA100 (7 × 7 mm) 
    LQFP100  (14 × 14mm)
    LQFP64   (10x10 mm)


<!-- *P2*/149 -->
[P2]: #P2 
<a id="P2"></a>





/Table of Contents
==================

* 1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P10]
* 2 Description  . . . . . . . . . . . . . . . . . . . . . . . . . . . . [P11]
*   2.1 Compatibility with STM32F4 Series  . . . . . . . . . . . . . . . . [P13]
* 3 Functional overview  . . . . . . . . . . . . . . . . . . . . . . . . [P16]
*   3.1 Arm ® Cortex®-M4 with FPU core with embedded Flash and SRAM  . . . [P16]
*   3.2 Adaptive real-time memory accelerator (ART Accelerator™) . . . . . [P16]
*   3.3 Batch Acquisition mode (BAM) . . . . . . . . . . . . . . . . . . . [P16]
*   3.4 Memory protection unit . . . . . . . . . . . . . . . . . . . . . . [P17]
*   3.5 Embedded Flash memory  . . . . . . . . . . . . . . . . . . . . . . [P17]
*   3.6 CRC (cyclic redundancy check) calculation unit . . . . . . . . . . [P17]
*   3.7 Embedded SRAM  . . . . . . . . . . . . . . . . . . . . . . . . . . [P17]
*   3.8 Multi-AHB bus matrix . . . . . . . . . . . . . . . . . . . . . . . [P18]
*   3.9 DMA controller (DMA) . . . . . . . . . . . . . . . . . . . . . . . [P18]
*   3.10 Nested vectored interrupt controller (NVIC) . . . . . . . . . . . [P19]
*   3.11 External interrupt/event controller (EXTI)  . . . . . . . . . . . [P19]
*   3.12 Clocks and startup  . . . . . . . . . . . . . . . . . . . . . . . [P19]
*   3.13 Boot modes  . . . . . . . . . . . . . . . . . . . . . . . . . . . [P20]
*   3.14 Power supply schemes  . . . . . . . . . . . . . . . . . . . . . . [P20]
*   3.15 Power supply supervisor . . . . . . . . . . . . . . . . . . . . . [P21]
*   3.15.1 Internal reset ON . . . . . . . . . . . . . . . . . . . . . . . [P21]
*   3.15.2 Internal reset OFF  . . . . . . . . . . . . . . . . . . . . . . [P21]
*   3.16 Voltage regulator . . . . . . . . . . . . . . . . . . . . . . . . [P22]
*   3.16.1 Regulator ON  . . . . . . . . . . . . . . . . . . . . . . . . . [P22]
*   3.16.2 Regulator OFF . . . . . . . . . . . . . . . . . . . . . . . . . [P22]
*   3.16.3 Regulator ON/OFF and internal power supply supervisor availability [P25]
*   3.17 Real-time clock (RTC) and backup registers  . . . . . . . . . . . [P25]
*   3.18 Low-power modes . . . . . . . . . . . . . . . . . . . . . . . . . [P26]
*   3.19 V BAT operation . . . . . . . . . . . . . . . . . . . . . . . . . [P26]
*   3.20 Timers and watchdogs  . . . . . . . . . . . . . . . . . . . . . . [P27]
*   3.20.1 Advanced-control timers (TIM1)  . . . . . . . . . . . . . . . . [P27]
*   3.20.2 General-purpose timers (TIMx) . . . . . . . . . . . . . . . . . [P28]
*   3.20.3 Independent watchdog  . . . . . . . . . . . . . . . . . . . . . [P28]
*   3.20.4 Window watchdog . . . . . . . . . . . . . . . . . . . . . . . . [P28]
*   3.20.5 SysTick timer . . . . . . . . . . . . . . . . . . . . . . . . . [P29]
*   3.21 Inter-integrated circuit interface (I2C)  . . . . . . . . . . . . [P29]
*   3.22 Universal synchronous/asynchronous receiver transmitters (USART)  [P29]
*   3.23 Serial peripheral interface (SPI) . . . . . . . . . . . . . . . . [P30]
*   3.24 Inter-integrated sound (I2S)  . . . . . . . . . . . . . . . . . [P30]
*   3.25 Audio PLL (PLLI2S)  . . . . . . . . . . . . . . . . . . . . . . . [P30]
*   3.26 Secure digital input/output interface (SDIO)  . . . . . . . . . . [P31]
*   3.27 Universal serial bus on-the-go full-speed (OTG_FS)  . . . . . . . [P31]
*   3.28 General-purpose input/outputs (GPIOs) . . . . . . . . . . . . . . [P31]
*   3.29 Analog-to-digital converter (ADC) . . . . . . . . . . . . . . . . [P32]
*   3.30 Temperature sensor  . . . . . . . . . . . . . . . . . . . . . . . [P32]
*   3.31 Serial wire JTAG debug port (SWJ-DP)  . . . . . . . . . . . . . . [P32]
*   3.32 Embedded Trace Macrocell™ . . . . . . . . . . . . . . . . . . . . [P32]
* 4 Pinouts and pin description  . . . . . . . . . . . . . . . . . . . . [P33]
* 5 Memory mapping . . . . . . . . . . . . . . . . . . . . . . . . . . . [P53]
* 6 Electrical characteristics . . . . . . . . . . . . . . . . . . . . . [P57]
*   6.1 Parameter conditions . . . . . . . . . . . . . . . . . . . . . . . [P57]
*   6.1.1 Minimum and maximum values . . . . . . . . . . . . . . . . . . . [P57]
*   6.1.2 Typical values . . . . . . . . . . . . . . . . . . . . . . . . . [P57]
*   6.1.3 Typical curves . . . . . . . . . . . . . . . . . . . . . . . . . [P57]
*   6.1.4 Loading capacitor  . . . . . . . . . . . . . . . . . . . . . . . [P57]
*   6.1.5 Pin input voltage  . . . . . . . . . . . . . . . . . . . . . . . [P58]
*   6.1.6 Power supply scheme  . . . . . . . . . . . . . . . . . . . . . . [P59]
*   6.1.7 Current consumption measurement  . . . . . . . . . . . . . . . . [P60]
*   6.2 Absolute maximum ratings . . . . . . . . . . . . . . . . . . . . . [P60]
*   6.3 Operating conditions . . . . . . . . . . . . . . . . . . . . . . . [P62]
*   6.3.1 General operating conditions . . . . . . . . . . . . . . . . . . [P62]
*   6.3.2 VCAP_1/VCAP_2 external capacitors  . . . . . . . . . . . . . . . [P64]
*   6.3.3 Operating conditions at power-up/power-down (regulator ON) . . . [P65]
*   6.3.4 Operating conditions at power-up / power-down (regulator OFF)  . [P65]
*   6.3.5 Embedded reset and power control block characteristics . . . . . [P66]
*   6.3.6 Supply current characteristics . . . . . . . . . . . . . . . . . [P67]
*   6.3.7 Wakeup time from low-power modes . . . . . . . . . . . . . . . . [P81]
*   6.3.8 External clock source characteristics  . . . . . . . . . . . . . [P82]
*   6.3.9 Internal clock source characteristics  . . . . . . . . . . . . . [P86]
*   6.3.10 PLL characteristics . . . . . . . . . . . . . . . . . . . . . . [P88]
*   6.3.11 PLL spread spectrum clock generation (SSCG) characteristics . . [P90]
*   6.3.12 Memory characteristics  . . . . . . . . . . . . . . . . . . . . [P91]
*   6.3.13 EMC characteristics . . . . . . . . . . . . . . . . . . . . . . [P93]
*   6.3.14 Absolute maximum ratings (electrical sensitivity) . . . . . . . [P95]
*   6.3.15 I/O current injection characteristics . . . . . . . . . . . . . [P96]
*   6.3.16 I/O port characteristics  . . . . . . . . . . . . . . . . . . . [P97]
*   6.3.17 NRST pin characteristics  . . . . . . . . . . . . . . . . . . . [P103]
*   6.3.18 TIM timer characteristics . . . . . . . . . . . . . . . . . . . [P104]
*   6.3.19 Communications interfaces . . . . . . . . . . . . . . . . . . . [P104]
*   6.3.20 12-bit ADC characteristics  . . . . . . . . . . . . . . . . . . [P113]
*   6.3.21 Temperature sensor characteristics  . . . . . . . . . . . . . . [P119]
*   6.3.22 V BAT monitoring characteristics  . . . . . . . . . . . . . . . [P120]
*   6.3.23 Embedded reference voltage  . . . . . . . . . . . . . . . . . . [P120]
*   6.3.24 SD/SDIO MMC/eMMC card host interface (SDIO) characteristics . . [P121]
*   6.3.25 RTC characteristics . . . . . . . . . . . . . . . . . . . . . . [P123]
* 7 Package information  . . . . . . . . . . . . . . . . . . . . . . . . [P124]
*   7.1 WLCSP49 package information  . . . . . . . . . . . . . . . . . . . [P124]
*   7.2 UFQFPN48 package information . . . . . . . . . . . . . . . . . . . [P127]
*   7.3 LQFP64 package information . . . . . . . . . . . . . . . . . . . . [P130]
*   7.4 LQFP100 package information  . . . . . . . . . . . . . . . . . . . [P133]
*   7.5 UFBGA100 package information . . . . . . . . . . . . . . . . . . . [P137]
*   7.6 Thermal characteristics  . . . . . . . . . . . . . . . . . . . . . [P140]
*   7.6.1 Reference document . . . . . . . . . . . . . . . . . . . . . . . [P140]
* 8 Ordering information . . . . . . . . . . . . . . . . . . . . . . . . [P141]
* Appendix A Recommendations when using the internal reset OFF . . . . . [P142]
*   A.1 Operating conditions . . . . . . . . . . . . . . . . . . . . . . . [P142]
* Appendix B Application block diagrams  . . . . . . . . . . . . . . . . [P143]
*   B.1 USB OTG Full Speed (FS) interface solutions  . . . . . . . . . . . [P143]
*   B.2 Sensor Hub application example . . . . . . . . . . . . . . . . . . [P145]
*   B.3 Batch Acquisition Mode (BAM) example . . . . . . . . . . . . . . . [P146]
* Revision history . . . . . . . . . . . . . . . . . . . . . . . . . . . [P147]

//List of tables
----------------

*   [Table 1]. Device summary  . . . . . . . . . . . . . . . . . . . . . . . [P1]
*   [Table 2]. STM32F411xC/xE features and peripheral counts . . . . . . . . [P12]
*   [Table 3]. Regulator ON/OFF and internal power supply supervisor availability [P25]
*   [Table 4]. Timer feature comparison  . . . . . . . . . . . . . . . . . . [P27]
*   [Table 5]. Comparison of I2C analog and digital filters  . . . . . . . . [P29]
*   [Table 6]. USART feature comparison  . . . . . . . . . . . . . . . . . . [P30]
*   [Table 7]. Legend/abbreviations used in the pinout table . . . . . . . . [P38]
*   [Table 8]. STM32F411xC/xE pin definitions  . . . . . . . . . . . . . . . [P38]
*   [Table 9]. Alternate function mapping  . . . . . . . . . . . . . . . . . [P47]
*   [Table 10]. STM32F411xC/xE register boundary addresses . . . . . . . . . [P53]
*   [Table 11]. Voltage characteristics  . . . . . . . . . . . . . . . . . . [P60]
*   [Table 12]. Current characteristics  . . . . . . . . . . . . . . . . . . [P61]
*   [Table 13]. Thermal characteristics  . . . . . . . . . . . . . . . . . . [P61]
*   [Table 14]. General operating conditions . . . . . . . . . . . . . . . . [P62]
*   [Table 15]. Features depending on the operating power supply range . . . [P63]
*   [Table 16]. VCAP_1/VCAP_2 operating conditions . . . . . . . . . . . . . [P65]
*   [Table 17]. Operating conditions at power-up / power-down (regulator ON) [P65]
*   [Table 18]. Operating conditions at power-up / power-down (regulator OFF) [P65]
*   [Table 19]. Embedded reset and power control block characteristics . . . [P66]
*   [Table 20]. Typical and maximum current consumption, code with data processing (ART accelerator disabled) running from SRAM - V DD = 1.7 V [P68]
*   [Table 21]. Typical and maximum current consumption, code with data processing (ART accelerator disabled) running from SRAM - V DD = 3.6 V [P69]
*   [Table 22]. Typical and maximum current consumption in run mode, code with data processing (ART accelerator enabled except prefetch) running from Flash memory- V DD = 1.7 V [P70]
*   [Table 23]. Typical and maximum current consumption in run mode, code with data processing (ART accelerator enabled except prefetch) running from Flash memory - V DD = 3.6 V [P71]
*   [Table 24]. Typical and maximum current consumption in run mode, code with data processing (ART accelerator disabled) running from Flash memory - V DD = 3.6 V [P72]
*   [Table 25]. Typical and maximum current consumption in run mode, code with data processing (ART accelerator enabled with prefetch) running from Flash memory - V DD = 3.6 V [P73]
*   [Table 26]. Typical and maximum current consumption in Sleep mode - V DD = 3.6 V [P74]
*   [Table 27]. Typical and maximum current consumptions in Stop mode - V DD = 1.7 V [P74]
*   [Table 28]. Typical and maximum current consumption in Stop mode - V DD =3.6 V [P75]
*   [Table 29]. Typical and maximum current consumption in Standby mode - V DD = 1.7 V [P75]
*   [Table 30]. Typical and maximum current consumption in Standby mode - V DD = 3.6 V [P75]
*   [Table 31]. Typical and maximum current consumptions in V BAT mode . . . [P76]
*   [Table 32]. Switching output I/O current consumption . . . . . . . . . . [P78]
*   [Table 33]. Peripheral current consumption . . . . . . . . . . . . . . . [P79]
*   [Table 34]. Low-power mode wakeup timings (1)  . . . . . . . . . . . . . [P82]
*   [Table 35]. High-speed external user clock characteristics . . . . . . . [P82]
*   [Table 36]. Low-speed external user clock characteristics  . . . . . . . [P83]
*   [Table 37]. HSE 4-26 MHz oscillator characteristics  . . . . . . . . . . [P84]
*   [Table 38]. LSE oscillator characteristics (f LSE = 32.768 kHz)  . . . . [P85]
*   [Table 39]. HSI oscillator characteristics . . . . . . . . . . . . . . . [P86]
*   [Table 40]. LSI oscillator characteristics . . . . . . . . . . . . . . . [P87]
*   [Table 41]. Main PLL characteristics . . . . . . . . . . . . . . . . . . [P88]
*   [Table 42]. PLLI2S (audio PLL) characteristics . . . . . . . . . . . . . [P89]
*   [Table 43]. SSCG parameter constraints . . . . . . . . . . . . . . . . . [P90]
*   [Table 44]. Flash memory characteristics . . . . . . . . . . . . . . . . [P91]
*   [Table 45]. Flash memory programming . . . . . . . . . . . . . . . . . . [P92]
*   [Table 46]. Flash memory programming with V PP voltage . . . . . . . . . [P92]
*   [Table 47]. Flash memory endurance and data retention  . . . . . . . . . [P93]
*   [Table 48]. EMS characteristics for LQFP100 package  . . . . . . . . . . [P94]
*   [Table 49]. EMI characteristics for LQFP100  . . . . . . . . . . . . . . [P95]
*   [Table 50]. ESD absolute maximum ratings . . . . . . . . . . . . . . . . [P95]
*   [Table 51]. Electrical sensitivities . . . . . . . . . . . . . . . . . . [P96]
*   [Table 52]. I/O current injection susceptibility . . . . . . . . . . . . [P96]
*   [Table 53]. I/O static characteristics . . . . . . . . . . . . . . . . . [P97]
*   [Table 54]. Output voltage characteristics . . . . . . . . . . . . . . . [P100]
*   [Table 55]. I/O AC characteristics . . . . . . . . . . . . . . . . . . . [P101]
*   [Table 56]. NRST pin characteristics . . . . . . . . . . . . . . . . . . [P103]
*   [Table 57]. TIMx characteristics . . . . . . . . . . . . . . . . . . . . [P104]
*   [Table 58]. I2C characteristics  . . . . . . . . . . . . . . . . . . . [P105]
*   [Table 59]. SCL frequency (f PCLK1 = 50 MHz, V DD = V DD_I2C = 3.3 V)  . [P106]
*   [Table 60]. SPI dynamic characteristics  . . . . . . . . . . . . . . . . [P107]
*   [Table 61]. I2S dynamic characteristics  . . . . . . . . . . . . . . . [P110]
*   [Table 62]. USB OTG FS startup time  . . . . . . . . . . . . . . . . . . [P112]
*   [Table 63]. USB OTG FS DC electrical characteristics . . . . . . . . . . [P112]
*   [Table 64]. USB OTG FS electrical characteristics  . . . . . . . . . . . [P113]
*   [Table 65]. ADC characteristics  . . . . . . . . . . . . . . . . . . . . [P113]
*   [Table 66]. ADC accuracy at f ADC = 18 MHz . . . . . . . . . . . . . . . [P115]
*   [Table 67]. ADC accuracy at f ADC = 30 MHz . . . . . . . . . . . . . . . [P115]
*   [Table 68]. ADC accuracy at f ADC = 36 MHz . . . . . . . . . . . . . . . [P115]
*   [Table 69]. ADC dynamic accuracy at f ADC = 18 MHz - limited test conditions [P116]
*   [Table 70]. ADC dynamic accuracy at f ADC = 36 MHz - limited test conditions [P116]
*   [Table 71]. Temperature sensor characteristics . . . . . . . . . . . . . [P119]
*   [Table 72]. Temperature sensor calibration values  . . . . . . . . . . . [P119]
*   [Table 73]. V BAT monitoring characteristics . . . . . . . . . . . . . . [P120]
*   [Table 74]. Embedded internal reference voltage  . . . . . . . . . . . . [P120]
*   [Table 75]. Internal reference voltage calibration values  . . . . . . . [P120]
*   [Table 76]. Dynamic characteristics: SD / MMC characteristics  . . . . . [P122]
*   [Table 77]. Dynamic characteristics: eMMC characteristics V DD = 1.7 V to 1.9 V [P123]
*   [Table 78]. RTC characteristics  . . . . . . . . . . . . . . . . . . . . [P123]
*   [Table 79]. WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level chip scale package mechanical data [P125]
*   [Table 80]. WLCSP49 recommended PCB design rules (0.4 mm pitch)  . . . . [P126]
*   [Table 81]. UFQFPN48 - 48-lead, 7 x 7 mm, 0.5 mm pitch, ultra thin fine pitch quad flat package mechanical data [P127]
*   [Table 82]. LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat package mechanical data [P130]
*   [Table 83]. LQPF100 - 100-pin, 14 x 14 mm, 100-pin low-profile quad flat package mechanical data [P134]
*   [Table 84]. UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball grid array package mechanical data [P137]
*   [Table 85]. UFBGA100 recommended PCB design rules (0.5 mm pitch BGA) . . [P138]
*   [Table 86]. Package thermal characteristics  . . . . . . . . . . . . . . [P140]
*   [Table 87]. Ordering information scheme  . . . . . . . . . . . . . . . . [P141]
*   [Table 88]. Limitations depending on the operating power supply range  . [P142]
*   [Table 89]. Document revision history  . . . . . . . . . . . . . . . . . [P147]

//List of Figure
----------------

*   [Figure 1]. Compatible board design for LQFP100 package  . . . . . . . . [P13]
*   [Figure 2]. Compatible board design for LQFP64 package . . . . . . . . . [P14]
*   [Figure 3]. STM32F411xC/xE block diagram . . . . . . . . . . . . . . . . [P15]
*   [Figure 4]. Multi-AHB matrix . . . . . . . . . . . . . . . . . . . . . . [P18]
*   [Figure 5]. Power supply supervisor interconnection with internal reset OFF [P21]
*   [Figure 6]. Regulator OFF  . . . . . . . . . . . . . . . . . . . . . . . [P23]
*   [Figure 7]. Startup in regulator OFF: slow V DD slope - power-down reset risen after V CAP_1 /V CAP_2 stabilization [P24]
*   [Figure 8]. Startup in regulator OFF mode: fast V DD slope - power-down reset risen before V CAP_1 /V CAP_2 stabilization [P24]
*   [Figure 9]. STM32F411xC/xE WLCSP49 pinout  . . . . . . . . . . . . . . . [P33]
*   [Figure 10]. STM32F411xC/xE UFQFPN48 pinout  . . . . . . . . . . . . . . [P34]
*   [Figure 11]. STM32F411xC/xE LQFP64 pinout  . . . . . . . . . . . . . . . [P35]
*   [Figure 12]. STM32F411xC/xE LQFP100 pinout . . . . . . . . . . . . . . . [P36]
*   [Figure 13]. STM32F411xC/xE UFBGA100 pinout  . . . . . . . . . . . . . . [P37]
*   [Figure 14]. Memory map  . . . . . . . . . . . . . . . . . . . . . . . . [P53]
*   [Figure 15]. Pin loading conditions  . . . . . . . . . . . . . . . . . . [P57]
*   [Figure 16]. Input voltage measurement . . . . . . . . . . . . . . . . . [P58]
*   [Figure 17]. Power supply scheme . . . . . . . . . . . . . . . . . . . . [P59]
*   [Figure 18]. Current consumption measurement scheme  . . . . . . . . . . [P60]
*   [Figure 19]. External capacitor C EXT  . . . . . . . . . . . . . . . . . [P64]
*   [Figure 20]. Typical V BAT current consumption (LSE in low-drive mode and RTC ON) [P76]
*   [Figure 21]. Low-power mode wakeup . . . . . . . . . . . . . . . . . . . [P81]
*   [Figure 22]. High-speed external clock source AC timing diagram  . . . . [P83]
*   [Figure 23]. Low-speed external clock source AC timing diagram . . . . . [P84]
*   [Figure 24]. Typical application with an 8 MHz crystal . . . . . . . . . [P85]
*   [Figure 25]. Typical application with a 32.768 kHz crystal . . . . . . . [P86]
*   [Figure 26]. ACC HSI versus temperature  . . . . . . . . . . . . . . . . [P87]
*   [Figure 27]. ACC LSI versus temperature  . . . . . . . . . . . . . . . . [P88]
*   [Figure 28]. PLL output clock waveforms in center spread mode  . . . . . [P91]
*   [Figure 29]. PLL output clock waveforms in down spread mode  . . . . . . [P91]
*   [Figure 30]. FT/TC I/O input characteristics . . . . . . . . . . . . . . [P99]
*   [Figure 31]. I/O AC characteristics definition . . . . . . . . . . . . . [P102]
*   [Figure 32]. Recommended NRST pin protection . . . . . . . . . . . . . . [P103]
*   [Figure 33]. I2C bus AC waveforms and measurement circuit  . . . . . . [P106]
*   [Figure 34]. SPI timing diagram - slave mode and CPHA = 0  . . . . . . . [P108]
*   [Figure 35]. SPI timing diagram - slave mode and CPHA = 1 (1)  . . . . . [P109]
*   [Figure 36]. SPI timing diagram - master mode (1)  . . . . . . . . . . . [P109]
*   [Figure 37]. I2S slave timing diagram (Philips protocol) (1) . . . . . [P111]
*   [Figure 38]. I2S master timing diagram (Philips protocol) (1)  . . . . [P111]
*   [Figure 39]. USB OTG FS timings: definition of data signal rise and fall time [P113]
*   [Figure 40]. ADC accuracy characteristics  . . . . . . . . . . . . . . . [P117]
*   [Figure 41]. Typical connection diagram using the ADC  . . . . . . . . . [P117]
*   [Figure 42]. Power supply and reference decoupling (V REF+ not connected to V DDA ) [P118]
*   [Figure 43]. Power supply and reference decoupling (V REF+ connected to V DDA ) [P119]
*   [Figure 44]. SDIO high-speed mode  . . . . . . . . . . . . . . . . . . . [P121]
*   [Figure 45]. SD default mode . . . . . . . . . . . . . . . . . . . . . . [P121]
*   [Figure 46]. WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level chip scale package outline [P124]
*   [Figure 47]. WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level chip scale recommended footprint [P125]
*   [Figure 48]. WLCSP49 marking (package top view)  . . . . . . . . . . . . [P126]
*   [Figure 49]. UFQFPN48 - 48-lead, 7 x 7 mm, 0.5 mm pitch, ultra thin fine pitch quad flat package outline [P127]
*   [Figure 50]. UFQFPN48 - 48-lead, 7 x 7 mm, 0.5 mm pitch, ultra thin fine pitch quad flat recommended footprint [P128]
*   [Figure 51]. UFQFPN48 marking example (package top view) . . . . . . . . [P129]
*   [Figure 52]. LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat package outline [P130]
*   [Figure 53]. LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat package recommended footprint [P131]
*   [Figure 54]. LQFP64 marking example (package top view) . . . . . . . . . [P132]
*   [Figure 55]. LQFP100 - 100-pin, 14 x 14 mm, 100-pin low-profile quad flat package outline [P133]
*   [Figure 56]. LQFP100 - 100-pin, 14 x 14 mm, 100-pin low-profile quad flat recommended footprint [P135]
*   [Figure 57]. LQPF100 marking example (package top view)  . . . . . . . . [P136]
*   [Figure 58]. UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball grid array package outline [P137]
*   [Figure 59]. UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball grid array recommended footprint [P138]
*   [Figure 60]. UFBGA100 marking example (package top view) . . . . . . . . [P139]
*   [Figure 61]. USB controller configured as peripheral-only and used in Full-Speed mode [P143]
*   [Figure 62]. USB controller configured as host-only and used in Full-Speed mode [P143]
*   [Figure 63]. USB controller configured in dual mode and used in Full-Speed mode [P144]
*   [Figure 64]. Sensor Hub application example  . . . . . . . . . . . . . . [P145]
*   [Figure 65]. Batch Acquisition Mode (BAM) example  . . . . . . . . . . . [P146]


<!-- *P10*/149 -->
[P10]: #P10 
<a id="P10"></a>



/1 Introduction
===============

This datasheet provides the description of the STM32F411xC/xE microcontrollers.
The STM32F411xC/xE datasheet should be read in conjunction with RM0383 reference
manual which is available from the STMicroelectronics website www.st.com. It includes all
information concerning Flash memory programming.
For information on the Cortex®-M4 core, please refer to the Cortex®-M4 programming
manual (PM0214) available from www.st.com.


<!-- *P11*/149 -->
[P11]: #P11 
<a id="P11"></a>



/2 Description
==============

The STM32F411 X C/ X E devices are based on the high-performance Arm ® Cortex®-M4 32-
bit RISC core operating at a frequency of up to 100 MHz. The Cortex®-M4 core features a
Floating point unit (FPU) single precision which supports all Arm single-precision data-
processing instructions and data types. It also implements a full set of DSP instructions and
a memory protection unit (MPU) which enhances application security.
The STM32F411xC/xE belongs to the STM32 Dynamic Efficiency ™ product line (with
products combining power efficiency, performance and integration) while adding a new
innovative feature called Batch Acquisition Mode (BAM) allowing to save even more power
consumption during data batching.
The STM32F411xC/xE incorporate high-speed embedded memories (up to 512 Kbytes of
Flash memory, 128 Kbytes of SRAM), and an extensive range of enhanced I/Os and
peripherals connected to two APB buses, two AHB bus and a 32-bit multi-AHB bus matrix.
All devices offer one 12-bit ADC, a low-power RTC, six general-purpose 16-bit timers
including one PWM timer for motor control, two general-purpose 32-bit timers. They also
feature standard and advanced communication interfaces.
• Up to three I2Cs
• Five SPIs
• Five I2Ss out of which two are full duplex. To achieve audio class accuracy, the I2S
peripherals can be clocked via a dedicated internal audio PLL or via an external clock
to allow synchronization.
• Three USARTs
• SDIO interface
• USB 2.0 OTG full speed interface
The STM32F411xC/xE operate in the - 40 to + 125 °C temperature range from a 1.7 (PDR
OFF) to 3.6 V power supply. A comprehensive set of power-saving mode allows the design
of low-power applications.
These features make the STM32F411xC/xE microcontrollers suitable for a wide range of
applications:
• Motor drive and application control
• Medical equipment
• Industrial applications: PLC, inverters, circuit breakers
• Printers, and scanners
• Alarm systems, video intercom, and HVAC
• Home audio appliances
• Mobile phone sensor hub

<!-- *P12*/149 -->
[P12]: #P12 
<a id="P12"></a>




[Table 2]: #Table%202
<a id="Table 2"></a>

**Table 2**. STM32F411xC/xE features and peripheral counts

Flash memory in Kbytes 256 512
SRAM in Kbytes System 128
Timers
General-
purpose
7
Advanced-
control
1
Communication
interfaces
SPI/ I2S 5/5 (2 full duplex)
I2C 3
USART 3
SDIO 1
USB OTG FS 1
GPIOs 36 50 81 36 50 81
12-bit ADC
Number of channels
1
10 16 10 16
Maximum CPU frequency 100 MHz
Operating voltage 1.7 to 3.6 V
Operating temperatures
Ambient temperatures: - 40 to +85 °C / - 40 to + 105 °C/ - 40 to + 125 °C
Junction temperature: – 40 to + 130 °C
Package
WLCSP49
UFQFPN48
LQFP64
UFBGA100
LQFP100
WLCSP49
UFQFPN48
LQFP64
UFBGA100
LQFP100

<!-- *P13*/149 -->
[P13]: #P13 
<a id="P13"></a>



//2.1 Compatibility with STM32F4 Series
---------------------------------------

The STM32F411xC/xE are fully software and feature compatible with the STM32F4 series
(STM32F42x, STM32F401, STM32F43x, STM32F41x, STM32F405 and STM32F407)
The STM32F411xC/xE can be used as drop-in replacement of the other STM32F4 products
but some slight changes have to be done on the PCB board.

[Figure 1]: #Figure%201
<a id="Figure 1"></a>

**Figure 1**. Compatible board design for LQFP100 package

??????????
??
??
??
??
??
??
??
??
????????
????????
???
???
????
????
????
????
????
????
????
????
????
????
????
??????
???
???
??
??
??
??
??
??
??
???? ??? ?????????????????
???????? ?? ? ?????
??
??
??
??
??
??
??
??
????????
????????
???
???
????
????
????
????
????
????
????
????
????
????
????
??????
???
??
??
??
??
??
??
??
??
????????????????????????
????????????????????????
????????????????????????
????????????????????????
??? ???
????
??
??
??
??
??
???????????
???????????
???????????
???????????
???????????
???????????
???????????
??? ???

<!-- *P14*/149 -->
[P14]: #P14 
<a id="P14"></a>



[Figure 2]: #Figure%202
<a id="Figure 2"></a>

**Figure 2**. Compatible board design for LQFP64 package

??????????
? ?????? ???????????????????
????????????????????
????????????????????????
???
???
???
???
??????????
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
???????? ??
????
????
????
????
????
???
??????
????
????
????
????
???
???
???
???
???
???
????
????
????
????
???
????
??????
???
????
????????????????????????????
????????????? ?????
??????????
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
????
??
????
????
????
????
????
???
???
????
????
????
????
???
???
???
???
???
???
????
????
????
????
???
????
??????
???
???
??? ???
???
???
???????????
???????????
???????????
???????????
???????????
???????????
???????????
????

<!-- *P15*/149 -->
[P15]: #P15 
<a id="P15"></a>



[Figure 3]: #Figure%203
<a id="Figure 3"></a>

**Figure 3**. STM32F411xC/xE block diagram

1. The timers connected to APB2 are clocked from TIMxCLK up to 100 MHz, while the timers connected to APB1 are clocked
from TIMxCLK up to 100 MHz.
??????????
???????????
?????????
????????????
?????????????
????????
??????????
?????????????????????????????????
????????????????????????????
??????????
??????
???????????
??????????????
?????????
? ? ? ? ?? ? ??
? ? ? ? ??? ??
??????????????????
??????????
?????????????????????
???????????????
????????
?????????
????????
?????????
??????????
????
??????
????
???
????????????????????
????
????????????????????
??????????
?????????
?????????????
???????
???? ???
???
????????
???????????
????
?????????
????
??????
?????
????????????
? ??? ? ?? ???
??????????????????
???? ??
?????
???????
???
??????
???????????
? ? ???
???
???
?????
?????
???????????
? ?? ? ? ?
???
?? ??
?? ??
???
?????????
???????
? ? ???
? ? ???
? ? ??
???
???????
?????
???????
? ?????
???????
??????????????????
???
????
???????
?????????
????????????
???
?????????????
? ? ??
????????
???????????????
???????????????????
????????????
??
???? ????????????????
????????????
????
????
????
????
?????
???
??????????????????
????????????
?????????????
??????????
??????????????
?????
?????
????
?????????
????
????????
????????
???????
???????????
???????????
???????????
???
????? ???
?????
???
??????
????
??????
???????????????
???????????????
??????????????????
??????????
??????????
????????????????????
????????????????????
????????
???????????????????????
???????????????????
????????????
??????????????
??????
??????
????
???
???
???
???
??????????
?????????????????????
?????????????????????
?????????????????????
????
?????????
??
??????
???????
????
????????
????????
???????????
????
???????
????????
????????
???
?????????
????????????
????????
??????????
????
??????
?????????????
???
??????
????
???
??
??
?????????????
?????????
??????????????????????
??????????????
???????? ???????????
????????
???????????
??????????????????????
????????????
?????????
??????????????????????
??????????????
?????????
?????????

<!-- *P16*/149 -->
[P16]: #P16 
<a id="P16"></a>



/3 Functional overview
======================


//3.1 Arm ® Cortex®-M4 with FPU core with embedded Flash and
------------------------------------------------------------

SRAM
The Arm ® Cortex®-M4 with FPU processor is the latest generation of Arm processors for
embedded systems. It was developed to provide a low-cost platform that meets the needs of
MCU implementation, with a reduced pin count and low-power consumption, while
delivering outstanding computational performance and an advanced response to interrupts.
The Arm ® Cortex®-M4 with FPU 32-bit RISC processor features exceptional code-
efficiency, delivering the high-performance expected from an Arm core in the memory size
usually associated with 8- and 16-bit devices. The processor supports a set of DSP
instructions which allow efficient signal processing and complex algorithm execution. Its
single precision FPU (floating point unit) speeds up software development by using
metalanguage development tools, while avoiding saturation.
The STM32F411xC/xE devices are compatible with all Arm tools and software.
Figure 3 shows the general block diagram of the STM32F411xC/xE.
Note: Cortex®-M4 with FPU is binary compatible with Cortex® -M3.

//3.2 Adaptive real-time memory accelerator (ART Accelerator™)
--------------------------------------------------------------

The ART Accelerator™ is a memory accelerator which is optimized for STM32 industry-
standard Arm ® Cortex®-M4 with FPU processors. It balances the inherent performance
advantage of the Arm ® Cortex®-M4 with FPU over Flash memory technologies, which
normally requires the processor to wait for the Flash memory at higher frequencies.
To release the processor full 105 DMIPS performance at this frequency, the accelerator
implements an instruction prefetch queue and branch cache, which increases program
execution speed from the -bit Flash memory. Based on CoreMark benchmark, the
performance achieved thanks to the ART accelerator is equivalent to 0 wait state program
execution from Flash memory at a CPU frequency up to 100 MHz.

//3.3 Batch Acquisition mode (BAM)
----------------------------------

The Batch acquisition mode allows enhanced power efficiency during data batching. It
enables data acquisition through any communication peripherals directly to memory using
the DMA in reduced power consumption as well as data processing while the rest of the
system is in low-power mode (including the flash and ART). For example in an audio
system, a smart combination of PDM audio sample acquisition and processing from the I2S
directly to RAM (flash and ART ™ stopped) with the DMA using BAM followed by some very
short processing from flash allows to drastically reduce the power consumption of the
application. A dedicated application note (AN4515) describes how to implement the BAM to
allow the best power efficiency.

<!-- *P17*/149 -->
[P17]: #P17 
<a id="P17"></a>



//3.4 Memory protection unit
----------------------------

The memory protection unit (MPU) is used to manage the CPU accesses to memory to
prevent one task to accidentally corrupt the memory or resources used by any other active
task. This memory area is organized into up to 8 protected areas that can in turn be divided
up into 8 subareas. The protection area sizes are between 32 bytes and the whole 4
gigabytes of addressable memory.
The MPU is especially helpful for applications where some critical or certified code has to be
protected against the misbehavior of other tasks. It is usually managed by an RTOS (real-
time operating system). If a program accesses a memory location that is prohibited by the
MPU, the RTOS can detect it and take action. In an RTOS environment, the kernel can
dynamically update the MPU area setting, based on the process to be executed.
The MPU is optional and can be bypassed for applications that do not need it.

//3.5 Embedded Flash memory
---------------------------

The devices embed up to 512 Kbytes of Flash memory available for storing programs and
data.
To optimize the power consumption the Flash memory can also be switched off in Run or in
Sleep mode (see Section 3.18: Low-power modes). Two modes are available: Flash in Stop
mode or in DeepSleep mode (trade off between power saving and startup time, see
Table 34: Low-power mode wakeup timings (1) ). Before disabling the Flash memory, the
code must be executed from the internal RAM.
One-time programmable bytes
A one-time programmable area is available with 16 OTP blocks of 32 bytes. Each block can
be individually locked.
(Additional information can be found in the product reference manual.)

//3.6 CRC (cyclic redundancy check) calculation unit
----------------------------------------------------

The CRC (cyclic redundancy check) calculation unit is used to get a CRC code from a 32-bit
data word and a fixed generator polynomial.
Among other applications, CRC-based techniques are used to verify data transmission or
storage integrity. In the scope of the EN/IEC 60335-1 standard, they offer a means of
verifying the Flash memory integrity. The CRC calculation unit helps compute a software
signature during runtime, to be compared with a reference signature generated at link-time
and stored at a given memory location.

//3.7 Embedded SRAM
-------------------

All devices embed:
• 128 Kbytes of system SRAM which can be accessed (read/write) at CPU clock speed
with 0 wait states

<!-- *P18*/149 -->
[P18]: #P18 
<a id="P18"></a>



//3.8 Multi-AHB bus matrix
--------------------------

The 32-bit multi-AHB bus matrix interconnects all the masters (CPU, DMAs) and the slaves
(Flash memory, RAM, AHB and APB peripherals) and ensures a seamless and efficient
operation even when several high-speed peripherals work simultaneously.

[Figure 4]: #Figure%204
<a id="Figure 4"></a>

**Figure 4**. Multi-AHB matrix


//3.9 DMA controller (DMA)
--------------------------

The devices feature two general-purpose dual-port DMAs (DMA1 and DMA2) with 8
streams each. They are able to manage memory-to-memory, peripheral-to-memory and
memory-to-peripheral transfers. They feature dedicated FIFOs for APB/AHB peripherals,
support burst transfer and are designed to provide the maximum peripheral bandwidth
(AHB/APB).
The two DMA controllers support circular buffer management, so that no specific code is
needed when the controller reaches the end of the buffer. The two DMA controllers also
have a double buffering feature, which automates the use and switching of two memory
buffers without requiring any special code.
Each stream is connected to dedicated hardware DMA requests, with support for software
trigger on each stream. Configuration is made by software and transfer sizes between
source and destination are independent.
???
?????????
??
????
??
????
????????????
?? ?? ?? ?? ?? ??
?????
?????
?????
?????
??????
??????
??????????
???
???????
??
??
??
??
?????
?????
?????
??????
????????
????????
??????
?????????
??
???
???????
????
????

<!-- *P19*/149 -->
[P19]: #P19 
<a id="P19"></a>


The DMA can be used with the main peripherals:
• SPI and I2S
• I2C
• USART
• General-purpose, basic and advanced-control timers TIMx
• SD/SDIO/MMC/eMMC host interface
• ADC

//3.10 Nested vectored interrupt controller (NVIC)
--------------------------------------------------

The devices embed a nested vectored interrupt controller able to manage 16 priority levels,
and handle up to 62 maskable interrupt channels plus the 16 interrupt lines of the Cortex® -
M4 with FPU.
• Closely coupled NVIC gives low-latency interrupt processing
• Interrupt entry vector table address passed directly to the core
• Allows early processing of interrupts
• Processing of late arriving, higher-priority interrupts
• Support tail chaining
• Processor state automatically saved
• Interrupt entry restored on interrupt exit with no instruction overhead
This hardware block provides flexible interrupt management features with minimum interrupt
latency.

//3.11 External interrupt/event controller (EXTI)
-------------------------------------------------

The external interrupt/event controller consists of 21 edge-detector lines used to generate
interrupt/event requests. Each line can be independently configured to select the trigger
event (rising edge, falling edge, both) and can be masked independently. A pending register
maintains the status of the interrupt requests. The EXTI can detect an external line with a
pulse width shorter than the Internal APB2 clock period. Up to 81 GPIOs can be connected
to the 16 external interrupt lines.

//3.12 Clocks and startup
-------------------------

On reset the 16 MHz internal RC oscillator is selected as the default CPU clock. The
16 MHz internal RC oscillator is factory-trimmed to offer 1% accuracy at 25 °C. The
application can then select as system clock either the RC oscillator or an external 4-26 MHz
clock source. This clock can be monitored for failure. If a failure is detected, the system
automatically switches back to the internal RC oscillator and a software interrupt is
generated (if enabled). This clock source is input to a PLL thus allowing to increase the
frequency up to 100 MHz. Similarly, full interrupt management of the PLL clock entry is
available when necessary (for example if an indirectly used external oscillator fails).
Several prescalers allow the configuration of the two AHB buses, the high-speed APB
(APB2) and the low-speed APB (APB1) domains. The maximum frequency of the two AHB

<!-- *P20*/149 -->
[P20]: #P20 
<a id="P20"></a>

buses is 100 MHz while the maximum frequency of the high-speed APB domains is

100 MHz. The maximum allowed frequency of the low-speed APB domain is 50 MHz.
The devices embed a dedicated PLL (PLLI2S) which allows to achieve audio class
performance. In this case, the I2S master clock can generate all standard sampling
frequencies from 8 kHz to 192 kHz.

//3.13 Boot modes
-----------------

At startup, boot pins are used to select one out of three boot options:
• Boot from user Flash
• Boot from system memory
• Boot from embedded SRAM
The bootloader is located in system memory. It is used to reprogram the Flash memory by
using USART1(PA9/10), USART2(PD5/6), USB OTG FS in device mode (PA11/12) through
DFU (device firmware upgrade), I2C1(PB6/7), I2C2(PB10/3), I2C3(PA8/PB4),
SPI1(PA4/5/6/7), SPI2(PB12/13/14/15) or SPI3(PA15, PC10/11/12).
For more detailed information on the bootloader, refer to Application Note: AN2606, STM32
microcontroller system memory boot mode.

//3.14 Power supply schemes
---------------------------

• VDD = 1.7 to 3.6 V: external power supply for I/Os with the internal supervisor
(POR/PDR) disabled, provided externally through VDD pins. Requires the use of an
external power supply supervisor connected to the VDD and NRST pins.
• V SSA , V DDA = 1.7 to 3.6 V: external analog power supplies for ADC, Reset blocks, RCs
and PLL. V DDA and V SSA must be connected to V DD and V SS , respectively, with
decoupling technique.
• V BAT = 1.65 to 3.6 V: power supply for RTC, external clock 32 kHz oscillator and
backup registers (through power switch) when V DD is not present.
Refer to Figure 17: Power supply scheme for more details.

<!-- *P21*/149 -->
[P21]: #P21 
<a id="P21"></a>



//3.15 Power supply supervisor
------------------------------


//3.15.1 Internal reset ON
--------------------------

This feature is available for V DD operating voltage range 1.8 V to 3.6 V.
The internal power supply supervisor is enabled by holding PDR_ON high.
The devices have an integrated power-on reset (POR) / power-down reset (PDR) circuitry
coupled with a Brownout reset (BOR) circuitry. At power-on, POR is always active, and
ensures proper operation starting from 1.8 V. After the 1.8 V POR threshold level is
reached, the option byte loading process starts, either to confirm or modify default
thresholds, or to disable BOR permanently. Three BOR thresholds are available through
option bytes.
The devices remain in reset mode when V DD is below a specified threshold, V POR/PDR or
V BOR , without the need for an external reset circuit.
The devices also feature an embedded programmable voltage detector (PVD) that monitors
the V DD /V DDA power supply and compares it to the V PVD threshold. An interrupt can be
generated when V DD /V DDA drops below the V PVD threshold and/or when V DD /V DDA is
higher than the V PVD threshold. The interrupt service routine can then generate a warning
message and/or put the MCU into a safe state. The PVD is enabled by software.

//3.15.2 Internal reset OFF
---------------------------

This feature is available only on packages featuring the PDR_ON pin. The internal power-on
reset (POR) / power-down reset (PDR) circuitry is disabled by setting the PDR_ON pin to
low.
An external power supply supervisor should monitor V DD and should set the device in reset
mode when V DD is below 1.7 V. NRST should be connected to this external power supply
supervisor. Refer to Figure 5: Power supply supervisor interconnection with internal reset
OFF.


[Figure 5]: #Figure%205
<a id="Figure 5"></a>

**Figure 5**. Power supply supervisor interconnection with internal reset OFF (1)

1. The PRD_ON pin is only available on the WLCSP49 and UFBGA100 packages.

??????????
??????
? ??
????
?????????? ?? ????????????????????????
?????????????????????????????????
? ?? ??????????
? ??

<!-- *P22*/149 -->
[P22]: #P22 
<a id="P22"></a>

A comprehensive set of power-saving mode allows to design low-power applications.

When the internal reset is OFF, the following integrated features are no longer supported:
• The integrated power-on reset (POR) / power-down reset (PDR) circuitry is disabled.
• The brownout reset (BOR) circuitry must be disabled.
• The embedded programmable voltage detector (PVD) is disabled.
• V BAT functionality is no more available and VBAT pin should be connected to V DD .

//3.16 Voltage regulator
------------------------

The regulator has four operating modes:
• Regulator ON
– Main regulator mode (MR)
– Low power regulator (LPR)
– Power-down
• Regulator OFF

//3.16.1 Regulator ON
---------------------

On packages embedding the BYPASS_REG pin, the regulator is enabled by holding
BYPASS_REG low. On all other packages, the regulator is always enabled.
There are three power modes configured by software when the regulator is ON:
• MR is used in the nominal regulation mode (With different voltage scaling in Run)
In Main regulator mode (MR mode), different voltage scaling are provided to reach the
best compromise between maximum frequency and dynamic power consumption.
• LPR is used in the Stop modes
The LP regulator mode is configured by software when entering Stop mode.
• Power-down is used in Standby mode.
The Power-down mode is activated only when entering in Standby mode. The regulator
output is in high impedance and the kernel circuitry is powered down, inducing zero
consumption. The contents of the registers and SRAM are lost.
Depending on the package, one or two external ceramic capacitors should be connected on
the V CAP_1 and V CAP_2 pins. The V CAP_2 pin is only available for the LQFP100 and
UFBGA100 packages.
All packages have the regulator ON feature.

//3.16.2 Regulator OFF
----------------------

The Regulator OFF is available only on the UFBGA100, which features the BYPASS_REG
pin. The regulator is disabled by holding BYPASS_REG high. The regulator OFF mode
allows to supply externally a V12 voltage source through V CAP_1 and V CAP_2 pins.
Since the internal voltage scaling is not managed internally, the external voltage value must
be aligned with the targeted maximum frequency. Refer to Table 14: General operating
conditions.
The two 2.2 µF V CAP ceramic capacitors should be replaced by two 100 nF decoupling
capacitors. Refer to Figure 17: Power supply scheme.

<!-- *P23*/149 -->
[P23]: #P23 
<a id="P23"></a>


When the regulator is OFF, there is no more internal monitoring on V12. An external power
supply supervisor should be used to monitor the V12 of the logic power domain. PA0 pin
should be used for this purpose, and act as power-on reset on V12 power domain.
In regulator OFF mode, the following features are no more supported:
• PA0 cannot be used as a GPIO pin since it allows to reset a part of the V12 logic power
domain which is not reset by the NRST pin.
• As long as PA0 is kept low, the debug mode cannot be used under power-on reset. As
a consequence, PA0 and NRST pins must be managed separately if the debug
connection under reset or pre-reset is required.

[Figure 6]: #Figure%206
<a id="Figure 6"></a>

**Figure 6**. Regulator OFF

The following conditions must be respected:
• V DD should always be higher than V CAP_1 and V CAP_2 to avoid current injection
between power domains.
• If the time for V CAP_1 and V CAP_2 to reach V 12 minimum value is faster than the time for
V DD to reach 1.7 V, then PA0 should be kept low to cover both conditions: until V CAP_1
and V CAP_2 reach V 12 minimum value and until V DD reaches 1.7 V (see Figure 7).
• Otherwise, if the time for V CAP_1 and V CAP_2 to reach V 12 minimum value is slower
than the time for V DD to reach 1.7 V, then PA0 could be asserted low externally (see
Figure 8).
• If V CAP_1 and V CAP_2 go below V 12 minimum value and V DD is higher than 1.7 V, then a
reset must be asserted on PA0 pin.
Note: The minimum value of V 12 depends on the maximum frequency targeted in the application
?????????
??????????
? ?????
? ?????
???
???
? ??
??????
? ??
??????????????????
???????????????????
?????????? ??????? ???????
?????????????????
?????????????????????????????
?????? ??????? ????????? ?? ??
???

<!-- *P24*/149 -->
[P24]: #P24 
<a id="P24"></a>



[Figure 7]: #Figure%207
<a id="Figure 7"></a>

**Figure 7**. Startup in regulator OFF: slow V DD slope -

power-down reset risen after V CAP_1 /V CAP_2 stabilization
1. This figure is valid whatever the internal reset mode (ON or OFF).

[Figure 8]: #Figure%208
<a id="Figure 8"></a>

**Figure 8**. Startup in regulator OFF mode: fast V DD slope -

power-down reset risen before V CAP_1 /V CAP_2 stabilization
1. This figure is valid whatever the internal reset mode (ON or OFF).
??????????
? ??
????
????? ??
???????????
? ????? ?? ?????
? ??
????
????
? ??
????
????? ??
? ????? ?? ?????
? ??
?????????????????????????
????
????
??????????
?????????????

<!-- *P25*/149 -->
[P25]: #P25 
<a id="P25"></a>



//3.16.3 Regulator ON/OFF and internal power supply supervisor availability
---------------------------------------------------------------------------



//3.17 Real-time clock (RTC) and backup registers
-------------------------------------------------

The backup domain includes:
• The real-time clock (RTC)
• 20 backup registers
The real-time clock (RTC) is an independent BCD timer/counter. Dedicated registers contain
the second, minute, hour (in 12/24 hour), week day, date, month, year, in BCD (binary-
coded decimal) format. Correction for 28, 29 (leap year), 30, and 31 day of the month are
performed automatically. The RTC features a reference clock detection, a more precise
second source clock (50 or 60 Hz) can be used to enhance the calendar precision. The RTC
provides a programmable alarm and programmable periodic interrupts with wakeup from
Stop and Standby modes. The sub-seconds value is also available in binary format.
It is clocked by a 32.768 kHz external crystal, resonator or oscillator, the internal low-power
RC oscillator or the high-speed external clock divided by 128. The internal low-speed RC
has a typical frequency of 32 kHz. The RTC can be calibrated using an external 512 Hz
output to compensate for any natural quartz deviation.
Two alarm registers are used to generate an alarm at a specific time and calendar fields can
be independently masked for alarm comparison. To generate a periodic interrupt, a 16-bit
programmable binary auto-reload downcounter with programmable resolution is available
and allows automatic wakeup and periodic alarms from every 120 µs to every 36 hours.
A 20-bit prescaler is used for the time base clock. It is by default configured to generate a
time base of 1 second from a clock at 32.768 kHz.
The backup registers are 32-bit registers used to store 80 bytes of user application data
when V DD power is not present. Backup registers are not reset by a system, a power reset,
or when the device wakes up from the Standby mode (see Section 3.18: Low-power
modes).
Additional 32-bit registers contain the programmable alarm subseconds, seconds, minutes,
hours, day, and date.

[Table 3]: #Table%203
<a id="Table 3"></a>

**Table 3**. Regulator ON/OFF and internal power supply supervisor availability

Package Regulator ON Regulator OFF
Power supply
supervisor ON
Power supply
supervisor OFF
UFQFPN48 Yes No Yes No
WLCSP49 Yes No
Yes
PDR_ON set to VDD
Yes
PDR_ON external
control (1)
LQFP64 Yes No Yes No
LQFP100 Yes No Yes No
UFBGA100
Yes
BYPASS_REG set to
VSS
Yes
BYPASS_REG set to
VDD
Yes
PDR_ON set to VDD
Yes
PDR_ON external
control (1)
1. Refer to Section 3.15: Power supply supervisor

<!-- *P26*/149 -->
[P26]: #P26 
<a id="P26"></a>

The RTC and backup registers are supplied through a switch that is powered either from the

V DD supply when present or from the V BAT pin.

//3.18 Low-power modes
----------------------

The devices support three low-power modes to achieve the best compromise between low
power consumption, short startup time and available wakeup sources:
• Sleep mode
In Sleep mode, only the CPU is stopped. All peripherals continue to operate and can
wake up the CPU when an interrupt/event occurs.
To further reduce the power consumption, the Flash memory can be switched off
before entering in Sleep mode. Note that this requires a code execution from the RAM.
• Stop mode
The Stop mode achieves the lowest power consumption while retaining the contents of
SRAM and registers. All clocks in the 1.2 V domain are stopped, the PLL, the HSI RC
and the HSE crystal oscillators are disabled. The voltage regulator can also be put
either in normal or in low-power mode.
The devices can be woken up from the Stop mode by any of the EXTI line (the EXTI
line source can be one of the 16 external lines, the PVD output, the RTC alarm/
wakeup/ tamper/ time stamp events).
• Standby mode
The Standby mode is used to achieve the lowest power consumption. The internal
voltage regulator is switched off so that the entire 1.2 V domain is powered off. The
PLL, the HSI RC and the HSE crystal oscillators are also switched off. After entering
Standby mode, the SRAM and register contents are lost except for registers in the
backup domain when selected.
The devices exit the Standby mode when an external reset (NRST pin), an IWDG reset,
a rising edge on the WKUP pin, or an RTC alarm/ wakeup/ tamper/time stamp event
occurs.
Standby mode is not supported when the embedded voltage regulator is bypassed and
the 1.2 V domain is controlled by an external power.

//3.19 V_BAT operation
----------------------

The VBAT pin allows to power the device V BAT domain from an external battery, an external
super-capacitor, or from V DD when no external battery and an external super-capacitor are
present.
V BAT operation is activated when V DD is not present.
The VBAT pin supplies the RTC and the backup registers.
Note: When the microcontroller is supplied from VBAT, external interrupts and RTC alarm/events
do not exit it from V BAT operation. When PDR_ON pin is not connected to V DD (internal
Reset OFF), the V BAT functionality is no more available and VBAT pin should be connected
to V DD .

<!-- *P27*/149 -->
[P27]: #P27 
<a id="P27"></a>



//3.20 Timers and watchdogs
---------------------------

The devices embed one advanced-control timer, seven general-purpose timers and two
watchdog timers.
All timer counters can be frozen in debug mode.
Table 4 compares the features of the advanced-control and general-purpose timers.


//3.20.1 Advanced-control timers (TIM1)
---------------------------------------

The advanced-control timer (TIM1) can be seen as three-phase PWM generators
multiplexed on 4 independent channels. It has complementary PWM outputs with
programmable inserted dead times. It can also be considered as a complete general-
purpose timer. Its 4 independent channels can be used for:
• Input capture
• Output compare
• PWM generation (edge- or center-aligned modes)
• One-pulse mode output

[Table 4]: #Table%204
<a id="Table 4"></a>

**Table 4**. Timer feature comparison

Timer
type
Timer
Counter
resolution
Counter
type
Prescaler
factor
DMA
request
generation
Capture/
compare
channels
Complemen-
tary output
Max.
interface
clock
(MHz)
Max.
timer
clock
(MHz)
Advanced
-control
TIM1 16-bit
Up,
Down,
Up/down
Any
integer
between 1
and
65536
Yes 4 Yes 100 100
General
purpose
TIM2,
TIM5
32-bit
Up,
Down,
Up/down
Any
integer
between 1
and
65536
Yes 4 No 50 100
TIM3,
TIM4
16-bit
Up,
Down,
Up/down
Any
integer
between 1
and
65536
Yes 4 No 50 100
TIM9 16-bit Up
Any
integer
between 1
and
65536
No 2 No 100 100
TIM10,
TIM11
16-bit Up
Any
integer
between 1
and
65536
No 1 No 100 100

<!-- *P28*/149 -->
[P28]: #P28 
<a id="P28"></a>

If configured as standard 16-bit timers, it has the same features as the general-purpose

TIMx timers. If configured as a 16-bit PWM generator, it has full modulation capability (0-
100%).
The advanced-control timer can work together with the TIMx timers via the Timer Link
feature for synchronization or event chaining.
TIM1 supports independent DMA request generation.

//3.20.2 General-purpose timers (TIMx)
--------------------------------------

There are seven synchronizable general-purpose timers embedded in the
STM32F411xC/xE (see Table 4 for differences).
• TIM2, TIM3, TIM4, TIM5
The STM32F411xC/xE devices are 4 full-featured general-purpose timers: TIM2, TIM5,
TIM3, and TIM4.The TIM2 and TIM5 timers are based on a 32-bit auto-reload
up/downcounter and a 16-bit prescaler. The TIM3 and TIM4 timers are based on a 16-
bit auto-reload up/downcounter and a 16-bit prescaler. They all feature four
independent channels for input capture/output compare, PWM or one-pulse mode
output. This gives up to 15 input capture/output compare/PWMs.
The TIM2, TIM3, TIM4, TIM5 general-purpose timers can work together, or with the
other general-purpose timers and the advanced-control timer TIM1 via the Timer Link
feature for synchronization or event chaining.
Any of these general-purpose timers can be used to generate PWM outputs.
TIM2, TIM3, TIM4, TIM5 all have independent DMA request generation. They are
capable of handling quadrature (incremental) encoder signals and the digital outputs
from 1 to 4 hall-effect sensors.
• TIM9, TIM10 and TIM11
These timers are based on a 16-bit auto-reload upcounter and a 16-bit prescaler.
TIM10 and TIM11 feature one independent channel, whereas TIM9 has two
independent channels for input capture/output compare, PWM or one-pulse mode
output. They can be synchronized with the TIM2, TIM3, TIM4, TIM5 full-featured
general-purpose timers. They can also be used as simple time bases.

//3.20.3 Independent watchdog
-----------------------------

The independent watchdog is based on a 12-bit downcounter and 8-bit prescaler. It is
clocked from an independent 32 kHz internal RC and as it operates independently from the
main clock, it can operate in Stop and Standby modes. It can be used either as a watchdog
to reset the device when a problem occurs, or as a free-running timer for application timeout
management. It is hardware- or software-configurable through the option bytes.

//3.20.4 Window watchdog
------------------------

The window watchdog is based on a 7-bit downcounter that can be set as free-running. It
can be used as a watchdog to reset the device when a problem occurs. It is clocked from
the main clock. It has an early warning interrupt capability and the counter can be frozen in
debug mode.

<!-- *P29*/149 -->
[P29]: #P29 
<a id="P29"></a>



//3.20.5 SysTick timer
----------------------

This timer is dedicated to real-time operating systems, but could also be used as a standard
downcounter. It features:
• A 24-bit downcounter
• Autoreload capability
• Maskable system interrupt generation when the counter reaches 0
• Programmable clock source.

//3.21 Inter-integrated circuit interface (I2C)
-------------------------------------------------

Up to three I2C bus interfaces can operate in multimaster and slave modes. They can
support the standard (up to 100 kHz) and fast (up to 400 kHz) modes. The I2C bus
frequency can be increased up to 1 MHz. For more details about the complete solution,
please contact your local ST sales representative.They also support the 7/10-bit addressing
mode and the 7-bit dual addressing mode (as slave). A hardware CRC
generation/verification is embedded.
They can be served by DMA and they support SMBus 2.0/PMBus.
The devices also include programmable analog and digital noise filters (see Table 5).


//3.22 Universal synchronous/asynchronous receiver transmitters
---------------------------------------------------------------

(USART)
The devices embed three universal synchronous/asynchronous receiver transmitters
(USART1, USART2 and USART6).
These three interfaces provide asynchronous communication, IrDA SIR ENDEC support,
multiprocessor communication mode, single-wire half-duplex communication mode and
have LIN Master/Slave capability. The USART1 and USART6 interfaces are able to
communicate at speeds of up to 12.5 Mbit/s. The USART2 interface communicates at up to
6.25 bit/s.
USART1 and USART2 also provide hardware management of the CTS and RTS signals,
Smart Card mode (ISO 7816 compliant) and SPI-like communication capability. All
interfaces can be served by the DMA controller.

[Table 5]: #Table%205
<a id="Table 5"></a>

**Table 5**. Comparison of I2C analog and digital filters

Analog filter Digital filter
Pulse width of
suppressed spikes
≥ 50 ns Programmable length from 1 to 15 I2C peripheral clocks

<!-- *P30*/149 -->
[P30]: #P30 
<a id="P30"></a>




//3.23 Serial peripheral interface (SPI)
----------------------------------------

The devices feature five SPIs in slave and master modes in full-duplex and simplex
communication modes. SPI1, SPI4 and SPI5 can communicate at up to 50 Mbit/s, SPI2 and
SPI3 can communicate at up to 25 Mbit/s. The 3-bit prescaler gives 8 master mode
frequencies and the frame is configurable to 8 bits or 16 bits. The hardware CRC
generation/verification supports basic SD Card/MMC modes. All SPIs can be served by the
DMA controller.
The SPI interface can be configured to operate in TI mode for communications in master
mode and slave mode.

//3.24 Inter-integrated sound (I2S)
-------------------------------------

Five standard I2S interfaces (multiplexed with SPI1 to SPI5) are available.They can be
operated in master or slave mode, in simplex communication modes and full duplex for I2S2
and I2S3 and can be configured to operate with a 16-/32-bit resolution as an input or output
channel. All the I2Sx audio sampling frequencies from 8 kHz up to 192 kHz are supported.
When either or both of the I2S interfaces is/are configured in master mode, the master clock
can be output to the external DAC/CODEC at 256 times the sampling frequency.
All I2Sx can be served by the DMA controller.

//3.25 Audio PLL (PLLI2S)
-------------------------

The devices feature an additional dedicated PLL for audio I2S application. It allows to
achieve error-free I2S sampling clock accuracy without compromising on the CPU
performance.
The PLLI2S configuration can be modified to manage an I2S sample rate change without
disabling the main PLL (PLL) used for the CPU.
The audio PLL can be programmed with very low error to obtain sampling rates ranging
from 8 kHz to 192 kHz.

[Table 6]: #Table%206
<a id="Table 6"></a>

**Table 6**. USART feature comparison

USART
name
Standard
features
Modem
(RTS/CTS)
LIN
SPI
master
irDA
Smartcard
(ISO 7816)
Max. baud
rate in Mbit/s
(oversampling
by 16)
Max. baud
rate in Mbit/s
(oversampling
by 8)
APB
mapping
USART1 X X X X X X 6.25 12.5
APB2
(max.
100 MHz)
USART2 X X X X X X 3.12 6.25
APB1
(max.
50 MHz)
USART6 X N.A X X X X 6.25 12.5
APB2
(max.
100 MHz)

<!-- *P31*/149 -->
[P31]: #P31 
<a id="P31"></a>


In addition to the audio PLL, a master clock input pin can be used to synchronize the I2S
flow with an external PLL (or Codec output).

//3.26 Secure digital input/output interface (SDIO)
---------------------------------------------------

An SD/SDIO/MMC/eMMC host interface is available, that supports MultiMediaCard System
Specification Version 4.2 in three different databus modes: 1-bit (default), 4-bit and 8-bit.
The interface allows data transfer at up to 50 MHz, and is compliant with the SD Memory
Card Specification Version 2.0.
The SDIO Card Specification Version 2.0 is also supported with two different databus
modes: 1-bit (default) and 4-bit.
The current version supports only one SD/SDIO/MMC4.2 card at any one time and a stack
of MMC4.1 or previous.
In addition to SD/SDIO/MMC/eMMC, this interface is fully compliant with the CE-ATA digital
protocol Rev1.1.

//3.27 Universal serial bus on-the-go full-speed (OTG_FS)
---------------------------------------------------------

The devices embed an USB OTG full-speed device/host/OTG peripheral with integrated
transceivers. The USB OTG FS peripheral is compliant with the USB 2.0 specification and
with the OTG 1.0 specification. It has software-configurable endpoint setting and supports
suspend/resume. The USB OTG full-speed controller requires a dedicated 48 MHz clock
that is generated by a PLL connected to the HSE oscillator. The major features are:
• Combined Rx and Tx FIFO size of 320 × 35 bits with dynamic FIFO sizing
• Supports the session request protocol (SRP) and host negotiation protocol (HNP)
• 4 bidirectional endpoints
• 8 host channels with periodic OUT support
• HNP/SNP/IP inside (no need for any external resistor)
• For OTG/Host modes, a power switch is needed in case bus-powered devices are
connected

//3.28 General-purpose input/outputs (GPIOs)
--------------------------------------------

Each of the GPIO pins can be configured by software as output (push-pull or open-drain,
with or without pull-up or pull-down), as input (floating, with or without pull-up or pull-down)
or as peripheral alternate function. Most of the GPIO pins are shared with digital or analog
alternate functions. All GPIOs are high-current-capable and have speed selection to better
manage internal noise, power consumption and electromagnetic emission.
The I/O configuration can be locked if needed by following a specific sequence in order to
avoid spurious writing to the I/Os registers.
Fast I/O handling allowing maximum I/O toggling up to 100 MHz.

<!-- *P32*/149 -->
[P32]: #P32 
<a id="P32"></a>



//3.29 Analog-to-digital converter (ADC)
----------------------------------------

One 12-bit analog-to-digital converter is embedded and shares up to 16 external channels,
performing conversions in the single-shot or scan mode. In scan mode, automatic
conversion is performed on a selected group of analog inputs.
The ADC can be served by the DMA controller. An analog watchdog feature allows very
precise monitoring of the converted voltage of one, some or all selected channels. An
interrupt is generated when the converted voltage is outside the programmed thresholds.
To synchronize A/D conversion and timers, the ADCs could be triggered by any of TIM1,
TIM2, TIM3, TIM4 or TIM5 timer.

//3.30 Temperature sensor
-------------------------

The temperature sensor has to generate a voltage that varies linearly with temperature. The
conversion range is between 1.7 V and 3.6 V. The temperature sensor is internally
connected to the ADC_IN18 input channel which is used to convert the sensor output
voltage into a digital value. Refer to the reference manual for additional information.
As the offset of the temperature sensor varies from chip to chip due to process variation, the
internal temperature sensor is mainly suitable for applications that detect temperature
changes instead of absolute temperatures. If an accurate temperature reading is needed,
then an external temperature sensor part should be used.

//3.31 Serial wire JTAG debug port (SWJ-DP)
-------------------------------------------

The Arm SWJ-DP interface is embedded, and is a combined JTAG and serial wire debug
port that enables either a serial wire debug or a JTAG probe to be connected to the target.
Debug is performed using 2 pins only instead of 5 required by the JTAG (JTAG pins could
be re-use as GPIO with alternate function): the JTAG TMS and TCK pins are shared with
SWDIO and SWCLK, respectively, and a specific sequence on the TMS pin is used to
switch between JTAG-DP and SW-DP.

//3.32 Embedded Trace Macrocell™
--------------------------------

The Arm Embedded Trace Macrocell provides a greater visibility of the instruction and data
flow inside the CPU core by streaming compressed data at a very high rate from the
STM32F411xC/xE through a small number of ETM pins to an external hardware trace port
analyzer (TPA) device. The TPA is connected to a host computer using any high-speed
channel available. Real-time instruction and data flow activity can be recorded and then
formatted for display on the host computer that runs the debugger software. TPA hardware
is commercially available from common development tool vendors.
The Embedded Trace Macrocell operates with third party debugger software tools.

<!-- *P33*/149 -->
[P33]: #P33 
<a id="P33"></a>



/4 Pinouts and pin description
==============================


[Figure 9]: #Figure%209
<a id="Figure 9"></a>

**Figure 9**. STM32F411xC/xE WLCSP49 pinout

1. The above figure shows the package bump side.
?????????
?
?
?
?
?
?
?
???
??????
????????
????
?????
??????
????
????
?????
???
???
???
???
??????
?????????
????
?????
???
???
?????
???
?????
???????
???
???
???
???
???
????
????
???
????
???
????
???
???
????
????
?????
????
????
???
???
????
???
???
????
????
? ? ? ? ? ? ?
???
???
????
???
???
???
???
???

<!-- *P34*/149 -->
[P34]: #P34 
<a id="P34"></a>



[Figure 10]: #Figure%2010
<a id="Figure 10"></a>

**Figure 10**. STM32F411xC/xE UFQFPN48 pinout

1. The above figure shows the package top view.
?????????
???
?????
???
???
???
???
???
????
????
?? ?? ?? ?? ?? ?? ?? ?? ??
? ??
???
?
??
???
?
??
????
?
????????
?? ????
??????????
? ?? ????
??????????
? ?? ????
???
? ?? ???
???
? ?? ???
???
?
??
???
?? ?? ?? ?? ?? ?? ?? ?? ??
???
???
???
???
???
???
???
???
???
??
??
??
??
??
??
?? ?? ??
?? ?? ??
????
??????
????
????
????
????
????
????
?????????????
??????????
????
???????
???????
???
??????????????
???????????

<!-- *P35*/149 -->
[P35]: #P35 
<a id="P35"></a>



[Figure 11]: #Figure%2011
<a id="Figure 11"></a>

**Figure 11**. STM32F411xC/xE LQFP64 pinout

1. The above figure shows the package top view.
?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ??
?
?
?
?
?
???
???
???
???
??
??
??
??
??
??
??
????
?????????????
??????????
????
???
???
???
???
??????????
??????????
???
???
???
???
???
???
?????
???
???
???
???
???
???????
????
????
????
????
????
???
???
????
????
????
????
???
???
???
???
???
???
????
????
????
????
???
???
???
???
???
???
???
???
???
???
???
????
??????
??????
????
?????????
???
???
???
???
???????????
??????????????

<!-- *P36*/149 -->
[P36]: #P36 
<a id="P36"></a>



[Figure 12]: #Figure%2012
<a id="Figure 12"></a>

**Figure 12**. STM32F411xC/xE LQFP100 pinout

1. The above figure shows the package top view.
???
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
?
?
?
?
?
?
?
?
?
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
???
???
???
???
???
????
?????????????
??????????????
???
???
??????????
????
???
???
???
???
???
??????????
????
?????
???
???
???
???
???
??????
???????
???????
???? ??
???????
???? ?
??????
?????
?????
?????
?????
??????
??????
??????
??????
??????
??????
?????
?????
??????
??????
???? ?
??????
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
????
????
????
????
????
????
????
??????
???
???
???
???
?????
?????
?????
?????
???????
?????
?????
?????
?????
?????
?????
?????
?????
?????
?????
?????
?????
?????
??????
??????
??????
??????
?????
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
??
?????????
???????
????
???????????

<!-- *P37*/149 -->
[P37]: #P37 
<a id="P37"></a>



[Figure 13]: #Figure%2013
<a id="Figure 13"></a>

**Figure 13**. STM32F411xC/xE UFBGA100 pinout

1. This figure shows the package top view
?????????
?
?
?
?
?
?
?
?
?
?
?
?
???
??????
????
?????????
????
????
?????????
???
???????
???
????
?????
?????
????
???
???
???
???
????
???
???
????
???
???
???
????
???
???
???
???
???
??????????
??????
???
???
???
???
?????
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
???
????
???
????
???
???
????
????
????
????
????
????
???
???
????
????
????
????
????
????
????
????
??
???
???
????
????
????
?????
??
????
???
???
????
????
????
???
???
????
????
????
????
????
???
???
? ? ? ? ? ? ? ? ?? ?? ?? ?
???
???
????????

<!-- *P38*/149 -->
[P38]: #P38 
<a id="P38"></a>




[Table 7]: #Table%207
<a id="Table 7"></a>

**Table 7**. Legend/abbreviations used in the pinout table

Name Abbreviation Definition
Pin name
Unless otherwise specified in brackets below the pin name, the pin function during and after
reset is the same as the actual pin name
Pin type
S Supply pin
I Input only pin
I/O Input/ output pin
I/O structure
FT 5 V tolerant I/O
TC Standard 3.3 V I/O
B Dedicated BOOT0 pin
NRST Bidirectional reset pin with embedded weak pull-up resistor
Notes Unless otherwise specified by a note, all I/Os are set as floating inputs during and after reset
Alternate
functions
Functions selected through GPIOx_AFR registers
Additional
functions
Functions directly selected/enabled through peripheral registers

[Table 8]: #Table%208
<a id="Table 8"></a>

**Table 8**. STM32F411xC/xE pin definitions

Pin number
Pin name
(function after
reset) (1)
Pin type
I/O structure
Notes
Alternate functions Additional functions
UFQFPN48
LQFP64
WLCSP49
LQFP100
UFBGA100
- - - 1 B2 PE2 I/O FT -
TRACECLK,
SPI4_SCK/I2S4_CK,
SPI5_SCK/I2S5_CK,
EVENTOUT
-
- - - 2 A1 PE3 I/O FT -
TRACED0,
EVENTOUT
-
- - - 3 B1 PE4 I/O FT -
TRACED1,
SPI4_NSS/I2S4_WS,
SPI5_NSS/I2S5_WS,
EVENTOUT
-
- - - 4 C2 PE5 I/O FT -
TRACED2,
TIM9_CH1,
SPI4_MISO,
SPI5_MISO,
EVENTOUT
-

<!-- *P39*/149 -->
[P39]: #P39 
<a id="P39"></a>


- - - 5 D2 PE6 I/O FT -
TRACED3,
TIM9_CH2,
SPI4_MOSI/I2S4_SD,
SPI5_MOSI/I2S5_SD,
EVENTOUT
-
- - - - D3 VSS S - - - -
- - - - C4 VDD S - - - -
1 1 B7 6 E2 VBAT S - - - -
2 2 D5 7 C1
PC13-
ANTI_TAMP
I/O FT
(2)(3)
-
RTC_AMP1,
RTC_OUT, RTC_TS
3 3 C7 8 D1
PC14-
OSC32_IN
I/O FT
(2)(3)
(4)
- OSC32_IN
4 4 C6 9 E1
PC15-
OSC32_OUT
I/O FT - - OSC32_OUT
- - - 10 F2 VSS S - - - -
- - - 11 G2 VDD S - - - -
5 5 D7 12 F1 PH0 - OSC_IN I/O FT - - OSC_IN
6 6 D6 13 G1
PH1 -
OSC_OUT
I/O FT - - OSC_OUT
7 7 E7 14 H2 NRST I/O FT - EVENTOUT -
- 8 - 15 H1 PC0 I/O FT - EVENTOUT ADC1_10
- 9 - 16 J2 PC1 I/O FT - EVENTOUT ADC1_11
- 10 - 17 J3 PC2 I/O FT -
SPI2_MISO,
I2S2ext_SD,
EVENTOUT
ADC1_12
- 11 - 18 K2 PC3 I/O FT -
SPI2_MOSI/I2S2_SD,
EVENTOUT
ADC1_13
- - - 19 - VDD S - - - -
8 12 E6 20 J1 VSSA S - - - -
- - - - K1 VREF- S - - - -
9 13 F7 21 L1 VREF+ S - - - -
- - - 22 M1 VDDA S - - - -
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset) (1)
Pin type
I/O structure
Notes
Alternate functions Additional functions
UFQFPN48
LQFP64
WLCSP49
LQFP100
UFBGA100

<!-- *P40*/149 -->
[P40]: #P40 
<a id="P40"></a>

10 14 F6 23 L2 PA0-WKUP I/O TC

(5)
TIM2_CH1/TIM2_ET,
TIM5_CH1,
USART2_CTS,
EVENTOUT
ADC1_0, WKUP1
11 15 G7 24 M2 PA1 I/O FT -
TIM2_CH2,
TIM5_CH2,
SPI4_MOSI/I2S4_SD,
USART2_RTS,
EVENTOUT
ADC1_1
12 16 E5 25 K3 PA2 I/O FT -
TIM2_CH3,
TIM5_CH3,
TIM9_CH1,
I2S2_CKIN,
USART2_TX,
EVENTOUT
ADC1_2
13 17 E4 26 L3 PA3 I/O FT -
TIM2_CH4,
TIM5_CH4,
TIM9_CH2,
I2S2_MCK,
USART2_RX,
EVENTOUT
ADC1_3
- 18 - 27 - VSS S - - - -
- - - - E3 BYPASS_REG S - - - -
- 19 - 28 - VDD I FT - EVENTOUT -
14 20 G6 29 M3 PA4 I/O FT -
SPI1_NSS/I2S1_WS,
SPI3_NSS/I2S3_WS,
USART2_CK,
EVENTOUT
ADC1_4
15 21 F5 30 K4 PA5 I/O FT -
TIM2_CH1/TIM2_ET,
SPI1_SCK/I2S1_CK,
EVENTOUT
ADC1_5
16 22 F4 31 L4 PA6 I/O FT -
TIM1_BKIN,
TIM3_CH1,
SPI1_MISO,
I2S2_MCK,
SDIO_CMD,
EVENTOUT
ADC1_6
17 23 F3 32 M4 PA7 I/O FT -
TIM1_CH1N,
TIM3_CH2,
SPI1_MOSI/I2S1_SD,
EVENTOUT
ADC1_7
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset) (1)
Pin type
I/O structure
Notes
Alternate functions Additional functions
UFQFPN48
LQFP64
WLCSP49
LQFP100
UFBGA100

<!-- *P41*/149 -->
[P41]: #P41 
<a id="P41"></a>


- 24 - 33 K5 PC4 I/O FT - EVENTOUT ADC1_14
- 25 - 34 L5 PC5 I/O FT - EVENTOUT ADC1_15
18 26 G5 35 M5 PB0 I/O FT -
TIM1_CH2N,
TIM3_CH3,
SPI5_SCK/I2S5_CK,
EVENTOUT
ADC1_8
19 27 G4 36 M6 PB1 I/O FT -
TIM1_CH3N,
TIM3_CH4,
SPI5_NSS/I2S5_WS,
EVENTOUT
ADC1_9
20 28 G3 37 L6 PB2 I/O FT - EVENTOUT BOOT1
- - - 38 M7 PE7 I/O FT -
TIM1_ETR,
EVENTOUT
-
- - - 39 L7 PE8 I/O FT -
TIM1_CH1N,
EVENTOUT
-
- - - 40 M8 PE9 I/O FT -
TIM1_CH1,
EVENTOUT
-
- - - 41 L8 PE10 I/O FT -
TIM1_CH2N,
EVENTOUT
-
- - - 42 M9 PE11 I/O FT -
TIM1_CH2,
SPI4_NSS/I2S4_WS,
SPI5_NSS/I2S5_WS,
EVENTOUT
-
- - - 43 L9 PE12 I/O FT -
TIM1_CH3N,
SPI4_SCK/I2S4_CK,
SPI5_SCK/I2S5_CK,
EVENTOUT
-
- - - 44 M10 PE13 I/O FT -
TIM1_CH3,
SPI4_MISO,
SPI5_MISO,
EVENTOUT
-
- - - 45 M11 PE14 I/O FT -
TIM1_CH4,
SPI4_MOSI/I2S4_SD,
SPI5_MOSI/I2S5_SD,
EVENTOUT
-
- - - 46 M12 PE15 I/O FT -
TIM1_BKIN,
EVENTOUT
-
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset) (1)
Pin type
I/O structure
Notes
Alternate functions Additional functions
UFQFPN48
LQFP64
WLCSP49
LQFP100
UFBGA100

<!-- *P42*/149 -->
[P42]: #P42 
<a id="P42"></a>

21 29 E3 47 L10 PB10 I/O FT -

TIM2_CH3,
I2C2_SCL,
SPI2_SCK/I2S2_CK,
I2S3_MCK, SDIO_D7,
EVENTOUT
-
- - - - K9 PB11 I/O FT -
TIM2_CH4,
I2C2_SDA,
I2S2_CKIN,
EVENTOUT
-
22 30 G2 48 L11 VCAP_1 S - - - -
23 31 D3 49 F12 VSS S - - - -
24 32 F2 50 G12 VDD S - - - -
25 33 E2 51 L12 PB12 I/O FT -
TIM1_BKIN,
I2C2_SMBA,
SPI2_NSS/I2S2_WS,
SPI4_NSS/I2S4_WS,
SPI3_SCK/I2S3_CK,
EVENTOUT
-
26 34 G1 52 K12 PB13 I/O FT -
TIM1_CH1N,
SPI2_SCK/I2S2_CK,
SPI4_SCK/I2S4_CK,
EVENTOUT
-
27 35 F1 53 K11 PB14 I/O FT -
TIM1_CH2N,
SPI2_MISO,
I2S2ext_SD,
SDIO_D6,
EVENTOUT
-
28 36 E1 54 K10 PB15 I/O FT -
RTC_50Hz,
TIM1_CH3N,
SPI2_MOSI/I2S2_SD,
SDIO_CK,
EVENTOUT
RTC_REFIN
- - - 55 - PD8 I/O FT - - -
- - - 56 K8 PD9 I/O FT - - -
- - - 57 J12 PD10 I/O FT - - -
- - - 58 J11 PD11 I/O FT - - -
- - - 59 J10 PD12 I/O FT -
TIM4_CH1,
EVENTOUT
-
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset) (1)
Pin type
I/O structure
Notes
Alternate functions Additional functions
UFQFPN48
LQFP64
WLCSP49
LQFP100
UFBGA100

<!-- *P43*/149 -->
[P43]: #P43 
<a id="P43"></a>


- - - 60 H12 PD13 I/O FT -
TIM4_CH2,
EVENTOUT
-
- - - 61 H11 PD14 I/O FT -
TIM4_CH3,
EVENTOUT
-
- - - 62 H10 PD15 I/O FT -
TIM4_CH4,
EVENTOUT
-
- 37 - 63 E12 PC6 I/O FT -
TIM3_CH1,
I2S2_MCK,
USART6_TX,
SDIO_D6,
EVENTOUT
-
- 38 - 64 E11 PC7 I/O FT -
TIM3_CH2,
SPI2_SCK/I2S2_CK,
I2S3_MCK,
USART6_RX,
SDIO_D7,
EVENTOUT
-
- 39 - 65 E10 PC8 I/O FT -
TIM3_CH3,
USART6_CK,
SDIO_D0,
EVENTOUT
-
- 40 - 66 D12 PC9 I/O FT -
MCO_2, TIM3_CH4,
I2C3_SDA,
I2S2_CKIN,
SDIO_D1,
EVENTOUT
-
29 41 D1 67 D11 PA8 I/O FT -
MCO_1, TIM1_CH1,
I2C3_SCL,
USART1_CK,
USB_FS_SOF,
SDIO_D1,
EVENTOUT
-
30 42 D2 68 D10 PA9 I/O FT -
TIM1_CH2,
I2C3_SMBA,
USART1_TX,
USB_FS_VBUS,
SDIO_D2,
EVENTOUT
OTG_FS_VBUS
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset) (1)
Pin type
I/O structure
Notes
Alternate functions Additional functions
UFQFPN48
LQFP64
WLCSP49
LQFP100
UFBGA100

<!-- *P44*/149 -->
[P44]: #P44 
<a id="P44"></a>

31 43 C2 69 C12 PA10 I/O FT -

TIM1_CH3,
SPI5_MOSI/I2S5_SD,
USART1_RX,
USB_FS_ID,
EVENTOUT
-
32 44 C1 70 B12 PA11 I/O FT -
TIM1_CH4,
SPI4_MISO,
USART1_CTS,
USART6_TX,
USB_FS_DM,
EVENTOUT
-
33 45 C3 71 A12 PA12 I/O FT -
TIM1_ETR,
SPI5_MISO,
USART1_RTS,
USART6_RX,
USB_FS_DP,
EVENTOUT
-
34 46 B3 72 A11 PA13 I/O FT -
JTMS-SWDIO,
EVENTOUT
-
- - - 73 C11 VCAP_2 S - - - -
35 47 B1 74 F11 VSS S - - - -
36 48 B2 75 G11 VDD S - - - -
37 49 A1 76 A10 PA14 I/O FT -
JTCK-SWCLK,
EVENTOUT
-
38 50 A2 77 A9 PA15 I/O FT -
JTDI,
TIM2_CH1/TIM2_ETR
,
SPI1_NSS/I2S1_WS,
SPI3_NSS/I2S3_WS,
USART1_TX,
EVENTOUT
-
- 51 - 78 B11 PC10 I/O FT -
SPI3_SCK/I2S3_CK,
SDIO_D2,
EVENTOUT
-
- 52 - 79 C10 PC11 I/O FT -
I2S3ext_SD,
SPI3_MISO,
SDIO_D3,
EVENTOUT
-
- 53 - 80 B10 PC12 I/O FT -
SPI3_MOSI/I2S3_SD,
SDIO_CK,
EVENTOUT
-
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset) (1)
Pin type
I/O structure
Notes
Alternate functions Additional functions
UFQFPN48
LQFP64
WLCSP49
LQFP100
UFBGA100

<!-- *P45*/149 -->
[P45]: #P45 
<a id="P45"></a>


- - - 81 C9 PD0 I/O FT - EVENTOUT -
- - - 82 B9 PD1 I/O FT - EVENTOUT -
- 54 - 83 C8 PD2 I/O FT -
TIM3_ETR,
SDIO_CMD,
EVENTOUT
-
- - - 84 B8 PD3 I/O FT -
SPI2_SCK/I2S2_CK,
USART2_CTS,
EVENTOUT
-
- - - 85 B7 PD4 I/O FT -
USART2_RTS,
EVENTOUT
-
- - - 86 A6 PD5 I/O FT -
USART2_TX,
EVENTOUT
-
- - - 87 B6 PD6 I/O FT -
SPI3_MOSI/I2S3_SD,
USART2_RX,
EVENTOUT
-
- - - 88 A5 PD7 I/O FT -
USART2_CK,
EVENTOUT
-
39 55 A3 89 A8 PB3 I/O FT -
JTDO-SWO,
TIM2_CH2,
SPI1_SCK/I2S1_CK,
SPI3_SCK/I2S3_CK,
USART1_RX,
I2C2_SDA,
EVENTOUT
-
40 56 A4 90 A7 PB4 I/O FT -
JTRST, TIM3_CH1,
SPI1_MISO,
SPI3_MISO,
I2S3ext_SD,
I2C3_SDA, SDIO_D0,
EVENTOUT
-
41 57 B4 91 C5 PB5 I/O TC -
TIM3_CH2,
I2C1_SMBA,
SPI1_MOSI/I2S1_SD,
SPI3_MOSI/I2S3_SD,
SDIO_D3,
EVENTOUT
-
42 58 C4 92 B5 PB6 I/O FT -
TIM4_CH1,
I2C1_SCL,
USART1_TX,
EVENTOUT
-
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset) (1)
Pin type
I/O structure
Notes
Alternate functions Additional functions
UFQFPN48
LQFP64
WLCSP49
LQFP100
UFBGA100

<!-- *P46*/149 -->
[P46]: #P46 
<a id="P46"></a>



43 59 D4 93 B4 PB7 I/O FT -
TIM4_CH2,
I2C1_SDA,
USART1_RX,
SDIO_D0,
EVENTOUT
-
44 60 A5 94 A4 BOOT0 I B - - VPP
45 61 B5 95 A3 PB8 I/O FT -
TIM4_CH3,
TIM10_CH1,
I2C1_SCL,
SPI5_MOSI/I2S5_SD,
I2C3_SDA, SDIO_D4,
EVENTOUT
-
46 62 C5 96 B3 PB9 I/O FT -
TIM4_CH4,
TIM11_CH1,
I2C1_SDA,
SPI2_NSS/I2S2_WS,
I2C2_SDA, SDIO_D5,
EVENTOUT
-
- - - 97 C3 PE0 I/O FT -
TIM4_ETR,
EVENTOUT
-
- - - 98 A2 PE1 I/O FT - EVENTOUT -
47 63 A6 99 - VSS S - - - -
- - B6 - H3 PDR_ON I FT - - -
48 64 A7 100 - VDD S - - - -
1. Function availability depends on the chosen device.
2. PC13, PC14 and PC15 are supplied through the power switch. Since the switch only sinks a limited amount of current (3
mA), the use of GPIOs PC13 to PC15 in output mode is limited:
- The speed should not exceed 2 MHz with a maximum load of 30 pF.
- These I/Os must not be used as a current source (e.g. to drive an LED).
3. Main function after the first backup domain power-up. Later on, it depends on the contents of the RTC registers even after
reset (because these registers are not reset by the main reset). For details on how to manage these I/Os, refer to the RTC
register description sections in the STM32F411xx reference manual.
4. FT = 5 V tolerant except when in analog mode or oscillator mode (for PC14, PC15, PH0 and PH1).
5. If the device is delivered in an UFBGA100 and the BYPASS_REG pin is set to VDD (Regulator off/internal reset ON mode),
then PA0 is used as an internal Reset (active low)
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset) (1)
Pin type
I/O structure
Notes
Alternate functions Additional functions
UFQFPN48
LQFP64
WLCSP49
LQFP100
UFBGA100

<!-- *P47*/149 -->
[P47]: #P47 
<a id="P47"></a>



[Table 9]: #Table%209
<a id="Table 9"></a>

**Table 9**. Alternate function mapping

Port
AF00 AF01 AF02 AF03 AF04 AF05 AF06 AF07 AF08 AF09 AF10 AF11 AF12 AF13 AF14 AF15
SYS_AF TIM1/TIM2
TIM3/
TIM4/ TIM5
TIM9/
TIM10/
TIM11
I2C1/I2C2/
I2C3
SPI1/I2S1S
PI2/
I2S2/SPI3/
I2S3
SPI2/I2S2/
SPI3/
I2S3/SPI4/
I2S4/SPI5/
I2S5
SPI3/I2S3/
USART1/
USART2
USART6
I2C2/
I2C3
OTG1_FS SDIO
Port A
PA0 -
TIM2_CH1/
TIM2_ETR
TIM5_CH1 - - - -
USART2_
CTS
- - - - - - -
EVENT
OUT
PA1 - TIM2_CH2 TIM5_CH2 - -
SPI4_MOSI
/I2S4_SD
-
USART2_
RTS
- - - - - - -
EVENT
OUT
PA2 - TIM2_CH3 TIM5_CH3 TIM9_CH1 - I2S2_CKIN -
USART2_
TX
- - - - - - -
EVENT
OUT
PA3 - TIM2_CH4 TIM5_CH4 TIM9_CH2 - I2S2_MCK -
USART2_
RX
- - - - - - -
EVENT
OUT
PA4 - - - - -
SPI1_NSS/I
2S1_WS
SPI3_NSS/I2
S3_WS
USART2_
CK
- - - - - - -
EVENT
OUT
PA5 -
TIM2_CH1/
TIM2_ETR
- - -
SPI1_SCK/I
2S1_CK
- - - - - - - - -
EVENT
OUT
PA6 - TIM1_BKIN TIM3_CH1 - - SPI1_MISO I2S2_MCK - - - - -
SDIO_
CMD
- -
EVENT
OUT
PA7 - TIM1_CH1N TIM3_CH2 - -
SPI1_MOSI
/I2S1_SD
- - - - - - - - -
EVENT
OUT
PA8 MCO_1 TIM1_CH1 - -
I2C3_
SCL
- -
USART1_
CK
- -
USB_FS_
SOF
-
SDIO_
D1
- -
EVENT
OUT
PA9 - TIM1_CH2 - -
I2C3_
SMBA
- -
USART1_
TX
- -
USB_FS_
VBUS
-
SDIO_
D2
- -
EVENT
OUT
PA10 - TIM1_CH3 - - - -
SPI5_MOSI/I
2S5_SD
USART1_
RX
- -
USB_FS_
ID
- - - -
EVENT
OUT
PA11 - TIM1_CH4 - - - - SPI4_MISO
USART1_
CTS
USART6_
TX
-
USB_FS_
DM
- - - -
EVENT
OUT
PA12 - TIM1_ETR - - - - SPI5_MISO
USART1_
RTS
USART6_
RX
-
USB_FS_
DP
- - - -
EVENT
OUT
PA13
JTMS-
SWDIO
- - - - - - - - - - - - - -
EVENT
OUT
PA14
JTCK-
SWCLK
- - - - - - - - - - - - - -
EVENT
OUT
PA15 JTDI
TIM2_CH1/
TIM2_ETR
- - -
SPI1_NSS/I
2S1_WS
SPI3_NSS/I2
S3_WS
USART1_
TX
- - - - - - -
EVENT
OUT

<!-- *P48*/149 -->
[P48]: #P48 
<a id="P48"></a>

Port B

PB0 - TIM1_CH2N TIM3_CH3 - - -
SPI5_SCK
/I2S5_CK
- - - - - - -
EVENT
OUT
PB1 - TIM1_CH3N TIM3_CH4 - - -
SPI5_NSS
/I2S5_WS
- - - - - - -
EVENT
OUT
PB2 - - - - - - - - - - - - - - -
EVENT
OUT
PB3
JTDO-
SWO
TIM2_CH2 - - -
SPI1_SCK/I
2S1_CK
SPI3_SCK
/I2S3_CK
USART1_
RX
- I2C2_SDA - - - - -
EVENT
OUT
PB4 JTRST TIM3_CH1 - - SPI1_MISO SPI3_MISO
I2S3ext_S
D
- I2C3_SDA
SDIO_
D0
- -
EVENT
OUT
PB5 - - TIM3_CH2 -
I2C1_SMB
A
SPI1_MOSI
/I2S1_SD
SPI3_MOSI/
I2S3_SD
- - - -
SDIO_
D3
- -
EVENT
OUT
PB6 - - TIM4_CH1 - I2C1_SCL - -
USART1_
TX
- - - - - -
EVENT
OUT
PB7 - - TIM4_CH2 - I2C1_SDA - -
USART1_
RX
- - - -
SDIO_
D0
- -
EVENT
OUT
PB8 - - TIM4_CH3 TIM10_CH1 I2C1_SCL -
SPI5_MOSI/
I2S5_SD
- - I2C3_SDA - -
SDIO_
D4
- -
EVENT
OUT
PB9 - - TIM4_CH4 TIM11_CH1 I2C1_SDA
SPI2_NSS/I
2S2_WS
- - - I2C2_SDA - -
SDIO_
D5
- -
EVENT
OUT
PB10 - TIM2_CH3 - - I2C2_SCL
SPI2_SCK/I
2S2_CK
I2S3_MCK - - - - -
SDIO_
D7
- -
EVENT
OUT
PB11 - TIM2_CH4 - - I2C2_SDA I2S2_CKIN - - - - - - - - -
EVENT
OUT
PB12 - TIM1_BKIN - -
I2C2_SMB
A
SPI2_NSS/I
2S2_WS
SPI4_NSS
/I2S4_WS
SPI3_SCK
/I2S3_CK
- - - - - - -
EVENT
OUT
PB13 - TIM1_CH1N - - -
SPI2_SCK/I
2S2_CK
SPI4_SCK/
I2S4_CK
- - - - - - - -
EVENT
OUT
PB14 - TIM1_CH2N - - - SPI2_MISO I2S2ext_SD - - - - -
SDIO_
D6
- -
EVENT
OUT
PB15
RTC_50H
z
TIM1_CH3N - - -
SPI2_MOSI
/I2S2_SD
- - - - - -
SDIO_
CK
- -
EVENT
OUT
Table 9. Alternate function mapping (continued)
Port
AF00 AF01 AF02 AF03 AF04 AF05 AF06 AF07 AF08 AF09 AF10 AF11 AF12 AF13 AF14 AF15
SYS_AF TIM1/TIM2
TIM3/
TIM4/ TIM5
TIM9/
TIM10/
TIM11
I2C1/I2C2/
I2C3
SPI1/I2S1S
PI2/
I2S2/SPI3/
I2S3
SPI2/I2S2/
SPI3/
I2S3/SPI4/
I2S4/SPI5/
I2S5
SPI3/I2S3/
USART1/
USART2
USART6
I2C2/
I2C3
OTG1_FS SDIO

<!-- *P49*/149 -->
[P49]: #P49 
<a id="P49"></a>

Port C

PC0 - - - - - - - - - - - - - - -
EVENT
OUT
PC1 - - - - - - - - - - - - - - -
EVENT
OUT
PC2 - - - - - SPI2_MISO I2S2ext_SD - - - - - - - -
EVENT
OUT
PC3 - - - - -
SPI2_MOSI
/I2S2_SD
- - - - - - - - -
EVENT
OUT
PC4 - - - - - - - - - - - - - -
EVENT
OUT
PC5 - - - - - - - - - - - - - -
EVENT
OUT
PC6 - - TIM3_CH1 - - I2S2_MCK - -
USART6_
TX
- - -
SDIO_
D6
- -
EVENT
OUT
PC7 - - TIM3_CH2 - -
SPI2_SCK/I
2S2_CK
I2S3_MCK -
USART6_
RX
- - -
SDIO_
D7
- -
EVENT
OUT
PC8 - - TIM3_CH3 - - - - -
USART6_
CK
- - -
SDIO_
D0
- -
EVENT
OUT
PC9 MCO_2 - TIM3_CH4 - I2C3_SDA I2S2_CKIN - - - - -
SDIO_
D1
- -
EVENT
OUT
PC10 - - - - - -
SPI3_SCK/I2
S3_CK
- - - - -
SDIO_
D2
- -
EVENT
OUT
PC11 - - - - - I2S3ext_SD SPI3_MISO - - - - -
SDIO_
D3
- -
EVENT
OUT
PC12 - - - - - -
SPI3_MOSI/I
2S3_SD
- - - - -
SDIO_
CK
- -
EVENT
OUT
PC13 - - - - - - - - - - - - - - - -
PC14 - - - - - - - - - - - - - - - -
PC15 - - - - - - - - - - - - - - - -
Table 9. Alternate function mapping (continued)
Port
AF00 AF01 AF02 AF03 AF04 AF05 AF06 AF07 AF08 AF09 AF10 AF11 AF12 AF13 AF14 AF15
SYS_AF TIM1/TIM2
TIM3/
TIM4/ TIM5
TIM9/
TIM10/
TIM11
I2C1/I2C2/
I2C3
SPI1/I2S1S
PI2/
I2S2/SPI3/
I2S3
SPI2/I2S2/
SPI3/
I2S3/SPI4/
I2S4/SPI5/
I2S5
SPI3/I2S3/
USART1/
USART2
USART6
I2C2/
I2C3
OTG1_FS SDIO

<!-- *P50*/149 -->
[P50]: #P50 
<a id="P50"></a>

Port D

PD0 - - - - - - - - - - - - - - -
EVENT
OUT
PD1 - - - - - - - - - - - - - - -
EVENT
OUT
PD2 - - TIM3_ETR - - - - - - - - -
SDIO_
CMD
EVENT
OUT
PD3 - - - - -
SPI2_SCK/I
2S2_CK
USART2_
CTS
- - - - - - -
EVENT
OUT
PD4 - - - - - - -
USART2_
RTS
- - - - - - -
EVENT
OUT
PD5 - - - - - - -
USART2_
TX
- - - - - - -
EVENT
OUT
PD6 - - - - -
SPI3_MOSI
/I2S3_SD
-
USART2_
RX
- - - - - - -
EVENT
OUT
PD7 - - - - - - -
USART2_
CK
- - - - - - -
EVENT
OUT
PD8 - - - - - - - - - - - - - - -
EVENT
OUT
PD9 - - - - - - - - - - - - - - -
EVENT
OUT
PD10 - - - - - - - - - - - - - - -
EVENT
OUT
PD11 - - - - - - - - - - - - - - -
EVENT
OUT
PD12 - - TIM4_CH1 - - - - - - - - - - - -
EVENT
OUT
PD13 - - TIM4_CH2 - - - - - - - - - - - -
EVENT
OUT
PD14 - - TIM4_CH3 - - - - - - - - - - - -
EVENT
OUT
PD15 - - TIM4_CH4 - - - - - - - - - - - -
EVENT
OUT
Table 9. Alternate function mapping (continued)
Port
AF00 AF01 AF02 AF03 AF04 AF05 AF06 AF07 AF08 AF09 AF10 AF11 AF12 AF13 AF14 AF15
SYS_AF TIM1/TIM2
TIM3/
TIM4/ TIM5
TIM9/
TIM10/
TIM11
I2C1/I2C2/
I2C3
SPI1/I2S1S
PI2/
I2S2/SPI3/
I2S3
SPI2/I2S2/
SPI3/
I2S3/SPI4/
I2S4/SPI5/
I2S5
SPI3/I2S3/
USART1/
USART2
USART6
I2C2/
I2C3
OTG1_FS SDIO

<!-- *P51*/149 -->
[P51]: #P51 
<a id="P51"></a>

Port E

PE0 - - TIM4_ETR - - - - - - - - - - - -
EVENT
OUT
PE1 - - - - - - - - - - - - - -
EVENT
OUT
PE2
TRACECL
K
- - - -
SPI4_SCK/I
2S4_CK
SPI5_SCK/I2
S5_CK
- - - - - - - -
EVENT
OUT
PE3 TRACED0 - - - - - - - - - - - - - -
EVENT
OUT
PE4 TRACED1 - - - -
SPI4_NSS/I
2S4_WS
SPI5_NSS/I2
S5_WS
- - - - - - - -
EVENT
OUT
PE5 TRACED2 - - TIM9_CH1 - SPI4_MISO SPI5_MISO - - - - - - - -
EVENT
OUT
PE6 TRACED3 - - TIM9_CH2 -
SPI4_MOSI
/I2S4_SD
SPI5_MOSI/I
2S5_SD
- - - - - - - -
EVENT
OUT
PE7 - TIM1_ETR - - - - - - - - - - - - -
EVENT
OUT
PE8 - TIM1_CH1N - - - - - - - - - - - - -
EVENT
OUT
PE9 - TIM1_CH1 - - - - - - - - - - - - -
EVENT
OUT
PE10 - TIM1_CH2N - - - - - - - - - - - - -
EVENT
OUT
PE11 - TIM1_CH2 - - -
SPI4_NSS/I
2S4_WS
SPI5_NSS/I2
S5_WS
- - - - - - - -
EVENT
OUT
PE12 - TIM1_CH3N - - -
SPI4_SCK/I
2S4_CK
SPI5_SCK/I2
S5_CK
- - - - - - - -
EVENT
OUT
PE13 - TIM1_CH3 - - - SPI4_MISO SPI5_MISO - - - - - - - -
EVENT
OUT
PE14 - TIM1_CH4 - - -
SPI4_MOSI
/I2S4_SD
SPI5_MOSI/I
2S5_SD
- - - - - - - -
EVENT
OUT
PE15 - TIM1_BKIN - - - - - - - - - - - - -
EVENT
OUT
Table 9. Alternate function mapping (continued)
Port
AF00 AF01 AF02 AF03 AF04 AF05 AF06 AF07 AF08 AF09 AF10 AF11 AF12 AF13 AF14 AF15
SYS_AF TIM1/TIM2
TIM3/
TIM4/ TIM5
TIM9/
TIM10/
TIM11
I2C1/I2C2/
I2C3
SPI1/I2S1S
PI2/
I2S2/SPI3/
I2S3
SPI2/I2S2/
SPI3/
I2S3/SPI4/
I2S4/SPI5/
I2S5
SPI3/I2S3/
USART1/
USART2
USART6
I2C2/
I2C3
OTG1_FS SDIO

<!-- *P52*/149 -->
[P52]: #P52 
<a id="P52"></a>

Port H

PH0 - - - - - - - - - - - - - - - -
PH1 - - - - - - - - - - - - - - - -
Table 9. Alternate function mapping (continued)
Port
AF00 AF01 AF02 AF03 AF04 AF05 AF06 AF07 AF08 AF09 AF10 AF11 AF12 AF13 AF14 AF15
SYS_AF TIM1/TIM2
TIM3/
TIM4/ TIM5
TIM9/
TIM10/
TIM11
I2C1/I2C2/
I2C3
SPI1/I2S1S
PI2/
I2S2/SPI3/
I2S3
SPI2/I2S2/
SPI3/
I2S3/SPI4/
I2S4/SPI5/
I2S5
SPI3/I2S3/
USART1/
USART2
USART6
I2C2/
I2C3
OTG1_FS SDIO

<!-- *P53*/149 -->
[P53]: #P53 
<a id="P53"></a>



/5 Memory mapping
=================

The memory map is shown in Figure 14.

[Figure 14]: #Figure%2014
<a id="Figure 14"></a>

**Figure 14**. Memory map



[Table 10]: #Table%2010
<a id="Table 10"></a>

**Table 10**. STM32F411xC/xE

register boundary addresses
Bus Boundary address Peripheral
0xE010 0000 - 0xFFFF FFFF Reserved
Cortex®-M4 0xE000 0000 - 0xE00F FFFF Cortex-M4 internal peripherals
0x5004 0000 - 0xDFFF FFFF Reserved
??????????
?????????
???????
???????????
????????
???????????
?????????
???????
????????
?????????
???????
???????????
?????????
???????
????
???????????
???????????
???????????
???????????
???????????
???????????
???????????
???????????
???????????
???????????
???????????
?????????
???????
????
?????????????????????????
???????????
????????
???????????
?????????????????????????
???????????
?????????????
???????????
????
????????
???????????
???????????
????????????????????
???????????????
?????????????????????????
????
????
???????????
?????????????????????????
????????
?????????????????????????
???????????
????
????????
????????????
???????????????????????????
?????????????????????????
???????????????????????????
?????????????????????????
?????????????????????????
????????
????????
??????????????????
??????????????????
???????????????????
?????????????
?????????????
?????????????????????????
?????????????????????????
?????????????????????????
????????????
???????????
????????????????????
???????????
?????????????????????????
???????? ?????????????????????????
????????
???????????
????????
????????
????????

<!-- *P54*/149 -->
[P54]: #P54 
<a id="P54"></a>

AHB2 0x5000 0000 - 0x5003 FFFF USB OTG FS

AHB1
0x4002 6800 - 0x4FFF FFFF Reserved
0x4002 6400 - 0x4002 67FF DMA2
0x4002 6000 - 0x4002 63FF DMA1
0x4002 5000 - 0x4002 4FFF Reserved
0x4002 3C00 - 0x4002 3FFF Flash interface register
0x4002 3800 - 0x4002 3BFF RCC
0x4002 3400 - 0x4002 37FF Reserved
0x4002 3000 - 0x4002 33FF CRC
0x4002 2000 - 0x4002 2FFF Reserved
0x4002 1C00 - 0x4002 1FFF GPIOH
0x4002 1400 - 0x4002 1BFF Reserved
0x4002 1000 - 0x4002 13FF GPIOE
0x4002 0C00 - 0x4002 0FFF GPIOD
0x4002 0800 - 0x4002 0BFF GPIOC
0x4002 0400 - 0x4002 07FF GPIOB
0x4002 0000 - 0x4002 03FF GPIOA
Table 10. STM32F411xC/xE
register boundary addresses (continued)
Bus Boundary address Peripheral

<!-- *P55*/149 -->
[P55]: #P55 
<a id="P55"></a>


APB2
0x4001 5400- 0x4001 FFFF Reserved
0x4001 5000 - 0x4001 53FFF SPI5/I2S5
0x4001 4800 - 0x4001 4BFF TIM11
0x4001 4400 - 0x4001 47FF TIM10
0x4001 4000 - 0x4001 43FF TIM9
0x4001 3C00 - 0x4001 3FFF EXTI
0x4001 3800 - 0x4001 3BFF SYSCFG
0x4001 3400 - 0x4001 37FF SPI4/I2S4
0x4001 3000 - 0x4001 33FF SPI1/I2S1
0x4001 2C00 - 0x4001 2FFF SDIO
0x4001 2400 - 0x4001 2BFF Reserved
0x4001 2000 - 0x4001 23FF ADC1
0x4001 1800 - 0x4001 1FFF Reserved
0x4001 1400 - 0x4001 17FF USART6
0x4001 1000 - 0x4001 13FF USART1
0x4001 0400 - 0x4001 0FFF Reserved
0x4001 0000 - 0x4001 03FF TIM1
0x4000 7400 - 0x4000 FFFF Reserved
Table 10. STM32F411xC/xE
register boundary addresses (continued)
Bus Boundary address Peripheral

<!-- *P56*/149 -->
[P56]: #P56 
<a id="P56"></a>

APB1

0x4000 7000 - 0x4000 73FF PWR
0x4000 6000 - 0x4000 6FFF Reserved
0x4000 5C00 - 0x4000 5FFF I2C3
0x4000 5800 - 0x4000 5BFF I2C2
0x4000 5400 - 0x4000 57FF I2C1
0x4000 4800 - 0x4000 53FF Reserved
0x4000 4400 - 0x4000 47FF USART2
0x4000 4000 - 0x4000 43FF I2S3ext
0x4000 3C00 - 0x4000 3FFF SPI3 / I2S3
0x4000 3800 - 0x4000 3BFF SPI2 / I2S2
0x4000 3400 - 0x4000 37FF I2S2ext
0x4000 3000 - 0x4000 33FF IWDG
0x4000 2C00 - 0x4000 2FFF WWDG
0x4000 2800 - 0x4000 2BFF RTC & BKP Registers
0x4000 1000 - 0x4000 27FF Reserved
0x4000 0C00 - 0x4000 0FFF TIM5
0x4000 0800 - 0x4000 0BFF TIM4
0x4000 0400 - 0x4000 07FF TIM3
0x4000 0000 - 0x4000 03FF TIM2
Table 10. STM32F411xC/xE
register boundary addresses (continued)
Bus Boundary address Peripheral

<!-- *P57*/149 -->
[P57]: #P57 
<a id="P57"></a>



/6 Electrical characteristics
=============================


//6.1 Parameter conditions
--------------------------

Unless otherwise specified, all voltages are referenced to V SS .

//6.1.1 Minimum and maximum values
----------------------------------

Unless otherwise specified the minimum and maximum values are guaranteed in the worst
conditions of ambient temperature, supply voltage and frequencies by tests in production on
100% of the devices with an ambient temperature at T A = 25 °C and T A = T A max (given by
the selected temperature range).
Data based on characterization results, design simulation and/or technology characteristics
are indicated in the table footnotes and are not tested in production. Based on
characterization, the minimum and maximum values refer to sample tests and represent the
mean value plus or minus three times the standard deviation (mean ±3 σ).

//6.1.2 Typical values
----------------------

Unless otherwise specified, typical data are based on T A = 25 °C, V DD = 3.3 V (for the
1.7 V ≤ V DD ≤ 3.6 V voltage range). They are given only as design guidelines and are not
tested.
Typical ADC accuracy values are determined by characterization of a batch of samples from
a standard diffusion lot over the full temperature range, where 95% of the devices have an
error less than or equal to the value indicated (mean ±2 σ) .

//6.1.3 Typical curves
----------------------

Unless otherwise specified, all typical curves are given only as design guidelines and are
not tested.

//6.1.4 Loading capacitor
-------------------------

The loading conditions used for pin parameter measurement are shown in Figure 15.

[Figure 15]: #Figure%2015
<a id="Figure 15"></a>

**Figure 15**. Pin loading conditions

?????????
?????????
???????

<!-- *P58*/149 -->
[P58]: #P58 
<a id="P58"></a>



//6.1.5 Pin input voltage
-------------------------

The input voltage measurement on a pin of the device is described in Figure 16.

[Figure 16]: #Figure%2016
<a id="Figure 16"></a>

**Figure 16**. Input voltage measurement

?????????
???????
? ??

<!-- *P59*/149 -->
[P59]: #P59 
<a id="P59"></a>



//6.1.6 Power supply scheme
---------------------------


[Figure 17]: #Figure%2017
<a id="Figure 17"></a>

**Figure 17**. Power supply scheme

1. To connect PDR_ON pin, refer to Section 3.15: Power supply supervisor.
2. The 4.7 µF ceramic capacitor must be connected to one of the V DD pin.
3. VCAP_2 pad is only available on LQFP100 and UFBGA100 packages.
4. V DDA =V DD and V SSA =V SS .
Caution: Each power supply pair (for example V DD /V SS , V DDA /V SSA ) must be decoupled with filtering
ceramic capacitors as shown above. These capacitors must be placed as close as possible
to, or below, the appropriate pins on the underside of the PCB to ensure good operation of
the device. It is not recommended to remove filtering capacitors to reduce PCB size or cost.
This might cause incorrect operation of the device.
?????????
????????????????
????????????
????????????
?????????????????
?????????????
??????????????
????????
???????
?????
??????
??????
??????
????
?????
???
??
??????????
????????????
??????
????????????
????????
?????????
????
???
?????????????
??
?????
???
??????
??????
????????????
??????
??????????
??????
??????
??????????
???
??????????
???
??????????
???
?????
?????
????
????
??????
??????
??????
?????????? ?????????? ??

<!-- *P60*/149 -->
[P60]: #P60 
<a id="P60"></a>



//6.1.7 Current consumption measurement
---------------------------------------


[Figure 18]: #Figure%2018
<a id="Figure 18"></a>

**Figure 18**. Current consumption measurement scheme


//6.2 Absolute maximum ratings
------------------------------

Stresses above the absolute maximum ratings listed in Table 11: Voltage characteristics,
Table 12: Current characteristics, and Table 13: Thermal characteristics may cause
permanent damage to the device. These are stress ratings only and functional operation of
the device at these conditions is not implied. Exposure to maximum rating conditions for
extended periods may affect device reliability.

???????
? ???
? ??
? ???
? ?? ?? ???
? ??

[Table 11]: #Table%2011
<a id="Table 11"></a>

**Table 11**. Voltage characteristics

Symbol Ratings Min Max Unit
V DD –V SS
External main supply voltage (including V DDA , V DD and
V BAT ) (1)
1. All main power (V DD , V DDA ) and ground (V SS , V SSA ) pins must always be connected to the external power
supply, in the permitted range.
–0.3 4.0
V
V IN
Input voltage on FT and TC pins (2)
2. V IN maximum value must always be respected. Refer to Table 12 for the values of the maximum allowed
injected current.
V SS –0.3 V DD +4.0
Input voltage on any other pin V SS –0.3 4.0
Input voltage for BOOT0 V SS 9.0
|ΔV DDx | Variations between different V DD power pins - 50
mV
|V SSX −V SS | Variations between all the different ground pins - 50
V ESD(HBM) Electrostatic discharge voltage (human body model)
see Section 6.3.14:
Absolute maximum
ratings (electrical
sensitivity)

<!-- *P61*/149 -->
[P61]: #P61 
<a id="P61"></a>





[Table 12]: #Table%2012
<a id="Table 12"></a>

**Table 12**. Current characteristics

Symbol Ratings Max. Unit
ΣI VDD Total current into sum of all V DD_x power lines (source) (1) 160
mA
Σ I VSS Total current out of sum of all V SS_x ground lines (sink) (1) -160
I VDD Maximum current into each V DD_x power line (source) (1) 100
I VSS Maximum current out of each V SS_x ground line (sink) (1) -100
I IO
Output current sunk by any I/O and control pin 25
Output current sourced by any I/O and control pin -25
ΣI IO
Total output current sunk by sum of all I/O and control pins (2) 120
Total output current sourced by sum of all I/Os and control pins (2) -120
I INJ(PIN) (3)
Injected current on FT and TC pins (4)
–5/+0
Injected current on NRST and B pins (4)
ΣI INJ(PIN) Total injected current (sum of all I/O and control pins) (5) ±25
1. All main power (V DD , V DDA ) and ground (V SS , V SSA ) pins must always be connected to the external power supply, in the
permitted range.
2. This current consumption must be correctly distributed over all I/Os and control pins.
3. Negative injection disturbs the analog performance of the device. See note in Section 6.3.20: 12-bit ADC characteristics.
4. Positive injection is not possible on these I/Os and does not occur for input voltages lower than the specified maximum
value.
5. When several inputs are submitted to a current injection, the maximum Σ I INJ(PIN) is the absolute sum of the positive and
negative injected currents (instantaneous values).

[Table 13]: #Table%2013
<a id="Table 13"></a>

**Table 13**. Thermal characteristics

Symbol Ratings Value Unit
T STG Storage temperature range –65 to +150
°C
T J Maximum junction temperature 130
T LEAD
Maximum lead temperature during soldering
(WLCSP49, LQFP64/100, UFQFPN48,
UFBGA100)
see note (1)
1. Compliant with JEDEC Std J-STD-020D (for small body, Sn-Pb or Pb assembly), the ST ECOPACK ®
7191395 specification, and the European directive on Restrictions on Hazardous Substances (ROHS
directive 2011/65/EU, July 2011).

<!-- *P62*/149 -->
[P62]: #P62 
<a id="P62"></a>



//6.3 Operating conditions
--------------------------


//6.3.1 General operating conditions
------------------------------------



[Table 14]: #Table%2014
<a id="Table 14"></a>

**Table 14**. General operating conditions

Symbol Parameter Conditions Min Typ Max Unit
f HCLK Internal AHB clock frequency
Power Scale3: Regulator ON,
VOS[1:0] bits in PWR_CR register = 0x01
0 - 64
MHz
Power Scale2: Regulator ON,
VOS[1:0] bits in PWR_CR register = 0x10
0 - 84
Power Scale1: Regulator ON,
VOS[1:0] bits in PWR_CR register = 0x11
0 - 100
f PCLK1 Internal APB1 clock frequency 0 - 50 MHz
f PCLK2 Internal APB2 clock frequency 0 - 100 MHz
V DD Standard operating voltage 1.7 (1) - 3.6 V
V DDA (2)(3)
Analog operating voltage
(ADC limited to 1.2 M
samples)
Must be the same potential as V DD (4)
1.7 (1) - 2.4
V
Analog operating voltage
(ADC limited to 2.4 M
samples)
2.4 - 3.6
V BAT Backup operating voltage 1.65 - 3.6 V
V 12
Regulator ON: 1.2 V internal
voltage on VCAP_1/VCAP_2
pins
VOS[1:0] bits in PWR_CR register = 0x01
Max frequency 64 MHz
1.08
(5)
1.14 1.20 (5)
V
VOS[1:0] bits in PWR_CR register = 0x10
Max frequency 84 MHz
1.20
(5)
1.26 1.32 (5)
VOS[1:0] bits in PWR_CR register = 0x11
Max frequency 100 MHz
1.26 1.32 1.38
V 12
Regulator OFF: 1.2 V external
voltage must be supplied on
VCAP_1/VCAP_2 pins
Max frequency 64 MHz 1.10 1.14 1.20
V Max frequency 84 MHz 1.20 1.26 1.32
Max frequency 100 MHz 1.26 1.32 1.38
V IN
Input voltage on RST, FT and
TC pins (6)
2 V ≤ V DD ≤ 3.6 V –0.3 - 5.5
V V DD ≤ 2 V –0.3 - 5.2
Input voltage on BOOT0 pin - 0 - 9
P D
Power dissipation at
T A = 85°C (range 6) or
105 °C (range 7) (7)
UFQFPN48 - - 625
mW
WLCSP49 - - 392
LQFP64 - - 425
LQFP100 - - 465
UFBGA100 - - 323

<!-- *P63*/149 -->
[P63]: #P63 
<a id="P63"></a>



P D
Power dissipation at
T A = 125 °C (range 3) (7)
UFQFPN48 - - 156
mW
WLCSP49 - - 98
LQFP64 - - 106
LQFP100 - - 116
UFBGA100 - - 81
T A
Ambient temperature for
range 6
Maximum power dissipation - 40 - 85
°C
Low power dissipation (8) - 40 - 105
Ambient temperature for
range 7
Maximum power dissipation - 40 - 105
Low power dissipation (8) - 40 - 125
Ambient temperature for
range 3
Maximum power dissipation - 40 - 110
Low power dissipation (8) - 40 - 130
T J Junction temperature range
Range 6 - 40 - 105
Range 7 - 40 - 125
Range 3 - 40 - 130
1. V DD /V DDA minimum value of 1.7 V with the use of an external power supply supervisor (refer to Section 3.15.2: Internal
reset OFF).
2. When the ADC is used, refer to Table 65: ADC characteristics.
3. If VREF+ pin is present, it must respect the following condition: VDDA-VREF+ < 1.2 V.
4. It is recommended to power V DD and V DDA from the same source. A maximum difference of 300 mV between V DD and
V DDA can be tolerated during power-up and power-down operation.
5. Guaranteed by test in production.
6. To sustain a voltage higher than VDD+0.3, the internal Pull-up and Pull-Down resistors must be disabled
7. If T A is lower, higher P D values are allowed as long as T J does not exceed T Jmax .
8. In low power dissipation state, T A can be extended to this range as long as T J does not exceed T Jmax .
Table 14. General operating conditions (continued)
Symbol Parameter Conditions Min Typ Max Unit

[Table 15]: #Table%2015
<a id="Table 15"></a>

**Table 15**. Features depending on the operating power supply range

Operating
power
supply
range
ADC
operation
Maximum
Flash
memory
access
frequency
with no wait
states
(f Flashmax )
Maximum Flash
memory access
frequency with
wait states (1)(2)
I/O operation
Clock output
frequency on
I/O pins (3)
Possible
Flash
memory
operations
V DD =1.7 to
2.1 V (4)
Conversion
time up to
1.2 Msps
16 MHz (5)
100 MHz with 6
wait states
– No I/O
compensation
up to 30 MHz
8-bit erase
and program
operations
only
V DD = 2.1 to
2.4 V
Conversion
time up to
1.2 Msps
18 MHz
100 MHz with 5
wait states
– No I/O
compensation
up to 30 MHz
16-bit erase
and program
operations

<!-- *P64*/149 -->
[P64]: #P64 
<a id="P64"></a>



//6.3.2 VCAP_1/VCAP_2 external capacitors
-----------------------------------------

Stabilization for the main regulator is achieved by connecting the external capacitor C EXT to
the VCAP_1 and VCAP_2 pins. For packages supporting only 1 VCAP pin, the 2 CEXT
capacitors are replaced by a single capacitor.
C EXT is specified in Table 16.

[Figure 19]: #Figure%2019
<a id="Figure 19"></a>

**Figure 19**. External capacitor C EXT

1. Legend: ESR is the equivalent series resistance.
V DD = 2.4 to
2.7 V
Conversion
time up to
2.4 Msps
24 MHz
100 MHz with 4
wait states
– I/O
compensation
works
up to 50 MHz
16-bit erase
and program
operations
V DD = 2.7 to
3.6 V (6)
Conversion
time up to
2.4 Msps
30 MHz
100 MHz with 3
wait states
– I/O
compensation
works
– up to
100 MHz
when V DD =
3.0 to 3.6 V
– up to
50 MHz
when V DD =
2.7 to 3.0 V
32-bit erase
and program
operations
1. Applicable only when the code is executed from Flash memory. When the code is executed from RAM, no wait state is
required.
2. Thanks to the ART accelerator and the 128-bit Flash memory, the number of wait states given here does not impact the
execution speed from Flash memory since the ART accelerator allows to achieve a performance equivalent to 0 wait state
program execution.
3. Refer to Table 55: I/O AC characteristics for frequencies vs. external load.
4. V DD /V DDA minimum value of 1.7 V, with the use of an external power supply supervisor (refer to Section 3.15.2: Internal
reset OFF).
5. Prefetch is not available. Refer to AN3430 application note for details on how to adjust performance and power.
6. The voltage range for the USB full speed embedded PHY can drop down to 2.7 V. However the electrical characteristics of
D- and D+ pins will be degraded between 2.7 and 3 V.
Table 15. Features depending on the operating power supply range (continued)
Operating
power
supply
range
ADC
operation
Maximum
Flash
memory
access
frequency
with no wait
states
(f Flashmax )
Maximum Flash
memory access
frequency with
wait states (1)(2)
I/O operation
Clock output
frequency on
I/O pins (3)
Possible
Flash
memory
operations
?????????
???
?? ????
?

<!-- *P65*/149 -->
[P65]: #P65 
<a id="P65"></a>




//6.3.3 Operating conditions at power-up/power-down (regulator ON)
------------------------------------------------------------------

Subject to general operating conditions for T A .

[Table 17]: #Table%2017
<a id="Table 17"></a>

**Table 17**. Operating conditions at power-up / power-down (regulator ON)


//6.3.4 Operating conditions at power-up / power-down (regulator OFF)
---------------------------------------------------------------------

Subject to general operating conditions for T A .

Note: This feature is only available for UFBGA100 package.

[Table 16]: #Table%2016
<a id="Table 16"></a>

**Table 16**. VCAP_1/VCAP_2 operating conditions (1)

1. When bypassing the voltage regulator, the two 2.2 µF V CAP capacitors are not required and should be
replaced by two 100 nF decoupling capacitors.
Symbol Parameter Conditions
CEXT
Capacitance of external capacitor with a single VCAP
pin available
4.7 µF
ESR
ESR of external capacitor with a single VCAP pin
available
< 1 Ω
Symbol Parameter Min Max Unit
t VDD
V DD rise time rate 20 ∞
µs/V
V DD fall time rate 20 ∞

[Table 18]: #Table%2018
<a id="Table 18"></a>

**Table 18**. Operating conditions at power-up / power-down (regulator OFF) (1)

1. To reset the internal logic at power-down, a reset must be applied on pin PA0 when V DD reach below
1.08 V.
Symbol Parameter Conditions Min Max Unit
t VDD
V DD rise time rate Power-up 20 ∞
µs/V
V DD fall time rate Power-down 20 ∞
t VCAP
V CAP_1 and V CAP_2 rise time rate Power-up 20 ∞
V CAP_1 and V CAP_2 fall time rate Power-down 20 ∞

<!-- *P66*/149 -->
[P66]: #P66 
<a id="P66"></a>



//6.3.5 Embedded reset and power control block characteristics
--------------------------------------------------------------

The parameters given in Table 19 are derived from tests performed under ambient
temperature and V DD supply voltage @ 3.3V.


[Table 19]: #Table%2019
<a id="Table 19"></a>

**Table 19**. Embedded reset and power control block characteristics

Symbol Parameter Conditions Min Typ Max Unit
V PVD
Programmable voltage
detector level selection
PLS[2:0]=000 (rising edge) 2.09 2.14 2.19
V
PLS[2:0]=000 (falling edge) 1.98 2.04 2.08
PLS[2:0]=001 (rising edge) 2.23 2.30 2.37
PLS[2:0]=001 (falling edge) 2.13 2.19 2.25
PLS[2:0]=010 (rising edge) 2.39 2.45 2.51
PLS[2:0]=010 (falling edge) 2.29 2.35 2.39
PLS[2:0]=011 (rising edge) 2.54 2.60 2.65
PLS[2:0]=011 (falling edge) 2.44 2.51 2.56
PLS[2:0]=100 (rising edge) 2.70 2.76 2.82
PLS[2:0]=100 (falling edge) 2.59 2.66 2.71
PLS[2:0]=101 (rising edge) 2.86 2.93 2.99
PLS[2:0]=101 (falling edge) 2.77 2.82 2.89
PLS[2:0]=110 (rising edge) 2.96 3.03 3.10
PLS[2:0]=110 (falling edge) 2.85 2.93 2.99
PLS[2:0]=111 (rising edge) 3.07 3.14 3.21
PLS[2:0]=111 (falling edge) 2.95 3.03 3.09
V PVDhyst (2) PVD hysteresis - - 100 - mV
V POR/PDR
Power-on/power-down
reset threshold
Falling edge
1.60 (1)
1.68 1.76
V
Rising edge 1.64 1.72 1.80
V PDRhyst (2) PDR hysteresis - - 40 - mV
V BOR1
Brownout level 1
threshold
Falling edge 2.13 2.19 2.24
V
Rising edge 2.23 2.29 2.33
V BOR2
Brownout level 2
threshold
Falling edge 2.44 2.50 2.56
Rising edge 2.53 2.59 2.63
V BOR3
Brownout level 3
threshold
Falling edge 2.75 2.83 2.88
Rising edge 2.85 2.92 2.97
V BORhyst (2) BOR hysteresis - - 100 - mV
T RSTTEMPO
(2)(3)
POR reset timing - 0.5 1.5 3.0 ms

<!-- *P67*/149 -->
[P67]: #P67 
<a id="P67"></a>



//6.3.6 Supply current characteristics
--------------------------------------

The current consumption is a function of several parameters and factors such as the
operating voltage, ambient temperature, I/O pin loading, device software configuration,
operating frequencies, I/O pin switching rate, program location in memory and executed
binary code.
The current consumption is measured as described in Figure 18: Current consumption
measurement scheme.
All the run-mode current consumption measurements given in this section are performed
with a reduced code that gives a consumption equivalent to CoreMark code.
Typical and maximum current consumption
The MCU is placed under the following conditions:
• All I/O pins are in input mode with a static value at VDD or VSS (no load).
• All peripherals are disabled except if it is explicitly mentioned.
• The Flash memory access time is adjusted to both f HCLK frequency and VDD ranges
(refer to Table 15: Features depending on the operating power supply range).
• The voltage scaling is adjusted to f HCLK frequency as follows:
– Scale 3 for f HCLK ≤ 64 MHz
– Scale 2 for 64 MHz < f HCLK ≤ 84 MHz
– Scale 1 for 84 MHz < f HCLK ≤ 100 MHz
• The system clock is HCLK, f PCLK1 = f HCLK /2, and f PCLK2 = f HCLK .
• External clock is 4 MHz and PLL is ON except if it is explicitly mentioned.
• The maximum values are obtained for V DD = 3.6 V and a maximum ambient
temperature (T A ), and the typical values for T A = 25 °C and V DD = 3.3 V unless
otherwise specified.


I RUSH (2)
In-Rush current on
voltage regulator power-
on (POR or wakeup from
Standby)
- - 160 200 mA
E RUSH (2)
In-Rush energy on
voltage regulator power-
on (POR or wakeup from
Standby)
V DD = 1.7 V, T A = 125 °C,
I RUSH = 171 mA for 31 µs
- - 5.4 µC
1. The product behavior is guaranteed by design down to the minimum V POR/PDR value.
2. Guaranteed by design.
3. The reset timing is measured from the power-on (POR reset or wakeup from V BAT ) to the instant when first
instruction is fetched by the user application code.
Table 19. Embedded reset and power control block characteristics (continued)
Symbol Parameter Conditions Min Typ Max Unit

<!-- *P68*/149 -->
[P68]: #P68 
<a id="P68"></a>




[Table 20]: #Table%2020
<a id="Table 20"></a>

**Table 20**. Typical and maximum current consumption, code with data processing (ART

accelerator disabled) running from SRAM - V DD = 1.7 V
Symbol Parameter Conditions
f HCLK
(MHz)
Typ Max (1)
Unit
T A =
25 °C
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD
Supply
current in Run
mode
External clock,
PLL ON (2) , all
peripherals
enabled (3)(4)
100 21.4 23.0 23.6 24.0 25.0
mA
84 17.2 18.9 (5) 19.1 19.2 20.2
64 11.9 12.9 13.2 13.7 14.6
50 9.4 10.1 10.4 11.0 11.9
20 4.3 4.8 5.0 5.6 6.5
HSI, PLL off, all
peripherals
enabled (4)
16 3.0 3.3 3.6 4.3 5.2
1 0.5 0.7 1.0 1.7 2.6
External clock,
PLL on (2) )all
peripherals
disabled (3)
100 12.7 14.0 14.4 14.8 15.8
84 10.2 11.6 (5) 11.8 12.0 13.0
64 7.1 7.9 8.2 8.7 9.7
50 5.6 6.3 6.5 7.1 8.0
20 2.5 3.0 3.3 3.9 4.8
HSI, PLL off, all
peripherals
disabled (4)
16 1.9 2.1 2.4 3.0 3.9
1 0.4 0.5 0.9 1.6 2.5
1. Guaranteed by characterization results.
2. Refer to Table 41 and RM0383 for the possible PLL VCO setting
3. When analog peripheral blocks such as ADC, HSE, LSE, HSI, or LSI are ON, an additional power consumption has to be
considered.
4. When the ADC is ON (ADON bit set in the ADC_CR2 register), add an additional power consumption of 1.6 mA for the
analog part.
5. Guaranteed by test in production.

<!-- *P69*/149 -->
[P69]: #P69 
<a id="P69"></a>




[Table 21]: #Table%2021
<a id="Table 21"></a>

**Table 21**. Typical and maximum current consumption, code with data processing (ART

accelerator disabled) running from SRAM - V DD = 3.6 V
Symbol Parameter Conditions
f HCLK
(MHz)
Typ
Max (1)
Unit
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD
Supply
current in
Run mode
External clock,
PLL ON (2) , all
peripherals
enabled (3)(4)
100 21.7 23.3 23.9 24.3 25.3
mA
84 17.5 19.2 (5) 19.4 19.5 20.5
64 12.2 13.2 13.5 14.0 14.9
50 9.6 10.4 10.7 11.2 12.1
20 4.5 5.0 5.3 5.9 6.8
HSI, PLL OFF, all
peripherals
enabled (3)
16 3.0 3.3 3.6 4.3 5.2
1 0.5 0.7 1.0 1.7 2.6
External clock,
PLL OFF (2) ,
all peripherals
disabled (3)
100 13.0 14.6 (5) 14.6 14.9 16.0
84 10.5 11.9 (5) 12.1 12.2 13.2
64 7.4 8.4 (5) 8.8 8.9 9.9
50 5.9 6.6 6.8 7.3 8.2
20 2.8 3.3 3.5 4.2 5.1
HSI, PLL OFF, all
peripherals
disabled (3)
16 1.9 2.1 2.4 3.1 4.0
1 0.4 0.5 0.9 1.6 2.5
1. Guaranteed by characterization results.
2. Refer to Table 41 and RM0383 for the possible PLL VCO setting
3. When analog peripheral blocks such as ADC, HSE, LSE, HSI, or LSI are ON, an additional power consumption has to be
considered.
4. When the ADC is ON (ADON bit set in the ADC_CR2 register), add an additional power consumption of 1.6 mA for the
analog part.
5. Guaranteed by test in production.

<!-- *P70*/149 -->
[P70]: #P70 
<a id="P70"></a>




[Table 22]: #Table%2022
<a id="Table 22"></a>

**Table 22**. Typical and maximum current consumption in run mode, code with data processing

(ART accelerator enabled except prefetch) running from Flash memory- V DD = 1.7 V
Symbol Parameter Conditions
f HCLK
(MHz)
Typ
Max (1)
Unit
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD
Supply current
in Run mode
External clock, PLL
ON (2) ,
all peripherals
enabled (3)(4)
100 20.4 21.8 22.1 22.8 23.8
mA
84 16.5 17.6 17.8 18.6 19.6
64 11.4 12.3 12.5 13.1 14.1
50 9.0 9.7 10.0 10.6 11.6
20 4.6 5.0 5.3 6.0 7.0
HSI, PLL OFF (2) , all
peripherals enabled (3)
16 2.9 3.2 3.6 4.3 5.3
1 0.7 0.8 1.3 1.9 2.9
External clock, PLL ON (2)
all peripherals disabled (3)
100 11.2 12.2 12.4 13.2 14.2
84 9.1 9.9 10.1 10.9 11.9
64 6.4 7.0 7.3 7.9 8.9
50 5.1 5.6 5.9 6.6 7.6
20 2.6 3.0 3.3 4.0 5.0
HSI, PLL OFF (2) , all
peripherals disabled (3)
16 1.8 2.0 2.4 3.0 4.0
1 0.6 0.7 1.2 1.9 2.9
1. Guaranteed by characterization results.
2. Refer to Table 41 and RM0383 for the possible PLL VCO setting
3. Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
4. When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.

<!-- *P71*/149 -->
[P71]: #P71 
<a id="P71"></a>




[Table 23]: #Table%2023
<a id="Table 23"></a>

**Table 23**. Typical and maximum current consumption in run mode, code with data processing

(ART accelerator enabled except prefetch) running from Flash memory - V DD = 3.6 V
Symbol Parameter Conditions
f HCLK
(MHz)
Typ
Max (1)
Unit
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD
Supply current
in Run mode
External clock, PLL
ON (2) ,
all peripherals
enabled (3)(4)
100 20.7 22.2 22.5 23.2 24.4
mA
84 16.8 18.0 18.3 19.0 20.1
64 11.8 12.7 12.9 13.6 14.6
50 9.3 10.2 10.4 11.1 12.0
20 4.8 5.5 5.8 6.5 7.4
HSI, PLL OFF (2) , all
peripherals enabled (3)
16 3.0 3.3 3.8 4.5 5.4
1 0.7 1.0 1.4 2.1 3.0
External clock, PLL ON (2)
all peripherals disabled (3)
100 11.6 12.6 12.9 13.6 14.8
84 9.7 10.2 (5) 11.1 11.3 12.5
64 6.7 7.4 7.7 8.3 9.4
50 5.4 6.0 6.3 7.0 8.0
20 2.9 3.4 3.7 4.4 5.4
HSI, PLL OFF (2) , all
peripherals disabled (3)
16 1.9 2.2 2.6 3.3 4.3
1 0.7 0.9 1.3 2.1 3.1
1. Guaranteed by characterization results.
2. Refer to Table 41 and RM0383 for the possible PLL VCO setting
3. Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
4. When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.
5. Guaranteed by test in production.

<!-- *P72*/149 -->
[P72]: #P72 
<a id="P72"></a>




[Table 24]: #Table%2024
<a id="Table 24"></a>

**Table 24**. Typical and maximum current consumption in run mode, code with data processing

(ART accelerator disabled) running from Flash memory - V DD = 3.6 V
Symbol Parameter Conditions
f HCLK
(MHz)
Typ
Max (1)
Unit
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD
Supply current
in Run mode
External clock, PLL
ON (2) ,
all peripherals
enabled (3)(4)
100 29.5 31.5 32.3 33.3 34.7
mA
84 25.5 27.1 27.9 28.9 30.2
64 18.6 19.8 20.4 21.2 22.4
50 15.2 16.4 16.9 17.7 18.7
20 7.6 8.4 8.8 9.5 10.5
HSI, PLL OFF (2) , all
peripherals enabled (3)
16 4.8 5.2 5.7 6.5 7.5
1 0.9 1.3 1.6 2.4 3.4
External clock, PLL ON (2)
all peripherals disabled (3)
100 20.4 21.8 22.7 23.8 25.1
84 18.4 19.2 (5) 20.9 21.1 22.4
64 13.5 14.5 15.2 15.9 17.2
50 11.3 12.2 12.8 13.6 14.7
20 5.6 6.4 6.7 7.4 8.5
HSI, PLL OFF (2) , all
peripherals disabled (3)
16 3.6 4.1 4.5 5.2 6.3
1 0.9 1.2 1.6 2.3 3.4
1. Guaranteed by characterization results.
2. Refer to Table 41 and RM0383 for the possible PLL VCO setting
3. Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
4. When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.
5. Guaranteed by test in production.

<!-- *P73*/149 -->
[P73]: #P73 
<a id="P73"></a>




[Table 25]: #Table%2025
<a id="Table 25"></a>

**Table 25**. Typical and maximum current consumption in run mode, code with data processing

(ART accelerator enabled with prefetch) running from Flash memory - V DD = 3.6 V
Symbol Parameter Conditions
f HCLK
(MHz)
Typ
Max (1)
Unit
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD
Supply current
in Run mode
External clock, PLL
ON (2) ,
all peripherals
enabled (3)(4)
100 31.7 33.6 34.5 35.5 37.0
mA
84 26.9 28.6 29.4 30.3 31.6
64 19.6 20.9 21.5 22.3 23.5
50 15.6 16.7 17.2 18.0 19.1
20 7.6 8.4 8.8 9.5 10.6
HSI, PLL OFF (2) , all
peripherals enabled (3)
16 5.1 5.6 6.1 6.8 7.9
1 1.0 1.3 1.7 2.3 3.4
External clock, PLL ON (2)
all peripherals disabled (3)
100 22.5 24.2 24.9 26.0 27.3
84 19.5 21.1 (5) 21.8 22.8 24.1
64 14.5 15.7 16.3 17.1 18.3
50 11.7 12.7 13.2 14.0 15.1
20 5.6 6.4 6.8 7.4 8.5
HSI, PLL OFF (2) , all
peripherals disabled (3)
16 4.0 4.5 4.9 5.6 6.7
1 0.9 1.2 1.6 2.2 3.3
1. Guaranteed by characterization results.
2. Refer to Table 41 and RM0383 for the possible PLL VCO setting
3. Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
4. When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.
5. Guaranteed by test in production.

<!-- *P74*/149 -->
[P74]: #P74 
<a id="P74"></a>





[Table 26]: #Table%2026
<a id="Table 26"></a>

**Table 26**. Typical and maximum current consumption in Sleep mode - V DD = 3.6 V

Symbol Parameter Conditions
f HCLK
(MHz)
Typ
Max (1)
Unit
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD
Supply current
in Sleep mode
External clock, PLL
ON (2) ,
all peripherals
enabled (3)(4)
100 12.2 13.2 13.4 14.1 15.3
mA
84 9.8 10.6 10.9 11.6 12.8
64 6.9 7.4 7.7 8.3 9.5
50 5.4 5.9 6.2 6.8 8.0
20 2.8 3.2 3.5 4.1 5.3
HSI, PLL OFF (2) , all
peripherals enabled (3)
16 1.3 1.7 2.2 2.8 4.0
1 0.4 0.5 0.9 1.6 2.8
External clock, PLL ON (2)
all peripherals disabled (3)
100 3.0 3.6 3.9 4.5 5.7
84 2.5 3.0 3.2 3.9 5.1
64 1.9 2.2 2.5 3.0 4.2
50 1.6 1.9 2.1 2.7 3.9
20 1.1 1.4 1.7 2.3 3.5
HSI, PLL OFF (2) , all
peripherals disabled (3)
16 0.4 0.5 0.9 1.6 2.8
1 0.3 0.4 0.8 1.5 2.7
1. Guaranteed by characterization results.
2. Refer to Table 41 and RM0383 for the possible PLL VCO setting.
3. Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
4. When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.

[Table 27]: #Table%2027
<a id="Table 27"></a>

**Table 27**. Typical and maximum current consumptions in Stop mode - V DD = 1.7 V

Symbol Conditions Parameter
Typ (1)
Max (1)
Unit
T A =
25 °C
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD_STOP
Flash in Stop mode, all
oscillators OFF, no
independent watchdog
Main regulator usage 112 142 (2) 400 710 1200 (2)
µA
Low power regulator usage 42.6 67 (2) 300 580 1044 (2)
Flash in Deep power
down mode, all
oscillators OFF, no
independent watchdog
Main regulator usage 75 99 (2) 310 580 993 (2)
Low power regulator usage 13.6 37 (2) 265 550 1007 (2)
Low power low voltage regulator
usage
9 28 (2) 230 500 910 (2)
1. Guaranteed by characterization results.
2. Guaranteed by test in production.

<!-- *P75*/149 -->
[P75]: #P75 
<a id="P75"></a>






[Table 28]: #Table%2028
<a id="Table 28"></a>

**Table 28**. Typical and maximum current consumption in Stop mode - V DD =3.6 V

Symbol Conditions Parameter
Typ
Max (1)
Unit
T A =
25 °C
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD_STOP
Flash in Stop mode, all
oscillators OFF, no
independent watchdog
Main regulator usage 113.7 145 (2) 410 720 1217 (2)
µA
Low power regulator usage 43.1 68 (2) 310 600 1073 (2)
Flash in Deep power
down mode, all
oscillators OFF, no
independent watchdog
Main regulator usage 76.2 105 (2) 320 600 1019 (2)
Low power regulator usage 14 38 (2) 275 560 1025 (2)
Low power low voltage regulator
usage
10 30 (2) 235 510 928 (2)
1. Guaranteed by characterization results.
2. Guaranteed by test in production.

[Table 29]: #Table%2029
<a id="Table 29"></a>

**Table 29**. Typical and maximum current consumption in Standby mode - V DD = 1.7 V

Symbol Parameter Conditions
Typ (1) Max (2)
Unit
T A =
25 °C
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD_STBY
Supply current
in Standby mode
Low-speed oscillator (LSE) and RTC ON 2.4 4 12 25 50
µA
RTC and LSE OFF 1.8 3 (3) 11 24 49 (3)
1. When the PDR is OFF (internal reset is OFF), the typical current consumption is reduced by 1.2 µA.
2. Guaranteed by characterization results.
3. Guaranteed by test in production.

[Table 30]: #Table%2030
<a id="Table 30"></a>

**Table 30**. Typical and maximum current consumption in Standby mode - V DD = 3.6 V

Symbol Parameter Conditions
Typ (1) Max (2)
Unit
T A =
25 °C
T A =
25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
I DD_STBY
Supply current
in Standby
mode
Low-speed oscillator (LSE) and RTC ON 2.8 5 14 29 59
µA
RTC and LSE OFF 2.1 4 (3) 13.5 28 58 (3)
1. When the PDR is OFF (internal reset is OFF), the typical current consumption is reduced by 1.2 µA.
2. Guaranteed by characterization results.
3. Guaranteed by test in production.

<!-- *P76*/149 -->
[P76]: #P76 
<a id="P76"></a>




[Figure 20]: #Figure%2020
<a id="Figure 20"></a>

**Figure 20**. Typical V BAT current consumption (LSE in low-drive mode and RTC ON)


[Table 31]: #Table%2031
<a id="Table 31"></a>

**Table 31**. Typical and maximum current consumptions in V BAT mode

Symbol Parameter Conditions (1)
Typ Max (2)
Unit
T A = 25 °C
T A =
85 °C
T A =
105 °C
T A =
125 °C
V BAT =
1.7 V
V BAT =
2.4 V
V BAT =
3.3 V
V BAT = 3.6 V
I DD_VBAT
Backup
domain
supply
current
Low-speed oscillator (LSE in low-
drive mode) and RTC ON
0.7 0.8 1.0 3 5 6.8
µA Low-speed oscillator (LSE in high-
drive mode) and RTC ON
1.5 1.6 1.9 3.8 5.8 8.6
RTC and LSE OFF 0.1 0.1 0.1 2 4 5.8
1. Crystal used: Abracon ABS07-120-32.768 kHz-T with a C L of 6 pF for typical values.
2. Guaranteed by characterization results.
?????????
?
???
?
???
?
???
?
??? ???? ???? ???? ?????
?????????????
???????????
?????
????
????
??
????
????
??
????
????

<!-- *P77*/149 -->
[P77]: #P77 
<a id="P77"></a>


I/O system current consumption
The current consumption of the I/O system has two components: static and dynamic.
I/O static current consumption
All the I/Os used as inputs with pull-up generate current consumption when the pin is
externally held low. The value of this current consumption can be simply computed by using
the pull-up/pull-down resistors values given in Table 53: I/O static characteristics.
For the output pins, any external pull-down or external load must also be considered to
estimate the current consumption.
Additional I/O current consumption is due to I/Os configured as inputs if an intermediate
voltage level is externally applied. This current consumption is caused by the input Schmitt
trigger circuits used to discriminate the input value. Unless this specific configuration is
required by the application, this supply current consumption can be avoided by configuring
these I/Os in analog mode. This is notably the case of ADC input pins which should be
configured as analog inputs.
Caution: Any floating input pin can also settle to an intermediate voltage level or switch inadvertently,
as a result of external electromagnetic noise. To avoid current consumption related to
floating pins, they must either be configured in analog mode, or forced internally to a definite
digital value. This can be done either by using pull-up/down resistors or by configuring the
pins in output mode.
I/O dynamic current consumption
In addition to the internal peripheral current consumption (see Table 33: Peripheral current
consumption), the I/Os used by an application also contribute to the current consumption.
When an I/O pin switches, it uses the current from the MCU supply voltage to supply the I/O
pin circuitry and to charge/discharge the capacitive load (internal or external) connected to
the pin:
where
I SW is the current sunk by a switching I/O to charge/discharge the capacitive load
V DD is the MCU supply voltage
f SW is the I/O switching frequency
C is the total capacitance seen by the I/O pin: C = C INT + C EXT
The test pin is configured in push-pull output mode and is toggled by software at a fixed
frequency.
I SW V DD f SW C × × =

<!-- *P78*/149 -->
[P78]: #P78 
<a id="P78"></a>




[Table 32]: #Table%2032
<a id="Table 32"></a>

**Table 32**. Switching output I/O current consumption

Symbol Parameter Conditions (1)
1. CS is the PCB board capacitance including the pad pin. CS = 7 pF (estimated value).
I/O toggling
frequency (f SW )
Typ Unit
IDDIO
I/O switching
current
V DD = 3.3 V
C = C INT
2 MHz 0.05
mA
8 MHz 0.15
25 MHz 0.45
50 MHz 0.85
60 MHz 1.00
84 MHz 1.40
90 MHz 1.67
V DD = 3.3 V
C EXT = 0 pF
C = C INT + C EXT + C S
2 MHz 0.10
8 MHz 0.35
25 MHz 1.05
50 MHz 2.20
60 MHz 2.40
84 MHz 3.55
90 MHz 4.23
V DD = 3.3 V
C EXT =10 pF
C = C INT + C EXT + C S
2 MHz 0.20
8 MHz 0.65
25 MHz 1.85
50 MHz 2.45
60 MHz 4.70
84 MHz 8.80
90 MHz 10.47
V DD = 3.3 V
C EXT = 22 pF
C = C INT + C EXT + C S
2 MHz 0.25
8 MHz 1.00
25 MHz 3.45
50 MHz 7.15
60 MHz 11.55
V DD = 3.3 V
C EXT = 33 pF
C = C INT + C EXT + C S
2 MHz 0.32
8 MHz 1.27
25 MHz 3.88
50 MHz 12.34

<!-- *P79*/149 -->
[P79]: #P79 
<a id="P79"></a>


On-chip peripheral current consumption
The MCU is placed under the following conditions:
• At startup, all I/O pins are in analog input configuration.
• All peripherals are disabled unless otherwise mentioned.
• The ART accelerator is ON.
• Voltage Scale 2 mode selected, internal digital voltage V12 = 1.26 V.
• HCLK is the system clock at 84 MHz. f PCLK1 = f HCLK /2, and f PCLK2 = f HCLK .
The given value is calculated by measuring the difference of current consumption
– with all peripherals clocked off
– with only one peripheral clocked on
• Ambient operating temperature is 25 °C and V DD =3.3 V.


[Table 33]: #Table%2033
<a id="Table 33"></a>

**Table 33**. Peripheral current consumption

Peripheral I DD (Typ) Unit
AHB1
(up to 100 MHz)
GPIOA 1.55
µA/MHz
GPIOB 1.55
GPIOC 1.55
GPIOD 1.55
GPIOE 1.55
GPIOH 1.55
CRC 0.36
DMA1 (1) 14.96
DMA1 (2) 1.54N+2.66
DMA2 (1) 14.96
DMA2 (2) 1.54N+2.66
APB1
(up to 50 MHz)
TIM2 11.19
µA/MHz
TIM3 8.57
TIM4 8.33
TIM5 11.19
PWR 0.71
USART2 3.33
I2C1/2/3 3.10
SPI2 (3) 2.62
SPI3 (3) 2.86
I2S2 1.90
I2S3 1.67
WWDG 0.71

<!-- *P80*/149 -->
[P80]: #P80 
<a id="P80"></a>

APB2

(up to 100 MHz)
TIM1 5.71
µA/MHz
TIM9 2.86
TIM10 1.79
TIM11 2.02
OTG_FS 23.93
ADC1 (4) 2.98
SPI1 1.19
USART1 3.10
USART6 2.86
SDIO 5.95
SPI4 1.31
SYSCFG 0.71
1. Valid if all the DMA streams are activated (please refer to the reference manual RM0383).
2. For N DMA streams activated (up to 8 activated streams, refer to the reference manual RM0383).
3. I2SMOD bit set in SPI_I2SCFGR register, and then the I2SE bit set to enable I2S peripheral.
4. When the ADC is ON (ADON bit set in the ADC_CR2 register), add an additional power consumption of 1.6
mA for the analog part.
Table 33. Peripheral current consumption (continued)
Peripheral I DD (Typ) Unit

<!-- *P81*/149 -->
[P81]: #P81 
<a id="P81"></a>



//6.3.7 Wakeup time from low-power modes
----------------------------------------

The wakeup times given in Table 34 are measured starting from the wakeup event trigger up
to the first instruction executed by the CPU:
• For Stop or Sleep modes: the wakeup event is WFE.
• WKUP (PA0) pin is used to wakeup from Standby, Stop and Sleep modes.

[Figure 21]: #Figure%2021
<a id="Figure 21"></a>

**Figure 21**. Low-power mode wakeup

All timings are derived from tests performed under ambient temperature and V DD =3.3 V.
??????????
???????
??????????? ???????????????
???????????
???????????????????????
??????????????
??????????
???????
??????????? ??????????????????????
???????????
???????????????????????
????????????????
?????????????????????????????
??????????
???????
??????????? ???????????????
???????????
??????????????????
???????????????????????????
??????????
???????
???????????
???????????
??????????????????
?????????????????????????????
?????????????????????????????
??????????
???????
???????????
???????????
????????????????????????
???????????
??????????????????????
????????????????????????
?????????
??????????????????????
?????????????????????????????
?????????????????????????????
??????????????????????
????????????????????
??????????????????????
?????????????????????????????
?????????????????????????????
?????????
???
?????????????????????????????
?????????
??

<!-- *P82*/149 -->
[P82]: #P82 
<a id="P82"></a>




//6.3.8 External clock source characteristics
---------------------------------------------

High-speed external user clock generated from an external source
In bypass mode the HSE oscillator is switched off and the input pin is a standard I/O. The
external clock signal has to respect the Table 53. However, the recommended clock input
waveform is shown in Figure 22.
The characteristics given in Table 35 result from tests performed using an high-speed
external clock source, and under ambient temperature and supply voltage conditions
summarized in Table 14.


[Table 34]: #Table%2034
<a id="Table 34"></a>

**Table 34**. Low-power mode wakeup timings (1)

Symbol Parameter
Min (1) Typ (1) Max (1)
Unit
t WUSLEEP (2) Wakeup from Sleep mode - 4 6
CPU
clock
cycle
t WUSTOP (2)
Wakeup from Stop mode, usage of main regulator - 13.5 14.5
µs
Wakeup from Stop mode, usage of main regulator, Flash
memory in Deep power down mode
- 105 111
Wakeup from Stop mode, regulator in low power mode - 21 33
Wakeup from Stop mode, regulator in low power mode,
Flash memory in Deep power down mode
- 113 130
t WUSTDBY (2)(3) Wakeup from Standby mode - 314 407 µs
t WUFLASH
Wakeup of Flash from Flash_Stop mode - - 8
µs
Wakeup of Flash from Flash Deep power down mode - - 100
1. Guaranteed by characterization results.
2. The wakeup times are measured from the wakeup event to the point in which the application code reads the first instruction.
3. t WUSTDBY maximum value is given at –40 °C.

[Table 35]: #Table%2035
<a id="Table 35"></a>

**Table 35**. High-speed external user clock characteristics

Symbol Parameter Conditions Min Typ Max Unit
f HSE_ext External user clock source frequency (1)
-
1 - 50 MHz
V HSEH OSC_IN input pin high level voltage 0.7V DD - V DD
V
V HSEL OSC_IN input pin low level voltage V SS - 0.3V DD
t w(HSEH)
t w(HSEL)
OSC_IN high or low time (1) 5 - -
ns
t r(HSE)
t f(HSE)
OSC_IN rise or fall time (1) - - 10
C in(HSE) OSC_IN input capacitance (1) - - 5 - pF
DuCy (HSE) Duty cycle - 45 - 55 %
I L OSC_IN Input leakage current V SS ≤ V IN ≤ V DD - - ±1 µA
1. Guaranteed by design.

<!-- *P83*/149 -->
[P83]: #P83 
<a id="P83"></a>



[Figure 22]: #Figure%2022
<a id="Figure 22"></a>

**Figure 22**. High-speed external clock source AC timing diagram

Low-speed external user clock generated from an external source
In bypass mode the LSE oscillator is switched off and the input pin is a standard I/O. The
external clock signal has to respect the Table 53. However, the recommended clock input
waveform is shown in Figure 23.
The characteristics given in Table 36 result from tests performed using an low-speed
external clock source, and under ambient temperature and supply voltage conditions
summarized in Table 14.

??????????
? ????
? ??????
???
???
? ???
?
? ??????
? ????
? ???????
? ???????

[Table 36]: #Table%2036
<a id="Table 36"></a>

**Table 36**. Low-speed external user clock characteristics

Symbol Parameter Conditions Min Typ Max Unit
f LSE_ext
User External clock source
frequency (1)
-
- 32.768 1000 kHz
V LSEH
OSC32_IN input pin high level
voltage
0.7V DD - V DD
V
V LSEL OSC32_IN input pin low level voltage V SS - 0.3V DD
t w(LSEH)
t w(LSEL)
OSC32_IN high or low time (1) 450 - -
ns
t r(LSE)
t f(LSE)
OSC32_IN rise or fall time (1) - - 50
C in(LSE) OSC32_IN input capacitance (1) - - 5 - pF
DuCy (LSE) Duty cycle - 30 - 70 %
I L OSC32_IN Input leakage current V SS ≤ V IN ≤ V DD - - ±1 µA
1. Guaranteed by design.

<!-- *P84*/149 -->
[P84]: #P84 
<a id="P84"></a>



[Figure 23]: #Figure%2023
<a id="Figure 23"></a>

**Figure 23**. Low-speed external clock source AC timing diagram

High-speed external clock generated from a crystal/ceramic resonator
The high-speed external (HSE) clock can be supplied with a 4 to 26 MHz crystal/ceramic
resonator oscillator. All the information given in this paragraph are based on
characterization results obtained with typical external components specified in Table 37. In
the application, the resonator and the load capacitors have to be placed as close as
possible to the oscillator pins in order to minimize output distortion and startup stabilization
time. Refer to the crystal resonator manufacturer for more details on the resonator
characteristics (frequency, package, accuracy).

For C L1 and C L2 , it is recommended to use high-quality external ceramic capacitors in the
5 pF to 25 pF range (Typ.), designed for high-frequency applications, and selected to match
the requirements of the crystal or resonator (see Figure 24). C L1 and C L2 are usually the
same size. The crystal manufacturer typically specifies a load capacitance which is the
series combination of C L1 and C L2 . PCB and MCU pin capacitance must be included (10 pF
can be used as a rough estimate of the combined pin and board capacitance) when sizing
C L1 and C L2 .
Note: For information on selecting the crystal, refer to the application note AN2867 “Oscillator
design guide for ST microcontrollers” available from the ST website www.st.com.

[Table 37]: #Table%2037
<a id="Table 37"></a>

**Table 37**. HSE 4-26 MHz oscillator characteristics (1)

1. Guaranteed by design.
Symbol Parameter Conditions Min Typ Max Unit
f OSC_IN Oscillator frequency 4 - 26 MHz
R F Feedback resistor - 200 - kΩ
I DD HSE current consumption
V DD =3.3 V,
ESR= 30 Ω,
C L =5 pF @25 MHz
- 450 -
µA
V DD =3.3 V,
ESR= 30 Ω,
C L =10 pF @25 MHz
- 530 -
G m_crit_max Maximum critical crystal g m Startup - - 1 mA/V
t SU(HSE) (2)
2. t SU(HSE) is the startup time measured from the moment it is enabled (by software) to a stabilized 8 MHz
oscillation is reached. This value is measured for a standard crystal resonator and it can vary significantly
with the crystal manufacturer
Startup time V DD is stabilized - 2 - ms
??????????
? ????
? ??????
???
???
? ???
? ? ??????
? ????
? ???????
? ???????

<!-- *P85*/149 -->
[P85]: #P85 
<a id="P85"></a>



[Figure 24]: #Figure%2024
<a id="Figure 24"></a>

**Figure 24**. Typical application with an 8 MHz crystal

1. R EXT value depends on the crystal characteristics.
Low-speed external clock generated from a crystal/ceramic resonator
The low-speed external (LSE) clock can be supplied with a 32.768 kHz crystal/ceramic
resonator oscillator. All the information given in this paragraph are based on
characterization results obtained with typical external components specified in Table 38. In
the application, the resonator and the load capacitors have to be placed as close as
possible to the oscillator pins in order to minimize output distortion and startup stabilization
time. Refer to the crystal resonator manufacturer for more details on the resonator
characteristics (frequency, package, accuracy).
The LSE high-power mode allows to cover a wider range of possible crystals but with a cost
of higher power consumption.

Note: For information on selecting the crystal, refer to the application note AN2867 “Oscillator
design guide for ST microcontrollers” available from the ST website www.st.com.
For information about the LSE high-power mode, refer to the reference manual RM0383.

[Table 38]: #Table%2038
<a id="Table 38"></a>

**Table 38**. LSE oscillator characteristics (f LSE = 32.768 kHz) (1)

1. Guaranteed by design.
Symbol Parameter Conditions Min Typ Max Unit
R F Feedback resistor - - 18.4 - MΩ
I DD
LSE current
consumption
Low-power mode
(default)
- - 1
µA
High-drive mode - - 3
G m _crit_max
Maximum critical crystal
g m
Startup, low-power mode - - 0.56
µA/V
Startup, high-drive mode - - 1.50
t SU(LSE) (2)
2. t SU(LSE) is the startup time measured from the moment it is enabled (by software) to a stabilized
32.768 kHz oscillation is reached. This value is guaranteed by characterization. It is measured for a
standard crystal resonator and it can vary significantly with the crystal manufacturer.
startup time V DD is stabilized - 2 - s
???????
???????
??????
? ???
? ??
? ?
??????
?????
?????????
??????????????
?????????????????????
?????
??????????
????
? ??? ??? ?
? ??

<!-- *P86*/149 -->
[P86]: #P86 
<a id="P86"></a>



[Figure 25]: #Figure%2025
<a id="Figure 25"></a>

**Figure 25**. Typical application with a 32.768 kHz crystal


//6.3.9 Internal clock source characteristics
---------------------------------------------

The parameters given in Table 39 and Table 40 are derived from tests performed under
ambient temperature and V DD supply voltage conditions summarized in Table 14.
High-speed internal (HSI) RC oscillator

L
???????
?????????
????????
? ???
? ??
? ?
??????
??????????
?????????
??????????????
?????????????????????
?????
??????????
????
? ??

[Table 39]: #Table%2039
<a id="Table 39"></a>

**Table 39**. HSI oscillator characteristics (1)

1. V DD = 3.3 V, T A = - 40 to 125 °C unless otherwise specified.
Symbol Parameter Conditions Min Typ Max Unit
f HSI Frequency - 16 - MHz
ACC HSI
Accuracy of the HSI
oscillator
User-trimmed with the RCC_CR
register (2)
2. Guaranteed by design.
- - 1 %
Factory-
calibrated
T A = - 40 to 125 °C (3)
3. Guaranteed by characterization results.
- 8 - 5.5
T A = - 40 to 105 °C (3) - 8 - 4.5 %
T A = - 10 to 85 °C (3) - 4 - 4 %
T A = 25 °C (4)
4. Factory calibrated non-soldered parts.
- 1 - 1 %
t su(HSI) (2)
HSI oscillator
startup time
- 2.2 4 µs
I DD(HSI) (2)
HSI oscillator
power consumption
- 60 80 µA

<!-- *P87*/149 -->
[P87]: #P87 
<a id="P87"></a>



[Figure 26]: #Figure%2026
<a id="Figure 26"></a>

**Figure 26**. ACC HSI versus temperature

1. Guaranteed by characterization results.
Low-speed internal (LSI) RC oscillator


[Table 40]: #Table%2040
<a id="Table 40"></a>

**Table 40**. LSI oscillator characteristics (1)

1. V DD = 3 V, T A = –40 to 125 °C unless otherwise specified.
Symbol Parameter Min Typ Max Unit
f LSI (2)
2. Guaranteed by characterization results.
Frequency 17 32 47 kHz
t su(LSI) (3)
3. Guaranteed by design.
LSI oscillator startup time - 15 40 µs
I DD(LSI) (3) LSI oscillator power consumption - 0.4 0.6 µA
?????????
?????
?????
?????
?????
?
????
????
????
??? ? ?? ? ? ??? ???
???
???
???????
???????
??? ???

<!-- *P88*/149 -->
[P88]: #P88 
<a id="P88"></a>



[Figure 27]: #Figure%2027
<a id="Figure 27"></a>

**Figure 27**. ACC LSI versus temperature


//6.3.10 PLL characteristics
----------------------------

The parameters given in Table 41 and Table 42 are derived from tests performed under
temperature and V DD supply voltage conditions summarized in Table 14.

?????????
???
???
???
???
?
??
??
??
??
??
??? ??? ??? ??? ?? ? ?? ?? ?? ?? ?? ?? ?? ?? ?? ???
?????????????????????????
????????????????
???
???
???

[Table 41]: #Table%2041
<a id="Table 41"></a>

**Table 41**. Main PLL characteristics

Symbol Parameter Conditions Min Typ Max Unit
f PLL_IN PLL input clock (1) 0.95 (2) 1 2.10 MHz
f PLL_OUT PLL multiplier output clock 24 - 100 MHz
f PLL48_OUT
48 MHz PLL multiplier output
clock
- 48 75 MHz
f VCO_OUT PLL VCO output 100 - 432 MHz
t LOCK PLL lock time
VCO freq = 100 MHz 75 - 200
µs
VCO freq = 432 MHz 100 - 300
Jitter (3)
Cycle-to-cycle jitter
System clock
100 MHz
RMS - 25 -
ps
peak
to
peak
- ±150 -
Period Jitter
RMS - 15 -
peak
to
peak
- ±200 -

<!-- *P89*/149 -->
[P89]: #P89 
<a id="P89"></a>



I DD(PLL) (4) PLL power consumption on VDD
VCO freq = 100 MHz
VCO freq = 432 MHz
0.15
0.45
-
0.40
0.75
mA
I DDA(PLL) (4)
PLL power consumption on
VDDA
VCO freq = 100 MHz
VCO freq = 432 MHz
0.30
0.55
-
0.40
0.85
1. Take care of using the appropriate division factor M to obtain the specified PLL input clock values. The M factor is shared
between PLL and PLLI2S.
2. Guaranteed by design.
3. The use of two PLLs in parallel could degraded the Jitter up to +30%.
4. Guaranteed by characterization results.
Table 41. Main PLL characteristics (continued)
Symbol Parameter Conditions Min Typ Max Unit

[Table 42]: #Table%2042
<a id="Table 42"></a>

**Table 42**. PLLI2S (audio PLL) characteristics

Symbol Parameter Conditions Min Typ Max Unit
f PLLI2S_IN PLLI2S input clock (1) - 0.95 (2) 1 2.10
MHz f PLLI2S_OUT PLLI2S multiplier output clock - - - 216
f VCO_OUT PLLI2S VCO output - 100 - 432
t LOCK PLLI2S lock time
VCO freq = 100 MHz 75 - 200
µs
VCO freq = 432 MHz 100 - 300
Jitter (3)
Master I2S clock jitter
Cycle to cycle at
12.288 MHz on
48 kHz period,
N=432, R=5
RMS - 90 -
peak
to
peak
- ±280 -
ps
Average frequency of
12.288 MHz
N = 432, R = 5
on 1000 samples
- 90 -
WS I2S clock jitter
Cycle to cycle at 48 KHz
on 1000 samples
- 400 -
I DD(PLLI2S) (4)
PLLI2S power consumption on
V DD
VCO freq = 100 MHz
VCO freq = 432 MHz
0.15
0.45
-
0.40
0.75
mA
I DDA(PLLI2S) (4)
PLLI2S power consumption on
V DDA
VCO freq = 100 MHz
VCO freq = 432 MHz
0.30
0.55
-
0.40
0.85
1. Take care of using the appropriate division factor M to have the specified PLL input clock values.
2. Guaranteed by design.
3. Value given with main PLL running.
4. Guaranteed by characterization results.

<!-- *P90*/149 -->
[P90]: #P90 
<a id="P90"></a>



//6.3.11 PLL spread spectrum clock generation (SSCG) characteristics
--------------------------------------------------------------------

The spread spectrum clock generation (SSCG) feature allows to reduce electromagnetic
interferences (see Table 49: EMI characteristics for LQFP100). It is available only on the
main PLL.

Equation 1
The frequency modulation period (MODEPER) is given by the equation below:
f PLL_IN and f Mod must be expressed in Hz.
As an example:
If f PLL_IN = 1 MHz, and f MOD = 1 kHz, the modulation depth (MODEPER) is given by
equation 1:
Equation 2
Equation 2 allows to calculate the increment step (INCSTEP):
f VCO_OUT must be expressed in MHz.
With a modulation depth (md) = ±2 % (4 % peak to peak), and PLLN = 240 (in MHz):
An amplitude quantization error may be generated because the linear modulation profile is
obtained by taking the quantized values (rounded to the nearest integer) of MODPER and
INCSTEP. As a result, the achieved modulation depth is quantized. The percentage
quantized modulation depth is given by the following formula:
As a result:

[Table 43]: #Table%2043
<a id="Table 43"></a>

**Table 43**. SSCG parameter constraints

Symbol Parameter Min Typ Max (1) Unit
f Mod Modulation frequency - - 10 kHz
md Peak modulation depth 0.25 - 2 %
MODEPER * INCSTEP (Modulation period) * (Increment Step) - - 2 15 -1 -
1. Guaranteed by design.
MODEPER round f PLL_IN 4 f Mod × ( ) ⁄ [ ] =
MODEPER round 10 6 4 10 3 × ( ) ⁄ [ ] 250 = =
INCSTEP round 2 15 1 – ( ) md PLLN × × ( ) 100 5 × MODEPER × ( ) ⁄ [ ] =
INCSTEP round 2 15 1 – ( ) 2 240 × × ( ) 100 5 × 250 × ( ) ⁄ [ ] 126md(quantitazed)% = =
md quantized % MODEPER INCSTEP × 100 × 5 × ( ) 2 15 1 – ( ) PLLN × ( ) ⁄ =
md quantized % 250 126 × 100 × 5 × ( ) 2 15 1 – ( ) 240 × ( ) ⁄ 2.002%(peak) = =

<!-- *P91*/149 -->
[P91]: #P91 
<a id="P91"></a>


Figure 28 and Figure 29 show the main PLL output clock waveforms in center spread and
down spread modes, where:
F0 is f PLL_OUT nominal.
T mode is the modulation period.
md is the modulation depth.

[Figure 28]: #Figure%2028
<a id="Figure 28"></a>

**Figure 28**. PLL output clock waveforms in center spread mode

[Figure 29]: #Figure%2029
<a id="Figure 29"></a>

**Figure 29**. PLL output clock waveforms in down spread mode

//6.3.12 Memory characteristics
-------------------------------

Flash memory
The characteristics are given at T A = - 40 to 125 °C unless otherwise specified.
The devices are shipped to customers with the Flash memory erased.

???????????????????
????
??
????? ???????
??
???????
??
???????????????????
????
??
????? ???????
????
????????

[Table 44]: #Table%2044
<a id="Table 44"></a>

**Table 44**. Flash memory characteristics

Symbol Parameter Conditions Min Typ Max Unit
I DD Supply current
Write / Erase 8-bit mode, V DD = 1.7 V - 5 -
mA Write / Erase 16-bit mode, V DD = 2.1 V - 8 -
Write / Erase 32-bit mode, V DD = 3.3 V - 12 -

<!-- *P92*/149 -->
[P92]: #P92 
<a id="P92"></a>





[Table 45]: #Table%2045
<a id="Table 45"></a>

**Table 45**. Flash memory programming

Symbol Parameter Conditions Min (1) Typ Max (1)
1. Guaranteed by characterization results.
Unit
t prog Word programming time
Program/erase parallelism
(PSIZE) = x 8/16/32
- 16 100 (2)
2. The maximum programming time is measured after 100K erase operations.
µs
t ERASE16KB Sector (16 KB) erase time
Program/erase parallelism
(PSIZE) = x 8
- 400 800
ms
Program/erase parallelism
(PSIZE) = x 16
- 300 600
Program/erase parallelism
(PSIZE) = x 32
- 250 500
t ERASE64KB Sector (64 KB) erase time
Program/erase parallelism
(PSIZE) = x 8
- 1200 2400
ms
Program/erase parallelism
(PSIZE) = x 16
- 700 1400
Program/erase parallelism
(PSIZE) = x 32
- 550 1100
t ERASE128KB Sector (128 KB) erase time
Program/erase parallelism
(PSIZE) = x 8
- 2 4
s
Program/erase parallelism
(PSIZE) = x 16
- 1.3 2.6
Program/erase parallelism
(PSIZE) = x 32
- 1 2
t ME Mass erase time
Program/erase parallelism
(PSIZE) = x 8
- 8 16
s
Program/erase parallelism
(PSIZE) = x 16
- 5.5 11
Program/erase parallelism
(PSIZE) = x 32
- 4 8
V prog Programming voltage
32-bit program operation 2.7 - 3.6 V
16-bit program operation 2.1 - 3.6 V
8-bit program operation 1.7 - 3.6 V

[Table 46]: #Table%2046
<a id="Table 46"></a>

**Table 46**. Flash memory programming with V PP voltage

Symbol Parameter Conditions Min (1) Typ Max (1) Unit
t prog Double word programming
T A = 0 to +40 °C
V DD = 3.3 V
V PP = 8.5 V
- 16 100 (2) µs
t ERASE16KB Sector (16 KB) erase time - 230 -
ms t ERASE64KB Sector (64 KB) erase time - 490 -
t ERASE128KB Sector (128 KB) erase time - 875 -
t ME Mass erase time - 3.50 - s

<!-- *P93*/149 -->
[P93]: #P93 
<a id="P93"></a>



[Table 47]: #Table%2047
<a id="Table 47"></a>

**Table 47**. Flash memory endurance and data retention


//6.3.13 EMC characteristics
----------------------------

Susceptibility tests are performed on a sample basis during device characterization.
Functional EMS (electromagnetic susceptibility)
While a simple application is executed on the device (toggling 2 LEDs through I/O ports).
the device is stressed by two electromagnetic events until a failure occurs. The failure is
indicated by the LEDs:
• Electrostatic discharge (ESD) (positive and negative) is applied to all device pins until
a functional disturbance occurs. This test is compliant with the IEC 61000-4-2 standard.
• FTB: A burst of fast transient voltage (positive and negative) is applied to V DD and V SS
through a 100 pF capacitor, until a functional disturbance occurs. This test is compliant
with the IEC 61000-4-4 standard.
A device reset allows normal operations to be resumed.
The test results are given in Table 49. They are based on the EMS levels and classes
defined in application note AN1709.
V prog Programming voltage 2.7 - 3.6 V
V PP V PP voltage range 7 - 9 V
I PP
Minimum current sunk on
the V PP pin
10 - - mA
t VPP (3)
Cumulative time during
which V PP is applied
- - 1 hour
1. Guaranteed by design.
2. The maximum programming time is measured after 100K erase operations.
3. V PP should only be connected during programming/erasing.
Symbol Parameter Conditions
Value
Unit
Min (1)
1. Guaranteed by characterization results.
N END Endurance
T A = - 40 to + 85 °C (temp. range 6)
T A = - 40 to + 105 °C (temp. range 7)
T A = - 40 to + 125 °C (temp. range 3)
10 kcycles
t RET Data retention
1 kcycle (2) at T A = 85 °C
2. Cycling performed over the whole temperature range.
30
Years
1 kcycle (2) at T A = 105 °C 10
1 kcycle (2) at T A = 125 °C 3
10 kcycle (2) at T A = 55 °C 20
Table 46. Flash memory programming with V PP voltage (continued)
Symbol Parameter Conditions Min (1) Typ Max (1) Unit

<!-- *P94*/149 -->
[P94]: #P94 
<a id="P94"></a>



When the application is exposed to a noisy environment, it is recommended to avoid pin
exposition to disturbances. The pins showing a middle range robustness are: PA0, PA1,
PA2, on LQFP100 packages and PDR_ON on WLCSP49.
As a consequence, it is recommended to add a serial resistor (1 kΩ maximum) located as
close as possible to the MCU to the pins exposed to noise (connected to tracks longer than
50 mm on PCB).
Designing hardened software to avoid noise problems
EMC characterization and optimization are performed at component level with a typical
application environment and simplified MCU software. It should be noted that good EMC
performance is highly dependent on the user application and the software in particular.
Therefore it is recommended that the user applies EMC software optimization and
prequalification tests in relation with the EMC level requested for his application.
Software recommendations
The software flowchart must include the management of runaway conditions such as:
• Corrupted program counter
• Unexpected reset
• Critical Data corruption (control registers...)
Prequalification trials
Most of the common failures (unexpected reset and program counter corruption) can be
reproduced by manually forcing a low state on the NRST pin or the Oscillator pins for 1
second.
To complete these trials, ESD stress can be applied directly on the device, over the range of
specification values. When unexpected behavior is detected, the software can be hardened
to prevent unrecoverable errors occurring (see application note AN1015).

[Table 48]: #Table%2048
<a id="Table 48"></a>

**Table 48**. EMS characteristics for LQFP100 package

Symbol Parameter Conditions
Level/
Class
V FESD
Voltage limits to be applied on any I/O pin
to induce a functional disturbance
V DD = 3.3 V, LQFP100, WLCSP49,
T A = +25 °C, f HCLK = 100 MHz,
conforms to IEC 61000-4-2
2B
V EFTB
Fast transient voltage burst limits to be
applied through 100 pF on V DD and V SS
pins to induce a functional disturbance
V DD = 3.3 V, LQFP100, WLCSP49,
T A = +25 °C, f HCLK = 100 MHz,
conforms to IEC 61000-4-4
4A

<!-- *P95*/149 -->
[P95]: #P95 
<a id="P95"></a>


Electromagnetic Interference (EMI)
The electromagnetic field emitted by the device are monitored while a simple application,
executing EEMBC code, is running. This emission test is compliant with SAE IEC61967-2
standard which specifies the test board and the pin loading.


//6.3.14 Absolute maximum ratings (electrical sensitivity)
----------------------------------------------------------

Based on three different tests (ESD, LU) using specific measurement methods, the device is
stressed in order to determine its performance in terms of electrical sensitivity.
Electrostatic discharge (ESD)
Electrostatic discharges (a positive then a negative pulse separated by 1 second) are
applied to the pins of each sample according to each pin combination. The sample size
depends on the number of supply pins in the device (3 parts × (n+1) supply pins). This test
conforms to the JESD22-A114/C101 standard.



[Table 49]: #Table%2049
<a id="Table 49"></a>

**Table 49**. EMI characteristics for LQFP100

Symbol Parameter Conditions
Monitored
frequency band
Max vs.
[f HSE /f CPU ]
Unit
8/84 MHz
S EMI Peak level
V DD = 3.6 V, T A = 25 °C, conforming to
IEC61967-2
0.1 to 30 MHz 19
dBµV 30 to 130 MHz 17
130 MHz to 1 GHz 12
SAE EMI Level 3.5 -

[Table 50]: #Table%2050
<a id="Table 50"></a>

**Table 50**. ESD absolute maximum ratings

Symbol Ratings Conditions Class
Maximum
value (1)
Unit
V ESD(HBM)
Electrostatic discharge
voltage (human body
model)
T A = +25 °C conforming to JESD22-A114 2 2000
V
V ESD(CDM)
Electrostatic discharge
voltage (charge device
model)
T A = +25 °C conforming to
ANSI/ESD STM5.3.1
UFBGA100,
UFQFPN48
4 500
WLCSP49 3 400
LQPF64,
LQFP100
3 250
1. Guaranteed by characterization results.

<!-- *P96*/149 -->
[P96]: #P96 
<a id="P96"></a>

Static latchup

Two complementary static tests are required on six parts to assess the latchup
performance:
• A supply overvoltage is applied to each power supply pin
• A current injection is applied to each input, output and configurable I/O pin
These tests are compliant with EIA/JESD 78A IC latchup standard.


//6.3.15 I/O current injection characteristics
----------------------------------------------

As a general rule, current injection to the I/O pins, due to external voltage below V SS or
above V DD (for standard, 3 V-capable I/O pins) should be avoided during normal product
operation. However, in order to give an indication of the robustness of the microcontroller in
cases when abnormal injection accidentally happens, susceptibility tests are performed on a
sample basis during device characterization.
Functional susceptibility to I/O current injection
While a simple application is executed on the device, the device is stressed by injecting
current into the I/O pins programmed in floating input mode. While current is injected into
the I/O pin, one at a time, the device is checked for functional failures.
The failure is indicated by an out of range parameter: ADC error above a certain limit (>5
LSB TUE), out of conventional limits of induced leakage current on adjacent pins
(out of –5 µA/+0 µA range), or other functional failure (for example reset, oscillator
frequency deviation).
Negative induced leakage current is caused by negative injection and positive induced
leakage current by positive injection.
The test results are given in Table 52.


[Table 51]: #Table%2051
<a id="Table 51"></a>

**Table 51**. Electrical sensitivities

Symbol Parameter Conditions Class
LU Static latch-up class T A = + 125 °C conforming to JESD78A II level A

[Table 52]: #Table%2052
<a id="Table 52"></a>

**Table 52**. I/O current injection susceptibility (1)

Symbol Description
Functional susceptibility
Unit
Negative
injection
Positive
injection
I INJ
Injected current on BOOT0 pin –0 NA
mA
Injected current on NRST pin –0 NA
Injected current on PB3, PB4, PB5, PB6, PB7,
PB8, PB9, PC13, PC14, PC15, PH1, PDR_ON,
PC0, PC1,PC2, PC3, PD1, PD5, PD6, PD7, PE0,
PE2, PE3, PE4, PE5, PE6
–0 NA
Injected current on any other FT pin –5 NA
Injected current on any other pins –5 +5
1. NA = not applicable .

<!-- *P97*/149 -->
[P97]: #P97 
<a id="P97"></a>


Note: It is recommended to add a Schottky diode (pin to ground) to analog pins which may
potentially inject negative currents.

//6.3.16 I/O port characteristics
---------------------------------

General input/output characteristics
Unless otherwise specified, the parameters given in Table 53 are derived from tests
performed under the conditions summarized in Table 14. All I/Os are CMOS and TTL
compliant.


[Table 53]: #Table%2053
<a id="Table 53"></a>

**Table 53**. I/O static characteristics

Symbol Parameter Conditions Min Typ Max Unit
V IL
FT, TC and NRST I/O input low
level voltage
1.7 V ≤ V DD ≤ 3.6 V - - 0.3V DD (1)
V
BOOT0 I/O input low level
voltage
1.75 V ≤ V DD ≤ 3.6 V,
-40 °C ≤ T A ≤ 125 °C
- -
0.1V DD +0.1
(2)
1.7 V ≤ V DD ≤ 3.6 V,
0 °C ≤ T A ≤ 125 °C
- -
V IH
FT, TC and NRST I/O input high
level voltage (5)
1.7 V ≤ V DD ≤ 3.6 V
0.7V DD (1
)
- -
V
BOOT0 I/O input high level
voltage
1.75 V ≤ V DD ≤ 3.6 V,
-40 °C ≤ T A ≤ 125 °C
0.17V DD
+0.7 (2)
- -
1.7 V ≤ V DD ≤ 3.6 V,
0 °C ≤ T A ≤ 125 °C
V HYS
FT, TC and NRST I/O input
hysteresis
1.7 V ≤ V DD ≤ 3.6 V
-
10% V DD (3) - V
BOOT0 I/O input hysteresis
1.75 V ≤ V DD ≤ 3.6 V,
-40 °C ≤ T A ≤ 125 °C
- 100 - mV
1.7 V ≤ V DD ≤ 3.6 V,
0 °C ≤ T A ≤ 125 °C
I lkg
I/O input leakage current (4) V SS ≤ V IN ≤ V DD - - ±1
µA
I/O FT/TC input leakage current
(5)
V IN = 5 V - - 3

<!-- *P98*/149 -->
[P98]: #P98 
<a id="P98"></a>

All I/Os are CMOS and TTL compliant (no software configuration required). Their

characteristics cover more than the strict CMOS-technology or TTL parameters. The
coverage of these requirements for FT and TC I/Os is shown in Figure 30.
R PU
Weak pull-up
equivalent
resistor (6)
All pins
except for
PA10
(OTG_FS_ID)
V IN = V SS 30 40 50
kΩ
PA10
(OTG_FS_ID)
- 7 10 14
R PD
Weak pull-down
equivalent
resistor (7)
All pins
except for
PA10
(OTG_FS_ID)
V IN = V DD 30 40 50
PA10
(OTG_FS_ID)
- 7 10 14
C IO (8) I/O pin capacitance - - 5 - pF
1. Guaranteed by test in production.
2. Guaranteed by design.
3. With a minimum of 200 mV.
4. Leakage could be higher than the maximum value, if negative current is injected on adjacent pins, Refer to Table 52: I/O
current injection susceptibility
5. To sustain a voltage higher than VDD +0.3 V, the internal pull-up/pull-down resistors must be disabled. Leakage could be
higher than the maximum value, if negative current is injected on adjacent pins.Refer to Table 52: I/O current injection
susceptibility
6. Pull-up resistors are designed with a true resistance in series with a switchable PMOS. This PMOS contribution to the
series resistance is minimum (~10% order).
7. Pull-down resistors are designed with a true resistance in series with a switchable NMOS. This NMOS contribution to the
series resistance is minimum (~10% order).
8. Hysteresis voltage between Schmitt trigger switching levels. Guaranteed by characterization results.
Table 53. I/O static characteristics (continued)
Symbol Parameter Conditions Min Typ Max Unit

<!-- *P99*/149 -->
[P99]: #P99 
<a id="P99"></a>



[Figure 30]: #Figure%2030
<a id="Figure 30"></a>

**Figure 30**. FT/TC I/O input characteristics

Output driving current
The GPIOs (general purpose input/outputs) can sink or source up to ±8 mA, and sink or
source up to ±20 mA (with a relaxed V OL /V OH ) except PC13, PC14 and PC15 which can
sink or source up to ±3mA. When using the PC13 to PC15 GPIOs in output mode, the speed
should not exceed 2 MHz with a maximum load of 30 pF.
In the user application, the number of I/O pins which can drive current must be limited to
respect the absolute maximum rating specified in Section 6.2. In particular:
• The sum of the currents sourced by all the I/Os on V DD, plus the maximum Run
consumption of the MCU sourced on V DD, cannot exceed the absolute maximum rating
ΣI VDD (see Table 12).
• The sum of the currents sunk by all the I/Os on V SS plus the maximum Run
consumption of the MCU sunk on V SS cannot exceed the absolute maximum rating
ΣI VSS (see Table 12).
?????????
????
?????
????
??? ??? ??? ??? ??? ???
???
????
???
???????
???????????
????????????????????????????????????????????????????????
????????????????????????????????????????????????????????
?????????????????????????????????????????????????
????????????????
???????????
???????????????????????
??????
????
????
?????????
??????????
????
???
????????????????????????????????????????????????

<!-- *P100*/149 -->
[P100]: #P100 
<a id="P100"></a>

Output voltage levels

Unless otherwise specified, the parameters given in Table 54 are derived from tests
performed under ambient temperature and V DD supply voltage conditions summarized in
Table 14. All I/Os are CMOS and TTL compliant.


[Table 54]: #Table%2054
<a id="Table 54"></a>

**Table 54**. Output voltage characteristics

Symbol Parameter Conditions Min Max Unit
V OL (1)
1. The I IO current sunk by the device must always respect the absolute maximum rating specified in Table 12.
and the sum of I IO (I/O ports and control pins) must not exceed I VSS .
Output low level voltage for an I/O pin CMOS port (2)
I IO = +8 mA
2.7 V ≤ V DD ≤ 3.6 V
2. TTL and CMOS outputs are compatible with JEDEC standards JESD36 and JESD52.
- 0.4
V
V OH (3)
3. The I IO current sourced by the device must always respect the absolute maximum rating specified in
Table 12 and the sum of I IO (I/O ports and control pins) must not exceed I VDD .
Output high level voltage for an I/O pin V DD –0.4 -
V OL (1) Output low level voltage for an I/O pin TTL port (2)
I IO =+8 mA
2.7 V ≤ V DD ≤ 3.6 V
- 0.4
V
V OH (3) Output high level voltage for an I/O pin 2.4 -
V OL (1) Output low level voltage for an I/O pin
I IO = +20 mA
2.7 V ≤ V DD ≤ 3.6 V
- 1.3 (4)
4. Guaranteed by characterization results.
V
V OH (3) Output high level voltage for an I/O pin V DD –1.3 (4) -
V OL (1) Output low level voltage for an I/O pin
I IO = +6 mA
1.8 V ≤ V DD ≤ 3.6 V
- 0.4 (4)
V
V OH (3) Output high level voltage for an I/O pin V DD –0.4 (4) -
V OL (1) Output low level voltage for an I/O pin
I IO = +4 mA
1.7 V ≤ V DD ≤ 3.6 V
- 0.4 (5)
5. Guaranteed by design.
V
V OH (3) Output high level voltage for an I/O pin V DD –0.4 (5) -

<!-- *P101*/149 -->
[P101]: #P101 
<a id="P101"></a>


Input/output AC characteristics
The definition and values of input/output AC characteristics are given in Figure 31 and
Table 55, respectively.
Unless otherwise specified, the parameters given in Table 55 are derived from tests
performed under the ambient temperature and V DD supply voltage conditions summarized
in Table 14.


[Table 55]: #Table%2055
<a id="Table 55"></a>

**Table 55**. I/O AC characteristics (1)(2)

OSPEEDRy
[1:0] bit
value (1)
Symbol Parameter Conditions Min Typ Max Unit
00
f max(IO)out Maximum frequency (3)
C L = 50 pF, V DD ≥ 2.70 V - - 4
MHz
C L = 50 pF, V DD ≥ 1.7 V - - 2
C L = 10 pF, V DD ≥ 2.70 V - - 8
C L = 10 pF, V DD ≥ 1.7 V - - 4
t f(IO)out /
t r(IO)out
Output high to low level fall
time and output low to high
level rise time
C L = 50 pF, V DD = 1.7 V to
3.6 V
- - 100 ns
01
f max(IO)out Maximum frequency (3)
C L = 50 pF, V DD ≥ 2.70 V - - 25
MHz
C L = 50 pF, V DD ≥ 1.7 V - - 12.5
C L = 10 pF, V DD ≥ 2.70 V - - 50
C L = 10 pF, V DD ≥ 1.7 V - - 20
t f(IO)out /
t r(IO)out
Output high to low level fall
time and output low to high
level rise time
C L = 50 pF, V DD ≥2.7 V - - 10
ns
C L = 50 pF, V DD ≥ 1.7 V - - 20
C L = 10 pF, V DD ≥ 2.70 V - - 6
C L = 10 pF, V DD ≥ 1.7 V - - 10
10
f max(IO)out Maximum frequency (3)
C L = 40 pF, V DD ≥ 2.70 V - - 50 (4)
MHz
C L = 40 pF, V DD ≥ 1.7 V - - 25
C L = 10 pF, V DD ≥ 2.70 V - - 100 (4)
C L = 10 pF, V DD ≥ 1.7 V - - 50 (4)
t f(IO)out /
t r(IO)out
Output high to low level fall
time and output low to high
level rise time
C L = 40 pF, V DD ≥ 2.70 V - - 6
ns
C L = 40 pF, V DD ≥ 1.7 V - - 10
C L = 10 pF, V DD ≥ 2.70 V - - 4
C L = 10 pF, V DD ≥ 1.7 V - - 6

<!-- *P102*/149 -->
[P102]: #P102 
<a id="P102"></a>



[Figure 31]: #Figure%2031
<a id="Figure 31"></a>

**Figure 31**. I/O AC characteristics definition

11
F max(IO)out Maximum frequency (3)
C L = 30 pF, V DD ≥ 2.70 V - - 100 (4)
MHz C L = 30 pF, V DD ≥ 1.7 V - - 50 (4)
t f(IO)out /
t r(IO)out
Output high to low level fall
time and output low to high
level rise time
C L = 30 pF, V DD ≥ 2.70 V - - 4
ns
C L = 30 pF, V DD ≥ 1.7 V - - 6
C L = 10 pF, V DD ≥ 2.70 V - - 2.5
C L = 10 pF, V DD ≥ 1.7 V - - 4
- t EXTIpw
Pulse width of external signals
detected by the EXTI
controller
10 - - ns
1. Guaranteed by characterization results.
2. The I/O speed is configured using the OSPEEDRy[1:0] bits. Refer to the STM32F4xx reference manual for a description of
the GPIOx_SPEEDR GPIO port output speed register.
3. The maximum frequency is defined in Figure 31.
4. For maximum frequencies above 50 MHz and V DD > 2.4 V, the compensation cell should be used.
Table 55. I/O AC characteristics (1)(2) (continued)
OSPEEDRy
[1:0] bit
value (1)
Symbol Parameter Conditions Min Typ Max Unit
????????
???
???
???
? ????????
??????
????????
?????
??????????????????????????????????? ?? ??? ? ?????????????????????????????????????????????
???????????????? ? ???????????????????????????????????????????????????
?
???
???
???
?
? ????????

<!-- *P103*/149 -->
[P103]: #P103 
<a id="P103"></a>



//6.3.17 NRST pin characteristics
---------------------------------

The NRST pin input driver uses CMOS technology. It is connected to a permanent pull-up
resistor, R PU (see Table 53).
Unless otherwise specified, the parameters given in Table 56 are derived from tests
performed under the ambient temperature and V DD supply voltage conditions summarized
in Table 14. Refer to Table 53: I/O static characteristics for the values of VIH and VIL for
NRST pin.


[Figure 32]: #Figure%2032
<a id="Figure 32"></a>

**Figure 32**. Recommended NRST pin protection

1. The reset network protects the device against parasitic resets.
2. The user must ensure that the level on the NRST pin can go below the V IL(NRST) max level specified in
Table 56. Otherwise the reset is not taken into account by the device.

[Table 56]: #Table%2056
<a id="Table 56"></a>

**Table 56**. NRST pin characteristics

Symbol Parameter Conditions Min Typ Max Unit
R PU
Weak pull-up equivalent
resistor (1)
V IN = V SS 30 40 50 kΩ
V F(NRST) (2) NRST Input filtered pulse - - 100 ns
V NF(NRST) (2) NRST Input not filtered pulse V DD > 2.7 V 300 - - ns
T NRST_OUT Generated reset pulse duration
Internal Reset
source
20 - - µs
1. The pull-up is designed with a true resistance in series with a switchable PMOS. This PMOS contribution to the series
resistance must be minimum (~10% order) .
2. Guaranteed by design.
????????
??????
? ??
???? ???
? ??
??????
??????????????
??????
????????
????????????? ???

<!-- *P104*/149 -->
[P104]: #P104 
<a id="P104"></a>



//6.3.18 TIM timer characteristics
----------------------------------

The parameters given in Table 57 are guaranteed by design.
Refer to Section 6.3.16: I/O port characteristics for details on the input/output alternate
function characteristics (output compare, input capture, external clock, PWM output).


//6.3.19 Communications interfaces
----------------------------------

I2C interface characteristics
The I2C interface meets the requirements of the standard I2C communication protocol with
the following restrictions: the I/O pins SDA and SCL are mapped to are not “true” open-
drain. When configured as open-drain, the PMOS connected between the I/O pin and V DD is
disabled, but is still present.
The I2C characteristics are described in Table 58. Refer also to Section 6.3.16: I/O port
characteristics for more details on the input/output alternate function characteristics (SDA
and SCL).
The I2C bus interface supports standard mode (up to 100 kHz) and fast mode (up to 400
kHz). The I2C bus frequency can be increased up to 1 MHz. For more details about the
complete solution, please contact your local ST sales representative.

[Table 57]: #Table%2057
<a id="Table 57"></a>

**Table 57**. TIMx characteristics (1)(2)

1. TIMx is used as a general term to refer to the TIM1 to TIM11 timers.
2. Guaranteed by design.
Symbol Parameter
Conditions (3)
3. The maximum timer frequency on APB1 is 50 MHz and on APB2 is up to 100 MHz, by setting the TIMPRE
bit in the RCC_DCKCFGR register, if APBx prescaler is 1 or 2 or 4, then TIMxCLK = HCKL, otherwise
TIMxCLK >= 4x PCLKx.
Min Max Unit
t res(TIM) Timer resolution time
AHB/APBx prescaler=1
or 2 or 4, f TIMxCLK =
100 MHz
1 - t TIMxCLK
11.9 - ns
AHB/APBx prescaler>4,
f TIMxCLK = 100 MHz
1 - t TIMxCLK
11.9 - ns
f EXT
Timer external clock
frequency on CH1 to CH4
f TIMxCLK = 100 MHz
0 f TIMxCLK /2 MHz
0 50 MHz
Res TIM Timer resolution - 16/32 bit
t COUNTER
16-bit counter clock
period when internal clock
is selected
f TIMxCLK = 100 MHz 0.0119 780 µs
t MAX_COUNT
Maximum possible count
with 32-bit counter
-
65536 ×
65536
t TIMxCLK
f TIMxCLK = 100 MHz - 51.1 S

<!-- *P105*/149 -->
[P105]: #P105 
<a id="P105"></a>




[Table 58]: #Table%2058
<a id="Table 58"></a>

**Table 58**. I2C characteristics

Symbol Parameter
Standard mode
I2C (1)(2)
1. Guaranteed by design.
Fast mode I2C (1)(2)
2. f PCLK1 must be at least 2 MHz to achieve standard mode I2C frequencies. It must be at least 4 MHz to
achieve fast mode I2C frequencies, and a multiple of 10 MHz to reach the 400 kHz maximum I2C fast mode
clock.
Unit
Min Max Min Max
t w(SCLL) SCL clock low time 4.7 - 1.3 -
µs
t w(SCLH) SCL clock high time 4.0 - 0.6 -
t su(SDA) SDA setup time 250 - 100 -
ns
t h(SDA) SDA data hold time 0 3450 (3)
3. The device must internally provide a hold time of at least 300 ns for the SDA signal in order to bridge the
undefined region of the falling edge of SCL.
0 900 (4)
4. The maximum data hold time has only to be met if the interface does not stretch the low period of SCL
signal.
t r(SDA)
t r(SCL)
SDA and SCL rise time - 1000 - 300
t f(SDA)
t f(SCL)
SDA and SCL fall time - 300 - 300
t h(STA) Start condition hold time 4.0 - 0.6 -
µs
t su(STA)
Repeated Start condition
setup time
4.7 - 0.6 -
t su(STO) Stop condition setup time 4.0 - 0.6 - µs
t w(STO:STA)
Stop to Start condition time
(bus free)
4.7 - 1.3 - µs
t SP
Pulse width of the spikes
that are suppressed by the
analog filter for standard fast
mode
0 50 (5)
5. The minimum width of the spikes filtered by the analog filter is above t SP (max)
0 50 (5) ns
C b
Capacitive load for each bus
line
- 400 - 400 pF

<!-- *P106*/149 -->
[P106]: #P106 
<a id="P106"></a>



[Figure 33]: #Figure%2033
<a id="Figure 33"></a>

**Figure 33**. I2C bus AC waveforms and measurement circuit

1. R S = series protection resistor.
2. R P = external pull-up resistor.
3. V DD_I2C is the I2C bus power supply.


[Table 59]: #Table%2059
<a id="Table 59"></a>

**Table 59**. SCL frequency (f PCLK1 = 50 MHz, V DD = V DD_I2C = 3.3 V) (1)(2)

1. R P = External pull-up resistance, f SCL = I2C speed
2. For speeds around 200 kHz, the tolerance on the achieved speed is of ±5%. For other speed ranges, the
tolerance on the achieved speed is ±2%. These variations depend on the accuracy of the external
components used to design the application.
f SCL (kHz)
I2C_CCR value
R P = 4.7 kΩ
400 0x8019
300 0x8021
200 0x8032
100 0x0096
50 0x012C
20 0x02EE
????????
?????
???
? ?
???????
? ??????
?????
???
???
? ?????? ? ??????
???
? ??????
? ???????
? ???????
? ???????
? ??????
? ??????
? ??????
??????????????
? ???????
? ???????
????
? ??????????
? ??????
? ?
? ?
? ?
?????

<!-- *P107*/149 -->
[P107]: #P107 
<a id="P107"></a>


SPI interface characteristics
Unless otherwise specified, the parameters given in Table 60 for the SPI interface are
derived from tests performed under the ambient temperature, f PCLKx frequency and V DD
supply voltage conditions summarized in Table 14, with the following configuration:
• Output speed is set to OSPEEDRy[1:0] = 10
• Capacitive load C = 30 pF
• Measurement points are done at CMOS levels: 0.5V DD
Refer to Section 6.3.16: I/O port characteristics for more details on the input/output alternate
function characteristics (NSS, SCK, MOSI, MISO for SPI).


[Table 60]: #Table%2060
<a id="Table 60"></a>

**Table 60**. SPI dynamic characteristics (1)

Symbol Parameter Conditions Min Typ Max Unit
f SCK
1/t c(SCK)
SPI clock frequency
Master full duplex/receiver mode,
2.7 V < V DD < 3.6 V
SPI1/4/5
- - 42
MHz
Master full duplex/receiver mode,
3.0 V < V DD < 3.6 V
SPI1/4/5
- -
50
Master transmitter mode
1.7 V < V DD < 3.6 V
SPI1/4/5
- -
50
Master mode
1.7 V < V DD < 3.6 V
SPI1/2/3/4/5
- -
25
Slave transmitter/full duplex mode
2.7 V < V DD < 3.6 V
SPI1/4/5
- -
38 (2)
Slave receiver mode,
1.8 V < V DD < 3.6 V
SPI1/4/5
- - 50
Slave mode,
1.8 V < V DD < 3.6 V
SPI1/2/3/4/5
- -
25
Duty(SCK)
Duty cycle of SPI clock
frequency
Slave mode 30 50 70 %
t w(SCKH)
t w(SCKL)
SCK high and low time Master mode, SPI presc = 2 T PCLK −1.5 T PCLK
T PCLK
+1.5
ns
t su(NSS) NSS setup time Slave mode, SPI presc = 2 3T PCLK - - ns
t h(NSS) NSS hold time Slave mode, SPI presc = 2 2T PCLK - - ns
t su(MI)
Data input setup time
Master mode 4 - - ns
t su(SI) Slave mode 2.5 - - ns
t h(MI)
Data input hold time
Master mode 7.5 - - ns
t h(SI) Slave mode 3.5 - - ns

<!-- *P108*/149 -->
[P108]: #P108 
<a id="P108"></a>



[Figure 34]: #Figure%2034
<a id="Figure 34"></a>

**Figure 34**. SPI timing diagram - slave mode and CPHA = 0

t a(SO ) Data output access time Slave mode 7 - 21 ns
t dis(SO) Data output disable time Slave mode 5 - 12 ns
t v(SO) Data output valid time
Slave mode (after enable edge),
2.7 V < V DD < 3.6 V
- 11 13 ns
Slave mode (after enable edge),
1.7 V < V DD < 3.6 V
- 11 18.5 ns
t h(SO) Data output hold time
Slave mode (after enable edge),
1.7 V < V DD < 3.6 V
8 - - ns
t v(MO) Data output valid time Master mode (after enable edge) - 4 6 ns
t h(MO)
Data output hold time
Master mode (after enable edge) 0 - - ns
1. Guaranteed by characterization results.
2. Maximum frequency in Slave transmitter mode is determined by the sum of t v(SO) and t su(MI) which has to fit into SCK low or
high phase preceding the SCK sampling edge. This value can be achieved when the SPI communicates with a master
having t su(MI) = 0 while Duty(SCK) = 50%
Table 60. SPI dynamic characteristics (1) (continued)
Symbol Parameter Conditions Min Typ Max Unit

<!-- *P109*/149 -->
[P109]: #P109 
<a id="P109"></a>



[Figure 35]: #Figure%2035
<a id="Figure 35"></a>

**Figure 35**. SPI timing diagram - slave mode and CPHA = 1 (1)

[Figure 36]: #Figure%2036
<a id="Figure 36"></a>

**Figure 36**. SPI timing diagram - master mode (1)

????????
?????????
? ??????? ? ?????? ? ??????
?????????
??????
??????
??????
??????
? ???????
? ???????
? ?????
? ????? ? ?????
? ??????
? ??????
? ???????
????
??????
????
?????
? ?????? ? ?????
???????
??????
???????? ???????
?????? ????????
????????
??????????
??????
????
??????
????
?????
??????
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
?????? ???????
???????

<!-- *P110*/149 -->
[P110]: #P110 
<a id="P110"></a>

I2S interface characteristics

Unless otherwise specified, the parameters given in Table 61 for the I2S interface are
derived from tests performed under the ambient temperature, f PCLKx frequency and V DD
supply voltage conditions summarized in Table 14, with the following configuration:
• Output speed is set to OSPEEDRy[1:0] = 10
• Capacitive load C = 30 pF
• Measurement points are done at CMOS levels: 0.5V DD
Refer to Section 6.3.16: I/O port characteristics for more details on the input/output alternate
function characteristics (CK, SD, WS).

Note: Refer to the I2S section of RM0383 reference manual for more details on the sampling
frequency (F S ).
f MCK , f CK , and D CK values reflect only the digital peripheral behavior. The values of these
parameters might be slightly impacted by the source clock precision. D CK depends mainly
on the value of ODD bit. The digital contribution leads to a minimum value of
(I2SDIV/(2*I2SDIV+ODD) and a maximum value of (I2SDIV+ODD)/(2*I2SDIV+ODD). F S
maximum value is supported for each mode/condition.

[Table 61]: #Table%2061
<a id="Table 61"></a>

**Table 61**. I2S dynamic characteristics (1)

Symbol Parameter Conditions Min Max Unit
f MCK I2S Main clock output - 256x8K 256xFs (2) MHz
f CK I2S clock frequency
Master data: 32 bits - 64xFs
MHz
Slave data: 32 bits - 64xFs
D CK I2S clock frequency duty cycle Slave receiver 30 70 %
t v(WS) WS valid time Master mode 0 7
ns
t h(WS) WS hold time Master mode 1.5 -
t su(WS) WS setup time Slave mode 1.5 -
t h(WS) WS hold time Slave mode 3 -
t su(SD_MR)
Data input setup time
Master receiver 1 -
t su(SD_SR) Slave receiver 2.5 -
t h(SD_MR)
Data input hold time
Master receiver 7 -
t h(SD_SR) Slave receiver 2.5 -
t v(SD_ST)
Data output valid time
Slave transmitter (after enable edge) - 20
t v(SD_MT) Master transmitter (after enable edge) - 6
t h(SD_ST)
Data output hold time
Slave transmitter (after enable edge) 8 -
t h(SD_MT) Master transmitter (after enable edge) 2 -
1. Guaranteed by characterization results.
2. The maximum value of 256xFs is 50 MHz (APB1 maximum frequency).

<!-- *P111*/149 -->
[P111]: #P111 
<a id="P111"></a>



[Figure 37]: #Figure%2037
<a id="Figure 37"></a>

**Figure 37**. I2S slave timing diagram (Philips protocol) (1)

1. LSB transmit/receive of the previously transmitted byte. No LSB transmit/receive is sent before the first
byte.

[Figure 38]: #Figure%2038
<a id="Figure 38"></a>

**Figure 38**. I2S master timing diagram (Philips protocol) (1)

1. LSB transmit/receive of the previously transmitted byte. No LSB transmit/receive is sent before the first
byte.

<!-- *P112*/149 -->
[P112]: #P112 
<a id="P112"></a>

USB OTG full speed (FS) characteristics

This interface is present in USB OTG FS controller.


Note: When VBUS sensing feature is enabled, PA9 should be left at their default state (floating
input), not as alternate function. A typical 200 µA current consumption of the embedded
sensing block (current to voltage conversion to determine the different sessions) can be
observed on PA9 when the feature is enabled.

[Table 62]: #Table%2062
<a id="Table 62"></a>

**Table 62**. USB OTG FS startup time

Symbol Parameter Max Unit
t STARTUP (1)
1. Guaranteed by design.
USB OTG FS transceiver startup time 1 µs

[Table 63]: #Table%2063
<a id="Table 63"></a>

**Table 63**. USB OTG FS DC electrical characteristics

Symbol Parameter Conditions Min. (1)
1. All the voltages are measured from the local ground potential.
Typ. Max. (1) Unit
Input
levels
V DD
USB OTG FS operating
voltage
3.0 (2)
2. The USB OTG FS functionality is ensured down to 2.7 V but not the full USB full speed electrical
characteristics which are degraded in the 2.7-to-3.0 V V DD voltage range.
- 3.6 V
V DI (3)
3. Guaranteed by design.
Differential input sensitivity I(USB_FS_DP/DM) 0.2 - -
V
V CM (3)
Differential common mode
range
Includes V DI range 0.8 - 2.5
V SE (3)
Single ended receiver
threshold
1.3 - 2.0
Output
levels
V OL Static output level low R L of 1.5 k Ω to 3.6 V (4)
4. R L is the load connected on the USB OTG FS drivers.
- - 0.3
V
V OH Static output level high R L of 15 k Ω to V SS (4) 2.8 - 3.6
R PD
PA11, PA12
(USB_FS_DM/DP)
V IN = V DD
17 21 24
kΩ
PA9 (OTG_FS_VBUS) 0.65 1.1 2.0
R PU
PA11, PA12
(USB_FS_DM/DP)
V IN = V SS 1.5 1.8 2.1
PA9 (OTG_FS_VBUS) V IN = V SS 0.25 0.37 0.55

<!-- *P113*/149 -->
[P113]: #P113 
<a id="P113"></a>



[Figure 39]: #Figure%2039
<a id="Figure 39"></a>

**Figure 39**. USB OTG FS timings: definition of data signal rise and fall time



//6.3.20 12-bit ADC characteristics
-----------------------------------

Unless otherwise specified, the parameters given in Table 65 are derived from tests
performed under the ambient temperature, f PCLK2 frequency and V DDA supply voltage
conditions summarized in Table 14.


[Table 64]: #Table%2064
<a id="Table 64"></a>

**Table 64**. USB OTG FS electrical characteristics (1)

1. Guaranteed by design.
Driver characteristics
Symbol Parameter Conditions Min Max Unit
t r Rise time (2)
2. Measured from 10% to 90% of the data signal. For more detailed informations, please refer to USB
Specification - Chapter 7 (version 2.0).
C L = 50 pF 4 20 ns
t f Fall time (2) C L = 50 pF 4 20 ns
t rfm Rise/ fall time matching t r /t f 90 110 %
V CRS Output signal crossover voltage 1.3 2.0 V
????????
??????????
??????
????????????
??????????
? ???
? ??
? ? ? ?

[Table 65]: #Table%2065
<a id="Table 65"></a>

**Table 65**. ADC characteristics

Symbol Parameter Conditions Min Typ Max Unit
V DDA Power supply
V DDA − V REF+ < 1.2 V
1.7 (1) - 3.6 V
V REF+ Positive reference voltage 1.7 (1) - V DDA V
f ADC ADC clock frequency
V DDA = 1.7 (1) to 2.4 V 0.6 15 18 MHz
V DDA = 2.4 to 3.6 V 0.6 30 36 MHz
f TRIG (2) External trigger frequency
f ADC = 30 MHz,
12-bit resolution
- - 1764 kHz
- - 17 1/f ADC
V AIN Conversion voltage range (3)
0 (V SSA or V REF-
tied to ground)
- V REF+ V
R AIN (2) External input impedance
See Equation 1 for
details
- - 50 kΩ
R ADC (2)(4) Sampling switch resistance - - 6 kΩ
C ADC (2)
Internal sample and hold
capacitor
 - 4 7 pF

<!-- *P114*/149 -->
[P114]: #P114 
<a id="P114"></a>

t lat (2)

Injection trigger conversion
latency
f ADC = 30 MHz - - 0.100 µs
- - 3 (5) 1/f ADC
t latr (2)
Regular trigger conversion
latency
f ADC = 30 MHz - - 0.067 µs
- - 2 (5) 1/f ADC
t S (2) Sampling time
f ADC = 30 MHz 0.100 - 16 µs
3 - 480 1/f ADC
t STAB (2) Power-up time - 2 3 µs
t CONV (2)
Total conversion time (including
sampling time)
f ADC = 30 MHz
12-bit resolution
0.50 - 16.40 µs
f ADC = 30 MHz
10-bit resolution
0.43 - 16.34 µs
f ADC = 30 MHz
8-bit resolution
0.37 - 16.27 µs
f ADC = 30 MHz
6-bit resolution
0.30 - 16.20 µs
9 to 492 (t S for sampling +n-bit resolution for successive
approximation)
1/f ADC
f S (2)
Sampling rate
(f ADC = 30 MHz, and
t S = 3 ADC cycles)
12-bit resolution
Single ADC
- - 2 Msps
12-bit resolution
Interleave Dual ADC
mode
- - 3.75 Msps
12-bit resolution
Interleave Triple ADC
mode
- - 6 Msps
I VREF+ (2)
ADC V REF DC current
consumption in conversion
mode
- 300 500 µA
I VDDA (2)
ADC V DDA DC current
consumption in conversion
mode
- 1.6 1.8 mA
1. V DDA minimum value of 1.7 V is possible with the use of an external power supply supervisor (refer to Section 3.15.2:
Internal reset OFF).
2. Guaranteed by characterization results.
3. V REF+ is internally connected to V DDA and V REF- is internally connected to V SSA .
4. R ADC maximum value is given for V DD =1.7 V, and minimum value for V DD =3.3 V.
5. For external triggers, a delay of 1/f PCLK2 must be added to the latency specified in Table 65.
Table 65. ADC characteristics (continued)
Symbol Parameter Conditions Min Typ Max Unit

<!-- *P115*/149 -->
[P115]: #P115 
<a id="P115"></a>


Equation 1: R AIN max formula
The formula above (Equation 1) is used to determine the maximum external impedance
allowed for an error below 1/4 of LSB. N = 12 (from 12-bit resolution) and k is the number of
sampling periods defined in the ADC_SMPR1 register.




[Table 66]: #Table%2066
<a id="Table 66"></a>

**Table 66**. ADC accuracy at f ADC = 18 MHz (1)

1. Better performance could be achieved in restricted V DD , frequency and temperature ranges.
Symbol Parameter Test conditions Typ Max (2)
2. Guaranteed by characterization results.
Unit
ET Total unadjusted error
f ADC =18 MHz
V DDA = 1.7 to 3.6 V
V REF = 1.7 to 3.6 V
V DDA − V REF < 1.2 V
±3 ±4
LSB
EO Offset error ±2 ±3
EG Gain error ±1 ±3
ED Differential linearity error ±1 ±2
EL Integral linearity error ±2 ±3

[Table 67]: #Table%2067
<a id="Table 67"></a>

**Table 67**. ADC accuracy at f ADC = 30 MHz (1)

1. Better performance could be achieved in restricted V DD , frequency and temperature ranges.
Symbol Parameter Test conditions Typ Max (2)
2. Guaranteed by characterization results.
Unit
ET Total unadjusted error
f ADC = 30 MHz,
R AIN < 10 kΩ,
V DDA = 2.4 to 3.6 V,
V REF = 1.7 to 3.6 V,
V DDA − V REF < 1.2 V
±2 ±5
LSB
EO Offset error ±1.5 ±2.5
EG Gain error ±1.5 ±4
ED Differential linearity error ±1 ±2
EL Integral linearity error ±1.5 ±3

[Table 68]: #Table%2068
<a id="Table 68"></a>

**Table 68**. ADC accuracy at f ADC = 36 MHz (1)

1. Better performance could be achieved in restricted V DD , frequency and temperature ranges.
Symbol Parameter Test conditions Typ Max (2)
2. Guaranteed by characterization results.
Unit
ET Total unadjusted error
f ADC =36 MHz,
V DDA = 2.4 to 3.6 V,
V REF = 1.7 to 3.6 V
V DDA − V REF < 1.2 V
±4 ±7
LSB
EO Offset error ±2 ±3
EG Gain error ±3 ±6
ED Differential linearity error ±2 ±3
EL Integral linearity error ±3 ±6
R AIN
k 0.5 – ( )
f ADC C ADC 2 N
2 +
( ) ln × ×
---------------------------------------------------------------- R ADC – =

<!-- *P116*/149 -->
[P116]: #P116 
<a id="P116"></a>





Note: ADC accuracy vs. negative injection current: injecting a negative current on any analog
input pins should be avoided as this significantly reduces the accuracy of the conversion
being performed on another analog input. It is recommended to add a Schottky diode (pin to
ground) to analog pins which may potentially inject negative currents.
Any positive injection current within the limits specified for I INJ(PIN) and ΣI INJ(PIN) in
Section 6.3.16 does not affect the ADC accuracy.

[Table 69]: #Table%2069
<a id="Table 69"></a>

**Table 69**. ADC dynamic accuracy at f ADC = 18 MHz - limited test conditions (1)

Symbol Parameter Test conditions Min Typ Max Unit
ENOB Effective number of bits
f ADC =18 MHz
V DDA = V REF+ = 1.7 V
Input Frequency = 20 KHz
Temperature = 25 °C
10.3 10.4 - bits
SINAD Signal-to-noise and distortion ratio 64 64.2 -
dB SNR Signal-to-noise ratio 64 65 -
THD Total harmonic distortion - -72 -67
1. Guaranteed by characterization results.

[Table 70]: #Table%2070
<a id="Table 70"></a>

**Table 70**. ADC dynamic accuracy at f ADC = 36 MHz - limited test conditions (1)

Symbol Parameter Test conditions Min Typ Max Unit
ENOB Effective number of bits
f ADC = 36 MHz
V DDA = V REF+ = 3.3 V
Input Frequency = 20 KHz
Temperature = 25 °C
10.6 10.8 - bits
SINAD Signal-to noise and distortion ratio 66 67 -
dB SNR Signal-to noise ratio 64 68 -
THD Total harmonic distortion - -72 -70
1. Guaranteed by characterization results.

<!-- *P117*/149 -->
[P117]: #P117 
<a id="P117"></a>



[Figure 40]: #Figure%2040
<a id="Figure 40"></a>

**Figure 40**. ADC accuracy characteristics

1. See also Table 67.
2. Example of an actual transfer curve.
3. Ideal transfer curve.
4. End point correlation line.
5. E T = Total Unadjusted Error: maximum deviation between the actual and the ideal transfer curves.
EO = Offset Error: deviation between the first actual transition and the first ideal one.
EG = Gain Error: deviation between the last ideal transition and the last actual one.
ED = Differential Linearity Error: maximum deviation between actual steps and the ideal one.
EL = Integral Linearity Error: maximum deviation between any actual transition and the end point
correlation line.

[Figure 41]: #Figure%2041
<a id="Figure 41"></a>

**Figure 41**. Typical connection diagram using the ADC

1. Refer to Table 65 for the values of R AIN , R ADC and C ADC .
2. C parasitic represents the capacitance of the PCB (dependent on soldering and PCB layout quality) plus the
pad capacitance (roughly 5 pF). A high C parasitic value downgrades conversion accuracy. To remedy this,
f ADC should be reduced.
????????
? ?
? ?
?? ?? ?????
????
????
????
?
?
?
?
?
?
?
?
? ? ? ??? ? ???? ???? ???? ????
???
???
? ?
? ?
? ?
???
? ??? ? ???
? ????
????
???????????????????????????????????????
? ???
????
?????
????? ?? ?
???????
??????
? ??
????
? ? ?????
?????
? ?
? ??? ???
? ?????????
? ???
?????
? ?
? ??? ???
? ??? ???
??????
?????????
????????????????????
?????????

<!-- *P118*/149 -->
[P118]: #P118 
<a id="P118"></a>

General PCB design guidelines

Power supply decoupling should be performed as shown in Figure 42 or Figure 43,
depending on whether V REF+ is connected to V DDA or not. The 10 nF capacitors should be
ceramic (good quality). They should be placed them as close as possible to the chip.

[Figure 42]: #Figure%2042
<a id="Figure 42"></a>

**Figure 42**. Power supply and reference decoupling (V REF+ not connected to V DDA )

1. V REF+ and V REF- inputs are both available on UFBGA100. V REF+ is also available on LQFP100. When
V REF+ and V REF- are not available, they are internally connected to V DDA and V SSA .
??????
?????????????
?????????????
? ???? ? ???
? ???
? ??? ?? ???? ? ???
????????

<!-- *P119*/149 -->
[P119]: #P119 
<a id="P119"></a>



[Figure 43]: #Figure%2043
<a id="Figure 43"></a>

**Figure 43**. Power supply and reference decoupling (V REF+ connected to V DDA )

1. V REF+ and V REF- inputs are both available on UFBGA100. V REF+ is also available on LQFP100. When
V REF+ and V REF- are not available, they are internally connected to V DDA and V SSA .

//6.3.21 Temperature sensor characteristics
-------------------------------------------



??????
?????????????
????????
? ???? ?? ???
? ???? ?? ???
???
???

[Table 71]: #Table%2071
<a id="Table 71"></a>

**Table 71**. Temperature sensor characteristics

Symbol Parameter Min Typ Max Unit
T L (1) V SENSE linearity with temperature - ±1 ±2 °C
Avg_Slope (1) Average slope - 2.5 - mV/°C
V 25 (1) Voltage at 25 °C - 0.76 - V
t START (2) Startup time - 6 10 µs
T S_temp (2) ADC sampling time when reading the temperature (1 °C accuracy) 10 - - µs
1. Guaranteed by characterization results.
2. Guaranteed by design.

[Table 72]: #Table%2072
<a id="Table 72"></a>

**Table 72**. Temperature sensor calibration values

Symbol Parameter Memory address
TS_CAL1 TS ADC raw data acquired at temperature of 30 °C, V DDA = 3.3 V 0x1FFF 7A2C - 0x1FFF 7A2D
TS_CAL2 TS ADC raw data acquired at temperature of 110 °C, V DDA = 3.3 V 0x1FFF 7A2E - 0x1FFF 7A2F

<!-- *P120*/149 -->
[P120]: #P120 
<a id="P120"></a>



//6.3.22 V BAT monitoring characteristics
-----------------------------------------



//6.3.23 Embedded reference voltage
-----------------------------------

The parameters given in Table 74 are derived from tests performed under ambient
temperature and V DD supply voltage conditions summarized in Table 14.



[Table 73]: #Table%2073
<a id="Table 73"></a>

**Table 73**. V BAT monitoring characteristics

Symbol Parameter Min Typ Max Unit
R Resistor bridge for V BAT - 50 - KΩ
Q Ratio on V BAT measurement - 4 -
Er (1) Error on Q –1 - +1 %
T S_vbat (2)(2)
ADC sampling time when reading the V BAT
1 mV accuracy
5 - - µs
1. Guaranteed by design.
2. Shortest sampling time can be determined in the application by multiple iterations.

[Table 74]: #Table%2074
<a id="Table 74"></a>

**Table 74**. Embedded internal reference voltage

Symbol Parameter Conditions Min
Typ
Max Unit
V REFINT Internal reference voltage - 40 °C < T A < + 125 °C 1.18 1.21 1.24 V
T S_vrefint (1)
ADC sampling time when reading the
internal reference voltage
- 10 - - µs
V RERINT_s (2)
Internal reference voltage spread over the
temperature range
V DD = 3V ± 10mV - 3 5 mV
T Coeff (2) Temperature coefficient - - 30 50 ppm/°C
t START (2) Startup time - - 6 10 µs
1. Shortest sampling time can be determined in the application by multiple iterations.
2. Guaranteed by design.

[Table 75]: #Table%2075
<a id="Table 75"></a>

**Table 75**. Internal reference voltage calibration values

Symbol Parameter Memory address
V REFIN_CAL
Raw data acquired at temperature of
30 °C V DDA = 3.3 V
0x1FFF 7A2A - 0x1FFF 7A2B

<!-- *P121*/149 -->
[P121]: #P121 
<a id="P121"></a>



//6.3.24 SD/SDIO MMC/eMMC card host interface (SDIO) characteristics
--------------------------------------------------------------------

Unless otherwise specified, the parameters given in Table 76 for the SDIO/MMC/eMMC
interface are derived from tests performed under the ambient temperature, f PCLK2 frequency
and V DD supply voltage conditions summarized in Table 14, with the following configuration:
• Output speed is set to OSPEEDRy[1:0] = 10
• Capacitive load C = 30 pF (for eMMC C = 20 pF)
• Measurement points are done at CMOS levels: 0.5V DD
Refer to Section 6.3.16: I/O port characteristics for more details on the input/output
characteristics.

[Figure 44]: #Figure%2044
<a id="Figure 44"></a>

**Figure 44**. SDIO high-speed mode

[Figure 45]: #Figure%2045
<a id="Figure 45"></a>

**Figure 45**. SD default mode

<!-- *P122*/149 -->
[P122]: #P122 
<a id="P122"></a>




[Table 76]: #Table%2076
<a id="Table 76"></a>

**Table 76**. Dynamic characteristics: SD / MMC characteristics (1)(2)

Symbol Parameter Conditions Min Typ Max Unit
f PP
Clock frequency in data transfer
mode
- 0 - 50 MHz
- SDIO_CK/fPCLK2 frequency ratio - - - 8/3 -
t W(CKL) Clock low time fpp = 50 MHz 10.5 11 -
ns
t W(CKH) Clock high time fpp = 50 MHz 8.5 9 -
CMD, D inputs (referenced to CK) in MMC and SD HS mode
t ISU Input setup time HS fpp = 50 MHz 2.5 - -
ns
t IH Input hold time HS
fpp = 50 MHz
-40°C<T A < 125°C
5 - -
fpp = 50 MHz
-40°C<T A <+85°C
2.5 - -
CMD, D outputs (referenced to CK) in MMC and SD HS mode
t OV Output valid time HS fpp = 50 MHz - 3.5 4
ns
t OH Output hold time HS fpp = 50 MHz 2 - -
CMD, D inputs (referenced to CK) in SD default mode
t ISUD Input setup time SD fpp = 25 MHz 3 - -
ns
t IHD Input hold time SD fpp = 25 MHz 4 - -
CMD, D outputs (referenced to CK) in SD default mode
t OVD Output valid default time SD fpp =25 MHz - 5 5.5
ns
t OHD Output hold default time SD fpp =25 MHz 4.5 - -
1. Guaranteed by characterization results.
2. V DD = 2.7 to 3.6 V.

<!-- *P123*/149 -->
[P123]: #P123 
<a id="P123"></a>



//6.3.25 RTC characteristics
----------------------------



[Table 77]: #Table%2077
<a id="Table 77"></a>

**Table 77**. Dynamic characteristics: eMMC characteristics V DD = 1.7 V to 1.9 V (1)(2)

1. Guaranteed by characterization results.
2. C load = 20 pF
Symbol Parameter Conditions Min Typ Max Unit
f PP
Clock frequency in data transfer
mode
- 0 - 50 MHz
- SDIO_CK/fPCLK2 frequency ratio - - - 8/3 -
t W(CKL) Clock low time fpp = 50 MHz 10 10.5 -
ns
t W(CKH) Clock high time fpp = 50 MHz 9 9.5 -
CMD, D inputs (referenced to CK) in eMMC mode
t ISU Input setup time HS fpp = 50 MHz 0 - - ns
t IH Input hold time HS fpp = 50 MHz 6 - -
CMD, D outputs (referenced to CK) in eMMC mode
t OV Output valid time HS fpp = 50 MHz - 3.5 5
ns
t OH Output hold time HS fpp = 50 MHz 2 - -

[Table 78]: #Table%2078
<a id="Table 78"></a>

**Table 78**. RTC characteristics

Symbol Parameter Conditions Min Max
- f PCLK1 /RTCCLK frequency ratio
Any read/write operation
from/to an RTC register
4 -

<!-- *P124*/149 -->
[P124]: #P124 
<a id="P124"></a>



/7 Package information
======================

In order to meet environmental requirements, ST offers these devices in different grades of
ECOPACK ® packages, depending on their level of environmental compliance. ECOPACK ®
specifications, grade definitions and product status are available at: www.st.com.
ECOPACK ® is an ST trademark.

//7.1 WLCSP49 package information
---------------------------------


[Figure 46]: #Figure%2046
<a id="Figure 46"></a>

**Figure 46**. WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level

chip scale package outline
1. Drawing is not to scale.
???????????????
?????????
???????????????
?
?
????????
??????????????
?????????????
??????
??
????
?
?????????
?
??
????????
?
?
?
?
??
?
?
?
?
????????????????
?? ?
??
?????????
???? ?
??????
??????????
??????????
???
???
????
?
?
? ? ?
?
????
?????

<!-- *P125*/149 -->
[P125]: #P125 
<a id="P125"></a>




[Figure 47]: #Figure%2047
<a id="Figure 47"></a>

**Figure 47**. WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level chip scale

recommended footprint

[Table 79]: #Table%2079
<a id="Table 79"></a>

**Table 79**. WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level chip scale

 package mechanical data
Symbol
millimeters inches (1)
1. Values in inches are converted from mm and rounded to 4 decimal digits.
Min Typ Max Min Typ Max
A 0.525 0.555 0.585 0.0207 0.0219 0.0230
A1 - 0.175 - - 0.0069 -
A2 - 0.380 - - 0.0150 -
A3 (2)
2. Back side coating
- 0.025 - - 0.0010 -
b (3)
3. Dimension is measured at the maximum bump diameter parallel to primary datum Z.
0.220 0.250 0.280 0.0087 0.0098 0.0110
D 2.964 2.999 3.034 0.1167 0.1181 0.1194
E 3.150 3.185 3.220 0.1240 0.1254 0.1268
e - 0.400 - - 0.0157 -
e1 - 2.400 - - 0.0945 -
e2 - 2.400 - - 0.0945 -
F - 0.2995 - - 0.0118 -
G - 0.3925 - - 0.0155 -
aaa - 0.100 - - 0.0039 -
bbb - 0.100 - - 0.0039 -
ccc - 0.100 - - 0.0039 -
ddd - 0.050 - - 0.0020 -
eee - 0.050 - - 0.0020 -
?????????
???
????

<!-- *P126*/149 -->
[P126]: #P126 
<a id="P126"></a>



Device marking for WLCSP49
The following figure gives an example of topside marking orientation versus ball A1 identifier
location.
Other optional marking or inset/upset marks, which depend on supply chain operations, are
not indicated below.

[Figure 48]: #Figure%2048
<a id="Figure 48"></a>

**Figure 48**. WLCSP49 marking (package top view)

1. Parts marked as ES or E or accompanied by an Engineering Sample notification letter are not yet qualified
and therefore not approved for use in production. ST is not responsible for any consequences resulting
from such use. In no event will ST be liable for the customer using any of these engineering samples in
production. ST’s Quality department must be contacted prior to any decision to use these engineering
samples to run a qualification activity.

[Table 80]: #Table%2080
<a id="Table 80"></a>

**Table 80**. WLCSP49 recommended PCB design rules (0.4 mm pitch)

Dimension Recommended values
Pitch 0.4 mm
Dpad
260 µm max. (circular)
220 µm recommended
Dsm 300 µm min. (for 260 µm diameter pad)
PCB pad design Non-solder mask defined via underbump allowed
??????????
???????
? ??
?????????????????????? ???
?
???????
???????????
?????????
?????????????

<!-- *P127*/149 -->
[P127]: #P127 
<a id="P127"></a>



//7.2 UFQFPN48 package information
----------------------------------


[Figure 49]: #Figure%2049
<a id="Figure 49"></a>

**Figure 49**. UFQFPN48 - 48-lead, 7 x 7 mm, 0.5 mm pitch, ultra thin fine pitch

quad flat package outline
1. Drawing is not to scale.
2. All leads/pads should also be soldered to the PCB to improve the lead/pad solder joint life.
3. There is an exposed die pad on the underside of the UFQFPN package. It is recommended to connect and
solder this back-side pad to PCB ground.

??????????
?
????????????????
??????????????????
? ?
?
?
??
??
????????????
????
?
?
??
????????
????????????
?
??
?
???????????
???????????
?
????????
?????
??
?
?
???
????????
?

[Table 81]: #Table%2081
<a id="Table 81"></a>

**Table 81**. UFQFPN48 - 48-lead, 7 x 7 mm, 0.5 mm pitch, ultra thin fine pitch

quad flat package mechanical data
Symbol
millimeters inches (1)
Min. Typ. Max. Min. Typ. Max.
A 0.500 0.550 0.600 0.0197 0.0217 0.0236
A1 0.000 0.020 0.050 0.0000 0.0008 0.0020
D 6.900 7.000 7.100 0.2717 0.2756 0.2795
E 6.900 7.000 7.100 0.2717 0.2756 0.2795
D2 5.500 5.600 5.700 0.2165 0.2205 0.2244

<!-- *P128*/149 -->
[P128]: #P128 
<a id="P128"></a>



[Figure 50]: #Figure%2050
<a id="Figure 50"></a>

**Figure 50**. UFQFPN48 - 48-lead, 7 x 7 mm, 0.5 mm pitch, ultra thin fine pitch

quad flat recommended footprint
1. Dimensions are in millimeters.
E2 5.500 5.600 5.700 0.2165 0.2205 0.2244
L 0.300 0.400 0.500 0.0118 0.0157 0.0197
T - 0.152 - - 0.0060 -
b 0.200 0.250 0.300 0.0079 0.0098 0.0118
e - 0.500 - - 0.0197 -
ddd - - 0.080 - - 0.0031
1. Values in inches are converted from mm and rounded to 4 decimal digits.
Table 81. UFQFPN48 - 48-lead, 7 x 7 mm, 0.5 mm pitch, ultra thin fine pitch
quad flat package mechanical data (continued)
Symbol
millimeters inches (1)
Min. Typ. Max. Min. Typ. Max.
????
????
????
????
????
????
????
????
????
????
????
????
????
??????????
??
?
??
?? ??
??
??
??

<!-- *P129*/149 -->
[P129]: #P129 
<a id="P129"></a>


Device marking for UFQFPN48
The following figure gives an example of topside marking orientation versus pin 1 identifier
location.
Other optional marking or inset/upset marks, which depend on supply chain operations, are
not indicated below.

[Figure 51]: #Figure%2051
<a id="Figure 51"></a>

**Figure 51**. UFQFPN48 marking example (package top view)

1. Parts marked as ES or E or accompanied by an Engineering Sample notification letter are not yet qualified
and therefore not approved for use in production. ST is not responsible for any consequences resulting
from such use. In no event will ST be liable for the customer using any of these engineering samples in
production. ST’s Quality department must be contacted prior to any decision to use these engineering
samples to run a qualification activity.
??????????
??????
???????
? ??
?
??????
???????????
?????????????????????? ???
?????????
?????????????

<!-- *P130*/149 -->
[P130]: #P130 
<a id="P130"></a>



//7.3 LQFP64 package information
--------------------------------


[Figure 52]: #Figure%2052
<a id="Figure 52"></a>

**Figure 52**. LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat package outline

1. Drawing is not to scale.


[Table 82]: #Table%2082
<a id="Table 82"></a>

**Table 82**. LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat

package mechanical data
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

<!-- *P131*/149 -->
[P131]: #P131 
<a id="P131"></a>



[Figure 53]: #Figure%2053
<a id="Figure 53"></a>

**Figure 53**. LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat package

recommended footprint
1. Dimensions are expressed in millimeters.
E3 - 7.500 - - 0.2953 -
e - 0.500 - - 0.0197 -
K 0° 3.5° 7° 0° 3.5° 7°
L 0.450 0.600 0.750 0.0177 0.0236 0.0295
L1 - 1.000 - - 0.0394 -
ccc - - 0.080 - - 0.0031
1. Values in inches are converted from mm and rounded to 4 decimal digits.
Table 82. LQFP64 - 64-pin, 10 x 10 mm low-profile quad flat
package mechanical data (continued)
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

<!-- *P132*/149 -->
[P132]: #P132 
<a id="P132"></a>

Device marking for LQFP64

The following figure gives an example of topside marking orientation versus pin 1 identifier
location.
Other optional marking or inset/upset marks, which depend on supply chain operations, are
not indicated below.

[Figure 54]: #Figure%2054
<a id="Figure 54"></a>

**Figure 54**. LQFP64 marking example (package top view)

1. Parts marked as ES or E or accompanied by an Engineering Sample notification letter are not yet qualified
and therefore not approved for use in production. ST is not responsible for any consequences resulting
from such use. In no event will ST be liable for the customer using any of these engineering samples in
production. ST’s Quality department must be contacted prior to any decision to use these engineering
samples to run a qualification activity.
??????????
?????????????
?????????
????
?????????????????????? ???
?????????
? ??
??????
???????????
?

<!-- *P133*/149 -->
[P133]: #P133 
<a id="P133"></a>



//7.4 LQFP100 package information
---------------------------------


[Figure 55]: #Figure%2055
<a id="Figure 55"></a>

**Figure 55**. LQFP100 - 100-pin, 14 x 14 mm, 100-pin low-profile quad flat

package outline
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

<!-- *P134*/149 -->
[P134]: #P134 
<a id="P134"></a>




[Table 83]: #Table%2083
<a id="Table 83"></a>

**Table 83**. LQPF100 - 100-pin, 14 x 14 mm, 100-pin low-profile quad flat package mechanical data

Symbol
millimeters inches (1)
Min. Typ. Max. Min. Typ. Max.
A - - 1.60 - - 0.063
A1 0.050 - 0.150 0.002 - 0.0059
A2 1.350 1.40 1.450 0.0531 0.0551 0.0571
b 0.170 0.220 0.270 0.0067 0.0087 0.0106
c 0.090 - 0.200 0.0035 - 0.0079
D 15.800 16.000 16.200 0.622 0.6299 0.6378
D1 13.800 14.000 14.200 0.5433 0.5512 0.5591
D3 - 12.000 - - 0.4724 -
E 15.800 16.000 16.200 0.622 0.6299 0.6378
E1 13.800 14.000 14.200 0.5433 0.5512 0.5591
E3 - 12.000 - - 0.4724 -
e - 0.500 - - 0.0197 -
L 0.450 0.600 0.750 0.0177 0.0236 0.0295
L1 - 1.000 - - 0.0394 -
K 0.0° 3.5° 7.0° 0.0° 3.5° 7.0°
ccc 0.080 0.0031
1. Values in inches are converted from mm and rounded to 4 decimal digits.

<!-- *P135*/149 -->
[P135]: #P135 
<a id="P135"></a>



[Figure 56]: #Figure%2056
<a id="Figure 56"></a>

**Figure 56**. LQFP100 - 100-pin, 14 x 14 mm, 100-pin low-profile quad flat

recommended footprint
1. Dimensions are in millimeters.
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

<!-- *P136*/149 -->
[P136]: #P136 
<a id="P136"></a>

Device marking for LQFP100

The following figure gives an example of topside marking orientation versus pin 1 identifier
location.
Other optional marking or inset/upset marks, which depend on supply chain operations, are
not indicated below.

[Figure 57]: #Figure%2057
<a id="Figure 57"></a>

**Figure 57**. LQPF100 marking example (package top view)

1. Parts marked Parts marked as ES or E or accompanied by an Engineering Sample notification letter are
not yet qualified and therefore not approved for use in production. ST is not responsible for any
consequences resulting from such use. In no event will ST be liable for the customer using any of these
engineering samples in production. ST’s Quality department must be contacted prior to any decision to use
these engineering samples to run a qualification activity.
??????????
????????
???????
?????????????
?????????????????????? ???
?????????
??????
???????????
? ??
??????????????????

<!-- *P137*/149 -->
[P137]: #P137 
<a id="P137"></a>



//7.5 UFBGA100 package information
----------------------------------


[Figure 58]: #Figure%2058
<a id="Figure 58"></a>

**Figure 58**. UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball

grid array package outline
1. Drawing is not to scale.


[Table 84]: #Table%2084
<a id="Table 84"></a>

**Table 84**. UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball

grid array package mechanical data
Symbol
millimeters inches (1)
Min. Typ. Max. Min. Typ. Max.
A 0.460 0.530 0.600 0.0181 0.0209 0.0236
A1 0.050 0.080 0.110 0.0020 0.0031 0.0043
A2 0.400 0.450 0.500 0.0157 0.0177 0.0197
A3 - 0.130 - - 0.0051 -
A4 0.270 0.320 0.370 0.0106 0.0126 0.0146
b 0.200 0.250 0.300 0.0079 0.0098 0.0118
D 6.950 7.000 7.050 0.2736 0.2756 0.2776
D1 5.450 5.500 5.550 0.2146 0.2165 0.2185
E 6.950 7.000 7.050 0.2736 0.2756 0.2776
E1 5.450 5.500 5.550 0.2146 0.2165 0.2185
e - 0.500 - - 0.0197 -
F 0.700 0.750 0.800 0.0276 0.0295 0.0315
??????????
?????????????
??
? ?
?
?
?
??????????????
?
?
???????? ???????????
? ??
????????
??????????
?
?
??
?
?
?
??? ?
??
??
??? ? ? ?
???
?
?
?
? ?
??
??
????????
??????????

<!-- *P138*/149 -->
[P138]: #P138 
<a id="P138"></a>



[Figure 59]: #Figure%2059
<a id="Figure 59"></a>

**Figure 59**. UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball

grid array recommended footprint

1. Non-solder mask defined (NSMD) pads are recommended.
2. 4 to 6 mils solder paste screen printing process.
ddd - - 0.100 - - 0.0039
eee - - 0.150 - - 0.0059
fff - - 0.050 - - 0.0020
1. Values in inches are converted from mm and rounded to 4 decimal digits.

[Table 85]: #Table%2085
<a id="Table 85"></a>

**Table 85**. UFBGA100 recommended PCB design rules (0.5 mm pitch BGA)

Dimension Recommended values
Pitch 0.5
Dpad 0.27 mm
Dsm
0.35 mm typ. (depends on the soldermask
registration tolerance)
Solder paste 0.27 mm aperture diameter.
Table 84. UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball
grid array package mechanical data (continued)
Symbol
millimeters inches (1)
Min. Typ. Max. Min. Typ. Max.
?????????
???
????

<!-- *P139*/149 -->
[P139]: #P139 
<a id="P139"></a>


Device marking for UFBGA100
The following figure gives an example of topside marking orientation versus ball A1 identifier
location.
Other optional marking or inset/upset marks, which depend on supply chain operations, are
not indicated below.

[Figure 60]: #Figure%2060
<a id="Figure 60"></a>

**Figure 60**. UFBGA100 marking example (package top view)

1. Parts marked as ES or E or accompanied by an Engineering Sample notification letter are not yet qualified
and therefore not approved for use in production. ST is not responsible for any consequences resulting
from such use. In no event will ST be liable for the customer using any of these engineering samples in
production. ST’s Quality department must be contacted prior to any decision to use these engineering
samples to run a qualification activity.
??????????
?????
???????
? ??
?????????????????????? ???
?????????????
?
?????????
???????
???????????

<!-- *P140*/149 -->
[P140]: #P140 
<a id="P140"></a>



//7.6 Thermal characteristics
-----------------------------

The maximum chip junction temperature (T J max) must never exceed the values given in
Table 14: General operating conditions on page 59.
The maximum chip-junction temperature, T J max., in degrees Celsius, may be calculated
using the following equation:
T J max = T A max + (PD max x Θ JA )
Where:
• T A max is the maximum ambient temperature in °C,
• Θ JA is the package junction-to-ambient thermal resistance, in °C/W,
• PD max is the sum of P INT max and P I/O max (PD max = P INT max + P I/O max),
• P INT max is the product of I DD and V DD , expressed in Watts. This is the maximum chip
internal power.
P I/O max represents the maximum power dissipation on output pins where:
P I/O max = Σ (V OL × I OL ) + Σ((V DD – V OH ) × I OH ),
taking into account the actual V OL / I OL and V OH / I OH of the I/Os at low and high level in the
application.

//7.6.1 Reference document
--------------------------

JESD51-2 Integrated Circuits Thermal Test Method Environment Conditions - Natural
Convection (Still Air). Available from www.jedec.org.

[Table 86]: #Table%2086
<a id="Table 86"></a>

**Table 86**. Package thermal characteristics

Symbol Parameter Value Unit
Θ JA
Thermal resistance junction-ambient
UFQFPN48
32
°C/W
Thermal resistance junction-ambient
WLCSP49
51
Thermal resistance junction-ambient
LQFP64
47
Thermal resistance junction-ambient
LQFP100
43
Thermal resistance junction-ambient
UFBGA100
62

<!-- *P141*/149 -->
[P141]: #P141 
<a id="P141"></a>



/8 Ordering information
=======================



[Table 87]: #Table%2087
<a id="Table 87"></a>

**Table 87**. Ordering information scheme


Example: STM32 F 411 C E Y 6 TR
Device family
STM32 = Arm ® -based 32-bit microcontroller
Product type
F = General-purpose
Device subfamily
411 = 411 family
Pin count
C = 48/49 pins
R = 64 pins
V = 100 pins
Flash memory size
C = 256 Kbytes of Flash memory
E = 512 Kbytes of Flash memory
Package
H = UFBGA
T = LQFP
U = UFQFPN
Y = WLCSP
Temperature range
6 = Industrial temperature range, - 40 to 85 °C
7 = Industrial temperature range, - 40 to 105 °C
3 = Industrial temperature range, - 40 to 125 °C
Packing
TR = tape and reel
No character = tray or tube

<!-- *P142*/149 -->
[P142]: #P142 
<a id="P142"></a>



/Appendix A Recommendations when using the internal
===================================================

reset OFF
When the internal reset is OFF, the following integrated features are no longer supported:
• The integrated power-on-reset (POR)/power-down reset (PDR) circuitry is disabled.
• The brownout reset (BRO) circuitry must be disabled. By default BOR is OFF.
• The embedded programmable voltage detector (PVD) is disabled.
• V BAT functionality is no more available and VBAT pin should be connected to V DD .

//A.1 Operating conditions
--------------------------



[Table 88]: #Table%2088
<a id="Table 88"></a>

**Table 88**. Limitations depending on the operating power supply range

Operating
power supply
range
ADC
operation
Maximum
Flash memory
access
frequency
with no wait
state
(f Flashmax )
Maximum
Flash memory
access
frequency
with no wait
states (1) (2)
1. Applicable only when the code is executed from Flash memory. When the code is executed from RAM, no
wait state is required.
2. Thanks to the ART accelerator and the 128-bit Flash memory, the number of wait states given here does
not impact the execution speed from Flash memory since the ART accelerator allows to achieve a
performance equivalent to 0 wait state program execution.
I/O operation
Possible
Flash memory
operations
V DD = 1.7 to
2.1 V (3)
3. V DD /V DDA minimum value of 1.7 V, with the use of an external power supply supervisor (refer to
Section 3.15.1: Internal reset ON).
Conversion
time up to
1.2 Msps
20 MHz (4)
4. Prefetch is not available. Refer to AN3430 application note for details on how to adjust performance and
power.
100 MHz with
6 wait states
No I/O
compensation
8-bit erase and
program
operations only

<!-- *P143*/149 -->
[P143]: #P143 
<a id="P143"></a>



/Appendix B Application block diagrams
======================================


//B.1 USB OTG Full Speed (FS) interface solutions
-------------------------------------------------


[Figure 61]: #Figure%2061
<a id="Figure 61"></a>

**Figure 61**. USB controller configured as peripheral-only and used in Full-Speed mode

1. The external voltage regulator is only needed when building a V BUS powered device.

[Figure 62]: #Figure%2062
<a id="Figure 62"></a>

**Figure 62**. USB controller configured as host-only and used in Full-Speed mode

1. The current limiter is required only if the application has to support a V BUS powered device. A basic power
switch can be used if 5V are available on the application board.
?????????
?
? ?
?????????????
??????
???????
????
????
??
???????? ??
????????
?????????? ???
????
??
??
? ??
???????????????????
?????????
?
?
?
?????????????
????
????????
????
????
??????
???????
??
???????????
? ??
???????????????
???????????? ???
?????????
????
??
??
? ??
???????????????????

<!-- *P144*/149 -->
[P144]: #P144 
<a id="P144"></a>



[Figure 63]: #Figure%2063
<a id="Figure 63"></a>

**Figure 63**. USB controller configured in dual mode and used in Full-Speed mode

1. The external voltage regulator is only needed when building a V BUS powered device.
2. The current limiter is required only if the application has to support a V BUS powered device. A basic power
switch can be used if 5 V are available on the application board.
3. The ID pin is required in dual role only.
?????????
?
? ??
????
? ?
?
? ?
?
????
???
???
????
????????
????
?????????????
??????
???????
? ??
??
???????????
???????????????
????????????
????????
??????????
????????
????????? ???
?????????????????????
? ??
?? ???
??
??
????

<!-- *P145*/149 -->
[P145]: #P145 
<a id="P145"></a>



//B.2 Sensor Hub application example
------------------------------------


[Figure 64]: #Figure%2064
<a id="Figure 64"></a>

**Figure 64**. Sensor Hub application example

?????????????
?????????
????????????
????????
?????????????
?????????
?????
???
????????????????????
???
???
???
????????????
???????????
???
????
????
????
???
???
???
????
????
???
???
???
???????
??
??
???
????
????
???
???
????
????
???????
????
?????
???
????
????
?????
???
????
?????
???
????
????????
???????????????????????????????????????????????????????????
?????
???
?????????
???????????
??????????????????????
????

<!-- *P146*/149 -->
[P146]: #P146 
<a id="P146"></a>



//B.3 Batch Acquisition Mode (BAM) example
------------------------------------------

Data is transferred through the DMA from interfaces into the internal SRAM while the rest of
the MCU is set in low power mode.
• Code execution from RAM before switching off the Flash.
• Flash is set in power down and flash interface (ART™ accelerator) clock is stopped.
• The clocks are enabled only for the required interfaces.
• MCU core is set in sleep mode (core clock stopped waiting for interrupt).
• Only the needed DMA channels are enabled and running.

[Figure 65]: #Figure%2065
<a id="Figure 65"></a>

**Figure 65**. Batch Acquisition Mode (BAM) example

????????????????????
???
???
????????????
???????????
???
????
????
????
???
???
???
????
????
???
???
???
???????
??
??
???
????
????
????
???????
????
?????
???
????
????
?????
???
????
?????
???
????
????????
???????????????????????????????????????????????????????????
?????
???
?????????
???????????
??????????????????????
?????????????
??????????????????
?????????
???????
????????????????
??????
?????????
?????????
?????
???????
????????????
???
???????????
???
???????? ?????????????? ???????????
????
?????????
?????
?????????????
????????????
?????????????
?????????
????????
???
???
????
???
???

<!-- *P147*/149 -->
[P147]: #P147 
<a id="P147"></a>



/Revision history
=================



[Table 89]: #Table%2089
<a id="Table 89"></a>

**Table 89**. Document revision history

|     Date    | Revision |                                          Changes                                          |
|-------------|----------|-------------------------------------------------------------------------------------------|
| 19-Jun-2014 |        1 | Initial release.                                                                          |
|-------------|----------|-------------------------------------------------------------------------------------------|
| 10-Sep-2014 |        2 | Introduced the BAM feature in Features, Section 2: Description.,                          |
|             |          | and Section 3.3: Batch Acquisition mode (BAM).                                            |
|             |          | Updated Section 3.5: Embedded Flash memory, Section 3.14: Power supply schemes            |
|             |          | and Section 3.18: Low-power modes, Section 3.20.2: General-purpose timers (TIMx)          |
|             |          | and Section 3.30: Temperature sensor.                                                     |
|             |          | Modified [Table 8]: STM32F411xC/xE pin definitions, [Table 9]: Alternate function mapping |
|             |          | and APB2 in [Table 10]: STM32F411xC/xE register boundary addresses.                       |
|             |          | Modified [Table 34]: Low-power mode wakeup timings (1) , [Table 20]: Typical and maximum  |
|             |          | current consumption, code with data processing (ART accelerator disabled) running         |
|             |          | from SRAM - V DD = 1.7 V, [Table 21]: Typical and maximum current consumption, code       |
|             |          | with data processing (ART accelerator disabled) running from SRAM - V DD = 3.6 V,         |
|             |          | [Table 25]: Typical and maximum current consumption in run mode, code with data           |
|             |          | processing (ART accelerator enabled with prefetch) running from Flash memory - V DD       |
|             |          | = 3.6 V, [Table 26]: Typical and maximum current consumption in Sleep mode - V DD =       |
|             |          | 3.6 V and [Table 58]: I2C characteristics and [Figure 33]: I2C bus AC waveforms and       |
|             |          | measurement circuit.                                                                      |
|             |          | Added [Figure 21]: Low-power mode wakeup, Section Appendix A: Recommendations             |
|             |          | when using the internal reset OFF and Section Appendix B: Application block diagrams.     |
|-------------|----------|-------------------------------------------------------------------------------------------|
| 27-Nov-2014 |        3 | Changed datasheet status to Production Data.                                              |
|             |          | Updated [Table 31]: Typical and maximum current consumptions in V BAT mode.               |
|             |          | Section : On-chip peripheral current consumption: changed HCLK frequency and              |
|             |          | updated DMA1 and DMA2 current consumption in [Table 33]: Peripheral current               |
|             |          | consumption.                                                                              |
|             |          | Updated [Table 55]: I/O AC characteristics.                                               |
|             |          | Updated THD in [Table 69]: ADC dynamic accuracy at f ADC = 18 MHz - limited test          |
|             |          | conditions and [Table 70]: ADC dynamic accuracy at f ADC = 36 MHz - limited test          |
|             |          | conditions.                                                                               |
|             |          | Updated [Table 55]: I/O AC characteristics.                                               |
|             |          | Updated [Figure 46]: WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level        |
|             |          | chip scale package outline and [Figure 48]: WLCSP49 marking (package top view).           |
|             |          | Added [Figure 47]: WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level chip     |
|             |          | scale recommended footprint and [Table 80]: WLCSP49 recommended PCB design rules          |
|             |          | (0.4 mm pitch).                                                                           |
|             |          | Updated [Figure 51]: UFQFPN48 marking example (package top view), [Figure 54]:            |
|             |          | LQFP64 marking example (package top view), [Figure 57]: LQPF100 marking example           |
|             |          | (package top view), and [Figure 84]: UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch,        |
|             |          | ultra fine pitch ball grid array package mechanical data.                                 |
|-------------|----------|-------------------------------------------------------------------------------------------|
| 04-Feb-2015 |        4 | Added VPP alternate function for BOOT0 in [Table 8]: STM32F411xC/xE pin definitions.      |
|             |          | Added TC inputs in [Table 11]: Voltage characteristics,                                   |
|             |          | [Table 12]: Current characteristics,                                                      |
|             |          | [Table 14]: General operating conditions, [Table 53]: I/O static characteristics and      |
|             |          | [Figure 30]: FT/TC I/O input characteristics.                                             |
|             |          | Updated V ESD(CDM) in [Table 50]: ESD absolute maximum ratings.                           |
|             |          | A3 minimum and maximum values removed in [Table 83]: UFBGA100 - 100-ball, 7 x 7           |
|             |          | mm, 0.50 mm pitch, ultra fine pitch ball grid array package mechanical data.              |
|-------------|----------|-------------------------------------------------------------------------------------------|
| 21-Nov-2016 |        5 | Updated:                                                                                  |
|             |          | – Features                                                                                |
|             |          | – [Figure 1]: Compatible board design for LQFP100 package                                 |
|             |          | – [Figure 2]: Compatible board design for LQFP64 package                                  |
|             |          | – [Figure 3]: STM32F411xC/xE block diagram                                                |
|             |          | – [Figure 22]: High-speed external clock source AC timing diagram                         |
|             |          | – [Figure 23]: Low-speed external clock source AC timing diagram                          |
|             |          | – [Figure 33]: I2C bus AC waveforms and measurement circuit                               |
|             |          | – [Figure 58]: UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch,                              |
|             |          | ultra fine pitch ball grid array package outline                                          |
|             |          | – [Table 2]: STM32F411xC/xE features and peripheral counts                                |
|             |          | – [Table 8]: STM32F411xC/xE pin definitions                                               |
|             |          | – [Table 13]: Thermal characteristics                                                     |
|             |          | – [Table 14]: General operating conditions                                                |
|             |          | – From [Table 20]: Typical and maximum current consumption, code with data processing     |
|             |          | (ART accelerator disabled) running from SRAM - V DD = 1.7 V to [Table 31]: Typical and    |
|             |          | maximum current consumptions in V BAT mode                                                |
|             |          | – [Table 35]: High-speed external user clock characteristics                              |
|             |          | – [Table 36]: Low-speed external user clock characteristics                               |
|             |          | – [Table 39]: HSI oscillator characteristics                                              |
|             |          | – [Table 47]: Flash memory endurance and data retention                                   |
|             |          | – [Table 51]: Electrical sensitivities                                                    |
|             |          | – [Table 53]: I/O static characteristics                                                  |
|             |          | – [Table 76]: Dynamic characteristics: SD / MMC characteristics                           |
|             |          | – [Table 87]: Ordering information scheme                                                 |
|             |          | Added:                                                                                    |
|             |          | – One-time programmable bytes                                                             |
|             |          | – [Table 86]: Package thermal characteristics                                             |
|-------------|----------|-------------------------------------------------------------------------------------------|
| 05-Dec-2016 |        6 | Updated:                                                                                  |
|             |          | – [Table 27]: Typical and maximum current consumptions in Stop mode - V DD = 1.7 V        |
|             |          | – [Table 28]: Typical and maximum current consumption in Stop mode - V DD =3.6 V          |
|             |          | – [Table 29]: Typical and maximum current consumption in Standby mode - V DD = 1.7 V      |
|             |          | – [Table 30]: Typical and maximum current consumption in Standby mode - V DD = 3.6 V      |
|-------------|----------|-------------------------------------------------------------------------------------------|
| 14-Dec-2017 |        7 | Updated:                                                                                  |
|             |          | – [Table 27]: Typical and maximum current consumptions in Stop mode - V DD = 1.7 V        |
|             |          | – [Table 28]: Typical and maximum current consumption in Stop mode - V DD =3.6 V          |
|             |          | – [Table 29]: Typical and maximum current consumption in Standby mode - V DD = 1.7 V      |
|             |          | – [Table 30]: Typical and maximum current consumption in Standby mode - V DD = 3.6 V      |

<!-- *P148*/149 -->
[P148]: #P148 
<a id="P148"></a>



<!-- *P149*/149 -->
[P149]: #P149 
<a id="P149"></a>



IMPORTANT NOTICE – PLEASE READ CAREFULLY

STMicroelectronics NV and its subsidiaries (“ST”) reserve the right to make changes, 
corrections, enhancements, modifications, and improvements to ST products 
and/or to this document at any time without notice. Purchasers should obtain 
the latest relevant information on ST products before placing orders. ST 
products are sold pursuant to ST’s terms and conditions of sale in place at 
the time of order acknowledgement.

Purchasers are solely responsible for the choice, selection, and use of ST products 
and ST assumes no liability for application assistance or the design of 
Purchasers’ products.

No license, express or implied, to any intellectual property right is granted by ST herein.

Resale of ST products with provisions different from the information set forth herein 
shall void any warranty granted by ST for such product.

ST and the ST logo are trademarks of ST. All other product or service names are 
the property of their respective owners.

Information in this document supersedes and replaces information previously supplied 
in any prior versions of this document.

© 2017 STMicroelectronics – All rights reserved
