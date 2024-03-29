SENDMAIL(8)                 System Manager's Manual                SENDMAIL(8)

```sh
manual_debian()
{
    man="./$(basename $1)"
    out="$2"

    man_url="https://dyn.manpages.debian.org/testing/$1"
    man_url="https://manpages.debian.org/testing/$1"
    # https://manpages.debian.org/testing/sendmail-bin/sendmail.8.en.html

    if ! [[ -f "$man" ]] ; then
        curl -s -L -O "$man_url"
    fi
    MANWIDTH=80 man --nj --nh $man > "$out" ; subl "$out"

    # 7z l $man >/dev/null 2>&1 # suppress error

    # if ! [[ $? -eq 0 ]] ; then
    #     echo "Not a archive and remove it from disk." >&2 # redirect to stderr
    #     rm "$man"
    #     curl -s -I "$man_url"
    # else
    #     # echo "man $man"
    #     LANG=zh_CN MANWIDTH=80 man --nj --nh $man > "$out" ; subl "$out"
    # fi
}
manual_debian 'bsd-mailx/Mail.1.en.gz' '/c/opendocs/man/Mail.1.reference_manual.md'
manual_debian 'sendmail-bin/sendmail.8.en.gz' '/c/opendocs/man/sendmail.8.md'
```

# /NAME

       sendmail - an electronic mail transport agent

# /SYNOPSIS

       sendmail [flags] [address ...]
       newaliases
       mailq [-v]
       hoststat
       purgestat
       smtpd

# /DESCRIPTION

       Sendmail sends a message to one or more recipients, routing the message
       over whatever networks are necessary.  Sendmail does internetwork
       forwarding as necessary to deliver the message to the correct place.

       Sendmail is not intended as a user interface routine; other programs
       provide user-friendly front ends; sendmail is used only to deliver pre-
       formatted messages.

       With no flags, sendmail reads its standard input up to an end-of-file
       or a line consisting only of a single dot and sends a copy of the
       message found there to all of the addresses listed.  It determines the
       network(s) to use based on the syntax and contents of the addresses.

       Local addresses are looked up in a file and aliased appropriately.
       Aliasing can be prevented by preceding the address with a backslash.
       Beginning with 8.10, the sender is included in any alias expansions,
       e.g., if `john' sends to `group', and `group' includes `john' in the
       expansion, then the letter will also be delivered to `john'.

