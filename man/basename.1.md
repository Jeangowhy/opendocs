BASENAME(1)                      User Commands                     BASENAME(1)

NAME
       basename - strip directory and suffix from filenames

SYNOPSIS
       basename NAME [SUFFIX]
       basename OPTION... NAME...

DESCRIPTION
       Print NAME with any leading directory components removed.  If
       specified, also remove a trailing SUFFIX.

       Mandatory arguments to long options are mandatory for short options
       too.

       -a, --multiple
              support multiple arguments and treat each as a NAME

       -s, --suffix=SUFFIX
              remove a trailing SUFFIX; implies -a

       -z, --zero
              end each output line with NUL, not newline

       --help display this help and exit

       --version
              output version information and exit

EXAMPLES
       basename /usr/bin/sort
              -> "sort"

       basename include/stdio.h .h
              -> "stdio"

       basename -s .h include/stdio.h
              -> "stdio"

       basename -a any/str1 any/str2
              -> "str1" followed by "str2"

AUTHOR
       Written by David MacKenzie.

REPORTING BUGS
       GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
       Report basename translation bugs to
       <https://translationproject.org/team/>

COPYRIGHT
       Copyright © 2018 Free Software Foundation, Inc.  License GPLv3+: GNU
       GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
       This is free software: you are free to change and redistribute it.
       There is NO WARRANTY, to the extent permitted by law.

SEE ALSO
       dirname(1), readlink(1)

       Full documentation at:
       <https://www.gnu.org/software/coreutils/basename>
       or available locally via: info '(coreutils) basename invocation'

GNU coreutils 8.30              September 2019                     BASENAME(1)
