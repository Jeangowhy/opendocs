https://www.rfc-editor.org/rfc/rfc8499
                                                                        
                                                   BEST CURRENT PRACTICE
                                                                        
Internet Engineering Task Force (IETF)                        P. Hoffman
Request for Comments: 8499                                         ICANN
BCP: 219                                                     A. Sullivan
Obsoletes: 7719
Updates: 2308                                                K. Fujiwara
Category: Best Current Practice                                     JPRS
ISSN: 2070-1721                                             January 2019


                            DNS Terminology

Abstract

   The Domain Name System (DNS) is defined in literally dozens of
   different RFCs.  The terminology used by implementers and developers
   of DNS protocols, and by operators of DNS systems, has sometimes
   changed in the decades since the DNS was first defined.  This
   document gives current definitions for many of the terms used in the
   DNS in a single document.

   This document obsoletes RFC 7719 and updates RFC 2308.

Status of This Memo

   This memo documents an Internet Best Current Practice.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   BCPs is available in Section 2 of RFC 7841.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   https://www.rfc-editor.org/info/rfc8499.
















Hoffman, et al.           Best Current Practice                 [Page 1]

RFC 8499                     DNS Terminology                January 2019


Copyright Notice

   Copyright (c) 2019 IETF Trust and the persons identified as the
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

# /Table of Contents

    1.  Introduction  . . . . . . . . . . . . . . . . . . . . . . . .   3
    2.  Names . . . . . . . . . . . . . . . . . . . . . . . . . . . .   4
    3.  DNS Response Codes  . . . . . . . . . . . . . . . . . . . . .  10
    4.  DNS Transactions  . . . . . . . . . . . . . . . . . . . . . .  11
    5.  Resource Records  . . . . . . . . . . . . . . . . . . . . . .  14
    6.  DNS Servers and Clients . . . . . . . . . . . . . . . . . . .  16
    7.  Zones . . . . . . . . . . . . . . . . . . . . . . . . . . . .  22
    8.  Wildcards . . . . . . . . . . . . . . . . . . . . . . . . . .  27
    9.  Registration Model  . . . . . . . . . . . . . . . . . . . . .  28
    10. General DNSSEC  . . . . . . . . . . . . . . . . . . . . . . .  30
    11. DNSSEC States . . . . . . . . . . . . . . . . . . . . . . . .  34
    12. Security Considerations . . . . . . . . . . . . . . . . . . .  36
    13. IANA Considerations . . . . . . . . . . . . . . . . . . . . .  36
    14. References  . . . . . . . . . . . . . . . . . . . . . . . . .  36
      14.1.  Normative References . . . . . . . . . . . . . . . . . .  36
      14.2.  Informative References . . . . . . . . . . . . . . . . .  39
    Appendix A.  Definitions Updated by This Document . . . . . . . .  44
    Appendix B.  Definitions First Defined in This Document . . . . .  44
    Index . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  46
    Acknowledgements  . . . . . . . . . . . . . . . . . . . . . . . .  50
    Authors' Addresses  . . . . . . . . . . . . . . . . . . . . . . .  50













Hoffman, et al.           Best Current Practice                 [Page 2]

RFC 8499                     DNS Terminology                January 2019


# /1.  Introduction

   The Domain Name System (DNS) is a simple query-response protocol
   whose messages in both directions have the same format.  (Section 2
   gives a definition of "public DNS", which is often what people mean
   when they say "the DNS".)  The protocol and message format are
   defined in [RFC1034] and [RFC1035].  These RFCs defined some terms,
   and later documents defined others.  Some of the terms from [RFC1034]
   and [RFC1035] have somewhat different meanings now than they did in
   1987.

   This document contains a collection of a wide variety of DNS-related
   terms, organized loosely by topic.  Some of them have been precisely
   defined in earlier RFCs, some have been loosely defined in earlier
   RFCs, and some are not defined in an earlier RFC at all.

   Other organizations sometimes define DNS-related terms their own way.
   For example, the WHATWG defines "domain" at
   <https://url.spec.whatwg.org/>.  The Root Server System Advisory
   Committee (RSSAC) has a good lexicon [RSSAC026].

   Most of the definitions listed here represent the consensus
   definition of the DNS community -- both protocol developers and
   operators.  Some of the definitions differ from earlier RFCs, and
   those differences are noted.  In this document, where the consensus
   definition is the same as the one in an RFC, that RFC is quoted.
   Where the consensus definition has changed somewhat, the RFC is
   mentioned but the new stand-alone definition is given.  See
   Appendix A for a list of the definitions that this document updates.

   It is important to note that, during the development of this
   document, it became clear that some DNS-related terms are interpreted
   quite differently by different DNS experts.  Further, some terms that
   are defined in early DNS RFCs now have definitions that are generally
   agreed to, but that are different from the original definitions.
   Therefore, this document is a substantial revision to [RFC7719].

   Note that there is no single consistent definition of "the DNS".  It
   can be considered to be some combination of the following: a commonly
   used naming scheme for objects on the Internet; a distributed
   database representing the names and certain properties of these
   objects; an architecture providing distributed maintenance,
   resilience, and loose coherency for this database; and a simple
   query-response protocol (as mentioned below) implementing this
   architecture.  Section 2 defines "global DNS" and "private DNS" as a
   way to deal with these differing definitions.





Hoffman, et al.           Best Current Practice                 [Page 3]

RFC 8499                     DNS Terminology                January 2019


   Capitalization in DNS terms is often inconsistent among RFCs and
   various DNS practitioners.  The capitalization used in this document
   is a best guess at current practices, and is not meant to indicate
   that other capitalization styles are wrong or archaic.  In some
   cases, multiple styles of capitalization are used for the same term
   due to quoting from different RFCs.

   Readers should note that the terms in this document are grouped by
   topic.  Someone who is not already familiar with the DNS probably
   cannot learn about the DNS from scratch by reading this document from
   front to back.  Instead, skipping around may be the only way to get
   enough context to understand some of the definitions.  This document
   has an index that might be useful for readers who are attempting to
   learn the DNS by reading this document.

# /2.  Names

   Naming system:  A naming system associates names with data.  Naming
      systems have many significant facets that help differentiate them
      from each other.  Some commonly identified facets include:

      *  Composition of names

      *  Format of names

      *  Administration of names

      *  Types of data that can be associated with names

      *  Types of metadata for names

      *  Protocol for getting data from a name

      *  Context for resolving a name

      Note that this list is a small subset of facets that people have
      identified over time for naming systems, and the IETF has yet to
      agree on a good set of facets that can be used to compare naming
      systems.  For example, other facets might include "protocol to
      update data in a name", "privacy of names", and "privacy of data
      associated with names", but those are not as well defined as the
      ones listed above.  The list here is chosen because it helps
      describe the DNS and naming systems similar to the DNS.








Hoffman, et al.           Best Current Practice                 [Page 4]

RFC 8499                     DNS Terminology                January 2019


   Domain name:  An ordered list of one or more labels.

      Note that this is a definition independent of the DNS RFCs
      ([RFC1034] and [RFC1035]), and the definition here also applies to
      systems other than the DNS.  [RFC1034] defines the "domain name
      space" using mathematical trees and their nodes in graph theory,
      and that definition has the same practical result as the
      definition here.  Any path of a directed acyclic graph can be
      represented by a domain name consisting of the labels of its
      nodes, ordered by decreasing distance from the root(s) (which is
      the normal convention within the DNS, including this document).  A
      domain name whose last label identifies a root of the graph is
      fully qualified; other domain names whose labels form a strict
      prefix of a fully-qualified domain name are relative to its first
      omitted node.

      Also note that different IETF and non-IETF documents have used the
      term "domain name" in many different ways.  It is common for
      earlier documents to use "domain name" to mean "names that match
      the syntax in [RFC1035]", but possibly with additional rules such
      as "and are, or will be, resolvable in the global DNS" or "but
      only using the presentation format".

   Label:  An ordered list of zero or more octets that makes up a
      portion of a domain name.  Using graph theory, a label identifies
      one node in a portion of the graph of all possible domain names.

   Global DNS:  Using the short set of facets listed in "Naming system",
      the global DNS can be defined as follows.  Most of the rules here
      come from [RFC1034] and [RFC1035], although the term "global DNS"
      has not been defined before now.

      Composition of names: A name in the global DNS has one or more
      labels.  The length of each label is between 0 and 63 octets
      inclusive.  In a fully-qualified domain name, the last label in
      the ordered list is 0 octets long; it is the only label whose
      length may be 0 octets, and it is called the "root" or "root
      label".  A domain name in the global DNS has a maximum total
      length of 255 octets in the wire format; the root represents one
      octet for this calculation.  (Multicast DNS [RFC6762] allows names
      up to 255 bytes plus a terminating zero byte based on a different
      interpretation of RFC 1035 and what is included in the 255
      octets.)








Hoffman, et al.           Best Current Practice                 [Page 5]

RFC 8499                     DNS Terminology                January 2019


      Format of names: Names in the global DNS are domain names.  There
      are three formats: wire format, presentation format, and common
      display.

         The basic wire format for names in the global DNS is a list of
         labels ordered by decreasing distance from the root, with the
         root label last.  Each label is preceded by a length octet.
         [RFC1035] also defines a compression scheme that modifies this
         format.

         The presentation format for names in the global DNS is a list
         of labels ordered by decreasing distance from the root, encoded
         as ASCII, with a "." character between each label.  In
         presentation format, a fully-qualified domain name includes the
         root label and the associated separator dot.  For example, in
         presentation format, a fully-qualified domain name with two
         non-root labels is always shown as "example.tld." instead of
         "example.tld".  [RFC1035] defines a method for showing octets
         that do not display in ASCII.

         The common display format is used in applications and free
         text.  It is the same as the presentation format, but showing
         the root label and the "." before it is optional and is rarely
         done.  For example, in common display format, a fully-qualified
         domain name with two non-root labels is usually shown as
         "example.tld" instead of "example.tld.".  Names in the common
         display format are normally written such that the
         directionality of the writing system presents labels by
         decreasing distance from the root (so, in both English and the
         C programming language the root or Top-Level Domain (TLD) label
         in the ordered list is rightmost; but in Arabic, it may be
         leftmost, depending on local conventions).

      Administration of names: Administration is specified by delegation
      (see the definition of "delegation" in Section 7).  Policies for
      administration of the root zone in the global DNS are determined
      by the names operational community, which convenes itself in the
      Internet Corporation for Assigned Names and Numbers (ICANN).  The
      names operational community selects the IANA Functions Operator
      for the global DNS root zone.  At the time of writing, that
      operator is Public Technical Identifiers (PTI).  (See
      <https://pti.icann.org/> for more information about PTI operating
      the IANA Functions.)  The name servers that serve the root zone
      are provided by independent root operators.  Other zones in the
      global DNS have their own policies for administration.






Hoffman, et al.           Best Current Practice                 [Page 6]

RFC 8499                     DNS Terminology                January 2019


      Types of data that can be associated with names: A name can have
      zero or more resource records associated with it.  There are
      numerous types of resource records with unique data structures
      defined in many different RFCs and in the IANA registry at
      [IANA_Resource_Registry].

      Types of metadata for names: Any name that is published in the DNS
      appears as a set of resource records (see the definition of
      "RRset" in Section 5).  Some names do not, themselves, have data
      associated with them in the DNS, but they "appear" in the DNS
      anyway because they form part of a longer name that does have data
      associated with it (see the definition of "empty non-terminals" in
      Section 7).

      Protocol for getting data from a name: The protocol described in
      [RFC1035].

      Context for resolving a name: The global DNS root zone distributed
      by PTI.

   Private DNS:  Names that use the protocol described in [RFC1035] but
      that do not rely on the global DNS root zone or names that are
      otherwise not generally available on the Internet but are using
      the protocol described in [RFC1035].  A system can use both the
      global DNS and one or more private DNS systems; for example, see
      "Split DNS" in Section 6.

      Note that domain names that do not appear in the DNS, and that are
      intended never to be looked up using the DNS protocol, are not
      part of the global DNS or a private DNS even though they are
      domain names.

   Multicast DNS (mDNS):  "Multicast DNS (mDNS) provides the ability to
      perform DNS-like operations on the local link in the absence of
      any conventional Unicast DNS server.  In addition, Multicast DNS
      designates a portion of the DNS namespace to be free for local
      use, without the need to pay any annual fee, and without the need
      to set up delegations or otherwise configure a conventional DNS
      server to answer for those names."  (Quoted from [RFC6762],
      Abstract) Although it uses a compatible wire format, mDNS is,
      strictly speaking, a different protocol than DNS.  Also, where the
      above quote says "a portion of the DNS namespace", it would be
      clearer to say "a portion of the domain name space".  The names in
      mDNS are not intended to be looked up in the DNS.







Hoffman, et al.           Best Current Practice                 [Page 7]

