

Network Working Group                                          J. Postel
Request for Comments: 790                                            ISI
                                                          September 1981

Obsoletes RFCs:  776, 770, 762, 758,
755, 750, 739, 604, 503, 433, 349
Obsoletes IENs:  127, 117, 93



# /                         ASSIGNED NUMBERS




This Network Working Group Request for Comments documents the currently
assigned values from several series of numbers used in network protocol
implementations.  This RFC will be updated periodically, and in any case
current information can be obtained from Jon Postel.  The assignment of
numbers is also handled by Jon.  If you are developing a protocol or
application that will require the use of a link, socket, port, protocol,
or network number please contact Jon to receive a number assignment.

   Jon Postel
   USC - Information Sciences Institute
   4676 Admiralty Way
   Marina del Rey, California  90291

   phone: (213) 822-1511

   ARPANET mail: POSTEL@ISIF

Most of the protocols mentioned here are documented in the RFC series of
notes.  The more prominent and more generally used are documented in the
Protocol Handbook [17] prepared by the Network Information Center (NIC).
Some of the items listed are undocumented.  In all cases the name and
mailbox of the responsible individual is indicated.  In the lists that
follow, a bracketed entry, e.g., [17,iii], at the right hand margin of
the page indicates a reference for the listed protocol, where the number
cites the document and the "iii" cites the person.














Postel                                                          [Page 1]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Network Numbers


# /                       ASSIGNED NETWORK NUMBERS

   This list of network numbers is used in the internet address [33].
   The Internet Protocol (IP) uses a 32 bit address and divides that
   address into a network part and a "rest" or local address part.  The
   division takes 3 forms or classes.

      The first type, or class a, of address has a 7-bit network number
      and a 24-bit local address.  This allows 128 class a networks.

                           1                   2                   3   
       0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      |0|   NETWORK   |                Local Address                  |
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

                             Class A Address

      The second type, or class b, of address has a 14-bit network
      number and a 16-bit local address.  This allows 16,384 class b
      networks.

                           1                   2                   3   
       0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      |1 0|           NETWORK         |          Local Address        |
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

                             Class B Address

      The third type, or class c, of address has a 21-bit network number
      and a 8-bit local address.  This allows 2,097,152 class c
      networks.

                           1                   2                   3   
       0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      |1 1 0|                    NETWORK              | Local Address |
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

                             Class C Address

   One notation for internet host addresses commonly used divides the
   32-bit address into four 8-bit fields and specifies the value of each
   field as a decimal number with the fields separated by periods.  For
   example, the internet address of ISIF is 010.020.000.052.

   This notation will be used in the listing of assigned network


