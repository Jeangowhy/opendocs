DU(1)                                                                      User Commands                                                                     DU(1)

NAME

       du - estimate file space usage

SYNOPSIS

       du [OPTION]... [FILE]...
       du [OPTION]... --files0-from=F

DESCRIPTION

       Summarize disk usage of the set of FILEs, recursively for directories.

       Mandatory arguments to long options are mandatory for short options too.

       -0, --null
              end each output line with NUL, not newline

       -a, --all
              write counts for all files, not just directories

       --apparent-size
              print  apparent sizes, rather than disk usage; although the apparent size is usually smaller, it may be larger due to holes in ('sparse') files, in‐
              ternal fragmentation, indirect blocks, and the like

       -B, --block-size=SIZE
              scale sizes by SIZE before printing them; e.g., '-BM' prints sizes in units of 1,048,576 bytes; see SIZE format below

       -b, --bytes
              equivalent to '--apparent-size --block-size=1'

       -c, --total
              produce a grand total

       -D, --dereference-args
              dereference only symlinks that are listed on the command line

       -d, --max-depth=N
              print the total for a directory (or file, with --all) only if it is N or fewer levels below the command line argument;  --max-depth=0 is the same as
              --summarize

       --files0-from=F
              summarize disk usage of the NUL-terminated file names specified in file F; if F is -, then read names from standard input

       -H     equivalent to --dereference-args (-D)

       -h, --human-readable
              print sizes in human readable format (e.g., 1K 234M 2G)

       --inodes
              list inode usage information instead of block usage

       -k     like --block-size=1K

       -L, --dereference
              dereference all symbolic links

       -l, --count-links
              count sizes many times if hard linked

       -m     like --block-size=1M

       -P, --no-dereference
              don't follow any symbolic links (this is the default)

       -S, --separate-dirs
              for directories do not include size of subdirectories

       --si   like -h, but use powers of 1000 not 1024

       -s, --summarize
              display only a total for each argument

       -t, --threshold=SIZE
              exclude entries smaller than SIZE if positive, or entries greater than SIZE if negative

       --time show time of the last modification of any file in the directory, or any of its subdirectories

       --time=WORD
              show time as WORD instead of modification time: atime, access, use, ctime or status

       --time-style=STYLE
              show times using STYLE, which can be: full-iso, long-iso, iso, or +FORMAT; FORMAT is interpreted like in 'date'

       -X, --exclude-from=FILE
              exclude files that match any pattern in FILE

       --exclude=PATTERN
              exclude files that match PATTERN, this option can be used repeatedly.

       -x, --one-file-system
              skip directories on different file systems

       --help display this help and exit

       --version
              output version information and exit

       Display  values  are in units of the first available SIZE from --block-size, and the DU_BLOCK_SIZE, BLOCK_SIZE and BLOCKSIZE environment variables.  Other‐
       wise, units default to 1024 bytes (or 512 if POSIXLY_CORRECT is set).

       The SIZE argument is an integer and optional unit (example: 10K is 10*1024).  Units are K,M,G,T,P,E,Z,Y (powers of 1024) or KB,MB,... (powers of 1000).

PATTERNS
       PATTERN is a shell pattern (not a regular expression).  The pattern ? matches any one character, whereas * matches any string (composed  of  zero,  one  or
       multiple characters).  For example, *.o will match any files whose names end in .o.  Therefore, the command

              du --exclude='*.o'

       will skip all files and subdirectories ending in .o (including the file .o itself).

AUTHOR
       Written by Torbjorn Granlund, David MacKenzie, Paul Eggert, and Jim Meyering.

REPORTING BUGS
       GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
       Report du translation bugs to <https://translationproject.org/team/>

COPYRIGHT
       Copyright © 2018 Free Software Foundation, Inc.  License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
       This is free software: you are free to change and redistribute it.  There is NO WARRANTY, to the extent permitted by law.

SEE ALSO
       Full documentation at: <https://www.gnu.org/software/coreutils/du>
       or available locally via: info '(coreutils) du invocation'

GNU coreutils 8.30                                                        September 2019                                                                     DU(1)
