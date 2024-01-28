#! /usr/bin/env -S python ./imap.py 1278
#! python

from typing import Any, Union
from imapclient import IMAPClient
import email
import email.parser
import email.header
import email.policy
import base64
import codecs
import sys
import io

# print(sys.argv)
# sys.stdout.flush()

# To solve Windows ZH-CN: UnicodeEncodeError: 'gbk' codec can't encode character '\xe2'
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf8')

AuthCode="..."
User='jimbowhy@foxmail.com'

server = IMAPClient('imap.qq.com', use_uid=True)
server.login(User, AuthCode)

# https://imapclient.readthedocs.io/en/3.0.0/
# https://datatracker.ietf.org/doc/html/rfc822.html
# https://datatracker.ietf.org/doc/html/rfc2821.html
# https://datatracker.ietf.org/doc/html/rfc3501.html
# 
# 电子邮件协议有两类，用于接收邮件的协议（IMAP 或者 POP），用于发送邮件的协议（SMTP）。
# https://www.cnblogs.com/wangzheming35/p/14554194.html
# https://img-blog.csdnimg.cn/20200503095527843.png
# 常用邮件接收协议有因特网报文存取协议(IMAP)和 POP 两种，前者功能多也复杂得多，
# IMAP 为用户提供了创建文件夹、在不同文件夹之间移动邮件及在远程文件夹中查询邮件的命令，
# 为此 IMAP 服务器维护了会话用户的状态信息。另一特性是允许用户代理只获取报文的某些部分，
# 例如可以只读取一个报文的首部，或一个多分部 MIME 报文的一部分。
# 
# RFC822 文档中定义了多个标准的邮件头字段，3.2.  Header Field Definitions，
# 每一个邮件头字段表示一种特定的信息。自定义头字段通常是某个组织或机构内部专用。
# 
# 连接 IMAP 邮件服务器，可选择 SSL 方式，连接后进行身份验证，在 login 函数中提供用户名和授权码，
# 通过服务器的身份验证后，使用各种函数查询服务器邮件数据。
# - Maildir list_folders 函数获得服务器存放不同邮件所使用的文件夹，包括收件箱、草稿夹、已发送、垃圾邮件等。
# - IMAP4 search 函数按指定的条件进行邮件的搜索，返回列表包含符合条件的邮件ID，搜索条件包括 
#   - FROM（来自哪个发件人）、ON、BEFORE，SINCE（某个日期）、
#   - UNSEEN、SEEN（未读/已读）和 ALL（所有邮件）。
# 获取邮件的基本信息后，接下来按邮件正文格式解释邮件，富媒体格式或者纯文本格式，根据 MIME 进行区分，
# mailbox.Message(mboxMessage) 类型提供 get_content_maintype 和 get_default_type 方法。
# 富媒体格式的 maintype='multipart'，而纯文本 maintype='text'。HTML 页面也属于富媒体格式，
# 邮件中的 WEB 页面需要按 HTTP 协议进行解析。请求文件夹中的所有消息，可能会遇到 imaplib 大小限制。
# 另外，邮箱服务器也可能存在时间周期限制，QQ 邮箱限制最近一个月。
# 
# 此脚本可以配合 sed & awk 工具使用，直接使用命令行读取邮件：
# last=$(/c/coding/imap.py  |& awk -F: '/:/ { print $1 }' | sed -n '$p')
# /c/coding/imap.py $last
# /c/coding/imap.py $last > email.html; start email.html

if len(sys.argv) > 1 and sys.argv[1]=="ls":

    for it in server.list_folders():
        print(it)


select_info = server.select_folder('INBOX') # INBOX 收件箱，Junk 垃圾邮件目录
print('%d messages in mail box.' % select_info[b'EXISTS'], file=sys.stderr)
# imapclient.imapclient.IMAPClient members
# ['add_flags', 'add_gmail_labels', 'append', 'capabilities', 'close_folder', 'copy', 'create_folder', 'delete_folder', 'delete_messages', 'enable', 'expunge', 'fetch', 'find_special_folder', 'folder_encode', 'folder_exists', 'folder_status', 'get_flags', 'get_gmail_labels', 'get_quota', 'get_quota_root', 'getacl', 'gmail_search', 'has_capability', 'host', 'id_', 'idle', 'idle_check', 'idle_done', 'list_folders', 'list_sub_folders', 'login', 'logout', 'move', 'multiappend', 'namespace', 'noop', 'normalise_times', 'oauth2_login', 'oauthbearer_login', 'plain_login', 'port', 'remove_flags', 'remove_gmail_labels', 'rename_folder', 'sasl_login', 'search', 'select_folder', 'set_flags', 'set_gmail_labels', 'set_quota', 'setacl', 'shutdown', 'socket', 'sort', 'ssl', 'ssl_context', 'starttls', 'stream', 'subscribe_folder', 'thread', 'uid_expunge', 'unselect_folder', 'unsubscribe_folder', 'use_uid', 'welcome', 'xlist_folders']

def byte_decode(by: Union[bytes, Any], cs = ["gbk", "utf8"]):
    if type(by) is not bytes:
        return by

    for it in cs:
        try:
            return by.decode(encoding=it)
            # return by.decode(encoding=it) if type(by) is bytes else by
            # return codecs.decode(by, encoding=it) if type(by) is bytes else by
        except UnicodeDecodeError as ex:
            pass
            # print(type(ex), ex, file=sys.stderr)