Postel                                                          [Page 2]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Network Numbers


   numbers.  The class a networks will have nnn.rrr.rrr.rrr, the class b
   networks will have nnn.nnn.rrr.rrr, and the class c networks will
   have nnn.nnn.nnn.rrr, where nnn represents part or all of a network
   number and rrr represents part or all of a local address or rest
   field.

   Assigned Network Numbers

   Class A Networks

      Internet Address  Name          Network                 References
      ----------------  ----          -------                 ----------
      000.rrr.rrr.rrr                 Reserved                     [JBP]
      001.rrr.rrr.rrr   BBN-PR        BBN Packet Radio Network    [DCA2]
      002.rrr.rrr.rrr   SF-PR-1       SF Packet Radio Network (1)  [JEM]
      003.rrr.rrr.rrr   BBN-RCC       BBN RCC Network              [SGC]
      004.rrr.rrr.rrr   SATNET        Atlantic Satellite Network  [DM11]
      005.rrr.rrr.rrr   SILL-PR       Ft. Sill Packet Radio Network[JEM]
      006.rrr.rrr.rrr   SF-PR-2       SF Packet Radio Network (2)  [JEM]
      007.rrr.rrr.rrr   CHAOS         MIT CHAOS Network           [MOON]
      008.rrr.rrr.rrr   CLARKNET      SATNET subnet for Clarksburg[DM11]
      009.rrr.rrr.rrr   BRAGG-PR      Ft. Bragg Packet Radio Net   [JEM]
      010.rrr.rrr.rrr   ARPANET       ARPANET                 [17,1,VGC]
      011.rrr.rrr.rrr   UCLNET        University College London     [PK]
      012.rrr.rrr.rrr   CYCLADES      CYCLADES                     [VGC]
      013.rrr.rrr.rrr                 Unassigned                   [JBP]
      014.rrr.rrr.rrr   TELENET       TELENET                      [VGC]
      015.rrr.rrr.rrr   EPSS          British Post Office EPSS      [PK]
      016.rrr.rrr.rrr   DATAPAC       DATAPAC                      [VGC]
      017.rrr.rrr.rrr   TRANSPAC      TRANSPAC                     [VGC]
      018.rrr.rrr.rrr   LCSNET        MIT LCS Network       [43,10,DDC2]
      019.rrr.rrr.rrr   TYMNET        TYMNET                       [VGC]
      020.rrr.rrr.rrr   DC-PR         D.C. Packet Radio Network    [VGC]
      021.rrr.rrr.rrr   EDN           DCEC EDN                     [EC5]
      022.rrr.rrr.rrr   DIALNET       DIALNET                [26,16,MRC]
      023.rrr.rrr.rrr   MITRE         MITRE Cablenet            [44,APS]
      024.rrr.rrr.rrr   BBN-LOCAL     BBN Local Network            [SGC]
      025.rrr.rrr.rrr   RSRE-PPSN     RSRE / PPSN                  [BD2]
      026.rrr.rrr.rrr   AUTODIN-II    AUTODIN II                   [EC5]
      027.rrr.rrr.rrr   NOSC-LCCN     NOSC / LCCN                  [KTP]
      028.rrr.rrr.rrr   WIDEBAND      Wide Band Satellite Network [CJW2]
      029.rrr.rrr.rrr   DCN-COMSAT    COMSAT Dist. Comp. Network  [DLM1]
      030.rrr.rrr.rrr   DCN-UCL       UCL Dist. Comp. Network       [PK]
      031.rrr.rrr.rrr   BBN-SAT-TEST  BBN SATNET Test Network     [DM11]
      032.rrr.rrr.rrr   UCL-CR1       UCL Cambridge Ring 1          [PK]
      033.rrr.rrr.rrr   UCL-CR2       UCL Cambridge Ring 2          [PK]
      034.rrr.rrr.rrr   MATNET        Mobile Access Terminal Net  [DM11]
      035.rrr.rrr.rrr   NULL          UCL/RSRE Null Network        [BD2]


Postel                                                          [Page 3]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Network Numbers


      036.rrr.rrr.rrr   SU-NET        Stanford University Ethernet [MRC]
      037.rrr.rrr.rrr   DECNET        Digital Equipment Network    [DRL]
      038.rrr.rrr.rrr   DECNET-TEST   Test Digital Equipment Net   [DRL]
      039.rrr.rrr.rrr   SRINET        SRI Local Network           [GEOF]
      040.rrr.rrr.rrr   CISLNET       CISL Multics Network         [CH2]
      041.rrr.rrr.rrr   BBN-LN-TEST   BBN Local Network Testbed    [KTP]
      042.rrr.rrr.rrr   S1NET         LLL-S1-NET                   [EAK]
      043.rrr.rrr.rrr   INTELPOST     COMSAT INTELPOST            [DLM1]
      044.rrr.rrr.rrr   AMPRNET       Amature Radio Experiment Net  [HM]
      044.rrr.rrr.rrr-126.rrr.rrr.rrr Unassigned                   [JBP]
      127.rrr.rrr.rrr                 Reserved                     [JBP]

   Class B Networks

      Internet Address  Name          Network                 References
      ----------------  ----          -------                 ----------
      128.000.rrr.rrr                 Reserved                     [JBP]
      128.001.rrr.rrr-128.254.rrr.rrr Unassigned                   [JBP]
      191.255.rrr.rrr                 Reserved                     [JBP]

   Class C Networks

      Internet Address  Name          Network                 References
      ----------------  ----          -------                 ----------
      192.000.001.rrr                 Reserved                     [JBP]
      192.000.001.rrr-223.255.254.rrr Unassigned                   [JBP]
      223.255.255.rrr                 Reserved                     [JBP]

   Other Reserved Internet Addresses

      Internet Address  Name          Network                 References
      ----------------  ----          -------                 ----------
      224.000.000.000-255.255.255.255 Reserved                     [JBP]

















