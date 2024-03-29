
# 🚩 TCP/IP
[RFC 791 - IP(Internet Protocol)](https://www.rfc-editor.org/info/rfc791)
[RFC 793 - TCP(Transmission Control Protocol)](https://www.rfc-editor.org/info/rfc793)
[TCP 性能提升](https://www.cnblogs.com/xiaolincoding/p/13067971.html)
[TCP 图解千百问](https://mp.weixin.qq.com/s/tH8RFmjrveOmgLvk9hmrkw)
- TCP/IP Illustrated Vol. 3: TCP for Transactions, HTTP, NNTP, and the Unix Domain Protocols - Addison-Wesley https://bookos-z1.org/book/3484596/f7e9cc
- TCP/IP Illustrated vol. 2: The Implementation Gary R. Wright, W. Richard Stevens https://bookos-z1.org/book/3409711/6b57bd
- TCP/IP Illustrated Vol. 1: The Protocols Kevin R. Fall, W. Richard Stevens https://bookos-z1.org/book/1274750/4ba80a
- Illustrated TCPIP: A Graphic Guide to the Protocol Suite by Matthew Naugle https://bookos-z1.org/book/463817/72bf4a


TCP/IP 4 层模型中定义了数据链路层、网络层、传输层和应用层，其中最重要的两个基础协议，TCP 即是传输层协议，IP 即是网络层协议，大量应用层协议都是基于它们运行的，如 Telnet/FTP/HTTP/IMAP4/POP3/SMTP 等等，用户数据在互联网传输时要经过各层协议栈打包，接收端按逆序解包还原用户数据。

传输层及其以下的机制由内核提供，应用层由用户进程提供，应用程序对通讯数据的含义进行解释，而传输层及其以下处理通讯的细节，将数据从一台计算机通过一定的路径发送到另一台计算机。应用层数据通过协议栈发到网络上时，每层协议都要加上一个数据首部（header），称为封装（Encapsulation），其中不同的协议层对数据包有不同的称谓，在应用层称为报文(message)，在传输层叫做段（segment），在网络层叫做数据报（datagram），在链路层叫做帧（frame）。

报文是网络中交换与传输的数据单元，也是网络传输的单元。报文包含了将要发送的完整的数据信息，其长短不需一致。数据报分组(data packet)是在网络中传输的二进制格式的单元，报文在传输过程中会不断地封装成分组、包。为了提供通信性能和可靠性，每个用户发送的数据会被分成多个更小的部分，封装成 TCP/IP 协议传输的数据报。通常一个 Packet 映射成一个 Frame，但也有例外：即当数据链路层执行拆分或将几个 Packet 合成一个 Frame 的时候，一个 Datagram 可能被封装成一个或几个 Packets 在数据链路层中传输。


                                       +-------------+
                                       | app header  |                  +-------------+
                                       | & user data |                  | application |
                                       +-------------+ <=============== +-------------+ 
                                       |             |                         |
                                       V             V                         |
                           +-----------+-------------+                         V
                           |    TCP    | application |                    +----------+
                           |   Header  |     data    |                    |   TCP    |
                           +-----------+-------------+ <================= +----------+ 
                           |<----- TCP Segment ----->|                         |
                           V                         V                         |
               +-----------+-----------+-------------+                         V
               |     IP    |    TCP    | application |                    +----------+
               |   Header  |   Header  |     data    |                    |    IP    |
               +-----------+-----------+-------------+ <================= +----------+ 
               |<----------- IP Datagram ----------->|                         |
               V                                     V                         V
    +----------+-----------+-----------+-------------+----------+         +----------+
    | Ethernet |     IP    |    TCP    | application | Ethernet |         | Ethernet |
    |  Header  |   Header  |   Header  |     data    | Trailer  |         |  Driver  |
    +----------+-----------+-----------+-------------+----------+ <====== +----------+ 
    | 14 bytes    20 bytes    20 bytes     N bytes     4 bytes  |
    |<-------------- Ethernet Frame (46-1500 bytes) ----------->|

    Figure 1.7. Encapsulation of data as it goes down the protocol stack.

关于 TCP/IP 两个协议的数据报文结构参考后面的小节，IP 数据报含有 IP 地址信息涉及到路由走向，20 字节是必须的最小长度。这也是 IP 地址的由来，因为需要这个地址来实现 IP 包的传输。TCP 数据段含有通讯端口信息涉及数据在应用程序的发送和接收流向，这也是传输控制协议这个名称的由来，因为 TCP 通过端口信息控制数据包在不同应之间得传递。Ethernet 的 Frame 包含网络硬件的 MAC 地址，涉及的是数据在网络链路中的传输。

关于 IP、MAC 地址如何在实际数据传输中起作用，请参考 ARP - Address Resolution Protocol。


## ⚡ IP 地址分类

IP 协议文档 RFC 791 中将 32-bit 得 IP 地址划分成三个类型：

      High Order Bits   Format                           Class
      ---------------   -------------------------------  -----
            0            7 bits of net, 24 bits of host    A
            10          14 bits of net, 16 bits of host    B
            110         21 bits of net,  8 bits of host    C
            111         escape to extended addressing mode

A 类地址最高位为 0，使用 7-bit 表示网络号 network number，24-bit 表示本地主机地址，可以分配 128 个 A 类网络。

       0                 1                   2                   3
       0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      |0|   NETWORK   |                Local Address                  |
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

             Class A Address 0.0.0.0~127.255.255.255

B 类地址最高位为 10，使用 14-bit 表示网络号，16-bit 表示本地主机地址，可以分配 16,384 个 B 类网络。

       0                 1                   2                   3
       0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      |1 0|           NETWORK         |          Local Address        |
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

             Class B Address 128.0.0.0~191.255.255.255

C 类地址最高位为 110，使用 21-bit 表示网络号，8-bit 表示本地主机地址，可以分配 2,097,152 个 C 类网络。

       0                 1                   2                   3
       0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      |1 1 0|                    NETWORK              | Local Address |
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

             Class C Address 192.0.0.0~224.255.255.255

互联网数字分配机构 IANA - The Internet Assigned Numbers Authority 在 RFC 1918 文档中说明为私有网络预留出了三个 IP 地址块：

     10.0.0.0        -   10.255.255.255  (10/8 prefix)
     172.16.0.0      -   172.31.255.255  (172.16/12 prefix)
     192.168.0.0     -   192.168.255.255 (192.168/16 prefix)


除地址 A、B、C 分类外，还可根据传输的消息特征将 IP 地址分为单播、广播或多播。主机使用IP地址进行单播一对一传输、多播一对多传输，或一对全网主机广播的通信。


单播地址是 IP 网络中最常见的，包含单播目标地址的分组发送给特定主机，一个例子，IP 地址为 192.168.1.5 的主机向 IP 地址为 192.168.1.200 的服务器请求网页。

要发送和接收单播分组 Packet 数据报，IP 分组报头部中必须有一个目标 IP 地址，而以太网帧报头中必须有相应的目标 MAC 地址。IP 地址和 MAC 地址一起将数据传输到特定的目标主机。

如果目标 IP 地址属于另一个网络，则在帧中使用的目标 MAC 地址将改为与源 IP 地址位于同一个网络中的路由器接口的 MAC 地址。


广播分组的目标 IP 地址的主机部分全为 1，这意味着本地网络中的所有主机都将接收并查看该分组数据报。诸如 ARP 和 DHCP 等很多网络协议都使用广播。例如，对于 C 类 IP 地址，前 24-bit 为网络号，最后 8-bit 为主机号，其对应广播地址为 192.168.1.255，其主机部分为十进制数 255 或二进制数 11111111 全为1：

    类型  IP 单播地址   子网掩码         IP 广播地址
       A  10.0.0.0     255.0.0.0      10.255.255.255
       B  172.16.0.0   255.255.0.0    172.16.255.255
       C  192.168.1.0  255.255.255.0  192.168.1.255

在以太网帧中，必须包含与 IP 广播地址对应的 MAC 广播地址。在以太网中，MAC 广播地址长48位，其十六进制表示为 FF-FF-FF-FF-FF-FF，全 1 为 MAC 广播地址，主机地址为全 1 即 IP 广播地址。


多播地址让源设备能够将分组报文 Packet 发送给一组设备。属于多播组的设备将被分配一个多播组 IP 地址，多播地址范围为 224.0.0.0～239.255.255.255。由于多播地址表示一组设备，有时被称为主机组，因此只能用作分组的目标地址，源地址总是为单播地址。

远程游戏就是一个使用多播地址的例子，很多玩家通过远程连接玩同一个游戏；另一例子是通过视频会议进行远程教学，其中很多学生连接到同一个教室。

同单播地址、广播地址一样，IP 多播地址也需要相应的多播 MAC 地址在本地网络中实际传送帧。MAC 多播地址以十六进制值 `01-00-5E` 打头，余下的 6 个十六进制位是根据 IP 多播组地址的最后 23 位转换得到的。列如一个 MAC 多播地址可以是 01-00-5E-0F-64-C5。


## ⚡ TCP 可靠数据传输

TCP 基于以下提供可靠数据传输服务：

- 对应用数据采取适当大小分割成 chunks 再发送，完全不同与 UDP 由程序决定 UDP datagram 大小。
- TCP 每发送一个 Segment 都会有一个定时计数器，等待对方应答报文 ACKnowledge 确认，对于超时的情况就重发。
- TCP 接收端发送确认信息，这个确认信息不必在收到数据后立即发送，可以在一定时间内延时几秒发送。
- TCP 维护一个完整的头部和数据的校验码 checksum 防止数据被篡改，接收端进行校验确认。
- TCP Segments 要转换成 IP datagrams 传输，到达先后顺序是不确定的，接收端依据序列号 Sequence Number 进行重排序。
- 因为存在重复 IP datagrams，接收端要过滤重复数据。
- TCP 接收方有滑动窗口 Window 信息随 ACK 应答报文发送，提供流量控制。每个 TCP 终端的缓冲区都是有限的，接收端只允许发送端传输缓存区大小匹配的数据，避免高性能机器耗光对方缓存。

与 UDP 协议不同，TCP 是连接导向的协议，发送数据前需要建立可靠连接。TCP/IP 详解 《TCP/IP Illustrated, Volume 1: The Protocols》 第十八章撰文讲解了 TCP 的连接建立与终结 TCP Connection Establishment and Termination。可以使用 tcpdump/WinDump 命令工具抓包分析，-w 这个参数可以导入到文件中，方便用 WireShark、Tshark 等网络分析工具来分析。

一句话概括 TCP 的建立和结束连接就是，三次握手 3-Way Handshake，四次挥手 4-Way Wavehand。TCP 协议头中提供了 6-bit 控制位，可以用来指定六种不同用途的 TCP 数据包：

- ACK - Acknowledgment field significant 应答确认；
- FIN - No more data from sender 用在结束连接；
- PSH - Push Function 推送标志，用于推送数据而不是使用数据队列处理，表示数据包要尽快交给应用层处理；
- RST - Reset the connection 连接重置；
- SYN - Synchronize sequence numbers 同步序列，用在建立连接，每个 SYN segment 消耗一个序列号，即使后续序列号加一；
- URG - Urgent Pointer field significant 紧急标志，用于需要应用层紧急处理的数据包；


以下假设宅男 Client 和腐女 Server 两方通讯的情景：

- C: 搭个讪可以吗 :) 发送第一个 SYN segment 并附带一个随机的初始序列号 ISN - initial sequence number，如 1415531521；
- S: 可以啊 :) 响应一个 SYN segment，也发送一个 ISN 序列号，并将 Client 发送的 ISN 加一通过 Acknowledgment Number 发回作为应答确认；
- C: 太好了 :)  再发送一个 SYN Segment 应答确认，并将 Server 响应的 ISN 加一通过 Acknowledgment Number 发回作为应答确认；
- 愉快地传输数据中......
- C: 我要忙其它事了下次再见 :( 发送 FIN segment 附带序列号；
- S: 好哒去忙吧 :) 响应 ACK segment，序列号加一；
- S: 再见 :) 发送 FIN segment 
- C: 再见 :) 响应 ACK segment

以上情形是正常网络条件下的典型流程，实际上可能出现连接超时。断开连接也可以由服务端发起，一个TCP连接是全双工，在终止过程执行到一半时，还可能出现数据还在发送的情况，即 TCP Half-Close。完整的程序流程参考 TCP State Transition Diagram。此外，还有双方同时发起建立连接或断开连接的情况 Simultaneous Open/Close。

三次握手可以有效解决因网络延时导致的问题，假设是两次握手建立连接，那么在 C 发送第一个 SYN 后因网络延时导致连接释放后才到达 S 端，那么就会导致 S 单方认为连接已成功建立。

在三次握手过程中，Server 发送 SYN-ACK 之后，收到 Client 的 ACK 之前的状态称为半连接 TCP Half-Open Connect，此时 Server 处于 SYN RCVD 状态，当收到 ACK 后，Server 转入 ESTABLISHED 状态。

典型的 SYN 攻击就是 DDOS 攻击，Client 在短时间内伪造大量不存在的IP地址，并向 Server 不断地发送 SYN 包，Server 回复确认包，并等待 Client 的确认，由于源地址是不存在的，因此，Server 需要不断重发直至超时，这些伪造的 SYN 包将产时间占用未连接队列，导致正常的 SYN 请求因为队列满而被丢弃，从而引起网络堵塞甚至系统瘫痪。检测到 Server 上有大量半连接状态且源 IP 地址是随机的，则可以断定遭到 SYN 攻击了，使用如下命令检查：

    netstat -nap | grep SYN_RECV

由于TCP连接是全双工的，因此每个方向都必须单独进行关闭。这个原则是当一方完成它的数据发送任务后就能发送一个FIN来终止这个方向的连接。收到一个 FIN 只意味着这一方向上没有数据流入，但仍能向这方发送数据，待数据发送完再执行最后的终止连接流程。在很多时候，TCP 连接的断开都会由 TCP 层自动进行，例如 CTRL+C 强制终止程序，TCP连接依然会正常关闭。


## ⚡ TCP State Transition Diagram

首先处于 CLOSED 的 Server 进入 LISTEN 状态等待 Client 建立连接，收到连接请求并响应一个 SYN ACK 进入 SYN RCVD 状态，等待 Client 回应，这时也称为 TCP Half-Open Connect 状态，再次接收到客户端的 SYN ACK 即进入建立连接状态 ESTAB。

或者作为 Client 进入 LISTEN 状态，发送一个 SYN 发起连接要求进入 SYN SENT 状态，收到服务器回应就进入 SYN RCVD，再回应一个 rcv ACK of SYN 就进入 ESTAB 建立连接。


                                  +---------+ ------------------+    active OPEN
                                  |  CLOSED |                    \   -----------
                                  +---------+<--------------+     \   create TCB
                                    |     ^                  \     \  snd SYN
                       passive OPEN |     |   CLOSE           \     \
                       ------------ |     | ----------         \     \
                        create TCB  |     | delete TCB          \     \
                                    V     |                      \     \
                                  +---------+            CLOSE    +     +
                                  |  LISTEN |          ---------- |     |
                                  +---------+          delete TCB |     |
                       rcv SYN      |     |     SEND              |     |
                      -----------   |     |    -------            |     V
     +---------+      snd SYN,ACK  /       \   snd SYN          +---------+
     |         |<-----------------           ------------------>|         |
     |   SYN   |                    rcv SYN                     |   SYN   |
     |   RCVD  |<-----------------------------------------------|   SENT  |
     |         |                    snd ACK                     |         |
     |         |------------------+         +-------------------|         |
     +---------+   rcv ACK of SYN  \       /  rcv SYN,ACK       +---------+
       |           --------------   |     |   -----------
       |                  x         |     |     snd ACK
       |                            V     V
       |  CLOSE                   +---------+
       | -------                  |  ESTAB  |
       | snd FIN                  +---------+
       |                   CLOSE    |     |    rcv FIN
       V                  -------   |     |    -------
     +---------+          snd FIN  /       \   snd ACK          +---------+
     |  FIN    |<-----------------+         +------------------>|  CLOSE  |
     | WAIT-1  |------------------+                             |   WAIT  |
     +---------+          rcv FIN  \                            +---------+
       | rcv ACK of FIN   -------   |                            CLOSE  |
       | --------------   snd ACK   |                           ------- |
       V        x                   V                           snd FIN V
     +---------+                  +---------+                   +---------+
     |FINWAIT-2|                  | CLOSING |                   | LAST-ACK|
     +---------+                  +---------+                   +---------+
       |                rcv ACK of FIN |                 rcv ACK of FIN |
       |  rcv FIN       -------------- |    Timeout=2MSL -------------- |
       |  -------              x       V    ------------        x       V
        \ snd ACK                 +---------+delete TCB         +---------+
         ------------------------>|TIME WAIT|------------------>| CLOSED  |
                                  +---------+                   +---------+

                          TCP Connection State Diagram
                                   Figure 6.




