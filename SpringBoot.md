

# 🚩 15 道 Spring Boot 高频面试题
- [最新版 Spring Boot2 教程合集](https://www.javaboy.org/springboot/)
- [15 道 Spring Boot 高频面试题](http://www.javaboy.org/2019/0619/interview.html)

什么是面霸？就是在面试中，神挡杀神佛挡杀佛，见招拆招，面到面试官自惭形秽自叹不如！松哥希望本文能成为你面霸路上的垫脚石！

做 Java 开发，没有人敢小觑 Spring Boot 的重要性，现在出去面试，无论多小的公司 or 项目，都要跟你扯一扯 Spring Boot，扯一扯微服务，不会？没用过？ Sorry ，我们不合适！

今天松哥就给大家整理了 15 道高频 Spring Boot 面试题，希望能够帮助到刚刚走出校门的小伙伴以及准备寻找新的工作机会的小伙伴。


1.什么是 Spring Boot ?
传统的 SSM/SSH 框架组合配置繁琐臃肿，不同项目有很多重复、模板化的配置，严重降低了 Java 工程师的开发效率，而 Spring Boot 可以轻松创建基于 Spring 的、可以独立运行的、生产级的应用程序。通过对 Spring 家族和一些第三方库提供一系列自动化配置的 Starter，来使得开发快速搭建一个基于 Spring 的应用程序。

Spring Boot 让日益臃肿的 Java 代码又重回简洁。在配合 Spring Cloud 使用时，还可以发挥更大的威力。

刚开始的 JavaWeb 使用 Servlet/JSP 做开发，一个接口搞一个 Servlet ，很头大，后来我们通过隐藏域或者反射等方式，可以减少 Servlet 的创建，但是依然不方便，再后来，我们引入 Struts2/SpringMVC 这一类的框架，来简化我们的开发 ，和 Servlet/JSP 相比，引入框架之后，生产力确实提高了不少，但是用久了，又发现了新的问题，即配置繁琐易出错，要做一个新项目，先搭建环境，环境搭建来搭建去，就是那几行配置，不同的项目，可能就是包不同，其他大部分的配置都是一样的，Java 总是被人诟病配置繁琐代码量巨大，这就是其中一个表现。那么怎么办？Spring Boot 应运而生，Spring Boot 主要提供了如下功能：

- 为所有基于 Spring 的 Java 开发提供方便快捷的入门体验。
- 开箱即用，有自己自定义的配置就是用自己的，没有就使用官方提供的默认的。
- 提供了一系列通用的非功能性的功能，例如嵌入式服务器、安全管理、健康检测等。
- 绝对没有代码生成，也不需要XML配置。

Spring Boot 的出现让 Java 开发又回归简单，因为确确实实解决了开发中的痛点，因此这个技术得到了非常广泛的使用，松哥很多朋友出去面试 Java 工程师，从2017年年初开始，Spring Boot基本就是必问，现在流行的 Spring Cloud 微服务也是基于 Spring Boot，因此，所有的 Java 工程师都有必要掌握好 Spring Boot。


2.Spring Boot 有哪些特点 ?
Spring Boot 主要有如下特点：

- 为 Spring 开发提供一个更快、更广泛的入门体验。
- 开箱即用，远离繁琐的配置。
- 提供了一系列大型项目通用的非业务性功能，例如：内嵌服务器、安全管理、运行数据监控、运行状况检查和外部化配置等。
- 绝对没有代码生成，也不需要XML配置。

3.Spring Boot 中的 starter 到底是什么 ?
首先，这个 Starter 并非什么新的技术点，基本上还是基于 Spring 已有功能来实现的。首先它提供了一个自动化配置类，一般命名为 XXXAutoConfiguration ，在这个配置类中通过条件注解来决定一个配置是否生效（条件注解就是 Spring 中原本就有的），然后它还会提供一系列的默认配置，也允许开发者根据实际情况自定义相关配置，然后通过类型安全的属性注入将这些配置属性注入进来，新注入的属性会代替掉默认属性。正因为如此，很多第三方框架，我们只需要引入依赖就可以直接使用了。

当然，开发者也可以自定义 Starter，自定义 Starter 可以参考：徒手撸一个 Spring Boot 中的 Starter ，解密自动化配置黑魔法！。


4.spring-boot-starter-parent 有什么用 ?
我们都知道，新创建一个 Spring Boot 项目，默认都是有 parent 的，这个 parent 就是 spring-boot-starter-parent ，spring-boot-starter-parent 主要有如下作用：

- 定义了 Java 编译版本为 1.8 。
- 使用 UTF-8 格式编码。
- 继承自 spring-boot-dependencies，这个里边定义了依赖的版本，也正是因为继承了这个依赖，所以我们在写依赖时才不需要写版本号。
- 执行打包操作的配置。
- 自动化的资源过滤。
- 自动化的插件配置。

针对 application.properties 和 application.yml 的资源过滤，包括通过 profile 定义的不同环境的配置文件，例如 application-dev.properties 和 application-dev.yml。

关于这个问题，读者可以参考：你真的理解 Spring Boot 项目中的 parent 吗？


5.YAML 配置的优势在哪里 ?
YAML 现在可以算是非常流行的一种配置文件格式了，无论是前端还是后端，都可以见到 YAML 配置。那么 YAML 配置和传统的 properties 配置相比到底有哪些优势呢？

- 配置有序，在一些特殊的场景下，配置有序很关键
- 支持数组，数组中的元素可以是基本数据类型也可以是对象
- 简洁
- 相比 properties 配置文件，YAML 还有一个缺点，就是不支持 @PropertySource 注解导入自定义的 YAML 配置。

关于 YAML 配置，要是大家还不熟悉，可以参考: Spring Boot 中的 yaml 配置简介


6.Spring Boot 中如何解决跨域问题 ?
跨域可以在前端通过 JSONP 来解决，但是 JSONP 只可以发送 GET 请求，无法发送其他类型的请求，在 RESTful 风格的应用中，就显得非常鸡肋，因此我们推荐在后端通过 （CORS，Cross-origin resource sharing） 来解决跨域问题。这种解决方案并非 Spring Boot 特有的，在传统的 SSM 框架中，就可以通过 CORS 来解决跨域问题，只不过之前我们是在 XML 文件中配置 CORS ，现在则是通过 @CrossOrigin 注解来解决跨域问题。关于 CORS ，小伙伴们可以参考：Spring Boot 中通过 CORS 解决跨域问题

    @RestControllerpublic 
    class HelloController {
        @CrossOrigin(value = "http://localhost:8081")
        @GetMapping("/hello")
        public String hello() {
            return "hello";
        }

        @CrossOrigin(value = "http://localhost:8081")
        @PostMapping("/hello")
        public String hello2() {
            return "post hello";
        }
    }

7.比较一下 Spring Security 和 Shiro 各自的优缺点 ?
由于 Spring Boot 官方提供了大量的非常方便的开箱即用的 Starter ，包括 Spring Security 的 Starter ，使得在 Spring Boot 中使用 Spring Security 变得更加容易，甚至只需要添加一个依赖就可以保护所有的接口，所以，如果是 Spring Boot 项目，一般选择 Spring Security 。当然这只是一个建议的组合，单纯从技术上来说，无论怎么组合，都是没有问题的。Shiro 和 Spring Security 相比，主要有如下一些特点：

- Spring Security 是一个重量级的安全管理框架；Shiro 则是一个轻量级的安全管理框架
- Spring Security 概念复杂，配置繁琐；Shiro 概念简单、配置简单
- Spring Security 功能强大；Shiro 功能简单

8.微服务中如何实现 session 共享 ?
在微服务中，一个完整的项目被拆分成多个不相同的独立的服务，各个服务独立部署在不同的服务器上，各自的 session 被从物理空间上隔离开了，但是经常，我们需要在不同微服务之间共享 session ，常见的方案就是 Spring Session + Redis 来实现 session 共享。将所有微服务的 session 统一保存在 Redis 上，当各个微服务对 session 有相关的读写操作时，都去操作 Redis 上的 session 。这样就实现了 session 共享，Spring Session 基于 Spring 中的代理过滤器实现，使得 session 的同步操作对开发人员而言是透明的，非常简便。session 共享大家可以参考：Spring Boot 一个依赖搞定 session 共享，没有比这更简单的方案了！


9.Spring Boot 如何实现热部署 ?
Spring Boot 实现热部署其实很容易，引入 devtools 依赖即可，这样当编译文件发生变化时，Spring Boot 就会自动重启。在 Eclipse 中，用户按下保存按键，就会自动编译进而重启 Spring Boot，IDEA 中由于是自动保存的，自动保存时并未编译，所以需要开发者按下 Ctrl+F9 进行编译，编译完成后，项目就自动重启了。

如果仅仅只是页面模板发生变化，Java 类并未发生变化，此时可以不用重启 Spring Boot，使用 LiveReload 插件就可以轻松实现热部署。


10.Spring Boot 中如何实现定时任务 ?
定时任务也是一个常见的需求，Spring Boot 中对于定时任务的支持主要还是来自 Spring 框架。

在 Spring Boot 中使用定时任务主要有两种不同的方式，一个就是使用 Spring 中的 @Scheduled 注解，另一个则是使用第三方框架 Quartz。

使用 Spring 中的 @Scheduled 的方式主要通过 @Scheduled 注解来实现。

使用 Quartz ，则按照 Quartz 的方式，定义 Job 和 Trigger 即可。

关于定时任务这一块，大家可以参考：Spring Boot 中实现定时任务的两种方式!


11.前后端分离，如何维护接口文档 ?
前后端分离开发日益流行，大部分情况下，我们都是通过 Spring Boot 做前后端分离开发，前后端分离一定会有接口文档，不然会前后端会深深陷入到扯皮中。一个比较笨的方法就是使用 word 或者 md 来维护接口文档，但是效率太低，接口一变，所有人手上的文档都得变。在 Spring Boot 中，这个问题常见的解决方案是 Swagger ，使用 Swagger 我们可以快速生成一个接口文档网站，接口一旦发生变化，文档就会自动更新，所有开发工程师访问这一个在线网站就可以获取到最新的接口文档，非常方便。关于 Swagger 的用法，大家可以参考：SpringBoot整合Swagger2，再也不用维护接口文档了！


12.什么是 Spring Data ?
Spring Data 是 Spring 的一个子项目。用于简化数据库访问，支持NoSQL 和 关系数据存储。其主要目标是使数据库的访问变得方便快捷。Spring Data 具有如下特点：

SpringData 项目支持 NoSQL 存储：
MongoDB （文档数据库）
Neo4j（图形数据库）
Redis（键/值存储）
Hbase（列族数据库）
SpringData 项目所支持的关系数据存储技术：

- JDBC
- JPA

Spring Data Jpa 致力于减少数据访问层 (DAO) 的开发量. 开发者唯一要做的，就是声明持久层的接口，其他都交给 Spring Data JPA 来帮你完成！Spring Data JPA 通过规范方法的名字，根据符合规范的名字来确定方法需要实现什么样的逻辑。


13.Spring Boot 是否可以使用 XML 配置 ?
Spring Boot 推荐使用 Java 配置而非 XML 配置，但是 Spring Boot 中也可以使用 XML 配置，通过 @ImportResource 注解可以引入一个 XML 配置。


14.Spring Boot 打成的 jar 和普通的 jar 有什么区别 ?
Spring Boot 项目最终打包成的 jar 是可执行 jar ，这种 jar 可以直接通过 java -jar xxx.jar 命令来运行，这种 jar 不可以作为普通的 jar 被其他项目依赖，即使依赖了也无法使用其中的类。

Spring Boot 的 jar 无法被其他项目依赖，主要还是他和普通 jar 的结构不同。普通的 jar 包，解压后直接就是包名，包里就是我们的代码，而 Spring Boot 打包成的可执行 jar 解压后，在 \BOOT-INF\classes 目录下才是我们的代码，因此无法被直接引用。如果非要引用，可以在 pom.xml 文件中增加配置，将 Spring Boot 项目打包成两个 jar ，一个可执行，一个可引用。


15.bootstrap.properties 和 application.properties 有何区别 ?
单纯做 Spring Boot 开发，可能不太容易遇到 bootstrap.properties 配置文件，但是在结合 Spring Cloud 时，这个配置就会经常遇到了，特别是在需要加载一些远程配置文件的时侯。

bootstrap.properties 在 application.properties 之前加载，配置在应用程序上下文的引导阶段生效。一般来说我们在 Spring Cloud Config 或者 Nacos 中会用到它。bootstrap.properties 被 Spring ApplicationContext 的父类加载，这个类先于加载 application.properties 的 ApplicatonContext 启动。

当然，前面叙述中的 properties 也可以修改为 yaml 。

好了，本文就说到这里，欢迎小伙伴留言说说你曾经遇到过的 Spring Boot 面试题！


# 🚩 Spring 框架入门精要
- Spring - https://spring.io/
- [Spring Boot Reference Guide](https://docs.spring.io/spring-boot/docs/1.5.13.RELEASE/reference/htmlsingle)
- [Getting Started · Building an Application with Spring Boot](https://spring.io/guides/gs/spring-boot/)
- [纯洁的微笑 Spring Boot 系列](http://www.ityouknow.com/spring-boot.html)
- [Spring Boot Initializer](https://start.spring.io/)
- [四十道经典 Spring 面试题](https://zhuanlan.zhihu.com/p/93594713)
- [Spring in Action 4th](https://potoyang.gitbook.io/spring-in-action-v4/)
- [Spring in Action 5th](https://potoyang.gitbook.io/spring-in-action-v5/)
- [LinkedIn 架构这十年 A Brief History of Scaling LinkedIn](https://colobu.com/2015/07/24/brief-history-scaling-linkedin/)
- []()


Spring  是由 Rod Johnson 撰寫，並在其著作 Expert One-on-One: J2EE Design and Development 中有提到過，它是個輕量級 Lightweight 容器 Container 、實現 IoC Inversion of Control 、AOP - Aspect-oriented programming 概念，是一個全方位的應用程式 Application 框架 Framework ，可協助建立以往在 EJB 下才有可能建立的一些應用程式。

Spring 的核心是個輕量級容器，以 IoC、AOP 和 DI - Dependency Injection 依赖注入三大技术为基础，基于此核心容器所建立的应用程序框架可以实现元件化松散耦合 Loose coupling，程序很容易实现单元测试。

- 輕量級

    Spring 的核心在檔案容量上只有不到 1MB 的大小，而使用 Spring 核心所需要的資源也是很小的，而 Spring 是個非侵入性 Nonintrusive 框架，它的目的之一，是讓應用程式不感受到框架的存在，減低應用程式從框架移植時的負擔。

- 容器

    Spring 核心本身是個容器，管理物件的生命週期、物件的組態、相依注入等，並可以控制物件在創建時是以 原型（Prototype） 或 單例（Singleton） 的方式來建立。

- IoC

    Spring 的核心概念是IoC，更具體而易懂的名詞是依賴注入（Dependency Injection），使用 Spring，您不必自己在程式碼中維護物件的依賴關係，只需在組態檔中加以設定，Spring 核心容器會自動根據組態將依賴注入指定的物件。

除了這些特性之外，Spring 的目標是實現一個全方位的整合框架，在 Spring 框架下實現多個子框架的組合，這些子框架之間彼此可以獨立，也可以使用其它的框架方案加以替代，Spring 希望提供 one-stop shop 的框架整合方案。

- AOP 框架 

    Spring 最為人重視的另一方面是支援 AOP，然而 AOP 框架只是 Spring 支援的一個子框架，說 Spring 框架是 AOP 框架並不是一件適當的描述，人們對於新奇的 AOP 關注映射至 Spring 上，使得人們對於 Spring 的關注集中在它的 AOP 框架上，雖然有所誤解，但也突顯了 Spring 的另一個令人關注的特色。

- 持久層 

    Spring 提供對持久層的整合，如 JDBC、O/R Mapping工具（Hibernate、iBATIS）、事務處理等。

- Web 框架 

    Spring 也提供 Web 框架的解決方案，但您也可以將自己所熟悉的 Web 框架與 Spring 整合，像是 Struts、Webwork 等，都可以與 Spring 整合而成為適用於自己的解決方案。

在 Spring 3.x 或之前的版本中，可以在 Spring 官方網站直接下載 JAR 檔案，然而從 4.x 開始，推薦使用 Gradle 或 Maven 來下載，Spring 本身是使用 Gradle 來管理，為了要能更方便地使用 Spring，認識 Gradle 是必要的課題。


在实践中，通常使用 Spring + SpringMVC + MyBatis 组合进行项目开发，简称 SSM 框架。

EJB - Enterprise Bean 作为 J2EE 的一部分，定义了一个用于开发基于组件的企业多重应用程序的标准，包括网络服务支持和核心开发工具 SDK。

在 J2EE 容器里，EJB 是核心，分别有 Session Bean，Entity Bean、Message Driven Bean。但是 EJB 是一种古老的、繁琐的技术标准，现如今基本已经被淘汰了。因为 EJB 的繁琐、难用，催生了 Spring 的出现彻底革了 EJB 的命，不然怎么说是 Java 的春天来了呢！

Sun 公司在 1998 年发表 JDK 1.2 版本的时候，使用了新名称 Java 2 Platform，并分为标准版 Standard Edition 和企业版 Enterprise Edition，分别简写 J2SE、J2EE，还有微型版 MicroEdition，J2ME。

运行 J2EE 程序的就是 J2EE 容器，具体而言 J2EE 这套规范定义了许多内容：

- Servlet：定义了如何处理 Web 请求，这个相信大家最熟悉
- Java Server Faces：定义了如何使编写 Web 界面
- JAX-RS：定义了如何编写 RESTFul 的接口
- EJB：定义了如何编写“企业Bean”
- JPA：定义了如何编写 ORM 和数据存取
- JTA：定义了如何编写事务相关的代码
- JMS：定义了如何编写消息队列程序
- CDI：定义了如何编写依赖注入
- JAX：定义了如何编写XML程序
- JAX-WS: 定义了如何编写基于XML的网络服务，即SOAP

但是 J2EE 它实在太庞大了，要完全掌握和使用需要付出很多代价。而这些规范又很多具体实现，如 Apache Tomcat 实现了 Servlet 和 JSP。而 JBoss，Weblogic 实现了 EJB 等，大部分数据库里面都有 JDBC 驱动。

Spring 作为一个开源框架，于 2003 年兴起，是一个替代 J2EE Bean 的轻量级开发框架，由 Rod Johnson 在其著作 Expert One-On-One J2EE Development and Design 中阐述的部分理念和原型衍生而来。它是为了解决企业应用开发的 EJB 复杂性而创建的。Spring 使用基本的 JavaBean 来完成以前只可能由 EJB 完成的事情。然而，Spring 的用途不仅限于服务器端的开发。从简单性、可测试性和松耦合的角度而言，任何 Java 应用都可以从 Spring 中受益。简单来说，Spring 是一个轻量级的控制反转 IoC 和面向切面 AOP 的容器框架。

以下是 Spring 包括的一部分常用组件模块：

- spring-core：Spring 的 Bean 的管理，控制反转和程序上下文
- spring-mvc: Web 开发中的 model-view-controller 开发模式实现
- spring-data: 数据层访问和封装
- spring-boot: spring 全家桶自助配置和部署管理工具
- spring-batch：一个简单的批处理框架
- spring-cloud：支持与许多云服务接口的整合
- spring-security：认证和权限管理

Spring 中其实大量使用或者实现了 JavaEE 标准。比如 spring-mvc 是在 Servlet 基础之上的封装。Spring 本身并不提供容器，而是支持使用任何支持 Servlet 标准的容器，如 Tomcat，Jetty 等。归根到底 Spring 只是想更好的解决实际问题。JavaEE 的实现做得好的就用，做得不好的用比较恰当的方式独立实现或者封装。

Spring MVC 属于 Spring FrameWork 的后续产品，已经融合在 Spring Web Flow 里面。Spring MVC 分离了控制器、模型对象、分派器以及处理程序对象的角色，这种分离让它们更容易进行定制。



## AOP 切面编程
- [Spring的AOP实现](https://www.jdon.com/AOPdesign/springaop.html)
- [AOP面向方面(切面)编程](https://www.cnblogs.com/pilihaotian/p/4868046.html)
- [Comparing Spring AOP and AspectJ](https://www.baeldung.com/spring-aop-vs-aspectj)
- [SpringBoot - 面向切面编程 AOP 的配置和使用（附样例）](https://www.hangge.com/blog/cache/detail_2527.html)

AOP - Aspect Oriented Programming 面向切面编程，通过预编译方式、运行期间动态代理实现程序功能的统一维护的一种技术。

可以形象地说，IoC 是散点状的代码解耦，而 AOP 则是切面解耦，将众多散点汇聚后再统一解耦处理。

将通用需求功能从不相关类之中分离出来，同时，能够使得很多类共享一个行为，一旦行为发生变化，不必修改很多类，只要修改这个行为就可以。AOP 就是这种实现分散关注的编程方法，它将关注点封装在切面 Aspect 中。

AOP 是面向对象编程 OOP 的延续，是软件开发中的一个热点，也是 Spring 框架中的一个核心技术，是函数式编程的一种衍生范型。利用 AOP 可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高了开发的效率。

AOP 与 IoC 都可以解耦，IoC 通过容器接口将依赖移除核心代码的依赖部分，而 AOP 则是针对业务处理过程中的切面进行提取，它所面对的是处理过程中的某个步骤或阶段，以获得逻辑过程中各部分之间低耦合性的隔离效果。

假设在一个应用系统中，并发访问一个共享的数据。

首先，将这个数据封装在数据对象中，称为 Data Class，同时，将有多个访问类，专门用于在同一时刻访问这同一个数据对象。为了完成上述并发访问同一资源的功能，需要引入锁 Lock 的概念，也就是说，某个时刻，当有一个访问类访问这个数据对象时，这个数据对象必须上锁 Locked，用完后就立即解锁 unLocked，再供其它访问类访问。

使用传统的编程习惯，我们会创建一个抽象类，所有的访问类继承这个抽象父类，如下：

    abstract class Worker {
        abstract void locked();
        abstract void accessDataObject();
        abstract void unlocked();
    }

Java 只提供了单继承，因此具体访问类只能继承这个父类，如果具体访问类还要继承其它父类，比如另外一个如 Worker 的父类，将无法方便实现。重用被打折扣，具体访问类也只能被重用在有锁的相关场合，重用范围很窄。

继承需要我们设计一个基类，如果我们要重用到多个地方可能需要修改这个基类。继承 Inheritance == 难以在后期再进行修改，无弹性代码。

仔细研究这个应用的锁，它其实有下列特性：

- 锁的功能不是具体访问类的首要或主要功能，访问类主要功能是访问数据对象，例如读取数据或更改动作。
- 锁的行为其实是和具体访问类的主要功能可以独立、区分开来的。
- 锁的功能是这个系统的一个纵向切面，涉及许多类、许多类的方法。

因此，一个新的程序结构应该是关注系统的纵向切面，如这个应用的锁功能这部分，这个新的程序结构就是 aspect 切面。在这个应用中，锁的 aspect 应该提供一些必备的功能，对被访问对象实现加锁或解锁功能，以保证所有在修改数据对象的操作之前能够调用 lock() 加锁，在它使用完成后，调用 unlock() 解锁。


委托 Delegation 是一个处理横切关注的好办法，委托和组合分享一个通用功能，但是我们需要在很多地方调用这个委托对象，显得繁琐。

动态代理利用 Java 的反射机制，可以在运行时刻将一个对象实例的方法调用分派到另外一个对象实例的调用。动态代理模式可以在运行时刻创建继承某个接口的类型安全的代理对象，而无需在代码编译时编译这些代理类代码。是 AOP 的良好实现。

AOP 允许我们以模块化关注横向点并形成对象，称为 Aspect，这样使用 Aspect 能够创建一个干净解耦的代码。

AOP 相关概念：

- **Concerns** 关注 – 核心关注、跨切面关注，核心关注是有关业务逻辑，比如生成工资单，让员工记录，做银行转帐。跨切面关注是配合业务的一些活动任务，如日志 缓存等。
- **Joinpoint** 连接点 – 是在执行时的切入点，Aspect 也就是跨切面关注的一些功能要加入主要业务功能的地方，一个连接点可以是一个被调用的方法。
- **Advice** 建议 – 每个 Aspect 都有一个目标，它的任务是什么，这个任务会被切入到哪个连接点，这些 Advice 能够定义 Aspect 什么时候执行任务？
- **Pointcut** 切入点 – 一个系统有很多连接点，但是并不是所有连接点都需要被选择切入 Aspect，需要选择连接点介入。
- **Aspect** 方面 – Advice 和 Pointcut 定义了一个方面 Aspect。Advice 定义了 Aspect 的任务和什么时候执行它，而切入点 Pointcut 定义在哪里具体地方切入，也就是说，Aspect 定义了它是什么东西 什么时候切入和在哪里切入。
- **Target** 目标 – 目标是一个被切入的地方，它一般是核心关注，业务功能。
- **Proxy** 代理 – 当一个 advice 应用到目标对象时，这时一个代理对象将被创建. AOP 容器创建和管理代理对象的生命周期。
- **Weaving** 织入 – Weaving 是一个混合横向方面到目标业务对象的过程，织入可以是在编译时间，也可以在运行时间使用 classload，Spring AOP 缺省是在运行时间。

以 Web 程序开发为例，由于 HTTP 协议的无状态性，通常需要把用户的状态信息保存在 Session 中。

因此，一些应用场景需要用户登录授权后，才能继续操作。

传统实现方法，会在每个业务操作之前，加入授权检验代码：

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        HttpSession session = request.getSession();
        if(session.getAttribute("user")==null){
            request.getRequestDispatcher("login.jsp").forward(req, resp);
        }
        doSpecialBussinessLogic();
    }

以这种方法实现的逻辑，在大型项目中将会有一个不亚于灾难性的影响，因为要实现同样逻辑的地方很多，都按以上的方法进行，这必然引起了代码的大量重复和混乱。

在这里登录检查逻辑并非是主要逻辑，主逻辑是 doSpecialBussinessLogic()，主要逻辑和非主要逻辑的混乱是传统编程方法的一个主要局限。

我在处理这种问题采用的是一种自称为**管道汇聚**或者叫 Pipe Centralizer 编程模式，将所有需要使用相同功能的地方用一个函数 centerAPI 替代，而这个函数集中处理这一功能，这就像一个管道，其它调用这个函数的地方相当地一个小管道。这个函数的引入相当于汇聚了其它小管道，在功能逻辑需要修改时，只需要更新这个函数即可。

AOP 的出现，为以上问题提供了一个很好的解决方案。下面是用 Aspectj 完成的登录检查逻辑的实现：

    public aspect LoginCheckAOP 
    {
        pointcut loginCheck(HttpServletRequest req, HttpServletResponse resp):(execution(void *..*Action.doPost(HttpServletRequest, HttpServletResponse))) && args(req,resp);

        public before(HttpServletRequest req, HttpServletResponse resp) : loginCheck (req,resp) 
        {
            HttpSession session = request.getSession();
            if(session.getAttribute("user")==null){
                request. getRequestDispatcher("login.jsp").forward(req,resp);
            }
        }
    }

我们定义了一个切面 LoginCheckAOP，Aspectj 的编译器通过名字匹配自动把登录检查逻辑的代码插入到需要的地方。

使用 AOP 方法进行登录检查有以下几条好处： 

- 只需要在一个切面 LoginCheckAOP 地方放置所有的需要用于检查的功能代码。 
- 插入和删除检查代码是很容易的。可以轻易地重新实现不同的检查方面，而不用对其它代码进行修改。 
- 在任何需要的地方登录检查，即使增加了新方法或新类。这可以消除人为的错误。同时知道所有登录检查代码被删除了，并且当我们从构建配置中删除方面时不会忽略任何东西。
- 有一个可重复使用的方面，它可以被应用和升级。


Spring Boot AOP 示范，在 Spring 的基础上对 AOP 的配置提供了自动化配置解决方案，我们只需要修改 pom.xml 文件，添加起步依赖 spring-boot-starter-aop 即可。

    <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-aop -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-aop</artifactId>
        <version>2.3.3.RELEASE</version>
    </dependency>

    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-aop
    @Grapes(
        @Grab(group='org.springframework.boot', module='spring-boot-starter-aop', version='2.3.3.RELEASE')
    )


首先创建一个 UserService，假设在 com.example.demo.service，后面创建切入点时使用，内容如下：

    @Service
    public class UserService {
       public String getUserById(Integer id) {
           System.out.println("getUserById(" + id + ")...");
           // 等待2秒
           try {
               Thread.sleep(2000);
           }
           catch(InterruptedException e) {
               e.printStackTrace();
           }
           return "hangge";
       }
    }

接着定义一个切面类，使用到的代码注解说明：

- @Aspect 注解：表明这是一个切面类。

- @Pointcut 注解：表明这是一个切入点。

    - execution 中的第一个 * 表示方法返回任意值
    - 第二个 * 表示 service 包下的任意类
    - 第三个 * 表示类中的任意方法，括号中的两个点表示方法参数任意，即这里描述的切入点为 service 包下所有类中的所有方法。

- @Before 注解：表示这是一个前置通知，该方法在目标方法之前执行。

    - 通过 JoinPoint 参数可以获取目标方法的方法名、修饰符等信息。

- @After 注解：表示这是一个后置通知，该方法在目标执行之后执行。

- @AfterReturning 注解：表示这是一个返回通知，在该方法中可以获取目标方法的返回值。

    - returning 参数是指返回值的变量名，对应方法的参数。
    - 注意：本样例在方法参数中定义 result 的类型为 Object，表示目标方法的返回值可以是任意类型。若 result 参数的类型为 Long，则该方法只能处理目标方法返回值为 Long 的情况。

- @AfterThrowing 注解：表示这是一个异常通知，即当目标方法发生异常，该方法会被调用。

    - 样例中设置的异常类型为 Exception 表示所有的异常都会进入该方法中执行。
    - 若异常类型为 ArithmeticException 则表示只有目标方法抛出的 ArithmeticException 异常才会进入该方法的处理。

-  @Around 注解：表示这是一个环绕通知。环绕通知是所有通知里功能最为强大的通知，可以实现前置通知、后置通知、异常通知以及返回通知的功能。

    - 目标方法进入环绕通知后，通过调用 ProceedingJointPoint 对象的 proceed 方法使目标方法继续执行，开发者可以在次修改目标方法的执行参数、返回值值，并且可以在此目标方法的异常。

代码实现：

    @Aspect
    @Component
    public class LogAspect {
        // 定义一个切入点
        @Pointcut("execution(* com.example.demo.service.*.*(..))")
        public void pc1(){
     
        }
     
        // 前置通知
        @Before(value = "pc1()")
        public void before(JoinPoint jp) {
            String name = jp.getSignature().getName();
            System.out.println(name + "方法开始执行...");
        }
     
        // 后置通知
        @After(value = "pc1()")
        public void after(JoinPoint jp) {
            String name = jp.getSignature().getName();
            System.out.println(name + "方法执行结束...");
        }
     
        // 返回通知
        @AfterReturning(value = "pc1()", returning = "result")
        public void afterReturning(JoinPoint jp, Object result) {
            String name = jp.getSignature().getName();
            System.out.println(name + "方法返回值为：" + result);
        }
     
        // 异常通知
        @AfterThrowing(value = "pc1()", throwing = "e")
        public void afterThrowing(JoinPoint jp, Exception e) {
            String name = jp.getSignature().getName();
            System.out.println(name + "方法抛异常了，异常是：" + e.getMessage());
        }
     
        // 环绕通知
        @Around("pc1()")
        public Object around(ProceedingJoinPoint pjp) throws Throwable {
            String name = pjp.getSignature().getName();
            // 统计方法执行时间
            long start = System.currentTimeMillis();
            Object result = pjp.proceed();
            long end = System.currentTimeMillis();
            System.out.println(name + "方法执行时间为：" + (end - start) + " ms");
            return result;
        }
    }

切面配置完成后，接下来在 Controller 中创建接口调用 UserService 中的方法。

    @RestController
    public class HelloController {
     
        @Autowired
        UserService userService;
     
        @GetMapping("/test")
        public String test(Integer id) {
            return userService.getUserById(id);
        }
    }

运行样例测试

（1）使用浏览器访问如下地址： http://localhost:8080/test?id=11
（2）查看控制台信息，可以发现 LogAspect 中的代码动态地嵌入目标方法中执行了。




## IoC 依赖倒置原则
- 依赖倒置原则 - https://www.cnblogs.com/gaochundong/p/dependency_inversion_principle.html
- Inversion of Control Containers and the Dependency Injection pattern - https://www.martinfowler.com/articles/injection.html

Spring 的核心概念是 IoC，抽象概念是「依賴關係的轉移」，像是「高層模組不應該依賴低層模組，而是模組都必須依賴於抽象」是 IoC 的一種表現，「實現必須依賴抽象，而不是抽象依賴實現」也是 IoC 的一種表現，「應用程式不應依賴於容器，而是容器服務於應用程式」也是 IoC 的一種表現。

IoC 全名 Inversion of Control，如果中文硬要翻譯過來的話，就是「控制反轉」。初看 IoC，從字面上不容易瞭解其意義，我覺得要瞭解 IoC，要先從 Dependency Inversion 開始瞭解，也就是依賴關係的反轉。

Robert Martin 《The Dependency Inversion Principle》 有清楚的解釋，其中提到两条重要概念： 高层模块不应该依赖于低层模块，它们二者都应该依赖于抽象； 抽象不应该依赖于细节，细节应该依赖于抽象。

    A. High level modules should not depend upon low level modules. Both shoulddepend upon abstractions.
    B. Abstractions should not depend upon details. Details should depend uponabstractions.

依赖倒置原则（Dependency Inversion Principle）是很多面向对象技术的根基。它特别适合应用于构建可复用的软件框架，其对于构建弹性地易于变化的代码也特别重要。并且，因为抽象和细节已经彼此隔离，代码也变得更易维护。

举实例说明，现在有个程序需求是实现一个记录写入的组件，目前只有软盘作记录，那么组件实现可能会有这样一个方法

    public function saveToFloppy(String content){
        ...
    }

但这不是一个好的实现，因为依赖了具象，组件的实现依赖了存储介质，这就是高耦合的 Type 1 IoC，具有強的侵入性，使用它來實現依賴注入會使得組件相依於容器（框架），降低組件的重用性 。如果需求进一步变化了，现在需要写入USD移动磁盘了，那么程序逻辑就不能很好满足了，必需修改现有代码匹配新需求。但更好的的方法是按前面提到的两条依赖原则来实现，组件不应该依赖具体的存储介质。把涉及存储介质的部分分享出去，组件只关心高层次的抽象功能。即组件只关心如果实现实现定稿记录的动作，而至于写入到什么介质则交由具体底层去实现，那么这些底层可以叫做 FloppyWriter、UsbDiskWriter，它们关心写的动作。而抽象后的组件则将重心转移到如何协调这些底层的调用，这就需要进行一个抽象接口的统一。可以规定接口为 IDeviceWriter，实现一个 saveToDevice 方法，调用这个方法来实现写入动作，那么抽象后的组件应该这这样实现：

    public class FloppyWriter implements IDeviceWriter { 
        public void saveToDevice() { 
            .... 
        } 
    } 

    public class UsbDiskWriter implements IDeviceWriter { 
        public void saveToDevice() { 
            .... 
        } 
    }

依賴注入在 Martin Fowler 的文章中談到了三種實現方式：Interface injection、Setter injection 與 Constructor injection，对应稱為 Type 1 IoC、Type 2 IoC 與 Type 3 IoC。Setter 和 Constructor 两种方式区别在于后者通过构造函数实现依赖注入，前者则使用专用方法来实现。Spring 鼓励使用 Type 2 IoC 即 Setter injection 方式。

依赖注入 DI 是与 IoC 密切联系的，两种松散耦合编程技术，依赖注入更多的是基于 Java 的标注与反射技术。

依赖注入最明的好处就是，在定义 Bean 对象时，直接在参数列表声明依赖的类型，Spring 在实例化 Bean 的过程中或者调用方法时，自动通过反射技术将对应类型的依赖注入。在应用程序的开发角度看，不必管理依赖对象，只要在需要的时候声明一下，Spring 将会自动送货上门一样。


OOP 程序设计模式六大原则：

- **迪米特法则** Law of Demeter 又叫作最少知识原则 Least Knowledge Principle，就是说一个对象应当对其他对象有尽可能少的了解，不和陌生人说话。
- **单一职责原则** Single Responsibility Principle 一个类只负责一个功能领域中的相应职责，或者可以定义为：就一个类而言，应该只有一个引起它变化的原因。
- **接口隔离原则** Interface Segregation Principle 使用多个专门的接口，而不使用单一的总接口，即客户端不应该依赖那些它不需要的接口。
- **依赖倒置原则** Dependence Inversion Principle 是程序要依赖于抽象接口，不要依赖于具体实现。简单的说就是要求对抽象进行编程，不要对实现进行编程，这样就降低了客户与实现模块间的耦合。
- **开闭原则** Open-Closed Principle 一个软件实体应当**对扩展开放，对修改关闭**，即软件实体应尽量保持在不修改原有代码的情况下进行扩展，也种能力和依赖倒置是相通的
- **里氏替换原则** Liskov Substitution Principle 阐述了有关继承的一些原则，软件工程大师 Robert C. Martin 在 2002 出版的《Agile Software Development Principles Patterns and Practices》将里氏代换原则简化为一句话："Subtypes must be substitutable for their base types"，也就是说，子类必须能够替换成它们的基类，这一观点与接口隔离原则有相通之处。



## Spring HelloWorld
- https://github.com/spring-projects
- [Spring Initializr](https://start.spring.io/)

有了 IoC 的概念后，可以尝试使用 Spring IoC 核心容器，**BeanFactory** 與 **ApplicationContext** 这两个容器的運用是了解 Spring 的重點所在。

使用 Spring 框架的开发中把所有组件称为 Bean，可以把 Spring 容器理解成一个大型工厂，Bean 就是该工厂的产品，工厂 Factory 是一种最基本的 Spring 容器，里面能生产出来什么样的产品完全取决于配置文件。

Spring 容器对 Bean 没有特殊要求，不像 JavaBean 一样遵循一些规范。但对于 Type 2 IoC 提供 setter 方法是基本的做法。

Spring 常见的容器有两种类型，ApplicationContext 在 BeanFactory 的基础上构建，增加了更多企业级的应用服务。

BeanFactory 负责读取 Bean 配置文件，生成组件及组件关系的管理维护，主要是 Bean 的生命周期的管理，对于简单应用，BeanFactory 容器提供的功能就已經够用，但是若要利用到 Spring 在框架上的一些高级容器功能，可以使用 ApplicationContext，而 BeanFactory 通常用于加载资源，像是预备队。

ApplicationContext 和 BeanFactory 的基本功能很相似，能读取 Bean 配置文件，维护 Bean 之间的关系，并且提供更完整的框架功能：

- ApplicationContext 提供更方便的取得资源文件方法。
- ApplicationContext 提供字符串的解析方法，支持 Internationalization, I18N 国际化翻译。
- ApplicationContext 可以发布事件，Bean 可以订阅感兴趣的事件。

Rod Johnson 建议使用 ApplicationContext 來取代 BeanFactory，最常使用的大概是以下三种实现：

- **FileSystemXmlApplicationContext** 可指定相对目录读取 XML 配置文件；
- **ClassPathXmlApplicationContext** 从 Classpath 中读取 XML 配置文件；
- **XmlWebApplicationContext** 在 Web 应用中目录结构中读取文件；

写代码前需要下載 Spring Framework，目前已经托管到 Github 上，最新版本是 v5.2.8.RELEASE。下载解包后，在 dist 目录下可以找到 Spring 框架所需要的 jar 文件，spring-core.jar 是 Spring 的核心。

还有其它模块 spring-aop.jar、spring-webmvc.jar 等等，需要时引用，在 Spring 1.2 之後，原先 spring-core.jar 中 Bean 相关的一些组件已移至 spring-beans.jar。

下面练习一个 Spring 程式，使用 spring-core.jar、spring-beans.jar，以及 Apache 相关依赖 commons-logging.jar 加至 Classpath 的路徑中。

目前，流行的做法是使用 Spring Initializr 服务来生成工程模板，使用 Maven、Gradle 等工具来管理项目的依赖，这样就不必手动处理依赖包。

如果在命令行中指定 classpath，需要注意，-cp 和 -classpath 一样，是指定依赖的路径，通常是类库 jar 包之类，详细到 jar 包文件名。Windows 上用分号 ; 作多个 jar 文件的分隔符，Linux 上则是用分号。不支持通配符，需要列出所有 jar 包。当前目录最好也加上，用英文句点代表当前路径。如果启动在当前目录，不指定当前目录，可能引发找不到或无法加载主类。

    javac -cp .;libs/spring-core.jar;libs/spring-beans.jar -d . SpringDemo.java HelloBean.java
    javac -cp .;libs/spring-core.jar;libs/spring-beans.jar;libs/spring-context.jar -d . SpringDemo.java HelloBean.java
    java  -cp .;libs/spring-core.jar;libs/spring-beans.jar;libs/spring-context.jar;libs/commons-logging-1.2.jar;libs/spring-expression.jar com.coding.SpringDemo
    java  -Djava.ext.dirs=c:\libs com.coding.SpringDemo

介绍一下 java.ext.dirs 参数，Java 系统属性 java.ext.dirs 指定的目录的类由 ExtClassLoader 加载器加载，如果您的程序没有指定该系统属性，那么该加载器默认加载 $JAVA_HOME/lib/ext 目录下的所有 jar 文件。但如果你手动指定系统属性且忘了把 $JAVA_HOME/lib/ext 路径给加上，那么 ExtClassLoader 不会去加载系统默认类库。或者你可以把需要加载的 jar 都扔到 %JRE_HOME%/lib/ext 下面，这个目录下的 jar 包会在 Bootstrap Classloader 工作完后由 Extension Classloader 来加载。非常方便，非常省心。:)

如果打包成 jar，就不能使用 classpath 指定其他依赖 jar 包了，这是因为运行 jar 包是由 AppClassloader 来加载运行的。Java -jar 命令执行的程序中 AppClassloader 只关注要运行 jar 包范围内的类，classpath 参数会失效。但可以使用 Bootstrap Classloader 来加载依赖 jar 包，命令用法参考：

    -Xbootclasspath: 完全取代系统Java classpath，最好不用。
    -Xbootclasspath/a: 在系统class加载后加载，一般用这个。
    -Xbootclasspath/p: 在系统class加载前加载，注意使用，可能和系统类冲突。

    java -Xbootclasspath/a:some.jar;some2.jar; -jar test.jar

    java -Xbootclasspath/a:some.jar:some2.jar: -jar test.jar

注意 Win32 系统每个 jar 用分号隔开，而 Unix 系统下用冒号隔开。

除了以上方法加载依赖包外，还可以用 AppClassloader 来加载，这种方式需要在 MANIFEST.MF 中添加 Class-Path 参数来指定依赖包的位置。

    Class-Path: libs/spring-core.jar libs/spring-beans.jar libs/spring-context.jar libs/commons-logging-1.2.jar

另：如果 META-INF 下包含 INDEX.LIST 文件的话，可能会使 Class-Path 配置失效。INDEX.LIST 是 Jar 打包工具打包时生成的索引文件，删除对运行不产生影响。


第一个 Spring 程式定义一个 Component 组件，它只是简单输出招呼信息的 JavaBean。XmlBeanFactory 在 3.1 以后已经被废弃，不再推荐使用，以下使用的是 DefaultListableBeanFactory。

首先是创建一个 HelloBean：

    package com.coding;

    public class HelloBean { 
        private String helloWord; 
     
        public void setHelloWord(String helloWord) { 
            this.helloWord = helloWord; 
        } 
        public String getHelloWord() { 
            return helloWord; 
        } 
    }

然后是一个 Spring 应用主程序，负责加载 Beans 配置文件，并实例化 HelloBean 输出信息：

    package com.coding;

    import org.springframework.core.io.FileSystemResource;
    import org.springframework.core.io.Resource;
    import org.springframework.core.io.ClassPathResource;
    import org.springframework.beans.factory.BeanFactory;
    import org.springframework.beans.factory.support.DefaultListableBeanFactory;
    // import org.springframework.beans.factory.xml.XmlBeanFactory; 
    import org.springframework.beans.factory.xml.XmlBeanDefinitionReader; 
    import org.springframework.context.ApplicationContext;
    import org.springframework.context.support.FileSystemXmlApplicationContext; 

    public class SpringDemo {
        final static String CONFIG = "beans-config.xml";
        public static void main(String[] args) { 
            // Resource rs = new FileSystemResource(CONFIG);
            // BeanFactory factory = new XmlBeanFactory(rs);

            // Resource rs = new ClassPathResource(CONFIG);
            // DefaultListableBeanFactory factory = new DefaultListableBeanFactory(); 
            // XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(factory);
            // reader.loadBeanDefinitions(rs);
            // HelloBean hello = (HelloBean) factory.getBean("helloBean");

            ApplicationContext context = new FileSystemXmlApplicationContext(CONFIG);
            HelloBean hello = (HelloBean) context.getBean("helloBean");
            System.out.println(hello.getHelloWord());
        }
    }

BeanFactory 是 Factory 工厂编程模式中的一个接口，XmlBeanFactory 或 DefaultListableBeanFactory 实现用来实例化配置文件中的 Bean 对象，在 Spring 1.2 中，XmlBeanFactory 只接受 Resource 接口实例对象，如：

- ClassPathResource
- FileSystemResource
- InputStreamResource
- ServletContextResource
- UrlResource

它们分别表示来自不同配置文件类型的 Bean，使用 FileSystemResource 可以指定磁盘中的配置文件路径，使用 ClassPathResource 则从环境变量 classpath 指定的路径中加载配置文件。

从 IoC 依赖管理的角度来看，读取配置文件这个动作的产生，就是因为 Spring 需要将依赖的部分移出核心代码，Spring 提供一个接口标准，所有 Bean 只需要按指定的配置格式提供配置文件。再由 Spring 的工厂类负负责读取并实例化，然后，将由 Spring 的 IoC 容器进行管理。

而程序中，就可以通过工厂的 getBean() 方法读取指定别名的 Bean 实例。配置文件参考如下，保存在程序运行的根目录下即可：

    <?xml version="1.0" encoding="UTF-8"?> 
    <!DOCTYPE beans PUBLIC "-//SPRING/DTD BEAN/EN" "http://www.springframework.org/dtd/spring-beans.dtd">
    <beans> 
        <bean id="helloBean" class="com.coding.HelloBean">
            <property name="helloWord">
                <value>Hello Spring 5.1.0!</value>
            </property> 
        </bean> 
    </beans>

假设，程序需要更新了，需要改变打印的信息，那么只要更改 beans-config.xml 就可以实现 Bean 的行为修改，不用修改主要的程式。从依赖解耦的角度来说，这种程序结构是极好的，因为配置的修改并没有影响到程序其它功能的正常运行，并且实现了需求，这就是 Spring IoC 控制反转带来的松散耦合程序开发的最大优势。

当然，以上这种使用 Bean 的方法是比较原始的，因为配置 XML 文件档也是件麻烦事，对于一个大工程，配置文件可以会超过代码文件，那可真算是灾难。在更先进的 String Book 工具的辅助下，你可以使用更方法的 Java 注解编程来替代 XML 配置文件，只需要在返回对象的方法中使用 @Bean 注解，Spring 就感知到这个方法有一个 Bean 要加载！这就是 Spring Dependency Injection 依赖注入带来的好处。


## ApplicationContext 容器功能

ApplicationContext 除了具备 BeanFactory 基本的容器管理功能之外，还支持更多高级功能，这里主要介绍资源文件的获取、字符串国际化翻译、事件处理。

Spring 提供资源的泛型访问 Generic access，ApplicationContext 继承自 ResourceLoader 接口，可以使用 **getResource()** 方法并指定 URL 来获取一个 Resource 实例对象。

Spring 有内部的 "classpath:" 协议，对应 **ClassPathResource** 实例如果是 CLASSPATH 目录的资源。也可以指定标准的 URL 如 file: 或 http: 等，对应返回 **FileSystemResource** 实例对象，或者可以如下指定 WEB-INF，从 Servlet 上下文环境中加载一個 **ServletContextResource** 實例：

    import org.springframework.core.io.*；

    Resource resource = context.getResource("classpath:admin.properties");
    Resource resource = context.getResource("file:c:/springtest/conf/admin.properties");
    Resource resource = context.getResource("WEB-INF/conf/admin.properties"); 

取得 Resource 实例，可以使用 getFile()、getInputStream() 等方式來操作文件的数据，可以使用 exists() 方法來测试资源文件是否存在。


ApplicationContext 还继承了 org.springframework.context 包下的 **MessageResource** 接口，依赖包 spring-messaging-5.1.0.RELEASE.jar。可以使用 **getMessage()** 来获取不同语言环境下的信息数据以实现国际化内容翻译。可以使用 **ResourceBundleMessageSource** 或 **ReloadableResourceBundleMessageSource** 來配置携带国际化内容的 Bean，首先在配置文件 beans-config.xml 添加一个 Bean 定义：

    <bean id="messageSource" 
      class="org.springframework.context.support.ResourceBundleMessageSource"> 
        <property name="basename"> 
            <value>messages</value> 
        </property> 
    </bean> 

basename 屬性用來指定内容文件名称，这里设置的是 messages 表示要用到的内容文件将按 messages_en_US.properties、messages_zh_TW.properties 这样命名。

将以下两行內容分别保存到以上提到的这两文件中，注意文件扩展名： 

    userLogin=User {0} login at {1}

    userLogin=使用者 {0} 於 {1} 登入

其中的 {0} {1} 是占位符号，会在程序获取内容时替换为传入的参数值，ResourceBundleMessageSource 会使用 JDK 的 **ResourceBundle** 来读取内容文件。如果需要进行转码操作，可以使用 JDK 提供的 **native2ascii** 转码工具。

    native2ascii messages_zh_TW.properties messages_zh_TW_ascii.properties

结合指定的 Locale，使用 getMessage() 就会返回语言对应的内容。在简体中文 Windows 系统上，要显示台湾地区的 BIG5 码，需要使用 **chcp 950** 命令修改掉默认的 936 简体中文代码页。

    package com.coding;

    import java.util.Calendar;
    import java.util.Locale;
    import org.springframework.context.ApplicationContext;
    import org.springframework.context.support.ClassPathXmlApplicationContext;

    public class SpringDemo {
        public static void main(String[] args) { 
            ApplicationContext context = new ClassPathXmlApplicationContext("beans-config.xml");
            Object[] arguments = new Object[] { "Guest", Calendar.getInstance().getTime() };
            System.out.println(context.getMessage("userLogin", arguments, Locale.US));
            System.out.println(context.getMessage("userLogin", arguments, Locale.TAIWAN));
            System.out.println(context.getMessage("userLogin", arguments, Locale.SIMPLIFIED_CHINESE));
        }
    }

在 Spring 应用程序执行过程中，ApplicationContext 会发布一系列的事件，事件对象来自上下方 org.springframework.context 包的 **ApplicationEvent** 子类：

- **ContextStartedEvent**   调用 ConfigurableApplicationContext 接口的 start 方法时触发。
- **ContextStoppedEvent**   调用 ConfigurableApplicationContext 接口的 close 方法时触发。
- **ContextClosedEvent**    在 ApplicationContext 关闭时触发。
- **ContextRefreshedEvent** 在 ApplicationContext 初始化或 Refresh 时触发。
- **RequestHandledEvent**   在 Web 应用中，接收到客户请求时触发，只能用于 DispatcherServlet 的 Web 应用。
- **ServletRequestHandledEvent**    在 Web 应用中，接收到客户请求时触发，只能用于 DispatcherServlet 的 Web 应用。

事件基于 Observer 观察者编程模式实现，观察者模式的特点就是，谁关心谁申明，需要处理什么事件就在配置文件中设置相应的监听器。ApplicationContext 完成 Bean 的装配和初始化后，会尝试创建一个 EventMultiCaster，默认实现了一个 **SimpleApplicationEventMulticaster**，它就是事件管理中心，负责接收事件的派发。

如果要实现 ApplicationContextEvent 抽象类，该抽象类中只有一个构造函数，并且带有一个 Object 类型的参数作为事件源，并且该事件源不能为 null，因此我们需要在自己的构造函数中执行 super(Object)。

在配置文件中使用 ApplicationListener 接口定义一个 Bean，ApplicationContext 在事件触发时将 ApplicationEvent 实例发往这些 Bean 实例。

当监听器接收到一个事件的时候，就会执行它的 **onApplicationEvent()** 方法。由于 Spring IoC 中的事件模型是一种简单的、粗粒度的监听模型，当有一个事件到达时，所有的监听器都会接收到，并且作出响应，如果希望只针对某些类型进行监听，需要在代码中进行控制。

Spring 读取配置文件之后，利用反射，将所有实现 ApplicationListener 的 Bean 找出来，注册为容器的事件监听器。触发事件的时候，Spring 会逐个调用事件监听器。

尝试在配置文件 beans-config.xml 添加一个 bean 配置：

    <bean id="listener" class="com.coding.HelloListener"/>

接下来实现一个 HelloListener 来监听 ApplicationEvent：

    package com.coding;

    import org.springframework.context.ApplicationEvent;
    import org.springframework.context.ApplicationListener;
    import org.springframework.context.event.ContextStartedEvent;
    import org.springframework.context.event.ContextStoppedEvent;

    public class HelloListener<ApplicationEvent> implements ApplicationListener 
    {
        @Override
        public void onApplicationEvent(ApplicationEvent e) {
            if (e instanceof ContextStartedEvent){
                System.out.println("Spring Started!");
            }else if (e instanceof ContextStoppedEvent){
                System.out.println("Spring Stopped!");
            }else{
                System.out.println("Spring Event:"+e.getClass().toString());
            }
        }
    }

对于 SpringDemo 主程序只需要做一点小改动，添加两个方法来测试事件的触发。

    package com.coding;

    import org.springframework.context.ConfigurableApplicationContext;
    import org.springframework.context.support.ClassPathXmlApplicationContext;

    public class SpringDemo {
        public static void main(String[] args) { 
            ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("beans-config.xml");
            context.start(); // cause ContextStartedEvent
            context.stop();  // cause ContextStoppedEvent
        }
    }


如果要发布事件，我们可以实现 **ApplicationContextAware** 或者 **ApplicationEventPublisherAware** 接口，然后通过 ApplicationContext.publishEvent() 方法发布事件。

Spring 的依赖注入的最大亮点就是所有的 Bean 对 Spring 容器的存在是无感的，即你可以将你的容器替换成别的容器，例如 Goggle Guice，这时 Bean 之间的耦合度很低。

但是在实际的项目中，不可避免的要用到 Spring 容器本身的功能，这时候 Bean 必须要知到 Spring 容器的存在才能调用所提供的资源，这就是所谓的 Spring Aware **容器感知**。其实 Spring Aware 本来就是框架内部使用的，若使用了 Spring Aware 即意味产生了耦合，你的 Bean 将会和 Spring 框架耦合。

Spring Aware 接口如下表所示：

|       Spring Aware 接口        |                         说明                         |
|--------------------------------|------------------------------------------------------|
| ApplicationContextAware*       | 获得当前 Application Context，这样可以调用容器的服务 |
| ApplicationEventPublisherAware | 应用事件发布器，可以发布事件                         |
| BeanFactoryAware               | 获得当前 bean factory，这样可以调用容器的服务        |
| BeanNameAware                  | setBeanName(String name) 获得到容器中 Bean 的名称    |
| MessageSourceAware             | setMessageSource(MessageSource) 获得获得文本信息     |
| ResourceLoaderAware            | 获得资源加载器，可以获得外部资源文件                 |

Spring Aware 的目的是为了让 Bean 获得 Spring 容器的服务。如 ApplicationContext 接口集成的 MessageSource、ApplicationEventPublisherAware、ResourceLoaderAware 接口，所以 Bean 继承 ApplicationContextAware 可以获得 Spring 容器的所有服务，但原则上我们还是用到什么接口就实现什么接口。


以下示范如何使用事件的发布，先实现一个 UserRegisterEvent 事件：

    import org.springframework.context.ApplicationEvent;
    
    public class UserRegisterEvent extends ApplicationEvent 
    {
        private User user;

        // 谁发布事件 souce 就是谁
        public UserRegisterEvent(Object source, User user)
        {
            super(source);
            this.user = user;
        }   
        public User getUser() 
        {
            return user;
        }
    }

对应的用户实体对象：

    public class User {
        private Integer id;
        private String name;
        public Integer getId() {
            return id;
        }
        public void setId(Integer id) {
            this.id = id;
        }
        public String getName() {
            return name;
        }
        public String setName(String value) {
            this.name = value;
        }
        @Override
        public String toString() {
            return "User [id=" + id + ", name=" + name + ", phoneNum=" + phoneNum + ", email=" + email + "]";
        }
    }

实现一个服务组件，在用户注册时执行 register() 触发事件，setApplicationEventPublisher 方法就是 Spring Aware 接口方法，由 Spring 调用以注入依赖功能：

    import org.springframework.context.ApplicationEventPublisher;
    import org.springframework.context.ApplicationEventPublisherAware;
    import org.springframework.stereotype.Service;
     
    @Service
    public class UserRegisterService implements ApplicationEventPublisherAware 
    {
        private ApplicationEventPublisher applicationEventPublisher;
        
        public boolean register(User user) 
        {
            System.out.println("[service]用户["  + user + "]注册成功！");
            
            applicationEventPublisher.publishEvent(new UserRegisterEvent(this, user));      
            
            return true;
        }
        
        @Override
        public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher)
        {
            this.applicationEventPublisher = applicationEventPublisher;
        }
    }




## Spring Bean 生命周期
- [Building an Application with Spring Boot](https://spring.io/guides/gs/spring-boot/)
- [Spring Boot CLI](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-cli.html)
- [什么是Bean?](https://blog.csdn.net/weixin_43277643/article/details/84253237)
- https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/context/annotation/Bean.html
- [Spring Framework Reference 1.3. Bean Overview](file:///C:/coding/java/docs/spring-framework-reference/core.html#beans-definition)
- [Bean 生命周期](https://potoyang.gitbook.io/spring-in-action-v4/1/1.2-rong-na-ni-de-bean/1.2.2bean-de-sheng-ming-zhou-qi)
- [Bean Autowiring 自动装配](https://potoyang.gitbook.io/spring-in-action-v4/di-2-zhang-zhuang-pei-bean)
- [SpringBoot - @Configuration、@Bean 注解的使用详解](https://www.hangge.com/blog/cache/detail_2506.html)

传统 Java 应用 Bean 的生命周期很简单，使用关键字 new 进行实例化，然后该 bean 就可以使用了，用完后则由 Java 自动进行垃圾回收。

相比之下，Spring 容器中的 Bean 的生命周期就显得相对复杂多了。正确理解 Spring bean 的生命周期非常重要，因为你或许要利用 Spring 提供的扩展点来自定义 Bean 的创建过程。

Spring Bean 的存活期间要经历的步骤：

- 实例化；
- 填充属性；
- 调用 **BeanNameAware** 接口的 setBeanName() 方法告知 Bean 的名称配置；
- 调用 **BeanFactoryAware** 接口的 setBeanFactory() 方法告知 Bean 工厂的信息；
- 调用 **ApplicationContextAware** 接口的 setApplicationContextAware() 方法告知 Bean 容器的信息； 
- 调用 **BeanPostProcessor** 接口的 postProcessBeforeInitialization() 预处理方法；
- 调用 **InitializingBean** 接口的 afterPropertiesSet() 方法告知正在初始化；
- 调用自定议的初始化方法；
- 调用 BeanPostProcessor 接口的 postProcessAfterInitialization() 初始化后方法；
- 开始使用 Bean 实例；
- 容器关闭，调用 **Disposable** 接口的 destroy() 方法进行清理；
- 调用自定义销毁方法；

在 Spring 容器中 Bean 从创建到销毁经历了若干阶段，每一阶段都可以针对 Spring 管理 Bean 的方式进行个性化定制。在 Bean 生存前期，执行了多个 Spring Aware 感知接口的方法，这些感知方法主要目录就是给 Bean 提供相应的信息或被感知对象的功能支持。

创建应用对象之间协作关系的行为通常称为装配 wiring，这也是依赖注入的本质。因为 DI 是 Spring 的最基本要素，所以在开发基于 Spring 的应用时，你随时都在使用这些技术。

如果 Spring 能够进行自动化装配的话，那何苦还要显式地将这些 bean 装配在一起呢？

Spring 从两个角度来实现自动化装配：

- **组件扫描** component scanning：Spring 会自动发现应用上下文中所创建的 Bean。
- **自动装配** autowiring：Spring 自动满足 Bean 之间的依赖。

组件扫描和自动装配组合在一起就能发挥出强大的威力，它们能够将你的显式配置降低到最少。

简单来说，自动装配就是让 Spring 自动满足 Bean 依赖的一种方法，在满足依赖的过程中，会在 Spring 应用上下文中寻找匹配的 Bean。为了声明要进行自动装配，使用 @Autowired 注解。

比方说，考虑以下代码中的 CDPlayer 类：

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Component;

    @Component
    public class CDPlayer implements MediaPlayer {
      private CompactDisc cd;

      @Autowired
      public CDPlayer(CompactDisc cd) {
        this.cd = cd;
      }

      public void play() {
        cd.play();
      }
    }

它的构造器上添加了 @Autowired 注解，这指示 Spring 实例化 CDPlayerbean 时在 Spring 上下文中匹配一个 CompactDisc 类型的 Bean 将注入构造器。

@Autowired 注解不仅能够用在构造器上，还能用在属性的 Setter 方法上，或者其它任意方法上。

Bean 对象是按依赖注入的，也就是将 IoC 容器匹配到的 Bean 注入。如果所有的对象都是独立无依赖的，那么使用组件扫描就能将其自动化装配到其它依赖它的 Bean 上。但是实际工作中，很多对象会依赖其他对象来完成任务。这时候就需要能够将组件扫描得到的 Bean 和他们装配在一起，这就是自动装配 autowiring

尽管在很多场景下通过组件扫描和自动装配实现 Spring 的自动化配置是更为推荐的方式，但有时候自动化配置的方案行不通，因此需要明确配置 Spring。比如说，你想要将第三方库中的组件装配到你的应用中，在这种情况下，是没有办法在它的类上添加 @Component 和 @Autowired 注解的，因此就不能使用自动化装配的方案了。

显式配置有两种可选方案：JavaConfig 和 XML。进行显式配置时，JavaConfig 是更好的方案，因为它更为强大、类型安全并且对重构友好。因为它就是 Java 代码， 就像应用程序中的其他 Java 代码一样。

同时，JavaConfig 与其他的 Java 代码又有所区别，在概念上，它与应用程序中的业务逻辑和领域代码是不同的。尽管它与其他的组件一样都使用相同的语言进行表述，但 JavaConfig 是配置代码。这意味着它不应该包含任何业务逻辑，JavaConfig 也不应该侵入到业务逻辑代码之中。尽管不是必须的，但通常会将 JavaConfig 放到单独的包中，使它与其他的应用程序逻辑分离开来，这样对于它的意图就不会产生困惑了。

创建 JavaConfig 类的关键在于添加 @Configuration 注解，这个注解表明一个配置类，该类应该包含在 Spring 应用上下文中如何创建 Bean 的细节。

- @Configration 注解一个配置类，相当于 Spring 中的一个 XML 文件；
- @Bean 注解一个方法，指示方法返回值是一个 Bean，Spring 要将其注册到容器中；


简单示范如下，首先，创建一个自定义的配置类 MyConfigration：

    package com.example.demo.component;
     
    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
     
    @Configuration
    public class MyConfigration {
        @Bean
        public String hello() {
            return "welcome to hangge.com";
        }
    }

使用 @Configration 注解将该类声明为一个配置类。使用 @Bean 注解 hello() 方法要往 Spring 容器中注册一个名为 hello 的 Bean，该 Bean 实例即为方法的返回值。

然后，实现一个 Controller 并通过自动装配使用这个 Bean：

    package com.example.demo.controller;
     
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RestController;
     
    @RestController
    public class HelloController {
     
        @Autowired
        String hello;
     
        @GetMapping("/test")
        public String test() {
            return hello;
        }
    }

@Bean 还与其他注解一起使用：

- **@Profile** 注解：为在不同环境下使用不同的配置提供了支持，如开发环境和生产环境的数据库配置是不同的;
- **@Scope** 注解：指定 Bean 的作用域，从默认的 singleton 单例改变为指定的作用域;
- **@Lazy** 注解：只有在默认单例作用域的情况下才有实际效果；
- **@DependsOn** 注解：表示在当前 Bean 创建之前需要先创建特定的其他 Bean；

可以设置自定义的初始化方法 initMethod 和销毁方法 destroyMethod：

    public class MyBean {
        public void init() {
            System.out.println("MyBean 初始化...");
        }
     
        public void destroy() {
            System.out.println("MyBean 销毁...");
        }
     
        public String get() {
            return "MyBean 使用中...";
        }
    }

    @Bean(initMethod="init", destroyMethod="destroy")
    public MyBean myBean() {
        return new MyBean();
    }

Table 3. Bean scopes

|        Scope        |                       说明                       |
|---------------------|--------------------------------------------------|
| scope="singleton"   | 默认，单例作用范围，每个 Spring IoC 容器只有一份 |
| scope="prototype"   | 原型范围，可以有任意实例                         |
| scope="request"     | 在单一 HTTP 请求中有效                           |
| scope="session"     | 在一个 HTTP Session 中有效                       |
| scope="application" | 在一个 ServletContext 范围有效                   |
| scope="websocket"   | 在一个 WebSocket 范围有效                        |


@Configration 注解一个配置类：

- @Configration 注解作用在类、接口上
- @Configuration 用于定义配置类，可替换 xml 配置文件
- @Configration 注解类中可以声明一个或多个 @Bean 方法
- @Configration 注解作用的类不能是 final 类型
- 嵌套的 @Configration 类必须是 static 的

假设我们定义一个如下的 Bean：

    public class MyBean {
        private String port;
     
        public void init() {
            System.out.println("MyBean开始初始化...");
        }
     
        public void destroy() {
            System.out.println("MyBean销毁...");
        }
     
        public String get() {
            return "端口号： " + getPort();
        }
     
        public String getPort() {
            return port;
        }
     
        public void setPort(String port) {
            this.port = port;
        }
    }

然后在 @Configuration 中进行声明配置，可以声明多个 @Bean 方法，并且这些 Bean 之间是可以有依赖关系的。

如果一个 Bean 依赖其他 Bean，则直接调用对应的 JavaConfig 类中被依赖的 Bean 的创建方法就可以了。

注意：@Configuration 注解的 Bean 都已经变成了增强的类。因此 country 方法注册到 IoC 容器的这个 Bean 和下面直接调用 country() 方法返回的是同一个实例。

    @Configuration
    @Profile("dev")
    public class MyBeanConfig 
    {
        @Bean(initMethod="init", destroyMethod="destroy")
        public MyBean myBean() {
            MyBean myBean = new MyBean();
            myBean.setPort("8080");
            return myBean;
        }
      
        @Bean
        public Country country(){
            return new Country();
        }
      
        @Bean
        public UserInfo userInfo(){
            return new UserInfo(country());
        }
    }


最后进行测试，我们获取这个 Bean 并输出其内容：

    @SpringBootApplication
    public class DemoApplication 
    {
        public static void main(String[] args) 
        {
            ConfigurableApplicationContext context = SpringApplication.run(DemoApplication.class, args);
            MyBean myBean = (MyBean) context.getBean("myBean");
            System.out.println(myBean.get());
        }
    }
    
在 Java 配置中，可以使用 @Profile 注解指定某个 bean 属于哪一个 profile。注意，@Profile 注解应用在了类级别上，它会告诉 Spring 这个配置类中的 Bean 只有在 dev profile 激活时才会创建。如果 dev profile 没有激活的话，那么带有 @Bean 注解的方法都会被忽略掉。

Spring 在确定哪个 profile 处于激活状态时，需要依赖两个独立的配置：spring.profiles.active 和 spring.profiles.default。Spring 依次从 profiles 的 active 属性、default 属性确定当前的配置，如果均没有设置的话，那就没有激活的 profile，因此只会创建那些没有定义 profile 中的 bean。


参考官方的另一个示例 Building an Application with Spring Boot：

    package hello;

    import java.util.Arrays;

    import org.springframework.boot.CommandLineRunner;
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;
    import org.springframework.context.ApplicationContext;
    import org.springframework.context.annotation.Bean;

    @SpringBootApplication // same as @Configuration @EnableAutoConfiguration @ComponentScan
    public class Application {

        public static void main(String[] args) {
            SpringApplication.run(Application.class, args);
        }

        @Bean
        public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
            return args -> {

                System.out.println("Let's inspect the beans provided by Spring Boot:");

                String[] beanNames = ctx.getBeanDefinitionNames();
                Arrays.sort(beanNames);
                for (String beanName : beanNames) {
                    System.out.println(beanName);
                }

            };
        }

    }

一个 @SpringBootApplication 注解替代的是以下三个注解：

- **@EnableAutoConfiguration** 激活 Spring Boot 自动配置机制，自动处理程序配置的 jar 包；
- **@ComponentScan** 激活组件扫描，装入程序包所在的组件，如 @Component、@Service、@Repository、@Controller 等等；
- **@Configuration** 在上下文或导入配置类中注册额外的 Bean；

常见组件标注：

|    Annotation   |                      说明                      |
|-----------------|------------------------------------------------|
| @Component      | 作为 classpath 自动探测的候选                  |
| @Controller     | 标注一个 web controller 即 Spring MVC 应用     |
| @RestController | 标注一个 REST Service 控制器，供应 RESTful API |
| @Repository     | 数据管理与存储连结，如 DAO、DDD                |
| @Service        | 表示一个业务逻辑，无状态，外观模式 facade      |

**@Bean** 注解告诉 Spring 这个方法将会返回一个 Bean 对象，并注册到 Spring 应用上下文中。

**@Component** 注解表明一个类会作为组件类，并告知 Spring 要为这个类创建 Bean。

两者的目的是一样的，都是注册 Bean 到 Spring 容器中。

代码中标注的 Bean 是一个 CommandLineRunner，和 ApplicationRunner 一样，它们会在 Spring 加载后运行，可以像下面一样以组件的形式实现：

    import org.springframework.boot.*;
    import org.springframework.stereotype.*;

    @Component
    public class MyBean implements CommandLineRunner {

        public void run(String... args) {
            // Do something...
        }

    } 

每个 Spring Application 都在 JVM 注册了一个 shudown hook 以保证程序顺畅关闭，所有标准的 Spring lifecycle 回调，如 DisposableBean 接口、@PreDestroy 注解等都会执行。

此外，Bean 对象还可以实现 org.springframework.boot.ExitCodeGenerator 接口，它可以指定执行 **SpringApplication.exit()** 退出时返回的退出代码，退出代码会继续传递给 **System.exit()**：

    @SpringBootApplication
    public class ExitCodeApplication {

        @Bean
        public ExitCodeGenerator exitCodeGenerator() {
            return () -> 42;
        }

        public static void main(String[] args) {
            System.exit(SpringApplication.exit(SpringApplication.run(ExitCodeApplication.class, args)));
        }

    }

也可以在异常类中实现 ExitCodeGenerator 接口，在 Spring Boot 异常退出时就会通过 getExitCode() 方法取得退出代码。

旧式 Spring 程序通常通过 XML 配置文件定义 Bean：

    <?xml version=”1.0″ encoding=”UTF-8″?>

    <beans xmlns=”http://www.springframework.org/schema/beans”
    xmlns:xsi=”http://www.w3.org/2001/XMLSchema-instance”
    xsi:schemaLocation=”http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.0.xsd”>

    <bean id=”HelloWorld” class=”com.HelloWorld”>
        <property name=”msg”>
           <value>HelloWorld</value>
        </property>
    </bean>

    </beans>

根据 Bean 生命周期，实现 InitializingBean 接口，实现 afterPropertiesSet() 方法：

    package com.coding;

    public class HelloBean { 
        private String msg; 
        
        public void setMsg(String msg) { 
            this.msg = msg; 
        } 
        public String getMsg() { 
            return msg; 
        } 
        public void afterPropertiesSet() {
            msg = "向全世界问好！";
        }
    }

那么，当这个 Bean 的所有属性被 BeanFactory 设置完后，会自动调用 afterPropertiesSet() 方法对 Bean 进行初始化，于是，配置文件就不用指定 init-method 属性了。

以下三种方式都可以调用 Bean 对象：

- 使用 BeanWrapper

        HelloWorld  hw = new HelloWorld();
        BeanWrapper bw = new BeanWrapperImpl(hw);
        bw.setPropertyvalue("msg", "HelloWorld");
        system.out.println(bw.getPropertyCalue("msg"));

- 使用 BeanFactory

        InputStream is = new FileInputStream("config.xml");
        XmlBeanFactory factory = new XmlBeanFactory(is);
        HelloWorld hw = (HelloWorld) factory.getBean("HelloWorld");
        System.out.println(hw.getMsg());

- 使用 ApplicationConttext

        ApplicationContext actx = new FileSystemXmlApplicationContext("config.xml");
        HelloWorld hw = (HelloWorld) actx.getBean("HelloWorld");
        System.out.println(hw.getMsg());

## Circular 循环依赖

Spring 中依赖注入的方式有两种，属性注入与构造器注入。Spring 中的 bean 根据作用域的不同，可以大体分为两类，单例 singleton 和多例 prototype。单例在一个容器中，只会有一个实例；而 prototype 在每次调用时，都会产生一个新的实例。

Spring 中，单例 bean 有延迟加载和立即加载两种加载方式，其中立即加载模式会在容器启动的时候就创建 bean，而延迟加载会在容器启动后，使用到 bean 的时候再加载它。


循环引用，也可以叫做循环依赖，就是 A 类依赖了 B 类，B 类又依赖 A 类

- 如果循环依赖的 bean 都是通过构造器注入依赖，那么不管它们是 singleton 还是 prototype，都会失败。
- 如果循环依赖的 bean 都是 prototype，那么不管它们是通过构造器注入依赖还是通过属性注入依赖，都会失败。
- 如果循环依赖的 bean 既有构造器注入也有属性注入，既有 singleton 也有 prototype，在容器启动后，只有当获取的第一个 bean 是通过属性注入依赖的 singleton 时，才会成功，别的情况都会失败。

如果多个 bean 存在循环依赖，在 Spring 容器启动后，只有当获取的第一个 bean 是通过属性注入依赖的 singleton 时，才会成功，别的情况都会失败。

Spring 5.2.5，A 和 B 都通过属性注入，其中 A 和 B 一个是单例，一个是多例，Spring 容器不管获取哪个都不报错。

循环引用的 bean 之间必然会构成一个环，A、B、C之间构成了一个环形。

当 Spring 容器在创建 A 时，会发现其引用了 B，从而会先去创建 B。同样的，创建 B 时，会先去创建 C，而创建 C 时，又先去创建 A。最后 A、B、C 之间互相等待，谁都没法创建成功。

要想打破这个环，那么这个环中至少需要有一个 bean 可以在自身的依赖还没有得到满足前，就能够被创建出来。这种 bean 只能是通过属性注入依赖的类，因为它们可以先使用默认构造器创建出实例，然后再通过 setter 方法注入依赖。而通过构造器注入依赖的类，在它的依赖没有被满足前，无法被实例化。而且这个 bean，还必须是 singleton，不能是 prototype。

    class A {
        private B b;

        public B getB() {
            return b;
        }

        public void setB(B b) {
            this.b = b;
        }
    }

    class B {
        private A a;

        public A getA() {
            return a;
        }

        public void setA(A a) {
            this.a = a;
        }
    }

类 A 和类 B 都是通过属性注入依赖，并且他们都是 singleton，配置文件如下：

    <bean id="singletonA" class="com.spring.circulardependencies.A" lazy-init="true">
        <property name="b" ref="singletonB"/>
    </bean>
    <bean id="singletonB" class="com.spring.circulardependencies.B" lazy-init="true">
        <property name="a" ref="singletonA"/>
    </bean>

测试代码

    ApplicationContext applicationContext =
            new ClassPathXmlApplicationContext("ApplicationContext.xml");
    A a = (A) applicationContext.getBean("singletonA");
    B b = (B) applicationContext.getBean("singletonB");
    assertEquals(a, b.getA());
    assertEquals(b, a.getB());

Spring 容器启动后，如果我们去获取 singletonA，那么容器的操作步骤大致如下：

尝试创建 singletonA，发现它是 singleton，且没有通过构造器注入依赖，那么先使用默认构造器创建一个 A 的实例，并保存对它的引用，并且将singletonA标记为“正在创建中的singleton”。然后发现 singletonA 依赖了 singletonB，所以尝试创建 singletonB。

尝试创建 singletonB，发现它是 singleton，且没有通过构造器注入依赖，那么先使用默认构造器创建一个 B 的实例，并保存对它的引用，并且将 singletonB 标记为“正在创建中的singleton”。然后发现 singletonB 依赖了 singletonA，所以尝试创建 singletonA。

尝试创建 singletonA，注意，这时 Spring 容器记录了 singletonA “正在创建中”，那么就不会再去创建 singletonA，而是返回容器之前保存了的对 singletonA 的引用。

这样，循环依赖的环就在 singletonA 这个点这里被打破。

那为什么 prototype 不能成为打破这个环的一个点呢？原因就在于 Spring 容器只会对 singleton 保存引用，而对于 prototype，并不会对其保存引用，这就导致在第 3 步中并不能获得之前创建的 bean（因为引用不到它）。

至于为什么容器不对 prototype 保存引用，那就涉及到 singleton 和 portotpye 的概念，如果也对 prototype 保存引用，那么其实它就变成了 singleton。

当 Spring 容器遍历那些循环依赖的 bean 时，只要遍历到那种已经遍历过一次的 bean，并且它们不是通过属性注入依赖的 singleton 时，就会直接抛出 BeanCurrentlyInCreationException 异常。

    org.springframework.beans.factory.BeanCreationException: 
    Error creating bean with name 'mixPrototypeB' defined in class path resource [ApplicationContext.xml]: Cannot resolve reference to bean 'mixSingletonA' while setting bean property 'a'; 
    nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'mixSingletonA' defined in class path resource [ApplicationContext.xml]: Cannot resolve reference to bean 'mixPrototypeB' while setting bean property 'b'; 
    nested exception is org.springframework.beans.factory.BeanCurrentlyInCreationException: Error creating bean with name 'mixPrototypeB': Requested bean is currently in creation: Is there an unresolvable circular reference?


## Spring 底层基本原理

- [Spring源码分析（一）基本介绍](https://www.cnblogs.com/warehouse/p/9372260.html)
- [Spring源码分析（七）bean标签的解析及注册](https://www.cnblogs.com/warehouse/p/9378066.html)
- [Spring源码分析（十一）bean的加载](https://www.cnblogs.com/warehouse/p/9381481.html)
- [spring4.0之二：@Configuration的使用](https://www.cnblogs.com/duanxz/p/7493276.html)
- [Spring 源码（十一）Spring流程汇总](https://www.liangzl.com/get-article-detail-147775.html)

学习一个框架的最佳姿势就是 READ THE FXXK SOURCE CODE！

但是，如果细读每一行代码，去跟踪程序的执行流程，这是不可取的，新手通常都会犯这种不是错误的错误，但又确实比较要命，很容易将自己的脑袋丢进代码丛林，只见森林不见树木，迷途不归路。

所以，我更愿意使用一种蜻蜓点水的态度去做这件事，首先，立下两个目标：

- Spring XML 配置方式的加载基本原理；
- Spring 注解配置方式的加载基本原理；

为了解密以上两个问题，首先需要搞到 Spring 的源代码，我使用的是 Spring-5.1.0.RELEASE-sources，下载到的发行包目录里有各个模块的源码独立打包，解压到同一目录下。

代码阅读工具使用 Sublime Text，它的多功能跳转、文件快速定位打开、符号跳转、光标位置跳转等功能十分适合用来快速定位源代码的关注点。


Spring 框架源代码以模块化管理：

- **Spring Core** 核心容器 Core Container 包含 Core 、Beans、Context、和 Expression  Language 模块。核心容器提供 Spring 框架的基本功能，核心容器的主要组件是 BeanFactory，它是工厂模式的实现。BeanFactory 使用控制反转 IOC 模式将应用程序的配置和依赖性规范与实际的应用程序代码分开。Context 上下文是一个配置文件，向 Spring 框架提供上下文信息。Spring 上下文包括企业服务，例如 JNDI、EJB、电子邮件、国际化、校验和调度功能。

- **Spring AOP** 将面向方面的编程功能集成到了 Spring 框架中。所以，可以很容易地使 Spring 框架管理的任何对象支持 AOP。Spring AOP 模块为基于 Spring 的应用程序中的对象提供了事务管理服务。通过使用 Spring AOP，不用依赖 EJB 组件，就可以将声明性事务管理集成到应用程序中。

- **Spring Data Access/Integration** 包含有 JDBC、ORM、OXM、JMS 和 Transaction 模块。：JDBC DAO 抽象层提供了有意义的异常层次结构，可用该结构来管理异常处理和不同数据库供应商抛出的错误消息。异常层次结构简化了错误处理，并且极大地降低了需要编写的异常代码数量（例如打开和关闭连接）。Spring DAO 的面向 JDBC 的异常遵从通用的 DAO 异常层次结构。Spring 框架插入了若干个 ORM 框架，从而提供了 ORM 的对象关系工具，其中包括 JDO、Hibernate 和 iBatis SQL Map。所有这些都遵从 Spring 的通用事务和 DAO 异常层次结构。

- **Spring Web** Web 层包含了 Web、Web-Servlet、Web-Struts、Web-Porlet 模块。Web 上下文模块建立在应用程序上下文模块之上，为基于 Web 的应用程序提供了上下文。所以，Spring 框架支持与 Jakarta Struts 的集成。Web 模块还简化了处理多部分请求以及将请求参数绑定到域对象的工作。

- **Spring MVC** 框架：MVC 框架是一个全功能的构建 Web 应用程序的 MVC 实现。通过策略接口，MVC 框架变成为高度可配置的，MVC 容纳了大量视图技术，其中包括 JSP、Velocity、Tiles、iText 和 POI。

- **Spring Test** 测试模块包括 JUnit 和 TestNG 对 Spring 组件进行测试。

如果按配置文件的使用方式来划分，Spring 应用可以简单按以下方式分类：

- XML 配置类型应用：

    - ClassPathXmlApplicationContext
    - FileSystemXmlApplicationContext
    - XmlWebApplicationContext
    - GenericXmlApplicationContext

- 加载 Groovy 语言的文件：

    - GroovyWebApplicationContext
    - GenericGroovyApplicationContext

- 加载标注配置：

    - AnnotationConfigApplicationContext
    - AnnotationConfigWebApplicationContext

- 手动注入 bean：

    - GenericApplicationContext
    - ResourceAdapterApplicationContext
    - StaticApplicationContext
    - StaticWebApplicationContext

根据目前 Web 开发的流行，或者也可以将 Spring 应用分为 Web 应用与其它类型应用，这个分类是比较实用的。

- AnnotationConfigWebApplicationContext
- AnnotationConfigApplicationContext
- GenericWebApplicationContext
- StaticWebApplicationContext

还可以根据 Refreshable 特性进行分类：

- AnnotationConfigWebApplicationContext
- GroovyWebApplicationContext
- XmlWebApplicationContext
- ClassPathXmlApplicationContext
- FileSystemXmlApplicationContext


**ApplicationContext** 接口是所用 Spring 应用的基础，在此之上是 **ConfigurableApplicationContext**，和 **WebApplicationContext** Web 应用是扩展接口：

    AbstractXmlApplicationContext 
     => 🧡 AbstractRefreshableConfigApplicationContext 
         |=> 🧡 AbstractRefreshableApplicationContext
         |    |=> 🧡 AbstractApplicationContext
         |         |=> 🧡 DefaultResourceLoader
         |         |=> 🤍 ConfigurableApplicationContext
         |              |=> 🤍 ApplicationContext
         |              |    |=> 🤍 EnvironmentCapable
         |              |    |=> 🤍 ListableBeanFactory
         |              |    |=> 🤍 HierarchicalBeanFactory
         |              |    |=> 🤍 MessageSource
         |              |    |=> 🤍 ApplicationEventPublisher
         |              |    |=> 🤍 ResourcePatternResolver
         |              |=> 🤍 Lifecycle
         |              |=> 🤍 Closeable
         |=> 🤍 BeanNameAware
         |=> 🤍 InitializingBean

作为一个基本的抽象类实现，**AbstractApplicationContext** 通过 LifecycleProcessor 接口为各种应用实现了基本的应用生命周期管理，应用的启停方法。

以 XML 配置运行的常规 Spring 应用有很多，以下是继承自 AbstractXmlApplicationContext 的其中两个，分别从 classpath 和指定配置文件路径加载：

    new ClassPathXmlApplicationContext("beans-config.xml");
    new FileSystemXmlApplicationContext("beans-config.xml");

典型的 Web 应用有三种，XmlWebApplicationContext 默认以 /WEB-INFO 为配置目录：

    XmlWebApplicationContext 
     => 🧡 AbstractRefreshableWebApplicationContext
         |=> 🧡 AbstractRefreshableConfigApplicationContext
         |=> 🤍 ConfigurableWebApplicationContext
         |    |=> 🤍 WebApplicationContext
         |    |    |=> 🤍 ApplicationContext
         |    |=> 🤍 ConfigurableApplicationContext
         |=> 🤍 ThemeSource

默认配置属性设置：

    public static final String DEFAULT_CONFIG_LOCATION = "/WEB-INF/applicationContext.xml";

    public static final String DEFAULT_CONFIG_LOCATION_PREFIX = "/WEB-INF/";

    public static final String DEFAULT_CONFIG_LOCATION_SUFFIX = ".xml";

除了 XmlWebApplicationContext，还有另外两个 Web 应用类型，AnnotationConfigWebApplicationContext, GroovyWebApplicationContext，看名字大概猜到应用类型和标注、Groovy 脚本有密切关。

Spring 4.0 的一个重要特征就是完全支持 Groovy，这是 Spring 主导的一门基于 JVM 的脚本语言。在 Spring 2.x，脚本语言通过 Java scripting engine 得到支持。而在 Spring 4.0 中，Groovy 的变得更重要，Groovy 可以替换 XML 和注解用来作为 bean 配置。所以 GroovyWebApplicationContext 和 GenericGroovyApplicationContext 在使用 Groovy 脚本进行开发时非常好用。


另外一支是通用弄 Spring 应用，以 **GenericApplicationContext** 为基础类，以静态站点应用为例，它的类层次结构如下：

    StaticWebApplicationContext
    |=> 🧡 StaticApplicationContext
    |    |=>🧡 GenericApplicationContext
    |        |=> 🧡 AbstractApplicationContext
    |        |    |=> 🧡 DefaultResourceLoader
    |        |    |    |=> 🤍 ResourceLoader
    |        |    |=> 🤍 ConfigurableApplicationContext
    |        |=> 🤍 BeanDefinitionRegistry
    |             |=> 🤍 AliasRegistry
    |=> 🤍 ConfigurableWebApplicationContext
    |=> 🤍 ThemeSource

除了以上的 StaticApplicationContext，通用类型的应用还有以下这些，它们都各自实现了对应的接口：

- AnnotationConfigApplicationContext (AnnotationConfigRegistry)
- GenericGroovyApplicationContext (GroovyObject)
- GenericWebApplicationContext (ConfigurableWebApplicationContext)
- GenericXmlApplicationContext
- ResourceAdapterApplicationContext J2EE 连接器架构资源适配器实现 JCA - Java Connector Architecture


Java 的反射和起源于 JDK 1.5 的标注编程技术在 Spring 有重度的应用，管理注解配置的两个容器 AnnotationConfigApplicationContext、AnnotationConfigWebApplicationContext 是我比较关注的，它们可以实现基于 Java 配置类和各种注解配置加载 Spring 的应用上下文，避免使用 application.xml 进行配置带来的繁琐，相比 XML 配置，标注配置更加便捷。

两者虽然实现方式略有差别，但处理注解的逻辑一样，先扫描 **scan(String... basePackages)** 类路径 classpath 收集 bean 类信息，然后一一注册 **register(annotatedClasses)**。

Variable number of arguments 是 Java 5 带来的新功能，使用省略号 ... 代替多参数。


这里给两段摘抄的示范代码：

SCENARIO 1

    import org.springframework.context.ApplicationContext;
    import org.springframework.context.annotation.*;

    public class MainApp {
       public static void main(String[] args) {
          ApplicationContext ctx = 
             new AnnotationConfigApplicationContext(HelloWorldConfig.class);

          HelloWorld helloWorld = ctx.getBean(HelloWorld.class);
          helloWorld.setMessage("Hello World!");
          helloWorld.getMessage();
       }
    }

SCENARIO 2:

    import javax.servlet.ServletContext;
    import javax.servlet.ServletException;
    import javax.servlet.ServletRegistration;
    import org.springframework.web.WebApplicationInitializer;
    import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
    import org.springframework.web.servlet.DispatcherServlet;
    public class WebServletConfiguration implements WebApplicationInitializer{
        public void onStartup(ServletContext ctx) throws ServletException {
            AnnotationConfigWebApplicationContext webCtx = new AnnotationConfigWebApplicationContext();
            webCtx.register(SpringConfig.class);
            webCtx.setServletContext(ctx);
            ServletRegistration.Dynamic servlet = ctx.addServlet("dispatcher", new DispatcherServlet(webCtx));
            servlet.setLoadOnStartup(1);
            servlet.addMapping("/");
        }
    }

配置类 HelloWorldConfig 或 SpringConfig 可以使用 Spring 的标注，如 @Configuation、@Bean、@Component、@ComponentScan 等进行修饰。

    import org.springframework.context.annotation.Configuration;

    @Configuration
    public class HelloWorldConfig {
        public HelloWorldConfig() {
            System.out.println("HelloWorldConfig ...");
        }
    }


每一种 Bean 类型在 Spring 中存在着不同的 scope，默认是 singleton，还有 prototype、request 等等。

直接使用 BeanFactory 容器对于 Spring 的使用来说并不多见，因为在企业级的应用中大多数都会使用 ApplicationContext。这里只是用于测试，简单实例化一个 bean 用于分析 Spring 的内部原理：

    BeanFactory beanFactory = new XmlBeanFactory(new ClassPathResource("spring/spring-test.xml"));
    MySpringBean bean = (MySpringBean) beanFactory.getBean("mySpringBean");

单例在 Spring 的同一个容器内只会被创建一次，后续再获取 bean 直接从单例缓存中获取，当然这里也只是尝试加载，首先尝试从缓存中加载，然后再次尝试从 singletonFactorry 加载。因为在创建单例 bean 的时候会存在依赖注入的情况，而在创建依赖的时候为了避免循环依赖，Spring 会先行创建 bean 的 ObjectFactory 提早曝光加入到缓存中，一旦下一个 bean 创建时需要依赖上个 bean，则直接使用 ObjectFactory；就算没有循环依赖，只是单纯的依赖注入，如 B 依赖 A，如果 A 已经初始化完成，B 进行初始化时，需要递归调用 getBean 获取 A，这是 A 已经在缓存里了，直接可以从这里取到。

加载 Bean 使用到的几个重要的相关类或接口：

- **DefaultDocumentLoader** 加载 bean 的 XML 配置文件，使用 Java DocumentBuilderFactory 解析 XML 是 JAXP-configured 解析器；

- **DefaultBeanDefinitionDocumentReader** 根据 spring-beans DTD 和 XSD 定义读入配置，定义了以下这些基本配置属性：

        public static final String BEAN_ELEMENT = BeanDefinitionParserDelegate.BEAN_ELEMENT;
        public static final String NESTED_BEANS_ELEMENT = "beans";
        public static final String ALIAS_ELEMENT = "alias";
        public static final String NAME_ATTRIBUTE = "name";
        public static final String ALIAS_ATTRIBUTE = "alias";
        public static final String IMPORT_ELEMENT = "import";
        public static final String RESOURCE_ATTRIBUTE = "resource";
        public static final String PROFILE_ATTRIBUTE = "profile";

    标签的解析在 parseDefaultElement 函数，它分别处理解析 4 种 ELEMENT 标签节点，import、alias、bean、beans，其中对 bean 标签的解析最为复杂也最为重要，解析完成后在 processBeanDefinition 进行注册。

    注册有两种关联方式，beanName 与 alias，若两者名称相同则不需要处理并删除原有的 alias。若 aliasName 已经使用并已经指向了另一 beanName 则需要用户的设置进行处理。 alias 循环检查，当 A -> B 存在时，若再次出现 A -> C -> B 时候则会抛出异常。

- **BeanDefinition** 接口描述一个 bean，如属性、构造参数等，前面解析标签后得到的数据就存储在这里，所以了解一个 bean 会存储什么样的属性数据，可以参考实现这个接口的 AbstractBeanDefinition。获取 beanDefiniton 接下来就是注册到容器中供应用使用；

前面是 XML 配置文件的解析，接下来将会面临更大的挑战，就是 bean 加载的探索。bean 加载的功能实现远比 bean 的解析要复杂得多。

对于加载 bean 实例，可以在 Spring 中调用以下方法：

    MySpringBean bean = (MySpringBean) beanFactory.getBean("mySpringBean");

那么这一过程中涉及的重要接口 **BeanFactory** Bean 工厂接口，加载 bean 定义以及获取实例；

    AbstractAutowireCapableBeanFactory
        |=> AbstractBeanFactory
        |    |=> FactoryBeanRegistrySupport
        |    |    |=> DefaultSingletonBeanRegistry
        |    |         |=> SimpleAliasRegistry
        |    |         |    |=> implements AliasRegistry
        |    |         |=> implements SingletonBeanRegistry
        |    |=> implements ConfigurableBeanFactory
        |         |=> HierarchicalBeanFactory
        |         |    |=> BeanFactory
        |         |=> SingletonBeanRegistry
        |=> implements AutowireCapableBeanFactory {

在抽象类 AbstractBeanFactory 封装了一个相当复杂的 doGetBean，它就是实际加载 bean 实例的方法：

- 转换对应的 beanName，AbstractBeanFactory -> transformedBeanName(name)。
- 尝试从缓存中加载单例 DefaultSingletonBeanRegistry -> getSingleton(beanName)。
- bean 的实例化 createBean(beanName, mbd, args)。
- 原型模式的依赖检查。
- 检测 parentBeanFactory。
- 将存储 XML 配置文件的 GenericBeanDefinition 转换为 RootBeanDefinition。
- 寻找依赖。
- 针对不同的 scope 进行 bean 的创建。
- 类型转换。

一般情况下，Spring 通过反射机制根据 bean 配置的 class 属性指定的实现类来实例化 bean。在某些情况下，实例化 bean 过程比较复杂，如果按照传统的方式，则需要在 bean 配置文件节点中提供大量 的配置信息，配置方式的灵活性是受限的，这时采用编码的方式可能会得到一个简单的方案。 Spring 为此提供了 **FactoryBean** 的工厂类接口，注意名字和 BeanFactory 是相反的单词组合，用户可以通过实现该接口定制实例化 bean 的逻辑。

FactoryBean 接口地位很重要，Spring 自身就提供了 70 多个 FactoryBean 的实现。它们隐藏了实例化一些复杂 bean 的细节，给上层应用带来了便利。从 Spring 3.0 开始，FactoryBean 开始支持泛型，即接口声明改为 **FactoryBean<T>** 的形式：


Spring 容器初始化流程大致流程如下：

- this()：注册内置的 BeanPostProcessor 的 BeanDefinition 到容器
- register(annotatedClasses)：注册配置类 BeanDefinition 到容器
- prepareRefresh()：初始化前的准备工作，列如对系统属性或者环境变量进行验证
- obtainFreshBeanFactory()：初始化 BeanFactory
- prepareBeanFactory(beanFactory)：对 BeanFactory 进行各种功能的填充，比如对表达式的支持等
- postProcessBeanFactory(beanFactory)：留给子类扩展用
- invokeBeanFactoryPostProcessors(beanFactory)：执行BeanFactoryPostProcessor后置处理器
- registerBeanPostProcessors(beanFactory)：创建并注册所有的BeanPostProcessor后置处理
- initMessageSource()：初始化消息组件（国际化，消息绑定，消息解析）
- initApplicationEventMulticaster()：初始化容器的事件机制
- onRefresh()：初始化其他特殊Bean（留给子类做扩展用）
- registerListeners()：注册监听器（ApplicationListener）
- finishBeanFactoryInitialization(beanFactory)：创建并注册所有的单例且非懒加载的Bean
- finishRefresh()：完成刷新过程，通知生命周期处理器 lifecycleProcessor 刷新过程，同时发出 ContextRefreshEvent 通知别人。
- resetCommonCaches()：重置缓存

Spring Bean的生命周期：

- InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation()：实例化Bean的前置处理
- createBeanInstance(beanName, mbd, args)：实例化Bean
- MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition()：合并Bean定义信息（自动装配元素）
- InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation()：实例化Bean的后置处理
- InstantiationAwareBeanPostProcessor#postProcessPropertyValues()：Bean的自动装配
- 部分 Aware 接口的自动装配：BeanNameAware#setBeanName()、BeanClassLoaderAware#setBeanClassLoader()、BeanFactoryAware#setBeanFactory()
- BeanPostProcessor#postProcessBeforeInitialization()：Bean初始化的前置处理
- 剩余部分 Aware 接口的自动装配：EnvironmentAware#setEnvironment()、EmbeddedValueResolverAware#setEmbeddedValueResolver()、ResourceLoaderAware#setResourceLoader ()、ApplicationEventPublisherAware#setApplicationEventPublisher ()、MessageSourceAware#setMessageSource ()、ApplicationContextAware# setApplicationContext ()
- @PostConstruct：执行初始化方法
- InitializingBean#afterPropertiesSet()：执行初始化方法
- @Bean(initMethod = "initMethod")：执行初始化方法
- BeanPostProcessor#postProcessAfterInitialization()：Bean初始化的后置处理
- DestructionAwareBeanPostProcessor#postProcessBeforeDestruction()：销毁Bean的后置处理（@PreDestroy）
- DisposableBean#destroy()：执行销毁方法
- @Bean(destroyMethod = "destroyMethod")：执行销毁方法

Spring Bean的自动装配过程：

- 根据 Class 对象，通过反射获取所有的 Field 和 Method 信息
- 通反射获取 Field 和 Method 的注解信息，并根据注解类型，判断是否需要自动装配
- 将需要自动装配的元素，封装成 AutowiredFieldElement 或 AutowiredMethodElement 对象
- 调用 AutowiredFieldElement 或 AutowiredMethodElement 的 inject 方法，唤起后续步骤
- 通过调用容器的 getBean() 方法找到需要注入的源数据 Bean
- 通过反射将找到的源数据 Bean 注入到目标 Bean 中

Spring AOP执行流程：

- @EnableAspectJAutoProxy开启对AOP的支持，注册后置处理器 AnnotationAwareAspectJAutoProxyCreator
- 根据Class对象找出所有切面类（有@Aspect注解的类）
- 解析切面类中的增强器（解析@Before等注解），并放入缓存中
- 根据ProxyFactory工厂类创建AopProxy代理器
- 根据AopProxy代理器创建代理类
- 通过增强器执行入口执行增强器 JdkDynamicAopProxy#invoke()或CglibAopProxy.DynamicAdvisedInterceptor#intercept()
- 获取链接链 AdvisedSupport#getInterceptorsAndDynamicInterceptionAdvice()
- 以递归方式执行拦截链 ReflectiveMethodInvocation.proceed()


## Spring & JSP
- https://www.cnblogs.com/peterxiao/p/7826427.html
- Servlet/JSP Gossip - https://openhome.cc/Gossip/ServletJSP/
- [放弃JSP吧--否则你无路可走](https://zhuanlan.zhihu.com/p/71937497)

服务器端的 Spring MVC/WebFlux 和 Spring Boot 已经开始抛弃 JSP。从 Spring 5 开始，在原有的基于 Servlet 技术的 Spring MVC 之外增加了一个新的编程模型，就是 Spring WebFlux。

Spring WebFlux 是响应式非阻塞的，而且不支持 Servlet API，所以也就不支持 JSP！

Spring boot 官方不推荐使用 JSP，因为 JSP 相对于一些模板引擎，性能都比较低，如果一定要用视图模板，官方默认使用 thymeleaf 模板引擎。

现如今用前端框架，不管是 Angular、React、Vue，都有对应的服务端渲染 SSR，Reat 用 Next.js，Vue 用 Nuxt.js，Ng 用 Nest.js，完全可以解决 SEO 搜索引擎优化问题。


Java Servlet 技术是 Java 开发 Web 应用的底层技术，或者说原始的技术。

由于 Servlet 用起来太麻烦了，SUN 公司发布了 JSP - Java Server Pages 技术，以进一步简化 servlet 程序开发。

自从 Servlet 和 JSP 技术诞生后，涌现出大量的基于 Java 的 Web 框架来帮助开发人员快速编写 Web 应用。而 Spring MVC 就是当前最流行的可扩展 Java Web 应用开发框架。

Spring MVC 是 Spring 框架的一个模块，用于快速开发 Web 应用。MVC - Model-View-Controller，是一个广泛应用于GUI开发的设计模式。

Servlet 应用无法独立运行，必须运行在 Servlet 容器中。如 Tomcat 是 Web 应用服务器，就是一个 Servlet/JSP 容器。Servlet 容器将用户的请求传递给 Servlet 应用，并将结果返回给用户。Web 服务器和 Web 客户端间通过 HTTP 协议通信，因此 Web 服务器也叫 HTTP 服务器。

一、pom.xml中加入tomcat支持和jstl标签库

    <!-- tomcat支持 -->
    <dependency>
        <groupId>org.apache.tomcat.embed</groupId>
        <artifactId>tomcat-embed-jasper</artifactId>
        <!--<scope>provided</scope>-->
    </dependency>
    <!-- jstl标签库 -->
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>jstl</artifactId>
    </dependency>

二、在application.yml中配置jsp路径

    spring:
      mvc:
        view:
          # 页面默认前缀目录
          prefix: /WEB-INF/jsp/
          # 响应页面默认后缀
          suffix: .jsp

三、在 src/main 下面创建 webapp/WEB-INF/jsp 目录用来存放我们的jsp页面。

index.jsp

    <%@ page language="java" pageEncoding="UTF-8"%>
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html>
    <head>
    <title>Spring Boot Sample</title>
    </head>

    <body>
        Time: ${time}
        <br>
        Message: ${message}
    </body>
    </html>

page1.jsp

    <%@ page language="java" pageEncoding="UTF-8"%>
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html>
    <head>
    <title>Spring Boot Sample</title>
    </head>

    <body>
        <h1>${content }</h1>
    </body>
    </html>

四，编写controller测试

    package com.test.controller;

    import org.springframework.beans.factory.annotation.Value;
    import org.springframework.stereotype.Controller;
    import org.springframework.ui.Model;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.servlet.ModelAndView;

    import java.util.Date;
    import java.util.Map;

    /**
     * @author xiaodongdong
     * @description: 测试controller跳转到jsp页面
     * @create 2017-11-13 11:36
     **/

    @Controller
    public class PageController {

        // 从 application.yml 中读取配置，如取不到默认值为Hello Jsp
        @Value("${application.hello:Hello Jsp}")
        private String hello = "Hello Jsp";

        /**
         * 默认页<br/>
         * @RequestMapping("/") 和 @RequestMapping 是有区别的
         * 如果不写参数，则为全局默认页，加入输入404页面，也会自动访问到这个页面。
         * 如果加了参数“/”，则只认为是根页面。
         * 可以通过localhost:8080或者localhost:8080/index访问该方法
         */
        @RequestMapping(value = {"/","/index"})
        public String index(Map<String, Object> model){
            // 直接返回字符串，框架默认会去 spring.view.prefix 目录下的 （index拼接spring.view.suffix）页面
            // 本例为 /WEB-INF/jsp/index.jsp
            model.put("time", new Date());
            model.put("message", this.hello);
            return "index";
        }

        /**
         * 响应到JSP页面page1
         */
        @RequestMapping("/page1")
        public ModelAndView page1(){
            // 页面位置 /WEB-INF/jsp/page/page.jsp
            ModelAndView mav = new ModelAndView("page/page1");
            mav.addObject("content", hello);
            return mav;
        }

        /**
         * 响应到JSP页面page1（可以直接使用Model封装内容，直接返回页面字符串）
         */
        @RequestMapping("/page2")
        public String page2(Model model){
            // 页面位置 /WEB-INF/jsp/page/page.jsp
            model.addAttribute("content", hello + "（第二种）");
            return "page/page1";
        }
    }

设置 Intellij idea 工程，工具栏 File->Project Structure，在弹出的页面中选 Modules，中间一栏选 Web（没有则按“+”号新建），然后设置 Deployment Descriptors 和 Web Resource Directories（这个变量应该是默认就有的），其中 Deployment Descriptors 指向项目下 /src/main/webapp/WEB-INF/web.xml，Web Resource Directories 默认是有的，不用修改。


## Reactor 响应式编程
- https://potoyang.gitbook.io/spring-in-action-v5/di-10-zhang-reactor-jie-shao/10.1-li-jie-xiang-ying-shi-bian-cheng
- Spring in Action - Part 3 Reactive Spring

响应式编程是对命令式编程进行替代的一个范例。这种替代的存在是因为响应式编程解决了命令式编程的限制。通过了解这些限制，可以更好地把握响应式模式的好处。

如果和许多开发者一样，都是从**命令式编程**起步的。很自然地，现在你所写的大多数代码都是命令式的。命令式编程是非常直观的，现在的学生在他们学校的 STEM 课程中很轻松地学习它，它很强大，以至于它构成了大部分的代码，驱动着最大的企业。

这个想法很简单：你写的代码就是一行接一行的指令，按照它们的顺序一次一条地出现。一个任务被执行，程序就需要等到它执行完了，才能执行下一个任务。每一步，数据都需要完全获取到了才能被处理，因此它需要作为一个整体来处理。

这样做还行吧...直到它不得行了。当正在执行的任务被阻塞了，特别是它是一个 IO 任务，例如将数据写入到数据库或从远程服务器获取数据，那么调用该任务的线程将无法做任何事情，直到任务完成。说穿了，阻塞的线程就是一种浪费。

大多数编程语言，包括 Java，支持并发编程。在 Java 中启动另一个线程并将其发送到执行某项工作的分支上是相当容易的，而调用线程则继续执行其他工作。尽管很容易创建线程，但这些线程可能最终会阻塞自己。在管理在多线程里面的并发是很具有挑战性的。更多的线程意味着更高的复杂度。

相反，**响应式编程**是函数式和声明式的。响应式编程涉及描述通过该数据流的 pipeline 或 stream，而不是描述的一组按顺序执行的步骤。响应式流处理数据时只要数据是可用的就进行处理，而不是需要将数据作为一个整体进行提供。事实上，输入数据可以是无穷的（例如，一个地点的实时温度数据的恒定流）。

应用于一个真实世界的类比就是，将命令式编程看做一个装水的气球，响应式编程看做花园里面的水管。两者都是在炎热的夏天让你的朋友惊喜并沉浸其中的方式。但是它们的执行风格是不同的：

一个水气球一次能携带的它的有效载荷，在撞击的那一刻浸湿了它预定的目标。然而，水球的容量是有限的，如果你想用水泡更多的人（或把同一个人淋得更湿），你唯一的选择就是增加水球的数量。

一根花园水龙带将其有效载荷作为一股水流从水龙头流向喷嘴。花园水龙头接的水带的容量可能是有限的，但在打水仗的过程中水是源源不断的。只要水从水龙头进入软管，就会一直通过软管然后从喷嘴喷出。同一个花园软管是很容易扩展的，你和朋友们可以玩得更尽兴。

命令式编程就类似打水仗中的水球，本质上没有什么问题，但是拿着类似响应式编程的水管的人在可扩展性和性能方面是有优势的。

Reactive Streams 是 2013 年底由 Netflix、Lightbend 和 Pivotal（Spring 背后的公司）的工程师发起的一项计划。响应式流旨在为无阻塞异步流处理提供一个标准。

我们已经谈到了响应式编程的异步特性；它使我们能够并行执行任务以获得更大的可伸缩性。Backpressure 回压处理通过对用户愿意处理的数据量设定限制，数据消费者可以避免被生产速度过快的数据淹没。

Java Streams 与 Reactive Streams 对比：

- 在 Java 流和响应式流之间有很大的相似性。首先，它们的名字中都含有 Streams。它们也都为处理数据提供函数式接口。事实上，稍后当学到容器的时候，你会看到，其实它们有很多共同操作。
- 然而，Java 流通常是同步的，同时只能处理有限数据集。它们本质上是使用函数式进行集合迭代的一种手段。
- 响应式流支持任何大小的数据集，包括无限数据集的异步处理。它们使实时处理数据成为了可能。

响应式流的规范可以通过四个接口定义来概括：

- **Publisher** 为每一个 Subscription 的 Subscriber 生产数据。
- **Subscriber** 通过调用 onSubscribe() 函数接收消息，调用 request() 去请求数据。
- **Subscription** 对象将 Publisher 调用 onSubscribe() 发出的消息传输给 Subscriber。
- **Processor** 它连接了 Subscriber 和 Publisher。

响应式流通常使用弹珠图（Marble Diagram）进行绘制。弹珠图最简单的形式就是，在最上面画出数据流经 Flux 或是 Mono 的时间线，在中间画出操作，在最下面画出 Flux 或是 Mono 结果的时间线。当数据流通过原始的 Flux 后，它通过一些操作进行处理，通过数据流处理后产生一个新的 Flux。




## Spring 5 WebFlux
- [Spring 5 WebFlux](https://www.jianshu.com/p/40a0ebe321be)
- [了解 Spring 5.0 WebFlux 应用场景](https://www.cnblogs.com/quanxiaoha/p/10773773.html)
- [Spring 5 WebFlux 性能测试](https://blog.csdn.net/get_set/article/details/79492440)
- [Spring 5 webflux](https://www.zhihu.com/question/68164187)
- [Project Reactor reference documentation](https://projectreactor.io/docs)
- [Project Reactor Sources](https://github.com/reactor/reactor-core/)
- [Project Reactor 3 Reference Guide](https://projectreactor.io/docs/core/release/reference/)
- https://docs.spring.io/spring/docs/5.1.7.RELEASE/spring-framework-reference/web-reactive.html#webflux
- https://potoyang.gitbook.io/spring-in-action-v5/di-10-zhang-reactor-jie-shao/10.2-reactor/10.2.1-tu-jie-xiang-ying-shi-liu
- https://projectreactor.io/docs/core/release/api/reactor/core/publisher/Mono.html
- https://projectreactor.io/docs/core/release/api/reactor/core/publisher/Flux.html

Spring 5 的一大亮点是对响应式编程的支持，基于 Reactive Streams 的 Spring WebFlux 框架，构建异步的、非堵塞的、事件驱动的服务，在伸缩性方面表现非常好。

对比 Spring MVC 更有益我们去理解 WebFlux：

- Spring MVC 构建于 Servlet API 之上，使用的是同步阻塞式 I/O 模型，就是说，每一个请求对应一个线程去处理。
- Spring WebFlux 是一个异步非阻塞式的 Web 框架，它能够充分利用多核 CPU 的硬件资源去处理大量的并发请求。

明确一点就是 WebFlux 不是 Spring MVC 的替代方案！，虽然 WebFlux 也可以被运行在 Servlet 容器上（需是 Servlet 3.1+ 以上的容器），但是 WebFlux 主要还是应用在异步非阻塞编程模型，而 Spring MVC 是同步阻塞的，如果你目前在 Spring MVC 框架中大量使用非同步方案，那么，WebFlux 才是你想要的，否则，使用 Spring MVC 才是你的首选。

异步非阻塞并不会使程序运行得更快，WebFlux 并不能使接口的响应时间缩短，它仅仅能够提升吞吐量和伸缩性。

在微服务架构中，Spring MVC 和 WebFlux 可以混合使用，比如已经提到的，对于那些 IO 密集型服务(如网关)，我们就可以使用 WebFlux 来实现。

WebFlux 模块由三个新组件构成：

- Router Functions: 对标 @Controller，@RequestMapping 等标准的 Spring MVC 注解，提供一套函数式风格的 API，用于创建 Router，Handler 和 Filter。
- WebFlux: 核心组件，协调上下游各个组件提供响应式编程支持。
- Reactive Streams: 一种支持背压 Backpressure 的异步数据流处理标准，主流实现有 RxJava 和 Reactor，Spring WebFlux 默认集成的是 Reactor。

WebFlux 模块需要运行在实现了 Servlet 3.1+ 规范的容器之上，Servlet 3.1 规范中新增了对异步处理的支持，在新的 Servlet 规范中，Servlet 线程不需要一直阻塞等待直到业务处理完成，也就是说，Servlet 线程将不需要等待业务处理完成再进行结果输出，然后再结束 Servlet 线程，而是在接到新的请求之后，Servlet 线程可以将这个请求委托给另外一个线程（业务线程）来完成，Servlet 线程将委托完成之后变返回到容器中去接收新的请求，Servlet 3.1 规范特别适用于那种业务处理非常耗时的场景之下，可以减少服务器资源的占用，并且提高并发处理速度，而对于那些能快速响应的场景收益并不大。

Reactor 类似于 RxJava 2.0，同属于第四代响应式框架，下面主要介绍一下 Reactor 中的 Flux、Mono 两个关键概念。

如果去查看源代码的话，可以发现，Flux 和 Mono 都实现了 Reactor 的 Publisher 接口，从这里可以看出，Flux 和 Mono 属于事件发布者，类似与生产者，对消费者提供订阅接口，当有事件发生的时候，Flux 或者 Mono 会通过回调消费者的相应的方法来通知消费者相应的事件，这也就是所谓的相应式编程模型，生产者和消费者减耦，它们之间通过实现一个共同的方法组来实现相互联系（生产者通知事件是通过回调消费者的方法，而实现通知很多时候是通过代理）。

Flux 可以 emit 很多 item，并且这些 item 可以经过若干 Operators 然后才被 subscrib，下面是使用 Flux 的一个小例子：

    Flux.fromIterable(getSomeLongList())
        .mergeWith(Flux.interval(100))
        .doOnNext(serviceA::someObserver)
        .map(d -> d * 2)
        .take(3)
        .onErrorResumeWith(errorHandler::fallback)
        .doAfterTerminate(serviceM::incrementTerminate)
        .subscribe(System.out::println);


Mono 只能 emit 最多只能一个 item，下面是使用 Mono 的一个小例子：

    Mono.fromCallable(System::currentTimeMillis)
        .flatMap(time -> Mono.first(serviceA.findRecent(time), serviceB.findRecent(time)))
        .timeout(Duration.ofSeconds(3), errorHandler::fallback)
        .doOnSuccess(r -> serviceM.incrementSuccess())
        .subscribe(System.out::println);

简单体验 WebFlux

Spring 官方为了让我们更加快速/平滑到 WebFlux，之前 SpringMVC 那套都是支持的。也就是说：我们可以像使用 SpringMVC 一样使用着 WebFlux。

在 Spring Boot 项目中添加依赖：

    <!-- https://mvnrepository.com/artifact/org.projectreactor/reactor-core -->
    <dependency>
        <groupId>org.projectreactor</groupId>
        <artifactId>reactor-core</artifactId>
        <version>1.1.6.RELEASE</version>
    </dependency>

    // https://mvnrepository.com/artifact/org.projectreactor/reactor-core
    @Grapes(
        @Grab(group='org.projectreactor', module='reactor-core', version='1.1.6.RELEASE')
    )

Reactor 还提供了测试支持，把以下这个依赖添加到项目构建中：

    <dependency>
        <groupId>io.projectreactor</groupId>
        <artifactId>reactor-test</artifactId>
        <scope>test</scope>
    </dependency>

我假定你要向 Spring Boot 项目中添加这些依赖，它可以为你处理的依赖管理，所以没有必要指定依赖的 version 元素。但是如果你想在非 Spring Boot 项目中使用 Reactor，那么你需要在构建中设置 Reactor 的 BOM（物料清单）。下面的依赖管理条目增加了 Reactor 的 Bismuth-RELEASE 到构建中：

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.projectreactor</groupId>
                <artifactId>reactor-bom</artifactId>
                <version>Bismuth-RELEASE</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

现在，Reactor 在你的项目构建中了，可以使用 Mono 和 Flux 开始创建响应式管道了。

WebFlux 使用的响应式流并不是用 JDK9 平台，而是一个叫做 Reactor 响应式流库。所以，入门 WebFlux 其实更多是了解怎么使用 Reactor 的 API。

Reactor 是一个响应式流，它也有对应的发布者 Publisher，Reactor 的发布者用两个类来表示：

- Mono(返回0或1个元素)
- Flux(返回0-n个元素)

而订阅者则是 Spring 框架去完成，下面我们来看一个简单的例子：

    // 阻塞5秒钟
    private String createStr() {
        try {
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
        }
        return "some string";
    }

    // 普通的SpringMVC方法
    @GetMapping("/1")
    private String get1() {
        log.info("get1 start");
        String result = createStr();
        log.info("get1 end.");
        return result;
    }

    // WebFlux(返回的是Mono)
    @GetMapping("/2")
    private Mono<String> get2() {
        log.info("get2 start");
        Mono<String> result = Mono.fromSupplier(() -> createStr());
        log.info("get2 end.");
        return result;
    }

首先，值得说明的是，我们构建 WebFlux 环境启动时，应用服务器默认是 Netty。我们分别来访问一下 SpringMVC 的接口和 WebFlux 的接口，看一下有什么区别。

    get1 start 08/14/20 15:56:19.298
    get1 end. 08/14/20 15:56:24.300

    get2 start 08/14/20 15:57:50.242
    get2 end. 08/14/20 15:57:50.243

从调用者(浏览器)的角度而言，是感知不到有什么变化的，因为都是得等待 5s 才返回数据。但是，从服务端的日志我们可以看出，WebFlux 是直接返回 Mono 对象的，而不是像 SpringMVC 一直同步阻塞 5s，线程才返回。


演示创建一个 Flux，但它没有订阅者。需要添加一个订阅者，可以调用 Flux 中的 subscribe() 方法。

要是没有订阅者，数据不会流动。以花园软管的思路进行类比，你已经把软管接到出水口了，另一端就是从自来水公司流出的水。但是水不会流动，除非你打开水龙头。对响应式类型的订阅就是打开数据流的方式。

    @Test
    public void createAFlux_just() {
        Flux<String> fruitFlux = Flux
            .just("Apple", "Orange", "Grape", "Banana", "Strawberry");
    }

    fruitFlux.subscribe(
        f -> System.out.println("Here's some fruit: " + f);
    );

subscribe() 中的 lambda 表达式实际上是 java.util.Consumer，用于创建响应式流的 Subscriber。由于调用了 subscribe() 方法，数据开始流动了。在这个例子中，不存在中间操作，因此数据直接从 Flux 流到了 Subscriber。
为了在运行过程中观察响应式类型，一个好方法就是将 Flux 或 Mono 打印到控制台里面。但是，测试 Flux 或 Mono 更好的方式是使用 Reactor 中的 StepVerifier。给定一个 Flux 或 Mono，StepVerifier 订阅这个响应式类型，然后对流中流动的数据应用断言，最后验证流以预期方式完成。
例如，为了验证规定的数据流经 fruitFlux，可以写一个测试，如下所示：

    StepVerifier.create(fruitFlux)
        .expectNext("Apple")
        .expectNext("Orange")
        .expectNext("Grape")
        .expectNext("Banana")
        .expectNext("Strawberry")
        .verifyComplete();

这个例子中，StepVerifier 订阅了 Flux，然后对每一个匹配到的期望的水果名字做断言。最后，它验证了 Strawberry 是由 Flux 生成的，对 Flux 的验证完毕。



## Spring Security
- [Spring Cloud Security](https://cloud.spring.io/spring-cloud-security/reference/html/)
- [Spring Security](https://juejin.im/post/6844903959627300872)
- https://potoyang.gitbook.io/spring-in-action-v5/di-4-zhang-spring-an-quan
- https://potoyang.gitbook.io/spring-in-action-v4/untitled-3

Spring Security 解决了广泛的应用程序安全性需求，包括身份验证、授权和 API 安全性。

    <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-security -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
        <version>2.3.3.RELEASE</version>
    </dependency>

    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-security
    @Grapes(
        @Grab(group='org.springframework.boot', module='spring-boot-starter-security', version='2.3.3.RELEASE')
    )

在 Spring Security 的早期版本中（在其还被称为 Acegi Security 之时），为了在 Web 应用中启用简单的安全功能，我们需要编写上百行的 XML 配置。Spring Security 2.0 提供了安全性相关的 XML 配置命名空间，让情况有了一些好转。

Spring 3.2 引入了新的 Java 配置方案，完全不再需要通过 XML 来配置安全性功能了。如下的程序清单展现了 Spring Security 最简单的 Java 配置。

    package spitter.config;

    import org.springframework.context.annotation.Configuration;
    import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
    import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebSecurity;

    @Configuration
    @EnableWebSecurity
    public class SecurityConfig extends WebSecurityConfigurerAdapter {
    }

**@EnableWebSecurity** 注解将会启用 Web 安全功能，但它本身并没有什么用处，不过，如果你的应用碰巧是使用 Spring MVC 开发的，那么就应该考虑使用 **@EnableWebMvcSecurity** 替代它。Spring Security 必须配置在一个实现了 **WebSecurityConfigurer** 的 bean 中，或者（简单起见）扩展 **WebSecurityConfigurerAdapter**。在 Spring 应用上下文中，任何实现了 WebSecurityConfigurer 的 bean 都可以用来配置 Spring Security。

WebSecurityConfigurerAdapter 提供三个 configure() 方法来配置 Web 安全性，这个过程中会使用传递进来的参数设置行为：

|                   方法                  |                     描述                    |
|-----------------------------------------|---------------------------------------------|
| configure(WebSecurity)                  | 通过重载，配置 Spring Security 的 Filter 链 |
| configure(HttpSecurity)                 | 通过重载，配置如何通过拦截器保护请求        |
| configure(AuthenticationManagerBuilder) | 通过重载，配置 user-detail 服务             |

如果配置类没有重写上述三个 configure() 方法中的任何一个，这就说应用现在是被锁定的。尽管对于我们的需求来讲默认的 Filter 链是不错的，但是默认的 configure(HttpSecurity) 实际上等同于如下所示：

    protected void configure(HttpSecurity http) throws Exception {
      http
        .authorizeRequests()
        .anyRequest().authorized()
        .and()
        .formLogin()
        .and()
        .httpBasic();
    }

这个简单的默认配置指定了该如何保护 HTTP 请求，以及客户端认证用户的方案。通过调用 **authorizeRequests()** 和 anyRequest().authenticated() 就会要求所有进入应用的 HTTP 请求都要进行认证。它也配置 Spring Security 支持基于表单的登录以及 HTTP Basic 方式的认证。

同时，因为我们没有重载 configure(AuthenticationManagerBuilder) 方法，所以没有用户存储支撑认证过程。没有用户存储，实际上就等于没有用户。所以，在这里所有的请求都需要认证，但是没有人能够登录成功。
为了让 Spring Security 满足我们应用的需求，还需要再添加一点配置。

具体来讲，我们需要：

- 配置用户存储，开发过程通常会使用基于内存的账户；
- 指定哪些请求需要认证，哪些请求不需要认证，以及所需要的权限；
- 提供一个自定义的登录页面，替代原来简单的默认登录页。

除了这些 Spring Security 功能，我们可能还希望基于安全限制，有选择性地在 Web 视图上显示特定的内容。



## Spring HandlerInterceptor 拦截器
- [Spring MVC HandlerInterceptor 拦截器XML配置](http://c.biancheng.net/view/4431.html)
- [SpringBoot - 拦截器的注册和使用（附样例）](https://www.hangge.com/blog/cache/detail_2507.html)
- [保护 Web 应用 - 拦截请求](https://potoyang.gitbook.io/spring-in-action-v4/untitled-3/untitled-3)
- [一个基于Spring Boot的API、RESTful API项目种子（骨架）](https://www.jianshu.com/p/99fcead32d35)

Spring MVC 中提供了 AOP 风格的拦截器，拥有更加精细的拦截处理能力。

- 拦截器中的方法将按 preHandle -> Controller -> postHandle -> afterCompletion 的顺序执行；
- 只有 preHandle 方法返回 true，postHandle、afterCompletion 才有可能被执行；
- 如果 preHandle 方法返回 false，则该拦截器的 postHandle、afterCompletion 不会被执行；
- 多个拦截器，其中 preHandle 方法返回 true 的拦截器的 afterCompletion 会执行。
- 只有所有拦截器的 preHandle 方法都返回 true，postHandle 才会执行。

Spring Boot 中拦截器的注册与使用更加方便，下面通过样例进行演示。

1，创建拦截器

首先我们实现 HandlerInterceptor 接口自定义一个拦截器 MyInterceptor1，内容如下：

    import org.springframework.web.servlet.HandlerInterceptor;
    import org.springframework.web.servlet.ModelAndView;
     
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
     
    public class MyInterceptor1 implements HandlerInterceptor {
     
        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                                 Object handler) throws Exception {
            System.out.println("MyInterceptor1>>>preHandle");
            return true;
        }
     
        @Override
        public void postHandle(HttpServletRequest request, HttpServletResponse response,
                               Object handler, ModelAndView modelAndView) throws Exception {
            System.out.println("MyInterceptor1>>>postHandle");
        }
     
        @Override
        public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
                                    Object handler, Exception ex) throws Exception {
            System.out.println("MyInterceptor1>>>afterCompletion");
        }
    }

2，配置拦截器

接着需要定义一个配置类来配置拦截器。自定义类只需实现 WebMvcConfigurer 接口，实现接口中的 addInterceptors 方法即可。

    @Configuration
    public class WebMvcConfig implements WebMvcConfigurer {
        @Override
        public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new MyInterceptor1())
                .addPathPatterns("/**") // 配置拦截路径（所有路径都拦截）
                .excludePathPatterns("/hello2"); // 配置排除的路径
        }
    }

3，运行测试

（1）首先我们通过浏览器访问接口 /hello1，可以看到控制台输出信息如下，说明拦截器成功启用；
（2）接着访问接口 /hello2，由于该路径被排除再外，因此就没有被拦截；

在拦截器中提供简单的接口签名认证：

    public void addInterceptors(InterceptorRegistry registry) 
    {
        // 接口签名认证拦截器，该签名认证比较简单，实际项目中可以使用Json Web Token或其他更好的方式替代。
        // 开发环境忽略签名认证
        // if ("dev".equals(env)) return ... 
        registry.addInterceptor(new HandlerInterceptorAdapter() {
            @Override
            public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
                //验证签名
                boolean pass = validateSign(request);
                if (pass) {
                    return true;
                } else {
                    logger.warn("签名认证失败，请求接口：{}，请求IP：{}，请求参数：{}",
                            request.getRequestURI(), getIpAddress(request), JSON.toJSONString(request.getParameterMap()));

                    Result result = new Result();
                    result.setCode(ResultCode.UNAUTHORIZED).setMessage("签名认证失败");
                    responseResult(response, result);
                    return false;
                }
            }
        });
    }

    /**
     * 一个简单的签名认证，规则：
     * 1. 将请求参数按ascii码排序
     * 2. 拼接为a=value&b=value...这样的字符串（不包含sign）
     * 3. 混合密钥（secret）进行md5获得签名，与请求的签名进行比较
     */
    private boolean validateSign(HttpServletRequest request) {
            String requestSign = request.getParameter("sign");//获得请求签名，如sign=19e907700db7ad91318424a97c54ed57
            if (StringUtils.isEmpty(requestSign)) {
                return false;
            }
            List<String> keys = new ArrayList<String>(request.getParameterMap().keySet());
            keys.remove("sign");//排除sign参数
            Collections.sort(keys);//排序

            StringBuilder sb = new StringBuilder();
            for (String key : keys) {
                sb.append(key).append("=").append(request.getParameter(key)).append("&");//拼接字符串
            }
            String linkString = sb.toString();
            linkString = StringUtils.substring(linkString, 0, linkString.length() - 1);//去除最后一个'&'

            String secret = "Potato";//密钥，自己修改
            String sign = DigestUtils.md5Hex(linkString + secret);//混合密钥md5

            return StringUtils.equals(sign, requestSign);//比较
    }




## Spring MVC
- https://spring.io/guides/gs/serving-web-content/
- [Spring MVC 文件上传](http://c.biancheng.net/view/4477.html)
- [Spring Boot 参考指南 ViewResolvers](https://jack80342.gitbook.io/spring-boot/ix.-how-to-guides/76.-spring-mvc/76.8-customize-viewresolvers)
- [Content Negotiation using Views](https://spring.io/blog/2013/06/03/content-negotiation-using-views)
- [SpringBoot - 自定义错误页](https://www.hangge.com/blog/cache/detail_2503.html)
- [配置 Thymeleaf 视图解析器](https://potoyang.gitbook.io/spring-in-action-v4/untitled-1/untitled-1/untitled)


Spring MVC 流程图：

    DispatcherServlet -> HandlerMapping -> HandlerInterceptor -> HttpMessageConveter -> Controller -> Action -> ModelAndView -> ViewResolver -> Model -> View

![Spring MVC 流程图](http://www.51gjie.com/Images/image1/srcc4b4l.hix.jpg)

DispatcherServlet 是中心，它负责请求的接入，控制器映射的动作执行，和控制器返回的视图模型处理，最后生成视图返回客户端。以上含 4 个最基本的 Spring MVC 接口，DispatcherServlet、HandlerMapping、Controller、ViewResolver。

Spring MVC 的工作流程如下：

- 客户端请求提交到 DispatcherServlet。
- 通过一个或多个 HandlerMapping 找到响应的 Controller。
- DispatcherServlet 将请求派发给 Controller。
- Controller 调用业务逻辑处理响应方法后，返回 ModelAndView。
- DispatcherServlet 寻找一个或多个 ViewResolver 视图解析器，找到 ModelAndView 指定的视图。
- 由 View 视图渲染结果，最后发回客户端。

Spring Boot 默认提供 Spring MVC 自动配置，不需要使用 **@EnableWebMvc** 注解，这是一个注解方式快捷配置 Spring Webmvc 的一个注解。如果需要配置 MVC 拦截器、格式化、视图等，请使用 **@Configuration** 并实现 WebMvcConfigurer 接口，不要添加 @EnableWebMvc 注解。@EnableWebMvc 只能添加到一个 **@Configuration** 配置类上，用于导入 Spring Web MVC configuration。Spring Boot 如果检测到 classpath 有 Spring webmvc 模块，会自动添加 @EnableWebMvc。

查看 @EnableWebMvc 的源码可以发现，该注解就是为了引入一个 **DelegatingWebMvcConfiguration** 配置类，而它又继承于 **WebMvcConfigurationSupport**。也就是说，如果我们使用 @EnableWebMvc 就相当于导入了 WebMvcConfigurationSupport，这时 Spring Boot 的自动装配就不会发生了。

    /*
     * @author Dave Syer
     * @author Rossen Stoyanchev
     * @since 3.1
     * @see org.springframework.web.servlet.config.annotation.WebMvcConfigurer
     * @see org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport
     * @see org.springframework.web.servlet.config.annotation.DelegatingWebMvcConfiguration
     */
    @Retention(RetentionPolicy.RUNTIME)
    @Target(ElementType.TYPE)
    @Documented
    @Import(DelegatingWebMvcConfiguration.class)
    public @interface EnableWebMvc {
    }


当使用 @EnableWebMvc 时，加载的是 WebMvcConfigurationSupport 中的配置项。

不使用 @EnableWebMvc 时，使用的是 WebMvcAutoConfiguration 引入的配置项。

查看一下 WebMvcAutoConfiguration 的源码：

    @Configuration
    @ConditionalOnWebApplication(type = Type.SERVLET)
    @ConditionalOnClass({ Servlet.class, DispatcherServlet.class, WebMvcConfigurer.class })
    @ConditionalOnMissingBean(WebMvcConfigurationSupport.class)
    @AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE + 10)
    @AutoConfigureAfter({ DispatcherServletAutoConfiguration.class, ValidationAutoConfiguration.class })
    public class WebMvcAutoConfiguration {
        ...
    }

可以看到自动配置类上有条件注解

    @ConditionalOnMissingBean(WebMvcConfigurationSupport.class)

这个注解的意思是在项目类路径中缺少 WebMvcConfigurationSupport 类型的 Bean 时，自动配置类 WebMvcAutoConfiguration 才会生效。


Spring MVC 自带 13 个视图解析器，InternalResourceViewResolver 一般会用来解析 JSP 视图。

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/WEB-INF/jsp/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }

或者在 XML 文件中配置：

    <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/"/>
        <property name="suffix" value=".jsp"/>
    </bean>



参考 serving-web-content 示例，一个 Spring MVC 工程的组成至少有三个部分：

- 使用 **@SpringBootApplication** 标注的主程序

        package com.example.servingwebcontent;

        import org.springframework.boot.SpringApplication;
        import org.springframework.boot.autoconfigure.SpringBootApplication;

        @SpringBootApplication
        public class ServingWebContentApplication {

            public static void main(String[] args) {
                SpringApplication.run(ServingWebContentApplication.class, args);
            }

        }

- 使用 **@Controller** 标注的控制器

        package com.example.servingwebcontent;

        import org.springframework.stereotype.Controller;
        import org.springframework.ui.Model;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestParam;

        @Controller
        public class GreetingController {

            @GetMapping("/greeting")
            public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
                model.addAttribute("name", name);
                return "greeting";
            }

        }

- HTML 模板文件，默认在 resource/static 目录下存放静态资源，在 templates 目录下存放任意的模板文件

        <!DOCTYPE HTML>
        <html xmlns:th="http://www.thymeleaf.org">
        <head> 
            <title>Getting Started: Serving Web Content</title> 
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <body>
            <p th:text="'Hello, ' + ${name} + '!'" />
        </body>
        </html>

Maven 配置文件的依赖设置：

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>

使用 Spring Book 的 starter 起步依赖大大简化了 Spring 的项目配置，这里使用了其中的 spring-boot-starter-web 来做 Web 开发：

    <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>2.3.3.RELEASE</version>
    </dependency>

    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web
    @Grapes(
        @Grab(group='org.springframework.boot', module='spring-boot-starter-web', version='2.3.3.RELEASE')
    )


给请求方法加注解 @ResponseBody 表示返回内容就是客户端响应内容，无需模板文件。

在控制器方法返回的视图名称中，可以使用 **redirect:** 或者 **forward:** 这样的前缀，那么这个返回的 String 不是用来查找视图的，而是用来指导浏览器进行重定向的路径，redirect: 前缀能够让重定向功能变得非常简单。

除了连接 String 的方式来构建重定向 URL，Spring 还提供了使用模板的方式来定义重定向 URL，如下使用 username 作为占位符填充到了 URL 模板：

    @RequestMapping(value="/register", method=POST);
    public String processRegistration( Spitter spitter, Model model) 
    {
      spitterRepository.save(spitter);
      
      model.addAttribute("username", spitter.getUsername());
      return "redirect:/spitter/{username}";
    }

除此之外，模型中所有其他的原始类型值都可以添加到 URL 中作为查询参数。假设模型还要包含新创建 Spitter 对象的 id 属性，那 processRegistration() 方法可以改写为如下的形式：

    @RequestMapping(value="/register", method=POST)
    public String processRegistration( Spitter spitter, Model model) 
    {
      spitterRepository.save(spitter);
      model.addAttribute("username", spitter.getUsername());
      model.addAttribute("spitterId", spitter.getId());
      return "redirect:/spitter/{username}";
    }

所返回的重定向 String 并没有太大的变化。但是，因为模型中的 spitterId 属性没有匹配重定向 URL 中的任何占位符，所以它会自动以查询参数的形式附加到重定向 URL 上。

那么结果得到的重定向 URL 路径将会是类似如下这样：

    /spitter/habuma?spitterId=42。

更深一层考虑，假设我们不想在重定向中发送 username 或 ID 了，而是要发送实际的 Spitter 对象。如果我们只发送 ID 的话，那么处理重定向的方法还需要从数据库中查找才能得到 Spitter 对象。但是，在重定向之前，我们其实已经得到了 Spitter 对象。

实际上，Spring 认为将跨重定向存活的数据放到会话中是一个很不错的方式。但是，Spring 认为我们并不需要管理这些数据，相反，Spring 提供了将数据通过 flash 属性发送的功能。按照定义，flash 属性会一直携带这些数据直到下一次请求，然后才会消失。

Spring 提供了通过 RedirectAttributes 设置 flash 属性的方法，这是 Spring 3.1 引入的 Model 的一个子接口。RedirectAttributes 提供了 Model 的所有功能，除此之外，还有几个方法是用来设置 flash 属性的。具体来讲，Redirect-Attributes 提供了一组 addFlashAttribute() 方法来添加 flash 属性。重新看一 下 processRegistration() 方法，我们可以使用 addFlashAttribute() 将 Spitter 对象添加到模型中：

    @RequestMapping(value="/register", method=POST)
    public String processRegistration( Spitter spitter, RedirectAttribute model) 
    {
      spitterRespository.save(spitter);
      model.addAttribute("username", spitter.getUsername());
      model.addFlashAttribute("spitter", spitter);
      return "redirect:/spitter/{username}";
    }

在这里，我们调用了 addFlashAttribute() 方法，并将 spitter 作为 key，Spitter 对象作为值。另外，我们还可以不设置 key 参数，让 key 根据值的类型自行推断得出：

    model.addFlashAttribute(spitter);

因为我们传递了一个 Spitter 对象给 addFlashAttribute() 方法，所以推断得到的 key 将会是 spitter。

在重定向执行之前，所有的 flash 属性都会复制到会话中。在重定向后，存在会话中的 flash 属性会被取出，并从会话转移到模型之中。处理重定向的方法就能从模型中访问 Spitter 对象了，就像获取其他的模型对象一样。


Thymeleaf 配置不正确会导出模板文件不能正确解析，Check your ViewResolver setup!

过去使用 SpringMVC 时，如果访问一个页面，必须要写相应的 Controller 类。而 SpringBoot 要实现这个需求只需要直接在 MVC 配置中重写 addViewControllers 方法配置映射关系即可，不需要在写相应的 Controller 类。

假设在 resource/templates 目录下有如下两个 Thymeleaf 模板页面：index.html 和 login.html

自定义一个 MVC 配置，并重写 addViewControllers 方法进行映射关系配置即可。

    @Configuration
    public class WebMvcConfig implements WebMvcConfigurer {
        @Override
        public void addViewControllers(ViewControllerRegistry registry) {
            registry.addViewController("/index.do").setViewName("index");
            registry.addViewController("/login.do").setViewName("login");
        }
    }

Spring 不鼓励使用 JSP，默认 Thymeleaf 模板引擎，它的属性更优秀。而作为新式的 Web 应用开发，完全分离前后端是更好的选择，使用 React、Vue、Angular 等前面框架是更好的选择。


使用 Freemarker 或 Thymeleaf 模板都是 Spring Boot 默认支持的，配置好后可以同时使用。

但配置不正确会导致异常：

    org.thymeleaf.exceptions.TemplateInputException: Error resolving template [hello]

Whitelabel Error Page 错误由以下对象发出，这是默认的错误处理，因为没有设置 /error 映射的错误处理方法所以回退到 ErrorMvcAutoConfiguration 处理：

    org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration

这种错误一般是配置错误，要注意 Status Code，比如没有设置相应的 URL 映射 status=404，又或者 MVC 找不到模板引起的错误 status=500。

解决方案是在 application.properties 配置模板文件:

    spring.mvc.view.prefix=/WEB-INF/jsp/
    spring.mvc.view.suffix=.jsp

另外，在早期版本的 Spring Boot 使用 spring.view 配置，不带 mvc 的。

有可能是编写的代码包没有被检测到，没有加载也就没有相应的功能，可以使用 @ComponentScan 标注指定扫描范围。模板语法错误，也是一个原因。

注意，控制器的返回值可以匹配一个模板，但也可以匹配到另一个控制器方法，如果一个控制器设置的映射是 **@GetMapping("/greeting")** 并且返回值是 "greeting" 这就会导致循环调用。

找不到视图：

    javax.servlet.ServletException: Could not resolve view ...

该异常是因为用定义了带 **@EnableWebMvc** 注解的配置类后发生的，在带该注解的配置类中加入下面的代码就可以了：

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/WEB-INF/jsp/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }

有了这段代码在 application.yml 中的下面的配置就没有必要了

    spring: 
      mvc:
        view:
          prefix: /WEB-INF/
          suffix: .jsp


Spring MVC 编码值默认是 ISO-8859-1，而浏览器一般以 UTF-8 编码渲染页面的。

对于 response 乱码，只需要在服务器端指定一个编码字符集，然后通知浏览器按照这个字符集进行解码就可以了。

    response.setCharacterEncoding("utf-8”);
    response.setHeader("contentType", "text/html; charset=utf-8”);
    response.setContentType("text/html;charset=utf-8”);
 
或者读取时进行编码转换：

    byte[] bytes = str.getBytes("ISO-8859-1")
    String name=new String(bytes,”UTF-8”);

Controller传入参数为的HttpServletRequest类，获取到request，并调用

    request.setCharacterEncoding("UTF-8");

终极解决方案：使用 Filter 解决，我们自己编写中文乱码的 Filter 会比较复杂，所以 spring mvc 已经提供了 org.springframework.web.filter.CharacterEncodingFilter 来解决乱码问题。

Filter 的核心方法就是 doFilter()，CharacterEncodingFilter 该类的父类中有一个

web.xml 配置参考：

      <filter>
           <filter-name>CharacterEncodingFilter</filter-name>
           <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
           <init-param>  <!--字符的编码格式 -->
           <param-name>encoding</param-name>
           <param-value>UTF-8</param-value>
       </init-param>
           <init-param>  <!--强制使用Encoding设置的编码格式-->
           <param-name>forceEncoding</param-name>
           <param-value>true</param-value>
       </init-param>
      </filter>

      <filter-mapping>
           <filter-name>CharacterEncodingFilter</filter-name>
           <url-pattern>/*</url-pattern>    
      </filter-mapping>


Spring Boot 项目默认的编码格式就是 UTF-8：

    // application.properties
    spring.http.encoding.charset=UTF-8
    spring.http.encoding.enabled=true
    spring.http.encoding.force=true
    server.tomcat.uri-encoding=UTF-8

    // application.yml
    spring:
      http:
        encoding:
        charset: UTF-8
        enabled: true
        force: true


在 Groovy 脚本代码中进行硬编码的中文出现乱码，如下面这个方法，接收来自客户端的参数是 UTF-8 的字符“中汉”：

    // http://localhost:8080/sayhello?name=%E4%B8%AD%E6%B1%89
    @RequestMapping(value = "/sayhello", method = RequestMethod.GET)
    @ResponseBody
    String sayhello(@RequestParam(value="name", defaultValue="ABC") String name) 
    {
        System.out.println("[X] sayhello receive name: " + name);
        return String.format("中汉 Hello %s!", name);
    }

输出到页面的编码值显示乱码，是因为硬编码在 Spring CLI 调用 Groovy 执行脚本时，对内容进行处理与 Spring 不匹配，解决问题的方法首先需要了解 Groovy 对源代码文件进行什么编码处理： 

    娑擃厽鐪?Hello 中汉!

以 UTF-8 编码的**中汉**两个字符举例，错误的使用 GBK 编码的现象就会显示乱码**涓眽**。


可以使用 Groovy 直接运行脚本测试，脚本文件使用 UTF-8 编码保存，在简体中文 Windows 系统中 Groovy 会将中文转换成 GBK，如果代码对硬编码的中文当 UTF-8 编码处理就会出现乱码。

而 Spring 当作 UTF-8 再次载入后就会对硬编码的中文产生二次破坏，这种不合规的编码转换并没有办法逆向转换回来：

    def msg = '中汉 hello demo.groovy!'
    def m2 = new String(msg.getBytes("UTF-8"), "GBK")
    // 涓�姹� hello demo.groovy!
    println m2
    // 娑擃厽鐪? hello demo.groovy!
    println new String(m2.getBytes("UTF-8"), "GBK")

除了正确的修改 Spring 中对 Groovy 的配置，只有以下这个方法可以尝试修改错误的编码：

    new String(msg.getBytes("GBK"), "UTF-8")






## Spring HTTP Exception
- https://potoyang.gitbook.io/spring-in-action-v4/di-7-zhang-spring-mvc-de-gao-ji-ji-shu/untitled-3/untitled

Spring 提供了多种方式将异常转换为响应：

- 特定的 Spring 异常将会自动映射为指定的 HTTP 状态码；
- 异常上可以添加 **@ResponseStatus** 注解，从而将其映射为某一个 HTTP 状态码；
- 在方法上可以添加 **@ExceptionHandler** 注解，使其用来处理异常。

作为样例，假设用户试图创建的 Spittle 与已创建的 Spittle 文本完全相同，那么 SpittleRepository 的 save() 方法将会抛出 DuplicateSpittle Exception 异常。

这意味着控制器 saveSpittle() 方法可能需要处理这个异常，如下面的程序清单所示，saveSpittle() 方法可以直接处理这个异常。

    @RequestMapping(method=RequestMethod.POST)
    public String saveSpittle(SpittleForm form, Model model) 
    {
      try {
        spittleRepository.save(new Spittle(null, form.getMessage(), new Date(), 
            form.getLongitude(), form.getLatitude()));
        return "redirect:/spittles";
      } catch (DuplicateSpittleException e) {
        return "error/duplicate";
      }
    }

现在，将其中异常处理代码抽取，为 SpittleController 添加一个新的方法，它会处理抛出 Duplicate-SpittleException 的情况：

    @ExceptionHandler(DuplicateSpittleException.class)
    public String handleDuplicateSpittle() {
      return "error/duplicate";
    }

handleDuplicateSpittle() 方法上添加了 **@ExceptionHandler** 注解，当抛出  DuplicateSpittleException 异常的时候，将会委托该方法来处理。它返回的是一个 String，这与处理请求的方法是一致的，指定了要渲染的逻辑视图名，它能够告诉用户他们正在试图创建一条重复的条目。

对于 @ExceptionHandler 注解标注的方法来说，比较有意思的一点在于它能处理同一个控制器中所有处理器方法所抛出的异常。所以，尽管我们从 saveSpittle() 中抽取代码创建了 handleDuplicateSpittle() 方法，但是它能够处理 SpittleController 中所有方法所抛出的 DuplicateSpittleException 异常。不用在每一个可能抛出 DuplicateSpittleException 的方法中添加异常处理代码，这一个方法就涵盖了所有的功能。

既然 @ExceptionHandler 注解所标注的方法能够处理同一个控制器类中所有处理器方法的异常，那么你可能会问有没有一种方法能够处理所有控制器中处理器方法所抛出的异常呢。从 Spring 3.2 开始，这肯定是能够实现的，我们只需将其定义到控制器通知类中即可。

Spring 3.2 为这类问题引入了一个新的解决方案：**控制器通知** controller advice 是任意带有 **@ControllerAdvice** 注解的类，这个类会包含一个或多个如下类型的方法：

- **@ExceptionHandler** 注解标注的方法；
- **@InitBinder** 注解标注的方法；
- **@ModelAttribute** 注解标注的方法。

在带有 @ControllerAdvice 控制器通知注解的类中，以上所述的这些方法会运用到整个应用程序所有控制器中带有 @RequestMapping 注解的方法上。

@ControllerAdvice 注解本身已经使用了 @Component，因此它所标注的类将会自动被组件扫描获取到，就像带有 @Component 注解的类一样。

@ControllerAdvice 最为实用的一个场景就是将所有的 @ExceptionHandler 方法收集到一个类中，这样所有控制器的异常就能在一个地方进行一致的处理。

例如，我们想将 DuplicateSpittleException 展示的处理方法用到整个应用程序的所有控制器上，如下 AppWideExceptionHandler 控制器通知类就能完成这一任务，使用 @ControllerAdvice，为所有的控制器处理异常：

    package spittr.web;
    ​
    import org.springframework.web.bind.annotation.ControllerAdvice;
    import org.springframework.web.bind.annotation.ExceptionHandler;
    ​
    @ControllerAdvice
    public class AppWideExceptionHandler 
    {​
      @ExceptionHandler(DuplicateSpittleException.class)
      public String duplicateSpittleHandler() 
      {
        return "error/duplicate";
      }
    }

现在，如果任意的控制器方法抛出了 DuplicateSpittleException，不管这个方法位于哪个控制器中，都会调用这个 duplicateSpittleHandler() 方法来处理异常。我们可以像编写 @RequestMapping 注解的方法那样来编写 @ExceptionHandler 注解的方法。如程序所示，它返回 error/duplicate 作为逻辑视图名，因此将会为用户展现一个友好的出错页面。




在默认情况下，Spring 会将自身的一些异常自动转换为合适的状态码。表 7.1 列出了这些映射关系。

|               Spring 异常               |          HTTP 状态码         |
|-----------------------------------------|------------------------------|
| BindException                           | 400 - Bad Request            |
| ConversionNotSupportedException         | 500 - Internal Server Error  |
| HttpMediaTypeNotAcceptableException     | 406 - Not Acceptable         |
| HttpMediaTypeNotSupportedException      | 415 - Unsupported Media Type |
| HttpMessageNotReadableException         | 400 - Bad Request            |
| HttpMessageNotWritableException         | 500 - Internal Server Error  |
| HttpRequestMethodNotSupportedException  | 405 - Method Not Allowed     |
| MethodArgumentNotValidException         | 400 - Bad Request            |
| MissingServletRequestParameterException | 400 - Bad Request            |
| MissingServletRequestPartException      | 400 - Bad Request            |
| NoSuchRequestHandlingMethodException    | 404 - Not Found              |
| TypeMismatchException                   | 400 - Bad Request            |




## Spring + Thymeleaf
- https://www.yiibai.com/thymeleaf/thymeleaf-instroduce.html
- [thymeleaf 学习笔记-基础篇(中文教程)](https://www.cnblogs.com/vinphy/p/4674247.html)
- [Thymeleaf Page Layouts](https://www.thymeleaf.org/doc/articles/layouts.html)
- [Spring MVC view layer: Thymeleaf vs. JSP](https://www.thymeleaf.org/doc/articles/thvsjsp.html)
- [Tutorial: Thymeleaf + Spring](https://www.thymeleaf.org/doc/tutorials/2.1/thymeleafspring.html)
- [Tutorial: Using Thymeleaf](https://www.thymeleaf.org/doc/tutorials/2.1/usingthymeleaf.html)
- [SpringBoot - 整合Thymeleaf模板引擎（附样例）](https://www.hangge.com/blog/cache/detail_2525.html)
- [Lombok features](https://projectlombok.org/features/all)
- [SpringBoot - Lombok @Data、@Value、@NonNull、@Cleanup](https://www.hangge.com/blog/cache/detail_2494.html)
- [pringBoot - Lombok使用详解](https://www.hangge.com/blog/cache/detail_2491.html)

Thymeleaf 是一个跟 Velocity、FreeMarker 类似的模板引擎，它可以完全替代 JSP，珍爱生命，远离 JSP！

- Thymeleaf 在有网络和无网络的环境下皆可运行，即它可以让美工在浏览器查看页面的静态效果，也可以让程序员在服务器查看带数据的动态页面效果。这是由于它支持 html 原型，然后在 html 标签里增加额外的属性来达到模板+数据的展示方式。浏览器解释 html 时会忽略未定义的标签属性，所以 thymeleaf 的模板可以静态地运行；当有数据返回到页面时，Thymeleaf 标签会动态地替换掉静态内容，使页面动态显示。
- Thymeleaf 开箱即用的特性。它提供标准和 Spring 标准两种方言，可以直接套用模板实现 JSTL、 OGNL 表达式效果，也可以扩展和创建自定义的方言。
- Thymeleaf 提供 Spring 标准方言和一个与 SpringMVC 完美集成的可选模块，可以快速的实现表单绑定、属性编辑器、国际化等功能。

Spring Boot 工程如果要使用 Thymeleaf，只需编辑 pom.xml 文件，添加 spring-boot-starter-web 和 spring-boot-starter-thymeleaf 依赖即可。

    <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-thymeleaf -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
        <version>2.3.3.RELEASE</version>
    </dependency>

    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-thymeleaf
    @Grapes(
        @Grab(group='org.springframework.boot', module='spring-boot-starter-thymeleaf', version='2.3.3.RELEASE')
    )

可选配置，在 application.properties 设置模板文件路径前缀和文件名后缀：

    spring.thymeleaf.prefix=classpath:/templates/
    spring.thymeleaf.suffix=.html

或者使用 YAML 配置文件格式：

    ##视图模型
    spring:
      thymeleaf:
        prefix: classpath:/templates/
        suffix: .html
        cache: false
        encoding: utf-8
        content-type: text/html
        check-template-location: true
     

例如 /static/index.html 会作为默认主页文件加载，而 /templates/greeting.html 会作为 MVC 的视图模板加载，如果控制器方法返回值 "greeting"。

但是，注意，在控制器 Action 方法名称和返回值相同时，有可能产生循环引用 Circular，因为缺失相应的模板文件会导致回退执行控制器方法。

Thymeleaf 带有一些称为标准方言，称为 Standard 和 SpringStandard 的东西，它们定义了一组功能，这些功能应该足以满足大多数情况。

这些标准方言在模板中的使用，以 th 前缀开头的属性，如：

    <span th:text="...">

只是 SpringStandard 包含了集成到 Spring MVC 应用程序中的特定功能，例如，使用 Spring 表达式语言进行表达式评估而不是 OGNL。

大多数 Thymeleaf 属性允许将它们的值设置为或包含表达式，由于它们使用的方言，我们将其称为标准表达式。

这些表达式可以有五种类型:

    ${...} : 变量表达式。
    *{...} : 选择表达式。
    #{...} : 消息 (i18n) 表达式。
    @{...} : 链接 (URL) 表达式。
    ~{...} : 片段表达式。
    #maps：工具对象表达式。

常用标签:

    th:action：定义后台控制器路径。
    th:each：循环语句。
    th:field：表单字段绑定。
    th:href：定义超链接。
    th:id：div 标签中的 ID 声明，类似 HTML 标签中的归属性。
    th:if：条件判断语句。
    th:include：布局标签，替换内容到引入文件。
    th:fragment：布局标签，定义一个代码片段，方便其他地方引用。
    th:object：替换对象。
    th:src：图片类地址引入。
    th:text：显示文本。
    th:value：属性赋值。

常用函数

    #dates：日期函数。
    #lists：列表函数。
    #arrays：数组函数。
    #strings：字符串函数。
    #numbers：数字函数。
    #calendars：日历函数。
    #objects：对象函数。
    #bools：逻辑函数。

Thymeleaf 配置参数进行自定义，可以直接在 application.properties 中进行配置。下面是一些常见的配置： 

    #是否开启缓存，开发时可以设置为 false，默认为 true
    spring.thymeleaf.cache=true
    #检查模版是否存在，默认为 true
    spring.thymeleaf.check-template=true
    #检查模版位置是否存在，默认为 true
    spring.thymeleaf.check-template-location=true
    #模版文件编码
    spring.thymeleaf.encoding=UTF-8
    #模版文件位置
    spring.thymeleaf.prefix=classpath:/templates/
    #Content-Type配置
    spring.thymeleaf.servlet.content-type=text/html
    #模版文件后缀
    spring.thymeleaf.suffix=.html


**变量表达式**是 OGNL 表达式 - 如果将 Thymeleaf 与 Spring 集成在上下文变量上，则为 Spring EL。它们看起来像这样:

    ${session.user.name}
    <span th:text="${book.author.name}">

上面的表达式对应在 OGNL 和 SpringEL 中等价表达:

    ((Book)context.getVariable("book")).getAuthor().getName()

还可以使用更复杂的处理方式，如:条件，迭代等等。

    <tr th:each="book:${books}">
        <td th:text="${book.id}"></td>
        <td th:text="${book.name}"></td>
        <td th:text="${book.author}"></td>
    </tr>

这里 ${books} 从上下文中选择名为 books 的变量，并在 th:each 中使用循环将其评估为迭代器。

**选择表达式**就像变量表达式一样，它们不是整个上下文变量映射上执行，而是在先前选择的对象。它们看起来像这样:

    *{customer.name}

它们所作用的对象由 th:object 属性指定:

    <div th:object="${book}">
      ...
      <span th:text="*{title}">...</span>
      ...
    </div>

所以这相当于:

    {
      // th:object="${book}"
      final Book selection = (Book) context.getVariable("book");
      // th:text="*{title}"
      output(selection.getTitle());
    }

**i18n**消息表达式，通常称为文本外部化、国际化，允许从外部源，如 .properties 文件中检索特定于语言环境的消息，通过键来引用这引用消息。

在 Spring 应用程序中，它将自动与 Spring 的 MessageSource 机制集成：

    #{main.title}
    #{message.entrycreated(${entryId})}

以下是在模板中使用它们的方式:

    <table>
      ...
      <th th:text="#{header.address.city}">...</th>
      <th th:text="#{header.address.country}">...</th>
      ...
    </table>

请注意，如果希望消息键由上下文变量的值确定，或者希望将变量指定为参数，则可以在消息表达式中使用变量表达式:

    #{${config.adminWelcomeKey}(${session.user.name})}

**链接表达式**构建 URL 并向其添加有用的上下文和会话信息，通常称为 URL 重写的过程。

    <a th:href="@{/order/list}">...</a>

    <a href="/myapp/order/list">...</a>

网址也可以带参数，如下所示:

    <a th:href="@{/order/details(id=${orderId},type=${orderType})}">...</a>

    <a href="/myapp/order/details?id=23&type=online">...</a>

**片段表达式**是一种简单的方法，用来表示标记的片段并将其移动到模板中。这些表达式，片段可以被复制，传递给其他模板的参数等等。

最常见的是使用 th:insert 或 th:replace 来插入片段:

    <div th:insert="~{commons :: main}">...</div>

但是它们可以在任何地方使用，就像任何其他变量一样:

    <div th:with="frag=~{footer :: #main/text()}">
      <p th:insert="${frag}">
    </div>


使用示范，使用了 Lombok 来编写优雅的 Java 编码：

    <!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.12</version>
        <scope>provided</scope>
    </dependency>


    // https://mvnrepository.com/artifact/org.projectlombok/lombok
    @Grapes(
        @Grab(group='org.projectlombok', module='lombok', version='1.18.12', scope='provided')
    )

我们创建 POJO 类时，经常需要先写属性，然后手写或者自动生成 get 和 set 方法，然后还要重写 toString 方法....一系列操作下来，这个 POJO 类便会产生太多的样板式代码。

这种传统的方式不仅使得代码十分臃肿，有时也不方便维护，比如：当变量名或者是修饰符改变了，我们就要删除 set、get 方法重新生成。而 Lombok 出现就是为了解决代码书写的冗余问题，下面对其进行详细进行介绍。

使用前需要安装插件，以 Intellij IDE（Mac 版）为例，依次打开 Preferences 窗口 -> Plugins -> Marketplace，搜索 Lombok 插件然后安装。

Lombok 插件主要提供了如下注解：

- @Getter 注解在属性（类）上，为属性（所有非静态成员变量）提供 get() 方法
- @Setter 注解在属性（类）上，为属性（所有非静态成员变量）提供 set() 方法
- @ToString 该注解的作用是为类自动生成 toString() 方法
- @EqualsAndHashCode 为对象字段自动生成 hashCode() 和 equals() 实现
- @AllArgsConstructor、@RequiredArgsConstructor、@NoArgsConstructor 顾名思义，为类自动生成对应参数的构造器
- @Data 注解在类上，自动为所有字段添加 @ToString、@EqualsAndHashCode、@Getter。为非 final 字段添加 @Setter 和 @RequiredArgsConstructor。本质上相当于几个注解的综合效果
- @Value 注解和 @Data 类似，区别在于它会把所有成员变量默认定义为 private final 修饰，并且不会生成 set() 方法
- @Log、@Log4j、@Log4j2、@Slf4j、@XSlf4j、@CommonsLog、@JBossLog 注解在类上，自动为类添加对应的日志支持
- @NonNull 注解在方法参数上，用于自动生成空值参数检查，自动帮助我们避免空指针
- @Cleanup 自动帮我们调用 close() 方法，作用在局部变量上，在作用域结束时会自动调用 close() 方法释放资源，可以关闭流
- @Builder 注解在类上，被注解的类加个构造者模式
- @Synchronized 注解在类上，加个同步锁
- @SneakyThrows 等同于 try/catch 捕获异常

|        功能        |                                                       说明                                                      |
|--------------------|-----------------------------------------------------------------------------------------------------------------|
| val                | Finally! Hassle-free final local variables.                                                                     |
| var                | Mutably! Hassle-free local variables.                                                                           |
| @NonNull           | 注解在属性上，标识属性是不能为空，为空则抛出异常 NullPointerException                                           |
| @Cleanup           | 用于关闭并释放资源，可以用在 IO 流上 close()                                                                    |
| @Getter/@Setter    | 永远不用再写 public int getFoo() {return foo;} 了了了了                                                         |
| @ToString          | 为类提供 toString() 方法                                                                                        |
| @EqualsAndHashCode | Equality made easy: Generates hashCode and equals implementations from the fields of your object..              |
| @NoArgsConstructor | 默认构造函数生成，还有 @RequiredArgsConstructor non-null 字段作为参数、@AllArgsConstructor 所有成员作参数的构造 |
| @Data              | 复合注解，用在类上组合 @ToString @EqualsAndHashCode @Getter @Setter  @RequiredArgsConstructor                   |
| @Value             | 和 @Data 类似，区别在于它会把所有成员变量默认定义为 private final 修饰，并且不会生成 set() 方法。              |
| @Builder           | ... and Bob's your uncle: No-hassle fancy-pants APIs for object creation!                                       |
| @SneakyThrows      | To boldly throw checked exceptions where no one has thrown them before!                                         |
| @Synchronized      | synchronized done right: Don't expose your locks.                                                               |
| @With              | Immutable 'setters' - methods that create a clone but with one changed field.                                   |
| @Getter(lazy=true) | 生成一个 lazy 版的 getter，它会在第一次调用时计算一次值并缓存                                                   |
| @Log               | Captain's Log, stardate 24435.7: "What was that line again?"                                                    |
| experimental       | Head to the lab: The new stuff we're working on.                                                                |

val、val 关键字可以让我们在定义一个变量，像极了脚本语言。

    import lombok.AccessLevel;
    import lombok.Getter;
    import lombok.Setter;

1）首先我们定义一个 Book 类：

    @Setter
    @Getter
    @AllArgsConstructor
    public class Book {
        private Integer id;
        private String name;
        private String author;
    }

（2）然后在 Controller 中创建 Book 实体类，并返回 ModelAndView。

    @RestController
    public class HelloController {
        @GetMapping("/test")
        public ModelAndView test() {
            // 创建返回数据
            List<Book> books = new ArrayList<>();
            Book b1 = new Book(1, "hangge.com", "hangge");
            Book b2 = new Book(2, "航歌", "hangge");
            books.add(b1);
            books.add(b2);
            // 创建并返回 ModelAndView
            ModelAndView mv = new ModelAndView();
            mv.addObject("books", books); // 设置返回的数据
            mv.setViewName("index"); //设置视图名
            return mv;
        }
    }

2，创建视图
在 resource/templates 目录下创建 index.html，页面中通过遍历将 books 中的数据展示出来。内容如下：

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <table border="1">
            <tr>
                <td>编号</td>
                <td>名称</td>
                <td>作者</td>
            </tr>
            <tr th:each="book:${books}">
                <td th:text="${book.id}"></td>
                <td th:text="${book.name}"></td>
                <td th:text="${book.author}"></td>
            </tr>
        </table>
    </body>
    </html>

3，测试运行
在浏览器中访问 http://localhost:8080/test



## SpringBoot Home Page 欢迎页设置
- https://www.hangge.com/blog/cache/detail_2528.html

Spring Boot 项目启动后，默认会去查找 index.html 文件作为首页面。当然我们可以指定其它页面作为首页面，下面通过样例进行演示。

一、使用 index.html 作为首页面

1，静态首页

Spring Boot 项目在启动后，首先回去静态资源路径（resources/static）下查找 index.html 作为首页文件。

2，动态首页

如果在静态资源路径（resources/static）下找不到 index.html，则会到 resources/templates 目录下找 index.html（使用 Thymeleaf 模版）作为首页文件。

二、使用其它页面作为首页面

1，静态首页

（1）假设我们在 resources/static 目录下有个 login.html 文件，想让它作为首页。

（2）一种方式通过自定义一个 Controller 来进行转发：

    @Controller
    public class HelloController {
        @RequestMapping("/")
        public String hello(){
            return "forward:login.html";
        }
    }

（3）另一种方式是通过自定义一个 MVC 配置，并重写 addViewControllers 方法进行转发：

    @Configuration
    public class WebMvcConfig implements WebMvcConfigurer {
        @Override
        public void addViewControllers(ViewControllerRegistry registry) {
            registry.addViewController("/").setViewName("forward:login.html");
        }
    }

2，动态首页

（1）假设我们在 resources/templates 目录下有个 login.html 文件（使用 Thymeleaf 模版），想让它作为首页。

（2）一种方式通过自定义一个 Controller 来实现，在 Controller 中返回逻辑视图名即可：

    @Controller
    public class HelloController {
         @RequestMapping("/")
         public String hello(){
             return "login";
         }
    }

（3）另一种方式是通过自定义一个 MVC 配置，并重写 addViewControllers 方法进行映射关系配置即可。

    @Configuration
    public class WebMvcConfig implements WebMvcConfigurer {
        @Override
        public void addViewControllers(ViewControllerRegistry registry) {
            registry.addViewController("/").setViewName("login");
        }
    }


## Spring Uploader
- [SpringBoot - 实现文件上传](https://www.hangge.com/blog/cache/detail_2462.html)

Spring Boot 对文件上传做了简化，基本做到了零配置，我们只需要在项目中添加 spring-boot-starter-web 依赖即可。

一、单文件上传

1，代码编写

（1）首先在 static 目录中创建一个 upload.html 文件，内容如下：

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
    <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="uploadFile" value="请选择文件">
        <input type="submit" value="上传">
    </form>
    </body>
    </html>

（2）接着创建文件上传处理接口 FileUploadController.java，内容如下：

    package com.example.demo;
     
    import org.springframework.ui.Model;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RestController;
    import org.springframework.web.multipart.MultipartFile;
     
    import javax.servlet.http.HttpServletRequest;
    import java.io.File;
    import java.io.IOException;
    import java.text.SimpleDateFormat;
    import java.util.Date;
    import java.util.UUID;
     
    @RestController
    public class FileUploadController {
     
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd/");
    
        @GetMapping("/upload")
        public ModelAndView upload(HttpServletRequest req, ModelAndView mv) 
        {
            mv.addObject("name", "Uploader");
            mv.setViewName("upload");
            return mv;
        }

        @PostMapping("/upload")
        public String upload(MultipartFile uploadFile, HttpServletRequest req) {
            // 上传的文件将保存在项目运行目录下的 uploadFile 文件夹，
            String realPath = req.getSession().getServletContext().getRealPath("/uploadFile/");
            System.out.println(realPath);
     
            // 并且在 uploadFile 文件夹中通过日期对上传的文件归类保存
            // 比如：/uploadFile/2019/06/06/32091e5f-c9e9-4506-9567-43e724f1fe37.png
            String format = sdf.format(new Date());
            File folder = new File(realPath + format);
            if (!folder.isDirectory()) {
                folder.mkdirs();
            }
     
            // 对上传的文件重命名，避免文件重名
            String oldName = uploadFile.getOriginalFilename();
            String newName = UUID.randomUUID().toString()
                    + oldName.substring(oldName.lastIndexOf("."), oldName.length());
            try {
                // 文件保存
                uploadFile.transferTo(new File(folder, newName));
     
                // 返回上传文件的访问路径
                String filePath = req.getScheme() + "://" + req.getServerName()
                        + ":" + req.getServerPort() + "/uploadFile/" + format + newName;
                return filePath;
            } catch (IOException e) {
                e.printStackTrace();
            }
            return "上传失败!";
        }
    }

要上传多文件，只需要将方法接收参数修改成文件数组，Spring 会自动注入依赖：

     public String upload(MultipartFile[] uploadFiles, HttpServletRequest req) {
         for (MultipartFile uploadFile : uploadFiles) ...


如果要在 Groovy 中使用，注意上面字符串相加时，加号前后不能有空格或换行，否则异常：

        No signature of method: java.lang.String.positive() is applicable for argument types: () values: []


2，运行测试

（1）我们使用浏览器访问 upload.html 页面并选择文件上传：
（2）上传成功后会返回上传文件的访问路径：
（3）使用这个访问路径我们就可以看到刚刚上传的文件：

附：常用参数配置

（1）如果我们需要对图片上传的细节进行配置，也是可以的。比如我们可以在 application.properties 文件中添加如下配置：

    spring.servlet.multipart.enabled=true
    spring.servlet.multipart.file-size-threshold=0
    spring.servlet.multipart.location=E:\\temp
    spring.servlet.multipart.max-file-size=1MB
    spring.servlet.multipart.max-request-size=10MB
    spring.servlet.multipart.resolve-lazily=false

（2）上面几个参数作用如下：

- **enabled**：表示是否开启文件上传支持，默认为 true
- **file-size-threshold**：表示文件写入磁盘的阀值，默认为 0
- **location**：表示上传文件的临时保存位置
- **max-file-size**：表示上传的单个文件的最大大小，默认为 1MB
- **max-request-size**：表示多文件上传时文件的总大小，默认为 10MB
- **resolve-lazily**：表示文件是否延迟解析，默认为 false

如果上传的文件超限了，控制器方法是执行不到，在这之前就抛出异常了：

    import org.springframework.web.multipart.MaxUploadSizeExceededException;
    import org.apache.tomcat.util.http.fileupload.impl.FileSizeLimitExceededException;



## MyBatis ORM 数据层
- MyBatis 与 Hibernate 区别  https://blog.csdn.net/eff666/article/details/71332386
- Mybatis 学习 - 了解多用 ORM 框架 https://www.cnblogs.com/JavaHxm/p/13446150.html
- MyBatis 入门 https://mybatis.org/mybatis-3/zh/getting-started.html
- Mybatis 框架入门教程 http://c.biancheng.net/mybatis/
- MyBatis 入门 https://www.w3cschool.cn/mybatis/mybatis-dyr53b5w.html
- MyBatis 环境配置及入门 https://www.yiibai.com/mybatis/install_configure.html

Java 程序都是通过 JDBC - Java Data Base Connectivity 接口连接数据库，直接通过 SQL 对数据库编程。JDBC 是由 SUN 公司定义的接口规范，而具体的实现是交由各个数据库厂商去实现的。

传统的 JDBC 编程的使用给我们带来了连接数据库的功能，但是也引发了巨大的问题，使用也不够方便：

    public class JDBCExample {
      public static final String URL = "jdbc:mysql://localhost:3306/imooc";
      public static final String USER = "liulx";
      public static final String PASSWORD = "123456";

      public static void main(String[] args) throws Exception {
        //1.加载驱动程序
        Class.forName("com.mysql.jdbc.Driver");
        //2. 获得数据库连接
        Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
        //3.操作数据库，实现增删改查
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT user_name, age FROM imooc_goddess");
        //如果有数据，rs.next()返回true
        while(rs.next()){
          System.out.println(rs.getString("user_name")+" 年龄："+rs.getInt("age"));
        }
      }
    }

传统 JDBC 整个过程大致分为以下几步：

- 使用 JDBC   编程需要连接数据库，注册驱动和数据库信息。
- 操作 Connection ，打开 Statement 对象。
- 通过 Statement 执行 SQL ，返回结果到 ResultSet 对象。
- 使用 ResultSet 读取数据，然后通过代码转化为具体的 POJO 对象。
- 关闭数据库相关资源。

处理数据对象，并准确关闭它们。 要对 JDBC 这种方式产生的异常进行正确的捕获并正确的关闭资源。

在实际工作中我们很少直接使用 JDBC 进行编程，而是使用象关系映射 ORM - Object Relational Mapping，或者 O/RM ，或者 O/R mapping。

简单地说 ，ORM 模型就是数据库的表和简单 Java 对象 POJO - Plain Ordinary Java Object 的映射关系模型，它主要解决数据库数据和 POJO 对象的相互映射。我们通过 这层映射关系就可以简单迅速地把数据库表的数据转化为 POJO，以便程序员更加容易理解和编写 Java  程序。

MyBatis 本是 Apache 的开源项目 iBatis，2010 年这个项目由 Apache 软件基金会迁移到了 Google Code，并且改名为 MyBatis 。MyBatis 是一个基于 Java 的持久层框架。iBatis 提供的持久层框架包括 SQL Maps 和 DAO - Data Access Objects。MyBatis 消除了几乎所有的 JDBC 代码和参数的手工设置以及结果集的检索。MyBatis 使用简单的 XML 或注解用于配置和原始映射，将接口和 Java 的 POJOs（Plain Old Java Objects，普通的 Java 对象）映射成数据库中的记录，即 ORM - Object Relational Mapping。

MyBatis 的核心组件：**SqlSessionFactoryBuilder**、**SqlSessionFactory**、**SqlSession**

在 ORM 中数据记录对应的是一个模型对象 PO - Persistent Object 持久对象，ORM 将数据从数据库读取出来，期间使用了 DTO - Data Transfer Object 数据传输对象，完成数据的网络传输过程，然后再将记录转换成 PO 对象，其它编程语言中也叫做 Model 对象。

此外，常用的概念还有：

- 业务对象 BO - business object 由 Service 层输出的封装业务逻辑的对象，说到底就是解耦吧。
- 数据访问对象 DAO - data access object 持久化的操作，数据库的增删改查，一般以接口的形式存在。
- 表现对象 VO - value object 通常是 Web 向模板渲染引擎层传输的对象。
- 领域对象 DO - Domain Object 从现实世界中抽象出来的有形或无形的业务实体。

对比 MyBatis 和 Hibernate：

- MyBatis：机械工具，使用方便，拿来就用，但工作还是要自己来作，不过工具是活的，怎么使由我决定。（小巧、方便、高效、简单、直接、半自动）

- Hibernate：智能机器人，但研发它（学习、熟练度）的成本很高，工作都可以摆脱他了，但仅限于它能做的事。（强大、方便、高效、复杂、绕弯子、全自动）

- Hibernate 与 MyBatis 都可以是通过 SessionFactoryBuider 由 XML 配置文件生成 SessionFactory，然后生成 Session，最后由 Session 来开启执行事务和 SQL 语句。其中 SessionFactoryBuider，SessionFactory，Session 的生命周期都是差不多的。

- Hibernate 和 MyBatis 都支持 JDBC 和 JTA 事务处理。

- MyBatis 可以进行更为细致的 SQL 优化，可以减少查询字段。 MyBatis 容易掌握，而 Hibernate 门槛较高。

- Hibernate 的 DAO 层开发比 MyBatis 简单，Mybatis 需要维护 SQL 和结果映射。
- Hibernate 对对象的维护和缓存要比 MyBatis 好，对增删改查的对象的维护要方便。
- Hibernate 数据库移植性很好，MyBatis 的数据库移植性不好，不同的数据库需要写不同SQL。
- Hibernate 有更好的二级缓存机制，可以使用第三方缓存。MyBatis 本身提供的缓存机制不佳。

- Hibernate功能强大，数据库无关性好，O/R 映射能力强，如果你对 Hibernate 相当精通，而且对 Hibernate 进行了适当的封装，那么你的项目整个持久层代码会相当简单，需要写的代码很少，开发速度很快，非常爽。 

- Hibernate 的缺点就是学习门槛不低，要精通门槛更高，而且怎么设计 O/R 映射，在性能和对象模型之间如何权衡取得平衡，以及怎样用好 Hibernate 方面需要你的经验和能力都很强才行。 

- iBATIS 入门简单，即学即用，提供了数据库查询的自动对象绑定功能，而且延续了很好的SQL使用经验，对于没有那么高的对象模型要求的项目来说，相当完美。 

- iBATIS 的缺点就是框架还是比较简陋，功能尚有缺失，虽然简化了数据绑定代码，但是整个底层数据库查询实际还是要自己写的，工作量也比较大，而且不太容易适应快速数据库修改。

现在有了 Spring Boot，只需在 Maven 项目中引用起步依赖即可以免除一堆配置：

    <!-- https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter -->
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>2.1.3</version>
    </dependency>

    // https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter
    @Grapes(
        @Grab(group='org.mybatis.spring.boot', module='mybatis-spring-boot-starter', version='2.1.3')
    )

假设使用 MySQL 数据库，那么还需要引入 MySQL Connector/J 或 mysql-connector-java 连接器：

    <!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.21</version>
    </dependency>

    // https://mvnrepository.com/artifact/mysql/mysql-connector-java
    @Grapes(
        @Grab(group='mysql', module='mysql-connector-java', version='8.0.21')
    )


## Spring Data JPA 持久化数据
- https://potoyang.gitbook.io/spring-in-action-v5/di-3-zhang-chu-li-shu-ju/3.2-shi-yong-spring-data-jpa-chi-jiu-hua-shu-ju
- Java 持久化技术规范（JPA）中的主键生成策略 https://developer.ibm.com/zh/technologies/java/articles/j-lo-jpaprimarykey/
- JPA 教程 https://www.yiibai.com/jpa/
- JPA-ORM 规范 https://jianshu.com/p/24e8dea17359
- Spring Data JPA 配置与使用 https://www.hangge.com/blog/cache/detail_2541.html
- Spring Data JPA 多数据源的配置与使用 https://www.hangge.com/blog/cache/detail_2542.html
- Spring Data JPA 构建 RESTful 基本用法 https://www.hangge.com/blog/cache/detail_2652.html
- Spring Data JPA 构建 RESTful 进阶技巧 https://www.hangge.com/blog/cache/detail_2653.html

Spring Data 项目是一个相当大的伞形项目，几个子项目组成，其中大多数子项目关注于具有各种不同数据库类型的数据持久化。

一些最流行的 Spring 数据项目包括：

- Spring Data JPA - 针对关系数据库的持久化
- Spring Data Mongo - 针对 Mongo 文档数据库的持久化
- Spring Data Neo4j - 针对 Neo4j 图形数据库的持久化
- Spring Data Redis - 针对 Redis 键值存储的持久化
- Spring Data Cassandra - 针对 Cassandra 数据库的持久化

Spring Data 为所有这些项目提供的最有意思和最有用的特性之一是能够基于存储库规范接口自动创建存储库。

JPA - Java Persistence API 应用场景：传统项目或者关系模型较为清晰稳定的项目，建议 JPA，比如 DDD 设计中的领域层。一般会和 Hibernate 一起使用，Hibernate 入门门槛较高，不需要写 SQL，会自动生成。因此，SQL 的优化也比较困难。Hibernate 应用场景：适用与需求变化不多的中小型项目中，比如后台管理，ERP, ORM, OA 等。相比较，Hibernate 是面向对象的，而 MyBatis 是面向关系的。

数据分析型的 OLAP 应用适合用 MyBatis，事务处理型 OLTP 应用适合用 JPA。 越是复杂的业务，越需要领域建模，建模用 JPA 实现最方便灵活。但是 JPA 想用好，门槛比较高，不懂 DDD 的话，就会沦为增删改查了。

复杂的查询应该是通过 CQRS 模式，通过异步队列建立合适查询的视图，通过视图避免复杂的 Join，而不是直接查询领域模型。 从目前的趋势来看 OLAP 交给 NoSQL 数据库可能更合适。

Hibernate 的 DAO 层开发比 MyBatis 简单，Mybatis 需要维护 SQL 和结果映射。 Hibernate 对对象的维护和缓存要比 MyBatis 好，对增删改查的对象的维护要方便。 并且，数据库移植性很好，MyBatis 的数据库移植性不好，不同的数据库需要写不同 SQL。Hibernate 有更好的二级缓存机制，MyBatis 本身提供的缓存机制不佳，但是，都可以使用第三方缓存。

为了了解 Spring Data 是如何工作的，需要将本章前面介绍的基于 JDBC 的存储库替换为 Spring Data JPA 创建的存储库。

但是首先，需要将 Spring Data JPA 添加到项目构建中。

    <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
        <version>2.3.3.RELEASE</version>
    </dependency>

    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa
    @Grapes(
        @Grab(group='org.springframework.boot', module='spring-boot-starter-data-jpa', version='2.3.3.RELEASE')
    )

接着在 application.properties 中配置数据库基本信息以及 JPA 相关配置：

    spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
    spring.datasource.url=jdbc:mysql://localhost:3306/hangge?serverTimezone=Asia/Shanghai
    spring.datasource.username=root
    spring.datasource.password=hangge1234
    #是否在控制台打印JPA执行过程生成的SQL
    spring.jpa.show-sql=true 
    #表示JPA对应的数据库是MySQL
    spring.jpa.database=mysql
    #表示在项目启动时根据实体类更新数据库中的表
    spring.jpa.hibernate.ddl-auto=update
    #表示使用的数据库方言是MySQL57Dialect
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL57Dialect

JPA 中能够支持面向对象的高级特性，如类之间的继承、多态和类之间的复杂关系，这样的支持能够让开发者最大限度的使用面向对象的模型设计企业应用，而不需要自行处理这些特性在关系数据库的持久化。

实例中使用的注释列表如下。
 
|        注解        |                                   描述                                   |
|--------------------|--------------------------------------------------------------------------|
| @Entity            | 声明类为实体或表。                                                       |
| @Table             | 声明表名。                                                               |
| @Basic             | 指定非约束明确的各个字段。                                               |
| @Embedded          | 指定类或它的值是一个可嵌入的类的实例的实体的属性。                       |
| @Id                | 指定的类的属性，用于识别（一个表中的主键）。                             |
| @GeneratedValue    | 指定如何标识属性可以被初始化，例如自动，手动，或从序列表中获得的值。     |
| @Transient         | 指定的属性，它是不持久的，即，该值永远不会存储在数据库中。               |
| @Column            | 指定持久属性栏属性。                                                     |
| @SequenceGenerator | 指定在@GeneratedValue注解中指定的属性的值。它创建了一个序列。            |
| @AccessType        | 这种类型的注释用于设置访问类型。@AccessType(FIELD) @AccessType(PROPERTY) |
| @JoinColumn        | 指定一个实体组织或实体的集合。这是用在多对一和一对多关联。               |
| @UniqueConstraint  | 指定的字段和用于主要或辅助表的唯一约束。                                 |
| @ColumnResult      | 参考使用select子句的SQL查询中的列名。                                    |
| @ManyToMany        | 定义了连接表之间的多对多一对多的关系。                                   |
| @ManyToOne         | 定义了连接表之间的多对一的关系。                                         |
| @OneToMany         | 定义了连接表之间存在一个一对多的关系。                                   |
| @OneToOne          | 定义了连接表之间有一个一对一的关系。                                     |
| @NamedQueries      | 指定命名查询的列表。                                                     |
| @NamedQuery        | 指定使用静态名称的查询。                                                 |

在 Spring Data JPA 中，只要方法的定义符合既定规范，Spring Data 就能分析出开发者的意图，从而避免开发者自定义 SQL。
所谓的既定规范，就是一定的方法命名规则。支持的命名规则如下表格。

|      关键字       |          方法命名         |               sql where字句                |
|-------------------|---------------------------|--------------------------------------------|
| And               | findByNameAndPwd          | where name= ? and pwd =?                   |
| Or                | findByNameOrSex           | where name= ? or sex=?                     |
| Is，              | Equals                    | findById,findByIdEquals where id= ?        |
| Between           | findByIdBetween           | where id between ? and ?                   |
| LessThan          | findByIdLessThan          | where id < ?                               |
| LessThanEquals    | findByIdLessThanEquals    | where id <= ?                              |
| GreaterThan       | findByIdGreaterThan       | where id > ?                               |
| GreaterThanEquals | findByIdGreaterThanEquals | where id > = ?                             |
| After             | findByIdAfter             | where id > ?                               |
| Before            | findByIdBefore            | where id < ?                               |
| IsNull            | findByNameIsNull          | where name is null                         |
| isNotNull，       | NotNull                   | findByNameNotNull   where name is not null |
| Like              | findByNameLike            | where name like ?                          |
| NotLike           | findByNameNotLike         | where name not like ?                      |
| StartingWith      | findByNameStartingWith    | where name like '?%'                       |
| EndingWith        | findByNameEndingWith      | where name like '%?'                       |
| Containing        | findByNameContaining      | where name like '%?%'                      |
| OrderBy           | findByIdOrderByXDesc      | where id=? order by x desc                 |
| Not               | findByNameNot             | where name <> ?                            |
| In                | findByIdIn                | (Collection<?> c) where id in (?)          |
| NotIn             | findByNameNot             | where name <> ?                            |
| True              | findByAaaTue              | where aaa = true                           |
| False             | findByAaaFalse            | where aaa = false                          |
| IgnoreCase        | findByNameIgnoreCase      | where UPPER(name)=UPPER(?)                 |
| top               | findTop100                | top 10/where ROWNUM <=10                   |


## SpringBoot Runner 执行启动任务
- https://www.hangge.com/blog/cache/detail_2508.html

有时一些特殊的任务需要在系统启动时执行，例如配置文件加载、数据库初始化等操作。Spring Boot 提供了两种解决方案：CommandLineRunner 和 ApplicationRunner。二者使用方式大体一致，差别主要体现在参数上。

Spring Boot 项目在启动时会遍历所有的 CommandLineRunner 的实现类并调用其中的 run 方法。

如果整个系统中有多个 CommandLineRunner 的实现类，那么可以使用 @Order 注解对这些实现类的调用顺序进行排序（数字越小越先执行）。run 方法的参数是系统启动是传入的参数，即入口类中 main 方法的参数，在调用 SpringApplication.run 方法时被传入 Spring Boot 项目中。

使用样例，首先在项目中添加两个 CommandLineRunner，它们内容分别如下，就是把启动时传入的参数打印出来：

    @Component
    @Order(1)
    public class MyCommandLineRunner1 implements CommandLineRunner {
        @Override
        public void run(String... args) throws Exception {
            System.out.println("Runner1>>>"+ Arrays.toString(args));
        }
    }
     
    @Component
    @Order(2)
    public class MyCommandLineRunner2 implements CommandLineRunner {
        @Override
        public void run(String... args) throws Exception {
            System.out.println("Runner2>>>"+ Arrays.toString(args));
        }
    }

使用 ApplicationRunner 用法和 CommandLineRunner 基本一致。项目在启动时会遍历所有的 ApplicationRunner 的实现类并调用其中的 run 方法。

如果整个系统中有多个 ApplicationRunner 的实现类，同样可以使用 @Order 注解对这些实现类的调用顺序进行排序（数字越小越先执行）。

区别主要体现在 run 方法的参数上，ApplicationRunner 里 run 方法的参数是一个 ApplicationArguments 对象。

ApplicationArguments 区分选项参数和非选项参数：
对于非选项参数：我们可以通过 ApplicationArguments 的 getNonOptionArgs() 方法获取，获取到的是一个数组。
对于选项参数：可以通过 ApplicationArguments 的 getOptionNames() 方法获取所有选项名称。通过 getOptionValues() 方法获取实际值（它会返回一个列表字符串）。

首先，在项目中添加两个 ApplicationRunner，它们内容分别如下，就是把启动时传入的参数打印出来：

    @Component
    @Order(1)
    public class MyApplicationRunner1 implements ApplicationRunner 
    {
        @Override
        public void run(ApplicationArguments args) throws Exception 
        {
            List<String> nonOptionArgs = args.getNonOptionArgs();
            System.out.println("Runner1[非选项参数]>>> " + nonOptionArgs);
            Set<String> optionNames = args.getOptionNames();
            for(String optionName: optionNames) 
            {
                System.out.println("Runner1[选项参数]>>> name:" + optionName
                        + ";value:" + args.getOptionValues(optionName));
            }
        }
    }
     
    @Component
    @Order(2)
    public class MyApplicationRunner2 implements ApplicationRunner 
    {
        @Override
        public void run(ApplicationArguments args) throws Exception 
        {
            List<String> nonOptionArgs = args.getNonOptionArgs();
            System.out.println("Runner2[非选项参数]>>> " + nonOptionArgs);
            Set<String> optionNames = args.getOptionNames();
            for(String optionName: optionNames) 
            {
                System.out.println("Runner2[选项参数]>>> name:" + optionName
                        + ";value:" + args.getOptionValues(optionName));
            }
        }
    }

我们可以配置在系统启动时需要传入的参数，这里以 intelliJ IDEA 为例，单击右上角的编辑启动配置。

在弹出页中编辑 Program arguments 栏目，在里面填写需要传入的参数。如果有多个参数，参数之间使用空格隔开。这里我们既配了选项参数，也配了非选项参数。

将项目打包以 jar 包的形式运行，那么这些参数可以跟在启动命令后面：

    java -jar demo-0.0.1-SNAPSHOT.jar --name=hangge --age=100 hangge.com


# 🚩 Spring Boot 简化开发流程
- [Spring Tool Suite (STS)](https://spring.io/tools)
- [Spring Initializr](https://start.spring.io/)
- [Appendix A: Common Application properties](https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/reference/htmlsingle/#common-application-properties)
- [Spring session 一个依赖搞定会话共享](http://www.javaboy.org/2019/0604/springboot-springsession.html)
- [中小型互联网公司微服务实践](http://www.ityouknow.com/springcloud/2017/10/19/micro-service-practice.html)


Spring Boot 是 Spring 开源组织下的一个子项目，也是 Spring 组件一站式解决方案，主要是为了简化使用 Spring 框架的难度，简省繁重的配置。Spring Boot 本质就是 Spring 程序，而它提供了一个更方便快捷的 Spring 程序开发体验。

现在，Spring 已然成为事实的标准，只要是 Java 开始，几乎离不开它，而 Spring MVC、Spring Boot、SpringCloud 等大量模块或框架的加入，正是 Spring 整个生态的丰富与完善。

Spring 作为一个轻量级的控制反转 IoC 和面向切面 AOP 的容器框架，使你能够编写更干净、更可管理、并且更易于测试的代码。

Spring MVC 作为一个模块，实现了一个非常实用的 Web MVC 框架，通过 Dispatcher Servlet，ModelAndView 和 View Resolver，让 Web 应用开发变得极有效率。它主要针对的是网站应用程序或者服务开发，提供 URL 路由、Session、模板引擎、静态 Web 资源等等实用功能。

但是，Spring 应用程序配置是复杂的、繁琐的，所以推出了 Spring Boot，**约定优于配置** Convention over Configuration 的理念大大简化了 Spring 的配置流程。集成了快速开发的 Spring 多个插件，基本上消除了 XML 配置，可以使用标注或代码来配置 Spring 容器，是一套快速配置开发的脚手架，能快速开发单个微服务。使用 Spring Boot CLI 工具，更是快速建立项目模板。

Spring Cloud 构建于 Spring Boot 之上，是一个关注全局的服务治理框架，为分布式微服务框架 SOA - Service-Oriented Architecture 提供强大的支持。Spring Cloud 大部分的功能插件都是基于 Spring Boot，它将多个 Spring Boot 单体微服务进行整合以及管理。Spring Cloud 依赖于 Spring Boot 开发，而 Spring Boot 可以独立开发。


基本上，String 生态圈各部分的组成意义如下：

- Spring 是基于 DI、IoC、AOP 编程模式实现的轻量级架构核心，提供了基础功能；
- Spring MVC 是基于 Spring 的一个 MVC 框架；
- Spring Boot 是为简化 Spring 配置的脚手架；
- Spring Cloud 是构建在 Spring Boot 之上的服务治理框架。

Spring Boot 四大神器：

- 起步依赖 spring-boot-starter-xx
- 服务监控 Spring Boot Actuator
- 自动配置 Spring Boot Auto Configuration
- 命令行工具 Spring Boot CLI，借此你只需写代码就能完成完整的应用程序，无需传统项目构建。

它提供了各种组件的启动器 starters，开发者只要能配置好对应组件参数，Spring Boot 就会自动配置，让开发者能快速搭建依赖于 Spring 组件的 Java 项目。同时，Spring Boot 也提供了一个命令行工具来执行 Spring 的脚本。再来看看设计它的目标和初衷：

- 为 Spring 应用开发提供一个更快、更容易上手的入门体验；
- 提供一系列在大型项目中经常用到的公共的非功能性特性，如：内嵌入服务器、安全、度量指标、健康检测、外部化配置；
- 零代码配置生成及零 XML 配置；

Spring Boot 内嵌了各种 Servlet 容器，Tomcat、Jetty 等，现在不再需要打成 war 包部署到容器中，Spring Boot 只要打成一个可执行的jar包就能独立运行，所有的依赖包都在一个 jar 包内。只要依赖 spring-boot-starter-web 启动器包，它包含所有 web 开发所有的依赖，就能拥有 Spring Web 的能力。Spring Boot 能根据当前类路径下的类或者 jar 包里面来的类来自动配置 Spring Bean。

Spring Boot 配置过程中无代码生成，也无需 XML 配置文件就能完成所有配置工作，这一切都是借助于条件注解完成的，这也是 Spring 4+ 的核心功能之一。

Spring Boot 提供一系列端点可以监控服务及应用，能对 Spring 应用做健康检测。

不好的一面是封装了太多的自动化内容，需要开发者非常了解 Spring Boot 的核心技术原理，不然一旦遇到问题就很棘手。另外从原始 Spring 项目很难平滑迁移至 Spring Boot 框架上来，因为有些历史老旧的 XML 配置无法通过 Java 来配置，还需要额外的 XML 文件就不是很完美。再比如，之前是独立的 Tomcat，什么参数都在线上配置好了，你改为内置的 Tomcat 就会遇到很多问题。

官方提供了 Spring Initializr 这个工具来快速构建 Spring Boot 工程，这需要了解一下自动化工程管理工具 Maven、Gradle。另外用 Groovy 脚本来编写 Spring 应用会更有效率。Groovy 是 Apache 旗下的一门基于 JVM 平台的动态/敏捷编程语言，在语言的设计上它吸纳了 Python、Ruby 和 Smalltalk 语言的优秀特性，语法非常简练和优美，开发效率也非常高。Groovy 语法与 Java 语言的语法很相似，虽然 Groovy 的语法源于Smalltalk和Ruby这类语言的理念，但是可以将它想像成 Java 语言的一种更加简单、表达能力更强的变体。许多 Java 开发人员喜欢 Groovy 代码和 Java 代码的相似性。从学习的角度看，如果知道如何编写 Java 代码，那就已经了解 Groovy 了。Groovy 和 Java 语言的主要区别是：完成同样的任务所需的 Groovy 代码比 Java 代码更少。

Grails 是一个基于 Groovy 语言，构建于 Spring/Spring Boot、Hibernate 之上的高生产力、一站式 Web 开发框架。特别适合小型团队进行敏捷开发，效率非常高。由于性能和学习成本的原因，普及率比较低，大分部公司还是更倾向于选择 Spring Boot 作为开发框架。和rails，djan
go等web框架类似，基于微内核的思想，插件（可重用模块）是框架的一等公民。grails除了核心模块以外的功能几乎都是通过插件方式实现的。实际上，一个grails插件和一个grails应用基本是完全一样的，同样可以使用grails run-app命令来运行。区别仅在于一个插件的根目录下需要提供一个fooplugin.groovy文件，提供插件的一些描述信息。

Gradle 是一个基于 Apache Ant 和 Apache Maven 概念的项目自动化构建工具。它使用一种基于 Groovy 的特定领域语言(DSL)来进行构建配置，抛弃了基于XML的各种繁琐配置，主要以面向Java应用为主，支持从 Maven 仓库下载依赖。现在越来越多的项目（Android项目居多）使用Gradle 来作为项目的构建工具，相信未来 Gradle 也会逐渐代替 Maven，就像 Maven 代替 Ant 那样。

Spring Boot 和 Spring Cloud 是依赖关系。

- Spring Boot 是 Spring 的一套快速配置脚手架，可以基于 Spring Boot 快速开发单个微服务，Spring Cloud 是一个基于 Spring Boot实现的云应用开发工具；
- Spring Boot 专注于快速、方便集成的单个微服务个体，Spring Cloud 关注全局的服务治理框架；
- Spring Boot 使用了默认大于配置的理念，很多集成方案已经帮你选择好了，能不配置就不配置，Spring Cloud 基于 Spring Boot 来实现。

Spring Boot 可以离开 Spring Cloud 独立使用开发项目，但是 Spring Cloud 离不开 Spring Boot，属于依赖的关系。

Spring -> Spring Boot > Spring Cloud 这样的关系。


Spring Boot 自动配置自带了很多配置类，每一个都能运用在你的应用程序里。它们都使用了 Spring 4.0 的条件化配置，可以在运行时判断这个配置是该被运用，还是该被忽略。

大部分情况下，表 2-1 里的 **@ConditionalOnMissingBean** 注解是覆盖自动配置的关键。

表 2-1 自动配置中使用的条件化注解

|           条件化注解            |                      配置生效条件                      |
|---------------------------------|--------------------------------------------------------|
| @ConditionalOnBean              | 配置了某个特定 Bean                                    |
| @ConditionalOnMissingBean       | 没有配置特定的 Bean                                    |
| @ConditionalOnClass             | Classpath 里有指定的类                                 |
| @ConditionalOnMissingClass      | Classpath 里缺少指定的类                               |
| @ConditionalOnExpression        | SEL - Spring Expression Language 表达式计算结果为 true |
| @ConditionalOnJava              | Java 的版本匹配特定值或者一个范围值                    |
| @ConditionalOnJndi              | 参数中 JNDI 必须存在一个，否则要有 JNDI InitialContext |
| @ConditionalOnProperty          | 指定的配置属性要有一个明确的值                         |
| @ConditionalOnResource          | Classpath 里有指定的资源                               |
| @ConditionalOnWebApplication    | 这是一个 Web 应用程序                                  |
| @ConditionalOnNotWebApplication | 不是一个 Web 应用程序                                  |

Spring Boot 的 DataSourceAutoConfiguration 中定义的 JdbcTemplate Bean 就是一个非常简单的例子，演示了 @ConditionalOnMissingBean 如何工作：

    @Bean
    @ConditionalOnMissingBean(JdbcOperations.class)
    public JdbcTemplate jdbcTemplate() {
        return new JdbcTemplate(this.dataSource);
    }

jdbcTemplate() 方法上添加了 @Bean 注解，在需要时可以配置出一个 JdbcTemplate Bean。但它上面还加了 @ConditionalOnMissingBean 注解，要求当前不存在 JdbcOperations
类型（ JdbcTemplate 实现了该接口）的 Bean 时才生效。如果当前已经有一个 JdbcOperations Bean 了，条件即不满足，不会执行 jdbcTemplate() 方法。

Spring Boot 自动配置的 Bean 提供了 300 多个用于微调的属性。当你调整设置时，只要在环境变量、Java 系统属性、JNDI - Java Naming and Directory Interface、命令行参数或者属
性文件里进行指定就好了。

例如以下命令会覆盖自动配置，禁止 Thymeleaf 缓存：

    $ java -jar demo-0.0.1-SNAPSHOT.jar --spring.thymeleaf.cache=false

这些配置细调参数可以在官方参考手册查阅 Appendix A: Common Application properties，或者源代码包中的 appendix-application-properties.adoc 文档。


## Kotlin 脚本语言
- Getting Started with Kotlin https://kotlinlang.org/docs/tutorials/getting-started.html
- Kotlin Compiler 1.3.72 https://github.com/JetBrains/kotlin/releases/tag/v1.3.72
- Kotlin Tutorial https://www.tutorialspoint.com/kotlin/kotlin_overview.htm
- Kotlin 教程 https://www.cnblogs.com/Jetictors/p/9227498.html
- 从 Java 角度深入理解 Kotlin https://chiclaim.blog.csdn.net/article/details/85575213
- Kotlin 基础语法 https://www.runoob.com/kotlin/kotlin-basic-syntax.html
- Spring Boot 与 Kotlin 整合 MyBatis https://my.oschina.net/quanke/blog/1612724
- Spring Boot 与 Kotlin 整合 Spring-data-jpa https://my.oschina.net/quanke/blog/1611469
- Spring Boot 与 Kotlin 整合 MongoDB https://www.jianshu.com/p/571505cd064b
- sdeleuze / spring-boot-kotlin-demo https://github.com/sdeleuze/spring-boot-kotlin-demo
- Spring Boot + Kotlin + JPA example https://github.com/spring-guides/tut-spring-boot-kotlin
- Groovy vs Kotlin vs Scala https://stackshare.io/stackups/groovy-vs-kotlin-vs-scala
- Kotlin vs Scala: Which Problems Do They Solve? https://superkotlin.com/kotlin-vs-scala/
- Kotlin vs Scala：哪个适合您？ https://blog.csdn.net/diren9643/article/details/106092099
- Kotlin vs Scala: which is right for you? https://blog.codota.com/kotlin-vs-scala/
- From Java to Kotlin and Back Again - Kotlin ketckup https://blog.csdn.net/csdnnews/article/details/80746096
- [Kotlin 和 Groovy 的 lambda 对比](https://juejin.im/post/6844903982817640455)

Kotlin vs Scala，这是两个实力相当的 Java 脚本语言实现。

Scala 强项：

- Bigger Community
- Pattern Matching & Big Math
- Flexible Syntax

Scala 弱点：

- Slow Compilation Speed
- Inferior Java Compatibility
- Null Safety Management Inefficiency

Kotlin 由 JetBrains 开发并于 2012 年作为开源发布给世界，很快就成为 GitHub 上增长最快的语言之一。 Kotlin 从 Scala 大量汲取了经验，并致力于解决实际问题，带来了可观的编译时间和与 Java 的完美互操作性 。

Kotlin Swift 吸引了许多将 Kotlin 纳入其堆栈的技术巨头，包括 Google，Square，Pinterest 和 Atlassian。 当Google宣布将其作为Android开发的正式采用语言时，这种年轻语言的流行程度急剧上升。

Kotlin 强项：

- Corporate Backing 企业支持
- Superior Java Interoperability 出色的 Java 互操作性
- Concise Coding 简洁编码

Kotlin 弱点：

- Inferior Pattern Matching 劣势模式匹配
- Smaller Community 较小的社区
- Limited Usability 有限的可用性

Kotlin 大量借鉴 Scala、C# 特性，但是同时为了兼容java，也有很多特性无法实现。从细节功能上，Scala 比 Kotlin 更丰富，而 Java 社区可能认为 Scala 复杂度的提升带来的人力成本会超过其带来的其它收益。

而 Kotlin 设计时的俩个主要目标则理容易被市场接受：

- 至少和 java 运行速度一样快；
- 在保证语言尽量简单的情况下在易用性上提高；

Kotlin 是一种在 Java 虚拟机上运行的静态类型编程语言，被称之为 Android 世界的 Swift，由 JetBrains 设计开发并开源。

Kotlin 可以编译成 Java 字节码，也可以编译成 JavaScript，方便在没有 JVM 的设备上运行。Kotlin 在 2017 年作为 Android 一级开发语言使用，在 2019 年被确立为 Android 首选开发语言，越来越多的后端岗位对 Kotlin 语言掌握程度提出新的要求和标准。

如果你认为自己有 Java 基础就可以快速学习 Kotlin，那你就错了。Kotlin 会让你陷入深渊，事实上，Kotlin 的语法更接近 Scala。这是一项赌注，你将不得不忘记 Java 并切换到完全不同的语言。

相反，学习 Groovy 是一个愉快的过程。Java 代码是正确的 Groovy 代码，因此你可以通过将文件扩展名从 .java 更改为 .groovy。


除了直接下载安装 Kotlin 编译器，还可以使用其它依赖管理工具安装：

    choco install kotlinc

Kotlin 程序文件以 .kt 结尾，如：hello.kt 、app.kt。

    package hello                      //  可选的包头
     
    fun main(args: Array<String>) {    // 包级可见的函数，接受一个字符串数组作为参数
       println("Hello World!")         // 分号可以省略
       Greeter("World!").greet()       // 创建一个对象不用 new 关键字
    }

    class Greeter(val name: String) {
       fun greet() { 
          println("Hello, $name")
       }
    }

使用 Kotlin 编译器编译应用:

    $ kotlinc hello.kt -include-runtime -d hello.jar

-d: 用来设置编译输出的名称，可以是 class 或 .jar 文件，也可以是目录。
-include-runtime : 生成 .jar 文件包含 Kotlin 运行库，从而可以直接运行。

为什么选择 Kotlin？

- 更简洁：这是它重要的优点之一，可以比Java编写少得多的代码。
- 更安全：Kotlin 是 null 安全的，它在编译期间就会处理各种为 null 的情况，无需像java一样添加很多的判空代码，节约很多调试空指针异常的时间，很大程度上避免出现 NullPointException。
- 易扩展：扩展函数意味着我们不仅可以扩展我们原有写好的类，还可以扩展系统级的类，非常灵活，另外如果在类里编写扩展函数，那么只对当前类生效。
- 函数式：Kotlin使用了很多函数式编程的概念，比如用到了lambda表达式来更方便地解决问题。
- Kotlin Android Extensions：再也不用编写烦人的 findViewById()了，如果你集成了 ButterKnife，是时候删除对它的依赖了，Kotlin 支持了对于 View 以 id 形式访问。
- 不用写分号，就像你看到的上述代码一样，对于很多写过脚本语言的童鞋来说，不要写分号这一点真是节省了很多时间，对于一天写几百行几千行甚至上万行代码的童鞋们来说，相当于省了多少个分号.
- 互操作性: 充分利用 JVM、Android 和浏览器的现有库。
- 工具友好: 可用任何 Java IDE 或者使用命令行构建。
- 移动端： Android 工程师的首选转型语言。
- Web 后端：越来越多的企业要求 Java 工程师掌握 Kotlin。
- 可开发脚本、前端、跨平台。 

Kotlin 带来函数式编程体验：

- 函数进阶
- 高阶函数
- 内联函数
- 集合变换与序列
- SAM 转换
- HTML DSL
- Gradle Kotlin DSL
- 协程的概念与设计思想

        suspend fun main() = coroutineScope {
            for (i in 0 until 10) {
                launch {
                    delay(1000L - i * 10)
                    print("$i ")
                }
            }
        }


Kotlin 和 Java 数据类型对比：

| Java 基本类型 |    Java 包装类型    |  Kotlin 对应   |
|---------------|---------------------|----------------|
| char          | java.lang.Character | kotlin.Char    |
| byte          | java.lang.Byte      | kotlin.Byte    |
| short         | java.lang.Short     | kotlin.Short   |
| int           | java.lang.Integer   | kotlin.Int     |
| float         | java.lang.Float     | kotlin.Float   |
| double        | java.lang.Double    | Kotlin.Double  |
| long          | java.lang.Long      | kotlin.Long    |
| boolean       | java.lang.Boolean   | kotlin.Boolean |


## Groovy 脚本语言
- [Groovy GDK 开发工具包](http://www.groovy-lang.org/download.html)
- [Different with Java](http://www.groovy-lang.org/differences.html)
- [Groovy 语言快速入门](https://www.jianshu.com/p/e8dec95c4326)
- [Groovy Closures](https://www.cnblogs.com/zqlxtt/p/5741297.html)
- [Java 下一代 Groovy、Scala 和 Clojure](https://www.ibm.com/developerworks/cn/java/j-jn1/index.html)
- [Groovy Grape 依赖管理器](http://ifeve.com/groovy-grape/)
- [The Grape dependency manager](http://groovy-lang.org/grape.html)
- [Groovy OOP 面向对象编程](https://www.tutorialspoint.com/groovy/groovy_object_oriented.htm)
- [Groovy Program structure](http://groovy-lang.org/structure.html)
- [Groovy Bean Definition DSL](https://docs.spring.io/spring/docs/4.3.11.RELEASE/spring-framework-reference/htmlsingle/)
- [Groovy DSL - Domain-Specific Languages](http://www.groovy-lang.org/dsls.html)

最初的 Java 技术工程师曾做过一个了不起的决定，将语言从运行时中分离出来，最终使 200 多种语言可在 Java 平台上运行。该基础架构对平台保持长久活力非常关键，因为计算机编程语言的寿命通常很短。自 2008 年以来，每年由 Oracle 主办的 JVM 语言峰会都会为 JVM 上替代语言的实现者提供与平台工程师公开合作的机会。

三种现代 JVM 语言：Groovy、Scala 和 Clojure，它们将范式、设计选择和舒适因素进行了有趣的组合。

Java 语言因 Bruce Tate 在其 2005 年著作的《Beyond Java》中将其称为 完美风暴而出名，导致 Java 出名的综合因素包括：Web 的兴起、现有 Web 技术因各种原因产生的不适应性，以及企业多层应用开发的兴起。Tate 也认为完美风暴是一系列独立事件，而其他语言不会以同样方式达到同样的高度。

Java 语言已证明其功能相当灵活，但人所共知，其语法和固有范式具有一定的局限性。尽管 Java 语言正在进行一些看似美好的改变，但其语法根本不支持一些重要的未来目标，如函数式编程元素。但是，如果您试图找到一种新语言取代 Java，那您就错了。

即使 Java 依旧是您的主要开发语言，也可以了解如何运行其他语言，以便在策略上使用它们。Java 依然是 JVM 生态系统的重要部分，但最终人们更倾向于将它用作平台汇编语言 —一个您可以完全了解性能或满足特定需求的地方。

Groovy 是 21 世纪的 Java 语法（浓缩咖啡，而非普通咖啡）。Groovy 的设计目标是更新并减少 Java 语法阻力，同时支持 Java 语言中的主要范式。因此，Groovy 需要 “了解” JavaBeans 这类技术，并简化属性访问。Groovy 快速合并新特性，并提供了一些重要函数特性，我将在后面几期中重点介绍。Groovy 在根本上依然是面向对象的命令式语言。Groovy 与 Java 的两个主要区别是，Groovy 是 静态而非动态类型，而且它的元程序功能更佳。

Scala 是一种充分利用了 JVM 优势的语言，但其语法完全进行了重新设计。Scala 是一种强静态类型语言（比对类型要求比较严格的 Java 更严格）支持面向对象范式和函数范式，而且更青睐于后者。例如，Scala 倾向 val声明，并使不变的变量（类似于在 Java 中将参数标记为 final）服从于 var，这创建了人们更加熟悉的可变变量。通过大力支持这两种范式，Scala 为您提供了从您可能是（一名面向对象的命令式程序员）到可能应该是（一名倾向函数式的程序员）的桥梁。

Clojure 是一种 Lisp 方言，在语法上彻底背离了其他语言。它是一种强动态类型语言（和 Groovy 一样），反映了专断的设计决策。虽然 Clojure 允许您用遗留 Java 进行完整和深入的交互操作，但它并不试图构建与旧式范式相连的桥梁。例如，Clojure 不具备纠错功能，并且支持面向对象进行交互操作。但是，它还支持对象程序员所习惯的所有特性，如多态性，但它以函数方式而非面向对象的方式来实现这些特性。Clojure 围绕一些核心工程原理（比如 Software Transactional Memory）进行设计，它打破了旧的范式，支持新的功能。

Groovy 是 Apache 旗下的一门基于 JVM 平台的动态/敏捷编程语言，在语言的设计上它吸纳了 Python、Ruby 和 Smalltalk 语言的优秀特性，语法非常简练和优美，开发效率也非常高（编程语言的开发效率和性能是相互矛盾的，越高级的编程语言性能越差，因为意味着更多底层的封装，不过开发效率会更高，需结合使用场景做取舍）。并且，Groovy 可以与 Java 语言无缝对接，在写 Groovy 的时候如果忘记了语法可以直接按Java的语法继续写，也可以在 Java 中调用 Groovy 脚本，都可以很好的工作，这有效的降低了 Java 开发者学习 Groovy 的成本。Groovy 也并不会替代 Java，而是相辅相成、互补的关系，具体使用哪门语言这取决于要解决的问题和使用的场景。

每个 Groovy 脚本经过转译后都会生成一个 Java 类，并且继承 Script，如下面的脚本例子：

    class Main {                                    
        static void main(String... args) {          
            println 'Groovy world!'                 
        }
    }

上面的是脚本，在运行的时候 Groovy 将其转换成 Java 类，类似如下的类：

    import org.codehaus.groovy.runtime.InvokerHelper
    class Main extends Script {                     
        def run() {                                 
            println 'Groovy world!'                 
        }
        static void main(String[] args) {           
            InvokerHelper.runScript(Main, args)     
        }
    }

参考 Groovy 文档 Program structure。


从 Java 6 开始引入 JSR 223 javax.script，JSR-223 是 Java 中调用脚本语言的标准 API。主要目的是用来提供一种统一的框架，以便在 Java 中调用多种脚本语言。JSR-223 支持大部分流行的脚本语言，比如 JavaScript、Scala、JRuby、Jython 和 Groovy 等。

    ScriptEngine engine = new ScriptEngineManager().getEngineByName("groovy");
    Bindings bindings = new SimpleBindings();
    bindings.put("age", 22);
    Object value = engine.eval("if(age < 18){'未成年'}else{'成年'}",bindings);
    assertEquals(value,"成年");

    //script/groovy/hello.groovy
    //println "hello world"
    engine.eval(new FileReader("script/groovy/hello.groovy"));
    //hello world

由于 Groovy 自身已经提供了更丰富的集成机制，如果在 Java 应用中只是使用 Groovy 一种脚本语言的话，使用 Groovy 提供的集成机制可能会更合适一点。

Grails 是一个基于 Groovy 语言，构建于 Spring/Spring Boot、Hibernate 之上的高生产力、一站式 Web 开发框架。特别适合小型团队进行敏捷开发，效率非常高。由于性能和学习成本的原因，普及率比较低，大分部公司还是更倾向于选择 Spring Boot 作为开发框架。

Gradle 是一个基于 Apache Ant 和 Apache Maven 概念的项目自动化构建工具。它使用一种基于 Groovy 的特定领域语言(DSL)来进行构建配置，抛弃了基于XML的各种繁琐配置，主要以面向 Java 应用为主，支持从 Maven 仓库下载依赖。现在越来越多的项目，目前 Android 项目居多，使用 Gradle 来作为项目的构建工具，相信未来 Gradle 也会逐渐代替 Maven，就像 Maven 代替 Ant 那样。


从 Spring 4.0 版本开始 Spring 支持使用 Groovy DSL 来定义 Bean 的配置，详见 Spring 官方文档 Groovy Bean Definition DSL 部分。

    def reader = new GroovyBeanDefinitionReader(myApplicationContext)
    reader.beans {
        dataSource(BasicDataSource) {
            driverClassName = "org.hsqldb.jdbcDriver"
            url = "jdbc:hsqldb:mem:grailsDB"
            username = "sa"
            password = ""
            settings = [mynew:"setting"]
        }
        sessionFactory(SessionFactory) {
            dataSource = dataSource
        }
        myService(MyService) {
            nestedBean = { AnotherBean bean ->
                dataSource = dataSource
            }
        }
    }

    beans {
        //beanName(type)  
        dataSource(BasicDataSource) {
            //注入属性
            driverClassName = "org.hsqldb.jdbcDriver"
            url = "jdbc:hsqldb:mem:grailsDB"
            username = "sa"
            password = ""
            settings = [mynew:"setting"]
        }
        sessionFactory(SessionFactory) {
           //注入属性，引用其他Bean
            dataSource = dataSource
        }
        myService(MyService) {
           //使用闭包定义嵌套的Bean
            nestedBean = { AnotherBean bean ->
                dataSource = dataSource
            }
        }
    }

    ApplicationContext context = new GenericGroovyApplicationContext("beans.groovy");
    MyService myService = context.getBean(MyService.class);


Groovy 非常容易集成在 Java 环境中，利用其动态性来做规则引擎、流程引擎、动态脚本环境，非常适合那些不不需要经常发布但又经常变更的场景下使用。

在 Java 中集成（调用）Groovy 代码有下面几种方式：

- groovy.util.Eval 动态执行 Groovy 代码；
- groovy.lang.GroovyShell 加载外部 Groovy 代码；
- groovy.lang.GroovyClassLoader 定制的加载器；
- groovy.util.GroovyScriptEngine 脚本引擎；

groovy.util.Eval 类是最简单的用来在运行时动态执行 Groovy 代码的类，提供了几个静态工厂方法供使用，内部其实就是对 GroovyShell 的封装。

    //执行Groovy代码
    Eval.me("println 'hello world'");
    //绑定自定义参数
    Object result = Eval.me("age", 22, "if(age < 18){'未成年'}else{'成年'}");
    assertEquals(result, "成年");
    //绑定一个名为 x 的参数的简单计算
    assertEquals(Eval.x(4, "2*x"), 8);
    //带有两个名为 x 与 y 的绑定参数的简单计算
    assertEquals(Eval.xy(4, 5, "x*y"), 20);
    //带有三个绑定参数（x、y 和 z）的简单计算
    assertEquals(Eval.xyz(4, 5, 6, "x*y+z"), 26); 

groovy.lang.GroovyShell 除了可以执行 Groovy 代码外，提供了更丰富的功能，比如可以绑定更多的变量，从文件系统、网络加载代码等。

    GroovyShell shell = new GroovyShell();
    //可以绑定更多变量
    shell.setVariable("age",22);
    //直接求值
    shell.evaluate("if(age < 18){'未成年'}else{'成年'}");
    //解析为脚本，延迟执行或者缓存起来
    Script script = shell.parse("if(age < 18){'未成年'}else{'成年'}");
    assertEquals(script.run(), "成年");
    //可以从更多位置加载/执行脚本
    //shell.evaluate(new File("script.groovy"));
    //shell.evaluate(new URI("http://wwww.a.com/script.groovy"));

groovy.lang.GroovyClassLoader 是一个定制的类加载器，可以在运行时加载 Groovy 代码，生成 Class 对象。

     GroovyClassLoader groovyClassLoader = new GroovyClassLoader();
     String scriptText = "class Hello { void hello() { println 'hello' } }";
     //将Groovy脚本解析为Class对象
     Class clazz = groovyClassLoader.parseClass(scriptText);
     //Class clazz = groovyClassLoader.parseClass(new File("script.groovy"));
     assertEquals(clazz.getName(),"Hello");
     clazz.getMethod("hello").invoke(clazz.newInstance());

groovy.util.GroovyScriptEngine能够处理任何 Groovy 代码的动态编译与加载，可以从统一的位置加载脚本，并且能够监听脚本的变化，当脚本发生变化时会重新加载。

    //script/groovy/hello.groovy
    println "hello $name"
    GroovyScriptEngine scriptEngine = new GroovyScriptEngine("script/groovy");
    Binding binding = new Binding();
    binding.setVariable("name", "groovy");
    while (true){
        scriptEngine.run("hello.groovy", binding);
        TimeUnit.SECONDS.sleep(1);
    }
            
    //输出
    hello groovy
    hello groovy
    ....
    //将hello.groovy内代码修改为println "hi $name"， GroovyScriptEngine会重新进行加载
    hi groovy
    hi groovy


### Groovy & Gradle
- [Gradle - Accelerate developer productivity](https://gradle.org/)
- [Gradle 6.6 User Guide](https://docs.gradle.org/6.6/userguide/userguide.html)
- [Migrating Builds From Apache Maven to Gradle](https://docs.gradle.org/current/userguide/migrating_from_maven.html)
- [Gradle 教程](https://www.w3cschool.cn/gradle/ebfc1hto.html)
- [Gradle Samples](https://docs.gradle.org/6.6/samples/index.html)
- [Spring Boot's Gradle 插件](https://www.jianshu.com/p/01588c396a29)
- [Spring Boot's Gradle 插件文档](http://docs.spring.io/spring-boot/docs/2.0.0.M2/gradle-plugin//reference/html/)
- [Building C++ Applications](https://guides.gradle.org/building-cpp-applications/)
- [The Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html)

Gradle，这是一个基于 JVM 的富有突破性构建工具，它为您提供了:

- 一个像 ant 一样，通用的灵活的构建工具
- 一种可切换的，像 maven 一样的基于约定约定优于配置的构建框架
- 强大的多工程构建支持
- 强大的依赖管理(基于 ApacheIvy)
- 对已有的 maven 和 ivy 仓库的全面支持
- 支持传递性依赖管理，而不需要远程仓库或者 pom.xml 或者 ivy 配置文件
- ant 式的任务和构建是 gradle 的第一公民
- 基于 groovy，其 build 脚本使用 groovy dsl 编写
- 具有广泛的领域模型支持你的构建

Gradle 的核心在于基于 Groovy 的丰富而可扩展的域描述语言(DSL)。 Groovy 通过声明性的语言元素将基于声明的构建推向下层，你可以按你想要的方式进行组合。 这些元素同样也为支持 Java， Groovy，OSGi，Web 和 Scala 项目提供了基于约定的构建。 并且，这种声明性的语言是可以扩展的。你可以添加新的或增强现有的语言元素。 因此，它提供了简明、可维护和易理解的构建。

Gradle Wrapper 允许你在没有安装 Gradle 的机器上执行 Gradle 构建，它会调用声明的 Gradle 版本并且会自动执行下下载操作，只需要很小的几个脚本文件就可以完成它些工作。这一点是非常有用的，比如，对一些持续集成服务来说，它对一个开源项目保持低门槛构建也是非常有用的。Wrapper 对企业来说也很有用，它使得对客户端计算机零配置。 它强制使用指定的版本，以减少兼容支持问题。

    gradle/wrapper/gradle-wrapper.properties
    distributionUrl=https\://services.gradle.org/distributions/gradle-4.10.2-all.zip
    distributionUrl=https\://services.gradle.org/distributions/gradle-6.6.1-bin.zip

已下载的发行版本保存目录参考：

    C:\Users\OCEAN\.gradle\wrapper\dists

典型目录结构：

    .
    ├── build.gradle
    ├── settings.gradle
    ├── gradle
    │   └── wrapper
    │       ├── gradle-wrapper.jar 包含 Gradle 运行时的逻辑代码。
    │       └── gradle-wrapper.properties 配置文件，指定 Gradle 版本等属性。
    ├── gradlew 运行于 Linux 平台下的 Gralde 命令包装器脚本。
    └── gradlew.bat 运行于 Windows 平台下的 Gralde 命令包装器脚本。

可以用 Gradle Wrapper 命令行生成以上目录结构：

    gradle wrapper –gradle-version 4.2.1 –distribution-type all

配置中 distributionUrl 这个字段指定下载地址，如果官方的地址下载不了或者缓慢，可以将这个地址换为其他的镜像地址或本地的项目目录，或者干脆把 Gradle 发行版压缩包放在服务器上以供下载。

gradle的3种版本：

- gradle-xx-all.zip 是完整版，包含了各种二进制文件，源代码文件，和离线的文档。
- gradle-xx-bin.zip 是二进制版，只包含了二进制文件（可执行文件），没有文档和源代码。
- gradle-xx-src.zip 是源码版，只包含了Gradle源代码，不能用来编译你的工程。


Projects 和 tasks是 Gradle 中最重要的两个概念。代码即脚本，Gradle 脚本采用 Groovy 书写。

任何一个 Gradle 构建都是由一个或多个 projects 组成。每个 project 包括许多可构建组成部分。 这完全取决于你要构建些什么。举个例子，每个 project 或许是一个 jar 包或者一个 web 应用，它也可以是一个由许多其他项目中产生的 jar 构成的 zip 压缩包。一个 project 不必描述它只能进行构建操作。它也可以部署你的应用或搭建你的环境。不要担心它像听上去的那样庞大。 Gradle 的 build-by-convention 可以让您来具体定义一个 project 到底该做什么。

使用 Maven 构建项目

    <project xmlns="http://maven.apache.org/POM/4.0.0"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                 http://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>com.vs</groupId>
        <artifactId>com.vs.maven.gradle</artifactId>
        <version>1.0</version>
        <parent>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-parent</artifactId>
            <version>1.2.6.RELEASE</version>
        </parent>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-web</artifactId>
            </dependency>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-security</artifactId>
            </dependency>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-data-jpa
                </artifactId>
            </dependency>
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <version>5.1.25</version>
            </dependency>
        </dependencies>
        <properties>
            <java.version>1.8</java.version>
        </properties>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                </plugin>
            </plugins>
        </build>
    </project>

使用 Gradle 构建项目

    buildscript {
        repositories {
            mavenCentral()
        }
        dependencies {
            classpath("org.springframework.boot:spring-boot-gradle-plugin:1.2.6.RELEASE")
        }
    }
    dependencies {
        compile("org.springframework.boot:spring-boot-starter-web") {
            exclude module: "spring-boot-starter-tomcat"
        }
        compile("org.springframework.boot:spring-boot-starter-security")
        compile("org.springframework.boot:spring-boot-starter-data-jpa")
        testCompile("mysql:mysql-connector-java:5.1.25")
    }

对比以上配置文件，相比起 Maven 的 XML 配置方式，Gradle 提供基于 DSL 的一套简明构建脚本，使我们就像编写程序一样编写项目构建脚本。

第一个构建脚本 build.gradle

    // file: build.gradle
    // gradle -q hello

    task hello {
        doLast {
        println 'Hello world!'
        }
    }

    // gradle -q intro
    task intro(dependsOn: hello) {
        doLast {
        println "I'm Gradle"
        }
    }

然后在该文件所在目录执行 gradle -q hello，文档示例中很多地方在调用 gradle 命令时都加了 -q 参数。该参数用来控制 gradle 的日志级别，可以保证只输出我们需要的内容。

    > gradle -q hello
    Hello world!

旧式语法：

    task hello << {
        println 'Hello world!'
    }

Gradle 5.0 中 << 已经过时，使用 doLast 来替代的，可以通过降低 Gradle 版本，比如 4.10.1 或者使用 doLast 解决：

    Could not find method leftShift() for arguments 

    Could not find method times() for arguments


每个 project 都由多个 tasks 组成。每个 task 都代表了构建执行过程中的一个原子性操作。如编译，打包，生成 javadoc，发布到某个仓库等操作。

可以访问这些对象的属性：

    println name
    println project.name  

    println hello.name
    println project.hello.name  

    println tasks.hello.name
    println tasks['hello'].name  

表 13.1. Project 属性

|     名称    |    类型    |        默认值        |
|-------------|------------|----------------------|
| project     | Project    | Project 实例          |
| name        | String     | 项目目录的名称。     |
| path        | String     | 项目的绝对路径。     |
| description | String     | 项目的描述。         |
| projectDir  | File       | 包含生成脚本的目录。 |
| buildDir    | File       | projectDir/build     |
| group       | Object     | 未指定               |
| version     | Object     | 未指定               |
| ant         | AntBuilder | AntBuilder 实例       |

Gradle 作为一个通用构建工具，在构建标准 Java 工程时，需要使用相应的插件，例如，对于一个 Web 工程，可以会需要以下两个插件分别打包 war 或运行 Web 服务器：

    apply plugin: 'war'
    apply plugin: 'jetty'

    apply plugin: 'java' 
    apply plugin: 'groovy'  

Java 插件向一个项目添加了 Java 编译、 测试和 bundling 的能力，它是很多其他 Gradle 插件的基础服务。

War 的插件继承自 Java 插件并添加了对组装 web 应用程序的 WAR 文件的支持。它禁用了 Java 插件生成默认的 JAR archive，并添加了一个默认的 WAR archive 任务。

Jetty 插件继承自 War 插件，并添加一些任务，这些任务可以让你在构建时部署你的 web 应用程序到一个 Jetty 的 web 嵌入式容器中。

Groovy 的插件继承自 Java 插件并添加了对 Groovy 项目的支持。它可以处理 Groovy 代码，以及混合的 Groovy 和 Java 代码，甚至是纯 Java 代码（尽管我们不一定推荐使用）。该插件支持联合编译，可以任意地混合及匹配 Groovy 和 Java 代码各自的依赖。例如，一个 Groovy 类可以继承自一个 Java 类，而这个 Java 类也可以继承自一个 Groovy 类。这样一来，我们就能够在项目中使用最适合的语言，并且在有需要的情况下用其他的语言重写其中的任何类。

若要把项目导入 Eclipse 中，你才需要添加 Eclipse plugin 插件到你的脚本文件中。

标准 Java 工程目录结构如下:

    project  
        +build  
        +src/main/java  
        +src/main/resources  
        +src/test/java  
        +src/test/resources  

Gradle 默认会从 src/main/java 搜寻打包源码，在 src/test/java 下搜寻测试源码。并且 src/main/resources 下的所有文件按都会被打包，所有 src/test/resources 下的文件 都会被添加到类路径用以执行测试。所有文件都输出到 build 下，打包的文件输出到 build/libs 下。

完全 build.gradle 设置参考如下，manifest 表示向打包 jar 文件添加 MANIFEST.MF 配置，mavenCentral 表示添加 Maven 依赖仓库，dependencies 添加了项目中依赖的包：

    apply plugin: 'java'
    apply plugin: 'eclipse'
    sourceCompatibility = 1.5
    version = '1.0'
    jar {
        manifest {
            attributes 'Implementation-Title': 'Gradle Quickstart', 'Implementation-Version': version
        }
    }
    repositories {
        mavenCentral()
    }
    dependencies {
        compile group: 'commons-collections', name: 'commons-collections', version: '3.2'
        testCompile group: 'junit', name: 'junit', version: '4.+'
    }
    test {
        systemProperties 'property': 'value'
    }
    uploadArchives {
        repositories {
           flatDir {
               dirs 'repos'
           }
        }
    }

通俗来讲，依赖管理由如下两部分组成。首先，Gradle 需要知道项目构建或运行所需要的一些文件，以便于找到这些需要的文件。我们称这些输入的文件为项目的依赖。其次，你可能需要构建完成后自动上传到某个地方。我们称这些输出为发布。下面来仔细介绍一下这两部分：

大部分工程都不太可能完全自给自足，一般你都会用到其他工程的文件。比如我工程需要 Hibernate 就得把它的类库加进来，比如测试的时候可能需要某些额外 jar 包，例如 JDBC 驱动或 Ehcache 之类的 Jar 包。

这些文件就是工程的依赖。Gradle 需要你告诉它工程的依赖是什么，它们在哪，然后帮你加入构建中。依赖可能需要去远程库下载，比如 Maven 或者 Ivy 库。也可以是本地库，甚至可能是另一个工程。我们称这个过程叫依赖解决。

Gradle 是在一个被称之为仓库的地方找寻所需的外部依赖。仓库即是一个按 group，name 和 version 规则进行存储的一些文件。Gradle 可以支持不同的仓库存储格式，如 Maven 和 Ivy，并且还提供多种与仓库进行通信的方式，如通过本地文件系统或 HTTP。

参考以下，使用 Maven 或 Ivy 中央仓库、远程仓库的配置方式：

    repositories {
        mavenCentral()
    }

    repositories {
        maven {
            url "http://repo.mycompany.com/maven2"
        }
    }

    repositories {
        ivy {
            url "http://repo.mycompany.com/repo"
        }
    }

    repositories {
        ivy {
            // URL can refer to a local directory
            url "../local-repo"
        }
    }

默认情况下，Gradle 没有定义任何仓库，你需要在使用外部依赖之前至少定义一个仓库，例如 Maven 中央仓库。

定义外部依赖可以使用简洁的方式来声明外部依赖，即将三个属性拼接在一起即可，"group:name:version"，参考以下两种写法：

    dependencies {
        compile group: 'org.hibernate', name: 'hibernate-core', version: '3.6.7.Final'
    }

    dependencies {
        compile 'org.hibernate:hibernate-core:3.6.7.Final'
    }

构建 Java 项目只需要在工程目录下运行 gradle build 构建命令。

示范 Java Application：

    // build.gradle
    plugins {
        id 'application'
    }

    version = '1.0.2'
    group = 'org.gradle.sample'

    application {
        mainClass = 'org.gradle.sample.app.Main'
    }

示范 Groovy Application：

    // build.gradle
    plugins {
        id 'groovy'
        id 'application'
    }

    version = '1.0.2'
    group = 'org.gradle.sample'

    repositories {
        jcenter()
    }

    dependencies {
        implementation 'org.codehaus.groovy:groovy-all:2.5.11'
    }

    application {
        mainClass = 'org.gradle.sample.app.Main'
    }

示范 Spring Boot Web Application Sample：

    // build.gradle
    plugins {
        id 'org.springframework.boot' version '2.2.1.RELEASE'
        id 'io.spring.dependency-management' version '1.0.8.RELEASE'
        id 'java'
    }

    version = '1.0.2'
    group = 'org.gradle.samples'

    java {
        sourceCompatibility = JavaVersion.VERSION_1_8
    }

    repositories {
        mavenCentral()
    }

    dependencies {
        implementation 'org.springframework.boot:spring-boot-starter'
        testImplementation('org.springframework.boot:spring-boot-starter-test') {
            exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
        }
    }

    tasks.named('test', Test) {
        useJUnitPlatform()
    }

调用 Spring Boot 插件编译、运行：

    gradle bootRun

默认的，通过查找任务的类路径下的 public static void main(String[]) 会自动配置，主类也可以显式配置:

    bootRun {
        main = 'com.example.ExampleApplication'
    }

至少有两种方式可以对 Spring Boot 项目进行调试。一种是直接运行命令：

    ./gradlew bootRun --debug-jvm

此时程序将默认监听 5005 端口，并暂停以等待调试客户端的连接，然后启动 Spring Boot。

另一种方式是使用Gradle的Application插件，在build.gradle中添加：

    apply plugin: 'application'
    applicationDefaultJvmArgs = [ "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005" ]

此时运行：

    ./gradlew bootRun

程序将启动并监听 5005 调试端口，但是与第一种方法不同的是，程序不会暂停，而是将直接启动整个 Spring Boot 程序。如果你想调试 Spring Boot 在启动过程中的某些代码，比如 Spring 框架启动代码，那么请选择第一种方式。



### Groovy vs Java

✅ 默认导入

Groovy 默认导入以下 packages 或类，不必再手动导入：

    import java.io.*
    import java.lang.*
    import java.math.BigDecimal
    import java.math.BigInteger
    import java.net.*
    import java.util.*
    import groovy.lang.*
    import groovy.util.*

Groovy 会自动导入程序运行目录的类或包，除了默认导入的包和类，在脚本中通过 Grape 进行依赖管理，参考：

    @Grab(group='org.springframework', module='spring-orm', version='3.2.5.RELEASE')
    import org.springframework.jdbc.core.JdbcTemplate

    @Grab('org.springframework:spring-orm:3.2.5.RELEASE')
    import org.springframework.jdbc.core.JdbcTemplate

    @GrabResolver(name='restlet', root='http://maven.restlet.org/')
    @Grab(group='org.restlet', module='org.restlet', version='1.1.6')

    @Grab(group='net.sf.json-lib', module='json-lib', version='2.2.3', classifier='jdk15')

    @Grab('net.sourceforge.htmlunit:htmlunit:2.8')
    @GrabExclude('xml-apis:xml-apis')

    @GrabConfig(systemClassLoader=true)
    @Grab(group='mysql', module='mysql-connector-java', version='5.1.6')

在 Groovy Shell 执行：

    groovy.grape.Grape.grab(group:'org.springframework', module:'spring', version:'2.5.6')

Proxy 参数设置，或者通过环境变量 JAVA_OPTS 设置：

    groovy -Dhttp.proxyHost=yourproxy -Dhttp.proxyPort=8080 yourscript.groovy

    JAVA_OPTS = -Dhttp.proxyHost=yourproxy -Dhttp.proxyPort=8080


✅ 基础语法差异

Groovy 语句无需使用分号（;）结尾，当然加上也不会报错，毕竟完全兼容 Java 的语法。Groovy 中 == 等价于 Java 中的 equals 方法。


✅ Shebang line

Groovy 支持 Shebang line，UNIX 系统支持一种特殊的单行注释叫作 Shebang line，用于指明脚本的运行环境，便于在终端中可以直接运行，# 号必须是文件的第一个字符。

    #!/usr/bin/env groovy
    println "Hello from the shebang line"


✅ 多种 Print 方法

在 Java 中要输出“hello world”需要像下面这样，创建一个类，然后创建一个 main 方法。

    public class Hello {
        public static void main(String[] args) {
            System.out.println("hello world");
        }
    }

Groovy 支持下面这 4 种方式输出“hello world”。

    System.out.println("hello world");
    System.out.println "hello world";

    println("hello world")
    println 'hello world'

如果 Groovy 脚本文件里只有执行代码，没有类的定义，则 Groovy 编译器会生成一个 Script 的子类，类名和脚本文件的文件名一样，而脚本中的代码会被包含在一个名为 run 的方法中，同时还会生成一个 main 方法，作为整个脚本的入口。所以，作为 JVM 平台语言，与 Java 本质上还是一样的。


✅ **多重方法** multi-methods

在 Groovy 中，调用的方法将在运行时被选择。这种机制被称为运行时分派或**多重方法** multi-methods，是根据运行时实参 argument 的类型来选择方法。Java 采用的是相反的策略：编译时根据声明的类型来选择方法。

下面是一个例子，同样的 Java 代码在 Java 和 Groovy 环境中运行结果是不同的.

    int method(String arg) {
        return 1;
    }
    int method(Object arg) {
        return 2;
    }
    Object o = "Object";
    int result = method(o);

    // In Java
    assertEquals(2, result);
    // In Groovy
    assertEquals(1, result);

产生差异的原因在于，Java 使用静态数据类型，o 被声明为 Object 对象，而 Groovy 会在运行时实际调用方法时进行选择。因为调用的是 String 类型的对象，所以自然调用 String 版本的方法。


数组初始化语法差异，在 Groovy 中，{...} 语句块是留给闭包（Closure）使用的，所以不能像 Java 中一样使用下面这种方式初始化数组

    // Java
    int[] array = { 1, 2, 3}

    // Groovy
    int[] array = [1,2,3]


✅ 默认实现 Getter/Setter

Groovy 默认会为公有成员隐式的创建 getter、setter 方法，并且会提供带参的构造器，下面两者是等价的。

    // In Java
    public class Person {
        private String name;
        Person(String name) {
            this.name = name
        }
        public String getName() {
            return name
        }
        public void setName(String name) {
            this.name = name
        }
    }

    // In Groovy
    class Person {
        String name
    }

    def person = new Person(name: '张三')
    assert '张三' == person.name
    person.name = '李四'
    //person.setName('李四')
    assert '李四' == person.getName()


✅ 默认 public 访问修饰

包访问权限差异，在 Java 中如果没有显式的指定访问修饰符 public、protected、private，那么默认是包访问权限，但在 Groovy 中默认是 public 的，所以需要使用 @PackageScope 注解。

    class Person {
        @PackageScope String name
    }


✅ ARM - Automatic Resource Management 

ARM 自动资源管理语句块，或者叫 TWR 语法，从 Java 7 开始引入，用于降低 I/O 操作代码的复杂度，但 Groovy 并不支持。相反，Groovy 提供多种基于闭包的方法，不但可以达到同样的效果并且会更加简洁优美。

Groovy 提供了很多 I/O 操作的方法，Groovy GDK 提供的方法比 Java 更简单。eachLine 方法是 GDK 的 File 提供的方法，参数接收一个闭包，这里采用了简写省略括弧。

    // 读文件打印脚本
    new File('/home/temp', 'haiku.txt').eachLine { line ->
        println line
    }
    
    // 读文件打印及打印行号脚本
    new File(baseDir, 'haiku.txt').eachLine { line, nb ->
        println "Line $nb: $line"
    }

其它参考：

    //In Groovy
    Path file = Paths.get("/User/lihengming/test.txt");
    Charset charset = Charset.forName("UTF-8");
    try (BufferedReader reader = Files.newBufferedReader(file, charset)) {
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }

    } catch (IOException e) {
        e.printStackTrace();
    }

    // In Groovy
    new File('/User/lihengming/test.txt').eachLine('UTF-8') {
       println it
    }
    // 或者使用 Groovy 闭包，更接近于 Java 的方式
    new File('/User/lihengming/test.txt').withReader('UTF-8') { reader ->
       reader.eachLine {
           println it
       }
    }
    //如果只是为了读取并打印出文本的内容的话，下面是最简洁的方式
    print new File('/User/lihengming/test.txt').text

看几个写操作的例子得了，如下：

    // 向一个文件写入 UTF-8 编码文字
    new File(baseDir,'haiku.txt').withWriter('utf-8') { writer ->
        writer.writeLine 'Into the ancient pond'
        writer.writeLine 'A frog jumps'
        writer.writeLine 'Water’s sound!'
    }

    // 使用字符串内容块写法
    new File(baseDir,'haiku.txt') << '''Into the ancient pond
    A frog jumps
    Water’s sound!'''

    // 直接以 byte 数组形式写入文件
    file.bytes = [66,22,11]

    // 类似上面读操作，可以使用 OutputStream 进行输出流操作，记得手动关闭
    def os = new File(baseDir,'data.bin').newOutputStream()
    //  do something ...
    os.close()

    // 类似上面读操作，可以使用OutputStream闭包进行输出流操作，不用手动关闭
    new File(baseDir,'data.bin').withOutputStream { stream ->
        // do something ...
    }

在脚本环境中，遍历一个文件树是很常见的需求，Groovy提供了多种方法来满足这个需求。如下：

    //遍历所有指定路径下文件名打印
    dir.eachFile { file ->                      
        println file.name
    }
    //遍历所有指定路径下符合正则匹配的文件名打印
    dir.eachFileMatch(~/.*\.txt/) { file ->     
        println file.name
    }
    //深度遍历打印名字
    dir.eachFileRecurse { file ->                      
        println file.name
    }
    //深度遍历打印名字，只包含文件类型
    dir.eachFileRecurse(FileType.FILES) { file ->      
        println file.name
    }
    //允许设置特殊标记规则的遍历操作
    dir.traverse { file ->
        if (file.directory && file.name=='bin') {
            FileVisitResult.TERMINATE                   
        } else {
            println file.name
            FileVisitResult.CONTINUE                    
        }
    }

✅ InnerClass 内部类

Groovy 同样支持内部类并且实现跟 Java 是一样的，但不应拿 Java 语言规范来考量它。在 Groovy 中内部类看起来有点类似 groovy.lang.Closure 类的实现。

    // 静态内部类
    class A {
        static class B {}
    }
    new A.B()

    // 匿名内部类，实例化并赋值到 TimerTask 变量
    import java.util.concurrent.CountDownLatch
    import java.util.concurrent.TimeUnit

    CountDownLatch called = new CountDownLatch(1)

    Timer timer = new Timer()
    timer.schedule(new TimerTask() {
        void run() {
            called.countDown()
        }
    }, 0)

    assert called.await(10, TimeUnit.SECONDS)


✅ ambda 表达式差异

Java 8 支持 Lambda 表达式和方法引用。Java 8 的 lambda 几乎可以认为是匿名内部类。Groovy 并没有采用这种语法，而采用闭包来实现。

    // Java
    Runnable run = () -> System.out.println("Run");
    list.forEach(System.out::println);

    // Groovy
    Runnable run = { println 'run' }
    list.each { println it } // or list.each(this.&println)



✅ 变量类型定义

Groovy 中定义变量默认访问修饰符是public，变量定义时遵循 Java 变量命名规范，变量名以字母、下划线或美元符号$开始，可以包含字母、数字、下划线和美元符号$，但关键字除外。除了这些规则之外，Groovy 定义变量时如果是一行定义一个类型，末尾的分号可以省略，但是如果多个变量占一行，变量之间必须以分号分割。

Groovy 定义变量的方式和 Java 是类似的，区别在于 Groovy 提供了def关键字供使用，它可以省略变量类型的定义，根据变量的值进行类型推导。

    def a = 123
    def b = 'b'
    def c = true 
    boolean d = false
    int e = 123

如果定义变量的字面量值为数字时，类型会根据数字的大小自动调整

    def a = 1
    assert a instanceof Integer

    // Integer.MAX_VALUE
    def b = 2147483647
    assert b instanceof Integer

    // Integer.MAX_VALUE + 1
    def c = 2147483648
    assert c instanceof Long

    // Long.MAX_VALUE
    def d = 9223372036854775807
    assert d instanceof Long

    // Long.MAX_VALUE + 1
    def e = 9223372036854775808
    assert e instanceof BigInteger

对于浮点型字面量为了精度 Groovy 默认使用的类型为 BigDecimal

    def decimal = 123.456G
    println decimal.getClass() // class java.math.BigDecimal

Groovy 为数字类型提供类型后缀这种更简单的声明类型的方式：

    - Integer 使用I或i
    - Long 使用L或l
    - BigInteger 使用G或g
    - BigDecimal 使用G或g
    - Double 使用D或d
    - Float 使用F或f


✅ GString & String

Groovy 有两种字符串类型，普通字符串 java.lang.String 和插值字符串 groovy.lang.GString。

字符串和字符字面量差异，在 Groovy 中，由单引号所创建的字面量属于 String 类型对象，而双引号创建的字面量则可能是 String 或 GString 对象，具体分类由字面量中是否有插值来决定。

    assert 'c'.getClass()==String
    assert "c".getClass()==String
    assert "c${1}".getClass() in GString  

由于双引号所包括起来的字符串字面量会被解释为 GString 即 Groovy 字符串，所以如果当某个类中的 String 字面量含有美元字符 $，那么利用 Groovy 和 Java 编译器进行编译时，Groovy 很可能就会编译失败，或者产生与 Java 编译所不同的结果，需要将双引号改成单引号。

    @Value('${spring.banner.image.location}') // Using @Value Spring Annotation with Groovy

通常，如果某个 API 声明了形参的类型，Groovy 会自动转换 GString 和 String。要小心那些形参为 Object 的 Java API，需要检查它们的实际类型。

    // 普通字符串使用单引号
    println 'hello'

    def name = '张三'
    // 插值字符串使用双引号
    println "hello $name"

除此之外，还支持三单引号的写法，可以保留文本的换行及缩进格式

    def strippedFirstNewline = '''line one
            line two
                line three
    '''
    println strippedFirstNewline

    // 可以写成下面这种形式，可读性更好
    def strippedFirstNewline2 = '''\
    line one
        line two
    line three
    '''
    println strippedFirstNewline2


✅ 执行外部程序

Groovy提供一种简单方式来处理执行外部命令行后的输出流操作。如下：

    def process = "ls -l".execute()
    println "Found text ${process.text}"

execute 方法返回一个 java.lang.Process 对象，支持 in、out、err 的信息反馈。

    def process = "ls -l".execute()
    process.in.eachLine { line ->
        println line
    }


✅ Groovy 闭包

Groovy 提供了闭包的支持，语法和 Lambda 表达式有些类似，简单来说就是一段可执行的代码块或函数指针。闭包在 Groovy 中是 groovy.lang.Closure 类的实例，这使得闭包可以赋值给变量，或者作为参数传递。Groovy 定义闭包的语法很简单，就像下面这样。

    //闭包的参数为可选项
    def closure = { [closureParameters -> ] statements }

闭包可以访问外部变量，而方法（函数）则不能。

    def str = 'hello'
    def closure={
        println str
    }
    closure()//hello 

闭包调用的方式有两种，闭包.call(参数)或者闭包(参数)，在调用的时候可以省略圆括号。

    def closure = {
        param -> println param
    }
     
    closure('hello')
    closure.call('hello')
    closure 'hello'

闭包的参数是可选的，如果没有参数的话可以省略 -> 操作符，单个参数使用 it 访问。

    def closure = {println 'hello'}
    closure()

    def closure = { String x, int y ->                                
        println "hey ${x} the value is ${y}"
    }

    def closure = { it -> println it } 
    def closure = { println it }   
    closure('hello')

闭包可以作为参数使用，闭包作为方法的唯一参数或最后一个参数时可省略括号。

    def eachLine(lines, closure) {
        for (String line : lines) {
            closure(line)
        }
    }

    eachLine('a'..'z',{ println it }) 
    eachLine('a'..'z') { println it }


✅ Groovy List 

Groovy 中的 List 其实就是 java.util.List，实现类默认使用的是 java.util.ArrayList。

    def numbers = [1, 2, 3]         

    assert numbers instanceof List  
    assert numbers.class == java.util.ArrayList  
    assert numbers.size() == 3 


✅ Groovy Array

定义数组的语法和 List 非常类似，但与 Java 使用花括号不同，数组的定义必须指定类型为数组类型，可以直接定义类型或者使用 def 定义然后通过 as 关键字来指定其类型。


    // 直接声明类型为数组类型  String[]
    String[] arrStr = ['Ananas', 'Banana', 'Kiwi'] 

    assert arrStr instanceof String[]    
    assert !(arrStr instanceof List)

    // 使用 as 关键字指定类型为数组类型 int[] 
    def numArr = [1, 2, 3] as int[]

    assert numArr instanceof int[]       
    assert numArr.size() == 3


✅ Groovy Map 

通过中括号包含 ([key:value]) 形式定义 Map，Groovy 中的 Map 其实就是 java.util.Map，实现类默认使用的是 java.util.LinkedHashMap。

    // key虽然没有加引号，不过Groovy会默认将其转换为字符串
    def colors = [red: '#FF0000', green: '#00FF00', blue: '#0000FF']

    colors['pink'] = '#FF00FF' // 使用中括号添加元素，相当于Java Map 的 put(key,value)方法
    colors.yellow = '#FFFF00'// 使用点表达式添加元素

    assert colors['red'] == '#FF0000' // 使用中括号访问
    assert colors.green == '#00FF00' // 使用点表达式访问
    assert colors instanceof java.util.LinkedHashMap // 默认使用 LinkedHashMap 类型

    // Groovy Map 的 key 默认语法不支持变量，这里的 key 是字符串而不是 keyVal 变量的值
    def keyVal = 'name'
    def persons = [keyVal: 'Guillaume'] 
    assert !persons.containsKey('name')
    assert persons.containsKey('keyVal')

    // 要使用变量值作为 key，需要使用括号
    def keyVal = 'name'
    def persons = [(keyVal): 'Guillaume'] 
    assert persons.containsKey('name')
    assert !persons.containsKey('keyVal')


✅ Range

在 Groovy 中可以使用 .. 操作符来定义一个区间对象，简化范围操作的代码。

    def range = 0..5
    assert (0..5).collect() == [0, 1, 2, 3, 4, 5]
    assert (0..<5).collect() == [0, 1, 2, 3, 4] // 相当于左闭右开区间
    assert (0..5) instanceof List // Range实际上是List接口的实现
    assert (0..5).size() == 6
    assert ('a'..'d').collect() == ['a','b','c','d']//也可以是字符类型

    //常见使用场景
    for (x in 1..10) {
        println x
    }

    ('a'..'z').each {
        println it
    }

    def age = 25;
    switch (age) {
        case 0..17:
            println '未成年'
            break
        case 18..30:
            println '青年'
            break
        case 31..50:
            println '中年'
            break
        default:
            println '老年'
    }




### Kotlin 和 Groovy 的 lambda 对比

    // Kotlin
    val sum: (Int, Int) -> Int = { x: Int, y: Int -> x + y}
    // Groovy
    Closure sum = { Integer x, Integer y -> x + y }

Kotlin 的函数类型是变化的，如 (Int, Int) -> Int） Groovy 函数类型只有一个 Closure，没有参数时只需要在花括号中写返回值。

    // kotlin 
    val sumSimple1: (Int, Int) -> Int = { x, y -> x + y }
    val sumSimple2 = { x: Int, y: Int -> x + y }
    // groovy
    sumSimple = { x, y -> x + y }

Kotlin 的 lambda 在赋值个一个变量时，不能完全省去类型声明。在作为一个函数的参数时，可以省略。Groovy 的 def 也可省略，Kotlin 的 val 不能

trailing lambda，当函数的最后一个参数是一个函数类型，可将 lambda 表达式放到参数列表外。

三个参数

    // kotlin
    fun a3(x: Int, y: Int, lambda: (Int, Int) -> Int): Int {
        return lambda(x, y)
    }
    val b = a3(1, 2, { x, y -> x + y })
    val bOut = a3(1, 2) { x, y -> x + y }

    // Groovy
    def a3(def x, def y, Closure closure) {
        closure(x, y)
    }
    a3(1, 2, { x, y -> x + y })
    a3(1, 2) { x, y -> x + y }

一个参数

    // Kotlin
    fun a1(lambda: (Int, Int) -> Int): Int {
        return lambda(1, 2)
    }
    val bOut2 = a1 { x, y -> x + y }

    // Groovy
    def a1(Closure closure) {
        closure(1, 2)
    }
    a1 { x, y -> x + y }

当 lambda 只有一个参数时，可以用 it 来代表。

作为入参

    // Kotlin
    fun itFun(lambda: (Int) -> Unit) {
        lambda(1)
    }
    val itResult = itFun { print(it) }

    // Groovy
    def itFun(Closure closure) {
        closure(1)
    }
    itResult = itFun { println(it) }

 赋值给变量

    // Kotlin
    val it: (Int) -> Unit = { println(it) }

    // Groovy
    it = { println(it) }

Kotlin 的 lambda 赋值给变量时，需要声明类型。

lambda 的返回值是表达式中最后一个表达式的值：

    // Kotlin
    val retLambda = {
        1 + 1
        3
    }
    val retVal = retLambda() // 值为 3

    // Groovy
    retval = {
        1+1
        3
    }
    retval() // 值为 3
    
 无用变量的处理

    // Kotlin
    val map = mapOf(1 to "a", 2 to "b")
    map.forEach { _, value -> print(value) }

    // Groovy
    map = [1: "a", 2: "b"]
    map.each { _, value -> println(_ + value) }

Kotlin 的 _ 可以作为无用变量的声明，只是占位，无法引用；Groovy 的 _ 被认为是一个正常的声明，可以引用。

外部变量的访问，都能访问并修改 lambda 表达式外的对象

    // Kotlin
    val ints = listOf(1, 2, 3)
    var sum = 0
    ints.filter { it > 0 }.forEach {
        sum += it
    }
    println(sum) // 6

    // Groovy
    ints = [1, 2, 3]
    sum = 0
    ints.findAll { it > 0 }.each {
        sum += it
    }
    println(sum) // 6

Kotlin 的 lambda 可以用 invoke() 调用，Groovy 没有这种写法。

    // Kotlin
    val sum = { x: Int, y: Int -> x + y }
    sum.invoke(1, 2)
    sum(1, 2)

    // Groovy
    sum = {x, y -> x + y}
    sum(1, 2)



## Groovy CLI Starting
- [Why is Spring Boot? Spring Boot 四大神器](https://gtwlover.gitee.io/2017/12/02/Spring%20Boot/)
- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/reference/htmlsingle/#cli)
- [Spring Boot CLI](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-cli.html)
- [Spring Boot CLI 中文](https://www.breakyizhan.com/springboot/3454.html)
- [Spring Boot Groovy CLI](http://zetcode.com/springboot/groovycli/)
- [Spring Boot CLI Quick Guide](https://www.tutorialspoint.com/springbootcli/springbootcli_quick_guide.htm)
- [Spring Boot Cloud CLI](https://cloud.spring.io/spring-cloud-cli/reference/html/)
- [Introducing Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started-installing-the-cli)
- [FreeMarker 模板语言](http://freemarker.foofun.cn/dgui_template_overallstructure.html)
- [What is Apache FreeMarker™?](https://freemarker.apache.org/)
- [Tutorial: Thymeleaf + Spring](https://www.thymeleaf.org/doc/tutorials/2.1/thymeleafspring.html)
- [Spring Boot FreeMarker tutorial](http://zetcode.com/springboot/freemarker/)
- [FreeMarker Quickstart](https://freemarker.apache.org/docs/pgui_quickstart_createconfiguration.html)
- [Groovy Grape 依赖管理器](https://groovys.readthedocs.io/zh/latest/GettingStarted/The-Grape-dependency-manager.html)

官方文档提供了基于 Groovy 实现的 Spring Boot CLI 工具是快速快速执行原型程序，您可以用它来快速构建 Spring 原型应用，并通过命令行的方式将其运行起来，或打包输出 jar。

Spring Cloud CLI 基于 Spring Boot CLI 提供分布式应用使用的命令工具，可以在安装 Spring CLI 后进行安装：

    $ spring --version
    $ spring install org.springframework.cloud:spring-cloud-cli:1.3.2.RELEASE
    $ spring install org.springframework.cloud:spring-cloud-cli:2.2.0.BUILD-SNAPSHOT
    $ spring cloud --version

Spring Cloud CLI 提供七种核心服务，可以使用单行命令运行和部署：

    ## 启动 Cloud Config 服务器 http://localhost:8888：
    $ spring cloud configserver

    ## 启动 Eureka 服务器 ttp://localhost:8761：
    $ spring cloud eureka

    ## 启动 H2 服务器 http://localhost:9095：
    $ spring cloud h2

    ## 启动 Kafka 服务器 http://localhost:9091：
    $ spring cloud kafka

    ## 启动 Zipkin 服务器 http://localhost:9411：
    $ spring cloud zipkin

    ## 启动 Dataflow 服务器 http://localhost:9393：
    $ spring cloud dataflow

    ## 启动 Hystrix 仪表板 http://localhost:7979：
    $ spring cloud hystrixdashboard

    ## 列出可部署的应用服务：
    $ spring cloud --list

    ## 帮助命令：
    $ spring help cloud

    ## 要通过终端加密' my_value '，请调用：
    $ spring encrypt my_value --key my_key

    ## 可以使用“@”后跟路径（通常用于RSA公钥）代表文件路径（替换上面的“ my_key ”）：
    $ spring encrypt my_value --key @${WORKSPACE}/foos/foo.pub

    ## 可通过命令行进行解密：
    $ spring decrypt --key my_key c93cb36ce1d09d7d62dffd156ef742faaa56f97f135ebd05e90355f80290ce6b


Groovy 是一种基于 Java 平台的面向对象语言，有以下特点:

- 同时支持静态和动态类型。
- 支持运算符重载。
- 本地语法列表和关联数组。
- 对正则表达式的本地支持。
- 各种标记语言，如 XML 和 HTML 原生支持。
- Groovy 对于 Java 开发人员来说很简单，因为 Java 和 Groovy 的语法非常相似。
- 您可以使用现有的 Java 库。
- Groovy 扩展了 java.lang.Object。

Groovy 本身是种优雅的语言，与 Java 不同，Groovy 并不要求有 public 和 private 这样的限定符，也不要求在行尾有分号。此外，归功于 Groovy 的简化属性语法 GroovyBeans，JavaBean
的标准访问方法没有存在的必要了。

随之而来的结果是，用 Groovy 编写 Book 领域编程模式的模型就显得相当简单。如果在阅读列表项目的根目录里创建一个新的文件，名为 Book.groovy，那么在这里编写如下 Groovy 类。

    class Book {
        Long id
        String reader
        String isbn
        String title
        String author
        String description
    }

如你所见，Groovy 类与它的 Java 类相比，大小完全不在一个量级。这里没有 setter 和 getter 方法，没有 public 和 private 修饰符，也没有分号。Java 中常见的代码噪声不复存在，剩下的内容都在描述书的基本信息。

使用 Groovy 语法差异注意点：

- 字符串相加时，加号前后不能有空格或换行，否则异常：

        No signature of method: java.lang.String.positive() is applicable for argument types: () values: []

- 编写标注时，使用单引号来获取属性填充，将双引号变为单引号是免因为 $ 会导致 Groovy 解释标注为 GString 对象而不是字符串：

        @Value('${spring.banner.image.location}') // Using @Value Spring Annotation with Groovy

- Lambda 表达式




Spring Boot Groovy 应用开发中，CLI 工具做了许多魔术操作来简化工程配置：

- 自动下载 jar 依赖；
- 自动配置 Spring 应用程序；
- 自动创建 Spring 应用程序入口；
- 默认的 import 多个库，因此不需要显式导入；

标准 Groovy 代码库包含 @Grab 注释，可以声明对第三方库的依赖性。使用 @Grab 注释，Grape Dependency Manager 会以类似于 Maven 或 Gradle 的方式下载 jar，而无需任何构建工具。

    <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-thymeleaf -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
        <version>2.3.3.RELEASE</version>
    </dependency>

    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-thymeleaf
    @Grapes(
        @Grab(group='org.springframework.boot', module='spring-boot-starter-thymeleaf', version='2.3.3.RELEASE')
    )

如果需要在同一个节点配置多个依赖，可以使用 @Grapes 注解的数组表达：

    @Grapes([
       @Grab(group='commons-primitives', module='commons-primitives', version='1.0'),
       @Grab(group='org.ccil.cowan.tagsoup', module='tagsoup', version='0.9.7')])


Spring Boot 进一步延伸了该技术，它会基于你的代码尝试推导你 grab 哪个库。

Spring Boot 引入了新的 **@GrabMetadata** 注解，可以和 @Grab 搭配使用，用属性文件里的内容来覆盖默认的依赖元数据：

    @GrabMetadata("com.myorg:custom-versions:1.0.0")

这会从 Maven 仓库的 com/myorg 目录里加载一个名为 custom-versions.properties 的文件。文件里的每一行都应该有 Group ID 和 Module ID 两个键名和对应的属性值。

默认情况下 @Grab 声明的依赖是从 Maven 中心仓库拉取的。此外，Spring Boot 还注册了 Spring 的里程碑及快照仓库，以便获取 Spring 项目的预发布版本依赖。对很多项目而言，这就足够了。但要是你的项目需要的库不在这两者之中该怎么办呢？或者你的工作环境在公司防火墙内，必须使用内部仓库又该如何？没有问题。**@GrabResolver** 注解可以让你指定额外的仓库，用来获取依赖。

举个例子，假设你想使用最新的 Hibernate，而最新的版本只能从 JBoss 的仓库里获取到。那么你需要通过 @GrabResolver 来添加仓库：

    @GrabResolver(name='jboss', root='https://repository.jboss.org/nexus/content/groups/public-jboss')

这里通过 name 属性将该解析器命名为 jboss，通过 root 属性来指定仓库的 URL。


例如，由于 WebApplication 代码上使用了 @RestController 注解，Tomcat 和 Spring MVC 两个依赖模块将被获取 grabbed。

下面列表 grab hints 标注：

|                       items                        |             Grabs             |
|----------------------------------------------------|-------------------------------|
| JdbcTemplate,NamedParameterJdbcTemplate,DataSource | JDBC应用                      |
| @EnableJms                                         | JMS应用                       |
| @EnableCaching                                     | 缓存抽象                      |
| @Test                                              | JUnit                         |
| @EnableRabbit                                      | RabbitMQ                      |
| @EnableReactor                                     | 项目重构                      |
| extends Specification                              | Spock test                    |
| @EnableBatchProcessing                             | Spring Batch                  |
| @MessageEndpoint,@EnableIntegrationPatterns        | Spring 集成                   |
| @EnableDeviceResolver                              | Spring Mobile                 |
| @Controller,@RestController,@EnableWebMvc          | Spring MVC + 内嵌 Tomcat      |
| @EnableWebSecurity                                 | Spring Security               |
| @EnableTransactionManagement                       | Spring Transaction Management |


要理解自定义配置是如何生效的，可以查看 Spring Boot CLI 源码中的 **CompilerAutoConfiguration** 子类。


首先，安装 Spring Boot CLI，最新版是 Spring CLI v2.3.3.RELEASE：

    $ wget http://repo.spring.io/release/org/springframework/boot/spring-boot-cli/1.5.7.RELEASE/spring-boot-cli-1.5.7.RELEASE-bin.zip
    $ unzip spring-boot-cli-1.5.7.RELEASE-bin.zip 
    $ cd spring-1.5.7.RELEASE/
    $ ls
    bin  INSTALL.txt  legal  lib  LICENCE.txt  shell-completion
    $ export PATH=$PATH:~/bin/spring-1.5.7.RELEASE/bin/

这里使用 FreeMarker 模板语言来快速建立一个原型工程，按以下目录结构组织：

    $ tree
    .
    ├── app.groovy
    ├── static
    │   └── index.html
    └── templates
        └── hello.ftl

例如以下 app.groovy 示范动态脚本运行的 Controller，注意 @Grab 引入依赖模块：
    
    @Grab('spring-boot-starter-freemarker')

    @RestController
    class ThisWillActuallyRun 
    {
        @RequestMapping("/")
        @ResponseBody
        String home(@RequestParam(value="name", defaultValue="ABC") String name) 
        {
            System.out.println("Name is " + name);
            return String.format("Hello %s!", name);
        }
    }

    @Controller
    class MyApp 
    {
        @RequestMapping("/greet")
        String home(Model model, @RequestParam String name) 
        {
            model.addAttribute("myname", name)
            return "hello"
        }
    }

使用 **@Controller** 标注表示这是一个 MVC 应用，Spring Boot CLI 会自动下载 Spring MVC 和 Spring 内嵌 Tomcat。将控制器用 **@RestController** 标注，即可以实现 RESTfuls API，或者在 Groovy 脚本中定义多个控制器也可以。

而要在 @RestController 中使用模板渲染视图，可以使用 ModelAndView：

    @GetMapping("/upload")
    public ModelAndView upload(HttpServletRequest req, ModelAndView mv) 
    {
        mv.addObject("name", "Uploader");
        mv.setViewName("upload");
        return mv;
    }


多亏 IoC 和 DI 两项强大的去耦合技术，在控制器方法中，直接声明一个 Model 参数，Spring 就会注入依赖的 model，即 MVC 的模型，然后返回一个模板名称，将由 Spring MVC 去渲染。

因为 CLI 不能推测 FreeMarker 模板引擎的依赖，所以要使用 **@Grab('spring-boot-starter-freemarker')** 提示使用了 Freemaker 模板引擎。Spring CLI 使用其元数据自动检测版本，因为不必指定任何组 ID 或版本 ID。

FreeMarker 配置参考，使用 YAML 格式配置文件：

    spring:
      freemarker:
        request-context-attribute: req  #req访问request
        suffix: .html  #后缀名
        content-type: text/html
        enabled: true
        cache: false #缓存配置
        template-loader-path: classpath:/templates/ #模板加载路径 按需配置
        charset: UTF-8 #编码格式
        settings:
          number_format: '0.##'   #数字格式化，无小数点

使用 application.properties 配置：

    spring.freemarker.request-context-attribute=req
    spring.freemarker.suffix=.ftl
    spring.freemarker.content-type=text/html
    spring.freemarker.enabled=true
    spring.freemarker.cache=false
    spring.freemarker.template-loader-path=classpath:/templates/
    spring.freemarker.charset=UTF-8
    spring.freemarker.settings.number_format='0

FreeMarker 过时的配置方法 new Configuration()：

    import freemarker.template.Configuration;

    Configuration cfg = new Configuration(Configuration.VERSION_2_3_29);
    cfg.setDirectoryForTemplateLoading(new File("/where/you/store/templates"));
    cfg.setDefaultEncoding("UTF-8");
    cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
    cfg.setLogTemplateExceptions(false);
    cfg.setWrapUncheckedExceptions(true);
    cfg.setFallbackOnNullLoopVariable(false);
   

模板文件 hello.ftl 参考：

    <!DOCTYPE html>
    <html>
        <head>
            <title>Home page</title>
            <meta charset="UTF-8">
        </head>
        <body>
            <p>Hello ${myname}, today is a beautiful day!</p>
        </body>
    </html>

首页 index.html 可以省略，它只是一个 HTML 表单，用来向 greet 提交数据，在启动程序时有提示，如果这个文件被识别到了：

    o.s.b.a.w.s.WelcomePageHandlerMapping    : Adding welcome page: class path resource [static/index.html]

使用以下 curl 命令就可以实现：

    curl -d "name=HI" -X POST http://localhost:8080/greet

执行 Spring Boot CLI 命令，它会安装 Groovy 解析器后运行程序：

    $ spring run *.groovy
    $ spring run app.groovy
    $ spring run --watch app.groovy

可以到 Maven 的本地仓库中找到 Groovy 编译器：

    .m2\repository\org\codehaus\groovy\groovy

然后测试：

    curl http://localhost:8080
    curl http://localhost:8080?name=xyz

将 Groovy 脚本打包生成应用程序，输出为一个可执行的 jar 文件：

    $ spring jar my-app.jar *.groovy

你可以使用 -- 将命令行参数和 spring 命令参数区分开来：

    $ spring run app.groovy -- --server.port=9000

打包时，默认配置包含或排除的目录或文件如下表：

|   --exclude    | --include |
|----------------|-----------|
| repository     | public    |
| build          | resources |
| target         | static    |
| *.jar files    | templates |
| *.groovy files | META-INF  |

使用 --include 和 --exclude 来包含或要排除打包的目录及文件。



使用 CLI 执行 JUnit 单元测试，创建一个 TestApp.groovy：

    @Grab('junit')
    class TestApp {
       @Test
       void welcomeTest() {
          assertEquals("Hello ABC", new ThisWillActuallyRun().home())
       }
    }

输入以下命令执行测试：

    spring test app.groovy TestApp.groovy

可以在 Maven 项目中集成 Groovy 或 freemarker 支持，按以下修改 pom.xml 的依赖配置：

    <!-- https://mvnrepository.com/artifact/org.codehaus.groovy/groovy-all -->
    <dependency>
        <groupId>org.codehaus.groovy</groupId>
        <artifactId>groovy-all</artifactId>
        <version>2.5.13</version>
        <type>pom</type>
    </dependency>

    <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-freemarker -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-freemarker</artifactId>
        <version>2.3.3.RELEASE</version>
    </dependency>


通过 CLI 来使用 start.spring.io 服务创建一个新的项目：

    $ spring init --dependencies=web,data-jpa my-project
    Using service at https://start.spring.io
    Project extracted to '/Users/developer/example/my-project'

使用 spring init --list 列表所有项目模板能力、依赖和参数设置：

    Project types (* denotes the default)
    +-----------------+------------------------------------------+-----------------------------+
    | Id              | Description                              | Tags                        |
    +-----------------+------------------------------------------+-----------------------------+
    | gradle-build    | Generate a Gradle build file.            | build:gradle,format:build   |
    | gradle-project  | Generate a Gradle based project archive. | build:gradle,format:project |
    | maven-build     | Generate a Maven pom.xml.                | build:maven,format:build    |
    | maven-project * | Generate a Maven based project archive.  | build:maven,format:project  |
    +-----------------+------------------------------------------+-----------------------------+


    Parameters
    +-------------+------------------------------------------+------------------------------+
    | Id          | Description                              | Default value                |
    +-------------+------------------------------------------+------------------------------+
    | artifactId  | project coordinates (infer archive name) | demo                         |
    | bootVersion | spring boot version                      | 2.3.3.RELEASE                |
    | description | project description                      | Demo project for Spring Boot |
    | groupId     | project coordinates                      | com.example                  |
    | javaVersion | language level                           | 11                           |
    | language    | programming language                     | java                         |
    | name        | project name (infer application name)    | demo                         |
    | packageName | root package                             | com.example.demo             |
    | packaging   | project packaging                        | jar                          |
    | type        | project type                             | maven-project                |
    | version     | project version                          | 0.0.1-SNAPSHOT               |
    +-------------+------------------------------------------+------------------------------+



## Spring Boot & Maven
- http://livereload.com

使用 Maven 做项目管理工具，一些基本的操作，编译，构建，单元测试，安装，网站生成和基于 Maven 部署项目命令参考：

    mvn package        来构建项目 使用Maven清理项目
    mvn clean          来清理项目 使用Maven运行单元测试
    mvn test           来执行单元测试 将项目安装到Maven本地资源库
    mvn install        打包和部署项目到本地资源库 生成基于Maven的项目文档站点
    mvn site           来为您的项目生成信息文档站点 使用“mvn site-deploy”部署站点（WebDAV例子）
    mvn site-deploy    通过WebDAV部署自动生成的文档站点到服务器 部署基于Maven的war文件到Tomcat
    mvn tomcat:deploy  以 WAR 文件部署到 Tomcat

打包后，直接运行 **java -jar demo.jar** 就可以启动你的应用了！

或者在 Maven 工程目录下运行开始服务器：

    mvn clean package r-boot:run

总结起来，Spring Boot 的三种启动方式：

- 用 IDE 运行 Application 类的 main 方法
- 在 Spring Boot 工程目录下运行 **mvn spring-boot:run**
- 运行 **mvn install** 或打包命令生成的 jar 包

        mvn install
        cd target
        java -jar demo.jar

在 pom.xml 中配置生成 jar 或 war 包：

    <packaging>jar</packaging>  

    <packaging>war</packaging>

对比 JAR、WAR、EAR 包：

|      |              Java Archive file               |            Web Archive file            |   Enterprise Archive file   |
|------|----------------------------------------------|----------------------------------------|-----------------------------|
| 内容 | 类文件、properties、普通库、资源、辅助文件等 | Servlet、JSP、JSTL、JAR、HTML/XML资源  | 包含JAR、WAR，还包括EJB组件 |
| 部署 | application-client.xml                       | web.xml                                | application.xml             |
| 容器 | 应用服务器（application servers）            | 小型服务程序容器（servlet containers） | EJB容器（EJB containers）   |
| 级别 | 小                                           | 中                                     | 大                          |

默认服务是 8080 端口，如果端口被占用，可以修改 application.properties 中设置：

    # 设置端口号
    server.port=8999

当然，更先进的开发还是热加载 Live Reload 或者叫 Hot Swap 热交换，在开发服务器运行时，实时监视文件的修改，在开发工具的修改保存动作后，内容就在浏览器中更新。

在开发阶段每次修改代码都要手动去重新启动程序，热加载或热部署能简单粗暴帮我们去掉这一繁琐的动作，提高开发效率。

Spring Boot 内建提供了支持热加载的功能，这个机制是通过 spring-dev-tools 来实现的。

在 pom.xml 中添加 devtools 插件引用：

    <!--添加依赖-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <!-- optional=true 依赖不会传递 -->
        <optional>true</optional>
    </dependency>

在 eclipse project 中添加 spring-boot-maven-plugin，idea 中不需要添加此配置。

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <!-- fork 如果没有该标志，热部署 devtools 不生效 -->
                    <fork>true</fork>
                </configuration>
            </plugin>
        </plugins>
    </build>


于热部署是监听 Class 文件的变化，它自身不会主动去编译 Java 文件，所以我们得在 Java 文件改动时，自动编译成 Class 文件，然后热部署工具创造的新的类加载器才会加载改变后的 Class 文件。

所以，如果你使用 IDEA 开发工具的话，记得要把自动编译打开。

    File --> Settings --> Compiler --> Build Project automatically

在配置文件 application.yml 设置热重启：

    spring:
      devtools:
        restart:
          #设置开启热部署
          enabled: true
          exclude: /static/**,/templates/**
          trigger-file: .trigger

设置排除 /static 和 /templates 目录避免修改静态资源时重启。

另外，还可以设置一个触发文件，必须修改这个文件才能触发重启。例如，上面的配置指示，在修改名为 .trigger 的文件前你都不希望执行重启。

在 Web 应用程序开发过程中，最常见的步骤是：

- 修改要呈现的内容（比如图片、样式表、模板）。
- 点击浏览器里的刷新按钮，查看修改的结果。
- 回到第 1 步。

Spring Boot 的开发者工具集成了 LiveReload 可以消除刷新的步骤。激活开发者工具后，Spring Boot 会启动一个内嵌的 LiveReload 服务器，在资源文件变化时会触发浏览器刷新。你要做的就是在浏览器里安装 LiveReload 插件。

如果想要禁用内嵌的 LiveReload 服务器，可以将 spring.devtools.livereload.enabled 设置为 false。

在远程运行应用程序时，比如部署到服务器上或云上，开发者工具的自动重启和 LiveReload 特性都是可选的。此外，Spring Boot 开发者工具还能远程调试 Spring Boot 应用程序。

在传统的开发过程中，你不会打开远程开发功能，因为这会影响性能。但在一些特殊的场景中，此类工具就很有用。比如，出于开发目的，所开发的应用程序部署在非生产环境里。如果应用程序不是在本地开发环境里，而是在云端部署，则尤其如此。

你必须设置一个远程安全码来开启远程开发功能：

    spring.devtools.remote.secret=myappsecret

有了这个属性后，运行中的应用程序就会启动一个服务器组件以支持远程开发。它会监听接受变更的请求，可以重启应用程序或者触发浏览器刷新。

为了使用这个远程服务器，你需要在本地运行远程开发工具的客户端。这个远程客户端是一个类，全限定类名是 org.springframework.boot.devtools.RemoteSpringApplication。它会运行在 IDE 里，要求提供一个参数，告知远程应用程序部署在哪里。



## Spring Boot AutoConfigurations
- [@ConfigurationProperties 注解](https://www.cnblogs.com/FraserYu/p/11261916.html)
- [SpringBoot AutoConfigure 原理](https://www.jianshu.com/p/1ed18eebb299)


Spring Boot 通过 spring-boot-autoconfigure 依赖自动配置体现了约定优于配置 Convention over Configuration 这一设计原则，而 spring-boot-autoconfigure 主要用到了 spring.factories 和几个常用的注解条件来实现自动配置。

**@Configuration** 标注是 JavaConfig 形式的 Spring IoC 容器配置，其本身作为一个 IoC 容器配置类使用。与原 XML 形式配置原理一致。

1、 XML方式定义类

    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.0.xsd"
           default-lazy-init="true">
        <!--bean定义-->
        <bean id="mockService" class="..MockServiceImpl">
    </bean>
    </beans>

2、 JavaConfig形式定义类

    @Configuration
    public class MockConfiguration{
        @Bean
        public MockService mockService(){
            return new MockServiceImpl();
        }
    }

**@Conditional** 标注在 Spring 4 中引入用来有条件注册 Bean，需要配合 @Configuration 使用。

提供以下方式，当条件成立时就会加载被 **@Conditional** 标注的类：

|             条件注册标注            |                               说明                              |
|-------------------------------------|-----------------------------------------------------------------|
| **@ConditionalOnBean**              | 当 Spring IoC 容器存在指定 Bean 时加载当前标注的类              |
| **@ConditionalOnClass**             | 当 Spring IoC 容器存在指定 Class 时加载当前标注的类             |
| **@ConditionalOnExpression**        | 基于 SpEL 表达式作为判断条件                                    |
| **@ConditionalOnJava**              | 基于 JVM 版本作为判断条件                                       |
| **@ConditionalOnJndi**              | 在 JNDI 存在时查找指定的位置                                    |
| **@ConditionalOnMissingBean**       | 当 Spring IoC 容器没有指定 Bean 时加载当前标注的类              |
| **@ConditionalOnMissingClass**      | 当 Spring IoC 容器没有指定 Class 时加载当前标注的类             |
| **@ConditionalOnNotWebApplication** | 当前项目不是 Web 项目加载                                       |
| **@ConditionalOnProperty**          | 当指定的属性是否有指定的值                                      |
| **@ConditionalOnResource**          | 当类路径是否有指定的值                                          |
| **@ConditionalOnSingleCandidate**   | 当指定 Bean 在 Spring IoC 容器只有一个实例，或者指定首选的 Bean |
| **@ConditionalOnWebApplication**    | 当前项目是 Web 项目的条件                                       |

**AutoConfigureAfter** 指定自动配置类的顺序，在哪个或哪些配置类之后才执行的配置。

**@ComponentScan** 标注自动扫描并加载符合条件的组件，例如，通过 @Bean、@Component 等注解的 Bean，将这些类加载到 Spring IoC 容器中。可以通过 basePackages 等属性来细粒度的定制 @ComponentScan 自动扫描的范围。

**@EnableAutoConfiguration** 标注开启 Spring Boot 自动配置，借助 **SpringFactoriesLoader** 工厂加载器将所有符合自动配置条件的 Bean 定义加载到 IoC 容器，它会读取 META-INF/spring.factories 中的配置。

可以自己定义自己的自动配置模块，只需要在 MATA-INF/spring.factories 文件配置 org.springframework.boot.autoconfigure.EnableAutoConfiguration=[自定义的AutoConfigure] 即可。

@EnableAutoConfiguration 是一个复合标注，通过导入标注 **@Import({AutoConfigurationImportSelector.class})** 将符合条件的 Configuration 配置类加载到 IoC 容器。

    @Target(ElementType.TYPE)
    @Retention(RetentionPolicy.RUNTIME)
    @Documented
    @Inherited
    @AutoConfigurationPackage
    @Import(AutoConfigurationImportSelector.class)
    public @interface EnableAutoConfiguration {
        ...

通过 spring-boot-autoconfigure 完成自动化配置的自定义起步依赖 Starters，正是各种 Spring Boot 起步依赖让我们摆脱了旧式 Spring 工程各种依赖库的处理麻团之中。Spring Boot 会自动通过 classpath 路径下的类发现需要的 Bean 并织入。


例如 Web 项目 MySQL 数据库的依赖处理，需要用到 datasource 自动配置：

    spring:
      datasource:
        driver-class-name: com.mysql.jdbc.Driver
        url: "jdbc:mysql://127.0.0.1/crs_db?useUnicode=true&characterEncoding=utf"
        username: root
        password: 123456

对于习惯了 spring-mvc 的同学来说，这真是太简洁了！Spring Boot 只需要在 application.yml 中进行配置即可在应用中使用对应的数据库连接。

来看一下 spring-boot-autoconfigure 是怎样简化这些步骤的，关键代码: 

    // org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration

    /**
     * {@link EnableAutoConfiguration Auto-configuration} for {@link DataSource}.
     *
     * @author Dave Syer
     * @author Phillip Webb
     * @author Stephane Nicoll
     * @author Kazuki Shimizu
     */
    @Configuration
    @ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })
    @EnableConfigurationProperties(DataSourceProperties.class)
    @Import({ DataSourcePoolMetadataProvidersConfiguration.class,
            DataSourceInitializationConfiguration.class })
    public class DataSourceAutoConfiguration {

        @Configuration
        @Conditional(EmbeddedDatabaseCondition.class)
        @ConditionalOnMissingBean({ DataSource.class, XADataSource.class })
        @Import(EmbeddedDataSourceConfiguration.class)
        protected static class EmbeddedDatabaseConfiguration {

        }

        @Configuration
        @Conditional(PooledDataSourceCondition.class)
        @ConditionalOnMissingBean({ DataSource.class, XADataSource.class })
        @Import({ DataSourceConfiguration.Hikari.class, DataSourceConfiguration.Tomcat.class,
                DataSourceConfiguration.Dbcp2.class, DataSourceConfiguration.Generic.class,
                DataSourceJmxConfiguration.class })
        protected static class PooledDataSourceConfiguration {

        }

        /**
         * {@link AnyNestedCondition} that checks that either {@code spring.datasource.type}
         * is set or {@link PooledDataSourceAvailableCondition} applies.
         */
        static class PooledDataSourceCondition extends AnyNestedCondition {

            PooledDataSourceCondition() {
                super(ConfigurationPhase.PARSE_CONFIGURATION);
            }

            @ConditionalOnProperty(prefix = "spring.datasource", name = "type")
            static class ExplicitType {

            }

            @Conditional(PooledDataSourceAvailableCondition.class)
            static class PooledDataSourceAvailable {

            }
        }
        ...

DataSourceAutoConfiguration 数据源自动配置类的关键标注说明：

- @Configuration 标注 **DataSourceAutoConfiguration** 是一个配置类；
- @ConditionalOnClass 条件标注 OnClass 表示只有在 classpath 找到 DataSource, EmbeddedDatabaseType 类时才执行标注的这个配置类；
- @EnableConfigurationProperties 装载并激活一个配置属性读取类，找到其定义，可以看到使用 **@ConfigurationProperties** 标注读取数据源配置信息：

        @ConfigurationProperties(prefix = "spring.datasource")
        public class DataSourceProperties implements BeanClassLoaderAware, InitializingBean

- @Import 导入标注表明要注入 IoC 容器的数据源配置类；
- 在 DataSourceAutoConfiguration 类内定义了两个配置方法，还有几个嵌套的配置类，例如 EmbeddedDatabaseConfiguration，它会在条件标注指示的 DataSource 缺失时生效。


使用 Spring Book 提供的一系列 Starters 起步依赖，可以大大简化 Spring 的项目配置，例如使用 spring-boot-starter-web 来做 Web 开发：

    <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>2.3.3.RELEASE</version>
    </dependency>

    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web
    @Grapes(
        @Grab(group='org.springframework.boot', module='spring-boot-starter-web', version='2.3.3.RELEASE')
    )



## Spring Boot Actuator
- [Spring Boot Actuator: Production-ready Features](https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/reference/htmlsingle/#production-ready)

在 pom.xml 中配置 Actuator 启用服务监控：

    curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/user
    curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/users/jimboyeah
    curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/users/jimboyeah/received_events
    curl -H "Accept: application/vnd.github.v3+json" -X PATCH https://api.github.com/user -d '{"name":"jimboyeah"}'

    <!-- tag::actuator[] -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <!-- end::actuator[] -->

运行程序后，可以使用 curl 测试它暴露的以下几个访问入口：

    curl localhost:8080/errors
    curl localhost:8080/actuator
    curl localhost:8080/actuator/health
    curl localhost:8080/actuator/info


## Spring Static 资源配置
- http://www.javaboy.org/2019/0408/springboot-static-resources.html

当我们使用 SpringMVC 框架时，静态资源会被拦截，需要添加额外配置，之前老有小伙伴在微信上问松哥Spring Boot 中的静态资源加载问题：“松哥，我的HTML页面好像没有样式？”，今天我就通过一篇文章，来和大伙仔细聊一聊这个问题。

在 SSM 环境搭建中，一般来说，我们可以通过 mvc:resources 节点来配置不拦截静态资源，如下：

    <mvc:resources mapping="/js/**" location="/js/"/>
    <mvc:resources mapping="/css/**" location="/css/"/>
    <mvc:resources mapping="/html/**" location="/html/"/>

由于这是一种 Ant 风格的路径匹配符，/** 表示可以匹配任意层级的路径，因此上面的代码也可以像下面这样简写：

    <mvc:resources mapping="/**" location="/"/>

Spring Boot 的配置除了在 XML 中配置，也可以在 Java 代码中配置，如果在 Java 代码中配置的话，我们只需要自定义一个类，继承自 WebMvcConfigurationSupport 即可：

    @Configuration
    @ComponentScan(basePackages = "org.sang.javassm")
    public class SpringMVCConfig extends WebMvcConfigurationSupport {
        @Override
        protected void addResourceHandlers(ResourceHandlerRegistry registry) {
            registry.addResourceHandler("/**").addResourceLocations("/");
        }
    }

重写 WebMvcConfigurationSupport 类中的 addResourceHandlers 方法，在该方法中配置静态资源位置即可，这里的含义和上面 xml 配置的含义一致，因此无需多说。
这是我们传统的解决方案，在 Spring Boot 中，其实配置方式和这个一脉相承，只是有一些自动化的配置了。

Spring 5.0 已被废弃 WebMvcConfigurerAdapter，可以创建一个类继承 WebMvcConfigurer 接口实现同样的接口方法：

    package com.example.demo;
     
    import org.springframework.stereotype.Component;
    import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
    import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
     
    /**
     * 静态资源映射
     */
    @Component
    public class MyWebMvcConfig implements WebMvcConfigurer {
        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
            registry.addResourceHandler("/static/**")
                    .addResourceLocations("classpath:/static/");
        }
    }


在 application.properties 配置文件中直接定义过滤规则和静态资源位置： 

    spring.mvc.static-path-pattern=/static/**
    spring.resources.static-locations=classpath:/static/

重启项目，效果同上面是一样的。我们同样可以在浏览器中输入 http://localhost:8080/static/java.png 来访问添加的静态图片。

在 Spring Boot 中，如果我们是从 https://start.spring.io 这个网站上创建的项目，或者使用 IntelliJ IDEA 中的 Spring Boot 初始化工具创建的项目，默认都会存在 resources/static 目录，很多小伙伴也知道静态资源只要放到这个目录下，就可以直接访问，除了这里还有没有其他可以放静态资源的位置呢？为什么放在这里就能直接访问了呢？这就是本文要讨论的问题了。

首先，在 Spring Boot 中，默认情况下，一共有 5 个位置可以放静态资源，五个路径分别是如下5个：

    classpath:/META-INF/resources/
    classpath:/resources/
    classpath:/static/
    classpath:/public/
    /

前四个目录好理解，分别对应了 resources 目录下不同的目录。

在 Spring Boot 项目中，默认是没有 webapp 这个目录的，当然我们也可以自己添加（例如在需要使用JSP的时候），这里第 5 个 / 其实就是表示 webapp 目录中的静态资源也不被拦截。如果同一个文件分别出现在五个目录下，那么优先级也是按照上面列出的顺序。

系统默认创建了 classpath:/static/ ，正常情况下，我们只需要将我们的静态资源放到这个目录下即可，也不需要额外去创建其他静态资源目录，例如我在 classpath:/static/ 目录下放了一张名为1.png 的图片，那么我的访问路径是：

    http://localhost:8080/1.png

这里大家注意，请求地址中并不需要 static，如果加上了 static 反而多此一举会报 404 错误。很多人会觉得奇怪，为什么不需要添加 static 呢？资源明明放在 static 目录下。其实这个效果很好实现，例如在SSM配置中，我们的静态资源拦截配置如果是下面这样：

    <mvc:resources mapping="/**" location="/static/"/>

如果我们是这样配置的话，请求地址如果是 http://localhost:8080/1.png 实际上系统会去 /static/1.png 目录下查找相关的文件。


    
## Spring Boot yaml 配置简介
- http://www.javaboy.org/2019/0416/springboot-yaml.html
- http://www.javaboy.org/2019/0530/application.properties.html
- https://www.jdon.com/springboot/reading-application-properties.html
- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/reference/htmlsingle)
- Spring in Action 5th - Chapter 5 Working with configuration properties

Spring 环境来自几个属性源，包括：

- JVM 系统属性 JVM system properties
- 操作系统环境变量 Operating system environment variables
- 命令行参数 Command-line arguments
- 应用程序属性配置文件 application.properties、application.yml

这些配置数据汇合成为 Spring environment，并通过依赖注入供应以下上下文的各种 Beans 使用：

- Data source
- User service
- Product service
- Inventory tracker
- Audit service

Spring Boot 中的配置文件有两种格式，properties 或者 yaml，一般情况下，两者可以随意使用，但默认优先使用 **application.properties** 的配置。

对比一下两种配置格式的语法差异：

    ## YAML document:
    environments:
        dev:
            url: https://dev.example.com
            name: Developer Setup
        prod:
            url: https://another.example.com
            name: My Cool App


    ## application.properties
    environments.dev.url=https://dev.example.com
    environments.dev.name=Developer Setup
    environments.prod.url=https://another.example.com
    environments.prod.name=My Cool App

如果未曾指定配置类型，在 Spring Boot 启动时，提示当前的配置：

    No active profile set, falling back to default profiles: default

这个提示配置文件中尚未配置环境，于是使用默认的 default 环境，这是正常情况！

如果你有多个环境，比如生产环境 PROD，开发环境 DEV 对应不同的配置文件：

+ application.yml
+ application-dev.yml
+ application-prod.yml

那么就可以在 application.yml 中通过指定 profiles 以起用对应的配置文件：

- spring.profiles.active: dev 指明 application-dev.yml 生效；
- spring.profiles.active: prod 指明 application-prod.yml 生效；

Spring 在确定哪个 profile 处于激活状态时，需要根据 spring.profiles 的 active 属性、default 属性确定当前的配置，如果均没有设置的话，那就没有激活的 profile，因此只会创建那些没有定义 profile 中的 bean。

列如，在配置文件中使用三个连字符作为配置分隔，设置多个 profile，并且配置当前为 prod 环境： 

    server:
      port: 8080
    spring:
      profiles:
        active: prod
    ---
    server:
      port: 8081
    spring:
      profiles: dev # 指定属于 dev 环境
    ---
    server:
      port: 8082
    spring:
      profiles: prod  # 指定属于 prod 环境

事实上，还可以以数组方式配置多个激活配置类型：

    spring:
      profiles:
        active:
        - prod
        - audit
        - ha

配置文件可以写在四个不同的位置：

- /config/application.yaml
- /application.yaml
- classpath 下的 config 目录中
- classpath 目录下

四个位置中的优先级按照上面列出的顺序依次降低，即如果有同一个属性在四个文件中都出现了，以优先级高的为准。

当然这四个位置也不是一成不变的，也可以自己定义，有两种方式，一个是使用 spring.config.location 属性，另一个则是使用 spring.config.additional-location 这个属性，在第一个属性中，表示自己重新定义配置文件的位置，项目启动时就按照定义的位置去查找配置文件，这种定义方式会覆盖掉默认的四个位置，也可以使用第二种方式，第二种方式则表示在四个位置的基础上，再添加几个位置，新添加的位置的优先级大于原本的位置。

application.yaml 这个名字不是固定的，开发者可以自己定义 yaml 名字，在项目启动时指定配置文件的名字，像下面这样配置环境变量：

    spring.config.name=app

除了在 IntelliJ IDEA 中直接配置，还可以在项目 jar 包启动时加入如下参数：

    java -jar myproject.jar --spring.config.name=app

这样配置之后，在项目启动时，就会按照上面所说的四个位置按顺序去查找一个名为 app.yaml 的文件。

yaml 也支持数组注入，例如

    my:
      servers:
        - dev.example.com
        - another.example.com

这段数据可以通过 **@ConfigurationProperties** 标注绑定到一个 Bean 的数组成员中，这个属性配置标注用途不局限于类，也可以用在类成员上：

    @ConfigurationProperties(prefix="my")
    @Component
    public class Config 
    {
        private List<String> servers = new ArrayList<String>();

        public List<String> getServers() 
        {
            return this.servers;
        }
    }

项目启动后，配置中的数组会自动存储到 servers 集合中。当然，yaml 不仅可以存储这种简单数据，也可以在集合中存储对象。

例如下面这种：

    redis:
      redisConfigs:
        - host: 192.168.66.128
          port: 6379
        - host: 192.168.66.129
          port: 6380

这个可以被注入到如下类中：

    @Component
    @ConfigurationProperties(prefix = "redis")
    public class RedisCluster 
    {
        private List<SingleRedisConfig> redisConfigs;
        //省略 getter/setter
    }

在 Bean 定义中可以使用条件配置来激活，只有 **@Profile** 指定的配置激活时，Bean 都会得到加载，使用感叹号表示否定条件，即没有使用 @Profile("!prod") 指定的 prod 配置才加载 Bean：

    @Bean
    @Profile("dev")
    public CommandLineRunner dataLoader(IngredientRepository repo,
         UserRepository userRepo, PasswordEncoder encoder) {
        ...
    }

    @Bean
    @Profile({"dev", "qa"})
    public CommandLineRunner dataLoader(IngredientRepository repo,
         UserRepository userRepo, PasswordEncoder encoder) {
        ...
    }

    @Bean
    @Profile("!prod")
    public CommandLineRunner dataLoader(IngredientRepository repo, 
          UserRepository userRepo, PasswordEncoder encoder) {
        ...
    }

    @Profile({"!prod", "!qa"})
    @Configuration
    public class DevelopmentConfig {
        
        @Bean
        public CommandLineRunner dataLoader(IngredientRepository repo,
              UserRepository userRepo, PasswordEncoder encoder) {
            ...
        }
    }

也可以在整个 @Configuration 注解的类上使用 @Profile。


不同于 properties 文件的无序，yaml 配置是有序的，这一点在有些配置中是非常有用的，例如在 Spring Cloud Zuul 的配置中，当我们配置代理规则时，顺序就显得尤为重要了。当然 yaml 配置也不是万能的，例如，yaml 配置目前不支持 **@PropertySource** 注解。

虽然 properties 文件比较常见，但是相对于 properties 而言，yaml 更加简洁明了，而且使用的场景也更多，很多开源项目都是使用 yaml 进行配置（例如 Hexo）。除了简洁，yaml 还有另外一个特点，就是 yaml 中的数据是有序的，properties 中的数据是无序的，在一些需要路径匹配的配置中，顺序就显得尤为重要（例如我们在 Spring Cloud Zuul 中的配置），此时我们一般采用 yaml。

由于 Spring Boot 源自 Spring ，所以 Spring 中存在的属性注入，在 Spring Boot 中一样也存在。由于 Spring Boot 中，默认会自动加载 application.properties 文件，所以简单的属性注入可以直接在这个配置文件中写。

例如，现在定义一个 Book 类：

    public class Book 
    {
        private Long id;
        private String name;
        private String author;
        //省略 getter/setter
    }

然后，在 application.properties 文件中定义属性：

    book.name=三国演义
    book.author=罗贯中
    book.id=1

按照传统的 Spring 中的方式，可以直接通过 @Value 注解将这些属性注入到 Book 对象中：

    @Component
    public class Book 
    {
        @Value("${book.id}")
        private Long id;
        
        @Value("${book.name}")
        private String name;
        
        @Value("${book.author}")
        private String author;
        // 省略 getter/setter
    }

如果要在 Groovy 中使用，需要将双引号变为单引号如果要在 Groovy 中使用，需要将双引号变为单引号，这里因为 $ 会导致 Groovy 解释标注为 GString 对象而不是字符串：

    @Value('${spring.banner.image.location}') // Using @Value Spring Annotation with Groovy

这里因为 $ 会导致 Groovy 解释标注为 GString 对象而不是字符串：

Book 对象本身也要交给 Spring 容器去管理，如果 Book 没有交给 Spring 容器，那么 Book 中的属性也无法从 Spring 容器中获取到值。

配置完成后，在 Controller 或者单元测试中注入 Book 对象，启动项目，就可以看到属性已经注入到对象中了。

一般来说，我们在 application.properties 文件中主要存放系统配置，这种自定义配置不建议放在该文件中，可以自定义 properties 文件来存在自定义配置。

例如在 resources 目录下，自定义 book.properties 文件。

此时，项目启动并不会自动的加载该配置文件，如果是在 XML 配置中，可以通过如下方式引用该 properties 文件：

    <context:property-placeholder location="classpath:book.properties"/>

如果是在 Java 配置中，可以通过 @PropertySource 来引入配置：

    @Component
    @PropertySource("classpath:book.properties")
    public class Book 
    {
        @Value("${book.id}")
        private Long id;

        @Value("${book.name}")
        private String name;

        @Value("${book.author}")
        private String author;
        //getter/setter
    }

这样，当项目启动时，就会自动加载 book.properties 文件。

这只是 Spring 中属性注入的一个简单用法，和 Spring Boot 没有任何关系。


Spring Boot 引入了类型安全的属性注入，如果采用 Spring 中的配置方式，当配置的属性非常多的时候，工作量就很大了，而且容易出错。

使用类型安全的属性注入，可以有效的解决这个问题。

    @Component
    @PropertySource("classpath:book.properties")
    @ConfigurationProperties(prefix = "book")
    public class Book 
    {
        private Long id;
        private String name;
        private String author;
        //省略getter/setter
    }

这里，主要是引入 **@ConfigurationProperties(prefix = "book")** 注解，并且配置了属性的前缀，此时会自动将 Spring 容器中对应的数据注入到对象对应的属性中，就不用通过 @Value 注解挨个注入了，减少工作量并且避免出错。


从 application.properties 文件中读取属性的最简单方法之一是自动装配 Environment 对象。

您需要做的就是使用 @Autowired 注释将 Environment 对象注入 Rest Controller 或 Service 类，如下所示：

    @Autowired
    private Environment env;

使用 getProperty 方法获取特定属性的值： 

    String keyValue = env.getProperty(key);
    String keyValue = env.getProperty(key);

假设我在 application.properties 文件中有这些属性： 

    app.title=Learning Spring Boot 
    app.description=Working with properties file

我需要创建一个 Web 服务端点，它接受属性的键名作为请求参数并返回属性值。

这是我的 Rest Controller类：

    @RestController
    @RequestMapping("app")
    public class AppController {

       @Autowired
       private Environment env;

       @GetMapping("/property")
       public String getPropertyValue(@RequestParam("key") String key)
       {
          String returnValue = "No value";

          String keyValue = env.getProperty(key);

          if( keyValue!= null && !keyValue.isEmpty())
          {
             returnValue = keyValue;
          }
          return returnValue;
       }
    }

请注意，为了能够从 application.properties 文件中读取属性，我需要使用 @Autowired 注释来注入 Environment 对象。然后我可以简单地调用它的 getProperty 方法来获取所请求属性的值。


数据源配置参考：

    spring:
      datasource:
        url: jdbc:mysql://localhost/tacocloud
        username: tacodb
        password: tacopassword

    spring:
      datasource:
        schema:
        - order-schema.sql
        - ingredient-schema.sql
        - tao-schema.sql
        - user-schema.sql
        data:
        - ingredients.sql

    spring:
      datasource:
        jndi-name: java:/comp/env/jdbc/tacoCloudDS

内置服务器配置参考：

    server:
      port: 8443
      ssl:
        key-store: file:///path/to/mykeys.jks
        key-store-password: letmein
        key-password: letmein
    # port: 0
    # 内置服务器端口配置为 0 表示从随机选择的可用端口启动。
    # 使用 JDK 密钥工具生成密钥存储文件 keytool -keystore mykeys.jks -genkey -alias tomcat -keyalg RSA

Log 日志配置：

    logging:
      path: /var/logs/
      file: TacoCloud.log
      level:
        root: WARN
        org:
          springframework:
            security: DEBUG
          # 折叠写法
          # springframework.security: DEBUG

使用自定义属性，还可以使用变量点位符号：

    greeting:
      welcome: You are using ${spring.application.name}



## Spring Boot CrossOrigin
- Spring Boot 面试，一个问题就干趴下了！http://www.ityouknow.com/springboot/2019/07/24/springboot-interview.html
- [SpringBoot - 解决跨域请求问题](https://www.hangge.com/blog/cache/detail_2470.html)
- [(CORS) 启用跨域请求 ASP.NET Core](https://docs.microsoft.com/zh-cn/aspnet/core/security/cors?view=aspnetcore-3.1)

现代浏览器出于安全的考虑，HTTP 请求时必须遵守同源策略，否则就是跨域的 HTTP 请求，默认情况下是被禁止的，IP（域名）不同、或者端口不同、协议不同（比如 HTTP、HTTPS）都会造成跨域问题。

一般前端的解决方案有：

① 使用 JSONP 来支持跨域的请求，JSONP 实现跨域请求的原理简单的说，就是动态创建 script 标签，然后利用 src 属性不受同源策略约束来跨域获取数据。缺点是需要后端配合输出特定的返回信息。

② 利用反应代理的机制来解决跨域的问题，前端请求的时候先将请求发送到同源地址的后端，通过后端请求转发来避免跨域的访问。

后来 HTML5 支持了 CORS 协议，跨域资源共享 Cross-origin resource sharing 是一个 W3C 标准，允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。它通过服务器增加一个 Access-Control-Allow-Origin 来告诉客户端跨域的限制，如果浏览器支持 CORS、并且判断 Origin 通过的话，就会允许 XMLHttpRequest 发起跨域请求。

前端使用了 CORS 协议，就需要后端设置支持非同源的请求，Spring Boot 设置支持非同源的请求有两种方式。

第一，配置 CorsFilter。

    @Configuration
    public class GlobalCorsConfig {
        @Bean
        public CorsFilter corsFilter() {
            CorsConfiguration config = new CorsConfiguration();
              config.addAllowedOrigin("*");
              config.setAllowCredentials(true);
              config.addAllowedMethod("*");
              config.addAllowedHeader("*");
              config.addExposedHeader("*");

            UrlBasedCorsConfigurationSource configSource = new UrlBasedCorsConfigurationSource();
            configSource.registerCorsConfiguration("/**", config);

            return new CorsFilter(configSource);
        }
    }

第二种方式稍微简单一些，采用全局配置。

全局配置需要添加自定义类实现 WebMvcConfigurerAdapter 或 WebMvcConfigurer 接口，然后实现接口中的 addCorsMappings 方法。下面是一个简单的样例代码：

    public class Application extends WebMvcConfigurerAdapter 
    {
        @Override  
        public void addCorsMappings(CorsRegistry registry) 
        {
            registry.addMapping("/**")
                .allowCredentials(true)
                .allowedHeaders("*")
                .allowedOrigins("*")
                .allowedMethods("*");
        }
    }

    @Configuration
    public class MyWebMvcConfig implements WebMvcConfigurer 
    {
        @Override
        public void addCorsMappings(CorsRegistry registry) 
        {
            registry.addMapping("/device/**")
                    .allowedHeaders("*")
                    .allowedMethods("*")
                    .maxAge(1800)
                    .allowedOrigins("http://localhost:8081");
        }
    }

    @Configuration
    public class MyWebMvcConfig implements WebMvcConfigurer {
     
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
                    .allowedHeaders("*")
                    .allowedMethods("*")
                    .maxAge(1800)
                    .allowedOrigins("*");
        }
    }

- addMapping：表示对哪种格式的请求路径进行跨域处理，/** 表示所有 URL，/device/** 表示所有前缀 /device 的 URL。
- allowedHeaders：表示允许的请求头，默认允许所有的请求头信息。
- allowedMethods：表示允许的请求方法，默认是 GET、POST 和 HEAD。这里配置为 * 表示支持所有的请求方法。
- maxAge：表示探测请求的有效期，单位是秒；
- allowedOrigins 表示支持的域 * 表示所有域；

旧始处理跨域的方法是通过 JSONP 来解决的，但是 JSONP 只可以发送 GET 请求，无法发送其他类型的请求，在 RESTful 风格的应用中，就显得非常鸡肋，因此通过实现 CORS - Cross-origin resource sharing 来解决跨域问题是流行做法。这种解决方案并非 Spring Boot 特有的，在传统的 SSM 框架中，就可以通过 CORS 来解决跨域问题，只不过之前我们是在 XML 文件中配置 CORS，现在则是通过 @CrossOrigin 注解来解决跨域问题。

直接在相应的请求方法上或控制器上添加 @CrossOrigin 注解就可以支持跨域。

    @RestController
    public class WebAPIController {
        @Autowired
        DeviceDataManager deviceDataManager;
     
        @GetMapping("/getDeviceDatas")
        @CrossOrigin
        public List<DeviceData> getDeviceDatas() {
            return deviceDataManager.getDatas();
        }
    }

    @RestController
    @CrossOrigin
    public class WebAPIController {
        @Autowired
        DeviceDataManager deviceDataManager;
     
        @GetMapping("/getDeviceDatas")
        public List<DeviceData> getDeviceDatas() {
            return deviceDataManager.getDatas();
        }
    }

    @RestController
    public class WebAPIController {
        @Autowired
        DeviceDataManager deviceDataManager;
     
        @GetMapping("/getDeviceDatas")
        @CrossOrigin(value = "http://localhost:8081", maxAge = 1800, allowedHeaders ="*")
        public List<DeviceData> getDeviceDatas() {
            return deviceDataManager.getDatas();
        }
    }

@CrossOrigin 注解还支持更加丰富的参数配置：

- value：表示支持的域。这里表示来自 http://localhost:8081 域的请求是支持跨域的。默认为 * 表示所有域都可以。
- maxAge：表示探测请求的有效期。探测请求不用每次都发送，可以配置一个有效期，有效期过了之后才会发送探测请求。默认为 1800 秒，即 30 分钟。
- allowedHeaders：表示允许的请求头。默认为 * 表示该域中的所有的请求都被允许。

添加 CROS 后响应头会添加类似以下这样的响应头：

    Vary: Origin
    Vary: Access-Control-Request-Method
    Vary: Access-Control-Request-Headers






## Customizing the Banner
- https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/reference/htmlsingle/#boot-features-banner
- http://www.kammerl.de/ascii/AsciiSignature.php
- http://www.network-science.de/ascii/
- http://patorjk.com/software/taag/

Spring Boot 启动时有一个 Ascii-Art Banner 图文，如果你想禁用这个 Banner，有几种实现方式，其中之一就是在运行应用程序的命令行参数里指定：

    $ java -jar readinglist-0.0.1-SNAPSHOT.jar --spring.main.show-banner=false

另一种方式是创建一个名为 **application.properties** 的配置文件，包含如下内容：

    spring.main.show-banner=false

或者，如果你喜欢的话，也可以创建名为 **application.yml** 的 YAML 文件，内容如下：

    spring:
      main:
        show-banner: false

还可以将属性设置为环境变量。举例来说，如果你用的是bash或者zsh，可以用 export 命令：

    $ export spring_main_show_banner=false


在 classpath 提供 banner.txt 文件，或者在配置文件中设置 **spring.banner.location** 指向 banner.txt 提供定制内容。默认为 UTF-8 编码，可以通过 **spring.banner.charset** 指定。

除了文本，还可以指定一个 banner.gif, banner.jpg, banner.png 图片，或者通过 **spring.banner.image.location** 指定。这个图片会被转换成 ASCII art 在控制台中显示。

在 banner.txt 文本中，可以使用以下占位符号：

Table 4. Banner variables

|             Variable             |                                 Description                                  |
|----------------------------------|------------------------------------------------------------------------------|
| ${application.version}           | 在 MANIFEST.MF 定义的程序版本，比如 Implementation-Version: 1.0 会打印为 1.0 |
| ${application.formatted-version} | 在 MANIFEST.MF 定义的格式化后版本号，如 v1.0                                 |
| ${spring-boot.version}           | 使用的 Spring Boot 版本号，比如 2.2.2.RELEASE                                |
| ${spring-boot.formatted-version} | 格式化的 Spring Boot 版本号，如 v2.2.2.RELEASE                               |
| ${Ansi.NAME}                     | NAME 是 ANSI 转义码，参考 AnsiPropertySource                                 |
| ${application.title}             | 在 MANIFEST.MF 定义的程序标题，如 Implementation-Title: MyApp 打印为 MyApp   |

除了 ${Ansi.NAME} 还可以使用 ${AnsiColor.NAME}, ${AnsiBackground.NAME}, ${AnsiStyle.NAME}

同时指定文本和图片，都有打印到输出。



## Spring RESTfuls Service
- [Spring Initializer](https://start.spring.io/)
- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/reference/htmlsingle)
- https://spring.io/guides/gs/rest-service/
- https://spring.io/guides/gs/serving-web-content/
- https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/package-summary.html
- [23种设计模式与J2EE设计模式](https://segmentfault.com/a/1190000016014855)
- [SpringBoot - RestTemplate 使用详解](https://www.hangge.com/blog/cache/detail_2511.html)
- [SpringBoot - 实现JSON数据的返回](https://www.hangge.com/blog/cache/detail_2460.html)
- Spring in Action - Chapter 7 Consuming REST services https://potoyang.gitbook.io/spring-in-action-v5/di-7-zhang-tiao-yong-rest-fu-wu


越来越多的人开始意识到，网站即软件，而且是一种新型的软件。这种互联网软件采用客户端/服务器模式，建立在分布式体系上，通过互联网通信，具有高延时 high latency、高并发等特点。近几年来，以信息为中心的表述性状态转移（Representational State Transfer，REST）已成为替换传统 SOAP Web 服务的流行方案。SOAP 一般会关注行为和处理，而 REST 关注的是要处理的数据。对于许多应用程序而言，使用 SOAP 可能会有些大材小用了，而 REST 提供了一个更简单的可选方案。另外，很多的现代化应用都会有移动或富 JavaScript 客户端，它们都会使用运行在服务器上 REST API。

REST - Representational State Transfer 表述状态转移，是由 Roy Thomas Fielding 在 2000 年提出的，发表在论文 《架构风格与基于网络的软件架构设计》，是一种软件架构风格。RESTful 架构，就是目前最流行的一种互联网软件架构。它结构清晰、符合标准、易于理解、扩展方便，所以正得到越来越多网站的采用。Fielding 是一个非常重要的人，他是 HTTP 1.0/1.1 协议的主要设计者、Apache 服务器软件的作者之一、Apache 基金会的第一任主席。所以，他的这篇论文一经发表，就引起了关注，并且立即对互联网开发产生了深远的影响。

REST 的名称表现层状态转化，其实省略了主语，表现层其实指的是资源 Resources 的表现层。

所谓资源，就是网络上的一个实体，或者说是网络上的一个具体信息，就是一个 URL 对应的资源实体。它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的实在。你可以用一个 URI 统一资源定位符指向它，每种资源对应一个特定的 URI，URI 是每一个资源的地址或独一无二的识别符。

互联网通信 HTTP 是一个无状态协议，这意味着，所有的状态都保存在服务器端。因此，如果客户端想要操作服务器，必须通过某种手段，让服务器端发生状态转化 State Transfer。而这种转化是建立在表现层之上的，所以就是表现层状态转化。

客户端用到的手段，只能是 HTTP 协议和具体的谓词，GET、POST、PUT、DELETE。它们分别对应四种基本操作获取、新建、更新、删除资源。

JSON 是目前主流的前后端数据传输方式，在 Spring Boot 项目中，只要添加了 Web 起步依赖 spring-boot-starter-web，就可以很方便地实现 JSON 转换。默认加入了 **jackson-databind** 作为 JSON 处理器，我们不需要要添加额外的 JSON 处理器就可以返回一段 JSON。

    <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-annotations -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-annotations</artifactId>
        <version>2.9.9</version>
    </dependency>

    // https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-annotations
    @Grapes(
        @Grab(group='com.fasterxml.jackson.core', module='jackson-annotations', version='2.9.9')
    )

两个常用注解：

    import com.fasterxml.jackson.annotation.JsonFormat;
    import com.fasterxml.jackson.annotation.JsonIgnore;

    @JsonIgnore
    private Float price;
 
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date publicationDate;

- @JsonIgnore 序列化时忽略掉某些属性，即生成 json 中不包含标注的属性。
- @JsonFormat 将日期类型的数据格式化成指定格式的字符串。

使用 Spring 实现 REST 架构，先到 Spring Initializer 上初始化一个工程模板，或者直接下载 gs-rest-service 示例。

示例只有三个源代码文件，RestServiceApplication.java 是主程序入口，注意 **@SpringBootApplication** 标注：

    package com.example.restservice;

    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;

    @SpringBootApplication
    public class RestServiceApplication {

        public static void main(String[] args) {
            SpringApplication.run(RestServiceApplication.class, args);
        }

    }

然后，是 GreetingController.java 定义的控制器 **@RestController** 标注了一个 Spring REST 控制器：

    package com.example.restservice;

    import java.util.concurrent.atomic.AtomicLong;

    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RequestParam;
    import org.springframework.web.bind.annotation.RestController;

    @RestController
    public class GreetingController {

        private static final String template = "Hello, %s!";
        private final AtomicLong counter = new AtomicLong();

        @GetMapping("/greeting")
        public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
            return new Greeting(counter.incrementAndGet(), String.format(template, name));
        }
    }

最后，是 Greeting.java 定义的实体，它存储 REST 资源数据：

    package com.example.restservice;

    public class Greeting {

        private final long id;
        private final String content;

        public Greeting(long id, String content) {
            this.id = id;
            this.content = content;
        }

        public long getId() {
            return id;
        }

        public String getContent() {
            return content;
        }
    }

从客户的角度来看，与 REST 资源进行交互需要做很多工作 —— 主要是单调乏味的样板文件。使用低级 HTTP 库，客户端需要创建一个客户端实例和一个请求对象，执行请求，解释响应，将响应映射到域对象，并处理过程中可能抛出的任何异常。不管发送什么 HTTP 请求，所有这些样板文件都会重复。

为了避免这样的样板代码，Spring 提供了 **RestTemplate**。正如 JDBCTemplate 处理 JDBC 糟糕的那部分一样，RestTemplate 使你不必为调用 REST 资源而做单调的工作。

RestTemplate 提供了 41 个与 REST 资源交互的方法。与其检查它提供的所有方法，不如只考虑 12 个惟一的操作，每个操作都有重载，以形成 41 个方法的完整集合。

表 7.1 RestTemplate 定义的 12 个唯一操作

|         方法         |                                       描述                                       |
|----------------------|----------------------------------------------------------------------------------|
| delete(...)          | 对指定 URL 上的资源执行 HTTP DELETE请求                                          |
| exchange(...)        | 对 URL 执行指定的 HTTP 方法，返回一个 ResponseEntity，其中包含从响应体映射的对象 |
| execute(...)         | 对 URL 执行指定的 HTTP 方法，返回一个映射到响应体的对象                          |
| getForEntity(...)    | 发送 HTTP GET 请求，返回一个 ResponseEntity，其中包含从响应体映射的对象          |
| getForObject(...)    | 发送 HTTP GET 请求，返回一个映射到响应体的对象                                   |
| headForHeaders(...)  | 发送 HTTP HEAD 请求，返回指定资源 URL 的 HTTP 请求头                             |
| optionsForAllow(...) | 发送 HTTP OPTIONS 请求，返回指定 URL 的 Allow 头信息                             |
| patchForObject(...)  | 发送 HTTP PATCH 请求，返回从响应主体映射的结果对象                               |
| postForEntity(...)   | 将数据 POST 到一个 URL，返回一个 ResponseEntity，其中包含从响应体映射而来的对象  |
| postForLocation(...) | 将数据 POST 到一个 URL，返回新创建资源的 URL                                     |
| postForObject(...)   | 将数据 POST 到一个 URL，返回从响应主体映射的对象                                 |
| put(...)             | 将资源数据 PUT 到指定的URL                                                       |

要使用 RestTemplate，需要创建一个实例，或通过声明 Bean 使用依赖注入机制：

    RestTemplate rest = new RestTemplate();

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    public Ingredient getIngredientById(String ingredientId) 
    {
        ResponseEntity<Ingredient> responseEntity =
            rest.getForEntity("http://localhost:8080/ingredients/{id}", Ingredient.class, ingredientId);
        
        log.info("Fetched time: " + responseEntity.getHeaders().getDate());
        
        return responseEntity.getBody();
    }

    public Ingredient createIngredient(Ingredient ingredient) {
        return rest.postForObject("http://localhost:8080/ingredients", ingredient, Ingredient.class);
    }

    public void updateIngredient(Ingredient ingredient) 
    {
        rest.put("http://localhost:8080/ingredients/{id}", ingredient, ingredient.getId());
    }

    public void deleteIngredient(Ingredient ingredient) 
    {
        rest.delete("http://localhost:8080/ingredients/{id}", ingredient.getId());
    }

    public URI createIngredient(Ingredient ingredient) {
        return rest.postForLocation("http://localhost:8080/ingredients", ingredient);
    }

注意，postForLocation() 的工作方式与 postForObject() 非常相似，只是它返回的是新创建资源的 URI，而不是资源对象本身。返回的 URI 派生自响应的 Location 头信息。如果同时需要位置和响应负载，可以调用 postForEntity()：

    public Ingredient createIngredient(Ingredient ingredient) 
    {
        ResponseEntity<Ingredient> responseEntity =
            rest.postForEntity("http://localhost:8080/ingredients", ingredient, Ingredient.class);
        
        log.info("New resource created at " + responseEntity.getHeaders().getLocation());
        
        return responseEntity.getBody();
    }


HATEOAS 是 Hypertext As The Engine Of Application State 的缩写，Richardson Maturity Model 中它是 REST 的最高级形态。

Richardson 提出的 REST 成熟度模型，该模型把 REST 服务按照成熟度划分成 4 个层次：

- Level 0： Web 服务只是使用 HTTP 作为传输方式，实际上只是远程方法调用（RPC）的一种具体形式。SOAP 和 XML-RPC 都属于此类。
- Level 1： Web 服务引入了资源的概念。每个资源有对应的标识符和表达。
- Level 2： Web 服务使用不同的 HTTP 方法来进行不同的操作，并且使用 HTTP 状态码来表示不同的结果。如 HTTP GET 方法来获取资源，HTTP DELETE 方法来删除资源。
- Level 3： Web 服务使用 HATEOAS。在资源的表达中包含了链接信息。客户端可以根据链接来发现可以执行的动作。

该模型将 REST 划作了由低到高四个等级，等级越高，RESTful 就越成熟。需要注意的是，熟透了东西不一定好，甚至可能烂了，所以，项目中对于 RESTful 层级的选择要灵活把控，现在最常用的就是 level 2 这个层次。

REST 使用标准的 HTTP 方法来操作资源，但仅仅因此就理解成带 CURD 的 Web 数据库架构就太过于简单了。这种说法忽略了一个核心概念: **超媒体即应用状态引擎** hypermedia as the engine of application state。超媒体是什么? 当你浏览 Web 网页时，从一个连接跳到一个页面，再从另一个连接跳到另外一个页面，就是利用了超媒体的概念: 把一个个把资源链接起来。

要达到这个目的，就要求在表述格式里边加入链接来引导客户端。在《RESTFul Web Services》一书中，作者把这种具有链接的特性成为连通性。

RESTful API 最好做到 Hypermedia 或 HATEOAS，即返回结果中提供链接，连向其他 API 方法，使得用户不查文档，也知道下一步应该做什么。比如，当用户向 api.github.com 的根目录发出请求，会得到这样一个文档。

    {
      "current_user_url": "https://api.github.com/user",
      "authorizations_url": "https://api.github.com/authorizations",
      // ...
    }

上面代码表示，文档中有网址提示，用户读取这个属性就知道下一步该调用什么 API 了。使用 rel 属性表示这个 API 与当前网址的关系，如 collection 关系，并给出该 collection 的网址，href 表示 API 的路径，title 表示 API 的标题，type 表示返回类型等等。

    {"link": {
      "rel":   "collection https://www.example.com/zoos",
      "href":  "https://api.example.com/zoos",
      "title": "List of zoos",
      "type":  "application/vnd.yourformat+json"
    }}


Traverson 附带了 Spring Data HATEOAS，作为在 Spring 应用程序中使用超媒体 API 的开箱即用解决方案。这个基于 Java 的库的灵感来自于同名的类似的 JavaScript 库（https://github.com/traverson）。

这里将 Traverson 指向 Taco Cloud 的基本 URL（在本地运行），这是需要给 Traverson 的唯一 URL。从这里开始，将通过链接关系名称来引导 API。还将指定 API 将生成带有 HAL 风格的超链接的 JSON 响应，以便 Traverson 知道如何解析传入的资源数据。与 RestTemplate 一样，可以选择在使用 Traverson 对象之前实例化它，或者将它声明为一个 bean，以便在需要的地方注入它。

有了 Traverson 对象，可以通过以下链接开始使用 API。例如，假设想检索所有 Ingredient 的列表。从第 6.3.1 节了解到，Ingredient 链接有一个链接到配料资源的 href 属性，需要点击这个链接：

    ParameterizedTypeReference<Resources<Ingredient>> ingredientType =
        new ParameterizedTypeReference<Resources<Ingredient>>() {};
    ​
    Resources<Ingredient> ingredientRes =
        traverson.follow("ingredients").toObject(ingredientType);

    Collection<Ingredient> ingredients = ingredientRes.getContent();
​
通过调用 Traverson 对象上的 **follow()** 方法，可以引导到链接关系名称为 ingredients 的资源，然后通过调用 **toObject()** 来提取该资源的内容。

toObject() 方法要求你告诉它要将数据读入哪种对象。考虑到需要将其作为 Resources<Ingredient> 对象读入，而 Java 类型擦除机制使让其为泛型提供类型信息变得困难，因此这可能有点棘手。但是创建一个 ParameterizedTypeReference 有助于实现这一点。





## Spring Validated Annotation

用于验证的注解：

    package tacos.web;
    ​
    import javax.validation.constraints.Max;
    import javax.validation.constraints.Min;
    import org.springframework.boot.context.properties.
    ConfigurationProperties;
    import org.springframework.stereotype.Component;
    import org.springframework.validation.annotation.Validated;
    import lombok.Data;
    ​
    @Component
    @ConfigurationProperties(prefix="taco.orders")
    @Data
    @Validated
    public class OrderProps {
        @Min(value=5, message="must be between 5 and 25")
        @Max(value=25, message="must be between 5 and 25")
        private int pageSize = 20;
    }
    //end::validated[]

尽管可以很容易地将 @Validated、@Min 和 @Max 注解应用到 OrderController（以及可以注入 OrderProps 的任何其他 bean），但这只会使 OrderController 更加混乱。


## Spring Mapping Annotation
- https://www.oschina.net/translate/using-the-spring-requestmapping-annotation

控制器标注 @Controller 和 @RestController 在不同的包中定义，标准控制器是 MVC 的一部分：

    import org.springframework.stereotype.Controller;

DispatcherServlet 截获请求后，就通过控制器上设置的映射信息调用响应方法。

前面的控制器中定义了一个 Greeting 方法，通过标注映射到 URL，要映射多个 URL 可通过数组传入到注解的 value 属性：

    @GetMapping("/greeting")
    @GetMapping({"/", "/hello"})
    @GetMapping(value={"/", "/hello"})

可以注意到，映射标注的命名和 HTTP 谓词是有关联的，以下是 Spring 标注包提供的常用映射标注：

    @DeleteMapping
    @GetMapping
    @Mapping
    @PatchMapping
    @PostMapping
    @PutMapping

@RequestMapping 标注了一个通用映射，URL 还可以通过 value 或 path 指定，还可以指定 HTTP 谓词、生成数据类型：

    @RequestMapping("/")
    @RequestMapping(value="/design")
    @RequestMapping(path="/design", produces="application/json")

    @RestController
    @RequestMapping("/home")
    public class IndexController {
        @RequestMapping(method = RequestMethod.GET)
        String get() {
            return "Hello from get";
        }
        @RequestMapping(method = RequestMethod.DELETE)
        String delete() {
            return "Hello from delete";
        }
        @RequestMapping(method = RequestMethod.POST)
        String post() {
            return "Hello from post";
        }
        @RequestMapping(method = RequestMethod.PUT)
        String put() {
            return "Hello from put";
        }
        @RequestMapping(method = RequestMethod.PATCH)
        String patch() {
            return "Hello from patch";
        }
    }

使用 @RequestMapping 注解的 **produces** 和 **consumes** 这两个属性来缩小请求映射类型的范围。

为了能用请求的媒体类型来产生对象, 你要用到 @RequestMapping 的 produces 元素再结合着 @ResponseBody 注解。

你也可以利用 @RequestMapping 的 comsumes 元素再结合着 **@RequestBody** 注解用请求的媒体类型来消费对象。

下面这段代码就用到的 @RequestMapping 的生产和消费对象元素：

    @RestController
    @RequestMapping("/home")
    public class IndexController {
        @RequestMapping(value = "/prod", produces = {
            "application/JSON"
        })
        @ResponseBody
        String getProduces() {
            return "Produces attribute";
        }

        @RequestMapping(value = "/cons", consumes = {
            "application/JSON",
            "application/XML"
        })
        String getConsumes() {
            return "Consumes attribute";
        }
    }

在这段代码中， getProduces() 处理方法会产生一个 JSON 响应， getConsumes() 处理方法可以同时处理请求中的 JSON 和 XML 内容。

@RequestMapping 标注控制器和控制器的方法，对应映射的 URL 是叠加的：

    @RestController
    @RequestMapping("/home")
    public class IndexController {
        @RequestMapping("/")
        String get() {
            // mapped to /home/
            return "Hello from get";
        }
        @RequestMapping("/index")
        String index() {
            // mapped to /home/index/
            return "Hello from index";
        }
    }

还可以响应指定的请求头：

    @RestController
    @RequestMapping("/home")
    public class IndexController {
        @RequestMapping(value = "/head", headers = {
            "content-type=text/plain",
            "content-type=text/html"
        }) String post() {
            return "Mapping applied along with headers";
        }
    }

这样，post() 方法就能同时接受 text/plain 还有 text/html 的请求了。

要将请求的参数绑定到控制器的响应方法，使用 **@RequestParam** 标注参数即可：

    @RestController
    public class GreetingController {

        private static final String template = "Hello, %s!";
        private final AtomicLong counter = new AtomicLong();

        @GetMapping("/greeting")
        public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
            return new Greeting(counter.incrementAndGet(), String.format(template, name));
        }
    }

这样，就可以将数据 POST/GET 等方式传送到控制器的方法中，可以使用 curl 等工具来测试：

    curl http://localhost:8080/greeting?name=HI
    curl -d "name=HI" http://localhost:8080/greeting

将 @RequestMapping 同 @PathVaraible 注解一起使用，能处理动态 URI，将 URI 传递的值作为控制器的响应方法的参数，也可以使用正则表达式来只处理可以匹配到正则表达式的动态 URI。

    @RestController
    @RequestMapping("/home")
    public class IndexController {
        @RequestMapping(value = "/fetch/{id}", method = RequestMethod.GET)
        String getDynamicUriValue(@PathVariable String id) {
            System.out.println("ID is " + id);
            return "Dynamic URI parameter fetched";
        }
        @RequestMapping(value = "/fetch/{id:[0-9]+}/{name}", method = RequestMethod.GET)
        String getDynamicUriValueRegex(@PathVariable("id") int id, @PathVariable("name") String name) {
            System.out.println("Name is " + name + " for " + id);
            return "Dynamic URI parameter fetched using regex";
        }
    }

在这段代码中，方法 getDynamicUriValue() 会响应 /home/fetch/10 请求，这里的 id 参数也会动态地被填充为 10 这个值。

不过，如果发起的请求 PATH 传递的数据不匹配的话，会抛出异常，因为这个 URI 的数据转型会失败，并且不能匹配正则表达式时也得不到正确数据。

@PathVariable 同 @RequestParam 的运行方式不同。你使用 @PathVariable 是为了从 URI 里取到查询参数值。换言之，你使用 @RequestParam 是为了从 URI 模板中获取参数值。
 
@RequestMapping 默认的处理方法，在控制器类中，你可以有一个默认的处理方法：

    @RestController
    @RequestMapping("/home")
    public class IndexController {
        @RequestMapping()
        String
        default () {
            return "This is a default method for the class";
        }
    }

在这段代码中，向 /home 发起的一个请求将会由 default() 来处理，因为注解并没有指定任何值。




# 🚩 Spring Cloud SOA
- [Spring Cloud 微服务架构体系及组件介绍](https://www.cnblogs.com/iUtopia/p/11492072.html)
- [Spring Cloud 微服务架构学习笔记与示例](https://www.cnblogs.com/edisonchou/p/java_spring_cloud_foundation_sample_list.html)
- [一个可供中小团队参考的微服务架构技术栈](http://www.infoq.com/cn/articles/china-microservice-technique)
- [SpringCloud gateway](https://www.cnblogs.com/crazymakercircle/p/11704077.html)
- [纯洁的微笑 Spring Cloud](http://www.ityouknow.com/spring-cloud)


Java Spring 框架的流行已经成为事实标准，越来越流行的 SOA - Services Oriented Architecture 分布式微服务框架受到越来越多的企业的欢迎。

之所以流行，自有其道理：

- **单一职责**：每一个服务模块都对应单一的业务实现
- **微粒度**：服务拆分的颗粒度很小
- **面向服务**：每个服务对外仅暴露服务接口 API 即可，不关心服务的技术实现，与技术、语言和平台无关
- **自治**：服务间互相独立、互不干扰
- **技术独立**：提供 RESTful 接口，面向服务即可
- **前后端分离**：后端提供 API 服务，前面使用 Vue、React、Angular 等等独立工程实现
- **数据库分离**：每个服务使用自己的数据源
- **部署独立**：每个服务都是独立的组件，可复用，可替换，降低服务间的耦合

第一代服务框架代表：Dubbo(Java)、Orleans(.Net) 等，特点：和语言绑定紧密。

第二代服务框架代表：Spring Cloud 等，正值当年，适合混合式开发，例如借助 Steeltoe OSS 可以让 ASP.Net Core 与 Spring Cloud 集成。对于中小型项目团队，Spring Cloud 仍然是快速首选。

第三代服务框架代表：Service Mesh 服务网格，例如 Service Fabric、lstio、Linkerd、Conduit 等，现状：在快速发展中，更新迭代比较快。


微服务主要架构简介：

- 分布式：不同的功能模块部署在不同的服务器上，减轻网站高并发带来的压力。
- 集群：多台服务器上部署相同应用构成一个集群，通过负载均衡共同向外提供服务。
- 微服务：微服务架构模式就是将 Web 应用拆分为一系列小的服务模块，这些模块可以独立地编译、部署，并通过各自暴露的 API 接口通讯，共同组成一个完整应用。

Dockers，Kubernetes 简称 K8S，这一类容器编排工具为分布式微服务带来巨大的部署优势，加速了微服务架构的进化。

微服务是一种结构理念，设计原则，提供理论指导。Spring Boot 提供专注于快速、方便集成的单个微服务个体，可以基于 Spring Boot 快速开发单个微服务。

Spring Cloud 基于 Spring Boot 实现的一套微服务治理工具包，专注于全局的服务治理框架。提供了一系列可配置的组件，如配置管理、服务发现、负载均衡、熔断器、断路器、智能路由、微代理、控制总线、全局锁、决策竞选、分布式会话和集群状态管理等。

尽管 Spring Cloud 带有 **Cloud** 这个单词，但它并不是云计算解决方案，而是在 Spring Boot 基础之上实现，用于快速构建分布式系统的通用模式的工具集。

其次，使用 Spring Cloud 开发的应用程序非常适合在 Docker、PaaS 上部署，比如自家的 Pivotal Cloud Foundry，所以又叫做云原生应用 Cloud Native Application，云原生可以简单地理解为面向云环境的软件架构。

Spring Cloud 作为第二代微服务的代表性框架，已经在国内众多大中小型的公司有实际应用案例。许多公司的业务线全部拥抱 Spring Cloud，部分公司选择部分拥抱 Spring Cloud。例如，拍拍贷资深架构师杨波老师就根据自己的实际经验以及对 Spring Cloud 的深入调研，并结合国内一线互联网大厂的开源项目应用实践结果，认为 Spring Cloud 技术栈中的有些组件离生产级开发尚有一定距离，最后提出了一个可供中小团队参考的微服务架构技术栈，又被称为中国特色的微服务架构技术栈 1.0：

![中国特色的微服务架构技术栈 1.0](https://images2018.cnblogs.com/blog/381412/201808/381412-20180823122622168-180774166.png)

主要包含 11 大核心组件，分别是：

- 核心支撑组件

    - **服务网关** Zuul，是一种怪兽，星际争霸中虫族里头也有 Zuul，Netflix 为网关起名 Zuul，寓意看门神兽；
    - **服务注册发现** Eureka+Ribbon
    - **服务配置中心** Apollo
    - **认证授权中心** Spring Security OAuth2
    - **服务框架** Spring MVC/Boot

- 监控反馈组件

    - 数据总线 Kafka，流式计算，对于数据时效价值意义重大，有些数据在生成后价值随时间而快速流逝，特别是金融行业；
    - 日志监控 ELK
    - 调用链监控 CAT
    - Metrics 监控 KairosDB
    - 健康检查和告警 ZMon
    - 限流熔断和流聚合 Hystrix/Turbine，Hystrix 是豪猪兽的意思，豪猪兽通过身上的刺保护自己，Netflix 为限流熔断组件起名 Hystrix，寓意 Hystrix 能够保护微服务调用。


参考《一个可供中小团队参考的微服务架构技术栈》。


Spring Cloud 组件架构：

- 所有请求都通过 API **网关**来访问内部服务；
- 网关接受请求后，从**注册中心**获取可用服务模块；
- 由 Ribbon 进行负载均衡后，分发到后台的具体实例；
- 各个服务模块之间通过 Feign 进行通信处理业务；
- Hystrix 负责处理服务超时熔断；
- Turbine 监控服务间的调用和熔断相关指标。
- 再来看一个具体实例上的 Spring Cloud 服务流程：

![Spring Cloud](https://pic4.zhimg.com/80/v2-38abd97121f5597c66df6f85d4851224_1440w.jpg)

Spring Cloud 主要组件简介：

- **Eureka** 服务注册中心
- **Zuul** API服务网关
- **Config** 分布式配置中心，支持本地仓库、SVN、Git、Jar包内配置等模式
- **Dashboard** Hystrix 仪表盘，监控集群模式和单点模式，其中集群模式需要收集器 **Turbine** 配合
- **Ribbon** 客户端负载均衡
- **Feign** 声明式服务调用
- **Bus** 消息总线

服务发现框架 Eureka 和 Ribbon 一起配合，一个注册服务，一个消费服务。为了优化 Ribbon，引入 **Hystrix** 防止整个微服务架构因为某个服务节点的问题导致崩溃，起到保险丝的作用。Dashboard，给 Hystrix 统计和展示用，而且监控服务节点的整体压力和健康情况。Turbine 集群收集器，服务于 Dashboard。

Zuul 加在整个微服务最前沿的防火墙和代理器，隐藏微服务结点 IP 端口信息，加强安全保护。

Config 为了解决所有微服务各自维护各自的配置，设置一个统一的配置中心，方便修改配置。

Bus 是因为 config 修改完配置后各个结点都要 refresh 才能生效实在太麻烦，所以交给 bus 来通知服务节点刷新配置的。


微服务的框架那么多比如：dubbo、Kubernetes，为什么就要使用 Spring Cloud 的呢？

- 产出于spring大家族，spring在企业级开发框架中无人能敌，来头很大，可以保证后续的更新、完善。比如dubbo现在就差不多死了
- 有Spring Boot 这个独立干将可以省很多事，大大小小的活Spring Boot都搞的挺不错。
- 作为一个微服务治理的大家伙，考虑的很全面，几乎服务治理的方方面面都考虑到了，方便开发开箱即用。
- Spring Cloud 活跃度很高，教程很丰富，遇到问题很容易找到解决方案
- 轻轻松松几行代码就完成了熔断、均衡负载、服务中心的各种平台功能

Spring Cloud 对于中小型互联网公司来说是一种福音，因为这类公司往往没有实力或者没有足够的资金投入去开发自己的分布式系统基础设施，使用 Spring Cloud 一站式解决方案能在从容应对业务发展的同时大大减少开发成本。同时，随着近几年微服务架构和 Docker 容器概念的火爆，也会让 Spring Cloud 在未来越来越“云”化的软件开发风格中立有一席之地，尤其是在目前五花八门的分布式解决方案中提供了标准化的、全站式的技术方案，意义可能会堪比当前 Servlet 规范的诞生，有效推进服务端软件系统技术水平的进步。


## Spring Cloud 模块介绍

Spring Cloud 是一系列框架的有序集合，提供服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。Spring并没有重复制造轮子，它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过 Spring Boot 风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。

微服务是可以独立部署、水平扩展、独立访问（或者有独立的数据库）的服务单元，springcloud就是这些微服务的大管家，采用了微服务这种架构之后，项目的数量会非常多，springcloud做为大管家需要管理好这些微服务，自然需要很多小弟来帮忙。


核心成员：

- Spring Cloud Netflix

    这可是个大boss，地位仅次于老大，老大各项服务依赖与它，与各种Netflix OSS组件集成，组成微服务的核心，它的小弟主要有 Eureka, Hystrix, Zuul, Archaius… 太多了

    - Netflix Eureka

    服务中心，云端服务发现，一个基于 REST 的服务，用于定位服务，以实现云端中间层服务发现和故障转移。这个可是springcloud最牛鼻的小弟，服务中心，任何小弟需要其它小弟支持什么都需要从这里来拿，同样的你有什么独门武功的都赶紧过报道，方便以后其它小弟来调用；它的好处是你不需要直接找各种什么小弟支持，只需要到服务中心来领取，也不需要知道提供支持的其它小弟在哪里，还是几个小弟来支持的，反正拿来用就行，服务中心来保证稳定性和质量。

    - Netflix Hystrix

    熔断器，容错管理工具，旨在通过熔断机制控制服务和第三方库的节点,从而对延迟和故障提供更强大的容错能力。比如突然某个小弟生病了，但是你还需要它的支持，然后调用之后它半天没有响应，你却不知道，一直在等等这个响应；有可能别的小弟也正在调用你的武功绝技，那么当请求多之后，就会发生严重的阻塞影响老大的整体计划。这个时候Hystrix就派上用场了，当Hystrix发现某个小弟不在状态不稳定立马马上让它下线，让其它小弟来顶上来，或者给你说不用等了这个小弟今天肯定不行，该干嘛赶紧干嘛去别在这排队了。

    - Netflix Zuul

    Zuul 是在云平台上提供动态路由,监控,弹性,安全等边缘服务的框架。Zuul 相当于是设备和 Netflix 流应用的 Web 网站后端所有请求的前门。当其它门派来找大哥办事的时候一定要先经过zuul,看下有没有带刀子什么的给拦截回去，或者是需要找那个小弟的直接给带过去。

    - Netflix Archaius

    配置管理API，包含一系列配置管理API，提供动态类型化属性、线程安全配置操作、轮询框架、回调机制等功能。可以实现动态获取配置， 原理是每隔60s（默认，可配置）从配置源读取一次内容，这样修改了配置文件后不需要重启服务就可以使修改后的内容生效，前提使用archaius的API来读取。

- Spring Cloud Config

    俗称的配置中心，配置管理工具包，让你可以把配置放到远程服务器，集中化管理集群配置，目前支持本地存储、Git 以及 Subversion。就是以后大家武器、枪火什么的东西都集中放到一起，别随便自己带，方便以后统一管理、升级装备。

- Spring Cloud Bus

    事件、消息总线，用于在集群（例如，配置变化事件）中传播状态变化，可与 Spring Cloud Config 联合实现热部署。相当于水浒传中日行八百里的神行太保戴宗，确保各个小弟之间消息保持畅通。

- Spring Cloud for Cloud Foundry

    Cloud Foundry 是 VMware 推出的业界第一个开源 PaaS 云平台，它支持多种框架、语言、运行时环境、云平台及应用服务，使开发人员能够在几秒钟内进行应用程序的部署和扩展，无需担心任何基础架构的问题。

    其实就是与 Cloud Foundry 进行集成的一套解决方案，抱了 Cloud Foundry 的大腿。

- Spring Cloud Cluster

    Spring Cloud Cluster 将取代 Spring Integration。提供在分布式系统中的集群所需要的基础功能支持，如：选举、集群的状态一致性、全局锁、tokens等常见状态模式的抽象和实现。

    如果把不同的帮派组织成统一的整体，Spring Cloud Cluster已经帮你提供了很多方便组织成统一的工具。

- Spring Cloud Consul

    Consul 是一个支持多数据中心分布式高可用的服务发现和配置共享的服务软件，由 HashiCorp 公司用 Go 语言开发, 基于 Mozilla Public License 2.0 的协议进行开源. Consul 支持健康检查并允许 HTTP 和 DNS 协议调用 API 存储键值对。

- Spring Cloud Consul 封装了 Consul 操作，consul 是一个服务发现与配置工具，与 Docker 容器可以无缝集成。


其它小弟：

- Spring Cloud Security

    基于 Spring Security 的安全工具包，为你的应用程序添加安全控制。这个小弟很牛鼻专门负责整个帮派的安全问题，设置不同的门派访问特定的资源，不能把秘籍葵花宝典泄漏了。

- Spring Cloud Sleuth

    日志收集工具包，封装了 Dapper 和 log-based 追踪以及 Zipkin 和 HTrace 操作，为 SpringCloud 应用实现了一种分布式追踪解决方案。

- Spring Cloud Data Flow

    Data flow 是一个用于开发和执行大范围数据处理其模式包括ETL，批量运算和持续运算的统一编程模型和托管服务。

    对于在现代运行环境中可组合的微服务程序来说，Spring Cloud data flow 是一个原生云可编配的服务。使用 Spring Cloud data flow 开发者可以为像数据抽取，实时分析，和数据导入/导出这种常见用例创建和编配数据通道 data pipelines。

    Spring Cloud data flow 是基于原生云对 spring XD的重新设计，该项目目标是简化大数据应用的开发。Spring XD 的流处理和批处理模块的重构分别是基于 Spring Boot的stream 和 task/batch 的微服务程序。这些程序现在都是自动部署单元而且他们原生的支持像 Cloud Foundry、Apache YARN、Apache Mesos和Kubernetes 等现代运行环境。

    Spring Cloud data flow 为基于微服务的分布式流处理和批处理数据通道提供了一系列模型和最佳实践。

- Spring Cloud Stream

    Spring Cloud Stream 是创建消息驱动微服务应用的框架。Spring Cloud Stream 基于 Spring Boot 创建，用来建立单独的／工业级 Spring 应用，使用 Spring integration 提供与消息代理之间的连接。数据流操作开发包，封装了与 Redis、Rabbit、Kafka 等发送接收消息。

    一个业务会牵扯到多个任务，任务之间是通过事件触发的，这就是Spring Cloud stream要干的事了

- Spring Cloud Task

    Spring Cloud Task 主要解决短命微服务的任务管理，任务调度的工作，比如说某些定时任务晚上就跑一次，或者某项数据分析临时就跑几次。

- Spring Cloud Zookeeper

    ZooKeeper 是一个分布式的，开放源码的分布式应用程序协调服务，是 Google Chubby 一个开源的实现，是 Hadoop 和 Hbase 的重要组件。它是一个为分布式应用提供一致性服务的软件，提供的功能包括：配置维护、域名服务、分布式同步、组服务等。ZooKeeper 的目标就是封装好复杂易出错的关键服务，将简单易用的接口和性能高效、功能稳定的系统提供给用户。

    操作 Zookeeper 的工具包，用于使用 zookeeper 方式的服务发现和配置管理，抱了 Zookeeper 的大腿。

- Spring Cloud Connectors

    - Spring Cloud Connectors 简化了连接到服务的过程和从云平台获取操作的过程，有很强的扩展性，可以利用 Spring Cloud Connectors 来构建你自己的云平台。

    便于云端应用程序在各种 PaaS 平台连接到后端，如：数据库和消息代理服务。

- Spring Cloud Starters

    Spring Boot 式的启动项目，为 Spring Cloud 提供开箱即用的依赖管理。

- Spring Cloud CLI

    基于 Spring Boot CLI，可以让你以命令行方式快速建立云组件。


## Spring Cloud Config
- [Spring Cloud Config 实现配置中心](https://cloud.tencent.com/developer/article/1474037)
- [Spring Cloud Config 分布式配置中心使用教程](https://www.cnblogs.com/shamo89/p/8016908.html)
- [Spring Cloud Config(统一配置中心服务端和客户端)](https://www.jianshu.com/p/4a34f791a655)
- [Spring Cloud Config Github 地址](https://github.com/spring-cloud/spring-cloud-config)
- [Spring Cloud Config 官方指引](https://spring.io/projects/spring-cloud-config)


Spring Cloud Config 分布式系统外部化配置服务，提供服务器和客户端支持。

Spring Cloud Config 可以用来动态获取 Git、SVN、本地的配置文件的一种工具，可以在所有环境中管理应用程序的外部属性，可以与任何语言运行的任何应用程序一起使用。

当应用程序通过部署从开发到测试并进入生产时，可以管理这些环境之间的配置，并确保应用程序具有迁移时需要运行的所有内容。服务器存储后端的默认实现使用 git，可以轻松支持配置环境的标签版本，以及可用于管理内容的各种工具。添加替代实现并使用 Spring 配置插入很容易。

Spring Cloud Config Server 基本功能：

- 用于外部配置的 HTTP，基于资源的API（名称 - 值对或等效的YAML内容）
- 加密和解密属性值（对称或非对称）
- 使用可轻松嵌入 Spring Boot 应用程序 @EnableConfigServer

Spring Cloud Config Client 功能（适用于Spring应用程序）：

- 绑定到 Config Server 和 Environment 使用远程属性源初始化 Spring
- 加密和解密属性值（对称或非对称）



# 🚩 Spring Cloud Gateway 网关
- [Spring Cloud Gateway](https://www.cnblogs.com/mrhelloworld/p/gateway1.html)
- [实现 API 网关 一个最简单的 Zuul 应用](https://waylau.gitbooks.io/spring-cloud-tutorial/content/docs/api-gateway/api-gateway-in-action.html)





# 🚩 Spring JMS/AMQP RabbitMQ 消息队列
- [Spring JMS/AMQP 异步消息简介](https://potoyang.gitbook.io/spring-in-action-v4/untitled-10/untitled-3)
- [Apache RocketMQ](https://rocketmq.apache.org/)
- [RocketMQ 实战之快速入门](https://www.jianshu.com/p/824066d70da8)


# 🚩 RPC - Remote Procedure Call
- [Spring 远程调用概览](https://potoyang.gitbook.io/spring-in-action-v4/untitled-9/untitled-5)

作为一个 Java 开发者，我们有多种可以使用的远程调用技术，包括：

- Java 最初的远程调用技术 RMI - Remote Method Invocation；
- Caucho 的 Hessian 和 Burlap；
- Spring 基于 HTTP 的远程服务；
- 使用 JAX-RPC和 JAX-WS 的 Web Service。

不管我们选择哪种远程调用技术，Spring 为使用这几种不同的技术访问和创建远程服务都提供了广泛的支持。在本章，我们将学习 Spring 如何简化和完善这些远程调用服务。但是首先，让我们先简要了解一下远程调用是如何在 Spring 中工作的。

正如我之前所述，Spring 支持多种不同的 RPC 模型，包括 RMI、 Caucho 的 Hessian 和 Burlap 以及 Spring 自带的 HTTP invoker。表 15.1 概述了每一个 RPC 模型，并简要讨论了它们所适用的不同场景。

|      RPC 模型     |                                            适用场景                                            |
|-------------------|------------------------------------------------------------------------------------------------|
| 远程方法调用 RMI  | 网络防火墙等限制时，访问/发布基于 Java 的服务                                                  |
| Hessian 或 Burlap | 网络限制时，通过 HTTP 访问/发布基于 Java 的服务。Hessian 是二进制协议，而Burlap 基于 XML       |
| HTTP invoker      | 网络限制，并希望使用基于 XML 或专有的序列化机制实现 Java 序列化时，访问/发布基于 Spring 的服务 |
| JAX-RPC 和 JAX-WS | 访问/发布平台独立的、基于 SOAP 的 Web 服务                                                     |



# 🚩 DDD - Domain Driven Development
- [代码精进之路 - 领域驱动架构 DDD 中的模型到底是什么？](https://www.zhihu.com/question/25089273)

在理解领域模型之前，我们先思考一下软件开发的本质是什么。从本质上来说，软件开发过程就是问题空间到解决方案空间的一个映射转化。

在问题空间中，我们主要是找出某个业务面临的挑战及其相关需求场景用例分析；而在解决方案空间中，则通过具体的技术工具手段来进行设计实现。就软件系统来说，“问题空间”就是系统要解决的“领域问题”。因此，也可以简单理解为一个领域就对应一个问题空间，是一个特定范围边界内的业务需求的总和。

“领域模型”就是“解决方案空间”，是针对特定领域里的关键事物及其关系的可视化表现，是为了准确定义需要解决问题而构造的抽象模型，是业务功能场景在软件系统里的映射转化，其目标是为软件系统构建统一的认知。

例如：

- 请假系统解决的是人力工时的问题，属于人力资源领域，对口的是 HR 部门；
- 费用报销系统解决的是员工和公司之间的财务问题，属于财务领域，对口的是财务部门；
- 电商平台解决的是网上购物问题，属于电商领域。

可以看出，每个软件系统本质上都解决了特定的问题，属于某一个特定领域，实现了同样的核心业务功能来解决该领域中核心的业务需求。

总结一下，领域模型在软件开发中的主要起到如下作用。

- 帮助分析理解复杂业务领域问题，描述业务中涉及的实体及其相互之间的关系，是需求分析的产物，与问题域相关。
- 是需求分析人员与用户交流的有力工具，是彼此交流的语言。
- 分析如何满足系统功能性需求，指导项目后续的系统设计。

Eric Evans 在 2003 年出版的《领域驱动设计：软件核心复杂性应对之道》 Domain-Driven Design: Tackling Complexity in the Heart of Software 一书中提出具有划时代意义的重要概念，DDD 是指通过统一语言、业务抽象、领域划分和领域建模等一系列手段，来控制软件复杂度的方法论。其革命性在于领域驱动设计是面向对象分析的方法论，它可以利用面向对象的特性（封装、多态）有效地化解复杂性，而传统 J2EE 或 Spring + Hibernate 等事务性编程模型只关心数据。这些数据对象除了简单的 setter/getter 方法外，不包含任何业务逻辑，业务逻辑都是以过程式的代码写在 Service 中。这种方式极易上手，但随着业务的发展，系统也很容易变得混乱复杂。领域驱动设计关心的是业务中的领域划分（战略设计）和领域建模（战术设计），其开发过程不再以数据模型为起点，而是以领域模型为出发点。领域模型对应的是业务实体，在程序中主要表现为类、聚合根和值对象，它更加关注业务语义的显性化表达，而不是数据的存储和数据之间的关系。

DDD 架构研发过程：

- 需求分析；
- 领域分析；
- 领域建模；
- 核心业务逻辑；
- 技术实现细节；

DDD 的优势

- 统一语言

    统一语言 Ubiquitous Language 的主要思想是让应用能和业务相匹配，这是通过在业务与代码中的技术之间采用共同的语言达成的。业务语言起源于公司的业务侧，业务侧拥有需要实现的概念。业务语言中的术语由公司的的业务侧和技术侧通过协商来定义（意味着业务侧也不能总是选到最好的命名），目标是创造可以被业务、技术和代码自身无歧义使用的共同术语，即统一语言。代码、类、方法、属性和模块的命名必须和统一语言相匹配，必要的时候需要对代码进行重构！

    试想，在 PRD 文档、设计文档、代码以及团队日常交流中，如果有一套领域术语是统一无歧义的，是否会极大地提升沟通和工作效率？在日常工作中，因为概念理解不一致，或者语言表达上的问题，导致沟通效率低，甚至发生误解的情况实在太多了。所以，明确概念、形成统一语言至关重要。

- 面向对象

    DDD 的核心是领域模型，这一方法论可以通俗地理解为先找到业务中的领域模型，以领域模型为中心，驱动项目开发。领域模型的设计精髓在于面向对象分析、对事物的抽象能力，一个领域驱动架构师必然是一个面向对象分析的大师。

    DDD 鼓励我们接触到需求后第一步就是考虑领域模型，而不是将其切割成数据和行为，然后用数据库实现数据，用服务实现行为，最后造成需求的首尾分离。DDD 会让你首先考虑业务语言，而不是数据。DDD 强调业务抽象和面向对象编程，而不是过程式业务逻辑实现。重点不同，导致编程世界观不同。


- 业务语义显性化

    统一语言也好，面向对象也好，最终的目都是为代码的可读性和可维护性服务。统一语言使得我们的核心领域概念可以无损地在代码中呈现，从而提升代码的可理解性。例如，在银行转账的案例中，按照事务脚本的写法来写“透支策略”的业务概念，其含义完全被淹没在代码逻辑中没有突显出来。但是，如果我们使用策略模式将其抽象出来，让业务语义得到显性化的表达，代码的可读性就会提升很多。

    面向对象也是让代码尽量体现领域实体和实体之间的关系原貌，所以目的也是业务语义被显性化地表达，显性化的结果是代码更容易被理解和维护，殊途同归，一切都是为了控制复杂度。在软件的世界里，任何的方法论如果最终不能落在“减少代码复杂度”这个焦点上，那么都是有待商榷的。


- 分离业务逻辑和技术细节

    代码复杂度是由业务复杂度和技术复杂度共同组成的。实践 DDD 还有一个好处，是让我们有机会分离核心业务逻辑和技术细节，让两个维度的复杂度有机会被解开和分治。如图3所示，核心业务逻辑是整个应用的核心，最好只是简单 Java 类（Plan Old Java Object，POJO）。也就是说，核心业务逻辑对技术细节没有任何依赖，依赖都是由外向内的，即使有由内向外的依赖，也应该通过依赖倒置来反转依赖的方向。通过这样的划分，Entities 只要安安心心地处理业务逻辑就好，业务逻辑越复杂，这样划分带来的好处越明显。


为什么说数据库、UI 和框架都是技术细节呢？

- 数据库：业务逻辑不应该受限于存储方式，也就是不论你是使用关系型数据库还是 NoSQL，都不应该影响业务逻辑的实现。数据本身很重要，但数据库技术仅仅是一个实现细节。

- UI：UI 只是一种 I/O 设备的呈现，Web、WAP 和 Wireless 都是不同的 I/O，我们的核心业务逻辑应该与如何呈现解耦，以及针对不同的端可以使用不同的适配器（Adaptor）去做适配。

- 框架：不要让框架侵入我们的核心业务代码，以 Spring 为例，最好不要在业务对象中到处写 @autowired 注解。业务对象不应该依赖框架。

这么说来，这些技术细节是不重要了吗？不是的，技术细节是一个系统的必要组成部分，也非常重要。技术细节和核心业务逻辑是两个维度的重要性，如果把软件比喻成一个人，那么核心业务逻辑是大脑，技术细节是身体，二者都很重要，分开处理主要是为了降低复杂度。

毫不夸张地说，我们的软件系统就是对现实世界的真实模拟：

| 现实世界 | 软件世界 |                              功能                              |
|----------|----------|----------------------------------------------------------------|
| 事物     | OOP对象  | 该事物在现实世界中被赋予什么职责，在软件世界中就被赋予什么职责 |
| 特性     | 属性     | 描述对象的数据                                                 |
| 行为     | 函数     | 面向过程的编程                                                 |
| 关系     | 关联     | 接口、继承、组合                                               |

这正是面向对象编程的核心思想，也是 DDD 中寻找领域实体的核心思想。

假如现在你需要设计一个中介系统，一个典型的 User Story 是“小明去找工作，中介让他留个电话，有工作机会就会通知他”。我们要如何寻找该业务中的关键领域实体呢？一个简单的方式就是找名词，分析这些名词，不难得到以下可能成为实体的候选项。

- ● 小明：一个求职者。
- ● 电话：求职者的相关信息，可以是一个属性。
- ● 中介：可以拆解为中介公司和中介公司的员工两个概念。
- ● 工作机会：对于中介系统来说，工作机会应该是最关键的实体之一。
- ● 通知：作为名词是一个实体，但是作为一个动词是在暗示我们可以使用 Notify。

是的，对于这个简单的 User Story 这样分析就可以了。当然，随着更多的 Story 被加入，我们会补充更多的实体，比如增加了“中介费是按照小明第一个月工资的30%收取”，那么就可能要引入“订单”和“支付”等实体。以上就是我在实际工作中寻找领域实体的大致过程，从方法论的角度来说，也叫作“用例分析法”。

再深入一步，什么人需要查看记录呢？用户 A 需要查询，管理人员 B 也需要查看，经理老板也需要查看，用不同的报表呈现。而使用的数据名词概念就必须统一，要不然有的只记了电话，有的只记了名字，有的什么都没记，就乱套了。而这里的报表的设计表现的就是从用户角度出发的**心智模型** Mental Model。

要用一个数字系统来支持记录的管理，必须形成对应的**数据模型** Data Model，这个过程称之为数据建模 Data Modeling。建模本质上是一种抽象，抽象就是归类，其目的是减轻认知的负担，避免重复的思考和工作，提升人的计算能力。所以，通用是建模的基本要求，接下来我们还需要复用建好的模型，复用始终是软件的核心。

DDD 把模型分成四层：

- UI 层，负责界面展示。
- Application Layer 应用层负责业务流程。
- Domain Layer 领域层负责领域逻辑。
- Infrastructure Layer 基建层负责提供基建。

分类的依据是：越往上，预期变动越频繁；越往下，预期变动越少。

对于程序员来说，UI 和基建应该很容易分清，一个只管展示，一个只管提供持续储存、网络传输等等基础设施，都没有“业务”的参与。容易混淆的是应用层和领域层，在这两层中存在的，就是应用模型和领域模型。


**聚合根** Aggregate Root 是 DDD 中的一个概念，是一种更大范围的封装，会把一组有相同生命周期、在业务上不可分割的实体和值对象放在一起，只有根实体可以对外暴露引用，这也是一种内聚性的表现。确定聚合边界要满足固定规则 Invariant，是指在数据变化时必须保持的一致性规则，具体规则如下：

- ● 根实体具有全局标识，最终负责检查规定规则。
- ● 聚合内的实体具有本地标识，这些标识在 Aggregate 内部才是唯一的。
- ● 外部对象不能引用除根 Entity 之外的任何内部对象。
- ● 只有 Aggregate 的根 Entity 才能直接通过数据库查询获取，其他对象必须通过遍历关联来发现。
- ● Aggegate 内部的对象可以保持对其他 Aggregate 根的引用。
- ● Aggregate 边界内的任何对象在修改时，整个 Aggregate 的所有固定规则都必须满足。

以银行转账的例子来说明，账号 Account 是客户信息 CustomerInfo Entity 和值对象 Address 的聚合根，交易 Tansaction 是流水 Journal 的聚合根，流水是因为交易才产生的，具有相同的生命周期。

**领域服务**，有些领域中的动作是一些动词，看上去并不属于任何对象。它们代表了领域中的一个重要的行为，所以不能忽略它们或者简单地把它们合并到某个实体或者值对象中。当这样的行为从领域中被识别出来时，推荐的实践方式是将它声明成一个服务。这样的对象不再拥有内置的状态，其作用仅仅是为领域提供相应的功能。Service 往往是以一个活动来命名，而不是Entity来命名。

例如在银行转账的例子中，转账 transfer 这个行为是一个非常重要的领域概念，但是它发生在两个账号之间，归属于账号 Entity 并不合适，因为一个账号 Entity 没有必要去关联它需要转账的账号 Entity。在这种情况下，使用 MoneyTransferDomainService 就比较合适了。识别领域服务，主要看它是否满足以下 3 个特征。

- 服务执行的操作代表了一个领域概念，这个领域概念无法自然地隶属于一个实体或者值对象。
- 被执行的操作涉及领域中的其他对象。
- 操作是无状态的。

**领域事件** Domain Event 是在一个特定领域由一个用户动作触发的，是发生在过去的行为产生的事件，而这个事件是系统中的其他部分或者关联系统感兴趣的。为什么领域事件如此重要？因为在分布式环境下，很少有业务系统是单体的（Monolithic），消息作为分布式系统间耦合度最低、最健壮、最容易扩展的一种通信机制，是我们实现分布式系统互通的重要手段。关于领域事件，我们需要注意两点，分别是事件命名和事件内容。

事件命名事件是表示发生在过去的事情，所以在命名上推荐使用 Domain Name + 动词的过去式 + Event，这样可以更准确地表达业务语义。

例如，在银行转账的例子中，对于转账成功和失败我们都需要发出事件通知，可以定义两个领域事件如下。

- MoneyTransferedEvent：表示转账成功发出的事件。
- MoneyTransferFailedEvent：表示转账失败发出的事件。

事件内容事件内容在计算机术语中叫作 payload，有以下两种形式。

- 自恰 Enrichment：就是在事件的 payload 中尽量多放数据，这样 consumer 不需要回查就能处理消息，也就是自恰地处理消息。
- 回查 Query-Back：这种方式是只在 payload 放置 id 属性，然后 consumer 通过回调的形式获取更多数据。这种形式会加重系统的负载，可能会引起性能问题。

**边界上下文** Bounded Context，领域实体的意义是有上下文的，比如同样是 Apple，在水果店和苹果手机专卖店中表达出的含义就完全不一样。边界上下文的作用是限定模型的应用范围，在同一个上下文中，要保证模型在逻辑上统一，而不用考虑它是不是适用于边界之外的情况。

那么不同上下文之间的业务实体要如何实现交互呢？就像关系数据库和对象之间需要 ORM 一样，不同上下文之间的实体也需要映射。DDD 这种机制叫作**上下文映射** Context Mapping，我们可以使用**防腐层** Anti-Corruption 来完成映射的工作。在我们开发 CRM 系统中，商家的客户大部分是来自于 ICBU网站的会员，虽然二者有很多属性都是一样的，但我们还是有必要引入防腐层来做上下文映射，主要有以下两个原因。

- 虽然属性大部分一样，但二者的作用和行为在各自上下文中是不一样的。
- 解耦影响，加入了防腐层之后，网站的会员变化就不会影响到CRM系统了。



最后，总结起来，就是：

- DDD 把业务分成 UI、应用、领域、基建四层，其核心是高度提纯、通用、少变化的领域层，是谓“领域驱动”；
- 领域层中包含领域模型，捕捉领域逻辑，暴露出接口用于操作领域模型，这些接口提供的操作可以确保领域是自洽的；
- 领域模型既是业务描述，又是代码实现的结构设计，二者的结合点在于公开出来的界面、接口。



# 🚩 Dubbo 分布式服务框架
- https://www.jianshu.com/p/3090d63e9cb3
- http://www.ruanyifeng.com/blog/2011/09/restful.html
- https://spring.io/guides/gs/rest-service/
- [Kafka 入门](https://baijiahao.baidu.com/s?id=1651919282506404758&wfr=spider&for=pc)
- [Kafka简明教程](https://zhuanlan.zhihu.com/p/37405836)
- [如何部署 CDN 网络](https://cloud.tencent.com/developer/article/1358553)
- [如何自己架设部署CDN？](https://www.zhihu.com/question/21771529)
- [CDN技术详解](https://www.cnblogs.com/losbyday/p/5843960.html)

Dubbo 是阿里巴巴开源的基于 Java 的高性能 RPC - Remote Procedure Call 分布式服务框架 SOA - Service-Oriented Architecture，致力于提供高性能和透明化的 RPC 远程服务调用方案，以及 SOA 服务治理方案。

Dubbo 是阿里开源项目，曾经断更过一段时间，现在再恢复活力，国内很多互联网公司都在用，已经经过很多线上考验。内部使用了 Netty、Zookeeper，保证了高性能高可用性。

Dubbo 可以将核心业务抽取出来，作为独立的服务，逐渐形成稳定的服务中心，可用于提高业务复用。灵活扩展，使前端应用能更快速的响应多变的市场需求。

Dubbo 和 Spring Cloud 有什么区别？

首先，通信方式不同：Dubbo 使用的是 RPC 通信，而 Spring Cloud 使用的是 HTTP RESTFul。

其次，组成不一样：

- dubbo 的服务注册中心为 Zookeerper，服务监控中心为 dubbo-monitor，无消息总线，服务跟踪、批量任务等组件；
- spring-cloud 服务注册中心为 spring-cloud netflix enruka，服务监控中心为 spring-boot - admin，有消息总线，数据流、服务跟踪、批量任务等组件；

Dubbo 不需要 Web 容器，如果硬要用 Web 容器，只会增加复杂性，也浪费资源。

Dubbo 内置了三种服务容器：

- Spring Container
- Jetty Container
- Log4j Container

Dubbo 的服务容器只是一个简单的 Main 方法，并加载一个简单的 Spring 容器，用于暴露服务。


# 🚩 Maven 项目管理
- https://www.runoob.com/maven/maven-tutorial.html
- [Downloading Apache Maven 3.6.3](http://maven.apache.org/download.cgi)
- Introduction to the Dependency Mechanism https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html

Maven 翻译为"专家"、"内行"，是 Apache 下的一个纯 Java 开发的开源项目。基于项目对象模型（缩写：POM）概念，Maven利用一个中央信息片断能管理一个项目的构建、报告和文档等步骤。

Maven 是一个项目管理工具，可以对 Java 项目进行构建、依赖管理，自动下载项目依赖包。

Maven 也可被用于构建和管理各种项目，例如 C#，Ruby，Scala 和其他语言编写的项目。Maven 曾是 Jakarta 项目的子项目，现为由 Apache 软件基金会主持的独立 Apache 项目。

Maven 能够帮助开发者完成以下工作：

- 构建
- 文档生成
- 报告
- 依赖
- SCMs
- 发布
- 分发
- 邮件列表
- 约定配置

Maven 特点

- 项目设置遵循统一的规则。
- 任意工程中共享。
- 依赖管理包括自动更新。
- 一个庞大且不断增长的库。
- 可扩展，能够轻松编写 Java 或脚本语言的插件。
- 只需很少或不需要额外配置即可即时访问新功能。
- 基于模型的构建 − Maven能够将任意数量的项目构建到预定义的输出类型中，如 JAR，WAR 或基于项目元数据的分发，而不需要在大多数情况下执行任何脚本。
- 项目信息的一致性站点 − 使用与构建过程相同的元数据，Maven 能够生成一个网站或PDF，包括您要添加的任何文档，并添加到关于项目开发状态的标准报告中。
- 发布管理和发布单独的输出 − Maven 将不需要额外的配置，就可以与源代码管理系统（如 Subversion 或 Git）集成，并可以基于某个标签管理项目的发布。它也可以将其发布到分发位置供其他项目使用。Maven 能够发布单独的输出，如 JAR，包含其他依赖和文档的归档，或者作为源代码发布。
- 向后兼容性 − 您可以很轻松的从旧版本 Maven 的多个模块移植到 Maven 3 中。
- 子项目使用父项目依赖时，正常情况子项目应该继承父项目依赖，无需使用版本号，
- 并行构建 − 编译的速度能普遍提高20 - 50 %。
- 更好的错误报告 − Maven 改进了错误报告，它为您提供了 Maven wiki 页面的链接，您可以点击链接查看错误的完整描述。

Maven 提倡使用一个共同的标准目录结构，Maven 使用约定优于配置的原则，大家尽可能的遵守以下这样的目录结构：

|                目录                |                                  目的                                  |
|------------------------------------|------------------------------------------------------------------------|
| ${basedir}                         | 存放 pom.xml 和所有的子目录                                              |
| ${basedir}/src/main/java           | 项目的 Java 源代码                                                       |
| ${basedir}/src/main/resources      | 项目的资源，比如说 property 文件，springmvc.xml                        |
| ${basedir}/src/test/java           | 项目的测试类，比如说 Junit 代码                                        |
| ${basedir}/src/test/resources      | 测试用的资源                                                           |
| ${basedir}/src/main/webapp/WEB-INF | web 应用文件目录，web 项目的信息，比如存放 web.xml、本地图片、jsp 页面 |
| ${basedir}/target                  | 打包输出目录                                                           |
| ${basedir}/target/classes          | 编译输出目录                                                           |
| ${basedir}/target/test-classes     | 测试编译输出目录                                                       |
| Test.java                          | Maven 只会自动运行符合该命名规则的测试类                                |
| ~/.m2/repository                   | Maven 默认的本地仓库目录位置                                            |


配置单个源代码和资源目录

    <build>
        <!--默认源代码目录 -->
        <sourceDirectory>src</sourceDirectory>
        <!-- ${project.build.directory}就是我们通常看到的target目录 -->
        <outputDirectory>${project.build.directory}/classes</outputDirectory>
        <!--默认测试源代码目录 -->
        <testSourceDirectory>test</testSourceDirectory>
        <testOutputDirectory>${project.build.directory}/test-classes</testOutputDirectory>
        <!--默认资源目录 -->
        <resources>
            <resource>
                <directory>src</directory>
                <excludes>
                    <exclude>**/*.java</exclude>
                </excludes>
            </resource>
        </resources>
        <!--默认测试资源目录 -->
        <testResources>
            <testResource>
                <directory>test</directory>
                <excludes>
                    <exclude>**/*.java</exclude>
                </excludes>
            </testResource>
        </testResources>
    </build>

配置多个源代码目录，以配置源代码路径 src/junit/java 和 src/junit/resources 为例子：

    <build>
       <pluginManagement>
            <plugins>
                 <plugin>
                      <groupId>org.eclipse.m2e</groupId>
                      <artifactId>lifecycle-mapping</artifactId>
                      <version>1.0.0</version>
                      <configuration>
                           <lifecycleMappingMetadata>
                                <pluginExecutions>
                                     <pluginExecution>
                                          <pluginExecutionFilter>
                                               <groupId>org.codehaus.mojo</groupId>
                                               <artifactId>build-helper-maven-plugin</artifactId>
                                               <versionRange>[1.0,)</versionRange>
                                               <goals>
                                                    <goal>add-source</goal>
                                               </goals>
                                          </pluginExecutionFilter>
                                          <action>
                                               <ignore/>
                                          </action>
                                     </pluginExecution>
                                </pluginExecutions>
                           </lifecycleMappingMetadata>
                      </configuration>
                 </plugin>
            </plugins>
       </pluginManagement>
       <plugins>
            <!-- 指定多个源代码目录、多个资源文件目录 -->
            <plugin>
                 <groupId>org.codehaus.mojo</groupId>
                 <artifactId>build-helper-maven-plugin</artifactId>
                 <version>1.8</version>
                 <executions>
                      <execution>
                           <id>add-source</id>
                           <phase>generate-sources</phase>
                           <goals>
                                <goal>add-source</goal>
                           </goals>
                           <configuration>
                                <sources>
                                     <source>src/junit/java</source>
                                     <source>src/junit/resources</source>
                                </sources>
                           </configuration>
                      </execution>
                 </executions>
            </plugin>
       </plugins>
    </build>


## installation

安装及配置：

    # wget http://mirrors.hust.edu.cn/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
    # tar -xvf  apache-maven-3.3.9-bin.tar.gz
    # sudo mv -f apache-maven-3.3.9 /usr/local/

添加环境变量 MAVEN_HOME 并编辑系统变量 Path 添加 %MAVEN_HOME%\bin。

编辑 /etc/profile 文件 sudo vim /etc/profile，在文件末尾添加如下代码：

    export MAVEN_HOME=/usr/local/apache-maven-3.3.9
    export PATH=${PATH}:${MAVEN_HOME}/bin

保存文件，并运行如下命令使环境变量生效：

    # source /etc/profile

在控制台输入如下命令，如果能看到 Maven 相关版本信息，则说明 Maven 已经安装成功：

    # mvn -v

POM - Project Object Model 项目对象模型是 Maven 工程的基本工作单元，是一个 XML 配置文件，包含了项目的基本信息，用于描述项目如何构建，声明项目依赖，等等。

执行任务或目标时，Maven 会在当前目录中查找 POM。它读取 POM，获取所需的配置信息，然后执行目标。

POM 中可以指定以下配置：

- 项目依赖
- 插件
- 执行目标
- 项目构建 profile
- 项目版本
- 项目开发者列表
- 相关邮件列表信息

在创建 POM 之前，我们首先需要描述项目基本信息节点：

- 模型版本 **modelVersion**
- 公司或者组织唯一标志，即包名 **groupId**
- 项目的唯一 ID **artifactId**
- 版本号 **version**

所有 POM 文件都需要 project 顶层元素和三个必需字段：groupId，artifactId，version。

所有的 POM 都继承自一个父 POM（无论是否显式定义了这个父 POM）。父 POM 包含了一些可以被继承的默认设置。因此，当 Maven 发现需要下载 POM 中的 依赖时，它会到 Super POM 中配置的默认仓库去下载。

添加完插件和部分配置属性，我们可以看到添加的插件有：

- maven-compiler-plugin 编译
- maven-jar-plugin 生成 jar 包
- maven-assembly-plugin 自定义打包
- maven-source-plugin 打包源码
- maven-release-plugin 版本发布

Maven 是基于微核心插件化思想设计的，功能全部体现在插件上。还添加的属性有：

- project.build.sourceEncoding 编码
- project.reporting.outputEncoding 编码
- java.version JDK版本
- maven.test.skip 跳过测试

Profile 可以用来区分环境，添加的Profile有：

- test：表示测试环境
- prod：表示生产环境

到这差不多 pom 的配置就完成了，除了以后添加依赖。

依赖的库如何配置，可以到 Maven 网站查询，如添加 Apache Commons Codec 依赖：

    <!-- https://mvnrepository.com/artifact/commons-codec/commons-codec -->
    <dependency>
        <groupId>commons-codec</groupId>
        <artifactId>commons-codec</artifactId>
        <version>1.14</version>
    </dependency>

    <!-- https://mvnrepository.com/artifact/org.apache.directory.studio/org.apache.commons.codec -->
    <dependency>
        <groupId>org.apache.directory.studio</groupId>
        <artifactId>org.apache.commons.codec</artifactId>
        <version>1.8</version>
    </dependency>


## Maven CLI
- Exec Maven Plugin https://www.mojohaus.org/exec-maven-plugin/

Maven 构建生命周期定义了一个项目构建跟发布的过程。

一个典型的 Maven 构建（build）生命周期是由以下几个阶段的序列组成的：

|      阶段     |   处理   |                           描述                           |
|---------------|----------|----------------------------------------------------------|
| 验证 validate | 验证项目 | 验证项目是否正确且所有必须信息是可用的                   |
| 编译 compile  | 执行编译 | 源代码编译在此阶段完成                                   |
| 测试 Test     | 测试     | 使用适当的单元测试框架（例如JUnit）运行测试。           |
| 包装 package  | 打包     | 创建JAR/WAR包如在 pom.xml 中定义提及的包                 |
| 检查 verify   | 检查     | 对集成测试的结果进行检查，以保证质量达标                 |
| 安装 install  | 安装     | 安装打包的项目到本地仓库，以供其他项目使用               |
| 部署 deploy   | 部署     | 拷贝最终的工程包到远程仓库中，以共享给其他开发人员和工程 |

对应的 Maven 命令使用：

- 创建 hello world 项目，webapp 或 quickstart

        mvn archetype:generate -DgroupId=com.kittycoder -DartifactId=webapp -DarchetypeArtifactId=maven-archetype-webapp -DinteractiveMode=false

        mvn archetype:generate -DgroupId=com.kittycoder -DartifactId=demo -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeCatalog=local -DinteractiveMode=false

- **mvn compile** 编译命令生成 target 文件夹，里面就是编译后的内容。
- **mvn clean** 清除命令主要是清除编译后产生的 target 文件夹。
- **mvn package** 打包命令会将项目默认打成 jar 包，当然也可以打成 war 包。
- **mvn install** 安装命令可以把项目打成 jar，放到本地仓库。

可以使用 exec-maven-plugin 来直接运行 Maven 工程，会自动下载插件：

    mvn exec:java -Dexec.mainClass="com.example.Main" [-Dexec.args="argument1"] ...

编译后，在工程目录下执行命令，运行测试：

    >java -cp target/classes/ com.kittycoder.App

如果是 webapp，会生成 war 文件，可以使用 Tomcat 的管理页面部署，WAR file to deploy。或者将 war 文件复制到你的 web 服务器的 web 应用目录下，Tomcat 默认 webapps 目录，然后重启 web 服务器。

Maven 使用 **archetype** 架构原型来创建自定义的项目结构，形成 Maven 项目模板。 什么是 archetype？ 架构原型是一个 Maven 插件，准确说是一个项目模板，它的任务是根据模板创建一个项目结构，支持列表如下。使用 quickstart 就可以开始一个基本工程模板，plugin 架构原型创建一个简单的 Maven Java 插件应用程序。

- maven-archetype-archetype
- maven-archetype-j2ee
- maven-archetype-plugin
- maven-archetype-plugin
- maven-archetype-portlet
- maven-archetype-profiles
- maven-archetype-quickstart
- maven-archetype-site
- maven-archetype-site-simple
- maven-archetype-webapp

执行以下命令建立工程及查询支持列表，Maven 下载好文件后，会提示使用什么类型的模板:

    >mvn archetype:generate
    [INFO] Scanning for projects...
    Downloading...
    Choose archetype:
    1: ... maven-archetype-archetype (An archetype which contains a sample archetype.)
    2: ... maven-archetype-j2ee-simple (An archetype which contains a simplifed sample J2EE application.)
    3: ... maven-archetype-plugin (An archetype which contains a sample Maven plugin.)
    4: ... maven-archetype-plugin-site (An archetype which contains a sample Maven plugin site.
          This archetype can be layered upon an existing Maven plugin project.)
    5: ... maven-archetype-portlet (An archetype which contains a sample JSR-268 Portlet.)
    6: ... maven-archetype-profiles ()
    7: ... maven-archetype-quickstart (An archetype which contains a sample Maven project.)
    8: ... maven-archetype-site (An archetype which contains a sample Maven site which demonstrates
          some of the supported document types like APT, XDoc, and FML and demonstrates how
          to i18n your site. This archetype can be layered upon an existing Maven project.)
    9: ... maven-archetype-site-simple (An archetype which contains a sample Maven site.)
    10: ... maven-archetype-webapp (An archetype which contains a sample Maven Webapp project.)
    Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains):

选好原型 Maven 还会询问项目细节，按要求输入项目细节。

- groupId 指定一个唯一的命名空间；
- artifactId 项目名，会创建相应的子目录；


## maven-site 文档

修改 pom.xml，添加以下配置（如果没有的话）：

    <project>
      ...
    <build>
    <pluginManagement>
        <plugins>
            <plugin>
              <groupId>org.apache.maven.plugins</groupId>
              <artifactId>maven-site-plugin</artifactId>
              <version>3.3</version>
            </plugin>
            <plugin>
              <groupId>org.apache.maven.plugins</groupId>
              <artifactId>maven-project-info-reports-plugin</artifactId>
              <version>2.7</version>
            </plugin>
        </plugins>
    </pluginManagement>
    </build>
     ...
    </project>

不然运行 mvn site 命令时出现 java.lang.NoClassDefFoundError: org/apache/maven/doxia/siterenderer/DocumentContent 的问题，这是由于 maven-site-plugin 版本过低，升级到 3.3+ 即可。

在项目文件夹执行以下 mvn 命令生成文档：

    > mvn site



## MANIFEST.MF
- https://docs.oracle.com/javase/7/docs/technotes/guides/jar/jar.html

要使用 Maven 编译出的 jar 带主清单属性，可以被执行，需要在 POM 中添加插件 build -> plugins -> plugin 指定主程序入口类：

    <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <version>3.0.2</version>
    <configuration>
        <archive>
            <manifest>
                <addClasspath>true</addClasspath>
                <mainClass>com.kittycoder.App</mainClass>
            </manifest>
        </archive>
    </configuration>
    </plugin>

打包后，就会添加 META-INF/MANIFEST.MF 清单文件：

    Manifest-Version: 1.0
    Built-By: OCEAN
    Created-By: Apache Maven 3.6.3
    Build-Jdk: 1.8.0_191
    Main-Class: com.kittycoder.App

这样就可以执行 jar 包的主类：

    java -jar demo.jar


## warehouse

在 Maven 的术语中，仓库是项目中依赖的第三方库文件所在的位置。

在 Maven 中，任何一个依赖、插件或者项目构建的输出，都可以称之为构件。

Maven 仓库能帮助我们管理构件，主要是 JAR，它就是放置所有 JAR 文件（WAR，ZIP，POM等等）的地方。

Maven 仓库有三种类型：

- 本地 local
- 中央 central
- 远程 remote

默认情况下，不管Linux还是 Windows，每个用户在自己的用户目录下都有一个路径名为 .m2/respository/ 的仓库目录。

Maven 本地仓库默认被创建在 **${user.home}/.m2/repository** 目录下。要修改默认位置，在 %M2_HOME%\conf 目录中的 Maven 的 settings.xml 文件中定义另一个路径。

    <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 
       http://maven.apache.org/xsd/settings-1.0.0.xsd">
          <localRepository>C:/MyLocalRepository</localRepository>
    </settings>

Maven 仓库默认在国外， 国内使用难免很慢，我们可以更换为阿里云的仓库。

第一步:修改 maven 根目录下的 conf 文件夹中的 setting.xml 文件，在 mirrors 节点上，添加内容如下：

    <mirrors>
        <mirror>
          <id>alimaven</id>
          <name>aliyun maven</name>
          <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
          <mirrorOf>central</mirrorOf>
        </mirror>
    </mirrors>


第二步: pom.xml文件里添加：

    <repositories>  
        <repository>  
            <id>alimaven</id>  
            <name>aliyun maven</name>  
            <url>http://maven.aliyun.com/nexus/content/groups/public/</url>  
            <releases>  
                <enabled>true</enabled>  
            </releases>  
            <snapshots>  
                <enabled>false</enabled>  
            </snapshots>  
        </repository>  
    </repositories>



## Maven & Spring Boot
- https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#getting-started-maven-installation
- https://docs.spring.io/spring-boot/docs/2.3.4.BUILD-SNAPSHOT/maven-plugin/reference/html/#getting-started
- http://www.javaboy.org/2019/0413/spring-boot-parent.html
- [Spring Boot 工程在线创建](https://start.spring.io/)

以 Spring 开发为例，首先添加相关父 pom 配置，不建议使用 spring-boot-starter-parent 而使用 spring-boot-dependencies，我们只需要继承父 pom 的依赖，不需要其他配置，项目的掌控权要牢牢握在自己手里。然后添加 spring-boot-starter-web 依赖。

    <?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>

        <parent>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>2.0.4.RELEASE</version>
        </parent>

        <groupId>com.ajn</groupId>
        <artifactId>spring-boot</artifactId>
        <version>1.0.0-SNAPSHOT</version>

        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-web</artifactId>
            </dependency>
        </dependencies>

    </project>

当我们创建一个 Spring Boot 工程时，可以继承自一个 spring-boot-starter-parent ，也可以不继承自它，我们先来看第一种情况。

先来看 parent 的基本功能有哪些？

- 定义了 Java 编译版本为 1.8 。
- 使用 UTF-8 格式编码。
- 继承自 spring-boot-dependencies，这个里边定义了依赖的版本，也正是因为继承了这个依赖，所以我们在写依赖时才不需要写版本号。
- 执行打包操作的配置。
- 自动化的资源过滤。
- 自动化的插件配置。
- 针对 application.properties 和 application.yml 的资源过滤，包括通过 profile 定义的不同环境的配置文件，例如 application-dev.properties 和 application-dev.yml。

请注意，由于application.properties和application.yml文件接受Spring样式占位符 $ {...} ，因此 Maven 过滤更改为使用 @ .. @ 占位符，当然开发者可以通过设置名为 resource.delimiter 的Maven 属性来覆盖 @ .. @ 占位符。

Spring Boot 项目要继承自公司内部的 parent ，这个时候该怎么办呢？

一个简单的办法就是我们自行定义 dependencyManagement 节点，然后在里边定义好版本号，再接下来在引用依赖时也就不用写版本号了，像下面这样：

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>2.1.4.RELEASE</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

这样写之后，依赖的版本号问题虽然解决了，但是关于打包的插件、编译的 JDK 版本、文件的编码格式等等这些配置，在没有 parent 的时候，这些统统要自己去配置。

如果想要让 spring boot 打包时跳过这些测试步骤，可以编辑 pom.xml 文件，在 properties 节点中增加 skipTests 设置即可。

    <properties>
        <java.version>1.8</java.version>
        <skipTests>true</skipTests>
    </properties>


## Maven Exclusions 依赖排除
- https://www.cnblogs.com/quanxiaoha/p/12752265.html

Maven 依赖排除（Exclusions）

因为 Maven 构建项目具有依赖可传递的特性，当你在 pom.xml 添加某个依赖时，可能也会引入不需要的依赖到你的项目中，这将会会可能引起如下问题：

- Jar包版本冲突，如老版本Jar包缺失某个方法；
- JDK 版本不兼容；
- 老版本存在安全漏洞；
- ...

为了解决这些问题，Maven 容许你通过 exclusions 来排除你不想要的依赖。这样，在你构建项目时，这些被排除依赖，将不会被打包进你的项目中。

PS: exclusions 需要在具体的依赖上显示指定，针对特定的 groupId 和 artifactId。

    <project>
      ...
      <dependencies>
        <dependency>
          <groupId>sample.ProjectA</groupId>
          <artifactId>Project-A</artifactId>
          <version>1.0</version>
          <scope>compile</scope>
          <exclusions>
            <exclusion>  <!-- 在这里声明，将项目 A 中的项目 B 依赖排除 -->
              <groupId>sample.ProjectB</groupId>
              <artifactId>Project-B</artifactId>
            </exclusion>
          </exclusions> 
        </dependency>
      </dependencies>
    </project>


Maven 可选依赖 （Optional）

Maven 的可选依赖其实很好理解，我举个例子，你就明白了！假设你想做一个类似 Mybatis 的持久化框架，那你就得支持丰富的数据库吧，如：MySql、 Oracle不同版本、 PostgreSQL 等，这样才会有更多的用户使用你的框架。这样的话，你就不得不在你开发的持久化框架里引入种类繁多的数据库驱动包。

这个时候，某个用户使用了你的框架，而他仅需要使用数据库 MySQL，因为 Maven 构建项目具有依赖可传递的特性，导致了项目打包时，引入了很多不必要的数据库驱动，那压根不是他需要的~


当某个依赖的 optional 被定义为 true 后，该依赖便只能在本项目中传递，不会被传递到引用该依赖的父项目中，父项目需要主动引用才行。

可选依赖项可以帮助项目节省空间与内存，亦可防止将许可协议的依赖构建到 WAR, EAR, fat jar 等包中。

    <project>
      ...
      <dependencies>
        <!-- 将 mysql 驱动包依赖设置为可选 -->
        <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <version>5.1.45</version>
          <optional>true</optional> <!-- optional 的值有 true 和 false 可选 -->
            </dependency>
      </dependencies>
    </project>



# 🚩 Servlet 编译与手动配置
- JSP 简介 - http://www.runoob.com/jsp/jsp-tutorial.html
- JSP 标准标签库（JSTL）- http://www.runoob.com/jsp/jsp-jstl.html
- servlet的url-pattern匹配规则 - https://www.cnblogs.com/canger/p/6084846.html
- HttpServlet - http://tomcat.apache.org/tomcat-7.0-doc/servletapi/javax/servlet/http/HttpServlet.html
- ServletRequest - http://tomcat.apache.org/tomcat-7.0-doc/servletapi/javax/servlet/ServletRequest.html
- HttpServletResponse - http://tomcat.apache.org/tomcat-7.0-doc/servletapi/javax/servlet/http/HttpServletResponse.html
- Apache Tomcat 8 Documentation - https://tomcat.apache.org/tomcat-8.5-doc/
- SpringMVC-DispatcherServlet工作流程及web.xml配置 - https://www.cnblogs.com/yw0219/p/6084128.html


## servlet配置

手动编写 Servlet 配置，注意 servlet-class 要配置到包名，否则会因找不到类实现引发 Error instantiating servlet class。

    <servlet>  
        <servlet-name>HelloServlet</servlet-name>  
        <servlet-class>com.coding.HelloServlet</servlet-class>  
    </servlet>  
    <servlet-mapping>  
        <servlet-name>HelloServlet</servlet-name>  
        <url-pattern>/hello</url-pattern>  
    </servlet-mapping>  

写好配置后，再实现 HelloServlet，然后通过 URL 地址访问 http://localhost:8080/hello。servlet 容器中的 url-pattern 匹配规则既不是简单的通配，也不是正则表达式，而是特定的规则。Servlet 2.5开始，一个servlet可以使用多个url-pattern规则，每个 url-pattern 标签代表1个匹配规则，而且当有一个servlet匹配成功以后，就不会去理会剩下的 servlet 了。一般有四种匹配规则，前面这种就是精确匹配。

以斜杠字符开头，并以 /* 结尾的字符串用于路径匹配，例如下面的匹配规则可以使用更多的url地址匹配中，只要是 hello 开头的都中。

    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/hello/*</url-pattern>
    </servlet-mapping>

另一种是扩展名匹配规则

    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>*.jsp</url-pattern>
        <url-pattern>*.action</url-pattern>
    </servlet-mapping>

最后一种是缺省匹配，当所有匹配都不适合时就只能是缺省的规则了

    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

在所有规则匹配中，先进行精确匹配，没有匹配再进行路径匹配，先最长路径匹配，再最短路径匹配。然后进行扩展名匹配，最后才是缺省匹配。匹配方法只有三种，要么是路径匹配，要么是扩展名匹配，要么是精确匹配，三种匹配方法不能进行组合，不要想当然使用通配符或正则规则。


## 编译

编译时要求环境变量中 CLASSPATH 中包含 servlet-api.jar 路径，路径要包括文件全名，可以在 Tomcat 中找。servlet 和 JSP 不是 J2SE 的一部分，而是 j2EE 的一部分，因此必须告知编译器 servlet 的位置。编码后的文件存放在 WEB-INF/classes 目录下，包信息对应目录结构。

编写 Servlet 实现代码保存到 HelloServlet.java，使用 javac -d . HelloServlet.java 命令进行编译。如果代码保存在 classes 目录，那么编译后会直接生成包的目录结构，WEB-INF/classes 目录下就这样配置好了。编译命令可以还可以指定源代码目录选项，依赖包通过 -classpath 选项指定。

  -d <目录>                    指定放置生成的类文件的位置
  -s <目录>                    指定放置生成的源文件的位置
  -cp "a.jar;b.jar"            指定依赖的jar包，选项全称 -classpath

    javac -cp "E:\coding\java\apache-tomcat-8.5.37\webapps\ROOT\WEB-INF\lib\fastjson-1.2.54.jar;E:\coding\java\apache-tomcat-8.5.37\lib\servlet-api.jar" -d . HelloServlet.java

## 打包 jar 文件
- Packaging Programs in JAR Files - https://docs.oracle.com/javase/tutorial/deployment/jar/index.html
- Java Archive (JAR) Files - https://docs.oracle.com/javase/8/docs/technotes/guides/jar/index.html

在 META-INF 目录下编写一个 MANIFEST.mf，要注意每个冒号后面的英文空格：

    Manifest-Version: 1.0  
    Main-Class: com.whty.hello.Hello  
    Class-Path: 

然后进入工程META-INF目录，使用jar命令进行打包，然后通过 Java 命令执行

    jar -cvfm hello.jar MANIFEST
    java -jar hello.jar

## 接口实现

Servlet 中定义了相应 doGet doPost doPut doDelete 方法来响应 HTTP 协议的 POST/GET/HEAD/DELETE/OPTION 等动作。其中以 doGet和doPost最常用，get 方式通过 URL 传递参数，post 方则是使用数据流传递的参数，也可以传递文件二进位数据，传递的数据量也大。Servlet 执行哪个方法进行响应是在 service 方法中判断的，这个方法有两种重载方式，一般不建议在子类中覆盖它。除了以上常用的响应方法，Servlet 还有 doOptions doTrace 两个响应方法，和 service 方法一样，不建议在子类进行覆盖。

    protected void  doDelete (HttpServletRequest req, HttpServletResponse resp)
    protected void     doGet (HttpServletRequest req, HttpServletResponse resp)
    protected void    doHead (HttpServletRequest req, HttpServletResponse resp)
    protected void doOptions (HttpServletRequest req, HttpServletResponse resp)
    protected void    doPost (HttpServletRequest req, HttpServletResponse resp)
    protected void     doPut (HttpServletRequest req, HttpServletResponse resp)
    protected void   doTrace (HttpServletRequest req, HttpServletResponse resp)
    protected void   service (HttpServletRequest req, HttpServletResponse resp)
    public    void   service (ServletRequest req, ServletResponse res)

service 有两个重载，public 这个先执行，然后是 protected 这个，然后根据 Request 实例解释到的动作getMethod()选择执行 doGet 或 doPost等。这里以反射的方式，来实现单个 Servlet 响应多个URL地址请求。照前面内容配置一个路径映射，以使以下URL可以匹配到：

    http://localhost:8080/hello/demo/index.jsp?a=b

路径成功映射后，通过 getPathInfo() 返回的内容就不包含匹配部分，即返回 /demo/index.php。使用 String.split() 做正则分割，再取出ation，经过反射匹配到相应的方法上。注意，代码没有实现 doGet 或 doPost 之类方法，所以也覆盖了父类的 service() 方以禁止默认行为。

    package com.coding;

    import java.io.IOException;
    import javax.servlet.ServletException;
    import javax.servlet.annotation.WebServlet;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    import javax.servlet.ServletRequest;
    import javax.servlet.ServletResponse;
    import java.lang.reflect.*;

    @WebServlet("/HelloServlet")
    public class HelloServlet extends HttpServlet {

        public HelloServlet() {
            super();
        }

        protected void service (HttpServletRequest req, HttpServletResponse rsp) throws ServletException, IOException {
            // super.service(req, rsp);
            String[] path = req.getPathInfo().split("/"); // req.getRequestURI();
            rsp.setCharacterEncoding("UTF-8"); 
            rsp.setContentType("text/html; charset=utf-8"); 
            if( path.length<2 ) return;
            String action = path[1];
            try {
                rsp.getWriter().write("<h1>Try Action:"+action+"</h1>");
                Method method = getClass().getDeclaredMethod(action, HttpServletRequest.class, HttpServletResponse.class);
                method.invoke(this, req, rsp);
            } catch (Exception e) {
                String view = "<h1 style='background: #f44;text-align:center;padding:10%;margin:0 auto; width:50%;'>No Action:"+action+"</h1>";
                rsp.getWriter().write(view);
            }
        }

        protected void demo(HttpServletRequest req, HttpServletResponse rsp) throws IOException{
            String view = "<h1 style='background: #eee;text-align:center;padding:10%;margin:0 auto; width:50%;'>Action:demo</h1>";
            rsp.getWriter().write(view);
        }

    }

可以参考 Spring MVC 框架，它使用 DispatcherServlet 来分发 web 请求，其请求和响应工作流程；

- 在 SpringMVC 中，请求的第一站是 DispatcherServlet，充当前端控制器角色；
- 查询处理器映射 handler mapping 并根据请求所携带的 URL 信息决定分发给指定控制器 controller；
- 控制器做两件事：一是将数据打包，二是定义逻辑视图名，然后返回给 DispatcherServlet；
- DispatcherServlet 通过视图解析器 view resolver 来将逻辑视图名匹配为一个特定的视图实现，它可能是也可能不是 JSP；
- 交付数据模型，以视图形式响应给客户，整个请求流程完成。


# 🚩 apache commons 类库
- http://commons.apache.org/
- http://jakarta.apache.org/commons/index.html

Java 世界有成千上万开源的框架，有成功的，也有不那么成功的，有声名显赫的，也有默默无闻的。在我看来，成功而默默无闻的那些框架值得我们格外的尊敬和关注，Jakarta Commons 就是这样的一个框架。如果你至少参与了一个中型规模的 Java 项目，那么我想有超过一大半的机会你都接触和使用到了 Jakarta Commons，不管你自己有没有察觉。

除了 Apache Jakarta 其他许多开源框架之外，不少所谓的商业框架其实内部有些模块是借用 Commons 的，甚至有一些完全就是对 Commons 的类进行了简单的封装。如果真的没有接触过也不要紧，当你看到它时，你自然会被它的简单而强大所吸引。

要提高 Java 编程水平，一条可以走的路就是学习优秀的开源框架。这又要分两个层面：应用层面和源码层面。从应用来说，开源的框架大都可以给你带来生产力和/或代码质量的大幅提升；从源码来说，Java 开源框架，尤其是那些大型的优秀的框架，其源码对广大 Java 爱好者来说都是一笔巨大的财富，你可以从中学到许多课本上学不到的东西：编码习惯、代码组织、注释、文档、如何用 Java 解决实际问题、特定问题的算法，等等。而这些对于我们的作为软件开发者的实际工作而言，相当有意义。

熟悉 Jakarta Commons 的朋友可能会觉得现在是不是有点过时，因为有很多功能在 J2SE 5.0 中已经包含了。鉴于 Jakarta 在一定程度上反映了一线 Java 开发人员的实际需求，而目前 SDK 5.0 已经采纳了其中许多特性，我们当然也有理由相信未来的 Java 版本还会继续参照 Jakarta Commons 的内容。有这么一套开发源码、免费使用、商业友好的优秀 API 作为 Java 自带 API 的补充，何乐而不用？

Apache Commons 是一个非常有用的工具包，解决各种实际的通用问题，下面是一个简述表：

- **BeanUtils** Commons-BeanUtils 提供对 Java 反射和自省 API 的包装
- **Betwixt** Betwixt提供将 JavaBean 映射至 XML 文档，以及相反映射的服务.
- **Chain** Chain 提供实现组织复杂的处理流程的“责任链模式”.
- **CLI** CLI 提供针对命令行参数，选项，选项组，强制选项等的简单API.
- **Codec** Codec 包含一些通用的编码解码算法。包括一些语音编码器， Hex, Base64, 以及 URL encoder.
- **Collections** Commons-Collections 提供一个类包来扩展和增加标准的 Java Collection框架
- **Configuration** Commons-Configuration 工具对各种各式的配置和参考文件提供读取帮助.
- **Daemon** 一种 unix-daemon-like java 代码的替代机制
- **DBCP** Commons-DBCP 提供数据库连接池服务
- **DbUtils** DbUtils 是一个 JDBC helper 类库，完成数据库任务的简单的资源清除代码.
- **Digester** Commons-Digester 是一个 XML-Java对象的映射工具，用于解析 XML配置文件.
- **Discovery** Commons-Discovery 提供工具来定位资源 (包括类) ，通过使用各种模式来映射服务/引用名称和资源名称。.
- **EL** Commons-EL 提供在JSP2.0规范中定义的EL表达式的解释器.
- **FileUpload** FileUpload 使得在你可以在应用和Servlet中容易的加入强大和高性能的文件上传能力
- **HttpClient** Commons-HttpClient 提供了可以工作于HTTP协议客户端的一个框架.
- **IO** IO 是一个 I/O 工具集
- **Jelly** Jelly是一个基于 XML 的脚本和处理引擎。Jelly 借鉴了 JSP 定指标签，Velocity, Cocoon和Xdoclet中的脚本引擎的许多优点。Jelly 可以用在命令行， Ant 或者 Servlet之中。
- **Jexl** Jexl是一个表达式语言，通过借鉴来自于Velocity的经验扩展了JSTL定义的表达式语言。.
- **JXPath** Commons-JXPath 提供了使用Xpath语法操纵符合Java类命名规范的 JavaBeans的工具。也支持 maps, DOM 和其他对象模型。.
- **Lang** Commons-Lang 提供了许多许多通用的工具类集，提供了一些java.lang中类的扩展功能
- **Latka** Commons-Latka 是一个HTTP 功能测试包，用于自动化的QA,验收和衰减测试.
- **Launcher** Launcher 组件是一个交叉平台的Java 应用载入器。Commons-launcher 消除了需要批处理或者Shell脚本来载入Java 类。.原始的 Java 类来自于Jakarta Tomcat 4.0 项目
- **Logging** Commons-Logging 是一个各种 logging API实现的包裹类.
- **Math** Math 是一个轻量的，自包含的数学和统计组件，解决了许多非常通用但没有及时出现在Java标准语言中的实践问题.
- **Modeler** Commons-Modeler 提供了建模兼容JMX规范的Mbean的机制.
- **Net** Net 是一个网络工具集，基于 NetComponents 代码，包括 FTP 客户端等等。
- **Pool** Commons-Pool 提供了通用对象池接口，一个用于创建模块化对象池的工具包，以及通常的对象池实现.
- **Primitives** Commons-Primitives提供了一个更小，更快和更易使用的对Java基本类型的支持。当前主要是针对基本类型的 collection。.
- **Validator** The commons-validator提供了一个简单的，可扩展的框架来在一个XML文件中定义校验器 (校验方法)和校验规则。支持校验规则的和错误消息的国际化。


Maven 或 Gradle 项目中使用 Codec 库。

Maven

    <!-- https://mvnrepository.com/artifact/org.apache.directory.studio/org.apache.commons.codec -->
    <dependency>
        <groupId>org.apache.directory.studio</groupId>
        <artifactId>org.apache.commons.codec</artifactId>
        <version>1.8</version>
    </dependency>

Gradle

    // https://mvnrepository.com/artifact/org.apache.directory.studio/org.apache.commons.codec
    compile group: 'org.apache.directory.studio', name: 'org.apache.commons.codec', version: '1.8'


# 🚩 Tomcat 账户配置

使用 Tomcat 的管理工具，需要在 tomcat-users.xml 配置文件设置账户信息，及添加账户角色配置，使用使用功能就添加什么角色：

    <role rolename="admin"/>  
    <role rolename="admin-gui"/>  
    <role rolename="manager"/>  
    <role rolename="manager-gui"/>  
    <role rolename="manager-jmx"/>  
    <role rolename="manager-script"/>  
    <role rolename="manager-status"/>
    <user username="root" password="rootuser" roles="admin-gui,admin,manager-gui,manager,manager-script,manager-jmx,manager-status"/> 


    <!-- <role rolename="tomcat"/> -->
    <!-- <user username="root" password="rootuser" roles="tomcat"/> -->



# 🚩 tomcat 部署 web 应用的 4 种方法

在Tomcat中有四种部署Web应用的方式，简要的概括分别是：

- 利用 Tomcat 自动部署
- 利用控制台进行部署
- 增加自定义的 Web 部署文件 %Tomcat_Home%\conf\Catalina\localhost\AppName.xml
- 手动修改服务器配置文件来部署 web 应用 %Tomcat_Home%\conf\server.xml 

典型 web 应用目录结构包含 \AppName\WEB-INF，可以使用前两种方式进行简单化的部署。

第一种方式：利用 Tomcat 自动部署，只要将一个 Web 应用的 WebContent 级的 AppName 直接扔进 %Tomcat_Home%\webapps 文件夹下，系统会把该 web 应用直接部署到 Tomcat 中。

第二种方式：利用 Tomcat 控制台进行部署，进入的 manager 控制台的 deploy 区域——在 Context path 中键入"XXX"(可任意取名)——在 WAR or Directory URL：键入 Web 应用的目录，—点击 deploy 按钮完成部署。然后在 %Tomcat_Home%\webapps 路径下将会自动出现一个同名的 XXX 文件夹，其内容即是正在部署的内容，只是名字是指定的 XXX 而已。

以上说明利用控制台进行部署的实质仍然是利用Tomcat的自动部署。


第三种方式：增加自定义的Web部署文件，这种部署方式稍微复杂一点，我们需要在 %Tomcat_Home%\conf\catalina\localhost 下新建一个XML文件，webapp.xml，该文件就是部署Web应用的配置文件，配置内容如下：

    <Context path="/XXX" reloadable="true" docBase="D:\WebApp\AppName" workDir="D:\WebApp\work"/>  

配置workDir表示将该Web应用部署后置于的工作目录，Web应用中JSP转译的Servlet都可在其中找到。如果使用的Eclipse作为IDE，一般可人为设置在WebApp的work目录下。如果自定义web部署文件XXX.xml中未指明workdir，则web应用将默认部署在 %Tomcat_Home%\work\Catalina\localhost\ 文件夹下，并为应用创建一个同名目录。Context path 即指定web应用的虚拟路径名。docBase指定要部署的Web应用的源路径。

可以使用安装有Tomcat插件eclipse自动创建部署文件来部署Web应用而不必再手动建立该文件，方法如下： 

1. 打开Eclipse——打开菜单栏window选择preference（首选项）——左侧选择Tomcat：

2. 在 Context declaration mode（Context 声明模式）中选择以Context files 增加自定义部署文件的形式部署web应用，然后在 Contexts directory 中指定上述文件的上级目录（即%Tomcat_Home%\conf\Catalina\localhost ）——点击Apply或OK。

3. 完上述步骤，再选中Web项目右键点击properties（属性）——选择右侧的Tomcat。

4. 勾上"Is a Tomcat project"前的checkbox，将项目关联至Tomcat。

在Context name中填入XXX，即Web应用自定义部署文件名和Context path名。

在Subdirectory to set as web application root (optional)中填入要部署的Web应用的实际路径（即WEB-INF上级目录）。

注意：Eclipse会自动地将workdir设置在Workspace\WebApp\work下。

如此便自动创建了%Tomcat_Home%\conf\Catalina\localhost\XXX.xml 文件。启动Tomcat 即可自动部署Web应用。


第四种方式：手动修改 %Tomcat_Home%\conf\server.xml 文件来部署web应用

打开server.xml文件并在其中增加以下元素，然后启动Tomcat即可。

    <Context docBase="D:\WebApp\AppName" path="/XXX" debug="0" reloadable="false" />  

当然如果使用Eclipse，在Eclipse中的设置也有改变：打开菜单栏window选择preference（首选项）——左侧选择Tomcat——可以看到上图中高亮画出的Context declaration mode（Context 声明模式）中选择以Server.xml文件来部署web应用。


