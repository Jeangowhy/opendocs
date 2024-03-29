MAIL(1)                     General Commands Manual                    MAIL(1)

```sh
manual_debian()
{
    man="./$(basename $1)"
    out="$2"

    man_url="https://dyn.manpages.debian.org/testing/$1"
    # https://manpages.debian.org/testing/bsd-mailx/Mail.1.en.gz
    # https://manpages.debian.org/testing/bsd-mailx/Mail.1.en.html

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
manual_debian 'sendmail-bin/sendmail.8.en.gz' '/c/opendocs/man/sendmail.1.md'
```

# /NAME

       mail, mailx, Mail -- send and receive mail

# /SYNOPSIS

       mail [-dEIinv] [-a header] [-b bcc-addr] [-c cc-addr] [-r from-addr]
            [-s subject] [--] to-addr ...
       mail [-dEIiNnv] -f [file]
       mail [-dEIiNnv] [-u user]

# /DESCRIPTION

       mail is an intelligent mail processing system which has a command
       syntax reminiscent of ed(1) with lines replaced by messages.

       The options are as follows:

       -a      Specify additional header fields on the command line such as
               "X-Loop: foo@bar" etc.  It can be also used to override MIME
               headers mail adds by default to each outgoing mail, see
               "Character sets and MIME" below.  You have to use quotes if the
               string contains spaces.  This argument may be specified more
               than once, the headers will then be concatenated.

       -b bcc-addr
               Send blind carbon copies to bcc-addr.

       -c cc-addr
               Send carbon copies to list of users.  cc-addr should be a comma
               separated list of names.

       -d      Causes mail to output all sorts of information useful for
               debugging mail.

       -E      Don't send messages with an empty body.

       -f      Use an alternate mailbox.  Defaults to the user's mbox if no
               file is specified.  When quit, mail writes undeleted messages
               back to this file.

       -I      Forces mail to run in interactive mode, even when input is not
               a terminal.  In particular, the special ~ command character,
               used when sending mail, is only available interactively.

       -i      Ignore tty interrupt signals.  This is particularly useful when
               using mail on noisy phone lines.

       -N      Inhibits initial display of message headers when reading mail
               or editing a mail folder.

       -n      Inhibits reading /etc/mail.rc upon startup.

       -r from-addr
               Use from-addr as the from address in the message and envelope.
               Overrides any from options in the startup files.

       -s subject
               Specify subject on command line (only the first argument after
               the -s flag is used as a subject; be careful to quote subjects
               containing spaces).

       -u user
               Equivalent to:

                     $ mail -f /var/mail/user

               except that locking is done.

       -v      Verbose mode.  The details of delivery are displayed on the
               user's terminal.

       --      End of options. Any further argument is treated as a direct
               receipient address.

               Note: For security reasons the -- separator is strongly
               recommended for scripts that need to send mails to addresses
               obtained from untrusted sources (such as web forms).

## //Startup actions

       At startup time, mail will execute commands in the system command file,
       /etc/mail.rc, unless explicitly told not to by using the -n option.
       Next, the commands in the user's personal command file ~/.mailrc are
       executed.  mail then examines its command line options to determine
       whether the user requested a new message to be sent or existing
       messages in a mailbox to be examined.

