

Network Working Group                                        J. Reynolds
Request for Comments: 991                                      J. Postel
                                                                     ISI
Obsoletes: RFCs 961, 943, 924, 901, 880, 840               November 1986


                    OFFICIAL ARPA-INTERNET PROTOCOLS


STATUS OF THIS MEMO

   This memo is an official status report on the protocols used in the
   ARPA-Internet community.  Distribution of this memo is unlimited.

INTRODUCTION

   This RFC identifies the documents specifying the official protocols
   used in the Internet.  Comments indicate any revisions or changes
   planned.

   To first order, the official protocols are those specified in the
   "DDN Protocol Handbook" (DPH), dated December 1985 (this is a three
   volume set with a total thickness of about 5 inches).

   Older collections that include many of these  specifications are the
   "Internet Protocol Transition Workbook" (IPTW), dated March 1982; the
   "Internet Mail Protocols", dated November 1982; and the "Internet
   Telnet Protocols and Options", dated June 1983.  There is also a
   volume of protocol related information called the "Internet Protocol
   Implementers Guide" (IPIG) dated August 1982.  An even older
   collection is the "ARPANET Protocol Handbook" (APH) dated
   January 1978.  Nearly all the relevant material from these
   collections has been reproduced in the current DPH.

   This document is organized as a sketchy outline.  The entries are
   protocols (e.g., Transmission Control Protocol).  In each entry there
   are notes on status, specification, comments, other references,
   dependencies, and contact.

      The STATUS is one of: required, recommended, elective,
      experimental, or none.

      The SPECIFICATION identifies the protocol defining documents.

      The COMMENTS describe any differences from the specification or
      problems with the protocol.

      The OTHER REFERENCES identify documents that comment on or expand
      on the protocol.




Reynolds & Postel                                               [Page 1]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


      The DEPENDENCIES indicate what other protocols are called upon by
      this protocol.

      The CONTACT indicates a person who can answer questions about the
      protocol.

      In particular, the status may be:

         required

            - all hosts must implement the required protocol,

         recommended

            - all hosts are encouraged to implement the recommended
            protocol,

         elective

            - hosts may implement or not the elective protocol,

         experimental

            - hosts should not implement the experimental protocol
            unless they are participating in the experiment and have
            coordinated their use of this protocol with the contact
            person, and

         none

            - this is not a protocol.

         For further information about protocols in general, please
         contact:

            Joyce K. Reynolds
            USC - Information Sciences Institute
            4676 Admiralty Way
            Marina del Rey, California  90292-6695

            Phone: (213) 822-1511

            ARPA mail: JKREYNOLDS@ISI.EDU






Reynolds & Postel                                               [Page 2]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


# /TOC

    /OVERVIEW
       Catenet Model  ------------------------------------------------------
    /NETWORK LEVEL
       Internet Protocol  --------------------------------------------- (IP)
       Internet Control Message Protocol  --------------------------- (ICMP)
       Internet Group Multicast Protocol  --------------------------- (IGMP)
    /HOST LEVEL
       User Datagram Protocol  --------------------------------------- (UDP)
       Transmission Control Protocol  -------------------------------- (TCP)
       Host Monitoring Protocol  ------------------------------------- (HMP)
       Cross Net Debugger  ------------------------------------------ (XNET)
       Exterior Gateway Protocol  ------------------------------------ (EGP)
       Gateway Gateway Protocol  ------------------------------------- (GGP)
       Multiplexing Protocol  ---------------------------------------- (MUX)
       Stream Protocol  ----------------------------------------------- (ST)
       Network Voice Protocol  ------------------------------------ (NVP-II)
       Reliable Data Protocol  --------------------------------------- (RDP)
       Internet Reliable Transaction Protocol  ---------------------- (IRTP)
    /APPLICATION LEVEL
       Telnet Protocol  ------------------------------------------- (TELNET)
       Telnet Options  ------------------------------------ (TELNET-OPTIONS)
       File Transfer Protocol  --------------------------------------- (FTP)
       Trivial File Transfer Protocol  ------------------------------ (TFTP)
       Simple File Transfer Protocol  ------------------------------- (SFTP)
       Simple Mail Transfer Protocol  ------------------------------- (SMTP)
       Network News Transfer Protocol  ------------------------------ (NNTP)
       Bulk Data Transfer Protocol  ------------------------------- (NETBLT)
       Resource Location Protocol  ----------------------------------- (RLP)
       Loader Debugger Protocol  ------------------------------------- (LDP)
       Remote Job Entry  --------------------------------------------- (RJE)
       Remote Job Service  ---------------------------------------- (NETRJS)
       Remote Telnet Service  ------------------------------------ (RTELNET)
       Graphics Protocol  --------------------------------------- (GRAPHICS)
       Echo Protocol  ----------------------------------------------- (ECHO)
       Discard Protocol  ----------------------------------------- (DISCARD)
       Character Generator Protocol  ----------------------------- (CHARGEN)
       Quote of the Day Protocol  ---------------------------------- (QUOTE)
       Active Users Protocol  -------------------------------------- (USERS)
       Finger Protocol  ------------------------------------------- (FINGER)
       WhoIs Protocol  ------------------------------------------- (NICNAME)
       Domain Name Protocol  -------------------------------------- (DOMAIN)
       HOSTNAME Protocol  --------------------------------------- (HOSTNAME)
       Host Name Server Protocol  ----------------------------- (NAMESERVER)
       CSNET Mailbox Name Server Protocol  ---------------------- (CSNET-NS)
       Daytime Protocol  ----------------------------------------- (DAYTIME)
       Network Time Protocol  ---------------------------------------- (NTP)
       Time Server Protocol  ---------------------------------------- (TIME)
       DCNET Time Server Protocol  --------------------------------- (CLOCK)
       SUPDUP Protocol  ------------------------------------------- (SUPDUP)
       Internet Message Protocol  ------------------------------------ (MPM)
       Post Office Protocol - Version 2  ---------------------------- (POP2)
       Network Standard Text Editor  ------------------------------- (NETED)
       Authentication Service  -------------------------------------- (AUTH)
       Bootstrap Protocol  ----------------------------------------- (BOOTP)
    /APPENDICES
       Assigned Numbers  ---------------------------------------------------
       Pre-emption  --------------------------------------------------------
       Service Mappings  ---------------------------------------------------
       Address Mappings  ---------------------------------------------------
       Document Formats  ---------------------------------------------------
       Bitmap Formats  -----------------------------------------------------
       Facsimile Formats  --------------------------------------------------
       Host-Front End Protocol  ------------------------------------- (HFEP)
       Internet Protocol on ARPANET  ----------------------------- (IP-ARPA)
       Internet Protocol on WBNET  --------------------------------- (IP-WB)
       Host Access Protocol  -------------------------------------- (IP-SAT)
       Internet Protocol on X.25 Networks  ------------------------ (IP-X25)
       Internet Protocol on DC Networks  --------------------------- (IP-DC)
       Internet Protocol on Ethernet Networks  ---------------------- (IP-E)
       Internet Protocol on Experimental Ethernet Networks  -------- (IP-EE)
       Internet Protocol on IEEE 802  ---------------------------- (IP-IEEE)
       Internet Subnet Protocol  ---------------------------------- (IP-SUB)
       Address Resolution Protocol  ---------------------------------- (ARP)
       A Reverse Address Resolution Protocol  ----------------------- (RARP)
       Multi-LAN Address Resolution Protocol  ----------------------- (MARP)
       Broadcasting Internet Datagrams  ------------------------- (IP-BROAD)
       Broadcasting Internet Datagrams with Subnets --------- (IP-SUB-BROAD)
       Reliable Asynchronous Transfer Protocol  --------------------- (RATP)
       Thinwire Protocol  --------------------------------------- (THINWIRE)

