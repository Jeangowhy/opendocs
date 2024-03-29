grotty(1)                   General Commands Manual                  grotty(1)

# /Name

   grotty - groff output driver for typewriter-like (terminal) devices

# /Synopsis

    grotty [-dfho] [-i|-r] [-F dir] [file ...]

    grotty -c [-bBdfhouU] [-F dir] [file ...]

    grotty --help

    grotty -v
    grotty --version

# /Description

   The GNU roff TTY ("Teletype") output driver translates the output of
   troff(1) into a form suitable for typewriter-like devices, including
   terminal emulators.  Normally, grotty is invoked by groff(1) when the
   latter is given one of the "-T ascii", "-T latin1", -Tlatin1, or
   "-T utf8" options on systems using ISO character encoding standards, or
   with "-T cp1047" or "-T utf8" on EBCDIC-based hosts.  (In this
   installation, ps is the default output device.)  Use groff's -P option
   to pass any options shown above to grotty.  If no file arguments are
   given, or if file is "-", grotty reads the standard input stream.
   Output is written to the standard output stream.

   By default, grotty emits SGR escape sequences (from ISO 6429, popularly
   called "ANSI escapes") to change text attributes (bold, italic,
   underline, reverse video ["negative image"] and colors).  Devices
   supporting the appropriate sequences can view roff documents using
   eight different background and foreground colors.  Following ISO 6429,
   the following colors are defined in tty.tmac: black, white, red, green,
   blue, yellow, magenta, and cyan.  Unrecognized colors are mapped to the
   default color, which is dependent on the settings of the terminal.
   OSC 8 hyperlinks are produced for these devices.

   In keeping with long-standing practice and the rarity of terminals (and
   emulators) that support oblique or italic fonts, italicized text is
   represented with underlining by default--but see the -i option below.

   SGR and OSC support in pagers
   When paging grotty's output with less(1), the latter program must be
   instructed to pass SGR and OSC sequences through to the device; its -R
   option is one way to achieve this (less version 566 or later is
   required for OSC 8 support).  Consequently, programs like man(1) that
   page roff documents with less must call it with an appropriate option.

   Legacy output format
   The -c option tells grotty to use an output format compatible with
   paper terminals, like the Teletype machines for which roff and nroff
   were first developed but which are no longer in wide use.  SGR escape
   sequences are not emitted; bold, italic, and underlining character
   attributes are thus not manipulated.  Instead, grotty overstrikes,
   representing a bold character c with the sequence "c BACKSPACE c", an
   italic character c with the sequence "_ BACKSPACE c", and bold italics
   with "_ BACKSPACE c BACKSPACE c".  This rendering is inherently
   ambiguous when the character c is itself the underscore.

   The legacy output format can be rendered on a video terminal (or
   emulator) by piping grotty's output through ul(1), which may render
   bold italics as reverse video.  Some implementations of more(1) are
   also able to display these sequences; you may wish to experiment with
   that command's -b option.  less renders legacy bold and italics without
   requiring options.  In contrast to the terminal output drivers of some
   other roff implementations, grotty never outputs reverse line feeds.
   There is therefore no need to filter its output through col(1).

   Device control commands
   grotty understands one device control function produced by the roff \X
   escape sequence in a document.

   \X'tty: link [uri [key=value] ...]'
          Embed a hyperlink using the OSC 8 terminal escape sequence.
          Specifying uri starts hyperlinked text, and omitting it ends the
          hyperlink.  When uri is present, any number of additional
          key/value pairs can be specified; their interpretation is the
          responsibility of the pager or terminal.  Spaces or tabs cannot
          appear literally in uri, key, or value; they must be represented
          in an alternate form.

   Device description files
   If the DESC file for the character encoding contains the "unicode"
   directive, grotty emits Unicode characters in UTF-8 encoding.
   Otherwise, it emits characters in a single-byte encoding depending on
   the data in the font description files.  See groff_font(5).

   A font description file may contain a directive "internalname n" where
   n is a decimal integer.  If the 01 bit in n is set, then the font is
   treated as an italic font; if the 02 bit is set, then it is treated as
   a bold font.

   Typefaces
   grotty supports the standard four styles: R (roman), I (italic), B
   (bold), and BI (bold-italic).  Because the output driver operates in
   nroff mode, attempts to set or change the font family or type size are
   ignored.