## ⚡ IP Header Format

        0                   1                   2                   3
        0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
       +---------------+---------------+---------------+---------------+
       |Version|  IHL  |Type of Service|          Total Length         |
       +---------------+---------------+---------------+---------------+
       |         Identification        |Flags|      Fragment Offset    |
       +---------------+---------------+---------------+---------------+
       |  Time to Live |    Protocol   |         Header Checksum       |
       +---------------+---------------+---------------+---------------+
       |                       Source Address                          |
       +---------------+---------------+---------------+---------------+
       |                    Destination Address                        |
       +---------------+---------------+---------------+---------------+
       |                    Options                    |    Padding    |
       +---------------+---------------+---------------+---------------+

              Figure 4. Example Internet Datagram Header

  Version:  4 bits

    The Version field indicates the format of the internet header.  This
    document describes version 4.

  IHL:  4 bits

    Internet Header Length is the length of the internet header in 32
    bit words, and thus points to the beginning of the data.  Note that
    the minimum value for a correct header is 5.

  Type of Service:  8 bits

    The Type of Service provides an indication of the abstract
    parameters of the quality of service desired.  These parameters are
    to be used to guide the selection of the actual service parameters
    when transmitting a datagram through a particular network.  Several
    networks offer service precedence, which somehow treats high
    precedence traffic as more important than other traffic (generally
    by accepting only traffic above a certain precedence at time of high
    load).  The major choice is a three way tradeoff between low-delay,
    high-reliability, and high-throughput.

      Bits 0-2:  Precedence.
      Bit    3:  0 = Normal Delay,      1 = Low Delay.
      Bits   4:  0 = Normal Throughput, 1 = High Throughput.
      Bits   5:  0 = Normal Relibility, 1 = High Relibility.
      Bit  6-7:  Reserved for Future Use.

         0     1     2     3     4     5     6     7
      +-----+-----+-----+-----+-----+-----+-----+-----+
      |                 |     |     |     |     |     |
      |   PRECEDENCE    |  D  |  T  |  R  |  0  |  0  |
      |                 |     |     |     |     |     |
      +-----+-----+-----+-----+-----+-----+-----+-----+

        Precedence

          111 - Network Control
          110 - Internetwork Control
          101 - CRITIC/ECP
          100 - Flash Override
          011 - Flash
          010 - Immediate
          001 - Priority
          000 - Routine

    The use of the Delay, Throughput, and Reliability indications may
    increase the cost (in some sense) of the service.  In many networks
    better performance for one of these parameters is coupled with worse
    performance on another.  Except for very unusual cases at most two
    of these three indications should be set.

    The type of service is used to specify the treatment of the datagram
    during its transmission through the internet system.  Example
    mappings of the internet type of service to the actual service
    provided on networks such as AUTODIN II, ARPANET, SATNET, and PRNET
    is given in "Service Mappings" [8].

    The Network Control precedence designation is intended to be used
    within a network only.  The actual use and control of that
    designation is up to each network. The Internetwork Control
    designation is intended for use by gateway control originators only.
    If the actual use of these precedence designations is of concern to
    a particular network, it is the responsibility of that network to
    control the access to, and use of, those precedence designations.

  Total Length:  16 bits

    Total Length is the length of the datagram, measured in octets,
    including internet header and data.  This field allows the length of
    a datagram to be up to 65,535 octets.  Such long datagrams are
    impractical for most hosts and networks.  All hosts must be prepared
    to accept datagrams of up to 576 octets (whether they arrive whole
    or in fragments).  It is recommended that hosts only send datagrams
    larger than 576 octets if they have assurance that the destination
    is prepared to accept the larger datagrams.

    The number 576 is selected to allow a reasonable sized data block to
    be transmitted in addition to the required header information.  For
    example, this size allows a data block of 512 octets plus 64 header
    octets to fit in a datagram.  The maximal internet header is 60
    octets, and a typical internet header is 20 octets, allowing a
    margin for headers of higher level protocols.

  Identification:  16 bits

    An identifying value assigned by the sender to aid in assembling the
    fragments of a datagram.

  Flags:  3 bits

    Various Control Flags.

      Bit 0: reserved, must be zero
      Bit 1: (DF) 0 = May Fragment,  1 = Don't Fragment.
      Bit 2: (MF) 0 = Last Fragment, 1 = More Fragments.

          0   1   2
        +---+---+---+
        |   | D | M |
        | 0 | F | F |
        +---+---+---+

  Fragment Offset:  13 bits

    This field indicates where in the datagram this fragment belongs.
    The fragment offset is measured in units of 8 octets (64 bits).  The
    first fragment has offset zero.

  Time to Live:  8 bits

    This field indicates the maximum time the datagram is allowed to
    remain in the internet system.  If this field contains the value
    zero, then the datagram must be destroyed.  This field is modified
    in internet header processing.  The time is measured in units of
    seconds, but since every module that processes a datagram must
    decrease the TTL by at least one even if it process the datagram in
    less than a second, the TTL must be thought of only as an upper
    bound on the time a datagram may exist.  The intention is to cause
    undeliverable datagrams to be discarded, and to bound the maximum
    datagram lifetime.

  Protocol:  8 bits

    This field indicates the next level protocol used in the data
    portion of the internet datagram.  The values for various protocols
    are specified in "Assigned Numbers" [9].

  Header Checksum:  16 bits

    A checksum on the header only.  Since some header fields change
    (e.g., time to live), this is recomputed and verified at each point
    that the internet header is processed.

    The checksum algorithm is:

      The checksum field is the 16 bit one's complement of the one's
      complement sum of all 16 bit words in the header.  For purposes of
      computing the checksum, the value of the checksum field is zero.

    This is a simple to compute checksum and experimental evidence
    indicates it is adequate, but it is provisional and may be replaced
    by a CRC procedure, depending on further experience.

  Source Address:  32 bits

    The source address.  See section 3.2.

  Destination Address:  32 bits

    The destination address.  See section 3.2.

  Options:  variable

    The options may appear or not in datagrams.  They must be
    implemented by all IP modules (host and gateways).  What is optional
    is their transmission in any particular datagram, not their
    implementation.

    In some environments the security option may be required in all
    datagrams.

    The option field is variable in length.  There may be zero or more
    options.  There are two cases for the format of an option:

      Case 1:  A single octet of option-type.

      Case 2:  An option-type octet, an option-length octet, and the
               actual option-data octets.

    The option-length octet counts the option-type octet and the
    option-length octet as well as the option-data octets.

    The option-type octet is viewed as having 3 fields:

      1 bit   copied flag,
      2 bits  option class,
      5 bits  option number.

    The copied flag indicates that this option is copied into all
    fragments on fragmentation.

      0 = not copied
      1 = copied

    The option classes are:

      0 = control
      1 = reserved for future use
      2 = debugging and measurement
      3 = reserved for future use

    The following internet options are defined:

      CLASS NUMBER LENGTH DESCRIPTION
      ----- ------ ------ -----------
        0     0      -    End of Option list.  This option occupies only
                          1 octet; it has no length octet.
        0     1      -    No Operation.  This option occupies only 1
                          octet; it has no length octet.
        0     2     11    Security.  Used to carry Security,
                          Compartmentation, User Group (TCC), and
                          Handling Restriction Codes compatible with DOD
                          requirements.
        0     3     var.  Loose Source Routing.  Used to route the
                          internet datagram based on information
                          supplied by the source.
        0     9     var.  Strict Source Routing.  Used to route the
                          internet datagram based on information
                          supplied by the source.
        0     7     var.  Record Route.  Used to trace the route an
                          internet datagram takes.
        0     8      4    Stream ID.  Used to carry the stream
                          identifier.
        2     4     var.  Internet Timestamp.



    Specific Option Definitions

      End of Option List

        +--------+
        |00000000|
        +--------+
          Type=0

        This option indicates the end of the option list.  This might
        not coincide with the end of the internet header according to
        the internet header length.  This is used at the end of all
        options, not the end of each option, and need only be used if
        the end of the options would not otherwise coincide with the end
        of the internet header.

        May be copied, introduced, or deleted on fragmentation, or for
        any other reason.

      No Operation

        +--------+
        |00000001|
        +--------+
          Type=1

        This option may be used between options, for example, to align
        the beginning of a subsequent option on a 32 bit boundary.

        May be copied, introduced, or deleted on fragmentation, or for
        any other reason.

      Security

        This option provides a way for hosts to send security,
        compartmentation, handling restrictions, and TCC (closed user
        group) parameters.  The format for this option is as follows:

          +--------+--------+---//---+---//---+---//---+---//---+
          |10000010|00001011|SSS  SSS|CCC  CCC|HHH  HHH|  TCC   |
          +--------+--------+---//---+---//---+---//---+---//---+
           Type=130 Length=11

        Security (S field):  16 bits

          Specifies one of 16 levels of security (eight of which are
          reserved for future use).

            00000000 00000000 - Unclassified
            11110001 00110101 - Confidential
            01111000 10011010 - EFTO
            10111100 01001101 - MMMM
            01011110 00100110 - PROG
            10101111 00010011 - Restricted
            11010111 10001000 - Secret
            01101011 11000101 - Top Secret
            00110101 11100010 - (Reserved for future use)
            10011010 11110001 - (Reserved for future use)
            01001101 01111000 - (Reserved for future use)
            00100100 10111101 - (Reserved for future use)
            00010011 01011110 - (Reserved for future use)
            10001001 10101111 - (Reserved for future use)
            11000100 11010110 - (Reserved for future use)
            11100010 01101011 - (Reserved for future use)

        Compartments (C field):  16 bits

          An all zero value is used when the information transmitted is
          not compartmented.  Other values for the compartments field
          may be obtained from the Defense Intelligence Agency.

        Handling Restrictions (H field):  16 bits

          The values for the control and release markings are
          alphanumeric digraphs and are defined in the Defense
          Intelligence Agency Manual DIAM 65-19, "Standard Security
          Markings".

        Transmission Control Code (TCC field):  24 bits

          Provides a means to segregate traffic and define controlled
          communities of interest among subscribers. The TCC values are
          trigraphs, and are available from HQ DCA Code 530.

        Must be copied on fragmentation.  This option appears at most
        once in a datagram.

      Loose Source and Record Route

        +--------+--------+--------+---------//--------+
        |10000011| length | pointer|     route data    |
        +--------+--------+--------+---------//--------+
         Type=131

        The loose source and record route (LSRR) option provides a means
        for the source of an internet datagram to supply routing
        information to be used by the gateways in forwarding the
        datagram to the destination, and to record the route
        information.

        The option begins with the option type code.  The second octet
        is the option length which includes the option type code and the
        length octet, the pointer octet, and length-3 octets of route
        data.  The third octet is the pointer into the route data
        indicating the octet which begins the next source address to be
        processed.  The pointer is relative to this option, and the
        smallest legal value for the pointer is 4.

        A route data is composed of a series of internet addresses.
        Each internet address is 32 bits or 4 octets.  If the pointer is
        greater than the length, the source route is empty (and the
        recorded route full) and the routing is to be based on the
        destination address field.

        If the address in destination address field has been reached and
        the pointer is not greater than the length, the next address in
        the source route replaces the address in the destination address
        field, and the recorded route address replaces the source
        address just used, and pointer is increased by four.

        The recorded route address is the internet module's own internet
        address as known in the environment into which this datagram is
        being forwarded.

        This procedure of replacing the source route with the recorded
        route (though it is in the reverse of the order it must be in to
        be used as a source route) means the option (and the IP header
        as a whole) remains a constant length as the datagram progresses
        through the internet.

        This option is a loose source route because the gateway or host
        IP is allowed to use any route of any number of other
        intermediate gateways to reach the next address in the route.

        Must be copied on fragmentation.  Appears at most once in a
        datagram.

      Strict Source and Record Route

        +--------+--------+--------+---------//--------+
        |10001001| length | pointer|     route data    |
        +--------+--------+--------+---------//--------+
         Type=137

        The strict source and record route (SSRR) option provides a
        means for the source of an internet datagram to supply routing
        information to be used by the gateways in forwarding the
        datagram to the destination, and to record the route
        information.

        The option begins with the option type code.  The second octet
        is the option length which includes the option type code and the
        length octet, the pointer octet, and length-3 octets of route
        data.  The third octet is the pointer into the route data
        indicating the octet which begins the next source address to be
        processed.  The pointer is relative to this option, and the
        smallest legal value for the pointer is 4.

        A route data is composed of a series of internet addresses.
        Each internet address is 32 bits or 4 octets.  If the pointer is
        greater than the length, the source route is empty (and the
        recorded route full) and the routing is to be based on the
        destination address field.

        If the address in destination address field has been reached and
        the pointer is not greater than the length, the next address in
        the source route replaces the address in the destination address
        field, and the recorded route address replaces the source
        address just used, and pointer is increased by four.

        The recorded route address is the internet module's own internet
        address as known in the environment into which this datagram is
        being forwarded.

        This procedure of replacing the source route with the recorded
        route (though it is in the reverse of the order it must be in to
        be used as a source route) means the option (and the IP header
        as a whole) remains a constant length as the datagram progresses
        through the internet.

        This option is a strict source route because the gateway or host
        IP must send the datagram directly to the next address in the
        source route through only the directly connected network
        indicated in the next address to reach the next gateway or host
        specified in the route.

        Must be copied on fragmentation.  Appears at most once in a
        datagram.

      Record Route

        +--------+--------+--------+---------//--------+
        |00000111| length | pointer|     route data    |
        +--------+--------+--------+---------//--------+
          Type=7

        The record route option provides a means to record the route of
        an internet datagram.

        The option begins with the option type code.  The second octet
        is the option length which includes the option type code and the
        length octet, the pointer octet, and length-3 octets of route
        data.  The third octet is the pointer into the route data
        indicating the octet which begins the next area to store a route
        address.  The pointer is relative to this option, and the
        smallest legal value for the pointer is 4.

        A recorded route is composed of a series of internet addresses.
        Each internet address is 32 bits or 4 octets.  If the pointer is
        greater than the length, the recorded route data area is full.
        The originating host must compose this option with a large
        enough route data area to hold all the address expected.  The
        size of the option does not change due to adding addresses.  The
        intitial contents of the route data area must be zero.

        When an internet module routes a datagram it checks to see if
        the record route option is present.  If it is, it inserts its
        own internet address as known in the environment into which this
        datagram is being forwarded into the recorded route begining at
        the octet indicated by the pointer, and increments the pointer
        by four.

        If the route data area is already full (the pointer exceeds the
        length) the datagram is forwarded without inserting the address
        into the recorded route.  If there is some room but not enough
        room for a full address to be inserted, the original datagram is
        considered to be in error and is discarded.  In either case an
        ICMP parameter problem message may be sent to the source
        host [3].

        Not copied on fragmentation, goes in first fragment only.
        Appears at most once in a datagram.

      Stream Identifier

        +--------+--------+--------+--------+
        |10001000|00000010|    Stream ID    |
        +--------+--------+--------+--------+
         Type=136 Length=4

        This option provides a way for the 16-bit SATNET stream
        identifier to be carried through networks that do not support
        the stream concept.

        Must be copied on fragmentation.  Appears at most once in a
        datagram.

      Internet Timestamp

        +--------+--------+--------+--------+
        |01000100| length | pointer|oflw|flg|
        +--------+--------+--------+--------+
        |         internet address          |
        +--------+--------+--------+--------+
        |             timestamp             |
        +--------+--------+--------+--------+
        |                 .                 |
                          .
                          .
        Type = 68

        The Option Length is the number of octets in the option counting
        the type, length, pointer, and overflow/flag octets (maximum
        length 40).

        The Pointer is the number of octets from the beginning of this
        option to the end of timestamps plus one (i.e., it points to the
        octet beginning the space for next timestamp).  The smallest
        legal value is 5.  The timestamp area is full when the pointer
        is greater than the length.

        The Overflow (oflw) [4 bits] is the number of IP modules that
        cannot register timestamps due to lack of space.

        The Flag (flg) [4 bits] values are

          0 -- time stamps only, stored in consecutive 32-bit words,

          1 -- each timestamp is preceded with internet address of the
               registering entity,

          3 -- the internet address fields are prespecified.  An IP
               module only registers its timestamp if it matches its own
               address with the next specified internet address.

        The Timestamp is a right-justified, 32-bit timestamp in
        milliseconds since midnight UT.  If the time is not available in
        milliseconds or cannot be provided with respect to midnight UT
        then any time may be inserted as a timestamp provided the high
        order bit of the timestamp field is set to one to indicate the
        use of a non-standard value.

        The originating host must compose this option with a large
        enough timestamp data area to hold all the timestamp information
        expected.  The size of the option does not change due to adding
        timestamps.  The intitial contents of the timestamp data area
        must be zero or internet address/zero pairs.

        If the timestamp data area is already full (the pointer exceeds
        the length) the datagram is forwarded without inserting the
        timestamp, but the overflow count is incremented by one.

        If there is some room but not enough room for a full timestamp
        to be inserted, or the overflow count itself overflows, the
        original datagram is considered to be in error and is discarded.
        In either case an ICMP parameter problem message may be sent to
        the source host [3].

        The timestamp option is not copied upon fragmentation.  It is
        carried in the first fragment.  Appears at most once in a
        datagram.

  Padding:  variable

    The internet header padding is used to ensure that the internet
    header ends on a 32 bit boundary.  The padding is zero.


## ⚡ TCP Header Format


        0                   1                   2                   3
        0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
       +---------------+---------------+---------------+---------------+
       |          Source Port          |       Destination Port        |
       +---------------+---------------+---------------+---------------+
       |                        Sequence Number                        |
       +---------------+---------------+---------------+---------------+
       |                    Acknowledgment Number                      |
       +---------------+---------------+---------------+---------------+
       |  Data |           |U|A|P|R|S|F|                               |
       | Offset| Reserved  |R|C|S|S|Y|I|            Window             |
       |       |           |G|K|H|T|N|N|                               |
       +---------------+---------------+---------------+---------------+
       |           Checksum            |         Urgent Pointer        |
       +---------------+---------------+---------------+---------------+
       |                    Options                    |    Padding    |
       +---------------+---------------+---------------+---------------+
       |                             data                              |
       +---------------+---------------+---------------+---------------+

                       Figure 3. TCP Header Format


  Source Port:  16 bits

    The source port number.

  Destination Port:  16 bits

    The destination port number.

  Sequence Number:  32 bits

    The sequence number of the first data octet in this segment (except
    when SYN is present). If SYN is present the sequence number is the
    initial sequence number (ISN) and the first data octet is ISN+1.

  Acknowledgment Number:  32 bits

    If the ACK control bit is set this field contains the value of the
    next sequence number the sender of the segment is expecting to
    receive.  Once a connection is established this is always sent.

  Data Offset:  4 bits

    The number of 32 bit words in the TCP Header.  This indicates where
    the data begins.  The TCP header (even one including options) is an
    integral number of 32 bits long.

  Reserved:  6 bits

    Reserved for future use.  Must be zero.

  Control Bits:  6 bits (from left to right):

    URG:  Urgent Pointer field significant
    ACK:  Acknowledgment field significant
    PSH:  Push Function
    RST:  Reset the connection
    SYN:  Synchronize sequence numbers
    FIN:  No more data from sender

  Window:  16 bits

    The number of data octets beginning with the one indicated in the
    acknowledgment field which the sender of this segment is willing to
    accept.

  Checksum:  16 bits

    The checksum field is the 16 bit one's complement of the one's
    complement sum of all 16 bit words in the header and text.  If a
    segment contains an odd number of header and text octets to be
    checksummed, the last octet is padded on the right with zeros to
    form a 16 bit word for checksum purposes.  The pad is not
    transmitted as part of the segment.  While computing the checksum,
    the checksum field itself is replaced with zeros.

    The checksum also covers a 96 bit pseudo header conceptually
    prefixed to the TCP header.  This pseudo header contains the Source
    Address, the Destination Address, the Protocol, and TCP length.
    This gives the TCP protection against misrouted segments.  This
    information is carried in the Internet Protocol and is transferred
    across the TCP/Network interface in the arguments or results of
    calls by the TCP on the IP.

                     +--------+--------+--------+--------+
                     |           Source Address          |
                     +--------+--------+--------+--------+
                     |         Destination Address       |
                     +--------+--------+--------+--------+
                     |  zero  |  PTCL  |    TCP Length   |
                     +--------+--------+--------+--------+

      The TCP Length is the TCP header length plus the data length in
      octets (this is not an explicitly transmitted quantity, but is
      computed), and it does not count the 12 octets of the pseudo
      header.

  Urgent Pointer:  16 bits

    This field communicates the current value of the urgent pointer as a
    positive offset from the sequence number in this segment.  The
    urgent pointer points to the sequence number of the octet following
    the urgent data.  This field is only be interpreted in segments with
    the URG control bit set.

  Options:  variable

    Options may occupy space at the end of the TCP header and are a
    multiple of 8 bits in length.  All options are included in the
    checksum.  An option may begin on any octet boundary.  There are two
    cases for the format of an option:

      Case 1:  A single octet of option-kind.

      Case 2:  An octet of option-kind, an octet of option-length, and
               the actual option-data octets.

    The option-length counts the two octets of option-kind and
    option-length as well as the option-data octets.

    Note that the list of options may be shorter than the data offset
    field might imply.  The content of the header beyond the
    End-of-Option option must be header padding (i.e., zero).

    A TCP must implement all options.

    Currently defined options include (kind indicated in octal):

      Kind     Length    Meaning
      ----     ------    -------
       0         -       End of option list.
       1         -       No-Operation.
       2         4       Maximum Segment Size.


    Specific Option Definitions

      End of Option List

        +--------+
        |00000000|
        +--------+
         Kind=0

        This option code indicates the end of the option list.  This
        might not coincide with the end of the TCP header according to
        the Data Offset field.  This is used at the end of all options,
        not the end of each option, and need only be used if the end of
        the options would not otherwise coincide with the end of the TCP
        header.

      No-Operation

        +--------+
        |00000001|
        +--------+
         Kind=1

        This option code may be used between options, for example, to
        align the beginning of a subsequent option on a word boundary.
        There is no guarantee that senders will use this option, so
        receivers must be prepared to process options even if they do
        not begin on a word boundary.

      Maximum Segment Size

        +--------+--------+---------+--------+
        |00000010|00000100|   max seg size   |
        +--------+--------+---------+--------+
         Kind=2   Length=4

        Maximum Segment Size Option Data:  16 bits

          If this option is present, then it communicates the maximum
          receive segment size at the TCP which sends this segment.
          This field must only be sent in the initial connection request
          (i.e., in segments with the SYN control bit set).  If this
          option is not used, any segment size is allowed.

  Padding:  variable

    The TCP header padding is used to ensure that the TCP header ends
    and data begins on a 32 bit boundary.  The padding is composed of
    zeros.


