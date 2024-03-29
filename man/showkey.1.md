SHOWKEY(1)                  General Commands Manual                 SHOWKEY(1)

# /NAME

   showkey - examine the codes sent by the keyboard

# /SYNOPSIS

    showkey [-h|--help] [-a|--ascii] [-s|--scancodes] [-k|--keycodes]
    [-V|--version]

# /DESCRIPTION

   showkey prints to standard output either the scan codes or the keycode
   or the `ascii' code of each key pressed.  In the first two modes the
   program runs until 10 seconds have elapsed since the last key press or
   release event, or until it receives a suitable signal, like SIGTERM,
   from another process.  In `ascii' mode the program terminates when the
   user types ^D.

   When in scancode dump mode, showkey prints in hexadecimal format each
   byte received from the keyboard to the standard output. A new line is
   printed when an interval of about 0.1 seconds occurs between the bytes
   received, or when the internal receive buffer fills up. This can be
   used to determine roughly, what byte sequences the keyboard sends at
   once on a given key press. The scan code dumping mode is primarily
   intended for debugging the keyboard driver or other low level
   interfaces. As such it shouldn't be of much interest to the regular
   end-user. However, some modern keyboards have keys or buttons that
   produce scancodes to which the kernel does not associate a keycode,
   and, after finding out what these are, the user can assign keycodes
   with setkeycodes(8).

   When in the default keycode dump mode, showkey prints to the standard
   output the keycode number or each key pressed or released. The kind of
   the event, press or release, is also reported.  Keycodes are numbers
   assigned by the kernel to each individual physical key. Every key has
   always only one associated keycode number, whether the keyboard sends
   single or multiple scan codes when pressing it. Using showkey in this
   mode, you can find out what numbers to use in your personalized keymap
   files.

   When in `ascii' dump mode, showkey prints to the standard output the
   decimal, octal, and hexadecimal value(s) of the key pressed, according
   to he present keymap.

# /OPTIONS

   -h --help
          showkey prints to the standard error output its version number,
          a compile option and a short usage message, then exits.

   -s --scancodes
          Starts showkey in scan code dump mode.

   -k --keycodes
          Starts showkey in keycode dump mode. This is the default, when
          no command line options are present.

   -a --ascii
          Starts showkey in `ascii' dump mode.

   -V --version
          showkey prints version number and exits.

# /2.6 KERNELS

   In 2.6 kernels key codes lie in the range 1-255, instead of 1-127.  Key
   codes larger than 127 are returned as three bytes of which the low
   order 7 bits are: zero, bits 13-7, and bits 6-0 of the key code.  The
   high order bits are: 0/1 for make/break, 1, 1.

   In 2.6 kernels raw mode, or scancode mode, is not very raw at all.
   Scan codes are first translated to key codes, and when scancodes are
   desired, the key codes are translated back. Various transformations are
   involved, and there is no guarantee at all that the final result
   corresponds to what the keyboard hardware did send. So, if you want to
   know the scan codes sent by various keys it is better to boot a 2.4
   kernel. Since 2.6.9 there also is the boot option atkbd.softraw=0 that
   tells the 2.6 kernel to return the actual scan codes.

# /SEE ALSO

   loadkeys(1), dumpkeys(1), keymaps(5), setkeycodes(8)

                              1 Feb 1998                        SHOWKEY(1)