# /OVERVIEW

##   Catenet Model  ------------------------------------------------------

      STATUS:  None

      SPECIFICATION:  IEN 48 (in DPH)

      COMMENTS:

         Gives an overview of the organization and principles of the
         Internet.

         Could be revised and expanded.

      OTHER REFERENCES:

         Leiner, B., Cole R., Postel, J., and D. Mills, "The DARPA
         Protocol Suite", IEEE INFOCOM 85, Washington, D.C., March 1985.
         Also in IEEE Communications Magazine, and as ISI/RS-85-153,
         March 1985.

         Postel, J., "Internetwork Applications Using the DARPA Protocol
         Suite", IEEE INFOCOM 85, Washington, D.C., March 1985. Also in
         IEEE Communications Magazine, and as ISI/RS-85-151, April 1985.

         Padlipsky, M.A., "The Elements of Networking Style and other
         Essays and Animadversions on the Art of Intercomputer
         Networking", Prentice-Hall, New Jersey, 1985.

         RFC 871 - A Perspective on the ARPANET Reference Model

      DEPENDENCIES:

      CONTACT: Postel@ISI.EDU














Reynolds & Postel                                               [Page 3]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


# /NETWORK LEVEL

##   Internet Protocol  --------------------------------------------- (IP)

      STATUS:  Required

      SPECIFICATION:  RFC 791 (in DPH)

      COMMENTS:

         This is the universal protocol of the Internet.  This datagram
         protocol provides the universal addressing of hosts in the
         Internet.

         A few minor problems have been noted in this document.

         The most serious is a bit of confusion in the route options.
         The route options have a pointer that indicates which octet of
         the route is the next to be used.  The confusion is between the
         phrases "the pointer is relative to this option" and "the
         smallest legal value for the pointer is 4".  If you are
         confused, forget about the relative part, the pointer begins
         at 4.  The MIL-STD description of source routing is wrong in
         some of the details.

         Another important point is the alternate reassembly procedure
         suggested in RFC 815.

         Some changes are in the works for the security option.

         Note that ICMP is defined to be an integral part of IP.  You
         have not completed an implementation of IP if it does not
         include ICMP.

      OTHER REFERENCES:

         RFC 815 (in DPH) - IP Datagram Reassembly Algorithms

         RFC 814 (in DPH) - Names, Addresses, Ports, and Routes

         RFC 816 (in DPH) - Fault Isolation and Recovery

         RFC 817 (in DPH) - Modularity and Efficiency in Protocol
         Implementation

         MIL-STD-1777 (in DPH) - Military Standard Internet Protocol



Reynolds & Postel                                               [Page 4]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


         RFC 963 - Some Problems with the Specification of the Military
         Standard Internet Protocol

      DEPENDENCIES:

      CONTACT: Postel@ISI.EDU

##   Internet Control Message Protocol  --------------------------- (ICMP)

      STATUS:  Required

      SPECIFICATION:  RFC 792 (in DPH)

      COMMENTS:

         The control messages and error reports that go with the
         Internet Protocol.

         A few minor errors in the document have been noted.
         Suggestions have been made for additional types of redirect
         message and additional destination unreachable messages.

         Two additional ICMP message types are defined in RFC 950
         "Internet Subnets", Address Mask Request (A1=17), and Address
         Mask Reply (A2=18).

         Note that ICMP is defined to be an integral part of IP.  You
         have not completed an implementation of IP if it does not
         include ICMP.

      OTHER REFERENCES:  RFC 950

      DEPENDENCIES: Internet Protocol

      CONTACT: Postel@ISI.EDU














Reynolds & Postel                                               [Page 5]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Internet Group Multicast Protocol  --------------------------- (IGMP)

      STATUS:  Recommended

      SPECIFICATION:  RFC 988

      COMMENTS:

         This protocol specifies the extensions required of a host
         implementation of the Internet Protocol (IP) to support
         internetwork multicasting.  This specification supersedes that
         given in RFC 966, and constitutes a proposed protocol standard
         for IP multicasting in the ARPA-Internet.  Reference RFC 966
         for a discussion of the motivation and rationale behind the
         multicasting extension specified here.

      OTHER REFERENCES: RFC 966

      DEPENDENCIES: Internet Protocol

      CONTACT: Deering@PESCADERO.STANFORD.EDU




























Reynolds & Postel                                               [Page 6]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


# /HOST LEVEL

##   User Datagram Protocol  --------------------------------------- (UDP)

      STATUS:  Recommended

      SPECIFICATION:  RFC 768 (in DPH)

      COMMENTS:

         Provides a datagram service to applications.  Adds port
         addressing to the IP services.

         The only change noted for the UDP specification is a minor
         clarification that if in computing the checksum a padding octet
         is used for the computation it is not transmitted or counted in
         the length.

      OTHER REFERENCES:

      DEPENDENCIES: Internet Protocol

      CONTACT: Postel@ISI.EDU

##   Transmission Control Protocol  -------------------------------- (TCP)

      STATUS:  Recommended

      SPECIFICATION:  RFC 793 (in DPH)

      COMMENTS:

         Provides reliable end-to-end data stream service.

         Many comments and corrections have been received for the TCP
         specification document.  These are primarily document bugs
         rather than protocol bugs.

         Event Processing Section:  There are many minor corrections and
         clarifications needed in this section.

         Push:  There are still some phrases in the document that give a
         "record mark" flavor to the push.  These should be further
         clarified.  The push is not a record mark.





