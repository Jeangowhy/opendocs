注意：window平台可以使用chcp命令修改代码页以显示多字节内容，如utf-8的代码页是65001：

    chcp 65001

# curl --help
https://curl.se/docs/manpage.html

Usage: curl [options...] <url>
     --abstract-unix-socket <path> Connect via abstract Unix domain socket
     --alt-svc <file name> Enable alt-svc with this cache file
     --anyauth       Pick any authentication method
 -a, --append        Append to target file when uploading
     --basic         Use HTTP Basic Authentication
     --cacert <file> CA certificate to verify peer against
     --capath <dir>  CA directory to verify peer against
 -E, --cert <certificate[:password]> Client certificate file and password
     --cert-status   Verify the status of the server certificate
     --cert-type <type> Certificate file type (DER/PEM/ENG)
     --ciphers <list of ciphers> SSL ciphers to use
     --compressed    Request compressed response
     --compressed-ssh Enable SSH compression
 -K, --config <file> Read config from a file
     --connect-timeout <seconds> Maximum time allowed for connection
     --connect-to <HOST1:PORT1:HOST2:PORT2> Connect to host
 -C, --continue-at <offset> Resumed transfer offset
 -b, --cookie <data|filename> Send cookies from string/file
 -c, --cookie-jar <filename> Write cookies to <filename> after operation
     --create-dirs   Create necessary local directory hierarchy
     --crlf          Convert LF to CRLF in upload
     --crlfile <file> Get a CRL list in PEM format from the given file
 -d, --data <data>   HTTP POST data
     --data-ascii <data> HTTP POST ASCII data
     --data-binary <data> HTTP POST binary data
     --data-raw <data> HTTP POST data, '@' allowed
     --data-urlencode <data> HTTP POST data url encoded
     --delegation <LEVEL> GSS-API delegation permission
     --digest        Use HTTP Digest Authentication
 -q, --disable       Disable .curlrc
     --disable-eprt  Inhibit using EPRT or LPRT
     --disable-epsv  Inhibit using EPSV
     --disallow-username-in-url Disallow username in url
     --dns-interface <interface> Interface to use for DNS requests
     --dns-ipv4-addr <address> IPv4 address to use for DNS requests
     --dns-ipv6-addr <address> IPv6 address to use for DNS requests
     --dns-servers <addresses> DNS server addrs to use
     --doh-url <URL> Resolve host names over DOH
 -D, --dump-header <filename> Write the received headers to <filename>
     --egd-file <file> EGD socket path for random data
     --engine <name> Crypto engine to use
     --expect100-timeout <seconds> How long to wait for 100-continue
 -f, --fail          Fail silently (no output at all) on HTTP errors
     --fail-early    Fail on first transfer error, do not continue
     --false-start   Enable TLS False Start
 -F, --form <name=content> Specify multipart MIME data
     --form-string <name=string> Specify multipart MIME data
     --ftp-account <data> Account data string
     --ftp-alternative-to-user <command> String to replace USER [name]
     --ftp-create-dirs Create the remote dirs if not present
     --ftp-method <method> Control CWD usage
     --ftp-pasv      Use PASV/EPSV instead of PORT
 -P, --ftp-port <address> Use PORT instead of PASV
     --ftp-pret      Send PRET before PASV
     --ftp-skip-pasv-ip Skip the IP address for PASV
     --ftp-ssl-ccc   Send CCC after authenticating
     --ftp-ssl-ccc-mode <active/passive> Set CCC mode
     --ftp-ssl-control Require SSL/TLS for FTP login, clear for transfer
 -G, --get           Put the post data in the URL and use GET
 -g, --globoff       Disable URL sequences and ranges using {} and []
     --happy-eyeballs-timeout-ms <milliseconds> How long to wait in milliseconds for IPv6 before trying IPv4
     --haproxy-protocol Send HAProxy PROXY protocol v1 header
 -I, --head          Show document info only
 -H, --header <header/@file> Pass custom header(s) to server
 -h, --help          This help text
     --hostpubmd5 <md5> Acceptable MD5 hash of the host public key
     --http0.9       Allow HTTP 0.9 responses
 -0, --http1.0       Use HTTP 1.0
     --http1.1       Use HTTP 1.1
     --http2         Use HTTP 2
     --http2-prior-knowledge Use HTTP 2 without HTTP/1.1 Upgrade
     --ignore-content-length Ignore the size of the remote resource
 -i, --include       Include protocol response headers in the output
 -k, --insecure      Allow insecure server connections when using SSL
     --interface <name> Use network INTERFACE (or address)
 -4, --ipv4          Resolve names to IPv4 addresses
 -6, --ipv6          Resolve names to IPv6 addresses
 -j, --junk-session-cookies Ignore session cookies read from file
     --keepalive-time <seconds> Interval time for keepalive probes
     --key <key>     Private key file name
     --key-type <type> Private key file type (DER/PEM/ENG)
     --krb <level>   Enable Kerberos with security <level>
     --libcurl <file> Dump libcurl equivalent code of this command line
     --limit-rate <speed> Limit transfer speed to RATE
 -l, --list-only     List only mode
     --local-port <num/range> Force use of RANGE for local port numbers
 -L, --location      Follow redirects
     --location-trusted Like --location, and send auth to other hosts
     --login-options <options> Server login options
     --mail-auth <address> Originator address of the original email
     --mail-from <address> Mail from this address
     --mail-rcpt <address> Mail to this address
 -M, --manual        Display the full manual
     --max-filesize <bytes> Maximum file size to download
     --max-redirs <num> Maximum number of redirects allowed
 -m, --max-time <seconds> Maximum time allowed for the transfer
     --metalink      Process given URLs as metalink XML file
     --negotiate     Use HTTP Negotiate (SPNEGO) authentication
 -n, --netrc         Must read .netrc for user name and password
     --netrc-file <filename> Specify FILE for netrc
     --netrc-optional Use either .netrc or URL
 -:, --next          Make next URL use its separate set of options
     --no-alpn       Disable the ALPN TLS extension
 -N, --no-buffer     Disable buffering of the output stream
     --no-keepalive  Disable TCP keepalive on the connection
     --no-npn        Disable the NPN TLS extension
     --no-sessionid  Disable SSL session-ID reusing
     --noproxy <no-proxy-list> List of hosts which do not use proxy
     --ntlm          Use HTTP NTLM authentication
     --ntlm-wb       Use HTTP NTLM authentication with winbind
     --oauth2-bearer <token> OAuth 2 Bearer Token
 -o, --output <file> Write to file instead of stdout
     --pass <phrase> Pass phrase for the private key
     --path-as-is    Do not squash .. sequences in URL path
     --pinnedpubkey <hashes> FILE/HASHES Public key to verify peer against
     --post301       Do not switch to GET after following a 301
     --post302       Do not switch to GET after following a 302
     --post303       Do not switch to GET after following a 303
     --preproxy [protocol://]host[:port] Use this proxy first
 -#, --progress-bar  Display transfer progress as a bar
     --proto <protocols> Enable/disable PROTOCOLS
     --proto-default <protocol> Use PROTOCOL for any URL missing a scheme
     --proto-redir <protocols> Enable/disable PROTOCOLS on redirect
 -x, --proxy [protocol://]host[:port] Use this proxy
     --proxy-anyauth Pick any proxy authentication method
     --proxy-basic   Use Basic authentication on the proxy
     --proxy-cacert <file> CA certificate to verify peer against for proxy
     --proxy-capath <dir> CA directory to verify peer against for proxy
     --proxy-cert <cert[:passwd]> Set client certificate for proxy
     --proxy-cert-type <type> Client certificate type for HTTPS proxy
     --proxy-ciphers <list> SSL ciphers to use for proxy
     --proxy-crlfile <file> Set a CRL list for proxy
     --proxy-digest  Use Digest authentication on the proxy
     --proxy-header <header/@file> Pass custom header(s) to proxy
     --proxy-insecure Do HTTPS proxy connections without verifying the proxy
     --proxy-key <key> Private key for HTTPS proxy
     --proxy-key-type <type> Private key file type for proxy
     --proxy-negotiate Use HTTP Negotiate (SPNEGO) authentication on the proxy
     --proxy-ntlm    Use NTLM authentication on the proxy
     --proxy-pass <phrase> Pass phrase for the private key for HTTPS proxy
     --proxy-pinnedpubkey <hashes> FILE/HASHES public key to verify proxy with
     --proxy-service-name <name> SPNEGO proxy service name
     --proxy-ssl-allow-beast Allow security flaw for interop for HTTPS proxy
     --proxy-tls13-ciphers <list> TLS 1.3 ciphersuites for proxy (OpenSSL)
     --proxy-tlsauthtype <type> TLS authentication type for HTTPS proxy
     --proxy-tlspassword <string> TLS password for HTTPS proxy
     --proxy-tlsuser <name> TLS username for HTTPS proxy
     --proxy-tlsv1   Use TLSv1 for HTTPS proxy
 -U, --proxy-user <user:password> Proxy user and password
     --proxy1.0 <host[:port]> Use HTTP/1.0 proxy on given port
 -p, --proxytunnel   Operate through an HTTP proxy tunnel (using CONNECT)
     --pubkey <key>  SSH Public key file name
 -Q, --quote         Send command(s) to server before transfer
     --random-file <file> File for reading random data from
 -r, --range <range> Retrieve only the bytes within RANGE
     --raw           Do HTTP "raw"; no transfer decoding
 -e, --referer <URL> Referrer URL
 -J, --remote-header-name Use the header-provided filename
 -O, --remote-name   Write output to a file named as the remote file
     --remote-name-all Use the remote file name for all URLs
 -R, --remote-time   Set the remote file's time on the local output
 -X, --request <command> Specify request command to use
     --request-target Specify the target for this request
     --resolve <host:port:address[,address]...> Resolve the host+port to this address
     --retry <num>   Retry request if transient problems occur
     --retry-connrefused Retry on connection refused (use with --retry)
     --retry-delay <seconds> Wait time between retries
     --retry-max-time <seconds> Retry only within this period
     --sasl-ir       Enable initial response in SASL authentication
     --service-name <name> SPNEGO service name
 -S, --show-error    Show error even when -s is used
 -s, --silent        Silent mode
     --socks4 <host[:port]> SOCKS4 proxy on given host + port
     --socks4a <host[:port]> SOCKS4a proxy on given host + port
     --socks5 <host[:port]> SOCKS5 proxy on given host + port
     --socks5-basic  Enable username/password auth for SOCKS5 proxies
     --socks5-gssapi Enable GSS-API auth for SOCKS5 proxies
     --socks5-gssapi-nec Compatibility with NEC SOCKS5 server
     --socks5-gssapi-service <name> SOCKS5 proxy service name for GSS-API
     --socks5-hostname <host[:port]> SOCKS5 proxy, pass host name to proxy
 -Y, --speed-limit <speed> Stop transfers slower than this
 -y, --speed-time <seconds> Trigger 'speed-limit' abort after this time
     --ssl           Try SSL/TLS
     --ssl-allow-beast Allow security flaw to improve interop
     --ssl-no-revoke Disable cert revocation checks (Schannel)
     --ssl-reqd      Require SSL/TLS
 -2, --sslv2         Use SSLv2
 -3, --sslv3         Use SSLv3
     --stderr        Where to redirect stderr
     --styled-output Enable styled output for HTTP headers
     --suppress-connect-headers Suppress proxy CONNECT response headers
     --tcp-fastopen  Use TCP Fast Open
     --tcp-nodelay   Use the TCP_NODELAY option
 -t, --telnet-option <opt=val> Set telnet option
     --tftp-blksize <value> Set TFTP BLKSIZE option
     --tftp-no-options Do not send any TFTP options
 -z, --time-cond <time> Transfer based on a time condition
     --tls-max <VERSION> Set maximum allowed TLS version
     --tls13-ciphers <list> TLS 1.3 ciphersuites (OpenSSL)
     --tlsauthtype <type> TLS authentication type
     --tlspassword   TLS password
     --tlsuser <name> TLS user name
 -1, --tlsv1         Use TLSv1.0 or greater
     --tlsv1.0       Use TLSv1.0 or greater
     --tlsv1.1       Use TLSv1.1 or greater
     --tlsv1.2       Use TLSv1.2 or greater
     --tlsv1.3       Use TLSv1.3 or greater
     --tr-encoding   Request compressed transfer encoding
     --trace <file>  Write a debug trace to FILE
     --trace-ascii <file> Like --trace, but without hex output
     --trace-time    Add time stamps to trace/verbose output
     --unix-socket <path> Connect through this Unix domain socket
 -T, --upload-file <file> Transfer local FILE to destination
     --url <url>     URL to work with
 -B, --use-ascii     Use ASCII/text transfer
 -u, --user <user:password> Server user and password
 -A, --user-agent <name> Send User-Agent <name> to server
 -v, --verbose       Make the operation more talkative
 -V, --version       Show version number and quit
 -w, --write-out <format> Use output FORMAT after completion
     --xattr         Store metadata in extended file attributes

# HEAD DELETE OPTIONS 等请求方法

    curl -i -I "www.baidu.com" HTTP METHOD HEAD
    curl -i -X DELETE "www.baidu.com"
    curl -i -X OPTIONS "www.baidu.com"

# -w format

    # cat format_curl.txt
    \n
        time_namelookup:  %{time_namelookup}\n
           time_connect:  %{time_connect}\n
        time_appconnect:  %{time_appconnect}\n
       time_pretransfer:  %{time_pretransfer}\n
          time_redirect:  %{time_redirect}\n
     time_starttransfer:  %{time_starttransfer}\n
                        ----------\n
             time_total:  %{time_total}\n
              http_code:  %{http_code}\n
                        ----------\n
               local_ip:  %{local_ip}\n
          size_download:  %{size_download}\n
            size_header:  %{size_header}\n
           size_request:  %{size_request}\n
            size_upload:  %{size_upload}\n
         speed_download:  %{speed_download}\n
           speed_upload:  %{speed_upload}\n
    \n

使用测试：

    # curl -w "@format_curl.txt"  http://XX.XX.91.152:9090/graph -o /dev/null



# --proxy 使用 Fiddler 代理服务器进行抓包

    curl -x localhost:8888 www.baidu.com

此命令使用 localhost:8888 这个代理服务器(Fiddler)IP和端口访问站点 www.baidu.com

参数说明

-x 设置代理，格式为 host[:port]，port的缺省值为1080

php脚本设置代理：curl_easy_setopt(curl, CURLOPT_PROXY, "127.0.0.1:8888");


# get 获取页面内容

当我们不加任何选项使用 curl 时，默认会发送 GET 请求来获取链接内容到标准输出。 

    curl http://www.codebelief.com

# show headers 显示 HTTP 头

如果我们只想要显示 HTTP 头，而不显示文件内容，可以使用 -I 选项： 

    curl -I http://www.codebelief.com 

输出为：

    HTTP/1.1 200 OK
    Server: nginx/1.10.3
    Date: Thu, 11 May 2017 08:24:45 GMT
    Content-Type: text/html; charset=utf-8
    Content-Length: 24206
    Connection: keep-alive
    X-Powered-By: Express
    Cache-Control: public, max-age=0
    ETag: W/"5e8e-Yw5ZdnVVly9/aEnMX7fVXQ"
    Vary: Accept-Encoding1

使用 -i 选项同时显示 HTTP 头和文件内容： 

    curl -i http://www.codebelief.com 

输出为：

    HTTP/1.1 200 OK
    Server: nginx/1.10.3
    Date: Thu, 11 May 2017 08:25:46 GMT
    Content-Type: text/html; charset=utf-8
    Content-Length: 24206
    Connection: keep-alive
    X-Powered-By: Express
    Cache-Control: public, max-age=0
    ETag: W/"5e8e-Yw5ZdnVVly9/aEnMX7fVXQ"
    Vary: Accept-Encoding

    <!DOCTYPE html>
    <html lang="en">
    ......
    </html>

# POST JSON

Curl发送POST请求json参数

    curl -d "{""user"":""admin"",""pass"":""admin""}" -X POST http://127.0.0.1:8082/login

    curl -i -H "Content-Type:application/json" -d "{""Id"":""122"", ""Text"":""name"", ""Description"":""anything""}" -X POST http://127.0.0.1:5001/api/item

    curl -H "Content-Type:application/json" -X POST --data "{\"user\": \"admin\", \"pass\": \"admin\"}" http://127.0.0.1:8082/login

注意不要使用以下这样的命令格式：

    curl -d '{"user":"admin","pass":"admin"}' -X POST http://127.0.0.1:8888/login

将它发送到 Fiddler 代理服务器上可以看到，POST 的数据变成了：

    '{user:admin,pass:admin}'


# download

我们可以使用 > 符号将输出重定向到本地文件中。 

    curl http://www.codebelief.com > index.html 

也可以通过 curl 自带的 -o/-O 选项将内容保存到文件中。

-o: 结果会被保存到命令行中提供的文件名 
-O: URL 中的文件名会被用作保存输出的文件名，必须确保链接末尾包含文件名，否则 curl 无法正确保存文件。

    curl -o index.html http://www.codebelief.com 
    curl -O http://www.codebelief.com/page/2/ 

我们可以使用 -o 或 -O 选项来同时指定多个链接同时下载多个文件，按照以下格式编写命令： 

    curl -O http://www.codebelief.com/page/2/ -O http://www.codebelief.com/page/3/
    curl -o page1.html http://www.codebelief.com/page/1/ -o page2.html http://www.codebelief.com/page/2/


结合 for 循环批量下载：

    for /l %i in (1,1,32) do ( curl -O -L http://t2.hddhhn.com/uploads/tu/201608/180/%i.jpg )
    for /l %i in (1,1,44) do ( curl -O -L http://t2.hddhhn.com/uploads/tu/201608/151/%i.jpg )
    md 20160855 && cd 20160855 && for /l %i in (1,1,52) do ( curl -O -L http://t2.hddhhn.com/uploads/tu/201608/55/%i.jpg )



# upload

```sh
curl -X POST http://localhost:8080/upload \
  -F "files[]=@./myfile.zip" \
  -F "files[]=@./mysecondfile.zip" \
  -H "Content-Type: multipart/form-data"
```

    curl -H "Content-Type: multipart/form-data" -X POST http://localhost:80/upload.php -F "file=@C:\pictures\firework.png"
    curl -H "Content-Type: multipart/form-data" -X POST http://localhost:80/upload.php -F "files[]=@C:\pictures\firework.png"


# -u Use HTTP Basic Authentication

-u, --user <user:password> Server user and password

--anyauth       Pick any authentication method
--basic         Use HTTP Basic Authentication
--digest        Use HTTP Digest Authentication
--negotiate     Use HTTP Negotiate (SPNEGO) authentication
--ntlm          Use HTTP NTLM authentication
--ntlm-wb       Use HTTP NTLM authentication with winbind

multipart/form-data 方式：

    curl -i -X PUT -u admin:password -F "username=kataras" -F "password=***" http://localhost:8888

    PUT / HTTP/1.1
    Host: localhost:8888
    Authorization: Basic YWRtaW46cGFzc3dvcmQ=
    User-Agent: curl/7.65.2
    Accept: */*
    Content-Length: 250
    Content-Type: multipart/form-data; boundary=------------------------adb611d5267d3d16

    --------------------------adb611d5267d3d16
    Content-Disposition: form-data; name="username"

    kataras
    --------------------------adb611d5267d3d16
    Content-Disposition: form-data; name="password"

    ***
    --------------------------adb611d5267d3d16--


application/x-www-form-urlencoded 方式：

    curl -i -X PUT -u admin:password -d "username=kataras&password=***" http://localhost:8888

    PUT / HTTP/1.1
    Host: localhost:8888
    Authorization: Basic YWRtaW46cGFzc3dvcmQ=
    User-Agent: curl/7.65.2
    Accept: */*
    Content-Length: 29
    Content-Type: application/x-www-form-urlencoded

    username=kataras&password=***

# Follow 使用 -L 跟随链接重定向

如果直接使用 curl 打开某些被重定向后的链接，这种情况下就无法获取我们想要的网页内容。例如： 

    curl http://codebelief.com 

会得到如下提示：

    <html>
    <head><title>301 Moved Permanently</title></head>
    <body bgcolor="white">
    <center><h1>301 Moved Permanently</h1></center>
    <hr><center>nginx/1.10.3</center>
    </body>
    </html>1


而当我们通过浏览器打开该链接时，会自动跳转到 http://www.codebelief.com。此时我们想要 curl 做的，就是像浏览器一样跟随链接的跳转，获取最终的网页内容。我们可以在命令中添加 -L 选项来跟随链接重定向：

    curl -L http://codebelief.com 

这样我们就能获取到经过重定向后的网页内容了。

# -A 自定义 User-Agent

我们可以使用 -A 来自定义用户代理，例如下面的命令将伪装成安卓火狐浏览器对网页进行请求： 

    curl -A "Mozilla/5.0 (Android; Mobile; rv:35.0) Gecko/35.0 Firefox/35.0" http://www.baidu.com 

下面我们会使用 -H 来实现同样的目的。

# -H 自定义 header

当我们需要传递特定的 header 的时候，可以仿照以下命令来写： 

    curl -H "Referer: www.example.com" -H "User-Agent: Custom-User-Agent" http://www.baidu.com 

可以看到，当我们使用 -H 来自定义 User-Agent 时，需要使用 "User-Agent: xxx" 的格式。

我们能够直接在 header 中传递 Cookie，格式与上面的例子一样： 

    curl -H "Cookie: JSESSIONID=D0112A5063D938586B659EF8F939BE24" http://localhost:8888 

另一种方式会在下面介绍。

# -c 保存 Cookie

当我们使用 cURL 访问页面的时候，默认是不会保存 Cookie 的。有些情况下我们希望保存 Cookie 以便下次访问时使用。例如登陆了某个网站，我们希望再次访问该网站时保持登陆的状态，这时就可以现将登陆时的 Cookie 保存起来，下次访问时再读取。

-c 后面跟上要保存的文件名。 

    curl -c "cookie-example" http://localhost:8888


# -b 读取 Cookie

前面讲到了使用 -H 来发送 Cookie 的方法，这种方式是直接将 Cookie 字符串写在命令中。如果使用 -b 来自定义 Cookie，命令如下： 

    curl -b "JSESSIONID=D0112A5063D938586B659EF8F939BE24" http://localhost:8888 

如果要从文件中读取 Cookie，-H 就无能为力了，此时可以使用 -b 来达到这一目的： 

    curl -b "cookie-example" http://localhost:8888 

即 -b 后面既可以是 Cookie 字符串，也可以是保存了 Cookie 的文件名。


# -d 发送 POST 请求

我们以登陆网页为例来进行说明使用 cURL 发送 POST 请求的方法。 -d 用于指定发送的数据，-X 用于指定发送数据的方式： 

    curl -d "userName=tom&passwd=123456" -X POST http://localhost:8888/login

在使用 -d 的情况下，如果省略 -X，则默认为 POST 方式： 

    curl -d "userName=tom&passwd=123456" http://localhost:8888/login


强制使用 GET 方式： 

    curl -d "somedata" -X GET http://localhost:8888/api

或者使用 -G 选项： 

    curl -d "somedata" -G http://localhost:8888/api

从文件中读取 data 

    curl -d "@data.txt" http://localhost:8888/login


# 带 Cookie 登录 
当然，如果我们再次访问该网站，仍然会变成未登录的状态。我们可以用之前提到的方法保存 Cookie，在每次访问网站时都带上该 Cookie 以保持登录状态。 

    curl -c "cookie-login" -d "userName=tom&passwd=123456" http://localhost:8888/login 

再次访问该网站时，使用以下命令： 

    curl -b "cookie-login" http://localhost:8888/login 

这样，就能保持访问的是登录后的页面了。

原作者：Wray Zheng 
源文档：www.codebelief.com/article/2017/05/linux-command-line-curl-usage/
