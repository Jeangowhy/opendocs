LOADKEYS(1)          General Commands Manual         LOADKEYS(1)

NAME
       loadkeys - load keyboard translation tables

SYNOPSIS
       loadkeys  [  -a  --ascii  ]  [  [  -b  --bkeymap  ]  [ -c
       --clearcompose ] [ -C '<FILE>' | --console=<FILE> ] [  -d
       --default ] [ -h --help ] [ -m --mktable ] [ -p --parse ]
       [ -q --quiet ] [ -s --clearstrings ] [ -u --unicode  ]  [
       -v --verbose ] [ -V --version ] [ filename...  ]

DESCRIPTION
       The program loadkeys reads the file or files specified by
       filename....  Its main purpose  is  to  load  the  kernel
       keymap  for  the console.  You can specify console device
       by the -C (or --console ) option.

RESET TO DEFAULT
       If the -d (or --default ) option is given, loadkeys loads
       a  default keymap, probably the file defkeymap.map either
       in /usr/share/keymaps or in  /usr/src/linux/drivers/char.
       (Probably  the  former was user-defined, while the latter
       is a qwerty keyboard map for PCs - maybe not what was de‐
       sired.)   Sometimes,  with  a strange keymap loaded (with
       the minus on some obscure unknown  modifier  combination)
       it is easier to type `loadkeys defkeymap'.

LOAD KERNEL KEYMAP
       The  main  function  of loadkeys is to load or modify the
       keyboard driver's translation  tables.   When  specifying
       the  file  names,  standard  input can be denoted by dash
       (-). If no file is specified, the data is read  from  the
       standard input.

       For many countries and keyboard types appropriate keymaps
       are available already, and a command like  `loadkeys  uk'
       might  do what you want. On the other hand, it is easy to
       construct one's own keymap. The user  has  to  tell  what
       symbols  belong to each key. She can find the keycode for
       a key by use of showkey(1), while the  keymap  format  is
       given  in keymaps(5) and can also be seen from the output
       of dumpkeys(1).

LOAD KERNEL ACCENT TABLE
       If the input file does not contain any compose key  defi‐
       nitions,  the  kernel accent table is left unchanged, un‐
       less the -c (or --clearcompose  )  option  is  given,  in
       which  case  the  kernel accent table is emptied.  If the
       input file does contain compose key definitions, then all
       old  definitions  are removed, and replaced by the speci‐
       fied new entries.  The kernel accent table is a  sequence
       of  (by default 68) entries describing how dead diacriti‐
       cal signs and compose keys behave.  For example, a line

              compose ',' 'c' to ccedilla

       means  that  <ComposeKey><,><c>  must  be   combined   to
       <ccedilla>.  The current content of this table can be see
       using `dumpkeys --compose-only'.

LOAD KERNEL STRING TABLE
       The option -s (or  --clearstrings  )  clears  the  kernel
       string  table. If this option is not given, loadkeys will
       only add or replace strings, not remove them.  (Thus, the
       option  -s  is  required  to reach a well-defined state.)
       The kernel string table is a  sequence  of  strings  with
       names like F31. One can make function key F5 (on an ordi‐
       nary PC keyboard) produce the text `Hello!', and Shift+F5
       `Goodbye!' using lines

              keycode 63 = F70 F71
              string F70 = "Hello!"
              string F71 = "Goodbye!"

       in  the  keymap.   The  default bindings for the function
       keys are certain escape sequences mostly inspired by  the
       VT100 terminal.

CREATE KERNEL SOURCE TABLE
       If the -m (or --mktable ) option is given loadkeys prints
       to the standard  output  a  file  that  may  be  used  as
       /usr/src/linux/drivers/char/defkeymap.c,  specifying  the
       default key bindings for a kernel (and  does  not  modify
       the current keymap).

CREATE BINARY KEYMAP
       If the -b (or --bkeymap ) option is given loadkeys prints
       to the standard output a file that may be used as  a  bi‐
       nary  keymap as expected by Busybox loadkmap command (and
       does not modify the current keymap).

UNICODE MODE
       loadkeys automatically detects whether the console is  in
       Unicode  or ASCII (XLATE) mode.  When a keymap is loaded,
       literal keysyms (such as section)  are  resolved  accord‐
       ingly; numerical keysyms are converted to fit the current
       console mode, regardless of the way  they  are  specified
       (decimal, octal, hexadecimal or Unicode).

       The  -u  (or --unicode) switch forces loadkeys to convert
       all keymaps to Unicode.  If the keyboard is in a non-Uni‐
       code mode, such as XLATE, loadkeys will change it to Uni‐
       code for the time of its execution.   A  warning  message
       will be printed in this case.

       It  is recommended to run kbd_mode(1) before loadkeys in‐
       stead of using the -u option.

OTHER OPTIONS
       -a --ascii
              Force conversion to ASCII.

       -h --help
              loadkeys prints its version number and a short us‐
              age  message to the programs standard error output
              and exits.

       -p --parse
              loadkeys searchs and parses keymap without action.

       -q --quiet
              loadkeys suppresses all normal output.

       -V --version
              loadkeys prints version number and exits.

WARNING
       Note that anyone having read access to  /dev/console  can
       run  loadkeys and thus change the keyboard layout, possi‐
       bly making it unusable. Note that the  keyboard  transla‐
       tion table is common for all the virtual consoles, so any
       changes to the keyboard bindings affect all  the  virtual
       consoles simultaneously.

       Note that because the changes affect all the virtual con‐
       soles, they also outlive your session.  This  means  that
       even at the login prompt the key bindings may not be what
       the user expects.

FILES
       /usr/share/keymaps
              default directory for keymaps

       /usr/src/linux/drivers/char/defkeymap.map
              default kernel keymap

SEE ALSO
       dumpkeys(1), keymaps(5)

                           6 Feb 1994               LOADKEYS(1)