## //Sending mail

       To send a message to one or more people, mail can be invoked with
       arguments which are the names of people to whom the mail will be sent.
       You are then expected to type in your message, followed by a control-D
       (`^D') at the beginning of a line.  The section below, "Replying to or
       originating mail", describes some features of mail available to help
       you compose your letter.

## //Reading mail

       In normal usage, mail is given no arguments and checks your mail out of
       the post office, then prints out a one line header of each message
       found.  The current message is initially set to the first message
       (numbered 1) and can be printed using the print command (which can be
       abbreviated p).  Moving among the messages is much like moving between
       lines in ed(1); you may use + and - to shift forwards and backwards, or
       simply enter a message number to move directly.

## //Disposing of mail

       After examining a message, you can delete (d) or reply (r) to it.
       Deletion causes the mail program to forget about the message.  This is
       not irreversible; the message can be undeleted (u) by giving its
       number, or the mail session can be aborted by giving the exit (x)
       command.  Deleted messages, however, will usually disappear, never to
       be seen again.

## //Specifying messages

       Commands such as print and delete can be given a list of message
       numbers as arguments to apply to a number of messages at once.  Thus
       delete 1 2 deletes messages 1 and 2, while delete 1-5 deletes messages
       1 through 5.

       Messages may also be selected using one of the following categories:

             *       all messages
             $       last message
             :d      deleted messages
             :n      new messages
             :o      old messages
             :r      read messages
             :u      unread messages

       Thus the command top, which prints the first few lines of a message,
       could be used in top * to print the first few lines of all messages.

## //Replying to or originating mail

       You can use the reply command to set up a response to a message,
       sending it back to the person who it was from.  Text you then type in,
       up to an end-of-file, defines the contents of the message.  While you
       are composing a message, mail treats lines beginning with the tilde
       (`~') character specially.  For instance, typing ~m (alone on a line)
       will place a copy of the current message into the response, right
       shifting it by a single tab-stop (see the indentprefix variable,
       below).  Other escapes will set up subject fields, add and delete
       recipients to the message, and allow you to escape to an editor to
       revise the message or to a shell to run some commands.  (These options
       are given in the summary below.)

## //Ending a mail processing session

       You can end a mail session with the quit (q) command.  Messages which
       have been examined go to your mbox file unless they have been deleted,
       in which case they are discarded.  Unexamined messages go back to the
       post office (see the -f option above).

## //Personal and system wide distribution lists

       It is also possible to create personal distribution lists so that, for
       instance, you can send mail to "cohorts" and have it go to a group of
       people.  Such lists can be defined by placing a line like

             alias cohorts bill ozalp jkf mark kridle@ucbcory

       in the file .mailrc in your home directory.  The current list of such
       aliases can be displayed with the alias command in mail.  System wide
       distribution lists can be created by editing /etc/aliases, (see
       aliases(5)); these are kept in a different syntax.  In mail you send,
       personal aliases will be expanded in mail sent to others so that they
       will be able to reply to the recipients.  System wide aliases are not
       expanded when the mail is sent, but any reply returned to the machine
       will have the system wide alias expanded as all mail goes through an
       MTA.

## //Recipient address specifications

       Recipient addresses (any of the "To", "Cc" or "Bcc" header fields) are
       subject to expansion when the expandaddr option is set.

       An address may be expanded as follows:

       o       An address that starts with a pipe (`|') character is treated
               as a command to run.  The command immediately following the `|'
               is executed with the message as its standard input.

       o       An address that starts with a `+' character is treated as a
               folder.

       o       An address that contains a `/' character but no `!', `%', or
               `@' characters is also treated as a folder.

       o       If none of the above apply, the recipient is treated as a local
               or network mail address.

       If the expandaddr option is not set (the default), no expansion is
       performed and the recipient is treated as a local or network mail
       address.

## //Character sets and MIME

       Generally mail does not handle neither different character sets nor any
       other MIME feature.  Especially it does not perform any any conversions
       between character sets while displaying or sending mails.

       Starting from April 2017, however, as a Debian extension this version
       of mail adds a few MIME headers to every outgoing mail in order to
       indicate that the mail is sent as 8-bit plain text data that uses
       character set encoding detected from the current locale(7) settings.
       The -a command-line option can be used to override those headers, for
       example:
             $ mail -a 'Content-Type: text/plain; charset="ISO-8859-1"'
       sets header indicating legacy character encoding.

# /SUMMARY

       (Adapted from the "Mail Reference Manual".)

       Each command is typed on a line by itself, and may take arguments
       following the command word.  The command need not be typed in its
       entirety -- the first command which matches the typed prefix is used.
       For commands which take message lists as arguments, if no message list
       is given, then the next message forward which satisfies the command's
       requirements is used.  If there are no messages forward of the current
       message, the search proceeds backwards, and if there are no good
       messages at all, mail types "No applicable messages" and aborts the
       command.

       -       Print out the preceding message.  If given a numeric argument
               n, goes to the nth previous message and prints it.

       =       Prints the currently selected message number.

       ?       Prints a brief summary of commands.

       !       Executes the shell (see sh(1) and csh(1)) command which
               follows.

       alias   (a) With no arguments, prints out all currently defined
               aliases.  With one argument, prints out that alias.  With more
               than one argument, creates a new alias or changes an old one.

       alternates
               (alt) The alternates command is useful if you have accounts on
               several machines.  It can be used to inform mail that the
               listed addresses are really you.  When you reply to messages,
               mail will not send a copy of the message to any of the
               addresses listed on the alternates list.  If the alternates
               command is given with no argument, the current set of alternate
               names is displayed.

       chdir   (cd or ch) Changes the user's working directory to that
               specified, if given.  If no directory is given, then changes to
               the user's login directory.

       copy    (c) The copy command does the same thing that save does, except
               that it does not mark the messages it is used on for deletion
               when you quit.

       delete  (d) Takes a list of messages as argument and marks them all as
               deleted.  Deleted messages will not be saved in mbox, nor will
               they be available for most other commands.

       dp      (also dt) Deletes the current message and prints the next
               message.  If there is no next message, mail says "No more
               messages."

       edit    (e) Takes a list of messages and points the text editor at each
               one in turn.  On return from the editor, the message is read
               back in.

       exit    (ex or x) Effects an immediate return to the shell without
               modifying the user's system mailbox, mbox file, or edit file in
               -f.

       file    (fi) The same as folder.

       folder  (fo) The folder command switches to a new mail file or folder.
               With no arguments, it tells you which file you are currently
               reading.  If you give it an argument, it will write out changes
               (such as deletions) you have made in the current file and read
               in the new file.  Some special conventions are recognized for
               the name.  # means the previous file, % means your system
               mailbox, %user means user's system mailbox, & means your mbox
               file, and +folder means a file in your folder directory.

       folders
               List the names of the folders in your folder directory.

       from    (f) Takes a list of messages and prints their message headers.

       headers
               (h) Lists the current windowful of headers.  To view the next
               or previous group of headers, see the z command.

       help    A synonym for ?.

       hold    (ho, also preserve) Takes a message list and marks each message
               therein to be saved in the user's system mailbox instead of in
               mbox.  Does not override the delete command.

       ignore  Add the list of header fields named to the ignored list.
               Header fields in the ignore list are not printed on your
               terminal when you print a message.  This command is very handy
               for suppression of certain machine-generated header fields.
               The Type and Print commands can be used to print a message in
               its entirety, including ignored fields.  If ignore is executed
               with no arguments, it lists the current set of ignored fields.

       inc     Incorporate any new messages that have arrived while mail is
               being read.  The new messages are added to the end of the
               message list, and the current message is reset to be the first
               new mail message.  This does not renumber the existing message
               list, nor does it cause any changes made so far to be saved.

       list    (l) List the valid mail commands.

       mail    (m) Takes as argument login names and distribution group names
               and sends mail to those people.

       mbox    Indicate that a list of messages be sent to mbox in your home
               directory when you quit.  This is the default action for
               messages if you do not have the hold option set.

       more    (mo) Takes a message list and invokes the pager on that list.

       next    (n) (like + or CR) Goes to the next message in sequence and
               types it.  With an argument list, types the next matching
               message.

       preserve
               (pre) A synonym for hold.

       Print   (P) Like print but also prints out ignored header fields.  See
               also print, ignore, and retain.

       print   (p) Takes a message list and types out each message on the
               user's terminal.

       quit    (q) Terminates the session, saving all undeleted, unsaved
               messages in the mbox file in the user's login directory,
               preserving all messages marked with hold or preserve or never
               referenced in the user's system mailbox, and removing all other
               messages from the user's system mailbox.  If new mail has
               arrived during the session, the message "You have new mail" is
               given.  If given while editing a mailbox file with the -f flag,
               then the edit file is rewritten.  A return to the shell is
               effected, unless the rewrite of edit file fails, in which case
               the user can escape with the exit command.

       Reply   (R) Reply to originator.  Does not reply to other recipients of
               the original message.

       reply   (r) Takes a message list and sends mail to the sender and all
               recipients of the specified message.  The default message must
               not be deleted.

       respond
               A synonym for reply.

       retain  Add the list of header fields named to the retained list.  Only
               the header fields in the retain list are shown on your terminal
               when you print a message.  All other header fields are
               suppressed.  The Type and Print commands can be used to print a
               message in its entirety.  If retain is executed with no
               arguments, it lists the current set of retained fields.

       save    (s) Takes a message list and a filename and appends each
               message in turn to the end of the file.  The filename in
               quotes, followed by the line count and character count is
               echoed on the user's terminal.

       saveignore
               saveignore is to save what ignore is to print and type.  Header
               fields thus marked are filtered out when saving a message by
               save or when automatically saving to mbox.

       saveretain
               saveretain is to save what retain is to print and type.  Header
               fields thus marked are the only ones saved with a message when
               saving by save or when automatically saving to mbox.
               saveretain overrides saveignore.

       set     (se) With no arguments, prints all variable values.  Otherwise,
               sets option.  Arguments are of the form option=value (no space
               before or after =) or option.  Quotation marks may be placed
               around any part of the assignment statement to quote blanks or
               tabs, i.e., set indentprefix="->".

       shell   (sh) Invokes an interactive version of the shell.

       size    Takes a message list and prints out the size in characters of
               each message.

       source  The source command reads commands from a file.

       top     Takes a message list and prints the top few lines of each.  The
               number of lines printed is controlled by the variable toplines
               and defaults to five.

       Type    (T) Identical to the Print command.

       type    (t) A synonym for print.

       unalias
               Takes a list of names defined by alias commands and discards
               the remembered groups of users.  The group names no longer have
               any significance.

       undelete
               (u) Takes a message list and marks each message as not being
               deleted.

       unread  (U) Takes a message list and marks each message as not having
               been read.

       unset   Takes a list of option names and discards their remembered
               values; the inverse of set.

       visual  (v) Takes a message list and invokes the display editor on each
               message.

       write   (w) Similar to save, except that only the message body (without
               the header) is saved.  Extremely useful for such tasks as
               sending and receiving source program text over the message
               system.

       xit     (x) A synonym for exit.

       z       mail presents message headers in windowfuls as described under
               the headers command.  You can move mail's attention forward to
               the next window with the z command.  Also, you can move to the
               previous window by using z-.

## //Tilde/escapes

       Here is a summary of the tilde escapes, which are used when composing
       messages to perform special functions.  Tilde escapes are only
       recognized at the beginning of lines.  The name "tilde escape" is
       somewhat of a misnomer since the actual escape character can be set by
       the option escape.

       ~bname ...
               Add the given names to the list of carbon copy recipients but
               do not make the names visible in the Cc: line ("blind" carbon
               copy).

       ~cname ...
               Add the given names to the list of carbon copy recipients.

       ~d      Read the file dead.letter from your home directory into the
               message.

       ~e      Invoke the text editor on the message collected so far.  After
               the editing session is finished, you may continue appending
               text to the message.

       ~Fmessages
               Identical to ~f, except all message headers are included.

       ~fmessages
               Read the named messages into the message being sent.  If no
               messages are specified, read in the current message.  Message
               headers currently being ignored (by the ignore or retain
               command) are not included.

       ~h      Edit the message header fields by typing each one in turn and
               allowing the user to append text to the end or modify the field
               by using the current terminal erase and kill characters.

       ~Mmessages
               Identical to ~m, except all message headers are included.

       ~mmessages
               Read the named messages into the message being sent, indented
               by a tab or by the value of indentprefix.  If no messages are
               specified, read the current message.  Message headers currently
               being ignored (by the ignore or retain command) are not
               included.

       ~p      Print out the message collected so far, prefaced by the message
               header fields.

       ~q      Abort the message being sent, copying the message to
               dead.letter in your home directory if save is set.
       ~Rstring
               Use string as the Reply-To field.

       ~rfilename
       ~<filename
               Read the named file into the message.

       ~sstring
               Cause the named string to become the current subject field.

       ~tname ...
               Add the given names to the direct recipient list.

       ~v      Invoke an alternate editor (defined by the VISUAL option) on
               the message collected so far.  Usually, the alternate editor
               will be a screen editor.  After you quit the editor, you may
               resume appending text to the end of your message.

       ~wfilename
               Write the message onto the named file.

       ~x      Abort the message being sent.  No message is copied to
               ~/dead.letter, even if save is set.

       ~?      Prints a brief summary of tilde escapes.

       ~!command
               Execute the indicated shell command, then return to the
               message.

       ~|command
               Pipe the message through the command as a filter.  If the
               command gives no output or terminates abnormally, retain the
               original text of the message.  The command fmt(1) is often used
               as command to rejustify the message.

       ~:mail-command
       ~_mail-command
               Execute the given mail command.  Not all commands, however, are
               allowed.

       ~~string
               Insert the string of text in the message prefaced by a single
               ~.  If you have changed the escape character, then you should
               double that character in order to send it.

       ~.      Simulate end of file on input.

## //Mail options

       A number of options can be set in the .mailrc file to alter the
       behavior of mail, controlled via the set and unset commands.  Options
       may be either binary, in which case it is only significant to see
       whether they are set or not; or string, in which case the actual value
       is of interest.  The binary options include the following:

       append  Causes messages saved in mbox to be appended to the end rather
               than prepended.  This should always be set (perhaps in
               /etc/mail.rc).

       ask, asksub
               Causes mail to prompt you for the subject of each message you
               send.  If you respond with simply a newline, no subject field
               will be sent.

       askbcc  Causes you to be prompted for additional blind carbon copy
               recipients at the end of each message.  Responding with a
               newline indicates your satisfaction with the current list.

       askcc   Causes you to be prompted for additional carbon copy recipients
               at the end of each message.  Responding with a newline
               indicates your satisfaction with the current list.

       autoinc
               Causes new mail to be automatically incorporated when it
               arrives.  Setting this is similar to issuing the inc command at
               each prompt, except that the current message is not reset when
               new mail arrives.

       autoprint
               Causes the delete command to behave like dp; thus, after
               deleting a message, the next one will be typed automatically.

       debug   Setting the binary option debug is the same as specifying -d on
               the command line and causes mail to output all sorts of
               information useful for debugging mail.

       dot     The binary option dot causes mail to interpret a period alone
               on a line as the terminator of a message you are sending.

       expandaddr
               Causes mail to expand message recipient addresses, as explained
               in the section "Recipient address specifications".

       from    Causes mail to use the specified sender address in the "From:"
               field of the message header.  A stripped down version of the
               address is also used in the message envelope.  If unset, the
               message will not include an explicit sender address and a
               default value will be added by the MTA, typically "user@host".
               This value can be overridden by specifying the -r flag on the
               command line.

       hold    This option is used to hold messages in the system mailbox by
               default.

       ignore  Causes interrupt signals from your terminal to be ignored and
               echoed as @'s.

       ignoreeof
               An option related to dot is ignoreeof which makes mail refuse
               to accept a control-D as the end of a message.  ignoreeof also
               applies to mail command mode.

       keep    Setting this option causes mail to truncate your system mailbox
               instead of deleting it when it's empty.

       keepsave
               Messages saved with the save command are not normally saved in
               mbox at quit time.  Use this option to retain those messages.

       metoo   Usually, when a group is expanded that contains the sender, the
               sender is removed from the expansion.  Setting this option
               causes the sender to be included in the group.

       noheader
               Setting the option noheader is the same as giving the -N flag
               on the command line.

       nosave  Normally, when you abort a message with two interrupt
               characters (usually control-C), mail copies the partial letter
               to the file dead.letter in your home directory.  Setting the
               binary option nosave prevents this.

       quiet   Suppresses the printing of the version when first invoked.

       Replyall
               Reverses the sense of reply and Reply commands.

       searchheaders
               If this option is set, then a message-list specifier in the
               form "/x:y" will expand to all messages containing the
               substring `y' in the header field `x'.  The string search is
               case insensitive.  If `x' is omitted, it will default to the
               "Subject" header field.  The form "/to:y" is a special case,
               and will expand to all messages containing the substring `y' in
               the "To", "Cc" or "Bcc" header fields.  The check for "to" is
               case sensitive, so that "/To:y" can be used to limit the search
               for `y' to just the "To:" field.

       skipempty
               Don't send messages with an empty body.

       verbose
               Setting the option verbose is the same as using the -v flag on
               the command line.  When mail runs in verbose mode, the actual
               delivery of messages is displayed on the user's terminal.

## //Option string values

       EDITOR        Pathname of the text editor to use in the edit command
                     and ~e escape.  If not defined, /usr/bin/ex is used.

       LISTER        Pathname of the directory lister to use in the folders
                     command.  Default is /bin/ls.

       MBOX          The name of the mbox file.  It can be the name of a
                     folder.  The default is "mbox" in the user's home
                     directory.

       PAGER         Pathname of the program to use in the more command or
                     when the crt variable is set.  The default paginator
                     more(1) is used if this option is not defined.

       REPLYTO       If set, will be used to initialize the Reply-To field for
                     outgoing messages.

       SHELL         Pathname of the shell to use in the ! command and the ~!
                     escape.  A default shell is used if this option is not
                     defined.

       VISUAL        Pathname of the text editor to use in the visual command
                     and ~v escape.  If not defined, /usr/bin/vi is used.

       crt           The valued option crt is used as a threshold to determine
                     how long a message must be before PAGER is used to read
                     it.  If crt is set without a value, then the height of
                     the terminal screen stored in the system is used to
                     compute the threshold (see stty(1)).

       escape        If defined, the first character of this option gives the
                     character to use in the place of ~ to denote escapes.

       folder        The name of the directory to use for storing folders of
                     messages.  If this name begins with a `/', mail considers
                     it to be an absolute pathname; otherwise, the folder
                     directory is found relative to your home directory.

       indentprefix  String used by the ~m tilde escape for indenting
                     messages, in place of the normal tab character (`^I').
                     Be sure to quote the value if it contains spaces or tabs.

       record        If defined, gives the pathname of the file used to record
                     all outgoing mail.  If not defined, then outgoing mail is
                     not so saved.

       screen        Size of window of message headers for z.

       sendmail      Pathname to an alternative mail delivery system.

       toplines      If defined, gives the number of lines of a message to be
                     printed out with the top command; normally, the first
                     five lines are printed.

# /ENVIRONMENT

       mail utilizes the HOME, LOGNAME, USER, SHELL, DEAD, PAGER, LISTER,
       EDITOR, VISUAL, REPLYTO, MAIL, MAILRC, and MBOX environment variables.

       If the MAIL environment variable is set, its value is used as the path
       to the user's mail spool.

# /FILES

       /var/mail/*                      post office (unless overridden by the
                                        MAIL environment variable)
       ~/mbox                           user's old mail
       ~/.mailrc                        file giving initial mail commands; can
                                        be overridden by setting the MAILRC
                                        environment variable
       /tmp/R*                          temporary files
       /usr/share/bsd-mailx/mail.*help  help files
       /etc/mail.rc                     system initialization file

# /EXIT STATUS

       The mail utility exits 0 on success, and >0 if an error occurs.

# /SEE ALSO

       fmt(1), newaliases(1), vacation(1), aliases(5), mail.local(8),
       newaliases(8), sendmail(8), smtpd(8)

       Kurt Shoens, "Mail Reference Manual", 4.4BSD User's Supplementary
       Documents (USD).

# /STANDARDS

       The mailx utility is compliant with the IEEE Std 1003.1-2008
       ("POSIX.1") specification.

       The flags [-iNnu] are marked by IEEE Std 1003.1-2008 ("POSIX.1") as
       being optional.

       The flags [-eFH] are marked by IEEE Std 1003.1-2008 ("POSIX.1") as
       being optional, and are not supported by this implementation of mailx.

       The flags [-abcdEIrv] are extensions to the specification.

# /HISTORY

       A mail command appeared in Version 1 AT&T UNIX.  This man page is
       derived from the Mail Reference Manual originally written by Kurt
       Shoens.

# /BUGS

       Usually, Mail and mailx are just links to mail, which can be confusing.

GNU                             March 31, 2022                         MAIL(1)
