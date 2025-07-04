TEE(1)                           User Commands                          TEE(1)

# /NAME

       tee - read from standard input and write to standard output and files

# /SYNOPSIS

       tee [OPTION]... [FILE]...

# /DESCRIPTION

       Copy standard input to each FILE, and also to standard output.

       -a, --append
              append to the given FILEs, do not overwrite

       -i, --ignore-interrupts
              ignore interrupt signals

       -p     diagnose errors writing to non pipes

       --output-error[=MODE]
              set behavior on write error.  See MODE below

       --help display this help and exit

       --version
              output version information and exit

   MODE determines behavior with write errors on the outputs:
       'warn' diagnose errors writing to any output

       'warn-nopipe'
              diagnose errors writing to any output not a pipe

       'exit' exit on error writing to any output

       'exit-nopipe'
              exit on error writing to any output not a pipe

       The default MODE for the -p option is 'warn-nopipe'.  The default
       operation when --output-error is not specified, is to exit immediately
       on error writing to a pipe, and diagnose errors writing to non pipe
       outputs.

# /AUTHOR

       Written by Mike Parker, Richard M. Stallman, and David MacKenzie.

# /REPORTING BUGS

       GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
       Report any translation bugs to <https://translationproject.org/team/>

# /COPYRIGHT

       Copyright (C) 2020 Free Software Foundation, Inc.  License GPLv3+: GNU
       GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
       This is free software: you are free to change and redistribute it.
       There is NO WARRANTY, to the extent permitted by law.

# /SEE ALSO

       Full documentation <https://www.gnu.org/software/coreutils/tee>
       or available locally via: info '(coreutils) tee invocation'

GNU coreutils 8.32               November 2022                          TEE(1)