## //Parameters

       -Ac    Use submit.cf even if the operation mode does not indicate an
              initial mail submission.

       -Am    Use sendmail.cf even if the operation mode indicates an initial
              mail submission.

       -Btype Set the body type to type.  Current legal values are 7BIT or
              8BITMIME.

       -ba    Go into ARPANET mode.  All input lines must end with a CRLF, and
              all messages will be generated with a CRLF at the end.  Also,
              the ``From:'' and ``Sender:'' fields are examined for the name
              of the sender.

       -bC    Check the configuration file.

       -bd    Run as a daemon.  Sendmail will fork and run in background
              listening on socket 25 for incoming SMTP connections.  This is
              normally run from /etc/rc.

       -bD    Same as -bd except runs in foreground.

       -bh    Print the persistent host status database.

       -bH    Purge expired entries from the persistent host status database.

       -bi    Initialize the alias database.

       -bm    Deliver mail in the usual way (default).

       -bp    Print a listing of the queue(s).

       -bP    Print number of entries in the queue(s); only available with
              shared memory support.

       -bs    Use the SMTP protocol as described in RFC821 on standard input
              and output.  This flag implies all the operations of the -ba
              flag that are compatible with SMTP.

       -bt    Run in address test mode.  This mode reads addresses and shows
              the steps in parsing; it is used for debugging configuration
              tables.

       -bv    Verify names only - do not try to collect or deliver a message.
              Verify mode is normally used for validating users or mailing
              lists.

       -Cfile Use alternate configuration file.  Sendmail gives up any
              enhanced (set-user-ID or set-group-ID) privileges if an
              alternate configuration file is specified.

       -D logfile
              Send debugging output to the indicated log file instead of
              stdout.

       -dcategory.level...
              Set the debugging flag for category to level.  Category is
              either an integer or a name specifying the topic, and level an
              integer specifying the level of debugging output desired.
              Higher levels generally mean more output.  More than one flag
              can be specified by separating them with commas.  A list of
              numeric debugging categories can be found in the TRACEFLAGS file
              in the sendmail source distribution.
              The option -d0.1 prints the version of sendmail and the options
              it was compiled with.
              Most other categories are only useful with, and documented in,
              sendmail's source code.

       -Ffullname
              Set the full name of the sender.

       -fname Sets the name of the ``from'' person (i.e., the envelope sender
              of the mail).  This address may also be used in the From: header
              if that header is missing during initial submission.  The
              envelope sender address is used as the recipient for delivery
              status notifications and may also appear in a Return-Path:
              header.  -f should only be used by ``trusted'' users (normally
              root, daemon, and network) or if the person you are trying to
              become is the same as the person you are.  Otherwise, an X-
              Authentication-Warning header will be added to the message.

       -G     Relay (gateway) submission of a message, e.g., when rmail calls
              sendmail .

       -hN    Set the hop count to N.  The hop count is incremented every time
              the mail is processed.  When it reaches a limit, the mail is
              returned with an error message, the victim of an aliasing loop.
              If not specified, ``Received:'' lines in the message are
              counted.

       -i     Do not strip a leading dot from lines in incoming messages, and
              do not treat a dot on a line by itself as the end of an incoming
              message.  This should be set if you are reading data from a
              file.

       -L tag Set the identifier used in syslog messages to the supplied tag.

       -N dsn Set delivery status notification conditions to dsn, which can be
              `never' for no notifications or a comma separated list of the
              values `failure' to be notified if delivery failed, `delay' to
              be notified if delivery is delayed, and `success' to be notified
              when the message is successfully delivered.

       -n     Don't do aliasing.

       -O option=value
              Set option option to the specified value.  This form uses long
              names.  See below for more details.

       -ox value
              Set option x to the specified value.  This form uses single
              character names only.  The short names are not described in this
              manual page; see the Sendmail Installation and Operation Guide
              for details.

       -pprotocol
              Set the name of the protocol used to receive the message.  This
              can be a simple protocol name such as ``UUCP'' or a protocol and
              hostname, such as ``UUCP:ucbvax''.

       -q[time]
              Process saved messages in the queue at given intervals.  If time
              is omitted, process the queue once.  Time is given as a tagged
              number, with `s' being seconds, `m' being minutes (default), `h'
              being hours, `d' being days, and `w' being weeks.  For example,
              `-q1h30m' or `-q90m' would both set the timeout to one hour
              thirty minutes.  By default, sendmail will run in the
              background.  This option can be used safely with -bd.

       -qp[time]
              Similar to -qtime, except that instead of periodically forking a
              child to process the queue, sendmail forks a single persistent
              child for each queue that alternates between processing the
              queue and sleeping.  The sleep time is given as the argument; it
              defaults to 1 second.  The process will always sleep at least 5
              seconds if the queue was empty in the previous queue run.

       -qf    Process saved messages in the queue once and do not fork(), but
              run in the foreground.

       -qGname
              Process jobs in queue group called name only.

       -q[!]Isubstr
              Limit processed jobs to those containing substr as a substring
              of the queue id or not when !  is specified.

       -q[!]Qsubstr
              Limit processed jobs to quarantined jobs containing substr as a
              substring of the quarantine reason or not when !  is specified.

       -q[!]Rsubstr
              Limit processed jobs to those containing substr as a substring
              of one of the recipients or not when !  is specified.

       -q[!]Ssubstr
              Limit processed jobs to those containing substr as a substring
              of the sender or not when !  is specified.

       -Q[reason]
              Quarantine a normal queue items with the given reason or
              unquarantine quarantined queue items if no reason is given.
              This should only be used with some sort of item matching using
              as described above.

       -R return
              Set the amount of the message to be returned if the message
              bounces.  The return parameter can be `full' to return the
              entire message or `hdrs' to return only the headers.  In the
              latter case also local bounces return only the headers.

       -rname An alternate and obsolete form of the -f flag.

       -t     Read message for recipients.  To:, Cc:, and Bcc: lines will be
              scanned for recipient addresses.  The Bcc: line will be deleted
              before transmission.

       -U     If a mail submission via the command line requires the use of
              the SMTPUTF8 argument for the MAIL command, e.g., because a
              header uses UTF-8 encoding, but the addresses on the command
              line are all ASCII, then this option must be used.  Only
              available if EAI support is enabled, and the SMTPUTF8 option is
              set.

       -V envid
              Set the original envelope id.  This is propagated across SMTP to
              servers that support DSNs and is returned in DSN-compliant error
              messages.

       -v     Go into verbose mode.  Alias expansions will be announced, etc.

       -X logfile
              Log all traffic in and out of mailers in the indicated log file.
              This should only be used as a last resort for debugging mailer
              bugs.  It will log a lot of data very quickly.

       --     Stop processing command flags and use the rest of the arguments
              as addresses.