Reynolds & Postel                                               [Page 7]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


         Urgent:  Page 17 is wrong.  The urgent pointer points to the
         last octet of urgent data (not to the first octet of non-urgent
         data).

         Listening Servers:  Several comments have been received on
         difficulties with contacting listening servers.  There should
         be some discussion of implementation issues for servers, and
         some notes on alternative models of system and process
         organization for servers.

         Maximum Segment Size:  The maximum segment size option should
         be generalized and clarified.  It can be used to either
         increase or decrease the maximum segment size from the default.
         The TCP Maximum Segment Size is the IP Maximum Datagram Size
         minus forty.  The default IP Maximum Datagram Size is 576.  The
         default TCP Maximum Segment Size is 536.  For further
         discussion, see RFC 879.

         Idle Connections:  There have been questions about
         automatically closing idle connections.  Idle connections are
         ok, and should not be closed.  There are several cases where
         idle connections arise, for example, in Telnet when a user is
         thinking for a long time following a message from the server
         computer before his next input.  There is no TCP "probe"
         mechanism, and none is needed.

         Queued Receive Data on Closing:  There are several points where
         it is not clear from the description what to do about data
         received by the TCP but not yet passed to the user,
         particularly when the connection is being closed.  In general,
         the data is to be kept to give to the user if he does a RECV
         call.

         Out of Order Segments:  The description says that segments that
         arrive out of order, that is, are not exactly the next segment
         to be processed, may be kept on hand.  It should also point out
         that there is a very large performance penalty for not doing
         so.

         User Time Out:  This is the time out started on an open or send
         call.  If this user time out occurs the user should be
         notified, but the connection should not be closed or the TCB
         deleted.  The user should explicitly ABORT the connection if he
         wants to give up.

      OTHER REFERENCES:



Reynolds & Postel                                               [Page 8]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


         RFC 813 (in DPH) - Window and Acknowledgement Strategy in TCP

         RFC 814 (in DPH) - Names, Addresses, Ports, and Routes

         RFC 816 (in DPH) - Fault Isolation and Recovery

         RFC 817 (in DPH) - Modularity and Efficiency in Protocol
         Implementation

         RFC 879 - TCP Maximum Segment Size

         RFC 889 - Internet Delay Experiments

         RFC 896 - TCP/IP Congestion Control

         MIL-STD-1778 (in DPH) - Military Standard Transmission Control
         Protocol

         RFC 964 - Some Problems with the Specification of the Military
         Standard Transmission Control Protocol

         Zhang, Lixia, "Why TCP Timers Don't Work Well", Communications
         Architectures and Protocols, ACM SIGCOMM Proceedings,  Computer
         Communications Review, V.16, N.3, August 1986.

      DEPENDENCIES: Internet Protocol

      CONTACT: Postel@ISI.EDU





















Reynolds & Postel                                               [Page 9]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Host Monitoring Protocol  ------------------------------------- (HMP)

      STATUS:  Elective

      SPECIFICATION:  RFC 869 (in DPH)

      COMMENTS:

         This is a good tool for debugging protocol implementations in
         remotely located computers.

         This protocol is used to monitor Internet gateways and the
         TACs.

      OTHER REFERENCES:

      DEPENDENCIES: Internet Protocol

      CONTACT: Hinden@BBN.COM

##   Cross Net Debugger  ------------------------------------------ (XNET)

      STATUS:  Elective

      SPECIFICATION:  IEN 158 (in DPH)

      COMMENTS:

         A debugging protocol, allows debugger like access to remote
         systems.

         This specification should be updated and reissued as an RFC.

      OTHER REFERENCES:  RFC 643

      DEPENDENCIES: Internet Protocol

      CONTACT: Postel@ISI.EDU











Reynolds & Postel                                              [Page 10]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Exterior Gateway Protocol  ------------------------------------ (EGP)

      STATUS:  Recommended for Gateways

      SPECIFICATION:  RFC 888, RFC 904 (in DPH), RFC 975

      COMMENTS:

         The protocol used between gateways of different administrations
         to exchange routing information.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:  RFC 827, RFC 890

      DEPENDENCIES: Internet Protocol

      CONTACT: Mills@ISI.EDU

##   Gateway Gateway Protocol  ------------------------------------- (GGP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 823 (in DPH)

      COMMENTS:

         The gateway protocol now used in the core gateways.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES: Internet Protocol

      CONTACT: Brescia@BBN.COM











Reynolds & Postel                                              [Page 11]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Multiplexing Protocol  ---------------------------------------- (MUX)

      STATUS:  Experimental

      SPECIFICATION:  IEN 90 (in DPH)

      COMMENTS:

         Defines a capability to combine several segments from different
         higher level protocols in one IP datagram.

         No current experiment in progress.  There is some question as
         to the extent to which the sharing this protocol envisions can
         actually take place.  Also, there are some issues about the
         information captured in the multiplexing header being (a)
         insufficient, or (b) over specific.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES: Internet Protocol

      CONTACT: Postel@ISI.EDU

##   Stream Protocol  ----------------------------------------------- (ST)

      STATUS:  Experimental

      SPECIFICATION:  IEN 119 (in DPH)

      COMMENTS:

         A gateway resource allocation protocol designed for use in
         multihost real time applications.

         The implementation of this protocol has evolved and may no
         longer be consistent with this specification.  The document
         should be updated and issued as an RFC.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES: Internet Protocol


Reynolds & Postel                                              [Page 12]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


      CONTACT: jwf@LL-EN.ARPA

##   Network Voice Protocol  ------------------------------------ (NVP-II)

      STATUS:  Experimental

      SPECIFICATION:  ISI Internal Memo

      COMMENTS:

         Defines the procedures for real time voice conferencing.

         The specification is an ISI Internal Memo which should be
         updated and issued as an RFC.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:  RFC 741 (in DPH)

      DEPENDENCIES:  Internet Protocol, Stream Protocol

      CONTACT:  Casner@ISI.EDU

##   Reliable Data Protocol  --------------------------------------- (RDP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 908 (in DPH)

      COMMENTS:

         This protocol is designed to efficiently support the bulk
         transfer of data for such host monitoring and control
         applications as loading/dumping and remote debugging.  The
         protocol is intended to be simple to implement but still be
         efficient in environments where there may be long transmission
         delays and loss or non-sequential delivery of message segments.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES:  Internet Protocol

      CONTACT:  CWelles@BBN.COM


