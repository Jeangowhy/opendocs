CAT(1)                           User Commands                          CAT(1)

NAME

       cat - concatenate files and print on the standard output

SYNOPSIS

       cat [OPTION]... [FILE]...

DESCRIPTION

       Concatenate FILE(s) to standard output.

       With no FILE, or when FILE is -, read standard input.

       -A, --show-all
              equivalent to -vET

       -b, --number-nonblank
              number nonempty output lines, overrides -n

       -e     equivalent to -vE

       -E, --show-ends
              display $ at end of each line

       -n, --number
              number all output lines

       -s, --squeeze-blank
              suppress repeated empty output lines

       -t     equivalent to -vT

       -T, --show-tabs
              display TAB characters as ^I

       -u     (ignored)

       -v, --show-nonprinting
              use ^ and M- notation, except for LFD and TAB

       --help display this help and exit

       --version
              output version information and exit

EXAMPLES

       cat f - g
              Output f's contents, then standard input, then g's contents.

       cat    Copy standard input to standard output.

AUTHOR

       Written by Torbjorn Granlund and Richard M. Stallman.

REPORTING BUGS

       GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
       Report any translation bugs to <https://translationproject.org/team/>

COPYRIGHT

       Copyright (C) 2020 Free Software Foundation, Inc.  License GPLv3+: GNU
       GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
       This is free software: you are free to change and redistribute it.
       There is NO WARRANTY, to the extent permitted by law.

SEE ALSO

       tac(1)

       Full documentation <https://www.gnu.org/software/coreutils/cat>
       or available locally via: info '(coreutils) cat invocation'

GNU coreutils 8.32               November 2022                          CAT(1)