RFC 8499                     DNS Terminology                January 2019


   Locally served DNS zone:  A locally served DNS zone is a special case
      of private DNS.  Names are resolved using the DNS protocol in a
      local context.  [RFC6303] defines subdomains of IN-ADDR.ARPA that
      are locally served zones.  Resolution of names through locally
      served zones may result in ambiguous results.  For example, the
      same name may resolve to different results in different locally
      served DNS zone contexts.  The context for a locally served DNS
      zone may be explicit, such as those that are listed in [RFC6303]
      and [RFC7793], or implicit, such as those defined by local DNS
      administration and not known to the resolution client.

   Fully-Qualified Domain Name (FQDN):  This is often just a clear way
      of saying the same thing as "domain name of a node", as outlined
      above.  However, the term is ambiguous.  Strictly speaking, a
      fully-qualified domain name would include every label, including
      the zero-length label of the root: such a name would be written
      "www.example.net." (note the terminating dot).  But, because every
      name eventually shares the common root, names are often written
      relative to the root (such as "www.example.net") and are still
      called "fully qualified".  This term first appeared in [RFC819].
      In this document, names are often written relative to the root.

      The need for the term "fully-qualified domain name" comes from the
      existence of partially qualified domain names, which are names
      where one or more of the last labels in the ordered list are
      omitted (for example, a domain name of "www" relative to
      "example.net" identifies "www.example.net").  Such relative names
      are understood only by context.

   Host name:  This term and its equivalent, "hostname", have been
      widely used but are not defined in [RFC1034], [RFC1035],
      [RFC1123], or [RFC2181].  The DNS was originally deployed into the
      Host Tables environment as outlined in [RFC952], and it is likely
      that the term followed informally from the definition there.  Over
      time, the definition seems to have shifted.  "Host name" is often
      meant to be a domain name that follows the rules in Section 3.5 of
      [RFC1034], which is also called the "preferred name syntax".  (In
      that syntax, every character in each label is a letter, a digit,
      or a hyphen).  Note that any label in a domain name can contain
      any octet value; hostnames are generally considered to be domain
      names where every label follows the rules in the "preferred name
      syntax", with the amendment that labels can start with ASCII
      digits (this amendment comes from Section 2.1 of [RFC1123]).

      People also sometimes use the term "hostname" to refer to just the
      first label of an FQDN, such as "printer" in
      "printer.admin.example.com".  (Sometimes this is formalized in
      configuration in operating systems.)  In addition, people



Hoffman, et al.           Best Current Practice                 [Page 8]

RFC 8499                     DNS Terminology                January 2019


      sometimes use this term to describe any name that refers to a
      machine, and those might include labels that do not conform to the
      "preferred name syntax".

   Top-Level Domain (TLD):  A Top-Level Domain is a zone that is one
      layer below the root, such as "com" or "jp".  There is nothing
      special, from the point of view of the DNS, about TLDs.  Most of
      them are also delegation-centric zones (defined in Section 7), and
      there are significant policy issues around their operation.  TLDs
      are often divided into sub-groups such as Country Code Top-Level
      Domains (ccTLDs), Generic Top-Level Domains (gTLDs), and others;
      the division is a matter of policy and beyond the scope of this
      document.

   Internationalized Domain Name (IDN):  The Internationalized Domain
      Names for Applications (IDNA) protocol is the standard mechanism
      for handling domain names with non-ASCII characters in
      applications in the DNS.  The current standard at the time of this
      writing, normally called "IDNA2008", is defined in [RFC5890],
      [RFC5891], [RFC5892], [RFC5893], and [RFC5894].  These documents
      define many IDN-specific terms such as "LDH label", "A-label", and
      "U-label".  [RFC6365] defines more terms that relate to
      internationalization (some of which relate to IDNs); [RFC6055] has
      a much more extensive discussion of IDNs, including some new
      terminology.

   Subdomain:  "A domain is a subdomain of another domain if it is
      contained within that domain.  This relationship can be tested by
      seeing if the subdomain's name ends with the containing domain's
      name."  (Quoted from [RFC1034], Section 3.1) For example, in the
      host name "nnn.mmm.example.com", both "mmm.example.com" and
      "nnn.mmm.example.com" are subdomains of "example.com".  Note that
      the comparisons here are done on whole labels; that is,
      "ooo.example.com" is not a subdomain of "oo.example.com".

   Alias:  The owner of a CNAME resource record, or a subdomain of the
      owner of a DNAME resource record (DNAME records are defined in
      [RFC6672]).  See also "canonical name".

   Canonical name:  A CNAME resource record "identifies its owner name
      as an alias, and specifies the corresponding canonical name in the
      RDATA section of the RR."  (Quoted from [RFC1034], Section 3.6.2)
      This usage of the word "canonical" is related to the mathematical
      concept of "canonical form".







Hoffman, et al.           Best Current Practice                 [Page 9]

RFC 8499                     DNS Terminology                January 2019


   CNAME:  "It has been traditional to refer to the [owner] of a CNAME
      record as 'a CNAME'.  This is unfortunate, as 'CNAME' is an
      abbreviation of 'canonical name', and the [owner] of a CNAME
      record is most certainly not a canonical name."  (Quoted from
      [RFC2181], Section 10.1.1.  The quoted text has been changed from
      "label" to "owner".)

# /3.  DNS Response Codes

   Some of the response codes (RCODEs) that are defined in [RFC1035]
   have acquired their own shorthand names.  All of the RCODEs are
   listed at [IANA_Resource_Registry], although that list uses mixed-
   case capitalization, while most documents use all caps.  Some of the
   common names for values defined in [RFC1035] are described in this
   section.  This section also includes an additional RCODE and a
   general definition.  The official list of all RCODEs is in the IANA
   registry.

   NOERROR:  This RCODE appears as "No error condition" in Section 4.1.1
      of [RFC1035].

   FORMERR:  This RCODE appears as "Format error - The name server was
      unable to interpret the query" in Section 4.1.1 of [RFC1035].

   SERVFAIL:  This RCODE appears as "Server failure - The name server
      was unable to process this query due to a problem with the name
      server" in Section 4.1.1 of [RFC1035].

   NXDOMAIN:  This RCODE appears as "Name Error [...] this code
      signifies that the domain name referenced in the query does not
      exist." in Section 4.1.1 of [RFC1035].  [RFC2308] established
      NXDOMAIN as a synonym for Name Error.

   NOTIMP:  This RCODE appears as "Not Implemented - The name server
      does not support the requested kind of query" in Section 4.1.1 of
      [RFC1035].

   REFUSED:  This RCODE appears as "Refused - The name server refuses to
      perform the specified operation for policy reasons.  For example,
      a name server may not wish to provide the information to the
      particular requester, or a name server may not wish to perform a
      particular operation (e.g., zone transfer) for particular data."
      in Section 4.1.1 of [RFC1035].

   NODATA:  "A pseudo RCODE which indicates that the name is valid, for
      the given class, but [there] are no records of the given type.  A
      NODATA response has to be inferred from the answer."  (Quoted from
      [RFC2308], Section 1) "NODATA is indicated by an answer with the



Hoffman, et al.           Best Current Practice                [Page 10]

RFC 8499                     DNS Terminology                January 2019


      RCODE set to NOERROR and no relevant answers in the Answer
      section.  The authority section will contain an SOA record, or
      there will be no NS records there."  (Quoted from [RFC2308],
      Section 2.2) Note that referrals have a similar format to NODATA
      replies; [RFC2308] explains how to distinguish them.

      The term "NXRRSET" is sometimes used as a synonym for NODATA.
      However, this is a mistake, given that NXRRSET is a specific error
      code defined in [RFC2136].

   Negative response:  A response that indicates that a particular RRset
      does not exist or whose RCODE indicates that the nameserver cannot
      answer.  Sections 2 and 7 of [RFC2308] describe the types of
      negative responses in detail.

# /4.  DNS Transactions

   The header of a DNS message is its first 12 octets.  Many of the
   fields and flags in the diagrams in Sections 4.1.1 through 4.1.3 of
   [RFC1035] are referred to by their names in each diagram.  For
   example, the response codes are called "RCODEs", the data for a
   record is called the "RDATA", and the authoritative answer bit is
   often called "the AA flag" or "the AA bit".

   Class:  A class "identifies a protocol family or instance of a
      protocol".  (Quoted from [RFC1034], Section 3.6) "The DNS tags all
      data with a class as well as the type, so that we can allow
      parallel use of different formats for data of type address."
      (Quoted from [RFC1034], Section 2.2) In practice, the class for
      nearly every query is "IN" (the Internet).  There are some queries
      for "CH" (the Chaos class), but they are usually for the purposes
      of information about the server itself rather than for a different
      type of address.

   QNAME:  The most commonly used rough definition is that the QNAME is
      a field in the Question section of a query.  "A standard query
      specifies a target domain name (QNAME), query type (QTYPE), and
      query class (QCLASS) and asks for RRs which match."  (Quoted from
      [RFC1034], Section 3.7.1) Strictly speaking, the definition comes
      from [RFC1035], Section 4.1.2, where the QNAME is defined in
      respect of the Question section.  This definition appears to be
      applied consistently: the discussion of inverse queries in
      Section 6.4.1 refers to the "owner name of the query RR and its
      TTL", because inverse queries populate the Answer section and
      leave the Question section empty.  (Inverse queries are deprecated
      in [RFC3425]; thus, relevant definitions do not appear in this
      document.)




Hoffman, et al.           Best Current Practice                [Page 11]

RFC 8499                     DNS Terminology                January 2019


      However, [RFC2308] has an alternate definition that puts the QNAME
      in the answer (or series of answers) instead of the query.  It
      defines QNAME as "...the name in the query section of an answer,
      or where this resolves to a CNAME, or CNAME chain, the data field
      of the last CNAME.  The last CNAME in this sense is that which
      contains a value which does not resolve to another CNAME."  This
      definition has a certain internal logic, because of the way CNAME
      substitution works and the definition of CNAME.  If a name server
      does not find an RRset that matches a query, but does find the
      same name in the same class with a CNAME record, then the name
      server "includes the CNAME record in the response and restarts the
      query at the domain name specified in the data field of the CNAME
      record."  (Quoted from [RFC1034], Section 3.6.2) This is made
      explicit in the resolution algorithm outlined in Section 4.3.2 of
      [RFC1034], which says to "change QNAME to the canonical name in
      the CNAME RR, and go back to step 1" in the case of a CNAME RR.
      Since a CNAME record explicitly declares that the owner name is
      canonically named what is in the RDATA, then there is a way to
      view the new name (i.e., the name that was in the RDATA of the
      CNAME RR) as also being the QNAME.

      However, this creates a kind of confusion because the response to
      a query that results in CNAME processing contains in the echoed
      Question section one QNAME (the name in the original query) and a
      second QNAME that is in the data field of the last CNAME.  The
      confusion comes from the iterative/recursive mode of resolution,
      which finally returns an answer that need not actually have the
      same owner name as the QNAME contained in the original query.

      To address this potential confusion, it is helpful to distinguish
      between three meanings:

      *  QNAME (original): The name actually sent in the Question
         section in the original query, which is always echoed in the
         (final) reply in the Question section when the QR bit is set to
         1.

      *  QNAME (effective): A name actually resolved, which is either
         the name originally queried or a name received in a CNAME chain
         response.

      *  QNAME (final): The name actually resolved, which is either the
         name actually queried or else the last name in a CNAME chain
         response.

      Note that, because the definition in [RFC2308] is actually for a
      different concept than what was in [RFC1034], it would have been
      better if [RFC2308] had used a different name for that concept.



Hoffman, et al.           Best Current Practice                [Page 12]