Reynolds & Postel                                              [Page 13]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Internet Reliable Transaction Protocol  ---------------------- (IRTP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 938

      COMMENTS:

         This protocol is a transport level host to host protocol
         designed for an internet environment.  While the issues
         discussed may not be directly relevant to the research problems
         of the DARPA community, they may be interesting to a number of
         researchers and implementors.

      OTHER REFERENCES:

      DEPENDENCIES:  Internet Protocol

      CONTACT:  Trudy@ACC.ARPA






























Reynolds & Postel                                              [Page 14]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


# /APPLICATION LEVEL

##   Telnet Protocol  ------------------------------------------- (TELNET)

      STATUS:  Recommended

      SPECIFICATION:  RFC 854 (in DPH)

      COMMENTS:

         The protocol for remote terminal access.

         This has been revised since the IPTW.  RFC 764 in IPTW is now
         obsolete.

      OTHER REFERENCES:

         MIL-STD-1782 (in DPH) - Telnet Protocol

      DEPENDENCIES:  Transmission Control Protocol

      CONTACT:  Postel@ISI.EDU



























Reynolds & Postel                                              [Page 15]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Telnet Options  ------------------------------------ (TELNET-OPTIONS)

      STATUS:  Elective

      SPECIFICATION:  General description of options:  RFC 855 (in DPH)

      Number   Name                                    RFC  NIC  DPH USE
      ------   ---------------------------------       --- ----- --- ---
         0     Binary Transmission                     856 ----- yes yes
         1     Echo                                    857 ----- yes yes
         2     Reconnection                            ... 15391 yes  no
         3     Suppress Go Ahead                       858 ----- yes yes
         4     Approx Message Size Negotiation         ... 15393 yes  no
         5     Status                                  859 ----- yes yes
         6     Timing Mark                             860 ----- yes yes
         7     Remote Controlled Trans and Echo        726 39237 yes  no
         8     Output Line Width                       ... 20196 yes  no
         9     Output Page Size                        ... 20197 yes  no
        10     Output Carriage-Return Disposition      652 31155 yes  no
        11     Output Horizontal Tabstops              653 31156 yes  no
        12     Output Horizontal Tab Disposition       654 31157 yes  no
        13     Output Formfeed Disposition             655 31158 yes  no
        14     Output Vertical Tabstops                656 31159 yes  no
        15     Output Vertical Tab Disposition         657 31160 yes  no
        16     Output Linefeed Disposition             658 31161 yes  no
        17     Extended ASCII                          698 32964 yes  no
        18     Logout                                  727 40025 yes  no
        19     Byte Macro                              735 42083 yes  no
        20     Data Entry Terminal                     732 41762 yes  no
        21     SUPDUP                              734 736 42213 yes  no
        22     SUPDUP Output                           749 45449 yes  no
        23     Send Location                           779 ----- yes  no
        24     Terminal Type                           930 ----- yes  no
        25     End of Record                           885 ----- yes  no
        26     TACACS User Identification              927 ----- yes  no
        27     Output Marking                          933 ----- yes  no
        28     Terminal Location Number                946 -----  no  no
       255     Extended-Options-List                   861 ----- yes yes

      The DHP column indicates if the specification is included in the
      DDN Protocol Handbook.  The USE column of the table above
      indicates which options are in general use.

      COMMENTS:

         The Binary Transmission, Echo, Suppress Go Ahead, Status,



Reynolds & Postel                                              [Page 16]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


         Timing Mark, and Extended Options List options have been
         recently updated and reissued.  These are the most frequently
         implemented options.

         The remaining options should be reviewed and the useful ones
         should be revised and reissued.  The others should be
         eliminated.

         The following are recommended:  Binary Transmission, Echo,
         Suppress Go Ahead, Status, Timing Mark, and Extended Options
         List.

      OTHER REFERENCES:

      DEPENDENCIES: Telnet

      CONTACT: Postel@ISI.EDU

##   File Transfer Protocol  --------------------------------------- (FTP)

      STATUS:  Recommended

      SPECIFICATION:  RFC 959 (in DPH)

      COMMENTS:

         The protocol for moving files between Internet hosts.  Provides
         for access control and negotiation of file parameters.

         The following new optional commands are included in this
         edition of the specification:  Change to Parent Directory
         (CDUP), Structure Mount (SMNT), Store Unique (STOU), Remove
         Directory (RMD), Make Directory (MKD), Print Directory (PWD),
         and System (SYST).  Note that this specification is compatible
         with the previous edition (RFC 765).

         A discrepancy has been found in the specification in the
         examples of Appendix II.  On page 63, a response code of 200 is
         shown as the response to a CWD command.  Under the list of
         Command-Reply Sequences cited on page 50, CWD is shown to only
         accept a 250 response code.  Therefore, if one would interpret
         a CWD command as being excluded from the File System functional
         category, one may assume that the response code of 200 is
         correct, since CDUP as a special case of CWD does use 200.





Reynolds & Postel                                              [Page 17]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


      OTHER REFERENCES:

         RFC 678 (in DPH) - Document File Format Standards

         MIL-STD-1780 (in DPH) - File Transfer Protocol

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Postel@ISI.EDU

##   Trivial File Transfer Protocol  ------------------------------ (TFTP)

      STATUS:  Elective

      SPECIFICATION:  RFC 783 (in IPTW)

      COMMENTS:

         A very simple file moving protocol, no access control is
         provided.

         This is in use in several local networks.

         Ambiguities in the interpretation of several of the transfer
         modes should be  clarified, and additional transfer modes could
         be defined.  Additional error codes could be defined to more
         clearly identify problems.

         Note: The DPH contains IEN-133, which is an obsolete version of
         this protocol.

      OTHER REFERENCES:

      DEPENDENCIES: User Datagram Protocol

      CONTACT: Postel@ISI.EDU













Reynolds & Postel                                              [Page 18]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Simple File Transfer Protocol  ------------------------------- (SFTP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 913 (in DPH)

      COMMENTS:

         SFTP is a simple file transfer protocol.  It fills the need of
         people wanting a protocol that is more useful than TFTP but
         easier to implement (and less powerful) than FTP.  SFTP
         supports user access control, file transfers, directory
         listing, directory changing, file renaming and deleting.

         SFTP can be implemented with any reliable 8-bit byte stream
         oriented protocol, this document describes its TCP
         specification.  SFTP uses only one TCP connection; whereas TFTP
         implements a connection over UDP, and FTP uses two TCP
         connections (one using the TELNET protocol).

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: MKL@SRI-NIC.ARPA

##   Simple Mail Transfer Protocol  ------------------------------- (SMTP)

      STATUS:  Recommended

      SPECIFICATION:  RFC 821 (in DPH)

      COMMENTS:

         The procedure for transmitting computer mail between hosts.

         This has been revised since the IPTW, it is in the "Internet
         Mail Protocols" volume of November 1982.  RFC 788 (in IPTW) is
         obsolete.

         There have been many misunderstandings and errors in the early
         implementations.  Some documentation of these problems can be
         found in the file [ISIB]<SMTP>MAIL.ERRORS.



Reynolds & Postel                                              [Page 19]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


         Some minor differences between RFC 821 and RFC 822 should be
         resolved.

      OTHER REFERENCES:

         RFC 822 - Mail Header Format Standards

            This has been revised since the IPTW, it is in the "Internet
            Mail Protocols" volume of November 1982.  RFC 733 (in IPTW)
            is obsolete.  Further revision of RFC 822 is needed to
            correct some minor errors in the details of the
            specification.

            Note:  RFC 822 is not included in the DPH (an accident, it
            should have been).

         MIL-STD-1781 (in DPH) - Simple Mail Transfer Protocol (SMTP)

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Postel@ISI.EDU

##   Network News Transfer Protocol  ------------------------------ (NNTP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 977

      COMMENTS:

         NNTP specifies a protocol for the distribution, inquiry,
         retrieval, and posting of news articles using a reliable
         stream-based transmission of news among the ARPA-Internet
         community.  NNTP is designed so that news articles are stored
         in a central database allowing a subscriber to select only
         those items he wishes to read.  Indexing, cross-referencing,
         and expiration of aged messages are also provided.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES: Internet Protocol

      CONTACT: Brian@SDCSVAX.UCSD.EDU



Reynolds & Postel                                              [Page 20]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Bulk Data Transfer Protocol  ------------------------------- (NETBLT)

      STATUS:  Experimental

      SPECIFICATION:  RFC 969

      COMMENTS:

         This is a preliminary discussion of the Network Block Transfer
         (NETBLT) protocol.  NETBLT is intended for the rapid transfer
         of a large quantity of data between computers.  It provides a
         transfer that is reliable and flow controlled, and is
         structured to provide maximum throughput over a wide variety of
         networks.

         Note: A new RFC on the revised NETBLT is coming soon.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol, User Datagram
      Protocol

      CONTACT: DClark@MIT-MULTICS.ARPA

##   Resource Location Protocol  ----------------------------------- (RLP)

      STATUS:   Elective

      SPECIFICATION:   RFC 887 (in DPH)

      COMMENTS:

         A resource location protocol for use in the ARPA-Internet.
         This protocol utilizes the User Datagram Protocol (UDP) which
         in turn calls on the Internet Protocol to deliver its
         datagrams.

      OTHER REFERENCES:

      DEPENDENCIES: User Datagram Protocol

      CONTACT:   Accetta@A.CS.CMU.EDU







Reynolds & Postel                                              [Page 21]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Loader Debugger Protocol  ------------------------------------- (LDP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 909

      COMMENTS:

         Specifies a protocol for loading, dumping and debugging target
         machines from hosts in a network environment.  It is also
         designed to accommodate a variety of target CPU types.  It
         provides a powerful set of debugging services, while at the
         same time, it is structured so that a simple subset may be
         implemented in applications like boot loading where efficiency
         and space are at a premium.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES:  Reliable Data Protocol

      CONTACT:  Hinden@BBN.COM

##   Remote Job Entry  --------------------------------------------- (RJE)

      STATUS:  Elective

      SPECIFICATION:  RFC 407 (in DPH)

      COMMENTS:

         The general protocol for submitting batch jobs and retrieving
         the results.

         Some changes needed for use with TCP.

         No known active implementations.

      OTHER REFERENCES:

      DEPENDENCIES: File Transfer Protocol, Transmission Control
      Protocol

      CONTACT: Postel@ISI.EDU



Reynolds & Postel                                              [Page 22]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Remote Job Service  ---------------------------------------- (NETRJS)

      STATUS:  Elective

      SPECIFICATION:  RFC 740 (in DPH)

      COMMENTS:

         A special protocol for submitting batch jobs and retrieving the
         results used with the UCLA IBM OS system.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

         Revision in progress.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Braden@ISI.EDU

##   Remote Telnet Service  ------------------------------------ (RTELNET)

      STATUS:  Elective

      SPECIFICATION:  RFC 818 (in DPH)

      COMMENTS:

         Provides special access to user Telnet on a remote system.

      OTHER REFERENCES:

      DEPENDENCIES: Telnet, Transmission Control Protocol

      CONTACT: Postel@ISI.EDU












Reynolds & Postel                                              [Page 23]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Graphics Protocol  --------------------------------------- (GRAPHICS)

      STATUS:  Elective

      SPECIFICATION:  NIC 24308 (in DPH)

      COMMENTS:

         The protocol for vector graphics.

         Very minor changes needed for use with TCP.

         No known active implementations.

         Note:  The DPH claims that this is RFC 493, but RFC 493 is
         actually a different earlier specification.

      OTHER REFERENCES:

      DEPENDENCIES: Telnet, Transmission Control Protocol

      CONTACT: Postel@ISI.EDU

##   Echo Protocol  ----------------------------------------------- (ECHO)

      STATUS:  Recommended

      SPECIFICATION:  RFC 862 (in DPH)

      COMMENTS:

         Debugging protocol, sends back whatever you send it.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol
                    or User Datagram Protocol

      CONTACT: Postel@ISI.EDU










Reynolds & Postel                                              [Page 24]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Discard Protocol  ----------------------------------------- (DISCARD)

      STATUS:  Elective

      SPECIFICATION:  RFC 863 (in DPH)

      COMMENTS:

         Debugging protocol, throws away whatever you send it.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol
                    or User Datagram Protocol

      CONTACT: Postel@ISI.EDU

##   Character Generator Protocol  ----------------------------- (CHARGEN)

      STATUS:  Elective

      SPECIFICATION:  RFC 864 (in DPH)

      COMMENTS:

         Debugging protocol, sends you ASCII data.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol
                    or User Datagram Protocol

      CONTACT: Postel@ISI.EDU
















Reynolds & Postel                                              [Page 25]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Quote of the Day Protocol  ---------------------------------- (QUOTE)

      STATUS:  Elective

      SPECIFICATION:  RFC 865 (in DPH)

      COMMENTS:

         Debugging protocol, sends you a short ASCII message.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol
                    or User Datagram Protocol

      CONTACT: Postel@ISI.EDU

##   Active Users Protocol  -------------------------------------- (USERS)

      STATUS:  Elective

      SPECIFICATION:  RFC 866 (in DPH)

      COMMENTS:

         Lists the currently active users.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol
                    or User Datagram Protocol

      CONTACT: Postel@ISI.EDU

##   Finger Protocol  ------------------------------------------- (FINGER)

      STATUS:  Elective

      SPECIFICATION:  RFC 742 (in DPH)

      COMMENTS:

         Provides information on the current or most recent activity of
         a user.

         Some extensions have been suggested.



Reynolds & Postel                                              [Page 26]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


         Some changes are are needed for TCP.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Postel@ISI.EDU

##   WhoIs Protocol  ------------------------------------------- (NICNAME)

      STATUS:  Elective

      SPECIFICATION:  RFC 954 (in DPH)

      COMMENTS:

         Accesses the ARPANET Directory database.  Provides a way to
         find out about people, their addresses, phone numbers,
         organizations, and mailboxes.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Feinler@SRI-NIC.ARPA

##   Domain Name Protocol  -------------------------------------- (DOMAIN)

      STATUS:  Recommended

      SPECIFICATION:  RFC 881, RFC 882, RFC 883 (in DPH)

      COMMENTS:

      OTHER REFERENCES:

         RFC 920 - Domain Requirements

         RFC 921 - Domain Name Implementation Schedule - Revised

         RFC 973 - Domain System Changes and Observations

         RFC 974 - Mail Routing and the Domain System

      DEPENDENCIES: Transmission Control Protocol
                    or User Datagram Protocol



Reynolds & Postel                                              [Page 27]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


      CONTACT: Mockapetris@ISI.EDU

##   HOSTNAME Protocol  --------------------------------------- (HOSTNAME)

      STATUS:  Elective

      SPECIFICATION:  RFC 953 (in DPH)

      COMMENTS:

         Accesses the Registered Internet Hosts database (HOSTS.TXT).
         Provides a way to find out about a host in the Internet, its
         Internet Address, and the protocols it implements.

      OTHER REFERENCES:

         RFC 952 - Host Table Specification

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Feinler@SRI-NIC.ARPA

##   Host Name Server Protocol  ----------------------------- (NAMESERVER)

      STATUS:  Experimental

      SPECIFICATION:  IEN 116 (in DPH)

      COMMENTS:

         Provides machine oriented procedure for translating a host name
         to an Internet Address.

         This specification has significant problems:  1) The name
         syntax is out of date.  2) The protocol details are ambiguous,
         in particular, the length octet either does or doesn't include
         itself and the op code.  3) The extensions are not supported by
         any known implementation.

         This protocol is now abandoned in favor of the DOMAIN protocol.
         Further implementations of this protocol are not advised.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:



Reynolds & Postel                                              [Page 28]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


      DEPENDENCIES: User Datagram Protocol

      CONTACT: Postel@ISI.EDU

##   CSNET Mailbox Name Server Protocol  ---------------------- (CSNET-NS)

      STATUS:  Experimental

      SPECIFICATION:  CS-DN-2 (in DPH)

      COMMENTS:

         Provides access to the CSNET data base of users to give
         information about users names, affiliations, and mailboxes.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Solomon@WISC.EDU

##   Daytime Protocol  ----------------------------------------- (DAYTIME)

      STATUS:  Elective

      SPECIFICATION:  RFC 867 (in DPH)

      COMMENTS:

         Provides the day and time in ASCII character string.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol
                    or User Datagram Protocol

      CONTACT: Postel@ISI.EDU









Reynolds & Postel                                              [Page 29]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Network Time Protocol  ---------------------------------------- (NTP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 958

      COMMENTS:

         A proposed protocol for synchronizing a set of network clocks
         using a set of distributed clients and servers.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:  RFC 778, RFC 891, RFC 956, and RFC 957.

      DEPENDENCIES: User Datagram Protocol

      CONTACT: Mills@ISI.EDU

##   Time Server Protocol  ---------------------------------------- (TIME)

      STATUS:  Elective

      SPECIFICATION:  RFC 868 (in DPH)

      COMMENTS:

         Provides the time as the number of seconds from a specified
         reference time.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol
                    or User Datagram Protocol

      CONTACT: Postel@ISI.EDU












Reynolds & Postel                                              [Page 30]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   DCNET Time Server Protocol  --------------------------------- (CLOCK)

      STATUS:  Experimental

      SPECIFICATION:  RFC 778

      COMMENTS:

         Provides a mechanism for keeping synchronized clocks.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES: Internet Control Message Protocol

      CONTACT: Mills@ISI.EDU

##   SUPDUP Protocol  ------------------------------------------- (SUPDUP)

      STATUS:  Elective

      SPECIFICATION:  RFC 734 (in DPH)

      COMMENTS:

         A special Telnet like protocol for display terminals.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Crispin@SU-SCORE.STANFORD.EDU















Reynolds & Postel                                              [Page 31]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Internet Message Protocol  ------------------------------------ (MPM)

      STATUS:  Experimental

      SPECIFICATION:  RFC 759 (in DPH)

      COMMENTS:

         This is an experimental multimedia mail transfer protocol.  The
         implementation is called a Message Processing Module or MPM.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

         RFC 767 - Structured Document Formats

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Postel@ISI.EDU

##   Post Office Protocol - Version 2  ---------------------------- (POP2)

      STATUS:  Experimental

      SPECIFICATION:  RFC 937 (in DPH)

      COMMENTS:

         The intent of the Post Office Protocol - Version 2 (POP2) is to
         allow a user's workstation to access mail from a mailbox
         server.  It is expected that mail will be posted from the
         workstation to the mailbox server via the Simple Mail Transfer
         Protocol (SMTP).

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:  Obsoletes RFC 918

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: JKReynolds@ISI.EDU





Reynolds & Postel                                              [Page 32]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Network Standard Text Editor  ------------------------------- (NETED)

      STATUS:  Elective

      SPECIFICATION:  RFC 569 (in DPH)

      COMMENTS:

         Describes a simple line editor which could be provided by every
         Internet host.

      OTHER REFERENCES:

      DEPENDENCIES:

      CONTACT:  Postel@ISI.EDU

##   Authentication Service  -------------------------------------- (AUTH)

      STATUS:  Experimental

      SPECIFICATION:  RFC 931

      COMMENTS:

         This server provides a means to determine the identity of a
         user of a particular TCP connection.  Given a TCP port number
         pair, it returns a character string which identifies the owner
         of that connection on the server's system.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:  Supercedes RFC 912

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: StJohns@SRI-NIC.ARPA











Reynolds & Postel                                              [Page 33]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Bootstrap Protocol  ----------------------------------------- (BOOTP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 951

      COMMENTS:

         This proposed protocol provides an IP/UDP bootstrap protocol
         which allows a diskless client machine to discover its own IP
         address, the address of a server host, and the name of a file
         to be loaded into memory and executed.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES: Internet Protocol, User Datagram Protocol

      CONTACT: Croft@SUMEX-AIM.STANFORD.EDU




























Reynolds & Postel                                              [Page 34]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


# /APPENDICES

##   Assigned Numbers  ---------------------------------------------------

      STATUS:  None

      SPECIFICATION:  RFC 990

      COMMENTS:

         Describes the fields of various protocols that are assigned
         specific values for actual use, and lists the currently
         assigned values.

         Issued November 1986, replaces RFC 960, RFC 790 in IPTW, and
         RFC 943.

      OTHER REFERENCES:

      CONTACT: JKReynolds@ISI.EDU

##   Pre-emption  --------------------------------------------------------

      STATUS:  Elective

      SPECIFICATION:  RFC 794 (in DPH)

      COMMENTS:

         Describes how to do pre-emption of TCP connections.

      OTHER REFERENCES:

      CONTACT: Postel@ISI.EDU















Reynolds & Postel                                              [Page 35]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Service Mappings  ---------------------------------------------------

      STATUS:  None

      SPECIFICATION:  RFC 795 (in DPH)

      COMMENTS:

         Describes the mapping of the IP type of service field onto the
         parameters of some specific networks.

         Out of date, needs revision.

      OTHER REFERENCES:

      CONTACT: Postel@ISI.EDU

##   Address Mappings  ---------------------------------------------------

      STATUS:  None

      SPECIFICATION:  RFC 796 (in DPH)

      COMMENTS:

         Describes the mapping between Internet Addresses and the
         addresses of some specific networks.

         Out of date, needs revision.

      OTHER REFERENCES:

      CONTACT:  Postel@ISI.EDU

##   Document Formats  ---------------------------------------------------

      STATUS:  None

      SPECIFICATION:  RFC 678 (in DPH)

      COMMENTS:

         Describes standard format rules for several types of documents.

      OTHER REFERENCES:

      CONTACT:  Postel@ISI.EDU


Reynolds & Postel                                              [Page 36]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Bitmap Formats  -----------------------------------------------------

      STATUS:  None

      SPECIFICATION:  RFC 797 (in DPH)

      COMMENTS:

         Describes a standard format for bitmap data.

      OTHER REFERENCES:

      CONTACT:  Postel@ISI.EDU

##   Facsimile Formats  --------------------------------------------------

      STATUS:  None

      SPECIFICATION:  RFC 804

      COMMENTS:

         Describes a standard format for facsimile data.

      OTHER REFERENCES:  RFC 769 (in DPH)

      CONTACT:  Postel@ISI.EDU

##   Host-Front End Protocol  ------------------------------------- (HFEP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 929

      COMMENTS:

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:  RFC 928

      DEPENDENCIES:

      CONTACT: Padlipsky@ISI.EDU





Reynolds & Postel                                              [Page 37]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Internet Protocol on ARPANET  ----------------------------- (IP-ARPA)

      STATUS:  Recommended

      SPECIFICATION:  BBN Report 1822

      COMMENTS:

         Describes a standard for the transmission of IP Datagrams over
         the ARPANET.

      OTHER REFERENCES: RFC 851, RFC 852, RFC 878 (in DPH), RFC 979

      CONTACT:  Malis@BBN.COM

##   Internet Protocol on WBNET  --------------------------------- (IP-WB)

      STATUS:  Recommended

      SPECIFICATION:  RFC 907 (in DPH)

      COMMENTS:

         Describes a standard for the transmission of IP Datagrams over
         the Wideband Net.

         This protocol specifies the network-access level communication
         between an arbitrary computer, called a host, and a
         packet-switched satellite network, e.g., SATNET or WBNET.

         Note:  Implementations of HAP should be performed in
         coordination with satellite network development and operations
         personnel.

      OTHER REFERENCES:

      CONTACT:  Blumenthal@BBN.COM












Reynolds & Postel                                              [Page 38]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Host Access Protocol  -------------------------------------- (IP-SAT)

      STATUS:  Recommended

      SPECIFICATION:  RFC 907  (in DPH)

      COMMENTS:

         Describes a standard for the transmission of IP Datagrams over
         the SATNET.

         This protocol specifies the network-access level communication
         between an arbitrary computer, called a host, and a
         packet-switched satellite network, e.g., SATNET or WBNET.

         Note:  Implementations of HAP should be performed in
         coordination with satellite network development and operations
         personnel.

      OTHER REFERENCES:

      DEPENDENCIES:

      CONTACT: Schoen@BBN.COM

##   Internet Protocol on X.25 Networks  ------------------------ (IP-X25)

      STATUS:  Recommended

      SPECIFICATION:  RFC 877 (in DPH)

      COMMENTS:

         Describes a standard for the transmission of IP Datagrams over
         Public Data Networks.

      OTHER REFERENCES:

      CONTACT:  jtk@PURDUE.EDU










Reynolds & Postel                                              [Page 39]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Internet Protocol on DC Networks  --------------------------- (IP-DC)

      STATUS:  Elective

      SPECIFICATION: RFC 891 (in DPH)

      COMMENTS:

      OTHER REFERENCES:

         RFC 778 - DCNET Internet Clock Service

      CONTACT:  Mills@ISI.EDU

##   Internet Protocol on Ethernet Networks  ---------------------- (IP-E)

      STATUS:  Recommended

      SPECIFICATION: RFC 894 (in DPH)

      COMMENTS:

      OTHER REFERENCES:  RFC 893

      CONTACT:  Postel@ISI.EDU

##   Internet Protocol on Experimental Ethernet Networks  -------- (IP-EE)

      STATUS:  Recommended

      SPECIFICATION: RFC 895 (in DPH)

      COMMENTS:

      OTHER REFERENCES:

      CONTACT:  Postel@ISI.EDU












Reynolds & Postel                                              [Page 40]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Internet Protocol on IEEE 802  ---------------------------- (IP-IEEE)

      STATUS:  Recommended

      SPECIFICATION: RFC 948 (in DPH)

      COMMENTS:

         A proposed protocol of two methods of encapsulating Internet
         Protocol (IP) datagrams on an IEEE 802.3 network.  Currently
         being revised to be generalized for all 802 networks.

         At an ad hoc special session on "IEEE 802 Networks and ARP"
         held during the TCP Vendors Workshop (August 1986), an approach
         to a consistent way to sent DOD-IP datagrams and other IP
         related protocols on 802 networks was developed.

         Due to some evolution of the IEEE 802.2 standards and the need
         to provide for a standard way to do additional DOD-IP related
         protocols (such as Address Resolution Protocol (ARP)) on IEEE
         802 networks, the following new policy is established, which
         will replace the current policy (see RFC-990 section on IEEE
         802 Numbers of Interest, and RFC-948).

         The policy is for DDN and ARPA-Internet community to use IEEE
         802.2 encapsulation on 802.3, 802.4, and 802.5 networks by
         using the SNAP with an organization code indicating that the
         following 16 bits specify the Ethertype code (where IP = 2048
         (0800 hex), see RFC-990  section on Ethernet Numbers of
         Interest).

                                                                  Header

            ...--------+--------+--------+
             MAC Header|      Length     |               802.{3/4/5} MAC
            ...--------+--------+--------+

            +--------+--------+--------+
            | Dsap=K1| Ssap=K1| control|                       802.2 SAP
            +--------+--------+--------+

            +--------+--------+---------+--------+--------+
            |protocol id or org code =K2|    Ether Type   |   802.2 SNAP
            +--------+--------+---------+--------+--------+

         The values of K1 and K2 must be assigned by the IEEE.  There is
         already assigned a value of K1 that indicates that the 5-octet


Reynolds & Postel                                              [Page 41]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


         SNAP header follows.  We can use this value.  There may be a
         value of K2 that is already assigned that indicates that the
         last two octets of the SNAP header holds the EtherType.  If so
         we may be able to use this value.

         The total length of the SAP Header and the SNAP header is
         8-octets, making the 802.2 protocol overhead come out on a nice
         octet boundary.

         K1 is 170.  The IEEE like to talk about things in bit
         transmission order and specifies this value as 01010101.  In
         big-endian order, as used in Internet specifications, this
         becomes 10101010 binary, or AA hex, or 170 decimal.

         We believe that K2 is 0 (zero).  This must be further
         investigated, but as an interim measure use K2 = 0.

      OTHER REFERENCES:

      CONTACT:  Postel@ISI.EDU

##   Internet Subnet Protocol  ---------------------------------- (IP-SUB)

      STATUS:  Recommended

      SPECIFICATION: RFC 950

      COMMENTS:

         This is a very important feature and should be included in all
         IP implementations.

         Specifies procedures for the use of subnets, which are logical
         sub-sections of a single Internet network.

      OTHER REFERENCES:  RFC 940, RFC 917, RFC 925, RFC 932, RFC 936,
      RFC 922

      DEPENDENCIES:

      CONTACT:  Mogul@SU-SCORE.STANFORD.EDU








Reynolds & Postel                                              [Page 42]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


##   Address Resolution Protocol  ---------------------------------- (ARP)

      STATUS:  Recommended

      SPECIFICATION: RFC 826  (IN DPH)

      COMMENTS:

         This is a procedure for finding the network hardware address
         corresponding to an Internet Address.

      OTHER REFERENCES:

      CONTACT:  Postel@ISI.EDU

##   A Reverse Address Resolution Protocol  ----------------------- (RARP)

      STATUS:  Elective

      SPECIFICATION: RFC 903 (IN DPH)

      COMMENTS:

         This is a procedure for workstations to dynamically find their
         protocol address (e.g., their Internet Address), when they only
         only know their hardware address (e.g., their attached physical
         network address).

      OTHER REFERENCES:

      CONTACT:  Mogul@SU-SCORE.STANFORD.EDU

##   Multi-LAN Address Resolution Protocol  ----------------------- (MARP)

      STATUS:  Experimental

      SPECIFICATION: RFC 925

      COMMENTS:

         Discussion of the various problems and potential solutions of
         "transparent subnets" in a multi-LAN environment.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:  RFC 917, RFC 826


Reynolds & Postel                                              [Page 43]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


      DEPENDENCIES:

      CONTACT:  Postel@ISI.EDU

##   Broadcasting Internet Datagrams  ------------------------- (IP-BROAD)

      STATUS:  Recommended

      SPECIFICATION:  RFC 919

      COMMENTS:

         A proposed protocol of simple rules for broadcasting Internet
         datagrams on local networks that support broadcast, for
         addressing broadcasts, and for how gateways should handle them.

         Recommended in the sense of "if you do broadcasting at all then
         do it this way".

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:  RFC 922

      DEPENDENCIES:

      CONTACT: Mogul@SU-SCORE.STANFORD.EDU

##   Broadcasting Internet Datagrams with Subnets --------- (IP-SUB-BROAD)

      STATUS:  Recommended

      SPECIFICATION:  RFC 922

      COMMENTS:

         A proposed protocol of simple rules for broadcasting Internet
         datagrams on local networks that support broadcast, for
         addressing broadcasts, and for how gateways should handle them.

         Recommended in the sense of "if you do broadcasting with
         subnets at all then do it this way".

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES: RFC 919


Reynolds & Postel                                              [Page 44]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


      DEPENDENCIES:

      CONTACT: Mogul@SU-SCORE.STANFORD.EDU

##   Reliable Asynchronous Transfer Protocol  --------------------- (RATP)

      STATUS:  Experimental

      SPECIFICATION:  RFC 916

      COMMENTS:

         This paper specifies a protocol which allows two programs to
         reliably communicate over a communication link.  It ensures
         that the data entering one end of the link if received arrives
         at the other end intact and unaltered.  This proposed protocol
         is designed to operate over a full duplex point-to-point
         connection.  It contains some features which tailor it to the
         RS-232 links now in current use.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:

      DEPENDENCIES: Transmission Control Protocol

      CONTACT: Finn@ISI.EDU

##   Thinwire Protocol  --------------------------------------- (THINWIRE)

      STATUS:  Experimental

      SPECIFICATION:  RFC 914

      COMMENTS:

         This paper discusses a Thinwire Protocol for connecting
         personal computers to the ARPA-Internet.  It primarily focuses
         on the particular problems in the ARPA-Internet of low speed
         network interconnection with personal computers, and possible
         methods of solution.

         Please discuss any plans for implementation or use of this
         protocol with the contact.

      OTHER REFERENCES:


Reynolds & Postel                                              [Page 45]



RFC 991                                                    November 1986
Official ARPA-Internet Protocols


      DEPENDENCIES:

      CONTACT: Farber@HUEY.UDEL.EDU














































Reynolds & Postel                                              [Page 46]