Postel                                                          [Page 4]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Internet Version Numbers


# /                  ASSIGNED INTERNET VERSION NUMBERS

   In the Internet Protocol (IP) [33] there is a field to identify the
   version of the internetwork general protocol.  This field is 4 bits
   in size.

   Assigned Internet Version Numbers

      Decimal   Octal      Version                            References
      -------   -----      -------                            ----------
          0      0         Reserved                                [JBP]
        1-3    1-3         Unassigned                              [JBP]
          4      4         Internet Protocol                    [33,JBP]
          5      5         ST Datagram Mode                     [20,JWF]
       6-14   6-16         Unassigned                              [JBP]
         15     17         Reserved                                [JBP]


































Postel                                                          [Page 5]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Internet Protocol Numbers


# /                  ASSIGNED INTERNET PROTOCOL NUMBERS

   In the Internet Protocol (IP) [33] there is a field, called Protocol,
   to identify the the next level protocol.  This is an 8 bit field.

   Assigned Internet Protocol Numbers

      Decimal    Octal      Protocol Numbers                  References
      -------    -----      ----------------                  ----------
           0       0         Reserved                              [JBP]
           1       1         ICMP                               [53,JBP]
           2       2         Unassigned                            [JBP]
           3       3         Gateway-to-Gateway              [48,49,VMS]
           4       4         CMCC Gateway Monitoring Message [18,19,DFP]
           5       5         ST                                 [20,JWF]
           6       6         TCP                                [34,JBP]
           7       7         UCL                                    [PK]
           8      10         Unassigned                            [JBP]
           9      11         Secure                                [VGC]
          10      12         BBN RCC Monitoring                    [VMS]
          11      13         NVP                                 [12,DC]
          12      14         PUP                                [4,EAT3]
          13      15         Pluribus                             [RDB2]
          14      16         Telenet                              [RDB2]
          15      17         XNET                              [25,JFH2]
          16      20         Chaos                                [MOON]
          17      21         User Datagram                      [42,JBP]
          18      22         Multiplexing                       [13,JBP]
          19      23         DCN                                  [DLM1]
          20      24         TAC Monitoring                     [55,RH6]
       21-62   25-76         Unassigned                            [JBP]
          63      77         any local network                     [JBP]
          64     100         SATNET and Backroom EXPAK            [DM11]
          65     101         MIT Subnet Support                    [NC3]
       66-68 102-104         Unassigned                            [JBP]
          69     105         SATNET Monitoring                    [DM11]
          70     106         Unassigned                            [JBP]
          71     107         Internet Packet Core Utility         [DM11]
       72-75 110-113         Unassigned                            [JBP]
          76     114         Backroom SATNET Monitoring           [DM11]
          77     115         Unassigned                            [JBP]
          78     116         WIDEBAND Monitoring                  [DM11]
          79     117         WIDEBAND EXPAK                       [DM11]
      80-254 120-376         Unassigned                            [JBP]
         255     377         Reserved                              [JBP]





Postel                                                          [Page 6]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Port or Socket Numbers


