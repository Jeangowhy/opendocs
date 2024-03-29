PRINTF(1)                        User Commands                       PRINTF(1)

NAME

    printf - format and print data

# /SYNOPSIS

    printf FORMAT [ARGUMENT]...
    printf OPTION

# /DESCRIPTION
   Print ARGUMENT(s) according to FORMAT, or execute according to OPTION:

   --help display this help and exit

   --version
          output version information and exit

   FORMAT controls the output as in C printf.  Interpreted sequences are:

   \"     double quote

   \\     backslash

   \a     alert (BEL)

   \b     backspace

   \c     produce no further output

   \e     escape

   \f     form feed

   \n     new line

   \r     carriage return

   \t     horizontal tab

   \v     vertical tab

   \NNN   byte with octal value NNN (1 to 3 digits)

   \xHH   byte with hexadecimal value HH (1 to 2 digits)

   \uHHHH Unicode (ISO/IEC 10646) character with hex value HHHH (4 digits)

   \UHHHHHHHH
          Unicode character with hex value HHHHHHHH (8 digits)

   %%     a single %

   %b     ARGUMENT as a string with '\' escapes interpreted, except that
          octal escapes are of the form \0 or \0NNN

   %q     ARGUMENT is printed in a format that can be reused as shell
          input, escaping non-printable characters with the proposed POSIX
          $'' syntax.

   and all C format specifications ending with one of diouxXfeEgGcs, with
   ARGUMENTs converted to proper type first.  Variable widths are handled.

   NOTE: your shell may have its own version of printf, which usually
   supersedes the version described here.  Please refer to your shell's
   documentation for details about the options it supports.

# /AUTHOR
   Written by David MacKenzie.

# /REPORTING BUGS
   GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
   Report printf translation bugs to
   <https://translationproject.org/team/>

# /COPYRIGHT
   Copyright © 2018 Free Software Foundation, Inc.  License GPLv3+: GNU
   GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
   This is free software: you are free to change and redistribute it.
   There is NO WARRANTY, to the extent permitted by law.

# /SEE ALSO
   printf(3)

   Full documentation at: <https://www.gnu.org/software/coreutils/printf>
   or available locally via: info '(coreutils) printf invocation'

GNU coreutils 8.30              September 2019                       PRINTF(1)