# 🚩 Ping & Tracert 网络诊断工具

IGMP - Internet Group Management Protocol 互联网组管理协议是TCP/IP 协议族中负责IP组播成员管理的协议，用来在IP主机和与其直接相邻的组播路由器之间建立、维护组播组成员关系。到目前为止，IGMP 有三个版本：

- IGMPv1(由RFC 1112 定义)
- IGMPv2(由RFC 2236 定义)
- IGMPv3(由RFC 3376 定义)

ICMP - Internet Control Message Protocol 互联网控制报文协议是 TCP/IP 协议簇的一个子协议，用于在IP主机、路由器之间传递控制消息。控制消息是指网络通不通、主机是否可达、路由是否可用等网络本身的消息。这些控制消息虽然并不传输用户数据，但是对于用户数据的传递起着重要的作用。ICMP 报文格式具体由 RFC 777，RFC 792 规范。

在百度中搜索 IP 就可以看到当前主机访问公网使用的 IP 地址，通过路由器也可以查看到路由器申请到的公网 IP 地址：

    183.17.125.237
    100.64.154.51

可以使用 ping 对指定主机的连接进行测试，它通过发送 IGMP 消息来获得连接状态。它只是利用 ICMP 回显请求和回显应答报文，而不用经过传输层 TCP/UDP。
ping 程序通过在 ICMP 报文数据中存放发送请求的时间值来计算往返时间，当应答返回时，用当前时间减去存放在 ICMP
报文中的时间值，即是往返时间。TTL - Time To Live的 字段指定 IP 包被路由器丢弃之前允许通过的最大网段数量。

    for /l %d in (1,1,255) do ping -c 1 192.168.0.%d | findstr TTL >> ping.txt
    ping 100.64.154.51

    正在 Ping 100.64.154.51 具有 32 字节的数据:
    来自 100.64.154.51 的回复: 字节=32 时间=309ms TTL=64
    来自 100.64.154.51 的回复: 字节=32 时间=27ms TTL=64
    来自 100.64.154.51 的回复: 字节=32 时间=2ms TTL=64
    来自 100.64.154.51 的回复: 字节=32 时间=277ms TTL=64

    100.64.154.51 的 Ping 统计信息:
        数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
    往返行程的估计时间(以毫秒为单位):
        最短 = 2ms，最长 = 309ms，平均 = 153ms


可以使用 trancert 进行外网连接过程的路由追踪，这个命令的全名是 Traceroute。根据 IP 协议包的定义，TTL 字段为 0 时会导致数据包被丢弃，通过向目的地址发送一系列的探测包，设置探测包的 TTL 初始值分别为 1,2,3…，这样就可以根据返回的超时通知 ICMP Time Exceeded Message 得到源地址与目的地址之间的每一跳路由信息。如发送第一个测试包，即 TTL 为 1 的 IP 数据报给目的主机，经过第一个路由器时，TTL 值被减为 0，则第一个路由器丢弃该数据报，并返回一份超时 ICMP 报文，于此得到了路径中第一个路由器的地址。然后再发送一份 TTL 值为 2 的数据报，便可得到第二个路由器的地址，依次测试就可以得到完整的路由跃点信息。

    tracert baidu.com

    通过最多 30 个跃点跟踪
    到 baidu.com [220.181.38.148] 的路由:

      1     1 ms     2 ms     1 ms  192.168.0.1
      2   255 ms     5 ms     3 ms  100.64.0.1
      3     6 ms     5 ms     7 ms  202.105.152.165
      4    24 ms     7 ms     7 ms  183.56.65.57
      5    41 ms    40 ms     *     202.97.30.133
      6     *        *        *     请求超时。
      7     *        *        *     请求超时。
      8    41 ms    40 ms    44 ms  220.181.17.22
      9     *        *        *     请求超时。
     10     *        *        *     请求超时。
     11     *        *        *     请求超时。
     12    39 ms    39 ms    40 ms  220.181.38.148

    跟踪完成。

对于有保密需求的路由器节点，它会禁止跟踪，保证这些核心设备 IP 不泄露，以免引起一些不必要的麻烦。这些保密节点一般也禁止 PING，不对 TTL 超时做响应处理，直接丢弃。MPLS - Multi-Protocol Labels Switch 多协议标签交换网络也会产生 Tracert 超时。


# 🚩 WireShark 抓包分析

网络分析软件大概经历了三个阶段：

- 抓包和解码阶段。早期的网络规模比较小、结构比较简单，软件先把网络上的数据包抓下来，然后进行解码以帮助协议设计人员分析软件通信的故障。
- 专家系统阶段。网络分析软件分析数据包特征和前后时间戳等关系，判断网络的数据流有没有问题，是哪一层的问题，有多严重。专家系统帮助分析网络故障并给出建议和解决方案。
- 网络管理工具阶段。网络分析软件作为网络管理工具，部署在网络中心，能长期监控，能主动管理网络，能排除潜在问题。

Wireshark 前身是 Ethereal，是一个网络封包分析软件，使用 WinPCAP 作为接口，直接与网卡进行数据报文交换，是目前全世界最广泛的网络封包分析软件之一。在过去，网络封包分析软件是非常昂贵的，或是专门属于盈利用的软件，Ethereal 的出现改变了这一切，它的最大特点就是免费、开源和多平台支持。在 GPL 通用许可证的保障范围底下，使用者可以以免费的代价取得软件与其源代码，并拥有针对其源代码修改及客制化的权利。由于 Wireshark 非常耗内存，建议不要将它用于分析流量很大的百兆网络，也不要用于千兆网络分析。Wireshark 能够对大部分局域网协议进行解析，具有界面简单、操作方便、实时显示捕获数据的优点。但 Wireshark 并不具有分析功能，当一个网络发生异常的时候，Wireshark 只会记录数据，它仅仅是一个测量工具，并不能操作网络，不发送数据包或者做其它的主动动作。

Sniffer 嗅探器是一种常用的收集有用数据方法，这些数据可以是用户的帐号和密码，可以是一些商用机密数据等等。Sniffer 可以作为能够捕获网络报文的设备，也是利用计算机的网络接口截获目的地为其他计算机的数据报文的一种工具。

NAI 的网络分析工具 Sniffer 长期以来是网络分析类软件的王牌。Sniffer 既有长期积累的经验又存在长期延续旧体系导致的问题。长期的发展使得 Sniffer 具有很强的专业分析能力，但是它一直延续 DOS、WIN95 时期的元素和较早期的技术，使得它只能在 Windows 平台下使用。 Sniffer 具有简单的往外发包的功能，同时有几个辅助测试小工具如：ping、finger、trace、dnslookup 等。Sniffer 功能涵盖了协议解析、网络监视和智能管理几个部分。协议解析很详细，尤其对广域网协议的解析非常全面，但扩展性不是很强，新协议支持更新较慢。Sniffer 的网络状态监视功能也很强大，可以监视流量、带宽、协议、应用响应时间、会话主机等信息，并且以图形的形式显示出来。Sniffer的专家功能非常细致，严格按照协议进行分层，每个细节都有考虑。另外它对网络异常状况进行了分级，使我们可以容易找到相应的问题。


## ⚡ 抓包原理

WireShark 之所以能抓到其它主机的包，是因为以集线器 HUB 为主流的共享式以太网，与现代的交换机 Switch 式以太网有区别，也是集线器与交换机工作原理的区别。

由于以太网等很多网络是基于总线方式连接的，常见集线器 HUB 连接的内部网，物理上是广播的。就是当一个机器发给另一个机器的数据，Hub 先接收然后数据包分发给其他的接线口连接的主机，所以在 HUB 下面同一网段的所有机器的网卡都能接收到数据。

交换机的内部单片程序比集线器强大，能记住每个口的 MAC - Media Access Control Address 地址，以后就该哪个机器接收就发往哪个口，而不是像共享 HUB 那样发给所有的口，所以交换机下只有该接收数据的机器的网卡能接收到数据，当然广播包还是发往所有口。显然集线器的工作模式使得两个机器传输数据的时候其他机器的端口也占用了，所以集线器决定了同一网段同一时间只能有两个机器进行数据通信；而交换机上连接的两个机器传输数据的时候其它机器的端口没有占用，所以别的口之间也可以同时传输。这就是交换机与 HUB 不同的两个地方，HUB 是同一时间只能一个机器发数据并且所有机器都可以接收，只要不是广播数据交换机同一时间可以有对机器进行数据传输并且数据是私有的。

数据在网络上是以很小的称为帧 Frame 的单位传输的帧由好几部分组成，不同的部分执行不同的功能。以太网的协议头的前 12 个字节存放的是源和目的主机的 MAC 地址，网络链路的设备需要根据它们来传送数据去向。以太网帧的其他部分存放实际的用户数据、TCP/IP的报文头或IPX报文头等。

帧通过特定的网络驱动程序进行成型，然后通过网卡发送到网线上。通过网络链路到达它们的目的机器，在目的机器的一端执行相反的过程。接收端机器的以太网卡捕获到这些帧，并告诉操作系统帧的到达，然后对其进行存储。就是在这个传输和接收的过程中，嗅探器会造成安全方面的问题。

通常在局域网 LAN - Local Area Network 中同一个网段的所有网络接口都有访问在物理媒体上传输的所有数据的能力，而每个网络接口都还应该有一个 MAC 硬件地址，该硬件地址不同于网络中存在的其他网络接口的硬件地址，同时，每个网络至少还要一个广播地址。在正常情况下，一个合法的网络接口应该只响应这样的两种数据帧：

- 帧的目标区域和本地网络接口相匹配的硬件地址。
- 帧的目标区域是广播地址。

网卡收到传输来的数据，其内部的单片机程序先接收数据头部的 MAC 目的地址，根据计算机上的网卡驱动程序设置的接收模式判断该不该接收，如果接收就产生中断信号通知 CPU，如果不该接收网卡就直接丢弃数包，计算机根本就不知道。CPU得到中断信号产生中断，操作系统就根据网卡驱动程序中设置的网卡中断程序地址调用驱动程序接收数据，驱动程序接收数据后放入信号堆栈让操作系统处理。

当采用 HUB 连接，用户发送一个报文时，这些报文就会发送给 LAN 上所有机器。在一般情况下，网络上所有的机器都可以监听到通过的数据包，但对不属于自己的报文则不予响应。换句话说，机器 A 不会捕获属于机器 B 的数据，而是简单的忽略这些数据。

如果局域网中某台机器的网络接口处于混杂 Promiscuous 模式即网卡可以接收其收到的所有数据包，那么它就可以捕获网络上所有的报文和帧，如果一台机器被配置成这样的方式，它就是一个嗅探器，包括监听数据包的软件。

当采用了交换机，那么正常情况下，其它主机的数据包就不会出现在本地的网络接口，那么也就无法嗅探其它主机的数据包，只能采用一些特殊的方法进行嗅探。

要想在交换机下接收别人的包，那就要让其发往你的机器 MAC 地址。交换机是通过分析接收到来自接线接口的数据后并记住其源 MAC 的，就像 ARP - Address Resolution Protocol 维护着一份 IP 与 MAC 映射表，交换机则维护一份交换机物理接线口与 MAC 的映射表，所以可以欺骗交换机的。可以发一个包设置源 MAC 是你想监听的目标机器的 MAC，那么交换机就把你机器的网线插的物理口与目标主机 MAC 对应起来了，以后发给目标主机的包就发往你的网线插口了，也就是你的网卡可以 Sniffer 到目标主机的数据报了。注意这物理口与 MAC 的映射表与机器的 ARP 表一样是动态刷新的，目标机器发包后交换机又记住他的口了，所以实际上是两个在竞争，这只能应用在只要收听少量包就可以的场合。

内部网基于 IP 的通信可以用 ARP 欺骗别人机器让其发送给你的机器，如果要想不影响原来两方的通信，可以欺骗两方，让其都发给你的机器再由你的机器转发，相当于做中间人，这用 ARP 编程很容易实现。并且现在很多设备支持远程管理，有很多交换机可以设置一个口监听别的口，不过这就要管理权限了。


## ⚡ WireShark 简明使用指南

使用 WireShark 抓包时，主要就是分解各种协议头部信息，抓去到的数据包列表会以各种协议层解析出结果。进入 WireShark 的主界面，首先显示的是网卡接口选择列表，选好接口进入抓包界面，除了常规的菜单栏、工具栏，最主要的还是过滤器工具 Filter Toolbar、抓包分组列表 Packet List、分组详情 Packet Detail 和分组字节流 Packet Bytes 四个视图。Packet Detail 视图显示的就是按照各种协议解析后的信息，Packet Bytes 显示的就是原始的字节码数据。因为正在捕捉的网络接口还有其他程序在传递数据包，所以 Packet List 显示的项目就很混乱，Filter Toolbar 过滤工具就是解决这个问题的。过滤条件可以针对各个协议里的数值来设置，比如 Ethernet 的 MAC -Media Access Control Address 物理地址 eth.addr，IP 协议的 IP 地址 ip.addr，TCP 的端口 tcp.port。流追踪 Follow 功能即过滤器使用  tcp/udp/tls/http.stream 对列表进行分组，可以分析相关数据包的前后关系，关相的流 stream 编号是相同的，如 tcp.stream eq 0 过滤器，通过 IP 地址加端口也可判断哪些 Packet 归属同一个流。

测试 WireShark 抓包分析可以使用浏览器做 HTTP 请求，或者 FreeFTPd 做 FTP 服务请求，开始抓包前要选好对应的网络接口设备，如本地的 FTP 服务器产生的数据流。例如对游戏武林客户端 ZMUD 抓包，这是文字模式角色扮演游戏 RPG - Role Playing Game，MUD - Multiple User Domain 多用户虚拟空间游戏，是以纯文字形式模拟的一种情景游戏。如在一个地图情景下，可以使用文字 east、west、south、north 来移动所扮演角色的位置。玩 MUD 的过程就如同是在阅读一本动态的小说，玩家们既是读者又是作者。

先获取游戏进程的 PID，再通过 netstat 获取进程监听的 IP 地址和端口信息。在 Windows 平台使用 findstr 过滤命令输出，Linux 系统可以使用更强大的 grep 来处理 ps 进程命令的输出。

    >tasklist -V | findstr Zmud.exe
    Zmud.exe                     19004 Console                    1     40,936 K Running         DESKTOP-CBSK60R\OCEAN                                   0:00:26 zMUD

    >netstat -ano | findstr 19004
      TCP    192.168.50.8:59679     39.106.76.47:4000      ESTABLISHED     19004

在 WireShark 的过滤器中对 IP 包设置过滤条件，也可以对 TCP 包设置端口为过滤条件，也可在分组详情视图中拖动看到的数据到过滤器工具栏中自带设置过滤器。

    eth.addr == 88:e6:28:99:fe:15
    ip.addr == 39.106.76.47
    tcp.port eq 4000

具体数据包结构参考后面 FTP命令和应答 小节的内容。