# /                   ASSIGNED PORT or SOCKET NUMBERS

   Ports are used in the TCP [34] and sockets are used in the AHHP
   [28,17] to name the ends of logical connections which carry long term
   conversations.  For the purpose of providing services to unknown
   callers a service contact socket is defined.  This list specifies the
   port or socket used by the server process as its contact socket.  In
   the AHHP an Initial Connection Procedure ICP [39,17] is used between
   the user process and the server process to make the initial contact
   and establish the long term connections leaving the contact socket
   free to handle other callers.  In the TCP no ICP is necessary since a
   port may engage in many simultaneous connections.

   To the extent possible these same port assignments are used with UDP
   [42].

   The assigned ports/sockets use a small part of the possible
   port/socket numbers.  The assigned ports/sockets have all except the
   low order eight bits cleared to zero.  The low order eight bits are
   specified here.

   Socket Assignments:

      General Assignments:

         Decimal   Octal     Description
         -------   -----     -----------
         0-63      0-77      Network Wide Standard Function
         64-131    100-203   Hosts Specific Functions
         132-223   204-337   Reserved for Future Use
         224-255   340-377   Any Experimental Function



















Postel                                                          [Page 7]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Port or Socket Numbers


      Specific Assignments:

         Network Standard Functions

         Decimal   Octal     Description                      References
         -------   -----     -----------                      ----------
         1         1         Old Telnet                         [40,JBP]
         3         3         Old File Transfer            [27,11,24,JBP]
         5         5         Remote Job Entry                 [6,17,JBP]
         7         7         Echo                               [35,JBP]
         9         11        Discard                            [32,JBP]
         11        13        Who is on or SYSTAT                   [JBP]
         13        15        Date and Time                         [JBP]
         15        17        Who is up or NETSTAT                  [JBP]
         17        21        Short Text Message                    [JBP]
         19        23        Character generator or TTYTST      [31,JBP]
         21        25        New File Transfer                  [36,JBP]
         23        27        New Telnet                         [41,JBP]
         25        31        SMTP                               [54,JBP]
         27        33        NSW User System w/COMPASS FE       [14,RHT]
         29        35        MSG-3 ICP                          [29,RHT]
         31        37        MSG-3 Authentication               [29,RHT]
         33        41        Unassigned                            [JBP]
         35        43        IO Station Spooler                    [JBP]
         37        45        Time Server                        [22,JBP]
         39        47        Unassigned                            [JBP]
         41        51        Graphics                        [46,17,JBP]
         42        52        Name Server                        [38,JBP]
         43        53        WhoIs                                [JAKE]
         45        55        Message Processing Module          [37,JBP]
         47        57        NI FTP                             [50,CJB]
         49        61        RAND Network Graphics Conference   [30,MO2]
         51        63        Message Generator Control          [52,DFP]
         53        65        AUTODIN II FTP                     [21,EC5]
         55        67        ISI Graphics Language               [3,RB6]
         57        71        MTP                                [45,JBP]
         59        73        New MIT Host Status                   [SWG]
         61-63     75-77     Unassigned                            [JBP]












