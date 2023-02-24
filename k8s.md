# Kubernetes 容器编排
- [到底什么是“云原生”？](https://cloud.tencent.com/developer/article/1598764)
- [Kubernetes 与云原生应用概览](https://www.bookstack.cn/read/kubernetes-handbook-201910/cloud-native-kubernetes-and-cloud-native-app-overview.md)
- [Kubernetes - Production-Grade Container Scheduling and Management](https://github.com/kubernetes/kubernetes)
- [容器、Kubernetes和云原生技术 : 企业最需要的是什么？](https://zhuanlan.zhihu.com/p/109183544)
- [k8s(kubernetes)应知应会](https://zhuanlan.zhihu.com/p/56159304)
- [Kubernetes Official - Kubernetes Documentation](https://kubernetes.io/docs/home/)
- [Learn the Kubernetes Key Concepts in 10 Minutes ](http://omerio.com/2015/12/18/learn-the-kubernetes-key-concepts-in-10-minutes/)
- [Kubernetes 是如何改变运营的？](https://zhuanlan.zhihu.com/p/88874814)
- [Docker Golang](https://hub.docker.com/_/golang)
- [Docker Tutorial](https://www.runoob.com/docker/docker-tutorial.html)
- [Docker Toolbox](http://mirrors.aliyun.com/docker-toolbox/)
- [10 分钟快速掌握 Docker 必备基础知识](https://juejin.im/post/5d4522c1f265da03e05af5f5)



单机的 Docker 引擎和单一的容器镜像只能解决单一服务的打包和测试问题。而要运行生产级的企业级应用，就需要容器调度管理系统。

Kubernetes 作为容器调度管理可以做到：

- 自动部署容器，并按照规定完成容器的复制
- 保障容器的服务能力，若某一节点出现问题，则用新的节点取代之
- 在服务运行过程中实现扩、缩容
- 通过服务的概念组织容器并提供负载均衡额服务
- 可以快速发布新的服务版本

一个典型的 Kubernetes 集群架构有以下组成：

- Pods

    Pods 是 Kubernetes 最小的调度单元。一个 Pod 可以有多个 Container，这些容器共享网络，相互之间可以通过 localhost 来发现和通信。Pod 的设计理念是支持多个容器在一个 Pod 中共享网络地址和文件系统，可以通过进程间通信和文件共享这种简单高效的方式组合完成服务。另外，Pod 是一个短暂存在的，这表现在：当 Pod 重启后，IP 可能会改变（通过 Service 解决），且数据可能会消失（通过 Volume 解决）。

- Labels

    Label 是一个附在 Pod 上的 key/value 的键值对，一个 Pod 上可以有多个 label，用户通过 label 定义了 Pod 的属性。Label 作为 pod 的筛选器，service 或 replication controller 通过通过label过滤到对应的 Pods。

- Replication Controllers

    Replication Controllers 确保 Pod 根据所设定 Pod 的数量，保障 Pod 正常运行。例如：当设定了 pod 的 replica 数据为 3 时，RC 会自动创建 3 个 Pod 并监控 Pod 的状态 。若其中一个 Pod 异常，则 RC 将创建新的 Pod 取代异常的 Pod，以保障有 3 个正常的 Pod 在提供服务。如果异常的 Pod 恢复正常，则 Pod 的总数量为 4，这时 RC 将终止其中一个 Pod。另外，**Replica Set** RS 是新一代 RC，提供同样的高可用能力，区别主要在于 RS 后来居上，能支持更多中的匹配模式。副本集对象一般不单独使用，而是作为部署的理想状态参数使用。部署是一个比 RS 应用模式更广的 API 对象，可以是创建一个新的服务，更新一个新的服务，也可以是滚动升级一个服务。滚动升级一个服务，实际是创建一个新的RS，然后逐渐将新 RS 中副本数增加到理想状态，将旧RS中的副本数减小到0的复合操作；这样一个复合操作用一个 RS 是不太好描述的，所以用一个更通用的 Deployment 来描述。

- Service

    要稳定地提供服务需要服务发现和负载均衡能力。服务发现完成的工作，是针对客户端访问的服务，找到对应的的后端服务实例。在 Kubernetes 集群中，客户端需要访问的服务就是 Service 对象。Service 是一个抽象的概念，定义了 Pod 的逻辑集合和访问这个 Pod 集合的策略。Service 将代理 Pod 对外表现为一个访问接口，外部访问这接口就可以了，不需要了解后端 Pod 如何运行。由于 Pod 的运行状态可动态变化，比如切换机器了、缩容过程中被终止了等。所以访问端不能以写死 IP 的方式去访问该 pod 提供的服务。Service 的引入旨在保证 pod 的动态变化对访问端透明，访问端只需要知道 service 的地址，由 service 来提供代理。每个 Service 会对应一个集群内部有效的虚拟 IP，集群内部通过虚拟 IP 访问一个服务。在 Kubernetes 集群中微服务的负载均衡是由 Kube-proxy 实现的。Kube-proxy 是 Kubernetes 集群内部的负载均衡器。

- Nodes

    Nodes 是 Kubernetes 的工作节点，nodes 可以是物理/虚拟机。每个 Node 上有以下服务：

    - Kubelet: 负责管控容器。Kubelet 从 API Server 接收 Pod 的创建请求，启动和停止容器，监控容器原型状态并汇报给 API Server
    - kube-proxy: 负责为 Pod 创建代理服务。Proxy 从 API Server 获取 Service 并根据 Service 创建代理服务，实现 Service 到 Pod 的请求路由和转发从而实现 Kubernetes 层级的虚拟转发网络

- Kubernetes Master

    Kubernetes 集群有一个 Master 服务作为整个集群的调度、控制节点。Master 有以下服务：

    - API Server: 用于暴露 Kubernetes API，以 RESTful API 接口方式提供给外部客户和内部组件调用。并将 REST 对象将持久化到 etcd
    - Scheduler: 负责集群的调度资源，为新建的 Pod 分配机器
    - Controller Manager: 负责执行各种控制器


容器的设计模式主要分为三大类：

- 单容器管理模式
- 单节点多容器模式
- 多节点多容器模式

当您开始使用 Pod 时，自然会重现一些常规模式。这里主要讨论单节点多容器的集中模式。


✅ 斗车模式 Sidecar pattern

这种模式主要是利用在同一 Pod 中的容器可以共享存储空间的能力。一个典型的应用场景：一个工具容器写文件到共享的文件目录，应用主容器从共享的文件目录读文件。例如，我们可以用 Nginx 构建一个代码发布仓库，简单的将代码放到某个本地目录即可。为了保持同步，我们同时用一个装有 git 客户端的容器定时到原始代码仓库同步下拉最新的代码。这种模式的好处是，工具容器的镜像，也就是打包有 Git 客户端的镜像可以重用，而不需要跟应用的容器打包在一起。同样的应用，应用主容器可用 Nginx 也可以用 Apache Httpd，都可以跟工具容器组合起来形成微服务。


✅ 外交官模式 Ambassador pattern

第二种单节点多容器模式是外交官模式，或者叫大使模式。这种模式主要利用同一 Pod 中的容器可以共享网络地址空间的特性。在一个 Pod 中给应用容器搭配一个工具容器作为代理服务器。大使是一位代理，它负责拆分对 Redis 的读写，并将其发送到适当的 Redis 服务器。因为这两个容器共享一个网络名称空间，所以它们共享一个 IP 地址，您的应用程序可以在 localhost 上打开连接并找到代理，而无需任何服务发现。请注意，对于 pod 网络，这个 localhost 不是主机上的 localhost。工具容器帮助应用容器访问外部服务，使得应用容器访问服务时不需要使用外网的 IP 地址，而只需要用 localhost 访问本地服务。在这种模式下，作为代理服务器的工具容器好像外部服务派驻在 Pod 中的“外交官”，使得应用容器办理业务时只需要跟本 Pod 的外交官打交道，而不需要出国了，因此而得名。


✅ 适配器模式 Adapter pattern

第三种单节点多容器模式是适配器模式。这种模式对于监控和管理分布式系统尤为重要。对分布式系统的一种理想设计目标，就是能够实现“分布地执行和存储，统一的监控和管理”。要想实现“统一的监控和管理”，应用和监控管理交互的接口需要是统一的，而且其接口是依照“统一的监控服务”的接口模式来实现。这和面向对象设计模式中的“适配器模式”也非常相似。

在任何实际应用程序中，该应用程序的软件均来自不同种类的资源（开源，现成的软件，自研），并且不能期望监视系统开发人员能够理解，构建，维护和部署所有功能。因此，您通常需要包装应用程序以启用与审核或监视服务的通信。使用与应用程序位于同一容器中的模块化适配器容器，可以为您提供一个将应用程序和适配器结合在一起的简单部署单元。使用适配器可使每个应用程序开发人员提供一个公共接口。使用两个不同容器（应用程序和适配器）的模块化意味着，尽管让适配器成为应用程序所有者的责任，但适配器仍可以重用，例如 Java JMX 适配器。



