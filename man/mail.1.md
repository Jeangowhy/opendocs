MAIL(1)                     General Commands Manual                    MAIL(1)

   ```sh
   manual_ubuntu()
   {
       man=$1
       if ! [[ -f "$man" ]] ; then
           # https://manpages.ubuntu.com/dman
           # https://manpages.ubuntu.com/manpages/xenial/zh_CN/man1/mail.1.html
           curl -s -O https://manpages.ubuntu.com/manpages.gz/xenial/zh_CN/man1/$man
       fi
       LANG=zh_CN MANWIDTH=80 man --nj --nh $man > "$2" ; subl "$2"
       7z l $man
   }
   manual_ubuntu './mail.1.gz' '/c/opendocs/man/mail.1.md'
   manual_ubuntu './mailto.1.gz' '/c/opendocs/man/mailto.1.md'
   ```

# /NAME(名称)

   mail - 发送和接收邮件

# /SYNOPSIS(总览)

    mail [-iInv] [-s subject] [-c cc-addr] [-b bcc-addr] to-addr
    ... 
    mail [-iInNv] -f [name]
    mail [-iInNv] [-u user]

# /INTRODUCTION(介绍)

   Mail 是一个智能化的邮件处理系统,它具有 ed(1)
   的命令语法回忆功能,只是用消息替换了行罢了.

   -v    详尽模式.  传输邮件的细节都呈现在用户的终端上.

   -i    忽略tty中断信号.  这对于在嘈杂的电话线路上使用 mail 特别有用.

   -I    强迫mail以交互模式运行,即使其不是通过终端输入的.
         特别地,正在发送邮件时, ‘~’ 特殊字符只在交互模式下才起作用.

   -n    禁止在启动时读取 /etc/mail.rc

   -N    当阅读邮件或编辑邮件夹时禁止消息头的初始化显示.

   -s    在命令行上指定主题(仅把 -s
         标识后的第一个参数用作主题;注意对包含空格的主题加上引号.)

   -c    发送复件(carbon copy)给用户 list

   -b    发送隐藏的复写副本(blind carbon copy)给用户 list.
         list应为以逗号分隔的名字列表.

   -f    读入你的 mbox (或指定文件) 中的内容进行处理;当你 quit 时, mail
         会把未删除的消息写回该文件.

   -u    相当于:

               mail -f /var/spool/mail/user

   Sending mail(发送邮件)
   要发送一条消息给一个或更多的人, mail
   可以以邮件将要发送的人名作为参数进行调用.
   然后要求你输入你的消息,并在每行的开头跟着 一个 ‘control-D’ 下面的部分
   Replying to or originating mail, 描述了一些 mail
   用于帮助你操作信件的功能.

   Reading mail(阅读邮件)
   在一般的用法中 mail 不带任何参数,并通过邮局(post
   office)检查你的邮件,然后对于每条找到的消息打印出一个
   行头.当前的消息初始为第一条消息(序号1),而且可以使用 print 命令(可简省为
   ‘p’) 打印.  你可以使用命令 ‘+’ 和 ‘-’ 如在 ed(1)
   的各行间移动一样前后移动消息,或者移动到一个简单的序号.

   Disposing of mail(丢弃邮件).
   在检查了消息之后,你可以 delete ‘d’) 这条消息或者 reply ‘r’) 它.
   删除会导致 mail 程序遗忘该条消息.  这并非不能撤销;可以通过给定其序号来
   undeleted ‘u’) 该条消息,或者 通过指定 exit ‘x’) 命令来终止 mail
   的会话.  不过,删除了的消息就会永远消失不再出现.

   Specifying messages(指定消息)
   命令如 print 和 delete
   可以给定一组消息的序号作为参数来一次性对这组消息进行操作.  所以,
   “delete 1 2” 会删除消息1和2,而 “delete 1-5” 会删除消息1到5.
   特殊名字 ‘*’ 表示所有消息,而 ‘$’
   表示最后一条消息;因此用来打印一条消息的首几行的命令 top 可用在 “top
   *” 中以打印所有消息的首几行.

   Replying to or originating mail(回复或发送邮件).
   你可以使用 reply 命令来回复一条消息,将它发送回消息的发送者.
   你输入的一直到文末的文本定义了该条消息的内容.  当你正在操作一条消息时,
   mail 处理以字符 ‘~’ 开头的行会有些特殊.  例如,输入 ‘~m’
   (这一行就这么一句)会放置一个当前消息的拷贝到回复中,其可以通过tabstop右移位(参见下
   面的 indentprefix 变量).
   其它扩展符可用来设置主题字段,添加和删除消息的收件人,并且允许你返回编辑器来修改消
   息,或者用shell执行某些命令.  (这些选项都在下面的summary中给定.)

   Ending a mail processing session(终止邮件处理会话).
   你可以使用 quit ‘q’) 命令来终止 mail 会话.  检查了的邮件会转到你的
   mbox 文件,除非它们因为删除而被丢弃了.  未检查的邮件则返回到邮局.
   (参见上面的 -f 选项).

   Personal and systemwide distribution lists(个人和系统的发送列表).
   可以创建个人的发送列表,这样,例如你发送邮件到 “cohorts”
   时,即可发送它给一组人.  这样的列表可以通过在你home目录下的文件 .mailrc
   中放置如下一行:

         alias cohorts bill ozalp jkf mark kridle@ucbcory

   来实现.  这类别名的当前列表可以使用 mail 中的 alias 命令来显示.
   系统级的发送列表可以通过编辑 /etc/aliases 来创建,参看 aliases(5) 和
   sendmail(8); 这些具有不同的语法.
   在你发送的邮件中,私有别名会在发送给其他人的邮件中展开,这样他们就能够
   reply 给收件人.  系统级的 aliases
   在邮件发送时不会展开,但是当所有邮件通过 sendmail
   时,任何返回机器的回复信都会展开系统级别名.

   Network mail(网络邮件)(ARPA,UUCP,Berknet)
   参见 mailaddr(7) 以获知关于网络地址的描述.

   Mail 可以在 .mailrc 文件中设置一些选项以改变其操作;因而 “set askcc”
   会激活 askcc 功能.  (这些选项都总结在下面.)

