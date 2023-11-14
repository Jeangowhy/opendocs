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



/.  The Secure Shell (SSH) Protocol Assigned Numbers
    https://www.rfc-editor.org/rfc/rfc4250.txt
========================================================



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



/.  The Secure Shell (SSH) Protocol Architecture
    https://www.rfc-editor.org/rfc/rfc4251.txt
========================================================







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



/.  The Secure Shell (SSH) Authentication Protocol
    https://www.rfc-editor.org/rfc/rfc4252.txt
========================================================







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



/.  The Secure Shell (SSH) Transport Layer Protocol
    https://www.rfc-editor.org/rfc/rfc4253.txt
========================================================







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



/.  The Secure Shell (SSH) Connection Protocol
    https://www.rfc-editor.org/rfc/rfc4254.txt
========================================================







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


