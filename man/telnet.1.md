TELNET(1)                                    User Commands                                    TELNET(1)

NAME
       telnet - User interface to TELNET

SYNOPSIS
       telnet [OPTION...] [HOST [PORT]]

DESCRIPTION
       Login to remote system HOST (optionally, on service port PORT)

              General options:

       -4, --ipv4
              use only IPv4

       -6, --ipv6
              use only IPv6

       -8, --binary
              use an 8-bit data transmission

       -a, --login
              attempt automatic login

       -b, --bind=ADDRESS
              bind to specific local ADDRESS

       -c, --no-rc
              do not read the user's .telnetrc file

       -d, --debug
              turn on debugging

       -e, --escape=CHAR
              use CHAR as an escape character

       -E, --no-escape
              use no escape character

       -K, --no-login
              do not automatically login to the remote system

       -l, --user=USER
              attempt automatic login as USER

       -L, --binary-output
              use an 8-bit data transmission for output only

       -n, --trace=FILE
              record trace information into FILE

       -r, --rlogin
              use a user-interface similar to rlogin

       -?, --help
              give this help list

       --usage
              give a short usage message

       -V, --version
              print program version

       Mandatory  or  optional  arguments to long options are also mandatory or optional for any corre-
       sponding short options.

AUTHOR
       Written by many authors.

REPORTING BUGS
       Report bugs to <bug-inetutils@gnu.org>.

COPYRIGHT
       Copyright (C) 2022 Free Software Foundation, Inc.  License GPLv3+: GNU GPL version  3  or  later
       <https://gnu.org/licenses/gpl.html>.
       This is free software: you are free to change and redistribute it.  There is NO WARRANTY, to the
       extent permitted by law.

SEE ALSO
       telnetd(1)

       The  full  documentation  for  telnet is maintained as a Texinfo manual.  If the info and telnet
       programs are properly installed at your site, the command

              info telnet

       should give you access to the complete manual.

GNU inetutils 2.4                             October 2022                                    TELNET(1)