RFC 8499                     DNS Terminology                January 2019


      In general use today, QNAME almost always means what is defined
      above as "QNAME (original)".

   Referrals:  A type of response in which a server, signaling that it
      is not (completely) authoritative for an answer, provides the
      querying resolver with an alternative place to send its query.
      Referrals can be partial.

      A referral arises when a server is not performing recursive
      service while answering a query.  It appears in step 3(b) of the
      algorithm in [RFC1034], Section 4.3.2.

      There are two types of referral response.  The first is a downward
      referral (sometimes described as "delegation response"), where the
      server is authoritative for some portion of the QNAME.  The
      authority section RRset's RDATA contains the name servers
      specified at the referred-to zone cut.  In normal DNS operation,
      this kind of response is required in order to find names beneath a
      delegation.  The bare use of "referral" means this kind of
      referral, and many people believe that this is the only legitimate
      kind of referral in the DNS.

      The second is an upward referral (sometimes described as "root
      referral"), where the server is not authoritative for any portion
      of the QNAME.  When this happens, the referred-to zone in the
      authority section is usually the root zone (".").  In normal DNS
      operation, this kind of response is not required for resolution or
      for correctly answering any query.  There is no requirement that
      any server send upward referrals.  Some people regard upward
      referrals as a sign of a misconfiguration or error.  Upward
      referrals always need some sort of qualifier (such as "upward" or
      "root") and are never identified simply by the word "referral".

      A response that has only a referral contains an empty answer
      section.  It contains the NS RRset for the referred-to zone in the
      Authority section.  It may contain RRs that provide addresses in
      the additional section.  The AA bit is clear.

      In the case where the query matches an alias, and the server is
      not authoritative for the target of the alias but is authoritative
      for some name above the target of the alias, the resolution
      algorithm will produce a response that contains both the
      authoritative answer for the alias and a referral.  Such a partial
      answer and referral response has data in the Answer section.  It
      has the NS RRset for the referred-to zone in the Authority
      section.  It may contain RRs that provide addresses in the





Hoffman, et al.           Best Current Practice                [Page 13]

RFC 8499                     DNS Terminology                January 2019


      additional section.  The AA bit is set, because the first name in
      the Answer section matches the QNAME and the server is
      authoritative for that answer (see [RFC1035], Section 4.1.1).

# /5.  Resource Records

   RR:  An acronym for resource record.  (See [RFC1034], Section 3.6.)

   RRset:  A set of resource records "with the same label, class and
      type, but with different data" (according to [RFC2181],
      Section 5).  Also written as "RRSet" in some documents.  As a
      clarification, "same label" in this definition means "same owner
      name".  In addition, [RFC2181] states that "the TTLs of all RRs in
      an RRSet must be the same".

      Note that RRSIG resource records do not match this definition.
      [RFC4035] says:

         An RRset MAY have multiple RRSIG RRs associated with it.  Note
         that as RRSIG RRs are closely tied to the RRsets whose
         signatures they contain, RRSIG RRs, unlike all other DNS RR
         types, do not form RRsets.  In particular, the TTL values among
         RRSIG RRs with a common owner name do not follow the RRset
         rules described in [RFC2181].

   Master file:  "Master files are text files that contain RRs in text
      form.  Since the contents of a zone can be expressed in the form
      of a list of RRs a master file is most often used to define a
      zone, though it can be used to list a cache's contents."  (Quoted
      from [RFC1035], Section 5) Master files are sometimes called "zone
      files".

   Presentation format:  The text format used in master files.  This
      format is shown but not formally defined in [RFC1034] or
      [RFC1035].  The term "presentation format" first appears in
      [RFC4034].

   EDNS:  The extension mechanisms for DNS, defined in [RFC6891].
      Sometimes called "EDNS0" or "EDNS(0)" to indicate the version
      number.  EDNS allows DNS clients and servers to specify message
      sizes larger than the original 512 octet limit, to expand the
      response code space and to carry additional options that affect
      the handling of a DNS query.

   OPT:  A pseudo-RR (sometimes called a "meta-RR") that is used only to
      contain control information pertaining to the question-and-answer
      sequence of a specific transaction.  (Definition paraphrased from
      [RFC6891], Section 6.1.1.)  It is used by EDNS.



Hoffman, et al.           Best Current Practice                [Page 14]

RFC 8499                     DNS Terminology                January 2019


   Owner:  "The domain name where the RR is found."  (Quoted from
      [RFC1034], Section 3.6) Often appears in the term "owner name".

   SOA field names:  DNS documents, including the definitions here,
      often refer to the fields in the RDATA of an SOA resource record
      by field name.  "SOA" stands for "start of a zone of authority".
      Those fields are defined in Section 3.3.13 of [RFC1035].  The
      names (in the order they appear in the SOA RDATA) are MNAME,
      RNAME, SERIAL, REFRESH, RETRY, EXPIRE, and MINIMUM.  Note that the
      meaning of the MINIMUM field is updated in Section 4 of [RFC2308];
      the new definition is that the MINIMUM field is only "the TTL to
      be used for negative responses".  This document tends to use field
      names instead of terms that describe the fields.

   TTL:  The maximum "time to live" of a resource record.  "A TTL value
      is an unsigned number, with a minimum value of 0, and a maximum
      value of 2147483647.  That is, a maximum of 2^31 - 1.  When
      transmitted, this value shall be encoded in the less significant
      31 bits of the 32 bit TTL field, with the most significant, or
      sign, bit set to zero."  (Quoted from [RFC2181], Section 8) (Note
      that [RFC1035] erroneously stated that this is a signed integer;
      that was fixed by [RFC2181].)

      The TTL "specifies the time interval that the resource record may
      be cached before the source of the information should again be
      consulted."  (Quoted from [RFC1035], Section 3.2.1) Section 4.1.3
      of the same document states: "the time interval (in seconds) that
      the resource record may be cached before it should be discarded".
      Despite being defined for a resource record, the TTL of every
      resource record in an RRset is required to be the same ([RFC2181],
      Section 5.2).

      The reason that the TTL is the maximum time to live is that a
      cache operator might decide to shorten the time to live for
      operational purposes, such as if there is a policy to disallow TTL
      values over a certain number.  Some servers are known to ignore
      the TTL on some RRsets (such as when the authoritative data has a
      very short TTL) even though this is against the advice in RFC
      1035.  An RRset can be flushed from the cache before the end of
      the TTL interval, at which point, the value of the TTL becomes
      unknown because the RRset with which it was associated no longer
      exists.

      There is also the concept of a "default TTL" for a zone, which can
      be a configuration parameter in the server software.  This is
      often expressed by a default for the entire server, and a default
      for a zone using the $TTL directive in a zone file.  The $TTL
      directive was added to the master file format by [RFC2308].



Hoffman, et al.           Best Current Practice                [Page 15]

RFC 8499                     DNS Terminology                January 2019


   Class independent:  A resource record type whose syntax and semantics
      are the same for every DNS class.  A resource record type that is
      not class independent has different meanings depending on the DNS
      class of the record, or the meaning is undefined for some class.
      Most resource record types are defined for class 1 (IN, the
      Internet), but many are undefined for other classes.

   Address records:  Records whose type is A or AAAA.  [RFC2181]
      informally defines these as "(A, AAAA, etc)".  Note that new types
      of address records could be defined in the future.

# /6.  DNS Servers and Clients

   This section defines the terms used for the systems that act as DNS
   clients, DNS servers, or both.  In past RFCs, DNS servers are
   sometimes called "name servers", "nameservers", or just "servers".
   There is no formal definition of "DNS server", but RFCs generally
   assume that it is an Internet server that listens for queries and
   sends responses using the DNS protocol defined in [RFC1035] and its
   successors.

   It is important to note that the terms "DNS server" and "name server"
   require context in order to understand the services being provided.
   Both authoritative servers and recursive resolvers are often called
   "DNS servers" and "name servers" even though they serve different
   roles (but may be part of the same software package).

   For terminology specific to the public DNS root server system, see
   [RSSAC026].  That document defines terms such as "root server", "root
   server operator", and terms that are specific to the way that the
   root zone of the public DNS is served.

   Resolver:  A program "that extract[s] information from name servers
      in response to client requests."  (Quoted from [RFC1034],
      Section 2.4) A resolver performs queries for a name, type, and
      class, and receives responses.  The logical function is called
      "resolution".  In practice, the term is usually referring to some
      specific type of resolver (some of which are defined below), and
      understanding the use of the term depends on understanding the
      context.

      A related term is "resolve", which is not formally defined in
      [RFC1034] or [RFC1035].  An imputed definition might be "asking a
      question that consists of a domain name, class, and type, and
      receiving some sort of response".  Similarly, an imputed
      definition of "resolution" might be "the response received from
      resolving".




Hoffman, et al.           Best Current Practice                [Page 16]

RFC 8499                     DNS Terminology                January 2019


   Stub resolver:  A resolver that cannot perform all resolution itself.
      Stub resolvers generally depend on a recursive resolver to
      undertake the actual resolution function.  Stub resolvers are
      discussed but never fully defined in Section 5.3.1 of [RFC1034].
      They are fully defined in Section 6.1.3.1 of [RFC1123].

   Iterative mode:  A resolution mode of a server that receives DNS
      queries and responds with a referral to another server.
      Section 2.3 of [RFC1034] describes this as "The server refers the
      client to another server and lets the client pursue the query."  A
      resolver that works in iterative mode is sometimes called an
      "iterative resolver".  See also "iterative resolution" later in
      this section.

   Recursive mode:  A resolution mode of a server that receives DNS
      queries and either responds to those queries from a local cache or
      sends queries to other servers in order to get the final answers
      to the original queries.  Section 2.3 of [RFC1034] describes this
      as "the first server pursues the query for the client at another
      server".  Section 4.3.1 of [RFC1034] says: "in [recursive] mode
      the name server acts in the role of a resolver and returns either
      an error or the answer, but never referrals."  That same section
      also says:

         The recursive mode occurs when a query with RD set arrives at a
         server which is willing to provide recursive service; the
         client can verify that recursive mode was used by checking that
         both RA and RD are set in the reply.

      A server operating in recursive mode may be thought of as having a
      name server side (which is what answers the query) and a resolver
      side (which performs the resolution function).  Systems operating
      in this mode are commonly called "recursive servers".  Sometimes
      they are called "recursive resolvers".  In practice, it is not
      possible to know in advance whether the server that one is
      querying will also perform recursion; both terms can be observed
      in use interchangeably.

   Recursive resolver:  A resolver that acts in recursive mode.  In
      general, a recursive resolver is expected to cache the answers it
      receives (which would make it a full-service resolver), but some
      recursive resolvers might not cache.

      [RFC4697] tried to differentiate between a recursive resolver and
      an iterative resolver.






Hoffman, et al.           Best Current Practice                [Page 17]

RFC 8499                     DNS Terminology                January 2019


   Recursive query:  A query with the Recursion Desired (RD) bit set to
      1 in the header.  (See Section 4.1.1 of [RFC1035].)  If recursive
      service is available and is requested by the RD bit in the query,
      the server uses its resolver to answer the query.  (See
      Section 4.3.2 of [RFC1034].)

   Non-recursive query:  A query with the Recursion Desired (RD) bit set
      to 0 in the header.  A server can answer non-recursive queries
      using only local information: the response contains either an
      error, the answer, or a referral to some other server "closer" to
      the answer.  (See Section 4.3.1 of [RFC1034].)

   Iterative resolution:  A name server may be presented with a query
      that can only be answered by some other server.  The two general
      approaches to dealing with this problem are "recursive", in which
      the first server pursues the query on behalf of the client at
      another server, and "iterative", in which the server refers the
      client to another server and lets the client pursue the query
      there.  (See Section 2.3 of [RFC1034].)

      In iterative resolution, the client repeatedly makes non-recursive
      queries and follows referrals and/or aliases.  The iterative
      resolution algorithm is described in Section 5.3.3 of [RFC1034].

   Full resolver:  This term is used in [RFC1035], but it is not defined
      there.  RFC 1123 defines a "full-service resolver" that may or may
      not be what was intended by "full resolver" in [RFC1035].  This
      term is not properly defined in any RFC.

   Full-service resolver:  Section 6.1.3.1 of [RFC1123] defines this
      term to mean a resolver that acts in recursive mode with a cache
      (and meets other requirements).

   Priming:  "The act of finding the list of root servers from a
      configuration that lists some or all of the purported IP addresses
      of some or all of those root servers."  (Quoted from [RFC8109],
      Section 2) In order to operate in recursive mode, a resolver needs
      to know the address of at least one root server.  Priming is most
      often done from a configuration setting that contains a list of
      authoritative servers for the root zone.

   Root hints:  "Operators who manage a DNS recursive resolver typically
      need to configure a 'root hints file'.  This file contains the
      names and IP addresses of the authoritative name servers for the
      root zone, so the software can bootstrap the DNS resolution
      proce ss.  For many pieces of software, this list comes built into
      the software."  (Quoted from [IANA_RootFiles]) This file is often
      used in priming.



Hoffman, et al.           Best Current Practice                [Page 18]

