ISO_8859-1(7)                                     Linux Programmer's Manual                                     ISO_8859-1(7)

NAME
       iso_8859-1 - ISO 8859-1 character set encoded in octal, decimal, and hexadecimal

DESCRIPTION
       The  ISO  8859 standard includes several 8-bit extensions to the ASCII character set (also known as ISO 646-IRV).  ISO
       8859-1 encodes the characters used in many West European languages.

   ISO 8859 alphabets
       The full set of ISO 8859 alphabets includes:

       ISO 8859-1    West European languages (Latin-1)
       ISO 8859-2    Central and East European languages (Latin-2)
       ISO 8859-3    Southeast European and miscellaneous languages (Latin-3)
       ISO 8859-4    Scandinavian/Baltic languages (Latin-4)
       ISO 8859-5    Latin/Cyrillic
       ISO 8859-6    Latin/Arabic
       ISO 8859-7    Latin/Greek
       ISO 8859-8    Latin/Hebrew
       ISO 8859-9    Latin-1 modification for Turkish (Latin-5)
       ISO 8859-10   Lappish/Nordic/Eskimo languages (Latin-6)
       ISO 8859-11   Latin/Thai
       ISO 8859-13   Baltic Rim languages (Latin-7)
       ISO 8859-14   Celtic (Latin-8)
       ISO 8859-15   West European languages (Latin-9)
       ISO 8859-16   Romanian (Latin-10)

   ISO 8859-1 characters
       The following table displays the characters in ISO 8859-1 that are printable and unlisted in the ascii(7) manual page.

       Oct   Dec   Hex   Char   Description
       ────────────────────────────────────────────────────────────────────
       240   160   A0           NO-BREAK SPACE
       241   161   A1     ¡     INVERTED EXCLAMATION MARK
       242   162   A2     ¢     CENT SIGN
       243   163   A3     £     POUND SIGN
       244   164   A4     ¤     CURRENCY SIGN
       245   165   A5     ¥     YEN SIGN
       246   166   A6     ¦     BROKEN BAR
       247   167   A7     §     SECTION SIGN
       250   168   A8     ¨     DIAERESIS
       251   169   A9     ©     COPYRIGHT SIGN
       252   170   AA     ª     FEMININE ORDINAL INDICATOR
       253   171   AB     «     LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
       254   172   AC     ¬     NOT SIGN
       255   173   AD           SOFT HYPHEN
       256   174   AE     ®     REGISTERED SIGN
       257   175   AF     ¯     MACRON
       260   176   B0     °     DEGREE SIGN
       261   177   B1     ±     PLUS-MINUS SIGN
       262   178   B2     ²     SUPERSCRIPT TWO
       263   179   B3     ³     SUPERSCRIPT THREE
       264   180   B4     ´     ACUTE ACCENT
       265   181   B5     µ     MICRO SIGN
       266   182   B6     ¶     PILCROW SIGN
       267   183   B7     ·     MIDDLE DOT
       270   184   B8     ¸     CEDILLA
       271   185   B9     ¹     SUPERSCRIPT ONE
       272   186   BA     º     MASCULINE ORDINAL INDICATOR
       273   187   BB     »     RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
       274   188   BC     ¼     VULGAR FRACTION ONE QUARTER
       275   189   BD     ½     VULGAR FRACTION ONE HALF

       276   190   BE     ¾     VULGAR FRACTION THREE QUARTERS
       277   191   BF     ¿     INVERTED QUESTION MARK
       300   192   C0     À     LATIN CAPITAL LETTER A WITH GRAVE
       301   193   C1     Á     LATIN CAPITAL LETTER A WITH ACUTE
       302   194   C2     Â     LATIN CAPITAL LETTER A WITH CIRCUMFLEX
       303   195   C3     Ã     LATIN CAPITAL LETTER A WITH TILDE
       304   196   C4     Ä     LATIN CAPITAL LETTER A WITH DIAERESIS
       305   197   C5     Å     LATIN CAPITAL LETTER A WITH RING ABOVE
       306   198   C6     Æ     LATIN CAPITAL LETTER AE
       307   199   C7     Ç     LATIN CAPITAL LETTER C WITH CEDILLA
       310   200   C8     È     LATIN CAPITAL LETTER E WITH GRAVE
       311   201   C9     É     LATIN CAPITAL LETTER E WITH ACUTE
       312   202   CA     Ê     LATIN CAPITAL LETTER E WITH CIRCUMFLEX
       313   203   CB     Ë     LATIN CAPITAL LETTER E WITH DIAERESIS
       314   204   CC     Ì     LATIN CAPITAL LETTER I WITH GRAVE
       315   205   CD     Í     LATIN CAPITAL LETTER I WITH ACUTE
       316   206   CE     Î     LATIN CAPITAL LETTER I WITH CIRCUMFLEX
       317   207   CF     Ï     LATIN CAPITAL LETTER I WITH DIAERESIS
       320   208   D0     Ð     LATIN CAPITAL LETTER ETH
       321   209   D1     Ñ     LATIN CAPITAL LETTER N WITH TILDE
       322   210   D2     Ò     LATIN CAPITAL LETTER O WITH GRAVE
       323   211   D3     Ó     LATIN CAPITAL LETTER O WITH ACUTE
       324   212   D4     Ô     LATIN CAPITAL LETTER O WITH CIRCUMFLEX
       325   213   D5     Õ     LATIN CAPITAL LETTER O WITH TILDE
       326   214   D6     Ö     LATIN CAPITAL LETTER O WITH DIAERESIS
       327   215   D7     ×     MULTIPLICATION SIGN
       330   216   D8     Ø     LATIN CAPITAL LETTER O WITH STROKE
       331   217   D9     Ù     LATIN CAPITAL LETTER U WITH GRAVE
       332   218   DA     Ú     LATIN CAPITAL LETTER U WITH ACUTE
       333   219   DB     Û     LATIN CAPITAL LETTER U WITH CIRCUMFLEX
       334   220   DC     Ü     LATIN CAPITAL LETTER U WITH DIAERESIS
       335   221   DD     Ý     LATIN CAPITAL LETTER Y WITH ACUTE
       336   222   DE     Þ     LATIN CAPITAL LETTER THORN
       337   223   DF     ß     LATIN SMALL LETTER SHARP S
       340   224   E0     à     LATIN SMALL LETTER A WITH GRAVE
       341   225   E1     á     LATIN SMALL LETTER A WITH ACUTE
       342   226   E2     â     LATIN SMALL LETTER A WITH CIRCUMFLEX
       343   227   E3     ã     LATIN SMALL LETTER A WITH TILDE
       344   228   E4     ä     LATIN SMALL LETTER A WITH DIAERESIS
       345   229   E5     å     LATIN SMALL LETTER A WITH RING ABOVE
       346   230   E6     æ     LATIN SMALL LETTER AE
       347   231   E7     ç     LATIN SMALL LETTER C WITH CEDILLA
       350   232   E8     è     LATIN SMALL LETTER E WITH GRAVE
       351   233   E9     é     LATIN SMALL LETTER E WITH ACUTE
       352   234   EA     ê     LATIN SMALL LETTER E WITH CIRCUMFLEX
       353   235   EB     ë     LATIN SMALL LETTER E WITH DIAERESIS
       354   236   EC     ì     LATIN SMALL LETTER I WITH GRAVE
       355   237   ED     í     LATIN SMALL LETTER I WITH ACUTE
       356   238   EE     î     LATIN SMALL LETTER I WITH CIRCUMFLEX
       357   239   EF     ï     LATIN SMALL LETTER I WITH DIAERESIS
       360   240   F0     ð     LATIN SMALL LETTER ETH
       361   241   F1     ñ     LATIN SMALL LETTER N WITH TILDE
       362   242   F2     ò     LATIN SMALL LETTER O WITH GRAVE
       363   243   F3     ó     LATIN SMALL LETTER O WITH ACUTE
       364   244   F4     ô     LATIN SMALL LETTER O WITH CIRCUMFLEX
       365   245   F5     õ     LATIN SMALL LETTER O WITH TILDE
       366   246   F6     ö     LATIN SMALL LETTER O WITH DIAERESIS
       367   247   F7     ÷     DIVISION SIGN
       370   248   F8     ø     LATIN SMALL LETTER O WITH STROKE
       371   249   F9     ù     LATIN SMALL LETTER U WITH GRAVE
       372   250   FA     ú     LATIN SMALL LETTER U WITH ACUTE
       373   251   FB     û     LATIN SMALL LETTER U WITH CIRCUMFLEX
       374   252   FC     ü     LATIN SMALL LETTER U WITH DIAERESIS
       375   253   FD     ý     LATIN SMALL LETTER Y WITH ACUTE
       376   254   FE     þ     LATIN SMALL LETTER THORN

       377   255   FF     ÿ     LATIN SMALL LETTER Y WITH DIAERESIS

NOTES
       ISO 8859-1 is also known as Latin-1.

SEE ALSO
       ascii(7), charsets(7), cp1252(7), iso_8859-15(7), utf-8(7)

COLOPHON
       This page is part of release 5.05 of the Linux man-pages project.  A description of the project, information about re‐
       porting bugs, and the latest version of this page, can be found at https://www.kernel.org/doc/man-pages/.

Linux                                                     2016-07-17                                            ISO_8859-1(7)
