/. OpenSSH    
========================================================
https://www.openssh.com/

[OpenSSH 9.5] released October 4, 2023

OpenSSH is the premier connectivity tool for remote login with the SSH protocol. It encrypts all traffic to eliminate eavesdropping, connection hijacking, and other attacks. In addition, OpenSSH provides a large suite of secure tunneling capabilities, several authentication methods, and sophisticated configuration options.

The OpenSSH suite consists of the following tools:

*   Remote operations are done using 
    [ssh](https://man.openbsd.org/ssh.1), 
    [scp](https://man.openbsd.org/scp.1), and 
    [sftp](https://man.openbsd.org/sftp.1).

*   Key management with 
    [ssh-add](https://man.openbsd.org/ssh-add.1), 
    [ssh-keysign](https://man.openbsd.org/ssh-keysign.8), 
    [ssh-keyscan](https://man.openbsd.org/ssh-keyscan.1), and 
    [ssh-keygen](https://man.openbsd.org/ssh-keygen.1).

*   The service side consists of 
    [sshd](https://man.openbsd.org/sshd.8), 
    [sftp-server](https://man.openbsd.org/sftp-server.8), and 
    [ssh-agent](https://man.openbsd.org/ssh-agent.1).

OpenSSH is developed by a few developers of the [OpenBSD Project](https://www.openbsd.org) and made available under a BSD-style license.

OpenSSH is incorporated into many commercial products, but very few of those companies assist OpenSSH with funding.

Contributions towards OpenSSH can be sent to the [OpenBSD Foundation](https://www.openbsd.org/donations.html).


/. OpenSSH: Specifications    
========================================================
https://www.openssh.com/specs.html

[_Open_**SSH**](/) Specifications
---------------------------------

* * *

OpenSSH implements the following specifications. Where versions are noted, support for the 
corresponding specification was added or removed in that OpenSSH version.

### SSH protocol version 2 Core RFCs

Source: [secsh working group](https://datatracker.ietf.org/wg/secsh/)

| Specification | Description |
|---------------|-------------|
| [RFC4250](https://tools.ietf.org/html/rfc4250) | SSH Protocol Assigned Numbers
| [RFC4251](https://tools.ietf.org/html/rfc4251) | SSH Protocol Architecture
| [RFC4252](https://tools.ietf.org/html/rfc4252) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=4252 "errata") | SSH Authentication Protocol
| [RFC4253](https://tools.ietf.org/html/rfc4253) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=4253 "errata") | SSH Transport Layer Protocol
| [RFC4254](https://tools.ietf.org/html/rfc4254) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=4254 "errata") | SSH Connection Protocol


### SSH protocol version 2 Extension RFCs

| Specification | Versions | Description |
|---------------|----------|-------------|
| [RFC4255](https://tools.ietf.org/html/rfc4255) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=4255 "errata") | | Using DNS to Securely Publish SSH Key Fingerprints (SSHFP)
| [RFC4256](https://tools.ietf.org/html/rfc4256) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=4256 "errata") | | Generic Message Exchange Authentication (aka `keyboard-interactive`)
| [RFC4335](https://tools.ietf.org/html/rfc4335) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=4335 "errata") | | SSH Session Channel Break Extension
| [RFC4344](https://tools.ietf.org/html/rfc4344) | | SSH Transport Layer Encryption Modes (`aes128-ctr`, ``` aes192-ctr``, `aes256-ctr`)`` ```
| [RFC4345](https://tools.ietf.org/html/rfc4345) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=4345 "errata") | [4.1] - [7.6] | Improved Arcfour Modes for the SSH Transport Layer Protocol
| [RFC4419](https://tools.ietf.org/html/rfc4419) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=4419 "errata") | | Diffie-Hellman Group Exchange
| [RFC4462](https://tools.ietf.org/html/rfc4462) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=4462 "errata") | | GSS-API Authentication and Key Exchange (only authentication implemented)
| [RFC4716](https://tools.ietf.org/html/rfc4716) | | SSH Public Key File Format (import and export via [ssh-keygen](https://man.openbsd.org/ssh-keygen.1) only).
| [RFC5656](https://tools.ietf.org/html/rfc5656) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=5656 "errata") | | Elliptic Curve Algorithm Integration in SSH
| [RFC6594](https://tools.ietf.org/html/rfc6594) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=6594 "errata") | [6.1] - | SHA-256 SSHFP Resource Records
| [RFC6668](https://tools.ietf.org/html/rfc6668) | [5.9] - | SHA-2 Data Integrity Algorithms (`hmac-sha2-256`, `hmac-sha2-512`)
| [RFC7479](https://tools.ietf.org/html/rfc7479) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=7479 "errata") | [6.5] - | ED25519 SSHFP Resource Records
| [RFC8160](https://tools.ietf.org/html/rfc8160) | [7.3] - | IUTF8 Terminal Mode
| [RFC8270](https://tools.ietf.org/html/rfc8270) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=8270 "errata") | [7.1] - | Increase Diffie-Hellman Modulus Size
| [RFC8308](https://tools.ietf.org/html/rfc8308) | [7.2] - | Extension Negotiation in the Secure Shell (SSH) Protocol (`ext-info-s`, `ext-info-c`)
| [RFC8332](https://tools.ietf.org/html/rfc8332) | [7.2] - | Use of RSA Keys with SHA-2 (`rsa-sha2-256`, `rsa-sha2-512`)
| [RFC8709](https://tools.ietf.org/html/rfc8709) [(e)](https://www.rfc-editor.org/errata_search.php?rfc=8709 "errata") | [6.5] - | Ed25519 and Ed448 Public Key Algorithms (`ssh-ed25519` only)
| [RFC8731](https://tools.ietf.org/html/rfc8731) | [7.3] - | Key Exchange Method Using Curve25519 and Curve448 (`curve25519-sha256` only)

### SSH protocol version 2 draft specifications

| Specification | Versions | Description |
|---------------|----------|-------------|
| [draft-ietf-secsh-filexfer-02](https://tools.ietf.org/html/draft-ietf-secsh-filexfer-02) | | SSH File Transfer Protocol version 3
| [draft-ietf-secsh-filexfer-extensions-00](https://tools.ietf.org/html/draft-ietf-secsh-filexfer-extensions-00) | [9.0] - | SFTP extension [`copy-data`](https://datatracker.ietf.org/doc/html/draft-ietf-secsh-filexfer-extensions-00#section-7)
| [draft-ietf-secsh-filexfer-extensions-00](https://tools.ietf.org/html/draft-ietf-secsh-filexfer-extensions-00) | [9.1] - | SFTP extension [`home-directory`](https://datatracker.ietf.org/doc/html/draft-ietf-secsh-filexfer-extensions-00#section-5)
| [draft-ietf-curdle-ssh-kex-sha2-03](https://tools.ietf.org/html/draft-ietf-curdle-ssh-kex-sha2-03) | [7.3] - | Key Exchange (KEX) Method Updates and Recommendations
| [draft-ietf-secsh-scp-sftp-ssh-uri-04](https://tools.ietf.org/html/draft-ietf-secsh-scp-sftp-ssh-uri-04) | [7.6] - | Uniform Resource Identifier (URI) Scheme for SSH and SFTP (with the exception of fingerprint)

### SSH protocol version 2 vendor extensions

| Specification | Versions | Description |
|---------------|----------|-------------|

1.  [PROTOCOL](https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL?annotate=HEAD)

    An overview of all vendor extensions detailed below, and the specifications of the following protocol extensions:

    *   SSH2 connection:
        *   `eow@openssh.com`, `no-more-sessions@openssh.com`
        *   `hostkeys-00@openssh.com`, `hostkeys-prove-00@openssh.com` (hostkey rotation)
        *   `tun@openssh.com` (layer 2 and 3 tunnelling)
        *   `direct-streamlocal@openssh.com`, `forwarded-streamlocal@openssh.com`, `streamlocal-forward@openssh.com`, `cancel-streamlocal-forward@openssh.com` (Unix domain socket forwarding)
        *   `INFO@openssh.com` (BSD SIGINFO)
        *   `publickey-hostbound-v00@openssh.com` (host-bound public key authentication)
    *   SSH2 transport ciphers: `aes128-gcm@openssh.com`, `aes256-gcm@openssh.com`
    *   SSH2 transport MACs: `hmac-sha1-etm@openssh.com`, `hmac-sha1-96-etm@openssh.com`, `hmac-sha2-256-etm@openssh.com`, `hmac-sha2-512-etm@openssh.com`, `hmac-md5-etm@openssh.com`, `hmac-md5-96-etm@openssh.com`, `umac-64-etm@openssh.com`, `umac-128-etm@openssh.com`
    *   SFTP: `posix-rename@openssh.com`, `statvfs@openssh.com`, `fstatvfs@openssh.com`, `hardlink@openssh.com`, `fsync@openssh.com`, `lesetstat@openssh.com`, `limits@openssh.com`, `expand-path@openssh.com`

2.  [draft-miller-ssh-agent-04](https://tools.ietf.org/html/draft-miller-ssh-agent-04)

    ssh-agent protocol (`auth-agent@openssh.com`)

3.  [PROTOCOL.certkeys](https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL.certkeys?annotate=HEAD)

    `ssh-rsa-cert-v01@openssh.com`, `ssh-dsa-cert-v01@openssh.com`, `ecdsa-sha2-nistp256-cert-v01@openssh.com`, `ecdsa-sha2-nistp384-cert-v01@openssh.com`, `ecdsa-sha2-nistp521-cert-v01@openssh.com`, `ssh-ed25519-cert-v01@openssh.com`, `rsa-sha2-256-cert-v01@openssh.com`, `rsa-sha2-512-cert-v01@openssh.com` : new public key algorithms supporting certificates.

4.  [PROTOCOL.chacha20poly1305](https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL.chacha20poly1305?annotate=HEAD)

    `chacha20-poly1305@openssh.com` authenticated encryption mode.

5.  [PROTOCOL.key](https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL.key?annotate=HEAD)

    OpenSSH private key format (`openssh-key-v1`).

6.  [PROTOCOL.krl](https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL.krl?annotate=HEAD)

    Key Revocation Lists for OpenSSH keys and certificates.

7.  [PROTOCOL.mux](https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL.mux?annotate=HEAD)

    Multiplexing protocol used by ssh(1) ControlMaster connection-sharing.

8.  [draft-miller-secsh-umac-01](https://tools.ietf.org/html/draft-miller-secsh-umac-01)

    Use of UMAC in SSH (`umac-64@openssh.com`, `umac-128@openssh.com`)

9.  [draft-miller-secsh-compression-delayed-00](https://tools.ietf.org/html/draft-miller-secsh-compression-delayed-00)

    Delayed compression until after authentication (`zlib@openssh.com`)

10.  [curve25519-sha256@libssh.org](https://git.libssh.org/projects/libssh.git/tree/doc/curve25519-sha256@libssh.org.txt)

   `curve25519-sha256@libssh.org` key exchange method. This is identical to `curve25519-sha256` as later published in [RFC8731](https://tools.ietf.org/html/rfc8731).

11.  [draft-kampanakis-curdle-pq-ssh-00](https://tools.ietf.org/html/draft-kampanakis-curdle-pq-ssh-00)  [8.0] - [8.5]

   Post-quantum public key algorithms (`sntrup4591761x25519-sha512@tinyssh.org`)

### Other specifications

| Specification | Description |
|---------------|-------------|
| [socks4.protocol](txt/socks4.protocol) | SOCKS protocol version 4. Used for `ssh(1) DynamicForward`.
| [socks4a.protocol](txt/socks4a.protocol) | SOCKS protocol version 4a. Used for `ssh(1) DynamicForward`.
| [RFC1928](https://tools.ietf.org/html/rfc1928) | SOCKS protocol version 5. Used for `ssh(1) DynamicForward`.
| [RFC1349](https://tools.ietf.org/html/rfc1349) [RFC8325](https://tools.ietf.org/html/rfc8325) | IP Type of Service (ToS) and Differentiated Services. OpenSSH will automatically set the IP Type of Service according to RFC8325 unless otherwise specified via the `IPQoS` keyword in [ssh_config](https://man.openbsd.org/ssh_config) and [sshd_config](https://man.openbsd.org/sshd_config). Versions 7.7 and earlier will set it per rfc1349 unless otherwise specified.



/CORE RFC4250  The Secure Shell (SSH) Protocol Assigned Numbers
========================================================
https://www.rfc-editor.org/rfc/rfc4250.txt



Network Working Group                                        S. Lehtinen
Request for Comments: 4250              SSH Communications Security Corp
Category: Standards Track                                C. Lonvick, Ed.
                                                     Cisco Systems, Inc.
                                                            January 2006


            The Secure Shell (SSH) Protocol Assigned Numbers

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   This document defines the instructions to the IANA and the initial
   state of the IANA assigned numbers for the Secure Shell (SSH)
   protocol.  It is intended only for the initialization of the IANA
   registries referenced in the set of SSH documents.

/. [Table of Contents](){id=t4250}
========================================================

- 1. Introduction ....................................... [2](#p4250_02){id=t4250_02}
- 2. Contributors ....................................... [3](#p4250_03){id=t4250_03}
- 3. Conventions Used in This Document .................. [3](#p4250_03){id=t4250_03}
-    3.1. RFC 2119 Keywords ............................. [3](#p4250_03){id=t4250_03}
-    3.2. RFC 2434 Keywords ............................. [3](#p4250_03){id=t4250_03}
-    3.3. Protocol Fields and Values .................... [4](#p4250_04){id=t4250_04}
- 4. IANA Considerations ................................ [5](#p4250_05){id=t4250_05}
-    4.1. Message Numbers ............................... [5](#p4250_05){id=t4250_05}
-         4.1.1. Conventions ............................ [5](#p4250_05){id=t4250_05}
-         4.1.2. Initial Assignments .................... [6](#p4250_06){id=t4250_06}
-         4.1.3. Future Assignments ..................... [6](#p4250_06){id=t4250_06}
-    4.2. Disconnection Messages Reason Codes and Descriptions ... [7](#p4250_07){id=t4250_07}
-         4.2.1. Conventions ............................ [7](#p4250_07){id=t4250_07}
-         4.2.2. Initial Assignments .................... [7](#p4250_07){id=t4250_07}
-         4.2.3. Future Assignments ..................... [8](#p4250_08){id=t4250_08}
-    4.3. Channel Connection Failure Reason Codes and Descriptions ... [8](#p4250_08){id=t4250_08}
-         4.3.1. Conventions ............................ [8](#p4250_08){id=t4250_08}
-         4.3.2. Initial Assignments .................... [8](#p4250_08){id=t4250_08}



Lehtinen & Lonvick          Standards Track                     [Page 1](#t4250){id=p4250_01}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


-         4.3.3. Future Assignments ..................... [8](#p4250_08){id=t4250_08}
-         4.3.4. Notes about the PRIVATE USE Range ...... [9](#p4250_09){id=t4250_09}
-    4.4. Extended Channel Data Transfer data_type_code and Data ... [9](#p4250_09){id=t4250_09}
-         4.4.1. Conventions ............................ [9](#p4250_09){id=t4250_09}
-         4.4.2. Initial Assignments ................... [10](#p4250_10){id=t4250_10}
-         4.4.3. Future Assignments .................... [10](#p4250_10){id=t4250_10}
-    4.5. Pseudo-Terminal Encoded Terminal Modes ....... [10](#p4250_10){id=t4250_10}
-         4.5.1. Conventions ........................... [10](#p4250_10){id=t4250_10}
-         4.5.2. Initial Assignments ................... [10](#p4250_10){id=t4250_10}
-         4.5.3. Future Assignments .................... [12](#p4250_12){id=t4250_12}
-    4.6. Names ........................................ [12](#p4250_12){id=t4250_12}
-         4.6.1. Conventions for Names ................. [13](#p4250_13){id=t4250_13}
-         4.6.2. Future Assignments of Names ........... [13](#p4250_13){id=t4250_13}
-    4.7. Service Names ................................ [13](#p4250_13){id=t4250_13}
-    4.8. Authentication Method Names .................. [14](#p4250_14){id=t4250_14}
-    4.9. Connection Protocol Assigned Names ........... [14](#p4250_14){id=t4250_14}
-         4.9.1. Connection Protocol Channel Types ..... [14](#p4250_14){id=t4250_14}
-         4.9.2. Connection Protocol Global Request Names .... [14](#p4250_14){id=t4250_14}
-         4.9.3. Connection Protocol Channel Request Names ... [15](#p4250_15){id=t4250_15}
-         4.9.4. Initial Assignment of Signal Names .... [15](#p4250_15){id=t4250_15}
-         4.9.5. Connection Protocol Subsystem Names ... [15](#p4250_15){id=t4250_15}
-    4.10. Key Exchange Method Names ................... [16](#p4250_16){id=t4250_16}
-    4.11. Assigned Algorithm Names .................... [16](#p4250_16){id=t4250_16}
-         4.11.1. Encryption Algorithm Names ........... [16](#p4250_16){id=t4250_16}
-         4.11.2. MAC Algorithm Names .................. [17](#p4250_17){id=t4250_17}
-         4.11.3. Public Key Algorithm Names ........... [17](#p4250_17){id=t4250_17}
-         4.11.4. Compression Algorithm Names .......... [17](#p4250_17){id=t4250_17}
- 5. Security Considerations ........................... [17](#p4250_17){id=t4250_17}
- 6. References ........................................ [18](#p4250_18){id=t4250_18}
-    6.1. Normative References ......................... [18](#p4250_18){id=t4250_18}
-    6.2. Informative References ....................... [18](#p4250_18){id=t4250_18}
- Authors' Addresses ................................... [19](#p4250_19){id=t4250_19}
- Trademark Notice ..................................... [19](#p4250_19){id=t4250_19}

/. 1.  Introduction
========================================================

   This document does not define any new protocols.  It is intended only
   to create the initial state of the IANA databases for the SSH
   protocol and also contains instructions for future assignments.
   Except for one HISTORIC algorithm generally regarded as obsolete,
   this document does not define any new protocols or number ranges not
   already defined in: [SSH-ARCH], [SSH-TRANS], [SSH-USERAUTH],
   [SSH-CONNECT].








Lehtinen & Lonvick          Standards Track                     [Page 2](#t4250){id=p4250_02}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


/. 2.  Contributors
========================================================

   The major original contributors of this set of documents have been:
   Tatu Ylonen, Tero Kivinen, Timo J. Rinne, Sami Lehtinen (all of SSH
   Communications Security Corp), and Markku-Juhani O. Saarinen
   (University of Jyvaskyla).  Darren Moffat was the original editor of
   this set of documents and also made very substantial contributions.

   Many people contributed to the development of this document over the
   years.  People who should be acknowledged include Mats Andersson, Ben
   Harris, Bill Sommerfeld, Brent McClure, Niels Moller, Damien Miller,
   Derek Fawcus, Frank Cusack, Heikki Nousiainen, Jakob Schlyter, Jeff
   Van Dyke, Jeffrey Altman, Jeffrey Hutzelman, Jon Bright, Joseph
   Galbraith, Ken Hornstein, Markus Friedl, Martin Forssen, Nicolas
   Williams, Niels Provos, Perry Metzger, Peter Gutmann, Simon
   Josefsson, Simon Tatham, Wei Dai, Denis Bider, der Mouse, and
   Tadayoshi Kohno.  Listing their names here does not mean that they
   endorse this document, but that they have contributed to it.

/. 3.  Conventions Used in This Document
========================================================

/. 3.1.  RFC 2119 Keywords
========================================================

   All documents related to the SSH protocols shall use the keywords
   "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
   "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" to describe
   requirements.  These keywords are to be interpreted as described in
   [RFC2119].

/. 3.2.  RFC 2434 Keywords
========================================================

   The keywords "PRIVATE USE", "HIERARCHICAL ALLOCATION", "FIRST COME
   FIRST SERVED", "EXPERT REVIEW", "SPECIFICATION REQUIRED", "IESG
   APPROVAL", "IETF CONSENSUS", and "STANDARDS ACTION" that appear in
   this document when used to describe namespace allocation are to be
   interpreted as described in [RFC2434].  These designations are
   repeated in this document for clarity.

   PRIVATE USE - For private or local use only, with the type and
   purpose defined by the local site.  No attempt is made to prevent
   multiple sites from using the same value in different (and
   incompatible) ways.  There is no need for IANA to review such
   assignments and assignments are not generally useful for
   interoperability.







Lehtinen & Lonvick          Standards Track                     [Page 3](#t4250){id=p4250_03}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


   HIERARCHICAL ALLOCATION - Delegated managers can assign values
   provided they have been given control over that part of the name
   space.  IANA controls the higher levels of the namespace according to
   one of the other policies.

   FIRST COME FIRST SERVED - Anyone can obtain an assigned number, so
   long as they provide a point of contact and a brief description of
   what the value would be used for.  For numbers, the exact value is
   generally assigned by the IANA; with names, specific names are
   usually requested.

   EXPERT REVIEW - approval by a Designated Expert is required.

   SPECIFICATION REQUIRED - Values and their meaning must be documented
   in an RFC or other permanent and readily available reference, in
   sufficient detail so that interoperability between independent
   implementations is possible.

   IESG APPROVAL - New assignments must be approved by the IESG, but
   there is no requirement that the request be documented in an RFC
   (though the IESG has discretion to request documents or other
   supporting materials on a case-by-case basis).

   IETF CONSENSUS - New values are assigned through the IETF consensus
   process.  Specifically, new assignments are made via RFCs approved by
   the IESG.  Typically, the IESG will seek input on prospective
   assignments from appropriate persons (e.g., a relevant Working Group
   if one exists).

   STANDARDS ACTION - Values are assigned only for Standards Track RFCs
   approved by the IESG.

/. 3.3.  Protocol Fields and Values
========================================================

   Protocol fields and possible values to fill them are defined in this
   set of documents.  Protocol fields will be defined in the message
   definitions.  As an example, SSH_MSG_CHANNEL_DATA is defined as
   follows.

      byte      SSH_MSG_CHANNEL_DATA
      uint32    recipient channel
      string    data

   Throughout these documents, when the fields are referenced, they will
   appear within single quotes.  When values to fill those fields are
   referenced, they will appear within double quotes.  Using the above
   example, possible values for 'data' are "foo" and "bar".




Lehtinen & Lonvick          Standards Track                     [Page 4](#t4250){id=p4250_04}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


/. 4.  IANA Considerations
========================================================

   This entire document is the IANA considerations for the SSH protocol,
   as defined in [SSH-ARCH], [SSH-TRANS], [SSH-USERAUTH], [SSH-CONNECT].
   This section contains conventions used in naming the namespaces, the
   initial state of the registry, and instructions for future
   assignments.

/. 4.1.  Message Numbers
========================================================

   The Message Number is a byte value that describes the payload of a
   packet.

4.1.1.  Conventions
--------------------------------------------------------

   Protocol packets have message numbers in the range 1 to 255.  These
   numbers are allocated as follows:

      Transport layer protocol:

        1 to 19    Transport layer generic (e.g., disconnect, ignore,
                   debug, etc.)
        20 to 29   Algorithm negotiation
        30 to 49   Key exchange method specific (numbers can be reused
                   for different authentication methods)

      User authentication protocol:

        50 to 59   User authentication generic
        60 to 79   User authentication method specific (numbers can be
                   reused for different authentication methods)

      Connection protocol:

        80 to 89   Connection protocol generic
        90 to 127  Channel related messages

      Reserved for client protocols:

        128 to 191 Reserved

      Local extensions:

        192 to 255 Local extensions







Lehtinen & Lonvick          Standards Track                     [Page 5](#t4250){id=p4250_05}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


4.1.2.  Initial Assignments
--------------------------------------------------------

   The following table identifies the initial assignments of the Message
   ID values.

         Message ID                            Value    Reference
         -----------                           -----    ---------
         SSH_MSG_DISCONNECT                       1     [SSH-TRANS]
         SSH_MSG_IGNORE                           2     [SSH-TRANS]
         SSH_MSG_UNIMPLEMENTED                    3     [SSH-TRANS]
         SSH_MSG_DEBUG                            4     [SSH-TRANS]
         SSH_MSG_SERVICE_REQUEST                  5     [SSH-TRANS]
         SSH_MSG_SERVICE_ACCEPT                   6     [SSH-TRANS]
         SSH_MSG_KEXINIT                         20     [SSH-TRANS]
         SSH_MSG_NEWKEYS                         21     [SSH-TRANS]
         SSH_MSG_USERAUTH_REQUEST                50     [SSH-USERAUTH]
         SSH_MSG_USERAUTH_FAILURE                51     [SSH-USERAUTH]
         SSH_MSG_USERAUTH_SUCCESS                52     [SSH-USERAUTH]
         SSH_MSG_USERAUTH_BANNER                 53     [SSH-USERAUTH]
         SSH_MSG_GLOBAL_REQUEST                  80     [SSH-CONNECT]
         SSH_MSG_REQUEST_SUCCESS                 81     [SSH-CONNECT]
         SSH_MSG_REQUEST_FAILURE                 82     [SSH-CONNECT]
         SSH_MSG_CHANNEL_OPEN                    90     [SSH-CONNECT]
         SSH_MSG_CHANNEL_OPEN_CONFIRMATION       91     [SSH-CONNECT]
         SSH_MSG_CHANNEL_OPEN_FAILURE            92     [SSH-CONNECT]
         SSH_MSG_CHANNEL_WINDOW_ADJUST           93     [SSH-CONNECT]
         SSH_MSG_CHANNEL_DATA                    94     [SSH-CONNECT]
         SSH_MSG_CHANNEL_EXTENDED_DATA           95     [SSH-CONNECT]
         SSH_MSG_CHANNEL_EOF                     96     [SSH-CONNECT]
         SSH_MSG_CHANNEL_CLOSE                   97     [SSH-CONNECT]
         SSH_MSG_CHANNEL_REQUEST                 98     [SSH-CONNECT]
         SSH_MSG_CHANNEL_SUCCESS                 99     [SSH-CONNECT]
         SSH_MSG_CHANNEL_FAILURE                100     [SSH-CONNECT]

4.1.3.  Future Assignments
--------------------------------------------------------

   Requests for assignments of new message numbers in the range of 1 to
   29, 50 to 59, and 80 to 127 MUST be done through the STANDARDS ACTION
   method, as described in [RFC2434].

   The meanings of message numbers in the range of 30 to 49 are specific
   to the key exchange method in use, and their meaning will be
   specified by the definition of that method.








Lehtinen & Lonvick          Standards Track                     [Page 6](#t4250){id=p4250_06}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


   The meanings of message numbers in the range of 60 to 79 are specific
   to the user authentication method in use, and their meaning will be
   specified by the definition of that method.

   Requests for assignments of new message numbers in the range of 128
   to 191 MUST be done through the IETF CONSENSUS method, as described
   in [RFC2434].

   The IANA will not control the message numbers in the range of 192
   through 255.  This range will be left for PRIVATE USE.

/. 4.2.  Disconnection Messages Reason Codes and Descriptions
========================================================

   The Disconnection Message 'reason code' is a uint32 value.  The
   associated Disconnection Message 'description' is a human-readable
   message that describes the disconnect reason.

4.2.1.  Conventions
--------------------------------------------------------

   Protocol packets containing the SSH_MSG_DISCONNECT message MUST have
   Disconnection Message 'reason code' values in the range of 0x00000001
   to 0xFFFFFFFF.  These are described in [SSH-TRANS].

4.2.2.  Initial Assignments
--------------------------------------------------------

   The following table identifies the initial assignments of the
   SSH_MSG_DISCONNECT 'description' and 'reason code' values.

         Symbolic Name                                  reason code
         -------------                                  -----------
         SSH_DISCONNECT_HOST_NOT_ALLOWED_TO_CONNECT          1
         SSH_DISCONNECT_PROTOCOL_ERROR                       2
         SSH_DISCONNECT_KEY_EXCHANGE_FAILED                  3
         SSH_DISCONNECT_RESERVED                             4
         SSH_DISCONNECT_MAC_ERROR                            5
         SSH_DISCONNECT_COMPRESSION_ERROR                    6
         SSH_DISCONNECT_SERVICE_NOT_AVAILABLE                7
         SSH_DISCONNECT_PROTOCOL_VERSION_NOT_SUPPORTED       8
         SSH_DISCONNECT_HOST_KEY_NOT_VERIFIABLE              9
         SSH_DISCONNECT_CONNECTION_LOST                     10
         SSH_DISCONNECT_BY_APPLICATION                      11
         SSH_DISCONNECT_TOO_MANY_CONNECTIONS                12
         SSH_DISCONNECT_AUTH_CANCELLED_BY_USER              13
         SSH_DISCONNECT_NO_MORE_AUTH_METHODS_AVAILABLE      14
         SSH_DISCONNECT_ILLEGAL_USER_NAME                   15






Lehtinen & Lonvick          Standards Track                     [Page 7](#t4250){id=p4250_07}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


4.2.3.  Future Assignments
--------------------------------------------------------

   Disconnection Message 'reason code' values MUST be assigned
   sequentially.  Requests for assignments of new Disconnection Message
   'reason code' values, and their associated Disconnection Message
   'description' text, in the range of 0x00000010 through 0xFDFFFFFF,
   MUST be done through the IETF CONSENSUS method, as described in
   [RFC2434].  The IANA will not assign Disconnection Message 'reason
   code' values in the range of 0xFE000000 through 0xFFFFFFFF.
   Disconnection Message 'reason code' values in that range are left for
   PRIVATE USE, as described in [RFC2434].

/. 4.3.  Channel Connection Failure Reason Codes and Descriptions
========================================================

   The Channel Connection Failure 'reason code' is a uint32 value.  The
   associated Channel Connection Failure 'description' text is a human-
   readable message that describes the channel connection failure
   reason.  This is described in [SSH-CONNECT].

4.3.1.  Conventions
--------------------------------------------------------

   Protocol packets containing the SSH_MSG_CHANNEL_OPEN_FAILURE message
   MUST have Channel Connection Failure 'reason code' values in the
   range of 0x00000001 to 0xFFFFFFFF.

4.3.2.  Initial Assignments
--------------------------------------------------------

   The initial assignments for the 'reason code' values and
   'description' values are given in the table below.  Note that the
   values for the 'reason code' are given in decimal format for
   readability, but they are actually uint32 values.

         Symbolic Name                                  reason code
         -------------                                  -----------
         SSH_OPEN_ADMINISTRATIVELY_PROHIBITED                1
         SSH_OPEN_CONNECT_FAILED                             2
         SSH_OPEN_UNKNOWN_CHANNEL_TYPE                       3
         SSH_OPEN_RESOURCE_SHORTAGE                          4

4.3.3.  Future Assignments
--------------------------------------------------------

   Channel Connection Failure 'reason code' values MUST be assigned
   sequentially.  Requests for assignments of new Channel Connection
   Failure 'reason code' values, and their associated Channel Connection
   Failure 'description string', in the range of 0x00000005 to
   0xFDFFFFFF MUST be done through the IETF CONSENSUS method, as
   described in [RFC2434].  The IANA will not assign Channel Connection




Lehtinen & Lonvick          Standards Track                     [Page 8](#t4250){id=p4250_08}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


   Failure 'reason code' values in the range of 0xFE000000 to
   0xFFFFFFFF.  Channel Connection Failure 'reason code' values in that
   range are left for PRIVATE USE, as described in [RFC2434].

4.3.4.  Notes about the PRIVATE USE Range
--------------------------------------------------------

   While it is understood that the IANA will have no control over the
   range of 0xFE000000 to 0xFFFFFFFF, this range will be split in two
   parts and administered by the following conventions.

   o  The range of 0xFE000000 to 0xFEFFFFFF is to be used in conjunction
      with locally assigned channels.  For example, if a channel is
      proposed with a 'channel type' of "example_session@example.com"
      but fails, then the server will respond with either a 'reason
      code' assigned by the IANA (as listed above and in the range of
      0x00000001 to 0xFDFFFFFF), or with a locally assigned value in the
      range of 0xFE000000 to 0xFEFFFFFF.  Naturally, if the server does
      not understand the proposed 'channel type', even if it is a
      locally defined 'channel type', then the 'reason code' MUST be
      0x00000003, as described above.  If the server does understand the
      'channel type', but the channel still fails to open, then the
      server SHOULD respond with a locally assigned 'reason code' value
      that is consistent with the proposed local 'channel type'.  It is
      assumed that practitioners will first attempt to use the IANA-
      assigned 'reason code' values and then document their locally
      assigned 'reason code' values.

   o  There are no restrictions or suggestions for the range starting
      with 0xFF.  No interoperability is expected for anything used in
      this range.  Essentially, it is for experimentation.

/. 4.4.  Extended Channel Data Transfer data_type_code and Data
========================================================

   The Extended Channel Data Transfer 'data_type_code' is a uint32
   value.  The associated Extended Channel Data Transfer 'data' is a
   human-readable message that describes the type of data allowed to be
   transferred in the channel.

4.4.1.  Conventions
--------------------------------------------------------

   Protocol packets containing the SSH_MSG_CHANNEL_EXTENDED_DATA message
   MUST have Extended Channel Data Transfer 'data_type_code' values in
   the range of 0x00000001 to 0xFFFFFFFF.  This is described in
   [SSH-CONNECT].







Lehtinen & Lonvick          Standards Track                     [Page 9](#t4250){id=p4250_09}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


4.4.2.  Initial Assignments
--------------------------------------------------------

   The initial assignments for the 'data_type_code' values and 'data'
   values are given in the table below.  Note that the value for the
   'data_type_code' is given in decimal format for readability, but the
   values are actually uint32 values.

         Symbolic name                        data_type_code
         -------------                        --------------
         SSH_EXTENDED_DATA_STDERR                   1

4.4.3.  Future Assignments
--------------------------------------------------------

   Extended Channel Data Transfer 'data_type_code' values MUST be
   assigned sequentially.  Requests for assignments of new Extended
   Channel Data Transfer 'data_type_code' values, and their associated
   Extended Channel Data Transfer 'data' strings, in the range of
   0x00000002 to 0xFDFFFFFF, MUST be done through the IETF CONSENSUS
   method, as described in [RFC2434].  The IANA will not assign Extended
   Channel Data Transfer 'data_type_code' values in the range of
   0xFE000000 to 0xFFFFFFFF.  Extended Channel Data Transfer
   'data_type_code' values in that range are left for PRIVATE USE, as
   described in [RFC2434].

/. 4.5.  Pseudo-Terminal Encoded Terminal Modes
========================================================

   SSH_MSG_CHANNEL_REQUEST messages with a "pty-req" string MUST contain
   'encoded terminal modes'.  The 'encoded terminal modes' value is a
   byte stream of opcode-argument pairs.

4.5.1.  Conventions
--------------------------------------------------------

   Protocol packets containing the SSH_MSG_CHANNEL_REQUEST message with
   a "pty-req" string MUST contain an 'encoded terminal modes' value.
   The opcode values consist of a single byte and are in the range of 1
   to 255.  Opcodes 1 to 159 have a uint32 argument.  Opcodes 160 to 255
   are not yet defined.

4.5.2.  Initial Assignments
--------------------------------------------------------

   The following table identifies the initial assignments of the opcode
   values that are used in the 'encoded terminal modes' value.









Lehtinen & Lonvick          Standards Track                    [Page 10](#t4250){id=p4250_10}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


         opcode  mnemonic       description
         ------  --------       -----------
         0     TTY_OP_END  Indicates end of options.
         1     VINTR       Interrupt character; 255 if none.  Similarly
                            for the other characters.  Not all of these
                            characters are supported on all systems.
         2     VQUIT       The quit character (sends SIGQUIT signal on
                            POSIX systems).
         3     VERASE      Erase the character to left of the cursor.
         4     VKILL       Kill the current input line.
         5     VEOF        End-of-file character (sends EOF from the
                            terminal).
         6     VEOL        End-of-line character in addition to
                            carriage return and/or linefeed.
         7     VEOL2       Additional end-of-line character.
         8     VSTART      Continues paused output (normally
                            control-Q).
         9     VSTOP       Pauses output (normally control-S).
         10    VSUSP       Suspends the current program.
         11    VDSUSP      Another suspend character.
         12    VREPRINT    Reprints the current input line.
         13    VWERASE     Erases a word left of cursor.
         14    VLNEXT      Enter the next character typed literally,
                            even if it is a special character
         15    VFLUSH      Character to flush output.
         16    VSWTCH      Switch to a different shell layer.
         17    VSTATUS     Prints system status line (load, command,
                            pid, etc).
         18    VDISCARD    Toggles the flushing of terminal output.
         30    IGNPAR      The ignore parity flag.  The parameter
                            SHOULD be 0 if this flag is FALSE,
                            and 1 if it is TRUE.
         31    PARMRK      Mark parity and framing errors.
         32    INPCK       Enable checking of parity errors.
         33    ISTRIP      Strip 8th bit off characters.
         34    INLCR       Map NL into CR on input.
         35    IGNCR       Ignore CR on input.
         36    ICRNL       Map CR to NL on input.
         37    IUCLC       Translate uppercase characters to
                            lowercase.
         38    IXON        Enable output flow control.
         39    IXANY       Any char will restart after stop.
         40    IXOFF       Enable input flow control.
         41    IMAXBEL     Ring bell on input queue full.
         50    ISIG        Enable signals INTR, QUIT, [D]SUSP.
         51    ICANON      Canonicalize input lines.





Lehtinen & Lonvick          Standards Track                    [Page 11](#t4250){id=p4250_11}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


         52    XCASE       Enable input and output of uppercase
                            characters by preceding their lowercase
                            equivalents with "\".
         53    ECHO        Enable echoing.
         54    ECHOE       Visually erase chars.
         55    ECHOK       Kill character discards current line.
         56    ECHONL      Echo NL even if ECHO is off.
         57    NOFLSH      Don't flush after interrupt.
         58    TOSTOP      Stop background jobs from output.
         59    IEXTEN      Enable extensions.
         60    ECHOCTL     Echo control characters as ^(Char).
         61    ECHOKE      Visual erase for line kill.
         62    PENDIN      Retype pending input.
         70    OPOST       Enable output processing.
         71    OLCUC       Convert lowercase to uppercase.
         72    ONLCR       Map NL to CR-NL.
         73    OCRNL       Translate carriage return to newline
                            (output).
         74    ONOCR       Translate newline to carriage
                            return-newline (output).
         75    ONLRET      Newline performs a carriage return
                            (output).
         90    CS7         7 bit mode.
         91    CS8         8 bit mode.
         92    PARENB      Parity enable.
         93    PARODD      Odd parity, else even.

         128 TTY_OP_ISPEED  Specifies the input baud rate in
                             bits per second.
         129 TTY_OP_OSPEED  Specifies the output baud rate in
                             bits per second.

4.5.3.  Future Assignments
--------------------------------------------------------

   Requests for assignments of new opcodes and their associated
   arguments MUST be done through the IETF CONSENSUS method, as
   described in [RFC2434].

/. 4.6.  Names
========================================================

   In the following sections, the values for the name spaces are
   textual.  The conventions and instructions to the IANA for future
   assignments are given in this section.  The initial assignments are
   given in their respective sections.







Lehtinen & Lonvick          Standards Track                    [Page 12](#t4250){id=p4250_12}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


4.6.1.  Conventions for Names
--------------------------------------------------------

   All names registered by the IANA in the following sections MUST be
   printable US-ASCII strings, and MUST NOT contain the characters at-
   sign ("@"), comma (","), whitespace, control characters (ASCII codes
   32 or less), or the ASCII code 127 (DEL).  Names are case-sensitive,
   and MUST NOT be longer than 64 characters.

   A provision is made here for locally extensible names.  The IANA will
   not register, and will not control, names with the at-sign in them.

   Names with the at-sign in them will have the format of
   "name@domainname" (without the double quotes) where the part
   preceding the at-sign is the name.  The format of the part preceding
   the at-sign is not specified; however, these names MUST be printable
   US-ASCII strings, and MUST NOT contain the comma character (","),
   whitespace, control characters (ASCII codes 32 or less), or the ASCII
   code 127 (DEL).  They MUST have only a single at-sign in them.  The
   part following the at-sign MUST be a valid, fully qualified internet
   domain name [RFC1034] controlled by the person or organization
   defining the name.  Names are case-sensitive, and MUST NOT be longer
   than 64 characters.  It is up to each domain how it manages its local
   namespace.  It has been noted that these names resemble STD 11
   [RFC0822] email addresses.  This is purely coincidental and has
   nothing to do with STD 11 [RFC0822].  An example of a locally defined
   name is "ourcipher-cbc@example.com" (without the double quotes).

4.6.2.  Future Assignments of Names
--------------------------------------------------------

   Requests for assignments of new names MUST be done through the IETF
   CONSENSUS method, as described in [RFC2434].

/. 4.7.  Service Names
========================================================

   The 'service name' is used to describe a protocol layer.  The
   following table lists the initial assignments of the 'service name'
   values.

         Service Name                  Reference
         -------------                 ---------
         ssh-userauth                  [SSH-USERAUTH]
         ssh-connection                [SSH-CONNECT]









Lehtinen & Lonvick          Standards Track                    [Page 13](#t4250){id=p4250_13}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


/. 4.8.  Authentication Method Names
========================================================

   The Authentication Method Name is used to describe an authentication
   method for the "ssh-userauth" service [SSH-USERAUTH].  The following
   table identifies the initial assignments of the Authentication Method
   Names.

         Method Name                   Reference
         ------------                  ---------
         publickey                     [SSH-USERAUTH, Section 7]
         password                      [SSH-USERAUTH, Section 8]
         hostbased                     [SSH-USERAUTH, Section 9]
         none                          [SSH-USERAUTH, Section 5.2]

/. 4.9.  Connection Protocol Assigned Names
========================================================

   The following table lists the initial assignments to the Connection
   Protocol Type and Request names.

4.9.1.  Connection Protocol Channel Types
--------------------------------------------------------

   The following table lists the initial assignments of the Connection
   Protocol Channel Types.

         Channel type                  Reference
         ------------                  ---------
         session                       [SSH-CONNECT, Section 6.1]
         x11                           [SSH-CONNECT, Section 6.3.2]
         forwarded-tcpip               [SSH-CONNECT, Section 7.2]
         direct-tcpip                  [SSH-CONNECT, Section 7.2]

4.9.2.  Connection Protocol Global Request Names
--------------------------------------------------------

   The following table lists the initial assignments of the Connection
   Protocol Global Request Names.

         Request type                  Reference
         ------------                  ---------
         tcpip-forward                 [SSH-CONNECT, Section 7.1]
         cancel-tcpip-forward          [SSH-CONNECT, Section 7.1]











Lehtinen & Lonvick          Standards Track                    [Page 14](#t4250){id=p4250_14}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


4.9.3.  Connection Protocol Channel Request Names
--------------------------------------------------------

   The following table lists the initial assignments of the Connection
   Protocol Channel Request Names.

         Request type                  Reference
         ------------                  ---------
         pty-req                       [SSH-CONNECT, Section 6.2]
         x11-req                       [SSH-CONNECT, Section 6.3.1]
         env                           [SSH-CONNECT, Section 6.4]
         shell                         [SSH-CONNECT, Section 6.5]
         exec                          [SSH-CONNECT, Section 6.5]
         subsystem                     [SSH-CONNECT, Section 6.5]
         window-change                 [SSH-CONNECT, Section 6.7]
         xon-xoff                      [SSH-CONNECT, Section 6.8]
         signal                        [SSH-CONNECT, Section 6.9]
         exit-status                   [SSH-CONNECT, Section 6.10]
         exit-signal                   [SSH-CONNECT, Section 6.10]

4.9.4.  Initial Assignment of Signal Names
--------------------------------------------------------

   The following table lists the initial assignments of the Signal
   Names.

         Signal                        Reference
         ------                        ---------
          ABRT                         [SSH-CONNECT]
          ALRM                         [SSH-CONNECT]
          FPE                          [SSH-CONNECT]
          HUP                          [SSH-CONNECT]
          ILL                          [SSH-CONNECT]
          INT                          [SSH-CONNECT]
          KILL                         [SSH-CONNECT]
          PIPE                         [SSH-CONNECT]
          QUIT                         [SSH-CONNECT]
          SEGV                         [SSH-CONNECT]
          TERM                         [SSH-CONNECT]
          USR1                         [SSH-CONNECT]
          USR2                         [SSH-CONNECT]

4.9.5.  Connection Protocol Subsystem Names
--------------------------------------------------------

   There are no initial assignments of the Connection Protocol Subsystem
   Names.







Lehtinen & Lonvick          Standards Track                    [Page 15](#t4250){id=p4250_15}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


/. 4.10.  Key Exchange Method Names
========================================================

   The name "diffie-hellman-group1-sha1" is used for a key exchange
   method using an Oakley group, as defined in [RFC2409].  SSH maintains
   its own group identifier space, which is logically distinct from
   Oakley [RFC2412] and IKE; however, for one additional group, the
   Working Group adopted the number assigned by [RFC3526], using
   "diffie-hellman-group14-sha1" for the name of the second defined
   group.  Implementations should treat these names as opaque
   identifiers and should not assume any relationship between the groups
   used by SSH and the groups defined for IKE.

   The following table identifies the initial assignments of the key
   exchange methods.

         Method name                          Reference
         ------------                         ---------
         diffie-hellman-group1-sha1     [SSH-TRANS, Section 8.1]
         diffie-hellman-group14-sha1    [SSH-TRANS, Section 8.2]

/. 4.11.  Assigned Algorithm Names
========================================================

4.11.1.  Encryption Algorithm Names
--------------------------------------------------------

   The following table identifies the initial assignment of the
   Encryption Algorithm Names.

         Encryption Algorithm Name                   Reference
         -------------------------                   ---------
         3des-cbc                           [SSH-TRANS, Section 6.3]
         blowfish-cbc                       [SSH-TRANS, Section 6.3]
         twofish256-cbc                     [SSH-TRANS, Section 6.3]
         twofish-cbc                        [SSH-TRANS, Section 6.3]
         twofish192-cbc                     [SSH-TRANS, Section 6.3]
         twofish128-cbc                     [SSH-TRANS, Section 6.3]
         aes256-cbc                         [SSH-TRANS, Section 6.3]
         aes192-cbc                         [SSH-TRANS, Section 6.3]
         aes128-cbc                         [SSH-TRANS, Section 6.3]
         serpent256-cbc                     [SSH-TRANS, Section 6.3]
         serpent192-cbc                     [SSH-TRANS, Section 6.3]
         serpent128-cbc                     [SSH-TRANS, Section 6.3]
         arcfour                            [SSH-TRANS, Section 6.3]
         idea-cbc                           [SSH-TRANS, Section 6.3]
         cast128-cbc                        [SSH-TRANS, Section 6.3]
         none                               [SSH-TRANS, Section 6.3]
         des-cbc                            [FIPS-46-3] HISTORIC; See
                                              page 4 of [FIPS-46-3]




Lehtinen & Lonvick          Standards Track                    [Page 16](#t4250){id=p4250_16}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


4.11.2.  MAC Algorithm Names
--------------------------------------------------------

   The following table identifies the initial assignments of the MAC
   Algorithm Names.

         MAC Algorithm Name                      Reference
         ------------------                      ---------
         hmac-sha1                         [SSH-TRANS, Section 6.4]
         hmac-sha1-96                      [SSH-TRANS, Section 6.4]
         hmac-md5                          [SSH-TRANS, Section 6.4]
         hmac-md5-96                       [SSH-TRANS, Section 6.4]
         none                              [SSH-TRANS, Section 6.4]

4.11.3.  Public Key Algorithm Names
--------------------------------------------------------

   The following table identifies the initial assignments of the Public
   Key Algorithm names.

         Public Key Algorithm Name                 Reference
         -------------------------                 ---------
         ssh-dss                            [SSH-TRANS, Section 6.6]
         ssh-rsa                            [SSH-TRANS, Section 6.6]
         pgp-sign-rsa                       [SSH-TRANS, Section 6.6]
         pgp-sign-dss                       [SSH-TRANS, Section 6.6]

4.11.4.  Compression Algorithm Names
--------------------------------------------------------

   The following table identifies the initial assignments of the
   Compression Algorithm names.

         Compression Algorithm Name                Reference
         --------------------------                ---------
         none                               [SSH-TRANS, Section 6.2]
         zlib                               [SSH-TRANS, Section 6.2]

/. 5.  Security Considerations
========================================================

   This protocol provides a secure encrypted channel over an insecure
   network.

   Full security considerations for this protocol are provided in
   [SSH-ARCH].









Lehtinen & Lonvick          Standards Track                    [Page 17](#t4250){id=p4250_17}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


/. 6.  References
========================================================

/. 6.1.  Normative References
========================================================

   [SSH-ARCH]     Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Protocol Architecture", RFC 4251, January 2006.

   [SSH-TRANS]    Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Transport Layer Protocol", RFC 4253, January
                  2006.

   [SSH-USERAUTH] Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Authentication Protocol", RFC 4252, January
                  2006.

   [SSH-CONNECT]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Connection Protocol", RFC 4254, January 2006.

   [RFC2119]      Bradner, S., "Key words for use in RFCs to Indicate
                  Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC2409]      Harkins, D. and D. Carrel, "The Internet Key Exchange
                  (IKE)", RFC 2409, November 1998.

   [RFC2434]      Narten, T. and H. Alvestrand, "Guidelines for Writing
                  an IANA Considerations Section in RFCs", BCP 26, RFC
                  2434, October 1998.

   [RFC3526]      Kivinen, T. and M. Kojo, "More Modular Exponential
                  (MODP) Diffie-Hellman groups for Internet Key Exchange
                  (IKE)", RFC 3526, May 2003.

/. 6.2.  Informative References
========================================================

   [RFC0822]      Crocker, D., "Standard for the format of ARPA Internet
                  text messages", STD 11, RFC 822, August 1982.

   [RFC1034]      Mockapetris, P., "Domain names - concepts and
                  facilities", STD 13, RFC 1034, November 1987.

   [RFC2412]      Orman, H., "The OAKLEY Key Determination Protocol",
                  RFC 2412, November 1998.

   [FIPS-46-3]    US National Institute of Standards and Technology,
                  "Data Encryption Standard (DES)", Federal Information
                  Processing Standards Publication 46-3, October 1999.





Lehtinen & Lonvick          Standards Track                    [Page 18](#t4250){id=p4250_18}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


Authors' Addresses

   Sami Lehtinen
   SSH Communications Security Corp
   Valimotie 17
   00380 Helsinki
   Finland

   EMail: sjl@ssh.com


   Chris Lonvick (editor)
   Cisco Systems, Inc.
   12515 Research Blvd.
   Austin  78759
   USA

   EMail: clonvick@cisco.com

Trademark Notice

   "ssh" is a registered trademark in the United States and/or other
   countries.




























Lehtinen & Lonvick          Standards Track                    [Page 19](#t4250){id=p4250_19}

RFC 4250             SSH Protocol Assigned Numbers          January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Lehtinen & Lonvick          Standards Track                    [Page 20](#t4250){id=p4250_20}



/CORE RFC4251  The Secure Shell (SSH) Protocol Architecture
========================================================
https://www.rfc-editor.org/rfc/rfc4251.txt







Network Working Group                                          T. Ylonen
Request for Comments: 4251              SSH Communications Security Corp
Category: Standards Track                                C. Lonvick, Ed.
                                                     Cisco Systems, Inc.
                                                            January 2006


              The Secure Shell (SSH) Protocol Architecture

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   The Secure Shell (SSH) Protocol is a protocol for secure remote login
   and other secure network services over an insecure network.  This
   document describes the architecture of the SSH protocol, as well as
   the notation and terminology used in SSH protocol documents.  It also
   discusses the SSH algorithm naming system that allows local
   extensions.  The SSH protocol consists of three major components: The
   Transport Layer Protocol provides server authentication,
   confidentiality, and integrity with perfect forward secrecy.  The
   User Authentication Protocol authenticates the client to the server.
   The Connection Protocol multiplexes the encrypted tunnel into several
   logical channels.  Details of these protocols are described in
   separate documents.
















Ylonen & Lonvick            Standards Track                     [Page 1](#t4251){id=p4251_01}

RFC 4251               SSH Protocol Architecture            January 2006


/. [Table of Contents](){id=t4251}
========================================================

- 1. Introduction .......................................... [3](#p4251_03)
- 2. Contributors .......................................... [3](#p4251_03)
- 3. Conventions Used in This Document ..................... [4](#p4251_04)
- 4. Architecture .......................................... [4](#p4251_04)
-    4.1. Host Keys ........................................ [4](#p4251_04)
-    4.2. Extensibility .................................... [6](#p4251_06)
-    4.3. Policy Issues .................................... [6](#p4251_06)
-    4.4. Security Properties .............................. [7](#p4251_07)
-    4.5. Localization and Character Set Support ........... [7](#p4251_07)
- 5. Data Type Representations Used in the SSH Protocols ... [8](#p4251_08)
- 6. Algorithm and Method Naming .......................... [10](#p4251_10)
- 7. Message Numbers ...................................... [11](#p4251_11)
- 8. IANA Considerations .................................. [12](#p4251_12)
- 9. Security Considerations .............................. [13](#p4251_13)
-    9.1. Pseudo-Random Number Generation ................. [13](#p4251_13)
-    9.2. Control Character Filtering ..................... [14](#p4251_14)
-    9.3. Transport ....................................... [14](#p4251_14)
-         9.3.1. Confidentiality .......................... [14](#p4251_14)
-         9.3.2. Data Integrity ........................... [16](#p4251_16)
-         9.3.3. Replay ................................... [16](#p4251_16)
-         9.3.4. Man-in-the-middle ........................ [17](#p4251_17)
-         9.3.5. Denial of Service ........................ [19](#p4251_19)
-         9.3.6. Covert Channels .......................... [20](#p4251_20)
-         9.3.7. Forward Secrecy .......................... [20](#p4251_20)
-         9.3.8. Ordering of Key Exchange Methods ......... [20](#p4251_20)
-         9.3.9. Traffic Analysis ......................... [21](#p4251_21)
-    9.4. Authentication Protocol ......................... [21](#p4251_21)
-         9.4.1. Weak Transport ........................... [21](#p4251_21)
-         9.4.2. Debug Messages ........................... [22](#p4251_22)
-         9.4.3. Local Security Policy .................... [22](#p4251_22)
-         9.4.4. Public Key Authentication ................ [23](#p4251_23)
-         9.4.5. Password Authentication .................. [23](#p4251_23)
-         9.4.6. Host-Based Authentication ................ [23](#p4251_23)
-    9.5. Connection Protocol ............................. [24](#p4251_24)
-         9.5.1. End Point Security ....................... [24](#p4251_24)
-         9.5.2. Proxy Forwarding ......................... [24](#p4251_24)
-         9.5.3. X11 Forwarding ........................... [24](#p4251_24)
- 10. References .......................................... [26](#p4251_26)
-    10.1. Normative References ........................... [26](#p4251_26)
-    10.2. Informative References ......................... [26](#p4251_26)
- Authors' Addresses ...................................... [29](#p4251_29)
- Trademark Notice ........................................ [29](#p4251_29)







Ylonen & Lonvick            Standards Track                     [Page 2](#t4251){id=p4251_02}

RFC 4251               SSH Protocol Architecture            January 2006


/. 1.  Introduction
========================================================

   Secure Shell (SSH) is a protocol for secure remote login and other
   secure network services over an insecure network.  It consists of
   three major components:

   o  The Transport Layer Protocol [SSH-TRANS] provides server
      authentication, confidentiality, and integrity.  It may optionally
      also provide compression.  The transport layer will typically be
      run over a TCP/IP connection, but might also be used on top of any
      other reliable data stream.

   o  The User Authentication Protocol [SSH-USERAUTH] authenticates the
      client-side user to the server.  It runs over the transport layer
      protocol.

   o  The Connection Protocol [SSH-CONNECT] multiplexes the encrypted
      tunnel into several logical channels.  It runs over the user
      authentication protocol.

   The client sends a service request once a secure transport layer
   connection has been established.  A second service request is sent
   after user authentication is complete.  This allows new protocols to
   be defined and coexist with the protocols listed above.

   The connection protocol provides channels that can be used for a wide
   range of purposes.  Standard methods are provided for setting up
   secure interactive shell sessions and for forwarding ("tunneling")
   arbitrary TCP/IP ports and X11 connections.

/. 2.  Contributors
========================================================

   The major original contributors of this set of documents have been:
   Tatu Ylonen, Tero Kivinen, Timo J. Rinne, Sami Lehtinen (all of SSH
   Communications Security Corp), and Markku-Juhani O. Saarinen
   (University of Jyvaskyla).  Darren Moffat was the original editor of
   this set of documents and also made very substantial contributions.

   Many people contributed to the development of this document over the
   years.  People who should be acknowledged include Mats Andersson, Ben
   Harris, Bill Sommerfeld, Brent McClure, Niels Moller, Damien Miller,
   Derek Fawcus, Frank Cusack, Heikki Nousiainen, Jakob Schlyter, Jeff
   Van Dyke, Jeffrey Altman, Jeffrey Hutzelman, Jon Bright, Joseph
   Galbraith, Ken Hornstein, Markus Friedl, Martin Forssen, Nicolas
   Williams, Niels Provos, Perry Metzger, Peter Gutmann, Simon
   Josefsson, Simon Tatham, Wei Dai, Denis Bider, der Mouse, and
   Tadayoshi Kohno.  Listing their names here does not mean that they
   endorse this document, but that they have contributed to it.



Ylonen & Lonvick            Standards Track                     [Page 3](#t4251){id=p4251_03}

RFC 4251               SSH Protocol Architecture            January 2006


/. 3.  Conventions Used in This Document
========================================================

   All documents related to the SSH protocols shall use the keywords
   "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
   "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" to describe
   requirements.  These keywords are to be interpreted as described in
   [RFC2119].

   The keywords "PRIVATE USE", "HIERARCHICAL ALLOCATION", "FIRST COME
   FIRST SERVED", "EXPERT REVIEW", "SPECIFICATION REQUIRED", "IESG
   APPROVAL", "IETF CONSENSUS", and "STANDARDS ACTION" that appear in
   this document when used to describe namespace allocation are to be
   interpreted as described in [RFC2434].

   Protocol fields and possible values to fill them are defined in this
   set of documents.  Protocol fields will be defined in the message
   definitions.  As an example, SSH_MSG_CHANNEL_DATA is defined as
   follows.

      byte      SSH_MSG_CHANNEL_DATA
      uint32    recipient channel
      string    data

   Throughout these documents, when the fields are referenced, they will
   appear within single quotes.  When values to fill those fields are
   referenced, they will appear within double quotes.  Using the above
   example, possible values for 'data' are "foo" and "bar".

/. 4.  Architecture
========================================================

/. 4.1.  Host Keys
========================================================

   Each server host SHOULD have a host key.  Hosts MAY have multiple
   host keys using multiple different algorithms.  Multiple hosts MAY
   share the same host key.  If a host has keys at all, it MUST have at
   least one key that uses each REQUIRED public key algorithm (DSS
   [FIPS-186-2]).

   The server host key is used during key exchange to verify that the
   client is really talking to the correct server.  For this to be
   possible, the client must have a priori knowledge of the server's
   public host key.

   Two different trust models can be used:

   o  The client has a local database that associates each host name (as
      typed by the user) with the corresponding public host key.  This
      method requires no centrally administered infrastructure, and no



Ylonen & Lonvick            Standards Track                     [Page 4](#t4251){id=p4251_04}

RFC 4251               SSH Protocol Architecture            January 2006


      third-party coordination.  The downside is that the database of
      name-to-key associations may become burdensome to maintain.

   o  The host name-to-key association is certified by a trusted
      certification authority (CA).  The client only knows the CA root
      key, and can verify the validity of all host keys certified by
      accepted CAs.

   The second alternative eases the maintenance problem, since ideally
   only a single CA key needs to be securely stored on the client.  On
   the other hand, each host key must be appropriately certified by a
   central authority before authorization is possible.  Also, a lot of
   trust is placed on the central infrastructure.

   The protocol provides the option that the server name - host key
   association is not checked when connecting to the host for the first
   time.  This allows communication without prior communication of host
   keys or certification.  The connection still provides protection
   against passive listening; however, it becomes vulnerable to active
   man-in-the-middle attacks.  Implementations SHOULD NOT normally allow
   such connections by default, as they pose a potential security
   problem.  However, as there is no widely deployed key infrastructure
   available on the Internet at the time of this writing, this option
   makes the protocol much more usable during the transition time until
   such an infrastructure emerges, while still providing a much higher
   level of security than that offered by older solutions (e.g., telnet
   [RFC0854] and rlogin [RFC1282]).

   Implementations SHOULD try to make the best effort to check host
   keys.  An example of a possible strategy is to only accept a host key
   without checking the first time a host is connected, save the key in
   a local database, and compare against that key on all future
   connections to that host.

   Implementations MAY provide additional methods for verifying the
   correctness of host keys, e.g., a hexadecimal fingerprint derived
   from the SHA-1 hash [FIPS-180-2] of the public key.  Such
   fingerprints can easily be verified by using telephone or other
   external communication channels.

   All implementations SHOULD provide an option not to accept host keys
   that cannot be verified.

   The members of this Working Group believe that 'ease of use' is
   critical to end-user acceptance of security solutions, and no
   improvement in security is gained if the new solutions are not used.
   Thus, providing the option not to check the server host key is




Ylonen & Lonvick            Standards Track                     [Page 5](#t4251){id=p4251_05}

RFC 4251               SSH Protocol Architecture            January 2006


   believed to improve the overall security of the Internet, even though
   it reduces the security of the protocol in configurations where it is
   allowed.

/. 4.2.  Extensibility
========================================================

   We believe that the protocol will evolve over time, and some
   organizations will want to use their own encryption, authentication,
   and/or key exchange methods.  Central registration of all extensions
   is cumbersome, especially for experimental or classified features.
   On the other hand, having no central registration leads to conflicts
   in method identifiers, making interoperability difficult.

   We have chosen to identify algorithms, methods, formats, and
   extension protocols with textual names that are of a specific format.
   DNS names are used to create local namespaces where experimental or
   classified extensions can be defined without fear of conflicts with
   other implementations.

   One design goal has been to keep the base protocol as simple as
   possible, and to require as few algorithms as possible.  However, all
   implementations MUST support a minimal set of algorithms to ensure
   interoperability (this does not imply that the local policy on all
   hosts would necessarily allow these algorithms).  The mandatory
   algorithms are specified in the relevant protocol documents.

   Additional algorithms, methods, formats, and extension protocols can
   be defined in separate documents.  See Section 6, Algorithm Naming,
   for more information.

/. 4.3.  Policy Issues
========================================================

   The protocol allows full negotiation of encryption, integrity, key
   exchange, compression, and public key algorithms and formats.
   Encryption, integrity, public key, and compression algorithms can be
   different for each direction.

   The following policy issues SHOULD be addressed in the configuration
   mechanisms of each implementation:

   o  Encryption, integrity, and compression algorithms, separately for
      each direction.  The policy MUST specify which is the preferred
      algorithm (e.g., the first algorithm listed in each category).

   o  Public key algorithms and key exchange method to be used for host
      authentication.  The existence of trusted host keys for different
      public key algorithms also affects this choice.




Ylonen & Lonvick            Standards Track                     [Page 6](#t4251){id=p4251_06}

RFC 4251               SSH Protocol Architecture            January 2006


   o  The authentication methods that are to be required by the server
      for each user.  The server's policy MAY require multiple
      authentication for some or all users.  The required algorithms MAY
      depend on the location from where the user is trying to gain
      access.

   o  The operations that the user is allowed to perform using the
      connection protocol.  Some issues are related to security; for
      example, the policy SHOULD NOT allow the server to start sessions
      or run commands on the client machine, and MUST NOT allow
      connections to the authentication agent unless forwarding such
      connections has been requested.  Other issues, such as which
      TCP/IP ports can be forwarded and by whom, are clearly issues of
      local policy.  Many of these issues may involve traversing or
      bypassing firewalls, and are interrelated with the local security
      policy.

/. 4.4.  Security Properties
========================================================

   The primary goal of the SSH protocol is to improve security on the
   Internet.  It attempts to do this in a way that is easy to deploy,
   even at the cost of absolute security.

   o  All encryption, integrity, and public key algorithms used are
      well-known, well-established algorithms.

   o  All algorithms are used with cryptographically sound key sizes
      that are believed to provide protection against even the strongest
      cryptanalytic attacks for decades.

   o  All algorithms are negotiated, and in case some algorithm is
      broken, it is easy to switch to some other algorithm without
      modifying the base protocol.

   Specific concessions were made to make widespread, fast deployment
   easier.  The particular case where this comes up is verifying that
   the server host key really belongs to the desired host; the protocol
   allows the verification to be left out, but this is NOT RECOMMENDED.
   This is believed to significantly improve usability in the short
   term, until widespread Internet public key infrastructures emerge.

/. 4.5.  Localization and Character Set Support
========================================================

   For the most part, the SSH protocols do not directly pass text that
   would be displayed to the user.  However, there are some places where
   such data might be passed.  When applicable, the character set for





Ylonen & Lonvick            Standards Track                     [Page 7](#t4251){id=p4251_07}

RFC 4251               SSH Protocol Architecture            January 2006


   the data MUST be explicitly specified.  In most places, ISO-10646
   UTF-8 encoding is used [RFC3629].  When applicable, a field is also
   provided for a language tag [RFC3066].

   One big issue is the character set of the interactive session.  There
   is no clear solution, as different applications may display data in
   different formats.  Different types of terminal emulation may also be
   employed in the client, and the character set to be used is
   effectively determined by the terminal emulation.  Thus, no place is
   provided for directly specifying the character set or encoding for
   terminal session data.  However, the terminal emulation type (e.g.,
   "vt100") is transmitted to the remote site, and it implicitly
   specifies the character set and encoding.  Applications typically use
   the terminal type to determine what character set they use, or the
   character set is determined using some external means.  The terminal
   emulation may also allow configuring the default character set.  In
   any case, the character set for the terminal session is considered
   primarily a client local issue.

   Internal names used to identify algorithms or protocols are normally
   never displayed to users, and must be in US-ASCII.

   The client and server user names are inherently constrained by what
   the server is prepared to accept.  They might, however, occasionally
   be displayed in logs, reports, etc.  They MUST be encoded using ISO
   10646 UTF-8, but other encodings may be required in some cases.  It
   is up to the server to decide how to map user names to accepted user
   names.  Straight bit-wise, binary comparison is RECOMMENDED.

   For localization purposes, the protocol attempts to minimize the
   number of textual messages transmitted.  When present, such messages
   typically relate to errors, debugging information, or some externally
   configured data.  For data that is normally displayed, it SHOULD be
   possible to fetch a localized message instead of the transmitted
   message by using a numerical code.  The remaining messages SHOULD be
   configurable.

/. 5.  Data Type Representations Used in the SSH Protocols
========================================================

   byte

      A byte represents an arbitrary 8-bit value (octet).  Fixed length
      data is sometimes represented as an array of bytes, written
      byte[n], where n is the number of bytes in the array.







Ylonen & Lonvick            Standards Track                     [Page 8](#t4251){id=p4251_08}

RFC 4251               SSH Protocol Architecture            January 2006


   boolean

      A boolean value is stored as a single byte.  The value 0
      represents FALSE, and the value 1 represents TRUE.  All non-zero
      values MUST be interpreted as TRUE; however, applications MUST NOT
      store values other than 0 and 1.

   uint32

      Represents a 32-bit unsigned integer.  Stored as four bytes in the
      order of decreasing significance (network byte order).  For
      example: the value 699921578 (0x29b7f4aa) is stored as 29 b7 f4
      aa.

   uint64

      Represents a 64-bit unsigned integer.  Stored as eight bytes in
      the order of decreasing significance (network byte order).

   string

      Arbitrary length binary string.  Strings are allowed to contain
      arbitrary binary data, including null characters and 8-bit
      characters.  They are stored as a uint32 containing its length
      (number of bytes that follow) and zero (= empty string) or more
      bytes that are the value of the string.  Terminating null
      characters are not used.

      Strings are also used to store text.  In that case, US-ASCII is
      used for internal names, and ISO-10646 UTF-8 for text that might
      be displayed to the user.  The terminating null character SHOULD
      NOT normally be stored in the string.  For example: the US-ASCII
      string "testing" is represented as 00 00 00 07 t e s t i n g.  The
      UTF-8 mapping does not alter the encoding of US-ASCII characters.

   mpint

      Represents multiple precision integers in two's complement format,
      stored as a string, 8 bits per byte, MSB first.  Negative numbers
      have the value 1 as the most significant bit of the first byte of
      the data partition.  If the most significant bit would be set for
      a positive number, the number MUST be preceded by a zero byte.
      Unnecessary leading bytes with the value 0 or 255 MUST NOT be
      included.  The value zero MUST be stored as a string with zero
      bytes of data.

      By convention, a number that is used in modular computations in
      Z_n SHOULD be represented in the range 0 <= x < n.



Ylonen & Lonvick            Standards Track                     [Page 9](#t4251){id=p4251_09}

RFC 4251               SSH Protocol Architecture            January 2006


         Examples:

         value (hex)        representation (hex)
         -----------        --------------------
         0                  00 00 00 00
         9a378f9b2e332a7    00 00 00 08 09 a3 78 f9 b2 e3 32 a7
         80                 00 00 00 02 00 80
         -1234              00 00 00 02 ed cc
         -deadbeef          00 00 00 05 ff 21 52 41 11

   name-list

      A string containing a comma-separated list of names.  A name-list
      is represented as a uint32 containing its length (number of bytes
      that follow) followed by a comma-separated list of zero or more
      names.  A name MUST have a non-zero length, and it MUST NOT
      contain a comma (",").  As this is a list of names, all of the
      elements contained are names and MUST be in US-ASCII.  Context may
      impose additional restrictions on the names.  For example, the
      names in a name-list may have to be a list of valid algorithm
      identifiers (see Section 6 below), or a list of [RFC3066] language
      tags.  The order of the names in a name-list may or may not be
      significant.  Again, this depends on the context in which the list
      is used.  Terminating null characters MUST NOT be used, neither
      for the individual names, nor for the list as a whole.

       Examples:

       value                      representation (hex)
       -----                      --------------------
       (), the empty name-list    00 00 00 00
       ("zlib")                   00 00 00 04 7a 6c 69 62
       ("zlib,none")              00 00 00 09 7a 6c 69 62 2c 6e 6f 6e 65

/. 6.  Algorithm and Method Naming
========================================================

   The SSH protocols refer to particular hash, encryption, integrity,
   compression, and key exchange algorithms or methods by name.  There
   are some standard algorithms and methods that all implementations
   MUST support.  There are also algorithms and methods that are defined
   in the protocol specification, but are OPTIONAL.  Furthermore, it is
   expected that some organizations will want to use their own
   algorithms or methods.

   In this protocol, all algorithm and method identifiers MUST be
   printable US-ASCII, non-empty strings no longer than 64 characters.
   Names MUST be case-sensitive.




Ylonen & Lonvick            Standards Track                    [Page 10](#t4251){id=p4251_10}

RFC 4251               SSH Protocol Architecture            January 2006


   There are two formats for algorithm and method names:

   o  Names that do not contain an at-sign ("@") are reserved to be
      assigned by IETF CONSENSUS.  Examples include "3des-cbc", "sha-1",
      "hmac-sha1", and "zlib" (the doublequotes are not part of the
      name).  Names of this format are only valid if they are first
      registered with the IANA.  Registered names MUST NOT contain an
      at-sign ("@"), comma (","), whitespace, control characters (ASCII
      codes 32 or less), or the ASCII code 127 (DEL).  Names are case-
      sensitive, and MUST NOT be longer than 64 characters.

   o  Anyone can define additional algorithms or methods by using names
      in the format name@domainname, e.g., "ourcipher-cbc@example.com".
      The format of the part preceding the at-sign is not specified;
      however, these names MUST be printable US-ASCII strings, and MUST
      NOT contain the comma character (","), whitespace, control
      characters (ASCII codes 32 or less), or the ASCII code 127 (DEL).
      They MUST have only a single at-sign in them.  The part following
      the at-sign MUST be a valid, fully qualified domain name [RFC1034]
      controlled by the person or organization defining the name.  Names
      are case-sensitive, and MUST NOT be longer than 64 characters.  It
      is up to each domain how it manages its local namespace.  It
      should be noted that these names resemble STD 11 [RFC0822] email
      addresses.  This is purely coincidental and has nothing to do with
      STD 11 [RFC0822].

/. 7.  Message Numbers
========================================================

   SSH packets have message numbers in the range 1 to 255.  These
   numbers have been allocated as follows:

   Transport layer protocol:

      1 to 19    Transport layer generic (e.g., disconnect, ignore,
                 debug, etc.)
      20 to 29   Algorithm negotiation
      30 to 49   Key exchange method specific (numbers can be reused
                 for different authentication methods)

   User authentication protocol:

      50 to 59   User authentication generic
      60 to 79   User authentication method specific (numbers can be
                 reused for different authentication methods)







Ylonen & Lonvick            Standards Track                    [Page 11](#t4251){id=p4251_11}

RFC 4251               SSH Protocol Architecture            January 2006


   Connection protocol:

      80 to 89   Connection protocol generic
      90 to 127  Channel related messages

   Reserved for client protocols:

      128 to 191 Reserved

   Local extensions:

      192 to 255 Local extensions

/. 8.  IANA Considerations
========================================================

   This document is part of a set.  The instructions for the IANA for
   the SSH protocol, as defined in this document, [SSH-USERAUTH],
   [SSH-TRANS], and [SSH-CONNECT], are detailed in [SSH-NUMBERS].  The
   following is a brief summary for convenience, but note well that
   [SSH-NUMBERS] contains the actual instructions to the IANA, which may
   be superseded in the future.

   Allocation of the following types of names in the SSH protocols is
   assigned by IETF consensus:

   o  Service Names
      *  Authentication Methods
      *  Connection Protocol Channel Names
      *  Connection Protocol Global Request Names
      *  Connection Protocol Channel Request Names

   o  Key Exchange Method Names

   o  Assigned Algorithm Names
      *  Encryption Algorithm Names
      *  MAC Algorithm Names
      *  Public Key Algorithm Names
      *  Compression Algorithm Names

   These names MUST be printable US-ASCII strings, and MUST NOT contain
   the characters at-sign ("@"), comma (","), whitespace, control
   characters (ASCII codes 32 or less), or the ASCII code 127 (DEL).
   Names are case-sensitive, and MUST NOT be longer than 64 characters.

   Names with the at-sign ("@") are locally defined extensions and are
   not controlled by the IANA.





Ylonen & Lonvick            Standards Track                    [Page 12](#t4251){id=p4251_12}

RFC 4251               SSH Protocol Architecture            January 2006


   Each category of names listed above has a separate namespace.
   However, using the same name in multiple categories SHOULD be avoided
   to minimize confusion.

   Message numbers (see Section 7) in the range of 0 to 191 are
   allocated via IETF CONSENSUS, as described in [RFC2434].  Message
   numbers in the 192 to 255 range (local extensions) are reserved for
   PRIVATE USE, also as described in [RFC2434].

/. 9.  Security Considerations
========================================================

   In order to make the entire body of Security Considerations more
   accessible, Security Considerations for the transport,
   authentication, and connection documents have been gathered here.

   The transport protocol [SSH-TRANS] provides a confidential channel
   over an insecure network.  It performs server host authentication,
   key exchange, encryption, and integrity protection.  It also derives
   a unique session id that may be used by higher-level protocols.

   The authentication protocol [SSH-USERAUTH] provides a suite of
   mechanisms that can be used to authenticate the client user to the
   server.  Individual mechanisms specified in the authentication
   protocol use the session id provided by the transport protocol and/or
   depend on the security and integrity guarantees of the transport
   protocol.

   The connection protocol [SSH-CONNECT] specifies a mechanism to
   multiplex multiple streams (channels) of data over the confidential
   and authenticated transport.  It also specifies channels for
   accessing an interactive shell, for proxy-forwarding various external
   protocols over the secure transport (including arbitrary TCP/IP
   protocols), and for accessing secure subsystems on the server host.

/. 9.1.  Pseudo-Random Number Generation
========================================================

   This protocol binds each session key to the session by including
   random, session specific data in the hash used to produce session
   keys.  Special care should be taken to ensure that all of the random
   numbers are of good quality.  If the random data here (e.g., Diffie-
   Hellman (DH) parameters) are pseudo-random, then the pseudo-random
   number generator should be cryptographically secure (i.e., its next
   output not easily guessed even when knowing all previous outputs)
   and, furthermore, proper entropy needs to be added to the pseudo-
   random number generator.  [RFC4086] offers suggestions for sources of
   random numbers and entropy.  Implementers should note the importance
   of entropy and the well-meant, anecdotal warning about the difficulty
   in properly implementing pseudo-random number generating functions.



Ylonen & Lonvick            Standards Track                    [Page 13](#t4251){id=p4251_13}

RFC 4251               SSH Protocol Architecture            January 2006


   The amount of entropy available to a given client or server may
   sometimes be less than what is required.  In this case, one must
   either resort to pseudo-random number generation regardless of
   insufficient entropy or refuse to run the protocol.  The latter is
   preferable.

/. 9.2.  Control Character Filtering
========================================================

   When displaying text to a user, such as error or debug messages, the
   client software SHOULD replace any control characters (except tab,
   carriage return, and newline) with safe sequences to avoid attacks by
   sending terminal control characters.

/. 9.3.  Transport
========================================================

9.3.1.  Confidentiality
--------------------------------------------------------

   It is beyond the scope of this document and the Secure Shell Working
   Group to analyze or recommend specific ciphers other than the ones
   that have been established and accepted within the industry.  At the
   time of this writing, commonly used ciphers include 3DES, ARCFOUR,
   twofish, serpent, and blowfish.  AES has been published by The US
   Federal Information Processing Standards as [FIPS-197], and the
   cryptographic community has accepted AES as well.  As always,
   implementers and users should check current literature to ensure that
   no recent vulnerabilities have been found in ciphers used within
   products.  Implementers should also check to see which ciphers are
   considered to be relatively stronger than others and should recommend
   their use to users over relatively weaker ciphers.  It would be
   considered good form for an implementation to politely and
   unobtrusively notify a user that a stronger cipher is available and
   should be used when a weaker one is actively chosen.

   The "none" cipher is provided for debugging and SHOULD NOT be used
   except for that purpose.  Its cryptographic properties are
   sufficiently described in [RFC2410], which will show that its use
   does not meet the intent of this protocol.

   The relative merits of these and other ciphers may also be found in
   current literature.  Two references that may provide information on
   the subject are [SCHNEIER] and [KAUFMAN].  Both of these describe the
   CBC mode of operation of certain ciphers and the weakness of this
   scheme.  Essentially, this mode is theoretically vulnerable to chosen
   cipher-text attacks because of the high predictability of the start
   of packet sequence.  However, this attack is deemed difficult and not
   considered fully practicable, especially if relatively long block
   sizes are used.




Ylonen & Lonvick            Standards Track                    [Page 14](#t4251){id=p4251_14}

RFC 4251               SSH Protocol Architecture            January 2006


   Additionally, another CBC mode attack may be mitigated through the
   insertion of packets containing SSH_MSG_IGNORE.  Without this
   technique, a specific attack may be successful.  For this attack
   (commonly known as the Rogaway attack [ROGAWAY], [DAI], [BELLARE]) to
   work, the attacker would need to know the Initialization Vector (IV)
   of the next block that is going to be encrypted.  In CBC mode that is
   the output of the encryption of the previous block.  If the attacker
   does not have any way to see the packet yet (i.e., it is in the
   internal buffers of the SSH implementation or even in the kernel),
   then this attack will not work.  If the last packet has been sent out
   to the network (i.e., the attacker has access to it), then he can use
   the attack.

   In the optimal case, an implementer would need to add an extra packet
   only if the packet has been sent out onto the network and there are
   no other packets waiting for transmission.  Implementers may wish to
   check if there are any unsent packets awaiting transmission;
   unfortunately, it is not normally easy to obtain this information
   from the kernel or buffers.  If there are no unsent packets, then a
   packet containing SSH_MSG_IGNORE SHOULD be sent.  If a new packet is
   added to the stream every time the attacker knows the IV that is
   supposed to be used for the next packet, then the attacker will not
   be able to guess the correct IV, thus the attack will never be
   successful.

   As an example, consider the following case:

      Client                                                  Server
      ------                                                  ------
      TCP(seq=x, len=500)             ---->
       contains Record 1

                          [500 ms passes, no ACK]

      TCP(seq=x, len=1000)            ---->
       contains Records 1,2

                                                                ACK

   1. The Nagle algorithm + TCP retransmits mean that the two records
      get coalesced into a single TCP segment.

   2. Record 2 is not at the beginning of the TCP segment and never will
      be because it gets ACKed.

   3. Yet, the attack is possible because Record 1 has already been
      seen.




Ylonen & Lonvick            Standards Track                    [Page 15](#t4251){id=p4251_15}

RFC 4251               SSH Protocol Architecture            January 2006


   As this example indicates, it is unsafe to use the existence of
   unflushed data in the TCP buffers proper as a guide to whether an
   empty packet is needed, since when the second write() is performed
   the buffers will contain the un-ACKed Record 1.

   On the other hand, it is perfectly safe to have the following
   situation:

      Client                                                  Server
      ------                                                  ------
      TCP(seq=x, len=500)             ---->
         contains SSH_MSG_IGNORE

      TCP(seq=y, len=500)             ---->
         contains Data

      Provided that the IV for the second SSH Record is fixed after the
      data for the Data packet is determined, then the following should
      be performed:

         read from user
         encrypt null packet
         encrypt data packet

9.3.2.  Data Integrity
--------------------------------------------------------

   This protocol does allow the Data Integrity mechanism to be disabled.
   Implementers SHOULD be wary of exposing this feature for any purpose
   other than debugging.  Users and administrators SHOULD be explicitly
   warned anytime the "none" MAC is enabled.

   So long as the "none" MAC is not used, this protocol provides data
   integrity.

   Because MACs use a 32-bit sequence number, they might start to leak
   information after 2**32 packets have been sent.  However, following
   the rekeying recommendations should prevent this attack.  The
   transport protocol [SSH-TRANS] recommends rekeying after one gigabyte
   of data, and the smallest possible packet is 16 bytes.  Therefore,
   rekeying SHOULD happen after 2**28 packets at the very most.

9.3.3.  Replay
--------------------------------------------------------

   The use of a MAC other than "none" provides integrity and
   authentication.  In addition, the transport protocol provides a
   unique session identifier (bound in part to pseudo-random data that
   is part of the algorithm and key exchange process) that can be used
   by higher level protocols to bind data to a given session and prevent



Ylonen & Lonvick            Standards Track                    [Page 16](#t4251){id=p4251_16}

RFC 4251               SSH Protocol Architecture            January 2006


   replay of data from prior sessions.  For example, the authentication
   protocol ([SSH-USERAUTH]) uses this to prevent replay of signatures
   from previous sessions.  Because public key authentication exchanges
   are cryptographically bound to the session (i.e., to the initial key
   exchange), they cannot be successfully replayed in other sessions.
   Note that the session id can be made public without harming the
   security of the protocol.

   If two sessions have the same session id (hash of key exchanges),
   then packets from one can be replayed against the other.  It must be
   stressed that the chances of such an occurrence are, needless to say,
   minimal when using modern cryptographic methods.  This is all the
   more true when specifying larger hash function outputs and DH
   parameters.

   Replay detection using monotonically increasing sequence numbers as
   input to the MAC, or HMAC in some cases, is described in [RFC2085],
   [RFC2246], [RFC2743], [RFC1964], [RFC2025], and [RFC4120].  The
   underlying construct is discussed in [RFC2104].  Essentially, a
   different sequence number in each packet ensures that at least this
   one input to the MAC function will be unique and will provide a
   nonrecurring MAC output that is not predictable to an attacker.  If
   the session stays active long enough, however, this sequence number
   will wrap.  This event may provide an attacker an opportunity to
   replay a previously recorded packet with an identical sequence number
   but only if the peers have not rekeyed since the transmission of the
   first packet with that sequence number.  If the peers have rekeyed,
   then the replay will be detected since the MAC check will fail.  For
   this reason, it must be emphasized that peers MUST rekey before a
   wrap of the sequence numbers.  Naturally, if an attacker does attempt
   to replay a captured packet before the peers have rekeyed, then the
   receiver of the duplicate packet will not be able to validate the MAC
   and it will be discarded.  The reason that the MAC will fail is
   because the receiver will formulate a MAC based upon the packet
   contents, the shared secret, and the expected sequence number.  Since
   the replayed packet will not be using that expected sequence number
   (the sequence number of the replayed packet will have already been
   passed by the receiver), the calculated MAC will not match the MAC
   received with the packet.

9.3.4.  Man-in-the-middle
--------------------------------------------------------

   This protocol makes no assumptions or provisions for an
   infrastructure or means for distributing the public keys of hosts.
   It is expected that this protocol will sometimes be used without
   first verifying the association between the server host key and the
   server host name.  Such usage is vulnerable to man-in-the-middle
   attacks.  This section describes this and encourages administrators



Ylonen & Lonvick            Standards Track                    [Page 17](#t4251){id=p4251_17}

RFC 4251               SSH Protocol Architecture            January 2006


   and users to understand the importance of verifying this association
   before any session is initiated.

   There are three cases of man-in-the-middle attacks to consider.  The
   first is where an attacker places a device between the client and the
   server before the session is initiated.  In this case, the attack
   device is trying to mimic the legitimate server and will offer its
   public key to the client when the client initiates a session.  If it
   were to offer the public key of the server, then it would not be able
   to decrypt or sign the transmissions between the legitimate server
   and the client unless it also had access to the private key of the
   host.  The attack device will also, simultaneously to this, initiate
   a session to the legitimate server, masquerading itself as the
   client.  If the public key of the server had been securely
   distributed to the client prior to that session initiation, the key
   offered to the client by the attack device will not match the key
   stored on the client.  In that case, the user SHOULD be given a
   warning that the offered host key does not match the host key cached
   on the client.  As described in Section 4.1, the user may be free to
   accept the new key and continue the session.  It is RECOMMENDED that
   the warning provide sufficient information to the user of the client
   device so the user may make an informed decision.  If the user
   chooses to continue the session with the stored public key of the
   server (not the public key offered at the start of the session), then
   the session-specific data between the attacker and server will be
   different between the client-to-attacker session and the attacker-
   to-server sessions due to the randomness discussed above.  From this,
   the attacker will not be able to make this attack work since the
   attacker will not be able to correctly sign packets containing this
   session-specific data from the server, since he does not have the
   private key of that server.

   The second case that should be considered is similar to the first
   case in that it also happens at the time of connection, but this case
   points out the need for the secure distribution of server public
   keys.  If the server public keys are not securely distributed, then
   the client cannot know if it is talking to the intended server.  An
   attacker may use social engineering techniques to pass off server
   keys to unsuspecting users and may then place a man-in-the-middle
   attack device between the legitimate server and the clients.  If this
   is allowed to happen, then the clients will form client-to-attacker
   sessions, and the attacker will form attacker-to-server sessions and
   will be able to monitor and manipulate all of the traffic between the
   clients and the legitimate servers.  Server administrators are
   encouraged to make host key fingerprints available for checking by
   some means whose security does not rely on the integrity of the
   actual host keys.  Possible mechanisms are discussed in Section 4.1
   and may also include secured Web pages, physical pieces of paper,



Ylonen & Lonvick            Standards Track                    [Page 18](#t4251){id=p4251_18}

RFC 4251               SSH Protocol Architecture            January 2006


   etc.  Implementers SHOULD provide recommendations on how best to do
   this with their implementation.  Because the protocol is extensible,
   future extensions to the protocol may provide better mechanisms for
   dealing with the need to know the server's host key before
   connecting.  For example, making the host key fingerprint available
   through a secure DNS lookup, or using Kerberos ([RFC4120]) over
   GSS-API ([RFC1964]) during key exchange to authenticate the server
   are possibilities.

   In the third man-in-the-middle case, attackers may attempt to
   manipulate packets in transit between peers after the session has
   been established.  As described in Section 9.3.3, a successful attack
   of this nature is very improbable.  As in Section 9.3.3, this
   reasoning does assume that the MAC is secure and that it is
   infeasible to construct inputs to a MAC algorithm to give a known
   output.  This is discussed in much greater detail in Section 6 of
   [RFC2104].  If the MAC algorithm has a vulnerability or is weak
   enough, then the attacker may be able to specify certain inputs to
   yield a known MAC.  With that, they may be able to alter the contents
   of a packet in transit.  Alternatively, the attacker may be able to
   exploit the algorithm vulnerability or weakness to find the shared
   secret by reviewing the MACs from captured packets.  In either of
   those cases, an attacker could construct a packet or packets that
   could be inserted into an SSH stream.  To prevent this, implementers
   are encouraged to utilize commonly accepted MAC algorithms, and
   administrators are encouraged to watch current literature and
   discussions of cryptography to ensure that they are not using a MAC
   algorithm that has a recently found vulnerability or weakness.

   In summary, the use of this protocol without a reliable association
   of the binding between a host and its host keys is inherently
   insecure and is NOT RECOMMENDED.  However, it may be necessary in
   non-security-critical environments, and will still provide protection
   against passive attacks.  Implementers of protocols and applications
   running on top of this protocol should keep this possibility in mind.

9.3.5.  Denial of Service
--------------------------------------------------------

   This protocol is designed to be used over a reliable transport.  If
   transmission errors or message manipulation occur, the connection is
   closed.  The connection SHOULD be re-established if this occurs.
   Denial of service attacks of this type (wire cutter) are almost
   impossible to avoid.

   In addition, this protocol is vulnerable to denial of service attacks
   because an attacker can force the server to go through the CPU and
   memory intensive tasks of connection setup and key exchange without
   authenticating.  Implementers SHOULD provide features that make this



Ylonen & Lonvick            Standards Track                    [Page 19](#t4251){id=p4251_19}

RFC 4251               SSH Protocol Architecture            January 2006


   more difficult, for example, only allowing connections from a subset
   of clients known to have valid users.

9.3.6.  Covert Channels
--------------------------------------------------------

   The protocol was not designed to eliminate covert channels.  For
   example, the padding, SSH_MSG_IGNORE messages, and several other
   places in the protocol can be used to pass covert information, and
   the recipient has no reliable way of verifying whether such
   information is being sent.

9.3.7.  Forward Secrecy
--------------------------------------------------------

   It should be noted that the Diffie-Hellman key exchanges may provide
   perfect forward secrecy (PFS).  PFS is essentially defined as the
   cryptographic property of a key-establishment protocol in which the
   compromise of a session key or long-term private key after a given
   session does not cause the compromise of any earlier session
   [ANSI-T1.523-2001].  SSH sessions resulting from a key exchange using
   the diffie-hellman methods described in the section Diffie-Hellman
   Key Exchange of [SSH-TRANS] (including "diffie-hellman-group1-sha1"
   and "diffie-hellman-group14-sha1") are secure even if private
   keying/authentication material is later revealed, but not if the
   session keys are revealed.  So, given this definition of PFS, SSH
   does have PFS.  However, this property is not commuted to any of the
   applications or protocols using SSH as a transport.  The transport
   layer of SSH provides confidentiality for password authentication and
   other methods that rely on secret data.

   Of course, if the DH private parameters for the client and server are
   revealed, then the session key is revealed, but these items can be
   thrown away after the key exchange completes.  It's worth pointing
   out that these items should not be allowed to end up on swap space
   and that they should be erased from memory as soon as the key
   exchange completes.

9.3.8.  Ordering of Key Exchange Methods
--------------------------------------------------------

   As stated in the section on Algorithm Negotiation of [SSH-TRANS],
   each device will send a list of preferred methods for key exchange.
   The most-preferred method is the first in the list.  It is
   RECOMMENDED that the algorithms be sorted by cryptographic strength,
   strongest first.  Some additional guidance for this is given in
   [RFC3766].







Ylonen & Lonvick            Standards Track                    [Page 20](#t4251){id=p4251_20}

RFC 4251               SSH Protocol Architecture            January 2006


9.3.9.  Traffic Analysis
--------------------------------------------------------

   Passive monitoring of any protocol may give an attacker some
   information about the session, the user, or protocol specific
   information that they would otherwise not be able to garner.  For
   example, it has been shown that traffic analysis of an SSH session
   can yield information about the length of the password - [Openwall]
   and [USENIX].  Implementers should use the SSH_MSG_IGNORE packet,
   along with the inclusion of random lengths of padding, to thwart
   attempts at traffic analysis.  Other methods may also be found and
   implemented.

/. 9.4.  Authentication Protocol
========================================================

   The purpose of this protocol is to perform client user
   authentication.  It assumes that this runs over a secure transport
   layer protocol, which has already authenticated the server machine,
   established an encrypted communications channel, and computed a
   unique session identifier for this session.

   Several authentication methods with different security
   characteristics are allowed.  It is up to the server's local policy
   to decide which methods (or combinations of methods) it is willing to
   accept for each user.  Authentication is no stronger than the weakest
   combination allowed.

   The server may go into a sleep period after repeated unsuccessful
   authentication attempts to make key search more difficult for
   attackers.  Care should be taken so that this doesn't become a self-
   denial of service vector.

9.4.1.  Weak Transport
--------------------------------------------------------

   If the transport layer does not provide confidentiality,
   authentication methods that rely on secret data SHOULD be disabled.
   If it does not provide strong integrity protection, requests to
   change authentication data (e.g., a password change) SHOULD be
   disabled to prevent an attacker from modifying the ciphertext without
   being noticed, or rendering the new authentication data unusable
   (denial of service).

   The assumption stated above, that the Authentication Protocol only
   runs over a secure transport that has previously authenticated the
   server, is very important to note.  People deploying SSH are reminded
   of the consequences of man-in-the-middle attacks if the client does
   not have a very strong a priori association of the server with the
   host key of that server.  Specifically, for the case of the
   Authentication Protocol, the client may form a session to a man-in-



Ylonen & Lonvick            Standards Track                    [Page 21](#t4251){id=p4251_21}

RFC 4251               SSH Protocol Architecture            January 2006


   the-middle attack device and divulge user credentials such as their
   username and password.  Even in the cases of authentication where no
   user credentials are divulged, an attacker may still gain information
   they shouldn't have by capturing key-strokes in much the same way
   that a honeypot works.

9.4.2.  Debug Messages
--------------------------------------------------------

   Special care should be taken when designing debug messages.  These
   messages may reveal surprising amounts of information about the host
   if not properly designed.  Debug messages can be disabled (during
   user authentication phase) if high security is required.
   Administrators of host machines should make all attempts to
   compartmentalize all event notification messages and protect them
   from unwarranted observation.  Developers should be aware of the
   sensitive nature of some of the normal event and debug messages, and
   may want to provide guidance to administrators on ways to keep this
   information away from unauthorized people.  Developers should
   consider minimizing the amount of sensitive information obtainable by
   users during the authentication phase, in accordance with the local
   policies.  For this reason, it is RECOMMENDED that debug messages be
   initially disabled at the time of deployment and require an active
   decision by an administrator to allow them to be enabled.  It is also
   RECOMMENDED that a message expressing this concern be presented to
   the administrator of a system when the action is taken to enable
   debugging messages.

9.4.3.  Local Security Policy
--------------------------------------------------------

   The implementer MUST ensure that the credentials provided validate
   the professed user and also MUST ensure that the local policy of the
   server permits the user the access requested.  In particular, because
   of the flexible nature of the SSH connection protocol, it may not be
   possible to determine the local security policy, if any, that should
   apply at the time of authentication because the kind of service being
   requested is not clear at that instant.  For example, local policy
   might allow a user to access files on the server, but not start an
   interactive shell.  However, during the authentication protocol, it
   is not known whether the user will be accessing files, attempting to
   use an interactive shell, or even both.  In any event, where local
   security policy for the server host exists, it MUST be applied and
   enforced correctly.

   Implementers are encouraged to provide a default local policy and
   make its parameters known to administrators and users.  At the
   discretion of the implementers, this default policy may be along the
   lines of anything-goes where there are no restrictions placed upon
   users, or it may be along the lines of excessively-restrictive, in



Ylonen & Lonvick            Standards Track                    [Page 22](#t4251){id=p4251_22}

RFC 4251               SSH Protocol Architecture            January 2006


   which case, the administrators will have to actively make changes to
   the initial default parameters to meet their needs.  Alternatively,
   it may be some attempt at providing something practical and
   immediately useful to the administrators of the system so they don't
   have to put in much effort to get SSH working.  Whatever choice is
   made must be applied and enforced as required above.

9.4.4  Public Key Authentication
--------------------------------------------------------

   The use of public key authentication assumes that the client host has
   not been compromised.  It also assumes that the private key of the
   server host has not been compromised.

   This risk can be mitigated by the use of passphrases on private keys;
   however, this is not an enforceable policy.  The use of smartcards,
   or other technology to make passphrases an enforceable policy is
   suggested.

   The server could require both password and public key authentication;
   however, this requires the client to expose its password to the
   server (see the section on Password Authentication below.)

9.4.5.  Password Authentication
--------------------------------------------------------

   The password mechanism, as specified in the authentication protocol,
   assumes that the server has not been compromised.  If the server has
   been compromised, using password authentication will reveal a valid
   username/password combination to the attacker, which may lead to
   further compromises.

   This vulnerability can be mitigated by using an alternative form of
   authentication.  For example, public key authentication makes no
   assumptions about security on the server.

9.4.6.  Host-Based Authentication
--------------------------------------------------------

   Host-based authentication assumes that the client has not been
   compromised.  There are no mitigating strategies, other than to use
   host-based authentication in combination with another authentication
   method.











Ylonen & Lonvick            Standards Track                    [Page 23](#t4251){id=p4251_23}

RFC 4251               SSH Protocol Architecture            January 2006


/. 9.5.  Connection Protocol
========================================================

9.5.1.  End Point Security
--------------------------------------------------------

   End point security is assumed by the connection protocol.  If the
   server has been compromised, any terminal sessions, port forwarding,
   or systems accessed on the host are compromised.  There are no
   mitigating factors for this.

   If the client has been compromised, and the server fails to stop the
   attacker at the authentication protocol, all services exposed (either
   as subsystems or through forwarding) will be vulnerable to attack.
   Implementers SHOULD provide mechanisms for administrators to control
   which services are exposed to limit the vulnerability of other
   services.  These controls might include controlling which machines
   and ports can be targeted in port-forwarding operations, which users
   are allowed to use interactive shell facilities, or which users are
   allowed to use exposed subsystems.

9.5.2.  Proxy Forwarding
--------------------------------------------------------

   The SSH connection protocol allows for proxy forwarding of other
   protocols such as SMTP, POP3, and HTTP.  This may be a concern for
   network administrators who wish to control the access of certain
   applications by users located outside of their physical location.
   Essentially, the forwarding of these protocols may violate site-
   specific security policies, as they may be undetectably tunneled
   through a firewall.  Implementers SHOULD provide an administrative
   mechanism to control the proxy forwarding functionality so that
   site-specific security policies may be upheld.

   In addition, a reverse proxy forwarding functionality is available,
   which, again, can be used to bypass firewall controls.

   As indicated above, end-point security is assumed during proxy
   forwarding operations.  Failure of end-point security will compromise
   all data passed over proxy forwarding.

9.5.3.  X11 Forwarding
--------------------------------------------------------

   Another form of proxy forwarding provided by the SSH connection
   protocol is the forwarding of the X11 protocol.  If end-point
   security has been compromised, X11 forwarding may allow attacks
   against the X11 server.  Users and administrators should, as a matter
   of course, use appropriate X11 security mechanisms to prevent
   unauthorized use of the X11 server.  Implementers, administrators,
   and users who wish to further explore the security mechanisms of X11
   are invited to read [SCHEIFLER] and analyze previously reported



Ylonen & Lonvick            Standards Track                    [Page 24](#t4251){id=p4251_24}

RFC 4251               SSH Protocol Architecture            January 2006


   problems with the interactions between SSH forwarding and X11 in CERT
   vulnerabilities VU#363181 and VU#118892 [CERT].

   X11 display forwarding with SSH, by itself, is not sufficient to
   correct well known problems with X11 security [VENEMA].  However, X11
   display forwarding in SSH (or other secure protocols), combined with
   actual and pseudo-displays that accept connections only over local
   IPC mechanisms authorized by permissions or access control lists
   (ACLs), does correct many X11 security problems, as long as the
   "none" MAC is not used.  It is RECOMMENDED that X11 display
   implementations default to allow the display to open only over local
   IPC.  It is RECOMMENDED that SSH server implementations that support
   X11 forwarding default to allow the display to open only over local
   IPC.  On single-user systems, it might be reasonable to default to
   allow the local display to open over TCP/IP.

   Implementers of the X11 forwarding protocol SHOULD implement the
   magic cookie access-checking spoofing mechanism, as described in
   [SSH-CONNECT], as an additional mechanism to prevent unauthorized use
   of the proxy.































Ylonen & Lonvick            Standards Track                    [Page 25](#t4251){id=p4251_25}

RFC 4251               SSH Protocol Architecture            January 2006


/. 10.  References
========================================================

/. 10.1.  Normative References
========================================================

   [SSH-TRANS]        Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                      (SSH) Transport Layer Protocol", RFC 4253, January
                      2006.

   [SSH-USERAUTH]     Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                      (SSH) Authentication Protocol", RFC 4252, January
                      2006.

   [SSH-CONNECT]      Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                      (SSH) Connection Protocol", RFC 4254, January
                      2006.

   [SSH-NUMBERS]      Lehtinen, S. and C. Lonvick, Ed., "The Secure
                      Shell (SSH) Protocol Assigned Numbers", RFC 4250,
                      January 2006.

   [RFC2119]          Bradner, S., "Key words for use in RFCs to
                      Indicate Requirement Levels", BCP 14, RFC 2119,
                      March 1997.

   [RFC2434]          Narten, T. and H. Alvestrand, "Guidelines for
                      Writing an IANA Considerations Section in RFCs",
                      BCP 26, RFC 2434, October 1998.

   [RFC3066]          Alvestrand, H., "Tags for the Identification of
                      Languages", BCP 47, RFC 3066, January 2001.

   [RFC3629]          Yergeau, F., "UTF-8, a transformation format of
                      ISO 10646", STD 63, RFC 3629, November 2003.

/. 10.2.  Informative References
========================================================

   [RFC0822]          Crocker, D., "Standard for the format of ARPA
                      Internet text messages", STD 11, RFC 822, August
                      1982.

   [RFC0854]          Postel, J. and J. Reynolds, "Telnet Protocol
                      Specification", STD 8, RFC 854, May 1983.

   [RFC1034]          Mockapetris, P., "Domain names - concepts and
                      facilities", STD 13, RFC 1034, November 1987.






Ylonen & Lonvick            Standards Track                    [Page 26](#t4251){id=p4251_26}

RFC 4251               SSH Protocol Architecture            January 2006


   [RFC1282]          Kantor, B., "BSD Rlogin", RFC 1282, December 1991.

   [RFC4120]          Neuman, C., Yu, T., Hartman, S., and K. Raeburn,
                      "The Kerberos Network Authentication Service
                      (V5)", RFC 4120, July 2005.

   [RFC1964]          Linn, J., "The Kerberos Version 5 GSS-API
                      Mechanism", RFC 1964, June 1996.

   [RFC2025]          Adams, C., "The Simple Public-Key GSS-API
                      Mechanism (SPKM)", RFC 2025, October 1996.

   [RFC2085]          Oehler, M. and R. Glenn, "HMAC-MD5 IP
                      Authentication with Replay Prevention", RFC 2085,
                      February 1997.

   [RFC2104]          Krawczyk, H., Bellare, M., and R. Canetti, "HMAC:
                      Keyed-Hashing for Message Authentication", RFC
                      2104, February 1997.

   [RFC2246]          Dierks, T. and C. Allen, "The TLS Protocol Version
                      1.0", RFC 2246, January 1999.

   [RFC2410]          Glenn, R. and S. Kent, "The NULL Encryption
                      Algorithm and Its Use With IPsec", RFC 2410,
                      November 1998.

   [RFC2743]          Linn, J., "Generic Security Service Application
                      Program Interface Version 2, Update 1", RFC 2743,
                      January 2000.

   [RFC3766]          Orman, H. and P. Hoffman, "Determining Strengths
                      For Public Keys Used For Exchanging Symmetric
                      Keys", BCP 86, RFC 3766, April 2004.

   [RFC4086]          Eastlake, D., 3rd, Schiller, J., and S. Crocker,
                      "Randomness Requirements for Security", BCP 106,
                      RFC 4086, June 2005.

   [FIPS-180-2]       US National Institute of Standards and Technology,
                      "Secure Hash Standard (SHS)", Federal Information
                      Processing Standards Publication 180-2, August
                      2002.

   [FIPS-186-2]       US National Institute of Standards and Technology,
                      "Digital Signature Standard (DSS)", Federal
                      Information Processing Standards Publication 186-
                      2, January 2000.



Ylonen & Lonvick            Standards Track                    [Page 27](#t4251){id=p4251_27}

RFC 4251               SSH Protocol Architecture            January 2006


   [FIPS-197]         US National Institute of Standards and Technology,
                      "Advanced Encryption Standard (AES)", Federal
                      Information Processing Standards Publication 197,
                      November 2001.

   [ANSI-T1.523-2001] American National Standards Institute, Inc.,
                      "Telecom Glossary 2000", ANSI T1.523-2001,
                      February 2001.

   [SCHNEIER]         Schneier, B., "Applied Cryptography Second
                      Edition:  protocols algorithms and source in code
                      in C", John Wiley and Sons, New York, NY, 1996.

   [SCHEIFLER]        Scheifler, R., "X Window System : The Complete
                      Reference to Xlib, X Protocol, Icccm, Xlfd, 3rd
                      edition.", Digital Press, ISBN 1555580882,
                      February 1992.

   [KAUFMAN]          Kaufman, C., Perlman, R., and M. Speciner,
                      "Network Security: PRIVATE Communication in a
                      PUBLIC World", Prentice Hall Publisher, 1995.

   [CERT]             CERT Coordination Center, The.,
                      "http://www.cert.org/nav/index_red.html".

   [VENEMA]           Venema, W., "Murphy's Law and Computer Security",
                      Proceedings of 6th USENIX Security Symposium, San
                      Jose CA
                      http://www.usenix.org/publications/library/
                      proceedings/sec96/venema.html, July 1996.

   [ROGAWAY]          Rogaway, P., "Problems with Proposed IP
                      Cryptography", Unpublished paper
                      http://www.cs.ucdavis.edu/~rogaway/ papers/draft-
                      rogaway-ipsec-comments-00.txt, 1996.

   [DAI]              Dai, W., "An attack against SSH2 protocol", Email
                      to the SECSH Working Group ietf-ssh@netbsd.org
                      ftp:// ftp.ietf.org/ietf-mail-archive/secsh/2002-
                      02.mail, Feb 2002.

   [BELLARE]          Bellaire, M., Kohno, T., and C. Namprempre,
                      "Authenticated Encryption in SSH: Fixing the SSH
                      Binary Packet Protocol", Proceedings of the 9th
                      ACM Conference on Computer and Communications
                      Security, Sept 2002.





Ylonen & Lonvick            Standards Track                    [Page 28](#t4251){id=p4251_28}

RFC 4251               SSH Protocol Architecture            January 2006


   [Openwall]         Solar Designer and D. Song, "SSH Traffic Analysis
                      Attacks", Presentation given at HAL2001 and
                      NordU2002 Conferences, Sept 2001.

   [USENIX]           Song, X.D., Wagner, D., and X. Tian, "Timing
                      Analysis of Keystrokes and SSH Timing Attacks",
                      Paper given at 10th USENIX Security Symposium,
                      2001.

Authors' Addresses

   Tatu Ylonen
   SSH Communications Security Corp
   Valimotie 17
   00380 Helsinki
   Finland

   EMail: ylo@ssh.com


   Chris Lonvick (editor)
   Cisco Systems, Inc.
   12515 Research Blvd.
   Austin  78759
   USA

   EMail: clonvick@cisco.com

Trademark Notice

   "ssh" is a registered trademark in the United States and/or other
   countries.



















Ylonen & Lonvick            Standards Track                    [Page 29](#t4251){id=p4251_29}

RFC 4251               SSH Protocol Architecture            January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Ylonen & Lonvick            Standards Track                    [Page 30](#t4251){id=p4251_30}



/CORE RFC4252  The Secure Shell (SSH) Authentication Protocol
========================================================
https://www.rfc-editor.org/rfc/rfc4252.txt







Network Working Group                                          T. Ylonen
Request for Comments: 4252              SSH Communications Security Corp
Category: Standards Track                                C. Lonvick, Ed.
                                                     Cisco Systems, Inc.
                                                            January 2006


             The Secure Shell (SSH) Authentication Protocol

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   The Secure Shell Protocol (SSH) is a protocol for secure remote login
   and other secure network services over an insecure network.  This
   document describes the SSH authentication protocol framework and
   public key, password, and host-based client authentication methods.
   Additional authentication methods are described in separate
   documents.  The SSH authentication protocol runs on top of the SSH
   transport layer protocol and provides a single authenticated tunnel
   for the SSH connection protocol.




















Ylonen & Lonvick            Standards Track                     [Page 1](#t4252){id=p4252_01}

RFC 4252              SSH Authentication Protocol           January 2006


/. [Table of Contents](){id=t4252}
========================================================

- 1. Introduction .................................................... [2](#p4252_02)
- 2. Contributors .................................................... [3](#p4252_03)
- 3. Conventions Used in This Document ............................... [3](#p4252_03)
- 4. The Authentication Protocol Framework ........................... [4](#p4252_04)
- 5. Authentication Requests ......................................... [4](#p4252_04)
-    5.1. Responses to Authentication Requests ....................... [5](#p4252_05)
-    5.2. The "none" Authentication Request .......................... [7](#p4252_07)
-    5.3. Completion of User Authentication .......................... [7](#p4252_07)
-    5.4. Banner Message ............................................. [7](#p4252_07)
- 6. Authentication Protocol Message Numbers ......................... [8](#p4252_08)
- 7. Public Key Authentication Method: "publickey" ................... [8](#p4252_08)
- 8. Password Authentication Method: "password" ..................... [10](#p4252_10)
- 9. Host-Based Authentication: "hostbased" ......................... [12](#p4252_12)
- 10. IANA Considerations ........................................... [14](#p4252_14)
- 11. Security Considerations ....................................... [14](#p4252_14)
- 12. References .................................................... [15](#p4252_15)
-    12.1. Normative References ..................................... [15](#p4252_15)
-    12.2. Informative References ................................... [15](#p4252_15)
- Authors' Addresses ................................................ [16](#p4252_16)
- Trademark Notice .................................................. [16](#p4252_16)

/. 1.  Introduction
========================================================

   The SSH authentication protocol is a general-purpose user
   authentication protocol.  It is intended to be run over the SSH
   transport layer protocol [SSH-TRANS].  This protocol assumes that the
   underlying protocols provide integrity and confidentiality
   protection.

   This document should be read only after reading the SSH architecture
   document [SSH-ARCH].  This document freely uses terminology and
   notation from the architecture document without reference or further
   explanation.

   The 'service name' for this protocol is "ssh-userauth".

   When this protocol starts, it receives the session identifier from
   the lower-level protocol (this is the exchange hash H from the first
   key exchange).  The session identifier uniquely identifies this
   session and is suitable for signing in order to prove ownership of a
   private key.  This protocol also needs to know whether the lower-
   level protocol provides confidentiality protection.







Ylonen & Lonvick            Standards Track                     [Page 2](#t4252){id=p4252_02}

RFC 4252              SSH Authentication Protocol           January 2006


/. 2.  Contributors
========================================================

   The major original contributors of this set of documents have been:
   Tatu Ylonen, Tero Kivinen, Timo J. Rinne, Sami Lehtinen (all of SSH
   Communications Security Corp), and Markku-Juhani O. Saarinen
   (University of Jyvaskyla).  Darren Moffat was the original editor of
   this set of documents and also made very substantial contributions.

   Many people contributed to the development of this document over the
   years.  People who should be acknowledged include Mats Andersson, Ben
   Harris, Bill Sommerfeld, Brent McClure, Niels Moller, Damien Miller,
   Derek Fawcus, Frank Cusack, Heikki Nousiainen, Jakob Schlyter, Jeff
   Van Dyke, Jeffrey Altman, Jeffrey Hutzelman, Jon Bright, Joseph
   Galbraith, Ken Hornstein, Markus Friedl, Martin Forssen, Nicolas
   Williams, Niels Provos, Perry Metzger, Peter Gutmann, Simon
   Josefsson, Simon Tatham, Wei Dai, Denis Bider, der Mouse, and
   Tadayoshi Kohno.  Listing their names here does not mean that they
   endorse this document, but that they have contributed to it.

/. 3.  Conventions Used in This Document
========================================================

   All documents related to the SSH protocols shall use the keywords
   "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
   "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" to describe
   requirements.  These keywords are to be interpreted as described in
   [RFC2119].

   The keywords "PRIVATE USE", "HIERARCHICAL ALLOCATION", "FIRST COME
   FIRST SERVED", "EXPERT REVIEW", "SPECIFICATION REQUIRED", "IESG
   APPROVAL", "IETF CONSENSUS", and "STANDARDS ACTION" that appear in
   this document when used to describe namespace allocation are to be
   interpreted as described in [RFC2434].

   Protocol fields and possible values to fill them are defined in this
   set of documents.  Protocol fields will be defined in the message
   definitions.  As an example, SSH_MSG_CHANNEL_DATA is defined as
   follows.

      byte      SSH_MSG_CHANNEL_DATA
      uint32    recipient channel
      string    data

   Throughout these documents, when the fields are referenced, they will
   appear within single quotes.  When values to fill those fields are
   referenced, they will appear within double quotes.  Using the above
   example, possible values for 'data' are "foo" and "bar".





Ylonen & Lonvick            Standards Track                     [Page 3](#t4252){id=p4252_03}

RFC 4252              SSH Authentication Protocol           January 2006


/. 4.  The Authentication Protocol Framework
========================================================

   The server drives the authentication by telling the client which
   authentication methods can be used to continue the exchange at any
   given time.  The client has the freedom to try the methods listed by
   the server in any order.  This gives the server complete control over
   the authentication process if desired, but also gives enough
   flexibility for the client to use the methods it supports or that are
   most convenient for the user, when multiple methods are offered by
   the server.

   Authentication methods are identified by their name, as defined in
   [SSH-ARCH].  The "none" method is reserved, and MUST NOT be listed as
   supported.  However, it MAY be sent by the client.  The server MUST
   always reject this request, unless the client is to be granted access
   without any authentication, in which case, the server MUST accept
   this request.  The main purpose of sending this request is to get the
   list of supported methods from the server.

   The server SHOULD have a timeout for authentication and disconnect if
   the authentication has not been accepted within the timeout period.
   The RECOMMENDED timeout period is 10 minutes.  Additionally, the
   implementation SHOULD limit the number of failed authentication
   attempts a client may perform in a single session (the RECOMMENDED
   limit is 20 attempts).  If the threshold is exceeded, the server
   SHOULD disconnect.

   Additional thoughts about authentication timeouts and retries may be
   found in [ssh-1.2.30].

/. 5.  Authentication Requests
========================================================

   All authentication requests MUST use the following message format.
   Only the first few fields are defined; the remaining fields depend on
   the authentication method.

      byte      SSH_MSG_USERAUTH_REQUEST
      string    user name in ISO-10646 UTF-8 encoding [RFC3629]
      string    service name in US-ASCII
      string    method name in US-ASCII
      ....      method specific fields

   The 'user name' and 'service name' are repeated in every new
   authentication attempt, and MAY change.  The server implementation
   MUST carefully check them in every message, and MUST flush any
   accumulated authentication states if they change.  If it is unable to





Ylonen & Lonvick            Standards Track                     [Page 4](#t4252){id=p4252_04}

RFC 4252              SSH Authentication Protocol           January 2006


   flush an authentication state, it MUST disconnect if the 'user name'
   or 'service name' changes.

   The 'service name' specifies the service to start after
   authentication.  There may be several different authenticated
   services provided.  If the requested service is not available, the
   server MAY disconnect immediately or at any later time.  Sending a
   proper disconnect message is RECOMMENDED.  In any case, if the
   service does not exist, authentication MUST NOT be accepted.

   If the requested 'user name' does not exist, the server MAY
   disconnect, or MAY send a bogus list of acceptable authentication
   'method name' values, but never accept any.  This makes it possible
   for the server to avoid disclosing information on which accounts
   exist.  In any case, if the 'user name' does not exist, the
   authentication request MUST NOT be accepted.

   While there is usually little point for clients to send requests that
   the server does not list as acceptable, sending such requests is not
   an error, and the server SHOULD simply reject requests that it does
   not recognize.

   An authentication request MAY result in a further exchange of
   messages.  All such messages depend on the authentication 'method
   name' used, and the client MAY at any time continue with a new
   SSH_MSG_USERAUTH_REQUEST message, in which case the server MUST
   abandon the previous authentication attempt and continue with the new
   one.

   The following 'method name' values are defined.

      "publickey"             REQUIRED
      "password"              OPTIONAL
      "hostbased"             OPTIONAL
      "none"                  NOT RECOMMENDED

   Additional 'method name' values may be defined as specified in
   [SSH-ARCH] and [SSH-NUMBERS].

/. 5.1.  Responses to Authentication Requests
--------------------------------------------------------

   If the server rejects the authentication request, it MUST respond
   with the following:

      byte         SSH_MSG_USERAUTH_FAILURE
      name-list    authentications that can continue
      boolean      partial success




Ylonen & Lonvick            Standards Track                     [Page 5](#t4252){id=p4252_05}

RFC 4252              SSH Authentication Protocol           January 2006


   The 'authentications that can continue' is a comma-separated name-
   list of authentication 'method name' values that may productively
   continue the authentication dialog.

   It is RECOMMENDED that servers only include those 'method name'
   values in the name-list that are actually useful.  However, it is not
   illegal to include 'method name' values that cannot be used to
   authenticate the user.

   Already successfully completed authentications SHOULD NOT be included
   in the name-list, unless they should be performed again for some
   reason.

   The value of 'partial success' MUST be TRUE if the authentication
   request to which this is a response was successful.  It MUST be FALSE
   if the request was not successfully processed.

   When the server accepts authentication, it MUST respond with the
   following:

      byte      SSH_MSG_USERAUTH_SUCCESS

   Note that this is not sent after each step in a multi-method
   authentication sequence, but only when the authentication is
   complete.

   The client MAY send several authentication requests without waiting
   for responses from previous requests.  The server MUST process each
   request completely and acknowledge any failed requests with a
   SSH_MSG_USERAUTH_FAILURE message before processing the next request.

   A request that requires further messages to be exchanged will be
   aborted by a subsequent request.  A client MUST NOT send a subsequent
   request if it has not received a response from the server for a
   previous request.  A SSH_MSG_USERAUTH_FAILURE message MUST NOT be
   sent for an aborted method.

   SSH_MSG_USERAUTH_SUCCESS MUST be sent only once.  When
   SSH_MSG_USERAUTH_SUCCESS has been sent, any further authentication
   requests received after that SHOULD be silently ignored.

   Any non-authentication messages sent by the client after the request
   that resulted in SSH_MSG_USERAUTH_SUCCESS being sent MUST be passed
   to the service being run on top of this protocol.  Such messages can
   be identified by their message numbers (see Section 6).






Ylonen & Lonvick            Standards Track                     [Page 6](#t4252){id=p4252_06}

RFC 4252              SSH Authentication Protocol           January 2006


/. 5.2.  The "none" Authentication Request
--------------------------------------------------------

   A client may request a list of authentication 'method name' values
   that may continue by using the "none" authentication 'method name'.

   If no authentication is needed for the user, the server MUST return
   SSH_MSG_USERAUTH_SUCCESS.  Otherwise, the server MUST return
   SSH_MSG_USERAUTH_FAILURE and MAY return with it a list of methods
   that may continue in its 'authentications that can continue' value.

   This 'method name' MUST NOT be listed as supported by the server.

/. 5.3.  Completion of User Authentication
--------------------------------------------------------

   Authentication is complete when the server has responded with
   SSH_MSG_USERAUTH_SUCCESS.  All authentication related messages
   received after sending this message SHOULD be silently ignored.

   After sending SSH_MSG_USERAUTH_SUCCESS, the server starts the
   requested service.

/. 5.4.  Banner Message
--------------------------------------------------------

   In some jurisdictions, sending a warning message before
   authentication may be relevant for getting legal protection.  Many
   UNIX machines, for example, normally display text from /etc/issue,
   use TCP wrappers, or similar software to display a banner before
   issuing a login prompt.

   The SSH server may send an SSH_MSG_USERAUTH_BANNER message at any
   time after this authentication protocol starts and before
   authentication is successful.  This message contains text to be
   displayed to the client user before authentication is attempted.  The
   format is as follows:

      byte      SSH_MSG_USERAUTH_BANNER
      string    message in ISO-10646 UTF-8 encoding [RFC3629]
      string    language tag [RFC3066]

   By default, the client SHOULD display the 'message' on the screen.
   However, since the 'message' is likely to be sent for every login
   attempt, and since some client software will need to open a separate
   window for this warning, the client software may allow the user to
   explicitly disable the display of banners from the server.  The
   'message' may consist of multiple lines, with line breaks indicated
   by CRLF pairs.





Ylonen & Lonvick            Standards Track                     [Page 7](#t4252){id=p4252_07}

RFC 4252              SSH Authentication Protocol           January 2006


   If the 'message' string is displayed, control character filtering,
   discussed in [SSH-ARCH], SHOULD be used to avoid attacks by sending
   terminal control characters.

/. 6.  Authentication Protocol Message Numbers
========================================================

   All message numbers used by this authentication protocol are in the
   range from 50 to 79, which is part of the range reserved for
   protocols running on top of the SSH transport layer protocol.

   Message numbers of 80 and higher are reserved for protocols running
   after this authentication protocol, so receiving one of them before
   authentication is complete is an error, to which the server MUST
   respond by disconnecting, preferably with a proper disconnect message
   sent to ease troubleshooting.

   After successful authentication, such messages are passed to the
   higher-level service.

   These are the general authentication message codes:

      SSH_MSG_USERAUTH_REQUEST            50
      SSH_MSG_USERAUTH_FAILURE            51
      SSH_MSG_USERAUTH_SUCCESS            52
      SSH_MSG_USERAUTH_BANNER             53

   In addition to the above, there is a range of message numbers (60 to
   79) reserved for method-specific messages.  These messages are only
   sent by the server (client sends only SSH_MSG_USERAUTH_REQUEST
   messages).  Different authentication methods reuse the same message
   numbers.

/. 7.  Public Key Authentication Method: "publickey"
========================================================

   The only REQUIRED authentication 'method name' is "publickey"
   authentication.  All implementations MUST support this method;
   however, not all users need to have public keys, and most local
   policies are not likely to require public key authentication for all
   users in the near future.

   With this method, the possession of a private key serves as
   authentication.  This method works by sending a signature created
   with a private key of the user.  The server MUST check that the key
   is a valid authenticator for the user, and MUST check that the
   signature is valid.  If both hold, the authentication request MUST be
   accepted; otherwise, it MUST be rejected.  Note that the server MAY
   require additional authentications after successful authentication.




Ylonen & Lonvick            Standards Track                     [Page 8](#t4252){id=p4252_08}

RFC 4252              SSH Authentication Protocol           January 2006


   Private keys are often stored in an encrypted form at the client
   host, and the user must supply a passphrase before the signature can
   be generated.  Even if they are not, the signing operation involves
   some expensive computation.  To avoid unnecessary processing and user
   interaction, the following message is provided for querying whether
   authentication using the "publickey" method would be acceptable.

      byte      SSH_MSG_USERAUTH_REQUEST
      string    user name in ISO-10646 UTF-8 encoding [RFC3629]
      string    service name in US-ASCII
      string    "publickey"
      boolean   FALSE
      string    public key algorithm name
      string    public key blob

   Public key algorithms are defined in the transport layer
   specification [SSH-TRANS].  The 'public key blob' may contain
   certificates.

   Any public key algorithm may be offered for use in authentication.
   In particular, the list is not constrained by what was negotiated
   during key exchange.  If the server does not support some algorithm,
   it MUST simply reject the request.

   The server MUST respond to this message with either
   SSH_MSG_USERAUTH_FAILURE or with the following:

      byte      SSH_MSG_USERAUTH_PK_OK
      string    public key algorithm name from the request
      string    public key blob from the request

   To perform actual authentication, the client MAY then send a
   signature generated using the private key.  The client MAY send the
   signature directly without first verifying whether the key is
   acceptable.  The signature is sent using the following packet:

      byte      SSH_MSG_USERAUTH_REQUEST
      string    user name
      string    service name
      string    "publickey"
      boolean   TRUE
      string    public key algorithm name
      string    public key to be used for authentication
      string    signature







Ylonen & Lonvick            Standards Track                     [Page 9](#t4252){id=p4252_09}

RFC 4252              SSH Authentication Protocol           January 2006


   The value of 'signature' is a signature by the corresponding private
   key over the following data, in the following order:

      string    session identifier
      byte      SSH_MSG_USERAUTH_REQUEST
      string    user name
      string    service name
      string    "publickey"
      boolean   TRUE
      string    public key algorithm name
      string    public key to be used for authentication

   When the server receives this message, it MUST check whether the
   supplied key is acceptable for authentication, and if so, it MUST
   check whether the signature is correct.

   If both checks succeed, this method is successful.  Note that the
   server may require additional authentications.  The server MUST
   respond with SSH_MSG_USERAUTH_SUCCESS (if no more authentications are
   needed), or SSH_MSG_USERAUTH_FAILURE (if the request failed, or more
   authentications are needed).

   The following method-specific message numbers are used by the
   "publickey" authentication method.

      SSH_MSG_USERAUTH_PK_OK              60

/. 8.  Password Authentication Method: "password"
========================================================

   Password authentication uses the following packets.  Note that a
   server MAY request that a user change the password.  All
   implementations SHOULD support password authentication.

      byte      SSH_MSG_USERAUTH_REQUEST
      string    user name
      string    service name
      string    "password"
      boolean   FALSE
      string    plaintext password in ISO-10646 UTF-8 encoding [RFC3629]

   Note that the 'plaintext password' value is encoded in ISO-10646
   UTF-8.  It is up to the server how to interpret the password and
   validate it against the password database.  However, if the client
   reads the password in some other encoding (e.g., ISO 8859-1 - ISO
   Latin1), it MUST convert the password to ISO-10646 UTF-8 before
   transmitting, and the server MUST convert the password to the
   encoding used on that system for passwords.




Ylonen & Lonvick            Standards Track                    [Page 10](#t4252){id=p4252_10}

RFC 4252              SSH Authentication Protocol           January 2006


   From an internationalization standpoint, it is desired that if a user
   enters their password, the authentication process will work
   regardless of what OS and client software the user is using.  Doing
   so requires normalization.  Systems supporting non-ASCII passwords
   SHOULD always normalize passwords and user names whenever they are
   added to the database, or compared (with or without hashing) to
   existing entries in the database.  SSH implementations that both
   store the passwords and compare them SHOULD use [RFC4013] for
   normalization.

   Note that even though the cleartext password is transmitted in the
   packet, the entire packet is encrypted by the transport layer.  Both
   the server and the client should check whether the underlying
   transport layer provides confidentiality (i.e., if encryption is
   being used).  If no confidentiality is provided ("none" cipher),
   password authentication SHOULD be disabled.  If there is no
   confidentiality or no MAC, password change SHOULD be disabled.

   Normally, the server responds to this message with success or
   failure.  However, if the password has expired, the server SHOULD
   indicate this by responding with SSH_MSG_USERAUTH_PASSWD_CHANGEREQ.
   In any case, the server MUST NOT allow an expired password to be used
   for authentication.

      byte      SSH_MSG_USERAUTH_PASSWD_CHANGEREQ
      string    prompt in ISO-10646 UTF-8 encoding [RFC3629]
      string    language tag [RFC3066]

   In this case, the client MAY continue with a different authentication
   method, or request a new password from the user and retry password
   authentication using the following message.  The client MAY also send
   this message instead of the normal password authentication request
   without the server asking for it.

      byte      SSH_MSG_USERAUTH_REQUEST
      string    user name
      string    service name
      string    "password"
      boolean   TRUE
      string    plaintext old password in ISO-10646 UTF-8 encoding
                 [RFC3629]
      string    plaintext new password in ISO-10646 UTF-8 encoding
                 [RFC3629]








Ylonen & Lonvick            Standards Track                    [Page 11](#t4252){id=p4252_11}

RFC 4252              SSH Authentication Protocol           January 2006


   The server must reply to each request message with
   SSH_MSG_USERAUTH_SUCCESS, SSH_MSG_USERAUTH_FAILURE, or another
   SSH_MSG_USERAUTH_PASSWD_CHANGEREQ.  The meaning of these is as
   follows:

      SSH_MSG_USERAUTH_SUCCESS - The password has been changed, and
      authentication has been successfully completed.

      SSH_MSG_USERAUTH_FAILURE with partial success - The password has
      been changed, but more authentications are needed.

      SSH_MSG_USERAUTH_FAILURE without partial success - The password
      has not been changed.  Either password changing was not supported,
      or the old password was bad.  Note that if the server has already
      sent SSH_MSG_USERAUTH_PASSWD_CHANGEREQ, we know that it supports
      changing the password.

      SSH_MSG_USERAUTH_CHANGEREQ - The password was not changed because
      the new password was not acceptable (e.g., too easy to guess).

   The following method-specific message numbers are used by the
   password authentication method.

      SSH_MSG_USERAUTH_PASSWD_CHANGEREQ   60

/. 9.  Host-Based Authentication: "hostbased"
========================================================

   Some sites wish to allow authentication based on the host that the
   user is coming from and the user name on the remote host.  While this
   form of authentication is not suitable for high-security sites, it
   can be very convenient in many environments.  This form of
   authentication is OPTIONAL.  When used, special care SHOULD be taken
   to prevent a regular user from obtaining the private host key.

   The client requests this form of authentication by sending the
   following message.  It is similar to the UNIX "rhosts" and
   "hosts.equiv" styles of authentication, except that the identity of
   the client host is checked more rigorously.

   This method works by having the client send a signature created with
   the private key of the client host, which the server checks with that
   host's public key.  Once the client host's identity is established,
   authorization (but no further authentication) is performed based on
   the user names on the server and the client, and the client host
   name.






Ylonen & Lonvick            Standards Track                    [Page 12](#t4252){id=p4252_12}

RFC 4252              SSH Authentication Protocol           January 2006


      byte      SSH_MSG_USERAUTH_REQUEST
      string    user name
      string    service name
      string    "hostbased"
      string    public key algorithm for host key
      string    public host key and certificates for client host
      string    client host name expressed as the FQDN in US-ASCII
      string    user name on the client host in ISO-10646 UTF-8 encoding
                 [RFC3629]
      string    signature

   Public key algorithm names for use in 'public key algorithm for host
   key' are defined in the transport layer specification [SSH-TRANS].
   The 'public host key and certificates for client host' may include
   certificates.

   The value of 'signature' is a signature with the private host key of
   the following data, in this order:

      string    session identifier
      byte      SSH_MSG_USERAUTH_REQUEST
      string    user name
      string    service name
      string    "hostbased"
      string    public key algorithm for host key
      string    public host key and certificates for client host
      string    client host name expressed as the FQDN in US-ASCII
      string    user name on the client host in ISO-10646 UTF-8 encoding
                 [RFC3629]

   The server MUST verify that the host key actually belongs to the
   client host named in the message, that the given user on that host is
   allowed to log in, and that the 'signature' value is a valid
   signature on the appropriate value by the given host key.  The server
   MAY ignore the client 'user name', if it wants to authenticate only
   the client host.

   Whenever possible, it is RECOMMENDED that the server perform
   additional checks to verify that the network address obtained from
   the (untrusted) network matches the given client host name.  This
   makes exploiting compromised host keys more difficult.  Note that
   this may require special handling for connections coming through a
   firewall.








Ylonen & Lonvick            Standards Track                    [Page 13](#t4252){id=p4252_13}

RFC 4252              SSH Authentication Protocol           January 2006


/. 10.  IANA Considerations
========================================================

   This document is part of a set.  The IANA considerations for the SSH
   protocol, as defined in [SSH-ARCH], [SSH-TRANS], [SSH-CONNECT], and
   this document, are detailed in [SSH-NUMBERS].

/. 11.  Security Considerations
========================================================

   The purpose of this protocol is to perform client user
   authentication.  It assumed that this runs over a secure transport
   layer protocol, which has already authenticated the server machine,
   established an encrypted communications channel, and computed a
   unique session identifier for this session.  The transport layer
   provides forward secrecy for password authentication and other
   methods that rely on secret data.

   Full security considerations for this protocol are provided in
   [SSH-ARCH].

































Ylonen & Lonvick            Standards Track                    [Page 14](#t4252){id=p4252_14}

RFC 4252              SSH Authentication Protocol           January 2006


/. 12.  References
========================================================

/. 12.1.  Normative References
--------------------------------------------------------

   [SSH-ARCH]    Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
                 Protocol Architecture", RFC 4251, January 2006.

   [SSH-CONNECT] Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
                 Connection Protocol", RFC 4254, January 2006.

   [SSH-TRANS]   Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
                 Transport Layer Protocol", RFC 4253, January 2006.

   [SSH-NUMBERS] Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell
                 (SSH) Protocol Assigned Numbers", RFC 4250, January
                 2006.

   [RFC2119]     Bradner, S., "Key words for use in RFCs to Indicate
                 Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC2434]     Narten, T. and H. Alvestrand, "Guidelines for Writing
                 an IANA Considerations Section in RFCs", BCP 26, RFC
                 2434, October 1998.

   [RFC3066]     Alvestrand, H., "Tags for the Identification of
                 Languages", BCP 47, RFC 3066, January 2001.

   [RFC3629]     Yergeau, F., "UTF-8, a transformation format of ISO
                 10646", STD 63, RFC 3629, November 2003.

   [RFC4013]     Zeilenga, K., "SASLprep: Stringprep Profile for User
                 Names and Passwords", RFC 4013, February 2005.

/. 12.2.  Informative References
--------------------------------------------------------

   [ssh-1.2.30]  Ylonen, T., "ssh-1.2.30/RFC", File within compressed
                 tarball  ftp://ftp.funet.fi/pub/unix/security/login/
                 ssh/ssh-1.2.30.tar.gz, November 1995.













Ylonen & Lonvick            Standards Track                    [Page 15](#t4252){id=p4252_15}

RFC 4252              SSH Authentication Protocol           January 2006


Authors' Addresses

   Tatu Ylonen
   SSH Communications Security Corp
   Valimotie 17
   00380 Helsinki
   Finland

   EMail: ylo@ssh.com


   Chris Lonvick (editor)
   Cisco Systems, Inc.
   12515 Research Blvd.
   Austin  78759
   USA

   EMail: clonvick@cisco.com

Trademark Notice

   "ssh" is a registered trademark in the United States and/or other
   countries.




























Ylonen & Lonvick            Standards Track                    [Page 16](#t4252){id=p4252_16}

RFC 4252              SSH Authentication Protocol           January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Ylonen & Lonvick            Standards Track                    [Page 17](#t4252){id=p4252_17}



/CORE RFC4253  The Secure Shell (SSH) Transport Layer Protocol
========================================================
https://www.rfc-editor.org/rfc/rfc4253.txt







Network Working Group                                          T. Ylonen
Request for Comments: 4253              SSH Communications Security Corp
Category: Standards Track                                C. Lonvick, Ed.
                                                     Cisco Systems, Inc.
                                                            January 2006


            The Secure Shell (SSH) Transport Layer Protocol

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   The Secure Shell (SSH) is a protocol for secure remote login and
   other secure network services over an insecure network.

   This document describes the SSH transport layer protocol, which
   typically runs on top of TCP/IP.  The protocol can be used as a basis
   for a number of secure network services.  It provides strong
   encryption, server authentication, and integrity protection.  It may
   also provide compression.

   Key exchange method, public key algorithm, symmetric encryption
   algorithm, message authentication algorithm, and hash algorithm are
   all negotiated.

   This document also describes the Diffie-Hellman key exchange method
   and the minimal set of algorithms that are needed to implement the
   SSH transport layer protocol.












Ylonen &  Lonvick           Standards Track                     [Page 1](#t4253){id=p4253_01}

RFC 4253              SSH Transport Layer Protocol          January 2006


/. [Table of Contents](){id=t4253}
========================================================

- 1. Introduction .................................................... [3](#p4253_03)
- 2. Contributors .................................................... [3](#p4253_03)
- 3. Conventions Used in This Document ............................... [3](#p4253_03)
- 4. Connection Setup ................................................ [4](#p4253_04)
-    4.1. Use over TCP/IP ............................................ [4](#p4253_04)
-    4.2. Protocol Version Exchange .................................. [4](#p4253_04)
- 5. Compatibility With Old SSH Versions ............................. [5](#p4253_05)
-    5.1. Old Client, New Server ..................................... [6](#p4253_06)
-    5.2. New Client, Old Server ..................................... [6](#p4253_06)
-    5.3. Packet Size and Overhead ................................... [6](#p4253_06)
- 6. Binary Packet Protocol .......................................... [7](#p4253_07)
-    6.1. Maximum Packet Length ...................................... [8](#p4253_08)
-    6.2. Compression ................................................ [8](#p4253_08)
-    6.3. Encryption ................................................. [9](#p4253_09)
-    6.4. Data Integrity ............................................ [12](#p4253_12)
-    6.5. Key Exchange Methods ...................................... [13](#p4253_13)
-    6.6. Public Key Algorithms ..................................... [13](#p4253_13)
- 7. Key Exchange ................................................... [15](#p4253_15)
-    7.1. Algorithm Negotiation ..................................... [17](#p4253_17)
-    7.2. Output from Key Exchange .................................. [20](#p4253_20)
-    7.3. Taking Keys Into Use ...................................... [21](#p4253_21)
- 8. Diffie-Hellman Key Exchange .................................... [21](#p4253_21)
-    8.1. diffie-hellman-group1-sha1 ................................ [23](#p4253_23)
-    8.2. diffie-hellman-group14-sha1 ............................... [23](#p4253_23)
- 9. Key Re-Exchange ................................................ [23](#p4253_23)
- 10. Service Request ............................................... [24](#p4253_24)
- 11. Additional Messages ........................................... [25](#p4253_25)
-    11.1. Disconnection Message .................................... [25](#p4253_25)
-    11.2. Ignored Data Message ..................................... [26](#p4253_26)
-    11.3. Debug Message ............................................ [26](#p4253_26)
-    11.4. Reserved Messages ........................................ [27](#p4253_27)
- 12. Summary of Message Numbers .................................... [27](#p4253_27)
- 13. IANA Considerations ........................................... [27](#p4253_27)
- 14. Security Considerations ....................................... [28](#p4253_28)
- 15. References .................................................... [29](#p4253_29)
-    15.1. Normative References ..................................... [29](#p4253_29)
-    15.2. Informative References ................................... [30](#p4253_30)
- Authors' Addresses ................................................ [31](#p4253_31)
- Trademark Notice .................................................. [31](#p4253_31)










Ylonen &  Lonvick           Standards Track                     [Page 2](#t4253){id=p4253_02}

RFC 4253              SSH Transport Layer Protocol          January 2006


/. 1.  Introduction
========================================================

   The SSH transport layer is a secure, low level transport protocol.
   It provides strong encryption, cryptographic host authentication, and
   integrity protection.

   Authentication in this protocol level is host-based; this protocol
   does not perform user authentication.  A higher level protocol for
   user authentication can be designed on top of this protocol.

   The protocol has been designed to be simple and flexible to allow
   parameter negotiation, and to minimize the number of round-trips.
   The key exchange method, public key algorithm, symmetric encryption
   algorithm, message authentication algorithm, and hash algorithm are
   all negotiated.  It is expected that in most environments, only 2
   round-trips will be needed for full key exchange, server
   authentication, service request, and acceptance notification of
   service request.  The worst case is 3 round-trips.

/. 2.  Contributors
========================================================

   The major original contributors of this set of documents have been:
   Tatu Ylonen, Tero Kivinen, Timo J. Rinne, Sami Lehtinen (all of SSH
   Communications Security Corp), and Markku-Juhani O. Saarinen
   (University of Jyvaskyla).  Darren Moffat was the original editor of
   this set of documents and also made very substantial contributions.

   Many people contributed to the development of this document over the
   years.  People who should be acknowledged include Mats Andersson, Ben
   Harris, Bill Sommerfeld, Brent McClure, Niels Moller, Damien Miller,
   Derek Fawcus, Frank Cusack, Heikki Nousiainen, Jakob Schlyter, Jeff
   Van Dyke, Jeffrey Altman, Jeffrey Hutzelman, Jon Bright, Joseph
   Galbraith, Ken Hornstein, Markus Friedl, Martin Forssen, Nicolas
   Williams, Niels Provos, Perry Metzger, Peter Gutmann, Simon
   Josefsson, Simon Tatham, Wei Dai, Denis Bider, der Mouse, and
   Tadayoshi Kohno.  Listing their names here does not mean that they
   endorse this document, but that they have contributed to it.

/. 3.  Conventions Used in This Document
========================================================

   All documents related to the SSH protocols shall use the keywords
   "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
   "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" to describe
   requirements.  These keywords are to be interpreted as described in
   [RFC2119].






Ylonen &  Lonvick           Standards Track                     [Page 3](#t4253){id=p4253_03}

RFC 4253              SSH Transport Layer Protocol          January 2006


   The keywords "PRIVATE USE", "HIERARCHICAL ALLOCATION", "FIRST COME
   FIRST SERVED", "EXPERT REVIEW", "SPECIFICATION REQUIRED", "IESG
   APPROVAL", "IETF CONSENSUS", and "STANDARDS ACTION" that appear in
   this document when used to describe namespace allocation are to be
   interpreted as described in [RFC2434].

   Protocol fields and possible values to fill them are defined in this
   set of documents.  Protocol fields will be defined in the message
   definitions.  As an example, SSH_MSG_CHANNEL_DATA is defined as
   follows.

      byte      SSH_MSG_CHANNEL_DATA
      uint32    recipient channel
      string    data

   Throughout these documents, when the fields are referenced, they will
   appear within single quotes.  When values to fill those fields are
   referenced, they will appear within double quotes.  Using the above
   example, possible values for 'data' are "foo" and "bar".

/. 4.  Connection Setup
========================================================

   SSH works over any 8-bit clean, binary-transparent transport.  The
   underlying transport SHOULD protect against transmission errors, as
   such errors cause the SSH connection to terminate.

   The client initiates the connection.

/. 4.1.  Use over TCP/IP
--------------------------------------------------------

   When used over TCP/IP, the server normally listens for connections on
   port 22.  This port number has been registered with the IANA, and has
   been officially assigned for SSH.

/. 4.2.  Protocol Version Exchange
--------------------------------------------------------

   When the connection has been established, both sides MUST send an
   identification string.  This identification string MUST be

      SSH-protoversion-softwareversion SP comments CR LF

   Since the protocol being defined in this set of documents is version
   2.0, the 'protoversion' MUST be "2.0".  The 'comments' string is
   OPTIONAL.  If the 'comments' string is included, a 'space' character
   (denoted above as SP, ASCII 32) MUST separate the 'softwareversion'
   and 'comments' strings.  The identification MUST be terminated by a
   single Carriage Return (CR) and a single Line Feed (LF) character
   (ASCII 13 and 10, respectively).  Implementers who wish to maintain



Ylonen &  Lonvick           Standards Track                     [Page 4](#t4253){id=p4253_04}

RFC 4253              SSH Transport Layer Protocol          January 2006


   compatibility with older, undocumented versions of this protocol may
   want to process the identification string without expecting the
   presence of the carriage return character for reasons described in
   Section 5 of this document.  The null character MUST NOT be sent.
   The maximum length of the string is 255 characters, including the
   Carriage Return and Line Feed.

   The part of the identification string preceding the Carriage Return
   and Line Feed is used in the Diffie-Hellman key exchange (see Section
   8).

   The server MAY send other lines of data before sending the version
   string.  Each line SHOULD be terminated by a Carriage Return and Line
   Feed.  Such lines MUST NOT begin with "SSH-", and SHOULD be encoded
   in ISO-10646 UTF-8 [RFC3629] (language is not specified).  Clients
   MUST be able to process such lines.  Such lines MAY be silently
   ignored, or MAY be displayed to the client user.  If they are
   displayed, control character filtering, as discussed in [SSH-ARCH],
   SHOULD be used.  The primary use of this feature is to allow TCP-
   wrappers to display an error message before disconnecting.

   Both the 'protoversion' and 'softwareversion' strings MUST consist of
   printable US-ASCII characters, with the exception of whitespace
   characters and the minus sign (-).  The 'softwareversion' string is
   primarily used to trigger compatibility extensions and to indicate
   the capabilities of an implementation.  The 'comments' string SHOULD
   contain additional information that might be useful in solving user
   problems.  As such, an example of a valid identification string is

      SSH-2.0-billsSSH_3.6.3q3<CR><LF>

   This identification string does not contain the optional 'comments'
   string and is thus terminated by a CR and LF immediately after the
   'softwareversion' string.

   Key exchange will begin immediately after sending this identifier.
   All packets following the identification string SHALL use the binary
   packet protocol, which is described in Section 6.

/. 5.  Compatibility With Old SSH Versions
========================================================

   As stated earlier, the 'protoversion' specified for this protocol is
   "2.0".  Earlier versions of this protocol have not been formally
   documented, but it is widely known that they use 'protoversion' of
   "1.x" (e.g., "1.5" or "1.3").  At the time of this writing, many
   implementations of SSH are utilizing protocol version 2.0, but it is
   known that there are still devices using the previous versions.
   During the transition period, it is important to be able to work in a



Ylonen &  Lonvick           Standards Track                     [Page 5](#t4253){id=p4253_05}

RFC 4253              SSH Transport Layer Protocol          January 2006


   way that is compatible with the installed SSH clients and servers
   that use the older version of the protocol.  Information in this
   section is only relevant for implementations supporting compatibility
   with SSH versions 1.x.  For those interested, the only known
   documentation of the 1.x protocol is contained in README files that
   are shipped along with the source code [ssh-1.2.30].

/. 5.1.  Old Client, New Server
--------------------------------------------------------

   Server implementations MAY support a configurable compatibility flag
   that enables compatibility with old versions.  When this flag is on,
   the server SHOULD identify its 'protoversion' as "1.99".  Clients
   using protocol 2.0 MUST be able to identify this as identical to
   "2.0".  In this mode, the server SHOULD NOT send the Carriage Return
   character (ASCII 13) after the identification string.

   In the compatibility mode, the server SHOULD NOT send any further
   data after sending its identification string until it has received an
   identification string from the client.  The server can then determine
   whether the client is using an old protocol, and can revert to the
   old protocol if required.  In the compatibility mode, the server MUST
   NOT send additional data before the identification string.

   When compatibility with old clients is not needed, the server MAY
   send its initial key exchange data immediately after the
   identification string.

/. 5.2.  New Client, Old Server
--------------------------------------------------------

   Since the new client MAY immediately send additional data after its
   identification string (before receiving the server's identification
   string), the old protocol may already be corrupt when the client
   learns that the server is old.  When this happens, the client SHOULD
   close the connection to the server, and reconnect using the old
   protocol.

/. 5.3.  Packet Size and Overhead
--------------------------------------------------------

   Some readers will worry about the increase in packet size due to new
   headers, padding, and the Message Authentication Code (MAC).  The
   minimum packet size is in the order of 28 bytes (depending on
   negotiated algorithms).  The increase is negligible for large
   packets, but very significant for one-byte packets (telnet-type
   sessions).  There are, however, several factors that make this a
   non-issue in almost all cases:

   o  The minimum size of a TCP/IP header is 32 bytes.  Thus, the
      increase is actually from 33 to 51 bytes (roughly).



Ylonen &  Lonvick           Standards Track                     [Page 6](#t4253){id=p4253_06}

RFC 4253              SSH Transport Layer Protocol          January 2006


   o  The minimum size of the data field of an Ethernet packet is 46
      bytes [RFC0894].  Thus, the increase is no more than 5 bytes.
      When Ethernet headers are considered, the increase is less than 10
      percent.

   o  The total fraction of telnet-type data in the Internet is
      negligible, even with increased packet sizes.

   The only environment where the packet size increase is likely to have
   a significant effect is PPP [RFC1661] over slow modem lines (PPP
   compresses the TCP/IP headers, emphasizing the increase in packet
   size).  However, with modern modems, the time needed to transfer is
   in the order of 2 milliseconds, which is a lot faster than people can
   type.

   There are also issues related to the maximum packet size.  To
   minimize delays in screen updates, one does not want excessively
   large packets for interactive sessions.  The maximum packet size is
   negotiated separately for each channel.

/. 6.  Binary Packet Protocol
========================================================

   Each packet is in the following format:

      uint32    packet_length
      byte      padding_length
      byte[n1]  payload; n1 = packet_length - padding_length - 1
      byte[n2]  random padding; n2 = padding_length
      byte[m]   mac (Message Authentication Code - MAC); m = mac_length

      packet_length
         The length of the packet in bytes, not including 'mac' or the
         'packet_length' field itself.

      padding_length
         Length of 'random padding' (bytes).

      payload
         The useful contents of the packet.  If compression has been
         negotiated, this field is compressed.  Initially, compression
         MUST be "none".

      random padding
         Arbitrary-length padding, such that the total length of
         (packet_length || padding_length || payload || random padding)
         is a multiple of the cipher block size or 8, whichever is





Ylonen &  Lonvick           Standards Track                     [Page 7](#t4253){id=p4253_07}

RFC 4253              SSH Transport Layer Protocol          January 2006


         larger.  There MUST be at least four bytes of padding.  The
         padding SHOULD consist of random bytes.  The maximum amount of
         padding is 255 bytes.

      mac
         Message Authentication Code.  If message authentication has
         been negotiated, this field contains the MAC bytes.  Initially,
         the MAC algorithm MUST be "none".

   Note that the length of the concatenation of 'packet_length',
   'padding_length', 'payload', and 'random padding' MUST be a multiple
   of the cipher block size or 8, whichever is larger.  This constraint
   MUST be enforced, even when using stream ciphers.  Note that the
   'packet_length' field is also encrypted, and processing it requires
   special care when sending or receiving packets.  Also note that the
   insertion of variable amounts of 'random padding' may help thwart
   traffic analysis.

   The minimum size of a packet is 16 (or the cipher block size,
   whichever is larger) bytes (plus 'mac').  Implementations SHOULD
   decrypt the length after receiving the first 8 (or cipher block size,
   whichever is larger) bytes of a packet.

/. 6.1.  Maximum Packet Length
--------------------------------------------------------

   All implementations MUST be able to process packets with an
   uncompressed payload length of 32768 bytes or less and a total packet
   size of 35000 bytes or less (including 'packet_length',
   'padding_length', 'payload', 'random padding', and 'mac').  The
   maximum of 35000 bytes is an arbitrarily chosen value that is larger
   than the uncompressed length noted above.  Implementations SHOULD
   support longer packets, where they might be needed.  For example, if
   an implementation wants to send a very large number of certificates,
   the larger packets MAY be sent if the identification string indicates
   that the other party is able to process them.  However,
   implementations SHOULD check that the packet length is reasonable in
   order for the implementation to avoid denial of service and/or buffer
   overflow attacks.

/. 6.2.  Compression
--------------------------------------------------------

   If compression has been negotiated, the 'payload' field (and only it)
   will be compressed using the negotiated algorithm.  The
   'packet_length' field and 'mac' will be computed from the compressed
   payload.  Encryption will be done after compression.






Ylonen &  Lonvick           Standards Track                     [Page 8](#t4253){id=p4253_08}

RFC 4253              SSH Transport Layer Protocol          January 2006


   Compression MAY be stateful, depending on the method.  Compression
   MUST be independent for each direction, and implementations MUST
   allow independent choosing of the algorithm for each direction.  In
   practice however, it is RECOMMENDED that the compression method be
   the same in both directions.

   The following compression methods are currently defined:

      none     REQUIRED        no compression
      zlib     OPTIONAL        ZLIB (LZ77) compression

   The "zlib" compression is described in [RFC1950] and in [RFC1951].
   The compression context is initialized after each key exchange, and
   is passed from one packet to the next, with only a partial flush
   being performed at the end of each packet.  A partial flush means
   that the current compressed block is ended and all data will be
   output.  If the current block is not a stored block, one or more
   empty blocks are added after the current block to ensure that there
   are at least 8 bits, counting from the start of the end-of-block code
   of the current block to the end of the packet payload.

   Additional methods may be defined as specified in [SSH-ARCH] and
   [SSH-NUMBERS].

/. 6.3.  Encryption
--------------------------------------------------------

   An encryption algorithm and a key will be negotiated during the key
   exchange.  When encryption is in effect, the packet length, padding
   length, payload, and padding fields of each packet MUST be encrypted
   with the given algorithm.

   The encrypted data in all packets sent in one direction SHOULD be
   considered a single data stream.  For example, initialization vectors
   SHOULD be passed from the end of one packet to the beginning of the
   next packet.  All ciphers SHOULD use keys with an effective key
   length of 128 bits or more.

   The ciphers in each direction MUST run independently of each other.
   Implementations MUST allow the algorithm for each direction to be
   independently selected, if multiple algorithms are allowed by local
   policy.  In practice however, it is RECOMMENDED that the same
   algorithm be used in both directions.









Ylonen &  Lonvick           Standards Track                     [Page 9](#t4253){id=p4253_09}

RFC 4253              SSH Transport Layer Protocol          January 2006


   The following ciphers are currently defined:

      3des-cbc         REQUIRED          three-key 3DES in CBC mode
      blowfish-cbc     OPTIONAL          Blowfish in CBC mode
      twofish256-cbc   OPTIONAL          Twofish in CBC mode,
                                         with a 256-bit key
      twofish-cbc      OPTIONAL          alias for "twofish256-cbc"
                                         (this is being retained
                                         for historical reasons)
      twofish192-cbc   OPTIONAL          Twofish with a 192-bit key
      twofish128-cbc   OPTIONAL          Twofish with a 128-bit key
      aes256-cbc       OPTIONAL          AES in CBC mode,
                                         with a 256-bit key
      aes192-cbc       OPTIONAL          AES with a 192-bit key
      aes128-cbc       RECOMMENDED       AES with a 128-bit key
      serpent256-cbc   OPTIONAL          Serpent in CBC mode, with
                                         a 256-bit key
      serpent192-cbc   OPTIONAL          Serpent with a 192-bit key
      serpent128-cbc   OPTIONAL          Serpent with a 128-bit key
      arcfour          OPTIONAL          the ARCFOUR stream cipher
                                         with a 128-bit key
      idea-cbc         OPTIONAL          IDEA in CBC mode
      cast128-cbc      OPTIONAL          CAST-128 in CBC mode
      none             OPTIONAL          no encryption; NOT RECOMMENDED

   The "3des-cbc" cipher is three-key triple-DES (encrypt-decrypt-
   encrypt), where the first 8 bytes of the key are used for the first
   encryption, the next 8 bytes for the decryption, and the following 8
   bytes for the final encryption.  This requires 24 bytes of key data
   (of which 168 bits are actually used).  To implement CBC mode, outer
   chaining MUST be used (i.e., there is only one initialization
   vector).  This is a block cipher with 8-byte blocks.  This algorithm
   is defined in [FIPS-46-3].  Note that since this algorithm only has
   an effective key length of 112 bits ([SCHNEIER]), it does not meet
   the specifications that SSH encryption algorithms should use keys of
   128 bits or more.  However, this algorithm is still REQUIRED for
   historical reasons; essentially, all known implementations at the
   time of this writing support this algorithm, and it is commonly used
   because it is the fundamental interoperable algorithm.  At some
   future time, it is expected that another algorithm, one with better
   strength, will become so prevalent and ubiquitous that the use of
   "3des-cbc" will be deprecated by another STANDARDS ACTION.

   The "blowfish-cbc" cipher is Blowfish in CBC mode, with 128-bit keys
   [SCHNEIER].  This is a block cipher with 8-byte blocks.






Ylonen &  Lonvick           Standards Track                    [Page 10](#t4253){id=p4253_10}

RFC 4253              SSH Transport Layer Protocol          January 2006


   The "twofish-cbc" or "twofish256-cbc" cipher is Twofish in CBC mode,
   with 256-bit keys as described [TWOFISH].  This is a block cipher
   with 16-byte blocks.

   The "twofish192-cbc" cipher is the same as above, but with a 192-bit
   key.

   The "twofish128-cbc" cipher is the same as above, but with a 128-bit
   key.

   The "aes256-cbc" cipher is AES (Advanced Encryption Standard)
   [FIPS-197], in CBC mode.  This version uses a 256-bit key.

   The "aes192-cbc" cipher is the same as above, but with a 192-bit key.

   The "aes128-cbc" cipher is the same as above, but with a 128-bit key.

   The "serpent256-cbc" cipher in CBC mode, with a 256-bit key as
   described in the Serpent AES submission.

   The "serpent192-cbc" cipher is the same as above, but with a 192-bit
   key.

   The "serpent128-cbc" cipher is the same as above, but with a 128-bit
   key.

   The "arcfour" cipher is the Arcfour stream cipher with 128-bit keys.
   The Arcfour cipher is believed to be compatible with the RC4 cipher
   [SCHNEIER].  Arcfour (and RC4) has problems with weak keys, and
   should be used with caution.

   The "idea-cbc" cipher is the IDEA cipher in CBC mode [SCHNEIER].

   The "cast128-cbc" cipher is the CAST-128 cipher in CBC mode with a
   128-bit key [RFC2144].

   The "none" algorithm specifies that no encryption is to be done.
   Note that this method provides no confidentiality protection, and it
   is NOT RECOMMENDED.  Some functionality (e.g., password
   authentication) may be disabled for security reasons if this cipher
   is chosen.

   Additional methods may be defined as specified in [SSH-ARCH] and in
   [SSH-NUMBERS].







Ylonen &  Lonvick           Standards Track                    [Page 11](#t4253){id=p4253_11}

RFC 4253              SSH Transport Layer Protocol          January 2006


/. 6.4.  Data Integrity
--------------------------------------------------------

   Data integrity is protected by including with each packet a MAC that
   is computed from a shared secret, packet sequence number, and the
   contents of the packet.

   The message authentication algorithm and key are negotiated during
   key exchange.  Initially, no MAC will be in effect, and its length
   MUST be zero.  After key exchange, the 'mac' for the selected MAC
   algorithm will be computed before encryption from the concatenation
   of packet data:

      mac = MAC(key, sequence_number || unencrypted_packet)

   where unencrypted_packet is the entire packet without 'mac' (the
   length fields, 'payload' and 'random padding'), and sequence_number
   is an implicit packet sequence number represented as uint32.  The
   sequence_number is initialized to zero for the first packet, and is
   incremented after every packet (regardless of whether encryption or
   MAC is in use).  It is never reset, even if keys/algorithms are
   renegotiated later.  It wraps around to zero after every 2^32
   packets.  The packet sequence_number itself is not included in the
   packet sent over the wire.

   The MAC algorithms for each direction MUST run independently, and
   implementations MUST allow choosing the algorithm independently for
   both directions.  In practice however, it is RECOMMENDED that the
   same algorithm be used in both directions.

   The value of 'mac' resulting from the MAC algorithm MUST be
   transmitted without encryption as the last part of the packet.  The
   number of 'mac' bytes depends on the algorithm chosen.

   The following MAC algorithms are currently defined:

      hmac-sha1    REQUIRED        HMAC-SHA1 (digest length = key
                                   length = 20)
      hmac-sha1-96 RECOMMENDED     first 96 bits of HMAC-SHA1 (digest
                                   length = 12, key length = 20)
      hmac-md5     OPTIONAL        HMAC-MD5 (digest length = key
                                   length = 16)
      hmac-md5-96  OPTIONAL        first 96 bits of HMAC-MD5 (digest
                                   length = 12, key length = 16)
      none         OPTIONAL        no MAC; NOT RECOMMENDED

   The "hmac-*" algorithms are described in [RFC2104].  The "*-n" MACs
   use only the first n bits of the resulting value.




Ylonen &  Lonvick           Standards Track                    [Page 12](#t4253){id=p4253_12}

RFC 4253              SSH Transport Layer Protocol          January 2006


   SHA-1 is described in [FIPS-180-2] and MD5 is described in [RFC1321].

   Additional methods may be defined, as specified in [SSH-ARCH] and in
   [SSH-NUMBERS].

/. 6.5.  Key Exchange Methods
--------------------------------------------------------

   The key exchange method specifies how one-time session keys are
   generated for encryption and for authentication, and how the server
   authentication is done.

   Two REQUIRED key exchange methods have been defined:

      diffie-hellman-group1-sha1 REQUIRED
      diffie-hellman-group14-sha1 REQUIRED

   These methods are described in Section 8.

   Additional methods may be defined as specified in [SSH-NUMBERS].  The
   name "diffie-hellman-group1-sha1" is used for a key exchange method
   using an Oakley group, as defined in [RFC2409].  SSH maintains its
   own group identifier space that is logically distinct from Oakley
   [RFC2412] and IKE; however, for one additional group, the Working
   Group adopted the number assigned by [RFC3526], using diffie-
   hellman-group14-sha1 for the name of the second defined group.
   Implementations should treat these names as opaque identifiers and
   should not assume any relationship between the groups used by SSH and
   the groups defined for IKE.

/. 6.6.  Public Key Algorithms
--------------------------------------------------------

   This protocol has been designed to operate with almost any public key
   format, encoding, and algorithm (signature and/or encryption).

   There are several aspects that define a public key type:

   o  Key format: how is the key encoded and how are certificates
      represented.  The key blobs in this protocol MAY contain
      certificates in addition to keys.

   o  Signature and/or encryption algorithms.  Some key types may not
      support both signing and encryption.  Key usage may also be
      restricted by policy statements (e.g., in certificates).  In this
      case, different key types SHOULD be defined for the different
      policy alternatives.

   o  Encoding of signatures and/or encrypted data.  This includes but
      is not limited to padding, byte order, and data formats.



Ylonen &  Lonvick           Standards Track                    [Page 13](#t4253){id=p4253_13}

RFC 4253              SSH Transport Layer Protocol          January 2006


   The following public key and/or certificate formats are currently
   defined:

   ssh-dss           REQUIRED     sign   Raw DSS Key
   ssh-rsa           RECOMMENDED  sign   Raw RSA Key
   pgp-sign-rsa      OPTIONAL     sign   OpenPGP certificates (RSA key)
   pgp-sign-dss      OPTIONAL     sign   OpenPGP certificates (DSS key)

   Additional key types may be defined, as specified in [SSH-ARCH] and
   in [SSH-NUMBERS].

   The key type MUST always be explicitly known (from algorithm
   negotiation or some other source).  It is not normally included in
   the key blob.

   Certificates and public keys are encoded as follows:

      string    certificate or public key format identifier
      byte[n]   key/certificate data

   The certificate part may be a zero length string, but a public key is
   required.  This is the public key that will be used for
   authentication.  The certificate sequence contained in the
   certificate blob can be used to provide authorization.

   Public key/certificate formats that do not explicitly specify a
   signature format identifier MUST use the public key/certificate
   format identifier as the signature identifier.

   Signatures are encoded as follows:

      string    signature format identifier (as specified by the
                public key/certificate format)
      byte[n]   signature blob in format specific encoding.

   The "ssh-dss" key format has the following specific encoding:

      string    "ssh-dss"
      mpint     p
      mpint     q
      mpint     g
      mpint     y

   Here, the 'p', 'q', 'g', and 'y' parameters form the signature key
   blob.






Ylonen &  Lonvick           Standards Track                    [Page 14](#t4253){id=p4253_14}

RFC 4253              SSH Transport Layer Protocol          January 2006


   Signing and verifying using this key format is done according to the
   Digital Signature Standard [FIPS-186-2] using the SHA-1 hash
   [FIPS-180-2].

   The resulting signature is encoded as follows:

      string    "ssh-dss"
      string    dss_signature_blob

   The value for 'dss_signature_blob' is encoded as a string containing
   r, followed by s (which are 160-bit integers, without lengths or
   padding, unsigned, and in network byte order).

   The "ssh-rsa" key format has the following specific encoding:

      string    "ssh-rsa"
      mpint     e
      mpint     n

   Here the 'e' and 'n' parameters form the signature key blob.

   Signing and verifying using this key format is performed according to
   the RSASSA-PKCS1-v1_5 scheme in [RFC3447] using the SHA-1 hash.

   The resulting signature is encoded as follows:

      string    "ssh-rsa"
      string    rsa_signature_blob

   The value for 'rsa_signature_blob' is encoded as a string containing
   s (which is an integer, without lengths or padding, unsigned, and in
   network byte order).

   The "pgp-sign-rsa" method indicates the certificates, the public key,
   and the signature are in OpenPGP compatible binary format
   ([RFC2440]).  This method indicates that the key is an RSA-key.

   The "pgp-sign-dss" is as above, but indicates that the key is a
   DSS-key.

/. 7.  Key Exchange
========================================================

   Key exchange (kex) begins by each side sending name-lists of
   supported algorithms.  Each side has a preferred algorithm in each
   category, and it is assumed that most implementations, at any given
   time, will use the same preferred algorithm.  Each side MAY guess





Ylonen &  Lonvick           Standards Track                    [Page 15](#t4253){id=p4253_15}

RFC 4253              SSH Transport Layer Protocol          January 2006


   which algorithm the other side is using, and MAY send an initial key
   exchange packet according to the algorithm, if appropriate for the
   preferred method.

   The guess is considered wrong if:

   o  the kex algorithm and/or the host key algorithm is guessed wrong
      (server and client have different preferred algorithm), or

   o  if any of the other algorithms cannot be agreed upon (the
      procedure is defined below in Section 7.1).

   Otherwise, the guess is considered to be right, and the
   optimistically sent packet MUST be handled as the first key exchange
   packet.

   However, if the guess was wrong, and a packet was optimistically sent
   by one or both parties, such packets MUST be ignored (even if the
   error in the guess would not affect the contents of the initial
   packet(s)), and the appropriate side MUST send the correct initial
   packet.

   A key exchange method uses explicit server authentication if the key
   exchange messages include a signature or other proof of the server's
   authenticity.  A key exchange method uses implicit server
   authentication if, in order to prove its authenticity, the server
   also has to prove that it knows the shared secret, K, by sending a
   message and a corresponding MAC that the client can verify.

   The key exchange method defined by this document uses explicit server
   authentication.  However, key exchange methods with implicit server
   authentication MAY be used with this protocol.  After a key exchange
   with implicit server authentication, the client MUST wait for a
   response to its service request message before sending any further
   data.
















Ylonen &  Lonvick           Standards Track                    [Page 16](#t4253){id=p4253_16}

RFC 4253              SSH Transport Layer Protocol          January 2006


/. 7.1.  Algorithm Negotiation
--------------------------------------------------------

   Key exchange begins by each side sending the following packet:

      byte         SSH_MSG_KEXINIT
      byte[16]     cookie (random bytes)
      name-list    kex_algorithms
      name-list    server_host_key_algorithms
      name-list    encryption_algorithms_client_to_server
      name-list    encryption_algorithms_server_to_client
      name-list    mac_algorithms_client_to_server
      name-list    mac_algorithms_server_to_client
      name-list    compression_algorithms_client_to_server
      name-list    compression_algorithms_server_to_client
      name-list    languages_client_to_server
      name-list    languages_server_to_client
      boolean      first_kex_packet_follows
      uint32       0 (reserved for future extension)

   Each of the algorithm name-lists MUST be a comma-separated list of
   algorithm names (see Algorithm Naming in [SSH-ARCH] and additional
   information in [SSH-NUMBERS]).  Each supported (allowed) algorithm
   MUST be listed in order of preference, from most to least.

   The first algorithm in each name-list MUST be the preferred (guessed)
   algorithm.  Each name-list MUST contain at least one algorithm name.

      cookie
         The 'cookie' MUST be a random value generated by the sender.
         Its purpose is to make it impossible for either side to fully
         determine the keys and the session identifier.

      kex_algorithms
         Key exchange algorithms were defined above.  The first
         algorithm MUST be the preferred (and guessed) algorithm.  If
         both sides make the same guess, that algorithm MUST be used.
         Otherwise, the following algorithm MUST be used to choose a key
         exchange method: Iterate over client's kex algorithms, one at a
         time.  Choose the first algorithm that satisfies the following
         conditions:

         +  the server also supports the algorithm,

         +  if the algorithm requires an encryption-capable host key,
            there is an encryption-capable algorithm on the server's
            server_host_key_algorithms that is also supported by the
            client, and




Ylonen &  Lonvick           Standards Track                    [Page 17](#t4253){id=p4253_17}

RFC 4253              SSH Transport Layer Protocol          January 2006


         +  if the algorithm requires a signature-capable host key,
            there is a signature-capable algorithm on the server's
            server_host_key_algorithms that is also supported by the
            client.

      If no algorithm satisfying all these conditions can be found, the
      connection fails, and both sides MUST disconnect.

      server_host_key_algorithms
         A name-list of the algorithms supported for the server host
         key.  The server lists the algorithms for which it has host
         keys; the client lists the algorithms that it is willing to
         accept.  There MAY be multiple host keys for a host, possibly
         with different algorithms.

         Some host keys may not support both signatures and encryption
         (this can be determined from the algorithm), and thus not all
         host keys are valid for all key exchange methods.

         Algorithm selection depends on whether the chosen key exchange
         algorithm requires a signature or an encryption-capable host
         key.  It MUST be possible to determine this from the public key
         algorithm name.  The first algorithm on the client's name-list
         that satisfies the requirements and is also supported by the
         server MUST be chosen.  If there is no such algorithm, both
         sides MUST disconnect.

      encryption_algorithms
         A name-list of acceptable symmetric encryption algorithms (also
         known as ciphers) in order of preference.  The chosen
         encryption algorithm to each direction MUST be the first
         algorithm on the client's name-list that is also on the
         server's name-list.  If there is no such algorithm, both sides
         MUST disconnect.

         Note that "none" must be explicitly listed if it is to be
         acceptable.  The defined algorithm names are listed in Section
         6.3.

      mac_algorithms
         A name-list of acceptable MAC algorithms in order of
         preference.  The chosen MAC algorithm MUST be the first
         algorithm on the client's name-list that is also on the
         server's name-list.  If there is no such algorithm, both sides
         MUST disconnect.

         Note that "none" must be explicitly listed if it is to be
         acceptable.  The MAC algorithm names are listed in Section 6.4.



Ylonen &  Lonvick           Standards Track                    [Page 18](#t4253){id=p4253_18}

RFC 4253              SSH Transport Layer Protocol          January 2006


      compression_algorithms
         A name-list of acceptable compression algorithms in order of
         preference.  The chosen compression algorithm MUST be the first
         algorithm on the client's name-list that is also on the
         server's name-list.  If there is no such algorithm, both sides
         MUST disconnect.

         Note that "none" must be explicitly listed if it is to be
         acceptable.  The compression algorithm names are listed in
         Section 6.2.

      languages
         This is a name-list of language tags in order of preference
         [RFC3066].  Both parties MAY ignore this name-list.  If there
         are no language preferences, this name-list SHOULD be empty as
         defined in Section 5 of [SSH-ARCH].  Language tags SHOULD NOT
         be present unless they are known to be needed by the sending
         party.

      first_kex_packet_follows
         Indicates whether a guessed key exchange packet follows.  If a
         guessed packet will be sent, this MUST be TRUE.  If no guessed
         packet will be sent, this MUST be FALSE.

         After receiving the SSH_MSG_KEXINIT packet from the other side,
         each party will know whether their guess was right.  If the
         other party's guess was wrong, and this field was TRUE, the
         next packet MUST be silently ignored, and both sides MUST then
         act as determined by the negotiated key exchange method.  If
         the guess was right, key exchange MUST continue using the
         guessed packet.

   After the SSH_MSG_KEXINIT message exchange, the key exchange
   algorithm is run.  It may involve several packet exchanges, as
   specified by the key exchange method.

   Once a party has sent a SSH_MSG_KEXINIT message for key exchange or
   re-exchange, until it has sent a SSH_MSG_NEWKEYS message (Section
   7.3), it MUST NOT send any messages other than:

   o  Transport layer generic messages (1 to 19) (but
      SSH_MSG_SERVICE_REQUEST and SSH_MSG_SERVICE_ACCEPT MUST NOT be
      sent);

   o  Algorithm negotiation messages (20 to 29) (but further
      SSH_MSG_KEXINIT messages MUST NOT be sent);

   o  Specific key exchange method messages (30 to 49).



Ylonen &  Lonvick           Standards Track                    [Page 19](#t4253){id=p4253_19}

RFC 4253              SSH Transport Layer Protocol          January 2006


   The provisions of Section 11 apply to unrecognized messages.

   Note, however, that during a key re-exchange, after sending a
   SSH_MSG_KEXINIT message, each party MUST be prepared to process an
   arbitrary number of messages that may be in-flight before receiving a
   SSH_MSG_KEXINIT message from the other party.

/. 7.2.  Output from Key Exchange
--------------------------------------------------------

   The key exchange produces two values: a shared secret K, and an
   exchange hash H.  Encryption and authentication keys are derived from
   these.  The exchange hash H from the first key exchange is
   additionally used as the session identifier, which is a unique
   identifier for this connection.  It is used by authentication methods
   as a part of the data that is signed as a proof of possession of a
   private key.  Once computed, the session identifier is not changed,
   even if keys are later re-exchanged.

   Each key exchange method specifies a hash function that is used in
   the key exchange.  The same hash algorithm MUST be used in key
   derivation.  Here, we'll call it HASH.

   Encryption keys MUST be computed as HASH, of a known value and K, as
   follows:

   o  Initial IV client to server: HASH(K || H || "A" || session_id)
      (Here K is encoded as mpint and "A" as byte and session_id as raw
      data.  "A" means the single character A, ASCII 65).

   o  Initial IV server to client: HASH(K || H || "B" || session_id)

   o  Encryption key client to server: HASH(K || H || "C" || session_id)

   o  Encryption key server to client: HASH(K || H || "D" || session_id)

   o  Integrity key client to server: HASH(K || H || "E" || session_id)

   o  Integrity key server to client: HASH(K || H || "F" || session_id)

   Key data MUST be taken from the beginning of the hash output.  As
   many bytes as needed are taken from the beginning of the hash value.
   If the key length needed is longer than the output of the HASH, the
   key is extended by computing HASH of the concatenation of K and H and
   the entire key so far, and appending the resulting bytes (as many as
   HASH generates) to the key.  This process is repeated until enough
   key material is available; the key is taken from the beginning of
   this value.  In other words:




Ylonen &  Lonvick           Standards Track                    [Page 20](#t4253){id=p4253_20}

RFC 4253              SSH Transport Layer Protocol          January 2006


      K1 = HASH(K || H || X || session_id)   (X is e.g., "A")
      K2 = HASH(K || H || K1)
      K3 = HASH(K || H || K1 || K2)
      ...
      key = K1 || K2 || K3 || ...

   This process will lose entropy if the amount of entropy in K is
   larger than the internal state size of HASH.

/. 7.3.  Taking Keys Into Use
--------------------------------------------------------

   Key exchange ends by each side sending an SSH_MSG_NEWKEYS message.
   This message is sent with the old keys and algorithms.  All messages
   sent after this message MUST use the new keys and algorithms.

   When this message is received, the new keys and algorithms MUST be
   used for receiving.

   The purpose of this message is to ensure that a party is able to
   respond with an SSH_MSG_DISCONNECT message that the other party can
   understand if something goes wrong with the key exchange.

      byte      SSH_MSG_NEWKEYS

/. 8.  Diffie-Hellman Key Exchange
========================================================

   The Diffie-Hellman (DH) key exchange provides a shared secret that
   cannot be determined by either party alone.  The key exchange is
   combined with a signature with the host key to provide host
   authentication.  This key exchange method provides explicit server
   authentication as defined in Section 7.

   The following steps are used to exchange a key.  In this, C is the
   client; S is the server; p is a large safe prime; g is a generator
   for a subgroup of GF(p); q is the order of the subgroup; V_S is S's
   identification string; V_C is C's identification string; K_S is S's
   public host key; I_C is C's SSH_MSG_KEXINIT message and I_S is S's
   SSH_MSG_KEXINIT message that have been exchanged before this part
   begins.

   1. C generates a random number x (1 < x < q) and computes
      e = g^x mod p.  C sends e to S.









Ylonen &  Lonvick           Standards Track                    [Page 21](#t4253){id=p4253_21}

RFC 4253              SSH Transport Layer Protocol          January 2006


   2. S generates a random number y (0 < y < q) and computes
      f = g^y mod p.  S receives e.  It computes K = e^y mod p,
      H = hash(V_C || V_S || I_C || I_S || K_S || e || f || K)
      (these elements are encoded according to their types; see below),
      and signature s on H with its private host key.  S sends
      (K_S || f || s) to C.  The signing operation may involve a
      second hashing operation.

   3. C verifies that K_S really is the host key for S (e.g., using
      certificates or a local database).  C is also allowed to accept
      the key without verification; however, doing so will render the
      protocol insecure against active attacks (but may be desirable for
      practical reasons in the short term in many environments).  C then
      computes K = f^x mod p, H = hash(V_C || V_S || I_C || I_S || K_S
      || e || f || K), and verifies the signature s on H.

   Values of 'e' or 'f' that are not in the range [1, p-1] MUST NOT be
   sent or accepted by either side.  If this condition is violated, the
   key exchange fails.

   This is implemented with the following messages.  The hash algorithm
   for computing the exchange hash is defined by the method name, and is
   called HASH.  The public key algorithm for signing is negotiated with
   the SSH_MSG_KEXINIT messages.

   First, the client sends the following:

      byte      SSH_MSG_KEXDH_INIT
      mpint     e

   The server then responds with the following:

      byte      SSH_MSG_KEXDH_REPLY
      string    server public host key and certificates (K_S)
      mpint     f
      string    signature of H















Ylonen &  Lonvick           Standards Track                    [Page 22](#t4253){id=p4253_22}

RFC 4253              SSH Transport Layer Protocol          January 2006


   The hash H is computed as the HASH hash of the concatenation of the
   following:

      string    V_C, the client's identification string (CR and LF
                excluded)
      string    V_S, the server's identification string (CR and LF
                excluded)
      string    I_C, the payload of the client's SSH_MSG_KEXINIT
      string    I_S, the payload of the server's SSH_MSG_KEXINIT
      string    K_S, the host key
      mpint     e, exchange value sent by the client
      mpint     f, exchange value sent by the server
      mpint     K, the shared secret

   This value is called the exchange hash, and it is used to
   authenticate the key exchange.  The exchange hash SHOULD be kept
   secret.

   The signature algorithm MUST be applied over H, not the original
   data.  Most signature algorithms include hashing and additional
   padding (e.g., "ssh-dss" specifies SHA-1 hashing).  In that case, the
   data is first hashed with HASH to compute H, and H is then hashed
   with SHA-1 as part of the signing operation.

/. 8.1.  diffie-hellman-group1-sha1
--------------------------------------------------------

   The "diffie-hellman-group1-sha1" method specifies the Diffie-Hellman
   key exchange with SHA-1 as HASH, and Oakley Group 2 [RFC2409] (1024-
   bit MODP Group).  This method MUST be supported for interoperability
   as all of the known implementations currently support it.  Note that
   this method is named using the phrase "group1", even though it
   specifies the use of Oakley Group 2.

/. 8.2.  diffie-hellman-group14-sha1
--------------------------------------------------------

   The "diffie-hellman-group14-sha1" method specifies a Diffie-Hellman
   key exchange with SHA-1 as HASH and Oakley Group 14 [RFC3526] (2048-
   bit MODP Group), and it MUST also be supported.

/. 9.  Key Re-Exchange
========================================================

   Key re-exchange is started by sending an SSH_MSG_KEXINIT packet when
   not already doing a key exchange (as described in Section 7.1).  When
   this message is received, a party MUST respond with its own
   SSH_MSG_KEXINIT message, except when the received SSH_MSG_KEXINIT
   already was a reply.  Either party MAY initiate the re-exchange, but
   roles MUST NOT be changed (i.e., the server remains the server, and
   the client remains the client).



Ylonen &  Lonvick           Standards Track                    [Page 23](#t4253){id=p4253_23}

RFC 4253              SSH Transport Layer Protocol          January 2006


   Key re-exchange is performed using whatever encryption was in effect
   when the exchange was started.  Encryption, compression, and MAC
   methods are not changed before a new SSH_MSG_NEWKEYS is sent after
   the key exchange (as in the initial key exchange).  Re-exchange is
   processed identically to the initial key exchange, except for the
   session identifier that will remain unchanged.  It is permissible to
   change some or all of the algorithms during the re-exchange.  Host
   keys can also change.  All keys and initialization vectors are
   recomputed after the exchange.  Compression and encryption contexts
   are reset.

   It is RECOMMENDED that the keys be changed after each gigabyte of
   transmitted data or after each hour of connection time, whichever
   comes sooner.  However, since the re-exchange is a public key
   operation, it requires a fair amount of processing power and should
   not be performed too often.

   More application data may be sent after the SSH_MSG_NEWKEYS packet
   has been sent; key exchange does not affect the protocols that lie
   above the SSH transport layer.

/. 10.  Service Request
========================================================

   After the key exchange, the client requests a service.  The service
   is identified by a name.  The format of names and procedures for
   defining new names are defined in [SSH-ARCH] and [SSH-NUMBERS].

   Currently, the following names have been reserved:

      ssh-userauth
      ssh-connection

   Similar local naming policy is applied to the service names, as is
   applied to the algorithm names.  A local service should use the
   PRIVATE USE syntax of "servicename@domain".

      byte      SSH_MSG_SERVICE_REQUEST
      string    service name

   If the server rejects the service request, it SHOULD send an
   appropriate SSH_MSG_DISCONNECT message and MUST disconnect.

   When the service starts, it may have access to the session identifier
   generated during the key exchange.







Ylonen &  Lonvick           Standards Track                    [Page 24](#t4253){id=p4253_24}

RFC 4253              SSH Transport Layer Protocol          January 2006


   If the server supports the service (and permits the client to use
   it), it MUST respond with the following:

      byte      SSH_MSG_SERVICE_ACCEPT
      string    service name

   Message numbers used by services should be in the area reserved for
   them (see [SSH-ARCH] and [SSH-NUMBERS]).  The transport level will
   continue to process its own messages.

   Note that after a key exchange with implicit server authentication,
   the client MUST wait for a response to its service request message
   before sending any further data.

/. 11.  Additional Messages
========================================================

   Either party may send any of the following messages at any time.

/. 11.1.  Disconnection Message
--------------------------------------------------------

      byte      SSH_MSG_DISCONNECT
      uint32    reason code
      string    description in ISO-10646 UTF-8 encoding [RFC3629]
      string    language tag [RFC3066]

   This message causes immediate termination of the connection.  All
   implementations MUST be able to process this message; they SHOULD be
   able to send this message.

   The sender MUST NOT send or receive any data after this message, and
   the recipient MUST NOT accept any data after receiving this message.
   The Disconnection Message 'description' string gives a more specific
   explanation in a human-readable form.  The Disconnection Message
   'reason code' gives the reason in a more machine-readable format
   (suitable for localization), and can have the values as displayed in
   the table below.  Note that the decimal representation is displayed
   in this table for readability, but the values are actually uint32
   values.













Ylonen &  Lonvick           Standards Track                    [Page 25](#t4253){id=p4253_25}

RFC 4253              SSH Transport Layer Protocol          January 2006


           Symbolic name                                reason code
           -------------                                -----------
      SSH_DISCONNECT_HOST_NOT_ALLOWED_TO_CONNECT             1
      SSH_DISCONNECT_PROTOCOL_ERROR                          2
      SSH_DISCONNECT_KEY_EXCHANGE_FAILED                     3
      SSH_DISCONNECT_RESERVED                                4
      SSH_DISCONNECT_MAC_ERROR                               5
      SSH_DISCONNECT_COMPRESSION_ERROR                       6
      SSH_DISCONNECT_SERVICE_NOT_AVAILABLE                   7
      SSH_DISCONNECT_PROTOCOL_VERSION_NOT_SUPPORTED          8
      SSH_DISCONNECT_HOST_KEY_NOT_VERIFIABLE                 9
      SSH_DISCONNECT_CONNECTION_LOST                        10
      SSH_DISCONNECT_BY_APPLICATION                         11
      SSH_DISCONNECT_TOO_MANY_CONNECTIONS                   12
      SSH_DISCONNECT_AUTH_CANCELLED_BY_USER                 13
      SSH_DISCONNECT_NO_MORE_AUTH_METHODS_AVAILABLE         14
      SSH_DISCONNECT_ILLEGAL_USER_NAME                      15

   If the 'description' string is displayed, the control character
   filtering discussed in [SSH-ARCH] should be used to avoid attacks by
   sending terminal control characters.

   Requests for assignments of new Disconnection Message 'reason code'
   values (and associated 'description' text) in the range of 0x00000010
   to 0xFDFFFFFF MUST be done through the IETF CONSENSUS method, as
   described in [RFC2434].  The Disconnection Message 'reason code'
   values in the range of 0xFE000000 through 0xFFFFFFFF are reserved for
   PRIVATE USE.  As noted, the actual instructions to the IANA are in
   [SSH-NUMBERS].

/. 11.2.  Ignored Data Message
--------------------------------------------------------

      byte      SSH_MSG_IGNORE
      string    data

   All implementations MUST understand (and ignore) this message at any
   time (after receiving the identification string).  No implementation
   is required to send them.  This message can be used as an additional
   protection measure against advanced traffic analysis techniques.

/. 11.3.  Debug Message
--------------------------------------------------------

      byte      SSH_MSG_DEBUG
      boolean   always_display
      string    message in ISO-10646 UTF-8 encoding [RFC3629]
      string    language tag [RFC3066]





Ylonen &  Lonvick           Standards Track                    [Page 26](#t4253){id=p4253_26}

RFC 4253              SSH Transport Layer Protocol          January 2006


   All implementations MUST understand this message, but they are
   allowed to ignore it.  This message is used to transmit information
   that may help debugging.  If 'always_display' is TRUE, the message
   SHOULD be displayed.  Otherwise, it SHOULD NOT be displayed unless
   debugging information has been explicitly requested by the user.

   The 'message' doesn't need to contain a newline.  It is, however,
   allowed to consist of multiple lines separated by CRLF (Carriage
   Return - Line Feed) pairs.

   If the 'message' string is displayed, the terminal control character
   filtering discussed in [SSH-ARCH] should be used to avoid attacks by
   sending terminal control characters.

/. 11.4.  Reserved Messages
--------------------------------------------------------

   An implementation MUST respond to all unrecognized messages with an
   SSH_MSG_UNIMPLEMENTED message in the order in which the messages were
   received.  Such messages MUST be otherwise ignored.  Later protocol
   versions may define other meanings for these message types.

      byte      SSH_MSG_UNIMPLEMENTED
      uint32    packet sequence number of rejected message

/. 12.  Summary of Message Numbers
========================================================

   The following is a summary of messages and their associated message
   number.

         SSH_MSG_DISCONNECT             1
         SSH_MSG_IGNORE                 2
         SSH_MSG_UNIMPLEMENTED          3
         SSH_MSG_DEBUG                  4
         SSH_MSG_SERVICE_REQUEST        5
         SSH_MSG_SERVICE_ACCEPT         6
         SSH_MSG_KEXINIT                20
         SSH_MSG_NEWKEYS                21

   Note that numbers 30-49 are used for kex packets.  Different kex
   methods may reuse message numbers in this range.

/. 13.  IANA Considerations
========================================================

   This document is part of a set.  The IANA considerations for the SSH
   protocol as defined in [SSH-ARCH], [SSH-USERAUTH], [SSH-CONNECT], and
   this document, are detailed in [SSH-NUMBERS].





Ylonen &  Lonvick           Standards Track                    [Page 27](#t4253){id=p4253_27}

RFC 4253              SSH Transport Layer Protocol          January 2006


/. 14.  Security Considerations
========================================================

   This protocol provides a secure encrypted channel over an insecure
   network.  It performs server host authentication, key exchange,
   encryption, and integrity protection.  It also derives a unique
   session ID that may be used by higher-level protocols.

   Full security considerations for this protocol are provided in
   [SSH-ARCH].










































Ylonen &  Lonvick           Standards Track                    [Page 28](#t4253){id=p4253_28}

RFC 4253              SSH Transport Layer Protocol          January 2006


/. 15.  References
========================================================

/. 15.1.  Normative References
--------------------------------------------------------

   [SSH-ARCH]     Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Protocol Architecture", RFC 4251, January 2006.

   [SSH-USERAUTH] Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Authentication Protocol", RFC 4252, January
                  2006.

   [SSH-CONNECT]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Connection Protocol", RFC 4254, January 2006.

   [SSH-NUMBERS]  Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Protocol Assigned Numbers", RFC 4250, January
                  2006.

   [RFC1321]      Rivest, R., "The MD5 Message-Digest Algorithm ", RFC
                  1321, April 1992.

   [RFC1950]      Deutsch, P. and J-L. Gailly, "ZLIB Compressed Data
                  Format Specification version 3.3", RFC 1950, May 1996.

   [RFC1951]      Deutsch, P., "DEFLATE Compressed Data Format
                  Specification version 1.3", RFC 1951, May 1996.

   [RFC2104]      Krawczyk, H., Bellare, M., and R. Canetti, "HMAC:
                  Keyed-Hashing for Message Authentication", RFC 2104,
                  February 1997.

   [RFC2119]      Bradner, S., "Key words for use in RFCs to Indicate
                  Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC2144]      Adams, C., "The CAST-128 Encryption Algorithm", RFC
                  2144, May 1997.

   [RFC2409]      Harkins, D. and D. Carrel, "The Internet Key Exchange
                  (IKE)", RFC 2409, November 1998.

   [RFC2434]      Narten, T. and H. Alvestrand, "Guidelines for Writing
                  an IANA Considerations Section in RFCs", BCP 26, RFC
                  2434, October 1998.

   [RFC2440]      Callas, J., Donnerhacke, L., Finney, H., and R.
                  Thayer, "OpenPGP Message Format", RFC 2440, November
                  1998.




Ylonen &  Lonvick           Standards Track                    [Page 29](#t4253){id=p4253_29}

RFC 4253              SSH Transport Layer Protocol          January 2006


   [RFC3066]      Alvestrand, H., "Tags for the Identification of
                  Languages", BCP 47, RFC 3066, January 2001.

   [RFC3447]      Jonsson, J. and B. Kaliski, "Public-Key Cryptography
                  Standards (PKCS) #1: RSA Cryptography Specifications
                  Version 2.1", RFC 3447, February 2003.

   [RFC3526]      Kivinen, T. and M. Kojo, "More Modular Exponential
                  (MODP) Diffie-Hellman groups for Internet Key Exchange
                  (IKE)", RFC 3526, May 2003.

   [RFC3629]      Yergeau, F., "UTF-8, a transformation format of ISO
                  10646", STD 63, RFC 3629, November 2003.

   [FIPS-180-2]   US National Institute of Standards and Technology,
                  "Secure Hash Standard (SHS)", Federal Information
                  Processing Standards Publication 180-2, August 2002.

   [FIPS-186-2]   US National Institute of Standards and Technology,
                  "Digital Signature Standard (DSS)", Federal
                  Information Processing Standards Publication 186-2,
                  January 2000.

   [FIPS-197]     US National Institute of Standards and Technology,
                  "Advanced Encryption Standard (AES)", Federal
                  Information Processing Standards Publication 197,
                  November 2001.

   [FIPS-46-3]    US National Institute of Standards and Technology,
                  "Data Encryption Standard (DES)", Federal Information
                  Processing Standards Publication 46-3, October 1999.

   [SCHNEIER]     Schneier, B., "Applied Cryptography Second Edition:
                  protocols algorithms and source in code in C", John
                  Wiley and Sons, New York, NY, 1996.

   [TWOFISH]      Schneier, B., "The Twofish Encryptions Algorithm: A
                  128-Bit Block Cipher, 1st Edition", March 1999.

/. 15.2.  Informative References
--------------------------------------------------------

   [RFC0894]      Hornig, C., "Standard for the transmission of IP
                  datagrams over Ethernet networks", STD 41, RFC 894,
                  April 1984.

   [RFC1661]      Simpson, W., "The Point-to-Point Protocol (PPP)", STD
                  51, RFC 1661, July 1994.




Ylonen &  Lonvick           Standards Track                    [Page 30](#t4253){id=p4253_30}

RFC 4253              SSH Transport Layer Protocol          January 2006


   [RFC2412]      Orman, H., "The OAKLEY Key Determination Protocol",
                  RFC 2412, November 1998.

   [ssh-1.2.30]   Ylonen, T., "ssh-1.2.30/RFC", File within compressed
                  tarball ftp://ftp.funet.fi/pub/unix/security/
                  login/ssh/ssh-1.2.30.tar.gz, November 1995.

Authors' Addresses

   Tatu Ylonen
   SSH Communications Security Corp
   Valimotie 17
   00380 Helsinki
   Finland

   EMail: ylo@ssh.com


   Chris Lonvick (editor)
   Cisco Systems, Inc.
   12515 Research Blvd.
   Austin  78759
   USA

   EMail: clonvick@cisco.com

Trademark Notice

   "ssh" is a registered trademark in the United States and/or other
   countries.





















Ylonen &  Lonvick           Standards Track                    [Page 31](#t4253){id=p4253_31}

RFC 4253              SSH Transport Layer Protocol          January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Ylonen &  Lonvick           Standards Track                    [Page 32](#t4253){id=p4253_32}



/CORE RFC4254  The Secure Shell (SSH) Connection Protocol
========================================================
https://www.rfc-editor.org/rfc/rfc4254.txt







Network Working Group                                          T. Ylonen
Request for Comments: 4254              SSH Communications Security Corp
Category: Standards Track                                C. Lonvick, Ed.
                                                     Cisco Systems, Inc.
                                                            January 2006


               The Secure Shell (SSH) Connection Protocol

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   Secure Shell (SSH) is a protocol for secure remote login and other
   secure network services over an insecure network.

   This document describes the SSH Connection Protocol.  It provides
   interactive login sessions, remote execution of commands, forwarded
   TCP/IP connections, and forwarded X11 connections.  All of these
   channels are multiplexed into a single encrypted tunnel.

   The SSH Connection Protocol has been designed to run on top of the
   SSH transport layer and user authentication protocols.


















Ylonen & Lonvick            Standards Track                     [Page 1](#t4254){id=p4254_01}

RFC 4254                SSH Connection Protocol             January 2006


/. [Table of Contents](){id=t4254}
========================================================

- 1. Introduction .................................................... [2](#p4254_02)
- 2. Contributors .................................................... [3](#p4254_03)
- 3. Conventions Used in This Document ............................... [3](#p4254_03)
- 4. Global Requests ................................................. [4](#p4254_04)
- 5. Channel Mechanism ............................................... [5](#p4254_05)
-    5.1. Opening a Channel .......................................... [5](#p4254_05)
-    5.2. Data Transfer .............................................. [7](#p4254_07)
-    5.3. Closing a Channel .......................................... [9](#p4254_09)
-    5.4. Channel-Specific Requests .................................. [9](#p4254_09)
- 6. Interactive Sessions ........................................... [10](#p4254_10)
-    6.1. Opening a Session ......................................... [10](#p4254_10)
-    6.2. Requesting a Pseudo-Terminal .............................. [11](#p4254_11)
-    6.3. X11 Forwarding ............................................ [11](#p4254_11)
-         6.3.1. Requesting X11 Forwarding .......................... [11](#p4254_11)
-         6.3.2. X11 Channels ....................................... [12](#p4254_12)
-    6.4. Environment Variable Passing .............................. [12](#p4254_12)
-    6.5. Starting a Shell or a Command ............................. [13](#p4254_13)
-    6.6. Session Data Transfer ..................................... [14](#p4254_14)
-    6.7. Window Dimension Change Message ........................... [14](#p4254_14)
-    6.8. Local Flow Control ........................................ [14](#p4254_14)
-    6.9. Signals ................................................... [15](#p4254_15)
-    6.10. Returning Exit Status .................................... [15](#p4254_15)
- 7. TCP/IP Port Forwarding ......................................... [16](#p4254_16)
-    7.1. Requesting Port Forwarding ................................ [16](#p4254_16)
-    7.2. TCP/IP Forwarding Channels ................................ [18](#p4254_18)
- 8. Encoding of Terminal Modes ..................................... [19](#p4254_19)
- 9. Summary of Message Numbers ..................................... [21](#p4254_21)
- 10. IANA Considerations ........................................... [21](#p4254_21)
- 11. Security Considerations ....................................... [21](#p4254_21)
- 12. References .................................................... [22](#p4254_22)
-    12.1. Normative References ..................................... [22](#p4254_22)
-    12.2. Informative References ................................... [22](#p4254_22)
- Authors' Addresses ................................................ [23](#p4254_23)
- Trademark Notice .................................................. [23](#p4254_23)

/. 1.  Introduction
========================================================

   The SSH Connection Protocol has been designed to run on top of the
   SSH transport layer and user authentication protocols ([SSH-TRANS]
   and [SSH-USERAUTH]).  It provides interactive login sessions, remote
   execution of commands, forwarded TCP/IP connections, and forwarded
   X11 connections.

   The 'service name' for this protocol is "ssh-connection".





Ylonen & Lonvick            Standards Track                     [Page 2](#t4254){id=p4254_02}

RFC 4254                SSH Connection Protocol             January 2006


   This document should be read only after reading the SSH architecture
   document [SSH-ARCH].  This document freely uses terminology and
   notation from the architecture document without reference or further
   explanation.

/. 2.  Contributors
========================================================

   The major original contributors of this set of documents have been:
   Tatu Ylonen, Tero Kivinen, Timo J. Rinne, Sami Lehtinen (all of SSH
   Communications Security Corp), and Markku-Juhani O. Saarinen
   (University of Jyvaskyla).  Darren Moffat was the original editor of
   this set of documents and also made very substantial contributions.

   Many people contributed to the development of this document over the
   years.  People who should be acknowledged include Mats Andersson, Ben
   Harris, Bill Sommerfeld, Brent McClure, Niels Moller, Damien Miller,
   Derek Fawcus, Frank Cusack, Heikki Nousiainen, Jakob Schlyter, Jeff
   Van Dyke, Jeffrey Altman, Jeffrey Hutzelman, Jon Bright, Joseph
   Galbraith, Ken Hornstein, Markus Friedl, Martin Forssen, Nicolas
   Williams, Niels Provos, Perry Metzger, Peter Gutmann, Simon
   Josefsson, Simon Tatham, Wei Dai, Denis Bider, der Mouse, and
   Tadayoshi Kohno.  Listing their names here does not mean that they
   endorse this document, but that they have contributed to it.

/. 3.  Conventions Used in This Document
========================================================

   All documents related to the SSH protocols shall use the keywords
   "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
   "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" to describe
   requirements.  These keywords are to be interpreted as described in
   [RFC2119].

   The keywords "PRIVATE USE", "HIERARCHICAL ALLOCATION", "FIRST COME
   FIRST SERVED", "EXPERT REVIEW", "SPECIFICATION REQUIRED", "IESG
   APPROVAL", "IETF CONSENSUS", and "STANDARDS ACTION" that appear in
   this document when used to describe namespace allocation are to be
   interpreted as described in [RFC2434].

   Protocol fields and possible values to fill them are defined in this
   set of documents.  Protocol fields will be defined in the message
   definitions.  As an example, SSH_MSG_CHANNEL_DATA is defined as
   follows.

      byte      SSH_MSG_CHANNEL_DATA
      uint32    recipient channel
      string    data





Ylonen & Lonvick            Standards Track                     [Page 3](#t4254){id=p4254_03}

RFC 4254                SSH Connection Protocol             January 2006


   Throughout these documents, when the fields are referenced, they will
   appear within single quotes.  When values to fill those fields are
   referenced, they will appear within double quotes.  Using the above
   example, possible values for 'data' are "foo" and "bar".

/. 4.  Global Requests
========================================================

   There are several kinds of requests that affect the state of the
   remote end globally, independent of any channels.  An example is a
   request to start TCP/IP forwarding for a specific port.  Note that
   both the client and server MAY send global requests at any time, and
   the receiver MUST respond appropriately.  All such requests use the
   following format.

      byte      SSH_MSG_GLOBAL_REQUEST
      string    request name in US-ASCII only
      boolean   want reply
      ....      request-specific data follows

   The value of 'request name' follows the DNS extensibility naming
   convention outlined in [SSH-ARCH].

   The recipient will respond to this message with
   SSH_MSG_REQUEST_SUCCESS or SSH_MSG_REQUEST_FAILURE if 'want reply' is
   TRUE.

      byte      SSH_MSG_REQUEST_SUCCESS
      ....     response specific data

   Usually, the 'response specific data' is non-existent.

   If the recipient does not recognize or support the request, it simply
   responds with SSH_MSG_REQUEST_FAILURE.

      byte      SSH_MSG_REQUEST_FAILURE

   In general, the reply messages do not include request type
   identifiers.  To make it possible for the originator of a request to
   identify to which request each reply refers, it is REQUIRED that
   replies to SSH_MSG_GLOBAL_REQUESTS MUST be sent in the same order as
   the corresponding request messages.  For channel requests, replies
   that relate to the same channel MUST also be replied to in the right
   order.  However, channel requests for distinct channels MAY be
   replied to out-of-order.







Ylonen & Lonvick            Standards Track                     [Page 4](#t4254){id=p4254_04}

RFC 4254                SSH Connection Protocol             January 2006


/. 5.  Channel Mechanism
========================================================

   All terminal sessions, forwarded connections, etc., are channels.
   Either side may open a channel.  Multiple channels are multiplexed
   into a single connection.

   Channels are identified by numbers at each end.  The number referring
   to a channel may be different on each side.  Requests to open a
   channel contain the sender's channel number.  Any other channel-
   related messages contain the recipient's channel number for the
   channel.

   Channels are flow-controlled.  No data may be sent to a channel until
   a message is received to indicate that window space is available.

/. 5.1.  Opening a Channel
--------------------------------------------------------

   When either side wishes to open a new channel, it allocates a local
   number for the channel.  It then sends the following message to the
   other side, and includes the local channel number and initial window
   size in the message.

      byte      SSH_MSG_CHANNEL_OPEN
      string    channel type in US-ASCII only
      uint32    sender channel
      uint32    initial window size
      uint32    maximum packet size
      ....      channel type specific data follows

   The 'channel type' is a name, as described in [SSH-ARCH] and
   [SSH-NUMBERS], with similar extension mechanisms.  The 'sender
   channel' is a local identifier for the channel used by the sender of
   this message.  The 'initial window size' specifies how many bytes of
   channel data can be sent to the sender of this message without
   adjusting the window.  The 'maximum packet size' specifies the
   maximum size of an individual data packet that can be sent to the
   sender.  For example, one might want to use smaller packets for
   interactive connections to get better interactive response on slow
   links.

   The remote side then decides whether it can open the channel, and
   responds with either SSH_MSG_CHANNEL_OPEN_CONFIRMATION or
   SSH_MSG_CHANNEL_OPEN_FAILURE.








Ylonen & Lonvick            Standards Track                     [Page 5](#t4254){id=p4254_05}

RFC 4254                SSH Connection Protocol             January 2006


      byte      SSH_MSG_CHANNEL_OPEN_CONFIRMATION
      uint32    recipient channel
      uint32    sender channel
      uint32    initial window size
      uint32    maximum packet size
      ....      channel type specific data follows

   The 'recipient channel' is the channel number given in the original
   open request, and 'sender channel' is the channel number allocated by
   the other side.

      byte      SSH_MSG_CHANNEL_OPEN_FAILURE
      uint32    recipient channel
      uint32    reason code
      string    description in ISO-10646 UTF-8 encoding [RFC3629]
      string    language tag [RFC3066]

   If the recipient of the SSH_MSG_CHANNEL_OPEN message does not support
   the specified 'channel type', it simply responds with
   SSH_MSG_CHANNEL_OPEN_FAILURE.  The client MAY show the 'description'
   string to the user.  If this is done, the client software should take
   the precautions discussed in [SSH-ARCH].

   The SSH_MSG_CHANNEL_OPEN_FAILURE 'reason code' values are defined in
   the following table.  Note that the values for the 'reason code' are
   given in decimal format for readability, but they are actually uint32
   values.

             Symbolic name                           reason code
             -------------                           -----------
            SSH_OPEN_ADMINISTRATIVELY_PROHIBITED          1
            SSH_OPEN_CONNECT_FAILED                       2
            SSH_OPEN_UNKNOWN_CHANNEL_TYPE                 3
            SSH_OPEN_RESOURCE_SHORTAGE                    4

   Requests for assignments of new SSH_MSG_CHANNEL_OPEN 'reason code'
   values (and associated 'description' text) in the range of 0x00000005
   to 0xFDFFFFFF MUST be done through the IETF CONSENSUS method, as
   described in [RFC2434].  The IANA will not assign Channel Connection
   Failure 'reason code' values in the range of 0xFE000000 to
   0xFFFFFFFF.  Channel Connection Failure 'reason code' values in that
   range are left for PRIVATE USE, as described in [RFC2434].

   While it is understood that the IANA will have no control over the
   range of 0xFE000000 to 0xFFFFFFFF, this range will be split in two
   parts and administered by the following conventions.





Ylonen & Lonvick            Standards Track                     [Page 6](#t4254){id=p4254_06}

RFC 4254                SSH Connection Protocol             January 2006


   o  The range of 0xFE000000 to 0xFEFFFFFF is to be used in conjunction
      with locally assigned channels.  For example, if a channel is
      proposed with a 'channel type' of "example_session@example.com",
      but fails, then the response will contain either a 'reason code'
      assigned by the IANA (as listed above and in the range of
      0x00000001 to 0xFDFFFFFF) or a locally assigned value in the range
      of 0xFE000000 to 0xFEFFFFFF.  Naturally, if the server does not
      understand the proposed 'channel type', even if it is a locally
      defined 'channel type', then the 'reason code' MUST be 0x00000003,
      as described above, if the 'reason code' is sent.  If the server
      does understand the 'channel type', but the channel still fails to
      open, then the server SHOULD respond with a locally assigned
      'reason code' value consistent with the proposed, local 'channel
      type'.  It is assumed that practitioners will first attempt to use
      the IANA assigned 'reason code' values and then document their
      locally assigned 'reason code' values.

   o  There are no restrictions or suggestions for the range starting
      with 0xFF.  No interoperability is expected for anything used in
      this range.  Essentially, it is for experimentation.

/. 5.2.  Data Transfer
--------------------------------------------------------

   The window size specifies how many bytes the other party can send
   before it must wait for the window to be adjusted.  Both parties use
   the following message to adjust the window.

      byte      SSH_MSG_CHANNEL_WINDOW_ADJUST
      uint32    recipient channel
      uint32    bytes to add

   After receiving this message, the recipient MAY send the given number
   of bytes more than it was previously allowed to send; the window size
   is incremented.  Implementations MUST correctly handle window sizes
   of up to 2^32 - 1 bytes.  The window MUST NOT be increased above
   2^32 - 1 bytes.

   Data transfer is done with messages of the following type.

      byte      SSH_MSG_CHANNEL_DATA
      uint32    recipient channel
      string    data

   The maximum amount of data allowed is determined by the maximum
   packet size for the channel, and the current window size, whichever
   is smaller.  The window size is decremented by the amount of data
   sent.  Both parties MAY ignore all extra data sent after the allowed
   window is empty.



Ylonen & Lonvick            Standards Track                     [Page 7](#t4254){id=p4254_07}

RFC 4254                SSH Connection Protocol             January 2006


   Implementations are expected to have some limit on the SSH transport
   layer packet size (any limit for received packets MUST be 32768 bytes
   or larger, as described in [SSH-TRANS]).  The implementation of the
   SSH connection layer

   o  MUST NOT advertise a maximum packet size that would result in
      transport packets larger than its transport layer is willing to
      receive.

   o  MUST NOT generate data packets larger than its transport layer is
      willing to send, even if the remote end would be willing to accept
      very large packets.

   Additionally, some channels can transfer several types of data.  An
   example of this is stderr data from interactive sessions.  Such data
   can be passed with SSH_MSG_CHANNEL_EXTENDED_DATA messages, where a
   separate integer specifies the type of data.  The available types and
   their interpretation depend on the type of channel.

      byte      SSH_MSG_CHANNEL_EXTENDED_DATA
      uint32    recipient channel
      uint32    data_type_code
      string    data

   Data sent with these messages consumes the same window as ordinary
   data.

   Currently, only the following type is defined.  Note that the value
   for the 'data_type_code' is given in decimal format for readability,
   but the values are actually uint32 values.

               Symbolic name                  data_type_code
               -------------                  --------------
             SSH_EXTENDED_DATA_STDERR               1

   Extended Channel Data Transfer 'data_type_code' values MUST be
   assigned sequentially.  Requests for assignments of new Extended
   Channel Data Transfer 'data_type_code' values and their associated
   Extended Channel Data Transfer 'data' strings, in the range of
   0x00000002 to 0xFDFFFFFF, MUST be done through the IETF CONSENSUS
   method as described in [RFC2434].  The IANA will not assign Extended
   Channel Data Transfer 'data_type_code' values in the range of
   0xFE000000 to 0xFFFFFFFF.  Extended Channel Data Transfer
   'data_type_code' values in that range are left for PRIVATE USE, as
   described in [RFC2434].  As is noted, the actual instructions to the
   IANA are in [SSH-NUMBERS].





Ylonen & Lonvick            Standards Track                     [Page 8](#t4254){id=p4254_08}

RFC 4254                SSH Connection Protocol             January 2006


/. 5.3.  Closing a Channel
--------------------------------------------------------

   When a party will no longer send more data to a channel, it SHOULD
   send SSH_MSG_CHANNEL_EOF.

      byte      SSH_MSG_CHANNEL_EOF
      uint32    recipient channel

   No explicit response is sent to this message.  However, the
   application may send EOF to whatever is at the other end of the
   channel.  Note that the channel remains open after this message, and
   more data may still be sent in the other direction.  This message
   does not consume window space and can be sent even if no window space
   is available.

   When either party wishes to terminate the channel, it sends
   SSH_MSG_CHANNEL_CLOSE.  Upon receiving this message, a party MUST
   send back an SSH_MSG_CHANNEL_CLOSE unless it has already sent this
   message for the channel.  The channel is considered closed for a
   party when it has both sent and received SSH_MSG_CHANNEL_CLOSE, and
   the party may then reuse the channel number.  A party MAY send
   SSH_MSG_CHANNEL_CLOSE without having sent or received
   SSH_MSG_CHANNEL_EOF.

      byte      SSH_MSG_CHANNEL_CLOSE
      uint32    recipient channel

   This message does not consume window space and can be sent even if no
   window space is available.

   It is RECOMMENDED that all data sent before this message be delivered
   to the actual destination, if possible.

/. 5.4.  Channel-Specific Requests
--------------------------------------------------------

   Many 'channel type' values have extensions that are specific to that
   particular 'channel type'.  An example is requesting a pty (pseudo
   terminal) for an interactive session.

   All channel-specific requests use the following format.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    request type in US-ASCII characters only
      boolean   want reply
      ....      type-specific data follows





Ylonen & Lonvick            Standards Track                     [Page 9](#t4254){id=p4254_09}

RFC 4254                SSH Connection Protocol             January 2006


   If 'want reply' is FALSE, no response will be sent to the request.
   Otherwise, the recipient responds with either
   SSH_MSG_CHANNEL_SUCCESS, SSH_MSG_CHANNEL_FAILURE, or request-specific
   continuation messages.  If the request is not recognized or is not
   supported for the channel, SSH_MSG_CHANNEL_FAILURE is returned.

   This message does not consume window space and can be sent even if no
   window space is available.  The values of 'request type' are local to
   each channel type.

   The client is allowed to send further messages without waiting for
   the response to the request.

   'request type' names follow the DNS extensibility naming convention
   outlined in [SSH-ARCH] and [SSH-NUMBERS].

      byte      SSH_MSG_CHANNEL_SUCCESS
      uint32    recipient channel


      byte      SSH_MSG_CHANNEL_FAILURE
      uint32    recipient channel

   These messages do not consume window space and can be sent even if no
   window space is available.

/. 6.  Interactive Sessions
========================================================

   A session is a remote execution of a program.  The program may be a
   shell, an application, a system command, or some built-in subsystem.
   It may or may not have a tty, and may or may not involve X11
   forwarding.  Multiple sessions can be active simultaneously.

/. 6.1.  Opening a Session
--------------------------------------------------------

   A session is started by sending the following message.

      byte      SSH_MSG_CHANNEL_OPEN
      string    "session"
      uint32    sender channel
      uint32    initial window size
      uint32    maximum packet size

   Client implementations SHOULD reject any session channel open
   requests to make it more difficult for a corrupt server to attack the
   client.





Ylonen & Lonvick            Standards Track                    [Page 10](#t4254){id=p4254_10}

RFC 4254                SSH Connection Protocol             January 2006


/. 6.2.  Requesting a Pseudo-Terminal
--------------------------------------------------------

   A pseudo-terminal can be allocated for the session by sending the
   following message.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "pty-req"
      boolean   want_reply
      string    TERM environment variable value (e.g., vt100)
      uint32    terminal width, characters (e.g., 80)
      uint32    terminal height, rows (e.g., 24)
      uint32    terminal width, pixels (e.g., 640)
      uint32    terminal height, pixels (e.g., 480)
      string    encoded terminal modes

   The 'encoded terminal modes' are described in Section 8.  Zero
   dimension parameters MUST be ignored.  The character/row dimensions
   override the pixel dimensions (when nonzero).  Pixel dimensions refer
   to the drawable area of the window.

   The dimension parameters are only informational.

   The client SHOULD ignore pty requests.

/. 6.3.  X11 Forwarding
--------------------------------------------------------

6.3.1.  Requesting X11 Forwarding
--------------------------------------------------------

   X11 forwarding may be requested for a session by sending a
   SSH_MSG_CHANNEL_REQUEST message.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "x11-req"
      boolean   want reply
      boolean   single connection
      string    x11 authentication protocol
      string    x11 authentication cookie
      uint32    x11 screen number

   It is RECOMMENDED that the 'x11 authentication cookie' that is sent
   be a fake, random cookie, and that the cookie be checked and replaced
   by the real cookie when a connection request is received.

   X11 connection forwarding should stop when the session channel is
   closed.  However, already opened forwardings should not be
   automatically closed when the session channel is closed.



Ylonen & Lonvick            Standards Track                    [Page 11](#t4254){id=p4254_11}

RFC 4254                SSH Connection Protocol             January 2006


   If 'single connection' is TRUE, only a single connection should be
   forwarded.  No more connections will be forwarded after the first, or
   after the session channel has been closed.

   The 'x11 authentication protocol' is the name of the X11
   authentication method used, e.g., "MIT-MAGIC-COOKIE-1".

   The 'x11 authentication cookie' MUST be hexadecimal encoded.

   The X Protocol is documented in [SCHEIFLER].

6.3.2.  X11 Channels
--------------------------------------------------------

   X11 channels are opened with a channel open request.  The resulting
   channels are independent of the session, and closing the session
   channel does not close the forwarded X11 channels.

      byte      SSH_MSG_CHANNEL_OPEN
      string    "x11"
      uint32    sender channel
      uint32    initial window size
      uint32    maximum packet size
      string    originator address (e.g., "192.168.7.38")
      uint32    originator port

   The recipient should respond with SSH_MSG_CHANNEL_OPEN_CONFIRMATION
   or SSH_MSG_CHANNEL_OPEN_FAILURE.

   Implementations MUST reject any X11 channel open requests if they
   have not requested X11 forwarding.

/. 6.4.  Environment Variable Passing
--------------------------------------------------------

   Environment variables may be passed to the shell/command to be
   started later.  Uncontrolled setting of environment variables in a
   privileged process can be a security hazard.  It is recommended that
   implementations either maintain a list of allowable variable names or
   only set environment variables after the server process has dropped
   sufficient privileges.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "env"
      boolean   want reply
      string    variable name
      string    variable value





Ylonen & Lonvick            Standards Track                    [Page 12](#t4254){id=p4254_12}

RFC 4254                SSH Connection Protocol             January 2006


/. 6.5.  Starting a Shell or a Command
--------------------------------------------------------

   Once the session has been set up, a program is started at the remote
   end.  The program can be a shell, an application program, or a
   subsystem with a host-independent name.  Only one of these requests
   can succeed per channel.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "shell"
      boolean   want reply

   This message will request that the user's default shell (typically
   defined in /etc/passwd in UNIX systems) be started at the other end.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "exec"
      boolean   want reply
      string    command

   This message will request that the server start the execution of the
   given command.  The 'command' string may contain a path.  Normal
   precautions MUST be taken to prevent the execution of unauthorized
   commands.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "subsystem"
      boolean   want reply
      string    subsystem name

   This last form executes a predefined subsystem.  It is expected that
   these will include a general file transfer mechanism, and possibly
   other features.  Implementations may also allow configuring more such
   mechanisms.  As the user's shell is usually used to execute the
   subsystem, it is advisable for the subsystem protocol to have a
   "magic cookie" at the beginning of the protocol transaction to
   distinguish it from arbitrary output generated by shell
   initialization scripts, etc.  This spurious output from the shell may
   be filtered out either at the server or at the client.

   The server SHOULD NOT halt the execution of the protocol stack when
   starting a shell or a program.  All input and output from these
   SHOULD be redirected to the channel or to the encrypted tunnel.

   It is RECOMMENDED that the reply to these messages be requested and
   checked.  The client SHOULD ignore these messages.



Ylonen & Lonvick            Standards Track                    [Page 13](#t4254){id=p4254_13}

RFC 4254                SSH Connection Protocol             January 2006


   Subsystem names follow the DNS extensibility naming convention
   outlined in [SSH-NUMBERS].

/. 6.6.  Session Data Transfer
--------------------------------------------------------

   Data transfer for a session is done using SSH_MSG_CHANNEL_DATA and
   SSH_MSG_CHANNEL_EXTENDED_DATA packets and the window mechanism.  The
   extended data type SSH_EXTENDED_DATA_STDERR has been defined for
   stderr data.

/. 6.7.  Window Dimension Change Message
--------------------------------------------------------

   When the window (terminal) size changes on the client side, it MAY
   send a message to the other side to inform it of the new dimensions.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "window-change"
      boolean   FALSE
      uint32    terminal width, columns
      uint32    terminal height, rows
      uint32    terminal width, pixels
      uint32    terminal height, pixels

   A response SHOULD NOT be sent to this message.

/. 6.8.  Local Flow Control
--------------------------------------------------------

   On many systems, it is possible to determine if a pseudo-terminal is
   using control-S/control-Q flow control.  When flow control is
   allowed, it is often desirable to do the flow control at the client
   end to speed up responses to user requests.  This is facilitated by
   the following notification.  Initially, the server is responsible for
   flow control.  (Here, again, client means the side originating the
   session, and server means the other side.)

   The message below is used by the server to inform the client when it
   can or cannot perform flow control (control-S/control-Q processing).
   If 'client can do' is TRUE, the client is allowed to do flow control
   using control-S and control-Q.  The client MAY ignore this message.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "xon-xoff"
      boolean   FALSE
      boolean   client can do

   No response is sent to this message.



Ylonen & Lonvick            Standards Track                    [Page 14](#t4254){id=p4254_14}

RFC 4254                SSH Connection Protocol             January 2006


/. 6.9.  Signals
--------------------------------------------------------

   A signal can be delivered to the remote process/service using the
   following message.  Some systems may not implement signals, in which
   case they SHOULD ignore this message.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "signal"
      boolean   FALSE
      string    signal name (without the "SIG" prefix)

   'signal name' values will be encoded as discussed in the passage
   describing SSH_MSG_CHANNEL_REQUEST messages using "exit-signal" in
   this section.

/. 6.10.  Returning Exit Status
--------------------------------------------------------

   When the command running at the other end terminates, the following
   message can be sent to return the exit status of the command.
   Returning the status is RECOMMENDED.  No acknowledgement is sent for
   this message.  The channel needs to be closed with
   SSH_MSG_CHANNEL_CLOSE after this message.

   The client MAY ignore these messages.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "exit-status"
      boolean   FALSE
      uint32    exit_status

   The remote command may also terminate violently due to a signal.
   Such a condition can be indicated by the following message.  A zero
   'exit_status' usually means that the command terminated successfully.

      byte      SSH_MSG_CHANNEL_REQUEST
      uint32    recipient channel
      string    "exit-signal"
      boolean   FALSE
      string    signal name (without the "SIG" prefix)
      boolean   core dumped
      string    error message in ISO-10646 UTF-8 encoding
      string    language tag [RFC3066]







Ylonen & Lonvick            Standards Track                    [Page 15](#t4254){id=p4254_15}

RFC 4254                SSH Connection Protocol             January 2006


   The 'signal name' is one of the following (these are from [POSIX]).

            ABRT
            ALRM
            FPE
            HUP
            ILL
            INT
            KILL
            PIPE
            QUIT
            SEGV
            TERM
            USR1
            USR2

   Additional 'signal name' values MAY be sent in the format
   "sig-name@xyz", where "sig-name" and "xyz" may be anything a
   particular implementer wants (except the "@" sign).  However, it is
   suggested that if a 'configure' script is used, any non-standard
   'signal name' values it finds be encoded as "SIG@xyz.config.guess",
   where "SIG" is the 'signal name' without the "SIG" prefix, and "xyz"
   is the host type, as determined by "config.guess".

   The 'error message' contains an additional textual explanation of the
   error message.  The message may consist of multiple lines separated
   by CRLF (Carriage Return - Line Feed) pairs.  The client software MAY
   display this message to the user.  If this is done, the client
   software should take the precautions discussed in [SSH-ARCH].

/. 7.  TCP/IP Port Forwarding
========================================================

/. 7.1.  Requesting Port Forwarding
--------------------------------------------------------

   A party need not explicitly request forwardings from its own end to
   the other direction.  However, if it wishes that connections to a
   port on the other side be forwarded to the local side, it must
   explicitly request this.

      byte      SSH_MSG_GLOBAL_REQUEST
      string    "tcpip-forward"
      boolean   want reply
      string    address to bind (e.g., "0.0.0.0")
      uint32    port number to bind







Ylonen & Lonvick            Standards Track                    [Page 16](#t4254){id=p4254_16}

RFC 4254                SSH Connection Protocol             January 2006


   The 'address to bind' and 'port number to bind' specify the IP
   address (or domain name) and port on which connections for forwarding
   are to be accepted.  Some strings used for 'address to bind' have
   special-case semantics.

   o  "" means that connections are to be accepted on all protocol
      families supported by the SSH implementation.

   o  "0.0.0.0" means to listen on all IPv4 addresses.

   o  "::" means to listen on all IPv6 addresses.

   o  "localhost" means to listen on all protocol families supported by
      the SSH implementation on loopback addresses only ([RFC3330] and
      [RFC3513]).

   o  "127.0.0.1" and "::1" indicate listening on the loopback
      interfaces for IPv4 and IPv6, respectively.

   Note that the client can still filter connections based on
   information passed in the open request.

   Implementations should only allow forwarding privileged ports if the
   user has been authenticated as a privileged user.

   Client implementations SHOULD reject these messages; they are
   normally only sent by the client.

   If a client passes 0 as port number to bind and has 'want reply' as
   TRUE, then the server allocates the next available unprivileged port
   number and replies with the following message; otherwise, there is no
   response-specific data.

      byte     SSH_MSG_REQUEST_SUCCESS
      uint32   port that was bound on the server

   A port forwarding can be canceled with the following message.  Note
   that channel open requests may be received until a reply to this
   message is received.

      byte      SSH_MSG_GLOBAL_REQUEST
      string    "cancel-tcpip-forward"
      boolean   want reply
      string    address_to_bind (e.g., "127.0.0.1")
      uint32    port number to bind

   Client implementations SHOULD reject these messages; they are
   normally only sent by the client.



Ylonen & Lonvick            Standards Track                    [Page 17](#t4254){id=p4254_17}

RFC 4254                SSH Connection Protocol             January 2006


/. 7.2.  TCP/IP Forwarding Channels
--------------------------------------------------------

   When a connection comes to a port for which remote forwarding has
   been requested, a channel is opened to forward the port to the other
   side.

      byte      SSH_MSG_CHANNEL_OPEN
      string    "forwarded-tcpip"
      uint32    sender channel
      uint32    initial window size
      uint32    maximum packet size
      string    address that was connected
      uint32    port that was connected
      string    originator IP address
      uint32    originator port

   Implementations MUST reject these messages unless they have
   previously requested a remote TCP/IP port forwarding with the given
   port number.

   When a connection comes to a locally forwarded TCP/IP port, the
   following packet is sent to the other side.  Note that these messages
   MAY also be sent for ports for which no forwarding has been
   explicitly requested.  The receiving side must decide whether to
   allow the forwarding.

      byte      SSH_MSG_CHANNEL_OPEN
      string    "direct-tcpip"
      uint32    sender channel
      uint32    initial window size
      uint32    maximum packet size
      string    host to connect
      uint32    port to connect
      string    originator IP address
      uint32    originator port

   The 'host to connect' and 'port to connect' specify the TCP/IP host
   and port where the recipient should connect the channel.  The 'host
   to connect' may be either a domain name or a numeric IP address.

   The 'originator IP address' is the numeric IP address of the machine
   from where the connection request originates, and the 'originator
   port' is the port on the host from where the connection originated.

   Forwarded TCP/IP channels are independent of any sessions, and
   closing a session channel does not in any way imply that forwarded
   connections should be closed.




Ylonen & Lonvick            Standards Track                    [Page 18](#t4254){id=p4254_18}

RFC 4254                SSH Connection Protocol             January 2006


   Client implementations SHOULD reject direct TCP/IP open requests for
   security reasons.

/. 8.  Encoding of Terminal Modes
========================================================

   All 'encoded terminal modes' (as passed in a pty request) are encoded
   into a byte stream.  It is intended that the coding be portable
   across different environments.  The stream consists of opcode-
   argument pairs wherein the opcode is a byte value.  Opcodes 1 to 159
   have a single uint32 argument.  Opcodes 160 to 255 are not yet
   defined, and cause parsing to stop (they should only be used after
   any other data).  The stream is terminated by opcode TTY_OP_END
   (0x00).

   The client SHOULD put any modes it knows about in the stream, and the
   server MAY ignore any modes it does not know about.  This allows some
   degree of machine-independence, at least between systems that use a
   POSIX-like tty interface.  The protocol can support other systems as
   well, but the client may need to fill reasonable values for a number
   of parameters so the server pty gets set to a reasonable mode (the
   server leaves all unspecified mode bits in their default values, and
   only some combinations make sense).

   The naming of opcode values mostly follows the POSIX terminal mode
   flags.  The following opcode values have been defined.  Note that the
   values given below are in decimal format for readability, but they
   are actually byte values.

          opcode  mnemonic       description
          ------  --------       -----------
          0     TTY_OP_END  Indicates end of options.
          1     VINTR       Interrupt character; 255 if none.  Similarly
                             for the other characters.  Not all of these
                             characters are supported on all systems.
          2     VQUIT       The quit character (sends SIGQUIT signal on
                             POSIX systems).
          3     VERASE      Erase the character to left of the cursor.
          4     VKILL       Kill the current input line.
          5     VEOF        End-of-file character (sends EOF from the
                             terminal).
          6     VEOL        End-of-line character in addition to
                             carriage return and/or linefeed.
          7     VEOL2       Additional end-of-line character.
          8     VSTART      Continues paused output (normally
                             control-Q).
          9     VSTOP       Pauses output (normally control-S).
          10    VSUSP       Suspends the current program.
          11    VDSUSP      Another suspend character.



Ylonen & Lonvick            Standards Track                    [Page 19](#t4254){id=p4254_19}

RFC 4254                SSH Connection Protocol             January 2006


          12    VREPRINT    Reprints the current input line.
          13    VWERASE     Erases a word left of cursor.
          14    VLNEXT      Enter the next character typed literally,
                             even if it is a special character
          15    VFLUSH      Character to flush output.
          16    VSWTCH      Switch to a different shell layer.
          17    VSTATUS     Prints system status line (load, command,
                             pid, etc).
          18    VDISCARD    Toggles the flushing of terminal output.
          30    IGNPAR      The ignore parity flag.  The parameter
                             SHOULD be 0 if this flag is FALSE,
                             and 1 if it is TRUE.
          31    PARMRK      Mark parity and framing errors.
          32    INPCK       Enable checking of parity errors.
          33    ISTRIP      Strip 8th bit off characters.
          34    INLCR       Map NL into CR on input.
          35    IGNCR       Ignore CR on input.
          36    ICRNL       Map CR to NL on input.
          37    IUCLC       Translate uppercase characters to
                             lowercase.
          38    IXON        Enable output flow control.
          39    IXANY       Any char will restart after stop.
          40    IXOFF       Enable input flow control.
          41    IMAXBEL     Ring bell on input queue full.
          50    ISIG        Enable signals INTR, QUIT, [D]SUSP.
          51    ICANON      Canonicalize input lines.
          52    XCASE       Enable input and output of uppercase
                             characters by preceding their lowercase
                             equivalents with "\".
          53    ECHO        Enable echoing.
          54    ECHOE       Visually erase chars.
          55    ECHOK       Kill character discards current line.
          56    ECHONL      Echo NL even if ECHO is off.
          57    NOFLSH      Don't flush after interrupt.
          58    TOSTOP      Stop background jobs from output.
          59    IEXTEN      Enable extensions.
          60    ECHOCTL     Echo control characters as ^(Char).
          61    ECHOKE      Visual erase for line kill.
          62    PENDIN      Retype pending input.
          70    OPOST       Enable output processing.
          71    OLCUC       Convert lowercase to uppercase.
          72    ONLCR       Map NL to CR-NL.
          73    OCRNL       Translate carriage return to newline
                             (output).
          74    ONOCR       Translate newline to carriage
                             return-newline (output).
          75    ONLRET      Newline performs a carriage return
                             (output).



Ylonen & Lonvick            Standards Track                    [Page 20](#t4254){id=p4254_20}

RFC 4254                SSH Connection Protocol             January 2006


          90    CS7         7 bit mode.
          91    CS8         8 bit mode.
          92    PARENB      Parity enable.
          93    PARODD      Odd parity, else even.

          128 TTY_OP_ISPEED  Specifies the input baud rate in
                              bits per second.
          129 TTY_OP_OSPEED  Specifies the output baud rate in
                              bits per second.

/. 9.  Summary of Message Numbers
========================================================

   The following is a summary of messages and their associated message
   number.

            SSH_MSG_GLOBAL_REQUEST                  80
            SSH_MSG_REQUEST_SUCCESS                 81
            SSH_MSG_REQUEST_FAILURE                 82
            SSH_MSG_CHANNEL_OPEN                    90
            SSH_MSG_CHANNEL_OPEN_CONFIRMATION       91
            SSH_MSG_CHANNEL_OPEN_FAILURE            92
            SSH_MSG_CHANNEL_WINDOW_ADJUST           93
            SSH_MSG_CHANNEL_DATA                    94
            SSH_MSG_CHANNEL_EXTENDED_DATA           95
            SSH_MSG_CHANNEL_EOF                     96
            SSH_MSG_CHANNEL_CLOSE                   97
            SSH_MSG_CHANNEL_REQUEST                 98
            SSH_MSG_CHANNEL_SUCCESS                 99
            SSH_MSG_CHANNEL_FAILURE                100

/. 10.  IANA Considerations
========================================================

   This document is part of a set.  The IANA considerations for the SSH
   protocol as defined in [SSH-ARCH], [SSH-TRANS], [SSH-USERAUTH], and
   this document, are detailed in [SSH-NUMBERS].

/. 11.  Security Considerations
========================================================

   This protocol is assumed to run on top of a secure, authenticated
   transport.  User authentication and protection against network-level
   attacks are assumed to be provided by the underlying protocols.

   Full security considerations for this protocol are provided in
   [SSH-ARCH].  Specific to this document, it is RECOMMENDED that
   implementations disable all the potentially dangerous features (e.g.,
   agent forwarding, X11 forwarding, and TCP/IP forwarding) if the host
   key has changed without notice or explanation.




Ylonen & Lonvick            Standards Track                    [Page 21](#t4254){id=p4254_21}

RFC 4254                SSH Connection Protocol             January 2006


/. 12.  References
========================================================

/. 12.1.  Normative References
--------------------------------------------------------

   [SSH-ARCH]     Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Protocol Architecture", RFC 4251, January 2006.

   [SSH-TRANS]    Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Transport Layer Protocol", RFC 4254, January
                  2006.

   [SSH-USERAUTH] Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Authentication Protocol", RFC 4252, January
                  2006.

   [SSH-NUMBERS]  Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell
                  (SSH) Protocol Assigned Numbers", RFC 4250, January
                  2006.

   [RFC2119]      Bradner, S., "Key words for use in RFCs to Indicate
                  Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC2434]      Narten, T. and H. Alvestrand, "Guidelines for Writing
                  an IANA Considerations Section in RFCs", BCP 26, RFC
                  2434, October 1998.

   [RFC3066]      Alvestrand, H., "Tags for the Identification of
                  Languages", BCP 47, RFC 3066, January 2001.

   [RFC3629]      Yergeau, F., "UTF-8, a transformation format of ISO
                  10646", STD 63, RFC 3629, November 2003.

/. 12.2.  Informative References
--------------------------------------------------------

   [RFC3330]      IANA, "Special-Use IPv4 Addresses", RFC 3330,
                  September 2002.

   [RFC3513]      Hinden, R. and S. Deering, "Internet Protocol Version
                  6 (IPv6) Addressing Architecture", RFC 3513, April
                  2003.

   [SCHEIFLER]    Scheifler, R., "X Window System : The Complete
                  Reference to Xlib, X Protocol, Icccm, Xlfd, 3rd
                  edition.", Digital Press ISBN 1555580882, February
                  1992.






Ylonen & Lonvick            Standards Track                    [Page 22](#t4254){id=p4254_22}

RFC 4254                SSH Connection Protocol             January 2006


   [POSIX]        ISO/IEC, 9945-1., "Information technology -- Portable
                  Operating System Interface  (POSIX)-Part 1: System
                  Application Program Interface (API) C Language", ANSI/
                  IEE Std 1003.1, July 1996.

Authors' Addresses

   Tatu Ylonen
   SSH Communications Security Corp
   Valimotie 17
   00380 Helsinki
   Finland

   EMail: ylo@ssh.com


   Chris Lonvick (editor)
   Cisco Systems, Inc.
   12515 Research Blvd.
   Austin  78759
   USA

   EMail: clonvick@cisco.com

Trademark Notice

   "ssh" is a registered trademark in the United States and/or other
   countries.























Ylonen & Lonvick            Standards Track                    [Page 23](#t4254){id=p4254_23}

RFC 4254                SSH Connection Protocol             January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Ylonen & Lonvick            Standards Track                    [Page 24](#t4254){id=p4254_24}



/EXT RFC4255  Using DNS to Securely Publish Secure Shell (SSH) Key Fingerprints
========================================================
https://datatracker.ietf.org/doc/html/rfc4255

Network Working Group                                        J. Schlyter
Request for Comments: 4255                                       OpenSSH
Category: Standards Track                                     W. Griffin
                                                                  SPARTA
                                                            January 2006


   Using DNS to Securely Publish Secure Shell (SSH) Key Fingerprints

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   This document describes a method of verifying Secure Shell (SSH) host
   keys using Domain Name System Security (DNSSEC).  The document
   defines a new DNS resource record that contains a standard SSH key
   fingerprint.

/. [Table of Contents](){id=t4255}
========================================================

- 1. Introduction .................................................... 2
- 2. SSH Host Key Verification ....................................... 2
-    2.1. Method ..................................................... 2
-    2.2. Implementation Notes ....................................... 2
-    2.3. Fingerprint Matching ....................................... 3
-    2.4. Authentication ............................................. 3
- 3. The SSHFP Resource Record ....................................... 3
-    3.1. The SSHFP RDATA Format ..................................... 4
-         3.1.1. Algorithm Number Specification ...................... 4
-         3.1.2. Fingerprint Type Specification ...................... 4
-         3.1.3. Fingerprint ......................................... 5
-    3.2. Presentation Format of the SSHFP RR ........................ 5
- 4. Security Considerations ......................................... 5
- 5. IANA Considerations ............................................. 6
- 6. Normative References ............................................ 7
- 7. Informational References ........................................ 7
- 8. Acknowledgements ................................................ 8




Schlyter & Griffin          Standards Track                     [Page 1]

RFC 4255                DNS and SSH Fingerprints            January 2006


/. 1.  Introduction
========================================================

   The SSH [6] protocol provides secure remote login and other secure
   network services over an insecure network.  The security of the
   connection relies on the server authenticating itself to the client
   as well as the user authenticating itself to the server.

   If a connection is established to a server whose public key is not
   already known to the client, a fingerprint of the key is presented to
   the user for verification.  If the user decides that the fingerprint
   is correct and accepts the key, the key is saved locally and used for
   verification for all following connections.  While some security-
   conscious users verify the fingerprint out-of-band before accepting
   the key, many users blindly accept the presented key.

   The method described here can provide out-of-band verification by
   looking up a fingerprint of the server public key in the DNS [1][2]
   and using DNSSEC [5] to verify the lookup.

   In order to distribute the fingerprint using DNS, this document
   defines a new DNS resource record, "SSHFP", to carry the fingerprint.

   Basic understanding of the DNS system [1][2] and the DNS security
   extensions [5] is assumed by this document.

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in RFC 2119 [3].

/. 2.  SSH Host Key Verification
========================================================

/. 2.1.  Method
--------------------------------------------------------

   Upon connection to an SSH server, the SSH client MAY look up the
   SSHFP resource record(s) for the host it is connecting to.  If the
   algorithm and fingerprint of the key received from the SSH server
   match the algorithm and fingerprint of one of the SSHFP resource
   record(s) returned from DNS, the client MAY accept the identity of
   the server.

/. 2.2.  Implementation Notes
--------------------------------------------------------

   Client implementors SHOULD provide a configurable policy used to
   select the order of methods used to verify a host key.  This document
   defines one method: Fingerprint storage in DNS.  Another method
   defined in the SSH Architecture [6] uses local files to store keys
   for comparison.  Other methods that could be defined in the future
   might include storing fingerprints in LDAP or other databases.  A



Schlyter & Griffin          Standards Track                     [Page 2]

RFC 4255                DNS and SSH Fingerprints            January 2006


   configurable policy will allow administrators to determine which
   methods they want to use and in what order the methods should be
   prioritized.  This will allow administrators to determine how much
   trust they want to place in the different methods.

   One specific scenario for having a configurable policy is where
   clients do not use fully qualified host names to connect to servers.
   In this scenario, the implementation SHOULD verify the host key
   against a local database before verifying the key via the fingerprint
   returned from DNS.  This would help prevent an attacker from
   injecting a DNS search path into the local resolver and forcing the
   client to connect to a different host.

/. 2.3.  Fingerprint Matching
--------------------------------------------------------

   The public key and the SSHFP resource record are matched together by
   comparing algorithm number and fingerprint.

      The public key algorithm and the SSHFP algorithm number MUST
      match.

      A message digest of the public key, using the message digest
      algorithm specified in the SSHFP fingerprint type, MUST match the
      SSHFP fingerprint.

/. 2.4.  Authentication
--------------------------------------------------------

   A public key verified using this method MUST NOT be trusted if the
   SSHFP resource record (RR) used for verification was not
   authenticated by a trusted SIG RR.

   Clients that do validate the DNSSEC signatures themselves SHOULD use
   standard DNSSEC validation procedures.

   Clients that do not validate the DNSSEC signatures themselves MUST
   use a secure transport (e.g., TSIG [9], SIG(0) [10], or IPsec [8])
   between themselves and the entity performing the signature
   validation.

/. 3.  The SSHFP Resource Record
========================================================

   The SSHFP resource record (RR) is used to store a fingerprint of an
   SSH public host key that is associated with a Domain Name System
   (DNS) name.

   The RR type code for the SSHFP RR is 44.





Schlyter & Griffin          Standards Track                     [Page 3]

RFC 4255                DNS and SSH Fingerprints            January 2006


/. 3.1.  The SSHFP RDATA Format
--------------------------------------------------------

   The RDATA for a SSHFP RR consists of an algorithm number, fingerprint
   type and the fingerprint of the public host key.

       1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 3 3
       0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
       +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
       |   algorithm   |    fp type    |                               /
       +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+                               /
       /                                                               /
       /                          fingerprint                          /
       /                                                               /
       +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

3.1.1.  Algorithm Number Specification
--------------------------------------------------------

   This algorithm number octet describes the algorithm of the public
   key.  The following values are assigned:

          Value    Algorithm name
          -----    --------------
          0        reserved
          1        RSA
          2        DSS

   Reserving other types requires IETF consensus [4].

3.1.2.  Fingerprint Type Specification
--------------------------------------------------------

   The fingerprint type octet describes the message-digest algorithm
   used to calculate the fingerprint of the public key.  The following
   values are assigned:

          Value    Fingerprint type
          -----    ----------------
          0        reserved
          1        SHA-1

   Reserving other types requires IETF consensus [4].

   For interoperability reasons, as few fingerprint types as possible
   should be reserved.  The only reason to reserve additional types is
   to increase security.







Schlyter & Griffin          Standards Track                     [Page 4]

RFC 4255                DNS and SSH Fingerprints            January 2006


3.1.3.  Fingerprint
--------------------------------------------------------

   The fingerprint is calculated over the public key blob as described
   in [7].

   The message-digest algorithm is presumed to produce an opaque octet
   string output, which is placed as-is in the RDATA fingerprint field.

/. 3.2.  Presentation Format of the SSHFP RR
--------------------------------------------------------

   The RDATA of the presentation format of the SSHFP resource record
   consists of two numbers (algorithm and fingerprint type) followed by
   the fingerprint itself, presented in hex, e.g.:

       host.example.  SSHFP 2 1 123456789abcdef67890123456789abcdef67890

   The use of mnemonics instead of numbers is not allowed.

/. 4.  Security Considerations
========================================================

   Currently, the amount of trust a user can realistically place in a
   server key is proportional to the amount of attention paid to
   verifying that the public key presented actually corresponds to the
   private key of the server.  If a user accepts a key without verifying
   the fingerprint with something learned through a secured channel, the
   connection is vulnerable to a man-in-the-middle attack.

   The overall security of using SSHFP for SSH host key verification is
   dependent on the security policies of the SSH host administrator and
   DNS zone administrator (in transferring the fingerprint), detailed
   aspects of how verification is done in the SSH implementation, and in
   the client's diligence in accessing the DNS in a secure manner.

   One such aspect is in which order fingerprints are looked up (e.g.,
   first checking local file and then SSHFP).  We note that, in addition
   to protecting the first-time transfer of host keys, SSHFP can
   optionally be used for stronger host key protection.

      If SSHFP is checked first, new SSH host keys may be distributed by
      replacing the corresponding SSHFP in DNS.

      If SSH host key verification can be configured to require SSHFP,
      SSH host key revocation can be implemented by removing the
      corresponding SSHFP from DNS.







Schlyter & Griffin          Standards Track                     [Page 5]

RFC 4255                DNS and SSH Fingerprints            January 2006


   As stated in Section 2.2, we recommend that SSH implementors provide
   a policy mechanism to control the order of methods used for host key
   verification.  One specific scenario for having a configurable policy
   is where clients use unqualified host names to connect to servers.
   In this case, we recommend that SSH implementations check the host
   key against a local database before verifying the key via the
   fingerprint returned from DNS.  This would help prevent an attacker
   from injecting a DNS search path into the local resolver and forcing
   the client to connect to a different host.

   A different approach to solve the DNS search path issue would be for
   clients to use a trusted DNS search path, i.e., one not acquired
   through DHCP or other autoconfiguration mechanisms.  Since there is
   no way with current DNS lookup APIs to tell whether a search path is
   from a trusted source, the entire client system would need to be
   configured with this trusted DNS search path.

   Another dependency is on the implementation of DNSSEC itself.  As
   stated in Section 2.4, we mandate the use of secure methods for
   lookup and that SSHFP RRs are authenticated by trusted SIG RRs.  This
   is especially important if SSHFP is to be used as a basis for host
   key rollover and/or revocation, as described above.

   Since DNSSEC only protects the integrity of the host key fingerprint
   after it is signed by the DNS zone administrator, the fingerprint
   must be transferred securely from the SSH host administrator to the
   DNS zone administrator.  This could be done manually between the
   administrators or automatically using secure DNS dynamic update [11]
   between the SSH server and the nameserver.  We note that this is no
   different from other key enrollment situations, e.g., a client
   sending a certificate request to a certificate authority for signing.

/. 5.  IANA Considerations
========================================================

   IANA has allocated the RR type code 44 for SSHFP from the standard RR
   type space.

   IANA has opened a new registry for the SSHFP RR type for public key
   algorithms.  The defined types are:

      0 is reserved
      1 is RSA
      2 is DSA

   Adding new reservations requires IETF consensus [4].






Schlyter & Griffin          Standards Track                     [Page 6]

RFC 4255                DNS and SSH Fingerprints            January 2006


   IANA has opened a new registry for the SSHFP RR type for fingerprint
   types.  The defined types are:

      0 is reserved
      1 is SHA-1

   Adding new reservations requires IETF consensus [4].

/. 6.  Normative References
========================================================

   [1]   Mockapetris, P., "Domain names - concepts and facilities", STD
         13, RFC 1034, November 1987.

   [2]   Mockapetris, P., "Domain names - implementation and
         specification", STD 13, RFC 1035, November 1987.

   [3]   Bradner, S., "Key words for use in RFCs to Indicate Requirement
         Levels", BCP 14, RFC 2119, March 1997.

   [4]   Narten, T. and H. Alvestrand, "Guidelines for Writing an IANA
         Considerations Section in RFCs", BCP 26, RFC 2434, October
         1998.

   [5]   Arends, R., Austein, R., Larson, M., Massey, D., and S. Rose,
         "DNS Security Introduction and Requirements", RFC 4033, March
         2005.

         Arends, R., Austein, R., Larson, M., Massey, D., and S. Rose,
         "Resource Records for the DNS Security Extensions", RFC 4034,
         March 2005.

         Arends, R., Austein, R., Larson, M., Massey, D., and S. Rose,
         "Protocol Modifications for the DNS Security Extensions", RFC
         4035, March 2005.

   [6]   Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
         Protocol Architecture", RFC 4251, January 2006.

   [7]   Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
         Transport Layer Protocol", RFC 4253, January 2006.

/. 7.  Informational References
========================================================

   [8]   Thayer, R., Doraswamy, N., and R. Glenn, "IP Security Document
         Roadmap", RFC 2411, November 1998.






Schlyter & Griffin          Standards Track                     [Page 7]

RFC 4255                DNS and SSH Fingerprints            January 2006


   [9]   Vixie, P., Gudmundsson, O., Eastlake 3rd, D., and B.
         Wellington, "Secret Key Transaction Authentication for DNS
         (TSIG)", RFC 2845, May 2000.

   [10]  Eastlake 3rd, D., "DNS Request and Transaction Signatures
         ( SIG(0)s )", RFC 2931, September 2000.

   [11]  Wellington, B., "Secure Domain Name System (DNS) Dynamic
         Update", RFC 3007, November 2000.

/. 8.  Acknowledgements
========================================================

   The authors gratefully acknowledge, in no particular order, the
   contributions of the following persons:

      Martin Fredriksson

      Olafur Gudmundsson

      Edward Lewis

      Bill Sommerfeld

Authors' Addresses

   Jakob Schlyter
   OpenSSH
   812 23rd Avenue SE
   Calgary, Alberta  T2G 1N8
   Canada

   EMail: jakob@openssh.com
   URI:   http://www.openssh.com/


   Wesley Griffin
   SPARTA
   7075 Samuel Morse Drive
   Columbia, MD  21046
   USA

   EMail: wgriffin@sparta.com
   URI:   http://www.sparta.com/








Schlyter & Griffin          Standards Track                     [Page 8]

RFC 4255                DNS and SSH Fingerprints            January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Schlyter & Griffin          Standards Track                     [Page 9]


/EXT RFC4256  Generic Message Exchange Authentication for the Secure Shell Protocol (SSH)
========================================================
https://datatracker.ietf.org/doc/html/rfc4256

Network Working Group                                          F. Cusack
Request for Comments: 4256                                  savecore.net
Category: Standards Track                                     M. Forssen
                                             AppGate Network Security AB
                                                            January 2006


              Generic Message Exchange Authentication for
                    the Secure Shell Protocol (SSH)

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   The Secure Shell Protocol (SSH) is a protocol for secure remote login
   and other secure network services over an insecure network.  This
   document describes a general purpose authentication method for the
   SSH protocol, suitable for interactive authentications where the
   authentication data should be entered via a keyboard (or equivalent
   alphanumeric input device).  The major goal of this method is to
   allow the SSH client to support a whole class of authentication
   mechanism(s) without knowing the specifics of the actual
   authentication mechanism(s).

/. 1.  Introduction
========================================================

   The SSH authentication protocol [SSH-USERAUTH] is a general-purpose
   user authentication protocol.  It is intended to be run over the SSH
   transport layer protocol [SSH-TRANS].  The authentication protocol
   assumes that the underlying protocols provide integrity and
   confidentiality protection.

   This document describes a general purpose authentication method for
   the SSH authentication protocol.  This method is suitable for
   interactive authentication methods that do not need any special
   software support on the client side.  Instead, all authentication
   data should be entered via the keyboard.  The major goal of this
   method is to allow the SSH client to have little or no knowledge of



Cusack & Forssen            Standards Track                     [Page 1]

RFC 4256         SSH Generic Interactive Authentication     January 2006


   the specifics of the underlying authentication mechanism(s) used by
   the SSH server.  This will allow the server to arbitrarily select or
   change the underlying authentication mechanism(s) without having to
   update client code.

   The name for this authentication method is "keyboard-interactive".

   This document should be read only after reading the SSH architecture
   document [SSH-ARCH] and the SSH authentication document
   [SSH-USERAUTH].  This document freely uses terminology and notation
   from both documents without reference or further explanation.

   This document also describes some of the client interaction with the
   user in obtaining the authentication information.  While this is
   somewhat out of the scope of a protocol specification, it is
   described here anyway because some aspects of the protocol are
   specifically designed based on user interface issues, and omitting
   this information may lead to incompatible or awkward implementations.

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC-2119].

/. 2.  Rationale
========================================================

   Currently defined authentication methods for SSH are tightly coupled
   with the underlying authentication mechanism.  This makes it
   difficult to add new mechanisms for authentication as all clients
   must be updated to support the new mechanism.  With the generic
   method defined here, clients will not require code changes to support
   new authentication mechanisms, and if a separate authentication layer
   is used, such as [PAM], then the server may not need any code changes
   either.

   This presents a significant advantage to other methods, such as the
   "password" method (defined in [SSH-USERAUTH]), as new (presumably
   stronger) methods may be added "at will" and system security can be
   transparently enhanced.

   Challenge-response and One Time Password mechanisms are also easily
   supported with this authentication method.

   However, this authentication method is limited to authentication
   mechanisms that do not require any special code, such as hardware
   drivers or password mangling, on the client.






Cusack & Forssen            Standards Track                     [Page 2]

RFC 4256         SSH Generic Interactive Authentication     January 2006


/. 3.  Protocol Exchanges
========================================================

   The client initiates the authentication with an
   SSH_MSG_USERAUTH_REQUEST message.  The server then requests
   authentication information from the client with an
   SSH_MSG_USERAUTH_INFO_REQUEST message.  The client obtains the
   information from the user and then responds with an
   SSM_MSG_USERAUTH_INFO_RESPONSE message.  The server MUST NOT send
   another SSH_MSG_USERAUTH_INFO_REQUEST before it has received the
   answer from the client.

/. 3.1.  Initial Exchange
--------------------------------------------------------

   The authentication starts with the client sending the following
   packet:

      byte      SSH_MSG_USERAUTH_REQUEST
      string    user name (ISO-10646 UTF-8, as defined in [RFC-3629])
      string    service name (US-ASCII)
      string    "keyboard-interactive" (US-ASCII)
      string    language tag (as defined in [RFC-3066])
      string    submethods (ISO-10646 UTF-8)

   The language tag is deprecated and SHOULD be the empty string.  It
   may be removed in a future revision of this specification.  Instead,
   the server SHOULD select the language to be used based on the tags
   communicated during key exchange [SSH-TRANS].

   If the language tag is not the empty string, the server SHOULD use
   the specified language for any messages sent to the client as part of
   this protocol.  The language tag SHOULD NOT be used for language
   selection for messages outside of this protocol.  If the server does
   not support the requested language, the language to be used is
   implementation-dependent.

   The submethods field is included so the user can give a hint of which
   actual methods he wants to use.  It is a comma-separated list of
   authentication submethods (software or hardware) that the user
   prefers.  If the client has knowledge of the submethods preferred by
   the user, presumably through a configuration setting, it MAY use the
   submethods field to pass this information to the server.  Otherwise,
   it MUST send the empty string.

   The actual names of the submethods is something the user and the
   server need to agree upon.

   Server interpretation of the submethods field is implementation-
   dependent.



Cusack & Forssen            Standards Track                     [Page 3]

RFC 4256         SSH Generic Interactive Authentication     January 2006


   One possible implementation strategy of the submethods field on the
   server is that, unless the user may use multiple different
   submethods, the server ignores this field.  If the user may
   authenticate using one of several different submethods, the server
   should treat the submethods field as a hint on which submethod the
   user wants to use this time.

   Note that when this message is sent to the server, the client has not
   yet prompted the user for a password, and so that information is NOT
   included with this initial message (unlike the "password" method).

   The server MUST reply with an SSH_MSG_USERAUTH_SUCCESS,
   SSH_MSG_USERAUTH_FAILURE, or SSH_MSG_USERAUTH_INFO_REQUEST message.

   The server SHOULD NOT reply with the SSH_MSG_USERAUTH_FAILURE message
   if the failure is based on the user name or service name; instead, it
   SHOULD send SSH_MSG_USERAUTH_INFO_REQUEST message(s), which look just
   like the one(s) that would have been sent in cases where
   authentication should proceed, and then send the failure message
   (after a suitable delay, as described below).  The goal is to make it
   impossible to find valid usernames by comparing the results when
   authenticating as different users.

   The server MAY reply with an SSH_MSG_USERAUTH_SUCCESS message if no
   authentication is required for the user in question.  However, a
   better approach, for reasons discussed above, might be to reply with
   an SSH_MSG_USERAUTH_INFO_REQUEST message and ignore (don't validate)
   the response.

/. 3.2.  Information Requests
--------------------------------------------------------

   Requests are generated from the server using the
   SSH_MSG_USERAUTH_INFO_REQUEST message.

   The server may send as many requests as are necessary to authenticate
   the client; the client MUST be prepared to handle multiple exchanges.
   However, the server MUST NOT ever have more than one
   SSH_MSG_USERAUTH_INFO_REQUEST message outstanding.  That is, it may
   not send another request before the client has answered.












Cusack & Forssen            Standards Track                     [Page 4]

RFC 4256         SSH Generic Interactive Authentication     January 2006


   The SSH_MSG_USERAUTH_INFO_REQUEST message is defined as follows:

      byte      SSH_MSG_USERAUTH_INFO_REQUEST
      string    name (ISO-10646 UTF-8)
      string    instruction (ISO-10646 UTF-8)
      string    language tag (as defined in [RFC-3066])
      int       num-prompts
      string    prompt[1] (ISO-10646 UTF-8)
      boolean   echo[1]
      ...
      string    prompt[num-prompts] (ISO-10646 UTF-8)
      boolean   echo[num-prompts]

   The language tag is deprecated and SHOULD be the empty string.  It
   may be removed in a future revision of this specification.  Instead,
   the server SHOULD select the language used based on the tags
   communicated during key exchange [SSH-TRANS].

   If the language tag is not the empty string, the server SHOULD use
   the specified language for any messages sent to the client as part of
   this protocol.  The language tag SHOULD NOT be used for language
   selection for messages outside of this protocol.  If the server does
   not support the requested language, the language to be used is
   implementation-dependent.

   The server SHOULD take into consideration that some clients may not
   be able to properly display a long name or prompt field (see next
   section), and limit the lengths of those fields if possible.  For
   example, instead of an instruction field of "Enter Password" and a
   prompt field of "Password for user23@host.domain: ", a better choice
   might be an instruction field of "Password authentication for
   user23@host.domain" and a prompt field of "Password: ".  It is
   expected that this authentication method would typically be backended
   by [PAM] and so such choices would not be possible.

   The name and instruction fields MAY be empty strings; the client MUST
   be prepared to handle this correctly.  The prompt field(s) MUST NOT
   be empty strings.

   The num-prompts field may be `0', in which case there will be no
   prompt/echo fields in the message, but the client SHOULD still
   display the name and instruction fields (as described below).









Cusack & Forssen            Standards Track                     [Page 5]

RFC 4256         SSH Generic Interactive Authentication     January 2006


/. 3.3.  User Interface
--------------------------------------------------------

   Upon receiving a request message, the client SHOULD prompt the user
   as follows:

   A command line interface (CLI) client SHOULD print the name and
   instruction (if non-empty), adding newlines.  Then, for each prompt
   in turn, the client SHOULD display the prompt and read the user
   input.

   A graphical user interface (GUI) client has many choices on how to
   prompt the user.  One possibility is to use the name field (possibly
   prefixed with the application's name) as the title of a dialog window
   in which the prompt(s) are presented.  In that dialog window, the
   instruction field would be a text message, and the prompts would be
   labels for text entry fields.  All fields SHOULD be presented to the
   user.  For example, an implementation SHOULD NOT discard the name
   field because its windows lack titles; instead, it SHOULD find
   another way to display this information.  If prompts are presented in
   a dialog window, then the client SHOULD NOT present each prompt in a
   separate window.

   All clients MUST properly handle an instruction field with embedded
   newlines.  They SHOULD also be able to display at least 30 characters
   for the name and prompts.  If the server presents names or prompts
   longer than 30 characters, the client MAY truncate these fields to
   the length it can display.  If the client does truncate any fields,
   there MUST be an obvious indication that such truncation has
   occurred.  The instruction field SHOULD NOT be truncated.

   Clients SHOULD use control character filtering, as discussed in
   [SSH-ARCH], to avoid attacks by including terminal control characters
   in the fields to be displayed.

   For each prompt, the corresponding echo field indicates whether the
   user input should be echoed as characters are typed.  Clients SHOULD
   correctly echo/mask user input for each prompt independently of other
   prompts in the request message.  If a client does not honor the echo
   field for whatever reason, then the client MUST err on the side of
   masking input.  A GUI client might like to have a checkbox toggling
   echo/mask.  Clients SHOULD NOT add any additional characters to the
   prompt, such as ": " (colon-space); the server is responsible for
   supplying all text to be displayed to the user.  Clients MUST also
   accept empty responses from the user and pass them on as empty
   strings.






Cusack & Forssen            Standards Track                     [Page 6]

RFC 4256         SSH Generic Interactive Authentication     January 2006


/. 3.4.  Information Responses
--------------------------------------------------------

   After obtaining the requested information from the user, the client
   MUST respond with an SSH_MSG_USERAUTH_INFO_RESPONSE message.

   The format of the SSH_MSG_USERAUTH_INFO_RESPONSE message is as
   follows:

      byte      SSH_MSG_USERAUTH_INFO_RESPONSE
      int       num-responses
      string    response[1] (ISO-10646 UTF-8)
      ...
      string    response[num-responses] (ISO-10646 UTF-8)

   Note that the responses are encoded in ISO-10646 UTF-8.  It is up to
   the server how it interprets the responses and validates them.
   However, if the client reads the responses in some other encoding
   (e.g., ISO 8859-1), it MUST convert the responses to ISO-10646 UTF-8
   before transmitting.

   From an internationalization standpoint, it is desired that if a user
   enters responses, the authentication process will work regardless of
   what OS and client software they are using.  Doing so requires
   normalization.  Systems supporting non-ASCII passwords SHOULD always
   normalize passwords and usernames whenever they are added to the
   database, or compare them (with or without hashing) to existing
   entries in the database.  SSH implementations that both store the
   passwords and compare them SHOULD use [SASLPREP] for normalization.

   If the num-responses field does not match the num-prompts field in
   the request message, the server MUST send a failure message.

   In the case that the server sends a `0' num-prompts field in the
   request message, the client MUST send a response message with a `0'
   num-responses field to complete the exchange.

   The responses MUST be ordered as the prompts were ordered.  That is,
   response[n] MUST be the answer to prompt[n].

   After receiving the response, the server MUST send either an
   SSH_MSG_USERAUTH_SUCCESS, SSH_MSG_USERAUTH_FAILURE, or another
   SSH_MSG_USERAUTH_INFO_REQUEST message.

   If the server fails to authenticate the user (through the underlying
   authentication mechanism(s)), it SHOULD NOT send another request
   message(s) in an attempt to obtain new authentication data; instead,
   it SHOULD send a failure message.  The only time the server should
   send multiple request messages is if additional authentication data



Cusack & Forssen            Standards Track                     [Page 7]

RFC 4256         SSH Generic Interactive Authentication     January 2006


   is needed (i.e., because there are multiple underlying authentication
   mechanisms that must be used to authenticate the user).

   If the server intends to respond with a failure message, it MAY delay
   for an implementation-dependent time before sending it to the client.
   It is suspected that implementations are likely to make the time
   delay configurable; a suggested default is 2 seconds.

/. 4.  Authentication Examples
========================================================

   Here are two example exchanges between a client and server.  The
   first is an example of challenge/response with a handheld token.
   This is an authentication that is not otherwise possible with other
   authentication methods.

      C:   byte      SSH_MSG_USERAUTH_REQUEST
      C:   string    "user23"
      C:   string    "ssh-userauth"
      C:   string    "keyboard-interactive"
      C:   string    ""
      C:   string    ""

      S:   byte      SSH_MSG_USERAUTH_INFO_REQUEST
      S:   string    "CRYPTOCard Authentication"
      S:   string    "The challenge is '14315716'"
      S:   string    "en-US"
      S:   int       1
      S:   string    "Response: "
      S:   boolean   TRUE

      [Client prompts user for password]

      C:   byte      SSH_MSG_USERAUTH_INFO_RESPONSE
      C:   int       1
      C:   string    "6d757575"

      S:   byte      SSH_MSG_USERAUTH_SUCCESS














Cusack & Forssen            Standards Track                     [Page 8]

RFC 4256         SSH Generic Interactive Authentication     January 2006


   The second example is a standard password authentication; in this
   case, the user's password is expired.

      C:   byte      SSH_MSG_USERAUTH_REQUEST
      C:   string    "user23"
      C:   string    "ssh-userauth"
      C:   string    "keyboard-interactive"
      C:   string    "en-US"
      C:   string    ""

      S:   byte      SSH_MSG_USERAUTH_INFO_REQUEST
      S:   string    "Password Authentication"
      S:   string    ""
      S:   string    "en-US"
      S:   int       1
      S:   string    "Password: "
      S:   boolean   FALSE

      [Client prompts user for password]

      C:   byte      SSH_MSG_USERAUTH_INFO_RESPONSE
      C:   int       1
      C:   string    "password"

      S:   byte      SSH_MSG_USERAUTH_INFO_REQUEST
      S:   string    "Password Expired"
      S:   string    "Your password has expired."
      S:   string    "en-US"
      S:   int       2
      S:   string    "Enter new password: "
      S:   boolean   FALSE
      S:   string    "Enter it again: "
      S:   boolean   FALSE

      [Client prompts user for new password]

      C:   byte      SSH_MSG_USERAUTH_INFO_RESPONSE
      C:   int       2
      C:   string    "newpass"
      C:   string    "newpass"

      S:   byte      SSH_MSG_USERAUTH_INFO_REQUEST
      S:   string    "Password changed"
      S:   string    "Password successfully changed for user23."
      S:   string    "en-US"
      S:   int       0





Cusack & Forssen            Standards Track                     [Page 9]

RFC 4256         SSH Generic Interactive Authentication     January 2006


      [Client displays message to user]

      C:   byte      SSH_MSG_USERAUTH_INFO_RESPONSE
      C:   int       0

      S:   byte      SSH_MSG_USERAUTH_SUCCESS

/. 5.  IANA Considerations
========================================================

   The userauth type "keyboard-interactive" is used for this
   authentication method.

   The following method-specific constants are used with this
   authentication method:

      SSH_MSG_USERAUTH_INFO_REQUEST           60
      SSH_MSG_USERAUTH_INFO_RESPONSE          61

/. 6.  Security Considerations
========================================================

   The authentication protocol and this authentication method depend on
   the security of the underlying SSH transport layer.  Without the
   confidentiality provided therein, any authentication data passed with
   this method is subject to interception.

   The number of client-server exchanges required to complete an
   authentication using this method may be variable.  It is possible
   that an observer may gain valuable information simply by counting
   that number.  For example, an observer may guess that a user's
   password has expired, and with further observation may be able to
   determine the password lifetime imposed by a site's password
   expiration policy.

/. 7.  References
========================================================

/. 7.1.  Normative References
--------------------------------------------------------

   [RFC-2119]      Bradner, S., "Key words for use in RFCs to Indicate
                   Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC-3629]      Yergeau, F., "UTF-8, a transformation format of ISO
                   10646", STD 63, RFC 3629, November 2003.

   [RFC-3066]      Alvestrand, H., "Tags for the Identification of
                   Languages", BCP 47, RFC 3066, January 2001.






Cusack & Forssen            Standards Track                    [Page 10]

RFC 4256         SSH Generic Interactive Authentication     January 2006


   [SSH-ARCH]      Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                   (SSH) Protocol Architecture", RFC 4251, January 2006.

   [SSH-USERAUTH]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                   (SSH) Authentication Protocol", RFC 4252, January
                   2006.

   [SSH-TRANS]     Ylonen, T. and C. Lonvick, Ed., "The Secure Shell
                   (SSH) Transport Layer Protocol", RFC 4253, January
                   2006.

   [SASLPREP]      Zeilenga, K., "SASLprep: Stringprep Profile for User
                   Names and Passwords", RFC 4013, February 2005.

/. 7.2.  Informative References
--------------------------------------------------------

   [PAM]           Samar, V., Schemers, R., "Unified Login With
                   Pluggable Authentication Modules (PAM)", OSF RFC
                   86.0, October 1995.

Authors' Addresses

   Frank Cusack
   savecore.net

   EMail: frank@savecore.net


   Martin Forssen
   AppGate Network Security AB
   Otterhallegatan 2
   SE-411 18 Gothenburg
   SWEDEN

   EMail: maf@appgate.com
















Cusack & Forssen            Standards Track                    [Page 11]

RFC 4256         SSH Generic Interactive Authentication     January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Cusack & Forssen            Standards Track                    [Page 12]

/EXT RFC4335  The Secure Shell (SSH) Session Channel Break Extension
========================================================
https://datatracker.ietf.org/doc/html/rfc4335

Network Working Group                                       J. Galbraith
Request for Comments: 4335                              VanDyke Software
Category: Standards Track                                     P. Remaker
                                                      Cisco Systems, Inc
                                                            January 2006


         The Secure Shell (SSH) Session Channel Break Extension

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   The Session Channel Break Extension provides a means to send a BREAK
   signal over a Secure Shell (SSH) terminal session.

Table of Contents

   1. Introduction ....................................................2
   2. Conventions Used in This Document ...............................2
   3. The Break Request ...............................................3
   4. Security Considerations .........................................4
   5. IANA Considerations .............................................4
   6. References ......................................................4
      6.1. Normative References .......................................4
      6.2. Informative References .....................................5















Galbraith & Remaker         Standards Track                     [Page 1]

RFC 4335                  SSH Break Extension               January 2006


/. 1.  Introduction
========================================================


   The Secure Shell (SSH) [5] session channel provides a mechanism for
   the client-user to interactively enter commands and receive output
   from a remote host while taking advantage of the SSH transport's
   privacy and integrity features.  SSH is increasingly being used to
   replace Telnet for terminal access applications.

   A common application of the Telnet protocol is the "Console Server"
   [7] whereby a Telnet Network Virtual Terminal (NVT) can be connected
   to a physical RS-232/V.24 asynchronous port, making the Telnet NVT
   appear as a locally attached terminal to that port, and making that
   physical port appear as a network-addressable device.  A number of
   major computer equipment vendors provide high-level administrative
   functions through an asynchronous serial port and generally expect
   the attached terminal to be capable of sending a BREAK signal.

   A BREAK signal is defined as the TxD signal being held in a SPACE
   ("0") state for a time greater than a whole character time.  In
   practice, a BREAK signal is typically 250 to 500 ms in length.

   The Telnet protocol furnishes a means to send a "BREAK" signal, which
   RFC 854 [1] defines as "a signal outside the USASCII set which is
   currently given local meaning within many systems".  Console Server
   vendors interpret the TELNET BREAK signal as a physical BREAK signal,
   which can then allow access to the full range of administrative
   functions available on an asynchronous serial console port.

   The lack of a similar facility in the SSH session channel has forced
   users to continue the use of Telnet for the "Console Server"
   function.

/. 2.  Conventions Used in This Document
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [2].

   The "byte", "boolean", "uint32", and "string" data types are defined
   in [3].











Galbraith & Remaker         Standards Track                     [Page 2]

RFC 4335                  SSH Break Extension               January 2006


/. 3.  The Break Request
========================================================


   The following channel-specific request can be sent over a session
   channel (as described in [4]) to request that the remote host perform
   a BREAK operation.

        byte      SSH_MSG_CHANNEL_REQUEST
        uint32    recipient channel
        string    "break"
        boolean   want_reply
        uint32    break-length in milliseconds

   If the BREAK length cannot be controlled by the application receiving
   this request, the BREAK length parameter SHOULD be ignored and the
   default BREAK signal length of the chipset or underlying chipset
   driver SHOULD be sent.

   If the application receiving this request can control the BREAK
   length, the following suggestions are made regarding BREAK duration.
   If a BREAK duration request of greater than 3000 ms is received, it
   SHOULD be interpreted as a request for a 3000 ms BREAK.  This
   safeguard prevents an unreasonably long BREAK request from causing a
   port to become unavailable for as long as 49.7 days while executing
   the BREAK.  Applications that require a longer BREAK may choose to
   ignore this suggestion.  If BREAK duration request of less than 500
   ms is received, it SHOULD be interpreted as a 500 ms BREAK since most
   devices will recognize a BREAK of that length.  Applications that
   require a shorter BREAK may choose to ignore this suggestion.  If the
   BREAK length parameter is 0, the BREAK SHOULD be interpreted as the
   default BREAK signal length of the chipset or underlying chipset
   driver.  If no default exists, 500 ms can be used as the BREAK
   length.

   If the SSH connection does not terminate on a physical serial port,
   the BREAK indication SHOULD be handled in a manner consistent with
   the general use of BREAK as an attention/interrupt signal; for
   instance, a service processor that requires an out-of-band facility
   to get the attention of a system it manages.

   In a case where an SSH connection cascades to another connection, the
   BREAK SHOULD be passed along the cascaded connection.  For example, a
   Telnet session from an SSH shell should carry along an SSH-initiated
   BREAK, and an SSH client initiated from a Telnet connection SHOULD
   pass a BREAK indication from the Telnet connection.







Galbraith & Remaker         Standards Track                     [Page 3]

RFC 4335                  SSH Break Extension               January 2006


   If the 'want_reply' boolean is set, the server MUST reply using an
   SSH_MSG_CHANNEL_SUCCESS or SSH_MSG_CHANNEL_FAILURE [5] message.  If a
   BREAK of any kind was preformed, SSH_MSG_CHANNEL_SUCCESS MUST be
   sent.  If no BREAK was preformed, SSH_MSG_CHANNEL_FAILURE MUST be
   sent.

   This operation SHOULD be supported by any general purpose SSH client.

/. 4.  Security Considerations
========================================================


   Many computer systems treat serial consoles as local and secured, and
   interpret a BREAK signal as an instruction to halt execution of the
   operating system or to enter privileged configuration modes.  Because
   of this, extra care should be taken to ensure that SSH access to
   BREAK-enabled ports are limited to users with appropriate privileges
   to execute such functions.  Alternatively, support for the BREAK
   facility MAY be implemented as configurable on a per-port or
   per-server basis.

   Implementations that literally interpret the BREAK length parameter
   without imposing the suggested BREAK time limit may cause a denial of
   service to or unexpected results from attached devices receiving the
   very long BREAK signal.

/. 5.  IANA Considerations
========================================================


   IANA has assigned the Connection Protocol Channel Request Name
   "break" in accordance with [6].

/. 6.  References
========================================================


6.1.  Normative References
--------------------------------------------------------

   [1]  Postel, J. and J. Reynolds, "Telnet Protocol Specification",
        STD 8, RFC 854, May 1983.

   [2]  Bradner, S., "Key words for use in RFCs to Indicate Requirement
        Levels", BCP 14, RFC 2119, March 1997.

   [3]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH) Protocol
        Architecture", RFC 4251, January 2006.

   [4]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
        Transport Layer Protocol", RFC 4253, January 2006.

   [5]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
        Connection Protocol", RFC 4254, January 2006.




Galbraith & Remaker         Standards Track                     [Page 4]

RFC 4335                  SSH Break Extension               January 2006


   [6]  Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell (SSH)
        Protocol Assigned Numbers", RFC 4250, January 2006.

6.2.  Informative References
--------------------------------------------------------

   [7]  Harris, D., "Greater Scroll of Console Knowledge", March 2004,
        <http://www.conserver.com/consoles/>.

Authors' Addresses

   Joseph Galbraith
   VanDyke Software
   4848 Tramway Ridge Blvd
   Suite 101
   Albuquerque, NM  87111
   US

   Phone: +1 505 332 5700
   EMail: galb-list@vandyke.com


   Phillip Remaker
   Cisco Systems, Inc
   170 West Tasman Drive
   San Jose, CA  95120
   US

   Phone: +1 408 526 8614
   EMail: remaker@cisco.com






















Galbraith & Remaker         Standards Track                     [Page 5]

RFC 4335                  SSH Break Extension               January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Galbraith & Remaker         Standards Track                     [Page 6]



/EXT RFC4344  The Secure Shell (SSH) Transport Layer Encryption Modes
========================================================
https://datatracker.ietf.org/doc/html/rfc4344

Network Working Group                                         M. Bellare
Request for Comments: 4344                                      T. Kohno
Category: Standards Track                                   UC San Diego
                                                           C. Namprempre
                                                    Thammasat University
                                                            January 2006


        The Secure Shell (SSH) Transport Layer Encryption Modes

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   Researchers have discovered that the authenticated encryption portion
   of the current SSH Transport Protocol is vulnerable to several
   attacks.

   This document describes new symmetric encryption methods for the
   Secure Shell (SSH) Transport Protocol and gives specific
   recommendations on how frequently SSH implementations should rekey.

Table of Contents

   1. Introduction ....................................................2
   2. Conventions Used in This Document ...............................2
   3. Rekeying ........................................................2
      3.1. First Rekeying Recommendation ..............................3
      3.2. Second Rekeying Recommendation .............................3
   4. Encryption Modes ................................................3
   5. IANA Considerations .............................................6
   6. Security Considerations .........................................6
      6.1. Rekeying Considerations ....................................7
      6.2. Encryption Method Considerations ...........................8
   Normative References ...............................................9
   Informative References ............................................10





Bellare, et al.             Standards Track                     [Page 1]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


/. 1.  Introduction
========================================================


   The symmetric portion of the SSH Transport Protocol was designed to
   provide both privacy and integrity of encapsulated data.  Researchers
   ([DAI,BKN1,BKN2]) have, however, identified several security problems
   with the symmetric portion of the SSH Transport Protocol, as
   described in [RFC4253].  For example, the encryption mode specified
   in [RFC4253] is vulnerable to a chosen-plaintext privacy attack.
   Additionally, if not rekeyed frequently enough, the SSH Transport
   Protocol may leak information about payload data.  This latter
   property is true regardless of what encryption mode is used.

   In [BKN1,BKN2], Bellare, Kohno, and Namprempre show how to modify the
   symmetric portion of the SSH Transport Protocol so that it provably
   preserves privacy and integrity against chosen-plaintext, chosen-
   ciphertext, and reaction attacks.  This document instantiates the
   recommendations described in [BKN1,BKN2].

/. 2.  Conventions Used in This Document
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC2119].

   The used data types and terminology are specified in the architecture
   document [RFC4251].

   The SSH Transport Protocol is specified in the transport document
   [RFC4253].

/. 3.  Rekeying
========================================================


   Section 9 of [RFC4253] suggests that SSH implementations rekey after
   every gigabyte of transmitted data.  [RFC4253] does not, however,
   discuss all the problems that could arise if an SSH implementation
   does not rekey frequently enough.  This section serves to strengthen
   the suggestion in [RFC4253] by giving firm upper bounds on the
   tolerable number of encryptions between rekeying operations.  In
   Section 6, we discuss the motivation for these rekeying
   recommendations in more detail.

   This section makes two recommendations.  Informally, the first
   recommendation is intended to protect against possible information
   leakage through the MAC tag, and the second recommendation is
   intended to protect against possible information leakage through the
   block cipher.  Note that, depending on the block length of the





Bellare, et al.             Standards Track                     [Page 2]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


   underlying block cipher and the length of the encrypted packets, the
   first recommendation may supersede the second recommendation, or vice
   versa.

3.1.  First Rekeying Recommendation
--------------------------------------------------------

   Because of possible information leakage through the MAC tag, SSH
   implementations SHOULD rekey at least once every 2**32 outgoing
   packets.  More explicitly, after a key exchange, an SSH
   implementation SHOULD NOT send more than 2**32 packets before
   rekeying again.

   SSH implementations SHOULD also attempt to rekey before receiving
   more than 2**32 packets since the last rekey operation.  The
   preferred way to do this is to rekey after receiving more than 2**31
   packets since the last rekey operation.

3.2.  Second Rekeying Recommendation
--------------------------------------------------------

   Because of a birthday property of block ciphers and some modes of
   operation, implementations must be careful not to encrypt too many
   blocks with the same encryption key.

   Let L be the block length (in bits) of an SSH encryption method's
   block cipher (e.g., 128 for AES).  If L is at least 128, then, after
   rekeying, an SSH implementation SHOULD NOT encrypt more than 2**(L/4)
   blocks before rekeying again.  If L is at least 128, then SSH
   implementations should also attempt to force a rekey before receiving
   more than 2**(L/4) blocks.  If L is less than 128 (which is the case
   for older ciphers such as 3DES, Blowfish, CAST-128, and IDEA), then,
   although it may be too expensive to rekey every 2**(L/4) blocks, it
   is still advisable for SSH implementations to follow the original
   recommendation in [RFC4253]: rekey at least once for every gigabyte
   of transmitted data.

   Note that if L is less than or equal to 128, then the recommendation
   in this subsection supersedes the recommendation in Section 3.1.  If
   an SSH implementation uses a block cipher with a larger block size
   (e.g., Rijndael with 256-bit blocks), then the recommendations in
   Section 3.1 may supersede the recommendations in this subsection
   (depending on the lengths of the packets).

/. 4.  Encryption Modes
========================================================


   This document describes new encryption methods for use with the SSH
   Transport Protocol.  These encryption methods are in addition to the
   encryption methods described in Section 6.3 of [RFC4253].




Bellare, et al.             Standards Track                     [Page 3]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


   Recall from [RFC4253] that the encryption methods in each direction
   of an SSH connection MUST run independently of each other and that,
   when encryption is in effect, the packet length, padding length,
   payload, and padding fields of each packet MUST be encrypted with the
   chosen method.  Further recall that the total length of the
   concatenation of the packet length, padding length, payload, and
   padding MUST be a multiple of the cipher's block size when the
   cipher's block size is greater than or equal to 8 bytes (which is the
   case for all of the following methods).

   This document describes the following new methods:

     aes128-ctr       RECOMMENDED       AES (Rijndael) in SDCTR mode,
                                        with 128-bit key
     aes192-ctr       RECOMMENDED       AES with 192-bit key
     aes256-ctr       RECOMMENDED       AES with 256-bit key
     3des-ctr         RECOMMENDED       Three-key 3DES in SDCTR mode
     blowfish-ctr     OPTIONAL          Blowfish in SDCTR mode
     twofish128-ctr   OPTIONAL          Twofish in SDCTR mode,
                                        with 128-bit key
     twofish192-ctr   OPTIONAL          Twofish with 192-bit key
     twofish256-ctr   OPTIONAL          Twofish with 256-bit key
     serpent128-ctr   OPTIONAL          Serpent in SDCTR mode, with
                                        128-bit key
     serpent192-ctr   OPTIONAL          Serpent with 192-bit key
     serpent256-ctr   OPTIONAL          Serpent with 256-bit key
     idea-ctr         OPTIONAL          IDEA in SDCTR mode
     cast128-ctr      OPTIONAL          CAST-128 in SDCTR mode,
                                        with 128-bit key

   The label <cipher>-ctr indicates that the block cipher <cipher> is to
   be used in "stateful-decryption counter" (SDCTR) mode.  Let L be the
   block length of <cipher> in bits.  In stateful-decryption counter
   mode, both the sender and the receiver maintain an internal L-bit
   counter X.  The initial value of X should be the initial IV (as
   computed in Section 7.2 of [RFC4253]) interpreted as an L-bit
   unsigned integer in network-byte-order.  If X=(2**L)-1, then
   "increment X" has the traditional semantics of "set X to 0."  We use
   the notation <X> to mean "convert X to an L-bit string in network-
   byte-order."  Naturally, implementations may differ in how the
   internal value X is stored.  For example, implementations may store X
   as multiple unsigned 32-bit counters.

   To encrypt a packet P=P1||P2||...||Pn (where P1, P2, ..., Pn are each
   blocks of length L), the encryptor first encrypts <X> with <cipher>
   to obtain a block B1.  The block B1 is then XORed with P1 to generate
   the ciphertext block C1.  The counter X is then incremented, and the
   process is repeated for each subsequent block in order to generate



Bellare, et al.             Standards Track                     [Page 4]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


   the entire ciphertext C=C1||C2||...||Cn corresponding to the packet
   P.  Note that the counter X is not included in the ciphertext.  Also
   note that the keystream can be pre-computed and that encryption is
   parallelizable.

   To decrypt a ciphertext C=C1||C2||...||Cn, the decryptor (who also
   maintains its own copy of X) first encrypts its copy of <X> with
   <cipher> to generate a block B1 and then XORs B1 to C1 to get P1.
   The decryptor then increments its copy of the counter X and repeats
   the above process for each block to obtain the plaintext packet
   P=P1||P2||...||Pn.  As before, the keystream can be pre-computed, and
   decryption is parallelizable.

   The "aes128-ctr" method uses AES (the Advanced Encryption Standard,
   formerly Rijndael) with 128-bit keys [AES].  The block size is 16
   bytes.

      At this time, it appears likely that a future specification will
      promote aes128-ctr to be REQUIRED; implementation of this
      algorithm is very strongly encouraged.

   The "aes192-ctr" method uses AES with 192-bit keys.

   The "aes256-ctr" method uses AES with 256-bit keys.

   The "3des-ctr" method uses three-key triple-DES (encrypt-decrypt-
   encrypt), where the first 8 bytes of the key are used for the first
   encryption, the next 8 bytes for the decryption, and the following 8
   bytes for the final encryption.  This requires 24 bytes of key data
   (of which 168 bits are actually used).  The block size is 8 bytes.
   This algorithm is defined in [DES].

   The "blowfish-ctr" method uses Blowfish with 256-bit keys [SCHNEIER].
   The block size is 8 bytes.  (Note that "blowfish-cbc" from [RFC4253]
   uses 128-bit keys.)

   The "twofish128-ctr" method uses Twofish with 128-bit keys [TWOFISH].
   The block size is 16 bytes.

   The "twofish192-ctr" method uses Twofish with 192-bit keys.

   The "twofish256-ctr" method uses Twofish with 256-bit keys.

   The "serpent128-ctr" method uses the Serpent block cipher [SERPENT]
   with 128-bit keys.  The block size is 16 bytes.

   The "serpent192-ctr" method uses Serpent with 192-bit keys.




Bellare, et al.             Standards Track                     [Page 5]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


   The "serpent256-ctr" method uses Serpent with 256-bit keys.

   The "idea-ctr" method uses the IDEA cipher [SCHNEIER].  The block
   size is 8 bytes.

   The "cast128-ctr" method uses the CAST-128 cipher with 128-bit keys
   [RFC2144].  The block size is 8 bytes.

/. 5.  IANA Considerations
========================================================


   The thirteen encryption algorithm names defined in Section 4 have
   been added to the Secure Shell Encryption Algorithm Name registry
   established by Section 4.11.1 of [RFC4250].

/. 6.  Security Considerations
========================================================


   This document describes additional encryption methods and
   recommendations for the SSH Transport Protocol [RFC4253].
   [BKN1,BKN2] prove that if an SSH application incorporates the methods
   and recommendations described in this document, then the symmetric
   cryptographic portion of that application will resist a large class
   of privacy and integrity attacks.

   This section is designed to help implementors understand the
   security-related motivations for, as well as possible consequences of
   deviating from, the methods and recommendations described in this
   document.  Additional motivation and discussion, as well as proofs of
   security, appear in the research papers [BKN1,BKN2].

   Please note that the notion of "prove" in the context of [BKN1,BKN2]
   is that of practice-oriented reductionist security: if an attacker is
   able to break the symmetric portion of the SSH Transport Protocol
   using a certain type of attack (e.g., a chosen-ciphertext attack),
   then the attacker will also be able to break one of the transport
   protocol's underlying components (e.g., the underlying block cipher
   or MAC).  If we make the reasonable assumption that the underlying
   components (such as AES and HMAC-SHA1) are secure, then the attacker
   against the symmetric portion of the SSH protocol cannot be very
   successful (since otherwise there would be a contradiction).  Please
   see [BKN1,BKN2] for details.  In particular, attacks are not
   impossible, just extremely improbable (unless the building blocks,
   like AES, are insecure).

   Note also that cryptography often plays only a small (but critical)
   role in an application's overall security.  In the case of the SSH
   Transport Protocol, even though an application might implement the
   symmetric portion of the SSH protocol exactly as described in this
   document, the application may still be vulnerable to non-protocol-



Bellare, et al.             Standards Track                     [Page 6]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


   based attacks (as an egregious example, an application might save
   cryptographic keys in cleartext to an unprotected file).
   Consequently, even though the methods described herein come with
   proofs of security, developers must still execute caution when
   developing applications that implement these methods.

6.1.  Rekeying Considerations
--------------------------------------------------------

   Section 3 of this document makes two rekeying recommendations: (1)
   rekey at least once every 2**32 packets, and (2) rekey after a
   certain number of encrypted blocks (e.g., 2**(L/4) blocks if the
   block cipher's block length L is at least 128 bits).  The motivations
   for recommendations (1) and (2) are different, and we consider each
   recommendation in turn.  Briefly, (1) is designed to protect against
   information leakage through the SSH protocol's underlying MAC, and
   (2) is designed to protect against information leakage through the
   SSH protocol's underlying encryption scheme.  Please note that,
   depending on the encryption method's block length L and the number of
   blocks encrypted per packet, recommendation (1) may supersede
   recommendation (2) or vice versa.

   Recommendation (1) states that SSH implementations should rekey at
   least once every 2**32 packets.  If more than 2**32 packets are
   encrypted and MACed by the SSH Transport Protocol between rekeyings,
   then the SSH Transport Protocol may become vulnerable to replay and
   re-ordering attacks.  This means that an adversary may be able to
   convince the receiver to accept the same message more than once or to
   accept messages out of order.  Additionally, the underlying MAC may
   begin to leak information about the protocol's payload data.  In more
   detail, an adversary looks for a collision between the MACs
   associated to two packets that were MACed with the same 32-bit
   sequence number (see Section 4.4 of [RFC4253]).  If a collision is
   found, then the payload data associated with those two ciphertexts is
   probably identical.  Note that this problem occurs regardless of how
   secure the underlying encryption method is.  Also note that although
   compressing payload data before encrypting and MACing and the use of
   random padding may reduce the risk of information leakage through the
   underlying MAC, compression and the use of random padding will not
   prevent information leakage.  Implementors who decide not to rekey at
   least once every 2**32 packets should understand these issues.  These
   issues are discussed further in [BKN1,BKN2].

   One alternative to recommendation (1) would be to make the SSH
   Transport Protocol's sequence number more than 32 bits long.  This
   document does not suggest increasing the length of the sequence
   number because doing so could hinder interoperability with older
   versions of the SSH protocol.  Another alternative to recommendation
   (1) would be to switch from basic HMAC to a another MAC, such as a



Bellare, et al.             Standards Track                     [Page 7]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


   MAC that has its own internal counter.  Because of the 32-bit counter
   already present in the protocol, such a counter would only need to be
   incremented once every 2**32 packets.

   Recommendation (2) states that SSH implementations should rekey
   before encrypting more than 2**(L/4) blocks with the same key
   (assuming L is at least 128).  This recommendation is designed to
   minimize the risk of birthday attacks against the encryption method's
   underlying block cipher.  For example, there is a theoretical privacy
   attack against stateful-decryption counter mode if an adversary is
   allowed to encrypt approximately 2**(L/2) messages with the same key.
   It is because of these birthday attacks that implementors are highly
   encouraged to use secure block ciphers with large block lengths.
   Additionally, recommendation (2) is designed to protect an encryptor
   from encrypting more than 2**L blocks with the same key.  The
   motivation here is that, if an encryptor were to use SDCTR mode to
   encrypt more than 2**L blocks with the same key, then the encryptor
   would reuse keystream, and the reuse of keystream can lead to serious
   privacy attacks [SCHNEIER].

6.2.  Encryption Method Considerations
--------------------------------------------------------

   Researchers have shown that the original CBC-based encryption methods
   in [RFC4253] are vulnerable to chosen-plaintext privacy attacks
   [DAI,BKN1,BKN2].  The new stateful-decryption counter mode encryption
   methods described in Section 4 of this document were designed to be
   secure replacements to the original encryption methods described in
   [RFC4253].

   Many people shy away from counter mode-based encryption schemes
   because, when used incorrectly (such as when the keystream is allowed
   to repeat), counter mode can be very insecure.  Fortunately, the
   common concerns with counter mode do not apply to SSH because of the
   rekeying recommendations and because of the additional protection
   provided by the transport protocol's MAC.  This discussion is
   formalized with proofs of security in [BKN1,BKN2].

   As an additional note, when one of the stateful-decryption counter
   mode encryption methods (Section 4) is used, then the padding
   included in an SSH packet (Section 4 of [RFC4253]) need not be (but
   can still be) random.  This eliminates the need to generate
   cryptographically secure pseudorandom bytes for each packet.

   One property of counter mode encryption is that it does not require
   that messages be padded to a multiple of the block cipher's block
   length.  Although not padding messages can reduce the protocol's
   network consumption, this document requires that padding be a
   multiple of the block cipher's block length in order to (1) not alter



Bellare, et al.             Standards Track                     [Page 8]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


   the packet description in [RFC4253] and (2) not leak precise
   information about the length of the packet's payload data.  (Although
   there may be some network savings from padding to only 8-bytes even
   if the block cipher uses 16-byte blocks, because of (1) we do not
   make that recommendation here.)

   In addition to stateful-decryption counter mode, [BKN1,BKN2] describe
   other provably secure encryption methods for use with the SSH
   Transport Protocol.  The stateful-decryption counter mode methods in
   Section 4 are, however, the preferred alternatives to the insecure
   methods in [RFC4253] because stateful-decryption counter mode is the
   most efficient (in terms of both network consumption and the number
   of required cryptographic operations per packet).

Normative References

   [AES]       National Institute of Standards and Technology, "Advanced
               Encryption Standard (AES)", Federal Information
               Processing Standards Publication 197, November 2001.

   [DES]       National Institute of Standards and Technology, "Data
               Encryption Standard (DES)", Federal Information
               Processing Standards Publication 46-3, October 1999.

   [RFC2119]   Bradner, S., "Key words for use in RFCs to Indicate
               Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC2144]   Adams, C., "The CAST-128 Encryption Algorithm", RFC 2144,
               May 1997.

   [RFC4250]   Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell (SSH)
               Protocol Assigned Numbers", RFC 4250, January 2006.

   [RFC4251]   Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
               Protocol Architecture", RFC 4251, January 2006.

   [RFC4253]   Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
               Transport Layer Protocol", RFC 4253, January 2006.

   [SCHNEIER]  Schneier, B., "Applied Cryptography Second Edition:
               Protocols algorithms and source in code in C", Wiley,
               1996.

   [SERPENT]   Anderson, R., Biham, E., and Knudsen, L., "Serpent: A
               proposal for the Advanced Encryption Standard", NIST AES
               Proposal, 1998.





Bellare, et al.             Standards Track                     [Page 9]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


   [TWOFISH]   Schneier, B., et al., "The Twofish Encryptions Algorithm:
               A 128-bit block cipher, 1st Edition", Wiley, 1999.

Informative References

   [BKN1]      Bellare, M., Kohno, T., and Namprempre, C.,
               "Authenticated Encryption in SSH: Provably Fixing the SSH
               Binary Packet Protocol", Ninth ACM Conference on Computer
               and Communications Security, 2002.

   [BKN2]      Bellare, M., Kohno, T., and Namprempre, C., "Breaking and
               Provably Repairing the SSH Authenticated Encryption
               Scheme: A Case Study of the Encode-then-Encrypt-and-MAC
               Paradigm", ACM Transactions on Information and System
               Security, 7(2), May 2004.

   [DAI]       Dai, W., "An Attack Against SSH2 Protocol", Email to the
               ietf-ssh@netbsd.org email list, 2002.

































Bellare, et al.             Standards Track                    [Page 10]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


Authors' Addresses

   Mihir Bellare
   Department of Computer Science and Engineering
   University of California at San Diego
   9500 Gilman Drive, MC 0404
   La Jolla, CA 92093-0404

   Phone: +1 858-534-8833
   EMail: mihir@cs.ucsd.edu


   Tadayoshi Kohno
   Department of Computer Science and Engineering
   University of California at San Diego
   9500 Gilman Drive, MC 0404
   La Jolla, CA 92093-0404

   Phone: +1 858-534-8833
   EMail: tkohno@cs.ucsd.edu


   Chanathip Namprempre
   Thammasat University
   Faculty of Engineering
   Electrical Engineering Department
   Rangsit Campus, Klong Luang
   Pathumthani, Thailand 12121

   EMail: meaw@alum.mit.edu





















Bellare, et al.             Standards Track                    [Page 11]

RFC 4344          SSH Transport Layer Encryption Modes      January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Bellare, et al.             Standards Track                    [Page 12]

/EXT RFC4345  Improved Arcfour Modes for the Secure Shell (SSH) Transport Layer Protocol
========================================================
https://datatracker.ietf.org/doc/html/rfc4345

Network Working Group                                          B. Harris
Request for Comments: 4345                                  January 2006
Category: Standards Track


                      Improved Arcfour Modes for
            the Secure Shell (SSH) Transport Layer Protocol

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   This document specifies methods of using the Arcfour cipher in the
   Secure Shell (SSH) protocol that mitigate the weakness of the
   cipher's key-scheduling algorithm.

/. 1.  Introduction
========================================================


   Secure Shell (SSH) [RFC4251] is a secure remote-login protocol.  It
   allows for the use of an extensible variety of symmetric cipher
   algorithms to provide confidentiality for data in transit.  One of
   the algorithms specified in the base protocol is "arcfour", which
   specifies the use of Arcfour (also known as RC4), a fast stream
   cipher.  As [RFC4253] says, though, "Arcfour (and RC4) has problems
   with weak keys, and should be used with caution."  These problems are
   described in more detail in [MANTIN01], along with a recommendation
   to discard the first 1536 bytes of keystream so as to ensure that the
   cipher's internal state is thoroughly mixed.  This document specifies
   new cipher algorithms for SSH that follow this recommendation.

/. 2.  Conventions Used in this Document
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC2119].






Harris                      Standards Track                     [Page 1]

RFC 4345             Improved Arcfour Modes for SSH         January 2006


/. 3.  Applicability Statement
========================================================


   Implementations of Arcfour are typically slightly faster and much
   smaller than those of any other encryption algorithm currently
   defined for SSH.  This must be balanced, though, against the known
   security problems with Arcfour described in Section 5.  In most
   cases, where speed and code size are not critical issues, the
   algorithms specified by [RFC4344] should be used instead.

/. 4.  Algorithm Definitions
========================================================


   The "arcfour128" algorithm is the RC4 cipher, as described in
   [SCHNEIER], using a 128-bit key.  The first 1536 bytes of keystream
   generated by the cipher MUST be discarded, and the first byte of the
   first encrypted packet MUST be encrypted using the 1537th byte of
   keystream.

   The "arcfour256" algorithm is the same, but uses a 256-bit key.

/. 5.  Security Considerations
========================================================


   The security considerations in [RFC4251] apply.

   The discarded bytes of keystream MUST be kept secret and MUST NOT be
   transmitted over the network.  The contents of these bytes could
   reveal information about the key.

   There are two classes of attack on Arcfour described in [MIRONOV].
   Strong distinguishers distinguish an Arcfour keystream from
   randomness at the start of the stream and are defended against by the
   algorithm defined in this document.  Weak distinguishers can operate
   on any part of the keystream, and the best ones, described in [FMcG]
   and [MANTIN05], can use data from multiple, different keystreams.  A
   consequence of this is that encrypting the same data (for instance, a
   password) sufficiently many times in separate Arcfour keystreams can
   be sufficient to leak information about it to an adversary.  It is
   thus RECOMMENDED that Arcfour (either in the form described here or
   that described in [RFC4251]) not be used for high-volume password-
   authenticated connections.

/. 6.  IANA Considerations
========================================================


   The IANA has assigned the Encryption Algorithm Names "arcfour128" and
   "arcfour256" in accordance with [RFC4250].







Harris                      Standards Track                     [Page 2]

RFC 4345             Improved Arcfour Modes for SSH         January 2006


/. 7.  References
========================================================


7.1.  Normative References
--------------------------------------------------------

   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC4250]  Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Assigned Numbers", RFC 4250, January 2006.

   [RFC4251]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Architecture", RFC 4251, January 2006.

   [RFC4253]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Transport Layer Protocol", RFC 4253, January 2006

   [RFC4344]  Bellare, M., Kohno, T., and C. Namprempre, "The Secure
              Shell (SSH) Transport Layer Encryption Modes", RFC 4344,
              January 2006.

   [SCHNEIER] Schneier, B., "Applied Cryptography Second Edition:
              protocols algorithms and source in code in C", John Wiley
              and Sons, New York, NY, 1996.

7.2.  Informative References
--------------------------------------------------------

   [FMcG]     Fluhrer, S. and D. McGrew, "Statistical Analysis of the
              Alleged RC4 Keystream Generator", Fast Software
              Encryption:  7th International Workshop, FSE 2000, April
              2000, <http://www.mindspring.com/~dmcgrew/rc4-03.pdf>.

   [MANTIN01] Mantin, I., "Analysis of the Stream Cipher RC4", M.Sc.
              Thesis, Weizmann Institute of Science, 2001, <http://
              www.wisdom.weizmann.ac.il/~itsik/RC4/Papers/Mantin1.zip>.

   [MIRONOV]  Mironov, I., "(Not So) Random Shuffles of RC4", Advances
              in Cryptology -- CRYPTO 2002: 22nd Annual International
              Cryptology Conference, August 2002,
              <http://eprint.iacr.org/2002/067.pdf>.

   [MANTIN05] Mantin, I., "Predicting and Distinguishing Attacks on RC4
              Keystream Generator", Advances in Cryptology -- EUROCRYPT
              2005: 24th Annual International Conference on the Theory
              and Applications of Cryptographic Techniques, May 2005.







Harris                      Standards Track                     [Page 3]

RFC 4345             Improved Arcfour Modes for SSH         January 2006


Author's Address

   Ben Harris
   2a Eachard Road
   CAMBRIDGE
   CB3 0HY
   UNITED KINGDOM

   EMail: bjh21@bjh21.me.uk

Trademark Notice

   "RC4" and "SSH" are registered trademarks in the United States.






































Harris                      Standards Track                     [Page 4]

RFC 4345             Improved Arcfour Modes for SSH         January 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Harris                      Standards Track                     [Page 5]


/EXT RFC4419  Diffie-Hellman Group Exchange for the Secure Shell (SSH) Transport Layer Protocol
========================================================
https://datatracker.ietf.org/doc/html/rfc4419


Network Working Group                                          M. Friedl
Request for Comments: 4419                                     N. Provos
Category: Standards Track                                     W. Simpson
                                                              March 2006


                   Diffie-Hellman Group Exchange for
            the Secure Shell (SSH) Transport Layer Protocol

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   This memo describes a new key exchange method for the Secure Shell
   (SSH) protocol.  It allows the SSH server to propose new groups on
   which to perform the Diffie-Hellman key exchange to the client.  The
   proposed groups need not be fixed and can change with time.

/. 1.  Overview and Rationale
========================================================


   SSH [RFC4251] is a very common protocol for secure remote login on
   the Internet.  Currently, SSH performs the initial key exchange using
   the "diffie-hellman-group1-sha1" method [RFC4253].  This method
   prescribes a fixed group on which all operations are performed.

   The Diffie-Hellman key exchange provides a shared secret that cannot
   be determined by either party alone.  Furthermore, the shared secret
   is known only to the participant parties.  In SSH, the key exchange
   is signed with the host key to provide host authentication.

   The security of the Diffie-Hellman key exchange is based on the
   difficulty of solving the Discrete Logarithm Problem (DLP).  Since we
   expect that the SSH protocol will be in use for many years in the
   future, we fear that extensive precomputation and more efficient
   algorithms to compute the discrete logarithm over a fixed group might
   pose a security threat to the SSH protocol.





Friedl, et al.              Standards Track                     [Page 1]

RFC 4419                 SSH DH Group Exchange                March 2006


   The ability to propose new groups will reduce the incentive to use
   precomputation for more efficient calculation of the discrete
   logarithm.  The server can constantly compute new groups in the
   background.

/. 2.  Requirements Notation
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC2119].

/. 3.  Diffie-Hellman Group and Key Exchange
========================================================


   The server keeps a list of safe primes and corresponding generators
   that it can select from.  A prime p is safe if p = 2q + 1 and q is
   prime.  New primes can be generated in the background.

   The generator g should be chosen such that the order of the generated
   subgroup does not factor into small primes; that is, with p = 2q + 1,
   the order has to be either q or p - 1.  If the order is p - 1, then
   the exponents generate all possible public values, evenly distributed
   throughout the range of the modulus p, without cycling through a
   smaller subset.  Such a generator is called a "primitive root" (which
   is trivial to find when p is "safe").

   The client requests a modulus from the server indicating the
   preferred size.  In the following description (C is the client, S is
   the server, the modulus p is a large safe prime, and g is a generator
   for a subgroup of GF(p), min is the minimal size of p in bits that is
   acceptable to the client, n is the size of the modulus p in bits that
   the client would like to receive from the server, max is the maximal
   size of p in bits that the client can accept, V_S is S's version
   string, V_C is C's version string, K_S is S's public host key, I_C is
   C's KEXINIT message, and I_S is S's KEXINIT message that has been
   exchanged before this part begins):

   1.  C sends "min || n || max" to S, indicating the minimal acceptable
       group size, the preferred size of the group, and the maximal
       group size in bits the client will accept.

   2.  S finds a group that best matches the client's request, and sends
       "p || g" to C.

   3.  C generates a random number x, where 1 < x < (p-1)/2.  It
       computes e = g^x mod p, and sends "e" to S.






Friedl, et al.              Standards Track                     [Page 2]

RFC 4419                 SSH DH Group Exchange                March 2006


   4.  S generates a random number y, where 0 < y < (p-1)/2, and
       computes f = g^y mod p.  S receives "e".  It computes K = e^y mod
       p, H = hash(V_C || V_S || I_C || I_S || K_S || min || n || max ||
       p || g || e || f || K) (these elements are encoded according to
       their types; see below), and signature s on H with its private
       host key.  S sends "K_S || f || s" to C.  The signing operation
       may involve a second hashing operation.

   5.  C verifies that K_S really is the host key for S (e.g., using
       certificates or a local database to obtain the public key).  C is
       also allowed to accept the key without verification; however,
       doing so will render the protocol insecure against active attacks
       (but may be desirable for practical reasons in the short term in
       many environments).  C then computes K = f^x mod p, H = hash(V_C
       || V_S || I_C || I_S || K_S || min || n || max || p || g || e ||
       f || K), and verifies the signature s on H.

   Servers and clients SHOULD support groups with a modulus length of k
   bits, where 1024 <= k <= 8192.  The recommended values for min and
   max are 1024 and 8192, respectively.

   Either side MUST NOT send or accept e or f values that are not in the
   range [1, p-1].  If this condition is violated, the key exchange
   fails.  To prevent confinement attacks, they MUST accept the shared
   secret K only if 1 < K < p - 1.

   The server should return the smallest group it knows that is larger
   than the size the client requested.  If the server does not know a
   group that is larger than the client request, then it SHOULD return
   the largest group it knows.  In all cases, the size of the returned
   group SHOULD be at least 1024 bits.

   This is implemented with the following messages.  The hash algorithm
   for computing the exchange hash is defined by the method name, and is
   called HASH.  The public key algorithm for signing is negotiated with
   the KEXINIT messages.

   First, the client sends:

     byte    SSH_MSG_KEY_DH_GEX_REQUEST
     uint32  min, minimal size in bits of an acceptable group
     uint32  n, preferred size in bits of the group the server will send
     uint32  max, maximal size in bits of an acceptable group








Friedl, et al.              Standards Track                     [Page 3]

RFC 4419                 SSH DH Group Exchange                March 2006


   The server responds with

     byte    SSH_MSG_KEX_DH_GEX_GROUP
     mpint   p, safe prime
     mpint   g, generator for subgroup in GF(p)

   The client responds with:

     byte    SSH_MSG_KEX_DH_GEX_INIT
     mpint   e

   The server responds with:

     byte    SSH_MSG_KEX_DH_GEX_REPLY
     string  server public host key and certificates (K_S)
     mpint   f
     string  signature of H

   The hash H is computed as the HASH hash of the concatenation of the
   following:

     string  V_C, the client's version string (CR and NL excluded)
     string  V_S, the server's version string (CR and NL excluded)
     string  I_C, the payload of the client's SSH_MSG_KEXINIT
     string  I_S, the payload of the server's SSH_MSG_KEXINIT
     string  K_S, the host key
     uint32  min, minimal size in bits of an acceptable group
     uint32  n, preferred size in bits of the group the server will send
     uint32  max, maximal size in bits of an acceptable group
     mpint   p, safe prime
     mpint   g, generator for subgroup
     mpint   e, exchange value sent by the client
     mpint   f, exchange value sent by the server
     mpint   K, the shared secret

   This value is called the exchange hash, and it is used to
   authenticate the key exchange as per [RFC4253].

/. 4.  Key Exchange Methods
========================================================


   This document defines two new key exchange methods:
   "diffie-hellman-group-exchange-sha1" and
   "diffie-hellman-group-exchange-sha256".








Friedl, et al.              Standards Track                     [Page 4]

RFC 4419                 SSH DH Group Exchange                March 2006


4.1.  diffie-hellman-group-exchange-sha1
--------------------------------------------------------

   The "diffie-hellman-group-exchange-sha1" method specifies
   Diffie-Hellman Group and Key Exchange with SHA-1 [FIPS-180-2] as
   HASH.

4.2.  diffie-hellman-group-exchange-sha256
--------------------------------------------------------

   The "diffie-hellman-group-exchange-sha256" method specifies
   Diffie-Hellman Group and Key Exchange with SHA-256 [FIPS-180-2] as
   HASH.

   Note that the hash used in key exchange (in this case, SHA-256) must
   also be used in the key derivation pseudo-random function (PRF), as
   per the requirement in the "Output from Key Exchange" section in
   [RFC4253].

/. 5.  Summary of Message Numbers
========================================================


   The following message numbers have been defined in this document.
   They are in a name space private to this document and not assigned by
   IANA.

     #define SSH_MSG_KEX_DH_GEX_REQUEST_OLD  30
     #define SSH_MSG_KEX_DH_GEX_REQUEST      34
     #define SSH_MSG_KEX_DH_GEX_GROUP        31
     #define SSH_MSG_KEX_DH_GEX_INIT         32
     #define SSH_MSG_KEX_DH_GEX_REPLY        33

   SSH_MSG_KEX_DH_GEX_REQUEST_OLD is used for backward compatibility.
   Instead of sending "min || n || max", the client only sends "n".  In
   addition, the hash is calculated using only "n" instead of "min || n
   || max".

   The numbers 30-49 are key exchange specific and may be redefined by
   other kex methods.

/. 6.  Implementation Notes
========================================================


6.1.  Choice of Generator
--------------------------------------------------------

   One useful technique is to select the generator, and then limit the
   modulus selection sieve to primes with that generator:

      2   when p (mod 24) = 11.
      5   when p (mod 10) = 3 or 7.





Friedl, et al.              Standards Track                     [Page 5]

RFC 4419                 SSH DH Group Exchange                March 2006


   It is recommended to use 2 as generator, because it improves
   efficiency in multiplication performance.  It is usable even when it
   is not a primitive root, as it still covers half of the space of
   possible residues.

6.2.  Private Exponents
--------------------------------------------------------

   To increase the speed of the key exchange, both client and server may
   reduce the size of their private exponents.  It should be at least
   twice as long as the key material that is generated from the shared
   secret.  For more details, see the paper by van Oorschot and Wiener
   [VAN-OORSCHOT].

/. 7.  Security Considerations
========================================================


   This protocol aims to be simple and uses only well-understood
   primitives.  This encourages acceptance by the community and allows
   for ease of implementation, which hopefully leads to a more secure
   system.

   The use of multiple moduli inhibits a determined attacker from
   precalculating moduli exchange values, and discourages dedication of
   resources for analysis of any particular modulus.

   It is important to employ only safe primes as moduli, as they allow
   us to find a generator g so that the order of the generated subgroup
   does not factor into small primes, that is, with p = 2q + 1, the
   order has to be either q or p - 1.  If the order is p - 1, then the
   exponents generate all possible public values, evenly distributed
   throughout the range of the modulus p, without cycling through a
   smaller subset.  Van Oorshot and Wiener note that using short private
   exponents with a random prime modulus p makes the computation of the
   discrete logarithm easy [VAN-OORSCHOT].  However, they also state
   that this problem does not apply to safe primes.

   The least significant bit of the private exponent can be recovered
   when the modulus is a safe prime [MENEZES].  However, this is not a
   problem if the size of the private exponent is big enough.  Related
   to this, Waldvogel and Massey note: When private exponents are chosen
   independently and uniformly at random from {0,...,p-2}, the key
   entropy is less than 2 bits away from the maximum, lg(p-1)
   [WALDVOGEL].

   The security considerations in [RFC4251] also apply to this key
   exchange method.






Friedl, et al.              Standards Track                     [Page 6]

RFC 4419                 SSH DH Group Exchange                March 2006


/. 8.  Acknowledgements
========================================================


   The document is derived in part from "SSH Transport Layer Protocol"
   [RFC4253] by T. Ylonen, T. Kivinen, M. Saarinen, T.  Rinne, and S.
   Lehtinen.

   Markku-Juhani Saarinen pointed out that the least significant bit of
   the private exponent can be recovered efficiently when using safe
   primes and a subgroup with an order divisible by two.

   Bodo Moeller suggested that the server send only one group, reducing
   the complexity of the implementation and the amount of data that
   needs to be exchanged between client and server.






































Friedl, et al.              Standards Track                     [Page 7]

RFC 4419                 SSH DH Group Exchange                March 2006


Appendix A:  Generation of Safe Primes

   The "Handbook of Applied Cryptography" [MENEZES] lists the following
   algorithm to generate a k-bit safe prime p.  It has been modified so
   that 2 is a generator for the multiplicative group mod p.

   1.  Do the following:

       1.  Select a random (k-1)-bit prime q, so that q mod 12 = 5.

       2.  Compute p := 2q + 1, and test whether p is prime (using,
           e.g., trial division and the Rabin-Miller test).

   2.  Repeat until p is prime.

   If an implementation uses the OpenSSL libraries, a group consisting
   of a 1024-bit safe prime and 2 as generator can be created as
   follows:

       DH *d = NULL;
       d = DH_generate_parameters(1024, DH_GENERATOR_2, NULL, NULL);
       BN_print_fp(stdout, d->p);

   The order of the subgroup generated by 2 is q = p - 1.

References

Normative References

   [FIPS-180-2]   National Institute of Standards and Technology (NIST),
                  "Secure Hash Standard (SHS)", FIPS PUB 180-2,
                  August 2002.

   [RFC4251]      Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
                  Protocol Architecture", RFC 4251, January 2006.

   [RFC4253]      Lonvick, C., "The Secure Shell (SSH) Transport Layer
                  Protocol", RFC 4253, January 2006.

   [RFC2119]      Bradner, S., "Key words for use in RFCs to Indicate
                  Requirement Levels", BCP 14, RFC 2119, March 1997.

Informative References

   [MENEZES]      Menezes, A., van Oorschot, P., and S. Vanstone,
                  "Handbook of Applied Cryptography", CRC Press, p. 537,
                  1996.




Friedl, et al.              Standards Track                     [Page 8]

RFC 4419                 SSH DH Group Exchange                March 2006


   [VAN-OORSCHOT] van Oorschot, P. and M. Wiener, "On Diffie-Hellman key
                  agreement with short exponents", Advances in
                  Cryptology -EUROCRYPT'96, LNCS 1070,
                  Springer-Verlag, pp. 332-343, 1996.

   [WALDVOGEL]    Waldvogel, C. and J. Massey, "The probability
                  distribution of the Diffie-Hellman key", Proceedings
                  of AUSCRYPT 92, LNCS 718, Springer-Verlag, pp.
                  492-504, 1993.

Authors' Addresses

   Markus Friedl
   EMail: markus@openbsd.org


   Niels Provos
   EMail: provos@citi.umich.edu


   William A. Simpson
   EMail: wsimpson@greendragon.com





























Friedl, et al.              Standards Track                     [Page 9]

RFC 4419                 SSH DH Group Exchange                March 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Friedl, et al.              Standards Track                    [Page 10]


/EXT RFC4462  GSS-API Authentication and Key Exchange for the SSH Protocol
========================================================
https://datatracker.ietf.org/doc/html/rfc4462

Network Working Group                                       J. Hutzelman
Request for Comments: 4462                                           CMU
Category: Standards Track                                     J. Salowey
                                                           Cisco Systems
                                                            J. Galbraith
                                             Van Dyke Technologies, Inc.
                                                                V. Welch
                                                         U Chicago / ANL
                                                                May 2006


    Generic Security Service Application Program Interface (GSS-API)
  Authentication and Key Exchange for the Secure Shell (SSH) Protocol

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (C) The Internet Society (2006).

Abstract

   The Secure Shell protocol (SSH) is a protocol for secure remote login
   and other secure network services over an insecure network.

   The Generic Security Service Application Program Interface (GSS-API)
   provides security services to callers in a mechanism-independent
   fashion.

   This memo describes methods for using the GSS-API for authentication
   and key exchange in SSH.  It defines an SSH user authentication
   method that uses a specified GSS-API mechanism to authenticate a
   user, and a family of SSH key exchange methods that use GSS-API to
   authenticate a Diffie-Hellman key exchange.

   This memo also defines a new host public key algorithm that can be
   used when no operations are needed using a host's public key, and a
   new user authentication method that allows an authorization name to
   be used in conjunction with any authentication that has already
   occurred as a side-effect of GSS-API-based key exchange.





Hutzelman, et al.           Standards Track                     [Page 1]

RFC 4462                  SSH GSS-API Methods                   May 2006


Table of Contents

   1. Introduction ....................................................3
      1.1. SSH Terminology ............................................3
      1.2. Key Words ..................................................3
   2. GSS-API-Authenticated Diffie-Hellman Key Exchange ...............3
      2.1. Generic GSS-API Key Exchange ...............................4
      2.2. Group Exchange ............................................10
      2.3. gss-group1-sha1-* .........................................11
      2.4. gss-group14-sha1-* ........................................12
      2.5. gss-gex-sha1-* ............................................12
      2.6. Other GSS-API Key Exchange Methods ........................12
   3. GSS-API User Authentication ....................................13
      3.1. GSS-API Authentication Overview ...........................13
      3.2. Initiating GSS-API Authentication .........................13
      3.3. Initial Server Response ...................................14
      3.4. GSS-API Session ...........................................15
      3.5. Binding Encryption Keys ...................................16
      3.6. Client Acknowledgement ....................................16
      3.7. Completion ................................................17
      3.8. Error Status ..............................................17
      3.9. Error Token ...............................................18
   4. Authentication Using GSS-API Key Exchange ......................19
   5. Null Host Key Algorithm ........................................20
   6. Summary of Message Numbers .....................................21
   7. GSS-API Considerations .........................................22
      7.1. Naming Conventions ........................................22
      7.2. Channel Bindings ..........................................22
      7.3. SPNEGO ....................................................23
   8. IANA Considerations ............................................24
   9. Security Considerations ........................................24
   10. Acknowledgements ..............................................25
   11. References ....................................................26
      11.1. Normative References .....................................26
      11.2. Informative References ...................................27
















Hutzelman, et al.           Standards Track                     [Page 2]

RFC 4462                  SSH GSS-API Methods                   May 2006


/. 1.  Introduction
========================================================


   This document describes the methods used to perform key exchange and
   user authentication in the Secure Shell protocol using the GSS-API.
   To do this, it defines a family of key exchange methods, two user
   authentication methods, and a new host key algorithm.  These
   definitions allow any GSS-API mechanism to be used with the Secure
   Shell protocol.

   This document should be read only after reading the documents
   describing the SSH protocol architecture [SSH-ARCH], transport layer
   protocol [SSH-TRANSPORT], and user authentication protocol
   [SSH-USERAUTH].  This document freely uses terminology and notation
   from the architecture document without reference or further
   explanation.

1.1.  SSH Terminology
--------------------------------------------------------

   The data types used in the packets are defined in the SSH
   architecture document [SSH-ARCH].  It is particularly important to
   note the definition of string allows binary content.

   The SSH_MSG_USERAUTH_REQUEST packet refers to a service; this service
   name is an SSH service name and has no relationship to GSS-API
   service names.  Currently, the only defined service name is
   "ssh-connection", which refers to the SSH connection protocol
   [SSH-CONNECT].

1.2.  Key Words
--------------------------------------------------------

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [KEYWORDS].

/. 2.  GSS-API-Authenticated Diffie-Hellman Key Exchange
========================================================


   This section defines a class of key exchange methods that combine the
   Diffie-Hellman key exchange from Section 8 of [SSH-TRANSPORT] with
   mutual authentication using GSS-API.

   Since the GSS-API key exchange methods described in this section do
   not require the use of public key signature or encryption algorithms,
   they MAY be used with any host key algorithm, including the "null"
   algorithm described in Section 5.







Hutzelman, et al.           Standards Track                     [Page 3]

RFC 4462                  SSH GSS-API Methods                   May 2006


2.1.  Generic GSS-API Key Exchange
--------------------------------------------------------

   The following symbols are used in this description:

   o  C is the client, and S is the server

   o  p is a large safe prime, g is a generator for a subgroup of GF(p),
      and q is the order of the subgroup

   o  V_S is S's version string, and V_C is C's version string

   o  I_C is C's KEXINIT message, and I_S is S's KEXINIT message

   1.  C generates a random number x (1 < x < q) and computes e = g^x
       mod p.

   2.  C calls GSS_Init_sec_context(), using the most recent reply token
       received from S during this exchange, if any.  For this call, the
       client MUST set mutual_req_flag to "true" to request that mutual
       authentication be performed.  It also MUST set integ_req_flag to
       "true" to request that per-message integrity protection be
       supported for this context.  In addition, deleg_req_flag MAY be
       set to "true" to request access delegation, if requested by the
       user.  Since the key exchange process authenticates only the
       host, the setting of anon_req_flag is immaterial to this process.
       If the client does not support the "gssapi-keyex" user
       authentication method described in Section 4, or does not intend
       to use that method in conjunction with the GSS-API context
       established during key exchange, then anon_req_flag SHOULD be set
       to "true".  Otherwise, this flag MAY be set to true if the client
       wishes to hide its identity.  Since the key exchange process will
       involve the exchange of only a single token once the context has
       been established, it is not necessary that the GSS-API context
       support detection of replayed or out-of-sequence tokens.  Thus,
       replay_det_req_flag and sequence_req_flag need not be set for
       this process.  These flags SHOULD be set to "false".

       *  If the resulting major_status code is GSS_S_COMPLETE and the
          mutual_state flag is not true, then mutual authentication has
          not been established, and the key exchange MUST fail.

       *  If the resulting major_status code is GSS_S_COMPLETE and the
          integ_avail flag is not true, then per-message integrity
          protection is not available, and the key exchange MUST fail.

       *  If the resulting major_status code is GSS_S_COMPLETE and both
          the mutual_state and integ_avail flags are true, the resulting
          output token is sent to S.



Hutzelman, et al.           Standards Track                     [Page 4]

RFC 4462                  SSH GSS-API Methods                   May 2006


       *  If the resulting major_status code is GSS_S_CONTINUE_NEEDED,
          the output_token is sent to S, which will reply with a new
          token to be provided to GSS_Init_sec_context().

       *  The client MUST also include "e" with the first message it
          sends to the server during this process; if the server
          receives more than one "e" or none at all, the key exchange
          fails.

       *  It is an error if the call does not produce a token of non-
          zero length to be sent to the server.  In this case, the key
          exchange MUST fail.

   3.  S calls GSS_Accept_sec_context(), using the token received from
       C.

       *  If the resulting major_status code is GSS_S_COMPLETE and the
          mutual_state flag is not true, then mutual authentication has
          not been established, and the key exchange MUST fail.

       *  If the resulting major_status code is GSS_S_COMPLETE and the
          integ_avail flag is not true, then per-message integrity
          protection is not available, and the key exchange MUST fail.

       *  If the resulting major_status code is GSS_S_COMPLETE and both
          the mutual_state and integ_avail flags are true, then the
          security context has been established, and processing
          continues with step 4.

       *  If the resulting major_status code is GSS_S_CONTINUE_NEEDED,
          then the output token is sent to C, and processing continues
          with step 2.

       *  If the resulting major_status code is GSS_S_COMPLETE, but a
          non-zero-length reply token is returned, then that token is
          sent to the client.

   4.  S generates a random number y (0 < y < q) and computes f = g^y
       mod p.  It computes K = e ^ y mod p, and H = hash(V_C || V_S ||
       I_C || I_S || K_S || e || f || K).  It then calls GSS_GetMIC() to
       obtain a GSS-API message integrity code for H.  S then sends f
       and the message integrity code (MIC) to C.

   5.  This step is performed only (1) if the server's final call to
       GSS_Accept_sec_context() produced a non-zero-length final reply
       token to be sent to the client and (2) if no previous call by the
       client to GSS_Init_sec_context() has resulted in a major_status
       of GSS_S_COMPLETE.  Under these conditions, the client makes an



Hutzelman, et al.           Standards Track                     [Page 5]

RFC 4462                  SSH GSS-API Methods                   May 2006


       additional call to GSS_Init_sec_context() to process the final
       reply token.  This call is made exactly as described above.
       However, if the resulting major_status is anything other than
       GSS_S_COMPLETE, or a non-zero-length token is returned, it is an
       error and the key exchange MUST fail.

   6.  C computes K = f^x mod p, and H = hash(V_C || V_S || I_C || I_S
       || K_S || e || f || K).  It then calls GSS_VerifyMIC() to verify
       that the MIC sent by S matches H.  If the MIC is not successfully
       verified, the key exchange MUST fail.

   Either side MUST NOT send or accept e or f values that are not in the
   range [1, p-1].  If this condition is violated, the key exchange
   fails.

   If any call to GSS_Init_sec_context() or GSS_Accept_sec_context()
   returns a major_status other than GSS_S_COMPLETE or
   GSS_S_CONTINUE_NEEDED, or any other GSS-API call returns a
   major_status other than GSS_S_COMPLETE, the key exchange fails.  In
   this case, several mechanisms are available for communicating error
   information to the peer before terminating the connection as required
   by [SSH-TRANSPORT]:

   o  If the key exchange fails due to any GSS-API error on the server
      (including errors returned by GSS_Accept_sec_context()), the
      server MAY send a message informing the client of the details of
      the error.  In this case, if an error token is also sent (see
      below), then this message MUST be sent before the error token.

   o  If the key exchange fails due to a GSS-API error returned from the
      server's call to GSS_Accept_sec_context(), and an "error token" is
      also returned, then the server SHOULD send the error token to the
      client to allow completion of the GSS security exchange.

   o  If the key exchange fails due to a GSS-API error returned from the
      client's call to GSS_Init_sec_context(), and an "error token" is
      also returned, then the client SHOULD send the error token to the
      server to allow completion of the GSS security exchange.

   As noted in Section 9, it may be desirable under site security policy
   to obscure information about the precise nature of the error; thus,
   it is RECOMMENDED that implementations provide a method to suppress
   these messages as a matter of policy.

   This is implemented with the following messages.  The hash algorithm
   for computing the exchange hash is defined by the method name, and is
   called HASH.  The group used for Diffie-Hellman key exchange and the
   underlying GSS-API mechanism are also defined by the method name.



Hutzelman, et al.           Standards Track                     [Page 6]

RFC 4462                  SSH GSS-API Methods                   May 2006


   After the client's first call to GSS_Init_sec_context(), it sends the
   following:

           byte      SSH_MSG_KEXGSS_INIT
           string    output_token (from GSS_Init_sec_context())
           mpint     e

   Upon receiving the SSH_MSG_KEXGSS_INIT message, the server MAY send
   the following message, prior to any other messages, to inform the
   client of its host key.

           byte      SSH_MSG_KEXGSS_HOSTKEY
           string    server public host key and certificates (K_S)

   Since this key exchange method does not require the host key to be
   used for any encryption operations, this message is OPTIONAL.  If the
   "null" host key algorithm described in Section 5 is used, this
   message MUST NOT be sent.  If this message is sent, the server public
   host key(s) and/or certificate(s) in this message are encoded as a
   single string, in the format specified by the public key type in use
   (see [SSH-TRANSPORT], Section 6.6).

   In traditional SSH deployments, host keys are normally expected to
   change infrequently, and there is often no mechanism for validating
   host keys not already known to the client.  As a result, the use of a
   new host key by an already-known host is usually considered an
   indication of a possible man-in-the-middle attack, and clients often
   present strong warnings and/or abort the connection in such cases.

   By contrast, when GSS-API-based key exchange is used, host keys sent
   via the SSH_MSG_KEXGSS_HOSTKEY message are authenticated as part of
   the GSS-API key exchange, even when previously unknown to the client.
   Further, in environments in which GSS-API-based key exchange is used
   heavily, it is possible and even likely that host keys will change
   much more frequently and/or without advance warning.

   Therefore, when a new key for an already-known host is received via
   the SSH_MSG_KEXGSS_HOSTKEY message, clients SHOULD NOT issue strong
   warnings or abort the connection, provided the GSS-API-based key
   exchange succeeds.

   In order to facilitate key re-exchange after the user's GSS-API
   credentials have expired, client implementations SHOULD store host
   keys received via SSH_MSG_KEXGSS_HOSTKEY for the duration of the
   session, even when such keys are not stored for long-term use.






Hutzelman, et al.           Standards Track                     [Page 7]

RFC 4462                  SSH GSS-API Methods                   May 2006


   Each time the server's call to GSS_Accept_sec_context() returns a
   major_status code of GSS_S_CONTINUE_NEEDED, it sends the following
   reply to the client:

           byte      SSH_MSG_KEXGSS_CONTINUE
           string    output_token (from GSS_Accept_sec_context())

   If the client receives this message after a call to
   GSS_Init_sec_context() has returned a major_status code of
   GSS_S_COMPLETE, a protocol error has occurred and the key exchange
   MUST fail.

   Each time the client receives the message described above, it makes
   another call to GSS_Init_sec_context().  It then sends the following:

           byte      SSH_MSG_KEXGSS_CONTINUE
           string    output_token (from GSS_Init_sec_context())

   The server and client continue to trade these two messages as long as
   the server's calls to GSS_Accept_sec_context() result in major_status
   codes of GSS_S_CONTINUE_NEEDED.  When a call results in a
   major_status code of GSS_S_COMPLETE, it sends one of two final
   messages.

   If the server's final call to GSS_Accept_sec_context() (resulting in
   a major_status code of GSS_S_COMPLETE) returns a non-zero-length
   token to be sent to the client, it sends the following:

           byte      SSH_MSG_KEXGSS_COMPLETE
           mpint     f
           string    per_msg_token (MIC of H)
           boolean   TRUE
           string    output_token (from GSS_Accept_sec_context())

   If the client receives this message after a call to
   GSS_Init_sec_context() has returned a major_status code of
   GSS_S_COMPLETE, a protocol error has occurred and the key exchange
   MUST fail.

   If the server's final call to GSS_Accept_sec_context() (resulting in
   a major_status code of GSS_S_COMPLETE) returns a zero-length token or
   no token at all, it sends the following:

           byte      SSH_MSG_KEXGSS_COMPLETE
           mpint     f
           string    per_msg_token (MIC of H)
           boolean   FALSE




Hutzelman, et al.           Standards Track                     [Page 8]

RFC 4462                  SSH GSS-API Methods                   May 2006


   If the client receives this message when no call to
   GSS_Init_sec_context() has yet resulted in a major_status code of
   GSS_S_COMPLETE, a protocol error has occurred and the key exchange
   MUST fail.

   If either the client's call to GSS_Init_sec_context() or the server's
   call to GSS_Accept_sec_context() returns an error status and produces
   an output token (called an "error token"), then the following SHOULD
   be sent to convey the error information to the peer:

           byte      SSH_MSG_KEXGSS_CONTINUE
           string    error_token

   If a server sends both this message and an SSH_MSG_KEXGSS_ERROR
   message, the SSH_MSG_KEXGSS_ERROR message MUST be sent first, to
   allow clients to record and/or display the error information before
   processing the error token.  This is important because a client
   processing an error token will likely disconnect without reading any
   further messages.

   In the event of a GSS-API error on the server, the server MAY send
   the following message before terminating the connection:

           byte      SSH_MSG_KEXGSS_ERROR
           uint32    major_status
           uint32    minor_status
           string    message
           string    language tag

   The message text MUST be encoded in the UTF-8 encoding described in
   [UTF8].  Language tags are those described in [LANGTAG].  Note that
   the message text may contain multiple lines separated by carriage
   return-line feed (CRLF) sequences.  Application developers should
   take this into account when displaying these messages.

   The hash H is computed as the HASH hash of the concatenation of the
   following:

           string    V_C, the client's version string (CR, NL excluded)
           string    V_S, the server's version string (CR, NL excluded)
           string    I_C, the payload of the client's SSH_MSG_KEXINIT
           string    I_S, the payload of the server's SSH_MSG_KEXINIT
           string    K_S, the host key
           mpint     e, exchange value sent by the client
           mpint     f, exchange value sent by the server
           mpint     K, the shared secret





Hutzelman, et al.           Standards Track                     [Page 9]

RFC 4462                  SSH GSS-API Methods                   May 2006


   This value is called the exchange hash, and it is used to
   authenticate the key exchange.  The exchange hash SHOULD be kept
   secret.  If no SSH_MSG_KEXGSS_HOSTKEY message has been sent by the
   server or received by the client, then the empty string is used in
   place of K_S when computing the exchange hash.

   The GSS_GetMIC call MUST be applied over H, not the original data.

2.2.  Group Exchange
--------------------------------------------------------

   This section describes a modification to the generic GSS-API-
   authenticated Diffie-Hellman key exchange to allow the negotiation of
   the group to be used, using a method based on that described in
   [GROUP-EXCHANGE].

   The server keeps a list of safe primes and corresponding generators
   that it can select from.  These are chosen as described in Section 3
   of [GROUP-EXCHANGE].  The client requests a modulus from the server,
   indicating the minimum, maximum, and preferred sizes; the server
   responds with a suitable modulus and generator.  The exchange then
   proceeds as described in Section 2.1 above.

   This description uses the following symbols, in addition to those
   defined above:

   o  n is the size of the modulus p in bits that the client would like
      to receive from the server

   o  min and max are the minimal and maximal sizes of p in bits that
      are acceptable to the client

   1.  C sends "min || n || max" to S, indicating the minimal acceptable
       group size, the preferred size of the group, and the maximal
       group size in bits the client will accept.

   2.  S finds a group that best matches the client's request, and sends
       "p || g" to C.

   3.  The exchange proceeds as described in Section 2.1 above,
       beginning with step 1, except that the exchange hash is computed
       as described below.

   Servers and clients SHOULD support groups with a modulus length of k
   bits, where 1024 <= k <= 8192.  The recommended values for min and
   max are 1024 and 8192, respectively.

   This is implemented using the following messages, in addition to
   those described above:



Hutzelman, et al.           Standards Track                    [Page 10]

RFC 4462                  SSH GSS-API Methods                   May 2006


   First, the client sends:

           byte      SSH_MSG_KEXGSS_GROUPREQ
           uint32    min, minimal size in bits of an acceptable group
           uint32    n, preferred size in bits of the group the server
                     should send
           uint32    max, maximal size in bits of an acceptable group

   The server responds with:

           byte      SSH_MSG_KEXGSS_GROUP
           mpint     p, safe prime
           mpint     g, generator for subgroup in GF(p)

   This is followed by the message exchange described above in
   Section 2.1, except that the exchange hash H is computed as the HASH
   hash of the concatenation of the following:

           string    V_C, the client's version string (CR, NL excluded)
           string    V_S, the server's version string (CR, NL excluded)
           string    I_C, the payload of the client's SSH_MSG_KEXINIT
           string    I_S, the payload of the server's SSH_MSG_KEXINIT
           string    K_S, the host key
           uint32    min, minimal size in bits of an acceptable group
           uint32    n, preferred size in bits of the group the server
                     should send
           uint32    max, maximal size in bits of an acceptable group
           mpint     p, safe prime
           mpint     g, generator for subgroup in GF(p)
           mpint     e, exchange value sent by the client
           mpint     f, exchange value sent by the server
           mpint     K, the shared secret

2.3.  gss-group1-sha1-*
--------------------------------------------------------

   Each of these methods specifies GSS-API-authenticated Diffie-Hellman
   key exchange as described in Section 2.1 with SHA-1 as HASH, and the
   group defined in Section 8.1 of [SSH-TRANSPORT].  The method name for
   each method is the concatenation of the string "gss-group1-sha1-"
   with the Base64 encoding of the MD5 hash [MD5] of the ASN.1
   Distinguished Encoding Rules (DER) encoding [ASN1] of the underlying
   GSS-API mechanism's Object Identifier (OID).  Base64 encoding is
   described in Section 6.8 of [MIME].

   Each and every such key exchange method is implicitly registered by
   this specification.  The IESG is considered to be the owner of all
   such key exchange methods; this does NOT imply that the IESG is
   considered to be the owner of the underlying GSS-API mechanism.



Hutzelman, et al.           Standards Track                    [Page 11]

RFC 4462                  SSH GSS-API Methods                   May 2006


2.4.  gss-group14-sha1-*
--------------------------------------------------------

   Each of these methods specifies GSS-API authenticated Diffie-Hellman
   key exchange as described in Section 2.1 with SHA-1 as HASH, and the
   group defined in Section 8.2 of [SSH-TRANSPORT].  The method name for
   each method is the concatenation of the string "gss-group14-sha1-"
   with the Base64 encoding of the MD5 hash [MD5] of the ASN.1 DER
   encoding [ASN1] of the underlying GSS-API mechanism's OID.  Base64
   encoding is described in Section 6.8 of [MIME].

   Each and every such key exchange method is implicitly registered by
   this specification.  The IESG is considered to be the owner of all
   such key exchange methods; this does NOT imply that the IESG is
   considered to be the owner of the underlying GSS-API mechanism.

2.5.  gss-gex-sha1-*
--------------------------------------------------------

   Each of these methods specifies GSS-API-authenticated Diffie-Hellman
   key exchange as described in Section 2.2 with SHA-1 as HASH.  The
   method name for each method is the concatenation of the string "gss-
   gex-sha1-" with the Base64 encoding of the MD5 hash [MD5] of the
   ASN.1 DER encoding [ASN1] of the underlying GSS-API mechanism's OID.
   Base64 encoding is described in Section 6.8 of [MIME].

   Each and every such key exchange method is implicitly registered by
   this specification.  The IESG is considered to be the owner of all
   such key exchange methods; this does NOT imply that the IESG is
   considered to be the owner of the underlying GSS-API mechanism.

2.6.  Other GSS-API Key Exchange Methods
--------------------------------------------------------

   Key exchange method names starting with "gss-" are reserved for key
   exchange methods that conform to this document; in particular, for
   those methods that use the GSS-API-authenticated Diffie-Hellman key
   exchange algorithm described in Section 2.1, including any future
   methods that use different groups and/or hash functions.  The intent
   is that the names for any such future methods be defined in a similar
   manner to that used in Section 2.3.













Hutzelman, et al.           Standards Track                    [Page 12]

RFC 4462                  SSH GSS-API Methods                   May 2006


/. 3.  GSS-API User Authentication
========================================================


   This section describes a general-purpose user authentication method
   based on [GSSAPI].  It is intended to be run over the SSH user
   authentication protocol [SSH-USERAUTH].

   The authentication method name for this protocol is "gssapi-with-
   mic".

3.1.  GSS-API Authentication Overview
--------------------------------------------------------

   GSS-API authentication must maintain a context.  Authentication
   begins when the client sends an SSH_MSG_USERAUTH_REQUEST, which
   specifies the mechanism OIDs the client supports.

   If the server supports any of the requested mechanism OIDs, the
   server sends an SSH_MSG_USERAUTH_GSSAPI_RESPONSE message containing
   the mechanism OID.

   After the client receives SSH_MSG_USERAUTH_GSSAPI_RESPONSE, the
   client and server exchange SSH_MSG_USERAUTH_GSSAPI_TOKEN packets
   until the authentication mechanism either succeeds or fails.

   If at any time during the exchange the client sends a new
   SSH_MSG_USERAUTH_REQUEST packet, the GSS-API context is completely
   discarded and destroyed, and any further GSS-API authentication MUST
   restart from the beginning.

   If the authentication succeeds and a non-empty user name is presented
   by the client, the SSH server implementation verifies that the user
   name is authorized based on the credentials exchanged in the GSS-API
   exchange.  If the user name is not authorized, then the
   authentication MUST fail.

3.2.  Initiating GSS-API Authentication
--------------------------------------------------------

   The GSS-API authentication method is initiated when the client sends
   an SSH_MSG_USERAUTH_REQUEST:

           byte      SSH_MSG_USERAUTH_REQUEST
           string    user name (in ISO-10646 UTF-8 encoding)
           string    service name (in US-ASCII)
           string    "gssapi-with-mic" (US-ASCII method name)
           uint32    n, the number of mechanism OIDs client supports
           string[n] mechanism OIDs

   Mechanism OIDs are encoded according to the ASN.1 Distinguished
   Encoding Rules (DER), as described in [ASN1] and in Section 3.1 of



Hutzelman, et al.           Standards Track                    [Page 13]

RFC 4462                  SSH GSS-API Methods                   May 2006


   [GSSAPI].  The mechanism OIDs MUST be listed in order of preference,
   and the server must choose the first mechanism OID on the list that
   it supports.

   The client SHOULD send GSS-API mechanism OIDs only for mechanisms
   that are of the same priority, compared to non-GSS-API authentication
   methods.  Otherwise, authentication methods may be executed out of
   order.  Thus, the client could first send an SSH_MSG_USERAUTH_REQUEST
   for one GSS-API mechanism, then try public key authentication, and
   then try another GSS-API mechanism.

   If the server does not support any of the specified OIDs, the server
   MUST fail the request by sending an SSH_MSG_USERAUTH_FAILURE packet.

   The user name may be an empty string if it can be deduced from the
   results of the GSS-API authentication.  If the user name is not
   empty, and the requested user does not exist, the server MAY
   disconnect or MAY send a bogus list of acceptable authentications but
   never accept any.  This makes it possible for the server to avoid
   disclosing information about which accounts exist.  In any case, if
   the user does not exist, the authentication request MUST NOT be
   accepted.

   Note that the 'user name' value is encoded in ISO-10646 UTF-8.  It is
   up to the server how it interprets the user name and determines
   whether the client is authorized based on his GSS-API credentials.
   In particular, the encoding used by the system for user names is a
   matter for the ssh server implementation.  However, if the client
   reads the user name in some other encoding (e.g., ISO 8859-1 - ISO
   Latin1), it MUST convert the user name to ISO-10646 UTF-8 before
   transmitting, and the server MUST convert the user name to the
   encoding used on that system for user names.

   Any normalization or other preparation of names is done by the ssh
   server based on the requirements of the system, and is outside the
   scope of SSH.  SSH implementations which maintain private user
   databases SHOULD prepare user names as described by [SASLPREP].

   The client MAY at any time continue with a new
   SSH_MSG_USERAUTH_REQUEST message, in which case the server MUST
   abandon the previous authentication attempt and continue with the new
   one.

3.3.  Initial Server Response
--------------------------------------------------------

   The server responds to the SSH_MSG_USERAUTH_REQUEST with either an
   SSH_MSG_USERAUTH_FAILURE if none of the mechanisms are supported or
   with an SSH_MSG_USERAUTH_GSSAPI_RESPONSE as follows:



Hutzelman, et al.           Standards Track                    [Page 14]

RFC 4462                  SSH GSS-API Methods                   May 2006


           byte        SSH_MSG_USERAUTH_GSSAPI_RESPONSE
           string      selected mechanism OID

   The mechanism OID must be one of the OIDs sent by the client in the
   SSH_MSG_USERAUTH_REQUEST packet.

3.4.  GSS-API Session
--------------------------------------------------------

   Once the mechanism OID has been selected, the client will then
   initiate an exchange of one or more pairs of
   SSH_MSG_USERAUTH_GSSAPI_TOKEN packets.  These packets contain the
   tokens produced from the 'GSS_Init_sec_context()' and
   'GSS_Accept_sec_context()' calls.  The actual number of packets
   exchanged is determined by the underlying GSS-API mechanism.

           byte        SSH_MSG_USERAUTH_GSSAPI_TOKEN
           string      data returned from either GSS_Init_sec_context()
                       or GSS_Accept_sec_context()

   If an error occurs during this exchange on server side, the server
   can terminate the method by sending an SSH_MSG_USERAUTH_FAILURE
   packet.  If an error occurs on client side, the client can terminate
   the method by sending a new SSH_MSG_USERAUTH_REQUEST packet.

   When calling GSS_Init_sec_context(), the client MUST set
   integ_req_flag to "true" to request that per-message integrity
   protection be supported for this context.  In addition,
   deleg_req_flag MAY be set to "true" to request access delegation, if
   requested by the user.

   Since the user authentication process by its nature authenticates
   only the client, the setting of mutual_req_flag is not needed for
   this process.  This flag SHOULD be set to "false".

   Since the user authentication process will involve the exchange of
   only a single token once the context has been established, it is not
   necessary that the context support detection of replayed or out-of-
   sequence tokens.  Thus, the setting of replay_det_req_flag and
   sequence_req_flag are not needed for this process.  These flags
   SHOULD be set to "false".

   Additional SSH_MSG_USERAUTH_GSSAPI_TOKEN messages are sent if and
   only if the calls to the GSS-API routines produce send tokens of non-
   zero length.

   Any major status code other than GSS_S_COMPLETE or
   GSS_S_CONTINUE_NEEDED SHOULD be a failure.




Hutzelman, et al.           Standards Track                    [Page 15]

RFC 4462                  SSH GSS-API Methods                   May 2006


3.5.  Binding Encryption Keys
--------------------------------------------------------

   In some cases, it is possible to obtain improved security by allowing
   access only if the client sends a valid message integrity code (MIC)
   binding the GSS-API context to the keys used for encryption and
   integrity protection of the SSH session.  With this extra level of
   protection, a "man-in-the-middle" attacker who has convinced a client
   of his authenticity cannot then relay user authentication messages
   between the real client and server, thus gaining access to the real
   server.  This additional protection is available when the negotiated
   GSS-API context supports per-message integrity protection, as
   indicated by the setting of the integ_avail flag on successful return
   from GSS_Init_sec_context() or GSS_Accept_sec_context().

   When the client's call to GSS_Init_sec_context() returns
   GSS_S_COMPLETE with the integ_avail flag set, the client MUST
   conclude the user authentication exchange by sending the following
   message:

           byte      SSH_MSG_USERAUTH_GSSAPI_MIC
           string    MIC

   This message MUST be sent only if GSS_Init_sec_context() returned
   GSS_S_COMPLETE.  If a token is also returned, then the
   SSH_MSG_USERAUTH_GSSAPI_TOKEN message MUST be sent before this one.

   The contents of the MIC field are obtained by calling GSS_GetMIC()
   over the following, using the GSS-API context that was just
   established:

           string    session identifier
           byte      SSH_MSG_USERAUTH_REQUEST
           string    user name
           string    service
           string    "gssapi-with-mic"

   If this message is received by the server before the GSS-API context
   is fully established, the server MUST fail the authentication.

   If this message is received by the server when the negotiated GSS-API
   context does not support per-message integrity protection, the server
   MUST fail the authentication.

3.6.  Client Acknowledgement
--------------------------------------------------------

   Some servers may wish to permit user authentication to proceed even
   when the negotiated GSS-API context does not support per-message
   integrity protection.  In such cases, it is possible for the server



Hutzelman, et al.           Standards Track                    [Page 16]

RFC 4462                  SSH GSS-API Methods                   May 2006


   to successfully complete the GSS-API method, while the client's last
   call to GSS_Init_sec_context() fails.  If the server simply assumed
   success on the part of the client and completed the authentication
   service, it is possible that the client would fail to complete the
   authentication method, but not be able to retry other methods because
   the server had already moved on.  To protect against this, a final
   message is sent by the client to indicate it has completed
   authentication.

   When the client's call to GSS_Init_sec_context() returns
   GSS_S_COMPLETE with the integ_avail flag not set, the client MUST
   conclude the user authentication exchange by sending the following
   message:

           byte      SSH_MSG_USERAUTH_GSSAPI_EXCHANGE_COMPLETE

   This message MUST be sent only if GSS_Init_sec_context() returned
   GSS_S_COMPLETE.  If a token is also returned, then the
   SSH_MSG_USERAUTH_GSSAPI_TOKEN message MUST be sent before this one.

   If this message is received by the server before the GSS-API context
   is fully established, the server MUST fail the authentication.

   If this message is received by the server when the negotiated GSS-API
   context supports per-message integrity protection, the server MUST
   fail the authentication.

   It is a site policy decision for the server whether or not to permit
   authentication using GSS-API mechanisms and/or contexts that do not
   support per-message integrity protection.  The server MAY fail the
   otherwise valid gssapi-with-mic authentication if per-message
   integrity protection is not supported.

3.7.  Completion
--------------------------------------------------------

   As with all SSH authentication methods, successful completion is
   indicated by an SSH_MSG_USERAUTH_SUCCESS if no other authentication
   is required, or an SSH_MSG_USERAUTH_FAILURE with the partial success
   flag set if the server requires further authentication.  This packet
   SHOULD be sent immediately following receipt of the
   SSH_MSG_USERAUTH_GSSAPI_EXCHANGE_COMPLETE packet.

3.8.  Error Status
--------------------------------------------------------

   In the event that a GSS-API error occurs on the server during context
   establishment, the server MAY send the following message to inform
   the client of the details of the error before sending an
   SSH_MSG_USERAUTH_FAILURE message:



Hutzelman, et al.           Standards Track                    [Page 17]

RFC 4462                  SSH GSS-API Methods                   May 2006


           byte      SSH_MSG_USERAUTH_GSSAPI_ERROR
           uint32    major_status
           uint32    minor_status
           string    message
           string    language tag

   The message text MUST be encoded in the UTF-8 encoding described in
   [UTF8].  Language tags are those described in [LANGTAG].  Note that
   the message text may contain multiple lines separated by carriage
   return-line feed (CRLF) sequences.  Application developers should
   take this into account when displaying these messages.

   Clients receiving this message MAY log the error details and/or
   report them to the user.  Any server sending this message MUST ignore
   any SSH_MSG_UNIMPLEMENTED sent by the client in response.

3.9.  Error Token
--------------------------------------------------------

   In the event that, during context establishment, a client's call to
   GSS_Init_sec_context() or a server's call to GSS_Accept_sec_context()
   returns a token along with an error status, the resulting "error
   token" SHOULD be sent to the peer using the following message:

           byte        SSH_MSG_USERAUTH_GSSAPI_ERRTOK
           string      error token

   This message implies that the authentication is about to fail, and is
   defined to allow the error token to be communicated without losing
   synchronization.

   When a server sends this message, it MUST be followed by an
   SSH_MSG_USERAUTH_FAILURE message, which is to be interpreted as
   applying to the same authentication request.  A client receiving this
   message SHOULD wait for the following SSH_MSG_USERAUTH_FAILURE
   message before beginning another authentication attempt.

   When a client sends this message, it MUST be followed by a new
   authentication request or by terminating the connection.  A server
   receiving this message MUST NOT send an SSH_MSG_USERAUTH_FAILURE in
   reply, since such a message might otherwise be interpreted by a
   client as a response to the following authentication sequence.

   Any server sending this message MUST ignore any SSH_MSG_UNIMPLEMENTED
   sent by the client in response.  If a server sends both this message
   and an SSH_MSG_USERAUTH_GSSAPI_ERROR message, the
   SSH_MSG_USERAUTH_GSSAPI_ERROR message MUST be sent first, to allow
   the client to store and/or display the error status before processing
   the error token.



Hutzelman, et al.           Standards Track                    [Page 18]

RFC 4462                  SSH GSS-API Methods                   May 2006


/. 4.  Authentication Using GSS-API Key Exchange
========================================================


   This section describes a user authentication method building on the
   framework described in [SSH-USERAUTH].  This method performs user
   authentication by making use of an existing GSS-API context
   established during key exchange.

   The authentication method name for this protocol is "gssapi-keyex".

   This method may be used only if the initial key exchange was
   performed using a GSS-API-based key exchange method defined in
   accordance with Section 2.  The GSS-API context used with this method
   is always that established during an initial GSS-API-based key
   exchange.  Any context established during key exchange for the
   purpose of rekeying MUST NOT be used with this method.

   The server SHOULD include this user authentication method in the list
   of methods that can continue (in an SSH_MSG_USERAUTH_FAILURE) if the
   initial key exchange was performed using a GSS-API-based key exchange
   method and provides information about the user's identity that is
   useful to the server.  It MUST NOT include this method if the initial
   key exchange was not performed using a GSS-API-based key exchange
   method defined in accordance with Section 2.

   The client SHOULD attempt to use this method if it is advertised by
   the server, initial key exchange was performed using a GSS-API-based
   key exchange method, and this method has not already been tried.  The
   client SHOULD NOT try this method more than once per session.  It
   MUST NOT try this method if initial key exchange was not performed
   using a GSS-API-based key exchange method defined in accordance with
   Section 2.

   If a server receives a request for this method when initial key
   exchange was not performed using a GSS-API-based key exchange method
   defined in accordance with Section 2, it MUST return
   SSH_MSG_USERAUTH_FAILURE.

   This method is defined as a single message:

           byte        SSH_MSG_USERAUTH_REQUEST
           string      user name
           string      service
           string      "gssapi-keyex"
           string      MIC

   The contents of the MIC field are obtained by calling GSS_GetMIC over
   the following, using the GSS-API context that was established during
   initial key exchange:



Hutzelman, et al.           Standards Track                    [Page 19]

RFC 4462                  SSH GSS-API Methods                   May 2006


           string      session identifier
           byte        SSH_MSG_USERAUTH_REQUEST
           string      user name
           string      service
           string      "gssapi-keyex"

   Upon receiving this message when initial key exchange was performed
   using a GSS-API-based key exchange method, the server uses
   GSS_VerifyMIC() to verify that the MIC received is valid.  If the MIC
   is not valid, the user authentication fails, and the server MUST
   return SSH_MSG_USERAUTH_FAILURE.

   If the MIC is valid and the server is satisfied as to the user's
   credentials, it MAY return either SSH_MSG_USERAUTH_SUCCESS or
   SSH_MSG_USERAUTH_FAILURE with the partial success flag set, depending
   on whether additional authentications are needed.

/. 5.  Null Host Key Algorithm
========================================================


   The "null" host key algorithm has no associated host key material and
   provides neither signature nor encryption algorithms.  Thus, it can
   be used only with key exchange methods that do not require any
   public-key operations and do not require the use of host public key
   material.  The key exchange methods described in Section 2 are
   examples of such methods.

   This algorithm is used when, as a matter of configuration, the host
   does not have or does not wish to use a public key.  For example, it
   can be used when the administrator has decided as a matter of policy
   to require that all key exchanges be authenticated using Kerberos
   [KRB5], and thus the only permitted key exchange method is the
   GSS-API-authenticated Diffie-Hellman exchange described above, with
   Kerberos V5 as the underlying GSS-API mechanism.  In such a
   configuration, the server implementation supports the "ssh-dss" key
   algorithm (as required by [SSH-TRANSPORT]), but could be prohibited
   by configuration from using it.  In this situation, the server needs
   some key exchange algorithm to advertise; the "null" algorithm fills
   this purpose.

   Note that the use of the "null" algorithm in this way means that the
   server will not be able to interoperate with clients that do not
   support this algorithm.  This is not a significant problem, since in
   the configuration described, it will also be unable to interoperate
   with implementations that do not support the GSS-API-authenticated
   key exchange and Kerberos.






Hutzelman, et al.           Standards Track                    [Page 20]

RFC 4462                  SSH GSS-API Methods                   May 2006


   Any implementation supporting at least one key exchange method that
   conforms to Section 2 MUST also support the "null" host key
   algorithm.  Servers MUST NOT advertise the "null" host key algorithm
   unless it is the only algorithm advertised.

/. 6.  Summary of Message Numbers
========================================================


   The following message numbers have been defined for use with GSS-
   API-based key exchange methods:

          #define SSH_MSG_KEXGSS_INIT                       30
          #define SSH_MSG_KEXGSS_CONTINUE                   31
          #define SSH_MSG_KEXGSS_COMPLETE                   32
          #define SSH_MSG_KEXGSS_HOSTKEY                    33
          #define SSH_MSG_KEXGSS_ERROR                      34
          #define SSH_MSG_KEXGSS_GROUPREQ                   40
          #define SSH_MSG_KEXGSS_GROUP                      41

   The numbers 30-49 are specific to key exchange and may be redefined
   by other kex methods.

   The following message numbers have been defined for use with the
   'gssapi-with-mic' user authentication method:

          #define SSH_MSG_USERAUTH_GSSAPI_RESPONSE          60
          #define SSH_MSG_USERAUTH_GSSAPI_TOKEN             61
          #define SSH_MSG_USERAUTH_GSSAPI_EXCHANGE_COMPLETE 63
          #define SSH_MSG_USERAUTH_GSSAPI_ERROR             64
          #define SSH_MSG_USERAUTH_GSSAPI_ERRTOK            65
          #define SSH_MSG_USERAUTH_GSSAPI_MIC               66

   The numbers 60-79 are specific to user authentication and may be
   redefined by other user auth methods.  Note that in the method
   described in this document, message number 62 is unused.

















Hutzelman, et al.           Standards Track                    [Page 21]

RFC 4462                  SSH GSS-API Methods                   May 2006


/. 7.  GSS-API Considerations
========================================================


7.1.  Naming Conventions
--------------------------------------------------------

   In order to establish a GSS-API security context, the SSH client
   needs to determine the appropriate targ_name to use in identifying
   the server when calling GSS_Init_sec_context().  For this purpose,
   the GSS-API mechanism-independent name form for host-based services
   is used, as described in Section 4.1 of [GSSAPI].

   In particular, the targ_name to pass to GSS_Init_sec_context() is
   obtained by calling GSS_Import_name() with an input_name_type of
   GSS_C_NT_HOSTBASED_SERVICE, and an input_name_string consisting of
   the string "host@" concatenated with the hostname of the SSH server.

   Because the GSS-API mechanism uses the targ_name to authenticate the
   server's identity, it is important that it be determined in a secure
   fashion.  One common way to do this is to construct the targ_name
   from the hostname as typed by the user; unfortunately, because some
   GSS-API mechanisms do not canonicalize hostnames, it is likely that
   this technique will fail if the user has not typed a fully-qualified,
   canonical hostname.  Thus, implementers may wish to use other
   methods, but should take care to ensure they are secure.  For
   example, one should not rely on an unprotected DNS record to map a
   host alias to the primary name of a server, or an IP address to a
   hostname, since an attacker can modify the mapping and impersonate
   the server.

   Implementations of mechanisms conforming to this document MUST NOT
   use the results of insecure DNS queries to construct the targ_name.
   Clients MAY make use of a mapping provided by local configuration or
   use other secure means to determine the targ_name to be used.  If a
   client system is unable to securely determine which targ_name to use,
   then it SHOULD NOT use this mechanism.

7.2.  Channel Bindings
--------------------------------------------------------

   This document recommends that channel bindings SHOULD NOT be
   specified in the calls during context establishment.  This document
   does not specify any standard data to be used as channel bindings,
   and the use of network addresses as channel bindings may break SSH in
   environments where it is most useful.









Hutzelman, et al.           Standards Track                    [Page 22]

RFC 4462                  SSH GSS-API Methods                   May 2006


7.3.  SPNEGO
--------------------------------------------------------

   The use of the Simple and Protected GSS-API Negotiation Mechanism
   [SPNEGO] in conjunction with the authentication and key exchange
   methods described in this document is both unnecessary and
   undesirable.  As a result, mechanisms conforming to this document
   MUST NOT use SPNEGO as the underlying GSS-API mechanism.

   Since SSH performs its own negotiation of authentication and key
   exchange methods, the negotiation capability of SPNEGO alone does not
   provide any added benefit.  In fact, as described below, it has the
   potential to result in the use of a weaker method than desired.

   Normally, SPNEGO provides the added benefit of protecting the GSS-API
   mechanism negotiation.  It does this by having the server compute a
   MIC of the list of mechanisms proposed by the client, and then
   checking that value at the client.  In the case of key exchange, this
   protection is not needed because the key exchange methods described
   here already perform an equivalent operation; namely, they generate a
   MIC of the SSH exchange hash, which is a hash of several items
   including the lists of key exchange mechanisms supported by both
   sides.  In the case of user authentication, the protection is not
   needed because the negotiation occurs over a secure channel, and the
   host's identity has already been proved to the user.

   The use of SPNEGO combined with GSS-API mechanisms used without
   SPNEGO can lead to interoperability problems.  For example, a client
   that supports key exchange using the Kerberos V5 GSS-API mechanism
   [KRB5-GSS] only underneath SPNEGO will not interoperate with a server
   that supports key exchange only using the Kerberos V5 GSS-API
   mechanism directly.  As a result, allowing GSS-API mechanisms to be
   used both with and without SPNEGO is undesirable.

   If a client's policy is to first prefer GSS-API-based key exchange
   method X, then non-GSS-API method Y, then GSS-API-based method Z, and
   if a server supports mechanisms Y and Z but not X, then an attempt to
   use SPNEGO to negotiate a GSS-API mechanism might result in the use
   of method Z when method Y would have been preferable.  As a result,
   the use of SPNEGO could result in the subversion of the negotiation
   algorithm for key exchange methods as described in Section 7.1 of
   [SSH-TRANSPORT] and/or the negotiation algorithm for user
   authentication methods as described in [SSH-USERAUTH].









Hutzelman, et al.           Standards Track                    [Page 23]

RFC 4462                  SSH GSS-API Methods                   May 2006


/. 8.  IANA Considerations
========================================================


   Consistent with Section 8 of [SSH-ARCH] and Section 4.6 of
   [SSH-NUMBERS], this document makes the following registrations:

      The family of SSH key exchange method names beginning with "gss-
      group1-sha1-" and not containing the at-sign ('@'), to name the
      key exchange methods defined in Section 2.3.

      The family of SSH key exchange method names beginning with "gss-
      gex-sha1-" and not containing the at-sign ('@'), to name the key
      exchange methods defined in Section 2.5.

      All other SSH key exchange method names beginning with "gss-" and
      not containing the at-sign ('@'), to be reserved for future key
      exchange methods defined in conformance with this document, as
      noted in Section 2.6.

      The SSH host public key algorithm name "null", to name the NULL
      host key algorithm defined in Section 5.

      The SSH user authentication method name "gssapi-with-mic", to name
      the GSS-API user authentication method defined in Section 3.

      The SSH user authentication method name "gssapi-keyex", to name
      the GSS-API user authentication method defined in Section 4.

      The SSH user authentication method name "gssapi" is to be
      reserved, in order to avoid conflicts with implementations
      supporting an earlier version of this specification.

      The SSH user authentication method name "external-keyx" is to be
      reserved, in order to avoid conflicts with implementations
      supporting an earlier version of this specification.

   This document creates no new registries.

/. 9.  Security Considerations
========================================================


   This document describes authentication and key-exchange protocols.
   As such, security considerations are discussed throughout.

   This protocol depends on the SSH protocol itself, the GSS-API, any
   underlying GSS-API mechanisms that are used, and any protocols on
   which such mechanisms might depend.  Each of these components plays a
   part in the security of the resulting connection, and each will have
   its own security considerations.




Hutzelman, et al.           Standards Track                    [Page 24]

RFC 4462                  SSH GSS-API Methods                   May 2006


   The key exchange method described in Section 2 depends on the
   underlying GSS-API mechanism to provide both mutual authentication
   and per-message integrity services.  If either of these features is
   not supported by a particular GSS-API mechanism, or by a particular
   implementation of a GSS-API mechanism, then the key exchange is not
   secure and MUST fail.

   In order for the "external-keyx" user authentication method to be
   used, it MUST have access to user authentication information obtained
   as a side-effect of the key exchange.  If this information is
   unavailable, the authentication MUST fail.

   Revealing information about the reason for an authentication failure
   may be considered by some sites to be an unacceptable security risk
   for a production environment.  However, having that information
   available can be invaluable for debugging purposes.  Thus, it is
   RECOMMENDED that implementations provide a means for controlling, as
   a matter of policy, whether to send SSH_MSG_USERAUTH_GSSAPI_ERROR,
   SSH_MSG_USERAUTH_GSSAPI_ERRTOK, and SSH_MSG_KEXGSS_ERROR messages,
   and SSH_MSG_KEXGSS_CONTINUE messages containing a GSS-API error
   token.

/. 10.  Acknowledgements
========================================================


   The authors would like to thank the following individuals for their
   invaluable assistance and contributions to this document:

   o  Sam Hartman

   o  Love Hornquist-Astrand

   o  Joel N. Weber II

   o  Simon Wilkinson

   o  Nicolas Williams

   Much of the text describing DH group exchange was borrowed from
   [GROUP-EXCHANGE], by Markus Friedl, Niels Provos, and William A.
   Simpson.











Hutzelman, et al.           Standards Track                    [Page 25]

RFC 4462                  SSH GSS-API Methods                   May 2006


/. 11.  References
========================================================


11.1.  Normative References
--------------------------------------------------------

   [ASN1]            ISO/IEC, "ASN.1 Encoding Rules: Specification of
                     Basic Encoding Rules (BER), Canonical Encoding
                     Rules (CER) and Distinguished Encoding Rules
                     (DER)", ITU-T Recommendation X.690 (1997), ISO/
                     IEC 8825-1:1998, November 1998.

   [GROUP-EXCHANGE]  Friedl, M., Provos, N., and W. Simpson, "Diffie-
                     Hellman Group Exchange for the Secure Shell (SSH)
                     Transport Layer Protocol", RFC 4419, March 2006.

   [GSSAPI]          Linn, J., "Generic Security Service Application
                     Program Interface Version 2, Update 1", RFC 2743,
                     January 2000.

   [KEYWORDS]        Bradner, S., "Key words for use in RFCs to Indicate
                     Requirement Levels", BCP 14, RFC 2119, March 1997.

   [LANGTAG]         Alvestrand, H., "Tags for the Identification of
                     Languages", BCP 47, RFC 3066, January 2001.

   [MD5]             Rivest, R., "The MD5 Message-Digest Algorithm", RFC
                     1321, April 1992.

   [MIME]            Freed, N. and N. Borenstein, "Multipurpose Internet
                     Mail Extensions (MIME) Part One: Format of Internet
                     Message Bodies", RFC 2045, November 1996.

   [SSH-ARCH]        Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
                     Protocol Architecture", RFC 4251, January 2006.

   [SSH-CONNECT]     Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
                     Connection Protocol", RFC 4254, January 2006.

   [SSH-NUMBERS]     Lehtinen, S. and C. Lonvick, "The Secure Shell
                     (SSH) Protocol Assigned Numbers", RFC 4250, January
                     2006.

   [SSH-TRANSPORT]   Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
                     Transport Layer Protocol", RFC 4253, January 2006.

   [SSH-USERAUTH]    Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
                     Authentication Protocol", RFC 4252, January 2006.





Hutzelman, et al.           Standards Track                    [Page 26]

RFC 4462                  SSH GSS-API Methods                   May 2006


   [UTF8]            Yergeau, F., "UTF-8, a transformation format of ISO
                     10646", STD 63, RFC 3629, November 2003.

11.2.  Informative References
--------------------------------------------------------

   [KRB5]            Neuman, C., Yu, T., Hartman, S., and K. Raeburn,
                     "The Kerberos Network Authentication Service (V5)",
                     RFC 4120, July 2005.

   [KRB5-GSS]        Zhu, L., Jaganathan, K., and S. Hartman, "The
                     Kerberos Version 5 Generic Security Service
                     Application Program Interface (GSS-API) Mechanism:
                     Version 2", RFC 4121, July 2005.

   [SASLPREP]        Zeilenga, K., "SASLprep: Stringprep Profile for
                     User Names and Passwords", RFC 4013, February 2005.

   [SPNEGO]          Zhu, L., Leach, P., Jaganathan, K., and W.
                     Ingersoll, "The Simple and Protected Generic
                     Security Service Application Program Interface
                     (GSS-API) Negotiation Mechanism", RFC 4178, October
                     2005.





























Hutzelman, et al.           Standards Track                    [Page 27]

RFC 4462                  SSH GSS-API Methods                   May 2006


Authors' Addresses

   Jeffrey Hutzelman
   Carnegie Mellon University
   5000 Forbes Ave
   Pittsburgh, PA  15213
   US

   Phone: +1 412 268 7225
   EMail: jhutz+@cmu.edu
   URI:   http://www.cs.cmu.edu/~jhutz/


   Joseph Salowey
   Cisco Systems
   2901 Third Avenue
   Seattle, WA  98121
   US

   Phone: +1 206 256 3380
   EMail: jsalowey@cisco.com


   Joseph Galbraith
   Van Dyke Technologies, Inc.
   4848 Tramway Ridge Dr. NE
   Suite 101
   Albuquerque, NM  87111
   US

   EMail: galb@vandyke.com


   Von Welch
   University of Chicago & Argonne National Laboratory
   Distributed Systems Laboratory
   701 E. Washington
   Urbana, IL  61801
   US

   EMail: welch@mcs.anl.gov










Hutzelman, et al.           Standards Track                    [Page 28]

RFC 4462                  SSH GSS-API Methods                   May 2006


Full Copyright Statement

   Copyright (C) The Internet Society (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY AND THE INTERNET
   ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
   INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
   INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY IMPLIED
   WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is provided by the IETF
   Administrative Support Activity (IASA).







Hutzelman, et al.           Standards Track                    [Page 29]


/EXT RFC4716  The Secure Shell (SSH) Public Key File Format
========================================================
https://datatracker.ietf.org/doc/html/rfc4716

Network Working Group                                       J. Galbraith
Request for Comments: 4716                              VanDyke Software
Category: Informational                                        R. Thayer
                                                          Canola & Jones
                                                           November 2006


             The Secure Shell (SSH) Public Key File Format

Status of This Memo

   This memo provides information for the Internet community.  It does
   not specify an Internet standard of any kind.  Distribution of this
   memo is unlimited.

Copyright Notice

   Copyright (C) The IETF Trust (2006).

Abstract

   This document formally documents an existing public key file format
   in use for exchanging public keys between different Secure Shell
   (SSH) implementations.

   In addition, this document defines a standard textual representation
   for SSH public key fingerprints.

Table of Contents

   1. Introduction ....................................................2
   2. Conventions Used in This Document ...............................2
   3. Key File Format .................................................2
      3.1. Line Termination Characters ................................2
      3.2. Begin and End Markers ......................................3
      3.3. Key File Header ............................................3
           3.3.1. Subject Header ......................................3
           3.3.2. Comment Header ......................................4
           3.3.3. Private Use Headers .................................4
      3.4. Public Key File Body .......................................4
      3.5. Differences with RFC 1421 PEM Formats ......................4
      3.6. Examples ...................................................5
   4. Public Key Fingerprints .........................................6
   5. IANA Considerations .............................................6
   6. Security Considerations .........................................7
   7. References ......................................................8
      7.1. Normative References .......................................8
      7.2. Informative References .....................................8



Galbraith & Thayer           Informational                      [Page 1]

RFC 4716               SSH Public Key File Format          November 2006


/. 1.  Introduction
========================================================


   The SSH protocol supports the use of public/private key pairs in
   order to perform authentication based on public key cryptography.
   However, in order to use public key authentication in the SSH
   protocol, public keys must first be exchanged between client and
   server.

   This document formally describes an existing public key file format
   that can be used with any of the common existing file transfer
   mechanisms in order to exchange public keys.

   The SSH protocol also uses public/private key pairs to authenticate
   the server.  In this scenario, it is important to verify that the
   public key provided by the server is indeed the server's public key.
   This document describes a mechanism for creating a short text string
   that uniquely represents a particular public key, called
   fingerprinting.

/. 2.  Conventions Used in This Document
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC2119].

/. 3.  Key File Format
========================================================


   In order to implement public key authentication, SSH implementations
   must share public key files between the client and the server in
   order to interoperate.

   A key file is a text file, containing a sequence of lines.  Each line
   in the file MUST NOT be longer than 72 8-bit bytes excluding line
   termination characters.

3.1.  Line Termination Characters
--------------------------------------------------------

   Implementations SHOULD generate public key files using their system's
   local text file representation.

   In the event that public key files are not transferred as text files,
   implementations SHOULD be prepared to read files using any of the
   common line termination sequence, <CR>, <LF>, or <CR><LF>.








Galbraith & Thayer           Informational                      [Page 2]

RFC 4716               SSH Public Key File Format          November 2006


3.2.  Begin and End Markers
--------------------------------------------------------

   The first line of a conforming key file MUST be a begin marker, which
   is the literal text:

   ---- BEGIN SSH2 PUBLIC KEY ----

   The last line of a conforming key file MUST be an end marker, which
   is the literal text:

   ---- END SSH2 PUBLIC KEY ----

3.3.  Key File Header
--------------------------------------------------------

   The key file header section consists of multiple RFC822-style header
   fields.  Each field is a line of the following format:

   Header-tag ':' ' ' Header-value

   The Header-tag MUST NOT be more than 64 8-bit bytes and is case-
   insensitive.  The Header-value MUST NOT be more than 1024 8-bit
   bytes.  Each line in the header MUST NOT be more than 72 8-bit bytes.

   A line is continued if the last character in the line is a '\'.  If
   the last character of a line is a '\', then the logical contents of
   the line are formed by removing the '\' and the line termination
   characters, and appending the contents of the next line.

   The Header-tag MUST be encoded in US-ASCII.  The Header-value MUST be
   encoded in UTF-8 [RFC3629].

   A line that is not a continuation line that has no ':' in it is the
   first line of the base64-encoded body.  (See Section 3.4.)

   The space of header-tags is managed as described in Section 5.

   Compliant implementations MUST ignore headers with unrecognized
   header-tags.  Implementations SHOULD preserve such unrecognized
   headers when manipulating the key file.

3.3.1.  Subject Header
--------------------------------------------------------

   This field is used to store the login-name that the key was generated
   under.  For example:

   Subject: user





Galbraith & Thayer           Informational                      [Page 3]

RFC 4716               SSH Public Key File Format          November 2006


3.3.2.  Comment Header
--------------------------------------------------------

   The comment header contains a user-specified comment.  The comment
   SHOULD be displayed when using the key.

   It is suggested that this field default to user@hostname for the user
   and machine used to generate the key.  For example:

   Comment: user@example.com

   Currently, common practice is to quote the Header-value of the
   Comment by prefixing and suffixing it with '"' characters, and some
   existing implementations fail if these quotation marks are omitted.

   Compliant implementations MUST function correctly if the quotation
   marks are omitted.

   Implementations MAY include the quotation marks.  If the first and
   last characters of the Header-value are matching quotation marks,
   implementations SHOULD remove them before using the value.

3.3.3.  Private Use Headers
--------------------------------------------------------

   Headers with header-tags beginning with "x-" are reserved for private
   use.

3.4.  Public Key File Body
--------------------------------------------------------

   The body of a public key file is the base64 encoded ([RFC2045])
   public key data as specified by [RFC4253], Section 6.6:

         string    certificate or public key format identifier
         byte[n]   key/certificate data

   As with all other lines, each line in the body MUST NOT be longer
   than 72 8-bit bytes excluding line termination characters.

3.5.  Differences with RFC 1421 PEM Formats
--------------------------------------------------------

   Implementers should take care to notice that while the format is
   superficially similar to those specified by PEM [RFC1421] and OpenPGP
   [RFC2440], it is not identical; most notably:

   o  The other specifications use different BEGIN/END delimiters (five
      dashes, no space rather than four dashes and a space).

   o  There is no blank line before the start of the base64-encoded
      contents.



Galbraith & Thayer           Informational                      [Page 4]

RFC 4716               SSH Public Key File Format          November 2006


   o  There is no Cyclic Redundancy Check (CRC) at the end of the
      base64-encoded block.

   o  Header continuation uses a backslash at the end of the continued
      line rather than whitespace at the start of the next line.

3.6.  Examples
--------------------------------------------------------

   The following are some examples of public key files that are
   compliant (note that the examples all wrap before 72 bytes to meet
   IETF document requirements; however, they are still compliant.)

   ---- BEGIN SSH2 PUBLIC KEY ----
   Comment: "1024-bit RSA, converted from OpenSSH by me@example.com"
   x-command: /home/me/bin/lock-in-guest.sh
   AAAAB3NzaC1yc2EAAAABIwAAAIEA1on8gxCGJJWSRT4uOrR13mUaUk0hRf4RzxSZ1zRb
   YYFw8pfGesIFoEuVth4HKyF8k1y4mRUnYHP1XNMNMJl1JcEArC2asV8sHf6zSPVffozZ
   5TT4SfsUu/iKy9lUcCfXzwre4WWZSXXcPff+EHtWshahu3WzBdnGxm5Xoi89zcE=
   ---- END SSH2 PUBLIC KEY ----


   ---- BEGIN SSH2 PUBLIC KEY ----
   Comment: This is my public key for use on \
   servers which I don't like.
   AAAAB3NzaC1kc3MAAACBAPY8ZOHY2yFSJA6XYC9HRwNHxaehvx5wOJ0rzZdzoSOXxbET
   W6ToHv8D1UJ/z+zHo9Fiko5XybZnDIaBDHtblQ+Yp7StxyltHnXF1YLfKD1G4T6JYrdH
   YI14Om1eg9e4NnCRleaqoZPF3UGfZia6bXrGTQf3gJq2e7Yisk/gF+1VAAAAFQDb8D5c
   vwHWTZDPfX0D2s9Rd7NBvQAAAIEAlN92+Bb7D4KLYk3IwRbXblwXdkPggA4pfdtW9vGf
   J0/RHd+NjB4eo1D+0dix6tXwYGN7PKS5R/FXPNwxHPapcj9uL1Jn2AWQ2dsknf+i/FAA
   vioUPkmdMc0zuWoSOEsSNhVDtX3WdvVcGcBq9cetzrtOKWOocJmJ80qadxTRHtUAAACB
   AN7CY+KKv1gHpRzFwdQm7HK9bb1LAo2KwaoXnadFgeptNBQeSXG1vO+JsvphVMBJc9HS
   n24VYtYtsMu74qXviYjziVucWKjjKEb11juqnF0GDlB3VVmxHLmxnAz643WK42Z7dLM5
   sY29ouezv4Xz2PuMch5VGPP+CDqzCM4loWgV
   ---- END SSH2 PUBLIC KEY ----


   ---- BEGIN SSH2 PUBLIC KEY ----
   Comment: DSA Public Key for use with MyIsp
   AAAAB3NzaC1kc3MAAACBAPY8ZOHY2yFSJA6XYC9HRwNHxaehvx5wOJ0rzZdzoSOXxbET
   W6ToHv8D1UJ/z+zHo9Fiko5XybZnDIaBDHtblQ+Yp7StxyltHnXF1YLfKD1G4T6JYrdH
   YI14Om1eg9e4NnCRleaqoZPF3UGfZia6bXrGTQf3gJq2e7Yisk/gF+1VAAAAFQDb8D5c
   vwHWTZDPfX0D2s9Rd7NBvQAAAIEAlN92+Bb7D4KLYk3IwRbXblwXdkPggA4pfdtW9vGf
   J0/RHd+NjB4eo1D+0dix6tXwYGN7PKS5R/FXPNwxHPapcj9uL1Jn2AWQ2dsknf+i/FAA
   vioUPkmdMc0zuWoSOEsSNhVDtX3WdvVcGcBq9cetzrtOKWOocJmJ80qadxTRHtUAAACB
   AN7CY+KKv1gHpRzFwdQm7HK9bb1LAo2KwaoXnadFgeptNBQeSXG1vO+JsvphVMBJc9HS
   n24VYtYtsMu74qXviYjziVucWKjjKEb11juqnF0GDlB3VVmxHLmxnAz643WK42Z7dLM5
   sY29ouezv4Xz2PuMch5VGPP+CDqzCM4loWgV
   ---- END SSH2 PUBLIC KEY ----



Galbraith & Thayer           Informational                      [Page 5]

RFC 4716               SSH Public Key File Format          November 2006


   ---- BEGIN SSH2 PUBLIC KEY ----
   Subject: me
   Comment: 1024-bit rsa, created by me@example.com Mon Jan 15 \
   08:31:24 2001
   AAAAB3NzaC1yc2EAAAABJQAAAIEAiPWx6WM4lhHNedGfBpPJNPpZ7yKu+dnn1SJejgt4
   596k6YjzGGphH2TUxwKzxcKDKKezwkpfnxPkSMkuEspGRt/aZZ9wa++Oi7Qkr8prgHc4
   soW6NUlfDzpvZK2H5E7eQaSeP3SAwGmQKUFHCddNaP0L+hM7zhFNzjFvpaMgJw0=
   ---- END SSH2 PUBLIC KEY ----

/. 4.  Public Key Fingerprints
========================================================


   The security of the SSH protocols relies on the verification of
   public host keys.  Since public keys tend to be very large, it is
   difficult for a human to verify an entire host key.  Even with a
   Public Key Infrastructure (PKI) in place, it is useful to have a
   standard for exchanging short fingerprints of public keys.

   This section formally describes the method of generating public key
   fingerprints that is in common use in the SSH community.

   The fingerprint of a public key consists of the output of the MD5
   message-digest algorithm [RFC1321].  The input to the algorithm is
   the public key data as specified by [RFC4253].  (This is the same
   data that is base64 encoded to form the body of the public key file.)

   The output of the algorithm is presented to the user as a sequence of
   16 octets printed as hexadecimal with lowercase letters and separated
   by colons.

   For example: "c1:b1:30:29:d7:b8:de:6c:97:77:10:d7:46:41:63:87"

/. 5.  IANA Considerations
========================================================


   Section 3.3 defines a new namespace of "Header-tags".  These are
   US-ASCII strings of maximum length 64 characters and are
   case-insensitive.

   IANA has created and maintains a registry of these header-tags.  The
   registry maps each header-tag to a reference defining the header.

   The initial contents of the registry are as follows:

      subject defined in Section 3.3.1

      comment defined in Section 3.3.2

   Header-tags beginning with "x-" are reserved for private use, as
   defined in [RFC2434].



Galbraith & Thayer           Informational                      [Page 6]

RFC 4716               SSH Public Key File Format          November 2006


   All other allocations are to be made by IETF consensus, as defined in
   [RFC2434].

/. 6.  Security Considerations
========================================================


   The file format described by this document provides no mechanism to
   verify the integrity or otherwise detect tampering with the data
   stored in such files.  Given the potential of adversarial tampering
   with this data, system-specific measures (e.g., Access Control Lists,
   UNIX permissions, other Discretionary and/or Mandatory Access
   Controls) SHOULD be used to protect these files.  Also, if the
   contents of these files are transferred it SHOULD be done over a
   trusted channel.

   The header data allowed by this file format could contain an
   unlimited range of information.  While in many environments the
   information conveyed by this header data may be considered innocuous
   public information, it may constitute a channel through which
   information about a user, a key, or its use may be disclosed
   intentionally or otherwise (e.g., "Comment: Mary E. Jones, 123 Main
   St, Home Phone:...").  The presence and use of this header data
   SHOULD be reviewed by sites that deploy this file format.

   The public key fingerprint method presented here relies on the MD5
   one-way hash function, which is known to have certain weaknesses
   regarding its collision resistance; however, the particular use made
   of MD5 here depends solely on its 2nd-preimage resistance, not on its
   collision resistance.

   MD5 is used here for historical reasons.





















Galbraith & Thayer           Informational                      [Page 7]

RFC 4716               SSH Public Key File Format          November 2006


/. 7.  References
========================================================


7.1.  Normative References
--------------------------------------------------------

   [RFC1321]  Rivest, R., "The MD5 Message-Digest Algorithm", RFC 1321,
              April 1992.

   [RFC2045]  Freed, N. and N. Borenstein, "Multipurpose Internet Mail
              Extensions (MIME) Part One: Format of Internet Message
              Bodies", RFC 2045, November 1996.

   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC3629]  Yergeau, F., "UTF-8, a transformation format of ISO
              10646", STD 63, RFC 3629, November 2003.

   [RFC4253]  Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
              Transport Layer Protocol", RFC 4253, January 2006.

   [RFC2434]  Narten, T. and H. Alvestrand, "Guidelines for Writing an
              IANA Considerations Section in RFCs", BCP 26, RFC 2434,
              October 1998.

7.2.  Informative References
--------------------------------------------------------

   [RFC1421]  Linn, J., "Privacy Enhancement for Internet Electronic
              Mail: Part I: Message Encryption and Authentication
              Procedures", RFC 1421, February 1993.

   [RFC2440]  Callas, J., Donnerhacke, L., Finney, H., and R. Thayer,
              "OpenPGP Message Format", RFC 2440, November 1998.



















Galbraith & Thayer           Informational                      [Page 8]

RFC 4716               SSH Public Key File Format          November 2006


Authors' Addresses

   Joseph Galbraith
   VanDyke Software
   4848 Tramway Ridge Blvd
   Suite 101
   Albuquerque, NM  87111
   US

   Phone: +1 505 332 5700
   EMail: galb@vandyke.com


   Rodney Thayer
   Canola & Jones
   650 Castro Street Suite 120-205
   Mountain View CA 94041
   US

   Phone: +1 650 704 8389
   EMail: rodney@canola-jones.com






























Galbraith & Thayer           Informational                      [Page 9]

RFC 4716               SSH Public Key File Format          November 2006


Full Copyright Statement

   Copyright (C) The IETF Trust (2006).

   This document is subject to the rights, licenses and restrictions
   contained in BCP 78, and except as set forth therein, the authors
   retain all their rights.

   This document and the information contained herein are provided on an
   "AS IS" basis and THE CONTRIBUTOR, THE ORGANIZATION HE/SHE REPRESENTS
   OR IS SPONSORED BY (IF ANY), THE INTERNET SOCIETY, THE IETF TRUST,
   AND THE INTERNET ENGINEERING TASK FORCE DISCLAIM ALL WARRANTIES,
   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT
   THE USE OF THE INFORMATION HEREIN WILL NOT INFRINGE ANY RIGHTS OR ANY
   IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR
   PURPOSE.

Intellectual Property

   The IETF takes no position regarding the validity or scope of any
   Intellectual Property Rights or other rights that might be claimed to
   pertain to the implementation or use of the technology described in
   this document or the extent to which any license under such rights
   might or might not be available; nor does it represent that it has
   made any independent effort to identify any such rights.  Information
   on the procedures with respect to rights in RFC documents can be
   found in BCP 78 and BCP 79.

   Copies of IPR disclosures made to the IETF Secretariat and any
   assurances of licenses to be made available, or the result of an
   attempt made to obtain a general license or permission for the use of
   such proprietary rights by implementers or users of this
   specification can be obtained from the IETF on-line IPR repository at
   http://www.ietf.org/ipr.

   The IETF invites any interested party to bring to its attention any
   copyrights, patents or patent applications, or other proprietary
   rights that may cover technology that may be required to implement
   this standard.  Please address the information to the IETF at
   ietf-ipr@ietf.org.

Acknowledgement

   Funding for the RFC Editor function is currently provided by the
   Internet Society.






Galbraith & Thayer           Informational                     [Page 10]


/EXT RFC5656  Elliptic Curve Algorithm Integration in the Secure Shell Transport Layer
========================================================
https://datatracker.ietf.org/doc/html/rfc5656


Network Working Group                                         D. Stebila
Request for Comments: 5656           Queensland University of Technology
Category: Standards Track                                       J. Green
                                                      Queen's University
                                                           December 2009


Elliptic Curve Algorithm Integration in the Secure Shell Transport Layer

Abstract

   This document describes algorithms based on Elliptic Curve
   Cryptography (ECC) for use within the Secure Shell (SSH) transport
   protocol.  In particular, it specifies Elliptic Curve Diffie-Hellman
   (ECDH) key agreement, Elliptic Curve Menezes-Qu-Vanstone (ECMQV) key
   agreement, and Elliptic Curve Digital Signature Algorithm (ECDSA) for
   use in the SSH Transport Layer protocol.

Status of This Memo

   This document specifies an Internet standards track protocol for the
   Internet community, and requests discussion and suggestions for
   improvements.  Please refer to the current edition of the "Internet
   Official Protocol Standards" (STD 1) for the standardization state
   and status of this protocol.  Distribution of this memo is unlimited.

Copyright Notice

   Copyright (c) 2009 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (http://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the BSD License.

   This document may contain material from IETF Documents or IETF
   Contributions published or made publicly available before November
   10, 2008.  The person(s) controlling the copyright in some of this
   material may not have granted the IETF Trust the right to allow
   modifications of such material outside the IETF Standards Process.
   Without obtaining an adequate license from the person(s) controlling
   the copyright in such materials, this document may not be modified



Stebila & Green             Standards Track                     [Page 1]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   outside the IETF Standards Process, and derivative works of it may
   not be created outside the IETF Standards Process, except to format
   it for publication as an RFC or to translate it into languages other
   than English.

Table of Contents

   1. Introduction ....................................................3
   2. Notation ........................................................4
   3. SSH ECC Public Key Algorithm ....................................4
      3.1. Key Format .................................................4
           3.1.1. Signature Algorithm .................................5
           3.1.2. Signature Encoding ..................................5
   4. ECDH Key Exchange ...............................................5
   5. ECMQV Key Exchange ..............................................8
   6. Method Names ...................................................10
      6.1. Elliptic Curve Domain Parameter Identifiers ...............10
      6.2. ECC Public Key Algorithm (ecdsa-sha2-*) ...................11
           6.2.1. Elliptic Curve Digital Signature Algorithm .........11
      6.3. ECDH Key Exchange Method Names (ecdh-sha2-*) ..............12
      6.4. ECMQV Key Exchange and Verification Method Name
           (ecmqv-sha2) ..............................................12
   7. Key Exchange Messages ..........................................13
      7.1. ECDH Message Numbers ......................................13
      7.2. ECMQV Message Numbers .....................................13
   8. Manageability Considerations ...................................13
      8.1. Control of Function through Configuration and Policy ......13
      8.2. Impact on Network Operation ...............................14
   9. Security Considerations ........................................14
   10. Named Elliptic Curve Domain Parameters ........................16
      10.1. Required Curves ..........................................16
      10.2. Recommended Curves .......................................17
   11. IANA Considerations ...........................................17
   12. References ....................................................18
      12.1. Normative References .....................................18
      12.2. Informative References ...................................19
   Appendix A.  Acknowledgements .....................................20














Stebila & Green             Standards Track                     [Page 2]

RFC 5656             SSH ECC Algorithm Integration         December 2009


/. 1.  Introduction
========================================================


   This document adds the following elliptic curve cryptography
   algorithms to the Secure Shell arsenal: Elliptic Curve Diffie-Hellman
   (ECDH) and Elliptic Curve Digital Signature Algorithm (ECDSA), as
   well as utilizing the SHA2 family of secure hash algorithms.
   Additionally, support is provided for Elliptic Curve Menezes-Qu-
   Vanstone (ECMQV).

   Due to its small key sizes and its inclusion in the National Security
   Agency's Suite B, Elliptic Curve Cryptography (ECC) is becoming a
   widely utilized and attractive public-key cryptosystem.

   Compared to cryptosystems such as RSA, the Digital Signature
   Algorithm (DSA), and Diffie-Hellman (DH) key exchange, ECC variations
   on these schemes offer equivalent security with smaller key sizes.
   This is illustrated in the following table, based on Section 5.6.1 of
   NIST 800-57 [NIST-800-57], which gives approximate comparable key
   sizes for symmetric- and asymmetric-key cryptosystems based on the
   best known algorithms for attacking them.  L is the field size and N
   is the sub-field size.

      +-----------+------------------------------+-------+---------+
      | Symmetric | Discrete Log (e.g., DSA, DH) |  RSA  |   ECC   |
      +-----------+------------------------------+-------+---------+
      |     80    |       L = 1024, N = 160      |  1024 | 160-223 |
      |           |                              |       |         |
      |    112    |       L = 2048, N = 256      |  2048 | 224-255 |
      |           |                              |       |         |
      |    128    |       L = 3072, N = 256      |  3072 | 256-383 |
      |           |                              |       |         |
      |    192    |       L = 7680, N = 384      |  7680 | 384-511 |
      |           |                              |       |         |
      |    256    |      L = 15360, N = 512      | 15360 |   512+  |
      +-----------+------------------------------+-------+---------+

   Implementation of this specification requires familiarity with both
   SSH [RFC4251] [RFC4253] [RFC4250] and ECC [SEC1] (additional
   information on ECC available in [HMV04], [ANSI-X9.62], and
   [ANSI-X9.63]).

   This document is concerned with SSH implementation details;
   specification of the underlying cryptographic algorithms is left to
   other standards documents.







Stebila & Green             Standards Track                     [Page 3]

RFC 5656             SSH ECC Algorithm Integration         December 2009


/. 2.  Notation
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC2119].

   The data types boolean, byte, uint32, uint64, string, and mpint are
   to be interpreted in this document as described in [RFC4251].

   The size of a set of elliptic curve domain parameters on a prime
   curve is defined as the number of bits in the binary representation
   of the field order, commonly denoted by p.  Size on a
   characteristic-2 curve is defined as the number of bits in the binary
   representation of the field, commonly denoted by m.  A set of
   elliptic curve domain parameters defines a group of order n generated
   by a base point P.

/. 3.  SSH ECC Public Key Algorithm
========================================================


   The SSH ECC public key algorithm is defined by its key format,
   corresponding signature algorithm ECDSA, signature encoding, and
   algorithm identifiers.

   This section defines the family of "ecdsa-sha2-*" public key formats
   and corresponding signature formats.  Every compliant SSH ECC
   implementation MUST implement this public key format.

3.1.  Key Format
--------------------------------------------------------

   The "ecdsa-sha2-*" key formats all have the following encoding:

      string   "ecdsa-sha2-[identifier]"
      byte[n]  ecc_key_blob

   The ecc_key_blob value has the following specific encoding:

      string   [identifier]
      string   Q

   The string [identifier] is the identifier of the elliptic curve
   domain parameters.  The format of this string is specified in
   Section 6.1.  Information on the REQUIRED and RECOMMENDED sets of
   elliptic curve domain parameters for use with this algorithm can be
   found in Section 10.

   Q is the public key encoded from an elliptic curve point into an
   octet string as defined in Section 2.3.3 of [SEC1]; point compression
   MAY be used.



Stebila & Green             Standards Track                     [Page 4]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   The algorithm for ECC key generation can be found in Section 3.2 of
   [SEC1].  Given some elliptic curve domain parameters, an ECC key pair
   can be generated containing a private key (an integer d), and a
   public key (an elliptic curve point Q).

3.1.1.  Signature Algorithm
--------------------------------------------------------

   Signing and verifying is done using the Elliptic Curve Digital
   Signature Algorithm (ECDSA).  ECDSA is specified in [SEC1].  The
   message hashing algorithm MUST be from the SHA2 family of hash
   functions [FIPS-180-3] and is chosen according to the curve size as
   specified in Section 6.2.1.

3.1.2.  Signature Encoding
--------------------------------------------------------

   Signatures are encoded as follows:

      string   "ecdsa-sha2-[identifier]"
      string   ecdsa_signature_blob

   The string [identifier] is the identifier of the elliptic curve
   domain parameters.  The format of this string is specified in
   Section 6.1.  Information on the REQUIRED and RECOMMENDED sets of
   elliptic curve domain parameters for use with this algorithm can be
   found in Section 10.

   The ecdsa_signature_blob value has the following specific encoding:

      mpint    r
      mpint    s

   The integers r and s are the output of the ECDSA algorithm.

   The width of the integer fields is determined by the curve being
   used.  Note that the integers r and s are integers modulo the order
   of the cryptographic subgroup, which may be larger than the size of
   the finite field.

/. 4.  ECDH Key Exchange
========================================================


   The Elliptic Curve Diffie-Hellman (ECDH) key exchange method
   generates a shared secret from an ephemeral local elliptic curve
   private key and ephemeral remote elliptic curve public key.  This key
   exchange method provides explicit server authentication as defined in
   [RFC4253] using a signature on the exchange hash.  Every compliant
   SSH ECC implementation MUST implement ECDH key exchange.





Stebila & Green             Standards Track                     [Page 5]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   The primitive used for shared key generation is ECDH with cofactor
   multiplication, the full specification of which can be found in
   Section 3.3.2 of [SEC1].  The algorithm for key pair generation can
   be found in Section 3.2.1 of [SEC1].

   The family of key exchange method names defined for use with this key
   exchange can be found in Section 6.3.  Algorithm negotiation chooses
   the public key algorithm to be used for signing and the method name
   of the key exchange.  The method name of the key exchange chosen
   determines the elliptic curve domain parameters and hash function to
   be used in the remainder of this section.

   Information on the REQUIRED and RECOMMENDED elliptic curve domain
   parameters for use with this method can be found in Section 10.

   All elliptic curve public keys MUST be validated after they are
   received.  An example of a validation algorithm can be found in
   Section 3.2.2 of [SEC1].  If a key fails validation, the key exchange
   MUST fail.

   The elliptic curve public keys (points) that must be transmitted are
   encoded into octet strings before they are transmitted.  The
   transformation between elliptic curve points and octet strings is
   specified in Sections 2.3.3 and 2.3.4 of [SEC1]; point compression
   MAY be used.  The output of shared key generation is a field element
   xp.  The SSH framework requires that the shared key be an integer.
   The conversion between a field element and an integer is specified in
   Section 2.3.9 of [SEC1].

   Specification of the message numbers SSH_MSG_KEX_ECDH_INIT and
   SSH_MSG_KEX_ECDH_REPLY is found in Section 7.




















Stebila & Green             Standards Track                     [Page 6]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   The following is an overview of the key exchange process:

      Client                                                Server
      ------                                                ------
      Generate ephemeral key pair.
      SSH_MSG_KEX_ECDH_INIT  -------------->

                                      Verify received key is valid.
                                       Generate ephemeral key pair.
                                             Compute shared secret.
                                   Generate and sign exchange hash.
                             <------------- SSH_MSG_KEX_ECDH_REPLY

      Verify received key is valid.
      *Verify host key belongs to server.
      Compute shared secret.
      Generate exchange hash.
      Verify server's signature.

      *  It is RECOMMENDED that the client verify that the host key sent
         is the server's host key (for example, using a local database).
         The client MAY accept the host key without verification, but
         doing so will render the protocol insecure against active
         attacks; see the discussion in Section 4.1 of [RFC4251].

   This is implemented using the following messages.

   The client sends:

      byte     SSH_MSG_KEX_ECDH_INIT
      string   Q_C, client's ephemeral public key octet string

   The server responds with:

      byte     SSH_MSG_KEX_ECDH_REPLY
      string   K_S, server's public host key
      string   Q_S, server's ephemeral public key octet string
      string   the signature on the exchange hash













Stebila & Green             Standards Track                     [Page 7]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   The exchange hash H is computed as the hash of the concatenation of
   the following.

      string   V_C, client's identification string (CR and LF excluded)
      string   V_S, server's identification string (CR and LF excluded)
      string   I_C, payload of the client's SSH_MSG_KEXINIT
      string   I_S, payload of the server's SSH_MSG_KEXINIT
      string   K_S, server's public host key
      string   Q_C, client's ephemeral public key octet string
      string   Q_S, server's ephemeral public key octet string
      mpint    K,   shared secret

/. 5.  ECMQV Key Exchange
========================================================


   The Elliptic Curve Menezes-Qu-Vanstone (ECMQV) key exchange algorithm
   generates a shared secret from two local elliptic curve key pairs and
   two remote public keys.  This key exchange method provides implicit
   server authentication as defined in [RFC4253].  The ECMQV key
   exchange method is OPTIONAL.

   The key exchange method name defined for use with this key exchange
   is "ecmqv-sha2".  This method name gives a hashing algorithm that is
   to be used for the Hashed Message Authentication Code (HMAC) below.
   Future RFCs may define new method names specifying new hash
   algorithms for use with ECMQV.  More information about the method
   name and HMAC can be found in Section 6.4.

   In general, the ECMQV key exchange is performed using the ephemeral
   and long-term key pair of both the client and server, which is a
   total of 4 keys.  Within the framework of SSH, the client does not
   have a long-term key pair that needs to be authenticated.  Therefore,
   we generate an ephemeral key and use that as both the clients keys.
   This is more efficient than using two different ephemeral keys, and
   it does not adversely affect security (it is analogous to the one-
   pass protocol in Section 6.1 of [LMQSV98]).

   A full description of the ECMQV primitive can be found in Section 3.4
   of [SEC1].  The algorithm for key pair generation can be found in
   Section 3.2.1 of [SEC1].

   During algorithm negotiation with the SSH_MSG_KEXINIT messages, the
   ECMQV key exchange method can only be chosen if a public key
   algorithm supporting ECC host keys can also be chosen.  This is due
   to the use of implicit server authentication in this key exchange
   method.  This case is handled the same way that key exchange methods
   requiring encryption/signature capable public key algorithms are





Stebila & Green             Standards Track                     [Page 8]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   handled in Section 7.1 of [RFC4253].  If ECMQV key exchange is
   chosen, then the public key algorithm supporting ECC host keys MUST
   also be chosen.

   ECMQV requires that all the keys used to generate a shared secret are
   generated over the same elliptic curve domain parameters.  Since the
   host key is used in the generation of the shared secret, allowing for
   implicit server authentication, the domain parameters associated with
   the host key are used throughout this section.

   All elliptic curve public keys MUST be validated after they are
   received.  An example of a validation algorithm can be found in
   Section 3.2.2 of [SEC1].  If a key fails validation, the key exchange
   MUST fail.

   The elliptic curve ephemeral public keys (points) that must be
   transmitted are encoded into octet strings before they are
   transmitted.  The transformation between elliptic curve points and
   octet strings is specified in Sections 2.3.3 and 2.3.4 of [SEC1];
   point compression MAY be used.  The output of shared key generation
   is a field element xp.  The SSH framework requires that the shared
   key be an integer.  The conversion between a field element and an
   integer is specified in Section 2.3.9 of [SEC1].

   The following is an overview of the key exchange process:

      Client                                                Server
      ------                                                ------
      Generate ephemeral key pair.
      SSH_MSG_KEX_ECMQV_INIT ------------->

                                      Verify received key is valid.
                                       Generate ephemeral key pair.
                                             Compute shared secret.
                                Generate exchange hash and compute
                              HMAC over it using the shared secret.
                            <------------- SSH_MSG_KEX_ECMQV_REPLY

      Verify received keys are valid.
      *Verify host key belongs to server.
      Compute shared secret.
      Verify HMAC.

      *  It is RECOMMENDED that the client verify that the host key sent
         is the server's host key (for example, using a local database).
         The client MAY accept the host key without verification, but
         doing so will render the protocol insecure against active
         attacks.



Stebila & Green             Standards Track                     [Page 9]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   The specification of the message numbers SSH_MSG_ECMQV_INIT and
   SSH_MSG_ECMQV_REPLY can be found in Section 7.

   This key exchange algorithm is implemented with the following
   messages.

   The client sends:

      byte     SSH_MSG_ECMQV_INIT
      string   Q_C, client's ephemeral public key octet string

   The server sends:

      byte     SSH_MSG_ECMQV_REPLY
      string   K_S, server's public host key
      string   Q_S, server's ephemeral public key octet string
      string   HMAC tag computed on H using the shared secret

   The hash H is formed by applying the algorithm HASH on a
   concatenation of the following:

      string   V_C, client's identification string (CR and LF excluded)
      string   V_S, server's identification string (CR and LF excluded)
      string   I_C, payload of the client's SSH_MSG_KEXINIT
      string   I_S, payload of the server's SSH_MSG_KEXINIT
      string   K_S, server's public host key
      string   Q_C, client's ephemeral public key octet string
      string   Q_S, server's ephemeral public key octet string
      mpint    K,   shared secret

/. 6.  Method Names
========================================================


   This document defines a new family of key exchange method names, a
   new key exchange method name, and a new family of public key
   algorithm names in the SSH name registry.

6.1.  Elliptic Curve Domain Parameter Identifiers
--------------------------------------------------------

   This section specifies identifiers encoding named elliptic curve
   domain parameters.  These identifiers are used in this document to
   identify the curve used in the SSH ECC public key format, the ECDSA
   signature blob, and the ECDH method name.

   For the REQUIRED elliptic curves nistp256, nistp384, and nistp521,
   the elliptic curve domain parameter identifiers are the strings
   "nistp256", "nistp384", and "nistp521".





Stebila & Green             Standards Track                    [Page 10]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   For all other elliptic curves, including all other NIST curves and
   all other RECOMMENDED curves, the elliptic curve domain parameter
   identifier is the ASCII period-separated decimal representation of
   the Abstract Syntax Notation One (ASN.1) [ASN1] Object Identifier
   (OID) of the named curve domain parameters that are associated with
   the server's ECC host keys.  This identifier is defined provided that
   the concatenation of the public key format identifier and the
   elliptic curve domain parameter identifier (or the method name and
   the elliptic curve domain parameter identifier) does not exceed the
   maximum specified by the SSH protocol architecture [RFC4251], namely
   64 characters; otherwise, the identifier for that curve is undefined,
   and the curve is not supported by this specification.

   A list of the REQUIRED and RECOMMENDED curves and their OIDs can be
   found in Section 10.

   Note that implementations MUST use the string identifiers for the
   three REQUIRED NIST curves, even when an OID exists for that curve.

6.2.  ECC Public Key Algorithm (ecdsa-sha2-*)
--------------------------------------------------------

   The SSH ECC public key algorithm is specified by a family of public
   key format identifiers.  Each identifier is the concatenation of the
   string "ecdsa-sha2-" with the elliptic curve domain parameter
   identifier as defined in Section 6.1.  A list of the required and
   recommended curves and their OIDs can be found in Section 10.

   For example, the method name for ECDH key exchange with ephemeral
   keys generated on the nistp256 curve is "ecdsa-sha2-nistp256".

6.2.1.  Elliptic Curve Digital Signature Algorithm
--------------------------------------------------------

   The Elliptic Curve Digital Signature Algorithm (ECDSA) is specified
   for use with the SSH ECC public key algorithm.

   The hashing algorithm defined by this family of method names is the
   SHA2 family of hashing algorithms [FIPS-180-3].  The algorithm from
   the SHA2 family that will be used is chosen based on the size of the
   named curve specified in the public key:












Stebila & Green             Standards Track                    [Page 11]

RFC 5656             SSH ECC Algorithm Integration         December 2009


                    +----------------+----------------+
                    |   Curve Size   | Hash Algorithm |
                    +----------------+----------------+
                    |    b <= 256    |     SHA-256    |
                    |                |                |
                    | 256 < b <= 384 |     SHA-384    |
                    |                |                |
                    |     384 < b    |     SHA-512    |
                    +----------------+----------------+

6.3.  ECDH Key Exchange Method Names (ecdh-sha2-*)
--------------------------------------------------------

   The Elliptic Curve Diffie-Hellman (ECDH) key exchange is defined by a
   family of method names.  Each method name is the concatenation of the
   string "ecdh-sha2-" with the elliptic curve domain parameter
   identifier as defined in Section 6.1.  A list of the required and
   recommended curves and their OIDs can be found in Section 10.

   For example, the method name for ECDH key exchange with ephemeral
   keys generated on the sect409k1 curve is "ecdh-sha2-1.3.132.0.36".

   The hashing algorithm defined by this family of method names is the
   SHA2 family of hashing algorithms [FIPS-180-3].  The hashing
   algorithm is defined in the method name to allow room for other
   algorithms to be defined in future documents.  The algorithm from the
   SHA2 family that will be used is chosen based on the size of the
   named curve specified in the method name according to the table in
   Section 6.2.1.

   The concatenation of any so encoded ASN.1 OID specifying a set of
   elliptic curve domain parameters with "ecdh-sha2-" is implicitly
   registered under this specification.

6.4.  ECMQV Key Exchange and Verification Method Name (ecmqv-sha2)
--------------------------------------------------------

   The Elliptic Curve Menezes-Qu-Vanstone (ECMQV) key exchange is
   defined by the method name "ecmqv-sha2".  Unlike the ECDH key
   exchange method, ECMQV relies on a public key algorithm that uses ECC
   keys: it does not need a family of method names because the curve
   information can be gained from the public key algorithm.

   The hashing and message authentication code algorithms are defined by
   the method name to allow room for other algorithms to be defined for
   use with ECMQV in future documents.







Stebila & Green             Standards Track                    [Page 12]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   The hashing algorithm defined by this method name is the SHA2 family
   of hashing algorithms [FIPS-180-3].  The algorithm from the SHA2
   family that will be used is chosen based on the size of the named
   curve specified for use with ECMQV by the chosen public key algorithm
   according to the table in Section 6.2.1.

   The keyed-hash message authentication code that is used to identify
   the server and verify communications is based on the hash chosen
   above.  The information on implementing the HMAC based on the chosen
   hash algorithm can be found in [RFC2104].

/. 7.  Key Exchange Messages
========================================================


   The message numbers 30-49 are key-exchange-specific and in a private
   namespace defined in [RFC4250] that may be redefined by any key
   exchange method [RFC4253] without requiring an IANA registration
   process.

   The following message numbers have been defined in this document:

7.1.  ECDH Message Numbers
--------------------------------------------------------

      #define SSH_MSG_KEX_ECDH_INIT                30
      #define SSH_MSG_KEX_ECDH_REPLY               31

7.2.  ECMQV Message Numbers
--------------------------------------------------------

      #define SSH_MSG_ECMQV_INIT                   30
      #define SSH_MSG_ECMQV_REPLY                  31

/. 8.  Manageability Considerations
========================================================


   As this document only provides new public key algorithms and key
   exchange methods within the existing Secure Shell protocol
   architecture, there are few manageability considerations beyond those
   that apply for existing Secure Shell implementations.  Additional
   manageability considerations are listed below.

8.1.  Control of Function through Configuration and Policy
--------------------------------------------------------

   Section 10 specifies REQUIRED and RECOMMENDED elliptic curve domain
   parameters to be used with the public key algorithms and key exchange
   methods defined in this document.  Implementers SHOULD allow system
   administrators to disable some curves, including REQUIRED or
   RECOMMENDED curves, to meet local security policy.






Stebila & Green             Standards Track                    [Page 13]

RFC 5656             SSH ECC Algorithm Integration         December 2009


8.2.  Impact on Network Operation
--------------------------------------------------------

   As this document provides new functionality within the Secure Shell
   protocol architecture, the only impact on network operations is the
   impact on existing Secure Shell implementations.  The Secure Shell
   protocol provides negotiation mechanisms for public key algorithms
   and key exchange methods: any implementations that do not recognize
   the algorithms and methods defined in this document will ignore them
   in the negotiation and use the next mutually supported algorithm or
   method, causing no negative impact on backward compatibility.

   The use of elliptic curve cryptography should not place a significant
   computational burden on an implementing server.  In fact, due to its
   smaller key sizes, elliptic curve cryptography can be implemented
   more efficiently for the same security level than RSA, finite field
   Diffie-Hellman, or DSA.

/. 9.  Security Considerations
========================================================


   This document provides new public key algorithms and new key
   agreement methods for the Secure Shell protocol.  For the most part,
   the security considerations involved in using the Secure Shell
   protocol apply.  Additionally, implementers should be aware of
   security considerations specific to elliptic curve cryptography.

   For all three classes of functionality added by this document (the
   public key algorithms involving ECDSA, key exchange involving ECDH,
   and authenticated key exchange involving ECMQV), the current best
   known technique for breaking the cryptosystems is by solving the
   elliptic curve discrete logarithm problem (ECDLP).

   The difficulty of breaking the ECDLP depends on the size and quality
   of the elliptic curve parameters.  Certain types of curves can be
   more susceptible to known attacks than others.  For example, curves
   over finite fields GF(2^m), where m is composite, may be susceptible
   to an attack based on the Weil descent.  All of the RECOMMENDED
   curves in Section 10 do not have this problem.  System administrators
   should be cautious when enabling curves other than the ones specified
   in Section 10 and should make a more detailed investigation into the
   security of the curve in question.

   It is believed (see, for example, Section B.2.1 of [SEC1]) that when
   curve parameters are generated at random, the curves will be
   resistant to special attacks, and must rely on the most general
   attacks.  The REQUIRED curves in Section 10 were all generated
   verifiably pseudorandomly.  The runtime of general attacks depends on
   the algorithm used.  At present, the best known algorithm is the
   Pollard-rho method.  (Shor's algorithm for quantum computers can



Stebila & Green             Standards Track                    [Page 14]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   solve the ECDLP in polynomial time, but at present large-scale
   quantum computers have not been constructed and significant
   experimental physics and engineering work needs to be done before
   large-scale quantum computers can be constructed.  There is no solid
   estimate as to when this may occur, but it is widely believed to be
   at least 20 years from the present.)

   Based on projections of computation power, it is possible to estimate
   the running time of the best known attacks based on the size of the
   finite field.  The table in Section 1 gives an estimate of the
   equivalence between elliptic curve field size and symmetric key size.
   Roughly speaking, an N-bit elliptic curve offers the same security as
   an N/2-bit symmetric cipher, so a 256-bit elliptic curve (such as the
   REQUIRED nistp256 curve) is suitable for use with 128-bit AES, for
   example.

   Many estimates consider that 2^80-2^90 operations are beyond
   feasible, so that would suggest using elliptic curves of at least
   160-180 bits.  The REQUIRED curves in this document are 256-, 384-,
   and 521-bit curves; implementations SHOULD NOT use curves smaller
   than 160 bits.

   A detailed discussion on the security considerations of elliptic
   curve domain parameters and the ECDH, ECDSA, and ECMQV algorithms can
   be found in Appendix B of [SEC1].

   Additionally, the key exchange methods defined in this document rely
   on the SHA2 family of hash functions, defined in [FIPS-180-3].  The
   appropriate security considerations of that document apply.  Although
   some weaknesses have been discovered in the predecessor, SHA-1, no
   weaknesses in the SHA2 family are known at present.  The SHA2 family
   consists of four variants -- SHA-224, SHA-256, SHA-384, and SHA-521
   -- named after their digest lengths.  In the absence of special
   purpose attacks exploiting the specific structure of the hash
   function, the difficulty of finding collisions, preimages, and second
   preimages for the hash function is related to the digest length.
   This document specifies in Section 6.2.1 which SHA2 variant should be
   used with which elliptic curve size based on this guidance.

   Since ECDH and ECMQV allow for elliptic curves of arbitrary sizes and
   thus arbitrary security strength, it is important that the size of
   elliptic curve be chosen to match the security strength of other
   elements of the SSH handshake.  In particular, host key sizes,
   hashing algorithms and bulk encryption algorithms must be chosen
   appropriately.  Information regarding estimated equivalence of key
   sizes is available in [NIST-800-57]; the discussion in [RFC3766] is
   also relevant.  We note in particular that when ECDSA is used as the




Stebila & Green             Standards Track                    [Page 15]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   signature algorithm and ECDH is used as the key exchange method, if
   curves of different sizes are used, then it is possible that
   different hash functions from the SHA2 family could be used.

   The REQUIRED and RECOMMENDED curves in this document are at present
   believed to offer security at the levels indicated in this section
   and as specified with the table in Section 1.

   System administrators and implementers should take careful
   consideration of the security issues when enabling curves other than
   the REQUIRED or RECOMMENDED curves in this document.  Not all
   elliptic curves are secure, even if they are over a large field.

   Implementers SHOULD ensure that any ephemeral private keys or random
   values -- including the value k used in ECDSA signature generation
   and the ephemeral private key values in ECDH and ECMQV -- are
   generated from a random number generator or a properly seeded
   pseudorandom number generator, are protected from leakage, are not
   reused outside of the context of the protocol in this document, and
   are erased from memory when no longer needed.

/. 10.  Named Elliptic Curve Domain Parameters
========================================================


   Implementations MAY support any ASN.1 object identifier (OID) in the
   ASN.1 object tree that defines a set of elliptic curve domain
   parameters [ASN1].

10.1.  Required Curves
--------------------------------------------------------

   Every SSH ECC implementation MUST support the named curves below.
   These curves are defined in [SEC2]; the NIST curves were originally
   defined in [NIST-CURVES].  These curves SHOULD always be enabled
   unless specifically disabled by local security policy.

              +----------+-----------+---------------------+
              |   NIST*  |    SEC    |         OID         |
              +----------+-----------+---------------------+
              | nistp256 | secp256r1 | 1.2.840.10045.3.1.7 |
              |          |           |                     |
              | nistp384 | secp384r1 |     1.3.132.0.34    |
              |          |           |                     |
              | nistp521 | secp521r1 |     1.3.132.0.35    |
              +----------+-----------+---------------------+

      *  For these three REQUIRED curves, the elliptic curve domain
         parameter identifier is the string in the first column of the
         table, the NIST name of the curve.  (See Section 6.1.)




Stebila & Green             Standards Track                    [Page 16]

RFC 5656             SSH ECC Algorithm Integration         December 2009


10.2.  Recommended Curves
--------------------------------------------------------

   It is RECOMMENDED that SSH ECC implementations also support the
   following curves.  These curves are defined in [SEC2].

              +----------+-----------+---------------------+
              |   NIST   |    SEC    |         OID*        |
              +----------+-----------+---------------------+
              | nistk163 | sect163k1 |     1.3.132.0.1     |
              |          |           |                     |
              | nistp192 | secp192r1 | 1.2.840.10045.3.1.1 |
              |          |           |                     |
              | nistp224 | secp224r1 |     1.3.132.0.33    |
              |          |           |                     |
              | nistk233 | sect233k1 |     1.3.132.0.26    |
              |          |           |                     |
              | nistb233 | sect233r1 |     1.3.132.0.27    |
              |          |           |                     |
              | nistk283 | sect283k1 |     1.3.132.0.16    |
              |          |           |                     |
              | nistk409 | sect409k1 |     1.3.132.0.36    |
              |          |           |                     |
              | nistb409 | sect409r1 |     1.3.132.0.37    |
              |          |           |                     |
              | nistt571 | sect571k1 |     1.3.132.0.38    |
              +----------+-----------+---------------------+

      *  For these RECOMMENDED curves, the elliptic curve domain
         parameter identifier is the string in the third column of the
         table, the ASCII representation of the OID of the curve.  (See
         Section 6.1.)

/. 11.  IANA Considerations
========================================================


   Consistent with Section 8 of [RFC4251] and Section 4.6 of [RFC4250],
   this document makes the following registrations:

   In the Public Key Algorithm Names registry: The family of SSH public
   key algorithm names beginning with "ecdsa-sha2-" and not containing
   the at-sign ('@'), to name the public key algorithms defined in
   Section 3.

   In the Key Exchange Method Names registry: The family of SSH key
   exchange method names beginning with "ecdh-sha2-" and not containing
   the at-sign ('@'), to name the key exchange methods defined in
   Section 4.





Stebila & Green             Standards Track                    [Page 17]

RFC 5656             SSH ECC Algorithm Integration         December 2009


   In the Key Exchange Method Names registry: The SSH key exchange
   method name "ecmqv-sha2" to name the key exchange method defined in
   Section 5.

   This document creates no new registries.

/. 12.  References
========================================================


12.1.  Normative References
--------------------------------------------------------

   [ASN1]         International Telecommunications Union, "Abstract
                  Syntax Notation One (ASN.1): Specification of basic
                  notation",  X.680, July 2002.

   [FIPS-180-3]   National Institute of Standards and Technology,
                  "Secure Hash Standard", FIPS 180-3, October 2008.

   [RFC2104]      Krawczyk, H., Bellare, M., and R. Canetti, "HMAC:
                  Keyed-Hashing for Message Authentication", RFC 2104,
                  February 1997.

   [RFC2119]      Bradner, S., "Key words for use in RFCs to Indicate
                  Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC3766]      Orman, H. and P. Hoffman, "Determining Strengths For
                  Public Keys Used For Exchanging Symmetric Keys",
                  BCP 86, RFC 3766, April 2004.

   [RFC4250]      Lehtinen, S. and C. Lonvick, "The Secure Shell (SSH)
                  Protocol Assigned Numbers", RFC 4250, January 2006.

   [RFC4251]      Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
                  Protocol Architecture", RFC 4251, January 2006.

   [RFC4253]      Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
                  Transport Layer Protocol", RFC 4253, January 2006.

   [SEC1]         Standards for Efficient Cryptography Group, "Elliptic
                  Curve Cryptography", SEC 1, May 2009,
                  <http://www.secg.org/download/aid-780/sec1-v2.pdf>.

   [SEC2]         Standards for Efficient Cryptography Group,
                  "Recommended Elliptic Curve Domain Parameters", SEC 2,
                  September 2000,
                  <http://www.secg.org/download/aid-386/sec2_final.pdf>.






Stebila & Green             Standards Track                    [Page 18]

RFC 5656             SSH ECC Algorithm Integration         December 2009


12.2.  Informative References
--------------------------------------------------------

   [ANSI-X9.62]   American National Standards Institute, "Public Key
                  Cryptography For The Financial Services Industry: The
                  Elliptic Curve Digital Signature Algorithm (ECDSA)",
                  ANSI X9.62, 1998.

   [ANSI-X9.63]   American National Standards Institute, "Public Key
                  Cryptography For The Financial Services Industry: Key
                  Agreement and Key Transport Using Elliptic Curve
                  Cryptography", ANSI X9.63, January 1999.

   [HMV04]        Hankerson, D., Menezes, A., and S. Vanstone, "Guide to
                  Elliptic Curve Cryptography", Springer ISBN
                  038795273X, 2004.

   [LMQSV98]      Law, L., Menezes, A., Qu, M., Solinas, J., and S.
                  Vanstone, "An Efficient Protocol for Authenticated Key
                  Agreement", University of Waterloo Technical Report
                  CORR 98-05, August 1998, <http://
                  www.cacr.math.uwaterloo.ca/techreports/1998/
                  corr98-05.pdf>.

   [NIST-800-57]  National Institute of Standards and Technology,
                  "Recommendation for Key Management - Part 1: General
                  (Revised)", NIST Special Publication 800-57,
                  March 2007.

   [NIST-CURVES]  National Institute of Standards and Technology,
                  "Recommended Elliptic Curves for Federal Government
                  Use", July 1999.




















Stebila & Green             Standards Track                    [Page 19]

RFC 5656             SSH ECC Algorithm Integration         December 2009


Appendix A.  Acknowledgements

   The authors acknowledge helpful comments from James Blaisdell, David
   Harrington, Alfred Hoenes, Russ Housley, Jeffrey Hutzelman, Kevin
   Igoe, Rob Lambert, Jan Pechanek, Tim Polk, Sean Turner, Nicolas
   Williams, and members of the ietf-ssh@netbsd.org mailing list.

Authors' Addresses

   Douglas Stebila
   Queensland University of Technology
   Information Security Institute
   Level 7, 126 Margaret St
   Brisbane, Queensland  4000
   Australia

   EMail: douglas@stebila.ca


   Jon Green
   Queen's University
   Parallel Processing Research Laboratory
   Department of Electrical and Computer Engineering
   Room 614, Walter Light Hall
   Kingston, Ontario  K7L 3N6
   Canada

   EMail: jonathan.green@queensu.ca























Stebila & Green             Standards Track                    [Page 20]


/EXT RFC6594  Use of the SHA-256 Algorithm with RSA, DSA, and ECDSA in SSHFP Resource Records
========================================================
https://datatracker.ietf.org/doc/html/rfc6594

Internet Engineering Task Force (IETF)                           O. Sury
Request for Comments: 6594                                        CZ.NIC
Category: Standards Track                                     April 2012
ISSN: 2070-1721


                 Use of the SHA-256 Algorithm with RSA,
                   Digital Signature Algorithm (DSA),
        and Elliptic Curve DSA (ECDSA) in SSHFP Resource Records

Abstract

   This document updates the IANA registries in RFC 4255, which defines
   SSHFP, a DNS Resource Record (RR) that contains a standard Secure
   Shell (SSH) key fingerprint used to verify SSH host keys using DNS
   Security Extensions (DNSSEC).  This document defines additional
   options supporting SSH public keys applying the Elliptic Curve
   Digital Signature Algorithm (ECDSA) and the implementation of
   fingerprints computed using the SHA-256 message digest algorithm in
   SSHFP Resource Records.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   fInternet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 5741.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   http://www.rfc-editor.org/info/rfc6594.

Copyright Notice

   Copyright (c) 2012 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (http://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must





Sury                         Standards Track                    [Page 1]

RFC 6594         ECDSA and SHA-256 Algorithms for SSHFP       April 2012


   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.

Table of Contents

   1. Introduction ....................................................3
   2. Requirements Language ...........................................4
   3. SSHFP Resource Records ..........................................4
      3.1. SSHFP Fingerprint Type Specification .......................4
           3.1.1. SHA-256 SSHFP Fingerprint Type Specification ........4
      3.2. SSHFP Algorithm Number Specification .......................4
           3.2.1. ECDSA SSHFP Algorithm Number Specification ..........4
   4. Implementation Considerations ...................................4
      4.1. Support for SHA-256 Fingerprints ...........................4
      4.2. Support for ECDSA ..........................................4
   5. Examples ........................................................5
      5.1. RSA Public Key .............................................5
           5.1.1. RSA Public Key with SHA1 Fingerprint ................5
           5.1.2. RSA Public Key with SHA-256 Fingerprint .............5
      5.2. DSA Public Key .............................................6
           5.2.1. DSA Public Key with SHA1 Fingerprint ................6
           5.2.2. DSA Public Key with SHA-256 Fingerprint .............6
      5.3. ECDSA Public Key ...........................................6
           5.3.1. ECDSA Public Key with SHA1 Fingerprint ..............7
           5.3.2. ECDSA Public Key with SHA-256 Fingerprint ...........7
   6. IANA Considerations .............................................7
      6.1. SSHFP RR Types for Public Key Algorithms ...................7
      6.2. SSHFP RR Types for Fingerprint Types .......................7
   7. Security Considerations .........................................8
   8. References ......................................................8
      8.1. Normative References .......................................8
      8.2. Informative References .....................................9


















Sury                         Standards Track                    [Page 2]

RFC 6594         ECDSA and SHA-256 Algorithms for SSHFP       April 2012


/. 1.  Introduction
========================================================


   The Domain Name System (DNS) is the global, hierarchical distributed
   database for Internet naming.  The Secure Shell (SSH) is a protocol
   for secure remote login and other secure network services over an
   insecure network.  RFC 4253 [RFC4253] defines Public Key Algorithms
   for the Secure Shell server public keys.

   The DNS has been extended to store fingerprints in a DNS Resource
   Record named SSHFP [RFC4255], which provides out-of-band verification
   by looking up a fingerprint of the server public key in the DNS
   [RFC1034][RFC1035] and using Domain Name System Security Extensions
   (DNSSEC) [RFC4033][RFC4034][RFC4035] to verify the lookup.

   RFC 4255 [RFC4255] describes how to store the cryptographic
   fingerprint of SSH public keys in SSHFP Resource Records.  SSHFP
   Resource Records contain the fingerprint and two index numbers
   identifying the cryptographic algorithms used:

   1.  to link the fingerprinted public key with the corresponding
       private key, and

   2.  to derive the message digest stored as the fingerprint in the
       record.

   RFC 4255 [RFC4255] then specifies lists of cryptographic algorithms
   and the corresponding index numbers used to identify them in SSHFP
   Resource Records.

   This document updates the IANA registry "SSHFP RR Types for public
   key algorithms" and "SSHFP RR types for fingerprint types"
   [SSHFPVALS] by adding a new option in each list:

   o  the Elliptic Curve Digital Signature Algorithm (ECDSA) [RFC6090],
      which has been added to the Secure Shell Public Key list by RFC
      5656 [RFC5656] in the public key algorithms list, and

   o  the SHA-256 algorithm [FIPS.180-3.2008] in the SSHFP fingerprint
      type list.

   Familiarity with DNSSEC, SSH Protocol [RFC4251][RFC4253][RFC4250],
   SSHFP [RFC4255], and the SHA-2 [FIPS.180-3.2008] family of algorithms
   is assumed in this document.








Sury                         Standards Track                    [Page 3]

RFC 6594         ECDSA and SHA-256 Algorithms for SSHFP       April 2012


/. 2.  Requirements Language
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in RFC 2119 [RFC2119].

/. 3.  SSHFP Resource Records
========================================================


   The format of the SSHFP RR can be found in RFC 4255 [RFC4255].

3.1.  SSHFP Fingerprint Type Specification
--------------------------------------------------------

   The fingerprint type octet identifies the message digest algorithm
   used to calculate the fingerprint of the public key.

3.1.1.  SHA-256 SSHFP Fingerprint Type Specification
--------------------------------------------------------

   SHA-256 fingerprints of the public keys are stored in SSHFP Resource
   Records with the fingerprint type 2.

3.2.  SSHFP Algorithm Number Specification
--------------------------------------------------------

   The SSHFP Resource Record algorithm number octet describes the
   algorithm of the public key.

3.2.1.  ECDSA SSHFP Algorithm Number Specification
--------------------------------------------------------

   ECDSA public keys are stored in SSHFP Resource Records with the
   algorithm number 3.

/. 4.  Implementation Considerations
========================================================


4.1.  Support for SHA-256 Fingerprints
--------------------------------------------------------

   SSHFP-aware Secure Shell implementations SHOULD support the SHA-256
   fingerprints for verification of the public key.  Secure Shell
   implementations that support SHA-256 fingerprints MUST prefer a SHA-
   256 fingerprint over SHA-1 if both are available for a server.  If
   the SHA-256 fingerprint is tested and does not match the SSH public
   key received from the SSH server, then the key MUST be rejected
   rather than testing the alternative SHA-1 fingerprint.

4.2.  Support for ECDSA
--------------------------------------------------------

   SSHFP-aware Secure Shell implementations that also implement the
   ECDSA for the public key SHOULD support SSHFP fingerprints for ECDSA
   public keys.




Sury                         Standards Track                    [Page 4]

RFC 6594         ECDSA and SHA-256 Algorithms for SSHFP       April 2012


/. 5.  Examples
========================================================


   The following examples provide reference for both the newly defined
   value for ECDSA and the use of the SHA-256 fingerprint combined with
   both the new and the existing algorithm numbers.

5.1.  RSA Public Key
--------------------------------------------------------

   A public key with the following value in OpenSSH format [RFC4716]
   would appear as follows:

       ---- BEGIN SSH2 PUBLIC KEY ----
       AAAAB3NzaC1yc2EAAAADAQABAAABAQDCUR4JOhxTinzq7QO3bQXW4jmPCCulFsnh
       8Yi7MKwpMnd96+T7uV7nEwy+6+GWYu98IxFJByIjFXX/a6BXDp3878wezH1DZ2tN
       D/tu/eudz6ErpTFYmnVLyEDARYSzVBNQuIK1UDqvvB6KffJcyt78FpwW27euGkqE
       kam7GaurPRAgwXehDB/gMwRtXVRZ+13zYWkAmAY+5OAWVmdXuQVm5kjlvcNzto2H
       3m3nqJtD4J9L1lKPuSVVqwJr4/6hibXJkQEvWpUvdOAUw3frKpNwa932fXFk3ke4
       rsDjQ/W8GyleMtK3Tx8tE4z1wuowXtYe6Ba8q3LAPs/m2S4pUscx
       ---- END SSH2 PUBLIC KEY ----

5.1.1.  RSA Public Key with SHA1 Fingerprint
--------------------------------------------------------

   The SSHFP Resource Record for this key would be:

       server.example.net IN SSHFP 1 1 ( dd465c09cfa51fb45020cc83316fff
                                         21b9ec74ac )

5.1.2.  RSA Public Key with SHA-256 Fingerprint
--------------------------------------------------------

   The SSHFP Resource Record for this key would be:

       server.example.net IN SSHFP 1 2 ( b049f950d1397b8fee6a61e4d14a9a
                                         cdc4721e084eff5460bbed80cfaa2c
                                         e2cb )

















Sury                         Standards Track                    [Page 5]

RFC 6594         ECDSA and SHA-256 Algorithms for SSHFP       April 2012


5.2.  DSA Public Key
--------------------------------------------------------

   A public key with the following value in OpenSSH format would appear
   as follows:

       ---- BEGIN SSH2 PUBLIC KEY ----
       AAAAB3NzaC1kc3MAAACBAPVFrc0U36gWaywbfJzjcv8ef13qAX4EJl8Na6xqvXh1
       t+aCJEdS7soRjtvK4KsNhk78DjdtnfhEhyFKHHNz3i6/c/s9lP0UjV7mRAo6nA7A
       3Gs6iQElb6O9Fqm6iVSC6bYWilTSB0tYencEEJUoaAua8YQF/uxRzPrReXxGqHnj
       AAAAFQDC9M/pli8VIVmEGOO0wC1TeUTN4wAAAIEAgA2Fbkbbeo0+u/qw8mQFOFWZ
       pTaqNo7d7jov3majbh5LqEVD7yT3MS1GSGhjgvvhus/ehMTqzYbjTc0szUM9JnwT
       7xq15P2ZYDK98IVxrw31jMtsUUEmBqB4DUjTurtcaWmJ9LNaP1/k4bMo0/hotnOc
       OVnIPsTLBFWVvdNRxUAAAACAOZcDcK01NTM1qIIYbBqCffrwjQ+9PmsuSKI6nUzf
       S4NysXHkdbW5u5VxeXLcwWj5PGbRfoS2P3vwYAmakqgq502wigam18u9nAczUYl+
       2kOeOiIRrtSmLfpV7thLOAb8k1ESjIlkbn35jKmTcoMFRXbFmkKRTK8OEnWQ8AVg
       6w8=
       ---- END SSH2 PUBLIC KEY ----

5.2.1.  DSA Public Key with SHA1 Fingerprint
--------------------------------------------------------

   The SSHFP Resource Record for this key would be:

       server.example.net IN SSHFP 2 1 ( 3b6ba6110f5ffcd29469fc1ec2ee25
                                         d61718badd )

5.2.2.  DSA Public Key with SHA-256 Fingerprint
--------------------------------------------------------

   The SSHFP Resource Record for this key would be:

       server.example.net IN SSHFP 2 2 ( f9b8a6a460639306f1b38910456a6a
                                         e1018a253c47ecec12db77d7a0878b
                                         4d83 )

5.3.  ECDSA Public Key
--------------------------------------------------------

   A public key with the following value in OpenSSH format would appear
   as follows:

       ---- BEGIN SSH2 PUBLIC KEY ----
       AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBAD+9COUiX7W
       YgcvIOdI8+djdoFDVUTxNrcog8sSYdbIzeG+bYdsssvcyy/nRfVhXC5QBCk8IThq
       s7D4/lFxX5g=
       ---- END SSH2 PUBLIC KEY ----








Sury                         Standards Track                    [Page 6]

RFC 6594         ECDSA and SHA-256 Algorithms for SSHFP       April 2012


5.3.1.  ECDSA Public Key with SHA1 Fingerprint
--------------------------------------------------------

   The SSHFP Resource Record for this key would be:

       server.example.net IN SSHFP 3 1 ( c64607a28c5300fec1180b6e417b92
                                         2943cffcdd )

5.3.2.  ECDSA Public Key with SHA-256 Fingerprint
--------------------------------------------------------

   The SSHFP Resource Record for this key would be:

       server.example.net IN SSHFP 3 2 ( 821eb6c1c98d9cc827ab7f456304c0
                                         f14785b7008d9e8646a8519de80849
                                         afc7 )

/. 6.  IANA Considerations
========================================================


   This document updates the IANA registry "SSHFP RR Types for public
   key algorithms" and "SSHFP RR types for fingerprint types"
   [SSHFPVALS].

6.1.  SSHFP RR Types for Public Key Algorithms
--------------------------------------------------------

   The following entries have been added to the "SSHFP RR Types for
   public key algorithms" registry:

                   +-------+-------------+------------+
                   | Value | Description |  Reference |
                   +-------+-------------+------------+
                   |   3   |    ECDSA    | [This doc] |
                   +-------+-------------+------------+

6.2.  SSHFP RR Types for Fingerprint Types
--------------------------------------------------------

   The following entries have been added to the "SSHFP RR types for
   fingerprint types" registry:

                   +-------+-------------+------------+
                   | Value | Description |  Reference |
                   +-------+-------------+------------+
                   |   2   |   SHA-256   | [This doc] |
                   +-------+-------------+------------+









Sury                         Standards Track                    [Page 7]

RFC 6594         ECDSA and SHA-256 Algorithms for SSHFP       April 2012


/. 7.  Security Considerations
========================================================


   Please see the security considerations in [RFC4255] for SSHFP
   Resource Records and [RFC5656] for the ECDSA.

   Users of SSHFP are encouraged to deploy SHA-256 as soon as
   implementations allow for it.  The SHA-2 family of algorithms is
   widely believed to be more resilient to attack than SHA-1, and
   confidence in SHA-1's strength is being eroded by recently announced
   attacks [IACR2007/474].  Regardless of whether or not the attacks on
   SHA-1 will affect SSHFP, it is believed (at the time of this writing)
   that SHA-256 is the better choice for use in SSHFP records.

   SHA-256 is considered sufficiently strong for the immediate future,
   but predictions about future development in cryptography and
   cryptanalysis are beyond the scope of this document.

/. 8.  References
========================================================


8.1.  Normative References
--------------------------------------------------------

   [FIPS.180-3.2008]
               National Institute of Standards and Technology, "Secure
               Hash Standard (SHS)", FIPS PUB 180-3, October 2008,
               <http://csrc.nist.gov/publications/fips/fips180-3/
               fips180-3_final.pdf>.

   [RFC1034]   Mockapetris, P., "Domain names - concepts and
               facilities", STD 13, RFC 1034, November 1987.

   [RFC1035]   Mockapetris, P., "Domain names - implementation and
               specification", STD 13, RFC 1035, November 1987.

   [RFC2119]   Bradner, S., "Key words for use in RFCs to Indicate
               Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC4250]   Lehtinen, S. and C. Lonvick, "The Secure Shell (SSH)
               Protocol Assigned Numbers", RFC 4250, January 2006.

   [RFC4251]   Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
               Protocol Architecture", RFC 4251, January 2006.

   [RFC4253]   Ylonen, T. and C. Lonvick, "The Secure Shell (SSH)
               Transport Layer Protocol", RFC 4253, January 2006.

   [RFC4255]   Schlyter, J. and W. Griffin, "Using DNS to Securely
               Publish Secure Shell (SSH) Key Fingerprints", RFC 4255,
               January 2006.



Sury                         Standards Track                    [Page 8]

RFC 6594         ECDSA and SHA-256 Algorithms for SSHFP       April 2012


   [RFC5656]   Stebila, D. and J. Green, "Elliptic Curve Algorithm
               Integration in the Secure Shell Transport Layer",
               RFC 5656, December 2009.

8.2.  Informative References
--------------------------------------------------------

   [IACR2007/474]
               Cochran, M., "Notes on the Wang et al. 2^63 SHA-1
               Differential Path", IACR 2007/474,
               <http://eprint.iacr.org/2007/474.pdf>.

   [RFC4033]   Arends, R., Austein, R., Larson, M., Massey, D., and S.
               Rose, "DNS Security Introduction and Requirements",
               RFC 4033, March 2005.

   [RFC4034]   Arends, R., Austein, R., Larson, M., Massey, D., and S.
               Rose, "Resource Records for the DNS Security Extensions",
               RFC 4034, March 2005.

   [RFC4035]   Arends, R., Austein, R., Larson, M., Massey, D., and S.
               Rose, "Protocol Modifications for the DNS Security
               Extensions", RFC 4035, March 2005.

   [RFC4716]   Galbraith, J. and R. Thayer, "The Secure Shell (SSH)
               Public Key File Format", RFC 4716, November 2006.

   [RFC6090]   McGrew, D., Igoe, K., and M. Salter, "Fundamental
               Elliptic Curve Cryptography Algorithms", RFC 6090,
               February 2011.

   [SSHFPVALS] IANA, "DNS SSHFP Resource Records Parameters",
               <http://www.iana.org/assignments/
               dns-sshfp-rr-parameters>.

Author's Address

   Ondrej Sury
   CZ.NIC
   Americka 23
   120 00 Praha 2
   Czech Republic

   Phone: +420 222 745 110
   EMail: ondrej.sury@nic.cz







Sury                         Standards Track                    [Page 9]


/EXT RFC6668  SHA-2 Data Integrity Verification for the SSH Transport Layer Protocol
========================================================
https://datatracker.ietf.org/doc/html/rfc6668

Internet Engineering Task Force (IETF)                          D. Bider
Request for Comments: 6668                               Bitvise Limited
Updates: 4253                                                 M. Baushke
Category: Standards Track                         Juniper Networks, Inc.
ISSN: 2070-1721                                                July 2012


                 SHA-2 Data Integrity Verification for
            the Secure Shell (SSH) Transport Layer Protocol

Abstract

   This memo defines algorithm names and parameters for use in some of
   the SHA-2 family of secure hash algorithms for data integrity
   verification in the Secure Shell (SSH) protocol.  It also updates RFC
   4253 by specifying a new RECOMMENDED data integrity algorithm.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 5741.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   http://www.rfc-editor.org/info/rfc6668.

Copyright Notice

   Copyright (c) 2012 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (http://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.






Bider & Baushke              Standards Track                    [Page 1]

RFC 6668              Sha2-Transport Layer Protocol            July 2012


/. 1.  Overview and Rationale
========================================================


   The Secure Shell (SSH) [RFC4251] is a very common protocol for secure
   remote login on the Internet.  Currently, SSH defines data integrity
   verification using SHA-1 and MD5 algorithms [RFC4253].  Due to recent
   security concerns with these two algorithms ([RFC6194] and [RFC6151],
   respectively), implementors and users request support for data
   integrity verification using some of the SHA-2 family of secure hash
   algorithms.

1.1.  Requirements Terminology
--------------------------------------------------------

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC2119].

/. 2.  Data Integrity Algorithms
========================================================


   This memo adopts the style and conventions of [RFC4253] in specifying
   how the use of new data integrity algorithms are indicated in SSH.

   The following new data integrity algorithms are defined:

   hmac-sha2-256     RECOMMENDED   HMAC-SHA2-256
                                   (digest length = 32 bytes,
                                    key length    = 32 bytes)

   hmac-sha2-512     OPTIONAL      HMAC-SHA2-512
                                   (digest length = 64 bytes,
                                    key length    = 64 bytes)

                          Figure 1

   The Hashed Message Authentication Code (HMAC) mechanism was
   originally defined in [RFC2104] and has been updated in [RFC6151].

   The SHA-2 family of secure hash algorithms is defined in
   [FIPS-180-3].

   Sample code for the SHA-based HMAC algorithms are available in
   [RFC6234].  The variants, HMAC-SHA2-224 and HMAC-SHA2-384 algorithms,
   were considered but not added to this list as they have the same
   computational requirements of HMAC-SHA2-256 and HMAC-SHA2-512,
   respectively, and do not seem to be much used in practice.







Bider & Baushke              Standards Track                    [Page 2]

RFC 6668              Sha2-Transport Layer Protocol            July 2012


   Test vectors for use of HMAC with SHA-2 are provided in [RFC4231].
   Users, implementors, and administrators may choose to put these new
   MACs into the proposal ahead of the REQUIRED hmac-sha1 algorithm
   defined in [RFC4253] so that they are negotiated first.

/. 3.  IANA Considerations
========================================================


   This document augments the MAC Algorithm Names in [RFC4253] and
   [RFC4250].

   IANA has updated the "Secure Shell (SSH) Protocol Parameters"
   registry with the following entries:

   MAC Algorithm Name      Reference       Note
   hmac-sha2-256           RFC 6668        Section 2
   hmac-sha2-512           RFC 6668        Section 2

                        Figure 2

/. 4.  Security Considerations
========================================================


   The security considerations of RFC 4253 [RFC4253] apply to this
   document.

   The National Institute of Standards and Technology (NIST)
   publications: NIST Special Publication (SP) 800-107 [800-107] and
   NIST SP 800-131A [800-131A] suggest that HMAC-SHA1 and HMAC-SHA2-256
   have a security strength of 128 bits and 256 bits, respectively,
   which are considered acceptable key lengths.

   Many users seem to be interested in the perceived safety of using the
   SHA2-based algorithms for hashing.

/. 5.  References
========================================================


5.1.  Normative References
--------------------------------------------------------

   [FIPS-180-3]
              National Institute of Standards and Technology (NIST),
              United States of America, "Secure Hash Standard (SHS)",
              FIPS PUB 180-3, October 2008, <http://csrc.nist.gov/
              publications/fips/fips180-3/fips180-3_final.pdf>.

   [RFC2104]  Krawczyk, H., Bellare, M., and R. Canetti, "HMAC: Keyed-
              Hashing for Message Authentication", RFC 2104, February
              1997.





Bider & Baushke              Standards Track                    [Page 3]

RFC 6668              Sha2-Transport Layer Protocol            July 2012


   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC4231]  Nystrom, M., "Identifiers and Test Vectors for HMAC-
              SHA-224, HMAC-SHA-256, HMAC-SHA-384, and HMAC-SHA-512",
              RFC 4231, December 2005.

   [RFC4253]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Transport Layer Protocol", RFC 4253, January 2006.

5.2.  Informative References
--------------------------------------------------------

   [800-107]  National Institute of Standards and Technology (NIST),
              "Recommendation for Applications Using Approved Hash
              Algorithms", NIST Special Publication 800-107, February
              2009, <http://csrc.nist.gov/publications/
              nistpubs/800-107/NIST-SP-800-107.pdf>.

   [800-131A] National Institute of Standards and Technology (NIST),
              "Transitions: Recommendation for the Transitioning of the
              Use of Cryptographic Algorithms and Key Lengths", DRAFT
              NIST Special Publication 800-131A, January 2011,
              <http://csrc.nist.gov/publications/nistpubs/800-131A/
              sp800-131A.pdf>.

   [RFC4250]  Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Assigned Numbers", RFC 4250, January 2006.

   [RFC4251]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Architecture", RFC 4251, January 2006.

   [RFC6151]  Turner, S. and L. Chen, "Updated Security Considerations
              for the MD5 Message-Digest and the HMAC-MD5 Algorithms",
              RFC 6151, March 2011.

   [RFC6194]  Polk, T., Chen, L., Turner, S., and P. Hoffman, "Security
              Considerations for the SHA-0 and SHA-1 Message-Digest
              Algorithms", RFC 6194, March 2011.

   [RFC6234]  Eastlake 3rd, D. and T. Hansen, "US Secure Hash Algorithms
              (SHA and SHA-based HMAC and HKDF)", RFC 6234, May 2011.










Bider & Baushke              Standards Track                    [Page 4]

RFC 6668              Sha2-Transport Layer Protocol            July 2012


Authors' Addresses

   Denis Bider
   Bitvise Limited
   Suites 41/42, Victoria House
   26 Main Street
   GI

   Phone: +1 869 762 1410
   EMail: ietf-ssh2@denisbider.com
   URI:   http://www.bitvise.com/


   Mark D. Baushke
   Juniper Networks, Inc.
   1194 N Mathilda Av
   Sunnyvale, CA 94089-1206
   US

   Phone: +1 408 745 2952
   EMail: mdb@juniper.net
   URI:   http://www.juniper.net/





























Bider & Baushke              Standards Track                    [Page 5]

/EXT RFC7479  Using Ed25519 in SSHFP Resource Records
========================================================
https://datatracker.ietf.org/doc/html/rfc7479

Internet Engineering Task Force (IETF)                      S. Moonesamy
Request for Comments: 7479                                    March 2015
Category: Informational
ISSN: 2070-1721


                Using Ed25519 in SSHFP Resource Records

Abstract

   The Ed25519 signature algorithm has been implemented in OpenSSH.
   This document updates the IANA "SSHFP RR Types for public key
   algorithms" registry by adding an algorithm number for Ed25519.

Status of This Memo

   This document is not an Internet Standards Track specification; it is
   published for informational purposes.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Not all documents
   approved by the IESG are a candidate for any level of Internet
   Standard; see Section 2 of RFC 5741.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   http://www.rfc-editor.org/info/rfc7479.

Copyright Notice

   Copyright (c) 2015 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (http://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.







Moonesamy                     Informational                     [Page 1]

RFC 7479               Using Ed25519 in SSHFP RRs             March 2015


Table of Contents

   1. Introduction ....................................................2
   2. Ed25519 Public Key with SHA-256 Fingerprint .....................2
   3. Security Considerations .........................................3
   4. IANA Considerations .............................................3
   5. References ......................................................3
      5.1. Normative References .......................................3
      5.2. Informative References .....................................3
   Acknowledgements ...................................................4
   Author's Address ...................................................4

/. 1.  Introduction
========================================================


   The Ed25519 [Ed25519] signature algorithm, specifically
   Ed25519-SHA-512, has been implemented in OpenSSH.  RFC 4255 [RFC4255]
   defines a DNS resource record, "SSHFP", which can be used to publish
   a fingerprint of the SSH server public key in the DNS.  This document
   updates the IANA "SSHFP RR Types for public key algorithms" registry
   by adding an algorithm number for Ed25519 [Ed25519].

/. 2.  Ed25519 Public Key with SHA-256 Fingerprint
========================================================


   The encoding of Ed25519 public keys is described in [Ed25519].  In
   brief, an Ed25519 public key is a 32-octet value representing a
   255-bit y-coordinate of an elliptic curve point, and a sign bit
   indicating the corresponding x-coordinate.

   The SSHFP Resource Record for the Ed25519 public key with SHA-256
   fingerprint [FIPS180-4] would, for example, be:

      ssh.example.com IN SSHFP 4 2 ( a87f1b687ac0e57d2a081a2f2826723
                                     34d90ed316d2b818ca9580ea384d924
                                     01 )

   The following body of the public key file was used as input to
   generate the above fingerprint:

    ssh-ed25519
    AAAAC3NzaC1lZDI1NTE5AAAAIGPKSUTyz1HwHReFVvD5obVsALAgJRNarH4TRpNePnAS

   The opaque octet string output produced is placed as is in the RDATA
   fingerprint field.








Moonesamy                     Informational                     [Page 2]

RFC 7479               Using Ed25519 in SSHFP RRs             March 2015


/. 3.  Security Considerations
========================================================


   The overall security of using SSHFP for SSH host key verification is
   dependent on the security policies of the SSH host administrator and
   DNS zone administrator (in transferring the fingerprint), detailed
   aspects of how verification is done in the SSH implementation, and in
   the client's diligence in accessing the DNS in a secure manner.
   Please refer to RFC 4255 [RFC4255] for a discussion of the security
   considerations.

/. 4.  IANA Considerations
========================================================


   IANA has added the following entry to the "SSHFP RR Types for public
   key algorithms" registry:

      +--------+-------------+------------+
      | Value  | Description |  Reference |
      +--------+-------------+------------+
      |   4    |    Ed25519  | [RFC7479]  |
      +--------+-------------+------------+

/. 5.  References
========================================================


5.1.  Normative References
--------------------------------------------------------

   [Ed25519]    Bernstein, D. J., Lange T., Schwabe P., and B-Y. Yang,
                "High-Speed High-Security Signatures", Journal of
                Cryptographic Engineering, Vol. 2, September 26, 2011.

   [RFC4255]    Schlyter, J. and W. Griffin, "Using DNS to Securely
                Publish Secure Shell (SSH) Key Fingerprints", RFC 4255,
                January 2006, <http://www.rfc-editor.org/info/rfc4255>.

5.2.  Informative References
--------------------------------------------------------

   [FIPS180-4]  National Institute of Standards and Technology, "Secure
                Hash Standard (SHS)", FIPS PUB 180-4, March 2012,
                <http://csrc.nist.gov/publications/fips/fips180-4/
                fips-180-4.pdf>.












Moonesamy                     Informational                     [Page 3]

RFC 7479               Using Ed25519 in SSHFP RRs             March 2015


Acknowledgements

   Some of the text in this document was written by Ondrej Sury.  The
   author would like to thank Richard Barnes, Damien Miller, Yoav Nir,
   and Paul Wouters for their feedback.  Rene Struik provided advice
   about the usage of Ed25519.  Stephen Farrell, as Security Area
   Director, reviewed the code point request.

Author's Address

   S. Moonesamy
   76, Ylang Ylang Avenue
   Quatres Bornes
   Mauritius

   EMail: sm+ietf@elandsys.com



































Moonesamy                     Informational                     [Page 4]


/EXT RFC8160  IUTF8 Terminal Mode in Secure Shell (SSH)
========================================================
https://datatracker.ietf.org/doc/html/rfc8160

Internet Engineering Task Force (IETF)                         S. Tatham
Request for Comments: 8160                                         PuTTY
Category: Standards Track                                      D. Tucker
ISSN: 2070-1721                                                  OpenSSH
                                                              April 2017


               IUTF8 Terminal Mode in Secure Shell (SSH)

Abstract

   This document specifies a new opcode in the Secure Shell terminal
   modes encoding.  The new opcode describes the widely used IUTF8
   terminal mode bit, which indicates that terminal I/O uses UTF-8
   character encoding.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 7841.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   http://www.rfc-editor.org/info/rfc8160.

Copyright Notice

   Copyright (c) 2017 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (http://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.







Tatham & Tucker              Standards Track                    [Page 1]

RFC 8160               IUTF8 Terminal Mode in SSH             April 2017


Table of Contents

   1.  Introduction  . . . . . . . . . . . . . . . . . . . . . . . .   2
   2.  Conventions Used in This Document . . . . . . . . . . . . . .   2
   3.  New IUTF8 Opcode for Terminal Mode Encoding . . . . . . . . .   2
   4.  IANA Considerations . . . . . . . . . . . . . . . . . . . . .   3
   5.  Security Considerations . . . . . . . . . . . . . . . . . . .   3
   6.  References  . . . . . . . . . . . . . . . . . . . . . . . . .   3
     6.1.  Normative References  . . . . . . . . . . . . . . . . . .   3
     6.2.  Informative References  . . . . . . . . . . . . . . . . .   3
   Acknowledgements  . . . . . . . . . . . . . . . . . . . . . . . .   4
   Authors' Addresses  . . . . . . . . . . . . . . . . . . . . . . .   4

/. 1.  Introduction
========================================================


   The Secure Shell (SSH) connection protocol [RFC4254] provides an
   encoding for terminal modes, used in the "pty-req" channel request
   type.

   A commonly used terminal mode is IUTF8, which indicates that the
   terminal driver should assume that terminal I/O uses the UTF-8
   character encoding [RFC3629].  This is typically used by the kernel's
   terminal driver on the server to decide how many bytes of input to
   treat as a single logical character during line editing.

   SSH does not currently provide an encoding for IUTF8.  This document
   specifies one.

/. 2.  Conventions Used in This Document
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC2119].

/. 3.  New IUTF8 Opcode for Terminal Mode Encoding
========================================================


   The opcode value 42 is defined for the IUTF8 terminal mode.

   As specified in Section 8 of [RFC4254], all opcodes in the range 1 to
   159 have a single uint32 argument; therefore, the IUTF8 opcode is
   followed by a single uint32 argument.  The value 0 indicates that the
   IUTF8 mode is disabled, and the value 1 indicates that it is enabled.

   As with all other encoded terminal modes, the client SHOULD transmit
   a value for this mode if it knows about one, and the server MAY
   ignore it.





Tatham & Tucker              Standards Track                    [Page 2]

RFC 8160               IUTF8 Terminal Mode in SSH             April 2017


/. 4.  IANA Considerations
========================================================


   This document augments the list of "Pseudo-Terminal Encoded Terminal
   Modes" defined in Section 8 of [RFC4254].

   IANA has added the following opcode to the "Pseudo-Terminal Encoded
   Terminal Modes" registry:

   opcode  mnemonic       description
   ------  --------       -----------
   42      IUTF8          Terminal input and output is assumed to be
                           encoded in UTF-8.

/. 5.  Security Considerations
========================================================


   The security considerations of [RFC4254] apply.  This additional
   terminal mode encoding is believed to have no security implications
   differing from the existing set of encoded terminal modes.

   Since the IUTF8 terminal mode is intended for use in conjunction with
   the UTF-8 character encoding, the security considerations of
   [RFC3629] also apply to systems in which this mode is enabled.  In
   particular, terminal drivers that interpret this bit as enabling
   UTF-8-aware line-editing behavior should carefully consider how that
   behavior will treat illegal sequences, overlong encodings, and
   redundant representations of composed characters (see [UNICODE]).

/. 6.  References
========================================================


6.1.  Normative References
--------------------------------------------------------

   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119,
              DOI 10.17487/RFC2119, March 1997,
              <http://www.rfc-editor.org/info/rfc2119>.

   [RFC3629]  Yergeau, F., "UTF-8, a transformation format of ISO
              10646", STD 63, RFC 3629, DOI 10.17487/RFC3629, November
              2003, <http://www.rfc-editor.org/info/rfc3629>.

   [RFC4254]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Connection Protocol", RFC 4254, DOI 10.17487/RFC4254,
              January 2006, <http://www.rfc-editor.org/info/rfc4254>.

6.2.  Informative References
--------------------------------------------------------

   [UNICODE]  The Unicode Consortium, "The Unicode Standard",
              <http://www.unicode.org/versions/latest/>.



Tatham & Tucker              Standards Track                    [Page 3]

RFC 8160               IUTF8 Terminal Mode in SSH             April 2017


Acknowledgements

   The authors are indebted to Colin Watson for originally suggesting
   this terminal mode in 2005, and David Madore and Jakub Jelen for
   prior implementation efforts.

Authors' Addresses

   Simon Tatham
   PuTTY

   Email: anakin@pobox.com


   Darren Tucker
   OpenSSH

   Email: dtucker@openssh.com

































Tatham & Tucker              Standards Track                    [Page 4]

/EXT RFC8270  Increase the Secure Shell Minimum Recommended Diffie-Hellman Modulus Size to 2048 Bits
========================================================
https://datatracker.ietf.org/doc/html/rfc8270

Internet Engineering Task Force (IETF)                     L. Velvindron
Request for Comments: 8270                                    Hackers.mu
Updates: 4419                                                 M. Baushke
Category: Standards Track                         Juniper Networks, Inc.
ISSN: 2070-1721                                            December 2017


             Increase the Secure Shell Minimum Recommended
                Diffie-Hellman Modulus Size to 2048 Bits

Abstract

   The Diffie-Hellman (DH) Group Exchange for the Secure Shell (SSH)
   transport-layer protocol specifies that servers and clients should
   support groups with a minimum modulus group size of 1024 bits.
   Recent security research has shown that the minimum value of 1024
   bits is insufficient to protect against state-sponsored actors and
   any organization with enough computing resources.  This RFC updates
   RFC 4419, which allowed for DH moduli less than 2048 bits; now, 2048
   bits is the minimum acceptable group size.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 7841.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   https://www.rfc-editor.org/info/rfc8270.

















Velvindron & Baushke         Standards Track                    [Page 1]

RFC 8270            Recommended Minimum Modulus Size       December 2017


Copyright Notice

   Copyright (c) 2017 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (https://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.

Table of Contents

   1.  Introduction  . . . . . . . . . . . . . . . . . . . . . . . .   2
   2.  Requirements Language . . . . . . . . . . . . . . . . . . . .   2
   3.  2048-Bit DH Group . . . . . . . . . . . . . . . . . . . . . .   3
   4.  Interoperability  . . . . . . . . . . . . . . . . . . . . . .   3
   5.  Security Considerations . . . . . . . . . . . . . . . . . . .   4
   6.  IANA Considerations . . . . . . . . . . . . . . . . . . . . .   4
   7.  References  . . . . . . . . . . . . . . . . . . . . . . . . .   4
     7.1.  Normative References  . . . . . . . . . . . . . . . . . .   4
     7.2.  Informative References  . . . . . . . . . . . . . . . . .   4
   Authors' Addresses  . . . . . . . . . . . . . . . . . . . . . . .   5

/. 1.  Introduction
========================================================


   [RFC4419] specifies a recommended minimum DH modulus group size of
   1024 bits.  It also suggests that in all cases, the size of the group
   needs to be at least 1024 bits.  This document updates [RFC4419] so
   that the minimum recommended size is 2048 bits.  This recommendation
   is based on recent research [LOGJAM] on DH group weaknesses.  This
   minimum DH group size may need to be increased to 3072 for forward-
   looking users.

/. 2.  Requirements Language
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and
   "OPTIONAL" in this document are to be interpreted as described in
   BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all
   capitals, as shown here.






Velvindron & Baushke         Standards Track                    [Page 2]

RFC 8270            Recommended Minimum Modulus Size       December 2017


/. 3.  2048-Bit DH Group
========================================================


   Recent research [LOGJAM] strongly suggests that DH groups that are
   1024 bits can be broken by state-sponsored actors and any
   organization with enough computing resources.  The authors show how
   they are able to break 768-bit DH groups and extrapolate the attack
   to 1024-bit DH groups.  In their analysis, they show that breaking
   1024 bits can be done with sufficient computing resources.  This
   document provides the following recommendation: SSH servers and SSH
   clients SHOULD support groups with a minimum acceptable group size of
   2048 bits for the "min" value of the SSH_MSG_KEY_DH_GEX_REQUEST
   client message given in [RFC4419].  Further, SSH clients SHOULD be
   able to send a value of 3072 bits for the preferred acceptable group
   size "n" in the SSH_MSG_KEY_DH_GEX_REQUEST message.

   [RFC4419] specifies a recommended minimum size of 1024 bits for k,
   which is the modulus length of the DH group.  It also suggests that,
   in all cases, the size of the group needs be at least 1024 bits.
   This document updates [RFC4419] as described below:

   o  Section 3, paragraph 9:
      Servers and clients SHOULD support groups with a modulus length of
      k bits where 2048 <= k <= 8192.  The recommended minimum values
      for min and max are 2048 and 8192, respectively.  Setting k to
      3072 SHOULD be possible, as the need may arise in the coming
      years.

   o  Section 3, paragraph 11:
      In all cases, the size of the group SHOULD be at least 2048 bits.
      Setting the group size to 3072 SHOULD be possible, as the need may
      arise in the coming years.

/. 4.  Interoperability
========================================================


   This document keeps the following requirement from [RFC4419]:

      The server should return the smallest group it knows that is
      larger than the size the client requested.  If the server does not
      know a group that is larger than the client request, then it
      SHOULD return the largest group it knows.

   Also, it updates the subsequent sentence as follows:

      In all cases, the size of the returned group SHOULD be at least
      2048 bits.  Setting the group size to 3072 SHOULD be possible, as
      the need may arise in the coming years.





Velvindron & Baushke         Standards Track                    [Page 3]

RFC 8270            Recommended Minimum Modulus Size       December 2017


/. 5.  Security Considerations
========================================================


   This document discusses security issues of DH groups that are 1024
   bits in size, and formally updates the minimum size of DH groups to
   be 2048 bits.  A hostile or "owned" SSH server implementation could
   potentially use backdoored DH primes using the methods described in
   [Backdoor-DH] to provide the g and p values to be used.  Or, it could
   just send the calculated secret through a covert channel of some sort
   to a passive listener.

   A malicious client could cause a Denial of Service by intentionally
   making multiple connections that are less than 2048 bits in size.
   Therefore, operating systems SHOULD NOT log DH groups that are less
   than 2048 bits in size, as it would create an additional attack
   surface.

/. 6.  IANA Considerations
========================================================


   This document does not require any IANA actions.

/. 7.  References
========================================================


7.1.  Normative References
--------------------------------------------------------

   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119,
              DOI 10.17487/RFC2119, March 1997,
              <https://www.rfc-editor.org/info/rfc2119>.

   [RFC4419]  Friedl, M., Provos, N., and W. Simpson, "Diffie-Hellman
              Group Exchange for the Secure Shell (SSH) Transport Layer
              Protocol", RFC 4419, DOI 10.17487/RFC4419, March 2006,
              <https://www.rfc-editor.org/info/rfc4419>.

   [RFC8174]  Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC
              2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174,
              May 2017, <https://www.rfc-editor.org/info/rfc8174>.

7.2.  Informative References
--------------------------------------------------------

   [Backdoor-DH]
              Wong, D., "How to Backdoor Diffie-Hellman", Cryptology
              ePrint Archive Report 2016/644, June 2016,
              <http://eprint.iacr.org/2016/644.pdf>.







Velvindron & Baushke         Standards Track                    [Page 4]

RFC 8270            Recommended Minimum Modulus Size       December 2017


   [LOGJAM]   Adrian, D., Bhargavan, K., Durumeric, Z., Gaudry, P.,
              Green, M., Halderman, J., Heninger, N., Springall, D.,
              Thome, E., Valenta, L., VanderSloot, B., Wustrow, E.,
              Zanella-Beguelin, S., and P. Zimmermann, "Imperfect
              Forward Secrecy: How Diffie-Hellman Fails in Practice",
              ACM Conference on Computer and Communications Security
              (CCS) 2015, DOI 10.1145/2810103.2813707, 2015,
              <https://weakdh.org/imperfect-forward-secrecy-ccs15.pdf>.

Authors' Addresses

   Loganaden Velvindron
   Hackers.mu
   88, Avenue De Plevitz
   Roches Brunes
   Mauritius

   Phone: +230 59762817
   Email: logan@hackers.mu


   Mark D. Baushke
   Juniper Networks, Inc.

   Email: mdb@juniper.net


























Velvindron & Baushke         Standards Track                    [Page 5]


/EXT RFC8308  Extension Negotiation in the Secure Shell (SSH) Protocol
========================================================
https://datatracker.ietf.org/doc/html/rfc8308

Internet Engineering Task Force (IETF)                          D. Bider
Request for Comments: 8308                               Bitvise Limited
Updates: 4251, 4252, 4253, 4254                               March 2018
Category: Standards Track
ISSN: 2070-1721


        Extension Negotiation in the Secure Shell (SSH) Protocol

Abstract

   This memo updates RFCs 4251, 4252, 4253, and 4254 by defining a
   mechanism for Secure Shell (SSH) clients and servers to exchange
   information about supported protocol extensions confidentially after
   SSH key exchange.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 7841.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   https://www.rfc-editor.org/info/rfc8308.

Copyright Notice

   Copyright (c) 2018 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (https://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.







Bider                        Standards Track                    [Page 1]

RFC 8308              Extension Negotiation in SSH            March 2018


Table of Contents

   1. Overview and Rationale ..........................................3
      1.1. Requirements Terminology ...................................3
      1.2. Wire Encoding Terminology ..................................3
   2. Extension Negotiation Mechanism .................................3
      2.1. Signaling of Extension Negotiation in SSH_MSG_KEXINIT ......3
      2.2. Enabling Criteria ..........................................4
      2.3. SSH_MSG_EXT_INFO Message ...................................4
      2.4. Message Order ..............................................5
      2.5. Interpretation of Extension Names and Values ...............6
   3. Initially Defined Extensions ....................................6
      3.1. "server-sig-algs" ..........................................6
      3.2. "delay-compression" ........................................7
           3.2.1. Awkwardly Timed Key Re-Exchange .....................9
           3.2.2. Subsequent Re-Exchange ..............................9
           3.2.3. Compatibility Note: OpenSSH up to Version 7.5 .......9
      3.3. "no-flow-control" .........................................10
           3.3.1. Prior "No Flow Control" Practice ...................10
      3.4. "elevation" ...............................................11
   4. IANA Considerations ............................................12
      4.1. Additions to Existing Registries ..........................12
      4.2. New Registry: Extension Names .............................12
           4.2.1. Future Assignments to Extension Names Registry .....12
   5. Security Considerations ........................................12
   6. References .....................................................13
      6.1. Normative References ......................................13
      6.2. Informative References ....................................13
   Acknowledgments ...................................................14
   Author's Address ..................................................14





















Bider                        Standards Track                    [Page 2]

RFC 8308              Extension Negotiation in SSH            March 2018


/. 1.  Overview and Rationale
========================================================


   Secure Shell (SSH) is a common protocol for secure communication on
   the Internet.  The original design of the SSH transport layer
   [RFC4253] lacks proper extension negotiation.  Meanwhile, diverse
   implementations take steps to ensure that known message types contain
   no unrecognized information.  This makes it difficult for
   implementations to signal capabilities and negotiate extensions
   without risking disconnection.  This obstacle has been recognized in
   the process of updating SSH to support RSA signatures using SHA-256
   and SHA-512 [RFC8332].  To avoid trial and error as well as
   authentication penalties, a client must be able to discover public
   key algorithms a server accepts.  This extension mechanism permits
   this discovery.

   This memo updates RFCs 4251, 4252, 4253, and 4254.

1.1.  Requirements Terminology
--------------------------------------------------------

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and
   "OPTIONAL" in this document are to be interpreted as described in
   BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all
   capitals, as shown here.

1.2.  Wire Encoding Terminology
--------------------------------------------------------

   The wire encoding types in this document -- "byte", "uint32",
   "string", "boolean", "name-list" -- have meanings as described in
   [RFC4251].

/. 2.  Extension Negotiation Mechanism
========================================================


2.1.  Signaling of Extension Negotiation in SSH_MSG_KEXINIT
--------------------------------------------------------

   Applications implementing this mechanism MUST add one of the
   following indicator names to the field kex_algorithms in the
   SSH_MSG_KEXINIT message sent by the application in the first key
   exchange:

   o  When acting as server: "ext-info-s"

   o  When acting as client: "ext-info-c"

   The indicator name is added without quotes and MAY be added at any
   position in the name-list, subject to proper separation from other
   names as per name-list conventions.




Bider                        Standards Track                    [Page 3]

RFC 8308              Extension Negotiation in SSH            March 2018


   The names are added to the kex_algorithms field because this is one
   of two name-list fields in SSH_MSG_KEXINIT that do not have a
   separate copy for each data direction.

   The indicator names inserted by the client and server are different
   to ensure these names will not produce a match and therefore not
   affect the algorithm chosen in key exchange algorithm negotiation.

   The inclusion of textual indicator names is intended to provide a
   clue for implementers to discover this mechanism.

2.2.  Enabling Criteria
--------------------------------------------------------

   If a client or server offers "ext-info-c" or "ext-info-s"
   respectively, it MUST be prepared to accept an SSH_MSG_EXT_INFO
   message from the peer.

   A server only needs to send "ext-info-s" if it intends to process
   SSH_MSG_EXT_INFO from the client.  A client only needs to send
   "ext-info-c" if it plans to process SSH_MSG_EXT_INFO from the server.

   If a server receives an "ext-info-c", or a client receives an
   "ext-info-s", it MAY send an SSH_MSG_EXT_INFO message but is not
   required to do so.

   Neither party needs to wait for the other's SSH_MSG_KEXINIT in order
   to decide whether to send the appropriate indicator in its own
   SSH_MSG_KEXINIT.

   Implementations MUST NOT send an incorrect indicator name for their
   role.  Implementations MAY disconnect if the counterparty sends an
   incorrect indicator.  If "ext-info-c" or "ext-info-s" ends up being
   negotiated as a key exchange method, the parties MUST disconnect.

2.3.  SSH_MSG_EXT_INFO Message
--------------------------------------------------------

   A party that received the "ext-info-c" or "ext-info-s" indicator MAY
   send the following message:

     byte       SSH_MSG_EXT_INFO (value 7)
     uint32     nr-extensions
     repeat the following 2 fields "nr-extensions" times:
       string   extension-name
       string   extension-value (binary)







Bider                        Standards Track                    [Page 4]

RFC 8308              Extension Negotiation in SSH            March 2018


   Implementers should pay careful attention to Section 2.5, in
   particular to the requirement to tolerate any sequence of bytes
   (including null bytes at any position) in an unknown extension's
   extension-value.

2.4.  Message Order
--------------------------------------------------------

   If a client sends SSH_MSG_EXT_INFO, it MUST send it as the next
   packet following the client's first SSH_MSG_NEWKEYS message to the
   server.

   If a server sends SSH_MSG_EXT_INFO, it MAY send it at zero, one, or
   both of the following opportunities:

   o  As the next packet following the server's first SSH_MSG_NEWKEYS.

      Where clients need information in the server's SSH_MSG_EXT_INFO to
      authenticate, it is helpful if the server sends its
      SSH_MSG_EXT_INFO not only as the next packet after
      SSH_MSG_NEWKEYS, but without delay.

      Clients cannot rely on this because the server is not required to
      send the message at this time; if sent, it may be delayed by the
      network.  However, if a timely SSH_MSG_EXT_INFO is received, a
      client can pipeline an authentication request after its
      SSH_MSG_SERVICE_REQUEST, even when it needs extension information.

   o  Immediately preceding the server's SSH_MSG_USERAUTH_SUCCESS, as
      defined in [RFC4252].

      The server MAY send SSH_MSG_EXT_INFO at this second opportunity,
      whether or not it sent it at the first.  A client that sent
      "ext-info-c" MUST accept a server's SSH_MSG_EXT_INFO at both
      opportunities but MUST NOT require it.

      This allows a server to reveal support for additional extensions
      that it was unwilling to reveal to an unauthenticated client.  If
      a server sends a second SSH_MSG_EXT_INFO, this replaces any
      initial one, and both the client and the server re-evaluate
      extensions in effect.  The server's second SSH_MSG_EXT_INFO is
      matched against the client's original.

      The timing of the second opportunity is chosen for the following
      reasons.  If the message was sent earlier, it would not allow the
      server to withhold information until the client has authenticated.
      If it was sent later, a client that needs information from the
      second SSH_MSG_EXT_INFO immediately after it authenticates would
      have no way to reliably know whether to expect the message.



Bider                        Standards Track                    [Page 5]

RFC 8308              Extension Negotiation in SSH            March 2018


2.5.  Interpretation of Extension Names and Values
--------------------------------------------------------

   Each extension is identified by its extension-name and defines the
   conditions under which the extension is considered to be in effect.
   Applications MUST ignore unrecognized extension-names.

   When it is specified, an extension MAY dictate that, in order to take
   effect, both parties must include it in their SSH_MSG_EXT_INFO or
   that it is sufficient for only one party to include it.  However,
   other rules MAY be specified.  The relative order in which extensions
   appear in an SSH_MSG_EXT_INFO message MUST be ignored.

   Extension-value fields are interpreted as defined by their respective
   extension.  This field MAY be empty if permitted by the extension.
   Applications that do not implement or recognize an extension MUST
   ignore its extension-value, regardless of its size or content.
   Applications MUST tolerate any sequence of bytes -- including null
   bytes at any position -- in an unknown extension's extension-value.

   The cumulative size of an SSH_MSG_EXT_INFO message is limited only by
   the maximum packet length that an implementation may apply in
   accordance with [RFC4253].  Implementations MUST accept well-formed
   SSH_MSG_EXT_INFO messages up to the maximum packet length they
   accept.

/. 3.  Initially Defined Extensions
========================================================


3.1.  "server-sig-algs"
--------------------------------------------------------

   This extension is sent with the following extension name and value:

     string      "server-sig-algs"
     name-list   public-key-algorithms-accepted

   The name-list type is a strict subset of the string type and is thus
   permissible as an extension-value.  See [RFC4251] for more
   information.

   This extension is sent by the server and contains a list of public
   key algorithms that the server is able to process as part of a
   "publickey" authentication request.  If a client sends this
   extension, the server MAY ignore it and MAY disconnect.

   In this extension, a server MUST enumerate all public key algorithms
   it might accept during user authentication.  However, early server
   implementations that do not enumerate all accepted algorithms do





Bider                        Standards Track                    [Page 6]

RFC 8308              Extension Negotiation in SSH            March 2018


   exist.  For this reason, a client MAY send a user authentication
   request using a public key algorithm not included in "server-sig-
   algs".

   A client that wishes to proceed with public key authentication MAY
   wait for the server's SSH_MSG_EXT_INFO so it can send a "publickey"
   authentication request with an appropriate public key algorithm,
   rather than resorting to trial and error.

   Servers that implement public key authentication SHOULD implement
   this extension.

   If a server does not send this extension, a client MUST NOT make any
   assumptions about the server's public key algorithm support, and MAY
   proceed with authentication requests using trial and error.  Note
   that implementations are known to exist that apply authentication
   penalties if the client attempts to use an unexpected public key
   algorithm.

   Authentication penalties are applied by servers to deter brute-force
   password guessing, username enumeration, and other types of behavior
   deemed suspicious by server administrators or implementers.
   Penalties may include automatic IP address throttling or blocking,
   and they may trigger email alerts or auditing.

3.2.  "delay-compression"
--------------------------------------------------------

   This extension MAY be sent by both parties as follows:

     string         "delay-compression"
     string:
       name-list    compression_algorithms_client_to_server
       name-list    compression_algorithms_server_to_client

   The extension-value is a string that encodes two name-lists.  The
   name-lists themselves have the encoding of strings.  For example, to
   indicate a preference for algorithms "foo,bar" in the client-to-
   server direction and "bar,baz" in the server-to-client direction, a
   sender encodes the extension-value as follows (including its length):

     00000016 00000007 666f6f2c626172 00000007 6261722c62617a

   This same encoding could be sent by either party -- client or server.

   This extension allows the server and client to renegotiate
   compression algorithm support without having to conduct a key
   re-exchange, which puts new algorithms into effect immediately upon
   successful authentication.



Bider                        Standards Track                    [Page 7]

RFC 8308              Extension Negotiation in SSH            March 2018


   This extension takes effect only if both parties send it.  Name-lists
   MAY include any compression algorithm that could have been negotiated
   in SSH_MSG_KEXINIT, except algorithms that define their own delayed
   compression semantics.  This means "zlib,none" is a valid algorithm
   list in this context, but "zlib@openssh.com" is not.

   If both parties send this extension, but the name-lists do not
   contain a common algorithm in either direction, the parties MUST
   disconnect in the same way as if negotiation failed as part of
   SSH_MSG_KEXINIT.

   If this extension takes effect, the renegotiated compression
   algorithm is activated for the very next SSH message after the
   trigger message:

   o  Sent by the server, the trigger message is
      SSH_MSG_USERAUTH_SUCCESS.

   o  Sent by the client, the trigger message is SSH_MSG_NEWCOMPRESS.

   If this extension takes effect, the client MUST send the following
   message within a reasonable number of outgoing SSH messages after
   receiving SSH_MSG_USERAUTH_SUCCESS, but not necessarily as the first
   such outgoing message:

     byte       SSH_MSG_NEWCOMPRESS (value 8)

   The purpose of SSH_MSG_NEWCOMPRESS is to avoid a race condition where
   the server cannot reliably know whether a message sent by the client
   was sent before or after receiving the server's
   SSH_MSG_USERAUTH_SUCCESS.  For example, clients may send keep-alive
   messages during logon processing.

   As is the case for all extensions unless otherwise noted, the server
   MAY delay including this extension until its secondary
   SSH_MSG_EXT_INFO, sent before SSH_MSG_USERAUTH_SUCCESS.  This allows
   the server to avoid advertising compression until the client has
   authenticated.

   If the parties renegotiate compression using this extension in a
   session where compression is already enabled and the renegotiated
   algorithm is the same in one or both directions, then the internal
   compression state MUST be reset for each direction at the time the
   renegotiated algorithm takes effect.







Bider                        Standards Track                    [Page 8]

RFC 8308              Extension Negotiation in SSH            March 2018


3.2.1.  Awkwardly Timed Key Re-Exchange
--------------------------------------------------------

   A party that has signaled, or intends to signal, support for this
   extension in an SSH session MUST NOT initiate key re-exchange in that
   session until either of the following occurs:

   o  This extension was negotiated, and the party that's about to start
      key re-exchange already sent its trigger message for compression.

   o  The party has sent (if server) or received (if client) the message
      SSH_MSG_USERAUTH_SUCCESS, and this extension was not negotiated.

   If a party violates this rule, the other party MAY disconnect.

   In general, parties SHOULD NOT start key re-exchange before
   successful user authentication but MAY tolerate it if not using this
   extension.

3.2.2.  Subsequent Re-Exchange
--------------------------------------------------------

   In subsequent key re-exchanges that unambiguously begin after the
   compression trigger messages, the compression algorithms negotiated
   in re-exchange override the algorithms negotiated with this
   extension.

3.2.3.  Compatibility Note: OpenSSH up to Version 7.5
--------------------------------------------------------

   This extension uses a binary extension-value encoding.  OpenSSH
   clients up to and including version 7.5 advertise support to receive
   SSH_MSG_EXT_INFO but disconnect on receipt of an extension-value
   containing null bytes.  This is an error fixed in OpenSSH
   version 7.6.

   Implementations that wish to interoperate with OpenSSH 7.5 and
   earlier are advised to check the remote party's SSH version string
   and omit this extension if an affected version is detected.  Affected
   versions do not implement this extension, so there is no harm in
   omitting it.  The extension SHOULD NOT be omitted if the detected
   OpenSSH version is 7.6 or higher.  This would make it harder for the
   OpenSSH project to implement this extension in a higher version.











Bider                        Standards Track                    [Page 9]

RFC 8308              Extension Negotiation in SSH            March 2018


3.3.  "no-flow-control"
--------------------------------------------------------

   This extension is sent with the following extension name and value:

     string      "no-flow-control"
     string      choice of: "p" for preferred | "s" for supported

   A party SHOULD send "s" if it supports "no-flow-control" but does not
   prefer to enable it.  A party SHOULD send "p" if it prefers to enable
   the extension if the other party supports it.  Parties MAY disconnect
   if they receive a different extension value.

   For this extension to take effect, the following must occur:

   o  This extension MUST be sent by both parties.

   o  At least one party MUST have sent the value "p" (preferred).

   If this extension takes effect, the "initial window size" fields in
   SSH_MSG_CHANNEL_OPEN and SSH_MSG_CHANNEL_OPEN_CONFIRMATION, as
   defined in [RFC4254], become meaningless.  The values of these fields
   MUST be ignored, and a channel behaves as if all window sizes are
   infinite.  Neither side is required to send any
   SSH_MSG_CHANNEL_WINDOW_ADJUST messages, and if received, such
   messages MUST be ignored.

   This extension is intended for, but not limited to, use by file
   transfer applications that are only going to use one channel and for
   which the flow control provided by SSH is an impediment, rather than
   a feature.

   Implementations MUST refuse to open more than one simultaneous
   channel when this extension is in effect.  Nevertheless, server
   implementations SHOULD support clients opening more than one
   non-simultaneous channel.

3.3.1.  Prior "No Flow Control" Practice
--------------------------------------------------------

   Before this extension, some applications would simply not implement
   SSH flow control, sending an initial channel window size of 2^32 - 1.
   Applications SHOULD NOT do this for the following reasons:

   o  It is plausible to transfer more than 2^32 bytes over a channel.
      Such a channel will hang if the other party implements SSH flow
      control according to [RFC4254].






Bider                        Standards Track                   [Page 10]

RFC 8308              Extension Negotiation in SSH            March 2018


   o  Implementations that cannot handle large channel window sizes
      exist, and they can exhibit non-graceful behaviors, including
      disconnect.

3.4.  "elevation"
--------------------------------------------------------

   The terms "elevation" and "elevated" refer to an operating system
   mechanism where an administrator's logon session is associated with
   two security contexts: one limited and one with administrative
   rights.  To "elevate" such a session is to activate the security
   context with full administrative rights.  For more information about
   this mechanism on Windows, see [WINADMIN] and [WINTOKEN].

   This extension MAY be sent by the client as follows:

     string      "elevation"
     string      choice of: "y" | "n" | "d"

   A client sends "y" to indicate its preference that the session should
   be elevated; "n" to not be elevated; and "d" for the server to use
   its default behavior.  The server MAY disconnect if it receives a
   different extension value.  If a client does not send the "elevation"
   extension, the server SHOULD act as if "d" was sent.

   If a client has included this extension, then after authentication, a
   server that supports this extension SHOULD indicate to the client
   whether elevation was done by sending the following global request:

     byte        SSH_MSG_GLOBAL_REQUEST
     string      "elevation"
     boolean     want reply = false
     boolean     elevation performed

   Clients that implement this extension help reduce attack surface for
   Windows servers that handle administrative logins.  Where clients do
   not support this extension, servers must elevate sessions to allow
   full access by administrative users always.  Where clients support
   this extension, sessions can be created without elevation unless
   requested.












Bider                        Standards Track                   [Page 11]

RFC 8308              Extension Negotiation in SSH            March 2018


/. 4.  IANA Considerations
========================================================


4.1.  Additions to Existing Registries
--------------------------------------------------------

   IANA has added the following entries to the "Message Numbers"
   registry [IANA-M] under the "Secure Shell (SSH) Protocol Parameters"
   registry [RFC4250]:

     Value    Message ID             Reference
     -----------------------------------------
     7        SSH_MSG_EXT_INFO       RFC 8308
     8        SSH_MSG_NEWCOMPRESS    RFC 8308

   IANA has also added the following entries to the "Key Exchange Method
   Names" registry [IANA-KE]:

     Method Name     Reference      Note
     ------------------------------------------
     ext-info-s      RFC 8308       Section 2
     ext-info-c      RFC 8308       Section 2

4.2.  New Registry: Extension Names
--------------------------------------------------------

   Also under the "Secure Shell (SSH) Protocol Parameters" registry,
   IANA has created a new "Extension Names" registry, with the following
   initial content:

     Extension Name       Reference       Note
     ------------------------------------------------
     server-sig-algs      RFC 8308        Section 3.1
     delay-compression    RFC 8308        Section 3.2
     no-flow-control      RFC 8308        Section 3.3
     elevation            RFC 8308        Section 3.4

4.2.1.  Future Assignments to Extension Names Registry
--------------------------------------------------------

   Names in the "Extension Names" registry MUST follow the conventions
   for names defined in [RFC4250], Section 4.6.1.

   Requests for assignments of new non-local names in the "Extension
   Names" registry (i.e., names not including the '@' character) MUST be
   done using the IETF Review policy, as described in [RFC8126].

/. 5.  Security Considerations
========================================================


   Security considerations are discussed throughout this document.  This
   document updates the SSH protocol as defined in [RFC4251] and related
   documents.  The security considerations of [RFC4251] apply.



Bider                        Standards Track                   [Page 12]

RFC 8308              Extension Negotiation in SSH            March 2018


/. 6.  References
========================================================


6.1.  Normative References
--------------------------------------------------------

   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119,
              DOI 10.17487/RFC2119, March 1997,
              <https://www.rfc-editor.org/info/rfc2119>.

   [RFC4250]  Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Assigned Numbers", RFC 4250,
              DOI 10.17487/RFC4250, January 2006,
              <https://www.rfc-editor.org/info/rfc4250>.

   [RFC4251]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Architecture", RFC 4251, DOI 10.17487/RFC4251,
              January 2006, <https://www.rfc-editor.org/info/rfc4251>.

   [RFC4252]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Authentication Protocol", RFC 4252, DOI 10.17487/RFC4252,
              January 2006, <https://www.rfc-editor.org/info/rfc4252>.

   [RFC4253]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Transport Layer Protocol", RFC 4253, DOI 10.17487/RFC4253,
              January 2006, <https://www.rfc-editor.org/info/rfc4253>.

   [RFC4254]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Connection Protocol", RFC 4254, DOI 10.17487/RFC4254,
              January 2006, <https://www.rfc-editor.org/info/rfc4254>.

   [RFC8126]  Cotton, M., Leiba, B., and T. Narten, "Guidelines for
              Writing an IANA Considerations Section in RFCs", BCP 26,
              RFC 8126, DOI 10.17487/RFC8126, June 2017,
              <https://www.rfc-editor.org/info/rfc8126>.

   [RFC8174]  Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC
              2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174,
              May 2017, <https://www.rfc-editor.org/info/rfc8174>.

6.2.  Informative References
--------------------------------------------------------

   [IANA-KE]  IANA, "Key Exchange Method Names",
              <https://www.iana.org/assignments/ssh-parameters/>.

   [IANA-M]   IANA, "Message Numbers",
              <https://www.iana.org/assignments/ssh-parameters/>.





Bider                        Standards Track                   [Page 13]

RFC 8308              Extension Negotiation in SSH            March 2018


   [RFC8332]  Bider, D., "Use of RSA Keys with SHA-256 and SHA-512 in
              the Secure Shell (SSH) Protocol", RFC 8332,
              DOI 10.17487/RFC8332, March 2018,
              <https://www.rfc-editor.org/info/rfc8332>.

   [WINADMIN] Microsoft, "How to launch a process as a Full
              Administrator when UAC is enabled?", March 2013,
              <https://blogs.msdn.microsoft.com/winsdk/2013/03/22/
              how-to-launch-a-process-as-a-full-administrator-when-
              uac-is-enabled/>.

   [WINTOKEN] Microsoft, "TOKEN_ELEVATION_TYPE enumeration",
              <https://msdn.microsoft.com/en-us/library/windows/desktop/
              bb530718.aspx>.

Acknowledgments

   Thanks to Markus Friedl and Damien Miller for comments and initial
   implementation.  Thanks to Peter Gutmann, Roumen Petrov, Mark D.
   Baushke, Daniel Migault, Eric Rescorla, Matthew A. Miller, Mirja
   Kuehlewind, Adam Roach, Spencer Dawkins, Alexey Melnikov, and Ben
   Campbell for reviews and feedback.

Author's Address

   Denis Bider
   Bitvise Limited
   4105 Lombardy Court
   Colleyville, TX  76034
   United States of America

   Email: ietf-ssh3@denisbider.com
   URI:   https://www.bitvise.com/


















Bider                        Standards Track                   [Page 14]

/EXT RFC8332  Use of RSA Keys with SHA-256 and SHA-512 in the Secure Shell (SSH) Protocol
========================================================
https://datatracker.ietf.org/doc/html/rfc8332

Internet Engineering Task Force (IETF)                          D. Bider
Request for Comments: 8332                               Bitvise Limited
Updates: 4252, 4253                                           March 2018
Category: Standards Track
ISSN: 2070-1721


                Use of RSA Keys with SHA-256 and SHA-512
                   in the Secure Shell (SSH) Protocol

Abstract

   This memo updates RFCs 4252 and 4253 to define new public key
   algorithms for use of RSA keys with SHA-256 and SHA-512 for server
   and client authentication in SSH connections.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 7841.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   https://www.rfc-editor.org/info/rfc8332.






















Bider                        Standards Track                    [Page 1]

RFC 8332        Use of RSA Keys with SHA-256 and SHA-512      March 2018


Copyright Notice

   Copyright (c) 2018 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (https://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.

   This document may contain material from IETF Documents or IETF
   Contributions published or made publicly available before November
   10, 2008.  The person(s) controlling the copyright in some of this
   material may not have granted the IETF Trust the right to allow
   modifications of such material outside the IETF Standards Process.
   Without obtaining an adequate license from the person(s) controlling
   the copyright in such materials, this document may not be modified
   outside the IETF Standards Process, and derivative works of it may
   not be created outside the IETF Standards Process, except to format
   it for publication as an RFC or to translate it into languages other
   than English.

Table of Contents

   1.  Overview and Rationale  . . . . . . . . . . . . . . . . . . .   3
     1.1.  Requirements Terminology  . . . . . . . . . . . . . . . .   3
     1.2.  Wire Encoding Terminology . . . . . . . . . . . . . . . .   3
   2.  Public Key Format vs. Public Key Algorithm  . . . . . . . . .   3
   3.  New RSA Public Key Algorithms . . . . . . . . . . . . . . . .   4
     3.1.  Use for Server Authentication . . . . . . . . . . . . . .   5
     3.2.  Use for Client Authentication . . . . . . . . . . . . . .   5
     3.3.  Discovery of Public Key Algorithms Supported by Servers .   6
   4.  IANA Considerations . . . . . . . . . . . . . . . . . . . . .   6
   5.  Security Considerations . . . . . . . . . . . . . . . . . . .   7
     5.1.  Key Size and Signature Hash . . . . . . . . . . . . . . .   7
     5.2.  Transition  . . . . . . . . . . . . . . . . . . . . . . .   7
     5.3.  PKCS #1 v1.5 Padding and Signature Verification . . . . .   7
   6.  References  . . . . . . . . . . . . . . . . . . . . . . . . .   8
     6.1.  Normative References  . . . . . . . . . . . . . . . . . .   8
     6.2.  Informative References  . . . . . . . . . . . . . . . . .   8
   Acknowledgments . . . . . . . . . . . . . . . . . . . . . . . . .   9
   Author's Address  . . . . . . . . . . . . . . . . . . . . . . . .   9




Bider                        Standards Track                    [Page 2]

RFC 8332        Use of RSA Keys with SHA-256 and SHA-512      March 2018


/. 1.  Overview and Rationale
========================================================


   Secure Shell (SSH) is a common protocol for secure communication on
   the Internet.  In [RFC4253], SSH originally defined the public key
   algorithms "ssh-rsa" for server and client authentication using RSA
   with SHA-1, and "ssh-dss" using 1024-bit DSA and SHA-1.  These
   algorithms are now considered deficient.  For US government use, NIST
   has disallowed 1024-bit RSA and DSA, and use of SHA-1 for signing
   [NIST.800-131A].

   This memo updates RFCs 4252 and 4253 to define new public key
   algorithms allowing for interoperable use of existing and new RSA
   keys with SHA-256 and SHA-512.

1.1.  Requirements Terminology
--------------------------------------------------------

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and
   "OPTIONAL" in this document are to be interpreted as described in
   BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all
   capitals, as shown here.

1.2.  Wire Encoding Terminology
--------------------------------------------------------

   The wire encoding types in this document -- "boolean", "byte",
   "string", "mpint" -- have meanings as described in [RFC4251].

/. 2.  Public Key Format vs. Public Key Algorithm
========================================================


   In [RFC4252], the concept "public key algorithm" is used to establish
   a relationship between one algorithm name, and:

   A.  procedures used to generate and validate a private/public
       keypair;
   B.  a format used to encode a public key; and
   C.  procedures used to calculate, encode, and verify a signature.

   This document uses the term "public key format" to identify only A
   and B in isolation.  The term "public key algorithm" continues to
   identify all three aspects -- A, B, and C.











Bider                        Standards Track                    [Page 3]

RFC 8332        Use of RSA Keys with SHA-256 and SHA-512      March 2018


/. 3.  New RSA Public Key Algorithms
========================================================


   This memo adopts the style and conventions of [RFC4253] in specifying
   how use of a public key algorithm is indicated in SSH.

   The following new public key algorithms are defined:

     rsa-sha2-256        RECOMMENDED    sign    Raw RSA key
     rsa-sha2-512        OPTIONAL       sign    Raw RSA key

   These algorithms are suitable for use both in the SSH transport layer
   [RFC4253] for server authentication and in the authentication layer
   [RFC4252] for client authentication.

   Since RSA keys are not dependent on the choice of hash function, the
   new public key algorithms reuse the "ssh-rsa" public key format as
   defined in [RFC4253]:

   string    "ssh-rsa"
   mpint     e
   mpint     n

   All aspects of the "ssh-rsa" format are kept, including the encoded
   string "ssh-rsa".  This allows existing RSA keys to be used with the
   new public key algorithms, without requiring re-encoding or affecting
   already trusted key fingerprints.

   Signing and verifying using these algorithms is performed according
   to the RSASSA-PKCS1-v1_5 scheme in [RFC8017] using SHA-2 [SHS] as
   hash.

   For the algorithm "rsa-sha2-256", the hash used is SHA-256.
   For the algorithm "rsa-sha2-512", the hash used is SHA-512.

   The resulting signature is encoded as follows:

   string   "rsa-sha2-256" / "rsa-sha2-512"
   string    rsa_signature_blob

   The value for 'rsa_signature_blob' is encoded as a string that
   contains an octet string S (which is the output of RSASSA-PKCS1-v1_5)
   and that has the same length (in octets) as the RSA modulus.  When S
   contains leading zeros, there exist signers that will send a shorter
   encoding of S that omits them.  A verifier MAY accept shorter
   encodings of S with one or more leading zeros omitted.






Bider                        Standards Track                    [Page 4]

RFC 8332        Use of RSA Keys with SHA-256 and SHA-512      March 2018


3.1.  Use for Server Authentication
--------------------------------------------------------

   To express support and preference for one or both of these algorithms
   for server authentication, the SSH client or server includes one or
   both algorithm names, "rsa-sha2-256" and/or "rsa-sha2-512", in the
   name-list field "server_host_key_algorithms" in the SSH_MSG_KEXINIT
   packet [RFC4253].  If one of the two host key algorithms is
   negotiated, the server sends an "ssh-rsa" public key as part of the
   negotiated key exchange method (e.g., in SSH_MSG_KEXDH_REPLY) and
   encodes a signature with the appropriate signature algorithm name --
   either "rsa-sha2-256" or "rsa-sha2-512".

3.2.  Use for Client Authentication
--------------------------------------------------------

   To use this algorithm for client authentication, the SSH client sends
   an SSH_MSG_USERAUTH_REQUEST message [RFC4252] encoding the
   "publickey" method and encoding the string field "public key
   algorithm name" with the value "rsa-sha2-256" or "rsa-sha2-512".  The
   "public key blob" field encodes the RSA public key using the
   "ssh-rsa" public key format.

   For example, as defined in [RFC4252] and [RFC4253], an SSH
   "publickey" authentication request using an "rsa-sha2-512" signature
   would be properly encoded as follows:

     byte      SSH_MSG_USERAUTH_REQUEST
     string    user name
     string    service name
     string    "publickey"
     boolean   TRUE
     string    "rsa-sha2-512"
     string    public key blob:
         string    "ssh-rsa"
         mpint     e
         mpint     n
     string    signature:
         string    "rsa-sha2-512"
         string    rsa_signature_blob

   If the client includes the signature field, the client MUST encode
   the same algorithm name in the signature as in
   SSH_MSG_USERAUTH_REQUEST -- either "rsa-sha2-256" or "rsa-sha2-512".
   If a server receives a mismatching request, it MAY apply arbitrary
   authentication penalties, including but not limited to authentication
   failure or disconnect.






Bider                        Standards Track                    [Page 5]

RFC 8332        Use of RSA Keys with SHA-256 and SHA-512      March 2018


   OpenSSH 7.2 (but not 7.2p2) incorrectly encodes the algorithm in the
   signature as "ssh-rsa" when the algorithm in SSH_MSG_USERAUTH_REQUEST
   is "rsa-sha2-256" or "rsa-sha2-512".  In this case, the signature
   does actually use either SHA-256 or SHA-512.  A server MAY, but is
   not required to, accept this variant or another variant that
   corresponds to a good-faith implementation and is considered safe to
   accept.

3.3.  Discovery of Public Key Algorithms Supported by Servers
--------------------------------------------------------

   Implementation experience has shown that there are servers that apply
   authentication penalties to clients attempting public key algorithms
   that the SSH server does not support.

   Servers that accept rsa-sha2-* signatures for client authentication
   SHOULD implement the extension negotiation mechanism defined in
   [RFC8308], including especially the "server-sig-algs" extension.

   When authenticating with an RSA key against a server that does not
   implement the "server-sig-algs" extension, clients MAY default to an
   "ssh-rsa" signature to avoid authentication penalties.  When the new
   rsa-sha2-* algorithms have been sufficiently widely adopted to
   warrant disabling "ssh-rsa", clients MAY default to one of the new
   algorithms.

/. 4.  IANA Considerations
========================================================


   IANA has updated the "Secure Shell (SSH) Protocol Parameters"
   registry, established with [RFC4250], to extend the table "Public Key
   Algorithm Names" [IANA-PKA] as follows.

   -  To the immediate right of the column "Public Key Algorithm Name",
      a new column has been added, titled "Public Key Format".  For
      existing entries, the column "Public Key Format" has been assigned
      the same value as under "Public Key Algorithm Name".

   -  Immediately following the existing entry for "ssh-rsa", two
      sibling entries have been added:

      P. K. Alg. Name    P. K. Format      Reference   Note
      rsa-sha2-256       ssh-rsa           RFC 8332    Section 3
      rsa-sha2-512       ssh-rsa           RFC 8332    Section 3









Bider                        Standards Track                    [Page 6]

RFC 8332        Use of RSA Keys with SHA-256 and SHA-512      March 2018


/. 5.  Security Considerations
========================================================


   The security considerations of [RFC4251] apply to this document.

5.1.  Key Size and Signature Hash
--------------------------------------------------------

   The National Institute of Standards and Technology (NIST) Special
   Publication 800-131A, Revision 1 [NIST.800-131A] disallows RSA and
   DSA keys shorter than 2048 bits for US government use.  The same
   document disallows the SHA-1 hash function for digital signature
   generation, except under NIST's protocol-specific guidance.

   It is prudent to follow this advice also outside of US government
   use.

5.2.  Transition
--------------------------------------------------------

   This document is based on the premise that RSA is used in
   environments where a gradual, compatible transition to improved
   algorithms will be better received than one that is abrupt and
   incompatible.  It advises that SSH implementations add support for
   new RSA public key algorithms along with SSH_MSG_EXT_INFO and the
   "server-sig-algs" extension to allow coexistence of new deployments
   with older versions that support only "ssh-rsa".  Nevertheless,
   implementations SHOULD start to disable "ssh-rsa" in their default
   configurations as soon as the implementers believe that new RSA
   signature algorithms have been widely adopted.

5.3.  PKCS #1 v1.5 Padding and Signature Verification
--------------------------------------------------------

   This document prescribes RSASSA-PKCS1-v1_5 signature padding because:

   (1)  RSASSA-PSS is not universally available to all implementations;
   (2)  PKCS #1 v1.5 is widely supported in existing SSH
        implementations;
   (3)  PKCS #1 v1.5 is not known to be insecure for use in this scheme.

   Implementers are advised that a signature with RSASSA-PKCS1-v1_5
   padding MUST NOT be verified by applying the RSA key to the
   signature, and then parsing the output to extract the hash.  This may
   give an attacker opportunities to exploit flaws in the parsing and
   vary the encoding.  Verifiers MUST instead apply RSASSA-PKCS1-v1_5
   padding to the expected hash, then compare the encoded bytes with the
   output of the RSA operation.







Bider                        Standards Track                    [Page 7]

RFC 8332        Use of RSA Keys with SHA-256 and SHA-512      March 2018


/. 6.  References
========================================================


6.1.  Normative References
--------------------------------------------------------

   [SHS]      NIST, "Secure Hash Standard (SHS)", FIPS Publication
              180-4, August 2015,
              <http://dx.doi.org/10.6028/NIST.FIPS.180-4>.

   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119,
              DOI 10.17487/RFC2119, March 1997,
              <https://www.rfc-editor.org/info/rfc2119>.

   [RFC4251]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Architecture", RFC 4251, DOI 10.17487/RFC4251,
              January 2006, <https://www.rfc-editor.org/info/rfc4251>.

   [RFC4252]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Authentication Protocol", RFC 4252, DOI 10.17487/RFC4252,
              January 2006, <https://www.rfc-editor.org/info/rfc4252>.

   [RFC4253]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Transport Layer Protocol", RFC 4253, DOI 10.17487/RFC4253,
              January 2006, <https://www.rfc-editor.org/info/rfc4253>.

   [RFC8174]  Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC
              2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174,
              May 2017, <https://www.rfc-editor.org/info/rfc8174>.

   [RFC8308]  Bider, D., "Extension Negotiation in the Secure Shell
              (SSH) Protocol", RFC 8308, DOI 10.17487/RFC8308, March
              2018, <https://www.rfc-editor.org/info/rfc8308>.

6.2.  Informative References
--------------------------------------------------------

   [NIST.800-131A]
              NIST, "Transitions: Recommendation for Transitioning the
              Use of Cryptographic Algorithms and Key Lengths", NIST
              Special Publication 800-131A, Revision 1,
              DOI 10.6028/NIST.SP.800-131Ar1, November 2015,
              <http://nvlpubs.nist.gov/nistpubs/SpecialPublications/
              NIST.SP.800-131Ar1.pdf>.

   [RFC4250]  Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Assigned Numbers", RFC 4250,
              DOI 10.17487/RFC4250, January 2006,
              <https://www.rfc-editor.org/info/rfc4250>.




Bider                        Standards Track                    [Page 8]

RFC 8332        Use of RSA Keys with SHA-256 and SHA-512      March 2018


   [RFC8017]  Moriarty, K., Ed., Kaliski, B., Jonsson, J., and A. Rusch,
              "PKCS #1: RSA Cryptography Specifications Version 2.2",
              RFC 8017, DOI 10.17487/RFC8017, November 2016,
              <https://www.rfc-editor.org/info/rfc8017>.

   [IANA-PKA]
              IANA, "Secure Shell (SSH) Protocol Parameters",
              <https://www.iana.org/assignments/ssh-parameters/>.

Acknowledgments

   Thanks to Jon Bright, Niels Moeller, Stephen Farrell, Mark D.
   Baushke, Jeffrey Hutzelman, Hanno Boeck, Peter Gutmann, Damien
   Miller, Mat Berchtold, Roumen Petrov, Daniel Migault, Eric Rescorla,
   Russ Housley, Alissa Cooper, Adam Roach, and Ben Campbell for
   reviews, comments, and suggestions.

Author's Address

   Denis Bider
   Bitvise Limited
   4105 Lombardy Court
   Colleyville, Texas  76034
   United States of America

   Email: ietf-ssh3@denisbider.com
   URI:   https://www.bitvise.com/
























Bider                        Standards Track                    [Page 9]


/EXT RFC8709  Ed25519 and Ed448 Public Key Algorithms for the Secure Shell (SSH) Protocol
========================================================
https://datatracker.ietf.org/doc/html/rfc8709




Internet Engineering Task Force (IETF)                         B. Harris
Request for Comments: 8709                                              
Updates: 4253                                              L. Velvindron
Category: Standards Track                                  cyberstorm.mu
ISSN: 2070-1721                                            February 2020


   Ed25519 and Ed448 Public Key Algorithms for the Secure Shell (SSH)
                                Protocol

Abstract

   This document describes the use of the Ed25519 and Ed448 digital
   signature algorithms in the Secure Shell (SSH) protocol.
   Accordingly, this RFC updates RFC 4253.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 7841.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   https://www.rfc-editor.org/info/rfc8709.

Copyright Notice

   Copyright (c) 2020 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (https://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.

Table of Contents

   1.  Introduction
   2.  Conventions Used in This Document
     2.1.  Requirements Language
   3.  Public Key Algorithm
   4.  Public Key Format
   5.  Signature Algorithm
   6.  Signature Format
   7.  Verification Algorithm
   8.  SSHFP DNS Resource Records
   9.  IANA Considerations
   10. Security Considerations
   11. References
     11.1.  Normative References
     11.2.  Informative References
   Acknowledgements
   Authors' Addresses

/. 1.  Introduction
========================================================


   Secure Shell (SSH) [RFC4251] is a secure remote-login protocol.  It
   provides for an extensible variety of public key algorithms for
   identifying servers and users to one another.  Ed25519 [RFC8032] is a
   digital signature system.  OpenSSH 6.5 [OpenSSH-6.5] introduced
   support for using Ed25519 for server and user authentication and was
   then followed by other SSH implementations.

   This document describes the method implemented by OpenSSH and others
   and formalizes the use of the name "ssh-ed25519".  Additionally, this
   document describes the use of Ed448 and formalizes the use of the
   name "ssh-ed448".

/. 2.  Conventions Used in This Document
========================================================


   The descriptions of key and signature formats use the notation
   introduced in [RFC4251], Section 3 and the string data type from
   [RFC4251], Section 5.

2.1.  Requirements Language
--------------------------------------------------------

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and
   "OPTIONAL" in this document are to be interpreted as described in
   BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all
   capitals, as shown here.

/. 3.  Public Key Algorithm
========================================================


   This document describes a public key algorithm for use with SSH, as
   per [RFC4253], Section 6.6.  The name of the algorithm is "ssh-
   ed25519".  This algorithm only supports signing and not encryption.

   Additionally, this document describes another public key algorithm.
   The name of the algorithm is "ssh-ed448".  This algorithm only
   supports signing and not encryption.

   Standard implementations of SSH SHOULD implement these signature
   algorithms.

/. 4.  Public Key Format
========================================================


   The "ssh-ed25519" key format has the following encoding:

   string  "ssh-ed25519"

   string  key

   Here, 'key' is the 32-octet public key described in [RFC8032],
   Section 5.1.5.

   The "ssh-ed448" key format has the following encoding:

   string  "ssh-ed448"

   string  key

   Here, 'key' is the 57-octet public key described in [RFC8032],
   Section 5.2.5.

/. 5.  Signature Algorithm
========================================================


   Signatures are generated according to the procedure in Sections 5.1.6
   and 5.2.6 of [RFC8032].

/. 6.  Signature Format
========================================================


   The "ssh-ed25519" key format has the following encoding:

   string  "ssh-ed25519"

   string  signature

   Here, 'signature' is the 64-octet signature produced in accordance
   with [RFC8032], Section 5.1.6.

   The "ssh-ed448" key format has the following encoding:

   string  "ssh-ed448"

   string  signature

   Here, 'signature' is the 114-octet signature produced in accordance
   with [RFC8032], Section 5.2.6.

/. 7.  Verification Algorithm
========================================================


   Ed25519 signatures are verified according to the procedure in
   [RFC8032], Section 5.1.7.

   Ed448 signatures are verified according to the procedure in
   [RFC8032], Section 5.2.7.

/. 8.  SSHFP DNS Resource Records
========================================================


   Usage and generation of the SSHFP DNS resource record is described in
   [RFC4255].  The generation of SSHFP resource records for "ssh-
   ed25519" keys is described in [RFC7479].  This section illustrates
   the generation of SSHFP resource records for "ssh-ed448" keys, and
   this document also specifies the corresponding Ed448 code point to
   "SSHFP RR Types for public key algorithms" in the "DNS SSHFP Resource
   Record Parameters" IANA registry [IANA-SSHFP].

   The generation of SSHFP resource records for "ssh-ed448" keys is
   described as follows.

   The encoding of Ed448 public keys is described in [ED448].  In brief,
   an Ed448 public key is a 57-octet value representing a 455-bit
   y-coordinate of an elliptic curve point, and a sign bit indicating
   the corresponding x-coordinate.

   The SSHFP Resource Record for the Ed448 public key with SHA-256
   fingerprint would, for example, be:

   example.com. IN SSHFP 6 2 ( a87f1b687ac0e57d2a081a2f2826723
                               34d90ed316d2b818ca9580ea384d924
                               01 )

   The '2' here indicates SHA-256 [RFC6594].

/. 9.  IANA Considerations
========================================================


   This document augments the Public Key Algorithm Names in [RFC4250],
   Section 4.11.3.

   IANA has added the following entry to "Public Key Algorithm Names" in
   the "Secure Shell (SSH) Protocol Parameters" registry [IANA-SSH]:

                 +---------------------------+-----------+
                 | Public Key Algorithm Name | Reference |
                 +===========================+===========+
                 | ssh-ed25519               | RFC 8709  |
                 +---------------------------+-----------+
                 | ssh-ed448                 | RFC 8709  |
                 +---------------------------+-----------+

                                  Table 1

   IANA has added the following entry to "SSHFP RR Types for public key
   algorithms" in the "DNS SSHFP Resource Record Parameters" registry
   [IANA-SSHFP]:

                    +-------+-------------+-----------+
                    | Value | Description | Reference |
                    +=======+=============+===========+
                    | 6     | Ed448       | RFC 8709  |
                    +-------+-------------+-----------+

                                  Table 2

/. 10.  Security Considerations
========================================================


   The security considerations in [RFC4251], Section 9 apply to all SSH
   implementations, including those using Ed25519 and Ed448.

   The security considerations in [RFC8032], Section 8 and [RFC7479],
   Section 3 apply to all uses of Ed25519 and Ed448, including those in
   SSH.

/. 11.  References
========================================================


11.1.  Normative References
--------------------------------------------------------

   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119,
              DOI 10.17487/RFC2119, March 1997,
              <https://www.rfc-editor.org/info/rfc2119>.

   [RFC4250]  Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Assigned Numbers", RFC 4250,
              DOI 10.17487/RFC4250, January 2006,
              <https://www.rfc-editor.org/info/rfc4250>.

   [RFC4251]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Architecture", RFC 4251, DOI 10.17487/RFC4251,
              January 2006, <https://www.rfc-editor.org/info/rfc4251>.

   [RFC4253]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Transport Layer Protocol", RFC 4253, DOI 10.17487/RFC4253,
              January 2006, <https://www.rfc-editor.org/info/rfc4253>.

   [RFC4255]  Schlyter, J. and W. Griffin, "Using DNS to Securely
              Publish Secure Shell (SSH) Key Fingerprints", RFC 4255,
              DOI 10.17487/RFC4255, January 2006,
              <https://www.rfc-editor.org/info/rfc4255>.

   [RFC6594]  Sury, O., "Use of the SHA-256 Algorithm with RSA, Digital
              Signature Algorithm (DSA), and Elliptic Curve DSA (ECDSA)
              in SSHFP Resource Records", RFC 6594,
              DOI 10.17487/RFC6594, April 2012,
              <https://www.rfc-editor.org/info/rfc6594>.

   [RFC8032]  Josefsson, S. and I. Liusvaara, "Edwards-Curve Digital
              Signature Algorithm (EdDSA)", RFC 8032,
              DOI 10.17487/RFC8032, January 2017,
              <https://www.rfc-editor.org/info/rfc8032>.

   [RFC8174]  Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC
              2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174,
              May 2017, <https://www.rfc-editor.org/info/rfc8174>.

11.2.  Informative References
--------------------------------------------------------

   [ED448]    Hamburg, M., "Ed448-Goldilocks, a new elliptic curve",
              January 2015, <https://eprint.iacr.org/2015/625.pdf>.

   [IANA-SSH] IANA, "Secure Shell (SSH) Protocol Parameters",
              <https://www.iana.org/assignments/ssh-parameters>.

   [IANA-SSHFP]
              IANA, "DNS SSHFP Resource Record Parameters",
              <https://www.iana.org/assignments/dns-sshfp-rr-
              parameters>.

   [OpenSSH-6.5]
              Friedl, M., Provos, N., de Raadt, T., Steves, K., Miller,
              D., Tucker, D., McIntyre, J., Rice, T., and B. Lindstrom,
              "OpenSSH 6.5 release notes", January 2014,
              <http://www.openssh.com/txt/release-6.5>.

   [RFC7479]  Moonesamy, S., "Using Ed25519 in SSHFP Resource Records",
              RFC 7479, DOI 10.17487/RFC7479, March 2015,
              <https://www.rfc-editor.org/info/rfc7479>.

Acknowledgements

   The OpenSSH implementation of Ed25519 in SSH was written by Markus
   Friedl.  We are also grateful to Mark Baushke, Benjamin Kaduk, and
   Daniel Migault for their comments.

Authors' Addresses

   Ben Harris
   2A Eachard Road
   Cambridge
   CB3 0HY
   United Kingdom

   Email: bjh21@bjh21.me.uk


   Loganaden Velvindron
   cyberstorm.mu
   88, Avenue De Plevitz
   Roches Brunes
   Mauritius

   Email: logan@cyberstorm.mu



/EXT RFC8731  Secure Shell (SSH) Key Exchange Method Using Curve25519 and Curve448
========================================================
https://datatracker.ietf.org/doc/html/rfc8731




Internet Engineering Task Force (IETF)                   A. Adamantiadis
Request for Comments: 8731                                        libssh
Category: Standards Track                                   S. Josefsson
ISSN: 2070-1721                                                   SJD AB
                                                              M. Baushke
                                                  Juniper Networks, Inc.
                                                           February 2020


  Secure Shell (SSH) Key Exchange Method Using Curve25519 and Curve448

Abstract

   This document describes the specification for using Curve25519 and
   Curve448 key exchange methods in the Secure Shell (SSH) protocol.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 7841.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   https://www.rfc-editor.org/info/rfc8731.

Copyright Notice

   Copyright (c) 2020 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (https://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.

Table of Contents

   1.  Introduction
   2.  Requirements Language
   3.  Key Exchange Methods
     3.1.  Shared Secret Encoding
   4.  Security Considerations
   5.  IANA Considerations
   6.  References
     6.1.  Normative References
     6.2.  Informative References
   Acknowledgements
   Authors' Addresses

/. 1.  Introduction
========================================================


   Secure Shell (SSH) [RFC4251] is a secure remote login protocol.  The
   key exchange protocol described in [RFC4253] supports an extensible
   set of methods.  [RFC5656] defines how elliptic curves are integrated
   into this extensible SSH framework, and this document reuses the
   Elliptic Curve Diffie-Hellman (ECDH) key exchange protocol messages
   defined in Section 7.1 (ECDH Message Numbers) of [RFC5656].  Other
   parts of [RFC5656], such as Elliptic Curve Menezes-Qu-Vanstone
   (ECMQV) key agreement and Elliptic Curve Digital Signature Algorithm
   (ECDSA), are not considered in this document.

   This document describes how to implement key exchange based on
   Curve25519 and Curve448 [RFC7748] in SSH.  For Curve25519 with
   SHA-256 [RFC6234][SHS], the algorithm described is equivalent to the
   privately defined algorithm "curve25519-sha256@libssh.org", which at
   the time of publication was implemented and widely deployed in libssh
   [libssh] and OpenSSH [OpenSSH].  The Curve448 key exchange method is
   similar but uses SHA-512 [RFC6234][SHS].

/. 2.  Requirements Language
========================================================


   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and
   "OPTIONAL" in this document are to be interpreted as described in
   BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all
   capitals, as shown here.

/. 3.  Key Exchange Methods
========================================================


   The key exchange procedure is similar to the ECDH method described in
   Section 4 of [RFC5656], though with a different wire encoding used
   for public values and the final shared secret.  Public ephemeral keys
   are encoded for transmission as standard SSH strings.

   The protocol flow, the SSH_MSG_KEX_ECDH_INIT and
   SSH_MSG_KEX_ECDH_REPLY messages, and the structure of the exchange
   hash are identical to Section 4 of [RFC5656].

   The method names registered by this document are "curve25519-sha256"
   and "curve448-sha512".

   The methods are based on Curve25519 and Curve448 scalar
   multiplication, as described in [RFC7748].  Private and public keys
   are generated as described therein.  Public keys are defined as
   strings of 32 bytes for Curve25519 and 56 bytes for Curve448.

   The key-agreement schemes "curve25519-sha256" and "curve448-sha512"
   perform the Diffie-Hellman protocol using the functions X25519 and
   X448, respectively.  Implementations SHOULD compute these functions
   using the algorithms described in [RFC7748].  When they do so,
   implementations MUST check whether the computed Diffie-Hellman shared
   secret is the all-zero value and abort if so, as described in
   Section 6 of [RFC7748].  Alternative implementations of these
   functions SHOULD abort when either the client or the server input
   forces the shared secret to one of a small set of values, as
   described in Sections 6 and 7 of [RFC7748].  Clients and servers MUST
   also abort if the length of the received public keys are not the
   expected lengths.  An abort for these purposes is defined as a
   disconnect (SSH_MSG_DISCONNECT) of the session and SHOULD use the
   SSH_DISCONNECT_KEY_EXCHANGE_FAILED reason for the message
   [IANA-REASON].  No further validation is required beyond what is
   described in [RFC7748].  The derived shared secret is 32 bytes when
   "curve25519-sha256" is used and 56 bytes when "curve448-sha512" is
   used.  The encodings of all values are defined in [RFC7748].  The
   hash used is SHA-256 for "curve25519-sha256" and SHA-512 for
   "curve448-sha512".

3.1.  Shared Secret Encoding
--------------------------------------------------------

   The following step differs from [RFC5656], which uses a different
   conversion.  This is not intended to modify that text generally, but
   only to be applicable to the scope of the mechanism described in this
   document.

   The shared secret, K, is defined in [RFC4253] and [RFC5656] as an
   integer encoded as a multiple precision integer (mpint).
   Curve25519/448 outputs a binary string X, which is the 32- or 56-byte
   point obtained by scalar multiplication of the other side's public
   key and the local private key scalar.  The 32 or 56 bytes of X are
   converted into K by interpreting the octets as an unsigned fixed-
   length integer encoded in network byte order.

   The mpint K is then encoded using the process described in Section 5
   of [RFC4251], and the resulting bytes are fed as described in
   [RFC4253] to the key exchange method's hash function to generate
   encryption keys.

   When performing the X25519 or X448 operations, the integer values
   there will be encoded into byte strings by doing a fixed-length
   unsigned little-endian conversion, per [RFC7748].  It is only later
   when these byte strings are then passed to the ECDH function in SSH
   that the bytes are reinterpreted as a fixed-length unsigned big-
   endian integer value K, and then later that K value is encoded as a
   variable-length signed "mpint" before being fed to the hash algorithm
   used for key generation.  The mpint K is then fed along with other
   data to the key exchange method's hash function to generate
   encryption keys.

/. 4.  Security Considerations
========================================================


   The security considerations of [RFC4251], [RFC5656], and [RFC7748]
   are inherited.

   Curve25519 with SHA-256 provides strong (~128 bits) security, is
   efficient on a wide range of architectures, and has characteristics
   that allow for better implementation properties compared to
   traditional elliptic curves.  Curve448 with SHA-512 provides stronger
   (~224 bits) security with similar implementation properties; however,
   it has not received the same cryptographic review as Curve25519.  It
   is also slower (larger key material and larger secure hash
   algorithm), but it is provided as a hedge to combat unforeseen
   analytical advances against Curve25519 and SHA-256 due to the larger
   number of security bits.

   The way the derived mpint binary secret string is encoded before it
   is hashed (i.e., adding or removing zero bytes for encoding) raises
   the potential for a side-channel attack, which could determine the
   length of what is hashed.  This would leak the most significant bit
   of the derived secret and/or allow detection of when the most
   significant bytes are zero.  For backwards-compatibility reasons, it
   was decided not to address this potential problem.

   This document provides "curve25519-sha256" as the preferred choice
   but suggests that the "curve448-sha512" be implemented to provide
   more than 128 bits of security strength should that become a
   requirement.

/. 5.  IANA Considerations
========================================================


   IANA has added "curve25519-sha256" and "curve448-sha512" to the "Key
   Exchange Method Names" registry for SSH [IANA-KEX] that was created
   in Section 4.10 of [RFC4250].

/. 6.  References
========================================================


6.1.  Normative References
--------------------------------------------------------

   [RFC2119]  Bradner, S., "Key words for use in RFCs to Indicate
              Requirement Levels", BCP 14, RFC 2119,
              DOI 10.17487/RFC2119, March 1997,
              <https://www.rfc-editor.org/info/rfc2119>.

   [RFC4250]  Lehtinen, S. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Assigned Numbers", RFC 4250,
              DOI 10.17487/RFC4250, January 2006,
              <https://www.rfc-editor.org/info/rfc4250>.

   [RFC4251]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Protocol Architecture", RFC 4251, DOI 10.17487/RFC4251,
              January 2006, <https://www.rfc-editor.org/info/rfc4251>.

   [RFC4253]  Ylonen, T. and C. Lonvick, Ed., "The Secure Shell (SSH)
              Transport Layer Protocol", RFC 4253, DOI 10.17487/RFC4253,
              January 2006, <https://www.rfc-editor.org/info/rfc4253>.

   [RFC5656]  Stebila, D. and J. Green, "Elliptic Curve Algorithm
              Integration in the Secure Shell Transport Layer",
              RFC 5656, DOI 10.17487/RFC5656, December 2009,
              <https://www.rfc-editor.org/info/rfc5656>.

   [RFC8174]  Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC
              2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174,
              May 2017, <https://www.rfc-editor.org/info/rfc8174>.

   [SHS]      National Institute of Standards and Technology, "Secure
              Hash Standard (SHS)", FIPS PUB 180-4,
              DOI 10.6028/NIST.FIPS.180-4, August 2015,
              <https://nvlpubs.nist.gov/nistpubs/FIPS/
              NIST.FIPS.180-4.pdf>.

6.2.  Informative References
--------------------------------------------------------

   [IANA-KEX] IANA, "Secure Shell (SSH) Protocol Parameters: Key
              Exchange Method Names",
              <https://www.iana.org/assignments/ssh-parameters/>.

   [IANA-REASON]
              IANA, "Secure Shell (SSH) Protocol Parameters:
              Disconnection Messages Reason Codes and Descriptions",
              <https://www.iana.org/assignments/ssh-parameters/>.

   [libssh]   libssh, "The SSH Library", <https://www.libssh.org/>.

   [OpenSSH]  OpenSSH group of OpenBSD, "The OpenSSH Project",
              <https://www.openssh.com/>.

   [RFC6234]  Eastlake 3rd, D. and T. Hansen, "US Secure Hash Algorithms
              (SHA and SHA-based HMAC and HKDF)", RFC 6234,
              DOI 10.17487/RFC6234, May 2011,
              <https://www.rfc-editor.org/info/rfc6234>.

   [RFC7748]  Langley, A., Hamburg, M., and S. Turner, "Elliptic Curves
              for Security", RFC 7748, DOI 10.17487/RFC7748, January
              2016, <https://www.rfc-editor.org/info/rfc7748>.

Acknowledgements

   The "curve25519-sha256" key exchange method is identical to the
   "curve25519-sha256@libssh.org" key exchange method created by Aris
   Adamantiadis and implemented in libssh and OpenSSH.

   Thanks to the following people for review and comments: Denis Bider,
   Damien Miller, Niels Moeller, Matt Johnston, Eric Rescorla, Ron
   Frederick, and Stefan Buehler.

Authors' Addresses

   Aris Adamantiadis
   libssh

   Email: aris@badcode.be


   Simon Josefsson
   SJD AB

   Email: simon@josefsson.org


   Mark D. Baushke
   Juniper Networks, Inc.

   Email: mdb@juniper.net