RFC 8499                     DNS Terminology                January 2019


   Negative caching:  "The storage of knowledge that something does not
      exist, cannot or does not give an answer."  (Quoted from
      [RFC2308], Section 1)

   Authoritative server:  "A server that knows the content of a DNS zone
      from local knowledge, and thus can answer queries about that zone
      without needing to query other servers."  (Quoted from [RFC2182],
      Section 2) An authoritative server is named in the NS ("name
      server") record in a zone.  It is a system that responds to DNS
      queries with information about zones for which it has been
      configured to answer with the AA flag in the response header set
      to 1.  It is a server that has authority over one or more DNS
      zones.  Note that it is possible for an authoritative server to
      respond to a query without the parent zone delegating authority to
      that server.  Authoritative servers also provide "referrals",
      usually to child zones delegated from them; these referrals have
      the AA bit set to 0 and come with referral data in the Authority
      and (if needed) the Additional sections.

   Authoritative-only server:  A name server that only serves
      authoritative data and ignores requests for recursion.  It will
      "not normally generate any queries of its own.  Instead it answers
      non-recursive queries from iterative resolvers looking for
      information in zones it serves."  (Quoted from [RFC4697],
      Section 2.4) In this case, "ignores requests for recursion" means
      "responds to requests for recursion with responses indicating that
      recursion was not performed".

   Zone transfer:  The act of a client requesting a copy of a zone and
      an authoritative server sending the needed information.  (See
      Section 7 for a description of zones.)  There are two common
      standard ways to do zone transfers: the AXFR ("Authoritative
      Transfer") mechanism to copy the full zone (described in
      [RFC5936], and the IXFR ("Incremental Transfer") mechanism to copy
      only parts of the zone that have changed (described in [RFC1995]).
      Many systems use non-standard methods for zone transfer outside
      the DNS protocol.

   Slave server:  See "Secondary server".

   Secondary server:  "An authoritative server which uses zone transfer
      to retrieve the zone."  (Quoted from [RFC1996], Section 2.1)
      Secondary servers are also discussed in [RFC1034].  [RFC2182]
      describes secondary servers in more detail.  Although early DNS
      RFCs such as [RFC1996] referred to this as a "slave", the current
      common usage has shifted to calling it a "secondary".

   Master server:  See "Primary server".



Hoffman, et al.           Best Current Practice                [Page 19]

RFC 8499                     DNS Terminology                January 2019


   Primary server:  "Any authoritative server configured to be the
      source of zone transfer for one or more [secondary] servers."
      (Quoted from [RFC1996], Section 2.1) Or, more specifically,
      [RFC2136] calls it "an authoritative server configured to be the
      source of AXFR or IXFR data for one or more [secondary] servers".
      Primary servers are also discussed in [RFC1034].  Although early
      DNS RFCs such as [RFC1996] referred to this as a "master", the
      current common usage has shifted to "primary".

   Primary master:  "The primary master is named in the zone's SOA MNAME
      field and optionally by an NS RR."  (Quoted from [RFC1996],
      Section 2.1) [RFC2136] defines "primary master" as "Master server
      at the root of the AXFR/IXFR dependency graph.  The primary master
      is named in the zone's SOA MNAME field and optionally by an NS RR.
      There is by definition only one primary master server per zone."

      The idea of a primary master is only used in [RFC1996] and
      [RFC2136].  A modern interpretation of the term "primary master"
      is a server that is both authoritative for a zone and that gets
      its updates to the zone from configuration (such as a master file)
      or from UPDATE transactions.

   Stealth server:  This is "like a slave server except not listed in an
      NS RR for the zone."  (Quoted from [RFC1996], Section 2.1)

   Hidden master:  A stealth server that is a primary server for zone
      transfers.  "In this arrangement, the master name server that
      processes the updates is unavailable to general hosts on the
      Internet; it is not listed in the NS RRset."  (Quoted from
      [RFC6781], Section 3.4.3) An earlier RFC, [RFC4641], said that the
      hidden master's name "appears in the SOA RRs MNAME field",
      although, in some setups, the name does not appear at all in the
      public DNS.  A hidden master can also be a secondary server for
      the zone itself.

   Forwarding:  The process of one server sending a DNS query with the
      RD bit set to 1 to another server to resolve that query.
      Forwarding is a function of a DNS resolver; it is different than
      simply blindly relaying queries.

      [RFC5625] does not give a specific definition for forwarding, but
      describes in detail what features a system that forwards needs to
      support.  Systems that forward are sometimes called "DNS proxies",
      but that term has not yet been defined (even in [RFC5625]).







Hoffman, et al.           Best Current Practice                [Page 20]

RFC 8499                     DNS Terminology                January 2019


   Forwarder:  Section 1 of [RFC2308] describes a forwarder as "a
      nameserver used to resolve queries instead of directly using the
      authoritative nameserver chain".  [RFC2308] further says "The
      forwarder typically either has better access to the internet, or
      maintains a bigger cache which may be shared amongst many
      resolvers."  That definition appears to suggest that forwarders
      normally only query authoritative servers.  In current use,
      however, forwarders often stand between stub resolvers and
      recursive servers.  [RFC2308] is silent on whether a forwarder is
      iterative-only or can be a full-service resolver.

   Policy-implementing resolver:  A resolver acting in recursive mode
      that changes some of the answers that it returns based on policy
      criteria, such as to prevent access to malware sites or
      objectionable content.  In general, a stub resolver has no idea
      whether upstream resolvers implement such policy or, if they do,
      the exact policy about what changes will be made.  In some cases,
      the user of the stub resolver has selected the policy-implementing
      resolver with the explicit intention of using it to implement the
      policies.  In other cases, policies are imposed without the user
      of the stub resolver being informed.

   Open resolver:  A full-service resolver that accepts and processes
      queries from any (or nearly any) client.  This is sometimes also
      called a "public resolver", although the term "public resolver" is
      used more with open resolvers that are meant to be open, as
      compared to the vast majority of open resolvers that are probably
      misconfigured to be open.  Open resolvers are discussed in
      [RFC5358].

   Split DNS:  The terms "split DNS" and "split-horizon DNS" have long
      been used in the DNS community without formal definition.  In
      general, they refer to situations in which DNS servers that are
      authoritative for a particular set of domains provide partly or
      completely different answers in those domains depending on the
      source of the query.  The effect of this is that a domain name
      that is notionally globally unique nevertheless has different
      meanings for different network users.  This can sometimes be the
      result of a "view" configuration, described below.

      Section 3.8 of [RFC2775] gives a related definition that is too
      specific to be generally useful.

   View:  A configuration for a DNS server that allows it to provide
      different responses depending on attributes of the query, such as
      for "split DNS".  Typically, views differ by the source IP address
      of a query, but can also be based on the destination IP address,
      the type of query (such as AXFR), whether it is recursive, and so



Hoffman, et al.           Best Current Practice                [Page 21]

RFC 8499                     DNS Terminology                January 2019


      on.  Views are often used to provide more names or different
      addresses to queries from "inside" a protected network than to
      those "outside" that network.  Views are not a standardized part
      of the DNS, but they are widely implemented in server software.

   Passive DNS:  A mechanism to collect DNS data by storing DNS
      responses from name servers.  Some of these systems also collect
      the DNS queries associated with the responses, although doing so
      raises some privacy concerns.  Passive DNS databases can be used
      to answer historical questions about DNS zones such as which
      values were present at a given time in the past, or when a name
      was spotted first.  Passive DNS databases allow searching of the
      stored records on keys other than just the name and type, such as
      "find all names which have A records of a particular value".

   Anycast:  "The practice of making a particular service address
      available in multiple, discrete, autonomous locations, such that
      datagrams sent are routed to one of several available locations."
      (Quoted from [RFC4786], Section 2) See [RFC4786] for more detail
      on Anycast and other terms that are specific to its use.

   Instance:  "When anycast routing is used to allow more than one
      server to have the same IP address, each one of those servers is
      commonly referred to as an 'instance'."  It goes on to say: "An
      instance of a server, such as a root server, is often referred to
      as an 'Anycast instance'."  (Quoted from [RSSAC026])

   Privacy-enabling DNS server:  "A DNS server that implements DNS over
      TLS [RFC7858] and may optionally implement DNS over DTLS
      [RFC8094]."  (Quoted from [RFC8310], Section 2) Other types of DNS
      servers might also be considered privacy-enabling, such as those
      running DNS over HTTPS [RFC8484].

# /7.  Zones

   This section defines terms that are used when discussing zones that
   are being served or retrieved.

   Zone:  "Authoritative information is organized into units called
      ZONEs, and these zones can be automatically distributed to the
      name servers which provide redundant service for the data in a
      zone."  (Quoted from [RFC1034], Section 2.4)

   Child:  "The entity on record that has the delegation of the domain
      from the Parent."  (Quoted from [RFC7344], Section 1.1)






Hoffman, et al.           Best Current Practice                [Page 22]

RFC 8499                     DNS Terminology                January 2019


   Parent:  "The domain in which the Child is registered."  (Quoted from
      [RFC7344], Section 1.1) Earlier, "parent name server" was defined
      in [RFC0882] as "the name server that has authority over the place
      in the domain name space that will hold the new domain".  (Note
      that [RFC0882] was obsoleted by [RFC1034] and [RFC1035].)
      [RFC819] also has some description of the relationship between
      parents and children.

   Origin:

      There are two different uses for this term:

      (a)  "The domain name that appears at the top of a zone (just
           below the cut that separates the zone from its parent)... The
           name of the zone is the same as the name of the domain at the
           zone's origin."  (Quoted from [RFC2181], Section 6) These
           days, this sense of "origin" and "apex" (defined below) are
           often used interchangeably.

      (b)  The domain name within which a given relative domain name
           appears in zone files.  Generally seen in the context of
           "$ORIGIN", which is a control entry defined in [RFC1035],
           Section 5.1, as part of the master file format.  For example,
           if the $ORIGIN is set to "example.org.", then a master file
           line for "www" is in fact an entry for "www.example.org.".

   Apex:  The point in the tree at an owner of an SOA and corresponding
      authoritative NS RRset.  This is also called the "zone apex".
      [RFC4033] defines it as "the name at the child's side of a zone
      cut".  The "apex" can usefully be thought of as a data-theoretic
      description of a tree structure, and "origin" is the name of the
      same concept when it is implemented in zone files.  The
      distinction is not always maintained in use, however, and one can
      find uses that conflict subtly with this definition.  [RFC1034]
      uses the term "top node of the zone" as a synonym of "apex", but
      that term is not widely used.  These days, the first sense of
      "origin" (above) and "apex" are often used interchangeably.

   Zone cut:  The delimitation point between two zones where the origin
      of one of the zones is the child of the other zone.

      "Zones are delimited by 'zone cuts'.  Each zone cut separates a
      'child' zone (below the cut) from a 'parent' zone (above the
      cut)."  (Quoted from [RFC2181], Section 6; note that this is
      barely an ostensive definition.)  Section 4.2 of [RFC1034] uses
      "cuts" instead of "zone cut".





Hoffman, et al.           Best Current Practice                [Page 23]

RFC 8499                     DNS Terminology                January 2019


   Delegation:  The process by which a separate zone is created in the
      name space beneath the apex of a given domain.  Delegation happens
      when an NS RRset is added in the parent zone for the child origin.
      Delegation inherently happens at a zone cut.  The term is also
      commonly a noun: the new zone that is created by the act of
      delegating.

   Authoritative data:  "All of the RRs attached to all of the nodes
      from the top node of the zone down to leaf nodes or nodes above
      cuts around the bottom edge of the zone."  (Quoted from [RFC1034],
      Section 4.2.1) Note that this definition might inadvertently also
      cause any NS records that appear in the zone to be included, even
      those that might not truly be authoritative because there are
      identical NS RRs below the zone cut.  This reveals the ambiguity
      in the notion of authoritative data, because the parent-side NS
      records authoritatively indicate the delegation, even though they
      are not themselves authoritative data.

      [RFC4033], Section 2, defines "Authoritative RRset", which is
      related to authoritative data but has a more precise definition.

   Lame delegation:  "A lame delegations exists [sic] when a nameserver
      is delegated responsibility for providing nameservice for a zone
      (via NS records) but is not performing nameservice for that zone
      (usually because it is not set up as a primary or secondary for
      the zone)."  (Quoted from [RFC1912], Section 2.8) Another
      definition is that a lame delegation "...happens when a name
      server is listed in the NS records for some domain and in fact it
      is not a server for that domain.  Queries are thus sent to the
      wrong servers, who don't know nothing [sic] (at least not as
      expected) about the queried domain.  Furthermore, sometimes these
      hosts (if they exist!) don't even run name servers."  (Quoted from
      [RFC1713], Section 2.3)

   Glue records:  "...[Resource records] which are not part of the
      authoritative data [of the zone], and are address RRs for the
      [name] servers [in subzones].  These RRs are only necessary if the
      name server's name is 'below' the cut, and are only used as part
      of a referral response."  Without glue "we could be faced with the
      situation where the NS RRs tell us that in order to learn a name
      server's address, we should contact the server using the address
      we wish to learn."  (Quoted from [RFC1034], Section 4.2.1)

      A later definition is that glue "includes any record in a zone
      file that is not properly part of that zone, including nameserver
      records of delegated sub-zones (NS records), address records that
      accompany those NS records (A, AAAA, etc), and any other stray
      data that might appear."  (Quoted from [RFC2181], Section 5.4.1)



Hoffman, et al.           Best Current Practice                [Page 24]