Postel                                                          [Page 8]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Port or Socket Numbers


         Host Specific Functions

         Decimal   Octal     Description                      References
         -------   -----     -----------                      ----------
         65        101       Unassigned                            [JBP]
         67        103       Datacomputer at CCA                 [8,JZS]
         69        105       Unassigned                            [JBP]
         69        105       Trivial File Transfer              [47,KRS]
         71        107       NETRJS (EBCDIC) at UCLA-CCN      [5,17,RTB]
         73        111       NETRJS (ASCII-68) at UCLA-CCN    [5,17,RTB]
         75        113       NETRJS (ASCII-63) at UCLA-CCN    [5,17,RTB]
         77        115       any private RJE server                [JBP]
         79        117       Name or Finger                  [23,17,KLH]
         81        121       Unassigned                            [JBP]
         83        123       MIT ML Device                        [MOON]
         85        125       MIT ML Device                        [MOON]
         87        127       any terminal link                     [JBP]
         89        131       SU/MIT Telnet Gateway                 [MRC]
         91        133       MIT Dover Spooler                     [EBM]
         93        135       BBN RCC Accounting                     [DT]
         95        137       SUPDUP                             [15,MRC]
         97        141       Datacomputer Status                 [8,JZS]
         99        143       CADC - NIFTP via UCL                  [PLH]
         101       145       NPL - NIFTP via UCL                   [PLH]
         103       147       BNPL - NIFTP via UCL                  [PLH]
         105       151       CAMBRIDGE - NIFTP via UCL             [PLH]
         107       153       HARWELL - NIFTP via UCL               [PLH]
         109       155       SWURCC - NIFTP via UCL                [PLH]
         111       157       ESSEX - NIFTP via UCL                 [PLH]
         113       161       RUTHERFORD - NIFTP via UCL            [PLH]
         115-129   163-201   Unassigned                            [JBP]
         131       203       Datacomputer                        [8,JZS]

         Reserved for Future Use

         Decimal   Octal     Description                      References
         -------   -----     -----------                      ----------
         132-223   204-337   Reserved                              [JBP]












Postel                                                          [Page 9]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Port or Socket Numbers


         Experimental Functions

         Decimal   Octal     Description                      References
         -------   -----     -----------                      ----------
         224-239   340-357   Unassigned                            [JBP]
         241       361       NCP Measurement                     [9,JBP]
         243       363       Survey Measurement                   [2,AV]
         245       365       LINK                               [7,RDB2]
         247       367       TIPSRV                                [RHT]
         249-255   371-377   RSEXEC                             [51,RHT]

# /                        ASSIGNED LINK NUMBERS

   The word "link" here refers to a field in the original ARPANET
   Host/IMP interface leader.  The link was originally defined as an 8
   bit field.  Some time after the ARPANET Host-to-Host (AHHP) protocol
   was defined and, by now, some time ago the definition of this field
   was changed to "Message-ID" and the length to 12 bits. The name link
   now refers to the high order 8 bits of this 12 bit message-id field.
   The low order 4 bits of the message-id field are to be zero unless
   specifically specified otherwise for the particular protocol used on
   that link.  The Host/IMP interface is defined in BBN report 1822 [1].

   Link Assignments:

      Decimal   Octal     Description                         References
      -------   -----     -----------                         ----------
      0         0         AHHP Control Messages              [28,17,JBP]
      1         1         Reserved                                 [JBP]
      2-71      2-107     AHHP Regular Messages              [28,17,JBP]
      72-150    110-226   Reserved                                 [JBP]
      151       227       CHAOS Protocol                          [MOON]
      152       230       PARC Universal Protocol               [4,EAT3]
      153       231       TIP Status Reporting                     [JGH]
      154       232       TIP Accounting                           [JGH]
      155       233       Internet Protocol (regular)           [33,JBP]
      156-158   234-236   Internet Protocol (experimental)      [33,JBP]
      159-191   237-277   Measurements                           [9,VGC]
      192-195   300-303   Unassigned                               [JBP]
      196-255   304-377   Experimental Protocols                   [JBP]
      224-255   340-377   NVP                                 [12,17,DC]
      248-255   370-377   Network Maintenance                      [JGH]








Postel                                                         [Page 10]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Documents


