[TOC]

PHP+JAVA实现RSA互通加密解密 - https://www.jianshu.com/p/a79c78e17f6f
DEMO链接：https://pan.baidu.com/s/153fi8ks3uk9_l5b9_gcRbQ 
提取码：fepm 


# 非对称加密体系的系统详解
- [ASN.1 key structures in DER and PEM](https://tls.mbed.org/kb/cryptography/asn1-key-structures-in-der-and-pem)
- [ASN.1 JavaScript decoder](https://lapo.it/asn1js/)
- [RFC 6025 - ASN.1 Translation](https://www.rfc-editor.org/rfc/rfc6025.html)
- [RFC 1421 - Privacy Enhance Mail Part I: Message Encryption and Authentication Procedures](https://www.rfc-editor.org/rfc/rfc1421.html)
- [RFC 2315 - Privacy Enhance Mail](https://www.rfc-editor.org/rfc/rfc2315.html)
- [RFC 2986 - Certificate Signing Request](https://www.rfc-editor.org/info/rfc2986)
- [RSA算法原理（一）阮一峰](http://www.ruanyifeng.com/blog/2013/06/rsa_algorithm_part_one.html)
- [RSA算法原理（二）阮一峰](http://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html)
- [数字签名是什么？](http://www.ruanyifeng.com/blog/2011/08/what_is_a_digital_signature.html)
- [What is a Digital Signature? An introduction to Digital Signatures, by David Youd](http://www.youdzone.com/signature.html)

RSA 加密算法是一种非对称加密算法 Symmetric-key Algorithm。在公开密钥加密和电子商业中 RSA 被广泛使用。RSA 是 1977年由麻省理工学院的罗纳德·李维斯特 Ron Rivest 、阿迪·萨莫尔 Adi Shamir 和伦纳德·阿德曼 Leonard Adleman 一起设计的，RSA就是他们三人姓氏开头字母拼在一起组成的。非对称指的是加密解密用的是不同的一组密钥，密钥生成的数学原理就是大数质数的分解，这就是与传统的**对称加密**的最大区别。

如果两个正整数，除了1以外，没有其他公因子，我们就称这两个数是**互质关系**Coprime。比如，15和32没有公因子，所以它们是互质关系。这说明，不是质数也可以构成互质关系。

非对称加密算法的实现使得密码可以明文传输而没有泄密风险，基本原理是：

	+ A与B双方生成各自的公钥私钥
	+ 双方交换公钥，可以明文传输
	+ 各方用对方提供的公钥加密消息后发送给对方，这个密文只有拥有密钥方才能解开
	+ 只要密钥不泄漏可保公钥明文传输的安全性

RSA 加密或签名后的结果是不可读的二进制，使用时经常会转为 BASE64 码再传输。

RSA 加密时，对要加密数据的大小有限制，最大不大于密钥长度。例如在使用 1024 bit 的密钥时（genrsa -out rsa_private_key.pem 1024），最大可以加密 1024/8=128 Bytes 的数据。数据大于 128 Bytes 时，需要对数据进行分组加密（如果数据超限，加解密时会失败，openssl 函数会返回 false），分组加密后的加密串拼接成一个字符串后发送给客户端。

为了保证每次加密的结果都不同，RSA 加密时会在待加密数据后拼接一个随机字符串，再进行加密。不同的填充方式 Padding 表示这个字符串的不同长度，在对超限数据进行分组后，会按照这个 Padding 指定的长度填入随机字符串。例如如果 Padding 填充方式使用默认的 OPENSSL_PKCS1_PADDING（需要占用 11 个字节用于填充），那么明文长度最多只能就是 128-11=117 Bytes。

一般默认使用 OPENSSL_PKCS1_PADDING。PHP 支持的 Padding 有 OPENSSL_PKCS1_PADDING、OPENSSL_SSLV23_PADDING、OPENSSL_PKCS1_OAEP_PADDING 和 OPENSSL_NO_PADDING。

接收方解密时也需要分组。将加密后的原始二进制数据（对于经过 BASE64 的数据，需要解码），每 128 Bytes 分为一组，然后再进行解密。解密后，根据 Padding 的长度丢弃随机字符串，把得到的原字符串拼接起来，就得到原始报文。

在非对称加密系统出现之前，所有加密和解密使用同样规则，这些规则相当于密钥，称为对称加密算法（Symmetric-key algorithm）。其中又以高级加密标准为代表（英语：Advanced Encryption Standard，缩写：AES），在密码学中又称Rijndael加密法，是美国联邦政府采用的一种区块加密标准。这个标准用来替代原先的DES，已经被多方分析且广为全世界所使用。


基于非对称加密体系的系统详解，加密/解密/签名/证书，假设 A、B、C 三方：

- A 有一套密钥对，一把公钥，一把私钥。
- A 把公钥告诉他的朋友们，B 、 C 等。
- C 给 A 写一封保密的信，写完后用 A 的公钥加密，就可以达到保密的效果。
- A 收信后用私钥解密，就看到了信件内容。只要 A 的私钥不泄露，这封信就是安全的，别人无法解密。
- A 给 C 回信，决定采用数字签名，他写完后先用 Hash 函数生成信件的摘要 digest。
- A 使用私钥对这个摘要加密，生成数字签名 signature。
- A 将这个签名，附在信件下面，一起发给 C 。
- C 收信后，取下数字签名，用 A 的公钥解密，得到信件附带的摘要。
- C 对收到的信件生成 Hash 摘要，和附带摘要比较一致就表明内容没有被修改，是 A 的私钥签发的，私钥安全就可以确定是 A 发出的。
- 威胁来了，B 想欺骗 C ，他偷偷使用了 C 的电脑，用自己的公钥换走了 A 的公钥。B 就可以冒充 A ，用自己的私钥做成数字签名写信给 C。
- 解决办法就是数字证书，要求 A 去证书中心 CA - Certificate Authority 为公钥做认证。证书中心用自己的私钥，对 A 的公钥和一些相关信息一起加密生成数字证书 Digital Certificate。
- A 拿到数字证书以后，就可以放心了。以后再给 C 写信，只要在签名的同时，再附上数字证书就行了。
- C 收信后再用 CA 的公钥解开数字证书，就可以拿到 A 真实的公钥了，然后就能证明数字签名是否真的是 A 签的。


因为任何人都可以生成自己的公钥私钥对，所以为了防止有人散布伪造的公钥骗取信任，就需要一个可靠的第三方机构来生成经过认证的公钥私钥对。目前，世界上最主要的数字服务认证商是位于美国加州的 Verisign 公司，它的主要业务就是分发 RSA 数字证书。

CA 机构是社会默许约定的可信任机构担任，CA 可以发展下属机构，因此就存在一条信任链，最顶的就是根证书机构。因为 CA 是可信任的机构，那么 CA 为某方签发的证书也就是可信任的。

数字证书可以理解为经过 CA 认证的公钥，私钥一般情况都是由证书持有者负责保管。

数字证书由证书认证机构 CA 对证书申请者真实身份验证之后，用 CA 的根证书对申请人的一些基本信息以及申请人的公钥进行签名，相当于加盖发证书机构的公章后形成的一个数字文件。

数字证书和公钥一样是公开的，CA 完成签发证书后，会将证书发布在 CA 的证书库，目录服务器中，任何人都可以查询和下载。    


证书封装三种常用的证书编码格式 X.509、PKCS#12、PKCS#7。PKCS 是公钥加密标准 Public-Key Cryptography Standards 的缩写。

X.509 证书是最经常使用的证书，它没有私钥信息，包含公钥、加密算法，身份信息，证书机构签名或自签名，是可以公开进行发布的，所以 X.509 证书对象一般都不需要加密。

PKCS#12 证书不同于 X.509 证书，它可以包含一个或多个证书，并且还可以包含证书对应的私钥。PKCS#12 的私钥是经过加密的，密钥由用户提供的口令产生。所以，无论在使用 PKCS#12 证书的时候一般会要用用户输入密钥口令。PKCS#12 证书文件在 Windwos 和 Mozzila 中支持的后缀名是 p12 或者 pfx，如果要在 IE 或者 Mozzila 中正确使用自己的证书，那么一般来说都要求转换成包含公钥和私钥的 PKCS#12 证书忖入到相关软件中。

PKCS#7 可以封装一个或多个 X.509 证书或者非常用的 PKCS#6 证书、相关证书链上的 CA 证书，并且可以包含证书吊销列表 CRL - Certificate Revocation List。PKCS#7 不包含私钥信息。PKCS#7 可以将验证证书需要的整个证书上的证书都包含进来，从而方便证书的发布和正确使用。这样就可以直接把PKCS#7证书发给验证方验证，免去了把以上的验证内容一个一个发给接书方的烦琐了。PKCS#7 文件在 Windows 平台的合法后缀名是 p7b。  

PKCS#8 标准是一个非常简单的标准，它主要用于封装私钥和其他相关的属性信息。一般来说，PKCS#8 格式的私钥都是被加密的，支持 PKCS#5 和 PKCS#12 标准定义的算法，当然，私钥也可以不加密。PKCS#8 标准一方面可以增强私钥的安全性，另一方面也为用户提供了一种简单的确立信任关系的方式，这主要是基于私钥特别名称和最高层可信者的权威公钥等属性信息。

OpenSSL 提供的经过 PEM 编码的 PKCS#8 标准的文件，分为加密和非加密的两种方式。加密的 PKCS#8 密钥标识如下：

	——BEGIN ENCRYPTED PRIVATE KEY——
	
	——END ENCRYPTED PRIVATE KEY——

非加密的PKCS#8密钥标识如下：

	——BEGIN PRIVATE KEY——

	——END PRIVATE KEY——


证书格式 x.509 standard 包含的信息内容格式：

- Certificate
	- Version Number
	- Serial Number
	- Signature Algorithm ID
	- Issuer Name 
	- Validity period
		- Not Before
		- Not After
	- Subject name
	- Subject Public Key Info
		- Public Key Algorithm
		- Subject Public Key
	- Issuer Unique Identifier (optional)
	- Subject Unique Identifier (optional)
	- Extensions (optional)
		- ...
- Certificate Signature Algorithm
- Certificate Signature

存储证书的文件扩展名有 .cert .cer .crt 等，常见 Der 与 Pem 文件格式。

PEM 文件是 Privacy Enhancement for Internet Electronic Mail 的缩写，是 base64 编码格式的文件，主要是 Windows 中使用，参考 RFC 1421 ~ RFC 1424。该文件包含了公钥，机构证书文件 /etc/ssl/certs，也可能包含整个证书链（公钥、私钥和根证书）。

DER 格式相当于 PEM 格式的二进制版本，全称为 Distinguished Encoding Rules，是著名的 ASN.1（Abstract Syntax Notation One）编码规则之一。

cert文件中采用的asn1编码是一层一层进行编码的，asn1每次解析一个编码组，采用递归解析是一个不错的选择。 二进制编码元件格式：类型，长度，数据，可选结束符。

	+-------------------+-----------------+-----------------+------------------------+
	| Identifier octets | Length octets   | Contents octets | End-of-contents octets |
	| Type              | Length          | Value           | (optional)             |
	+-------------------+-----------------+-----------------+------------------------+

Length可能是1个字节，也可能是81+1字节，82+2字节，83+3字节，84+4字节，规则如下：

	any length from 0 up to 0x7F is encoded as one byte in 00..7F;
	any higher length up to 0xFF is encoded as prefix 81 and one byte;
	any higher length up to 0xFFFF is encoded as prefix 82 and two bytes;
	any higher length up to 0xFFFFFF is encoded as prefix 83 and three bytes;
	any higher length up to 0xFFFFFFFF is encoded as prefix 84 and four bytes;

例如：下面四个字节编码字符的解析结果

	13 02 43 4E

	13    -- Type = PrintableString
	02    -- Length = 2
	43 4E -- Data = CN


CSR 文件是 Certificate Signing Request 的缩写，即证书签名请求文件。是证书申请者在申请数字证书时由加密服务提供者 CSP 在生成私钥的同时也生成证书请求文件，证书申请者只要把 CSR 文件提交给证书颁发机构后，证书颁发机构使用其根证书私钥签名就生成了证书公钥文件，也就是颁发给用户的证书。 文件中通常包括主题、组织、状态、公钥等相关信息。实际格式为 PKCS10，在 RFC 2986 中定义。


KEY 文件是一个只包含私钥的 PEM 格式的文件。在Apache相关应用中，通常被存放在 /etc/ssl/private 目录下。这些证书的正确性相当重要，如果有错误，一些应用将拒绝加载这些证书文件。

PKCS 是 Public-Key Cryptography Standards 的缩写，扩展名有几种 .pkcs12 .pfx .p12。这是加密过的，包含了公钥和私钥对的文件格式。不像 PEM 文件，该文件格式是完全加密的。
OpenSSL 可以将该文件转换为包含公钥和私钥的 PEM 文件：

	openssl pkcs12 -in file-to-convert.p12 -out converted-file.pem -nodes

.p7b .keystore
在RFC 2315中定义，PKCS 7，这种格式被Windows用来进行证书交换。Java原生能够理解这种格式，并且常用.keystore作为后缀。不像.pem方式的证书，这种格式定义了方式去包含证书路径。

.crl
CRL是Certificate revocation list的缩写。
证书撤销列表文件。证书机构在证书失效前，采用这种文件格式去撤销认证。有时你可以从CA的网站上下载它们。

下面 Python 代码做 der/pem 格式的 scr 和 key 文件的解析：

	#!/usr/bin/python
	#(Owed by: http://blog.csdn.net/chunyexiyu)
	import asn1
	import sys
	import base64
	import re
	 
	if (len(sys.argv) != 3):
	    print("Useage: {} certfile pem/der)".format(sys.argv[0]))
	    sys.exit(1)
	 
	def getTagDesc(tag):
	    if (tag.cls == 0x80):
	        return asn1.Classes(tag.cls).name + "[" + str(tag.nr) + "]"
	    try:
	        return asn1.Numbers(tag.nr).name + str(tag)
	    except:
	        return asn1.Types(tag.typ).name + str(tag)
	 
	der = "" 
	if (len(sys.argv) == 3 and sys.argv[2] == 'der'):
	    fd = open(sys.argv[1], 'rb')
	    der = fd.read()
	    fd.close()
	else:
	    fd = open(sys.argv[1])
	    pem = fd.read()
	    fd.close()
	    pem = re.sub('[-]+[A-Z ]+[-]+\n','',pem) 
	    der = base64.b64decode(pem)
	 
	def analyseAsn1(der, tab=''):
	    decoder = asn1.Decoder()
	    decoder.start(der)
	    while(True):
	        if (decoder.eof()):
	            break;
	        
	        tag = decoder.peek()
	        if (tag.cls == 0x80): #context to octstring 
	            tag = asn1.Tag(4, tag.typ, tag.cls)
	            tagReal, value = decoder.read(tag.nr)
	        else:
	            tagReal, value = decoder.read()
	 
	        if (tag is None):
	            break;
	 
	        print('\n{}{}:'.format(tab, getTagDesc(tagReal)), end='')
	        isSubDecode = False;
	        if (tag.typ != asn1.Types.Primitive.value):     #constructed
	            isSubDecode = analyseAsn1(value, tab + "    ")
	        elif (tag.cls == 0):        #Universal
	            if (tag.nr == 4 and value[0] == 0x30):      #ocstring
	                isSubDecode = analyseAsn1(value, tab + "    ")
	            elif (tag.nr == 3 and value[0:2] == b'\x00\x30'):     #binary string
	                isSubDecode = analyseAsn1(value[1:], tab + "    ")
	 
	        if (not isSubDecode):
	            if (tag.nr in (3,4)):   #binarystring, octstring or big integer
	                print('0x{}'.format(value.hex()), end='')
	            elif (tag.nr == 2 and value.bit_length() > 64): #int 
	                print('0x{}'.format(asn1.Encoder._encode_integer(value).hex()), end='')
	            elif (tag.nr == 0x1e):  #unicodestring
	                print(value.decode('utf8'), end='')
	            elif (tag.nr == 0):
	                print('0x{}'.format(value.hex()), end='')
	            else:
	                print(value if (value) else '', end='')
	    return True;
	 
	analyseAsn1(der)
	print("")


# SSL & TLS
[TLS/SSL wrapper for socket objects](https://docs.python.org/3/library/ssl.html)
[RFC 4253 - The Secure Shell (SSH) Transport Layer Protocol](https://www.rfc-editor.org/info/rfc4253)
[RFC 6101 - The Secure Sockets Layer (SSL) Protocol V3.0](https://www.rfc-editor.org/rfc/rfc6101.html)
[RFC 4336 - The Transport Layer Security (TLS) Protocol V 1.1](https://www.rfc-editor.org/rfc/rfc4346.html)
[RFC 5246 - The Transport Layer Security (TLS) Protocol V 1.2](https://tools.ietf.org/html/rfc5246)
[RFC 8446 - The Transport Layer Security (TLS) Protocol V 1.3](https://tools.ietf.org/html/rfc8446)
[SSL/TLS协议运行机制的概述](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
《SSL and TLS Essentials》 Wiley&Son 2000 年版

SSL - Secure Sockets Layer 叫做安全套接层，它是在上世纪90年代中期，由网景公司设计的，网景公司不光发明了 SSL，还发明了很多 Web 的基础设施——比如 CSS 样式表和 JavaScript 脚本。SSL 加入，使得互联网上使用明文的 HTTP 协议具有非常高的安全性，原先明文传输条件下存在的缺点得到了抑制，比如传输内容会被嗅探偷窥和篡改。

到了 1999 年，SSL 因为应用广泛已经成为互联网上的事实标准，IETF 就在那年把 SSL 标准化改名称为 TLS - Transport Layer Security 传输层安全协议。很多相关的文章都把这两者并列称呼 SSL/TLS，因为这两者可以视作同一个东西的不同阶段，TLS 比 SSL 要先进。

SSL 协议基于 TCP/IP 协议为各种应用层协议的数据通讯提供安全支持，SSL 协议主要可分为两层，一是为高层协议提供数据封装、压缩、加密等基本功能的支持的记录协议 Record Protocol。二是建立在记录协议之上的握手协议 Handshake Protocol，用于在实际的数据传输开始前认证通讯双方身份、协商加密算法、交换加密密钥等。

　　SSL协议提供的服务主要有：

　　1）认证用户和服务器，确保数据发送到正确的客户机和服务器；
　　2）加密数据以防止数据中途被窃取；
　　3）维护数据的完整性，确保数据在传输过程中不被改变。

　　SSL协议的主要工作流程：

　　服务器认证阶段进行公钥交换 Key Exchange Messages：

　　1）客户端向服务器发送 Client Hello 准备一个新的会话连接；
　　2）服务器根据客户的信息确定是否需要生成新的主密钥，如需要则服务器在响应客户的 Server Hello 信息时将包含生成主密钥所需的信息；
　　3）客户根据收到的服务器响应信息，产生一个主密钥，并用服务器的公开密钥加密后传给服务器；
　　4）服务器恢复该主密钥，并返回给客户一个用主密钥认证的信息，以此让客户认证服务器。

　　用户认证阶段：

在此之前，服务器已经通过了客户认证，这一阶段主要完成对客户的认证。经认证的服务器发送一个提问给客户，客户则返回（数字）签名后的提问和其公开密钥，从而向服务器提供认证。

　　从SSL 协议所提供的服务及其工作流程可以看出，SSL协议运行的基础是商家对消费者信息保密的承诺，这就有利于商家而不利于消费者。在电子商务初级阶段，由于运作电子商务的企业大多是信誉较高的大公司，因此这问题还没有充分暴露出来。但随着电子商务的发展，各中小型公司也参与进来，这样在电子支付过程中的单一认证问题就越来越突出。虽然在SSL3.0中通过数字签名和数字证书可实现浏览器和Web服务器双方的身份验证，但是SSL协议仍存在一些问题，比如，只能提供交易中客户与服务器间的双方认证，在涉及多方的电子交易中，SSL协议并不能协调各方间的安全传输和信任关系。在这种情况下，Visa和MasterCard两大信用卡公组织制定了SET协议，为网上信用卡支付提供了全球性的标准。 


TLS 安全传输层协议完整的握手过程


        Client                                               Server

        ClientHello
        + key_share             -------->
                                                  HelloRetryRequest
                                <--------               + key_share
        ClientHello
        + key_share             -------->
                                                        ServerHello
                                                        + key_share
                                              {EncryptedExtensions}
                                              {CertificateRequest*}
                                                     {Certificate*}
                                               {CertificateVerify*}
                                                         {Finished}
                                <--------       [Application Data*]
        {Certificate*}
        {CertificateVerify*}
        {Finished}              -------->
        [Application Data]      <------->        [Application Data]

             Figure 2: Message Flow for a Full Handshake with
                           Mismatched Parameters

　　安全传输层协议（TLS）用于在两个通信应用程序之间提供保密性和数据完整性。该协议也和 SSL 一样由两层组成记录协议 TLS Record 和握手协议 TLS Handshake，握手协议基于记录协议之上工作。

　　TLS 记录协议提供的连接安全性具有两个基本特性：   

私有――对称加密用以数据加密（DES 、RC4 等）。对称加密所产生的密钥对每个连接都是唯一的，且此密钥基于另一个协议（如握手协议）协商。记录协议也可以不加密使用。   
可靠――信息传输包括使用密钥的MAC进行信息完整性检查。安全哈希功能（ SHA、MD5 等）用于 MAC 计算。记录协议在没有 MAC 的情况下也能操作，但一般只能用于这种模式，即有另一个协议正在使用记录协议传输协商安全参数。 
　　TLS记录协议用于封装各种高层协议。作为这种封装协议之一的握手协议允许服务器与客户机在应用程序协议传输和接收其第一个数据字节前彼此之间相互认证，协商加密算法和加密密钥。 TLS 握手协议提供的连接安全具有三个基本属性：   

- 可以使用非对称的，或公共密钥的密码术来认证对等方的身份。该认证是可选的，但至少需要一个结点方。
- 共享加密密钥的协商是安全的。对偷窃者来说协商加密是难以获得的。此外经过认证过的连接不能获得加密，即使是进入连接中间的攻击者也不能。
- 协商是可靠的。没有经过通信方成员的检测，任何攻击者都不能修改通信协商。 

　　TLS的最大优势就在于：TLS是独立于应用协议。高层协议可以透明地分布在TLS协议上面。然而， TLS 标准并没有规定应用程序如何在TLS上增加安全性；它把如何启动 TLS 握手协议以及如何解释交换的认证证书的决定权留给协议的设计者和实施者来判断。 

　　协议结构 

　　TLS 协议包括两个协议组――TLS记录协议和TLS握手协议――每组具有很多不同格式的信息。在此文件中我们只列出协议摘要并不作具体解析。具体内容可参照相关文档。

　　TLS记录协议是一种分层协议。每一层中的信息可能包含长度、描述和内容等字段。记录协议支持信息传输、将数据分段到可处理块、压缩数据、应用MAC 、加密以及传输结果等。对接收到的数据进行解密、校验、解压缩、重组等，然后将它们传送到高层客户机。

　　TLS连接状态指的是TLS记录协议的操作环境。它规定了压缩算法、加密算法和MAC算法。

　　TLS记录层从高层接收任意大小无空块的连续数据。密钥计算：记录协议通过算法从握手协议提供的安全参数中产生密钥、 IV 和MAC密钥。

　　TLS 握手协议由三个子协议组构成，允许对等双方在记录层的安全参数上达成一致、自我认证、例示协商安全参数、互相报告出错条件。 


　　最新版本的 TLS 是 IETF - Internet Engineering Task Force 制定的一种新的协议，它建立在 SSL 3.0 协议规范之上，是 SSL 3.0 的后续版本。但 TLS 与 SSL 3.0 之间存在着显著的差别，主要是它们所支持的加密算法不同，所以两者不能互操作。

- 版本号：TLS 记录格式与 SSL 记录格式相同，但值不同，TLS 的版本 1.0 使用的版本号为 SSLv3.1。
- 报文鉴别码 SSLv3.0 和 TLS 的 MAC 算法及 MAC 计算的范围不同，两者的安全程度是相同的。TLS 使用了 RFC-2104 定义的 HMAC 算法。SSLv3.0 使用了相似的算法，两者差别在于 SSLv3.0 填充字节与密钥之间采用的是连接运算，而 HMAC 算法采用的是异或运算。
- 伪随机函数：TLS 使用了称为PRF的伪随机函数来将密钥扩展成数据块，是更安全的方式。
- 报警代码：TLS 支持几乎所有的 SSLv3.0 报警代码，还补充定义了很多报警代码，如解密失败 decryption_failed、记录溢出 record_overflow、未知CA unknown_ca、拒绝访问 access_denied 等。
- 密文族和客户证书：SSLv3.0 和 TLS 存在少量差别，即 TLS 不支持 Fortezza 密钥交换、加密算法和客户证书。
- certificate_verify 和 finished 消息：SSLv3.0 和 TLS 在用 certificate_verify 和 finished 消息计算 MD5 和 SHA-1 散列码摘要时，计算的输入有少许差别，但安全性相当。
- 加密计算：TLS 与 SSLv3.0 在计算主密值 master secret 时采用的方式不同。
- 填充：用户数据加密之前需要增加的填充字节。SSL 填充后的数据长度要达到密文块长度的最小整数倍。而在 TLS 中，填充后的数据长度可以是密文块长度的任意整数倍，但填充的最大长度为255字节，这种方式可以防止基于对报文长度进行分析的攻击。

　　TLS 的主要目标是使 SSL 更安全，并使协议的规范更精确和完善。TLS 在 SSL v3.0 的基础上，提供了以下增强内容：

- 更安全的MAC算法
- 更严密的警报
- 灰色区域规范的更明确的定义

　　TLS对于安全性的改进

- 对于消息认证使用密钥散列法：TLS 使用消息认证代码的密钥散列法 HMAC，当记录在开放的网络如因特网上传送时，该代码确保记录不会被变更。SSLv3.0 提供键控消息认证，但 HMAC 比 SSLv3.0 使用的消息认证代码 MAC 功能更安全。
- 增强的伪随机功能 PRF 生成密钥数据。在 TLS 中 HMAC 定义 PRF 使用两种散列算法保证其安全性。如果任一算法暴露了，只要第二种算法未暴露，则数据仍然是安全的。
- 改进的已完成消息验证：TLS 和 SSLv3.0 都对两个端点提供已完成的消息，该消息认证交换的消息没有被变更。然而，TLS 将此已完成消息基于 PRF 和 HMAC 值之上，这也比 SSLv3.0 更安全。
- 一致证书处理：与 SSLv3.0 不同，TLS 试图指定必须在 TLS 之间实现交换的证书类型。
- 特定警报消息：TLS 提供更多的特定和附加警报，以指示任一会话端点检测到的问题。TLS 还对何时应该发送某些警报进行记录。


# SSH
[SSH原理简介](http://erik-2-blog.logdown.com/posts/74081-ssh-principle)

SSH - Secure Shell 是目前主流的网络安全服务技术，主要服务提供商通过 SSH 来提供安全保障的，比如 AWS 通过使用下载的私钥 private key 实现与 EC2 实例安全连接、GitHub 底层使用 SSH 通过上传的公钥 public key 实现基于 git 协议远程库管理。

要弄明白 SSH 是如何工作的，必须要熟悉现代的非对称加密算法 Symmetric-key Algorithm 体系的认识：

- SSH 如何保证客户端与服务端通行的安全
- SSH 采用什么加密协议
- SSH 是通过对称加密还是非对称加密数据在传输过程的安全
- SSH 如何保证数据完整性
- SSH 的密码认证方式和密钥认证方式分别如何实现，有何差异


对密码学基础知识和数字签名了解，可以参考阮一峰的博文

密码学笔记
数字签名是什么
SSH从安全和性能两方面综合考虑，结合使用了Public Key和Secret Key。

Public Key：非对称加密，安全，但效率低，不适合大规模进行数据的加密和解密操作
Secret Key：对称机密，高效，但安全性相对较低，Key的分发尤其不方便
特性
SSH（Secure Shell）是一个提供数据通信安全、远程登录、远程指令执行等功能的安全网络协议，由芬兰赫尔辛基大学研究员Tatu Ylönen，于1995年提出，其目的是用于替代非安全的Telnet、rsh、rexec等远程Shell协议。之后SSH发展了两个大版本SSH-1和SSH-2。

SSH的主要特性

加密：避免数据内容泄漏
通信的完整性：避免数据被篡改，以及发送或接受地址伪装
（检查数据是否被篡改，数据是否来自发送者而非攻击者） SSH-2通过MD5和SHA-1实现该功能，SSH-1使用CRC-32
认证：识别数据发送者和接收者身份 客户端验证SSH服务端的身份：防止攻击者仿冒SSH服务端身份，避免中介人攻击和重定向请求的攻击；OpenSSH通过在know-hosts中存储主机名和host key对服务端身份进行认证 服务端验证请求者身份：提供安全性较弱的用户密码方式，和安全性更强的per-user public-key signatures；此外SSH还支持与第三方安全服务系统的集成，如Kerberos等
授权：用户访问控制
Forwarding or tunneling to encrypt other TCP/IP-based sessions 可以通过SSH为Telnet、FTP等提供通信安全保障，支持三种类型的Forwarding操作：Port Forwarding；X Forwarding；Agent Forwarding
本文只涉及加密、通信完整性、认证三个方面内容。

几种不同的Key
首先，我们来了解一下SSH中几种不同的Key。

SSH结合使用了Public Key和Secret Key，Public Key用于在建立安全通道前在客户端和服务端之间传输Secret Key和进行身份认证；Secret Key则用来作为SSH会话的安全保证，对数据进行加密和解密。
名称	生命周期	创建	类型	描述
Host Key	持久化	服务端	Public Key	对服务端进行认证
User Key	持久化	用户	Public Key	对客户端（用户）进行认证
Server Key	默认为1小时	服务端	Public Key	用于对Session Key进行加密（仅SSH-1协议有，SSH-2对其进行了增强，这里Server Key作为一个概念便于在流程中进行描述）
Session Key	客户端	会话（Session）	Secret Key	用于对传输的数据进行加密
SSH处理过程
SSH处理过程可以分解成几个主要阶段：

协议协商阶段
服务端认证阶段
客户端认证阶段
数据传输阶段
每个阶段均涉及到客户端与服务端的多次交互，通过这些交互过程完成包括证书传输、算法协商、通道加密等过程。

协议协商阶段
服务端打开服务端口（默认为22），等待客户端连接
客户端发起TCP连接请求，服务端接收到该请求后，向客户端发送包括SSH协议版本信息
客户端接根据该版本信息与自己的版本，决定将要使用的SSH版本，并向服务端发送选用的SSH版本信息
服务端检查是否支持客户端的决定使用的SSH版本
至此，双方完成协议协商。如果该过程中，客户端或服务端发送SSH版本无法兼容，任何一方都可以断开连接。

服务端认证阶段
完成协议协商阶段后，客户端与服务端已经建立明文的通信通道，之后进入服务端认证阶段。

SSH协议中没有明确的服务端认证过程，而通过一系列的服务端与客户端的交互来确定服务端的身份，该过程还会完成Host Key、User Key、Session Key等在客户端与服务端之间的传输。

建立连接后，服务端向客户端发送：
Host Key：用于认证服务端的身份
Server Key：用于帮助建立安全的数据传输通道
8字节的随机数：客户端通过在下一次响应中包含该随机数，防止IP地址欺诈
服务端支持的加密算法、压缩方式和认证方式
这个时候，客户端和服务端使用Host Key、Server Key和8字节的随机数生成一个128位的MD5值，作为此次会话的session id。

客户端在接收到服务端Host Key后，会检查自己的knows host数据库中（一般为~/.ssh/know_hosts文件），是否已经包含当前服务端的Host Key，如果有则继续下一步；如果没有或包含当前服务端的其他Host Key则，有用户决定是否信任该服务端，或终止当前连接。

客户端向服务端发送session Key

出于性能考虑，SSH采用对称加密（Secret Key），对实际通信内容进行加密，即Session Key。因此Session Key的安全尤为重要，一旦Session Key泄漏给攻击者，那所有的通信数据都可能被攻击者截获。
由于当前通道还是采用明文方式，客户端采用Host Key和Server Key对Session Key进行两次加密来加强安全性。

服务端得到Session Key后，客户端和服务端就可以通过Session Key对数据进行加密解密操作，到此，双方完成安全（加密）通道的建立。 Host Key和Server Key都是Public Key（非对称加密），只有通过服务端的私钥（Private Key）才能对其解密，以得到Session Key。在正式使用安全通道前，客户端要求服务端发送使用Session Key加密的确认信息，以验证服务端的身份。 为避免Session Key的泄漏，SSH还采取了其他安全措施，Session Key仅保存在内存避免其泄漏；周期性更换Server Key，默认为1小时（SSH 2对Server Key安全进一步增强）。

客户端认证阶段
SSH提供多种客户端认证方式。

SSH-1：

Password
Public Key
Kerberos
Rhosts && RhostsRSA
TIS
SSH-2：

Password
Public Key
hostbased 在SSH-2中考虑Rhosts存在安全漏洞，废弃了这种方式。
这里之讨论我们经常使用的的Password和Public Key方式。

此时安全通道已经及建立，之后的所有内容都通过Session Key加密后进行传输。

Password

Password方式既客户端提供用户和密码，服务端对用户和密码进行匹配，完成认证。类Unix系统中，如OpenSSH的框架，一般通过系统的本地接口完成认证。

Password的优势是简单，无需任何而外的配置就可以使用。缺点密码不便于记忆，过于简单的密码容易被暴力破解。

Public Key

Public Key认证的基本原理是基于分对称加密方式，分别在服务端对一段数据通过公钥进行加密，如果客户端能够证明其可以使用私钥对这段数据进行解密，则可以说明客户端的身份。因为服务端需要使用客户端生成的密钥对的公钥对数据首先加密，所以需要先将公钥存储到服务端的密钥库（Auhtorized Key）。还记得Github中使用git协议push代码前需要先添加SSH KEY吗？

下面详细介绍一个通过Public Key进行客户端认证的过程。

客户端发起一个Public Key的认证请求，并发送RSA Key的模数作为标识符。（如果想深入了解RSA Key详细 --> 维基百科）
服务端检查是否存在请求帐号的公钥（Linux中存储在~/.ssh/authorized_keys文件中），以及其拥有的访问权限。如果没有则断开连接
服务端使用对应的公钥对一个随机的256位的字符串进行加密，并发送给客户端
客户端使用私钥对字符串进行解密，并将其结合session id生成一个MD5值发送给服务端。 结合session id的目的是为了避免攻击者采用重放攻击（replay attack）。
服务端采用同样的方式生成MD5值与客户端返回的MD5值进行比较，完成对客户端的认证。

数据传输阶段
该阶段通过Session Key提供的对称加密（Secret Key）算法，保证需要传输的任何数据的安全。

推荐
简单对 SSH 原理进行的说明，其中很多内容来自 O'RELLY的《SSH: The Secure Shell - The Definitive Guide》，如果想更深入了解SSH，这是一本非常不错的书。



# OpenSSH
[OpenSSH](http://www.openssh.com)
[OpenSSH Win32](https://github.com/PowerShell/Win32-OpenSSH/releases)
[在 Windows 中的 OpenSSH](https://docs.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_overview)
[RFC 4253 - The Secure Shell (SSH) Transport Layer Protocol](https://www.rfc-editor.org/info/rfc4253)
[RFC 6101 - The Secure Sockets Layer (SSL) Protocol V3.0](https://www.rfc-editor.org/rfc/rfc6101.html)


SSH 是 Secure Shell 的缩写，是建立在传输层基础上的安全协议，它本身属于OSI网络模型的应用层，同时可以为其它应用层协议提供安全传输服务，如 FTP、POP、甚至为PPP提供一个安全的通道。基于 SSH 的 FTP 就是 SFTP - SSH File Transfer Protocol。

SSH 是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。透过 SSH 可以对所有传输的数据进行加密，也能够防止DNS欺骗和IP欺骗。 SSH 之另一项优点为其传输的数据是经过压缩的，所以可以加快传输的速度。

SSH 与 SSL 都可以算是应用层协议，都使用了非对称加密技术，将应用层进行了加密。

SSH 不需要证书，即不需要公证机构，从这点来说，SSH 的安全性要比 SSL 弱一些，SSH 实现了主机用户名和密码的认证，这是 SSH-TRANS 部分完成的，而 SSL 没有这个功能。SSH 可以让用户以某个主机用户的身份登录主机，并对主机执行操作，目前用的最多的就是远程登录和 SFTP，还有简易版的 SCP。

而 SSL 和主机用户名登录没有任何关系，它本身并不实现主机登录的功能，它只的一个单纯的加密功能。可以简单的认为 SSH = SSL+主机用户登录功能等应用层协议加密，即FTPS、SMTPS。

SSH 和 SSL 都是比较基础的应用层协议，如结合 SSH + FTP 成为 SFTP，HTTP + SSL 成为 HTTPS，类似的组合还有 FTPS、SMTPS 等等。

OpenSSH 是用于 Linux 的管理员和其他非 Windows 的远程系统的跨平台管理的安全外壳 (SSH) 工具的开放源代码版本。 OpenSSH 已添加到 Windows 截至 2018 年秋季，且包含在 Windows 10 和 Windows Server 2019。

SSH 基于其中用户正在处理的系统是客户端，正在管理的远程系统是在服务器的客户端-服务器体系结构。 OpenSSH 包括一系列组件和工具，旨在提供远程系统管理、 安全且简单的方法包括：

✓ sshd.exe        远程管理 SSH 服务器组件
✓ ssh-agent.exe   公钥身份验证的专用密钥存储服务
✓ sftp-server.exe 安全 SFTP 服务组件

✓ ssh-keygen.exe  生成、 管理和转换适用于 SSH 的身份验证密钥
✓ ssh-add.exe     将私钥添加到允许服务器使用的列表
✓ ssh-keyscan.exe 辅助工具，从多个主机收集 SSH 公钥

✓ ssh.exe         这是用户的本地系统运行的 SSH 客户端组件
✓ sftp.exe        通过 SSH 运行的 SFTP - Secure FTP 服务，提供安全文件传输协议
✓ scp.exe         文件复制实用程序 Secure Copy，可以在本地/远程主机间对拷文件或目录

OpenSSL 包含三部分服务或工具，远程操作客户端包括 ssh, scp, sftp，密钥管理工具包括 ssh-add, ssh-keysign, ssh-keyscan, ssh-keygen，服务组件包括 sshd, sftp-server, ssh-agent。在 Linux 系统中 OpenSSH 是目前最流行的远程系统登录与文件传输应用，也是传统 Telenet、FTP 和R系列等网络应用的换代产品。ssh 命令可以替代 telnet、rlogin 和 rsh，scp 命令可以代替 sftp。

类似 wget 可以从 HTTP 服务器下载文件一样，SCP 是简化的文件传输工具，可以往服务器上传本地文件，也可将服务器的文件下载到本地。
	
	scp /path/filename username@servername:/path/
	scp username@servername:/path/filename /var/www/local_dir

	scp /var/www/test.php root@192.168.0.101:/var/www/
	scp root@192.168.0.101:/var/www/test.txt

	# 整个目录枚举传输
	scp -r root@192.168.0.101:/var/www/test /var/www/
	scp -r local_dir username@servername:remote_dir

Windows 10 内置了 OpenSSH 服务，通过应用程序与功能安装，当主机中开启 OpenSSH SSH Server 服务时，服务名 sshd，那么就对外开放了远程连接的接口。OpenSSH Authentication Agent 服务为公钥验证登录提供私钥保存服务，服务名 ssh-agent。


    # 手动创建服务
    sc create sshd displayName="OpenSSH SSH Server" binPath="C:\Windows\System32\OpenSSH\sshd.exe"
    # 开启与关闭服务
    net stop sshd
    net start sshd
    net stop ssh-agent
    net start ssh-agent

    ## 登录 -X 表示开启图形
    ssh root@127.0.0.1
    ssh -X root@127.0.0.1

自带 SFTP 命令，登录命令格式，sftp user@ip。

用户账户设置中需要注意有两类远程用户组，分别用于一般远程登陆用途和远程管理员，添加账户时需要设置其中一个，否则账户不能远程登陆：

- Remote Desktop Users
- Remote Managerment Users


OpenSSH 采用密钥的方式对数据进行加密，确保数据传输的安全。在正式开始传输数据之前，双方首先要交换密钥，当收到对方的数据时，
再利用密钥和相应的程序对数据进行解密。这种加密的数据传输有助于防止非法用户获取数据信息。

OpenSSH采用随机的方式生成公私密钥。密钥通常只需生成一次，必要时也可以重新制作。

当使用 ssh 命令登录到远程系统时，OpenSSH服务器的sshd守护进行将会发送一个公钥，OpenSSH客户端软件ssh将会提示用户确认是否接收发送的公钥。
同时，OpenSSH客户端也会向服务器回传一个密钥，使OpenSSH连接双方的每个系统都拥有对方的密钥，因而能够解密对方经由加密链路发送的加密数据。

## 用户名密钥对登录

修改配置文件 C:\ProgramData\ssh\sshd_config ：

    # PubkeyAuthentication yes                    # 公钥验证访问
    # AuthorizedKeysFile  .ssh/authorized_keys    # 公钥列表文件位置
    # PasswordAuthentication yes                  # 密码访问
    # PermitEmptyPasswords no                     # 空密码

    Match Group administrators                    # Administrators 用户组的用户连接公钥列表文件位置
       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys

通过在 OpenSSH 服务的配置文件中添加 AllowGroups、AllowUsers、DenyGroups 和 DenyUsers 指令可以控制哪些用户和组可以连接到服务器。这些指令被处理的顺序为：DenyUsers、AllowUsers、DenyGroups，最后是 AllowGroups。这一点非常重要，如果我们只设置了一条 AllowGroups sshusers 记录，那么不在 sshusers 组中的用户将无法登陆。所以我们可以创建一个用户组用来包含允许通过 ssh 登陆主机的用户，并在配置文件中添加对应的 AllowGroups 记录：

    # 阻止用户 contoso\nick 从 10.32.1.68 登录主机
    DenyUsers contoso\nick@10.32.1.68
    
    # 阻止所有 contoso 域中的用户登录主机
    DenyUsers contoso\*
    
    # 只允许 contoso\sshusers 域组中的用户登录主机
    AllowGroups contoso\sshusers

    # 只允许本地用户 nick 从 10.32.1.68 登录主机
    AllowUsers nick@10.32.1.68
    
    # 只允许本地用户组 sshusers 中的用户登录主机
    AllowGroups sshusers

默认的 Administrators 用户组认证列表文件 %programdata%\ssh\administrators_authorized_keys 只由 SYSTEM 或 Administrators 用户组访问，需要设置权限，可以在CMD中执行命令，(F) 表示完全访问许可：

    icacls administrators_authorized_keys /inheritance:r
    icacls administrators_authorized_keys /grant SYSTEM:(F)
    icacls administrators_authorized_keys /grant BUILTIN\Administrators:(F)

修改 ssh 服务的配置文件，注释掉配置文件中的最后两行：

    #Match Group administrators
    #       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys

最后在服务管理器器中重启 OpenSSH SSH Server 服务，然后客户端就可以通过公钥认证的方式登录到远程服务器了。可以调试方式运行服务：

    sshd -d

因为 SSH 服务和 SFTP 服务是通过 sshd.exe、sftp-server.exe 提供的，如果 SSH 连接成功 sftp 连接失败，则要检查 sftp-server 及依赖的库文件。

OpenSSH 对密钥配置文件的权限要求很严格，基本要求只有当前用户可访问。如下：

	drwx------ $HOME
	drwx------ .ssh
	-wx------- authorized_keys
	-wx------- id_rsa
	-wx------- id_rsa.pub


## 公钥认证登录方式配置

SSH 公钥身份验证使用非对称加密算法来生成两个密钥文件，公钥密钥对。 私钥文件等效于密码，并应在所有情况下受到保护。 如果有人获取了私钥，他们可以登录到您有权访问的任何 SSH 服务器。 公钥是放置在 SSH 服务器上的，并且可以在不影响私钥的情况下共享。

将密钥身份验证与 SSH 服务器一起使用时，SSH 服务器和客户端会比较为私钥提供的用户名的公钥。 如果无法根据客户端私钥验证公钥，则身份验证将失败。
多重身份验证可通过密钥对实现，方法是要求在生成密钥对时提供密码（请参阅下面的密钥生成）。 在身份验证期间，系统会提示用户输入通行短语，该密码与 SSH 客户端上的私钥一起使用以对用户进行身份验证。

若要使用基于密钥的身份验证，首先需要为客户端生成一些公钥/私钥对。 ssh-keygen 生成公钥 (pulib key) 和私钥 (private key)，当 ssh 连 shd 服务器，双方会交换公钥，系统会检查 /etc/ssh_know_hosts 内储存的公钥，如果找到客户端就用这个 key 产生一个随机产生的session key 传给服务器，两端都用这个 key 来继续完成 ssh 剩下来的阶段。

生成密钥对后，接下来使用 scp 将公钥拷贝到远程机器的.ssh目录下的 authorized_keys 文件中，.ssh/authorized_keys 这个档案相当于协议的 rhosts 档案。 客户端开始连接时会自行读取其中的公钥，之后使用者能够不用密码去登入。RSA的认证绝对是比 rhosts 认证更来的安全可靠。


如果使用 Putty 作为客户端，需要使用 puttygen 将 OpenSSH keys 转换为 Putty (.ppk) 格式，
在 Sublime Text 的 SFTP 插件上使用的就是 Putty 客户端实现。在 Windows 系统下，密钥路径要
指定绝对路径，像 `~/.ssh/id_rsa.ppk` 这种不能正常工作。

OpenSSH ==> Putty 格式转换操作：

   + Puttygen 界面执行 文件 --> 载入私钥；
   + 提示成功载入后，选择保存私钥，保存为 ppk 格式；

使用 RSA SHA-1 hash algorithm 这个快过时的签名算法可能会导致 OpenSSH 拒绝连接，需要使用更
先进的 ecdsa 曲线加密算法：

    // signature algorithm ssh-rsa not in PubkeyAcceptedAlgorithms

	ssh-keygen -t rsa -b 4096
	ssh-keygen -t dsa
	ssh-keygen -t ecdsa -b 521
	ssh-keygen -t ed25519

RSA 2048 比特密钥长度已经是最低安全标准，小于这个长度不够安全，新的 ECDSA 则要使用 521 长度。

临时解决方法，修改 /etc/ssh/ssh_config 配置文件，添加 ssh-rsa 签名算法验证：

	PubkeyAcceptedKeyTypes +ssh-rsa


从 PowerShell 或 cmd，使用 ssh-keygen 生成一些密钥文件。

    cd ~\.ssh\
    ssh-keygen

这应显示类似于下面的内容（其中 "username" 替换为你的用户名）

    Generating public/private ed25519 key pair.
    Enter file in which to save the key (C:\Users\username\.ssh\id_ed25519):

可以按 Enter 以接受默认值，或指定要在其中生成密钥的路径。 此时，系统会提示你使用密码来加密你的私钥文件。 密码使用密钥文件来提供双因素身份验证。 在此示例中，我们将密码留空。

    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in C:\Users\username\.ssh\id_ed25519.
    Your public key has been saved in C:\Users\username\.ssh\id_ed25519.pub.
    The key fingerprint is: 
    SHA256:OIzc1yE7joL2Bzy8!gS0j8eGK7bYaH1FmF3sDuMeSj8 username@server@LOCAL-HOSTNAME

    The key's randomart image is:
    +--[ED25519 256]--+
    |        .        |
    |         o       |
    |    . + + .      |
    |   o B * = .     |
    |   o= B S .      |
    |   .=B O o       |
    |  + =+% o        |
    | *oo.O.E         |
    |+.o+=o. .        |
    +----[SHA256]-----+

现在，你有一个公共/私有 ED25519.PUB 密钥对（pub 文件是公钥，而其余的是私钥）：

    Mode                LastWriteTime         Length Name
    ----                -------------         ------ ----
    -a----        9/28/2018  11:09 AM           1679 id_ed25519
    -a----        9/28/2018  11:09 AM            414 id_ed25519.pub

请记住，私钥文件等效于密码应采用密码相同方式来保护。 若要帮助解决此情况，请使用 ssh 代理将私钥安全地存储在与 Windows 登录名关联的 Windows 安全上下文中。 为此，请以管理员身份启动 ssh-agent 服务，并使用 ssh-add 来存储私钥。

    # Make sure you're running as an Administrator
    Start-Service ssh-agent

    # This should return a status of Running
    Get-Service ssh-agent

    # Now load your key files into ssh-agent
    ssh-add ~\.ssh\id_ed25519

完成这些步骤后，每次从此客户端进行身份验证时，ssh 代理会自动检索本地私钥，并将其传递到 SSH 客户端。

若要使用上面创建的用户密钥，需要将公钥放置在服务器上，将其放在 `users\username\.ssh` 下名为 authorized_keys 的文本文件中。 OpenSSH 工具包括 scp，它是一种安全的文件传输实用程序，可帮助解决此情况。

    more id_ed25519.pub > authorized_keys

将公钥内容（.ssh\id_ed25519.pub）移到服务器/主机上名为 authorized_keys 的文本文件中。
此示例使用前面说明中已安装在主机上的 OpenSSHUtils 模块中的 AuthorizedKeyPermissions 函数。

    # Make sure that the .ssh directory exists in your server's home folder
    ssh user1@domain1@contoso.com mkdir C:\Users\user1\.ssh\

    # Use scp to opy the public key file generated previously to authorized_keys on your server
    scp C:\Users\user1\.ssh\id_ed25519.pub user1@domain1@contoso.com:C:\Users\user1\.ssh\authorized_keys

    # Appropriately ACL the authorized_keys file on your server  
    ssh --% user1@domain1@contoso.com powershell -c $ConfirmPreference = 'None'; Repair-AuthorizedKeyPermission C:\Users\user1\.ssh\authorized_keys

这些步骤完成了在 Windows 上通过 SSH 使用基于密钥的身份验证所需的配置。 完成此项后，用户可以从具有私钥的任何客户端连接到 sshd 主机。

客户端第一次发请求连接服务器时，客户机会向服务器要服务器端的身份信息，服务器端向客户端发送密钥指纹给客户端。这时客户端会验证服务器端是否为客户端想要连接的目标，如果客户端没有连接过，就需要用户手动确认。如果之前客户端连接过此服务器，客户端会保存一份指纹信息，下次再连接就会比对此指纹。如果不指纹不符合，会提示用户，且问用户是否连接。

## On Windows 10 version 1803 and newer

In Settings app, go to Apps > Apps & features > Manage optional features.

Locate “OpenSSH server” feature, expand it, and select Install.

Binaries are installed to %WINDIR%\System32\OpenSSH. Configuration file (sshd_config) and host keys are installed to %ProgramData%\ssh (only after the server is started for the first time).

You may still want to use the following manual installation, if you want to install a newer version of OpenSSH than the one built into Windows 10.

## On earlier versions of Windows

Download the latest OpenSSH for Windows binaries (package OpenSSH-Win64.zip or OpenSSH-Win32.zip)

As the Administrator, extract the package to C:\Program Files\OpenSSH

As the Administrator, install sshd and ssh-agent services:

    powershell.exe -ExecutionPolicy Bypass -File install-sshd.ps1

## Configuring SSH server

Allow incoming connections to SSH server in Windows Firewall:
Either run the following PowerShell command (Windows 8 and 2012 or newer only), as the Administrator:

    New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH SSH Server' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22

or go to Control Panel > System and Security > Windows Firewall1 > Advanced Settings > Inbound Rules and add a new rule for port 22.

Start the service and/or configure automatic start:

Go to Control Panel > System and Security > Administrative Tools and open Services. Locate OpenSSH SSH Server service.

If you want the server to start automatically when your machine is started: Go to Action > Properties. In the Properties dialog, change Startup type to Automatic and confirm.

Start the OpenSSH SSH Server service by clicking the Start the service.

## Setting up SSH public key authentication
Follow a generic guide for Setting up SSH public key authentication in `*nix` OpenSSH server, with the following difference:

Create the .ssh folder (for the authorized_keys file) in your Windows account profile folder (typically in C:\Users\username\.ssh).

For permissions to .ssh folder and authorized_keys file, what matters are Windows ACL permissions, not simple `*nix` permissions. Set the ACL so that only a respective Windows account have a write access to the folder and the file (what is the default access level, if you create the folder and the file, while logged in using the respective account).

## Connecting to the server

Finding Host Key
Before the first connection, find out fingerprint of the server’s host key by using ssh-keygen.exe for each file.

In Windows command-prompt, use:

    for %f in (%ProgramData%\ssh\ssh_host_*_key) do @%WINDIR%\System32\OpenSSH\ssh-keygen.exe -l -f "%f"

Replace %WINDIR%\System32 with %ProgramFiles%, if appropriate.

In PowerShell, use:

    Get-ChildItem $env:ProgramData\ssh\ssh_host_*_key | ForEach-Object { . $env:WINDIR\System32\OpenSSH\ssh-keygen.exe -l -f $_ }

Replace $env:WINDIR\System32 with $env:ProgramFiles, if appropriate.

You will get an output like this:

    C:\Windows\System32\OpenSSH>for %f in (%ProgramData%\ssh\ssh_host_*_key) do @%WINDIR%\System32\OpenSSH\ssh-keygen.exe -l -f "%f"
    1024 SHA256:K1kYcE7GHAqHLNPBaGVLOYBQif04VLOQN9kDbiLW/eE martin@example (DSA)
    256 SHA256:7pFXY/Ad3itb6+fLlNwU3zc6X6o/ZmV3/mfyRnE46xg martin@example (ECDSA)
    256 SHA256:KFi18tCRGsQmxMPioKvg0flaFI9aI/ebXfIDIOgIVGU martin@example (ED25519)
    2048 SHA256:z6YYzqGiAb1FN55jOf/f4fqR1IJvpXlKxaZXRtP2mX8 martin@example (RSA)

## sshd_config 配置文件
+ https://man.openbsd.org/ssh_config
+ https://man.openbsd.org/sshd_config

OpenSSH SSH 服务器守护进程配置文件

    /etc/ssh/sshd_config


账户设置参考

SFTP的账户直接使用Linux操作系统账户，我们可以用useradd命令来创建账户。

首先建立3个要管理的目录：

    mkdir /home/sftp/homepage
    mkdir /home/sftp/blog
    mkdir /home/sftp/pay

创建sftp组和www、blog、pay账号，这3个账号都属于sftp组：

    groupadd sftp 
    useradd -M -d /home/sftp -G sftp www
    useradd -M -d /home/sftp/blog -G sftp blog
    useradd -M -d /home/sftp/pay -G sftp pay
    # 将blog账户也加到apache组
    useradd -M -d /home/sftp/blog -G apache blog 
    # 设置3个账户的密码密码
    passwd www
    passwd blog
    passwd pay


sshd 默认从 /etc/ssh/sshd_config 文件(或通过 -f 命令行选项指定的文件)读取配置信息。 配置文件是由"指令 值"对组成的，每行一个。空行和以'#'开头的行都将被忽略。 如果值中含有空白符或者其他特殊符号，那么可以通过在两边加上双引号(")进行界定。 

[注意]值是大小写敏感的，但指令是大小写无关的。


所有可以使用的配置指令如下：


### ⛏ AcceptEnv
     指定客户端发送的哪些环境变量将会被传递到会话环境中。[注意]只有SSH-2协议支持环境变量的传递。
     细节可以参考 ssh_config(5) 中的 SendEnv 配置指令。
     指令的值是空格分隔的变量名列表(其中可以使用'*'和'?'作为通配符)。也可以使用多个 AcceptEnv 达到同样的目的。
     需要注意的是，有些环境变量可能会被用于绕过禁止用户使用的环境变量。由于这个原因，该指令应当小心使用。
     默认是不传递任何环境变量。


### ⛏ AddressFamily
     指定 sshd(8) 应当使用哪种地址族。取值范围是："any"(默认)、"inet"(仅IPv4)、"inet6"(仅IPv6)。


### ⛏ AllowGroups
     这个指令后面跟着一串用空格分隔的组名列表(其中可以使用"*"和"?"通配符)。默认允许所有组登录。
     如果使用了这个指令，那么将仅允许这些组中的成员登录，而拒绝其它所有组。
     这里的"组"是指"主组"(primary group)，也就是/etc/passwd文件中指定的组。
     这里只允许使用组的名字而不允许使用GID。相关的 allow/deny 指令按照下列顺序处理：
     DenyUsers, AllowUsers, DenyGroups, AllowGroups


### ⛏ AllowTcpForwarding
     是否允许TCP转发，默认值为"yes"。
     禁止TCP转发并不能增强安全性，除非禁止了用户对shell的访问，因为用户可以安装他们自己的转发器。


### ⛏ AllowUsers
     这个指令后面跟着一串用空格分隔的用户名列表(其中可以使用"*"和"?"通配符)。默认允许所有用户登录。
     如果使用了这个指令，那么将仅允许这些用户登录，而拒绝其它所有用户。
     如果指定了 USER@HOST 模式的用户，那么 USER 和 HOST 将同时被检查。
     这里只允许使用用户的名字而不允许使用UID。相关的 allow/deny 指令按照下列顺序处理：
     DenyUsers, AllowUsers, DenyGroups, AllowGroups


### ⛏ AuthorizedKeysFile
     存放该用户可以用来登录的 RSA/DSA 公钥。
     该指令中可以使用下列根据连接时的实际情况进行展开的符号：
     %% 表示'%'、%h 表示用户的主目录、%u 表示该用户的用户名。
     经过扩展之后的值必须要么是绝对路径，要么是相对于用户主目录的相对路径。
     默认值是".ssh/authorized_keys"。


### ⛏ Banner
     将这个指令指定的文件中的内容在用户进行认证前显示给远程用户。
     这个特性仅能用于SSH-2，默认什么内容也不显示。"none"表示禁用这个特性。


### ⛏ ChallengeResponseAuthentication
     是否允许质疑-应答(challenge-response)认证。默认值是"yes"。
     所有 login.conf(5) 中允许的认证方式都被支持。


### ⛏ ChrootDirectory
	对特定用户设定限制目录，比如我们要限制 test 用户在自己的用户目录下活动。

    #Subsystem sftp /usr/openssh/sftp-server
    Subsystem sftp internal-sftp

    Match user test
        ForceCommand internal-sftp
        ChrootDirectory /home/test

### ⛏ Ciphers
     指定SSH-2允许使用的加密算法。多个算法之间使用逗号分隔。可以使用的算法如下：
     "aes128-cbc", "aes192-cbc", "aes256-cbc", "aes128-ctr", "aes192-ctr", "aes256-ctr",
     "3des-cbc", "arcfour128", "arcfour256", "arcfour", "blowfish-cbc", "cast128-cbc"
     默认值是可以使用上述所有算法。


### ⛏ ClientAliveCountMax
     sshd(8) 在未收到任何客户端回应前最多允许发送多少个"alive"消息。默认值是 3 。
     到达这个上限后，sshd(8) 将强制断开连接、关闭会话。
     需要注意的是，"alive"消息与 TCPKeepAlive 有很大差异。
     "alive"消息是通过加密连接发送的，因此不会被欺骗；而 TCPKeepAlive 却是可以被欺骗的。
     如果 ClientAliveInterval 被设为 15 并且将 ClientAliveCountMax 保持为默认值，
     那么无应答的客户端大约会在45秒后被强制断开。这个指令仅可以用于SSH-2协议。


### ⛏ ClientAliveInterval
     设置一个以秒记的时长，如果超过这么长时间没有收到客户端的任何数据，
     sshd(8) 将通过安全通道向客户端发送一个"alive"消息，并等候应答。
     默认值 0 表示不发送"alive"消息。这个选项仅对SSH-2有效。


### ⛏ Compression
     是否对通信数据进行加密，还是延迟到认证成功之后再对通信数据加密。
     可用值："yes", "delayed"(默认), "no"。


### ⛏ DenyGroups
     这个指令后面跟着一串用空格分隔的组名列表(其中可以使用"*"和"?"通配符)。默认允许所有组登录。
     如果使用了这个指令，那么这些组中的成员将被拒绝登录。
     这里的"组"是指"主组"(primary group)，也就是/etc/passwd文件中指定的组。
     这里只允许使用组的名字而不允许使用GID。相关的 allow/deny 指令按照下列顺序处理：
     DenyUsers, AllowUsers, DenyGroups, AllowGroups


### ⛏ DenyUsers
     这个指令后面跟着一串用空格分隔的用户名列表(其中可以使用"*"和"?"通配符)。默认允许所有用户登录。
     如果使用了这个指令，那么这些用户将被拒绝登录。
     如果指定了 USER@HOST 模式的用户，那么 USER 和 HOST 将同时被检查。
     这里只允许使用用户的名字而不允许使用UID。相关的 allow/deny 指令按照下列顺序处理：
     DenyUsers, AllowUsers, DenyGroups, AllowGroups


### ⛏ ForceCommand
     强制执行这里指定的命令而忽略客户端提供的任何命令。这个命令将使用用户的登录shell执行(shell -c)。
     这可以应用于 shell 、命令、子系统的完成，通常用于 Match 块中。
     这个命令最初是在客户端通过 SSH_ORIGINAL_COMMAND 环境变量来支持的。


### ⛏ GatewayPorts
     是否允许远程主机连接本地的转发端口。默认值是"no"。
     sshd(8) 默认将远程端口转发绑定到loopback地址。这样将阻止其它远程主机连接到转发端口。
     GatewayPorts 指令可以让 sshd 将远程端口转发绑定到非loopback地址，这样就可以允许远程主机连接了。
     "no"表示仅允许本地连接，"yes"表示强制将远程端口转发绑定到统配地址(wildcard address)，
     "clientspecified"表示允许客户端选择将远程端口转发绑定到哪个地址。


### ⛏ GSSAPIAuthentication
     是否允许使用基于 GSSAPI 的用户认证。默认值为"no"。仅用于SSH-2。


### ⛏ GSSAPICleanupCredentials
     是否在用户退出登录后自动销毁用户凭证缓存。默认值是"yes"。仅用于SSH-2。


### ⛏ HostbasedAuthentication
     这个指令与 RhostsRSAAuthentication 类似，但是仅可以用于SSH-2。推荐使用默认值"no"。
     推荐使用默认值"no"禁止这种不安全的认证方式。


### ⛏ HostbasedUsesNameFromPacketOnly
     在开启 HostbasedAuthentication 的情况下，
     指定服务器在使用 ~/.shosts ~/.rhosts /etc/hosts.equiv 进行远程主机名匹配时，是否进行反向域名查询。
     "yes"表示 sshd(8) 信任客户端提供的主机名而不进行反向查询。默认值是"no"。


### ⛏ HostKey
     主机私钥文件的位置。如果权限不对，sshd(8) 可能会拒绝启动。
     SSH-1默认是 /etc/ssh/ssh_host_key 。
     SSH-2默认是 /etc/ssh/ssh_host_rsa_key 和 /etc/ssh/ssh_host_dsa_key 。
     一台主机可以拥有多个不同的私钥。"rsa1"仅用于SSH-1，"dsa"和"rsa"仅用于SSH-2。


### ⛏ IgnoreRhosts
     是否在 RhostsRSAAuthentication 或 HostbasedAuthentication 过程中忽略 .rhosts 和 .shosts 文件。
     不过 /etc/hosts.equiv 和 /etc/shosts.equiv 仍将被使用。推荐设为默认值"yes"。


### ⛏ IgnoreUserKnownHosts
     是否在 RhostsRSAAuthentication 或 HostbasedAuthentication 过程中忽略用户的 ~/.ssh/known_hosts 文件。
     默认值是"no"。为了提高安全性，可以设为"yes"。


### ⛏ KerberosAuthentication
     是否要求用户为 PasswordAuthentication 提供的密码必须通过 Kerberos KDC 认证，也就是是否使用Kerberos认证。
     要使用Kerberos认证，服务器需要一个可以校验 KDC identity 的 Kerberos servtab 。默认值是"no"。


### ⛏ KerberosGetAFSToken
     如果使用了 AFS 并且该用户有一个 Kerberos 5 TGT，那么开启该指令后，
     将会在访问用户的家目录前尝试获取一个 AFS token 。默认为"no"。


### ⛏ KerberosOrLocalPasswd
     如果 Kerberos 密码认证失败，那么该密码还将要通过其它的认证机制(比如 /etc/passwd)。
     默认值为"yes"。


### ⛏ KerberosTicketCleanup
     是否在用户退出登录后自动销毁用户的 ticket 。默认值是"yes"。


### ⛏ KeyRegenerationInterval
     在SSH-1协议下，短命的服务器密钥将以此指令设置的时间为周期(秒)，不断重新生成。
     这个机制可以尽量减小密钥丢失或者黑客攻击造成的损失。
     设为 0 表示永不重新生成，默认为 3600(秒)。


### ⛏ ListenAddress
     指定 sshd(8) 监听的网络地址，默认监听所有地址。可以使用下面的格式：


           ListenAddress host|IPv4_addr|IPv6_addr
           ListenAddress host|IPv4_addr:port
           ListenAddress [host|IPv6_addr]:port


	 如果未指定 port ，那么将使用 Port 指令的值。
     可以使用多个 ListenAddress 指令监听多个地址。


### ⛏ LoginGraceTime
     限制用户必须在指定的时限内认证成功，0 表示无限制。默认值是 120 秒。


### ⛏ LogLevel
     指定 sshd(8) 的日志等级(详细程度)。可用值如下：
     QUIET, FATAL, ERROR, INFO(默认), VERBOSE, DEBUG, DEBUG1, DEBUG2, DEBUG3
     DEBUG 与 DEBUG1 等价；DEBUG2 和 DEBUG3 则分别指定了更详细、更罗嗦的日志输出。
     比 DEBUG 更详细的日志可能会泄漏用户的敏感信息，因此反对使用。


### ⛏ MACs
     指定允许在SSH-2中使用哪些消息摘要算法来进行数据校验。
     可以使用逗号分隔的列表来指定允许使用多个算法。默认值(包含所有可以使用的算法)是：
     hmac-md5,hmac-sha1,umac-64@openssh.com,hmac-ripemd160,hmac-sha1-96,hmac-md5-96


### ⛏ Match
     引入一个条件块。块的结尾标志是另一个 Match 指令或者文件结尾。
     如果 Match 行上指定的条件都满足，那么随后的指令将覆盖全局配置中的指令。
     Match 的值是一个或多个"条件-模式"对。可用的"条件"是：User, Group, Host, Address 。
     只有下列指令可以在 Match 块中使用：AllowTcpForwarding, Banner,
     ForceCommand, GatewayPorts, GSSApiAuthentication,
     KbdInteractiveAuthentication, KerberosAuthentication,
         PasswordAuthentication, PermitOpen, PermitRootLogin,
             RhostsRSAAuthentication, RSAAuthentication, X11DisplayOffset,
             X11Forwarding, X11UseLocalHost


### ⛏ MaxAuthTries
     指定每个连接最大允许的认证次数。默认值是 6 。
     如果失败认证的次数超过这个数值的一半，连接将被强制断开，且会生成额外的失败日志消息。


### ⛏ MaxStartups
     最大允许保持多少个未认证的连接。默认值是 10 。
     到达限制后，将不再接受新连接，除非先前的连接认证成功或超出 LoginGraceTime 的限制。


### ⛏ PasswordAuthentication
     是否允许使用基于密码的认证。默认为"yes"。


### ⛏ PermitEmptyPasswords
     是否允许密码为空的用户远程登录。默认为"no"。


### ⛏ PermitOpen
     指定TCP端口转发允许的目的地，可以使用空格分隔多个转发目标。默认允许所有转发请求。
     合法的指令格式如下：
           PermitOpen host:port
           PermitOpen IPv4_addr:port
           PermitOpen [IPv6_addr]:port
     "any"可以用于移除所有限制并允许一切转发请求。


### ⛏ PermitRootLogin
     是否允许 root 登录。可用值如下：
     "yes"(默认) 表示允许。"no"表示禁止。
     "without-password"表示禁止使用密码认证登录。
     "forced-commands-only"表示只有在指定了 command 选项的情况下才允许使用公钥认证登录。
                           同时其它认证方法全部被禁止。这个值常用于做远程备份之类的事情。


### ⛏ PermitTunnel
     是否允许 tun(4) 设备转发。可用值如下：
     "yes", "point-to-point"(layer 3), "ethernet"(layer 2), "no"(默认)。
     "yes"同时蕴含着"point-to-point"和"ethernet"。


### ⛏ PermitUserEnvironment
     指定是否允许 sshd(8) 处理 ~/.ssh/environment 以及 ~/.ssh/authorized_keys 中的 environment= 选项。
     默认值是"no"。如果设为"yes"可能会导致用户有机会使用某些机制(比如 LD_PRELOAD)绕过访问控制，造成安全漏洞。


### ⛏ PidFile
     指定在哪个文件中存放SSH守护进程的进程号，默认为 /var/run/sshd.pid 文件。


### ⛏ Port
     指定 sshd(8) 守护进程监听的端口号，默认为 22 。可以使用多条指令监听多个端口。
     默认将在本机的所有网络接口上监听，但是可以通过 ListenAddress 指定只在某个特定的接口上监听。


### ⛏ PrintLastLog
     指定 sshd(8) 是否在每一次交互式登录时打印最后一位用户的登录时间。默认值是"yes"。


### ⛏ PrintMotd
     指定 sshd(8) 是否在每一次交互式登录时打印 /etc/motd 文件的内容。默认值是"yes"。


### ⛏ Protocol
     指定 sshd(8) 支持的SSH协议的版本号。
     '1'和'2'表示仅仅支持SSH-1和SSH-2协议。"2,1"表示同时支持SSH-1和SSH-2协议。


### ⛏ PubkeyAcceptedAlgorithms

	Specifies the signature algorithms that will be used for public key 
	authentication as a comma-separated list of patterns. If the specified list 
	begins with a ‘+’ character, then the algorithms after it will be appended to 
	the default instead of replacing it. If the specified list begins with a ‘-’ 
	character, then the specified algorithms (including wildcards) will be removed 
	from the default set instead of replacing them. If the specified list begins 
	with a ‘^’ character, then the specified algorithms will be placed at the head 
	of the default set. The default for this option is:

	ssh-ed25519-cert-v01@openssh.com,
	ecdsa-sha2-nistp256-cert-v01@openssh.com,
	ecdsa-sha2-nistp384-cert-v01@openssh.com,
	ecdsa-sha2-nistp521-cert-v01@openssh.com,
	sk-ssh-ed25519-cert-v01@openssh.com,
	sk-ecdsa-sha2-nistp256-cert-v01@openssh.com,
	rsa-sha2-512-cert-v01@openssh.com,
	rsa-sha2-256-cert-v01@openssh.com,
	ssh-ed25519,
	ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521,
	sk-ssh-ed25519@openssh.com,
	sk-ecdsa-sha2-nistp256@openssh.com,
	rsa-sha2-512,rsa-sha2-256

	The list of available signature algorithms may also be obtained using "ssh -Q PubkeyAcceptedAlgorithms".

### ⛏ PubkeyAuthentication
     是否允许公钥认证。仅可以用于SSH-2。默认值为"yes"。


### ⛏ RhostsRSAAuthentication
     是否使用强可信主机认证(通过检查远程主机名和关联的用户名进行认证)。仅用于SSH-1。
     这是通过在RSA认证成功后再检查 ~/.rhosts 或 /etc/hosts.equiv 进行认证的。
     出于安全考虑，建议使用默认值"no"。


### ⛏ RSAAuthentication
     是否允许使用纯 RSA 公钥认证。仅用于SSH-1。默认值是"yes"。


### ⛏ ServerKeyBits
     指定临时服务器密钥的长度。仅用于SSH-1。默认值是 768(位)。最小值是 512 。


### ⛏ StrictModes
     指定是否要求 sshd(8) 在接受连接请求前对用户主目录和相关的配置文件进行宿主和权限检查。
     强烈建议使用默认值"yes"来预防可能出现的低级错误。


### ⛏ Subsystem
     配置一个外部子系统(例如，一个文件传输守护进程)。仅用于SSH-2协议。
     值是一个子系统的名字和对应的命令行(含选项和参数)。比如"sft /bin/sftp-server"。


### ⛏ SyslogFacility
     指定 sshd(8) 将日志消息通过哪个日志子系统(facility)发送。有效值是：
     DAEMON, USER, AUTH(默认), LOCAL0, LOCAL1, LOCAL2, LOCAL3, LOCAL4, LOCAL5, LOCAL6, LOCAL7


### ⛏ TCPKeepAlive
     指定系统是否向客户端发送 TCP keepalive 消息。默认值是"yes"。
     这种消息可以检测到死连接、连接不当关闭、客户端崩溃等异常。
     可以设为"no"关闭这个特性。


### ⛏ UseDNS
     指定 sshd(8) 是否应该对远程主机名进行反向解析，以检查此主机名是否与其IP地址真实对应。默认值为"yes"。


### ⛏ UseLogin
     是否在交互式会话的登录过程中使用 login(1) 。默认值是"no"。
     如果开启此指令，那么 X11Forwarding 将会被禁止，因为 login(1) 不知道如何处理 xauth(1) cookies 。
     需要注意的是，login(1) 是禁止用于远程执行命令的。
     如果指定了 UsePrivilegeSeparation ，那么它将在认证完成后被禁用。


### ⛏ UsePrivilegeSeparation
     是否让 sshd(8) 通过创建非特权子进程处理接入请求的方法来进行权限分离。默认值是"yes"。
     认证成功后，将以该认证用户的身份创建另一个子进程。
     这样做的目的是为了防止通过有缺陷的子进程提升权限，从而使系统更加安全。


### ⛏ X11DisplayOffset
     指定 sshd(8) X11 转发的第一个可用的显示区(display)数字。默认值是 10 。
     这个可以用于防止 sshd 占用了真实的 X11 服务器显示区，从而发生混淆。


### ⛏ X11Forwarding
     是否允许进行 X11 转发。默认值是"no"，设为"yes"表示允许。
     如果允许X11转发并且sshd(8)代理的显示区被配置为在含有通配符的地址(X11UseLocalhost)上监听。
     那么将可能有额外的信息被泄漏。由于使用X11转发的可能带来的风险，此指令默认值为"no"。
     需要注意的是，禁止X11转发并不能禁止用户转发X11通信，因为用户可以安装他们自己的转发器。
     如果启用了 UseLogin ，那么X11转发将被自动禁止。


### ⛏ X11UseLocalhost
     sshd(8) 是否应当将X11转发服务器绑定到本地loopback地址。默认值是"yes"。
     sshd 默认将转发服务器绑定到本地loopback地址并将 DISPLAY 环境变量的主机名部分设为"localhost"。
     这可以防止远程主机连接到 proxy display 。不过某些老旧的X11客户端不能在此配置下正常工作。
     为了兼容这些老旧的X11客户端，你可以设为"no"。


### ⛏ XAuthLocation
     指定 xauth(1) 程序的绝对路径。默认值是 /usr/X11R6/bin/xauth




时间格式

在 sshd(8) 命令行参数和配置文件中使用的时间值可以通过下面的格式指定：time[qualifier] 。 其中的 time 是一个正整数，而 qualifier 可以是下列单位之一：

    <无>    秒
    s | S   秒
    m | M   分钟
    h | H   小时
    d | D   天
    w | W   星期


可以通过指定多个数值来累加时间，比如：
   1h30m   1 小时 30 分钟 (90 分钟)

文件
    /etc/ssh/sshd_config
         sshd(8) 的主配置文件。这个文件的宿主应当是root，权限最大可以是"644"。




# OpenSSL
- [OpenSSL 手册](http://fm4dd.com/openssl/manual-apps/)
- [OpenSSL 配置文件](https://www.openssl.org/docs/manmaster/man5/config.html)
- [Linux OpenSSL 工具包](http://www.openssl.org/source/)
- [Window OpenSSL 程序](http://slproweb.com/products/Win32OpenSSL.html)
- [SSL/TLS协议运行机制的概述](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
- [RFC 6101 - The Secure Sockets Layer (SSL) Protocol V3.0](https://www.rfc-editor.org/rfc/rfc6101.html)
- [RFC 8446 - The Transport Layer Security (TLS) Protocol V 1.3](https://tools.ietf.org/html/rfc8446)
- [SSL/TLS协议运行机制的概述](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
- [RSA算法原理](http://www.ruanyifeng.com/blog/2013/06/rsa_algorithm_part_one.html)
- [RSA算法原理](http://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html)
- [图解SSL/TLS协议](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)

先学习一下汉语，密钥[yuè]，这个读音表示开锁或上锁的用具，来一起蜜月......

在 Windows 上，可以设置环境属性 OPENSSL_CONF 指定配置文件所在

	set OPENSSL_CONF=c:/coding/alipay/openssl/openssl.cnf

可以在命令行指定配置文件 -config openssl.cnf 。

## OpenSSL 工具使用

OpenSSL 工具提供三大类命令，标准命令用于各种证书处理、密钥管理，摘要命令 dgst 用来对文件进行摘要处理，密文命令用于信息加密编码。

摘要算法如 MD5/SHA 就是通过不可逆的 Hash 函数算法等到数据的 HASH 值即摘要  digest，也叫指纹值，这是形容词，表示摘要是独一无二的。

摘要通常用于验证内容的正确不被纂改，结合私钥可以实现数字签名。先用 Hash 函数获取原始数据的摘要 digest，再使用非对称加密系统中的私钥对这个摘要加密，生成数字签名 signature。需要收到信息的一方只需要使用公钥对数字签名进行解密，就可以和收到的信息的指纹进行比对得到数据的正确结果。


Standard commands
	
	asn1parse      ca             ciphers        crl            crl2pkcs7
	dgst           dh             dhparam        dsa            dsaparam
	ec             ecparam        enc            engine         errstr
	gendh          gendsa         genrsa         nseq           ocsp
	passwd         pkcs12         pkcs7          pkcs8          prime
	rand           req            rsa            rsautl         s_client
	s_server       s_time         sess_id        smime          speed
	spkac          verify         version        x509

Message Digest commands (see the `dgst` command for more details)

	md2            md4            md5            rmd160         sha
	sha1

	options are
	-c              to output the digest with separating colons
	-d              to output debug info
	-hex            output as hex dump
	-binary         output in binary form
	-sign   file    sign digest using private key in file
	-verify file    verify a signature using public key in file
	-prverify file  verify a signature using private key in file
	-keyform arg    key file format (PEM or ENGINE)
	-signature file signature to verify
	-binary         output in binary form
	-engine e       use engine e, possibly a hardware device.
	-md5            to use the md5 message digest algorithm (default)
	-md4            to use the md4 message digest algorithm
	-md2            to use the md2 message digest algorithm
	-sha1           to use the sha1 message digest algorithm
	-sha            to use the sha message digest algorithm
	-sha224         to use the sha224 message digest algorithm
	-sha256         to use the sha256 message digest algorithm
	-sha384         to use the sha384 message digest algorithm
	-sha512         to use the sha512 message digest algorithm
	-mdc2           to use the mdc2 message digest algorithm
	-ripemd160      to use the ripemd160 message digest algorithm

Cipher commands (see the `enc` command for more details)

	aes-128-cbc    aes-128-ecb    aes-192-cbc    aes-192-ecb    aes-256-cbc
	aes-256-ecb    base64         bf             bf-cbc         bf-cfb
	bf-ecb         bf-ofb         cast           cast-cbc       cast5-cbc
	cast5-cfb      cast5-ecb      cast5-ofb      des            des-cbc
	des-cfb        des-ecb        des-ede        des-ede-cbc    des-ede-cfb
	des-ede-ofb    des-ede3       des-ede3-cbc   des-ede3-cfb   des-ede3-ofb
	des-ofb        des3           desx           idea           idea-cbc
	idea-cfb       idea-ecb       idea-ofb       rc2            rc2-40-cbc
	rc2-64-cbc     rc2-cbc        rc2-cfb        rc2-ecb        rc2-ofb
	rc4            rc4-40

	options are
	-in <file>     input file
	-out <file>    output file
	-pass <arg>    pass phrase source
	-e             encrypt
	-d             decrypt
	-a/-base64     base64 encode/decode, depending on encryption flag
	-k             passphrase is the next argument
	-kfile         passphrase is the first line of the file argument
	-md            the next argument is the md to use to create a key
	                 from a passphrase.  One of md2, md5, sha or sha1
	-K/-iv         key/iv in hex is the next argument
	-[pP]          print the iv/key (then exit if -P)
	-bufsize <n>   buffer size
	-engine e      use engine e, possibly a hardware device.

例如对一段文字进行 SHA1 摘要，首先将内容写入到文件，再对文件的内容进行摘要，或使用管道操作符号：

	$ echo dGhlIHNhbXBsZSBub25jZQ==258EAFA5-E914-47DA-95CA-C5AB0DC85B11> demo.txt
	$ openssl.exe sha1 demo.txt
	SHA1(demo.txt)= 335ccf656e03ddcb7f79f05890ed07e770707d46

	$ echo abc|openssl.exe sha1
	34d4150adc3347f1dd8ce19fdf65b74d971ab602

注意 echo 会附加换行符合，如果不含换行，摘要输出应为：

	SHA1(demo.txt)= b37a4f2cc0624f1690f64606cf385945b2bec4ea

利用 set /p 可以输出无换行的内容：

	$ set /p=abc<nul>demo.txt
	$ set /p=abc| openssl.exe md5

可以将摘要以二进制数值保存，默认输出 -hex 格式：

	$ openssl.exe sha1 -binary demo.txt> out.bin
	$ openssl.exe sha1 -hex demo.txt

使用 base64 对文件内容进行编码：

	$ openssl.exe base64 -in demo.txt
	$ openssl.exe enc -a -in demo.txt
	$ openssl.exe enc -base64 -in demo.txt

也可以使用管道符号替代文件输入：

	echo ABC| openssl.exe enc -base64

解码 Base64，注意使用文件方式存储的 Base64 编码内容必须以换行符号结束：

	$ echo QUJDIA0K | openssl.exe enc -base64 -d
	ABC
	$ echo QUJDIA0K> demo.txt
	$ openssl.exe enc -base64 -d -in demo.txt
	ABC

生成一个 16 字节的随机数并用 base64 编码显示：

	$ openssl.exe rand -base64 16

AES/DES 加密解密，注意 echo 命令会自带换行结束，对于字内容加密解密都可以正确理解，二进制数据则会引起歧义：

	$ echo ABC| openssl.exe aes-256-cbc -k passwd -base64
	U2FsdGVkX1/1lp2iY409mYNhXiAEzcDnqefINJ6b1Og=

	$ echo U2FsdGVkX1/1lp2iY409mYNhXiAEzcDnqefINJ6b1Og=| openssl.exe aes-256-cbc -k passwd -d -base64
	ABC

要使用 DES4 算法，将命令行的加密算法 aes-256-cbc 改为 des3 即可。


## RSA 密钥对生成

openssl genrsa 用于生成 RSA 私钥文件，生成是可以指定私钥长度，具体参数请参考文档。 

	openssl genrsa -out 2048_rsa_private_key.pem 2048 

Rsa命令用于处理Rsa密钥生成公钥、格式转换和打印信息

	openssl rsa -in 2048_rsa_private_key.pem -pubout -out 2048_rsa_public_key.pem 
 
-in filename：输入的RSA密钥文件，在此为上面生成的密钥 rsa_private_key.pem。 
-pubout：设置此选项后，保存公钥值到输出文件中。 
-out filename：输出文件，在此我们定义成rsa_public_key.pem 

java 开发使用的 PKCS8 格式转换命令

	openssl pkcs8 -topk8 -inform PEM -in 2048_rsa_private_key.pem -outform PEM -nocrypt -out 2048_rsa_private_key_pkcs8.pem

	openssl.exe genrsa -out rsa_1024_private_key.pem 1024
	openssl.exe rsa -in rsa_1024_private_key.pem -pubout -out rsa_1024_public_key.pem
	openssl.exe pkcs8 -topk8 -inform PEM -in rsa_1024_private_key.pem -outform PEM -nocrypt -out rsa_1024_private_key_pkcs8.pem

	openssl.exe dsaparam -out dsa_1024_param.pem 1024
	openssl.exe gendsa -out dsa_1024_private_key.pem dsa_1024_param.pem
	openssl.exe dsa -in dsa_1024_private_key.pem -pubout -out dsa_1024_public_key.pem
	openssl.exe pkcs8 -topk8 -inform PEM -in dsa_1024_private_key.pem -outform PEM -nocrypt -out dsa_1024_private_key_pkcs8.pem

合成 pkcs#12 证书(含私钥)

** 将 pem 证书和私钥转 pkcs#12 证书 **

	openssl pkcs12 -export -in server.crt -inkey server.key -passin pass:111111 -password pass:111111 -out server.p12

其中 -export 指导出 pkcs#12 证书，-inkey 指定了私钥文件，-passin 为私钥(文件)密码(nodes 为无加密)，-password 指定 p12 文件的密码(导入导出)

** 将 pem 证书和私钥/CA 证书 合成pkcs#12 证书**

	openssl pkcs12 -export -in server.crt -inkey server.key -passin pass:111111 \
    -chain -CAfile ca.crt -password pass:111111 -out server-all.p12

其中 -chain 指示同时添加证书链，-CAfile 指定了 CA 证书，导出的 p12 文件将包含多个证书。(其他选项 -name 可用于指定 server 证书别名；-caname 用于指定 ca 证书别名)

** pcks#12 提取PEM文件(含私钥) **

	openssl pkcs12 -in server.p12 -password pass:111111 -passout pass:111111 -out out/server.pem

其中 -password 指定 p12 文件的密码(导入导出)，-passout 指输出私钥的加密密码(nodes为无加密)
导出的文件为 pem 格式，同时包含证书和私钥(pkcs#8)。

仅提取私钥

	openssl pkcs12 -in server.p12 -password pass:111111 -passout pass:111111 -nocerts -out out/key.pem

仅提取证书(所有证书)

	openssl pkcs12 -in server.p12 -password pass:111111 -nokeys -out out/key.pem

仅提取ca证书

	openssl pkcs12 -in server-all.p12 -password pass:111111 -nokeys -cacerts -out out/cacert.pem 

仅提取server证书

	openssl pkcs12 -in server-all.p12 -password pass:111111 -nokeys -clcerts -out out/cert.pem 


## 自签证书生成
- Certbot fro HTTPS https://certbot.eff.org/lets-encrypt/windows-nginx

一般的 SSL 安全证书签发服务都需要付费，且价格昂贵，不过为了加快推广 HTTPS 的普及，EEF 电子前哨基金会、 Mozilla 基金会和美国密歇根大学成立了一个公益组织叫 ISRG （ Internet Security Research Group ），这个组织从 2015 年开始推出了 Let’s Encrypt 免费证书。这个免费证书不仅免费，而且还相当好用，利用 Let’s Encrypt 提供的信任的证书授权中心 CA 签发的安全证书。到官方站点下载 Certbot 工具，

```sh
# 单域名生成证书：
certbot certonly --email email@demo.com --agree-tos --no-eff-email --webroot -w /to/wwwroot -d www.demo.com

# 多域名单目录生成单证书：(即一个网站多个域名使用同一个证书)
certbot certonly --email email@demo.com --agree-tos --no-eff-email --webroot -w /to/wwwroot -d www.demo.com -d bbs.demo.com

# 多域名多目录生成一个证书：(即一次生成多个域名的一个证书)
certbot certonly --email email@demo.com --agree-tos --no-eff-email --webroot -w /to/A -d www.a.com -d a.com -w /to/B -d b.org
```

使用 OpenSSL 工具箱生成自签证书的各步骤，作为被认证方，先要生成自己的 RSA 密钥对，再生成相应的证认证请求文件，再交给 CA 认证。作为自签证证书，首先就是准备自己签发的证书作为根证书，即 CA 自签证书，再用这个证书去认证。

自签证书在验证逻辑上是没有问题，但是不受浏览器的认可，因为没有没有通过公共注册的可信 CA 机构签发，所以注册器中会显示 Not secure 字样。

先为 Root CA 机构生成 RSA 密钥对，需要设置一个密码短语：

	>openssl genrsa -des3 -out ca.key
	Loading 'screen' into random state - done
	Generating RSA private key, 512 bit long modulus
	.++++++++++++
	...........++++++++++++
	e is 65537 (0x10001)
	Enter pass phrase for ca.key:
	Verifying - Enter pass phrase for ca.key:

然后生成 CA 的证书请求文件 CSR - Certificate Signing Request：

	>openssl req -new -key ca.key -out ca.csr
	Enter pass phrase for ca.key:
	You are about to be asked to enter information that will be incorporated
	into your certificate request.
	What you are about to enter is what is called a Distinguished Name or a DN.
	There are quite a few fields but you can leave some blank
	For some fields there will be a default value,
	If you enter '.', the field will be left blank.
	-----
	Country Name (2 letter code) [AU]:CN
	State or Province Name (full name) [Some-State]:Guangdong
	Locality Name (eg, city) []:Heyuan
	Organization Name (eg, company) [Internet Widgits Pty Ltd]:Xamarin
	Organizational Unit Name (eg, section) []:Tech.
	Common Name (eg, YOUR name) []:Xamware
	Email Address []:jeango@gmail.com

	Please enter the following 'extra' attributes
	to be sent with your certificate request
	A challenge password []:12dfsa
	An optional company name []:Xamware

再按 -x509 格式产生自签名的证书 crt：

	>openssl x509 -req -days 731 -sha1 -extensions v3_cs -signkey ca.key -in ca.csr -out ca.crt
	Loading 'screen' into random state - done
	Signature ok
	subject=/C=CN/ST=Guangdong/L=Heyuan/O=Xamarin/OU=Tech./CN=Xamware/emailAddress=jeango@gmail.com
	Getting Private key
	Enter pass phrase for ca.key:

接下来，按同样的操作，利用前面生成的 CA 证书来为其它申请者提供证书签名服务，为证书请求方生成 RSA 密钥对，这里使用 2048 位密码长度，前面使用默认 512 位密码，位数太低可能被认为证书是一个无效的数字签名。然后再生成证书认证请求文件，需要前面设置的密码短语，按要求输入证书申请方信息：

	openssl genrsa -des3 -out server.key 2048
	
	openssl req -new -key server.key -out server.req
	
	openssl x509 -req -days 731 -sha1 -extensions v3_req -CA ca.crt -CAkey ca.key -CAserial ca.srl -CAcreateserial -in server.req -out server.crt

	openssl pkcs12 -export -in server.crt -inkey server.key -out server.pfx

	openssl x509 -in server.crt -out server.pem -outform PEM


前面生成证书认证请求填入的资料对应表示简略：

	Email Address				E = jeango@gmail.com
	Common Name					CN = Xamware
	Locality Name				OU = Tech.
	Organization Name			O = Xamarin
	Organizational Unit Name	L = Heyuan
	State or Province name		S = Guangdong
	Country Name				C = CN

可以通过 -subj 参数传入认证请求方信息，连带密码生成一步操作生成自签证书：

	openssl req -newkey rsa:2048 -nodes -keyout ca.key -x509 -days 731 -out ca.crt -subj "/C=CN/ST=GD/L=HY/O=Xamarin/OU=Tech./CN=Xamware/emailAddress=jeango@gmail.com"

一步生成证书密钥及请求文件，注意，Common Name(CN) 很重要的，它代表你的证书的持有者，如果你为网站申请的证书，就设置为域名或 IP 地址：

	openssl req -newkey rsa:2048 -nodes -extensions v3_req -keyout server.key -days 731 -out server.csr -subj "/C=CN/ST=GD/L=HY/O=Xamarin/OU=Tech./CN=xamware.com/emailAddress=jeango@xamware.com"

对证书请进行签名：

	openssl x509 -req -days 731 -in server.csr -CA ca.crt -CAkey ca.key -passin pass:123456 -CAcreateserial -out server.crt

譬如，给本地主机签发证书，并转换格式：

	openssl req -newkey rsa:2048 -nodes -keyout localhost.key -days 731 -out localhost.csr -subj "/C=CN/ST=GD/L=HY/O=Xamarin/OU=Tech./CN=localhost/emailAddress=jeango@xamware.com"

	openssl x509 -req -days 731 -in localhost.csr -CA ca.crt -CAkey ca.key -passin pass:123456 -CAcreateserial -out localhost.crt

	openssl pkcs12 -export -in localhost.crt -inkey localhost.key -out localhost.pfx


网站域名使用的证书可以有多个域名配置，查看 SSL 证书的详细信息可以发现有个 SSL 证书配置使用者可选名称。搭建微型 CA 中心应用，配合 openssl ca 命令可以实现，要使用证书的可选名称还需要修改 openssl.cnf 配置文件。

	# 确保req下存在以下2行（默认第一行是有的，第2行被注释了）
	[ req ]
	distinguished_name = req_distinguished_name
	req_extensions = v3_req

	# 确保req_distinguished_name下没有 0.xxx 的标签，有的话把0.xxx的0. 去掉
	[ req_distinguished_name ]
	countryName              = Country Name (2 letter code)
	countryName_default = CN
	stateOrProvinceName             = State or Province Name (full name)
	stateOrProvinceName_default = ShangHai
	localityName              = Locality Name (eg, city)
	localityName_default = ShangHai
	organizationalUnitName             = Organizational Unit Name (eg, section)
	organizationalUnitName_default = Domain Control Validated
	commonName         = Internet Widgits Ltd
	commonName_max = 64

	# 新增两行内容 extendedKeyUsage 和 subjectAltName 配置，前 2 行默认存在
	[ v3_req ]
	# Extensions to add to a certificate request
	basicConstraints = CA:FALSE
	keyUsage = nonRepudiation, digitalSignature, keyEncipherment
	extendedKeyUsage = serverAuth, clientAuth
	subjectAltName = @alt_names

	# 新增 alt_names,注意括号前后的空格，DNS.x 的数量可以自己加
	[ alt_names ]
	DNS.1 = abc.example.com
	DNS.2 = dfe.example.org
	DNS.3 = ex.abcexpale.net

根据 openssl.cnf 配置的 CA_default：

	[ CA_default ]

	dir        = ./demoCA        # Where everything is kept

建立目录结构，建立 index.txt 空文件，用于 OpenSSL 记录认证过的证书。写入两位到四位字符到 serial 文件用于序列号记录，序列号会在证书上显示，可以是字母或数字：

	md demoCA
	md demoCA\certs
	md demoCA\crl
	md demoCA\newcerts
	md demoCA\private
	set /p=""echo > demoCA\index.txt
	set /p="00"echo >> demoCA\serial

然后使用 ca 命令 Sample Minimal CA application 对证书谁申请文件签名就可以拥有 SSL 证书配置使用者可选名称，匹配多个 DNS 域名解析功能。要求 Common Name 填写的主域名也要在 openssl.cnf 的 DNS.x 里设置，Organization Name 即 O 对应的组织要和 CA 一致。

	>openssl ca -in localhost.csr -out localhost.crt -cert ca.crt -keyfile ca.key -extensions v3_req
	Using configuration from c:/coding/alipay/openssl/openssl.cnf
	Loading 'screen' into random state - done
	Check that the request matches the signature
	Signature ok
	Certificate Details:
	        Serial Number: 0 (0x0)
	        Validity
	            Not Before: Jun  5 12:16:51 2020 GMT
	            Not After : Jun  5 12:16:51 2021 GMT
	        Subject:
	            countryName               = CN
	            stateOrProvinceName       = GD
	            organizationName          = Xamarin
	            organizationalUnitName    = Tech.
	            commonName                = localhost
	            emailAddress              = jeango@xamware.com
	        X509v3 extensions:
	            X509v3 Basic Constraints:
	                CA:FALSE
	            X509v3 Key Usage:
	                Digital Signature, Non Repudiation, Key Encipherment
	            X509v3 Subject Alternative Name:
	                DNS:localhost, DNS:192.168.0.112, DNS:192.168.43.203
	Certificate is to be certified until Jun  5 12:16:51 2021 GMT (365 days)
	Sign the certificate? [y/n]:y


	1 out of 1 certificate requests certified, commit? [y/n]y
	Write out database with 1 new entries
	Data Base Updated

证书用法 keyUsage 基本配置中没有特别指定，如果不指定，则默认为 所有应用程序策略。

| extendedKeyUsage	| 扩展证书目的或用途 |
| :---------------	| :--------------- |
| serverAuth	| 保证远程计算机的身份 |
| clientAuth	| 向远程计算机证明你的身份 |
| codeSigning	| 确保软件来自软件发布者，保护软件在发行后不被更改 |
| emailProtection	| 保护电子邮件消息 |
| timeStamping	| 允许用当前时间签名数据 |


Chrome 不能识别证书通用名称 NET::ERR_CERT_COMMON_NAME_INVALID 错误，是由于 SAN - Subject Alternative Name 属性引起的。 

Google Chrome 58 做了 SSL 安全相关的变动，之前版本支持检查 SSL 证书对域名生效的 Common Name 通用名称字段。更新版本后，只通过校验 SAN 属性验证证书的有效性，此更改只会影响私有 PKI 和其他未遵循规范的软件。

解决方法就是重新生成域名包含在 SAN 扩展属性中的 CSR 证书申请文件，并提交申请谁，收到新签发的证书后重新导入应用使用。 

通过前面配置的 subjectAltName 扩展为 dNSName 即是解决 Chrome 这一问题的。

FQDN：(Fully Qualified Domain Name)全限定域名：同时带有主机名和域名的名称。

关于证书友好名称，在 .Net 上使用 X509Certificate2.FriendlyName 但是，您必须将证书导出为 PFX 或 PKCS＃12，它们等价使用：

	X509Certificate2 certificate = new X509Certificate2(
		pfx_file, password,  X509KeyStorageFlags.Exportable);
	certificate.FriendlyName = "MyName";
	File.WriteAllBytes(path, certificate.Export(X509ContentType.Pfx));

对要求双向验证的应用，可以使用 OpenSSL 检查服务端和客户端证书：

	openssl x509 -in server.crt -text -noout
	openssl verify -CAfile ca.crt server.crt

	openssl x509 -in client.crt -text -noout
	openssl verify -CAfile ca.crt client.crt
 
OpenSSL 提供的 s_server 和 s_client 命令用于测试 SSL 握手链接是否能正常密钥协商。

测试单向认证

	openssl s_server -accept 10001 -key server.key -cert server.crt
	openssl s_client -connect localhost:443
	openssl s_client -connect localhost:443 -CAfile ca.crt

测试双向认证

	openssl s_server -accept 10001 -key localhost.key -cert localhost.crt -Verify 5
	openssl s_client -connect localhost:443
	openssl s_client -connect localhost:443 -cert client.crt -key client.key

以下是验证通过与验证失败的相应提示信息：

	Verify return code: 0 (ok)
	Verify return code: 21 (unable to verify the first certificate)



## 信息摘要算法

Message Digest Algorithm 消息摘要算法缩写为MD，一种被广泛使用的密码散列函数，其中以 MD5消息摘要算法为普遍。
Secure Hash Algorithm 缩写为SHA，密码散列函数。能计算出一个数字消息所对应到的，固定长度字符串的算法，也是消息摘要算法的一种。

这些算法（md,sha）之所以称作安全算法基于以下两点：
（1）由消息摘要反推原输入消息，从计算理论上来说是很困难的。但目前有人制造出碰撞的可能了，大大减弱了安全性。
（2）想要找到两组不同的消息对应到相同的消息摘要，从计算理论上来说是很困难的。任何对输入消息的变动，都会很高概率导致其产生的消息摘要迥异。

HMAC：散列消息身份验证码 Hashed Message Authentication Code 。

根据RFC 2316，HMAC以及IPSec被认为是Interact安全的关键性核心协议。它不是散列函数，而是采用了将MD5或SHA1散列函数与共享机密密钥(与公钥/私钥对不同)一起使用的消息身份验证机制。基本来说，消息与密钥组合并运行散列函数。然后运行结果与密钥组合并再次运行散列函数。这个128位的结果被截断成96位，成为MAC。然后创建两个B长的不同字符串：

	innerpad = 长度为B的 0×36
	outterpad = 长度为B的 0×5C
	计算输入字符串str的HMAC：
	hash(key ^ outterpad, hash(key ^ innerpad, str))

hmac主要应用在身份验证中，它的使用方法是这样的：

	1. 客户端发出登录请求（假设是浏览器的GET请求）
	2. 服务器返回一个随机值，并在会话中记录这个随机值
	3. 客户端将该随机值作为密钥，用户密码进行hmac运算，然后提交给服务器
	4. 服务器读取用户数据库中的用户密码和步骤2中发送的随机值做与客户端一样的hmac运算，然后与用户发送的结果比较，如果结果一致则验证用户合法

在这个过程中，可能遭到安全攻击的是服务器发送的随机值和用户发送的hmac结果，而对于截获 了这两个值的黑客而言这两个值是没有意义的，绝无获取用户密码的可能性，随机值的引入使hmac只在当前会话中有效，大大增强了安全性和实用性。大多数的 语言都实现了hmac算法，比如php的mhash、python的hmac.py、java的MessageDigest类，在web验证中使用 hmac也是可行的，用js进行md5运算的速度也是比较快的。



## PHP RSA 应用


PHP 与 OpenSSL AES 对称加密，开始之前需要将 php.ini 配置文件的 ;extension=php_openssl.dll 改为 extension=php_openssl.dll。

	openssl_encrypt()
	openssl_decrypt() 

微信公众平台/小程序使用的AES算法是 AES-128-CBC + OPENSSL_RAW_DATA。


RSA 使用非对称加解密字符长度是 密钥长度/8bit=字节的长度，如1024对应的数据分组长度128字节，2048对数据分组256字节。 RSA加密解密有四个配置的方法，使用私钥加密就对应公钥解密，反之公钥加密就用私钥解密，配套使用。

	openssl_private_encrypt() - Encrypts data with private key
	openssl_private_decrypt() - Decrypts data with private key
	openssl_public_encrypt() - Encrypts data with public key
	openssl_public_decrypt() - Decrypts data with public key

PEM密钥文件读取配套方法

	openssl_pkey_get_private(file_get_contents($path)); 
	openssl_pkey_get_public(file_get_contents($path)); 

OpenSSL模块提供丰富的功能，包括密钥生成API都有。


签名与验证使用配套方法

	openssl_sign()
	openssl_verify()

注意，阿里支付使用的签名算法是 OPENSSL_ALGO_SHA256，默认的是 OPENSSL_ALGO_SHA1。

	exec('chcp 936');

	date_default_timezone_set("Asia/Shanghai"); 

	class Crypto{

		const KEYSIZE = 2048;
		const CONF = 'alipay/openssl/openssl.cnf';
		const PRIVATEKEY = "./keys/2048_private_key.pem";
		const PUBLICKEY  = "./keys/2048_public_key.pem";

		static function keygen(){
			// window系统要设置openssl环境变量或通过配置信息指定配置文件
			$conf = array(
			    'private_key_bits' => self::KEYSIZE,
			    'config' => self::CONF,
			);
			$res = openssl_pkey_new($conf);
			if( $res ) {
				$d= openssl_pkey_get_details($res);
				$pub = $d['key'];
				$bits = $d['bits'];
				$filepath = $bits.'_rsa_private_key.pem';
				openssl_pkey_export($res, $pri, null, $conf);
				openssl_pkey_export_to_file($res, $filepath, null, $conf);
				print_r(["private_key"=>$pri, "public_key"=>$pub, "keysize"=>$bits]);
			}else echo "openssl_pkey_new falls";
		}

		static function encrypt($msg, $key, $method="AES-128-CBC", $options=OPENSSL_RAW_DATA){
			$ivlen  = openssl_cipher_iv_length($method);
			$iv     = openssl_random_pseudo_bytes($ivlen);
			$cipher = openssl_encrypt($msg, $method, $key, $options, $iv);
			$hmac   = hash_hmac('sha256', $cipher, $key, $as_binary=true);
			$cipher = base64_encode( $iv.$hmac.$cipher );
			return $cipher;
		}

		static function decrypt($cipher, $key, $method="AES-128-CBC", $options=OPENSSL_RAW_DATA){
			$c       = base64_decode($cipher);
			$ivlen   = openssl_cipher_iv_length($method);
			$iv      = substr($c, 0, $ivlen);
			$hmac    = substr($c, $ivlen, $sha2len=32);
			$cipher  = substr($c, $ivlen+$sha2len);
			$msg     = openssl_decrypt($cipher, $method, $key, $options, $iv);
			$calcmac = hash_hmac('sha256', $cipher, $key, $as_binary=true);
			if( hash_equals($hmac, $calcmac) ) return $msg;//PHP 5.6+ timing attack safe comparison
			return false;
		}

		static function getPublicKey()
		{
			$pem = file_get_contents(self::PUBLICKEY);
			// $pem = chunk_split(base64_encode($pem),64,"\n"); // transfer to pem format
			// $pem = "-----BEGIN CERTIFICATE-----\n".$pem."-----END CERTIFICATE-----\n";
			$publicKey = openssl_pkey_get_public($pem);
			return $publicKey;
		}
		
		static function getPrivateKey()
		{
			$pem = file_get_contents(self::PRIVATEKEY);
			// $pem = chunk_split($pem,64,"\n"); // transfer to pem format
			// $pem = "-----BEGIN PRIVATE KEY-----\n".$pem."-----END PRIVATE KEY-----\n";
			$privateKey = openssl_pkey_get_private($pem);
			return $privateKey;
		}
		
		static function sign($msg, $algorithm=OPENSSL_ALGO_SHA256){
			$sign = "";
			$key = self::getPrivateKey();
			// OPENSSL_ALGO_SHA256 OPENSSL_ALGO_MD5 OPENSSL_ALGO_SHA1
			openssl_sign($msg, $sign, $key, $algorithm);
			$sign = base64_encode($sign);
			openssl_free_key($key);
			return $sign;
		}
		
		static function verify($msg, $sign, $algorithm=OPENSSL_ALGO_SHA256){
			$sign = base64_decode($sign);
			$key = self::getPublicKey();
			$result = openssl_verify($msg, $sign, $key, $algorithm);
			openssl_free_key($key);
			return $result;
		}

		static function publicEncrypt($source_data) {
			$data = "";
			$key = self::getPublicKey();
			$dataArray = str_split($source_data, self::KEYSIZE/8);
			foreach ($dataArray as $value) {
				$encryptedTemp = ""; 
				openssl_public_encrypt($value,$encryptedTemp,$key,OPENSSL_PKCS1_PADDING);
				$data .= $encryptedTemp;
			}
			openssl_free_key($key);
			return base64_encode($data);
		}
		
		static function privateDecrypt($eccryptData) {
			$decrypted = "";
			$decodeStr = base64_decode($eccryptData);
			$key = self::getPrivateKey();
			$enArray = str_split($decodeStr, self::KEYSIZE/8);

			foreach ($enArray as $va) {
				$decryptedTemp = "";
				openssl_private_decrypt($va,$decryptedTemp,$key,OPENSSL_PKCS1_PADDING);
				$decrypted .= $decryptedTemp;
			}
			openssl_free_key($key);
			return $decrypted;
		}

		static function privateEncrypt($source_data) {
			$data = "";
			$dataArray = str_split($source_data, self::KEYSIZE/8);
			$key = self::getPrivateKey();
			foreach ($dataArray as $value) {
				$encryptedTemp = ""; 
				openssl_private_encrypt($value,$encryptedTemp,$key,OPENSSL_PKCS1_PADDING);
				$data .= $encryptedTemp;
			}
			openssl_free_key($key);
			return base64_encode($data);
		}

		static function publicDecrypt($eccryptData) {
			$decrypted = "";
			$decodeStr = base64_decode($eccryptData);
			$key = self::getPublicKey();
			$enArray = str_split($decodeStr, self::KEYSIZE/8);

			foreach ($enArray as $va) {
				$decryptedTemp = "";
				openssl_public_decrypt($va,$decryptedTemp,$key,OPENSSL_PKCS1_PADDING);
				$decrypted .= $decryptedTemp;
			}
			openssl_free_key($key);
			return $decrypted;
		}
		
	}

	$plain  = "Some secret here for you ...";
	$key    = openssl_random_pseudo_bytes(32);

	$cipher = Crypto::encrypt($plain, $key);
	$msg    = Crypto::decrypt($cipher, $key);
	print_r(['明文'=>$plain, '密码'=>base64_encode($key), '解密'=>$msg, '密文'=>$cipher]);

	$plain  = "利用公钥加密，私钥解密做数据保密通信!";
	$cipher = Crypto::publicEncrypt($plain);
	// $cipher = "填入Java生成的密文(Base64编码)以解密";
	$msg    = Crypto::privateDecrypt($cipher);
	print_r(['明文'=>$plain, '解密'=>$msg, '密文'=>$cipher]);

	$plain  = "利用私钥加密，公钥解密可以做身份验证";
	$cipher = Crypto::privateEncrypt($plain);
	$msg    = Crypto::publicDecrypt($cipher);
	print_r(['明文'=>$plain, '解密'=>$msg, '密文'=>$cipher]);

	$msg    = 'a=123';
	$sign   = Crypto::sign($msg);
	$verify = Crypto::verify($msg, $sign);
	print_r(['预签'=>$msg, '签名'=>$sign, '验证'=>$verify==1?"PASS":"FAIL"]);


## 心脏滴血漏洞

Heartbleed漏洞是由安全公司Codenomicon和谷歌安全工程师于2014年4月7号公布的。主要受影响的是OpenSSL1.0.1版本，Heartbleed漏洞是由于未能在memcpy()调用受害用户输入内容作为长度参数之前正确进行边界检查。攻击者可以追踪OpenSSL所分配的64KB缓存、将超出必要范围的字节信息复制到缓存当中再返回缓存内容，这样一来受害者的内存内容就会以每次64KB的速度进行泄露。



# Java RSA 与 keytool 

阿里支付开发文档生成RSA密钥工具 - https://docs.open.alipay.com/291/106097/
Keytool Manages a keystore (database) - https://docs.oracle.com/javase/8/docs/technotes/tools/windows/keytool.html
KeyStore工具类 - https://docs.oracle.com/javase/6/docs/api/java/security/KeyStore.html
KeyPair工具类 - https://docs.oracle.com/javase/7/docs/api/java/security/KeyPair.html
Cipher加密解密工具 - https://docs.oracle.com/javase/7/docs/api/javax/crypto/Cipher.html
Java&keytool生成RSA密钥 - https://bijian1013.iteye.com/blog/2339874

## 生成公钥和私钥

生成方法一是使用 Java 提供的工具类 KeyPairGenerator 生成公钥和私钥。另一种是使用第三方工具软件如 OpenSSl 来生成，使用OpenSSL生成密钥时，要转换成 Java 使用的 PKCS8 格式，读入时使用 PKCS8EncodedKeySpec 工具类即可以导入密钥。还有JDK自带的 keytool 这个密钥和证书管理工具，它能够管理自己的公钥/私钥对及相关证书，可用于自签认证或数据完整性以及认证服务。在JDK 1.4以后的版本中都包含了这一工具，可以在 JAVA_HOME 的 bin 目录下找到。如果使用 .net 平台，还可以使用 makecert 这个密钥管理工具。

使用 keytool -genkeypair 命令生成密钥仓库文件，早期版本使用 -genkey，对于现有仓库文件，可以使用 keytool -list 来查看内容。通过 -keypass 可以指定密码来加密存储，至少6个字符，可以是纯数字或者字母或者数字和字母的组合等等。所有keystore的条目可以通过一个唯一别名来访问，别名设置通过 -alias 参数指定。-keyalg 指定加密算法，本例中的采用通用的RAS加密算法; -keystore 密钥库的路径及名称，不指定的话，默认在操作系统的用户目录下生成一个".keystore"的文件。库文件格式默认为 JKS，如果通过 -storetype 指定其它格式，那后续使用其它命令时也要相应指定相同格式。

生成仓库文件后，通过 keyStore 类来读取私钥，公钥可以导出在crt证书保存，然后使用证书工厂类 CertificateFactory 进行读取，也可以通过 KeyStore 工具类在仓库中提取证书。以下命令生成密码仓库及导出证书CRT文件供参考：

	keytool -genkey -v -alias Heartbleed -dname "CN=Heartbleed,OU=HE,O=CUI,L=HAIDIAN,ST=BEIJING,C=CN" -keyalg RSA -keysize 1024 -keypass xxxxxx -keystore Heartbleed.store -storepass xxxxxx -validity 10000 -storetype JCEKS
	keytool -exportcert -alias Heartbleed -file Heartbleed.crt -keystore Heartbleed.store -storepass xxxxxx -rfc -storetype JCEKS

	keytool -list -storetype JCEKS -keystore Heartbleed.store        查看库里面的所有证书
	keytool -export -alias test1 -file test.crt -keystore Heartbleed.store 证书条目导出到证书文件Heartbleedcrt
	keytool -import -keystore Heartbleed.store -file Heartbleed.crt  将证书文件Heartbleedcrt导入到仓库文件
	keytool -printcert -file "Heartbleed.crt"   查看证书信息
	keytool -delete -keystore Heartbleed.store -alias test1          删除密钥库中的指定别名的条目
	keytool -keypasswd -alias test2 -keystore Heartbleed.store       修改证书指定别名条目的口令

## 密钥库文件格式【Keystore】 

	格式     扩展名    描述及特点
	JKS     .jks .ks  【Java Keystore】 SUN提供密钥库的Java实现版本        密钥库和私钥用不同的密码进行保护
	JCEKS   .jce      【JCE Keystore】 SUN JCE提供密钥库的JCE实现版本      相对于JKS安全级别更高，保护Keystore私钥时采用TripleDES
	PKCS12  .p12 .pfx 【PKCS #12】 个人信息交换语法标准                    1、包含私钥、公钥及其证书 2、密钥库和私钥用相同密码进行保护
	BKS     .bks      【Bouncycastle Keystore】 密钥库的BC实现版本         基于JCE实现
	UBER    .ubr      【Bouncycastle UBER Keystore】 密钥库的BC更安全实现版本

## 证书文件格式【Certificate】 

	格式     扩展名           描述及特点
	DER     .cer .crt .rsa   【ASN .1 DER】用于存放证书           不含私钥、二进制
	PKCS7   .p7b .p7r        【PKCS #7】加密信息语法标准           p7b以树状展示证书链，不含私钥；p7r为CA对证书请求签名的回复，只能用于导入。
	CMS     .p7c .p7m .p7s   【Cryptographic Message Syntax】    p7c只保存证书，p7m：signature with enveloped data，p7s：时间戳签名文件
	PEM     .pem             【Printable Encoded Message】       PEM是【Privacy-Enhanced Mail】广泛运用于密钥管理，一般基于base 64编码。
	PKCS10  .p10 .csr        【PKCS #10】公钥加密标准【Certificate Signing Request】 证书签名请求文件，ASCII文件，CA签名后以p7r文件回复。
	SPC     .pvk .spc        【Software Publishing Certificate】 微软公司特有的双证书文件格式，经常用于代码签名，其中pvk用于保存私钥，spc用于保存公钥。

## Java 动态签发 ssl 证书
- https://github.com/monkeyWie/proxyee

Java 自带的 SSL 以及 X509 库只能使用 SSL 证书，不能生成 SSL 证书。因此，在中间人模式中，要动态给目标生成证书就要使用 Bouncy Castle 这个算法库来实现 SSL 证书的生成。

	//maven
	<dependency>
	    <groupId>org.bouncycastle</groupId>
	    <artifactId>bcprov-jdk15on</artifactId>
	    <version>1.49</version>
	</dependency>

	//注册bouncycastle
	Security.addProvider(new BouncyCastleProvider());
	//生成ssl证书公钥和私钥
	KeyPairGenerator caKeyPairGen = KeyPairGenerator.getInstance("RSA", "BC");
	caKeyPairGen.initialize(2048, new SecureRandom());
	PrivateKey serverPriKey = keyPair.getPrivate();
	PublicKey  serverPubKey = keyPair.getPublic();
	//通过CA私钥动态签发ssl证书
	public static X509Certificate genCert(String issuer, PublicKey serverPubKey, PrivateKey caPriKey, String host) throws Exception {
	        X509V3CertificateGenerator v3CertGen = new X509V3CertificateGenerator();
	        String issuer = "C=CN, ST=GD, L=SZ, O=lee, OU=study, CN=ProxyeeRoot";
	        String subject = "C=CN, ST=GD, L=SZ, O=lee, OU=study, CN=" + host;
	        v3CertGen.reset();
	        v3CertGen.setSerialNumber(BigInteger.valueOf(System.currentTimeMillis()));
	        v3CertGen.setIssuerDN(new X509Principal(issuer));
	        v3CertGen.setNotBefore(new Date(System.currentTimeMillis() - 10 * ONE_DAY));
	        v3CertGen.setNotAfter(new Date(System.currentTimeMillis() + 3650 * ONE_DAY));
	        v3CertGen.setSubjectDN(new X509Principal(subject));
	        v3CertGen.setPublicKey(serverPubKey);
	        //SHA256 Chrome需要此哈希算法否则会出现不安全提示
	        v3CertGen.setSignatureAlgorithm("SHA256WithRSAEncryption");
	        //SAN扩展 Chrome需要此扩展否则会出现不安全提示
	        GeneralNames subjectAltName = new GeneralNames(new GeneralName(GeneralName.dNSName, host));
	        v3CertGen.addExtension(X509Extensions.SubjectAlternativeName, false, subjectAltName);
	        X509Certificate cert = v3CertGen.generateX509Certificate(caPriKey);
	        return cert;
	    }


## 加密与解密

使用工具类 javax.crypto.Cipher，其初始化方法 init 中指定一个模式常数来明确是加密或是解密

	Cipher.ENCRYPT_MODE 1
	Cipher.DECRYPT_MODE 2
	Cipher.WRAP_MODE    3
	Cipher.UNWRAP_MODE  4

在不同的系统中RSA要实现互通，必须要有统一的参数，如IV值，PADDING等。

## 签名与验证

java.security.Signature 这个工具类用于签名与验证


	import java.security.Key;
	import java.security.KeyFactory;
	import java.security.KeyPair;
	import java.security.KeyPairGenerator;
	import java.security.KeyStore;
	import java.security.KeyStoreException;
	import java.security.InvalidKeyException;
	import java.security.NoSuchAlgorithmException;
	import java.security.PrivateKey;
	import java.security.PublicKey;
	import java.security.Signature;
	import java.security.cert.Certificate;
	import java.security.cert.CertificateException;
	import java.security.cert.CertificateFactory;
	import java.security.interfaces.RSAPrivateKey;
	import java.security.interfaces.RSAPublicKey;
	import java.security.spec.PKCS8EncodedKeySpec;
	import java.security.spec.X509EncodedKeySpec;

	import java.io.File;
	import java.io.FileWriter;
	import java.io.FileReader;
	import java.io.FileInputStream;
	import java.io.FileNotFoundException;
	import java.io.FileOutputStream;
	import java.io.InputStream;
	import java.io.ObjectOutputStream;
	import java.io.ObjectInputStream;

	import java.util.HashMap;
	import java.util.Map;

	import javax.crypto.Cipher;
	import javax.crypto.KeyGenerator;
	import javax.crypto.SecretKey;

	import java.util.Base64;
	import java.util.regex.Pattern;
	import java.util.regex.Matcher;
	import java.util.regex.PatternSyntaxException;

	public class coding {

		static final String PATH_STORE = "./keys/Heartbleed.store";
		static final String STORE_ALIAS = "Heartbleed";
		static final String STORE_TYPE = "JCEKS";
		static final String STORE_PASS = "xxxxxx";
		static final String PATH_PRIVATE_KEY = "./keys/2048_private_key_pkcs8.pem";
		static final String PATH_PUBLIC_KEY  = "./keys/2048_public_key.pem";
		static final String PATH_CERTIFICATE = "./keys/Heartbleed.crt" ; // KeyTool导出的证书文件

		static public void main(String args[]) throws Exception {
			// keygen();
			// exportKeysFromStore();
			// 字符串定长拆分
			// log( String.join("|","abcdefghijklm".split("(?=(.{3})+(?!.))")) );
			// log( String.join("|","abcdefghijklm".split("(?<=\\G.{4})(?!$)")) );
			test();
		}

		static public void test() throws Exception {
			PrivateKey privateKey = getPrivateKey();
			PublicKey  publicKey  = getPublicKey();
			byte[] bytePrivate = privateKey.getEncoded();
			byte[] bytePublic = publicKey.getEncoded();
			String strPrivate = Base64.getEncoder().encodeToString(bytePrivate);
			String strPublic = Base64.getEncoder().encodeToString(bytePublic);
			// log("私钥("+ privateKey.getFormat() + ")\r\n" + strPrivate);
			// log("公钥("+ publicKey.getFormat() + ")\r\n" + strPublic );
			
			String content = "利用公钥加密，私钥解密做数据保密通信!";
			Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
			cipher.init(Cipher.ENCRYPT_MODE, publicKey); // 准备公钥加密
			byte[] result = cipher.doFinal(content.getBytes());
			String cipherText = Base64.getEncoder().encodeToString(result);
			log("密文:" + cipherText );
			// result = Base64.getDecoder().decode("填入PHP生成的密文(Base64编码)以解密");
			cipher.init(Cipher.DECRYPT_MODE, privateKey); // 准备私钥解密
			byte[] msg = cipher.doFinal(result);
			log("解密：" + new String(msg));
			log("原文：" + content);

			// 签名与验证
			String signature = sign(content);
			boolean isPass = verify(content, signature);
			log("\n预签："+content+"\n签名："+signature + "\n验证："+(isPass?"PASS":"FAIL") );

			// AES对称加密解密
			KeyGenerator aes = KeyGenerator.getInstance("aes");
			SecretKey key = aes.generateKey();
			Cipher aesCipher = Cipher.getInstance("aes");

			aesCipher.init(Cipher.ENCRYPT_MODE, key);
			byte[] aesResult = aesCipher.doFinal(content.getBytes());
			log("\nAES 加密: " + new String(Base64.getEncoder().encodeToString(aesResult)) );
			aesCipher.init(Cipher.DECRYPT_MODE, key);
			aesResult = aesCipher.doFinal(aesResult);
			log("AES 解密: " + new String(aesResult) );
		}

		public static String sign(String plainText) throws Exception {
			try {
				Signature signet = Signature.getInstance("SHA256withRSA");
				signet.initSign(getPrivateKey());
				signet.update(plainText.getBytes());
				return Base64.getEncoder().encodeToString(signet.sign());
			} catch (Exception e) {
				throw e; 
			}
		}

		public static boolean verify(String plainText, String signText) {
			try {
				byte[] signature = Base64.getDecoder().decode(signText);
				Signature sign = Signature.getInstance("SHA256withRSA");
				sign.initVerify(getPublicKey());
				sign.update(plainText.getBytes());
				return sign.verify(signature);
			} catch (Throwable e) {
				return false;
			}
		}

		private static void exportKeysFromStore() throws Exception {
			KeyPair keys = getKeyPairFromStore();
			PrivateKey privateKey = keys.getPrivate();
			PublicKey publicKey = keys.getPublic();
			byte[] bytePrivate = privateKey.getEncoded();
			byte[] bytePublic = publicKey.getEncoded();
			String base64Private = Base64.getEncoder().encodeToString(bytePrivate);
			String base64Public = Base64.getEncoder().encodeToString(bytePublic);
			base64Private = String.join("\r\n",base64Private.split("(?<=\\G.{64})(?!$)"));
			base64Public = String.join("\r\n",base64Public.split("(?<=\\G.{64})(?!$)"));
			log("私钥("+ privateKey.getFormat() +")\r\n" + base64Private);
			log("公钥("+ publicKey.getFormat() + ")\r\n" + base64Public );
			writeToFile(PATH_PRIVATE_KEY, base64Private, "-----BEGIN PRIVATE KEY-----\n", "-----END PRIVATE KEY-----");
			writeToFile(PATH_PUBLIC_KEY, base64Public, "-----BEGIN PUBLIC KEY-----\n", "-----END PUBLIC KEY-----");
		}

		private static KeyPair getKeyPairFromStore() throws Exception {
			char[] password = STORE_PASS.toCharArray();
			String storeType = "".equals(STORE_TYPE) ? KeyStore.getDefaultType() : STORE_TYPE;
			KeyStore keyStore = KeyStore.getInstance(storeType);
			InputStream file = new FileInputStream(PATH_STORE);
			keyStore.load(file, password);
			Key key = keyStore.getKey(STORE_ALIAS,password);
			if(key instanceof PrivateKey) {
				Certificate cert = keyStore.getCertificate(STORE_ALIAS);
				PublicKey publicKey = cert.getPublicKey();
				return new KeyPair(publicKey,(PrivateKey)key);
			}
			return null;
		}

		/**
		 * 读取base64编码的公钥文件并构造 PKCS#8 格式的私钥
		 * @return PublicKey
		 */
		public static PrivateKey getPrivateKey() throws Exception{
			String text = readFile(PATH_PRIVATE_KEY);
			text = text.replaceAll("\r|\n","").replace("-----BEGIN PRIVATE KEY-----","").replace("-----END PRIVATE KEY-----","");
			byte[] data = Base64.getDecoder().decode(text);
			PKCS8EncodedKeySpec pkcs8 = new PKCS8EncodedKeySpec(data);
			KeyFactory factory = KeyFactory.getInstance("RSA");
			PrivateKey key = factory.generatePrivate(pkcs8);
			return key;
		}

		/**
		 * 读取base64编码的公钥文件并构造X509EncodedKeySpec格式的公钥
		 * @return PublicKey
		 */
		public static PublicKey getPublicKey() throws Exception{
			String text = readFile(PATH_PUBLIC_KEY);
			text = text.replaceAll("\r|\n","").replace("-----BEGIN PUBLIC KEY-----","").replace("-----END PUBLIC KEY-----","");
			byte[] data = Base64.getDecoder().decode(text);
			X509EncodedKeySpec x509 = new X509EncodedKeySpec(data);
			KeyFactory factory = KeyFactory.getInstance("RSA");
			PublicKey key = factory.generatePublic(x509);
			return key;
		}

		private static PublicKey getPublicKeyFromCrt() throws CertificateException, FileNotFoundException {
			CertificateFactory factory = CertificateFactory.getInstance("X.509");
			FileInputStream file = new FileInputStream(PATH_CERTIFICATE);
			Certificate crt = factory.generateCertificate(file);
			PublicKey publicKey = crt.getPublicKey();
			return publicKey;
		}

		private static PrivateKey getPrivateKeyFromStore() throws Exception {  
			String storeType = "".equals(STORE_TYPE) ? KeyStore.getDefaultType() : STORE_TYPE; ;
			char[] pw = STORE_PASS.toCharArray();
			KeyStore keyStore = KeyStore.getInstance(storeType);  
			InputStream file = new FileInputStream(PATH_STORE);  
			keyStore.load(file, pw);  
			// 由密钥库获取密钥的两种方式  
			// KeyStore.PrivateKeyEntry pkEntry = keyStore.getEntry(STORE_ALIAS, new KeyStore.PasswordProtection(pw));  
			// return pkEntry.getPrivateKey();  
			return (PrivateKey) keyStore.getKey(STORE_ALIAS, pw);  
		}

		public static void keygen() throws Exception{
			File k1 =new File(PATH_PRIVATE_KEY);    
			File k2 =new File(PATH_PUBLIC_KEY);    
			if( k1.exists() && k2.exists() && !k1.isDirectory()){
				log("Key file exists and return now...");
				return;
			}
			KeyPairGenerator keygen = KeyPairGenerator.getInstance("RSA");
			keygen.initialize(2048);
			KeyPair keyPair = keygen.generateKeyPair();
			PrivateKey privateKey = keyPair.getPrivate();
			PublicKey publicKey = keyPair.getPublic();
			byte[] bytePrivate = privateKey.getEncoded();
			byte[] bytePublic = publicKey.getEncoded();
			String base64Private = Base64.getEncoder().encodeToString(bytePrivate);
			String base64Public = Base64.getEncoder().encodeToString(bytePublic);
			base64Private = String.join("\r\n",base64Private.split("(?<=\\G.{64})(?!$)"));
			base64Public = String.join("\r\n",base64Public.split("(?<=\\G.{64})(?!$)"));
			writeToFile(PATH_PRIVATE_KEY, base64Private, "-----BEGIN PRIVATE KEY-----\n", "-----END PRIVATE KEY-----");
			writeToFile(PATH_PUBLIC_KEY, base64Public, "-----BEGIN PUBLIC KEY-----\n", "-----END PUBLIC KEY-----");
			log("私钥("+ privateKey.getFormat() +")\r\n" + base64Private);
			log("公钥("+ publicKey.getFormat() + ")\r\n" + base64Public );
			// hibernate(bytePrivate, PATH_PRIVATE_KEY);
			// hibernate(bytePrivate, PATH_PUBLIC_KEY);
		}

		private static void writeToFile(String path, String data, String header, String footer) throws Exception {
			FileWriter fw = new FileWriter(path);
			fw.write(header);
			fw.write(data);
			fw.write("\n");
			fw.write(footer);
			fw.close();
		}

		private static String readFile(String path) throws Exception{
			FileReader file = new FileReader(path);
			char[] buffer = new char[1024*1024];
			int size = file.read(buffer, 0, 1024*1024);
			// while( file.read(buffer, 0, 1024) )...
			return new String(buffer,0,size);
		}

		private static void hibernate(Object key, String path) throws Exception {
			try{
				FileOutputStream fo = new FileOutputStream(path);
				ObjectOutputStream oo = new ObjectOutputStream(fo);
				oo.writeObject(key);
				oo.flush();
				oo.close();
			}catch(Exception e){
				log(e.getMessage());
			}finally{
			}
		}

		private static Key restore(String path) throws Exception {
			try{
				FileInputStream fi = new FileInputStream(path);
				ObjectInputStream oi = new ObjectInputStream(fi);
				Key key = (Key)oi.readObject();
				oi.close();
				return key;
			}catch( Exception e){
				log(e.getMessage());
			}finally{
				return null;
			}
		}

		static public void log(String t){
			System.out.println(t);
		}
		
	}