RFC 8499                     DNS Terminology                January 2019


      Although glue is sometimes used today with this wider definition
      in mind, the context surrounding the definition in [RFC2181]
      suggests it is intended to apply to the use of glue within the
      document itself and not necessarily beyond.

   Bailiwick:  "In-bailiwick" is a modifier to describe a name server
      whose name is either a subdomain of or (rarely) the same as the
      origin of the zone that contains the delegation to the name
      server.  In-bailiwick name servers may have glue records in their
      parent zone (using the first of the definitions of "glue records"
      in the definition above).  (The word "bailiwick" means the
      district or territory where a bailiff or policeman has
      jurisdiction.)

      "In-bailiwick" names are divided into two types of names for name
      servers: "in-domain" names and "sibling domain" names.

      *  In-domain: a modifier to describe a name server whose name is
         either subordinate to or (rarely) the same as the owner name of
         the NS resource records.  An in-domain name server name needs
         to have glue records or name resolution fails.  For example, a
         delegation for "child.example.com" may have "in-domain" name
         server name "ns.child.example.com".

      *  Sibling domain: a name server's name that is either subordinate
         to or (rarely) the same as the zone origin and not subordinate
         to or the same as the owner name of the NS resource records.
         Glue records for sibling domains are allowed, but not
         necessary.  For example, a delegation for "child.example.com"
         in "example.com" zone may have "sibling" name server name
         "ns.another.example.com".

      "Out-of-bailiwick" is the antonym of "in-bailiwick".  It is a
      modifier to describe a name server whose name is not subordinate
      to or the same as the zone origin.  Glue records for out-of-
      bailiwick name servers are useless.  The following table shows
      examples of delegation types.

    Delegation |Parent|Name Server Name  | Type
    -----------+------+------------------+-----------------------------
    com        | .    |a.gtld-servers.net|in-bailiwick / sibling domain
    net        | .    |a.gtld-servers.net|in-bailiwick / in-domain
    example.org| org  |ns.example.org    |in-bailiwick / in-domain
    example.org| org  |ns.ietf.org       |in-bailiwick / sibling domain
    example.org| org  |ns.example.com    |out-of-bailiwick
    example.jp | jp   |ns.example.jp     |in-bailiwick / in-domain
    example.jp | jp   |ns.example.ne.jp  |in-bailiwick / sibling domain
    example.jp | jp   |ns.example.com    |out-of-bailiwick



Hoffman, et al.           Best Current Practice                [Page 25]

RFC 8499                     DNS Terminology                January 2019


   Root zone:  The zone of a DNS-based tree whose apex is the zero-
      length label.  Also sometimes called "the DNS root".

   Empty non-terminals (ENT):  "Domain names that own no resource
      records but have subdomains that do."  (Quoted from [RFC4592],
      Section 2.2.2) A typical example is in SRV records: in the name
      "_sip._tcp.example.com", it is likely that "_tcp.example.com" has
      no RRsets, but that "_sip._tcp.example.com" has (at least) an SRV
      RRset.

   Delegation-centric zone:  A zone that consists mostly of delegations
      to child zones.  This term is used in contrast to a zone that
      might have some delegations to child zones but also has many data
      resource records for the zone itself and/or for child zones.  The
      term is used in [RFC4956] and [RFC5155], but it is not defined in
      either document.

   Occluded name:  "The addition of a delegation point via dynamic
      update will render all subordinate domain names to be in a limbo,
      still part of the zone but not available to the lookup process.
      The addition of a DNAME resource record has the same impact.  The
      subordinate names are said to be 'occluded'."  (Quoted from
      [RFC5936], Section 3.5)

   Fast flux DNS:  This "occurs when a domain is [found] in DNS using A
      records to multiple IP addresses, each of which has a very short
      Time-to-Live (TTL) value associated with it.  This means that the
      domain resolves to varying IP addresses over a short period of
      time."  (Quoted from [RFC6561], Section 1.1.5, with a typo
      corrected) In addition to having legitimate uses, fast flux DNS
      can used to deliver malware.  Because the addresses change so
      rapidly, it is difficult to ascertain all the hosts.  It should be
      noted that the technique also works with AAAA records, but such
      use is not frequently observed on the Internet as of this writing.

   Reverse DNS, reverse lookup:  "The process of mapping an address to a
      name is generally known as a 'reverse lookup', and the
      IN-ADDR.ARPA and IP6.ARPA zones are said to support the 'reverse
      DNS'."  (Quoted from [RFC5855], Section 1)

   Forward lookup:  "Hostname-to-address translation".  (Quoted from
      [RFC3493], Section 6)

   arpa: Address and Routing Parameter Area Domain:  "The 'arpa' domain
      was originally established as part of the initial deployment of
      the DNS, to provide a transition mechanism from the Host Tables
      that were common in the ARPANET, as well as a home for the IPv4
      reverse mapping domain.  During 2000, the abbreviation was



Hoffman, et al.           Best Current Practice                [Page 26]

RFC 8499                     DNS Terminology                January 2019


      redesignated to 'Address and Routing Parameter Area' in the hope
      of reducing confusion with the earlier network name."  (Quoted
      from [RFC3172], Section 2) .arpa is an "infrastructure domain", a
      domain whose "role is to support the operating infrastructure of
      the Internet".  (Quoted from [RFC3172], Section 2) See [RFC3172]
      for more history of this name.

   Service name:  "Service names are the unique key in the Service Name
      and Transport Protocol Port Number registry.  This unique symbolic
      name for a service may also be used for other purposes, such as in
      DNS SRV records."  (Quoted from [RFC6335], Section 5)

# /8.  Wildcards

   Wildcard:  [RFC1034] defined "wildcard", but in a way that turned out
      to be confusing to implementers.  For an extended discussion of
      wildcards, including clearer definitions, see [RFC4592].  Special
      treatment is given to RRs with owner names starting with the label
      "*".  "Such RRs are called 'wildcards'.  Wildcard RRs can be
      thought of as instructions for synthesizing RRs."  (Quoted from
      [RFC1034], Section 4.3.3)

   Asterisk label:  "The first octet is the normal label type and length
      for a 1-octet-long label, and the second octet is the ASCII
      representation [RFC20] for the '*' character.  A descriptive name
      of a label equaling that value is an 'asterisk label'."  (Quoted
      from [RFC4592], Section 2.1.1)

   Wildcard domain name:  "A 'wildcard domain name' is defined by having
      its initial (i.e., leftmost or least significant) label, in binary
      format: 0000 0001 0010 1010 (binary) = 0x01 0x2a (hexadecimal)".
      (Quoted from [RFC4592], Section 2.1.1) The second octet in this
      label is the ASCII representation for the "*" character.

   Closest encloser:  "The longest existing ancestor of a name."
      (Quoted from [RFC5155], Section 1.3) An earlier definition is "The
      node in the zone's tree of existing domain names that has the most
      labels matching the query name (consecutively, counting from the
      root label downward).  Each match is a 'label match' and the order
      of the labels is the same."  (Quoted from [RFC4592],
      Section 3.3.1)

   Closest provable encloser:  "The longest ancestor of a name that can
      be proven to exist.  Note that this is only different from the
      closest encloser in an Opt-Out zone."  (Quoted from [RFC5155],
      Section 1.3) See Section 10 for more on "opt-out".





Hoffman, et al.           Best Current Practice                [Page 27]

RFC 8499                     DNS Terminology                January 2019


   Next closer name:  "The name one label longer than the closest
      provable encloser of a name."  (Quoted from [RFC5155],
      Section 1.3)

   Source of Synthesis:  "The source of synthesis is defined in the
      context of a query process as that wildcard domain name
      immediately descending from the closest encloser, provided that
      this wildcard domain name exists.  'Immediately descending' means
      that the source of synthesis has a name of the form:
      <asterisk label>.<closest encloser>."
      (Quoted from [RFC4592], Section 3.3.1)

# /9.  Registration Model

   Registry:  The administrative operation of a zone that allows
      registration of names within that zone.  People often use this
      term to refer only to those organizations that perform
      registration in large delegation-centric zones (such as TLDs); but
      formally, whoever decides what data goes into a zone is the
      registry for that zone.  This definition of "registry" is from a
      DNS point of view; for some zones, the policies that determine
      what can go in the zone are decided by zones that are
      superordinate and not the registry operator.

   Registrant:  An individual or organization on whose behalf a name in
      a zone is registered by the registry.  In many zones, the registry
      and the registrant may be the same entity, but in TLDs they often
      are not.

   Registrar:  A service provider that acts as a go-between for
      registrants and registries.  Not all registrations require a
      registrar, though it is common to have registrars involved in
      registrations in TLDs.

   EPP:  The Extensible Provisioning Protocol (EPP), which is commonly
      used for communication of registration information between
      registries and registrars.  EPP is defined in [RFC5730].

   WHOIS:  A protocol specified in [RFC3912], often used for querying
      registry databases.  WHOIS data is frequently used to associate
      registration data (such as zone management contacts) with domain
      names.  The term "WHOIS data" is often used as a synonym for the
      registry database, even though that database may be served by
      different protocols, particularly RDAP.  The WHOIS protocol is
      also used with IP address registry data.






Hoffman, et al.           Best Current Practice                [Page 28]

RFC 8499                     DNS Terminology                January 2019


   RDAP:  The Registration Data Access Protocol, defined in [RFC7480],
      [RFC7481], [RFC7482], [RFC7483], [RFC7484], and [RFC7485].  The
      RDAP protocol and data format are meant as a replacement for
      WHOIS.

   DNS operator:  An entity responsible for running DNS servers.  For a
      zone's authoritative servers, the registrant may act as their own
      DNS operator, their registrar may do it on their behalf, or they
      may use a third-party operator.  For some zones, the registry
      function is performed by the DNS operator plus other entities who
      decide about the allowed contents of the zone.

   Public suffix:  "A domain that is controlled by a public registry."
      (Quoted from [RFC6265], Section 5.3) A common definition for this
      term is a domain under which subdomains can be registered by third
      parties and on which HTTP cookies (which are described in detail
      in [RFC6265]) should not be set.  There is no indication in a
      domain name whether it is a public suffix; that can only be
      determined by outside means.  In fact, both a domain and a
      subdomain of that domain can be public suffixes.

      There is nothing inherent in a domain name to indicate whether it
      is a public suffix.  One resource for identifying public suffixes
      is the Public Suffix List (PSL) maintained by Mozilla
      (http://publicsuffix.org/).

      For example, at the time this document is published, the "com.au"
      domain is listed as a public suffix in the PSL.  (Note that this
      example might change in the future.)

      Note that the term "public suffix" is controversial in the DNS
      community for many reasons, and it may be significantly changed in
      the future.  One example of the difficulty of calling a domain a
      public suffix is that designation can change over time as the
      registration policy for the zone changes, such as was the case
      with the "uk" TLD in 2014.

   Subordinate and Superordinate:  These terms are introduced in
      [RFC5731] for use in the registration model, but not defined
      there.  Instead, they are given in examples.  "For example, domain
      name 'example.com' has a superordinate relationship to host name
      ns1.example.com'...  For example, host ns1.example1.com is a
      subordinate host of domain example1.com, but it is a not a
      subordinate host of domain example2.com."  (Quoted from [RFC5731],
      Section 1.1) These terms are strictly ways of referring to the
      relationship standing of two domains where one is a subdomain of
      the other.




Hoffman, et al.           Best Current Practice                [Page 29]

RFC 8499                     DNS Terminology                January 2019


# /10.  General DNSSEC

   Most DNSSEC terms are defined in [RFC4033], [RFC4034], [RFC4035], and
   [RFC5155].  The terms that have caused confusion in the DNS community
   are highlighted here.

   DNSSEC-aware and DNSSEC-unaware:  These two terms, which are used in
      some RFCs, have not been formally defined.  However, Section 2 of
      [RFC4033] defines many types of resolvers and validators,
      including "non-validating security-aware stub resolver",
      "non-validating stub resolver", "security-aware name server",
      "security-aware recursive name server", "security-aware resolver",
      "security-aware stub resolver", and "security-oblivious
      'anything'".  (Note that the term "validating resolver", which is
      used in some places in DNSSEC-related documents, is also not
      defined in those RFCs, but is defined below.)

   Signed zone:  "A zone whose RRsets are signed and that contains
      properly constructed DNSKEY, Resource Record Signature (RRSIG),
      Next Secure (NSEC), and (optionally) DS records."  (Quoted from
      [RFC4033], Section 2) It has been noted in other contexts that the
      zone itself is not really signed, but all the relevant RRsets in
      the zone are signed.  Nevertheless, if a zone that should be
      signed contains any RRsets that are not signed (or opted out),
      those RRsets will be treated as bogus, so the whole zone needs to
      be handled in some way.

      It should also be noted that, since the publication of [RFC6840],
      NSEC records are no longer required for signed zones: a signed
      zone might include NSEC3 records instead.  [RFC7129] provides
      additional background commentary and some context for the NSEC and
      NSEC3 mechanisms used by DNSSEC to provide authenticated denial-
      of-existence responses.  NSEC and NSEC3 are described below.

   Unsigned zone:  Section 2 of [RFC4033] defines this as "a zone that
      is not signed".  Section 2 of [RFC4035] defines this as a "zone
      that does not include these records [properly constructed DNSKEY,
      Resource Record Signature (RRSIG), Next Secure (NSEC), and
      (optionally) DS records] according to the rules in this
      section..." There is an important note at the end of Section 5.2
      of [RFC4035] that defines an additional situation in which a zone
      is considered unsigned: "If the resolver does not support any of
      the algorithms listed in an authenticated DS RRset, then the
      resolver will not be able to verify the authentication path to the
      child zone.  In this case, the resolver SHOULD treat the child
      zone as if it were unsigned."





