#!/usr/bin/env bash

du -d 2 'C:\Users\OCEAN\.gradle\caches' | sort -n |subl -
exit

'C:\android-sdk\build-tools\34.0.0\llvm-rs-cc' --help
html='C:\android-sdk\docs\docs-24_r01\reference\android\R.attr.html'
pandoc -r html "$html" -t rst --wrap=preserve --columns=120 --list-table=true -o "$html.rst"

du -hd 1 "C:\android-sdk\docs\docs-24_r01"


while read it; do
	url="$it?hl=en"
	echo "::$url" >> /pl/out.html
	curl "$url" \
	| sed -n '/devsite-article-body/,/Last updated/p' \
	| pandoc -r html -t rst --columns=80 --list-table=true >> /pl/out.html
done <<EOF
https://developer.android.google.cn/studio/write
https://developer.android.google.cn/studio/projects/templates
https://developer.android.google.cn/studio/write/sample-code
https://developer.android.google.cn/studio/write/create-java-class
https://developer.android.google.cn/studio/projects/add-app-module
https://developer.android.google.cn/studio/write/java8-support
https://developer.android.google.cn/studio/write/java8-support-table
https://developer.android.google.cn/studio/write/add-resources
https://developer.android.google.cn/jetpack/compose/tooling/previews
https://developer.android.google.cn/studio/write/layout-editor
https://developer.android.google.cn/studio/write/motion-editor
https://developer.android.google.cn/studio/write/resource-manager
https://developer.android.google.cn/studio/write/vector-asset-studio
https://developer.android.google.cn/studio/write/create-app-icons
https://developer.android.google.cn/studio/write/draw9patch
https://developer.android.google.cn/studio/write/convert-webp
https://developer.android.google.cn/studio/write/translations-editor
https://developer.android.google.cn/studio/write/app-link-indexing
https://developer.android.google.cn/studio/write/firebase
https://developer.android.google.cn/studio/write/lint
https://developer.android.google.cn/studio/write/annotations
https://developer.android.google.cn/studio/write/tool-attributes
EOF
exit
https://plugins.jetbrains.com/docs/intellij/welcome.html

url=https://devdoc.net/android/Android-r15/guide/topics/fundamentals/activities.html
curl "$url" | sed -n '/h1/,/Go to top/p' | pandoc -r html -t rst --list-table=true > /pl/out.html ; exit

# 🚩 Book Ref

Java 技术书籍大全 PDF (https://github.com/dahuoyzs/javapdf)

	Head First Java(第2版)中文版.pdf
	链接：https://pan.baidu.com/s/1s6OL72c4HWlgDRgWssDoJQ 提取码：e6j1

	Effective Java中文版(第2版).pdf
	链接：https://pan.baidu.com/s/1n7Po4pJM7H__spiVkjJixA 提取码：5jyl

	Effective.Java中文版(第3版).pdf
	链接：https://pan.baidu.com/s/1moNzNVhlTZMRlTUEcNMlxg 提取码：rfc7

	Hadoop权威指南(第2版).pdf
	链接：https://pan.baidu.com/s/1isOm16xKlqOa1BraBhzqdA 提取码：kpu6

	Hadoop权威指南大数据的存储与分析(第4版-升级-修订版).pdf
	链接：https://pan.baidu.com/s/16uJPdsnvHdm6FFmT7xz5vw 提取码：08vg

	Java加密与解密的艺术 梁栋.pdf
	链接：https://pan.baidu.com/s/1WILNurQGoZDPgERo3GrpeQ 提取码：dolc

	Java并发编程实战_带目录.pdf
	链接：https://pan.baidu.com/s/1lnBsCvVJ_p1mTLtMetgvyg 提取码：ha8s

	Java并发编程的艺术.pdf
	链接：https://pan.baidu.com/s/1PK0q5e6Dg-DPgJXrwYyEWw 提取码：rro7

	Java程序性能优化-让你的Java程序更快,更稳定[葛一鸣].pdf
	链接：https://pan.baidu.com/s/1xyxHK9UDshp7Eou1vjob7w 提取码：lk8v

	Java虚拟机规范(Java SE 8版)(带书签完整版).pdf
	链接：https://pan.baidu.com/s/1bF3ypUPbTVAc1TyorNpUjg 提取码：kb2a

	LogBack中文文档.pdf
	链接：https://pan.baidu.com/s/1dB4LysHST-QiKXQyIWUxEA 提取码：sjjq

	MapReduce设计模式（美）.pdf
	链接：https://pan.baidu.com/s/1VnaeO_qCwM9sfEkLcqSkLw 提取码：98gg

	Netty 入门与实战：仿写微信 IM 即时通讯系统.docx
	链接：https://pan.baidu.com/s/1jdrl_ikS8yXwW3jkUyFYkg 提取码：vxwi

	On Java 8(Java编程思想第五版)-英文.pdf
	链接：https://pan.baidu.com/s/182kzwlRF4hfJ6cke_V-iGg 提取码：007z

	Spring Cloud微服务实战.pdf
	链接：https://pan.baidu.com/s/1sjsz_M5bA7rDUFkOTTSQ1g 提取码：z9gd

	Spring技术内幕-深入解析Spring架构与设计原理(第2版)带书签.pdf
	链接：https://pan.baidu.com/s/1UClmWWN4CpQUiu87EkPN9w 提取码：t14m

	Spring源码深度解析.pdf
	链接：https://pan.baidu.com/s/1TXEeIQJlkvMvZ9Z6FR71Aw 提取码：mhex

	《Spring Boot+Vue全栈开发实战》_王松_2018-12-01.pdf
	链接：https://pan.baidu.com/s/1FGUFBuWGnVAqEMMC7_oI5Q 提取码：5823

	《深入理解Spring Cloud与微服务构建》.pdf
	链接：https://pan.baidu.com/s/1evN4tCPDkQCgpKSbfyc67g 提取码：iuds

	写给大忙人看的JavaSE8.pdf
	链接：https://pan.baidu.com/s/19fCS_oYNPpTn9HE-LO5ifA 提取码：5oyt

	深入理解Java虚拟机JVM高级特性与最佳实践第2版(周志朋).pdf
	链接：https://pan.baidu.com/s/1d_5IrA9ZWFBT0GO6tqd3IQ 提取码：uhlr

	深入理解Java虚拟机JVM高级特性与最佳实践第3版(周志朋).pdf
	链接：https://pan.baidu.com/s/1osx-E5P4qB1B465YL_N6_w 提取码：e101

	深入理解java虚拟机第2版(BillVenners著曹晓刚译).pdf
	链接：https://pan.baidu.com/s/1RASOQfqLuJn7sUd0T3Z9mA 提取码：nwca

	HotSpot实战.pdf
	链接：https://pan.baidu.com/s/1-2BpDo95LhvG-O4a_Sup4A 提取码：6fhf

	Java Performance.pdf
	链接：https://pan.baidu.com/s/16zEU6fnsZMnaG5lqyPD8ww 提取码：aw65

	Core Java, Volume II--Advanced-Cay S. Horstmann.pdf
	链接：https://pan.baidu.com/s/1mtomhSVE9FSQfgyc8ulP7A 提取码：4pfb

	数据库
	MySQL必知必会(文字版).pdf
	链接：https://pan.baidu.com/s/15hcVf3b4qHtoiLKmWg6GdA 提取码：eptx

	MySQL性能调优与架构设计.pdf
	链接：https://pan.baidu.com/s/1Y_SGIBwiav11eeTGPiLb7Q 提取码：nbd5

	MySQL技术内幕InnoDB存储引擎(第1版).pdf
	链接：https://pan.baidu.com/s/10sRLE9KDUogBzlTFb-06jg 提取码：nqyw

	MySQL技术内幕InnoDB存储引擎(第2版).pdf
	链接：https://pan.baidu.com/s/1EYIIYvwwfufifH1QWdaPqw 提取码：l0ij

	SQL学习指南(第2版).pdf
	链接：https://pan.baidu.com/s/1iYKE0Vst8o6JIaoHTtdAzg 提取码：fn1f

	深入浅出MySQL++数据库开发、优化与管理维护+第2版+唐汉明.pdf
	链接：https://pan.baidu.com/s/1Kky9OSKlD8PLx6qG-kCyHA 提取码：4mj4

	深入浅出MySQL.pdf
	链接：https://pan.baidu.com/s/1K8mAUW3GADYcHb30uh7x8w 提取码：ivsf

	漫画数据库.pdf
	链接：https://pan.baidu.com/s/1edW10NPRXoPLwQL4t20sMw 提取码：czms

	高性能的MySQL(第3版).pdf
	链接：https://pan.baidu.com/s/1MDT3GzoHdZR7iTCZAFY1gQ 提取码：w8oy

	算法
	Java数据结构和算法（第二版）.pdf
	链接：https://pan.baidu.com/s/1RZZ3uoQlr5rQow119lsG2g 提取码：9bgu

	《设计模式》中文版.pdf
	链接：https://pan.baidu.com/s/1reY7Fnugs_ZSfBcsD4xHhA 提取码：nqyk

	算法导论(第2版).pdf
	链接：https://pan.baidu.com/s/1zCQg1JHLezHMAJnKkSVsVw 提取码：624v

	算法心得：高效算法的奥秘(第2版).pdf
	链接：https://pan.baidu.com/s/1f_udzJiXV49d_JVW11qaGA 提取码：5fci

	网络
	HTTP权威指南（中文版）.pdf
	链接：https://pan.baidu.com/s/1zRAxZ4flGR1kSPk3LpVaxQ 提取码：i1w1

	TCP-IP详解_卷一、二、三.pdf
	链接：https://pan.baidu.com/s/16yJAnKk99pfUkFJb54NjOA 提取码：8ooj

	图解HTTP.pdf
	链接：https://pan.baidu.com/s/1znL-3U7sGXDGWyVioWOmIg 提取码：9fv0

	网络是怎样连接的.pdf
	链接：https://pan.baidu.com/s/19-coudapbvsjXn1hGbxdOg 提取码：84am

	重构与规范
	重构 - 改善既有代码的设计 - 1.pdf
	链接：https://pan.baidu.com/s/17XkDXQF1Png5A8MiT_rrIw 提取码：zevj

	重构-改善既有代码的设计-2-中文.pdf
	链接：https://pan.baidu.com/s/1EMVOK7HwhvD81Q5rjGMFdg 提取码：hohc

	阿里巴巴Android开发手册.pdf
	链接：https://pan.baidu.com/s/10xWRdnEyqe_T6b8BP80vDQ 提取码：7ogc

	阿里巴巴Java开发手册v1.3.0.pdf
	链接：https://pan.baidu.com/s/1MvE7fc12oy2lK6WKBC9LFw 提取码：3vn2

	阿里巴巴Java开发手册v1.3.1.pdf
	链接：https://pan.baidu.com/s/14nuMZlZYMxGlhxwwaVp9vw 提取码：547e

	中间件
	Redis入门指南（第2版）.pdf
	链接：https://pan.baidu.com/s/1LoAJ0ZlKElL2TFuch38Rsw 提取码：pmep

	Redis实战.pdf
	链接：https://pan.baidu.com/s/1_N4y2Jnf1bBfBFNPgcbcyQ 提取码：g3rm

	redis设计与实现第二版.pdf
	链接：https://pan.baidu.com/s/1OuILN3VYmhLdqdaM1AdPTw 提取码：vvwy

	RocketMQ技术内幕.pdf
	链接：https://pan.baidu.com/s/1qTQWHTepEIi0LcSlGsqq-A 提取码：1ivj

	前端
	ES6 编码规范-Tower.pdf
	链接：https://pan.baidu.com/s/1HoPDSFuj-NHwVeCXxC8HCg 提取码：1ayf

	es6手册.md
	链接：https://pan.baidu.com/s/1ZT21nAq8EsaCV25C6nBxxA 提取码：0d4k

	ES6标准入门（第二版）.pdf
	链接：https://pan.baidu.com/s/1HoPDSFuj-NHwVeCXxC8HCg 提取码：1ayf

	JavaScript设计模式与开发实践.pdf
	链接：https://pan.baidu.com/s/1cdVK75H2PQ1BYuAEH14IFQ 提取码：3w18

	JavaScript语言精粹.pdf
	链接：https://pan.baidu.com/s/1s2B5Fx24-oD2NBXs02fGWQ 提取码：a3i5

	React 中文版-v1.1.pdf
	链接：https://pan.baidu.com/s/13aKbirXB1vAG4wU_UoIX2Q 提取码：eabd

	Redux 官方文档中文翻译.pdf
	链接：https://pan.baidu.com/s/1aXLct_zaCnznDCLEPTeIJw 提取码：uea5

	webpack 思维导图.pdf
	链接：https://pan.baidu.com/s/1iSGksVNE2f5GykASw0qzog 提取码：xxcp

	深入浅出ES6.pdf
	链接：https://pan.baidu.com/s/1yh2ak_23lwxcdxOmBKd1Tw 提取码：meno

	安全
	ssh权威指南.pdf
	链接：https://pan.baidu.com/s/1ZBD0adS33pb8MrgCoumi3g 提取码：d6re

	《加密与解密（第4版）》.pdf
	链接：https://pan.baidu.com/s/1UFy9f14cPBZi4Cvk4wkw1A 提取码：0jrw

	《白帽子讲Web安全》(阿里道哥).pdf
	链接：https://pan.baidu.com/s/1w-VHgsYDKbk79QsEIgldAw 提取码：bpeh

	服务器
	docker_practice.pdf
	链接：https://pan.baidu.com/s/1m3dOf9RMXDW5qhw5tBYQww 提取码：z32d

	Docker从入门到实践.pdf
	链接：https://pan.baidu.com/s/12BDqXpbCg2Hpi5i6ABDsoQ 提取码：eyu0

	Docker技术入门与实战+第2版.pdf
	链接：https://pan.baidu.com/s/1CiByHKAJ-0esh-gRb4YQjA 提取码：0j4y

	Introducing Istio Service Mesh for Microservices.pdf
	链接：https://pan.baidu.com/s/1QYzV2tG5p7r6VX2joB9EeA 提取码：74f5

	Jenkins权威指南.2016.pdf
	链接：https://pan.baidu.com/s/17DYVh0JffbKJKRbqVwNqDg 提取码：e832

	Kubernetes in Action.pdf
	链接：https://pan.baidu.com/s/1RaPVVjm1RRpZHFty07iX_A 提取码：1zd0

	kubernetes.pdf
	链接：https://pan.baidu.com/s/1_07VBMa_MoBg4RVDfyj5tA 提取码：0d3f

	LINUX内核完全剖析：基于0.12内核.pdf
	链接：https://pan.baidu.com/s/12pGrrYgKxxjUfrrNKO-ZEw 提取码：sdph

	Maven实战.pdf
	链接：https://pan.baidu.com/s/1h2SxJ8as0rzBhPYZ8Bgkjw 提取码：u25e

	Nginx教程从入门到精通.pdf
	链接：https://pan.baidu.com/s/1CsOf2AQn5s_6RQ10P4T2rQ 提取码：9qzj

	Nginx高性能Web服务器实战教程.pdf
	链接：https://pan.baidu.com/s/1wpQ6qeacrZciBdm2r0sX_w 提取码：m0it

	深入理解计算机系统(原书第三版3).pdf
	链接：https://pan.baidu.com/s/175pmfJQYpn_UmUHKevjMFw 提取码：7y26

	git
	github-roam.pdf
	链接：https://pan.baidu.com/s/1abCW8L00_e5d--nuqWeauw 提取码：hfcr

	git使用指南.pdf
	链接：https://pan.baidu.com/s/1LEp1NJnbwHdVqQpkbgnsCg 提取码：lx4i

	Git版本控制管理第2版(美)罗力格.pdf
	链接：https://pan.baidu.com/s/1wyh5G5OowpJ6jOHKGCseFQ 提取码：6mpq

	从 0 开始学习 GitHub 系列.pdf
	链接：https://pan.baidu.com/s/1q0kWzCGxlzxMMmqhZ6LkPg 提取码：xma6

	AI
	Mathematical Methods for Physics and Engineering.pdf
	链接：https://pan.baidu.com/s/1m1H6rg4ntmGdLZjNMaQq4Q 提取码：zpx9

	The Elements of Statistical Learning.pdf
	链接：https://pan.baidu.com/s/1A1uxEuTq79pfqPa65u_8-g 提取码：6lwh

	凸优化理论.pdf
	链接：https://pan.baidu.com/s/1zvDewKkUri7u4HEunP076A 提取码：vjxm

	同济线性代数教材.pdf
	链接：https://pan.baidu.com/s/1rQy9Tm83-jrcbQBTGf3VeQ 提取码：y2zo

	同济高等数学第六版上下册.pdf
	链接：https://pan.baidu.com/s/12NGyvxQToPKT7EilVshnag 提取码：byqt

	数学之美.pdf
	链接：https://pan.baidu.com/s/16n2g5986MqKitds1733OXw 提取码：dwrb

	数据挖掘与分析（英文）.pdf
	链接：https://pan.baidu.com/s/1z1obinsyF0PKyNnMBJrjaA 提取码：xwsd

	斯坦福大学机器学习复习材料.pdf
	链接：https://pan.baidu.com/s/1Ghz9oH2Es6WYLCTygELlSw 提取码：6lna

	斯坦福大学机器学习课程个人笔记完整版.pdf
	链接：https://pan.baidu.com/s/1ph7v4MJXXH2RAUMdY7pjOw 提取码：42id

	机器学习.pdf
	链接：https://pan.baidu.com/s/1KC8-p9Ed6e-Y-EVrVe6I6g 提取码：j194

	梯度下降.pdf
	链接：https://pan.baidu.com/s/1sW3fngjTwayr_8GqsQ1Mng 提取码：4qm4

	概率论与数理统计同济大学.pdf
	链接：https://pan.baidu.com/s/19Fdq7E9MpmnWpBkixvr53A 提取码：zt0m

	深度学习.pdf
	链接：https://pan.baidu.com/s/1rsraLEqCVFzoqT-UhOrOeA 提取码：12l7

	深度学习Deep Learning.pdf
	链接：https://pan.baidu.com/s/1aU2fclfilmZe6VpYh4BhBQ 提取码：crtg

	神经网络和深度学习.pdf
	链接：https://pan.baidu.com/s/1qZlkqZJQ8HRfBPwH4ovsEA 提取码：l9gs

	经典算法大全.pdf
	链接：https://pan.baidu.com/s/1ONi8y_CxOsIz4rbqbJROdg 提取码：2z75

	统计学习方法李航.pdf
	链接：https://pan.baidu.com/s/1CxGWelEiq9Vq5piBlW5x8g 提取码：m718

	美国人工智能的发展概述.pdf
	链接：https://pan.baidu.com/s/1iN1rXoF7G-19HFf368bxBw 提取码：eeaz

	量化研究手册：数据分析.pdf
	链接：https://pan.baidu.com/s/1LhxNtaq4P1OkRcq3K9pM6g 提取码：q9et

	面向机器智能的TensorFlow实践.pdf
	链接：https://pan.baidu.com/s/1mT3T1R1BfFSyLXtuYpcEfQ 提取码：cbo8



# 🚩 Java Version History
https://learnku.com/articles/49657
https://www.javatpoint.com/history-of-java

自上个世纪计算机信息革命开始，C 语言从 1970 年代发迹，并成功催生出 C++ 这样的面向对象编程言语，但是 C/C++ 作为系统开发级别的高级语言，它们在直接操作硬件底层上具有非常开放的特性，并且需要开发者手动管理内存，这使得日益增加的软件工程安全需求变得越来越迫切。

基于以上历史背景，Sun Microsystems 公司于 1995 年 5 月推出的 Java 面向对象程序设计语言和 Java 平台，由 James Gosling, Mike Sheridan, Patrick Naughton 带领 Green Team 同事们共同研发。

Sun 公司终于抵挡不住开源社区和 Java 社区的种种压力，最终被迫开放 Java 虚拟机和编译器的源代码。2006 年 11 月 13 日，Sun Microsystems 正式宣布 Java 开源，不过，十年之后，对于 Java 开源的争议依旧存在。批评者认为，Java 并没有像官方说的那样完全开源，其实只开放了 SDK，而 Java SE 和 Java EE TCKs 仍然是闭源。最初 IBM 呼吁将 Java 捐给 Apache 软件基金会，使用 Apache 许可证分发，但 Sun 最终决定在 GPL 许可证下开源 Java。GPL 许可证要求衍生版本需要公开分发。Gosling 称这能让 Java 更好的适应开源社区。Sun 在 2010 年被甲骨文收购，Java 也落到了甲骨文手中，由甲骨文主导 Java 的演化。

随着 Java 开源，JVM 底层的公开，基于 JVM 实现的脚本、语言也在大量衍生：

1. *JRuby*：Java 语言实现的 Ruby 脚本解释器。
2. *Fantom*：其前身 Fan 是一个基于 Java 和 .NET 平台的脚本引擎。
3. *Jython*：继承 Java 和 CPython 二者的特性的脚本语言。
4. *Groovy*：就是 JVM 上的脚本语言，吸取 Python 等语言特征，提升 Java 开发者的效率。
5. *Clojure*：就是 JVM 上的 Lisp，解决 Java 语法和 Lisp 差别太大的缺点。
6. *Scala*：一种多范式的编程语言，整合 OOP 和 FP 的各种特性。
7. *Kotlin*：目标就是替换掉 Java，大量应用于 Android 开发。

为什么说 Kotlin 是未来，相比起 Java 语言，Kotlin 的优势确实非常明显：

1. 高效率：Kotlin 是一种跨平台的静态类型语言，关键特性包括 null 安全性、协程、数据类型、扩展函数等。前期开发效率更高，中期线上问题更少，后期代码更容易维护。
2. 兼容性：Kotlin 可以与 Java 混合编程，项目可以渐进式迁移 Java 到 Kotlin。
3. 代码风格更友好、更快捷，语法不似 Java 复杂，不需冗余类定义函数和静态对象。

Java 主要特性：

1. *简单*：自动内存管理，基于 C++ 但消除复杂的 C++ 功能，如指针、多继承。
2. *面向对象*：Java 将一切问题都看做对象与对象之间的交互，将对象抽象成方法与属性的集合。
3. *分布性*：包含操作分布性与数据分布性两个方面。操作分布性是指由多个主机共同完成一项功能，数据分布性是分布在多台主机上的数据当做一个完成的整体处理。
4. *跨平台*：Java 语言编写的应用程序，不受平台限制，可以由一种平台迁移到另一种平台。
5. *解释型*：使用 Java 语言编写的源码被转化为字节码，字节码只有被 JVM 解释成机器码才能被计算机执行。
6. *安全性*：Java 语言的底层设计可以有效避免非法操作。
7. *健壮性*：Java 提供了许多机制防止运行时出现严重错误，如编译时类型检查、异常处理。
8. *多线程*：Java 支持多线程，允许进程内部多个线程同时工作。

Java 运行环境 Java Runtime Environment (JRE) 包含了 Java 虚拟机、基础类库，是在任何平台上运行 Java 编写的程序都需要用到的软件环境，提供给终端用户使用。

JRE 类库分为四类构成，参考文档首页的 Description of Java Conceptual Diagram：
1. https://docs.oracle.com/javase/7/docs/
2. https://docs.oracle.com/javase/7/docs/technotes/guides/language/index.html
3. https://docs.oracle.com/javase/specs/index.html

User Interface Toolkits:

	JavaFX
	Swing	Java 2D	AWT	Accessibility
	Drag and Drop	Input Methods	Image I/O	Print Service	Sound

Integration Libraries: 

	IDL	JDBC	JNDI	RMI	RMI-IIOP	Scripting

Other Base Libraries: 

	Beans	Int'l Support	Input/Output	JMX
	JNI	Math	Networking	Override Mechanism
	Security	Serialization	Extension Mechanism	XML JAXP

lang and util Base Libraries:

	lang and util	Collections	Concurrency Utilities	JAR
	Logging	Management	Preferences API	Ref Objects
	Reflection	Regular Expressions	Versioning	Zip	Instrumentation


1. Java 的类库，包含了编译 Java 程序所需要的最核心文件。
1.01. 核心库文件，其中有
1.02. 数据结构的库，包括列表、字典和树等
1.03. XML 分析库
1.04. 安全方面应用库
1.05. 国际化和本地化应用库
1.06. 综合库文件，包含了程序员和其他系统通信的功能文件。
1.07. JDBC，即 Java 数据库联通的 API
1.08. JNDI，即 Java 命名和目录接口
1.09. RMI 和 CORBA 用于重新分发软件
1.10. 用户界面库文件，包含：
1.11. AWT，即抽象窗口开发包，提供了产生图形用户界面所需要的功能
1.12. Swing 库
1.13. 其他用于回访媒体文件、录音、截图的库
2. 一个用于执行软件的 Java 虚拟机（JVM）
3. 插件，可以在浏览器里面使用
4. JWS，可以让终端用户连接到互联网
5. 许可文件和文档

JDK (Java Development Kit) 作为 Java 语言的基础软件开发工具包，其版本主要根据设备类型分类：

1. Java ME（Java Micro Edition)
2. Java EE（Java Enterprise Edition)
3. Java SE（Java Standard Edition)
4. LTS(Long-term support)

Java SE JDK 版本发布时间表：

| 发行日期	| 版本		| 名称		|
| 1996-01-23	| JDK 1.0		| Oak(橡树)		|
| 1997-02-19	| JDK 1.1		| none（无）		|
| 1997-09-12	| JDK 1.1.4		| Sparkler（宝石）		|
| 1997-12-13	| JDK 1.1.5		| Pumpkin（南瓜）		|
| 1998-04-24	| JDK 1.1.6		| Abigail（阿比盖尔–女子名）		|
| 1998-09-28	| JDK 1.1.7		| Brutus（布鲁图–古罗马政治家和将军）		|
| 1999-04-08	| JDK 1.1.8		| Chelsea（切尔西–城市名）		|
| 1998-12-04	| J2SE 1.2		| Playground（运动场）	|
| 1999-03-30	| J2SE 1.2.1		| none（无）		|
| 1999-07-08	| J2SE 1.2.2		| Cricket（蟋蟀）		|
| 2000-05-08	| J2SE 1.3		| Kestrel（美洲红隼）	|
| 2001-05-17	| J2SE 1.3.1		| Ladybird（瓢虫）		|
| 2002-02-13	| J2SE 1.4.0		| Merlin（灰背隼）	|
| 2002-09-16	| J2SE 1.4.1		| grasshopper（蚱蜢）	|
| 2003-06-26	| J2SE 1.4.2		| Mantis（螳螂）		|
| 2004-09-30	| Java SE 5.0 (1.5.0)	| Tiger（老虎）	|
| 2006-04-00	| Java SE 6.0 (1.6.0)	| Mustang（野马）	|
| 2011-07-28	| Java SE 7.0 (1.7.0)	| Dolphin（海豚）	|
| 2014-03-18	| Java SE 8.0 (1.8.0)	| Spider（蜘蛛）	|
| 2017-09-21	| Java SE 9.0		| none（无）		|
| 2018-03-21	| Java SE 10.0		| none（无）		|
| 2018-09-25	| Java SE 11.0		| none（无）		|
| 2019-03-19 	| Java SE 12.0		| none（无）		|
| 2019-09-17 	| Java SE 13.0		| none（无）		|
| 2020-03-17 	| Java SE 14.0		| none（无）		|


发展历史

01. 1991 年 Green 项目成立，James Gosling 等人开发 Oak 语言以支持有线电视交换盒、PDA 等的微处理器的嵌入式开发。
02. 1994 年将 Oak 语言更名为 Java。
03. 1995 年 5 月 23 日，Java 语言诞生。
04. 1996 年 1 月 23 日，Sun 公司发布了 Java 的第一个开发工具包 JDK 1.0。
05. 1996 年 4 月，10 个最主要的操作系统供应商申明将在其产品中嵌入 Java 技术。
06. 1996 年 9 月，约 8.3 万个网页应用了 JAVA 技术来制作。
07. 1996 年 10 月，Sun 发布第一个 JIT 编译器。
08. 1997 年 2 月 18 日，JDK1.1 发布。
09. 1997 年 4 月 2 日，JavaOne 会议召开，参与者逾一万人，创当时全球同类会议规模之纪录。
10. 1997 年 9 月，JavaDeveloperConnection 社区成员超过十万。
11. 1998 年 2 月，JDK1.1 被下载超过 2,000,000 次。
12. 1998 年 12 月 8 日，Sun 公司发布了第二代 Java 平台的 3 个版本：
	J2ME 应用于移动、无线及有限资源的环境；
	J2SE 应用于桌面环境；
	J2EE 应用于基于 Java 的应用服务器。
13. 1999 年 6 月，第三个 Java 版本发布，并命名为 JavaSE、JavaEE、JavaME。
14. 2000 年 5 月 8 日， JDK1.3，J2SE 1.3 发布。
15. 2000 年 5 月 29 日，JDK1.4 发布。
16. 2001 年 9 月 24 日，J2EE1.3 发布。
17. 2002 年 2 月 26 日，J2SE1.4 发布。
18. 2004 年 9 月 30 日，J2SE1.5 发布，并命名为 Java SE 5.0 以突显其里程碑意义。
19. 2005 年 6 月，JavaOne 大会召开并发布 JavaSE6，更名为：Java EE、Java SE、Java ME。
20. 2009 年 4 月 20 日，Oracle 公司每股 7.5 美元收购 Sun 总价值 74 亿美元
21. 2011 年 7 月 28 日，Oracle 发布 Java SE 7
22. 2014 年 3 月 18 日，Java SE 8 发布
23. 2017 年 9 月 21 日，Java SE 9 发布
24. 2018 年 3 月 21 日，Java SE 10 发布
25. 2018 年 9 月 25 日，Java SE 11 发布
26. 2019 年 3 月 20 日，Java SE 12 发布
27. 2019 年 9 月 17 日，Java SE 13 发布
28. 2020 年 3 月 17 日，Java SE 14 发布


首个 JDK 1.0 版本从 1996 年初发布，至今有二十多个版本，早期版本号使用 1.x 命令，从 ava SE 9 开始不再使用这种命名风格。J2SE 1.4 开始由 Java Community Process（JCP）管理，使用 Java Specification Requests （JSRs）文档来建议和定义对 Java 平台内容的新增和修改。

Java 标准库（JCL）经过多年发展，从 JDK 1.0 中的几百个类暴增到 J2SE 5 的三千多个类。随着技术进步，API 也不断推陈出新，许多 JDK 1.0 原本的类和方法被弃用。

Java 7 发布后，Oracle 承诺回到以前每两年发布一次的发布周期。2013 年 Oracle 却宣布他们将 Java 8 延迟一年发表，官方表示是为了修复 Java 的安全漏洞。

2017 年 9 月，Java 平台的主架构师 Mark Reinhold 发出提议，要求将 Java 的功能更新周期从之前的每两年一个新版本缩减到每六个月一个新版本。该提议获得了通过，并在提出后不久生效。

Java 8 与 Java 11 为目前提供支持的 LTS（长期支持）版本；Java 10 是上一个快速发布版本，且已不再被支持。随着 Java 11 的发布，Java 10 自当日起不再被支持。Oracle 将在 2019 年 1 月前为商业用途中的 Java 8 长期支持，而针对非商用的更新将继续提供，直至 2020 年 12 月；此外，AdoptOpenJDK 也为 Java 8 提供免费更新。针对 Java 11 的长期支持将不再由 Oracle 提供，而是改由 OpenJDK 社区的 AdoptOpenJDK 提供。

# 🚩 JUnit, Maven, Gradle 单元测试与项目管理
1. https://junit.org/junit5/docs/current/user-guide/
2. https://ant.apache.org/manual/tutorial-HelloWorldWithAnt.html
3. https://github.com/junit-team/junit4/wiki/Getting-started

JUnit 作为应用最广泛的 Java 单元测试工具，一般会搭配各种项目管理工具使用。IDE 默认提供相应的项目配置，可以通选项进行配置修改。可以跳过 IDE，直接调用各种项目管理工具提供的命令行工具。

常用的 Java 项目管理工具有以下三个，前后有依赖关系：

0. Ant 早期的构建工具，使用类似 GNU Make 的 Target 构建概念，但是缺失依赖库管理。
1. Maven 基于 Project Object Model（pom.xml）配置文件，支持构建、依赖、文档和发布等任务。
2. Gradle 是一种基于 Groovy 语言的构建自动化工具，配置脚本比 pom.xml 更加精简。

JUnit 4 WIki

```sh
git clone --depth=1 git@github.com:junit-team/junit4.wiki
```

JUnit 依赖：

```xml
<!-- https://mvnrepository.com/artifact/junit/junit -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>3.8.2</version>
    <scope>test</scope>
</dependency>
<!-- https://mvnrepository.com/artifact/junit/junit/4.12 -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
</dependency>
```

JUnit 各版本的命名空间：

```java
// JUnit 3 
import junit.framework.TestCase
import junit.framework.Test;
import junit.framework.Assert;
import groovy.test.GroovyTestCase;
// JUnit 4 
import org.junit.Test;
import org.junit.Assert.assertEquals;
import groovy.test.GroovyAssert;
import static org.junit.Assert.assertEquals;
// JUnit 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions.assertEquals;
```

使用 JUnit 3 编写测试程序需要继承 TestCase，主要用于 Java 5 之前的代码。升级到 JUnit 4 则可以直接使用 @Test 等注解将 public 方法标记为测试案列。

以下以 JUnit 4 为例，演示单元测试的使用流程：

1. 编写 Java 程序，此为待测试的程序；
2. 使用 JUnit 依赖库编写测试程序；
3. 编译程序，并使用 JUnit JUnitCore 运行测试程序；

测试程序也可以实现 static main 入口函数，而不必通过 JUnitCore 运行测试程序。

按约定，工程目录按以下约定形式存放不同的代码文件：

1. src/main/java  存放 Java 源程序代码；
2. src/main/groovy 存放 Groovy 源程序代码；
3. src/test/java  存放 Java 测试程序代码；
4. src/test/groovy 存放 Groovy 测试程序代码；

创建 `Calculator.java` 代码文件，内容参考如下：

```java
public class Calculator {
  public int evaluate(String expression) {
    int sum = 0;
    for (String summand: expression.split("\\+"))
      sum += Integer.valueOf(summand);
    return sum;
  }
}
```

使用 JUnit 4 类库创建 `CalculatorTest.java` 作为测试程序，代码参考如下，注意 public 关键字的使用，否则测试引擎检测不到：

```java
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
  @Test
  public void evaluatesExpression() {
    Calculator calculator = new Calculator();
    int sum = calculator.evaluate("1+2+3");
    assertEquals(6, sum);
  }
}
```

编译程序、测试程序，并使用 JUnitCore 运行测试程序：

```sh
# Now compile Calculator class:
javac Calculator.java
# The Java compiler creates a file `Calculator.class`.

# Compile the test. On Linux or MacOS
javac -cp .:junit-4.12.jar:hamcrest-core-1.3.jar CalculatorTest.java
# and on Windows
javac -cp .;junit-4.12.jar;hamcrest-core-1.3.jar CalculatorTest.java
# The Java compiler creates a file `CalculatorTest.class`.

## Run the test
# Run the test from the command line. On Linux or MacOS
java -cp .:junit-4.12.jar:hamcrest-core-1.3.jar org.junit.runner.JUnitCore CalculatorTest
# and on Windows
java -cp .;junit-4.12.jar;hamcrest-core-1.3.jar org.junit.runner.JUnitCore CalculatorTest
```

测试程序输出参考：

```sh
    JUnit version 4.12
    .
    Time: 0,006
    
    OK (1 test)
```

JUnit 3 也提供了一个 junit.runner.BaseTestRunner，但是它并没有入口函数，不能直接运行。应该使用 junit.textui.TestRunner 或者 junit.swingui.TestRunner。JUnit 5 使用 junit-platform-console-standalone 运行测试程序。使用 Maven 管理项目，可以使用 `mvn test` 命令运行测试：

```sh
javap 'jar:file:c:/gradle/lib/junit-4.13.2.jar!/org/junit/runner/JUnitCore.class'
javap 'jar:file:~/.m2/repository/junit/junit/3.8.2/junit-3.8.2.jar!/junit/runner/BaseTestRunner.class'
javap 'jar:file:~/.m2/repository/junit/junit/3.8.2/junit-3.8.2.jar!/junit/textui/TestRunner.class'

java -cp 'c:/gradle/lib/junit-4.13.2.jar;target/test-classes;.' org.junit.runner.JUnitCore mgid.AppTest
# java -cp '.;target/test-classes;c:/gradle/lib/junit-4.13.2.jar' org.junit.runner.JUnitCore

export CLASSPATH="C:/gradle/lib/junit-4.13.2.jar;"\
	"~/.m2/repository/junit/junit/3.8.2/junit-3.8.2.jar;"\
	"C:/Groovy/lib/hamcrest-core-1.3.jar;"\
	"C:/groovy-3.0.4/lib/groovy-3.0.4.jar;"\
	"C:/groovy-3.0.4/lib/groovy-test-3.0.4.jar;"\
	"C:/Groovy/lib/groovy-4.0.15.jar;"\
	"C:/Groovy/lib/groovy-test-4.0.15.jar;$CLASSPATH;"\
	"build/classes/java/main;build/classes/java/test;"\
	"build/classes/groovy/main;build/classes/groovy/test;"\
	"build/classes/kotlin/main;build/classes/kotlin/test;"\
	"target/classes;target/test-classes;.;"

java org.junit.runner.JUnitCore mgid.AppTest
java junit.textui.TestRunner mgid.AppTest

javap org.junit.runner.JUnitCore
javap junit.textui.TestRunner

mvn test -Dtest=mgid.AppTest
mvn test -Dtest=SecondUnitTest
mvn test -Dtest=FirstUnitTest,SecondUnitTest
mvn test -Dtest="package.to.test.**"
```

使用脚本编译更新过的代码文件，配合 watch 工具监视 src 目录，如果编译成功就执行 UnboundedWildcards：

```sh
cat > jc << EOF
#! /usr/bin/env sh
echo ------- Java compiling -------; 
javas=`find src/main/java`; 
for it in $javas; 
	do if [ $it -nt timestamp ]; 
		then javac -d build/classes/java/main $it; 
	fi; 
done
if [ $? = 0 ]; then java $1; fi
touch timestamp;
EOF
watch "sh -c './jc UnboundedWildcards'" src
```

注意：命令行运行 jar 程序时，放置在 CLASSPATH 列表的路径不要包含任何前导空格，否则会导致找不到入口。

为了方便使用，可以将常用的 jar 文件路径配置到 CLASSPATH 系统环境变量中，当前值可以通过 System 对象获取：

```java
System.getProperty ("java.class.path").replace (';', '\n');
```

以下使用脚本编写 JUnit 3 测试程序，按照约定，将其保存到相应的脚本文件：

1. src/test/groovy/My.goory 
2. src/test/groovy/MyTest.goory 

```java
// 1. src/test/groovy/My.goory 
class My {
    static void main(String... args) {
        println "Hello Groovy!"
    }
}

// 2. src/test/groovy/MyTest.goory 
import groovy.test.GroovyTestCase

class MyTest extends GroovyTestCase
{
    static void main(String... args)
    {
        println "MyTest run... args=" + String.join(',', args)
        new MyTest().testAssertions()
    }

    void testAssertions()
    {
        println "java --version".execute().text
        assertEquals "Hello Groovy!", "java My".execute().text.trim()
    }
}

// Groovy Test Suite
import groovy.util.GroovyTestSuite 
import junit.framework.Test 
import junit.textui.TestRunner 

class AllTests { 
   static Test suite() { 
      def allTests = new GroovyTestSuite() 
      allTests.addTestSuite(MyTest.class) 
      allTests.addTestSuite(MoreTest.class) 
      return allTests 
   } 
} 

TestRunner.run(AllTests.suite())
```

测试代码中调用了 `java My` 命令运行 My.class，因为已经将类输出目录设置到了 CLASSPATH 环境变量中，包括 Mavrn 编译输出目录，所以就不需要在命令行中设置 -cp 参数。 

Groovy 脚本编写 JUnit 3 测试程序，只需要继承 `groovy.test.GroovyTestCase`，继承自 `junit.framework.TestCase`，然后就可以调用 JUnit 断言。Test Suite 可选，目的是将所有测试集中起来处理。

JUnit 4 则使用 `groovy.test.GroovyAssert`，继承自 `org.junit.Assert`，其中定义了 shouldFail 静态方法。JUnit 4 使用 @Before @Test @After 等等注解。这些注解应用于非静态、且无参数的方法。

```java
import org.junit.Test;
import org.junit.Before;
import static groovy.test.GroovyAssert.*

class MyTest
{
    @Before
    void init()
    {
        println "MyTest run..."
    }

    @Test
    void testAssertions()
    {
        print "java --version".execute().text
        assertEquals "Hello Groovy!", "java My".execute().text.trim()
    }
}
```

Groovy 提供了一些专用的测试方法，例如 `shouldFail`，可用于 JUnit 3 或者 JUnit 4。用于检查给定代码块（闭包）是否失败，如果是，代码块中的断言将保持，否则断言将失败。它接收一个 `groovy.lang.Closure`，可以指定此闭包可能触发的异常类型。

```java
void testInvalidIndexAccess2() {
    def numbers = [1,2,3,4]
    shouldFail IndexOutOfBoundsException, {
        numbers.get(4)
    }
}
```

Groovy 脚本可以很方便地通过 execute 方法调用外部程序并获取其 stdin stdout stderr 标准 I/O 文件的数据，但是注意，直接通过 text 属性获取的内容会自动添加换行符号，这会导致测试出错：

	junit.framework.ComparisonFailure: expected:<Hello Groovy![]> but was:<Hello Groovy![
	]>

导入静态方法时，如 Assert.assertEquals，缺失 static 关键字会报错，会将它当作非静态对象导入，进而引发类型无法定位错误。

	groovy unable to resolve class org.junit.Assert.assertEquals

参考 Groovy 官方文档：

1.3. Program structure - 1.3.2. Imports
3.6. Testing Guide - 3.6.3. Testing with JUnit

JUnitCore 运算的测试程序要求只能有一个构建器，如果是 Groovy 脚本代码，它会生成两个构建器

```sh
$ mvn test-compile; java org.junit.runner.JUnitCore MyTest
1) initializationError(MyTest)
java.lang.IllegalArgumentException: Test class can only have one constructor

$ javap MyTest | grep MyTest\(
  public MyTest();
  public MyTest(groovy.lang.Binding);
```

另外，Groovy 脚本中调用方法可以省略括号，但是参数列表还是需要使用逗号分隔符，否则就会因为 Groovy 找不到对应的方法签名而触发异常：

	groovy.lang.MissingMethodException: No signature of method



## 🍀 JUnit Configuration

JUnit 5 架构改动较大，按官方文档所述：

	JUnit 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage

JUnit Platform 运行于 JVM，它相当于一个测试环境容器，并且在其上运行 JUnit 测试引擎（Jupiter 或者 Vintage），junit-platform-launcher 插件负责启动测试平台，以运行 junit-jupiter 或者 junit-vintage-engine 插件所代表的测试引擎。

1. JUnit Jupiter 是新的编程模型和扩展模型的组合，用于编写 JUnit 5 测试和扩展。
2. JUnit Vintage 提供的测试引擎用于编写 JUnit 3 或者 JUnit 4 的测试程序。

Maven 项目中配置 JUnit 3 或者 JUnit 4 依赖：

```xml
<!-- https://mvnrepository.com/artifact/junit/junit 
testImplementation group: 'junit', name: 'junit', version: '4.13.2'
testImplementation 'junit:junit:4.13.2'
-->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```

Maven 项目中配置 JUnit 5 依赖，只需要添加 junit-jupiter-engine 依赖：
https://maven.apache.org/surefire/maven-surefire-plugin/examples/junit-platform.html

```xml
<!-- https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-engine 
testImplementation group: 'org.junit.jupiter', name: 'junit-jupiter-engine', version: '5.10.0'
-->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-engine</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>

<!-- https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api 
testImplementation group: 'org.junit.jupiter', name: 'junit-jupiter-api', version: '5.10.0'
-->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>

<!-- https://mvnrepository.com/artifact/org.junit.platform/junit-platform-launcher 
testImplementation group: 'org.junit.platform', name: 'junit-platform-launcher', version: '1.10.0'
-->
<dependency>
    <groupId>org.junit.platform</groupId>
    <artifactId>junit-platform-launcher</artifactId>
    <version>1.10.0</version>
    <scope>test</scope>
</dependency>


    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.1.2</version>
        <dependencies>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-engine</artifactId>
                <version>5.9.1</version>
            </dependency>
        </dependencies>
    </plugin>
```

新版本的 JUnit 5 使用 junit-jupiter-api:5.7.0 替代旧的注解，命令空间以及注解名称更新参考如下：

	import org.junit.jupiter.api.Test
	import org.junit.jupiter.api.Assertions.*
	import org.junit.jupiter.api.Assumptions.*

	@BeforeEach @AfterEach         ==》 @Before    @After
	@BeforeAll  @AfterAll          ==》 @BeforeClass @AfterClass
	@Disabled                      ==》 @Ignore
	@Tag                           ==》 @Category
	@ExtendWith                    ==》 @RunWith
	@ExtendWith @RegisterExtension ==》 @Rule @ClassRule

配合 Maven 项目管理工具时，`mvn test` 有可能不执行 JUnit 4 的测试程序，Maven 找不到要运行的 JUnit 4 测试，可能原因是默认的配置使用 TestNG 测试供应程序。

Maven 支持以下测试工具，默认会使用 TestNG 作为单元测试供应程序，在命令输出消息中可以看到 Configuring TestNG。

1. TestNG    - artifactId: surefire-testng
2. JUnit 3.8 - artifactId: surefire-junit3
3. JUnit 4.x - artifactId: surefire-junit4, surefire-junit47
4. JUnit 5.x - artifactId: surefire-junit-platform
5. POJO

TestNG 全称 Testing, Next Generation。TestNG 脱胎于业界标杆的 JUnit，但比 JUnit 更加强大和易用。它几乎涵盖所有类型的测试：单元、组件、集成和前端（Selenium+TestNG）等。

Surefire 插件 Provider Selection 检测逻辑：

```sh
if the JUnit 5 Platform Engine is present in the project
    use junit-platform
if the JUnit version in the project >= 4.7 and the <<<parallel>>> configuration parameter has ANY value
    use junit47 provider
if JUnit >= 4.0 is present
    use junit4 provider
else
    use junit3.8.1
```

通过配置 maven-surefire-plugin 插件，手动指定 JUnit 4 作为单元测试供应程序，执行 `mvn test` 命令时，应该可以看到以下信息：
https://maven.apache.org/surefire/maven-surefire-plugin/

	Using configured provider org.apache.maven.surefire.junitcore.JUnitCoreProvider

```xml
<!-- https://mvnrepository.com/artifact/org.apache.maven.plugins/maven-surefire-plugin
implementation group: 'org.apache.maven.plugins', name: 'maven-surefire-plugin', version: '3.1.2'
	org.apache.maven.plugins:maven-surefire-plugin:2.12.4:test		Sep 24, 2012
	org.apache.maven.plugins:maven-surefire-plugin:3.1.2:test		Jun 06, 2023	 -->
<dependency>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>3.1.2</version>
    <scope>test</scope>
</dependency>

  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>3.1.2</version>
    <dependencies>
      <dependency>
        <groupId>org.apache.maven.surefire</groupId>
        <artifactId>surefire-junit4</artifactId>
        <version>3.1.2</version>
      </dependency>
    </dependencies>
  </plugin>
```


## 🍀 JDK & Groovy Version

Java 程序编译后会记录一个 JDK 主版本号，当运行环境提供的 Java 版本达不到版本要求时，就会触发如下异常。使用最新版 JDK 17 可能导致旧版本 Gradle 运行出错，Major version 61 即 JDK 17：

	BUG! exception in phase 'semantic analysis' in source unit 'src\test\groovy\MyTest.groovy' 
	Unsupported class file major version 61

使用 Groovy 编译器时就可能出现此错误，类似地，Gradle 7.5.x 并不适配 Java 19，这种情况也会导致 major 版本问题，可以降低 JDK 版本，或者升级 Gradle 版本。Groovy 启动脚本记录的是 Java 入口类，脚本会自动加载入口类所归属的依赖包，比如 groovy-4.0.15.jar。但是，如果将 Groovy 依赖包设置到 CLASSPATH 环境变量中，那么脚本就会按环境变量设置为准。

Java 17 命令行有四种使用形式：

```sh
# (to execute a class)
java [options] <mainclass> [args...]
# (to execute a jar file)
java [options] -jar <jarfile> [args...]
# (to execute the main class in a module)
java [options] -m <module>[/<mainclass>] [args...]
java [options] --module <module>[/<mainclass>] [args...]
# (to execute a single source-file program)
java [options] <sourcefile> [args]
```

参数设置有多种，非标准选项因不同的虚拟机而异，HotSpot、OpenJ9、GraalVM、Azul Zing 等：
https://docs.oracle.com/en/java/javase/17/docs/specs/man/java.html#java-command-line-argument-files

0. General options，例如 -cp -classpath 或者 --class-path 指定类目录列表；
1. Standard options 使用 -D<name>=<value> 形式设置系统属性；
2. Extra-options 使用 `java -X` 命令查询，例如使用 `-Xms` 和 `-Xmx` 设置堆内存大小；
3. Advanced options 设置 JVM Runtime、JIT 编译器、GC 等等，使用 -XX 形式，例如 `-XX:+PrintFlagsFinal`；
4. @argument files 使用文本文件设置所有参数，再使用 @ 符号指定其路径；

Java 9 引入 Platform Module System (JPMS)，使用 `java --list-modules` 命令列表当前所有模块，也可以使用 -p 参数加载指定模块。

注意：@argfile 文件，参数和值可以分行编写。参数中的空格应该使用双引号包括，反引号原样编写，加载配置文件是会自动进行转义，并给参数值添加双引号包括。开放的双引号后面换行符号会被过滤，像 -cp 列表中的路径还是需要使用 : 或者 ; 分隔符号。

1. groovy 命令对应主类：`groovy.ui.GroovyMain`
2. groovysh 命令对应主类：`org.apache.groovy.groovysh.Main` 
3. groovyConsole 命令对应主类：`groovy.console.ui.Console` 
4. groovyc 命令对应主类：`org.codehaus.groovy.tools.FileSystemCompiler`
5. grape 命令对应主类：`org.codehaus.groovy.tools.GrapeMain`
6. 通用入口类为 `org.codehaus.groovy.tools.GroovyStarter`

```sh
cat >> argfile << EOF
-classpath
C:/Groovy/lib/jline-2.14.6.jar;\
C:/Groovy/lib/groovy-swing-4.0.15.jar;\
C:/Groovy/lib/javaparser-core-3.25.5.jar;\
C:/Groovy/lib/groovy-4.0.15.jar;\
C:/Groovy/lib/groovy-console-4.0.15.jar;\
C:/Groovy/lib/groovy-groovysh-4.0.15.jar;
EOF
java @argfile groovy.ui.GroovyMain
java @argfile groovy.console.ui.Console
java @argfile org.apache.groovy.groovysh.Main

java -Dkotlin.repl.ideMode=true -Dfile.encoding=UTF-8 @argfile groovy.console.ui.Console
java -Dsun.awt.keepWorkingSetOnMinimize=true -classpath C:/Groovy//lib/groovy-4.0.15.jar \
	-Dscript.name=/c/Groovy/bin/groovyconsole \
	-Dprogram.name=groovyconsole \
	-Dgroovy.starter.conf=C:/Groovy//conf/groovy-starter.conf \
	-Dgroovy.home=C:/Groovy/ \
	-Dtools.jar=C:/jdk-17/lib/tools.jar \
	org.codehaus.groovy.tools.GroovyStarter \
	--main groovy.console.ui.Console \
	--conf C:/Groovy//conf/groovy-starter.conf \
	--classpath "C:/jdk-14.0.2/jars/antlr-4.10.1-complete.jar;:."
```

使用公共入口的一个好处就是可以利用入口类提供的各种功能，比如给 --main 参数指定的主类设置 classpath 参数，或者指定 Groovy 配置，参考以下配置文件 groovy-starter.conf：

```sh
    # load required libraries
    load !{groovy.home}/lib/*.jar

    # load user specific libraries
    load !{user.home}/.groovy/lib/*.jar

    # tools.jar for ant tasks
    load ${tools.jar}
```

以下是 Android Studio 集成 Groovy Shell 的脚本解析配置，其中 -p 参数设置在入口类之后，所以它不是直接给 Java 命令的参数，而是给 Groovy 命令指定的一个控制台逐行读取数据处理脚本，用户通过它来与 Groovy 解析器交互：

```sh
cat > argfile_as << EOF
-classpath
C:\Program" "Files\Android\Android" "Studio\lib\groovy.jar;.
EOF
java "-Dgroovy.home=/" -Dfile.encoding=UTF-8 @argfile_as \
	org.codehaus.groovy.tools.GroovyStarter --main groovy.ui.GroovyMain \
	-p "C:/Program Files/Android/Android Studio/plugins/Groovy/lib/console.groovy"
```

其中 console.groovy 脚本内容如下，主要是读取用户输入并调用 GroovyShell 逐行解析：

```js
// Copyright 2000-2018 JetBrains s.r.o. 
// Use of this source code is governed by the Apache 2.0 license 
// that can be found in the LICENSE file.

Binding bind
try {
  bind = scriptBinding
}
catch (MissingPropertyException ignore) {
  bind = scriptBinding = new Binding()
}
try {
  print line
  def result = new GroovyShell(bind).run(((String)line).replaceAll('###\\\\n', '\n'), 'ideaGroovyConsole.groovy')
  System.out.println()
  if (result != null) {
    System.out.println 'ee2d5778-e2f4-4705-84ef-0847535c32f4' + result
  }
}
catch (Throwable e) {
  e.printStackTrace()
}
```

Garpe 是在 Groovy 脚本里内嵌式的 Jar 包依赖管理器，使用 Grape 命令可以快速添加 maven 仓库依赖到脚本的 classpath。

```js
import com.jidesoft.swing.JideSplitButton
@Grab(group='com.jidesoft', module='jide-oss', version='[2.2.1,2.3.0)')
public class TestClassAnnotation {
    public static String testMethod () {
        return JideSplitButton.class.name
    }
}

@Grapes([
   @Grab(group='commons-primitives', module='commons-primitives', version='1.0'),
   @Grab(group='org.ccil.cowan.tagsoup', module='tagsoup', version='0.9.7')])
class Example {
// ...
}
```

```sh
$ grape install org.springframework spring 2.5.6
:: resolving dependencies :: caller#all-caller;working50
        confs: [default]
        found org.springframework#spring;2.5.6 in ibiblio
        found commons-logging#commons-logging;1.1.1 in localm2
downloading https://repo1.maven.org/maven2/org/springframework/spring/2.5.6/spring-2.5.6.jar ...
        [SUCCESSFUL ] org.springframework#spring;2.5.6!spring.jar (322371ms)

$ grape list

commons-logging commons-logging  [1.1.1]
org.apache apache  [4]
org.apache.commons commons-parent  [5]
org.springframework spring  [2.5.6, 5.3.30]

4 Grape modules cached
5 Grape module versions cached

commons-logging-1.1.1.jar
```

以下是 IntelliJ IDEA 中设置的 Kotlin REPL 命令行（实验性功能），直接调用 K2JVMCompiler  编译器，使用 XML 格式进行数据交互：

```sh
cat > argfile_kotlin_repl << EOF
-classpath
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/kotlin-compiler.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/kotlin-stdlib.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/kotlin-reflect.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/kotlin-script-runtime.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/trove4j.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/kotlin-daemon.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/kotlin-scripting-compiler.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/kotlin-scripting-compiler-impl.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/kotlin-scripting-common.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/kotlin-scripting-jvm.jar;\
C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc/lib/annotations-13.0.jar;
org.jetbrains.kotlin.cli.jvm.K2JVMCompiler
-cp
build/classes/production/My_Application;build/classes/test/My_Application
-jvm-target
1.8
-kotlin-home
"C:/Program Files/Android/Android Studio/plugins/Kotlin/kotlinc"
EOF
java -Dkotlin.repl.ideMode=true -Dfile.encoding=UTF-8 @argfile_kotlin_repl
<?xml version="1.0" encoding="UTF-8"?><output type="INITIAL_PROMPT">Welcome to Kotlin version 1.9.0-release-358 (JRE 17.0.8+9-LTS-211)#n</output>
<?xml version="1.0" encoding="UTF-8"?><output type="INITIAL_PROMPT">Type :help for help, :quit for quit#n</output>
<?xml version="1.0" encoding="UTF-8"?><output type="INTERNAL_ERROR">print("ABC")</output>
<?xml version="1.0" encoding="UTF-8"?><output type="USER_OUTPUT">ABC</output>
<?xml version="1.0" encoding="UTF-8"?><output type="SUCCESS">#n</output>
```

使用 java 和 javap 命令查询类文件来源、以及其所使用的 JDK 主版本号：

```sh
$ javap -verbose org.codehaus.groovy.ast.decompiled.AsmDecompiler | grep major
  major version: 52
$ java -verbose org.codehaus.groovy.tools.GrapeMain | grep GrapeMain
[0.085s][info][class,load] org.codehaus.groovy.tools.GrapeMain source /groovy/lib/groovy-3.0.4.jar
```

List of Java Major Minor Versions
https://code2care.org/java/list-of-java-major-minor-version-numbers/

	Java version			Major Version	Hex Code
	Java SE 21 (YTR)		65		(0x41)
	Java SE 20			64		(0x40)
	Java SE 19			63		(0x3F)
	Java SE 18			62		(0x3E)
	Java SE 17			61		(0x3D)
	Java SE 16			60		(0x3C)
	Java SE 15			59		(0x3B)
	Java SE 14			58		(0x3A)
	Java SE 13			57		(0x39)
	Java SE 12			56		(0x38)
	Java SE 11			55		(0x37)
	Java SE 10			54		(0x36)
	Java SE 9			53		(0x35)
	Java SE 8			52		(0x34)
	Java SE 7			51		(0x33)
	Java SE 6.0			50		(0x32)
	Java SE 5.0			49		(0x31)
	JDK 1.4				48		(0x30)
	JDK 1.3				47		(0x2F)
	JDK 1.2				46		(0x2E)
	JDK 1.1				45		(0x2D)

Java -verbose 输出的详细信息中包含了各种类加载来源：

	source: __ClassDefiner__
	source: __JVM_LookupDefineClass__
	source: __dynamic_proxy__
	source: /myaid/target/classes/
	source: /groovy/lib/groovy-3.0.4.jar
	source: groovy.lang.MetaClassImpl
	source: java.lang.Class
	source: java.lang.Module
	source: jdk.nio.zipfs.ZipFileSystem
	source: jdk.nio.zipfs.ZipFileSystemProvider
	source: jrt:/java.base
	source: jrt:/jdk.zipfs
	source: org.codehaus.groovy.vmplugin.VMPluginFactory
	source: org.codehaus.groovy.vmplugin.v9.ClassFinder$1
	source: org.codehaus.groovy.vmplugin.v9.Java9
	source: shared objects file

根据 Java 类文件加载机制，这些类有以下来源形式：

1. 从本地文件系统内加载 class 文件：source: /myaid/target/classes/
2. 从 JAR 包加载 class 文件：source: /groovy/lib/groovy-3.0.4.jar
3. 通过网络加载 class 文件。
4. Java 源文件动态编译、并加载：source: shared objects file
5. Inner 内部类：source: java.lang.Class java.lang.Module
6. 运行时类库：source: jrt:/java.base
7. Dynamic Proxy Class API：source: __dynamic_proxy__

Bash 虽然提供变量字符串扩展（替换）处理，但是不能插入换行符，即使用 `$'\n'` 这种形式也不可以，需要借助 sed 或 gawk 等外部命令，它们也是 Linux 系统命令行的基本工具，参考官方手册  3.5 Shell Expansions 3.5.3 Shell Parameter Expansion (String manipulate) ，以及 Linux Command Line and Shell Scripting Bible - Chapter 19 Introducing sed and gawk。

```sh
$ echo ${CLASSPATH//\\//} | sed 's/;/\n/g'
C:/jdk-14.0.2/jars/plantuml.1.2018.1.jar
C:/jdk-14.0.2/jars/antlr-4.10.1-complete.jar
C:/gradle/lib/junit-4.13.2.jar
C:/users/ocean/.m2/repository/junit/junit/3.8.2/junit-3.8.2.jar
C:/Groovy/lib/groovy-test-4.0.15.jar
C:/groovy-3.0.4/lib/groovy-test-3.0.4.jar
C:/Groovy/lib/hamcrest-core-1.3.jar
target/classes
target/test-classes
build/classes/java/main
build/classes/java/test
build/classes/groovy/main
build/classes/groovy/test
build/classes/groovy/main
build/classes/groovy/test
.
C:/kotlin/kotlinc/lib/kotlin-compiler.jar
C:/groovy/lib/groovy-4.0.15.jar
C:/groovy-3.0.4/lib/groovy-3.0.4.jar
```

## 🍀 Groovy 脚本项目
0. https://github.com/apache/groovy
0. https://groovy-lang.org/documentation.html
1. https://docs.gradle.org/current/userguide/groovy_plugin.html
2. https://groovy.apache.org/download.html
3. https://mvnrepository.com/artifact/org.codehaus.groovy/groovy-all

Groovy 虽然可以称为脚本，但是和 Java 一样也可以编译为字节码再运行，分别使用 javac 和 groovyc 编译器命令将源码翻译成二进制码，然后交给 JVM 解释执行。

简洁算是 Groovy 的最基本特性，作为一种脚本，Groovy 也具有动态特性。Groovy ProcessGroovyMethods 提供 exexute 机制，可以非常方便地执行系统外部程序、命令。3.3. Groovy Development Kit - 3.3.1. Working with IO - Executing External Processes 

使用 `groovy my.groovy` 命令执行以下 my.groovy 脚本，它演示如何轻松地利用 Groovy 脚本字符串提供的方法和系统进程进行交互：

```js
// For Unix system
println("pwd && groovy -v".execute().text)
// For Windows system
println("groovy.bat -v".execute().text)
println("cmd /C groovy -v".execute().text)
println( "C:/groovy-3.0.4/bin/groovy.bat -v".execute().text)

def process = "cmd.exe /c set".execute()
process.in.eachLine { line -> println (line) }
```

Windows 系统上，因为 groovy 是以批处理脚本文件 .bat 形式定义的命令，所以需要使用 cmd.exe 程序执行它，或者指定脚本文件全名。

直接使用 exectue 的输出虽然方便，但是如果发生错误，则没有结果输出。这就需要使用 `ProcessGroovyMethods` 提供的 I/O 消费方法进行处理：

```sh
def stdout_stderr = new StringBuilder()
def ps = "java MyApp".execute()
ps.consumeProcessOutput(stdout_stderr, stdout_stderr)
ps.waitForOrKill(3000)
println("Out: [$stdout_stderr]")
```

每个脚本文件对应一个 `Script` 抽象类型，使用 javap 命令可以查看类文件信息，包括反编译字节码指令。脚本中字符串和各种符号将会定义在常量池中，Constant pool。脚本中 execute() 方法返回一个 java.lang.Process 实例，通过它访问 stdin stdout stderr 等标准 I/O 文件，这些接口包装在 `ProcessGroovyMethods`。

对于打包在 .jar 中的类文件，可以使用 `jar:file:xxx.jar!/path/to/some.class` 指定路径：

```sh
$ javap 'jar:file:c:/gradle/lib/junit-4.13.2.jar!/org/junit/runner/JUnitCore.class'
$ javap 'jar:file:~/.m2/repository/junit/junit/3.8.2/junit-3.8.2.jar!/junit/runner/BaseTestRunner.class'
```

Groovy 脚本中执行的方法会编译为 `CallSite` call() 方式的调用，包括脚本中的 exexute() 这样的方法。Groovy 编译器根据调用的方法创建对应的 `CallSiteArray` 对象作为参数，利用这种方式来支持很多的动态特性。这里涉及的类型定义在 org.codehaus.groovy.runtime 包或者其子包中。

Groovy 闭包用于定义匿名函数非常方便，以上代码中的花括号搭配 -> 符号就是闭包标志。

编译脚本会生成与文件同名的类，脚本内容将包装在 `run()` 方法中，供 `InvokerHelper` 调用。同时还会生成一个 main 方法，作为整个脚本的入口。脚本中定义的类是 Groovy Class，编译时会按类名称生成对应的 .class 文件。脚本中定义的类都会隐含地实现 `GroovyObject` 接口，包括 `Script` 这个抽象类型。如果要直接执行，则脚本中定义的入口类必须定义 static main 方法。示范如下，事实上，在脚本中编写 `println "Hello Groovy!"` 一条语句，就等价以下完整代码，使用 InvokerHelper 执行 Groovy Class：

```java
import org.codehaus.groovy.runtime.InvokerHelper

class Main extends Script {
    def run() {
        println "Hello Groovy!"
    }
    static void main(String[] args) {
        InvokerHelper.runScript(Main, args)
    }
}
```

脚本程序结构参考官方文档：1. Groovy Language Specification - 1.3. Program structure 以及 1.3.3. Scripts versus classes

执行 Groovy 编译器生成的 .class 文件时，需保证类路径中有 groovy-x.x.x.jar，否则会因为找不到 GroovyObject 这样的基础类型而触发入口错误，由脚本中设置的继承类型触发：

```sh
java -cp "C:/groovy/lib/groovy-4.0.15.jar;C:/groovy/lib/groovy-test-4.0.15.jar;." Main
# Hello Groovy!

java -cp "." Main
# Error: Could not find or load main class my
# Caused by: java.lang.NoClassDefFoundError: groovy/lang/GroovyObject
# Caused by: java.lang.NoClassDefFoundError: groovy/lang/Script 
# Caused by: java.lang.NoClassDefFoundError: groovy/test/GroovyTestCase 
java NotRealClass
# Error: Could not find or load main class NotRealClass
# Caused by: java.lang.ClassNotFoundException: NotRealClass 
```

另外，运行 Groovy 测试脚本时，需要将 Groovy Test 依赖包添加到 CLASSPATH 列表，否则会出现断言方法缺失问题：

```sh
groovy.lang.MissingMethodException: 
No signature of method: MyTest.assertEquals() is applicable for argument types: (String, String) 
```

注意：区别不同的入口类型错误：

1. 由于 Groovy 依赖未加载，导致 GroovyObject 或 Script 等类型丢失而不能加载入口类；
2. Java 运行一个不存在（未定位到的类定义）入口类型，警告信息就会包含这个类型；

Groovy 测试工具由独立的 jar 包提供，应该将 groovy-test-4.0.15.jar 这样的依赖包添加到 CLASSPATH 列表。否则就会因为 GroovyTestCase 未加载导致不能加载入口类。

使用 -cp 参数指定 CLASSPATH 列表，使用分号或冒号（Unix）分隔多个路径，并且不能有前置空格。重复设置 -cp 参数会覆盖旧值，比如，以下命令就可能导致运行出错：

	java -cp "C:/groovy/lib/groovy-4.0.15.jar;C:/groovy/lib/groovy-test-4.0.15.jar;" -cp . Main

使用 javap 命令可以检测指定类型是否存在入口函数，也可以用来反汇编字节码：

```sh
$ javap -verbose MyTest
$ javap MyTest
Compiled from "MyTest.groovy"
public class MyTest extends groovy.test.GroovyTestCase implements groovy.lang.GroovyObject {
  public static transient boolean __$stMC;
  public MyTest();
  public static void main(java.lang.String...);
  public void testAssertions();
  protected groovy.lang.MetaClass $getStaticMetaClass();
  public groovy.lang.MetaClass getMetaClass();
  public void setMetaClass(groovy.lang.MetaClass);
}
```

使用以下类型可以动态运行 Groovy 脚本：

1. *GroovyShell* 代表 groovy shell，可以运行任意脚本，使用 `Binding` 绑定参数；
2. *Eval* 通过封装 GroovyShell 提供几个便于使用的脚本执行方法；
3. *GroovyClassLoader* 类型可以加载 Groovy Class，使用 `parseClass()` 方法；
4. *GroovyScriptEngine* 引擎类 run 方法在运行时加载脚本，监听到脚本变化时重新加载；
5. *InvokerHelper* 静态助手类，使字节码生成、执行更容易；

参考官方文档 3.20. Integrating Groovy in a Java application

执行以下命令将脚本编译成字节码文件 my.class：

```sh
$ groovyc -d ./groovy/lang/Script my.groovy
$ javap -verbose groovy.lang.Script.my
$ javap -cp ./groovy/lang/Script my

Compiled from "my.groovy"
public class my extends groovy.lang.Script {
  public static transient boolean __$stMC;
  public my();
  public my(groovy.lang.Binding);
  public static void main(java.lang.String...);
  public java.lang.Object run();
  protected groovy.lang.MetaClass $getStaticMetaClass();
}
```

如果在 .groovy 文件定义和文件同名的类，则意味着用 Groovy 编写 Java 代码，而不是再作为一般脚本使用，IDEA 称之为 Groovy Class。Groovy 默认导入以下模块：

```java
import java.io.*
import java.lang.*
import java.math.BigDecimal
import java.math.BigInteger
import java.net.*
import java.util.*
import groovy.lang.*
import groovy.util.*
```

Groovy 默认导入的类型位于主依赖包，用于测试的 groovy.test.GroovyTestCase 等类型没有导入，并且，测试工具通过另外独立的包提供。对于 Groovy 4..15，这些包对应为：groovy-4.0.15.jar groovy-test-4.0.15.jar

按照项目习惯约定，Groovy 脚本应该保存在 src\main\groovy 或者  src\test\groovy 子目录。代码单元测试参考 3.6. Testing Guide -  3.6.3. Testing with JUnit

GMavenPlus Wiki - Choosing Your Build Tool 页面罗列了 Groovy 脚本项目的几种配置方式：
https://github.com/groovy/GMavenPlus/wiki/Choosing-Your-Build-Tool

```sh
# 下载 GMavenPlus WIki 页面
git clone --depth=1 git@github.com:groovy/GMavenPlus.wiki
```

1. groovyc Ant Task (推荐使用)
2. GMaven 1
3. GMaven 2
4. GMavenPlus (推荐使用)
5. Groovy Eclipse Compiler Plugin for Maven
6. Buildr
7. Gradle (推荐使用)

GMavenPlus 重写了 GMaven 插件，它们为 Maven 项目集成 Groovy 脚本，参考文档 2.2. Compiling Groovy - 2.2.5. Maven integration 以及 2.3.2. GMavenPlus Maven Plugin。

使用 Maven 或 Gradle 创建 Groovy 脚本项目需要 Groovy 依赖以及相应的插件配置。分别在 build.gradle 和 pom.xml 配置文件中设置相应依赖。

Gradle 配置参考官方文档，主要是 Grooy API 和 Groovy Plugin 配置，此插件为 Grandl 添加以下任务支持，执行 `gradle test` 命令时就会编译并运行相应的 Groovy 脚本：

1. `compileGroovy` — GroovyCompile 依赖 `compileJava` 任务，编译 Groovy 代码；
2. `compileTestGroovy` — GroovyCompile 依赖 `compileTestJava` 任务，编译 Groovy 测试代码；
3. `compileSourceSetGroovy` — GroovyCompile 依赖 `compileSourceSetJava` 任务，编译 sourceSet 目录下的代码集；
4. `groovydoc` — Groovydoc 为代码生成 API 文档；

```js
plugins {
    id 'groovy'
}
dependencies {
	// https://mvnrepository.com/artifact/org.codehaus.groovy/groovy-all
	//implementation 'org.codehaus.groovy:groovy-all:3.0.19'
	//implementation group: 'org.codehaus.groovy', name: 'groovy-all', version: '3.0.10', ext: 'pom'
	api 'org.codehaus.groovy:groovy-all:3.0.10'
}
```

Maven 项目中配置 Groovy 脚本就显得啰嗦一点，先添加 groovy-all 依赖：

```xml
    <dependency>
      <groupId>org.codehaus.groovy</groupId>
      <artifactId>groovy-all</artifactId>
      <version>3.0.10</version>
      <type>pom</type>
    </dependency>
```

Maven 文档给出一个使用 Ant plugin 直接运行 groovyc Ant Task 编译 Groovy 项目的配置示范，此插件运行于 `mvn compile` 和 `mvn test-compile` 阶段。

```xml
      <plugin>
          <artifactId>maven-antrun-plugin</artifactId>
          <executions>
              <execution>
                  <id>compile</id>
                  <phase>compile</phase>
                  <configuration>
                      <tasks>
                          <mkdir dir="${basedir}/src/main/groovy"/>
                          <taskdef name="groovyc"
                              classname="org.codehaus.groovy.ant.Groovyc">
                              <classpath refid="maven.compile.classpath"/>
                          </taskdef>
                          <mkdir dir="${project.build.outputDirectory}"/>
                          <groovyc destdir="${project.build.outputDirectory}"
                              srcdir="${basedir}/src/main/groovy/" listfiles="true">
                              <classpath refid="maven.compile.classpath"/>
                          </groovyc>
                      </tasks>
                  </configuration>
                  <goals>
                      <goal>run</goal>
                  </goals>
              </execution>
              <execution>
                  <id>test-compile</id>
                  <phase>test-compile</phase>
                  <configuration>
                      <tasks>
                          <mkdir dir="${basedir}/src/test/groovy"/>
                          <taskdef name="groovyc"
                              classname="org.codehaus.groovy.ant.Groovyc">
                              <classpath refid="maven.test.classpath"/>
                          </taskdef>
                          <mkdir dir="${project.build.testOutputDirectory}"/>
                          <groovyc destdir="${project.build.testOutputDirectory}"
                              srcdir="${basedir}/src/test/groovy/" listfiles="true">
                              <classpath refid="maven.test.classpath"/>
                          </groovyc>
                      </tasks>
                  </configuration>
                  <goals>
                      <goal>run</goal>
                  </goals>
              </execution>
          </executions>
      </plugin>
```

Ant Plugin 配置了两个 execution 节点，分别用于程序、测试程序的编译，对应的代码目录按习惯约定存放在 groovy 目录下，编译生成的文件则按对应的项目配置指定：

	${project.build.outputDirectory}
	${project.build.testOutputDirectory}

项目配置为 Groovy 类型后，执行 `mvn test` 命令时，原有的 Java 测试程序可能不会被执行，并且还需要引入 SLF4J 依赖包，否则报错。

	SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
	SLF4J: Defaulting to no-operation (NOP) logger implementation
	SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
	Configuring TestNG with: org.apache.maven.surefire.testng.conf.TestNG652Configurator@7f63425a

```xml
    <dependency>  
      <groupId>org.slf4j</groupId> 
      <artifactId>slf4j-nop</artifactId> 
      <version>1.7.2</version> 
    </dependency>
```

根据 GMavenPlus Wiki 文档指示，Ant Plugin 直接执行 groovyc Ant Task 这种配置方式由 Groovy 团队维护，会随着 Groovy 新版本发布更新。这种配置方式有以下缺点：

1. It's Ant, so there's more configuration and less convention than either of the Maven options
2. Uses stubs for mixed compilation
3. If you're using the AntRun plugin on a mixed Groovy/Java project, you'll need to have javac handle you Java instead of the Maven Compiler Plugin
4. Doesn't support Groovy mojos, except through Java 5 annotations
5. Doesn't support execution of Groovy scripts
6. Doesn't support interactive shell/console on your project

码桩 stub 泛指：系统 S 有某个依赖 D，但是用另外的模块 X 来代替 D。模块 X 就被称为一个 stub。

A stub is a controllable replacement for an Existing Dependency (or collaborator) in the system. By using a stub, you can test your code without dealing with the dependency directly.

Groovy 脚本中编写测试程序：

1. JUnit 3 使用 groovy.test.GroovyTestCase（junit.framework.TestCase 子类）或者使用 assertScript
2. JUnit 4 使用 @Test 注解，以及 groovy.test.GroovyAssert，此类继承自 org.junit.Assert。
3. JUnit 5 使用特殊的 @ParameterizedTest @TestFactory 注解；

使用 Gradle 时注意，执行 `gradle test` 命令时，会重置 CLASSPATH 环境变量，并且 Groovy 脚本中调用其它 shell 命令解析器是，也可能不会将 CLASSPATH 传递给新的 shell 进程。这些隐藏的行为会导致需要通过 shell 执行的 Java 程序运行异常，而 Maven 没有这样的问题：

```sh
# println "cmd /C set".execute().text
# print "Enquire cp by Java API: [${System.getenv("CLASSPATH")}]"
# Use Gradle API provider.environmentVariable("CLASSPATH").get()
CLASSPATH=~/.gradle/wrapper/dists/gradle-8.3-bin/lib/gradle-launcher-8.3.jar
# println "bash -c 'set'".execute().text
CLASSPATH=
```

```java ,groovy
import org.junit.Test;
import org.junit.Before;
import static groovy.test.GroovyAssert.assertEquals

class MyTest
{
    @Before
    void init()
    {
        println "MyTest run..."
    }

    @Test
    void testAssertions()
    {
        println "Enquire cp by Java API: [${System.getenv("CLASSPATH")}]"
        print_exe "java My"

        if (System.getenv("CLASSPATH").contains("groovy")) {
            assertEquals "Hello Groovy!", "java My".execute().text.trim()
        } else {
            assertEquals "Hello Groovy!", "groovy.bat src/main/groovy/My.groovy".execute().text.trim()
        }
    }

    static void print_exe(String command) {
        def stdout_stderr = new StringBuilder()
        def ps = command.execute()
        ps.consumeProcessOutput(stdout_stderr, stdout_stderr)
        ps.waitForOrKill(3000)
        println("Out: [$stdout_stderr]")
    }
}
```


## 🍀 Kotlin 编程
1. https://kotlinlang.org/docs/getting-started.html
2. https://github.com/JetBrains/kotlin/releases/tag/v1.9.10
3. https://github.com/JetBrains/kotlin-web-site/

Kotlin 是 JetBrains 开发的基于 JVM 或跨平台、基于 Sclar 语言、开源、静态类型编程语言，官方文档使用 Markdown 开源格式。

Kotlin 可以将代码编译为 JVM 字节码、JavaScript 脚本，或者原生平台（使用 LLVM 编译器后端）。Kotlin 与 Java 可以很好的混编，在互引用的情况下，Kotlin 先预编译 kt 代码文件，此时不会去引用 Java 代码中的符号避免了编译问题，然后再交给 Java 编译器完成后续编译。相比 Groovy 编译，如果与 Java 混合编程，则会因为互引用而导致编译失败或不能流畅地完成整个编译过程。

Compose Multiplatform 1.5.0 现已正式推出。 它采用适用于 Kotlin 的 Jetpack Compose 声明式 UI 框架，并将其从 Android 扩展到桌面端、iOS 和 Web。 桌面版本已经稳定，iOS 处于 Alpha 阶段，Web 支持仍为实验性。 

Compose Multiplatform 基于 Jetpack Compose 构建，这是现代 Android 开发的推荐 UI 框架，100% Kotlin。开发 Compose Multiplatform 的 JetBrains 团队与 Google 合作，定期将更改上传到 Jetpack Compose 仓库。

1. https://blog.jetbrains.com/zh-hans/kotlin/2023/05/compose-multiplatform-for-ios-alpha/
2. https://blog.jetbrains.com/zh-hans/kotlin/2023/09/compose-multiplatform-1-5-0-release/
3. https://developer.android.google.cn/jetpack/compose
4. https://developer.android.google.cn/jetpack/compose/documentation

Kotlin 主要应用领域：

1. Multiplatform - Share code on your terms and for different platforms
2. Server-side - Modern development experience with familiar JVM technology
3. Multiplatform libraries - Create a library that works across several platforms
4. Android - Recommended by Google for building Android apps
5. Data Science - From building data pipelines to productionizing machine learning models.

Kotlin/Native 支持编译不需要或不可能使用虚拟机的平台，适用于生成不需要额外运行时或虚拟机的自包含程序，目前支持如下原生目标平台：

1. macOS
2. iOS, tvOS, watchOS
3. Linux
4. Windows (MinGW)
5. Android NDK

Kotlin 编译器工具链随 IntelliJ IDEA 和 Android Studio 等开发软件分发。如果已经安装 Android Studio 就可以在其安装目录下找到，可以创建软链接方便使用：

```sh
# PowerShell
$in = @"
C:\Program Files\Android\Android Studio\plugins\Kotlin
C:\kotlin
"@ -split "\n"
new-item -type SymbolicLink -target $in[0] -path $in[1]
```

这此软件附带的是 Kotlin 基础编译工具链，也可以在官网下载最新的 kotlin-compiler-1.9.10 或者包含 Kotlin Native (LLVM backend) 多平台支持的完整版本：

1. `kapt` 调用 kotlinc 运行 *org.jetbrains.kotlin.kapt.cli.KaptCli*，kotlin-annotation-processing-cli.jar；
2. `kotlin` 调用 kotlinc 运行 Kotlin 程序；
3. `kotlin-dce-js` 调用 kotlic 运行 *org.jetbrains.kotlin.cli.js.dce.K2JSDce* 清除无效代码；
4. `kotlinc-js` 调用 kotlin 运行 *org.jetbrains.kotlin.cli.js.K2JSCompiler*；
5. `kotlinc-jvm` 调用 kotlinc；
6. `kotlinc` 主脚本，调用 kotlin-runner.jar 或者 kotlin-preloader.jar 入口加载编译器；

Kotlin/Native 专用工具链：

1. `cinterop` C 语言程序互调用工具，调用 *run_konan cinterop*；
2. `generate-platform` 调用 *run_konan generatePlatformLibraries*；
3. `jsinterop` JS 语言程序互调用工*具，调用 *run_konan jsinterop*；
4. `klib` 创建库文件，调用 *run_konan klib*；
5. `konan-lldb` 同上，调用 *lldb 并传递 konan_lldb.py 脚本*；
6. `konanc` Kotlin Native 编译器，调用 *run_konan konanc*；
7. `kotlinc-native` 同上，调用 *run_konan konanc*；
8. `run_konan` 主脚本，执行 kotlin-native-compiler-embeddable.jar 入口程序；

参考文档 09.2.3. Get started with Kotlin/Native using the command-line compiler

在当代，计算机编程语言、脚本类型层出不穷，但是语言特性未曾超出已知编程范式，OOP、FP 是最常见的

系统开发级别工业主流编程语言发展路线大概是：C --> C++ --> Java --> C# --> Rust，脚本语言更加繁荣，Lua、Python、JavaScript，还有各种系统 Shell 脚本。它些语言特性也随着版本更替不断地升级语法，基本上是向着使用更便利的方向发展。值得一提的是，LISP 作为最早期的三大编程语言之一，虽然它使用大量圆括号，但是它的语法包容能力极强。

Kotlin 作为 Java 的继承，它在功能上也不断地简化 Java 冗余的语法，和 C# 一样添加了一些常用的特性。比如集合聚合数据操作，C# 有 Linq 查询语言，Kotlin 也有集合标准库：

```java ,kotlin
val ords = listOf("first", "second", "thired", "forth")
println (ords.groupBy {it.first().uppercase()})
println (ords.slice(setOf(3,1,0)))
// {F=[first, forth], S=[second], T=[thired]}
// [forth, second, first]

val nums = (1..20).toList()
println (nums.windowed(2, 3))
println (nums.windowed(2, 3) { it.sum() })
println (nums.elementAtOrElse(20) { index -> index + 1 })
// [[1, 2], [4, 5], [7, 8], [10, 11], [13, 14], [16, 17], [19, 20]]
// [3, 9, 15, 21, 27, 33, 39]
// 21
```

除了通用的集合操作，还 List、Set、Map 专用方法，参考文档 Standard library：
10.1.16. List-specific operations
10.1.17. Set-specific operations
10.1.18. Map-specific operations


使用 `gradle init` 初始命令就可以自动创建 Groovy 或者 Kotlin 项目配置脚本，只需要根据操作步骤提示，选择相应的语言作为实现语言。主要是配置使用 groovy 插件和 org.jetbrains.kotlin.jvm 插件。
0. https://docs.gradle.org/current/userguide/building_java_projects.html
1. https://docs.gradle.org/current/userguide/groovy_plugin.html
2. https://docs.gradle.org/current/samples/index.html#kotlin
3. https://docs.gradle.org/current/samples/sample_building_kotlin_applications.html
4. https://kotlinlang.org/docs/gradle-configure-project.html

```sh
// https://mvnrepository.com/artifact/org.jetbrains.kotlin.jvm
implementation 'org.jetbrains.kotlin.jvm:org.jetbrains.kotlin.jvm.gradle.plugin:1.9.10'
plugins {
    id 'org.jetbrains.kotlin.jvm' version '1.9.10'
    id 'org.jetbrains.kotlin.multiplatform' version '1.9.10'
}
```

Kotlin 未正式发布的版本称为“找鸟版”，Early Access Preview (EAP)，一般使用最新发布版本即可，一并发布的还有 Kotlin Gradle plugin (KGP)  等插件，其版本号与 Kotlin 版本号保持一致。

Kotlin 语言的一个主要目标是多平台开发，所以它为 Gradle 构建系统提供多个插件来构建项目，这个插件称为 Kotlin Gradle plugin (KGP)。另外，手机平台开发使用 Android Gradle plugin (AGP)，它们和 Gradle 版本兼容性要求如下：

| KGP version | Gradle versions |  AGP versions |
|-------------|-----------------|---------------|
| 1.9.0       | 6.8.3 – 7.6.0   | 4.2.2 – 7.4.0 |
| 1.8.20      | 6.8.3 – 7.6.0   | 4.1.3 – 7.4.0 |
| 1.8.0       | 6.8.3 – 7.3.3   | 4.1.3 – 7.2.1 |
| 1.7.20      | 6.7.1 – 7.1.1   | 3.6.4 – 7.0.4 |
| 1.7.0       | 6.7.1 – 7.0.2   | 3.4.3 – 7.0.2 |
| 1.6.20      | 6.1.1 - 7.0.2   | 3.4.3 - 7.0.2 |

|       Target       |                KGP                 |
|--------------------|------------------------------------|
| JVM                | org.jetbrains.kotlin.jvm           |
| Multiple platforms | org.jetbrains.kotlin.multiplatform |
| JavaScript         | org.jetbrains.kotlin.multiplatform |
| Android            | Android Gradle plugin (AGP)        |

Kotlin 官方多平台手机端插件是 Kotlin Multiplatform Mobile (com.jetbrains.kmm) ，此插件提供了 project templates。
0. https://plugins.jetbrains.com/plugin/14936-kotlin-multiplatform-mobile
1. https://kotlinlang.org/docs/gradle-configure-project.html
2. https://developer.android.com/studio/releases/gradle-plugin

插件给 Grandle 新增两个 Kotlin 代码编译任务，与 Java 编译任务关联如下：

* `compileKotlin` and `compileJava`
* `compileTestKotlin` and `compileTestJava`

KGP 插件会检查 JVM target 兼容性设置，包括以下 Gradle compiler options：
1. `jvmTarget` attribute in the `kotlin` extension or task
2. [`targetCompatibility`](https://docs.gradle.org/current/userguide/java_plugin.html#sec:java-extension)

假定 `compileKotlin` 和 `compileJava` 任务分别配置了：`jvmTarget=1.8`，`targetCompatibility=15`。Gradle 8.0+ 版本中，插件检测到配置不一致，默认触发错误，可以在 `build.gradle(.kts)` 脚本中配置 `kotlin.jvm.target.validation.mode` 选项，使用以下枚举值，枚举类型定义为 `JvmTargetValidationMode`：

* `error` – the plugin fails the build; the default value for projects on Gradle 8.0+.
* `warning` – the plugin prints a warning message; the default value for projects on Gradle less than 8.0.
* `ignore` – the plugin skips the check and doesn't produce any messages.

```js ,groovy
import org.jetbrains.kotlin.gradle.tasks.*
import org.jetbrains.kotlin.gradle.dsl.jvm.*
tasks.withType(KotlinJvmCompile.class).configureEach {
    jvmTargetValidationMode = JvmTargetValidationMode.WARNING
}
```

JVM target compatibility 问题在以下两种情况下触发：

* Explicitly set different values of `jvmTarget` and `targetCompatibility`.
* Have a default configuration, and your JDK is not equal to `1.8`.

> `compileJava` task (current target is 15) and `compileKotlin` task (current target is 17) jvm target compatibility should be set to the same Java version.

如果构建脚本中没有设置 `jvmTarget` 属性，其默认值是 `null`，编译器转换为默认值 `1.8`。另外，`targetCompatibility` 属性值等于当前 Gradle 使用的 JDK 版本，或者通过 Java toolchain 配置指定的版本。假设当前使用 JDK 17，那么编译、发布的库 Gradle Module Metadata 数据就会带有：`org.gradle.jvm.version=17`。这就导致版本错配了，主程序使用的是 JDK 17，而字节码使用的是 JVM Target 1.8。

为避免出现以上 JVM target 不兼容的错误，可以手动设置对齐的 JVM 版本，或者配置 [Gradle 7.6 Java Toolchains for JVM projects] 工具链配置，Gradle 会根据指定 Java 语言版本执行构建任务，并且会在缺失工具链时检查本地已经安装编译器，或者根据配置 repositories 自动下载，此功能用于：

1. 配置使用不同于 Gradle 运行编译、测试、运行程序所使用的 JDK、JRE 版本；
2. 使用还未发布的“找鸟版”Java 语言版本进行编译、测试程序代码。

```groovy
// Gradle 7.6 Java Toolchains for JVM projects
java {
    toolchain {
        vendor = JvmVendorSpec.IBM
        implementation = JvmImplementation.J9
        languageVersion = JavaLanguageVersion.of(17)
    }
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}
```

Kotlin 和 Java 源代码集设置 JVM targets 有以下两种方式：

* 使用隐式设置 [Grandle Java toolchain].
* 显式设置 `kotlin` 扩展或者任务的 `jvmTarget` 属性，设置 `java` 扩展或任务的 `targetCompatibility` 属性。

```grooovy
import org.jetbrains.kotlin.gradle.tasks.*
import org.jetbrains.kotlin.gradle.dsl.*
tasks.withType(KotlinCompilationTask.class).configureEach {
    // compilerOptions.languageVersion = KotlinVersion.KOTLIN_2_0
    // compilerOptions.jvmTarget = JvmTarget.JVM_20
    compilerOptions.languageVersion.set(KotlinVersion.KOTLIN_1_9)
    compilerOptions.jvmTarget.set(JvmTarget.JVM_17)
}
```

What's new in Kotlin 1.7.0 - Changes in compile tasks 文档提到 Kotlin 编译任务不再继承 Gradle `AbstractCompile` 任务，只继承 `DefaultTask`，抽象任务类型中定义了 `sourceCompatibility` 和 `targetCompatibility` 输入。所以，这些输入在新版本的 Kotlin 用户脚本中不可用。

参考文档：
1. Tools - Build tools - Gradle - Configure a Gradle project
1. Tools - Build tools - Gradle - Compiler options in KGP
2. https://docs.gradle.org/current/userguide/toolchains.html
3. https://docs.gradle.org/current/userguide/kotlin_dsl.html
4. https://kotlinlang.org/docs/gradle-compiler-options.html

### ☘ Kotlin with SublimeText

为 Sublime Text 安装 LSP 插件支持，支持语言包括 Java、Groovy、Kotlin：

1. https://lsp.sublimetext.io/language_servers/#kotlin
2. https://packagecontrol.io/packages/Kotlin
3. https://github.com/fwcd/KotlinLanguageServer
4. https://github.com/GroovyLanguageServer/groovy-language-server
5. https://github.com/sublimelsp/LSP-jdtls
5. http://download.eclipse.org/jdtls/snapshots/jdt-language-server-1.29.0-202309291511.tar.gz

Java LSP 支持使用移植到 Sublime Text 环境的 [Eclipse JDT language server](https://projects.eclipse.org/projects/eclipse.jdt.ls)。

```json
"clients":
{
    "kotlinls": {
        "enabled": true,
        "command": ["c:/kotlin/server/bin/kotlin-language-server.bat"], // Update the PATH
        "selector": "source.Kotlin",
        "settings": {
            "kotlin": {
                // put your server settings here
            }
        }
    },
    "groovy": {
        "enabled": true,
        "command": ["java", "-jar", "c:/groovy/groovy-language-server/build/libs/groovy-language-server-all.jar"], // Update the PATH
        "selector": "source.groovy",
    },
    "Java(jdtls)": {
        "command": ["java", 
            "-jar", "C:/kotlin/jdtls/plugins/org.eclipse.equinox.launcher_1.6.500.v20230717-2134.jar", 
            "-configuration", "C:/kotlin/jdtls/config_win",
            "-data", "C:/kotlin/jdtls/data"
        ],
        "selector": "source.java",
        "syntaxes": ["Packages/Java/Java.sublime-syntax"],
        "languageId": "java"
    },
}
```

```sh
jars=;
for jar in c:/kotlin/server/lib/*.jar; 
do jars+="$jar;"; 
done; 
java -cp $jars org.javacs.kt.MainKt
```

使用 Sublime Text 命令面板中的 Troubleshoot Server 或者 Toggle Log Panel 提供的信息进行调试，如果不能正常提供智能提示，就根据面板输出的信息调整设置。比如根据 Java 类型加载失败等异常信息，添加相应的依赖 JAR 文件路径到 CLASSPATH 环境变量中。

Kotlink LSP 启动脚本中已经设置好 CLASSPATH，还需要添加指定版本的 lib/`kotlin-stdlib.jar`。另外 Kotlin LSP 插件也会读取用户主目录下 .config 子目录的 classpath ( classpath.bar on Windows ) 脚本获取 CLASSPATH 列表：

* Example of the `~/.config/kotlin-language-server/classpath` on Linux:
```sh
#!/bin/bash
# echo /my/path/kotlin-compiler-1.4.10/lib/kotlin-stdlib.jar:/my/path/my-lib.jar
for jar in /c/kotlin/server/lib/*.jar; do jars+="$jar;"; done; echo $jars
```

* Example of the `%HOMEPATH%\.config\kotlin-language-server\classpath.bat` on Windows:

```sh
@ehoc off
echo C:/kotlin/server/lib/kotlin-stdlib-1.9.10.jar;C:/kotlin/server/lib/kotlin-script-runtime-1.9.10.jar;
```

Sublime Text 插件系统基于 Python 脚本，它包含 GIL 全局锁，这可以保证线程之安全，但缺点是不能并行执行插件代码。所以在插件安装过程需要下载大文件，或者插件执行分析大量文件的任务时，就会导致 LSP 智能提示服务暂未处于不可用状态。

可以使用 shell 脚本简易地管理 Kotlin 编译过程，以下 `ktc` 脚本可以检测当前目录下 Kotlin 代码文件的更新状态，与 timestamp 文件更新时间进行比较，然后调用 kotlinc 命令编译所有过期的代码文件。还可以运行指定入口类如 `./ktc MainKt`：

```sh
#! /usr/bin/env bash
kts=`find *.kt`
for it in $kts;
    do if [ $it -nt timestamp ];
        then outdate="$outdate $it"; echo "$it is outdate.";
    fi; 
done;
if [ -n "$outdate" ]; then 
    echo ------- Kotlin Compiler -------
    echo kotlinc $outdate; 
    kotlinc $outdate;
fi;
if [ $? = 0 ] && [ -n $1 ]; then 
    echo -------   Run: $1   -------
    java -Djava.library.path=. $1 $*; 
else
    echo Compiler return error [$?]
fi;
touch timestamp;
```

参考 Bash 脚本编程 String comparisons 和 Compound Testing。


### ☘ Java vs. Kotlin

```java
	// Java
	java.lang.Object.getClass().getResource("/fxml/Scene.fxml")
	// Kotlin
	AppKt::class.java.getResource("/fxml/Scene.fxml")
```

### ☘ from Java to Kotlin
https://github.com/amitshekhariitbhu/from-java-to-kotlin

Kotlin 可以看作是经过简洁语法处理后的 Java 语言，得益于 JVM，Kotlin 可以很方便地将源代码转译为 Java 代码，所以具有良好的兼容性。如果已经掌握 Java 的语法，那么就可以通过了解各种简化特性的对比来快速掌握 Kotlin 语言。

从语法结构上看，Kotlin 使用和 TypeScript 相似的变量声明语法，在冒号后声明类型。还有 Any 类型和 Nullable 类型信息机制，几乎一致。语句结束的分号也是可选项，只要前后是语句，就可以省略分号。

Kotlin 一切方法/函数都是表达式，表达式是总是有值的，所以每一个方法都必有一个返回值。Kotlin 定义了 `Unit` 类型作为没有显式返回值的函数返回类型。这个类型和 TypeScript 类型 `Void` 是对位关系。

Kotlin 和 TypeScript 都有一个 `Any` 类型，它是所有类型的顶层类型。相当于 Java `Object` 类型，Kotlin 使用 Any 作为所有类的父类，并且 Kotlin 还包含 `Any?` 类型（Nullable）。

另外，Kotlin 定义了一个类构造器为私有化的 `Nothing` 类型，即无法实例化，和 TypeScript 中的 `Never` 是对位关系，表示不可能发生的程序运行状态。例如一个包含死循环的函数，其返回类型就是 `Nothing`，因为它不能返回。

Nothing 是所有类的子类，“继承”和“子类化”是两个概念，这与 Kotlin 单继承不冲突。继承关系强调“子类”实现父类功能。而子类化强调的是“子类型”，是类型关系，不是实现逻辑。也就是类型关系推导，Refinement Types = Types + Logical Predicates，由类型和谓词逻辑组合而成，其中谓词逻辑可以对类型的值域进行约束。可以在原有类型的基础上给它加个值的限定，并且可以在编译时检测是否符合谓词逻辑限定。

1. kotlin-1.9.10\core\builtins\src\kotlin\Unit.kt
2. kotlin-1.9.10\core\builtins\native\kotlin\Any.kt
3. kotlin-1.9.10\core\builtins\native\kotlin\Nothing.kt

注意，`Unit` 是单例，使用 `object` Hard keyword 表示类型定义与实例化同时执行。另外的 `Any` 和 `Nothing` 是类定义，前者使用了 `open` 修饰符（Modifier keyword）表示允许子类使用 `override` 修饰符覆盖其成员，相对的修饰符还有 `final` 和 `sealed`。

```ts ,kotlin
package kotlin

/**
 * The type with only one value: the `Unit` object. This type corresponds to the `void` type in Java.
 */
public object Unit {
    override fun toString() = "kotlin.Unit"
}

/**
 * The root of the Kotlin class hierarchy. Every Kotlin class has [Any] as a superclass.
 */
public open class Any {
    public open operator fun equals(other: Any?): Boolean
    public open fun hashCode(): Int
    public open fun toString(): String
}

/**
 * Nothing has no instances. You can use Nothing to represent "a value that never exists": for example,
 * if a function has the return type of Nothing, it means that it never returns (always throws an exception).
 */
public class Nothing private constructor()
```

这些现代编程语言特性如此相似，一个重要的原因是 LLVM、ANTLR 等等编译器构架或工具的成熟，C# 语言也是使用 ANTLR 工具实现语法解析器。ANTLR 4 是一个非常强大的语法解析器生成工具，可以替换 Lex/Yacc 或者 Flex/Bison 等语法、词法解析器相关的生成工具。

ANTLR 全称 ANother Tool for Language Recognition，是一种解析器生成工具（parser generator），基于自顶向下的递归下降 LL 算法生成语法解析器，而 YACC、Bison 等传统工具都基于 LALR 算法生成解析器。

官方文档 Welcome to our tour of Kotlin 提供一些基础特性的使用教程：

https://kotlinlang.org/docs/kotlin-tour-welcome.html
[Welcome to our tour of Kotlin!](kotlin-tour-welcome.md)
02.1. [Hello world](kotlin-tour-hello-world.md)
02.2. [Basic types](kotlin-tour-basic-types.md)
02.3. [Collections](kotlin-tour-collections.md)
02.4. [Control flow](kotlin-tour-control-flow.md)
02.5. [Functions](kotlin-tour-functions.md)
02.6. [Classes](kotlin-tour-classes.md)
02.7. [Null safety](kotlin-tour-null-safety.md)

以下是 Java vs. Kotlin 特性对比列表。

#### 💦 简化入口函数 main()

```java
	// Java
	public class Main {
		public static void main (String[] args) { /*...*/ }
	}
	// Kotlin
	fun main (args: Array<String>) { /*...*/ }
```

代码文件中编写 Top-level 函数后，编译器就会生成入口类，其名称为文件名，并且后缀 Kt，例如 `main.kt` 生成 `MainKt` 入口类，这就是 Kotlin 代码的基本组织形式。正是因为 Kotlin 编译器会默认生成的这个包装类，因此可以在 Top-level 定义类、函数、属性，这和 Java 中显式定义的包含静态入口函数的公开类具有同等作用。

Kotlin Multiplatform 项目使用公共代码共享机制，将相同功能的代码作为多个平台共享的代码以实现复用。代码文件名根据不同平台使用前缀或后缀，公共代码文件一般不使用后缀，参考如下：
https://kotlinlang.org/docs/coding-conventions.html

1. jvmMain/kotlin/Platform.jvm.kt
2. androidMain/kotlin/Platform.android.kt
3. iosMain/kotlin/Platform.ios.kt
4. commonMain/kotlin/Platform.kt

Kotlin 省略了入口类的定义，直接使用 `fun main()` 函数作为入口，入口函数可以不接收参数。编译器会自动生成入口类，参考以下 javap 命令查询得到的信息：➊ 为用户定义的无参数入口函数 `main()`，注意用户定义的函数使用 `final` 修饰，➋ 为 Kotlin 编译自动生成的默认入口函数。

```sh
$ javap MainKt
Compiled from "main.kt"
public final class MainKt {
  public static final int triple(Developer);
  public static final void main();   ➊
  public static void main(java.lang.String[]);   ➋
}
```

Kotlin 代码文件可以直接编写语句，它们是 Top-level 环境下运行，Kotlin 脚本也一样。如果，没有 Top-level 代码语句，只有类型定义，则不会以生成入口类。而是按照类型定义，生成相应的类文件。而 Java 则强制要求文件名与公开类名称要一致。

Kotlin 代码文件中，在不符合语法规范位置定义类型、函数或属性会触发以下错误：

	error: expecting a top level declaration

通常情况下，这个错误会在以下情况下发生：

1. 试图在一个函数内定义属性（包含 Getters/setters 的变量）。
2. 试图在一个代码块中定义函数、属性。
3. 在 Top-level 直接编写语句，而不是定义类型、函数或者属性。

解决这个问题只需要移动类型、函数或属性定义到正确的位置。确保你只在类、接口或文件的顶层定义函数或属性。

Java 中强制 main() 入口函数必需为入口类的公开静态函数。Kotlin 简化作为代码文件的顶级函数，
但是使用 @JvmStatic 标注在 JVM 虚拟机层面上做工作，以及使得伴随对象（companiion object），
也可以将入口函数定义在一个类对象内部：

[@JvmStatic](http://kotlinlang.org/docs/reference/java-to-kotlin-interop.html#static-methods)

```java
class AppKt ()
{
    companion object
    {
        @JvmStatic
        @Suppress("UNUSED_PARAMETER")
        fun main(args: Array<String>) 
        {
            println("Hello JavaFX Application"  )
            // launch( AppKt::class.java )
        }
    }
}
```

#### 💦 标准输出内容打印简化

```java
	// Java
	System.out.print("Java");
	System.out.println("Java");
	// Kotlin
	print("Kotlin")
	println("Kotlin")
```

简化后，直接使用 println 等等 Top-level 函数，相当于调用 `kotlin.io.println(kotlin.String)` 等函数。

#### 💦 常量、变量声明语法形式差异

```java
	// Java
	String var1 = "Variable";
	final String CONST = "Constant";
	// Kotlin
	var var1 = "Variable"
	val CONST = "Constant"
```

作为最新的编程语言，Kotlin 和 TypeScript 都“不约而同”地使用了类型后置的语法，这也是支持类型推断功能的编程语言的基本特征。

Kotlin `val` 关键字对标 Java `final`，但是可以通过定义 getters/setters 间接实现属性值的读写。

Kotlin `final` 修改符语义同对于于 Java 功能上有收缩，用于修饰不可以被子类覆盖的成员。

Kotlin `const` 修饰符定义编译期常量，这些 Top-level 常量会以内联形式嵌入，对标 Java `static final`，但使用上有稍有语法差异。

Kotlin 还引入了多种内联修饰符：

1. `inline` : 内联标记的函数会将函数转换为语句执行，节省函数调用开销；
2. `noinline`：修饰函数参数，取消传入函数的 `inline` 标记作用，使其不进行内联编译；
3. `crossinline`：修饰函数参数，使传入的 lambda 可以被间接调用，代价是不能使用 `return`;

引入 `crossinline` 相当于一个语法补丁，因为函数参数（lambda）被间接调用时，`return` 语句的作用域有歧义，是内联时的外部函数呢？还是间接调用所在的函数？所以 Kotlin 解决方法是解决提出问题的人，直接禁止 lambda parameter 间接调用。使用 `crossline` 补丁突破这个限制，但是函数体不可以再使用 `return`。

Kotlin 约定，只有 inline lambda 才可以使用 `return` 语句用于返回外层函数。

参考文档 07.05.3. [Inline functions](inline-functions.md)

13.1.1. Hard keywords

 * `val` declares a read-only [property](properties.md) or [local variable](basic-syntax.md#variables).
 * `var` declares a mutable [property](properties.md) or [local variable](basic-syntax.md#variables).

13.1.3. Modifier keywords

 * `const` marks a property as a [compile-time constant](properties.md#compile-time-constants).
 * `final` forbids [overriding a member](inheritance.md#overriding-methods).
 * `crossinline` forbids [non-local returns in a lambda passed to an inline function](inline-functions.md#non-local-returns).
 * `inline` tells the compiler to [inline a function and the lambdas passed to it at the call site](inline-functions.md).
 * `noinline` turns off [inlining of a lambda passed to an inline function](inline-functions.md#noinline).

#### 💦 static vs @JvmField and @JvmStatic

```java
// Java
interface Foo {
    public static final int answer = 42;
    public static final void sayHello() {
        // ...
    }
}

public class Bar {
	public static final String PROP = "some value";
}

// Kotlin
interface Foo {
    companion object {
        @JvmField
        val answer: Int = 42

        @JvmStatic
        fun sayHello() {
            println("Hello, world!")
        }
    }
}

const val PROP: String = "some value"
```

由于 Kotlin 没有 `static` 关键字，所以不能在类定义中声明静态入口方法。但可以通过以下方式声明具有静态特征的对象：

1. `companion object` 声明伴星对象，在类定义内部声明 Signgleton 的方式；
2. @JvmField @JvmStatic 注解伴星对象成员，将其转换为静态成员；
3. `object` 关键字定义静态单例，和 `companion object` 类似；
4. `const` 修饰符声明编译期常量，使用 Top-level declarations 声明符号；

Java 支持 import static 静态导入，Kotlin 伴星对象静态方法可以像普通方式导入。
Kotlin 伴星对象对应的是 Companion 成员，以及 Java 类定义中的 `static {}` 静态初始块。

```sh
$ rm *.class; kotlinc main.kt; javap Main; javap Main\$Companion
Compiled from "main.kt"
public final class Main {
  public static final Main$Companion Companion;
  public Main();
  public static final int access$getAnswer$cp();
  static {};
}
Compiled from "main.kt"
public final class Main$Companion {
  public final int getAnswer();
  public final void sayHello();
  public Main$Companion(kotlin.jvm.internal.DefaultConstructorMarker);
}
```

Kotlin 1.3 开始可以使用 `@JvmStatic` 和 `@JvmField` 标注，将数据对象修饰为 `companion object` 成员转换为 `static` 成员。可以通过成员签名信息观察到使用标注与不使用的差异：

```sh
$ rm *.class; kotlinc main.kt; javap Main; javap Main\$Companion
Compiled from "main.kt"
public final class Main {
  public static final Main$Companion Companion;
  public static final int answer;
  public Main();
  public static final void sayHello();
  static {};
}
Compiled from "main.kt"
public final class Main$Companion {
  public final void sayHello();
  public Main$Companion(kotlin.jvm.internal.DefaultConstructorMarker);
}
```

Kotlin 提供更方便的方式是使用 Top-level declarations，就像入口函数一样定义这些全局符号。


#### 💦 Null 和 Nullable 类型

```java
	// Java null
	final String name = null;
	String otherName;
	otherName = null;
	if(text != null){
	  int length = text.length();
	}
	// Kotlin Nullable Types
	val name : String? = null
	var otherName : String?
	otherName = null
	val length = text?.length
```

Kotlin 和 TypeScript 一样使用 Nullable 类型，除非显式定义，否则不能将 `null` 赋值给变量。通过引入 ? 运算符号，可以很方便地定义、访问 Nullable 类型。

Kotlin 中 `?` 运算符不仅用于声明 Nullable 类型，还用来做非空检测，并且 `?.` (Elvis operator）是线程安全的。相比之下，Java 这种靠 if 语句进行的非空判断并非线程安全。

13.1.5. Operators and special symbols

 * `!!` [asserts that an expression is non-nullable](null-safety.md#the-operator).
 * `?.` performs a [safe call](null-safety.md#safe-calls) (calls a method or accesses a property if the receiver is non-nullable).
 * `?:` takes the right-hand value if the left-hand value is null (the [elvis operator](null-safety.md#
 * `?` marks a type as [nullable](null-safety.md#nullable-types-and-non-nullable-types).


#### 💦 三元运算符与 if-else when 表达式

```java
	// Java
	int a = 10; 
	int b = 11; 
	int c = a > b ? a : b;
	// Kotlin
	val a = 10
	val b = 11
	val c = if (a > b) a else b

	val var_name = a ?: "Default"
	var var_name = when(var2){
	    condition1 -> value1
	    condition2 -> value2
	    ┇
	    else -> value_default
	}
```

Kotlin 没有三元运算符 Ternary Operator ( condition ? true_stat : false_stat)。

Kotlin 编写的语句，更普遍地，可以将它们看作是表达式，可以将 if-else 或者 if-else-if 阶梯结构当作一个值看待，因此和 Python 一样使用 ternary expression。

参考文档 07.02. Control flow - If expression

在 Kotlin 中检查变量是否为 null 使用 Elvis 运算符 (?:) 更简洁，而不是使用 if-else。
我们可以使用 Elvis Operator 编写简洁紧凑的代码，而不是编写 if-else。

#### 💦 字符串拼接与模板插值

```java
	// Java
	String goods = "apples";
	String count = 2;
	String message = "There are " + count + " " + goods;
	// Kotlin
	val goods = "apples"
	val count = 2
    val message = "There ${if (count>1) "are" else "is"} $count $goods"
```

参考文档 06. Basics -  String templates

#### 💦 更方便的 Range 区间数值

```java
	// Java
	import java.util.stream.*;

	public class Main {
		public static void main (String[] args) {
			int x = 10;
			IntStream range = IntStream.range(1, 10);
			Boolean yes = range.anyMatch(it -> it == x);
			System.out.println(yes? "fits in range":"not in range");
		}
	}
	// Kotlin
	val x = 10
	val y = 9
	if (x in 1..y+1) {
	    println("fits in range")
	}
```

注意，`IntStream.range()` 方法返回的是半开闭区间，不包含第二个参数指定的终止值。

Kotlin Range 使用的是全闭区间，生成的数值序列包含起始值、终止值。

#### 💦 多行字符串字面量 HereDoc 

```java
	// Java
	String text = 
		"|First Line\n"+
		"|Second Line\n"+
		"|Third Line";
	// Kotlin
	val heredoc = """
        |First Line
        |Second Line
        |Third Line
        """.trimMargin()
```

Java 13 才引入 HereDoc 概念。

#### 💦 更方便的集合操作

```java
	// Java
	final List<Integer> listOfNumber = Arrays.asList(1, 2, 3);
	final Map<Integer, String> keyValue = new HashMap<Integer, String>();
	map.put(1, "Amit");
	map.put(2, "Ali");
	map.put(3, "Mindorks");
	// Kotlin
	val listOfNumber = listOf(1, 2, 3, )
	val keyValue = mapOf(1 to "Amit",
	                 2 to "Ali",
	                 3 to "Mindorks")
```

创建空间集合：

```java
fun emptyMutableList(): Any = mutableListOf<Any?>()
fun emptyMutableSet(): Any = mutableSetOf<Any?>()
fun emptyMutableMap(): Any = mutableMapOf<Any?, Any?>()
```

#### 💦 Lambda expressions 无处不在

```java
	// Java 8 Lambda
	import java.util.stream.*;

	public class Main {
		public static void main (String[] args) {
			// String[] list = new String[]{"1", "2", "3"};
			Stream<String> ss = "123".chars().mapToObj( it -> "No."+String.valueOf((char)it));
			for (String it : ss.toArray (String[]::new))
				System.out.println(it);
		}
	}
	// Kotlin
	class Main {
	    fun main(args:Array<String>) {
	        for (it in args) {
	            println(it)
	        }
	    }
	}

	fun main() {
	    Main().main(Array<String>(3){ it -> "No."+it.toString()})
	}
```

Kotlin 创建数组时需要指定一个初始化 lambda 方法。

参考文档 Higher-order functions and lambdas：

	A higher-order function is a function that takes functions as parameters, or returns a function.
	Lambdas are code blocks enclosed in curly braces.
	Lambda expressions and anonymous functions are *function literals*.

Kotlin Lambda 是函数类型对象（Function types），语法上是花括号包括的代码块。Java 8 Lambda 形式上相似，但是它本质上是匿名函数。Kitlin 函数类型接口提供 `invoke(...)` 这是一个使用 `operator` 关键字定义的运算符实现函数，实现这个方法的函数类型可以使用两种调用形式：
`f.invoke(x)` 或者 `f(x)`，两种调用等价，语法参考：`public operator fun invoke(T): R { ... }`。

1. *kotlin.Function*  core/builtins/src/kotlin/Function.kt
2. *org.jetbrains.kotlin.name.KFunctionN*  core/compiler.common/src/org/jetbrains/kotlin/name/StandardClassIds.kt

函数字面量形式 `{ parameters -> body }`，其中 `->` 是 Function types 标志性符号。

因为 lambda 使用频率太高，经常和高阶函数一起使用，所以语法上提供精简表达：
1. 使用花括号表示一个 lambda。
2. 在只有一个参数时，默认使用 `it` 作为参数名。
3. 作为唯一参数传递时，lambda parameter 直接使用花括号替换圆括号。
4. 作为最后一个参数传递时，就可以函数调用的圆括号后面跟着 lambda expression。

匿名函数 Anonymous functions 即没有名字的函数，lambda 表达式与之相比就差 `return` 语句。

```java
	// lambda expression
	list.filter { it > 10 } ➊➋➌
	run { println("lambda expression") } ➊➌
    val product = (1..3).fold(1) { acc, e -> acc * e } ➍

	// Anonymous functions
	fun(x: Int, y: Int): Int = x + y
	ints.filter(fun(item) = item > 0)
```

不同作用域函数（Scope functions）执行 lambda，使其具有不同的上下文，参考文档 10.3.1. Function selection

| Function |Object reference|Return value|Is extension function|
|---|---|---|---|
| [`let`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/let.html) |`it`|Lambda result|Yes|
| [`run`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/run.html) |`this`|Lambda result|Yes|
| [`run`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/run.html) |-|Lambda result|No: called without the context object|
| [`with`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/with.html) |`this`|Lambda result|No: takes the context object as an argument.|
| [`apply`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/apply.html) |`this`|Context object|Yes|
| [`also`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/also.html) |`it`|Context object|Yes|

示范 `let` 和 `run` 的使用：

```java
fun main() {
    val str = "Hello"
    str.let {
        println("The string's length is ${it.length}")
    }
    str.run {
        println("The string's length: $length")
        println("The string's length: ${this.length}") // does the same
    }
}
```

Lambda 和匿名函数作为局部函数，同时也时对象表达式，与之密切相关的概念还有闭包，即引用了自由变量的函数。闭包是词法闭包的简称（Lexical Closure），自由变量 (Free Variables)，简单来说就是不属于全局作用域，又不是函数参数或局部变量的变量，简直就是“已婚人士的小金库”。闭包捕捉变量，使其成为自由变量，供 lambda 或匿名函数访问。

```java
var sum = 0
(1..3).filter { it > 0 }.forEach {
    sum += it
}
print(sum) // 6
```

Kotlin 每一个有 Receiver 的函数，都有两种引用形式，Receiver 显式或者隐式，并且可以互换：

```ts
val d: String.(Int) -> Unit = String::double
val t: (String, Int) -> Unit = String::triple
```

Kotlin 1.2 引入了 `::` 运算符用于获取成员引用、类型引用，还支持 `::foo` 简写形式替换 `this::foo`。


#### 💦 更方便的遍历迭代

```java
	// Java
	for (Character it : "123".toCharArray()) {
	  System.out.println(it);
	}

	for (Character it : "123".toCharArray()) {
	  if(it > '1') {
	    System.out.println(it);
	  }
	}
	// Kotlin
	"123".toCharArray().forEach { println(it) }
	"123".toCharArray().filter { it > '1' }.forEach { println(it) }
```

#### 💦 智能类型转换

```java
// Java
record Point(int x, int y) { }
Point p = new Point(3,4);
System.out.println( p.x() );

if (obj instanceof String s) {
    System.out.println( s.length() );
}

// Kotlin
if (o is String) {
    // now `o` is smart casted to String 
    println(o.length())
}
```

Kotlin 的智能类型转换，相同的功能在 TypeScript 称为类型收窄 Type Narrowing。

Java 16 加入了类型判断的模式匹配（Java 14 开始预览）。
1. https://www.typescriptlang.org/docs/handbook/2/narrowing.html
2. https://www.bennyhuo.com/book/Java17-Updates

还有 Kotlin when 表达式，Java 14 才有对应的 switch 表达式（12 开始预览）。


#### 💦 Java Generic Types 泛型编程
https://docs.oracle.com/javase/tutorial/java/generics/index.html

一般函数、类成员参数类型是指定的，primitives 或者 class types，也就是固定类型信息。泛型作为一种代码复用编程工具（一定程度上简化了代码结构），其类型动态随参数而变化，因此泛型也称为*参数化类型*（Parameterized Types）。泛型同时也是多态（polymorphism）的一种实现方式。

```java
class Instrucment { 
	final String note = "MIDDLE_C";
	String get() { return note; }
	void play(String note, String note2) {
		System.out.format("Instrucment.play (%s, %s)\n", note, note2); 
	}
}

class Wind extends Instrucment { 
	final String note = "A";
	String get() { return note; }
	void play(String note, String note2) {
		System.out.format("Wind.play (%s, %s)\n", note, note2); 
	}
}

public class JMain {
	public static void poly(Instrucment it) {
		it.play(it.note, it.get());
	}
	public static void main(String[] args) {
		Instrucment i1 = new Wind();
		Wind i2 = new Wind();
		i1.play(i1.note, i1.get());
		i2.play(i2.note, i2.get());
		poly(i1);
		poly(i2);
	}
}
/*Output:
Wind.play (MIDDLE_C, A)
Wind.play (A, A)
Wind.play (MIDDLE_C, A)
Wind.play (MIDDLE_C, A)
*/
```

C++ templates 模板技术也属于泛型编程的一种形式，Java 泛型是类似的技术，毕竟参考了实现。Kotlin 泛型编程和 Java 泛型有很大联系，毕竟要兼容 JVM 平台，还要兼容跨平台。

Java 泛型涉及几个关键的机制：

0. Non-Reifiable Types 不可再生类型；
1. Typ Erasure 类型擦除机制；
2. Bounded type parameters 泛型类型参数边界机制，和 Wildcards 紧密联系；
3. Bridge methods 桥接方法合成机制；

泛型类、泛型函数具体使用的类型信息可以在编译期分析得出。泛型参数 (type parameters) 通常使用字母表示，就是一个类型代号，因为它代表的具体类型可变，所以也叫做类型变量 (type variable)。泛型参数使用尖括号包括（`<T>`，Diamond），写在接口、类名后面，写在成员名、函数名前面，多个泛型参数使用逗号分隔 (`<T,K>`)，然后在类体、函数体内需要使用类型定义变量的位置使用泛型参数，将类型变量符号写在参数名、变量名前面。泛型类、泛型接口统称为泛型类型（generic types）。

Reify 指具体化、具象化，reifiable types 是指那些可具象化的类型，它们的类型信息不会被擦除，
所以是指在运行时依然保持类型信息的那些类型。例如，所有原始值类型、非泛型、raw types，
以及无边界的协变类型（invocations of unbound wildcards）。

Kotlin 额外为 inline 函数引入了 `reified` 修饰关键字来显式声明可具象化类型，让类型信息只在内联函数体内保持可用。

泛型参数名称的符号选择按照官方文档约定，Type Parameter Naming Conventions：

1. `E` - Element (used extensively by the Java Collections Framework)
2. `K` - Key
3. `N` - Number
4. `T` - Type
5. `V` - Value
6. `S`, `U`, `V` etc. - 2nd, 3rd, 4th types

假设这样的一个场景：在游戏中的角色可以获取任意的道具，不同道具使用不同类型表示。可以使用类继承机制来解决这个问题，Java 中最直接的方式就是使用 `Object` 这个顶级父类，或者像以下代码一样使用自定义基类 `Prop`。而使用泛型编程，则可以不依赖类型继承机制实现多态。代码中的 `Actor<Prop>` 类型（Parameterized Types）就是将 `Prop` 类型作为泛型参数传递给 `Actor<T>` 泛型类。在类体内部再通过 `T` 传递到成员定义语句。编译器一套处理流程下来，泛型类型就实例化出一个实例，即 `Actor<Prop>` 类型，此时的类型信息已经固定。泛型参数可以嵌套，比如 `Actor<SomeGeneric<More>>`，假设定义了 `SomeGeneric<More>` 泛型类。

```java
class Prop { }
class Sword extends Prop { }
class Hoe extends Prop { }

class Actor<T> {
	private T prop;
	public T get() { return prop; }
	public void set(T value) { prop = value; }
}
class Enemy<T> extends Actor<T> { }

public class Main {
	public static void main (String[] args) {
		Actor<Prop> actor = new Actor<Prop>();
		actor.set(new Hoe());
		System.out.format("Actor has %s\n", actor.get());
	}
}
```

Java 泛型实现方式是擦拭法（Type Erasure），即泛型相关的实现工作都发生在编译阶段。泛型类型信息在虚拟机运行程序之前被擦除。因此，Java 泛型机制的一个基本目标是在编译期确保存类型安全。

编译后的泛型类型信息擦除行为，即从函数体内擦除 `<T>` 泛型参数，这就形成了一个边界。这个边界很重要，是对象进入和离开方法的点，是编译器在编译时执行类型检查并插入转换代码的点。类型信息擦除导致编译器把 `<T>` 视为 `Object`，并且根据 `<T>` 实现安全的强制转型。

在类型擦除过程中，如果类型参数是有界的，Java 编译器将擦除所有类型参数，并将每个类型参数替换为其第一个边界；如果类型参数为无界的，则替换为 `Object`。Type erasure 处理过程如下：

1. Replace all type parameters in generic types with their bounds or Object if the type parameters are unbounded.
2. Insert type casts if necessary to preserve type safety.
3. Generate bridge methods to preserve polymorphism in extended generic types.

```java
// Erasure of Generic Types and Generic Methods
public class Node<T> {

    private T data;
    private Node<T> next;

    public Node(T data, Node<T> next) { /*...*/ }
    public T getData() { return data; }
    
}
// Because the type parameter T is unbounded, the Java compiler replaces it with Object:
public class Node {

    private Object data;
    private Node next;

    public Node(Object data, Node next) { /*...*/ }
    public Object getData() { return data; }
    
}

// In the following example, the generic Node class uses a bounded type parameter:
public class Node<T extends Comparable<T>> {

    private T data;
    private Node<T> next;

    public Node(T data, Node<T> next) { /*...*/ }
    public T getData() { return data; }

}
// The Java compiler replaces the bounded type parameter T with the first bound class, Comparable:
public class Node {

    private Comparable data;
    private Node next;

    public Node(Comparable data, Node next) { /*...*/ }
    public Comparable getData() { return data; }

}
```

为了深入 Java 泛型机制，必需结合编译器进行 type erasure 处理后的生成代码来理解。生成代码中还涉及一种称为 Bridge Methods 的合成代码。桥接方法目的是触发泛型中的多态问题（polymorphism），当一个类或接口扩展了类型参数中类型或者实现了类型参数中的接口的，这种情形下编译器就会自动生成桥接方法。

用以下代码演示，：

```java
public class Node<T> {

    public T data;

    public Node(T data) { this.data = data; }

    public void setData(T data) {
        System.out.println("Node.setData");
        this.data = data;
    }
}

public class MyNode extends Node<Integer> {
    public MyNode(Integer data) { super(data); }

    public void setData(Integer data) {
        System.out.println("MyNode.setData");
        super.setData(data);
    }
}
```

以上代码经过编译器 type erasure 处理后，生成以下代码。因为 `extends` 或者 `implements` 指定了泛型类型变量边界的缘故，子类型生成的代码会使用父类或者父接口替换掉默认的 `Object`。

1. `Node.setData(T)` 擦除类型后变成 `Node.setData(Object)`；
2. `MyNode.setData(Integer)` 经过桥接合成了 `setData(Object)` 和 `setData(Integer)` 两个方法；

如果没有桥接机制，擦除类型生成的方法 `MyNode.setData(Integer)` 就与父类产生签名冲突。所以，Java 选择加入桥接合成方法，而不是使用不同签名的方法去覆盖父亲的方法。

To solve this problem and preserve the polymorphism of generic types after type erasure, the Java compiler generates a bridge method to ensure that subtyping works as expected.

桥接方法 `MyNode.setData(object)` 保持与父类型一致，使用 `Object` 作为泛型类型变量的替代值，并且委托给原始方法 `MyNode.setData(Integer)`，编译负责插入安全的类型转换代码。

```java
public class Node {

    public Object data;

    public Node(Object data) { this.data = data; }

    public void setData(Object data) {
        System.out.println("Node.setData");
        this.data = data;
    }
}

class MyNode extends Node {

    // Bridge method generated by the compiler
    public void setData(Object data) {
        setData((Integer) data);
    }

    public void setData(Integer data) {
        System.out.println("MyNode.setData");
        super.setData(data);
    }

}
```

如果 Java 编译器没有合成桥接方法会出现什么与多态相关的问题呢？这种情况下生成的 `MyNode` 就会如下所示，注意 `MyNode.setData(Integer data)` 这个方法的签名，因为 `extends` 指定类型边界的缘故，参数类型替换为继承的类型 `Integer`，而不是父类中通常使用的 `Object`。这就意味着，子类用了不同签名的方法覆盖掉父类方法。

```java
public class MyNode extends Node {

    public MyNode(Integer data) { super(data); }

    public void setData(Integer data) {
        System.out.println("MyNode.setData");
        super.setData(data);
    }
}
```

使用桥接机制后，子类型与父类型保持了一致性，解决了多态不一致问题。这种情形下，执行以下代码，`n.setData("Hello");` 调用桥接方法 `MyNode.setData(Object)`，就会通过编译器插入的安全类型转换代码抛出一个 `ClassCastException` 类类转换异常：

```java
MyNode mn = new MyNode(5);
Node n = mn;            // A raw type - compiler throws an unchecked warning
n.setData("Hello");     // Causes a ClassCastException to be thrown.
Integer x = mn.data;

// After type erasure, this code becomes:
MyNode mn = new MyNode(5);
Node n = mn;            // A raw type - compiler throws an unchecked warning
                        // Note: This statement could instead be the following:
                        //     Node n = (Node)mn;
                        // However, the compiler doesn't generate a cast because
                        // it isn't required.
n.setData("Hello");     // Causes a ClassCastException to be thrown.
Integer x = (Integer)mn.data; 
```

使用 `Class.getMethod()` 获取一个方法的反射对象，然后用 `Method.isBridge()` 方法判断一个方法是不是桥接方法。

Typ Erasure 机制带来一些限制，主要是 Restrictions on Generics Parameterized Types：
https://docs.oracle.com/javase/tutorial/java/generics/restrictions.html

1. Cannot Instantiate Generic Types with `Primitive Types`
2. Cannot Create Instances of Type Parameters
3. Cannot Declare Static Fields Whose Types are Type Parameters
4. Cannot Use Casts or instanceof With Parameterized Types
5. Cannot Create Arrays of Parameterized Types
6. Cannot Create, Catch, or Throw Objects of Parameterized Types
7. Cannot Overload a Method Where the Formal Parameter Types of Each Overload Erase to the Same Raw Type

不能是基本类型 `Primitive Types`，例如 char byte int doube 等，因为 `Object` 无法持有基本类型。

不能对 Type Parameters 进行实例化，是因为类型擦除后，无法取得 `SomeClass<T>.class`，因为编译器生成的代码是 `SomeClass.class`，所以 `getClass()` 也是返回相同类型。

无法判断泛型类型 (`a instanceof SomeClass<T>`)，原因同上，`SomeClass<T>.class` 失效。

使用 `Class.getTypeParameters( )` 可以获取泛型类型的泛型参数列表。

以下代码演示了 Type Erasure，摘自 Thinking in Java 17.7. The mystery of erasure：

```java
//: generics/ErasedTypeEquivalence.java
import java.util.*;

public class ErasedTypeEquivalence {
    public static void main(String[] args) {
        Class c1 = new ArrayList<String>().getClass();
        Class c2 = new ArrayList<Integer>().getClass();
        System.out.println(c1 == c2);
    }
} /* Output:
true
*///:~
```

同样因为 Type Erasure，很多基本代码无法在泛型中使用，需要间接地使用 `Class.isInstance(arg)` 或者 `newInstance()` 实例化泛型参数指定的类型，额外工作是先保存 Some.class 引用。需要注意，Integer 这些基础类型的装箱类型没有默认构造函数，不能对它们使用 `newInstance()`：

```java
//: generics/Erased.java
// {CompileTimeError} (Won't compile)

public class Erased < T > {
    private final int SIZE = 100;
    public static void f(Object arg) {
        if (arg instanceof T) {} // Error
        T   var = new T(); // Error
        T[] array = new T[SIZE]; // Error
        T[] array = (T) new Object[SIZE]; // Unchecked warning
    }
} ///:~
```

为了兼容传统的没有泛型的代码，每个泛型定义了一个原始类型（JLS 4.8. Raw Types)，Raw type 擦除了参数化类型 (Parameterized Types)、或者擦除以 parameterized type 为元素的数组类型。

更精确地讲，raw type 是以下定义形式之一：

1. The reference type that is formed by taking the name of a generic type declaration without an accompanying type argument list.
2. An array type whose element type is a raw type.
3. A non-static member type of a raw type R that is not inherited from a superclass or superinterface of R.

用代码来演示说明 raw type 概念：

```java
public class Box<T> { ➊
    public void set(T t) { /* ... */ }
    // ...
}

Box<Integer> intBox = new Box<>(); ➋

Box rawBox = new Box(); ➌
```

1. 对于一个泛型类型 `Box<T>`，其中 `<T>` 是类型参数 (type arguments)。
2. 创建泛型类型实例（parameterized type）就需要向类型参数提供具体类型信息，如 `Box<Integer>`；
3. 移除 `Box<T>` 的真实类型参数（type arguments），得到的是就是 raw type。

类型信息擦除还会影响泛型的协变与逆变，泛型编程中借用了三个数学术语：

- 不变性 invariance 是指函数输入施加的某种操作不会影响到输出。
- 协变性 covariance 是指函数返回类型改变成其派生类型。
- 逆变性 contravariance 是指函数返回类型改变成其父类型。

Box<Integer> is not a subtype of Box<Number> even though Integer is a subtype of Number.
![](https://docs.oracle.com/javase/tutorial/figures/java/generics-subtypeRelationship.gif)
![](https://docs.oracle.com/javase/tutorial/figures/java/generics-payloadListHierarchy.gif)
![](https://docs.oracle.com/javase/tutorial/figures/java/generics-listParent.gif)

泛型虽然也有继承关系，但是泛型继承不同于类型继承关系，不是父类与子类型的关系，不能进行协变。Java 泛型默认为不变性（invariance）。这意味着 Box<Integer> 并不是 Box<Number> 的子类，但它们都是 `Object` 的子类，因为这些泛型类型是无边界的 `<T>`。也可以使用 Wildcards，如 `Box<?>` 或者 `Box<? extends Object>`、`Box<? extends Integer & Number>`。

在泛型参数一致的情况下，继承关系才是父类与子类的关系。例如 Collections 集合构架中的泛型类型继承关系：

ArrayList<E> implements List<E>
List<E> extends Collection<E>

这种情况下，ArrayList<String> 就是 List<String> 的子类，然后它是 Collection<String> 子类。


所以默认情形下无法进行以下赋值操作：

```java
// error: incompatible types: Actor<Sword> cannot be converted to Actor<Prop>
Actor<Prop> fall = new Actor<Sword>();
// error: incompatible types: Actor<Prop> cannot be converted to Actor<Sword>
Actor<Sword> fall = new Actor<Prop>();
```

在定义泛型变量时，如果构建器中省略泛型信息，则会提示不完全操作：

```java
// Note: Main.java uses unchecked or unsafe operations.
// Note: Recompile with -Xlint:unchecked for details.
@SuppressWarnings("unchecked")
Actor<Prop> note = new Enemy();

Actor<Prop> enemy = new Enemy<Prop>();
enemy.set(new Sword());
enemy.set(new Hoe());
```

Type Parameters 的边界概念是 Java 泛型机制实现的关键，因此 Java 通配符类型是类型系统中最棘手的问题之一，参考：
1. http://www.angelikalanger.com/GenericsFAQ/JavaGenericsFAQ.html#Wildcards
2. https://docs.oracle.com/javase/tutorial/java/generics/wildcards.html

Java 有 4 种泛型通配类型定义边界，可处理协变性，使用通配符表示一族类型：

1. `<?>` unbounded wildcard，表示所有类型；
2. `<? extends Type>` upper bound wildcard，指定某类型上边界，即 Type 及其所有子类型；
3. `<T extends A & B & C>` Multiple Bounds，指定一系列的类型作为边界；
4. `<? super Type>` lower bound wildcard，指定某类型下边界，即 Type 及其所有父类型；

多边界表达形式中，类型变量，这里指专 T，它表示所列类型的子类型，如果其中包含一个类型，那么必须出现在首位。最多只有一个类型，其它为接口，因为 Java 使用单继承。因此也只有首个类型变量会被用于经过 type erasure 处理后的生成代码中，如下代码以所示：

```java
Class A { /* ... */ }
interface B { /* ... */ }
interface C { /* ... */ }

class D <T extends B & A & C> { /* ... */ } // compile-time error

class D <T extends A & B & C> { 
	T property;
}
// after type erasure (compiler generated code):
class D {
	A property
}
```

所谓边界 (Bound)，是对泛型的类型参数的类型约束，在进行类型转换时的一种度量。如果将泛型看成是度量一个容器中元素的尺子，那么往这个容器里存放元素，只允许存储比尺子小的元素；从容器取出的元素的时候，必须用比尺子大的引用来接收。

1. `<T>` 就是无界类型参数 (可以是任何类型)，这里 T 就是一把尺子；
2. `<T extends A & B & C>` 这里 T 对应三把尺子，它们都是接口，其中只有 A 可以是一个类型；
3. 通配符号 ? 代表了多把尺子：
3.1. `<? extends T>` 最大尺子为 T，最小尺子可以无限，所以不能存入，可以读取 T 引用；
3.2. `<? super T>` 最小尺子为 T，最大尺子是 `Object`，可以存放 T 或其子类型，读取 `Object` 引用。

Collections 框架作者 Joshua Bloch 称那些只能从中读取的对象为生产者，那些只能写入的对象为消费者。为了灵活性最大化，建议在它们的输入参数使用通配符类型，并使用助记符表示：PECS (producer-extends, consumer-super)。

也就是上界 `<? extends T>` 只能往外取（生产者）。下界 `<? super Type>` 只能往里存（消费者）。

以上基本上是 Java 泛型通配编程模式的基本准则，产生这种规则的根源还是 type erasure。

在定义泛型类型时，泛型参数 `T` 定义的成员类型会在编译期通过传入参数化类型（parameterized type）确定下来，但是这部分信息不会保留到成员方法内部使用，因为擦除掉了。这就导致隐含的类型转换。

配合以下代码说明这个过程，`producer = new Enemy<Prop>` 创建泛型类型实例时，由于 type erasure，原本代码定义的 `T prop` 成员类型就会变成 `Object prop`。`set(T value)` 方法接收到的就变成了 `set(Object value)`。所以，从泛型类型读取数据、或者传入数据到泛型类型内部时，编译器就生成相应的安全的强制转型代码。

对于没有使用通配符的泛型类型，就不存在这样的问题。

使用 `javap -c Enemy` 命令可以检查生成的字节码。虽然编译后移除了泛型参数信息，但是声明泛型类型时，声明侧的泛型信息会以 Signature 的形式保留在 .class 文件的 Constant pool，可以使用 `javap -v Enemy` 查看记录在泛型类型的常量池信息列表。

```java
class Enemy<T> extends Actor<T> {
	public Enemy (T inst) { 
		prop = inst;
		System.out.format("Enemy(): %s\n", this.prop); 
	}
}
Actor<Prop> enemy = new Enemy<Prop>(new Prop());
enemy.set(new Sword());
enemy.set(new Hoe());
System.out.format("Enemy has %s\n", enemy.get());

Actor<? super Prop> consumer = new Enemy<Prop>(new Prop());
consumer.set(new Hoe());
System.out.format("Enemy[consumer] has %s\n", consumer.get());

Actor<? extends Prop> producer = new Enemy<Prop>(new Prop());
System.out.format("Enemy[producer] has %s\n", producer.get());
// error: incompatible types: Hoe cannot be converted to CAP#1
// producer.set(new Hoe());
//              ^
//   where CAP#1 is a fresh type-variable:
//     CAP#1 extends Prop from capture of ? extends Prop
// Note: Some messages have been simplified; recompile with -Xdiags:verbose to get full output
producer.set(new Hoe());
```

Java 所有表达式只产生两个结果：要么是没有东西 (`void`)，要么就是（值和变量）编译器可以推断的类型。大多数上下方中，一个表达式的类型必须与之兼容，这个类型称为 `target type`。简单起见，有两兼容策略：

1. 某些表达式（多项表达式 poly expressions），其推断类型受 `target type` 影响，同一个表达在不同的上下文中有不同类型。
2. 推断出表达式类型后，进行隐式转换到 `target type`，以执行某些操作。

如果以上两种兼容策略失效，不能获取到合适的类型，那么就会触发一个 compile-time error。

其中 Capture Conversion 和泛型密切相关。在某些情况下，编译器会推断通配符的类型，例如，定义 `List＜?＞`，但是在计算表达式时，编译器会从代码中推断出特定的类型。这种情况称为通配符捕获。Capture Conversion 类型转换失败时，就会报错，错误信息包含 *capture of* 或者 *CAP#1* 字样。`CAP#1` 对应了一个 Capture 类型，其中 CAP 是 capture 缩写，数字表示泛型参数对应其在参数列表中的位置，1 表示第一个。使用 `-Xdiags:verbose` 编译器参数可以查看更详细的信息。

```sh
$ javac -Xdiags:verbose Main.java
Main.java:48: error: method set in class Actor<T> cannot be applied to given types;
producer.set(new Prop());
        ^
  required: CAP#1
  found:    Prop
  reason: argument mismatch; Prop cannot be converted to CAP#1
  where T is a type-variable:
    T extends Object declared in class Actor
  where CAP#1 is a fresh type-variable:
    CAP#1 extends Prop from capture of ? extends Prop
1 error
```

可以看到，调用 `producer.set()` 时，因为 type erasure 导致 `set(T value)` 方法中的泛型参数 T 变成了 `Object`


显式指定泛型参数 (Explicit type specification)，语法参考：`Class.<T>method()`。

变量参数泛型 (Varargs and generic methods) 语法参考：`method(T...args)`。

参考 Java 语言规范手册 https://docs.oracle.com/javase/specs/jls/se8/html/jls-4.html

4.5. Parameterized Types
4.6. Type Erasure
4.7. Reifiable Types
4.8. Raw Types
5.1. Kinds of Conversion
5.1.10. Capture Conversion
8.1.2. Generic Classes and Type Parameters
8.4.4. Generic Methods
9.1.2. Generic Interfaces and Type Parameters

Java 8 提供了 13 种类型转换分类：

5.1.1. Identity Conversion
5.1.2. Widening Primitive Conversion
5.1.3. Narrowing Primitive Conversion
5.1.4. Widening and Narrowing Primitive Conversion
5.1.5. Widening Reference Conversion
5.1.6. Narrowing Reference Conversion
5.1.7. Boxing Conversion
5.1.8. Unboxing Conversion
5.1.9. Unchecked Conversion
5.1.10. Capture Conversion
5.1.11. String Conversion
5.1.12. Forbidden Conversions
5.1.13. Value Set Conversion

Java 8 提供了 5 种上下文：

5.2. Assignment Contexts
5.3. Invocation Contexts
5.4. String Contexts
5.5. Casting Contexts
5.5.1. Reference Type Casting
5.5.2. Checked Casts and Unchecked Casts
5.5.3. Checked Casts at Run Time
5.6. Numeric Contexts
5.6.1. Unary Numeric Promotion
5.6.2. Binary Numeric Promotion


#### 💦 Kotlin Generic Types 泛型编程
1. 【码上开学】Kotlin 的泛型 https://www.bilibili.com/video/BV1T441117u8
2. 【码上开学】Kotlin 的泛型 https://juejin.cn/post/6844903929734496263

Kotlin 泛型与 Java 泛型同源，基于类型擦拭法（Type Erasure），泛型的实现工作都发生在编译阶段，
泛型类型信息在虚拟机运行程序之前被擦除。

Java 有 3 种泛型通配类型处理协变性，使用通配符，可推断表示一族类型：

1. `<?>` unbounded wildcard，表示所有类型；
2. `<? extends Type>` upper bound wildcard，指定某类型上边界，即 Type 及其所有子类型；
3. `<? super Type>` lower bound wildcard，指定某类型下边界，即 Type 及其所有父类型；

Kotlin 则引入了 `in` 和 `out` 关键字替换 extends 和 super 两种通配形式，表达更加清晰。
按照 Collections 框架作者 PECS (producer-extends, consumer-super) 标注，
out 修饰符称为协变注解，用于生产者；in 修饰符称为逆变注解，用于消费者；

参考官方文档，Platforms - Calling Java from Kotlin - Java generics in Kotlin，
Concepts - Generics: in, out, where，以下是文档中罗列的两者之间的差异：

* Java's wildcards are converted into type projections:
  * `Foo<? extends Bar>` becomes `Foo<out Bar!>!`
  * `Foo<? super Bar>` becomes `Foo<in Bar!>!`

* Java's raw types are converted into star projections:
  * `List` becomes `List<*>!` that is `List<out Any?>!`

Kotlin 泛型没有 Java 那样难搞的通配符号表达，但涉及以下两个基本概念：

1. 声明处型变（declaration-site variance），泛型参数使用在入参和返回值中；
2. 类型投影（type projections），协变、逆变中涉及的类型映射；

对于多个边界的表达，使用 `where` 从句表达，和 SQL 或者 Rust 的语法结构相似。

Java 使用单个 ? 号作为 ? extends Object 泛型通配符的简写表达形式。 
Kotlin 等效的符号是 * 号，star projections，通配类型相当于 Any。

举例来说，假设定义有 `interface Function<in T, out U>`，那么有以下星型投影使用含义：

*  `Function<*, String>` ==> `Function<in Nothing, String>`
*  `Function<Int, *>` ==> `Function<Int, out Any?>`
*  `Function<*, *>` ==> `Function<in Nothing, out Any?>`

Star projections 也是唯一支持使用 `is` 关键字判断类型的表达方式:

```kotlin
if (a is List<Int>) // Error: cannot check if it is really a List of Ints
// but
if (a is List<*>) // OK: no guarantees about the contents of the list
```

13.1.1. Hard keywords

 * `in`
     - specifies the object being iterated in a [for loop](control-flow.md#for-loops).
     - is used as an infix operator to check that a value belongs to [a range](ranges.md),
       a collection, or another entity that [defines a 'contains' method](operator-overloading.md#in-operator).
     - is used in [when expressions](control-flow.md#when-expression) for the same purpose.
     - marks a type parameter as [contravariant](generics.md#declaration-site-variance).

13.1.2. Soft keywords

 * `where` specifies the [constraints for a generic type parameter](generics.md#upper-bounds).

13.1.3. Modifier keywords

 * `out` marks a type parameter as [covariant](generics.md#declaration-site-variance).
 * `reified` marks a type parameter of an inline function as [accessible at runtime](inline-functions.md#reified-type-parameters).



#### 💦 Data classs 简化 getters/setters 属性接口

```java
	// Java
	public class Developer {

		private String name;
		private int age;

		public Developer(String name, int age) {
		    this.name = name;
		    this.age = age;
		}

		public String getName() {
		    return name;
		}

		public void setName(String name) {
		    this.name = name;
		}

		public int getAge() {
		    return age;
		}

		public void setAge(int age) {
		    this.age = age;
		}

		@Override
		public boolean equals(Object o) {
		    if (this == o) return true;
		    if (o == null || getClass() != o.getClass()) return false;

		    Developer developer = (Developer) o;

		    if (age != developer.age) return false;
		    return name != null ? name.equals(developer.name) : developer.name == null;
		}

		@Override
		public int hashCode() {
		    int result = name != null ? name.hashCode() : 0;
		    result = 31 * result + age;
		    return result;
		}

		@Override
		public String toString() {
		    return "Developer(" +
		         "name=" + name + ", age=" + age +
		         ')';
		}
	}
	// Kotlin
	data class Developer(val name: String, val age: Int)
```

此功能对应 Java 数据类（Java 14 开始预览）。

```java
// Java
record Point(int x, int y) { }
Point p = new Point(3,4);
System.out.println( p.x() );
```

Kotlin 提供了多个修饰符实现 Object declarations：

1. `object` 关键字实现 Singleton 编程模式，定义一个类型同时进行实例化，即类型和实例同名。 
2. `data object` 关键字组合定义了 Singleton 同时，提供基本的 `toString()` 和 `equals()`、`hashCode()` 方法实现。
3. `companion object` 关键字组合定义伴星对象，即类型内部定义的数据对象。

Kotlin 1.3 开始可以使用 `@JvmStatic` 和 `@JvmField` 标注，将数据对象修饰为 `companion object` 成员转换为 `static` 成员。

在比较 `data objects` 只能使用严格比较运算符 `==`，禁止使用引用比较运算符 `===`。

类似的还有 `data classe`，它为类开提供默认的方法实现：

```kotlin
data class User(val name: String, val age: Int)
```

编译器会为 User 这个数据类的主构造函数中声明的所有属性实现以下成员：

* `.equals()`/`.hashCode()` 方法对；
* `.toString()` 返回内容 `"User(name=John, age=42)"`
* [`.componentN()`](destructuring-declarations.md) 解构赋值接口函数；
* `.copy()` 拷贝函数用于复制实例，并根据传入参数修改某些成员的值。

为了确保代码一致性，数据类必须满足以下要求：

* The primary constructor needs to have at least one parameter.
* All primary constructor parameters need to be marked as `val` or `var`.
* Data classes cannot be abstract, open, sealed, or inner.
* Providing explicit implementations for the `.componentN()` and `.copy()` functions is not allowed.


13.1.1. Hard keywords

 * `class` declares a [class](classes.md).
 * `object` declares [a class and its instance at the same time](object-declarations.md).

13.1.3. Modifier keywords

 * `data` instructs the compiler to [generate canonical members for a class](data-classes.md).
 * `companion` declares a [companion object](object-declarations.md#companion-objects).


#### 💦 Class Constructors

```java
	// Java
	public class Person {
	    public Person() { /*...*/ }
	}

	// Kotlin
	class Empty
	class DontCreateMe private constructor() { /*...*/ }
	class Customer public @Inject constructor(name: String) { /*...*/ }

	class Person { /*...*/ }
	class Person(firstName: String) { /*...*/ }
	class Person constructor(firstName: String) { /*...*/ }

	class Person(val name: String) { ➊
	    val children: MutableList<Person> = mutableListOf()
	    constructor(name: String, parent: Person) : this(name) { ➋
	        parent.children.add(this)
	    }
	}
```

Kotlin 的类定义语法与 Java 有很大的不同，除了使用 `object` 或才 `data object` 关键字定义的 Singleton 类型，还可以使用 `data class` 定义数据类型。类型的构造器的语法差别很大，Java 类型构造函数和类型名称相同。Kotlin 类型构造函数则始终使用 `constructor` 关键字定义，没有函数名，因为它本身不是一个函数，而是类型实例化过程的代码块。

Kotlin 类型构造器分主、次两个级别：

1. ➊ A class in Kotlin has a _primary constructor_ and 
2. ➋ possibly one or more _secondary constructors_.

主构造器就是紧跟类名称后，或者成员列表后的 `constructor`，次要构造函数则定义在类体内。在不需要对构建器使用标注或 visibility modifiers，这种情况下可以省略 `constructor` 关键字，此时主构造器只剩下类型参数列表。

	class header = type parameters + primary constructor + class body

构造器用于初始化 class header 声明的类成员，class header 不能包含任何可运行代码，要在实例化过程运行的代码可以编写到 _initializer blocks_ 初始化代码块中，语法形式：`init {}`。可以多次使用，并且按初始化块出现的顺序执行

如果类定义显式声明主构造函数，则每个次要构造器都需要委托给主构造函数，或者
直接或间接通过其它次要构造器实现。次要构造器必须通过 `this` 关键字委托主构造器，如示范代码 ➋ `this(name)`。

所有初始化代码块（initializer blocks）最终会成为主构造器的一部分，并且会在次构造器代码执行之前。即使没有显式声明主构造器，这个过程也会隐式进行。

获取成员引用、类型引用可以使用 `::` 运算符，它可以用来引用构造器引用，参考以下接口：

1. *kotlin.reflect.KFunction*  libraries/stdlib/src/kotlin/reflect/KFunction.kt

默认声明的类型对应 Java 中定义的 final class，除非使用 `open` 关键字让其可以派生子类。构造器则为 `public` 可见性修饰。

使用 `sealed` 关键字声明密封类也是抽象类，_Sealed_ classes 或者 interfaces 表示类型层次约束，提供更多的继承控制。Sealed classes 包含抽象类和枚举的优势：抽象类表示的灵活性和枚举常量的受限性。

Kotlin 没有 `new` 关键字，类型实例化使用类名称加圆括号表示调用构建器。如果内部定义了 `companion` 对象，则可以使用类名来获取 Component 对象的引用。

类数据成员可以使用 `val` 或者 `var` 关键字进行定义，区别是前者只能实现 getter 访问器。

```java
class Cc(name:String)
class Cval(val name: String)
class Cvar(var name: String)
class Cmix(var name:String)
{
    var Message: String = name
        get() = field
}
```

注意，只允许主构造器中使用 `val` 或者 `var` 关键字来定义类成员。

如果省略 `val` 或者 `var` 关键字，则构造器参数列表中所有参数仅仅作为 class body 代码块的参数使用。类型成员也可以在 class body 中定义，可以和参数列表定义成员混用，如 `Cmix` 类型就包含 name 和 Message 两个属性，其中 `field` 关键字提供 Backing fields 支持，由编译器生成一个隐式字段保存数据避免属性的递归调用问题。也可以手动使用 Map 容器保存数据，实现 Backing properties。Kotlin 这种“复用”形式的语法很常见，type parameters 既作为参数列表，又作为主构造器，并且还作为类成员列表使用，这也就是为何 Kotklin 代码相当简洁的原因。

```sh
$ kotlinc main.kt some.kt
main.kt:57:10: warning: parameter 'name' is never used
class Cc(name:String)
         ^
$ javap Cc Cvar Cval
Compiled from "main.kt"
public final class Cc {
  public Cc(java.lang.String);
}
Compiled from "main.kt"
public final class Cval {
  public Cval(java.lang.String);
  public final java.lang.String getName();
}
Compiled from "main.kt"
public final class Cvar {
  public Cvar(java.lang.String);
  public final java.lang.String getName();
  public final void setName(java.lang.String);
}
```

使用 `::` 运算符获取 Constructor references。

引用运算符属性 Reflection 功能，根据引用目标的不同，此运算符返回的引用类型包括：

[`KClass`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html)
[`KFunction<out R>`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-function/) 
[`KProperty`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property/index.html)
[`KMutableProperty<V>`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-mutable-property/index.html)

Function references 类型属于 `KFunction<out R>` 子类，根据参数列表和返回值差异化表达，例如 `KFunction3<T1, T2, T3, R>`。使用 `val` 和 `var` 定义的属性对应引用类型为 `KProperty` 和 `KMutableProperty<V>`。

Kotlin `::` 运算符还可以通过类型实例获取引用，属于绑定的引用，绑定到了实例对象上：

0. Bound class references (`obj::class`)
1. Bound function and property references (`obj::PropertyName` or `this::PropertyName`)
2. Bound constructor references (`obj::InnerClassName`)


Kotlin 1.4 完善了 callable references，功能提升内容包含：

* References to functions with default argument values
* Function references in `Unit`-returning functions 
* References that adapt based on the number of arguments in a function
* Suspend conversion on callable references 

```java
fun foo(x: Int, vararg y: String) {}

fun use0(f: (Int) -> Unit) { println(f) }
fun use1(f: (Int, String) -> Unit) { println(f) }
fun use2(f: (Int, String, String) -> Unit) { println(f) }

fun test() {
    use0(::foo) 
    use1(::foo) 
    use2(::foo) 
}
/*Output:
Function1<java.lang.Integer, kotlin.Unit>
Function2<java.lang.Integer, java.lang.String, kotlin.Unit>
Function3<java.lang.Integer, java.lang.String, java.lang.String, kotlin.Unit>
 */
```

当上下文提供的类型信息缺失，编译器就可能识别不了函数重载形式，这就需要添加额外的类型信息来解决 Overload resolution ambiguity 问题：

```sh
error: callable reference resolution ambiguity:
public constructor Delegate() defined in Delegate
public constructor Delegate(map: MutableMap<String, Any?>) defined in Delegate
```

根据 Kotlin 文档说明的代码规范约定，Class layout 应该按以下顺序组织：

1. Property declarations and initializer blocks
2. Secondary constructors
3. Method declarations
4. Companion object

并且，类成员应该以功能编排，而不是按名称的字典顺序编排。

Kotlin 程序寻找符号的一般流程：Locals → Extension receiver → Class → Package → Imports。

 13.1.1. Hard keywords

 * `class` declares a [class](classes.md).
 * `object` declares [a class and its instance at the same time](object-declarations.md).
 * `interface` declares an [interface](interfaces.md).
 * `super`
     - [refers to the superclass implementation of a method or property](inheritance.md#calling-the-superclass-implementation).
     - [calls the superclass constructor from a secondary constructor](classes.md#inheritance).
 * `this`
     - refers to [the current receiver](this-expressions.md).
     - [calls another constructor of the same class from a secondary constructor](classes.md#constructors).
 
13.1.2. Soft keywords

 * `constructor` declares a [primary or secondary constructor](classes.md#constructors).
 * `init` begins an [initializer block](classes.md#constructors).

13.1.3. Modifier keywords

 * `abstract` marks a class or member as [abstract](classes.md#abstract-classes).
 * `data` instructs the compiler to [generate canonical members for a class](data-classes.md).
 * `open` allows [subclassing a class or overriding a member](classes.md#inheritance).
 * `sealed` declares a [sealed class](sealed-classes.md) (a class with restricted subclassing).
 * `internal` marks a declaration as [visible in the current module](visibility-modifiers.md).
 * `private` marks a declaration as [visible in the current class or file](visibility-modifiers.md).
 * `protected` marks a declaration as [visible in the current class and its subclasses](visibility-modifiers.md).
 * `public` marks a declaration as [visible anywhere](visibility-modifiers.md).

13.1.5. Operators and special symbols

 * `::` creates a [member reference](reflection.md#function-references) or a [class reference](reflection.md#class-references).


#### 💦 initializer blocks in class

```java
	// Java
	public class User {
	    {  //Initialization block
	        System.out.println("Init block");
	    }

		static { /*...*/ }
	}
	// Kotlin
	class User {
	    init { // Initialization block
	        println("Init block")
	    }
	}
```

13.1.2. Soft keywords

 * `constructor` declares a [primary or secondary constructor](classes.md#constructors).
 * `init` begins an [initializer block](classes.md#constructors).

13.1.3. Modifier keywords

 * `lateinit` allows initializing a [non-nullable property outside of a constructor](properties.md#late-initialized-properties-and-variables).


#### 💦 委托编程模式 Delegation Pattern
[Delegation pattern](https://en.wikipedia.org/wiki/Delegation_pattern) 

已经证明 Delegation 编程模式是一种实现继承机制的良方，组合优于继承 (Favor composition over inheritance)。

Kotlin 原生支持 Delegation pattern，只需使用 `by` 关键字，无需要任何样板代码，zero boilerplate code，由编译器自动生成。委托有两种基本形式：Interfaces Delegation 和 Properties Delegation。

Kotlin 官方文档提供了以下内容：

	📜 07.04.16. [Delegated properties](delegated-properties.md)
	1. Standard delegates
	1.1. Lazy properties
	1.2. Observable properties
	2. Delegating to another property
	3. Storing properties in a map
	4. Local delegated properties
	5. Property delegate requirements
	6. Translation rules for delegated properties
	6.1. Optimized cases for delegated properties
	6.2. Translation rules when delegating to another property
	7. Providing a delegate

以下代码演示 `Derived` 类型通过委托所有公共成员到指定对象来实现 `Base` 接口。派生类中使用 `override` 关键字声明用于覆盖父类的成员，成员定义使用了 Single-expression functions 语法：

```kotlin
interface Base {
    val msg: String
    fun sayHello()
}

class BaseImpl : Base {
    override val msg = "BaseImpl"
    override fun sayHello() = println("Hello $msg!")
}

class Derived (b: Base) : Base by b {
    // This property is not accessed from b's implementation of `sayHello`
    override val msg = "Derived"
    override fun sayHello() = println("HELLO $msg!")
}

fun main() {
    val b = BaseImpl()
    Derived(b).sayHello()
}
```

需要注意的是：`Derived` 中覆盖的 msg 属性并不能被 `BaseImpl` 的成员访问到。

派生类的 supertype list 中的 `by` 关键字引导的从句表示 `b` 变量会存储到 `Derived` 类型的对象内部，编译器将生成 `Base` 的所有需要转发到 `b` 的方法。也就是通过委托，使得 `Derived` 类型拥有了 `BaseImpl` 实现的方法。其实就是委托调用了 `b` 实现的方法。

Delegated properties，同样需要使用 `by` 关键字，只是用在 `val
` 或 `var` 关键字声明的属性类型中，差别在于前者定义只读属性、变量。语法如下：

val/var <property name>: <Type> by <expression>

紧跟 `by` 之后的表达式是一个委托对象，属性访问器 `get()` 还有 `set()` 会委托给对应的 `getValue()` 和 `setValue()` 方法。属性委托不需要实现接口，只要是使用 `operator` 关键字定义了这两个方法（运算符实现方法）的类型都是合法的委托对象。通过属性委托，可以将常用的属性统一管理，只实现一次然后重复利用：

* _Lazy_ properties: the value is computed only on first access.
* _Observable_ properties: listeners are notified about changes to this property.
* Storing properties in a _map_ instead of a separate field for each property.

以下代码演示了属性委托机制，读写已委托对象的属性时就会执行委托对象提供的方法：

```java
import kotlin.reflect.KProperty

class Example {
    var p: String by Delegate()
}

class Delegate {
    operator fun getValue(thisRef: Any?, property: KProperty<*>): String {
        return "$thisRef, thank you for delegating '${property.name}' to me!"
    }
 
    operator fun setValue(thisRef: Any?, property: KProperty<*>, value: String) {
        println("$value has been assigned to '${property.name}' in $thisRef.")
    }
}
```

委托对象中的方法定义要求：

* `thisRef` must be the same type as, or a supertype of, the *property owner* (for extension properties, it should be the type being extended).
* `property`  must be of type `KProperty<*>` or its supertype.
* `value` must be of the same type as the property (or its supertype).

需要注意，不能在 `getValue()` 或者 `setValue()` 方法中分别对受委托的属性进行读取或者写入操作，因为这会导致循环调用。

13.1.1. Hard keywords

 * `class` declares a [class](classes.md).
 * `interface` declares an [interface](interfaces.md).
 * `object` declares [a class and its instance at the same time](object-declarations.md).
 * `val` declares a read-only [property](properties.md) or [local variable](basic-syntax.md#variables).
 * `var` declares a mutable [property](properties.md) or [local variable](basic-syntax.md#variables).

13.1.2. Soft keywords

 * `by`
     - [delegates the implementation of an interface to another object](delegation.md).
     - [delegates the implementation of the accessors for a property to another object](delegated-properties.md).
 * `delegate` is used as an [annotation use-site target](annotations.md#annotation-use-site-targets).
 * `field` is used as an [annotation use-site target](annotations.md#annotation-use-site-targets).

13.1.3. Modifier keywords

 * `abstract` marks a class or member as [abstract](classes.md#abstract-classes).
 * `override` marks a member as an [override of a superclass member](inheritance.md#overriding-methods).
 * `operator` marks a function as [overloading an operator or implementing a convention](operator-overloading.md).


##### 1. Standard delegates
------------

Kotlin 标准库提供了一系列 Standard delegates 用来委托局部变量，继承自 kotlin.util.Lazy 或者 kotlin.properties.ReadWriteProperty<Any?, T>，ReadOnlyProperty<Any?, T>：

1.  [`lazy()`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/lazy.html) 
	libraries/stdlib/src/kotlin/util/Lazy.kt
	libraries/stdlib/common/src/kotlin/KotlinH.kt
	延时初始化委托用来实现 lazy property，`lazy()` 函数的 initializer 参数接收一个 lambda （作为委托对象的 `getValue()` 方法使用）并返回 `Lazy<T>` 实例，只在首次访问受委托的*只读属性*时执行。因为 lazy 是函数，所以有两种使用形式：`by laze(...)` `= lazy(...)`。

	```java
	/**
	 * Creates a new instance of the [Lazy] that uses the specified initialization function [initializer].
	 *
	 * The [mode] parameter is ignored. */
	public expect fun <T> lazy(mode: LazyThreadSafetyMode, initializer: () -> T): Lazy<T>

	public enum class LazyThreadSafetyMode { SYNCHRONIZED, PUBLICATION, NONE, }

	/**
	 * Represents a value with lazy initialization.
	 *
	 * To create an instance of [Lazy] use the [lazy] function.
	 */
	public interface Lazy<out T> {
	    /**
	     * Gets the lazily initialized value of the current Lazy instance.
	     * Once the value was initialized it must not change during the rest of lifetime of this Lazy instance.
	     */
	    public val value: T

	    /**
	     * Returns `true` if a value for this Lazy instance has been already initialized, and `false` otherwise.
	     * Once this function has returned `true` it stays `true` for the rest of lifetime of this Lazy instance.
	     */
	    public fun isInitialized(): Boolean
	}
	```

	Lazy<T> 泛型的定义接口内容包括：

	1.  Read-only Property `value`
		Gets the lazily initialized value of the current Lazy instance. Once the value was initialized it must not change during the rest of lifetime of this Lazy instance.

	2.  Function `isInitialized()`
		Returns true if a value for this Lazy instance has been already initialized, and false otherwise. Once this function has returned true it stays true for the rest of lifetime of this Lazy instance.

	3.  Extension Function `getValue`
		An extension to delegate a read-only property of type T to an instance of Lazy.

	Lazy properties 默认以 *synchronized* 方式单一线程中求值，确保线程安全。如果不需要同步方式初始化委托对象，可以向 `lazy()` 函数传入 `LazyThreadSafetyMode.PUBLICATION` 枚举值参数。如果确定单线程访问，可以传入 `LazyThreadSafetyMode.NONE` 枚举值参数禁用同步。

	以下代码演示委托只读的局部变量 `memorizedFoo` 实现 lazy property，假定 Foo 类型存在并且包含 `isValid()` 成员方法。注意逻辑运算符 `&&`，当一条件求值为 false 即返回，绝不会执行后续的条件求值过程：

	```java
	fun example(computeFoo: () -> Foo) {
	    val memorizedFoo by lazy(computeFoo)

	    if (someCondition && memorizedFoo.isValid()) {
	        memorizedFoo.doSomething()
	    }
	}

	// Top-level lazy property
	val lazyValue: String by lazy {
	    println("computed!")
	    "Hello"
	}

	fun main() {
	    println(lazyValue)
	    println(lazyValue)
    	example(::Foo)
	}
	```

	1. The `memorizedFoo` variable will be computed on first access only.
	2. If `someCondition` fails, the variable won't be computed at all.

2.  [`Delegates.observable()`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.properties/-delegates/observable.html)
	libraries/stdlib/src/kotlin/properties/Interfaces.kt
	libraries/stdlib/src/kotlin/properties/Delegates.kt
	可观察委托，当受委托属性值变量时触发 afterChange 并调用参数传入的 lambda parameter。

	```java
	var observed = false
	var max: Int by Delegates.observable(0) { property, oldValue, newValue ->
	    observed = true
	}

	println(max) // 0
	println("observed is ${observed}") // false

	max = 10
	println(max) // 10
	println("observed is ${observed}") // true
	```

3.  [`vetoable()`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.properties/-delegates/vetoable.html)
	libraries/stdlib/src/kotlin/properties/Delegates.kt
	可否决委托，根据 lambda parameter 返回的布尔值来决定是否要更新受委托的属性值。 

	```java
	var max: Int by Delegates.vetoable(0) { property, oldValue, newValue ->
	    if (newValue > oldValue) true else throw IllegalArgumentException("New value must be larger than old value.")
	}

	println(max) // 0

	max = 10
	println(max) // 10

	// max = 5 // will fail with IllegalArgumentException
	```

##### 2. Delegating to another property
------------

Kotlin 还可以将属性委托给其它属性，这种委托形式不需要自行定义委托对象，而是使用引用运算符 `::` 来限定作为委托对象的属性名称，以获取其类型引用或者成员引用，编译器会自动为委托属性生成相应的 getters/setters 访问器。例如 `this::delegate` 或者 `MyClass::delegate`。

可以受托的属性包括以下形式：

* A top-level property
* A member or an extension property of the same class
* A member or an extension property of another class

```java
var topLevelInt: Int = 0
class ClassWithDelegate(val anotherClassInt: Int)

class MyClass(var memberInt: Int, val anotherClassInstance: ClassWithDelegate) {
    var delegatedToMember: Int by this::memberInt
    var delegatedToTopLevel: Int by ::topLevelInt
    
    val delegatedToAnotherClass: Int by anotherClassInstance::anotherClassInt
}
var MyClass.extDelegated: Int by ::topLevelInt
```

这种委托形式可以用于解决 backward-compatible 兼容问题，`@Deprecated` 注解就是用于声明过时接口的一种委托。

```java
class MyClass {
   var newName: Int = 0
   @Deprecated("Use 'newName' instead", ReplaceWith("newName"))
   var oldName: Int by this::newName
}
fun main() {
   val myClass = MyClass()
   // Notification: 'oldName: Int' is deprecated.
   // Use 'newName' instead
   myClass.oldName = 42
   println(myClass.newName) // 42
}
```

##### 3. Storing properties in a map
------------

由于不能在 `getValue()` 或者 `setValue()` 方法中分别对受委托的属性进行读取或者写入操作，因为这会导致循环调用。这就需要将委托属性的数据保存在其它变量中，使用 Map 容器保存数据，实现 Backing properties，这是一种通用方案。可以对 `field` 关键字赋值，进行间接处理避免递归调用问题，编译器会自动提供后备字段 (Backing fields)。

使用 map 实现 Backing properties 经常用于解释 JSON 或者其它动态数据处理任务中。

```java
class User(val map: Map<String, Any?>) {
    val name: String by map
    val age: Int     by map
}
```

示范代码中的 `User` 类型接收一个 map 对象实现 read-only 属性的委托：

```java
val user = User(mapOf(
    "name" to "John Doe",
    "age"  to 25
))
```

使用 `var` 关键字，并且配合 `MutableMap`，`Map` 子类实现 read-write 属性的委托：

```java
class MutableUser(val map: MutableMap<String, Any?>) {
    var name: String by map
    var age: Int     by map
}
```

Delegated properties 通过字符串 keys 读写 MutableMap 中的数据，并且与同名的属性关联：

```java
class User(val map: MutableMap<String, Any?>) {
    val name: String by map
    val age: Int     by map
}

fun main() {
    val user = User(mutableMapOf(
        "name" to "John Doe",
        "age"  to 25,
    ))
    user.age ++
    println(user.age)  // Prints 26
}
```


##### 4. Translation rules for delegated properties
------------

按官方文档 Translation rules for delegated properties 所述，Kotlin 编译器会为一些委托属性生成辅助属性。所谓转换规则 Translation rules 即编译器为实现委托机制而生成的代码中包含的逻辑规则。

比如，委托 `prop` 属性会生成隐式的 `prop$delegate` 辅助属性，属性访问器只是简单委托给这个额外的属性。假设定义了 `MyDelegate` 委托，那么编译器生成的代码演示如下：

```java
class C {
    var prop: Type by MyDelegate()
}

// For the code above, the compiler generates the following code:
class C {
    private val prop$delegate = MyDelegate()
    var prop: Type
        get() = prop$delegate.getValue(this, this::prop)
        set(value: Type) = prop$delegate.setValue(this, this::prop, value)
}
```

Kotlin 编译器会提供所需的与 `prop` 相关的信息给委托对象中定义的方法：

1. the first argument `this` refers to an instance of the outer class `C`, 
2. and `this::prop` is a reflection object of the `KProperty` type describing `prop` itself.

属性委托可以优化，委托属于以下情形之一可以省略 `$delegate` 字段节省内存：

* A referenced property（委托给使用 `::` 运算符获取的引用对象）
* A named object（委托给命名的 `object` 类型）
* A final `val` property with a backing field and a default getter in the same module
* A constant expression, enum entry, `this`, `null`.

将属性委托给其它属性就属于其中的一种情形，Translation rules 对应的生成代码中就不含 `$delegate` 字段，编译器生成访问器代码会直接读写受托属性。编译器生成代码演示如下：

```java
class C<Type> {
    private var impl: Type = ...
    var prop: Type by ::impl
}

// For the code above, the compiler generates the following code:
class C<Type> {
    private var impl: Type = ...

    var prop: Type
        get() = impl
        set(value) {
            impl = value
        }
    
    fun getProp$delegate(): Type = impl // This method is needed only for reflection
}
```

##### 5. Providing a delegate
------------

最后，可以在委托对象中定义一个 `provideDelegate` 运算符方法实现，用于定制委托对象实例化过程，只要 `by` 关键字右侧的委托对象实现了这样的成员方法、或扩展方法都可以。

运算符 `provideDelegate` 方法的参数和 `getValue` 方法一致：

* `thisRef` must be the same type as, or a supertype of, the _property owner_ (for extension properties, it should be the type being extended);
* `property` must be of type `KProperty<*>` or its supertype.

这个功能的一个应用场景是在属性初始化时检查属性的一致性。

比如，以下定义 `ResourceLoader` 委托对象用于在绑定属性之前检测属性名是否合乎规范，假定存在 `ResourceID` 类型且包含相应的枚举值属性：

```java
class ResourceDelegate<T> : ReadOnlyProperty<MyUI, T> {
    override fun getValue(thisRef: MyUI, property: KProperty<*>): T { ... }
}
    
class ResourceLoader<T>(id: ResourceID<T>) {
    operator fun provideDelegate(
            thisRef: MyUI,
            prop: KProperty<*>
    ): ReadOnlyProperty<MyUI, T> {
        checkProperty(thisRef, prop.name)
        // create delegate
        return ResourceDelegate()
    }

    private fun checkProperty(thisRef: MyUI, name: String) { ... }
}

class MyUI {
    fun <T> bindResource(id: ResourceID<T>): ResourceLoader<T> { ... }

    val image by bindResource(ResourceID.image_id)
    val text by bindResource(ResourceID.text_id)
}
```

`MyUI` 实例化时，已经委托的 image 或者 text 属性初始化都会相应触发 `provideDelegate` 方法，并调用 `checkProperty()` 方法进行检查，可以在这个方法中编写验证代码。

如果没有这种机制，实现同样的检查功能就必需显式传递要绑定的属性名称，不太方便：

```java
// Checking the property name without "provideDelegate" functionality
class MyUI {
    val image by bindResource(ResourceID.image_id, "image")
    val text by bindResource(ResourceID.text_id, "text")
}

fun <T> MyUI.bindResource(
        id: ResourceID<T>,
        propertyName: String
): ReadOnlyProperty<MyUI, T> {
    checkProperty(this, propertyName)
    // create delegate
}
```

Kotlin 编译器生成的代码演示如下，对比属性委托，差别在于辅助属性初始化使用了 `provideDelegate` 方法：

```java
class C {
    var prop: Type by MyDelegate()
}

// this code is generated by the compiler 
// when the 'provideDelegate' function is available:
class C {
    // calling "provideDelegate" to create the additional "delegate" property
    private val prop$delegate = MyDelegate().provideDelegate(this, this::prop)
    var prop: Type
        get() = prop$delegate.getValue(this, this::prop)
        set(value: Type) = prop$delegate.setValue(this, this::prop, value)
}
```

注意：`provideDelegate` 方法只影响辅助属性对象的创建，并不影响生成的 getter 或 setter 代码。

使用标准库接口 `PropertyDelegateProvider` 可以用 lambda 表达式替代委托对象类型定义：

```java
val provider = PropertyDelegateProvider { thisRef: Any?, property ->
    ReadOnlyProperty<Any?, Int> {_, property -> 42 }
}
val delegate: Int by provider
```


#### 💦 Extension Functions (Class methods)

```java
	// Java
	public class Utils {

	    private Utils() {
	      // This utility class is not publicly instantiable
	    }

	    public static int triple(int value) {
	        return 3 * value;
	    }

	}

	int result = Utils.triple(1);

	// Kotlin
	fun Int.triple(): Int {
	  return this * 3
	}

	var result = 3.triple()
```

Kotlin 这种扩展能力可以很方便地扩展 Nullable receiver，默认定义了 `Any?.toString()` 方法，所以对 null 对象调用 toString() 并不会触发异常，这个扩展方法会返回 "null" 字符串。

扩展方法本质上类似 Mixins 编程模式，语法上看起来好像是给指定类型增加了一个成员函数。但其实不是，扩展方法属于其定义时所在的作用域。就以上代码来说，`triple()` 方法属于 Kotlin 编译器自动生成的 Top-level 入口类型，而不是属于 `Int` 类型。但是使用扩展方法时，它又表现得像是 `Int` 类型的成员函数，这是因为 Kotlin 通过编译器将 `3.triple()` 这种调用转换为 `TopLevelKt.triple(3)`，这里假定代码文件是 TopLevel.kt。

Kotlin 还支持 extension properties，给指定类扩展带有 getters/setters 访问器的属性：

```ts
val <T> List<T>.lastIndex: Int
    get() = size - 1
```

同样，扩展发展并不是真正修改类型源代码添加新的属性，所以没有相应的 [backing field](properties.md#backing-fields)，不能使用初始化：

```ts
val House.number = 1 // error: initializers are not allowed for extension properties
```

在面向对象编程中，直接读写数据的类数据成员称为字段 Fields，经过访问器方法控制数据读写的称为属性 Properties，它们背后隐含了存储数据的字段，Kotlin 自动提供。


### ☘ Kotlin JUnit Testing
1. https://docs.gradle.org/current/userguide/kotlin_dsl.html
2. https://docs.gradle.org/current/samples/index.html#kotlin
3. https://kotlinlang.org/docs/gradle-configure-project.html
3. https://kotlinlang.org/docs/jvm-test-using-junit.html

Kotlin 提供以下测试模块：
1. `kotlin.test` 支持全平台的测试模块 top-level 断言函数集；
2. `kotlin.test.junit` JUnit 专用测试模块；
3. `kotlin.test.junit5` JUnit5 专用测试模块；
4. `kotlin.test.testng` TestNG 专用测试模块；

Gradle 使用 Groovy DSL 配置一个基本的 Kotlin 项目，build.gradle 脚本参考如下：

```sh
plugins {
    id 'org.jetbrains.kotlin.jvm' version '1.9.10'                     ➊
    id 'application'                                                   ➋
}

repositories {
    mavenCentral()                                                     ➌
}

dependencies {
    testImplementation 'org.jetbrains.kotlin:kotlin-test-junit5'       ➍
    testImplementation 'org.junit.jupiter:junit-jupiter-engine:5.9.3'  ➎
    testRuntimeOnly 'org.junit.platform:junit-platform-launcher'
    implementation 'com.google.guava:guava:32.1.1-jre'                 ➏
}

application {
    mainClass = 'demo.AppKt'                                           ➐
}

tasks.named('test') {
    useJUnitPlatform()                                                 ➑
}
```

1. Apply the `org.jetbrains.kotlin.jvm` Plugin to add support for `Kotlin`.
2. Apply the application plugin to add support for building a CLI application in Java.
3. Use Maven Central for resolving dependencies.
4. Use the Kotlin `JUnit 5` integration.
5. Use the `JUnit 5` integration.
6. This dependency is used by the application.
7. Define the main class for the application.
8. Use `JUnit Platform` for unit tests.

Guava 是谷歌提供的一个 Java 类库，功能包括：新的集合类型、不可变集合、Reflection、EventBus、以及用于并发、简化 I/O、Hash、缓存、字符串等的
 实用工具。

自动生成的示范程序和测试程序代码如下：

```java ,kotlin
/*
 * Generated src/main/kotlin/demo/App.kt
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package demo

class App {
    val greeting: String
        get() {
            return "Hello World!"
        }
}

fun main() {
    println(App().greeting)
}

/*
 * Generated src/test/kotlin/demo/AppTest.kt
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package demo

import kotlin.test.Test
import kotlin.test.assertNotNull

class AppTest {
    @Test fun appHasAGreeting() {
        val classUnderTest = App()
        assertNotNull(classUnderTest.greeting, "app should have a greeting")
    }
}
```

以上测试代码使用的是 Kotlin 全平台测试包，也可以使用 JUnit 专用测试模块：

```java
// src/main/kotlin/KtApp.kt
package mgid;

class MyKtApp {
    fun run(msg:String = "Hi, there!") {
        println("Hello Kotlin! " + msg)
    }
}
fun main(args:Array<String>) {
    MyKtApp().run(args[0])
}
// src/test/kotlin/KtAppTest.kt
package mgid;

import java.io.*;
import org.junit.Test;
import org.junit.Assert.assertEquals;

class KtAppTest {
    @Test
    fun allAsserts() {
        System.out.println("KtAppTest run...");

        val baos = ByteArrayOutputStream(10000);
        val console = System.out;
        System.setOut(PrintStream(baos));
        MyKtApp().run();
        System.setOut(console);

        assertEquals("Hello Kotlin! Hi, there!\r\n", baos.toString());
        println("KtAppTest completed.");
    }
}
```

注意：KtApp.kt 文件定义的主类与文件名不一致，编译器会自动生成入口类 `KtAppKt`。

执行 Gradle 测试任务命令，以检查测试程序是否正确运行：

```sh
$ gradle test --tests mgid.KtAppTest
Reusing configuration cache.

> Task :test

KtAppTest > allAsserts STANDARD_OUT
    KtAppTest run...
    KtAppTest completed.

KtAppTest > allAsserts PASSED
```

以下 build.gradle 配置在同一个 Gradle Java 项目中启用 Groovy、Kotlin 编程：

```ts ,kotlin
import org.jetbrains.kotlin.gradle.tasks.*
import org.jetbrains.kotlin.gradle.dsl.jvm.*
import org.jetbrains.kotlin.gradle.dsl.*

plugins {
    id ('java-library')
    id 'maven-publish'
    id 'application'
    id 'groovy'
    id 'org.jetbrains.kotlin.jvm' version '1.9.10'
}

group = 'mgid'
version = '1.0-SNAPSHOT'
description = 'myaid'
java.sourceCompatibility = JavaVersion.VERSION_15

application {
    mainClass = 'mgid.App'
}

repositories {
    mavenLocal()
    maven {
        url = uri('https://repo.maven.apache.org/maven2/')
    }
}

dependencies {
    api 'org.codehaus.groovy:groovy-all:3.0.10'
    api 'org.slf4j:slf4j-nop:1.7.2'
    testImplementation 'org.apache.maven.plugins:maven-surefire-plugin:3.1.2'
    testImplementation 'org.junit.jupiter:junit-jupiter:5.7.1'
    testCompileOnly 'junit:junit:4.13'
    testRuntimeOnly 'org.junit.vintage:junit-vintage-engine'
    testRuntimeOnly 'org.junit.platform:junit-platform-launcher'
}

publishing {
    publications {
        maven(MavenPublication) {
            from(components.java)
        }
    }
}

// Gradle 7.6 Java Toolchains for JVM projects
java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

tasks.withType(KotlinCompilationTask.class).configureEach {
    // compilerOptions.languageVersion = KotlinVersion.KOTLIN_2_0
    // compilerOptions.jvmTarget = JvmTarget.JVM_20
    compilerOptions.languageVersion.set(KotlinVersion.KOTLIN_1_9)
    compilerOptions.jvmTarget.set(JvmTarget.JVM_17)
}
tasks.withType(KotlinJvmCompile.class).configureEach {
    jvmTargetValidationMode = JvmTargetValidationMode.WARNING
}

tasks.withType(JavaCompile) {
    options.encoding = 'UTF-8'
}

tasks.withType(Javadoc) {
    options.encoding = 'UTF-8'
}

tasks.withType(Test) {
    enabled true
    ignoreFailures false
    useJUnitPlatform()  // Work with jupiter or vintage engine
    testLogging {
        exceptionFormat "full"
        events /*"started", */"skipped", "passed", "failed"
        showStandardStreams true
    }
    // junitPlatform { details 'tree'}
}

// tasks.named('test', Test) {
//     enabled true
//     useJUnitPlatform()
// }
```

### ☘ Kotlin Scripting

Kotlin 有三种代码文件类型：

1. `.kt` 扩展名表示 Kotlin 基本代码文件；
2. `.kts` 扩展名表示 Kotlin 脚本文件，Gradle 项目管理中使用 build.gradle(.kts)；
3. `.ktm` 扩展名表示 Kotlin 模块文件；

```java ,kotlin
import kotlin.collections.listOf

fun main(args:Array<String>) {
    println("Hello Kotlin/Native! " + args.joinToString(", "))
    val nums = listOf("1st", "2nd", "3rd","forth", "fifth");
    val (match, rest) = nums.partition { it.length <= 3 }
    println(match)
    println(rest)
}
```

```bash
kotlinc-native hello.kt -o hello
kotlinc hello.kt -d hello
kotlinc hello.kt -include-runtime -d hello.jar
java -jar hello.jar

kotlinc hello.kts -d hello
# Evaluate the given Kotlin script (*.kts) file with top-level executable code
kotlinc -script hello.kts
```

使用原生编译器生成可执行程序，Kotlin 会根据系统差异下载所需的依赖文件，例如 WIndows 平台的会下载 Msys2 或者 LLVM 编译器等等工具，即使已经安装，还是会下载一份保存到用户主目录下的 .konan/dependencies 子目录下。编译得到的可执行程序文件容量较大，即使只有一条 print 函数调用语句，也需要占用 MB 级别容量。

尝试使用 kotlinc-native 编译 kts 脚本文件，虽然使用相同代码，但是编译脚本文件就会导致编译器前端触发异常，类型声明分析失败：

	error: compilation failed: Front-end Internal error: Failed to analyze declaration Hello
	Descriptor wasn't found for declaration SCRIPT

Kotlinc 编译 kt 代码文件则生成的类名中包含 Kt 后缀，例如 `HelloKt.class`，尽管定义了 main 函数，编译器还是会创建一个可接收命令行参数的 `static void main` 入口方法。而代码中的 `fun main()` 方法会被 public final void 修饰。

Kotlinc 编译 kts 脚本文件生成 .class 类文件，其中的脚本代码默认由 `ScriptTemplateWithArgs` 子类包装，类名为文件名，并且会以大写字母开头。虽然定义了 main 函数，但是不是静态的入口函数。此编译在 kotlinc 1.3.72 (JRE 17.0.8+9-LTS-211) 上执行，在最新版本的 kotlinc 1.9.10 上提示 no source file，并不能编译脚本。

```sh
$ kotlinc hello.kts
$ java Hello
Error: Main method not found in class Hello, please define the main method as:
   public static void main(String[] args)
or a JavaFX application class must extend javafx.application.Application

$ javap Hello
Compiled from "hello.kts"
public class Hello extends kotlin.script.templates.standard.ScriptTemplateWithArgs {
  public final void main();
  public Hello(java.lang.String[]);
}

$ javap SomeKt
Compiled from "hello.kt"
public final class SomeKt {
  public static final void main();
  public static void main(java.lang.String[]);
}
```

如果 kts 脚本中没有定义 main 函数，那么编译器就会自动添加一个静态入口函数。

使用默认参数值时，编译器为生成的类设置后缀为 `$default` 包装方法：

```java ,kotlin
package mgid;

class MyKtApp {
    fun run(msg:String = "Hi, there!") {
        println("Hello Kotlin! " + msg)
    }
}
/*
$ kotlinc KtApp.kt
$ javap mgid.MyKtApp
Compiled from "KtApp.kt"
public final class mgid.MyKtApp {
  public mgid.MyKtApp();
  public final void run(java.lang.String);
  public static void run$default(mgid.MyKtApp, java.lang.String, int, java.lang.Object);
}*/
```

Kotlin 可以直接运行脚本，使用 -script 命令选项，此时作为 Top-level 脚本执行，脚本中可以直接使用 `args` 接收命令行参数。传递给脚本的参数写在后面，也可以跟在 -- 符号之后，此符号本身没有作用，只是作为一个提示。

```java ,kotlin
class SomeScript {
	companion object {
		@JvmStatic
		fun somemain(args:Array<String>) {
			println("Hello Kotlin!" + args.joinToString() { it })
		}
	}
}
SomeScript.somemain(args)
```

假设以上脚本保存在 some.kts 文件，使用 kotlinc 编译它就会得到以下 4 个类文件：

1. `Some.class` 按文件名生成的模板类，继承 kotlin.script.templates.standard.ScriptTemplateWithArgs；
2. `Some$SomeScript.class` 脚本中定义的 SomeScript 类；
3. `Some$SomeScript$Companion.class` SomeScript 类中使用的伴随对象；
4. `Some$SomeScript$Companion$somemain$1.class` 伴随对象内 joinToString 方法中使用的 lambda；

```sh
$ kotlinc some.kts
$ for file in *.class; do javap $file >> class.md; done;
public class Some extends kotlin.script.templates.standard.ScriptTemplateWithArgs {
  public static final void main(java.lang.String[]);
  public Some(java.lang.String[]);
}
Compiled from "some.kts"
public final class Some$SomeScript {
  public static final Some$SomeScript$Companion Companion;
  public Some$SomeScript();
  static {};
  public static final void somemain(java.lang.String[]);
}
Compiled from "some.kts"
public final class Some$SomeScript$Companion {
  public final void somemain(java.lang.String[]);
  public Some$SomeScript$Companion(kotlin.jvm.internal.DefaultConstructorMarker);
}
Compiled from "some.kts"
final class Some$SomeScript$Companion$somemain$1 extends kotlin.jvm.internal.Lambda implements kotlin.jvm.functions.Function1<java.lang.String, java.lang.String> {
  public static final Some$SomeScript$Companion$somemain$1 INSTANCE;
  public java.lang.Object invoke(java.lang.Object);
  public final java.lang.String invoke(java.lang.String);
  Some$SomeScript$Companion$somemain$1();
  static {};
}
```

总结一下代码文件与编译生成类文件的关系，假定文件名为 some.kt 或者 some.kts：
1. `some.kt` 代码文件定义了 SomeClass 类型，那么就生成 *SomeClass.class*，并且不会另外生成包装入口函数，因此代码中的 `fun main()` 不能作为入口函数执行；
2. `some.kt` 代码文件中没定义 class，那么就生成 *SomeKt.class*。如果代码中定义的主函数签名是 `fun main()`，那么就由 SomeKt 提供的包装入口函数去调用。如果代码中的主函数签名是 `fun main(args:Array<String>)`，则编译器不会另外生成包装入口函数；
3. `some.kts` 代码文件定义了 SomeClass 类型，那么就生成 *Some.class* 和 *Some$SomeClass.class*；
4. `some.kts` 代码文件中没定义 class，那么就只生成 `Some.class`；

即使使用旧版本 Kotlin 1.3 编译 mts 脚本生成包含静态入口函数的类（将 main 函数改名，或者使用其它方法定义静态入口），需要使用 RunnerKt.runCompiledScript() 方法执行。但也不能直接执行，会报错：

```sh
java.lang.NoClassDefFoundError: kotlin/script/experimental/jvm/RunnerKt at Some.main(Unknown Source) 
Caused by: java.lang.ClassNotFoundException: kotlin.script.experimental.jvm.RunnerKt

Exception in thread "main" java.lang.IllegalArgumentException: Cannot find metadata for script Some
        at kotlin.script.experimental.jvm.impl.KJvmCompiledScriptKt.createScriptFromClassLoader(  KJvmCompiledScript.kt:194)
        at kotlin.script.experimental.jvm.RunnerKt.runCompiledScript(runner.kt:19  )
        at Some.main(Unknown Source)
```

可以看到这是实验性功能，依赖类型相关 JAR 需要添加到 CLASSPATH 列表中：

```sh
export CLASSPATH="$CLASSPATH;C:/kotlin/kotlinc/lib/kotlin-scripting-jvm.jar;"
kotlinc some.kts
java Some
```

Kotlin CLI scripting 脚本编程目前还是实验性功能，参考文档 
09.2.3. Get started with Kotlin/Native using the command-line compiler
09.5.1. Get started with Kotlin custom scripting – tutorial
15.1.1. Kotlin command-line compiler

KTS 比 Groovy 更适合用于编写 Gradle 脚本，因为 Kotlin 代码可读性更高。但是作为基于 JVM 的脚本，它们两者都存在性能问题，特别是首次冷启动时间比一般脚本要慢得多。

参考以下来自在 Gradle CI 上运行的性能测试数据，分别是 Gradle 6.8/7.4/8.0 版本性能分析，通过几个常见测试来分析脚本性能：https://github.com/gradle/gradle/issues/15886

1. 首次运行，等价清除所有 build cache 后再运行；
2. buildSrc abi 改动，可以理解为大多数缓存失效，大部分代码需要重新编译；
3. buildSrc non-abi 改动，即 buildSrc 中的普通修改；
4. 无改动

这些测试运行在一个包含大量 subProject 的大型项目中，并且它们在 Groovy 和 Kotlin DSL 上运行以进行比较。

|     Use case     |  Groovy |  Kotlin |        Differences        |
|------------------|---------|---------|---------------------------|
| First use        | 🟢 33.5s | 🔴 76.2s | Groovy DSL is 2.2x faster |
| buildSrc abi     | 🟢 13.2s | 🔴 42.3s | Groovy DSL is 3.2x faster |
| buildSrc non-abi | 🔴 13s   | 🟢 5.2s  | Kotlin DSL is 2.5x faster |
| Nothing changes  | 🔵 1.7s  | 🔵 1.8s  | Similar performance       |

|     Use Case     |   Groovy  |   Kotlin  |         Difference        |
|------------------|-----------|-----------|---------------------------|
| First use        | 🟢 38.855s | 🔴 63.54s  | Groovy DSL is 1.6x faster |
| buildSrc abi     | 🟢 25.307  | 🔴 35.014s | Groovy DSL is 1.4x faster |
| buildSrc non-abi | 🔴 24.526s | 🟢 4.732s  | Kotlin DSL is 5x faster   |

| Use case				| Groovy	| Kotlin	| Differences	|
|-----------------------|-----------|-----------|---------------|
| **First use**			| 🟢 30s	| 🔴 75s	| Groovy DSL is 2.5x faster
| **`buildSrc` abi**	| 🟢 9s	| 🔴 35s	| Groovy DSL is 3.8x faster
| **`buildSrc` non-abi**| 🔴 9s	| 🟢 5.5s	| Kotlin DSL is 1.7x faster
| **configuration**		| 🟢 1.9s| 🔴 2.2s	| Groovy DSL is 0.15x faster

测试数据可以看出，Gradle 7.4 版本上，KTS 脚本性能才有一定改善。

Kotlin 现在是 Android 官方推荐语言，Gradle 构建脚本、实现语言的统一有利于整个项目开发维护，并且 Kotlin DSL 支持源码跳转、编译时检查错误、代码自动补全和语法高亮等等功能。



### ☘ Kotlin Coroutines
1. https://amitshekhar.me/blog/kotlin-coroutines
2. https://kotlinlang.org/docs/coroutines-overview.html
3. https://github.com/Kotlin/kotlinx.coroutines
4. https://github.com/Kotlin/coroutines-examples
5. https://github.com/JetBrains/kotlinconf-app
6. Kotlin 协程实战进阶 https://juejin.cn/post/6987724340775108622
6. 破解 Kotlin 协程 https://www.bennyhuo.com/book/kotlin-coroutines
6. 深入理解 Kotlin 协程 https://www.bilibili.com/video/BV1be4y1X7cg
6. 【码上开学】Kotlin 协程的挂起 https://www.bilibili.com/video/BV1KJ41137E9

所谓协程 Coroutines 即协作线程，Cooperation + Routines，相对于操作系统的线程（基本的操作系统任务调度单元），协程是线程之内实现的轻量级“线程”，所以它不是操作系统层面的线程。协程的任务切换不需要进行操作系统层面的线程切换，大大提高了单线程的并发效率。

在云原生时代背景下，编程语言之间百花斗艳着实热闹，GO 语言的成功，让我们重新审视并真正见识到了协程的威力。

协程作为一个编程工具，它的目的是实现并发处理 (Concurrency)。而并发处理则是通用程序解决大量任务的一个普遍的需求，一般将问题分为 `I/O-Bound` 和 `CPU-Bound` 两类，I/O 密集形 vs. CPU 计算密集形，这两类问题根源是时间与空间。

计算机体系结构设计上，I/O 操作比 CPU 计算速度要慢上几个数量级。这也就是说 CPU 进行 I/O 操作时需要大量的等待，如果线程使用同步方式处理 I/O，那么这些等等待时间将真实地体现在线程的阻塞状态。而异步方式则可以避免这些等待时间。

异步 I/O 本质就是堆叠等待时间实现更高效的处理能力，就如你自己做早餐，又要煎蛋又要煮咖啡，那么按异步操作就是：先开火烧水，再开火煎蛋，水开了再冲咖啡，然后蛋也熟了。如果按同步、阻塞的方式，先要煎蛋，等它熟了再烧水冲咖啡，这个过程将所有等待时间串连了起来，相当低效率。

CPU-Bound 问题处理瓶颈在于 CPU 运行速度，在现代硅基 CPU 技术发展上，受限于硅晶基原子结构，单核心工艺已经到达频率瓶颈，硬件厂商需要靠开发多核心 CPU 来弥补。如果在同一个 CPU 下处理某问题需要 X 时间，要加速处理这个问题，可以采取的方法有多种。比如将问题分解成更容易更处理的小问题，并安排到不同的 CPU 核心线程上去处理。或者使用分布式网络，将问题分发给多台机器上处理。

理想条件下，单核心的运行频率当然是越高越好，处理速度就越快。在单核心运行频率受限的前提下，多核心架构则是一种不得已的选择。尽管多核心 CPU 可以在每个核心上并行地运行线程，但是在算力同等的条件下，单核心 CPU 结构也以同样的速度处理问题，并且结构上更简洁。多核心方案不仅是提高了 CPU 结构的复杂度，同时也给软件工业带来挑战。首当其冲的就是各种语言的编译器实现，它们需要面对的一个难题就是：如果提高多核心硬件资源的利用效率。

Erlang Processes 就是基于 Actor Model 模型实现的轻量级进程，注意它不是操作系统层面上的进程。Actor Model 模型中的任务就是一个Actor，任务之间通过消息传递的方式来进行交互，而不采用共享的方式。Actor 可以看做是轻量级进程或线程，通常在一般的 PC 主机上就可以创建几十万个 Actor。

协程概念早在 1963 年正式提出，它的诞生甚至早于 1967 年出现的线程概念。Unix 系统早期并没有“线程”概念，上世纪 80 年代才引入线程，借助进程机制实现线程。进程是操作系统分配资源的最小单元，线程是任务调度的最小单元。

协程作为一种并发机制的一种实现形式，不是并行运行，因为通常它们是运行于单一线程之中。因此协程之间的数据共享是安全的，不存在多线程竞争的问题，不需要使用同步锁。

和线程的抢占式调度不同，协程的调度方式如其名，是基于协作的调度方式，协程执行的任务代码中需要加入特定代码来主动让出 CPU 时间，通常使用回调函数或者 yield 等关键字，让协程任务调度程序执行其它协程。协程任务调度就是切换当前线程要执行函数，主要工作是保存、恢复函数调用堆栈信息，以及根据访问标识控制协程的执行流程。

回调或通知机制是处理各种长时间任务的传统方法，但是在语法上，会使用代码显得不那么简洁。在一些复杂的场景下，还可能形成深层的回调嵌套，称之为 "callback hell"。而协程、响应式、异步编程等 non-blocking 编程工具的出现，使得实现同样的功能代码更简洁。

回到协程的核心，那么就是协程的调度机制：协作式任务调度器。为了让运行中的函数（协程）可以被临时
暂停（挂起，Suspend），通常异步框架会设计可挂起函数，或者生成器（Generator）接口，
提供 yield 供当前协程调用以主动释放所持有的 CPU 资源，让调度程序安排、运行其它协程任务。
协程框架中引入 `Continuation` 类型来表示一个挂起点之后的延续操作。

协程作为异步编程技术的一种，其本身就没有很严格的定义，Erlang 称之为轻量级进程、
Rust 称之为绿色线程，Green Threas，Windows 系统上实现有纤程（Fiber）。

另一种分类思想是根据协程实现是否拥有各自的 Stack 内存来分类：

1. 有栈协程 Stackful Coroutine：协程各自有调用栈，与线程调用栈类似。
2. 无栈协程 Stackless Coroutine：协程自有属性数据保存在 heap 内存区。

无栈协程当前更流行，因为它不需要为每个协和分配这部分内存，也不需要额外的栈内存处理工作。
有栈协程虽然增加了这部分内存的处理工作，同时也增加了内存消耗，但是它可以为每一个协程保存调用栈，
暂停协程就跟线程一样，只不过挂起和恢复执行的权限在程序当前线程，而不是操作系统。

Python 就使用无栈协程，它无法在任意函数层级中使用 yield 语句并且使用所有函数变成协程函数。

Kotlin 协程也是一种无栈协程实现，它的本质就是一段代码 + Continuation 实例。

Asynchronous programming techniques

1. Threading
2. Callbacks
3. Futures, promises, and others
4. Reactive Extensions
5. Coroutines

JVM 上的第三方协程实现有 Kilim 和 Quasar 等等：

1. https://github.com/kilim/kilim
2. https://github.com/puniverse/quasar
3. https://github.com/offbynull/coroutines

Quasar 框架通过 Bytecode Instrumentation API 在 Java Runtime 环境初始化之前进行代码插桩，也就是通过 Java Agent 接口修改 JVM 运行时。通过插桩代码检查所有抛出 SuspendExecution 异常的方法，并修其改字节码，并通过 Instrumentation 更新到虚拟机中。

启动 JVM 是使用参数 -javaagent:path-to-quasar-core.jar=vdc，其中附加的 vdc 用于查看那些 Quasar 修改过字节码的方法信息。如果一个方法抛出 SuspendExecution，但是其内部没有阻塞协程的方法，就不会被认为是异步方法。

Bytecode Instrumentation 有三种形式：

1. *Static Instrumentation*: 
	The class file is instrumented before it is loaded into the VM - for example, by creating a duplicate directory of `*.class` files which have been modified to add the instrumentation. This method is extremely awkward and, in general, an agent cannot know the origin of the class files which will be loaded.
2. *Load-Time Instrumentation*: 
	When a class file is loaded by the VM, the raw bytes of the class file are sent for instrumentation to the agent. The ClassFileLoadHook event, triggered by the class load, provides this functionality. This mechanism provides efficient and complete access to one-time instrumentation.
3. *Dynamic Instrumentation*: 
	A class which is already loaded (and possibly even running) is modified. This optional feature is provided by the ClassFileLoadHook event, triggered by calling the RetransformClasses function. Classes can be modified multiple times and can be returned to their original state. The mechanism allows instrumentation which changes during the course of execution.

代理的入口 `premain` 方法，以及编写 Manifest 清单文件参考 java.lang.instrument API 文档。

1. https://docs.oracle.com/en/java/javase/20/docs/specs/jvmti.html
2. https://docs.oracle.com/javase/8/docs/technotes/guides/jpda/index.html
3. https://docs.oracle.com/en/java/javase/17/docs/api/java.instrument/java/lang/instrument/package-summary.html

JVM 设计设计之初，考虑了虚拟机状态监控、DEBUG、线程和内存分析等功能需求，提供了相应的事件驱动的高级接口，根据不同的 JDK 版本和 JVM 规范发展而有所更新：

1. JDK 1.5 提供性能分析接口 JVM PI（Java Virtual Machine Profiler Interface）。
2. JDK 1.5 提供虚拟机调试接口 JVM DI（Java Virtual Machine Debug Interface）。
3. JDK 1.5 版本后以上两者合二为一，作为虚拟机工具接口 JVM TI（JVMTM Tool Interface）。

JVM TI 接口是 Java Platform Debugger Architecture (JPDA) 调试框架的组成部分，此构架主要是给工具开发商提供调试工具开发接口。

JPDA 构架分层设计示意图如下：

	           Components                          Debugger Interfaces

	                /    |--------------|
	               /     |     VM       |
	 debuggee ----(      |--------------|  <--- JVM TI - Java VM Tool Interface
	               \     |   back-end   |
	                \    |--------------|
	                /           |
	 comm channel -(            |  <----------- JDWP - Java Debug Wire Protocol
	                \           |
	                     |--------------|
	                     |  front-end   |
	                     |--------------|  <--- JDI - Java Debug Interface
	                     |      UI      |
	                     |--------------|

1. 最底层是 JVM TI ，定义调试服务的接口，JVM 负责实现 JVM TI 接口。
2. 中间层是 Java Debug Wire Protocol (JDWP)，定义被调试进程、调试器前端之间的通信协议。
3. 应用层是 Java Debug Interface (JDI)，工具开发商用于开发 debugger 程序，实现远程调试。

JVM PI 接口可以监控就 JVM 发生的各种事件，比如，JVM 创建、关闭、Java 类被加载、创建对象或 GC 回收等 37 种事件。

JVM TI 是开发和监控工具使用的编程接口，它提供了一种方法，用于检查状态和控制在 Java 虚拟机中运行的应用程序的执行。旨在为需要访问 JVM 状态的所有工具提供统一的开发接口，功能包括但不限于：评测、调试、监视、线程分析和覆盖率分析工具。

JVM TI 是一个双向接口，JVM TI 的客户端即是 Agent，通过 JVM 事件通知处理感兴趣的事件。JVM TI 接口用 C/C++ 语言暴露 Native API，以动态或者静态链接库的形式加载到 JVM 并运行。也可以使用 Java 语言编写工具包，Java Agent 使用 jar 包的形式加载。

Kotlin Coroutines 是异步编程框架，Kotlin 1.4 引入 `suspend` 关键字用于定义可挂起函数，使得异步代码更加直观和容易理解。这个关键字的作用相当于 JavaScript 脚本中的 `async` 和 `await` 两个关键字，Kotlin 使用同一个关键字。

Kotlin Coroutines 关键优点：

1. 简洁可读：使用 suspend 关键字定义异步函数，代码的可读性更高。
2. 内置取消和超时处理，方便中止异步任务的执行。
3. 协程作用域，`supervisorScope` 或者 `coroutineScope`，管理协程的生命周期，防止资源泄漏。
4. 并发组合器，用于执行协程，包括 async/await 和 launch (无返回值)，使并发编程更加容易。

![](https://kotlinlang.org/docs/images/suspension-process.gif)

Kotlinx.Coroutines 按模块化组织，不同功能通过不同模块提供：

1.   *kotlinx-coroutines-core* 核心模块提供异步编程能力：
1.1. Coroutine builder functions
1.2. Synchronization primitives for coroutines
1.3. Top-level suspending functions
2.   *kotlinx-coroutines-debug* 提供基于 JVM 的调试工具；
3.   *kotlinx-coroutines-test* 提供多平台支持的测试工具；
4.   Coroutines for reactive streams 响应流式编程模块
4.1. *kotlinx-coroutines-reactive* [Reactive Streams](https://www.reactive-streams.org/)
4.2. *kotlinx-coroutines-reactor* [Reactor](https://projectreactor.io)
4.3. *kotlinx-coroutines-rx2* [RxJava 2.x](https://github.com/ReactiveX/RxJava)
4.4. *kotlinx-coroutines-rx3*  [RxJava 3.x](https://github.com/ReactiveX/RxJava)
5.   集成模块
5.1. *kotlinx-coroutines-guava* 集成 Google Guava 框架的 [ListenableFuture](https://github.com/google/guava/wiki/ListenableFutureExplained)；
5.2. *kotlinx-coroutines-slf4j* 集成 SLF4J [MDC](https://logback.qos.ch/manual/mdc.html) 上下文；
5.3. *kotlinx-coroutines-play-services* 集成 Google Play Services [Tasks API](https://developers.google.com/android/guides/tasks)；
6.   UI 模块：
6.1. *kotlinx-coroutines-android* 为 Android 应用提供 `Dispatchers.Main` 上下文；
6.2. *kotlinx-coroutines-javafx* 为 JavaFX UI 应用提供 `Dispatchers.JavaFx` 上下方和 `Dispatchers.Main` 实现。
6.3. *kotlinx-coroutines-swing* 为 Swing UI 应用提供 `Dispatchers.Swing` 上下方和 `Dispatchers.Main` 实现。


Grandle 工程配置脚本添加 kotlinx-coroutines 依赖以启用协程，根据工程类型选择所使用的 kotlinx-coroutines 模块。Native 平台还需要根据当前支持的平台设置，Kotlin/Native target 按支持完善程度分成 3 个级别，Tire 1 最佳支持，经过常规 CI 编译运行。比如 androidnativex86 就是属于 Tire 3 支持级别的原生平台目标：

1. https://kotlinlang.org/docs/native-target-support.html
2. https://kotlinlang.org/api/kotlinx.coroutines/index.html
3. https://central.sonatype.com/search?q=kotlinx-coroutines-core

```ts
plugins {
    // For build.gradle.kts (Kotlin DSL)
    kotlin("jvm") version "1.9.10"
    kotlin("multiplatform") version "1.9.10"
    id("com.android.application")
    kotlin("android") version "1.9.10"

    // For build.gradle (Groovy DSL)
    id "org.jetbrains.kotlin.jvm" version "1.9.10"
    id 'org.jetbrains.kotlin.multiplatform' version '1.9.10'
    id 'com.android.application'
    id 'org.jetbrains.kotlin.android' version '1.9.10'
}

repositories {
    mavenCentral()
}

dependencies {
  implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3'
  implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.7.3'
  implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core-jvm:1.7.3'
  implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core-androidnativex86:1.7.3'
  implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3'
}
```

注意：Kotlin Target 配置和依赖模块需要相匹配，例如 js 模块需要和 multiplatform 配合使用，因为 JavaScirpt 构建目标属性多平台而不是 JVM 平台。如果平台不兼容，就会导致相应的依赖模块加载出错。另外，一个 Gradle 项目配置多个平台插件，例如同时 jvm 和 multiplatform 平台插件，就会触发错误，前一个作为 `kotlin` 扩展，而后一个不能正常加载。

```sh
An exception occurred applying plugin request [id: 'org.jetbrains.kotlin.jvm', version: '1.9.10']
> Failed to apply plugin 'org.jetbrains.kotlin.jvm'.
   > Cannot add extension with name 'kotlin', as there is an extension already registered with that name.
> Could not resolve all files for configuration ':compileClasspath'.
   > Could not resolve org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.7.3.
```


```ts ,kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    val deferred: Deferred<Int> = async {
        loadData()
    }
    println("waiting...")
    println(deferred.await())

    val deferreds: List<Deferred<Int>> = (1..3).map {
        async {
            delay(1000L * it)
            println("Loading $it")
            it
        }
    }
    val sum = deferreds.awaitAll().sum()
    println("$sum")
}

suspend fun loadData(): Int {
    println("loading...")
    delay(1000L)
    println("loaded!")
    return 42
}
/* Output:
waiting...
loading...
loaded!
42
Loading 1
Loading 2
Loading 3
6
*/
```

	error: unresolved reference: kotlinx

运行协程程序时，需要 kotlinx.coroutines.BuildersKt 这些基础类型以构建异步任务，需要将 kotlinx-coroutines-core-jvm-1.5.0.jar 这样的依赖包添加到 CLASSPATH 环境变量中。


### ☘ Kotlinx.Coroutine Core
https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/

Coroutine builder functions:

|      Name     |     Result     |     Scope      |
|---------------|----------------|----------------|
| `launch`      | Job            | CoroutineScope |
| `async`       | Deferred       | CoroutineScope |
| `produce`     | ReceiveChannel | ProducerScope  |
| `runBlocking` | `T`            | CoroutineScope |

四个协程构建函数返回结果类型和作用域类型如上表，功能说明如下：

1. `launch` 启动协同程序，返回 `Job`，不关心返回值；
2. `async` 返回带有 future result 的单个值；
3. `produce` 生成元素流对象，返回消息接收信道，配合 `send` 和 `receive` 方法使用；
4. `runBlocking` 在协同程序运行时阻塞线程；Blocks the thread while the coroutine runs

协程构建函数需要三个参数：

1. *context* 协程上下文对象，就是协程相关数据对象的管家；
2. *start* 协程启动方式，四种方式对应不同的协程启动策略:
	* [DEFAULT] 默认立即运行协程，使用策略：[startCoroutineCancellable]
	* [ATOMIC] 原子式启动，立即执行协程体并且不可取消，使用策略：[startCoroutine]
	* [UNDISPATCHED] 立即在当前线程执行协程体直到 suspend，使用策略：[startCoroutineUndispatched]
    * [LAZY] 懒惰式启动，只在需要的情况下运行。
3. *block* 协程代码块，一般以 lambda 形式传递给协程构建函数；

协程调度器 `CoroutineDispatcher` 实现了拦截器接口方法 interceptContinuation，
它会调用 dispatch，进而实现协程的调度。

协程调度器决定了协程在哪个线程或哪些线程上执行，Kotlin 支持多平台，
协程运行于什么线程取决于平台类型，以下是默认调度器与对应平台的关系：

|            |     JVM     |     JS    |   Native  |
|------------|-------------|-----------|-----------|
| Default    | Thread Pool | Main Loop | Main Loop |
| Main       | UI Thread   | Main Loop | Main Loop |
| Unconfined | Main Loop   | Main Loop | Main Loop |
| IO         | Thread Pool | _         | _         |

JavaScript 本身是单线程的事件循环，相当于 JVM 上的 UI 线程。其中 `Unconfined` 实现
未指定运行线程，般在主线程上执行协程，参考官方文档 Dispatchers and threads。


实现代码参考 kotlinx-coroutines-core\common\src\Builders.common.kt

```java ,kotlin
public fun CoroutineScope.launch(
    context: CoroutineContext = EmptyCoroutineContext,
    start: CoroutineStart = CoroutineStart.DEFAULT,
    block: suspend CoroutineScope.() -> Unit
): Job {
    val newContext = newCoroutineContext(context)
    val coroutine = if (start.isLazy)
        LazyStandaloneCoroutine(newContext, block) else
        StandaloneCoroutine(newContext, active = true)
    coroutine.start(start, coroutine, block)
    return coroutine
}

public fun <T> CoroutineScope.async(
    context: CoroutineContext = EmptyCoroutineContext,
    start: CoroutineStart = CoroutineStart.DEFAULT,
    block: suspend CoroutineScope.() -> T
): Deferred<T> {
    val newContext = newCoroutineContext(context)
    val coroutine = if (start.isLazy)
        LazyDeferredCoroutine(newContext, block) else
        DeferredCoroutine<T>(newContext, active = true)
    coroutine.start(start, coroutine, block)
    return coroutine
}
```

协程作用域 (Coroutine Scope) 是协程运行的作用范围定义。launch、async 等等协程构建函数
都是 `CoroutineScope` 的扩展，同时会继承了协程作用域的协程止下文 coroutineContext，
自动传播其所有的 elements 的取消操作。换句话说，销毁一个协程作用域，那么里面的协程也随之失效。

```java ,kotlin
interface CoroutineScope

@DelicateCoroutinesApi
object GlobalScope : CoroutineScope

@ObsoleteCoroutinesApi
interface ActorScope<E> : CoroutineScope, ReceiveChannel<E> 

interface ProducerScope<in E> : CoroutineScope, SendChannel<E> 
```

协程止下文 (Coroutine Context) 接口代表协程持久上下文，它是一组索引的 `Element` 实例。
索引集合由 set 和 map 之间混合，集合中的每个元素都有一个唯一的 `Key`。

上下文可以有很多作用，包括携带参数，拦截协程执行等等，最重要的作用是线程切换。
官方实现的 `Dispatchers.Main` 上下文，它可以确保 launch 启动的协程体运行在 UI 线程当中。
除非你自己在 launch 的协程体内部切换线程，或者启动运行在其他有线程切换能力的上下文的协程。


四种协程构建函数返回结果说明：

1. `Job` 接口代表协程作业，封装了要执行的异步代码块，并使用状态指示执行状态；
2. `Deferred` 接口继承于 Job 接口，提供 await() 扩展方法用于等待、获取异步操作返回值；
3. `ReceiveChannel` 消息接收信道，对应 `SendChannel` 消息发送信道；
4. 返回泛型 `T` 具体类型取决于协程函数体返回的类型；

Kotlin 协程框架中的 `Job` 概念上对应 Java 并发编程中的 `Thread`，注意这是为了方便理解的对位关系说明，并不是说它们是等价物。Thread 背后是操作系统线程，线程的挂起即操作系统层面上暂停了线程的执行。而协程作业的挂起，对应的是线程中当前执行的异步函数的切换，线程本身没有挂起。

从内存管理、组织角度来看，Thread 运行于操作系统分配的堆栈内存区，`Stack Memory` 和 `Heap Memory`，还包括大量的 CPU 状态数据，程序运行中的每一个函数调用都产生一个 `Stack Frame`。栈区、栈帧都是一个抽象概念，本质上 Stack 就是一段有限的连续内存，CPU 提供了 pop、push 指令来实现栈数据存取。而栈帧则是 Stack 上细分的一小段区域，它包含的是函数相关的上下文数据，包含传递给函数的参数列表。

线程在切换时涉及操作系统层面上的任务调度，CPU 会加载新线程所分配的资源，包括 Stack 内存区。而协程的切换并不涉及这些操作系统层面的任务调度，不需要进行用户态、内核态的切换，而是通过管理栈帧信息实现异步函数的切换。这也就是为何协程方式实现的并发处理比线程方式高效，线程是重量级资源分配，内存占用也多，协程复用线程资源实现异步任务并发处理，非常轻量级。

在不同作业操作下，Job 状态转换可以由以下流程图表示，从创建、启动、激活、计算，出错或主动取消，最后到结束：

```sh
                                      wait children
+-----+ start  +--------+ complete   +-------------+  finish  +-----------+
| New | -----> | Active | ---------> | Completing  | -------> | Completed |
+-----+        +--------+            +-------------+          +-----------+
                 |  cancel / fail       |
                 |     +----------------+
                 |     |
                 V     V
             +------------+                           finish  +-----------+
             | Cancelling | --------------------------------> | Cancelled |
             +------------+                                   +-----------+
```



Coroutine dispatchers implementing CoroutineDispatcher:

|          Name          |                             Description                             |
|------------------------|---------------------------------------------------------------------|
| Dispatchers.Default    | Confines coroutine execution to a shared pool of background threads |
| Dispatchers.Unconfined | Does not confine coroutine execution in any way                     |

More context elements:

|            Name           |                Description                 |
|---------------------------|--------------------------------------------|
| NonCancellable            | A non-cancelable job that is always active |
| CoroutineExceptionHandler | Handler for uncaught exception             |

Synchronization primitives for coroutines:

|   Name  |  Suspendable  |                  Description                   |
|---------|---------------|------------------------------------------------|
| Mutex   | lock          | Mutual exclusion                               |
| Channel | send, receive | Communication channel (aka queue or exchanger) |

Top-level suspending functions:

|        Name       |                         Description                         |
|-------------------|-------------------------------------------------------------|
| delay             | Non-blocking sleep                                          |
| yield             | Yields thread in single-threaded dispatchers                |
| withContext       | Switches to a different context                             |
| withTimeout       | Set execution time-limit with exception on timeout          |
| withTimeoutOrNull | Set execution time-limit will null result on timeout        |
| awaitAll          | Awaits for all successful completed jobs or any exceptional |
| joinAll           | Joins on all given jobs                                     |

Select expression waits for the result of multiple suspending functions simultaneously:

|    Receiver    |   Suspendable   |   Select clause   | Non-Suspendable |
|----------------|-----------------|-------------------|-----------------|
| Job            | join            | onJoin            | isCompleted     |
| Deferred       | await           | onAwait           | isCompleted     |
| SendChannel    | send            | onSend            | trySend         |
| ReceiveChannel | receive         | onReceive         | tryReceive      |
| ReceiveChannel | receiveCatching | onReceiveCatching | tryReceive      |
| none           | delay           | onTimeout         | none            |

使用 `suspendCancellableCoroutine` 助手函数支持用户定义的 suspending 函数取消任务执行，使用 `NonCancellable` 上下文则可以禁止取消功能，使用
`withContext(NonCancellable) {...}` 代码块。



### ☘ Kotlin/JS React Web 开发

Kotlin/JS 提供了转换 Kotlin 代码、Kotlin 标准库以及任何兼容的 JavaScript 依赖项的能力。Kotlin/JS 目前的实现支持目标是 ES6，Kotlin 1.9.0 版本中推荐 `kotlin-multiplatform` Gradle 插件，它提供 `js()` target。旧版本的 `kotlin-js` 插件不建议使用。参考文档 What's new in Kotlin 1.9.0。

```sh
# Development server and continuous compilation
./gradlew run --continuous
```

Kotlin Web 应用开发参考文档：
09.4.3. Development server and continuous compilation
09.4.10. Build a web application with React and Kotlin/JS — tutorial

Kotlin Wasm 目前是实验性特性，WebAssembly (Wasm) 是 Web 二进制程序，基于 stack-based virtual machine。可以在 Gradle 项目配置脚本中设置 browser 或者 node 运行环境。

1. https://kotlinlang.org/docs/js-overview.html
2. https://kotlinlang.org/docs/js-project-setup.html
3. https://kotlinlang.org/docs/js-project-setup.html

```sh
plugins {
    id 'org.jetbrains.kotlin.multiplatform' version '1.9.10'
}
kotlin {
    js {
        useEsModules() // Enables ES6 modules
        browser {  }
        node {  }
        binaries.executable()
    }
}
dependencies {
    implementation npm('react', '> 14.0.0 <=16.9.0')
}
// Enables ES6 classes generation
tasks.withType<KotlinJsCompile>().configureEach {
    kotlinOptions {
        useEsClasses = true
    }
}
```

Kotlin 1.4.0 开始支持 Kotlin/JS IR 编译器后端，替换旧版的 Kotlin/JS compiler，通过 Kotlin Multiplatform 插件启用，Gradle 配置脚本中可以传递编译类型给 js 方法，类型设置如下：

1. `IR` 使用新的 Kotlin intermediate representation (IR) 编译器后端；
2. `LEGACY` 使用旧版 Kotlin/JS compiler 后端；
3. `BOTH` 同时启用 IR 和旧编译器；

```sh
kotlin {
    js(IR) { // or: LEGACY, BOTH
        // ...
        binaries.executable() // not applicable to BOTH, see details below
    }
}
```

Kotlink/JS 依赖配置主要是 NPM 依赖的处理，按照 package.json 的依赖配置，还有以下形式：

1. devDependencies, via devNpm(...),
2. optionalDependencies via optionalNpm(...), and
3. peerDependencies via peerNpm(...).

运行 Kotlin/JS 项目：

```sh
./gradlew jsRun
./gradlew jsRun --continuous
./gradlew jsRun -t
```


## 🍀 Maven 项目管理
1. https://maven.apache.org/download.cgi
2. https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html
3. https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html
4. https://maven.apache.org/pom.html

Maven 配置文件可以描述项目的结构和依赖关系，使用插件来执行各种构建任务。

1. 约定优于配置： Maven 默认约定包括项目目录结构等，减少了项目配置的复杂性。
2. 标准化构建流程： 标准化构建生命周期包括编译、测试、打包、部署等阶段。
3. 自动依赖管理： Maven 依赖仓库（运程或本地）可以自动解决项目的依赖关系。
4. 丰富的插件： 插件可用于执行各种任务，如编译、测试、部署、生成文档等。
5. 可维护配置： Maven 的构建配置保存在 POM 文件中，使构建配置易于维护和共享。

Maven 项目管理工具，一些基本的操作命令参考：

```sh
mvn archetype:generate   # 生成、选择项目模板
mvn dependency:tree    # 打印依赖树
mvn validate       # 验证项目
mvn compile        # 编译程序
mvn test-compile   # 编译测试程序
mvn test          # 执行单元测试
mvn package       # 构建、打包项目
mvn clean         # 清理项目
mvn install       # 装到依赖包到 Maven 本地资源库
mvn site          # 为您的项目生成信息文档站点
mvn site-deploy   # WebDAV 部署，自动生成的文档站点，打包为 WAR 文件
mvn tomcat:deploy #  WAR 文件部署到 Tomcat
```

Maven 提供了数种项目模板原型：
https://maven.apache.org/archetype/index.html

1: maven-archetype-archetype (An archetype which contains a sample archetype.)
2: maven-archetype-j2ee-simple (An archetype which contains a simplifed sample J2EE application.)
3: maven-archetype-plugin (An archetype which contains a sample Maven plugin.)
4: maven-archetype-plugin-site (An archetype which contains a sample Maven plugin site.)
5: maven-archetype-portlet (An archetype which contains a sample JSR-268 Portlet.)
6: maven-archetype-profiles ()
7: maven-archetype-quickstart (An archetype which contains a sample Maven project.)
8: maven-archetype-site (An archetype which contains a sample Maven site which demonstrates
      some of the supported document types like APT, XDoc, and FML and demonstrates how
      to i18n your site. This archetype can be layered upon an existing Maven project.)
9: maven-archetype-site-simple (An archetype which contains a sample Maven site.)
10: maven-archetype-webapp (An archetype which contains a sample Maven Webapp project.)

可以使用 mvn archetype:generate 逐步按提示操作，或者设置参数使用 Batch mode 创建项目：

	mvn -B archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4

选好项目原型，Maven 还会询问项目细节，按要求输入项目细节。

- groupId 指定一个唯一的命名空间；
- artifactId 项目名，会创建相应的子目录；

可以使用相同值，但是一般上 groupId 表示一组项目共用的 ID，而 artifactId 用于标志某个工程。比如 org.apache.maven.plugins 这个 groupId 就有相当插件与之相关。

项目结构参考：

```sh
$ tree myaid/
myaid/
|-- pom.xml
`-- src
    |-- main
    |   `-- java
    |       `-- mgid
    |           `-- App.java
    `-- test
        `-- java
            `-- mgid
                `-- AppTest.java
```

Maven 支持多个项目，只需要将项目目录作为模块添加到顶层 pom.xml：

```xml
  <modules>
    <module>my-app</module>
    <module>my-webapp</module>
  </modules>
```

执行 `mvn compile` 命令开始编译项目，执行 `mvn test` 进行单元测试，初始模板中只包含 `assertTrue( true )` 测试断言。为了对主程序的打印内容进行测试，可以使用以下方法调用 shell 命令并获取输出内容：

	ProcessBuilder command("java", "-cp", "target/classes", "mygid.App");
	Runtime.getRuntime().exec(["java", "-cp", "target/classes", "mygid.App"])

打包后，直接运行 **java -jar demo.jar** 就可以启动你的应用了！

使用新版本的 maven-compiler-plugin 插件，不再支持旧版 JDK 5，需要在 Maven 配置文件 pom.xml 增加 JDK 版本设置，或者修改插件默认设置：
https://maven.apache.org/plugins/maven-compiler-plugin/

	Source option 5 is no longer supported. Use 7 or later.  

资源构建中使用的 JDK 6、7、8 版本一般对应 1.6，1.7，1.8 的写法。注意，plugins 要写在 build 标签内部，不然无法识别

```xml
<project 
  xmlns="http://maven.apache.org/POM/4.0.0" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>mgid</groupId>
  <artifactId>myaid</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>myaid</name>
  <url>http://maven.apache.org</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.encoding>UTF-8</maven.compiler.encoding>
    <java.version>17</java.version>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
  </properties>
  
  <build>
    <plugins>
      <plugin>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.1</version>
        <configuration>
          <source>17</source>
          <target>17</target>
        </configuration>
      </plugin> 
    </plugins> 
  </build>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

App.java 代码参考：

```java
package mgid;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
    }
}
```

AppTest.java 测试代码参考，使用 Junit 3 编写测试程序，需要扩展 TestCase 基类：

```java
package mgid;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class AppTest 
    extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public AppTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testApp() throws IOException
    {
        // assertTrue( true );
        Process ps = Runtime.getRuntime().exec(
            new String[]{"java", "-cp", "target/classes", "mgid.App"});
        // ProcessBuilder pb = new ProcessBuilder();
        // ProcessBuilder pt = pb.command("java", "-cp", "target/classes", "mgid.App");

        try {
            // Process ps = pt.start();
            BufferedReader reader = new BufferedReader(
                                new InputStreamReader(ps.getInputStream()));
            String line;
            while ( (line = ps.errorReader().readLine()) !=null) {
                System.out.println("Error: " + line);
            }
            while ((line = reader.readLine()) != null ) {
                System.out.println("Read line: " + line);
                assertEquals("Hello World!", line);
            }
        } catch (IOException ex) {
            throw ex;
        }
    }
}
```

测试报告参考：

```sh
-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running mgid.AppTest
Read line: Hello World!
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.188 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
```

## 🍀 Gradle 项目管理
1. https://gradle.org/releases/
2. https://docs.gradle.org/current/samples/sample_building_java_applications_multi_project.html
3. https://docs.gradle.org/8.3/userguide/command_line_interface.html

Gradle 主要特点如下，其默认配置脚本是 build.gradle：

1. 声明式：Gradle 使用更简洁、更易读的 Groovy DSL 编写构建脚本。
2. 灵活性：Gradle 支持多项目、变体和自定义构建逻辑。
3. 依赖管理：支持自动从 Maven 仓库或其他仓库下载所需的库。
4. 插件化：丰富的插件以及各种任务定制，如编译、测试、打包、部署等。
5. 增量构建：自动判断需要重新构建的文件，从而提高构建效率。

Gradle 官方开源代码中包含非常完整的文档源文件，毕竟是作为一个源代码压缩包 50MB 的构建工具。文档位于 gradle-8.4.0/subprojects/docs 目录下，使用 AsciiDoc 格式，

和 GNU Make 处理依赖关系一样，Gradle 也会处理依赖的更新关系，GNU Make 脚本中的 Targets 等价于 Gradle 脚本中的 Tasks。当一个 build.gradle 更新后，Gradle 就需要重新生成 Task Graphs，根据其依赖关系、更新状态来决定要执行什么构建任务。

参考官方文档 Authoring Gradle Builds - Learning the Basics - Understanding the Build Lifecycle
1. https://docs.gradle.org/current/userguide/build_lifecycle.html
2. https://docs.gradle.org/current/userguide/img/task-dag-examples.png

典型的 Gradle 构建流程包含如下步骤：

-	1. Initialization
-	1.1. Detects the settings file.
-	1.2. Evaluates the settings file to determine projects and subprojects.
-	1.3. Creates a Project instance for every project.
-	2. Configuration
-	2.1. Evaluates the build scripts of every project participating in the build.
-	2.2. Creates a task graph for requested tasks.
-	3. Execution
-	3.1. Schedules and executes each of the selected tasks in the order of their dependencies.

可以使用 Groovy 或者 Kotlin 脚本作为构建规则配置文件 build.gradle(.kts)，推荐效率更快的 Groovy 脚本。Gradle 构建系统中有三类脚本，脚本中可以使用的全局对象参考 Gradle DSLs and API 文档。

|  Type of script | Delegates to instance of | File name
|-----------------|--------------------------|-------------------
| Build script    | Project                  | build.gradle
| Init script     | Gradle                   | init.gradle
| Settings script | Settings                 | gradle.properties

1. https://docs.gradle.org/current/userguide/groovy_build_script_primer.html
2. https://docs.gradle.org/current/userguide/tutorial_using_tasks.html
3. https://docs.gradle.org/current/dsl/index.html
4. Project https://docs.gradle.org/current/dsl/org.gradle.api.Project.html
5. Task https://docs.gradle.org/current/dsl/org.gradle.api.Task.html
6. Gradle https://docs.gradle.org/current/dsl/org.gradle.api.invocation.Gradle.html
7. Settings https://docs.gradle.org/current/dsl/org.gradle.api.initialization.Settings.html

主要是 Project 和 Task 对象，整个构建脚本 build.gradle 就可以看作是一个 Project 对象，它包含一系列内置的 Task，用户可以随时向 `TaskContainer` 注册自己的任务，比如 `tasks.register('hello')` 。脚本中，可以使用 `ProviderFactory` 系统环境变量，也可以直接使用 Java API `System.getenv()`。还经常使用 TaskContainer.withType() 方法给指定的任务添加设置。 

构建脚本的编译、执行可以使用 `ScriptHandler` 对象来管理，可以使用 buildscript 脚本块设置，在此脚本块中设置 classpath，它会用于加载 build script 依赖的插件，例如以下例子中使用的 Base64 编码器。

```sh
mport org.apache.commons.codec.binary.Base64

buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath group: 'commons-codec', name: 'commons-codec', version: '1.2'
    }
}

def classpath = providers.environmentVariable("CLASSPATH").get()
defaultTasks 'taskY', 'taskX'

tasks.register('encode') {
    doLast {
        def byte[] encodedString = new Base64().encode('hello world\n'.getBytes())
        println new String(encodedString)
    }
}

tasks.register('taskX') {
    dependsOn 'taskY', 'encode'
    doFirst { println "taskX begin..." }
    doLast {
        println "CLASSPATH: " + classpath
    }
}

tasks.register('taskY') {
    doLast {
        3.times { println "taskY $it" }
    }
}
# > gradle -q task1
# taskY 0
# taskY 1
# taskY 2
# taskX
# aGVsbG8gd29ybGQK
# taskX begin...
# CLASSPATH:~/.gradle/wrapper/dists/gradle-8.3/lib/gradle-launcher-8.3.jar
```

Gradle 提供 Maven 兼容功能，执行 `gradle init` 命令初始化项目，此命令会生成以下脚本：

1. gradle: Gradle start up script for UNIX-like sytem.
2. gradlew.bat: Gradle startup script for Windows.
3. build.gradle 主项目构建脚本。
4. settings.gradle 主项目配置脚本。
5. gradle\wrapper\gradle-wrapper.properties 包装程序的配置文件，包含指定 Gradle 版本。

Gradle 初始化任务还可以根据 pom.xml 项目配置生成 build.gradle 配置脚本。

1. https://docs.gradle.org/current/userguide/dependency_management.html
2. https://docs.gradle.org/current/userguide/compatibility.html
3. https://docs.gradle.org/current/userguide/upgrading_version_8.html

启动脚本负责配置 Gradle Wrapper 运行环境，包括下载包装程序配置文件中指定的 Gradle 二进制程序包，如果当前系统没配置好相应 Gradle 版本。所有下载到的 Gradle 会保存在用户目录下的 .gradle 子目录内。

实际开发中，可能会遇到的不同的项目需要不同版本的 Gradle 问题。Gradle Wrapper 就是对 Gradle 的一层包装，官方使用包装程序解决 Gradle 版本问题，初始化项目配置就会在 gradle 目录下存放一个包装程序，其中指定了项目当前配置的 Gradle 版本。

以下是 gradle-wrapper.properties 配置参考：

```sh
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.3-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```

使用 `gradle wrapper` 命令可以生成 Gradle wrapper 文件，还可以指定版本等等，具体操作参考：

```sh
	gradle help --task wrapper
	gradle --version
	# Gradle 8.3
	$ ./gradlew wrapper --gradle-version 7.2
	$ ./gradlew --version
	# Gradle 7.2
```

注意使用的 Gradle 版本差异，可能会出现以下错误：

	Could not find method testCompile() for arguments
	Could not find method compile() for arguments
	Could not find method application() for arguments xxx of type org.gradle.api.Project.
	Could not find method testRuntime() for arguments xxx of type ...DefaultDependencyHandler.

出现此错误原因是 Gradle 版本更新，Gradle 7 移除了 compile 和 runtime 方法，使用 testImplementation 替换 testCompile，因此换一下就好，依赖定义形式参考如下：

Gradle 6.9 升级到 Gradle 7 版本的差别参考官方文档：Upgrading your build from Gradle 6.x to 7.0

Table 1. Common configuration upgrades
https://docs.gradle.org/current/userguide/upgrading_version_6.html

	Removed Configuration	   New Configuration
	---------------------      --------------------------
	compile                    api or implementation
	runtime                    runtimeOnly
	testRuntime                testRuntimeOnly
	testCompile                testImplementation
	<sourceSet>Runtime         <sourceSet>RuntimeOnly
	<sourceSet>Compile         <sourceSet>Implementation

```js
dependencies {
	// testCompile group: 'junit', name: 'junit', version: '4.13.1'
    testImplementation group: 'junit', name: 'junit', version: '4.13.1'

    implementation 'com.google.guava:guava:31.1-jre' 
    testImplementation 'junit:junit:3.8.1'
}
```

用户主目录 .gradle 子目录下创建 init.gradle 文件可以配置依赖库的远程服务器：
https://developer.aliyun.com/mvn/guide

```js
allprojects {
    repositories {
        mavenLocal()
        maven { url "https://maven.aliyun.com/nexus/content/repositories/central/" }
    }
}
```

Gradle 网络功能可能导致卡顿，运行如下命令可以获取构建报告，HTML 格式展示：

	gradle build -profile

一个不常见的问题是 Gradle Startup 时间长，可能占用了整个构建过程的大部分时间。
https://docs.gradle.org/current/userguide/performance.html

用户主目录中 .gradle/gradle.properties 配置文件可以全局地控制 Gradle 行为，比如是否启用 daemon 服务程序、并行编译等等：

```sh
#Enable daemon
org.gradle.daemon=true

# Try and findout the best heap size for your project build.
org.gradle.jvmargs=-Xmx5120m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

# Modularise your project and enable parallel build
org.gradle.parallel=true

# Enable configure on demand.
org.gradle.configureondemand=true
```

Java 17 移除了 MaxPermSize 虚拟机配置选项，可以在配置文件中删除：

	Unrecognized VM option 'MaxPermSize=512m' 


Gradle 初始化命令一般流程涉及以下内容：

1. Select type of project to generate: asic, pplication, ibrary, Gradle plugin
2. Split functionality across multiple subprojects? app or app with library projects
3. Select implementation language: `C++`, `Groovy`, `Java`, `Kotlin`, `Scala`, `Swift`
4. Select build script DSL: `Groovy`, `Kotlin`
5. Select test framework: `JUnit 4`, `TestNG`, `Spock`, `JUnit Jupiter`
6. Project name (default: demo)
7. Source package (default: demo)

如果使用 Groovy 脚本作为配置文件，那么需要注意，配置脚本中的方法调用、属性赋值的差别。因为 Groovy 语法上参考了 Python 等新式脚本，所以可以省略圆括号，参数列表依然使用逗号作为参数的分隔符。而属性值的修改，则需要使用 = 进行赋值。

Gradle 配置脚本中的依赖项声明形式：

```sh
dependencies {
    implementation 'org.hibernate:hibernate-core:3.6.7.Final'
    api 'com.google.guava:guava:23.0'
    testImplementation 'junit:junit:4.+'
}
```

implementation (supersedes compile) — used for compilation and runtime
testImplementation — test equivalent of implementation

0. `compileOnly` 仅在编译时使用的依赖项，不需要在运行时 CLASSPATH 列表中出现。
1. `runtimeOnly`，取代旧版本的 runtime，只用于运行时的依赖项。
2. `testCompileOnly` — same as compileOnly except it’s for the tests
3. `testRuntimeOnly` — test equivalent of runtimeOnly
4. `implementation`，取代旧版本 compile，编译项目源代码以及运行时的依赖项。
5. `testImplementation` 编译和运行项目测试程序所需的依赖项，比如 JUnit 这种。
6. `api` 编译项目源代码所需的依赖项，并且这些依赖项是项目 API 的一部分。

Java Library Plugin，`id ('java-library')` 激活，它可以为 JVM 项目提供以下功能：

1. `compileJava` 任务支持，编译 `src/main/java` 目录下的源代码文件；
2. `compileTestJava` 任务支持，编译 `src/test/java` 目录下的测试程序代码；
3. `test` 任务支持，运行 `src/test/java` 中的测试程序；
4. `jar` 任务支持，打包主类和 `src/main/resources` 资源到一个 JAR 文件，命名规则：project-version.jar
5. `javadoc` 任务支持，生成所有主类型 Javadoc 文档；


使用 `gradle tasks` 命令可以查看当前项目可操作的构建任务。项目任务分为 6 组：

1. Build tasks
2. Build Setup tasks
3. Documentation tasks
4. Help tasks
5. Publishing tasks
6. Verification tasks

Gradle 命令参考如下，按项目管理流程罗列：

```sh
$ gradle --version

Gradle 6.6
Kotlin:       1.3.72
Groovy:       2.5.12
Ant:          Apache Ant(TM) version 1.10.8 compiled on May 10 2020
JVM:          17.0.8 (Oracle Corporation 17.0.8+9-LTS-211)

# Command help
$ gradle --help
$ gradle help --task run
$ gradle tasks
$ gradle tasks --group="build setup"

$ gradle help
Starting a Gradle Daemon, 1 incompatible and 1 stopped Daemons could not be reused, use --status for details
# To run a build, run gradle <task> ...
# To see a list of available tasks, run gradle tasks
# To see more detail about a task, run gradle help --task <task>
# To see a list of command-line options, run gradle --help

# Common Project Tasks
$ gradle init
$ gradle test --tests package.AppTest
$ gradle clean test --tests My*Test
$ ./gradlew check
$ ./gradlew test
$ ./gradlew projects
$ ./gradlew properties
$ ./gradlew dependencies
$ ./gradlew build
$ ./gradlew compileJava
$ ./gradlew compileTestJava
$ ./gradlew publish
$ ./gradlew jar
$ ./gradlew run
$ ./gradlew run -t --args "passed to the main class"
$ ./gradlew clean
```

Grandle 提供 -t (continuous) 可以充当 watch 工具使用，它会监视代码文件的改动，并自动重复运行。

配置使用 application 插件，定义应用程序入口类，然后就可以通过 `gradle run` 命令执行指定的应用程序。此外，也可以直接定义用户 Task，使用 Exec 或者 JavaExec 任务执行指定命令行程序、Java 程序，使用 `gradle :runApp1` 这样的命令执行相应 Task，命令中的冒号表示要项目。一般将任务定义放置在 dependencies 配置后面，否则可能出错。可以使用 `--args` 命令行选项或者 `args` 任务属性给程序传递参数。
1. https://docs.gradle.org/current/dsl/org.gradle.api.tasks.Exec.html
2. https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html
3. https://docs.gradle.org/current/userguide/migrating_from_groovy_to_kotlin_dsl.html

```sh
task runApp1(type: Exec) {
    dependsOn build
    group ="Execution"
    description ="Run the main class with ExecTask"
    commandLine "java","-classpath", sourceSets.main.runtimeClasspath.getAsPath(), "your.AppClass"
}

task runApp2(type: JavaExec) {
    group ="Execution"
    description ="Run the main class with JavaExecTask"
    classpath = sourceSets.main.runtimeClasspath
    mainClass = "your.AppClass"
}
```

Gradle 多项目工程配置可以使用 --include-build 命令行参数，或者 `includeBuild` 以及 `include` 指令包含子项目，可以在 settings.gradle 设置。子项目使用冒号前缀，冒号表示根项目。使用 `gradle -q projects` 命令可以查询项目关系。也可以对指定子项目执行命令，例如 `gradle :app:build`。
1. https://docs.gradle.org/current/userguide/intro_multi_project_builds.html
2. https://docs.gradle.org/current/userguide/organizing_gradle_projects.html

```sh
include ':app1', ':app2', ':app3', ':common'
includeBuild 'my-app'
includeBuild 'my-utils'
```

为了同步管理各个子项目的依赖，避免各个子项目分散处理依赖，可以使用 buildSrc 模块。Gradle 运行时会检查项目中是否存 buildSrc 目录，并尝试编译、测试这个模块的代码，然后将其加入构建脚本的类路径中。

首次启动 Gradle 会先常驻一个 Daemon 服务程序以加速后续的命令执行。

Gradle JVM 插件参考如下：

1. Java Library Plugin  https://docs.gradle.org/current/userguide/java_library_plugin.html
2. Java Application Plugin  https://docs.gradle.org/current/userguide/application_plugin.html
3. Java Platform Plugin  https://docs.gradle.org/current/userguide/java_platform_plugin.html
4. Groovy Plugin  https://docs.gradle.org/current/userguide/groovy_plugin.html
5. Scala Plugin  https://docs.gradle.org/current/userguide/scala_plugin.html

计划弃用或不推荐的插件：

1. application 插件，Gradle 9.0 计划删除，替代：`application { }`。
2. base 插件，Gradle 9.0 计划删除，替代：`base { }`。
3. java (java-library) 插件，Gradle 9.0 计划删除，替代：`java { }`。
4. war 插件，Gradle 9.0 计划删除，替代：`war { }`。
5. ear 插件，Gradle 9.0 计划删除，替代：`ear { }`。
6. project-report 插件，Gradle 9.0 计划删除，替代：`tasks.withType(HtmlDependencyReportTask) `。

根据 JUnit 版本不同，在缺失 JVM Test Suite 插件时，需要手动声明测试运行时 classpath：https://docs.gradle.org/current/userguide/jvm_test_suite_plugin.html

1. JUnit 5 需要 junit-platform-launcher 的 `runtimeOnly` 以及测试引擎的 `implementation` 依赖；
2. JUnit 4 只需要 junit 4 的 `implementation` 依赖；
3. JUnit 3 需要 junit 4 的 `runtimeOnly` 以及 junit 3 的 `compileOnly`；

```js
dependencies {
    // If using JUnit Jupiter
    testImplementation("org.junit.jupiter:junit-jupiter:5.9.2")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

    // If using JUnit Vintage
    testCompileOnly("junit:junit:4.13.2")
    testRuntimeOnly("org.junit.vintage:junit-vintage-engine:5.9.2")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

    // If using JUnit 4
    testImplementation("junit:junit:4.13.2")

    // If using JUnit 3
    testCompileOnly("junit:junit:3.8.2")
    testRuntimeOnly("junit:junit:4.13.2")
}
```

测试程序中导入依赖库也需要根据所使用的 JUnit 版本导入相应的命令空间：

	import org.junit.jupiter.api.Test;
	import static org.junit.jupiter.api.Assertions.assertEquals;

使用 `gradle -Dtest.single=App test` 命令可以执行单个测试，测试程序名中可以使用 * 通配符来运行多个测试。可以直接调用 java 命令运行测试程序，一般运行 Gradle 后会自动下载 junit 依赖库，将其路径添加到 classpath 即可以运行测试程序：

	$ java -cp 'target/test-classes;c:/gradle/lib/junit-4.13.2.jar' mgid.AppTest

编辑 Maven conf/setting.xml 配置文件，启用本地仓库，这样就可以缓存下载过的依赖包。下次编译时，会优先从本地的仓库中找依赖包，其次从 Maven 服务中心仓库去下载。默认本地仓库路径是：${user.home}/.m2/repository

0. https://docs.gradle.org/current/userguide/java_testing.html
1. https://docs.gradle.org/current/userguide/jvm_test_suite_plugin.html
2. https://docs.gradle.org/current/userguide/upgrading_version_8.html#test_suites

以下配置同时启用 Jupiter 和 Vintage，这样就可以支持 JUnit 3 和 JUnit 4，以及 JUnit 5：

```js
dependencies {   
    testImplementation 'org.junit.jupiter:junit-jupiter:5.7.1'
    testCompileOnly 'junit:junit:4.13'
    testRuntimeOnly 'org.junit.vintage:junit-vintage-engine'
    testRuntimeOnly 'org.junit.platform:junit-platform-launcher'
}

tasks.withType(Test) {
    enabled true
    ignoreFailures false
    useJUnitPlatform()  // Work with jupiter or vintage engine
    testLogging {
        exceptionFormat "full"
        events "started", "skipped", "passed", "failed"
        showStandardStreams true
    }
}
```

Gradle 默认测试报告为 HTML 格式，并且存放于 build/reports/tests/test/index.html
1. https://mvnrepository.com/artifact/org.junit.platform/junit-platform-gradle-plugin
2. https://docs.gradle.org/current/userguide/java_testing.html#using_junit5

Gradle 构建脚本参考：

```js
/*
 * This file was generated by the Gradle 'init' task.
 */

plugins {
    id 'java'
    id 'maven-publish'
}

repositories {
    mavenLocal()
    maven {
        url = uri('http://repo.maven.apache.org/maven2')
    }
}

dependencies {
    testImplementation 'junit:junit:3.8.1'
}

group = 'mgid'
version = '1.0-SNAPSHOT'
description = 'myaid'
sourceCompatibility = '17'

publishing {
    publications {
        maven(MavenPublication) {
            from(components.java)
        }
    }
}

tasks.withType(JavaCompile) {
    options.encoding = 'UTF-8'
}
```

执行 `gradle test` 无法启动测试，并且报告中显示以下内容，那么就是没有配置好测试 JUint 等测试引擎，根据正确的依赖配置修改 build.gradle 脚本：

	Could not start Gradle Test Executor
	Could not complete execution for Gradle Test Executor

	Cannot create Launcher without at least one TestEngine; 
	consider adding an engine implementation JAR to the classpath


# 🚩 I/O and Streams 流式数据处理

I/O 是程序最最基础的功能，从早期机械式计算机的开关状态输入，当时是人工控制开关的状态，再到纸质卡片打孔式数据输入，再到电子电路、晶体管开关、集成电路，数据的本质没有改变，但是在硬件实现上工艺却越来起复制，甚至让人觉得抽象得很！

I/O 可以按存在形式分为两种：I/O 物理设备和逻辑 I/O (Logical I/O)。

物理设备 I/O 是计算机外部输入数据的来源，通常是 CPU 通过读写指令从磁盘等存储设备实际获取数据。逻辑 I/O 是对存储器（块，缓冲区）获取数据。硬件设备通过抽象层（HAL - Hardware Abstract Layer）接入计算机操作系统，硬件驱动程序按照 HAL 接口规范编写驱动以实现数据的传输。

大部分物理 I/O 设备操作是异步的，因为 CPU 速度对于 I/O 设备不是一个数量级。CPU 传输完成一部分数据后通常不会等待（Bloking）未传输完的部分，而是转而做其他更重要计算工作，它和中断系统组成一个消息系统，物理设备在数据准备好时会触发中断发信号，CPU 得到中断信息才会回来继续处理剩余数据。

缓冲区（Buffer）在 I/O 数据传输过程中相当一个中间人。I/O 软件的最后一个问题也是缓冲（buffering）。通常情况下，从一个设备发出的数据不会直接到达接收端。其间会经过一系列的校验、检查、缓冲等操作才能到达。举个例子来说，从网络上发送一个数据包，会经过一系列检查之后到达缓冲区，从而消除缓冲区填满和缓冲区过载。

尽管，I/O 和流式数据处理经常混为一谈，但是它们是两个完全不同的概念。

“流式”Streams 是 I/O 数据处理的一种模式，进行流动式数据处理的一种抽象模型，各类型的数据序列就如同水流，这些数据序列称之为 elements，通过流式接口定义的各种方法进行处理。

将早期机械开关机构和 CPU、内存等集成电路中的晶体管开关放到一起，不难发现数据即开关状态的数据，I/O 操作即通过开关数据的读写实现对应天关电路状态的切换。

I/O 字面意思（Input/Output）即输入/输出，通常指 CPU 与内部存储器、外部存储器，或其他周边设备内部内存之间的数据输入和输出。

总的来说，CPU 与设备的 I/O 操作有三种基本形式：

1. 程序直接控制方式（Programmed I/O）
2. 中断驱动方式（Interrupt-Driven I/O）
3. DMA（Direct Memory Access）
4. 通道控制方式（I/O Channel）

轮询（Polling）是常见一种程序控制 I/O，它需要大量 CPU 时间来循环做 IO 测试。计算机的 I/O 测试指令通过轮询的方式，检测 I/O 设备的忙/闲标志，决定主存和外设之间是或否传出一个字或者一个字符。在这种情况下，CPU的大量时间在等待输入、输出的循环检测上，使计算机不能充分发挥效率，外设也得不到合理的使用，整个系统效率低下。

程序中断（Interrupt-Driven I/O）：I/O 设备的控制器逐个比特的从设备中读取一块数据放入设备的内部缓冲区中，然后，计算该块数据的校验和，以保证读取的正确性。接着，设备控制器发出中断信号，操作系统开始逐个字节地从缓冲区中数据读入内存。中断机制的引入，使得外围设备有了反映自身状态的能力，仅当 I/O 操作正常或者异常结束时才中断 CPU，从而实现了一定程度的并行。但是，I/O 操作毕竟是由CPU控制的，此时每传输一个字或字符，往往就要中断一次。中断也需要消耗时间，因此这种模式也在一定程度上浪费 CPU 时间。I/O 设备很多时，CPU 可能完全陷入处理 I/O 中断中。

CPU 时间作为计算机系统中最宝贵的硬件资源，设计新式 I/O 操作机制是必需的，DMA 方式解决了以上两种形式的最大弊端：大量消耗 CPU 时间资源。DMA 在内存和 I/O 设备之间直接进行数据交换，不需要 CPU 的干预。当需要 I/O 数据传输时，CPU 初始化 DMA 控制器，之后 DMA 接管总线的使用权，将所需要的数据全部读入内存后， I/O 设备的控制器才会发出中断。本质上讲，DMA 也是 Programmed I/O，只是 DMA 控制器替代了 CPU 的工作。

I/O 通道方式是 DMA 方式的发展，是升级版的 DMA，它可以进一步减少 CPU 的干预。DMA 实现了内存块（block）的自动传输，实现对一个数据块的读（或写）为单位的干预。而使用 I/O 通道机制，将可以对一组数据块的读（或写）及有关控制和管理为单位的干预。同时，又可以实现 CPU、通道和 I/0 设备三者的并行操作，从而更有效地提高整个系统的资源利用率。

I/O 通道能执行有限通道指令的 I/O 控制器，代替 CPU 管理控制外设。通道有自己的指令系统，是一个协处理器，一般用在大型计算机系统中（不是大型机）。通道实质是一台能够执行有限的输入输出指令，并能被多台外设共享的小型 DMA 专用处理机。广义上讲，DMA 也属于通道。

通道解决了两个问题：由 CPU 承担 I/O 的工作，以及高速设备共享 DMA 接口的问题。虽然 DMA 无需 CPU 进行外设与内存的数据交换工作，但是这只是减少了 CPU 的负担。因而 DMA 中 I/O 的初始化仍然要由 CPU 来完成。大型计算机系统的外设太多以至于不得不共享有限的 DMA 接口，小型计算机系统比如 PC 机中每个高速设备分配一个 DMA 接口。

I/O 最密切关联的是控制台程序（Console）和软终端（Terminal）。

Unix/Linux 系统术语中，终端指的是一种设备文件（device file），它在读写之上实现了一些额外的 I/O 控制命令（ioctls）。有时叫做伪终端、终端模拟器（terminal emulators）的程序提供（通过内核的薄层封装）。
控制台（Console）在操作系统中以终端（由内核负责实现）的形式显示，在一些系统上，控制台显示为多个终端。它们的名字可以是 ”控制台“，”虚拟控制台”，“虚拟终端”，（“console”, ”virtual console”, ”virtual terminal”）等等。

计算机终端 Terminal 最早是指物理设备，通过电缆连接到大型机上，用于输入或显示来自系统的数据的电子设备，tty （teletype）是早期终端的一种，它的出现比电脑屏幕的使用早了数十年。

早期的终端价格并不昂贵，但是相比打孔卡（punched cards）和打孔带（paper tape）而言速度很慢。但随着技术的进步和显示设备（video displays）的引入，终端将这些交互形式挤出了工业界。与终端相关的是分时系统（timesharing）的发展，它与终端共同发展，能够支持多个用户通过多个终端使用一台机器，从而弥补了用户低效的输入能力。

终端的功能被限制在输入和显示数据；具有显著本地可编程或数据处理能力的设备可称为“智能终端”或胖客户端（fat client）。依赖于主机（host computer）处理能力的终端被称为“哑终端”或瘦终端（thin client）。个人电脑可以通过运行终端模拟器来复现终端的功能，这些终端模拟器可能允许并发运行本地程序和访问非本地终端主机系统。


从 C 语言时代开即，标准 I/O 文件（stdin stdou stderr）就是一个程序的标准配置，到 C++、Java、C#，再到现在的 Kotlin 语言，它们编写程序虽然在语言语法上各有差异，但是程序 I/O 基础结构上并没有太多不同：都不约而同地使用流式接口设计。语义上，标准 I/O 文件是物理设备的一种抽象表达，它们的背后意味着缓冲区中存储的数据。Linux 系统上一切都是文件，物理设备也抽象为文件，不同的设备对应不同的文件类型。

标准 I/O 文件和操作系统有密切联系，分别使用 0 1 2 文件号码表示，可以在命令行中进行管道操作、重定向操作。Linux Command Line and Shell Scripting Bible 一书对标准文件输入、输出重定向操作有详细描述，此书作者是 Christine Bresnahan，内容详尽到几乎可以用啰嗦来形容，能十分体现女性的思维。

因为标准 I/O 都是缓存区方式的数据操作，如果下游程序没有 I/O 数据消费行为，那么上游的程序就有可能写满缓存，并且可能触发错误。

示例，以下 Deno 脚本 (link.ts) 中配置了一个 4 字节的缓存，并通过它来读取用户输入（stdin）：

```ts
#!/usr/bin/env -S deno run

while (true)
{
    const buf = new Uint8Array(4)
    const num = Deno.stdin.readSync(buf)
    console.log("read: ", {num, buf})
    if (num == null) {
        console.log("Bye!")
        break
    }
}
```

尝试运行，并输入一串字符测试它，或者使用管道（|）或者使用文件重定向（<）、输入重定向（<<）功能
指定标准输入文件或数据：

```sh
$ ./link.ts
abcdefghijklm
read:  { num: 4, buf: Uint8Array(4) [ 97, 98, 99, 100 ] }
read:  { num: 4, buf: Uint8Array(4) [ 101, 102, 103, 104 ] }
read:  { num: 4, buf: Uint8Array(4) [ 105, 106, 107, 108 ] }
read:  { num: 4, buf: Uint8Array(4) [ 109, 13, 10, 0 ] }
^Z
read:  { num: null, buf: Uint8Array(4) [ 0, 0, 0, 0 ] }
Bye!
# Pipe some.data to ./link.ts
$ cat some.data | ./link.ts
...
read:  { num: null, buf: Uint8Array(4) [ 0, 0, 0, 0 ] }
Bye!
# redirect some.data to ./link.ts
$ ./link.ts < some.data
...
read:  { num: null, buf: Uint8Array(4) [ 0, 0, 0, 0 ] }
Bye!
# 
$ ./link.ts <<EOF
> app
> EOF
read:  { num: 4, buf: Uint8Array(4) [ 97, 112, 112, 10 ] }
read:  { num: null, buf: Uint8Array(4) [ 0, 0, 0, 0 ] }
Bye!
```

可以看到 while 循环经过了四回读取输入的 13 个字符。控制台默认的输入缓冲区大小肯定不止 4 个字节，这只是脚本程序自身配置的一个缓冲区。控制台本身还有屏幕缓冲区，用于保存输出到屏幕的数据。
可以使用 `stty size` 命令查看当前控制台的屏幕缓冲区大小（row, column）。

控制台程序为了让用户有机会修改输入的数据，默认需要按回车键（Enter）提交输入，称之为正规模式
（canonical mode）。Linux 可以使用 stty 设置默认的控制台行为模式，切换为 raw mode：

```sh
   stty -icanon -echo                # Disable echo and canonical mode.
   stty icanon echo                  # Enable echo and canonical mode.
```

当用户输入 EOF（Windows Ctrl+Z，Linux Ctrl+D）时表示结束输入，程序通常的行为应该是结束退出。

Advanced Bash Scripting Guide (ABS) example code:

-  Example 15-6. Detecting the arrow keys
-  Example 16-59. Capturing Keystrokes
-  Example 17-4. Keypress detection

```sh
#!/bin/bash
# Example 17-4. Keypress detection
# keypress.sh: Detect a user keypress ("hot keys").

echo

old_tty_settings=$(stty -g)   # Save old settings (why?).
stty -icanon
Keypress=$(head -c1)          # or $(dd bs=1 count=1 2> /dev/null)
                             # on non-GNU systems

echo
echo "Key pressed was \""$Keypress"\"."
echo

stty "$old_tty_settings"      # Restore old settings.

# Thanks, Stephane Chazelas.
```

比如使用 Node 处理标准 I/O 文件，就对 process 模块中提供的 stdin stdout stderr 对象进行操作：

```js
/** 
 * npm install turndown
 * npm install @types/node
 * $ java_spec=https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-0-preface8.html
 * $ curl $java_spec | index.js
 * $ echo "<h1>Title</h1><p>paragraph</p>" | node index.js
 * HTML data:31<h1>Title</H1><p>paragraph</p>
 * Title
 * =====
 * 
 * paragraph
 */

/// <reference types="node" />
var TurndownService = require('turndown')

var turndownService = new TurndownService()
var markdown = turndownService.turndown('<h1>Hello world!</h1>')
process.stdout.write(markdown)

process.stdin.on("data", (it) => {
  console.log('HTML data:' + it.length + it.toString());
  process.stdout.write(turndownService.turndown(it.toString()));
})
```

使用 marked 模块转换 Markdown 为 HTML：

```sh
# https://github.com/mixmark-io/turndown
# https://www.npmjs.com/package/marked
$ npx install -g marked
$ echo "# title" | npx marked
<h1>title</h1>
```

代码中使用 turndown 工具将 HTML 转换为 Markdwon 文本，首先需要使用 NPM 安装此模块。至于 @types/node 是辅助性模块，它为 TypeScript 解析器提供类型声明信息，可以为 TypeScript LSP 智能提示提供参照信息。

使用 curl 命 HTML 页面，再通过 | 管道操作符号将数据流导向 Node 程序，即通过 process.stdin.on 注册的 `data` 事件输入的数据。Node 可以通过 console 对象向用户控制台输出信息，也可以直接使用 process.stdout 标准文件输出。

将命令保存到 html2md 脚本文件方便重复使用，调用时只需要给脚本传递 URL 参数：

```sh
#! /usr/bin/env bash
curl -L $1 | node c:/kotlin/html2md/index.js
# ./html2md https://developer.android.google.cn/jetpack/compose/setup
```

Python 脚本中的 I/O 处理也类似，注意：html2markdown 并不是专业工具，仅作演示之用。：

```py
import html2markdown
import sys

literal = '<h1>Title</h1><pre><code>Here is some code</code></pre>'
lines = sys.stdin.readlines()
print(html2markdown.convert(literal))
print(html2markdown.convert(''.join(lines)))
```

Python 脚本中的标准 I/O 文件定义在 sys 模块，FAQ: Why doesn't closing sys.stdout (stdin, stderr) really close it? 描述，执行 ``sys.stdout.close()`` 只是关闭了 Python 脚本级别的文件对象，并未真正关闭 C file descriptor，这需要调用 os 模块的方法，文件号可以使用默认的 0 1 2：

```py
   os.close(stdin.fileno())
   os.close(stdout.fileno())
   os.close(stderr.fileno())
```

1. Python-3.10.2\Doc\faq\library.rst
2. Python-3.10.2\Doc\library\io.rst
3. Python-3.10.2\Doc\library\os.rst
4. Python-3.10.2\Doc\library\sys.rst

Java 的整个发展历史中，先后引入了多种 I/O 模型，依次为：

1. Java 早期版本使用阻塞式 I/O，Blocking I/O (BIO)；
2. Java 1.4 加入非阻塞式 New I/O (NIO)，Non-Blocking I/O；
3. Java 1.7 升级到 NIO 2 异步 I/O，Asynchronous I/O (AIO)。

这里涉及了两组对立的概念：阻塞 (Block)和非阻塞 (Non-Block)，以及同步 (Synchronization) 和异步 (Asynchronous)。前一组描述线程执行等待处理方式，后一组描述执行的秩序。这些是基于操作系统层面的概念，以两 A B 条读取文件的代码语句为例：

1. 阻塞方式执行：执行 A 语句，并等等返回结果，直到获取结果后再执行 B 语句。
2. 非阻塞方式执行：执行 A 语句，尝试获取结果，并且立即返回，并继续执行 B 语句。
3. 同步方式执行：先执行 A 语句读取完文件后，再执行 B 语句。
4. 异步方式执行：执行 A 语句，在其反回结果之前就执行 B 语句。

由于阻塞式 I/O 效率太低，不利于开发高效的并发处理应用，而异步 I/O 则是克服了阻塞式 I/O 的问题，使用其非常适用于高并发应用开发。Nodejs 等平台默认就使用异步 I/O 事件处理模型。

异步 I/O 可以使用不同的方式来实现线程间的任务消息处理：

1. 状态：监听被调用者的状态，调用者按时间同期地轮询状态信息，效率较低。
2. 通知：当被调用者执行完成后，通知调用者，效率较高。
3. 回调：当被调用者执行完成后，执行调用者预设的回调处理函数。

异步 I/O 本质就是堆叠等待时间实现更高效的处理能力，就如你自己做早餐，又要煎蛋又要煮咖啡，那么按异步操作就是：先开火烧水，再开火煎蛋，水开了再冲咖啡，然后蛋也熟了。如果按同步、阻塞的方式，先要煎蛋，等它熟了再烧水冲咖啡，这个过程将所有等待时间串连了起来，相当低效率。

《Unix 网络编程》介绍了五种 I/O 模型，而 Java NIO 使用的是**多路复用 I/O 模型**。

1. Blocking I/O       阻塞 I/O 模型；
2. Non-blocking IO    非阻塞 I/O 模型；
3. I/O multiplexing   多路复用 I/O 模型；
4. Signal driven I/O  信号驱动 I/O 模型；
5. Asynchronous I/O   异步 I/O 模型；

阻塞式 I/O，BIO，是面向字节流或字符流编程的 I/O 方式。I/O 与 Streams 数据处理模式结合，这些相关的类型也就使用 Input、Output 和 Stream 等字符，并且根据具体的 I/O 设备类型命名。InputStream、OutputStream 和 Reader、Writer 是整个 I/O 体系的基类，前一对处理字节数据，后一对处理字符数据。

01. 基础 I/O 流抽象基类：
	01.1. 输入流：可读取数据，基类：InputStream 或者 Reader
	01.2. 输出流：可写入数据，基类：OutputStream 或者 Writer
02. 文件（File）：FileInputStream FileOutputStream FileReader FileWriter
03. 内存缓冲区（Buffer）：BufferedInputStream BufferedOutputStream BufferedReader BufferedWriter
04. 字符串流对象（String）：StringReader StringWriter
05. 网络设备缓冲区（Socket）：SocketInputStream 或 SocketOutputStream
06. 字符流转字节流：InputStreamReader OutputStreamWriter
07. 对象流：ObjectInputStream ObjectOutputStream
08. 打印流：PrintStream(OutputStream) PrintWriter
09. 元素推回流：PushbackInputStream PushbackReader
10. 字节数组流：ByteArrayInputStream ByteArrayOutputStream ByteArrayReader ByteArrayWriter
11. 管道流：PipedInputStream PipedOutputStream PipedReader PipedWriter
12. 过滤器：FilterInputStream FilterOutputStream FilterReader FilterWriter
13. 机器无关的数据流：DataInputStream DataOutputStream

Java System 全局模块定义了 Standard I/O 相关的属性和方法：

```java
public final static InputStream in = null;
public final static PrintStream out = null;
public final static PrintStream err = null;
public static void setIn(InputStream in);
public static void setOut(PrintStream out);
public static void setErr(PrintStream err);
```

使用 ByteArrayOutputStream 搭配 BufferedOutputStream 替换掉 stdout 就可以实现标准输出内容的截取，实现 Redirecting standard I/O。

注意：因为使用了缓冲流，需要配合 flush() 排空缓冲区数据，否则数据不会及时写入 ByteArrayOutputStream 对象：

```java
import java.io.*;
import java.lang.Exception;

public class Redirection {
    public static void main( String[] args ) throws Exception
    {
        ByteArrayOutputStream baos = new ByteArrayOutputStream(10000);
        OutputStream outstream = new BufferedOutputStream( baos );
        PrintStream console = System.out;
        System.out.println("Redirection standard I/O:");
        System.setOut(new PrintStream(outstream));
        try {
            mgid.App.main(args);
        } finally {
            System.out.format("ByteArray size: %d\n", baos.size());
            System.out.flush(); // force write data to baos.
            System.out.format("ByteArray size flushed: %d\n", baos.size());
            System.out.flush(); // force write data to baos.
            System.setOut(console);
            System.out.format("Cat: \n %s", baos.toString());
        }
    }
}
```

以下是扩展自 java.util.stream.BaseStream 的基础流接口：

1. `DoubleStream` 处理 double 数值序列和聚合操作；
2. `IntStream` 处理 int 数值序列和聚合操作；
3. `LongStream` 处理 long 数值序列和聚合操作；
4. `Stream<T>` A sequence of elements supporting sequential and parallel aggregate operations.

流式数据处理的基本特征：

1. 无存储。流式对象只是数据处理的形式，不是一种存储数据的结构。
2. 为函数式编程而生。流式对象中对任何数据的修改都不会影响数据源。
3. 惰性执行。流式对象上的操作只在用户消费数据时才会执行。
4. 可消费性 (Consumable)。数据只“消费”一次，再次使用只能重新生成流对象。

流式操作分为为两类，二者特点如下：

1. 中间操作 (intermediate operations)，新生成一个标记了该操作的 stream 对象。
1.1. 无状态操作：如 filter，map，不需要获得先前遍历过的元素的状态。 
1.2. 有状态操作：如 distinct，sorted, 需要得到先前访问的元素的状态。
2. 结束操作 (terminal operations)，触发实际计算，并且以 pipeline 方式执行。

有状态的操作在产生结果前需要获得完整的输入，操作一个并行流时，可能需要多次传入数据或者需要缓存数据。

大部分情况下可以使用 Collection 对象的 `stream()` `parallelStream()` 方法或者 Stream 对象 `of()` 方法得到一个流对象，参考代码：

```java
int[] arr = new int[]{1,2,3};
IntStream stream1 = Arrays.stream(arr);

String[] stringArr = new String[]{"Hello", "imooc"};
Stream<String> stream2 = Arrays.stream(stringArr);

List<String> strings = Arrays.asList("abc", "");
long count = strings.parallelStream().filter(it -> it.isEmpty()).count();

Stream<Integer> stream = Stream.of(1, 2, 3);
```

Stream 是泛型流对象，它除了 of() 方法，还提供一系列流接口方法：

1. 流对象生成：generate()
2. LongStream 或者 IntStream 闭区间数值序列：range()
3. 元素迭代：forEach()
4. 元素过滤：filter()
5. 元素排序：sorted()
6. 集合转换：collect()
7. 映射操作：map() mapToInt() flatMap()
8. 聚合操作：count() max() min() average() sum()
9. 其它操作：findFirst() findAny()


# 🚩 Java Native Interface (JNI)
1. https://docs.oracle.com/en/java/javase/17/docs/specs/jni/index.html
2. https://docs.oracle.com/javase/8/docs/technotes/guides/jni/index.html
3. https://www3.ntu.edu.sg/home/ehchua/programming/java/JavaNativeInterface.html

JNI 是 Java 实现与原生环境互调用的接口，所谓“原生”是指 Java 虚拟机所使用的实现语言，也就是 C/C++。这也是编程编程领域中的原生一词的一般含义，因为 C/C++ 作为计算机工业的系统编程语言，具有强大的生态位优势。

Android NDK 也是通过 JNI 实现 C/C++ 扩展，因为 Android 是 Linux 系统，所以它加载的总是以 .so 为扩展名动态库。

Java 发展历史中形成了多种 JNI 接口：

1. JDK 1.0 native method interface (NMI)
2. Netscape's Java Runtime Interface (JRI)
3. Microsoft's Raw Native Interface and Java/COM interface

其中 JDK 1.0 Native Method Interface 有两个主要缺陷导致该接口不被常用 Java 虚拟机采用：

首先，本机代码将 Java 对象中的字段作为 C 结构的成员进行访问。然而，Java 语言规范并没有定义对象在内存中的布局方式。如果 Java 虚拟机在内存中以不同的方式布置对象，那么程序员将不得不重新编译原生方法库。

其次，JDK1.0 的原生接口依赖于保守的垃圾收集器。不受限制的使用 `unbound` 使得必要执行保守垃圾收集器扫描原生堆栈。

一个统一的、经过深思熟虑的标准接口为每个人提供了以下好处：

1. Each VM vendor can support a larger body of native code.
2. Tool builders will not have to maintain different kinds of native method interfaces.
3. Application programmers will be able to write one version of their native code and this version will run on different VMs.

实现标准原生方法接口须满足以下要求：

1. *Binary compatibility* - The primary goal is binary compatibility of native method libraries across all Java VM implementations on a given platform. Programmers should maintain only one version of their native method libraries for a given platform.
2. *Efficiency* - To support time-critical code, the native method interface must impose little overhead. All known techniques to ensure VM-independence (and thus binary compatibility) carry a certain amount of overhead. We must somehow strike a compromise between efficiency and VM-independence.
3. *Functionality* - The interface must expose enough Java VM internals to allow native methods to accomplish useful tasks.

JNI 接口是 Java 代码与 C/C++ 代码沟通的桥梁，使用其动态加载的模块方法必须先注册：
1. JNI 扩展方法实现在 C/C++ 代码中；
2. JNI 扩展方法的声明在 Java 类中，使用 `native` 关键字关联原生方法。

CPP 代码中注册 JNI 方法有静态注册和动态注册两种形式，前者根据 JNI 命令规范直接定义对应名字的 C/C++ 函数，后者使用 `RegisterNatives` 函数注册。

编译好扩展库，可以在 Java 代码中调用 `System.load()` 或者 `System.loadLibrary()` 方法加载动态连接库，根据系统不同，可以是 .dll 或者 .so 库，前者指定的路径是绝对路径。后者指定的是库名，会自动拼接 lib 前缀和 .so 后缀，比如加载 stdc 就是加载 libstdc.so 动态库文件，并在当前目录和系统路径搜索动态库。它们内部还会调用 `nativeLoad()` 加载动态库。

JDK 没有提供直接卸载 so 库的方法，而是伴随 ClassLoader 卸载时卸载。

JNI 规范文档所述动态库有以下生命周期函数，Library Lifecycle Function Hooks：
https://github.com/Jeangowhy/opendocs/blob/main/jni_spec.md#library-lifecycle-function-hooks

```cpp
jint JNI_OnLoad(JavaVM *vm, void *reserved);
void JNI_OnUnload(JavaVM *vm, void *reserved);
jint JNI_Onload_<L>(JavaVM *vm, void *reserved);
void JNI_OnUnload_<L>(JavaVM *vm, void *reserved);
```

安装 JDK 后，就可以在安装目录找到 `include/jni.h` 和 `lib/jvm.lib` 等依赖文件，还有依赖硬件平台的 `jni_md.h`，编译扩展库时需要引用。JDK 8 开始使用 `javac -h` 命令替代 javah 工具，为正在编译的 Java 程序生成相应的 C/C++ 头文件。比如编译以下 HelloNative.java 就生成 HelloNativeJNI.h：

```java
package NM;

public class HelloNative {
    static native String nativeHello(String name);
    static {
        System.loadLibrary("NM_HelloNative");
        // System.load("/c/kotlin/myaid/NM_HelloNative.dll");
    }
    public static void main(String[] args) {
        System.out.format("from native: %s\n", nativeHello("NM"));
        System.out.format("from native: %s\n", nativeHello("汉语"));
    }
}
```

Java 程序编译与头文件生成命令参考，头文件已经为 native 方法添加好的原型声明，只需要根据原型声明提供具体实现定义：

```sh
$ javac -h . src/main/java/NM/HelloNative.java
$ ls
NM_HelloNative.h
```

生成的 C/C++ 头文件参考如下，可以看到 JNI 方法名前缀包含的 Java 类型的完整信息，格式为 `Java_PACKAGES_CLASS_native`。代码中的符号说明：

1. `__cplusplus` 宏符号在 C++ 编译环境下有定义，此时就会启用 `extern "C"` 以避免导出的 API 函数命名受到 C++ 函数重载机制 name mangling 影响：
2. `JNIEXPORT` 宏符号标记导出函数， Windwos 系统取值 `__declspec(dllexport)`；
3. `JNIIMPORT` 宏符号标记导入函数，Windwos 系统取值 `__declspec(dllimport)`；
4. `JNICALL` 宏符号表示函数调用约定，Windows 系统下使用 `__stdcall`，Linux 系统使用 C/C++ 默认值；

语言间的互调用涉及大量的数据类型转换工作，JNI 也一样，参考规范文档 [Chapter 3: JNI Types and Data Structures](jni_spec.md#chapter-3-jni-types-and-data-structures)。代码中的 `jstring` 对应 String 类型，`jclass` 对应 Class 类型。根据 JNI 方法实现形式不同，静态函数或类成员方法，参数也有不同形式：

1. native 静态方法：`jclass` 类型参数引用其所注册类的 Class 对象；
2. native 实例方法：`jobject` 类型参数引用调用此 native 方法的对象。

最重要的是 `JNIEnv`，对应一个 JVM 虚拟机环境状态对象引用，此结构体包含 Interface Function Table，通过它可以调用所有 JNI 函数，例如字符转换函数 `GetStringUTFChars`、`GetStringUTFChars`、`GetStringUTFChars` 等等，`GetStringUTFLength` 获取的是 UTF 字符串占用的字节数，使用 `GetStringLength` 并不能准确处理 UTF 字符串。

调用 JNI 函数有 C 和 C++ 两种形式：

```cpp
// We use inlined functions for C++ so that programmers can write:
   env->FindClass("java/lang/String")
// in C:
   (*env)->FindClass(env, "java/lang/String")
```

注意，使用 `GetStringUTFChars` 函数获取 C 字符串，需要调用 `ReleaseStringUTFChars` 函数来释放它在 Java 堆中分配内存。

调用 Java 类定义的方法则需要按 JVM 规范编码，先获取方法 ID 编码（函数名与签名组合的一种表达），再根据 ID 调用对应的方法：

1. GetMethodID -> CallObjectMethod
2. GetStaticMethodID -> CallStaticObjectMethod

函数签名字符串构造参考 JNI 规范文档 [3. JNI Types and Data Structures](#chapter-3-jni-types-and-data-structures) Java VM Type Signatures：

| Type Signature | Java Type |
|----------------|-----------|
| `Z` | boolean
| `B` | byte
| `C` | char
| `S` | short
| `I` | int
| `J` | long
| `F` | float
| `D` | double
| `V` | void
| `L` fully-qualified-class `;` | fully-qualified-class
| `[` type | type[]
| `(` arg-types `)` ret-type | method type

使用 `java -h . HelloNative.java` 命令生成的 C/C++ 头文件参考：

```cpp
/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class NM_HelloNative */

#ifndef _Included_NM_HelloNative
#define _Included_NM_HelloNative
#ifdef __cplusplus
extern "C" {
#endif
/*
 * Class:     NM_HelloNative
 * Method:    nativeHello
 * Signature: (Ljava/lang/String;)Ljava/lang/String;
 */
JNIEXPORT jstring JNICALL Java_NM_HelloNative_nativeHello
  (JNIEnv *, jclass, jstring);

#ifdef __cplusplus
}
#endif
#endif
```

使用 C++ 语言实现 `Hello()` JNI 方法：

```cpp
#include <cstdlib>
#include <cstdio>
#include <iostream>
#include "NM_HelloNative.h"

using namespace std;

JNIEXPORT jstring JNICALL Java_NM_HelloNative_nativeHello
    (JNIEnv * jni, jclass cls, jstring name) {
    jboolean iscopy;
    const char * cstr = jni->GetStringUTFChars(name, &iscopy);
    jsize len = jni->GetStringUTFLength(name);

    char buf[100] = {"UNINSTALLIZED"};
    cout << "Name Length: " << len << endl;
    sprintf( buf, "Hello %s [native]", cstr);
    printf("jclass @:%X %s\n", cls, buf);
    
    jni->ReleaseStringUTFChars(name, cstr);
    return jni->NewStringUTF(buf);
}
```

注意：gcc 和 g++ 命令的区别，它们分别为 C 和 C++ 代码提供默认编译配置，使用 gcc 编译 C++ 代码可能会因为缺失默认配置导致编译错误，例如语言规范定义的符号无定义等。Windows 系统下使用 MinGW 编译工具会遇到 `__int64` 这种类型无定义问题，因为这是 MSVC 编译器提供的定义，JDK Windows 版本中的头文件 jni_md.h 中使用，可以修改它以适用 GCC 编译器：

```cpp
#ifdef __GNUC__
#  ifdef _LP64
typedef long jlong;
#  else
typedef long long jlong;
#  endif
#else
typedef __int64 jlong;
#endif
```

GCC 编译器使用 -E 
```sh
echo __GNUC__ | gcc -E -
```

编译 JNI 扩展模块，生成动态链接库，并运行测试。如果使用 `System.load()` 方法加载动态库，可以使用 `java.library.path` 选项添加动态库所在目录。

```sh
g++ -I"$JAVA_HOME/include" -I"$JAVA_HOME/include/win32" -shared -o NM_HelloNative.dll NM_HelloNative.cpp

java NM.HelloNative
Exception in thread "main" java.lang.UnsatisfiedLinkError: no NM_HelloNative in java.library.path: .
        at java.base/java.lang.ClassLoader.loadLibrary(ClassLoader.java:2429)
        at java.base/java.lang.Runtime.loadLibrary0(Runtime.java:818)
        at java.base/java.lang.System.loadLibrary(System.java:1989)
        at NM.HelloNative.<clinit>(HelloNative.java:6)

java -Djava.library.path=. NM.HelloNative
Name Length: 2
from native: Hello NM [native]
jclass @:50EFF3A8 Hello NM [native]
Name Length: 6
jclass @:50EFF3A8 Hello 姹夎 [native]
from native: Hello 汉语 [native]
```

如果搜索目录没有相应的动态库文件，则触发异常，可以从异常信息中观察到加载动态库的流程。

Shell 输出的字符编码问题：源代码中 UTF 编码的“汉语”错误地显示为“姹夎”。这是因为 UTF 字符集错误地作为 GBK 编码转换为 UTF
编码，如果再转换一次就是变成“濮瑰顕?”。C/C++ 代码中打印的 UTF8 字符串乱码，只需要设置正确的 shell 环境即可以解决，Windows 使用 `chcp 65001` 命令设置 Unidode 模式。Linux 可以设置 `LC_ALL` 和 `LC_CTYPE=en_US.UTF-8`。

Java 源文件使用 GBK 编码，操作系统默认环境编码也为 GBK，那么编译的时候，JVM 将按照 GBK 编码将字节数组解析为字符，然后将字符转换为 Unicode 格式的字节数组存储。当打印字符串时，JVM 会检测操作系统本地的语言环境，Unicode 编码数据会转换为 GBK，然后操作系统将 GBK 格式的内容显示出来。

执行 Java 程序时，可以使用 `-Dfile.encoding=UTF-8` 告诉解析器使用 UTF8 编码处理文件。

当源码文件本身是 UTF-8 编码，就需要使用 `-encoding utf-8` 通知编译器，否则就可能错误地按照系统语言设置将 UTF8 数据进行转码，从而引起编码不一致导致乱码。


Windows 系统上使用 MinGW 编译器编译以上程序时，这只是 jstring 基本类型转换，使用 sprintf 进行格式转换，发生奇怪的问题，无法使用 printf 或者 cout 向标准输出文件打印内容。程序有时正确输出 Java 程序的运行结构，有时打印 Segmentation fault 退出，更多情况是挂起没有任何输出并且占用大量 CPU 时间。这种由于编译兼容问题导致的错误需要从编译工具链层面进行处理，应该使用 MinGW 编译的 JDK。目前 MSys2 未提供有 JDK 安装包，也不能使用 Pacman 工具进行安装。

使用 MSVC 编译器，需要根据所安装的 JDK 平台选择相应的 x86 (32-bit) 或者 amd64 (64-bit) 编译环境：

```sh
cmd.exe
%comspec% /k "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsamd64_x86.bat"
%comspec% /k "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsx86_amd64.bat"
bash
cl -I"$JAVA_HOME/include" -I"$JAVA_HOME/include/win32" -LD -EHsc NM_HelloNative.cpp
```

为了方便执行 JNI 模块的编译与测试运行，将命令写入 buid 脚本，通过调用脚本来完成一系列的操作：

```sh
#! /usr/bin/env sh
echo ------- JNI compiling -------; 
# g++ -I"$JAVA_HOME/include" -I"$JAVA_HOME/include/win32" -shared -o NM_HelloNative.dll NM_HelloNative.cpp
# %comspec% /k "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Auxiliary/Build/vcvarsamd64_x86.bat"
cl -I"$JAVA_HOME/include" -I"$JAVA_HOME/include/win32" -LD -EHsc NM_HelloNative.cpp

echo ------- Java compiling -------; 
javas=`find src/main/java`; 
for it in $javas; 
    do if [ $it -nt timestamp ]; 
        then javac -encoding utf-8 -d build/classes/java/main $it; 
    fi; 
done; 
if [ $? = 0 ]; then java -Djava.library.path=. $1 $*; fi
touch timestamp;
```

只需要先执行 MSVC 环境初始化脚本，然后再执行 `bash -c './build NM.HelloNative'` 就完成 JNI 和 Java 程序的编译与运行。


默认配置只在 JVM 系统崩溃时打印日志文件，并没用启用 Minidump 功能，因为此内存记录文件非常大。它记录了 crash 时的状态信息，可用以事后分析 crash 原因。日志文件中也记录一些信息，包括 Java 命令运行环境、CPU 硬件和操作系统、Global flags、Heap 内存信息、GC 状态信息、动态库加载，还有调用栈信息。Java frames 将代码为多类 (J=compiled Java code, j=interpreted, Vv=VM code)，可以用于定性问题所在代码位置。其中，原生方法入口只记录到 StubRoutines::call_stub。通过系统崩溃日志一般只能定位到发生位置，但不能确定具体原因。

```sh
Java frames: (J=compiled Java code, j=interpreted, Vv=VM code)
j  NM.HelloNative.nativeHello(Ljava/lang/String;)Ljava/lang/String;+0
j  NM.HelloNative.main([Ljava/lang/String;)V+13
v  ~StubRoutines::call_stub
```

| Frame Types | Description |
|-------------|-------------|
| j	| Java code interpreted by the JVM at runtime
| J	| Java code compiled just in time by the JVM
| A	| Java code compiled ahead-of-time, by jaotc
| C	| Native C code from external library, not residing in the JVM
| V	| Native code from library part of the JVM
| v	| Native code genereted by the JVM


可用以调试的命令行参数参考：

0. `-Xcheck:jni` 一般 JNI 问题诊断；
1. `-verbose:class` 查看类加载情况；
2. `-verbose:gc` 查看虚拟机中内存回收情况；
3. `-verbose:jni` 查看原生方法调用情况；
4. `-XX:+CreateMinidumpOnCrash` 或者 JDK9+ `-XX:CreateCoredumpOnCrash` 启用 Minidump；

参考 
Troubleshooting Guide
https://docs.oracle.com/en/java/javase/15/troubleshoot/general-java-troubleshooting.html
Preface Troubleshooting Guide for Java SE 6 with HotSpot VM
https://www.oracle.com/java/technologies/javase/preface.html


# 🚩 Java Virtual Machine
- [Oracle's OpenJDK](http://openjdk.java.net/)
- [Java Language and Virtual Machine Specifications](https://docs.oracle.com/javase/specs/)
- [Java Platform, Standard Edition 8 Reference Implementations](http://jdk.java.net/java-se-ri/8-MR3)
- [JVM参数配置&&命令工具](https://cloud.tencent.com/developer/article/1512211)
- [JVM系列三:JVM参数设置、分析](https://www.cnblogs.com/redcreen/archive/2011/05/04/2037057.html)
- [《深入理解Java虚拟机》读书笔记](https://www.jianshu.com/p/355ae3bcec41)
- [《深入理解Java虚拟机》读书笔记 Class 类文件加载](https://www.jianshu.com/p/4ed041086846)
- [深入理解 Java 虚拟机（全章节完整）](https://blog.csdn.net/TJtulong/article/details/89598598)
- [深入理解JVM（③）JVM运行时数据区域](https://cnblogs.com/jimoer/p/12549269.html)
- [深入理解JVM（③）Java的模块化](https://www.cnblogs.com/jimoer/p/13216782.html)
- [一文看懂分布式事务](https://www.cnblogs.com/jimoer/p/12113286.html)
- [Core Java I Fundamentals & II Advanced Topics](https://horstmann.com/corejava/index.html)

按照 Java virtual machine (VM) 文档所述，JVM 有两种实现形式:

在客户应用程序平台上，JDK 附带的是 Java HotSpot Client VM (client VM)，目标是快速启动、降低内存占用，启动程序时使用 -client 命令行参数。

在所有平台上 JDK 都附带 Java HotSpot Server VM (server VM) 虚拟机，设计目标是最大化实现高效执行应用，启动程序时使用 -server 命令行参数。

高版本的 64 位 JVM 只有 Server 模式，Java 的发展方向也是重点发展大内存的 Server 模式。

作为一个参照，V8 引擎则完全不同，因为 V8 为 Chrome 浏览器服务，发展方向是小内存路线。不论是 Node.js，还是 Deno，作为一个服务端 JS 运行环境，都是推荐开发者根据 CPU 数量开启多个进程。V8 每个新版本除了对最新 es 特性的支持，以及性能优化外，另一个优化方向就是减少内存占用，还有就是减少电量消耗。

JVM 的优化方向是 Server 端，而 V8 则是 PC 端，随着移动端的兴起 V8 的优化方向又多了电量消耗。2018 年开始的 V8 Lite 项目，通过牺牲性能减少了 22%-32% 的内存占用。

Java 虚拟机规范有多种实现，其中 HotSpot VM 是 Oracle JDK 和 Open JDK 中所带的虚拟机，也是目前使用范围最广的 Java 虚拟机。OpenJDK 作为开源的软件技术，已经普及使用。

Google Android Dalvik VM 不能称作正统的 Java 虚拟机，它没有遵循 Java 虚拟机规范，不能直接执行 Java 的 Class 文件，使用的是寄存器架构而不是 JVM 中常见的栈结构。但是它与 Java 又有千丝万缕的联系，它执行的 dex （Dalvik Executable）文件可以由 Class 文件转化而来，使用 Java 语法编写应用程序，可以直接使用大部分的 Java API 等。

在 Java 发展之初，设计者就曾考虑过并实现了让其他语言运行在 Java 虚拟机之上的可能，发布规范文档也是拆分成 Java 语言规范和 Java 虚拟机规范两部分。时至今日，商业和开源机构已经在 Java 语言之外发展出一大批在 Java 虚拟机上运行的语言，如 Groovy、JRuby、Scala 等。

不管什么语言，只要按 JVM 规范实现 class，JVM 就可以解析并运行它。实现语言无关性的基础仍然是虚拟机和字节码存储格式规范，Java 虚拟机规范除了定义 Class 文件的二进制文件格式，还定义了字节码指令集。理论上讲，任一门功能性语言都可以表示为一个能被 Java 虚拟机所接受的有效的 Class 文件。

可以将 JVM 理解为一台实现了高级汇编语言的机器，而且这种高级汇编语言具有 OOP 类对象封装的概念，真的非常高级。

The Java® Virtual Machine Specification 8 文档有 7 个章节，分别讲解了 JVM 各个层面的内容：

- [1. Introduction](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-1.html)
- [2. The Structure of the Java Virtual Machine](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html)
- [3. Compiling for the Java Virtual Machine](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-3.html)
- [4. The class File Format](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html)
- [5. Loading, Linking, and Initializing](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-5.html)
- [6. The Java Virtual Machine Instruction Set](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html)
- [7. Opcode Mnemonics by Opcode](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-7.html)

前面 5 章，除了开始作了一个介绍，其它基本在讲 JVM 基本原理和结构，JVM 编译原理，还有 JVM 引导，Java 字节码文件的结构和类的加载流程，这些都是非常实用的技术，最后面两章主要是字节码指令的参考文档。

探秘 JVM 最好的方法就是下载开源的 JDK 编译运行，使用 GDB 调试原代码是最直接的学习办法。可以在 OpenJDK 官网下载配套的 The official Reference Implementations for Java SE 8 源代码。


**JMM** - Java Memory Model，Java 内存模型用昌来屏蔽掉各种硬件和操作系统的内存访问差异，以实现让 Java 程序在各平台达到一致的内存访问抽象模式。JMM 定义了线程和主内存之间的抽象关系，线程之间的共享变量存储在**主内存** main memory 中，每个线程都有一个私有的**本地内存** local memory，本地内存中存储了该线程以读/写共享变量的副本。本地内存是 JMM 的一个抽象概念，并不真实存在。它涵盖了缓存，写缓冲区，寄存器以及其他的硬件和编译器优化。

Java 虚拟机在执行程序的过程中会把它所管理的内存划分为若干个不同的数据区域，主要分成**线程隔离数据区**和**线程共享数据区**两部分，这些区域有各自的用途，以及创建和销毁的时机，有的区域随着虚拟机进程的启动而一直存在，有些区域则是依赖用户线程的穷的和结束而建立和销毁。

![Java 虚拟机运行时数据区域](https://img2020.cnblogs.com/blog/772743/202003/772743-20200322230955320-675886480.png)

JVM 运行时线程共享数据区域：

- 程序计数器 Program Counter Register

	程序计数器是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器。由于 Java 虚拟机的多线程轮流切换、分配处理器执行时间的方式来实现的，在任何一个确定的时刻，一个处理器（对于多核处理器来说是一个内核）都只会执行一条线程中的指令。因此，为了线程切换后能恢复到正确的执行位置，每条线程都需要有一个独立的程序计数器，各条线程之间计数器互不影响，独立存储，我们称这类内存区域为“线程私有”的内存。

	如果线程正在执行的是一个 Java 方法，这个计数器记录的是正在执行的额虚拟机字节码指令地址；

	如果正在执行的是本地方法 Native Method，这个技术器值则应为空 Undefined。

- JVM 虚拟机栈 Java Virtual Machine Stack

	与程序计数器一样，Java 虚拟机栈也是线程私有的，它的生命周期与线程相同。虚拟机栈描述的是 Java 方法执行的线程内存模型：每个方法被执行的时候，Java 虚拟机都会同步创建一个栈帧 Stack Frame 用于存储局部变量表、操作数栈、动态连接、方法出口等信息。每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈道出栈的过程。

	局部变量表存放了编译期可知的各种 Java 虚拟机基本数据类型，如 boolean、byte、char、short、int、float、long、double、reference 和 returnAddress 类型。其中对象引用并不等同于对象本身，可能是一个指向对象起始地址的引用指针，也可能是指向一个代表对象的句柄或者其他与此对象相关的位置。返回地址 returnAddress 指向了一条字节码指令的地址。

	这些数据类型在局部变量表中存储空间以局部变量槽 Slot 来表示，其中 64bit 的 long 和 double 类型的数据会占用两个变量槽，其余的数据类型只占用一个。而虚拟机真正使用多大的内存空间来实现一个变量槽，是完全由具体的虚拟机实现自行决定的，譬如按照 1 个变量槽占用 32 个比特、64个比特，或者更多。

	在《Java虚拟机规范》中对这个内存区域规定了两类一次状况：

	- 如果线程请求的栈深度大于虚拟机所允许的深度，将抛出 StackOverflowError 异常；
	- 如果Java虚拟机栈容量可以动态扩展，当栈扩展时无法申请到足够的内存，就会抛出outofMemoryError异常。

- 本地方法栈 Native Method Stacks

	与虚拟机栈所发挥的作用是非常相似的，区别在于虚拟机栈是虚拟机执行 Java 方法也就是字节码服务，而本地方法栈则是为虚拟机栈使用到的本地方法服务，HotSpot 虚拟机直接把本地方法栈与虚拟机栈合二为一了。并且与虚拟机栈一样，本地方法栈也会在栈深度移除或者栈扩展失败时分别抛出 StackOverflowError 和 OutOfMemoryError 异常。

线程共享数据区部分：

- Java Heap

	Java 堆是虚拟机所管理的内存中最大的一块，并且是被所有线程共享的一个块内存区域，在虚拟机启动时创建。此内存区域的唯一目的就是存放对象实例，Java 世界里几乎所有的对象实例都在这里分配内存。

	如果从分配内存的角度看，所有线程共享的 Java 堆中可以划分出多个线程私有的分配缓冲区 Thread Local Allocation Buffer 以提升对象分配时的效率。根据 Java 虚拟机规范，Java 对可以处于物理上不连续的内存空间中，但在逻辑上它应该被视为连续的。有些情况，例如处理大对象，典型的数组对象，多数虚拟机实现考虑到实现简单，存储高效等因素，很可能会要求连续的内存空间。

	Java 堆既可以被实现成固定大小的，也可以是可扩展的，不过当前主流的 Java 虚拟机都是按照可扩展来实现的，通过参数执行参数 -Xmn 和 -Xns 设定。如果在 Java 堆中没有内存完成实例分配，并且堆也无法再扩展时，Java 虚拟机将会抛出 OutOfMemoryError 异常。

- Method Area

	方法区与 Java 堆一样，是各个线程共享的内存区域，它用于存储已被虚拟机加载的类型信息、常量、静态变量、即时编译器编译后的代码缓存等数据。

	说到方法区，不得不提一些**永久代** Permanent Generation 这个概念，尤其是在 JDK 8 以前，许多 Java 程序员都习惯在 HotSpot 虚拟机上开发，部署程序，都更愿意把方法区称为 Permanent Generation，或者将两者混为一谈。但两者是不等价的，因为 HotSpot 虚拟机设计团队选择把收集器的分代设计扩展至方法区，所以使用永久代来实现方法区。这样使得垃圾收集器能够像管理 Java 堆一样管理这部分内存，永久代是 JDK 8 之前的 HotSpot 虚拟机特有的机制，其他虚拟机并不存在这个概念，例如 JRockit、J9。

	在后续的发展中，HotSpot 团队意识到永久代的设计并不是一个好主意，所以为了 HotSpot 虚拟机未来更好的发展，在 JDK 6 HotSpot 团队就有放弃永久代，逐步改为采用本地内存 Native Memory 来实现方法区的计划，到了 JDK 7 HotSpot 已经把原本放在永久代的字符串常量池、静态变量等移出，而到了 JDK 8，终于完全废弃了永久代的概念，改用与 JRockit、J9 一样在本地内存中实现的元空间 Meta space 来代替，把 JDK 中永久代还剩余的内容全部移到元空间中，主要是类型信息。

此外，**运行时常量池** Run-Time Constant Pool 是方法区的一部，Class 文件中除了又类的版本、字段、方法、接口等描述信息外，还有一项信息是常量池表 Constant Pool Table，用于存放编译期生成的各种字面量与符号引用，这部分内容将在类加载后放到方法区的运行时常量中。

运行时常量池相对于 Class 文件常量池的一个重要特征是具备动态性，Java 语言并不要求常量一定只有编译期才能产生，运行期间也可以将新的常量放入池中，这种特性被开发人员利用得比较多的便是 String 类的 intern() 方法。

运行时常量池无法申请到内存时也是会抛出 OutOfMemoryError 异常。

另外，**直接内存** Direct Memory 这一概念并不是虚拟机运行时数据区的一部分，也不是 Java 虚拟机规范的一部分。但是这部分内存也被频繁地使用，也可能导致 OutOfMenmoryError 异常出现，所以也是要熟悉的。

在配置虚拟机内存的时候，除了要考虑本机的物理内存外，还需要将直接内存考虑到。经常遇到有些开发者在设置内存时忽略了直接内存，使得各个内存区域总和大于物理内存限制（包括物理的和操作系统级的限制），从而导致动态扩展时出现 OutOfMenoryError 异常。


在 JDK 1.4 中新加入了 NIO（New Input/Output）类，引入了一种基于通道 Channel 与缓冲区 Buffer 的 I/O 方式，它可以使用 Native 函数库直接分配堆外内存，然后通过一个存储在 Java 堆里面的 DirectByteBuffer 对象作为这块内存的引用进行操作。这样能在一些场景中显著提高性能，因为避免了在 Java 堆和 Native 堆中来回复制数据。

JDK 9 引入模块化系统 Java Platform Module System 是一次重要升级，除了像之前 JAR 包那样充当代码的容器之外，还包括：

- 依赖其他模块的列表。
- 导出的包列表，即其他模块可以使用的列表。
- 开放的包列表，即其他模块可反射访问模块的列表。
- 使用的服务列表。
- 提供服务的实现列表。
- 模块化系统

可配置的封装隔离机制解决了原来类路径上跨文件的 public 类的可访问性的问题。使用模块化，意味着 public 并非所有地方代码都可以访问，未导出和未开放的类是不能够被外部使用。

需要先声明导出包的路径，然后在使用时导入模块：

	module example {
	    exports com.demos.test;
	}

	module exampleTwo {
	    requires example;
	}


## ⚡ Java 源代码结构

OpenJDK 开源代码以及规范文档下载：

1. https://hg.openjdk.org/jdk8u/jdk8u60/jdk/
2. https://hg.openjdk.org/jdk8u/jdk8u60/hotspot/
3. https://docs.oracle.com/javase/specs/jvms/se8/html/index.html
4. https://docs.oracle.com/javase/specs/jls/se8/html/index.html

Java 整个系统实现上大体可以划分为三块内容：

1. Java Virtural Machine (JVM)
2. Java Development Kit (JDK)
3. Java Runtime Environemt (JRE)

JVM 实现：虚拟机是整个 Java 系统的基底，没有它就不能运行 Java 程序，更不能跨平台。JVM 源代码就是根据 JVM 规范实现一个可以运行 Java 字节码的虚拟机器。

JRE 即运行时环境，所谓运行即程序运行时需要的系统环境，包含 JVM 环境支持，基础类型库支持，或者扩展类型库的支持。

JDK 作为开发工具包，它本身包含 JRE。运行时是以 Java 代码形式实现的，JRE 也就可以看作是 Java 语言编写的用于初始化 Java 运行时环境的程序。另外 JDK 安装包中包含的模块包：lib/src.zip 是语言模块和工具模块源代码，和 JDK 源代码有文件重叠。模块包中 jdk.compiler 模块提供了传统编译器入口，com.sun.tools.javac 和 sjavac。

JDK 源代码本身不包含独立打包的 lib/src.zip 模块代码，但是包含 JRE 源代码。SDK 主体源代码就是根据 Java 语言规范实现 Jaav 程序的编译（生成字节码）和加载运行，此外还包含了 Java 编译器、各种工具的实现源代码，

在版本历史上，JDK 8 和 JDK 9 是两个重大的更新，其更新的特性分别多达 56 和 91 个，相比一般的版本更新只有 10 ~ 20 个左右。
https://blogs.oracle.com/java/post/the-arrival-of-java-21

阅读源代码时，根据需要选择下载代码包，比如，ClassLoader 类型，它在运行时、JVM 源代码中都有同名类型的实现：

1. jdk-8u60-hotspot/src/share/vm/classfile/classLoader.cpp
2. jdk-8u60/src/share/classes/java/lang/ClassLoader.java
3. jdk-8u60/src/share/native/java/lang/ClassLoader.c

虽然类型同名，但是功能是完全不同，C++ 实现的 JVM 类加载器是将 .class 字节码加载到虚拟机中运行。而另一方是将 .class 等类型加载到 Java 运行时环境，供应用程序使用。

JDK 源代码中 share 目录存放的是平台无关的代码，包括 JRE 源代码，也包含部分 C/C++ Native 实现代码，比如 `System` 模块就是一个 C/C++ 实现的模块。

### ☘ HashMap tableSizeFor()

以下是 JDK 8 和 JDK 14 两个版本的 HashMap 对象的容量调整方法。输入参数是当前 HashMap 实例的初始容量，输出是目标调整容量。

```java
	static final int MAXIMUM_CAPACITY = 1 << 30;
    /**
     * Returns a power of two size for the given target capacity.
     */
    static final int tableSizeFor(int cap) {
        int n = cap - 1;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
    }

    /**
     * Returns a power of two size for the given target capacity.
     */
    static final int tableSizeFor(int cap) {
        int n = -1 >>> Integer.numberOfLeadingZeros(cap - 1);
        return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
    }
    public static int numberOfLeadingZeros(int i) {
        // HD, Figure 5-6
        if (i == 0)
            return 32;
        int n = 1;
        if (i >>> 16 == 0) { n += 16; i <<= 16; }
        if (i >>> 24 == 0) { n +=  8; i <<=  8; }
        if (i >>> 28 == 0) { n +=  4; i <<=  4; }
        if (i >>> 30 == 0) { n +=  2; i <<=  2; }
        n -= i >>> 31;
        return n;
    }
```

Java 原始类型里没有无符号类型，Hash 桶最大容量设置为 2^31，最高位保留作为符号位。没有使用 long 数据类型，可能是性能与空间上的综合考虑。

当初始化HashMap时，如果指定了初始容量initialCapacity，
哈希桶的数目必须是 2^n 次幂，因此，实例初始化时要把 initialCapacity 转化为指定值的最小 2^n 次幂数，例如 initialCapacity = 2，那么就原样返回，initialCapacity = 3，那么就调整为 4。这个方法的巧妙处在于，移位与位或运算的组合。首先通过无符号右移 1 位，再叠加原值，使得最高位的 1 向低位扩散（这个词很贴切），下次再移位时就可以加倍距离，因此使用 1 2 4 8 16 这样的移位，相当是二分法的优化处理算法。

这种算法的不足之处在于，存在冗余操作，如果指定的容量较小，容量为 9 = 1001，只需要执行到 `n |= n >>> 2`，那么后面的三条无符号右移位（`>>>`）都是无效用的操作。这种情况在 JDK 11 中已经得到优化。通过引入 numberOfLeadingZeros 方法求解前导 0 的数量来解决，但是这种引用额外函数的方法有多大效率提升呢？从指令层面上看，额外的函数需要增加调用成本，并且函数体内还有多个 if 语句。

改进后的方法使用 -1（ 32-bit 都置位）按前导 0 的数量，进行无符号右移，最后加 1 使其进位。前缀 0 的判断算法还是二分法，对于一个 32-bit 整数，依次按 16-bit、8-bit、4-bit、2-bit、1-bit 逐级细分处理。可以想象为一个逐级缩小的数据窗口，将要处理的数据从全局到最后一个 bit 的处理过程。算法设计的过程也很妙，先判断左侧 16-bit 是否为 0，如果是就二分处理右侧 16-bit，否则直接处理左侧。

最后的 `n -= i >>> 31` 相当于 `n -= i==2^31? 1 : 0`，也就是数据窗口集聚到最后 1 bit，输入数据 i 的原始值的最低或最高 bit。

### ☘ equals() & hashCode() 等值判断

Java 一般情况下的等值比较是对象内存地址的比较，如果地址不同，两者就是必然不相同。

```java
    // jdk-8u60/src/share/classes/java/lang/Object.java
    public boolean equals(Object obj) {
        return (this == obj);
    }
    // jdk-8u60/src/share/classes/java/util/Objects.java
    public static boolean equals(Object a, Object b) {
        return (a == b) || (a != null && a.equals(b));
    }
    public static int hash(Object... values) {
        return Arrays.hashCode(values);
    }

    // jdk-8u60/src/share/classes/java/util/Arrays.java
    public static int hashCode(long a[]) {
        if (a == null)
            return 0;

        int result = 1;
        for (long element : a) {
            int elementHash = (int)(element ^ (element >>> 32));
            result = 31 * result + elementHash;
        }

        return result;
    }
```

Java 打印出来的对象信息其格式和 JVM 规范一致，方括号表示一个数组，@ 后面表示 hash code，这是一个 int 类型数值，而不是对象内存地址。Hash code 可以用于标一个对象，对于同一类型的对象来说，具有唯一性。

为何 hashCode() 方法会和等值关系产生联系呢？原因很直接：出于性能考虑。并且 `hashCode()` 方法主要是为 hash tables 相关的数据类型服务，如 `HashSet`、`HashMap`、`LinkedHashMap` 等基于哈希表的数据结构。

Java 集合类型是联系非常密切的常用数据类型，它们之间的联系可以参考 Thinking in Java - 13. Holding Your Objects - Summary 展示的分类图 Simple Container Taxonomy：

![Simple Container Taxonomy](https://www.linuxtopia.org/online_books/programming_books/thinking_in_java/TIJ325.png)

使用以下程序测试 hash 码的生成，每次运行时，hash 码总是按算法生成的序列依次分配给需要使用 hash 码的对象。所以，程序每次运行，输出 a 和 b 变量对应的 hash 码总是固定值。将它们的输出顺序调换一下，那么首先生成的 hash 码就会分配给变量 b，而不是 a，也可以手动调用需要使用 hash 码的方法触发其生成：

```java
public class HashCode {
    public static void main(String[] args) {
        int[] a = new int[1];
        int[] b = new int[1];
        // b.hashCode(); // hash code generatiion
        System.out.format("a = %s\nb = %s\n", a, b);
    }
}
// ------- Java output -------
// a = [I@6f496d9f
// b = [I@723279cf
```

当用户类型有需要，可以重新实现 `equals()` 方法的逻辑，比如 String 类型，它就通过重新实现其逻辑，先判断地址、再判断字符串长度，最后再比较各个字符：

```java
    // jdk-8u60/src/share/classes/java/lang/String.java
    public int hashCode() {
        int h = hash;
        if (h == 0 && value.length > 0) {
            char val[] = value;

            for (int i = 0; i < value.length; i++) {
                h = 31 * h + val[i];
            }
            hash = h;
        }
        return h;
    }
    public boolean equals(Object anObject) {
        if (this == anObject) {
            return true;
        }
        if (anObject instanceof String) {
            String anotherString = (String)anObject;
            int n = value.length;
            if (n == anotherString.value.length) {
                char v1[] = value;
                char v2[] = anotherString.value;
                int i = 0;
                while (n-- != 0) {
                    if (v1[i] != v2[i])
                        return false;
                    i++;
                }
                return true;
            }
        }
        return false;
    }
```

从 String 对象实现的 `equals` 方法可以看到，不同类型实现的等值判断逻辑是不一样的，也就是算法上具有不同的时间复杂度。当对象与 hash table 数据结构结合使用时，通过给对象内存中引入一个 hash code（需要使用时生成），那么就可以先通过比较 hash code 的一致性来确定对象相等，如果 hash code 确实一致再调用对象的 `equals` 方法。

以下是一个测试程序，使用了 HashSet 数据结构，集合的特性：元素具有唯一性不重复。自定义类型 Pair 等值逻辑：任意实例 x y 属性使用相同的一组数值，即为相等。程序运行输出内容参考，可以看到：哈希集合添加第三个元素时发现与第一个元素具有相同的 hash code 然后再调用 equals 方法确认：

```sh
	Pair.hashCode(): 3
	Pair.hashCode(): 2
	Pair.hashCode(): 3
	Pair.equals(<Pair x=[1] y=[2] />)
	[<Pair x=[1] y=[3] />, <Pair x=[1] y=[2] />]
```

```java
import java.util.HashSet;
import java.lang.Override;

class Pair {
    public int x = 0;
    public int y = 0;
    Pair(int x, int y) { this.x = x; this.y = y; }
    public String toString() { 
        return String.format("<Pair x=[%d] y=[%d] />", x, y); 
    }
    @Override
    public boolean equals(Object it) {
        if (it instanceof Pair) {
            System.out.format("Pair.equals(%s)\n", (Pair)it);
            return ((Pair)it).x == x && ((Pair)it).y == y ||
                 ((Pair)it).y == x && ((Pair)it).x == y;
        }
        return false;
    }
    @Override
    public int hashCode() {
        System.out.format("Pair.hashCode(): %X\n", x ^ y);
        return x ^ y;
    }
}

public class HashCode {
    public static void main(String[] args) {
        HashSet<Pair> hs = new HashSet<>();
        hs.add(new Pair(1, 2));
        hs.add(new Pair(1, 3));
        hs.add(new Pair(2, 1));
        System.out.println(hs);
    }
}
```

PS：Xor (eXclusive OR) “异或”逻辑运算，也叫半加运算，其运算法则相当于不带进位的二进制加法，非常适合 Pair 等值判断这种情形，它可以将两个数值包含的信息“打包”为一个数，并且此值可以再 Xor 原始数据还原出另一个输入数值，这一特性使得它广泛用于数据加密、备份。

参考 That XOR Trick，有这样一道题：一个数组包含 n-1 个值，即值范围是 [1, n]且没有重复，请找出缺少的那个数字。解决方法：将数组所有元素与 1 ~ n 这些值进行 Xor 运算，其结果就是缺少的那一个数。因为这种方法中数组中的每个元素都会出现两次，除了缺失的那一个数只有一个，那么相同的值进行异或运算就会得到 0，最终只剩下缺少的那个数字。

Hash Table 字面意思是散列数据表，哈希表这种数据结构的特点是快速查找、插入，其算法时间复杂度为常数。哈希表的核心是一个 hash 函数，即一个映射输入数据与其内存地址的函数（函数的本质就是映射），`key --hash()--> address`，这就是这种数据结构高效率的关键。

比如，以下是用于演示 hash table 基本原理的 StringHashTable，其中的 simpleHash 相当简单（简陋），只获取 key 首字母的值再取 hash table 内存空间模得到 hash 值。只提供简单的 set 和 get 方法，不对哈希冲突做任何处理，只是直接覆盖旧值：

```java
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;

public class StringHashTable {
    int length;
    int[] values;
    String[] keys;
    StringHashTable(int len) {
        length = len;
        values = new int[len];
        keys = new String[len];
    }
    int simpleHash(String key){
        return (int) key.charAt(0) % length;
    }
    boolean set(String key, int value) {
        int id = simpleHash(key);
        boolean old = keys[id] != null;
        values[id] = value;
        keys[id] = key;
        return old;
    }
    int get(String key) {
        return values[simpleHash(key)];
    }
    public static void main(String[] args) {
        StringHashTable sht = new StringHashTable(32);
        sht.set("abc", 123);
        sht.set("xyz", 321);
        sht.set("汉字", 678);
        System.out.format("abc ==> %d\n", sht.get("abc"));
        System.out.format("xyz ==> %d\n", sht.get("xyz"));
        System.out.format("汉字 ==> %d\n", sht.get("汉字"));
        System.out.format("values = %s\n keys = %s\n", 
            Arrays.stream(sht.values).mapToObj(String::valueOf).collect(Collectors.joining(", ")), 
            Arrays.asList(sht.keys));
    }
}
```

以上哈希表实现虽然的简单，但是它绝对没有哈希洪水攻击问题 :)。

Java 基础类库中的 HashMap 设计绝对不会这样简单，Hash 函数的设计原则：

1. 一致性：如果 `a==b` 则 `hash(a)==hash(b)`。
2. 高效性：计算高效便捷，O(1)，相当直接使用动态数组，在适当的情况下 resize。
3. 均匀性：哈希值的分布越均匀越好，这就是对取模法中模为质数的原因。

Hash 算法可视化演示参考 Data Structure Visualizations，它提供了以下三种 Hash Table 的实现演示：
https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
1. Open Hash Tables (Closed Addressing)
2. Closed Hash Tables (Open Addressing)
3. Closed Hash Tables, using buckets

旧金山大学网站上提供的 hash table 算法演示只是演示了 key 如何存储，实际使用中通常需要同时使用 key 和 value，通过 key 操作 value。并且使用非常小的空间演示数据是如何存取的，小空间的演示可以很容易观察到哈希冲突现象。在实际应用中，会优化算法，尽量避免哈希冲突的发生。

桶式哈希算法实现中的桶（buckets）是一块内存空间，抽象为一个个用于存放数据的桶。演示页面上，使用一块连续的内存空间，并按 bucket 所占内存空间等长度划分。最后保留一块内存作为溢出区，即哈希冲突导致哈希桶空间存满数据后使用的备用内存空间。

开放寻址、封闭寻址是两类在处理哈希冲突时采取的不同算法思维。

所谓开放寻址，Closed Hashing，是指主表地址空间开放。出现哈希冲突时，按原映射顺延到某个空闲位置来存放数据，此实现方式也称为拉链法哈希表。

所谓封闭寻址，Open Hashing，是指主表空间封闭，在哈希冲突时，通过主表的 Slot 扩展链表来提供新空间，它是在哈希表之外建立的新空间，所以称为开放哈希。

从函数的定义可以知道，输入数据拥有无限可能，但是实现 hash 函数时却要受到硬件限制，只能尽量将输入均匀地分布在有限的内存空间中。所以，hash 算法本身存在一个巨大的缺陷：哈希冲突。这个问题可能被恶意利用，比如哈希洪水攻击（Hash-Flooding Attack），这也是一种拒绝服务攻击（Denial of Service），服务器一旦遭遇哈希洪水，其服务器资源必然会耗尽，导致无法提供正常服务。

正常情况下，假设要连续插入 n 个元素到哈希表中，时间复杂度为 O(n)，当经常遇到哈希冲突，那么就需要额外的操作，此时为哈希表的最差时间复杂度 O(n²)。

追根问底，`hashCode()` 或者 System.identityHashCode() 方法的实现依赖于 JVM 的实现，可以参考 OpenJDK 源码的实现：

```cpp
	// jdk-8u60/src/share/native/java/lang/System.c
	// jdk-8u60/src/share/native/java/lang/Object.c
	static JNINativeMethod methods[] = {
	    {"hashCode",    "()I",                    (void *)&JVM_IHashCode},
	    {"wait",        "(J)V",                   (void *)&JVM_MonitorWait},
	    {"notify",      "()V",                    (void *)&JVM_MonitorNotify},
	    {"notifyAll",   "()V",                    (void *)&JVM_MonitorNotifyAll},
	    {"clone",       "()Ljava/lang/Object;",   (void *)&JVM_Clone},
	};
	// jdk-8u60/src/share/javavm/export/jvm.h
	JNIEXPORT jint JNICALL
	JVM_IHashCode(JNIEnv *env, jobject obj);

	// hotspot/src/share/vm/prims/jvm.cpp
	JVM_ENTRY(jint, JVM_IHashCode(JNIEnv* env, jobject handle))
	  JVMWrapper("JVM_IHashCode");
	  // as implemented in the classic virtual machine; return 0 if object is NULL
	  return handle == NULL ? 0 : ObjectSynchronizer::FastHashCode (THREAD, JNIHandles::resolve_non_null(handle)) ;
	JVM_END
```

生成 hash 码的方法最终定位到 `ObjectSynchronizer` 对象同步类型文件中定义的 `gen_next_hash()`，它提供了 6 种算法，使用 global.hhp 文件中定义的全局符号 `hashCode` 来选择，或者使用 JVM 命令行参参数 `-XX:hashCode=n` 指定算法，OpenJDK 8 默认使用最后一种：

	hashCode() generation possibilities:
	* MD5Digest of {obj,stwRandom}
	* CRC32 of {obj,stwRandom} or any linear-feedback shift register function.
	* A DES- or AES-style SBox[] mechanism
	* One of the Phi-based schemes, such as:
	  2654435761 = 2^32 * Phi (golden ratio)
	  HashCodeValue = ((uintptr_t(obj) >> 3) * 2654435761) ^ GVars.stwRandom ;
	* A variation of Marsaglia's shift-xor RNG scheme.
	* (obj ^ stwRandom) is appealing, but can result
	  in undesirable regularity in the hashCode values of adjacent objects
	  (objects allocated back-to-back, in particular).  This could potentially
	  result in hashtable collisions and reduced hashtable efficiency.
	  There are simple ways to "diffuse" the middle address bits over the
	  generated hashCode values

JVM 底层定义的 `oopDesc` (其子类型 `markOopDesc`、`instanceOopDesc`、`arrayOopDesc` 等等) 记录 hash 码，并且位于对象内存空间的前面。在首次需要使用 hash code 但如果 Ordinary Object Pointers (OOPs) 数据中还未记录生成的值，就会调用 `get_next_hash()` 方法生成 hash code。此处的 OOP 是指 Java 对象的指针，也即是类型在内存中的布局。

使用 Java Object Layout (JOL) 可以打印 Java 对象的内存布局信息。
https://mvnrepository.com/artifact/org.openjdk.jol/jol-core

32 位平台到 64 位，指针将由 4 字节变为了 8 字节，这会导致指针占用的空间加倍。所以，通常 64-bit HotSpot VM 为了避免造成堆内存损失，不过从 JDK 1.6 update 14 开始正式支持 `-XX:+UseCompressedOops`命令行参数（默认开启），用于压缩指针，起到节约内存占用的作用。

OpenJDK8 还使用 Metaspace 存储元数据，相应增加 `-XX:+UseCompressedClassPointer` 用于压缩元信息中的指针。这些压缩后的指针指向的空间称为“Compressed Class Space”。默认大小是 1G，可以通过 `-XX:CompressedClassSpaceSize` 调整。

```cpp
// hotspot/src/share/vm/oops/oop.hpp
// hotspot/src/share/vm/oops/markOop.hpp
// hotspot/src/share/vm/runtime/synchronizer.cpp
intptr_t ObjectSynchronizer::FastHashCode (Thread * Self, oop obj) {
  // ...
  markOop mark = ReadStableMark (obj);

  // object should remain ineligible for biased locking
  assert (!mark->has_bias_pattern(), "invariant") ;

  if (mark->is_neutral()) {
    hash = mark->hash();              // this is a normal header
    if (hash) {                       // if it has hash, just return it
      return hash;
    }
    hash = get_next_hash(Self, obj);  // allocate a new hash code
    temp = mark->copy_set_hash(hash); // merge the hash code into header
    // use (machine word version) atomic operation to install the hash
  // ...

static inline intptr_t get_next_hash(Thread * Self, oop obj) {
  // ...

// hotspot/src/share/vm/runtime/globals.hpp:
  product(intx, hashCode, 5, "(Unstable) select hashCode generation algorithm") \
```

OpenJDK 默认的 hashCode 方法的实现和对象内存地址无关，版本 6 和 7 中的实现使用随机生成的数字，在版本 8 中，它是基于线程状态的数字。

Mark word 不仅用来存储 hash code，它还用于多线程锁，以及应用于垃圾回收机制。

JVM 向来使用分代，JDK 7 Hotspot 团队首次公布了 G1（Garbage-First），并在 JDK9 中用 G1 作为默认的垃圾收集器替代早期的 Concurrent Mark Sweep (CMS) 垃圾收集器。

早期 GC 算法：

1. 1960年，John McCarthy 发布 GC 标记-清除算法（Mark-Sweep）；
2. 1960年，George E. Collins 发布引用计数算法（Reference Count）；
3. 1963年，Marvin L. Minsky 发布 GC 复制收集算法（Copy and Collection）；

分代垃圾回收 (Generational GC) 引入对象存活年龄的概念，通过优先回收容易成为垃圾的对象，提高垃圾回收效率。此算法的理论根据是：大部分对象在生成后马上变成了垃圾，很少有对象能活得很久。对新生代对象执行的 GC 称为 minor GC，新生代存活一定 GC 次数后将晋升 (promotion) 或者老化 (aging) 作为老年代对象。

G1 种最核心的两个概念：

1. `Heap Region`：堆内存空间分成相对独立等分，方便分别进行 GC。各自物理上不一定连续，逻辑上构成连续的堆地址空间。
2. `Remember Set`：记录了哪些 Region 中存在对当前执行 GC 的 Region 中的对象引用。

为什么要重新设计一个 G1 垃圾收集器？论文中给出的理由：现有的垃圾收集器无法满足 软实时（Soft Real-time） 特性，即让 GC 停顿能大致控制在某个阈值以内，但是又不必像实时系统那样非常严格。这也是很多业务系统都有的诉求。

在过去的设计中，JVM 堆内存被分割成几个区域 —— Eden、Survivor、Old 的大小都是预先划分好的。对于总内存 64GB 的机器，可能 Old 区大小就有 32GB，即使用并行的方式收集一次仍然需要数秒。近十年，随着内存越来越大，这一问题也变得更为严重。


## ⚡ GC 垃圾回收
- [Java Garbage Collection handbook](https://plumbr.io/java-garbage-collection-handbook)
- [深入理解JVM（③）经典的垃圾收集器](https://www.cnblogs.com/jimoer/p/13126614.html)
- [深入理解JVM（③）判断对象是否还健在？](https://www.cnblogs.com/jimoer/p/13055672.html)
- [深入理解JVM（③）各种垃圾收集算法](https://www.cnblogs.com/jimoer/p/13096642.html)

Java 内建自动垃圾回收机制，这是比 C++ 高级的功能，不用自行清理也不会以引用内存泄露，但是需要知道 GC 工作原理由于垃圾对象的判定、垃圾对象的收集两个步骤。

Java 对象主要存放在 Java Heap，垃圾收集器 Garbage Collection 在回收堆内存前，第一件事情就是要确定这些对象之中哪些还存活着，哪些已经死去不被引用了。

- 判定垃圾对象
	- 引用计数算法 Programm Counter
	- 可达性分析法 Reachability Analysis
- 垃圾回收算法
	- 标记清除算法 
	- 复制算法
	- 标记整理算法
	- 分代收集算法

在对象中添加一个引用计数器，每有一个地方引用它时，计数器值就加一；当引用失效是，计数器值就减一；任何时刻计数器为零的对象就是不可以能再被使用的对象。

引用计数算法的原理简单，判定效率也很高。市面上也确实有一些技术使用的此类算法来判定对象是否存活，像使用 ActionScript 3 的 FlashPlayer、Python 语言等。但是在主流的 Java 虚拟机里面都没有选用引用计算法来管理内存，主要是使用此算法时，必须要配合大量的额外处理才能保证正确的工作，例如要解决对象之间的相互循环引用的问题。

引用计数算法在对象中添加一个引用计数器，当有地方引用这个对象的时候，引用计数器的值就加 1，当引用失效的时候，计数器的值就减 1。但 Java 虚拟机中没有使用这种算法，这是由于如果堆内的对象之间相互引用，就始终不会发生计数器 -1，那么就不会回收。

测试：两个对象相互引用

	import java.lang.*;

	public class GcCounterTest 
	{
	    private Object instance;
	    
	    // 占据 20M 内存
	    public GcCounterTest() {
	        byte[] m = new byte[20 * 1024 *1024];
	    }

	    public void finalize(){
	        System.out.println("Destructor...");
	    }
	    
	    public static void main(String[] args) {
	        GcCounterTest c1 = new GcCounterTest();
	        GcCounterTest c2 = new GcCounterTest();
	        
	        c1.instance = c2;
	        c2.instance = c1;
	        // 断掉引用
	        c1 = null;
	        c2 = null;
	        
	        // 假设在这行发生 GC，对象内存是否能被回收？
	        System.gc();
	    }
	}

在后面发生 GC 的时候，如果按照引用计数算法，这两个对象虽然都被设置成了 null，但是两个对象相互引用，所以按程序计算器的方式它们都不会被回收，但是真正的实际运行结果是，这两个对象都被回收了，这也说明 HotSpot 虚拟机并不是用引用计数法来进行的内存管理。

Java 没有提供像 C++ 那样的析构函数，因为不用程序员支管理内存，但是提供了一个在对象清理时执行的 **void finalize()** 方法，因此你如果确实需要析构的话就可以实现这样一个方法。


当前主流的商用程序语言 Java、 C# 等都是通过**可达性分析** Reachability Analysis 算法来判断对象是否存活的。这个算法的基本思路就是通过一一系列称为 GC Roots 的对象的起始节点集，从这些节点开始根据引用关系向下搜索，搜索走过的的路径称为**引用链** Reference Chain，如果某个对象到 GC Roots 间没有任何引用链相连，或者从 GC Roots 到这个对象不可达时，则证明此对象是不可能再被使用的。

程序中，固定作为 GC Roots 对象的包括以下几种：

- 在虚拟机栈中引用的对象，譬如各个现场被调用的方法堆栈中使用到的参数、局部变量、临时变量等。
- 在方法区中类静态属性引用的对象，譬如 Java 类的引用类型静态变量。
- 在方法区中常量引用的对象，譬如字符串常量池 String Table 里的引用。
- 在本地方法栈中 JNI 即通常所说的 Native 方法引用的对象。
- Java 虚拟机内部的引用，如基本数据类型对应的 Class 对象，一些常驻的异常对象 NullPointException、OutOfMemoryError 等，还有系统类加载器。
- 所有被同步锁 synchronized 关键字持有的对象。
- 反映 Java 虚拟机内部情况的 JMXBean、JVMTI 中注册的回调、本地代码缓存等。

除了这些固定的 GC Roots 集合以外，根据垃圾收集器以及当前回收的区域不同，还会有其他对象临时性加入，如果只针对 Java 堆中某一块儿区域发起垃圾收集时，例如只针对年轻代的垃圾收集，必须考虑到当前区域内的对象是否有被其他区域的对象所引用，这个时候就需要把这些关联区域的对象一并加入 GC Roots 集合中，来保证可达性分析的正确性。

引用关系的处理是垃圾回收机制中很重要的一环，JDK 1.2 版之后对引用的概念进行了扩充，将引用分为四种类型：

- 强引用 Strongly Reference

	强引用是最传统的引用的定义，指引用复制，即类似以下这种：

		Object obj = new Object()

	无论在任何情况下，只要强引用关系还存在，垃圾收集器就不会回收掉被引用的对象。

- 软引用 Soft Reference 描述一些还有用，但非必须的对象。在系统发生内存溢出前，会先对软引用对象进行第二次回收，如果回收后还没有足够的内存，才会抛出内存溢出的异常。
- 弱引用 Weak Reference 描述那些非必须的对象，但是它的强度比软引用更弱一些，弱引用的对象，只能生存到下一次垃圾收集发生为止。当垃圾收集器开始工作，无论当前内存是否足够，都会回收掉只被弱引用关联的对象。
- 虚引用 Phantom Reference 也称为幽灵引用或幻影引用，它是最弱的一种引用关系。为一个对象设置虚引用关联的唯一目的只是为了能在这个对象被收集器回收时收到一个系统通知。


清除垃圾回收内存时，有多种处理方法。

**标记清除算法**先标记出要回收的对象，再去清除，但会有效率问题和空间问题。标记的空间被清除后，会造成我的内存中出现越来越多的不连续空间，当要分配一个大对象的时候，在进行寻址的要花费很多时间，可能会再一次触发垃圾回收。

复制算法将按对象建立使用的时间长度进行区分，针对不同的年代进行不同算法的垃圾回收，针对新生代选择复制算法，对老年代选择标记整理算法。

JVM 内存分配原则：

- 优先分配到 Eden
- 大对象直接分配到老年代
- 长期存活的对象分配到老年代
- 空间分配担保
- 动态对象的年龄判断

对象内存分区：

	- 堆：
		- 新生代 new generation
			- Eden 伊甸园
			- Survivor From 存活区
			- Survivor To 存活区
		- 老年代 Tenured Generation
		- Metaspace

**复制算法**是将可用内存按容量划分为大小相等的两块，每次只使用其中一块。当这一块的内存用完了，就将还存活着的对象复制到另外一块上面，然后再把已使用过的内存空间一次清理掉。这样使得每次都是对整个半区进行内存回收，内存分配时也就不用考虑内存碎片等复杂情况，只要移动堆顶指针，按顺序分配内存即可，实现简单，运行高效。只是这种算法的代价是将内存缩小为了原来的一半，浪费较大。

现在的商业虚拟机都采用这种收集算法来回收新生代，IBM 公司的专门研究表明，新生代中的对象 98% 是“朝生夕死”的，所以并不需要按照 1:1 的比例来划分内存空间，而是将内存分为一块较大的 Eden 空间和两块较小的 Survivor 空间，每次使用 Eden 和其中一块 Survivor。当回收时，将 Eden 和 Survivor 中还存活着的对象一次性的复制到另外一块 Survivor。最后清理掉 Eden 和刚才用过的 Survivor 空间。HotSpot 虚拟机默认 Eden 和 Survivor 的大小比例是 8:1，也就是每次新生代中可用内存为整个新生代容量的 90%（80%+10%），只有 10% 的内存会被“浪费”。

使用两个 Survivor 区主要是为了解决内存碎片化和效率问题，如果只有一个 Survivor 区，每触发一次 Minor GC 都会有数据从 Eden 放到 Survivor，一直这样循环下去。注意的是，Survivor 区也会进行垃圾回收，这样就会出现内存碎片化问题，后果就是导致堆中可能没有足够大的连续空间存放一个大对象，影响程序性能。如果有两块 Survivor 就能将剩余对象集中到其中一块 Survivor 上，有效地避免碎片问题。

对于老年代，回收的垃圾较少时，如果采用复制算法，则效率较低。**标记整理算法**的标记操作和“标记-清除”算法一致，后续操作不只是直接清理对象，而是在清理无用对象完成后让所有存活的对象都向一端移动，并更新引用其对象的指针。


垃圾收集器：

- Serial 收集器，单线程垃圾收集器、最基本、发展最悠久。
- ParNew 可多线程收集垃圾，收集新生代，使用收集算法。
- Parallel 多线程收集垃圾，收集新生代，使用收集算法。Parallel 收集器更关注系统的吞吐量，可以通过参数来打开自适应调节策略。
- CMS - Concurrent Mark Sweep 标记-清除算法收集器，用于老年代，常与 ParNew 协同工作。
- G1 - Garbage First 垃圾收集器是当今垃圾回收技术最前沿的成果之一，并行与并发能力，早在 JDK 7 就已加入 JVM 的收集器大家庭中，成为 HotSpot 重点发展的垃圾回收技术。

单线程垃圾收集器、最基本、发展最悠久。它的单线程的意义并不仅仅说明它只会使用一个 CPU 或一条收集线程去完成垃圾收集工作，更重要的是在它进行垃圾收集时，必须暂停其他所有的工作线程，直到它收集结束。偶尔用在桌面应用中。

Java 中 Stop-The-World 机制简称 STW，是在执行垃圾收集算法时，Java 应用程序的其他所有线程都被挂起（除了垃圾收集帮助器之外）全局暂停现象。全局停顿，所有 Java 代码停止，native 代码可以执行，但不能与 JVM 交互，这些现象多半是由于 gc 引起。

查看 JVM 的 GC 信息，可以在运行程序时加入以下参数：

	>java -verbose:gc -XX:+PrintGCDetails -XX:+UseSerialGC -Xms20M -Xmx20M -Xmn10M -XX:SurvivorRatio=8 GcCounterTest
	[GC (Allocation Failure) [DefNew: 836K->588K(9216K), 0.0016158 secs][Tenured: 0K->587K(10240K), 0.0018080 secs] 836K->587K(19456K), [Metaspace: 1727K->1727K(4480K)], 0.0043166 secs] [Times: user=0.00 sys=0.00, real=0.00 secs]
	[GC (Allocation Failure) [DefNew: 0K->0K(9216K), 0.0005927 secs][Tenured: 21067K->587K(30724K), 0.0016413 secs] 21067K->587K(39940K), [Metaspace: 1727K->1727K(4480K)], 0.0032806 secs] [Times: user=0.00 sys=0.00, real=0.00 secs]
	[Full GC (System.gc()) [Tenured: 21067K->587K(30724K), 0.0016370 secs] 21230K->587K(39940K), [Metaspace: 1727K->1727K(4480K)], 0.0024321 secs] [Times: user=0.02 sys=0.00, real=0.00 secs]
	Destructor...

	Heap
	 def new generation   total 9216K, used 328K [0x05000000, 0x05a00000, 0x05a00000)
	  eden space 8192K,   4% used [0x05000000, 0x05052048, 0x05800000)
	  from space 1024K,   0% used [0x05800000, 0x05800000, 0x05900000)
	  to   space 1024K,   0% usedDestructor... [0x05900000, 0x05900000, 0x05a00000)
	 tenured generation
	 total 28676K, used 587K [0x05a00000, 0x07601000, 0x15000000)
	   the space 28676K,   2% used [0x05a00000, 0x05a92ce8, 0x05a92e00, 0x07601000)
	 Metaspace       used 1732K, capacity 2242K, committed 2368K, reserved 4480K


上面打印的 JVM GC 日志中，有两次 GC (Allocation Failure)，这是正常情况：

- Full GC 表明进行了一次垃圾回收，前面没有 Full 修饰，表明这是一次 Minor GC。
- Allocation Failure： 表明本次引起GC的原因是因为在年轻代中没有足够的空间能够存储新的数据了。
- ParNew 表明本次 GC 发生在年轻代并且使用的是 ParNew 垃圾收集器。

日志中，836K->588K(9216K) 这样的表达是指 GC 前该内存区域使用容量 -> GC 后该内存区域使用容量，括号内的是该内存区域总容量，后面跟着 GC 耗时，单位是分别是 KB 和秒。看 Full GC (System.gc()) 这里表示前面测试代码中使用 API 触发的一次 GC，老年代区 Tenured 的内存由 21067K->587K 即将占据 20M 内存的 byte[] 字节数组释放了。

常见 GC 方式：

- Minor GC/Young GC：新生代 GC，指发生在新生代的垃圾收集动作，Minor GC 非常频繁，一般回收速度也比较快。
- Old GC/Major GC：收集整个 Old gen 的 GC，只有 CMS 模式这么称呼，Major GC 的速度一般比 Minor GC 多 10 倍以上。
- Full GC：收集整个堆，包括 Young gen、Old gen、Perm gen（如果存在的话）等所有部分的模式。
- Mixed GC：收集整个 young gen 以及部分 old gen 的 GC，只有 G1 模式这么称呼。

对于复制算法来说，当年轻代 Eden 区域满的时候会触发一次 Minor GC，将 Eden 和 Survivor From 区的对象复制到另外一块 Survivor To。如果某个对象存活的时间超过 Minor GC 次数超过 -XX:+MaxTenuringThreshold 指定值，会直接进入老年代。

Full GC 用于清理整个堆空间，它的触发条件主要有以下几种：

- 显式调用 System.gc 方法。
- 方法区空间不足，JDK 8 及之后不会有这种情况。
- 老年代空间不足，引起 Full GC，又细分以下几种：

	- 大对象直接进入老年代引起，由 -XX:PretenureSizeThreshold 参数定义
	- Minor GC 时，经历  Minor GC 次数超过 -XX:MaxTenuringThreashold 指定次数仍健在的对象进入老年代。
	- Minor GC 时，动态对象年龄判定机制会将对象提前转移老年代，年龄从小到大进行次数累加，当加入某个年龄段后，累加和超过 survivor * TargetSurvivorRatio 的时候，从这个年龄段往上的年龄的对象进入老年代。
	- Minor GC 时，Eden 和 From Space 区向 To Space 区复制时，大于 To Space 区可用内存，会直接把对象转移到老年代


JVM 的空间分配担保机制可能会触发 Full GC，在进行 Minor GC 之前，JVM 空间担保分配机制可能会触发发一次 Full GC。

空间担保分配是指在发生 Minor GC 之前，虚拟机会检查老年代最大可用的连续空间是否大于新生代所有对象的总空间。 如果大于，则此次 Minor GC 是安全的。如果小于，则虚拟机会查看 HandlePromotionFailure 设置值是否允许担保失败。

如果允许，那么会继续检查老年代最大可用连续空间是否大于历次晋升到老年代的对象的平均大小，如果大于，则尝试进行一次 Minor GC，但这次 Minor GC 依然是有风险的，失败后会重新发起一次 Full GC，否则改为直接进行一次 Full GC。

JDK 8 HotSpot 虚拟机为什么要取消永久代？并且新增了一个叫元空间 Metaspace 的区域，对应在 JVM 规范中的方法区，主要存放一些 class 和元数据的信息。区别在于，元空间使用的并不是 JVM 中的内存，而是使用本地内存。而这么做的原因大致有以下几点：

- 字符串存在永久代中，容易出现性能问题和内存溢出。
- 类及方法的信息等比较难确定其大小，因此对于永久代的大小指定比较困难，太小容易出现永久代溢出，太大则容易导致老年代溢出。
- 永久代会为 GC 带来不必要的复杂度，并且回收效率偏低。
- Oracle 可能会将 HotSpot 与 JRockit 合二为一。


GC 性能方面的考虑主要有 2 个方面的指标：吞吐量 throughput，和暂停 pause 时间。即工作时间不算 gc 的时间占总的时间比，和 gc 发生时 app 对外显示的无法响应时间。

The Young Generation 新生代对于 app 流畅性运行影响的因素，young generation 越大，minor collection 越少；但是在固定 heap size 情况下，更大的 young generation 就意味着小的 tenured generation，就意味着更多的 major collection，major collection 会引发 minor collection。

GC 时的 Stop the World(STW) 是大家最大的敌人。但可能很多人还不清楚，除了 GC，JVM 下还会发生停顿现象。



常用 JVM 启动参数：

|     参数名称    |                        说明                        |
|-----------------|----------------------------------------------------|
| -Xms            | 初始堆大小，物理内存的1/64(<1GB)                   |
| -Xmx            | 最大堆大小，物理内存的1/4(<1GB)                    |
| -Xmn            | 年轻代大小，此处的大小是（eden+ 2 survivor space)  |
| -XX:PermSize    | 设置持久代初始值，物理内存的1/64                   |
| -XX:MaxPermSize | 设置持久代最大值 物理内存的1/4                     |
| -Xss            | 每个线程的堆栈大小，JDK1.5以后为1M                 |
| -XX:NewRatio    | 年轻代(包括 Eden 和两个 Survivor 区)与年老代的比值 |

- **-XX：ParallelGCThreads** 参数限制 ParNew 的线程数，默认使用的线程数和 CPU 数相同。该收集器是 Serial 收集器的多线程版本，采用复制算法回收内存，期间会停止其他工作线程，即 Stop The World。
- **-verbose:gc -XX:+PrintGCDetails** 表示输出虚拟机中 GC 的详细情况。默认使用 Parallel 收集器（服务器），Serial 收集器（客户端），服务器和客户端可以通过 java -version 查看。
- **-XX:+UseSerialGC** 设置收集器。
- **-Xms20M -Xmx20M -Xmn10M** 分别设置初始堆大小和最大堆内存大小都是 20M，新生代大小为 10M，如果设置的内容不够用就会触发 OutOfMemoryError 异常。
- **-XX:SurvivorRatio=8** 设置 eden 与 survuvor 的比值大小 8:1，JVM 优先把对象放入 Eden 区，当 Eden 区放不下了后（2 * 3 = 6M），通过分配担保机制放入老年代 6M（Minor GC），再把最后一个 4M 放入新生代。
- **-XX:PretenureSizeThreshold=6M** 设置大文件大小，大对象直接分配到老年代，研究认为大对象不是朝生夕死的，如果放在新生代，则需要不断移动，性能较差。
- **-XX:MaxTenuringThreshold** 最大年龄，默认为 15，即经过这么多次 GC 还没有被清理掉的新生代码对象会晋升为长期存活对象，分配到老年代。
- **-XX:+HandlePromotionFailure=true** 开启空间分配担保失败允许，取前面每一次回收晋升到老年代对象容量的平均值大小作为经验值，与老年代的剩余空间进行比较，决定是否 Full GC 来让老年代腾出更多空间。


性能优化四个命令：

- **jps**：Java process status 查看 Java 进程状态
- **jstat**：显示本地或者远程虚拟机垃圾回收，例如：jstat -gcutil $pid 1000 5
- **jmap**：查看JVM堆中对象详细占用情况，例如：jmap -histo [pid]
- **jstack**：用于生成虚拟机当前线程快照，jstack -l [pid]

JDK 自带可视化监控工具 JConsole，是一种基于 JMX 的可视化监视、管理工具可进行内存管理、线程管理、查看死锁等。直接执行 jconsole 命令即可，源代码在 tools.jar 包中。




## ⚡ NIO - Non-blocking I/O
- [Java NIO 浅析](https://zhuanlan.zhihu.com/p/23488863)
- [Java1.4 从 BIO 模型发展到 NIO 模型](https://www.cnblogs.com/kendoziyu/p/java-develop-from-bio-to-nio.html)
- [Java NIO 对象分类](https://www.cnblogs.com/jimoer/p/11575610.html)

Java 1.4 引入 java.nio 包，正式支持 Non-blocking I/O 模型。

**NIO** - Non-blocking I/O 也称为 New I/O，是 Java 一种同步非阻塞 I/O 模型，也是 I/O 多路复用的基础，已经被越来越多地应用到大型应用服务器，成为解决高并发与大量连接、I/O 处理问题的有效方式。

NIO 的 3 个核心概念：Channel、Buffer、Selector。

Channel 是对 IO 输入/输出系统的抽象，是 IO 源与目标之间的连接通道，NIO 的通道类似于传统 IO 中的各种“流”。NIO 模型的 Channel 中的数据流是双向的，相对于 BIO Stream 则是单向的。通道的作用是将数据移入或移出道各种 I/O 源，即可读又可写。

此外 Channel map() 方法可以将“一块”数据直接映射到内存中，因此 NIO 可以说是面向块处理的，而传统 I/O 是面向流处理的。但是 Channel 是一个接口，实现类有 FileChannel、SocketChannel、ServerSocketChannel、DatagramChannel，程序不能直接访问 Channel 中的数据，必须通过 Buffer（缓冲区）作为中介。

Buffer 是一个抽象容器类型，其底层持有了一个具体类型的数组来存放具体数据，除 boolean 之外的基本数据类型都有对应的实现，比如 ByteBuffer 和 CharBuffer，通过 Channel 读写的数据需要通过 Buffer。

先来认识几个概念：

- Blocking 阻塞是指当有任务在执行时，会发出一个请求操作，如果该请求操作需要的条件不满足的话，那么就会一直等待，直到条件满足后，才继续执行后面的其他工作。
- Non-Blocking 非阻塞是指当有任务在执行时，会发出一个请求操作，如果该请求操作需要的条件不满足的话，会立即返回一个标志信息告知条件不满足，而不会一直在等待下去。
- Synchronous I/O 同步 IO 是指一个线程在执行 IO 操作时，该线程在操作完成前，是会被阻塞的。
- Asynchronous I/O 异步 IO 是指一个线程在执行 IO 操作时，该线程并不会被阻塞。 

从计算机硬件体系结构理解，CPU 的中断系统提供了这个一个能力，程序在等待 I/O 数据进入阻塞状态，当数据到来时触发一个 I/O 中断告诉 CPU 可以继续执行处于阻塞状态的程序。阻塞期间，CPU 不执行线程的任何其它代码，这也就是为何阻塞状太是节省 CPU 资源的。

根据不同的应用场合，同步性和阻塞性可以组合到一起：

- **同步阻塞**，是最常用的一种用法，使用也是最简单的，但是 I/O 性能一般很差，CPU 大部分处于空闲状态，即不消耗 CPU 时间，但会损失程序性能。
- **同步非阻塞**，提升 I/O 性能的常用手段，就是将 I/O 的阻塞改为非阻塞方式，尤其在网络 I/O 是长连接同时传输数据也不很多的情况下，提升性能非常有效，但消耗 CPU 时间，需要一个平衡。
- **异步阻塞**，这种方式在分布式数据库中经常用到，例如，在一个分布式数据库中写一条记录，通常会有一份是同步阻塞的记录，还有任意份记录会写到其他机器上，这些备份记录通常都采用异步阻塞的方式写 I/O。异步阻塞对网络I/O能够提升效率，尤其像上面这种同时写多份相同数据的情况。
- **异步非阻塞**，这种组合方式用起来比较复杂，只有在一些非常复杂的分布式情况下用，集群之间的消息同步机制一般用这种 I/O 组合方式。它适合同时要传多份相同的数据到集群中不同的机器，同时数据的传输量虽然不大却非常频繁的情况。这种网络 I/O 用此方式性能达到最高。

《Unix 网络编程》指明五种 I/O 模型，而 Java NIO 使用的是**多路 I/O 复用模型**，其它四种介绍如下：

- **阻塞 I/O 模型**，最常见的一种，一个 read 操作分两个阶段，先等待数据准备就绪，再将数据拷贝到调用的线程中。阻塞是发生在第一个阶段的，数据准备好之前会一直阻塞用户线程，当数据就绪后再将数据拷贝到线程中，并返回结果给用户线程。
- **非阻塞 I/O 模型**，当应用程序发起一个 read操作时，并不会阻塞，而是立刻会收到一个结果，指示数据是准备好了没有。判断返回结果是一个错误状态，就知道数据还没有准备好，可以再次执行 read 操作直到系统将数据拷贝到了线程的内存中，读取出来。
- **信号驱动 I/O 模型**，让内核在数据报准备就绪时发送 SIGIO 信号通知用户线程。首先开启套接字的信号驱动式 I/O 功能，并通过 sigaction 系统调用安装一个信号处理函数。该系统调用将立即返回，进程继续工作，也就是说没有被阻塞。当数据报准备好读取时，内核就为该进程产生一个 SIGIO 信号。我们随后就可以在信号处理函数中调用 recvfrom 读取数据报，并通知用户进程数据已经准备好，可以读取了。
- **异步 I/O 模型**，当用户线程发起 read 操作时，告知内核启动读取数据操作，并让内核在整个操作完成后通知程序，包括将数据从内核复制到程序自己的缓冲区。这样在内核执行读取数据操作时，用户线程可以继续执行，当接收到内核在整个操作都完成的信号时，就可以直接去使用数据了。


随着网络设计模式的兴起，Reactor 和 Proactor 事件处理模式应运而生，来介绍一下这两种高性能 I/O 设计模式：

- Reactor 响应式模式

	- 应用程序在 Reactor 中注册 Ready for Read 读就绪事件和相关联的事件处理器
	- Reactor 阻塞等待内核事件通知
	- Reactor 收到通知，然后分发可读写事件到用户事件处理函数
	- 用户读取数据，并处理数据
	- 事件处理器完成实际的读操作，处理读到的数据，注册新的事件，然后返还控制权。

- Proactor 主动模式

	- 应用程序初始化一个异步读取操作，然后注册相应的事件处理器，此时事件处理器不关注读取就绪事件，而是关注读取完成事件，这是区别于 Reactor 的关键。
	- 事件分离器等待读取操作完成事件
	- 在事件分离器等待读取操作完成的时候，操作系统调用内核线程完成读取操作，并将读取的内容放入用户传递过来的缓存区中。这也是区别于 Reactor 的一点，所以 Proactor 应用程序需要传递缓存区。
	- 事件分离器捕获到读取完成事件后，激活应用程序注册的事件处理器，事件处理器直接从缓存区读取数据，而不需要进行实际的读取操作。

Reactor 模式要求主线程只作为 I/O 处理单元，只负责监听文件描述符上是否有事件发生，有的话就立即将该事件通知工作线程。除此之外，主线程不做任何其他实质性的工作。 读写数据，接受新的连接，以及处理客户请求均在工作线程中完成。而 Proactor 模式将所有 I/O 操作都交给主线程和内核来处理，工作线程仅仅负责业务逻辑。

异步 I/O 模型就是使用的 Proactor 模式，Java NIO 多路 I/O 复用模型中使用 Reactor 模式。


所以多路复用 I/O 模型和非阻塞 I/O 有类似之处，但是多路复用 I/O 模型的效率是比非阻塞 I/O 模型要高的，因为在非阻塞 I/O 中，不断的询问 scoket 状态的是通过用户线程去进行的，而多路复用 I/O 模型，轮询每个 scoket 状态是内核进行处理的，结合硬件底层实现效率远比用户线程实现要高得多的，因此多路复用 I/O 模型比较适合高并发应用中使用。

不过此模型也是存在问题的，由于多路复用 I/O 模型是通过轮询的方式来检测是否有事件到达，并对到达的事件逐一响应，一旦事件响应体很大或是响应事件数量过多，就会消耗大量的时间去处理事件，从而影响整个过程的及时性。为了应对这种情况 Linux 系统提供了 epoll 接口，但是除了 Linux 其他操作系统对 epoll 接口的支持又有很多差异，所以虽然 epoll 解决了事件检测的时效性问题，但是在跨平台能力上却并不能得到很好的支持。
 

Java NIO 使用的多路 I/O 复用模型，有三个基础概念：

- Channel 通道

	Channel 可以理解为互通的管道，和 Java IO 各种 Stream，如 InputStream、OutputStream 类似，只不过 Channel 是双向的，而 Stream 是单向的。通道的作用是将数据移入或移出道各种 I/O 源，即可读又可写。

	Channel 类层次结构相当复杂，有多个接口和许多可选操作，常用的也就几个：

	- FileChannel 可以对文件进行读和写；
	- DatagramChannel 可以以 UDP 的协议来进行数据读写；
	- SocketChannel 以 TCP 的协议来对网络两端进行读写；
	- ServerSocketChanel 能够监听客户端 TCP 连接，并为每个连接创建一个新的 SocketChannel 来进行数据读写。

	通过 selector.select() 去查询每个通道是否有到达事件，如果没有事件，则一直阻塞在那里，因此多路复用 I/O 模型也会阻塞用户线程，只不过线程是被 select() 函数阻塞的而不是被 scoket 阻塞的。

- Buffer 缓冲区

	Buffer 是一个高效的数据容器，在 NIO 中所有的数据操作都必须经过缓冲区，这点是和 BIO 不同的，BIO是直接将数据写到 Stream 对象中的。因为 Stream 对象的设计是按顺序一个字节一个字节的传送数据。虽然出于性能考虑，也可以传递字节数组，但是基本概念都是一个字节一个字节的传递数据。通道与之不同之处在于，通道会传送缓冲区的数据块，而且通道的基本概念就是按照一个数据块一个数据块的去读和写。所以也可以将缓冲区理解为一个字节数组，专门用来存储以及准备好出入通道的字节。

	无论是客户端发送和接收数据，还是服务端接收和相应数据，都是从缓冲区中进行数据操作的。

- Selector 选择器

	Selector 是 Java NIO 中最重要的一部分，它用单线程来轮询处理注册的 Channel，一旦哪个 Channel 的数据准备就绪了，就可以进行处理了。


Buffer 缓冲区的常用属性介绍

在 Java 中除了 boolean 外，所有的基本数据类型都有特定的 Buffer 子类，ByteBuffer、CharBuffer、DoubleBuffer、FloatBuffer、IntBuffer、LongBuffer、ShortBuffer。网络程序几乎只会使用 ByteBuffer，但程序偶尔也会使用其他类型来取代 ByteBuffer。

除了数据列表外，每个缓冲区都记录了信息的 4 个关键部分。无论是何种类型，都有相同的方法来获取和设置这些值：

- 位置 position

	缓冲区中将读取或写入的下一个位置，0 开始计，最大值等于缓冲区的大小。

		public final int position();
		public final Buffer position(int newPosition);

- 容量 capacity

	缓冲区可以保存的最大数目，容量值在创建缓冲区时设置，此后不能改变。

		public final int capacity();

- 限度 limit

	缓冲区中可访问数据的末尾位置，只要不改变限度，就无法读/写超过这个位置的数据，即使缓冲区有更大的容量也没有用。

		public final int limit();
		public final Buffer limit(int newLimit);

- 标记 mark

	缓冲区中客户端指定的索引，通过 mark() 可以将标记设置为当前位置。调用 reset() 可以将当前位置设置为所标识的位置。

		public final Buffer mark() ;
		public final Buffer reset();

	如果将位置设置为低于现有标记，则丢弃这个标记。

与读取 InputStream 不同，读取缓冲区实际上不会以任何方式改变缓冲区中的数据。只可能向前或向后设置位置，从而可以从缓冲区中某个特定位置开始读取。类似的程序可以调整限度，从而控制将要读取的数据的末尾。


Selector 使用介绍

首先要先向 Selector 中注册 Channel，然后调用它的 select() 方法，这个方法会一直阻塞到某个注册的 Channel 中的事件准备就绪。一旦 select() 方法返回，线程就可以处理这些事件了，比如新的连接进入，数据接收等。

Selector 类并没有注册新通道的方法，register() 方法在 SelectableChannel 类中声明，它实现了 Channel 接口，它支持将 Channel 注册到 Selector 中。

	public abstract SelectionKey register(Selector sel, int ops, Object att) throws ClosedChannelException;
	public final SelectionKey register(Selector sel, int ops) throws ClosedChannelException;

第一个参数代表通道要向哪个选择器注册，第二个参数是 SelectionKey 类中的一个命名常量，标识所注册的操作：

	SelectionKey.OP_READ;
	SelectionKey.OP_WRITE;
	SelectionKey.OP_CONNECT;
	SelectionKey.OP_ACCEPT;

当一个通道需要在同一个选择器中关注多个操作，只需要用户位操作符组合这些常量即可。

	channel.register(selector,SelectionKey.OP_READ | SelectionKey.OP_WRITE);

第三个参数是可选的，代表键的附件。这个参数通常用户存储链接状态，例如要实现一个 Web 服务器，可能要附加一个 FileInputStream 或 FileChannel，这个流或通道连接到服务器提供给客户端的本地文件。

例子，复制文件的读写操作大致过程：

	public static void copyFileByNIO(String src,String dst) throws IOException {

	    //声明源文件和目标文件
	    RandomAccessFile aFile = new RandomAccessFile(src, "rw");
	    RandomAccessFile bFile = new RandomAccessFile(dst, "rw");

	    //获得传输通道channel
	    FileChannel inChannel = aFile.getChannel();
	    FileChannel outChannel = bFile.getChannel();
	    //获得容器buffer
	    ByteBuffer buffer= ByteBuffer.allocate(1024);
	    while(true){
	        //判断是否读完文件
	        int eof =inChannel.read(buffer);
	        if(eof==-1){
	            break;
	        }
	        //重设一下buffer的position=0，limit=position
	        buffer.flip();
	        //开始写
	        outChannel.write(buffer);
	        //写完要重置buffer，重设position=0,limit=capacity
	        buffer.clear();
	    }
	    inChannel.close();
	    outChannel.close();
	    aFile.close();
	    bFile.close();
	} 


## ⚡ NIO & Netty
- [Netty in Action](https://www.w3cschool.cn/essential_netty_in_action/)
- [基于 Netty 实现 RpcKids 框架](https://zhuanlan.zhihu.com/p/35720383)
- [基于 Netty 实现 MvcKids 框架](https://zhuanlan.zhihu.com/p/36064672)

旧式 BIO - Blocking I/O 模型在客户端与服务端建立连接之后，服务端就会立即分配一个线程，但是服务端又需要阻塞线程来等待读取客户端发送数据。这样就需要不断创建新的线程应对不断增加的服务端请求，而创建线程是需要消耗服务器性能的。那么可不可以等客户端数据到达后再分配线程进行处理呢？Selector 以及基于事件处理的 NIO 模型应运而生。

BIO 方式一个连接一个线程去处理非常消耗 CPU 资源，特别是对于 HTTP 这种短连接协议，就算加入了线程池也不能完美解决 BIO 的缺陷，所以可以用 NIO 进行服务器的优化，NIO 基于 I/O 多路复用实现单线程处理大量连接，但是编写起来比较复杂，可以选择 Netty 实现。

JBOSS 提供的 Netty 是一个 Java 开源框架。Netty 提供异步的、事件驱动的网络应用程序框架和工具，用以快速开发高性能、高可靠性的网络服务器和客户端程序。也就是说，Netty 是一个基于 NIO 的客户、服务器端编程框架，使用 Netty 可以确保你快速和简单的开发出一个网络应用，例如，实现了某种协议的客户，服务端应用。Netty 相当简化和流线化了网络应用的编程开发过程，例如，TCP/UDP 的 socket 服务开发。

Netty 有哪些新增特性？

- 能够更简单地处理大容量数据流；
- 能够更简单地处理协议编码和单元测试；
- I/O 超时和 idle 状态检测；
- 应用程序的关闭更简单，更安全；
- 更可靠的 OutOfMemoryError 预防。

Netty 是优秀的 Java 网络应用程序框架，它提供了对 Java NIO API 的封装，屏蔽了繁杂的编程细节，让开发者可以更加专注于业务逻辑的实现。很多中间件都是基于 Netty 来实现的，你可以用来实现一个 Web 容器，也能写一个游戏服务器。学习 Netty 能够让你更加熟悉网络编程的核心。

在网络发展初期，需要花很多时间来学习 socket 的复杂，寻址等等，在 C socket 库上进行编码，并需要在不同的操作系统上做不同的处理。Java 早期版本(1995-2002)介绍了足够的面向对象的糖衣来隐藏一些复杂性，但实现复杂的客户端-服务器协议仍然需要大量的样板代码，和进行大量的监视才能确保他们是对的。这些早期的 Java API（java.net）只能通过原生的 socket 库来支持所谓的“blocking（阻塞）”的功能。

- ServerSocket 创建并监听端口的连接请求
- accept() 调用阻塞，直到一个连接被建立了。返回一个新的 Socket 用来处理 客户端和服务端的交互
- 流被创建用于处理 socket 的输入和输出数据。BufferedReader 读取从字符输入流里面的本文。PrintWriter 打印格式化展示的对象读到本文输出流
- 处理循环开始 readLine() 阻塞，读取字符串直到最后是换行或者输入终止。
- 如果客户端发送的是“Done”处理循环退出
- 执行方法处理请求，返回服务器的响应
- 响应发回客户端
- 处理循环继续


"New"还是"Nonblocking"?

在 2002 年 Java 1.4 引入了非阻塞 API 在 java.nio 包。NIO 最初是为 New Input/Output 的缩写，然而，Java 的 API 已经存在足够长的时间，它不再是新的。现在普遍使用的缩写来表示 Nonblocking I/O。另一方面，一般阻塞 I/O 为 OIO 或 Old Input/Output。

NIO 很重要的一个组成部分是 Selector，它最终决定已注册的 socket 哪一组可以准备执行 I/O 操作。Selector 通知目标线程进行处理，并且可以同时处理多个并发连接。一个 Selector 由一个线程通常处理，但具体实施可以使用多个线程。因此，每次读或写操作执行能立即检查完成。总体而言，该模型提供了比 阻塞 I/O 模型 更好的资源使用，因为可以用较少的线程处理更多连接，这意味着更少的开销在内存和上下文切换上。当没有 I/O 处理时，线程可以被重定向到其他任务上。

如果你要直接使用这些 Java API 构建的 NIO 建立你的应用程序，只是这样做正确和安全是无法保证的。实现可靠和可扩展的 event-processing（事件处理器）来处理和调度数据并保证尽可能有效地，这是一个繁琐和容易出错的任务，最好留给专家 - Netty。

Netty 基本构成：

- Channel 是 NIO 基本的结构。它代表了一个用于连接到实体如硬件设备、文件、网络套接字或程序组件，能够执行一个或多个不同的 I/O 操作的开放连接。
- callback 回调是一个简单的方法，可以在某个合适的时间调用以通知客户。这种技术被广泛使用在各种编程的情况下，最常见的方法之一通知给其他人操作已完成。
- Future 提供了另外一种通知应用操作已经完成的方式。这个对象作为一个异步操作结果的占位符,它将在将来的某个时候完成并提供结果。
- Event 和 Handler，Netty 使用不同的事件来通知我们更改的状态或操作的状态。这使我们能够根据发生的事件触发适当的行为。

Netty 的异步编程模型是建立在 future 和 callback 的概念上的，将所有这些元素整合，协同为自己的程序设计提供了强大的力量。

比如，拦截操作和转换入站或出站数据只需要您提供回调或利用 future 操作返回的，这使得链操作简单、高效，促进编写可重用的、通用的代码。一个 Netty 的设计的主要目标是促进“关注点分离”:你的业务逻辑从网络基础设施应用程序中分离。

Netty 通过触发事件从应用程序中抽象出 Selector，从而避免手写调度代码。EventLoop 分配给每个 Channel 来处理所有的事件，包括：

- 注册感兴趣的事件
- 调度事件到 ChannelHandler
- 安排进一步行动

该 EventLoop 本身是由只有一个线程驱动，它给一个 Channel 处理所有的 I/O 事件，并且在 EventLoop 的生命周期内不会改变。这个简单而强大的线程模型消除你可能对你的 ChannelHandler 同步的任何关注，这样你就可以专注于提供正确的回调逻辑来执行。该 API 是简单和紧凑。


## ⚡ class File Format
- [Chapter 4. The class File Format](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html)

虚拟机规范并没有限定指明二进制字节流要从一个 Class 文件获取，或者说没有限定从哪里获取、怎样获取。这种开放使得 Java 在很多领域得到充分运用，例如：

- 从ZIP包中读取，这很常见，成为JAR，EAR，WAR格式的基础
- 从网络中获取，最典型的应用就是Applet
- 运行时计算生成，最典型的是动态代理技术，java.lang.reflect.Proxy，就是用了 ProxyGenerator.generateProxyClass 来为特定接口生成后缀为 $Proxy 的代理类
- 有其他文件生成，过时的 JSP 就会生成对应的 Class 类


JVM 加载的 Class 文件结构包括以下内容：

- 魔数：确定这个文件能否被 Java 虚拟机接受，值为 0xCAFFBABE（咖啡宝贝？）
- 版本号：Class 文件的版本号
- 常量池：Class 文件的资源仓库
- 访问标志：用于识别一些类或者接口层次的访问信息，是类还是接口？是否为 public？
- 索引集合：包括类索引、父类索引、接口索引
- 字段表集合：描述接口或类中声明的变量，但不包括方法内部的局部变量
- 方法表集合：代码在方法表中的属性集合“Code”属性
- 属性表集合：字段表、方法表都可以携带自己的属性表，以用于描述某些场景专用信息

ClassFile Structure：

	ClassFile {
	    u4             magic;
	    u2             minor_version;
	    u2             major_version;
	    u2             constant_pool_count;
	    cp_info        constant_pool[constant_pool_count-1];
	    u2             access_flags;
	    u2             this_class;
	    u2             super_class;
	    u2             interfaces_count;
	    u2             interfaces[interfaces_count];
	    u2             fields_count;
	    field_info     fields[fields_count];
	    u2             methods_count;
	    method_info    methods[methods_count];
	    u2             attributes_count;
	    attribute_info attributes[attributes_count];
	}


Table 4.1-A. access_flags and property modifiers

|   Flag Name    | Value  |                                   Interpretation                                  |
|----------------|--------|-----------------------------------------------------------------------------------|
| ACC_PUBLIC     | 0x0001 | Declared public; may be accessed from outside its package.                        |
| ACC_FINAL      | 0x0010 | Declared final; no subclasses allowed.                                            |
| ACC_SUPER      | 0x0020 | Treat superclass methods specially when invoked by the invokespecial instruction. |
| ACC_INTERFACE  | 0x0200 | Is an interface, not a class.                                                     |
| ACC_ABSTRACT   | 0x0400 | Declared abstract; must not be instantiated.                                      |
| ACC_SYNTHETIC  | 0x1000 | Declared synthetic; not present in the source code.                               |
| ACC_ANNOTATION | 0x2000 | Declared as an annotation type.                                                   |
| ACC_ENUM       | 0x4000 | Declared as an enum type.                                                         |


Table 4.3-A. Interpretation of field descriptors

| FieldType term |    Type   |                                   Interpretation                                  |
|----------------|-----------|-----------------------------------------------------------------------------------|
| B              | byte      | signed byte                                                                       |
| C              | char      | Unicode character code point in the Basic Multilingual Plane, encoded with UTF-16 |
| D              | double    | double-precision floating-point value                                             |
| F              | float     | single-precision floating-point value                                             |
| I              | int       | integer                                                                           |
| J              | long      | long integer                                                                      |
| L ClassName ;  | reference | an instance of class ClassName                                                    |
| S              | short     | signed short                                                                      |
| Z              | boolean   | true or false                                                                     |
| [              | reference | one array dimension                                                               |


在 HotSpot 虚拟机中，Java 对象内存布局可以分为 3 块区域：

- 对象头 Header

	- 第一部分，哈希码、GC 分代年龄、锁状态标志、线程持有的锁、偏向线程 ID、偏向时间戳等；
	- 第二部分，类型指针，即对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是哪个类的实例；

- 实例数据 Instance Data

	- 实例数据部分是对象真正存储的有效信息，即在代码中定义的各种类型的字段内容。无论是从父类继承下来的，还是在子类中定义的。

- 对齐填充 Padding

	- 对齐填充：HotSpot 虚拟机要求对象的起始地址必须是 8 字节的整数倍，换句话说，就是对象的大小必须是 8 字节的整数倍。



## ⚡ Java CLI
- https://www.oracle.com/java/technologies/javase-downloads.html
- [The Java Tutorials Bundle](https://www.oracle.com/java/technologies/javase/java-tutorial-downloads.html)
- [The Java™ Tutorials](https://docs.oracle.com/javase/tutorial/index.html)
- [JDI - Java Debug Interface](https://www.ibm.com/developerworks/cn/java/j-lo-jdi)
- [JavaTM Platform Debugger Architecture (JPDA)](https://docs.oracle.com/javase/6/docs/technotes/guides/jpda/index.html)
- [Spring Boot引起的“堆外内存泄漏”排查及经验总结](https://tech.meituan.com/2019/01/03/spring-boot-native-memory-leak.html)

Java 命令行参考：

	Usage: java [options] <mainclass> [args...]
	           (to execute a class)
	   or  java [options] -jar <jarfile> [args...]
	           (to execute a jar file)
	   or  java [options] -m <module>[/<mainclass>] [args...]
	       java [options] --module <module>[/<mainclass>] [args...]
	           (to execute the main class in a module)
	   or  java [options] <sourcefile> [args]
	           (to execute a single source-file program)

	 Arguments following the main class, source file, -jar <jarfile>,
	 -m or --module <module>/<mainclass> are passed as the arguments to
	 main class.

	 where options include:

	    -cp <class search path of directories and zip/jar files>
	    -classpath <class search path of directories and zip/jar files>
	    --class-path <class search path of directories and zip/jar files>
	                  A ; separated list of directories, JAR archives,
	                  and ZIP archives to search for class files.
	    -p <module path>
	    --module-path <module path>...
	                  A ; separated list of directories, each directory
	                  is a directory of modules.
	    --upgrade-module-path <module path>...
	                  A ; separated list of directories, each directory
	                  is a directory of modules that replace upgradeable
	                  modules in the runtime image
	    --add-modules <module name>[,<module name>...]
	                  root modules to resolve in addition to the initial module.
	                  <module name> can also be ALL-DEFAULT, ALL-SYSTEM,
	                  ALL-MODULE-PATH.
	    --enable-native-access <module name>[,<module name>...]
	                  modules that are permitted to perform restricted native operations.
	                  <module name> can also be ALL-UNNAMED.
	    --list-modules
	                  list observable modules and exit
	    -d <module name>
	    --describe-module <module name>
	                  describe a module and exit
	    --dry-run     create VM and load main class but do not execute main method.
	                  The --dry-run option may be useful for validating the
	                  command-line options such as the module system configuration.
	    --validate-modules
	                  validate all modules and exit
	                  The --validate-modules option may be useful for finding
	                  conflicts and other errors with modules on the module path.
	    -D<name>=<value>
	                  set a system property
	    -verbose:[class|module|gc|jni]
	                  enable verbose output for the given subsystem
	    -version      print product version to the error stream and exit
	    --version     print product version to the output stream and exit
	    -showversion  print product version to the error stream and continue
	    --show-version
	                  print product version to the output stream and continue
	    --show-module-resolution
	                  show module resolution output during startup
	    -? -h -help
	                  print this help message to the error stream
	    --help        print this help message to the output stream
	    -X            print help on extra options to the error stream
	    --help-extra  print help on extra options to the output stream
	    -ea[:<packagename>...|:<classname>]
	    -enableassertions[:<packagename>...|:<classname>]
	                  enable assertions with specified granularity
	    -da[:<packagename>...|:<classname>]
	    -disableassertions[:<packagename>...|:<classname>]
	                  disable assertions with specified granularity
	    -esa | -enablesystemassertions
	                  enable system assertions
	    -dsa | -disablesystemassertions
	                  disable system assertions
	    -agentlib:<libname>[=<options>]
	                  load native agent library <libname>, e.g. -agentlib:jdwp
	                  see also -agentlib:jdwp=help
	    -agentpath:<pathname>[=<options>]
	                  load native agent library by full pathname
	    -javaagent:<jarpath>[=<options>]
	                  load Java programming language agent, see java.lang.instrument
	    -splash:<imagepath>
	                  show splash screen with specified image
	                  HiDPI scaled images are automatically supported and used
	                  if available. The unscaled image filename, e.g. image.ext,
	                  should always be passed as the argument to the -splash option.
	                  The most appropriate scaled image provided will be picked up
	                  automatically.
	                  See the SplashScreen API documentation for more information
	    @argument files
	                  one or more argument files containing options
	    -disable-@files
	                  prevent further argument file expansion
	    --enable-preview
	                  allow classes to depend on preview features of this release
	To specify an argument for a long option, you can use --<name>=<value> or
	--<name> <value>.



对给定的一个 Java 源代码文件，可以在命令行进行编译生成 .class 类文件，然后再执行：

	javac demo.java
	java demo

Java 应用项目可以打包成一个 jar，当然你必须指定一个拥有 main 函数的主类作为 jar 包的程序入口。

具体的方法是修改 jar 包内目录 META-INF/MANIFEST.MF 文件。

比如 main 函数在 test.someClassName 类上定义，我们就只要在 MANIFEST.MF 里面添加如下一句话：

	Main-Class: test.someClassName

然后我们可以在控制台输入以下命令执行：

	java -jar test.jar

项目需要引用其他第三方的 jar 包，在 eclipse 会将放在项目的 lib 子目录下 jar 包一并打包，但是用 java -jar 执行时需要依赖外部包，就需要告知 Java 引用 jar 包所在。

运行时将其加入 -classpath 参数中指定目录，简写为 -cp：

	java -classpath some.jar -jar test.jar

因为使用 classpath 指定的 jar 由 AppClassloader 来加载，Java 命令加了 -jar 参数，AppClassloader 就只关注 test.jar 范围内的 class 了，classpath 参数失效。

程序依赖 DLL 文件可以，可以在 java.library.path 指定路径，path_to_dll 为动态链接库文件所在目录，或直接在代码中硬编码：

	java -Djava.library.path=<path_to_dll> <main_class>
	System.setProperty("java.library.path", "/path/to/library");


方法一、使用 Bootstrap Classloader 来加载这些类

	-Xbootclasspath: 完全取代系统 Java classpath，最好不用。
	-Xbootclasspath/a: 在系统 class 加载后加载，推荐使用。
	-Xbootclasspath/p: 在系统 class 加载前加载，注意使用，和系统类冲突就不好了。

多个 jar 包使用 ; 或 : 分隔，根据 Windows/Unix 系统选用：

	java -Xbootclasspath/a:some.jar;some2.jar; -jar test.jar
	java -Dloader.path=/path/to/lib -jar test.jar


方法二、使用 Extension Classloader 来加载

你可以把需要加载的 jar 都扔到 %JRE_HOME%/lib/ext 下面，这个目录下的 jar 包会在 Bootstrap Classloader 工作完后，由 Extension Classloader 来加载。非常方便，非常省心。:)

命令行使用 -cp 参考只能指定一个固定 jar 包，不能用通配符，多个包要一个个写。通常情况 jar 都在同一目录，可以使用 -Djava.ext.dirs 参数指定包目录，配置多个目录使用冒号分隔（Windows下使用分号）。

	java -Djava.ext.dirs="libs\;%JAVA_HOME%\jre\lib\ext"

方法三、还是用 AppClassloader 来加载，不过不需要 classpath 参数

我们在 MANIFEST.MF 中添加如下代码，多个 jar 包用空格分隔：

	Class-Path: lib/some.jar
	Class-Path: lib/some.jar lib/some2.jar

lib 是和 test.jar 同目录的一个子目录，test.jar 要引用的 some.jar 包就在这里面。

另：如果 META-INF/INDEX.LIST 文件存在，可能会使 Class-Path 配置失效。INDEX.LIST 是 Jar 打包工具打包时生成的索引文件，删除对运行不产生影响。

方法四、自定义 Classloader 来加载

这种方法是终极解决方案，基本上那些知名 Java 应用都会在代码中使用 Classloader，如 Tomcat、JBoss 等等。


如果源代码是包的形式组织，多个源文件就要分别依次进行编译，-d 指定输出目录：

	>javac -d . src\com\coding\HelloBean.java
	>javac -d . src\com\coding\SpringDemo.java
	>javac -d . src\com\coding\HelloListener.java

或者，使用 sourcelist.txt 编译多个 Java 文件的目的，将要编译的文件列表：

	src\com\coding\HelloBean.java
	src\com\coding\SpringDemo.java
	src\com\coding\HelloListener.java

命令行运行：

	javac -d bin -sourcepath src -classpath bin @sourcelist.txt

编译时，依赖库以或类目录使用 -cp 指定，多个包用冒号或者分号隔开： 

    javac -d bin -encoding utf-8 -cp .:lib/fastjson-1.2.37.jar -g -sourcepath src @src/sources.txt
 
    jar -cvfm demo.jar MANIFEST.MF *  

注意 MANIFEST.MF 文件定义主类，参考内容如下：

	Manifest-Version: 1.0  
	Main-Class: com.travel.app.AppMainEntry
	Class-Path: bin/fastjson-1.2.37.jar bin/json-20170516.jar bin/org.restlet.ext.json-2.3.10.jar bin/org.restlet-2.3.10.jar




## ⚡ Reflection 反射机制
- Class (Java SE 9 & JDK 9 ) - https://docs.oracle.com/javase/9/docs/api/java/lang/Class.html
- Field (Java Platform SE 7 ) - https://docs.oracle.com/javase/7/docs/api/java/lang/reflect/Field.html
- ByteArrayOutputStream (Java SE 9 & JDK 9 ) - https://docs.oracle.com/javase/9/docs/api/java/io/ByteArrayOutputStream.html
- URL (Java SE 9 & JDK 9 ) - https://docs.oracle.com/javase/9/docs/api/java/net/URL.html
- Class热替换与卸载 - http://www.importnew.com/22462.html
- 深入探讨 Java 类加载器 - https://www.ibm.com/developerworks/cn/java/j-lo-classloader/index.html
- 反射机制（Reflection） – http://blog.qiji.tech/archives/4374
- 深入理解Java类型信息(Class对象)与反射机制 - https://blog.csdn.net/javazejian/article/details/70768369
- 深入理解Java类加载器(一)：Java类加载原理解析 - https://blog.csdn.net/justloveyou_/article/details/72217806
- 类加载器与 Class.getResourceAsStream 问题解决 https://blog.csdn.net/w1196726224/article/details/54428493
- http://tomcat.apache.org/tomcat-7.0-doc/class-loader-howto.html

认识 Class 对象之前，先来了解一个概念，RTTI - Run-Time Type Identification **运行时类型识别**，对于这个词一直是 C++ 中的概念，至于 Java RTTI 的说法则是源于《Thinking in Java》一书，其作用是在运行时识别一个对象的类型和类的信息，分两种：

- 传统的 RTTI，它假定我们在编译期已知道了所有类型，在没有反射机制创建和使用类对象时，一般都是编译期已确定其类型，如 new 对象时该类必须已定义好。
- 反射机制方式 RTTI，它允许我们在运行时发现和使用类型的信息。

在 Java 中用来表示运行时类型信息的对应类就是 Class 类也对应源代码编译后生成的类文件，Class 类也是一个实实在在的类，存在于 java.lang 包中。

Class 类也是类的一种，但是特别地 Class 类用来描述使用 class 关键字定义的类，这些描述信息用于在运行时获取类定义内容，Class 类的对象作用是运行时提供或获得某个对象的类型信息。编写好的类在编译后都会产生一个 Class 对象，表示的是创建的类的类型信息，而且这个 Class 对象保存在同名字节码文件中。比如创建一个 Shapes 类，编译后就会创建其包含 Shapes 类相关类型信息的 Class 对象，并保存在 Shapes.class 字节码文件中。每

个通过关键字 class 标识的类，在内存中有且只有一个与之对应的 Class 对象来描述其类型信息，无论创建多少个实例对象，其依据的都是用一个 Class 对象。Class 类只存私有构造函数，因此对应 Class 对象只能有 JVM 创建和加载。

在运行期间，如果我们要产生某个类的对象，虚拟机 JVM 会检查该类型的 Class 对象是否已被加载。如果没有被加载，JVM 会根据类的名称找到 .class 文件并加载它。一旦某个类型的 Class 对象已被加载到内存，就可以用它来产生该类型的所有对象。

装载类的过程非常简单：查找类所在位置，并将找到的 Java 类的字节码装入内存，在内存中生成对应的 Class 对象。JVM 并不止有一个类装载器，事实上，如果你愿意的话，你可以让 JVM 拥有无数个类装载器。

类装载器自身也是一个类，它也需要被装载到内存中来，那么这些类装载器由谁来装载呢，总得有个根吧？确实存在这样的根，Bootstrap ClassLoader 就是。

类装载器把一个类装入 Java 虚拟机中要经过装载、链接和初始化三个步骤，其中链接又可以细分成校验、准备和解析三步，除了解析外，其它步骤是严格按照顺序完成的：

- 装载：查找和导入类或接口的二进制数据；
- 链接：执行下面的校验、准备和解析步骤，其中解析步骤是可以选择的；
- 校验：检查导入类或接口的二进制数据的正确性；
- 准备：给类的静态变量分配并初始化存储空间；
- 解析：将符号引用转成直接引用；
- 初始化：激活类的静态变量的初始化Java代码和静态Java代码块。

**Class.forName(String name)** 方法调用的是 Class.forName(String name, boolean initialize, ClassLoader loader)，装载的类会被初始化。

**ClassLoader.loadClass(String name)** 方法调用的是 ClassLoader.loadClass((String name, boolean resolve)，resolve=false 表示被装载后不进行链接。


通过反射方法实例化对象及修改私有成员为公有成员

	import java.lang.reflect.*;

	class Gum {
		private int weight = 0;
		static { System.out.println("Loading Gum"); }
		public Gum(){ }
		public Gum(int i){ weight = i; }
		public String greeting(){ return "Hi!"; }
	}

	public class coding {
		public static void print(Object obj) {
			System.out.println(obj);
		}
		@SuppressWarnings("unchecked")
		public static void main(String[] args) {
			try {
				Class clz = Class.forName("Gum");
				// Class clazz = Gum.class;
				// Constructor[] cts = clz.getConstructors();
				// for ( Constructor c:cts ) {
				// 	print("Contructor: "+c.getName​());
				// }
				// Constructor constructor = clz.getConstructor();
				// Object object = clz.newInstance(); 
				Constructor constructor = clz.getConstructor(int.class);
				Object object = constructor.newInstance(0);

				Method method = clz.getMethod("greeting");
				String msg = (String)method.invoke(object);
				print(msg);

				Field field = clz.getDeclaredField("weight");
				field.setAccessible(true);
				print("get private member:"+field.get(object));

				Class<?> class1 = Class.forName("Gum");
				String name = class1.getClassLoader().getClass().getName();
				print("class loader is " + name);

			} catch(Exception e) {
				e.printStackTrace();
			}
		}
	}

使用类反射方法 Class.forName() 载入类，返回值是对应类的 Class 对象，也可以通过对象实例的 **getClass()** 方法获取，这是基础对象类 Object 定义的方法，字面常量的方式获取 Class 对象如 Object.class。如果没有定义相应的类构造函数，getConstructor() 会引发 NoSuchMethod 异常。


Field.setAccessible(true) 并不是将方法的访问权限改成了public，而是取消java的权限控制检查。即使是public成员，其accessible 属性默认也是false，即需要进行权限检查。

与 Java 反射相关的类如下：

	Class 类        代表类的实体，在运行的Java应用程序中表示类和接口
	Field 类        代表类的成员变量（成员变量也称为类的属性）
	Method类        代表类的方法
	Constructor类   代表类的构造方法


注意，getClassLoader() 方法，如果类是通过 Bootstrap class loader 加载的则会返回 null，即使用类似以下的命令运行：

	java -Xbootclasspath/p:demos LoadClassDemo

如果对象是原类型 primitive type 或是 void 也会返回 null。




## ⚡ ClassLoader 类的加载流程
- [Chapter 5. Loading, Linking, and Initializing](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-5.html)
- [loadClass()的研究](https://www.cnblogs.com/guweiwei/p/6534418.html)
- [深入理解JVM（③）虚拟机的类加载器（双亲委派模型）](https://www.cnblogs.com/jimoer/p/13200244.html)
- [深入理解JVM（③）HotSpot 虚拟机对象探秘](https://www.cnblogs.com/jimoer/p/13034193.html)
- [写一个 Java 热加载](https://zhuanlan.zhihu.com/p/90404828)
- [能不能自定义一个类叫 java.lang.System？](https://zhuanlan.zhihu.com/p/77366251)

JVM 动态加载类主要有三个步骤：

- Loading
- Linking
- Initializing

JVM 启动后，首先就是处理最底层的加载器，Bootstrap Class Loader，这个 C++ 实现的加载器是所有 Java 类加载的根基。

JVM 技术规范的 Chapter 5. Loading, Linking, and Initializing 目录可以很好地解析类文件的加载流程：

	5.1. The Run-Time Constant Pool
	5.2. Java Virtual Machine Startup
	5.3. Creation and Loading
	5.3.1. Loading Using the Bootstrap Class Loader
	5.3.2. Loading Using a User-defined Class Loader
	5.3.3. Creating Array Classes
	5.3.4. Loading Constraints
	5.3.5. Deriving a Class from a class File Representation
	5.4. Linking
	5.4.1. Verification
	5.4.2. Preparation
	5.4.3. Resolution
	5.4.3.1. Class and Interface Resolution
	5.4.3.2. Field Resolution
	5.4.3.3. Method Resolution
	5.4.3.4. Interface Method Resolution
	5.4.3.5. Method Type and Method Handle Resolution
	5.4.3.6. Call Site Specifier Resolution
	5.4.4. Access Control
	5.4.5. Overriding
	5.5. Initialization
	5.6. Binding Native Method Implementations
	5.7. Java Virtual Machine Exit


参考《深入理解 Java 虚拟机》，类加载器有几个重要的特性：

- 每个类加载器都有自己的预定义的搜索范围，用来加载 class 文件； 
- 每个类和加载它的 ClassLoader 共同确定了这个类的唯一性，同一个类由不同加载器加载，那么 JVM 认为是不同的类；
- 双亲委派模型。

在 JDK 9 之前的 Java 应用都是由这三类加载器互相配合来完成加载的，如果有自定义的类加载器，会先执行自定义的类加载器。各种的类加载器之间的层次关系被称为类加载器的双亲委派模型 Parents Delegation Model。

**双亲委派模型**是指所有的类加载器都是有层级结构的，类加载器本身也有一个父级加载器 Parent ClassLoader，除了启动类加载器 Bootstrap ClassLoader。当一个类加载器接收到一个类加载请求时，首先将这个请求委派给它的父加载器去加载，所以每个类加载请求最终都会传递到顶层的启动类加载器，如果父加载器无法加载时，子类加载器才会去尝试自己去加载。

双亲指的就是 Extension CLassLoader 和 Bootstrap ClassLoader 两个底层加载器。

而绝大多数 Java 应用都会用到如下 3 中系统提供的类加载器：

- 启动类加载器 Bootstrap/Primordial/NULL ClassLoader：顶层的类加载器，没有父类加载器。负责加载 /lib 目录下的，或则被 -Xbootclasspath 参数所指定路径中的，并被 JVM 识别的（仅按文件名识别，如 rt.jar，名字不符合的类库即使放在 lib 目录也不会被加载）类库加载到虚拟机内存中。所有被 Bootstrap classloader 加载的类，它的 Class.getClassLoader 方法返回的都是 null，所以也称作 NULL ClassLoader。

- 扩展类加载器 Extension CLassLoader：由 sun.misc.Launcher$ExtClassLoader 实现，负责加载 <JAVA_HOME>/lib/ext 目录下，或被 `java.ext.dirs` 系统变量所指定的目录下的所有类库；

- 应用程序类加载器 Application/System ClassLoader：由 sun.misc.Launcher$AppClassLoader 实现。它是 ClassLoader.getSystemClassLoader() 方法的默认返回值，所以也称为系统类加载器。它负责加载 classpath 下所指定的类库，如果应用程序没有自定义过自己的类加载器，一般情况下这个就是程序中默认的类加载器。

通过双亲委派模型就实现了类加载器的三个特性：

- 委派 delegation：子类加载器委派给父类加载器加载；
- 可见性 visibility：子类加载器可访问父类加载器加载的类，父类不能访问子类加载器加载的类；
- 唯一性 uniqueness：可保证每个类只被加载一次，比如 Object 类是被 Bootstrap ClassLoader 加载的，因为有了双亲委派模型，所有的 Object 类加载请求都委派到了 Bootstrap ClassLoader，所以保证了只被加载一次。

从 JVM 虚拟机实现的角度来看，只存在两种不同的类加载器实现：

- 启动类加载器 Bootstrap ClassLoader 是虚拟机自身的一部分；
- 所有其他的类加载器，独立于虚拟机外部，都继承自抽象类 java.lang.ClassLoader。


双亲委派模型的源码其实非常简洁，先检查请求加载的类型是否已经被加载过，若没有则调用父加载器的 loadeClass() 方法，若父加载器为空则默认使用启动类加载器作为父加载器。父加载器加载失败抛出 ClassNotFoundException 异常后，才会调用自己的 findClass 方法尝试进行加载。

类加载与 sun.misc.Launcher 相关，来看 OpenJDK 提供的抽象类 **ClassLoader** 源码如下：

	protected Class<?> loadClass(String name, boolean resolve)
	    throws ClassNotFoundException
	{
	    synchronized (getClassLoadingLock(name)) {
	        // 首先，检查请求的类是否已经被加载过了
	        Class<?> c = findLoadedClass(name);
	        if (c == null) {
	            long t0 = System.nanoTime();
	            try {
	                if (parent != null) {
	                    c = parent.loadClass(name, false);
	                } else {
	                    c = findBootstrapClassOrNull(name);
	                }
	            } catch (ClassNotFoundException e) {
	                // 如果父类加载器抛出 ClassNotFoundException
	                // 说明父类加载器无法完成加载请求
	            }

	            if (c == null) {
	                // 在父类加载器仍然无法加载时
	                // 再调用本身的 findClass 方法来进行类加载
	                long t1 = System.nanoTime();
	                c = findClass(name);

	                // this is the defining class loader; record the stats
	                sun.misc.PerfCounter.getParentDelegationTime().addTime(t1 - t0);
	                sun.misc.PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);
	                sun.misc.PerfCounter.getFindClasses().increment();
	            }
	        }
	        if (resolve) {
	            resolveClass(c);
	        }
	        return c;
	    }
	}

双亲委派模型并不是一个具体强制性约束的模型，虽然在 Java 大部分的类加载器都遵循这个模型，但也有例外的情况，直到 JDK9 模块化为止，主要出现过 3 次较大规模规则破坏的情况。

第一次被破坏，其实发生在双亲委派模型出现之前，由于双亲委派模型在 JDK 1.2 之后才被引入，但是类加载器的概念和抽象类 java.lang.ClassLoader 则在 Java 的第一个版本中就已经存在了。为了向前兼容，只能在 JDK 1.2 之后的 java.lang.ClassLoader 中添加一个新的 protected findClass() 方法，并引导用户编写类的加载逻辑时尽可能去重写这个方法，而不是在 loadClass() 中编写代码。

第二次破坏是因为自身的一些局限性导致的，双亲委派模型很好的解决了各个类加载器协作时基础类型的一致性问题，即越基础的类由越上层的加载器进行加载。

但是如果基础的类需要调用下面的用户代码时该怎么办呢？Java 设计团队用了一个不太优雅的方案，引入了一个名叫线程上下文的类加载器 Thread Context ClassLodar。这个类加载器可以通过 java.lang.Thread 类的 setContextClassLoader() 方法进行设置，如果创建线程时还未设置，它将会从父线程中继承一个，如果在应用程序的全局范围内都没有设置过的话，那这个类加载器默认就是应用程序类加载器。

像 JNDI、JDBC、JCE、JAXB、JBI 等都是用的这种类型加载器实现的功能。最常见的 Tomcat 中就用到了线程上下文的类加载器。

第三次破坏，是为了实现热部署、模块化。在更新了一部分代码后，不需要停机重启，只需要将类加载器和类都替换掉就可以了，典型的就是 OSGi 的模块化热部署。

OSGi 实现模块化热部署的关键则是它自定义的类加载器机制的实现。每一个程序模块 Bundle 都有一个自己的类加载器，当需要更换一个 Bundle 时，就把 Bundle 连同类加载器一起换掉以实现代码的热替换。在 OSGi 幻境下，类加载器不再是双亲委派模型中的树状结构，而是进一步发展为更加复杂的网状结构，当受到类加载请求时，OSGi 将按照下面的顺序进行类搜索：

- 将 java.＊ 开头的类委派给父类加载器加载。
- 否则，将委派列表名单内的类委派给父类加载器加载。
- 否则，将 Import 列表中的类委派给 Export 这个类的 Bundle 的类加载器加载。
- 否则，查找当前 Bundle ClassPath，使用自己的类加载器加载。
- 否则，查找类是否在自己的 Fragment Bundle 中，如果在，则委派给 Fragment Bundle 的类加载器加载。
- 否则，查找 Dynamic Import 列表的 Bundle，委派给对应 Bundle 的类加载器加载。
- 否则，类加载器失败。


能不能自定义一个类叫 java.lang.System？能不能自定义一个类叫 java.lang.String？这一类问题就是考察对 Java 加载字节码流程的理解。由于 JVM 安全机制，试图加载命名空间以 java.lang 开头的类，会引发 SecurityException 异常。

	java.lang.SecurityException: Prohibited package name: java.lang
	        at java.lang.ClassLoader.preDefineClass(ClassLoader.java:662)
	        at java.lang.ClassLoader.defineClass(ClassLoader.java:761)
	        at java.lang.ClassLoader.defineClass(ClassLoader.java:642)

java.lang.System 这些类是 Bootstrap 加载器加载的，就算自己重写，也总是使用 Java 系统提供的 System，自己写的 System 类根本没有机会得到加载。虽然可以打破双亲委派机制，但是自定义的类加载器最终也会在父类的 final defineClass() 方法执行时被拦截下来，得到相同异常，自定义的 classLoader 不可能加载到以 java 开头的类的。

    /* Determine protection domain, and check that:
        - not define java.* class,
        - signer of this class matches signers for the rest of the classes in
          package.
    */
    private ProtectionDomain preDefineClass(String name, ProtectionDomain pd)
    {
        if (!checkName(name))
            throw new NoClassDefFoundError("IllegalName: " + name);

        if ((name != null) && name.startsWith("java.")) {
            throw new SecurityException
                ("Prohibited package name: " +
                 name.substring(0, name.lastIndexOf('.')));
        }
        if (pd == null) {
            pd = defaultDomain;
        }

        if (name != null) checkCerts(name, pd.getCodeSource());

        return pd;
    }

ClassLoader 有两个方法供重写实现自定义加载器，一般优先实现 findClass()，因为系统提供的加载器实现了 loadClass() 逻辑，在其加载失败时就会调用 findClass()，并且系统并实现的这个方法只是简单地抛出 ClassNotFoundException，目的就是让使用者自行实现：

	 * <p> The network class loader subclass must define the methods {@link
	 * #findClass <tt>findClass</tt>} and <tt>loadClassData</tt> to load a class
	 * from the network.  Once it has downloaded the bytes that make up the class,
	 * it should use the method {@link #defineClass <tt>defineClass</tt>} to
	 * create a class instance.  A sample implementation is:
	 *
	 * <blockquote><pre>
	 *     class NetworkClassLoader extends ClassLoader {
	 *         String host;
	 *         int port;
	 *
	 *         public Class findClass(String name) {
	 *             byte[] b = loadClassData(name);
	 *             return defineClass(name, b, 0, b.length);
	 *         }
	 *
	 *         private byte[] loadClassData(String name) {
	 *             // load the class data from the connection
	 *             &nbsp;.&nbsp;.&nbsp;.
	 *         }
	 *     }
	 * </pre></blockquote>


回到前面 defineClass() 方法，参考其实现，它的核心是调用了一个私有的 native 方法，外部类是不可访问的，想到反射的用途了吗，就算是 private 方法，用一个 setAccessible(true) 就可以访问，但是可以可惜有人试过，但是结果还是失败的，因为 native 方法还是抛出同样的异常。

    protected final Class<?> defineClass(String name, byte[] b, int off, int len,
                                         ProtectionDomain protectionDomain)
        throws ClassFormatError
    {
        protectionDomain = preDefineClass(name, protectionDomain);
        String source = defineClassSourceLocation(protectionDomain);
        Class<?> c = defineClass1(name, b, off, len, protectionDomain, source);
        postDefineClass(c, protectionDomain);
        return c;
    }

    private native Class<?> defineClass1(String name, byte[] b, int off, int len,
                                         ProtectionDomain pd, String source);

所以，目前来看，所有基于 Java 的技术是不能可去定制 java.lang.System 这样的类的，首先 API 的安全检查这一关就过不了。

但是，JDK 9 后引入了模块化，这个功能带来了转机，有人试验通过了，参考操作流程总结：

- Java 11 不能直接编译自定义的 java.lang 这个包，因为已经存在 java.base 这个模块里；
- 可以使用 Java 8 编译，再由 Java 11 反射方法来加载，注意，fineClass1 方法在 Java 11 中变成了静态方法；
- Java 11 platfromClassLoader 可以成功的把自定义的 java.lang.System 加载到内存当中并实例化对象；

虽然，历经曲折才将自定义的 java.lang.System 加载进来，但是不能像内部提供的 System 类一样使用，只能通过反射的方式执行。这也许没有多大意义，只不过求解的过程对 Java 虚拟机的加载器和类加载流程的深入理解才是最有价值的。


另一例测试代码：

	class SingleTon {
	    private static SingleTon singleTon = new SingleTon();
	    public static int count1;
	    public static int count2 = 0;
		{
		    System.out.println("Dynamic code block");
		}
		static {
		    System.out.println("static code block");
		}
	    private SingleTon() {
		    System.out.println("constructor");
	        count1++;
	        count2++;
	    }

	    public static SingleTon getInstance() {
	        return singleTon;
	    }
	}

	public class Test {
	    public static void main(String[] args) {
	        SingleTon singleTon = SingleTon.getInstance();
	        System.out.println("count1=" + singleTon.count1);
	        System.out.println("count2=" + singleTon.count2);
	    }
	}


分析:静态成员初始化动作在构造函数执行后，动态代码块 --> 静态代码块 --> 构造器 按顺序执行。

- SingleTon singleTon = SingleTon.getInstance();调用了类的SingleTon调用了类的静态方法，触发类的初始化 
- 类加载的时候在准备过程中为类的静态变量分配内存并初始化默认值 singleton=null count1=0,count2=0 
- 类初始化化，为类的静态变量赋值和执行静态代码快。singleton赋值为new SingleTon()调用类的构造方法 
- 调用类的构造方法后count=1;count2=1 
- 继续为count1与count2赋值,此时count1没有赋值操作,所有count1为1,但是count2执行赋值操作就变为0

类的初始化发生在以下几种情况，称为对一个类进行 “主动引用” ，除此之外称为“被动引用”，均不会触发类的初始化。

	创建类的实例
	访问类的静态变量，不含常量【被final修辞的静态变量】，编译器当常量为值而不是域(field)。
	访问类的静态方法
	反射加载，如( Class.forName("my.xyz.Test") )
	当初始化一个类时，发现其父类还未初始化，则先出发父类的初始化
	虚拟机启动时，定义了main()方法的那个类先初始化

类从被加载到虚拟机内存中开始，直到卸载出内存为止，它的整个生命周期包括了七个步骤，其中，验证、准备和解析这三个部分统称为连接（linking）。

	1) 加载 Loading
	2) 验证 Verification、
	3) 准备 Preparation、
	4) 解析 Resolution
	5) 初始化 Initialization
	6) 使用 Using
	7) 卸载 Unloading

加载阶段是类加载过程的第一个阶段，在此阶段，虚拟机需要完成以下三件事情：

	1、 通过一个类的全限定名来获取定义此类的二进制字节流。
	2、 将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。
	3、 在Java堆中生成一个代表这个类的java.lang.Class对象，作为方法区这些数据的访问入口。

加载阶段即可以使用系统提供的类加载器在完成，也可以由用户自定义的类加载器来完成。加载阶段与连接阶段的部分内容(如一部分字节码文件格式验证动作)是交叉进行的，加载阶段尚未完成，连接阶段可能已经开始。

验证是连接阶段的第一步，这一阶段的目的是为了确保Class文件的字节流中包含的信息符合当前虚拟机的要求，并且不会危害虚拟机自身的安全。

Java语言本身是相对安全的语言，使用Java编码是无法做到如访问数组边界以外的数据、将一个对象转型为它并未实现的类型等，如果这样做了，编译器将拒绝编译。但是，Class文件并不一定是由Java源码编译而来，可以使用任何途径，包括用十六进制编辑器(如UltraEdit)直接编写。如果直接编写了有害的“代码”(字节流)，而虚拟机在加载该Class时不进行检查的话，就有可能危害到虚拟机或程序的安全。

不同的虚拟机，对类验证的实现可能有所不同，但大致都会完成下面四个阶段的验证 ：文件格式验证、元数据验证、字节码验证和符号引用验证。

准备阶段是为类的静态变量分配内存并将其初始化为默认值，这些内存都将在方法区中进行分配。准备阶段不分配类中的实例变量的内存，实例变量将会在对象实例化时随着对象一起分配在Java堆中。

	public static int value=123;

上一句代码在准备阶段value初始值为0，在执行构造函数后，开始初始化阶段才会变为123。

解析阶段是虚拟机将常量池内的符号引用替换为直接引用的过程。 符号引用 Symbolic Reference 以一组符号来描述所引用的目标，符号可以是任何形式的字面量，只要使用时能无歧义地定位到目标即可。符号引用与虚拟机实现的内存布局无关，引用的目标并不一定已经加载到内存中。 直接引用 Direct Reference 可以是直接指向目标的指针、相对偏移量或是一个能间接定位到目标的句柄。直接引用是与虚拟机实现的内存布局相关的，如果有了直接引用，那么引用的目标必定已经在内存中存在。

类初始化是类加载过程的最后一步，前面的类加载过程，除了在加载阶段用户应用程序可以通过自定义类加载器参与之外，其余动作完全由虚拟机主导和控制。到了初始化阶段，才真正开始执行类中定义的Java程序代码。



## ⚡ ClassLoader 类加载器

JVM预定义几种类加载器，当JVM启动的时候，Java缺省开始使用如下三种类型的类加载器：

启动（Bootstrap）类加载器：引导类加载器是用 本地代码实现的类加载器，它负责将 <JAVA_HOME>/lib下面的核心类库 或 -Xbootclasspath选项指定的jar包等 虚拟机识别的类库 加载到内存中。由于引导类加载器涉及到虚拟机本地实现细节，开发者无法直接获取到启动类加载器的引用，所以 不允许直接通过引用进行操作。

扩展（Extension）类加载器：扩展类加载器是由Sun的ExtClassLoader（sun.misc.Launcher$ExtClassLoader）实现的，它负责将 <JAVA_HOME >/lib/ext或者由系统变量-Djava.ext.dir指定位置中的类库 加载到内存中。开发者可以直接使用标准扩展类加载器。

系统（System）类加载器：系统类加载器是由 Sun 的 AppClassLoader（sun.misc.Launcher$AppClassLoader）实现的，它负责将 用户类路径(java -classpath 或 -Djava.class.path 变量所指的目录，即当前类所在路径及其引用的第三方类库的路径，如第四节中的问题6所述)下的类库 加载到内存中。开发者可以直接使用系统类加载器，是最常用的加载器，同时也是java中默认的加载器。通过Java反射机制 Class.getClassLoader() 可以得到类加载器信息。

除了以上列举的三种类加载器，还有一种比较特殊的类型就是线程上下文类加载器（context class loader），从 JDK 1.2 开始引入的。Java.lang.Thread 类中的方法 getContextClassLoader()和 setContextClassLoader(ClassLoader cl)用来获取和设置线程的上下文类加载器。如果没有通过 setContextClassLoader(ClassLoader cl)方法进行设置的话，线程将继承其父线程的上下文类加载器。Java 应用运行的初始线程的上下文类加载器是系统类加载器。在线程中运行的代码可以通过此类加载器来加载类和资源。使用线程上下文类加载器，可以在执行线程中抛弃双亲委派加载链模式，使用线程上下文里的类加载器加载类。典型的例子有：通过线程上下文来加载第三方库jndi实现，而不依赖于双亲委派。大部分Java application服务器(jboss, tomcat..)也是采用contextClassLoader来处理web服务。还有一些采用hot swap特性的框架，也使用了线程上下文类加载器，比如 seasar (full stack framework in japenese)。

JVM在加载类时默认采用的是双亲委派机制。通俗的讲，就是某个特定的类加载器在接到加载类的请求时，首先将加载任务委托给父类加载器，依次递归 (本质上就是loadClass函数的递归调用)。因此，所有的加载请求最终都应该传送到顶层的启动类加载器中。如果父类加载器可以完成这个类加载请求，就成功返回；只有当父类加载器无法完成此加载请求时，子加载器才会尝试自己去加载。事实上，大多数情况下，越基础的类由越上层的加载器进行加载，因为这些基础类之所以称为“基础”，是因为它们总是作为被用户代码调用的API（当然，也存在基础类回调用户用户代码的情形）。 系统类加载器的父类加载器是标准扩展类加载器，标准扩展类加载器的父类加载器是启动类加载器。

虚拟机出于安全等因素考虑，不会加载<JAVA_HOME>/lib目录下存在的陌生类，换句话说，虚拟机只加载<JAVA_HOME>/lib目录下它可以识别的类。因此，开发者通过将要加载的非JDK自身的类放置到此目录下期待启动类加载器加载是不可能的。

在绝大多数情况下，系统默认提供的类加载器实现已经可以满足需求。但是在某些情况下，您还是需要为应用开发出自己的类加载器。比如您的应用通过网络来传输Java类的字节代码，为了保证安全性，这些字节代码经过了加密处理。这个时候您就需要自己的类加载器来从某个网络地址上读取加密后的字节代码，接着进行解密和验证，最后定义出要在Java虚拟机中运行的类来。下面将通过两个具体的实例来说明类加载器的开发。通过用户自定义的类装载器，你的程序可以加载在编译时并不知道或者尚未存在的类或者接口，并动态连接它们并进行有选择的解析。

除了和本地实现密切相关的启动类加载器之外，包括标准扩展类加载器和系统类加载器在内的所有其他类加载器我们都可以当做自定义类加载器来对待，唯一区别是是否被虚拟机默认使用。前面的内容中已经对java.lang.ClassLoader抽象类中的几个重要的方法做了介绍，这里就简要叙述一下一般 用户自定义类加载器的工作流程（可以结合后面问题解答一起看）：

	1、首先检查请求的类型是否已经被这个类装载器装载到命名空间中了，如果已经装载，直接返回；否则转入步骤2；

	2、委派类加载请求给父类加载器（更准确的说应该是双亲类加载器，真实虚拟机中各种类加载器最终会呈现树状结构），如果父类加载器能够完成，则返回父类加载器加载的Class实例；否则转入步骤3；

	3、调用本类加载器的 findClass() 方法，试图获取对应的字节码。如果获取的到，则调用 defineClass() 导入类型到方法区；如果获取不到对应的字节码或者其他原因失败，向上抛出异常。

在Java中，一个类用其完全匹配类名(fully qualified class name)作为标识，这里指的完全匹配类名包括包名和类名。但在JVM中，一个类用其全名和一个ClassLoader的实例 作为唯一标识，不同类加载器加载的类将被置于不同的命名空间。

在java.net包下有一个 URLClassLoader 类提供了运程加载类的功能，它让我们可以通过以下几种方式进行加载：

	* 文件: (从文件系统目录加载)
	* jar包: (从Jar包进行加载)
	* Http: (从远程的Http服务进行加载)

一个class被一个ClassLoader实例加载过的话，就不能再被这个ClassLoader实例再次加载，即加载类时调用了defileClass()方法，重新加载字节码、解析、验证后就不能重复执行。系统默认的AppClassLoader加载器内部会缓存加载过的class，重新加载的话，就直接取缓存。所以需要热加载只能重新创建一个ClassLoader，然后再去加载已经被加载过的class文件。实现热加载需要重载 ClassLoader 的 loadClass() 方法，跳过内部的双亲委托机制。即使不采用双亲委托机制，比如java.lang包中的相关类还是不能自定义一个同名的类来代替，主要因为JVM解析、验证class的 时候，会进行相关判断。强制重复加载引发 java.lang.LinkageError 异常：

	Exception in thread "main" java.lang.LinkageError: loader (instance of  NetworkClassLoader): attempted  duplicate class definition

JVM中class和Meta信息存放在PermGen space区域。如果加载的class文件很多，那么可能导致PermGen space区域空间溢出。引起：java.lang.OutOfMemoryErrorPermGen space. 对于有些Class我们可能只需要使用一次，就不再需要了，JVM中的Class只有满足以下三个条件，才能被GC回收，也就是该Class被卸载（unload）：

	该类所有的实例都已经被GC。
	加载该类的ClassLoader实例已经被GC。
	该类的java.lang.Class对象没有在任何地方被引用。
	System.gc()执行后的Class的卸载是不可控的。


## ⚡ NetWorkClassLoader 自定义远程类加载器

自定义类加载器，只需要三个步骤：

- 新建一个 MyClassLoader 继承 ClassLoader；
- 重写 loadclass 方法，读入字节码；
- 使用 defineClass 返回类定义。

因为 JDK 已经在 loadClass 方法中帮我们实现了搜索类的算法，当在 loadClass 方法中搜索不到类时，才会调用 findClass 方法来搜索类。所以我们只需重写该方法即可，如没有特殊的要求，一般不建议重写 loadClass 搜索类的算法。

反射机制的应用必须要求该类是 public 访问权限的类，这样才能由加载器加载。要实现 HotSwap 热加载，只需要创建新实例去加载目标类就可以，热加载逻辑可以根据文件更新时间来做判断。

	import java.lang.reflect.*;
	import java.io.ByteArrayOutputStream;
	import java.io.InputStream;
	import java.io.InputStreamReader;
	import java.io.BufferedReader;
	import java.net.URL;
	import java.net.HttpURLConnection;

	/**
	 * NetworkClassLoader ncl = new NetworkClassLoader("http://xxx.com");  
	 * String basicClassName = "Gum";  
	 * Class<?> clazz = ncl.loadClass(basicClassName);
	 * Gum oo = (Gum)clazz.newInstance();
	 */
	class NetworkClassLoader extends ClassLoader {

		private String rootUrl;

		public NetworkClassLoader(String rootUrl) {
			this.rootUrl = rootUrl;
		}

		@Override
		protected Class<?> findClass(String name) throws ClassNotFoundException {
			byte[] classData = getClassData(name);
			if (classData == null) {
				throw new ClassNotFoundException();
			} else {
				return defineClass(name, classData, 0, classData.length);
			}
		}

		private byte[] getClassData(String className) {
			String path = rootUrl + "/" + className.replace('.', '/') + ".class";
			try {
				URL url = new URL(path);
			// HttpURLConnection con = (HttpURLConnection)url.openConnection();
			// System.out.println(con.getResponseCode​() +" "+ con.getContentType());
			// BufferedReader buffer = new BufferedReader(new InputStreamReader(ins));
			// StringBuffer bs = new StringBuffer();
			// String line  = null;
			// while((line=buffer.readLine())!=null){
			// 	bs.append(line);
			// }
			// System.out.println("getClassData:"+bs.length()+":"+bs.substring(0));
			// return bs.toString().getBytes();
				InputStream ins = url.openStream();
				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				int bufferSize = 4096;
				byte[] buffer = new byte[bufferSize];
				int len = 0;
				while ((len = ins.read(buffer)) != -1) {
					baos.write(buffer, 0, len);
				}
				System.out.println("getClassData:"+len+":");
				return baos.toByteArray();
			} catch (Exception e) {
				System.out.println("getClassData exception:");
				e.printStackTrace();
			}
			System.out.println("getClassData null:");
			return null;
		}

		@Override
		public Class<?> loadClass(String name, boolean resolve) throws ClassNotFoundException {
			Class c = findLoadedClass(name);
			if( name.startsWith("java.") ){
				ClassLoader system = ClassLoader.getSystemClassLoader();
				c = system.loadClass(name);
			}
			if( null==c ) c = findClass(name);
			if( null!=c && resolve ) resolveClass(c);
			return c;
		}

	}




# 🚩 Exceptiions vs. Errors

异常与错误是程序运行中的两种状态，错误是系统层面的，错误不可能是正确，通常导致程序终止，比如系统内存损坏。异常是程序运行的一种非正常现象，通常是数据逻辑问题，通常可以通过处理异常恢复程序正确运行。

从类型系统中的定义就可以体现它们的差别：

1. `OutOfMemoryError`: Java Virtual Machine (JVM) 运行出现内存不足时触发；
2. `StackOverflowError`: 程序栈内存溢出（所分配的栈内存不足）时触发；
3. `NoClassDefFoundError`: 请求的类型未能加载到内存时触发；

1. `NullPointerException`: 访问空引用对象时触发；
2. `IllegalArgumentException`: 方法参数传递错误时触发；
3. `IOException`: 操作 I/O 失败时触发；

程序逻辑错误大部分可以在编译其检查并且排除，而部分需要依赖运行时数据的问题，则不能直接在编译期处理，这部分问题称为 Runtime Exception，根据处理状态，可以分为 Uncheked  和 Checked Exception。

Java 语言中的 `Exception` 和 `Error` 都继承自 Throwable，可以配合 try 或 throws 使用。try-catch-finally 结构中，catch 用于捕捉、处理异常，它和 finally 是可选的，但必需有其一。finally 是清场处理，一定会执行，即使 catch 块中使用了 return 语句。但它本身不处理异常，并且，在 finally 中再触发异常时会导致现有的异常信息丢失！

实用中，为了包含层层传递的异常堆栈信息，并且又需要抛出自定义异常类型，那么就需要使用 `initCause(deeper_exptiion)` 方法包装更底层抛出的异常对象信息。打印 stacktrace 信息时，被包装的异常信息就以 Caused by 的形式展示。

```java
package mgid;
import java.lang.Exception;

public class App 
{
    static void trigger() throws Exception {
        try {
            throw new Exception("original exceptiion");
        } catch (Exception e) {
            Exception c = new Exception("Chaining exception");
            c.initCause(e);
            return
            // throw c;
            // System.out.println("Dead code here.");
        } finally {
            System.out.println("Finally. Always execute, event return above.");
        }
    }
    public static void main( String[] args ) throws Exception
    {
        System.out.println( "Hello World!" );
        try {
            trigger();
        } finally {}
    }
}
```

# 🚩 Java 网课大纲

模块一：JVM 进阶 - Java开发者大厂面试必知必会

	教学目标
	1. 从 0 掌握 JVM 关键技术，了解核心知识；
	2. 全面了解各类 GC 算法的原理和特性，洞悉相关原理；
	3. 全面学习常见的 JVM 分析调优工具，上手十八般武艺；
	4. 一线大厂 JVM 面试题全面剖析，助力拿到心仪 Offer。

	学习和工作中的痛点
	1. 没有经过体系化 JVM 学习，不懂原理，做不到知其然知其所以然；
	2. 不熟悉 JVM 工具和方法，遇到问题不知道从何下手、如何分析和解决问题；
	3. 缺乏实际场景的练习，每次看看书上的知识就忘，理解不深，无法做到融会贯通；
	4. 在面试过程中十回有九回都遇到问 JVM 理论和分析调优的问题，每次都很难让面试官满意。

	通过学习掌握的核心能力
	1. 夯实基础：掌握 JVM 的基础知识和常用工具，了解一般原理，知道从什么地方着手分析问题；
	2. 深入学习：掌握各类 GC 算法的一般原理，知道如何根据实际需要选择使用合适的 GC 策略；
	3. 分析问题：掌握 GC 日志、线程、内存等维度的分析技巧，知道排查问题和优化系统的套路；
	4. 积累经验：了解常见的分析调优经验，熟悉常见的面试问题和技巧，彻底学会 JVM 知识。

	详细内容
	1. JVM 基础知识、Java 字节码技术、JVM 类加载器、JVM 内存模型、JVM 启动参数详解；
	2. JDK 内置命令行工具、JDK 内置图形界面工具、JDWP 简介、JMX 与相关工具；
	3. 常见的 JVM GC 算法（Parallel GC/CMS GC/G1 GC）基本原理和特点；
	4. 新一代 GC 算法（Java11 ZGC/Java12 Shenandoah) 和 Oracle GraalVM；
	5. GC 日志解读与分析、JVM 的线程堆栈等数据分析、内存 dump 和内存分析工具；
	6. fastThread 相关工具以及面临复杂问题时的几个高级工具的使用；
	7. JVM 问题排查分析的常用手段、性能调优的最佳实践经验等；
	8. JVM 相关的常见面试问题必知必会、全面分析。

模块二：NIO 技术 - 构建高吞吐服务器的终极武器

	教学目标
	1. 理解 NIO 的相关概念和原理，了解核心知识；
	2. 全面掌握 Netty 相关的功能特性，掌握 Netty 的技术原理；
	3. 全面学会使用 Netty 技术编程，能够写出高效服务器端代码；
	4. 掌握常用的性能压测技术和相关工具，能够压测 HTTP 接口性能。

	学习和工作中的痛点
	1. 不理解 NIO 相关概念和技术点，搞不清原理，沟通和面试时无法准确表达；
	2. 缺乏实际场景的练习，对 Netty 的使用和原理不熟悉，难以应用到工作中；
	3. 不会使用 Netty 做高性能服务端编程，对性能相关指标和数据没有概念。

	通过学习掌握的核心能力
	1. 夯实基础：掌握 NIO 相关的知识和技术，能知道各种技术有什么优缺点，适用于什么场景；
	2. 深入学习：熟练掌握 Netty/NIO 编程，能够设计实现一个高性能 HTTP 服务器/ API 网关；
	3. 积累经验：了解常见的性能相关概念和压测入门，对性能指标有清晰概念，能够简单地量化分析。

	详细内容
	1. 同步/异步、阻塞/非阻塞、BIO、NIO、AIO、Reactor/Proactor；
	2. ByteBuff/Acceptor/Channel/Handler、NioEventLoopGroup/EventLoop、bossGroup/workerGroup；
	3. Netty 的启动和执行过程、线程模型、事件驱动、服务端和客户端的使用方式；
	4. 常见的 API Gateway/HTTP Server、SEDA 原理、业务 API 网关的功能和结构；
	5. Throughout/TPS/QPS、Latency/P99/P95/P90、ApacheBench/Wrk/JMeter/LoadRunner。

模块三：并发编程 - 多核处理器时代高性能的秘诀

	教学目标
	1. 学会多线程、高并发相关概念和技术，了解并发编程的核心知识；
	2. 全面了解并发的相关技术的原理和用途，洞悉技术原理和相互关系；
	3. 熟练掌握 Java 的多线程、并发包中各个类的使用，上手十八般武艺。

	学习和工作中的痛点
	1. 没有经过系统性学习并发编程，搞不清楚技术原理，写不出一个良好的多线程/异步代码；
	2. 不熟悉 Java 的各个多线程工具和方法，遇到多线程问题常常束手无措，不会分析解决问题；
	3. 缺乏实际场景的练习，平时没怎么用到多线程和并发，导致死记硬背的概念总是记不住。

	通过学习掌握的核心能力
	1. 夯实基础：系统掌握 Java 多线程和并发编程的技术原理和知识点，写出优秀的并发代码；
	2. 深入学习：熟练应用各种并发工具，了解在什么情况下使用哪些具体的技术和方法；
	3. 分析问题：掌握常见的多线程和并发问题分析技巧，知道排查一般问题的具体步骤；
	4. 积累经验：构建完整全面的并发编程知识体系，熟悉常见的面试问题和技巧，彻底掌握 Java 并发编程知识。

	详细内容
	1. Java 多线程基础：线程、锁、synchronized、volatile/final、sleep/await/notify/fork/join；
	2. Java 并发包基础：线程池 Executor、AQS/CAS、Atomic 原子操作、Lock/ReadWriteLock/Condition、Callable/Future；
	3. Java 并发容器与工具：BlockingQueue/CopyOnWriteList/ConcurrentHashMap、CountDownLatch/CyclicBarrier/Semaphore 等；
	4. 其他：万金油 ThreadLocal，化繁为简 Java8 parallelStream 等。

模块四：开发框架 - 深入理解 Spring 等主流框架思想

	教学目标
	1. 重新认识主流开源技术框架，深入理解背后的原理和关系；
	2. 掌握整合各种框架的最佳实践，学会在工作中做技术框架选型；
	3. 了解主流框架的发展趋势，一线大厂的使用模式和关注点。

	学习和工作中的痛点
	1. 对主流开源技术框架，始终在会用、会做简单整合，不懂背后原理；
	2. 只会用自己熟悉的框架，不会做技术选型，也不了解一些最佳实践经验；
	3. 框架发展太快，学习跟不上了，也不太了解一线大厂使用主流框架的方式。

	通过学习掌握的核心能力
	1. 夯实基础：从更高的维度和更深入的原理，重新学习主流框架，了解框架的内在联系；
	2. 深入学习：掌握常见框架的一些最佳实践经验，能够根据具体的项目情况进行技术框架选型；
	3. 积累经验：了解常见主流框架的发展趋势，掌握最佳学习姿势，能够轻松驾驭技术发展。

	详细内容
	1. Spring 技术体系（Spring Core/Web/MVC/Data/Messaging、Spring Boot 等）；
	2. ORM 技术体系（JPA、Hibernate、MyBatis 等）。


模块五：系统性能优化 - 学会性能分析与 MySQL 优化

	教学目标
	1. 深入了解业务系统性能的度量分析方法，找到性能瓶颈和关键路径；
	2. 了解 MySQL 的性能关键点，学会如何进行 MySQL 和 SQL 语句的性能分析；
	3. 掌握如何编写高效的 SQL 语句，能对复杂的业务 SQL 进行性能优化。

	学习和工作中的痛点
	1. 性能调优能力是架构师/技术专家的核心能力之一，但是对这一块没经验；
	2. 遇到性能问题不知道从何下手、如何分析性能瓶颈在哪儿，也就不知道如何解决问题；
	3. 缺乏实际场景的练习，每次看别人讲的理论，都没办法转化到实际工作中去；
	4. 在面试过程中经常被问到分析调优的问题，总是觉得自己没有太多干货可讲。

	通过学习掌握的核心能力
	1. 深入学习：通过系统化的学习性能相关知识和实践经验，掌握复杂业务系统性能分析方法；
	2. 分析问题：掌握 SQL/索引/事务 的分析技巧，知道排查问题和优化 MySQL/SQL 的办法；
	3. 积累经验：掌握编写高性能 SQL 的技能，避免常见的各种低性能坑，提升数据库编程水平。

	详细内容
	1. 系统可观测性（日志、调用链跟踪、指标度量），80/20 优化原则，CPU、内存、磁盘/网络 IO 等分析；
	2. MySQL 的锁、事务、索引、并发级别、死锁、执行计划、慢 SQL 统计、缓存失效、参数优化；
	3. 库表设计优化，引擎选择，表结构优化设计，列类型选择，索引设计，外键等；
	4. SQL 查询优化，索引选择，连接优化，聚合查询优化，Union 优化，子查询优化，条件优化等；
	5. 场景分析，主键生成与优化，高效分页，快速导入导出数据，解决死锁问题等。


模块六：超越分库分表 - 掌握海量业务数据的应对之道

	教学目标
	1. 从 0 掌握海量业务数据处理的关键技术，了解核心知识，参与实践案例；
	2. 全面学习 MySQL 主从复制架构，读写分离和数据库垂直/水平拆分；
	3. 学习应对系统不同类型数据的处理办法，对数据进行冷热分离，提升系统数据处理能力；
	4. 全面掌握各类场景下的读写分离，数据库拆分的框架和中间件，在实际工作中熟练使用。

	学习和工作中的痛点
	1. 只会增删改查，不了解对海量业务数据的处理办法；
	2. 每次被人问到 MySQL 的高可用和高性能架构，都不能清晰地讲明白；
	3. 缺乏实际场景的练习，不了解不同类型的数据对应的处理办法；
	4. 对于常见的读写分离、分库分表等技术，停留在理论阶段，没有动手实践过。

	通过学习掌握的核心能力
	1. 夯实基础：全面了解 MySQL 主从复制架构，读写分离和数据库垂直/水平拆分的应用场景和技术原理；
	2. 深入学习：进一步学会 MySQL 的高可用和高性能架构；
	3. 分析问题：掌握应对系统不同类型数据的处理办法，对数据进行冷热分离，提升系统数据处理能力；
	4. 积累经验：全面掌握各类场景下的读写分离，分库分表的框架和中间件，在实际工作中熟练使用。

	详细内容
	1. MySQL 主从复制，Binlog，Row/Statement 模式，主从切换，读写分离，数据库扩容；
	2. 数据库垂直拆分与水平拆分，分库分表，分布式主键，分表算法，SQL 限制，数据迁移，实时同步；
	3. Spring 动态切换数据库，TDDL/Sharding-JDBC 框架，MyCat/Sharding-Proxy 中间件；
	4. 数据库拆分的最佳实践，分布式事务最佳实践，多租户的最佳实践。


模块七：分布式服务 - 复杂业务系统架构演进必由之路

	教学目标
	1. 全面掌握 RPC 原理和常见的 RPC 技术；
	2. 深刻理解服务治理相关的技术和应用场景；
	3. 深入学习 Dubbo 和 Spring Cloud 的功能和技术原理；
	4. 深入了解微服务架构的特点和最佳实践。

	学习和工作中的痛点
	1. 会用简单的 RPC 和 REST，但是对其原理和细节不够了解；
	2. 一直没有实际接触过服务治理相关的技术，只知道几个名词，不清楚具体的功能和用法；
	3. 对 Dubbo 和 Spring Cloud 一知半解，简单作为 RPC 调用都会，再复杂的就不太清楚了；
	4. 微服务相关的知识都有些了解，但是不是很懂到底什么时候该做微服务，怎么做微服务。

	通过学习掌握的核心能力
	1. 夯实基础：系统的了解和学习 RPC 知识，知道每种 RPC 有什么特点，什么时候用什么 RPC 技术；
	2. 深入学习：全面的学习一遍服务治理的技术，能够认识到什么情况下使用哪种具体的特性；
	3. 分析问题：深刻理解 Dubbo 和 Spring Cloud 技术体系原理，遇到问题能够迅速定位和解决；
	4. 积累经验：深入了解微服务架构的特点和最佳实践经验，学会何时做微服务，如何做微服务。

	详细内容
	1. 基础知识：RPC、通信与数据协议、WebService、Hessian、REST、gRPC、Protocol Buffers 等；
	2. 服务化：服务治理、配置管理、注册发现、服务分组、版本管理、集群管理、负载均衡、限流与降级熔断等；
	3. 框架：Apache Dubbo 的功能与原理分析，Spring Cloud 体系，具体的案例实践；
	4. 微服务：微服务架构的 6 个最佳实践，从微服务到服务网格、云原生的介绍。


模块八：分布式缓存 - 复杂业务系统访问提速第一法宝

	教学目标
	1. 深入理解缓存的应用场景和缓存策略；
	2. 全面掌握几种常见缓存问题的处理方式；
	3. 彻底掌握 Redis 缓存中间件，了解 Hazelcast 内存网格；
	4. 学会使用缓存技术实现排行数据展示，分布式 ID 生成等典型应用场景。

	学习和工作中的痛点
	1. 对缓存的认知停留在 JVM 内的静态 Map 和往 Redis 存 KV 数据，不了解什么时候该用缓存；
	2. 不熟悉常见的缓存问题处理方案，遇到问题难以解决，例如缓存失效和雪崩问题如何解决；
	3. 只了解简单的 Redis 操作，高级功能（例如集群或 Lua）没用过，其他缓存技术也没接触过；
	4. 没有在实际的应用场景里用 Redis 之类的缓存技术，不知道具体有哪些典型的应用场景。

	通过学习掌握的核心能力
	1. 夯实基础：掌握缓存的应用场景和常见的策略，特别是与数据库的同步；
	2. 深入学习：掌握常见的缓存问题的处理策略，将缓存技术应用到实际工作；
	3. 分析问题：全面掌握 Redis 缓存技术，能够分析和解决缓存问题；
	4. 积累经验：深入实践和掌握几个典型的应用场景，了解 Hazelcast 内存网格技术。

	详细内容
	1. 缓存的应用场景，缓存加载策略与失效策略，缓存与数据库同步等；
	2. 缓存预热、缓存失效、缓存击穿、缓存雪崩、多级缓存、缓存与 Spring+ORM 框架集成；
	3. 缓存中间件，Redis（几种常用数据结构、分布式锁、Lua 支持、集群），Hazelcast（Java 数据结构、内存网格、事务支持、集群）；
	4. 缓存的应用场景，排行数据展示，分布式 ID 生成，Session 共享，热点账户操作等。


模块九：分布式消息 - 复杂业务系统关系解耦不二法门

	教学目标
	1. 从 0 掌握消息队列（MQ）的关键技术，了解核心知识；
	2. 全面了解各类 MQ 技术的原理和特性，洞悉相关原理；
	3. 全面吃透 Kafka 的基本功能，集群搭建，高可用等，上手十八般武艺；
	4. 深入理解 MQ 的特点和应用场景，通过交易场景实战演练，并动手做一个简单的 MQ。

	学习和工作中的痛点
	1. 很少使用 MQ，就算用过也只是简单的收发消息，对 MQ 的原理和细节不了解；
	2. 不熟悉常见的几个主流 MQ，其中的多数技术都没有接触过，或者只听过名词；
	3. 缺乏实际场景的练习，每次看看书上的知识就忘，理解不深，无法做到融会贯通；
	4. 不太了解什么时候该用 MQ，MQ 能帮我们解决哪些方面的问题，带来什么样的好处。

	通过学习掌握的核心能力
	1. 夯实基础：掌握 MQ 的基础知识和常用工具，了解一般原理，知道用 MQ 的一些基本概念；
	2. 深入学习：掌握各类 MQ 技术的一般原理和功能，知道如何根据实际需要选择使用合适的 MQ；
	3. 分析问题：掌握 Kafka 等主流 MQ 技术，能对一般的 MQ 问题进行分析和解决；
	4. 积累经验：了解 MQ 如何应用到一个具体的业务场景和 MQ 内部细节，彻底学会 JVM 知识。

	详细内容
	1. 消息队列的基本知识，Broker 与 Client，消息模式（点对点、发布订阅），消息协议（STOMP、JMS、AMQP、OpenMessaging 等），消息 QoS（最多一次、最少一次、有且仅有一次），消息重试，延迟投递，事务性，消息幂等与去重；
	2. 消息中间件：ActiveMQ 的简单入门，Kafka 的基本功能与使用，高可用（集群、分区、副本）、性能，RabbitMQ 和 RocketMQ，Pulsar 的简单介绍；
	3. 消息的 4 个主要功能，搭建一个 Kafka 集群，实现常用的消息发送、消息消费功能；
	4. 典型使用场景，使用 MQ 实现交易订单的处理，动手实现一个简化版的消息队列。


模块十：分布式系统架构 - 如何设计高并发高可用的 Java 系统

	教学目标
	1. 了解大规模分布式的复杂业务系统架构技术发展脉络；
	2. 全面掌握业务系统发展不同阶段应该如何做技术选型；
	3. 以一个电商系统为例，深入学习如何分析系统架构；
	4. 掌握高并发高可用的分布式 Java 系统的设计方法。

	学习和工作中的痛点
	1. 没有机会去从头设计一个高并发的大规模分布式系统，缺乏对此类问题深入的学习和思考；
	2. 对业务系统架构发展不了解，技术思路一直停留在一个静态观念，一般只会选择自己熟悉的技术；
	3. 缺乏实际场景的练习，每次看看书上的知识就忘，面对复杂业务系统架构设计，总觉得无从下手；
	4. 平时从网上或书上看到各种零散的知识和经验，无法转化成自己的知识和能力，总是掌握不了。

	通过学习掌握的核心能力
	1. 夯实基础：了解大规模分布式的复杂业务系统架构技术发展脉络，从技术发展里借鉴经验；
	2. 深入学习：掌握业务系统发展不同阶段应该如何做技术选型，为系统选择合适的架构方案；
	3. 分析问题：深入理解如何基于系统的功能性和非功能性需求，进行详细的系统架构分析；
	4. 积累经验：掌握高并发高可用的分布式 Java 系统的设计方法，能够独立设计复杂业务系统。

	详细内容
	1. 业务分析、功能性需求、非功能性需求、高可用、高性能、稳定性、易用性、扩展性、可维护性、安全性等；
	2. “4+1” Views、TOGAF、架构方案、业务架构、数据架构、设计文档、技术选型、部署文档、运维文档等；
	3. 分布式服务化、分布式消息中间件、分布式缓存、分布式文件系统、监控告警系统、权限与认证中心等。


模块十一：业务系统重构 - 重构遗留系统是架构师的必修技能

	教学目标
	1. 通过一个具体复杂电商业务系统的重构，掌握遗留系统重构的方法和经验；
	2. 了解一线大厂系统演进的具体案例，掌握如何解决老系统的各种疑难杂症；
	3. 学会如何解决困难的问题，协调资源，推动团队，完成看似不可能的目标。

	学习和工作中的痛点
	1. 实际工作中，我们并不是总能有机会从头去做一个大系统，维护和改造老系统，反而是更常见的任务；
	2. 遗留的老系统质量很差，经常出故障，没文档，代码复杂且没人清楚细节，不知如何下手改造；
	3. 改造过程中，遇到很多具体的复杂技术难题，心里没底，各项估计也不准确；
	4. 涉及到的各方人员都不是很理解，也不怎么配合，阻力很大，工作难以推动。

	通过学习掌握的核心能力
	1. 深入学习：通过一个具体复杂电商业务系统的重构，学习遗留系统重构的方法和经验；
	2. 分析问题：了解如何评估遗留老系统，做出充分、详细、客观的分析报告；
	3. 积累经验：掌握业务系统重构改造中的一些通用性技术问题，以及推动工作的办法。

	详细内容
	1. 分析系统现状，给出明确的各项指标，了解各方对指标的期望和差距；
	2. 给出多个可选的改造或重做方案，明确各方案的优缺点，提供决策依据；
	3. 方案上的适当妥协，各方达成一致，快速推动重构工作启动和展开；
	4. 细化具体的方案细节，形成路径，争取足够的资源，恰当的时间窗口；
	5. 小步快跑，迅速取得阶段性成果，不影响业务整体的规划和发展；
	6. 保持业务连续性，多做监控、兼容和特性开关，给改造加上保险丝和缓冲区；
	7. 及时评估改进进展，更新方案和路线、资源和时间，推动改造顺利进行；
	8. 复盘总结相关经验，提出更多建议和改进办法，实现经验分享，方法复用。


模块十二：架构师修炼之道 - 如何升级打怪终成一线技术专家

	教学目标
	1. 了解架构师应该具备的硬技能和软实力；
	2. 全面了解架构师典型的成长路径；
	3. 掌握一些实用的学习方法，借鉴一些成长经验；
	4. 学习如何准备相关的面试和求职。

	学习和工作中的痛点
	1. 总搞不清楚怎么样才能算是一名合格的架构师，总觉得是架构师很玄乎；
	2. 技术能力提升和软实力都遇到瓶颈，没人指导，找不到成长的突破口；
	3. 不知道什么好的学习方法和经验，总是走弯路，浪费了很多时间精力；
	4. 总是觉得自己面试准备得不好，发挥得不好，不能够给面试官足够好的评价。

	通过学习掌握的核心能力
	1. 夯实基础：学习架构师应该具备的硬技能和软实力，摸清自己哪些方面可以进一步提升；
	2. 深入学习：找到自己成长到下一个层次的突破口，制定相关的规划路径，实现成长；
	3. 借鉴方法：掌握一些实用的好方法和经验，能够让我们少走弯路，事半功倍；
	4. 积累经验：如何提前准备面试，怎样打磨简历突出亮点，如何在面试过程中脱颖而出。

	详细内容
	1. 分享我个人的成长第一手经验，升级打怪，成为架构师、技术专家、技术总监；
	2. 六个硬能力：技术能力、设计能力、抽象能力、管理能力、结构化思考能力、系统化分析能力；
	3. 七个软实力：大局观能力、沟通协作能力、持续学习能力、关注力、探索力、决策力、自我驱动力。




# 🚩 常量池 变量堆

变量比较：

- a b 是常量成员的变量，字符串 xyz 是字面常量，编译时会引用到同一块内存地址，直接用 == 比较地址相等。
- a c 虽然内容相同但是地址不同，== 比较地址是否相等。
- equals 方法比较首先会曾判断地址是否相同，再判断类型是否相同，最后判断内容是否相同，其一成立则为真。

String 类型比较不同对象内容是否相同，用 equals，因为 == 用于比较引用类型和比较基本数据类型时具有不同的功能。

数据类型换 Integer 也成立，这里对象类型基类即 Object 的基本特性，基本数据类型除外，如 char, int, long

	// package com.jeango.it.const_variables;

	public class coding {

		static public void main(String args[]){
			String a = "xyz";
			String b = "xyz";
			String c = new String("xyz");

			coding.log("       a==b? "+(a==b));
			coding.log("       a==c? "+(a==c));
			coding.log("a.equals(b)? "+a.equals(b));
		}
		static public void log(String t){
			System.out.print(t+"\n");
		}
		
	}

# 🚩 参数传递 传值和引用

重申一遍：Java 中只有传值。与C++不同的，Java里面没有指针的概念，Java的设计者巧妙的对指针的操作进行了管理，这就是开发Java语言的目的。事实上，在懂C++的Java程序员眼中，Java到处都是精美绝伦的指针。

	public class coding {

		static public void main(String args[]){
			String a = "xyz";
			String b = coding.prefix(a);
			coding.log("a = "+a);  // a = xyz
			coding.log("b = "+b);  // b = **xyz
			String[] c = {"abc","xyz"};
			String[] d = coding.prefixs(c);
			for (String s:c ) log("Item in c " + s); // Item in c abc ...
			for (String s:d ) log("Item in d " + s); // Item in d abc ...
		}
		static public String prefix(String t){
			t = "**"+t;
			return t;
		}
		static public String[] prefixs(String[] ss){
			for( String s:ss) s = "**"+s;
			return ss;
		}
		static public void log(String t){
			System.out.print(t+"\n");
		}
		
	}


# 🚩 Thread 多线程

	new Thread(Runnable target).start()
	
start() 方法来启动线程，真正实现了多线程运行，这时无需等待run方法体代码执行完毕而直接继续执行下面的代码。

run() 方法只是类的一个普通方法而已，直接调用依然只有主线程这一个线程，还是要等待run方法体执行完毕后才可继续执行下面的代码。

	public class coding {

		static public void main(String args[]){
			Thread t = new Thread(){
				public void run(){
					work();
				}
				public void start(){
					work();
				}
			};
			for (int i=0; i<10000; i++) {
				// t.run();
				t.start();
				log("done");
			}
		}
		static public void work(){
			log("I'm working...");
		}
		static public void log(String t){
			System.out.print(t+" ");
		}

	}



# 🚩 factorial and int and BigDecimal

	public class coding {

		static public void main(String args[]){
			int[] ia = {1,2,3,4,5,6,7,8,9,10,20,30,31,32,33,34,35,100}; // BigDecimal needed!
			for (int i:ia ) {
				log( i + "!=" + factorial(i));
			}
		}
		static public int factorial(int i){
			if( i<=1 ) return 1;
			return i * factorial(i-1);
		}
		static public void log(String t){
			System.out.print(t+"\n");
		}

	}

# 🚩 RegExp 正则表达式

java.util.regex.Matcher 和 java.util.regex.Pattern：

	Pattern p = Pattern.compile("cat");
	Matcher m = p.matcher("one cat two cats in the yard");
	StringBuffer sb = new StringBuffer();
	while (m.find()) {
	   m.appendReplacement(sb, "dog");
	}
	m.appendTail(sb);
	System.out.println(sb.toString());

Pattern 字符的匹配：

	x 字符 x 
	\\ 反斜线字符 
	\0n 八进制值的字符0n (0 <= n <= 7) 
	\0nn 八进制值的字符 0nn (0 <= n <= 7) 
	\0mnn 八进制值的字符0mnn 0mnn (0 <= m <= 3, 0 <= n <= 7) 
	\xhh 十六进制值的字符0xhh 
	\uhhhh 十六进制值的字符0xhhhh 
	\t 制表符('\u0009') 
	\n 换行符 ('\u000A') 
	\r 回车符 ('\u000D') 
	\f 换页符 ('\u000C') 
	\a 响铃符 ('\u0007') 
	\e 转义符 ('\u001B') 
	\cx T对应于x的控制字符 x 
	  
	字符类 
	[abc] a, b, or c (简单类) 
	[^abc] 除了a、b或c之外的任意 字符（求反） 
	[a-zA-Z] a到z或A到Z ，包含（范围) 
	[a-z-[bc]] a到z，除了b和c ： [ad-z]（减去） 
	[a-z-[m-p]] a到z，除了m到 p： [a-lq-z] 
	[a-z-[^def]] d, e, 或 f 
	备注：
	方括号的正则表达式“t[aeio]n”只匹配“tan”、“Ten”、“tin”和“ton”，只能匹配单个字符。
	圆括号，因为方括号只允许匹配单个字符；故匹配多个字符时使用圆括号“()”。比如使用“t(a|e|i|o|oo)n”正则表达式，就必须用圆括号。

	预定义的字符类 
	. 任意字符（也许能与行终止符匹配，也许不能） 备注：句点符号代表任意一个字符。比如：表达式就是“t.n”，它匹配“tan”、“ten”、“tin”和“ton”，还匹配“t#n”、“tpn”甚至“t n”。
	\d 数字: [0-9] 
	\D 非数字: [^0-9] 
	\s 空格符: [ \t\n\x0B\f\r] 
	\S 非空格符: [^\s] 
	\w 单词字符: [a-zA-Z_0-9] 
	\W 非单词字符: [^\w]

	表达次数的符号
	符号 次数
	* 0次或者多次
	+ 1次或者多次
	? 0次或者1次
	{n} 恰好n次
	{n,m} 从n次到m次

# 🚩 构造过程

构造过程父类优先于子类，父类构造器执行完后才进入子类的构造，coding.key 的初始在父类构造完成后进行，在父类中使用coding.key就是未初始化的值。

	public class coding extends base {

		String key = "xyz";
		static public void main(String args[]){
			coding c = new coding();
		}
		public void go(){
			log("key = "+key);
		}
		static public void log(String t){
			System.out.print(t+"\n");
		}

	}

	class base {
		private String key = "abc";
		public base(){ // never add void to constructors 
			go();
		}

		public void go(){
			coding.log(key);
		}
	}


# 🚩 动态代码块 静态代码块 构造器执行顺序


	public class coding {

		public static coding a = new coding();
		public static coding z = new coding();
		{
			log("Dynamic Code Block ");
		}
		static {
			log("Static Code Block ");
		}
		public coding(){ log("Constructor"); }
		static public void main(String args[]){
			// new coding();
		}
		static public void log(String t){
			System.out.println(t);
		}

	}

执行输出，静态成员按定义前后顺序进行初始化，首先是 a 初始化一个coding，这里输出第一行内容，然后是 z 初始化输出第二行内容。

	Dynamic Code Block 
	Constructor
	Dynamic Code Block 
	Constructor
	Static Code Block 


# 🚩 Integer.MAX_VALUE

	static public void main(String args[]){
		int i = Integer.MAX_VALUE;
		long l = Integer.MAX_VALUE;
		l++;
		log(l+""); // 2147483648
		l = i+1;
		log(l+""); // -2147483648
	}
	static public void log(String t){
		System.out.println(t);
	}



# 🚩 RSA 非对称加密解密工具类
https://docs.oracle.com/javase/7/docs/api/java/security/KeyPairGenerator.html


# 🚩 MD5 SHA256 信息摘要算法工具类
https://docs.oracle.com/javase/7/docs/api/java/security/MessageDigest.html

	import java.security.MessageDigest;
	
	public class coding {

		static public void main(String args[]) throws Exception {
			coding.log(bytesToHex(MD5("abc")));
		}
		// return 128bit/16Bytes fingerpoint data or fall
		public static byte[] MD5(String msg) throws Exception {
		    try {
		        MessageDigest md = MessageDigest.getInstance("MD5");
				// MessageDigest md = MessageDigest.getInstance("SHA-1");
				// MessageDigest md = MessageDigest.getInstance("SHA-256");
			    byte[] byteArray = msg.getBytes("UTF-8");
			    byte[] fingerprint = md.digest(byteArray);
			    return fingerprint;
		    } catch (Exception e) {
		        log(e.toString());
		        e.printStackTrace();
		        return new byte[0];
		    }
		}

		public static String bytesToHex(byte[] bytes){
		    StringBuffer hexValue = new StringBuffer();
		    for (int i = 0; i < bytes.length; i++) {
		        int val = ((int) bytes[i]) & 0xff;
		        if (val < 16) {
		            hexValue.append("0");
		        }
		        hexValue.append(Integer.toHexString(val));
		    }
		    return hexValue.toString();
		}

		static public void log(String t){
			System.out.print(t+"\n");
		}
		
	}



# 🚩 Base64 

Base64 是比较常用的一种能将二进位数据以可视字符串表达出的编码方式，使用了64个可见字符来编码，每个字节只利用了 6bits 信息，即 2^6=64 种状态对应 64 个可见字符。二进制转到字符称为编码，由字符转换到二进制称为解码。转换时，3 个二进位字节分拆成四组6bits的数据，按取值索引找到码表对应的字符即可，当数据最后一组不足 3 字节，就使用 padding 填充，确保转换后的 Base64 编码数量是4字节的整数倍。Base64不只一种编码方案，基础的方案中使用了除号，编码后的内容不能用于文件名。在URL中，+/=三个符号要对应转换成 %2B %2F %3D，这会占用有长度要求URL。所以，后来推出有兼容URL与文件名的编码方案 Base64url，这个方案中使用了 - 和 _ 替换了基础方案中使用的 + 号和 / 号，对于 = 这个符号的处理，有些实现会省略，有些则以圆点替换。

除Base64外，还有Base16即Hex十六进编码也是使用较多的一种，这种编码刚好用两个字节编码一个二位字节数据。

Base64编码 - https://en.wikipedia.org/wiki/Base64
base64url in RFC 4648 - https://tools.ietf.org/html/rfc4648
Base32 - RFC 4648 alphabet - https://en.wikipedia.org/wiki/Base32
MIME编码 - https://en.wikipedia.org/wiki/MIME
Base16 Hexadecimal - https://en.wikipedia.org/wiki/Hexadecimal
(code point +:43 /:47 0:48 =:61 A:65 a:97)

Java 的Base64工具类提供了一套静态方法获取下面三种BASE64编解码器：

	static Base64.Decoder getDecoder() 解码使用基本型 base64 编码方案。
	static Base64.Encoder getEncoder() 编码使用基本型 base64 编码方案。
	static Base64.Decoder getMimeDecoder() 解码使用 MIME 型 base64 编码方案。	
	static Base64.Encoder getMimeEncoder() 编码使用 MIME 型 base64 编码方案。
	static Base64.Encoder getMimeEncoder(int lineLength, byte[] lineSeparator) 可以指定每行的长度及行的分隔符。
	static Base64.Decoder getUrlDecoder() 解码使用 URL 和文件名安全型 base64 编码方案。
	static Base64.Encoder getUrlEncoder() 编码使用 URL 和文件名安全型 base64 编码方案。

基本：输出被映射到一组字符A-Za-z0-9+/，编码不添加任何行标，输出的解码仅支持A-Za-z0-9+/。
URL：输出映射到一组字符A-Za-z0-9+_
MIME: 输出隐射到MIME友好格式。输出每行不超过76字符，并且使用 \r\n 作为分割。编码输出最后没有行分割。


## ⚡ Base64的Java语言实现
http://www.herongyang.com/Encoding/Base64-Sun-Java-Implementation.html
http://www.runoob.com/java/java8-base64.html
Base64编码与Java版本实现 - https://www.jianshu.com/p/79ecc613ed21

第三方实现Base64的API有 Apache Commons Codec library 的org.apache.commons.codec.binary.Base64，还有 Google Guava 库里的 com.google.common.io.BaseEncoding.base64() 这个静态方法。最后一个，号称Base64编码速度最快的 MigBase64 而且是10年前的实现。

这里贴的是坚果的实现，好久不写Java，找个练习题做做以免荒废了：

	import java.util.Base64;
	import java.nio.charset.Charset;

	public class coding {

		static public void main(String args[]) throws Exception {
			String a = new String("Base64的Java语言实现");
			// for( int i=0; i<a.length(); i++){
			// 	int c = a.charAt(i);
			// 	log( "Char Code "+c+ " 0x"+Integer.toHexString(c) + " 0b"+Integer.toBinaryString(c) ); 
			// }
			// byte[] as = a.getBytes();
			// for( int i=0; i<as.length; i++){
			// 	int c = as[i] & 0xFF;
			// 	log( "Byte Code "+c+ " 0x"+Integer.toHexString(c) + " 0b"+Integer.toBinaryString(c) ); 
			// }
			String cp = Charset.defaultCharset().name();
			log("Default CodePage "+cp);

			String b = Base64.getEncoder().encodeToString(a.getBytes());
			String c = new String( Base64.getDecoder().decode(b) );
			String d = Basee64encode(a.getBytes());
			String e = new String(Basee64decode(d));

			log("encode => "+a+" => "+b+" == "+d+"? "+(b.equals(d)?"PASS":"FAIL"));
			log("decode => "+c+" == "+e+"? "+(c.equals(e)?"PASS":"FAIL"));
		}

		static public String Basee64encode(byte[] bin){
			int i = bin.length%3;
			int g = bin.length - i;
			StringBuffer s = new StringBuffer();
			String fix = new String();
			if( i==1 ){
				int b = (0x3f & (bin[g]<<4));
				fix += map64(0x3F & bin[g]>>2)+""+map64(b)+"==";
			}else if( i==2 ){
				int b = (0x03 & bin[g])<<4 | (0xf0 & bin[g+1])>>4;
				int c = (0x0f & bin[g+1])<<2; // !!! 最后四bits移到最高位
				fix += map64(0x3f & bin[g]>>2) +""+ map64(b) +""+ map64(c)+'=';
			}
			for (i=0; i<g; i+=3 ) { 
				int a = (0xff & bin[i]  )>>2; // bigger first
				int b = (0x03 & bin[i]  )<<4 | (0xF0 & bin[i+1])>>4;
				int c = (0x0f & bin[i+1])<<2 | (0xC0 & bin[i+2])>>6;
				int d = (0x3f & bin[i+2]);
				s.append(map64(a));
				s.append(map64(b));
				s.append(map64(c));
				s.append(map64(d));
				// log( ((short)(bin[i]) & 0xFF)+" "+(bin[i+1] & 0xFF)+" "+ (bin[+2] & 0xff)+" => "+(a)+" "+(b)+" "+(c)+" "+(d));
			}
			return s.toString()+fix;
		}

		static public byte[] Basee64decode(String msg){
			byte[] bytes = msg.getBytes();
			byte[] res = new byte[bytes.length*3/4];
			for(int i=0; i<bytes.length; i+=4){
				byte a = unmap64(bytes[i]);
				byte b = unmap64(bytes[i+1]);
				byte c = unmap64(bytes[i+2]);
				byte d = unmap64(bytes[i+3]);
				res[i*3/4+0] = (byte)(a<<2 | b>>4);
				res[i*3/4+1] = (byte)(b<<4 | c>>2);
				res[i*3/4+2] = (byte)(c<<6 | d);
				// log("+ "+(short)(res[i*3/4+0] & 0xFF) +" "+ (short)(0xFF&res[i*3/4+1]) +" "+ (short)(0xFF&res[i*3/4+2]) );
			}
			int l = bytes.length;
			int pad = bytes[l-2]=='='? 2:bytes[l-1]=='='? 1:0;
			if( pad>0 ){
				byte[] ret = new byte[res.length-pad];
				System.arraycopy(res, 0, ret, 0, res.length-pad);
				return ret;
			}
			return res;
		}
		static public char map64(int i){
			// +:43 /:47 0:48 =:61 A:65 a:97
			if( i>63 ) return '=';
			byte code = (byte)(i==62?'+':i==63?'/':i<26?'A'+i:i<52?'a'+i-26:'0'+i-52);
			return (char)code;
		}
		static public byte unmap64(byte i){
			// +:43 /:47 0:48 =:61 A:65 a:97
			if( i=='=' ) return 0;
			byte index = (byte)(i=='+'?62:i=='/'?63:i<'A'?i-'0'+52:i<'a'?i-'A':i-'a'+26);
			return (byte)index;
		}

		static public void log(String t){
			System.out.print(t+"\n");
		}
		
	}

## ⚡ 字符串转字节处理

String.getBytes()方法可以将字串的字节数组导出，但特别要注意的是，本方法将返回该操作系统默认的编码格式的字节数组。在不同平台上，系统默认的代码页可能不一致，英文系统一般使用 iso-8859-1，中文系统有 GBK，不考虑到这一点软件就会有问题。例如如下示例代码，通过指定 UTF-16/UTF-8 来获取到字串的字节数据。注意 UTF-16 输出多了两个字节 0xFE 0xFF，这是BOM信息，字节顺序标记 Byte Order Mark，它有两个字节，值大的在后表示 BigEnding 大尾编码方式，通过 UTF-16BE/UTF-16LE 指定大端小端来去除这两额外的BOM字节。关于大尾小尾，前者表高有效位先编码，后者表示低有效位先编码，即对一个两字节的汉字来说，大尾表示高位的那个字节先编码输出。

	String a = new String("的J");

	byte[] as = a.getBytes("UTF-16");
	for( int i=0; i<as.length; i++){
		int c = as[i] & 0xFF;
		log( "Byte Code "+c+ " 0x"+Integer.toHexString(c) + " 0b"+Integer.toBinaryString(c) ); 
	}

	// UTF-16 的 字使用4个字节编码，英文字母2个字节
	Byte Code 254 0xfe 0b11111110
	Byte Code 255 0xff 0b11111111
	Byte Code 118 0x76 0b1110110
	Byte Code 132 0x84 0b10000100
	Byte Code 0 0x0 0b0
	Byte Code 74 0x4a 0b1001010

	// UTF-8 的 字使用3个字节编码，英文字母1个字节
	Byte Code 231 0xe7 0b11100111
	Byte Code 154 0x9a 0b10011010
	Byte Code 132 0x84 0b10000100
	Byte Code 74 0x4a 0b1001010

不同编码的字节顺序标记的表示编辑

	编码          表示 (十六进制)  表示 (十进制)
	UTF-8         EF BB BF       239 187 191
	UTF-16 大端序  FE FF          254 255
	UTF-16 小端序  FF FE          255 254
	UTF-32 大端序  00 00 FE FF    0 0 254 255
	UTF-32 小端序  FF FE 00 00    255 254 0 0


## ⚡ 复习Java运算符优先级

	优先级     描述          运算符
	1         括号          ()  []
	2         正负号         +  -
	3         自增自减非     ++    --  !
	4         乘除取余       *   /   %
	5         加减          +   -
	6         移位运算       <   >>   >>>
	7         大小关系       >   >=   <  <=
	8         相等关系       =   !=
	9         按位与         &
	10        按位异或       ^
	11        按位或         |
	12        逻辑与         &&
	13        逻辑或         ||
	14        条件运算       ?:
	15        赋值运算        =  +=  -=  *=  /=  %=
	16        位赋值运算      =  |=  <<=  >>=  >>>=


## ⚡ 复习Java基础数据类型

	Primitive type  Size      Minimum    Maximum   　　　　Wrapper type
	boolean         —         —          —       　　　　　Boolean
	char            16 bits   Unicode 0  Unicode 2^16-1   Character
	byte             8 bits  -128       +127              Byte
	short           16 bits  -2^15      +2^15-1           Short
	int             32 bits  -2^31      +2^31-1           Integer
	long            64 bits  -2^63      +2^63-1           Long
	float           32 bits   IEEE754    IEEE754          Float
	double          64 bits   IEEE754    IEEE754          Double
	void            —         —          —                Void

范围大的向范围小的数据类型转换时，需要考虑符号位的影响。如无符号整数就不能直接转为byte，值>127的正数都不行，视为负数。Java所有数值都是带符号的，没有无符号数值。反过来，处理byte数据时，如何无符号化处理？按补码的规律，byte数据如果为负数，可以+256来实现，正数不用处理，也可以和 0xFF 进行位与运算，这个位运算操作可以去掉转换后的数值的符号位。例如，下例中byte的-1转换到int时，通过与运算将int的符号位清零，这样实现byte数据的无符号化。

	byte myByte =(byte)0xff;
	int myInt = myByte & 0xFF;
	sytem.out.println( ""+(by & 0xff));
	sytem.out.println( ""+(by + 256) );

取得某正数的负数补码表达规则是，按位取反加1。1的负数是-1，补码就是对正1的十进位 00000001 取反得到 11111110，加1就得到 11111111，用16进位表示就是 0xFF。

	1的二进位表示 00000001           128的二进位表示 10000000
	1的二进位取反 11111110           128的二进位取反 01111111
	二进位取反加一 11111111          二进位取反后加一 10000000
	即得到1的对应负数补码 0xFF        128的对应负数-128的补码为 0x80，注意和128一样

计算机在读取数据进行运算时，会根据最高位即符号位来应用加减法则进行计算。现在根据补码值 0x81 反解出这个原值，字面上如果无称号处理0x81就是129，按减1求反得出负数对应的正值，即127，所以0x81这个补码对应的负数就是-127。

	byte by = (byte)129;
	System.out.println(""+(by));
	System.out.println(""+(by&0xff));
	System.out.println(""+(by+256));

## ⚡ Binary

	public static String byteToBinary(byte src) {  
	    StringBuilder result = new StringBuilder();  
	    for (int i = 0; i < 8; i++) {  
	        result.append(src%2 == 0 ? '0' : '1');  
	        src = (byte)(src >>> 1);  
	    }  
	    return result.reverse().toString();  
	}

## ⚡ Base16码表

	Index  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 
	Encode 0 1 2 3 4 5 6 7 8 9  A  B  C  D  E  F

## ⚡ Base64码表

	Index  Char  Index  Char  Index  Char  Index Char
	0      A     16     Q     32     g     48     w
	1      B     17     R     33     h     49     x
	2      C     18     S     34     i     50     y
	3      D     19     T     35     j     51     z
	4      E     20     U     36     k     52     0
	5      F     21     V     37     l     53     1
	6      G     22     W     38     m     54     2
	7      H     23     X     39     n     55     3
	8      I     24     Y     40     o     56     4
	9      J     25     Z     41     p     57     5
	10     K     26     a     42     q     58     6
	11     L     27     b     43     r     59     7
	12     M     28     c     44     s     60     8
	13     N     29     d     45     t     61     9
	14     O     30     e     46     u     62     +
	15     P     31     f     47     v     63     /
	padding = 

## ⚡ URL and Filename safe Base 64 Alphabet

     Value Encoding  Value Encoding  Value Encoding  Value Encoding
         0 A            17 R            34 i            51 z
         1 B            18 S            35 j            52 0
         2 C            19 T            36 k            53 1
         3 D            20 U            37 l            54 2
         4 E            21 V            38 m            55 3
         5 F            22 W            39 n            56 4
         6 G            23 X            40 o            57 5
         7 H            24 Y            41 p            58 6
         8 I            25 Z            42 q            59 7
         9 J            26 a            43 r            60 8
        10 K            27 b            44 s            61 9
        11 L            28 c            45 t            62 - (minus)
        12 M            29 d            46 u            63 _ (underline)
        13 N            30 e            47 v        
        14 O            31 f            48 w
        15 P            32 g            49 x
        16 Q            33 h            50 y         (pad) .

Multipurpose Internet Mail Extensions (MIME)是Base64的另一种编码方案，广泛应用于文件的编码，MIME 消息能包含文本、图像、音频、视频以及其他应用程序专用的数据，如IE保存网页单文件MHT方式就是使用的MIME，Multipart message 编码信息参考：

	MIME-Version: 1.0
	Content-Type: multipart/mixed; boundary=frontier

	This is a message with multiple parts in MIME format.
	--frontier
	Content-Type: text/plain

	This is the body of the message.
	--frontier
	Content-Type: application/octet-stream
	Content-Transfer-Encoding: base64

	PGh0bWw+CiAgPGhlYWQ+CiAgPC9oZWFkPgogIDxib2R5PgogICAgPHA+VGhpcyBpcyB0aGUg
	Ym9keSBvZiB0aGUgbWVzc2FnZS48L3A+CiAgPC9ib2R5Pgo8L2h0bWw+Cg==
	--frontier--


## ⚡ Base32码表 - RFC 4648 alphabet

	Value   Symbol   Value   Symbol   Value   Symbol   Value   Symbol
	0       A        8       I       16       Q       24       Y
	1       B        9       J       17       R       25       Z
	2       C       10       K       18       S       26       2
	3       D       11       L       19       T       27       3
	4       E       12       M       20       U       28       4
	5       F       13       N       21       V       29       5
	6       G       14       O       22       W       30       6
	7       H       15       P       23       X       31       7
	padding =

# 🚩 JSON 数据转换

 
https://www.runoob.com/w3cnote/java-json-instro.html

Java中并没有内置JSON的解析，因此使用JSON需要借助第三方类库。下面是几个常用的 JSON 解析类库：

Gson: 谷歌开发的 JSON 库，功能十分全面。https://github.com/google/gson
FastJson: 阿里巴巴开发的 JSON 库，性能十分优秀。https://github.com/alibaba/fastjson/
Jackson: 社区十分活跃且更新速度很快。https://github.com/FasterXML/jackson



# 🚩 Java Lock 并发同步锁定
- https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html#jvms-6.5.monitorenter
- https://tech.meituan.com/2018/11/15/java-lock.html
- Doug Lea’s Home Page http://gee.cs.oswego.edu/
- 任务取消(Cancellation) http://ifeve.com/cancellation/
- 彻底理解 Synchronized https://www.jianshu.com/p/d53bf830fa09
- synchronized 详解 https://juejin.im/post/6844903482114195463
- 关于 synchronized 和 ReentrantLock 之多线程同步详解 - https://www.jianshu.com/p/96c89e6e7e90
- Java Fork/Join 框架 http://ifeve.com/java-fork-join-framework/
- 深入理解Java并发之synchronized实现原理 - https://blog.csdn.net/javazejian/article/details/72828483
- Java Concurrent Animated 看动画学并发 http://ifeve.com/java-concurrent-animated/
- JUC Abstract Queued Synchronizer 详细分析 https://www.jianshu.com/p/0da2939391cf
- [几种自旋锁的java实现](https://www.jianshu.com/p/824b2e4f1eed)

多线程代码中加锁，根本上就是将多线和执行变成单线执行，保证数据的正确性，所以加锁就会损失掉多线程带来的性能提升。

使用锁要优化加锁操作根据应用场景，尽量减少锁的时间，不需要同步执行的代码，能不放在同步快里面执行就不要放在同步快内，可以让锁尽快释放；细化锁的粒度，将物理上的一个锁，拆成逻辑上的多个锁，增加并行度，从而降低锁竞争。

基本概念：

- Pessimistic or Optimistic Locking 悲观锁与乐观锁
- Starvation and Fairness 饥饿与公平锁
- Pessimistic or Optimistic Locking 悲观锁与乐观锁
- Biased Locking 偏向锁
- ReentrantLock 重入锁
- ReadWriteLock 读写锁

有资源的锁定，那么在处理线程等待过程中就可能有出现死锁现象，四个必要条件：

- 互斥条件：一个资源每次只能被一个进程使用
- 请求与保持条件：进程已经保持了至少一个资源，但又提出了新的资源请求
- 不可剥夺条件:进程所获得的资源在未使用完毕之前，不能被其他进程强行夺走，即只能由获得该资源的进程自己来释放。
- 循环等待条件: 若干进程间形成首尾相接循环等待资源的关系。


并发编程三要素：

- **原子性**：指的是一个操作不能再继续拆分，要么一次操作完成，要么就是不执行。为了保证原子性，Java 提供了两个高级的字节码指令 monitorenter 和 monitorexit，这个就是关键字 synchronized 的内部实现。

- **可见性**：指的是一个变量在被一个线程更改后，其他的线程能立即看到最新的值，关键字 volatile 就是做这种事的。

- **有序性**：指的是程序的执行按照代码的先后顺序执行。

对于可见性和有序性，Java 提供了关键字 volatile 禁止指令重排，保证了有序性，同时 volatile 可以保证变量的读写及时从缓存中刷新到主存，也就保证了可见性。以外，synchronized 是可见性和有序性另外一种实现，同步方法和同步代码块保证一个变量在同一时间只能有一个线程访问，这就是一种先后顺序，而对于可见性保证，只能有一个线程操作变量，那么其他线程只能在前一个线程操作完成后才可以看到变量最新的值。

CAS - Compare And Swap 比较并交换技术，著名的并行计算专家 Doug lea 大神在同步组件中大量使用 CAS 技术鬼斧神工地实现了 Java 多线程的并发操作。整个 AQS 同步组件、Atomic 原子类操作等等都是以 CAS 实现的，甚至 ConcurrentHashMap 在 1.8 的版本中也调整为了 CAS + Synchronized，可以说 CAS 是整个 JUC 的基石。JUC 即是 Java 5.0 提供的 java.util.concurrent 并发包，在此包中增加了在并发编程中很常用的工具类,
用于定义类似于线程的自定义子系统，包括线程池，异步 IO 和轻量级任务框架。还提供了设计用于多线程上下文中的 Collection 实现等。

CAS 算法：

- 是硬件对于并发的支持，针对多处理器操作而设计的处理器中的一种特殊指令，管理对共享数据的并发访问;
- CAS 是一种无锁的非阻塞算法的实现;
- CAS 包含了三个操作数，需要读写的内存值 V、进行比较的预估值 A、拟写入的更新值 B；
- 当且仅当 V == A 时，赋值 V = B，否则将不做任何操作;

CAS虽然很高效，但是它也存在三大问题：

- ABA 问题。CAS 需要在操作值的时候检查内存值是否发生变化，没有发生变化才会更新内存值。但是如果内存值原来是 A，后来变成了 B，又变成 A，那么 CAS 进行检查时会发现值没有发生变化。ABA 问题的解决思路就是在变量前面添加版本号，每次变量更新的时候都把版本号加一，这样变化过程就从 “A－B－A” 变成了 “1A－2B－3A”。JDK 5 开始提供 AtomicStampedReference 类来解决 ABA 问题，具体操作封装在 compareAndSet() 中。首先会检查当前引用和当前标志与预期引用和预期标志是否相等，如果都相等，则以原子方式将引用值和标志的值设置为给定的更新值。

- 循环时间长开销大。CAS操作如果长时间不成功，会导致其一直自旋，给CPU带来非常大的开销。

- 只能保证一个共享变量的原子操作。对一个共享变量执行操作时，CAS 能够保证原子操作，但是对多个共享变量操作时，CAS 是无法保证操作的原子性的。
Java 1.5 开始提供 AtomicReference 类来保证引用对象之间的原子性，可以把多个变量放在一个对象里来进行 CAS 操作。



要理解掌握不同的锁，就需要对多线程中使用到的资源读写场景进行分析：

- 资源要不要锁定操作？
	- 要锁定 -> 悲观锁
	- 不锁定 -> 乐观锁
- 资源要不要锁定读写操作？
	- 读取要锁定 -> 读锁
	- 写入要锁定 -> 写锁
- 资源锁定失败，要不要阻塞线程？
	- 进入阻塞等待 -> 同步锁
	- 不阻塞 -> 自旋锁、适应性自旋锁 
- 多线程竞争资源锁定要不要排队？
	- 排队 -> 公平锁
	- 插队 -> 非公平锁
- 线程能否重复获取同一个锁定对象？ 
	- 可以 -> 可重入锁
	- 不能 -> 非重入锁
- 线程能否共享同一个锁定对象？ 
	- 可以 -> 共享锁
	- 不能 -> 排他锁 Mutex
- 多线程竞争同步资源的程序细节有什么差别？
	- 不锁定资源，多线程只有一个成功修改资源
	- 同一个线程执行同步资源时自动获取资源 -> 偏向锁
	- 多个线程竞争同步资源时，没有获取到资源的线程自旋等待 -> 轻量级锁
	- 多个线程竞争同步资源时，没有获取到资源的线程阻塞等待唤醒 -> 轻量级锁

乐观锁与悲观锁不是指具体的什么类型的锁，而是指看待并发同步的角度。

**悲观锁**认为对于同一个数据的并发操作，一定是会发生修改的，哪怕没有修改，也会认为修改。因此对于同一个数据的并发操作，悲观锁采取加锁的形式。悲观的认为，不加锁的并发操作一定会出问题。

**乐观锁**则认为对于同一个数据的并发操作，是不会发生修改的。在更新数据的时候，会采用尝试更新，不断重新的方式更新数据。乐观的认为，不加锁的并发操作是没有事情的。

悲观锁适合写操作非常多的场景，乐观锁适合读操作非常多的场景，不加锁会带来大量的性能提升。

简单理解下悲观锁：当一个事务锁定了一些数据之后，只有当当前锁提交了事务，释放了锁，其他事务才能获得锁并执行操作。 悲观锁一般是用于并发不是很高，并且不允许脏读等情况，但是对数据库资源消耗较大。

	set autocommit = 0;
	bigen --开启事务
	select id, total, front, end from price where id=1 for update 
	insert into price values(?,?,?,?,?)
	commit --提交事务

这里使用 select for update 的方式利用数据库开启了悲观锁，锁定了 id=1 的这条数据，注意:这里除非是使用了索引会启用行级锁，不然是会使用表锁，将整张表都锁住。。之后使用commit提交事务并释放锁，这样下一个线程过来拿到的就是正确的数据。

相对比的是更好的并发加锁方式，乐观锁首先假设数据冲突很少，只有在数据提交修改的时候才进行校验，如果冲突了则不会进行更新。乐观锁在实际应用相对较多，它可以提供更好的并发访问，并且数据库开销较少，但是有可能存在脏读的情况。


偏向锁/轻量级锁/重量级锁这三种锁是指锁的状态，并且是针对 Synchronized。

在 Java 5 通过引入锁升级的机制来实现高效 Synchronized。

**偏向锁**是指一段同步代码一直被一个线程所访问，那么该线程会自动获取锁，降低获取锁的代价。顾名思义，它会偏向于第一个访问锁的线程，如果在运行过程中，同步锁只有一个线程访问，不存在多线程争用的情况。

如果在运行过程中，遇到了其他线程抢占锁，则持有偏向锁的线程会被挂起，JVM 会消除它身上的偏向锁，将锁恢复到标准的轻量级锁。

**轻量级锁**是指偏向锁被另一个线程所访问，偏向锁就会升级为轻量级锁，其他线程会通过自旋的形式尝试获取锁，不会阻塞，提高性能。

**重量级锁**是指轻量级锁中，另一个线程虽然是自旋，但自旋不会一直持续下去，当自旋一定次数的时候，还没有获取到锁，就会进入阻塞，该锁膨胀为重量级锁。重量级锁会让其他申请的线程进入阻塞，性能降低。


**自旋锁**原理非常简单，如果持有锁的线程能在很短时间内释放锁资源，那么那些等待竞争锁的线程就不需要做内核态和用户态之间的切换进入阻塞挂起状态，它们只需要等一等，即进入自旋状态。等持有锁的线程释放锁后即可立即获取锁，这样就避免用户线程和内核的切换的消耗。

但是线程自旋是需要消耗 CUP 时间的，说白了就是让 CUP 在做无用功，如果一直获取不到锁，那线程也不能一直占用 CUP，所以需要设定一个自旋等待的最大时间。

如果持有锁的线程执行的时间超过自旋等待的最大时间扔没有释放锁，这时竞争线程会停止自旋进入阻塞状态。

自旋锁尽可能的减少线程的阻塞，这对于锁的竞争不激烈，且占用锁时间非常短的代码块来说性能能大幅度的提升，因为自旋的消耗会小于线程阻塞挂起再唤醒的操作的消耗，这些操作会导致线程发生两次上下文切换！

**自适应自旋锁**意味着自旋的时间（次数）不再固定，而是由前一次在同一个锁上的自旋时间及锁的拥有者的状态来决定。如果在同一个锁对象上，自旋等待刚刚成功获得过锁，并且持有锁的线程正在运行中，那么虚拟机就会认为这次自旋也是很有可能再次成功，进而它将允许自旋等待持续相对更长的时间。如果对于某个锁，自旋很少成功获得过，那在以后尝试获取这个锁时将可能省略掉自旋过程，直接阻塞线程，避免浪费处理器资源。

在自旋锁中 另有三种常见的锁形式:TicketLock、CLHlock和MCSlock


**公平锁**是指多个线程按照申请锁的顺序来获取锁。

**非公平锁**是指多个线程获取锁的顺序并不是按照申请锁的顺序，有可能后申请的线程比先申请的线程优先获取锁。有可能，会造成优先级反转或者饥饿现象。

**可重入锁**又名递归锁，是指在同一个线程在外层方法获取锁的时候，在进入内层方法会自动获取锁。一个好处是可一定程度避免死锁，比如两个相互调用的方法 A 和 B，如果不是可重入锁的话，在加锁的时候调用对方可能造成死锁。


对于 ReentrantLock 而言，通过构造函数指定该锁是否是公平锁，默认是非公平锁，它的优点在于吞吐量比公平锁大，ReentrantLock 例化时传入 true 可以那建立公平锁。

	ReentrantLock()	
	ReentrantLock​(boolean fair)

对于 Synchronized 而言，也是一种非公平锁，也是一个可重入锁。但并不像 ReentrantLock 通过 AQS - Abstract Queued Synchronizer 来实现线程调度，所以并没有任何办法使其变成公平锁。


**排它锁**也叫独享锁，是指该锁一次只能被一个线程所持有。**共享锁**是指该锁可被多个线程所持有，互斥锁/读写锁就是具体的实现。

对于 ReentrantLock 而言，是独享锁、互斥锁，但是对于 Lock 的另一个实现类 ReadWriteLock，读取锁定是共享的，其写入锁定是独享锁，共享读取锁可保证并发读取高效。

独享锁与共享锁也是通过 AQS 来实现的，通过实现不同的方法来实现独享或者共享。

对于 Synchronized 而言，当然是独享锁。

 Java 中的具体实现就是 ReentrantLock。

**读写锁**在 Java 中的具体实现就是 ReadWriteLock，管理着一组锁，一个是只读的锁，一个是写锁。读锁可以在没有写锁的时候被多个线程同时持有，写锁是独占的。 所有读写锁的实现必须确保写操作对读操作的内存影响。换句话说，一个获得了读锁的线程必须能看到前一个释放的写锁所更新的内容。 读写锁比互斥锁允许对于共享数据更大程度的并发。每次只能有一个写线程，但是同时可以有多个线程并发地读数据。ReadWriteLock 适用于读多写少的并发情况。 Java 并发库中 ReentrantReadWriteLock 实现了 ReadWriteLock 接口并添加了可重入的特性。


**分段锁**其实是一种锁的设计，并不是具体的一种锁，对于 ConcurrentHashMap 而言，其并发的实现就是通过分段锁的形式来实现高效的并发操作。

分段锁的含义以及设计思想，ConcurrentHashMap 中的分段锁称为 Segment，它继承自 ReentrantLock。类似于 JDK 8 HashMap 的实现，即内部拥有一个 Entry 数组，数组中的每个元素又是一个链表，同时又是一个 ReentrantLock。

当需要 put 元素的时候，并不是对整个 hashmap 进行加锁，而是先通过 hashcode 来知道他要放在那一个分段中，然后对这个分段进行加锁，所以当多线程 put 的时候，只要不是放在一个分段中，就实现了真正的并行的插入。

但是，在统计 size 的时候，可就是获取 hashmap 全局信息的时候，就需要获取所有的分段锁才能统计。

分段锁的设计目的是细化锁的粒度，当操作不需要更新整个数组的时候，就仅仅针对数组中的一项进行加锁操作。

Java 各种锁对象：

|         类对象         |            锁类型            |      适用场景      |
|------------------------|------------------------------|--------------------|
| ReentrantLock          | 互斥锁                       | 数据一致性         |
| ReentrantReadWriteLock | 可重入读写锁                 |                    |
| ReadWriteLock          | 共享读取锁、独享写入锁       | 高性能读取         |
| StampedLock            | 戳锁，排它写，悲观读，乐观读 | 需要高性能读取场合 |




## ⚡ Semaphores 信号量 

信号量 Semaphores 机制是一种卓有成效的进程同步工具，由荷兰学者 Dijkstra 提出。

信号量的值仅能由 PV 操作来改变。

- P 操作（wait）申请一个单位资源，然后进程进入。
- V 操作（signal）释放一个单位资源，然后进程出来。

Semaphore 信号量维护一定数量的特权，当特权有余量，线程通过 acquire 方法可以获取到代码执行特权，用完后使用 release 方法归还这。

Semaphore 可以用于流量控制，特别是对并发数有限制的场景。如数据库同时只允许有 20 个线程访问，就可以使用信号量来实现。

当特权使用完后，线程再执行 acquire 就会进入同步阻塞，等待其它线程归还特权后，再继续获取特权执行同步代码。

    Semaphore​(int permits) 
    Semaphore​(int permits, boolean fair)

构造函数可以指定是是使用公平锁，默认是 nonfair fairness。

常用方法：

- void	acquire()	获取代码执行特权
- void	acquire​(int permits) 获取指定数量代码执行特权
- int	drainPermits()		将现有的特权清空
- boolean	tryAcquire()	尝试获取一个代码执行特权，如果在调用期无结果就退出
- boolean	tryAcquire​(int permits)	同上，但指定了需要的特权数量
- void	release()	释放特权，装饰特权归还 Semaphore 对象管理
- void	release​(int permits) 同上，指定了特权数量


## ⚡ Synchronized 重量级同步锁

在 JDK1.5 之前都是使用 synchronized 关键字保证同步的，它可以把任意一个非 NULL 对象当作锁定对象。

作用于方法时，锁住的是对象的实例(this)； 当作用于静态方法时，锁住的是 Class 实例，又因为 Class 的相关数据存储在永久带 PermGen（JDK 1.8 则是 metaspace）。永久带是全局共享的，因此静态方法锁相当于类的一个全局锁，会锁所有调用该方法的线程；

synchronized 作用于一个对象实例时，锁住的是所有以该对象为锁的代码块。

Synchronized 通过监视队列实现目标锁定，有多个队列，当多个线程一起访问某个对象监视器的时候，对象监视器会将这些线程存储在不同的容器中。

- **Contention List**：竞争队列，所有请求锁的线程首先被放在这个竞争队列中；
- **Entry List**：Contention List中那些有资格成为候选资源的线程被移动到Entry List中；
- **Wait Set**：哪些调用wait方法被阻塞的线程被放置在这里；
- **OnDeck**：任意时刻，最多只有一个线程正在竞争锁资源，该线程被成为OnDeck；
- **Owner**：当前已经获取到所资源的线程被称为Owner；
- **!Owner**：当前释放锁的线程。

JVM 每次从队列的尾部取出一个数据用于锁竞争候选者（OnDeck），但是并发情况下，ContentionList 会被大量的并发线程进行 CAS - Compare and Swap 访问，为了降低对尾部元素的竞争，JVM 会将一部分线程移动到 EntryList 中作为候选竞争线程。Owner 线程会在 unlock 时将 ContentionList 中的部分线程迁移到 EntryList 中，并指定 EntryList 中的某个线程为 OnDeck 线程（一般是最先进去的那个线程）。Owner 线程并不直接把锁传递给 OnDeck 线程，而是把锁竞争的权利交给 OnDeck，OnDeck 需要重新竞争锁。这样虽然牺牲了一些公平性，但是能极大的提升系统的吞吐量，在 JVM 中，也把这种选择行为称之为竞争切换。

OnDeck 线程获取到锁资源后会变为 Owner 线程，而没有得到锁资源的仍然停留在 EntryList。如果 Owner 线程阻塞在 wait 方法，则转移到 WaitSet 队列中，直到某个时刻通过 notify 或者 notifyAll 唤醒，会重新进去 EntryList 中。

处于 ContentionList、EntryList、WaitSet 中的线程都处于阻塞状态，该阻塞是由操作系统来完成的，Linux 内核下采用 pthread_mutex_lock 内核函数实现。

对比 synchronized、ReentrantLock 两者的区别：

|          |            synchronized            |          ReentrantLock          |
|----------|------------------------------------|---------------------------------|
| 调度机制 | 使用对象的 wait、notify、notifyAll | 与 Condition 结合进行线程的调度 |
| 设置方式 | 显式的使用在同步方法或者同步代码块 | 显式的声明指定起始和结束位置    |
| 释放方式 | 托管给 JVM 自动执行                | 手动释放锁                      |

JDK 1.6 之前 ReentrantLock 性能优于 synchronized，不过之后的 synchronized 做了大量的性能调优，而且 synchronized 相对程序员来说，简洁熟悉，如果不是 synchronized 无法实现的功能，如轮询锁、超时锁和中断锁等，推荐首先使用 synchronized，而针对锁的高级功能，再使用 ReentrantLock。
 

Synchronized 同步锁用法：

1. 修饰一个代码块，被修饰的代码块称为同步语句块，同步作用于这个代码块的对象；
2. 修饰一个方法，称为同步方法，其作用的范围是整个方法，同步作用于调用这个方法的对象；
3. 修改一个静态的方法，其作用的范围是整个静态方法，作用的对象是这个类的所有实例；
4. 修改一个类，其作用的范围是 synchronized 后面括号括起来的部分，作用于这个类的所有实例。

使用示范；

    public void method()
    {
       synchronized(this) {
          // todo
       }
    }

    public synchronized void method()
    {
       // todo
    }

    public synchronized static void method() {
       // todo
    }

    class ClassName {
       public void method() {
          synchronized(ClassName.class) {
             // todo
          }
       }
    }

synchronized 修饰一个方法为同步方法，但不能在构造器上使用。同步加锁的是对象，而不是代码。

- 修饰实例方法，相当于 synchronized(this);
- 修饰静态方法，相当于 synchronized(this.class);
- 修饰代码块的形式是 synchronized(Object)。

如果锁的是类对象 class，尽管 new 多个实例对象，但他们仍然是属于同一个类依然会被锁住，线程之间保证同步关系，给 class 加同步锁和给静态方法加锁一样。


Java Virtual Machine Specification 文档中提到 monitorenter 和 monitorexit 用于锁定状态的切换。每个对象有一个监视器 monitor，它被占用时对象就处于锁定状态。线程执行 monitorenter 指令尝试获取 monitor 的所有权，过程如下：

- 如果 monitor 的进入数为 0，则该线程进入 monitor，然后将进入数设置为 1，该线程拥有锁定对象的使用权。
- 如果线程已经占有该 monitor，只是重新进入，则进入 monitor 的进入数加 1。
- 如果其他线程已经占用 monitor，则该线程进入阻塞状态，直到 monitor 的进入数为 0，再重新尝试获取 monitor 的所有权。

代码块同步在编译后，通过将 monitorenter 指令插入到同步代码块的开始处，将 monitorexit 指令插入到方法结束处和异常处，通过反编译字节码可以观察到。任何一个对象都有一个 monitor 与之关联，线程执行 monitorenter 指令时，会尝试获取对象对应的 monitor 的所有权，即尝试获得对象的锁。

方法同步方式，synchronized 方法在 method_info 结构有 ACC_synchronized 标记，线程执行时会识别该标记，获取对应的锁，实现方法同步。

两者虽然实现细节不同，但本质上都是对一个对象的监视器 monitor 的获取。


Synchronized 为非公平锁，在线程进入 ContentionList 时，等待的线程会先尝试自旋获取锁，如果获取不到就进入 ContentionList，这明显对于已经进入队列的线程是不公平的，还有一个不公平的事情就是，自旋获取锁的线程还可能直接抢占 OnDeck 线程的锁资源。

synchronized 它无法保证等待的线程获取锁的顺序，而 Lock 实现提供了比使用 synchronized 方法和语句可获得的更广泛的锁定操作，它能以更优雅的方式处理线程同步问题。这样就实现了和 sychronized 一样的同步效果，需要注意的是，用 sychronized 修饰的方法或者语句块在代码执行完之后锁自动释放，而用 Lock 需要我们手动释放锁，所以为了保证锁最终被释放(发生异常情况)，要把互斥区放在 try 内，在 finally 内释放锁。

	import java.util.concurrent.locks.Lock;
	import java.util.concurrent.locks.ReentrantLock;

	public class coding {

		private static Lock lock = new ReentrantLock();
		//private static Lock lock = new ReentrantLock(true);
		
		public static void main(String[] args) {
			new Thread() {
				public void run() {
					log("T0 "+Thread.currentThread().getName());
				};
			}.start();
			new Thread() {
				public void run() {
					log("T1 "+Thread.currentThread().getName());
				};
			}.start();
		}

		static public void log(String t) {
			for ( int i=0; i<5; i++) {
				lock.lock();
				try {
					System.out.println(t);
					Thread.sleep(600);
				}catch(Exception e){
					e.printStackTrace();
				} finally {
					lock.unlock();
				}
			}
		}

	}

可以将上面代码中 log 改造为 synchronized 同步锁，只需要在方法成员声明中添加这个关键字，并去掉Lock相关的两行代码即可，这样这个方法就会具有非公平的同步锁功能，代码执行完之后锁自动释放。

	static synchronized public void log(String t) {
		for ( int i=0; i<10; i++) {
			// lock.lock();
			try {
				System.out.println(t);
				Thread.sleep(800);
			}catch(Exception e){
				e.printStackTrace();
			} finally {
				// lock.unlock();
			}

		}
	}

synchronized 等待唤醒机制提供了 wait 和 notify 等方法用于多线程协调运行：

- this.wait() 使线程进入等待状态，必须在已获得的锁对象上调用 wait() 方法；
- this.notify() 或 this.notifyAll() 唤醒其他等待线程；

已唤醒的线程还需要重新获得锁后才能继续执行。

使用 sleep() 和 wait() 方法使用线程进入睡眠的区别：

- sleep() 睡眠时，保持对象锁，仍然占有该锁； 
- wait() 睡眠时，释放对象锁。 


Lock 接口的出现替代了同步代码块或者同步函数，将其隐式锁操作变成显式锁操作，同时更为灵活，可以在一个锁上加上多个监视器。

Lock 接口中的方法:

- lock(): 获取锁
- unlock(): 释放锁, 这个动作是必须要完成的, 所以通常需要定义在 finally 代码块中
- tryLock​(long time, TimeUnit unit) 尝试等待指定时间，超时就进入中断退出
- lockInterruptibly() 尝试获取锁并在线程中断后退出
- newCondition() 返回条件监视器

Condition 接口的出现替代了 synchronized 中的 wait()、notify()、notifyAll() 等方法，将这些
监视器方法单独进行了封装，变成 Condition 监视器对象，可以与任意锁进行组合。

Condition 对象常用方法：

- await(): 让线程处于冻结状态
- signal(): 唤醒一个等待线程
- signalAll(): 唤醒所有等待线程

线程的 interrupt() 方法可以终止线程的执行。

参考 Java Concurrent Animated 项目，用一系列的动画来演示 Java 并发库组件和代码，效果更好。


## ⚡ volatile 敏感同步
- Java 并发编程 volatile https://www.cnblogs.com/iou123lg/p/9280639.html
- Managing volatility https://www.ibm.com/developerworks/java/library/j-jtp06197/
- Chapter 17. Threads and Locks https://docs.oracle.com/javase/specs/jls/se8/html/jls-17.html
- https://manybutfinite.com/post/what-does-an-idle-cpu-do/
- https://www.cnblogs.com/zhangj95/p/5647051.html#what-does-an-idle-cpu-do
- https://javatutorial.net/java-volatile-example

volatile 是 Java 提供的一个比 synchronized 更轻量级的实现，synchronized 实现了数据在同一时刻只能有一个线程对数据访问，而 volatile 实现的就是同时可以多个线程在访问数据，但是只要数据发生了变化，便确保其他线程及时感知这种变化。

计算机的硬件组成可以抽象为由总线、IO 设备、主存、CPU 等组成。其中数据存放在主存中，CPU 负责指令的执行，CPU的指令执行非常快，大部分简单指令的执行只需要一个时钟周期，而一次主内存数据的读取则需要几十到几百个时钟周期，那么 CPU 从主存中读写数据就会有很大的延迟，这就产生了 L1/L2/L3 级高速缓存的概念。

也就是说，当程序在运行过程中，会将运算需要的数据从主存复制一份到 CPU 内部高速缓存当中。那么 CPU 进行计算时就可以直接从它的高速缓存读写入数据，当运算结束之后，再将高速缓存中的数据回写到主存当中，通过这种方式来降低 CPU 从主存中获取数据的延迟。

在多内核 CPU 架构中，硬件内存架构中存在的一个问题，缓存一致性问题。比如说核 A 改变了缓存变量 i 的值之后，核 B 是不知道的，存放的还是旧值，最终对这样的一个脏数据进行操作。

为此，CPU 厂商定制了相关的规则来解决这样一个硬件问题，主要有总线加锁和缓存加锁方式。

变量会从主内存复制到高速缓存，计算完成后，会再回写到主内存，而高速缓存和主内存的交互是会经过总线的。既然变量在同一时刻被多个 CPU 同时操作，会带来脏数据，那么只要在总线上阻塞其他 CPU，确保同一时刻只能有一个 CPU 对变量进行操作，后续的 CPU 读写操作就不会有脏数据。总线锁的缺点也很明显，有点类似将多核操作变成单核操作，所以效率低。

缓存锁，即缓存一致性协议，主要有 MSI、MESI、MOSI 等，这些协议的主要核心思想：当 CPU 写数据时，如果发现操作的变量是共享变量，即在其他 CPU 中也存在该变量的副本，会发出信号通知其他 CPU 将该变量的缓存行置为无效状态，因此当其他 CPU 需要读取这个变量时，发现自己缓存中缓存该变量的缓存行是无效的，那么它就会从内存重新读取。


JVM 规范中试图定义一种 Java 内存模型 JMM - Java Memory Model 来屏蔽各个硬件平台和操作系统的内存访问差异，以实现在各种平台下都能达到一致的内存访问效果。在此之前，主流程序语言 C/C++ 等直接使用物理硬件和操作系统的内存模型，可以理解为类似于直接使用了硬件标准，都或多或少的在不同的平台有着不一样的执行结果。　

JMM 的主要目标是定义程序中各个变量的访问规则，即变量在内存中的存储和从内存中取出变量这样的底层细节。其规定了所有变量都存储在主内存，每个线程还有自己的工作内存，线程读写变量时需先复制到工作内存，执行完计算操作后再回写到主内存，每个线程还不能访问其他线程的工作内存。

工作内存可以看成是 CPU 高速缓存、寄存器的抽象，主内存可以看成就是物理硬件中主内存的抽象。

为了获得较好的执行性能，JMM 并没有限制执行引擎使用处理器的寄存器或者高速缓存来提升指令执行速度，也没有限制编译器对指令进行重排序。也就是说，在 JMM 中还会存在指令重排序的问题。

Java 语言又是怎么来解决这两个问题的呢？就是通过 volatile 这个关键字来解决缓存一致性和指令重排问题，volatile 作用就是确保可见性和禁止指令重排。


## ⚡ Starvation and Fairness 饥饿与公平
- [Java 并发之饥饿和公平锁 Starvation and Fairness](https://cloud.tencent.com/developer/article/1193092)

如果一个线程的cpu执行时间都被其他线程抢占了，导致得不到 CPU 执行，这种情况就叫做饥饿，这个线程就会出现饥饿致死的现象，因为永远无法得到 CPU 的执行。解决饥饿现象的方法就是实现公平，保证所有线程都公平的获得执行的机会。

饥饿发生的原因：
 
- 高优先级的线程占用了大部分的 CPU 时间，低优先级线程发生饥饿；
- 线程被永久堵塞在一个等待进入同步块的状态；
- 线程在等待一个处于永久等待完成的对象；

虽然无法实现完全 100% 公平，但是我们仍然可以尽可能的提高线程的公平性。

首先，我们研究一个简单的 synchronize 同步块：

	public class Synchronizer{

	  public synchronized void doSynchronized(){
	    //do a lot of work which takes a long time
	  }

	}

如果超过一个线程调用这个方法，那么只有一个线程可以进入这个方法执行，其他线程都必须等待，直到该线程退出。而且我们无法知道下一个进入 synchronize 的语句块的线程会是那一个

使用 lock 而不是 synchronize 增加等待线程的公平性：

	public class Synchronizer
	{
	  Lock lock = new Lock();

	  public void doSynchronized() throws InterruptedException{
	    this.lock.lock();
	      //critical section, do a lot of work which takes a long time
	    this.lock.unlock();
	  }

	}

Lock 简单的实现：

	public class Lock {
	  private boolean isLocked      = false;
	  private Thread  lockingThread = null;

	  public synchronized void lock() throws InterruptedException{
	    while(isLocked){
	      wait();
	    }
	    isLocked      = true;
	    lockingThread = Thread.currentThread();
	  }

	  public synchronized void unlock(){
	    if(this.lockingThread != Thread.currentThread()){
	      throw new IllegalMonitorStateException(
	        "Calling thread has not locked this lock");
	    }
	    isLocked      = false;
	    lockingThread = null;
	    notify();
	  }
	}


10 Fork/Join 框架
public class TestForkJoinPool{
    public static void main(String[] args){
        ForkJoinPool pool = new ForkJoinPool();

        ForkJoinTask<Long> task = new ForkJoinSumCalculate(0L, 100000000L);

        Long sum = pool.invoke(task);

        System.out.println(sum);
    }

}

class ForkJoinSumCalculate extends RecursiveTask<Long>{

    private static final long serialVersionUID = 24340990L;

    private long start;
    private long end;

    private static final long THURSHOLD = 10000L;  // 拆分临界值

    // 有参构造器
    public ForkJoinSumCalculate(long start, long end){
        this.start = start;
        this.end = end;
    }

    public Long compute(){
        long length = end - start;

        if(length <= THURSHOLD){
            long  sum = 0L;

            for(long i = start; i<=end; i++){
                sum += i;
            }
            return sum;
        }else{
            long middle = (start + end ) / 2;
            ForkJoinSumCalculate left = new ForkJoinSumCalculate(start, middle);
            left.fork(); // 进行拆分,同时压入线程队列

            ForkJoinSumCalculate right = new ForkJoinSumCalculate(middle + 1, end);
            right.fork(); // 进行拆分,同时压入线程队列

            return left.join() + right.join();
        }
    }
}


## ⚡ Atomic 原子包

java.util.concurrent.atomic 是一个小型工具包，支持对单个变量进行无锁线程安全编程。

类的实例 AtomicBoolean，AtomicInteger，AtomicLong，AtomicReference 各自提供访问和更新相应的类型的单个变量。 每个类还为该类型提供适当的实用方法。

例如，AtomicLong 和 AtomicInteger 提供原子增量方法，如一个生成序列号的程序：

	class Sequencer { 
	private final AtomicLong sequenceNumber = new AtomicLong(0); 
		public long next() { 
		    return sequenceNumber.getAndIncrement();
		}
	} 

|                类                 |                                     描述                                     |
|-----------------------------------|------------------------------------------------------------------------------|
| AtomicBoolean                     | 可以原子方式更新的值 boolean 。                                              |
| AtomicInteger                     | 可以原子方式更新的 int值。                                                   |
| AtomicIntegerArray                | 一个 int数组，其中元素可以原子方式更新。                                     |
| AtomicIntegerFieldUpdater<T>      | 基于反射的实用程序，可对指定类的指定 volatile int字段进行原子更新。          |
| AtomicLong                        | 可以原子方式更新的 long值。                                                  |
| AtomicLongArray                   | 一个 long数组，其中元素可以原子方式更新。                                    |
| AtomicLongFieldUpdater<T>         | 基于反射的实用程序，可以对指定类的指定 volatile long字段进行原子更新。       |
| AtomicMarkableReference<V>        | AtomicMarkableReference维护一个对象引用以及一个标记位，可以原子方式更新。    |
| AtomicReference<V>                | 可以原子方式更新的对象引用。                                                 |
| AtomicReferenceArray<E>           | 一组对象引用，其中元素可以原子方式更新。                                     |
| AtomicReferenceFieldUpdater<T,​V> | 基于反射的实用程序，可以对指定类的指定 volatile引用字段进行原子更新。        |
| AtomicStampedReference<V>         | AtomicStampedReference维护一个对象引用以及一个整数“标记”，可以原子方式更新。 |
| DoubleAccumulator                 | 一个或多个变量共同维护使用提供的函数更新的运行 double值。                    |
| DoubleAdder                       | 一个或多个变量共同维持最初的零和 double总和。                                |
| LongAccumulator                   | 一个或多个变量共同维护使用提供的函数更新的运行 long值。                      |
| LongAdder                         | 一个或多个变量共同维持最初为零的总和为 long 。                               |

内部 compareAndSet 方法使用 Unsafe 调用 native 原生方法 CAS（CompareAndSet）递增数值。

    public final boolean compareAndSet(int expect, int update) {
        return unsafe.compareAndSwapInt(this, valueOffset, expect, update);
    }

CAS 利用 CPU 调用底层指令实现，单一处理器，进行简单的读写操作时，能保证自身读取的原子性，多处理器或复杂的内存操作时，CAS 采用总线加锁或缓存加锁方式保证原子性。

在多核心 CPU 中使用总线加锁，如 i=0 初始化，多处理器多线程环境下进行 i++ 操作下，处理器核心 A 和 B 同时读取 i 值到各自缓存，分别进行递增，回写值 i=1 相同。处理器提供 LOCK# 信号，进行总线加锁后，处理器 A 读取 i 值并递增，处理器 B 被阻塞不能读取 i 值。

总线加锁，在 LOCK# 信号下，其他线程无法操作内存，性能较差，缓存加锁能较好处理该问题。

缓存加锁，处理器核心 A 和 B 同时读取 i 值到缓存，处理器 A 提前完成递增，数据立即回写到主内存，并让处理器 B 缓存该数据失效，处理器 B 需重新读取 i 值。


	import java.util.concurrent.atomic.*;

	public class AtomicDemo extends Thread 
	{
	    private static final AtomicInteger TEST_INT = new AtomicInteger();

	    @Override
	    public void run() {
	        if (TEST_INT.intValue()<100) TEST_INT.incrementAndGet();
	    }

	    public static void main(String[] args) {
	        for (int i = 0; i < 1000; i++) {
	            AtomicDemo demo = new AtomicDemo();
	            demo.start();
	            // demo.join();
	        }
	     
	        System.out.println("最终结果："+TEST_INT);
	    }
	}

