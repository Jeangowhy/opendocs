
# =🚩 File & Folder

binary file

```py
numbs = array.array('H', [0x62, 0xfa, 0x10]) # must be same type

# Write binary data to a file
with open('filebinary.bin', 'wb') as fl:
    fl.write(b'Hello World')
    fl.write(numbs)
    fl.write(b'\0\1\2\3')
    fl.write(b"\x62\xfa\x10")

# Read the entire file as a single byte string
with open('filebinary.bin', 'rb') as fl:
    allBinData = fl.read()
    print(allBinData)
```


The following example uses the `dir_fd` parameter of the `os.open()` function to open a file relative to a given directory:


>>> import os
>>> dir_fd = os.open('somedir', os.O_RDONLY)
>>> def opener(path, flags):
...     return os.open(path, flags, dir_fd=dir_fd)
...
>>> with open('spamspam.txt', 'w', opener=opener) as f:
...     print('This will be written to somedir/spamspam.txt', file=f)
...
>>> os.close(dir_fd)  # don't leak a file descriptor




# =🚩 gzip
- https://docs.python.org/3/library/gzip.html

    import gzip

    plaintext = 'testing'
    filename = 'foo.gz'
    with gzip.open(filename, 'wb') as outfile:
        outfile.write(bytes(plaintext, 'UTF-8'))
    with gzip.open(filename, 'r') as infile:
        outfile_content = infile.read().decode('UTF-8')
    print(outfile_content)


    s = b'testing'
    s = gzip.compress(s)
    print(s)
      
    # using gzip.decompress(s) method 
    t = gzip.decompress(s) 
    print(t) 

# =🚩 zlib
- https://docs.python.org/3/library/zlib.html

    import zlib

    plaintext = 'testing'

    s = b'testing'
    s = zlib.compress(s)
    print(s)
      
    # using zlib.decompress(s) method 
    t = zlib.decompress(s) 
    print(t) 



# =🚩 urllib & threading 多线程下载器 MTD

    # coding = UTF-8
    # download lazyload image from https://www.192td.com/meitu/79701/
    # cls && python mtd.py -u https://www.192td.com/meitu/79701/


    import urllib.request, re, os, sys, getopt, queue, socket, threading
    from pprint import pprint

    socket.setdefaulttimeout(3)

    # urllib.request.Request(url, data=None, context=context, headers={}, origin_req_host=None, unverifiable=true, method=None)
    headers = {
        "method": "GET",
        "authority": "www.ttbcdn.com",
        "path": "/d/file/p/2017-12-11/960151b51b53ef46d37ea3599aefbd6a.jpg",
        "scheme": "https",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,pt;q=0.7,zh-TW;q=0.6",
        "cache-control": "max-age=0",
        "cookie": "__cfduid=dff07b97871979c3e3da5748476b0af721572948329",
        "if-modified-since": "Sun, 10 Dec 2017 17:31:56 GMT",
        "if-none-match": "5a2d6f8c-15313",
        "referer": "https://www.192td.com/meitu/79700/",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36",
    }

    def getHTML(url, decode="UTF-8"):
        page = urllib.request.urlopen(url)
        html = page.read()
        page.close()
        return html.decode(decode)

    def getLazyLink(html, regexp=r'(?:lazysrc=)\r\n(.+\.jpg)'):
        reg = re.compile(regexp)
        lazy = reg.findall(html)
        return lazy

    # compile the regular expressions and find
    # all stuff we need
    def getUrls(html, regexp=r'(?:href|HREF)="?((?:http://)?.+?\.pdf)'):
        reg = re.compile(regexp)
        urls = reg.findall(html)
        return(urls)

    def getFile(url, folder):
        name = os.path.basename(url) # url.split("/")[-1]
        print("▶ Start downlaod: %s %s" % (folder, name))
        # file = urllib.request.urlopen(url=url, data={"headers": headers})
        # data = urllib.parse.urlencode({"a":"b"})
        req  = urllib.request.Request(url=url, headers=headers)
        file = urllib.request.urlopen(req)
        out = open(os.path.join(folder, name), 'wb')

        block = 8192
        while True:
            buffer = file.read(block)
            if not buffer:
                break
            out.write(buffer)
        file.close()
        print("✓ Sucessful downlaod: %s" % name)


    class MT (threading.Thread):
        def __init__(self, mtd, threadID, name, folder):
            threading.Thread.__init__(self)
            self.threadID = threadID
            self.mtd = mtd
            self.name = name
            self.folder = folder

        def run(self):
            # print("Thread Start: " + self.name)
            self.worker(self.name, self.folder)
            # print("Thread Exit: " + self.name)

        def worker(self, threadName, folder):
            workQueue = self.mtd.workQueue
            taskList = self.mtd.taskList
            queueLock = self.mtd.queueLock
            while not self.mtd.exitFlag:
                print("⚐ %s starting..." % (threadName))
                queueLock.acquire()
                if not workQueue.empty():
                    url = workQueue.get()
                    queueLock.release()
                else:
                    queueLock.release()
                    return

                # time.sleep(1)
                it = os.path.basename(url)
                target = os.path.join(folder, it)
                # 2<<19 1024kb  2<<18 512kb 2<<17 256kb 3<<17 384kb
                # if os.path.exists(target):
                if os.path.exists(target) and os.path.getsize(target) > 2 << 15:
                    size = os.path.getsize(target)
                    print("⚐ File exists %d KB %s" % (size/1024, target))
                    continue
                if os.path.exists(target):
                    kb = os.path.getsize(target) / 1024
                    print("⚐ %d kb tiny file %s" % (kb, it))

                queueLock.acquire()
                taskList.append(it)
                queueLock.release()
                try:
                    getFile(url, folder)
                    workQueue.task_done()
                except urllib.error.HTTPError as e:
                    pprint(['❌ HTTP error', url, e.info, e.code, e.msg])
                except socket.timeout as e:
                    print("⏱ %s %s %s" % (threadName, it, str(e)))
                    queueLock.acquire()
                    workQueue.put(url)
                    queueLock.release()
                except Exception as e:
                    print('❌ error %s %s', url, e)

                queueLock.acquire()
                taskList.remove(it)
                queueLock.release()
                print("▶ Task list %d" % (workQueue.qsize()))

    class MTD:
        def __init__(self, urls, folder):
            self.exitFlag = 0
            self.taskList = []
            self.queueLock = threading.Lock()

            threads = []
            threadID = 1
            threadList = [
                "Thread #1", "Thread #2", "Thread #3", "Thread #4",
                "Thread #5", "Thread #6", "Thread #7", "Thread #8"
            ]

            try:
                self.workQueue = self.initQueue(urls)
                # 创建新线程
                for tName in threadList:
                    thread = MT(self, threadID, tName, folder)
                    thread.start()
                    threads.append(thread)
                    threadID += 1

                # 等待队列清空
                while not self.workQueue.empty() and self.exitFlag == 0:
                    pass
                # 通知线程是时候退出
                self.exitFlag = 1

            except(KeyboardInterrupt, SystemExit) as e:
                self.exitFlag = 1
                print("KeyboardInterrupt or SystemExit, Please wait for thread return ...")
                print(e)

            # 等待所有线程完成
            for t in threads:
                t.join()

            print('DONE!')

        def initQueue(self, urls):
            # 填充队列
            self.queueLock.acquire()
            self.workQueue = queue.Queue(len(urls))
            for it in urls[:]:
                self.workQueue.put(it)
            print("Queue initlized and file count: %d" % len(urls))
            self.queueLock.release()
            return self.workQueue


    def main(argv):
        url = ""
        out = "lazy"
        usage = "Usage: %s -u https://www.192td.com/meitu/79701/ -o 79701" % argv[0]
        try:
            opts, args = getopt.getopt(argv[1:], "u:o:",["url=","out="])
            for opt, arg in opts:
                if opt in ("-u", "--url"):
                    url = arg
                elif opt in ("-o", "-out"):
                    out = arg
            if out=="lazy":
                li = url.split("/")
                out = os.path.basename(url)
                if out=="":
                    out = li[-2]
        except getopt.GetoptError:
            print(usage)
            sys.exit(1)
        if url != "":
            os.path.exists(out) or os.mkdir(out)
            path = os.path.join(os.getcwd(), out)
            
            html = getHTML(url)
            links = getLazyLink(html)
            print(links, "\n\n", path, url, out, len(links), "\n\n")
            MTD(links, path)
        else:
            print(usage)

    if __name__ == "__main__":
       main(sys.argv)