# if sys.argv[0]==sys.argv[-1]:
if len(sys.argv) == 1:

    # messages = server.search(['FROM', 'support.cn@icmarkets-cs.com'])
    messages = server.search(['SINCE', '6-Dec-2023'])
    # print("%d messages." % len(messages))

    # bodies = server.fetch(messages, ['BODY[]'])
    # for uid, data in bodies.items():
    #     email_msg = email.message_from_bytes(data[b"BODY[]"])

    envelopes = server.fetch(messages, ['ENVELOPE'])
    messages = server.fetch(messages, ['RFC822'])

    for uid, data in messages.items():
        email_msg = email.message_from_bytes(data[b"RFC822"])
        payload = email_msg.get_payload()
        if email_msg.get_content_maintype()=='multipart':
            payload = ""
            for part in email_msg.get_payload():
                # if part.get_content_type()=="text/plain":
                payload = part
        payload = str(payload)[1:100]
        subject, ret = email.header.decode_header(email_msg.get("Subject"))[0]
        contents = byte_decode(subject)
        From = email.header.decode_header(email_msg.get("From"))
        if type(From[0][0]) is bytes:
            From = From[0][0].decode()
        print(f'{uid}: {email_msg.get("Date")} {From} {contents}', file=sys.stderr)
        # print(f'''\
        # uid: {uid}
        #     From: {email_msg.get("From")}
        #     Subject: {email_msg.get("Subject")}
        #     maintype: {email_msg.get_content_maintype()}
        #     type: {email_msg.get_default_type()}
        #     payload: {payload}
        # ''')


if len(sys.argv) > 1 and str(sys.argv[1]).isnumeric():
    id = int(sys.argv[1])
    bodies = server.fetch([id], ['BODY[]'])
    # bodies = server.fetch(messages, ['BODY[]'])
    for uid, data in bodies.items():
        email_msg = email.message_from_bytes(data[b"BODY[]"])
        mimetype = email_msg.get_content_maintype()
        payload = ""
        if mimetype == 'text':
            payload = email_msg.get_payload(decode=True)
        elif mimetype == 'multipart':
            # process each email.message.Message
            for part in email_msg.get_payload():
                # "text/plain", "text/html", "multipart/alternative", "image/jpeg"...
                content_type = part.get_content_type()
                attachment_info = part.get('Content-Disposition')
                print(type(part), type(payload), content_type, attachment_info)
                if attachment_info != None:
                    attachment = part.get_payload(decode=True)
                    filename = part.get_filename()
                    file = open(filename, "wb")
                    file.write(attachment)
                    file.close()
                else:
                    payload = part.get_payload(decode=True)

        subject, ret = email.header.decode_header(email_msg.get("Subject"))[0]
        title = byte_decode(subject)
        payload = byte_decode(payload)
        print(uid, title, payload)

# email.message.Message members
# ['add_header', 'as_bytes', 'as_string', 'attach', 'defects', 'del_param', 'epilogue', 'get', 'get_all', 'get_boundary', 'get_charset', 'get_charsets', 'get_content_charset', 'get_content_disposition', 'get_content_maintype', 'get_content_subtype', 'get_content_type', 'get_default_type', 'get_filename', 'get_param', 'get_params', 'get_payload', 'get_unixfrom', 'is_multipart', 'items', 'keys', 'policy', 'preamble', 'raw_items', 'replace_header', 'set_boundary', 'set_charset', 'set_default_type', 'set_param', 'set_payload', 'set_raw', 'set_type', 'set_unixfrom', 'values', 'walk']


server.logout()

# for msgid, data in envelopes.items():
#     envelope = data[b'ENVELOPE']
#     print(f'''\
#         ID #{msgid}: "{envelope.subject.decode()}" received {envelope.date}
#         bcc: {envelope.bcc}
#         cc: {envelope.cc}
#         date: {envelope.date}
#         from_: {envelope.from_}
#         in_reply_to: {envelope.in_reply_to}
#         message_id: {envelope.message_id.decode()}
#         reply_to: {envelope.reply_to}
#         sender: {envelope.sender}
#         subject: {envelope.subject.decode()}
#         to: {envelope.to}
#         ''')


# Represents envelope structures of messages. Returned when parsing ENVELOPE responses.
# Variables:
# date – A datetime instance that represents the “Date” header.
# subject – A string that contains the “Subject” header.
# from_ – A tuple of Address objects that represent one or more addresses from the “From” header, or None if header does not exist.
# sender – As for from_ but represents the “Sender” header.
# reply_to – As for from_ but represents the “Reply-To” header.
# to – As for from_ but represents the “To” header.
# cc – As for from_ but represents the “Cc” header.
# bcc – As for from_ but represents the “Bcc” recipients.
# in_reply_to – A string that contains the “In-Reply-To” header.
# message_id – A string that contains the “Message-Id” header.

# {b'SEQ': 3, b'ENVELOPE': Envelope(date=datetime.datetime(2023, 11, 29, 11, 56, 16), subject=b'=?utf-8?B?SUMgTWFya2V0cyBHbG9iYWzvvJrmjqjojZDlpb3lj4sg5bmz5YiGJDEwMOe+jumHke+8gQ==?=', from_=(Address(name=b'=?utf-8?B?SUMgTWFya2V0cyBHbG9iYWw=?=', route=None, mailbox=b'support.cn', host=b'icmarkets-cs.com'),), sender=(Address(name=b'=?utf-8?B?SUMgTWFya2V0cyBHbG9iYWw=?=', route=None, mailbox=b'support.cn', host=b'icmarkets-cs.com'),), reply_to=(Address(name=b'=?utf-8?B?SUMgTWFya2V0cyBHbG9iYWw=?=', route=None, mailbox=b'support.cn', host=b'icmarkets-cs.com'),), to=(Address(name=b'=?utf-8?B?MjU0MTQxMjAz?=', route=None, mailbox=b'254141203', host=b'qq.com'),), cc=None, bcc=None, in_reply_to=None, message_id=b'<1701226713166.8d97cf84-5074-4c7c-9961-28aca52968c7@bf02x.hubspotemail.net>')}