# 🚩 ARP RARP IARP
[ARP - Address Resolution Protocol](https://www.rfc-editor.org/rfc/rfc826.html)
[IARP - Inverse Address Resolution Protocol](https://www.rfc-editor.org/rfc/rfc2390.html)
[RARP - Reverse Address Resolution Protocol](https://www.rfc-editor.org/rfc/rfc903.html)
[IPv4 Address Conflict Detection](https://www.rfc-editor.org/rfc/rfc5227)
[DHCP - Dynamic Host Configuration Protocol](http://www.rfc-editor.org/rfc/rfc2131.html)


地址解析和逆向地址解析的需求

当网络设备发送数据包时，一般情况需要知道本端的上层协议地址如 IP 地址和硬件地址，以及对端的硬件地址和上层协议地址。但是在很多情况下，这个网络设备并不能完全知道这些信息。比如刚初始化的设备有可能只知道自己的 IP 地址和硬件地址，因为 MAC 内置在网卡芯片中，而 IP 地址可以通过 DHCP 服务器自动分配。

当它想要发送一个数据包到某个主机时（知道IP地址），但不知道其对应设备的 MAC 硬件地址。而在网络的链路层进行数据转发时，需要指定目的硬件地址，所以这就需要一定的协议来发现其对应的硬件地址，这就是 ARP 需要做的事。对于某些工作站只有硬件地址而没有 IP 地址，此时就需要 RARP 来解决这个 IP 地址申请的问题。

另外一种特殊的地址解析协议就是应用与帧中继网络中的 IARP，在帧中继网络中，需要配置和维护 IP 地址和虚电路号 DLCI 的一一映射关系。DLCI - Data Link Connection Identifier 即数据链路连接标识。帧中继协议是一种统计复用的协议，它在单一物理传输线路上能够提供多条虚电路，使用 DLCI 来进行标识。为了减轻网络管理人员的工作量，借助于 RARP 的工作原理出现了一种特殊的地址解析协议，它用于本端 IP 地址和硬件地址以及对端的硬件地址已知的情况下，求解对端的 IP 地址。


ARP 用于已知本端 IP 地址和 MAC 硬件地址以及对端 IP 地址的情况下，求解对端的IP地址，其工作原理简示如下：

- A 首先发送广播消息请求 IP 地址对应的目标主机 MAC 硬件地址，同时在该广播消息中还附带自己的 IP 地址和 MAC 硬件地址。
- B 接受到该广播包后，取出 A 的 IP 地址和硬件地址，将其添加到地址映射表中。同时返回单播响应，响应包中包含 B 的 IP 地址和 MAC 硬件地址。
- A 收到响应，取出 B 的 IP 地址和硬件地址，将其添加到地址映射表中。
- 之后设备可以正常进行数据传送。


RARP 用于已知对端 MAC 硬件地址，求解 IP 地址的情况，原理如下：

- A 首先发送广播消息请求 MAC 对应主机回复其 IP 地址信息，同时在该广播消息中还附带自己的 IP 及硬件地址。
- B 接受到该广播包后，返回单播响应，响应包中包含 B 的 IP 地址和硬件地址。
- A 收到响应，取出 B 的 IP 地址和硬件地址，将其添加到地址映射表中。
- 之后设备可以正常进行数据传送。


IARP 用于帧中继网络中求解 IP 地址和虚电路号的映射关系的动态维护，原理如下：

- A 首先发送单播消息请求其对应目的硬件地址主机回复其 IP 地址信息，同时在该广播消息中还附带自己的 IP 地址。
- B 接受到该广播包后，修改该请求数据包，从帧中继帧头中提取硬件地址放入请求包的源硬件地址域中，即可形成 A 的地址映射。然后形成单播响应，响应包中包含 B 的 IP 地址以及 A 的 IP 地址和硬件地址。
- A 收到响应，修改响应数据包，从帧头中取出硬件地址放入响应数据包的源硬件地址域中，然后将其添加到地址映射表中。
- 之后设备可以正常进行数据传送。



# 🚩 NAT
[NAT - The IP Network Address Translator](https://www.rfc-editor.org/rfc/rfc1631.html)
[Traditional NAT - Traditional IP Network Address Translator](https://www.rfc-editor.org/rfc/rfc3022)
[Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918.html)

网络地址转换协议 NAT - Network Address Translation 名符其实是 IPv4 地址池不够用的后悔药，IPv4 地址总量是 2^32 个不到 43 亿，但是有大量的联网设备不局限于个人电脑，联网设备都需要一个 IP 地址，大多数的网络之所以使用 NAT 还是因为这些网络有大量设备连接互联网的需求。

事实上一般用户几乎申请不到整段的 C 类 IP 地址，在一些互联网服务提供商 ISP - Internet Service Provider  那里，即使是拥有几百台计算机的大型局域网用户申请 IP 地址，所分配的也不过只有几个或十几个 IP 地址。这么少的 IP 地址池根本无法满足持续增涨的网络用户的需求，于是产生了 NAT 协议来解决没有申请到互联网 IP 地址的设备接入互联网问题。

这种方法需要在专用网连接到因特网的路由器上安装 NAT 软件，这样的路由器叫做 NAT 路由器，它至少有一个有效的公网 IP 地址。这样，所有使用本地地址的主机在和外界通信时，都要在NAT路由器上将其本地地址转换公网 IP 地址才能和因特网连接。

互联网数字分配机构 IANA - The Internet Assigned Numbers Authority 在 RFC 1918 文档中说明为私有网络预留出了三个 IP 地址块，这三个范围内的地址不会在因特网上被分配：

     10.0.0.0        -   10.255.255.255  (10/8 prefix)
     172.16.0.0      -   172.31.255.255  (172.16/12 prefix)
     192.168.0.0     -   192.168.255.255 (192.168/16 prefix)


## ⚡ NAT 原理

简单的理解就是，NAT 将一台设备的 LAN 口 IP 地址作为内网用户接入互联网的网关，再将这些内网用户使用的内网 IP 地址转换为能够在互联网上路由的公网 IP 地址，这个转换并不是局域网 IP 到公网 IP 的转换，而是通过关系映射，将局域网的数据包地址及端口对应到一个公网 IP 地址及端口上。 NAT 有几种形式：

- Static NAT - 静态转换 NAT
- Dynamic NAT - 动态转换 NAT，也叫 Pooled NAT
- NAPT - Network Address Port Translation，网络地址端口转换方式 Port-Level NAT  
- SNAT - Source NAT 源地址 NAT
- DNAT - Destination NAT 目的地址 NAT

静态转换是指将内部网络的私网 IP 地址转换为公网 IP 地址，IP 地址对是一对一静态不变的，某个私有 IP 地址只转换为某个公有 IP 地址。借助于静态转换，可以实现外部网络对内部网络中某些特定设备，如私网部署得服务器的访问。

动态转换是指将内部网络的私有 IP 地址转换为公用 IP 地址时，IP 地址是随机的，所有被授权访问上 Internet 的私有IP 地址可随机转换为任何指定的合法 IP 地址。也就是说，只要指定哪些内部地址可以进行转换，以及用哪些合法地址作为外部地址时，就可以进行动态转换。动态转换可以使用多个合法外部地址集，当 ISP 提供的合法 IP 地址略少于网络内部的计算机数量时，可以采用动态转换的方式。动态 NAT，是建立内部本地地址和内部全局地址池的临时映射关系，过一段时间没有用就会删除映射关系。

网络地址端口转换 NAPT - Network Address Port Translation 是使用最普遍的一种转换方式，在家庭的网关中也主要使用该方式。NAPT 就是端口多路复用 PAT - Port address Translation，是指改变外出数据包的源端口并进行端口转换，即端口地址转换。采用端口多路复用方式。内部网络的所有主机均可共享一个合法外部 IP 地址实现对 Internet 的访问，从而可以最大限度地节约 IP 地址资源。同时，又可隐藏网络内部的所有主机，有效避免来自 Internet 的攻击。因此，目前网络中应用最多的就是端口多路复用方式。

DMZ - Demilitarized Zone 即隔离区，也称非军事化区，它是为了解决安装防火墙后外部网络不能访问内部网络服务器的问题，而设立的一个非安全系统与安全系统之间的缓冲区，这个缓冲区位于企业内部网络和外部网络之间的小网络区域内，在这个小网络区域内可以放置一些必须公开的服务器设施，如企业 Web 服务器、FTP 服务器等，这些主机称为虚拟主机。可以通过家庭路由器来配置 DMZ 服务器，像花生壳软件的动态域名解析就是基于 NAT 转发实现的内网服务器，无需公网 IP 只要能连接互联网就可以。

Source NAT 修改数据包的源地址，改变第一个数据包的来源地址，它永远会在数据包发送到网络之前完成，数据包伪装就是一具体例子。Destination NAT 修改数据包的目的地址，与 SNAT 相反，如平衡负载、端口转发和透明代理就是属于 DNAT。

NAT 协议的引入不仅能解决 IP 地址不足的问题，而且还能够有效地隐藏并保护网络内部的计算机避免来自网络外部的攻击。NAT 协议实现了多设备共享同一个公网 IP 的宽带，这是 NAT 主机的最大功能。其次，NAT 具有一定的安全防护功能，NAT 网关内网的 PC 联机到 Internet 上面时，外网看到的 IP 是 NAT 网关主机的公共 IP，内网 PC 得到一定程度的安全防护，外界在进行端口扫描 portscan 的时候，就侦测不到源内网端的 PC。

举例解析 NAT 的原理，假设以下网络，NAT 网关拥有公网端口的 IP 地址 22.20.20.1，私网 LAN 端口 IP 地址 192.168.0.1 是作为私网的网关 Gateway 保留地址。私网其中一台主机 A 192.168.0.2 向公共网中的主机 S 202.20.65.7 通信的流程：

                                   +--+  
                                   |--|  
                                  /____\ 
                              C 22.20.20.1
                                    |
            WAN --------------------|--------------------------
                         \ | /      |
                      +-------------+------------+
                      |   Stub Router with NAT   |
                      |       192.168.0.1        |
                      +----+-----------------+---+
                           |                 |
            LAN -----------|-----------------|-----------------
                +----------+-----------------+------------+
                |          |                 |            |
                |         +--+             +--+           |
                |         |--|             |--|           |
                |        /____\           /____\          |
                |    A 192.168.0.2     B 192.168.0.3       |
                +-----------------------------------------+

1. A 向 S 发送一个 IP 包 (192.168.0.2 => 202.20.65.7)
2. Gateway NAT 修改 IP 包进行地址影射 (22.20.20.1 => 202.20.65.5)
3. S 响应 A 一个 IP 包 (202.20.65.5 => 22.20.20.1) 
4. Gateway NAT 根据记录的映射规则，修改 IP 包将地址目标地址影射到 A 主机 (202.20.65.5 => 192.168.0.2)

IP 包首先经过 NAT 网关，IP 包的 Src IP 会被 NAT 替换成 Gateway 的公共 IP 22.20.20.1 并转发到公共网，此时 IP 包已经不含任何私有网 IP 的信息。公网主机 202.20.65.5 收到 IP 包后进行响应，相应 IP 包将被发送到 NAT Gateway，并由它转递给私网的 A 主机。这时，NAT Gateway 会将 IP 包的目的 IP 转换成私有网中 A 主机的 IP 并将 IP 包转发给私有网由目标主机 A 接受。对于通信双方而言，这种地址的转换过程是完全透明的。

如果内网主机发出的请求包未经过 NAT，当公网主机收到请求包进行响应时，IP 包中的目的地址就是私网 IP 地址 192.168.0.2，在 Internet 上是无法正确送达的，最终导致连接失败。

私网存在多主机，NAT Gateway 在收到响应包后就需要判断将数据包转发给谁。对应子网内仅有少量客户机的情可以用静态 NAT 手工指定；有多台主机时，并且可能存在多台主机同时使用一样的端口访问公网的同一台主机，这时候就需要连接跟踪 Connection track。NAT 软件维护一份 Track Table，在私网主机发出请求时记录下私网主机 IP 地址及端口正在连接的公网主机 IP 地址。

私网主机访问同一公网主机时使用的源端口不同，那么在 Track Table 里加入端口信息即可区分。复杂一点的情况是多台私网主机使用同样的源端口访问公网同一台主机，那么 NAT 在执行 SNAT 或 DNAT 修 IP 地址的同时还要对源端口做一个映射记录做区别，这样在接收到公网主机的响应时就能找到回家的路。

重叠 Overlapping NAT

当内部网络也使用公网注册地址时，如果仍使用标准的静态或者动态NAT转换，则可能使得转换的内网地址与外网中合法地址冲突，使数据包又返回到了本地网络。这时我们就要使用重叠网络 Overlapping Network 的 NAT 转换方案了，把数据包中的目的地址转换成与外网不在同一网段的全局地址。

使用重叠 NAT 可以实现内、外部网络都使用注册 IP 地址情况下的地址转换。这里的重叠其实就是指内、外部网络使用的IP地址段重叠，因为都是公网注册IP地址。

两个需要互联的私有网络分配了同样 IP 地址，或者一个私有网络和公有网络分配了同样的全局IP地址，都存在这种情况。两个重叠地址的网络主机之间是不可能通信的，因为它们相互认为对方的主机在本地网络。

这个流程可以用下面流程图 Figure 3: Network Address Port Translation (NAPT) Operation。


            \ | /                 .                                /
       +---------------+  WAN     .           +-----------------+/
       |Regional Router|----------------------|Stub Router w/NAT|---
       +---------------+          .           +-----------------+\
                                  .                      |         \
                                  .                      |  LAN
                                  .               ---------------
                            Stub border

                Figure 1: Traditional NAT Configuration



                                \ | /
                              +---------------+
                              |Regional Router|
                              +-^-----------V-+
                            WAN |           | WAN
                                |           |
            Stub A .............|....   ....|............ Stub B
                                |           |
              {s=198.76.29.7}   |           |  {s=198.76.29.7}
              {d=198.76.28.4}   |           |  {d=198.76.28.4}
                +---------------^-+       +-V---------------+
                |Stub Router w/NAT|       |Stub Router w/NAT|
                +---------^-------+       +-----V-----------+
                          |                     |
                     LAN  |                LAN  |
                ----------|--             ------|------
                          |                     |
        {s=10.33.96.5 }   |                     |   {s=198.76.29.7}
        {d=198.76.28.4}  +--+                 +--+  {d=10.81.13.22}
                         |--|                 |--|
                        /____\               /____\
                      10.33.96.5           10.81.13.22

                  Figure 2: Basic NAT Operation


                                     \ | /
                                   +-----------------------+
                                   |Service Provider Router|
                                   +-----------------------+
                                 WAN |
                                     |
                 Stub A .............|....
                                     |
       {s=138.76.28.4,sport=1024} ^  |  v {s=138.76.29.7, sport = 23, }
       {d=138.76.29.7,dport=23  } ^  |  v {d=138.76.28.4, dport = 1024}
                         +------------------+
                         |Stub Router w/NAPT|
                         +------------------+
                           |
                           |  LAN
     --------------------------------------------
        |      {s=10.0.0.10,sport=3017} ^  |  v {s=138.76.29.7, sport=23}
        |      {d=138.76.29.7,dport=23} ^  |  v {d=10.0.0.10, dport=3017}
        |                                  |
       +--+      +--+                    +--+
       |--|      |--|                    |--|
      /____\    /____\                  /____\
     10.0.0.1  10.0.0.2   .....        10.0.0.10

      Figure 3: Network Address Port Translation (NAPT) Operation



NAT 协议的应用主要可以实现以下几个功能：数据包伪装、平衡负载、端口转发和透明代理。

- 数据伪装: 可以将内网数据包中的地址信息更改成统一的对外地址信息，不让内网主机直接暴露在因特网上，保证内网主机的安全。同时，该功能也常用来实现共享上网。

- 端口转发: 当内网主机对外提供服务时，由于使用的是内部私有 IP 地址，公网无法直接访问，也就无法直接对公网提供服务。因此，需要在网关上进行端口转发，将特定服务的数据包转发给内网主机。

- 负载平衡: 目的地址转换 DNAT 可以通过修改目标 IP 地址将 IP 包重定向到任意的公网主机，这样就可以在配置公网多配置一些服务器来提供服务，由 NAT 进行随机选定连接，这样就可以实现多服务器的负载平衡，避免单一服务器负载过重。

- 失效终结: 目的地址转换 DNAT 可以用来提供高可靠性的服务。如果一个系统有一台通过路由器访问的关键服务器，一旦路由器检测到该服务器当机，DNAT 可以透明地把连接转移到后备服务器上。

- 透明代理: NAT 可以把连接到因特网的 HTTP 连接重定向到一个指定的 HTTP 代理服务器以缓存数据和过滤请求。一些因特网服务提供商就使用这种技术来减少带宽的使用，而不用让他们的客户配置他们的浏览器支持代理连接。


## ⚡ NAT 配置

在配置 NAT 前需要了解内部本地地址和内部全局地址的分配情况。根据不同的需求，执行以下不同的配置任务，一般配置任务有以下这些：

- 内部源地址 NAT 配置
- 内部源地址 NAPT 配置
- 重叠地址 NAT 配置
- TCP 负载均衡

当内部网络需要与外部网络通讯时，需要配置内部源地址静态 NAT，将内部私有 IP 地址转换成全局唯一 IP 地址。可以配置静态或动态的 NAT 来实现互联互通的目的，或者同时配置静态和动态的 NAT。

要配置静态NAT，在全局配置模式中执行以下命令：

    ip nat inside source static local-address global-address [permit-inside] [vrf vrf_name]
    定义内部源地址静态转换关系
    interface interface-type interface-number
    进入接口配置模式
    ip nat inside
    定义该接口连接内部网络
    interface interface-type interface-number
    进入接口配置模式
    ip nat outside
    定义该接口连接外部网络

以上配置为较简单配置，可以配置多个Inside和outside接口。

要配置动态NAT，在全局配置模式中执行以下命令：

    ip nat pool address-pool start-address end-address {netmask mask | prefix-length prefix-length}
    定义全局IP地址池
    access-list access-list-number permit ip-address wildcard
    定义访问列表，只有匹配该列表的地址才转换
    ip nat inside source list access-list-number pool address-pool [vrf vrf_name]
    定义内部源地址动态转换关系
    interface interface-type interface-number
    进入接口配置模式
    ip nat inside
    定义接口连接内部网络
    interface interface-type interface-number
    进入接口配置模式
    ip nat outside
    定义接口连接外部网络

需要注意的是：访问列表的定义，使得只在列表中许可的源地址才可以被转换，必须注意访问列表最后一个规则是否定全部。访问列表不能定义太宽，要尽量准确，否则将出现不可预知的结果。
配置内部源地址NAPT
传统的NAT一般是指一对一的地址映射，不能同时满足所有的内部网络主机与外部网络通讯的需要。使用NAPT(网络地址端口转换)，可以将多个内部本地地址映射到一个内部全局地址。
NAPT分为静态NAPT和动态NAPT。静态NAPT一般应用在将内部网指定主机的指定端口映射到全局地址的指定端口上。而前一小节提及的静态NAT，是将内部主机映射成全局地址。

要配置静态NAPT，在全局配置模式中执行以下命令：

    ip nat inside source static {UDP | TCP} local-address port global-address port [permit-inside] [vrf vrf_name]
    定义内部源地址静态转换关系
    interface interface-type interface-number
    进入接口配置模式
    ip nat inside
    定义该接口连接内部网络
    interface interface-type interface-number
    进入接口配置模式
    ip nat outside
    定义接口连接外部网络

前面所述的动态内部源地址转换，已经自动完成内部源地址动态NAPT，配置是在全局配置模式中执行以下命令：

ip nat pooladdress-pool start-address end-address {netmask mask | prefix-length prefix-length}
定义全局IP地址池，对于NAPT，一般就定义一个IP地址
access-list access-list-number permit ip-address wildcard
定义访问列表，只有匹配该列表的地址才转换
ip nat inside source list access-list-number {[pool address-pool] | [interface interface-type interface-number]} overload [vrf vrf_name]
定义源地址动态转换关系，overload有和没有是一样的效果，仅是兼容主流厂商的配置。
interface interface-type interface-number
进入接口配置模式
ip nat inside
定义接口连接内部网络
interface interface-type interface-number
进入接口配置模式
ip nat outside
定义接口连接外部网络

NAPT 可以使用地址池中的IP地址，也可以直接使用接口的IP地址。一般来说一个地址就可以满足一个网络的地址转换需要，一个地址最多可以提供64512个NAT地址转换。如果地址不够，地址池可以多定义几个地址。

重叠 Overlapping NAT 配置

分为两个部分内容：1)内部源地址转换配置，如何配置请参见上文；2)外部源地址转换配置，只有与内部网络地址重叠的外部网络需要配置外部源地址转换，外部源地址转换可以采用静态NAT配置或动态NAT配置。

要配置外部源地址的静态NAT，在全局配置模式中执行以下命令：

    ip nat outside source static global-address local-address [vrf vrf_name]
    定义外部源地址静态转换关系
    interface interface-type interface-number
    进入接口配置模式
    ip nat inside
    定义该接口连接内部网络
    interface interface-type interface-number
    进入接口配置模式
    ip nat outside
    定义接口连接外部网络

配置NAT实现TCP负载均衡

当内部网络某台主机TCP流量负载过重时，可用多台主机进行TCP业务的均衡负载。这时，可以考虑用NAT来实现TCP流量的负载均衡。NAT创建了一台虚拟主机提供TCP服务，该虚拟主机对应内部多台实际的主机，然后对目标地址进行轮询置换，达到负载分流的目的。要配置目标地址轮询转换，在全局配置模式中执行以下命令：

    ip nat pool address-pool start-address end-address {netmask mask | prefix-length prefix-length}
    定义IP地址池，包含所有实际主机地址
    access-list access-list-number
    permitip-address wildcard
    定义访问列表，只匹配虚拟主机地址。注意应该使用匹配目标IP的扩展ACL。
    ip nat inside destination list
    access-list-number pool address-pool [vrf vrf_name]
    定义内部目标地址动态转换关系
    interface interface-type
    interface-number
    进入接口配置模式
    ip nat inside
    定义接口连接内部网络
    interface interface-type
    interface-number
    进入接口配置模式
    ip nat outside
    定义接口连接外部网络

配置特殊协议网关

默认情况下，特殊协议网关是全部打开的，通过命令可以关闭指定特殊协议网关。除了ftp和dns带有参数，其他每个特殊协议都只是开关命令。在全局配置模式中执行以下命令：

    no ip nat translation ftp
    关闭FTP特殊协议网关
    ip nat translation ftp
    开启FTP特殊协议网关，默认端口21
    ip nat translation ftp 2121
    开启FTP特殊协议网关，指定端口2121


# 🚩 HTTP
[RFC 1945 - Hypertext Transfer Protocol -- HTTP/1.0](http://www.rfc-editor.org/info/rfc1945)
[RFC 2616 - Hypertext Transfer Protocol -- HTTP/1.1](http://www.rfc-editor.org/rfc/rfc2616.html)
[RFC 2818 - HTTP Over TLS](https://www.rfc-editor.org/rfc/rfc2818.html)
[RFC 6101 - The Secure Sockets Layer (SSL) Protocol V3.0](https://www.rfc-editor.org/rfc/rfc6101.html)

超文本传输协议 HTTP - HyperText Transfer Protocol 是互联网上应用最为广泛的一种网络协议，所有的 WWW 文件都必须遵守这个标准，设计 HTTP 最初的目的是为了提供一种发布和接收 HTML 页面的方法。

HTTPS - HTTP over Secure Socket Layer，简单讲是 HTTP 的安全版，即原本 HTTP 数据经过 SSL 协议层处理再传输。

SSL - Secure Sockets Layer 叫做安全套接层，它是在上世纪90年代中期，由网景公司设计的，网景公司不光发明了 SSL，还发明了很多 Web 的基础设施——比如 CSS 样式表和 JavaScript 脚本。SSL 加入，使得互联网上使用明文的 HTTP 协议具有非常高的安全性，原先明文传输条件下存在的缺点得到了抑制，比如传输内容会被嗅探偷窥和篡改。

到了 1999 年，SSL 因为应用广泛已经成为互联网上的事实标准，IETF 就在那年把 SSL 标准化改名称为 TLS - Transport Layer Security 传输层安全协议。很多相关的文章都把这两者并列称呼 SSL/TLS，因为这两者可以视作同一个东西的不同阶段，TLS 比 SSL 要先进。

SSL是Netscape开发的专门用户保护Web通讯的，目前版本为3.0。最新版本的TLS 1.0是IETF(工程任务组)制定的一种新的协议，它建立在SSL 3.0协议规范之上，是SSL 3.0的后续版本。两者差别极小，可以理解为SSL 3.1，它是写入了RFC的。 


# 🚩 SMTP 与电子邮件
- TCP/IP Illustrated Vol. 3: TCP for Transactions, HTTP, NNTP, and the Unix Domain Protocols - Addison-Wesley https://bookos-z1.org/book/3484596/f7e9cc
- TCP/IP Illustrated vol. 2: The Implementation Gary R. Wright, W. Richard Stevens https://bookos-z1.org/book/3409711/6b57bd
- TCP/IP Illustrated Vol. 1: The Protocols Kevin R. Fall, W. Richard Stevens - Ch 28. SMTP: Simple Mail Transfer Protocol https://bookos-z1.org/book/1274750/4ba80a
- Illustrated TCPIP: A Graphic Guide to the Protocol Suite by Matthew Naugle - Ch 240 Simple Mail Transfer Protocol https://bookos-z1.org/book/463817/72bf4a
[Simple Mail Transfer Protocol](https://www.rfc-editor.org/rfc/rfc2821.html)
[RFC 918 - POP(Post Office Protocol)](https://www.rfc-editor.org/info/rfc918)
[RFC 1939 - POP3(Post Office Protocol Ver3)](https://www.rfc-editor.org/info/rfc1939)
[RFC 1730 - IMAP4(Internet Mail Access Protocol Ver4)](http://www.rfc-editor.org/info/rfc1730)

世界上的第一封电子邮件是在 1969 年 10 月由 计算机科学家 Leonard K.教授发给他的同事的一条简短消息。

简单邮件传输协议 SMTP - Simple Mail Transfer Protocol 是一组用于由源地址到目的地址传送邮件的规则，由它来控制信件的中转方式。SMTP 协议 基于 TCP 工作，属于 TCP/IP 协议簇，它帮助每台计算机在发送或中转信件时找到下一个目的地。通过 SMTP 协议所指定的服务器，就可以把 E-mail 寄到收信人的服务器上了，整个过程只要几分钟。SMTP 服务器则是遵循 SMTP 协议的发送邮件服务器，用来发送或中转发出的电子邮件。

跟大多数应用层协议一样，SMTP 也存在两个 TCP 端：在发信人的邮件服务器上执行的客户端和在收信人的邮件服务器上执行的服务器端。SMTP 的客户端和服务器端同时运行在每个邮件服务器上。当一个邮件服务器在向其他邮件服务器发送邮件消息时，它是作为 SMTP 客户在运行，中间会进行 DNS 定位到邮箱服务器的地址。

邮件系统有严重的商业化垃圾邮件问题，商家利用收集到的邮箱地址，滥发广告信息或其它不可描述内容。其中一个收集邮箱地址的手段就是通过群邮广发，所有跟进转发的都是被收集的对象。

流行的邮箱系统都会有严格的 SMTP 认证机制，简单地说就是要求必须在提供了账户名和密码之后才可以登录 SMTP 服务器，增加 SMTP 认证的目的是为了使用户避免受到垃圾邮件的侵扰。

The SMTP design can be pictured as:

               +----------+                +----------+
   +------+    |          |                |          |
   | User |<-->|          |      SMTP      |          |
   +------+    |  Client- |Commands/Replies| Server-  |
   +------+    |   SMTP   |<-------------->|    SMTP  |    +------+
   | File |<-->|          |    and Mail    |          |<-->| File |
   |System|    |          |                |          |    |System|
   +------+    +----------+                +----------+    +------+
                SMTP client                SMTP server

通常，人们使用本地使用软件如 Foxmail/Outlook 编写邮件，先通过邮局协议  POP3 或 IMAP4 上传到 SMTP 服务器，再发送到接收者的 SMTP 服务器中。

SMTP 是一种基于文本的电子邮件传输协议，类似 HTTP，是在因特网中用于在邮件服务器之间交换邮件的协议。SMTP是应用层的服务，可以适应于各种网络系统。

SMTP 的命令和响应都是基于文本，以命令行为单位，换行符为 CR/LF。响应信息一般只有一行，由一个 3 位数的状态码开始，后面可附上很简短的文字说明。SMTP 要经过建立连接、传送邮件和释放连接 3 个阶段：

　　（1）建立 TCP 连接。
　　（2）客户端向服务器发送 HELO 命令以标识发件人自己的身份，然后客户端发送 MAIL 命令准备传输邮件。
　　（3）服务器端以 OK 作为响应，表示准备接收。
　　（4）客户端发送 RCPT 命令。
　　（5）服务器端表示是否愿意为收件人接收邮件。
　　（6）协商结束，发送邮件，用命令 DATA 发送邮件内容。
　　（7）结束此次发送，用 QUIT 命令退出。

SMTP 服务器基于 DNS 中的邮件交换（MX）记录路由电子邮件。电子邮件系统发邮件时是根据收信人的地址后缀来定位邮件服务器的。SMTP 通过用户代理程序 UA 完成邮件的编辑、收取和阅读等功能；通过邮件传输代理程序 MTA 将邮件传送到目的地。


 4.1 SMTP Commands ................................................ 29
   4.1.1 Command Semantics and Syntax ............................... 29
   4.1.1.1 Extended HELLO (EHLO) or HELLO (HELO) ................... 29
   4.1.1.2 MAIL (MAIL) .............................................. 31
   4.1.1.3 RECIPIENT (RCPT) ......................................... 31
   4.1.1.4 DATA (DATA) .............................................. 33
   4.1.1.5 RESET (RSET) ............................................. 34
   4.1.1.6 VERIFY (VRFY) ............................................ 35
   4.1.1.7 EXPAND (EXPN) ............................................ 35
   4.1.1.8 HELP (HELP) .............................................. 35
   4.1.1.9 NOOP (NOOP) .............................................. 35
   4.1.1.10 QUIT (QUIT) ............................................. 36

4.2  SMTP Replies ................................................ 40
   4.2.1 Reply Code Severities and Theory ........................... 42
   4.2.2 Reply Codes by Function Groups ............................. 44
   4.2.3 Reply Codes in Numeric Order .............................. 45
   4.2.4 Reply Code 502 ............................................. 46
   4.2.5 Reply Codes After DATA and the Subsequent <CRLF>.<CRLF> .... 46


## ⚡ Reply Codes in Numeric Order

      211 System status, or system help reply
      214 Help message
         (Information on how to use the receiver or the meaning of a
         particular non-standard command; this reply is useful only
         to the human user)
      220 <domain> Service ready
      221 <domain> Service closing transmission channel
      250 Requested mail action okay, completed
      251 User not local; will forward to <forward-path>
         (See section 3.4)
      252 Cannot VRFY user, but will accept message and attempt
         delivery
         (See section 3.5.3)

      354 Start mail input; end with <CRLF>.<CRLF>

      421 <domain> Service not available, closing transmission channel
         (This may be a reply to any command if the service knows it
         must shut down)
      450 Requested mail action not taken: mailbox unavailable
         (e.g., mailbox busy)
      451 Requested action aborted: local error in processing
      452 Requested action not taken: insufficient system storage

      500 Syntax error, command unrecognized
         (This may include errors such as command line too long)
      501 Syntax error in parameters or arguments
      502 Command not implemented (see section 4.2.4)
      503 Bad sequence of commands
      504 Command parameter not implemented
      550 Requested action not taken: mailbox unavailable
         (e.g., mailbox not found, no access, or command rejected
         for policy reasons)
      551 User not local; please try <forward-path>
         (See section 3.4)
      552 Requested mail action aborted: exceeded storage allocation
      553 Requested action not taken: mailbox name not allowed
         (e.g., mailbox syntax incorrect)
      554 Transaction failed  (Or, in the case of a connection-opening
          response, "No SMTP service here")

## ⚡ POP POP2 POP3
[Simple Mail Transfer Protocol](https://www.rfc-editor.org/rfc/rfc2821.html)
[RFC 918 - POP(Post Office Protocol)](https://www.rfc-editor.org/info/rfc918)
[RFC 937 - POP2(Post Office Protocol V2)](https://www.rfc-editor.org/info/rfc937)
[RFC 1939 - POP3(Post Office Protocol V3)](https://www.rfc-editor.org/info/rfc1939)
[RFC 1730 - IMAP4(Internet Mail Access Protocol Ver4)](http://www.rfc-editor.org/info/rfc1730)

SMTP 是关注邮件如何从发件人源地址传输到收件人目的地址传输邮件的规范，和 POP3 或 IMAP4 协议关注电子邮件客户端如何处理邮件服务器上的邮件不同。

POP 邮局协议的全称是 Post Office Protocol 用于电子邮件的接收，典型地以离线方式工作，它使用 TCP 110 端口。POP 是因特网电子邮件的第一个离线协议标准，POP3 允许用户从服务器上把邮件存储到本地主机上，同时删除保存在邮件服务器上的邮件。

MAP - Internet Mail Access Protocol 交互式邮件存取协议跟 POP3 类似邮件访问标准协议。不同的是，开启了 IMAP 后，电子邮件客户端收取的邮件仍然保留在服务器上，同时在客户端上的操作都会反馈到服务器上，如：删除邮件，标记已读等，服务器上的邮件也会做相应的动作。所以无论从浏览器登录邮箱或者客户端软件登录邮箱，看到的邮件以及状态都是一致的。

   The Normal Scenario

           Client                    Server
           ------                    ------
                                Wait for Connection
      Open Connection  -->
                           <--  +OK
                                Wait for Command
      USER Fred        -->
                           <--  +OK
                                Wait for Command
      PASS password    -->
                           <--  +OK
                                Wait for Command
      RDEL mailbox     -->      (open and lock mailbox)
                           <--  #xxx
                                Wait for Command
      RCEV             -->
                           <--  (send a copy of mail)
                                Wait for Command
      RCVD             -->      (deletes mail from mailbox, unlock
                                and close mailbox)
                           <--  +OK
                                Wait for Command
      QUIT             -->
                           <--  +OK
      Close connection --> <--  Close connection
                                Wait for Connection (go back to start)


   Summary of Commands and Replies

      Commands                          Replies
      --------                          -------
      USER name                         +OK
      PASS password                     -Error
      RETR mailbox                      #xxx
      RDEL mailbox
      RCEV
      RCVD
      QUIT
      NOOP
      RSET

   Commands

      USER name

         This command identifies the user to the server.  It must be
         followed by the PASS command.

            Possible responses:  "+OK" or "-ERR"

      PASS password

         The PASS command carries the password authenticating this user.
         Together the USER name and PASS password are used by the server
         to control access to the mailboxes.

            Possible responses:  "+OK" or "-ERR"

      RETR mailbox

         This command begins a mail reading transaction.  The RETR
         command is used to read all the messages in a mailbox without
         deleting them.  It must be followed by the RCEV command.

            Possible responses:  "#xxx" or "-ERR"

      RDEL mailbox

         This command begins a mail reading transaction.  The RDEL
         command is used to read all the messages in a mailbox and
         delete them.  It must be followed by the RCEV command.

            Possible responses:  "#xxx" or "-ERR"

      RCEV

         This command confirms that the client is ready to receive the
         mail data.  It must be followed by the RCVD command.

            Possible responses:  "+OK" or (connection aborted)

      RCVD

         This command confirms that the client has received and accepted
         the mail.  The RCVD command ends the mail reading transaction.
         In the case of the RDEL transaction, it is possible that the
         mail is not necessarily deleted.  This is indicated by an error
         reply.

            Possible responses:  "+OK" or "-ERR"

      QUIT

         This command indicates the client is done with the session.
         The server sends an OK response and then closes the connection.

            Possible responses:  "+OK" then Close

      NOOP

         This is the no operation command.  It causes no action on the
         part of the server except an OK response.

            Possible response:  "+OK"

      RSET

         This command causes the server to abort the current transaction
         and return to waiting for a command (one of RDEL, RETR, QUIT,
         NOOP, or RSET).  When aborting a transaction the server must
         take care to properly close and unlock the mailbox.

            Possible response:  "+OK"

Combined Flow Diagram

             +---+      +---+       +---+       +---+       +---+
       Open  |   | +OK  |   |       |   | +OK   |   |       |   | +OK
       ----->| S |--+-->| C |------>| S |------>| C |------>| S |---->+
             |   |  ^   |   | USER  |   |       |   | PASS  |   |     |
             +---+  |   +---+       +---+       +---+       +---+     |
                    |                 | -ERR                  | -ERR  |
                    |                 V                       V       |
       +<-----------+<----------------+<----------------------+       |
       |                                                              |
       V      +---+       +---+                                       |
       +----->|   | QUIT  |   | +OK                                   |
              | C |------>| S |----->Close                            |
       +----->|   |       |   |                                       |
       ^      +---+       +---+                                       |
       |                                                              V
       +<-------------------------------------------------------------+
       |                                                              ^
       |  +---+     +---+      +---+     +---+     +---+     +---+    |
       |  |   |RETR |   | #xxx |   |RECV |   |DATA |   |RCVD |   |+OK |
       +->| C |---->| S |----->| C |---->| S |---->| C |---->| S |--->+
       |  |   | or  |   |      |   |     |   |     |   |     |   |    ^
       |  +---+ RDEL+---+      +---+     +---+     +---+     +---+    |
       |              | -ERR     |         |         |         | -ERR |
       |              V          |         V         |         |      |
       +<-------------+          |       Abort       |         |      |
       |                         V                   V         V      |
       |        +<---------------+-------------------+         +----->+
       |        V
       |      +---+       +---+
       |      |   | RSET  |   | +OK
       +----->| C |------>| S |----->+
       |      |   |       |   |      |
       |      +---+       +---+      |
       |                             V
       +<----------------------------+
       |                             ^
       |      +---+       +---+      |
       |      |   | NOOP  |   | +OK  |
       +----->| C |------>| S |----->+
              |   |       |   |
              +---+       +---+


Client State Diagram


                          |                    ^  + BYE
                          |  Open              |  -----
                          |           Greet    |  Close
                          V           -----    |
                      +-------+       QUIT    +-------+
                      | CALL  |-------------->| EXIT  |
                      +-------+               +-------+
                          |                       ^
                          |  Greet                |
                          |  -----                |
                          |  HELO                 |
              +---->+     |                       |
        #NNN  ^     |     |        #NNN           |
        ----  |     V     V        ----           |
        FOLD  |    +-------+       QUIT           |
              +<---| NMBR  |--------------------->+
                   +-------+                      ^
                    ^     |                       |
                    |     |  #NNN                 |
                    |     |  ----                 |
              =CCC  |     |  READ                 |
              ----  |     |                       |
              FOLD  |     |        =CCC           |
                    |     V        ----           |
        =CCC  +--->+-------+       QUIT           |
        ----  ^    | SIZE  |--------------------->+
        READ  +<---+-------+
                    ^     |
                    |     |  =CCC
              data  |     |  ----
              ----  |     |  RETR
              ack   |     |
                    |     V
                   +-------+
                   | XFER  |
                   +-------+


Server State Diagram


                       +<----------------------+  Close
                       |                       |  -----
               Listen  |                       |  Close
                       V                       |
                   +-------+                  +-------+
                   | LSTN  |                  | DONE  |
                   +-------+                  +-------+
                       |                          ^
                       |  Open                    |
                       |  -----                   |
                       |  Greet                   |
                       |                          |
                       |           QUIT           |
                       V           -----          |
                   +-------+       + BYE          |
                   | AUTH  |--------------------->+
                   +-------+                      ^
                       |                          |
                       |  HELO                    |
                       |  ----                    |
                       |  #NNN                    |
                       |                          |
                       |           QUIT           |
                       V           -----          |
        FOLD  +--->+-------+       + BYE          |
        ----  ^    | MBOX  |--------------------->+
        #NNN  +<---+-------+                      ^
                    ^     |                       |
                    |     |  READ                 |
              FOLD  |     |  ----                 |
              ----  |     |  =CCC                 |
              #NNN  |     |        QUIT           |
                    |     V        -----          |
        READ  +--->+-------+       + BYE          |
        ----  ^    | ITEM  |--------------------->+
        =CCC  +<---+-------+
                    ^     |
                    |     |  RETR
              ack   |     |  ----
              ----  |     |  data
              =CCC  |     |
                    |     V
                   +-------+
                   | NEXT  |
                   +-------+


Combined Flow Diagram


   +----+
   |CALL|<------------------------------------------------------------+
   |LSTN|                                                             ^
   +----+                                                             |
    | Greet                                                           |
    |                                                                 |
    |  +----------------------------------------------------->+       |
    |  ^ QUIT                                                 |       |
    V  |                                                      V       |
   +----+        +----+                                      +----+   |
   |CALL| HELO   |NMBR|                                      |EXIT|   |
   |AUTH|------->|AUTH|                                      |AUTH|   |
   +----+        +----+                                      +----+   |
                  | #NNN                                   + Bye |    |
                  |                                              |    |
                  |  +------------------------------------>+     |    |
                  |  ^ QUIT                                |     |    |
                  V  |                                     V     |    |
            +--->+----+        +----+                     +----+ |    |
       FOLD ^    |NMBR| READ   |SIZE|                     |EXIT| |    |
       ---- |    |MBOX|------->|MBOX|                     |MBOX| |    |
       #NNN +<---+----+        +----+                     +----+ |    |
                     ^           | =CCC                 + Bye |  |    |
                     |           |                            |  |    |
                FOLD +<--------+ | +------------------->+     |  |    |
                ----           ^ | ^ QUIT               |     |  |    |
                #NNN           | V |                    V     |  |    |
                         +--->+-----+        +----+    +----+ |  |    |
                    READ ^    |SIZE | RETR   |XFER|    |EXIT| |  |    |
                    ---- |    | ITEM|------->|ITEM|    |ITEM| |  |    |
                    =CCC +<---+-----+        +----+    +----+ |  |    |
                                 ^             | data      |  |  |    |
                                 |             |           |  |  |    |
                            =CCC |             V     + Bye |  |  |    |
                               +----+        +----+        |  |  |    |
                               |SIZE|    Ack |XFER|        |  |  |    |
                               |NEXT|<-------|NEXT|        |  |  |    |
                               +----+        +----+        |  |  |    |
                                                           |  |  |    |
                                                           |  |  |    |
                                                           V  V  V    |
                                                          +-------+   |
                                                          | EXIT  |-->+
                                                          | DONE  |
                                                          +-------+


## ⚡ IMAP4 POP3
- [Simple Mail Transfer Protocol](https://www.rfc-editor.org/rfc/rfc2821.html)
- [RFC 918 - POP(Post Office Protocol)](https://www.rfc-editor.org/info/rfc918)
- [RFC 1939 - POP3(Post Office Protocol Ver3)](https://www.rfc-editor.org/info/rfc1939)
- [RFC 1730 - IMAP4(Internet Mail Access Protocol Ver4)](http://www.rfc-editor.org/info/rfc1730)

IMAP 是斯坦福大学在 1986 年开发的开放的标准，被设计成 POP 的超集。 互联网邮件访问协议 IMAP - Internet Mail Access Protocol 以前称作交互邮件访问协议 Interactive Mail Access Protocol，主要用在邮件客户端如 Outlook 从邮件服务器上获取邮件的信息，下载邮件等，使用的端口是 143。

根据定义，POP3是个存储转发的信息交换系统。POP3邮件服务器把消息发送给客户，自己并不在服务器上保存副本。与之不同，IMAP4 是个客户机/服务器模式的应用。无论是 POP3 还是 IMAP4，进来的邮件都存储在中央的邮件服务器上。用户使用遵循协议的邮件客户软件来连接到邮件服务器上，先进行身份验证，鉴定登录名和口令，然后用户才获得访问邮箱的权利。

与 POP3 不同，IMAP4 能以三种模式或者说消息传送范式来与客户进行交互，离线、在线和断连方式。此外，IMAP4 可以让用户访问多个私用和共享邮箱。

在离线方式中，客户软件把邮箱存储在本地硬盘上以进行读取和撰写信息的工作。当需要发送和接受消息时，用户才连接服务器。对于那些长期奔波、很少停留在某个固定处所的人，他们通常使用离线方式。

相比之下，在线用户访问的邮箱是在邮件服务器上，但是邮箱仍然由客户软件处理，邮件始终存储在服务器上。在线方式主要是由位置固定的用户使用，典型地是在快速 LAN 连接下进行。但是从远程拨进的功能较弱的计算机在这种模式下也可以工作得很好。有一些 POP3 服务器也提供了在线功能，但是没有达到 IMAP4 的功能级别。

断连方式提供了最大的灵活性。客户软件把用户选定的消息和附件复制或缓存到本地磁盘上，并把原始副本留存在邮件服务器上。缓存中的邮件可以被用户处理，以后用户重新连接邮件服务器时，这些邮件可以与服务器进行再同步。当前，该特性主要由邮件服务器实现，很少有客户软件支持断连方式。

对于 IMAP4 而言，无论是在哪一种操作系统上，使用 IMAP4 邮件客户软件的用户都可以读取和回复邮件，远程地把邮件存储在层次式的文件夹中，并且可通过 IMAP4 邮件主机同步客户文件。客户软件和服务器相互配合，允许过滤来自特定地址的邮件，还能够防止通过低速拨号链路下载大文件。用户可以查看主机上的邮件报文，如果需要，可以决定把其中哪些内容下载到远程连接的客户机上。用户还可以有选择地下载邮件，而不必非要下载邮件的附件。

IMAP 同样提供了 POP 的邮件下载服务，让用户能进行离线阅读，但 IMAP 能完成的却远远不只这些。首先，IMAP 提供的摘要浏览功能可以让你在阅读完所有的邮件到达时间、主题、发件人、大小等信息后才作出是否下载的决定。也就是说，你不必等所有的邮件都下载完毕后才知道究竟邮件里都有些什么。如果你根据摘要信息就可以决定某些邮件对你毫无用处，你就可以直接在服务器上把这些邮件删除掉，而不必浪费你宝贵的上网时间。如果你的 IMAP 客户端软件完整支持 IMAP4rev1 的话如 Netscape 4.5，则你还可以享受选择性下载附件的服务。举例来说，假如一封邮件里含有大大小小共 5 个附件，而其中只有两个附件是你需要的，你就可以只下载那两个附件，节省了下载其余三个的时间。



# 🚩 Telnet
[RFC 318 - Telnet Protocol](https://www.rfc-editor.org/rfc/rfc318.html)


# 🚩 FTP
[RFC 959 - FTP(File Transfer Protocol)](https://www.rfc-editor.org/info/rfc959)
[RFC 4217 - Securing FTP with TLS](https://www.rfc-editor.org/rfc/rfc4217.html)
[RFC 4253 - The Secure Shell (SSH) Transport Layer Protocol](https://www.rfc-editor.org/info/rfc4253)
[RFC 6101 - The Secure Sockets Layer (SSL) Protocol V3.0](https://www.rfc-editor.org/rfc/rfc6101.html)

## ⚡ FTP软件模型

文件传输协议FTP(File Transfer Protocol)是因特网中使用最广泛的文件传输协议，有基于 TCP 的 FTP 和基于 UDP 的简单文件传输协议 TFTP - Trivial File Transfer Protocol，还有基于 SSH 安全协议的 SFTP - SSH File Transfer Protocol，如果采用 SSL 加密则是 FTPS，即 FTP over SSL。FTP 采用经典的客户机/服务器（Client/Server ）架构，服务器端提供 FTP 服务，用户使用各种不同的 FTP 客户端程序来连接 FTP 服务器，以上传或者下载文件。

连接过程

1.控制连接
a.服务器在熟知端口21发出被动打开命令，等待客户。
b.客户使用临时端口发出主动打开命令。

2.数据连接
a.客户使用一个临时端口发出被动打开。
b.客户使用PORT命令把这个端口号发送给服务器。
c.服务器收到这个端口号，并使用熟知端口20和临时端口号发出主动打开。


                                              +-------------+
                                              | +---------+ |
                                              | |   User  | |    +------+
                                              | |Interface| <--->| User |
                                              | +----^----+ |    +------+
                  +----------+                |      |      |
                  | +------+ |  FTP Commands  | +----V----+ |
                  | |Server| <----------------> |   User  | |
                  | |  PI  | |   FTP Replies  | |    PI   | |
                  | +--^---+ |                | +----^----+ |
                  |    |     |                |      |      |
      +------+    | +--V---+ |      Data      | +----V----+ |    +------+
      | File |<---> |Server| <----------------> |  User   | <--->| File |
      |System|    | | DTP  | |   Connection   | |   DTP   | |    |System|
      +------+    | +------+ |                | +---------+ |    +------+
                  +----------+                +-------------+

                  Server-FTP                   USER-FTP


FTP两个通讯端口

TCP 21 端口作为控制链路用途，所有你发往FTP服务器的命令和服务器反馈的指令都是通过服务器上的21端口传送的。
TCP 20 端口作为数据链路用途，数据链路主要是用来传送数据的，比如客户端上传、下载内容，以及列目录显示的内容等。

FTP控制链路在整个会话期间都保持打开，只用来发送连接/传送指令。当客户进程向服务器发送连接请求时，寻找连接服务器进程的熟知端口21，同时还要告诉服务器进程自己的另一个端口号码，用于建立数据传送连接。接着，服务器进程用自己传送数据的熟知端口20与客户进程所提供的端口号码建立数据传送连接。

两套端口对应两个处理进程，负责命令交互的是 PI - Protocol Interpreter，负责文件数据处理的是 DTP - data transfer process。


## ⚡ FTP两种连接方式
 
FTP Server 为了适应不同的网络环境，支持两种连接模式来建立数据链路：主动模式（Port）和被动模式（Pasv)。其实这两种连接模式主要是针对数据链路进行的，和控制链路无关。

主动模式下，客户端 PI 进程先以一个高位端口连接到服务器 PI 进程侦听的 21 端口建立控制链路，一般大于1024的端口都就叫高位端口，所有的控制命令比如 Is 或 get 都是通过控制链路传送。当客户端需要服务器端给它传送数据时，客户端会发消息给服务器端，告诉自己的位置和打开的高位端口，等候服务器的 DTP 进程通过 TCP 20 端口和客户端打开的数据链路端口进行连接，从而进行数据的传输。当服务器端收到信息后，就会和客户端打开的端口连接，这样数据链路就建立起来了。
 
采用主动模式连接的客户端，当它位于NAT或者防火墙的保护时会碰到连接失败的问题。因为防火墙接到服务器发送过来的信息的时候，并不知道应该发送给内部网络中的哪一台客户端造成的。

被动模式下，客户端发送数据请求后，服务器也会发信息给客户端，告诉客户端：服务器在本地打开了一个高位端口P，你现在来连接我吧。当客户端收到该信息时，就会去连接服务器端的端口P，连接成功后，数据链路就建立了。
 
从上面的解释中我们可以看到，两种模式主要的不同是数据连接建立的不同。对于Port模式，是客户端在本地打开一个端口等服务器去连接建立数据连接，而Pasv模式就是服务器打开一个端口等待客户端去建立一个数据连接。


## ⚡ FTP数据表示

FTP协议规定了控制协议传送与存储的多种选择：

- 文件类型：ASCII码文件(默认的)/ 图像文件类型(二进制的)/ 本地文件类型(用于在具有不同字节大小主机间传送二进制数据)
- 格式控制：该选项针对ASCII类型文件适用，非打印(默认选择，文件中不包含垂直格式信息)/ 远程登录格式控制
- 结构：文件结构(默认选择，文件被认为是一个连续的字节流，不存在内部的文件结构)/ 记录结构(用于文本文件)
- 传输方式：流方式(模式选择，文件以字节流方式传输，对于文件结构，发方在文件尾提示关闭数据连接，对于记录结构，有专用的两字节序列码记录结束和文件结束)/ 块方式(文件以一系列块来传送，每块前面有一个或多个首部字节)/ 压缩方式


## ⚡ FTP命令和应答

命令和应答在客户和服务器的控制连接上以 NVT ASCII 码形式传送，Net Virtual Terminal 网络虚拟终端。这就要求在每行结尾都要返回 CRLF 符号。这些命令都是 3 或 4 个字节的大写 ASCII 字符，其中一些带选项参数。从客户向服务器发送的 FTP 命令超过 30 种。

列如 PORT 命令产生的网络报文结构如下，共 71 字节，前 44 字节分别是 Wireshark Npcap 工具抓取本地环回数据包 Loopback Header 4 bytes，Loopback 接口不能封装任何链路层协议，所以没有以太网 Frame Header。紧跟是 IP Header 20 bytes，再就是 TCP Header 20 bytes，后面的 TCP Payload 27 bytes 才是 FTP 协议数据包：

    0000   02 00 00 00 45 00 00 43 89 46 40 00 80 06 00 00   ....E..C.F@.....
    0010   c0 a8 2b e4 c0 a8 2b e4 d7 85 00 15 d6 c1 a1 f2   ..+...+.........
    0020   9e 67 dc 36 50 18 19 07 24 0a 00 00 50 4f 52 54   .g.6P...$...PORT
    0030   20 31 39 32 2c 31 36 38 2c 34 33 2c 32 32 38 2c    192,168,43,228,
    0040   32 31 36 2c 34 0d 0a                              216,4..

完整的 FTP 命令数据就如下，16-bit 端口号分成两部分，高位部分 216 需要和 256 相乘即相当右移 8 位操作，计算 216 * 256 + 4 = 55300：

    PORT 192,168,43,228,216,4\r\n

应答都是 ASCII 码形式的 3 位数字，并跟有报文选项。其原因是软件系统需要根据数字代码来决定如何应答，而选项串是人工选择的。由于客户通常都要输出数字应答和报文串，一个可交互的用户可以通过阅读报文串来确定应答的含义。以下 73 字节数据就是响应 PORT 命令的报文，除去 44 字节基本协议头，剩下的 29 字节数据就是 FTP 应答：

    0000   02 00 00 00 45 00 00 45 89 48 40 00 80 06 00 00   ....E..E.H@.....
    0010   c0 a8 2b e4 c0 a8 2b e4 00 15 d7 85 9e 67 dc 36   ..+...+......g.6
    0020   d6 c1 a2 0d 50 18 27 f6 29 db 00 00 32 30 30 20   ....P.'.)...200 
    0030   50 4f 52 54 20 63 6f 6d 6d 61 6e 64 20 73 75 63   PORT command suc
    0040   63 65 73 73 66 75 6c 0d 0a                        cessful..

完整的 FTP 应答数据是：

    200 PORT command successful\r\n

以下是一个完整的 FTP 交互过程，第一条信息是 TCP 建立连接后由 FTP 服务器发来的消息，NLST 命令是 FTP 客户端 mls 命令触发的：

    Server: 220 Hello, I'm freeFTPd 1.0
    Client: OPTS UTF8 ON
    Server: 530 Please login first
    Client: USER root
    Server: 331 Password required for root
    Client: PASS rootpass
    Server: 230 User root logged in
    Client: PORT 192,168,43,228,216,248
    Server: 200 PORT command successful
    Client: NLST
    Server: 150 Opening ASCII mode data connection
    Server: 226 Directory send OK
    Client: PORT 192,168,43,228,216,250
    Server: 200 PORT command successful
    Client: NLST /
    Server: 150 Opening ASCII mode data connection
    Server: 226 Directory send OK
    Client: QUIT
    Server: 221 Goodbye!


## ⚡ FTP REPLIES


         There are five values for the first digit of the reply code:

            1yz   Positive Preliminary reply

               The requested action is being initiated; expect another
               reply before proceeding with a new command.  (The
               user-process sending another command before the
               completion reply would be in violation of protocol; but
               server-FTP processes should queue any commands that
               arrive while a preceding command is in progress.)  This
               type of reply can be used to indicate that the command
               was accepted and the user-process may now pay attention
               to the data connections, for implementations where
               simultaneous monitoring is difficult.  The server-FTP
               process may send at most, one 1yz reply per command.

            2yz   Positive Completion reply

               The requested action has been successfully completed.  A
               new request may be initiated.

            3yz   Positive Intermediate reply

               The command has been accepted, but the requested action
               is being held in abeyance, pending receipt of further
               information.  The user should send another command
               specifying this information.  This reply is used in
               command sequence groups.

            4yz   Transient Negative Completion reply

               The command was not accepted and the requested action did
               not take place, but the error condition is temporary and
               the action may be requested again.  The user should
               return to the beginning of the command sequence, if any.
               It is difficult to assign a meaning to "transient",
               particularly when two distinct sites (Server- and
               User-processes) have to agree on the interpretation.
               Each reply in the 4yz category might have a slightly
               different time value, but the intent is that the


            5yz   Permanent Negative Completion reply

               The command was not accepted and the requested action did
               not take place.  The User-process is discouraged from
               repeating the exact request (in the same sequence).  Even
               some "permanent" error conditions can be corrected, so
               the human user may want to direct his User-process to
               reinitiate the command sequence by direct action at some
               point in the future (e.g., after the spelling has been
               changed, or the user has altered his directory status.)

         The following function groupings are encoded in the second
         digit:

            x0z   Syntax - These replies refer to syntax errors,
                  syntactically correct commands that don't fit any
                  functional category, unimplemented or superfluous
                  commands.

            x1z   Information -  These are replies to requests for
                  information, such as status or help.

            x2z   Connections - Replies referring to the control and
                  data connections.

            x3z   Authentication and accounting - Replies for the login
                  process and accounting procedures.

            x4z   Unspecified as yet.

            x5z   File system - These replies indicate the status of the
                  Server file system vis-a-vis the requested transfer or
                  other file system action.

## ⚡ Reply Codes by Function Groups

         200 Command okay.
         500 Syntax error, command unrecognized.
             This may include errors such as command line too long.
         501 Syntax error in parameters or arguments.
         202 Command not implemented, superfluous at this site.
         502 Command not implemented.
         503 Bad sequence of commands.
         504 Command not implemented for that parameter.

         110 Restart marker reply.
             In this case, the text is exact and not left to the
             particular implementation; it must read:
                  MARK yyyy = mmmm
             Where yyyy is User-process data stream marker, and mmmm
             server's equivalent marker (note the spaces between markers
             and "=").
         211 System status, or system help reply.
         212 Directory status.
         213 File status.
         214 Help message.
             On how to use the server or the meaning of a particular
             non-standard command.  This reply is useful only to the
             human user.
         215 NAME system type.
             Where NAME is an official system name from the list in the
             Assigned Numbers document.

         120 Service ready in nnn minutes.
         220 Service ready for new user.
         221 Service closing control connection.
             Logged out if appropriate.
         421 Service not available, closing control connection.
             This may be a reply to any command if the service knows it
             must shut down.
         125 Data connection already open; transfer starting.
         225 Data connection open; no transfer in progress.
         425 Can't open data connection.
         226 Closing data connection.
             Requested file action successful (for example, file
             transfer or file abort).
         426 Connection closed; transfer aborted.
         227 Entering Passive Mode (h1,h2,h3,h4,p1,p2).

         230 User logged in, proceed.
         530 Not logged in.
         331 User name okay, need password.
         332 Need account for login.
         532 Need account for storing files.

         150 File status okay; about to open data connection.
         250 Requested file action okay, completed.
         257 "PATHNAME" created.
         350 Requested file action pending further information.
         450 Requested file action not taken.
             File unavailable (e.g., file busy).
         550 Requested action not taken.
             File unavailable (e.g., file not found, no access).
         451 Requested action aborted. Local error in processing.
         551 Requested action aborted. Page type unknown.
         452 Requested action not taken.
             Insufficient storage space in system.
         552 Requested file action aborted.
             Exceeded storage allocation (for current directory or
             dataset).
         553 Requested action not taken.
             File name not allowed.


## ⚡ Numeric Order List of Reply Codes

         110 Restart marker reply.
             In this case, the text is exact and not left to the
             particular implementation; it must read:
                  MARK yyyy = mmmm
             Where yyyy is User-process data stream marker, and mmmm
             server's equivalent marker (note the spaces between markers
             and "=").
         120 Service ready in nnn minutes.
         125 Data connection already open; transfer starting.
         150 File status okay; about to open data connection.

         200 Command okay.
         202 Command not implemented, superfluous at this site.
         211 System status, or system help reply.
         212 Directory status.
         213 File status.
         214 Help message.
             On how to use the server or the meaning of a particular
             non-standard command.  This reply is useful only to the
             human user.
         215 NAME system type.
             Where NAME is an official system name from the list in the
             Assigned Numbers document.
         220 Service ready for new user.
         221 Service closing control connection.
             Logged out if appropriate.
         225 Data connection open; no transfer in progress.
         226 Closing data connection.
             Requested file action successful (for example, file
             transfer or file abort).
         227 Entering Passive Mode (h1,h2,h3,h4,p1,p2).
         230 User logged in, proceed.
         250 Requested file action okay, completed.
         257 "PATHNAME" created.

         331 User name okay, need password.
         332 Need account for login.
         350 Requested file action pending further information.

         421 Service not available, closing control connection.
             This may be a reply to any command if the service knows it
             must shut down.
         425 Can't open data connection.
         426 Connection closed; transfer aborted.
         450 Requested file action not taken.
             File unavailable (e.g., file busy).
         451 Requested action aborted: local error in processing.
         452 Requested action not taken.
             Insufficient storage space in system.

         500 Syntax error, command unrecognized.
             This may include errors such as command line too long.
         501 Syntax error in parameters or arguments.
         502 Command not implemented.
         503 Bad sequence of commands.
         504 Command not implemented for that parameter.
         530 Not logged in.
         532 Need account for storing files.
         550 Requested action not taken.
             File unavailable (e.g., file not found, no access).
         551 Requested action aborted: page type unknown.
         552 Requested file action aborted.
             Exceeded storage allocation (for current directory or
             dataset).
         553 Requested action not taken.
             File name not allowed.


## ⚡ FTP 常用命令

ACCESS CONTROL COMMANDS
- ACCT - send account information
- CDUP - CWD to the parent of the current directory
- CWD  - change working directory
- PASS - send password
- QUIT - terminate the connection
- REIN - reinitialize the connection
- USER - send username

TRANSFER PARAMETER COMMANDS
- MODE - set transfer mode
- PASV - enter passive mode
- PORT - open a data port
- STRU - set file transfer structure
- TYPE - set transfer type


FTP SERVICE COMMANDS
- ABOR - abort a file transfer
- APPE - append to a remote file
- DELE - delete a remote file
- HELP - return help on using the server
- LIST - list remote files
- MDTM - return the modification time of a file
- MKD  - make a remote directory
- NLST - name list of remote directory
- NOOP - do nothing
- PWD  - print working directory
- RETR - retrieve a remote file
- RMD  - remove a remote directory
- RNFR - rename from
- RNTO - rename to
- SITE - site-specific commands
- SIZE - return the size of a file
- STAT - return server status
- STOR - store a file on the remote host
- STOU - store a file uniquely
- SYST - return system type


# 🚩 TFTP & UDP
[RFC 768 - UDP(User Datagram Protocol)](https://www.rfc-editor.org/info/rfc768)
[RFC 1350 - TFTP(Trival File Transfer Protocol)](https://www.rfc-editor.org/info/rfc1350)

TFTP 使用精简命令与数据报格式

      opcode  operation
        1     Read request (RRQ)
        2     Write request (WRQ)
        3     Data (DATA)
        4     Acknowledgment (ACK)
        5     Error (ERROR)

Error Codes

    Value     Meaning

    0         Not defined, see error message (if any).
    1         File not found.
    2         Access violation.
    3         Disk full or allocation exceeded.
    4         Illegal TFTP operation.
    5         Unknown transfer ID.
    6         File already exists.
    7         No such user.


Figure 15.1. Format of the five TFTP messages.

    |<--------------------------------------- IP Datagram ----------->|
    |           |<-------------------------- UDP Datagram ----------->|
    |           |            |<------------- TFTP Message ----------->|
    +-----------+------------+------------+----------+---+--------+---+
    | IP Header | UDP Header | opcode=1,2 | filename | 0 |  mode  | 0 |
    +-----------+------------+------------+----------+---+--------+---+
      20 bytes    8 bytes    . 2 bytes    . N bytes    1   N bytes  1
                             .            .
                             .            .
                             +------------+---------+------------+
                             | opcode=3   | blockNo |    data    |
                             +------------+---------+------------+
                             . 2 bytes    . 2 bytes   0-512 bytes
                             .            .
                             .            .
                             +------------+---------+
                             | opcode=4   | blockNo |
                             +------------+---------+
                             . 2 bytes    . 2 bytes  
                             .            .
                             .            .
                             +------------+---------+---------------+---+
                             | opcode=5   | errorNo | error message | 0 |
                             +------------+---------+---------------+---+
                               2 bytes      2 bytes   N bytes         1


TFTP 不支持安全登录等操作，只做简单的文件传输服务，使用 UDP - User Datagram Protocol 协议，69 端口传输数据，UDP 报文头部最小 8 字节，UDP 报头由 4 个部分组成，包含 2 字节源端口号，2 字节目标端口号，2 字节报文长度信息，2 字节 checksum，还有任意字节的数据如果有。不同于 TCP，UDP 是无连接的，即发送数据之前不需要建立连接。UDP 不确保数据传输的完整，因此 TFPT 需要文件接收端发送 ACK 应答让发送方确认数据接收完成，并发送下一段数据。

例如请求一个存在/不存在的文件，注意 0x20 处的两个字节的 opcode：

    tftp 192.168.43.228 get /

    0000   02 00 00 00 45 00 00 29 89 db 00 00 80 11 00 00   ....E..)........
    0010   c0 a8 2b e4 c0 a8 2b e4 ff 46 00 45 00 15 38 8a   ..+...+..F.E..8.
    0020   00 01 2f 00 6e 65 74 61 73 63 69 69 00            ../.netascii.

    0000   02 00 00 00 45 00 00 30 89 dc 00 00 80 11 00 00   ....E..0........
    0010   c0 a8 2b e4 c0 a8 2b e4 ff 47 ff 46 00 1c e7 16   ..+...+..G.F....
    0020   00 05 00 01 46 69 6c 65 20 6e 6f 74 20 66 6f 75   ....File not fou
    0030   6e 64 00 00                                       nd..

请求存在的文件 RRQ：

    tftp 192.168.43.228 get /tftpd32.ini

    0000   02 00 00 00 45 00 00 34 89 dd 00 00 80 11 00 00   ....E..4........
    0010   c0 a8 2b e4 c0 a8 2b e4 ff 48 00 45 00 20 bc f4   ..+...+..H.E. ..
    0020   00 01 2f 74 66 74 70 64 33 32 2e 69 6e 69 00 6e   ../tftpd32.ini.n
    0030   65 74 61 73 63 69 69 00                           etascii.

服务器开始传输文件数据 Data Block = 01：

    0000   02 00 00 00 45 00 02 20 89 de 00 00 80 11 00 00   ....E.. ........
    0010   c0 a8 2b e4 c0 a8 2b e4 ff 49 ff 48 02 0c 3d 05   ..+...+..I.H..=.
    0020   00 03 00 01 5b 44 48 43 50 5d 0d 0a 4c 65 61 73   ....[DHCP]..Leas
    ......
    0200   0a 43 6f 6e 73 6f 6c 65 20 50 61 73 73 77 6f 72   .Console Passwor
    0210   64 3d 74 66 74 70 64 33 32 0d 0a 53 75 70 70 6f   d=tftpd32..Suppo
    0220   72 74 20 66                                       rt f

客服端应答确认 ACK Block = 01：

    0000   02 00 00 00 45 00 00 20 89 df 00 00 80 11 00 00   ....E.. ........
    0010   c0 a8 2b e4 c0 a8 2b e4 ff 48 ff 49 00 0c 28 25   ..+...+..H.I..(%
    0020   00 04 00 01                                       ....

服务器传输最后一个数据块 Block = 02，数据不足 512 字节，如果刚好只有 512 字节，后续还会发一个只有 opcode 和 blockNo 而不含数据的包：

    0000   02 00 00 00 45 00 00 88 89 e0 00 00 80 11 00 00   ....E...........
    0010   c0 a8 2b e4 c0 a8 2b e4 ff 49 ff 48 00 74 8c a6   ..+...+..I.H.t..
    0020   00 03 00 02 6f 72 20 70 6f 72 74 20 4f 70 74 69   ....or port Opti
    0030   6f 6e 3d 30 0d 0a 55 73 65 45 76 65 6e 74 4c 6f   on=0..UseEventLo
    0040   67 3d 30 0d 0a 4b 65 65 70 20 74 72 61 6e 73 66   g=0..Keep transf
    0050   65 72 20 47 75 69 3d 35 0d 0a 49 67 6e 6f 72 65   er Gui=5..Ignore
    0060   20 61 63 6b 20 66 6f 72 20 6c 61 73 74 20 54 46    ack for last TF
    0070   54 50 20 70 61 63 6b 65 74 3d 30 0d 0a 45 6e 61   TP packet=0..Ena
    0080   62 6c 65 20 49 50 76 36 3d 30 0d 0a               ble IPv6=0..

客服端应答确认 ACK Block=02 结束文件传输：

    0000   02 00 00 00 45 00 00 20 89 e1 00 00 80 11 00 00   ....E.. ........
    0010   c0 a8 2b e4 c0 a8 2b e4 ff 48 ff 49 00 0c 28 24   ..+...+..H.I..($
    0020   00 04 00 02                                       ....


最权威的FTP参考资料是[RFC 959]，它是FTP协议的官方规范，《TCP/IP协议详解》FTP协议章节有详细讲解，英文原版是 《TCP/IP Illustrated, Volume 1: The Protocols》。


# 🚩 FTP 客户端

    > yum install ftp
    > ftp

FTP 连接 IP 成功后，将提示用户输入用户名及密码，也可以先进入 FTP 再通过 open 连接到主机 IP。

## ⚡ help、?、rhelp

help 显示命令说明，若不指定具体命令则显示所有可用命令；
? 相当于 help，例如 ? cd；
rhelp 同help，只是它用来显示REMOTE端（远程端）的命令说明。

## ⚡ ascii、binary、Image、type

ascii 切换传输模式为文字模式；
binary 切换传输模式为二进制模式；
image 相当于binary；
type 用于更改或显示目前传输模式。

## ⚡ bye、quit

bye 退出FTP服务器；
quit 相当于bye。

## ⚡ cd、cdup、lcd、pwd、!

cd 改变当前工作目录；
cdup 回到上一层目录，相当于 cd ..；
lcd 用于更改或显示 LOCAL 端的工作目录；
pwd 显示远程主机的工作目录；
! 用于执行本地 shell 命令，例如 ! ls。

## ⚡ delete、mdelete、rename

delete 删除REMOTE端的文件：
mdelete 批量删除文件；
rename 更改REMOTE端的文件名。

## ⚡ get、mget、put、mput、recv、send

get 下载文件；
mget 批量下载文件；
put 上传文件；
mput 批量上传文件；
recv 相当于get；
send 相当于put。

## ⚡ hash、verbose、status、bell

hash 当有数据传送时，显示#号，每一个#号表示传送了1024B或8192b；
verbose 切换所有文件传输过程的显示；
status 显示目前的一些参数；
bell 当指令做完时会发出叫声。

## ⚡ ls、dir、mls、mdir、mkdir、rmdir

ls 有点像Unix下的ls(list)命令；
dir 相当于 ls -l；
mls 只是将远端某目录下的文件列表保存于LOCAL端的文件里；
mdir 输出目录列表到本地文件，类似于 mls，如 mdir / list.txt；
mkdir 创建目录，像 DOS 的 md 一样；
rmdir 删除目录，像 DOS 的 rd 一样。

## ⚡ open、close、disconnect、user

open 连接某个远端FTP服务器；
close 关闭目前的连接；
disconnect 相当于close；
user 再输入一次用户名和密码（有点像Linux下的su）。



# 🚩 SCTP
[Better networking with SCTP](https://www.ibm.com/developerworks/linux/library/l-sctp/)
[SCTP - Stream Control Transmission Protocol](https://tools.ietf.org/html/draft-ietf-behave-sctpnat-09)
[SCTP - Stream Control Transmission Protocol](https://www.rfc-editor.org/rfc/rfc4960.html)
[SCTP 协议介绍](https://blog.csdn.net/scutzxb_2/article/details/52717392)
UNIX Network Programming Volume.1 3rd Edition


       _____________                                      _____________
      |  SCTP User  |                                    |  SCTP User  |
      | Application |                                    | Application |
      |-------------|                                    |-------------|
      |    SCTP     |                                    |    SCTP     |
      |  Transport  |                                    |  Transport  |
      |   Service   |                                    |   Service   |
      |-------------|                                    |-------------|
      |             |One or more    ----      One or more|             |
      | IP Network  |IP address      \/        IP address| IP Network  |
      |   Service   |appearances     /\       appearances|   Service   |
      |_____________|               ----                 |_____________|

        SCTP Node A |<-------- Network transport ------->| SCTP Node B

                         Figure 1: An SCTP Association


                           SCTP User Application

            -----------------------------------------------------
             _____________                  ____________________
            |             |                | Sequenced Delivery |
            | Association |                |   within Streams   |
            |             |                |____________________|
            |   Startup   |
            |             |         ____________________________
            |     and     |        |    User Data Fragmentation |
            |             |        |____________________________|
            |   Takedown  |
            |             |         ____________________________
            |             |        |     Acknowledgement        |
            |             |        |          and               |
            |             |        |    Congestion Avoidance    |
            |             |        |____________________________|
            |             |
            |             |         ____________________________
            |             |        |       Chunk Bundling       |
            |             |        |____________________________|
            |             |
            |             |     ________________________________
            |             |    |      Packet Validation         |
            |             |    |________________________________|
            |             |
            |             |     ________________________________
            |             |    |     Path Management            |
            |_____________|    |________________________________|

              Figure 2: Functional View of the SCTP Transport Service


SCTP - Stream Control Transmission Protocol 是一种传输协议，在 TCP/IP 协议栈中所处的位置和 TCP、UDP 类似，兼有 TCP/UDP 两者特征。

SCTP 是可以确保数据传输的，和TCP类似，也是通过确认机制来实现的。和TCP不同的是：

1. TCP是以字节为单位传输的，SCTP是以数据块为单位传输的

TCP接收端确认的是收到的字节数，SCTP接收端确认的是接收到的数据块。SCTP的这种数据块（被称为DATA CHUNK）通常会携带应用的一个数据包，或者说是应用要发送的一个消息。

在实际的应用中，TCP发送方的可以将应用程序需要发送的多个消息打包到一个TCP包里面发出去。比如，应用程序连续调用两次send()向对端发送两条消息，TCP协议可能把这两条消息都打包放在同一个TCP包中。接收端在收到这个TCP包时，回给对端的ACK只是表明自己接收到了多少个字节，TCP协议本身并不会把收到的数据重新拆散分成两条应用层消息并通知应用程序去接收。事实上，应用程序可能只需要调用一次receive()，就会把两条消息都收上来，然后应用需要根据应用程序自己定义的格式去拆成两条消息。

与TCP不同，SCTP是将应用程序的每次调用sendmsg()发送的数据当作一个整体，放到一个被称为DATA CHUNK的数据块里面，接收端也是以DATA CHUNK为单位接收数据，并重新组包，通知应用程序接收。通常，应用程序每次调用recvmesg()都会收到一条完整的消息。

在SCTP的发送端，多条短的应用层消息可以被SCTP协议打包放在同一个SCTP包中，此时在SCTP包中可以看到多个DATA CHUNK。另一方面，一条太长（比如，超过了路径MTU）的应用层消息也可能被SCTP协议拆分成多个片段，分别放在多个DATA CHUNK并通过不同的SCTP包发送给对端。这两种情况下，SCTP的接收端都能重新组包，并通知应用程序去接收。

2. TCP通常是单路径传输，SCTP可以多路径传输

TCP的两端都只能用一个IP来建立连接，连接建立之后就只能用这一对IP来相互收发消息了。如果这一对IP之间的路径出了问题，那这条TCP连接就不可用了。

SCTP不一样的地方是，两端都可以绑定到多个IP上，只要有其中一对IP能通，这条SCTP连接就还可以用。



体现在socket API中，TCP只能bind一个IP，而SCTP可以bind到多个IP。

3. TCP是单流有序传输，SCTP可以多流独立有序/无序传输

一条SCTP连接里面，可以区分多条不同的流（stream），不同的流之间的数据传输互不干扰。这样做理论上的好处是，如果其中某一条流由于丢包阻塞了，那只会影响到这一条流，其他的流并不会被阻塞。但是实际上，如果某一条流由于丢包阻塞，其他的流通常也会丢包，被阻塞，最后导致所有的流都被阻塞，SCTP连接中断。



在同一条stream里面，SCTP支持有序/无序两种传输方式，应用程序在调用sendmsg()的时候，需要指定用哪一条stream传输，以及指定这条要发送的消息是需要有序传输还是无序传输的。如果在传输过程中丢包，则有序传递模式可能会在接收端被阻塞，而无序传输模式不会在接收端被阻塞。



4. TCP连接的建立过程需要三步握手，SCTP连接的建立过程需要四步握手

TCP连接建立过程，容易受到DoS攻击。在建立连接的时候，client端需要发送SYN给server端，server端需要将这些连接请求缓存下来。通过这种机制，攻击者可以发送大量伪造的SYN包到一个server端，导致server端耗尽内存来缓存这些连接请求，最终无法服务。

SCTP的建立过程需要四步握手，server端在收到连接请求时，不会立即分配内存缓存起来，而是返回一个COOKIE。client端需要回送这个COOKIE，server端校验之后，从cookie中重新获取有效信息（比如对端地址列表），才会最终建立这条连接。这样，可以避免类似TCP的SYN攻击。

应用程序对此感知不到，对应用程序来说，不管是TCP还是SCTP，都只需要在server端listen一个socket，client调用connect()去连接到一个server端。

5. SCTP有heartbeat机制来管理路径的可用性

SCTP协议本身有heartbeat机制来监控连接/路径的可用性。

前面说过，SCTP两端都可以bind多个IP，因此同一条SCTP连接的数据可以采用不同的IP来传输。不同的IP传输路径对应一条path，不同的path都可以由heartbeat或者是数据的传输/确认来监控其状态。

如果heartbeat没相应，或者是数据在某条path超时没收到确认导致重传，则认为该path有一次传输失败。如果该path的连续传输失败次数超过path的连续重传次数，则认为该path不可用，并通知应用程序。如果一条连接的连续传输次数超过设定的“连接最大重传次数”，则该连接被认为不可用，该连接会被关闭并通知应用程序。



# 🚩 VPN

VPN - Virtual private network 虚拟专用网络属于远程访问技术，简单地说就是利用公用网络架设一条虚拟网络隧道。

例如某公司员工出差到外地，他想访问企业内网的服务器资源，这种访问就属于远程访问。

在传统的企业网络配置中，要进行远程访问，传统的方法是租用 DDN - Digital Data Network 数字数据网专线或帧中继，这样的通讯方案必然导致高昂的网络通讯和维护费用。对于移动办公人员与远端个人用户而言，一般会通过拨号线路进入企业的局域网，但这样必然带来安全上的隐患。

让外地员工访问到内网资源，利用 VPN 的解决方法就是在内网中架设一台 VPN 服务器。外地员工在当地连上互联网后，通过互联网连接 VPN 服务器，然后通过VPN服务器进入企业内网。为了保证数据安全，VPN 服务器和客户机之间的通讯数据都进行了加密处理。有了数据加密，就可以认为数据是在一条专用的数据链路上进行安全传输，就如同专门架设了一个专用网络一样，但实际上 VPN 使用的是互联网上的公用链路，因此称为虚拟专用网络，其实质上就是利用加密技术在公网上封装出一个数据通讯隧道。有了 VPN 技术，用户无论是在外地出差还是在家中办公，只要能上互联网就能利用 VPN 访问内网资源，这就是 VPN 在企业中应用得如此广泛的原因。


MPLS-VPN 是指采用 MPLS - Multi-Protocol Labels Switch 多协议标签交换网络技术，在运营商宽带 IP 网络上构建企业 IP 专网，实现跨地域、安全、高速、可靠的数据、语音、图像多业务通信，并结合差别服务、流量工程等相关技术，将公众网可靠的性能、良好的扩展性、丰富的功能与专用网的安全 、灵活、高效结合在一起，为用户提供高质量的服务。

MPLS 网络的基本构成单元是标签交换路由器 LSR - Label Switching Router，主要运行 MPLS 网络控制协议和第三层路由协议，并负责与其他 LSR 交换路由信息来建立路由表，实现 FEC 和 IP 分组头的映射，建立 FEC 和标签之间的绑定，分发标签绑定信息，建立和维护标签转发表等工作。由 LSR 构成的网络叫做 MPLS 域，位于区域边缘的 LSR 称为 LER - Labeled Edge Router，边缘 LSR。　


工作原理
通常情况下，VPN 网关采取双网卡结构，外网卡使用公网IP接入Internet。
假定网络一公网的终端A访问网络二公司内网的终端B，其发出的访问数据包的目标地址为终端B的内部IP地址。
网络一的VPN网关在接收到终端A发出的访问数据包时对其目标地址进行检查，如果目标地址属于网络二的地址，则将该数据包进行封装，封装的方式根据所采用的VPN技术不同而不同，同时VPN网关会构造一个新VPN数据包，并将封装后的原数据包作为VPN数据包的负载，VPN数据包的目标地址为网络二的VPN网关的外部地址。
网络一的VPN网关将VPN数据包发送到Internet，由于VPN数据包的目标地址是网络二的VPN网关的外部地址，所以该数据包将被Internet中的路由正确地发送到网络二的VPN网关。
网络二的VPN网关对接收到的数据包进行检查，如果发现该数据包是从网络一的VPN网关发出的，即可判定该数据包为VPN数据包，并对该数据包进行解包处理。解包的过程主要是先将VPN数据包的包头剥离，再将数据包反向处理还原成原始的数据包。
网络二的VPN网关将还原后的原始数据包发送至目标终端B，由于原始数据包的目标地址是终端B的IP，所以该数据包能够被正确地发送到终端B。在终端B看来，它收到的数据包就和从终端A直接发过来的一样。
从终端B返回终端A的数据包处理过程和上述过程一样，这样两个网络内的终端就可以相互通讯了。
通过上述说明可以发现，在VPN网关对数据包进行处理时，有两个参数对于VPN通讯十分重要：原始数据包的目标地址（VPN目标地址）和远程VPN网关地址。根据VPN目标地址，VPN网关能够判断对哪些数据包进行VPN处理，对于不需要处理的数据包通常情况下可直接转发到上级路由；远程VPN网关地址则指定了处理后的VPN数据包发送的目标地址，即VPN隧道的另一端VPN网关地址。由于网络通讯是双向的，在进行VPN通讯时，隧道两端的VPN网关都必须知道VPN目标地址和与此对应的远端VPN网关地址。

工作过程
VPN的基本处理过程如下：
①要保护主机发送明文信息到其他VPN设备。
②VPN设备根据网络管理员设置的规则，确定是对数据进行加密还是直接传输。
③对需要加密的数据，VPN设备将其整个数据包（包括要传输的数据、源IP地址和目的lP地址）进行加密并附上数据签名，加上新的数据报头（包括目的地VPN设备需要的安全信息和一些初始化参数）重新封装。
④将封装后的数据包通过隧道在公共网络上传输。
⑤数据包到达目的VPN设备后，将其解封，核对数字签名无误后，对数据包解密。

分类标准
根据不同的划分标准，VPN可以按几个标准进行分类划分：

按VPN的协议分类
VPN的隧道协议主要有三种，PPTP、L2TP和IPSec，其中PPTP和L2TP协议工作在OSI模型的第二层，又称为二层隧道协议；IPSec是第三层隧道协议。

按VPN的应用分类
（1）Access VPN（远程接入VPN）：客户端到网关，使用公网作为骨干网在设备之间传输VPN数据流量；
（2）Intranet VPN（内联网VPN）：网关到网关，通过公司的网络架构连接来自同公司的资源；
（3）Extranet VPN（外联网VPN）：与合作伙伴企业网构成Extranet，将一个公司与另一个公司的资源进行连接。

按所用的设备类型进行分类
网络设备提供商针对不同客户的需求，开发出不同的VPN网络设备，主要为交换机、路由器和防火墙：
（1）路由器式VPN：路由器式VPN部署较容易，只要在路由器上添加VPN服务即可；
（2）交换机式VPN：主要应用于连接用户较少的VPN网络；

按照实现原理划分
（1）重叠VPN：此VPN需要用户自己建立端节点之间的VPN链路，主要包括：GRE、L2TP、IPSec等众多技术。
（2）对等VPN：由网络运营商在主干网上完成VPN通道的建立，主要包括MPLS、VPN技术。

实现方式
VPN的实现有很多种方法，常用的有以下四种：
1．VPN服务器：在大型局域网中，可以通过在网络中心搭建VPN服务器的方法实现VPN。
2．软件VPN：可以通过专用的软件实现VPN。
3．硬件VPN：可以通过专用的硬件实现VPN。
4．集成VPN：某些硬件设备，如路由器、防火墙等，都含有VPN功能，但是一般拥有VPN功能的硬件设备通常都比没有这一功能的要贵。

优点
VPN能够让移动员工、远程员工、商务合作伙伴和其他人利用本地可用的高速宽带网连接（如DSL、有线电视或者WiFi网络）连接到企业网络。此外，高速宽带网连接提供一种成本效率高的连接远程办公室的方法。
设计良好的宽带VPN是模块化的和可升级的。VPN能够让应用者使用一种很容易设置的互联网基础设施，让新的用户迅速和轻松地添加到这个网络。这种能力意味着企业不用增加额外的基础设施就可以提供大量的容量和应用。
VPN能提供高水平的安全，使用高级的加密和身份识别协议保护数据避免受到窥探，阻止数据窃贼和其他非授权用户接触这种数据。
完全控制，虚拟专用网使用户可以利用ISP的设施和服务，同时又完全掌握着自己网络的控制权。用户只利用ISP提供的网络资源，对于其它的安全设置、网络管理变化可由自己管理。在企业内部也可以自己建立虚拟专用网。

缺点
企业不能直接控制基于互联网的VPN的可靠性和性能。机构必须依靠提供VPN的互联网服务提供商保证服务的运行。这个因素使企业与互联网服务提供商签署一个服务级协议非常重要，要签署一个保证各种性能指标的协议。
企业创建和部署VPN线路并不容易。这种技术需要高水平地理解网络和安全问题，需要认真的规划和配置。因此，选择互联网服务提供商负责运行VPN的大多数事情是一个好主意。
不同厂商的VPN产品和解决方案总是不兼容的，因为许多厂商不愿意或者不能遵守VPN技术标准。因此，混合使用不同厂商的产品可能会出现技术问题。另一方面，使用一家供应商的设备可能会提高成本。
当使用无线设备时，VPN有安全风险。在接入点之间漫游特别容易出问题。当用户在接入点之间漫游的时候，任何使用高级加密技术的解决方案都可能被攻破。



# 🚩 OSI 分层结构与对应协议
https://www.zhoulujun.cn/html/theory/network/2016_0316_7709.html

OSI模型，即开放式通信系统互联参考模型(Open System Interconnection,OSI/RM,Open Systems InterconnectionReference Model)，是国际标准化组织(ISO)提出的一个试图使各种计算机在世界范围内互连为网络的标准框架，简称OSI。OSI将计算机网络体系结构(architecture)划分为以下七层：

1、物理层 Physical Layer     

物理接口规范，传输比特流,网卡是工作在物理层的，在这一层，数据的单位称为比特（bit）。有关传输介质的特性标准，这些规范通常也参考了其他组织制定的标准。连接头、针、针的使用、电流、电流、编码及光调制等都属于各种物理层规范中的内容。

对应协议 802.3EIA/TIA RS-232、EIA/TIA RS-449、V.35、RJ-45、fddi令牌环网等。

2、链路层 Data Link Layer    在这一层，数据的单位称为帧（frame），保证帧的无误传输，MAC地址，形成EHTHERNET帧, ARP、RARP、SDLC、HDLC、PPP、STP、帧中继等

3、网络层 Network Layer      路由选择，流量控制，IP地址，形成IP包

  IP(Internet Protocol)
  IPX(Internet work Packet Exchange)
  DDP(Datagram Delivery Protoco1)
  ICMP（Internet Control Message Protocol）APPLETALK

4、传输层 Transport Layer    端口地址，如HTTP对应80端口。TCP和UDP工作于该层,还有就是差错校验和流量控制。
  
  TCP(Transmission Control Protocol)
  UDP(User Datagram Protocol）
  SPX(SequenCed Packet ExChange Protocol)
  ATP(AppleTalk Transaction Protocol)
  NBP(名字绑定协议)
  NetBEUI(NetBIOS Extended User Internet)

5、会话层 Session Layer      组织两个会话进程之间的通信,并管理数据的交换使用NETBIOS和WINSOCK协议。QQ等软件进行通讯因该是工作在会话层的。

  SSH,Secure Shell
  ZIP,Zone Information Protocol
  SDP,Sockets Direct Protocol
  ADSP：AppleTalk的数据流协议
  ASP：AppleTalk的动态会话协议
  H.245,Call Control Protocol for Multimedia Communication
  ISO-SP,OSI Session Layer Protocol（X.225, ISO 8327）
  iSNS,Internet Storage Name Service
  NetBIOS,Network Basic Input Output System
  PAP,Password Authentication Protocol
  PPTP,Point-to-Point Tunneling Protocol
  RPC,远程过程调用
  RTCP,实时传输控制协议
  SMPP,Short Message Peer-to-Peer
  SCP,Secure Copy Protocol

6、表示层 Presentation Layer 使得不同操作系统之间通信成为可能。
7、应用层 Application Layer  对应于应用软件以应用的协议如HTTP。

  Telnet(远程登录协议)
  FTP(File Transfer Protocol)
  HTTP(Hyperrext Transfer Protocol)
  SNMP(simple Mail Transfer Protocol)
  BOOTP(Boot trap．Protocol)
  AFP（Apple Talk文件协议--Apple公司的网络协议族，用于交换文件）
  SNMP(Simple Network Management Protoco1)
  NCP(NetWare Core Protoco1)NFS(Network File System)

实际应用中使用 TCP/IP 为核心的四层模型：

|     OSI 七层网络模型    | TCP/IP四层概念模型 |               对应网络协议              |
|-------------------------|--------------------|-----------------------------------------|
| 应用层（Application）   | 应用层             | HTTP、TFTP, FTP, NFS, WAIS、SMTP        |
| 表示层（Presentation）  | -                  | Telnet, Rlogin, SNMP, Gopher            |
| 会话层（Session）       | -                  | SMTP, DNS                               |
| 传输层（Transport）     | 传输层             | TCP, UDP                                |
| 网络层（Network）       | 网络层             | IP, ICMP, ARP, RARP, AKP, UUCP          |
| 数据链路层（Data Link） | 数据链路层         | FDDI, Ethernet, Arpanet, PDN, SLIP, PPP |
| 物理层（Physical）      | -                  | IEEE 802.1A, IEEE 802.2到IEEE 802.11    |



# 🚩 HTTP数据包的 Content-Type 常见内容类型: 

  Content-Type: application/x-www-form-urlencoded
  POST表单请求，参数出现在 Form Data，在发送前编码所有字符，是默认表单提交类型，大部分服务端语言都对这种方式有很好的支持，在PHP中可以通过$_POST来获取数据。

  Content-Type: multipart/form-data
  POST表单请求，参数出现在 Form Data，不对字符编码。表单包含文件上传控件的表单时，必须使用该值，且还要增设文件内容分割符 boundary。大部分服务端语言都对这种方式也有很好的支持。

  Content-Type: text/plain
  空格转换为 "+" 加号，但不对特殊字符编码。PHP 就无法通过 $_POST 对象从上面的请求中获得内容，需要读取php://input。

  Content-Type: application/json;charset=UTF-8
  JSON 请求表单参数在Request Payload中，用来告诉服务端消息主体是序列化后的 JSON 字符串，由于 JSON 规范的流行，除了低版本 IE 之外的各大浏览器都原生支持 JSON.stringify。各大抓包工具如 Chrome 自带的开发者工具、Firebug、Fiddler，都会以树形结构展示 JSON 数据，非常友好。但也有些服务端语言还没有支持这种方式，PHP 就无法通过 $_POST 对象从上面的请求中获得内容。这时候需要动手处理下，通过 $_SERVER["CONTENT_TYPE"] 判断请求头为 application/json 时，从 php://input 里获得原始输入流，再 json_decode 成对象：
    
    similar_text("application/x-www-form-urlencoded",$_SERVER["CONTENT_TYPE"])>33

    $postEntity = file_get_contents('php://input', 'r');
    $JSON = json_decode($t_data,true);

  Content-Type: text/plain;charset=UTF-8
  其他情况如使用原生AJAX的POST请求如果不指定请求头，默认使用的是纯文本，参数出现在Request payload块


  php://input 是个可以访问请求的原始数据的只读流。 POST 请求的情况下，最好使用 php://input 来代替 $HTTP_RAW_POST_DATA，因为它不依赖于特定的 php.ini 指令。 而且，这样的情况下 $HTTP_RAW_POST_DATA 默认没有填充，比激活 always_populate_raw_post_data 潜在需要更少的内存。 enctype="multipart/form-data" 的时候 php://input 是无效的。 php://input 与$HTTP_RAW_POST_DATA读取的数据是一样的，都只读取Content-Type不为multipart/form-data的数据。
  
  php.ini配置文件开启配置： always_populate_raw_post_data = On
  注意：这种处理方式是在php版本较低的时候，在php-ini中才有的配置，当版本升级到7，或者更高的时候该机制就被废弃掉了。

  学习笔记
   1，Coentent-Type仅在取值为application/x-www-data-urlencoded和multipart/form-data两种情况下，PHP才会将http请求数据包中相应的数据填入全局变量$_POST 
   2，PHP不能识别的Content-Type类型的时候，会将http请求包中相应的数据填入变量$HTTP_RAW_POST_DATA 
   3, 只有Coentent-Type为multipart/form-data的时候，即上传文件是PHP不会将http请求数据包中的相应数据填入php://input。
   4，只有Content-Type为application/x-www-data-urlencoded时，php://input数据才跟$_POST数据相一致。 
   5，php://input数据总是跟$HTTP_RAW_POST_DATA相同，但是php://input比$HTTP_RAW_POST_DATA更凑效，且不需要特殊设置php.ini 
   6，PHP会将PATH字段的query_path部分，填入全局变量$_GET。通常情况下，GET方法提交的http请求，body为空。


# 🚩 HTST Strict-Transport-Security: max-age=15768000

服务器的响应头
Content-Security-Policy: upgrade-insecure-requests

浏览器的请求头出现
Upgrade-Insecure-Requests:1
则是告诉服务器，自己支持这种操作，也就是我能读懂你服务器发过来的上面这条信息，并且在以后发请求的时候不用http而用https


想想这样一种场景：
有的网站开启了https，但为了照顾用户的使用体验（因为用户总是很赖的，一般不会主动键入https，而是直接输入域名, 直接输入域名访问，默认就是http访问）同时也支持http访问，当用户http访问的时候，就会返回给用户一个302重定向，重定向到https的地址，然后后续的访问都使用https传输,这种通信模式看起来貌似没有问题，但细致分析，就会发现种通信模式也存在一个风险，那就是这个302重定向可能会被劫持篡改，如果被改成一个恶意的或者钓鱼的https站点，然后，你懂得，一旦落入钓鱼站点，数据还有安全可言吗？

对于篡改302的攻击，建议服务器开启HTTP Strict Transport Security功能，这个功能的含义是：
‍当用户已经安全的登录开启过htst功能的网站 (支持hsts功能的站点会在响应头中插入：Strict-Transport-Security) 之后，支持htst的浏览器(比如chrome. firefox)会自动将这个域名加入到HSTS列表，下次即使用户使用http访问这个网站，支持htst功能的浏览器就会自动发送https请求（前提是用户没有清空缓存，如果清空了缓存第一次访问还是明文，后续浏览器接收到服务器响应头中的Strict-Transport-Security，就会把域名加入到hsts缓存中，然后才会在发送请求前将http内部转换成https），而不是先发送http，然后重定向到https，这样就能避免中途的302重定向URL被篡改。‍‍进一步提高通信的安全性。‍‍‍ 