Hoffman, et al.           Best Current Practice                [Page 30]

RFC 8499                     DNS Terminology                January 2019


   NSEC:  "The NSEC record allows a security-aware resolver to
      authenticate a negative reply for either name or type
      non-existence with the same mechanisms used to authenticate other
      DNS replies."  (Quoted from [RFC4033], Section 3.2) In short, an
      NSEC record provides authenticated denial of existence.

      "The NSEC resource record lists two separate things: the next
      owner name (in the canonical ordering of the zone) that contains
      authoritative data or a delegation point NS RRset, and the set of
      RR types present at the NSEC RR's owner name."  (Quoted from
      Section 4 of RFC 4034)

   NSEC3:  Like the NSEC record, the NSEC3 record also provides
      authenticated denial of existence; however, NSEC3 records mitigate
      zone enumeration and support Opt-Out.  NSEC3 resource records
      require associated NSEC3PARAM resource records.  NSEC3 and
      NSEC3PARAM resource records are defined in [RFC5155].

      Note that [RFC6840] says that [RFC5155] "is now considered part of
      the DNS Security Document Family as described by Section 10 of
      [RFC4033]".  This means that some of the definitions from earlier
      RFCs that only talk about NSEC records should probably be
      considered to be talking about both NSEC and NSEC3.

   Opt-out:  "The Opt-Out Flag indicates whether this NSEC3 RR may cover
      unsigned delegations."  (Quoted from [RFC5155], Section 3.1.2.1)
      Opt-out tackles the high costs of securing a delegation to an
      insecure zone.  When using Opt-Out, names that are an insecure
      delegation (and empty non-terminals that are only derived from
      insecure delegations) don't require an NSEC3 record or its
      corresponding RRSIG records.  Opt-Out NSEC3 records are not able
      to prove or deny the existence of the insecure delegations.
      (Adapted from [RFC7129], Section 5.1)

   Insecure delegation:  "A signed name containing a delegation (NS
      RRset), but lacking a DS RRset, signifying a delegation to an
      unsigned subzone."  (Quoted from [RFC4956], Section 2)

   Zone enumeration:  "The practice of discovering the full content of a
      zone via successive queries."  (Quoted from [RFC5155],
      Section 1.3) This is also sometimes called "zone walking".  Zone
      enumeration is different from zone content guessing where the
      guesser uses a large dictionary of possible labels and sends
      successive queries for them, or matches the contents of NSEC3
      records against such a dictionary.






Hoffman, et al.           Best Current Practice                [Page 31]

RFC 8499                     DNS Terminology                January 2019


   Validation:  Validation, in the context of DNSSEC, refers to one of
      the following:

      *  Checking the validity of DNSSEC signatures,

      *  Checking the validity of DNS responses, such as those including
         authenticated denial of existence, or

      *  Building an authentication chain from a trust anchor to a DNS
         response or individual DNS RRsets in a response

      The first two definitions above consider only the validity of
      individual DNSSEC components such as the RRSIG validity or NSEC
      proof validity.  The third definition considers the components of
      the entire DNSSEC authentication chain; thus, it requires
      "configured knowledge of at least one authenticated DNSKEY or DS
      RR" (as described in [RFC4035], Section 5).

      [RFC4033], Section 2, says that a "Validating Security-Aware Stub
      Resolver... performs signature validation" and uses a trust anchor
      "as a starting point for building the authentication chain to a
      signed DNS response"; thus, it uses the first and third
      definitions above.  The process of validating an RRSIG resource
      record is described in [RFC4035], Section 5.3.

      [RFC5155] refers to validating responses throughout the document,
      in the context of hashed authenticated denial of existence; this
      uses the second definition above.

      The term "authentication" is used interchangeably with
      "validation", in the sense of the third definition above.
      [RFC4033], Section 2, describes the chain linking trust anchor to
      DNS data as the "authentication chain".  A response is considered
      to be authentic if "all RRsets in the Answer and Authority
      sections of the response [are considered] to be authentic" (Quoted
      from [RFC4035]) DNS data or responses deemed to be authentic or
      validated have a security status of "secure" ([RFC4035],
      Section 4.3; [RFC4033], Section 5).  "Authenticating both DNS keys
      and data is a matter of local policy, which may extend or even
      override the [DNSSEC] protocol extensions..." (Quoted from
      [RFC4033], Section 3.1)

      The term "verification", when used, is usually a synonym for
      "validation".







Hoffman, et al.           Best Current Practice                [Page 32]

RFC 8499                     DNS Terminology                January 2019


   Validating resolver:  A security-aware recursive name server,
      security-aware resolver, or security-aware stub resolver that is
      applying at least one of the definitions of validation (above), as
      appropriate to the resolution context.  For the same reason that
      the generic term "resolver" is sometimes ambiguous and needs to be
      evaluated in context (see Section 6), "validating resolver" is a
      context-sensitive term.

   Key signing key (KSK):  DNSSEC keys that "only sign the apex DNSKEY
      RRset in a zone."  (Quoted from [RFC6781], Section 3.1)

   Zone signing key (ZSK):  "DNSSEC keys that can be used to sign all
      the RRsets in a zone that require signatures, other than the apex
      DNSKEY RRset."  (Quoted from [RFC6781], Section 3.1) Also note
      that a ZSK is sometimes used to sign the apex DNSKEY RRset.

   Combined signing key (CSK):  "In cases where the differentiation
      between the KSK and ZSK is not made, i.e., where keys have the
      role of both KSK and ZSK, we talk about a Single-Type Signing
      Scheme."  (Quoted from [RFC6781], Section 3.1) This is sometimes
      called a "combined signing key" or "CSK".  It is operational
      practice, not protocol, that determines whether a particular key
      is a ZSK, a KSK, or a CSK.

   Secure Entry Point (SEP):  A flag in the DNSKEY RDATA that "can be
      used to distinguish between keys that are intended to be used as
      the secure entry point into the zone when building chains of
      trust, i.e., they are (to be) pointed to by parental DS RRs or
      configured as a trust anchor....  Therefore, it is suggested that
      the SEP flag be set on keys that are used as KSKs and not on keys
      that are used as ZSKs, while in those cases where a distinction
      between a KSK and ZSK is not made (i.e., for a Single-Type Signing
      Scheme), it is suggested that the SEP flag be set on all keys."
      (Quoted from [RFC6781], Section 3.2.3) Note that the SEP flag is
      only a hint, and its presence or absence may not be used to
      disqualify a given DNSKEY RR from use as a KSK or ZSK during
      validation.

      The original definition of SEPs was in [RFC3757].  That definition
      clearly indicated that the SEP was a key, not just a bit in the
      key.  The abstract of [RFC3757] says: "With the Delegation Signer
      (DS) resource record (RR), the concept of a public key acting as a
      secure entry point (SEP) has been introduced.  During exchanges of
      public keys with the parent there is a need to differentiate SEP
      keys from other public keys in the Domain Name System KEY (DNSKEY)
      resource record set.  A flag bit in the DNSKEY RR is defined to





Hoffman, et al.           Best Current Practice                [Page 33]

RFC 8499                     DNS Terminology                January 2019


      indicate that DNSKEY is to be used as a SEP."  That definition of
      the SEP as a key was made obsolete by [RFC4034], and the
      definition from [RFC6781] is consistent with [RFC4034].

   Trust anchor:  "A configured DNSKEY RR or DS RR hash of a DNSKEY RR.
      A validating security-aware resolver uses this public key or hash
      as a starting point for building the authentication chain to a
      signed DNS response.  In general, a validating resolver will have
      to obtain the initial values of its trust anchors via some secure
      or trusted means outside the DNS protocol."  (Quoted from
      [RFC4033], Section 2)

   DNSSEC Policy (DP):  A statement that "sets forth the security
      requirements and standards to be implemented for a DNSSEC-signed
      zone."  (Quoted from [RFC6841], Section 2)

   DNSSEC Practice Statement (DPS):  "A practices disclosure document
      that may support and be a supplemental document to the DNSSEC
      Policy (if such exists), and it states how the management of a
      given zone implements procedures and controls at a high level."
      (Quoted from [RFC6841], Section 2)

   Hardware security module (HSM):  A specialized piece of hardware that
      is used to create keys for signatures and to sign messages without
      ever disclosing the private key.  In DNSSEC, HSMs are often used
      to hold the private keys for KSKs and ZSKs and to create the
      signatures used in RRSIG records at periodic intervals.

   Signing software:  Authoritative DNS servers that support DNSSEC
      often contain software that facilitates the creation and
      maintenance of DNSSEC signatures in zones.  There is also stand-
      alone software that can be used to sign a zone regardless of
      whether the authoritative server itself supports signing.
      Sometimes signing software can support particular HSMs as part of
      the signing process.

# /11.  DNSSEC States

   A validating resolver can determine that a response is in one of four
   states: secure, insecure, bogus, or indeterminate.  These states are
   defined in [RFC4033] and [RFC4035], although the definitions in the
   two documents differ a bit.  This document makes no effort to
   reconcile the definitions in the two documents, and takes no position
   as to whether they need to be reconciled.







Hoffman, et al.           Best Current Practice                [Page 34]

RFC 8499                     DNS Terminology                January 2019


   Section 5 of [RFC4033] says:

      A validating resolver can determine the following 4 states:

      Secure: The validating resolver has a trust anchor, has a chain
         of trust, and is able to verify all the signatures in the
         response.

      Insecure: The validating resolver has a trust anchor, a chain
         of trust, and, at some delegation point, signed proof of the
         non-existence of a DS record.  This indicates that subsequent
         branches in the tree are provably insecure.  A validating
         resolver may have a local policy to mark parts of the domain
         space as insecure.

      Bogus: The validating resolver has a trust anchor and a secure
         delegation indicating that subsidiary data is signed, but
         the response fails to validate for some reason: missing
         signatures, expired signatures, signatures with unsupported
         algorithms, data missing that the relevant NSEC RR says
         should be present, and so forth.

      Indeterminate: There is no trust anchor that would indicate that a
         specific portion of the tree is secure.  This is the default
         operation mode.

   Section 4.3 of [RFC4035] says:

      A security-aware resolver must be able to distinguish between four
      cases:

      Secure: An RRset for which the resolver is able to build a chain
          of signed DNSKEY and DS RRs from a trusted security anchor to
          the RRset.  In this case, the RRset should be signed and is
          subject to signature validation, as described above.

      Insecure: An RRset for which the resolver knows that it has no
         chain of signed DNSKEY and DS RRs from any trusted starting
         point to the RRset.  This can occur when the target RRset lies
         in an unsigned zone or in a descendent [sic] of an unsigned
         zone.  In this case, the RRset may or may not be signed, but
         the resolver will not be able to verify the signature.

      Bogus: An RRset for which the resolver believes that it ought to
         be able to establish a chain of trust but for which it is
         unable to do so, either due to signatures that for some reason
         fail to validate or due to missing data that the relevant
         DNSSEC RRs indicate should be present.  This case may indicate



Hoffman, et al.           Best Current Practice                [Page 35]

RFC 8499                     DNS Terminology                January 2019


         an attack but may also indicate a configuration error or some
         form of data corruption.

      Indeterminate: An RRset for which the resolver is not able to
         determine whether the RRset should be signed, as the resolver
         is not able to obtain the necessary DNSSEC RRs.  This can occur
         when the security-aware resolver is not able to contact
         security-aware name servers for the relevant zones.

# /12.  Security Considerations

   These definitions do not change any security considerations for the
   DNS.

# /13.  IANA Considerations

   This document has no IANA actions.

# /14.  References

## 14.1.  Normative References

   [IANA_RootFiles]
              IANA, "Root Files",
              <https://www.iana.org/domains/root/files>.

   [RFC0882]  Mockapetris, P., "Domain names: Concepts and facilities",
              RFC 882, DOI 10.17487/RFC0882, November 1983,
              <https://www.rfc-editor.org/info/rfc882>.

   [RFC1034]  Mockapetris, P., "Domain names - concepts and facilities",
              STD 13, RFC 1034, DOI 10.17487/RFC1034, November 1987,
              <https://www.rfc-editor.org/info/rfc1034>.

   [RFC1035]  Mockapetris, P., "Domain names - implementation and
              specification", STD 13, RFC 1035, DOI 10.17487/RFC1035,
              November 1987, <https://www.rfc-editor.org/info/rfc1035>.

   [RFC1123]  Braden, R., Ed., "Requirements for Internet Hosts -
              Application and Support", STD 3, RFC 1123,
              DOI 10.17487/RFC1123, October 1989,
              <https://www.rfc-editor.org/info/rfc1123>.

   [RFC1912]  Barr, D., "Common DNS Operational and Configuration
              Errors", RFC 1912, DOI 10.17487/RFC1912, February 1996,
              <https://www.rfc-editor.org/info/rfc1912>.