# =🚩 wechat 登录模拟
[itchat 教程](https://itchat.readthedocs.io/zh/latest/tutorial/tutorial1/)

使用的环境如下：

Windows 10
Python 3.7 (安装Image, requests）
Wireshark 2.0.2
微信版本6.3.15

Wireshark 是常见的抓包软件，由于微信网页端使用 https，需要 WireShark SSL/TLS 等加密配置。当今流行前向加密技术 PFS 的时代了，因为前向加密技术的目的就是让每个数据交互都使用的是不同的私钥，所以你像以前RSA时代一样想只用一个私钥就能把整个session会话的网络数据包都破解出来的话是不可能的了。

解密方式最简单的方法就是利用 Firefox 和 Chrome 浏览器支持的用日记文件的方式记录下用来加密TLS数据包对称会话秘钥。设置环境变量 SSLKEYLOGFILE 指定其路径到你想要保存你的会话私钥的地方，这样我们下次启动Firefox或者Chrome的开发者模式的时候，TLS秘钥就会自动写入到该指定文件下面了。这样就可以在WireShark中指定该文件来快速完成你的破解目的了。

为了支持这个功能，需要 WireShark 1.6 或者更新，进入菜单栏 Edit——Preferences——Protocols——SSL/TLS ，在 (Pre)-Master-Secret log filename 中选择导出的私钥。

Wireshark 对 HTTP 请求分析一般是通过选定数据进行流追踪，右键鼠标，查看Follow TCP Stream。捕捉列表中有许多 Client Hello 和 Server Hello，这是 TCP 协议的连接握手信息。

在Linux或者MAC OS X上的配置:

    $ export SSLKEYLOGFILE=~/path/to/sslkeylog.log

当然，如果你想在你的系统每次启动的时候都指定该日记路径的话，你可以在你的Linux、MAC OS X 相应下执行下面的动作保持环境变量设置：

    ~/.bashrc
    ~/.MacOSX/environment


微信网页端登陆这个过程简单而言可以分为如下几步：

向服务器提供一些用于获取二维码的数据
服务器返回二维码
向服务器询问二维码扫描状态
服务器返回扫描状态



    #coding=utf8
    import time, requests
    import platform, os, subprocess
    import re, json, xml.dom.minidom

    session = requests.Session()

    def login_init():
        url = 'https://login.weixin.qq.com/jslogin'
        params = {
            'appid': 'wx782c26e4c19acffb',
            'redirect_uri': 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxnewloginpage',
            'fun': 'new',
            'lang': 'en_US',
            '_': int(time.time()),
            }
        r = session.get(url, params = params)
        print('Content: %s'%r.text)

        # 括号内的内容被提取了出来
        regx = r'window.QRLogin.code = (\d+); window.QRLogin.uuid = "(\S+?)";'
        data = re.search(regx, r.text)
        if data and data.group(1) == '200': uuid = data.group(2)
        print('uuid: %s'%uuid)
        return uuid

    def get_qrcode(uuid):
        url = 'https://login.weixin.qq.com/qrcode/' + uuid
        r = session.get(url, stream = True)
        with open('QRCode.jpg', 'wb') as f: f.write(r.content)
        if platform.system() == 'Darwin':
            subprocess.call(['open', 'QRCode.jpg'])
        elif platform.system() == 'Linux':
            subprocess.call(['xdg-open', 'QRCode.jpg'])
        else:
            os.startfile('QRCode.jpg')

    def get_login_info(s):
        baseRequest = {}
        for node in xml.dom.minidom.parseString(s).documentElement.childNodes:
            if node.nodeName == 'skey':
                baseRequest['Skey'] = node.childNodes[0].data.encode('utf8')
            elif node.nodeName == 'wxsid':
                baseRequest['Sid'] = node.childNodes[0].data.encode('utf8')
            elif node.nodeName == 'wxuin':
                baseRequest['Uin'] = node.childNodes[0].data.encode('utf8')
            elif node.nodeName == 'pass_ticket':
                baseRequest['DeviceID'] = node.childNodes[0].data.encode('utf8')
        return baseRequest

    def get_user_info(baseRequest, redirectUri):
        url = '%s/webwxinit?r=%s' % (redirectUri, int(time.time()))
        data = {
            'BaseRequest': baseRequest,
        }
        headers = { 'ContentType': 'application/json; charset=UTF-8' }
        r = session.post(url, data = json.dumps(data), headers = headers)
        dic = json.loads(r.content.decode('utf-8', 'replace'))
        print('Log in as %s'%dic['User']['NickName'], r.text, r.content.decode('utf-8','replace'))
        return dic

    def query_scan_status(uuid):
        url = 'https://login.weixin.qq.com/cgi-bin/mmwebwx-bin/login'
        params = 'tip=1&uuid=%s&_=%s'%(uuid, int(time.time()))
        r = session.get(url, params = params)
        regx = r'window.code=(\d+)'
        data = re.search(regx, r.text)
        if not data: return 0
        if data.group(1) == '200':
            uriRegex = r'window.redirect_uri="(\S+)";'
            redirectUri = re.search(uriRegex, r.text).group(1)
            r = session.get(redirectUri, allow_redirects=False)
            redirectUri = redirectUri[:redirectUri.rfind('/')]
            baseRequestText = r.text

            regx = r'<error><ret>(\d+)</ret>'
            res = re.search(regx, baseRequestText)
            if( res.group(1) ): 
                print(baseRequestText)
                return 2
            baseRequest = get_login_info(baseRequestText)
            get_user_info(baseRequest, redirectUri)
            print('Login successfully', )
            return 1
        elif data.group(1) == '201':
            print('Tap login button to go(QRCode was scanned)')
            time.sleep(1)
        elif data.group(1) == '408':
            raise Exception('QRCode should be renewed')

    uuid = login_init()
    get_qrcode(uuid)
    while not query_scan_status(uuid):
        pass
    print("Done!")




# =🚩 yaml 

YAML 语言（发音 /ˈjæməl/ ）的设计目标，就是方便人类读写。它实质上是一种通用的数据串行化格式。由于实现简单，解析成本很低，YAML特别适合在脚本语言中使用。列一下现有的语言实现：Ruby，Java，Perl，Python，PHP，OCaml，JavaScript，Go 。

yaml 文件数据格式参考，`-` 表示数一个组元素的开始：

    # data = [{'name': 'Zhang', 'score':88, 'more':[1, 2, 3, {'more':[1, 2, 3,]}]}]
    - more:
      - 1
      - 2
      - 3
      - more: [1, 2, 3]
      name: Zhang
      score: 88



yaml文件中基本数据类型：

    # 纯量
    s_val: name              # 字符串：{'s_val': 'name'}
    spec_s_val: "name\n"    # 特殊字符串：{'spec_s_val': 'name\n'
    num_val: 31.14          # 数字：{'num_val': 31.14}
    bol_val: true           # 布尔值：{'bol_val': True}
    nul_val: null           # null值：{'nul_val': None}
    nul_val1: ~             # null值：{'nul_val1': None}
    time_val: 2018-03-01t11:33:22.55-06:00     # 时间值：{'time_val': datetime.datetime(2018, 3, 1, 17, 33, 22, 550000)}
    date_val: 2019-01-10    # 日期值：{'date_val': datetime.date(2019, 1, 10)}

它的基本语法规则如下。

    大小写敏感
    使用缩进表示层级关系
    缩进时不允许使用Tab键，只允许使用空格。
    缩进的空格数目不重要，只要相同层级的元素左侧对齐即可
    # 表示注释，从这个字符一直到行尾，都会被解析器忽略。

YAML 支持的数据结构有三种。

对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）
数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）
纯量（scalars）：单个的、不可再分的值

    import yaml
    import os

    def save_yaml(yaml_file, py_object):
        file = open(yaml_file, 'w', encoding='utf-8')
        yaml.dump(py_object, file)
        file.close()

    def load_yaml(yaml_file):
        file = open(yaml_file, 'r', encoding="utf-8")
        file_data = file.read()
        file.close()

        # 将字符串转化为字典或列表
        data = yaml.load(file_data)
        return data

    current_path = os.path.abspath(".")
    yaml_path = os.path.join(current_path, "config.yaml")

    data = [{'name': 'Zhang', 'score':88}, { 'name':'Wang', 'score':90}]
    data = [{'name': 'Zhang', 'score':88, 'more':[1, 2, 3, {'more':[1, 2, 3,]}]}]
    save_yaml(yaml_path, data)

    data = load_yaml(yaml_path)
    print(type(data), data[0]['name'])


# =🚩 json
[json](https://www.runoob.com/python/python-json.html)

    import json

    dict = { "one":"this is a dictionary", "two":2, "three":3, 4:"four" };
    jsonText = json.dumps(dict)
    print(jsonText)
    obj = json.loads(jsonText)
    print("read json", obj['one'])


# =🚩 CSV Comma Separated Values 逗号分隔值
[CSV](https://docs.python.org/3/library/csv.html)
[os Methods](https://www.runoob.com/python/os-file-methods.html)

CSV 文件每一行就相当一条数据记录，每条记录各个字段用逗号分隔，如果字段存在逗号或双引号，则用双引号将字段内容包裹，并且字段值的双引号用两个连续的双引号代替。

Excel 支持 CSV 中使用公式或表达式，例如 "=A1 & B1"，

在Python 3，可以通过open函数读取文件时，不指定newline，则默认开启 Universal new line mode，所有\n, \r, or \r\n 被默认转换为\n ；写入时，不指定newline，则换行符为各系统默认的换行符（\n, \r, or \r\n, ），指定为newline='\n'，则都替换为\n（相当于Universal new line mode）；不论读或者写时，newline=''都表示不转换。

    import os
    import sys
    import csv

    def formatLongtime(longtime):
        import time
        return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(longtime))

    def humanReading(size):
        for(scale, label) in [(1024*1024*1024,"GB"), (1024*1024,"MB"), (1024, "KB")]:
            if size>=scale:
                return "%.2f %s" %(size*1.0/scale, label)
        return str(size) + "Bytes"

    filename = "tree.csv"
    fields = ["root", "filename", "extension", "access", "modify", "size"]
    with open(filename, "w", newline='\n') as log:
        writer = csv.writer(log)
        writer.writerow(fields)

        for root, dirs, files in os.walk("c:/php7.2.6/"):
            for file in files:
                fileinfo = os.stat(os.path.abspath(root+"/"+file))
                atime = formatLongtime(fileinfo.st_atime)
                mtime = formatLongtime(fileinfo.st_mtime)
                size = humanReading(fileinfo.st_size)
                ext = os.path.splitext(file)[1]
                writer.writerow((root, file, ext, atime, mtime, size))

    with open(filename, newline='\n', encoding='utf-8') as log:
        reader = csv.reader(log, delimiter=',', quoting=csv.QUOTE_NONE)
        # reader = csv.reader(['one,two,three','a,b,c'])
        try:
            for row in reader:
                print(row)
        except csv.Error as e:
            sys.exit('file {}, line {}: {}'.format(filename, reader.line_num, e))


Python引入了with语句来自动帮我们调用close()方法关闭文件，这比 try ... finally 结构代码更简洁，并且不必调用f.close()方法。


# =🚩 turtle 海龟图
[Turtle](https://www.liaoxuefeng.com/wiki/1016959663602400/1249593505347328)
[Turtle methods](https://docs.python.org/3.3/library/turtle.html#turtle-methods)

在1966年，Seymour Papert和Wally Feurzig发明了一种专门给儿童学习编程的语言——LOGO语言，它的特色就是通过编程指挥一个小海龟（turtle）在屏幕上绘图。

海龟绘图（Turtle Graphics）后来被移植到各种高级语言中，Python内置了turtle库，基本上100%复制了原始的Turtle Graphics的所有功能。

海龟绘图就是指挥海龟前进、转向，海龟移动的轨迹就是绘制的线条。要绘制一个长方形，只需要让海龟前进、右转90度，反复4次。

调用width()函数可以设置笔刷宽度，调用pencolor()函数可以设置颜色。更多操作请参考turtle库的说明。

绘图完成后，记得调用done()函数，让窗口进入消息循环，等待被关闭。否则，由于Python进程会立刻结束，将导致窗口被立刻关闭。

    from turtle import *

    # 设置色彩模式是RGB:
    colormode(255)

    lt(90)

    lv = 14
    l = 120
    s = 45

    width(lv)

    # 初始化RGB颜色:
    r = 0
    g = 0
    b = 0
    pencolor(r, g, b)

    penup()
    bk(l)
    pendown()
    fd(l)

    def draw_tree(l, level):
        global r, g, b
        # save the current pen width
        w = width()

        # narrow the pen width
        width(w * 3.0 / 4.0)
        # set color:
        r = r + 1
        g = g + 2
        b = b + 3
        pencolor(r % 200, g % 200, b % 200)

        l = 3.0 / 4.0 * l

        lt(s)
        fd(l)

        if level < lv:
            draw_tree(l, level + 1)
        bk(l)
        rt(2 * s)
        fd(l)

        if level < lv:
            draw_tree(l, level + 1)
        bk(l)
        lt(s)

        # restore the previous pen width
        width(w)

    speed("fastest")

    draw_tree(l, 4)

    done()


# =🚩 pySerial 串口通讯模块

典型场景就是和一些硬件设备打交道(比如一个机器人或传感器)。尽管你可以通过使用Python内置的I/O模块来完成这个任务,但对于串行通信最好的选择是使用 pySerial包 。

- 在支持的平台上有统一的接口。
- 通过 Python 属性访问串口设置。
- 支持不同的字节大小、停止位、校验位和流控设置。
- 可以有或者没有接收超时。
- 类似文件的 API，例如 read 和 write，也支持 readline 等。
- 支持二进制传输，没有 null 消除，没有 cr-lf 转换。

安装 pySerial 串口通讯模块，可以先使用命令查询当前系统是否已安装，命令参考如下：

    pip list | findstr serial
    pip install pyserial
    pip uninstall pyserial

Linux 和 Windows 中串口的名字规则不太一样，在 Windows 系统上使用 0、1 等表示的一个设备，COM0、COM1 表示两个串口。一旦端口打开，那就可以使用 read(), readline() 和 write() 函数读写数据了。Linux 下的查看串口命令:

    ls -l /dev/ttyS*

串口基本使用方法：

    # linux
    ser = serial.Serial('/dev/ttyS0', 9600, timeout=0.2)
    
    # windows
    # ser = serial.Serial('COM0', 9600, timeout=0.2)

    # ser = serial.Serial()
    # ser.port = '/dev/ttyS0'
    # ser.baudrate = 9600
    # ser.timeout = 0.2
    # ser.open()

    # ser = serial.Serial(
    #   port='COM0',
    #   baudrate=9600,
    #   parity=serial.PARITY_ODD,
    #   stopbits=serial.STOPBITS_TWO,
    #   bytesize=serial.SEVENBITS
    # )


十六进制发送实质是发送十六进制格式的字符串，如 '\xaa'，'\x0b'，重点在于怎么样把一个字符串转换成十六进制的格式，有两个误区：

- '\x'+'aa' 是不可以，涉及到转义符反斜杠
- '\\x'+'aa' 和 r'\x'+'aa'也不可以，这样的打印结果虽然是\xaa，但赋给变量的值却是'\\xaa'

这里用到decode函数，

    msg = 'aabbccddee'  
    hex = msg.decode("hex")  
    print(hex)  

假如在串口助手以十六进制发送字符串 "abc"，那么你在 Python 中则这样操作 write("\x61\x62\x63")

    #!/usr/bin/python
    # coding=UTF-8

    import serial


    def hexshow(data):
        '''
        功 能: 将接收到的数据转换到 hex 形式
        :param data: str
        :return: hex string
        '''
        hex_data = ''
        hLen = len(data)
        for i in range(hLen):
            hvol = ord(data[i])
            hhex = '%02x' % hvol
            hex_data += hhex+' '
        print('hexshow:', hex_data)


    def hexsend(string_data=''):
        '''
        功 能: 将需要发送的字符串以 hex 形式发送
        :param string_data: string
        :return: hex string
        '''
        hex_data = string_data.decode("hex")
        return hex_data


    if __name__ == '__main__':
        found = []
        for x in range(0, 8):
            try:
                port = 'COM' + str(x)
                ser = serial.Serial(port, 115200)
                ser.close()
                found.append(port)
                print("Serial Port Found: %s" % port)
            except serial.SerialException as e:
                pass
        port = "COM1"
        if(len(found) == 1):
            port = found[0]
        ser = serial.Serial(port, 115200)
        print(ser.portstr)

        if ser.isOpen():
            print("open success")
        else:
            print("open failed")

        try:
            while True:
                count = ser.inWaiting()
                if count > 0:
                    data = ser.read(count)
                    if data != b'':
                        print("receive:", data)
                        ser.write(data)
                    else:
                        ser.write(hexsend(data))
        except KeyboardInterrupt:
            if ser is not None:
                ser.close()


pySerial 库常用函数介绍

    serial = serial.Serial(‘COM1’, 115200) 打开COM1并设置波特率为115200，COM1只适用于Windows
    serial = serial.Serial(‘/dev/ttyS0’, 115200) 打开/dev/ttyS0并设置波特率为115200, 只适用于Linux
    print serial .portstr 能看到第一个串口的标识
    serial .write(“hello”) 往串口里面写数据
    serial .close() 关闭serial 表示的串口
    serial .open() 打开串口
    data = serial .read(num) 读num个字符
    data = serial .readline() 读一行数据，以/n结束，要是没有/n就一直读，阻塞。
    serial .baudrate = 9600 设置波特率
    print serial 可查看当前串口的状态信息
    serial .isOpen() 当前串口是否已经打开
    serial.inWaiting() 判断当前接收的数据
    serial.flushInput() 清除输入缓冲区数据
    serial.flushOutput() 中止当前输出并清除输出缓冲区数据


# =🚩 SQLite
[SQLite](https://www.runoob.com/sqlite/sqlite-python.html)
[Python SQLite3](https://docs.python.org/3/library/sqlite3.html)

    # -*- coding: utf-8 -*-

    import os, sqlite3

    db_file = os.path.join(os.path.dirname(__file__), 'test.db')
    if os.path.isfile(db_file):
        os.remove(db_file)

    # 初始数据:
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()
    cursor.execute('create table user(id varchar(20) primary key, name varchar(20), score int)')
    cursor.execute(r"insert into user values ('A-001', 'Adam', 95)")
    cursor.execute(r"insert into user values ('A-002', 'Bart', 62)")
    cursor.execute(r"insert into user values ('A-003', 'Lisa', 78)")
    cursor.execute(r'insert into user values(:key,:name,:score)',  {"key":"A-004","name":"Aob","score":123} )
    print('rowcount =', cursor.rowcount)

    def get_score_in(low, high):
        ' 返回指定分数区间的名字，按分数从低到高排序 '
        cursor.execute('select name from user where score>=? and score<=? order by score', (low, high) )
        res = cursor.fetchall()
        return res

    # 测试:
    assert get_score_in(80, 95) == [('Adam',)], get_score_in(80, 95)
    assert get_score_in(60, 80) == [('Bart',), ('Lisa',)], get_score_in(60, 80)
    assert get_score_in(60, 100) == [('Bart',), ('Lisa',), ('Adam',)], get_score_in(60, 100)

    print('Pass')

    cursor.close()
    conn.commit()
    conn.close()


# =🚩 MySQL
[PyMySQL](https://pymysql.readthedocs.io/en/latest/)
[mysql-python](http://www.lfd.uci.edu/~gohlke/pythonlibs/#mysql-python)
[Peewee ORM](http://docs.peewee-orm.com/en/latest/peewee/installation.html)
[SQLAlchemy 掘金](https://juejin.im/post/5a26ab82f265da430d57df8b)
[SQLAlchemy 菜鸟教程](http://www.runoob.com/python/python-mysql.html)
[mysql-connector-python 菜鸟教程](https://www.runoob.com/python3/python-mysql-connector.html)
[mysql-connector-python Doc](https://dev.mysql.com/doc/connector-python/en/)

Python 的 DB-API 是数据库实现接口，使用它连接各数据库后，就可以用相同的方式操作各数据库，DB-API使用流程：

- 引入 API 模块。
- 获取与数据库的连接。
- 执行SQL语句和存储过程。
- 关闭数据库连接

MySQL-python 即 MySQLdb，是 Python 连接 MySQL 最流行的一个驱动，很多框架也是依据其开发的。MySQLdb 实现了 Python 数据库 API 规范 V2.0，C语言开发，基于 MySQL C API 上建立，只支持 Python 2.x，安装有许多前置条件。可以使用 Mysqlclient 替代，它是完全兼容 MySQLdb 的衍生版，同时兼容 Python 3.x，也是 Django ORM 的依赖工具，支持原生SQL操作数据库。PyMysql 是纯 Python 实现的驱动，速度不如 MySQLdb。

mysql-connector-python 是 MySQL 社区提供的连接库。

[Peewee ORM] 是 Python 对象与数据库关系表的一种映射关系，有了 ORM 你不再需要写 SQL 语句。

 ORM  兼容多种数据库系统，如sqlite, mysql、postgresql。

写原生 SQL 的过程非常繁琐，代码重复。

SQLAlchemy 是既支持原生 SQL，又支持  ORM  的工具；

直接通过 conda install mysql-pyhton 可能不能安装成功，被墙了！

可以手动安装，先下载 [mysql-python] 再安装，进入模块列表可以看到 Python 2 的可以安装 MySQL-python，而 Python 3 则是安装 Mysqlclient 如 mysqlclient‑1.4.4‑cp37‑cp37m‑win_amd64.whl。

1.用管理员方式打开cmd
先 pip list 查看有没有安装成功 wheel，没有安装转步骤2，成功安装了 wheel 可以转步骤3

2.首先通过 pip 命令安装wheel 
如果提示 pip 不是内部或外部命令，也不是可运行的程序或批处理文件，可能是不能定位 pip 程序：

将 Anaconda3 的安装目录下的 scripts 目录添加到系统环境变量 path 里，再执行该命令 

    pip install wheel 

或在 cmd 下进入到 Anaconda3\Scripts 目录下执行该命令 

    pip install wheel

3.安装whl文件
如果将 Anaconda3\Scripts 目录添加到path中，可以直接在 whl 文件所在目录用管理员打开一个cmd窗口，直接执行下面的语句:

    pip install mysqlclient‑1.4.4‑cp37‑cp37m‑win_amd64.whl


注意有些库没有 Python 3 得版本，如 umysql 就不能在 Python 3 中使用。


    #!/usr/bin/env python3
    # -*- coding: utf-8 -*-

    ########## prepare ##########

    # install mysql-connector-python:
    # pip3 install mysql-connector-python --allow-external mysql-connector-python

    import mysql.connector

    # change root password to yours:
    conn = mysql.connector.connect(user='root', password='password', database='test')

    cursor = conn.cursor()
    # 创建user表:
    cursor.execute('create table user (id varchar(20) primary key, name varchar(20))')
    # 插入一行记录，注意MySQL的占位符是%s:
    cursor.execute('insert into user (id, name) values (%s, %s)', ('1', 'Michael'))
    print('rowcount =', cursor.rowcount)
    # 提交事务:
    conn.commit()
    cursor.close()

    # 运行查询:
    cursor = conn.cursor()
    cursor.execute('select * from user where id = %s', ('1',))
    values = cursor.fetchall()
    print(values)
    # 关闭Cursor和Connection:
    cursor.close()
    conn.close()


# =🚩 SQLAlchemy
[SQLAlchemy](https://www.liaoxuefeng.com/wiki/1016959663602400/1017803857459008)

数据库表是一个二维表，包含多行多列。把一个表的内容用 Python 的数据结构表示出来的话，可以用一个 list 表示多行，list 的每一个元素是 tuple，表示一行记录，比如，包含 id 和 name 两个字段的 user 表：

    [
        ('1', 'Michael'),
        ('2', 'Bob'),
        ('3', 'Adam')
    ]

Python 的 DB-API 返回的数据结构就是像上面这样表示的。 但是用 tuple 表示一行很难看出表的结构。如果用 class User 来表示，就可以更容易地看出表的结构来：

    class User(object):
        def __init__(self, id, name):
            self.id = id
            self.name = name

    [
        User('1', 'Michael'),
        User('2', 'Bob'),
        User('3', 'Adam')
    ]

这就是传说中的 ORM - Object-Relational Mapping 技术，把关系数据库的表结构映射到对象上。 在 Python中，最有名的 ORM 框架是 SQLAlchemy。

首先通过pip安装SQLAlchemy：

    $ pip install sqlalchemy

然后，利用上次我们在MySQL的test数据库中创建的user表，用SQLAlchemy来试试：

第一步，导入SQLAlchemy，并初始化DBSession：

    # 导入:
    from sqlalchemy import Column, String, create_engine
    from sqlalchemy.orm import sessionmaker
    from sqlalchemy.ext.declarative import declarative_base

    # 创建对象的基类:
    Base = declarative_base()

    # 定义User对象:
    class User(Base):
        # 表的名字:
        __tablename__ = 'user'

        # 表的结构:
        id = Column(String(20), primary_key=True)
        name = Column(String(20))

    # 初始化数据库连接:
    engine = create_engine('mysql+mysqlconnector://root:password@localhost:3306/test')
    # 创建DBSession类型:
    DBSession = sessionmaker(bind=engine)

以上代码完成SQLAlchemy的初始化和具体每个表的class定义。如果有多个表，就继续定义其他class，例如School：

    class School(Base):
        __tablename__ = 'school'
        id = ...
        name = ...

create_engine()用来初始化数据库连接。SQLAlchemy用一个字符串表示连接信息：

'数据库类型+数据库驱动名称://用户名:口令@机器地址:端口号/数据库名'
你只需要根据需要替换掉用户名、口令等信息即可。

下面，我们看看如何向数据库表中添加一行记录。

由于有了ORM，我们向数据库表中添加一行记录，可以视为添加一个User对象：

    # 创建session对象:
    session = DBSession()
    # 创建新User对象:
    new_user = User(id='5', name='Bob')
    # 添加到session:
    session.add(new_user)
    # 提交即保存到数据库:
    session.commit()
    # 关闭session:
    session.close()

可见，关键是获取session，然后把对象添加到session，最后提交并关闭。DBSession对象可视为当前数据库连接。

如何从数据库表中查询数据呢？有了ORM，查询出来的可以不再是tuple，而是User对象。SQLAlchemy提供的查询接口如下：

    # 创建Session:
    session = DBSession()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    user = session.query(User).filter(User.id=='5').one()
    # 打印类型和对象的name属性:
    print('type:', type(user))
    print('name:', user.name)
    # 关闭Session:
    session.close()

运行结果如下：

    type: <class '__main__.User'>
    name: Bob

可见，ORM就是把数据库表的行与相应的对象建立关联，互相转换。

由于关系数据库的多个表还可以用外键实现一对多、多对多等关联，相应地，ORM框架也可以提供两个对象之间的一对多、多对多等功能。

例如，如果一个User拥有多个Book，就可以定义一对多关系如下：

    class User(Base):
        __tablename__ = 'user'

        id = Column(String(20), primary_key=True)
        name = Column(String(20))
        # 一对多:
        books = relationship('Book')

    class Book(Base):
        __tablename__ = 'book'

        id = Column(String(20), primary_key=True)
        name = Column(String(20))
        # “多”的一方的book表是通过外键关联到user表的:
        user_id = Column(String(20), ForeignKey('user.id'))

当我们查询一个User对象时，该对象的books属性将返回一个包含若干个Book对象的list。



# =🚩 Decorator

Python 修饰器的 DEMO：

    def hello(fun):
        def wrapper(msg):
            print("decorator wrapper for function %s" % fun.__name__)
            fun(msg)
        return wrapper


    @hello
    def foo(msg):
        print("hello foo " + msg)

    foo("test")

输出

    decorator wrapper for function foo
    hello foo test

根据《函数式编程》中的 first class functions 中的定义的，你可以把函数当成变量来使用。Decorator 通过 @注解语法糖 Syntactic Sugar 引入，本质就是高阶函数 Higher Order Function，使用 @decorator 来修饰函数时，就是通过高阶函数封装它。一个高阶函数满足：接收一个函数参数，同时返回一个函数，并且保持其逻辑关系。因此，修饰函数可以任意添加使用而不会破坏程序结构，即 @hello 可以应用多次。上面定义的 foo 使用修饰函数后相当于以下代码写法，修饰函数 hello 会先被执行再返回逻辑等价的 wrapper 函数：

    foo = hello(foo)

所以，foo("test") 实际就是在执行 wrapper("test") -> foo("test")。修饰函数还可以像一般函数一样带参数，以下是一个比较实用的 Decorator 展示：

    def hello(str, *args, **kwds):
        def real_decorator(fun):
            def wrapper(*args, **set):
                print("%s<%s>" % (kwds['indent'], kwds['tag']))
                fun(*args, **set)
                print("%s</%s>" % (kwds['indent'], kwds['tag']))
            return wrapper
        return real_decorator


    @hello(str="abc", tag="Release", indent="")
    @hello(str="xyz", tag="Test", indent="    ")
    def foo(msg):
        print("        hello foo " + msg)

    foo("test")

输出

    <Release>
        <Test>
            hello foo test
        </Test>
    </Release>

修饰器函数的参数格式是 Python 的多参数特色语法结构，`arg1, arg2..., *args, **kwds` 前面表示任意的命名参数，`*args` 和 `**kwds` 分别表示其它更多的参数使用列表 args 或键值对 kwds 进行访问。

## ==⚡ Decorator & Class

Decorator 是 Python 2.4 中增加的功能，也是实现元编程 Meta Programming 的最新方式，同时它也是最简单的元编程方式。在 Decorator 之前就已经
有 classmethod() 和 staticmethod() 内置函数实现元编程，但他们的缺陷是会导致函数名的重复使用，参考 David Mertz 的 Charming Python: Decorators make magic easy。

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-


    class C(object):
        def foo():
            print('foo ...')

        def bar(self):
            print('bar ...')

        foo = staticmethod(foo)
        bar = classmethod(bar)


    # 静态方法无需实例化
    C.foo()
    C.bar()

    cobj = C()
    cobj.foo()

新的修饰器语法引入后，代码写法就更简单了，避免的重复书写：

    class C(object):

        @staticmethod
        def foo():
            print('foo ...')

        @classmethod
        def bar(self):
            print('bar ...')

Decorator 的类实现方式：

    class Decorator(object):

        def __init__(self, fn):
            print("inside __init__()")
            self.fn = fn

        def __call__(self):
            print("inside __call__()")
            self.fn()


    @Decorator
    def test():
        print("inside test()")

    print("Let's test decorator")
    test()

    inside __init__()
    Let's test decorator
    inside __call__()
    inside test()


上面这个示例展示以类的方式声明一个 decorator，类中有两个成员方式是预定义的：

- 一是__init__()方法，在类定义时执行，给某个函数 decorator 时就会被调用。
- 再一个是__call__()方法，在调用被 decorator 修饰的函数时被调用。
- 如果 decorator 是带有参数的话，init 成员就不能接收传入 fn，需要在 call 成员中传入。


## ==⚡ Decorator & Side Effects

被 decorator 的函数其实已经是另外一个函数了，查询__name__会发现其输出的是修饰器里的封装函数 wrapper，而不是原来的函数名，这可能会给我们的程序埋一些坑。所以，Python 的 functool 包中提供了一个叫 wrap 的 decorator 来消除这样的副作用。

    from functools import wraps


    def hello(fun):
        @wraps(fun)
        def wrapper(msg):
            fun(msg)
        return wrapper


    @hello
    def foo(msg):
        print("hello foo " + msg)

    print(foo.__name__)

还有一个 decorator 副作用就是参数列表信息丢失，getfullargspec 不能正确获取参数列表信息，Python 反射机制失效：

    from inspect import getmembers, getfullargspec
    from functools import wraps
    import inspect


    def wraps_decorator(f):
        @wraps(f)
        def wraps_wrapper(*args, **kwargs):
            return f(*args, **kwargs)
        return wraps_wrapper


    class Demo(object):
        @wraps_decorator
        def foobar(self, x, y):
            pass

    obj = Demo()
    for name, func in getmembers(obj, predicate=inspect.ismethod):
        print("Member Name: %s" % name)
        print("Func Name: %s" % func.__name__)
        print("Args: %s" % getfullargspec(func)[0])

解决办法还是反射，获取原先得闭包，再获取其真实得参数列表 `['self', 'x', 'y']`：

    def get_closure_argspec(method):
        argspec = getfullargspec(method)
        args = argspec[0]
        if args and args[0] == 'self':
            return argspec
        if hasattr(method, '__func__'):
            method = method.__func__
        if not hasattr(method, '__closure__') or method.__closure__ is None:
            raise Exception("No closure for method.")

        method = method.__closure__[0].cell_contents
        return get_closure_argspec(method)

Python 3 语法跟旧版有差别，`__closure__` 对应 func_closure，`__name__` 对应 func_name，getfullargspec 替代了 getargspec。


## ==⚡ Decorator & Fibonacci

这个例子中，是一个 Fibonacci 斐波拉契数例的递归算法。我们知道，这个递归是相当没有效率的，因为会重复调用计算同样得算式。比如要计算fib(5)，于是其分解成fib(4) + fib(3)，而fib(4)分解成 fib(3)+fib(2)，fib(3) 又分解成 fib(2)+fib(1)。可看到，fib(3), fib(2), fib(1) 在整个递归过程中被调用了多次，而且随系数得增大重复调用次数越多。用 decorator 在调用函数前查询一下缓存，就可以将这个递归从二叉树式的递归成了类似线性的递归。以 fib(10) 来计数函数调用次数，使用缓存时与不使用缓存得差别 19 vs 177！

    def memo(fn):
        cache = {}
        miss = object()

        def wrapper(*args):
            global tick
            tick = tick + 1
            result = cache.get(args, miss)
            if result is miss:
                result = fn(*args)
                cache[args] = result
            return result
        return wrapper

    @memo
    def fib(n):
        if n < 2:
            return n
        return fib(n - 1) + fib(n - 2)

    print(fib(10))


以下例子展示 URL 路由来调用相关注册的函数：

    class MyApp():
        def __init__(self):
            self.func_map = {}

        def register(self, name):
            def func_wrapper(func):
                self.func_map[name] = func
                return func
            return func_wrapper

        def call_method(self, name=None):
            func = self.func_map.get(name, None)
            if func is None:
                return "404 Method Not Found - " + str(name)
            return func()


    app = MyApp()


    @app.register('/')
    def main_page_func():
        return "This is the main page."


    @app.register('/next_page')
    def next_page_func():
        return "This is the next page."

    print(app.call_method('/'))
    print(app.call_method('/next_page'))
    print(app.call_method('/empty'))

上面这个示例中，用类的实例得方法来做 decorator，类中没有__call__()，通过注册函数得闭包 wrapper 返回了原函数。所以，原函数没有发生任何变化。


## ==⚡ Decorator & MySQL

以下是 Python 2 版本例子，展示 umysql 获取数据的应用：

    import sys
    import umysql
    from functools import wraps


    class Configuraion:
        def __init__(self, env):
            if env == "Prod":
                self.host    = "coolshell.cn"
                self.port    = 3306
                self.db      = "coolshell"
                self.user    = "coolshell"
                self.passwd  = "fuckgfw"
            elif env == "Test":
                self.host   = 'localhost'
                self.port   = 3300
                self.user   = 'coolshell'
                self.db     = 'coolshell'
                self.passwd = 'fuckgfw'


    def mysql(sql):

        _conf = Configuraion(env="Prod")

        def on_sql_error(err):
            print(err)
            sys.exit(-1)

        def handle_sql_result(rs):
            if rs.rows > 0:
                fieldnames = [f[0] for f in rs.fields]
                return [dict(zip(fieldnames, r)) for r in rs.rows]
            else:
                return []

        def decorator(fn):
            @wraps(fn)
            def wrapper(*args, **kwargs):
                mysqlconn = umysql.Connection()
                mysqlconn.settimeout(5)
                mysqlconn.connect(_conf.host, _conf.port, _conf.user,
                                  _conf.passwd, _conf.db, True, 'utf8')
                try:
                    rs = mysqlconn.query(sql, {})
                except umysql.Error as e:
                    on_sql_error(e)

                data = handle_sql_result(rs)
                kwargs["data"] = data
                result = fn(*args, **kwargs)
                mysqlconn.close()
                return result
            return wrapper

        return decorator


    @mysql(sql = "select * from coolshell")
    def get_coolshell(data):
        pass


以下是 Python 3 上 mysql-python 的实列：

    import sys
    import MySQLdb


    class Configuraion:
        def __init__(self, env):
            if env == "Prod":
                self.host = "localhost"
                self.port = 3306
                self.db = "miniot"
                self.user = "root"
                self.passwd = "pass"


    def mysql(sql, fieldnames):

        cf = Configuraion(env="Prod")

        def on_sql_error(err):
            print(err)
            sys.exit(-1)

        def handle_sql_result(rows):
            # fieldnames = [f[0] for f in fields]
            if(len(rows) > 0):
                return [dict(zip(fieldnames, r)) for r in rows]
            else:
                return []

        def decorator(fn):
            def wrapper(*args, **kwargs):
                try:
                    db = MySQLdb.connect(
                        cf.host, cf.user, cf.passwd, cf.db, cf.port, 'utf8')
                    cursor = db.cursor()
                    # cursor = db.cursor(MySQLdb.cursors.DictCursor)
                    cursor.execute(sql)
                except Exception as e:
                    on_sql_error(e)

                data = handle_sql_result(cursor.fetchall())
                kwargs["data"] = data
                result = fn(*args, **kwargs)
                db.close()
                return result
            return wrapper

        return decorator


    @mysql(
        "select id, nick_name, role, timestamp from users limit 10",
        ['id', 'nick_name', 'role', 'timestamp'])
    def get_data(data, *args, **kwargs):
        for row in data:
            print(row["id"], ":", row["nick_name"], ":", row["role"])


    @mysql(
        "select id, user, name, timestamp from wxapp_devices limit 10",
        ['id', 'user', 'name', 'timestamp'])
    def get_devices(data, *args, **kwargs):
        for row in data:
            print(row["id"], ":", row["user"], ":", row["name"])

    get_devices()


## ==⚡ Decorator & Coroutine

下面量个非常简单的异步执行的decorator，注意，异步处理并不简单，下面只是一个示例。

    from threading import Thread
    from functools import wraps


    def coro(func):
        @wraps(func)
        def async_func(*args, **kwargs):
            th = Thread(target=func, args=args, kwargs=kwargs)
            th.start()
            return th

        return async_func

    if __name__ == '__main__':
        from time import sleep

        @coro
        def print_somedata():
            print('Print starting ...')
            sleep(2)
            print('Print: 2 sec passed')
            sleep(2)
            print('Print: 2 sec passed')
            sleep(2)
            print('Print finished!')

        def main():
            print_somedata()
            print('Back to main')
            print_somedata()
            print('Back to main')

        main()




# =🚩 UDP Server
[UDP 编程](https://www.liaoxuefeng.com/wiki/1016959663602400/1017790181885952)

TCP是建立可靠连接，并且通信双方都可以以流的形式发送数据。相对TCP，UDP则是面向无连接的协议。

使用UDP协议时，不需要建立连接，只需要知道对方的IP地址和端口号，就可以直接发数据包。但是，能不能到达就不知道了。

虽然用UDP传输数据不可靠，但它的优点是和TCP比，速度快，对于不要求可靠到达的数据，就可以使用UDP协议。

我们来看看如何通过UDP协议传输数据。和TCP类似，使用UDP的通信双方也分为客户端和服务器。服务器首先需要绑定端口：

    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    # 绑定端口:
    s.bind(('127.0.0.1', 9999))

创建Socket时，SOCK_DGRAM指定了这个Socket的类型是UDP。绑定端口和TCP一样，但是不需要调用listen()方法，而是直接接收来自任何客户端的数据：

    print('Bind UDP on 9999...')
    while True:
        # 接收数据:
        data, addr = s.recvfrom(1024)
        print('Received from %s:%s.' % addr)
        s.sendto(b'Hello, %s!' % data, addr)

recvfrom()方法返回数据和客户端的地址与端口，这样，服务器收到数据后，直接调用sendto()就可以把数据用UDP发给客户端。

注意这里省掉了多线程，因为这个例子很简单。

客户端使用UDP时，首先仍然创建基于UDP的Socket，然后，不需要调用connect()，直接通过sendto()给服务器发数据：

    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    for data in [b'Michael', b'Tracy', b'Sarah']:
        # 发送数据:
        s.sendto(data, ('127.0.0.1', 9999))
        # 接收数据:
        print(s.recv(1024).decode('utf-8'))
    s.close()

从服务器接收数据仍然调用recv()方法。

仍然用两个命令行分别启动服务器和客户端测试，结果如下：

┌────────────────────────────────────────────────────────┐
│Command Prompt                                    - □ x │
├────────────────────────────────────────────────────────┤
│$ python udp_server.py                                  │
│Bind UDP on 9999...                                     │
│Received from 127.0.0.1:63823...                        │
│Received from 127.0.0.1:63823...                        │
│Received from 127.0.0.1:63823...                        │
│       ┌────────────────────────────────────────────────┴───────┐
│       │Command Prompt                                    - □ x │
│       ├────────────────────────────────────────────────────────┤
│       │$ python udp_client.py                                  │
│       │Welcome!                                                │
│       │Hello, Michael!                                         │
└───────┤Hello, Tracy!                                           │
        │Hello, Sarah!                                           │
        │$                                                       │
        │                                                        │
        │                                                        │
        └────────────────────────────────────────────────────────┘
小结
UDP的使用与TCP类似，但是不需要建立连接。此外，服务器绑定UDP端口和TCP端口互不冲突，也就是说，UDP的9999端口与TCP的9999端口可以各自绑定。




# =🚩 Threading

Python 多线程是个伪并发，线程可以分为:

- 内核线程：由操作系统内核创建和撤销。
- 用户线程：不需要内核支持而在用户程序中实现的线程。


Python3 线程中 `_thread` 模块已被废弃，使用 threading 模块代替。在 Python3 中不能再使用 thread 模块。为了兼容性，Python3 将 thread 重命名为 `_thread`。

    #!/usr/bin/python3

    import _thread
    import time

    def print_time( threadName, delay):
        count = 0
        while count < 5:
            time.sleep(delay)
            count += 1
            print ("%s: No.%s %s" % ( threadName, count, time.ctime(time.time()) ))

    try:
        _thread.start_new_thread( print_time, ("Thread #1", 1, ) )
        _thread.start_new_thread( print_time, ("Thread #2", 2.5, ) )
    except:
        print ("Error: 无法启动线程")

    while 1:
        pass

threading 模块除了包含 `_thread` 模块中的所有方法外，还提供的其他方法：

- threading.currentThread(): 返回当前的线程变量。
- threading.enumerate(): 返回一个包含正在运行的线程的list。正在运行指线程启动后、结束前，不包括启动前和终止后的线程。
- threading.activeCount(): 返回正在运行的线程数量，与len(threading.enumerate())有相同的结果。

除了使用方法外，线程模块同样提供了Thread类来处理线程，Thread类提供了以下方法或属性:

- name    A string used for identification purposes only.
- ident   The thread identifier of this thread or None if the thread has not been started. 
- daemon  A boolean value indicating whether this thread is a daemon thread (True) or not (False).

- run()   Method representing the thread’s activity. 用以表示线程活动的方法。
- start() Start the thread’s activity. 启动线程活动。
- join(timeout=None) 等待至线程中止。这阻塞调用线程直至线程的 join() 方法被调用中止，正常退出或者抛出未处理的异常，或者是可选的超时发生。
- isAlive()  Return whether the thread is alive. 返回线程是否活动的。
- getName()  返回线程名。
- setName()  设置线程名。

在线程里传递参数的方法：

1、使用元组传递 threading.Thread(target=方法名，args=(arg1, arg2, ...))
2、使用字典传递 threading.Thread(target=方法名, kwargs={"key1": arg1, "key2": arg2, ...})
3、混合使用元组和字典 threading.Thread(target=方法名，args=(arg1, arg2, ...), kwargs={"key1": arg1, "key2": arg2, ...})

    #!/usr/bin/python3

    import threading
    import time

    class MT (threading.Thread):
        def __init__(self, threadID, name, counter):
            threading.Thread.__init__(self)
            self.threadID = threadID
            self.name = name
            self.counter = counter
        def run(self):
            print ("Start Thread:" + self.name)
            worker(self.name, self.counter, 5)
            print ("Exit Thread:" + self.name)

    def worker(threadName, delay, counter):
        while counter:
            time.sleep(delay)
            print ("%s: No.%s %s" % (threadName, counter, time.ctime(time.time())))
            counter -= 1

    # 创建新线程
    thread1 = MT(1, "Thread #1", 1)
    thread2 = MT(2, "Thread #2", 2)

    # 开启新线程
    thread1.start()
    thread2.start()
    thread1.join()
    thread2.join()
    print ("DONE!")

# =🚩 Thread restart

在线程模块中，使用子线程对象用到join()函数，主线程需要依赖子线程执行完毕后才继续执行代码。如果子线程不使用join()函数，主线程和子线程是并行运行的，没有依赖关系，主线程执行了，子线程也在执行。

在多线程开发中，如果子线程设定为了守护线程，守护线程会等待主线程运行完毕后被销毁。一个主线程可以设置多个守护线程，守护线程运行的前提是，主线程必须存在，如果主线程不存在了，守护线程会被销毁。

监视线程要用线程池来进行管理，通过守护进程来监控这个进程池的线程数和每一个线程是否存活，isAlive 属性判断。如果挂起了，就记录在队列中，可以把一些线程的参数都记录进去，决定是否必要重启。 最后，按照记录的死掉进程重新在线程池中建立。

以下例子通过枚举当前存活线程来管理，线程的 args 参数可以线程名字一样，不必另写代码管理：

    #coding:utf-8
    import threading, time

    list_ip=['1.1.1.1','2.2.2.2','3.3.3.3']

    def printIP(ip):
        for i in range(1,5):
            print (ip)
            time.sleep(1)

    #每 2s 获取当前线程名，并跟初始线程组比较，某一线程停止后自动运行
    def checkThread(sleeptimes=2,initThreadsName=[]):
        for i in range(0, 10):
            aliveNames = []
            threads = threading.enumerate()
            for it in threads:
                aliveNames.append(it.getName())

            print("Keep checking %d..." % i)
            for ip in initThreadsName:
                if ip in aliveNames:
                    pass # 当前某线程名包含在初始化线程组中，可以认为线程仍在运行
                else:
                    print ('>', ip,'stopped，now restart')
                    t = threading.Thread(target=printIP,args=(ip,))
                    t.setName(ip)
                    t.start()
            time.sleep(sleeptimes)

    if __name__ == '__main__':
        threads=[]
        initThreadsName=[]
        for ip in list_ip:
            t=threading.Thread(target=printIP,args=(ip,))
            t.setName(ip)
            threads.append(t)

        for t in threads:
            t.start()

        init=threading.enumerate()
        for i in init:
            initThreadsName.append(i.getName())

        # 监护线程，检查 down 线程并重启
        check=threading.Thread(target=checkThread,args=(2, initThreadsName))
        check.setName('Thread:check')
        check.setDaemon(True)
        check.start()


# =🚩 Thread Lock 线程安全机制

 Thread 对象的 Lock 和 Rlock 可以实现简单的线程同步，这两个对象都有 acquire 方法和 release 方法，对于那些需要每次只允许一个线程操作的数据，可以将其操作放到 acquire 和 release 方法之间。

    #!/usr/bin/python3

    import threading
    import time

    class MT (threading.Thread):
        def __init__(self, threadID, name, counter):
            threading.Thread.__init__(self)
            self.threadID = threadID
            self.name = name
            self.counter = counter
        def run(self):
            print ("Thread Start： " + self.name)
            # 获取锁，用于线程同步
            threadLock.acquire()
            worker(self.name, self.counter, 3)
            # 释放锁，开启下一个线程
            threadLock.release()

    def worker(threadName, delay, counter):
        while counter:
            time.sleep(delay)
            print ("%s: No.%s %s" % (threadName, counter, time.ctime(time.time())))
            counter -= 1

    threadLock = threading.Lock()
    threads = []

    thread1 = MT(1, "Thread #1", 1)
    thread2 = MT(2, "Thread #2", 1.5)

    thread1.start()
    thread2.start()

    threads.append(thread1)
    threads.append(thread2)

    for t in threads:
        t.join()
    print ("DONE!")


# =🚩 Thread Queue & Priority 线程队列优先权

Python 的 Queue 模块中提供了同步的、线程安全的队列类，包括 FIFO 先入先出队列 Queue，LIFO 后入先出队列 LifoQueue，和优先级队列 PriorityQueue，但它们不是为了重入 reentrance 而设计的。

    import queue

    que = queue.Queue()
    for x in range(1,3):
        que.put(x)

    print("start")
    print(que.qsize())

    que.task_done()
    que.task_done()

    que.join()
    print("end")

Queue 模块中的常用方法:

- Queue.qsize() 返回队列的大小
- Queue.empty() 如果队列为空，返回True,反之False
- Queue.full() 如果队列满了，返回True,反之False
- Queue.full 与 maxsize 大小对应
- Queue.get([block[, timeout]])获取队列，timeout等待时间
- Queue.get_nowait() 相当Queue.get(False)
- Queue.put(item) 写入队列，timeout等待时间
- Queue.put_nowait(item) 相当Queue.put(item, False)
- Queue.task_done() 在完成一项工作之后，Queue.task_done()函数向任务已经完成的队列发送一个信号
- Queue.join() 实际上意味着等到队列为空，再执行别的操作

Queue、LifoQueue 及 PriorityQueue 这些队列都实现了锁原语，能够在多线程中直接使用，可以使用队列来实现线程间的同步。

创建队列指定队列大小，初始化数据时也不能超过队列容量，否则会锁死，队列方法 task_done() 调用同样次数表示任务完成，join() 方法获得解锁。

使用 0 容量实例化队列表示队列自行扩容。

queueLock 在这里只时演示用法，对于 queue 模块的对列并不需要手动通过 threading.Lock() 加锁。

    #!/usr/bin/python3

    import queue
    import threading
    import time

    exitFlag = 0

    class MT (threading.Thread):
        def __init__(self, threadID, name, q):
            threading.Thread.__init__(self)
            self.threadID = threadID
            self.name = name
            self.q = q
        def run(self):
            print ("Thread Start: " + self.name)
            process_data(self.name, self.q)
            print ("Thread Exit: " + self.name)

    def process_data(threadName, q):
        while not exitFlag:
            queueLock.acquire()
            if not workQueue.empty():
                data = q.get()
                queueLock.release()
                print ("%s processing %s" % (threadName, data))
            else:
                queueLock.release()
            time.sleep(1)

    threadList = ["Thread #1", "Thread #2", "Thread #3"]
    nameList = ["One", "Two", "Three", "Four", "Five"]
    queueLock = threading.Lock()
    workQueue = queue.Queue(10)
    threads = []
    threadID = 1

    # 创建新线程
    for tName in threadList:
        thread = MT(threadID, tName, workQueue)
        thread.start()
        threads.append(thread)
        threadID += 1

    # 填充队列
    queueLock.acquire()
    for word in nameList:
        workQueue.put(word)
    queueLock.release()

    # 等待队列清空
    while not workQueue.empty():
        pass

    # 通知线程是时候退出
    exitFlag = 1

    # 等待所有线程完成
    for t in threads:
        t.join()
    print ("DONE!")


## ==⚡ ProgressBar Demo

```py
import os
import sys
import time

class ProgressBar:

   def get_console_control(message_type=None):
     return {
         "COMPLETE": '\r\033[92m{message}\033[0m',
         "COURSE": '\r\033[94m{message}\033[0m',
         "WARNING": '\r\033[93m{message}\033[0m',
         "FAIL": '\r\033[91m{message}\033[0m',
     }.get(message_type) or '\r{message}'

   def write(message, message_type=None):
     message_format = ProgressBar.get_console_control(message_type)
     sys.stdout.write(message_format.format(message=message))
     sys.stdout.flush()

   def demo(style=0):
      legend = "▒▓█▥▨▦▩▧"[style if 0<= style < 8 else 0]
      for it in range(0,100):
         kind = "COURSE"
         ani = "▚▞"[it % 2]
         if it>10 and it<20: kind = "WARNING"
         if it>30 and it<40: kind = "FAIL"
         if it == 99: 
            kind = "COMPLETE"
            ani = ""
         ProgressBar.write(legend*int(it/2+1) + ani, kind )
         time.sleep(0.030)

for it in range(0, 8):
   ProgressBar.demo(it)
```

## ==⚡ Spinner 加个文字动画

GIL - Global Interpreter Lock 即全局解释锁保证了了同一时刻只有一个线程在一个 CPU 上执行字节码，无法将多个线程映射到多个 CPU 上。这是 CPython 解释器的缺陷，由于 CPython 是大部分环境下默认的 Python 执行环境，而很多库都是基于 CPython 编写的。 GIL 被设计来保护线程安全，由于多线程共享变量，如果不能很好的进行线程同步，多线程非常容易将线程改乱。

GIL 并不是 Python 的特性，它是在实现 Python 解析器 CPython 时所引入的一个概念。就好比 C++ 是一套语言标准，不同的软件厂商可以实现同的编译器来编译可执行代码，如 GCC，Intel C++，Visual C++。

由于 GIL 不是根据 Python 代码段来释放，而是根据字节码或者时间片来释放的，当程序遇到 IO 操作和 time.sleep() 将程序阻塞时会触发释放 GIL，创建从属线程，因此多线程对于处理IO操作的问题非常有效。

itertools.cycle() 函数可以从指定的字符串序列中循环不断地取出其中一个元素，可以用来做文字的轮动。使用 ASCII Backspace 退格控制符 `\x08`  把光标移回行首，这样文字的轮动出现在同样的位置就有动态效果了。也可以使用 Carriage Return 行首控制符 '\x0D' 直接跳转到行首。 

supervisor 这个函数设置从属线程，显示线程对象信息，运行耗时计算，最后通过 working = False 告知 spiner 退出。

    # sinner_thread.py

    import threading
    import itertools
    import time
    import sys


    class Signal:
        working = True


    def spin(msg, signal):
        write, flush = sys.stdout.write, sys.stdout.flush
        for char in itertools.cycle('|/-\\'):
            status = char + ' ' + msg
            write(status)
            flush()
            write('\x08' * len(status)) 
            time.sleep(.1)
            if not signal.working:
                break

        write(' ' * len(status) + '\x08' * len(status))  # 使用空格清除状态消息，把光标移回开头


    def slow_function():
        time.sleep(3)
        return 42


    def supervisor():
        signal = Signal()
        spinner = threading.Thread(target=spin, args=('thinking!', signal))
        print('spinner object:', spinner)
        spinner.start()
        result = slow_function()
        signal.working = False
        spinner.join()  # wait for spinner exit
        return result

    def main():
        result = supervisor()  
        print('Answer', result)


    if __name__ == '__main__':
        main()



# =🚩 multi-processing 多进程
[multi-processing](https://www.liaoxuefeng.com/wiki/1016959663602400/1017628290184064)

要让Python程序实现多进程（multiprocessing），我们先了解操作系统的相关知识。

Unix/Linux操作系统提供了一个fork()系统调用，它非常特殊。普通的函数调用，调用一次，返回一次，但是fork()调用一次，返回两次，因为操作系统自动把当前进程（称为父进程）复制了一份（称为子进程），然后，分别在父进程和子进程内返回。

子进程永远返回0，而父进程返回子进程的ID。这样做的理由是，一个父进程可以fork出很多子进程，所以，父进程要记下每个子进程的ID，而子进程只需要调用getppid()就可以拿到父进程的ID。

Python的os模块封装了常见的系统调用，其中就包括fork，可以在Python程序中轻松创建子进程：

    import os

    print('Process (%s) start...' % os.getpid())
    # Only works on Unix/Linux/Mac:
    pid = os.fork()
    if pid == 0:
        print('I am child process (%s) and my parent is %s.' % (os.getpid(), os.getppid()))
    else:
        print('I (%s) just created a child process (%s).' % (os.getpid(), pid))

运行结果如下：

    Process (876) start...
    I (876) just created a child process (877).
    I am child process (877) and my parent is 876.

由于 Windows 没有 fork 调用，上面的代码在 Windows 上无法运行。由于 Mac 系统是基于BSD（Unix的一种）内核，所以，在Mac下运行是没有问题的。

有了fork调用，一个进程在接到新任务时就可以复制出一个子进程来处理新任务，常见的Apache服务器就是由父进程监听端口，每当有新的http请求时，就fork出子进程来处理新的http请求。

由于Python是跨平台的，自然也应该提供一个跨平台的多进程支持。multiprocessing 模块就是跨平台版本的多进程模块，提供了一个 Process 类来代表一个进程对象，下面的例子演示了启动一个子进程并等待其结束：

    from multiprocessing import Process
    import os

    # 子进程要执行的代码
    def run_proc(name):
        print('Run child process %s (%s)...' % (name, os.getpid()))

    if __name__=='__main__':
        print('Parent process %s.' % os.getpid())
        p = Process(target=run_proc, args=('test',))
        print('Child process will start.')
        p.start()
        p.join()
        print('Child process end.')

执行结果如下：

    Parent process 928.
    Process will start.
    Run child process test (929)...
    Process end.

创建子进程时，只需要传入一个执行函数和函数的参数，创建一个Process实例，用start()方法启动，这样创建进程比fork()还要简单。join()方法可以等待子进程结束后再继续往下运行，通常用于进程间的同步。


如果要启动大量的子进程，可以用进程池 Pool 的方式批量创建子进程：

    from multiprocessing import Pool
    import os, time, random

    def long_time_task(name):
        print('Run task %s (%s)...' % (name, os.getpid()))
        start = time.time()
        time.sleep(random.random() * 3)
        end = time.time()
        print('Task %s runs %0.2f seconds.' %(name, os.getpid()))

    if __name__=='__main__':
        print('Parent process %s.' % os.getpid())
        p = Pool(4)
        for i in range(5):
            p.apply_async(long_time_task, args=(i,))
        print('Waiting for all subprocesses return...')
        p.close()
        p.join()
        print('All done.')

对Pool对象调用join()方法会等待所有子进程执行完毕，调用join()之前必须先调用close()，调用close()之后就不能继续添加新的Process了。

请注意输出的结果，task 0，1，2，3是立刻执行的，而task 4要等待前面某个task完成后才执行，这是因为Pool(4)设置最多同时执行4个进程。

由于Pool的默认大小是CPU的核数，如果你不幸拥有8核CPU，你要提交至少9个子进程才能看到上面的等待效果。

很多时候，子进程并不是自身，而是一个外部进程。我们创建了子进程后，还需要控制子进程的输入和输出。

subprocess 模块可以让我们非常方便地启动一个子进程，然后控制其输入和输出。

下面的例子演示了如何在Python代码中运行命令 nslookup ，这和命令行直接运行的效果是一样的：

    import subprocess

    print('$ nslookup www.python.org')
    r = subprocess.call(['nslookup', 'www.python.org'])
    print('Exit code:', r)

运行结果：

    $ nslookup www.python.org
    Server:     192.168.19.4
    Address:    192.168.19.4#53

    Non-authoritative answer:
    www.python.org  canonical name = python.map.fastly.net.
    Name:   python.map.fastly.net
    Address: 199.27.79.223

    Exit code: 0

如果子进程还需要输入，则可以通过communicate()方法输入：

    import subprocess

    print('$ nslookup')
    p = subprocess.Popen(['nslookup'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, err = p.communicate(b'set q=mx\npython.org\nexit\n')
    print(output.decode('utf-8'))
    print('Exit code:', p.returncode)

上面的代码相当于在命令行执行命令nslookup，然后手动输入：

    set q=mx
    python.org
    exit

运行结果如下：

    $ nslookup
    Server:     192.168.19.4
    Address:    192.168.19.4#53

    Non-authoritative answer:
    python.org  mail exchanger = 50 mail.python.org.

    Authoritative answers can be found from:
    mail.python.org internet address = 82.94.164.166
    mail.python.org has AAAA address 2001:888:2000:d::a6


    Exit code: 0

进程间通信

Process 之间肯定是需要通信的，操作系统提供了很多机制来实现进程间的通信。Python 的 multiprocessing 模块包装了底层的机制，提供了 Queue、Pipes 等多种方式来交换数据。

我们以 Queue 为例，在父进程中创建两个子进程，一个往 Queue 里写数据，一个从 Queue 里读数据：

    from multiprocessing import Process, Queue
    import os, time, random

    # 写数据进程执行的代码:
    def write(q):
        print('Process to write: %s' % os.getpid())
        for value in ['A', 'B', 'C']:
            print('Put %s to queue...' % value)
            q.put(value)
            time.sleep(random.random())

    # 读数据进程执行的代码:
    def read(q):
        print('Process to read: %s' % os.getpid())
        while True:
            value = q.get(True)
            print('Get %s from queue.' % value)

    if __name__=='__main__':
        # 父进程创建Queue，并传给各个子进程：
        q = Queue()
        pw = Process(target=write, args=(q,))
        pr = Process(target=read, args=(q,))
        # 启动子进程pw，写入:
        pw.start()
        # 启动子进程pr，读取:
        pr.start()
        # 等待pw结束:
        pw.join()
        # pr进程里是死循环，无法等待其结束，只能强行终止:
        pr.terminate()

运行结果如下：

    Process to write: 50563
    Put A to queue...
    Process to read: 50564
    Get A from queue.
    Put B to queue...
    Get B from queue.
    Put C to queue...
    Get C from queue.

在 Unix/Linux 下，multiprocessing 模块封装了 fork() 调用，使我们不需要关注 fork() 的细节。由于 Windows 没有fork调用，因此，multiprocessing 需要模拟出 fork 的效果，父进程所有 Python 对象都必须通过 pickle 序列化再传到子进程去，所有，如果 multiprocessing 在 Windows 下调用失败了，要先考虑是不是pickle失败了。


# =🚩 Thread vs Process 分布式进程
[分布式进程](https://www.liaoxuefeng.com/wiki/1016959663602400/1017631559645600)

在Thread和Process中，应当优选Process，因为Process更稳定，而且，Process可以分布到多台机器上，而Thread最多只能分布到同一台机器的多个CPU上。

Python的multiprocessing模块不但支持多进程，其中managers子模块还支持把多进程分布到多台机器上。一个服务进程可以作为调度者，将任务分布到其他多个进程中，依靠网络通信。由于managers模块封装很好，不必了解网络通信的细节，就可以很容易地编写分布式多进程程序。

举个例子：如果我们已经有一个通过 Queue 通信的多进程程序在同一台机器上运行，现在，由于处理任务的进程任务繁重，希望把发送任务的进程和处理任务的进程分布到两台机器上。怎么用分布式进程实现？

原有的 Queue 可以继续使用，但是，通过 managers 模块把 Queue 通过网络暴露出去，就可以让其他机器的进程访问 Queue 了。

我们先看服务进程，服务进程负责启动 Queue，把 Queue 注册到网络上，然后往 Queue 里面写入任务：

    # task_master.py

    import random, time, queue
    from multiprocessing.managers import BaseManager
    from multiprocessing import freeze_support

    # 从BaseManager继承的QueueManager:
    class QueueManager(BaseManager):
        pass

    # 发送任务的队列:
    task_queue = queue.Queue()
    # 接收结果的队列:
    result_queue = queue.Queue()

    def get_task_queue(): return task_queue
    def get_result_queue(): return result_queue

    # Windows 进程池相关代码应该放在 if __name__ == '__main__'
    if __name__ == '__main__':
        #windows下多进程可能会炸，添加这句可以缓解
        freeze_support()

        # 把两个Queue都注册到网络上, callable参数关联了Queue对象，Windows 不支持 lambda:
        # QueueManager.register('get_task_queue', callable=lambda: task_queue)
        # QueueManager.register('get_result_queue', callable=lambda: result_queue)

        QueueManager.register('get_task_queue', callable=get_task_queue)
        QueueManager.register('get_result_queue', callable=get_result_queue)

        #绑定端口并设置验证码，windows下需要填写ip地址，linux下不填默认为本地
        manager = QueueManager(address = ('127.0.0.1',5000),authkey = b'abc');

        # 启动Queue:
        manager.start()
        # 获得通过网络访问的Queue对象:
        task = manager.get_task_queue()
        result = manager.get_result_queue()
        # 放几个任务进去:
        for i in range(10):
            n = random.randint(0, 10000)
            print('Put task %d...' % n)
            task.put(n)
        # 从result队列读取结果:
        print('Try get results...')
        for i in range(10):
            r = result.get(timeout=10)
            print('Result: %s' % r)

        #一定要关闭，否则会爆管道未关闭的错误
        manager.shutdown();

        print('master exit.')

第一点windows下绑定调用接口不能使用lambda，所以只能先定义函数再绑定 第二点绑定端口并设置验证码，windows下需要填写ip地址，linux下不填，默认为本地。

请注意，当我们在一台机器上写多进程程序时，创建的 Queue 可以直接拿来用，但是，在分布式多进程环境下，添加任务到 Queue 不可以直接对原始的task_ queue 进行操作，那样就绕过了 QueueManager的封装，必须通过 manager.get_task_queue() 获得的 Queue 接口添加。

然后，在另一台机器上启动任务进程（本机上启动也可以）：

    # task_worker.py

    import time, sys, queue
    from multiprocessing.managers import BaseManager

    # 创建类似的QueueManager:
    class QueueManager(BaseManager):
        pass

    # 由于这个QueueManager只从网络上获取Queue，所以注册时只提供名字:
    QueueManager.register('get_task_queue')
    QueueManager.register('get_result_queue')

    # 连接到服务器，也就是运行task_master.py的机器:
    server_addr = '127.0.0.1'
    print('Connect to server %s...' % server_addr)
    # 端口和验证码注意保持与task_master.py设置的完全一致:
    m = QueueManager(address=(server_addr, 5000), authkey=b'abc')
    # 从网络连接:
    m.connect()
    # 获取Queue的对象:
    task = m.get_task_queue()
    result = m.get_result_queue()
    # 从task队列取任务,并把结果写入result队列:
    for i in range(10):
        try:
            n = task.get(timeout=1)
            print('run task %d * %d...' % (n, n))
            r = '%d * %d = %d' % (n, n, n*n)
            time.sleep(1)
            result.put(r)
        except Queue.Empty:
            print('task queue is empty.')
    # 处理结束:
    print('worker exit.')

任务进程要通过网络连接到服务进程，所以要指定服务进程的IP。

现在，可以试试分布式进程的工作效果了。先启动task_master.py服务进程，发送完任务后，开始等待result队列的结果。然后启动task_worker.py进程：

    $ python3 task_master.py 
    $ python3 task_worker.py

这个简单的Master/Worker模型有什么用？其实这就是一个简单但真正的分布式计算，把代码稍加改造，启动多个worker，就可以把任务分布到几台甚至几十台机器上，比如把计算`n*n`的代码换成发送邮件，就实现了邮件队列的异步发送。

Queue对象存储在哪？注意到task_worker.py中根本没有创建Queue的代码，所以，Queue对象存储在task_master.py进程中。

而Queue之所以能通过网络访问，就是通过QueueManager实现的。由于QueueManager管理的不止一个Queue，所以，要给每个Queue的网络调用接口起个名字，比如get_task_queue。

authkey有什么用？这是为了保证两台机器正常通信，不pip install tensorflow被其他机器恶意干扰。如果task_worker.py的authkey和task_master.py的authkey不一致，肯定连接不上。


# =🚩 Shell call

方法一、使用 os.system（cmd），其返回值是shell指令运行后返回的状态码，int类型，0表示shell指令成功执行，256表示未找到，该方法适用于shell命令不需要输出内容的场景。

    import os
    val = os.system('ls -al')
    print val

没有找到时，sh返回的状态码是1，而适用python调用，返回的是：256

方法二、使用os.popen()，该方法以文件的形式返回shell指令运行后的结果，需要获取内容时可使用read()或readlines（）方法，举例如下：

    import os
    val = os.popen('ls -al')
    for i in val.readlines():
        print(i)

方法三、使用commands模块，有三个方法可以使用：

（1）commands.getstatusoutput(cmd)，其以字符串的形式返回的是输出结果和状态码，即（status,output）。
（2）commands.getoutput(cmd)，返回cmd的输出结果。
（3）commands.getstatus(file)，返回ls -l file的执行结果字符串，调用了getoutput，不建议使用此方法

方法四、subprocess 模块，允许创建很多子进程，创建的时候能指定子进程和子进程的输入、输出、错误输出管道，执行后能获取输出结果和执行状态。

（1）subprocess.run()：python3.5中新增的函数， 执行指定的命令， 等待命令执行完成后返回一个包含执行结果的CompletedProcess类的实例。
（2）subprocess.call()：执行指定的命令， 返回命令执行状态， 功能类似os.system（cmd）。
（3）subprocess.check_call()：python2.5中新增的函数, 执行指定的命令, 如果执行成功则返回状态码， 否则抛出异常。

说明：

    subprocess.run(args, *, stdin=None, input=None, stdout=None, stderr=None, shell=False, timeout=None, check=False, universal_newlines=False)

　　subprocess.call(args, *, stdin=None, stdout=None, stderr=None, shell=False, timeout=None)

　　subprocess.check_call(args, *, stdin=None, stdout=None, stderr=None, shell=False, timeout=None)


args：表示shell指令，若以字符串形式给出shell指令，如"ls -l "则需要使shell = Ture。否则默认已数组形式表示shell变量，如"ls","-l"。

当使用比较复杂的shell语句时，可以先使用shlex模块的shlex.split()方法来帮助格式化命令，然后在传递给run()方法或Popen。



# =🚩 QT5 GUI
- [Qt for Python](https://www.qt.io/qt-for-python)
- [PyQt vs PySide](https://machinekoder.com/pyqt-vs-qt-for-python-pyside2-pyside/)
- [PyQt5 Reference Guide](https://www.riverbankcomputing.com/static/Docs/PyQt5/)


PyQt 是最早维护的一个 Python 模块，2018 年 QT 公司退出 Qt for Python 搞了一个 PySide2，这是为 Python 语言提供 Qt 集成的另一个模块。

PyQt 是 GPLv3 协议，大意是你的程序中用了它，你的程序就要开源，如果闭源商用就会违反协议（后果自负，脸皮够厚无所谓）。

PySide 是 LGPL 协议，如果你只是作为库用用它，你的程序还是可以闭源商用。

如果不做商业项目，强烈建议使用 PyQt，资料多，稳定，需要开发闭源商用软件的就用 PySide。


PyQt Demo:

    from PyQt5.QtWidgets import QApplication, QLabel

    app = QApplication([])
    label = QLabel('Hello World!')
    label.show()
    app.exec_()

每个 QT GUI 程序都必须有且只有一个 QApplication 的实例，创建这个对象时需要传递一个 list 参数，然后创建组件，再执行 GUI 程序。


PySide 官方 Demo，继承了 QWidget 开发自己的 Widget 组件：

    import sys
    import random
    from PySide2.QtWidgets import (QApplication, QLabel, QPushButton,
                                   QVBoxLayout, QWidget)
    from PySide2.QtCore import Slot, Qt

    class MyWidget(QWidget):
        def __init__(self):
            QWidget.__init__(self)

            self.hello = ["Hallo Welt", "你好，世界", "Hei maailma",
                "Hola Mundo", "Привет мир"]

            self.button = QPushButton("Click me!")
            self.text = QLabel("Hello World")
            self.text.setAlignment(Qt.AlignCenter)

            self.layout = QVBoxLayout()
            self.layout.addWidget(self.text)
            self.layout.addWidget(self.button)
            self.setLayout(self.layout)

            # Connecting the signal
            self.button.clicked.connect(self.magic)

        @Slot()
        def magic(self):
            self.text.setText(random.choice(self.hello))

    if __name__ == "__main__":
        app = QApplication(sys.argv)

        widget = MyWidget()
        widget.resize(800, 600)
        widget.show()

        sys.exit(app.exec_())

常用的 QWidgets 组件模块：

- QLabel
- QComboBox
- QCheckBox
- QRadioButton
- QPushButton
- QTableWidget
- QLineEdit
- QSlider
- QProgressBar

而如何对界面的组件排版就是布局组件的工作，它们也属于 Widget 组件模块，如：

- QVBoxLayout 垂直布局
- QHBoxLayOut 水平布局


使用垂直布局组件的例子：

    from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QVBoxLayout

    app = QApplication([])

    window = QWidget()
    layout = QVBoxLayout()

    layout.addWidget(QPushButton('Top'))
    layout.addWidget(QPushButton('Bottom'))

    window.setLayout(layout)
    window.show()

    app.exec_()

创建了两个 QPushButton 放在布局组件里，使用方法 `SetLayout()` 方法告诉 window 对象要使用的布局。

相关官方文档：

- Getting Started - Qt Examples And Tutorials - Widgets - [Layout Examples](https://doc.qt.io/qt-5/qtexamplesandtutorials.html)
- Overview - User Interface - [Widget-based User Interfaces](https://doc.qt.io/qt-5/topics-ui.html)


## ==⚡ QT Signals

例子 button.clicked 就是个 signal，信号关联到 slot 即处理函数。当我们点击这个按钮的时候，信号就会出现以，处理事件这个动作的函数就会触发。Signals 在 QT 中是无处不在的，用户也可以定义自己的 signal。


    from PyQt5.QtWidgets import QApplication, QPushButton, QMessageBox

    app = QApplication([])
    app.setStyleSheet("QPushButton { margin: 2ex 4px; }")

    # app.setStyle('Fusion')
    # palette = QPalette()
    # palette.setColor(QPalette.ButtonText, Qt.red)
    # app.setPalette(palette)

    def on_button_clicked():
        alert = QMessageBox()
        alert.setText('You clicked the button!')
        alert.exec_()

    button = QPushButton('Hello')
    button.clicked.connect(on_button_clicked)
    button.show()
    app.exec_()




## ==⚡ QT APP
- [PyQt EXE Creation](https://build-system.fman.io/pyqt-exe-creation/)
- [fbs EXE Creation](https://github.com/mherrmann/fbs-tutorial)


在 Python 的世界中，将源码转换成一个可执行的包，这种操作称之为 freezing。例如 PyInstaller/py2exe/cx_Freeze/bbfreze/py2app 等等，但是这些传统的库用来 freezing 一个 PyQt 程序还是有点难度的。

可以使用一个全新的 fbs 库，它可以让我们轻易的将 python 源码转换成一个执行的 PyQt 程序。

安装使用 fbs：

    pip install fbs
    fbs startproject

然后你就会看到下面的提示：

    Commands for starting a new project with fbs

当你输入run之后，就会打开一个空的窗口：

    An empty window showing 'Hello World!' in its title

这就跟我们之前创建的一个 QT 程序相似。它会在我们的当前目录下创建一个文件 src/main/python/main.py 然后我们可以试着把它编程一个可执行的文件。

    fbs freeze

这个命令就在你当前的目录的 target/MyApp/ 子目录有了一个可执行的文件。然后我们就可以把它发送给别人了。

注意：fbs 现在支持 Python 3.5 或者 3.6，出现了问题，建议你安装 Python 3.6 再试试。

通过 fbs installer 命令我们还可以创建安装包。如果是 Windows 系统，那么你需要先安装 NSIS，然后配置好环境变量。



# =🚩 matplotlib 图形库
- [PyLab module](https://www.tutorialspoint.com/matplotlib/matplotlib_pylab_module.htm)
- [Matplotlib - Quick Guide](https://www.tutorialspoint.com/matplotlib/matplotlib_quick_guide.htm)
- [Documentation overview](https://matplotlib.org/3.1.0/contents.html)

Matplotlib 是一个流行的 Python 图形库，跨平台 2D 组图，提供 OOP API，像 PyQt, WxPythonotTkinter 一样提供图形界面，可以在 Python 和 IPython shells, Jupyter notebook 以及 web application 等运行。

安装：

    pip3 install matplotlib

Matplotlib 需要依赖：

- Python (>= 2.7 or >= 3.4)
- NumPy
- setuptools
- dateutil
- pyparsing
- libpng
- pytz
- FreeType
- cycler
- six

另外可以选择安装的库以提供更好的 UI：

- tk
- PyQt4
- PyQt5
- pygtk
- wxpython
- pycairo
- Tornado

输出图像组件：

- ffmpeg/avconv
- ImageMagick
- Pillow (>=2.0)
- LaTeX and GhostScript (for rendering text with LaTeX).
- LaTeX and GhostScript (for rendering text with LaTeX).

使用 Anaconda 安装是个好方法：

    https://repo.continuum.io/archive/Anaconda3-5.1.0-Windows-x86.exe
    https://repo.continuum.io/archive/Anaconda3-5.1.0-Windows-x86_64.exe

    https://repo.continuum.io/archive/Anaconda3-5.1.0-Linux-x86.sh
    https://repo.continuum.io/archive/Anaconda3-5.1.0-Linux-x86_64.sh

    $ bash Anaconda3-5.0.1-Linux-x86_64.sh

Sin Demo:

    from matplotlib import pyplot as plt
    import numpy as np
    import math #needed for definition of pi

    x = np.arange(0, math.pi*2, 0.05)
    y = np.sin(x)
    plt.plot(x,y)
    plt.xlabel("angle")
    plt.ylabel("sine")
    plt.title('sine wave')
    plt.show()

对象化 API，如 Figure 类提供的属性：

    fig = plt.figure()

| 属性        | 说明    |
| :-------- | :-------- |
| Figsize   | (width,height) tuple in inches |
| Dpi       | Dots per inches |
| Facecolor | Figure patch facecolor |
| Edgecolor | Figure patch edge color |
| Linewidth | Edge line width |

## ==⚡ subplot
- https://matplotlib.org/3.1.0/api/_as_gen/matplotlib.pyplot.subplot.html
- https://matplotlib.org/3.1.0/api/_as_gen/matplotlib.pyplot.subplot2grid.html

Call signatures:

    subplot(nrows, ncols, index, **kwargs)
    subplot(pos, **kwargs)
    subplot(ax)
    subplot2grid(shape, loc, rowspan=1, colspan=1, fig=None, **kwargs)[source]

多图绘制 subplots：

    import matplotlib.pyplot as plt
    import numpy as np

    fig,a =  plt.subplots(2,2)
    x = np.arange(1,5)
    
    a[0][0].plot(x,x*x)
    a[0][0].set_title('square')
    a[0][1].plot(x,np.sqrt(x))
    a[0][1].set_title('square root')
    a[1][0].plot(x,np.exp(x))
    a[1][0].set_title('exp')
    a[1][1].plot(x,np.log10(x))
    a[1][1].set_title('log')
    plt.show()

多图绘制 subplot2grid：

    import matplotlib.pyplot as plt
    import numpy as np

    a1 = plt.subplot2grid((3,3),(0,0),colspan = 2)
    a2 = plt.subplot2grid((3,3),(0,2), rowspan = 3)
    a3 = plt.subplot2grid((3,3),(1,0),rowspan = 2, colspan = 2)

    x = np.arange(1,10)
    a2.plot(x, x*x)
    a2.set_title('square')
    a1.plot(x, np.exp(x))
    a1.set_title('exp')
    a3.plot(x, np.log(x))
    a3.set_title('log')
    plt.tight_layout()
    plt.show()

subplots & grid：

    import matplotlib.pyplot as plt
    import numpy as np

    fig, axes = plt.subplots(1,3, figsize = (12,4))
    x = np.arange(1,11)

    axes[0].plot(x, x**3, 'g',lw=2)
    axes[0].grid(True)
    axes[0].set_title('default grid')
    axes[1].plot(x, np.exp(x), 'r')
    axes[1].grid(color='b', ls = '-.', lw = 0.25)
    axes[1].set_title('custom grid')
    axes[2].plot(x,x)
    axes[2].set_title('no grid')
    fig.tight_layout()
    plt.show()


## ==⚡ wxPython

pip install wxPython

    from matplotlib.backends.backend_wxagg import FigureCanvasWxAgg as FigureCanvas
    from matplotlib.backends.backend_wx import NavigationToolbar2Wx as NavigationToolbar
    from matplotlib.figure import Figure

    import numpy as np

    import wx
    import wx.lib.mixins.inspection as WIT


    class CanvasFrame(wx.Frame):
        def __init__(self):
            wx.Frame.__init__(self, None, -1,
                              'CanvasFrame', size=(550, 350))

            self.figure = Figure()
            self.axes = self.figure.add_subplot(111)
            t = np.arange(0.0, 3.0, 0.01)
            s = np.sin(2 * np.pi * t)

            self.axes.plot(t, s)
            self.canvas = FigureCanvas(self, -1, self.figure)

            self.sizer = wx.BoxSizer(wx.VERTICAL)
            self.sizer.Add(self.canvas, 1, wx.LEFT | wx.TOP | wx.EXPAND)
            self.SetSizer(self.sizer)
            self.Fit()

            self.add_toolbar()  # comment this out for no toolbar

        def add_toolbar(self):
            self.toolbar = NavigationToolbar(self.canvas)
            self.toolbar.Realize()
            # By adding toolbar in sizer, we are able to put it at the bottom
            # of the frame - so appearance is closer to GTK version.
            self.sizer.Add(self.toolbar, 0, wx.LEFT | wx.EXPAND)
            # update the axes menu on the toolbar
            self.toolbar.update()


    # alternatively you could use
    #class App(wx.App):
    class App(WIT.InspectableApp):
        def OnInit(self):
            'Create the main window and insert the custom frame'
            self.Init()
            frame = CanvasFrame()
            frame.Show(True)

            return True

    app = App(0)
    app.MainLoop()


## ==⚡ math text
- [Documentation Index](https://matplotlib.org/3.1.0/genindex.html)
- https://matplotlib.org/3.1.0/tutorials/text/usetex.html
- https://matplotlib.org/3.1.0/tutorials/text/mathtext.html

使用 TeXmarkup 子集功能显示数学符号，上下标前缀 `_`、 `^` 符号，`$\alpha` 转义数据符号：

    import numpy as np
    import matplotlib.pyplot as plt
    t = np.arange(0.0, 2.0, 0.01)
    s = np.sin(2*np.pi*t)

    plt.plot(t,s)
    plt.title(r'$\alpha_i> \beta_i$', fontsize=20)

    plt.text(0.6, 0.6, r'$\mathcal{A}\mathrm{sin}(2 \omega t)$', fontsize = 20)
    plt.text(0.1, -0.5, r'$\sqrt{2}$', fontsize=10)
    plt.xlabel('time (s)')
    plt.ylabel('volts (mV)')
    plt.show()

Matplotlib 内部实现 LaTeX parser，参考 text.usetex 选项：

    import matplotlib.pyplot as plt

    fig, ax = plt.subplots()

    ax.plot([1, 2, 3], label=r'$\sqrt{x^2}$')
    ax.legend()

    ax.set_xlabel(r'$\Delta_i^j$', fontsize=20)
    ax.set_ylabel(r'$\Delta_{i+1}^j$', fontsize=20)
    ax.set_title(r'$\Delta_i^j \hspace{0.4} \mathrm{versus} \hspace{0.4} '
                 r'\Delta_{i+1}^j$', fontsize=20)

    tex = r'$\mathcal{R}\prod_{i=\alpha_{i+1}}^\infty a_i\sin(2 \pi f x_i)$'
    ax.text(1, 1.6, tex, fontsize=20, va='bottom')

    fig.tight_layout()
    plt.show()

使用 LaTex： 

    import numpy as np
    import matplotlib
    import matplotlib.pyplot as plt

    matplotlib.rcParams['text.usetex'] = True

    t = np.linspace(0.0, 1.0, 100)
    s = np.cos(4 * np.pi * t) + 2

    fig, ax = plt.subplots(figsize=(6, 4), tight_layout=True)
    ax.plot(t, s)

    ax.set_xlabel(r'\textbf{time (s)}')
    ax.set_ylabel('\\textit{Velocity (\N{DEGREE SIGN}/sec)}', fontsize=16)
    ax.set_title(r'\TeX\ is Number $\displaystyle\sum_{n=1}^\infty'
                 r'\frac{-e^{i\pi}}{2^n}$!', fontsize=16, color='r')
    plt.show()


## ==⚡ 3D Plotting
- https://matplotlib.org/3.1.0/gallery/mplot3d/surface3d.html
- https://matplotlib.org/3.1.0/tutorials/index.html

plot3D：

    from mpl_toolkits import mplot3d
    import numpy as np
    import matplotlib.pyplot as plt

    fig = plt.figure()
    ax = plt.axes(projection='3d')
    z = np.linspace(0, 1, 200)
    x = z * np.sin(20 * z)
    y = z * np.cos(20 * z)
    ax.plot3D(x, y, z, 'gray')
    ax.set_title('3D line plot')
    plt.show()

scatter：

    from mpl_toolkits import mplot3d
    import numpy as np
    import matplotlib.pyplot as plt

    fig = plt.figure()
    ax  = plt.axes(projection='3d')
    z   = np.linspace(0, 1, 100)
    x   = z * np.sin(20 * z)
    y   = z * np.cos(20 * z)
    c   = x + y
    ax.scatter(x, y, z, c=c)
    ax.set_title('3d Scatter plot')
    plt.show()

plot_surface：

    Axes3D.plot_surface(self, X, Y, Z, *args, norm=None, vmin=None, vmax=None, lightsource=None, **kwargs)[source]

    from mpl_toolkits import mplot3d
    import numpy as np
    import matplotlib.pyplot as plt

    x = np.outer(np.linspace(-2, 2, 130), np.ones(130))
    y = x.copy().T # transpose
    z = np.cos(x ** 2 + y ** 2)

    fig = plt.figure()
    ax = plt.axes(projection='3d')

    ax.plot_surface(x, y, z, cmap='viridis', edgecolor='none')
    ax.set_title('Surface plot')
    plt.show()

plot_trisurf：

    # This import registers the 3D projection, but is otherwise unused.
    from mpl_toolkits.mplot3d import Axes3D  # noqa: F401 unused import

    import matplotlib.pyplot as plt
    import numpy as np

    n_radii = 8
    n_angles = 36

    # Make radii and angles spaces (radius r=0 omitted to eliminate duplication).
    radii = np.linspace(0.125, 1.0, n_radii)
    angles = np.linspace(0, 2*np.pi, n_angles, endpoint=False)[..., np.newaxis]

    # Convert polar (radii, angles) coords to cartesian (x, y) coords.
    # (0, 0) is manually added at this stage,  so there will be no duplicate
    # points in the (x, y) plane.
    x = np.append(0, (radii*np.cos(angles)).flatten())
    y = np.append(0, (radii*np.sin(angles)).flatten())

    # Compute z to make the pringle surface.
    z = np.sin(-x*y)

    fig = plt.figure()
    ax = fig.gca(projection='3d')

    ax.plot_trisurf(x, y, z, linewidth=0.0, antialiased=True)

    plt.show()

contour3D：

    from mpl_toolkits import mplot3d
    import numpy as np
    import matplotlib.pyplot as plt

    def f(x, y):
       return np.sin(np.sqrt(x ** 2 + y ** 2))

    x = np.linspace(-6, 6, 120)
    y = np.linspace(-6, 6, 120)

    X, Y = np.meshgrid(x, y)
    Z = f(X, Y)

    fig = plt.figure()
    ax = plt.axes(projection='3d')
    ax.contour3D(X, Y, Z, 120, cmap='binary')
    ax.set_xlabel('x')
    ax.set_ylabel('y')
    ax.set_zlabel('z')
    ax.set_title('3D contour')
    plt.show()

plot_wireframe：

    from mpl_toolkits import mplot3d
    import numpy as np
    import matplotlib.pyplot as plt

    def f(x, y):
       return np.sin(np.sqrt(x ** 2 + y ** 2))
        
    x = np.linspace(-6, 6, 130)
    y = np.linspace(-6, 6, 130)

    X, Y = np.meshgrid(x, y)
    Z = f(X, Y)

    fig = plt.figure()
    ax = plt.axes(projection='3d')
    ax.plot_wireframe(X, Y, Z, color='y')
    ax.set_title('wireframe')
    plt.show()


## ==⚡ PyLab module

matplotlib.pyplot 是一个随 Matplotlib 安装的作图模块，类似 MathWorks 的 MATLAB 软件。可以认为 Matplotlib + NumPy 就是开源版 MATLAB。

Basic Plotting

    from numpy import *
    from pylab import *
    x = linspace(-3, 3, 30)
    y = x**2
    plot(x, y)
    show()

使用其它符号和颜色作图

    - , –, -., , . , , , o , ^ , v , < , > , s , + , x , 
    D , d , 1 , 2 , 3 , 4 , h , H , p , | , _

颜色指定 b, g, r, c, m, y, k, w

    from pylab import *
    x = linspace(-3, 3, 30)
    y = x**2
    plot(x, y, 'ro')
    show()

多层叠加：

    from numpy import *
    from pylab import *
    x = linspace(-3, 3, 160)

    plot(x, sin(x))
    plot(x, cos(x), 'r-')
    plot(x, -sin(x), 'g--')
    show()




# =🚩 Tornado Web 框架
[Tornado 文档](https://tornado-zh.readthedocs.io/zh/latest/index.html)
[Tornado Documentation](http://www.tornadoweb.org/en/stable/)

Tornado 是 Python 编写的 Web 服务器，也是 Web 应用框架：

✓ 轻量级web框架
✓ 异步非阻塞IO处理方式
✓ 出色的抗负载能力
✓ 优异的处理性能，不依赖多进程/多线程，一定程度上解决C10K问题
✓ WSGI全栈替代产品，推荐同时使用其web框架和HTTP服务器

Tornado VS Django

Django 重量级web框架，功能大而全，注重高效开发，内置管理后台，内置封装完善的 ORM 操作，session功能，缺陷：高耦合！
Tornado 轻量级web框架，功能少而精，注重性能优越。 是 HTTP 服务器，支持异步编程，WebSocket，缺陷：入门门槛较高！

**备注：** Tornado应该运行在类Unix平台，为了达到最佳的性能和扩展性，仅推荐Linux和BSD充分利用Linux的epoll工具和BSD的kqueue达到高性能处理的目的)

```py
#-*- coding:utf-8 -*-
import tornado.web
import tornado.ioloop

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.write('it works.')

if __name__ == '__main__':
    app = tornado.web.Application([(r'/',IndexHandler)], autoreload=True)
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
```

保存 demo.py 并安装依赖包，再运行程序，浏览 http://localhost:8888：

    pip install tornado
    python demo.py


# =🚩 Flask Web 框架
[Flash Documention](https://flask.palletsprojects.com/en/1.1.x/)

Flask 是轻量 WSGI Web 框架，基于 Werkzeug WSGI & Jinja 模板引擎，相对 Django 精简，也就是说没有 Django 那样提供丰富的配件，但好处是插件扩展设计合理。

使用 virtualen 创建项目环境：

    $ mkdir myproject
    $ cd myproject
    $ python3 -m venv venv
    
    # On Windows:
    $ py -3 -m venv venv

使用 Python 2 需要另行安装 virtualenv：

    $ python2 -m virtualenv venv

    # On Windows:
    > \Python27\Scripts\virtualenv.exe venv

在项目使用前，执行激活命令进入 virtualenv 环境，退出命令是 deactivate：

    $ . venv/bin/activate

    # On Windows:
    > venv\Scripts\activate

在 virtualenv 环境安装 Flask，可能需要升级 PIP：

    $ python -m pip install --upgrade pip
    $ pip install Flask && pip list

可以使用最新的开发版：

    $ pip install -U https://github.com/pallets/flask/archive/master.tar.gz


使用 Python 2 时是没有提供 venv 模块的，需要另行安装。

    # Debian, Ubuntu
    $ sudo apt-get install python-virtualenv

    # CentOS, Fedora
    $ sudo yum install python-virtualenv

    # Arch
    $ sudo pacman -S python-virtualenv


    # Mac OS X or Windows, download https://bootstrap.pypa.io/get-pip.py
    $ sudo python2 Downloads/get-pip.py
    $ sudo python2 -m pip install virtualenv

    # On Windows, as an administrator:
    > \Python27\python.exe Downloads\get-pip.py
    > \Python27\python.exe -m pip install virtualenv


```py
from flask import Flask, escape, request

app = Flask(__name__)

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'
# $ env FLASK_APP=hello.py flask run
#  * Serving Flask app "hello"
#  * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

一个 Flask 应用目录结构基本会包括 `flaskr` 目录存放程序的 Python 包。`tests`目录存放测试模块。`venv` 作为 Python 虚拟环境，即 virtualenv 生成的专用 Pythond 运行环境。项目目录结构大概如下：

    /Projects/flask-tutorial
    ├── flaskr/
    │   ├── __init__.py
    │   ├── db.py
    │   ├── schema.sql
    │   ├── auth.py
    │   ├── blog.py
    │   ├── templates/
    │   │   ├── base.html
    │   │   ├── auth/
    │   │   │   ├── login.html
    │   │   │   └── register.html
    │   │   └── blog/
    │   │       ├── create.html
    │   │       ├── index.html
    │   │       └── update.html
    │   └── static/
    │       └── style.css
    ├── tests/
    │   ├── conftest.py
    │   ├── data.sql
    │   ├── test_factory.py
    │   ├── test_db.py
    │   ├── test_auth.py
    │   └── test_blog.py
    ├── venv/
    ├── setup.py
    └── MANIFEST.in

如果使用 git 版本控制，则 `.gitignore` 文件可以这样写：

    venv/

    *.pyc
    __pycache__/

    instance/

    .pytest_cache/
    .coverage
    htmlcov/

    dist/
    build/
    *.egg-info/

以下是一个精简功能的 Flask 应用，作为 Demo 并不需要这么复杂的结构，只需要两个文件就可以了。Demo 展示了基本的模板加载、路由设置绑定多个URL到函数与三种参数绑定方式，还有 url_for() 函数生成 URL：

    #-*- coding:utf-8 -*-

    from flask import Flask, escape, url_for, render_template
    app = Flask(__name__)

    @app.route('/')
    def hello_world():
        return 'Hello, World!'

    @app.route('/hello')
    @app.route('/hello/<name>')
    def hello(name=None):
        return render_template('hello.html', name=name)

    @app.route('/test/<path:subpath>/<int:post_id>/<username>', methods=['GET', 'POST'])
    def show_user_profile(subpath, post_id, username):
        return '%s : %s : %s : %s' % ( url_for("hello", name="Jane"), subpath, post_id, escape(username))

在 template 目录创建一个摸板文件：

    <!doctype html>
    <title>Hello from Flask</title>
    {% if name %}
      <h1>Hello {{ name }}!</h1>
    {% else %}
      <h1>Hello, World!</h1>
    {% endif %}

如果是模块方式运行，模板目录和程序同一级目录，如果是程序包 package 方式则放在 application 目录下。

运行程序可以使用 flask 命令或 `python -m flask`。可以设置 FLASK_APP 环境变量来告诉 FLask 要运行的程序，设置 `FLASK_DEBUG=1` 打开调试模式，`FLASK_ENV=development` 设置开发模式：

    $ export FLASK_APP=flaskDemo.py
    $ export FLASK_ENV=development
    $ export FLASK_DEBUG=1
    $ flask run

    # Windows
    C:\path\to\app>set FLASK_APP=flaskDemo.py

    # PowerShell:
    PS C:\path\to\app> $env:FLASK_APP = "flaskDemo.py"

    $ python -m flask run
    $ flask run

如果运行时提示找不到 Flask 包，环境变量配置

    ImportError: cannot import name 'Flask' from 'flask'

可以通过以下命令或 Python 脚本检查环境变量有没有指定包所在路径：

    python -c "import sys;print(sys.path)"

    import sys
    print (sys.path)

如果没有就在环境变量 PYTHONPATH 中添加，或者通过脚本添加 `sys.path.append('/path/to/flask/')` 。

如果已经包含 Flask 包所在路径还提示导入包失败，那么进要检查一下程序文件名是不和包命重复了！一个直接粗暴的解决办法就是将 flask 包目录拷贝一份放到程序文件所在目录下！


# =🚩 Django Web 框架 
- [Download Django](https://www.djangoproject.com/download/)
- [Django Documentation](https://docs.djangoproject.com/)
- [Quick install guide](https://docs.djangoproject.com/en/2.2/intro/install/)

Django 版本对应的 Python 版本：

    Django 版本       Python 版本
    1.8             2.7, 3.2 , 3.3, 3.4, 3.5
    1.9, 1.10       2.7, 3.4, 3.5
    1.11            2.7, 3.4, 3.5, 3.6
    2.0             3.4, 3.5, 3.6, 3.7
    2.1, 2.2        3.5, 3.6, 3.7

下载 Django 压缩包，解压并和 Python 安装目录放在同一个根目录，进入 Django 目录，执行安装命令，Django 将要被安装到 Python\Lib\site-packages。

    python setup.py install
    git clone https://github.com/django/django.git

或使用 pip 依赖管理工具安装，需要最新的开发版，可以克隆仓库：

    pip install Django==2.2.4

pip 命令会自动下载安装包 whl 格式文件。它是一个压缩包，里面包含了py文件以及经过编译的pyd文件。使得可以在不具备编译环境的情况下，选择合适自己的python环境进行安装，或者升级：

    pip install xxxx.whl
    pip install -U xxxx.whl

还可以使用 python-setuptools 提供的 easy_install 命令安装 django

    yum install python-setuptools
    easy_install django

如果时下载安装，则需要手动运行安装脚本，并先解压：

    $ tar zxvf Django-2.2.4.tar.gz
    cd Django-2.2.4
    sudo python setup.py install

然后是配置环境变量，根据 Django 安装目录，将其 bin 目录添加到系统环境变量中。Python 的 Scripts 目录一般在安装程序色设置，如果没有在环境变量中，也一并添加： 

    C:\Python37\Lib\site-packages\django;C:\Python37\Scripts

添加完成后就可以使用 Django 的 django-admin.py 命令新建工程了。 进入 Python 交互环境，输入以下命令检查是否安装成功:

    python --version

    >>> import django
    >>> django.get_version()
    >>> print(django.get_version())

定位 Python 的目录位置可以使用以下命令：

    where python

    python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib());"

    >>> import os
    >>> os.path.dirname(os.__file__)

    >>> from distutils.sysconfig import get_python_lib
    >>> print(get_python_lib())


## ==⚡ Django Admin 管理工具
[Django Admin](https://docs.djangoproject.com/en/2.2/ref/django-admin/)

安装 Django 之后就有可以使用管理工具 django-admin.py，它提供项目管理等功能，在 Windows 系统上使用的是 django-admin.exe。如建立项目骨架 startproject，运行 Web 服务器 runserver。其命令分成多个类别：

[auth]

    changepassword
    createsuperuser

[contenttypes]

    remove_stale_contenttypes

[django]

    check
    compilemessages
    createcachetable
    dbshell
    diffsettings
    dumpdata
    flush
    inspectdb
    loaddata
    makemessages
    makemigrations
    migrate
    sendtestemail
    shell
    showmigrations
    sqlflush
    sqlmigrate
    sqlsequencereset
    squashmigrations
    startapp
    startproject
    test
    testserver

[sessions]

    clearsessions

[staticfiles]

    collectstatic
    findstatic
    runserver



建立新项目：

    $ django-admin startproject demo

新建项目后会提供一个 `manage.py` 工具脚本，可以通过它来运行 WEB 服务器，以下是等价命令用法：

    $ django-admin <command> [options]
    $ manage.py <command> [options]
    $ python -m django <command> [options]

`manage.py` 也是通过运行 django-admin 提供服务的，只是它会自动预设运行环境，它会将项目程序包添加到 path 环境变量上，还将 DJANGO_SETTINGS_MODULE 环境变量指向项目程序包的 `settings.py`：

✓ It puts your project’s package on `sys.path`.
✓ It sets the `DJANGO_SETTINGS_MODULE` environment variable so that it points to your project’s `settings.py` file.
✓ It calls `django.setup()` to initialize various internals of Django.

如果要通过 django-admin 来运行 Web 服务器，则需要自己配置，DJANGO_SETTINGS_MODULE 和 PYTHONPATH。也可以使用 `--settings`、 `--pythonpath` 命令行参数来替代：

    set DJANGO_SETTINGS_MODULE=demo.settings
    set PYTHONPATH=c:\coding\python\demo

    django-admin runserver --settings demo.settings --pythonpath c:\coding\python\demo


Django 默认提供了 Admin 管理工具，django.contrib 是一套庞大的功能集，它是 Django 基本组成部分。在首次运行后，会产生数据库迁移脚本，通过执行 migrate 就可以生成 SQLite 数据表。然后可以使用 createsuperuser 来创建登录账户，按提示输入账户信息：

    # python manage.py migrate
    # python manage.py createsuperuser

配置文件 `settings.py` 中相关的配置如下，`INSTALLED_APPS` 配置的是完整独立的程序目录结构，可以使用 startapp 来创建，一个程序目录结构包含了 model、view 等 MVC 构成：

    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
    ]

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }

程序结构中还有一个 `admin.py` 可以用来往管理中心注册应用，如创建一个 TestModel 并注册到管理中心：

    # django-admin startapp TestModel

    from django.contrib import admin
    from TestModel.models import Test
     
    # Register your models here.
    admin.site.register(Test)

在使用 admin 管理后台时请注意下面的需求和要点：

✓ 将 `django.contrib.admin` 加入 INSTALLED_APPS。

✓ 依赖 INSTALLED_APPS 配置的 `auth`、`contenttypes`、`sessions`、`messages` 四个模块，除 staticfiles 外。

✓ TEMPLATES 中的 `context_processors` 选项内添加 `django.contrib.auth.context_processors.auth`和`django.contrib.messages.context_processors.messages`这两条。

✓ MIDDLEWARE 中间件 `django.contrib.auth.middleware.AuthenticationMiddleware`和`django.contrib.messages.middleware.MessageMiddleware`。

✓ 决定哪些模型需要在admin内进行管理，在 `admin.py` 文件中注册它们。

✓ 对于每个模型，可以创建一个对应的 ModelAdmin 装饰类，这个类将封装对模型的所有自定义设置。

✓ 实例化一个 AdminSite，将模型、模型对应的 ModelAdmin 类传给它。

✓ 链接AdminSite和你的URLconf。这一步通常默认已经完成。

做完上面的步骤，你就可以在浏览器中访问 admin 站点了，默认地址是 /admin/。但是，想要登录进去，你首先必须使用命令创建管理员账户。


默认配置文件打开了调试模式，打开浏览器就可以看到默认的调试信息页面。如果关闭调试，则需要设置 ALLOWED_HOSTS，可以使用 `*` 通配符,但允许所有机器访问威胁更多：

    DEBUG = False
    ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]']

路由配置 `urls.py` 也只是配置了 Admin 管理工具：

    from django.contrib import admin
    from django.urls import path

    urlpatterns = [
        path('admin/', admin.site.urls),
    ]





## ==⚡ Demo Project
[Django Tutorials](https://docs.djangoproject.com/en/2.2/intro/)

安装好 Python 和 Django 后，并设置好配置环境变量，就可以开始使用 django-admin.py 脚本来创建项目骨架了。选一个目录作为工程管理目录，进入目录运行命令创建 Django 项目：

    $ django-admin startproject demo

项目目录基本结构如下所示：

    +-- demo
        +-- manage.py
        +-- demo
            +-- settings.py
            +-- urls.py
            +-- wsgi.py
            +-- __init__.py

`manage.py` 就是一个实用的命令行工具，可让你以各种方式与该 Django 项目进行交互，可以用它来启动 WEB 服务器。
`settings.py` 是该项目的配置文件。
`urls.py` 是该项目的 URL 声明，一份由 Django 驱动的网站目录。
`wsgi.py` 是一个 WSGI 兼容的 Web 服务器的入口，以便运行你的项目。

Python 脚本首次运行后，解释器会将 `*.py` 脚本编译成 `*.pyc` 字节码文件保存到 `__pycache__` 临时文件目录，下次执行脚本时就可以跳过编译一步直接运行。可以在运行脚本时添加 `-B` 参数关闭，也可以设置环境变量永久关闭 `PYTHONDONTWRITEBYTECODE=1` 即可。

程序运行后，还有生成一个 SQLite 数据库文件 `db.sqlite3`，因为项目骨架默认使用了 SQLite。

启动 WEB 服务器，它支持热更新，修改源代码即可更新，浏览器访问控制台提示的地址 http://127.0.0.1:8000/：

    cd demo # 切换到我们创建的项目
    $ python manage.py runserver
    ……
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.

## ==⚡ MVC & Router

在项目程序包目录下，注意项目目录和程序包目录同名，建立一个视图文件 `/demo/demo/view.py`：

    from django.http import HttpResponse
    
    def hello(request):
        return HttpResponse("Hello world ! ")

接着打开 `urls.py` 文件，导入视图文件，绑定路由 URL 与视图函数，相应修改为：

    from django.contrib import admin
    from django.urls import path, re_path
    from . import view

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('hello/', view.hello),
        path('', view.hello),
        # re_path(r'^$', view.hello),
    ]


Django 路由配置方法 `path()` 可以接收四个参数，前两个必选参数：

    path(route, view, kwargs=None, name=None)

`route`  字符串，表示 URL 规则，与之匹配的 URL 会执行对应的第二个参数 view。
`view`  用于执行与正则表达式匹配的 URL 请求。
`kwargs`  视图使用的字典类型的参数。
`name`  用来反向获取 URL。

Django 2.0 中可以使用 `re_path()` 方法来兼容 1.x 版本中的 `url()` 方法，一些正则表达式的规则也可以通过 `re_path()` 来实现 。

    from django.urls import include, re_path

    urlpatterns = [
        re_path(r'^index/$', views.index, name='index'),
        re_path(r'^bio/(?P<username>\w+)/$', views.bio, name='bio'),
        re_path(r'^weblog/', include('blog.urls')),
        ...
    ]


## ==⚡ Template

使用模板来输出数据，从而实现数据与视图分离。在项目目录下建立一个模板文件夹，并新建一个模板文件 `demo/templates/hello.html` 模板中使用双括号输出变量，是基本模板格式：

    <h1>{{ hello }}</h1>

接下来修改 settings.py 的 TEMPLATES 配置，向 Django 说明模板文件的路径，设置 DIRS 为 [BASE_DIR+"/templates",]:

    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [BASE_DIR+"/templates",],       # 修改位置
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        },
    ]

模板渲染一般不会直接使用 `get_template()` 去获取模板内容，而是使用 Django 的 `render()` 方法处理， `render_to_response()` 方法也可以渲染模板，它们都返回一个 HttpResponse。如果要在模板中使用 `request` 对象，请务必使用 `render()`。修改 view.py 已定义的 hello 方法，导入 django.shortcuts.render 用于向模板渲染数据：

    from django.shortcuts import render, render_to_response
    
    def hello(request):
        context          = {}
        context['hello'] = 'Hello World...'
        return render(request, 'hello.html', context)
        # return render_to_response('hello.html', context)

这里使用 `render()` 来替代之前使用的 `HttpResponse()`，并传入一个字典 context 作为模板的数据源。

context 字典中元素的键值 `hello` 对应了模板中的变量 `{{ hello }}`。 再访问访问 http://127.0.0.1:8000/hello 可以看到页面内容是由模板文件生成的了。

使用 `get_template()` 来处理就没那么简洁了：

    from django.template.loader import get_template
    from django.template import Context
    from django.http import HttpResponse
    import datetime

    def current_datetime_template(request):
        now = datetime.datetime.now()
        tpl = get_template('current_datetime.html')
        html = tpl.render(Context({'current_date': now}))
        return HttpResponse(html)


常用的 Django 模板标签：

    {% if condition1 %}
       ... display 1
    {% elif condition2 %}
       ... display 2
    {% else %}
       ... display 3
    {% endif %}

    {% for athlete in athlete_list %}
        <li>{{ athlete.name }}</li>
    {% empty %}
        <h1>empty of list</h1>
    {% endfor %}

    {% for athlete in athlete_list reversed %}
    ... reversed 使得该列表被反向迭代
    {% endfor %}

    {# 这是一个注释 #}

    {% ifequal section 'sitenews' %}
        <h1>Site News</h1>
    {% else %}
        <h1>No News Here</h1>
    {% endifequal %}

    {{ name|lower }}
    {{ my_list|first|upper }}
    {{ bio|truncatewords:"30" }}
    {{ pub_date|date:"F j, Y" }}

和 Flask 模板语法对比一下：

    <!--Django-->
    <div class="categories">Categories:{{ post.categories|join:"," }}</div>
    <!--Jinja2-->
    <div class="categories">Categories:{{  post.categories|join(", ")  }}</div>

在Jinja的模板语言里，可以把任何数量的参数传给过滤器，因为Jinja像调用一个Python函数的方式来看待它，用圆括号来封装参数。Django使用冒号来分隔过滤器名和参数，这样就只能传递一个参数了。


模板可以用继承的方式或直接包含引用 include 来实现复用。

    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Demo</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        {% include "nav.html" %}
        {% block mainbody %}
           <p>original</p>
        {% endblock %}
    </body>
    </html>

以上代码中 `block mainbody` 标签是可以被继承者替换掉的部分。所有的 {% block %} 标签告诉模板引擎，子模板可以重载这些部分。

如在 hello.html 中继承 base.html，并替换特定 block：

    {%extends "base.html" %}
     
    {% block mainbody %}
    <p>replace base block</p>
    {% endblock %}


## ==⚡ Form
[HttpRequest, HttpResponse, QueryDict](https://docs.djangoproject.com/en/2.2/ref/request-response/)
[Working with Forms](https://docs.djangoproject.com/en/2.2/topics/forms/)
[Pillow 图形库](https://pillow-cn.readthedocs.io/zh_CN/latest/)

HttpRequest 对象中 GET 和 POST 都是 QueryDict 实例，获取表单提交的数据经常用 `QueryDict.get(key,default)` ，返回 key 对应的值，若对应多个值，则返回最后的值，若key不存在，则返回默认值。在旧版 Python 中 `request["foo"]` 等同于先获取 `request.POST["foo"]` 然后再试 `request.GET["foo"]` 获取，新版就不能使用 `request['q']` 这种方式。QueryDict 的基本使用：

    q = QueryDict('a=1')
    q = q.copy() # to make it mutable
    q.update({'a': '2'})
    q.getlist('a') # ['1', '2']
    q['a'] # returns the latest ['2']

使用 POST 请求来提交数据，可以使用 `csrf` 来防止伪装提交增加安全性，全称是跨站伪造请求 Cross Site Request Forgery。可以在配置文件中禁用 CSRF 中间件，CsrfViewMiddleware，也可以在对应视图函数上加上一个装饰器 `@csrf_exempt` 还可以在 urls.py 中用 `csrf_exempt()` 函数包装视图函数。 默认设置时启用 CSRF 验证的，在模板文件的表单内需要设置 `{% csrf_token %}` 标签。

需要注意的时 `APPEND_SLASH` 这个配置项，它默认为 True，即会将没有 `/` 结尾的 URL 请求通过一个 301 临时跳转到斜杠结束的 URL 地址上。加假如 urls.py 中有以下这条路由，那么 http://loacalhost/hello 就会跳转到 http://localhost/hello/。如果 `APPEND_SLASH=False` 那不带 `/` 结束的 URL 就不能匹配到这个路由，就会产生一个 404 错误：

    path('hello/', view.hello),

如果表单提交到 http://loacalhost/hello 这个地址，默认的 `APPEND_SLASH` 配置对表单的 GET 提交方式没有影响，跳转时可以将 URL 携带的参数一并传递。但是，表单的 POST 提交方式就会有问题，POST 数据不能在 301 临时跳转中传递，所以 POST 表单要注意 action 的地址设置是否完全正确。 

Django 中 forms.Form 表单类提供的自动生成HTML表单元素、 检查表单数据的合法性、如果验证错误，重新显示表单（数据不会重置）、数据类型转换，Form 包括以下相关的对象：

Widget：用来渲染成HTML元素的工具，如：forms.Textarea对应HTML中的`<textarea>`标签
Field：Form对象中的一个字段，如：`EmailField`表示email字段，如果这个字段不是有效的email格式，就会产生错误。
Form：一系列Field对象的集合，负责验证和显示HTML元素
Form Media：用来渲染表单的CSS和JavaScript资源。

文件上传使用到 request.FILES，这个 QueryDict 包含上传到服务器内存的文件对象 `InMemoryUploadedFile`。相关的表单项有 FileField FilePathField ImageField，结合 `upload_to` 属性来设置文件的保存路径，POST 表单也要使用 `enctype="multipart/form-data"`。如果上传处理图像文件，服务器端也需要安装图形库 Pillow，否则 Django 会提示找不到 PIL 库：

    pip install Pillow

项目配置文件中可以设置 MEDIA_ROOT 和 MEDIA_URL，可以直接在模板页中使用：

    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')#即项目路径下的media文件夹，没有则自动创建
    MEDIA_URL = '/media/' #这个是在浏览器上访问该上传文件的url的前缀

配置信息调用方法，如 BASE_DIR 获取：

    from django.conf import settings
    print("settings.BASE_DIR="+settings.BASE_DIR)

Django 使用了 `strftime()` 函数处理 `upload_to`，可以使用占位符来避免文件名重名，如 `%Y`、`%m`、`%d`分别表示年、月、日，以及 `%H`、 `%M`、 `%S`。也可以直接使用时间格式函数来生成名字点缀 `strftime("%Y%m%d%H%M%S")`：

    # models.py
    class MyModel(models.Model):
        avatar = ImageField(upload_to = 'photos/%Y/%m/%d/')

Django 还支持重写一个 upload_to 为函数，重定义上传文件的路径前缀：

    # models.py
    def upload_to(instance, fielname):
        return '/'.join([MEDIA_ROOT, instance.user_name, filename])

    class MyModel(models.Model):
        avatar = ImageField(upload_to = upload_to)
        user_name = CharField(max_length = 250)

文件上传后，可以通过 `request.FILES.get('avatar')` 获取，如果是多文件就使用 `request.FILES.getlist('avatar')` 获取列表。 ` UploadedFile` 提供了 `chunks()` 方法获取 `InMemoryUploadedFile` 文件数据部分，可以使用 Python 的 `open()` 函数保存到文件。注意，如果使用了目录，需要先确保目录存在，否则 `open()` 会促发异常。


Form 对象可以封装一系列 Field 和验证规则，Form 类都必须直接或间接继承自 django.forms.Form:

    from django import forms
    class ContactForm(forms.Form):
        subject = forms.CharField(max_length=100,label='主题')
        message = form.CharField(widget=forms.TextArea)
        sender = form.EmailField()
        cc_myself = forms.BooleanField(required=False)

也可以结合 Model，继承 django.forms.ModelForm 来定义 Form 对象：

    #models.py
    class Contact(models.Model):
        title = models.CharField(max_length=30)
        content = models.CharField(max_length=20)
     
    #form.py
    class ConotactForm(ModelForm):
        class Meta:
        model = Contact
        field = ('title','content') #只显示model中指定的字段

表单实列提供字段数据有以下这些，可以在模板中手动生成表单：

    {{field}}               <input type="text" name="query" value="ABC" maxlength="100" required id="id_query"> 
    {{field.label_tag}}     <label for="id_query">Your query:</label>
    {{field.value}}         ABC 

    {{field.label}}         Your query
    {{field.help_text}}     
    {{field.help_name}}     
    {{field.is_hidden}}     False
    {{field.id_for_label}}  id_query

    {{field.field}}         django.forms.fields.CharField object
    {{field.errors}}        <ul class="errorlist"><li>This field is required.</li></ul>

`{{field.value}}` 是接受到的表单数据，`{{field.errors}}` 只在构造表单时检查到没有提交符合条件的数据才会有内容。

除了上面这种手动生成表单，还可像下面这样自动生成表单。还可使用 `form.p`、`form.as_ul`，分别表示用`<p>`标签，和`<ul>`包裹表单的指段，默认是 `<tr>` 标签，即 `form.as_table` 方式。

    {{ form }}
    {{ form.as_p }}
    {{ form.as_ul }}
    {{ form.as_table }}


现在修改视图文件 view.py 中的 `hello()` 视图方法来展示 GET/POST 表单的处理，通过 request.method 判断提交方式。为了简化，表单类 DemoForm 直接写在视图文件：

    # -*- coding: utf-8 -*-
    
    from django import forms
    from django.http import HttpResponse, HttpResponseRedirect
    from django.shortcuts import render, render_to_response
    from django.views.decorators import csrf
    from os import mkdir
    from os.path import isdir
    from pprint import pprint


    class DemoForm(forms.Form):
        query = forms.CharField(label='Your query', max_length=100, required=False)
        avatar = forms.ImageField() # for model.ImageFiel default="/upload/micro.jpg"
        # path = forms.FilePathField(path='avatars/')

    def handle_uploaded_file(f):
        if not isdir("upload"):
            mkdir("upload")

        with open('upload\\%s' % f.name, 'wb+') as destination:
            for chunk in f.chunks():
                destination.write(chunk)

    def hello(request):
        if request.method == 'POST':
            form = DemoForm(request.POST, request.FILES)
            file = request.FILES.get('avatar')
            pprint([form, file, request.POST, request.FILES['avatar']])
            handle_uploaded_file(request.FILES['avatar'])
            # if form.is_valid():
                # pass
                # return HttpResponseRedirect('/thanks/')
        else:
            form = DemoForm(request.GET)
        
        args = request.POST if request.method=="POST" else request.GET
        context          = {"form": form}
        context['hello'] = 'Hello HTTP %s!' % request.method
        context['result'] = args.get('q', 'EMPTY')
        return render(request, 'hello.html', context)
        # return render_to_response('hello.html', context)

如果不能处理中文，请使用 utf8 编码：

    import sys  

    reload(sys)
    sys.setdefaultencoding('utf8')

模板文件如下，设置了两个表单，启用 CSRF 验证的情况下，模板文件中表单内要设置`{% csrf_token %}`标签。

    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>post & csrf</title>
    </head>
    <body>

        <form action="/hello" method="get">

            {% for field in form %}
            <div>
                <br>field: {{field}} 
                <br>field.label_tag: {{field.label_tag}}
                <br>field.value: {{field.value}} 

                <br>field.label: {{field.label}}
                <br>field.help_text: {{field.help_text}}
                <br>field.help_name: {{field.help_name}}
                <br>field.is_hidden: {{field.is_hidden}}
                <br>field.id_for_label: {{field.id_for_label}}
                <br>field.field: {{field.field}}

                <br>field.errors: {{field.errors}}
            </div>
            {% endfor %}

            <input type="text" name="q">
            <input type="submit" value="HTTP GET">
        </form>

        <form action="/hello" method="post">
            {% csrf_token %}
            <input type="text" name="q">
            <input type="submit" value="HTTP POST">
        </form>
     
        <p>{{ result }}</p>
        <p>{{ hello }}</p>

    </body>
    </html>


## ==⚡ session

Django完全支持也匿名会话，简单说就是使用跨网页之间可以进行通讯，比如显示用户名，用户是否已经发表评论。session框架让你存储和获取访问者的数据信息，这些信息保存在服务器上（默认是数据库中），以 cookies 的方式发送和获取一个包含 session ID的值，并不是用cookies传递数据本身。

启用session
编辑settings.py中的一些配置

MIDDLEWARE_CLASSES 确保其中包含以下内容

    'django.contrib.sessions.middleware.SessionMiddleware',

INSTALLED_APPS 是包含

    'django.contrib.sessions',

这些是默认启用的。如果你不用的话，也可以关掉这个以节省一点服务器的开销。

提示：您也可以配置使用比如 cache 来存储 session

在视图中使用 session

request.session 可以在视图中任何地方使用，它类似于python中的字典

session 默认有效时间为两周，可以在 settings.py 中修改默认值：参见这里

    # 创建或修改 session：
    request.session[key] = value
    # 获取 session：
    request.session.get(key,default=None)
    # 删除 session
    del request.session[key] # 不存在时报错
    session 例子
    比如写一个不让用户评论两次的应用：

    from django.http import HttpResponse
     
    def post_comment(request, new_comment):
        if request.session.get('has_commented', False):
            return HttpResponse("You've already commented.")
        c = comments.Comment(comment=new_comment)
        c.save()
        request.session['has_commented'] = True
        return HttpResponse('Thanks for your comment!')


一个简化的登陆认证：

    def login(request):
        m = Member.objects.get(username=request.POST['username'])
        if m.password == request.POST['password']:
            request.session['member_id'] = m.id
            return HttpResponse("You're logged in.")
        else:
            return HttpResponse("Your username and password didn't match.")
             
             
    def logout(request):
        try:
            del request.session['member_id']
        except KeyError:
            pass
        return HttpResponse("You're logged out.")


当登陆时验证用户名和密码，并保存用户id在 session 中，这样就可以在视图中用 request.session['member_id']来检查用户是否登陆，当退出的时候，删除掉它。

## ==⚡ I18N 国际化

Django的国际化是默认开启的，如果您不需要国际化支持，那么您可以在您的设置文件中设置 USE_I18N = False，那么Django会进行一些优化，不加载国际化支持机制。

NOTE: 18表示Internationalization这个单词首字母I和结尾字母N之间的字母有18个。I18N就是Internationalization（国际化）的意思。

Django 完全支持文本翻译，日期时间数字格式和时区。

本质上讲，Django做了两件事：

它允许开发者指定要翻译的字符串

Django根据特定的访问者的偏好设置 进行调用相应的翻译文本。


一，开启国际化的支持，需要在settings.py文件中设置

    MIDDLEWARE_CLASSES = (
        ...
        'django.middleware.locale.LocaleMiddleware',
    )
     
     
    LANGUAGE_CODE = 'en'
    TIME_ZONE = 'UTC'
    USE_I18N = True
    USE_L10N = True
    USE_TZ = True
     
    LANGUAGES = (
        ('en', ('English')),
        ('zh-cn', ('中文简体')),
        ('zh-tw', ('中文繁體')),
    )
     
    #翻译文件所在目录，需要手工创建
    LOCALE_PATHS = (
        os.path.join(BASE_DIR, 'locale'),
    )
     
    TEMPLATE_CONTEXT_PROCESSORS = (
        ...
        "django.core.context_processors.i18n",
    )

注意：Django 1.9 及以上版本中，语言的代码发生变化(详情链接：github, django ticket，如下

    LANGUAGES = (
        ('en', ('English')),
        ('zh-hans', ('中文简体')),
        ('zh-hant', ('中文繁體')),
    )


二，生成需要翻译的文件（Django 1.8及以下的版本）：

    python manage.py makemessages -l zh-cn
    python manage.py makemessages -l zh-tw

Django 1.9 及以上版本要改成

    python manage.py makemessages -l zh_hans
    python manage.py makemessages -l zh_hant


三，手工翻译 locale 中的 django.po
 
    # ...
     
    #: .\tutorial\models.py:23
    msgid "created at"
    msgstr "创建于"
     
    #: .\tutorial\models.py:24
    msgid "updated at"
    msgstr "更新于" 

四，编译一下，这样翻译才会生效

    python manage.py compilemessages

如果翻译不生效，请检查你的语言包的文件夹是不是有 中划线，请用下划线代替它。

## ==⚡ Models
[Models and databases](https://docs.djangoproject.com/en/dev/topics/db/)
[QuerySet API reference](https://docs.djangoproject.com/en/dev/ref/models/querysets/)

Django 对各种数据库提供了很好的支持，为它们提供了统一的调用API，包括：PostgreSQL、MySQL、SQLite、Oracle。安装 mysql 驱动，可以执行以下命令安装：

    sudo pip install mysqlclient

在 `settings.py` 文件中找到 DATABASES 配置项，将其修改为 MySQL 配置：

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',  # mysql.connector.django
            'NAME': 'testdb',
            'USER': 'root',
            'PASSWORD': 'abcd',
            'HOST':'localhost',
            'PORT':'3306',
        }
    }

如果使用中文字符，需要在配置文件头部添加 `# -*- coding: UTF-8 -*-`。Django 会根据这设置，与 MySQL 中相应的数据库和用户连接起来。

Django 规定要使用模型就必须要创建一个 app 目录结构，使用以下命令创建一个 app 目录结构：

    django-admin startapp TestModel

目录结构如下：

    +--demo
       +-- TestModel
           +-- __init__.py
           +-- admin.py  注册文件，可以注册到 Django Admin 管理页面
           +-- apps.py
           +-- models.py
           +-- tests.py
           +-- views.py

`models.py` 就是模型文件，先定义一个模型类：

    from django.db import models
     
    class Test(models.Model):
        name = models.CharField(max_length=20)
        value = models.IntegerField()

类名 Test 就代表数据库表名，程序名 TestModel 则作为表名前缀，最终表名为 `TestModel_test`。类继承了 `models.Model` 基础类，类成员代表数据表中的字段，数据类型则由基础类提供的各种方法定义，max_length 参数限定长度。Django 会自动添加一个 id 作为主键，也可以自行定义一个 AutoField 做为主键。

    id = models.AutoField(primary_key=True)

    first_name = models.CharField(max_length=30)
    first_name = models.CharField("comments for first_name", max_length=30)

接下来在 settings.py 将其添加到 INSTALLED_APPS：

    INSTALLED_APPS = (
        'TestModel',
    )

有了新的模型就可以通过 `makemigrations` 生成数据库迁移脚本，然后执行数据库迁移命令更新数据表：

    python manage.py makemigrations TestModel
    python manage.py migrate TestModel

看到几行 "Creating table…" 的字样，数据表大概就创建好了。

然后就可以通过模型类提供的模型管理器 objects 来进行数据操作。例如 `all()` 获得所有数据行，相当于SQL中的`SELECT * FROM`。`filter(id=1)` 过滤函数相当 SQL 的 `where id=1`，如果是查询也可以通过 `get(id=1)` 来设置。

增加以下几个路由：

    path('add/', view.add),
    path('list/', view.list),
    path('update/', view.update),
    path('delete/', view.delete),

一并更新 view.py 视图，添加路由设置的相应方法，数据的 CURD 操作对应以下方法示例：

    from django.http import HttpResponse
    from TestModel.models import Test
    from pprint import pprint
    from django.db.models import Count

    def hello(request):
        return HttpResponse("Hello world!")

    def add(request):
        row = Test(name='Jane', value=18)
        row.save()
        return HttpResponse("<p>数据添加成功！</p>")

    def update(request):
        row = Test.objects.get(id=1)
        row.name = 'Jean'
        row.save()

        # Test.objects.filter(id=1).update(name='Jean')
        # Test.objects.all().update(name='Jean')
        
        return HttpResponse("<p>修改成功</p>")

    def delete(request):
        row = Test.objects.get(id=1)
        row.delete()
        
        # Test.objects.filter(id=1).delete()
        # Test.objects.all().delete()
        
        return HttpResponse("<p>删除成功</p>")

    def list(request):
        response = ""

        # list = Test.objects.all()
        # querySet = Test.objects.filter(id=1) 
        # row = Test.objects.get(id=1) 
        
        # 限制返回的数据 相当于 SQL 中的 OFFSET 0 LIMIT 2;
        # querySet = Test.objects.order_by('name')[0:2]
        # querySet = Test.objects.order_by("id")
        
        list = Test.objects.exclude(name="abc").order_by("-id", "name")

        count = Test.objects.all().values('id').aggregate(Count('id'))
        sql = Test.objects.all().values('id').annotate(Count('id')).query.__str__()
        # pprint(count)

        for var in list:
            response += "<li>id: %i name: %s</li>" % (var.id, var.name)
        return HttpResponse("<h1>Count:%d</h1><ul>%s</ul>%s" % (count['id__count'], response, sql ))

在 QuerySet 的聚合查询中经常以 `aggregate()` 用于整个QuerySet对象的汇总值。而 `annotate()`函数可以为 QuerySet 中的每个对象生成一个独立的摘要，输出的结果仍然是一个 QuerySet 对象，能够调用 `filter()`、`order_by()`甚至`annotate()`。


    models.AutoField(`**options`)　　　　#int；在Django代码内是自增
    models.BooleanField(`**options`)　　　　#boolean或bit
    models.CharField(max_length=None[, `**options`])　　　　#varchar
    models.CommaSeparatedIntegerField(max_length=None[, `**options`])　　　　#varchar
    models.DateField([auto_now=False, auto_now_add=False, `**options`])　　　　#date  #auto_now
    models.DateTimeField([auto_now=False, auto_now_add=False, `**options`])　　　　#datetime
    models.DecimalField(max_digits=None, decimal_places=None[, `**options`])　　　　#decimal
    models.EmailField([max_length=75, `**options`])　　　　#varchar
    models.FileField(upload_to=None[, max_length=100, `**options`])　　　　#varchar #upload_to 指定保存目录可带格式，
    models.FilePathField(path=None[, match=None, recursive=False, max_length=100, `**options`])　#varchar
    models.FloatField([`**options`])　　　　#real
    models.ForeignKey(othermodel[, `**options`])　　　　#外键，关联其它模型，创建关联索引
    models.ImageField(upload_to=None[, height_field=None, width_field=None, max_length=100, `**options`])
    models.IntegerField([`**options`])　　　　#int
    models.IPAddressField([`**options`])　　　　#varchar
    models.ManyToManyField(othermodel[, `**options`])　　　　#多对多，关联其它模型，创建关联表
    models.NullBooleanField([`**options`])　　　　#bit字段上可以设置上null值
    models.OneToOneField(othermodel[, parent_link=False, `**options`])　　　　#一对一，字段关联表属性
    models.PositiveIntegerField([`**options`])　　　　#int 正整数
    models.PositiveSmallIntegerField([`**options`])　　　　#smallint 正整数
    models.SlugField([max_length=50, `**options`])　　　　#varchar，标签，内含索引
    models.SmallIntegerField([`**options`])　　　　#smallint
    models.TextField([`**options`])　　　　#text
    models.TimeField([auto_now=False, auto_now_add=False, `**options`])　　　　#time
    models.URLField([verify_exists=True, max_length=200, `**options`])　　　　#varchar
    models.XMLField(schema_path=None[, `**options`])　　　　#text


# =🚩 Django Admin 定制
[The Django admin site](https://docs.djangoproject.com/en/2.2/ref/contrib/admin/)
[自定义 Django Admin](http://www.liujiangblog.com/course/django/93)
[Admin管理后台](http://www.liujiangblog.com/course/django/157)
[Models and databases](https://docs.djangoproject.com/en/dev/topics/db/)
[QuerySet API reference](https://docs.djangoproject.com/en/dev/ref/models/querysets/)

在 INSTALLED_APPS 设置了 django.contrib.admin 后，Django 将自动在每个应用目录中搜索 `admin.py` 模块并导入它。也就是说，每个 app 下的 admin.py 可以未 Django Admin 提供定制功能。

`class apps.AdminConfig` 当 Django 启动时自动调用其 autodiscover() 方法
`class apps.SimpleAdminConfig` 和上面的类似，但不调用 autodiscover()
`autodiscover()[source]` 自动搜索 admin 模块的方法。在使用自定义的site时，必须禁用这个方法，你应该在 INSTALLED_APPS 设置中用 django.contrib.admin.apps.SimpleAdminConfig 替代 django.contrib.admin。

数据模型可以注册到 Django Admin 使用。比如，前面在 TestModel 中已经创建了模型 Test，修改 `admin.py` 就可以让对应的数据显示出在管理页面，并生成一个 TESTMODEL 栏目，也一样提供了 Add、Change 两个操作视图:

    from django.contrib import admin
    from TestModel.models import Test
     
    # Register your models here.
    admin.site.register(Test)

后面就介绍 ModelAdmin 装饰器类的应用。

## ==⚡ 分栏及列表美化 list_display

可以自定义管理页面的表单，比如管理页面中的 Add 页面只显示 name 和 email 部分，只需要对应修改 `admin.py`:

    from django.contrib import admin
    from TestModel.models import Test
     
    # Register your models here.
    class ContactAdmin(admin.ModelAdmin):
        # fields = ('name', 'email')
        fieldsets = (
            ['Main',{
                'fields':('name','email'),
            }],
            ['Advance',{
                'classes': ('collapse',), # CSS
                'fields': ('value',),
            }]
        )
     
    admin.site.register(Test, ContactAdmin)

注册代码定义了一个 ModelAdmin 装饰器类 ContactAdmin 用以说明管理页面的显示格式，`fields` 属性定义了要显示的字段，`fieldsets` 用来将表单分栏。管理页面栏目分为了 `Main` 和 `Advance` 两部分展示，classes 说明它所在的部分的 CSS 格式。Advance 部分旁边有一个 Show 按钮，用于展开，展开后可点击 Hide 将其隐藏。由于该类对应的是 Test 数据模型，我们在注册的时候，需要将它们一起注册。

现在定义复杂一点的模型，增加一个 Tag 模型类，设置 Test 作为外键。同一个模型文件定义的 Test、Tag 模型类会在管理页面统一在 TESTMODEL展示。一个 Test 记录可以对应多个 Tag，但每个 Tag 必须在 Test 有一条记录对应，否则不能创建 Tag 记录。这种关系就是数据表的外键约束，因此在删除 Test 记录时，就涉及到 Tag 表的处理，这里使用了 `models.CASCADE` 即级联删除操作，在删除 Test 记录时，通过外键关联的 Tag 记录也会被删除：

    from django.db import models

    # Create your models here.
    class Test(models.Model):
        name = models.CharField(max_length=20)
        email = models.EmailField(default="")
        value = models.IntegerField()
        timestamp = models.DateTimeField(auto_now=True)
        def __str__(self):
            return "%d - %s - %s - %i" %(self.id, self.name, self.email, self.value)

    class Tag(models.Model):
        contact = models.ForeignKey(Test, on_delete=models.CASCADE)
        name    = models.CharField(default="",max_length=50)
        def __str__(self):
            return "%d - %s" %(self.id, self.name)

`on_delete` 可以配置的选项如下：

CASCADE：此值设置，是级联删除。
PROTECT：此值设置，是会报完整性错误。
SET_NULL：此值设置，会把外键设置为 null，前提是允许为 null。
SET_DEFAULT：此值设置，会把设置为外键的默认值。
SET()：此值设置，会调用外面的值，可以是一个函数。一般情况下使用 CASCADE 就可以了。

修改数据模型后记得对数据库进行迁移操作：

    python manage.py makemigrations TestModel
    python manage.py migrate TestModel

在 Django 的模型类中定义了 `__unicode__()` 方法来美化页面的列表内容，如果 Python 3 就用 `__str__(self)`，使用这个美化方法可以定制管理页面的列表显示，如果不定义这个方法，列表就只能显示出类似 `Test object (5)` 这样的条目，显得不直观：

    def __unicode__(self):
        return self.name

    def __str__(self):
        return 'Name:' + self.name

当然还可以通过 ContactAdmin 设置 `list_display` 来替代美化方法，这样就可以在列表中显示指定字段：

    list_display = ("id", "name", "email")


## ==⚡ 定制 admin 整体界面

在每一个项目的 admin 页面顶端都显示 Django administration，它仅仅是个占位文本。利用Django的模板系统，我们可以快速修改它。

在 manage.py 文件同级下创建一个templates目录。然后，打开设置文件 settings.py，在 TEMPLATES 条目中添加一个 DIRS 选项：

    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [os.path.join(BASE_DIR, 'templates')],  # 要有这一行，如果已经存在请保持原样
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        },
    ]

DIRS是一个文件系统目录的列表，是模板的搜索路径。当加载Django模板时，会在DIRS中进行查找。

再在 templates 目录中创建一个 admin 子目录，将 Django 源码的 django/contrib/admin/templates/admin/base_site.html 模板文件拷贝到该目录内。 如果你无法找到 Django 源代码文件的存放位置，可以使用下面的命令：

    $ python -c "import django; print(django.__path__)"

编辑 base_site.html 文件，用你喜欢的内容替换掉模板内容：

    {% extends "admin/base.html" %}

    {% block title %}{{ title }} | {{ site_title|default:_('Django site admin') }}{% endblock %}

    {% block branding %}
    <h1 id="site-name"><a href="{% url 'admin:index' %}">站点管理界面</a></h1>
    {% endblock %}

    {% block nav-global %}{% endblock %}

在这里，我们使用的是硬编码，强行改名为站点管理界面"。在实际的项目中，你可以使用 django.contrib.admin.AdminSite.site_header 属性，方便的对这个页面 title 进行自定义。

提示：所有Django 默认的 admin 模板都可以被重写，类似刚才重写 base_site.html 模板的方法一样，从源代码目录将HTML文件拷贝至你自定义的目录内，然后修改文件。

默认情况下，admin 首页显示所有 INSTALLED_APPS 内并在 admin 应用中注册过的 app，以字母顺序进行排序。

要定制 admin 首页，你需要重写 admin/index.html 模板，就像前面修改 base_site.html 模板的方法一样，从源码目录拷贝到你指定的目录内。编辑该文件，你会看到文件内使用了一个 app_list 模板变量。该变量包含了所有已经安装的 Django 应用。你可以硬编码链接到指定对象的admin页面，使用任何你认为好的方法，用于替代这个app_list。

Django 的 admin站点是自动生成的、高度可定制的，它是 Django 相较其它 Web 框架独有的内容，广受欢迎。还有第三方美化版 xadmin，请一定不要忽略它，它值得拥有！


## ==⚡ actions 命令列表

ModelAdmin.actions 设置大批量操作 Action 命令列表。

`actions_on_top` 是否在列表上方显示 actions 的下拉框，默认为True
`actions_on_bottom` 是否在列表下方显示actions的下拉框，默认为False。
`actions_selection_counter` 是否在 actions下拉框右侧显示选中列表对象的数量，默认为True，有助于提供理解 Action 操作影响的数据。

    actions_on_top = True
    actions_on_bottom = True
    actions_selection_counter = True

下面实现一个批量命令 action 用来自增 value 字段，命令函数接受三个参数，ModelAdmin、HttpRequest 和 QuerySet 即被选择的对象。

在应用中的 admin.py 文件中定义一个函数，可以为命令设置一个简单易懂的简短描述 short_description 用于代替生硬的函数名：

    def make_published(modeladmin, request, queryset):
        queryset.update(value=1)
    # 注意缩进，下面这句不在函数体内。
    make_published.short_description = "Increase selected value"

再将自定义 action 添加到对应的 ModelAdmin 中：

    actions = [make_published]

可以将它作为 ModelAdmin 的方法来使用，这样做的好处是可以通过 self 访问类实列本身：

    class ContactAdmin(admin.ModelAdmin):
        actions = ['make_published']  # 请注意这里改成字符串引用了
        # 第一个参数变为 self
        def make_published(self, request, queryset):
            rows_updated = 0
            for row in queryset:
                row.value += 1
                rows_updated += 1
                row.save()
            if rows_updated == 1:
                message_bit = "1 row was"
            else:
                message_bit = "%s rows were" % rows_updated
            self.message_user(request, "%s increased." % message_bit)
        # 注意缩进，下面这句不在函数体内。
        make_published.short_description = "Increase selected value"

注意：作为例子，可以简单地使用 `queryset.update(status='p')` 方法批量执行更新操作。但在多数情况下，你要自己遍历 queryset 的每个元素，并编写具体的操作。

如果你能够预知在自定义的操作中可能产生的错误，请处理该错误，并通过 django.contrib.admin.ModelAdmin.message_user() 以友好的方式给予用户提示信息。

这部分定制需要熟练使用 QuerySet，参考文档 [Models and databases] 和 [QuerySet API reference]。


⚡ inlines

这里 Test 是 Tag 两个模型通过外键产生了关联，但是在默认的页面显示中，将两者是分离开进行编辑的，无法体现出两者的从属关系。Django 提供了内联显示 `inlines` 这个 ModelAdmin 配置属性，让 Tag 附加在 Test 的编辑页面上显示。

修改 `admini.py` 如下，定义一个 TagInline 类并通过 inlines 属性配置到 ContactAdmin：

    class TagInline(admin.TabularInline):
        model = Tag

    class ContactAdmin(admin.ModelAdmin):
        inlines = [TagInline]

⚡ search_fields

搜索功能在管理大量记录时非常有，可以使用 search_fields 为该列表页增加搜索栏：

    search_fields = ('name',)

被搜索的字段可以是CharField或者TextField文本类型，也可以通过双下划线进行ForeignKey或者ManyToManyField的查询，格式为search_fields = ['foreign_key__related_fieldname'].

例如：如果作者是博客的ForeignKey字段，下面的方式将通过作者的email地址来查询对应的博客，也就是email地址是查询值的作者所写的所有博客。

    search_fields = ['user__email']

当你在搜索框里输入一些文本的时候，Django会将文本分割成一个一个的关键字，并返回所有包含这些关键字的对象，必须注意的是，每个关键词至少得是search_fields其中之一。例如，如果 search_fields是['first_name', 'last_name']，当用户输入John lennon时（注意中间的空格），Django将执行等同于下面的SQL语法WHERE子句：

    WHERE (first_name ILIKE '%john%' OR last_name ILIKE '%john%') AND (first_name ILIKE '%lennon%' OR last_name ILIKE '%lennon%')

如果要执行更加严格的匹配或搜索，可以使用一些元字符，例如“^”。类似正则，它代表从开头匹配。例如，如果search_fields是['^first_name','^last_name'],当用户输入“John lennon”时（注意中间的空格），Django将执行等同于下面的SQL语法WHERE子句：

    WHERE (first_name ILIKE 'john%' OR last_name ILIKE 'john%') AND (first_name ILIKE 'lennon%' OR last_name ILIKE 'lennon%')

也可以使用“=”，来进行区分大小写的并绝对相等的严格匹配。例如，如果search_fields是['=first_name','=last_name'],当用户输入“John lennon”时（注意中间的空格），Django将执行等同于下面的SQL语法WHERE子句：

    WHERE (first_name ILIKE 'john' OR last_name ILIKE 'john') AND (first_name ILIKE 'lennon' OR last_name ILIKE 'lennon')

⚡ list_filter

过滤器列表，提供了列表过滤选项卡，就像提供了 SQL 的 where 条件过滤。但该字段必须是BooleanField、CharField、DateField、DateTimeField、IntegerField、ForeignKey或者ManyToManyField中的一种。

    list_filter = ("name", "email")

你可以利用双下划线进行跨表关联，如下例：

    list_filter = ('tag__name',)

也可以是一个元组。它的第一个元素是个字段名，第二个元素则是继承了 django.contrib.admin.FieldListFilter 的类：

    list_filter = (
        ('is_staff', admin.BooleanFieldListFilter),
    )

你可以使用 RelatedOnlyFieldListFilter 限制关联的对象。假设 author 是关联 User 模型的 ForeignKey，下面的用法将只选择那些出过书的 user 而不是所有的 user：

    list_filter = ( 
        ('author', admin.RelatedOnlyFieldListFilter),
    )

还可深度定制，给它设置一个继承 django.contrib.admin.SimpleListFilter 的类。你要给这个类提供 title 和 parameter_name 的值，并重写 lookups 和 queryset 方法。为了方便，我们通常会将 HttpRequest 对象传递给 lookups 和 queryset 方法。


⚡ date_hierarchy

根据指定的 Date 和 DateTime 字段进行搜索，为页面创建一个日期过滤面板：

    date_hierarchy = 'timestamp'

⚡ list_max_show_all

设置一个数值，当列表元素总数小于这个值的时候，将显示一个“show all”链接，点击后就能看到一个展示了所有元素的页面，该值默认为 200。

    list_max_show_all = 10

⚡ list_per_page

设置每页显示多少个元素。Django自动帮你分页。默认为100。

    list_per_page = 5

⚡ list_editable

设置在列表中可以编辑的字段

    list_editable = ('name',)

⚡ list_display_links

设置编辑跳转链接的字段

    list_display_links = ('name',)

⚡ list_select_related

如果设置了 list_select_related 属性，Django 将会使用 `select_related()` 方法查询数据，这可能会帮助你减少一些数据库访问。

属性的值可以是布尔值、元组或列表，默认为False。当值为True时，将始终调用`select_related()`方法；如果值为False，Django 将查看 list_display 属性，只对 ForeignKey 字段调用 `select_related()` 方法。

如果你需要更细粒度的控制，请赋值一个元组（或列表）。空元组将阻止select_related()方法，否则元组会被当做参数传递给select_related()方法。例如：

    list_select_related = ('author', 'category')

这将会调用 `select_related('author', 'category')`，要是动态查询自行实现 `get_list_select_related()`。


⚡ ordering

设置排序的方式，属性的值必须为一个元组或列表，格式和模型的 ordering 参数一样。如果不设置这个属性，Django 将按默认方式进行排序。如果你想进行动态排序，请自己实现 `get_ordering()`方法。

⚡ paginator

指定用于分页的分页器。默认情况下，分页器用的是 Django 自带的 django.core.paginator.Paginator。如果自定义分页器的构造函数接口和 django.core.paginator.Paginator 的不一样，那你还需要自己实现 ModelAdmin.get_paginator() 方法。

⚡ prepopulated_fields

设置预填充字段，即为字段提供编辑时的候选项。不接收 DateTimeField、ForeignKey 和 ManyToManyField 类型的字段。

    prepopulated_fields = {"name": ("title",)}

⚡ preserve_filters

默认情况下，当你对目标进行创建、编辑或删除操作后，页面会依然保持原来的过滤状态。将preserve_filters设为False后，则会返回未过滤状态。

⚡ radio_fields

默认情况下，Django 使用 select 标签显示 ForeignKey 或 choices 集合。如果将这种字段设置为 radio_fields，则会以radio_box标签的形式展示。下面的例子假设 contact 是一个ForeignKey字段：

    # 垂直布局。（肯定也有水平布局HORIZONTAL的啦）
    radio_fields = {"contact": admin.VERTICAL}

注意：不要将ForeignKey或choices集合之外的字段类型设置给这个属性。

⚡ raw_id_fields

这个属性会改变默认的ForeignKey和ManyToManyField的展示方式，它会变成一个输入框，用于输入关联对象的主键id。对于ManyToManyField，id以逗号分隔。并且再输入框右侧提供一个放大镜的图标，你可以点击进入选择界面。例如：

    raw_id_fields = ("group",)

⚡ readonly_fields

该属性包含的字段在页面内将展示为不可编辑状态。它还可以展示模型或者ModelAdmin本身的方法的返回值，类似ModelAdmin.list_display的行为。

参考下面的例子：

    from django.contrib import admin
    from django.utils.html import format_html_join
    from django.utils.safestring import mark_safe

    class PersonAdmin(admin.ModelAdmin):
        readonly_fields = ('address_report',)

        def address_report(self, instance):
            # assuming get_full_address() returns a list of strings
            # for each line of the address and you want to separate each
            # line by a linebreak
            return format_html_join(
                mark_safe('<br/>'),
                '{}',
                ((line,) for line in instance.get_full_address()),
            ) or mark_safe("<span class='errors'>I can't determine this address.</span>")

        # short_description functions like a model field's verbose_name
        address_report.short_description = "Address"

⚡ save_as

默认情况下，它的值为False。如果设置为True，那么右下角的“Save and add another”按钮将被替换成“Save as new”，意思也变成保存为一个新的对象。

⚡ save_as_continue

默认值为True, 在保存新对象后跳转到该对象的修改页面。但是如果这时save_as_continue=False，则会跳转到元素列表页面。

⚡ save_on_top

默认为False。 设为True时，页面的顶部会提供同样的一系列保存按钮。

⚡ show_full_result_count

用于设置是否显示一个过滤后的对象总数的提示信息，例如“99 results (103 total)”。如果它被设置为False，那么显示的将是“ 99 results (Show all)”。 默认情况下，它的值为True，这将会对整个表进行一个count操作，在表很大的时候，可能会耗费一定的时间和资源。

⚡ view_on_site

这个属性可以控制是否在 admin 页面显示“View site”链接。这个链接主要用于跳转到你指定的URL页面。

属性的值可以是布尔值或某个调用。如果是True（默认值），对象的 `get_absolute_url()` 方法将被调用并生成rul。

如果你的模型有一个 `get_absolute_url()` 方法，但你不想显示“View site”链接，你只需要设置为 view_on_site=False。

        view_on_site = False

如果属性的值是一个调用，它将接收一个模型实例作为参数：

    from django.contrib import admin
    from django.urls import reverse

    class TestAdmin(admin.ModelAdmin):
        def view_on_site(self, obj):
            url = reverse('person-detail', kwargs={'slug': obj.slug})
            return 'https://example.com' + url



## ==⚡ ModelAdmin 方法参考列表

    ModelAdmin.add_view(request, form_url='', extra_context=None)[source]
    ModelAdmin.change_view(request, object_id, form_url='', extra_context=None)[source]
    ModelAdmin.changelist_view(request, extra_context=None)[source]
    ModelAdmin.delete_model(request, obj)[source]
    ModelAdmin.delete_queryset(request, queryset)[source]
    ModelAdmin.delete_view(request, object_id, extra_context=None)[source]
    ModelAdmin.formfield_for_choice_field(db_field, request, `**kwargs`)
    ModelAdmin.formfield_for_foreignkey(db_field, request, `**kwargs`)
    ModelAdmin.formfield_for_manytomany(db_field, request, `**kwargs`)
    ModelAdmin.get_autocomplete_fields(request)
    ModelAdmin.get_changeform_initial_data(request)[source]
    ModelAdmin.get_changelist(request, `**kwargs`)[source]
    ModelAdmin.get_changelist_form(request, `**kwargs`)[source]
    ModelAdmin.get_changelist_formset(request, `**kwargs`)[source]
    ModelAdmin.get_deleted_objects(objs, request)[source]
    ModelAdmin.get_exclude(request, obj=None)
    ModelAdmin.get_fields(request, obj=None)
    ModelAdmin.get_fieldsets(request, obj=None)
    ModelAdmin.get_form(request, obj=None, `**kwargs`)[source]
    ModelAdmin.get_formsets_with_inlines(request, obj=None)[source]
    ModelAdmin.get_inline_instances(request, obj=None)[source]
    ModelAdmin.get_list_display(request)[source]
    ModelAdmin.get_list_display_links(request, list_display)[source]
    ModelAdmin.get_list_filter(request)[source]
    ModelAdmin.get_list_select_related(request)[source]
    ModelAdmin.get_ordering(request)
    ModelAdmin.get_paginator(request, queryset, per_page, orphans=0, allow_empty_first_page=True)[source]
    ModelAdmin.get_prepopulated_fields(request, obj=None)
    ModelAdmin.get_queryset(request)
    ModelAdmin.get_readonly_fields(request, obj=None)
    ModelAdmin.get_search_fields(request)[source]
    ModelAdmin.get_search_results(request, queryset, search_term)[source]
    ModelAdmin.get_sortable_by(request)
    ModelAdmin.get_urls()[source]
    ModelAdmin.has_add_permission(request)
    ModelAdmin.has_change_permission(request, obj=None)
    ModelAdmin.has_delete_permission(request, obj=None)
    ModelAdmin.has_module_permission(request)
    ModelAdmin.has_view_permission(request, obj=None)
    ModelAdmin.history_view(request, object_id, extra_context=None)[source]
    ModelAdmin.lookup_allowed(lookup, value)
    ModelAdmin.message_user(request, message, level=messages.INFO, extra_tags='', fail_silently=False)[source]
    ModelAdmin.response_add(request, obj, post_url_continue=None)[source]
    ModelAdmin.response_change(request, obj)[source]
    ModelAdmin.response_delete(request, obj_display, obj_id)[source]
    ModelAdmin.save_formset(request, form, formset, change)[source]
    ModelAdmin.save_related(request, form, formsets, change)[source]


## ==⚡ Nginx uwsgi 配置
[Python with UWSGI](https://www.runoob.com/python3/python-uwsgi.html)

使用 python manage.py runserver 来运行服务器只适用测试环境中使用。正式发布的服务，我们需要一个可以稳定而持续的服务器，比如 apache, Nginx, lighttpd等，以 Nginx 为例。


Centos 下安装基础开发包步骤如下：

    yum groupinstall "Development tools"
    yum install zlib-devel bzip2-devel pcre-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel

CentOS 自带 Python 2.4.3，但我们可以再安装 Python2.7.5：

    cd ~
    wget http://python.org/ftp/python/2.7.5/Python-2.7.5.tar.bz2
    tar xvf Python-2.7.5.tar.bz2
    cd Python-2.7.5
    ./configure --prefix=/usr/local
    make && make altinstall

安装 Python 包管理工具

安装 easy_install 步骤:

    cd ~
    wget https://pypi.python.org/packages/source/d/distribute/distribute-0.6.49.tar.gz
    tar xf distribute-0.6.49.tar.gz
    cd distribute-0.6.49
    python2.7 setup.py install
    easy_install --version

也可是使用 pip 包管理: https://pypi.python.org/pypi/pip

安装 pip 的好处是可以用 pip list、pip uninstall 管理 Python 包，easy_install 没有这个功能，只有 uninstall。


安装 uwsgi

uwsgi:https://pypi.python.org/pypi/uWSGI
uwsgi 参数详解：http://uwsgi-docs.readthedocs.org/en/latest/Options.html


    pip install uwsgi
    uwsgi --version    # 查看 uwsgi 版本

测试 uwsgi 是否正常：

新建 test.py 文件，内容如下：

    def application(env, start_response):
        start_response('200 OK', [('Content-Type','text/html')])
        return "Hello World"

然后在终端运行：

    uwsgi --http :8001 --wsgi-file test.py

在浏览器内输入：http://127.0.0.1:8001，查看是否有"Hello World"输出，若没有输出，请检查你的安装过程。

安装 Django

    pip install django

测试 django 是否正常，运行：

    django-admin.py startproject demosite
    cd demosite
    python2.7 manage.py runserver 0.0.0.0:8002

在浏览器内输入：http://127.0.0.1:8002，检查django是否运行正常。

安装 Nginx

    cd ~
    wget http://nginx.org/download/nginx-1.5.6.tar.gz
    tar xf nginx-1.5.6.tar.gz
    cd nginx-1.5.6
    ./configure --prefix=/usr/local/nginx-1.5.6 \
    --with-http_stub_status_module \
    --with-http_gzip_static_module
    make && make install

uwsgi 配置

uwsgi支持ini、xml等多种配置方式，本文以 ini 为例， 在/etc/目录下新建uwsgi9090.ini，添加如下配置：

    [uwsgi]
    socket = 127.0.0.1:9090
    master = true         //主进程
    vhost = true          //多站模式
    no-site = true        //多站模式时不设置入口模块和文件
    workers = 2           //子进程数
    reload-mercy = 10     
    vacuum = true         //退出、重启时清理文件
    max-requests = 1000   
    limit-as = 512
    buffer-size = 30000
    pidfile = /var/run/uwsgi9090.pid    //pid文件，用于下面的脚本启动、停止该进程
    daemonize = /website/uwsgi9090.log

Nginx 配置

找到nginx的安装目录（如：/usr/local/nginx/），打开conf/nginx.conf文件，修改server配置：

    server {
        listen       80;
        server_name  localhost;
        
        location / {            
            include  uwsgi_params;
            uwsgi_pass  127.0.0.1:9090;              //必须和uwsgi中的设置一致
            uwsgi_param UWSGI_SCRIPT demosite.wsgi;  //入口文件，即wsgi.py相对于项目根目录的位置，“.”相当于一层目录
            uwsgi_param UWSGI_CHDIR /demosite;       //项目根目录
            index  index.html index.htm;
            client_max_body_size 35m;
        }
    }

设置完成后，在终端运行：

    uwsgi --ini /etc/uwsgi9090.ini &
    /usr/local/nginx/sbin/nginx

在浏览器输入：http://127.0.0.1，你就可以看到 django 的 "It work" 了。




# =🚩 keeprunning.py

需求：现有爬虫程序（名为CNSubAllInd），需要使其一直保持在后台运行（如果执行完毕，立即重新启动，继续执行），并记录其运行日志。

利用python的logging模块来记录日志，利用subprocess模块来和系统交互执行命令，检测到子程序结束运行之后，重新开启子程序。

keeprunning.py(CNSubAllInd就是需要保持在后台运行的程序)：

    # -*- coding: UTF-8 -*-
    #!DATE: 2018/10/9
    #!@Author: yingying
    #keeprunning.py
    import os
    import subprocess

    # logging
    # require python2.6.6 and later
    import logging
    from logging.handlers import RotatingFileHandler

    ## log settings: SHOULD BE CONFIGURED BY config
    LOG_PATH_FILE = "D:\workspace\PyCharmProject\CompanyInfoSpider\my_service_mgr.log"
    LOG_MODE = 'a'
    LOG_MAX_SIZE = 10 * 1024 * 1024  # 10M per file
    LOG_MAX_FILES = 10  # 10 Files: my_service_mgr.log.1, printmy_service_mgrlog.2, ...
    LOG_LEVEL = logging.DEBUG

    LOG_FORMAT = "%(asctime)s %(levelname)-10s[%(filename)s:%(lineno)d(%(funcName)s)] %(message)s"

    handler = RotatingFileHandler(LOG_PATH_FILE, LOG_MODE, LOG_MAX_SIZE, LOG_MAX_FILES)
    formatter = logging.Formatter(LOG_FORMAT)
    handler.setFormatter(formatter)

    Logger = logging.getLogger()
    Logger.setLevel(LOG_LEVEL)
    Logger.addHandler(handler)

    # color output
    #
    pid = os.getpid()


    def print_error(s):
        print '\033[31m[%d: ERROR] %s\033[31;m' % (pid, s)


    def print_info(s):
        print '\033[32m[%d: INFO] %s\033[32;m' % (pid, s)


    def print_warning(s):
        print '\033[33m[%d: WARNING] %s\033[33;m' % (pid, s)


    def start_child_proc(command, merged):
        try:
            if command is None:
                raise OSError, "Invalid command"

            child = None
            if merged is True:
                # merge stdout and stderr
                child = subprocess.Popen(command)
                # child = subprocess.Popen(command,
                #                          stderr=subprocess.STDOUT,  # 表示子进程的标准错误也输出到标准输出
                #                          stdout=subprocess.PIPE  # 表示需要创建一个新的管道
                #                          )
            else:
                # DO NOT merge stdout and stderr
                child = subprocess.Popen(command)
                # child = subprocess.Popen(command,
                #                          stderr=subprocess.PIPE,
                #                          stdout=subprocess.PIPE)
            return child
        except subprocess.CalledProcessError:
            pass  # handle errors in the called executable
        except OSError:
            raise OSError, "Failed to run command!"


    def run_forever(command):
        print_info("start child process with command: " + ' '.join(command))
        Logger.info("start child process with command: " + ' '.join(command))

        merged = False
        child = start_child_proc(command, merged)

        failover = 0

        while True:
            while child.poll() != None:
                failover = failover + 1
                print_warning("child process shutdown with return code: " + str(child.returncode))
                Logger.critical("child process shutdown with return code: " + str(child.returncode))

                print_warning("restart child process again, times=%d" % failover)
                Logger.info("restart child process again, times=%d" % failover)
                child = start_child_proc(command, merged)

            # read child process stdout and log it
            out, err = child.communicate()
            returncode = child.returncode
            if returncode != 0:
                for errorline in err.slitlines():
                    Logger.info(errorline)
            else:
                Logger.info("execute child process failed")

        Logger.exception("!!!should never run to this!!!")


    if __name__ == "__main__":
        run_forever(['scrapy', 'crawl', 'CNSubAllInd'])

windows中运行方式：在命令行中输入start pythonw keeprunning.py命令，之后便会打开pythonw窗口如下：

注意：这个窗口是关不掉的，因为有keeprunning在后台运行，一旦检测到爬虫程序结束了，就会重新打开一个窗口（也即重新开启程序）。想要关闭的话，只能在任务管理器中关闭pythonw.exe程序，便停止了监控，当前爬虫程序执行完毕之后便结束爬虫。




# =🚩 logging

logging 提供了一组便利的日志函数，它们分别是：`debug()`、 `info()`、 `warning()`、 `error()` 和 `critical()`。logging函数根据它们用来跟踪的事件的级别或严重程度来命名。

每个级别对应的数字值为 CRITICAL：50，ERROR：40，WARNING：30，INFO：20，DEBUG：10，NOTSET：0。

    import logging

    logging.debug('A Debug')
    logging.info('C Information')
    logging.warning('B Warning!')

Python 中日志的默认显示等级是 WARNING，DEBUG 和 INFO 级别的日志将不会得到显示，在 logging.basicConfig 中的 level 参数更改设置，filename 可以设置日志输出文件，写入模式 filemode 一般设置 append 就可以。

    logging.basicConfig(level=logging.DEBUG, filename='coder.log', filemode='a')


日志模块提供了四大组件 loggers、handlers、filters 和 formatters。 logger 是日志接口，真正处理输出的是处理器 handler，还可以使用过滤器 filter 和格式化 formatter 对要输出的日志内容做过滤和格式化等处理操作。

Logger 对象有3个工作要做：

1）向应用程序代码暴露几个方法，使应用程序可以在运行时记录日志消息；
2）基于日志严重等级（默认的过滤设施）或filter对象来决定要对哪些日志进行后续处理；
3）将日志消息传送给所有感兴趣的日志handlers。

`Logger.setLevel()`

内建等级中，级别最低的是 DEBUG，级别最高的是 CRITICAL。例如 setLevel(logging.INFO)，此时函数参数为INFO，只会处理INFO、WARNING、ERROR和CRITICAL级别的日志，而DEBUG级别的消息将会被忽略/丢弃。

`logging.getLogger()`

获取 Logger 对象，还有一种方式是通过 Logger 类的实例化方法创建一个实例。方法有一个可选参数 name 表示将要返回的日志器的名称标识，如果不提供该参数，则其值为'root'。若以相同的 name 调用 `getLogger()` 方法，总是返回同一个 logger 对象的引用。

Handler

Handler对象的作用是（基于日志消息的level）将消息分发到handler指定的位置（文件、网络、邮件等）。Logger对象可以通过addHandler()方法为自己添加0个或者更多个handler对象。比如，一个应用程序可能想要实现以下几个日志需求：

1）把所有日志都发送到一个日志文件中；
2）把所有严重级别大于等于error的日志发送到stdout（标准输出）；
3）把所有严重级别为critical的日志发送到一个email邮件地址。

这种场景就需要3个不同的handlers，每个handler复杂发送一个特定严重级别的日志到一个特定的位置。

一个handler中只有非常少数的方法是需要应用开发人员去关心的。对于使用内建handler对象的应用开发人员来说，似乎唯一相关的handler方法就是下面这几个配置方法 `Handler.setLevel()`、 `Handler.setFormatter()`、 `Handler.addFilter()`、 `Handler.removeFilter()`。

需要说明的是，应用程序代码不应该直接实例化和使用Handler实例。因为Handler是一个基类，它只定义了素有handlers都应该有的接口，同时提供了一些子类可以直接使用或覆盖的默认行为。


Formater

Formater对象用于配置日志信息的最终顺序、结构和内容。与logging.Handler基类不同的是，应用代码可以直接实例化Formatter类。另外，如果你的应用程序需要一些特殊的处理行为，也可以实现一个Formatter的子类来完成。 

Formatter类的构造方法定义如下：

    logging.Formatter.__init__(fmt=None, datefmt=None, style='%')

该构造方法接收3个可选参数：

fmt：指定消息格式化字符串，如果不指定该参数则默认使用message的原始值
datefmt：指定日期格式字符串，如果不指定该参数则默认使用"%Y-%m-%d %H:%M:%S"
style：Python 3.2新增的参数，可取值为 '%', '{'和 '$'，如果不指定该参数则默认使用'%'


Filter

Filter可以被Handler和Logger用来做比level更细粒度的、更复杂的过滤功能。Filter是一个过滤器基类，它只允许某个logger层级下的日志事件通过过滤。该类定义如下：

    class logging.Filter(name='')
        filter(record)

比如，一个filter实例化时传递的name参数值为'A.B'，那么该filter实例将只允许名称为类似如下规则的loggers产生的日志记录通过过滤：'A.B'，'A.B,C'，'A.B.C.D'，'A.B.D'，而名称为'A.BB', 'B.A.B'的loggers产生的日志则会被过滤掉。如果name的值为空字符串，则允许所有的日志事件通过过滤。

filter方法用于具体控制传递的record记录是否能通过过滤，如果该方法返回值为0表示不能通过过滤，返回值为非0表示可以通过过滤。

说明：

如果有需要，也可以在filter(record)方法内部改变该record，比如添加、删除或修改一些属性。
我们还可以通过filter做一些统计工作，比如可以计算下被一个特殊的logger或handler所处理的record数量等。


    import os
    import logging
    import uuid
    from logging import Handler, FileHandler, StreamHandler


    class PathFileHandler(FileHandler):
        def __init__(self, path, filename, mode='a', encoding=None, delay=False):

            filename = os.fspath(filename)
            if not os.path.exists(path):
                os.mkdir(path)
            self.baseFilename = os.path.join(path, filename)
            self.mode = mode
            self.encoding = encoding
            self.delay = delay
            if delay:
                Handler.__init__(self)
                self.stream = None
            else:
                StreamHandler.__init__(self, self._open())


    class Loggers(object):
        # 日志级别关系映射
        level_relations = {
            'debug': logging.DEBUG, 'info': logging.INFO, 'warning': logging.WARNING,
            'error': logging.ERROR, 'critical': logging.CRITICAL
        }

        def __init__(self, filename='{uid}.log'.format(uid=uuid.uuid4()), level='info', log_dir='log',
                     fmt='%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s'):
            self.logger = logging.getLogger(filename)
            abspath = os.path.dirname(os.path.abspath(__file__))
            self.directory = os.path.join(abspath, log_dir)
            format_str = logging.Formatter(fmt)  # 设置日志格式
            self.logger.setLevel(self.level_relations.get(level))  # 设置日志级别
            stream_handler = logging.StreamHandler()  # 往屏幕上输出
            stream_handler.setFormatter(format_str)
            file_handler = PathFileHandler(path=self.directory, filename=filename, mode='a')
            file_handler.setFormatter(format_str)
            self.logger.addHandler(stream_handler)
            self.logger.addHandler(file_handler)


    if __name__ == "__main__":
        txt = "关注公众号【进击的 Coder】，回复『日志代码』可以领取文章中完整的代码以及流程图"
        log = Loggers(level='debug')
        log.logger.info(4)
        log.logger.info(5)
        log.logger.info(txt)



# =🚩 WSGI & WEB

Introduction — WSGI Tutorial - http://wsgi.tutorial.codepoint.net/
uWSGI项目 — uWSGI 2.0 文档 https://uwsgi-docs-zh.readthedocs.io/zh_CN/latest/
Quickstart for Python/WSGI — https://uwsgi-docs.readthedocs.io/en/latest/WSGIquickstart.html
Frameworks that run on WSGI — https://wsgi.readthedocs.io/en/latest/frameworks.html
Python WSGI的深入理解 - https://www.jb51.net/article/144862.htm
WSGI & uwsgi · rainybowe - http://www.rainybowe.com/blog/2017/01/04/WSGI&uwsgi/index.html
欢迎进入Flask大型教程项目！ - http://www.pythondoc.com/flask-mega-tutorial/

WSGI - Web Server Gateway Interface 规范，描述 web server 如何与 web application 通信的规范，PEP 3333 中有具体描述。

要实现 WSGI 协议，必须同时实现 web server 和 web application，当前运行在 WSGI 协议之上的 web 框架有 Bottle, Flask, Django。

uwsgi：与 WSGI 一样是一种通信协议，是uWSGI服务器的独占协议，用于定义传输信息的类型(type of information)，每一个uwsgi packet前4byte为传输信息类型的描述，与WSGI协议是两种东西，据说该协议是fcgi协议的10倍快。

uWSGI：是一个 web 服务器，实现了 WSGI、uwsgi、http 等协议。uWSGI server所做的工作仅仅是将从客户端收到的请求传递给WSGI application，然后将WSGI application的返回值作为响应传给客户端。WSGI applications 可以是栈式的，这个栈的中间部分叫做中间件，两端是必须要实现的application和server。

在阿里云 Ubuntu 系统安装 Pythond 3.6 和 uWSGI

    yum search python3 | grep python36
    yum list | grep python36
    yum -y install python36
    python3.6 --version
    whereis python3

    yum search python-dev # 查询Python开发包
    yum -y install python-devel
    pip install uwsgi


## ==⚡ WSGI application接口

Python内置了一个WSGI服务器,这个模块叫wsgiref,它是用纯Python编写的WSGI服务器的参考实现。WSGI application 接口应该实现为一个可调用对象，这个可调用对象可以接收2个参数：
environment 包含了客户端请求的信息以及其他信息，可以认为是请求上下文（编码中多简写为environ、env）；
response 响应对象，用于发送响应状态 HTTP status/HTTP headers 的回调函数。
最后，application 可调用对象的返回值是响应正文（response body）。下面的例中，application 会由uwsgi搜索到并自动执行：

    def application (environ, start_response):
        response_body = 'Request method: %s' % environ['REQUEST_METHOD']
        status = '200 OK'
        response_headers = [
            ('Content-Type', 'text/plain'),
            ('Content-Length', str(len(response_body)))
        ]
        start_response(status, response_headers)
        return [response_body]

把示例代码保存到 server.py 文件中，执行以下命令，就可以在浏览器中打开9090这个商品查看输出内容，--uid 用来指定运行账户，后面两条命令定义了4进程运行，每进程含2线程。这种直接启动的方式适合做开发测试，  

    uwsgi --http *:9090 --uid www --wsgi-file server.py
    uwsgi --http :9090 --wsgi-file server.py --master --processes 4 --threads 2
    uwsgi --http :9090 --wsgi-file server.py --master --processes 4 --threads 2 --stats 127.0.0.1:9191

可以使用 curl 或 php 命令来做访问测试：

    curl "http://localhost:9090/"
    php -r 'echo file_get_contents("http://localhost:9090");'

另一个实现，这个实现实例化了application，直接使用python运行即可。注意 python 有个内置属性 __name__，这个属性指示当前的模块是主模块还是引用模块。一个python的文件有两种使用的方法，通过import引用即作为模块执行。或直接作为脚本执行即主模块，那么 if __name__ == 'main': 下的代码就会被执行。

    # ! /usr/bin/env python
    # -*- coding: utf-8 -*- 
     
    # 导入python内置的WSGI server
    from wsgiref.simple_server import make_server
     
    def application (environ, start_response):
        response_body = [
            '%s: %s' % (key, value) for key, value in sorted(environ.items())
        ]
        response_body = '\n'.join(response_body) # 由于下面将Content-Type设置为text/plain，所以`\n`在浏览器中会起到换行的作用
        
        status = '200 OK'
        response_headers = [
            ('Content-Type', 'text/plain'),
            ('Content-Length', str(len(response_body)))
        ]
        start_response(status, response_headers)
        
        return [response_body]

    if __name__ == "__main__":
        # 实例化WSGI server
        httpd = make_server (
            '127.0.0.1', 
            8051, # port
            application # WSGI application，此处就是一个函数
        )
        
        # handle_request函数只能处理一次请求，之后就在控制台`print 'end'`了
        httpd.handle_request()
    
    print 'end'

可以与类似 nginx 这样的WEB服务器结合，nginx 配置示例如下，uwsgi_pass 对应 --socket。 proxy_pass 对应以 uwsgi --http 方式启动的服务，即上面这个例子：

    location / {
        include uwsgi_params;
        uwsgi_pass 127.0.0.1:3031;
        # proxy_pass  http://127.0.0.1:9090;
        # access_log /tmp/logs/api_access.log;
    }

这个配置告诉 nginx 要把每个请求发送到 uwsgi 协议端口 3031，接下来就要启动 uwsgi 通过 socket 来侦听 3031 端口：

    uwsgi --socket 127.0.0.1:3031 --wsgi-file server.py --master --processes 4 --threads 2 --stats 127.0.0.1:9191
 
停止 uwsgi 服务

    uwsgi --stop <uwsgi pid file> 
    killall -s INT /usr/bin/uwsgi

还可以指定配置文件来运行：

    [uwsgi]
    socket = 127.0.0.1:3031
    chdir = /home/server/myproject/
    wsgi-file = myproject/wsgi.py
    processes = 4
    threads = 2
    stats = 127.0.0.1:9191

这样命令行只要指定配置文件路径就可以了：

    uwsgi yourfile.ini

## ==⚡ GET动作解析

cgi.parse_qs() 函数可以很方便的处理QUERY_STRING，同时需要 cgi.escape() 处理特殊字符以防止脚本注入，代码是 Python 2 的语法，在Python 3 中 print 这样的调用要加括号。

    # ! /usr/bin/env python
    # -*- coding: utf-8 -*- 
    from cgi import parse_qs, escape
     
    QUERY_STRING = 'age=10&hobbies=software&hobbies=tunning'
    d = parse_qs(QUERY_STRING)
    print d.get('age', ['default_value'])[0]
    print d.get('hobbies', [])
    print d.get('name', ['unknown'])
     
    print 10 * '*'
    print escape('<script>alert(123);</script>')

WEB请求中的QUERY_STRING需要在 environ 中读取：

    d = parse_qs(environ['QUERY_STRING'])


## ==⚡ POST动作解析

对于POST请求，查询字符串放在HTTP请求正文 request body 中。请求正文在environment字典变量中键wsgi.input对应的值中，这是一个类似file的变量，这个值是一个。The PEP 3333 指出，请求头中CONTENT_LENGTH字段表示正文的大小，但是可能为空、或者不存在，所以读取请求正文时候要用try/except。

    # ! /usr/bin/env python
    # -*- coding: utf-8 -*- 
        
    from wsgiref.simple_server import make_server
    from cgi import parse_qs, escape
        
    html = """
    <html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <style>.container {}</style>
    </head>
    <body>
        <div class="container>
            <div class="jumbotron">
                <form action="" method="post">
                <h1>Post Test</h1>
                <p>Age:</p>
                <input type="text" name="age" value="%(age)s">
                <p>Hobbies:</p>
                <label for="chk-game"><input id="chk-game" name="hobbies" value="Game" type="checkbox" %(chk-game)s> Game</label>
                <label for="chk-music"><input id="chk-music" name="hobbies" value="Music" type="checkbox" %(chk-music)s> Music</label>
                <p><input type="submit" value="submit" class="btn btn-primary"></p>
                </form>
            </div>
            <div class="panel">
                <input type="text" class="text-info" value="Age: %(age)s">
                <input type="text" class="text-info" value="Hobbies: %(hobbies)s">
            </div>
        </div>
    </body>
    </html>
    """

    def application(environ, start_response):
        
        # CONTENT_LENGTH 可能为空，或者没有
        try:
            request_body_size = int(environ.get('CONTENT_LENGTH', 0))
        except (ValueError):
            request_body_size = 0
        
        request_body = environ['wsgi.input'].read(request_body_size)
        d = parse_qs(request_body)
        age = d.get('age', [''])[0] 
        hobbies = d.get('hobbies', []) 
        
        # 转义，防止脚本注入
        age = escape(age)
        hobbies = [escape(hobby) for hobby in hobbies]
        
        response_body = html % { 
            'chk-game': ('', 'checked')['Game' in hobbies],
            'chk-music': ('', 'checked')['Music' in hobbies],
            'age': age or 'Empty',
            'hobbies': ', '.join(hobbies or ['No Hobbies?'])
        }
        
        status = '200 OK'
        
        response_headers = [
            ('Content-Type', 'text/html'),
            ('Content-Length', str(len(response_body)))
        ]
        
        start_response(status, response_headers)
        return [response_body]
        
    print 'Testing'
    if __name__ == "__main__":
        httpd = make_server('127.0.0.1', 9090, application)
        #httpd = make_server('localhost', 9090, application)
        httpd.serve_forever()
        httpd.handle_request() # serve one request, then exit
        httpd.server_close()


## ==⚡ 中间件（Middleware）

中间件就是在WSGI server和WSGI application之间运行的代码部件，下面用代码展示中间件的意义。

    # ! /usr/bin/env python
    # -*- coding: utf-8 -*- 

    from wsgiref.simple_server import make_server

    def application(environ, start_response):
        response_body = 'hello world!'
        status = '200 OK'
        response_headers = [
            ('Content-Type', 'text/plain'),
            ('Content-Length', str(len(response_body)))
        ]
        start_response(status, response_headers)
        return [response_body]

    # 中间件定义
    class Upperware:
    
        def __init__(self, app):
            self.wrapped_app = app
    
        def __call__(self, environ, start_response):
            for data in self.wrapped_app(environ, start_response):
            yield data.upper()

    # 中间件接入
    wrapped_app = Upperware(application)
    httpd = make_server('localhost', 9090, wrapped_app)
    httpd.serve_forever()

    print 'end'



# =🚩 hashlib md5 & base64

hashlib 是涉及安全散列和消息摘要，提供多个不同的加密算法接口，如 SHA1、SHA224、SHA256、SHA384、SHA512、MD5等。

`hash.digest()` 返回摘要，作为二进制数据字符串值
`hash.hexdigest()` 返回摘要，作为十六进制数据字符串值

```py
import hashlib, base64;
from pprint import pprint

md5 = hashlib.md5();
md5.update("sometext".encode("utf-8"));
pprint([
    'md5 digest: %s'% md5.digest(),
    'md5 hexdigest: %s'% md5.hexdigest(),
    'base64:%s'% base64.b64encode(md5.digest()).decode('utf-8'),
]);
```

