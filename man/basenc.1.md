BASENC(1)                        User Commands                       BASENC(1)

# /NAME

   basenc - Encode/decode data and print to standard output

# /SYNOPSIS

    basenc [OPTION]... [FILE]

# /DESCRIPTION

   basenc encode or decode FILE, or standard input, to standard output.

   With no FILE, or when FILE is -, read standard input.

   Mandatory arguments to long options are mandatory for short options
   too.

   --base64
          same as 'base64' program (RFC4648 section 4)

   --base64url
          file- and url-safe base64 (RFC4648 section 5)

   --base32
          same as 'base32' program (RFC4648 section 6)

   --base32hex
          extended hex alphabet base32 (RFC4648 section 7)

   --base16
          hex encoding (RFC4648 section 8)

   --base2msbf
          bit string with most significant bit (msb) first

   --base2lsbf
          bit string with least significant bit (lsb) first

   -d, --decode
          decode data

   -i, --ignore-garbage
          when decoding, ignore non-alphabet characters

   -w, --wrap=COLS
          wrap encoded lines after COLS character (default 76).  Use 0 to
          disable line wrapping

   --z85  ascii85-like encoding (ZeroMQ spec:32/Z85); when encoding, input
          length must be a multiple of 4; when decoding, input length must
          be a multiple of 5

   --help display this help and exit

   --version
          output version information and exit

   When decoding, the input may contain newlines in addition to the bytes
   of the formal alphabet.  Use --ignore-garbage to attempt to recover
   from any other non-alphabet bytes in the encoded stream.

# /ENCODINGS EXAMPLES

          $ printf '\376\117\202' | basenc --base64
          /k+C

          $ printf '\376\117\202' | basenc --base64url
          _k-C

          $ printf '\376\117\202' | basenc --base32
          7ZHYE===

          $ printf '\376\117\202' | basenc --base32hex
          VP7O4===

          $ printf '\376\117\202' | basenc --base16
          FE4F82

          $ printf '\376\117\202' | basenc --base2lsbf
          011111111111001001000001

          $ printf '\376\117\202' | basenc --base2msbf
          111111100100111110000010

          $ printf '\376\117\202\000' | basenc --z85
          @.FaC

# /AUTHOR

   Written by Simon Josefsson and Assaf Gordon.

# /REPORTING BUGS

   GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
   Report any translation bugs to <https://translationproject.org/team/>

# /COPYRIGHT

   Copyright (C) 2020 Free Software Foundation, Inc.  License GPLv3+: GNU
   GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
   This is free software: you are free to change and redistribute it.
   There is NO WARRANTY, to the extent permitted by law.

# /SEE ALSO

   Full documentation <https://www.gnu.org/software/coreutils/basenc>
   or available locally via: info '(coreutils) basenc invocation'

GNU coreutils 8.32               November 2022                       BASENC(1)
