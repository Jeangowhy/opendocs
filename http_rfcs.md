# 🚩 HTTP
[RFC 1945 - Hypertext Transfer Protocol -- HTTP/1.0](http://www.rfc-editor.org/info/rfc1945)
[RFC 2616 - Hypertext Transfer Protocol -- HTTP/1.1](http://www.rfc-editor.org/rfc/rfc2616.html)
[RFC 2818 - HTTP Over TLS](https://www.rfc-editor.org/rfc/rfc2818.html)
[RFC 6101 - The Secure Sockets Layer (SSL) Protocol V3.0](https://www.rfc-editor.org/rfc/rfc6101.html)
- https://www.rfc-editor.org/rfc/rfc7231.html
- https://www.rfc-editor.org/rfc/rfc9110

- [Hypertext Transfer Protocol -- HTTP/1.0](#atoc) 
- [Hypertext Transfer Protocol -- HTTP/1.1](#btoc) 
- [Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content](#etop)
- [RFC 9110 HTTP Semantics](#ftop)
- [HTTP Over TLS](#ctoc)
- [The Secure Sockets Layer (SSL) Protocol Version 3.0](#dtoc)


超文本传输协议 HTTP - HyperText Transfer Protocol 是互联网上应用最为广泛的一种网络协议，所有的 WWW 文件都必须遵守这个标准，设计 HTTP 最初的目的是为了提供一种发布和接收 HTML 页面的方法。

HTTPS - HTTP over Secure Socket Layer，简单讲是 HTTP 的安全版，即原本 HTTP 数据经过 SSL 协议层处理再传输。

SSL - Secure Sockets Layer 叫做安全套接层，它是在上世纪90年代中期，由网景公司设计的，网景公司不光发明了 SSL，还发明了很多 Web 的基础设施——比如 CSS 样式表和 JavaScript 脚本。SSL 加入，使得互联网上使用明文的 HTTP 协议具有非常高的安全性，原先明文传输条件下存在的缺点得到了抑制，比如传输内容会被嗅探偷窥和篡改。

到了 1999 年，SSL 因为应用广泛已经成为互联网上的事实标准，IETF 就在那年把 SSL 标准化改名称为 TLS - Transport Layer Security 传输层安全协议。很多相关的文章都把这两者并列称呼 SSL/TLS，因为这两者可以视作同一个东西的不同阶段，TLS 比 SSL 要先进。

SSL是Netscape开发的专门用户保护Web通讯的，目前版本为3.0。最新版本的TLS 1.0是IETF(工程任务组)制定的一种新的协议，它建立在SSL 3.0协议规范之上，是SSL 3.0的后续版本。两者差别极小，可以理解为SSL 3.1，它是写入了RFC的。 

# 🚩 HTTP数据包的 Content-Type 常见内容类型: 

1.   Content-Type: application/x-www-form-urlencoded

    POST 表单请求，参数出现在 Form Data，在发送前编码所有字符，是默认表单提交类型，大部分服务端语言都对这种方式有很好的支持，在PHP中可以通过 `$_POST` 来获取数据。

2.   Content-Type: multipart/form-data

    POST表单请求，参数出现在 Form Data，不对字符编码。表单包含文件上传控件的表单时，必须使用该值，且还要增设文件内容分割符 boundary。大部分服务端语言都对这种方式也有很好的支持。

3.   Content-Type: text/plain

    空格转换为 "+" 加号，但不对特殊字符编码。PHP 就无法通过 `$_POST` 对象从上面的请求中获得内容，需要读取php://input。

4.   Content-Type: application/json;charset=UTF-8

    JSON 请求表单参数在Request Payload中，用来告诉服务端消息主体是序列化后的 JSON 字符串，由于 JSON 规范的流行，除了低版本 IE 之外的各大浏览器都原生支持 JSON.stringify。各大抓包工具如 Chrome 自带的开发者工具、Firebug、Fiddler，都会以树形结构展示 JSON 数据，非常友好。但也有些服务端语言还没有支持这种方式，PHP 就无法通过 `$_POST` 对象从上面的请求中获得内容。这时候需要动手处理下，通过 `$_SERVER["CONTENT_TYPE"]` 判断请求头为 application/json 时，从 `php://input` 里获得原始输入流，再 json_decode 成对象：
    
        similar_text("application/x-www-form-urlencoded",$_SERVER["CONTENT_TYPE"])>33

        $postEntity = file_get_contents('php://input', 'r');
        $JSON = json_decode($t_data,true);

5.   Content-Type: text/plain;charset=UTF-8

    其他情况如使用原生 AJAX 的 POST 请求如果不指定请求头，默认使用的是纯文本，参数出现在 Request payload


php://input 是个可以访问请求的原始数据的只读流。 POST 请求的情况下，最好使用 php://input 来代替 $HTTP_RAW_POST_DATA，因为它不依赖于特定的 php.ini 指令。 而且，这样的情况下 $HTTP_RAW_POST_DATA 默认没有填充，比激活 always_populate_raw_post_data 潜在需要更少的内存。 enctype="multipart/form-data" 的时候 php://input 是无效的。 php://input 与$HTTP_RAW_POST_DATA读取的数据是一样的，都只读取Content-Type不为multipart/form-data的数据。

php.ini配置文件开启配置： always_populate_raw_post_data = On
注意：这种处理方式是在php版本较低的时候，在php-ini中才有的配置，当版本升级到7，或者更高的时候该机制就被废弃掉了。

  学习笔记

   1，Coentent-Type 仅在取值为 application/x-www-data-urlencoded和multipart/form-data 两种情况下，PHP 才会将 http 请求数据包中相应的数据填入全局变量 `$_POST
   ` 
   2，PHP 不能识别的 Content-Type 类型的时候，会将 HTTP 请求包中相应的数据填入变量 `$HTTP_RAW_POST_DATA` 

   3, 只有 Coentent-Type: multipart/form-data，即多文件上传时，PHP 不会将 HTTP 请求数据包中的数据填入 PHP://input。

   4，只有 Content-Type: application/x-www-data-urlencoded，php://input 数据才跟 `$_POST` 数据相一致。 

   5，`php://input` 数据总是跟 `$HTTP_RAW_POST_DATA` 相同，但是 `php://input` 比 `$HTTP_RAW_POST_DATA` 更凑效，且不需要 php.ini 特殊设置

   6，PHP 会将 PATH 字段的 query_path 部分，填入全局变量 `$_GET`。通常情况下，HTTP GET 请求，无 body 数据。


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

Hypertext Transfer Protocol -- HTTP/1.0
========================================================

https://www.rfc-editor.org/rfc/rfc1945.txt
--------------------------------------------------------



Network Working Group                                     T. Berners-Lee
Request for Comments: 1945                                       MIT/LCS
Category: Informational                                      R. Fielding
                                                               UC Irvine
                                                              H. Frystyk
                                                                 MIT/LCS
                                                                May 1996


                Hypertext Transfer Protocol -- HTTP/1.0

Status of This Memo

   This memo provides information for the Internet community.  This memo
   does not specify an Internet standard of any kind.  Distribution of
   this memo is unlimited.

IESG Note:

   The IESG has concerns about this protocol, and expects this document
   to be replaced relatively soon by a standards track document.

Abstract

   The Hypertext Transfer Protocol (HTTP) is an application-level
   protocol with the lightness and speed necessary for distributed,
   collaborative, hypermedia information systems. It is a generic,
   stateless, object-oriented protocol which can be used for many tasks,
   such as name servers and distributed object management systems,
   through extension of its request methods (commands). A feature of
   HTTP is the typing of data representation, allowing systems to be
   built independently of the data being transferred.

   HTTP has been in use by the World-Wide Web global information
   initiative since 1990. This specification reflects common usage of
   the protocol referred to as "HTTP/1.0".

[Table of Contents](){id=atoc}
--------------------------------------------------------

- 1.  Introduction ....................................... [4](#a04)
- 1.1  Purpose ....................................... [4](#a04)
- 1.2  Terminology ................................... [4](#a04)
- 1.3  Overall Operation ............................. [6](#a06)
- 1.4  HTTP and MIME ................................. [8](#a08)
- 2  Notational Conventions and Generic Grammar ......... [8](#a08)
- 2.1  Augmented BNF ................................. [8](#a08)
- 2.2  Basic Rules .................................. [10](#a10)



Berners-Lee, et al           Informational                [Page 1](#atoc){id=a01}

RFC 1945                        HTTP/1.0                        May 1996



- 3  Protocol Parameters ............................... [12](#a12)
- 3.1  HTTP Version ................................. [12](#a12)
- 3.2  Uniform Resource Identifiers ................. [14](#a14)
- 3.2.1  General Syntax ........................ [14](#a14)
- 3.2.2  http URL .............................. [15](#a15)
- 3.3  Date/Time Formats ............................ [15](#a15)
- 3.4  Character Sets ............................... [17](#a17)
- 3.5  Content Codings .............................. [18](#a18)
- 3.6  Media Types .................................. [19](#a19)
- 3.6.1  Canonicalization and Text Defaults .... [19](#a19)
- 3.6.2  Multipart Types ....................... [20](#a20)
- 3.7  Product Tokens ............................... [20](#a20)
- 4  HTTP Message ...................................... [21](#a21)
- 4.1  Message Types ................................ [21](#a21)
- 4.2  Message Headers .............................. [22](#a22)
- 4.3  General Header Fields ........................ [23](#a23)
- 5  Request ........................................... [23](#a23)
- 5.1  Request-Line ................................. [23](#a23)
- 5.1.1  Method ................................ [24](#a24)
- 5.1.2  Request-URI ........................... [24](#a24)
- 5.2  Request Header Fields ........................ [25](#a25)
- 6  Response .......................................... [25](#a25)
- 6.1  Status-Line .................................. [26](#a26)
- 6.1.1  Status Code and Reason Phrase ......... [26](#a26)
- 6.2  Response Header Fields ....................... [28](#a28)
- 7  Entity ............................................ [28](#a28)
- 7.1  Entity Header Fields ......................... [29](#a29)
- 7.2  Entity Body .................................. [29](#a29)
- 7.2.1  Type .................................. [29](#a29)
- 7.2.2  Length ................................ [30](#a30)
- 8  Method Definitions ................................ [30](#a30)
- 8.1  GET .......................................... [31](#a31)
- 8.2  HEAD ......................................... [31](#a31)
- 8.3  POST ......................................... [31](#a31)
- 9  Status Code Definitions ........................... [32](#a32)
- 9.1  Informational 1xx ............................ [32](#a32)
- 9.2  Successful 2xx ............................... [32](#a32)
- 9.3  Redirection 3xx .............................. [34](#a34)
- 9.4  Client Error 4xx ............................. [35](#a35)
- 9.5  Server Error 5xx ............................. [37](#a37)
- 10 Header Field Definitions .......................... [37](#a37)
- 10.1  Allow ....................................... [38](#a38)
- 10.2  Authorization ............................... [38](#a38)
- 10.3  Content-Encoding ............................ [39](#a39)
- 10.4  Content-Length .............................. [39](#a39)
- 10.5  Content-Type ................................ [40](#a40)
- 10.6  Date ........................................ [40](#a40)
- 10.7  Expires ..................................... [41](#a41)
- 10.8  From ........................................ [42](#a42)
- 10.9  If-Modified-Since ........................... [42](#a42)
- 10.10 Last-Modified ............................... [43](#a43)
- 10.11 Location .................................... [44](#a44)
- 10.12 Pragma ...................................... [44](#a44)
- 10.13 Referer ..................................... [44](#a44)
- 10.14 Server ...................................... [45](#a45)
- 10.15 User-Agent .................................. [46](#a46)
- 10.16 WWW-Authenticate ............................ [46](#a46)



Berners-Lee, et al           Informational                [Page 2](#atoc){id=a02}

RFC 1945                        HTTP/1.0                        May 1996

- 11 Access Authentication ............................. [47](#a47)
- 11.1  Basic Authentication Scheme ................. [48](#a48)
- 12 Security Considerations ........................... [49](#a49)
- 12.1  Authentication of Clients ................... [49](#a49)
- 12.2  Safe Methods ................................ [49](#a49)
- 12.3  Abuse of Server Log Information ............. [50](#a50)
- 12.4  Transfer of Sensitive Information ........... [50](#a50)
- 12.5  Attacks Based On File and Path Names ........ [51](#a51)
- 13 Acknowledgments ................................... [51](#a51)
- 14 References ........................................ [52](#a52)
- 15 Authors' Addresses ................................ [54](#a54)
- Appendix A.   Internet Media Type message/http ........ [55](#a55)
- Appendix B.   Tolerant Applications ................... [55](#a55)
- Appendix C.   Relationship to MIME .................... [56](#a56)
- C.1  Conversion to Canonical Form ................. [56](#a56)
- C.2  Conversion of Date Formats ................... [57](#a57)
- C.3  Introduction of Content-Encoding ............. [57](#a57)
- C.4  No Content-Transfer-Encoding ................. [57](#a57)
- C.5  HTTP Header Fields in Multipart Body-Parts ... [57](#a57)
- Appendix D.   Additional Features ..................... [57](#a57)
- D.1  Additional Request Methods ................... [58](#a58)
- D.1.1  PUT ................................... [58](#a58)
- D.1.2  DELETE ................................ [58](#a58)
- D.1.3  LINK .................................. [58](#a58)
- D.1.4  UNLINK ................................ [58](#a58)
- D.2  Additional Header Field Definitions .......... [58](#a58)
- D.2.1  Accept ................................ [58](#a58)
- D.2.2  Accept-Charset ........................ [59](#a59)
- D.2.3  Accept-Encoding ....................... [59](#a59)
- D.2.4  Accept-Language ....................... [59](#a59)
- D.2.5  Content-Language ...................... [59](#a59)
- D.2.6  Link .................................. [59](#a59)
- D.2.7  MIME-Version .......................... [59](#a59)
- D.2.8  Retry-After ........................... [60](#a60)
- D.2.9  Title ................................. [60](#a60)
- D.2.10 URI ................................... [60](#a60)







Berners-Lee, et al           Informational                [Page 3](#atoc){id=a03}

RFC 1945                        HTTP/1.0                        May 1996


/1.  Introduction
========================================================



1.1  Purpose
--------------------------------------------------------


   The Hypertext Transfer Protocol (HTTP) is an application-level
   protocol with the lightness and speed necessary for distributed,
   collaborative, hypermedia information systems. HTTP has been in use
   by the World-Wide Web global information initiative since 1990. This
   specification reflects common usage of the protocol referred too as
   "HTTP/1.0". This specification describes the features that seem to be
   consistently implemented in most HTTP/1.0 clients and servers. The
   specification is split into two sections. Those features of HTTP for
   which implementations are usually consistent are described in the
   main body of this document. Those features which have few or
   inconsistent implementations are listed in Appendix D.

   Practical information systems require more functionality than simple
   retrieval, including search, front-end update, and annotation. HTTP
   allows an open-ended set of methods to be used to indicate the
   purpose of a request. It builds on the discipline of reference
   provided by the Uniform Resource Identifier (URI) [2], as a location
   (URL) [4] or name (URN) [16], for indicating the resource on which a
   method is to be applied. Messages are passed in a format similar to
   that used by Internet Mail [7] and the Multipurpose Internet Mail
   Extensions (MIME) [5].

   HTTP is also used as a generic protocol for communication between
   user agents and proxies/gateways to other Internet protocols, such as
   SMTP [12], NNTP [11], FTP [14], Gopher [1], and WAIS [8], allowing
   basic hypermedia access to resources available from diverse
   applications and simplifying the implementation of user agents.

1.2  Terminology
--------------------------------------------------------


   This specification uses a number of terms to refer to the roles
   played by participants in, and objects of, the HTTP communication.

   connection

       A transport layer virtual circuit established between two
       application programs for the purpose of communication.

   message

       The basic unit of HTTP communication, consisting of a structured
       sequence of octets matching the syntax defined in Section 4 and
       transmitted via the connection.




Berners-Lee, et al           Informational                [Page 4](#atoc){id=a04}

RFC 1945                        HTTP/1.0                        May 1996


   request

       An HTTP request message (as defined in Section 5).

   response

       An HTTP response message (as defined in Section 6).

   resource

       A network data object or service which can be identified by a
       URI (Section 3.2).

   entity

       A particular representation or rendition of a data resource, or
       reply from a service resource, that may be enclosed within a
       request or response message. An entity consists of
       metainformation in the form of entity headers and content in the
       form of an entity body.

   client

       An application program that establishes connections for the
       purpose of sending requests.

   user agent

       The client which initiates a request. These are often browsers,
       editors, spiders (web-traversing robots), or other end user
       tools.

   server

       An application program that accepts connections in order to
       service requests by sending back responses.

   origin server

       The server on which a given resource resides or is to be created.

   proxy

       An intermediary program which acts as both a server and a client
       for the purpose of making requests on behalf of other clients.
       Requests are serviced internally or by passing them, with
       possible translation, on to other servers. A proxy must
       interpret and, if necessary, rewrite a request message before



Berners-Lee, et al           Informational                [Page 5](#atoc){id=a05}

RFC 1945                        HTTP/1.0                        May 1996


       forwarding it. Proxies are often used as client-side portals
       through network firewalls and as helper applications for
       handling requests via protocols not implemented by the user
       agent.

   gateway

       A server which acts as an intermediary for some other server.
       Unlike a proxy, a gateway receives requests as if it were the
       origin server for the requested resource; the requesting client
       may not be aware that it is communicating with a gateway.
       Gateways are often used as server-side portals through network
       firewalls and as protocol translators for access to resources
       stored on non-HTTP systems.

   tunnel

       A tunnel is an intermediary program which is acting as a blind
       relay between two connections. Once active, a tunnel is not
       considered a party to the HTTP communication, though the tunnel
       may have been initiated by an HTTP request. The tunnel ceases to
       exist when both ends of the relayed connections are closed.
       Tunnels are used when a portal is necessary and the intermediary
       cannot, or should not, interpret the relayed communication.

   cache

       A program's local store of response messages and the subsystem
       that controls its message storage, retrieval, and deletion. A
       cache stores cachable responses in order to reduce the response
       time and network bandwidth consumption on future, equivalent
       requests. Any client or server may include a cache, though a
       cache cannot be used by a server while it is acting as a tunnel.

   Any given program may be capable of being both a client and a server;
   our use of these terms refers only to the role being performed by the
   program for a particular connection, rather than to the program's
   capabilities in general. Likewise, any server may act as an origin
   server, proxy, gateway, or tunnel, switching behavior based on the
   nature of each request.

1.3  Overall Operation
--------------------------------------------------------


   The HTTP protocol is based on a request/response paradigm. A client
   establishes a connection with a server and sends a request to the
   server in the form of a request method, URI, and protocol version,
   followed by a MIME-like message containing request modifiers, client
   information, and possible body content. The server responds with a



Berners-Lee, et al           Informational                [Page 6](#atoc){id=a06}

RFC 1945                        HTTP/1.0                        May 1996


   status line, including the message's protocol version and a success
   or error code, followed by a MIME-like message containing server
   information, entity metainformation, and possible body content.

   Most HTTP communication is initiated by a user agent and consists of
   a request to be applied to a resource on some origin server. In the
   simplest case, this may be accomplished via a single connection (v)
   between the user agent (UA) and the origin server (O).

          request chain ------------------------>
       UA -------------------v------------------- O
          <----------------------- response chain

   A more complicated situation occurs when one or more intermediaries
   are present in the request/response chain. There are three common
   forms of intermediary: proxy, gateway, and tunnel. A proxy is a
   forwarding agent, receiving requests for a URI in its absolute form,
   rewriting all or parts of the message, and forwarding the reformatted
   request toward the server identified by the URI. A gateway is a
   receiving agent, acting as a layer above some other server(s) and, if
   necessary, translating the requests to the underlying server's
   protocol. A tunnel acts as a relay point between two connections
   without changing the messages; tunnels are used when the
   communication needs to pass through an intermediary (such as a
   firewall) even when the intermediary cannot understand the contents
   of the messages.

          request chain -------------------------------------->
       UA -----v----- A -----v----- B -----v----- C -----v----- O
          <------------------------------------- response chain

   The figure above shows three intermediaries (A, B, and C) between the
   user agent and origin server. A request or response message that
   travels the whole chain must pass through four separate connections.
   This distinction is important because some HTTP communication options
   may apply only to the connection with the nearest, non-tunnel
   neighbor, only to the end-points of the chain, or to all connections
   along the chain. Although the diagram is linear, each participant may
   be engaged in multiple, simultaneous communications. For example, B
   may be receiving requests from many clients other than A, and/or
   forwarding requests to servers other than C, at the same time that it
   is handling A's request.

   Any party to the communication which is not acting as a tunnel may
   employ an internal cache for handling requests. The effect of a cache
   is that the request/response chain is shortened if one of the
   participants along the chain has a cached response applicable to that
   request. The following illustrates the resulting chain if B has a



Berners-Lee, et al           Informational                [Page 7](#atoc){id=a07}

RFC 1945                        HTTP/1.0                        May 1996


   cached copy of an earlier response from O (via C) for a request which
   has not been cached by UA or A.

          request chain ---------->
       UA -----v----- A -----v----- B - - - - - - C - - - - - - O
          <--------- response chain

   Not all responses are cachable, and some requests may contain
   modifiers which place special requirements on cache behavior. Some
   HTTP/1.0 applications use heuristics to describe what is or is not a
   "cachable" response, but these rules are not standardized.

   On the Internet, HTTP communication generally takes place over TCP/IP
   connections. The default port is TCP 80 [15], but other ports can be
   used. This does not preclude HTTP from being implemented on top of
   any other protocol on the Internet, or on other networks. HTTP only
   presumes a reliable transport; any protocol that provides such
   guarantees can be used, and the mapping of the HTTP/1.0 request and
   response structures onto the transport data units of the protocol in
   question is outside the scope of this specification.

   Except for experimental applications, current practice requires that
   the connection be established by the client prior to each request and
   closed by the server after sending the response. Both clients and
   servers should be aware that either party may close the connection
   prematurely, due to user action, automated time-out, or program
   failure, and should handle such closing in a predictable fashion. In
   any case, the closing of the connection by either or both parties
   always terminates the current request, regardless of its status.

1.4  HTTP and MIME
--------------------------------------------------------


   HTTP/1.0 uses many of the constructs defined for MIME, as defined in
   RFC 1521 [5]. Appendix C describes the ways in which the context of
   HTTP allows for different use of Internet Media Types than is
   typically found in Internet mail, and gives the rationale for those
   differences.

/2.  Notational Conventions and Generic Grammar
========================================================



2.1  Augmented BNF
--------------------------------------------------------


   All of the mechanisms specified in this document are described in
   both prose and an augmented Backus-Naur Form (BNF) similar to that
   used by RFC 822 [7]. Implementors will need to be familiar with the
   notation in order to understand this specification. The augmented BNF
   includes the following constructs:




Berners-Lee, et al           Informational                [Page 8](#atoc){id=a08}

RFC 1945                        HTTP/1.0                        May 1996


   name = definition

       The name of a rule is simply the name itself (without any
       enclosing "<" and ">") and is separated from its definition by
       the equal character "=". Whitespace is only significant in that
       indentation of continuation lines is used to indicate a rule
       definition that spans more than one line. Certain basic rules
       are in uppercase, such as SP, LWS, HT, CRLF, DIGIT, ALPHA, etc.
       Angle brackets are used within definitions whenever their
       presence will facilitate discerning the use of rule names.

   "literal"

       Quotation marks surround literal text. Unless stated otherwise,
       the text is case-insensitive.

   rule1 | rule2

       Elements separated by a bar ("I") are alternatives,
       e.g., "yes | no" will accept yes or no.

   (rule1 rule2)

       Elements enclosed in parentheses are treated as a single
       element. Thus, "(elem (foo | bar) elem)" allows the token
       sequences "elem foo elem" and "elem bar elem".

   *rule

       The character "*" preceding an element indicates repetition. The
       full form is "<n>*<m>element" indicating at least <n> and at
       most <m> occurrences of element. Default values are 0 and
       infinity so that "*(element)" allows any number, including zero;
       "1*element" requires at least one; and "1*2element" allows one
       or two.

   [rule]

       Square brackets enclose optional elements; "[foo bar]" is
       equivalent to "*1(foo bar)".

   N rule

       Specific repetition: "<n>(element)" is equivalent to
       "<n>*<n>(element)"; that is, exactly <n> occurrences of
       (element). Thus 2DIGIT is a 2-digit number, and 3ALPHA is a
       string of three alphabetic characters.




Berners-Lee, et al           Informational                [Page 9](#atoc){id=a09}

RFC 1945                        HTTP/1.0                        May 1996


   #rule

       A construct "#" is defined, similar to "*", for defining lists
       of elements. The full form is "<n>#<m>element" indicating at
       least <n> and at most <m> elements, each separated by one or
       more commas (",") and optional linear whitespace (LWS). This
       makes the usual form of lists very easy; a rule such as
       "( *LWS element *( *LWS "," *LWS element ))" can be shown as
       "1#element". Wherever this construct is used, null elements are
       allowed, but do not contribute to the count of elements present.
       That is, "(element), , (element)" is permitted, but counts as
       only two elements. Therefore, where at least one element is
       required, at least one non-null element must be present. Default
       values are 0 and infinity so that "#(element)" allows any
       number, including zero; "1#element" requires at least one; and
       "1#2element" allows one or two.

   ; comment

       A semi-colon, set off some distance to the right of rule text,
       starts a comment that continues to the end of line. This is a
       simple way of including useful notes in parallel with the
       specifications.

   implied *LWS

       The grammar described by this specification is word-based.
       Except where noted otherwise, linear whitespace (LWS) can be
       included between any two adjacent words (token or
       quoted-string), and between adjacent tokens and delimiters
       (tspecials), without changing the interpretation of a field. At
       least one delimiter (tspecials) must exist between any two
       tokens, since they would otherwise be interpreted as a single
       token. However, applications should attempt to follow "common
       form" when generating HTTP constructs, since there exist some
       implementations that fail to accept anything beyond the common
       forms.

2.2  Basic Rules
--------------------------------------------------------


   The following rules are used throughout this specification to
   describe basic parsing constructs. The US-ASCII coded character set
   is defined by [17].

       OCTET          = <any 8-bit sequence of data>
       CHAR           = <any US-ASCII character (octets 0 - 127)>
       UPALPHA        = <any US-ASCII uppercase letter "A".."Z">
       LOALPHA        = <any US-ASCII lowercase letter "a".."z">



Berners-Lee, et al           Informational               [Page 10](#atoc){id=a10}

RFC 1945                        HTTP/1.0                        May 1996


       ALPHA          = UPALPHA | LOALPHA
       DIGIT          = <any US-ASCII digit "0".."9">
       CTL            = <any US-ASCII control character
                        (octets 0 - 31) and DEL (127)>
       CR             = <US-ASCII CR, carriage return (13)>
       LF             = <US-ASCII LF, linefeed (10)>
       SP             = <US-ASCII SP, space (32)>
       HT             = <US-ASCII HT, horizontal-tab (9)>
       <">            = <US-ASCII double-quote mark (34)>

   HTTP/1.0 defines the octet sequence CR LF as the end-of-line marker
   for all protocol elements except the Entity-Body (see Appendix B for
   tolerant applications). The end-of-line marker within an Entity-Body
   is defined by its associated media type, as described in Section 3.6.

       CRLF           = CR LF

   HTTP/1.0 headers may be folded onto multiple lines if each
   continuation line begins with a space or horizontal tab. All linear
   whitespace, including folding, has the same semantics as SP.

       LWS            = [CRLF] 1*( SP | HT )

   However, folding of header lines is not expected by some
   applications, and should not be generated by HTTP/1.0 applications.

   The TEXT rule is only used for descriptive field contents and values
   that are not intended to be interpreted by the message parser. Words
   of *TEXT may contain octets from character sets other than US-ASCII.

       TEXT           = <any OCTET except CTLs,
                        but including LWS>

   Recipients of header field TEXT containing octets outside the US-
   ASCII character set may assume that they represent ISO-8859-1
   characters.

   Hexadecimal numeric characters are used in several protocol elements.

       HEX            = "A" | "B" | "C" | "D" | "E" | "F"
                      | "a" | "b" | "c" | "d" | "e" | "f" | DIGIT

   Many HTTP/1.0 header field values consist of words separated by LWS
   or special characters. These special characters must be in a quoted
   string to be used within a parameter value.

       word           = token | quoted-string




Berners-Lee, et al           Informational               [Page 11](#atoc){id=a11}

RFC 1945                        HTTP/1.0                        May 1996


       token          = 1*<any CHAR except CTLs or tspecials>

       tspecials      = "(" | ")" | "<" | ">" | "@"
                      | "," | ";" | ":" | "\" | <">
                      | "/" | "[" | "]" | "?" | "="
                      | "{" | "}" | SP | HT

   Comments may be included in some HTTP header fields by surrounding
   the comment text with parentheses. Comments are only allowed in
   fields containing "comment" as part of their field value definition.
   In all other fields, parentheses are considered part of the field
   value.

       comment        = "(" *( ctext | comment ) ")"
       ctext          = <any TEXT excluding "(" and ")">

   A string of text is parsed as a single word if it is quoted using
   double-quote marks.

       quoted-string  = ( <"> *(qdtext) <"> )

       qdtext         = <any CHAR except <"> and CTLs,
                        but including LWS>

   Single-character quoting using the backslash ("\") character is not
   permitted in HTTP/1.0.

/3.  Protocol Parameters
========================================================



3.1  HTTP Version
--------------------------------------------------------


   HTTP uses a "<major>.<minor>" numbering scheme to indicate versions
   of the protocol. The protocol versioning policy is intended to allow
   the sender to indicate the format of a message and its capacity for
   understanding further HTTP communication, rather than the features
   obtained via that communication. No change is made to the version
   number for the addition of message components which do not affect
   communication behavior or which only add to extensible field values.
   The <minor> number is incremented when the changes made to the
   protocol add features which do not change the general message parsing
   algorithm, but which may add to the message semantics and imply
   additional capabilities of the sender. The <major> number is
   incremented when the format of a message within the protocol is
   changed.

   The version of an HTTP message is indicated by an HTTP-Version field
   in the first line of the message. If the protocol version is not
   specified, the recipient must assume that the message is in the



Berners-Lee, et al           Informational               [Page 12](#atoc){id=a12}

RFC 1945                        HTTP/1.0                        May 1996


   simple HTTP/0.9 format.

       HTTP-Version   = "HTTP" "/" 1*DIGIT "." 1*DIGIT

   Note that the major and minor numbers should be treated as separate
   integers and that each may be incremented higher than a single digit.
   Thus, HTTP/2.4 is a lower version than HTTP/2.13, which in turn is
   lower than HTTP/12.3. Leading zeros should be ignored by recipients
   and never generated by senders.

   This document defines both the 0.9 and 1.0 versions of the HTTP
   protocol. Applications sending Full-Request or Full-Response
   messages, as defined by this specification, must include an HTTP-
   Version of "HTTP/1.0".

   HTTP/1.0 servers must:

      o recognize the format of the Request-Line for HTTP/0.9 and
        HTTP/1.0 requests;

      o understand any valid request in the format of HTTP/0.9 or
        HTTP/1.0;

      o respond appropriately with a message in the same protocol
        version used by the client.

   HTTP/1.0 clients must:

      o recognize the format of the Status-Line for HTTP/1.0 responses;

      o understand any valid response in the format of HTTP/0.9 or
        HTTP/1.0.

   Proxy and gateway applications must be careful in forwarding requests
   that are received in a format different than that of the
   application's native HTTP version. Since the protocol version
   indicates the protocol capability of the sender, a proxy/gateway must
   never send a message with a version indicator which is greater than
   its native version; if a higher version request is received, the
   proxy/gateway must either downgrade the request version or respond
   with an error. Requests with a version lower than that of the
   application's native format may be upgraded before being forwarded;
   the proxy/gateway's response to that request must follow the server
   requirements listed above.







Berners-Lee, et al           Informational               [Page 13](#atoc){id=a13}

RFC 1945                        HTTP/1.0                        May 1996


3.2  Uniform Resource Identifiers
--------------------------------------------------------


   URIs have been known by many names: WWW addresses, Universal Document
   Identifiers, Universal Resource Identifiers [2], and finally the
   combination of Uniform Resource Locators (URL) [4] and Names (URN)
   [16]. As far as HTTP is concerned, Uniform Resource Identifiers are
   simply formatted strings which identify--via name, location, or any
   other characteristic--a network resource.

3.2.1 General Syntax
--------------------------------------------------------


   URIs in HTTP can be represented in absolute form or relative to some
   known base URI [9], depending upon the context of their use. The two
   forms are differentiated by the fact that absolute URIs always begin
   with a scheme name followed by a colon.

       URI            = ( absoluteURI | relativeURI ) [ "#" fragment ]

       absoluteURI    = scheme ":" *( uchar | reserved )

       relativeURI    = net_path | abs_path | rel_path

       net_path       = "//" net_loc [ abs_path ]
       abs_path       = "/" rel_path
       rel_path       = [ path ] [ ";" params ] [ "?" query ]

       path           = fsegment *( "/" segment )
       fsegment       = 1*pchar
       segment        = *pchar

       params         = param *( ";" param )
       param          = *( pchar | "/" )

       scheme         = 1*( ALPHA | DIGIT | "+" | "-" | "." )
       net_loc        = *( pchar | ";" | "?" )
       query          = *( uchar | reserved )
       fragment       = *( uchar | reserved )

       pchar          = uchar | ":" | "@" | "&" | "=" | "+"
       uchar          = unreserved | escape
       unreserved     = ALPHA | DIGIT | safe | extra | national

       escape         = "%" HEX HEX
       reserved       = ";" | "/" | "?" | ":" | "@" | "&" | "=" | "+"
       extra          = "!" | "*" | "'" | "(" | ")" | ","
       safe           = "$" | "-" | "_" | "."
       unsafe         = CTL | SP | <"> | "#" | "%" | "<" | ">"
       national       = <any OCTET excluding ALPHA, DIGIT,



Berners-Lee, et al           Informational               [Page 14](#atoc){id=a14}

RFC 1945                        HTTP/1.0                        May 1996


                        reserved, extra, safe, and unsafe>

   For definitive information on URL syntax and semantics, see RFC 1738
   [4] and RFC 1808 [9]. The BNF above includes national characters not
   allowed in valid URLs as specified by RFC 1738, since HTTP servers
   are not restricted in the set of unreserved characters allowed to
   represent the rel_path part of addresses, and HTTP proxies may
   receive requests for URIs not defined by RFC 1738.

3.2.2 http URL
--------------------------------------------------------


   The "http" scheme is used to locate network resources via the HTTP
   protocol. This section defines the scheme-specific syntax and
   semantics for http URLs.

       http_URL       = "http:" "//" host [ ":" port ] [ abs_path ]

       host           = <A legal Internet host domain name
                         or IP address (in dotted-decimal form),
                         as defined by Section 2.1 of RFC 1123>

       port           = *DIGIT

   If the port is empty or not given, port 80 is assumed. The semantics
   are that the identified resource is located at the server listening
   for TCP connections on that port of that host, and the Request-URI
   for the resource is abs_path. If the abs_path is not present in the
   URL, it must be given as "/" when used as a Request-URI (Section
   5.1.2).

      Note: Although the HTTP protocol is independent of the transport
      layer protocol, the http URL only identifies resources by their
      TCP location, and thus non-TCP resources must be identified by
      some other URI scheme.

   The canonical form for "http" URLs is obtained by converting any
   UPALPHA characters in host to their LOALPHA equivalent (hostnames are
   case-insensitive), eliding the [ ":" port ] if the port is 80, and
   replacing an empty abs_path with "/".

3.3  Date/Time Formats
--------------------------------------------------------


   HTTP/1.0 applications have historically allowed three different
   formats for the representation of date/time stamps:

       Sun, 06 Nov 1994 08:49:37 GMT    ; RFC 822, updated by RFC 1123
       Sunday, 06-Nov-94 08:49:37 GMT   ; RFC 850, obsoleted by RFC 1036
       Sun Nov  6 08:49:37 1994         ; ANSI C's asctime() format



Berners-Lee, et al           Informational               [Page 15](#atoc){id=a15}

RFC 1945                        HTTP/1.0                        May 1996


   The first format is preferred as an Internet standard and represents
   a fixed-length subset of that defined by RFC 1123 [6] (an update to
   RFC 822 [7]). The second format is in common use, but is based on the
   obsolete RFC 850 [10] date format and lacks a four-digit year.
   HTTP/1.0 clients and servers that parse the date value should accept
   all three formats, though they must never generate the third
   (asctime) format.

      Note: Recipients of date values are encouraged to be robust in
      accepting date values that may have been generated by non-HTTP
      applications, as is sometimes the case when retrieving or posting
      messages via proxies/gateways to SMTP or NNTP.

   All HTTP/1.0 date/time stamps must be represented in Universal Time
   (UT), also known as Greenwich Mean Time (GMT), without exception.
   This is indicated in the first two formats by the inclusion of "GMT"
   as the three-letter abbreviation for time zone, and should be assumed
   when reading the asctime format.

       HTTP-date      = rfc1123-date | rfc850-date | asctime-date

       rfc1123-date   = wkday "," SP date1 SP time SP "GMT"
       rfc850-date    = weekday "," SP date2 SP time SP "GMT"
       asctime-date   = wkday SP date3 SP time SP 4DIGIT

       date1          = 2DIGIT SP month SP 4DIGIT
                        ; day month year (e.g., 02 Jun 1982)
       date2          = 2DIGIT "-" month "-" 2DIGIT
                        ; day-month-year (e.g., 02-Jun-82)
       date3          = month SP ( 2DIGIT | ( SP 1DIGIT ))
                        ; month day (e.g., Jun  2)

       time           = 2DIGIT ":" 2DIGIT ":" 2DIGIT
                        ; 00:00:00 - 23:59:59

       wkday          = "Mon" | "Tue" | "Wed"
                      | "Thu" | "Fri" | "Sat" | "Sun"

       weekday        = "Monday" | "Tuesday" | "Wednesday"
                      | "Thursday" | "Friday" | "Saturday" | "Sunday"

       month          = "Jan" | "Feb" | "Mar" | "Apr"
                      | "May" | "Jun" | "Jul" | "Aug"
                      | "Sep" | "Oct" | "Nov" | "Dec"

       Note: HTTP requirements for the date/time stamp format apply
       only to their usage within the protocol stream. Clients and
       servers are not required to use these formats for user



Berners-Lee, et al           Informational               [Page 16](#atoc){id=a16}

RFC 1945                        HTTP/1.0                        May 1996


       presentation, request logging, etc.

3.4  Character Sets
--------------------------------------------------------


   HTTP uses the same definition of the term "character set" as that
   described for MIME:

      The term "character set" is used in this document to refer to a
      method used with one or more tables to convert a sequence of
      octets into a sequence of characters. Note that unconditional
      conversion in the other direction is not required, in that not all
      characters may be available in a given character set and a
      character set may provide more than one sequence of octets to
      represent a particular character. This definition is intended to
      allow various kinds of character encodings, from simple single-
      table mappings such as US-ASCII to complex table switching methods
      such as those that use ISO 2022's techniques. However, the
      definition associated with a MIME character set name must fully
      specify the mapping to be performed from octets to characters. In
      particular, use of external profiling information to determine the
      exact mapping is not permitted.

      Note: This use of the term "character set" is more commonly
      referred to as a "character encoding." However, since HTTP and
      MIME share the same registry, it is important that the terminology
      also be shared.

   HTTP character sets are identified by case-insensitive tokens. The
   complete set of tokens are defined by the IANA Character Set registry
   [15]. However, because that registry does not define a single,
   consistent token for each character set, we define here the preferred
   names for those character sets most likely to be used with HTTP
   entities. These character sets include those registered by RFC 1521
   [5] -- the US-ASCII [17] and ISO-8859 [18] character sets -- and
   other names specifically recommended for use within MIME charset
   parameters.

     charset = "US-ASCII"
             | "ISO-8859-1" | "ISO-8859-2" | "ISO-8859-3"
             | "ISO-8859-4" | "ISO-8859-5" | "ISO-8859-6"
             | "ISO-8859-7" | "ISO-8859-8" | "ISO-8859-9"
             | "ISO-2022-JP" | "ISO-2022-JP-2" | "ISO-2022-KR"
             | "UNICODE-1-1" | "UNICODE-1-1-UTF-7" | "UNICODE-1-1-UTF-8"
             | token

   Although HTTP allows an arbitrary token to be used as a charset
   value, any token that has a predefined value within the IANA
   Character Set registry [15] must represent the character set defined



Berners-Lee, et al           Informational               [Page 17](#atoc){id=a17}

RFC 1945                        HTTP/1.0                        May 1996


   by that registry. Applications should limit their use of character
   sets to those defined by the IANA registry.

   The character set of an entity body should be labelled as the lowest
   common denominator of the character codes used within that body, with
   the exception that no label is preferred over the labels US-ASCII or
   ISO-8859-1.

3.5  Content Codings
--------------------------------------------------------


   Content coding values are used to indicate an encoding transformation
   that has been applied to a resource. Content codings are primarily
   used to allow a document to be compressed or encrypted without losing
   the identity of its underlying media type. Typically, the resource is
   stored in this encoding and only decoded before rendering or
   analogous usage.

       content-coding = "x-gzip" | "x-compress" | token

       Note: For future compatibility, HTTP/1.0 applications should
       consider "gzip" and "compress" to be equivalent to "x-gzip"
       and "x-compress", respectively.

   All content-coding values are case-insensitive. HTTP/1.0 uses
   content-coding values in the Content-Encoding (Section 10.3) header
   field. Although the value describes the content-coding, what is more
   important is that it indicates what decoding mechanism will be
   required to remove the encoding. Note that a single program may be
   capable of decoding multiple content-coding formats. Two values are
   defined by this specification:

   x-gzip
       An encoding format produced by the file compression program
       "gzip" (GNU zip) developed by Jean-loup Gailly. This format is
       typically a Lempel-Ziv coding (LZ77) with a 32 bit CRC.

   x-compress
       The encoding format produced by the file compression program
       "compress". This format is an adaptive Lempel-Ziv-Welch coding
       (LZW).

       Note: Use of program names for the identification of
       encoding formats is not desirable and should be discouraged
       for future encodings. Their use here is representative of
       historical practice, not good design.






Berners-Lee, et al           Informational               [Page 18](#atoc){id=a18}

RFC 1945                        HTTP/1.0                        May 1996


3.6  Media Types
--------------------------------------------------------


   HTTP uses Internet Media Types [13] in the Content-Type header field
   (Section 10.5) in order to provide open and extensible data typing.

       media-type     = type "/" subtype *( ";" parameter )
       type           = token
       subtype        = token

   Parameters may follow the type/subtype in the form of attribute/value
   pairs.

       parameter      = attribute "=" value
       attribute      = token
       value          = token | quoted-string

   The type, subtype, and parameter attribute names are case-
   insensitive. Parameter values may or may not be case-sensitive,
   depending on the semantics of the parameter name. LWS must not be
   generated between the type and subtype, nor between an attribute and
   its value. Upon receipt of a media type with an unrecognized
   parameter, a user agent should treat the media type as if the
   unrecognized parameter and its value were not present.

   Some older HTTP applications do not recognize media type parameters.
   HTTP/1.0 applications should only use media type parameters when they
   are necessary to define the content of a message.

   Media-type values are registered with the Internet Assigned Number
   Authority (IANA [15]). The media type registration process is
   outlined in RFC 1590 [13]. Use of non-registered media types is
   discouraged.

3.6.1 Canonicalization and Text Defaults
--------------------------------------------------------


   Internet media types are registered with a canonical form. In
   general, an Entity-Body transferred via HTTP must be represented in
   the appropriate canonical form prior to its transmission. If the body
   has been encoded with a Content-Encoding, the underlying data should
   be in canonical form prior to being encoded.

   Media subtypes of the "text" type use CRLF as the text line break
   when in canonical form. However, HTTP allows the transport of text
   media with plain CR or LF alone representing a line break when used
   consistently within the Entity-Body. HTTP applications must accept
   CRLF, bare CR, and bare LF as being representative of a line break in
   text media received via HTTP.




Berners-Lee, et al           Informational               [Page 19](#atoc){id=a19}

RFC 1945                        HTTP/1.0                        May 1996


   In addition, if the text media is represented in a character set that
   does not use octets 13 and 10 for CR and LF respectively, as is the
   case for some multi-byte character sets, HTTP allows the use of
   whatever octet sequences are defined by that character set to
   represent the equivalent of CR and LF for line breaks. This
   flexibility regarding line breaks applies only to text media in the
   Entity-Body; a bare CR or LF should not be substituted for CRLF
   within any of the HTTP control structures (such as header fields and
   multipart boundaries).

   The "charset" parameter is used with some media types to define the
   character set (Section 3.4) of the data. When no explicit charset
   parameter is provided by the sender, media subtypes of the "text"
   type are defined to have a default charset value of "ISO-8859-1" when
   received via HTTP. Data in character sets other than "ISO-8859-1" or
   its subsets must be labelled with an appropriate charset value in
   order to be consistently interpreted by the recipient.

      Note: Many current HTTP servers provide data using charsets other
      than "ISO-8859-1" without proper labelling. This situation reduces
      interoperability and is not recommended. To compensate for this,
      some HTTP user agents provide a configuration option to allow the
      user to change the default interpretation of the media type
      character set when no charset parameter is given.

3.6.2 Multipart Types
--------------------------------------------------------


   MIME provides for a number of "multipart" types -- encapsulations of
   several entities within a single message's Entity-Body. The multipart
   types registered by IANA [15] do not have any special meaning for
   HTTP/1.0, though user agents may need to understand each type in
   order to correctly interpret the purpose of each body-part. An HTTP
   user agent should follow the same or similar behavior as a MIME user
   agent does upon receipt of a multipart type. HTTP servers should not
   assume that all HTTP clients are prepared to handle multipart types.

   All multipart types share a common syntax and must include a boundary
   parameter as part of the media type value. The message body is itself
   a protocol element and must therefore use only CRLF to represent line
   breaks between body-parts. Multipart body-parts may contain HTTP
   header fields which are significant to the meaning of that part.

3.7  Product Tokens
--------------------------------------------------------


   Product tokens are used to allow communicating applications to
   identify themselves via a simple product token, with an optional
   slash and version designator. Most fields using product tokens also
   allow subproducts which form a significant part of the application to



Berners-Lee, et al           Informational               [Page 20](#atoc){id=a20}

RFC 1945                        HTTP/1.0                        May 1996


   be listed, separated by whitespace. By convention, the products are
   listed in order of their significance for identifying the
   application.

       product         = token ["/" product-version]
       product-version = token

   Examples:

       User-Agent: CERN-LineMode/2.15 libwww/2.17b3

       Server: Apache/0.8.4

   Product tokens should be short and to the point -- use of them for
   advertizing or other non-essential information is explicitly
   forbidden. Although any token character may appear in a product-
   version, this token should only be used for a version identifier
   (i.e., successive versions of the same product should only differ in
   the product-version portion of the product value).

/4.  HTTP Message
========================================================



4.1  Message Types
--------------------------------------------------------


   HTTP messages consist of requests from client to server and responses
   from server to client.

       HTTP-message   = Simple-Request           ; HTTP/0.9 messages
                      | Simple-Response
                      | Full-Request             ; HTTP/1.0 messages
                      | Full-Response

   Full-Request and Full-Response use the generic message format of RFC
   822 [7] for transferring entities. Both messages may include optional
   header fields (also known as "headers") and an entity body. The
   entity body is separated from the headers by a null line (i.e., a
   line with nothing preceding the CRLF).

       Full-Request   = Request-Line             ; Section 5.1
                        *( General-Header        ; Section 4.3
                         | Request-Header        ; Section 5.2
                         | Entity-Header )       ; Section 7.1
                        CRLF
                        [ Entity-Body ]          ; Section 7.2

       Full-Response  = Status-Line              ; Section 6.1
                        *( General-Header        ; Section 4.3
                         | Response-Header       ; Section 6.2



Berners-Lee, et al           Informational               [Page 21](#atoc){id=a21}

RFC 1945                        HTTP/1.0                        May 1996


                         | Entity-Header )       ; Section 7.1
                        CRLF
                        [ Entity-Body ]          ; Section 7.2

   Simple-Request and Simple-Response do not allow the use of any header
   information and are limited to a single request method (GET).

       Simple-Request  = "GET" SP Request-URI CRLF

       Simple-Response = [ Entity-Body ]

   Use of the Simple-Request format is discouraged because it prevents
   the server from identifying the media type of the returned entity.

4.2  Message Headers
--------------------------------------------------------


   HTTP header fields, which include General-Header (Section 4.3),
   Request-Header (Section 5.2), Response-Header (Section 6.2), and
   Entity-Header (Section 7.1) fields, follow the same generic format as
   that given in Section 3.1 of RFC 822 [7]. Each header field consists
   of a name followed immediately by a colon (":"), a single space (SP)
   character, and the field value. Field names are case-insensitive.
   Header fields can be extended over multiple lines by preceding each
   extra line with at least one SP or HT, though this is not
   recommended.

       HTTP-header    = field-name ":" [ field-value ] CRLF

       field-name     = token
       field-value    = *( field-content | LWS )

       field-content  = <the OCTETs making up the field-value
                        and consisting of either *TEXT or combinations
                        of token, tspecials, and quoted-string>

   The order in which header fields are received is not significant.
   However, it is "good practice" to send General-Header fields first,
   followed by Request-Header or Response-Header fields prior to the
   Entity-Header fields.

   Multiple HTTP-header fields with the same field-name may be present
   in a message if and only if the entire field-value for that header
   field is defined as a comma-separated list [i.e., #(values)]. It must
   be possible to combine the multiple header fields into one "field-
   name: field-value" pair, without changing the semantics of the
   message, by appending each subsequent field-value to the first, each
   separated by a comma.




Berners-Lee, et al           Informational               [Page 22](#atoc){id=a22}

RFC 1945                        HTTP/1.0                        May 1996


4.3  General Header Fields
--------------------------------------------------------


   There are a few header fields which have general applicability for
   both request and response messages, but which do not apply to the
   entity being transferred. These headers apply only to the message
   being transmitted.

       General-Header = Date                     ; Section 10.6
                      | Pragma                   ; Section 10.12

   General header field names can be extended reliably only in
   combination with a change in the protocol version. However, new or
   experimental header fields may be given the semantics of general
   header fields if all parties in the communication recognize them to
   be general header fields. Unrecognized header fields are treated as
   Entity-Header fields.

/5. Request
========================================================



   A request message from a client to a server includes, within the
   first line of that message, the method to be applied to the resource,
   the identifier of the resource, and the protocol version in use. For
   backwards compatibility with the more limited HTTP/0.9 protocol,
   there are two valid formats for an HTTP request:

       Request        = Simple-Request | Full-Request

       Simple-Request = "GET" SP Request-URI CRLF

       Full-Request   = Request-Line             ; Section 5.1
                        *( General-Header        ; Section 4.3
                         | Request-Header        ; Section 5.2
                         | Entity-Header )       ; Section 7.1
                        CRLF
                        [ Entity-Body ]          ; Section 7.2

   If an HTTP/1.0 server receives a Simple-Request, it must respond with
   an HTTP/0.9 Simple-Response. An HTTP/1.0 client capable of receiving
   a Full-Response should never generate a Simple-Request.

5.1  Request-Line
--------------------------------------------------------


   The Request-Line begins with a method token, followed by the
   Request-URI and the protocol version, and ending with CRLF. The
   elements are separated by SP characters. No CR or LF are allowed
   except in the final CRLF sequence.

       Request-Line = Method SP Request-URI SP HTTP-Version CRLF



Berners-Lee, et al           Informational               [Page 23](#atoc){id=a23}

RFC 1945                        HTTP/1.0                        May 1996


   Note that the difference between a Simple-Request and the Request-
   Line of a Full-Request is the presence of the HTTP-Version field and
   the availability of methods other than GET.

5.1.1 Method
--------------------------------------------------------


   The Method token indicates the method to be performed on the resource
   identified by the Request-URI. The method is case-sensitive.

       Method         = "GET"                    ; Section 8.1
                      | "HEAD"                   ; Section 8.2
                      | "POST"                   ; Section 8.3
                      | extension-method

       extension-method = token

   The list of methods acceptable by a specific resource can change
   dynamically; the client is notified through the return code of the
   response if a method is not allowed on a resource. Servers should
   return the status code 501 (not implemented) if the method is
   unrecognized or not implemented.

   The methods commonly used by HTTP/1.0 applications are fully defined
   in Section 8.

5.1.2 Request-URI
--------------------------------------------------------


   The Request-URI is a Uniform Resource Identifier (Section 3.2) and
   identifies the resource upon which to apply the request.

       Request-URI    = absoluteURI | abs_path

   The two options for Request-URI are dependent on the nature of the
   request.

   The absoluteURI form is only allowed when the request is being made
   to a proxy. The proxy is requested to forward the request and return
   the response. If the request is GET or HEAD and a prior response is
   cached, the proxy may use the cached message if it passes any
   restrictions in the Expires header field. Note that the proxy may
   forward the request on to another proxy or directly to the server
   specified by the absoluteURI. In order to avoid request loops, a
   proxy must be able to recognize all of its server names, including
   any aliases, local variations, and the numeric IP address. An example
   Request-Line would be:

       GET http://www.w3.org/pub/WWW/TheProject.html HTTP/1.0




Berners-Lee, et al           Informational               [Page 24](#atoc){id=a24}

RFC 1945                        HTTP/1.0                        May 1996


   The most common form of Request-URI is that used to identify a
   resource on an origin server or gateway. In this case, only the
   absolute path of the URI is transmitted (see Section 3.2.1,
   abs_path). For example, a client wishing to retrieve the resource
   above directly from the origin server would create a TCP connection
   to port 80 of the host "www.w3.org" and send the line:

       GET /pub/WWW/TheProject.html HTTP/1.0

   followed by the remainder of the Full-Request. Note that the absolute
   path cannot be empty; if none is present in the original URI, it must
   be given as "/" (the server root).

   The Request-URI is transmitted as an encoded string, where some
   characters may be escaped using the "% HEX HEX" encoding defined by
   RFC 1738 [4]. The origin server must decode the Request-URI in order
   to properly interpret the request.

5.2  Request Header Fields
--------------------------------------------------------


   The request header fields allow the client to pass additional
   information about the request, and about the client itself, to the
   server. These fields act as request modifiers, with semantics
   equivalent to the parameters on a programming language method
   (procedure) invocation.

       Request-Header = Authorization            ; Section 10.2
                      | From                     ; Section 10.8
                      | If-Modified-Since        ; Section 10.9
                      | Referer                  ; Section 10.13
                      | User-Agent               ; Section 10.15

   Request-Header field names can be extended reliably only in
   combination with a change in the protocol version. However, new or
   experimental header fields may be given the semantics of request
   header fields if all parties in the communication recognize them to
   be request header fields. Unrecognized header fields are treated as
   Entity-Header fields.

/6.  Response
========================================================



   After receiving and interpreting a request message, a server responds
   in the form of an HTTP response message.

       Response        = Simple-Response | Full-Response

       Simple-Response = [ Entity-Body ]




Berners-Lee, et al           Informational               [Page 25](#atoc){id=a25}

RFC 1945                        HTTP/1.0                        May 1996


       Full-Response   = Status-Line             ; Section 6.1
                         *( General-Header       ; Section 4.3
                          | Response-Header      ; Section 6.2
                          | Entity-Header )      ; Section 7.1
                         CRLF
                         [ Entity-Body ]         ; Section 7.2

   A Simple-Response should only be sent in response to an HTTP/0.9
   Simple-Request or if the server only supports the more limited
   HTTP/0.9 protocol. If a client sends an HTTP/1.0 Full-Request and
   receives a response that does not begin with a Status-Line, it should
   assume that the response is a Simple-Response and parse it
   accordingly. Note that the Simple-Response consists only of the
   entity body and is terminated by the server closing the connection.

6.1  Status-Line
--------------------------------------------------------


   The first line of a Full-Response message is the Status-Line,
   consisting of the protocol version followed by a numeric status code
   and its associated textual phrase, with each element separated by SP
   characters. No CR or LF is allowed except in the final CRLF sequence.

       Status-Line = HTTP-Version SP Status-Code SP Reason-Phrase CRLF

   Since a status line always begins with the protocol version and
   status code

       "HTTP/" 1*DIGIT "." 1*DIGIT SP 3DIGIT SP

   (e.g., "HTTP/1.0 200 "), the presence of that expression is
   sufficient to differentiate a Full-Response from a Simple-Response.
   Although the Simple-Response format may allow such an expression to
   occur at the beginning of an entity body, and thus cause a
   misinterpretation of the message if it was given in response to a
   Full-Request, most HTTP/0.9 servers are limited to responses of type
   "text/html" and therefore would never generate such a response.

6.1.1 Status Code and Reason Phrase
--------------------------------------------------------


   The Status-Code element is a 3-digit integer result code of the
   attempt to understand and satisfy the request. The Reason-Phrase is
   intended to give a short textual description of the Status-Code. The
   Status-Code is intended for use by automata and the Reason-Phrase is
   intended for the human user. The client is not required to examine or
   display the Reason-Phrase.






Berners-Lee, et al           Informational               [Page 26](#atoc){id=a26}

RFC 1945                        HTTP/1.0                        May 1996


   The first digit of the Status-Code defines the class of response. The
   last two digits do not have any categorization role. There are 5
   values for the first digit:

      o 1xx: Informational - Not used, but reserved for future use

      o 2xx: Success - The action was successfully received,
             understood, and accepted.

      o 3xx: Redirection - Further action must be taken in order to
             complete the request

      o 4xx: Client Error - The request contains bad syntax or cannot
             be fulfilled

      o 5xx: Server Error - The server failed to fulfill an apparently
             valid request

   The individual values of the numeric status codes defined for
   HTTP/1.0, and an example set of corresponding Reason-Phrase's, are
   presented below. The reason phrases listed here are only recommended
   -- they may be replaced by local equivalents without affecting the
   protocol. These codes are fully defined in Section 9.

       Status-Code    = "200"   ; OK
                      | "201"   ; Created
                      | "202"   ; Accepted
                      | "204"   ; No Content
                      | "301"   ; Moved Permanently
                      | "302"   ; Moved Temporarily
                      | "304"   ; Not Modified
                      | "400"   ; Bad Request
                      | "401"   ; Unauthorized
                      | "403"   ; Forbidden
                      | "404"   ; Not Found
                      | "500"   ; Internal Server Error
                      | "501"   ; Not Implemented
                      | "502"   ; Bad Gateway
                      | "503"   ; Service Unavailable
                      | extension-code

       extension-code = 3DIGIT

       Reason-Phrase  = *<TEXT, excluding CR, LF>

   HTTP status codes are extensible, but the above codes are the only
   ones generally recognized in current practice. HTTP applications are
   not required to understand the meaning of all registered status



Berners-Lee, et al           Informational               [Page 27](#atoc){id=a27}

RFC 1945                        HTTP/1.0                        May 1996


   codes, though such understanding is obviously desirable. However,
   applications must understand the class of any status code, as
   indicated by the first digit, and treat any unrecognized response as
   being equivalent to the x00 status code of that class, with the
   exception that an unrecognized response must not be cached. For
   example, if an unrecognized status code of 431 is received by the
   client, it can safely assume that there was something wrong with its
   request and treat the response as if it had received a 400 status
   code. In such cases, user agents should present to the user the
   entity returned with the response, since that entity is likely to
   include human-readable information which will explain the unusual
   status.

6.2  Response Header Fields
--------------------------------------------------------


   The response header fields allow the server to pass additional
   information about the response which cannot be placed in the Status-
   Line. These header fields give information about the server and about
   further access to the resource identified by the Request-URI.

       Response-Header = Location                ; Section 10.11
                       | Server                  ; Section 10.14
                       | WWW-Authenticate        ; Section 10.16

   Response-Header field names can be extended reliably only in
   combination with a change in the protocol version. However, new or
   experimental header fields may be given the semantics of response
   header fields if all parties in the communication recognize them to
    be response header fields. Unrecognized header fields are treated as
   Entity-Header fields.

/7.  Entity
========================================================



   Full-Request and Full-Response messages may transfer an entity within
   some requests and responses. An entity consists of Entity-Header
   fields and (usually) an Entity-Body. In this section, both sender and
   recipient refer to either the client or the server, depending on who
   sends and who receives the entity.













Berners-Lee, et al           Informational               [Page 28](#atoc){id=a28}

RFC 1945                        HTTP/1.0                        May 1996


7.1  Entity Header Fields
--------------------------------------------------------


   Entity-Header fields define optional metainformation about the
   Entity-Body or, if no body is present, about the resource identified
   by the request.

       Entity-Header  = Allow                    ; Section 10.1
                      | Content-Encoding         ; Section 10.3
                      | Content-Length           ; Section 10.4
                      | Content-Type             ; Section 10.5
                      | Expires                  ; Section 10.7
                      | Last-Modified            ; Section 10.10
                      | extension-header

       extension-header = HTTP-header

   The extension-header mechanism allows additional Entity-Header fields
   to be defined without changing the protocol, but these fields cannot
   be assumed to be recognizable by the recipient. Unrecognized header
   fields should be ignored by the recipient and forwarded by proxies.

7.2  Entity Body
--------------------------------------------------------


   The entity body (if any) sent with an HTTP request or response is in
   a format and encoding defined by the Entity-Header fields.

       Entity-Body    = *OCTET

   An entity body is included with a request message only when the
   request method calls for one. The presence of an entity body in a
   request is signaled by the inclusion of a Content-Length header field
   in the request message headers. HTTP/1.0 requests containing an
   entity body must include a valid Content-Length header field.

   For response messages, whether or not an entity body is included with
   a message is dependent on both the request method and the response
   code. All responses to the HEAD request method must not include a
   body, even though the presence of entity header fields may lead one
   to believe they do. All 1xx (informational), 204 (no content), and
   304 (not modified) responses must not include a body. All other
   responses must include an entity body or a Content-Length header
   field defined with a value of zero (0).

7.2.1 Type
--------------------------------------------------------


   When an Entity-Body is included with a message, the data type of that
   body is determined via the header fields Content-Type and Content-
   Encoding. These define a two-layer, ordered encoding model:



Berners-Lee, et al           Informational               [Page 29](#atoc){id=a29}

RFC 1945                        HTTP/1.0                        May 1996


       entity-body := Content-Encoding( Content-Type( data ) )

   A Content-Type specifies the media type of the underlying data. A
   Content-Encoding may be used to indicate any additional content
   coding applied to the type, usually for the purpose of data
   compression, that is a property of the resource requested. The
   default for the content encoding is none (i.e., the identity
   function).

   Any HTTP/1.0 message containing an entity body should include a
   Content-Type header field defining the media type of that body. If
   and only if the media type is not given by a Content-Type header, as
   is the case for Simple-Response messages, the recipient may attempt
   to guess the media type via inspection of its content and/or the name
   extension(s) of the URL used to identify the resource. If the media
   type remains unknown, the recipient should treat it as type
   "application/octet-stream".

7.2.2 Length
--------------------------------------------------------


   When an Entity-Body is included with a message, the length of that
   body may be determined in one of two ways. If a Content-Length header
   field is present, its value in bytes represents the length of the
   Entity-Body. Otherwise, the body length is determined by the closing
   of the connection by the server.

   Closing the connection cannot be used to indicate the end of a
   request body, since it leaves no possibility for the server to send
   back a response. Therefore, HTTP/1.0 requests containing an entity
   body must include a valid Content-Length header field. If a request
   contains an entity body and Content-Length is not specified, and the
   server does not recognize or cannot calculate the length from other
   fields, then the server should send a 400 (bad request) response.

      Note: Some older servers supply an invalid Content-Length when
      sending a document that contains server-side includes dynamically
      inserted into the data stream. It must be emphasized that this
      will not be tolerated by future versions of HTTP. Unless the
      client knows that it is receiving a response from a compliant
      server, it should not depend on the Content-Length value being
      correct.

/8.  Method Definitions
========================================================



   The set of common methods for HTTP/1.0 is defined below. Although
   this set can be expanded, additional methods cannot be assumed to
   share the same semantics for separately extended clients and servers.




Berners-Lee, et al           Informational               [Page 30](#atoc){id=a30}

RFC 1945                        HTTP/1.0                        May 1996


8.1  GET
--------------------------------------------------------


   The GET method means retrieve whatever information (in the form of an
   entity) is identified by the Request-URI. If the Request-URI refers
   to a data-producing process, it is the produced data which shall be
   returned as the entity in the response and not the source text of the
   process, unless that text happens to be the output of the process.

   The semantics of the GET method changes to a "conditional GET" if the
   request message includes an If-Modified-Since header field. A
   conditional GET method requests that the identified resource be
   transferred only if it has been modified since the date given by the
   If-Modified-Since header, as described in Section 10.9. The
   conditional GET method is intended to reduce network usage by
   allowing cached entities to be refreshed without requiring multiple
   requests or transferring unnecessary data.

8.2  HEAD
--------------------------------------------------------


   The HEAD method is identical to GET except that the server must not
   return any Entity-Body in the response. The metainformation contained
   in the HTTP headers in response to a HEAD request should be identical
   to the information sent in response to a GET request. This method can
   be used for obtaining metainformation about the resource identified
   by the Request-URI without transferring the Entity-Body itself. This
   method is often used for testing hypertext links for validity,
   accessibility, and recent modification.

   There is no "conditional HEAD" request analogous to the conditional
   GET. If an If-Modified-Since header field is included with a HEAD
   request, it should be ignored.

8.3  POST
--------------------------------------------------------


   The POST method is used to request that the destination server accept
   the entity enclosed in the request as a new subordinate of the
   resource identified by the Request-URI in the Request-Line. POST is
   designed to allow a uniform method to cover the following functions:

      o Annotation of existing resources;

      o Posting a message to a bulletin board, newsgroup, mailing list,
        or similar group of articles;

      o Providing a block of data, such as the result of submitting a
        form [3], to a data-handling process;

      o Extending a database through an append operation.



Berners-Lee, et al           Informational               [Page 31](#atoc){id=a31}

RFC 1945                        HTTP/1.0                        May 1996


   The actual function performed by the POST method is determined by the
   server and is usually dependent on the Request-URI. The posted entity
   is subordinate to that URI in the same way that a file is subordinate
   to a directory containing it, a news article is subordinate to a
   newsgroup to which it is posted, or a record is subordinate to a
   database.

   A successful POST does not require that the entity be created as a
   resource on the origin server or made accessible for future
   reference. That is, the action performed by the POST method might not
   result in a resource that can be identified by a URI. In this case,
   either 200 (ok) or 204 (no content) is the appropriate response
   status, depending on whether or not the response includes an entity
   that describes the result.

   If a resource has been created on the origin server, the response
   should be 201 (created) and contain an entity (preferably of type
   "text/html") which describes the status of the request and refers to
   the new resource.

   A valid Content-Length is required on all HTTP/1.0 POST requests. An
   HTTP/1.0 server should respond with a 400 (bad request) message if it
   cannot determine the length of the request message's content.

   Applications must not cache responses to a POST request because the
   application has no way of knowing that the server would return an
   equivalent response on some future request.

/9.  Status Code Definitions
========================================================



   Each Status-Code is described below, including a description of which
   method(s) it can follow and any metainformation required in the
   response.

9.1  Informational 1xx
--------------------------------------------------------


   This class of status code indicates a provisional response,
   consisting only of the Status-Line and optional headers, and is
   terminated by an empty line. HTTP/1.0 does not define any 1xx status
   codes and they are not a valid response to a HTTP/1.0 request.
   However, they may be useful for experimental applications which are
   outside the scope of this specification.

9.2  Successful 2xx
--------------------------------------------------------


   This class of status code indicates that the client's request was
   successfully received, understood, and accepted.




Berners-Lee, et al           Informational               [Page 32](#atoc){id=a32}

RFC 1945                        HTTP/1.0                        May 1996


   200 OK

   The request has succeeded. The information returned with the
   response is dependent on the method used in the request, as follows:

   GET    an entity corresponding to the requested resource is sent
          in the response;

   HEAD   the response must only contain the header information and
          no Entity-Body;

   POST   an entity describing or containing the result of the action.

   201 Created

   The request has been fulfilled and resulted in a new resource being
   created. The newly created resource can be referenced by the URI(s)
   returned in the entity of the response. The origin server should
   create the resource before using this Status-Code. If the action
   cannot be carried out immediately, the server must include in the
   response body a description of when the resource will be available;
   otherwise, the server should respond with 202 (accepted).

   Of the methods defined by this specification, only POST can create a
   resource.

   202 Accepted

   The request has been accepted for processing, but the processing
   has not been completed. The request may or may not eventually be
   acted upon, as it may be disallowed when processing actually takes
   place. There is no facility for re-sending a status code from an
   asynchronous operation such as this.

   The 202 response is intentionally non-committal. Its purpose is to
   allow a server to accept a request for some other process (perhaps
   a batch-oriented process that is only run once per day) without
   requiring that the user agent's connection to the server persist
   until the process is completed. The entity returned with this
   response should include an indication of the request's current
   status and either a pointer to a status monitor or some estimate of
   when the user can expect the request to be fulfilled.

   204 No Content

   The server has fulfilled the request but there is no new
   information to send back. If the client is a user agent, it should
   not change its document view from that which caused the request to



Berners-Lee, et al           Informational               [Page 33](#atoc){id=a33}

RFC 1945                        HTTP/1.0                        May 1996


   be generated. This response is primarily intended to allow input
   for scripts or other actions to take place without causing a change
   to the user agent's active document view. The response may include
   new metainformation in the form of entity headers, which should
   apply to the document currently in the user agent's active view.

9.3  Redirection 3xx
--------------------------------------------------------


   This class of status code indicates that further action needs to be
   taken by the user agent in order to fulfill the request. The action
   required may be carried out by the user agent without interaction
   with the user if and only if the method used in the subsequent
   request is GET or HEAD. A user agent should never automatically
   redirect a request more than 5 times, since such redirections usually
   indicate an infinite loop.

   300 Multiple Choices

   This response code is not directly used by HTTP/1.0 applications,
   but serves as the default for interpreting the 3xx class of
   responses.

   The requested resource is available at one or more locations.
   Unless it was a HEAD request, the response should include an entity
   containing a list of resource characteristics and locations from
   which the user or user agent can choose the one most appropriate.
   If the server has a preferred choice, it should include the URL in
   a Location field; user agents may use this field value for
   automatic redirection.

   301 Moved Permanently

   The requested resource has been assigned a new permanent URL and
   any future references to this resource should be done using that
   URL. Clients with link editing capabilities should automatically
   relink references to the Request-URI to the new reference returned
   by the server, where possible.

   The new URL must be given by the Location field in the response.
   Unless it was a HEAD request, the Entity-Body of the response
   should contain a short note with a hyperlink to the new URL.

   If the 301 status code is received in response to a request using
   the POST method, the user agent must not automatically redirect the
   request unless it can be confirmed by the user, since this might
   change the conditions under which the request was issued.





Berners-Lee, et al           Informational               [Page 34](#atoc){id=a34}

RFC 1945                        HTTP/1.0                        May 1996


       Note: When automatically redirecting a POST request after
       receiving a 301 status code, some existing user agents will
       erroneously change it into a GET request.

   302 Moved Temporarily

   The requested resource resides temporarily under a different URL.
   Since the redirection may be altered on occasion, the client should
   continue to use the Request-URI for future requests.

   The URL must be given by the Location field in the response. Unless
   it was a HEAD request, the Entity-Body of the response should
   contain a short note with a hyperlink to the new URI(s).

   If the 302 status code is received in response to a request using
   the POST method, the user agent must not automatically redirect the
   request unless it can be confirmed by the user, since this might
   change the conditions under which the request was issued.

       Note: When automatically redirecting a POST request after
       receiving a 302 status code, some existing user agents will
       erroneously change it into a GET request.

   304 Not Modified

   If the client has performed a conditional GET request and access is
   allowed, but the document has not been modified since the date and
   time specified in the If-Modified-Since field, the server must
   respond with this status code and not send an Entity-Body to the
   client. Header fields contained in the response should only include
   information which is relevant to cache managers or which may have
   changed independently of the entity's Last-Modified date. Examples
   of relevant header fields include: Date, Server, and Expires. A
   cache should update its cached entity to reflect any new field
   values given in the 304 response.

9.4  Client Error 4xx
--------------------------------------------------------


   The 4xx class of status code is intended for cases in which the
   client seems to have erred. If the client has not completed the
   request when a 4xx code is received, it should immediately cease
   sending data to the server. Except when responding to a HEAD request,
   the server should include an entity containing an explanation of the
   error situation, and whether it is a temporary or permanent
   condition. These status codes are applicable to any request method.






Berners-Lee, et al           Informational               [Page 35](#atoc){id=a35}

RFC 1945                        HTTP/1.0                        May 1996


      Note: If the client is sending data, server implementations on TCP
      should be careful to ensure that the client acknowledges receipt
      of the packet(s) containing the response prior to closing the
      input connection. If the client continues sending data to the
      server after the close, the server's controller will send a reset
      packet to the client, which may erase the client's unacknowledged
      input buffers before they can be read and interpreted by the HTTP
      application.

   400 Bad Request

   The request could not be understood by the server due to malformed
   syntax. The client should not repeat the request without
   modifications.

   401 Unauthorized

   The request requires user authentication. The response must include
   a WWW-Authenticate header field (Section 10.16) containing a
   challenge applicable to the requested resource. The client may
   repeat the request with a suitable Authorization header field
   (Section 10.2). If the request already included Authorization
   credentials, then the 401 response indicates that authorization has
   been refused for those credentials. If the 401 response contains
   the same challenge as the prior response, and the user agent has
   already attempted authentication at least once, then the user
   should be presented the entity that was given in the response,
   since that entity may include relevant diagnostic information. HTTP
   access authentication is explained in Section 11.

   403 Forbidden

   The server understood the request, but is refusing to fulfill it.
   Authorization will not help and the request should not be repeated.
   If the request method was not HEAD and the server wishes to make
   public why the request has not been fulfilled, it should describe
   the reason for the refusal in the entity body. This status code is
   commonly used when the server does not wish to reveal exactly why
   the request has been refused, or when no other response is
   applicable.

   404 Not Found

   The server has not found anything matching the Request-URI. No
   indication is given of whether the condition is temporary or
   permanent. If the server does not wish to make this information
   available to the client, the status code 403 (forbidden) can be
   used instead.



Berners-Lee, et al           Informational               [Page 36](#atoc){id=a36}

RFC 1945                        HTTP/1.0                        May 1996


9.5  Server Error 5xx
--------------------------------------------------------


   Response status codes beginning with the digit "5" indicate cases in
   which the server is aware that it has erred or is incapable of
   performing the request. If the client has not completed the request
   when a 5xx code is received, it should immediately cease sending data
   to the server. Except when responding to a HEAD request, the server
   should include an entity containing an explanation of the error
   situation, and whether it is a temporary or permanent condition.
   These response codes are applicable to any request method and there
   are no required header fields.

   500 Internal Server Error

   The server encountered an unexpected condition which prevented it
   from fulfilling the request.

   501 Not Implemented

   The server does not support the functionality required to fulfill
   the request. This is the appropriate response when the server does
   not recognize the request method and is not capable of supporting
   it for any resource.

   502 Bad Gateway

   The server, while acting as a gateway or proxy, received an invalid
   response from the upstream server it accessed in attempting to
   fulfill the request.

   503 Service Unavailable

   The server is currently unable to handle the request due to a
   temporary overloading or maintenance of the server. The implication
   is that this is a temporary condition which will be alleviated
   after some delay.

       Note: The existence of the 503 status code does not imply
       that a server must use it when becoming overloaded. Some
       servers may wish to simply refuse the connection.

10.  Header Field Definitions
--------------------------------------------------------


   This section defines the syntax and semantics of all commonly used
   HTTP/1.0 header fields. For general and entity header fields, both
   sender and recipient refer to either the client or the server,
   depending on who sends and who receives the message.




Berners-Lee, et al           Informational               [Page 37](#atoc){id=a37}

RFC 1945                        HTTP/1.0                        May 1996


10.1  Allow
--------------------------------------------------------


   The Allow entity-header field lists the set of methods supported by
   the resource identified by the Request-URI. The purpose of this field
   is strictly to inform the recipient of valid methods associated with
   the resource. The Allow header field is not permitted in a request
   using the POST method, and thus should be ignored if it is received
   as part of a POST entity.

       Allow          = "Allow" ":" 1#method

    Example of use:

       Allow: GET, HEAD

   This field cannot prevent a client from trying other methods.
   However, the indications given by the Allow header field value should
   be followed. The actual set of allowed methods is defined by the
   origin server at the time of each request.

   A proxy must not modify the Allow header field even if it does not
   understand all the methods specified, since the user agent may have
   other means of communicating with the origin server.

   The Allow header field does not indicate what methods are implemented
   by the server.

10.2  Authorization
--------------------------------------------------------


   A user agent that wishes to authenticate itself with a server--
   usually, but not necessarily, after receiving a 401 response--may do
   so by including an Authorization request-header field with the
   request. The Authorization field value consists of credentials
   containing the authentication information of the user agent for the
   realm of the resource being requested.

       Authorization  = "Authorization" ":" credentials

   HTTP access authentication is described in Section 11. If a request
   is authenticated and a realm specified, the same credentials should
   be valid for all other requests within this realm.

   Responses to requests containing an Authorization field are not
   cachable.







Berners-Lee, et al           Informational               [Page 38](#atoc){id=a38}

RFC 1945                        HTTP/1.0                        May 1996


10.3  Content-Encoding
--------------------------------------------------------


   The Content-Encoding entity-header field is used as a modifier to the
   media-type. When present, its value indicates what additional content
   coding has been applied to the resource, and thus what decoding
   mechanism must be applied in order to obtain the media-type
   referenced by the Content-Type header field. The Content-Encoding is
   primarily used to allow a document to be compressed without losing
   the identity of its underlying media type.

       Content-Encoding = "Content-Encoding" ":" content-coding

   Content codings are defined in Section 3.5. An example of its use is

       Content-Encoding: x-gzip

   The Content-Encoding is a characteristic of the resource identified
   by the Request-URI. Typically, the resource is stored with this
   encoding and is only decoded before rendering or analogous usage.

10.4  Content-Length
--------------------------------------------------------


   The Content-Length entity-header field indicates the size of the
   Entity-Body, in decimal number of octets, sent to the recipient or,
   in the case of the HEAD method, the size of the Entity-Body that
   would have been sent had the request been a GET.

       Content-Length = "Content-Length" ":" 1*DIGIT

   An example is

       Content-Length: 3495

   Applications should use this field to indicate the size of the
   Entity-Body to be transferred, regardless of the media type of the
   entity. A valid Content-Length field value is required on all
   HTTP/1.0 request messages containing an entity body.

   Any Content-Length greater than or equal to zero is a valid value.
   Section 7.2.2 describes how to determine the length of a response
   entity body if a Content-Length is not given.

      Note: The meaning of this field is significantly different from
      the corresponding definition in MIME, where it is an optional
      field used within the "message/external-body" content-type. In
      HTTP, it should be used whenever the entity's length can be
      determined prior to being transferred.




Berners-Lee, et al           Informational               [Page 39](#atoc){id=a39}

RFC 1945                        HTTP/1.0                        May 1996


10.5  Content-Type
--------------------------------------------------------


   The Content-Type entity-header field indicates the media type of the
   Entity-Body sent to the recipient or, in the case of the HEAD method,
   the media type that would have been sent had the request been a GET.

       Content-Type   = "Content-Type" ":" media-type

   Media types are defined in Section 3.6. An example of the field is

       Content-Type: text/html

   Further discussion of methods for identifying the media type of an
   entity is provided in Section 7.2.1.

10.6  Date
--------------------------------------------------------


   The Date general-header field represents the date and time at which
   the message was originated, having the same semantics as orig-date in
   RFC 822. The field value is an HTTP-date, as described in Section
   3.3.

       Date           = "Date" ":" HTTP-date

   An example is

       Date: Tue, 15 Nov 1994 08:12:31 GMT

   If a message is received via direct connection with the user agent
   (in the case of requests) or the origin server (in the case of
   responses), then the date can be assumed to be the current date at
   the receiving end. However, since the date--as it is believed by the
   origin--is important for evaluating cached responses, origin servers
   should always include a Date header. Clients should only send a Date
   header field in messages that include an entity body, as in the case
   of the POST request, and even then it is optional. A received message
   which does not have a Date header field should be assigned one by the
   recipient if the message will be cached by that recipient or
   gatewayed via a protocol which requires a Date.

   In theory, the date should represent the moment just before the
   entity is generated. In practice, the date can be generated at any
   time during the message origination without affecting its semantic
   value.

      Note: An earlier version of this document incorrectly specified
      that this field should contain the creation date of the enclosed
      Entity-Body. This has been changed to reflect actual (and proper)



Berners-Lee, et al           Informational               [Page 40](#atoc){id=a40}

RFC 1945                        HTTP/1.0                        May 1996


      usage.

10.7  Expires
--------------------------------------------------------


   The Expires entity-header field gives the date/time after which the
   entity should be considered stale. This allows information providers
   to suggest the volatility of the resource, or a date after which the
   information may no longer be valid. Applications must not cache this
   entity beyond the date given. The presence of an Expires field does
   not imply that the original resource will change or cease to exist
   at, before, or after that time. However, information providers that
   know or even suspect that a resource will change by a certain date
   should include an Expires header with that date. The format is an
   absolute date and time as defined by HTTP-date in Section 3.3.

       Expires        = "Expires" ":" HTTP-date

   An example of its use is

       Expires: Thu, 01 Dec 1994 16:00:00 GMT

   If the date given is equal to or earlier than the value of the Date
   header, the recipient must not cache the enclosed entity. If a
   resource is dynamic by nature, as is the case with many data-
   producing processes, entities from that resource should be given an
   appropriate Expires value which reflects that dynamism.

   The Expires field cannot be used to force a user agent to refresh its
   display or reload a resource; its semantics apply only to caching
   mechanisms, and such mechanisms need only check a resource's
   expiration status when a new request for that resource is initiated.

   User agents often have history mechanisms, such as "Back" buttons and
   history lists, which can be used to redisplay an entity retrieved
   earlier in a session. By default, the Expires field does not apply to
   history mechanisms. If the entity is still in storage, a history
   mechanism should display it even if the entity has expired, unless
   the user has specifically configured the agent to refresh expired
   history documents.

      Note: Applications are encouraged to be tolerant of bad or
      misinformed implementations of the Expires header. A value of zero
      (0) or an invalid date format should be considered equivalent to
      an "expires immediately." Although these values are not legitimate
      for HTTP/1.0, a robust implementation is always desirable.






Berners-Lee, et al           Informational               [Page 41](#atoc){id=a41}

RFC 1945                        HTTP/1.0                        May 1996


10.8  From
--------------------------------------------------------


   The From request-header field, if given, should contain an Internet
   e-mail address for the human user who controls the requesting user
   agent. The address should be machine-usable, as defined by mailbox in
   RFC 822 [7] (as updated by RFC 1123 [6]):

       From           = "From" ":" mailbox

   An example is:

       From: webmaster@w3.org

   This header field may be used for logging purposes and as a means for
   identifying the source of invalid or unwanted requests. It should not
   be used as an insecure form of access protection. The interpretation
   of this field is that the request is being performed on behalf of the
   person given, who accepts responsibility for the method performed. In
   particular, robot agents should include this header so that the
   person responsible for running the robot can be contacted if problems
   occur on the receiving end.

   The Internet e-mail address in this field may be separate from the
   Internet host which issued the request. For example, when a request
   is passed through a proxy, the original issuer's address should be
   used.

      Note: The client should not send the From header field without the
      user's approval, as it may conflict with the user's privacy
      interests or their site's security policy. It is strongly
      recommended that the user be able to disable, enable, and modify
      the value of this field at any time prior to a request.

10.9  If-Modified-Since
--------------------------------------------------------


   The If-Modified-Since request-header field is used with the GET
   method to make it conditional: if the requested resource has not been
   modified since the time specified in this field, a copy of the
   resource will not be returned from the server; instead, a 304 (not
   modified) response will be returned without any Entity-Body.

       If-Modified-Since = "If-Modified-Since" ":" HTTP-date

   An example of the field is:

       If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT





Berners-Lee, et al           Informational               [Page 42](#atoc){id=a42}

RFC 1945                        HTTP/1.0                        May 1996


   A conditional GET method requests that the identified resource be
   transferred only if it has been modified since the date given by the
   If-Modified-Since header. The algorithm for determining this includes
   the following cases:

      a) If the request would normally result in anything other than
         a 200 (ok) status, or if the passed If-Modified-Since date
         is invalid, the response is exactly the same as for a
         normal GET. A date which is later than the server's current
         time is invalid.

      b) If the resource has been modified since the
         If-Modified-Since date, the response is exactly the same as
         for a normal GET.

      c) If the resource has not been modified since a valid
         If-Modified-Since date, the server shall return a 304 (not
         modified) response.

   The purpose of this feature is to allow efficient updates of cached
   information with a minimum amount of transaction overhead.

10.10  Last-Modified
--------------------------------------------------------


   The Last-Modified entity-header field indicates the date and time at
   which the sender believes the resource was last modified. The exact
   semantics of this field are defined in terms of how the recipient
   should interpret it:  if the recipient has a copy of this resource
   which is older than the date given by the Last-Modified field, that
   copy should be considered stale.

       Last-Modified  = "Last-Modified" ":" HTTP-date

   An example of its use is

       Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT

   The exact meaning of this header field depends on the implementation
   of the sender and the nature of the original resource. For files, it
   may be just the file system last-modified time. For entities with
   dynamically included parts, it may be the most recent of the set of
   last-modify times for its component parts. For database gateways, it
   may be the last-update timestamp of the record. For virtual objects,
   it may be the last time the internal state changed.

   An origin server must not send a Last-Modified date which is later
   than the server's time of message origination. In such cases, where
   the resource's last modification would indicate some time in the



Berners-Lee, et al           Informational               [Page 43](#atoc){id=a43}

RFC 1945                        HTTP/1.0                        May 1996


   future, the server must replace that date with the message
   origination date.

10.11  Location
--------------------------------------------------------


   The Location response-header field defines the exact location of the
   resource that was identified by the Request-URI. For 3xx responses,
   the location must indicate the server's preferred URL for automatic
   redirection to the resource. Only one absolute URL is allowed.

       Location       = "Location" ":" absoluteURI

   An example is

       Location: http://www.w3.org/hypertext/WWW/NewLocation.html

10.12  Pragma
--------------------------------------------------------


   The Pragma general-header field is used to include implementation-
   specific directives that may apply to any recipient along the
   request/response chain. All pragma directives specify optional
   behavior from the viewpoint of the protocol; however, some systems
   may require that behavior be consistent with the directives.

       Pragma           = "Pragma" ":" 1#pragma-directive

       pragma-directive = "no-cache" | extension-pragma
       extension-pragma = token [ "=" word ]

   When the "no-cache" directive is present in a request message, an
   application should forward the request toward the origin server even
   if it has a cached copy of what is being requested. This allows a
   client to insist upon receiving an authoritative response to its
   request. It also allows a client to refresh a cached copy which is
   known to be corrupted or stale.

   Pragma directives must be passed through by a proxy or gateway
   application, regardless of their significance to that application,
   since the directives may be applicable to all recipients along the
   request/response chain. It is not possible to specify a pragma for a
   specific recipient; however, any pragma directive not relevant to a
   recipient should be ignored by that recipient.

10.13  Referer
--------------------------------------------------------


   The Referer request-header field allows the client to specify, for
   the server's benefit, the address (URI) of the resource from which
   the Request-URI was obtained. This allows a server to generate lists



Berners-Lee, et al           Informational               [Page 44](#atoc){id=a44}

RFC 1945                        HTTP/1.0                        May 1996


   of back-links to resources for interest, logging, optimized caching,
   etc. It also allows obsolete or mistyped links to be traced for
   maintenance. The Referer field must not be sent if the Request-URI
   was obtained from a source that does not have its own URI, such as
   input from the user keyboard.

       Referer        = "Referer" ":" ( absoluteURI | relativeURI )

   Example:

       Referer: http://www.w3.org/hypertext/DataSources/Overview.html

   If a partial URI is given, it should be interpreted relative to the
   Request-URI. The URI must not include a fragment.

      Note: Because the source of a link may be private information or
      may reveal an otherwise private information source, it is strongly
      recommended that the user be able to select whether or not the
      Referer field is sent. For example, a browser client could have a
      toggle switch for browsing openly/anonymously, which would
      respectively enable/disable the sending of Referer and From
      information.

10.14  Server
--------------------------------------------------------


   The Server response-header field contains information about the
   software used by the origin server to handle the request. The field
   can contain multiple product tokens (Section 3.7) and comments
   identifying the server and any significant subproducts. By
   convention, the product tokens are listed in order of their
   significance for identifying the application.

       Server         = "Server" ":" 1*( product | comment )

   Example:

       Server: CERN/3.0 libwww/2.17

   If the response is being forwarded through a proxy, the proxy
   application must not add its data to the product list.

      Note: Revealing the specific software version of the server may
      allow the server machine to become more vulnerable to attacks
      against software that is known to contain security holes. Server
      implementors are encouraged to make this field a configurable
      option.





Berners-Lee, et al           Informational               [Page 45](#atoc){id=a45}

RFC 1945                        HTTP/1.0                        May 1996


      Note: Some existing servers fail to restrict themselves to the
      product token syntax within the Server field.

10.15  User-Agent
--------------------------------------------------------


   The User-Agent request-header field contains information about the
   user agent originating the request. This is for statistical purposes,
   the tracing of protocol violations, and automated recognition of user
   agents for the sake of tailoring responses to avoid particular user
   agent limitations. Although it is not required, user agents should
   include this field with requests. The field can contain multiple
   product tokens (Section 3.7) and comments identifying the agent and
   any subproducts which form a significant part of the user agent. By
   convention, the product tokens are listed in order of their
   significance for identifying the application.

       User-Agent     = "User-Agent" ":" 1*( product | comment )

   Example:

       User-Agent: CERN-LineMode/2.15 libwww/2.17b3

       Note: Some current proxy applications append their product
       information to the list in the User-Agent field. This is not
       recommended, since it makes machine interpretation of these
       fields ambiguous.

       Note: Some existing clients fail to restrict themselves to
       the product token syntax within the User-Agent field.

10.16  WWW-Authenticate
--------------------------------------------------------


   The WWW-Authenticate response-header field must be included in 401
   (unauthorized) response messages. The field value consists of at
   least one challenge that indicates the authentication scheme(s) and
   parameters applicable to the Request-URI.

       WWW-Authenticate = "WWW-Authenticate" ":" 1#challenge

   The HTTP access authentication process is described in Section 11.
   User agents must take special care in parsing the WWW-Authenticate
   field value if it contains more than one challenge, or if more than
   one WWW-Authenticate header field is provided, since the contents of
   a challenge may itself contain a comma-separated list of
   authentication parameters.






Berners-Lee, et al           Informational               [Page 46](#atoc){id=a46}

RFC 1945                        HTTP/1.0                        May 1996


11.  Access Authentication
--------------------------------------------------------


   HTTP provides a simple challenge-response authentication mechanism
   which may be used by a server to challenge a client request and by a
   client to provide authentication information. It uses an extensible,
   case-insensitive token to identify the authentication scheme,
   followed by a comma-separated list of attribute-value pairs which
   carry the parameters necessary for achieving authentication via that
   scheme.

       auth-scheme    = token

       auth-param     = token "=" quoted-string

   The 401 (unauthorized) response message is used by an origin server
   to challenge the authorization of a user agent. This response must
   include a WWW-Authenticate header field containing at least one
   challenge applicable to the requested resource.

       challenge      = auth-scheme 1*SP realm *( "," auth-param )

       realm          = "realm" "=" realm-value
       realm-value    = quoted-string

   The realm attribute (case-insensitive) is required for all
   authentication schemes which issue a challenge. The realm value
   (case-sensitive), in combination with the canonical root URL of the
   server being accessed, defines the protection space. These realms
   allow the protected resources on a server to be partitioned into a
   set of protection spaces, each with its own authentication scheme
   and/or authorization database. The realm value is a string, generally
   assigned by the origin server, which may have additional semantics
   specific to the authentication scheme.

   A user agent that wishes to authenticate itself with a server--
   usually, but not necessarily, after receiving a 401 response--may do
   so by including an Authorization header field with the request. The
   Authorization field value consists of credentials containing the
   authentication information of the user agent for the realm of the
   resource being requested.

       credentials    = basic-credentials
                      | ( auth-scheme #auth-param )

   The domain over which credentials can be automatically applied by a
   user agent is determined by the protection space. If a prior request
   has been authorized, the same credentials may be reused for all other
   requests within that protection space for a period of time determined



Berners-Lee, et al           Informational               [Page 47](#atoc){id=a47}

RFC 1945                        HTTP/1.0                        May 1996


   by the authentication scheme, parameters, and/or user preference.
   Unless otherwise defined by the authentication scheme, a single
   protection space cannot extend outside the scope of its server.

   If the server does not wish to accept the credentials sent with a
   request, it should return a 403 (forbidden) response.

   The HTTP protocol does not restrict applications to this simple
   challenge-response mechanism for access authentication. Additional
   mechanisms may be used, such as encryption at the transport level or
   via message encapsulation, and with additional header fields
   specifying authentication information. However, these additional
   mechanisms are not defined by this specification.

   Proxies must be completely transparent regarding user agent
   authentication. That is, they must forward the WWW-Authenticate and
   Authorization headers untouched, and must not cache the response to a
   request containing Authorization. HTTP/1.0 does not provide a means
   for a client to be authenticated with a proxy.

11.1  Basic Authentication Scheme
--------------------------------------------------------


   The "basic" authentication scheme is based on the model that the user
   agent must authenticate itself with a user-ID and a password for each
   realm. The realm value should be considered an opaque string which
   can only be compared for equality with other realms on that server.
   The server will authorize the request only if it can validate the
   user-ID and password for the protection space of the Request-URI.
   There are no optional authentication parameters.

   Upon receipt of an unauthorized request for a URI within the
   protection space, the server should respond with a challenge like the
   following:

       WWW-Authenticate: Basic realm="WallyWorld"

   where "WallyWorld" is the string assigned by the server to identify
   the protection space of the Request-URI.

   To receive authorization, the client sends the user-ID and password,
   separated by a single colon (":") character, within a base64 [5]
   encoded string in the credentials.

       basic-credentials = "Basic" SP basic-cookie

       basic-cookie      = <base64 [5] encoding of userid-password,
                            except not limited to 76 char/line>




Berners-Lee, et al           Informational               [Page 48](#atoc){id=a48}

RFC 1945                        HTTP/1.0                        May 1996


       userid-password   = [ token ] ":" *TEXT

   If the user agent wishes to send the user-ID "Aladdin" and password
   "open sesame", it would use the following header field:

       Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==

   The basic authentication scheme is a non-secure method of filtering
   unauthorized access to resources on an HTTP server. It is based on
   the assumption that the connection between the client and the server
   can be regarded as a trusted carrier. As this is not generally true
   on an open network, the basic authentication scheme should be used
   accordingly. In spite of this, clients should implement the scheme in
   order to communicate with servers that use it.

12.  Security Considerations
--------------------------------------------------------


   This section is meant to inform application developers, information
   providers, and users of the security limitations in HTTP/1.0 as
   described by this document. The discussion does not include
   definitive solutions to the problems revealed, though it does make
   some suggestions for reducing security risks.

12.1  Authentication of Clients
--------------------------------------------------------


   As mentioned in Section 11.1, the Basic authentication scheme is not
   a secure method of user authentication, nor does it prevent the
   Entity-Body from being transmitted in clear text across the physical
   network used as the carrier. HTTP/1.0 does not prevent additional
   authentication schemes and encryption mechanisms from being employed
   to increase security.

12.2  Safe Methods
--------------------------------------------------------


   The writers of client software should be aware that the software
   represents the user in their interactions over the Internet, and
   should be careful to allow the user to be aware of any actions they
   may take which may have an unexpected significance to themselves or
   others.

   In particular, the convention has been established that the GET and
   HEAD methods should never have the significance of taking an action
   other than retrieval. These methods should be considered "safe." This
   allows user agents to represent other methods, such as POST, in a
   special way, so that the user is made aware of the fact that a
   possibly unsafe action is being requested.





Berners-Lee, et al           Informational               [Page 49](#atoc){id=a49}

RFC 1945                        HTTP/1.0                        May 1996


   Naturally, it is not possible to ensure that the server does not
   generate side-effects as a result of performing a GET request; in
   fact, some dynamic resources consider that a feature. The important
   distinction here is that the user did not request the side-effects,
   so therefore cannot be held accountable for them.

12.3  Abuse of Server Log Information
--------------------------------------------------------


   A server is in the position to save personal data about a user's
   requests which may identify their reading patterns or subjects of
   interest. This information is clearly confidential in nature and its
   handling may be constrained by law in certain countries. People using
   the HTTP protocol to provide data are responsible for ensuring that
   such material is not distributed without the permission of any
   individuals that are identifiable by the published results.

12.4  Transfer of Sensitive Information
--------------------------------------------------------


   Like any generic data transfer protocol, HTTP cannot regulate the
   content of the data that is transferred, nor is there any a priori
   method of determining the sensitivity of any particular piece of
   information within the context of any given request. Therefore,
   applications should supply as much control over this information as
   possible to the provider of that information. Three header fields are
   worth special mention in this context: Server, Referer and From.

   Revealing the specific software version of the server may allow the
   server machine to become more vulnerable to attacks against software
   that is known to contain security holes. Implementors should make the
   Server header field a configurable option.

   The Referer field allows reading patterns to be studied and reverse
   links drawn. Although it can be very useful, its power can be abused
   if user details are not separated from the information contained in
   the Referer. Even when the personal information has been removed, the
   Referer field may indicate a private document's URI whose publication
   would be inappropriate.

   The information sent in the From field might conflict with the user's
   privacy interests or their site's security policy, and hence it
   should not be transmitted without the user being able to disable,
   enable, and modify the contents of the field. The user must be able
   to set the contents of this field within a user preference or
   application defaults configuration.

   We suggest, though do not require, that a convenient toggle interface
   be provided for the user to enable or disable the sending of From and
   Referer information.



Berners-Lee, et al           Informational               [Page 50](#atoc){id=a50}

RFC 1945                        HTTP/1.0                        May 1996


12.5  Attacks Based On File and Path Names
--------------------------------------------------------


   Implementations of HTTP origin servers should be careful to restrict
   the documents returned by HTTP requests to be only those that were
   intended by the server administrators. If an HTTP server translates
   HTTP URIs directly into file system calls, the server must take
   special care not to serve files that were not intended to be
   delivered to HTTP clients. For example, Unix, Microsoft Windows, and
   other operating systems use ".." as a path component to indicate a
   directory level above the current one. On such a system, an HTTP
   server must disallow any such construct in the Request-URI if it
   would otherwise allow access to a resource outside those intended to
   be accessible via the HTTP server. Similarly, files intended for
   reference only internally to the server (such as access control
   files, configuration files, and script code) must be protected from
   inappropriate retrieval, since they might contain sensitive
   information. Experience has shown that minor bugs in such HTTP server
   implementations have turned into security risks.

13.  Acknowledgments
--------------------------------------------------------


   This specification makes heavy use of the augmented BNF and generic
   constructs defined by David H. Crocker for RFC 822 [7]. Similarly, it
   reuses many of the definitions provided by Nathaniel Borenstein and
   Ned Freed for MIME [5]. We hope that their inclusion in this
   specification will help reduce past confusion over the relationship
   between HTTP/1.0 and Internet mail message formats.

   The HTTP protocol has evolved considerably over the past four years.
   It has benefited from a large and active developer community--the
   many people who have participated on the www-talk mailing list--and
   it is that community which has been most responsible for the success
   of HTTP and of the World-Wide Web in general. Marc Andreessen, Robert
   Cailliau, Daniel W. Connolly, Bob Denny, Jean-Francois Groff, Phillip
   M. Hallam-Baker, Hakon W. Lie, Ari Luotonen, Rob McCool, Lou
   Montulli, Dave Raggett, Tony Sanders, and Marc VanHeyningen deserve
   special recognition for their efforts in defining aspects of the
   protocol for early versions of this specification.

   Paul Hoffman contributed sections regarding the informational status
   of this document and Appendices C and D.










Berners-Lee, et al           Informational               [Page 51](#atoc){id=a51}

RFC 1945                        HTTP/1.0                        May 1996


   This document has benefited greatly from the comments of all those
   participating in the HTTP-WG. In addition to those already mentioned,
   the following individuals have contributed to this specification:

       Gary Adams                         Harald Tveit Alvestrand
       Keith Ball                         Brian Behlendorf
       Paul Burchard                      Maurizio Codogno
       Mike Cowlishaw                     Roman Czyborra
       Michael A. Dolan                   John Franks
       Jim Gettys                         Marc Hedlund
       Koen Holtman                       Alex Hopmann
       Bob Jernigan                       Shel Kaphan
       Martijn Koster                     Dave Kristol
       Daniel LaLiberte                   Paul Leach
       Albert Lunde                       John C. Mallery
       Larry Masinter                     Mitra
       Jeffrey Mogul                      Gavin Nicol
       Bill Perry                         Jeffrey Perry
       Owen Rees                          Luigi Rizzo
       David Robinson                     Marc Salomon
       Rich Salz                          Jim Seidman
       Chuck Shotton                      Eric W. Sink
       Simon E. Spero                     Robert S. Thau
       Francois Yergeau                   Mary Ellen Zurko
       Jean-Philippe Martin-Flatin

14. References
--------------------------------------------------------


   [1]  Anklesaria, F., McCahill, M., Lindner, P., Johnson, D.,
        Torrey, D., and B. Alberti, "The Internet Gopher Protocol: A
        Distributed Document Search and Retrieval Protocol", RFC 1436,
        University of Minnesota, March 1993.

   [2]  Berners-Lee, T., "Universal Resource Identifiers in WWW: A
        Unifying Syntax for the Expression of Names and Addresses of
        Objects on the Network as used in the World-Wide Web",
        RFC 1630, CERN, June 1994.

   [3]  Berners-Lee, T., and D. Connolly, "Hypertext Markup Language -
        2.0", RFC 1866, MIT/W3C, November 1995.

   [4]  Berners-Lee, T., Masinter, L., and M. McCahill, "Uniform
        Resource Locators (URL)", RFC 1738, CERN, Xerox PARC,
        University of Minnesota, December 1994.







Berners-Lee, et al           Informational               [Page 52](#atoc){id=a52}

RFC 1945                        HTTP/1.0                        May 1996


   [5]  Borenstein, N., and N. Freed, "MIME (Multipurpose Internet Mail
        Extensions) Part One: Mechanisms for Specifying and Describing
        the Format of Internet Message Bodies", RFC 1521, Bellcore,
        Innosoft, September 1993.

   [6]  Braden, R., "Requirements for Internet hosts - Application and
        Support", STD 3, RFC 1123, IETF, October 1989.

   [7]  Crocker, D., "Standard for the Format of ARPA Internet Text
        Messages", STD 11, RFC 822, UDEL, August 1982.

   [8]  F. Davis, B. Kahle, H. Morris, J. Salem, T. Shen, R. Wang,
        J. Sui, and M. Grinbaum. "WAIS Interface Protocol Prototype
        Functional Specification." (v1.5), Thinking Machines
        Corporation, April 1990.

   [9]  Fielding, R., "Relative Uniform Resource Locators", RFC 1808,
        UC Irvine, June 1995.

   [10] Horton, M., and R. Adams, "Standard for interchange of USENET
        Messages", RFC 1036 (Obsoletes RFC 850), AT&T Bell
        Laboratories, Center for Seismic Studies, December 1987.

   [11] Kantor, B., and P. Lapsley, "Network News Transfer Protocol:
        A Proposed Standard for the Stream-Based Transmission of News",
        RFC 977, UC San Diego, UC Berkeley, February 1986.

   [12] Postel, J., "Simple Mail Transfer Protocol." STD 10, RFC 821,
        USC/ISI, August 1982.

   [13] Postel, J., "Media Type Registration Procedure." RFC 1590,
        USC/ISI, March 1994.

   [14] Postel, J., and J. Reynolds, "File Transfer Protocol (FTP)",
        STD 9, RFC 959, USC/ISI, October 1985.

   [15] Reynolds, J., and J. Postel, "Assigned Numbers", STD 2, RFC
        1700, USC/ISI, October 1994.

   [16] Sollins, K., and L. Masinter, "Functional Requirements for
        Uniform Resource Names", RFC 1737, MIT/LCS, Xerox Corporation,
        December 1994.

   [17] US-ASCII. Coded Character Set - 7-Bit American Standard Code
        for Information Interchange. Standard ANSI X3.4-1986, ANSI,
        1986.





Berners-Lee, et al           Informational               [Page 53](#atoc){id=a53}

RFC 1945                        HTTP/1.0                        May 1996


   [18] ISO-8859. International Standard -- Information Processing --
        8-bit Single-Byte Coded Graphic Character Sets --
        Part 1: Latin alphabet No. 1, ISO 8859-1:1987.
        Part 2: Latin alphabet No. 2, ISO 8859-2, 1987.
        Part 3: Latin alphabet No. 3, ISO 8859-3, 1988.
        Part 4: Latin alphabet No. 4, ISO 8859-4, 1988.
        Part 5: Latin/Cyrillic alphabet, ISO 8859-5, 1988.
        Part 6: Latin/Arabic alphabet, ISO 8859-6, 1987.
        Part 7: Latin/Greek alphabet, ISO 8859-7, 1987.
        Part 8: Latin/Hebrew alphabet, ISO 8859-8, 1988.
        Part 9: Latin alphabet No. 5, ISO 8859-9, 1990.

15.  Authors' Addresses
--------------------------------------------------------


   Tim Berners-Lee
   Director, W3 Consortium
   MIT Laboratory for Computer Science
   545 Technology Square
   Cambridge, MA 02139, U.S.A.

   Fax: +1 (617) 258 8682
   EMail: timbl@w3.org


   Roy T. Fielding
   Department of Information and Computer Science
   University of California
   Irvine, CA 92717-3425, U.S.A.

   Fax: +1 (714) 824-4056
   EMail: fielding@ics.uci.edu


   Henrik Frystyk Nielsen
   W3 Consortium
   MIT Laboratory for Computer Science
   545 Technology Square
   Cambridge, MA 02139, U.S.A.

   Fax: +1 (617) 258 8682
   EMail: frystyk@w3.org










Berners-Lee, et al           Informational               [Page 54](#atoc){id=a54}

RFC 1945                        HTTP/1.0                        May 1996


Appendices

   These appendices are provided for informational reasons only -- they
   do not form a part of the HTTP/1.0 specification.

A.  Internet Media Type message/http

   In addition to defining the HTTP/1.0 protocol, this document serves
   as the specification for the Internet media type "message/http". The
   following is to be registered with IANA [13].

       Media Type name:         message

       Media subtype name:      http

       Required parameters:     none

       Optional parameters:     version, msgtype

              version: The HTTP-Version number of the enclosed message
                       (e.g., "1.0"). If not present, the version can be
                       determined from the first line of the body.

              msgtype: The message type -- "request" or "response". If
                       not present, the type can be determined from the
                       first line of the body.

       Encoding considerations: only "7bit", "8bit", or "binary" are
                                permitted

       Security considerations: none

B.  Tolerant Applications

   Although this document specifies the requirements for the generation
   of HTTP/1.0 messages, not all applications will be correct in their
   implementation. We therefore recommend that operational applications
   be tolerant of deviations whenever those deviations can be
   interpreted unambiguously.

   Clients should be tolerant in parsing the Status-Line and servers
   tolerant when parsing the Request-Line. In particular, they should
   accept any amount of SP or HT characters between fields, even though
   only a single SP is required.

   The line terminator for HTTP-header fields is the sequence CRLF.
   However, we recommend that applications, when parsing such headers,
   recognize a single LF as a line terminator and ignore the leading CR.



Berners-Lee, et al           Informational               [Page 55](#atoc){id=a55}

RFC 1945                        HTTP/1.0                        May 1996


C.  Relationship to MIME

   HTTP/1.0 uses many of the constructs defined for Internet Mail (RFC
   822 [7]) and the Multipurpose Internet Mail Extensions (MIME [5]) to
   allow entities to be transmitted in an open variety of
   representations and with extensible mechanisms. However, RFC 1521
   discusses mail, and HTTP has a few features that are different than
   those described in RFC 1521. These differences were carefully chosen
   to optimize performance over binary connections, to allow greater
   freedom in the use of new media types, to make date comparisons
   easier, and to acknowledge the practice of some early HTTP servers
   and clients.

   At the time of this writing, it is expected that RFC 1521 will be
   revised. The revisions may include some of the practices found in
   HTTP/1.0 but not in RFC 1521.

   This appendix describes specific areas where HTTP differs from RFC
   1521. Proxies and gateways to strict MIME environments should be
   aware of these differences and provide the appropriate conversions
   where necessary. Proxies and gateways from MIME environments to HTTP
   also need to be aware of the differences because some conversions may
   be required.

C.1  Conversion to Canonical Form

   RFC 1521 requires that an Internet mail entity be converted to
   canonical form prior to being transferred, as described in Appendix G
   of RFC 1521 [5]. Section 3.6.1 of this document describes the forms
   allowed for subtypes of the "text" media type when transmitted over
   HTTP.

   RFC 1521 requires that content with a Content-Type of "text"
   represent line breaks as CRLF and forbids the use of CR or LF outside
   of line break sequences. HTTP allows CRLF, bare CR, and bare LF to
   indicate a line break within text content when a message is
   transmitted over HTTP.

   Where it is possible, a proxy or gateway from HTTP to a strict RFC
   1521 environment should translate all line breaks within the text
   media types described in Section 3.6.1 of this document to the RFC
   1521 canonical form of CRLF. Note, however, that this may be
   complicated by the presence of a Content-Encoding and by the fact
   that HTTP allows the use of some character sets which do not use
   octets 13 and 10 to represent CR and LF, as is the case for some
   multi-byte character sets.





Berners-Lee, et al           Informational               [Page 56](#atoc){id=a56}

RFC 1945                        HTTP/1.0                        May 1996


C.2  Conversion of Date Formats

   HTTP/1.0 uses a restricted set of date formats (Section 3.3) to
   simplify the process of date comparison. Proxies and gateways from
   other protocols should ensure that any Date header field present in a
   message conforms to one of the HTTP/1.0 formats and rewrite the date
   if necessary.

C.3  Introduction of Content-Encoding

   RFC 1521 does not include any concept equivalent to HTTP/1.0's
   Content-Encoding header field. Since this acts as a modifier on the
   media type, proxies and gateways from HTTP to MIME-compliant
   protocols must either change the value of the Content-Type header
   field or decode the Entity-Body before forwarding the message. (Some
   experimental applications of Content-Type for Internet mail have used
   a media-type parameter of ";conversions=<content-coding>" to perform
   an equivalent function as Content-Encoding. However, this parameter
   is not part of RFC 1521.)

C.4  No Content-Transfer-Encoding

   HTTP does not use the Content-Transfer-Encoding (CTE) field of RFC
   1521. Proxies and gateways from MIME-compliant protocols to HTTP must
   remove any non-identity CTE ("quoted-printable" or "base64") encoding
   prior to delivering the response message to an HTTP client.

   Proxies and gateways from HTTP to MIME-compliant protocols are
   responsible for ensuring that the message is in the correct format
   and encoding for safe transport on that protocol, where "safe
   transport" is defined by the limitations of the protocol being used.
   Such a proxy or gateway should label the data with an appropriate
   Content-Transfer-Encoding if doing so will improve the likelihood of
   safe transport over the destination protocol.

C.5  HTTP Header Fields in Multipart Body-Parts

   In RFC 1521, most header fields in multipart body-parts are generally
   ignored unless the field name begins with "Content-". In HTTP/1.0,
   multipart body-parts may contain any HTTP header fields which are
   significant to the meaning of that part.

D.  Additional Features

   This appendix documents protocol elements used by some existing HTTP
   implementations, but not consistently and correctly across most
   HTTP/1.0 applications. Implementors should be aware of these
   features, but cannot rely upon their presence in, or interoperability



Berners-Lee, et al           Informational               [Page 57](#atoc){id=a57}

RFC 1945                        HTTP/1.0                        May 1996


   with, other HTTP/1.0 applications.

D.1  Additional Request Methods

D.1.1 PUT

   The PUT method requests that the enclosed entity be stored under the
   supplied Request-URI. If the Request-URI refers to an already
   existing resource, the enclosed entity should be considered as a
   modified version of the one residing on the origin server. If the
   Request-URI does not point to an existing resource, and that URI is
   capable of being defined as a new resource by the requesting user
   agent, the origin server can create the resource with that URI.

   The fundamental difference between the POST and PUT requests is
   reflected in the different meaning of the Request-URI. The URI in a
   POST request identifies the resource that will handle the enclosed
   entity as data to be processed. That resource may be a data-accepting
   process, a gateway to some other protocol, or a separate entity that
   accepts annotations. In contrast, the URI in a PUT request identifies
   the entity enclosed with the request -- the user agent knows what URI
   is intended and the server should not apply the request to some other
   resource.

D.1.2 DELETE

   The DELETE method requests that the origin server delete the resource
   identified by the Request-URI.

D.1.3 LINK

   The LINK method establishes one or more Link relationships between
   the existing resource identified by the Request-URI and other
   existing resources.

D.1.4 UNLINK

   The UNLINK method removes one or more Link relationships from the
   existing resource identified by the Request-URI.

D.2  Additional Header Field Definitions

D.2.1 Accept

   The Accept request-header field can be used to indicate a list of
   media ranges which are acceptable as a response to the request. The
   asterisk "*" character is used to group media types into ranges, with
   "*/*" indicating all media types and "type/*" indicating all subtypes



Berners-Lee, et al           Informational               [Page 58](#atoc){id=a58}

RFC 1945                        HTTP/1.0                        May 1996


   of that type. The set of ranges given by the client should represent
   what types are acceptable given the context of the request.

D.2.2 Accept-Charset

   The Accept-Charset request-header field can be used to indicate a
   list of preferred character sets other than the default US-ASCII and
   ISO-8859-1. This field allows clients capable of understanding more
   comprehensive or special-purpose character sets to signal that
   capability to a server which is capable of representing documents in
   those character sets.

D.2.3 Accept-Encoding

   The Accept-Encoding request-header field is similar to Accept, but
   restricts the content-coding values which are acceptable in the
   response.

D.2.4 Accept-Language

   The Accept-Language request-header field is similar to Accept, but
   restricts the set of natural languages that are preferred as a
   response to the request.

D.2.5 Content-Language

   The Content-Language entity-header field describes the natural
   language(s) of the intended audience for the enclosed entity. Note
   that this may not be equivalent to all the languages used within the
   entity.

D.2.6 Link

   The Link entity-header field provides a means for describing a
   relationship between the entity and some other resource. An entity
   may include multiple Link values. Links at the metainformation level
   typically indicate relationships like hierarchical structure and
   navigation paths.

D.2.7 MIME-Version

   HTTP messages may include a single MIME-Version general-header field
   to indicate what version of the MIME protocol was used to construct
   the message. Use of the MIME-Version header field, as defined by RFC
   1521 [5], should indicate that the message is MIME-conformant.
   Unfortunately, some older HTTP/1.0 servers send it indiscriminately,
   and thus this field should be ignored.




Berners-Lee, et al           Informational               [Page 59](#atoc){id=a59}

RFC 1945                        HTTP/1.0                        May 1996


D.2.8 Retry-After

   The Retry-After response-header field can be used with a 503 (service
   unavailable) response to indicate how long the service is expected to
   be unavailable to the requesting client. The value of this field can
   be either an HTTP-date or an integer number of seconds (in decimal)
   after the time of the response.

D.2.9 Title

   The Title entity-header field indicates the title of the entity.

D.2.10 URI

   The URI entity-header field may contain some or all of the Uniform
   Resource Identifiers (Section 3.2) by which the Request-URI resource
   can be identified. There is no guarantee that the resource can be
   accessed using the URI(s) specified.

































Berners-Lee, et al           Informational               [Page 60](#atoc){id=a60}


Hypertext Transfer Protocol -- HTTP/1.1
========================================================

https://www.rfc-editor.org/rfc/rfc2616.txt
--------------------------------------------------------







Network Working Group                                      R. Fielding
Request for Comments: 2616                                   UC Irvine
Obsoletes: 2068                                              J. Gettys
Category: Standards Track                                   Compaq/W3C
                                                              J. Mogul
                                                                Compaq
                                                            H. Frystyk
                                                               W3C/MIT
                                                           L. Masinter
                                                                 Xerox
                                                              P. Leach
                                                             Microsoft
                                                        T. Berners-Lee
                                                               W3C/MIT
                                                             June 1999


                Hypertext Transfer Protocol -- HTTP/1.1

Status of this Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (1999).  All Rights Reserved.

Abstract

   The Hypertext Transfer Protocol (HTTP) is an application-level
   protocol for distributed, collaborative, hypermedia information
   systems. It is a generic, stateless, protocol which can be used for
   many tasks beyond its use for hypertext, such as name servers and
   distributed object management systems, through extension of its
   request methods, error codes and headers [47]. A feature of HTTP is
   the typing and negotiation of data representation, allowing systems
   to be built independently of the data being transferred.

   HTTP has been in use by the World-Wide Web global information
   initiative since 1990. This specification defines the protocol
   referred to as "HTTP/1.1", and is an update to RFC 2068 [33].






Fielding, et al.            Standards Track                     [Page 1](#btoc){id=b001}

RFC 2616                        HTTP/1.1                       June 1999


[Table of Contents](){id=btoc}
--------------------------------------------------------

- 1   Introduction ................................................... [7](#b007)
- 1.1    Purpose...................................................... [7](#b007)
- 1.2   Requirements ................................................. [8](#b008)
- 1.3   Terminology .................................................. [8](#b008)
- 1.4   Overall Operation ........................................... [12](#b012)
- 2   Notational Conventions and Generic Grammar .................... [14](#b014)
- 2.1   Augmented BNF ............................................... [14](#b014)
- 2.2   Basic Rules ................................................. [15](#b015)
- 3   Protocol Parameters ........................................... [17](#b017)
- 3.1   HTTP Version ................................................ [17](#b017)
- 3.2   Uniform Resource Identifiers ................................ [18](#b018)
- 3.2.1    General Syntax ........................................... [19](#b019)
- 3.2.2    http URL ................................................. [19](#b019)
- 3.2.3    URI Comparison ........................................... [20](#b020)
- 3.3   Date/Time Formats ........................................... [20](#b020)
- 3.3.1    Full Date ................................................ [20](#b020)
- 3.3.2    Delta Seconds ............................................ [21](#b021)
- 3.4   Character Sets .............................................. [21](#b021)
- 3.4.1    Missing Charset .......................................... [22](#b022)
- 3.5   Content Codings ............................................. [23](#b023)
- 3.6   Transfer Codings ............................................ [24](#b024)
- 3.6.1    Chunked Transfer Coding .................................. [25](#b025)
- 3.7   Media Types ................................................. [26](#b026)
- 3.7.1    Canonicalization and Text Defaults ....................... [27](#b027)
- 3.7.2    Multipart Types .......................................... [27](#b027)
- 3.8   Product Tokens .............................................. [28](#b028)
- 3.9   Quality Values .............................................. [29](#b029)
- 3.10  Language Tags ............................................... [29](#b029)
- 3.11  Entity Tags ................................................. [30](#b030)
- 3.12  Range Units ................................................. [30](#b030)
- 4   HTTP Message .................................................. [31](#b031)
- 4.1   Message Types ............................................... [31](#b031)
- 4.2   Message Headers ............................................. [31](#b031)
- 4.3   Message Body ................................................ [32](#b032)
- 4.4   Message Length .............................................. [33](#b033)
- 4.5   General Header Fields ....................................... [34](#b034)
- 5   Request ....................................................... [35](#b035)
- 5.1   Request-Line ................................................ [35](#b035)
- 5.1.1    Method ................................................... [36](#b036)
- 5.1.2    Request-URI .............................................. [36](#b036)
- 5.2   The Resource Identified by a Request ........................ [38](#b038)
- 5.3   Request Header Fields ....................................... [38](#b038)
- 6   Response ...................................................... [39](#b039)
- 6.1   Status-Line ................................................. [39](#b039)
- 6.1.1    Status Code and Reason Phrase ............................ [39](#b039)
- 6.2   Response Header Fields ...................................... [41](#b041)



Fielding, et al.            Standards Track                     [Page 2](#btoc){id=b002}

RFC 2616                        HTTP/1.1                       June 1999


- 7   Entity ........................................................ [42](#b042)
- 7.1   Entity Header Fields ........................................ [42](#b042)
- 7.2   Entity Body ................................................. [43](#b043)
- 7.2.1    Type ..................................................... [43](#b043)
- 7.2.2    Entity Length ............................................ [43](#b043)
- 8   Connections ................................................... [44](#b044)
- 8.1   Persistent Connections ...................................... [44](#b044)
- 8.1.1    Purpose .................................................. [44](#b044)
- 8.1.2    Overall Operation ........................................ [45](#b045)
- 8.1.3    Proxy Servers ............................................ [46](#b046)
- 8.1.4    Practical Considerations ................................. [46](#b046)
- 8.2   Message Transmission Requirements ........................... [47](#b047)
- 8.2.1    Persistent Connections and Flow Control .................. [47](#b047)
- 8.2.2    Monitoring Connections for Error Status Messages ......... [48](#b048)
- 8.2.3    Use of the 100 (Continue) Status ......................... [48](#b048)
- 8.2.4    Client Behavior if Server Prematurely Closes Connection .. [50](#b050)
- 9   Method Definitions ............................................ [51](#b051)
- 9.1   Safe and Idempotent Methods ................................. [51](#b051)
- 9.1.1    Safe Methods ............................................. [51](#b051)
- 9.1.2    Idempotent Methods ....................................... [51](#b051)
- 9.2   OPTIONS ..................................................... [52](#b052)
- 9.3   GET ......................................................... [53](#b053)
- 9.4   HEAD ........................................................ [54](#b054)
- 9.5   POST ........................................................ [54](#b054)
- 9.6   PUT ......................................................... [55](#b055)
- 9.7   DELETE ...................................................... [56](#b056)
- 9.8   TRACE ....................................................... [56](#b056)
- 9.9   CONNECT ..................................................... [57](#b057)
-10   Status Code Definitions ...................................... [57](#b057)
- 10.1  Informational 1xx ........................................... [57](#b057)
- 10.1.1   100 Continue ............................................. [58](#b058)
- 10.1.2   101 Switching Protocols .................................. [58](#b058)
- 10.2  Successful 2xx .............................................. [58](#b058)
- 10.2.1   200 OK ................................................... [58](#b058)
- 10.2.2   201 Created .............................................. [59](#b059)
- 10.2.3   202 Accepted ............................................. [59](#b059)
- 10.2.4   203 Non-Authoritative Information ........................ [59](#b059)
- 10.2.5   204 No Content ........................................... [60](#b060)
- 10.2.6   205 Reset Content ........................................ [60](#b060)
- 10.2.7   206 Partial Content ...................................... [60](#b060)
- 10.3  Redirection 3xx ............................................. [61](#b061)
- 10.3.1   300 Multiple Choices ..................................... [61](#b061)
- 10.3.2   301 Moved Permanently .................................... [62](#b062)
- 10.3.3   302 Found ................................................ [62](#b062)
- 10.3.4   303 See Other ............................................ [63](#b063)
- 10.3.5   304 Not Modified ......................................... [63](#b063)
- 10.3.6   305 Use Proxy ............................................ [64](#b064)
- 10.3.7   306 (Unused) ............................................. [64](#b064)



Fielding, et al.            Standards Track                     [Page 3](#btoc){id=b003}

RFC 2616                        HTTP/1.1                       June 1999


- 10.3.8   307 Temporary Redirect ................................... [65](#b065)
- 10.4  Client Error 4xx ............................................ [65](#b065)
- 10.4.1    400 Bad Request ......................................... [65](#b065)
- 10.4.2    401 Unauthorized ........................................ [66](#b066)
- 10.4.3    402 Payment Required .................................... [66](#b066)
- 10.4.4    403 Forbidden ........................................... [66](#b066)
- 10.4.5    404 Not Found ........................................... [66](#b066)
- 10.4.6    405 Method Not Allowed .................................. [66](#b066)
- 10.4.7    406 Not Acceptable ...................................... [67](#b067)
- 10.4.8    407 Proxy Authentication Required ....................... [67](#b067)
- 10.4.9    408 Request Timeout ..................................... [67](#b067)
- 10.4.10   409 Conflict ............................................ [67](#b067)
- 10.4.11   410 Gone ................................................ [68](#b068)
- 10.4.12   411 Length Required ..................................... [68](#b068)
- 10.4.13   412 Precondition Failed ................................. [68](#b068)
- 10.4.14   413 Request Entity Too Large ............................ [69](#b069)
- 10.4.15   414 Request-URI Too Long ................................ [69](#b069)
- 10.4.16   415 Unsupported Media Type .............................. [69](#b069)
- 10.4.17   416 Requested Range Not Satisfiable ..................... [69](#b069)
- 10.4.18   417 Expectation Failed .................................. [70](#b070)
- 10.5  Server Error 5xx ............................................ [70](#b070)
- 10.5.1   500 Internal Server Error ................................ [70](#b070)
- 10.5.2   501 Not Implemented ...................................... [70](#b070)
- 10.5.3   502 Bad Gateway .......................................... [70](#b070)
- 10.5.4   503 Service Unavailable .................................. [70](#b070)
- 10.5.5   504 Gateway Timeout ...................................... [71](#b071)
- 10.5.6   505 HTTP Version Not Supported ........................... [71](#b071)
- 11   Access Authentication ........................................ [71](#b071)
- 12   Content Negotiation .......................................... [71](#b071)
- 12.1  Server-driven Negotiation ................................... [72](#b072)
- 12.2  Agent-driven Negotiation .................................... [73](#b073)
- 12.3  Transparent Negotiation ..................................... [74](#b074)
- 13   Caching in HTTP .............................................. [74](#b074)
- 13.1.1   Cache Correctness ........................................ [75](#b075)
- 13.1.2   Warnings ................................................. [76](#b076)
- 13.1.3   Cache-control Mechanisms ................................. [77](#b077)
- 13.1.4   Explicit User Agent Warnings ............................. [78](#b078)
- 13.1.5   Exceptions to the Rules and Warnings ..................... [78](#b078)
- 13.1.6   Client-controlled Behavior ............................... [79](#b079)
- 13.2  Expiration Model ............................................ [79](#b079)
- 13.2.1   Server-Specified Expiration .............................. [79](#b079)
- 13.2.2   Heuristic Expiration ..................................... [80](#b080)
- 13.2.3   Age Calculations ......................................... [80](#b080)
- 13.2.4   Expiration Calculations .................................. [83](#b083)
- 13.2.5   Disambiguating Expiration Values ......................... [84](#b084)
- 13.2.6   Disambiguating Multiple Responses ........................ [84](#b084)
- 13.3  Validation Model ............................................ [85](#b085)
- 13.3.1   Last-Modified Dates ...................................... [86](#b086)



Fielding, et al.            Standards Track                     [Page 4](#btoc){id=b004}

RFC 2616                        HTTP/1.1                       June 1999


- 13.3.2   Entity Tag Cache Validators .............................. [86](#b086)
- 13.3.3   Weak and Strong Validators ............................... [86](#b086)
- 13.3.4   Rules for When to Use Entity Tags and Last-Modified Dates. [89](#b089)
- 13.3.5   Non-validating Conditionals .............................. [90](#b090)
- 13.4  Response Cacheability ....................................... [91](#b091)
- 13.5  Constructing Responses From Caches .......................... [92](#b092)
- 13.5.1   End-to-end and Hop-by-hop Headers ........................ [92](#b092)
- 13.5.2   Non-modifiable Headers ................................... [92](#b092)
- 13.5.3   Combining Headers ........................................ [94](#b094)
- 13.5.4   Combining Byte Ranges .................................... [95](#b095)
- 13.6  Caching Negotiated Responses ................................ [95](#b095)
- 13.7  Shared and Non-Shared Caches ................................ [96](#b096)
- 13.8  Errors or Incomplete Response Cache Behavior ................ [97](#b097)
- 13.9  Side Effects of GET and HEAD ................................ [97](#b097)
- 13.10   Invalidation After Updates or Deletions ................... [97](#b097)
- 13.11   Write-Through Mandatory ................................... [98](#b098)
- 13.12   Cache Replacement ......................................... [99](#b099)
- 13.13   History Lists ............................................. [99](#b099)
- 14   Header Field Definitions .................................... [100](#b100)
- 14.1  Accept ..................................................... [100](#b100)
- 14.2  Accept-Charset ............................................. [102](#b102)
- 14.3  Accept-Encoding ............................................ [102](#b102)
- 14.4  Accept-Language ............................................ [104](#b104)
- 14.5  Accept-Ranges .............................................. [105](#b105)
- 14.6  Age ........................................................ [106](#b106)
- 14.7  Allow ...................................................... [106](#b106)
- 14.8  Authorization .............................................. [107](#b107)
- 14.9  Cache-Control .............................................. [108](#b108)
- 14.9.1   What is Cacheable ....................................... [109](#b109)
- 14.9.2   What May be Stored by Caches ............................ [110](#b110)
- 14.9.3   Modifications of the Basic Expiration Mechanism ......... [111](#b111)
- 14.9.4   Cache Revalidation and Reload Controls .................. [113](#b113)
- 14.9.5   No-Transform Directive .................................. [115](#b115)
- 14.9.6   Cache Control Extensions ................................ [116](#b116)
- 14.10   Connection ............................................... [117](#b117)
- 14.11   Content-Encoding ......................................... [118](#b118)
- 14.12   Content-Language ......................................... [118](#b118)
- 14.13   Content-Length ........................................... [119](#b119)
- 14.14   Content-Location ......................................... [120](#b120)
- 14.15   Content-MD5 .............................................. [121](#b121)
- 14.16   Content-Range ............................................ [122](#b122)
- 14.17   Content-Type ............................................. [124](#b124)
- 14.18   Date ..................................................... [124](#b124)
- 14.18.1   Clockless Origin Server Operation ...................... [125](#b125)
- 14.19   ETag ..................................................... [126](#b126)
- 14.20   Expect ................................................... [126](#b126)
- 14.21   Expires .................................................. [127](#b127)
- 14.22   From ..................................................... [128](#b128)



Fielding, et al.            Standards Track                     [Page 5](#btoc){id=b005}

RFC 2616                        HTTP/1.1                       June 1999


- 14.23   Host ..................................................... [128](#b128)
- 14.24   If-Match ................................................. [129](#b129)
- 14.25   If-Modified-Since ........................................ [130](#b130)
- 14.26   If-None-Match ............................................ [132](#b132)
- 14.27   If-Range ................................................. [133](#b133)
- 14.28   If-Unmodified-Since ...................................... [134](#b134)
- 14.29   Last-Modified ............................................ [134](#b134)
- 14.30   Location ................................................. [135](#b135)
- 14.31   Max-Forwards ............................................. [136](#b136)
- 14.32   Pragma ................................................... [136](#b136)
- 14.33   Proxy-Authenticate ....................................... [137](#b137)
- 14.34   Proxy-Authorization ...................................... [137](#b137)
- 14.35   Range .................................................... [138](#b138)
- 14.35.1    Byte Ranges ........................................... [138](#b138)
- 14.35.2    Range Retrieval Requests .............................. [139](#b139)
- 14.36   Referer .................................................. [140](#b140)
- 14.37   Retry-After .............................................. [141](#b141)
- 14.38   Server ................................................... [141](#b141)
- 14.39   TE ....................................................... [142](#b142)
- 14.40   Trailer .................................................. [143](#b143)
- 14.41  Transfer-Encoding.......................................... [143](#b143)
- 14.42   Upgrade .................................................. [144](#b144)
- 14.43   User-Agent ............................................... [145](#b145)
- 14.44   Vary ..................................................... [145](#b145)
- 14.45   Via ...................................................... [146](#b146)
- 14.46   Warning .................................................. [148](#b148)
- 14.47   WWW-Authenticate ......................................... [150](#b150)
- 15 Security Considerations ....................................... [150](#b150)
- 15.1      Personal Information.................................... [151](#b151)
- 15.1.1   Abuse of Server Log Information ......................... [151](#b151)
- 15.1.2   Transfer of Sensitive Information ....................... [151](#b151)
- 15.1.3   Encoding Sensitive Information in URI's ................. [152](#b152)
- 15.1.4   Privacy Issues Connected to Accept Headers .............. [152](#b152)
- 15.2  Attacks Based On File and Path Names ....................... [153](#b153)
- 15.3  DNS Spoofing ............................................... [154](#b154)
- 15.4  Location Headers and Spoofing .............................. [154](#b154)
- 15.5  Content-Disposition Issues ................................. [154](#b154)
- 15.6  Authentication Credentials and Idle Clients ................ [155](#b155)
- 15.7  Proxies and Caching ........................................ [155](#b155)
- 15.7.1    Denial of Service Attacks on Proxies.................... [156](#b156)
- 16   Acknowledgments ............................................. [156](#b156)
- 17   References .................................................. [158](#b158)
- 18   Authors' Addresses .......................................... [162](#b162)
- 19   Appendices .................................................. [164](#b164)
- 19.1  Internet Media Type message/http and application/http ...... [164](#b164)
- 19.2  Internet Media Type multipart/byteranges ................... [165](#b165)
- 19.3  Tolerant Applications ...................................... [166](#b166)
- 19.4  Differences Between HTTP Entities and RFC 2045 Entities .... [167](#b167)



Fielding, et al.            Standards Track                     [Page 6](#btoc){id=b006}

RFC 2616                        HTTP/1.1                       June 1999


- 19.4.1   MIME-Version ............................................ [167](#b167)
- 19.4.2   Conversion to Canonical Form ............................ [167](#b167)
- 19.4.3   Conversion of Date Formats .............................. [168](#b168)
- 19.4.4   Introduction of Content-Encoding ........................ [168](#b168)
- 19.4.5   No Content-Transfer-Encoding ............................ [168](#b168)
- 19.4.6   Introduction of Transfer-Encoding ....................... [169](#b169)
- 19.4.7   MHTML and Line Length Limitations ....................... [169](#b169)
- 19.5  Additional Features ........................................ [169](#b169)
- 19.5.1   Content-Disposition ..................................... [170](#b170)
- 19.6  Compatibility with Previous Versions ....................... [170](#b170)
- 19.6.1   Changes from HTTP/1.0 ................................... [171](#b171)
- 19.6.2   Compatibility with HTTP/1.0 Persistent Connections ...... [172](#b172)
- 19.6.3   Changes from RFC 2068 ................................... [172](#b172)
- 20   Index ....................................................... [175](#b175)
- 21   Full Copyright Statement .................................... [176](#b176)

1 Introduction
--------------------------------------------------------


1.1 Purpose
--------------------------------------------------------


   The Hypertext Transfer Protocol (HTTP) is an application-level
   protocol for distributed, collaborative, hypermedia information
   systems. HTTP has been in use by the World-Wide Web global
   information initiative since 1990. The first version of HTTP,
   referred to as HTTP/0.9, was a simple protocol for raw data transfer
   across the Internet. HTTP/1.0, as defined by RFC 1945 [6], improved
   the protocol by allowing messages to be in the format of MIME-like
   messages, containing metainformation about the data transferred and
   modifiers on the request/response semantics. However, HTTP/1.0 does
   not sufficiently take into consideration the effects of hierarchical
   proxies, caching, the need for persistent connections, or virtual
   hosts. In addition, the proliferation of incompletely-implemented
   applications calling themselves "HTTP/1.0" has necessitated a
   protocol version change in order for two communicating applications
   to determine each other's true capabilities.

   This specification defines the protocol referred to as "HTTP/1.1".
   This protocol includes more stringent requirements than HTTP/1.0 in
   order to ensure reliable implementation of its features.

   Practical information systems require more functionality than simple
   retrieval, including search, front-end update, and annotation. HTTP
   allows an open-ended set of methods and headers that indicate the
   purpose of a request [47]. It builds on the discipline of reference
   provided by the Uniform Resource Identifier (URI) [3], as a location
   (URL) [4] or name (URN) [20], for indicating the resource to which a





Fielding, et al.            Standards Track                     [Page 7](#btoc){id=b007}

RFC 2616                        HTTP/1.1                       June 1999


   method is to be applied. Messages are passed in a format similar to
   that used by Internet mail [9] as defined by the Multipurpose
   Internet Mail Extensions (MIME) [7].

   HTTP is also used as a generic protocol for communication between
   user agents and proxies/gateways to other Internet systems, including
   those supported by the SMTP [16], NNTP [13], FTP [18], Gopher [2],
   and WAIS [10] protocols. In this way, HTTP allows basic hypermedia
   access to resources available from diverse applications.

1.2 Requirements
--------------------------------------------------------


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in RFC 2119 [34].

   An implementation is not compliant if it fails to satisfy one or more
   of the MUST or REQUIRED level requirements for the protocols it
   implements. An implementation that satisfies all the MUST or REQUIRED
   level and all the SHOULD level requirements for its protocols is said
   to be "unconditionally compliant"; one that satisfies all the MUST
   level requirements but not all the SHOULD level requirements for its
   protocols is said to be "conditionally compliant."

1.3 Terminology
--------------------------------------------------------


   This specification uses a number of terms to refer to the roles
   played by participants in, and objects of, the HTTP communication.

   connection
      A transport layer virtual circuit established between two programs
      for the purpose of communication.

   message
      The basic unit of HTTP communication, consisting of a structured
      sequence of octets matching the syntax defined in section 4 and
      transmitted via the connection.

   request
      An HTTP request message, as defined in section 5.

   response
      An HTTP response message, as defined in section 6.








Fielding, et al.            Standards Track                     [Page 8](#btoc){id=b008}

RFC 2616                        HTTP/1.1                       June 1999


   resource
      A network data object or service that can be identified by a URI,
      as defined in section 3.2. Resources may be available in multiple
      representations (e.g. multiple languages, data formats, size, and
      resolutions) or vary in other ways.

   entity
      The information transferred as the payload of a request or
      response. An entity consists of metainformation in the form of
      entity-header fields and content in the form of an entity-body, as
      described in section 7.

   representation
      An entity included with a response that is subject to content
      negotiation, as described in section 12. There may exist multiple
      representations associated with a particular response status.

   content negotiation
      The mechanism for selecting the appropriate representation when
      servicing a request, as described in section 12. The
      representation of entities in any response can be negotiated
      (including error responses).

   variant
      A resource may have one, or more than one, representation(s)
      associated with it at any given instant. Each of these
      representations is termed a `varriant'.  Use of the term `variant'
      does not necessarily imply that the resource is subject to content
      negotiation.

   client
      A program that establishes connections for the purpose of sending
      requests.

   user agent
      The client which initiates a request. These are often browsers,
      editors, spiders (web-traversing robots), or other end user tools.

   server
      An application program that accepts connections in order to
      service requests by sending back responses. Any given program may
      be capable of being both a client and a server; our use of these
      terms refers only to the role being performed by the program for a
      particular connection, rather than to the program's capabilities
      in general. Likewise, any server may act as an origin server,
      proxy, gateway, or tunnel, switching behavior based on the nature
      of each request.




Fielding, et al.            Standards Track                     [Page 9](#btoc){id=b009}

RFC 2616                        HTTP/1.1                       June 1999


   origin server
      The server on which a given resource resides or is to be created.

   proxy
      An intermediary program which acts as both a server and a client
      for the purpose of making requests on behalf of other clients.
      Requests are serviced internally or by passing them on, with
      possible translation, to other servers. A proxy MUST implement
      both the client and server requirements of this specification. A
      "transparent proxy" is a proxy that does not modify the request or
      response beyond what is required for proxy authentication and
      identification. A "non-transparent proxy" is a proxy that modifies
      the request or response in order to provide some added service to
      the user agent, such as group annotation services, media type
      transformation, protocol reduction, or anonymity filtering. Except
      where either transparent or non-transparent behavior is explicitly
      stated, the HTTP proxy requirements apply to both types of
      proxies.

   gateway
      A server which acts as an intermediary for some other server.
      Unlike a proxy, a gateway receives requests as if it were the
      origin server for the requested resource; the requesting client
      may not be aware that it is communicating with a gateway.

   tunnel
      An intermediary program which is acting as a blind relay between
      two connections. Once active, a tunnel is not considered a party
      to the HTTP communication, though the tunnel may have been
      initiated by an HTTP request. The tunnel ceases to exist when both
      ends of the relayed connections are closed.

   cache
      A program's local store of response messages and the subsystem
      that controls its message storage, retrieval, and deletion. A
      cache stores cacheable responses in order to reduce the response
      time and network bandwidth consumption on future, equivalent
      requests. Any client or server may include a cache, though a cache
      cannot be used by a server that is acting as a tunnel.

   cacheable
      A response is cacheable if a cache is allowed to store a copy of
      the response message for use in answering subsequent requests. The
      rules for determining the cacheability of HTTP responses are
      defined in section 13. Even if a resource is cacheable, there may
      be additional constraints on whether a cache can use the cached
      copy for a particular request.




Fielding, et al.            Standards Track                    [Page 10](#btoc){id=b010}

RFC 2616                        HTTP/1.1                       June 1999


   first-hand
      A response is first-hand if it comes directly and without
      unnecessary delay from the origin server, perhaps via one or more
      proxies. A response is also first-hand if its validity has just
      been checked directly with the origin server.

   explicit expiration time
      The time at which the origin server intends that an entity should
      no longer be returned by a cache without further validation.

   heuristic expiration time
      An expiration time assigned by a cache when no explicit expiration
      time is available.

   age
      The age of a response is the time since it was sent by, or
      successfully validated with, the origin server.

   freshness lifetime
      The length of time between the generation of a response and its
      expiration time.

   fresh
      A response is fresh if its age has not yet exceeded its freshness
      lifetime.

   stale
      A response is stale if its age has passed its freshness lifetime.

   semantically transparent
      A cache behaves in a "semantically transparent" manner, with
      respect to a particular response, when its use affects neither the
      requesting client nor the origin server, except to improve
      performance. When a cache is semantically transparent, the client
      receives exactly the same response (except for hop-by-hop headers)
      that it would have received had its request been handled directly
      by the origin server.

   validator
      A protocol element (e.g., an entity tag or a Last-Modified time)
      that is used to find out whether a cache entry is an equivalent
      copy of an entity.

   upstream/downstream
      Upstream and downstream describe the flow of a message: all
      messages flow from upstream to downstream.





Fielding, et al.            Standards Track                    [Page 11](#btoc){id=b011}

RFC 2616                        HTTP/1.1                       June 1999


   inbound/outbound
      Inbound and outbound refer to the request and response paths for
      messages: "inbound" means "traveling toward the origin server",
      and "outbound" means "traveling toward the user agent"

1.4 Overall Operation
--------------------------------------------------------


   The HTTP protocol is a request/response protocol. A client sends a
   request to the server in the form of a request method, URI, and
   protocol version, followed by a MIME-like message containing request
   modifiers, client information, and possible body content over a
   connection with a server. The server responds with a status line,
   including the message's protocol version and a success or error code,
   followed by a MIME-like message containing server information, entity
   metainformation, and possible entity-body content. The relationship
   between HTTP and MIME is described in appendix 19.4.

   Most HTTP communication is initiated by a user agent and consists of
   a request to be applied to a resource on some origin server. In the
   simplest case, this may be accomplished via a single connection (v)
   between the user agent (UA) and the origin server (O).

          request chain ------------------------>
       UA -------------------v------------------- O
          <----------------------- response chain

   A more complicated situation occurs when one or more intermediaries
   are present in the request/response chain. There are three common
   forms of intermediary: proxy, gateway, and tunnel. A proxy is a
   forwarding agent, receiving requests for a URI in its absolute form,
   rewriting all or part of the message, and forwarding the reformatted
   request toward the server identified by the URI. A gateway is a
   receiving agent, acting as a layer above some other server(s) and, if
   necessary, translating the requests to the underlying server's
   protocol. A tunnel acts as a relay point between two connections
   without changing the messages; tunnels are used when the
   communication needs to pass through an intermediary (such as a
   firewall) even when the intermediary cannot understand the contents
   of the messages.

          request chain -------------------------------------->
       UA -----v----- A -----v----- B -----v----- C -----v----- O
          <------------------------------------- response chain

   The figure above shows three intermediaries (A, B, and C) between the
   user agent and origin server. A request or response message that
   travels the whole chain will pass through four separate connections.
   This distinction is important because some HTTP communication options



Fielding, et al.            Standards Track                    [Page 12](#btoc){id=b012}

RFC 2616                        HTTP/1.1                       June 1999


   may apply only to the connection with the nearest, non-tunnel
   neighbor, only to the end-points of the chain, or to all connections
   along the chain. Although the diagram is linear, each participant may
   be engaged in multiple, simultaneous communications. For example, B
   may be receiving requests from many clients other than A, and/or
   forwarding requests to servers other than C, at the same time that it
   is handling A's request.

   Any party to the communication which is not acting as a tunnel may
   employ an internal cache for handling requests. The effect of a cache
   is that the request/response chain is shortened if one of the
   participants along the chain has a cached response applicable to that
   request. The following illustrates the resulting chain if B has a
   cached copy of an earlier response from O (via C) for a request which
   has not been cached by UA or A.

          request chain ---------->
       UA -----v----- A -----v----- B - - - - - - C - - - - - - O
          <--------- response chain

   Not all responses are usefully cacheable, and some requests may
   contain modifiers which place special requirements on cache behavior.
   HTTP requirements for cache behavior and cacheable responses are
   defined in section 13.

   In fact, there are a wide variety of architectures and configurations
   of caches and proxies currently being experimented with or deployed
   across the World Wide Web. These systems include national hierarchies
   of proxy caches to save transoceanic bandwidth, systems that
   broadcast or multicast cache entries, organizations that distribute
   subsets of cached data via CD-ROM, and so on. HTTP systems are used
   in corporate intranets over high-bandwidth links, and for access via
   PDAs with low-power radio links and intermittent connectivity. The
   goal of HTTP/1.1 is to support the wide diversity of configurations
   already deployed while introducing protocol constructs that meet the
   needs of those who build web applications that require high
   reliability and, failing that, at least reliable indications of
   failure.

   HTTP communication usually takes place over TCP/IP connections. The
   default port is TCP 80 [19], but other ports can be used. This does
   not preclude HTTP from being implemented on top of any other protocol
   on the Internet, or on other networks. HTTP only presumes a reliable
   transport; any protocol that provides such guarantees can be used;
   the mapping of the HTTP/1.1 request and response structures onto the
   transport data units of the protocol in question is outside the scope
   of this specification.




Fielding, et al.            Standards Track                    [Page 13](#btoc){id=b013}

RFC 2616                        HTTP/1.1                       June 1999


   In HTTP/1.0, most implementations used a new connection for each
   request/response exchange. In HTTP/1.1, a connection may be used for
   one or more request/response exchanges, although connections may be
   closed for a variety of reasons (see section 8.1).

2 Notational Conventions and Generic Grammar
--------------------------------------------------------


2.1 Augmented BNF
--------------------------------------------------------


   All of the mechanisms specified in this document are described in
   both prose and an augmented Backus-Naur Form (BNF) similar to that
   used by RFC 822 [9]. Implementors will need to be familiar with the
   notation in order to understand this specification. The augmented BNF
   includes the following constructs:

   name = definition
      The name of a rule is simply the name itself (without any
      enclosing "<" and ">") and is separated from its definition by the
      equal "=" character. White space is only significant in that
      indentation of continuation lines is used to indicate a rule
      definition that spans more than one line. Certain basic rules are
      in uppercase, such as SP, LWS, HT, CRLF, DIGIT, ALPHA, etc. Angle
      brackets are used within definitions whenever their presence will
      facilitate discerning the use of rule names.

   "literal"
      Quotation marks surround literal text. Unless stated otherwise,
      the text is case-insensitive.

   rule1 | rule2
      Elements separated by a bar ("|") are alternatives, e.g., "yes |
      no" will accept yes or no.

   (rule1 rule2)
      Elements enclosed in parentheses are treated as a single element.
      Thus, "(elem (foo | bar) elem)" allows the token sequences "elem
      foo elem" and "elem bar elem".

   *rule
      The character "*" preceding an element indicates repetition. The
      full form is "<n>*<m>element" indicating at least <n> and at most
      <m> occurrences of element. Default values are 0 and infinity so
      that "*(element)" allows any number, including zero; "1*element"
      requires at least one; and "1*2element" allows one or two.

   [rule]
      Square brackets enclose optional elements; "[foo bar]" is
      equivalent to "*1(foo bar)".



Fielding, et al.            Standards Track                    [Page 14](#btoc){id=b014}

RFC 2616                        HTTP/1.1                       June 1999


   N rule
      Specific repetition: "<n>(element)" is equivalent to
      "<n>*<n>(element)"; that is, exactly <n> occurrences of (element).
      Thus 2DIGIT is a 2-digit number, and 3ALPHA is a string of three
      alphabetic characters.

   #rule
      A construct "#" is defined, similar to "*", for defining lists of
      elements. The full form is "<n>#<m>element" indicating at least
      <n> and at most <m> elements, each separated by one or more commas
      (",") and OPTIONAL linear white space (LWS). This makes the usual
      form of lists very easy; a rule such as
         ( *LWS element *( *LWS "," *LWS element ))
      can be shown as
         1#element
      Wherever this construct is used, null elements are allowed, but do
      not contribute to the count of elements present. That is,
      "(element), , (element) " is permitted, but counts as only two
      elements. Therefore, where at least one element is required, at
      least one non-null element MUST be present. Default values are 0
      and infinity so that "#element" allows any number, including zero;
      "1#element" requires at least one; and "1#2element" allows one or
      two.

   ; comment
      A semi-colon, set off some distance to the right of rule text,
      starts a comment that continues to the end of line. This is a
      simple way of including useful notes in parallel with the
      specifications.

   implied *LWS
      The grammar described by this specification is word-based. Except
      where noted otherwise, linear white space (LWS) can be included
      between any two adjacent words (token or quoted-string), and
      between adjacent words and separators, without changing the
      interpretation of a field. At least one delimiter (LWS and/or

      separators) MUST exist between any two tokens (for the definition
      of "token" below), since they would otherwise be interpreted as a
      single token.

2.2 Basic Rules
--------------------------------------------------------


   The following rules are used throughout this specification to
   describe basic parsing constructs. The US-ASCII coded character set
   is defined by ANSI X3.4-1986 [21].





Fielding, et al.            Standards Track                    [Page 15](#btoc){id=b015}

RFC 2616                        HTTP/1.1                       June 1999


       OCTET          = <any 8-bit sequence of data>
       CHAR           = <any US-ASCII character (octets 0 - 127)>
       UPALPHA        = <any US-ASCII uppercase letter "A".."Z">
       LOALPHA        = <any US-ASCII lowercase letter "a".."z">
       ALPHA          = UPALPHA | LOALPHA
       DIGIT          = <any US-ASCII digit "0".."9">
       CTL            = <any US-ASCII control character
                        (octets 0 - 31) and DEL (127)>
       CR             = <US-ASCII CR, carriage return (13)>
       LF             = <US-ASCII LF, linefeed (10)>
       SP             = <US-ASCII SP, space (32)>
       HT             = <US-ASCII HT, horizontal-tab (9)>
       <">            = <US-ASCII double-quote mark (34)>

   HTTP/1.1 defines the sequence CR LF as the end-of-line marker for all
   protocol elements except the entity-body (see appendix 19.3 for
   tolerant applications). The end-of-line marker within an entity-body
   is defined by its associated media type, as described in section 3.7.

       CRLF           = CR LF

   HTTP/1.1 header field values can be folded onto multiple lines if the
   continuation line begins with a space or horizontal tab. All linear
   white space, including folding, has the same semantics as SP. A
   recipient MAY replace any linear white space with a single SP before
   interpreting the field value or forwarding the message downstream.

       LWS            = [CRLF] 1*( SP | HT )

   The TEXT rule is only used for descriptive field contents and values
   that are not intended to be interpreted by the message parser. Words
   of *TEXT MAY contain characters from character sets other than ISO-
   8859-1 [22] only when encoded according to the rules of RFC 2047
   [14].

       TEXT           = <any OCTET except CTLs,
                        but including LWS>

   A CRLF is allowed in the definition of TEXT only as part of a header
   field continuation. It is expected that the folding LWS will be
   replaced with a single SP before interpretation of the TEXT value.

   Hexadecimal numeric characters are used in several protocol elements.

       HEX            = "A" | "B" | "C" | "D" | "E" | "F"
                      | "a" | "b" | "c" | "d" | "e" | "f" | DIGIT





Fielding, et al.            Standards Track                    [Page 16](#btoc){id=b016}

RFC 2616                        HTTP/1.1                       June 1999


   Many HTTP/1.1 header field values consist of words separated by LWS
   or special characters. These special characters MUST be in a quoted
   string to be used within a parameter value (as defined in section
   3.6).

       token          = 1*<any CHAR except CTLs or separators>
       separators     = "(" | ")" | "<" | ">" | "@"
                      | "," | ";" | ":" | "\" | <">
                      | "/" | "[" | "]" | "?" | "="
                      | "{" | "}" | SP | HT

   Comments can be included in some HTTP header fields by surrounding
   the comment text with parentheses. Comments are only allowed in
   fields containing "comment" as part of their field value definition.
   In all other fields, parentheses are considered part of the field
   value.

       comment        = "(" *( ctext | quoted-pair | comment ) ")"
       ctext          = <any TEXT excluding "(" and ")">

   A string of text is parsed as a single word if it is quoted using
   double-quote marks.

       quoted-string  = ( <"> *(qdtext | quoted-pair ) <"> )
       qdtext         = <any TEXT except <">>

   The backslash character ("\") MAY be used as a single-character
   quoting mechanism only within quoted-string and comment constructs.

       quoted-pair    = "\" CHAR

3 Protocol Parameters
--------------------------------------------------------


3.1 HTTP Version
--------------------------------------------------------


   HTTP uses a "<major>.<minor>" numbering scheme to indicate versions
   of the protocol. The protocol versioning policy is intended to allow
   the sender to indicate the format of a message and its capacity for
   understanding further HTTP communication, rather than the features
   obtained via that communication. No change is made to the version
   number for the addition of message components which do not affect
   communication behavior or which only add to extensible field values.
   The <minor> number is incremented when the changes made to the
   protocol add features which do not change the general message parsing
   algorithm, but which may add to the message semantics and imply
   additional capabilities of the sender. The <major> number is
   incremented when the format of a message within the protocol is
   changed. See RFC 2145 [36] for a fuller explanation.



Fielding, et al.            Standards Track                    [Page 17](#btoc){id=b017}

RFC 2616                        HTTP/1.1                       June 1999


   The version of an HTTP message is indicated by an HTTP-Version field
   in the first line of the message.

       HTTP-Version   = "HTTP" "/" 1*DIGIT "." 1*DIGIT

   Note that the major and minor numbers MUST be treated as separate
   integers and that each MAY be incremented higher than a single digit.
   Thus, HTTP/2.4 is a lower version than HTTP/2.13, which in turn is
   lower than HTTP/12.3. Leading zeros MUST be ignored by recipients and
   MUST NOT be sent.

   An application that sends a request or response message that includes
   HTTP-Version of "HTTP/1.1" MUST be at least conditionally compliant
   with this specification. Applications that are at least conditionally
   compliant with this specification SHOULD use an HTTP-Version of
   "HTTP/1.1" in their messages, and MUST do so for any message that is
   not compatible with HTTP/1.0. For more details on when to send
   specific HTTP-Version values, see RFC 2145 [36].

   The HTTP version of an application is the highest HTTP version for
   which the application is at least conditionally compliant.

   Proxy and gateway applications need to be careful when forwarding
   messages in protocol versions different from that of the application.
   Since the protocol version indicates the protocol capability of the
   sender, a proxy/gateway MUST NOT send a message with a version
   indicator which is greater than its actual version. If a higher
   version request is received, the proxy/gateway MUST either downgrade
   the request version, or respond with an error, or switch to tunnel
   behavior.

   Due to interoperability problems with HTTP/1.0 proxies discovered
   since the publication of RFC 2068[33], caching proxies MUST, gateways
   MAY, and tunnels MUST NOT upgrade the request to the highest version
   they support. The proxy/gateway's response to that request MUST be in
   the same major version as the request.

      Note: Converting between versions of HTTP may involve modification
      of header fields required or forbidden by the versions involved.

3.2 Uniform Resource Identifiers
--------------------------------------------------------


   URIs have been known by many names: WWW addresses, Universal Document
   Identifiers, Universal Resource Identifiers [3], and finally the
   combination of Uniform Resource Locators (URL) [4] and Names (URN)
   [20]. As far as HTTP is concerned, Uniform Resource Identifiers are
   simply formatted strings which identify--via name, location, or any
   other characteristic--a resource.



Fielding, et al.            Standards Track                    [Page 18](#btoc){id=b018}

RFC 2616                        HTTP/1.1                       June 1999


3.2.1 General Syntax
--------------------------------------------------------


   URIs in HTTP can be represented in absolute form or relative to some
   known base URI [11], depending upon the context of their use. The two
   forms are differentiated by the fact that absolute URIs always begin
   with a scheme name followed by a colon. For definitive information on
   URL syntax and semantics, see "Uniform Resource Identifiers (URI):
   Generic Syntax and Semantics," RFC 2396 [42] (which replaces RFCs
   1738 [4] and RFC 1808 [11]). This specification adopts the
   definitions of "URI-reference", "absoluteURI", "relativeURI", "port",
   "host","abs_path", "rel_path", and "authority" from that
   specification.

   The HTTP protocol does not place any a priori limit on the length of
   a URI. Servers MUST be able to handle the URI of any resource they
   serve, and SHOULD be able to handle URIs of unbounded length if they
   provide GET-based forms that could generate such URIs. A server
   SHOULD return 414 (Request-URI Too Long) status if a URI is longer
   than the server can handle (see section 10.4.15).

      Note: Servers ought to be cautious about depending on URI lengths
      above 255 bytes, because some older client or proxy
      implementations might not properly support these lengths.

3.2.2 http URL
--------------------------------------------------------


   The "http" scheme is used to locate network resources via the HTTP
   protocol. This section defines the scheme-specific syntax and
   semantics for http URLs.

   http_URL = "http:" "//" host [ ":" port ] [ abs_path [ "?" query ]]

   If the port is empty or not given, port 80 is assumed. The semantics
   are that the identified resource is located at the server listening
   for TCP connections on that port of that host, and the Request-URI
   for the resource is abs_path (section 5.1.2). The use of IP addresses
   in URLs SHOULD be avoided whenever possible (see RFC 1900 [24]). If
   the abs_path is not present in the URL, it MUST be given as "/" when
   used as a Request-URI for a resource (section 5.1.2). If a proxy
   receives a host name which is not a fully qualified domain name, it
   MAY add its domain to the host name it received. If a proxy receives
   a fully qualified domain name, the proxy MUST NOT change the host
   name.








Fielding, et al.            Standards Track                    [Page 19](#btoc){id=b019}

RFC 2616                        HTTP/1.1                       June 1999


3.2.3 URI Comparison
--------------------------------------------------------


   When comparing two URIs to decide if they match or not, a client
   SHOULD use a case-sensitive octet-by-octet comparison of the entire
   URIs, with these exceptions:

      - A port that is empty or not given is equivalent to the default
        port for that URI-reference;

        - Comparisons of host names MUST be case-insensitive;

        - Comparisons of scheme names MUST be case-insensitive;

        - An empty abs_path is equivalent to an abs_path of "/".

   Characters other than those in the "reserved" and "unsafe" sets (see
   RFC 2396 [42]) are equivalent to their ""%" HEX HEX" encoding.

   For example, the following three URIs are equivalent:

      http://abc.com:80/~smith/home.html
      http://ABC.com/%7Esmith/home.html
      http://ABC.com:/%7esmith/home.html

3.3 Date/Time Formats
--------------------------------------------------------


3.3.1 Full Date
--------------------------------------------------------


   HTTP applications have historically allowed three different formats
   for the representation of date/time stamps:

      Sun, 06 Nov 1994 08:49:37 GMT  ; RFC 822, updated by RFC 1123
      Sunday, 06-Nov-94 08:49:37 GMT ; RFC 850, obsoleted by RFC 1036
      Sun Nov  6 08:49:37 1994       ; ANSI C's asctime() format

   The first format is preferred as an Internet standard and represents
   a fixed-length subset of that defined by RFC 1123 [8] (an update to
   RFC 822 [9]). The second format is in common use, but is based on the
   obsolete RFC 850 [12] date format and lacks a four-digit year.
   HTTP/1.1 clients and servers that parse the date value MUST accept
   all three formats (for compatibility with HTTP/1.0), though they MUST
   only generate the RFC 1123 format for representing HTTP-date values
   in header fields. See section 19.3 for further information.

      Note: Recipients of date values are encouraged to be robust in
      accepting date values that may have been sent by non-HTTP
      applications, as is sometimes the case when retrieving or posting
      messages via proxies/gateways to SMTP or NNTP.



Fielding, et al.            Standards Track                    [Page 20](#btoc){id=b020}

RFC 2616                        HTTP/1.1                       June 1999


   All HTTP date/time stamps MUST be represented in Greenwich Mean Time
   (GMT), without exception. For the purposes of HTTP, GMT is exactly
   equal to UTC (Coordinated Universal Time). This is indicated in the
   first two formats by the inclusion of "GMT" as the three-letter
   abbreviation for time zone, and MUST be assumed when reading the
   asctime format. HTTP-date is case sensitive and MUST NOT include
   additional LWS beyond that specifically included as SP in the
   grammar.

       HTTP-date    = rfc1123-date | rfc850-date | asctime-date
       rfc1123-date = wkday "," SP date1 SP time SP "GMT"
       rfc850-date  = weekday "," SP date2 SP time SP "GMT"
       asctime-date = wkday SP date3 SP time SP 4DIGIT
       date1        = 2DIGIT SP month SP 4DIGIT
                      ; day month year (e.g., 02 Jun 1982)
       date2        = 2DIGIT "-" month "-" 2DIGIT
                      ; day-month-year (e.g., 02-Jun-82)
       date3        = month SP ( 2DIGIT | ( SP 1DIGIT ))
                      ; month day (e.g., Jun  2)
       time         = 2DIGIT ":" 2DIGIT ":" 2DIGIT
                      ; 00:00:00 - 23:59:59
       wkday        = "Mon" | "Tue" | "Wed"
                    | "Thu" | "Fri" | "Sat" | "Sun"
       weekday      = "Monday" | "Tuesday" | "Wednesday"
                    | "Thursday" | "Friday" | "Saturday" | "Sunday"
       month        = "Jan" | "Feb" | "Mar" | "Apr"
                    | "May" | "Jun" | "Jul" | "Aug"
                    | "Sep" | "Oct" | "Nov" | "Dec"

      Note: HTTP requirements for the date/time stamp format apply only
      to their usage within the protocol stream. Clients and servers are
      not required to use these formats for user presentation, request
      logging, etc.

3.3.2 Delta Seconds
--------------------------------------------------------


   Some HTTP header fields allow a time value to be specified as an
   integer number of seconds, represented in decimal, after the time
   that the message was received.

       delta-seconds  = 1*DIGIT

3.4 Character Sets
--------------------------------------------------------


   HTTP uses the same definition of the term "character set" as that
   described for MIME:





Fielding, et al.            Standards Track                    [Page 21](#btoc){id=b021}

RFC 2616                        HTTP/1.1                       June 1999


   The term "character set" is used in this document to refer to a
   method used with one or more tables to convert a sequence of octets
   into a sequence of characters. Note that unconditional conversion in
   the other direction is not required, in that not all characters may
   be available in a given character set and a character set may provide
   more than one sequence of octets to represent a particular character.
   This definition is intended to allow various kinds of character
   encoding, from simple single-table mappings such as US-ASCII to
   complex table switching methods such as those that use ISO-2022's
   techniques. However, the definition associated with a MIME character
   set name MUST fully specify the mapping to be performed from octets
   to characters. In particular, use of external profiling information
   to determine the exact mapping is not permitted.

      Note: This use of the term "character set" is more commonly
      referred to as a "character encoding." However, since HTTP and
      MIME share the same registry, it is important that the terminology
      also be shared.

   HTTP character sets are identified by case-insensitive tokens. The
   complete set of tokens is defined by the IANA Character Set registry
   [19].

       charset = token

   Although HTTP allows an arbitrary token to be used as a charset
   value, any token that has a predefined value within the IANA
   Character Set registry [19] MUST represent the character set defined
   by that registry. Applications SHOULD limit their use of character
   sets to those defined by the IANA registry.

   Implementors should be aware of IETF character set requirements [38]
   [41].

3.4.1 Missing Charset
--------------------------------------------------------


   Some HTTP/1.0 software has interpreted a Content-Type header without
   charset parameter incorrectly to mean "recipient should guess."
   Senders wishing to defeat this behavior MAY include a charset
   parameter even when the charset is ISO-8859-1 and SHOULD do so when
   it is known that it will not confuse the recipient.

   Unfortunately, some older HTTP/1.0 clients did not deal properly with
   an explicit charset parameter. HTTP/1.1 recipients MUST respect the
   charset label provided by the sender; and those user agents that have
   a provision to "guess" a charset MUST use the charset from the





Fielding, et al.            Standards Track                    [Page 22](#btoc){id=b022}

RFC 2616                        HTTP/1.1                       June 1999


   content-type field if they support that charset, rather than the
   recipient's preference, when initially displaying a document. See
   section 3.7.1.

3.5 Content Codings
--------------------------------------------------------


   Content coding values indicate an encoding transformation that has
   been or can be applied to an entity. Content codings are primarily
   used to allow a document to be compressed or otherwise usefully
   transformed without losing the identity of its underlying media type
   and without loss of information. Frequently, the entity is stored in
   coded form, transmitted directly, and only decoded by the recipient.

       content-coding   = token

   All content-coding values are case-insensitive. HTTP/1.1 uses
   content-coding values in the Accept-Encoding (section 14.3) and
   Content-Encoding (section 14.11) header fields. Although the value
   describes the content-coding, what is more important is that it
   indicates what decoding mechanism will be required to remove the
   encoding.

   The Internet Assigned Numbers Authority (IANA) acts as a registry for
   content-coding value tokens. Initially, the registry contains the
   following tokens:

   gzip An encoding format produced by the file compression program
        "gzip" (GNU zip) as described in RFC 1952 [25]. This format is a
        Lempel-Ziv coding (LZ77) with a 32 bit CRC.

   compress
        The encoding format produced by the common UNIX file compression
        program "compress". This format is an adaptive Lempel-Ziv-Welch
        coding (LZW).

        Use of program names for the identification of encoding formats
        is not desirable and is discouraged for future encodings. Their
        use here is representative of historical practice, not good
        design. For compatibility with previous implementations of HTTP,
        applications SHOULD consider "x-gzip" and "x-compress" to be
        equivalent to "gzip" and "compress" respectively.

   deflate
        The "zlib" format defined in RFC 1950 [31] in combination with
        the "deflate" compression mechanism described in RFC 1951 [29].






Fielding, et al.            Standards Track                    [Page 23](#btoc){id=b023}

RFC 2616                        HTTP/1.1                       June 1999


   identity
        The default (identity) encoding; the use of no transformation
        whatsoever. This content-coding is used only in the Accept-
        Encoding header, and SHOULD NOT be used in the Content-Encoding
        header.

   New content-coding value tokens SHOULD be registered; to allow
   interoperability between clients and servers, specifications of the
   content coding algorithms needed to implement a new value SHOULD be
   publicly available and adequate for independent implementation, and
   conform to the purpose of content coding defined in this section.

3.6 Transfer Codings
--------------------------------------------------------


   Transfer-coding values are used to indicate an encoding
   transformation that has been, can be, or may need to be applied to an
   entity-body in order to ensure "safe transport" through the network.
   This differs from a content coding in that the transfer-coding is a
   property of the message, not of the original entity.

       transfer-coding         = "chunked" | transfer-extension
       transfer-extension      = token *( ";" parameter )

   Parameters are in  the form of attribute/value pairs.

       parameter               = attribute "=" value
       attribute               = token
       value                   = token | quoted-string

   All transfer-coding values are case-insensitive. HTTP/1.1 uses
   transfer-coding values in the TE header field (section 14.39) and in
   the Transfer-Encoding header field (section 14.41).

   Whenever a transfer-coding is applied to a message-body, the set of
   transfer-codings MUST include "chunked", unless the message is
   terminated by closing the connection. When the "chunked" transfer-
   coding is used, it MUST be the last transfer-coding applied to the
   message-body. The "chunked" transfer-coding MUST NOT be applied more
   than once to a message-body. These rules allow the recipient to
   determine the transfer-length of the message (section 4.4).

   Transfer-codings are analogous to the Content-Transfer-Encoding
   values of MIME [7], which were designed to enable safe transport of
   binary data over a 7-bit transport service. However, safe transport
   has a different focus for an 8bit-clean transfer protocol. In HTTP,
   the only unsafe characteristic of message-bodies is the difficulty in
   determining the exact body length (section 7.2.2), or the desire to
   encrypt data over a shared transport.



Fielding, et al.            Standards Track                    [Page 24](#btoc){id=b024}

RFC 2616                        HTTP/1.1                       June 1999


   The Internet Assigned Numbers Authority (IANA) acts as a registry for
   transfer-coding value tokens. Initially, the registry contains the
   following tokens: "chunked" (section 3.6.1), "identity" (section
   3.6.2), "gzip" (section 3.5), "compress" (section 3.5), and "deflate"
   (section 3.5).

   New transfer-coding value tokens SHOULD be registered in the same way
   as new content-coding value tokens (section 3.5).

   A server which receives an entity-body with a transfer-coding it does
   not understand SHOULD return 501 (Unimplemented), and close the
   connection. A server MUST NOT send transfer-codings to an HTTP/1.0
   client.

3.6.1 Chunked Transfer Coding
--------------------------------------------------------


   The chunked encoding modifies the body of a message in order to
   transfer it as a series of chunks, each with its own size indicator,
   followed by an OPTIONAL trailer containing entity-header fields. This
   allows dynamically produced content to be transferred along with the
   information necessary for the recipient to verify that it has
   received the full message.

       Chunked-Body   = *chunk
                        last-chunk
                        trailer
                        CRLF

       chunk          = chunk-size [ chunk-extension ] CRLF
                        chunk-data CRLF
       chunk-size     = 1*HEX
       last-chunk     = 1*("0") [ chunk-extension ] CRLF

       chunk-extension= *( ";" chunk-ext-name [ "=" chunk-ext-val ] )
       chunk-ext-name = token
       chunk-ext-val  = token | quoted-string
       chunk-data     = chunk-size(OCTET)
       trailer        = *(entity-header CRLF)

   The chunk-size field is a string of hex digits indicating the size of
   the chunk. The chunked encoding is ended by any chunk whose size is
   zero, followed by the trailer, which is terminated by an empty line.

   The trailer allows the sender to include additional HTTP header
   fields at the end of the message. The Trailer header field can be
   used to indicate which header fields are included in a trailer (see
   section 14.40).




Fielding, et al.            Standards Track                    [Page 25](#btoc){id=b025}

RFC 2616                        HTTP/1.1                       June 1999


   A server using chunked transfer-coding in a response MUST NOT use the
   trailer for any header fields unless at least one of the following is
   true:

   a)the request included a TE header field that indicates "trailers" is
     acceptable in the transfer-coding of the  response, as described in
     section 14.39; or,

   b)the server is the origin server for the response, the trailer
     fields consist entirely of optional metadata, and the recipient
     could use the message (in a manner acceptable to the origin server)
     without receiving this metadata.  In other words, the origin server
     is willing to accept the possibility that the trailer fields might
     be silently discarded along the path to the client.

   This requirement prevents an interoperability failure when the
   message is being received by an HTTP/1.1 (or later) proxy and
   forwarded to an HTTP/1.0 recipient. It avoids a situation where
   compliance with the protocol would have necessitated a possibly
   infinite buffer on the proxy.

   An example process for decoding a Chunked-Body is presented in
   appendix 19.4.6.

   All HTTP/1.1 applications MUST be able to receive and decode the
   "chunked" transfer-coding, and MUST ignore chunk-extension extensions
   they do not understand.

3.7 Media Types
--------------------------------------------------------


   HTTP uses Internet Media Types [17] in the Content-Type (section
   14.17) and Accept (section 14.1) header fields in order to provide
   open and extensible data typing and type negotiation.

       media-type     = type "/" subtype *( ";" parameter )
       type           = token
       subtype        = token

   Parameters MAY follow the type/subtype in the form of attribute/value
   pairs (as defined in section 3.6).

   The type, subtype, and parameter attribute names are case-
   insensitive. Parameter values might or might not be case-sensitive,
   depending on the semantics of the parameter name. Linear white space
   (LWS) MUST NOT be used between the type and subtype, nor between an
   attribute and its value. The presence or absence of a parameter might
   be significant to the processing of a media-type, depending on its
   definition within the media type registry.



Fielding, et al.            Standards Track                    [Page 26](#btoc){id=b026}

RFC 2616                        HTTP/1.1                       June 1999


   Note that some older HTTP applications do not recognize media type
   parameters. When sending data to older HTTP applications,
   implementations SHOULD only use media type parameters when they are
   required by that type/subtype definition.

   Media-type values are registered with the Internet Assigned Number
   Authority (IANA [19]). The media type registration process is
   outlined in RFC 1590 [17]. Use of non-registered media types is
   discouraged.

3.7.1 Canonicalization and Text Defaults
--------------------------------------------------------


   Internet media types are registered with a canonical form. An
   entity-body transferred via HTTP messages MUST be represented in the
   appropriate canonical form prior to its transmission except for
   "text" types, as defined in the next paragraph.

   When in canonical form, media subtypes of the "text" type use CRLF as
   the text line break. HTTP relaxes this requirement and allows the
   transport of text media with plain CR or LF alone representing a line
   break when it is done consistently for an entire entity-body. HTTP
   applications MUST accept CRLF, bare CR, and bare LF as being
   representative of a line break in text media received via HTTP. In
   addition, if the text is represented in a character set that does not
   use octets 13 and 10 for CR and LF respectively, as is the case for
   some multi-byte character sets, HTTP allows the use of whatever octet
   sequences are defined by that character set to represent the
   equivalent of CR and LF for line breaks. This flexibility regarding
   line breaks applies only to text media in the entity-body; a bare CR
   or LF MUST NOT be substituted for CRLF within any of the HTTP control
   structures (such as header fields and multipart boundaries).

   If an entity-body is encoded with a content-coding, the underlying
   data MUST be in a form defined above prior to being encoded.

   The "charset" parameter is used with some media types to define the
   character set (section 3.4) of the data. When no explicit charset
   parameter is provided by the sender, media subtypes of the "text"
   type are defined to have a default charset value of "ISO-8859-1" when
   received via HTTP. Data in character sets other than "ISO-8859-1" or
   its subsets MUST be labeled with an appropriate charset value. See
   section 3.4.1 for compatibility problems.

3.7.2 Multipart Types
--------------------------------------------------------


   MIME provides for a number of "multipart" types -- encapsulations of
   one or more entities within a single message-body. All multipart
   types share a common syntax, as defined in section 5.1.1 of RFC 2046



Fielding, et al.            Standards Track                    [Page 27](#btoc){id=b027}

RFC 2616                        HTTP/1.1                       June 1999


   [40], and MUST include a boundary parameter as part of the media type
   value. The message body is itself a protocol element and MUST
   therefore use only CRLF to represent line breaks between body-parts.
   Unlike in RFC 2046, the epilogue of any multipart message MUST be
   empty; HTTP applications MUST NOT transmit the epilogue (even if the
   original multipart contains an epilogue). These restrictions exist in
   order to preserve the self-delimiting nature of a multipart message-
   body, wherein the "end" of the message-body is indicated by the
   ending multipart boundary.

   In general, HTTP treats a multipart message-body no differently than
   any other media type: strictly as payload. The one exception is the
   "multipart/byteranges" type (appendix 19.2) when it appears in a 206
   (Partial Content) response, which will be interpreted by some HTTP
   caching mechanisms as described in sections 13.5.4 and 14.16. In all
   other cases, an HTTP user agent SHOULD follow the same or similar
   behavior as a MIME user agent would upon receipt of a multipart type.
   The MIME header fields within each body-part of a multipart message-
   body do not have any significance to HTTP beyond that defined by
   their MIME semantics.

   In general, an HTTP user agent SHOULD follow the same or similar
   behavior as a MIME user agent would upon receipt of a multipart type.
   If an application receives an unrecognized multipart subtype, the
   application MUST treat it as being equivalent to "multipart/mixed".

      Note: The "multipart/form-data" type has been specifically defined
      for carrying form data suitable for processing via the POST
      request method, as described in RFC 1867 [15].

3.8 Product Tokens
--------------------------------------------------------


   Product tokens are used to allow communicating applications to
   identify themselves by software name and version. Most fields using
   product tokens also allow sub-products which form a significant part
   of the application to be listed, separated by white space. By
   convention, the products are listed in order of their significance
   for identifying the application.

       product         = token ["/" product-version]
       product-version = token

   Examples:

       User-Agent: CERN-LineMode/2.15 libwww/2.17b3
       Server: Apache/0.8.4





Fielding, et al.            Standards Track                    [Page 28](#btoc){id=b028}

RFC 2616                        HTTP/1.1                       June 1999


   Product tokens SHOULD be short and to the point. They MUST NOT be
   used for advertising or other non-essential information. Although any
   token character MAY appear in a product-version, this token SHOULD
   only be used for a version identifier (i.e., successive versions of
   the same product SHOULD only differ in the product-version portion of
   the product value).

3.9 Quality Values
--------------------------------------------------------


   HTTP content negotiation (section 12) uses short "floating point"
   numbers to indicate the relative importance ("weight") of various
   negotiable parameters.  A weight is normalized to a real number in
   the range 0 through 1, where 0 is the minimum and 1 the maximum
   value. If a parameter has a quality value of 0, then content with
   this parameter is `not acceptable' for the client. HTTP/1.1
   applications MUST NOT generate more than three digits after the
   decimal point. User configuration of these values SHOULD also be
   limited in this fashion.

       qvalue         = ( "0" [ "." 0*3DIGIT ] )
                      | ( "1" [ "." 0*3("0") ] )

   "Quality values" is a misnomer, since these values merely represent
   relative degradation in desired quality.

3.10 Language Tags
--------------------------------------------------------


   A language tag identifies a natural language spoken, written, or
   otherwise conveyed by human beings for communication of information
   to other human beings. Computer languages are explicitly excluded.
   HTTP uses language tags within the Accept-Language and Content-
   Language fields.

   The syntax and registry of HTTP language tags is the same as that
   defined by RFC 1766 [1]. In summary, a language tag is composed of 1
   or more parts: A primary language tag and a possibly empty series of
   subtags:

        language-tag  = primary-tag *( "-" subtag )
        primary-tag   = 1*8ALPHA
        subtag        = 1*8ALPHA

   White space is not allowed within the tag and all tags are case-
   insensitive. The name space of language tags is administered by the
   IANA. Example tags include:

       en, en-US, en-cockney, i-cherokee, x-pig-latin




Fielding, et al.            Standards Track                    [Page 29](#btoc){id=b029}

RFC 2616                        HTTP/1.1                       June 1999


   where any two-letter primary-tag is an ISO-639 language abbreviation
   and any two-letter initial subtag is an ISO-3166 country code. (The
   last three tags above are not registered tags; all but the last are
   examples of tags which could be registered in future.)

3.11 Entity Tags
--------------------------------------------------------


   Entity tags are used for comparing two or more entities from the same
   requested resource. HTTP/1.1 uses entity tags in the ETag (section
   14.19), If-Match (section 14.24), If-None-Match (section 14.26), and
   If-Range (section 14.27) header fields. The definition of how they
   are used and compared as cache validators is in section 13.3.3. An
   entity tag consists of an opaque quoted string, possibly prefixed by
   a weakness indicator.

      entity-tag = [ weak ] opaque-tag
      weak       = "W/"
      opaque-tag = quoted-string

   A "strong entity tag" MAY be shared by two entities of a resource
   only if they are equivalent by octet equality.

   A "weak entity tag," indicated by the "W/" prefix, MAY be shared by
   two entities of a resource only if the entities are equivalent and
   could be substituted for each other with no significant change in
   semantics. A weak entity tag can only be used for weak comparison.

   An entity tag MUST be unique across all versions of all entities
   associated with a particular resource. A given entity tag value MAY
   be used for entities obtained by requests on different URIs. The use
   of the same entity tag value in conjunction with entities obtained by
   requests on different URIs does not imply the equivalence of those
   entities.

3.12 Range Units
--------------------------------------------------------


   HTTP/1.1 allows a client to request that only part (a range of) the
   response entity be included within the response. HTTP/1.1 uses range
   units in the Range (section 14.35) and Content-Range (section 14.16)
   header fields. An entity can be broken down into subranges according
   to various structural units.

      range-unit       = bytes-unit | other-range-unit
      bytes-unit       = "bytes"
      other-range-unit = token

   The only range unit defined by HTTP/1.1 is "bytes". HTTP/1.1
   implementations MAY ignore ranges specified using other units.



Fielding, et al.            Standards Track                    [Page 30](#btoc){id=b030}

RFC 2616                        HTTP/1.1                       June 1999


   HTTP/1.1 has been designed to allow implementations of applications
   that do not depend on knowledge of ranges.

4 HTTP Message
--------------------------------------------------------


4.1 Message Types
--------------------------------------------------------


   HTTP messages consist of requests from client to server and responses
   from server to client.

       HTTP-message   = Request | Response     ; HTTP/1.1 messages

   Request (section 5) and Response (section 6) messages use the generic
   message format of RFC 822 [9] for transferring entities (the payload
   of the message). Both types of message consist of a start-line, zero
   or more header fields (also known as "headers"), an empty line (i.e.,
   a line with nothing preceding the CRLF) indicating the end of the
   header fields, and possibly a message-body.

        generic-message = start-line
                          *(message-header CRLF)
                          CRLF
                          [ message-body ]
        start-line      = Request-Line | Status-Line

   In the interest of robustness, servers SHOULD ignore any empty
   line(s) received where a Request-Line is expected. In other words, if
   the server is reading the protocol stream at the beginning of a
   message and receives a CRLF first, it should ignore the CRLF.

   Certain buggy HTTP/1.0 client implementations generate extra CRLF's
   after a POST request. To restate what is explicitly forbidden by the
   BNF, an HTTP/1.1 client MUST NOT preface or follow a request with an
   extra CRLF.

4.2 Message Headers
--------------------------------------------------------


   HTTP header fields, which include general-header (section 4.5),
   request-header (section 5.3), response-header (section 6.2), and
   entity-header (section 7.1) fields, follow the same generic format as
   that given in Section 3.1 of RFC 822 [9]. Each header field consists
   of a name followed by a colon (":") and the field value. Field names
   are case-insensitive. The field value MAY be preceded by any amount
   of LWS, though a single SP is preferred. Header fields can be
   extended over multiple lines by preceding each extra line with at
   least one SP or HT. Applications ought to follow "common form", where
   one is known or indicated, when generating HTTP constructs, since
   there might exist some implementations that fail to accept anything



Fielding, et al.            Standards Track                    [Page 31](#btoc){id=b031}

RFC 2616                        HTTP/1.1                       June 1999


   beyond the common forms.

       message-header = field-name ":" [ field-value ]
       field-name     = token
       field-value    = *( field-content | LWS )
       field-content  = <the OCTETs making up the field-value
                        and consisting of either *TEXT or combinations
                        of token, separators, and quoted-string>

   The field-content does not include any leading or trailing LWS:
   linear white space occurring before the first non-whitespace
   character of the field-value or after the last non-whitespace
   character of the field-value. Such leading or trailing LWS MAY be
   removed without changing the semantics of the field value. Any LWS
   that occurs between field-content MAY be replaced with a single SP
   before interpreting the field value or forwarding the message
   downstream.

   The order in which header fields with differing field names are
   received is not significant. However, it is "good practice" to send
   general-header fields first, followed by request-header or response-
   header fields, and ending with the entity-header fields.

   Multiple message-header fields with the same field-name MAY be
   present in a message if and only if the entire field-value for that
   header field is defined as a comma-separated list [i.e., #(values)].
   It MUST be possible to combine the multiple header fields into one
   "field-name: field-value" pair, without changing the semantics of the
   message, by appending each subsequent field-value to the first, each
   separated by a comma. The order in which header fields with the same
   field-name are received is therefore significant to the
   interpretation of the combined field value, and thus a proxy MUST NOT
   change the order of these field values when a message is forwarded.

4.3 Message Body
--------------------------------------------------------


   The message-body (if any) of an HTTP message is used to carry the
   entity-body associated with the request or response. The message-body
   differs from the entity-body only when a transfer-coding has been
   applied, as indicated by the Transfer-Encoding header field (section
   14.41).

       message-body = entity-body
                    | <entity-body encoded as per Transfer-Encoding>

   Transfer-Encoding MUST be used to indicate any transfer-codings
   applied by an application to ensure safe and proper transfer of the
   message. Transfer-Encoding is a property of the message, not of the



Fielding, et al.            Standards Track                    [Page 32](#btoc){id=b032}

RFC 2616                        HTTP/1.1                       June 1999


   entity, and thus MAY be added or removed by any application along the
   request/response chain. (However, section 3.6 places restrictions on
   when certain transfer-codings may be used.)

   The rules for when a message-body is allowed in a message differ for
   requests and responses.

   The presence of a message-body in a request is signaled by the
   inclusion of a Content-Length or Transfer-Encoding header field in
   the request's message-headers. A message-body MUST NOT be included in
   a request if the specification of the request method (section 5.1.1)
   does not allow sending an entity-body in requests. A server SHOULD
   read and forward a message-body on any request; if the request method
   does not include defined semantics for an entity-body, then the
   message-body SHOULD be ignored when handling the request.

   For response messages, whether or not a message-body is included with
   a message is dependent on both the request method and the response
   status code (section 6.1.1). All responses to the HEAD request method
   MUST NOT include a message-body, even though the presence of entity-
   header fields might lead one to believe they do. All 1xx
   (informational), 204 (no content), and 304 (not modified) responses
   MUST NOT include a message-body. All other responses do include a
   message-body, although it MAY be of zero length.

4.4 Message Length
--------------------------------------------------------


   The transfer-length of a message is the length of the message-body as
   it appears in the message; that is, after any transfer-codings have
   been applied. When a message-body is included with a message, the
   transfer-length of that body is determined by one of the following
   (in order of precedence):

   1.Any response message which "MUST NOT" include a message-body (such
     as the 1xx, 204, and 304 responses and any response to a HEAD
     request) is always terminated by the first empty line after the
     header fields, regardless of the entity-header fields present in
     the message.

   2.If a Transfer-Encoding header field (section 14.41) is present and
     has any value other than "identity", then the transfer-length is
     defined by use of the "chunked" transfer-coding (section 3.6),
     unless the message is terminated by closing the connection.

   3.If a Content-Length header field (section 14.13) is present, its
     decimal value in OCTETs represents both the entity-length and the
     transfer-length. The Content-Length header field MUST NOT be sent
     if these two lengths are different (i.e., if a Transfer-Encoding



Fielding, et al.            Standards Track                    [Page 33](#btoc){id=b033}

RFC 2616                        HTTP/1.1                       June 1999


     header field is present). If a message is received with both a
     Transfer-Encoding header field and a Content-Length header field,
     the latter MUST be ignored.

   4.If the message uses the media type "multipart/byteranges", and the
     ransfer-length is not otherwise specified, then this self-
     elimiting media type defines the transfer-length. This media type
     UST NOT be used unless the sender knows that the recipient can arse
     it; the presence in a request of a Range header with ultiple byte-
     range specifiers from a 1.1 client implies that the lient can parse
     multipart/byteranges responses.

       A range header might be forwarded by a 1.0 proxy that does not
       understand multipart/byteranges; in this case the server MUST
       delimit the message using methods defined in items 1,3 or 5 of
       this section.

   5.By the server closing the connection. (Closing the connection
     cannot be used to indicate the end of a request body, since that
     would leave no possibility for the server to send back a response.)

   For compatibility with HTTP/1.0 applications, HTTP/1.1 requests
   containing a message-body MUST include a valid Content-Length header
   field unless the server is known to be HTTP/1.1 compliant. If a
   request contains a message-body and a Content-Length is not given,
   the server SHOULD respond with 400 (bad request) if it cannot
   determine the length of the message, or with 411 (length required) if
   it wishes to insist on receiving a valid Content-Length.

   All HTTP/1.1 applications that receive entities MUST accept the
   "chunked" transfer-coding (section 3.6), thus allowing this mechanism
   to be used for messages when the message length cannot be determined
   in advance.

   Messages MUST NOT include both a Content-Length header field and a
   non-identity transfer-coding. If the message does include a non-
   identity transfer-coding, the Content-Length MUST be ignored.

   When a Content-Length is given in a message where a message-body is
   allowed, its field value MUST exactly match the number of OCTETs in
   the message-body. HTTP/1.1 user agents MUST notify the user when an
   invalid length is received and detected.

4.5 General Header Fields
--------------------------------------------------------


   There are a few header fields which have general applicability for
   both request and response messages, but which do not apply to the
   entity being transferred. These header fields apply only to the



Fielding, et al.            Standards Track                    [Page 34](#btoc){id=b034}

RFC 2616                        HTTP/1.1                       June 1999


   message being transmitted.

       general-header = Cache-Control            ; Section 14.9
                      | Connection               ; Section 14.10
                      | Date                     ; Section 14.18
                      | Pragma                   ; Section 14.32
                      | Trailer                  ; Section 14.40
                      | Transfer-Encoding        ; Section 14.41
                      | Upgrade                  ; Section 14.42
                      | Via                      ; Section 14.45
                      | Warning                  ; Section 14.46

   General-header field names can be extended reliably only in
   combination with a change in the protocol version. However, new or
   experimental header fields may be given the semantics of general
   header fields if all parties in the communication recognize them to
   be general-header fields. Unrecognized header fields are treated as
   entity-header fields.

5 Request
--------------------------------------------------------


   A request message from a client to a server includes, within the
   first line of that message, the method to be applied to the resource,
   the identifier of the resource, and the protocol version in use.

        Request       = Request-Line              ; Section 5.1
                        *(( general-header        ; Section 4.5
                         | request-header         ; Section 5.3
                         | entity-header ) CRLF)  ; Section 7.1
                        CRLF
                        [ message-body ]          ; Section 4.3

5.1 Request-Line
--------------------------------------------------------


   The Request-Line begins with a method token, followed by the
   Request-URI and the protocol version, and ending with CRLF. The
   elements are separated by SP characters. No CR or LF is allowed
   except in the final CRLF sequence.

        Request-Line   = Method SP Request-URI SP HTTP-Version CRLF











Fielding, et al.            Standards Track                    [Page 35](#btoc){id=b035}

RFC 2616                        HTTP/1.1                       June 1999


5.1.1 Method
--------------------------------------------------------


   The Method  token indicates the method to be performed on the
   resource identified by the Request-URI. The method is case-sensitive.

       Method         = "OPTIONS"                ; Section 9.2
                      | "GET"                    ; Section 9.3
                      | "HEAD"                   ; Section 9.4
                      | "POST"                   ; Section 9.5
                      | "PUT"                    ; Section 9.6
                      | "DELETE"                 ; Section 9.7
                      | "TRACE"                  ; Section 9.8
                      | "CONNECT"                ; Section 9.9
                      | extension-method
       extension-method = token

   The list of methods allowed by a resource can be specified in an
   Allow header field (section 14.7). The return code of the response
   always notifies the client whether a method is currently allowed on a
   resource, since the set of allowed methods can change dynamically. An
   origin server SHOULD return the status code 405 (Method Not Allowed)
   if the method is known by the origin server but not allowed for the
   requested resource, and 501 (Not Implemented) if the method is
   unrecognized or not implemented by the origin server. The methods GET
   and HEAD MUST be supported by all general-purpose servers. All other
   methods are OPTIONAL; however, if the above methods are implemented,
   they MUST be implemented with the same semantics as those specified
   in section 9.

5.1.2 Request-URI
--------------------------------------------------------


   The Request-URI is a Uniform Resource Identifier (section 3.2) and
   identifies the resource upon which to apply the request.

       Request-URI    = "*" | absoluteURI | abs_path | authority

   The four options for Request-URI are dependent on the nature of the
   request. The asterisk "*" means that the request does not apply to a
   particular resource, but to the server itself, and is only allowed
   when the method used does not necessarily apply to a resource. One
   example would be

       OPTIONS * HTTP/1.1

   The absoluteURI form is REQUIRED when the request is being made to a
   proxy. The proxy is requested to forward the request or service it
   from a valid cache, and return the response. Note that the proxy MAY
   forward the request on to another proxy or directly to the server



Fielding, et al.            Standards Track                    [Page 36](#btoc){id=b036}

RFC 2616                        HTTP/1.1                       June 1999


   specified by the absoluteURI. In order to avoid request loops, a
   proxy MUST be able to recognize all of its server names, including
   any aliases, local variations, and the numeric IP address. An example
   Request-Line would be:

       GET http://www.w3.org/pub/WWW/TheProject.html HTTP/1.1

   To allow for transition to absoluteURIs in all requests in future
   versions of HTTP, all HTTP/1.1 servers MUST accept the absoluteURI
   form in requests, even though HTTP/1.1 clients will only generate
   them in requests to proxies.

   The authority form is only used by the CONNECT method (section 9.9).

   The most common form of Request-URI is that used to identify a
   resource on an origin server or gateway. In this case the absolute
   path of the URI MUST be transmitted (see section 3.2.1, abs_path) as
   the Request-URI, and the network location of the URI (authority) MUST
   be transmitted in a Host header field. For example, a client wishing
   to retrieve the resource above directly from the origin server would
   create a TCP connection to port 80 of the host "www.w3.org" and send
   the lines:

       GET /pub/WWW/TheProject.html HTTP/1.1
       Host: www.w3.org

   followed by the remainder of the Request. Note that the absolute path
   cannot be empty; if none is present in the original URI, it MUST be
   given as "/" (the server root).

   The Request-URI is transmitted in the format specified in section
   3.2.1. If the Request-URI is encoded using the "% HEX HEX" encoding
   [42], the origin server MUST decode the Request-URI in order to
   properly interpret the request. Servers SHOULD respond to invalid
   Request-URIs with an appropriate status code.

   A transparent proxy MUST NOT rewrite the "abs_path" part of the
   received Request-URI when forwarding it to the next inbound server,
   except as noted above to replace a null abs_path with "/".

      Note: The "no rewrite" rule prevents the proxy from changing the
      meaning of the request when the origin server is improperly using
      a non-reserved URI character for a reserved purpose.  Implementors
      should be aware that some pre-HTTP/1.1 proxies have been known to
      rewrite the Request-URI.






Fielding, et al.            Standards Track                    [Page 37](#btoc){id=b037}

RFC 2616                        HTTP/1.1                       June 1999


5.2 The Resource Identified by a Request
--------------------------------------------------------


   The exact resource identified by an Internet request is determined by
   examining both the Request-URI and the Host header field.

   An origin server that does not allow resources to differ by the
   requested host MAY ignore the Host header field value when
   determining the resource identified by an HTTP/1.1 request. (But see
   section 19.6.1.1 for other requirements on Host support in HTTP/1.1.)

   An origin server that does differentiate resources based on the host
   requested (sometimes referred to as virtual hosts or vanity host
   names) MUST use the following rules for determining the requested
   resource on an HTTP/1.1 request:

   1. If Request-URI is an absoluteURI, the host is part of the
     Request-URI. Any Host header field value in the request MUST be
     ignored.

   2. If the Request-URI is not an absoluteURI, and the request includes
     a Host header field, the host is determined by the Host header
     field value.

   3. If the host as determined by rule 1 or 2 is not a valid host on
     the server, the response MUST be a 400 (Bad Request) error message.

   Recipients of an HTTP/1.0 request that lacks a Host header field MAY
   attempt to use heuristics (e.g., examination of the URI path for
   something unique to a particular host) in order to determine what
   exact resource is being requested.

5.3 Request Header Fields
--------------------------------------------------------


   The request-header fields allow the client to pass additional
   information about the request, and about the client itself, to the
   server. These fields act as request modifiers, with semantics
   equivalent to the parameters on a programming language method
   invocation.

       request-header = Accept                   ; Section 14.1
                      | Accept-Charset           ; Section 14.2
                      | Accept-Encoding          ; Section 14.3
                      | Accept-Language          ; Section 14.4
                      | Authorization            ; Section 14.8
                      | Expect                   ; Section 14.20
                      | From                     ; Section 14.22
                      | Host                     ; Section 14.23
                      | If-Match                 ; Section 14.24



Fielding, et al.            Standards Track                    [Page 38](#btoc){id=b038}

RFC 2616                        HTTP/1.1                       June 1999


                      | If-Modified-Since        ; Section 14.25
                      | If-None-Match            ; Section 14.26
                      | If-Range                 ; Section 14.27
                      | If-Unmodified-Since      ; Section 14.28
                      | Max-Forwards             ; Section 14.31
                      | Proxy-Authorization      ; Section 14.34
                      | Range                    ; Section 14.35
                      | Referer                  ; Section 14.36
                      | TE                       ; Section 14.39
                      | User-Agent               ; Section 14.43

   Request-header field names can be extended reliably only in
   combination with a change in the protocol version. However, new or
   experimental header fields MAY be given the semantics of request-
   header fields if all parties in the communication recognize them to
   be request-header fields. Unrecognized header fields are treated as
   entity-header fields.

6 Response
--------------------------------------------------------


   After receiving and interpreting a request message, a server responds
   with an HTTP response message.

       Response      = Status-Line               ; Section 6.1
                       *(( general-header        ; Section 4.5
                        | response-header        ; Section 6.2
                        | entity-header ) CRLF)  ; Section 7.1
                       CRLF
                       [ message-body ]          ; Section 7.2

6.1 Status-Line
--------------------------------------------------------


   The first line of a Response message is the Status-Line, consisting
   of the protocol version followed by a numeric status code and its
   associated textual phrase, with each element separated by SP
   characters. No CR or LF is allowed except in the final CRLF sequence.

       Status-Line = HTTP-Version SP Status-Code SP Reason-Phrase CRLF

6.1.1 Status Code and Reason Phrase
--------------------------------------------------------


   The Status-Code element is a 3-digit integer result code of the
   attempt to understand and satisfy the request. These codes are fully
   defined in section 10. The Reason-Phrase is intended to give a short
   textual description of the Status-Code. The Status-Code is intended
   for use by automata and the Reason-Phrase is intended for the human
   user. The client is not required to examine or display the Reason-
   Phrase.



Fielding, et al.            Standards Track                    [Page 39](#btoc){id=b039}

RFC 2616                        HTTP/1.1                       June 1999


   The first digit of the Status-Code defines the class of response. The
   last two digits do not have any categorization role. There are 5
   values for the first digit:

      - 1xx: Informational - Request received, continuing process

      - 2xx: Success - The action was successfully received,
        understood, and accepted

      - 3xx: Redirection - Further action must be taken in order to
        complete the request

      - 4xx: Client Error - The request contains bad syntax or cannot
        be fulfilled

      - 5xx: Server Error - The server failed to fulfill an apparently
        valid request

   The individual values of the numeric status codes defined for
   HTTP/1.1, and an example set of corresponding Reason-Phrase's, are
   presented below. The reason phrases listed here are only
   recommendations -- they MAY be replaced by local equivalents without
   affecting the protocol.

      Status-Code    =
            "100"  ; Section 10.1.1: Continue
          | "101"  ; Section 10.1.2: Switching Protocols
          | "200"  ; Section 10.2.1: OK
          | "201"  ; Section 10.2.2: Created
          | "202"  ; Section 10.2.3: Accepted
          | "203"  ; Section 10.2.4: Non-Authoritative Information
          | "204"  ; Section 10.2.5: No Content
          | "205"  ; Section 10.2.6: Reset Content
          | "206"  ; Section 10.2.7: Partial Content
          | "300"  ; Section 10.3.1: Multiple Choices
          | "301"  ; Section 10.3.2: Moved Permanently
          | "302"  ; Section 10.3.3: Found
          | "303"  ; Section 10.3.4: See Other
          | "304"  ; Section 10.3.5: Not Modified
          | "305"  ; Section 10.3.6: Use Proxy
          | "307"  ; Section 10.3.8: Temporary Redirect
          | "400"  ; Section 10.4.1: Bad Request
          | "401"  ; Section 10.4.2: Unauthorized
          | "402"  ; Section 10.4.3: Payment Required
          | "403"  ; Section 10.4.4: Forbidden
          | "404"  ; Section 10.4.5: Not Found
          | "405"  ; Section 10.4.6: Method Not Allowed
          | "406"  ; Section 10.4.7: Not Acceptable



Fielding, et al.            Standards Track                    [Page 40](#btoc){id=b040}

RFC 2616                        HTTP/1.1                       June 1999


          | "407"  ; Section 10.4.8: Proxy Authentication Required
          | "408"  ; Section 10.4.9: Request Time-out
          | "409"  ; Section 10.4.10: Conflict
          | "410"  ; Section 10.4.11: Gone
          | "411"  ; Section 10.4.12: Length Required
          | "412"  ; Section 10.4.13: Precondition Failed
          | "413"  ; Section 10.4.14: Request Entity Too Large
          | "414"  ; Section 10.4.15: Request-URI Too Large
          | "415"  ; Section 10.4.16: Unsupported Media Type
          | "416"  ; Section 10.4.17: Requested range not satisfiable
          | "417"  ; Section 10.4.18: Expectation Failed
          | "500"  ; Section 10.5.1: Internal Server Error
          | "501"  ; Section 10.5.2: Not Implemented
          | "502"  ; Section 10.5.3: Bad Gateway
          | "503"  ; Section 10.5.4: Service Unavailable
          | "504"  ; Section 10.5.5: Gateway Time-out
          | "505"  ; Section 10.5.6: HTTP Version not supported
          | extension-code

      extension-code = 3DIGIT
      Reason-Phrase  = *<TEXT, excluding CR, LF>

   HTTP status codes are extensible. HTTP applications are not required
   to understand the meaning of all registered status codes, though such
   understanding is obviously desirable. However, applications MUST
   understand the class of any status code, as indicated by the first
   digit, and treat any unrecognized response as being equivalent to the
   x00 status code of that class, with the exception that an
   unrecognized response MUST NOT be cached. For example, if an
   unrecognized status code of 431 is received by the client, it can
   safely assume that there was something wrong with its request and
   treat the response as if it had received a 400 status code. In such
   cases, user agents SHOULD present to the user the entity returned
   with the response, since that entity is likely to include human-
   readable information which will explain the unusual status.

6.2 Response Header Fields
--------------------------------------------------------


   The response-header fields allow the server to pass additional
   information about the response which cannot be placed in the Status-
   Line. These header fields give information about the server and about
   further access to the resource identified by the Request-URI.

       response-header = Accept-Ranges           ; Section 14.5
                       | Age                     ; Section 14.6
                       | ETag                    ; Section 14.19
                       | Location                ; Section 14.30
                       | Proxy-Authenticate      ; Section 14.33



Fielding, et al.            Standards Track                    [Page 41](#btoc){id=b041}

RFC 2616                        HTTP/1.1                       June 1999


                       | Retry-After             ; Section 14.37
                       | Server                  ; Section 14.38
                       | Vary                    ; Section 14.44
                       | WWW-Authenticate        ; Section 14.47

   Response-header field names can be extended reliably only in
   combination with a change in the protocol version. However, new or
   experimental header fields MAY be given the semantics of response-
   header fields if all parties in the communication recognize them to
   be response-header fields. Unrecognized header fields are treated as
   entity-header fields.

7 Entity
--------------------------------------------------------


   Request and Response messages MAY transfer an entity if not otherwise
   restricted by the request method or response status code. An entity
   consists of entity-header fields and an entity-body, although some
   responses will only include the entity-headers.

   In this section, both sender and recipient refer to either the client
   or the server, depending on who sends and who receives the entity.

7.1 Entity Header Fields
--------------------------------------------------------


   Entity-header fields define metainformation about the entity-body or,
   if no body is present, about the resource identified by the request.
   Some of this metainformation is OPTIONAL; some might be REQUIRED by
   portions of this specification.

       entity-header  = Allow                    ; Section 14.7
                      | Content-Encoding         ; Section 14.11
                      | Content-Language         ; Section 14.12
                      | Content-Length           ; Section 14.13
                      | Content-Location         ; Section 14.14
                      | Content-MD5              ; Section 14.15
                      | Content-Range            ; Section 14.16
                      | Content-Type             ; Section 14.17
                      | Expires                  ; Section 14.21
                      | Last-Modified            ; Section 14.29
                      | extension-header

       extension-header = message-header

   The extension-header mechanism allows additional entity-header fields
   to be defined without changing the protocol, but these fields cannot
   be assumed to be recognizable by the recipient. Unrecognized header
   fields SHOULD be ignored by the recipient and MUST be forwarded by
   transparent proxies.



Fielding, et al.            Standards Track                    [Page 42](#btoc){id=b042}

RFC 2616                        HTTP/1.1                       June 1999


7.2 Entity Body
--------------------------------------------------------


   The entity-body (if any) sent with an HTTP request or response is in
   a format and encoding defined by the entity-header fields.

       entity-body    = *OCTET

   An entity-body is only present in a message when a message-body is
   present, as described in section 4.3. The entity-body is obtained
   from the message-body by decoding any Transfer-Encoding that might
   have been applied to ensure safe and proper transfer of the message.

7.2.1 Type
--------------------------------------------------------


   When an entity-body is included with a message, the data type of that
   body is determined via the header fields Content-Type and Content-
   Encoding. These define a two-layer, ordered encoding model:

       entity-body := Content-Encoding( Content-Type( data ) )

   Content-Type specifies the media type of the underlying data.
   Content-Encoding may be used to indicate any additional content
   codings applied to the data, usually for the purpose of data
   compression, that are a property of the requested resource. There is
   no default encoding.

   Any HTTP/1.1 message containing an entity-body SHOULD include a
   Content-Type header field defining the media type of that body. If
   and only if the media type is not given by a Content-Type field, the
   recipient MAY attempt to guess the media type via inspection of its
   content and/or the name extension(s) of the URI used to identify the
   resource. If the media type remains unknown, the recipient SHOULD
   treat it as type "application/octet-stream".

7.2.2 Entity Length
--------------------------------------------------------


   The entity-length of a message is the length of the message-body
   before any transfer-codings have been applied. Section 4.4 defines
   how the transfer-length of a message-body is determined.












Fielding, et al.            Standards Track                    [Page 43](#btoc){id=b043}

RFC 2616                        HTTP/1.1                       June 1999


8 Connections
--------------------------------------------------------


8.1 Persistent Connections
--------------------------------------------------------


8.1.1 Purpose
--------------------------------------------------------


   Prior to persistent connections, a separate TCP connection was
   established to fetch each URL, increasing the load on HTTP servers
   and causing congestion on the Internet. The use of inline images and
   other associated data often require a client to make multiple
   requests of the same server in a short amount of time. Analysis of
   these performance problems and results from a prototype
   implementation are available [26] [30]. Implementation experience and
   measurements of actual HTTP/1.1 (RFC 2068) implementations show good
   results [39]. Alternatives have also been explored, for example,
   T/TCP [27].

   Persistent HTTP connections have a number of advantages:

      - By opening and closing fewer TCP connections, CPU time is saved
        in routers and hosts (clients, servers, proxies, gateways,
        tunnels, or caches), and memory used for TCP protocol control
        blocks can be saved in hosts.

      - HTTP requests and responses can be pipelined on a connection.
        Pipelining allows a client to make multiple requests without
        waiting for each response, allowing a single TCP connection to
        be used much more efficiently, with much lower elapsed time.

      - Network congestion is reduced by reducing the number of packets
        caused by TCP opens, and by allowing TCP sufficient time to
        determine the congestion state of the network.

      - Latency on subsequent requests is reduced since there is no time
        spent in TCP's connection opening handshake.

      - HTTP can evolve more gracefully, since errors can be reported
        without the penalty of closing the TCP connection. Clients using
        future versions of HTTP might optimistically try a new feature,
        but if communicating with an older server, retry with old
        semantics after an error is reported.

   HTTP implementations SHOULD implement persistent connections.








Fielding, et al.            Standards Track                    [Page 44](#btoc){id=b044}

RFC 2616                        HTTP/1.1                       June 1999


8.1.2 Overall Operation
--------------------------------------------------------


   A significant difference between HTTP/1.1 and earlier versions of
   HTTP is that persistent connections are the default behavior of any
   HTTP connection. That is, unless otherwise indicated, the client
   SHOULD assume that the server will maintain a persistent connection,
   even after error responses from the server.

   Persistent connections provide a mechanism by which a client and a
   server can signal the close of a TCP connection. This signaling takes
   place using the Connection header field (section 14.10). Once a close
   has been signaled, the client MUST NOT send any more requests on that
   connection.

8.1.2.1 Negotiation
--------------------------------------------------------


   An HTTP/1.1 server MAY assume that a HTTP/1.1 client intends to
   maintain a persistent connection unless a Connection header including
   the connection-token "close" was sent in the request. If the server
   chooses to close the connection immediately after sending the
   response, it SHOULD send a Connection header including the
   connection-token close.

   An HTTP/1.1 client MAY expect a connection to remain open, but would
   decide to keep it open based on whether the response from a server
   contains a Connection header with the connection-token close. In case
   the client does not want to maintain a connection for more than that
   request, it SHOULD send a Connection header including the
   connection-token close.

   If either the client or the server sends the close token in the
   Connection header, that request becomes the last one for the
   connection.

   Clients and servers SHOULD NOT assume that a persistent connection is
   maintained for HTTP versions less than 1.1 unless it is explicitly
   signaled. See section 19.6.2 for more information on backward
   compatibility with HTTP/1.0 clients.

   In order to remain persistent, all messages on the connection MUST
   have a self-defined message length (i.e., one not defined by closure
   of the connection), as described in section 4.4.









Fielding, et al.            Standards Track                    [Page 45](#btoc){id=b045}

RFC 2616                        HTTP/1.1                       June 1999


8.1.2.2 Pipelining
--------------------------------------------------------


   A client that supports persistent connections MAY "pipeline" its
   requests (i.e., send multiple requests without waiting for each
   response). A server MUST send its responses to those requests in the
   same order that the requests were received.

   Clients which assume persistent connections and pipeline immediately
   after connection establishment SHOULD be prepared to retry their
   connection if the first pipelined attempt fails. If a client does
   such a retry, it MUST NOT pipeline before it knows the connection is
   persistent. Clients MUST also be prepared to resend their requests if
   the server closes the connection before sending all of the
   corresponding responses.

   Clients SHOULD NOT pipeline requests using non-idempotent methods or
   non-idempotent sequences of methods (see section 9.1.2). Otherwise, a
   premature termination of the transport connection could lead to
   indeterminate results. A client wishing to send a non-idempotent
   request SHOULD wait to send that request until it has received the
   response status for the previous request.

8.1.3 Proxy Servers
--------------------------------------------------------


   It is especially important that proxies correctly implement the
   properties of the Connection header field as specified in section
   14.10.

   The proxy server MUST signal persistent connections separately with
   its clients and the origin servers (or other proxy servers) that it
   connects to. Each persistent connection applies to only one transport
   link.

   A proxy server MUST NOT establish a HTTP/1.1 persistent connection
   with an HTTP/1.0 client (but see RFC 2068 [33] for information and
   discussion of the problems with the Keep-Alive header implemented by
   many HTTP/1.0 clients).

8.1.4 Practical Considerations
--------------------------------------------------------


   Servers will usually have some time-out value beyond which they will
   no longer maintain an inactive connection. Proxy servers might make
   this a higher value since it is likely that the client will be making
   more connections through the same server. The use of persistent
   connections places no requirements on the length (or existence) of
   this time-out for either the client or the server.





Fielding, et al.            Standards Track                    [Page 46](#btoc){id=b046}

RFC 2616                        HTTP/1.1                       June 1999


   When a client or server wishes to time-out it SHOULD issue a graceful
   close on the transport connection. Clients and servers SHOULD both
   constantly watch for the other side of the transport close, and
   respond to it as appropriate. If a client or server does not detect
   the other side's close promptly it could cause unnecessary resource
   drain on the network.

   A client, server, or proxy MAY close the transport connection at any
   time. For example, a client might have started to send a new request
   at the same time that the server has decided to close the "idle"
   connection. From the server's point of view, the connection is being
   closed while it was idle, but from the client's point of view, a
   request is in progress.

   This means that clients, servers, and proxies MUST be able to recover
   from asynchronous close events. Client software SHOULD reopen the
   transport connection and retransmit the aborted sequence of requests
   without user interaction so long as the request sequence is
   idempotent (see section 9.1.2). Non-idempotent methods or sequences
   MUST NOT be automatically retried, although user agents MAY offer a
   human operator the choice of retrying the request(s). Confirmation by
   user-agent software with semantic understanding of the application
   MAY substitute for user confirmation. The automatic retry SHOULD NOT
   be repeated if the second sequence of requests fails.

   Servers SHOULD always respond to at least one request per connection,
   if at all possible. Servers SHOULD NOT close a connection in the
   middle of transmitting a response, unless a network or client failure
   is suspected.

   Clients that use persistent connections SHOULD limit the number of
   simultaneous connections that they maintain to a given server. A
   single-user client SHOULD NOT maintain more than 2 connections with
   any server or proxy. A proxy SHOULD use up to 2 * N connections to
   another server or proxy, where N is the number of simultaneously
   active users. These guidelines are intended to improve HTTP response
   times and avoid congestion.

8.2 Message Transmission Requirements
--------------------------------------------------------


8.2.1 Persistent Connections and Flow Control
--------------------------------------------------------


   HTTP/1.1 servers SHOULD maintain persistent connections and use TCP's
   flow control mechanisms to resolve temporary overloads, rather than
   terminating connections with the expectation that clients will retry.
   The latter technique can exacerbate network congestion.





Fielding, et al.            Standards Track                    [Page 47](#btoc){id=b047}

RFC 2616                        HTTP/1.1                       June 1999


8.2.2 Monitoring Connections for Error Status Messages
--------------------------------------------------------


   An HTTP/1.1 (or later) client sending a message-body SHOULD monitor
   the network connection for an error status while it is transmitting
   the request. If the client sees an error status, it SHOULD
   immediately cease transmitting the body. If the body is being sent
   using a "chunked" encoding (section 3.6), a zero length chunk and
   empty trailer MAY be used to prematurely mark the end of the message.
   If the body was preceded by a Content-Length header, the client MUST
   close the connection.

8.2.3 Use of the 100 (Continue) Status
--------------------------------------------------------


   The purpose of the 100 (Continue) status (see section 10.1.1) is to
   allow a client that is sending a request message with a request body
   to determine if the origin server is willing to accept the request
   (based on the request headers) before the client sends the request
   body. In some cases, it might either be inappropriate or highly
   inefficient for the client to send the body if the server will reject
   the message without looking at the body.

   Requirements for HTTP/1.1 clients:

      - If a client will wait for a 100 (Continue) response before
        sending the request body, it MUST send an Expect request-header
        field (section 14.20) with the "100-continue" expectation.

      - A client MUST NOT send an Expect request-header field (section
        14.20) with the "100-continue" expectation if it does not intend
        to send a request body.

   Because of the presence of older implementations, the protocol allows
   ambiguous situations in which a client may send "Expect: 100-
   continue" without receiving either a 417 (Expectation Failed) status
   or a 100 (Continue) status. Therefore, when a client sends this
   header field to an origin server (possibly via a proxy) from which it
   has never seen a 100 (Continue) status, the client SHOULD NOT wait
   for an indefinite period before sending the request body.

   Requirements for HTTP/1.1 origin servers:

      - Upon receiving a request which includes an Expect request-header
        field with the "100-continue" expectation, an origin server MUST
        either respond with 100 (Continue) status and continue to read
        from the input stream, or respond with a final status code. The
        origin server MUST NOT wait for the request body before sending
        the 100 (Continue) response. If it responds with a final status
        code, it MAY close the transport connection or it MAY continue



Fielding, et al.            Standards Track                    [Page 48](#btoc){id=b048}

RFC 2616                        HTTP/1.1                       June 1999


        to read and discard the rest of the request.  It MUST NOT
        perform the requested method if it returns a final status code.

      - An origin server SHOULD NOT send a 100 (Continue) response if
        the request message does not include an Expect request-header
        field with the "100-continue" expectation, and MUST NOT send a
        100 (Continue) response if such a request comes from an HTTP/1.0
        (or earlier) client. There is an exception to this rule: for
        compatibility with RFC 2068, a server MAY send a 100 (Continue)
        status in response to an HTTP/1.1 PUT or POST request that does
        not include an Expect request-header field with the "100-
        continue" expectation. This exception, the purpose of which is
        to minimize any client processing delays associated with an
        undeclared wait for 100 (Continue) status, applies only to
        HTTP/1.1 requests, and not to requests with any other HTTP-
        version value.

      - An origin server MAY omit a 100 (Continue) response if it has
        already received some or all of the request body for the
        corresponding request.

      - An origin server that sends a 100 (Continue) response MUST
        ultimately send a final status code, once the request body is
        received and processed, unless it terminates the transport
        connection prematurely.

      - If an origin server receives a request that does not include an
        Expect request-header field with the "100-continue" expectation,
        the request includes a request body, and the server responds
        with a final status code before reading the entire request body
        from the transport connection, then the server SHOULD NOT close
        the transport connection until it has read the entire request,
        or until the client closes the connection. Otherwise, the client
        might not reliably receive the response message. However, this
        requirement is not be construed as preventing a server from
        defending itself against denial-of-service attacks, or from
        badly broken client implementations.

   Requirements for HTTP/1.1 proxies:

      - If a proxy receives a request that includes an Expect request-
        header field with the "100-continue" expectation, and the proxy
        either knows that the next-hop server complies with HTTP/1.1 or
        higher, or does not know the HTTP version of the next-hop
        server, it MUST forward the request, including the Expect header
        field.





Fielding, et al.            Standards Track                    [Page 49](#btoc){id=b049}

RFC 2616                        HTTP/1.1                       June 1999


      - If the proxy knows that the version of the next-hop server is
        HTTP/1.0 or lower, it MUST NOT forward the request, and it MUST
        respond with a 417 (Expectation Failed) status.

      - Proxies SHOULD maintain a cache recording the HTTP version
        numbers received from recently-referenced next-hop servers.

      - A proxy MUST NOT forward a 100 (Continue) response if the
        request message was received from an HTTP/1.0 (or earlier)
        client and did not include an Expect request-header field with
        the "100-continue" expectation. This requirement overrides the
        general rule for forwarding of 1xx responses (see section 10.1).

8.2.4 Client Behavior if Server Prematurely Closes Connection
--------------------------------------------------------


   If an HTTP/1.1 client sends a request which includes a request body,
   but which does not include an Expect request-header field with the
   "100-continue" expectation, and if the client is not directly
   connected to an HTTP/1.1 origin server, and if the client sees the
   connection close before receiving any status from the server, the
   client SHOULD retry the request.  If the client does retry this
   request, it MAY use the following "binary exponential backoff"
   algorithm to be assured of obtaining a reliable response:

      1. Initiate a new connection to the server

      2. Transmit the request-headers

      3. Initialize a variable R to the estimated round-trip time to the
         server (e.g., based on the time it took to establish the
         connection), or to a constant value of 5 seconds if the round-
         trip time is not available.

      4. Compute T = R * (2**N), where N is the number of previous
         retries of this request.

      5. Wait either for an error response from the server, or for T
         seconds (whichever comes first)

      6. If no error response is received, after T seconds transmit the
         body of the request.

      7. If client sees that the connection is closed prematurely,
         repeat from step 1 until the request is accepted, an error
         response is received, or the user becomes impatient and
         terminates the retry process.





Fielding, et al.            Standards Track                    [Page 50](#btoc){id=b050}

RFC 2616                        HTTP/1.1                       June 1999


   If at any point an error status is received, the client

      - SHOULD NOT continue and

      - SHOULD close the connection if it has not completed sending the
        request message.

9 Method Definitions
--------------------------------------------------------


   The set of common methods for HTTP/1.1 is defined below. Although
   this set can be expanded, additional methods cannot be assumed to
   share the same semantics for separately extended clients and servers.

   The Host request-header field (section 14.23) MUST accompany all
   HTTP/1.1 requests.

9.1 Safe and Idempotent Methods
--------------------------------------------------------


9.1.1 Safe Methods
--------------------------------------------------------


   Implementors should be aware that the software represents the user in
   their interactions over the Internet, and should be careful to allow
   the user to be aware of any actions they might take which may have an
   unexpected significance to themselves or others.

   In particular, the convention has been established that the GET and
   HEAD methods SHOULD NOT have the significance of taking an action
   other than retrieval. These methods ought to be considered "safe".
   This allows user agents to represent other methods, such as POST, PUT
   and DELETE, in a special way, so that the user is made aware of the
   fact that a possibly unsafe action is being requested.

   Naturally, it is not possible to ensure that the server does not
   generate side-effects as a result of performing a GET request; in
   fact, some dynamic resources consider that a feature. The important
   distinction here is that the user did not request the side-effects,
   so therefore cannot be held accountable for them.

9.1.2 Idempotent Methods
--------------------------------------------------------


   Methods can also have the property of "idempotence" in that (aside
   from error or expiration issues) the side-effects of N > 0 identical
   requests is the same as for a single request. The methods GET, HEAD,
   PUT and DELETE share this property. Also, the methods OPTIONS and
   TRACE SHOULD NOT have side effects, and so are inherently idempotent.






Fielding, et al.            Standards Track                    [Page 51](#btoc){id=b051}

RFC 2616                        HTTP/1.1                       June 1999


   However, it is possible that a sequence of several requests is non-
   idempotent, even if all of the methods executed in that sequence are
   idempotent. (A sequence is idempotent if a single execution of the
   entire sequence always yields a result that is not changed by a
   reexecution of all, or part, of that sequence.) For example, a
   sequence is non-idempotent if its result depends on a value that is
   later modified in the same sequence.

   A sequence that never has side effects is idempotent, by definition
   (provided that no concurrent operations are being executed on the
   same set of resources).

9.2 OPTIONS
--------------------------------------------------------


   The OPTIONS method represents a request for information about the
   communication options available on the request/response chain
   identified by the Request-URI. This method allows the client to
   determine the options and/or requirements associated with a resource,
   or the capabilities of a server, without implying a resource action
   or initiating a resource retrieval.

   Responses to this method are not cacheable.

   If the OPTIONS request includes an entity-body (as indicated by the
   presence of Content-Length or Transfer-Encoding), then the media type
   MUST be indicated by a Content-Type field. Although this
   specification does not define any use for such a body, future
   extensions to HTTP might use the OPTIONS body to make more detailed
   queries on the server. A server that does not support such an
   extension MAY discard the request body.

   If the Request-URI is an asterisk ("*"), the OPTIONS request is
   intended to apply to the server in general rather than to a specific
   resource. Since a server's communication options typically depend on
   the resource, the "*" request is only useful as a "ping" or "no-op"
   type of method; it does nothing beyond allowing the client to test
   the capabilities of the server. For example, this can be used to test
   a proxy for HTTP/1.1 compliance (or lack thereof).

   If the Request-URI is not an asterisk, the OPTIONS request applies
   only to the options that are available when communicating with that
   resource.

   A 200 response SHOULD include any header fields that indicate
   optional features implemented by the server and applicable to that
   resource (e.g., Allow), possibly including extensions not defined by
   this specification. The response body, if any, SHOULD also include
   information about the communication options. The format for such a



Fielding, et al.            Standards Track                    [Page 52](#btoc){id=b052}

RFC 2616                        HTTP/1.1                       June 1999


   body is not defined by this specification, but might be defined by
   future extensions to HTTP. Content negotiation MAY be used to select
   the appropriate response format. If no response body is included, the
   response MUST include a Content-Length field with a field-value of
   "0".

   The Max-Forwards request-header field MAY be used to target a
   specific proxy in the request chain. When a proxy receives an OPTIONS
   request on an absoluteURI for which request forwarding is permitted,
   the proxy MUST check for a Max-Forwards field. If the Max-Forwards
   field-value is zero ("0"), the proxy MUST NOT forward the message;
   instead, the proxy SHOULD respond with its own communication options.
   If the Max-Forwards field-value is an integer greater than zero, the
   proxy MUST decrement the field-value when it forwards the request. If
   no Max-Forwards field is present in the request, then the forwarded
   request MUST NOT include a Max-Forwards field.

9.3 GET
--------------------------------------------------------


   The GET method means retrieve whatever information (in the form of an
   entity) is identified by the Request-URI. If the Request-URI refers
   to a data-producing process, it is the produced data which shall be
   returned as the entity in the response and not the source text of the
   process, unless that text happens to be the output of the process.

   The semantics of the GET method change to a "conditional GET" if the
   request message includes an If-Modified-Since, If-Unmodified-Since,
   If-Match, If-None-Match, or If-Range header field. A conditional GET
   method requests that the entity be transferred only under the
   circumstances described by the conditional header field(s). The
   conditional GET method is intended to reduce unnecessary network
   usage by allowing cached entities to be refreshed without requiring
   multiple requests or transferring data already held by the client.

   The semantics of the GET method change to a "partial GET" if the
   request message includes a Range header field. A partial GET requests
   that only part of the entity be transferred, as described in section
   14.35. The partial GET method is intended to reduce unnecessary
   network usage by allowing partially-retrieved entities to be
   completed without transferring data already held by the client.

   The response to a GET request is cacheable if and only if it meets
   the requirements for HTTP caching described in section 13.

   See section 15.1.3 for security considerations when used for forms.






Fielding, et al.            Standards Track                    [Page 53](#btoc){id=b053}

RFC 2616                        HTTP/1.1                       June 1999


9.4 HEAD
--------------------------------------------------------


   The HEAD method is identical to GET except that the server MUST NOT
   return a message-body in the response. The metainformation contained
   in the HTTP headers in response to a HEAD request SHOULD be identical
   to the information sent in response to a GET request. This method can
   be used for obtaining metainformation about the entity implied by the
   request without transferring the entity-body itself. This method is
   often used for testing hypertext links for validity, accessibility,
   and recent modification.

   The response to a HEAD request MAY be cacheable in the sense that the
   information contained in the response MAY be used to update a
   previously cached entity from that resource. If the new field values
   indicate that the cached entity differs from the current entity (as
   would be indicated by a change in Content-Length, Content-MD5, ETag
   or Last-Modified), then the cache MUST treat the cache entry as
   stale.

9.5 POST
--------------------------------------------------------


   The POST method is used to request that the origin server accept the
   entity enclosed in the request as a new subordinate of the resource
   identified by the Request-URI in the Request-Line. POST is designed
   to allow a uniform method to cover the following functions:

      - Annotation of existing resources;

      - Posting a message to a bulletin board, newsgroup, mailing list,
        or similar group of articles;

      - Providing a block of data, such as the result of submitting a
        form, to a data-handling process;

      - Extending a database through an append operation.

   The actual function performed by the POST method is determined by the
   server and is usually dependent on the Request-URI. The posted entity
   is subordinate to that URI in the same way that a file is subordinate
   to a directory containing it, a news article is subordinate to a
   newsgroup to which it is posted, or a record is subordinate to a
   database.

   The action performed by the POST method might not result in a
   resource that can be identified by a URI. In this case, either 200
   (OK) or 204 (No Content) is the appropriate response status,
   depending on whether or not the response includes an entity that
   describes the result.



Fielding, et al.            Standards Track                    [Page 54](#btoc){id=b054}

RFC 2616                        HTTP/1.1                       June 1999


   If a resource has been created on the origin server, the response
   SHOULD be 201 (Created) and contain an entity which describes the
   status of the request and refers to the new resource, and a Location
   header (see section 14.30).

   Responses to this method are not cacheable, unless the response
   includes appropriate Cache-Control or Expires header fields. However,
   the 303 (See Other) response can be used to direct the user agent to
   retrieve a cacheable resource.

   POST requests MUST obey the message transmission requirements set out
   in section 8.2.

   See section 15.1.3 for security considerations.

9.6 PUT
--------------------------------------------------------


   The PUT method requests that the enclosed entity be stored under the
   supplied Request-URI. If the Request-URI refers to an already
   existing resource, the enclosed entity SHOULD be considered as a
   modified version of the one residing on the origin server. If the
   Request-URI does not point to an existing resource, and that URI is
   capable of being defined as a new resource by the requesting user
   agent, the origin server can create the resource with that URI. If a
   new resource is created, the origin server MUST inform the user agent
   via the 201 (Created) response. If an existing resource is modified,
   either the 200 (OK) or 204 (No Content) response codes SHOULD be sent
   to indicate successful completion of the request. If the resource
   could not be created or modified with the Request-URI, an appropriate
   error response SHOULD be given that reflects the nature of the
   problem. The recipient of the entity MUST NOT ignore any Content-*
   (e.g. Content-Range) headers that it does not understand or implement
   and MUST return a 501 (Not Implemented) response in such cases.

   If the request passes through a cache and the Request-URI identifies
   one or more currently cached entities, those entries SHOULD be
   treated as stale. Responses to this method are not cacheable.

   The fundamental difference between the POST and PUT requests is
   reflected in the different meaning of the Request-URI. The URI in a
   POST request identifies the resource that will handle the enclosed
   entity. That resource might be a data-accepting process, a gateway to
   some other protocol, or a separate entity that accepts annotations.
   In contrast, the URI in a PUT request identifies the entity enclosed
   with the request -- the user agent knows what URI is intended and the
   server MUST NOT attempt to apply the request to some other resource.
   If the server desires that the request be applied to a different URI,




Fielding, et al.            Standards Track                    [Page 55](#btoc){id=b055}

RFC 2616                        HTTP/1.1                       June 1999


   it MUST send a 301 (Moved Permanently) response; the user agent MAY
   then make its own decision regarding whether or not to redirect the
   request.

   A single resource MAY be identified by many different URIs. For
   example, an article might have a URI for identifying "the current
   version" which is separate from the URI identifying each particular
   version. In this case, a PUT request on a general URI might result in
   several other URIs being defined by the origin server.

   HTTP/1.1 does not define how a PUT method affects the state of an
   origin server.

   PUT requests MUST obey the message transmission requirements set out
   in section 8.2.

   Unless otherwise specified for a particular entity-header, the
   entity-headers in the PUT request SHOULD be applied to the resource
   created or modified by the PUT.

9.7 DELETE
--------------------------------------------------------


   The DELETE method requests that the origin server delete the resource
   identified by the Request-URI. This method MAY be overridden by human
   intervention (or other means) on the origin server. The client cannot
   be guaranteed that the operation has been carried out, even if the
   status code returned from the origin server indicates that the action
   has been completed successfully. However, the server SHOULD NOT
   indicate success unless, at the time the response is given, it
   intends to delete the resource or move it to an inaccessible
   location.

   A successful response SHOULD be 200 (OK) if the response includes an
   entity describing the status, 202 (Accepted) if the action has not
   yet been enacted, or 204 (No Content) if the action has been enacted
   but the response does not include an entity.

   If the request passes through a cache and the Request-URI identifies
   one or more currently cached entities, those entries SHOULD be
   treated as stale. Responses to this method are not cacheable.

9.8 TRACE
--------------------------------------------------------


   The TRACE method is used to invoke a remote, application-layer loop-
   back of the request message. The final recipient of the request
   SHOULD reflect the message received back to the client as the
   entity-body of a 200 (OK) response. The final recipient is either the




Fielding, et al.            Standards Track                    [Page 56](#btoc){id=b056}

RFC 2616                        HTTP/1.1                       June 1999


   origin server or the first proxy or gateway to receive a Max-Forwards
   value of zero (0) in the request (see section 14.31). A TRACE request
   MUST NOT include an entity.

   TRACE allows the client to see what is being received at the other
   end of the request chain and use that data for testing or diagnostic
   information. The value of the Via header field (section 14.45) is of
   particular interest, since it acts as a trace of the request chain.
   Use of the Max-Forwards header field allows the client to limit the
   length of the request chain, which is useful for testing a chain of
   proxies forwarding messages in an infinite loop.

   If the request is valid, the response SHOULD contain the entire
   request message in the entity-body, with a Content-Type of
   "message/http". Responses to this method MUST NOT be cached.

9.9 CONNECT
--------------------------------------------------------


   This specification reserves the method name CONNECT for use with a
   proxy that can dynamically switch to being a tunnel (e.g. SSL
   tunneling [44]).

/10 Status Code Definitions
========================================================



   Each Status-Code is described below, including a description of which
   method(s) it can follow and any metainformation required in the
   response.

10.1 Informational 1xx
--------------------------------------------------------


   This class of status code indicates a provisional response,
   consisting only of the Status-Line and optional headers, and is
   terminated by an empty line. There are no required headers for this
   class of status code. Since HTTP/1.0 did not define any 1xx status
   codes, servers MUST NOT send a 1xx response to an HTTP/1.0 client
   except under experimental conditions.

   A client MUST be prepared to accept one or more 1xx status responses
   prior to a regular response, even if the client does not expect a 100
   (Continue) status message. Unexpected 1xx status responses MAY be
   ignored by a user agent.

   Proxies MUST forward 1xx responses, unless the connection between the
   proxy and its client has been closed, or unless the proxy itself
   requested the generation of the 1xx response. (For example, if a






Fielding, et al.            Standards Track                    [Page 57](#btoc){id=b057}

RFC 2616                        HTTP/1.1                       June 1999


   proxy adds a "Expect: 100-continue" field when it forwards a request,
   then it need not forward the corresponding 100 (Continue)
   response(s).)

10.1.1 100 Continue
--------------------------------------------------------


   The client SHOULD continue with its request. This interim response is
   used to inform the client that the initial part of the request has
   been received and has not yet been rejected by the server. The client
   SHOULD continue by sending the remainder of the request or, if the
   request has already been completed, ignore this response. The server
   MUST send a final response after the request has been completed. See
   section 8.2.3 for detailed discussion of the use and handling of this
   status code.

10.1.2 101 Switching Protocols
--------------------------------------------------------


   The server understands and is willing to comply with the client's
   request, via the Upgrade message header field (section 14.42), for a
   change in the application protocol being used on this connection. The
   server will switch protocols to those defined by the response's
   Upgrade header field immediately after the empty line which
   terminates the 101 response.

   The protocol SHOULD be switched only when it is advantageous to do
   so. For example, switching to a newer version of HTTP is advantageous
   over older versions, and switching to a real-time, synchronous
   protocol might be advantageous when delivering resources that use
   such features.

10.2 Successful 2xx
--------------------------------------------------------


   This class of status code indicates that the client's request was
   successfully received, understood, and accepted.

10.2.1 200 OK
--------------------------------------------------------


   The request has succeeded. The information returned with the response
   is dependent on the method used in the request, for example:

   GET    an entity corresponding to the requested resource is sent in
          the response;

   HEAD   the entity-header fields corresponding to the requested
          resource are sent in the response without any message-body;

   POST   an entity describing or containing the result of the action;




Fielding, et al.            Standards Track                    [Page 58](#btoc){id=b058}

RFC 2616                        HTTP/1.1                       June 1999


   TRACE  an entity containing the request message as received by the
          end server.

10.2.2 201 Created
--------------------------------------------------------


   The request has been fulfilled and resulted in a new resource being
   created. The newly created resource can be referenced by the URI(s)
   returned in the entity of the response, with the most specific URI
   for the resource given by a Location header field. The response
   SHOULD include an entity containing a list of resource
   characteristics and location(s) from which the user or user agent can
   choose the one most appropriate. The entity format is specified by
   the media type given in the Content-Type header field. The origin
   server MUST create the resource before returning the 201 status code.
   If the action cannot be carried out immediately, the server SHOULD
   respond with 202 (Accepted) response instead.

   A 201 response MAY contain an ETag response header field indicating
   the current value of the entity tag for the requested variant just
   created, see section 14.19.

10.2.3 202 Accepted
--------------------------------------------------------


   The request has been accepted for processing, but the processing has
   not been completed.  The request might or might not eventually be
   acted upon, as it might be disallowed when processing actually takes
   place. There is no facility for re-sending a status code from an
   asynchronous operation such as this.

   The 202 response is intentionally non-committal. Its purpose is to
   allow a server to accept a request for some other process (perhaps a
   batch-oriented process that is only run once per day) without
   requiring that the user agent's connection to the server persist
   until the process is completed. The entity returned with this
   response SHOULD include an indication of the request's current status
   and either a pointer to a status monitor or some estimate of when the
   user can expect the request to be fulfilled.

10.2.4 203 Non-Authoritative Information
--------------------------------------------------------


   The returned metainformation in the entity-header is not the
   definitive set as available from the origin server, but is gathered
   from a local or a third-party copy. The set presented MAY be a subset
   or superset of the original version. For example, including local
   annotation information about the resource might result in a superset
   of the metainformation known by the origin server. Use of this
   response code is not required and is only appropriate when the
   response would otherwise be 200 (OK).



Fielding, et al.            Standards Track                    [Page 59](#btoc){id=b059}

RFC 2616                        HTTP/1.1                       June 1999


10.2.5 204 No Content
--------------------------------------------------------


   The server has fulfilled the request but does not need to return an
   entity-body, and might want to return updated metainformation. The
   response MAY include new or updated metainformation in the form of
   entity-headers, which if present SHOULD be associated with the
   requested variant.

   If the client is a user agent, it SHOULD NOT change its document view
   from that which caused the request to be sent. This response is
   primarily intended to allow input for actions to take place without
   causing a change to the user agent's active document view, although
   any new or updated metainformation SHOULD be applied to the document
   currently in the user agent's active view.

   The 204 response MUST NOT include a message-body, and thus is always
   terminated by the first empty line after the header fields.

10.2.6 205 Reset Content
--------------------------------------------------------


   The server has fulfilled the request and the user agent SHOULD reset
   the document view which caused the request to be sent. This response
   is primarily intended to allow input for actions to take place via
   user input, followed by a clearing of the form in which the input is
   given so that the user can easily initiate another input action. The
   response MUST NOT include an entity.

10.2.7 206 Partial Content
--------------------------------------------------------


   The server has fulfilled the partial GET request for the resource.
   The request MUST have included a Range header field (section 14.35)
   indicating the desired range, and MAY have included an If-Range
   header field (section 14.27) to make the request conditional.

   The response MUST include the following header fields:

      - Either a Content-Range header field (section 14.16) indicating
        the range included with this response, or a multipart/byteranges
        Content-Type including Content-Range fields for each part. If a
        Content-Length header field is present in the response, its
        value MUST match the actual number of OCTETs transmitted in the
        message-body.

      - Date

      - ETag and/or Content-Location, if the header would have been sent
        in a 200 response to the same request




Fielding, et al.            Standards Track                    [Page 60](#btoc){id=b060}

RFC 2616                        HTTP/1.1                       June 1999


      - Expires, Cache-Control, and/or Vary, if the field-value might
        differ from that sent in any previous response for the same
        variant

   If the 206 response is the result of an If-Range request that used a
   strong cache validator (see section 13.3.3), the response SHOULD NOT
   include other entity-headers. If the response is the result of an
   If-Range request that used a weak validator, the response MUST NOT
   include other entity-headers; this prevents inconsistencies between
   cached entity-bodies and updated headers. Otherwise, the response
   MUST include all of the entity-headers that would have been returned
   with a 200 (OK) response to the same request.

   A cache MUST NOT combine a 206 response with other previously cached
   content if the ETag or Last-Modified headers do not match exactly,
   see 13.5.4.

   A cache that does not support the Range and Content-Range headers
   MUST NOT cache 206 (Partial) responses.

10.3 Redirection 3xx
--------------------------------------------------------


   This class of status code indicates that further action needs to be
   taken by the user agent in order to fulfill the request.  The action
   required MAY be carried out by the user agent without interaction
   with the user if and only if the method used in the second request is
   GET or HEAD. A client SHOULD detect infinite redirection loops, since
   such loops generate network traffic for each redirection.

      Note: previous versions of this specification recommended a
      maximum of five redirections. Content developers should be aware
      that there might be clients that implement such a fixed
      limitation.

10.3.1 300 Multiple Choices
--------------------------------------------------------


   The requested resource corresponds to any one of a set of
   representations, each with its own specific location, and agent-
   driven negotiation information (section 12) is being provided so that
   the user (or user agent) can select a preferred representation and
   redirect its request to that location.

   Unless it was a HEAD request, the response SHOULD include an entity
   containing a list of resource characteristics and location(s) from
   which the user or user agent can choose the one most appropriate. The
   entity format is specified by the media type given in the Content-
   Type header field. Depending upon the format and the capabilities of




Fielding, et al.            Standards Track                    [Page 61](#btoc){id=b061}

RFC 2616                        HTTP/1.1                       June 1999


   the user agent, selection of the most appropriate choice MAY be
   performed automatically. However, this specification does not define
   any standard for such automatic selection.

   If the server has a preferred choice of representation, it SHOULD
   include the specific URI for that representation in the Location
   field; user agents MAY use the Location field value for automatic
   redirection. This response is cacheable unless indicated otherwise.

10.3.2 301 Moved Permanently
--------------------------------------------------------


   The requested resource has been assigned a new permanent URI and any
   future references to this resource SHOULD use one of the returned
   URIs.  Clients with link editing capabilities ought to automatically
   re-link references to the Request-URI to one or more of the new
   references returned by the server, where possible. This response is
   cacheable unless indicated otherwise.

   The new permanent URI SHOULD be given by the Location field in the
   response. Unless the request method was HEAD, the entity of the
   response SHOULD contain a short hypertext note with a hyperlink to
   the new URI(s).

   If the 301 status code is received in response to a request other
   than GET or HEAD, the user agent MUST NOT automatically redirect the
   request unless it can be confirmed by the user, since this might
   change the conditions under which the request was issued.

      Note: When automatically redirecting a POST request after
      receiving a 301 status code, some existing HTTP/1.0 user agents
      will erroneously change it into a GET request.

10.3.3 302 Found
--------------------------------------------------------


   The requested resource resides temporarily under a different URI.
   Since the redirection might be altered on occasion, the client SHOULD
   continue to use the Request-URI for future requests.  This response
   is only cacheable if indicated by a Cache-Control or Expires header
   field.

   The temporary URI SHOULD be given by the Location field in the
   response. Unless the request method was HEAD, the entity of the
   response SHOULD contain a short hypertext note with a hyperlink to
   the new URI(s).







Fielding, et al.            Standards Track                    [Page 62](#btoc){id=b062}

RFC 2616                        HTTP/1.1                       June 1999


   If the 302 status code is received in response to a request other
   than GET or HEAD, the user agent MUST NOT automatically redirect the
   request unless it can be confirmed by the user, since this might
   change the conditions under which the request was issued.

      Note: RFC 1945 and RFC 2068 specify that the client is not allowed
      to change the method on the redirected request.  However, most
      existing user agent implementations treat 302 as if it were a 303
      response, performing a GET on the Location field-value regardless
      of the original request method. The status codes 303 and 307 have
      been added for servers that wish to make unambiguously clear which
      kind of reaction is expected of the client.

10.3.4 303 See Other
--------------------------------------------------------


   The response to the request can be found under a different URI and
   SHOULD be retrieved using a GET method on that resource. This method
   exists primarily to allow the output of a POST-activated script to
   redirect the user agent to a selected resource. The new URI is not a
   substitute reference for the originally requested resource. The 303
   response MUST NOT be cached, but the response to the second
   (redirected) request might be cacheable.

   The different URI SHOULD be given by the Location field in the
   response. Unless the request method was HEAD, the entity of the
   response SHOULD contain a short hypertext note with a hyperlink to
   the new URI(s).

      Note: Many pre-HTTP/1.1 user agents do not understand the 303
      status. When interoperability with such clients is a concern, the
      302 status code may be used instead, since most user agents react
      to a 302 response as described here for 303.

10.3.5 304 Not Modified
--------------------------------------------------------


   If the client has performed a conditional GET request and access is
   allowed, but the document has not been modified, the server SHOULD
   respond with this status code. The 304 response MUST NOT contain a
   message-body, and thus is always terminated by the first empty line
   after the header fields.

   The response MUST include the following header fields:

      - Date, unless its omission is required by section 14.18.1







Fielding, et al.            Standards Track                    [Page 63](#btoc){id=b063}

RFC 2616                        HTTP/1.1                       June 1999


   If a clockless origin server obeys these rules, and proxies and
   clients add their own Date to any response received without one (as
   already specified by [RFC 2068], section 14.19), caches will operate
   correctly.

      - ETag and/or Content-Location, if the header would have been sent
        in a 200 response to the same request

      - Expires, Cache-Control, and/or Vary, if the field-value might
        differ from that sent in any previous response for the same
        variant

   If the conditional GET used a strong cache validator (see section
   13.3.3), the response SHOULD NOT include other entity-headers.
   Otherwise (i.e., the conditional GET used a weak validator), the
   response MUST NOT include other entity-headers; this prevents
   inconsistencies between cached entity-bodies and updated headers.

   If a 304 response indicates an entity not currently cached, then the
   cache MUST disregard the response and repeat the request without the
   conditional.

   If a cache uses a received 304 response to update a cache entry, the
   cache MUST update the entry to reflect any new field values given in
   the response.

10.3.6 305 Use Proxy
--------------------------------------------------------


   The requested resource MUST be accessed through the proxy given by
   the Location field. The Location field gives the URI of the proxy.
   The recipient is expected to repeat this single request via the
   proxy. 305 responses MUST only be generated by origin servers.

      Note: RFC 2068 was not clear that 305 was intended to redirect a
      single request, and to be generated by origin servers only.  Not
      observing these limitations has significant security consequences.

10.3.7 306 (Unused)
--------------------------------------------------------


   The 306 status code was used in a previous version of the
   specification, is no longer used, and the code is reserved.










Fielding, et al.            Standards Track                    [Page 64](#btoc){id=b064}

RFC 2616                        HTTP/1.1                       June 1999


10.3.8 307 Temporary Redirect
--------------------------------------------------------


   The requested resource resides temporarily under a different URI.
   Since the redirection MAY be altered on occasion, the client SHOULD
   continue to use the Request-URI for future requests.  This response
   is only cacheable if indicated by a Cache-Control or Expires header
   field.

   The temporary URI SHOULD be given by the Location field in the
   response. Unless the request method was HEAD, the entity of the
   response SHOULD contain a short hypertext note with a hyperlink to
   the new URI(s) , since many pre-HTTP/1.1 user agents do not
   understand the 307 status. Therefore, the note SHOULD contain the
   information necessary for a user to repeat the original request on
   the new URI.

   If the 307 status code is received in response to a request other
   than GET or HEAD, the user agent MUST NOT automatically redirect the
   request unless it can be confirmed by the user, since this might
   change the conditions under which the request was issued.

10.4 Client Error 4xx
--------------------------------------------------------


   The 4xx class of status code is intended for cases in which the
   client seems to have erred. Except when responding to a HEAD request,
   the server SHOULD include an entity containing an explanation of the
   error situation, and whether it is a temporary or permanent
   condition. These status codes are applicable to any request method.
   User agents SHOULD display any included entity to the user.

   If the client is sending data, a server implementation using TCP
   SHOULD be careful to ensure that the client acknowledges receipt of
   the packet(s) containing the response, before the server closes the
   input connection. If the client continues sending data to the server
   after the close, the server's TCP stack will send a reset packet to
   the client, which may erase the client's unacknowledged input buffers
   before they can be read and interpreted by the HTTP application.

10.4.1 400 Bad Request
--------------------------------------------------------


   The request could not be understood by the server due to malformed
   syntax. The client SHOULD NOT repeat the request without
   modifications.








Fielding, et al.            Standards Track                    [Page 65](#btoc){id=b065}

RFC 2616                        HTTP/1.1                       June 1999


10.4.2 401 Unauthorized
--------------------------------------------------------


   The request requires user authentication. The response MUST include a
   WWW-Authenticate header field (section 14.47) containing a challenge
   applicable to the requested resource. The client MAY repeat the
   request with a suitable Authorization header field (section 14.8). If
   the request already included Authorization credentials, then the 401
   response indicates that authorization has been refused for those
   credentials. If the 401 response contains the same challenge as the
   prior response, and the user agent has already attempted
   authentication at least once, then the user SHOULD be presented the
   entity that was given in the response, since that entity might
   include relevant diagnostic information. HTTP access authentication
   is explained in "HTTP Authentication: Basic and Digest Access
   Authentication" [43].

10.4.3 402 Payment Required
--------------------------------------------------------


   This code is reserved for future use.

10.4.4 403 Forbidden
--------------------------------------------------------


   The server understood the request, but is refusing to fulfill it.
   Authorization will not help and the request SHOULD NOT be repeated.
   If the request method was not HEAD and the server wishes to make
   public why the request has not been fulfilled, it SHOULD describe the
   reason for the refusal in the entity.  If the server does not wish to
   make this information available to the client, the status code 404
   (Not Found) can be used instead.

10.4.5 404 Not Found
--------------------------------------------------------


   The server has not found anything matching the Request-URI. No
   indication is given of whether the condition is temporary or
   permanent. The 410 (Gone) status code SHOULD be used if the server
   knows, through some internally configurable mechanism, that an old
   resource is permanently unavailable and has no forwarding address.
   This status code is commonly used when the server does not wish to
   reveal exactly why the request has been refused, or when no other
   response is applicable.

10.4.6 405 Method Not Allowed
--------------------------------------------------------


   The method specified in the Request-Line is not allowed for the
   resource identified by the Request-URI. The response MUST include an
   Allow header containing a list of valid methods for the requested
   resource.




Fielding, et al.            Standards Track                    [Page 66](#btoc){id=b066}

RFC 2616                        HTTP/1.1                       June 1999


10.4.7 406 Not Acceptable
--------------------------------------------------------


   The resource identified by the request is only capable of generating
   response entities which have content characteristics not acceptable
   according to the accept headers sent in the request.

   Unless it was a HEAD request, the response SHOULD include an entity
   containing a list of available entity characteristics and location(s)
   from which the user or user agent can choose the one most
   appropriate. The entity format is specified by the media type given
   in the Content-Type header field. Depending upon the format and the
   capabilities of the user agent, selection of the most appropriate
   choice MAY be performed automatically. However, this specification
   does not define any standard for such automatic selection.

      Note: HTTP/1.1 servers are allowed to return responses which are
      not acceptable according to the accept headers sent in the
      request. In some cases, this may even be preferable to sending a
      406 response. User agents are encouraged to inspect the headers of
      an incoming response to determine if it is acceptable.

   If the response could be unacceptable, a user agent SHOULD
   temporarily stop receipt of more data and query the user for a
   decision on further actions.

10.4.8 407 Proxy Authentication Required
--------------------------------------------------------


   This code is similar to 401 (Unauthorized), but indicates that the
   client must first authenticate itself with the proxy. The proxy MUST
   return a Proxy-Authenticate header field (section 14.33) containing a
   challenge applicable to the proxy for the requested resource. The
   client MAY repeat the request with a suitable Proxy-Authorization
   header field (section 14.34). HTTP access authentication is explained
   in "HTTP Authentication: Basic and Digest Access Authentication"
   [43].

10.4.9 408 Request Timeout
--------------------------------------------------------


   The client did not produce a request within the time that the server
   was prepared to wait. The client MAY repeat the request without
   modifications at any later time.

10.4.10 409 Conflict
--------------------------------------------------------


   The request could not be completed due to a conflict with the current
   state of the resource. This code is only allowed in situations where
   it is expected that the user might be able to resolve the conflict
   and resubmit the request. The response body SHOULD include enough



Fielding, et al.            Standards Track                    [Page 67](#btoc){id=b067}

RFC 2616                        HTTP/1.1                       June 1999


   information for the user to recognize the source of the conflict.
   Ideally, the response entity would include enough information for the
   user or user agent to fix the problem; however, that might not be
   possible and is not required.

   Conflicts are most likely to occur in response to a PUT request. For
   example, if versioning were being used and the entity being PUT
   included changes to a resource which conflict with those made by an
   earlier (third-party) request, the server might use the 409 response
   to indicate that it can't complete the request. In this case, the
   response entity would likely contain a list of the differences
   between the two versions in a format defined by the response
   Content-Type.

10.4.11 410 Gone
--------------------------------------------------------


   The requested resource is no longer available at the server and no
   forwarding address is known. This condition is expected to be
   considered permanent. Clients with link editing capabilities SHOULD
   delete references to the Request-URI after user approval. If the
   server does not know, or has no facility to determine, whether or not
   the condition is permanent, the status code 404 (Not Found) SHOULD be
   used instead. This response is cacheable unless indicated otherwise.

   The 410 response is primarily intended to assist the task of web
   maintenance by notifying the recipient that the resource is
   intentionally unavailable and that the server owners desire that
   remote links to that resource be removed. Such an event is common for
   limited-time, promotional services and for resources belonging to
   individuals no longer working at the server's site. It is not
   necessary to mark all permanently unavailable resources as "gone" or
   to keep the mark for any length of time -- that is left to the
   discretion of the server owner.

10.4.12 411 Length Required
--------------------------------------------------------


   The server refuses to accept the request without a defined Content-
   Length. The client MAY repeat the request if it adds a valid
   Content-Length header field containing the length of the message-body
   in the request message.

10.4.13 412 Precondition Failed
--------------------------------------------------------


   The precondition given in one or more of the request-header fields
   evaluated to false when it was tested on the server. This response
   code allows the client to place preconditions on the current resource
   metainformation (header field data) and thus prevent the requested
   method from being applied to a resource other than the one intended.



Fielding, et al.            Standards Track                    [Page 68](#btoc){id=b068}

RFC 2616                        HTTP/1.1                       June 1999


10.4.14 413 Request Entity Too Large
--------------------------------------------------------


   The server is refusing to process a request because the request
   entity is larger than the server is willing or able to process. The
   server MAY close the connection to prevent the client from continuing
   the request.

   If the condition is temporary, the server SHOULD include a Retry-
   After header field to indicate that it is temporary and after what
   time the client MAY try again.

10.4.15 414 Request-URI Too Long
--------------------------------------------------------


   The server is refusing to service the request because the Request-URI
   is longer than the server is willing to interpret. This rare
   condition is only likely to occur when a client has improperly
   converted a POST request to a GET request with long query
   information, when the client has descended into a URI "black hole" of
   redirection (e.g., a redirected URI prefix that points to a suffix of
   itself), or when the server is under attack by a client attempting to
   exploit security holes present in some servers using fixed-length
   buffers for reading or manipulating the Request-URI.

10.4.16 415 Unsupported Media Type
--------------------------------------------------------


   The server is refusing to service the request because the entity of
   the request is in a format not supported by the requested resource
   for the requested method.

10.4.17 416 Requested Range Not Satisfiable
--------------------------------------------------------


   A server SHOULD return a response with this status code if a request
   included a Range request-header field (section 14.35), and none of
   the range-specifier values in this field overlap the current extent
   of the selected resource, and the request did not include an If-Range
   request-header field. (For byte-ranges, this means that the first-
   byte-pos of all of the byte-range-spec values were greater than the
   current length of the selected resource.)

   When this status code is returned for a byte-range request, the
   response SHOULD include a Content-Range entity-header field
   specifying the current length of the selected resource (see section
   14.16). This response MUST NOT use the multipart/byteranges content-
   type.







Fielding, et al.            Standards Track                    [Page 69](#btoc){id=b069}

RFC 2616                        HTTP/1.1                       June 1999


10.4.18 417 Expectation Failed
--------------------------------------------------------


   The expectation given in an Expect request-header field (see section
   14.20) could not be met by this server, or, if the server is a proxy,
   the server has unambiguous evidence that the request could not be met
   by the next-hop server.

10.5 Server Error 5xx
--------------------------------------------------------


   Response status codes beginning with the digit "5" indicate cases in
   which the server is aware that it has erred or is incapable of
   performing the request. Except when responding to a HEAD request, the
   server SHOULD include an entity containing an explanation of the
   error situation, and whether it is a temporary or permanent
   condition. User agents SHOULD display any included entity to the
   user. These response codes are applicable to any request method.

10.5.1 500 Internal Server Error
--------------------------------------------------------


   The server encountered an unexpected condition which prevented it
   from fulfilling the request.

10.5.2 501 Not Implemented
--------------------------------------------------------


   The server does not support the functionality required to fulfill the
   request. This is the appropriate response when the server does not
   recognize the request method and is not capable of supporting it for
   any resource.

10.5.3 502 Bad Gateway
--------------------------------------------------------


   The server, while acting as a gateway or proxy, received an invalid
   response from the upstream server it accessed in attempting to
   fulfill the request.

10.5.4 503 Service Unavailable
--------------------------------------------------------


   The server is currently unable to handle the request due to a
   temporary overloading or maintenance of the server. The implication
   is that this is a temporary condition which will be alleviated after
   some delay. If known, the length of the delay MAY be indicated in a
   Retry-After header. If no Retry-After is given, the client SHOULD
   handle the response as it would for a 500 response.

      Note: The existence of the 503 status code does not imply that a
      server must use it when becoming overloaded. Some servers may wish
      to simply refuse the connection.




Fielding, et al.            Standards Track                    [Page 70](#btoc){id=b070}

RFC 2616                        HTTP/1.1                       June 1999


10.5.5 504 Gateway Timeout
--------------------------------------------------------


   The server, while acting as a gateway or proxy, did not receive a
   timely response from the upstream server specified by the URI (e.g.
   HTTP, FTP, LDAP) or some other auxiliary server (e.g. DNS) it needed
   to access in attempting to complete the request.

      Note: Note to implementors: some deployed proxies are known to
      return 400 or 500 when DNS lookups time out.

10.5.6 505 HTTP Version Not Supported
--------------------------------------------------------


   The server does not support, or refuses to support, the HTTP protocol
   version that was used in the request message. The server is
   indicating that it is unable or unwilling to complete the request
   using the same major version as the client, as described in section
   3.1, other than with this error message. The response SHOULD contain
   an entity describing why that version is not supported and what other
   protocols are supported by that server.

/11 Access Authentication
========================================================



   HTTP provides several OPTIONAL challenge-response authentication
   mechanisms which can be used by a server to challenge a client
   request and by a client to provide authentication information. The
   general framework for access authentication, and the specification of
   "basic" and "digest" authentication, are specified in "HTTP
   Authentication: Basic and Digest Access Authentication" [43]. This
   specification adopts the definitions of "challenge" and "credentials"
   from that specification.

/12 Content Negotiation
========================================================



   Most HTTP responses include an entity which contains information for
   interpretation by a human user. Naturally, it is desirable to supply
   the user with the "best available" entity corresponding to the
   request. Unfortunately for servers and caches, not all users have the
   same preferences for what is "best," and not all user agents are
   equally capable of rendering all entity types. For that reason, HTTP
   has provisions for several mechanisms for "content negotiation" --
   the process of selecting the best representation for a given response
   when there are multiple representations available.

      Note: This is not called "format negotiation" because the
      alternate representations may be of the same media type, but use
      different capabilities of that type, be in different languages,
      etc.




Fielding, et al.            Standards Track                    [Page 71](#btoc){id=b071}

RFC 2616                        HTTP/1.1                       June 1999


   Any response containing an entity-body MAY be subject to negotiation,
   including error responses.

   There are two kinds of content negotiation which are possible in
   HTTP: server-driven and agent-driven negotiation. These two kinds of
   negotiation are orthogonal and thus may be used separately or in
   combination. One method of combination, referred to as transparent
   negotiation, occurs when a cache uses the agent-driven negotiation
   information provided by the origin server in order to provide
   server-driven negotiation for subsequent requests.

12.1 Server-driven Negotiation
--------------------------------------------------------


   If the selection of the best representation for a response is made by
   an algorithm located at the server, it is called server-driven
   negotiation. Selection is based on the available representations of
   the response (the dimensions over which it can vary; e.g. language,
   content-coding, etc.) and the contents of particular header fields in
   the request message or on other information pertaining to the request
   (such as the network address of the client).

   Server-driven negotiation is advantageous when the algorithm for
   selecting from among the available representations is difficult to
   describe to the user agent, or when the server desires to send its
   "best guess" to the client along with the first response (hoping to
   avoid the round-trip delay of a subsequent request if the "best
   guess" is good enough for the user). In order to improve the server's
   guess, the user agent MAY include request header fields (Accept,
   Accept-Language, Accept-Encoding, etc.) which describe its
   preferences for such a response.

   Server-driven negotiation has disadvantages:

      1. It is impossible for the server to accurately determine what
         might be "best" for any given user, since that would require
         complete knowledge of both the capabilities of the user agent
         and the intended use for the response (e.g., does the user want
         to view it on screen or print it on paper?).

      2. Having the user agent describe its capabilities in every
         request can be both very inefficient (given that only a small
         percentage of responses have multiple representations) and a
         potential violation of the user's privacy.

      3. It complicates the implementation of an origin server and the
         algorithms for generating responses to a request.





Fielding, et al.            Standards Track                    [Page 72](#btoc){id=b072}

RFC 2616                        HTTP/1.1                       June 1999


      4. It may limit a public cache's ability to use the same response
         for multiple user's requests.

   HTTP/1.1 includes the following request-header fields for enabling
   server-driven negotiation through description of user agent
   capabilities and user preferences: Accept (section 14.1), Accept-
   Charset (section 14.2), Accept-Encoding (section 14.3), Accept-
   Language (section 14.4), and User-Agent (section 14.43). However, an
   origin server is not limited to these dimensions and MAY vary the
   response based on any aspect of the request, including information
   outside the request-header fields or within extension header fields
   not defined by this specification.

   The Vary  header field can be used to express the parameters the
   server uses to select a representation that is subject to server-
   driven negotiation. See section 13.6 for use of the Vary header field
   by caches and section 14.44 for use of the Vary header field by
   servers.

12.2 Agent-driven Negotiation
--------------------------------------------------------


   With agent-driven negotiation, selection of the best representation
   for a response is performed by the user agent after receiving an
   initial response from the origin server. Selection is based on a list
   of the available representations of the response included within the
   header fields or entity-body of the initial response, with each
   representation identified by its own URI. Selection from among the
   representations may be performed automatically (if the user agent is
   capable of doing so) or manually by the user selecting from a
   generated (possibly hypertext) menu.

   Agent-driven negotiation is advantageous when the response would vary
   over commonly-used dimensions (such as type, language, or encoding),
   when the origin server is unable to determine a user agent's
   capabilities from examining the request, and generally when public
   caches are used to distribute server load and reduce network usage.

   Agent-driven negotiation suffers from the disadvantage of needing a
   second request to obtain the best alternate representation. This
   second request is only efficient when caching is used. In addition,
   this specification does not define any mechanism for supporting
   automatic selection, though it also does not prevent any such
   mechanism from being developed as an extension and used within
   HTTP/1.1.







Fielding, et al.            Standards Track                    [Page 73](#btoc){id=b073}

RFC 2616                        HTTP/1.1                       June 1999


   HTTP/1.1 defines the 300 (Multiple Choices) and 406 (Not Acceptable)
   status codes for enabling agent-driven negotiation when the server is
   unwilling or unable to provide a varying response using server-driven
   negotiation.

12.3 Transparent Negotiation
--------------------------------------------------------


   Transparent negotiation is a combination of both server-driven and
   agent-driven negotiation. When a cache is supplied with a form of the
   list of available representations of the response (as in agent-driven
   negotiation) and the dimensions of variance are completely understood
   by the cache, then the cache becomes capable of performing server-
   driven negotiation on behalf of the origin server for subsequent
   requests on that resource.

   Transparent negotiation has the advantage of distributing the
   negotiation work that would otherwise be required of the origin
   server and also removing the second request delay of agent-driven
   negotiation when the cache is able to correctly guess the right
   response.

   This specification does not define any mechanism for transparent
   negotiation, though it also does not prevent any such mechanism from
   being developed as an extension that could be used within HTTP/1.1.

/13 Caching in HTTP
========================================================



   HTTP is typically used for distributed information systems, where
   performance can be improved by the use of response caches. The
   HTTP/1.1 protocol includes a number of elements intended to make
   caching work as well as possible. Because these elements are
   inextricable from other aspects of the protocol, and because they
   interact with each other, it is useful to describe the basic caching
   design of HTTP separately from the detailed descriptions of methods,
   headers, response codes, etc.

   Caching would be useless if it did not significantly improve
   performance. The goal of caching in HTTP/1.1 is to eliminate the need
   to send requests in many cases, and to eliminate the need to send
   full responses in many other cases. The former reduces the number of
   network round-trips required for many operations; we use an
   "expiration" mechanism for this purpose (see section 13.2). The
   latter reduces network bandwidth requirements; we use a "validation"
   mechanism for this purpose (see section 13.3).

   Requirements for performance, availability, and disconnected
   operation require us to be able to relax the goal of semantic
   transparency. The HTTP/1.1 protocol allows origin servers, caches,



Fielding, et al.            Standards Track                    [Page 74](#btoc){id=b074}

RFC 2616                        HTTP/1.1                       June 1999


   and clients to explicitly reduce transparency when necessary.
   However, because non-transparent operation may confuse non-expert
   users, and might be incompatible with certain server applications
   (such as those for ordering merchandise), the protocol requires that
   transparency be relaxed

      - only by an explicit protocol-level request when relaxed by
        client or origin server

      - only with an explicit warning to the end user when relaxed by
        cache or client

   Therefore, the HTTP/1.1 protocol provides these important elements:

      1. Protocol features that provide full semantic transparency when
         this is required by all parties.

      2. Protocol features that allow an origin server or user agent to
         explicitly request and control non-transparent operation.

      3. Protocol features that allow a cache to attach warnings to
         responses that do not preserve the requested approximation of
         semantic transparency.

   A basic principle is that it must be possible for the clients to
   detect any potential relaxation of semantic transparency.

      Note: The server, cache, or client implementor might be faced with
      design decisions not explicitly discussed in this specification.
      If a decision might affect semantic transparency, the implementor
      ought to err on the side of maintaining transparency unless a
      careful and complete analysis shows significant benefits in
      breaking transparency.

13.1.1 Cache Correctness
--------------------------------------------------------


   A correct cache MUST respond to a request with the most up-to-date
   response held by the cache that is appropriate to the request (see
   sections 13.2.5, 13.2.6, and 13.12) which meets one of the following
   conditions:

      1. It has been checked for equivalence with what the origin server
         would have returned by revalidating the response with the
         origin server (section 13.3);







Fielding, et al.            Standards Track                    [Page 75](#btoc){id=b075}

RFC 2616                        HTTP/1.1                       June 1999


      2. It is "fresh enough" (see section 13.2). In the default case,
         this means it meets the least restrictive freshness requirement
         of the client, origin server, and cache (see section 14.9); if
         the origin server so specifies, it is the freshness requirement
         of the origin server alone.

         If a stored response is not "fresh enough" by the most
         restrictive freshness requirement of both the client and the
         origin server, in carefully considered circumstances the cache
         MAY still return the response with the appropriate Warning
         header (see section 13.1.5 and 14.46), unless such a response
         is prohibited (e.g., by a "no-store" cache-directive, or by a
         "no-cache" cache-request-directive; see section 14.9).

      3. It is an appropriate 304 (Not Modified), 305 (Proxy Redirect),
         or error (4xx or 5xx) response message.

   If the cache can not communicate with the origin server, then a
   correct cache SHOULD respond as above if the response can be
   correctly served from the cache; if not it MUST return an error or
   warning indicating that there was a communication failure.

   If a cache receives a response (either an entire response, or a 304
   (Not Modified) response) that it would normally forward to the
   requesting client, and the received response is no longer fresh, the
   cache SHOULD forward it to the requesting client without adding a new
   Warning (but without removing any existing Warning headers). A cache
   SHOULD NOT attempt to revalidate a response simply because that
   response became stale in transit; this might lead to an infinite
   loop. A user agent that receives a stale response without a Warning
   MAY display a warning indication to the user.

13.1.2 Warnings
--------------------------------------------------------


   Whenever a cache returns a response that is neither first-hand nor
   "fresh enough" (in the sense of condition 2 in section 13.1.1), it
   MUST attach a warning to that effect, using a Warning general-header.
   The Warning header and the currently defined warnings are described
   in section 14.46. The warning allows clients to take appropriate
   action.

   Warnings MAY be used for other purposes, both cache-related and
   otherwise. The use of a warning, rather than an error status code,
   distinguish these responses from true failures.

   Warnings are assigned three digit warn-codes. The first digit
   indicates whether the Warning MUST or MUST NOT be deleted from a
   stored cache entry after a successful revalidation:



Fielding, et al.            Standards Track                    [Page 76](#btoc){id=b076}

RFC 2616                        HTTP/1.1                       June 1999


   1xx  Warnings that describe the freshness or revalidation status of
     the response, and so MUST be deleted after a successful
     revalidation. 1XX warn-codes MAY be generated by a cache only when
     validating a cached entry. It MUST NOT be generated by clients.

   2xx  Warnings that describe some aspect of the entity body or entity
     headers that is not rectified by a revalidation (for example, a
     lossy compression of the entity bodies) and which MUST NOT be
     deleted after a successful revalidation.

   See section 14.46 for the definitions of the codes themselves.

   HTTP/1.0 caches will cache all Warnings in responses, without
   deleting the ones in the first category. Warnings in responses that
   are passed to HTTP/1.0 caches carry an extra warning-date field,
   which prevents a future HTTP/1.1 recipient from believing an
   erroneously cached Warning.

   Warnings also carry a warning text. The text MAY be in any
   appropriate natural language (perhaps based on the client's Accept
   headers), and include an OPTIONAL indication of what character set is
   used.

   Multiple warnings MAY be attached to a response (either by the origin
   server or by a cache), including multiple warnings with the same code
   number. For example, a server might provide the same warning with
   texts in both English and Basque.

   When multiple warnings are attached to a response, it might not be
   practical or reasonable to display all of them to the user. This
   version of HTTP does not specify strict priority rules for deciding
   which warnings to display and in what order, but does suggest some
   heuristics.

13.1.3 Cache-control Mechanisms
--------------------------------------------------------


   The basic cache mechanisms in HTTP/1.1 (server-specified expiration
   times and validators) are implicit directives to caches. In some
   cases, a server or client might need to provide explicit directives
   to the HTTP caches. We use the Cache-Control header for this purpose.

   The Cache-Control header allows a client or server to transmit a
   variety of directives in either requests or responses. These
   directives typically override the default caching algorithms. As a
   general rule, if there is any apparent conflict between header
   values, the most restrictive interpretation is applied (that is, the
   one that is most likely to preserve semantic transparency). However,




Fielding, et al.            Standards Track                    [Page 77](#btoc){id=b077}

RFC 2616                        HTTP/1.1                       June 1999


   in some cases, cache-control directives are explicitly specified as
   weakening the approximation of semantic transparency (for example,
   "max-stale" or "public").

   The cache-control directives are described in detail in section 14.9.

13.1.4 Explicit User Agent Warnings
--------------------------------------------------------


   Many user agents make it possible for users to override the basic
   caching mechanisms. For example, the user agent might allow the user
   to specify that cached entities (even explicitly stale ones) are
   never validated. Or the user agent might habitually add "Cache-
   Control: max-stale=3600" to every request. The user agent SHOULD NOT
   default to either non-transparent behavior, or behavior that results
   in abnormally ineffective caching, but MAY be explicitly configured
   to do so by an explicit action of the user.

   If the user has overridden the basic caching mechanisms, the user
   agent SHOULD explicitly indicate to the user whenever this results in
   the display of information that might not meet the server's
   transparency requirements (in particular, if the displayed entity is
   known to be stale). Since the protocol normally allows the user agent
   to determine if responses are stale or not, this indication need only
   be displayed when this actually happens. The indication need not be a
   dialog box; it could be an icon (for example, a picture of a rotting
   fish) or some other indicator.

   If the user has overridden the caching mechanisms in a way that would
   abnormally reduce the effectiveness of caches, the user agent SHOULD
   continually indicate this state to the user (for example, by a
   display of a picture of currency in flames) so that the user does not
   inadvertently consume excess resources or suffer from excessive
   latency.

13.1.5 Exceptions to the Rules and Warnings
--------------------------------------------------------


   In some cases, the operator of a cache MAY choose to configure it to
   return stale responses even when not requested by clients. This
   decision ought not be made lightly, but may be necessary for reasons
   of availability or performance, especially when the cache is poorly
   connected to the origin server. Whenever a cache returns a stale
   response, it MUST mark it as such (using a Warning header) enabling
   the client software to alert the user that there might be a potential
   problem.







Fielding, et al.            Standards Track                    [Page 78](#btoc){id=b078}

RFC 2616                        HTTP/1.1                       June 1999


   It also allows the user agent to take steps to obtain a first-hand or
   fresh response. For this reason, a cache SHOULD NOT return a stale
   response if the client explicitly requests a first-hand or fresh one,
   unless it is impossible to comply for technical or policy reasons.

13.1.6 Client-controlled Behavior
--------------------------------------------------------


   While the origin server (and to a lesser extent, intermediate caches,
   by their contribution to the age of a response) are the primary
   source of expiration information, in some cases the client might need
   to control a cache's decision about whether to return a cached
   response without validating it. Clients do this using several
   directives of the Cache-Control header.

   A client's request MAY specify the maximum age it is willing to
   accept of an unvalidated response; specifying a value of zero forces
   the cache(s) to revalidate all responses. A client MAY also specify
   the minimum time remaining before a response expires. Both of these
   options increase constraints on the behavior of caches, and so cannot
   further relax the cache's approximation of semantic transparency.

   A client MAY also specify that it will accept stale responses, up to
   some maximum amount of staleness. This loosens the constraints on the
   caches, and so might violate the origin server's specified
   constraints on semantic transparency, but might be necessary to
   support disconnected operation, or high availability in the face of
   poor connectivity.

13.2 Expiration Model
--------------------------------------------------------


13.2.1 Server-Specified Expiration
--------------------------------------------------------


   HTTP caching works best when caches can entirely avoid making
   requests to the origin server. The primary mechanism for avoiding
   requests is for an origin server to provide an explicit expiration
   time in the future, indicating that a response MAY be used to satisfy
   subsequent requests. In other words, a cache can return a fresh
   response without first contacting the server.

   Our expectation is that servers will assign future explicit
   expiration times to responses in the belief that the entity is not
   likely to change, in a semantically significant way, before the
   expiration time is reached. This normally preserves semantic
   transparency, as long as the server's expiration times are carefully
   chosen.






Fielding, et al.            Standards Track                    [Page 79](#btoc){id=b079}

RFC 2616                        HTTP/1.1                       June 1999


   The expiration mechanism applies only to responses taken from a cache
   and not to first-hand responses forwarded immediately to the
   requesting client.

   If an origin server wishes to force a semantically transparent cache
   to validate every request, it MAY assign an explicit expiration time
   in the past. This means that the response is always stale, and so the
   cache SHOULD validate it before using it for subsequent requests. See
   section 14.9.4 for a more restrictive way to force revalidation.

   If an origin server wishes to force any HTTP/1.1 cache, no matter how
   it is configured, to validate every request, it SHOULD use the "must-
   revalidate" cache-control directive (see section 14.9).

   Servers specify explicit expiration times using either the Expires
   header, or the max-age directive of the Cache-Control header.

   An expiration time cannot be used to force a user agent to refresh
   its display or reload a resource; its semantics apply only to caching
   mechanisms, and such mechanisms need only check a resource's
   expiration status when a new request for that resource is initiated.
   See section 13.13 for an explanation of the difference between caches
   and history mechanisms.

13.2.2 Heuristic Expiration
--------------------------------------------------------


   Since origin servers do not always provide explicit expiration times,
   HTTP caches typically assign heuristic expiration times, employing
   algorithms that use other header values (such as the Last-Modified
   time) to estimate a plausible expiration time. The HTTP/1.1
   specification does not provide specific algorithms, but does impose
   worst-case constraints on their results. Since heuristic expiration
   times might compromise semantic transparency, they ought to used
   cautiously, and we encourage origin servers to provide explicit
   expiration times as much as possible.

13.2.3 Age Calculations
--------------------------------------------------------


   In order to know if a cached entry is fresh, a cache needs to know if
   its age exceeds its freshness lifetime. We discuss how to calculate
   the latter in section 13.2.4; this section describes how to calculate
   the age of a response or cache entry.

   In this discussion, we use the term "now" to mean "the current value
   of the clock at the host performing the calculation." Hosts that use
   HTTP, but especially hosts running origin servers and caches, SHOULD
   use NTP [28] or some similar protocol to synchronize their clocks to
   a globally accurate time standard.



Fielding, et al.            Standards Track                    [Page 80](#btoc){id=b080}

RFC 2616                        HTTP/1.1                       June 1999


   HTTP/1.1 requires origin servers to send a Date header, if possible,
   with every response, giving the time at which the response was
   generated (see section 14.18). We use the term "date_value" to denote
   the value of the Date header, in a form appropriate for arithmetic
   operations.

   HTTP/1.1 uses the Age response-header to convey the estimated age of
   the response message when obtained from a cache. The Age field value
   is the cache's estimate of the amount of time since the response was
   generated or revalidated by the origin server.

   In essence, the Age value is the sum of the time that the response
   has been resident in each of the caches along the path from the
   origin server, plus the amount of time it has been in transit along
   network paths.

   We use the term "age_value" to denote the value of the Age header, in
   a form appropriate for arithmetic operations.

   A response's age can be calculated in two entirely independent ways:

      1. now minus date_value, if the local clock is reasonably well
         synchronized to the origin server's clock. If the result is
         negative, the result is replaced by zero.

      2. age_value, if all of the caches along the response path
         implement HTTP/1.1.

   Given that we have two independent ways to compute the age of a
   response when it is received, we can combine these as

       corrected_received_age = max(now - date_value, age_value)

   and as long as we have either nearly synchronized clocks or all-
   HTTP/1.1 paths, one gets a reliable (conservative) result.

   Because of network-imposed delays, some significant interval might
   pass between the time that a server generates a response and the time
   it is received at the next outbound cache or client. If uncorrected,
   this delay could result in improperly low ages.

   Because the request that resulted in the returned Age value must have
   been initiated prior to that Age value's generation, we can correct
   for delays imposed by the network by recording the time at which the
   request was initiated. Then, when an Age value is received, it MUST
   be interpreted relative to the time the request was initiated, not





Fielding, et al.            Standards Track                    [Page 81](#btoc){id=b081}

RFC 2616                        HTTP/1.1                       June 1999


   the time that the response was received. This algorithm results in
   conservative behavior no matter how much delay is experienced. So, we
   compute:

      corrected_initial_age = corrected_received_age
                            + (now - request_time)

   where "request_time" is the time (according to the local clock) when
   the request that elicited this response was sent.

   Summary of age calculation algorithm, when a cache receives a
   response:

      /*
       * age_value
       *      is the value of Age: header received by the cache with
       *              this response.
       * date_value
       *      is the value of the origin server's Date: header
       * request_time
       *      is the (local) time when the cache made the request
       *              that resulted in this cached response
       * response_time
       *      is the (local) time when the cache received the
       *              response
       * now
       *      is the current (local) time
       */

      apparent_age = max(0, response_time - date_value);
      corrected_received_age = max(apparent_age, age_value);
      response_delay = response_time - request_time;
      corrected_initial_age = corrected_received_age + response_delay;
      resident_time = now - response_time;
      current_age   = corrected_initial_age + resident_time;

   The current_age of a cache entry is calculated by adding the amount
   of time (in seconds) since the cache entry was last validated by the
   origin server to the corrected_initial_age. When a response is
   generated from a cache entry, the cache MUST include a single Age
   header field in the response with a value equal to the cache entry's
   current_age.

   The presence of an Age header field in a response implies that a
   response is not first-hand. However, the converse is not true, since
   the lack of an Age header field in a response does not imply that the





Fielding, et al.            Standards Track                    [Page 82](#btoc){id=b082}

RFC 2616                        HTTP/1.1                       June 1999


   response is first-hand unless all caches along the request path are
   compliant with HTTP/1.1 (i.e., older HTTP caches did not implement
   the Age header field).

13.2.4 Expiration Calculations
--------------------------------------------------------


   In order to decide whether a response is fresh or stale, we need to
   compare its freshness lifetime to its age. The age is calculated as
   described in section 13.2.3; this section describes how to calculate
   the freshness lifetime, and to determine if a response has expired.
   In the discussion below, the values can be represented in any form
   appropriate for arithmetic operations.

   We use the term "expires_value" to denote the value of the Expires
   header. We use the term "max_age_value" to denote an appropriate
   value of the number of seconds carried by the "max-age" directive of
   the Cache-Control header in a response (see section 14.9.3).

   The max-age directive takes priority over Expires, so if max-age is
   present in a response, the calculation is simply:

      freshness_lifetime = max_age_value

   Otherwise, if Expires is present in the response, the calculation is:

      freshness_lifetime = expires_value - date_value

   Note that neither of these calculations is vulnerable to clock skew,
   since all of the information comes from the origin server.

   If none of Expires, Cache-Control: max-age, or Cache-Control: s-
   maxage (see section 14.9.3) appears in the response, and the response
   does not include other restrictions on caching, the cache MAY compute
   a freshness lifetime using a heuristic. The cache MUST attach Warning
   113 to any response whose age is more than 24 hours if such warning
   has not already been added.

   Also, if the response does have a Last-Modified time, the heuristic
   expiration value SHOULD be no more than some fraction of the interval
   since that time. A typical setting of this fraction might be 10%.

   The calculation to determine if a response has expired is quite
   simple:

      response_is_fresh = (freshness_lifetime > current_age)






Fielding, et al.            Standards Track                    [Page 83](#btoc){id=b083}

RFC 2616                        HTTP/1.1                       June 1999


13.2.5 Disambiguating Expiration Values
--------------------------------------------------------


   Because expiration values are assigned optimistically, it is possible
   for two caches to contain fresh values for the same resource that are
   different.

   If a client performing a retrieval receives a non-first-hand response
   for a request that was already fresh in its own cache, and the Date
   header in its existing cache entry is newer than the Date on the new
   response, then the client MAY ignore the response. If so, it MAY
   retry the request with a "Cache-Control: max-age=0" directive (see
   section 14.9), to force a check with the origin server.

   If a cache has two fresh responses for the same representation with
   different validators, it MUST use the one with the more recent Date
   header. This situation might arise because the cache is pooling
   responses from other caches, or because a client has asked for a
   reload or a revalidation of an apparently fresh cache entry.

13.2.6 Disambiguating Multiple Responses
--------------------------------------------------------


   Because a client might be receiving responses via multiple paths, so
   that some responses flow through one set of caches and other
   responses flow through a different set of caches, a client might
   receive responses in an order different from that in which the origin
   server sent them. We would like the client to use the most recently
   generated response, even if older responses are still apparently
   fresh.

   Neither the entity tag nor the expiration value can impose an
   ordering on responses, since it is possible that a later response
   intentionally carries an earlier expiration time. The Date values are
   ordered to a granularity of one second.

   When a client tries to revalidate a cache entry, and the response it
   receives contains a Date header that appears to be older than the one
   for the existing entry, then the client SHOULD repeat the request
   unconditionally, and include

       Cache-Control: max-age=0

   to force any intermediate caches to validate their copies directly
   with the origin server, or

       Cache-Control: no-cache

   to force any intermediate caches to obtain a new copy from the origin
   server.



Fielding, et al.            Standards Track                    [Page 84](#btoc){id=b084}

RFC 2616                        HTTP/1.1                       June 1999


   If the Date values are equal, then the client MAY use either response
   (or MAY, if it is being extremely prudent, request a new response).
   Servers MUST NOT depend on clients being able to choose
   deterministically between responses generated during the same second,
   if their expiration times overlap.

13.3 Validation Model
--------------------------------------------------------


   When a cache has a stale entry that it would like to use as a
   response to a client's request, it first has to check with the origin
   server (or possibly an intermediate cache with a fresh response) to
   see if its cached entry is still usable. We call this "validating"
   the cache entry. Since we do not want to have to pay the overhead of
   retransmitting the full response if the cached entry is good, and we
   do not want to pay the overhead of an extra round trip if the cached
   entry is invalid, the HTTP/1.1 protocol supports the use of
   conditional methods.

   The key protocol features for supporting conditional methods are
   those concerned with "cache validators." When an origin server
   generates a full response, it attaches some sort of validator to it,
   which is kept with the cache entry. When a client (user agent or
   proxy cache) makes a conditional request for a resource for which it
   has a cache entry, it includes the associated validator in the
   request.

   The server then checks that validator against the current validator
   for the entity, and, if they match (see section 13.3.3), it responds
   with a special status code (usually, 304 (Not Modified)) and no
   entity-body. Otherwise, it returns a full response (including
   entity-body). Thus, we avoid transmitting the full response if the
   validator matches, and we avoid an extra round trip if it does not
   match.

   In HTTP/1.1, a conditional request looks exactly the same as a normal
   request for the same resource, except that it carries a special
   header (which includes the validator) that implicitly turns the
   method (usually, GET) into a conditional.

   The protocol includes both positive and negative senses of cache-
   validating conditions. That is, it is possible to request either that
   a method be performed if and only if a validator matches or if and
   only if no validators match.








Fielding, et al.            Standards Track                    [Page 85](#btoc){id=b085}

RFC 2616                        HTTP/1.1                       June 1999


      Note: a response that lacks a validator may still be cached, and
      served from cache until it expires, unless this is explicitly
      prohibited by a cache-control directive. However, a cache cannot
      do a conditional retrieval if it does not have a validator for the
      entity, which means it will not be refreshable after it expires.

13.3.1 Last-Modified Dates
--------------------------------------------------------


   The Last-Modified entity-header field value is often used as a cache
   validator. In simple terms, a cache entry is considered to be valid
   if the entity has not been modified since the Last-Modified value.

13.3.2 Entity Tag Cache Validators
--------------------------------------------------------


   The ETag response-header field value, an entity tag, provides for an
   "opaque" cache validator. This might allow more reliable validation
   in situations where it is inconvenient to store modification dates,
   where the one-second resolution of HTTP date values is not
   sufficient, or where the origin server wishes to avoid certain
   paradoxes that might arise from the use of modification dates.

   Entity Tags are described in section 3.11. The headers used with
   entity tags are described in sections 14.19, 14.24, 14.26 and 14.44.

13.3.3 Weak and Strong Validators
--------------------------------------------------------


   Since both origin servers and caches will compare two validators to
   decide if they represent the same or different entities, one normally
   would expect that if the entity (the entity-body or any entity-
   headers) changes in any way, then the associated validator would
   change as well. If this is true, then we call this validator a
   "strong validator."

   However, there might be cases when a server prefers to change the
   validator only on semantically significant changes, and not when
   insignificant aspects of the entity change. A validator that does not
   always change when the resource changes is a "weak validator."

   Entity tags are normally "strong validators," but the protocol
   provides a mechanism to tag an entity tag as "weak." One can think of
   a strong validator as one that changes whenever the bits of an entity
   changes, while a weak value changes whenever the meaning of an entity
   changes. Alternatively, one can think of a strong validator as part
   of an identifier for a specific entity, while a weak validator is
   part of an identifier for a set of semantically equivalent entities.

      Note: One example of a strong validator is an integer that is
      incremented in stable storage every time an entity is changed.



Fielding, et al.            Standards Track                    [Page 86](#btoc){id=b086}

RFC 2616                        HTTP/1.1                       June 1999


      An entity's modification time, if represented with one-second
      resolution, could be a weak validator, since it is possible that
      the resource might be modified twice during a single second.

      Support for weak validators is optional. However, weak validators
      allow for more efficient caching of equivalent objects; for
      example, a hit counter on a site is probably good enough if it is
      updated every few days or weeks, and any value during that period
      is likely "good enough" to be equivalent.

   A "use" of a validator is either when a client generates a request
   and includes the validator in a validating header field, or when a
   server compares two validators.

   Strong validators are usable in any context. Weak validators are only
   usable in contexts that do not depend on exact equality of an entity.
   For example, either kind is usable for a conditional GET of a full
   entity. However, only a strong validator is usable for a sub-range
   retrieval, since otherwise the client might end up with an internally
   inconsistent entity.

   Clients MAY issue simple (non-subrange) GET requests with either weak
   validators or strong validators. Clients MUST NOT use weak validators
   in other forms of request.

   The only function that the HTTP/1.1 protocol defines on validators is
   comparison. There are two validator comparison functions, depending
   on whether the comparison context allows the use of weak validators
   or not:

      - The strong comparison function: in order to be considered equal,
        both validators MUST be identical in every way, and both MUST
        NOT be weak.

      - The weak comparison function: in order to be considered equal,
        both validators MUST be identical in every way, but either or
        both of them MAY be tagged as "weak" without affecting the
        result.

   An entity tag is strong unless it is explicitly tagged as weak.
   Section 3.11 gives the syntax for entity tags.

   A Last-Modified time, when used as a validator in a request, is
   implicitly weak unless it is possible to deduce that it is strong,
   using the following rules:

      - The validator is being compared by an origin server to the
        actual current validator for the entity and,



Fielding, et al.            Standards Track                    [Page 87](#btoc){id=b087}

RFC 2616                        HTTP/1.1                       June 1999


      - That origin server reliably knows that the associated entity did
        not change twice during the second covered by the presented
        validator.

   or

      - The validator is about to be used by a client in an If-
        Modified-Since or If-Unmodified-Since header, because the client
        has a cache entry for the associated entity, and

      - That cache entry includes a Date value, which gives the time
        when the origin server sent the original response, and

      - The presented Last-Modified time is at least 60 seconds before
        the Date value.

   or

      - The validator is being compared by an intermediate cache to the
        validator stored in its cache entry for the entity, and

      - That cache entry includes a Date value, which gives the time
        when the origin server sent the original response, and

      - The presented Last-Modified time is at least 60 seconds before
        the Date value.

   This method relies on the fact that if two different responses were
   sent by the origin server during the same second, but both had the
   same Last-Modified time, then at least one of those responses would
   have a Date value equal to its Last-Modified time. The arbitrary 60-
   second limit guards against the possibility that the Date and Last-
   Modified values are generated from different clocks, or at somewhat
   different times during the preparation of the response. An
   implementation MAY use a value larger than 60 seconds, if it is
   believed that 60 seconds is too short.

   If a client wishes to perform a sub-range retrieval on a value for
   which it has only a Last-Modified time and no opaque validator, it
   MAY do this only if the Last-Modified time is strong in the sense
   described here.

   A cache or origin server receiving a conditional request, other than
   a full-body GET request, MUST use the strong comparison function to
   evaluate the condition.

   These rules allow HTTP/1.1 caches and clients to safely perform sub-
   range retrievals on values that have been obtained from HTTP/1.0



Fielding, et al.            Standards Track                    [Page 88](#btoc){id=b088}

RFC 2616                        HTTP/1.1                       June 1999


   servers.

13.3.4 Rules for When to Use Entity Tags and Last-Modified Dates
--------------------------------------------------------


   We adopt a set of rules and recommendations for origin servers,
   clients, and caches regarding when various validator types ought to
   be used, and for what purposes.

   HTTP/1.1 origin servers:

      - SHOULD send an entity tag validator unless it is not feasible to
        generate one.

      - MAY send a weak entity tag instead of a strong entity tag, if
        performance considerations support the use of weak entity tags,
        or if it is unfeasible to send a strong entity tag.

      - SHOULD send a Last-Modified value if it is feasible to send one,
        unless the risk of a breakdown in semantic transparency that
        could result from using this date in an If-Modified-Since header
        would lead to serious problems.

   In other words, the preferred behavior for an HTTP/1.1 origin server
   is to send both a strong entity tag and a Last-Modified value.

   In order to be legal, a strong entity tag MUST change whenever the
   associated entity value changes in any way. A weak entity tag SHOULD
   change whenever the associated entity changes in a semantically
   significant way.

      Note: in order to provide semantically transparent caching, an
      origin server must avoid reusing a specific strong entity tag
      value for two different entities, or reusing a specific weak
      entity tag value for two semantically different entities. Cache
      entries might persist for arbitrarily long periods, regardless of
      expiration times, so it might be inappropriate to expect that a
      cache will never again attempt to validate an entry using a
      validator that it obtained at some point in the past.

   HTTP/1.1 clients:

      - If an entity tag has been provided by the origin server, MUST
        use that entity tag in any cache-conditional request (using If-
        Match or If-None-Match).

      - If only a Last-Modified value has been provided by the origin
        server, SHOULD use that value in non-subrange cache-conditional
        requests (using If-Modified-Since).



Fielding, et al.            Standards Track                    [Page 89](#btoc){id=b089}

RFC 2616                        HTTP/1.1                       June 1999


      - If only a Last-Modified value has been provided by an HTTP/1.0
        origin server, MAY use that value in subrange cache-conditional
        requests (using If-Unmodified-Since:). The user agent SHOULD
        provide a way to disable this, in case of difficulty.

      - If both an entity tag and a Last-Modified value have been
        provided by the origin server, SHOULD use both validators in
        cache-conditional requests. This allows both HTTP/1.0 and
        HTTP/1.1 caches to respond appropriately.

   An HTTP/1.1 origin server, upon receiving a conditional request that
   includes both a Last-Modified date (e.g., in an If-Modified-Since or
   If-Unmodified-Since header field) and one or more entity tags (e.g.,
   in an If-Match, If-None-Match, or If-Range header field) as cache
   validators, MUST NOT return a response status of 304 (Not Modified)
   unless doing so is consistent with all of the conditional header
   fields in the request.

   An HTTP/1.1 caching proxy, upon receiving a conditional request that
   includes both a Last-Modified date and one or more entity tags as
   cache validators, MUST NOT return a locally cached response to the
   client unless that cached response is consistent with all of the
   conditional header fields in the request.

      Note: The general principle behind these rules is that HTTP/1.1
      servers and clients should transmit as much non-redundant
      information as is available in their responses and requests.
      HTTP/1.1 systems receiving this information will make the most
      conservative assumptions about the validators they receive.

      HTTP/1.0 clients and caches will ignore entity tags. Generally,
      last-modified values received or used by these systems will
      support transparent and efficient caching, and so HTTP/1.1 origin
      servers should provide Last-Modified values. In those rare cases
      where the use of a Last-Modified value as a validator by an
      HTTP/1.0 system could result in a serious problem, then HTTP/1.1
      origin servers should not provide one.

13.3.5 Non-validating Conditionals
--------------------------------------------------------


   The principle behind entity tags is that only the service author
   knows the semantics of a resource well enough to select an
   appropriate cache validation mechanism, and the specification of any
   validator comparison function more complex than byte-equality would
   open up a can of worms. Thus, comparisons of any other headers
   (except Last-Modified, for compatibility with HTTP/1.0) are never
   used for purposes of validating a cache entry.




Fielding, et al.            Standards Track                    [Page 90](#btoc){id=b090}

RFC 2616                        HTTP/1.1                       June 1999


13.4 Response Cacheability
--------------------------------------------------------


   Unless specifically constrained by a cache-control (section 14.9)
   directive, a caching system MAY always store a successful response
   (see section 13.8) as a cache entry, MAY return it without validation
   if it is fresh, and MAY return it after successful validation. If
   there is neither a cache validator nor an explicit expiration time
   associated with a response, we do not expect it to be cached, but
   certain caches MAY violate this expectation (for example, when little
   or no network connectivity is available). A client can usually detect
   that such a response was taken from a cache by comparing the Date
   header to the current time.

      Note: some HTTP/1.0 caches are known to violate this expectation
      without providing any Warning.

   However, in some cases it might be inappropriate for a cache to
   retain an entity, or to return it in response to a subsequent
   request. This might be because absolute semantic transparency is
   deemed necessary by the service author, or because of security or
   privacy considerations. Certain cache-control directives are
   therefore provided so that the server can indicate that certain
   resource entities, or portions thereof, are not to be cached
   regardless of other considerations.

   Note that section 14.8 normally prevents a shared cache from saving
   and returning a response to a previous request if that request
   included an Authorization header.

   A response received with a status code of 200, 203, 206, 300, 301 or
   410 MAY be stored by a cache and used in reply to a subsequent
   request, subject to the expiration mechanism, unless a cache-control
   directive prohibits caching. However, a cache that does not support
   the Range and Content-Range headers MUST NOT cache 206 (Partial
   Content) responses.

   A response received with any other status code (e.g. status codes 302
   and 307) MUST NOT be returned in a reply to a subsequent request
   unless there are cache-control directives or another header(s) that
   explicitly allow it. For example, these include the following: an
   Expires header (section 14.21); a "max-age", "s-maxage",  "must-
   revalidate", "proxy-revalidate", "public" or "private" cache-control
   directive (section 14.9).








Fielding, et al.            Standards Track                    [Page 91](#btoc){id=b091}

RFC 2616                        HTTP/1.1                       June 1999


13.5 Constructing Responses From Caches
--------------------------------------------------------


   The purpose of an HTTP cache is to store information received in
   response to requests for use in responding to future requests. In
   many cases, a cache simply returns the appropriate parts of a
   response to the requester. However, if the cache holds a cache entry
   based on a previous response, it might have to combine parts of a new
   response with what is held in the cache entry.

13.5.1 End-to-end and Hop-by-hop Headers
--------------------------------------------------------


   For the purpose of defining the behavior of caches and non-caching
   proxies, we divide HTTP headers into two categories:

      - End-to-end headers, which are  transmitted to the ultimate
        recipient of a request or response. End-to-end headers in
        responses MUST be stored as part of a cache entry and MUST be
        transmitted in any response formed from a cache entry.

      - Hop-by-hop headers, which are meaningful only for a single
        transport-level connection, and are not stored by caches or
        forwarded by proxies.

   The following HTTP/1.1 headers are hop-by-hop headers:

      - Connection
      - Keep-Alive
      - Proxy-Authenticate
      - Proxy-Authorization
      - TE
      - Trailers
      - Transfer-Encoding
      - Upgrade

   All other headers defined by HTTP/1.1 are end-to-end headers.

   Other hop-by-hop headers MUST be listed in a Connection header,
   (section 14.10) to be introduced into HTTP/1.1 (or later).

13.5.2 Non-modifiable Headers
--------------------------------------------------------


   Some features of the HTTP/1.1 protocol, such as Digest
   Authentication, depend on the value of certain end-to-end headers. A
   transparent proxy SHOULD NOT modify an end-to-end header unless the
   definition of that header requires or specifically allows that.






Fielding, et al.            Standards Track                    [Page 92](#btoc){id=b092}

RFC 2616                        HTTP/1.1                       June 1999


   A transparent proxy MUST NOT modify any of the following fields in a
   request or response, and it MUST NOT add any of these fields if not
   already present:

      - Content-Location

      - Content-MD5

      - ETag

      - Last-Modified

   A transparent proxy MUST NOT modify any of the following fields in a
   response:

      - Expires

   but it MAY add any of these fields if not already present. If an
   Expires header is added, it MUST be given a field-value identical to
   that of the Date header in that response.

   A  proxy MUST NOT modify or add any of the following fields in a
   message that contains the no-transform cache-control directive, or in
   any request:

      - Content-Encoding

      - Content-Range

      - Content-Type

   A non-transparent proxy MAY modify or add these fields to a message
   that does not include no-transform, but if it does so, it MUST add a
   Warning 214 (Transformation applied) if one does not already appear
   in the message (see section 14.46).

      Warning: unnecessary modification of end-to-end headers might
      cause authentication failures if stronger authentication
      mechanisms are introduced in later versions of HTTP. Such
      authentication mechanisms MAY rely on the values of header fields
      not listed here.

   The Content-Length field of a request or response is added or deleted
   according to the rules in section 4.4. A transparent proxy MUST
   preserve the entity-length (section 7.2.2) of the entity-body,
   although it MAY change the transfer-length (section 4.4).





Fielding, et al.            Standards Track                    [Page 93](#btoc){id=b093}

RFC 2616                        HTTP/1.1                       June 1999


13.5.3 Combining Headers
--------------------------------------------------------


   When a cache makes a validating request to a server, and the server
   provides a 304 (Not Modified) response or a 206 (Partial Content)
   response, the cache then constructs a response to send to the
   requesting client.

   If the status code is 304 (Not Modified), the cache uses the entity-
   body stored in the cache entry as the entity-body of this outgoing
   response. If the status code is 206 (Partial Content) and the ETag or
   Last-Modified headers match exactly, the cache MAY combine the
   contents stored in the cache entry with the new contents received in
   the response and use the result as the entity-body of this outgoing
   response, (see 13.5.4).

   The end-to-end headers stored in the cache entry are used for the
   constructed response, except that

      - any stored Warning headers with warn-code 1xx (see section
        14.46) MUST be deleted from the cache entry and the forwarded
        response.

      - any stored Warning headers with warn-code 2xx MUST be retained
        in the cache entry and the forwarded response.

      - any end-to-end headers provided in the 304 or 206 response MUST
        replace the corresponding headers from the cache entry.

   Unless the cache decides to remove the cache entry, it MUST also
   replace the end-to-end headers stored with the cache entry with
   corresponding headers received in the incoming response, except for
   Warning headers as described immediately above. If a header field-
   name in the incoming response matches more than one header in the
   cache entry, all such old headers MUST be replaced.

   In other words, the set of end-to-end headers received in the
   incoming response overrides all corresponding end-to-end headers
   stored with the cache entry (except for stored Warning headers with
   warn-code 1xx, which are deleted even if not overridden).

      Note: this rule allows an origin server to use a 304 (Not
      Modified) or a 206 (Partial Content) response to update any header
      associated with a previous response for the same entity or sub-
      ranges thereof, although it might not always be meaningful or
      correct to do so. This rule does not allow an origin server to use
      a 304 (Not Modified) or a 206 (Partial Content) response to
      entirely delete a header that it had provided with a previous
      response.



Fielding, et al.            Standards Track                    [Page 94](#btoc){id=b094}

RFC 2616                        HTTP/1.1                       June 1999


13.5.4 Combining Byte Ranges
--------------------------------------------------------


   A response might transfer only a subrange of the bytes of an entity-
   body, either because the request included one or more Range
   specifications, or because a connection was broken prematurely. After
   several such transfers, a cache might have received several ranges of
   the same entity-body.

   If a cache has a stored non-empty set of subranges for an entity, and
   an incoming response transfers another subrange, the cache MAY
   combine the new subrange with the existing set if both the following
   conditions are met:

      - Both the incoming response and the cache entry have a cache
        validator.

      - The two cache validators match using the strong comparison
        function (see section 13.3.3).

   If either requirement is not met, the cache MUST use only the most
   recent partial response (based on the Date values transmitted with
   every response, and using the incoming response if these values are
   equal or missing), and MUST discard the other partial information.

13.6 Caching Negotiated Responses
--------------------------------------------------------


   Use of server-driven content negotiation (section 12.1), as indicated
   by the presence of a Vary header field in a response, alters the
   conditions and procedure by which a cache can use the response for
   subsequent requests. See section 14.44 for use of the Vary header
   field by servers.

   A server SHOULD use the Vary header field to inform a cache of what
   request-header fields were used to select among multiple
   representations of a cacheable response subject to server-driven
   negotiation. The set of header fields named by the Vary field value
   is known as the "selecting" request-headers.

   When the cache receives a subsequent request whose Request-URI
   specifies one or more cache entries including a Vary header field,
   the cache MUST NOT use such a cache entry to construct a response to
   the new request unless all of the selecting request-headers present
   in the new request match the corresponding stored request-headers in
   the original request.

   The selecting request-headers from two requests are defined to match
   if and only if the selecting request-headers in the first request can
   be transformed to the selecting request-headers in the second request



Fielding, et al.            Standards Track                    [Page 95](#btoc){id=b095}

RFC 2616                        HTTP/1.1                       June 1999


   by adding or removing linear white space (LWS) at places where this
   is allowed by the corresponding BNF, and/or combining multiple
   message-header fields with the same field name following the rules
   about message headers in section 4.2.

   A Vary header field-value of "*" always fails to match and subsequent
   requests on that resource can only be properly interpreted by the
   origin server.

   If the selecting request header fields for the cached entry do not
   match the selecting request header fields of the new request, then
   the cache MUST NOT use a cached entry to satisfy the request unless
   it first relays the new request to the origin server in a conditional
   request and the server responds with 304 (Not Modified), including an
   entity tag or Content-Location that indicates the entity to be used.

   If an entity tag was assigned to a cached representation, the
   forwarded request SHOULD be conditional and include the entity tags
   in an If-None-Match header field from all its cache entries for the
   resource. This conveys to the server the set of entities currently
   held by the cache, so that if any one of these entities matches the
   requested entity, the server can use the ETag header field in its 304
   (Not Modified) response to tell the cache which entry is appropriate.
   If the entity-tag of the new response matches that of an existing
   entry, the new response SHOULD be used to update the header fields of
   the existing entry, and the result MUST be returned to the client.

   If any of the existing cache entries contains only partial content
   for the associated entity, its entity-tag SHOULD NOT be included in
   the If-None-Match header field unless the request is for a range that
   would be fully satisfied by that entry.

   If a cache receives a successful response whose Content-Location
   field matches that of an existing cache entry for the same Request-
   ]URI, whose entity-tag differs from that of the existing entry, and
   whose Date is more recent than that of the existing entry, the
   existing entry SHOULD NOT be returned in response to future requests
   and SHOULD be deleted from the cache.

13.7 Shared and Non-Shared Caches
--------------------------------------------------------


   For reasons of security and privacy, it is necessary to make a
   distinction between "shared" and "non-shared" caches. A non-shared
   cache is one that is accessible only to a single user. Accessibility
   in this case SHOULD be enforced by appropriate security mechanisms.
   All other caches are considered to be "shared." Other sections of





Fielding, et al.            Standards Track                    [Page 96](#btoc){id=b096}

RFC 2616                        HTTP/1.1                       June 1999


   this specification place certain constraints on the operation of
   shared caches in order to prevent loss of privacy or failure of
   access controls.

13.8 Errors or Incomplete Response Cache Behavior
--------------------------------------------------------


   A cache that receives an incomplete response (for example, with fewer
   bytes of data than specified in a Content-Length header) MAY store
   the response. However, the cache MUST treat this as a partial
   response. Partial responses MAY be combined as described in section
   13.5.4; the result might be a full response or might still be
   partial. A cache MUST NOT return a partial response to a client
   without explicitly marking it as such, using the 206 (Partial
   Content) status code. A cache MUST NOT return a partial response
   using a status code of 200 (OK).

   If a cache receives a 5xx response while attempting to revalidate an
   entry, it MAY either forward this response to the requesting client,
   or act as if the server failed to respond. In the latter case, it MAY
   return a previously received response unless the cached entry
   includes the "must-revalidate" cache-control directive (see section
   14.9).

13.9 Side Effects of GET and HEAD
--------------------------------------------------------


   Unless the origin server explicitly prohibits the caching of their
   responses, the application of GET and HEAD methods to any resources
   SHOULD NOT have side effects that would lead to erroneous behavior if
   these responses are taken from a cache. They MAY still have side
   effects, but a cache is not required to consider such side effects in
   its caching decisions. Caches are always expected to observe an
   origin server's explicit restrictions on caching.

   We note one exception to this rule: since some applications have
   traditionally used GETs and HEADs with query URLs (those containing a
   "?" in the rel_path part) to perform operations with significant side
   effects, caches MUST NOT treat responses to such URIs as fresh unless
   the server provides an explicit expiration time. This specifically
   means that responses from HTTP/1.0 servers for such URIs SHOULD NOT
   be taken from a cache. See section 9.1.1 for related information.

13.10 Invalidation After Updates or Deletions
--------------------------------------------------------


   The effect of certain methods performed on a resource at the origin
   server might cause one or more existing cache entries to become non-
   transparently invalid. That is, although they might continue to be
   "fresh," they do not accurately reflect what the origin server would
   return for a new request on that resource.



Fielding, et al.            Standards Track                    [Page 97](#btoc){id=b097}

RFC 2616                        HTTP/1.1                       June 1999


   There is no way for the HTTP protocol to guarantee that all such
   cache entries are marked invalid. For example, the request that
   caused the change at the origin server might not have gone through
   the proxy where a cache entry is stored. However, several rules help
   reduce the likelihood of erroneous behavior.

   In this section, the phrase "invalidate an entity" means that the
   cache will either remove all instances of that entity from its
   storage, or will mark these as "invalid" and in need of a mandatory
   revalidation before they can be returned in response to a subsequent
   request.

   Some HTTP methods MUST cause a cache to invalidate an entity. This is
   either the entity referred to by the Request-URI, or by the Location
   or Content-Location headers (if present). These methods are:

      - PUT

      - DELETE

      - POST

   In order to prevent denial of service attacks, an invalidation based
   on the URI in a Location or Content-Location header MUST only be
   performed if the host part is the same as in the Request-URI.

   A cache that passes through requests for methods it does not
   understand SHOULD invalidate any entities referred to by the
   Request-URI.

13.11 Write-Through Mandatory
--------------------------------------------------------


   All methods that might be expected to cause modifications to the
   origin server's resources MUST be written through to the origin
   server. This currently includes all methods except for GET and HEAD.
   A cache MUST NOT reply to such a request from a client before having
   transmitted the request to the inbound server, and having received a
   corresponding response from the inbound server. This does not prevent
   a proxy cache from sending a 100 (Continue) response before the
   inbound server has sent its final reply.

   The alternative (known as "write-back" or "copy-back" caching) is not
   allowed in HTTP/1.1, due to the difficulty of providing consistent
   updates and the problems arising from server, cache, or network
   failure prior to write-back.






Fielding, et al.            Standards Track                    [Page 98](#btoc){id=b098}

RFC 2616                        HTTP/1.1                       June 1999


13.12 Cache Replacement
--------------------------------------------------------


   If a new cacheable (see sections 14.9.2, 13.2.5, 13.2.6 and 13.8)
   response is received from a resource while any existing responses for
   the same resource are cached, the cache SHOULD use the new response
   to reply to the current request. It MAY insert it into cache storage
   and MAY, if it meets all other requirements, use it to respond to any
   future requests that would previously have caused the old response to
   be returned. If it inserts the new response into cache storage  the
   rules in section 13.5.3 apply.

      Note: a new response that has an older Date header value than
      existing cached responses is not cacheable.

13.13 History Lists
--------------------------------------------------------


   User agents often have history mechanisms, such as "Back" buttons and
   history lists, which can be used to redisplay an entity retrieved
   earlier in a session.

   History mechanisms and caches are different. In particular history
   mechanisms SHOULD NOT try to show a semantically transparent view of
   the current state of a resource. Rather, a history mechanism is meant
   to show exactly what the user saw at the time when the resource was
   retrieved.

   By default, an expiration time does not apply to history mechanisms.
   If the entity is still in storage, a history mechanism SHOULD display
   it even if the entity has expired, unless the user has specifically
   configured the agent to refresh expired history documents.

   This is not to be construed to prohibit the history mechanism from
   telling the user that a view might be stale.

      Note: if history list mechanisms unnecessarily prevent users from
      viewing stale resources, this will tend to force service authors
      to avoid using HTTP expiration controls and cache controls when
      they would otherwise like to. Service authors may consider it
      important that users not be presented with error messages or
      warning messages when they use navigation controls (such as BACK)
      to view previously fetched resources. Even though sometimes such
      resources ought not to cached, or ought to expire quickly, user
      interface considerations may force service authors to resort to
      other means of preventing caching (e.g. "once-only" URLs) in order
      not to suffer the effects of improperly functioning history
      mechanisms.





Fielding, et al.            Standards Track                    [Page 99](#btoc){id=b099}

RFC 2616                        HTTP/1.1                       June 1999


/14 Header Field Definitions
========================================================



   This section defines the syntax and semantics of all standard
   HTTP/1.1 header fields. For entity-header fields, both sender and
   recipient refer to either the client or the server, depending on who
   sends and who receives the entity.

14.1 Accept
--------------------------------------------------------


   The Accept request-header field can be used to specify certain media
   types which are acceptable for the response. Accept headers can be
   used to indicate that the request is specifically limited to a small
   set of desired types, as in the case of a request for an in-line
   image.

       Accept         = "Accept" ":"
                        #( media-range [ accept-params ] )

       media-range    = ( "*/*"
                        | ( type "/" "*" )
                        | ( type "/" subtype )
                        ) *( ";" parameter )
       accept-params  = ";" "q" "=" qvalue *( accept-extension )
       accept-extension = ";" token [ "=" ( token | quoted-string ) ]

   The asterisk "*" character is used to group media types into ranges,
   with "*/*" indicating all media types and "type/*" indicating all
   subtypes of that type. The media-range MAY include media type
   parameters that are applicable to that range.

   Each media-range MAY be followed by one or more accept-params,
   beginning with the "q" parameter for indicating a relative quality
   factor. The first "q" parameter (if any) separates the media-range
   parameter(s) from the accept-params. Quality factors allow the user
   or user agent to indicate the relative degree of preference for that
   media-range, using the qvalue scale from 0 to 1 (section 3.9). The
   default value is q=1.

      Note: Use of the "q" parameter name to separate media type
      parameters from Accept extension parameters is due to historical
      practice. Although this prevents any media type parameter named
      "q" from being used with a media range, such an event is believed
      to be unlikely given the lack of any "q" parameters in the IANA
      media type registry and the rare usage of any media type
      parameters in Accept. Future media types are discouraged from
      registering any parameter named "q".





Fielding, et al.            Standards Track                   [Page 100](#btoc){id=b100}

RFC 2616                        HTTP/1.1                       June 1999


   The example

       Accept: audio/*; q=0.2, audio/basic

   SHOULD be interpreted as "I prefer audio/basic, but send me any audio
   type if it is the best available after an 80% mark-down in quality."

   If no Accept header field is present, then it is assumed that the
   client accepts all media types. If an Accept header field is present,
   and if the server cannot send a response which is acceptable
   according to the combined Accept field value, then the server SHOULD
   send a 406 (not acceptable) response.

   A more elaborate example is

       Accept: text/plain; q=0.5, text/html,
               text/x-dvi; q=0.8, text/x-c

   Verbally, this would be interpreted as "text/html and text/x-c are
   the preferred media types, but if they do not exist, then send the
   text/x-dvi entity, and if that does not exist, send the text/plain
   entity."

   Media ranges can be overridden by more specific media ranges or
   specific media types. If more than one media range applies to a given
   type, the most specific reference has precedence. For example,

       Accept: text/*, text/html, text/html;level=1, */*

   have the following precedence:

       1) text/html;level=1
       2) text/html
       3) text/*
       4) */*

   The media type quality factor associated with a given type is
   determined by finding the media range with the highest precedence
   which matches that type. For example,

       Accept: text/*;q=0.3, text/html;q=0.7, text/html;level=1,
               text/html;level=2;q=0.4, */*;q=0.5

   would cause the following values to be associated:

       text/html;level=1         = 1
       text/html                 = 0.7
       text/plain                = 0.3



Fielding, et al.            Standards Track                   [Page 101](#btoc){id=b101}

RFC 2616                        HTTP/1.1                       June 1999


       image/jpeg                = 0.5
       text/html;level=2         = 0.4
       text/html;level=3         = 0.7

      Note: A user agent might be provided with a default set of quality
      values for certain media ranges. However, unless the user agent is
      a closed system which cannot interact with other rendering agents,
      this default set ought to be configurable by the user.

14.2 Accept-Charset
--------------------------------------------------------


   The Accept-Charset request-header field can be used to indicate what
   character sets are acceptable for the response. This field allows
   clients capable of understanding more comprehensive or special-
   purpose character sets to signal that capability to a server which is
   capable of representing documents in those character sets.

      Accept-Charset = "Accept-Charset" ":"
              1#( ( charset | "*" )[ ";" "q" "=" qvalue ] )


   Character set values are described in section 3.4. Each charset MAY
   be given an associated quality value which represents the user's
   preference for that charset. The default value is q=1. An example is

      Accept-Charset: iso-8859-5, unicode-1-1;q=0.8

   The special value "*", if present in the Accept-Charset field,
   matches every character set (including ISO-8859-1) which is not
   mentioned elsewhere in the Accept-Charset field. If no "*" is present
   in an Accept-Charset field, then all character sets not explicitly
   mentioned get a quality value of 0, except for ISO-8859-1, which gets
   a quality value of 1 if not explicitly mentioned.

   If no Accept-Charset header is present, the default is that any
   character set is acceptable. If an Accept-Charset header is present,
   and if the server cannot send a response which is acceptable
   according to the Accept-Charset header, then the server SHOULD send
   an error response with the 406 (not acceptable) status code, though
   the sending of an unacceptable response is also allowed.

14.3 Accept-Encoding
--------------------------------------------------------


   The Accept-Encoding request-header field is similar to Accept, but
   restricts the content-codings (section 3.5) that are acceptable in
   the response.

       Accept-Encoding  = "Accept-Encoding" ":"



Fielding, et al.            Standards Track                   [Page 102](#btoc){id=b102}

RFC 2616                        HTTP/1.1                       June 1999


                          1#( codings [ ";" "q" "=" qvalue ] )
       codings          = ( content-coding | "*" )

   Examples of its use are:

       Accept-Encoding: compress, gzip
       Accept-Encoding:
       Accept-Encoding: *
       Accept-Encoding: compress;q=0.5, gzip;q=1.0
       Accept-Encoding: gzip;q=1.0, identity; q=0.5, *;q=0

   A server tests whether a content-coding is acceptable, according to
   an Accept-Encoding field, using these rules:

      1. If the content-coding is one of the content-codings listed in
         the Accept-Encoding field, then it is acceptable, unless it is
         accompanied by a qvalue of 0. (As defined in section 3.9, a
         qvalue of 0 means "not acceptable.")

      2. The special "*" symbol in an Accept-Encoding field matches any
         available content-coding not explicitly listed in the header
         field.

      3. If multiple content-codings are acceptable, then the acceptable
         content-coding with the highest non-zero qvalue is preferred.

      4. The "identity" content-coding is always acceptable, unless
         specifically refused because the Accept-Encoding field includes
         "identity;q=0", or because the field includes "*;q=0" and does
         not explicitly include the "identity" content-coding. If the
         Accept-Encoding field-value is empty, then only the "identity"
         encoding is acceptable.

   If an Accept-Encoding field is present in a request, and if the
   server cannot send a response which is acceptable according to the
   Accept-Encoding header, then the server SHOULD send an error response
   with the 406 (Not Acceptable) status code.

   If no Accept-Encoding field is present in a request, the server MAY
   assume that the client will accept any content coding. In this case,
   if "identity" is one of the available content-codings, then the
   server SHOULD use the "identity" content-coding, unless it has
   additional information that a different content-coding is meaningful
   to the client.

      Note: If the request does not include an Accept-Encoding field,
      and if the "identity" content-coding is unavailable, then
      content-codings commonly understood by HTTP/1.0 clients (i.e.,



Fielding, et al.            Standards Track                   [Page 103](#btoc){id=b103}

RFC 2616                        HTTP/1.1                       June 1999


      "gzip" and "compress") are preferred; some older clients
      improperly display messages sent with other content-codings.  The
      server might also make this decision based on information about
      the particular user-agent or client.

      Note: Most HTTP/1.0 applications do not recognize or obey qvalues
      associated with content-codings. This means that qvalues will not
      work and are not permitted with x-gzip or x-compress.

14.4 Accept-Language
--------------------------------------------------------


   The Accept-Language request-header field is similar to Accept, but
   restricts the set of natural languages that are preferred as a
   response to the request. Language tags are defined in section 3.10.

       Accept-Language = "Accept-Language" ":"
                         1#( language-range [ ";" "q" "=" qvalue ] )
       language-range  = ( ( 1*8ALPHA *( "-" 1*8ALPHA ) ) | "*" )

   Each language-range MAY be given an associated quality value which
   represents an estimate of the user's preference for the languages
   specified by that range. The quality value defaults to "q=1". For
   example,

       Accept-Language: da, en-gb;q=0.8, en;q=0.7

   would mean: "I prefer Danish, but will accept British English and
   other types of English." A language-range matches a language-tag if
   it exactly equals the tag, or if it exactly equals a prefix of the
   tag such that the first tag character following the prefix is "-".
   The special range "*", if present in the Accept-Language field,
   matches every tag not matched by any other range present in the
   Accept-Language field.

      Note: This use of a prefix matching rule does not imply that
      language tags are assigned to languages in such a way that it is
      always true that if a user understands a language with a certain
      tag, then this user will also understand all languages with tags
      for which this tag is a prefix. The prefix rule simply allows the
      use of prefix tags if this is the case.

   The language quality factor assigned to a language-tag by the
   Accept-Language field is the quality value of the longest language-
   range in the field that matches the language-tag. If no language-
   range in the field matches the tag, the language quality factor
   assigned is 0. If no Accept-Language header is present in the
   request, the server




Fielding, et al.            Standards Track                   [Page 104](#btoc){id=b104}

RFC 2616                        HTTP/1.1                       June 1999


   SHOULD assume that all languages are equally acceptable. If an
   Accept-Language header is present, then all languages which are
   assigned a quality factor greater than 0 are acceptable.

   It might be contrary to the privacy expectations of the user to send
   an Accept-Language header with the complete linguistic preferences of
   the user in every request. For a discussion of this issue, see
   section 15.1.4.

   As intelligibility is highly dependent on the individual user, it is
   recommended that client applications make the choice of linguistic
   preference available to the user. If the choice is not made
   available, then the Accept-Language header field MUST NOT be given in
   the request.

      Note: When making the choice of linguistic preference available to
      the user, we remind implementors of  the fact that users are not
      familiar with the details of language matching as described above,
      and should provide appropriate guidance. As an example, users
      might assume that on selecting "en-gb", they will be served any
      kind of English document if British English is not available. A
      user agent might suggest in such a case to add "en" to get the
      best matching behavior.

14.5 Accept-Ranges
--------------------------------------------------------


      The Accept-Ranges response-header field allows the server to
      indicate its acceptance of range requests for a resource:

          Accept-Ranges     = "Accept-Ranges" ":" acceptable-ranges
          acceptable-ranges = 1#range-unit | "none"

      Origin servers that accept byte-range requests MAY send

          Accept-Ranges: bytes

      but are not required to do so. Clients MAY generate byte-range
      requests without having received this header for the resource
      involved. Range units are defined in section 3.12.

      Servers that do not accept any kind of range request for a
      resource MAY send

          Accept-Ranges: none

      to advise the client not to attempt a range request.





Fielding, et al.            Standards Track                   [Page 105](#btoc){id=b105}

RFC 2616                        HTTP/1.1                       June 1999


14.6 Age
--------------------------------------------------------


      The Age response-header field conveys the sender's estimate of the
      amount of time since the response (or its revalidation) was
      generated at the origin server. A cached response is "fresh" if
      its age does not exceed its freshness lifetime. Age values are
      calculated as specified in section 13.2.3.

           Age = "Age" ":" age-value
           age-value = delta-seconds

      Age values are non-negative decimal integers, representing time in
      seconds.

      If a cache receives a value larger than the largest positive
      integer it can represent, or if any of its age calculations
      overflows, it MUST transmit an Age header with a value of
      2147483648 (2^31). An HTTP/1.1 server that includes a cache MUST
      include an Age header field in every response generated from its
      own cache. Caches SHOULD use an arithmetic type of at least 31
      bits of range.

14.7 Allow
--------------------------------------------------------


      The Allow entity-header field lists the set of methods supported
      by the resource identified by the Request-URI. The purpose of this
      field is strictly to inform the recipient of valid methods
      associated with the resource. An Allow header field MUST be
      present in a 405 (Method Not Allowed) response.

          Allow   = "Allow" ":" #Method

      Example of use:

          Allow: GET, HEAD, PUT

      This field cannot prevent a client from trying other methods.
      However, the indications given by the Allow header field value
      SHOULD be followed. The actual set of allowed methods is defined
      by the origin server at the time of each request.

      The Allow header field MAY be provided with a PUT request to
      recommend the methods to be supported by the new or modified
      resource. The server is not required to support these methods and
      SHOULD include an Allow header in the response giving the actual
      supported methods.





Fielding, et al.            Standards Track                   [Page 106](#btoc){id=b106}

RFC 2616                        HTTP/1.1                       June 1999


      A proxy MUST NOT modify the Allow header field even if it does not
      understand all the methods specified, since the user agent might
      have other means of communicating with the origin server.

14.8 Authorization
--------------------------------------------------------


      A user agent that wishes to authenticate itself with a server--
      usually, but not necessarily, after receiving a 401 response--does
      so by including an Authorization request-header field with the
      request.  The Authorization field value consists of credentials
      containing the authentication information of the user agent for
      the realm of the resource being requested.

          Authorization  = "Authorization" ":" credentials

      HTTP access authentication is described in "HTTP Authentication:
      Basic and Digest Access Authentication" [43]. If a request is
      authenticated and a realm specified, the same credentials SHOULD
      be valid for all other requests within this realm (assuming that
      the authentication scheme itself does not require otherwise, such
      as credentials that vary according to a challenge value or using
      synchronized clocks).

      When a shared cache (see section 13.7) receives a request
      containing an Authorization field, it MUST NOT return the
      corresponding response as a reply to any other request, unless one
      of the following specific exceptions holds:

      1. If the response includes the "s-maxage" cache-control
         directive, the cache MAY use that response in replying to a
         subsequent request. But (if the specified maximum age has
         passed) a proxy cache MUST first revalidate it with the origin
         server, using the request-headers from the new request to allow
         the origin server to authenticate the new request. (This is the
         defined behavior for s-maxage.) If the response includes "s-
         maxage=0", the proxy MUST always revalidate it before re-using
         it.

      2. If the response includes the "must-revalidate" cache-control
         directive, the cache MAY use that response in replying to a
         subsequent request. But if the response is stale, all caches
         MUST first revalidate it with the origin server, using the
         request-headers from the new request to allow the origin server
         to authenticate the new request.

      3. If the response includes the "public" cache-control directive,
         it MAY be returned in reply to any subsequent request.




Fielding, et al.            Standards Track                   [Page 107](#btoc){id=b107}

RFC 2616                        HTTP/1.1                       June 1999


14.9 Cache-Control
--------------------------------------------------------


   The Cache-Control general-header field is used to specify directives
   that MUST be obeyed by all caching mechanisms along the
   request/response chain. The directives specify behavior intended to
   prevent caches from adversely interfering with the request or
   response. These directives typically override the default caching
   algorithms. Cache directives are unidirectional in that the presence
   of a directive in a request does not imply that the same directive is
   to be given in the response.

      Note that HTTP/1.0 caches might not implement Cache-Control and
      might only implement Pragma: no-cache (see section 14.32).

   Cache directives MUST be passed through by a proxy or gateway
   application, regardless of their significance to that application,
   since the directives might be applicable to all recipients along the
   request/response chain. It is not possible to specify a cache-
   directive for a specific cache.

    Cache-Control   = "Cache-Control" ":" 1#cache-directive

    cache-directive = cache-request-directive
         | cache-response-directive

    cache-request-directive =
           "no-cache"                          ; Section 14.9.1
         | "no-store"                          ; Section 14.9.2
         | "max-age" "=" delta-seconds         ; Section 14.9.3, 14.9.4
         | "max-stale" [ "=" delta-seconds ]   ; Section 14.9.3
         | "min-fresh" "=" delta-seconds       ; Section 14.9.3
         | "no-transform"                      ; Section 14.9.5
         | "only-if-cached"                    ; Section 14.9.4
         | cache-extension                     ; Section 14.9.6

     cache-response-directive =
           "public"                               ; Section 14.9.1
         | "private" [ "=" <"> 1#field-name <"> ] ; Section 14.9.1
         | "no-cache" [ "=" <"> 1#field-name <"> ]; Section 14.9.1
         | "no-store"                             ; Section 14.9.2
         | "no-transform"                         ; Section 14.9.5
         | "must-revalidate"                      ; Section 14.9.4
         | "proxy-revalidate"                     ; Section 14.9.4
         | "max-age" "=" delta-seconds            ; Section 14.9.3
         | "s-maxage" "=" delta-seconds           ; Section 14.9.3
         | cache-extension                        ; Section 14.9.6

    cache-extension = token [ "=" ( token | quoted-string ) ]



Fielding, et al.            Standards Track                   [Page 108](#btoc){id=b108}

RFC 2616                        HTTP/1.1                       June 1999


   When a directive appears without any 1#field-name parameter, the
   directive applies to the entire request or response. When such a
   directive appears with a 1#field-name parameter, it applies only to
   the named field or fields, and not to the rest of the request or
   response. This mechanism supports extensibility; implementations of
   future versions of the HTTP protocol might apply these directives to
   header fields not defined in HTTP/1.1.

   The cache-control directives can be broken down into these general
   categories:

      - Restrictions on what are cacheable; these may only be imposed by
        the origin server.

      - Restrictions on what may be stored by a cache; these may be
        imposed by either the origin server or the user agent.

      - Modifications of the basic expiration mechanism; these may be
        imposed by either the origin server or the user agent.

      - Controls over cache revalidation and reload; these may only be
        imposed by a user agent.

      - Control over transformation of entities.

      - Extensions to the caching system.

14.9.1 What is Cacheable
--------------------------------------------------------


   By default, a response is cacheable if the requirements of the
   request method, request header fields, and the response status
   indicate that it is cacheable. Section 13.4 summarizes these defaults
   for cacheability. The following Cache-Control response directives
   allow an origin server to override the default cacheability of a
   response:

   public
      Indicates that the response MAY be cached by any cache, even if it
      would normally be non-cacheable or cacheable only within a non-
      shared cache. (See also Authorization, section 14.8, for
      additional details.)

   private
      Indicates that all or part of the response message is intended for
      a single user and MUST NOT be cached by a shared cache. This
      allows an origin server to state that the specified parts of the





Fielding, et al.            Standards Track                   [Page 109](#btoc){id=b109}

RFC 2616                        HTTP/1.1                       June 1999


      response are intended for only one user and are not a valid
      response for requests by other users. A private (non-shared) cache
      MAY cache the response.

       Note: This usage of the word private only controls where the
       response may be cached, and cannot ensure the privacy of the
       message content.

   no-cache
       If the no-cache directive does not specify a field-name, then a
      cache MUST NOT use the response to satisfy a subsequent request
      without successful revalidation with the origin server. This
      allows an origin server to prevent caching even by caches that
      have been configured to return stale responses to client requests.

      If the no-cache directive does specify one or more field-names,
      then a cache MAY use the response to satisfy a subsequent request,
      subject to any other restrictions on caching. However, the
      specified field-name(s) MUST NOT be sent in the response to a
      subsequent request without successful revalidation with the origin
      server. This allows an origin server to prevent the re-use of
      certain header fields in a response, while still allowing caching
      of the rest of the response.

       Note: Most HTTP/1.0 caches will not recognize or obey this
       directive.

14.9.2 What May be Stored by Caches
--------------------------------------------------------


   no-store
      The purpose of the no-store directive is to prevent the
      inadvertent release or retention of sensitive information (for
      example, on backup tapes). The no-store directive applies to the
      entire message, and MAY be sent either in a response or in a
      request. If sent in a request, a cache MUST NOT store any part of
      either this request or any response to it. If sent in a response,
      a cache MUST NOT store any part of either this response or the
      request that elicited it. This directive applies to both non-
      shared and shared caches. "MUST NOT store" in this context means
      that the cache MUST NOT intentionally store the information in
      non-volatile storage, and MUST make a best-effort attempt to
      remove the information from volatile storage as promptly as
      possible after forwarding it.

      Even when this directive is associated with a response, users
      might explicitly store such a response outside of the caching
      system (e.g., with a "Save As" dialog). History buffers MAY store
      such responses as part of their normal operation.



Fielding, et al.            Standards Track                   [Page 110](#btoc){id=b110}

RFC 2616                        HTTP/1.1                       June 1999


      The purpose of this directive is to meet the stated requirements
      of certain users and service authors who are concerned about
      accidental releases of information via unanticipated accesses to
      cache data structures. While the use of this directive might
      improve privacy in some cases, we caution that it is NOT in any
      way a reliable or sufficient mechanism for ensuring privacy. In
      particular, malicious or compromised caches might not recognize or
      obey this directive, and communications networks might be
      vulnerable to eavesdropping.

14.9.3 Modifications of the Basic Expiration Mechanism
--------------------------------------------------------


   The expiration time of an entity MAY be specified by the origin
   server using the Expires header (see section 14.21). Alternatively,
   it MAY be specified using the max-age directive in a response. When
   the max-age cache-control directive is present in a cached response,
   the response is stale if its current age is greater than the age
   value given (in seconds) at the time of a new request for that
   resource. The max-age directive on a response implies that the
   response is cacheable (i.e., "public") unless some other, more
   restrictive cache directive is also present.

   If a response includes both an Expires header and a max-age
   directive, the max-age directive overrides the Expires header, even
   if the Expires header is more restrictive. This rule allows an origin
   server to provide, for a given response, a longer expiration time to
   an HTTP/1.1 (or later) cache than to an HTTP/1.0 cache. This might be
   useful if certain HTTP/1.0 caches improperly calculate ages or
   expiration times, perhaps due to desynchronized clocks.

   Many HTTP/1.0 cache implementations will treat an Expires value that
   is less than or equal to the response Date value as being equivalent
   to the Cache-Control response directive "no-cache". If an HTTP/1.1
   cache receives such a response, and the response does not include a
   Cache-Control header field, it SHOULD consider the response to be
   non-cacheable in order to retain compatibility with HTTP/1.0 servers.

       Note: An origin server might wish to use a relatively new HTTP
       cache control feature, such as the "private" directive, on a
       network including older caches that do not understand that
       feature. The origin server will need to combine the new feature
       with an Expires field whose value is less than or equal to the
       Date value. This will prevent older caches from improperly
       caching the response.







Fielding, et al.            Standards Track                   [Page 111](#btoc){id=b111}

RFC 2616                        HTTP/1.1                       June 1999


   s-maxage
       If a response includes an s-maxage directive, then for a shared
       cache (but not for a private cache), the maximum age specified by
       this directive overrides the maximum age specified by either the
       max-age directive or the Expires header. The s-maxage directive
       also implies the semantics of the proxy-revalidate directive (see
       section 14.9.4), i.e., that the shared cache must not use the
       entry after it becomes stale to respond to a subsequent request
       without first revalidating it with the origin server. The s-
       maxage directive is always ignored by a private cache.

   Note that most older caches, not compliant with this specification,
   do not implement any cache-control directives. An origin server
   wishing to use a cache-control directive that restricts, but does not
   prevent, caching by an HTTP/1.1-compliant cache MAY exploit the
   requirement that the max-age directive overrides the Expires header,
   and the fact that pre-HTTP/1.1-compliant caches do not observe the
   max-age directive.

   Other directives allow a user agent to modify the basic expiration
   mechanism. These directives MAY be specified on a request:

   max-age
      Indicates that the client is willing to accept a response whose
      age is no greater than the specified time in seconds. Unless max-
      stale directive is also included, the client is not willing to
      accept a stale response.

   min-fresh
      Indicates that the client is willing to accept a response whose
      freshness lifetime is no less than its current age plus the
      specified time in seconds. That is, the client wants a response
      that will still be fresh for at least the specified number of
      seconds.

   max-stale
      Indicates that the client is willing to accept a response that has
      exceeded its expiration time. If max-stale is assigned a value,
      then the client is willing to accept a response that has exceeded
      its expiration time by no more than the specified number of
      seconds. If no value is assigned to max-stale, then the client is
      willing to accept a stale response of any age.

   If a cache returns a stale response, either because of a max-stale
   directive on a request, or because the cache is configured to
   override the expiration time of a response, the cache MUST attach a
   Warning header to the stale response, using Warning 110 (Response is
   stale).



Fielding, et al.            Standards Track                   [Page 112](#btoc){id=b112}

RFC 2616                        HTTP/1.1                       June 1999


   A cache MAY be configured to return stale responses without
   validation, but only if this does not conflict with any "MUST"-level
   requirements concerning cache validation (e.g., a "must-revalidate"
   cache-control directive).

   If both the new request and the cached entry include "max-age"
   directives, then the lesser of the two values is used for determining
   the freshness of the cached entry for that request.

14.9.4 Cache Revalidation and Reload Controls
--------------------------------------------------------


   Sometimes a user agent might want or need to insist that a cache
   revalidate its cache entry with the origin server (and not just with
   the next cache along the path to the origin server), or to reload its
   cache entry from the origin server. End-to-end revalidation might be
   necessary if either the cache or the origin server has overestimated
   the expiration time of the cached response. End-to-end reload may be
   necessary if the cache entry has become corrupted for some reason.

   End-to-end revalidation may be requested either when the client does
   not have its own local cached copy, in which case we call it
   "unspecified end-to-end revalidation", or when the client does have a
   local cached copy, in which case we call it "specific end-to-end
   revalidation."

   The client can specify these three kinds of action using Cache-
   Control request directives:

   End-to-end reload
      The request includes a "no-cache" cache-control directive or, for
      compatibility with HTTP/1.0 clients, "Pragma: no-cache". Field
      names MUST NOT be included with the no-cache directive in a
      request. The server MUST NOT use a cached copy when responding to
      such a request.

   Specific end-to-end revalidation
      The request includes a "max-age=0" cache-control directive, which
      forces each cache along the path to the origin server to
      revalidate its own entry, if any, with the next cache or server.
      The initial request includes a cache-validating conditional with
      the client's current validator.

   Unspecified end-to-end revalidation
      The request includes "max-age=0" cache-control directive, which
      forces each cache along the path to the origin server to
      revalidate its own entry, if any, with the next cache or server.
      The initial request does not include a cache-validating




Fielding, et al.            Standards Track                   [Page 113](#btoc){id=b113}

RFC 2616                        HTTP/1.1                       June 1999


      conditional; the first cache along the path (if any) that holds a
      cache entry for this resource includes a cache-validating
      conditional with its current validator.

   max-age
      When an intermediate cache is forced, by means of a max-age=0
      directive, to revalidate its own cache entry, and the client has
      supplied its own validator in the request, the supplied validator
      might differ from the validator currently stored with the cache
      entry. In this case, the cache MAY use either validator in making
      its own request without affecting semantic transparency.

      However, the choice of validator might affect performance. The
      best approach is for the intermediate cache to use its own
      validator when making its request. If the server replies with 304
      (Not Modified), then the cache can return its now validated copy
      to the client with a 200 (OK) response. If the server replies with
      a new entity and cache validator, however, the intermediate cache
      can compare the returned validator with the one provided in the
      client's request, using the strong comparison function. If the
      client's validator is equal to the origin server's, then the
      intermediate cache simply returns 304 (Not Modified). Otherwise,
      it returns the new entity with a 200 (OK) response.

      If a request includes the no-cache directive, it SHOULD NOT
      include min-fresh, max-stale, or max-age.

   only-if-cached
      In some cases, such as times of extremely poor network
      connectivity, a client may want a cache to return only those
      responses that it currently has stored, and not to reload or
      revalidate with the origin server. To do this, the client may
      include the only-if-cached directive in a request. If it receives
      this directive, a cache SHOULD either respond using a cached entry
      that is consistent with the other constraints of the request, or
      respond with a 504 (Gateway Timeout) status. However, if a group
      of caches is being operated as a unified system with good internal
      connectivity, such a request MAY be forwarded within that group of
      caches.

   must-revalidate
      Because a cache MAY be configured to ignore a server's specified
      expiration time, and because a client request MAY include a max-
      stale directive (which has a similar effect), the protocol also
      includes a mechanism for the origin server to require revalidation
      of a cache entry on any subsequent use. When the must-revalidate
      directive is present in a response received by a cache, that cache
      MUST NOT use the entry after it becomes stale to respond to a



Fielding, et al.            Standards Track                   [Page 114](#btoc){id=b114}

RFC 2616                        HTTP/1.1                       June 1999


      subsequent request without first revalidating it with the origin
      server. (I.e., the cache MUST do an end-to-end revalidation every
      time, if, based solely on the origin server's Expires or max-age
      value, the cached response is stale.)

      The must-revalidate directive is necessary to support reliable
      operation for certain protocol features. In all circumstances an
      HTTP/1.1 cache MUST obey the must-revalidate directive; in
      particular, if the cache cannot reach the origin server for any
      reason, it MUST generate a 504 (Gateway Timeout) response.

      Servers SHOULD send the must-revalidate directive if and only if
      failure to revalidate a request on the entity could result in
      incorrect operation, such as a silently unexecuted financial
      transaction. Recipients MUST NOT take any automated action that
      violates this directive, and MUST NOT automatically provide an
      unvalidated copy of the entity if revalidation fails.

      Although this is not recommended, user agents operating under
      severe connectivity constraints MAY violate this directive but, if
      so, MUST explicitly warn the user that an unvalidated response has
      been provided. The warning MUST be provided on each unvalidated
      access, and SHOULD require explicit user confirmation.

   proxy-revalidate
      The proxy-revalidate directive has the same meaning as the must-
      revalidate directive, except that it does not apply to non-shared
      user agent caches. It can be used on a response to an
      authenticated request to permit the user's cache to store and
      later return the response without needing to revalidate it (since
      it has already been authenticated once by that user), while still
      requiring proxies that service many users to revalidate each time
      (in order to make sure that each user has been authenticated).
      Note that such authenticated responses also need the public cache
      control directive in order to allow them to be cached at all.

14.9.5 No-Transform Directive
--------------------------------------------------------


   no-transform
      Implementors of intermediate caches (proxies) have found it useful
      to convert the media type of certain entity bodies. A non-
      transparent proxy might, for example, convert between image
      formats in order to save cache space or to reduce the amount of
      traffic on a slow link.

      Serious operational problems occur, however, when these
      transformations are applied to entity bodies intended for certain
      kinds of applications. For example, applications for medical



Fielding, et al.            Standards Track                   [Page 115](#btoc){id=b115}

RFC 2616                        HTTP/1.1                       June 1999


      imaging, scientific data analysis and those using end-to-end
      authentication, all depend on receiving an entity body that is bit
      for bit identical to the original entity-body.

      Therefore, if a message includes the no-transform directive, an
      intermediate cache or proxy MUST NOT change those headers that are
      listed in section 13.5.2 as being subject to the no-transform
      directive. This implies that the cache or proxy MUST NOT change
      any aspect of the entity-body that is specified by these headers,
      including the value of the entity-body itself.

14.9.6 Cache Control Extensions
--------------------------------------------------------


   The Cache-Control header field can be extended through the use of one
   or more cache-extension tokens, each with an optional assigned value.
   Informational extensions (those which do not require a change in
   cache behavior) MAY be added without changing the semantics of other
   directives. Behavioral extensions are designed to work by acting as
   modifiers to the existing base of cache directives. Both the new
   directive and the standard directive are supplied, such that
   applications which do not understand the new directive will default
   to the behavior specified by the standard directive, and those that
   understand the new directive will recognize it as modifying the
   requirements associated with the standard directive. In this way,
   extensions to the cache-control directives can be made without
   requiring changes to the base protocol.

   This extension mechanism depends on an HTTP cache obeying all of the
   cache-control directives defined for its native HTTP-version, obeying
   certain extensions, and ignoring all directives that it does not
   understand.

   For example, consider a hypothetical new response directive called
   community which acts as a modifier to the private directive. We
   define this new directive to mean that, in addition to any non-shared
   cache, any cache which is shared only by members of the community
   named within its value may cache the response. An origin server
   wishing to allow the UCI community to use an otherwise private
   response in their shared cache(s) could do so by including

       Cache-Control: private, community="UCI"

   A cache seeing this header field will act correctly even if the cache
   does not understand the community cache-extension, since it will also
   see and understand the private directive and thus default to the safe
   behavior.





Fielding, et al.            Standards Track                   [Page 116](#btoc){id=b116}

RFC 2616                        HTTP/1.1                       June 1999


   Unrecognized cache-directives MUST be ignored; it is assumed that any
   cache-directive likely to be unrecognized by an HTTP/1.1 cache will
   be combined with standard directives (or the response's default
   cacheability) such that the cache behavior will remain minimally
   correct even if the cache does not understand the extension(s).

14.10 Connection
--------------------------------------------------------


   The Connection general-header field allows the sender to specify
   options that are desired for that particular connection and MUST NOT
   be communicated by proxies over further connections.

   The Connection header has the following grammar:

       Connection = "Connection" ":" 1#(connection-token)
       connection-token  = token

   HTTP/1.1 proxies MUST parse the Connection header field before a
   message is forwarded and, for each connection-token in this field,
   remove any header field(s) from the message with the same name as the
   connection-token. Connection options are signaled by the presence of
   a connection-token in the Connection header field, not by any
   corresponding additional header field(s), since the additional header
   field may not be sent if there are no parameters associated with that
   connection option.

   Message headers listed in the Connection header MUST NOT include
   end-to-end headers, such as Cache-Control.

   HTTP/1.1 defines the "close" connection option for the sender to
   signal that the connection will be closed after completion of the
   response. For example,

       Connection: close

   in either the request or the response header fields indicates that
   the connection SHOULD NOT be considered `persistent' (section 8.1)
   after the current request/response is complete.

   HTTP/1.1 applications that do not support persistent connections MUST
   include the "close" connection option in every message.

   A system receiving an HTTP/1.0 (or lower-version) message that
   includes a Connection header MUST, for each connection-token in this
   field, remove and ignore any header field(s) from the message with
   the same name as the connection-token. This protects against mistaken
   forwarding of such header fields by pre-HTTP/1.1 proxies. See section
   19.6.2.



Fielding, et al.            Standards Track                   [Page 117](#btoc){id=b117}

RFC 2616                        HTTP/1.1                       June 1999


14.11 Content-Encoding
--------------------------------------------------------


   The Content-Encoding entity-header field is used as a modifier to the
   media-type. When present, its value indicates what additional content
   codings have been applied to the entity-body, and thus what decoding
   mechanisms must be applied in order to obtain the media-type
   referenced by the Content-Type header field. Content-Encoding is
   primarily used to allow a document to be compressed without losing
   the identity of its underlying media type.

       Content-Encoding  = "Content-Encoding" ":" 1#content-coding

   Content codings are defined in section 3.5. An example of its use is

       Content-Encoding: gzip

   The content-coding is a characteristic of the entity identified by
   the Request-URI. Typically, the entity-body is stored with this
   encoding and is only decoded before rendering or analogous usage.
   However, a non-transparent proxy MAY modify the content-coding if the
   new coding is known to be acceptable to the recipient, unless the
   "no-transform" cache-control directive is present in the message.

   If the content-coding of an entity is not "identity", then the
   response MUST include a Content-Encoding entity-header (section
   14.11) that lists the non-identity content-coding(s) used.

   If the content-coding of an entity in a request message is not
   acceptable to the origin server, the server SHOULD respond with a
   status code of 415 (Unsupported Media Type).

   If multiple encodings have been applied to an entity, the content
   codings MUST be listed in the order in which they were applied.
   Additional information about the encoding parameters MAY be provided
   by other entity-header fields not defined by this specification.

14.12 Content-Language
--------------------------------------------------------


   The Content-Language entity-header field describes the natural
   language(s) of the intended audience for the enclosed entity. Note
   that this might not be equivalent to all the languages used within
   the entity-body.

       Content-Language  = "Content-Language" ":" 1#language-tag







Fielding, et al.            Standards Track                   [Page 118](#btoc){id=b118}

RFC 2616                        HTTP/1.1                       June 1999


   Language tags are defined in section 3.10. The primary purpose of
   Content-Language is to allow a user to identify and differentiate
   entities according to the user's own preferred language. Thus, if the
   body content is intended only for a Danish-literate audience, the
   appropriate field is

       Content-Language: da

   If no Content-Language is specified, the default is that the content
   is intended for all language audiences. This might mean that the
   sender does not consider it to be specific to any natural language,
   or that the sender does not know for which language it is intended.

   Multiple languages MAY be listed for content that is intended for
   multiple audiences. For example, a rendition of the "Treaty of
   Waitangi," presented simultaneously in the original Maori and English
   versions, would call for

       Content-Language: mi, en

   However, just because multiple languages are present within an entity
   does not mean that it is intended for multiple linguistic audiences.
   An example would be a beginner's language primer, such as "A First
   Lesson in Latin," which is clearly intended to be used by an
   English-literate audience. In this case, the Content-Language would
   properly only include "en".

   Content-Language MAY be applied to any media type -- it is not
   limited to textual documents.

14.13 Content-Length
--------------------------------------------------------


   The Content-Length entity-header field indicates the size of the
   entity-body, in decimal number of OCTETs, sent to the recipient or,
   in the case of the HEAD method, the size of the entity-body that
   would have been sent had the request been a GET.

       Content-Length    = "Content-Length" ":" 1*DIGIT

   An example is

       Content-Length: 3495

   Applications SHOULD use this field to indicate the transfer-length of
   the message-body, unless this is prohibited by the rules in section
   4.4.





Fielding, et al.            Standards Track                   [Page 119](#btoc){id=b119}

RFC 2616                        HTTP/1.1                       June 1999


   Any Content-Length greater than or equal to zero is a valid value.
   Section 4.4 describes how to determine the length of a message-body
   if a Content-Length is not given.

   Note that the meaning of this field is significantly different from
   the corresponding definition in MIME, where it is an optional field
   used within the "message/external-body" content-type. In HTTP, it
   SHOULD be sent whenever the message's length can be determined prior
   to being transferred, unless this is prohibited by the rules in
   section 4.4.

14.14 Content-Location
--------------------------------------------------------


   The Content-Location entity-header field MAY be used to supply the
   resource location for the entity enclosed in the message when that
   entity is accessible from a location separate from the requested
   resource's URI. A server SHOULD provide a Content-Location for the
   variant corresponding to the response entity; especially in the case
   where a resource has multiple entities associated with it, and those
   entities actually have separate locations by which they might be
   individually accessed, the server SHOULD provide a Content-Location
   for the particular variant which is returned.

       Content-Location = "Content-Location" ":"
                         ( absoluteURI | relativeURI )

   The value of Content-Location also defines the base URI for the
   entity.

   The Content-Location value is not a replacement for the original
   requested URI; it is only a statement of the location of the resource
   corresponding to this particular entity at the time of the request.
   Future requests MAY specify the Content-Location URI as the request-
   URI if the desire is to identify the source of that particular
   entity.

   A cache cannot assume that an entity with a Content-Location
   different from the URI used to retrieve it can be used to respond to
   later requests on that Content-Location URI. However, the Content-
   Location can be used to differentiate between multiple entities
   retrieved from a single requested resource, as described in section
   13.6.

   If the Content-Location is a relative URI, the relative URI is
   interpreted relative to the Request-URI.

   The meaning of the Content-Location header in PUT or POST requests is
   undefined; servers are free to ignore it in those cases.



Fielding, et al.            Standards Track                   [Page 120](#btoc){id=b120}

RFC 2616                        HTTP/1.1                       June 1999


14.15 Content-MD5
--------------------------------------------------------


   The Content-MD5 entity-header field, as defined in RFC 1864 [23], is
   an MD5 digest of the entity-body for the purpose of providing an
   end-to-end message integrity check (MIC) of the entity-body. (Note: a
   MIC is good for detecting accidental modification of the entity-body
   in transit, but is not proof against malicious attacks.)

        Content-MD5   = "Content-MD5" ":" md5-digest
        md5-digest   = <base64 of 128 bit MD5 digest as per RFC 1864>

   The Content-MD5 header field MAY be generated by an origin server or
   client to function as an integrity check of the entity-body. Only
   origin servers or clients MAY generate the Content-MD5 header field;
   proxies and gateways MUST NOT generate it, as this would defeat its
   value as an end-to-end integrity check. Any recipient of the entity-
   body, including gateways and proxies, MAY check that the digest value
   in this header field matches that of the entity-body as received.

   The MD5 digest is computed based on the content of the entity-body,
   including any content-coding that has been applied, but not including
   any transfer-encoding applied to the message-body. If the message is
   received with a transfer-encoding, that encoding MUST be removed
   prior to checking the Content-MD5 value against the received entity.

   This has the result that the digest is computed on the octets of the
   entity-body exactly as, and in the order that, they would be sent if
   no transfer-encoding were being applied.

   HTTP extends RFC 1864 to permit the digest to be computed for MIME
   composite media-types (e.g., multipart/* and message/rfc822), but
   this does not change how the digest is computed as defined in the
   preceding paragraph.

   There are several consequences of this. The entity-body for composite
   types MAY contain many body-parts, each with its own MIME and HTTP
   headers (including Content-MD5, Content-Transfer-Encoding, and
   Content-Encoding headers). If a body-part has a Content-Transfer-
   Encoding or Content-Encoding header, it is assumed that the content
   of the body-part has had the encoding applied, and the body-part is
   included in the Content-MD5 digest as is -- i.e., after the
   application. The Transfer-Encoding header field is not allowed within
   body-parts.

   Conversion of all line breaks to CRLF MUST NOT be done before
   computing or checking the digest: the line break convention used in
   the text actually transmitted MUST be left unaltered when computing
   the digest.



Fielding, et al.            Standards Track                   [Page 121](#btoc){id=b121}

RFC 2616                        HTTP/1.1                       June 1999


      Note: while the definition of Content-MD5 is exactly the same for
      HTTP as in RFC 1864 for MIME entity-bodies, there are several ways
      in which the application of Content-MD5 to HTTP entity-bodies
      differs from its application to MIME entity-bodies. One is that
      HTTP, unlike MIME, does not use Content-Transfer-Encoding, and
      does use Transfer-Encoding and Content-Encoding. Another is that
      HTTP more frequently uses binary content types than MIME, so it is
      worth noting that, in such cases, the byte order used to compute
      the digest is the transmission byte order defined for the type.
      Lastly, HTTP allows transmission of text types with any of several
      line break conventions and not just the canonical form using CRLF.

14.16 Content-Range
--------------------------------------------------------


   The Content-Range entity-header is sent with a partial entity-body to
   specify where in the full entity-body the partial body should be
   applied. Range units are defined in section 3.12.

       Content-Range = "Content-Range" ":" content-range-spec

       content-range-spec      = byte-content-range-spec
       byte-content-range-spec = bytes-unit SP
                                 byte-range-resp-spec "/"
                                 ( instance-length | "*" )

       byte-range-resp-spec = (first-byte-pos "-" last-byte-pos)
                                      | "*"
       instance-length           = 1*DIGIT

   The header SHOULD indicate the total length of the full entity-body,
   unless this length is unknown or difficult to determine. The asterisk
   "*" character means that the instance-length is unknown at the time
   when the response was generated.

   Unlike byte-ranges-specifier values (see section 14.35.1), a byte-
   range-resp-spec MUST only specify one range, and MUST contain
   absolute byte positions for both the first and last byte of the
   range.

   A byte-content-range-spec with a byte-range-resp-spec whose last-
   byte-pos value is less than its first-byte-pos value, or whose
   instance-length value is less than or equal to its last-byte-pos
   value, is invalid. The recipient of an invalid byte-content-range-
   spec MUST ignore it and any content transferred along with it.

   A server sending a response with status code 416 (Requested range not
   satisfiable) SHOULD include a Content-Range field with a byte-range-
   resp-spec of "*". The instance-length specifies the current length of



Fielding, et al.            Standards Track                   [Page 122](#btoc){id=b122}

RFC 2616                        HTTP/1.1                       June 1999


   the selected resource. A response with status code 206 (Partial
   Content) MUST NOT include a Content-Range field with a byte-range-
   resp-spec of "*".

   Examples of byte-content-range-spec values, assuming that the entity
   contains a total of 1234 bytes:

      . The first 500 bytes:
       bytes 0-499/1234

      . The second 500 bytes:
       bytes 500-999/1234

      . All except for the first 500 bytes:
       bytes 500-1233/1234

      . The last 500 bytes:
       bytes 734-1233/1234

   When an HTTP message includes the content of a single range (for
   example, a response to a request for a single range, or to a request
   for a set of ranges that overlap without any holes), this content is
   transmitted with a Content-Range header, and a Content-Length header
   showing the number of bytes actually transferred. For example,

       HTTP/1.1 206 Partial content
       Date: Wed, 15 Nov 1995 06:25:24 GMT
       Last-Modified: Wed, 15 Nov 1995 04:58:08 GMT
       Content-Range: bytes 21010-47021/47022
       Content-Length: 26012
       Content-Type: image/gif

   When an HTTP message includes the content of multiple ranges (for
   example, a response to a request for multiple non-overlapping
   ranges), these are transmitted as a multipart message. The multipart
   media type used for this purpose is "multipart/byteranges" as defined
   in appendix 19.2. See appendix 19.6.3 for a compatibility issue.

   A response to a request for a single range MUST NOT be sent using the
   multipart/byteranges media type.  A response to a request for
   multiple ranges, whose result is a single range, MAY be sent as a
   multipart/byteranges media type with one part. A client that cannot
   decode a multipart/byteranges message MUST NOT ask for multiple
   byte-ranges in a single request.

   When a client requests multiple byte-ranges in one request, the
   server SHOULD return them in the order that they appeared in the
   request.



Fielding, et al.            Standards Track                   [Page 123](#btoc){id=b123}

RFC 2616                        HTTP/1.1                       June 1999


   If the server ignores a byte-range-spec because it is syntactically
   invalid, the server SHOULD treat the request as if the invalid Range
   header field did not exist. (Normally, this means return a 200
   response containing the full entity).

   If the server receives a request (other than one including an If-
   Range request-header field) with an unsatisfiable Range request-
   header field (that is, all of whose byte-range-spec values have a
   first-byte-pos value greater than the current length of the selected
   resource), it SHOULD return a response code of 416 (Requested range
   not satisfiable) (section 10.4.17).

      Note: clients cannot depend on servers to send a 416 (Requested
      range not satisfiable) response instead of a 200 (OK) response for
      an unsatisfiable Range request-header, since not all servers
      implement this request-header.

14.17 Content-Type
--------------------------------------------------------


   The Content-Type entity-header field indicates the media type of the
   entity-body sent to the recipient or, in the case of the HEAD method,
   the media type that would have been sent had the request been a GET.

       Content-Type   = "Content-Type" ":" media-type

   Media types are defined in section 3.7. An example of the field is

       Content-Type: text/html; charset=ISO-8859-4

   Further discussion of methods for identifying the media type of an
   entity is provided in section 7.2.1.

14.18 Date
--------------------------------------------------------


   The Date general-header field represents the date and time at which
   the message was originated, having the same semantics as orig-date in
   RFC 822. The field value is an HTTP-date, as described in section
   3.3.1; it MUST be sent in RFC 1123 [8]-date format.

       Date  = "Date" ":" HTTP-date

   An example is

       Date: Tue, 15 Nov 1994 08:12:31 GMT

   Origin servers MUST include a Date header field in all responses,
   except in these cases:




Fielding, et al.            Standards Track                   [Page 124](#btoc){id=b124}

RFC 2616                        HTTP/1.1                       June 1999


      1. If the response status code is 100 (Continue) or 101 (Switching
         Protocols), the response MAY include a Date header field, at
         the server's option.

      2. If the response status code conveys a server error, e.g. 500
         (Internal Server Error) or 503 (Service Unavailable), and it is
         inconvenient or impossible to generate a valid Date.

      3. If the server does not have a clock that can provide a
         reasonable approximation of the current time, its responses
         MUST NOT include a Date header field. In this case, the rules
         in section 14.18.1 MUST be followed.

   A received message that does not have a Date header field MUST be
   assigned one by the recipient if the message will be cached by that
   recipient or gatewayed via a protocol which requires a Date. An HTTP
   implementation without a clock MUST NOT cache responses without
   revalidating them on every use. An HTTP cache, especially a shared
   cache, SHOULD use a mechanism, such as NTP [28], to synchronize its
   clock with a reliable external standard.

   Clients SHOULD only send a Date header field in messages that include
   an entity-body, as in the case of the PUT and POST requests, and even
   then it is optional. A client without a clock MUST NOT send a Date
   header field in a request.

   The HTTP-date sent in a Date header SHOULD NOT represent a date and
   time subsequent to the generation of the message. It SHOULD represent
   the best available approximation of the date and time of message
   generation, unless the implementation has no means of generating a
   reasonably accurate date and time. In theory, the date ought to
   represent the moment just before the entity is generated. In
   practice, the date can be generated at any time during the message
   origination without affecting its semantic value.

14.18.1 Clockless Origin Server Operation
--------------------------------------------------------


   Some origin server implementations might not have a clock available.
   An origin server without a clock MUST NOT assign Expires or Last-
   Modified values to a response, unless these values were associated
   with the resource by a system or user with a reliable clock. It MAY
   assign an Expires value that is known, at or before server
   configuration time, to be in the past (this allows "pre-expiration"
   of responses without storing separate Expires values for each
   resource).






Fielding, et al.            Standards Track                   [Page 125](#btoc){id=b125}

RFC 2616                        HTTP/1.1                       June 1999


14.19 ETag
--------------------------------------------------------


   The ETag response-header field provides the current value of the
   entity tag for the requested variant. The headers used with entity
   tags are described in sections 14.24, 14.26 and 14.44. The entity tag
   MAY be used for comparison with other entities from the same resource
   (see section 13.3.3).

      ETag = "ETag" ":" entity-tag

   Examples:

      ETag: "xyzzy"
      ETag: W/"xyzzy"
      ETag: ""

14.20 Expect
--------------------------------------------------------


   The Expect request-header field is used to indicate that particular
   server behaviors are required by the client.

      Expect       =  "Expect" ":" 1#expectation

      expectation  =  "100-continue" | expectation-extension
      expectation-extension =  token [ "=" ( token | quoted-string )
                               *expect-params ]
      expect-params =  ";" token [ "=" ( token | quoted-string ) ]


   A server that does not understand or is unable to comply with any of
   the expectation values in the Expect field of a request MUST respond
   with appropriate error status. The server MUST respond with a 417
   (Expectation Failed) status if any of the expectations cannot be met
   or, if there are other problems with the request, some other 4xx
   status.

   This header field is defined with extensible syntax to allow for
   future extensions. If a server receives a request containing an
   Expect field that includes an expectation-extension that it does not
   support, it MUST respond with a 417 (Expectation Failed) status.

   Comparison of expectation values is case-insensitive for unquoted
   tokens (including the 100-continue token), and is case-sensitive for
   quoted-string expectation-extensions.







Fielding, et al.            Standards Track                   [Page 126](#btoc){id=b126}

RFC 2616                        HTTP/1.1                       June 1999


   The Expect mechanism is hop-by-hop: that is, an HTTP/1.1 proxy MUST
   return a 417 (Expectation Failed) status if it receives a request
   with an expectation that it cannot meet. However, the Expect
   request-header itself is end-to-end; it MUST be forwarded if the
   request is forwarded.

   Many older HTTP/1.0 and HTTP/1.1 applications do not understand the
   Expect header.

   See section 8.2.3 for the use of the 100 (continue) status.

14.21 Expires
--------------------------------------------------------


   The Expires entity-header field gives the date/time after which the
   response is considered stale. A stale cache entry may not normally be
   returned by a cache (either a proxy cache or a user agent cache)
   unless it is first validated with the origin server (or with an
   intermediate cache that has a fresh copy of the entity). See section
   13.2 for further discussion of the expiration model.

   The presence of an Expires field does not imply that the original
   resource will change or cease to exist at, before, or after that
   time.

   The format is an absolute date and time as defined by HTTP-date in
   section 3.3.1; it MUST be in RFC 1123 date format:

      Expires = "Expires" ":" HTTP-date

   An example of its use is

      Expires: Thu, 01 Dec 1994 16:00:00 GMT

      Note: if a response includes a Cache-Control field with the max-
      age directive (see section 14.9.3), that directive overrides the
      Expires field.

   HTTP/1.1 clients and caches MUST treat other invalid date formats,
   especially including the value "0", as in the past (i.e., "already
   expired").

   To mark a response as "already expired," an origin server sends an
   Expires date that is equal to the Date header value. (See the rules
   for expiration calculations in section 13.2.4.)







Fielding, et al.            Standards Track                   [Page 127](#btoc){id=b127}

RFC 2616                        HTTP/1.1                       June 1999


   To mark a response as "never expires," an origin server sends an
   Expires date approximately one year from the time the response is
   sent. HTTP/1.1 servers SHOULD NOT send Expires dates more than one
   year in the future.

   The presence of an Expires header field with a date value of some
   time in the future on a response that otherwise would by default be
   non-cacheable indicates that the response is cacheable, unless
   indicated otherwise by a Cache-Control header field (section 14.9).

14.22 From
--------------------------------------------------------


   The From request-header field, if given, SHOULD contain an Internet
   e-mail address for the human user who controls the requesting user
   agent. The address SHOULD be machine-usable, as defined by "mailbox"
   in RFC 822 [9] as updated by RFC 1123 [8]:

       From   = "From" ":" mailbox

   An example is:

       From: webmaster@w3.org

   This header field MAY be used for logging purposes and as a means for
   identifying the source of invalid or unwanted requests. It SHOULD NOT
   be used as an insecure form of access protection. The interpretation
   of this field is that the request is being performed on behalf of the
   person given, who accepts responsibility for the method performed. In
   particular, robot agents SHOULD include this header so that the
   person responsible for running the robot can be contacted if problems
   occur on the receiving end.

   The Internet e-mail address in this field MAY be separate from the
   Internet host which issued the request. For example, when a request
   is passed through a proxy the original issuer's address SHOULD be
   used.

   The client SHOULD NOT send the From header field without the user's
   approval, as it might conflict with the user's privacy interests or
   their site's security policy. It is strongly recommended that the
   user be able to disable, enable, and modify the value of this field
   at any time prior to a request.

14.23 Host
--------------------------------------------------------


   The Host request-header field specifies the Internet host and port
   number of the resource being requested, as obtained from the original
   URI given by the user or referring resource (generally an HTTP URL,



Fielding, et al.            Standards Track                   [Page 128](#btoc){id=b128}

RFC 2616                        HTTP/1.1                       June 1999


   as described in section 3.2.2). The Host field value MUST represent
   the naming authority of the origin server or gateway given by the
   original URL. This allows the origin server or gateway to
   differentiate between internally-ambiguous URLs, such as the root "/"
   URL of a server for multiple host names on a single IP address.

       Host = "Host" ":" host [ ":" port ] ; Section 3.2.2

   A "host" without any trailing port information implies the default
   port for the service requested (e.g., "80" for an HTTP URL). For
   example, a request on the origin server for
   <http://www.w3.org/pub/WWW/> would properly include:

       GET /pub/WWW/ HTTP/1.1
       Host: www.w3.org

   A client MUST include a Host header field in all HTTP/1.1 request
   messages . If the requested URI does not include an Internet host
   name for the service being requested, then the Host header field MUST
   be given with an empty value. An HTTP/1.1 proxy MUST ensure that any
   request message it forwards does contain an appropriate Host header
   field that identifies the service being requested by the proxy. All
   Internet-based HTTP/1.1 servers MUST respond with a 400 (Bad Request)
   status code to any HTTP/1.1 request message which lacks a Host header
   field.

   See sections 5.2 and 19.6.1.1 for other requirements relating to
   Host.

14.24 If-Match
--------------------------------------------------------


   The If-Match request-header field is used with a method to make it
   conditional. A client that has one or more entities previously
   obtained from the resource can verify that one of those entities is
   current by including a list of their associated entity tags in the
   If-Match header field. Entity tags are defined in section 3.11. The
   purpose of this feature is to allow efficient updates of cached
   information with a minimum amount of transaction overhead. It is also
   used, on updating requests, to prevent inadvertent modification of
   the wrong version of a resource. As a special case, the value "*"
   matches any current entity of the resource.

       If-Match = "If-Match" ":" ( "*" | 1#entity-tag )

   If any of the entity tags match the entity tag of the entity that
   would have been returned in the response to a similar GET request
   (without the If-Match header) on that resource, or if "*" is given




Fielding, et al.            Standards Track                   [Page 129](#btoc){id=b129}

RFC 2616                        HTTP/1.1                       June 1999


   and any current entity exists for that resource, then the server MAY
   perform the requested method as if the If-Match header field did not
   exist.

   A server MUST use the strong comparison function (see section 13.3.3)
   to compare the entity tags in If-Match.

   If none of the entity tags match, or if "*" is given and no current
   entity exists, the server MUST NOT perform the requested method, and
   MUST return a 412 (Precondition Failed) response. This behavior is
   most useful when the client wants to prevent an updating method, such
   as PUT, from modifying a resource that has changed since the client
   last retrieved it.

   If the request would, without the If-Match header field, result in
   anything other than a 2xx or 412 status, then the If-Match header
   MUST be ignored.

   The meaning of "If-Match: *" is that the method SHOULD be performed
   if the representation selected by the origin server (or by a cache,
   possibly using the Vary mechanism, see section 14.44) exists, and
   MUST NOT be performed if the representation does not exist.

   A request intended to update a resource (e.g., a PUT) MAY include an
   If-Match header field to signal that the request method MUST NOT be
   applied if the entity corresponding to the If-Match value (a single
   entity tag) is no longer a representation of that resource. This
   allows the user to indicate that they do not wish the request to be
   successful if the resource has been changed without their knowledge.
   Examples:

       If-Match: "xyzzy"
       If-Match: "xyzzy", "r2d2xxxx", "c3piozzzz"
       If-Match: *

   The result of a request having both an If-Match header field and
   either an If-None-Match or an If-Modified-Since header fields is
   undefined by this specification.

14.25 If-Modified-Since
--------------------------------------------------------


   The If-Modified-Since request-header field is used with a method to
   make it conditional: if the requested variant has not been modified
   since the time specified in this field, an entity will not be
   returned from the server; instead, a 304 (not modified) response will
   be returned without any message-body.

       If-Modified-Since = "If-Modified-Since" ":" HTTP-date



Fielding, et al.            Standards Track                   [Page 130](#btoc){id=b130}

RFC 2616                        HTTP/1.1                       June 1999


   An example of the field is:

       If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT

   A GET method with an If-Modified-Since header and no Range header
   requests that the identified entity be transferred only if it has
   been modified since the date given by the If-Modified-Since header.
   The algorithm for determining this includes the following cases:

      a) If the request would normally result in anything other than a
         200 (OK) status, or if the passed If-Modified-Since date is
         invalid, the response is exactly the same as for a normal GET.
         A date which is later than the server's current time is
         invalid.

      b) If the variant has been modified since the If-Modified-Since
         date, the response is exactly the same as for a normal GET.

      c) If the variant has not been modified since a valid If-
         Modified-Since date, the server SHOULD return a 304 (Not
         Modified) response.

   The purpose of this feature is to allow efficient updates of cached
   information with a minimum amount of transaction overhead.

      Note: The Range request-header field modifies the meaning of If-
      Modified-Since; see section 14.35 for full details.

      Note: If-Modified-Since times are interpreted by the server, whose
      clock might not be synchronized with the client.

      Note: When handling an If-Modified-Since header field, some
      servers will use an exact date comparison function, rather than a
      less-than function, for deciding whether to send a 304 (Not
      Modified) response. To get best results when sending an If-
      Modified-Since header field for cache validation, clients are
      advised to use the exact date string received in a previous Last-
      Modified header field whenever possible.

      Note: If a client uses an arbitrary date in the If-Modified-Since
      header instead of a date taken from the Last-Modified header for
      the same request, the client should be aware of the fact that this
      date is interpreted in the server's understanding of time. The
      client should consider unsynchronized clocks and rounding problems
      due to the different encodings of time between the client and
      server. This includes the possibility of race conditions if the
      document has changed between the time it was first requested and
      the If-Modified-Since date of a subsequent request, and the



Fielding, et al.            Standards Track                   [Page 131](#btoc){id=b131}

RFC 2616                        HTTP/1.1                       June 1999


      possibility of clock-skew-related problems if the If-Modified-
      Since date is derived from the client's clock without correction
      to the server's clock. Corrections for different time bases
      between client and server are at best approximate due to network
      latency.

   The result of a request having both an If-Modified-Since header field
   and either an If-Match or an If-Unmodified-Since header fields is
   undefined by this specification.

14.26 If-None-Match
--------------------------------------------------------


   The If-None-Match request-header field is used with a method to make
   it conditional. A client that has one or more entities previously
   obtained from the resource can verify that none of those entities is
   current by including a list of their associated entity tags in the
   If-None-Match header field. The purpose of this feature is to allow
   efficient updates of cached information with a minimum amount of
   transaction overhead. It is also used to prevent a method (e.g. PUT)
   from inadvertently modifying an existing resource when the client
   believes that the resource does not exist.

   As a special case, the value "*" matches any current entity of the
   resource.

       If-None-Match = "If-None-Match" ":" ( "*" | 1#entity-tag )

   If any of the entity tags match the entity tag of the entity that
   would have been returned in the response to a similar GET request
   (without the If-None-Match header) on that resource, or if "*" is
   given and any current entity exists for that resource, then the
   server MUST NOT perform the requested method, unless required to do
   so because the resource's modification date fails to match that
   supplied in an If-Modified-Since header field in the request.
   Instead, if the request method was GET or HEAD, the server SHOULD
   respond with a 304 (Not Modified) response, including the cache-
   related header fields (particularly ETag) of one of the entities that
   matched. For all other request methods, the server MUST respond with
   a status of 412 (Precondition Failed).

   See section 13.3.3 for rules on how to determine if two entities tags
   match. The weak comparison function can only be used with GET or HEAD
   requests.








Fielding, et al.            Standards Track                   [Page 132](#btoc){id=b132}

RFC 2616                        HTTP/1.1                       June 1999


   If none of the entity tags match, then the server MAY perform the
   requested method as if the If-None-Match header field did not exist,
   but MUST also ignore any If-Modified-Since header field(s) in the
   request. That is, if no entity tags match, then the server MUST NOT
   return a 304 (Not Modified) response.

   If the request would, without the If-None-Match header field, result
   in anything other than a 2xx or 304 status, then the If-None-Match
   header MUST be ignored. (See section 13.3.4 for a discussion of
   server behavior when both If-Modified-Since and If-None-Match appear
   in the same request.)

   The meaning of "If-None-Match: *" is that the method MUST NOT be
   performed if the representation selected by the origin server (or by
   a cache, possibly using the Vary mechanism, see section 14.44)
   exists, and SHOULD be performed if the representation does not exist.
   This feature is intended to be useful in preventing races between PUT
   operations.

   Examples:

       If-None-Match: "xyzzy"
       If-None-Match: W/"xyzzy"
       If-None-Match: "xyzzy", "r2d2xxxx", "c3piozzzz"
       If-None-Match: W/"xyzzy", W/"r2d2xxxx", W/"c3piozzzz"
       If-None-Match: *

   The result of a request having both an If-None-Match header field and
   either an If-Match or an If-Unmodified-Since header fields is
   undefined by this specification.

14.27 If-Range
--------------------------------------------------------


   If a client has a partial copy of an entity in its cache, and wishes
   to have an up-to-date copy of the entire entity in its cache, it
   could use the Range request-header with a conditional GET (using
   either or both of If-Unmodified-Since and If-Match.) However, if the
   condition fails because the entity has been modified, the client
   would then have to make a second request to obtain the entire current
   entity-body.

   The If-Range header allows a client to "short-circuit" the second
   request. Informally, its meaning is `if the entity is unchanged, send
   me the part(s) that I am missing; otherwise, send me the entire new
   entity'.

        If-Range = "If-Range" ":" ( entity-tag | HTTP-date )




Fielding, et al.            Standards Track                   [Page 133](#btoc){id=b133}

RFC 2616                        HTTP/1.1                       June 1999


   If the client has no entity tag for an entity, but does have a Last-
   Modified date, it MAY use that date in an If-Range header. (The
   server can distinguish between a valid HTTP-date and any form of
   entity-tag by examining no more than two characters.) The If-Range
   header SHOULD only be used together with a Range header, and MUST be
   ignored if the request does not include a Range header, or if the
   server does not support the sub-range operation.

   If the entity tag given in the If-Range header matches the current
   entity tag for the entity, then the server SHOULD provide the
   specified sub-range of the entity using a 206 (Partial content)
   response. If the entity tag does not match, then the server SHOULD
   return the entire entity using a 200 (OK) response.

14.28 If-Unmodified-Since
--------------------------------------------------------


   The If-Unmodified-Since request-header field is used with a method to
   make it conditional. If the requested resource has not been modified
   since the time specified in this field, the server SHOULD perform the
   requested operation as if the If-Unmodified-Since header were not
   present.

   If the requested variant has been modified since the specified time,
   the server MUST NOT perform the requested operation, and MUST return
   a 412 (Precondition Failed).

      If-Unmodified-Since = "If-Unmodified-Since" ":" HTTP-date

   An example of the field is:

       If-Unmodified-Since: Sat, 29 Oct 1994 19:43:31 GMT

   If the request normally (i.e., without the If-Unmodified-Since
   header) would result in anything other than a 2xx or 412 status, the
   If-Unmodified-Since header SHOULD be ignored.

   If the specified date is invalid, the header is ignored.

   The result of a request having both an If-Unmodified-Since header
   field and either an If-None-Match or an If-Modified-Since header
   fields is undefined by this specification.

14.29 Last-Modified
--------------------------------------------------------


   The Last-Modified entity-header field indicates the date and time at
   which the origin server believes the variant was last modified.

       Last-Modified  = "Last-Modified" ":" HTTP-date



Fielding, et al.            Standards Track                   [Page 134](#btoc){id=b134}

RFC 2616                        HTTP/1.1                       June 1999


   An example of its use is

       Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT

   The exact meaning of this header field depends on the implementation
   of the origin server and the nature of the original resource. For
   files, it may be just the file system last-modified time. For
   entities with dynamically included parts, it may be the most recent
   of the set of last-modify times for its component parts. For database
   gateways, it may be the last-update time stamp of the record. For
   virtual objects, it may be the last time the internal state changed.

   An origin server MUST NOT send a Last-Modified date which is later
   than the server's time of message origination. In such cases, where
   the resource's last modification would indicate some time in the
   future, the server MUST replace that date with the message
   origination date.

   An origin server SHOULD obtain the Last-Modified value of the entity
   as close as possible to the time that it generates the Date value of
   its response. This allows a recipient to make an accurate assessment
   of the entity's modification time, especially if the entity changes
   near the time that the response is generated.

   HTTP/1.1 servers SHOULD send Last-Modified whenever feasible.

14.30 Location
--------------------------------------------------------


   The Location response-header field is used to redirect the recipient
   to a location other than the Request-URI for completion of the
   request or identification of a new resource. For 201 (Created)
   responses, the Location is that of the new resource which was created
   by the request. For 3xx responses, the location SHOULD indicate the
   server's preferred URI for automatic redirection to the resource. The
   field value consists of a single absolute URI.

       Location       = "Location" ":" absoluteURI

   An example is:

       Location: http://www.w3.org/pub/WWW/People.html

      Note: The Content-Location header field (section 14.14) differs
      from Location in that the Content-Location identifies the original
      location of the entity enclosed in the request. It is therefore
      possible for a response to contain header fields for both Location
      and Content-Location. Also see section 13.10 for cache
      requirements of some methods.



Fielding, et al.            Standards Track                   [Page 135](#btoc){id=b135}

RFC 2616                        HTTP/1.1                       June 1999


14.31 Max-Forwards
--------------------------------------------------------


   The Max-Forwards request-header field provides a mechanism with the
   TRACE (section 9.8) and OPTIONS (section 9.2) methods to limit the
   number of proxies or gateways that can forward the request to the
   next inbound server. This can be useful when the client is attempting
   to trace a request chain which appears to be failing or looping in
   mid-chain.

       Max-Forwards   = "Max-Forwards" ":" 1*DIGIT

   The Max-Forwards value is a decimal integer indicating the remaining
   number of times this request message may be forwarded.

   Each proxy or gateway recipient of a TRACE or OPTIONS request
   containing a Max-Forwards header field MUST check and update its
   value prior to forwarding the request. If the received value is zero
   (0), the recipient MUST NOT forward the request; instead, it MUST
   respond as the final recipient. If the received Max-Forwards value is
   greater than zero, then the forwarded message MUST contain an updated
   Max-Forwards field with a value decremented by one (1).

   The Max-Forwards header field MAY be ignored for all other methods
   defined by this specification and for any extension methods for which
   it is not explicitly referred to as part of that method definition.

14.32 Pragma
--------------------------------------------------------


   The Pragma general-header field is used to include implementation-
   specific directives that might apply to any recipient along the
   request/response chain. All pragma directives specify optional
   behavior from the viewpoint of the protocol; however, some systems
   MAY require that behavior be consistent with the directives.

       Pragma            = "Pragma" ":" 1#pragma-directive
       pragma-directive  = "no-cache" | extension-pragma
       extension-pragma  = token [ "=" ( token | quoted-string ) ]

   When the no-cache directive is present in a request message, an
   application SHOULD forward the request toward the origin server even
   if it has a cached copy of what is being requested. This pragma
   directive has the same semantics as the no-cache cache-directive (see
   section 14.9) and is defined here for backward compatibility with
   HTTP/1.0. Clients SHOULD include both header fields when a no-cache
   request is sent to a server not known to be HTTP/1.1 compliant.






Fielding, et al.            Standards Track                   [Page 136](#btoc){id=b136}

RFC 2616                        HTTP/1.1                       June 1999


   Pragma directives MUST be passed through by a proxy or gateway
   application, regardless of their significance to that application,
   since the directives might be applicable to all recipients along the
   request/response chain. It is not possible to specify a pragma for a
   specific recipient; however, any pragma directive not relevant to a
   recipient SHOULD be ignored by that recipient.

   HTTP/1.1 caches SHOULD treat "Pragma: no-cache" as if the client had
   sent "Cache-Control: no-cache". No new Pragma directives will be
   defined in HTTP.

      Note: because the meaning of "Pragma: no-cache as a response
      header field is not actually specified, it does not provide a
      reliable replacement for "Cache-Control: no-cache" in a response

14.33 Proxy-Authenticate
--------------------------------------------------------


   The Proxy-Authenticate response-header field MUST be included as part
   of a 407 (Proxy Authentication Required) response. The field value
   consists of a challenge that indicates the authentication scheme and
   parameters applicable to the proxy for this Request-URI.

       Proxy-Authenticate  = "Proxy-Authenticate" ":" 1#challenge

   The HTTP access authentication process is described in "HTTP
   Authentication: Basic and Digest Access Authentication" [43]. Unlike
   WWW-Authenticate, the Proxy-Authenticate header field applies only to
   the current connection and SHOULD NOT be passed on to downstream
   clients. However, an intermediate proxy might need to obtain its own
   credentials by requesting them from the downstream client, which in
   some circumstances will appear as if the proxy is forwarding the
   Proxy-Authenticate header field.

14.34 Proxy-Authorization
--------------------------------------------------------


   The Proxy-Authorization request-header field allows the client to
   identify itself (or its user) to a proxy which requires
   authentication. The Proxy-Authorization field value consists of
   credentials containing the authentication information of the user
   agent for the proxy and/or realm of the resource being requested.

       Proxy-Authorization     = "Proxy-Authorization" ":" credentials

   The HTTP access authentication process is described in "HTTP
   Authentication: Basic and Digest Access Authentication" [43] . Unlike
   Authorization, the Proxy-Authorization header field applies only to
   the next outbound proxy that demanded authentication using the Proxy-
   Authenticate field. When multiple proxies are used in a chain, the



Fielding, et al.            Standards Track                   [Page 137](#btoc){id=b137}

RFC 2616                        HTTP/1.1                       June 1999


   Proxy-Authorization header field is consumed by the first outbound
   proxy that was expecting to receive credentials. A proxy MAY relay
   the credentials from the client request to the next proxy if that is
   the mechanism by which the proxies cooperatively authenticate a given
   request.

14.35 Range
--------------------------------------------------------


14.35.1 Byte Ranges
--------------------------------------------------------


   Since all HTTP entities are represented in HTTP messages as sequences
   of bytes, the concept of a byte range is meaningful for any HTTP
   entity. (However, not all clients and servers need to support byte-
   range operations.)

   Byte range specifications in HTTP apply to the sequence of bytes in
   the entity-body (not necessarily the same as the message-body).

   A byte range operation MAY specify a single range of bytes, or a set
   of ranges within a single entity.

       ranges-specifier = byte-ranges-specifier
       byte-ranges-specifier = bytes-unit "=" byte-range-set
       byte-range-set  = 1#( byte-range-spec | suffix-byte-range-spec )
       byte-range-spec = first-byte-pos "-" [last-byte-pos]
       first-byte-pos  = 1*DIGIT
       last-byte-pos   = 1*DIGIT

   The first-byte-pos value in a byte-range-spec gives the byte-offset
   of the first byte in a range. The last-byte-pos value gives the
   byte-offset of the last byte in the range; that is, the byte
   positions specified are inclusive. Byte offsets start at zero.

   If the last-byte-pos value is present, it MUST be greater than or
   equal to the first-byte-pos in that byte-range-spec, or the byte-
   range-spec is syntactically invalid. The recipient of a byte-range-
   set that includes one or more syntactically invalid byte-range-spec
   values MUST ignore the header field that includes that byte-range-
   set.

   If the last-byte-pos value is absent, or if the value is greater than
   or equal to the current length of the entity-body, last-byte-pos is
   taken to be equal to one less than the current length of the entity-
   body in bytes.

   By its choice of last-byte-pos, a client can limit the number of
   bytes retrieved without knowing the size of the entity.




Fielding, et al.            Standards Track                   [Page 138](#btoc){id=b138}

RFC 2616                        HTTP/1.1                       June 1999


       suffix-byte-range-spec = "-" suffix-length
       suffix-length = 1*DIGIT

   A suffix-byte-range-spec is used to specify the suffix of the
   entity-body, of a length given by the suffix-length value. (That is,
   this form specifies the last N bytes of an entity-body.) If the
   entity is shorter than the specified suffix-length, the entire
   entity-body is used.

   If a syntactically valid byte-range-set includes at least one byte-
   range-spec whose first-byte-pos is less than the current length of
   the entity-body, or at least one suffix-byte-range-spec with a non-
   zero suffix-length, then the byte-range-set is satisfiable.
   Otherwise, the byte-range-set is unsatisfiable. If the byte-range-set
   is unsatisfiable, the server SHOULD return a response with a status
   of 416 (Requested range not satisfiable). Otherwise, the server
   SHOULD return a response with a status of 206 (Partial Content)
   containing the satisfiable ranges of the entity-body.

   Examples of byte-ranges-specifier values (assuming an entity-body of
   length 10000):

      - The first 500 bytes (byte offsets 0-499, inclusive):  bytes=0-
        499

      - The second 500 bytes (byte offsets 500-999, inclusive):
        bytes=500-999

      - The final 500 bytes (byte offsets 9500-9999, inclusive):
        bytes=-500

      - Or bytes=9500-

      - The first and last bytes only (bytes 0 and 9999):  bytes=0-0,-1

      - Several legal but not canonical specifications of the second 500
        bytes (byte offsets 500-999, inclusive):
         bytes=500-600,601-999
         bytes=500-700,601-999

14.35.2 Range Retrieval Requests
--------------------------------------------------------


   HTTP retrieval requests using conditional or unconditional GET
   methods MAY request one or more sub-ranges of the entity, instead of
   the entire entity, using the Range request header, which applies to
   the entity returned as the result of the request:

      Range = "Range" ":" ranges-specifier



Fielding, et al.            Standards Track                   [Page 139](#btoc){id=b139}

RFC 2616                        HTTP/1.1                       June 1999


   A server MAY ignore the Range header. However, HTTP/1.1 origin
   servers and intermediate caches ought to support byte ranges when
   possible, since Range supports efficient recovery from partially
   failed transfers, and supports efficient partial retrieval of large
   entities.

   If the server supports the Range header and the specified range or
   ranges are appropriate for the entity:

      - The presence of a Range header in an unconditional GET modifies
        what is returned if the GET is otherwise successful. In other
        words, the response carries a status code of 206 (Partial
        Content) instead of 200 (OK).

      - The presence of a Range header in a conditional GET (a request
        using one or both of If-Modified-Since and If-None-Match, or
        one or both of If-Unmodified-Since and If-Match) modifies what
        is returned if the GET is otherwise successful and the
        condition is true. It does not affect the 304 (Not Modified)
        response returned if the conditional is false.

   In some cases, it might be more appropriate to use the If-Range
   header (see section 14.27) in addition to the Range header.

   If a proxy that supports ranges receives a Range request, forwards
   the request to an inbound server, and receives an entire entity in
   reply, it SHOULD only return the requested range to its client. It
   SHOULD store the entire received response in its cache if that is
   consistent with its cache allocation policies.

14.36 Referer
--------------------------------------------------------


   The Referer[sic] request-header field allows the client to specify,
   for the server's benefit, the address (URI) of the resource from
   which the Request-URI was obtained (the "referrer", although the
   header field is misspelled.) The Referer request-header allows a
   server to generate lists of back-links to resources for interest,
   logging, optimized caching, etc. It also allows obsolete or mistyped
   links to be traced for maintenance. The Referer field MUST NOT be
   sent if the Request-URI was obtained from a source that does not have
   its own URI, such as input from the user keyboard.

       Referer        = "Referer" ":" ( absoluteURI | relativeURI )

   Example:

       Referer: http://www.w3.org/hypertext/DataSources/Overview.html




Fielding, et al.            Standards Track                   [Page 140](#btoc){id=b140}

RFC 2616                        HTTP/1.1                       June 1999


   If the field value is a relative URI, it SHOULD be interpreted
   relative to the Request-URI. The URI MUST NOT include a fragment. See
   section 15.1.3 for security considerations.

14.37 Retry-After
--------------------------------------------------------


   The Retry-After response-header field can be used with a 503 (Service
   Unavailable) response to indicate how long the service is expected to
   be unavailable to the requesting client. This field MAY also be used
   with any 3xx (Redirection) response to indicate the minimum time the
   user-agent is asked wait before issuing the redirected request. The
   value of this field can be either an HTTP-date or an integer number
   of seconds (in decimal) after the time of the response.

       Retry-After  = "Retry-After" ":" ( HTTP-date | delta-seconds )

   Two examples of its use are

       Retry-After: Fri, 31 Dec 1999 23:59:59 GMT
       Retry-After: 120

   In the latter example, the delay is 2 minutes.

14.38 Server
--------------------------------------------------------


   The Server response-header field contains information about the
   software used by the origin server to handle the request. The field
   can contain multiple product tokens (section 3.8) and comments
   identifying the server and any significant subproducts. The product
   tokens are listed in order of their significance for identifying the
   application.

       Server         = "Server" ":" 1*( product | comment )

   Example:

       Server: CERN/3.0 libwww/2.17

   If the response is being forwarded through a proxy, the proxy
   application MUST NOT modify the Server response-header. Instead, it
   SHOULD include a Via field (as described in section 14.45).

      Note: Revealing the specific software version of the server might
      allow the server machine to become more vulnerable to attacks
      against software that is known to contain security holes. Server
      implementors are encouraged to make this field a configurable
      option.




Fielding, et al.            Standards Track                   [Page 141](#btoc){id=b141}

RFC 2616                        HTTP/1.1                       June 1999


14.39 TE
--------------------------------------------------------


   The TE request-header field indicates what extension transfer-codings
   it is willing to accept in the response and whether or not it is
   willing to accept trailer fields in a chunked transfer-coding. Its
   value may consist of the keyword "trailers" and/or a comma-separated
   list of extension transfer-coding names with optional accept
   parameters (as described in section 3.6).

       TE        = "TE" ":" #( t-codings )
       t-codings = "trailers" | ( transfer-extension [ accept-params ] )

   The presence of the keyword "trailers" indicates that the client is
   willing to accept trailer fields in a chunked transfer-coding, as
   defined in section 3.6.1. This keyword is reserved for use with
   transfer-coding values even though it does not itself represent a
   transfer-coding.

   Examples of its use are:

       TE: deflate
       TE:
       TE: trailers, deflate;q=0.5

   The TE header field only applies to the immediate connection.
   Therefore, the keyword MUST be supplied within a Connection header
   field (section 14.10) whenever TE is present in an HTTP/1.1 message.

   A server tests whether a transfer-coding is acceptable, according to
   a TE field, using these rules:

      1. The "chunked" transfer-coding is always acceptable. If the
         keyword "trailers" is listed, the client indicates that it is
         willing to accept trailer fields in the chunked response on
         behalf of itself and any downstream clients. The implication is
         that, if given, the client is stating that either all
         downstream clients are willing to accept trailer fields in the
         forwarded response, or that it will attempt to buffer the
         response on behalf of downstream recipients.

         Note: HTTP/1.1 does not define any means to limit the size of a
         chunked response such that a client can be assured of buffering
         the entire response.

      2. If the transfer-coding being tested is one of the transfer-
         codings listed in the TE field, then it is acceptable unless it
         is accompanied by a qvalue of 0. (As defined in section 3.9, a
         qvalue of 0 means "not acceptable.")



Fielding, et al.            Standards Track                   [Page 142](#btoc){id=b142}

RFC 2616                        HTTP/1.1                       June 1999


      3. If multiple transfer-codings are acceptable, then the
         acceptable transfer-coding with the highest non-zero qvalue is
         preferred.  The "chunked" transfer-coding always has a qvalue
         of 1.

   If the TE field-value is empty or if no TE field is present, the only
   transfer-coding  is "chunked". A message with no transfer-coding is
   always acceptable.

14.40 Trailer
--------------------------------------------------------


   The Trailer general field value indicates that the given set of
   header fields is present in the trailer of a message encoded with
   chunked transfer-coding.

       Trailer  = "Trailer" ":" 1#field-name

   An HTTP/1.1 message SHOULD include a Trailer header field in a
   message using chunked transfer-coding with a non-empty trailer. Doing
   so allows the recipient to know which header fields to expect in the
   trailer.

   If no Trailer header field is present, the trailer SHOULD NOT include
   any header fields. See section 3.6.1 for restrictions on the use of
   trailer fields in a "chunked" transfer-coding.

   Message header fields listed in the Trailer header field MUST NOT
   include the following header fields:

      . Transfer-Encoding

      . Content-Length

      . Trailer

14.41 Transfer-Encoding
--------------------------------------------------------


   The Transfer-Encoding general-header field indicates what (if any)
   type of transformation has been applied to the message body in order
   to safely transfer it between the sender and the recipient. This
   differs from the content-coding in that the transfer-coding is a
   property of the message, not of the entity.

     Transfer-Encoding       = "Transfer-Encoding" ":" 1#transfer-coding

   Transfer-codings are defined in section 3.6. An example is:

     Transfer-Encoding: chunked



Fielding, et al.            Standards Track                   [Page 143](#btoc){id=b143}

RFC 2616                        HTTP/1.1                       June 1999


   If multiple encodings have been applied to an entity, the transfer-
   codings MUST be listed in the order in which they were applied.
   Additional information about the encoding parameters MAY be provided
   by other entity-header fields not defined by this specification.

   Many older HTTP/1.0 applications do not understand the Transfer-
   Encoding header.

14.42 Upgrade
--------------------------------------------------------


   The Upgrade general-header allows the client to specify what
   additional communication protocols it supports and would like to use
   if the server finds it appropriate to switch protocols. The server
   MUST use the Upgrade header field within a 101 (Switching Protocols)
   response to indicate which protocol(s) are being switched.

       Upgrade        = "Upgrade" ":" 1#product

   For example,

       Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11

   The Upgrade header field is intended to provide a simple mechanism
   for transition from HTTP/1.1 to some other, incompatible protocol. It
   does so by allowing the client to advertise its desire to use another
   protocol, such as a later version of HTTP with a higher major version
   number, even though the current request has been made using HTTP/1.1.
   This eases the difficult transition between incompatible protocols by
   allowing the client to initiate a request in the more commonly
   supported protocol while indicating to the server that it would like
   to use a "better" protocol if available (where "better" is determined
   by the server, possibly according to the nature of the method and/or
   resource being requested).

   The Upgrade header field only applies to switching application-layer
   protocols upon the existing transport-layer connection. Upgrade
   cannot be used to insist on a protocol change; its acceptance and use
   by the server is optional. The capabilities and nature of the
   application-layer communication after the protocol change is entirely
   dependent upon the new protocol chosen, although the first action
   after changing the protocol MUST be a response to the initial HTTP
   request containing the Upgrade header field.

   The Upgrade header field only applies to the immediate connection.
   Therefore, the upgrade keyword MUST be supplied within a Connection
   header field (section 14.10) whenever Upgrade is present in an
   HTTP/1.1 message.




Fielding, et al.            Standards Track                   [Page 144](#btoc){id=b144}

RFC 2616                        HTTP/1.1                       June 1999


   The Upgrade header field cannot be used to indicate a switch to a
   protocol on a different connection. For that purpose, it is more
   appropriate to use a 301, 302, 303, or 305 redirection response.

   This specification only defines the protocol name "HTTP" for use by
   the family of Hypertext Transfer Protocols, as defined by the HTTP
   version rules of section 3.1 and future updates to this
   specification. Any token can be used as a protocol name; however, it
   will only be useful if both the client and server associate the name
   with the same protocol.

14.43 User-Agent
--------------------------------------------------------


   The User-Agent request-header field contains information about the
   user agent originating the request. This is for statistical purposes,
   the tracing of protocol violations, and automated recognition of user
   agents for the sake of tailoring responses to avoid particular user
   agent limitations. User agents SHOULD include this field with
   requests. The field can contain multiple product tokens (section 3.8)
   and comments identifying the agent and any subproducts which form a
   significant part of the user agent. By convention, the product tokens
   are listed in order of their significance for identifying the
   application.

       User-Agent     = "User-Agent" ":" 1*( product | comment )

   Example:

       User-Agent: CERN-LineMode/2.15 libwww/2.17b3

14.44 Vary
--------------------------------------------------------


   The Vary field value indicates the set of request-header fields that
   fully determines, while the response is fresh, whether a cache is
   permitted to use the response to reply to a subsequent request
   without revalidation. For uncacheable or stale responses, the Vary
   field value advises the user agent about the criteria that were used
   to select the representation. A Vary field value of "*" implies that
   a cache cannot determine from the request headers of a subsequent
   request whether this response is the appropriate representation. See
   section 13.6 for use of the Vary header field by caches.

       Vary  = "Vary" ":" ( "*" | 1#field-name )

   An HTTP/1.1 server SHOULD include a Vary header field with any
   cacheable response that is subject to server-driven negotiation.
   Doing so allows a cache to properly interpret future requests on that
   resource and informs the user agent about the presence of negotiation



Fielding, et al.            Standards Track                   [Page 145](#btoc){id=b145}

RFC 2616                        HTTP/1.1                       June 1999


   on that resource. A server MAY include a Vary header field with a
   non-cacheable response that is subject to server-driven negotiation,
   since this might provide the user agent with useful information about
   the dimensions over which the response varies at the time of the
   response.

   A Vary field value consisting of a list of field-names signals that
   the representation selected for the response is based on a selection
   algorithm which considers ONLY the listed request-header field values
   in selecting the most appropriate representation. A cache MAY assume
   that the same selection will be made for future requests with the
   same values for the listed field names, for the duration of time for
   which the response is fresh.

   The field-names given are not limited to the set of standard
   request-header fields defined by this specification. Field names are
   case-insensitive.

   A Vary field value of "*" signals that unspecified parameters not
   limited to the request-headers (e.g., the network address of the
   client), play a role in the selection of the response representation.
   The "*" value MUST NOT be generated by a proxy server; it may only be
   generated by an origin server.

14.45  Via
--------------------------------------------------------


   The Via general-header field MUST be used by gateways and proxies to
   indicate the intermediate protocols and recipients between the user
   agent and the server on requests, and between the origin server and
   the client on responses. It is analogous to the "Received" field of
   RFC 822 [9] and is intended to be used for tracking message forwards,
   avoiding request loops, and identifying the protocol capabilities of
   all senders along the request/response chain.

      Via =  "Via" ":" 1#( received-protocol received-by [ comment ] )
      received-protocol = [ protocol-name "/" ] protocol-version
      protocol-name     = token
      protocol-version  = token
      received-by       = ( host [ ":" port ] ) | pseudonym
      pseudonym         = token

   The received-protocol indicates the protocol version of the message
   received by the server or client along each segment of the
   request/response chain. The received-protocol version is appended to
   the Via field value when the message is forwarded so that information
   about the protocol capabilities of upstream applications remains
   visible to all recipients.




Fielding, et al.            Standards Track                   [Page 146](#btoc){id=b146}

RFC 2616                        HTTP/1.1                       June 1999


   The protocol-name is optional if and only if it would be "HTTP". The
   received-by field is normally the host and optional port number of a
   recipient server or client that subsequently forwarded the message.
   However, if the real host is considered to be sensitive information,
   it MAY be replaced by a pseudonym. If the port is not given, it MAY
   be assumed to be the default port of the received-protocol.

   Multiple Via field values represents each proxy or gateway that has
   forwarded the message. Each recipient MUST append its information
   such that the end result is ordered according to the sequence of
   forwarding applications.

   Comments MAY be used in the Via header field to identify the software
   of the recipient proxy or gateway, analogous to the User-Agent and
   Server header fields. However, all comments in the Via field are
   optional and MAY be removed by any recipient prior to forwarding the
   message.

   For example, a request message could be sent from an HTTP/1.0 user
   agent to an internal proxy code-named "fred", which uses HTTP/1.1 to
   forward the request to a public proxy at nowhere.com, which completes
   the request by forwarding it to the origin server at www.ics.uci.edu.
   The request received by www.ics.uci.edu would then have the following
   Via header field:

       Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1)

   Proxies and gateways used as a portal through a network firewall
   SHOULD NOT, by default, forward the names and ports of hosts within
   the firewall region. This information SHOULD only be propagated if
   explicitly enabled. If not enabled, the received-by host of any host
   behind the firewall SHOULD be replaced by an appropriate pseudonym
   for that host.

   For organizations that have strong privacy requirements for hiding
   internal structures, a proxy MAY combine an ordered subsequence of
   Via header field entries with identical received-protocol values into
   a single such entry. For example,

       Via: 1.0 ricky, 1.1 ethel, 1.1 fred, 1.0 lucy

        could be collapsed to

       Via: 1.0 ricky, 1.1 mertz, 1.0 lucy







Fielding, et al.            Standards Track                   [Page 147](#btoc){id=b147}

RFC 2616                        HTTP/1.1                       June 1999


   Applications SHOULD NOT combine multiple entries unless they are all
   under the same organizational control and the hosts have already been
   replaced by pseudonyms. Applications MUST NOT combine entries which
   have different received-protocol values.

14.46 Warning
--------------------------------------------------------


   The Warning general-header field is used to carry additional
   information about the status or transformation of a message which
   might not be reflected in the message. This information is typically
   used to warn about a possible lack of semantic transparency from
   caching operations or transformations applied to the entity body of
   the message.

   Warning headers are sent with responses using:

       Warning    = "Warning" ":" 1#warning-value

       warning-value = warn-code SP warn-agent SP warn-text
                                             [SP warn-date]

       warn-code  = 3DIGIT
       warn-agent = ( host [ ":" port ] ) | pseudonym
                       ; the name or pseudonym of the server adding
                       ; the Warning header, for use in debugging
       warn-text  = quoted-string
       warn-date  = <"> HTTP-date <">

   A response MAY carry more than one Warning header.

   The warn-text SHOULD be in a natural language and character set that
   is most likely to be intelligible to the human user receiving the
   response. This decision MAY be based on any available knowledge, such
   as the location of the cache or user, the Accept-Language field in a
   request, the Content-Language field in a response, etc. The default
   language is English and the default character set is ISO-8859-1.

   If a character set other than ISO-8859-1 is used, it MUST be encoded
   in the warn-text using the method described in RFC 2047 [14].

   Warning headers can in general be applied to any message, however
   some specific warn-codes are specific to caches and can only be
   applied to response messages. New Warning headers SHOULD be added
   after any existing Warning headers. A cache MUST NOT delete any
   Warning header that it received with a message. However, if a cache
   successfully validates a cache entry, it SHOULD remove any Warning
   headers previously attached to that entry except as specified for




Fielding, et al.            Standards Track                   [Page 148](#btoc){id=b148}

RFC 2616                        HTTP/1.1                       June 1999


   specific Warning codes. It MUST then add any Warning headers received
   in the validating response. In other words, Warning headers are those
   that would be attached to the most recent relevant response.

   When multiple Warning headers are attached to a response, the user
   agent ought to inform the user of as many of them as possible, in the
   order that they appear in the response. If it is not possible to
   inform the user of all of the warnings, the user agent SHOULD follow
   these heuristics:

      - Warnings that appear early in the response take priority over
        those appearing later in the response.

      - Warnings in the user's preferred character set take priority
        over warnings in other character sets but with identical warn-
        codes and warn-agents.

   Systems that generate multiple Warning headers SHOULD order them with
   this user agent behavior in mind.

   Requirements for the behavior of caches with respect to Warnings are
   stated in section 13.1.2.

   This is a list of the currently-defined warn-codes, each with a
   recommended warn-text in English, and a description of its meaning.

   110 Response is stale
     MUST be included whenever the returned response is stale.

   111 Revalidation failed
     MUST be included if a cache returns a stale response because an
     attempt to revalidate the response failed, due to an inability to
     reach the server.

   112 Disconnected operation
     SHOULD be included if the cache is intentionally disconnected from
     the rest of the network for a period of time.

   113 Heuristic expiration
     MUST be included if the cache heuristically chose a freshness
     lifetime greater than 24 hours and the response's age is greater
     than 24 hours.

   199 Miscellaneous warning
     The warning text MAY include arbitrary information to be presented
     to a human user, or logged. A system receiving this warning MUST
     NOT take any automated action, besides presenting the warning to
     the user.



Fielding, et al.            Standards Track                   [Page 149](#btoc){id=b149}

RFC 2616                        HTTP/1.1                       June 1999


   214 Transformation applied
     MUST be added by an intermediate cache or proxy if it applies any
     transformation changing the content-coding (as specified in the
     Content-Encoding header) or media-type (as specified in the
     Content-Type header) of the response, or the entity-body of the
     response, unless this Warning code already appears in the response.

   299 Miscellaneous persistent warning
     The warning text MAY include arbitrary information to be presented
     to a human user, or logged. A system receiving this warning MUST
     NOT take any automated action.

   If an implementation sends a message with one or more Warning headers
   whose version is HTTP/1.0 or lower, then the sender MUST include in
   each warning-value a warn-date that matches the date in the response.

   If an implementation receives a message with a warning-value that
   includes a warn-date, and that warn-date is different from the Date
   value in the response, then that warning-value MUST be deleted from
   the message before storing, forwarding, or using it. (This prevents
   bad consequences of naive caching of Warning header fields.) If all
   of the warning-values are deleted for this reason, the Warning header
   MUST be deleted as well.

14.47 WWW-Authenticate
--------------------------------------------------------


   The WWW-Authenticate response-header field MUST be included in 401
   (Unauthorized) response messages. The field value consists of at
   least one challenge that indicates the authentication scheme(s) and
   parameters applicable to the Request-URI.

       WWW-Authenticate  = "WWW-Authenticate" ":" 1#challenge

   The HTTP access authentication process is described in "HTTP
   Authentication: Basic and Digest Access Authentication" [43]. User
   agents are advised to take special care in parsing the WWW-
   Authenticate field value as it might contain more than one challenge,
   or if more than one WWW-Authenticate header field is provided, the
   contents of a challenge itself can contain a comma-separated list of
   authentication parameters.

/15 Security Considerations
========================================================



   This section is meant to inform application developers, information
   providers, and users of the security limitations in HTTP/1.1 as
   described by this document. The discussion does not include
   definitive solutions to the problems revealed, though it does make
   some suggestions for reducing security risks.



Fielding, et al.            Standards Track                   [Page 150](#btoc){id=b150}

RFC 2616                        HTTP/1.1                       June 1999


15.1 Personal Information
--------------------------------------------------------


   HTTP clients are often privy to large amounts of personal information
   (e.g. the user's name, location, mail address, passwords, encryption
   keys, etc.), and SHOULD be very careful to prevent unintentional
   leakage of this information via the HTTP protocol to other sources.
   We very strongly recommend that a convenient interface be provided
   for the user to control dissemination of such information, and that
   designers and implementors be particularly careful in this area.
   History shows that errors in this area often create serious security
   and/or privacy problems and generate highly adverse publicity for the
   implementor's company.

15.1.1 Abuse of Server Log Information
--------------------------------------------------------


   A server is in the position to save personal data about a user's
   requests which might identify their reading patterns or subjects of
   interest. This information is clearly confidential in nature and its
   handling can be constrained by law in certain countries. People using
   the HTTP protocol to provide data are responsible for ensuring that
   such material is not distributed without the permission of any
   individuals that are identifiable by the published results.

15.1.2 Transfer of Sensitive Information
--------------------------------------------------------


   Like any generic data transfer protocol, HTTP cannot regulate the
   content of the data that is transferred, nor is there any a priori
   method of determining the sensitivity of any particular piece of
   information within the context of any given request. Therefore,
   applications SHOULD supply as much control over this information as
   possible to the provider of that information. Four header fields are
   worth special mention in this context: Server, Via, Referer and From.

   Revealing the specific software version of the server might allow the
   server machine to become more vulnerable to attacks against software
   that is known to contain security holes. Implementors SHOULD make the
   Server header field a configurable option.

   Proxies which serve as a portal through a network firewall SHOULD
   take special precautions regarding the transfer of header information
   that identifies the hosts behind the firewall. In particular, they
   SHOULD remove, or replace with sanitized versions, any Via fields
   generated behind the firewall.

   The Referer header allows reading patterns to be studied and reverse
   links drawn. Although it can be very useful, its power can be abused
   if user details are not separated from the information contained in




Fielding, et al.            Standards Track                   [Page 151](#btoc){id=b151}

RFC 2616                        HTTP/1.1                       June 1999


   the Referer. Even when the personal information has been removed, the
   Referer header might indicate a private document's URI whose
   publication would be inappropriate.

   The information sent in the From field might conflict with the user's
   privacy interests or their site's security policy, and hence it
   SHOULD NOT be transmitted without the user being able to disable,
   enable, and modify the contents of the field. The user MUST be able
   to set the contents of this field within a user preference or
   application defaults configuration.

   We suggest, though do not require, that a convenient toggle interface
   be provided for the user to enable or disable the sending of From and
   Referer information.

   The User-Agent (section 14.43) or Server (section 14.38) header
   fields can sometimes be used to determine that a specific client or
   server have a particular security hole which might be exploited.
   Unfortunately, this same information is often used for other valuable
   purposes for which HTTP currently has no better mechanism.

15.1.3 Encoding Sensitive Information in URI's
--------------------------------------------------------


   Because the source of a link might be private information or might
   reveal an otherwise private information source, it is strongly
   recommended that the user be able to select whether or not the
   Referer field is sent. For example, a browser client could have a
   toggle switch for browsing openly/anonymously, which would
   respectively enable/disable the sending of Referer and From
   information.

   Clients SHOULD NOT include a Referer header field in a (non-secure)
   HTTP request if the referring page was transferred with a secure
   protocol.

   Authors of services which use the HTTP protocol SHOULD NOT use GET
   based forms for the submission of sensitive data, because this will
   cause this data to be encoded in the Request-URI. Many existing
   servers, proxies, and user agents will log the request URI in some
   place where it might be visible to third parties. Servers can use
   POST-based form submission instead

15.1.4 Privacy Issues Connected to Accept Headers
--------------------------------------------------------


   Accept request-headers can reveal information about the user to all
   servers which are accessed. The Accept-Language header in particular
   can reveal information the user would consider to be of a private
   nature, because the understanding of particular languages is often



Fielding, et al.            Standards Track                   [Page 152](#btoc){id=b152}

RFC 2616                        HTTP/1.1                       June 1999


   strongly correlated to the membership of a particular ethnic group.
   User agents which offer the option to configure the contents of an
   Accept-Language header to be sent in every request are strongly
   encouraged to let the configuration process include a message which
   makes the user aware of the loss of privacy involved.

   An approach that limits the loss of privacy would be for a user agent
   to omit the sending of Accept-Language headers by default, and to ask
   the user whether or not to start sending Accept-Language headers to a
   server if it detects, by looking for any Vary response-header fields
   generated by the server, that such sending could improve the quality
   of service.

   Elaborate user-customized accept header fields sent in every request,
   in particular if these include quality values, can be used by servers
   as relatively reliable and long-lived user identifiers. Such user
   identifiers would allow content providers to do click-trail tracking,
   and would allow collaborating content providers to match cross-server
   click-trails or form submissions of individual users. Note that for
   many users not behind a proxy, the network address of the host
   running the user agent will also serve as a long-lived user
   identifier. In environments where proxies are used to enhance
   privacy, user agents ought to be conservative in offering accept
   header configuration options to end users. As an extreme privacy
   measure, proxies could filter the accept headers in relayed requests.
   General purpose user agents which provide a high degree of header
   configurability SHOULD warn users about the loss of privacy which can
   be involved.

15.2 Attacks Based On File and Path Names
--------------------------------------------------------


   Implementations of HTTP origin servers SHOULD be careful to restrict
   the documents returned by HTTP requests to be only those that were
   intended by the server administrators. If an HTTP server translates
   HTTP URIs directly into file system calls, the server MUST take
   special care not to serve files that were not intended to be
   delivered to HTTP clients. For example, UNIX, Microsoft Windows, and
   other operating systems use ".." as a path component to indicate a
   directory level above the current one. On such a system, an HTTP
   server MUST disallow any such construct in the Request-URI if it
   would otherwise allow access to a resource outside those intended to
   be accessible via the HTTP server. Similarly, files intended for
   reference only internally to the server (such as access control
   files, configuration files, and script code) MUST be protected from
   inappropriate retrieval, since they might contain sensitive
   information. Experience has shown that minor bugs in such HTTP server
   implementations have turned into security risks.




Fielding, et al.            Standards Track                   [Page 153](#btoc){id=b153}

RFC 2616                        HTTP/1.1                       June 1999


15.3 DNS Spoofing
--------------------------------------------------------


   Clients using HTTP rely heavily on the Domain Name Service, and are
   thus generally prone to security attacks based on the deliberate
   mis-association of IP addresses and DNS names. Clients need to be
   cautious in assuming the continuing validity of an IP number/DNS name
   association.

   In particular, HTTP clients SHOULD rely on their name resolver for
   confirmation of an IP number/DNS name association, rather than
   caching the result of previous host name lookups. Many platforms
   already can cache host name lookups locally when appropriate, and
   they SHOULD be configured to do so. It is proper for these lookups to
   be cached, however, only when the TTL (Time To Live) information
   reported by the name server makes it likely that the cached
   information will remain useful.

   If HTTP clients cache the results of host name lookups in order to
   achieve a performance improvement, they MUST observe the TTL
   information reported by DNS.

   If HTTP clients do not observe this rule, they could be spoofed when
   a previously-accessed server's IP address changes. As network
   renumbering is expected to become increasingly common [24], the
   possibility of this form of attack will grow. Observing this
   requirement thus reduces this potential security vulnerability.

   This requirement also improves the load-balancing behavior of clients
   for replicated servers using the same DNS name and reduces the
   likelihood of a user's experiencing failure in accessing sites which
   use that strategy.

15.4 Location Headers and Spoofing
--------------------------------------------------------


   If a single server supports multiple organizations that do not trust
   one another, then it MUST check the values of Location and Content-
   Location headers in responses that are generated under control of
   said organizations to make sure that they do not attempt to
   invalidate resources over which they have no authority.

15.5 Content-Disposition Issues
--------------------------------------------------------


   RFC 1806 [35], from which the often implemented Content-Disposition
   (see section 19.5.1) header in HTTP is derived, has a number of very
   serious security considerations. Content-Disposition is not part of
   the HTTP standard, but since it is widely implemented, we are
   documenting its use and risks for implementors. See RFC 2183 [49]
   (which updates RFC 1806) for details.



Fielding, et al.            Standards Track                   [Page 154](#btoc){id=b154}

RFC 2616                        HTTP/1.1                       June 1999


15.6 Authentication Credentials and Idle Clients
--------------------------------------------------------


   Existing HTTP clients and user agents typically retain authentication
   information indefinitely. HTTP/1.1. does not provide a method for a
   server to direct clients to discard these cached credentials. This is
   a significant defect that requires further extensions to HTTP.
   Circumstances under which credential caching can interfere with the
   application's security model include but are not limited to:

      - Clients which have been idle for an extended period following
        which the server might wish to cause the client to reprompt the
        user for credentials.

      - Applications which include a session termination indication
        (such as a `logout' or `commit' button on a page) after which
        the server side of the application `knows' that there is no
        further reason for the client to retain the credentials.

   This is currently under separate study. There are a number of work-
   arounds to parts of this problem, and we encourage the use of
   password protection in screen savers, idle time-outs, and other
   methods which mitigate the security problems inherent in this
   problem. In particular, user agents which cache credentials are
   encouraged to provide a readily accessible mechanism for discarding
   cached credentials under user control.

15.7 Proxies and Caching
--------------------------------------------------------


   By their very nature, HTTP proxies are men-in-the-middle, and
   represent an opportunity for man-in-the-middle attacks. Compromise of
   the systems on which the proxies run can result in serious security
   and privacy problems. Proxies have access to security-related
   information, personal information about individual users and
   organizations, and proprietary information belonging to users and
   content providers. A compromised proxy, or a proxy implemented or
   configured without regard to security and privacy considerations,
   might be used in the commission of a wide range of potential attacks.

   Proxy operators should protect the systems on which proxies run as
   they would protect any system that contains or transports sensitive
   information. In particular, log information gathered at proxies often
   contains highly sensitive personal information, and/or information
   about organizations. Log information should be carefully guarded, and
   appropriate guidelines for use developed and followed. (Section
   15.1.1).






Fielding, et al.            Standards Track                   [Page 155](#btoc){id=b155}

RFC 2616                        HTTP/1.1                       June 1999


   Caching proxies provide additional potential vulnerabilities, since
   the contents of the cache represent an attractive target for
   malicious exploitation. Because cache contents persist after an HTTP
   request is complete, an attack on the cache can reveal information
   long after a user believes that the information has been removed from
   the network. Therefore, cache contents should be protected as
   sensitive information.

   Proxy implementors should consider the privacy and security
   implications of their design and coding decisions, and of the
   configuration options they provide to proxy operators (especially the
   default configuration).

   Users of a proxy need to be aware that they are no trustworthier than
   the people who run the proxy; HTTP itself cannot solve this problem.

   The judicious use of cryptography, when appropriate, may suffice to
   protect against a broad range of security and privacy attacks. Such
   cryptography is beyond the scope of the HTTP/1.1 specification.

15.7.1 Denial of Service Attacks on Proxies
--------------------------------------------------------


   They exist. They are hard to defend against. Research continues.
   Beware.

/16 Acknowledgments
========================================================



   This specification makes heavy use of the augmented BNF and generic
   constructs defined by David H. Crocker for RFC 822 [9]. Similarly, it
   reuses many of the definitions provided by Nathaniel Borenstein and
   Ned Freed for MIME [7]. We hope that their inclusion in this
   specification will help reduce past confusion over the relationship
   between HTTP and Internet mail message formats.

   The HTTP protocol has evolved considerably over the years. It has
   benefited from a large and active developer community--the many
   people who have participated on the www-talk mailing list--and it is
   that community which has been most responsible for the success of
   HTTP and of the World-Wide Web in general. Marc Andreessen, Robert
   Cailliau, Daniel W. Connolly, Bob Denny, John Franks, Jean-Francois
   Groff, Phillip M. Hallam-Baker, Hakon W. Lie, Ari Luotonen, Rob
   McCool, Lou Montulli, Dave Raggett, Tony Sanders, and Marc
   VanHeyningen deserve special recognition for their efforts in
   defining early aspects of the protocol.

   This document has benefited greatly from the comments of all those
   participating in the HTTP-WG. In addition to those already mentioned,
   the following individuals have contributed to this specification:



Fielding, et al.            Standards Track                   [Page 156](#btoc){id=b156}

RFC 2616                        HTTP/1.1                       June 1999


       Gary Adams                  Ross Patterson
       Harald Tveit Alvestrand     Albert Lunde
       Keith Ball                  John C. Mallery
       Brian Behlendorf            Jean-Philippe Martin-Flatin
       Paul Burchard               Mitra
       Maurizio Codogno            David Morris
       Mike Cowlishaw              Gavin Nicol
       Roman Czyborra              Bill Perry
       Michael A. Dolan            Jeffrey Perry
       David J. Fiander            Scott Powers
       Alan Freier                 Owen Rees
       Marc Hedlund                Luigi Rizzo
       Greg Herlihy                David Robinson
       Koen Holtman                Marc Salomon
       Alex Hopmann                Rich Salz
       Bob Jernigan                Allan M. Schiffman
       Shel Kaphan                 Jim Seidman
       Rohit Khare                 Chuck Shotton
       John Klensin                Eric W. Sink
       Martijn Koster              Simon E. Spero
       Alexei Kosut                Richard N. Taylor
       David M. Kristol            Robert S. Thau
       Daniel LaLiberte            Bill (BearHeart) Weinman
       Ben Laurie                  Francois Yergeau
       Paul J. Leach               Mary Ellen Zurko
       Daniel DuBois               Josh Cohen


   Much of the content and presentation of the caching design is due to
   suggestions and comments from individuals including: Shel Kaphan,
   Paul Leach, Koen Holtman, David Morris, and Larry Masinter.

   Most of the specification of ranges is based on work originally done
   by Ari Luotonen and John Franks, with additional input from Steve
   Zilles.

   Thanks to the "cave men" of Palo Alto. You know who you are.

   Jim Gettys (the current editor of this document) wishes particularly
   to thank Roy Fielding, the previous editor of this document, along
   with John Klensin, Jeff Mogul, Paul Leach, Dave Kristol, Koen
   Holtman, John Franks, Josh Cohen, Alex Hopmann, Scott Lawrence, and
   Larry Masinter for their help. And thanks go particularly to Jeff
   Mogul and Scott Lawrence for performing the "MUST/MAY/SHOULD" audit.







Fielding, et al.            Standards Track                   [Page 157](#btoc){id=b157}

RFC 2616                        HTTP/1.1                       June 1999


   The Apache Group, Anselm Baird-Smith, author of Jigsaw, and Henrik
   Frystyk implemented RFC 2068 early, and we wish to thank them for the
   discovery of many of the problems that this document attempts to
   rectify.

/17 References
========================================================



   [1] Alvestrand, H., "Tags for the Identification of Languages", RFC
       1766, March 1995.

   [2] Anklesaria, F., McCahill, M., Lindner, P., Johnson, D., Torrey,
       D. and B. Alberti, "The Internet Gopher Protocol (a distributed
       document search and retrieval protocol)", RFC 1436, March 1993.

   [3] Berners-Lee, T., "Universal Resource Identifiers in WWW", RFC
       1630, June 1994.

   [4] Berners-Lee, T., Masinter, L. and M. McCahill, "Uniform Resource
       Locators (URL)", RFC 1738, December 1994.

   [5] Berners-Lee, T. and D. Connolly, "Hypertext Markup Language -
       2.0", RFC 1866, November 1995.

   [6] Berners-Lee, T., Fielding, R. and H. Frystyk, "Hypertext Transfer
       Protocol -- HTTP/1.0", RFC 1945, May 1996.

   [7] Freed, N. and N. Borenstein, "Multipurpose Internet Mail
       Extensions (MIME) Part One: Format of Internet Message Bodies",
       RFC 2045, November 1996.

   [8] Braden, R., "Requirements for Internet Hosts -- Communication
       Layers", STD 3, RFC 1123, October 1989.

   [9] Crocker, D., "Standard for The Format of ARPA Internet Text
       Messages", STD 11, RFC 822, August 1982.

   [10] Davis, F., Kahle, B., Morris, H., Salem, J., Shen, T., Wang, R.,
        Sui, J., and M. Grinbaum, "WAIS Interface Protocol Prototype
        Functional Specification," (v1.5), Thinking Machines
        Corporation, April 1990.

   [11] Fielding, R., "Relative Uniform Resource Locators", RFC 1808,
        June 1995.

   [12] Horton, M. and R. Adams, "Standard for Interchange of USENET
        Messages", RFC 1036, December 1987.





Fielding, et al.            Standards Track                   [Page 158](#btoc){id=b158}

RFC 2616                        HTTP/1.1                       June 1999


   [13] Kantor, B. and P. Lapsley, "Network News Transfer Protocol", RFC
        977, February 1986.

   [14] Moore, K., "MIME (Multipurpose Internet Mail Extensions) Part
        Three: Message Header Extensions for Non-ASCII Text", RFC 2047,
        November 1996.

   [15] Nebel, E. and L. Masinter, "Form-based File Upload in HTML", RFC
        1867, November 1995.

   [16] Postel, J., "Simple Mail Transfer Protocol", STD 10, RFC 821,
        August 1982.

   [17] Postel, J., "Media Type Registration Procedure", RFC 1590,
        November 1996.

   [18] Postel, J. and J. Reynolds, "File Transfer Protocol", STD 9, RFC
        959, October 1985.

   [19] Reynolds, J. and J. Postel, "Assigned Numbers", STD 2, RFC 1700,
        October 1994.

   [20] Sollins, K. and L. Masinter, "Functional Requirements for
        Uniform Resource Names", RFC 1737, December 1994.

   [21] US-ASCII. Coded Character Set - 7-Bit American Standard Code for
        Information Interchange. Standard ANSI X3.4-1986, ANSI, 1986.

   [22] ISO-8859. International Standard -- Information Processing --
        8-bit Single-Byte Coded Graphic Character Sets --
        Part 1: Latin alphabet No. 1, ISO-8859-1:1987.
        Part 2: Latin alphabet No. 2, ISO-8859-2, 1987.
        Part 3: Latin alphabet No. 3, ISO-8859-3, 1988.
        Part 4: Latin alphabet No. 4, ISO-8859-4, 1988.
        Part 5: Latin/Cyrillic alphabet, ISO-8859-5, 1988.
        Part 6: Latin/Arabic alphabet, ISO-8859-6, 1987.
        Part 7: Latin/Greek alphabet, ISO-8859-7, 1987.
        Part 8: Latin/Hebrew alphabet, ISO-8859-8, 1988.
        Part 9: Latin alphabet No. 5, ISO-8859-9, 1990.

   [23] Meyers, J. and M. Rose, "The Content-MD5 Header Field", RFC
        1864, October 1995.

   [24] Carpenter, B. and Y. Rekhter, "Renumbering Needs Work", RFC
        1900, February 1996.

   [25] Deutsch, P., "GZIP file format specification version 4.3", RFC
        1952, May 1996.



Fielding, et al.            Standards Track                   [Page 159](#btoc){id=b159}

RFC 2616                        HTTP/1.1                       June 1999


   [26] Venkata N. Padmanabhan, and Jeffrey C. Mogul. "Improving HTTP
        Latency", Computer Networks and ISDN Systems, v. 28, pp. 25-35,
        Dec. 1995. Slightly revised version of paper in Proc. 2nd
        International WWW Conference '94: Mosaic and the Web, Oct. 1994,
        which is available at
        http://www.ncsa.uiuc.edu/SDG/IT94/Proceedings/DDay/mogul/HTTPLat
        ency.html.

   [27] Joe Touch, John Heidemann, and Katia Obraczka. "Analysis of HTTP
        Performance", <URL: http://www.isi.edu/touch/pubs/http-perf96/>,
        ISI Research Report ISI/RR-98-463, (original report dated Aug.
        1996), USC/Information Sciences Institute, August 1998.

   [28] Mills, D., "Network Time Protocol (Version 3) Specification,
        Implementation and Analysis", RFC 1305, March 1992.

   [29] Deutsch, P., "DEFLATE Compressed Data Format Specification
        version 1.3", RFC 1951, May 1996.

   [30] S. Spero, "Analysis of HTTP Performance Problems,"
        http://sunsite.unc.edu/mdma-release/http-prob.html.

   [31] Deutsch, P. and J. Gailly, "ZLIB Compressed Data Format
        Specification version 3.3", RFC 1950, May 1996.

   [32] Franks, J., Hallam-Baker, P., Hostetler, J., Leach, P.,
        Luotonen, A., Sink, E. and L. Stewart, "An Extension to HTTP:
        Digest Access Authentication", RFC 2069, January 1997.

   [33] Fielding, R., Gettys, J., Mogul, J., Frystyk, H. and T.
        Berners-Lee, "Hypertext Transfer Protocol -- HTTP/1.1", RFC
        2068, January 1997.

   [34] Bradner, S., "Key words for use in RFCs to Indicate Requirement
        Levels", BCP 14, RFC 2119, March 1997.

   [35] Troost, R. and Dorner, S., "Communicating Presentation
        Information in Internet Messages: The Content-Disposition
        Header", RFC 1806, June 1995.

   [36] Mogul, J., Fielding, R., Gettys, J. and H. Frystyk, "Use and
        Interpretation of HTTP Version Numbers", RFC 2145, May 1997.
        [jg639]

   [37] Palme, J., "Common Internet Message Headers", RFC 2076, February
        1997. [jg640]





Fielding, et al.            Standards Track                   [Page 160](#btoc){id=b160}

RFC 2616                        HTTP/1.1                       June 1999


   [38] Yergeau, F., "UTF-8, a transformation format of Unicode and
        ISO-10646", RFC 2279, January 1998. [jg641]

   [39] Nielsen, H.F., Gettys, J., Baird-Smith, A., Prud'hommeaux, E.,
        Lie, H., and C. Lilley. "Network Performance Effects of
        HTTP/1.1, CSS1, and PNG," Proceedings of ACM SIGCOMM '97, Cannes
        France, September 1997.[jg642]

   [40] Freed, N. and N. Borenstein, "Multipurpose Internet Mail
        Extensions (MIME) Part Two: Media Types", RFC 2046, November
        1996. [jg643]

   [41] Alvestrand, H., "IETF Policy on Character Sets and Languages",
        BCP 18, RFC 2277, January 1998. [jg644]

   [42] Berners-Lee, T., Fielding, R. and L. Masinter, "Uniform Resource
        Identifiers (URI): Generic Syntax and Semantics", RFC 2396,
        August 1998. [jg645]

   [43] Franks, J., Hallam-Baker, P., Hostetler, J., Lawrence, S.,
        Leach, P., Luotonen, A., Sink, E. and L. Stewart, "HTTP
        Authentication: Basic and Digest Access Authentication", RFC
        2617, June 1999. [jg646]

   [44] Luotonen, A., "Tunneling TCP based protocols through Web proxy
        servers," Work in Progress. [jg647]

   [45] Palme, J. and A. Hopmann, "MIME E-mail Encapsulation of
        Aggregate Documents, such as HTML (MHTML)", RFC 2110, March
        1997.

   [46] Bradner, S., "The Internet Standards Process -- Revision 3", BCP
        9, RFC 2026, October 1996.

   [47] Masinter, L., "Hyper Text Coffee Pot Control Protocol
        (HTCPCP/1.0)", RFC 2324, 1 April 1998.

   [48] Freed, N. and N. Borenstein, "Multipurpose Internet Mail
        Extensions (MIME) Part Five: Conformance Criteria and Examples",
        RFC 2049, November 1996.

   [49] Troost, R., Dorner, S. and K. Moore, "Communicating Presentation
        Information in Internet Messages: The Content-Disposition Header
        Field", RFC 2183, August 1997.







Fielding, et al.            Standards Track                   [Page 161](#btoc){id=b161}

RFC 2616                        HTTP/1.1                       June 1999


/18 Authors' Addresses
========================================================



   Roy T. Fielding
   Information and Computer Science
   University of California, Irvine
   Irvine, CA 92697-3425, USA

   Fax: +1 (949) 824-1715
   EMail: fielding@ics.uci.edu


   James Gettys
   World Wide Web Consortium
   MIT Laboratory for Computer Science
   545 Technology Square
   Cambridge, MA 02139, USA

   Fax: +1 (617) 258 8682
   EMail: jg@w3.org


   Jeffrey C. Mogul
   Western Research Laboratory
   Compaq Computer Corporation
   250 University Avenue
   Palo Alto, California, 94305, USA

   EMail: mogul@wrl.dec.com


   Henrik Frystyk Nielsen
   World Wide Web Consortium
   MIT Laboratory for Computer Science
   545 Technology Square
   Cambridge, MA 02139, USA

   Fax: +1 (617) 258 8682
   EMail: frystyk@w3.org


   Larry Masinter
   Xerox Corporation
   3333 Coyote Hill Road
   Palo Alto, CA 94034, USA

   EMail: masinter@parc.xerox.com





Fielding, et al.            Standards Track                   [Page 162](#btoc){id=b162}

RFC 2616                        HTTP/1.1                       June 1999


   Paul J. Leach
   Microsoft Corporation
   1 Microsoft Way
   Redmond, WA 98052, USA

   EMail: paulle@microsoft.com


   Tim Berners-Lee
   Director, World Wide Web Consortium
   MIT Laboratory for Computer Science
   545 Technology Square
   Cambridge, MA 02139, USA

   Fax: +1 (617) 258 8682
   EMail: timbl@w3.org



































Fielding, et al.            Standards Track                   [Page 163](#btoc){id=b163}

RFC 2616                        HTTP/1.1                       June 1999


/19 Appendices
========================================================



19.1 Internet Media Type message/http and application/http
--------------------------------------------------------


   In addition to defining the HTTP/1.1 protocol, this document serves
   as the specification for the Internet media type "message/http" and
   "application/http". The message/http type can be used to enclose a
   single HTTP request or response message, provided that it obeys the
   MIME restrictions for all "message" types regarding line length and
   encodings. The application/http type can be used to enclose a
   pipeline of one or more HTTP request or response messages (not
   intermixed). The following is to be registered with IANA [17].

       Media Type name:         message
       Media subtype name:      http
       Required parameters:     none
       Optional parameters:     version, msgtype
        version: The HTTP-Version number of the enclosed message
                 (e.g., "1.1"). If not present, the version can be
                 determined from the first line of the body.
        msgtype: The message type -- "request" or "response". If not
                 present, the type can be determined from the first
                 line of the body.
       Encoding considerations: only "7bit", "8bit", or "binary" are
                                permitted
       Security considerations: none

       Media Type name:         application
       Media subtype name:      http
       Required parameters:     none
       Optional parameters:     version, msgtype
        version: The HTTP-Version number of the enclosed messages
                 (e.g., "1.1"). If not present, the version can be
                 determined from the first line of the body.
        msgtype: The message type -- "request" or "response". If not
                 present, the type can be determined from the first
                 line of the body.
       Encoding considerations: HTTP messages enclosed by this type
                 are in "binary" format; use of an appropriate
                 Content-Transfer-Encoding is required when
                 transmitted via E-mail.
       Security considerations: none









Fielding, et al.            Standards Track                   [Page 164](#btoc){id=b164}

RFC 2616                        HTTP/1.1                       June 1999


19.2 Internet Media Type multipart/byteranges
--------------------------------------------------------


   When an HTTP 206 (Partial Content) response message includes the
   content of multiple ranges (a response to a request for multiple
   non-overlapping ranges), these are transmitted as a multipart
   message-body. The media type for this purpose is called
   "multipart/byteranges".

   The multipart/byteranges media type includes two or more parts, each
   with its own Content-Type and Content-Range fields. The required
   boundary parameter specifies the boundary string used to separate
   each body-part.

       Media Type name:         multipart
       Media subtype name:      byteranges
       Required parameters:     boundary
       Optional parameters:     none
       Encoding considerations: only "7bit", "8bit", or "binary" are
                                permitted
       Security considerations: none


   For example:

   HTTP/1.1 206 Partial Content
   Date: Wed, 15 Nov 1995 06:25:24 GMT
   Last-Modified: Wed, 15 Nov 1995 04:58:08 GMT
   Content-type: multipart/byteranges; boundary=THIS_STRING_SEPARATES

   --THIS_STRING_SEPARATES
   Content-type: application/pdf
   Content-range: bytes 500-999/8000

   ...the first range...
   --THIS_STRING_SEPARATES
   Content-type: application/pdf
   Content-range: bytes 7000-7999/8000

   ...the second range
   --THIS_STRING_SEPARATES--

      Notes:

      1) Additional CRLFs may precede the first boundary string in the
         entity.






Fielding, et al.            Standards Track                   [Page 165](#btoc){id=b165}

RFC 2616                        HTTP/1.1                       June 1999


      2) Although RFC 2046 [40] permits the boundary string to be
         quoted, some existing implementations handle a quoted boundary
         string incorrectly.

      3) A number of browsers and servers were coded to an early draft
         of the byteranges specification to use a media type of
         multipart/x-byteranges, which is almost, but not quite
         compatible with the version documented in HTTP/1.1.

19.3 Tolerant Applications
--------------------------------------------------------


   Although this document specifies the requirements for the generation
   of HTTP/1.1 messages, not all applications will be correct in their
   implementation. We therefore recommend that operational applications
   be tolerant of deviations whenever those deviations can be
   interpreted unambiguously.

   Clients SHOULD be tolerant in parsing the Status-Line and servers
   tolerant when parsing the Request-Line. In particular, they SHOULD
   accept any amount of SP or HT characters between fields, even though
   only a single SP is required.

   The line terminator for message-header fields is the sequence CRLF.
   However, we recommend that applications, when parsing such headers,
   recognize a single LF as a line terminator and ignore the leading CR.

   The character set of an entity-body SHOULD be labeled as the lowest
   common denominator of the character codes used within that body, with
   the exception that not labeling the entity is preferred over labeling
   the entity with the labels US-ASCII or ISO-8859-1. See section 3.7.1
   and 3.4.1.

   Additional rules for requirements on parsing and encoding of dates
   and other potential problems with date encodings include:

      - HTTP/1.1 clients and caches SHOULD assume that an RFC-850 date
        which appears to be more than 50 years in the future is in fact
        in the past (this helps solve the "year 2000" problem).

      - An HTTP/1.1 implementation MAY internally represent a parsed
        Expires date as earlier than the proper value, but MUST NOT
        internally represent a parsed Expires date as later than the
        proper value.

      - All expiration-related calculations MUST be done in GMT. The
        local time zone MUST NOT influence the calculation or comparison
        of an age or expiration time.




Fielding, et al.            Standards Track                   [Page 166](#btoc){id=b166}

RFC 2616                        HTTP/1.1                       June 1999


      - If an HTTP header incorrectly carries a date value with a time
        zone other than GMT, it MUST be converted into GMT using the
        most conservative possible conversion.

19.4 Differences Between HTTP Entities and RFC 2045 Entities
--------------------------------------------------------


   HTTP/1.1 uses many of the constructs defined for Internet Mail (RFC
   822 [9]) and the Multipurpose Internet Mail Extensions (MIME [7]) to
   allow entities to be transmitted in an open variety of
   representations and with extensible mechanisms. However, RFC 2045
   discusses mail, and HTTP has a few features that are different from
   those described in RFC 2045. These differences were carefully chosen
   to optimize performance over binary connections, to allow greater
   freedom in the use of new media types, to make date comparisons
   easier, and to acknowledge the practice of some early HTTP servers
   and clients.

   This appendix describes specific areas where HTTP differs from RFC
   2045. Proxies and gateways to strict MIME environments SHOULD be
   aware of these differences and provide the appropriate conversions
   where necessary. Proxies and gateways from MIME environments to HTTP
   also need to be aware of the differences because some conversions
   might be required.

19.4.1 MIME-Version
--------------------------------------------------------


   HTTP is not a MIME-compliant protocol. However, HTTP/1.1 messages MAY
   include a single MIME-Version general-header field to indicate what
   version of the MIME protocol was used to construct the message. Use
   of the MIME-Version header field indicates that the message is in
   full compliance with the MIME protocol (as defined in RFC 2045[7]).
   Proxies/gateways are responsible for ensuring full compliance (where
   possible) when exporting HTTP messages to strict MIME environments.

       MIME-Version   = "MIME-Version" ":" 1*DIGIT "." 1*DIGIT

   MIME version "1.0" is the default for use in HTTP/1.1. However,
   HTTP/1.1 message parsing and semantics are defined by this document
   and not the MIME specification.

19.4.2 Conversion to Canonical Form
--------------------------------------------------------


   RFC 2045 [7] requires that an Internet mail entity be converted to
   canonical form prior to being transferred, as described in section 4
   of RFC 2049 [48]. Section 3.7.1 of this document describes the forms
   allowed for subtypes of the "text" media type when transmitted over
   HTTP. RFC 2046 requires that content with a type of "text" represent
   line breaks as CRLF and forbids the use of CR or LF outside of line



Fielding, et al.            Standards Track                   [Page 167](#btoc){id=b167}

RFC 2616                        HTTP/1.1                       June 1999


   break sequences. HTTP allows CRLF, bare CR, and bare LF to indicate a
   line break within text content when a message is transmitted over
   HTTP.

   Where it is possible, a proxy or gateway from HTTP to a strict MIME
   environment SHOULD translate all line breaks within the text media
   types described in section 3.7.1 of this document to the RFC 2049
   canonical form of CRLF. Note, however, that this might be complicated
   by the presence of a Content-Encoding and by the fact that HTTP
   allows the use of some character sets which do not use octets 13 and
   10 to represent CR and LF, as is the case for some multi-byte
   character sets.

   Implementors should note that conversion will break any cryptographic
   checksums applied to the original content unless the original content
   is already in canonical form. Therefore, the canonical form is
   recommended for any content that uses such checksums in HTTP.

19.4.3 Conversion of Date Formats
--------------------------------------------------------


   HTTP/1.1 uses a restricted set of date formats (section 3.3.1) to
   simplify the process of date comparison. Proxies and gateways from
   other protocols SHOULD ensure that any Date header field present in a
   message conforms to one of the HTTP/1.1 formats and rewrite the date
   if necessary.

19.4.4 Introduction of Content-Encoding
--------------------------------------------------------


   RFC 2045 does not include any concept equivalent to HTTP/1.1's
   Content-Encoding header field. Since this acts as a modifier on the
   media type, proxies and gateways from HTTP to MIME-compliant
   protocols MUST either change the value of the Content-Type header
   field or decode the entity-body before forwarding the message. (Some
   experimental applications of Content-Type for Internet mail have used
   a media-type parameter of ";conversions=<content-coding>" to perform
   a function equivalent to Content-Encoding. However, this parameter is
   not part of RFC 2045.)

19.4.5 No Content-Transfer-Encoding
--------------------------------------------------------


   HTTP does not use the Content-Transfer-Encoding (CTE) field of RFC
   2045. Proxies and gateways from MIME-compliant protocols to HTTP MUST
   remove any non-identity CTE ("quoted-printable" or "base64") encoding
   prior to delivering the response message to an HTTP client.

   Proxies and gateways from HTTP to MIME-compliant protocols are
   responsible for ensuring that the message is in the correct format
   and encoding for safe transport on that protocol, where "safe



Fielding, et al.            Standards Track                   [Page 168](#btoc){id=b168}

RFC 2616                        HTTP/1.1                       June 1999


   transport" is defined by the limitations of the protocol being used.
   Such a proxy or gateway SHOULD label the data with an appropriate
   Content-Transfer-Encoding if doing so will improve the likelihood of
   safe transport over the destination protocol.

19.4.6 Introduction of Transfer-Encoding
--------------------------------------------------------


   HTTP/1.1 introduces the Transfer-Encoding header field (section
   14.41). Proxies/gateways MUST remove any transfer-coding prior to
   forwarding a message via a MIME-compliant protocol.

   A process for decoding the "chunked" transfer-coding (section 3.6)
   can be represented in pseudo-code as:

       length := 0
       read chunk-size, chunk-extension (if any) and CRLF
       while (chunk-size > 0) {
          read chunk-data and CRLF
          append chunk-data to entity-body
          length := length + chunk-size
          read chunk-size and CRLF
       }
       read entity-header
       while (entity-header not empty) {
          append entity-header to existing header fields
          read entity-header
       }
       Content-Length := length
       Remove "chunked" from Transfer-Encoding

19.4.7 MHTML and Line Length Limitations
--------------------------------------------------------


   HTTP implementations which share code with MHTML [45] implementations
   need to be aware of MIME line length limitations. Since HTTP does not
   have this limitation, HTTP does not fold long lines. MHTML messages
   being transported by HTTP follow all conventions of MHTML, including
   line length limitations and folding, canonicalization, etc., since
   HTTP transports all message-bodies as payload (see section 3.7.2) and
   does not interpret the content or any MIME header lines that might be
   contained therein.

19.5 Additional Features
--------------------------------------------------------


   RFC 1945 and RFC 2068 document protocol elements used by some
   existing HTTP implementations, but not consistently and correctly
   across most HTTP/1.1 applications. Implementors are advised to be
   aware of these features, but cannot rely upon their presence in, or
   interoperability with, other HTTP/1.1 applications. Some of these



Fielding, et al.            Standards Track                   [Page 169](#btoc){id=b169}

RFC 2616                        HTTP/1.1                       June 1999


   describe proposed experimental features, and some describe features
   that experimental deployment found lacking that are now addressed in
   the base HTTP/1.1 specification.

   A number of other headers, such as Content-Disposition and Title,
   from SMTP and MIME are also often implemented (see RFC 2076 [37]).

19.5.1 Content-Disposition
--------------------------------------------------------


   The Content-Disposition response-header field has been proposed as a
   means for the origin server to suggest a default filename if the user
   requests that the content is saved to a file. This usage is derived
   from the definition of Content-Disposition in RFC 1806 [35].

        content-disposition = "Content-Disposition" ":"
                              disposition-type *( ";" disposition-parm )
        disposition-type = "attachment" | disp-extension-token
        disposition-parm = filename-parm | disp-extension-parm
        filename-parm = "filename" "=" quoted-string
        disp-extension-token = token
        disp-extension-parm = token "=" ( token | quoted-string )

   An example is

        Content-Disposition: attachment; filename="fname.ext"

   The receiving user agent SHOULD NOT respect any directory path
   information present in the filename-parm parameter, which is the only
   parameter believed to apply to HTTP implementations at this time. The
   filename SHOULD be treated as a terminal component only.

   If this header is used in a response with the application/octet-
   stream content-type, the implied suggestion is that the user agent
   should not display the response, but directly enter a `save response
   as...' dialog.

   See section 15.5 for Content-Disposition security issues.

19.6 Compatibility with Previous Versions
--------------------------------------------------------


   It is beyond the scope of a protocol specification to mandate
   compliance with previous versions. HTTP/1.1 was deliberately
   designed, however, to make supporting previous versions easy. It is
   worth noting that, at the time of composing this specification
   (1996), we would expect commercial HTTP/1.1 servers to:

      - recognize the format of the Request-Line for HTTP/0.9, 1.0, and
        1.1 requests;



Fielding, et al.            Standards Track                   [Page 170](#btoc){id=b170}

RFC 2616                        HTTP/1.1                       June 1999


      - understand any valid request in the format of HTTP/0.9, 1.0, or
        1.1;

      - respond appropriately with a message in the same major version
        used by the client.

   And we would expect HTTP/1.1 clients to:

      - recognize the format of the Status-Line for HTTP/1.0 and 1.1
        responses;

      - understand any valid response in the format of HTTP/0.9, 1.0, or
        1.1.

   For most implementations of HTTP/1.0, each connection is established
   by the client prior to the request and closed by the server after
   sending the response. Some implementations implement the Keep-Alive
   version of persistent connections described in section 19.7.1 of RFC
   2068 [33].

19.6.1 Changes from HTTP/1.0
--------------------------------------------------------


   This section summarizes major differences between versions HTTP/1.0
   and HTTP/1.1.

19.6.1.1 Changes to Simplify Multi-homed Web Servers and Conserve IP
--------------------------------------------------------

         Addresses

   The requirements that clients and servers support the Host request-
   header, report an error if the Host request-header (section 14.23) is
   missing from an HTTP/1.1 request, and accept absolute URIs (section
   5.1.2) are among the most important changes defined by this
   specification.

   Older HTTP/1.0 clients assumed a one-to-one relationship of IP
   addresses and servers; there was no other established mechanism for
   distinguishing the intended server of a request than the IP address
   to which that request was directed. The changes outlined above will
   allow the Internet, once older HTTP clients are no longer common, to
   support multiple Web sites from a single IP address, greatly
   simplifying large operational Web servers, where allocation of many
   IP addresses to a single host has created serious problems. The
   Internet will also be able to recover the IP addresses that have been
   allocated for the sole purpose of allowing special-purpose domain
   names to be used in root-level HTTP URLs. Given the rate of growth of
   the Web, and the number of servers already deployed, it is extremely





Fielding, et al.            Standards Track                   [Page 171](#btoc){id=b171}

RFC 2616                        HTTP/1.1                       June 1999


   important that all implementations of HTTP (including updates to
   existing HTTP/1.0 applications) correctly implement these
   requirements:

      - Both clients and servers MUST support the Host request-header.

      - A client that sends an HTTP/1.1 request MUST send a Host header.

      - Servers MUST report a 400 (Bad Request) error if an HTTP/1.1
        request does not include a Host request-header.

      - Servers MUST accept absolute URIs.

19.6.2 Compatibility with HTTP/1.0 Persistent Connections
--------------------------------------------------------


   Some clients and servers might wish to be compatible with some
   previous implementations of persistent connections in HTTP/1.0
   clients and servers. Persistent connections in HTTP/1.0 are
   explicitly negotiated as they are not the default behavior. HTTP/1.0
   experimental implementations of persistent connections are faulty,
   and the new facilities in HTTP/1.1 are designed to rectify these
   problems. The problem was that some existing 1.0 clients may be
   sending Keep-Alive to a proxy server that doesn't understand
   Connection, which would then erroneously forward it to the next
   inbound server, which would establish the Keep-Alive connection and
   result in a hung HTTP/1.0 proxy waiting for the close on the
   response. The result is that HTTP/1.0 clients must be prevented from
   using Keep-Alive when talking to proxies.

   However, talking to proxies is the most important use of persistent
   connections, so that prohibition is clearly unacceptable. Therefore,
   we need some other mechanism for indicating a persistent connection
   is desired, which is safe to use even when talking to an old proxy
   that ignores Connection. Persistent connections are the default for
   HTTP/1.1 messages; we introduce a new keyword (Connection: close) for
   declaring non-persistence. See section 14.10.

   The original HTTP/1.0 form of persistent connections (the Connection:
   Keep-Alive and Keep-Alive header) is documented in RFC 2068. [33]

19.6.3 Changes from RFC 2068
--------------------------------------------------------


   This specification has been carefully audited to correct and
   disambiguate key word usage; RFC 2068 had many problems in respect to
   the conventions laid out in RFC 2119 [34].

   Clarified which error code should be used for inbound server failures
   (e.g. DNS failures). (Section 10.5.5).



Fielding, et al.            Standards Track                   [Page 172](#btoc){id=b172}

RFC 2616                        HTTP/1.1                       June 1999


   CREATE had a race that required an Etag be sent when a resource is
   first created. (Section 10.2.2).

   Content-Base was deleted from the specification: it was not
   implemented widely, and there is no simple, safe way to introduce it
   without a robust extension mechanism. In addition, it is used in a
   similar, but not identical fashion in MHTML [45].

   Transfer-coding and message lengths all interact in ways that
   required fixing exactly when chunked encoding is used (to allow for
   transfer encoding that may not be self delimiting); it was important
   to straighten out exactly how message lengths are computed. (Sections
   3.6, 4.4, 7.2.2, 13.5.2, 14.13, 14.16)

   A content-coding of "identity" was introduced, to solve problems
   discovered in caching. (section 3.5)

   Quality Values of zero should indicate that "I don't want something"
   to allow clients to refuse a representation. (Section 3.9)

   The use and interpretation of HTTP version numbers has been clarified
   by RFC 2145. Require proxies to upgrade requests to highest protocol
   version they support to deal with problems discovered in HTTP/1.0
   implementations (Section 3.1)

   Charset wildcarding is introduced to avoid explosion of character set
   names in accept headers. (Section 14.2)

   A case was missed in the Cache-Control model of HTTP/1.1; s-maxage
   was introduced to add this missing case. (Sections 13.4, 14.8, 14.9,
   14.9.3)

   The Cache-Control: max-age directive was not properly defined for
   responses. (Section 14.9.3)

   There are situations where a server (especially a proxy) does not
   know the full length of a response but is capable of serving a
   byterange request. We therefore need a mechanism to allow byteranges
   with a content-range not indicating the full length of the message.
   (Section 14.16)

   Range request responses would become very verbose if all meta-data
   were always returned; by allowing the server to only send needed
   headers in a 206 response, this problem can be avoided. (Section
   10.2.7, 13.5.3, and 14.27)






Fielding, et al.            Standards Track                   [Page 173](#btoc){id=b173}

RFC 2616                        HTTP/1.1                       June 1999


   Fix problem with unsatisfiable range requests; there are two cases:
   syntactic problems, and range doesn't exist in the document. The 416
   status code was needed to resolve this ambiguity needed to indicate
   an error for a byte range request that falls outside of the actual
   contents of a document. (Section 10.4.17, 14.16)

   Rewrite of message transmission requirements to make it much harder
   for implementors to get it wrong, as the consequences of errors here
   can have significant impact on the Internet, and to deal with the
   following problems:

      1. Changing "HTTP/1.1 or later" to "HTTP/1.1", in contexts where
         this was incorrectly placing a requirement on the behavior of
         an implementation of a future version of HTTP/1.x

      2. Made it clear that user-agents should retry requests, not
         "clients" in general.

      3. Converted requirements for clients to ignore unexpected 100
         (Continue) responses, and for proxies to forward 100 responses,
         into a general requirement for 1xx responses.

      4. Modified some TCP-specific language, to make it clearer that
         non-TCP transports are possible for HTTP.

      5. Require that the origin server MUST NOT wait for the request
         body before it sends a required 100 (Continue) response.

      6. Allow, rather than require, a server to omit 100 (Continue) if
         it has already seen some of the request body.

      7. Allow servers to defend against denial-of-service attacks and
         broken clients.

   This change adds the Expect header and 417 status code. The message
   transmission requirements fixes are in sections 8.2, 10.4.18,
   8.1.2.2, 13.11, and 14.20.

   Proxies should be able to add Content-Length when appropriate.
   (Section 13.5.2)

   Clean up confusion between 403 and 404 responses. (Section 10.4.4,
   10.4.5, and 10.4.11)

   Warnings could be cached incorrectly, or not updated appropriately.
   (Section 13.1.2, 13.2.4, 13.5.2, 13.5.3, 14.9.3, and 14.46) Warning
   also needed to be a general header, as PUT or other methods may have
   need for it in requests.



Fielding, et al.            Standards Track                   [Page 174](#btoc){id=b174}

RFC 2616                        HTTP/1.1                       June 1999


   Transfer-coding had significant problems, particularly with
   interactions with chunked encoding. The solution is that transfer-
   codings become as full fledged as content-codings. This involves
   adding an IANA registry for transfer-codings (separate from content
   codings), a new header field (TE) and enabling trailer headers in the
   future. Transfer encoding is a major performance benefit, so it was
   worth fixing [39]. TE also solves another, obscure, downward
   interoperability problem that could have occurred due to interactions
   between authentication trailers, chunked encoding and HTTP/1.0
   clients.(Section 3.6, 3.6.1, and 14.39)

   The PATCH, LINK, UNLINK methods were defined but not commonly
   implemented in previous versions of this specification. See RFC 2068
   [33].

   The Alternates, Content-Version, Derived-From, Link, URI, Public and
   Content-Base header fields were defined in previous versions of this
   specification, but not commonly implemented. See RFC 2068 [33].

/20 Index
========================================================



   Please see the PostScript version of this RFC for the INDEX.





























Fielding, et al.            Standards Track                   [Page 175](#btoc){id=b175}

RFC 2616                        HTTP/1.1                       June 1999


21.  Full Copyright Statement
--------------------------------------------------------


   Copyright (C) The Internet Society (1999).  All Rights Reserved.

   This document and translations of it may be copied and furnished to
   others, and derivative works that comment on or otherwise explain it
   or assist in its implementation may be prepared, copied, published
   and distributed, in whole or in part, without restriction of any
   kind, provided that the above copyright notice and this paragraph are
   included on all such copies and derivative works.  However, this
   document itself may not be modified in any way, such as by removing
   the copyright notice or references to the Internet Society or other
   Internet organizations, except as needed for the purpose of
   developing Internet standards in which case the procedures for
   copyrights defined in the Internet Standards process must be
   followed, or as required to translate it into languages other than
   English.

   The limited permissions granted above are perpetual and will not be
   revoked by the Internet Society or its successors or assigns.

   This document and the information contained herein is provided on an
   "AS IS" basis and THE INTERNET SOCIETY AND THE INTERNET ENGINEERING
   TASK FORCE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
   BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE INFORMATION
   HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED WARRANTIES OF
   MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Acknowledgement

   Funding for the RFC Editor function is currently provided by the
   Internet Society.









Fielding, et al.            Standards Track                   [Page 176](#btoc){id=b176}


HTTP Over TLS
========================================================

https://www.rfc-editor.org/rfc/rfc2818.txt
--------------------------------------------------------







Network Working Group                                       E. Rescorla
Request for Comments: 2818                                   RTFM, Inc.
Category: Informational                                        May 2000


                             HTTP Over TLS

Status of this Memo

   This memo provides information for the Internet community.  It does
   not specify an Internet standard of any kind.  Distribution of this
   memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2000).  All Rights Reserved.

Abstract

   This memo describes how to use TLS to secure HTTP connections over
   the Internet. Current practice is to layer HTTP over SSL (the
   predecessor to TLS), distinguishing secured traffic from insecure
   traffic by the use of a different server port. This document
   documents that practice using TLS. A companion document describes a
   method for using HTTP/TLS over the same port as normal HTTP
   [RFC2817].

[Table of Contents](){id=ctoc}
--------------------------------------------------------

-   1. Introduction  . . . . . . . . . . . . . . . . . . . . . . [2](#c2)
-   1.1. Requirements Terminology  . . . . . . . . . . . . . . . [2](#c2)
-   2. HTTP Over TLS . . . . . . . . . . . . . . . . . . . . . . [2](#c2)
-   2.1. Connection Initiation . . . . . . . . . . . . . . . . . [2](#c2)
-   2.2. Connection Closure  . . . . . . . . . . . . . . . . . . [2](#c2)
-   2.2.1. Client Behavior . . . . . . . . . . . . . . . . . . . [3](#c3)
-   2.2.2. Server Behavior . . . . . . . . . . . . . . . . . . . [3](#c3)
-   2.3. Port Number . . . . . . . . . . . . . . . . . . . . . . [4](#c4)
-   2.4. URI Format  . . . . . . . . . . . . . . . . . . . . . . [4](#c4)
-   3. Endpoint Identification . . . . . . . . . . . . . . . . . [4](#c4)
-   3.1. Server Identity . . . . . . . . . . . . . . . . . . . . [4](#c4)
-   3.2. Client Identity . . . . . . . . . . . . . . . . . . . . [5](#c5)
-   References . . . . . . . . . . . . . . . . . . . . . . . . . [6](#c6)
-   Security Considerations  . . . . . . . . . . . . . . . . . . [6](#c6)
-   Author's Address . . . . . . . . . . . . . . . . . . . . . . [6](#c6)
-   Full Copyright Statement . . . . . . . . . . . . . . . . . . [7](#c7)






Rescorla                     Informational                      [Page 1]

RFC 2818                     HTTP Over TLS                      May 2000


/1.  Introduction
========================================================



   HTTP [RFC2616] was originally used in the clear on the Internet.
   However, increased use of HTTP for sensitive applications has
   required security measures. SSL, and its successor TLS [RFC2246] were
   designed to provide channel-oriented security. This document
   describes how to use HTTP over TLS.

1.1.  Requirements Terminology
--------------------------------------------------------


   Keywords "MUST", "MUST NOT", "REQUIRED", "SHOULD", "SHOULD NOT" and
   "MAY" that appear in this document are to be interpreted as described
   in [RFC2119].

/2.  HTTP Over TLS
========================================================



   Conceptually, HTTP/TLS is very simple. Simply use HTTP over TLS
   precisely as you would use HTTP over TCP.

2.1.  Connection Initiation
--------------------------------------------------------


   The agent acting as the HTTP client should also act as the TLS
   client.  It should initiate a connection to the server on the
   appropriate port and then send the TLS ClientHello to begin the TLS
   handshake. When the TLS handshake has finished. The client may then
   initiate the first HTTP request.  All HTTP data MUST be sent as TLS
   "application data".  Normal HTTP behavior, including retained
   connections should be followed.

2.2.  Connection Closure
--------------------------------------------------------


   TLS provides a facility for secure connection closure. When a valid
   closure alert is received, an implementation can be assured that no
   further data will be received on that connection.  TLS
   implementations MUST initiate an exchange of closure alerts before
   closing a connection. A TLS implementation MAY, after sending a
   closure alert, close the connection without waiting for the peer to
   send its closure alert, generating an "incomplete close".  Note that
   an implementation which does this MAY choose to reuse the session.
   This SHOULD only be done when the application knows (typically
   through detecting HTTP message boundaries) that it has received all
   the message data that it cares about.

   As specified in [RFC2246], any implementation which receives a
   connection close without first receiving a valid closure alert (a
   "premature close") MUST NOT reuse that session.  Note that a
   premature close does not call into question the security of the data
   already received, but simply indicates that subsequent data might



Rescorla                     Informational                      [Page 2]

RFC 2818                     HTTP Over TLS                      May 2000


   have been truncated. Because TLS is oblivious to HTTP
   request/response boundaries, it is necessary to examine the HTTP data
   itself (specifically the Content-Length header) to determine whether
   the truncation occurred inside a message or between messages.

2.2.1.  Client Behavior
--------------------------------------------------------


   Because HTTP uses connection closure to signal end of server data,
   client implementations MUST treat any premature closes as errors and
   the data received as potentially truncated.  While in some cases the
   HTTP protocol allows the client to find out whether truncation took
   place so that, if it received the complete reply, it may tolerate
   such errors following the principle to "[be] strict when sending and
   tolerant when receiving" [RFC1958], often truncation does not show in
   the HTTP protocol data; two cases in particular deserve special note:

     A HTTP response without a Content-Length header. Since data length
     in this situation is signalled by connection close a premature
     close generated by the server cannot be distinguished from a
     spurious close generated by an attacker.

     A HTTP response with a valid Content-Length header closed before
     all data has been read. Because TLS does not provide document
     oriented protection, it is impossible to determine whether the
     server has miscomputed the Content-Length or an attacker has
     truncated the connection.

   There is one exception to the above rule. When encountering a
   premature close, a client SHOULD treat as completed all requests for
   which it has received as much data as specified in the Content-Length
   header.

   A client detecting an incomplete close SHOULD recover gracefully.  It
   MAY resume a TLS session closed in this fashion.

   Clients MUST send a closure alert before closing the connection.
   Clients which are unprepared to receive any more data MAY choose not
   to wait for the server's closure alert and simply close the
   connection, thus generating an incomplete close on the server side.

2.2.2.  Server Behavior
--------------------------------------------------------


   RFC 2616 permits an HTTP client to close the connection at any time,
   and requires servers to recover gracefully.  In particular, servers
   SHOULD be prepared to receive an incomplete close from the client,
   since the client can often determine when the end of server data is.
   Servers SHOULD be willing to resume TLS sessions closed in this
   fashion.



Rescorla                     Informational                      [Page 3]

RFC 2818                     HTTP Over TLS                      May 2000


   Implementation note: In HTTP implementations which do not use
   persistent connections, the server ordinarily expects to be able to
   signal end of data by closing the connection. When Content-Length is
   used, however, the client may have already sent the closure alert and
   dropped the connection.

   Servers MUST attempt to initiate an exchange of closure alerts with
   the client before closing the connection. Servers MAY close the
   connection after sending the closure alert, thus generating an
   incomplete close on the client side.

2.3.  Port Number
--------------------------------------------------------


   The first data that an HTTP server expects to receive from the client
   is the Request-Line production. The first data that a TLS server (and
   hence an HTTP/TLS server) expects to receive is the ClientHello.
   Consequently, common practice has been to run HTTP/TLS over a
   separate port in order to distinguish which protocol is being used.
   When HTTP/TLS is being run over a TCP/IP connection, the default port
   is 443. This does not preclude HTTP/TLS from being run over another
   transport. TLS only presumes a reliable connection-oriented data
   stream.

2.4.  URI Format
--------------------------------------------------------


   HTTP/TLS is differentiated from HTTP URIs by using the 'https'
   protocol identifier in place of the 'http' protocol identifier. An
   example URI specifying HTTP/TLS is:

     https://www.example.com/~smith/home.html

/3.  Endpoint Identification
========================================================



3.1.  Server Identity
--------------------------------------------------------


   In general, HTTP/TLS requests are generated by dereferencing a URI.
   As a consequence, the hostname for the server is known to the client.
   If the hostname is available, the client MUST check it against the
   server's identity as presented in the server's Certificate message,
   in order to prevent man-in-the-middle attacks.

   If the client has external information as to the expected identity of
   the server, the hostname check MAY be omitted. (For instance, a
   client may be connecting to a machine whose address and hostname are
   dynamic but the client knows the certificate that the server will
   present.) In such cases, it is important to narrow the scope of
   acceptable certificates as much as possible in order to prevent man




Rescorla                     Informational                      [Page 4]

RFC 2818                     HTTP Over TLS                      May 2000


   in the middle attacks.  In special cases, it may be appropriate for
   the client to simply ignore the server's identity, but it must be
   understood that this leaves the connection open to active attack.

   If a subjectAltName extension of type dNSName is present, that MUST
   be used as the identity. Otherwise, the (most specific) Common Name
   field in the Subject field of the certificate MUST be used. Although
   the use of the Common Name is existing practice, it is deprecated and
   Certification Authorities are encouraged to use the dNSName instead.

   Matching is performed using the matching rules specified by
   [RFC2459].  If more than one identity of a given type is present in
   the certificate (e.g., more than one dNSName name, a match in any one
   of the set is considered acceptable.) Names may contain the wildcard
   character * which is considered to match any single domain name
   component or component fragment. E.g., *.a.com matches foo.a.com but
   not bar.foo.a.com. f*.com matches foo.com but not bar.com.

   In some cases, the URI is specified as an IP address rather than a
   hostname. In this case, the iPAddress subjectAltName must be present
   in the certificate and must exactly match the IP in the URI.

   If the hostname does not match the identity in the certificate, user
   oriented clients MUST either notify the user (clients MAY give the
   user the opportunity to continue with the connection in any case) or
   terminate the connection with a bad certificate error. Automated
   clients MUST log the error to an appropriate audit log (if available)
   and SHOULD terminate the connection (with a bad certificate error).
   Automated clients MAY provide a configuration setting that disables
   this check, but MUST provide a setting which enables it.

   Note that in many cases the URI itself comes from an untrusted
   source. The above-described check provides no protection against
   attacks where this source is compromised. For example, if the URI was
   obtained by clicking on an HTML page which was itself obtained
   without using HTTP/TLS, a man in the middle could have replaced the
   URI.  In order to prevent this form of attack, users should carefully
   examine the certificate presented by the server to determine if it
   meets their expectations.

3.2.  Client Identity
--------------------------------------------------------


   Typically, the server has no external knowledge of what the client's
   identity ought to be and so checks (other than that the client has a
   certificate chain rooted in an appropriate CA) are not possible. If a
   server has such knowledge (typically from some source external to
   HTTP or TLS) it SHOULD check the identity as described above.




Rescorla                     Informational                      [Page 5](#ctoc){id=c5}

RFC 2818                     HTTP Over TLS                      May 2000


References

   [RFC2459] Housley, R., Ford, W., Polk, W. and D. Solo, "Internet
             Public Key Infrastructure: Part I: X.509 Certificate and
             CRL Profile", RFC 2459, January 1999.

   [RFC2616] Fielding, R., Gettys, J., Mogul, J., Frystyk, H., Masinter,
             L., Leach, P. and T. Berners-Lee, "Hypertext Transfer
             Protocol, HTTP/1.1", RFC 2616, June 1999.

   [RFC2119] Bradner, S., "Key Words for use in RFCs to indicate
             Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC2246] Dierks, T. and C. Allen, "The TLS Protocol", RFC 2246,
             January 1999.

   [RFC2817] Khare, R. and S. Lawrence, "Upgrading to TLS Within
             HTTP/1.1", RFC 2817, May 2000.

Security Considerations

   This entire document is about security.

Author's Address

   Eric Rescorla
   RTFM, Inc.
   30 Newell Road, #16
   East Palo Alto, CA 94303

   Phone: (650) 328-8631
   EMail: ekr@rtfm.com



















Rescorla                     Informational                      [Page 6](#ctoc){id=c6}

RFC 2818                     HTTP Over TLS                      May 2000


Full Copyright Statement

   Copyright (C) The Internet Society (2000).  All Rights Reserved.

   This document and translations of it may be copied and furnished to
   others, and derivative works that comment on or otherwise explain it
   or assist in its implementation may be prepared, copied, published
   and distributed, in whole or in part, without restriction of any
   kind, provided that the above copyright notice and this paragraph are
   included on all such copies and derivative works.  However, this
   document itself may not be modified in any way, such as by removing
   the copyright notice or references to the Internet Society or other
   Internet organizations, except as needed for the purpose of
   developing Internet standards in which case the procedures for
   copyrights defined in the Internet Standards process must be
   followed, or as required to translate it into languages other than
   English.

   The limited permissions granted above are perpetual and will not be
   revoked by the Internet Society or its successors or assigns.

   This document and the information contained herein is provided on an
   "AS IS" basis and THE INTERNET SOCIETY AND THE INTERNET ENGINEERING
   TASK FORCE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
   BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE INFORMATION
   HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED WARRANTIES OF
   MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Acknowledgement

   Funding for the RFC Editor function is currently provided by the
   Internet Society.



















Rescorla                     Informational                      [Page 7](#ctoc){id=c7}


The Secure Sockets Layer (SSL) Protocol Version 3.0
========================================================

https://www.rfc-editor.org/rfc/rfc6101.txt
--------------------------------------------------------



Internet Engineering Task Force (IETF)                         A. Freier
Request for Comments: 6101                                    P. Karlton
Category: Historic                               Netscape Communications
ISSN: 2070-1721                                                P. Kocher
                                                  Independent Consultant
                                                             August 2011


          The Secure Sockets Layer (SSL) Protocol Version 3.0

Abstract

   This document is published as a historical record of the SSL 3.0
   protocol.  The original Abstract follows.

   This document specifies version 3.0 of the Secure Sockets Layer (SSL
   3.0) protocol, a security protocol that provides communications
   privacy over the Internet.  The protocol allows client/server
   applications to communicate in a way that is designed to prevent
   eavesdropping, tampering, or message forgery.

Foreword

   Although the SSL 3.0 protocol is a widely implemented protocol, a
   pioneer in secure communications protocols, and the basis for
   Transport Layer Security (TLS), it was never formally published by
   the IETF, except in several expired Internet-Drafts.  This allowed no
   easy referencing to the protocol.  We believe a stable reference to
   the original document should exist and for that reason, this document
   describes what is known as the last published version of the SSL 3.0
   protocol, that is, the November 18, 1996, version of the protocol.

   There were no changes to the original document other than trivial
   editorial changes and the addition of a "Security Considerations"
   section.  However, portions of the original document that no longer
   apply were not included.  Such as the "Patent Statement" section, the
   "Reserved Ports Assignment" section, and the cipher-suite registrator
   note in the "The CipherSuite" section.  The "US export rules"
   discussed in the document do not apply today but are kept intact to
   provide context for decisions taken in protocol design.  The "Goals
   of This Document" section indicates the goals for adopters of SSL
   3.0, not goals of the IETF.

   The authors and editors were retained as in the original document.
   The editor of this document is Nikos Mavrogiannopoulos
   (nikos.mavrogiannopoulos@esat.kuleuven.be).  The editor would like to
   thank Dan Harkins, Linda Dunbar, Sean Turner, and Geoffrey Keating
   for reviewing this document and providing helpful comments.



Freier, et al.                  Historic                        [Page 1](#dtoc){id=d01}

RFC 6101              The SSL Protocol Version 3.0           August 2011


Status of This Memo

   This document is not an Internet Standards Track specification; it is
   published for the historical record.

   This document defines a Historic Document for the Internet community.
   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Not all documents
   approved by the IESG are a candidate for any level of Internet
   Standard; see Section 2 of RFC 5741.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   http://www.rfc-editor.org/info/rfc6101.

Copyright Notice

   Copyright (c) 2011 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (http://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.

   This document may contain material from IETF Documents or IETF
   Contributions published or made publicly available before November
   10, 2008.  The person(s) controlling the copyright in some of this
   material may not have granted the IETF Trust the right to allow
   modifications of such material outside the IETF Standards Process.
   Without obtaining an adequate license from the person(s) controlling
   the copyright in such materials, this document may not be modified
   outside the IETF Standards Process, and derivative works of it may
   not be created outside the IETF Standards Process, except to format
   it for publication as an RFC or to translate it into languages other
   than English.








Freier, et al.                  Historic                        [Page 2](#dtoc){id=d02}

RFC 6101              The SSL Protocol Version 3.0           August 2011


[Table of Contents](){id=dtoc}
--------------------------------------------------------

-   1. Introduction .................................................... [05](#d05)
-   2. Goals ........................................................... [05](#d05)
-   3. Goals of This Document .......................................... [06](#d06)
-   4. Presentation Language ........................................... [06](#d06)
-      4.1. Basic Block Size ........................................... [07](#d07)
-      4.2. Miscellaneous .............................................. [07](#d07)
-      4.3. Vectors .................................................... [07](#d07)
-      4.4. Numbers .................................................... [08](#d08)
-      4.5. Enumerateds ................................................ [08](#d08)
-      4.6. Constructed Types .......................................... [09](#d09)
-           4.6.1. Variants ........................................... [10](#d10)
-      4.7. Cryptographic Attributes .................................. [11](#d11)
-      4.8. Constants ................................................. [12](#d12)
-   5. SSL Protocol ................................................... [12](#d12)
-      5.1. Session and Connection States ............................. [12](#d12)
-      5.2. Record Layer .............................................. [14](#d14)
-           5.2.1. Fragmentation ...................................... [14](#d14)
-           5.2.2. Record Compression and Decompression ............... [15](#d15)
-           5.2.3. Record Payload Protection and the CipherSpec ....... [16](#d16)
-      5.3. Change Cipher Spec Protocol ............................... [18](#d18)
-      5.4. Alert Protocol ............................................ [18](#d18)
-           5.4.1. Closure Alerts ..................................... [19](#d19)
-           5.4.2. Error Alerts ....................................... [20](#d20)
-      5.5. Handshake Protocol Overview ............................... [21](#d21)
-      5.6. Handshake Protocol ........................................ [23](#d23)
-           5.6.1. Hello messages ..................................... [24](#d24)
-           5.6.2. Server Certificate ................................. [28](#d28)
-           5.6.3. Server Key Exchange Message ........................ [28](#d28)
-           5.6.4. Certificate Request ................................ [30](#d30)
-           5.6.5. Server Hello Done .................................. [31](#d31)
-           5.6.6. Client Certificate ................................. [31](#d31)
-           5.6.7. Client Key Exchange Message ........................ [31](#d31)
-           5.6.8. Certificate Verify ................................. [34](#d34)
-           5.6.9. Finished ........................................... [35](#d35)
-      5.7. Application Data Protocol ................................. [36](#d36)
-   6. Cryptographic Computations ..................................... [36](#d36)
-      6.1. Asymmetric Cryptographic Computations ..................... [36](#d36)
-           6.1.1. RSA ................................................ [36](#d36)
-           6.1.2. Diffie-Hellman ..................................... [37](#d37)
-           6.1.3. FORTEZZA ........................................... [37](#d37)
-      6.2. Symmetric Cryptographic Calculations and the CipherSpec ... [37](#d37)
-           6.2.1. The Master Secret .................................. [37](#d37)
-           6.2.2. Converting the Master Secret into Keys and
                  MAC Secrets ........................................ [37](#d37)
-   7. Security Considerations ........................................ [39](#d39)
-   8. Informative References ......................................... [40](#d40)



Freier, et al.                  Historic                        [Page 3](#dtoc){id=d03}

RFC 6101              The SSL Protocol Version 3.0           August 2011


-   Appendix A. Protocol Constant Values .............................. [42](#d42)
-     A.1. Record Layer ............................................... [42](#d42)
-     A.2. Change Cipher Specs Message ................................ [43](#d43)
-     A.3. Alert Messages ............................................. [43](#d43)
-     A.4. Handshake Protocol ......................................... [44](#d44)
-       A.4.1. Hello Messages ......................................... [44](#d44)
-       A.4.2. Server Authentication and Key Exchange Messages ........ [45](#d45)
-     A.5. Client Authentication and Key Exchange Messages ............ [46](#d46)
-       A.5.1. Handshake Finalization Message ......................... [47](#d47)
-     A.6. The CipherSuite ............................................ [47](#d47)
-     A.7. The CipherSpec ............................................. [49](#d49)
-   Appendix B. Glossary .............................................. [50](#d50)
-   Appendix C. CipherSuite Definitions ............................... [53](#d53)
-   Appendix D. Implementation Notes .................................. [56](#d56)
-     D.1. Temporary RSA Keys ......................................... [56](#d56)
-     D.2. Random Number Generation and Seeding ....................... [56](#d56)
-     D.3. Certificates and Authentication ............................ [57](#d57)
-     D.4. CipherSuites ............................................... [57](#d57)
-     D.5. FORTEZZA ................................................... [57](#d57)
-       D.5.1. Notes on Use of FORTEZZA Hardware ...................... [57](#d57)
-       D.5.2. FORTEZZA Cipher Suites ................................. [58](#d58)
-       D.5.3. FORTEZZA Session Resumption ............................ [58](#d58)
-   Appendix E. Version 2.0 Backward Compatibility .................... [59](#d59)
-     E.1. Version 2 Client Hello ..................................... [59](#d59)
-     E.2. Avoiding Man-in-the-Middle Version Rollback .............. [61](#d61)
-   Appendix F. Security Analysis ..................................... [61](#d61)
-     F.1. Handshake Protocol ......................................... [61](#d61)
-       F.1.1. Authentication and Key Exchange ........................ [61](#d61)
-       F.1.2. Version Rollback Attacks ............................... [64](#d64)
-       F.1.3. Detecting Attacks against the Handshake Protocol ....... [64](#d64)
-       F.1.4. Resuming Sessions ...................................... [65](#d65)
-       F.1.5. MD5 and SHA ............................................ [65](#d65)
-     F.2. Protecting Application Data ................................ [65](#d65)
-     F.3. Final Notes ................................................ [66](#d66)
-   Appendix G. Acknowledgements ...................................... [66](#d66)
-     G.1. Other Contributors ......................................... [66](#d66)
-     G.2. Early Reviewers ............................................ [67](#d67)














Freier, et al.                  Historic                        [Page 4](#dtoc){id=d04}

RFC 6101              The SSL Protocol Version 3.0           August 2011


/1.  Introduction
========================================================



   The primary goal of the SSL protocol is to provide privacy and
   reliability between two communicating applications.  The protocol is
   composed of two layers.  At the lowest level, layered on top of some
   reliable transport protocol (e.g., TCP [RFC0793]), is the SSL record
   protocol.  The SSL record protocol is used for encapsulation of
   various higher level protocols.  One such encapsulated protocol, the
   SSL handshake protocol, allows the server and client to authenticate
   each other and to negotiate an encryption algorithm and cryptographic
   keys before the application protocol transmits or receives its first
   byte of data.  One advantage of SSL is that it is application
   protocol independent.  A higher level protocol can layer on top of
   the SSL protocol transparently.  The SSL protocol provides connection
   security that has three basic properties:

   o  The connection is private.  Encryption is used after an initial
      handshake to define a secret key.  Symmetric cryptography is used
      for data encryption (e.g., DES [DES], 3DES [3DES], RC4 [SCH]).

   o  The peer's identity can be authenticated using asymmetric, or
      public key, cryptography (e.g., RSA [RSA], DSS [DSS]).

   o  The connection is reliable.  Message transport includes a message
      integrity check using a keyed Message Authentication Code (MAC)
      [RFC2104].  Secure hash functions (e.g., SHA, MD5) are used for
      MAC computations.

/2.  Goals
========================================================



   The goals of SSL protocol version 3.0, in order of their priority,
   are:

   1.  Cryptographic security

          SSL should be used to establish a secure connection between
          two parties.

   2.  Interoperability

          Independent programmers should be able to develop applications
          utilizing SSL 3.0 that will then be able to successfully
          exchange cryptographic parameters without knowledge of one
          another's code.







Freier, et al.                  Historic                        [Page 5](#dtoc){id=d05}

RFC 6101              The SSL Protocol Version 3.0           August 2011


          Note: It is not the case that all instances of SSL (even in
          the same application domain) will be able to successfully
          connect.  For instance, if the server supports a particular
          hardware token, and the client does not have access to such a
          token, then the connection will not succeed.

   3.  Extensibility

          SSL seeks to provide a framework into which new public key and
          bulk encryption methods can be incorporated as necessary.
          This will also accomplish two sub-goals: to prevent the need
          to create a new protocol (and risking the introduction of
          possible new weaknesses) and to avoid the need to implement an
          entire new security library.

   4.  Relative efficiency

          Cryptographic operations tend to be highly CPU intensive,
          particularly public key operations.  For this reason, the SSL
          protocol has incorporated an optional session caching scheme
          to reduce the number of connections that need to be
          established from scratch.  Additionally, care has been taken
          to reduce network activity.

/3.  Goals of This Document
========================================================



   The SSL protocol version 3.0 specification is intended primarily for
   readers who will be implementing the protocol and those doing
   cryptographic analysis of it.  The spec has been written with this in
   mind, and it is intended to reflect the needs of those two groups.
   For that reason, many of the algorithm-dependent data structures and
   rules are included in the body of the text (as opposed to in an
   appendix), providing easier access to them.

   This document is not intended to supply any details of service
   definition or interface definition, although it does cover select
   areas of policy as they are required for the maintenance of solid
   security.

/4.  Presentation Language
========================================================



   This document deals with the formatting of data in an external
   representation.  The following very basic and somewhat casually
   defined presentation syntax will be used.  The syntax draws from
   several sources in its structure.  Although it resembles the
   programming language "C" in its syntax and External Data
   Representation (XDR) [RFC1832] in both its syntax and intent, it




Freier, et al.                  Historic                        [Page 6](#dtoc){id=d06}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   would be risky to draw too many parallels.  The purpose of this
   presentation language is to document SSL only, not to have general
   application beyond that particular goal.

4.1.  Basic Block Size
--------------------------------------------------------


   The representation of all data items is explicitly specified.  The
   basic data block size is one byte (i.e., 8 bits).  Multiple byte data
   items are concatenations of bytes, from left to right, from top to
   bottom.  From the byte stream, a multi-byte item (a numeric in the
   example) is formed (using C notation) by:

        value = (byte[0] << 8*(n-1)) | (byte[1] << 8*(n-2)) | ...
        | byte[n-1];

   This byte ordering for multi-byte values is the commonplace network
   byte order or big-endian format.

4.2.  Miscellaneous
--------------------------------------------------------


   Comments begin with "/*" and end with "*/".  Optional components are
   denoted by enclosing them in "[[ ]]" double brackets.  Single-byte
   entities containing uninterpreted data are of type opaque.

4.3.  Vectors
--------------------------------------------------------


   A vector (single dimensioned array) is a stream of homogeneous data
   elements.  The size of the vector may be specified at documentation
   time or left unspecified until runtime.  In either case, the length
   declares the number of bytes, not the number of elements, in the
   vector.  The syntax for specifying a new type T' that is a fixed-
   length vector of type T is

        T T'[n];

   Here, T' occupies n bytes in the data stream, where n is a multiple
   of the size of T.  The length of the vector is not included in the
   encoded stream.

   In the following example, Datum is defined to be three consecutive
   bytes that the protocol does not interpret, while Data is three
   consecutive Datum, consuming a total of nine bytes.

        opaque Datum[3];      /* three uninterpreted bytes */
        Datum Data[9];        /* 3 consecutive 3 byte vectors */






Freier, et al.                  Historic                        [Page 7](#dtoc){id=d07}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Variable-length vectors are defined by specifying a subrange of legal
   lengths, inclusively, using the notation <floor..ceiling>.  When
   encoded, the actual length precedes the vector's contents in the byte
   stream.  The length will be in the form of a number consuming as many
   bytes as required to hold the vector's specified maximum (ceiling)
   length.  A variable-length vector with an actual length field of zero
   is referred to as an empty vector.

        T T'<floor..ceiling>;

   In the following example, mandatory is a vector that must contain
   between 300 and 400 bytes of type opaque.  It can never be empty.
   The actual length field consumes two bytes, a uint16, sufficient to
   represent the value 400 (see Section 4.4).  On the other hand, longer
   can represent up to 800 bytes of data, or 400 uint16 elements, and it
   may be empty.  Its encoding will include a two-byte actual length
   field prepended to the vector.

        opaque mandatory<300..400>;
              /* length field is 2 bytes, cannot be empty */
        uint16 longer<0..800>;
              /* zero to 400 16-bit unsigned integers */

4.4.  Numbers
--------------------------------------------------------


   The basic numeric data type is an unsigned byte (uint8).  All larger
   numeric data types are formed from fixed-length series of bytes
   concatenated as described in Section 4.1 and are also unsigned.  The
   following numeric types are predefined.

        uint8 uint16[2];
        uint8 uint24[3];
        uint8 uint32[4];
        uint8 uint64[8];

4.5.  Enumerateds
--------------------------------------------------------


   An additional sparse data type is available called enum.  A field of
   type enum can only assume the values declared in the definition.
   Each definition is a different type.  Only enumerateds of the same
   type may be assigned or compared.  Every element of an enumerated
   must be assigned a value, as demonstrated in the following example.
   Since the elements of the enumerated are not ordered, they can be
   assigned any unique value, in any order.

        enum { e1(v1), e2(v2), ... , en(vn), [[(n)]] } Te;





Freier, et al.                  Historic                        [Page 8](#dtoc){id=d08}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Enumerateds occupy as much space in the byte stream as would its
   maximal defined ordinal value.  The following definition would cause
   one byte to be used to carry fields of type Color.

        enum { red(3), blue(5), white(7) } Color;

   Optionally, one may specify a value without its associated tag to
   force the width definition without defining a superfluous element.
   In the following example, Taste will consume two bytes in the data
   stream but can only assume the values 1, 2, or 4.

        enum { sweet(1), sour(2), bitter(4), (32000) } Taste;

   The names of the elements of an enumeration are scoped within the
   defined type.  In the first example, a fully qualified reference to
   the second element of the enumeration would be Color.blue.  Such
   qualification is not required if the target of the assignment is well
   specified.

        Color color = Color.blue;     /* overspecified, legal */
        Color color = blue;           /* correct, type implicit */

   For enumerateds that are never converted to external representation,
   the numerical information may be omitted.

        enum { low, medium, high } Amount;

4.6.  Constructed Types
--------------------------------------------------------


   Structure types may be constructed from primitive types for
   convenience.  Each specification declares a new, unique type.  The
   syntax for definition is much like that of C.

      struct {
          T1 f1;
          T2 f2;
          ...
          Tn fn;
      } [[T]];

   The fields within a structure may be qualified using the type's name
   using a syntax much like that available for enumerateds.  For
   example, T.f2 refers to the second field of the previous declaration.
   Structure definitions may be embedded.







Freier, et al.                  Historic                        [Page 9](#dtoc){id=d09}

RFC 6101              The SSL Protocol Version 3.0           August 2011


4.6.1.  Variants
--------------------------------------------------------


   Defined structures may have variants based on some knowledge that is
   available within the environment.  The selector must be an enumerated
   type that defines the possible variants the structure defines.  There
   must be a case arm for every element of the enumeration declared in
   the select.  The body of the variant structure may be given a label
   for reference.  The mechanism by which the variant is selected at
   runtime is not prescribed by the presentation language.

        struct {
            T1 f1;
            T2 f2;
             ....
            Tn fn;
            select (E) {
                case e1: Te1;
                case e2: Te2;
                    ....
                case en: Ten;
            } [[fv]];
        } [[Tv]];

      For example,

        enum { apple, orange } VariantTag;
        struct {
            uint16 number;
            opaque string<0..10>; /* variable length */
        } V1;

        struct {
            uint32 number;
            opaque string[10];    /* fixed length */
        } V2;
        struct {
            select (VariantTag) { /* value of selector is implicit */
                case apple: V1;   /* VariantBody, tag = apple */
                case orange: V2;  /* VariantBody, tag = orange */
            } variant_body;       /* optional label on variant */
        } VariantRecord;










Freier, et al.                  Historic                       [Page 10](#dtoc){id=d10}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Variant structures may be qualified (narrowed) by specifying a value
   for the selector prior to the type.  For example, an

        orange VariantRecord

   is a narrowed type of a VariantRecord containing a variant_body of
   type V2.

4.7.  Cryptographic Attributes
--------------------------------------------------------


   The four cryptographic operations digital signing, stream cipher
   encryption, block cipher encryption, and public key encryption are
   designated digitally-signed, stream-ciphered, block-ciphered, and
   public-key-encrypted, respectively.  A field's cryptographic
   processing is specified by prepending an appropriate key word
   designation before the field's type specification.  Cryptographic
   keys are implied by the current session state (see Section 5.1).

   In digital signing, one-way hash functions are used as input for a
   signing algorithm.  In RSA signing, a 36-byte structure of two hashes
   (one SHA and one MD5) is signed (encrypted with the private key).  In
   DSS, the 20 bytes of the SHA hash are run directly through the
   Digital Signature Algorithm with no additional hashing.

   In stream cipher encryption, the plaintext is exclusive-ORed with an
   identical amount of output generated from a cryptographically secure
   keyed pseudorandom number generator.

   In block cipher encryption, every block of plaintext encrypts to a
   block of ciphertext.  Because it is unlikely that the plaintext
   (whatever data is to be sent) will break neatly into the necessary
   block size (usually 64 bits), it is necessary to pad out the end of
   short blocks with some regular pattern, usually all zeroes.

   In public key encryption, one-way functions with secret "trapdoors"
   are used to encrypt the outgoing data.  Data encrypted with the
   public key of a given key pair can only be decrypted with the private
   key, and vice versa.  In the following example:

        stream-ciphered struct {
            uint8 field1;
            uint8 field2;
            digitally-signed opaque hash[20];
        } UserType;

   The contents of hash are used as input for the signing algorithm,
   then the entire structure is encrypted with a stream cipher.




Freier, et al.                  Historic                       [Page 11](#dtoc){id=d11}

RFC 6101              The SSL Protocol Version 3.0           August 2011


4.8.  Constants
--------------------------------------------------------


   Typed constants can be defined for purposes of specification by
   declaring a symbol of the desired type and assigning values to it.
   Under-specified types (opaque, variable-length vectors, and
   structures that contain opaque) cannot be assigned values.  No fields
   of a multi-element structure or vector may be elided.

      For example,
        struct {
            uint8 f1;
            uint8 f2;
        } Example1;

        Example1 ex1 = {1, 4};/* assigns f1 = 1, f2 = 4 */

/5.  SSL Protocol
========================================================



   SSL is a layered protocol.  At each layer, messages may include
   fields for length, description, and content.  SSL takes messages to
   be transmitted, fragments the data into manageable blocks, optionally
   compresses the data, applies a MAC, encrypts, and transmits the
   result.  Received data is decrypted, verified, decompressed, and
   reassembled, then delivered to higher level clients.

5.1.  Session and Connection States
--------------------------------------------------------


   An SSL session is stateful.  It is the responsibility of the SSL
   handshake protocol to coordinate the states of the client and server,
   thereby allowing the protocol state machines of each to operate
   consistently, despite the fact that the state is not exactly
   parallel.  Logically, the state is represented twice, once as the
   current operating state and (during the handshake protocol) again as
   the pending state.  Additionally, separate read and write states are
   maintained.  When the client or server receives a change cipher spec
   message, it copies the pending read state into the current read
   state.  When the client or server sends a change cipher spec message,
   it copies the pending write state into the current write state.  When
   the handshake negotiation is complete, the client and server exchange
   change cipher spec messages (see Section 5.3), and they then
   communicate using the newly agreed-upon cipher spec.

   An SSL session may include multiple secure connections; in addition,
   parties may have multiple simultaneous sessions.







Freier, et al.                  Historic                       [Page 12](#dtoc){id=d12}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   The session state includes the following elements:

   session identifier:  An arbitrary byte sequence chosen by the server
      to identify an active or resumable session state.

   peer certificate:  X509.v3 [X509] certificate of the peer.  This
      element of the state may be null.

   compression method:  The algorithm used to compress data prior to
      encryption.

   cipher spec:  Specifies the bulk data encryption algorithm (such as
      null, DES, etc.) and a MAC algorithm (such as MD5 or SHA).  It
      also defines cryptographic attributes such as the hash_size.  (See
      Appendix A.7 for formal definition.)

   master secret:  48-byte secret shared between the client and server.

   is resumable:  A flag indicating whether the session can be used to
      initiate new connections.

   The connection state includes the following elements:

   server and client random:  Byte sequences that are chosen by the
      server and client for each connection.

   server write MAC secret:  The secret used in MAC operations on data
      written by the server.

   client write MAC secret:  The secret used in MAC operations on data
      written by the client.

   server write key:  The bulk cipher key for data encrypted by the
      server and decrypted by the client.

   client write key:  The bulk cipher key for data encrypted by the
      client and decrypted by the server.

   initialization vectors:  When a block cipher in Cipher Block Chaining
      (CBC) mode is used, an initialization vector (IV) is maintained
      for each key.  This field is first initialized by the SSL
      handshake protocol.  Thereafter, the final ciphertext block from
      each record is preserved for use with the following record.








Freier, et al.                  Historic                       [Page 13](#dtoc){id=d13}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   sequence numbers:  Each party maintains separate sequence numbers for
      transmitted and received messages for each connection.  When a
      party sends or receives a change cipher spec message, the
      appropriate sequence number is set to zero.  Sequence numbers are
      of type uint64 and may not exceed 2^64-1.

5.2.  Record Layer
--------------------------------------------------------


   The SSL record layer receives uninterpreted data from higher layers
   in non-empty blocks of arbitrary size.

5.2.1.  Fragmentation
--------------------------------------------------------


   The record layer fragments information blocks into SSLPlaintext
   records of 2^14 bytes or less.  Client message boundaries are not
   preserved in the record layer (i.e., multiple client messages of the
   same ContentType may be coalesced into a single SSLPlaintext record).

        struct {
            uint8 major, minor;
        } ProtocolVersion;

        enum {
            change_cipher_spec(20), alert(21), handshake(22),
            application_data(23), (255)
        } ContentType;

        struct {
            ContentType type;
            ProtocolVersion version;
            uint16 length;
            opaque fragment[SSLPlaintext.length];
        } SSLPlaintext;

   type:  The higher level protocol used to process the enclosed
      fragment.

   version:  The version of protocol being employed.  This document
      describes SSL version 3.0 (see Appendix A.1).

   length:  The length (in bytes) of the following
      SSLPlaintext.fragment.  The length should not exceed 2^14.

   fragment:  The application data.  This data is transparent and
      treated as an independent block to be dealt with by the higher
      level protocol specified by the type field.





Freier, et al.                  Historic                       [Page 14](#dtoc){id=d14}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Note: Data of different SSL record layer content types may be
   interleaved.  Application data is generally of lower precedence for
   transmission than other content types.

5.2.2.  Record Compression and Decompression
--------------------------------------------------------


   All records are compressed using the compression algorithm defined in
   the current session state.  There is always an active compression
   algorithm; however, initially it is defined as
   CompressionMethod.null.  The compression algorithm translates an
   SSLPlaintext structure into an SSLCompressed structure.  Compression
   functions erase their state information whenever the CipherSpec is
   replaced.

   Note: The CipherSpec is part of the session state described in
   Section 5.1.  References to fields of the CipherSpec are made
   throughout this document using presentation syntax.  A more complete
   description of the CipherSpec is shown in Appendix A.7.

   Compression must be lossless and may not increase the content length
   by more than 1024 bytes.  If the decompression function encounters an
   SSLCompressed.fragment that would decompress to a length in excess of
   2^14 bytes, it should issue a fatal decompression_failure alert
   (Section 5.4.2).

        struct {
            ContentType type;       /* same as SSLPlaintext.type */
            ProtocolVersion version;/* same as SSLPlaintext.version */
            uint16 length;
            opaque fragment[SSLCompressed.length];
        } SSLCompressed;

   length:  The length (in bytes) of the following
      SSLCompressed.fragment.  The length should not exceed 2^14 + 1024.

   fragment:  The compressed form of SSLPlaintext.fragment.

   Note: A CompressionMethod.null operation is an identity operation; no
   fields are altered (see Appendix A.4.1.)

   Implementation note: Decompression functions are responsible for
   ensuring that messages cannot cause internal buffer overflows.









Freier, et al.                  Historic                       [Page 15](#dtoc){id=d15}

RFC 6101              The SSL Protocol Version 3.0           August 2011


5.2.3.  Record Payload Protection and the CipherSpec
--------------------------------------------------------


   All records are protected using the encryption and MAC algorithms
   defined in the current CipherSpec.  There is always an active
   CipherSpec; however, initially it is SSL_NULL_WITH_NULL_NULL, which
   does not provide any security.

   Once the handshake is complete, the two parties have shared secrets
   that are used to encrypt records and compute keyed Message
   Authentication Codes (MACs) on their contents.  The techniques used
   to perform the encryption and MAC operations are defined by the
   CipherSpec and constrained by CipherSpec.cipher_type.  The encryption
   and MAC functions translate an SSLCompressed structure into an
   SSLCiphertext.  The decryption functions reverse the process.
   Transmissions also include a sequence number so that missing,
   altered, or extra messages are detectable.

        struct {
            ContentType type;
            ProtocolVersion version;
            uint16 length;
            select (CipherSpec.cipher_type) {
                case stream: GenericStreamCipher;
                case block: GenericBlockCipher;
            } fragment;
        } SSLCiphertext;

   type:  The type field is identical to SSLCompressed.type.

   version:  The version field is identical to SSLCompressed.version.

   length:  The length (in bytes) of the following
      SSLCiphertext.fragment.  The length may not exceed 2^14 + 2048.

   fragment:  The encrypted form of SSLCompressed.fragment, including
      the MAC.

5.2.3.1.  Null or Standard Stream Cipher
--------------------------------------------------------


   Stream ciphers (including BulkCipherAlgorithm.null; see Appendix A.7)
   convert SSLCompressed.fragment structures to and from stream
   SSLCiphertext.fragment structures.

        stream-ciphered struct {
            opaque content[SSLCompressed.length];
            opaque MAC[CipherSpec.hash_size];
        } GenericStreamCipher;




Freier, et al.                  Historic                       [Page 16](#dtoc){id=d16}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   The MAC is generated as:

        hash(MAC_write_secret + pad_2 +
             hash(MAC_write_secret + pad_1 + seq_num +
                  SSLCompressed.type + SSLCompressed.length +
                  SSLCompressed.fragment));

   where "+" denotes concatenation.

   pad_1:  The character 0x36 repeated 48 times for MD5 or 40 times for
      SHA.

   pad_2:  The character 0x5c repeated 48 times for MD5 or 40 times for
      SHA.

   seq_num:  The sequence number for this message.

   hash:  Hashing algorithm derived from the cipher suite.

   Note that the MAC is computed before encryption.  The stream cipher
   encrypts the entire block, including the MAC.  For stream ciphers
   that do not use a synchronization vector (such as RC4), the stream
   cipher state from the end of one record is simply used on the
   subsequent packet.  If the CipherSuite is SSL_NULL_WITH_NULL_NULL,
   encryption consists of the identity operation (i.e., the data is not
   encrypted and the MAC size is zero implying that no MAC is used).
   SSLCiphertext.length is SSLCompressed.length plus
   CipherSpec.hash_size.

5.2.3.2.  CBC Block Cipher
--------------------------------------------------------


   For block ciphers (such as RC2 or DES), the encryption and MAC
   functions convert SSLCompressed.fragment structures to and from block
   SSLCiphertext.fragment structures.

        block-ciphered struct {
            opaque content[SSLCompressed.length];
            opaque MAC[CipherSpec.hash_size];
            uint8 padding[GenericBlockCipher.padding_length];
            uint8 padding_length;
        } GenericBlockCipher;

   The MAC is generated as described in Section 5.2.3.1.

   padding:  Padding that is added to force the length of the plaintext
      to be a multiple of the block cipher's block length.





Freier, et al.                  Historic                       [Page 17](#dtoc){id=d17}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   padding_length:  The length of the padding must be less than the
      cipher's block length and may be zero.  The padding length should
      be such that the total size of the GenericBlockCipher structure is
      a multiple of the cipher's block length.

   The encrypted data length (SSLCiphertext.length) is one more than the
   sum of SSLCompressed.length, CipherSpec.hash_size, and
   padding_length.

   Note: With CBC, the initialization vector (IV) for the first record
   is provided by the handshake protocol.  The IV for subsequent records
   is the last ciphertext block from the previous record.

5.3.  Change Cipher Spec Protocol
--------------------------------------------------------


   The change cipher spec protocol exists to signal transitions in
   ciphering strategies.  The protocol consists of a single message,
   which is encrypted and compressed under the current (not the pending)
   CipherSpec.  The message consists of a single byte of value 1.

        struct {
            enum { change_cipher_spec(1), (255) } type;
        } ChangeCipherSpec;

   The change cipher spec message is sent by both the client and server
   to notify the receiving party that subsequent records will be
   protected under the just-negotiated CipherSpec and keys.  Reception
   of this message causes the receiver to copy the read pending state
   into the read current state.  The client sends a change cipher spec
   message following handshake key exchange and certificate verify
   messages (if any), and the server sends one after successfully
   processing the key exchange message it received from the client.  An
   unexpected change cipher spec message should generate an
   unexpected_message alert (Section 5.4.2).  When resuming a previous
   session, the change cipher spec message is sent after the hello
   messages.

5.4.  Alert Protocol
--------------------------------------------------------


   One of the content types supported by the SSL record layer is the
   alert type.  Alert messages convey the severity of the message and a
   description of the alert.  Alert messages with a level of fatal
   result in the immediate termination of the connection.  In this case,
   other connections corresponding to the session may continue, but the
   session identifier must be invalidated, preventing the failed session
   from being used to establish new connections.  Like other messages,
   alert messages are encrypted and compressed, as specified by the
   current connection state.



Freier, et al.                  Historic                       [Page 18](#dtoc){id=d18}

RFC 6101              The SSL Protocol Version 3.0           August 2011


        enum { warning(1), fatal(2), (255) } AlertLevel;

        enum {
            close_notify(0),
            unexpected_message(10),
            bad_record_mac(20),
            decompression_failure(30),
            handshake_failure(40),
            no_certificate(41),
            bad_certificate(42),
            unsupported_certificate(43),
            certificate_revoked(44),
            certificate_expired(45),
            certificate_unknown(46),
            illegal_parameter (47)
            (255)
        } AlertDescription;

        struct {
            AlertLevel level;
            AlertDescription description;
        } Alert;

5.4.1.  Closure Alerts
--------------------------------------------------------


   The client and the server must share knowledge that the connection is
   ending in order to avoid a truncation attack.  Either party may
   initiate the exchange of closing messages.

   close_notify:  This message notifies the recipient that the sender
      will not send any more messages on this connection.  The session
      becomes unresumable if any connection is terminated without proper
      close_notify messages with level equal to warning.

   Either party may initiate a close by sending a close_notify alert.
   Any data received after a closure alert is ignored.

   Each party is required to send a close_notify alert before closing
   the write side of the connection.  It is required that the other
   party respond with a close_notify alert of its own and close down the
   connection immediately, discarding any pending writes.  It is not
   required for the initiator of the close to wait for the responding
   close_notify alert before closing the read side of the connection.

   NB: It is assumed that closing a connection reliably delivers pending
   data before destroying the transport.





Freier, et al.                  Historic                       [Page 19](#dtoc){id=d19}

RFC 6101              The SSL Protocol Version 3.0           August 2011


5.4.2.  Error Alerts
--------------------------------------------------------


   Error handling in the SSL handshake protocol is very simple.  When an
   error is detected, the detecting party sends a message to the other
   party.  Upon transmission or receipt of a fatal alert message, both
   parties immediately close the connection.  Servers and clients are
   required to forget any session identifiers, keys, and secrets
   associated with a failed connection.  The following error alerts are
   defined:

   unexpected_message:  An inappropriate message was received.  This
      alert is always fatal and should never be observed in
      communication between proper implementations.

   bad_record_mac:  This alert is returned if a record is received with
      an incorrect MAC.  This message is always fatal.

   decompression_failure:  The decompression function received improper
      input (e.g., data that would expand to excessive length).  This
      message is always fatal.

   handshake_failure:  Reception of a handshake_failure alert message
      indicates that the sender was unable to negotiate an acceptable
      set of security parameters given the options available.  This is a
      fatal error.

   no_certificate:  A no_certificate alert message may be sent in
      response to a certification request if no appropriate certificate
      is available.

   bad_certificate:  A certificate was corrupt, contained signatures
      that did not verify correctly, etc.

   unsupported_certificate:  A certificate was of an unsupported type.

   certificate_revoked:  A certificate was revoked by its signer.

   certificate_expired:  A certificate has expired or is not currently
      valid.

   certificate_unknown:  Some other (unspecified) issue arose in
      processing the certificate, rendering it unacceptable.

   illegal_parameter:  A field in the handshake was out of range or
      inconsistent with other fields.  This is always fatal.






Freier, et al.                  Historic                       [Page 20](#dtoc){id=d20}

RFC 6101              The SSL Protocol Version 3.0           August 2011


5.5.  Handshake Protocol Overview
--------------------------------------------------------


   The cryptographic parameters of the session state are produced by the
   SSL handshake protocol, which operates on top of the SSL record
   layer.  When an SSL client and server first start communicating, they
   agree on a protocol version, select cryptographic algorithms,
   optionally authenticate each other, and use public key encryption
   techniques to generate shared secrets.  These processes are performed
   in the handshake protocol, which can be summarized as follows: the
   client sends a client hello message to which the server must respond
   with a server hello message, or else a fatal error will occur and the
   connection will fail.  The client hello and server hello are used to
   establish security enhancement capabilities between client and
   server.  The client hello and server hello establish the following
   attributes: Protocol Version, Session ID, Cipher Suite, and
   Compression Method.  Additionally, two random values are generated
   and exchanged: ClientHello.random and ServerHello.random.

   Following the hello messages, the server will send its certificate,
   if it is to be authenticated.  Additionally, a server key exchange
   message may be sent, if it is required (e.g., if their server has no
   certificate, or if its certificate is for signing only).  If the
   server is authenticated, it may request a certificate from the
   client, if that is appropriate to the cipher suite selected.  Now the
   server will send the server hello done message, indicating that the
   hello-message phase of the handshake is complete.  The server will
   then wait for a client response.  If the server has sent a
   certificate request message, the client must send either the
   certificate message or a no_certificate alert.  The client key
   exchange message is now sent, and the content of that message will
   depend on the public key algorithm selected between the client hello
   and the server hello.  If the client has sent a certificate with
   signing ability, a digitally-signed certificate verify message is
   sent to explicitly verify the certificate.

   At this point, a change cipher spec message is sent by the client,
   and the client copies the pending CipherSpec into the current
   CipherSpec.  The client then immediately sends the finished message
   under the new algorithms, keys, and secrets.  In response, the server
   will send its own change cipher spec message, transfer the pending to
   the current CipherSpec, and send its finished message under the new
   CipherSpec.  At this point, the handshake is complete and the client
   and server may begin to exchange application layer data.  (See flow
   chart below.)







Freier, et al.                  Historic                       [Page 21](#dtoc){id=d21}

RFC 6101              The SSL Protocol Version 3.0           August 2011


      Client                                                Server

      ClientHello                   -------->
                                                       ServerHello
                                                      Certificate*
                                                ServerKeyExchange*
                                               CertificateRequest*
                                    <--------      ServerHelloDone
      Certificate*
      ClientKeyExchange
      CertificateVerify*
      [ChangeCipherSpec]
      Finished                      -------->
                                                [ChangeCipherSpec]
                                    <--------             Finished
      Application Data              <------->     Application Data

      * Indicates optional or situation-dependent messages that are not
        always sent.

   Note: To help avoid pipeline stalls, ChangeCipherSpec is an
   independent SSL protocol content type, and is not actually an SSL
   handshake message.

   When the client and server decide to resume a previous session or
   duplicate an existing session (instead of negotiating new security
   parameters) the message flow is as follows:

   The client sends a ClientHello using the session ID of the session to
   be resumed.  The server then checks its session cache for a match.
   If a match is found, and the server is willing to re-establish the
   connection under the specified session state, it will send a
   ServerHello with the same session ID value.  At this point, both
   client and server must send change cipher spec messages and proceed
   directly to finished messages.  Once the re-establishment is
   complete, the client and server may begin to exchange application
   layer data.  (See flow chart below.)  If a session ID match is not
   found, the server generates a new session ID and the SSL client and
   server perform a full handshake.












Freier, et al.                  Historic                       [Page 22](#dtoc){id=d22}

RFC 6101              The SSL Protocol Version 3.0           August 2011


      Client                                                Server

      ClientHello                   -------->
                                                       ServerHello
                                              [change cipher spec]
                                    <--------             Finished
      change cipher spec
      Finished                      -------->
      Application Data              <------->     Application Data


   The contents and significance of each message will be presented in
   detail in the following sections.

5.6.  Handshake Protocol
--------------------------------------------------------


   The SSL handshake protocol is one of the defined higher level clients
   of the SSL record protocol.  This protocol is used to negotiate the
   secure attributes of a session.  Handshake messages are supplied to
   the SSL record layer, where they are encapsulated within one or more
   SSLPlaintext structures, which are processed and transmitted as
   specified by the current active session state.

        enum {
            hello_request(0), client_hello(1), server_hello(2),
            certificate(11), server_key_exchange (12),
            certificate_request(13), server_hello_done(14),
            certificate_verify(15), client_key_exchange(16),
            finished(20), (255)
        } HandshakeType;

        struct {
            HandshakeType msg_type;    /* handshake type */
            uint24 length;             /* bytes in message */
            select (HandshakeType) {
                case hello_request: HelloRequest;
                case client_hello: ClientHello;
                case server_hello: ServerHello;
                case certificate: Certificate;
                case server_key_exchange: ServerKeyExchange;
                case certificate_request: CertificateRequest;
                case server_hello_done: ServerHelloDone;
                case certificate_verify: CertificateVerify;
                case client_key_exchange: ClientKeyExchange;
                case finished: Finished;
            } body;
        } Handshake;




Freier, et al.                  Historic                       [Page 23](#dtoc){id=d23}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   The handshake protocol messages are presented in the order they must
   be sent; sending handshake messages in an unexpected order results in
   a fatal error.

5.6.1.  Hello messages
--------------------------------------------------------


   The hello phase messages are used to exchange security enhancement
   capabilities between the client and server.  When a new session
   begins, the CipherSpec encryption, hash, and compression algorithms
   are initialized to null.  The current CipherSpec is used for
   renegotiation messages.

5.6.1.1.  Hello Request
--------------------------------------------------------


   The hello request message may be sent by the server at any time, but
   will be ignored by the client if the handshake protocol is already
   underway.  It is a simple notification that the client should begin
   the negotiation process anew by sending a client hello message when
   convenient.

   Note: Since handshake messages are intended to have transmission
   precedence over application data, it is expected that the negotiation
   begin in no more than one or two times the transmission time of a
   maximum-length application data message.

   After sending a hello request, servers should not repeat the request
   until the subsequent handshake negotiation is complete.  A client
   that receives a hello request while in a handshake negotiation state
   should simply ignore the message.

   The structure of a hello request message is as follows:

        struct { } HelloRequest;

5.6.1.2.  Client Hello
--------------------------------------------------------


   When a client first connects to a server it is required to send the
   client hello as its first message.  The client can also send a client
   hello in response to a hello request or on its own initiative in
   order to renegotiate the security parameters in an existing
   connection.  The client hello message includes a random structure,
   which is used later in the protocol.









Freier, et al.                  Historic                       [Page 24](#dtoc){id=d24}

RFC 6101              The SSL Protocol Version 3.0           August 2011


      struct {
          uint32 gmt_unix_time;
          opaque random_bytes[28];
      } Random;

   gmt_unix_time:  The current time and date in standard UNIX 32-bit
      format according to the sender's internal clock.  Clocks are not
      required to be set correctly by the basic SSL protocol; higher
      level or application protocols may define additional requirements.

   random_bytes:  28 bytes generated by a secure random number
      generator.

   The client hello message includes a variable-length session
   identifier.  If not empty, the value identifies a session between the
   same client and server whose security parameters the client wishes to
   reuse.  The session identifier may be from an earlier connection,
   this connection, or another currently active connection.  The second
   option is useful if the client only wishes to update the random
   structures and derived values of a connection, while the third option
   makes it possible to establish several simultaneous independent
   secure connections without repeating the full handshake protocol.
   The actual contents of the SessionID are defined by the server.

        opaque SessionID<0..32>;

   Warning: Servers must not place confidential information in session
   identifiers or let the contents of fake session identifiers cause any
   breach of security.

   The CipherSuite list, passed from the client to the server in the
   client hello message, contains the combinations of cryptographic
   algorithms supported by the client in order of the client's
   preference (first choice first).  Each CipherSuite defines both a key
   exchange algorithm and a CipherSpec.  The server will select a cipher
   suite or, if no acceptable choices are presented, return a handshake
   failure alert and close the connection.

        uint8 CipherSuite[2];  /* Cryptographic suite selector */

   The client hello includes a list of compression algorithms supported
   by the client, ordered according to the client's preference.  If the
   server supports none of those specified by the client, the session
   must fail.

        enum { null(0), (255) } CompressionMethod;

   Issue: Which compression methods to support is under investigation.



Freier, et al.                  Historic                       [Page 25](#dtoc){id=d25}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   The structure of the client hello is as follows.

        struct {
            ProtocolVersion client_version;
            Random random;
            SessionID session_id;
            CipherSuite cipher_suites<2..2^16-1>;
            CompressionMethod compression_methods<1..2^8-1>;
        } ClientHello;

   client_version:  The version of the SSL protocol by which the client
      wishes to communicate during this session.  This should be the
      most recent (highest valued) version supported by the client.  For
      this version of the specification, the version will be 3.0 (see
      Appendix E for details about backward compatibility).

   random:  A client-generated random structure.

   session_id:  The ID of a session the client wishes to use for this
      connection.  This field should be empty if no session_id is
      available or the client wishes to generate new security
      parameters.

   cipher_suites:  This is a list of the cryptographic options supported
      by the client, sorted with the client's first preference first.
      If the session_id field is not empty (implying a session
      resumption request), this vector must include at least the
      cipher_suite from that session.  Values are defined in
      Appendix A.6.

   compression_methods:  This is a list of the compression methods
      supported by the client, sorted by client preference.  If the
      session_id field is not empty (implying a session resumption
      request), this vector must include at least the compression_method
      from that session.  All implementations must support
      CompressionMethod.null.

   After sending the client hello message, the client waits for a server
   hello message.  Any other handshake message returned by the server
   except for a hello request is treated as a fatal error.

   Implementation note: Application data may not be sent before a
   finished message has been sent.  Transmitted application data is
   known to be insecure until a valid finished message has been
   received.  This absolute restriction is relaxed if there is a
   current, non-null encryption on this connection.





Freier, et al.                  Historic                       [Page 26](#dtoc){id=d26}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Forward compatibility note: In the interests of forward
   compatibility, it is permitted for a client hello message to include
   extra data after the compression methods.  This data must be included
   in the handshake hashes, but must otherwise be ignored.

5.6.1.3.  Server Hello
--------------------------------------------------------


   The server processes the client hello message and responds with
   either a handshake_failure alert or server hello message.

        struct {
            ProtocolVersion server_version;
            Random random;
            SessionID session_id;
            CipherSuite cipher_suite;
            CompressionMethod compression_method;
        } ServerHello;


   server_version:  This field will contain the lower of that suggested
      by the client in the client hello and the highest supported by the
      server.  For this version of the specification, the version will
      be 3.0 (see Appendix E for details about backward compatibility).

   random:  This structure is generated by the server and must be
      different from (and independent of) ClientHello.random.

   session_id:  This is the identity of the session corresponding to
      this connection.  If the ClientHello.session_id was non-empty, the
      server will look in its session cache for a match.  If a match is
      found and the server is willing to establish the new connection
      using the specified session state, the server will respond with
      the same value as was supplied by the client.  This indicates a
      resumed session and dictates that the parties must proceed
      directly to the finished messages.  Otherwise, this field will
      contain a different value identifying the new session.  The server
      may return an empty session_id to indicate that the session will
      not be cached and therefore cannot be resumed.

   cipher_suite:  The single cipher suite selected by the server from
      the list in ClientHello.cipher_suites.  For resumed sessions, this
      field is the value from the state of the session being resumed.

   compression_method:  The single compression algorithm selected by the
      server from the list in ClientHello.compression_methods.  For
      resumed sessions, this field is the value from the resumed session
      state.




Freier, et al.                  Historic                       [Page 27](#dtoc){id=d27}

RFC 6101              The SSL Protocol Version 3.0           August 2011


5.6.2.  Server Certificate
--------------------------------------------------------


   If the server is to be authenticated (which is generally the case),
   the server sends its certificate immediately following the server
   hello message.  The certificate type must be appropriate for the
   selected cipher suite's key exchange algorithm, and is generally an
   X.509.v3 certificate (or a modified X.509 certificate in the case of
   FORTEZZA(tm) [FOR]).  The same message type will be used for the
   client's response to a certificate request message.

        opaque ASN.1Cert<1..2^24-1>;
        struct {
            ASN.1Cert certificate_list<1..2^24-1>;
        } Certificate;

   certificate_list:  This is a sequence (chain) of X.509.v3
      certificates, ordered with the sender's certificate first followed
      by any certificate authority certificates proceeding sequentially
      upward.

   Note: PKCS #7 [PKCS7] is not used as the format for the certificate
   vector because PKCS #6 [PKCS6] extended certificates are not used.
   Also, PKCS #7 defines a Set rather than a Sequence, making the task
   of parsing the list more difficult.

5.6.3.  Server Key Exchange Message
--------------------------------------------------------


   The server key exchange message is sent by the server if it has no
   certificate, has a certificate only used for signing (e.g., DSS [DSS]
   certificates, signing-only RSA [RSA] certificates), or FORTEZZA KEA
   key exchange is used.  This message is not used if the server
   certificate contains Diffie-Hellman [DH1] parameters.

   Note: According to current US export law, RSA moduli larger than 512
   bits may not be used for key exchange in software exported from the
   US.  With this message, larger RSA keys may be used as signature-only
   certificates to sign temporary shorter RSA keys for key exchange.

        enum { rsa, diffie_hellman, fortezza_kea }
               KeyExchangeAlgorithm;

        struct {
            opaque rsa_modulus<1..2^16-1>;
            opaque rsa_exponent<1..2^16-1>;
        } ServerRSAParams;






Freier, et al.                  Historic                       [Page 28](#dtoc){id=d28}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   rsa_modulus:  The modulus of the server's temporary RSA key.

   rsa_exponent:  The public exponent of the server's temporary RSA key.

        struct {
            opaque dh_p<1..2^16-1>;
            opaque dh_g<1..2^16-1>;
            opaque dh_Ys<1..2^16-1>;
        } ServerDHParams;     /* Ephemeral DH parameters */

   dh_p:  The prime modulus used for the Diffie-Hellman operation.

   dh_g:  The generator used for the Diffie-Hellman operation.

   dh_Ys:  The server's Diffie-Hellman public value (gX mod p).

        struct {
            opaque r_s [128];
        } ServerFortezzaParams;

   r_s:  Server random number for FORTEZZA KEA (Key Exchange Algorithm).

        struct {
            select (KeyExchangeAlgorithm) {
                case diffie_hellman:
                    ServerDHParams params;
                    Signature signed_params;
                case rsa:
                    ServerRSAParams params;
                    Signature signed_params;
                case fortezza_kea:
                    ServerFortezzaParams params;
            };
        } ServerKeyExchange;

   params:  The server's key exchange parameters.

   signed_params:  A hash of the corresponding params value, with the
      signature appropriate to that hash applied.

   md5_hash:  MD5(ClientHello.random + ServerHello.random +
      ServerParams);









Freier, et al.                  Historic                       [Page 29](#dtoc){id=d29}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   sha_hash:  SHA(ClientHello.random + ServerHello.random +
      ServerParams);

        enum { anonymous, rsa, dsa } SignatureAlgorithm;

        digitally-signed struct {
            select(SignatureAlgorithm) {
                case anonymous: struct { };
                case rsa:
                    opaque md5_hash[16];
                    opaque sha_hash[20];
                case dsa:
                    opaque sha_hash[20];
            };
        } Signature;

5.6.4.  Certificate Request
--------------------------------------------------------


   A non-anonymous server can optionally request a certificate from the
   client, if appropriate for the selected cipher suite.

        enum {
            rsa_sign(1), dss_sign(2), rsa_fixed_dh(3), dss_fixed_dh(4),
            rsa_ephemeral_dh(5), dss_ephemeral_dh(6), fortezza_kea(20),
            (255)
        } ClientCertificateType;

        opaque DistinguishedName<1..2^16-1>;

        struct {
            ClientCertificateType certificate_types<1..2^8-1>;
            DistinguishedName certificate_authorities<3..2^16-1>;
        } CertificateRequest;

   certificate_types:  This field is a list of the types of certificates
      requested, sorted in order of the server's preference.

   certificate_authorities:  A list of the distinguished names of
      acceptable certificate authorities.

   Note: DistinguishedName is derived from [X509].

   Note: It is a fatal handshake_failure alert for an anonymous server
   to request client identification.







Freier, et al.                  Historic                       [Page 30](#dtoc){id=d30}

RFC 6101              The SSL Protocol Version 3.0           August 2011


5.6.5.  Server Hello Done
--------------------------------------------------------


   The server hello done message is sent by the server to indicate the
   end of the server hello and associated messages.  After sending this
   message, the server will wait for a client response.

        struct { } ServerHelloDone;

   Upon receipt of the server hello done message the client should
   verify that the server provided a valid certificate if required and
   check that the server hello parameters are acceptable.

5.6.6.  Client Certificate
--------------------------------------------------------


   This is the first message the client can send after receiving a
   server hello done message.  This message is only sent if the server
   requests a certificate.  If no suitable certificate is available, the
   client should send a no_certificate alert instead.  This alert is
   only a warning; however, the server may respond with a fatal
   handshake failure alert if client authentication is required.  Client
   certificates are sent using the certificate defined in Section 5.6.2.

   Note: Client Diffie-Hellman certificates must match the server
   specified Diffie-Hellman parameters.

5.6.7.  Client Key Exchange Message
--------------------------------------------------------


   The choice of messages depends on which public key algorithm(s) has
   (have) been selected.  See Section 5.6.3 for the KeyExchangeAlgorithm
   definition.

        struct {
            select (KeyExchangeAlgorithm) {
                case rsa: EncryptedPreMasterSecret;
                case diffie_hellman: ClientDiffieHellmanPublic;
                case fortezza_kea: FortezzaKeys;
            } exchange_keys;
        } ClientKeyExchange;

   The information to select the appropriate record structure is in the
   pending session state (see Section 5.1).










Freier, et al.                  Historic                       [Page 31](#dtoc){id=d31}

RFC 6101              The SSL Protocol Version 3.0           August 2011


5.6.7.1.  RSA Encrypted Premaster Secret Message
--------------------------------------------------------


   If RSA is being used for key agreement and authentication, the client
   generates a 48-byte premaster secret, encrypts it under the public
   key from the server's certificate or temporary RSA key from a server
   key exchange message, and sends the result in an encrypted premaster
   secret message.

        struct {
            ProtocolVersion client_version;
            opaque random[46];
        } PreMasterSecret;

   client_version:  The latest (newest) version supported by the client.
      This is used to detect version roll-back attacks.

   random:  46 securely-generated random bytes.

        struct {
            public-key-encrypted PreMasterSecret pre_master_secret;
        } EncryptedPreMasterSecret;

   pre_master_secret:  This random value is generated by the client and
      is used to generate the master secret, as specified in
      Section 6.1.

5.6.7.2.  FORTEZZA Key Exchange Message
--------------------------------------------------------


   Under FORTEZZA, the client derives a token encryption key (TEK) using
   the FORTEZZA Key Exchange Algorithm (KEA).  The client's KEA
   calculation uses the public key in the server's certificate along
   with private parameters in the client's token.  The client sends
   public parameters needed for the server to generate the TEK, using
   its own private parameters.  The client generates session keys, wraps
   them using the TEK, and sends the results to the server.  The client
   generates IVs for the session keys and TEK and sends them also.  The
   client generates a random 48-byte premaster secret, encrypts it using
   the TEK, and sends the result:













Freier, et al.                  Historic                       [Page 32](#dtoc){id=d32}

RFC 6101              The SSL Protocol Version 3.0           August 2011


        struct {
            opaque y_c<0..128>;
            opaque r_c[128];
            opaque y_signature[40];
            opaque wrapped_client_write_key[12];
            opaque wrapped_server_write_key[12];
            opaque client_write_iv[24];
            opaque server_write_iv[24];
            opaque master_secret_iv[24];
            block-ciphered opaque encrypted_pre_master_secret[48];
        } FortezzaKeys;


   y_signature:  y_signature is the signature of the KEA public key,
      signed with the client's DSS private key.

   y_c:  The client's Yc value (public key) for the KEA calculation.  If
      the client has sent a certificate, and its KEA public key is
      suitable, this value must be empty since the certificate already
      contains this value.  If the client sent a certificate without a
      suitable public key, y_c is used and y_signature is the KEA public
      key signed with the client's DSS private key.  For this value to
      be used, it must be between 64 and 128 bytes.

   r_c:  The client's Rc value for the KEA calculation.

   wrapped_client_write_key:  This is the client's write key, wrapped by
      the TEK.

   wrapped_server_write_key:  This is the server's write key, wrapped by
      the TEK.

   client_write_iv:  The IV for the client write key.

   server_write_iv:  The IV for the server write key.

   master_secret_iv:  This is the IV for the TEK used to encrypt the
      premaster secret.

   pre_master_secret:  A random value, generated by the client and used
      to generate the master secret, as specified in Section 6.1.  In
      the above structure, it is encrypted using the TEK.









Freier, et al.                  Historic                       [Page 33](#dtoc){id=d33}

RFC 6101              The SSL Protocol Version 3.0           August 2011


5.6.7.3.  Client Diffie-Hellman Public Value
--------------------------------------------------------


   This structure conveys the client's Diffie-Hellman public value (Yc)
   if it was not already included in the client's certificate.  The
   encoding used for Yc is determined by the enumerated
   PublicValueEncoding.

        enum { implicit, explicit } PublicValueEncoding;

   implicit:  If the client certificate already contains the public
      value, then it is implicit and Yc does not need to be sent again.

   explicit:  Yc needs to be sent.

        struct {
            select (PublicValueEncoding) {
                case implicit: struct { };
                case explicit: opaque dh_Yc<1..2^16-1>;
            } dh_public;
        } ClientDiffieHellmanPublic;

   dh_Yc:  The client's Diffie-Hellman public value (Yc).

5.6.8.  Certificate Verify
--------------------------------------------------------


   This message is used to provide explicit verification of a client
   certificate.  This message is only sent following any client
   certificate that has signing capability (i.e., all certificates
   except those containing fixed Diffie-Hellman parameters).

          struct {
               Signature signature;
          } CertificateVerify;

        CertificateVerify.signature.md5_hash
                   MD5(master_secret + pad_2 +
                       MD5(handshake_messages + master_secret + pad_1));
        Certificate.signature.sha_hash
                   SHA(master_secret + pad_2 +
                       SHA(handshake_messages + master_secret + pad_1));

   pad_1:  This is identical to the pad_1 defined in Section 5.2.3.1.

   pad_2:  This is identical to the pad_2 defined in Section 5.2.3.1.

   Here, handshake_messages refers to all handshake messages starting at
   client hello up to but not including this message.




Freier, et al.                  Historic                       [Page 34](#dtoc){id=d34}

RFC 6101              The SSL Protocol Version 3.0           August 2011


5.6.9.  Finished
--------------------------------------------------------


   A finished message is always sent immediately after a change cipher
   spec message to verify that the key exchange and authentication
   processes were successful.  The finished message is the first
   protected with the just-negotiated algorithms, keys, and secrets.  No
   acknowledgment of the finished message is required; parties may begin
   sending encrypted data immediately after sending the finished
   message.  Recipients of finished messages must verify that the
   contents are correct.

        enum { client(0x434C4E54), server(0x53525652) } Sender;

        struct {
            opaque md5_hash[16];
            opaque sha_hash[20];
        } Finished;

   md5_hash:  MD5(master_secret + pad2 + MD5(handshake_messages + Sender
      + master_secret + pad1));

   sha_hash:  SHA(master_secret + pad2 + SHA(handshake_messages + Sender
      + master_secret + pad1));

   handshake_messages:  All of the data from all handshake messages up
      to but not including this message.  This is only data visible at
      the handshake layer and does not include record layer headers.

   It is a fatal error if a finished message is not preceeded by a
   change cipher spec message at the appropriate point in the handshake.

   The hash contained in finished messages sent by the server
   incorporate Sender.server; those sent by the client incorporate
   Sender.client.  The value handshake_messages includes all handshake
   messages starting at client hello up to but not including this
   finished message.  This may be different from handshake_messages in
   Section 5.6.8 because it would include the certificate verify message
   (if sent).

   Note: Change cipher spec messages are not handshake messages and are
   not included in the hash computations.










Freier, et al.                  Historic                       [Page 35](#dtoc){id=d35}

RFC 6101              The SSL Protocol Version 3.0           August 2011


5.7.  Application Data Protocol
--------------------------------------------------------


   Application data messages are carried by the record layer and are
   fragmented, compressed, and encrypted based on the current connection
   state.  The messages are treated as transparent data to the record
   layer.

/6.  Cryptographic Computations
========================================================



   The key exchange, authentication, encryption, and MAC algorithms are
   determined by the cipher_suite selected by the server and revealed in
   the server hello message.

6.1.  Asymmetric Cryptographic Computations
--------------------------------------------------------


   The asymmetric algorithms are used in the handshake protocol to
   authenticate parties and to generate shared keys and secrets.

   For Diffie-Hellman, RSA, and FORTEZZA, the same algorithm is used to
   convert the pre_master_secret into the master_secret.  The
   pre_master_secret should be deleted from memory once the
   master_secret has been computed.

        master_secret =
          MD5(pre_master_secret + SHA('A' + pre_master_secret +
              ClientHello.random + ServerHello.random)) +
          MD5(pre_master_secret + SHA('BB' + pre_master_secret +
              ClientHello.random + ServerHello.random)) +
          MD5(pre_master_secret + SHA('CCC' + pre_master_secret +
              ClientHello.random + ServerHello.random));

6.1.1.  RSA
--------------------------------------------------------


   When RSA is used for server authentication and key exchange, a 48-
   byte pre_master_secret is generated by the client, encrypted under
   the server's public key, and sent to the server.  The server uses its
   private key to decrypt the pre_master_secret.  Both parties then
   convert the pre_master_secret into the master_secret, as specified
   above.

   RSA digital signatures are performed using PKCS #1 [PKCS1] block
   type 1.  RSA public key encryption is performed using PKCS #1 block
   type 2.








Freier, et al.                  Historic                       [Page 36](#dtoc){id=d36}

RFC 6101              The SSL Protocol Version 3.0           August 2011


6.1.2.  Diffie-Hellman
--------------------------------------------------------


   A conventional Diffie-Hellman computation is performed.  The
   negotiated key (Z) is used as the pre_master_secret, and is converted
   into the master_secret, as specified above.

   Note: Diffie-Hellman parameters are specified by the server, and may
   be either ephemeral or contained within the server's certificate.

6.1.3.  FORTEZZA
--------------------------------------------------------


   A random 48-byte pre_master_secret is sent encrypted under the TEK
   and its IV.  The server decrypts the pre_master_secret and converts
   it into a master_secret, as specified above.  Bulk cipher keys and
   IVs for encryption are generated by the client's token and exchanged
   in the key exchange message; the master_secret is only used for MAC
   computations.

6.2.  Symmetric Cryptographic Calculations and the CipherSpec
--------------------------------------------------------


   The technique used to encrypt and verify the integrity of SSL records
   is specified by the currently active CipherSpec.  A typical example
   would be to encrypt data using DES and generate authentication codes
   using MD5.  The encryption and MAC algorithms are set to
   SSL_NULL_WITH_NULL_NULL at the beginning of the SSL handshake
   protocol, indicating that no message authentication or encryption is
   performed.  The handshake protocol is used to negotiate a more secure
   CipherSpec and to generate cryptographic keys.

6.2.1.  The Master Secret
--------------------------------------------------------


   Before secure encryption or integrity verification can be performed
   on records, the client and server need to generate shared secret
   information known only to themselves.  This value is a 48-byte
   quantity called the master secret.  The master secret is used to
   generate keys and secrets for encryption and MAC computations.  Some
   algorithms, such as FORTEZZA, may have their own procedure for
   generating encryption keys (the master secret is used only for MAC
   computations in FORTEZZA).

6.2.2.  Converting the Master Secret into Keys and MAC Secrets
--------------------------------------------------------


   The master secret is hashed into a sequence of secure bytes, which
   are assigned to the MAC secrets, keys, and non-export IVs required by
   the current CipherSpec (see Appendix A.7).  CipherSpecs require a
   client write MAC secret, a server write MAC secret, a client write
   key, a server write key, a client write IV, and a server write IV,
   which are generated from the master secret in that order.  Unused



Freier, et al.                  Historic                       [Page 37](#dtoc){id=d37}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   values, such as FORTEZZA keys communicated in the KeyExchange
   message, are empty.  The following inputs are available to the key
   definition process:

          opaque MasterSecret[48]
          ClientHello.random
          ServerHello.random

   When generating keys and MAC secrets, the master secret is used as an
   entropy source, and the random values provide unencrypted salt
   material and IVs for exportable ciphers.

   To generate the key material, compute

        key_block =
          MD5(master_secret + SHA(`A' + master_secret +
                                  ServerHello.random +
                                  ClientHello.random)) +
          MD5(master_secret + SHA(`BB' + master_secret +
                                  ServerHello.random +
                                  ClientHello.random)) +
          MD5(master_secret + SHA(`CCC' + master_secret +
                                  ServerHello.random +
                                  ClientHello.random)) + [...];

   until enough output has been generated.  Then, the key_block is
   partitioned as follows.

        client_write_MAC_secret[CipherSpec.hash_size]
        server_write_MAC_secret[CipherSpec.hash_size]
        client_write_key[CipherSpec.key_material]
        server_write_key[CipherSpec.key_material]
        client_write_IV[CipherSpec.IV_size] /* non-export ciphers */
        server_write_IV[CipherSpec.IV_size] /* non-export ciphers */

   Any extra key_block material is discarded.

   Exportable encryption algorithms (for which CipherSpec.is_exportable
   is true) require additional processing as follows to derive their
   final write keys:

        final_client_write_key = MD5(client_write_key +
                                     ClientHello.random +
                                     ServerHello.random);
        final_server_write_key = MD5(server_write_key +
                                     ServerHello.random +
                                     ClientHello.random);




Freier, et al.                  Historic                       [Page 38](#dtoc){id=d38}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Exportable encryption algorithms derive their IVs from the random
   messages:

        client_write_IV = MD5(ClientHello.random + ServerHello.random);
        server_write_IV = MD5(ServerHello.random + ClientHello.random);

   MD5 outputs are trimmed to the appropriate size by discarding the
   least-significant bytes.

6.2.2.1.  Export Key Generation Example
--------------------------------------------------------


   SSL_RSA_EXPORT_WITH_RC2_CBC_40_MD5 requires five random bytes for
   each of the two encryption keys and 16 bytes for each of the MAC
   keys, for a total of 42 bytes of key material.  MD5 produces 16 bytes
   of output per call, so three calls to MD5 are required.  The MD5
   outputs are concatenated into a 48-byte key_block with the first MD5
   call providing bytes zero through 15, the second providing bytes 16
   through 31, etc.  The key_block is partitioned, and the write keys
   are salted because this is an exportable encryption algorithm.

        client_write_MAC_secret = key_block[0..15]
        server_write_MAC_secret = key_block[16..31]
        client_write_key      = key_block[32..36]
        server_write_key      = key_block[37..41]
        final_client_write_key = MD5(client_write_key +
                                     ClientHello.random +
                                     ServerHello.random)[0..15];
        final_server_write_key = MD5(server_write_key +
                                     ServerHello.random +
                                     ClientHello.random)[0..15];
        client_write_IV = MD5(ClientHello.random +
                              ServerHello.random)[0..7];
        server_write_IV = MD5(ServerHello.random +
                              ClientHello.random)[0..7];

/7.  Security Considerations
========================================================



   See Appendix F.













Freier, et al.                  Historic                       [Page 39](#dtoc){id=d39}

RFC 6101              The SSL Protocol Version 3.0           August 2011


/8.  Informative References
========================================================



   [DH1]      Diffie, W. and M. Hellman, "New Directions in
              Cryptography", IEEE Transactions on Information Theory V.
              IT-22, n. 6, pp. 74-84, June 1977.

   [SSL-2]    Hickman, K., "The SSL Protocol", February 1995.

   [3DES]     Tuchman, W., "Hellman Presents No Shortcut Solutions To
              DES", IEEE Spectrum, v. 16, n. 7, pp 40-41, July 1979.

   [DES]      ANSI X3.106, "American National Standard for Information
              Systems-Data Link Encryption", American National
              Standards Institute, 1983.

   [DSS]      NIST FIPS PUB 186, "Digital Signature Standard", National
              Institute of Standards and Technology U.S. Department of
              Commerce, May 1994.

   [FOR]      NSA X22, "FORTEZZA: Application Implementers Guide",
              Document # PD4002103-1.01, April 1995.

   [RFC0959]  Postel, J. and J. Reynolds, "File Transfer Protocol",
              STD 9, RFC 959, October 1985.

   [RFC0791]  Postel, J., "Internet Protocol", STD 5, RFC 791,
              September 1981.

   [RFC1945]  Berners-Lee, T., Fielding, R., and H. Nielsen, "Hypertext
              Transfer Protocol -- HTTP/1.0", RFC 1945, May 1996.

   [RFC1321]  Rivest, R., "The MD5 Message-Digest Algorithm", RFC 1321,
              April 1992.

   [RFC0793]  Postel, J., "Transmission Control Protocol", STD 7,
              RFC 793, September 1981.

   [RFC0854]  Postel, J. and J. Reynolds, "Telnet Protocol
              Specification", STD 8, RFC 854, May 1983.

   [RFC1832]  Srinivasan, R., "XDR: External Data Representation
              Standard", RFC 1832, August 1995.









Freier, et al.                  Historic                       [Page 40](#dtoc){id=d40}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   [RFC2104]  Krawczyk, H., Bellare, M., and R. Canetti, "HMAC: Keyed-
              Hashing for Message Authentication", RFC 2104,
              February 1997.

   [IDEA]     Lai, X., "On the Design and Security of Block Ciphers",
              ETH Series in Information Processing, v. 1, Konstanz:
              Hartung-Gorre Verlag, 1992.

   [PKCS1]    RSA Laboratories, "PKCS #1: RSA Encryption Standard
              version 1.5", November 1993.

   [PKCS6]    RSA Laboratories, "PKCS #6: RSA Extended Certificate
              Syntax Standard version 1.5", November 1993.

   [PKCS7]    RSA Laboratories, "PKCS #7: RSA Cryptographic Message
              Syntax Standard version 1.5", November 1993.

   [RSA]      Rivest, R., Shamir, A., and L. Adleman, "A Method for
              Obtaining Digital Signatures and Public-Key
              Cryptosystems", Communications of the ACM v. 21, n. 2 pp.
              120-126., February 1978.

   [SCH]      Schneier, B., "Applied Cryptography: Protocols,
              Algorithms, and Source Code in C", John Wiley & Sons,
              1994.

   [SHA]      NIST FIPS PUB 180-1, "Secure Hash Standard", May 1994.

              National Institute of Standards and Technology, U.S.
              Department of Commerce, DRAFT

   [X509]     CCITT, "The Directory - Authentication Framework",
              Recommendation X.509 , 1988.

   [RSADSI]   RSA Data Security, Inc., "Unpublished works".
















Freier, et al.                  Historic                       [Page 41](#dtoc){id=d41}

RFC 6101              The SSL Protocol Version 3.0           August 2011


Appendix A.  Protocol Constant Values

   This section describes protocol types and constants.

A.1.  Record Layer

        struct {
            uint8 major, minor;
        } ProtocolVersion;

        ProtocolVersion version = { 3,0 };

        enum {
            change_cipher_spec(20), alert(21), handshake(22),
            application_data(23), (255)
        } ContentType;

        struct {
            ContentType type;
            ProtocolVersion version;
            uint16 length;
            opaque fragment[SSLPlaintext.length];
        } SSLPlaintext;

        struct {
            ContentType type;
            ProtocolVersion version;
            uint16 length;
            opaque fragment[SSLCompressed.length];
        } SSLCompressed;

        struct {
            ContentType type;
            ProtocolVersion version;
            uint16 length;
            select (CipherSpec.cipher_type) {
                case stream: GenericStreamCipher;
                case block:  GenericBlockCipher;
            } fragment;
        } SSLCiphertext;

        stream-ciphered struct {
            opaque content[SSLCompressed.length];
            opaque MAC[CipherSpec.hash_size];
        } GenericStreamCipher;

        block-ciphered struct {
            opaque content[SSLCompressed.length];



Freier, et al.                  Historic                       [Page 42](#dtoc){id=d42}

RFC 6101              The SSL Protocol Version 3.0           August 2011


            opaque MAC[CipherSpec.hash_size];
            uint8 padding[GenericBlockCipher.padding_length];
            uint8 padding_length;
        } GenericBlockCipher;

A.2.  Change Cipher Specs Message

        struct {
            enum { change_cipher_spec(1), (255) } type;
        } ChangeCipherSpec;

A.3.  Alert Messages

        enum { warning(1), fatal(2), (255) } AlertLevel;

        enum {
            close_notify(0),
            unexpected_message(10),
            bad_record_mac(20),
            decompression_failure(30),
            handshake_failure(40),
            no_certificate(41),
            bad_certificate(42),
            unsupported_certificate(43),
            certificate_revoked(44),
            certificate_expired(45),
            certificate_unknown(46),
            illegal_parameter (47),
            (255)
        } AlertDescription;

        struct {
            AlertLevel level;
            AlertDescription description;
        } Alert;
















Freier, et al.                  Historic                       [Page 43](#dtoc){id=d43}

RFC 6101              The SSL Protocol Version 3.0           August 2011


A.4.  Handshake Protocol

      enum {
          hello_request(0), client_hello(1), server_hello(2),
          certificate(11), server_key_exchange (12),
          certificate_request(13), server_done(14),
          certificate_verify(15), client_key_exchange(16),
          finished(20), (255)
      } HandshakeType;

        struct {
            HandshakeType msg_type;
            uint24 length;
            select (HandshakeType) {
                case hello_request: HelloRequest;
                case client_hello: ClientHello;
                case server_hello: ServerHello;
                case certificate: Certificate;
                case server_key_exchange: ServerKeyExchange;
                case certificate_request: CertificateRequest;
                case server_done: ServerHelloDone;
                case certificate_verify: CertificateVerify;
                case client_key_exchange: ClientKeyExchange;
                case finished: Finished;
            } body;
        } Handshake;

A.4.1.  Hello Messages

        struct { } HelloRequest;

        struct {
            uint32 gmt_unix_time;
            opaque random_bytes[28];
        } Random;

        opaque SessionID<0..32>;

        uint8 CipherSuite[2];

        enum { null(0), (255) } CompressionMethod;

        struct {
            ProtocolVersion client_version;
            Random random;
            SessionID session_id;
            CipherSuite cipher_suites<0..2^16-1>;
            CompressionMethod compression_methods<0..2^8-1>;



Freier, et al.                  Historic                       [Page 44](#dtoc){id=d44}

RFC 6101              The SSL Protocol Version 3.0           August 2011


        } ClientHello;

        struct {
            ProtocolVersion server_version;
            Random random;
            SessionID session_id;
            CipherSuite cipher_suite;
            CompressionMethod compression_method;
        } ServerHello;

A.4.2.  Server Authentication and Key Exchange Messages

        opaque ASN.1Cert<2^24-1>;

        struct {
            ASN.1Cert certificate_list<1..2^24-1>;
        } Certificate;

        enum { rsa, diffie_hellman, fortezza_kea } KeyExchangeAlgorithm;

        struct {
            opaque RSA_modulus<1..2^16-1>;
            opaque RSA_exponent<1..2^16-1>;
        } ServerRSAParams;

        struct {
            opaque DH_p<1..2^16-1>;
            opaque DH_g<1..2^16-1>;
            opaque DH_Ys<1..2^16-1>;
        } ServerDHParams;

        struct {
            opaque r_s [128]
        } ServerFortezzaParams

        struct {
            select (KeyExchangeAlgorithm) {
                case diffie_hellman:
                    ServerDHParams params;
                    Signature signed_params;
                case rsa:
                    ServerRSAParams params;
                    Signature signed_params;
                case fortezza_kea:
                    ServerFortezzaParams params;
            };
        } ServerKeyExchange;




Freier, et al.                  Historic                       [Page 45](#dtoc){id=d45}

RFC 6101              The SSL Protocol Version 3.0           August 2011


        enum { anonymous, rsa, dsa } SignatureAlgorithm;

        digitally-signed struct {
            select(SignatureAlgorithm) {
                case anonymous: struct { };
                case rsa:
                    opaque md5_hash[16];
                    opaque sha_hash[20];
                case dsa:
                    opaque sha_hash[20];
            };
        } Signature;


        enum {
            RSA_sign(1), DSS_sign(2), RSA_fixed_DH(3),
            DSS_fixed_DH(4), RSA_ephemeral_DH(5), DSS_ephemeral_DH(6),
            FORTEZZA_MISSI(20), (255)
        } CertificateType;

        opaque DistinguishedName<1..2^16-1>;

        struct {
            CertificateType certificate_types<1..2^8-1>;
            DistinguishedName certificate_authorities<3..2^16-1>;
        } CertificateRequest;

        struct { } ServerHelloDone;

A.5.  Client Authentication and Key Exchange Messages

        struct {
            select (KeyExchangeAlgorithm) {
                case rsa: EncryptedPreMasterSecret;
                case diffie_hellman: DiffieHellmanClientPublicValue;
                case fortezza_kea: FortezzaKeys;
            } exchange_keys;
        } ClientKeyExchange;

        struct {
            ProtocolVersion client_version;
            opaque random[46];
        } PreMasterSecret;

        struct {
            public-key-encrypted PreMasterSecret pre_master_secret;
        } EncryptedPreMasterSecret;




Freier, et al.                  Historic                       [Page 46](#dtoc){id=d46}

RFC 6101              The SSL Protocol Version 3.0           August 2011


        struct {
            opaque y_c<0..128>;
            opaque r_c[128];
            opaque y_signature[40];
            opaque wrapped_client_write_key[12];
            opaque wrapped_server_write_key[12];
            opaque client_write_iv[24];
            opaque server_write_iv[24];
            opaque master_secret_iv[24];
            opaque encrypted_preMasterSecret[48];
        } FortezzaKeys;

        enum { implicit, explicit } PublicValueEncoding;

        struct {
            select (PublicValueEncoding) {
                case implicit: struct {};
                case explicit: opaque DH_Yc<1..2^16-1>;
            } dh_public;
        } ClientDiffieHellmanPublic;

        struct {
            Signature signature;
        } CertificateVerify;

A.5.1.  Handshake Finalization Message

        struct {
            opaque md5_hash[16];
            opaque sha_hash[20];
        } Finished;

A.6.  The CipherSuite

   The following values define the CipherSuite codes used in the client
   hello and server hello messages.

   A CipherSuite defines a cipher specifications supported in SSL
   version 3.0.

     CipherSuite SSL_NULL_WITH_NULL_NULL                = { 0x00,0x00 };

   The following CipherSuite definitions require that the server provide
   an RSA certificate that can be used for key exchange.  The server may
   request either an RSA or a DSS signature-capable certificate in the
   certificate request message.





Freier, et al.                  Historic                       [Page 47](#dtoc){id=d47}

RFC 6101              The SSL Protocol Version 3.0           August 2011


     CipherSuite SSL_RSA_WITH_NULL_MD5                  = { 0x00,0x01 };
     CipherSuite SSL_RSA_WITH_NULL_SHA                  = { 0x00,0x02 };
     CipherSuite SSL_RSA_EXPORT_WITH_RC4_40_MD5         = { 0x00,0x03 };
     CipherSuite SSL_RSA_WITH_RC4_128_MD5               = { 0x00,0x04 };
     CipherSuite SSL_RSA_WITH_RC4_128_SHA               = { 0x00,0x05 };
     CipherSuite SSL_RSA_EXPORT_WITH_RC2_CBC_40_MD5     = { 0x00,0x06 };
     CipherSuite SSL_RSA_WITH_IDEA_CBC_SHA              = { 0x00,0x07 };
     CipherSuite SSL_RSA_EXPORT_WITH_DES40_CBC_SHA      = { 0x00,0x08 };
     CipherSuite SSL_RSA_WITH_DES_CBC_SHA               = { 0x00,0x09 };
     CipherSuite SSL_RSA_WITH_3DES_EDE_CBC_SHA          = { 0x00,0x0A };

   The following CipherSuite definitions are used for server-
   authenticated (and optionally client-authenticated) Diffie-Hellman.
   DH denotes cipher suites in which the server's certificate contains
   the Diffie-Hellman parameters signed by the certificate authority
   (CA).  DHE denotes ephemeral Diffie-Hellman, where the Diffie-Hellman
   parameters are signed by a DSS or RSA certificate, which has been
   signed by the CA.  The signing algorithm used is specified after the
   DH or DHE parameter.  In all cases, the client must have the same
   type of certificate, and must use the Diffie-Hellman parameters
   chosen by the server.

     CipherSuite SSL_DH_DSS_EXPORT_WITH_DES40_CBC_SHA   = { 0x00,0x0B };
     CipherSuite SSL_DH_DSS_WITH_DES_CBC_SHA            = { 0x00,0x0C };
     CipherSuite SSL_DH_DSS_WITH_3DES_EDE_CBC_SHA       = { 0x00,0x0D };
     CipherSuite SSL_DH_RSA_EXPORT_WITH_DES40_CBC_SHA   = { 0x00,0x0E };
     CipherSuite SSL_DH_RSA_WITH_DES_CBC_SHA            = { 0x00,0x0F };
     CipherSuite SSL_DH_RSA_WITH_3DES_EDE_CBC_SHA       = { 0x00,0x10 };
     CipherSuite SSL_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA  = { 0x00,0x11 };
     CipherSuite SSL_DHE_DSS_WITH_DES_CBC_SHA           = { 0x00,0x12 };
     CipherSuite SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA      = { 0x00,0x13 };
     CipherSuite SSL_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA  = { 0x00,0x14 };
     CipherSuite SSL_DHE_RSA_WITH_DES_CBC_SHA           = { 0x00,0x15 };
     CipherSuite SSL_DHE_RSA_WITH_3DES_EDE_CBC_SHA      = { 0x00,0x16 };

   The following cipher suites are used for completely anonymous Diffie-
   Hellman communications in which neither party is authenticated.  Note
   that this mode is vulnerable to man-in-the-middle attacks and is
   therefore strongly discouraged.

     CipherSuite SSL_DH_anon_EXPORT_WITH_RC4_40_MD5     = { 0x00,0x17 };
     CipherSuite SSL_DH_anon_WITH_RC4_128_MD5           = { 0x00,0x18 };
     CipherSuite SSL_DH_anon_EXPORT_WITH_DES40_CBC_SHA  = { 0x00,0x19 };
     CipherSuite SSL_DH_anon_WITH_DES_CBC_SHA           = { 0x00,0x1A };
     CipherSuite SSL_DH_anon_WITH_3DES_EDE_CBC_SHA      = { 0x00,0x1B };






Freier, et al.                  Historic                       [Page 48](#dtoc){id=d48}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   The final cipher suites are for the FORTEZZA token.

     CipherSuite SSL_FORTEZZA_KEA_WITH_NULL_SHA         = { 0X00,0X1C };
     CipherSuite SSL_FORTEZZA_KEA_WITH_FORTEZZA_CBC_SHA = { 0x00,0x1D };
     CipherSuite SSL_FORTEZZA_KEA_WITH_RC4_128_SHA      = { 0x00,0x1E };

   Note: All cipher suites whose first byte is 0xFF are considered
   private and can be used for defining local/experimental algorithms.
   Interoperability of such types is a local matter.

A.7.  The CipherSpec

   A cipher suite identifies a CipherSpec.  These structures are part of
   the SSL session state.  The CipherSpec includes:

        enum { stream, block } CipherType;

        enum { true, false } IsExportable;

        enum { null, rc4, rc2, des, 3des, des40, fortezza }
            BulkCipherAlgorithm;

        enum { null, md5, sha } MACAlgorithm;

        struct {
            BulkCipherAlgorithm bulk_cipher_algorithm;
            MACAlgorithm mac_algorithm;
            CipherType cipher_type;
            IsExportable is_exportable
            uint8 hash_size;
            uint8 key_material;
            uint8 IV_size;
        } CipherSpec;


















Freier, et al.                  Historic                       [Page 49](#dtoc){id=d49}

RFC 6101              The SSL Protocol Version 3.0           August 2011


Appendix B.  Glossary

   application protocol:  An application protocol is a protocol that
      normally layers directly on top of the transport layer (e.g.,
      TCP/IP [RFC0793]/[RFC0791]).  Examples include HTTP [RFC1945],
      TELNET [RFC0959], FTP [RFC0854], and SMTP.

   asymmetric cipher:  See public key cryptography.

   authentication:  Authentication is the ability of one entity to
      determine the identity of another entity.

   block cipher:  A block cipher is an algorithm that operates on
      plaintext in groups of bits, called blocks. 64 bits is a typical
      block size.

   bulk cipher:  A symmetric encryption algorithm used to encrypt large
      quantities of data.

   cipher block chaining (CBC) mode:  CBC is a mode in which every
      plaintext block encrypted with the block cipher is first
      exclusive-ORed with the previous ciphertext block (or, in the case
      of the first block, with the initialization vector).

   certificate:  As part of the X.509 protocol (a.k.a.  ISO
      Authentication framework), certificates are assigned by a trusted
      certificate authority and provide verification of a party's
      identity and may also supply its public key.

   client:  The application entity that initiates a connection to a
      server.

   client write key:  The key used to encrypt data written by the
      client.

   client write MAC secret:  The secret data used to authenticate data
      written by the client.

   connection:  A connection is a transport (in the OSI layering model
      definition) that provides a suitable type of service.  For SSL,
      such connections are peer-to-peer relationships.  The connections
      are transient.  Every connection is associated with one session.

   Data Encryption Standard (DES):  DES is a very widely used symmetric
      encryption algorithm.  DES is a block cipher [DES] [3DES].






Freier, et al.                  Historic                       [Page 50](#dtoc){id=d50}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Digital Signature Standard:  (DSS) A standard for digital signing,
      including the Digital Signature Algorithm, approved by the
      National Institute of Standards and Technology, defined in NIST
      FIPS PUB 186, "Digital Signature Standard," published May, 1994 by
      the U.S. Dept. of Commerce.

   digital signatures:  Digital signatures utilize public key
      cryptography and one-way hash functions to produce a signature of
      the data that can be authenticated, and is difficult to forge or
      repudiate.

   FORTEZZA:  A PCMCIA card that provides both encryption and digital
      signing.

   handshake:  An initial negotiation between client and server that
      establishes the parameters of their transactions.

   Initialization Vector (IV):  When a block cipher is used in CBC mode,
      the initialization vector is exclusive-ORed with the first
      plaintext block prior to encryption.

   IDEA:  A 64-bit block cipher designed by Xuejia Lai and James Massey
      [IDEA].

   Message Authentication Code (MAC):  A Message Authentication Code is
      a one-way hash computed from a message and some secret data.  Its
      purpose is to detect if the message has been altered.

   master secret:  Secure secret data used for generating encryption
      keys, MAC secrets, and IVs.

   MD5:  MD5 [RFC1321] is a secure hashing function that converts an
      arbitrarily long data stream into a digest of fixed size.

   public key cryptography:  A class of cryptographic techniques
      employing two-key ciphers.  Messages encrypted with the public key
      can only be decrypted with the associated private key.
      Conversely, messages signed with the private key can be verified
      with the public key.

   one-way hash function:  A one-way transformation that converts an
      arbitrary amount of data into a fixed-length hash.  It is
      computationally hard to reverse the transformation or to find
      collisions.  MD5 and SHA are examples of one-way hash functions.







Freier, et al.                  Historic                       [Page 51](#dtoc){id=d51}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   RC2, RC4:  Proprietary bulk ciphers from RSA Data Security, Inc.
      (There is no good reference to these as they are unpublished
      works; however, see [RSADSI]).  RC2 is a block cipher and RC4 is a
      stream cipher.

   RSA:  A very widely used public key algorithm that can be used for
      either encryption or digital signing.

   salt:  Non-secret random data used to make export encryption keys
      resist precomputation attacks.

   server:  The server is the application entity that responds to
      requests for connections from clients.  The server is passive,
      waiting for requests from clients.

   session:  An SSL session is an association between a client and a
      server.  Sessions are created by the handshake protocol.  Sessions
      define a set of cryptographic security parameters, which can be
      shared among multiple connections.  Sessions are used to avoid the
      expensive negotiation of new security parameters for each
      connection.

   session identifier:  A session identifier is a value generated by a
      server that identifies a particular session.

   server write key:  The key used to encrypt data written by the
      server.

   server write MAC secret:  The secret data used to authenticate data
      written by the server.

   SHA:  The Secure Hash Algorithm is defined in FIPS PUB 180-1.  It
      produces a 20-byte output [SHA].

   stream cipher:  An encryption algorithm that converts a key into a
      cryptographically strong keystream, which is then exclusive-ORed
      with the plaintext.

   symmetric cipher:  See bulk cipher.












Freier, et al.                  Historic                       [Page 52](#dtoc){id=d52}

RFC 6101              The SSL Protocol Version 3.0           August 2011


Appendix C.  CipherSuite Definitions

CipherSuite                  Is         Key            Cipher       Hash
                             Exportable Exchange

SSL_NULL_WITH_NULL_NULL               * NULL           NULL         NULL
SSL_RSA_WITH_NULL_MD5                 * RSA            NULL         MD5
SSL_RSA_WITH_NULL_SHA                 * RSA            NULL         SHA
SSL_RSA_EXPORT_WITH_RC4_40_MD5        * RSA_EXPORT     RC4_40       MD5
SSL_RSA_WITH_RC4_128_MD5                RSA            RC4_128      MD5
SSL_RSA_WITH_RC4_128_SHA                RSA            RC4_128      SHA
SSL_RSA_EXPORT_WITH_RC2_CBC_40_MD5    * RSA_EXPORT     RC2_CBC_40   MD5
SSL_RSA_WITH_IDEA_CBC_SHA               RSA            IDEA_CBC     SHA
SSL_RSA_EXPORT_WITH_DES40_CBC_SHA     * RSA_EXPORT     DES40_CBC    SHA
SSL_RSA_WITH_DES_CBC_SHA                RSA            DES_CBC      SHA
SSL_RSA_WITH_3DES_EDE_CBC_SHA           RSA            3DES_EDE_CBC SHA
SSL_DH_DSS_EXPORT_WITH_DES40_CBC_SHA  * DH_DSS_EXPORT  DES40_CBC    SHA
SSL_DH_DSS_WITH_DES_CBC_SHA             DH_DSS         DES_CBC      SHA
SSL_DH_DSS_WITH_3DES_EDE_CBC_SHA        DH_DSS         3DES_EDE_CBC SHA
SSL_DH_RSA_EXPORT_WITH_DES40_CBC_SHA  * DH_RSA_EXPORT  DES40_CBC    SHA
SSL_DH_RSA_WITH_DES_CBC_SHA             DH_RSA         DES_CBC      SHA
SSL_DH_RSA_WITH_3DES_EDE_CBC_SHA        DH_RSA         3DES_EDE_CBC SHA
SSL_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA * DHE_DSS_EXPORT DES40_CBC    SHA
SSL_DHE_DSS_WITH_DES_CBC_SHA            DHE_DSS        DES_CBC      SHA
SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA       DHE_DSS        3DES_EDE_CBC SHA
SSL_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA * DHE_RSA_EXPORT DES40_CBC    SHA
SSL_DHE_RSA_WITH_DES_CBC_SHA            DHE_RSA        DES_CBC      SHA
SSL_DHE_RSA_WITH_3DES_EDE_CBC_SHA       DHE_RSA        3DES_EDE_CBC SHA
SSL_DH_anon_EXPORT_WITH_RC4_40_MD5    * DH_anon_EXPORT RC4_40       MD5
SSL_DH_anon_WITH_RC4_128_MD5            DH_anon        RC4_128      MD5
SSL_DH_anon_EXPORT_WITH_DES40_CBC_SHA   DH_anon        DES40_CBC    SHA
SSL_DH_anon_WITH_DES_CBC_SHA            DH_anon        DES_CBC      SHA
SSL_DH_anon_WITH_3DES_EDE_CBC_SHA       DH_anon        3DES_EDE_CBC SHA
SSL_FORTEZZA_KEA_WITH_NULL_SHA          FORTEZZA_KEA   NULL         SHA
SSL_FORTEZZA_KEA_WITH_FORTEZZA_CBC_SHA  FORTEZZA_KEA   FORTEZZA_CBC SHA
SSL_FORTEZZA_KEA_WITH_RC4_128_SHA       FORTEZZA_KEA   RC4_128      SHA















Freier, et al.                  Historic                       [Page 53](#dtoc){id=d53}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   +----------------+------------------------------+-------------------+
   |  Key Exchange  |          Description         |   Key Size Limit  |
   |    Algorithm   |                              |                   |
   +----------------+------------------------------+-------------------+
   |     DHE_DSS    |     Ephemeral DH with DSS    |        None       |
   |                |          signatures          |                   |
   | DHE_DSS_EXPORT |     Ephemeral DH with DSS    |   DH = 512 bits   |
   |                |          signatures          |                   |
   |     DHE_RSA    |     Ephemeral DH with RSA    |        None       |
   |                |          signatures          |                   |
   | DHE_RSA_EXPORT |     Ephemeral DH with RSA    |   DH = 512 bits,  |
   |                |          signatures          |     RSA = none    |
   |     DH_anon    |  Anonymous DH, no signatures |        None       |
   | DH_anon_EXPORT |  Anonymous DH, no signatures |   DH = 512 bits   |
   |     DH_DSS     |       DH with DSS-based      |        None       |
   |                |         certificates         |                   |
   |  DH_DSS_EXPORT |       DH with DSS-based      |   DH = 512 bits   |
   |                |         certificates         |                   |
   |     DH_RSA     |       DH with RSA-based      |        None       |
   |                |         certificates         |                   |
   |  DH_RSA_EXPORT |       DH with RSA-based      |   DH = 512 bits,  |
   |                |         certificates         |     RSA = none    |
   |  FORTEZZA_KEA  |     FORTEZZA KEA. Details    |        N/A        |
   |                |          unpublished         |                   |
   |      NULL      |        No key exchange       |        N/A        |
   |       RSA      |       RSA key exchange       |        None       |
   |   RSA_EXPORT   |       RSA key exchange       |   RSA = 512 bits  |
   +----------------+------------------------------+-------------------+

                                  Table 1

   Key size limit:  The key size limit gives the size of the largest
      public key that can be legally used for encryption in cipher
      suites that are exportable.

















Freier, et al.                  Historic                       [Page 54](#dtoc){id=d54}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   +--------------+--------+-----+-------+-------+-------+------+------+
   | Cipher       | Cipher | IsE |  Key  |  Exp. | Effec |  IV  | Bloc |
   |              |  Type  | xpo | Mater |  Key  |  tive | Size |   k  |
   |              |        | rta |  ial  | Mater |  Key  |      | Size |
   |              |        | ble |       |  ial  |  Bits |      |      |
   +--------------+--------+-----+-------+-------+-------+------+------+
   | NULL         | Stream |  *  |   0   |   0   |   0   |   0  |  N/A |
   | FORTEZZA_CBC |  Block |     |   NA  |   12  |   96  |  20  |   8  |
   |              |        |     |  (**) |  (**) |  (**) | (**) |      |
   | IDEA_CBC     |  Block |     |   16  |   16  |  128  |   8  |   8  |
   | RC2_CBC_40   |  Block |  *  |   5   |   16  |   40  |   8  |   8  |
   | RC4_40       | Stream |  *  |   5   |   16  |   40  |   0  |  N/A |
   | RC4_128      | Stream |     |   16  |   16  |  128  |   0  |  N/A |
   | DES40_CBC    |  Block |  *  |   5   |   8   |   40  |   8  |   8  |
   | DES_CBC      |  Block |     |   8   |   8   |   56  |   8  |   8  |
   | 3DES_EDE_CBC |  Block |     |   24  |   24  |  168  |   8  |   8  |
   +--------------+--------+-----+-------+-------+-------+------+------+

                     * Indicates IsExportable is true.
        ** FORTEZZA uses its own key and IV generation algorithms.

                                  Table 2

   Key Material:  The number of bytes from the key_block that are used
      for generating the write keys.

   Expanded Key Material:  The number of bytes actually fed into the
      encryption algorithm.

   Effective Key Bits:  How much entropy material is in the key material
      being fed into the encryption routines.

               +---------------+-----------+--------------+
               | Hash Function | Hash Size | Padding Size |
               +---------------+-----------+--------------+
               |      NULL     |     0     |       0      |
               |      MD5      |     16    |      48      |
               |      SHA      |     20    |      40      |
               +---------------+-----------+--------------+

                                  Table 3










Freier, et al.                  Historic                       [Page 55](#dtoc){id=d55}

RFC 6101              The SSL Protocol Version 3.0           August 2011


Appendix D.  Implementation Notes

   The SSL protocol cannot prevent many common security mistakes.  This
   section provides several recommendations to assist implementers.

D.1.  Temporary RSA Keys

   US export restrictions limit RSA keys used for encryption to 512
   bits, but do not place any limit on lengths of RSA keys used for
   signing operations.  Certificates often need to be larger than 512
   bits, since 512-bit RSA keys are not secure enough for high-value
   transactions or for applications requiring long-term security.  Some
   certificates are also designated signing-only, in which case they
   cannot be used for key exchange.

   When the public key in the certificate cannot be used for encryption,
   the server signs a temporary RSA key, which is then exchanged.  In
   exportable applications, the temporary RSA key should be the maximum
   allowable length (i.e., 512 bits).  Because 512-bit RSA keys are
   relatively insecure, they should be changed often.  For typical
   electronic commerce applications, it is suggested that keys be
   changed daily or every 500 transactions, and more often if possible.
   Note that while it is acceptable to use the same temporary key for
   multiple transactions, it must be signed each time it is used.

   RSA key generation is a time-consuming process.  In many cases, a
   low-priority process can be assigned the task of key generation.
   Whenever a new key is completed, the existing temporary key can be
   replaced with the new one.

D.2.  Random Number Generation and Seeding

   SSL requires a cryptographically secure pseudorandom number generator
   (PRNG).  Care must be taken in designing and seeding PRNGs.  PRNGs
   based on secure hash operations, most notably MD5 and/or SHA, are
   acceptable, but cannot provide more security than the size of the
   random number generator state.  (For example, MD5-based PRNGs usually
   provide 128 bits of state.)

   To estimate the amount of seed material being produced, add the
   number of bits of unpredictable information in each seed byte.  For
   example, keystroke timing values taken from a PC-compatible's 18.2 Hz
   timer provide 1 or 2 secure bits each, even though the total size of
   the counter value is 16 bits or more.  To seed a 128-bit PRNG, one
   would thus require approximately 100 such timer values.






Freier, et al.                  Historic                       [Page 56](#dtoc){id=d56}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Note: The seeding functions in RSAREF and versions of BSAFE prior to
   3.0 are order independent.  For example, if 1000 seed bits are
   supplied, one at a time, in 1000 separate calls to the seed function,
   the PRNG will end up in a state that depends only on the number of 0
   or 1 seed bits in the seed data (i.e., there are 1001 possible final
   states).  Applications using BSAFE or RSAREF must take extra care to
   ensure proper seeding.

D.3.  Certificates and Authentication

   Implementations are responsible for verifying the integrity of
   certificates and should generally support certificate revocation
   messages.  Certificates should always be verified to ensure proper
   signing by a trusted certificate authority (CA).  The selection and
   addition of trusted CAs should be done very carefully.  Users should
   be able to view information about the certificate and root CA.

D.4.  CipherSuites

   SSL supports a range of key sizes and security levels, including some
   that provide no or minimal security.  A proper implementation will
   probably not support many cipher suites.  For example, 40-bit
   encryption is easily broken, so implementations requiring strong
   security should not allow 40-bit keys.  Similarly, anonymous Diffie-
   Hellman is strongly discouraged because it cannot prevent man-in-the-
   middle attacks.  Applications should also enforce minimum and maximum
   key sizes.  For example, certificate chains containing 512-bit RSA
   keys or signatures are not appropriate for high-security
   applications.

D.5.  FORTEZZA

   This section describes implementation details for cipher suites that
   make use of the FORTEZZA hardware encryption system.

D.5.1.  Notes on Use of FORTEZZA Hardware

   A complete explanation of all issues regarding the use of FORTEZZA
   hardware is outside the scope of this document.  However, there are a
   few special requirements of SSL that deserve mention.

   Because SSL is a full duplex protocol, two crypto states must be
   maintained, one for reading and one for writing.  There are also a
   number of circumstances that can result in the crypto state in the
   FORTEZZA card being lost.  For these reasons, it's recommended that
   the current crypto state be saved after processing a record, and
   loaded before processing the next.




Freier, et al.                  Historic                       [Page 57](#dtoc){id=d57}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   After the client generates the TEK, it also generates two message
   encryption keys (MEKs), one for reading and one for writing.  After
   generating each of these keys, the client must generate a
   corresponding IV and then save the crypto state.  The client also
   uses the TEK to generate an IV and encrypt the premaster secret.  All
   three IVs are sent to the server, along with the wrapped keys and the
   encrypted premaster secret in the client key exchange message.  At
   this point, the TEK is no longer needed, and may be discarded.

   On the server side, the server uses the master IV and the TEK to
   decrypt the premaster secret.  It also loads the wrapped MEKs into
   the card.  The server loads both IVs to verify that the IVs match the
   keys.  However, since the card is unable to encrypt after loading an
   IV, the server must generate a new IV for the server write key.  This
   IV is discarded.

   When encrypting the first encrypted record (and only that record),
   the server adds 8 bytes of random data to the beginning of the
   fragment.  These 8 bytes are discarded by the client after
   decryption.  The purpose of this is to synchronize the state on the
   client and server resulting from the different IVs.

D.5.2.  FORTEZZA Cipher Suites

   5) FORTEZZA_NULL_WITH_NULL_SHA: Uses the full FORTEZZA key exchange,
   including sending server and client write keys and IVs.

D.5.3.  FORTEZZA Session Resumption

   There are two possibilities for FORTEZZA session restart: 1) Never
   restart a FORTEZZA session. 2) Restart a session with the previously
   negotiated keys and IVs.

   Never restarting a FORTEZZA session:

   Clients who never restart FORTEZZA sessions should never send session
   IDs that were previously used in a FORTEZZA session as part of the
   ClientHello.  Servers who never restart FORTEZZA sessions should
   never send a previous session id on the ServerHello if the negotiated
   session is FORTEZZA.

   Restart a session:

   You cannot restart FORTEZZA on a session that has never done a
   complete FORTEZZA key exchange (that is, you cannot restart FORTEZZA
   if the session was an RSA/RC4 session renegotiated for FORTEZZA).  If
   you wish to restart a FORTEZZA session, you must save the MEKs and




Freier, et al.                  Historic                       [Page 58](#dtoc){id=d58}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   IVs from the initial key exchange for this session and reuse them for
   any new connections on that session.  This is not recommended, but it
   is possible.

Appendix E.  Version 2.0 Backward Compatibility

   Version 3.0 clients that support version 2.0 servers must send
   version 2.0 client hello messages [SSL-2].  Version 3.0 servers
   should accept either client hello format.  The only deviations from
   the version 2.0 specification are the ability to specify a version
   with a value of three and the support for more ciphering types in the
   CipherSpec.

   Warning: The ability to send version 2.0 client hello messages will
   be phased out with all due haste.  Implementers should make every
   effort to move forward as quickly as possible.  Version 3.0 provides
   better mechanisms for transitioning to newer versions.

   The following cipher specifications are carryovers from SSL version
   2.0.  These are assumed to use RSA for key exchange and
   authentication.

        V2CipherSpec SSL_RC4_128_WITH_MD5          = { 0x01,0x00,0x80 };
        V2CipherSpec SSL_RC4_128_EXPORT40_WITH_MD5 = { 0x02,0x00,0x80 };
        V2CipherSpec SSL_RC2_CBC_128_CBC_WITH_MD5  = { 0x03,0x00,0x80 };
        V2CipherSpec SSL_RC2_CBC_128_CBC_EXPORT40_WITH_MD5
                                                   = { 0x04,0x00,0x80 };
        V2CipherSpec SSL_IDEA_128_CBC_WITH_MD5     = { 0x05,0x00,0x80 };
        V2CipherSpec SSL_DES_64_CBC_WITH_MD5       = { 0x06,0x00,0x40 };
        V2CipherSpec SSL_DES_192_EDE3_CBC_WITH_MD5 = { 0x07,0x00,0xC0 };

   Cipher specifications introduced in version 3.0 can be included in
   version 2.0 client hello messages using the syntax below.  Any
   V2CipherSpec element with its first byte equal to zero will be
   ignored by version 2.0 servers.  Clients sending any of the above
   V2CipherSpecs should also include the version 3.0 equivalent (see
   Appendix A.6):

        V2CipherSpec (see Version 3.0 name) = { 0x00, CipherSuite };

E.1.  Version 2 Client Hello

   The version 2.0 client hello message is presented below using this
   document's presentation model.  The true definition is still assumed
   to be the SSL version 2.0 specification.






Freier, et al.                  Historic                       [Page 59](#dtoc){id=d59}

RFC 6101              The SSL Protocol Version 3.0           August 2011


        uint8 V2CipherSpec[3];

        struct {
            unit8 msg_type;
            Version version;
            uint16 cipher_spec_length;
            uint16 session_id_length;
            uint16 challenge_length;
            V2CipherSpec cipher_specs[V2ClientHello.cipher_spec_length];
            opaque session_id[V2ClientHello.session_id_length];
            Random challenge;
        } V2ClientHello;

   session msg_type:  This field, in conjunction with the version field,
      identifies a version 2 client hello message.  The value should
      equal one (1).

   version:  The highest version of the protocol supported by the client
      (equals ProtocolVersion.version; see Appendix A.1).

   cipher_spec_length:  This field is the total length of the field
      cipher_specs.  It cannot be zero and must be a multiple of the
      V2CipherSpec length (3).

   session_id_length:  This field must have a value of either zero or
      16.  If zero, the client is creating a new session.  If 16, the
      session_id field will contain the 16 bytes of session
      identification.

   challenge_length:  The length in bytes of the client's challenge to
      the server to authenticate itself.  This value must be 32.

   cipher_specs:  This is a list of all CipherSpecs the client is
      willing and able to use.  There must be at least one CipherSpec
      acceptable to the server.

   session_id:  If this field's length is not zero, it will contain the
      identification for a session that the client wishes to resume.

   challenge:  The client's challenge to the server for the server to
      identify itself is a (nearly) arbitrary length random.  The
      version 3.0 server will right justify the challenge data to become
      the ClientHello.random data (padded with leading zeroes, if
      necessary), as specified in this version 3.0 protocol.  If the
      length of the challenge is greater than 32 bytes, then only the
      last 32 bytes are used.  It is legitimate (but not necessary) for
      a V3 server to reject a V2 ClientHello that has fewer than 16
      bytes of challenge data.



Freier, et al.                  Historic                       [Page 60](#dtoc){id=d60}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Note: Requests to resume an SSL 3.0 session should use an SSL 3.0
   client hello.

E.2.  Avoiding Man-in-the-Middle Version Rollback

   When SSL version 3.0 clients fall back to version 2.0 compatibility
   mode, they use special PKCS #1 block formatting.  This is done so
   that version 3.0 servers will reject version 2.0 sessions with
   version 3.0-capable clients.

   When version 3.0 clients are in version 2.0 compatibility mode, they
   set the right-hand (least-significant) 8 random bytes of the PKCS
   padding (not including the terminal null of the padding) for the RSA
   encryption of the ENCRYPTED-KEY-DATA field of the CLIENT-MASTER-KEY
   to 0x03 (the other padding bytes are random).  After decrypting the
   ENCRYPTED-KEY-DATA field, servers that support SSL 3.0 should issue
   an error if these eight padding bytes are 0x03.  Version 2.0 servers
   receiving blocks padded in this manner will proceed normally.

Appendix F.  Security Analysis

   The SSL protocol is designed to establish a secure connection between
   a client and a server communicating over an insecure channel.  This
   document makes several traditional assumptions, including that
   attackers have substantial computational resources and cannot obtain
   secret information from sources outside the protocol.  Attackers are
   assumed to have the ability to capture, modify, delete, replay, and
   otherwise tamper with messages sent over the communication channel.
   This appendix outlines how SSL has been designed to resist a variety
   of attacks.

F.1.  Handshake Protocol

   The handshake protocol is responsible for selecting a CipherSpec and
   generating a MasterSecret, which together comprise the primary
   cryptographic parameters associated with a secure session.  The
   handshake protocol can also optionally authenticate parties who have
   certificates signed by a trusted certificate authority.

F.1.1.  Authentication and Key Exchange

   SSL supports three authentication modes: authentication of both
   parties, server authentication with an unauthenticated client, and
   total anonymity.  Whenever the server is authenticated, the channel
   should be secure against man-in-the-middle attacks, but completely
   anonymous sessions are inherently vulnerable to such attacks.





Freier, et al.                  Historic                       [Page 61](#dtoc){id=d61}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   Anonymous servers cannot authenticate clients, since the client
   signature in the certificate verify message may require a server
   certificate to bind the signature to a particular server.  If the
   server is authenticated, its certificate message must provide a valid
   certificate chain leading to an acceptable certificate authority.
   Similarly, authenticated clients must supply an acceptable
   certificate to the server.  Each party is responsible for verifying
   that the other's certificate is valid and has not expired or been
   revoked.

   The general goal of the key exchange process is to create a
   pre_master_secret known to the communicating parties and not to
   attackers.  The pre_master_secret will be used to generate the
   master_secret (see Section 6.1).  The master_secret is required to
   generate the finished messages, encryption keys, and MAC secrets (see
   Sections 5.6.9 and 6.2.2).  By sending a correct finished message,
   parties thus prove that they know the correct pre_master_secret.

F.1.1.1.  Anonymous Key Exchange

   Completely anonymous sessions can be established using RSA, Diffie-
   Hellman, or FORTEZZA for key exchange.  With anonymous RSA, the
   client encrypts a pre_master_secret with the server's uncertified
   public key extracted from the server key exchange message.  The
   result is sent in a client key exchange message.  Since eavesdroppers
   do not know the server's private key, it will be infeasible for them
   to decode the pre_master_secret.

   With Diffie-Hellman or FORTEZZA, the server's public parameters are
   contained in the server key exchange message and the client's are
   sent in the client key exchange message.  Eavesdroppers who do not
   know the private values should not be able to find the Diffie-Hellman
   result (i.e., the pre_master_secret) or the FORTEZZA token encryption
   key (TEK).

   Warning: Completely anonymous connections only provide protection
   against passive eavesdropping.  Unless an independent tamper-proof
   channel is used to verify that the finished messages were not
   replaced by an attacker, server authentication is required in
   environments where active man-in-the-middle attacks are a concern.

F.1.1.2.  RSA Key Exchange and Authentication

   With RSA, key exchange and server authentication are combined.  The
   public key either may be contained in the server's certificate or may
   be a temporary RSA key sent in a server key exchange message.  When
   temporary RSA keys are used, they are signed by the server's RSA or
   DSS certificate.  The signature includes the current



Freier, et al.                  Historic                       [Page 62](#dtoc){id=d62}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   ClientHello.random, so old signatures and temporary keys cannot be
   replayed.  Servers may use a single temporary RSA key for multiple
   negotiation sessions.

   Note: The temporary RSA key option is useful if servers need large
   certificates but must comply with government-imposed size limits on
   keys used for key exchange.

   After verifying the server's certificate, the client encrypts a
   pre_master_secret with the server's public key.  By successfully
   decoding the pre_master_secret and producing a correct finished
   message, the server demonstrates that it knows the private key
   corresponding to the server certificate.

   When RSA is used for key exchange, clients are authenticated using
   the certificate verify message (see Section 5.6.8).  The client signs
   a value derived from the master_secret and all preceding handshake
   messages.  These handshake messages include the server certificate,
   which binds the signature to the server, and ServerHello.random,
   which binds the signature to the current handshake process.

F.1.1.3.  Diffie-Hellman Key Exchange with Authentication

   When Diffie-Hellman key exchange is used, the server either can
   supply a certificate containing fixed Diffie-Hellman parameters or
   can use the server key exchange message to send a set of temporary
   Diffie-Hellman parameters signed with a DSS or RSA certificate.
   Temporary parameters are hashed with the hello.random values before
   signing to ensure that attackers do not replay old parameters.  In
   either case, the client can verify the certificate or signature to
   ensure that the parameters belong to the server.

   If the client has a certificate containing fixed Diffie-Hellman
   parameters, its certificate contains the information required to
   complete the key exchange.  Note that in this case, the client and
   server will generate the same Diffie-Hellman result (i.e.,
   pre_master_secret) every time they communicate.  To prevent the
   pre_master_secret from staying in memory any longer than necessary,
   it should be converted into the master_secret as soon as possible.
   Client Diffie-Hellman parameters must be compatible with those
   supplied by the server for the key exchange to work.

   If the client has a standard DSS or RSA certificate or is
   unauthenticated, it sends a set of temporary parameters to the server
   in the client key exchange message, then optionally uses a
   certificate verify message to authenticate itself.





Freier, et al.                  Historic                       [Page 63](#dtoc){id=d63}

RFC 6101              The SSL Protocol Version 3.0           August 2011


F.1.1.4.  FORTEZZA

   FORTEZZA's design is classified, but at the protocol level it is
   similar to Diffie-Hellman with fixed public values contained in
   certificates.  The result of the key exchange process is the token
   encryption key (TEK), which is used to wrap data encryption keys,
   client write key, server write key, and master secret encryption key.
   The data encryption keys are not derived from the pre_master_secret
   because unwrapped keys are not accessible outside the token.  The
   encrypted pre_master_secret is sent to the server in a client key
   exchange message.

F.1.2.  Version Rollback Attacks

   Because SSL version 3.0 includes substantial improvements over SSL
   version 2.0, attackers may try to make version 3.0-capable clients
   and servers fall back to version 2.0.  This attack is occurring if
   (and only if) two version 3.0-capable parties use an SSL 2.0
   handshake.

   Although the solution using non-random PKCS #1 block type 2 message
   padding is inelegant, it provides a reasonably secure way for version
   3.0 servers to detect the attack.  This solution is not secure
   against attackers who can brute force the key and substitute a new
   ENCRYPTED-KEY-DATA message containing the same key (but with normal
   padding) before the application specified wait threshold has expired.
   Parties concerned about attacks of this scale should not be using 40-
   bit encryption keys anyway.  Altering the padding of the least
   significant 8 bytes of the PKCS padding does not impact security,
   since this is essentially equivalent to increasing the input block
   size by 8 bytes.

F.1.3.  Detecting Attacks against the Handshake Protocol

   An attacker might try to influence the handshake exchange to make the
   parties select different encryption algorithms than they would
   normally choose.  Because many implementations will support 40-bit
   exportable encryption and some may even support null encryption or
   MAC algorithms, this attack is of particular concern.

   For this attack, an attacker must actively change one or more
   handshake messages.  If this occurs, the client and server will
   compute different values for the handshake message hashes.  As a
   result, the parties will not accept each other's finished messages.
   Without the master_secret, the attacker cannot repair the finished
   messages, so the attack will be discovered.





Freier, et al.                  Historic                       [Page 64](#dtoc){id=d64}

RFC 6101              The SSL Protocol Version 3.0           August 2011


F.1.4.  Resuming Sessions

   When a connection is established by resuming a session, new
   ClientHello.random and ServerHello.random values are hashed with the
   session's master_secret.  Provided that the master_secret has not
   been compromised and that the secure hash operations used to produce
   the encryption keys and MAC secrets are secure, the connection should
   be secure and effectively independent from previous connections.
   Attackers cannot use known encryption keys or MAC secrets to
   compromise the master_secret without breaking the secure hash
   operations (which use both SHA and MD5).

   Sessions cannot be resumed unless both the client and server agree.
   If either party suspects that the session may have been compromised,
   or that certificates may have expired or been revoked, it should
   force a full handshake.  An upper limit of 24 hours is suggested for
   session ID lifetimes, since an attacker who obtains a master_secret
   may be able to impersonate the compromised party until the
   corresponding session ID is retired.  Applications that may be run in
   relatively insecure environments should not write session IDs to
   stable storage.

F.1.5.  MD5 and SHA

   SSL uses hash functions very conservatively.  Where possible, both
   MD5 and SHA are used in tandem to ensure that non-catastrophic flaws
   in one algorithm will not break the overall protocol.

F.2.  Protecting Application Data

   The master_secret is hashed with the ClientHello.random and
   ServerHello.random to produce unique data encryption keys and MAC
   secrets for each connection.  FORTEZZA encryption keys are generated
   by the token, and are not derived from the master_secret.

   Outgoing data is protected with a MAC before transmission.  To
   prevent message replay or modification attacks, the MAC is computed
   from the MAC secret, the sequence number, the message length, the
   message contents, and two fixed-character strings.  The message type
   field is necessary to ensure that messages intended for one SSL
   record layer client are not redirected to another.  The sequence
   number ensures that attempts to delete or reorder messages will be
   detected.  Since sequence numbers are 64 bits long, they should never
   overflow.  Messages from one party cannot be inserted into the
   other's output, since they use independent MAC secrets.  Similarly,
   the server-write and client-write keys are independent so stream
   cipher keys are used only once.




Freier, et al.                  Historic                       [Page 65](#dtoc){id=d65}

RFC 6101              The SSL Protocol Version 3.0           August 2011


   If an attacker does break an encryption key, all messages encrypted
   with it can be read.  Similarly, compromise of a MAC key can make
   message modification attacks possible.  Because MACs are also
   encrypted, message-alteration attacks generally require breaking the
   encryption algorithm as well as the MAC.

   Note: MAC secrets may be larger than encryption keys, so messages can
   remain tamper resistant even if encryption keys are broken.

F.3.  Final Notes

   For SSL to be able to provide a secure connection, both the client
   and server systems, keys, and applications must be secure.  In
   addition, the implementation must be free of security errors.

   The system is only as strong as the weakest key exchange and
   authentication algorithm supported, and only trustworthy
   cryptographic functions should be used.  Short public keys, 40-bit
   bulk encryption keys, and anonymous servers should be used with great
   caution.  Implementations and users must be careful when deciding
   which certificates and certificate authorities are acceptable; a
   dishonest certificate authority can do tremendous damage.

Appendix G.  Acknowledgements

G.1.  Other Contributors

   Martin Abadi                  Robert Relyea
   Digital Equipment Corporation Netscape Communications
   ma@pa.dec.com                 relyea@netscape.com

   Taher Elgamal                 Jim Roskind
   Netscape Communications       Netscape Communications
   elgamal@netscape.com          jar@netscape.com

   Anil Gangolli                 Micheal J. Sabin, Ph.D.
   Netscape Communications       Consulting Engineer
   gangolli@netscape.com         msabin@netcom.com

   Kipp E.B. Hickman             Tom Weinstein
   Netscape Communications       Netscape Communications
   kipp@netscape.com             tomw@netscape.com









Freier, et al.                  Historic                       [Page 66](#dtoc){id=d66}

RFC 6101              The SSL Protocol Version 3.0           August 2011


G.2.  Early Reviewers

   Robert Baldwin                Clyde Monma
   RSA Data Security, Inc.       Bellcore
   baldwin@rsa.com               clyde@bellcore.com

   George Cox                    Eric Murray
   Intel Corporation             ericm@lne.com
   cox@ibeam.jf.intel.com

   Cheri Dowell                  Avi Rubin
   Sun Microsystems              Bellcore
   cheri@eng.sun.com             rubin@bellcore.com

   Stuart Haber                  Don Stephenson
   Bellcore                      Sun Microsystems
   stuart@bellcore.com           don.stephenson@eng.sun.com

   Burt Kaliski                  Joe Tardo
   RSA Data Security, Inc.       General Magic
   burt@rsa.com                  tardo@genmagic.com

Authors' Addresses

   Alan O. Freier
   Netscape Communications


   Philip Karlton
   Netscape Communications


   Paul C. Kocher
   Independent Consultant

















Freier, et al.                  Historic                       [Page 67](#dtoc){id=d67}





Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content
========================================================

https://www.rfc-editor.org/rfc/rfc7231.html
--------------------------------------------------------







Internet Engineering Task Force (IETF)                  R. Fielding, Ed.
Request for Comments: 7231                                         Adobe
Obsoletes: 2616                                          J. Reschke, Ed.
Updates: 2817                                                 greenbytes
Category: Standards Track                                      June 2014
ISSN: 2070-1721


     Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content

Abstract

   The Hypertext Transfer Protocol (HTTP) is a stateless application-
   level protocol for distributed, collaborative, hypertext information
   systems.  This document defines the semantics of HTTP/1.1 messages,
   as expressed by request methods, request header fields, response
   status codes, and response header fields, along with the payload of
   messages (metadata and body content) and mechanisms for content
   negotiation.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 5741.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   http://www.rfc-editor.org/info/rfc7231.


















Fielding & Reschke           Standards Track                    [Page 1]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


Copyright Notice

   Copyright (c) 2014 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (http://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.

   This document may contain material from IETF Documents or IETF
   Contributions published or made publicly available before November
   10, 2008.  The person(s) controlling the copyright in some of this
   material may not have granted the IETF Trust the right to allow
   modifications of such material outside the IETF Standards Process.
   Without obtaining an adequate license from the person(s) controlling
   the copyright in such materials, this document may not be modified
   outside the IETF Standards Process, and derivative works of it may
   not be created outside the IETF Standards Process, except to format
   it for publication as an RFC or to translate it into languages other
   than English.

























Fielding & Reschke           Standards Track                    [Page 2]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


[Table of Contents](){id=etoc}
--------------------------------------------------------

   1. Introduction ....................................................6
      1.1. Conformance and Error Handling .............................6
      1.2. Syntax Notation ............................................6
   2. Resources .......................................................7
   3. Representations .................................................7
      3.1. Representation Metadata ....................................8
           3.1.1. Processing Representation Data ......................8
           3.1.2. Encoding for Compression or Integrity ..............11
           3.1.3. Audience Language ..................................13
           3.1.4. Identification .....................................14
      3.2. Representation Data .......................................17
      3.3. Payload Semantics .........................................17
      3.4. Content Negotiation .......................................18
           3.4.1. Proactive Negotiation ..............................19
           3.4.2. Reactive Negotiation ...............................20
   4. Request Methods ................................................21
      4.1. Overview ..................................................21
      4.2. Common Method Properties ..................................22
           4.2.1. Safe Methods .......................................22
           4.2.2. Idempotent Methods .................................23
           4.2.3. Cacheable Methods ..................................24
      4.3. Method Definitions ........................................24
           4.3.1. GET ................................................24
           4.3.2. HEAD ...............................................25
           4.3.3. POST ...............................................25
           4.3.4. PUT ................................................26
           4.3.5. DELETE .............................................29
           4.3.6. CONNECT ............................................30
           4.3.7. OPTIONS ............................................31
           4.3.8. TRACE ..............................................32
   5. Request Header Fields ..........................................33
      5.1. Controls ..................................................33
           5.1.1. Expect .............................................34
           5.1.2. Max-Forwards .......................................36
      5.2. Conditionals ..............................................36
      5.3. Content Negotiation .......................................37
           5.3.1. Quality Values .....................................37
           5.3.2. Accept .............................................38
           5.3.3. Accept-Charset .....................................40
           5.3.4. Accept-Encoding ....................................41
           5.3.5. Accept-Language ....................................42
      5.4. Authentication Credentials ................................44
      5.5. Request Context ...........................................44
           5.5.1. From ...............................................44
           5.5.2. Referer ............................................45
           5.5.3. User-Agent .........................................46



Fielding & Reschke           Standards Track                    [Page 3]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   6. Response Status Codes ..........................................47
      6.1. Overview of Status Codes ..................................48
      6.2. Informational 1xx .........................................50
           6.2.1. 100 Continue .......................................50
           6.2.2. 101 Switching Protocols ............................50
      6.3. Successful 2xx ............................................51
           6.3.1. 200 OK .............................................51
           6.3.2. 201 Created ........................................52
           6.3.3. 202 Accepted .......................................52
           6.3.4. 203 Non-Authoritative Information ..................52
           6.3.5. 204 No Content .....................................53
           6.3.6. 205 Reset Content ..................................53
      6.4. Redirection 3xx ...........................................54
           6.4.1. 300 Multiple Choices ...............................55
           6.4.2. 301 Moved Permanently ..............................56
           6.4.3. 302 Found ..........................................56
           6.4.4. 303 See Other ......................................57
           6.4.5. 305 Use Proxy ......................................58
           6.4.6. 306 (Unused) .......................................58
           6.4.7. 307 Temporary Redirect .............................58
      6.5. Client Error 4xx ..........................................58
           6.5.1. 400 Bad Request ....................................58
           6.5.2. 402 Payment Required ...............................59
           6.5.3. 403 Forbidden ......................................59
           6.5.4. 404 Not Found ......................................59
           6.5.5. 405 Method Not Allowed .............................59
           6.5.6. 406 Not Acceptable .................................60
           6.5.7. 408 Request Timeout ................................60
           6.5.8. 409 Conflict .......................................60
           6.5.9. 410 Gone ...........................................60
           6.5.10. 411 Length Required ...............................61
           6.5.11. 413 Payload Too Large .............................61
           6.5.12. 414 URI Too Long ..................................61
           6.5.13. 415 Unsupported Media Type ........................62
           6.5.14. 417 Expectation Failed ............................62
           6.5.15. 426 Upgrade Required ..............................62
      6.6. Server Error 5xx ..........................................62
           6.6.1. 500 Internal Server Error ..........................63
           6.6.2. 501 Not Implemented ................................63
           6.6.3. 502 Bad Gateway ....................................63
           6.6.4. 503 Service Unavailable ............................63
           6.6.5. 504 Gateway Timeout ................................63
           6.6.6. 505 HTTP Version Not Supported .....................64
   7. Response Header Fields .........................................64
      7.1. Control Data ..............................................64
ed            7.1.1. Origination Date ...................................65
           7.1.2. Location ...........................................68
           7.1.3. Retry-After ........................................69



Fielding & Reschke           Standards Track                    [Page 4]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


           7.1.4. Vary ...............................................70
      7.2. Validator Header Fields ...................................71
      7.3. Authentication Challenges .................................72
      7.4. Response Context ..........................................72
           7.4.1. Allow ..............................................72
           7.4.2. Server .............................................73
   8. IANA Considerations ............................................73
      8.1. Method Registry ...........................................73
           8.1.1. Procedure ..........................................74
           8.1.2. Considerations for New Methods .....................74
           8.1.3. Registrations ......................................75
      8.2. Status Code Registry ......................................75
           8.2.1. Procedure ..........................................75
           8.2.2. Considerations for New Status Codes ................76
           8.2.3. Registrations ......................................76
      8.3. Header Field Registry .....................................77
           8.3.1. Considerations for New Header Fields ...............78
           8.3.2. Registrations ......................................80
      8.4. Content Coding Registry ...................................81
           8.4.1. Procedure ..........................................81
           8.4.2. Registrations ......................................81
   9. Security Considerations ........................................81
      9.1. Attacks Based on File and Path Names ......................82
      9.2. Attacks Based on Command, Code, or Query Injection ........82
      9.3. Disclosure of Personal Information ........................83
      9.4. Disclosure of Sensitive Information in URIs ...............83
      9.5. Disclosure of Fragment after Redirects ....................84
      9.6. Disclosure of Product Information .........................84
      9.7. Browser Fingerprinting ....................................84
   10. Acknowledgments ...............................................85
   11. References ....................................................85
      11.1. Normative References .....................................85
      11.2. Informative References ...................................86
   Appendix A. Differences between HTTP and MIME .....................89
      A.1. MIME-Version ..............................................89
      A.2. Conversion to Canonical Form ..............................89
      A.3. Conversion of Date Formats ................................90
      A.4. Conversion of Content-Encoding ............................90
      A.5. Conversion of Content-Transfer-Encoding ...................90
      A.6. MHTML and Line Length Limitations .........................90
   Appendix B. Changes from RFC 2616 .................................91
   Appendix C. Imported ABNF .........................................93
   Appendix D. Collected ABNF ........................................94
   Index .............................................................97







Fielding & Reschke           Standards Track                    [Page 5]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


1.  Introduction

   Each Hypertext Transfer Protocol (HTTP) message is either a request
   or a response.  A server listens on a connection for a request,
   parses each message received, interprets the message semantics in
   relation to the identified request target, and responds to that
   request with one or more response messages.  A client constructs
   request messages to communicate specific intentions, examines
   received responses to see if the intentions were carried out, and
   determines how to interpret the results.  This document defines
   HTTP/1.1 request and response semantics in terms of the architecture
   defined in [RFC7230].

   HTTP provides a uniform interface for interacting with a resource
   (Section 2), regardless of its type, nature, or implementation, via
   the manipulation and transfer of representations (Section 3).

   HTTP semantics include the intentions defined by each request method
   (Section 4), extensions to those semantics that might be described in
   request header fields (Section 5), the meaning of status codes to
   indicate a machine-readable response (Section 6), and the meaning of
   other control data and resource metadata that might be given in
   response header fields (Section 7).

   This document also defines representation metadata that describe how
   a payload is intended to be interpreted by a recipient, the request
   header fields that might influence content selection, and the various
   selection algorithms that are collectively referred to as "content
   negotiation" (Section 3.4).

1.1.  Conformance and Error Handling

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC2119].

   Conformance criteria and considerations regarding error handling are
   defined in Section 2.5 of [RFC7230].

1.2.  Syntax Notation

   This specification uses the Augmented Backus-Naur Form (ABNF)
   notation of [RFC5234] with a list extension, defined in Section 7 of
   [RFC7230], that allows for compact definition of comma-separated
   lists using a '#' operator (similar to how the '*' operator indicates
   repetition).  Appendix C describes rules imported from other
   documents.  Appendix D shows the collected grammar with all list
   operators expanded to standard ABNF notation.



Fielding & Reschke           Standards Track                    [Page 6]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   This specification uses the terms "character", "character encoding
   scheme", "charset", and "protocol element" as they are defined in
   [RFC6365].

2.  Resources

   The target of an HTTP request is called a "resource".  HTTP does not
   limit the nature of a resource; it merely defines an interface that
   might be used to interact with resources.  Each resource is
   identified by a Uniform Resource Identifier (URI), as described in
   Section 2.7 of [RFC7230].

   When a client constructs an HTTP/1.1 request message, it sends the
   target URI in one of various forms, as defined in (Section 5.3 of
   [RFC7230]).  When a request is received, the server reconstructs an
   effective request URI for the target resource (Section 5.5 of
   [RFC7230]).

   One design goal of HTTP is to separate resource identification from
   request semantics, which is made possible by vesting the request
   semantics in the request method (Section 4) and a few
   request-modifying header fields (Section 5).  If there is a conflict
   between the method semantics and any semantic implied by the URI
   itself, as described in Section 4.2.1, the method semantics take
   precedence.

3.  Representations

   Considering that a resource could be anything, and that the uniform
   interface provided by HTTP is similar to a window through which one
   can observe and act upon such a thing only through the communication
   of messages to some independent actor on the other side, an
   abstraction is needed to represent ("take the place of") the current
   or desired state of that thing in our communications.  That
   abstraction is called a representation [REST].

   For the purposes of HTTP, a "representation" is information that is
   intended to reflect a past, current, or desired state of a given
   resource, in a format that can be readily communicated via the
   protocol, and that consists of a set of representation metadata and a
   potentially unbounded stream of representation data.

   An origin server might be provided with, or be capable of generating,
   multiple representations that are each intended to reflect the
   current state of a target resource.  In such cases, some algorithm is
   used by the origin server to select one of those representations as
   most applicable to a given request, usually based on content
   negotiation.  This "selected representation" is used to provide the



Fielding & Reschke           Standards Track                    [Page 7]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   data and metadata for evaluating conditional requests [RFC7232] and
   constructing the payload for 200 (OK) and 304 (Not Modified)
   responses to GET (Section 4.3.1).

3.1.  Representation Metadata

   Representation header fields provide metadata about the
   representation.  When a message includes a payload body, the
   representation header fields describe how to interpret the
   representation data enclosed in the payload body.  In a response to a
   HEAD request, the representation header fields describe the
   representation data that would have been enclosed in the payload body
   if the same request had been a GET.

   The following header fields convey representation metadata:

   +-------------------+-----------------+
   | Header Field Name | Defined in...   |
   +-------------------+-----------------+
   | Content-Type      | Section 3.1.1.5 |
   | Content-Encoding  | Section 3.1.2.2 |
   | Content-Language  | Section 3.1.3.2 |
   | Content-Location  | Section 3.1.4.2 |
   +-------------------+-----------------+

3.1.1.  Processing Representation Data

3.1.1.1.  Media Type

   HTTP uses Internet media types [RFC2046] in the Content-Type
   (Section 3.1.1.5) and Accept (Section 5.3.2) header fields in order
   to provide open and extensible data typing and type negotiation.
   Media types define both a data format and various processing models:
   how to process that data in accordance with each context in which it
   is received.

     media-type = type "/" subtype *( OWS ";" OWS parameter )
     type       = token
     subtype    = token

   The type/subtype MAY be followed by parameters in the form of
   name=value pairs.

     parameter      = token "=" ( token / quoted-string )







Fielding & Reschke           Standards Track                    [Page 8]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   The type, subtype, and parameter name tokens are case-insensitive.
   Parameter values might or might not be case-sensitive, depending on
   the semantics of the parameter name.  The presence or absence of a
   parameter might be significant to the processing of a media-type,
   depending on its definition within the media type registry.

   A parameter value that matches the token production can be
   transmitted either as a token or within a quoted-string.  The quoted
   and unquoted values are equivalent.  For example, the following
   examples are all equivalent, but the first is preferred for
   consistency:

     text/html;charset=utf-8
     text/html;charset=UTF-8
     Text/HTML;Charset="utf-8"
     text/html; charset="utf-8"

   Internet media types ought to be registered with IANA according to
   the procedures defined in [BCP13].

      Note: Unlike some similar constructs in other header fields, media
      type parameters do not allow whitespace (even "bad" whitespace)
      around the "=" character.

3.1.1.2.  Charset

   HTTP uses charset names to indicate or negotiate the character
   encoding scheme of a textual representation [RFC6365].  A charset is
   identified by a case-insensitive token.

     charset = token

   Charset names ought to be registered in the IANA "Character Sets"
   registry (<http://www.iana.org/assignments/character-sets>) according
   to the procedures defined in [RFC2978].

3.1.1.3.  Canonicalization and Text Defaults

   Internet media types are registered with a canonical form in order to
   be interoperable among systems with varying native encoding formats.
   Representations selected or transferred via HTTP ought to be in
   canonical form, for many of the same reasons described by the
   Multipurpose Internet Mail Extensions (MIME) [RFC2045].  However, the
   performance characteristics of email deployments (i.e., store and
   forward messages to peers) are significantly different from those
   common to HTTP and the Web (server-based information services).
   Furthermore, MIME's constraints for the sake of compatibility with
   older mail transfer protocols do not apply to HTTP (see Appendix A).



Fielding & Reschke           Standards Track                    [Page 9]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   MIME's canonical form requires that media subtypes of the "text" type
   use CRLF as the text line break.  HTTP allows the transfer of text
   media with plain CR or LF alone representing a line break, when such
   line breaks are consistent for an entire representation.  An HTTP
   sender MAY generate, and a recipient MUST be able to parse, line
   breaks in text media that consist of CRLF, bare CR, or bare LF.  In
   addition, text media in HTTP is not limited to charsets that use
   octets 13 and 10 for CR and LF, respectively.  This flexibility
   regarding line breaks applies only to text within a representation
   that has been assigned a "text" media type; it does not apply to
   "multipart" types or HTTP elements outside the payload body (e.g.,
   header fields).

   If a representation is encoded with a content-coding, the underlying
   data ought to be in a form defined above prior to being encoded.

3.1.1.4.  Multipart Types

   MIME provides for a number of "multipart" types -- encapsulations of
   one or more representations within a single message body.  All
   multipart types share a common syntax, as defined in Section 5.1.1 of
   [RFC2046], and include a boundary parameter as part of the media type
   value.  The message body is itself a protocol element; a sender MUST
   generate only CRLF to represent line breaks between body parts.

   HTTP message framing does not use the multipart boundary as an
   indicator of message body length, though it might be used by
   implementations that generate or process the payload.  For example,
   the "multipart/form-data" type is often used for carrying form data
   in a request, as described in [RFC2388], and the "multipart/
   byteranges" type is defined by this specification for use in some 206
   (Partial Content) responses [RFC7233].

3.1.1.5.  Content-Type

   The "Content-Type" header field indicates the media type of the
   associated representation: either the representation enclosed in the
   message payload or the selected representation, as determined by the
   message semantics.  The indicated media type defines both the data
   format and how that data is intended to be processed by a recipient,
   within the scope of the received message semantics, after any content
   codings indicated by Content-Encoding are decoded.

     Content-Type = media-type







Fielding & Reschke           Standards Track                   [Page 10]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Media types are defined in Section 3.1.1.1.  An example of the field
   is

     Content-Type: text/html; charset=ISO-8859-4

   A sender that generates a message containing a payload body SHOULD
   generate a Content-Type header field in that message unless the
   intended media type of the enclosed representation is unknown to the
   sender.  If a Content-Type header field is not present, the recipient
   MAY either assume a media type of "application/octet-stream"
   ([RFC2046], Section 4.5.1) or examine the data to determine its type.

   In practice, resource owners do not always properly configure their
   origin server to provide the correct Content-Type for a given
   representation, with the result that some clients will examine a
   payload's content and override the specified type.  Clients that do
   so risk drawing incorrect conclusions, which might expose additional
   security risks (e.g., "privilege escalation").  Furthermore, it is
   impossible to determine the sender's intent by examining the data
   format: many data formats match multiple media types that differ only
   in processing semantics.  Implementers are encouraged to provide a
   means of disabling such "content sniffing" when it is used.

3.1.2.  Encoding for Compression or Integrity

3.1.2.1.  Content Codings

   Content coding values indicate an encoding transformation that has
   been or can be applied to a representation.  Content codings are
   primarily used to allow a representation to be compressed or
   otherwise usefully transformed without losing the identity of its
   underlying media type and without loss of information.  Frequently,
   the representation is stored in coded form, transmitted directly, and
   only decoded by the final recipient.

     content-coding   = token

   All content-coding values are case-insensitive and ought to be
   registered within the "HTTP Content Coding Registry", as defined in
   Section 8.4.  They are used in the Accept-Encoding (Section 5.3.4)
   and Content-Encoding (Section 3.1.2.2) header fields.










Fielding & Reschke           Standards Track                   [Page 11]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   The following content-coding values are defined by this
   specification:

      compress (and x-compress): See Section 4.2.1 of [RFC7230].

      deflate: See Section 4.2.2 of [RFC7230].

      gzip (and x-gzip): See Section 4.2.3 of [RFC7230].

3.1.2.2.  Content-Encoding

   The "Content-Encoding" header field indicates what content codings
   have been applied to the representation, beyond those inherent in the
   media type, and thus what decoding mechanisms have to be applied in
   order to obtain data in the media type referenced by the Content-Type
   header field.  Content-Encoding is primarily used to allow a
   representation's data to be compressed without losing the identity of
   its underlying media type.

     Content-Encoding = 1#content-coding

   An example of its use is

     Content-Encoding: gzip

   If one or more encodings have been applied to a representation, the
   sender that applied the encodings MUST generate a Content-Encoding
   header field that lists the content codings in the order in which
   they were applied.  Additional information about the encoding
   parameters can be provided by other header fields not defined by this
   specification.

   Unlike Transfer-Encoding (Section 3.3.1 of [RFC7230]), the codings
   listed in Content-Encoding are a characteristic of the
   representation; the representation is defined in terms of the coded
   form, and all other metadata about the representation is about the
   coded form unless otherwise noted in the metadata definition.
   Typically, the representation is only decoded just prior to rendering
   or analogous usage.

   If the media type includes an inherent encoding, such as a data
   format that is always compressed, then that encoding would not be
   restated in Content-Encoding even if it happens to be the same
   algorithm as one of the content codings.  Such a content coding would
   only be listed if, for some bizarre reason, it is applied a second
   time to form the representation.  Likewise, an origin server might
   choose to publish the same data as multiple representations that
   differ only in whether the coding is defined as part of Content-Type



Fielding & Reschke           Standards Track                   [Page 12]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   or Content-Encoding, since some user agents will behave differently
   in their handling of each response (e.g., open a "Save as ..." dialog
   instead of automatic decompression and rendering of content).

   An origin server MAY respond with a status code of 415 (Unsupported
   Media Type) if a representation in the request message has a content
   coding that is not acceptable.

3.1.3.  Audience Language

3.1.3.1.  Language Tags

   A language tag, as defined in [RFC5646], identifies a natural
   language spoken, written, or otherwise conveyed by human beings for
   communication of information to other human beings.  Computer
   languages are explicitly excluded.

   HTTP uses language tags within the Accept-Language and
   Content-Language header fields.  Accept-Language uses the broader
   language-range production defined in Section 5.3.5, whereas
   Content-Language uses the language-tag production defined below.

     language-tag = <Language-Tag, see [RFC5646], Section 2.1>

   A language tag is a sequence of one or more case-insensitive subtags,
   each separated by a hyphen character ("-", %x2D).  In most cases, a
   language tag consists of a primary language subtag that identifies a
   broad family of related languages (e.g., "en" = English), which is
   optionally followed by a series of subtags that refine or narrow that
   language's range (e.g., "en-CA" = the variety of English as
   communicated in Canada).  Whitespace is not allowed within a language
   tag.  Example tags include:

     fr, en-US, es-419, az-Arab, x-pig-latin, man-Nkoo-GN

   See [RFC5646] for further information.

3.1.3.2.  Content-Language

   The "Content-Language" header field describes the natural language(s)
   of the intended audience for the representation.  Note that this
   might not be equivalent to all the languages used within the
   representation.

     Content-Language = 1#language-tag






Fielding & Reschke           Standards Track                   [Page 13]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Language tags are defined in Section 3.1.3.1.  The primary purpose of
   Content-Language is to allow a user to identify and differentiate
   representations according to the users' own preferred language.
   Thus, if the content is intended only for a Danish-literate audience,
   the appropriate field is

     Content-Language: da

   If no Content-Language is specified, the default is that the content
   is intended for all language audiences.  This might mean that the
   sender does not consider it to be specific to any natural language,
   or that the sender does not know for which language it is intended.

   Multiple languages MAY be listed for content that is intended for
   multiple audiences.  For example, a rendition of the "Treaty of
   Waitangi", presented simultaneously in the original Maori and English
   versions, would call for

     Content-Language: mi, en

   However, just because multiple languages are present within a
   representation does not mean that it is intended for multiple
   linguistic audiences.  An example would be a beginner's language
   primer, such as "A First Lesson in Latin", which is clearly intended
   to be used by an English-literate audience.  In this case, the
   Content-Language would properly only include "en".

   Content-Language MAY be applied to any media type -- it is not
   limited to textual documents.

3.1.4.  Identification

3.1.4.1.  Identifying a Representation

   When a complete or partial representation is transferred in a message
   payload, it is often desirable for the sender to supply, or the
   recipient to determine, an identifier for a resource corresponding to
   that representation.

   For a request message:

   o  If the request has a Content-Location header field, then the
      sender asserts that the payload is a representation of the
      resource identified by the Content-Location field-value.  However,
      such an assertion cannot be trusted unless it can be verified by
      other means (not defined by this specification).  The information
      might still be useful for revision history links.




Fielding & Reschke           Standards Track                   [Page 14]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   o  Otherwise, the payload is unidentified.

   For a response message, the following rules are applied in order
   until a match is found:

   1.  If the request method is GET or HEAD and the response status code
       is 200 (OK), 204 (No Content), 206 (Partial Content), or 304 (Not
       Modified), the payload is a representation of the resource
       identified by the effective request URI (Section 5.5 of
       [RFC7230]).

   2.  If the request method is GET or HEAD and the response status code
       is 203 (Non-Authoritative Information), the payload is a
       potentially modified or enhanced representation of the target
       resource as provided by an intermediary.

   3.  If the response has a Content-Location header field and its
       field-value is a reference to the same URI as the effective
       request URI, the payload is a representation of the resource
       identified by the effective request URI.

   4.  If the response has a Content-Location header field and its
       field-value is a reference to a URI different from the effective
       request URI, then the sender asserts that the payload is a
       representation of the resource identified by the Content-Location
       field-value.  However, such an assertion cannot be trusted unless
       it can be verified by other means (not defined by this
       specification).

   5.  Otherwise, the payload is unidentified.

3.1.4.2.  Content-Location

   The "Content-Location" header field references a URI that can be used
   as an identifier for a specific resource corresponding to the
   representation in this message's payload.  In other words, if one
   were to perform a GET request on this URI at the time of this
   message's generation, then a 200 (OK) response would contain the same
   representation that is enclosed as payload in this message.

     Content-Location = absolute-URI / partial-URI

   The Content-Location value is not a replacement for the effective
   Request URI (Section 5.5 of [RFC7230]).  It is representation
   metadata.  It has the same syntax and semantics as the header field
   of the same name defined for MIME body parts in Section 4 of
   [RFC2557].  However, its appearance in an HTTP message has some
   special implications for HTTP recipients.



Fielding & Reschke           Standards Track                   [Page 15]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   If Content-Location is included in a 2xx (Successful) response
   message and its value refers (after conversion to absolute form) to a
   URI that is the same as the effective request URI, then the recipient
   MAY consider the payload to be a current representation of that
   resource at the time indicated by the message origination date.  For
   a GET (Section 4.3.1) or HEAD (Section 4.3.2) request, this is the
   same as the default semantics when no Content-Location is provided by
   the server.  For a state-changing request like PUT (Section 4.3.4) or
   POST (Section 4.3.3), it implies that the server's response contains
   the new representation of that resource, thereby distinguishing it
   from representations that might only report about the action (e.g.,
   "It worked!").  This allows authoring applications to update their
   local copies without the need for a subsequent GET request.

   If Content-Location is included in a 2xx (Successful) response
   message and its field-value refers to a URI that differs from the
   effective request URI, then the origin server claims that the URI is
   an identifier for a different resource corresponding to the enclosed
   representation.  Such a claim can only be trusted if both identifiers
   share the same resource owner, which cannot be programmatically
   determined via HTTP.

   o  For a response to a GET or HEAD request, this is an indication
      that the effective request URI refers to a resource that is
      subject to content negotiation and the Content-Location
      field-value is a more specific identifier for the selected
      representation.

   o  For a 201 (Created) response to a state-changing method, a
      Content-Location field-value that is identical to the Location
      field-value indicates that this payload is a current
      representation of the newly created resource.

   o  Otherwise, such a Content-Location indicates that this payload is
      a representation reporting on the requested action's status and
      that the same report is available (for future access with GET) at
      the given URI.  For example, a purchase transaction made via a
      POST request might include a receipt document as the payload of
      the 200 (OK) response; the Content-Location field-value provides
      an identifier for retrieving a copy of that same receipt in the
      future.

   A user agent that sends Content-Location in a request message is
   stating that its value refers to where the user agent originally
   obtained the content of the enclosed representation (prior to any
   modifications made by that user agent).  In other words, the user
   agent is providing a back link to the source of the original
   representation.



Fielding & Reschke           Standards Track                   [Page 16]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   An origin server that receives a Content-Location field in a request
   message MUST treat the information as transitory request context
   rather than as metadata to be saved verbatim as part of the
   representation.  An origin server MAY use that context to guide in
   processing the request or to save it for other uses, such as within
   source links or versioning metadata.  However, an origin server MUST
   NOT use such context information to alter the request semantics.

   For example, if a client makes a PUT request on a negotiated resource
   and the origin server accepts that PUT (without redirection), then
   the new state of that resource is expected to be consistent with the
   one representation supplied in that PUT; the Content-Location cannot
   be used as a form of reverse content selection identifier to update
   only one of the negotiated representations.  If the user agent had
   wanted the latter semantics, it would have applied the PUT directly
   to the Content-Location URI.

3.2.  Representation Data

   The representation data associated with an HTTP message is either
   provided as the payload body of the message or referred to by the
   message semantics and the effective request URI.  The representation
   data is in a format and encoding defined by the representation
   metadata header fields.

   The data type of the representation data is determined via the header
   fields Content-Type and Content-Encoding.  These define a two-layer,
   ordered encoding model:

     representation-data := Content-Encoding( Content-Type( bits ) )

3.3.  Payload Semantics

   Some HTTP messages transfer a complete or partial representation as
   the message "payload".  In some cases, a payload might contain only
   the associated representation's header fields (e.g., responses to
   HEAD) or only some part(s) of the representation data (e.g., the 206
   (Partial Content) status code).

   The purpose of a payload in a request is defined by the method
   semantics.  For example, a representation in the payload of a PUT
   request (Section 4.3.4) represents the desired state of the target
   resource if the request is successfully applied, whereas a
   representation in the payload of a POST request (Section 4.3.3)
   represents information to be processed by the target resource.






Fielding & Reschke           Standards Track                   [Page 17]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   In a response, the payload's purpose is defined by both the request
   method and the response status code.  For example, the payload of a
   200 (OK) response to GET (Section 4.3.1) represents the current state
   of the target resource, as observed at the time of the message
   origination date (Section 7.1.1.2), whereas the payload of the same
   status code in a response to POST might represent either the
   processing result or the new state of the target resource after
   applying the processing.  Response messages with an error status code
   usually contain a payload that represents the error condition, such
   that it describes the error state and what next steps are suggested
   for resolving it.

   Header fields that specifically describe the payload, rather than the
   associated representation, are referred to as "payload header
   fields".  Payload header fields are defined in other parts of this
   specification, due to their impact on message parsing.

   +-------------------+----------------------------+
   | Header Field Name | Defined in...              |
   +-------------------+----------------------------+
   | Content-Length    | Section 3.3.2 of [RFC7230] |
   | Content-Range     | Section 4.2 of [RFC7233]   |
   | Trailer           | Section 4.4 of [RFC7230]   |
   | Transfer-Encoding | Section 3.3.1 of [RFC7230] |
   +-------------------+----------------------------+

3.4.  Content Negotiation

   When responses convey payload information, whether indicating a
   success or an error, the origin server often has different ways of
   representing that information; for example, in different formats,
   languages, or encodings.  Likewise, different users or user agents
   might have differing capabilities, characteristics, or preferences
   that could influence which representation, among those available,
   would be best to deliver.  For this reason, HTTP provides mechanisms
   for content negotiation.

   This specification defines two patterns of content negotiation that
   can be made visible within the protocol: "proactive", where the
   server selects the representation based upon the user agent's stated
   preferences, and "reactive" negotiation, where the server provides a
   list of representations for the user agent to choose from.  Other
   patterns of content negotiation include "conditional content", where
   the representation consists of multiple parts that are selectively
   rendered based on user agent parameters, "active content", where the
   representation contains a script that makes additional (more
   specific) requests based on the user agent characteristics, and
   "Transparent Content Negotiation" ([RFC2295]), where content



Fielding & Reschke           Standards Track                   [Page 18]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   selection is performed by an intermediary.  These patterns are not
   mutually exclusive, and each has trade-offs in applicability and
   practicality.

   Note that, in all cases, HTTP is not aware of the resource semantics.
   The consistency with which an origin server responds to requests,
   over time and over the varying dimensions of content negotiation, and
   thus the "sameness" of a resource's observed representations over
   time, is determined entirely by whatever entity or algorithm selects
   or generates those responses.  HTTP pays no attention to the man
   behind the curtain.

3.4.1.  Proactive Negotiation

   When content negotiation preferences are sent by the user agent in a
   request to encourage an algorithm located at the server to select the
   preferred representation, it is called proactive negotiation (a.k.a.,
   server-driven negotiation).  Selection is based on the available
   representations for a response (the dimensions over which it might
   vary, such as language, content-coding, etc.) compared to various
   information supplied in the request, including both the explicit
   negotiation fields of Section 5.3 and implicit characteristics, such
   as the client's network address or parts of the User-Agent field.

   Proactive negotiation is advantageous when the algorithm for
   selecting from among the available representations is difficult to
   describe to a user agent, or when the server desires to send its
   "best guess" to the user agent along with the first response (hoping
   to avoid the round trip delay of a subsequent request if the "best
   guess" is good enough for the user).  In order to improve the
   server's guess, a user agent MAY send request header fields that
   describe its preferences.

   Proactive negotiation has serious disadvantages:

   o  It is impossible for the server to accurately determine what might
      be "best" for any given user, since that would require complete
      knowledge of both the capabilities of the user agent and the
      intended use for the response (e.g., does the user want to view it
      on screen or print it on paper?);

   o  Having the user agent describe its capabilities in every request
      can be both very inefficient (given that only a small percentage
      of responses have multiple representations) and a potential risk
      to the user's privacy;

   o  It complicates the implementation of an origin server and the
      algorithms for generating responses to a request; and,



Fielding & Reschke           Standards Track                   [Page 19]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   o  It limits the reusability of responses for shared caching.

   A user agent cannot rely on proactive negotiation preferences being
   consistently honored, since the origin server might not implement
   proactive negotiation for the requested resource or might decide that
   sending a response that doesn't conform to the user agent's
   preferences is better than sending a 406 (Not Acceptable) response.

   A Vary header field (Section 7.1.4) is often sent in a response
   subject to proactive negotiation to indicate what parts of the
   request information were used in the selection algorithm.

3.4.2.  Reactive Negotiation

   With reactive negotiation (a.k.a., agent-driven negotiation),
   selection of the best response representation (regardless of the
   status code) is performed by the user agent after receiving an
   initial response from the origin server that contains a list of
   resources for alternative representations.  If the user agent is not
   satisfied by the initial response representation, it can perform a
   GET request on one or more of the alternative resources, selected
   based on metadata included in the list, to obtain a different form of
   representation for that response.  Selection of alternatives might be
   performed automatically by the user agent or manually by the user
   selecting from a generated (possibly hypertext) menu.

   Note that the above refers to representations of the response, in
   general, not representations of the resource.  The alternative
   representations are only considered representations of the target
   resource if the response in which those alternatives are provided has
   the semantics of being a representation of the target resource (e.g.,
   a 200 (OK) response to a GET request) or has the semantics of
   providing links to alternative representations for the target
   resource (e.g., a 300 (Multiple Choices) response to a GET request).

   A server might choose not to send an initial representation, other
   than the list of alternatives, and thereby indicate that reactive
   negotiation by the user agent is preferred.  For example, the
   alternatives listed in responses with the 300 (Multiple Choices) and
   406 (Not Acceptable) status codes include information about the
   available representations so that the user or user agent can react by
   making a selection.

   Reactive negotiation is advantageous when the response would vary
   over commonly used dimensions (such as type, language, or encoding),
   when the origin server is unable to determine a user agent's
   capabilities from examining the request, and generally when public
   caches are used to distribute server load and reduce network usage.



Fielding & Reschke           Standards Track                   [Page 20]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Reactive negotiation suffers from the disadvantages of transmitting a
   list of alternatives to the user agent, which degrades user-perceived
   latency if transmitted in the header section, and needing a second
   request to obtain an alternate representation.  Furthermore, this
   specification does not define a mechanism for supporting automatic
   selection, though it does not prevent such a mechanism from being
   developed as an extension.

4.  Request Methods

4.1.  Overview

   The request method token is the primary source of request semantics;
   it indicates the purpose for which the client has made this request
   and what is expected by the client as a successful result.

   The request method's semantics might be further specialized by the
   semantics of some header fields when present in a request (Section 5)
   if those additional semantics do not conflict with the method.  For
   example, a client can send conditional request header fields
   (Section 5.2) to make the requested action conditional on the current
   state of the target resource ([RFC7232]).

     method = token

   HTTP was originally designed to be usable as an interface to
   distributed object systems.  The request method was envisioned as
   applying semantics to a target resource in much the same way as
   invoking a defined method on an identified object would apply
   semantics.  The method token is case-sensitive because it might be
   used as a gateway to object-based systems with case-sensitive method
   names.

   Unlike distributed objects, the standardized request methods in HTTP
   are not resource-specific, since uniform interfaces provide for
   better visibility and reuse in network-based systems [REST].  Once
   defined, a standardized method ought to have the same semantics when
   applied to any resource, though each resource determines for itself
   whether those semantics are implemented or allowed.

   This specification defines a number of standardized methods that are
   commonly used in HTTP, as outlined by the following table.  By
   convention, standardized methods are defined in all-uppercase
   US-ASCII letters.







Fielding & Reschke           Standards Track                   [Page 21]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   +---------+-------------------------------------------------+-------+
   | Method  | Description                                     | Sec.  |
   +---------+-------------------------------------------------+-------+
   | GET     | Transfer a current representation of the target | 4.3.1 |
   |         | resource.                                       |       |
   | HEAD    | Same as GET, but only transfer the status line  | 4.3.2 |
   |         | and header section.                             |       |
   | POST    | Perform resource-specific processing on the     | 4.3.3 |
   |         | request payload.                                |       |
   | PUT     | Replace all current representations of the      | 4.3.4 |
   |         | target resource with the request payload.       |       |
   | DELETE  | Remove all current representations of the       | 4.3.5 |
   |         | target resource.                                |       |
   | CONNECT | Establish a tunnel to the server identified by  | 4.3.6 |
   |         | the target resource.                            |       |
   | OPTIONS | Describe the communication options for the      | 4.3.7 |
   |         | target resource.                                |       |
   | TRACE   | Perform a message loop-back test along the path | 4.3.8 |
   |         | to the target resource.                         |       |
   +---------+-------------------------------------------------+-------+

   All general-purpose servers MUST support the methods GET and HEAD.
   All other methods are OPTIONAL.

   Additional methods, outside the scope of this specification, have
   been standardized for use in HTTP.  All such methods ought to be
   registered within the "Hypertext Transfer Protocol (HTTP) Method
   Registry" maintained by IANA, as defined in Section 8.1.

   The set of methods allowed by a target resource can be listed in an
   Allow header field (Section 7.4.1).  However, the set of allowed
   methods can change dynamically.  When a request method is received
   that is unrecognized or not implemented by an origin server, the
   origin server SHOULD respond with the 501 (Not Implemented) status
   code.  When a request method is received that is known by an origin
   server but not allowed for the target resource, the origin server
   SHOULD respond with the 405 (Method Not Allowed) status code.

4.2.  Common Method Properties

4.2.1.  Safe Methods

   Request methods are considered "safe" if their defined semantics are
   essentially read-only; i.e., the client does not request, and does
   not expect, any state change on the origin server as a result of
   applying a safe method to a target resource.  Likewise, reasonable
   use of a safe method is not expected to cause any harm, loss of
   property, or unusual burden on the origin server.



Fielding & Reschke           Standards Track                   [Page 22]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   This definition of safe methods does not prevent an implementation
   from including behavior that is potentially harmful, that is not
   entirely read-only, or that causes side effects while invoking a safe
   method.  What is important, however, is that the client did not
   request that additional behavior and cannot be held accountable for
   it.  For example, most servers append request information to access
   log files at the completion of every response, regardless of the
   method, and that is considered safe even though the log storage might
   become full and crash the server.  Likewise, a safe request initiated
   by selecting an advertisement on the Web will often have the side
   effect of charging an advertising account.

   Of the request methods defined by this specification, the GET, HEAD,
   OPTIONS, and TRACE methods are defined to be safe.

   The purpose of distinguishing between safe and unsafe methods is to
   allow automated retrieval processes (spiders) and cache performance
   optimization (pre-fetching) to work without fear of causing harm.  In
   addition, it allows a user agent to apply appropriate constraints on
   the automated use of unsafe methods when processing potentially
   untrusted content.

   A user agent SHOULD distinguish between safe and unsafe methods when
   presenting potential actions to a user, such that the user can be
   made aware of an unsafe action before it is requested.

   When a resource is constructed such that parameters within the
   effective request URI have the effect of selecting an action, it is
   the resource owner's responsibility to ensure that the action is
   consistent with the request method semantics.  For example, it is
   common for Web-based content editing software to use actions within
   query parameters, such as "page?do=delete".  If the purpose of such a
   resource is to perform an unsafe action, then the resource owner MUST
   disable or disallow that action when it is accessed using a safe
   request method.  Failure to do so will result in unfortunate side
   effects when automated processes perform a GET on every URI reference
   for the sake of link maintenance, pre-fetching, building a search
   index, etc.

4.2.2.  Idempotent Methods

   A request method is considered "idempotent" if the intended effect on
   the server of multiple identical requests with that method is the
   same as the effect for a single such request.  Of the request methods
   defined by this specification, PUT, DELETE, and safe request methods
   are idempotent.





Fielding & Reschke           Standards Track                   [Page 23]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Like the definition of safe, the idempotent property only applies to
   what has been requested by the user; a server is free to log each
   request separately, retain a revision control history, or implement
   other non-idempotent side effects for each idempotent request.

   Idempotent methods are distinguished because the request can be
   repeated automatically if a communication failure occurs before the
   client is able to read the server's response.  For example, if a
   client sends a PUT request and the underlying connection is closed
   before any response is received, then the client can establish a new
   connection and retry the idempotent request.  It knows that repeating
   the request will have the same intended effect, even if the original
   request succeeded, though the response might differ.

4.2.3.  Cacheable Methods

   Request methods can be defined as "cacheable" to indicate that
   responses to them are allowed to be stored for future reuse; for
   specific requirements see [RFC7234].  In general, safe methods that
   do not depend on a current or authoritative response are defined as
   cacheable; this specification defines GET, HEAD, and POST as
   cacheable, although the overwhelming majority of cache
   implementations only support GET and HEAD.

4.3.  Method Definitions

4.3.1.  GET

   The GET method requests transfer of a current selected representation
   for the target resource.  GET is the primary mechanism of information
   retrieval and the focus of almost all performance optimizations.
   Hence, when people speak of retrieving some identifiable information
   via HTTP, they are generally referring to making a GET request.

   It is tempting to think of resource identifiers as remote file system
   pathnames and of representations as being a copy of the contents of
   such files.  In fact, that is how many resources are implemented (see
   Section 9.1 for related security considerations).  However, there are
   no such limitations in practice.  The HTTP interface for a resource
   is just as likely to be implemented as a tree of content objects, a
   programmatic view on various database records, or a gateway to other
   information systems.  Even when the URI mapping mechanism is tied to
   a file system, an origin server might be configured to execute the
   files with the request as input and send the output as the
   representation rather than transfer the files directly.  Regardless,
   only the origin server needs to know how each of its resource





Fielding & Reschke           Standards Track                   [Page 24]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   identifiers corresponds to an implementation and how each
   implementation manages to select and send a current representation of
   the target resource in a response to GET.

   A client can alter the semantics of GET to be a "range request",
   requesting transfer of only some part(s) of the selected
   representation, by sending a Range header field in the request
   ([RFC7233]).

   A payload within a GET request message has no defined semantics;
   sending a payload body on a GET request might cause some existing
   implementations to reject the request.

   The response to a GET request is cacheable; a cache MAY use it to
   satisfy subsequent GET and HEAD requests unless otherwise indicated
   by the Cache-Control header field (Section 5.2 of [RFC7234]).

4.3.2.  HEAD

   The HEAD method is identical to GET except that the server MUST NOT
   send a message body in the response (i.e., the response terminates at
   the end of the header section).  The server SHOULD send the same
   header fields in response to a HEAD request as it would have sent if
   the request had been a GET, except that the payload header fields
   (Section 3.3) MAY be omitted.  This method can be used for obtaining
   metadata about the selected representation without transferring the
   representation data and is often used for testing hypertext links for
   validity, accessibility, and recent modification.

   A payload within a HEAD request message has no defined semantics;
   sending a payload body on a HEAD request might cause some existing
   implementations to reject the request.

   The response to a HEAD request is cacheable; a cache MAY use it to
   satisfy subsequent HEAD requests unless otherwise indicated by the
   Cache-Control header field (Section 5.2 of [RFC7234]).  A HEAD
   response might also have an effect on previously cached responses to
   GET; see Section 4.3.5 of [RFC7234].

4.3.3.  POST

   The POST method requests that the target resource process the
   representation enclosed in the request according to the resource's
   own specific semantics.  For example, POST is used for the following
   functions (among others):

   o  Providing a block of data, such as the fields entered into an HTML
      form, to a data-handling process;



Fielding & Reschke           Standards Track                   [Page 25]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   o  Posting a message to a bulletin board, newsgroup, mailing list,
      blog, or similar group of articles;

   o  Creating a new resource that has yet to be identified by the
      origin server; and

   o  Appending data to a resource's existing representation(s).

   An origin server indicates response semantics by choosing an
   appropriate status code depending on the result of processing the
   POST request; almost all of the status codes defined by this
   specification might be received in a response to POST (the exceptions
   being 206 (Partial Content), 304 (Not Modified), and 416 (Range Not
   Satisfiable)).

   If one or more resources has been created on the origin server as a
   result of successfully processing a POST request, the origin server
   SHOULD send a 201 (Created) response containing a Location header
   field that provides an identifier for the primary resource created
   (Section 7.1.2) and a representation that describes the status of the
   request while referring to the new resource(s).

   Responses to POST requests are only cacheable when they include
   explicit freshness information (see Section 4.2.1 of [RFC7234]).
   However, POST caching is not widely implemented.  For cases where an
   origin server wishes the client to be able to cache the result of a
   POST in a way that can be reused by a later GET, the origin server
   MAY send a 200 (OK) response containing the result and a
   Content-Location header field that has the same value as the POST's
   effective request URI (Section 3.1.4.2).

   If the result of processing a POST would be equivalent to a
   representation of an existing resource, an origin server MAY redirect
   the user agent to that resource by sending a 303 (See Other) response
   with the existing resource's identifier in the Location field.  This
   has the benefits of providing the user agent a resource identifier
   and transferring the representation via a method more amenable to
   shared caching, though at the cost of an extra request if the user
   agent does not already have the representation cached.

4.3.4.  PUT

   The PUT method requests that the state of the target resource be
   created or replaced with the state defined by the representation
   enclosed in the request message payload.  A successful PUT of a given
   representation would suggest that a subsequent GET on that same
   target resource will result in an equivalent representation being
   sent in a 200 (OK) response.  However, there is no guarantee that



Fielding & Reschke           Standards Track                   [Page 26]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   such a state change will be observable, since the target resource
   might be acted upon by other user agents in parallel, or might be
   subject to dynamic processing by the origin server, before any
   subsequent GET is received.  A successful response only implies that
   the user agent's intent was achieved at the time of its processing by
   the origin server.

   If the target resource does not have a current representation and the
   PUT successfully creates one, then the origin server MUST inform the
   user agent by sending a 201 (Created) response.  If the target
   resource does have a current representation and that representation
   is successfully modified in accordance with the state of the enclosed
   representation, then the origin server MUST send either a 200 (OK) or
   a 204 (No Content) response to indicate successful completion of the
   request.

   An origin server SHOULD ignore unrecognized header fields received in
   a PUT request (i.e., do not save them as part of the resource state).

   An origin server SHOULD verify that the PUT representation is
   consistent with any constraints the server has for the target
   resource that cannot or will not be changed by the PUT.  This is
   particularly important when the origin server uses internal
   configuration information related to the URI in order to set the
   values for representation metadata on GET responses.  When a PUT
   representation is inconsistent with the target resource, the origin
   server SHOULD either make them consistent, by transforming the
   representation or changing the resource configuration, or respond
   with an appropriate error message containing sufficient information
   to explain why the representation is unsuitable.  The 409 (Conflict)
   or 415 (Unsupported Media Type) status codes are suggested, with the
   latter being specific to constraints on Content-Type values.

   For example, if the target resource is configured to always have a
   Content-Type of "text/html" and the representation being PUT has a
   Content-Type of "image/jpeg", the origin server ought to do one of:

   a.  reconfigure the target resource to reflect the new media type;

   b.  transform the PUT representation to a format consistent with that
       of the resource before saving it as the new resource state; or,

   c.  reject the request with a 415 (Unsupported Media Type) response
       indicating that the target resource is limited to "text/html",
       perhaps including a link to a different resource that would be a
       suitable target for the new representation.





Fielding & Reschke           Standards Track                   [Page 27]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   HTTP does not define exactly how a PUT method affects the state of an
   origin server beyond what can be expressed by the intent of the user
   agent request and the semantics of the origin server response.  It
   does not define what a resource might be, in any sense of that word,
   beyond the interface provided via HTTP.  It does not define how
   resource state is "stored", nor how such storage might change as a
   result of a change in resource state, nor how the origin server
   translates resource state into representations.  Generally speaking,
   all implementation details behind the resource interface are
   intentionally hidden by the server.

   An origin server MUST NOT send a validator header field
   (Section 7.2), such as an ETag or Last-Modified field, in a
   successful response to PUT unless the request's representation data
   was saved without any transformation applied to the body (i.e., the
   resource's new representation data is identical to the representation
   data received in the PUT request) and the validator field value
   reflects the new representation.  This requirement allows a user
   agent to know when the representation body it has in memory remains
   current as a result of the PUT, thus not in need of being retrieved
   again from the origin server, and that the new validator(s) received
   in the response can be used for future conditional requests in order
   to prevent accidental overwrites (Section 5.2).

   The fundamental difference between the POST and PUT methods is
   highlighted by the different intent for the enclosed representation.
   The target resource in a POST request is intended to handle the
   enclosed representation according to the resource's own semantics,
   whereas the enclosed representation in a PUT request is defined as
   replacing the state of the target resource.  Hence, the intent of PUT
   is idempotent and visible to intermediaries, even though the exact
   effect is only known by the origin server.

   Proper interpretation of a PUT request presumes that the user agent
   knows which target resource is desired.  A service that selects a
   proper URI on behalf of the client, after receiving a state-changing
   request, SHOULD be implemented using the POST method rather than PUT.
   If the origin server will not make the requested PUT state change to
   the target resource and instead wishes to have it applied to a
   different resource, such as when the resource has been moved to a
   different URI, then the origin server MUST send an appropriate 3xx
   (Redirection) response; the user agent MAY then make its own decision
   regarding whether or not to redirect the request.

   A PUT request applied to the target resource can have side effects on
   other resources.  For example, an article might have a URI for
   identifying "the current version" (a resource) that is separate from
   the URIs identifying each particular version (different resources



Fielding & Reschke           Standards Track                   [Page 28]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   that at one point shared the same state as the current version
   resource).  A successful PUT request on "the current version" URI
   might therefore create a new version resource in addition to changing
   the state of the target resource, and might also cause links to be
   added between the related resources.

   An origin server that allows PUT on a given target resource MUST send
   a 400 (Bad Request) response to a PUT request that contains a
   Content-Range header field (Section 4.2 of [RFC7233]), since the
   payload is likely to be partial content that has been mistakenly PUT
   as a full representation.  Partial content updates are possible by
   targeting a separately identified resource with state that overlaps a
   portion of the larger resource, or by using a different method that
   has been specifically defined for partial updates (for example, the
   PATCH method defined in [RFC5789]).

   Responses to the PUT method are not cacheable.  If a successful PUT
   request passes through a cache that has one or more stored responses
   for the effective request URI, those stored responses will be
   invalidated (see Section 4.4 of [RFC7234]).

4.3.5.  DELETE

   The DELETE method requests that the origin server remove the
   association between the target resource and its current
   functionality.  In effect, this method is similar to the rm command
   in UNIX: it expresses a deletion operation on the URI mapping of the
   origin server rather than an expectation that the previously
   associated information be deleted.

   If the target resource has one or more current representations, they
   might or might not be destroyed by the origin server, and the
   associated storage might or might not be reclaimed, depending
   entirely on the nature of the resource and its implementation by the
   origin server (which are beyond the scope of this specification).
   Likewise, other implementation aspects of a resource might need to be
   deactivated or archived as a result of a DELETE, such as database or
   gateway connections.  In general, it is assumed that the origin
   server will only allow DELETE on resources for which it has a
   prescribed mechanism for accomplishing the deletion.

   Relatively few resources allow the DELETE method -- its primary use
   is for remote authoring environments, where the user has some
   direction regarding its effect.  For example, a resource that was
   previously created using a PUT request, or identified via the
   Location header field after a 201 (Created) response to a POST
   request, might allow a corresponding DELETE request to undo those
   actions.  Similarly, custom user agent implementations that implement



Fielding & Reschke           Standards Track                   [Page 29]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   an authoring function, such as revision control clients using HTTP
   for remote operations, might use DELETE based on an assumption that
   the server's URI space has been crafted to correspond to a version
   repository.

   If a DELETE method is successfully applied, the origin server SHOULD
   send a 202 (Accepted) status code if the action will likely succeed
   but has not yet been enacted, a 204 (No Content) status code if the
   action has been enacted and no further information is to be supplied,
   or a 200 (OK) status code if the action has been enacted and the
   response message includes a representation describing the status.

   A payload within a DELETE request message has no defined semantics;
   sending a payload body on a DELETE request might cause some existing
   implementations to reject the request.

   Responses to the DELETE method are not cacheable.  If a DELETE
   request passes through a cache that has one or more stored responses
   for the effective request URI, those stored responses will be
   invalidated (see Section 4.4 of [RFC7234]).

4.3.6.  CONNECT

   The CONNECT method requests that the recipient establish a tunnel to
   the destination origin server identified by the request-target and,
   if successful, thereafter restrict its behavior to blind forwarding
   of packets, in both directions, until the tunnel is closed.  Tunnels
   are commonly used to create an end-to-end virtual connection, through
   one or more proxies, which can then be secured using TLS (Transport
   Layer Security, [RFC5246]).

   CONNECT is intended only for use in requests to a proxy.  An origin
   server that receives a CONNECT request for itself MAY respond with a
   2xx (Successful) status code to indicate that a connection is
   established.  However, most origin servers do not implement CONNECT.

   A client sending a CONNECT request MUST send the authority form of
   request-target (Section 5.3 of [RFC7230]); i.e., the request-target
   consists of only the host name and port number of the tunnel
   destination, separated by a colon.  For example,

     CONNECT server.example.com:80 HTTP/1.1
     Host: server.example.com:80

   The recipient proxy can establish a tunnel either by directly
   connecting to the request-target or, if configured to use another
   proxy, by forwarding the CONNECT request to the next inbound proxy.
   Any 2xx (Successful) response indicates that the sender (and all



Fielding & Reschke           Standards Track                   [Page 30]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   inbound proxies) will switch to tunnel mode immediately after the
   blank line that concludes the successful response's header section;
   data received after that blank line is from the server identified by
   the request-target.  Any response other than a successful response
   indicates that the tunnel has not yet been formed and that the
   connection remains governed by HTTP.

   A tunnel is closed when a tunnel intermediary detects that either
   side has closed its connection: the intermediary MUST attempt to send
   any outstanding data that came from the closed side to the other
   side, close both connections, and then discard any remaining data
   left undelivered.

   Proxy authentication might be used to establish the authority to
   create a tunnel.  For example,

     CONNECT server.example.com:80 HTTP/1.1
     Host: server.example.com:80
     Proxy-Authorization: basic aGVsbG86d29ybGQ=

   There are significant risks in establishing a tunnel to arbitrary
   servers, particularly when the destination is a well-known or
   reserved TCP port that is not intended for Web traffic.  For example,
   a CONNECT to a request-target of "example.com:25" would suggest that
   the proxy connect to the reserved port for SMTP traffic; if allowed,
   that could trick the proxy into relaying spam email.  Proxies that
   support CONNECT SHOULD restrict its use to a limited set of known
   ports or a configurable whitelist of safe request targets.

   A server MUST NOT send any Transfer-Encoding or Content-Length header
   fields in a 2xx (Successful) response to CONNECT.  A client MUST
   ignore any Content-Length or Transfer-Encoding header fields received
   in a successful response to CONNECT.

   A payload within a CONNECT request message has no defined semantics;
   sending a payload body on a CONNECT request might cause some existing
   implementations to reject the request.

   Responses to the CONNECT method are not cacheable.

4.3.7.  OPTIONS

   The OPTIONS method requests information about the communication
   options available for the target resource, at either the origin
   server or an intervening intermediary.  This method allows a client
   to determine the options and/or requirements associated with a
   resource, or the capabilities of a server, without implying a
   resource action.



Fielding & Reschke           Standards Track                   [Page 31]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   An OPTIONS request with an asterisk ("*") as the request-target
   (Section 5.3 of [RFC7230]) applies to the server in general rather
   than to a specific resource.  Since a server's communication options
   typically depend on the resource, the "*" request is only useful as a
   "ping" or "no-op" type of method; it does nothing beyond allowing the
   client to test the capabilities of the server.  For example, this can
   be used to test a proxy for HTTP/1.1 conformance (or lack thereof).

   If the request-target is not an asterisk, the OPTIONS request applies
   to the options that are available when communicating with the target
   resource.

   A server generating a successful response to OPTIONS SHOULD send any
   header fields that might indicate optional features implemented by
   the server and applicable to the target resource (e.g., Allow),
   including potential extensions not defined by this specification.
   The response payload, if any, might also describe the communication
   options in a machine or human-readable representation.  A standard
   format for such a representation is not defined by this
   specification, but might be defined by future extensions to HTTP.  A
   server MUST generate a Content-Length field with a value of "0" if no
   payload body is to be sent in the response.

   A client MAY send a Max-Forwards header field in an OPTIONS request
   to target a specific recipient in the request chain (see
   Section 5.1.2).  A proxy MUST NOT generate a Max-Forwards header
   field while forwarding a request unless that request was received
   with a Max-Forwards field.

   A client that generates an OPTIONS request containing a payload body
   MUST send a valid Content-Type header field describing the
   representation media type.  Although this specification does not
   define any use for such a payload, future extensions to HTTP might
   use the OPTIONS body to make more detailed queries about the target
   resource.

   Responses to the OPTIONS method are not cacheable.

4.3.8.  TRACE

   The TRACE method requests a remote, application-level loop-back of
   the request message.  The final recipient of the request SHOULD
   reflect the message received, excluding some fields described below,
   back to the client as the message body of a 200 (OK) response with a
   Content-Type of "message/http" (Section 8.3.1 of [RFC7230]).  The
   final recipient is either the origin server or the first server to
   receive a Max-Forwards value of zero (0) in the request
   (Section 5.1.2).



Fielding & Reschke           Standards Track                   [Page 32]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   A client MUST NOT generate header fields in a TRACE request
   containing sensitive data that might be disclosed by the response.
   For example, it would be foolish for a user agent to send stored user
   credentials [RFC7235] or cookies [RFC6265] in a TRACE request.  The
   final recipient of the request SHOULD exclude any request header
   fields that are likely to contain sensitive data when that recipient
   generates the response body.

   TRACE allows the client to see what is being received at the other
   end of the request chain and use that data for testing or diagnostic
   information.  The value of the Via header field (Section 5.7.1 of
   [RFC7230]) is of particular interest, since it acts as a trace of the
   request chain.  Use of the Max-Forwards header field allows the
   client to limit the length of the request chain, which is useful for
   testing a chain of proxies forwarding messages in an infinite loop.

   A client MUST NOT send a message body in a TRACE request.

   Responses to the TRACE method are not cacheable.

5.  Request Header Fields

   A client sends request header fields to provide more information
   about the request context, make the request conditional based on the
   target resource state, suggest preferred formats for the response,
   supply authentication credentials, or modify the expected request
   processing.  These fields act as request modifiers, similar to the
   parameters on a programming language method invocation.

5.1.  Controls

   Controls are request header fields that direct specific handling of
   the request.

   +-------------------+--------------------------+
   | Header Field Name | Defined in...            |
   +-------------------+--------------------------+
   | Cache-Control     | Section 5.2 of [RFC7234] |
   | Expect            | Section 5.1.1            |
   | Host              | Section 5.4 of [RFC7230] |
   | Max-Forwards      | Section 5.1.2            |
   | Pragma            | Section 5.4 of [RFC7234] |
   | Range             | Section 3.1 of [RFC7233] |
   | TE                | Section 4.3 of [RFC7230] |
   +-------------------+--------------------------+






Fielding & Reschke           Standards Track                   [Page 33]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


5.1.1.  Expect

   The "Expect" header field in a request indicates a certain set of
   behaviors (expectations) that need to be supported by the server in
   order to properly handle this request.  The only such expectation
   defined by this specification is 100-continue.

     Expect  = "100-continue"

   The Expect field-value is case-insensitive.

   A server that receives an Expect field-value other than 100-continue
   MAY respond with a 417 (Expectation Failed) status code to indicate
   that the unexpected expectation cannot be met.

   A 100-continue expectation informs recipients that the client is
   about to send a (presumably large) message body in this request and
   wishes to receive a 100 (Continue) interim response if the
   request-line and header fields are not sufficient to cause an
   immediate success, redirect, or error response.  This allows the
   client to wait for an indication that it is worthwhile to send the
   message body before actually doing so, which can improve efficiency
   when the message body is huge or when the client anticipates that an
   error is likely (e.g., when sending a state-changing method, for the
   first time, without previously verified authentication credentials).

   For example, a request that begins with

     PUT /somewhere/fun HTTP/1.1
     Host: origin.example.com
     Content-Type: video/h264
     Content-Length: 1234567890987
     Expect: 100-continue


   allows the origin server to immediately respond with an error
   message, such as 401 (Unauthorized) or 405 (Method Not Allowed),
   before the client starts filling the pipes with an unnecessary data
   transfer.

   Requirements for clients:

   o  A client MUST NOT generate a 100-continue expectation in a request
      that does not include a message body.

   o  A client that will wait for a 100 (Continue) response before
      sending the request message body MUST send an Expect header field
      containing a 100-continue expectation.



Fielding & Reschke           Standards Track                   [Page 34]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   o  A client that sends a 100-continue expectation is not required to
      wait for any specific length of time; such a client MAY proceed to
      send the message body even if it has not yet received a response.
      Furthermore, since 100 (Continue) responses cannot be sent through
      an HTTP/1.0 intermediary, such a client SHOULD NOT wait for an
      indefinite period before sending the message body.

   o  A client that receives a 417 (Expectation Failed) status code in
      response to a request containing a 100-continue expectation SHOULD
      repeat that request without a 100-continue expectation, since the
      417 response merely indicates that the response chain does not
      support expectations (e.g., it passes through an HTTP/1.0 server).

   Requirements for servers:

   o  A server that receives a 100-continue expectation in an HTTP/1.0
      request MUST ignore that expectation.

   o  A server MAY omit sending a 100 (Continue) response if it has
      already received some or all of the message body for the
      corresponding request, or if the framing indicates that there is
      no message body.

   o  A server that sends a 100 (Continue) response MUST ultimately send
      a final status code, once the message body is received and
      processed, unless the connection is closed prematurely.

   o  A server that responds with a final status code before reading the
      entire message body SHOULD indicate in that response whether it
      intends to close the connection or continue reading and discarding
      the request message (see Section 6.6 of [RFC7230]).

   An origin server MUST, upon receiving an HTTP/1.1 (or later)
   request-line and a complete header section that contains a
   100-continue expectation and indicates a request message body will
   follow, either send an immediate response with a final status code,
   if that status can be determined by examining just the request-line
   and header fields, or send an immediate 100 (Continue) response to
   encourage the client to send the request's message body.  The origin
   server MUST NOT wait for the message body before sending the 100
   (Continue) response.

   A proxy MUST, upon receiving an HTTP/1.1 (or later) request-line and
   a complete header section that contains a 100-continue expectation
   and indicates a request message body will follow, either send an
   immediate response with a final status code, if that status can be
   determined by examining just the request-line and header fields, or
   begin forwarding the request toward the origin server by sending a



Fielding & Reschke           Standards Track                   [Page 35]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   corresponding request-line and header section to the next inbound
   server.  If the proxy believes (from configuration or past
   interaction) that the next inbound server only supports HTTP/1.0, the
   proxy MAY generate an immediate 100 (Continue) response to encourage
   the client to begin sending the message body.

      Note: The Expect header field was added after the original
      publication of HTTP/1.1 [RFC2068] as both the means to request an
      interim 100 (Continue) response and the general mechanism for
      indicating must-understand extensions.  However, the extension
      mechanism has not been used by clients and the must-understand
      requirements have not been implemented by many servers, rendering
      the extension mechanism useless.  This specification has removed
      the extension mechanism in order to simplify the definition and
      processing of 100-continue.

5.1.2.  Max-Forwards

   The "Max-Forwards" header field provides a mechanism with the TRACE
   (Section 4.3.8) and OPTIONS (Section 4.3.7) request methods to limit
   the number of times that the request is forwarded by proxies.  This
   can be useful when the client is attempting to trace a request that
   appears to be failing or looping mid-chain.

     Max-Forwards = 1*DIGIT

   The Max-Forwards value is a decimal integer indicating the remaining
   number of times this request message can be forwarded.

   Each intermediary that receives a TRACE or OPTIONS request containing
   a Max-Forwards header field MUST check and update its value prior to
   forwarding the request.  If the received value is zero (0), the
   intermediary MUST NOT forward the request; instead, the intermediary
   MUST respond as the final recipient.  If the received Max-Forwards
   value is greater than zero, the intermediary MUST generate an updated
   Max-Forwards field in the forwarded message with a field-value that
   is the lesser of a) the received value decremented by one (1) or b)
   the recipient's maximum supported value for Max-Forwards.

   A recipient MAY ignore a Max-Forwards header field received with any
   other request methods.

5.2.  Conditionals

   The HTTP conditional request header fields [RFC7232] allow a client
   to place a precondition on the state of the target resource, so that
   the action corresponding to the method semantics will not be applied
   if the precondition evaluates to false.  Each precondition defined by



Fielding & Reschke           Standards Track                   [Page 36]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   this specification consists of a comparison between a set of
   validators obtained from prior representations of the target resource
   to the current state of validators for the selected representation
   (Section 7.2).  Hence, these preconditions evaluate whether the state
   of the target resource has changed since a given state known by the
   client.  The effect of such an evaluation depends on the method
   semantics and choice of conditional, as defined in Section 5 of
   [RFC7232].

   +---------------------+--------------------------+
   | Header Field Name   | Defined in...            |
   +---------------------+--------------------------+
   | If-Match            | Section 3.1 of [RFC7232] |
   | If-None-Match       | Section 3.2 of [RFC7232] |
   | If-Modified-Since   | Section 3.3 of [RFC7232] |
   | If-Unmodified-Since | Section 3.4 of [RFC7232] |
   | If-Range            | Section 3.2 of [RFC7233] |
   +---------------------+--------------------------+

5.3.  Content Negotiation

   The following request header fields are sent by a user agent to
   engage in proactive negotiation of the response content, as defined
   in Section 3.4.1.  The preferences sent in these fields apply to any
   content in the response, including representations of the target
   resource, representations of error or processing status, and
   potentially even the miscellaneous text strings that might appear
   within the protocol.

   +-------------------+---------------+
   | Header Field Name | Defined in... |
   +-------------------+---------------+
   | Accept            | Section 5.3.2 |
   | Accept-Charset    | Section 5.3.3 |
   | Accept-Encoding   | Section 5.3.4 |
   | Accept-Language   | Section 5.3.5 |
   +-------------------+---------------+

5.3.1.  Quality Values

   Many of the request header fields for proactive negotiation use a
   common parameter, named "q" (case-insensitive), to assign a relative
   "weight" to the preference for that associated kind of content.  This
   weight is referred to as a "quality value" (or "qvalue") because the
   same parameter name is often used within server configurations to
   assign a weight to the relative quality of the various
   representations that can be selected for a resource.




Fielding & Reschke           Standards Track                   [Page 37]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   The weight is normalized to a real number in the range 0 through 1,
   where 0.001 is the least preferred and 1 is the most preferred; a
   value of 0 means "not acceptable".  If no "q" parameter is present,
   the default weight is 1.

     weight = OWS ";" OWS "q=" qvalue
     qvalue = ( "0" [ "." 0*3DIGIT ] )
            / ( "1" [ "." 0*3("0") ] )

   A sender of qvalue MUST NOT generate more than three digits after the
   decimal point.  User configuration of these values ought to be
   limited in the same fashion.

5.3.2.  Accept

   The "Accept" header field can be used by user agents to specify
   response media types that are acceptable.  Accept header fields can
   be used to indicate that the request is specifically limited to a
   small set of desired types, as in the case of a request for an
   in-line image.

     Accept = #( media-range [ accept-params ] )

     media-range    = ( "*/*"
                      / ( type "/" "*" )
                      / ( type "/" subtype )
                      ) *( OWS ";" OWS parameter )
     accept-params  = weight *( accept-ext )
     accept-ext = OWS ";" OWS token [ "=" ( token / quoted-string ) ]

   The asterisk "*" character is used to group media types into ranges,
   with "*/*" indicating all media types and "type/*" indicating all
   subtypes of that type.  The media-range can include media type
   parameters that are applicable to that range.

   Each media-range might be followed by zero or more applicable media
   type parameters (e.g., charset), an optional "q" parameter for
   indicating a relative weight (Section 5.3.1), and then zero or more
   extension parameters.  The "q" parameter is necessary if any
   extensions (accept-ext) are present, since it acts as a separator
   between the two parameter sets.

      Note: Use of the "q" parameter name to separate media type
      parameters from Accept extension parameters is due to historical
      practice.  Although this prevents any media type parameter named
      "q" from being used with a media range, such an event is believed
      to be unlikely given the lack of any "q" parameters in the IANA




Fielding & Reschke           Standards Track                   [Page 38]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


      media type registry and the rare usage of any media type
      parameters in Accept.  Future media types are discouraged from
      registering any parameter named "q".

   The example

     Accept: audio/*; q=0.2, audio/basic

   is interpreted as "I prefer audio/basic, but send me any audio type
   if it is the best available after an 80% markdown in quality".

   A request without any Accept header field implies that the user agent
   will accept any media type in response.  If the header field is
   present in a request and none of the available representations for
   the response have a media type that is listed as acceptable, the
   origin server can either honor the header field by sending a 406 (Not
   Acceptable) response or disregard the header field by treating the
   response as if it is not subject to content negotiation.

   A more elaborate example is

     Accept: text/plain; q=0.5, text/html,
             text/x-dvi; q=0.8, text/x-c

   Verbally, this would be interpreted as "text/html and text/x-c are
   the equally preferred media types, but if they do not exist, then
   send the text/x-dvi representation, and if that does not exist, send
   the text/plain representation".

   Media ranges can be overridden by more specific media ranges or
   specific media types.  If more than one media range applies to a
   given type, the most specific reference has precedence.  For example,

     Accept: text/*, text/plain, text/plain;format=flowed, */*

   have the following precedence:

   1.  text/plain;format=flowed

   2.  text/plain

   3.  text/*

   4.  */*

   The media type quality factor associated with a given type is
   determined by finding the media range with the highest precedence
   that matches the type.  For example,



Fielding & Reschke           Standards Track                   [Page 39]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


     Accept: text/*;q=0.3, text/html;q=0.7, text/html;level=1,
             text/html;level=2;q=0.4, */*;q=0.5

   would cause the following values to be associated:

   +-------------------+---------------+
   | Media Type        | Quality Value |
   +-------------------+---------------+
   | text/html;level=1 | 1             |
   | text/html         | 0.7           |
   | text/plain        | 0.3           |
   | image/jpeg        | 0.5           |
   | text/html;level=2 | 0.4           |
   | text/html;level=3 | 0.7           |
   +-------------------+---------------+

   Note: A user agent might be provided with a default set of quality
   values for certain media ranges.  However, unless the user agent is a
   closed system that cannot interact with other rendering agents, this
   default set ought to be configurable by the user.

5.3.3.  Accept-Charset

   The "Accept-Charset" header field can be sent by a user agent to
   indicate what charsets are acceptable in textual response content.
   This field allows user agents capable of understanding more
   comprehensive or special-purpose charsets to signal that capability
   to an origin server that is capable of representing information in
   those charsets.

     Accept-Charset = 1#( ( charset / "*" ) [ weight ] )

   Charset names are defined in Section 3.1.1.2.  A user agent MAY
   associate a quality value with each charset to indicate the user's
   relative preference for that charset, as defined in Section 5.3.1.
   An example is

     Accept-Charset: iso-8859-5, unicode-1-1;q=0.8

   The special value "*", if present in the Accept-Charset field,
   matches every charset that is not mentioned elsewhere in the
   Accept-Charset field.  If no "*" is present in an Accept-Charset
   field, then any charsets not explicitly mentioned in the field are
   considered "not acceptable" to the client.

   A request without any Accept-Charset header field implies that the
   user agent will accept any charset in response.  Most general-purpose
   user agents do not send Accept-Charset, unless specifically



Fielding & Reschke           Standards Track                   [Page 40]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   configured to do so, because a detailed list of supported charsets
   makes it easier for a server to identify an individual by virtue of
   the user agent's request characteristics (Section 9.7).

   If an Accept-Charset header field is present in a request and none of
   the available representations for the response has a charset that is
   listed as acceptable, the origin server can either honor the header
   field, by sending a 406 (Not Acceptable) response, or disregard the
   header field by treating the resource as if it is not subject to
   content negotiation.

5.3.4.  Accept-Encoding

   The "Accept-Encoding" header field can be used by user agents to
   indicate what response content-codings (Section 3.1.2.1) are
   acceptable in the response.  An "identity" token is used as a synonym
   for "no encoding" in order to communicate when no encoding is
   preferred.

     Accept-Encoding  = #( codings [ weight ] )
     codings          = content-coding / "identity" / "*"

   Each codings value MAY be given an associated quality value
   representing the preference for that encoding, as defined in
   Section 5.3.1.  The asterisk "*" symbol in an Accept-Encoding field
   matches any available content-coding not explicitly listed in the
   header field.

   For example,

     Accept-Encoding: compress, gzip
     Accept-Encoding:
     Accept-Encoding: *
     Accept-Encoding: compress;q=0.5, gzip;q=1.0
     Accept-Encoding: gzip;q=1.0, identity; q=0.5, *;q=0

   A request without an Accept-Encoding header field implies that the
   user agent has no preferences regarding content-codings.  Although
   this allows the server to use any content-coding in a response, it
   does not imply that the user agent will be able to correctly process
   all encodings.

   A server tests whether a content-coding for a given representation is
   acceptable using these rules:

   1.  If no Accept-Encoding field is in the request, any content-coding
       is considered acceptable by the user agent.




Fielding & Reschke           Standards Track                   [Page 41]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   2.  If the representation has no content-coding, then it is
       acceptable by default unless specifically excluded by the
       Accept-Encoding field stating either "identity;q=0" or "*;q=0"
       without a more specific entry for "identity".

   3.  If the representation's content-coding is one of the
       content-codings listed in the Accept-Encoding field, then it is
       acceptable unless it is accompanied by a qvalue of 0.  (As
       defined in Section 5.3.1, a qvalue of 0 means "not acceptable".)

   4.  If multiple content-codings are acceptable, then the acceptable
       content-coding with the highest non-zero qvalue is preferred.

   An Accept-Encoding header field with a combined field-value that is
   empty implies that the user agent does not want any content-coding in
   response.  If an Accept-Encoding header field is present in a request
   and none of the available representations for the response have a
   content-coding that is listed as acceptable, the origin server SHOULD
   send a response without any content-coding.

      Note: Most HTTP/1.0 applications do not recognize or obey qvalues
      associated with content-codings.  This means that qvalues might
      not work and are not permitted with x-gzip or x-compress.

5.3.5.  Accept-Language

   The "Accept-Language" header field can be used by user agents to
   indicate the set of natural languages that are preferred in the
   response.  Language tags are defined in Section 3.1.3.1.

     Accept-Language = 1#( language-range [ weight ] )
     language-range  =
               <language-range, see [RFC4647], Section 2.1>

   Each language-range can be given an associated quality value
   representing an estimate of the user's preference for the languages
   specified by that range, as defined in Section 5.3.1.  For example,

     Accept-Language: da, en-gb;q=0.8, en;q=0.7

   would mean: "I prefer Danish, but will accept British English and
   other types of English".

   A request without any Accept-Language header field implies that the
   user agent will accept any language in response.  If the header field
   is present in a request and none of the available representations for
   the response have a matching language tag, the origin server can
   either disregard the header field by treating the response as if it



Fielding & Reschke           Standards Track                   [Page 42]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   is not subject to content negotiation or honor the header field by
   sending a 406 (Not Acceptable) response.  However, the latter is not
   encouraged, as doing so can prevent users from accessing content that
   they might be able to use (with translation software, for example).

   Note that some recipients treat the order in which language tags are
   listed as an indication of descending priority, particularly for tags
   that are assigned equal quality values (no value is the same as q=1).
   However, this behavior cannot be relied upon.  For consistency and to
   maximize interoperability, many user agents assign each language tag
   a unique quality value while also listing them in order of decreasing
   quality.  Additional discussion of language priority lists can be
   found in Section 2.3 of [RFC4647].

   For matching, Section 3 of [RFC4647] defines several matching
   schemes.  Implementations can offer the most appropriate matching
   scheme for their requirements.  The "Basic Filtering" scheme
   ([RFC4647], Section 3.3.1) is identical to the matching scheme that
   was previously defined for HTTP in Section 14.4 of [RFC2616].

   It might be contrary to the privacy expectations of the user to send
   an Accept-Language header field with the complete linguistic
   preferences of the user in every request (Section 9.7).

   Since intelligibility is highly dependent on the individual user,
   user agents need to allow user control over the linguistic preference
   (either through configuration of the user agent itself or by
   defaulting to a user controllable system setting).  A user agent that
   does not provide such control to the user MUST NOT send an
   Accept-Language header field.

      Note: User agents ought to provide guidance to users when setting
      a preference, since users are rarely familiar with the details of
      language matching as described above.  For example, users might
      assume that on selecting "en-gb", they will be served any kind of
      English document if British English is not available.  A user
      agent might suggest, in such a case, to add "en" to the list for
      better matching behavior.













Fielding & Reschke           Standards Track                   [Page 43]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


5.4.  Authentication Credentials

   Two header fields are used for carrying authentication credentials,
   as defined in [RFC7235].  Note that various custom mechanisms for
   user authentication use the Cookie header field for this purpose, as
   defined in [RFC6265].

   +---------------------+--------------------------+
   | Header Field Name   | Defined in...            |
   +---------------------+--------------------------+
   | Authorization       | Section 4.2 of [RFC7235] |
   | Proxy-Authorization | Section 4.4 of [RFC7235] |
   +---------------------+--------------------------+

5.5.  Request Context

   The following request header fields provide additional information
   about the request context, including information about the user, user
   agent, and resource behind the request.

   +-------------------+---------------+
   | Header Field Name | Defined in... |
   +-------------------+---------------+
   | From              | Section 5.5.1 |
   | Referer           | Section 5.5.2 |
   | User-Agent        | Section 5.5.3 |
   +-------------------+---------------+

5.5.1.  From

   The "From" header field contains an Internet email address for a
   human user who controls the requesting user agent.  The address ought
   to be machine-usable, as defined by "mailbox" in Section 3.4 of
   [RFC5322]:

     From    = mailbox

     mailbox = <mailbox, see [RFC5322], Section 3.4>

   An example is:

     From: webmaster@example.org

   The From header field is rarely sent by non-robotic user agents.  A
   user agent SHOULD NOT send a From header field without explicit
   configuration by the user, since that might conflict with the user's
   privacy interests or their site's security policy.




Fielding & Reschke           Standards Track                   [Page 44]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   A robotic user agent SHOULD send a valid From header field so that
   the person responsible for running the robot can be contacted if
   problems occur on servers, such as if the robot is sending excessive,
   unwanted, or invalid requests.

   A server SHOULD NOT use the From header field for access control or
   authentication, since most recipients will assume that the field
   value is public information.

5.5.2.  Referer

   The "Referer" [sic] header field allows the user agent to specify a
   URI reference for the resource from which the target URI was obtained
   (i.e., the "referrer", though the field name is misspelled).  A user
   agent MUST NOT include the fragment and userinfo components of the
   URI reference [RFC3986], if any, when generating the Referer field
   value.

     Referer = absolute-URI / partial-URI

   The Referer header field allows servers to generate back-links to
   other resources for simple analytics, logging, optimized caching,
   etc.  It also allows obsolete or mistyped links to be found for
   maintenance.  Some servers use the Referer header field as a means of
   denying links from other sites (so-called "deep linking") or
   restricting cross-site request forgery (CSRF), but not all requests
   contain it.

   Example:

     Referer: http://www.example.org/hypertext/Overview.html

   If the target URI was obtained from a source that does not have its
   own URI (e.g., input from the user keyboard, or an entry within the
   user's bookmarks/favorites), the user agent MUST either exclude the
   Referer field or send it with a value of "about:blank".

   The Referer field has the potential to reveal information about the
   request context or browsing history of the user, which is a privacy
   concern if the referring resource's identifier reveals personal
   information (such as an account name) or a resource that is supposed
   to be confidential (such as behind a firewall or internal to a
   secured service).  Most general-purpose user agents do not send the
   Referer header field when the referring resource is a local "file" or
   "data" URI.  A user agent MUST NOT send a Referer header field in an
   unsecured HTTP request if the referring page was received with a
   secure protocol.  See Section 9.4 for additional security
   considerations.



Fielding & Reschke           Standards Track                   [Page 45]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Some intermediaries have been known to indiscriminately remove
   Referer header fields from outgoing requests.  This has the
   unfortunate side effect of interfering with protection against CSRF
   attacks, which can be far more harmful to their users.
   Intermediaries and user agent extensions that wish to limit
   information disclosure in Referer ought to restrict their changes to
   specific edits, such as replacing internal domain names with
   pseudonyms or truncating the query and/or path components.  An
   intermediary SHOULD NOT modify or delete the Referer header field
   when the field value shares the same scheme and host as the request
   target.

5.5.3.  User-Agent

   The "User-Agent" header field contains information about the user
   agent originating the request, which is often used by servers to help
   identify the scope of reported interoperability problems, to work
   around or tailor responses to avoid particular user agent
   limitations, and for analytics regarding browser or operating system
   use.  A user agent SHOULD send a User-Agent field in each request
   unless specifically configured not to do so.

     User-Agent = product *( RWS ( product / comment ) )

   The User-Agent field-value consists of one or more product
   identifiers, each followed by zero or more comments (Section 3.2 of
   [RFC7230]), which together identify the user agent software and its
   significant subproducts.  By convention, the product identifiers are
   listed in decreasing order of their significance for identifying the
   user agent software.  Each product identifier consists of a name and
   optional version.

     product         = token ["/" product-version]
     product-version = token

   A sender SHOULD limit generated product identifiers to what is
   necessary to identify the product; a sender MUST NOT generate
   advertising or other nonessential information within the product
   identifier.  A sender SHOULD NOT generate information in
   product-version that is not a version identifier (i.e., successive
   versions of the same product name ought to differ only in the
   product-version portion of the product identifier).

   Example:

     User-Agent: CERN-LineMode/2.15 libwww/2.17b3





Fielding & Reschke           Standards Track                   [Page 46]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   A user agent SHOULD NOT generate a User-Agent field containing
   needlessly fine-grained detail and SHOULD limit the addition of
   subproducts by third parties.  Overly long and detailed User-Agent
   field values increase request latency and the risk of a user being
   identified against their wishes ("fingerprinting").

   Likewise, implementations are encouraged not to use the product
   tokens of other implementations in order to declare compatibility
   with them, as this circumvents the purpose of the field.  If a user
   agent masquerades as a different user agent, recipients can assume
   that the user intentionally desires to see responses tailored for
   that identified user agent, even if they might not work as well for
   the actual user agent being used.

6.  Response Status Codes

   The status-code element is a three-digit integer code giving the
   result of the attempt to understand and satisfy the request.

   HTTP status codes are extensible.  HTTP clients are not required to
   understand the meaning of all registered status codes, though such
   understanding is obviously desirable.  However, a client MUST
   understand the class of any status code, as indicated by the first
   digit, and treat an unrecognized status code as being equivalent to
   the x00 status code of that class, with the exception that a
   recipient MUST NOT cache a response with an unrecognized status code.

   For example, if an unrecognized status code of 471 is received by a
   client, the client can assume that there was something wrong with its
   request and treat the response as if it had received a 400 (Bad
   Request) status code.  The response message will usually contain a
   representation that explains the status.

   The first digit of the status-code defines the class of response.
   The last two digits do not have any categorization role.  There are
   five values for the first digit:

   o  1xx (Informational): The request was received, continuing process

   o  2xx (Successful): The request was successfully received,
      understood, and accepted

   o  3xx (Redirection): Further action needs to be taken in order to
      complete the request

   o  4xx (Client Error): The request contains bad syntax or cannot be
      fulfilled




Fielding & Reschke           Standards Track                   [Page 47]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   o  5xx (Server Error): The server failed to fulfill an apparently
      valid request

6.1.  Overview of Status Codes

   The status codes listed below are defined in this specification,
   Section 4 of [RFC7232], Section 4 of [RFC7233], and Section 3 of
   [RFC7235].  The reason phrases listed here are only recommendations
   -- they can be replaced by local equivalents without affecting the
   protocol.

   Responses with status codes that are defined as cacheable by default
   (e.g., 200, 203, 204, 206, 300, 301, 404, 405, 410, 414, and 501 in
   this specification) can be reused by a cache with heuristic
   expiration unless otherwise indicated by the method definition or
   explicit cache controls [RFC7234]; all other status codes are not
   cacheable by default.


































Fielding & Reschke           Standards Track                   [Page 48]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   +------+-------------------------------+--------------------------+
   | Code | Reason-Phrase                 | Defined in...            |
   +------+-------------------------------+--------------------------+
   | 100  | Continue                      | Section 6.2.1            |
   | 101  | Switching Protocols           | Section 6.2.2            |
   | 200  | OK                            | Section 6.3.1            |
   | 201  | Created                       | Section 6.3.2            |
   | 202  | Accepted                      | Section 6.3.3            |
   | 203  | Non-Authoritative Information | Section 6.3.4            |
   | 204  | No Content                    | Section 6.3.5            |
   | 205  | Reset Content                 | Section 6.3.6            |
   | 206  | Partial Content               | Section 4.1 of [RFC7233] |
   | 300  | Multiple Choices              | Section 6.4.1            |
   | 301  | Moved Permanently             | Section 6.4.2            |
   | 302  | Found                         | Section 6.4.3            |
   | 303  | See Other                     | Section 6.4.4            |
   | 304  | Not Modified                  | Section 4.1 of [RFC7232] |
   | 305  | Use Proxy                     | Section 6.4.5            |
   | 307  | Temporary Redirect            | Section 6.4.7            |
   | 400  | Bad Request                   | Section 6.5.1            |
   | 401  | Unauthorized                  | Section 3.1 of [RFC7235] |
   | 402  | Payment Required              | Section 6.5.2            |
   | 403  | Forbidden                     | Section 6.5.3            |
   | 404  | Not Found                     | Section 6.5.4            |
   | 405  | Method Not Allowed            | Section 6.5.5            |
   | 406  | Not Acceptable                | Section 6.5.6            |
   | 407  | Proxy Authentication Required | Section 3.2 of [RFC7235] |
   | 408  | Request Timeout               | Section 6.5.7            |
   | 409  | Conflict                      | Section 6.5.8            |
   | 410  | Gone                          | Section 6.5.9            |
   | 411  | Length Required               | Section 6.5.10           |
   | 412  | Precondition Failed           | Section 4.2 of [RFC7232] |
   | 413  | Payload Too Large             | Section 6.5.11           |
   | 414  | URI Too Long                  | Section 6.5.12           |
   | 415  | Unsupported Media Type        | Section 6.5.13           |
   | 416  | Range Not Satisfiable         | Section 4.4 of [RFC7233] |
   | 417  | Expectation Failed            | Section 6.5.14           |
   | 426  | Upgrade Required              | Section 6.5.15           |
   | 500  | Internal Server Error         | Section 6.6.1            |
   | 501  | Not Implemented               | Section 6.6.2            |
   | 502  | Bad Gateway                   | Section 6.6.3            |
   | 503  | Service Unavailable           | Section 6.6.4            |
   | 504  | Gateway Timeout               | Section 6.6.5            |
   | 505  | HTTP Version Not Supported    | Section 6.6.6            |
   +------+-------------------------------+--------------------------+






Fielding & Reschke           Standards Track                   [Page 49]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Note that this list is not exhaustive -- it does not include
   extension status codes defined in other specifications.  The complete
   list of status codes is maintained by IANA.  See Section 8.2 for
   details.

6.2.  Informational 1xx

   The 1xx (Informational) class of status code indicates an interim
   response for communicating connection status or request progress
   prior to completing the requested action and sending a final
   response. 1xx responses are terminated by the first empty line after
   the status-line (the empty line signaling the end of the header
   section).  Since HTTP/1.0 did not define any 1xx status codes, a
   server MUST NOT send a 1xx response to an HTTP/1.0 client.

   A client MUST be able to parse one or more 1xx responses received
   prior to a final response, even if the client does not expect one.  A
   user agent MAY ignore unexpected 1xx responses.

   A proxy MUST forward 1xx responses unless the proxy itself requested
   the generation of the 1xx response.  For example, if a proxy adds an
   "Expect: 100-continue" field when it forwards a request, then it need
   not forward the corresponding 100 (Continue) response(s).

6.2.1.  100 Continue

   The 100 (Continue) status code indicates that the initial part of a
   request has been received and has not yet been rejected by the
   server.  The server intends to send a final response after the
   request has been fully received and acted upon.

   When the request contains an Expect header field that includes a
   100-continue expectation, the 100 response indicates that the server
   wishes to receive the request payload body, as described in
   Section 5.1.1.  The client ought to continue sending the request and
   discard the 100 response.

   If the request did not contain an Expect header field containing the
   100-continue expectation, the client can simply discard this interim
   response.

6.2.2.  101 Switching Protocols

   The 101 (Switching Protocols) status code indicates that the server
   understands and is willing to comply with the client's request, via
   the Upgrade header field (Section 6.7 of [RFC7230]), for a change in
   the application protocol being used on this connection.  The server




Fielding & Reschke           Standards Track                   [Page 50]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   MUST generate an Upgrade header field in the response that indicates
   which protocol(s) will be switched to immediately after the empty
   line that terminates the 101 response.

   It is assumed that the server will only agree to switch protocols
   when it is advantageous to do so.  For example, switching to a newer
   version of HTTP might be advantageous over older versions, and
   switching to a real-time, synchronous protocol might be advantageous
   when delivering resources that use such features.

6.3.  Successful 2xx

   The 2xx (Successful) class of status code indicates that the client's
   request was successfully received, understood, and accepted.

6.3.1.  200 OK

   The 200 (OK) status code indicates that the request has succeeded.
   The payload sent in a 200 response depends on the request method.
   For the methods defined by this specification, the intended meaning
   of the payload can be summarized as:

   GET  a representation of the target resource;

   HEAD  the same representation as GET, but without the representation
      data;

   POST  a representation of the status of, or results obtained from,
      the action;

   PUT, DELETE  a representation of the status of the action;

   OPTIONS  a representation of the communications options;

   TRACE  a representation of the request message as received by the end
      server.

   Aside from responses to CONNECT, a 200 response always has a payload,
   though an origin server MAY generate a payload body of zero length.
   If no payload is desired, an origin server ought to send 204 (No
   Content) instead.  For CONNECT, no payload is allowed because the
   successful result is a tunnel, which begins immediately after the 200
   response header section.

   A 200 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).




Fielding & Reschke           Standards Track                   [Page 51]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


6.3.2.  201 Created

   The 201 (Created) status code indicates that the request has been
   fulfilled and has resulted in one or more new resources being
   created.  The primary resource created by the request is identified
   by either a Location header field in the response or, if no Location
   field is received, by the effective request URI.

   The 201 response payload typically describes and links to the
   resource(s) created.  See Section 7.2 for a discussion of the meaning
   and purpose of validator header fields, such as ETag and
   Last-Modified, in a 201 response.

6.3.3.  202 Accepted

   The 202 (Accepted) status code indicates that the request has been
   accepted for processing, but the processing has not been completed.
   The request might or might not eventually be acted upon, as it might
   be disallowed when processing actually takes place.  There is no
   facility in HTTP for re-sending a status code from an asynchronous
   operation.

   The 202 response is intentionally noncommittal.  Its purpose is to
   allow a server to accept a request for some other process (perhaps a
   batch-oriented process that is only run once per day) without
   requiring that the user agent's connection to the server persist
   until the process is completed.  The representation sent with this
   response ought to describe the request's current status and point to
   (or embed) a status monitor that can provide the user with an
   estimate of when the request will be fulfilled.

6.3.4.  203 Non-Authoritative Information

   The 203 (Non-Authoritative Information) status code indicates that
   the request was successful but the enclosed payload has been modified
   from that of the origin server's 200 (OK) response by a transforming
   proxy (Section 5.7.2 of [RFC7230]).  This status code allows the
   proxy to notify recipients when a transformation has been applied,
   since that knowledge might impact later decisions regarding the
   content.  For example, future cache validation requests for the
   content might only be applicable along the same request path (through
   the same proxies).

   The 203 response is similar to the Warning code of 214 Transformation
   Applied (Section 5.5 of [RFC7234]), which has the advantage of being
   applicable to responses with any status code.





Fielding & Reschke           Standards Track                   [Page 52]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   A 203 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).

6.3.5.  204 No Content

   The 204 (No Content) status code indicates that the server has
   successfully fulfilled the request and that there is no additional
   content to send in the response payload body.  Metadata in the
   response header fields refer to the target resource and its selected
   representation after the requested action was applied.

   For example, if a 204 status code is received in response to a PUT
   request and the response contains an ETag header field, then the PUT
   was successful and the ETag field-value contains the entity-tag for
   the new representation of that target resource.

   The 204 response allows a server to indicate that the action has been
   successfully applied to the target resource, while implying that the
   user agent does not need to traverse away from its current "document
   view" (if any).  The server assumes that the user agent will provide
   some indication of the success to its user, in accord with its own
   interface, and apply any new or updated metadata in the response to
   its active representation.

   For example, a 204 status code is commonly used with document editing
   interfaces corresponding to a "save" action, such that the document
   being saved remains available to the user for editing.  It is also
   frequently used with interfaces that expect automated data transfers
   to be prevalent, such as within distributed version control systems.

   A 204 response is terminated by the first empty line after the header
   fields because it cannot contain a message body.

   A 204 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).

6.3.6.  205 Reset Content

   The 205 (Reset Content) status code indicates that the server has
   fulfilled the request and desires that the user agent reset the
   "document view", which caused the request to be sent, to its original
   state as received from the origin server.

   This response is intended to support a common data entry use case
   where the user receives content that supports data entry (a form,
   notepad, canvas, etc.), enters or manipulates data in that space,



Fielding & Reschke           Standards Track                   [Page 53]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   causes the entered data to be submitted in a request, and then the
   data entry mechanism is reset for the next entry so that the user can
   easily initiate another input action.

   Since the 205 status code implies that no additional content will be
   provided, a server MUST NOT generate a payload in a 205 response.  In
   other words, a server MUST do one of the following for a 205
   response: a) indicate a zero-length body for the response by
   including a Content-Length header field with a value of 0; b)
   indicate a zero-length payload for the response by including a
   Transfer-Encoding header field with a value of chunked and a message
   body consisting of a single chunk of zero-length; or, c) close the
   connection immediately after sending the blank line terminating the
   header section.

6.4.  Redirection 3xx

   The 3xx (Redirection) class of status code indicates that further
   action needs to be taken by the user agent in order to fulfill the
   request.  If a Location header field (Section 7.1.2) is provided, the
   user agent MAY automatically redirect its request to the URI
   referenced by the Location field value, even if the specific status
   code is not understood.  Automatic redirection needs to done with
   care for methods not known to be safe, as defined in Section 4.2.1,
   since the user might not wish to redirect an unsafe request.

   There are several types of redirects:

   1.  Redirects that indicate the resource might be available at a
       different URI, as provided by the Location field, as in the
       status codes 301 (Moved Permanently), 302 (Found), and 307
       (Temporary Redirect).

   2.  Redirection that offers a choice of matching resources, each
       capable of representing the original request target, as in the
       300 (Multiple Choices) status code.

   3.  Redirection to a different resource, identified by the Location
       field, that can represent an indirect response to the request, as
       in the 303 (See Other) status code.

   4.  Redirection to a previously cached result, as in the 304 (Not
       Modified) status code.

      Note: In HTTP/1.0, the status codes 301 (Moved Permanently) and
      302 (Found) were defined for the first type of redirect
      ([RFC1945], Section 9.3).  Early user agents split on whether the
      method applied to the redirect target would be the same as the



Fielding & Reschke           Standards Track                   [Page 54]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


      original request or would be rewritten as GET.  Although HTTP
      originally defined the former semantics for 301 and 302 (to match
      its original implementation at CERN), and defined 303 (See Other)
      to match the latter semantics, prevailing practice gradually
      converged on the latter semantics for 301 and 302 as well.  The
      first revision of HTTP/1.1 added 307 (Temporary Redirect) to
      indicate the former semantics without being impacted by divergent
      practice.  Over 10 years later, most user agents still do method
      rewriting for 301 and 302; therefore, this specification makes
      that behavior conformant when the original request is POST.

   A client SHOULD detect and intervene in cyclical redirections (i.e.,
   "infinite" redirection loops).

      Note: An earlier version of this specification recommended a
      maximum of five redirections ([RFC2068], Section 10.3).  Content
      developers need to be aware that some clients might implement such
      a fixed limitation.

6.4.1.  300 Multiple Choices

   The 300 (Multiple Choices) status code indicates that the target
   resource has more than one representation, each with its own more
   specific identifier, and information about the alternatives is being
   provided so that the user (or user agent) can select a preferred
   representation by redirecting its request to one or more of those
   identifiers.  In other words, the server desires that the user agent
   engage in reactive negotiation to select the most appropriate
   representation(s) for its needs (Section 3.4).

   If the server has a preferred choice, the server SHOULD generate a
   Location header field containing a preferred choice's URI reference.
   The user agent MAY use the Location field value for automatic
   redirection.

   For request methods other than HEAD, the server SHOULD generate a
   payload in the 300 response containing a list of representation
   metadata and URI reference(s) from which the user or user agent can
   choose the one most preferred.  The user agent MAY make a selection
   from that list automatically if it understands the provided media
   type.  A specific format for automatic selection is not defined by
   this specification because HTTP tries to remain orthogonal to the
   definition of its payloads.  In practice, the representation is
   provided in some easily parsed format believed to be acceptable to
   the user agent, as determined by shared design or content
   negotiation, or in some commonly accepted hypertext format.





Fielding & Reschke           Standards Track                   [Page 55]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   A 300 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).

      Note: The original proposal for the 300 status code defined the
      URI header field as providing a list of alternative
      representations, such that it would be usable for 200, 300, and
      406 responses and be transferred in responses to the HEAD method.
      However, lack of deployment and disagreement over syntax led to
      both URI and Alternates (a subsequent proposal) being dropped from
      this specification.  It is possible to communicate the list using
      a set of Link header fields [RFC5988], each with a relationship of
      "alternate", though deployment is a chicken-and-egg problem.

6.4.2.  301 Moved Permanently

   The 301 (Moved Permanently) status code indicates that the target
   resource has been assigned a new permanent URI and any future
   references to this resource ought to use one of the enclosed URIs.
   Clients with link-editing capabilities ought to automatically re-link
   references to the effective request URI to one or more of the new
   references sent by the server, where possible.

   The server SHOULD generate a Location header field in the response
   containing a preferred URI reference for the new permanent URI.  The
   user agent MAY use the Location field value for automatic
   redirection.  The server's response payload usually contains a short
   hypertext note with a hyperlink to the new URI(s).

      Note: For historical reasons, a user agent MAY change the request
      method from POST to GET for the subsequent request.  If this
      behavior is undesired, the 307 (Temporary Redirect) status code
      can be used instead.

   A 301 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).

6.4.3.  302 Found

   The 302 (Found) status code indicates that the target resource
   resides temporarily under a different URI.  Since the redirection
   might be altered on occasion, the client ought to continue to use the
   effective request URI for future requests.







Fielding & Reschke           Standards Track                   [Page 56]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   The server SHOULD generate a Location header field in the response
   containing a URI reference for the different URI.  The user agent MAY
   use the Location field value for automatic redirection.  The server's
   response payload usually contains a short hypertext note with a
   hyperlink to the different URI(s).

      Note: For historical reasons, a user agent MAY change the request
      method from POST to GET for the subsequent request.  If this
      behavior is undesired, the 307 (Temporary Redirect) status code
      can be used instead.

6.4.4.  303 See Other

   The 303 (See Other) status code indicates that the server is
   redirecting the user agent to a different resource, as indicated by a
   URI in the Location header field, which is intended to provide an
   indirect response to the original request.  A user agent can perform
   a retrieval request targeting that URI (a GET or HEAD request if
   using HTTP), which might also be redirected, and present the eventual
   result as an answer to the original request.  Note that the new URI
   in the Location header field is not considered equivalent to the
   effective request URI.

   This status code is applicable to any HTTP method.  It is primarily
   used to allow the output of a POST action to redirect the user agent
   to a selected resource, since doing so provides the information
   corresponding to the POST response in a form that can be separately
   identified, bookmarked, and cached, independent of the original
   request.

   A 303 response to a GET request indicates that the origin server does
   not have a representation of the target resource that can be
   transferred by the server over HTTP.  However, the Location field
   value refers to a resource that is descriptive of the target
   resource, such that making a retrieval request on that other resource
   might result in a representation that is useful to recipients without
   implying that it represents the original target resource.  Note that
   answers to the questions of what can be represented, what
   representations are adequate, and what might be a useful description
   are outside the scope of HTTP.

   Except for responses to a HEAD request, the representation of a 303
   response ought to contain a short hypertext note with a hyperlink to
   the same URI reference provided in the Location header field.







Fielding & Reschke           Standards Track                   [Page 57]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


6.4.5.  305 Use Proxy

   The 305 (Use Proxy) status code was defined in a previous version of
   this specification and is now deprecated (Appendix B).

6.4.6.  306 (Unused)

   The 306 status code was defined in a previous version of this
   specification, is no longer used, and the code is reserved.

6.4.7.  307 Temporary Redirect

   The 307 (Temporary Redirect) status code indicates that the target
   resource resides temporarily under a different URI and the user agent
   MUST NOT change the request method if it performs an automatic
   redirection to that URI.  Since the redirection can change over time,
   the client ought to continue using the original effective request URI
   for future requests.

   The server SHOULD generate a Location header field in the response
   containing a URI reference for the different URI.  The user agent MAY
   use the Location field value for automatic redirection.  The server's
   response payload usually contains a short hypertext note with a
   hyperlink to the different URI(s).

      Note: This status code is similar to 302 (Found), except that it
      does not allow changing the request method from POST to GET.  This
      specification defines no equivalent counterpart for 301 (Moved
      Permanently) ([RFC7238], however, defines the status code 308
      (Permanent Redirect) for this purpose).

6.5.  Client Error 4xx

   The 4xx (Client Error) class of status code indicates that the client
   seems to have erred.  Except when responding to a HEAD request, the
   server SHOULD send a representation containing an explanation of the
   error situation, and whether it is a temporary or permanent
   condition.  These status codes are applicable to any request method.
   User agents SHOULD display any included representation to the user.

6.5.1.  400 Bad Request

   The 400 (Bad Request) status code indicates that the server cannot or
   will not process the request due to something that is perceived to be
   a client error (e.g., malformed request syntax, invalid request
   message framing, or deceptive request routing).





Fielding & Reschke           Standards Track                   [Page 58]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


6.5.2.  402 Payment Required

   The 402 (Payment Required) status code is reserved for future use.

6.5.3.  403 Forbidden

   The 403 (Forbidden) status code indicates that the server understood
   the request but refuses to authorize it.  A server that wishes to
   make public why the request has been forbidden can describe that
   reason in the response payload (if any).

   If authentication credentials were provided in the request, the
   server considers them insufficient to grant access.  The client
   SHOULD NOT automatically repeat the request with the same
   credentials.  The client MAY repeat the request with new or different
   credentials.  However, a request might be forbidden for reasons
   unrelated to the credentials.

   An origin server that wishes to "hide" the current existence of a
   forbidden target resource MAY instead respond with a status code of
   404 (Not Found).

6.5.4.  404 Not Found

   The 404 (Not Found) status code indicates that the origin server did
   not find a current representation for the target resource or is not
   willing to disclose that one exists.  A 404 status code does not
   indicate whether this lack of representation is temporary or
   permanent; the 410 (Gone) status code is preferred over 404 if the
   origin server knows, presumably through some configurable means, that
   the condition is likely to be permanent.

   A 404 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).

6.5.5.  405 Method Not Allowed

   The 405 (Method Not Allowed) status code indicates that the method
   received in the request-line is known by the origin server but not
   supported by the target resource.  The origin server MUST generate an
   Allow header field in a 405 response containing a list of the target
   resource's currently supported methods.

   A 405 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).




Fielding & Reschke           Standards Track                   [Page 59]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


6.5.6.  406 Not Acceptable

   The 406 (Not Acceptable) status code indicates that the target
   resource does not have a current representation that would be
   acceptable to the user agent, according to the proactive negotiation
   header fields received in the request (Section 5.3), and the server
   is unwilling to supply a default representation.

   The server SHOULD generate a payload containing a list of available
   representation characteristics and corresponding resource identifiers
   from which the user or user agent can choose the one most
   appropriate.  A user agent MAY automatically select the most
   appropriate choice from that list.  However, this specification does
   not define any standard for such automatic selection, as described in
   Section 6.4.1.

6.5.7.  408 Request Timeout

   The 408 (Request Timeout) status code indicates that the server did
   not receive a complete request message within the time that it was
   prepared to wait.  A server SHOULD send the "close" connection option
   (Section 6.1 of [RFC7230]) in the response, since 408 implies that
   the server has decided to close the connection rather than continue
   waiting.  If the client has an outstanding request in transit, the
   client MAY repeat that request on a new connection.

6.5.8.  409 Conflict

   The 409 (Conflict) status code indicates that the request could not
   be completed due to a conflict with the current state of the target
   resource.  This code is used in situations where the user might be
   able to resolve the conflict and resubmit the request.  The server
   SHOULD generate a payload that includes enough information for a user
   to recognize the source of the conflict.

   Conflicts are most likely to occur in response to a PUT request.  For
   example, if versioning were being used and the representation being
   PUT included changes to a resource that conflict with those made by
   an earlier (third-party) request, the origin server might use a 409
   response to indicate that it can't complete the request.  In this
   case, the response representation would likely contain information
   useful for merging the differences based on the revision history.

6.5.9.  410 Gone

   The 410 (Gone) status code indicates that access to the target
   resource is no longer available at the origin server and that this
   condition is likely to be permanent.  If the origin server does not



Fielding & Reschke           Standards Track                   [Page 60]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   know, or has no facility to determine, whether or not the condition
   is permanent, the status code 404 (Not Found) ought to be used
   instead.

   The 410 response is primarily intended to assist the task of web
   maintenance by notifying the recipient that the resource is
   intentionally unavailable and that the server owners desire that
   remote links to that resource be removed.  Such an event is common
   for limited-time, promotional services and for resources belonging to
   individuals no longer associated with the origin server's site.  It
   is not necessary to mark all permanently unavailable resources as
   "gone" or to keep the mark for any length of time -- that is left to
   the discretion of the server owner.

   A 410 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).

6.5.10.  411 Length Required

   The 411 (Length Required) status code indicates that the server
   refuses to accept the request without a defined Content-Length
   (Section 3.3.2 of [RFC7230]).  The client MAY repeat the request if
   it adds a valid Content-Length header field containing the length of
   the message body in the request message.

6.5.11.  413 Payload Too Large

   The 413 (Payload Too Large) status code indicates that the server is
   refusing to process a request because the request payload is larger
   than the server is willing or able to process.  The server MAY close
   the connection to prevent the client from continuing the request.

   If the condition is temporary, the server SHOULD generate a
   Retry-After header field to indicate that it is temporary and after
   what time the client MAY try again.

6.5.12.  414 URI Too Long

   The 414 (URI Too Long) status code indicates that the server is
   refusing to service the request because the request-target (Section
   5.3 of [RFC7230]) is longer than the server is willing to interpret.
   This rare condition is only likely to occur when a client has
   improperly converted a POST request to a GET request with long query
   information, when the client has descended into a "black hole" of
   redirection (e.g., a redirected URI prefix that points to a suffix of
   itself) or when the server is under attack by a client attempting to
   exploit potential security holes.



Fielding & Reschke           Standards Track                   [Page 61]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   A 414 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).

6.5.13.  415 Unsupported Media Type

   The 415 (Unsupported Media Type) status code indicates that the
   origin server is refusing to service the request because the payload
   is in a format not supported by this method on the target resource.
   The format problem might be due to the request's indicated
   Content-Type or Content-Encoding, or as a result of inspecting the
   data directly.

6.5.14.  417 Expectation Failed

   The 417 (Expectation Failed) status code indicates that the
   expectation given in the request's Expect header field
   (Section 5.1.1) could not be met by at least one of the inbound
   servers.

6.5.15.  426 Upgrade Required

   The 426 (Upgrade Required) status code indicates that the server
   refuses to perform the request using the current protocol but might
   be willing to do so after the client upgrades to a different
   protocol.  The server MUST send an Upgrade header field in a 426
   response to indicate the required protocol(s) (Section 6.7 of
   [RFC7230]).

   Example:

     HTTP/1.1 426 Upgrade Required
     Upgrade: HTTP/3.0
     Connection: Upgrade
     Content-Length: 53
     Content-Type: text/plain

     This service requires use of the HTTP/3.0 protocol.

6.6.  Server Error 5xx

   The 5xx (Server Error) class of status code indicates that the server
   is aware that it has erred or is incapable of performing the
   requested method.  Except when responding to a HEAD request, the
   server SHOULD send a representation containing an explanation of the
   error situation, and whether it is a temporary or permanent





Fielding & Reschke           Standards Track                   [Page 62]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   condition.  A user agent SHOULD display any included representation
   to the user.  These response codes are applicable to any request
   method.

6.6.1.  500 Internal Server Error

   The 500 (Internal Server Error) status code indicates that the server
   encountered an unexpected condition that prevented it from fulfilling
   the request.

6.6.2.  501 Not Implemented

   The 501 (Not Implemented) status code indicates that the server does
   not support the functionality required to fulfill the request.  This
   is the appropriate response when the server does not recognize the
   request method and is not capable of supporting it for any resource.

   A 501 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   Section 4.2.2 of [RFC7234]).

6.6.3.  502 Bad Gateway

   The 502 (Bad Gateway) status code indicates that the server, while
   acting as a gateway or proxy, received an invalid response from an
   inbound server it accessed while attempting to fulfill the request.

6.6.4.  503 Service Unavailable

   The 503 (Service Unavailable) status code indicates that the server
   is currently unable to handle the request due to a temporary overload
   or scheduled maintenance, which will likely be alleviated after some
   delay.  The server MAY send a Retry-After header field
   (Section 7.1.3) to suggest an appropriate amount of time for the
   client to wait before retrying the request.

      Note: The existence of the 503 status code does not imply that a
      server has to use it when becoming overloaded.  Some servers might
      simply refuse the connection.

6.6.5.  504 Gateway Timeout

   The 504 (Gateway Timeout) status code indicates that the server,
   while acting as a gateway or proxy, did not receive a timely response
   from an upstream server it needed to access in order to complete the
   request.





Fielding & Reschke           Standards Track                   [Page 63]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


6.6.6.  505 HTTP Version Not Supported

   The 505 (HTTP Version Not Supported) status code indicates that the
   server does not support, or refuses to support, the major version of
   HTTP that was used in the request message.  The server is indicating
   that it is unable or unwilling to complete the request using the same
   major version as the client, as described in Section 2.6 of
   [RFC7230], other than with this error message.  The server SHOULD
   generate a representation for the 505 response that describes why
   that version is not supported and what other protocols are supported
   by that server.

7.  Response Header Fields

   The response header fields allow the server to pass additional
   information about the response beyond what is placed in the
   status-line.  These header fields give information about the server,
   about further access to the target resource, or about related
   resources.

   Although each response header field has a defined meaning, in
   general, the precise semantics might be further refined by the
   semantics of the request method and/or response status code.

7.1.  Control Data

   Response header fields can supply control data that supplements the
   status code, directs caching, or instructs the client where to go
   next.

   +-------------------+--------------------------+
   | Header Field Name | Defined in...            |
   +-------------------+--------------------------+
   | Age               | Section 5.1 of [RFC7234] |
   | Cache-Control     | Section 5.2 of [RFC7234] |
   | Expires           | Section 5.3 of [RFC7234] |
   | Date              | Section 7.1.1.2          |
   | Location          | Section 7.1.2            |
   | Retry-After       | Section 7.1.3            |
   | Vary              | Section 7.1.4            |
   | Warning           | Section 5.5 of [RFC7234] |
   +-------------------+--------------------------+









Fielding & Reschke           Standards Track                   [Page 64]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


7.1.1.  Origination Date

7.1.1.1.  Date/Time Formats

   Prior to 1995, there were three different formats commonly used by
   servers to communicate timestamps.  For compatibility with old
   implementations, all three are defined here.  The preferred format is
   a fixed-length and single-zone subset of the date and time
   specification used by the Internet Message Format [RFC5322].

     HTTP-date    = IMF-fixdate / obs-date

   An example of the preferred format is

     Sun, 06 Nov 1994 08:49:37 GMT    ; IMF-fixdate

   Examples of the two obsolete formats are

     Sunday, 06-Nov-94 08:49:37 GMT   ; obsolete RFC 850 format
     Sun Nov  6 08:49:37 1994         ; ANSI C's asctime() format

   A recipient that parses a timestamp value in an HTTP header field
   MUST accept all three HTTP-date formats.  When a sender generates a
   header field that contains one or more timestamps defined as
   HTTP-date, the sender MUST generate those timestamps in the
   IMF-fixdate format.

   An HTTP-date value represents time as an instance of Coordinated
   Universal Time (UTC).  The first two formats indicate UTC by the
   three-letter abbreviation for Greenwich Mean Time, "GMT", a
   predecessor of the UTC name; values in the asctime format are assumed
   to be in UTC.  A sender that generates HTTP-date values from a local
   clock ought to use NTP ([RFC5905]) or some similar protocol to
   synchronize its clock to UTC.

   Preferred format:

     IMF-fixdate  = day-name "," SP date1 SP time-of-day SP GMT
     ; fixed length/zone/capitalization subset of the format
     ; see Section 3.3 of [RFC5322]

     day-name     = %x4D.6F.6E ; "Mon", case-sensitive
                  / %x54.75.65 ; "Tue", case-sensitive
                  / %x57.65.64 ; "Wed", case-sensitive
                  / %x54.68.75 ; "Thu", case-sensitive
                  / %x46.72.69 ; "Fri", case-sensitive
                  / %x53.61.74 ; "Sat", case-sensitive
                  / %x53.75.6E ; "Sun", case-sensitive



Fielding & Reschke           Standards Track                   [Page 65]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


     date1        = day SP month SP year
                  ; e.g., 02 Jun 1982

     day          = 2DIGIT
     month        = %x4A.61.6E ; "Jan", case-sensitive
                  / %x46.65.62 ; "Feb", case-sensitive
                  / %x4D.61.72 ; "Mar", case-sensitive
                  / %x41.70.72 ; "Apr", case-sensitive
                  / %x4D.61.79 ; "May", case-sensitive
                  / %x4A.75.6E ; "Jun", case-sensitive
                  / %x4A.75.6C ; "Jul", case-sensitive
                  / %x41.75.67 ; "Aug", case-sensitive
                  / %x53.65.70 ; "Sep", case-sensitive
                  / %x4F.63.74 ; "Oct", case-sensitive
                  / %x4E.6F.76 ; "Nov", case-sensitive
                  / %x44.65.63 ; "Dec", case-sensitive
     year         = 4DIGIT

     GMT          = %x47.4D.54 ; "GMT", case-sensitive

     time-of-day  = hour ":" minute ":" second
                  ; 00:00:00 - 23:59:60 (leap second)

     hour         = 2DIGIT
     minute       = 2DIGIT
     second       = 2DIGIT

   Obsolete formats:

     obs-date     = rfc850-date / asctime-date

     rfc850-date  = day-name-l "," SP date2 SP time-of-day SP GMT
     date2        = day "-" month "-" 2DIGIT
                  ; e.g., 02-Jun-82

     day-name-l   = %x4D.6F.6E.64.61.79    ; "Monday", case-sensitive
            / %x54.75.65.73.64.61.79       ; "Tuesday", case-sensitive
            / %x57.65.64.6E.65.73.64.61.79 ; "Wednesday", case-sensitive
            / %x54.68.75.72.73.64.61.79    ; "Thursday", case-sensitive
            / %x46.72.69.64.61.79          ; "Friday", case-sensitive
            / %x53.61.74.75.72.64.61.79    ; "Saturday", case-sensitive
            / %x53.75.6E.64.61.79          ; "Sunday", case-sensitive


     asctime-date = day-name SP date3 SP time-of-day SP year
     date3        = month SP ( 2DIGIT / ( SP 1DIGIT ))
                  ; e.g., Jun  2




Fielding & Reschke           Standards Track                   [Page 66]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   HTTP-date is case sensitive.  A sender MUST NOT generate additional
   whitespace in an HTTP-date beyond that specifically included as SP in
   the grammar.  The semantics of day-name, day, month, year, and
   time-of-day are the same as those defined for the Internet Message
   Format constructs with the corresponding name ([RFC5322], Section
   3.3).

   Recipients of a timestamp value in rfc850-date format, which uses a
   two-digit year, MUST interpret a timestamp that appears to be more
   than 50 years in the future as representing the most recent year in
   the past that had the same last two digits.

   Recipients of timestamp values are encouraged to be robust in parsing
   timestamps unless otherwise restricted by the field definition.  For
   example, messages are occasionally forwarded over HTTP from a
   non-HTTP source that might generate any of the date and time
   specifications defined by the Internet Message Format.

      Note: HTTP requirements for the date/time stamp format apply only
      to their usage within the protocol stream.  Implementations are
      not required to use these formats for user presentation, request
      logging, etc.

7.1.1.2.  Date

   The "Date" header field represents the date and time at which the
   message was originated, having the same semantics as the Origination
   Date Field (orig-date) defined in Section 3.6.1 of [RFC5322].  The
   field value is an HTTP-date, as defined in Section 7.1.1.1.

     Date = HTTP-date

   An example is

     Date: Tue, 15 Nov 1994 08:12:31 GMT

   When a Date header field is generated, the sender SHOULD generate its
   field value as the best available approximation of the date and time
   of message generation.  In theory, the date ought to represent the
   moment just before the payload is generated.  In practice, the date
   can be generated at any time during message origination.

   An origin server MUST NOT send a Date header field if it does not
   have a clock capable of providing a reasonable approximation of the
   current instance in Coordinated Universal Time.  An origin server MAY
   send a Date header field if the response is in the 1xx
   (Informational) or 5xx (Server Error) class of status codes.  An
   origin server MUST send a Date header field in all other cases.



Fielding & Reschke           Standards Track                   [Page 67]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   A recipient with a clock that receives a response message without a
   Date header field MUST record the time it was received and append a
   corresponding Date header field to the message's header section if it
   is cached or forwarded downstream.

   A user agent MAY send a Date header field in a request, though
   generally will not do so unless it is believed to convey useful
   information to the server.  For example, custom applications of HTTP
   might convey a Date if the server is expected to adjust its
   interpretation of the user's request based on differences between the
   user agent and server clocks.

7.1.2.  Location

   The "Location" header field is used in some responses to refer to a
   specific resource in relation to the response.  The type of
   relationship is defined by the combination of request method and
   status code semantics.

     Location = URI-reference

   The field value consists of a single URI-reference.  When it has the
   form of a relative reference ([RFC3986], Section 4.2), the final
   value is computed by resolving it against the effective request URI
   ([RFC3986], Section 5).

   For 201 (Created) responses, the Location value refers to the primary
   resource created by the request.  For 3xx (Redirection) responses,
   the Location value refers to the preferred target resource for
   automatically redirecting the request.

   If the Location value provided in a 3xx (Redirection) response does
   not have a fragment component, a user agent MUST process the
   redirection as if the value inherits the fragment component of the
   URI reference used to generate the request target (i.e., the
   redirection inherits the original reference's fragment, if any).

   For example, a GET request generated for the URI reference
   "http://www.example.org/~tim" might result in a 303 (See Other)
   response containing the header field:

     Location: /People.html#tim

   which suggests that the user agent redirect to
   "http://www.example.org/People.html#tim"






Fielding & Reschke           Standards Track                   [Page 68]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Likewise, a GET request generated for the URI reference
   "http://www.example.org/index.html#larry" might result in a 301
   (Moved Permanently) response containing the header field:

     Location: http://www.example.net/index.html

   which suggests that the user agent redirect to
   "http://www.example.net/index.html#larry", preserving the original
   fragment identifier.

   There are circumstances in which a fragment identifier in a Location
   value would not be appropriate.  For example, the Location header
   field in a 201 (Created) response is supposed to provide a URI that
   is specific to the created resource.

      Note: Some recipients attempt to recover from Location fields that
      are not valid URI references.  This specification does not mandate
      or define such processing, but does allow it for the sake of
      robustness.

      Note: The Content-Location header field (Section 3.1.4.2) differs
      from Location in that the Content-Location refers to the most
      specific resource corresponding to the enclosed representation.
      It is therefore possible for a response to contain both the
      Location and Content-Location header fields.

7.1.3.  Retry-After

   Servers send the "Retry-After" header field to indicate how long the
   user agent ought to wait before making a follow-up request.  When
   sent with a 503 (Service Unavailable) response, Retry-After indicates
   how long the service is expected to be unavailable to the client.
   When sent with any 3xx (Redirection) response, Retry-After indicates
   the minimum time that the user agent is asked to wait before issuing
   the redirected request.

   The value of this field can be either an HTTP-date or a number of
   seconds to delay after the response is received.

     Retry-After = HTTP-date / delay-seconds

   A delay-seconds value is a non-negative decimal integer, representing
   time in seconds.

     delay-seconds  = 1*DIGIT






Fielding & Reschke           Standards Track                   [Page 69]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Two examples of its use are

     Retry-After: Fri, 31 Dec 1999 23:59:59 GMT
     Retry-After: 120

   In the latter example, the delay is 2 minutes.

7.1.4.  Vary

   The "Vary" header field in a response describes what parts of a
   request message, aside from the method, Host header field, and
   request target, might influence the origin server's process for
   selecting and representing this response.  The value consists of
   either a single asterisk ("*") or a list of header field names
   (case-insensitive).

     Vary = "*" / 1#field-name

   A Vary field value of "*" signals that anything about the request
   might play a role in selecting the response representation, possibly
   including elements outside the message syntax (e.g., the client's
   network address).  A recipient will not be able to determine whether
   this response is appropriate for a later request without forwarding
   the request to the origin server.  A proxy MUST NOT generate a Vary
   field with a "*" value.

   A Vary field value consisting of a comma-separated list of names
   indicates that the named request header fields, known as the
   selecting header fields, might have a role in selecting the
   representation.  The potential selecting header fields are not
   limited to those defined by this specification.

   For example, a response that contains

     Vary: accept-encoding, accept-language

   indicates that the origin server might have used the request's
   Accept-Encoding and Accept-Language fields (or lack thereof) as
   determining factors while choosing the content for this response.

   An origin server might send Vary with a list of fields for two
   purposes:

   1.  To inform cache recipients that they MUST NOT use this response
       to satisfy a later request unless the later request has the same
       values for the listed fields as the original request (Section 4.1
       of [RFC7234]).  In other words, Vary expands the cache key
       required to match a new request to the stored cache entry.



Fielding & Reschke           Standards Track                   [Page 70]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   2.  To inform user agent recipients that this response is subject to
       content negotiation (Section 5.3) and that a different
       representation might be sent in a subsequent request if
       additional parameters are provided in the listed header fields
       (proactive negotiation).

   An origin server SHOULD send a Vary header field when its algorithm
   for selecting a representation varies based on aspects of the request
   message other than the method and request target, unless the variance
   cannot be crossed or the origin server has been deliberately
   configured to prevent cache transparency.  For example, there is no
   need to send the Authorization field name in Vary because reuse
   across users is constrained by the field definition (Section 4.2 of
   [RFC7235]).  Likewise, an origin server might use Cache-Control
   directives (Section 5.2 of [RFC7234]) to supplant Vary if it
   considers the variance less significant than the performance cost of
   Vary's impact on caching.

7.2.  Validator Header Fields

   Validator header fields convey metadata about the selected
   representation (Section 3).  In responses to safe requests, validator
   fields describe the selected representation chosen by the origin
   server while handling the response.  Note that, depending on the
   status code semantics, the selected representation for a given
   response is not necessarily the same as the representation enclosed
   as response payload.

   In a successful response to a state-changing request, validator
   fields describe the new representation that has replaced the prior
   selected representation as a result of processing the request.

   For example, an ETag header field in a 201 (Created) response
   communicates the entity-tag of the newly created resource's
   representation, so that it can be used in later conditional requests
   to prevent the "lost update" problem [RFC7232].

   +-------------------+--------------------------+
   | Header Field Name | Defined in...            |
   +-------------------+--------------------------+
   | ETag              | Section 2.3 of [RFC7232] |
   | Last-Modified     | Section 2.2 of [RFC7232] |
   +-------------------+--------------------------+








Fielding & Reschke           Standards Track                   [Page 71]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


7.3.  Authentication Challenges

   Authentication challenges indicate what mechanisms are available for
   the client to provide authentication credentials in future requests.

   +--------------------+--------------------------+
   | Header Field Name  | Defined in...            |
   +--------------------+--------------------------+
   | WWW-Authenticate   | Section 4.1 of [RFC7235] |
   | Proxy-Authenticate | Section 4.3 of [RFC7235] |
   +--------------------+--------------------------+

7.4.  Response Context

   The remaining response header fields provide more information about
   the target resource for potential use in later requests.

   +-------------------+--------------------------+
   | Header Field Name | Defined in...            |
   +-------------------+--------------------------+
   | Accept-Ranges     | Section 2.3 of [RFC7233] |
   | Allow             | Section 7.4.1            |
   | Server            | Section 7.4.2            |
   +-------------------+--------------------------+

7.4.1.  Allow

   The "Allow" header field lists the set of methods advertised as
   supported by the target resource.  The purpose of this field is
   strictly to inform the recipient of valid request methods associated
   with the resource.

     Allow = #method

   Example of use:

     Allow: GET, HEAD, PUT

   The actual set of allowed methods is defined by the origin server at
   the time of each request.  An origin server MUST generate an Allow
   field in a 405 (Method Not Allowed) response and MAY do so in any
   other response.  An empty Allow field value indicates that the
   resource allows no methods, which might occur in a 405 response if
   the resource has been temporarily disabled by configuration.

   A proxy MUST NOT modify the Allow header field -- it does not need to
   understand all of the indicated methods in order to handle them
   according to the generic message handling rules.



Fielding & Reschke           Standards Track                   [Page 72]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


7.4.2.  Server

   The "Server" header field contains information about the software
   used by the origin server to handle the request, which is often used
   by clients to help identify the scope of reported interoperability
   problems, to work around or tailor requests to avoid particular
   server limitations, and for analytics regarding server or operating
   system use.  An origin server MAY generate a Server field in its
   responses.

     Server = product *( RWS ( product / comment ) )

   The Server field-value consists of one or more product identifiers,
   each followed by zero or more comments (Section 3.2 of [RFC7230]),
   which together identify the origin server software and its
   significant subproducts.  By convention, the product identifiers are
   listed in decreasing order of their significance for identifying the
   origin server software.  Each product identifier consists of a name
   and optional version, as defined in Section 5.5.3.

   Example:

     Server: CERN/3.0 libwww/2.17

   An origin server SHOULD NOT generate a Server field containing
   needlessly fine-grained detail and SHOULD limit the addition of
   subproducts by third parties.  Overly long and detailed Server field
   values increase response latency and potentially reveal internal
   implementation details that might make it (slightly) easier for
   attackers to find and exploit known security holes.

8.  IANA Considerations

8.1.  Method Registry

   The "Hypertext Transfer Protocol (HTTP) Method Registry" defines the
   namespace for the request method token (Section 4).  The method
   registry has been created and is now maintained at
   <http://www.iana.org/assignments/http-methods>.












Fielding & Reschke           Standards Track                   [Page 73]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


8.1.1.  Procedure

   HTTP method registrations MUST include the following fields:

   o  Method Name (see Section 4)

   o  Safe ("yes" or "no", see Section 4.2.1)

   o  Idempotent ("yes" or "no", see Section 4.2.2)

   o  Pointer to specification text

   Values to be added to this namespace require IETF Review (see
   [RFC5226], Section 4.1).

8.1.2.  Considerations for New Methods

   Standardized methods are generic; that is, they are potentially
   applicable to any resource, not just one particular media type, kind
   of resource, or application.  As such, it is preferred that new
   methods be registered in a document that isn't specific to a single
   application or data format, since orthogonal technologies deserve
   orthogonal specification.

   Since message parsing (Section 3.3 of [RFC7230]) needs to be
   independent of method semantics (aside from responses to HEAD),
   definitions of new methods cannot change the parsing algorithm or
   prohibit the presence of a message body on either the request or the
   response message.  Definitions of new methods can specify that only a
   zero-length message body is allowed by requiring a Content-Length
   header field with a value of "0".

   A new method definition needs to indicate whether it is safe
   (Section 4.2.1), idempotent (Section 4.2.2), cacheable
   (Section 4.2.3), what semantics are to be associated with the payload
   body if any is present in the request and what refinements the method
   makes to header field or status code semantics.  If the new method is
   cacheable, its definition ought to describe how, and under what
   conditions, a cache can store a response and use it to satisfy a
   subsequent request.  The new method ought to describe whether it can
   be made conditional (Section 5.2) and, if so, how a server responds
   when the condition is false.  Likewise, if the new method might have
   some use for partial response semantics ([RFC7233]), it ought to
   document this, too.

      Note: Avoid defining a method name that starts with "M-", since
      that prefix might be misinterpreted as having the semantics
      assigned to it by [RFC2774].



Fielding & Reschke           Standards Track                   [Page 74]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


8.1.3.  Registrations

   The "Hypertext Transfer Protocol (HTTP) Method Registry" has been
   populated with the registrations below:

   +---------+------+------------+---------------+
   | Method  | Safe | Idempotent | Reference     |
   +---------+------+------------+---------------+
   | CONNECT | no   | no         | Section 4.3.6 |
   | DELETE  | no   | yes        | Section 4.3.5 |
   | GET     | yes  | yes        | Section 4.3.1 |
   | HEAD    | yes  | yes        | Section 4.3.2 |
   | OPTIONS | yes  | yes        | Section 4.3.7 |
   | POST    | no   | no         | Section 4.3.3 |
   | PUT     | no   | yes        | Section 4.3.4 |
   | TRACE   | yes  | yes        | Section 4.3.8 |
   +---------+------+------------+---------------+

8.2.  Status Code Registry

   The "Hypertext Transfer Protocol (HTTP) Status Code Registry" defines
   the namespace for the response status-code token (Section 6).  The
   status code registry is maintained at
   <http://www.iana.org/assignments/http-status-codes>.

   This section replaces the registration procedure for HTTP Status
   Codes previously defined in Section 7.1 of [RFC2817].

8.2.1.  Procedure

   A registration MUST include the following fields:

   o  Status Code (3 digits)

   o  Short Description

   o  Pointer to specification text

   Values to be added to the HTTP status code namespace require IETF
   Review (see [RFC5226], Section 4.1).











Fielding & Reschke           Standards Track                   [Page 75]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


8.2.2.  Considerations for New Status Codes

   When it is necessary to express semantics for a response that are not
   defined by current status codes, a new status code can be registered.
   Status codes are generic; they are potentially applicable to any
   resource, not just one particular media type, kind of resource, or
   application of HTTP.  As such, it is preferred that new status codes
   be registered in a document that isn't specific to a single
   application.

   New status codes are required to fall under one of the categories
   defined in Section 6.  To allow existing parsers to process the
   response message, new status codes cannot disallow a payload,
   although they can mandate a zero-length payload body.

   Proposals for new status codes that are not yet widely deployed ought
   to avoid allocating a specific number for the code until there is
   clear consensus that it will be registered; instead, early drafts can
   use a notation such as "4NN", or "3N0" .. "3N9", to indicate the
   class of the proposed status code(s) without consuming a number
   prematurely.

   The definition of a new status code ought to explain the request
   conditions that would cause a response containing that status code
   (e.g., combinations of request header fields and/or method(s)) along
   with any dependencies on response header fields (e.g., what fields
   are required, what fields can modify the semantics, and what header
   field semantics are further refined when used with the new status
   code).

   The definition of a new status code ought to specify whether or not
   it is cacheable.  Note that all status codes can be cached if the
   response they occur in has explicit freshness information; however,
   status codes that are defined as being cacheable are allowed to be
   cached without explicit freshness information.  Likewise, the
   definition of a status code can place constraints upon cache
   behavior.  See [RFC7234] for more information.

   Finally, the definition of a new status code ought to indicate
   whether the payload has any implied association with an identified
   resource (Section 3.1.4.1).

8.2.3.  Registrations

   The status code registry has been updated with the registrations
   below:





Fielding & Reschke           Standards Track                   [Page 76]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   +-------+-------------------------------+----------------+
   | Value | Description                   | Reference      |
   +-------+-------------------------------+----------------+
   | 100   | Continue                      | Section 6.2.1  |
   | 101   | Switching Protocols           | Section 6.2.2  |
   | 200   | OK                            | Section 6.3.1  |
   | 201   | Created                       | Section 6.3.2  |
   | 202   | Accepted                      | Section 6.3.3  |
   | 203   | Non-Authoritative Information | Section 6.3.4  |
   | 204   | No Content                    | Section 6.3.5  |
   | 205   | Reset Content                 | Section 6.3.6  |
   | 300   | Multiple Choices              | Section 6.4.1  |
   | 301   | Moved Permanently             | Section 6.4.2  |
   | 302   | Found                         | Section 6.4.3  |
   | 303   | See Other                     | Section 6.4.4  |
   | 305   | Use Proxy                     | Section 6.4.5  |
   | 306   | (Unused)                      | Section 6.4.6  |
   | 307   | Temporary Redirect            | Section 6.4.7  |
   | 400   | Bad Request                   | Section 6.5.1  |
   | 402   | Payment Required              | Section 6.5.2  |
   | 403   | Forbidden                     | Section 6.5.3  |
   | 404   | Not Found                     | Section 6.5.4  |
   | 405   | Method Not Allowed            | Section 6.5.5  |
   | 406   | Not Acceptable                | Section 6.5.6  |
   | 408   | Request Timeout               | Section 6.5.7  |
   | 409   | Conflict                      | Section 6.5.8  |
   | 410   | Gone                          | Section 6.5.9  |
   | 411   | Length Required               | Section 6.5.10 |
   | 413   | Payload Too Large             | Section 6.5.11 |
   | 414   | URI Too Long                  | Section 6.5.12 |
   | 415   | Unsupported Media Type        | Section 6.5.13 |
   | 417   | Expectation Failed            | Section 6.5.14 |
   | 426   | Upgrade Required              | Section 6.5.15 |
   | 500   | Internal Server Error         | Section 6.6.1  |
   | 501   | Not Implemented               | Section 6.6.2  |
   | 502   | Bad Gateway                   | Section 6.6.3  |
   | 503   | Service Unavailable           | Section 6.6.4  |
   | 504   | Gateway Timeout               | Section 6.6.5  |
   | 505   | HTTP Version Not Supported    | Section 6.6.6  |
   +-------+-------------------------------+----------------+

8.3.  Header Field Registry

   HTTP header fields are registered within the "Message Headers"
   registry located at
   <http://www.iana.org/assignments/message-headers>, as defined by
   [BCP90].




Fielding & Reschke           Standards Track                   [Page 77]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


8.3.1.  Considerations for New Header Fields

   Header fields are key:value pairs that can be used to communicate
   data about the message, its payload, the target resource, or the
   connection (i.e., control data).  See Section 3.2 of [RFC7230] for a
   general definition of header field syntax in HTTP messages.

   The requirements for header field names are defined in [BCP90].

   Authors of specifications defining new fields are advised to keep the
   name as short as practical and not to prefix the name with "X-"
   unless the header field will never be used on the Internet.  (The
   "X-" prefix idiom has been extensively misused in practice; it was
   intended to only be used as a mechanism for avoiding name collisions
   inside proprietary software or intranet processing, since the prefix
   would ensure that private names never collide with a newly registered
   Internet name; see [BCP178] for further information).

   New header field values typically have their syntax defined using
   ABNF ([RFC5234]), using the extension defined in Section 7 of
   [RFC7230] as necessary, and are usually constrained to the range of
   US-ASCII characters.  Header fields needing a greater range of
   characters can use an encoding such as the one defined in [RFC5987].

   Leading and trailing whitespace in raw field values is removed upon
   field parsing (Section 3.2.4 of [RFC7230]).  Field definitions where
   leading or trailing whitespace in values is significant will have to
   use a container syntax such as quoted-string (Section 3.2.6 of
   [RFC7230]).

   Because commas (",") are used as a generic delimiter between
   field-values, they need to be treated with care if they are allowed
   in the field-value.  Typically, components that might contain a comma
   are protected with double-quotes using the quoted-string ABNF
   production.

   For example, a textual date and a URI (either of which might contain
   a comma) could be safely carried in field-values like these:

     Example-URI-Field: "http://example.com/a.html,foo",
                        "http://without-a-comma.example.com/"
     Example-Date-Field: "Sat, 04 May 1996", "Wed, 14 Sep 2005"

   Note that double-quote delimiters almost always are used with the
   quoted-string production; using a different syntax inside
   double-quotes will likely cause unnecessary confusion.





Fielding & Reschke           Standards Track                   [Page 78]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Many header fields use a format including (case-insensitively) named
   parameters (for instance, Content-Type, defined in Section 3.1.1.5).
   Allowing both unquoted (token) and quoted (quoted-string) syntax for
   the parameter value enables recipients to use existing parser
   components.  When allowing both forms, the meaning of a parameter
   value ought to be independent of the syntax used for it (for an
   example, see the notes on parameter handling for media types in
   Section 3.1.1.1).

   Authors of specifications defining new header fields are advised to
   consider documenting:

   o  Whether the field is a single value or whether it can be a list
      (delimited by commas; see Section 3.2 of [RFC7230]).

      If it does not use the list syntax, document how to treat messages
      where the field occurs multiple times (a sensible default would be
      to ignore the field, but this might not always be the right
      choice).

      Note that intermediaries and software libraries might combine
      multiple header field instances into a single one, despite the
      field's definition not allowing the list syntax.  A robust format
      enables recipients to discover these situations (good example:
      "Content-Type", as the comma can only appear inside quoted
      strings; bad example: "Location", as a comma can occur inside a
      URI).

   o  Under what conditions the header field can be used; e.g., only in
      responses or requests, in all messages, only on responses to a
      particular request method, etc.

   o  Whether the field should be stored by origin servers that
      understand it upon a PUT request.

   o  Whether the field semantics are further refined by the context,
      such as by existing request methods or status codes.

   o  Whether it is appropriate to list the field-name in the Connection
      header field (i.e., if the header field is to be hop-by-hop; see
      Section 6.1 of [RFC7230]).

   o  Under what conditions intermediaries are allowed to insert,
      delete, or modify the field's value.







Fielding & Reschke           Standards Track                   [Page 79]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   o  Whether it is appropriate to list the field-name in a Vary
      response header field (e.g., when the request header field is used
      by an origin server's content selection algorithm; see
      Section 7.1.4).

   o  Whether the header field is useful or allowable in trailers (see
      Section 4.1 of [RFC7230]).

   o  Whether the header field ought to be preserved across redirects.

   o  Whether it introduces any additional security considerations, such
      as disclosure of privacy-related data.

8.3.2.  Registrations

   The "Message Headers" registry has been updated with the following
   permanent registrations:

   +-------------------+----------+----------+-----------------+
   | Header Field Name | Protocol | Status   | Reference       |
   +-------------------+----------+----------+-----------------+
   | Accept            | http     | standard | Section 5.3.2   |
   | Accept-Charset    | http     | standard | Section 5.3.3   |
   | Accept-Encoding   | http     | standard | Section 5.3.4   |
   | Accept-Language   | http     | standard | Section 5.3.5   |
   | Allow             | http     | standard | Section 7.4.1   |
   | Content-Encoding  | http     | standard | Section 3.1.2.2 |
   | Content-Language  | http     | standard | Section 3.1.3.2 |
   | Content-Location  | http     | standard | Section 3.1.4.2 |
   | Content-Type      | http     | standard | Section 3.1.1.5 |
   | Date              | http     | standard | Section 7.1.1.2 |
   | Expect            | http     | standard | Section 5.1.1   |
   | From              | http     | standard | Section 5.5.1   |
   | Location          | http     | standard | Section 7.1.2   |
   | Max-Forwards      | http     | standard | Section 5.1.2   |
   | MIME-Version      | http     | standard | Appendix A.1    |
   | Referer           | http     | standard | Section 5.5.2   |
   | Retry-After       | http     | standard | Section 7.1.3   |
   | Server            | http     | standard | Section 7.4.2   |
   | User-Agent        | http     | standard | Section 5.5.3   |
   | Vary              | http     | standard | Section 7.1.4   |
   +-------------------+----------+----------+-----------------+

   The change controller for the above registrations is: "IETF
   (iesg@ietf.org) - Internet Engineering Task Force".






Fielding & Reschke           Standards Track                   [Page 80]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


8.4.  Content Coding Registry

   The "HTTP Content Coding Registry" defines the namespace for content
   coding names (Section 4.2 of [RFC7230]).  The content coding registry
   is maintained at <http://www.iana.org/assignments/http-parameters>.

8.4.1.  Procedure

   Content coding registrations MUST include the following fields:

   o  Name

   o  Description

   o  Pointer to specification text

   Names of content codings MUST NOT overlap with names of transfer
   codings (Section 4 of [RFC7230]), unless the encoding transformation
   is identical (as is the case for the compression codings defined in
   Section 4.2 of [RFC7230]).

   Values to be added to this namespace require IETF Review (see Section
   4.1 of [RFC5226]) and MUST conform to the purpose of content coding
   defined in this section.

8.4.2.  Registrations

   The "HTTP Content Coding Registry" has been updated with the
   registrations below:

   +----------+----------------------------------------+---------------+
   | Name     | Description                            | Reference     |
   +----------+----------------------------------------+---------------+
   | identity | Reserved (synonym for "no encoding" in | Section 5.3.4 |
   |          | Accept-Encoding)                       |               |
   +----------+----------------------------------------+---------------+

9.  Security Considerations

   This section is meant to inform developers, information providers,
   and users of known security concerns relevant to HTTP semantics and
   its use for transferring information over the Internet.
   Considerations related to message syntax, parsing, and routing are
   discussed in Section 9 of [RFC7230].

   The list of considerations below is not exhaustive.  Most security
   concerns related to HTTP semantics are about securing server-side
   applications (code behind the HTTP interface), securing user agent



Fielding & Reschke           Standards Track                   [Page 81]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   processing of payloads received via HTTP, or secure use of the
   Internet in general, rather than security of the protocol.  Various
   organizations maintain topical information and links to current
   research on Web application security (e.g., [OWASP]).

9.1.  Attacks Based on File and Path Names

   Origin servers frequently make use of their local file system to
   manage the mapping from effective request URI to resource
   representations.  Most file systems are not designed to protect
   against malicious file or path names.  Therefore, an origin server
   needs to avoid accessing names that have a special significance to
   the system when mapping the request target to files, folders, or
   directories.

   For example, UNIX, Microsoft Windows, and other operating systems use
   ".." as a path component to indicate a directory level above the
   current one, and they use specially named paths or file names to send
   data to system devices.  Similar naming conventions might exist
   within other types of storage systems.  Likewise, local storage
   systems have an annoying tendency to prefer user-friendliness over
   security when handling invalid or unexpected characters,
   recomposition of decomposed characters, and case-normalization of
   case-insensitive names.

   Attacks based on such special names tend to focus on either denial-
   of-service (e.g., telling the server to read from a COM port) or
   disclosure of configuration and source files that are not meant to be
   served.

9.2.  Attacks Based on Command, Code, or Query Injection

   Origin servers often use parameters within the URI as a means of
   identifying system services, selecting database entries, or choosing
   a data source.  However, data received in a request cannot be
   trusted.  An attacker could construct any of the request data
   elements (method, request-target, header fields, or body) to contain
   data that might be misinterpreted as a command, code, or query when
   passed through a command invocation, language interpreter, or
   database interface.

   For example, SQL injection is a common attack wherein additional
   query language is inserted within some part of the request-target or
   header fields (e.g., Host, Referer, etc.).  If the received data is
   used directly within a SELECT statement, the query language might be
   interpreted as a database command instead of a simple string value.
   This type of implementation vulnerability is extremely common, in
   spite of being easy to prevent.



Fielding & Reschke           Standards Track                   [Page 82]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   In general, resource implementations ought to avoid use of request
   data in contexts that are processed or interpreted as instructions.
   Parameters ought to be compared to fixed strings and acted upon as a
   result of that comparison, rather than passed through an interface
   that is not prepared for untrusted data.  Received data that isn't
   based on fixed parameters ought to be carefully filtered or encoded
   to avoid being misinterpreted.

   Similar considerations apply to request data when it is stored and
   later processed, such as within log files, monitoring tools, or when
   included within a data format that allows embedded scripts.

9.3.  Disclosure of Personal Information

   Clients are often privy to large amounts of personal information,
   including both information provided by the user to interact with
   resources (e.g., the user's name, location, mail address, passwords,
   encryption keys, etc.) and information about the user's browsing
   activity over time (e.g., history, bookmarks, etc.).  Implementations
   need to prevent unintentional disclosure of personal information.

9.4.  Disclosure of Sensitive Information in URIs

   URIs are intended to be shared, not secured, even when they identify
   secure resources.  URIs are often shown on displays, added to
   templates when a page is printed, and stored in a variety of
   unprotected bookmark lists.  It is therefore unwise to include
   information within a URI that is sensitive, personally identifiable,
   or a risk to disclose.

   Authors of services ought to avoid GET-based forms for the submission
   of sensitive data because that data will be placed in the
   request-target.  Many existing servers, proxies, and user agents log
   or display the request-target in places where it might be visible to
   third parties.  Such services ought to use POST-based form submission
   instead.

   Since the Referer header field tells a target site about the context
   that resulted in a request, it has the potential to reveal
   information about the user's immediate browsing history and any
   personal information that might be found in the referring resource's
   URI.  Limitations on the Referer header field are described in
   Section 5.5.2 to address some of its security considerations.








Fielding & Reschke           Standards Track                   [Page 83]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


9.5.  Disclosure of Fragment after Redirects

   Although fragment identifiers used within URI references are not sent
   in requests, implementers ought to be aware that they will be visible
   to the user agent and any extensions or scripts running as a result
   of the response.  In particular, when a redirect occurs and the
   original request's fragment identifier is inherited by the new
   reference in Location (Section 7.1.2), this might have the effect of
   disclosing one site's fragment to another site.  If the first site
   uses personal information in fragments, it ought to ensure that
   redirects to other sites include a (possibly empty) fragment
   component in order to block that inheritance.

9.6.  Disclosure of Product Information

   The User-Agent (Section 5.5.3), Via (Section 5.7.1 of [RFC7230]), and
   Server (Section 7.4.2) header fields often reveal information about
   the respective sender's software systems.  In theory, this can make
   it easier for an attacker to exploit known security holes; in
   practice, attackers tend to try all potential holes regardless of the
   apparent software versions being used.

   Proxies that serve as a portal through a network firewall ought to
   take special precautions regarding the transfer of header information
   that might identify hosts behind the firewall.  The Via header field
   allows intermediaries to replace sensitive machine names with
   pseudonyms.

9.7.  Browser Fingerprinting

   Browser fingerprinting is a set of techniques for identifying a
   specific user agent over time through its unique set of
   characteristics.  These characteristics might include information
   related to its TCP behavior, feature capabilities, and scripting
   environment, though of particular interest here is the set of unique
   characteristics that might be communicated via HTTP.  Fingerprinting
   is considered a privacy concern because it enables tracking of a user
   agent's behavior over time without the corresponding controls that
   the user might have over other forms of data collection (e.g.,
   cookies).  Many general-purpose user agents (i.e., Web browsers) have
   taken steps to reduce their fingerprints.

   There are a number of request header fields that might reveal
   information to servers that is sufficiently unique to enable
   fingerprinting.  The From header field is the most obvious, though it
   is expected that From will only be sent when self-identification is
   desired by the user.  Likewise, Cookie header fields are deliberately




Fielding & Reschke           Standards Track                   [Page 84]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   designed to enable re-identification, so fingerprinting concerns only
   apply to situations where cookies are disabled or restricted by the
   user agent's configuration.

   The User-Agent header field might contain enough information to
   uniquely identify a specific device, usually when combined with other
   characteristics, particularly if the user agent sends excessive
   details about the user's system or extensions.  However, the source
   of unique information that is least expected by users is proactive
   negotiation (Section 5.3), including the Accept, Accept-Charset,
   Accept-Encoding, and Accept-Language header fields.

   In addition to the fingerprinting concern, detailed use of the
   Accept-Language header field can reveal information the user might
   consider to be of a private nature.  For example, understanding a
   given language set might be strongly correlated to membership in a
   particular ethnic group.  An approach that limits such loss of
   privacy would be for a user agent to omit the sending of
   Accept-Language except for sites that have been whitelisted, perhaps
   via interaction after detecting a Vary header field that indicates
   language negotiation might be useful.

   In environments where proxies are used to enhance privacy, user
   agents ought to be conservative in sending proactive negotiation
   header fields.  General-purpose user agents that provide a high
   degree of header field configurability ought to inform users about
   the loss of privacy that might result if too much detail is provided.
   As an extreme privacy measure, proxies could filter the proactive
   negotiation header fields in relayed requests.

10.  Acknowledgments

   See Section 10 of [RFC7230].

11.  References

11.1.  Normative References

   [RFC2045]  Freed, N. and N. Borenstein, "Multipurpose Internet Mail
              Extensions (MIME) Part One: Format of Internet Message
              Bodies", RFC 2045, November 1996.

   [RFC2046]  Freed, N. and N. Borenstein, "Multipurpose Internet Mail
              Extensions (MIME) Part Two: Media Types", RFC 2046,
              November 1996.

   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119, March 1997.



Fielding & Reschke           Standards Track                   [Page 85]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   [RFC3986]  Berners-Lee, T., Fielding, R., and L. Masinter, "Uniform
              Resource Identifier (URI): Generic Syntax", STD 66,
              RFC 3986, January 2005.

   [RFC4647]  Phillips, A., Ed. and M. Davis, Ed., "Matching of Language
              Tags", BCP 47, RFC 4647, September 2006.

   [RFC5234]  Crocker, D., Ed. and P. Overell, "Augmented BNF for Syntax
              Specifications: ABNF", STD 68, RFC 5234, January 2008.

   [RFC5646]  Phillips, A., Ed. and M. Davis, Ed., "Tags for Identifying
              Languages", BCP 47, RFC 5646, September 2009.

   [RFC6365]  Hoffman, P. and J. Klensin, "Terminology Used in
              Internationalization in the IETF", BCP 166, RFC 6365,
              September 2011.

   [RFC7230]  Fielding, R., Ed. and J. Reschke, Ed., "Hypertext Transfer
              Protocol (HTTP/1.1): Message Syntax and Routing",
              RFC 7230, June 2014.

   [RFC7232]  Fielding, R., Ed. and J. Reschke, Ed., "Hypertext Transfer
              Protocol (HTTP/1.1): Conditional Requests", RFC 7232,
              June 2014.

   [RFC7233]  Fielding, R., Ed., Lafon, Y., Ed., and J. Reschke, Ed.,
              "Hypertext Transfer Protocol (HTTP/1.1): Range Requests",
              RFC 7233, June 2014.

   [RFC7234]  Fielding, R., Ed., Nottingham, M., Ed., and J. Reschke,
              Ed., "Hypertext Transfer Protocol (HTTP/1.1): Caching",
              RFC 7234, June 2014.

   [RFC7235]  Fielding, R., Ed. and J. Reschke, Ed., "Hypertext Transfer
              Protocol (HTTP/1.1): Authentication", RFC 7235, June 2014.

11.2.  Informative References

   [BCP13]    Freed, N., Klensin, J., and T. Hansen, "Media Type
              Specifications and Registration Procedures", BCP 13,
              RFC 6838, January 2013.

   [BCP178]   Saint-Andre, P., Crocker, D., and M. Nottingham,
              "Deprecating the "X-" Prefix and Similar Constructs in
              Application Protocols", BCP 178, RFC 6648, June 2012.






Fielding & Reschke           Standards Track                   [Page 86]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   [BCP90]    Klyne, G., Nottingham, M., and J. Mogul, "Registration
              Procedures for Message Header Fields", BCP 90, RFC 3864,
              September 2004.

   [OWASP]    van der Stock, A., Ed., "A Guide to Building Secure Web
              Applications and Web Services", The Open Web Application
              Security Project (OWASP) 2.0.1, July 2005,
              <https://www.owasp.org/>.

   [REST]     Fielding, R., "Architectural Styles and the Design of
              Network-based Software Architectures",
              Doctoral Dissertation, University of California, Irvine,
              September 2000,
              <http://roy.gbiv.com/pubs/dissertation/top.htm>.

   [RFC1945]  Berners-Lee, T., Fielding, R., and H. Nielsen, "Hypertext
              Transfer Protocol -- HTTP/1.0", RFC 1945, May 1996.

   [RFC2049]  Freed, N. and N. Borenstein, "Multipurpose Internet Mail
              Extensions (MIME) Part Five: Conformance Criteria and
              Examples", RFC 2049, November 1996.

   [RFC2068]  Fielding, R., Gettys, J., Mogul, J., Nielsen, H., and T.
              Berners-Lee, "Hypertext Transfer Protocol -- HTTP/1.1",
              RFC 2068, January 1997.

   [RFC2295]  Holtman, K. and A. Mutz, "Transparent Content Negotiation
              in HTTP", RFC 2295, March 1998.

   [RFC2388]  Masinter, L., "Returning Values from Forms:  multipart/
              form-data", RFC 2388, August 1998.

   [RFC2557]  Palme, F., Hopmann, A., Shelness, N., and E. Stefferud,
              "MIME Encapsulation of Aggregate Documents, such as HTML
              (MHTML)", RFC 2557, March 1999.

   [RFC2616]  Fielding, R., Gettys, J., Mogul, J., Frystyk, H.,
              Masinter, L., Leach, P., and T. Berners-Lee, "Hypertext
              Transfer Protocol -- HTTP/1.1", RFC 2616, June 1999.

   [RFC2774]  Frystyk, H., Leach, P., and S. Lawrence, "An HTTP
              Extension Framework", RFC 2774, February 2000.

   [RFC2817]  Khare, R. and S. Lawrence, "Upgrading to TLS Within
              HTTP/1.1", RFC 2817, May 2000.

   [RFC2978]  Freed, N. and J. Postel, "IANA Charset Registration
              Procedures", BCP 19, RFC 2978, October 2000.



Fielding & Reschke           Standards Track                   [Page 87]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   [RFC5226]  Narten, T. and H. Alvestrand, "Guidelines for Writing an
              IANA Considerations Section in RFCs", BCP 26, RFC 5226,
              May 2008.

   [RFC5246]  Dierks, T. and E. Rescorla, "The Transport Layer Security
              (TLS) Protocol Version 1.2", RFC 5246, August 2008.

   [RFC5322]  Resnick, P., "Internet Message Format", RFC 5322,
              October 2008.

   [RFC5789]  Dusseault, L. and J. Snell, "PATCH Method for HTTP",
              RFC 5789, March 2010.

   [RFC5905]  Mills, D., Martin, J., Ed., Burbank, J., and W. Kasch,
              "Network Time Protocol Version 4: Protocol and Algorithms
              Specification", RFC 5905, June 2010.

   [RFC5987]  Reschke, J., "Character Set and Language Encoding for
              Hypertext Transfer Protocol (HTTP) Header Field
              Parameters", RFC 5987, August 2010.

   [RFC5988]  Nottingham, M., "Web Linking", RFC 5988, October 2010.

   [RFC6265]  Barth, A., "HTTP State Management Mechanism", RFC 6265,
              April 2011.

   [RFC6266]  Reschke, J., "Use of the Content-Disposition Header Field
              in the Hypertext Transfer Protocol (HTTP)", RFC 6266,
              June 2011.

   [RFC7238]  Reschke, J., "The Hypertext Transfer Protocol (HTTP)
              Status Code 308 (Permanent Redirect)", RFC 7238,
              June 2014.


















Fielding & Reschke           Standards Track                   [Page 88]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


Appendix A.  Differences between HTTP and MIME

   HTTP/1.1 uses many of the constructs defined for the Internet Message
   Format [RFC5322] and the Multipurpose Internet Mail Extensions (MIME)
   [RFC2045] to allow a message body to be transmitted in an open
   variety of representations and with extensible header fields.
   However, RFC 2045 is focused only on email; applications of HTTP have
   many characteristics that differ from email; hence, HTTP has features
   that differ from MIME.  These differences were carefully chosen to
   optimize performance over binary connections, to allow greater
   freedom in the use of new media types, to make date comparisons
   easier, and to acknowledge the practice of some early HTTP servers
   and clients.

   This appendix describes specific areas where HTTP differs from MIME.
   Proxies and gateways to and from strict MIME environments need to be
   aware of these differences and provide the appropriate conversions
   where necessary.

A.1.  MIME-Version

   HTTP is not a MIME-compliant protocol.  However, messages can include
   a single MIME-Version header field to indicate what version of the
   MIME protocol was used to construct the message.  Use of the
   MIME-Version header field indicates that the message is in full
   conformance with the MIME protocol (as defined in [RFC2045]).
   Senders are responsible for ensuring full conformance (where
   possible) when exporting HTTP messages to strict MIME environments.

A.2.  Conversion to Canonical Form

   MIME requires that an Internet mail body part be converted to
   canonical form prior to being transferred, as described in Section 4
   of [RFC2049].  Section 3.1.1.3 of this document describes the forms
   allowed for subtypes of the "text" media type when transmitted over
   HTTP.  [RFC2046] requires that content with a type of "text"
   represent line breaks as CRLF and forbids the use of CR or LF outside
   of line break sequences.  HTTP allows CRLF, bare CR, and bare LF to
   indicate a line break within text content.

   A proxy or gateway from HTTP to a strict MIME environment ought to
   translate all line breaks within the text media types described in
   Section 3.1.1.3 of this document to the RFC 2049 canonical form of
   CRLF.  Note, however, this might be complicated by the presence of a
   Content-Encoding and by the fact that HTTP allows the use of some
   charsets that do not use octets 13 and 10 to represent CR and LF,
   respectively.




Fielding & Reschke           Standards Track                   [Page 89]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Conversion will break any cryptographic checksums applied to the
   original content unless the original content is already in canonical
   form.  Therefore, the canonical form is recommended for any content
   that uses such checksums in HTTP.

A.3.  Conversion of Date Formats

   HTTP/1.1 uses a restricted set of date formats (Section 7.1.1.1) to
   simplify the process of date comparison.  Proxies and gateways from
   other protocols ought to ensure that any Date header field present in
   a message conforms to one of the HTTP/1.1 formats and rewrite the
   date if necessary.

A.4.  Conversion of Content-Encoding

   MIME does not include any concept equivalent to HTTP/1.1's
   Content-Encoding header field.  Since this acts as a modifier on the
   media type, proxies and gateways from HTTP to MIME-compliant
   protocols ought to either change the value of the Content-Type header
   field or decode the representation before forwarding the message.
   (Some experimental applications of Content-Type for Internet mail
   have used a media-type parameter of ";conversions=<content-coding>"
   to perform a function equivalent to Content-Encoding.  However, this
   parameter is not part of the MIME standards).

A.5.  Conversion of Content-Transfer-Encoding

   HTTP does not use the Content-Transfer-Encoding field of MIME.
   Proxies and gateways from MIME-compliant protocols to HTTP need to
   remove any Content-Transfer-Encoding prior to delivering the response
   message to an HTTP client.

   Proxies and gateways from HTTP to MIME-compliant protocols are
   responsible for ensuring that the message is in the correct format
   and encoding for safe transport on that protocol, where "safe
   transport" is defined by the limitations of the protocol being used.
   Such a proxy or gateway ought to transform and label the data with an
   appropriate Content-Transfer-Encoding if doing so will improve the
   likelihood of safe transport over the destination protocol.

A.6.  MHTML and Line Length Limitations

   HTTP implementations that share code with MHTML [RFC2557]
   implementations need to be aware of MIME line length limitations.
   Since HTTP does not have this limitation, HTTP does not fold long
   lines.  MHTML messages being transported by HTTP follow all
   conventions of MHTML, including line length limitations and folding,
   canonicalization, etc., since HTTP transfers message-bodies as



Fielding & Reschke           Standards Track                   [Page 90]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   payload and, aside from the "multipart/byteranges" type (Appendix A
   of [RFC7233]), does not interpret the content or any MIME header
   lines that might be contained therein.

Appendix B.  Changes from RFC 2616

   The primary changes in this revision have been editorial in nature:
   extracting the messaging syntax and partitioning HTTP semantics into
   separate documents for the core features, conditional requests,
   partial requests, caching, and authentication.  The conformance
   language has been revised to clearly target requirements and the
   terminology has been improved to distinguish payload from
   representations and representations from resources.

   A new requirement has been added that semantics embedded in a URI be
   disabled when those semantics are inconsistent with the request
   method, since this is a common cause of interoperability failure.
   (Section 2)

   An algorithm has been added for determining if a payload is
   associated with a specific identifier.  (Section 3.1.4.1)

   The default charset of ISO-8859-1 for text media types has been
   removed; the default is now whatever the media type definition says.
   Likewise, special treatment of ISO-8859-1 has been removed from the
   Accept-Charset header field.  (Section 3.1.1.3 and Section 5.3.3)

   The definition of Content-Location has been changed to no longer
   affect the base URI for resolving relative URI references, due to
   poor implementation support and the undesirable effect of potentially
   breaking relative links in content-negotiated resources.
   (Section 3.1.4.2)

   To be consistent with the method-neutral parsing algorithm of
   [RFC7230], the definition of GET has been relaxed so that requests
   can have a body, even though a body has no meaning for GET.
   (Section 4.3.1)

   Servers are no longer required to handle all Content-* header fields
   and use of Content-Range has been explicitly banned in PUT requests.
   (Section 4.3.4)

   Definition of the CONNECT method has been moved from [RFC2817] to
   this specification.  (Section 4.3.6)

   The OPTIONS and TRACE request methods have been defined as being
   safe.  (Section 4.3.7 and Section 4.3.8)




Fielding & Reschke           Standards Track                   [Page 91]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   The Expect header field's extension mechanism has been removed due to
   widely-deployed broken implementations.  (Section 5.1.1)

   The Max-Forwards header field has been restricted to the OPTIONS and
   TRACE methods; previously, extension methods could have used it as
   well.  (Section 5.1.2)

   The "about:blank" URI has been suggested as a value for the Referer
   header field when no referring URI is applicable, which distinguishes
   that case from others where the Referer field is not sent or has been
   removed.  (Section 5.5.2)

   The following status codes are now cacheable (that is, they can be
   stored and reused by a cache without explicit freshness information
   present): 204, 404, 405, 414, 501.  (Section 6)

   The 201 (Created) status description has been changed to allow for
   the possibility that more than one resource has been created.
   (Section 6.3.2)

   The definition of 203 (Non-Authoritative Information) has been
   broadened to include cases of payload transformations as well.
   (Section 6.3.4)

   The set of request methods that are safe to automatically redirect is
   no longer closed; user agents are able to make that determination
   based upon the request method semantics.  The redirect status codes
   301, 302, and 307 no longer have normative requirements on response
   payloads and user interaction.  (Section 6.4)

   The status codes 301 and 302 have been changed to allow user agents
   to rewrite the method from POST to GET.  (Sections 6.4.2 and 6.4.3)

   The description of the 303 (See Other) status code has been changed
   to allow it to be cached if explicit freshness information is given,
   and a specific definition has been added for a 303 response to GET.
   (Section 6.4.4)

   The 305 (Use Proxy) status code has been deprecated due to security
   concerns regarding in-band configuration of a proxy.  (Section 6.4.5)

   The 400 (Bad Request) status code has been relaxed so that it isn't
   limited to syntax errors.  (Section 6.5.1)

   The 426 (Upgrade Required) status code has been incorporated from
   [RFC2817].  (Section 6.5.15)





Fielding & Reschke           Standards Track                   [Page 92]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   The target of requirements on HTTP-date and the Date header field
   have been reduced to those systems generating the date, rather than
   all systems sending a date.  (Section 7.1.1)

   The syntax of the Location header field has been changed to allow all
   URI references, including relative references and fragments, along
   with some clarifications as to when use of fragments would not be
   appropriate.  (Section 7.1.2)

   Allow has been reclassified as a response header field, removing the
   option to specify it in a PUT request.  Requirements relating to the
   content of Allow have been relaxed; correspondingly, clients are not
   required to always trust its value.  (Section 7.4.1)

   A Method Registry has been defined.  (Section 8.1)

   The Status Code Registry has been redefined by this specification;
   previously, it was defined in Section 7.1 of [RFC2817].
   (Section 8.2)

   Registration of content codings has been changed to require IETF
   Review.  (Section 8.4)

   The Content-Disposition header field has been removed since it is now
   defined by [RFC6266].

   The Content-MD5 header field has been removed because it was
   inconsistently implemented with respect to partial responses.

Appendix C.  Imported ABNF

   The following core rules are included by reference, as defined in
   Appendix B.1 of [RFC5234]: ALPHA (letters), CR (carriage return),
   CRLF (CR LF), CTL (controls), DIGIT (decimal 0-9), DQUOTE (double
   quote), HEXDIG (hexadecimal 0-9/A-F/a-f), HTAB (horizontal tab), LF
   (line feed), OCTET (any 8-bit sequence of data), SP (space), and
   VCHAR (any visible US-ASCII character).

   The rules below are defined in [RFC7230]:

     BWS           = <BWS, see [RFC7230], Section 3.2.3>
     OWS           = <OWS, see [RFC7230], Section 3.2.3>
     RWS           = <RWS, see [RFC7230], Section 3.2.3>
     URI-reference = <URI-reference, see [RFC7230], Section 2.7>
     absolute-URI  = <absolute-URI, see [RFC7230], Section 2.7>
     comment       = <comment, see [RFC7230], Section 3.2.6>
     field-name    = <comment, see [RFC7230], Section 3.2>
     partial-URI   = <partial-URI, see [RFC7230], Section 2.7>



Fielding & Reschke           Standards Track                   [Page 93]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


     quoted-string = <quoted-string, see [RFC7230], Section 3.2.6>
     token         = <token, see [RFC7230], Section 3.2.6>

Appendix D.  Collected ABNF

   In the collected ABNF below, list rules are expanded as per Section
   1.2 of [RFC7230].

   Accept = [ ( "," / ( media-range [ accept-params ] ) ) *( OWS "," [
    OWS ( media-range [ accept-params ] ) ] ) ]
   Accept-Charset = *( "," OWS ) ( ( charset / "*" ) [ weight ] ) *( OWS
    "," [ OWS ( ( charset / "*" ) [ weight ] ) ] )
   Accept-Encoding = [ ( "," / ( codings [ weight ] ) ) *( OWS "," [ OWS
    ( codings [ weight ] ) ] ) ]
   Accept-Language = *( "," OWS ) ( language-range [ weight ] ) *( OWS
    "," [ OWS ( language-range [ weight ] ) ] )
   Allow = [ ( "," / method ) *( OWS "," [ OWS method ] ) ]

   BWS = <BWS, see [RFC7230], Section 3.2.3>

   Content-Encoding = *( "," OWS ) content-coding *( OWS "," [ OWS
    content-coding ] )
   Content-Language = *( "," OWS ) language-tag *( OWS "," [ OWS
    language-tag ] )
   Content-Location = absolute-URI / partial-URI
   Content-Type = media-type

   Date = HTTP-date

   Expect = "100-continue"

   From = mailbox

   GMT = %x47.4D.54 ; GMT

   HTTP-date = IMF-fixdate / obs-date

   IMF-fixdate = day-name "," SP date1 SP time-of-day SP GMT

   Location = URI-reference

   Max-Forwards = 1*DIGIT

   OWS = <OWS, see [RFC7230], Section 3.2.3>

   RWS = <RWS, see [RFC7230], Section 3.2.3>
   Referer = absolute-URI / partial-URI
   Retry-After = HTTP-date / delay-seconds



Fielding & Reschke           Standards Track                   [Page 94]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   Server = product *( RWS ( product / comment ) )

   URI-reference = <URI-reference, see [RFC7230], Section 2.7>
   User-Agent = product *( RWS ( product / comment ) )

   Vary = "*" / ( *( "," OWS ) field-name *( OWS "," [ OWS field-name ]
    ) )

   absolute-URI = <absolute-URI, see [RFC7230], Section 2.7>
   accept-ext = OWS ";" OWS token [ "=" ( token / quoted-string ) ]
   accept-params = weight *accept-ext
   asctime-date = day-name SP date3 SP time-of-day SP year

   charset = token
   codings = content-coding / "identity" / "*"
   comment = <comment, see [RFC7230], Section 3.2.6>
   content-coding = token

   date1 = day SP month SP year
   date2 = day "-" month "-" 2DIGIT
   date3 = month SP ( 2DIGIT / ( SP DIGIT ) )
   day = 2DIGIT
   day-name = %x4D.6F.6E ; Mon
    / %x54.75.65 ; Tue
    / %x57.65.64 ; Wed
    / %x54.68.75 ; Thu
    / %x46.72.69 ; Fri
    / %x53.61.74 ; Sat
    / %x53.75.6E ; Sun
   day-name-l = %x4D.6F.6E.64.61.79 ; Monday
    / %x54.75.65.73.64.61.79 ; Tuesday
    / %x57.65.64.6E.65.73.64.61.79 ; Wednesday
    / %x54.68.75.72.73.64.61.79 ; Thursday
    / %x46.72.69.64.61.79 ; Friday
    / %x53.61.74.75.72.64.61.79 ; Saturday
    / %x53.75.6E.64.61.79 ; Sunday
   delay-seconds = 1*DIGIT

   field-name = <comment, see [RFC7230], Section 3.2>

   hour = 2DIGIT

   language-range = <language-range, see [RFC4647], Section 2.1>
   language-tag = <Language-Tag, see [RFC5646], Section 2.1>

   mailbox = <mailbox, see [RFC5322], Section 3.4>
   media-range = ( "*/*" / ( type "/*" ) / ( type "/" subtype ) ) *( OWS
    ";" OWS parameter )



Fielding & Reschke           Standards Track                   [Page 95]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   media-type = type "/" subtype *( OWS ";" OWS parameter )
   method = token
   minute = 2DIGIT
   month = %x4A.61.6E ; Jan
    / %x46.65.62 ; Feb
    / %x4D.61.72 ; Mar
    / %x41.70.72 ; Apr
    / %x4D.61.79 ; May
    / %x4A.75.6E ; Jun
    / %x4A.75.6C ; Jul
    / %x41.75.67 ; Aug
    / %x53.65.70 ; Sep
    / %x4F.63.74 ; Oct
    / %x4E.6F.76 ; Nov
    / %x44.65.63 ; Dec

   obs-date = rfc850-date / asctime-date

   parameter = token "=" ( token / quoted-string )
   partial-URI = <partial-URI, see [RFC7230], Section 2.7>
   product = token [ "/" product-version ]
   product-version = token
   quoted-string = <quoted-string, see [RFC7230], Section 3.2.6>
   qvalue = ( "0" [ "." *3DIGIT ] ) / ( "1" [ "." *3"0" ] )

   rfc850-date = day-name-l "," SP date2 SP time-of-day SP GMT

   second = 2DIGIT
   subtype = token

   time-of-day = hour ":" minute ":" second
   token = <token, see [RFC7230], Section 3.2.6>
   type = token

   weight = OWS ";" OWS "q=" qvalue

   year = 4DIGIT














Fielding & Reschke           Standards Track                   [Page 96]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


Index

   1
      1xx Informational (status code class)  50

   2
      2xx Successful (status code class)  51

   3
      3xx Redirection (status code class)  54

   4
      4xx Client Error (status code class)  58

   5
      5xx Server Error (status code class)  62

   1
      100 Continue (status code)  50
      100-continue (expect value)  34
      101 Switching Protocols (status code)  50

   2
      200 OK (status code)  51
      201 Created (status code)  52
      202 Accepted (status code)  52
      203 Non-Authoritative Information (status code)  52
      204 No Content (status code)  53
      205 Reset Content (status code)  53

   3
      300 Multiple Choices (status code)  55
      301 Moved Permanently (status code)  56
      302 Found (status code)  56
      303 See Other (status code)  57
      305 Use Proxy (status code)  58
      306 (Unused) (status code)  58
      307 Temporary Redirect (status code)  58

   4
      400 Bad Request (status code)  58
      402 Payment Required (status code)  59
      403 Forbidden (status code)  59
      404 Not Found (status code)  59
      405 Method Not Allowed (status code)  59
      406 Not Acceptable (status code)  59
      408 Request Timeout (status code)  60
      409 Conflict (status code)  60



Fielding & Reschke           Standards Track                   [Page 97]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


      410 Gone (status code)  60
      411 Length Required (status code)  61
      413 Payload Too Large (status code)  61
      414 URI Too Long (status code)  61
      415 Unsupported Media Type (status code)  62
      417 Expectation Failed (status code)  62
      426 Upgrade Required (status code)  62

   5
      500 Internal Server Error (status code)  63
      501 Not Implemented (status code)  63
      502 Bad Gateway (status code)  63
      503 Service Unavailable (status code)  63
      504 Gateway Timeout (status code)  63
      505 HTTP Version Not Supported (status code)  64

   A
      Accept header field  38
      Accept-Charset header field  40
      Accept-Encoding header field  41
      Accept-Language header field  42
      Allow header field  72

   C
      cacheable  24
      compress (content coding)  11
      conditional request  36
      CONNECT method  30
      content coding  11
      content negotiation  6
      Content-Encoding header field  12
      Content-Language header field  13
      Content-Location header field  15
      Content-Transfer-Encoding header field  89
      Content-Type header field  10

   D
      Date header field  67
      deflate (content coding)  11
      DELETE method  29

   E
      Expect header field  34

   F
      From header field  44





Fielding & Reschke           Standards Track                   [Page 98]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   G
      GET method  24
      Grammar
         Accept  38
         Accept-Charset  40
         Accept-Encoding  41
         accept-ext  38
         Accept-Language  42
         accept-params  38
         Allow  72
         asctime-date  66
         charset  9
         codings  41
         content-coding  11
         Content-Encoding  12
         Content-Language  13
         Content-Location  15
         Content-Type  10
         Date  67
         date1  65
         day  65
         day-name  65
         day-name-l  65
         delay-seconds  69
         Expect  34
         From  44
         GMT  65
         hour  65
         HTTP-date  65
         IMF-fixdate  65
         language-range  42
         language-tag  13
         Location  68
         Max-Forwards  36
         media-range  38
         media-type  8
         method  21
         minute  65
         month  65
         obs-date  66
         parameter  8
         product  46
         product-version  46
         qvalue  38
         Referer  45
         Retry-After  69
         rfc850-date  66
         second  65



Fielding & Reschke           Standards Track                   [Page 99]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


         Server  73
         subtype  8
         time-of-day  65
         type  8
         User-Agent  46
         Vary  70
         weight  38
         year  65
      gzip (content coding)  11

   H
      HEAD method  25

   I
      idempotent  23

   L
      Location header field  68

   M
      Max-Forwards header field  36
      MIME-Version header field  89

   O
      OPTIONS method  31

   P
      payload  17
      POST method  25
      PUT method  26

   R
      Referer header field  45
      representation  7
      Retry-After header field  69

   S
      safe  22
      selected representation  7, 71
      Server header field  73
      Status Codes Classes
         1xx Informational  50
         2xx Successful  51
         3xx Redirection  54
         4xx Client Error  58
         5xx Server Error  62





Fielding & Reschke           Standards Track                  [Page 100]

RFC 7231             HTTP/1.1 Semantics and Content            June 2014


   T
      TRACE method  32

   U
      User-Agent header field  46

   V
      Vary header field  70

   X
      x-compress (content coding)  11
      x-gzip (content coding)  11

Authors' Addresses

   Roy T. Fielding (editor)
   Adobe Systems Incorporated
   345 Park Ave
   San Jose, CA  95110
   USA

   EMail: fielding@gbiv.com
   URI:   http://roy.gbiv.com/


   Julian F. Reschke (editor)
   greenbytes GmbH
   Hafenweg 16
   Muenster, NW  48155
   Germany

   EMail: julian.reschke@greenbytes.de
   URI:   http://greenbytes.de/tech/webdav/


















Fielding & Reschke           Standards Track                  [Page 101]