# /                            DOCUMENTS
                               ---------

   [1]    BBN, "Specifications for the Interconnection of a Host and an
          IMP", Report 1822, Bolt Beranek and Newman, Cambridge,
          Massachusetts, May 1978.

   [2]    Bhushan, A., "A Report on the Survey Project", RFC 530,
          NIC 17375, 22 June 1973.

   [3]    Bisbey, R., D. Hollingworth, and B. Britt, "Graphics Language
          (version 2.1)", ISI/TM-80-18, USC/Information Sciences
          Institute, July 1980.

   [4]    Boggs, D., J. Shoch, E. Taft, and R. Metcalfe, "PUP: An
          Internetwork Architecture", XEROX Palo Alto Research Center,
          CSL-79-10, July 1979; also in IEEE Transactions on
          Communication, Volume COM-28, Number 4, April 1980.

   [5]    Braden, R., "NETRJS Protocol", RFC 740, NIC 42423,
          22 November 1977.  Also in [17].

   [6]    Bressler, B., "Remote Job Entry Protocol",  RFC 407, NIC
          12112, 16 October 72.  Also in [17].

   [7]    Bressler, R., "Inter-Entity Communication -- An Experiment",
          RFC 441, NIC 13773, 19 January 1973.

   [8]    CCA, "Datacomputer Version 5/4 User Manual", Computer
          Corporation of America, August 1979.

   [9]    Cerf, V., "NCP Statistics", RFC 388, NIC 11360,
          23 August 1972.

   [10]   Clark, D., "Revision of DSP Specification", Local Network Note
          9, Laboratory for Computer Science, MIT, 17 June 1977.

   [11]   Clements, R., "FTPSRV -- Extensions for Tenex Paged Files",
          RFC 683, NIC 32251, 3 April 1975.  Also in [17].

   [12]   Cohen, D., "Specifications for the Network Voice Protocol
          (NVP)", NSC Note 68, 29 January 1976.  Also as USC/Information
          Sciences Institute RR-75-39, March 1976, and as RFC 741,
          NIC 42444, 22 November 1977.  Also in [17].

   [13]   Cohen, D. and J. Postel, "Multiplexing Protocol", IEN 90,
          USC/Information Sciences Institute, May 1979.



Postel                                                         [Page 11]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Documents


   [14]   COMPASS, "Semi-Annual Technical Report", CADD-7603-0411,
          Massachusetts Computer Associates, 4 March 1976. Also as,
          "National Software Works, Status Report No. 1",
          RADC-TR-76-276, Volume 1, September 1976. And COMPASS. "Second
          Semi-Annual Report", CADD-7608-1611, Massachusetts Computer
          Associates, 16 August 1976.

   [15]   Crispin, M., "SUPDUP Protocol", RFC 734, NIC 41953,
          7 October 1977.  Also in [17].

   [16]   Crispin, M. and I. Zabala, "DIALNET Protocols", Stanford
          University Artificial Intelligence Laboratory, July 1978.

   [17]   Feinler, E. and J. Postel, eds., "ARPANET Protocol Handbook",
          NIC 7104, for the Defense Communications Agency by SRI
          International, Menlo Park, California, Revised January 1978.

   [18]   Flood Page, D., "Gateway Monitoring Protocol", IEN 131,
          February 1980.

   [19]   Flood Page, D., "CMCC Performance Measurement Message
          Formats", IEN 157, September 1980.

   [20]   Forgie, J., "ST - A Proposed Internet Stream Protocol",
          IEN 119, M.I.T. Lincoln Laboratory, September 1979.

   [21]   Forsdick, H., and A. McKenzie, "FTP Functional Specification",
          Bolt Beranek and Newman, Report 4051, August 1979.

   [22]   Harrenstien, K., J. Postel, "Time Server", IEN 142,
          April 1980.  Also in [17].

   [23]   Harrenstien, K., "Name/Finger", RFC 742, NIC 42758,
          30 December 1977.  Also in [17].

   [24]   Harvey, B., "One More Try on the FTP", RFC 691, NIC 32700,
          6 June 1975.

   [25]   Haverty, J., "XNET Formats for Internet Protocol Version 4",
          IEN 158, October 1980.

   [26]   McCarthy, J. and L. Earnest, "DIALNET", Stanford University
          Artificial Intelligence Laboratory, Undated.

   [27]   McKenzie, A., "File Transfer Protocol", RFC 454, NIC 14333,
          16 February 1973.