## //Options

       There are also a number of processing options that may be set.
       Normally these will only be used by a system administrator.  Options
       may be set either on the command line using the -o flag (for short
       names), the -O flag (for long names), or in the configuration file.
       This is a partial list limited to those options that are likely to be
       useful on the command line and only shows the long names; for a
       complete list (and details), consult the Sendmail Installation and
       Operation Guide.  The options are:

       AliasFile=file
              Use alternate alias file.

       HoldExpensive
              On mailers that are considered ``expensive'' to connect to,
              don't initiate immediate connection.  This requires queueing.

       CheckpointInterval=N
              Checkpoint the queue file after every N successful deliveries
              (default 10).  This avoids excessive duplicate deliveries when
              sending to long mailing lists interrupted by system crashes.

       DeliveryMode=x
              Set the delivery mode to x.  Delivery modes are `i' for
              interactive (synchronous) delivery, `b' for background
              (asynchronous) delivery, `q' for queue only - i.e., actual
              delivery is done the next time the queue is run, and `d' for
              deferred - the same as `q' except that database lookups for maps
              which have set the -D option (default for the host map) are
              avoided.

       ErrorMode=x
              Set error processing to mode x.  Valid modes are `m' to mail
              back the error message, `w' to ``write'' back the error message
              (or mail it back if the sender is not logged in), `p' to print
              the errors on the terminal (default), `q' to throw away error
              messages (only exit status is returned), and `e' to do special
              processing for the BerkNet.  If the text of the message is not
              mailed back by modes `m' or `w' and if the sender is local to
              this machine, a copy of the message is appended to the file
              dead.letter in the sender's home directory.

       SaveFromLine
              Save UNIX-style From lines at the front of messages.

       MaxHopCount=N
              The maximum number of times a message is allowed to ``hop''
              before we decide it is in a loop.

       IgnoreDots
              Do not take dots on a line by themselves as a message
              terminator.

       SendMimeErrors
              Send error messages in MIME format.  If not set, the DSN
              (Delivery Status Notification) SMTP extension is disabled.

       ConnectionCacheTimeout=timeout
              Set connection cache timeout.

       ConnectionCacheSize=N
              Set connection cache size.

       LogLevel=n
              The log level.

       MeToo=False
              Don't send to ``me'' (the sender) if I am in an alias expansion.

       CheckAliases
              Validate the right hand side of aliases during a newaliases(1)
              command.

       OldStyleHeaders
              If set, this message may have old style headers.  If not set,
              this message is guaranteed to have new style headers (i.e.,
              commas instead of spaces between addresses).  If set, an
              adaptive algorithm is used that will correctly determine the
              header format in most cases.

       QueueDirectory=queuedir
              Select the directory in which to queue messages.

       StatusFile=file
              Save statistics in the named file.

       Timeout.queuereturn=time
              Set the timeout on undelivered messages in the queue to the
              specified time.  After delivery has failed (e.g., because of a
              host being down) for this amount of time, failed messages will
              be returned to the sender.  The default is five days.

       UserDatabaseSpec=userdatabase
              If set, a user database is consulted to get forwarding
              information.  You can consider this an adjunct to the aliasing
              mechanism, except that the database is intended to be
              distributed; aliases are local to a particular host.  This may
              not be available if your sendmail does not have the USERDB
              option compiled in.

       ForkEachJob
              Fork each job during queue runs.  May be convenient on memory-
              poor machines.

       SevenBitInput
              Strip incoming messages to seven bits.

       EightBitMode=mode
              Set the handling of eight bit input to seven bit destinations to
              mode: m (mimefy) will convert to seven-bit MIME format, p (pass)
              will pass it as eight bits (but violates protocols), and s
              (strict) will bounce the message.

       MinQueueAge=timeout
              Sets how long a job must ferment in the queue between attempts
              to send it.

       DefaultCharSet=charset
              Sets the default character set used to label 8-bit data that is
              not otherwise labelled.

       NoRecipientAction=action
              Set the behaviour when there are no recipient headers (To:, Cc:
              or Bcc:) in the message to action: none leaves the message
              unchanged, add-to adds a To: header with the envelope
              recipients, add-apparently-to adds an Apparently-To: header with
              the envelope recipients, add-bcc adds an empty Bcc: header, and
              add-to-undisclosed adds a header reading `To: undisclosed-
              recipients:;'.

       MaxDaemonChildren=N
              Sets the maximum number of children that an incoming SMTP daemon
              will be allowed to spawn at any time to N.

       ConnectionRateThrottle=N
              Sets the maximum number of connections per second to the SMTP
              port to N.

       In aliases, the first character of a name may be a vertical bar to
       cause interpretation of the rest of the name as a command to pipe the
       mail to.  It may be necessary to quote the name to keep sendmail from
       suppressing the blanks from between arguments.  For example, a common
       alias is:

              msgs: "|/usr/bin/msgs -s"

       Aliases may also have the syntax ``:include:filename'' to ask sendmail
       to read the named file for a list of recipients.  For example, an alias
       such as:

              poets: ":include:/usr/local/lib/poets.list"

       would read /usr/local/lib/poets.list for the list of addresses making
       up the group.

       Sendmail returns an exit status describing what it did.  The codes are
       defined in <sysexits.h>:

       EX_OK  Successful completion on all addresses.

       EX_NOUSER
              User name not recognized.

       EX_UNAVAILABLE
              Catchall meaning necessary resources were not available.

       EX_SYNTAX
              Syntax error in address.

       EX_SOFTWARE
              Internal software error, including bad arguments.

       EX_OSERR
              Temporary operating system error, such as ``cannot fork''.

       EX_NOHOST
              Host name not recognized.

       EX_TEMPFAIL
              Message could not be sent immediately, but was queued.

       If invoked as newaliases, sendmail will rebuild the alias database.  If
       invoked as mailq, sendmail will print the contents of the mail queue.
       If invoked as hoststat, sendmail will print the persistent host status
       database.  If invoked as purgestat, sendmail will purge expired entries
       from the persistent host status database.  If invoked as smtpd,
       sendmail will act as a daemon, as if the -bd option were specified.

# /NOTES

       sendmail often gets blamed for many problems that are actually the
       result of other problems, such as overly permissive modes on
       directories.  For this reason, sendmail checks the modes on system
       directories and files to determine if they can be trusted.  Although
       these checks can be turned off and your system security reduced by
       setting the DontBlameSendmail option, the permission problems should be
       fixed.  For more information, see the Sendmail Installation and
       Operation Guide

# /FILES

       Except for the file /etc/mail/sendmail.cf itself the following
       pathnames are all specified in /etc/mail/sendmail.cf.  Thus, these
       values are only approximations.

        /etc/mail/aliases
              raw data for alias names

        /etc/mail/aliases.db
              data base of alias names

        /etc/mail/sendmail.cf
              configuration file

        /etc/mail/helpfile
              help file

        /var/lib/sendmail/sendmail.st
              collected statistics

        /var/spool/mqueue/*
              temp files

# /SEE ALSO

       binmail(1), mail(1), rmail(1), syslog(3), aliases(5), mailaddr(7),
       rc(8)

       DARPA Internet Request For Comments RFC819, RFC821, RFC822.  Sendmail
       Installation and Operation Guide, No. 8, SMM.

       http://www.sendmail.org/

       US Patent Numbers 6865671, 6986037.

# /HISTORY

       The sendmail command appeared in 4.2BSD.

                         $Date: 2013-11-22 20:51:56 $              SENDMAIL(8)