Hoffman, et al.           Best Current Practice                [Page 36]

RFC 8499                     DNS Terminology                January 2019


   [RFC1996]  Vixie, P., "A Mechanism for Prompt Notification of Zone
              Changes (DNS NOTIFY)", RFC 1996, DOI 10.17487/RFC1996,
              August 1996, <https://www.rfc-editor.org/info/rfc1996>.

   [RFC2136]  Vixie, P., Ed., Thomson, S., Rekhter, Y., and J. Bound,
              "Dynamic Updates in the Domain Name System (DNS UPDATE)",
              RFC 2136, DOI 10.17487/RFC2136, April 1997,
              <https://www.rfc-editor.org/info/rfc2136>.

   [RFC2181]  Elz, R. and R. Bush, "Clarifications to the DNS
              Specification", RFC 2181, DOI 10.17487/RFC2181, July 1997,
              <https://www.rfc-editor.org/info/rfc2181>.

   [RFC2182]  Elz, R., Bush, R., Bradner, S., and M. Patton, "Selection
              and Operation of Secondary DNS Servers", BCP 16, RFC 2182,
              DOI 10.17487/RFC2182, July 1997,
              <https://www.rfc-editor.org/info/rfc2182>.

   [RFC2308]  Andrews, M., "Negative Caching of DNS Queries (DNS
              NCACHE)", RFC 2308, DOI 10.17487/RFC2308, March 1998,
              <https://www.rfc-editor.org/info/rfc2308>.

   [RFC4033]  Arends, R., Austein, R., Larson, M., Massey, D., and
              S. Rose, "DNS Security Introduction and Requirements",
              RFC 4033, DOI 10.17487/RFC4033, March 2005,
              <https://www.rfc-editor.org/info/rfc4033>.

   [RFC4034]  Arends, R., Austein, R., Larson, M., Massey, D., and
              S. Rose, "Resource Records for the DNS Security
              Extensions", RFC 4034, DOI 10.17487/RFC4034, March 2005,
              <https://www.rfc-editor.org/info/rfc4034>.

   [RFC4035]  Arends, R., Austein, R., Larson, M., Massey, D., and
              S. Rose, "Protocol Modifications for the DNS Security
              Extensions", RFC 4035, DOI 10.17487/RFC4035, March 2005,
              <https://www.rfc-editor.org/info/rfc4035>.

   [RFC4592]  Lewis, E., "The Role of Wildcards in the Domain Name
              System", RFC 4592, DOI 10.17487/RFC4592, July 2006,
              <https://www.rfc-editor.org/info/rfc4592>.

   [RFC5155]  Laurie, B., Sisson, G., Arends, R., and D. Blacka, "DNS
              Security (DNSSEC) Hashed Authenticated Denial of
              Existence", RFC 5155, DOI 10.17487/RFC5155, March 2008,
              <https://www.rfc-editor.org/info/rfc5155>.






Hoffman, et al.           Best Current Practice                [Page 37]

RFC 8499                     DNS Terminology                January 2019


   [RFC5358]  Damas, J. and F. Neves, "Preventing Use of Recursive
              Nameservers in Reflector Attacks", BCP 140, RFC 5358,
              DOI 10.17487/RFC5358, October 2008,
              <https://www.rfc-editor.org/info/rfc5358>.

   [RFC5730]  Hollenbeck, S., "Extensible Provisioning Protocol (EPP)",
              STD 69, RFC 5730, DOI 10.17487/RFC5730, August 2009,
              <https://www.rfc-editor.org/info/rfc5730>.

   [RFC5731]  Hollenbeck, S., "Extensible Provisioning Protocol (EPP)
              Domain Name Mapping", STD 69, RFC 5731,
              DOI 10.17487/RFC5731, August 2009,
              <https://www.rfc-editor.org/info/rfc5731>.

   [RFC5855]  Abley, J. and T. Manderson, "Nameservers for IPv4 and IPv6
              Reverse Zones", BCP 155, RFC 5855, DOI 10.17487/RFC5855,
              May 2010, <https://www.rfc-editor.org/info/rfc5855>.

   [RFC5936]  Lewis, E. and A. Hoenes, Ed., "DNS Zone Transfer Protocol
              (AXFR)", RFC 5936, DOI 10.17487/RFC5936, June 2010,
              <https://www.rfc-editor.org/info/rfc5936>.

   [RFC6561]  Livingood, J., Mody, N., and M. O'Reirdan,
              "Recommendations for the Remediation of Bots in ISP
              Networks", RFC 6561, DOI 10.17487/RFC6561, March 2012,
              <https://www.rfc-editor.org/info/rfc6561>.

   [RFC6781]  Kolkman, O., Mekking, W., and R. Gieben, "DNSSEC
              Operational Practices, Version 2", RFC 6781,
              DOI 10.17487/RFC6781, December 2012,
              <https://www.rfc-editor.org/info/rfc6781>.

   [RFC6840]  Weiler, S., Ed. and D. Blacka, Ed., "Clarifications and
              Implementation Notes for DNS Security (DNSSEC)", RFC 6840,
              DOI 10.17487/RFC6840, February 2013,
              <https://www.rfc-editor.org/info/rfc6840>.

   [RFC6841]  Ljunggren, F., Eklund Lowinder, AM., and T. Okubo, "A
              Framework for DNSSEC Policies and DNSSEC Practice
              Statements", RFC 6841, DOI 10.17487/RFC6841, January 2013,
              <https://www.rfc-editor.org/info/rfc6841>.

   [RFC6891]  Damas, J., Graff, M., and P. Vixie, "Extension Mechanisms
              for DNS (EDNS(0))", STD 75, RFC 6891,
              DOI 10.17487/RFC6891, April 2013,
              <https://www.rfc-editor.org/info/rfc6891>.





Hoffman, et al.           Best Current Practice                [Page 38]

RFC 8499                     DNS Terminology                January 2019


   [RFC7344]  Kumari, W., Gudmundsson, O., and G. Barwood, "Automating
              DNSSEC Delegation Trust Maintenance", RFC 7344,
              DOI 10.17487/RFC7344, September 2014,
              <https://www.rfc-editor.org/info/rfc7344>.

   [RFC7719]  Hoffman, P., Sullivan, A., and K. Fujiwara, "DNS
              Terminology", RFC 7719, DOI 10.17487/RFC7719, December
              2015, <https://www.rfc-editor.org/info/rfc7719>.

   [RFC8310]  Dickinson, S., Gillmor, D., and T. Reddy, "Usage Profiles
              for DNS over TLS and DNS over DTLS", RFC 8310,
              DOI 10.17487/RFC8310, March 2018,
              <https://www.rfc-editor.org/info/rfc8310>.

## 14.2.  Informative References

   [IANA_Resource_Registry]
              IANA, "Resource Record (RR) TYPEs",
              <https://www.iana.org/assignments/dns-parameters/>.

   [RFC819]   Su, Z. and J. Postel, "The Domain Naming Convention for
              Internet User Applications", RFC 819,
              DOI 10.17487/RFC0819, August 1982,
              <https://www.rfc-editor.org/info/rfc819>.

   [RFC952]   Harrenstien, K., Stahl, M., and E. Feinler, "DoD Internet
              host table specification", RFC 952, DOI 10.17487/RFC0952,
              October 1985, <https://www.rfc-editor.org/info/rfc952>.

   [RFC1713]  Romao, A., "Tools for DNS debugging", FYI 27, RFC 1713,
              DOI 10.17487/RFC1713, November 1994,
              <https://www.rfc-editor.org/info/rfc1713>.

   [RFC1995]  Ohta, M., "Incremental Zone Transfer in DNS", RFC 1995,
              DOI 10.17487/RFC1995, August 1996,
              <https://www.rfc-editor.org/info/rfc1995>.

   [RFC2775]  Carpenter, B., "Internet Transparency", RFC 2775,
              DOI 10.17487/RFC2775, February 2000,
              <https://www.rfc-editor.org/info/rfc2775>.

   [RFC3172]  Huston, G., Ed., "Management Guidelines & Operational
              Requirements for the Address and Routing Parameter Area
              Domain ("arpa")", BCP 52, RFC 3172, DOI 10.17487/RFC3172,
              September 2001, <https://www.rfc-editor.org/info/rfc3172>.






Hoffman, et al.           Best Current Practice                [Page 39]

RFC 8499                     DNS Terminology                January 2019


   [RFC3425]  Lawrence, D., "Obsoleting IQUERY", RFC 3425,
              DOI 10.17487/RFC3425, November 2002,
              <https://www.rfc-editor.org/info/rfc3425>.

   [RFC3493]  Gilligan, R., Thomson, S., Bound, J., McCann, J., and
              W. Stevens, "Basic Socket Interface Extensions for IPv6",
              RFC 3493, DOI 10.17487/RFC3493, February 2003,
              <https://www.rfc-editor.org/info/rfc3493>.

   [RFC3757]  Kolkman, O., Schlyter, J., and E. Lewis, "Domain Name
              System KEY (DNSKEY) Resource Record (RR) Secure Entry
              Point (SEP) Flag", RFC 3757, DOI 10.17487/RFC3757, April
              2004, <https://www.rfc-editor.org/info/rfc3757>.

   [RFC3912]  Daigle, L., "WHOIS Protocol Specification", RFC 3912,
              DOI 10.17487/RFC3912, September 2004,
              <https://www.rfc-editor.org/info/rfc3912>.

   [RFC4641]  Kolkman, O. and R. Gieben, "DNSSEC Operational Practices",
              RFC 4641, DOI 10.17487/RFC4641, September 2006,
              <https://www.rfc-editor.org/info/rfc4641>.

   [RFC4697]  Larson, M. and P. Barber, "Observed DNS Resolution
              Misbehavior", BCP 123, RFC 4697, DOI 10.17487/RFC4697,
              October 2006, <https://www.rfc-editor.org/info/rfc4697>.

   [RFC4786]  Abley, J. and K. Lindqvist, "Operation of Anycast
              Services", BCP 126, RFC 4786, DOI 10.17487/RFC4786,
              December 2006, <https://www.rfc-editor.org/info/rfc4786>.

   [RFC4956]  Arends, R., Kosters, M., and D. Blacka, "DNS Security
              (DNSSEC) Opt-In", RFC 4956, DOI 10.17487/RFC4956, July
              2007, <https://www.rfc-editor.org/info/rfc4956>.

   [RFC5625]  Bellis, R., "DNS Proxy Implementation Guidelines",
              BCP 152, RFC 5625, DOI 10.17487/RFC5625, August 2009,
              <https://www.rfc-editor.org/info/rfc5625>.

   [RFC5890]  Klensin, J., "Internationalized Domain Names for
              Applications (IDNA): Definitions and Document Framework",
              RFC 5890, DOI 10.17487/RFC5890, August 2010,
              <https://www.rfc-editor.org/info/rfc5890>.

   [RFC5891]  Klensin, J., "Internationalized Domain Names in
              Applications (IDNA): Protocol", RFC 5891,
              DOI 10.17487/RFC5891, August 2010,
              <https://www.rfc-editor.org/info/rfc5891>.




Hoffman, et al.           Best Current Practice                [Page 40]

RFC 8499                     DNS Terminology                January 2019


   [RFC5892]  Faltstrom, P., Ed., "The Unicode Code Points and
              Internationalized Domain Names for Applications (IDNA)",
              RFC 5892, DOI 10.17487/RFC5892, August 2010,
              <https://www.rfc-editor.org/info/rfc5892>.

   [RFC5893]  Alvestrand, H., Ed. and C. Karp, "Right-to-Left Scripts
              for Internationalized Domain Names for Applications
              (IDNA)", RFC 5893, DOI 10.17487/RFC5893, August 2010,
              <https://www.rfc-editor.org/info/rfc5893>.

   [RFC5894]  Klensin, J., "Internationalized Domain Names for
              Applications (IDNA): Background, Explanation, and
              Rationale", RFC 5894, DOI 10.17487/RFC5894, August 2010,
              <https://www.rfc-editor.org/info/rfc5894>.

   [RFC6055]  Thaler, D., Klensin, J., and S. Cheshire, "IAB Thoughts on
              Encodings for Internationalized Domain Names", RFC 6055,
              DOI 10.17487/RFC6055, February 2011,
              <https://www.rfc-editor.org/info/rfc6055>.

   [RFC6265]  Barth, A., "HTTP State Management Mechanism", RFC 6265,
              DOI 10.17487/RFC6265, April 2011,
              <https://www.rfc-editor.org/info/rfc6265>.

   [RFC6303]  Andrews, M., "Locally Served DNS Zones", BCP 163,
              RFC 6303, DOI 10.17487/RFC6303, July 2011,
              <https://www.rfc-editor.org/info/rfc6303>.

   [RFC6335]  Cotton, M., Eggert, L., Touch, J., Westerlund, M., and S.
              Cheshire, "Internet Assigned Numbers Authority (IANA)
              Procedures for the Management of the Service Name and
              Transport Protocol Port Number Registry", BCP 165,
              RFC 6335, DOI 10.17487/RFC6335, August 2011,
              <https://www.rfc-editor.org/info/rfc6335>.

   [RFC6365]  Hoffman, P. and J. Klensin, "Terminology Used in
              Internationalization in the IETF", BCP 166, RFC 6365,
              DOI 10.17487/RFC6365, September 2011,
              <https://www.rfc-editor.org/info/rfc6365>.

   [RFC6672]  Rose, S. and W. Wijngaards, "DNAME Redirection in the
              DNS", RFC 6672, DOI 10.17487/RFC6672, June 2012,
              <https://www.rfc-editor.org/info/rfc6672>.

   [RFC6762]  Cheshire, S. and M. Krochmal, "Multicast DNS", RFC 6762,
              DOI 10.17487/RFC6762, February 2013,
              <https://www.rfc-editor.org/info/rfc6762>.