Postel                                                         [Page 12]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Documents


   [28]   McKenzie,A., "Host/Host Protocol for the ARPA Network",
          NIC 8246, January 1972.  Also in [17].

   [29]   NSW Protocol Committee, "MSG: The Interprocess Communication
          Facility for the National Software Works", CADD-7612-2411,
          Massachusetts Computer Associates, BBN 3237, Bolt Beranek and
          Newman, Revised 24 December 1976.

   [30]   O'Brien, M., "A Network Graphical Conferencing System", RAND
          Corporation, N-1250-ARPA, August 1979.

   [31]   Postel, J., "Character Generator Process", RFC 429, NIC 13281,
          12 December 1972.

   [32]   Postel, J., "Discard Process",  RFC 348, NIC 10427,
          30 May 1972.

   [33]   Postel, J., ed., "Internet Protocol - DARPA Internet Program
          Protocol Specification", RFC 791, USC/Information Sciences
          Institute, September 1981.

   [34]   Postel, J., ed., "Transmission Control Protocol - DARPA
          Internet Program Protocol Specification", RFC 793,
          USC/Information Sciences Institute, September 1981.

   [35]   Postel, J., "Echo Process",  RFC 347, NIC 10426, 30 May 1972.

   [36]   Postel, J., "File Transfer Protocol", RFC 765, IEN 149,
          June 1980.

   [37]   Postel, J., "Internet Message Protocol", RFC 759, IEN 113,
          USC/Information Sciences Institute, August 1980.

   [38]   Postel, J., "Name Server", IEN 116, USC/Information Sciences
          Institute, August 1979.

   [39]   Postel, J., "Official Initial Connection Protocol", NIC 7101,
          11 June 1971.  Also in [17].

   [40]   Postel, J., "Telnet Protocol", RFC 318, NIC 9348,
          3 April 1972.

   [41]   Postel, J., "Telnet Protocol Specification", RFC 764, IEN 148,
          June 1980.

   [42]   Postel, J., "User Datagram Protocol", RFC 768 USC/Information
          Sciences Institute, August 1980.



Postel                                                         [Page 13]


RFC 790                                                   September 1981
                                                        Assigned Numbers
Documents


   [43]   Reed, D., "Protocols for the LCS Network", Local Network Note
          3, Laboratory for Computer Science, MIT, 29 November 1976.

   [44]   Skelton, A., S. Holmgren, and D. Wood, "The MITRE Cablenet
          Project", IEN 96, April 1979.

   [45]   Sluizer, S., and J. Postel, "Mail Transfer Protocol", RFC 780,
          USC/Information Sciences Institute, May 1981.

   [46]   Sproull, R., and E. Thomas. "A Networks Graphics Protocol",
          NIC 24308, 16 August 1974.  Also in [17].

   [47]   Sollins, K., "The TFTP Protocol (revision 2)", RFC 783,
          MIT/LCS, June 1981.

   [48]   Strazisar, V., "Gateway Routing:  An Implementation
          Specification", IEN 30, Bolt Berenak and Newman, April 1979.

   [49]   Strazisar, V., "How to Build a Gateway", IEN 109, Bolt Berenak
          and Newman, August 1979.

   [50]   The High Level Protocol Group, "A Network Independent File
          Transfer Protocol",  INWG Protocol Note 86, December 1977.

   [51]   Thomas, R., "A Resource Sharing Executive for the ARPANET",
          AFIPS Conference Proceedings, 42:155-163, NCC, 1973.

   [52]   Flood Page, D., "A Simple Message Generator", IEN 172, Bolt
          Berenak and Newman, March 1981.

   [53]   Postel, J., "Internet Control Message Protocol - DARPA
          Internet Program Protocol Specification", RFC 792,
          USC/Information Sciences Institute, September 1981.

   [54]   Postel, J., "Simple Mail Transfer Protocol", RFC 788,
          USC/Information Sciences Institute, September 1981.

   [55]   Littauer, B., "A Host Monitoring Protocol"", IEN 197, Bolt
          Berenak and Newman, September 1981.

   