# /SUMMARY(总结)

   (改编自‘Mail Reference Manual')

   每条命令单独占一行,而且可能带有参数跟在命令字后.  命令不需要完全输入 -
   使用第一个匹配输入前缀的命令.
   对于那些以消息列表作为参数的命令,如果没有给定消息列表,那么使用满足命令要求的下一
   条消息.
   如果当前消息之后没有任何消息,那么搜索继续向前进行.如果根本没有合适的消息,
   mail 输出 “applicable messages” 并且 终止该命令.

   -       打印出接下来的消息.  如果给定一个序号 n 作为参数,那么会转到
           n'th 前面的消息并打印它.

   ?       打印命令概要.

   !       执行后面跟着的shell命令 (参看 sh(1) 和 csh(1))

   Print   (P) 如同 print 一样,不过它还会打印出忽略的消息头字段.  另见
           print, ignore 以及 retain.

   Reply   (R) 回复信件给发送者.  不回复给发送来的邮件中的其它收件人.

   Type    (T) 与 Print 命令一致.

   alias   (a) 不带参数,打印出所有当前定义的别名..  带一个参数,打印该别名.
           带多于一个的参数,则创建一个新的别名或对老的进行修改,

   alternates
           (alt) 如果你在数台机器上有账号.  alternates
           命令很有用.它可以用来通知 mail 列出的地址实际都是你的.  当你
           回复 消息时, mail 就不会发送消息的拷贝到任何列在 alternates
           列表中的地址.  如果 alternates
           命令未给定参数,那么显示当前alternate的名字.

   chdir   (c) 如果指定了的话,修改用户的工作目录为指定的目录.
           如果没有指定目录,那么修改为用户的登录目录.

   copy    (co) copy 命令与 save
           一样,唯一的例外是当你退出时,它不会标明删除了的消息.

   delete  (d) 以消息列表作为参数,并且标明它们全部被删除.
           删除了的消息不会保存在 mbox 中, 也不会对大多数其它命令可用.

   dp      (也作 dt) 删除当前消息并打印下一条消息.  如果没有下一条消息,
           mail 输出 “at EOF”.

   edit    (e) 读取一组消息,并把文本编辑器按序指向每条消息.
           在从编辑器返回时,消息会再读回.

   exit    (ex 或者 x) 不修改用户的系统邮箱,他的 mbox 文件,或者在 -f
           中的编辑文件而立即返回到shell.

   file    (fi) 与 folder 相同.

   folders
           列出在你的邮件夹目录中的邮件夹名.

   folder  (fo) folder 命令用来转到一个新的邮件文件或文件夹.
           不带参数时,它会告知你当前在阅读的文件.
           如果你给定了一个参数,它会在当前文件中写完你刚作的修改(例如删除)并读入新的文件.
           对名字有一些特别的约定.  #表示前一个文件, %表示你的系统邮箱,
           %user表示user的系统邮箱, &表示你的 mbox 文件,而
           +folder表示在你的folder目录中的一个文件.

   from    (f) 读取一组消息并打印出其消息头.

   headers
           (h) 显示消息头的当前范围,这是一个18-消息组.  如果 给定了一个
           ‘+’ 参数,那么会打印下一个18-消息组,而如果给定了一个 ‘-’
           参数,那么会打印前一个18-消息组.

   help    与 ? 同义.

   hold    (ho, 也作 preserve)
           读取一个消息列表,并标记其中的每条消息保存到用户的系统邮箱中,而非
           mbox 中.  这不会覆盖 delete 命令.

   ignore  添加一列消息头字段到 ignored list 中.
           当你打印一条消息时,在ignore
           list中的消息头字段不会在你的终端上打印出来.
           这条命令对于抑制特定的机器生成的消息头字段很方便.  Type 和
           Print 命令可以用来完整地打印一条消息,包括忽略的字段.  如果
           ignore 不带任何参数执行,它会列出当前设置的忽略的字段.

   mail    (m) 以登录名和发送组名作为参数并发送邮件给这些人.

   mbox    标明当你退出时,消息列表会发送到你的home目录下的 mbox 中.
           如果你 没有 设置 hold 选项,这就是消息默认的操作行为.

   next    (n) 类似 + 或 CR) 转到按序的下一条消息并输出它.
           如果带了参数列表,则输出下一个匹配的消息.

   preserve
           (pre) 与 hold 同义.

   print   (p) 读取消息列表,并在用户终端上输出每条消息.

   quit    (q) 终止会话,保存所有未删除而且未保存的消息到用户的登录目录下的
           mbox 文件中,并保留所有使用 hold 或者 preserve
           标记或者从未关联的消息到他的系统邮箱中,另外从他的系统邮箱中删除所有其它消息.
           如果新的邮件在这次会话中到达,会给出 “You have new mail” 消息.
           如果在编辑邮箱文件时指定了 -f 标识,那么编辑的文件会重写.
           返回到Shell会受影响,除非编辑文件的重写失败,在这种情况下,用户可以使用
           exit 命令退出.

   reply   (r) 读取消息列表并发送邮件给发送者和指定消息的所有收件人.
           默认消息不能够删除.

   respond
           与 reply 同义.

   retain  添加消息头字段列表到 retained list 中.  只有在retain
           list中的消息头字段才会在你打印一条消息时显示在你的终端上.
           所有其它消息头字段都抑制了.  Type 和 Print
           命令可以用来完整地打印一条消息.  如果 retain
           不带任何参数执行,它会列出保留字段(retained field)的当前设置.

   save    (s)
           读取一个消息列表和一个文件名,并按序添加每条消息到该文件末尾.
           文件名应以加引号,后面跟着回应到用户终端上的行数和字符数.

   set     (se) 如果不带任何参数,打印所有变量值.  否则,设置选项.
           参数为以下格式: option=value (在=前后都没有空格)或者 option.
           引号标记可能需要放到赋值语句的任何部分以括起空格或者退格符,也即
           “set indentprefix="-&gt;"”

   saveignore
           Saveignore 用来 save ignore 的内容并 print 和 type.
           这样标记的消息头字段当通过 save 保存消息或者当自动保存到 mbox
           中时会过滤掉.

   saveretain
           Saveretain 用来 save retain 中的内容,并 print 和 type.
           这样标记的消息头字段当通过 save 保存消息或者当自动保存到 mbox
           中时会过滤掉.  Saveretain 覆盖 saveignore.

   shell   (sh) 调用shell的交互式版本.

   size    读取一组消息并打印出每条消息按字符的大小.

   source  source 命令从一个文件读取命令.

   top     读取一组消息并打印每条消息的头几行.  打印的行数通过变量
           toplines 控制,默认为5行.

   type    (t) 与 print 同义.

   unalias
           读取一列由 alias 命令定义的名字并丢弃已有的用户组.
           组名将不再有任何作用.

   undelete
           (u) 读取一列消息并标记每条消息为 未 删除.

   unread  (U) 读取一列消息并标记每条消息为 尚未 阅读.

   unset   读取一列选项名并丢弃他们已有的值; 这是 set 的反向操作.

   visual  (v) 读取一列消息并对每条消息调用显示的编辑器.

   write   (w) 与 save 相似,不同之处在于 只保存 消息体而 (不保存) 消息头).
           这对于通过消息系统发送和接收源程序文本的情况有很大的用处.

   xit     (x) 与 exit 同义.

   z       Mail 表示当消息头的窗口满了时,如在 headers
           命令中描述的那样显示.  你可以使用 z 命令移动 mail's
           通告到下一个窗口.  同样,你也可以通过使用 z- 移动到前一个窗口.

   ## //Tilde/Escapes(代字符/扩展符)
   以下是对tilde escapes的归纳,这用于操作消息以执行特殊的功能.  Tilde
   escapes只在行首被承认.  名字 “tilde escape”
   可能有些用词不当,因为实际的escape字符可通过选项 escape 设置.

   ~!command
           执行指定的shell命令,然后返回消息.

   ~bname ...
           添加给定名字到复制(carbon
           copy)的收件人列表中,但是不在Cc:行中显示出来("blind" ca rbon
           copy).

   ~cname ...
           添加给定名字到复制(carbon copy)的收件人列表中.

   ~d      从你的home目录中读取文件 “dead.letter” 到消息中.

   ~e      对当前收集的消息调用文本编辑器.
           在编辑完成之后,你可以继续在消息中添加文本.

   ~fmessages
           读取命名的messages到将要发送的消息中.
           如果没有指定messages,那么就读取当前消息.  当前被忽略(通过
           ignore 或者 retain 命令)的消息头不包括在内.

   ~Fmessages
           类似于 ~f, 不过这包括了所有的消息头.

   ~h      通过逐一输入的方式编辑消息头字段,并且允许用户添加文本到消息的末尾或者通过使用当前
           终端的消除和抹掉字符来修改字段.

   ~mmessages
           读取命名的messages到将要发送的消息中,以tab或者 indentprefix
           的值交错.  如果没有指定messages,则读取当前消息.
           当前被忽略(通过 ignore 或者 retain 命令)的消息头不包括在内.

   ~Mmessages
           类似于 ~m, 不过这包括了所有的消息头.

   ~p      打印出当前收集的消息,以消息头字段开始.

   ~q      放弃发送消息,如果设置了 save, 则复制消息到你home目录下的
           “dead.letter” 中.

   ~rfilename
           读取指定的file到消息中.

   ~sstring
           使得指定的string成为当前的主题字段.

   ~tname ...
           添加给定的name到直接的收件人列表中.

   ~v      对当前收集的消息调用后备的编辑器(由 VISUAL 选项定义).
           通常,备用的编辑器是屏幕编辑器.
           你退出编辑器后,你可以继续在消息的末尾添加文本.

   ~wcommand
           使消息通过command的过滤.
           如果command没有输出或者反常地终止,则会保留消息的原始文本.  命令
           fmt(1) 经常用作 command 来重新验证消息.

   ~:mail-command
           执行给定的mail command.  但是,不是所有命令都允许的.

   ~string
           插入文本string到消息中,前面以单个的~开头.
           如果你已经修改了escape字符,那么你应该重复这个字符以发送它.

   ## //Mail Options(邮件选项)
   选项通过 set 和 unset 命令控制.
   选项可以是二进制的,在这种情况下,只对它们是否设置了有意义;或者是字符串,这种情况下
   的实际值才有意义.  二进制选项包括以下一些:

   append  使得保存在 mbox 中的消息添加到末尾而不是加到前面.
           这通常是应该设置的(也许在 /etc/mail.rc 中)

   ask, asksub
           使得 mail 提示你输入发送的每条消息的主题.
           如果你用一个简单的换行符应答,则发送无主题的字段.

   askcc   提示你输入附加的复写(carbon copy)的收件人在每条消息之后.
           以换行符回应表示你满意当前的列表.

   askbcc  提示你输入附加的隐藏的复写(blind carbon
           copy)的收件人在每条消息之后.  以换行符回应表示你满意当前的列表.

   autoprint
           使得 delete 命令如 dp 一样.  -
           这样,在删除一条消息之后,下一条消息会自动输出.

   debug   设置二进制选项 debug 与命令行上指定 -d 一样,这会使得 mail
           输出各种有用的信息来调试 mail.

   dot     二进制选项 dot 使得 mail
           解释一行只有单一的句点为你发送消息的结束.

   hold    该选项用来保存消息在默认的系统邮箱中.

   ignore  使得忽略来自终端的中断信号,并且以@'s响应.

   ignoreeof
           一个与 dot 相关的选项就是 ignoreeof, 它使得 mail
           拒绝接受control-d为消息的结束.  Ignoreeof 同样也适用于 mail
           命令模式.

   metoo   通常,当包括发送者的一组展开时,发送者会在展开中删除.
           设置该选项会使得发送者包括在组中.

   noheader
           设置选项 noheader 与在命令行中指定 -N 标识一样.

   nosave  正常情况下,当你使用 RUBOUT (erase或者delete) 中止一条消息时,
           mail 会复制部分信件到你home目录下的文件 “dead.letter” 中.
           设置二进制选项 nosave 可以阻止这么做.

   Replyall
           颠倒 reply 和 Reply 命令的含义.

   quiet   当第一次调用时,禁止打印版本.

   searchheaders
           如果设置了这个选项,那么在格式‘‘/x:y''中的消息列表区分标志会对所有在头字段‘‘x''中
           包含子字符串‘‘y''的消息展开.字符串查找是区分大小写的.

   verbose
           设置选项 verbose 与在字符行下使用 -v 标识一样.
           当邮件运行在verbose模式时, 实际传递的消息会显示在用户的终端上.

   Option String Values(选项字符串值)
   EDITOR        在 edit 命令和 ~e 扩展符中使用的文本编辑器的路径名.
                 如果没有定义,那么使用默认的编辑器.

   LISTER        在 folders 命令中使用的目录浏览器的路径名.  默认为
                 /bin/ls.

   PAGER         在 more 命令或者当设置了 crt 变量时使用的程序的路径名.
                 如果该选项没有定义,默认使用 more(1).

   SHELL         在 ! 命令和 ~! 扩展符中使用的shell的路径名.
                 如果未定义该选项,则使用默认的shell.

   VISUAL        在 visual 命令和 ~v 扩展符中使用的文本编辑器的路径名.

   crt           赋值的选项 crt 用作限额以决定一条消息在使用 PAGER
                 阅读它之前有多长.  如果 crt
                 没有赋值,那么保存在系统中的终端显示高度用来确定限额(参见
                 stty(1)).

   escape        如果定义了,那么该选项的第一个字符给出扩展符中替换~的字符.

   folder        存储消息的文件夹的目录名.  如果该名字以‘/'开头, mail
                 会把它当作绝对路径名;否则,文件目录相对于你的home目录查找.

   MBOX          mbox 文件的名字.  它可以为一个文件夹名.
                 默认为在用户home目录下的 “mbox”.

   record        如果定义了,指定用来存档所有外发邮件的文件的路径名.
                 如果没有定义,那么外发邮件将不被保存.

   indentprefix  在‘‘~m'' tilde
                 escape中用作交错消息的字符串,替换一般情况下的tab字符(^I).
                 如果其中包含了空格或者tab,确信对值加了引号.

   toplines      如果定义了,指定使用 top
                 命令打印的消息的行数;一般情况下,打印前5行.

# /ENVIRONMENT(环境变量)

   Mail 使用了 HOME 和 USER 环境变量.

# /FILES(相关文件)

   /var/spool/mail/*    邮局.
   ~/mbox               用户的老邮件.
   ~/.mailrc            给定初始邮件命令的文件.
   /tmp/R*              临时文件.
   /usr/lib/mail.*help  帮助文件.
   /etc/mail.rc         系统初始化文件.

# /SEE ALSO(另见)

   fmt(1), newaliases(1), vacation(1), aliases(5), mailaddr(7),
   sendmail(8) 和 The Mail Reference Manual..

# /HISTORY(历史)

   mail 命令出现在 Version 6 AT&T UNIX 中.  该man页源自 The Mail Reference
   Manual 原作者为Kurt Shoens.

# /BUGS

   有一些标识没有列在文档中.  大多数对一般用户都是没有用处的.

[中文版维护人]
   riser <boomer@ccidnet.com>

[中文版最新更新]
   2001/08/08

《中国linux论坛man手册页翻译计划》:
   http://cmpp.linuxforum.net

4th Berkeley Distribution       1993年12月30日                         MAIL(1)