Hoffman, et al.           Best Current Practice                [Page 41]

RFC 8499                     DNS Terminology                January 2019


   [RFC7129]  Gieben, R. and W. Mekking, "Authenticated Denial of
              Existence in the DNS", RFC 7129, DOI 10.17487/RFC7129,
              February 2014, <https://www.rfc-editor.org/info/rfc7129>.

   [RFC7480]  Newton, A., Ellacott, B., and N. Kong, "HTTP Usage in the
              Registration Data Access Protocol (RDAP)", RFC 7480,
              DOI 10.17487/RFC7480, March 2015,
              <https://www.rfc-editor.org/info/rfc7480>.

   [RFC7481]  Hollenbeck, S. and N. Kong, "Security Services for the
              Registration Data Access Protocol (RDAP)", RFC 7481,
              DOI 10.17487/RFC7481, March 2015,
              <https://www.rfc-editor.org/info/rfc7481>.

   [RFC7482]  Newton, A. and S. Hollenbeck, "Registration Data Access
              Protocol (RDAP) Query Format", RFC 7482,
              DOI 10.17487/RFC7482, March 2015,
              <https://www.rfc-editor.org/info/rfc7482>.

   [RFC7483]  Newton, A. and S. Hollenbeck, "JSON Responses for the
              Registration Data Access Protocol (RDAP)", RFC 7483,
              DOI 10.17487/RFC7483, March 2015,
              <https://www.rfc-editor.org/info/rfc7483>.

   [RFC7484]  Blanchet, M., "Finding the Authoritative Registration Data
              (RDAP) Service", RFC 7484, DOI 10.17487/RFC7484, March
              2015, <https://www.rfc-editor.org/info/rfc7484>.

   [RFC7485]  Zhou, L., Kong, N., Shen, S., Sheng, S., and A. Servin,
              "Inventory and Analysis of WHOIS Registration Objects",
              RFC 7485, DOI 10.17487/RFC7485, March 2015,
              <https://www.rfc-editor.org/info/rfc7485>.

   [RFC7793]  Andrews, M., "Adding 100.64.0.0/10 Prefixes to the IPv4
              Locally-Served DNS Zones Registry", BCP 163, RFC 7793,
              DOI 10.17487/RFC7793, May 2016,
              <https://www.rfc-editor.org/info/rfc7793>.

   [RFC7858]  Hu, Z., Zhu, L., Heidemann, J., Mankin, A., Wessels, D.,
              and P. Hoffman, "Specification for DNS over Transport
              Layer Security (TLS)", RFC 7858, DOI 10.17487/RFC7858, May
              2016, <https://www.rfc-editor.org/info/rfc7858>.

   [RFC8094]  Reddy, T., Wing, D., and P. Patil, "DNS over Datagram
              Transport Layer Security (DTLS)", RFC 8094,
              DOI 10.17487/RFC8094, February 2017,
              <https://www.rfc-editor.org/info/rfc8094>.




Hoffman, et al.           Best Current Practice                [Page 42]

RFC 8499                     DNS Terminology                January 2019


   [RFC8109]  Koch, P., Larson, M., and P. Hoffman, "Initializing a DNS
              Resolver with Priming Queries", BCP 209, RFC 8109,
              DOI 10.17487/RFC8109, March 2017,
              <https://www.rfc-editor.org/info/rfc8109>.

   [RFC8484]  Hoffman, P. and P. McManus, "DNS Queries over HTTPS
              (DoH)", RFC 8484, DOI 10.17487/RFC8484, October 2018,
              <https://www.rfc-editor.org/info/rfc8484>.

   [RSSAC026] Root Server System Advisory Committee (RSSAC), "RSSAC
              Lexicon", 2017,
              <https://www.icann.org/en/system/files/files/
              rssac-026-14mar17-en.pdf>.






































Hoffman, et al.           Best Current Practice                [Page 43]

RFC 8499                     DNS Terminology                January 2019


# /Appendix A.  Definitions Updated by This Document

   The following definitions from RFCs are updated by this document:

   o  Forwarder in [RFC2308]

   o  QNAME in [RFC2308]

   o  Secure Entry Point (SEP) in [RFC3757]; note, however, that this
      RFC is already obsolete (see [RFC4033], [RFC4034], [RFC4035]).

# /Appendix B.  Definitions First Defined in This Document

   The following definitions are first defined in this document:

   o  "Alias" in Section 2

   o  "Apex" in Section 7

   o  "arpa" in Section 7

   o  "Bailiwick" in Section 7

   o  "Class independent" in Section 5

   o  "Delegation-centric zone" in Section 7

   o  "Delegation" in Section 7

   o  "DNS operator" in Section 9

   o  "DNSSEC-aware" in Section 10

   o  "DNSSEC-unaware" in Section 10

   o  "Forwarding" in Section 6

   o  "Full resolver" in Section 6

   o  "Fully-qualified domain name" in Section 2

   o  "Global DNS" in Section 2

   o  "Hardware Security Module (HSM)" in Section 10

   o  "Host name" in Section 2

   o  "IDN" in Section 2



Hoffman, et al.           Best Current Practice                [Page 44]

RFC 8499                     DNS Terminology                January 2019


   o  "In-bailiwick" in Section 7

   o  "Iterative resolution" in Section 6

   o  "Label" in Section 2

   o  "Locally served DNS zone" in Section 2

   o  "Naming system" in Section 2

   o  "Negative response" in Section 3

   o  "Non-recursive query" in Section 6

   o  "Open resolver" in Section 6

   o  "Out-of-bailiwick" in Section 7

   o  "Passive DNS" in Section 6

   o  "Policy-implementing resolver" in Section 6

   o  "Presentation format" in Section 5

   o  "Priming" in Section 6

   o  "Private DNS" in Section 2

   o  "Recursive resolver" in Section 6

   o  "Referrals" in Section 4

   o  "Registrant" in Section 9

   o  "Registrar" in Section 9

   o  "Registry" in Section 9

   o  "Root zone" in Section 7

   o  "Secure Entry Point (SEP)" in Section 10

   o  "Signing software" in Section 10

   o  "Split DNS" in Section 6

   o  "Stub resolver" in Section 6




Hoffman, et al.           Best Current Practice                [Page 45]

RFC 8499                     DNS Terminology                January 2019


   o  "Subordinate" in Section 8

   o  "Superordinate" in Section 8

   o  "TLD" in Section 2

   o  "Validating resolver" in Section 10

   o  "Validation" in Section 10

   o  "View" in Section 6

   o  "Zone transfer" in Section 6

Index

   A
      Address records  16
      Alias  9
      Anycast  22
      Apex  23
      Asterisk label  27
      Authoritative data  24
      Authoritative server  19
      Authoritative-only server  19
      arpa: Address and Routing Parameter Area Domain  26

   C
      CNAME  10
      Canonical name  9
      Child  22
      Class  11
      Class independent  16
      Closest encloser  27
      Closest provable encloser  27
      Combined signing key (CSK)  33

   D
      DNS operator  29
      DNSSEC Policy (DP)  34
      DNSSEC Practice Statement (DPS)  34
      DNSSEC-aware and DNSSEC-unaware  30
      Delegation  24
      Delegation-centric zone  26
      Domain name  5






Hoffman, et al.           Best Current Practice                [Page 46]

RFC 8499                     DNS Terminology                January 2019


   E
      EDNS  14
      EPP  28
      Empty non-terminals (ENT)  26

   F
      FORMERR  10
      Fast flux DNS  26
      Forward lookup  26
      Forwarder  21
      Forwarding  20
      Full resolver  18
      Full-service resolver  18
      Fully-qualified domain name (FQDN)  8

   G
      Global DNS  5
      Glue records  24

   H
      Hardware security module (HSM)  34
      Hidden master  20
      Host name  8

   I
      IDN  9
      In-bailiwick  25
      Insecure delegation  31
      Instance  22
      Internationalized Domain Name  9
      Iterative mode  17
      Iterative resolution  18

   K
      Key signing key (KSK)  33

   L
      Label  5
      Lame delegation  24
      Locally served DNS zone  8

   M
      Master file  14
      Master server  19
      Multicast DNS  7
      mDNS  7





Hoffman, et al.           Best Current Practice                [Page 47]

RFC 8499                     DNS Terminology                January 2019


   N
      NODATA  10
      NOERROR  10
      NOTIMP  10
      NS  19
      NSEC  31
      NSEC3  31
      NXDOMAIN  10
      Naming system  4
      Negative caching  19
      Negative response  11
      Next closer name  28
      Non-recursive query  18

   O
      OPT  14
      Occluded name  26
      Open resolver  21
      Opt-out  31
      Origin  23
      Out-of-bailiwick  25
      Owner  15

   P
      Parent  23
      Passive DNS  22
      Policy-implementing resolver  21
      Presentation format  14
      Primary master  20
      Primary server  20
      Priming  18
      Privacy-enabling DNS server  22
      Private DNS  7
      Public suffix  29

   Q
      QNAME  11

   R
      RDAP  29
      REFUSED  10
      RR  14
      RRset  14
      Recursive mode  17
      Recursive query  18
      Recursive resolver  17
      Referrals  13
      Registrant  28



Hoffman, et al.           Best Current Practice                [Page 48]

RFC 8499                     DNS Terminology                January 2019


      Registrar  28
      Registry  28
      Resolver  16
      Reverse DNS, reverse lookup  26
      Root hints  18
      Root zone  26

   S
      SERVFAIL  10
      SOA  14
      SOA field names  14
      Secondary server  19
      Secure Entry Point (SEP)  33
      Service name  27
      Signed zone  30
      Signing software  34
      Slave server  19
      Source of Synthesis  28
      Split DNS  21
      Split-horizon DNS  21
      Stealth server  20
      Stub resolver  17
      Subdomain  9
      Subordinate  29
      Superordinate  29

   T
      TLD  9
      TTL  15
      Trust anchor  34

   U
      Unsigned zone  30

   V
      Validating resolver  33
      Validation  32
      View  21

   W
      WHOIS  28
      Wildcard  27
      Wildcard domain name  27








Hoffman, et al.           Best Current Practice                [Page 49]

RFC 8499                     DNS Terminology                January 2019


   Z
      Zone  22
      Zone cut  23
      Zone enumeration  31
      Zone signing key (ZSK)  33
      Zone transfer  19

# /Acknowledgements

   The following is the Acknowledgements section of RFC 7719.

      The authors gratefully acknowledge all of the authors of DNS-
      related RFCs that proceed this one.  Comments from Tony Finch,
      Stephane Bortzmeyer, Niall O'Reilly, Colm MacCarthaigh, Ray
      Bellis, John Kristoff, Robert Edmonds, Paul Wouters, Shumon Huque,
      Paul Ebersman, David Lawrence, Matthijs Mekking, Casey Deccio, Bob
      Harold, Ed Lewis, John Klensin, David Black, and many others in
      the DNSOP Working Group helped shape RFC 7719.

   Most of the major changes between RFC 7719 and this document came
   from active discussion on the DNSOP WG.  Specific people who
   contributed material to this document include: Bob Harold, Dick
   Franks, Evan Hunt, John Dickinson, Mark Andrews, Martin Hoffmann,
   Paul Vixie, Peter Koch, Duane Wessels, Allison Mankin, Giovane Moura,
   Roni Even, Dan Romascanu, and Vladmir Cunat.

# /Authors' Addresses

   Paul Hoffman
   ICANN

   Email: paul.hoffman@icann.org


   Andrew Sullivan

   Email: ajs@anvilwalrusden.com


   Kazunori Fujiwara
   Japan Registry Services Co., Ltd.
   Chiyoda First Bldg. East 13F, 3-8-1 Nishi-Kanda
   Chiyoda-ku, Tokyo  101-0065
   Japan

   Phone: +81 3 5215 8451
   Email: fujiwara@jprs.co.jp




Hoffman, et al.           Best Current Practice                [Page 50]