Postel                                                         [Page 14]


RFC 790                                                   September 1981
                                                        Assigned Numbers
People


# /                              PEOPLE
                                 ------

   [DCA2]    Don Allen           BBN       Allen@BBND
   [CJB]     Chris Bennett       UCL       UKSAT@ISIE
   [RB6]     Richard Bisbey      ISI       Bisbey@ISIB
   [RTB]     Bob Braden          UCLA      Braden@ISIA
   [RDB2]    Robert Bressler     BBN       Bressler@BBNE
   [EC5]     Ed Cain             DCEC      cain@EDN-Unix
   [VGC]     Vint Cerf           ARPA      Cerf@ISIA
   [NC3]     J. Noel Chiappa     MIT       JNC@MIT-XX
   [SGC]     Steve Chipman       BBN       Chipman@BBNA
   [DDC2]    David Clark         MIT       Clark@MIT-Multics
   [DC]      Danny Cohen         ISI       Cohen@ISIB
   [MRC]     Mark Crispin        Stanford  Admin.MRC@SU-SCORE
   [BD2]     Brian Davies        RSRE      T45@ISIE
   [JAKE]    Jake Feinler        SRI       Feinler@SRI-KL
   [DFP]     David Flood Page    BBN       DFloodPage@BBNE
   [JWF]     Jim Forgie          LL        Forgie@BBNC
   [SWG]     Stu Galley          MIT       SWG@MIT-DMS
   [GEOF]    Geoff Goodfellow    SRI       Geoff@DARCOM-KA
   [KLH]     Ken Harrenstien     MIT       KLH@MIT-AI
   [JFH2]    Jack Haverty        BBN       JHaverty@BBN-Unix
   [JGH]     Jim Herman          BBN       Herman@BBNE
   [PLH]     Peter Higginson     UCL       UKSAT@ISIE
   [RH6]     Robert Hinden       BBN       Hinden@BBNE
   [CH2]     Charles Hornig      Honeywell Hornig@MIT-Multics
   [EAK]     Earl Killian        LLL       EAK@MIT-MC
   [PK]      Peter Kirstein      UCL       Kirstein@ISIA
   [DRL]     David Lyons         DEC       Lyons@DEC-2136
   [HM]      Hank Magnuski       ---       ---
   [JEM]     Jim Mathis          SRI       Mathis@SRI-KL
   [DM11]    Dale McNeill        BBN       DMcNeill@BBNE
   [DLM1]    David Mills         COMSAT    Mills@ISIE
   [MOON]    David Moon          MIT       Moon@MIT-MC
   [EBM]     Eliot Moss          MIT       EBM@MIT-XX
   [MO2]     Michael O'Brien     RAND      OBrien@RAND-Unix
   [KTP]     Ken Pogran          BBN       Pogran@BBND
   [JBP]     Jon Postel          ISI       Postel@ISIF
   [JZS]     Joanne Sattely      CCA       JZS@CCA
   [APS]     Anita Skelton       MITRE     skelton@MITRE
   [KRS]     Karen Sollins       MIT       Sollins@MIT-XX
   [VMS]     Virginia Strazisar  BBN       Strazisar@BBNA
   [EAT3]    Ed Taft             XEROX     Taft.PA@PARC
   [DT]      Dan Tappan          BBN       Tappan@BBNG
   [RHT]     Robert Thomas       BBN       Thomas@BBNA
   [AV]      Al Vezza            MIT       AV@MIT-XX
   [CJW2]    Cliff Weinstein     LL        cjw@LL-11


Postel                                                         [Page 15]