# /Options

   --help displays a usage message, while -v and --version show version
   information; all exit afterward.

   -b     Suppress the use of overstriking for bold characters in legacy
          output format.

   -B     Use only overstriking for bold-italic characters in legacy
          output format.

   -c     Use grotty's legacy output format (see subsection "Legacy output
          format" above).  SGR and OSC escape sequences are not emitted.

   -d     Ignore all \D drawing escape sequences in the input.  By
          default, grotty renders \D'l...' escape sequences that have at
          least one zero argument (and so are either horizontal or
          vertical) using Unicode box drawing characters (for the utf8
          device) or the -, |, and + characters (for all other devices).
          grotty handles \D'p...' escape sequences that consist entirely
          of horizontal and vertical lines similarly.

   -f     Emit a form feed at the end of each page having no output on its
          last line.

   -F dir Prepend directory dir/devname to the search path for font and
          device description files; name describes the output device's
          character encoding, one of ascii, latin1, utf8, or cp1047.

   -h     Use literal horizontal tab characters in the output.  Tabs are
          assumed to be set every 8 columns.

   -i     Render oblique-styled fonts (I and BI) with the SGR attribute
          for italic text rather than underlined text.  Many terminals
          don't support this attribute; however, xterm(1), since
          patch #314 (2014-12-28), does.  Ignored if -c is also specified.

   -o     Suppress overstriking (other than for bold and/or underlined
          characters when the legacy output format is in use).

   -r     Render oblique-styled fonts (I and BI) with the SGR attribute
          for reverse video text rather than underlined text.  Ignored if
          -c or -i is also specified.

   -u     Suppress the use of underlining for italic characters in legacy
          output format.

   -U     Use only underlining for bold-italic characters in legacy output
          format.

# /Environment

   GROFF_FONT_PATH
          A list of directories in which to seek the selected output
          device's directory of device and font description files.  See
          troff(1) and groff_font(5).

   GROFF_NO_SGR
          If set, grotty's legacy output format is used just as if the -c
          option were specified; see subsection "Legacy output format"
          above.

# /Files

   /usr/share/groff/1.23.0/font/devascii/DESC
          describes the ascii output device.

   /usr/share/groff/1.23.0/font/devascii/F
          describes the font known as F on device ascii.

   /usr/share/groff/1.23.0/font/devcp1047/DESC
          describes the cp1047 output device.

   /usr/share/groff/1.23.0/font/devcp1047/F
          describes the font known as F on device cp1047.

   /usr/share/groff/1.23.0/font/devlatin1/DESC
          describes the latin1 output device.

   /usr/share/groff/1.23.0/font/devlatin1/F
          describes the font known as F on device latin1.

   /usr/share/groff/1.23.0/font/devutf8/DESC
          describes the utf8 output device.

   /usr/share/groff/1.23.0/font/devutf8/F
          describes the font known as F on device utf8.

   /usr/share/groff/1.23.0/tmac/tty.tmac
          defines macros for use with the ascii, cp1047, latin1, and utf8
          output devices.  It is automatically loaded by troffrc when any
          of those output devices is selected.

   /usr/share/groff/1.23.0/tmac/tty-char.tmac
          defines fallback characters for use with grotty.  See nroff(1).

# /Limitations

   grotty is intended only for simple documents.

   o There is no support for fractional horizontal or vertical motions.

   o roff \D escape sequences producing anything other than horizontal and
     vertical lines are not supported.

   o Characters above the first line (that is, with a vertical drawing
     position of 0) cannot be rendered.

   o Color handling differs from other output drivers.  The groff requests
     and escape sequences that set the stroke and fill colors instead set
     the foreground and background character cell colors, respectively.

# /Examples

   The following groff document exercises several features for which
   output device support varies: (1) bold style; (2) italic (underline)
   style; (3) bold-italic style; (4) character composition by overstriking
   ("cooperate"); (5) foreground color; (6) background color; and
   (7) horizontal and vertical line-drawing.

          You might see \f[B]bold\f[] and \f[I]italic\f[].
          Some people see \f[BI]both\f[].
          If the output device does (not) co\z\[ad]operate,
          you might see \m[red]red\m[].
          Black on cyan can have a \M[cyan]\m[black]prominent\m[]\M[]
          \D'l 1i 0'\D'l 0 2i'\D'l 1i 0' look.
          .\" If in nroff mode, end page now.
          .if n .pl \n[nl]u

   Given the foregoing input, compare and contrast the output of the
   following.

          $ groff -T ascii file
          $ groff -T utf8 -P -i file
          $ groff -T utf8 -P -c file | ul

# /See also

   "Control Functions for Coded Character Sets" (ECMA-48) 5th edition,
   Ecma International, June 1991.  A gratis version of ISO 6429, this
   document includes a normative description of SGR escape sequences.
   Available at <http://www.ecma-international.org/publications/files/
   ECMA-ST/Ecma-048.pdf>.

   "Hyperlinks in Terminal Emulators" <https://gist.github.com/egmontkob/
   eb114294efbcd5adb1944c9f3cb5feda>, Egmont Koblinger.

   groff(1), troff(1), groff_out(5), groff_font(5), groff_char(7), ul(1),
   more(1), less(1), man(1)

groff 1.23.0                   15 September 2023                     grotty(1)
