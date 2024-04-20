.. container:: head

   |W3C|

   https://www.w3.org/TR/xml11/


/Extensible Markup Language (XML) 1.1 (Second Edition)
======================================================

   .. .. rubric:: Extensible Markup Language (XML) 1.1 (Second Edition)
      :name: extensible-markup-language-xml-1.1-second-edition


/W3C Recommendation 16 August 2006, edited in place 29
======================================================

   .. .. rubric:: W3C Recommendation 16 August 2006, edited in place 29
      September 2006
      :name: w3c-recommendation-16-august-2006-edited-in-place-29-september-2006

   This version:
      `http://www.w3.org/TR/2006/REC-xml11-20060816 <https://www.w3.org/TR/2006/REC-xml11-20060816>`__
   Latest version:
      `http://www.w3.org/TR/xml11 <https://www.w3.org/TR/xml11>`__
   Previous version:
      `http://www.w3.org/TR/2006/PER-xml11-20060614 <https://www.w3.org/TR/2006/PER-xml11-20060614>`__
   Editors:
      Tim Bray, Textuality and Netscape
      `<tbray@textuality.com> <mailto:tbray@textuality.com>`__
      Jean Paoli, Microsoft
      `<jeanpa@microsoft.com> <mailto:jeanpa@microsoft.com>`__
      C. M. Sperberg-McQueen, W3C
      `<cmsmcq@w3.org> <mailto:cmsmcq@w3.org>`__
      Eve Maler, Sun Microsystems, Inc.
      `<eve.maler@east.sun.com> <mailto:elm@east.sun.com>`__
      François Yergeau
      John Cowan `<cowan@ccil.org> <mailto:cowan@ccil.org>`__

   Please refer to the
   `errata <https://www.w3.org/XML/xml-V11-2e-errata>`__ for this
   document, which may include some normative corrections.

   The `previous errata <https://www.w3.org/XML/xml-V11-1e-errata>`__
   for this document, are also available.

   See also
   `translations <https://www.w3.org/2003/03/Translations/byTechnology?technology=xml11>`__.

   This document is also available in these non-normative formats:
   `XML <REC-xml11-20060816.xml>`__ and `XHTML with color-coded revision
   indicators <REC-xml11-20060816-review.html>`__.

   `Copyright <https://www.w3.org/Consortium/Legal/ipr-notice#Copyright>`__ © 2006 `W3C <https://www.w3.org/>`__ :sup:`®`
   (`MIT <http://www.csail.mit.edu/>`__,
   `ERCIM <http://www.ercim.org/>`__,
   `Keio <http://www.keio.ac.jp/>`__), All Rights Reserved. W3C
   `liability <https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer>`__,
   `trademark <https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks>`__
   and `document
   use <https://www.w3.org/Consortium/Legal/copyright-documents>`__
   rules apply.

--------------

.. container::


/Abstract
=========

   .. .. rubric:: Abstract
      :name: abstract

   The Extensible Markup Language (XML) is a subset of SGML that is
   completely described in this document. Its goal is to enable generic
   SGML to be served, received, and processed on the Web in the way that
   is now possible with HTML. XML has been designed for ease of
   implementation and for interoperability with both SGML and HTML.

.. container::


/Status of this Document
========================

   .. .. rubric:: Status of this Document
      :name: status-of-this-document

   *This section describes the status of this document at the time of
   its publication. Other documents may supersede this document. A list
   of current W3C publications and the latest revision of this technical
   report can be found in the* `W3C technical reports
   index <https://www.w3.org/TR/>`__ *at http://www.w3.org/TR/.*

   This document specifies a syntax created by subsetting an existing,
   widely used international text processing standard (Standard
   Generalized Markup Language, ISO 8879:1986(E) as amended and
   corrected) for use on the World Wide Web. It is a product of the `XML
   Core Working Group <https://www.w3.org/XML/Core/>`__ as part of the
   `XML Activity <https://www.w3.org/XML/Activity>`__.

   On 29 September 2006 this document was edited in place to remove a
   number of spurious and potentially misleading spaces.

   The English version of this specification is the only normative
   version. However, for translations of this document, see
   `http://www.w3.org/2003/03/Translations/byTechnology?technology=xml11 <https://www.w3.org/2003/03/Translations/byTechnology?technology=xml11>`__.

   This document is a `W3C
   Recommendation <https://www.w3.org/2005/10/Process-20051014/tr.html#q74>`__.
   This second edition is *not* a new version of XML. As a convenience
   to readers, it incorporates the changes dictated by the accumulated
   errata (available at
   `http://www.w3.org/XML/xml-V11-1e-errata <https://www.w3.org/XML/xml-V11-1e-errata>`__)
   to the `First Edition of XML 1.1, dated 4 February
   2004 <https://www.w3.org/TR/2004/REC-xml11-20040204/>`__. In
   addition, the markup introduced to clarify when prescriptive keywords
   are used in the formal sense defined in `[IETF RFC
   2119] <#rfc2119>`__, has been modified to better match the intent of
   `[IETF RFC 2119] <#rfc2119>`__. This edition supersedes the previous
   `W3C Recommendation of 4 February
   2004 <https://www.w3.org/TR/2004/REC-xml11-20040204>`__.

   Please report errors in this document to the public xml-editor@w3.org
   mailing list;
   `archives <http://lists.w3.org/Archives/Public/xml-editor/>`__ are
   available. For the convenience of readers, an `XHTML version with
   color-coded revision indicators <REC-xml11-20060816-review.html>`__
   is also provided; this version highlights each change due to an
   erratum published in the 
   `errata list <https://www.w3.org/XML/xml-V11-1e-errata>`__, together with a
   link to the particular erratum in that list. Most of the errata in
   the list provide a rationale for the change. The errata list for this
   second edition is available at
   `http://www.w3.org/XML/xml-V11-2e-errata <https://www.w3.org/XML/xml-V11-2e-errata>`__.

   An implementation report is available at
   `http://www.w3.org/XML/2006/06/xml11-2e-implementation.html <https://www.w3.org/XML/2006/06/xml11-2e-implementation.html>`__.
   A `Test Suite <https://www.w3.org/XML/Test/>`__ is maintained to help
   assessing conformance to this specification.

   This document has been reviewed by W3C Members, by software
   developers, and by other W3C groups and interested parties, and is
   endorsed by the Director as a W3C Recommendation. It is a stable
   document and may be used as reference material or cited from another
   document. W3C's role in making the Recommendation is to draw
   attention to the specification and to promote its widespread
   deployment. This enhances the functionality and interoperability of
   the Web.

   This document is governed by the 
   `24 January 2002 CPP <https://www.w3.org/TR/2002/NOTE-patent-practice-20020124>`__ 
   as amended by the `W3C Patent Policy Transition Procedure <https://www.w3.org/2004/02/05-pp-transition>`__.
   W3C maintains a `public list of any patent disclosures <https://www.w3.org/2002/08/xmlcore-IPR-statements>`__
   made in connection with the deliverables of the group; that page also
   includes instructions for disclosing a patent. An individual who has
   actual knowledge of a patent which the individual believes contains
   `Essential Claim(s) <https://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential>`__
   must disclose the information in accordance with 
   `section 6 of the W3C Patent Policy <https://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure>`__.

.. container:: toc


/Table of Contents
==================

   .. .. rubric:: Table of Contents
      :name: table-of-contents

   | 1 `Introduction <#sec-intro>`__
   |     1.1 `Origin and Goals <#sec-origin-goals>`__
   |     1.2 `Terminology <#sec-terminology>`__
   |     1.3 `Rationale and list of changes for XML 1.1 <#sec-xml11>`__
   | 2 `Documents <#sec-documents>`__
   |     2.1 `Well-Formed XML Documents <#sec-well-formed>`__
   |     2.2 `Characters <#charsets>`__
   |     2.3 `Common Syntactic Constructs <#sec-common-syn>`__
   |     2.4 `Character Data and Markup <#syntax>`__
   |     2.5 `Comments <#sec-comments>`__
   |     2.6 `Processing Instructions <#sec-pi>`__
   |     2.7 `CDATA Sections <#sec-cdata-sect>`__
   |     2.8 `Prolog and Document Type Declaration <#sec-prolog-dtd>`__
   |     2.9 `Standalone Document Declaration <#sec-rmd>`__
   |     2.10 `White Space Handling <#sec-white-space>`__
   |     2.11 `End-of-Line Handling <#sec-line-ends>`__
   |     2.12 `Language Identification <#sec-lang-tag>`__
   |     2.13 `Normalization Checking <#sec-normalization-checking>`__
   | 3 `Logical Structures <#sec-logical-struct>`__
   |     3.1 `Start-Tags, End-Tags, and Empty-Element Tags <#sec-starttags>`__
   |     3.2 `Element Type Declarations <#elemdecls>`__
   |         3.2.1 `Element Content <#sec-element-content>`__
   |         3.2.2 `Mixed Content <#sec-mixed-content>`__
   |     3.3 `Attribute-List Declarations <#attdecls>`__
   |         3.3.1 `Attribute Types <#sec-attribute-types>`__
   |         3.3.2 `Attribute Defaults <#sec-attr-defaults>`__
   |         3.3.3 `Attribute-Value Normalization <#AVNormalize>`__
   |     3.4 `Conditional Sections <#sec-condition-sect>`__
   | 4 `Physical Structures <#sec-physical-struct>`__
   |     4.1 `Character and Entity References <#sec-references>`__
   |     4.2 `Entity Declarations <#sec-entity-decl>`__
   |         4.2.1 `Internal Entities <#sec-internal-ent>`__
   |         4.2.2 `External Entities <#sec-external-ent>`__
   |     4.3 `Parsed Entities <#TextEntities>`__
   |         4.3.1 `The Text Declaration <#sec-TextDecl>`__
   |         4.3.2 `Well-Formed Parsed Entities <#wf-entities>`__
   |         4.3.3 `Character Encoding in Entities <#charencoding>`__
   |         4.3.4 `Version Information in Entities <#sec-version-info>`__
   |     4.4 `XML Processor Treatment of Entities and References <#entproc>`__
   |         4.4.1 `Not Recognized <#not-recognized>`__
   |         4.4.2 `Included <#included>`__
   |         4.4.3 `Included If Validating <#include-if-valid>`__
   |         4.4.4 `Forbidden <#forbidden>`__
   |         4.4.5 `Included in Literal <#inliteral>`__
   |         4.4.6 `Notify <#notify>`__
   |         4.4.7 `Bypassed <#bypass>`__
   |         4.4.8 `Included as PE <#as-PE>`__
   |         4.4.9 `Error <#error>`__
   |     4.5 `Construction of Entity Replacement Text <#intern-replacement>`__
   |     4.6 `Predefined Entities <#sec-predefined-ent>`__
   |     4.7 `Notation Declarations <#Notations>`__
   |     4.8 `Document Entity <#sec-doc-entity>`__
   | 5 `Conformance <#sec-conformance>`__
   |     5.1 `Validating and Non-Validating Processors <#proc-types>`__
   |     5.2 `Using XML Processors <#safe-behavior>`__
   | 6 `Notation <#sec-notation>`__


/Appendices
===========

   .. .. rubric:: Appendices
      :name: appendices

   | A `References <#sec-bibliography>`__
   |     A.1 `Normative References <#sec-existing-stds>`__
   |     A.2 `Other References <#null>`__
   | B `Definitions for Character Normalization <#sec-CharNorm>`__
   | C `Expansion of Entity and Character References <#sec-entexpand>`__ (Non-Normative)
   | D `Deterministic Content Models <#determinism>`__ (Non-Normative)
   | E `Autodetection of Character Encodings <#sec-guessing>`__ (Non-Normative)
   |     E.1 `Detection Without External Encoding Information <#sec-guessing-no-ext-info>`__
   |     E.2 `Priorities in the Presence of External Encoding Information <#sec-guessing-with-ext-info>`__
   | F `W3C XML Working Group <#sec-xml-wg>`__ (Non-Normative)
   | G `W3C XML Core Working Group <#sec-core-wg>`__ (Non-Normative)
   | H `Production Notes <#prod-notes>`__ (Non-Normative)
   | I `Suggestions for XML Names <#sec-suggested-names>`__ (Non-Normative)

--------------

.. container:: body

   .. container:: div1


/1 Introduction
===============

      .. .. rubric:: 1 Introduction
         :name: introduction

      Extensible Markup Language, abbreviated XML, describes a class of
      data objects called `XML documents <#dt-xml-doc>`__ and partially
      describes the behavior of computer programs which process them.
      XML is an application profile or restricted form of SGML, the
      Standard Generalized Markup Language `[ISO 8879] <#ISO8879>`__. By
      construction, XML documents are conforming SGML documents.

      XML documents are made up of storage units called
      `entities <#dt-entity>`__, which contain either parsed or unparsed
      data. Parsed data is made up of `characters <#dt-character>`__,
      some of which form `character data <#dt-chardata>`__, and some of
      which form `markup <#dt-markup>`__. Markup encodes a description
      of the document's storage layout and logical structure. XML
      provides a mechanism to impose constraints on the storage layout
      and logical structure.

      [Definition: A software module called an **XML processor** is used
      to read XML documents and provide access to their content and
      structure.] [Definition: It is assumed that an XML processor is
      doing its work on behalf of another module, called the
      **application**.] This specification describes the required
      behavior of an XML processor in terms of how it must read XML data
      and the information it must provide to the application.

      .. container:: div2


/1.1 Origin and Goals
=====================

         .. .. rubric:: 1.1 Origin and Goals
            :name: origin-and-goals

         XML was developed by an XML Working Group (originally known as
         the SGML Editorial Review Board) formed under the auspices of
         the World Wide Web Consortium (W3C) in 1996. It was chaired by
         Jon Bosak of Sun Microsystems with the active participation of
         an XML Special Interest Group (previously known as the SGML
         Working Group) also organized by the W3C. The membership of the
         XML Working Group is given in an appendix. Dan Connolly served
         as the Working Group's contact with the W3C.

         The design goals for XML are:

         #. XML shall be straightforwardly usable over the Internet.

         #. XML shall support a wide variety of applications.

         #. XML shall be compatible with SGML.

         #. It shall be easy to write programs which process XML
            documents.

         #. The number of optional features in XML is to be kept to the
            absolute minimum, ideally zero.

         #. XML documents should be human-legible and reasonably clear.

         #. The XML design should be prepared quickly.

         #. The design of XML shall be formal and concise.

         #. XML documents shall be easy to create.

         #. Terseness in XML markup is of minimal importance.

         This specification, together with associated standards (Unicode
         `[Unicode] <#Unicode>`__ and ISO/IEC 10646 `[ISO/IEC
         10646] <#ISO10646>`__ for characters, Internet RFC 3066 `[IETF
         RFC 3066] <#RFC1766>`__ for language identification tags, ISO
         639 `[ISO 639] <#ISO639>`__ for language name codes, and ISO
         3166 `[ISO 3166] <#ISO3166>`__ for country name codes),
         provides all the information necessary to understand XML
         Version 1.1 and construct computer programs to process it.

         This version of the XML specification may be distributed
         freely, as long as all text and legal notices remain intact.

      .. container:: div2


/1.2 Terminology
================

         .. .. rubric:: 1.2 Terminology
            :name: terminology

         The terminology used to describe XML documents is defined in
         the body of this specification. The key words *MUST*, *MUST
         NOT*, *REQUIRED*, *SHALL*, *SHALL NOT*, *SHOULD*, *SHOULD NOT*,
         *RECOMMENDED*, *MAY*, and *OPTIONAL*, when *EMPHASIZED*, are to
         be interpreted as described in `[IETF RFC 2119] <#rfc2119>`__.
         In addition, the terms defined in the following list are used
         in building those definitions and in describing the actions of
         an XML processor:

         error
            [Definition: A violation of the rules of this specification;
            results are undefined. Unless otherwise specified, failure
            to observe a prescription of this specification indicated by
            one of the keywords *MUST*, *REQUIRED*, *MUST NOT*, *SHALL*
            and *SHALL NOT* is an error. Conforming software *MAY*
            detect and report an error and *MAY* recover from it.]

         fatal error
            [Definition: An error which a conforming `XML
            processor <#dt-xml-proc>`__ *MUST* detect and report to the
            application. After encountering a fatal error, the processor
            *MAY* continue processing the data to search for further
            errors and *MAY* report such errors to the application. In
            order to support correction of errors, the processor *MAY*
            make unprocessed data from the document (with intermingled
            character data and markup) available to the application.
            Once a fatal error is detected, however, the processor *MUST
            NOT* continue normal processing (i.e., it *MUST NOT*
            continue to pass character data and information about the
            document's logical structure to the application in the
            normal way).]

         at user option
            [Definition: Conforming software *MAY* or *MUST* (depending
            on the modal verb in the sentence) behave as described; if
            it does, it *MUST* provide users a means to enable or
            disable the behavior described.]

         validity constraint
            [Definition: A rule which applies to all
            `valid <#dt-valid>`__ XML documents. Violations of validity
            constraints are errors; they *MUST*, at user option, be
            reported by `validating XML processors <#dt-validating>`__.]

         well-formedness constraint
            [Definition: A rule which applies to all
            `well-formed <#dt-wellformed>`__ XML documents. Violations
            of well-formedness constraints are `fatal
            errors <#dt-fatal>`__.]

         match
            [Definition: (Of strings or names:) Two strings or names
            being compared are identical. Characters with multiple
            possible representations in Unicode (e.g. characters with
            both precomposed and base+diacritic forms) match only if
            they have the same representation in both strings. No case
            folding is performed. (Of strings and rules in the grammar:)
            A string matches a grammatical production if it belongs to
            the language generated by that production. (Of content and
            content models:) An element matches its declaration when it
            conforms in the fashion described in the constraint **[VC:**
            `Element Valid <#elementvalid>`__ **]**.]

         for compatibility
            [Definition: Marks a sentence describing a feature of XML
            included solely to ensure that XML remains compatible with
            SGML.]

         for interoperability
            [Definition: Marks a sentence describing a non-binding
            recommendation included to increase the chances that XML
            documents can be processed by the existing installed base of
            SGML processors which predate the WebSGML Adaptations Annex
            to ISO 8879.]

      .. container:: div2


/1.3 Rationale and list of changes for XML 1.1
==============================================

         .. .. rubric:: 1.3 Rationale and list of changes for XML 1.1
            :name: rationale-and-list-of-changes-for-xml-1.1

         The W3C's XML 1.0 Recommendation was first issued in 1998, and
         despite the issuance of many errata culminating in a Third
         Edition of 2004, has remained (by intention) unchanged with
         respect to what is well-formed XML and what is not. This
         stability has been extremely useful for interoperability.
         However, the Unicode Standard on which XML 1.0 relies for
         character specifications has not remained static, evolving from
         version 2.0 to version 4.0 and beyond. Characters not present
         in Unicode 2.0 may already be used in XML 1.0 character data.
         However, they are not allowed in XML names such as element type
         names, attribute names, enumerated attribute values, processing
         instruction targets, and so on. In addition, some characters
         that should have been permitted in XML names were not, due to
         oversights and inconsistencies in Unicode 2.0.

         The overall philosophy of names has changed since XML 1.0.
         Whereas XML 1.0 provided a rigid definition of names, wherein
         everything that was not permitted was forbidden, XML 1.1 names
         are designed so that everything that is not forbidden (for a
         specific reason) is permitted. Since Unicode will continue to
         grow past version 4.0, further changes to XML can be avoided by
         allowing almost any character, including those not yet
         assigned, in names.

         In addition, XML 1.0 attempts to adapt to the line-end
         conventions of various modern operating systems, but
         discriminates against the conventions used on IBM and
         IBM-compatible mainframes. As a result, XML documents on
         mainframes are not plain text files according to the local
         conventions. XML 1.0 documents generated on mainframes must
         either violate the local line-end conventions, or employ
         otherwise unnecessary translation phases before parsing and
         after generation. Allowing straightforward interoperability is
         particularly important when data stores are shared between
         mainframe and non-mainframe systems (as opposed to being copied
         from one to the other). Therefore XML 1.1 adds NEL (#x85) to
         the list of line-end characters. For completeness, the Unicode
         line separator character, #x2028, is also supported.

         Finally, there is considerable demand to define a standard
         representation of arbitrary Unicode characters in XML
         documents. Therefore, XML 1.1 allows the use of character
         references to the control characters #x1 through #x1F, most of
         which are forbidden in XML 1.0. For reasons of robustness,
         however, these characters still cannot be used directly in
         documents. In order to improve the robustness of character
         encoding detection, the additional control characters #x7F
         through #x9F, which were freely allowed in XML 1.0 documents,
         now must also appear only as character references. (Whitespace
         characters are of course exempt.) The minor sacrifice of
         backward compatibility is considered not significant. Due to
         potential problems with APIs, #x0 is still forbidden both
         directly and as a character reference.

         Finally, XML 1.1 defines a set of constraints called "full
         normalization" on XML documents, which document creators
         *SHOULD* adhere to, and document processors *SHOULD* verify.
         Using fully normalized documents ensures that identity
         comparisons of names, attribute values, and character content
         can be made correctly by simple binary comparison of Unicode
         strings.

         A new XML version, rather than a set of errata to XML 1.0, is
         being created because the changes affect the definition of
         well-formed documents. XML 1.0 processors must continue to
         reject documents that contain new characters in XML names, new
         line-end conventions, and references to control characters. The
         distinction between XML 1.0 and XML 1.1 documents is indicated
         by the version number information in the XML declaration at the
         start of each document.

   .. container:: div1


/2 Documents
============

      .. .. rubric:: 2 Documents
         :name: documents

      [Definition: A data object is an **XML document** if it is
      `well-formed <#dt-wellformed>`__, as defined in this
      specification. In addition, the XML document is
      `valid <#dt-valid>`__ if it meets certain further constraints.]

      Each XML document has both a logical and a physical structure.
      Physically, the document is composed of units called
      `entities <#dt-entity>`__. An entity may `refer <#dt-entref>`__ to
      other entities to cause their inclusion in the document. A
      document begins in a "root" or `document entity <#dt-docent>`__.
      Logically, the document is composed of declarations, elements,
      comments, character references, and processing instructions, all
      of which are indicated in the document by explicit markup. The
      logical and physical structures *MUST* nest properly, as described
      in `4.3.2 Well-Formed Parsed Entities <#wf-entities>`__.

      .. container:: div2


/2.1 Well-Formed XML Documents
==============================

         .. .. rubric:: 2.1 Well-Formed XML Documents
            :name: well-formed-xml-documents

         [Definition: A textual object is a **well-formed** XML document
         if:]

         #. Taken as a whole, it matches the production labeled
            `document <#NT-document>`__.

         #. It meets all the well-formedness constraints given in this
            specification.

         #. Each of the `parsed entities <#dt-parsedent>`__ which is
            referenced directly or indirectly within the document is
            `well-formed <#dt-wellformed>`__.


/Document
=========

         .. .. rubric:: Document
            :name: document

         .. list-table::

            - 

               - [1]   
               - ``document``
               -    ::=   
               - ```` ``(`` ```` ```prolog`` <#NT-prolog>`__ ```` ```element`` <#NT-element>`__ ```` ```Misc`` <#NT-Misc>`__ ``*`` ``)`` ```` ```` ``-`` ``(`` ```` ```Char`` <#NT-Char>`__ ``*`` ```RestrictedChar`` <#NT-RestrictedChar>`__ ```` ```` ```` ```Char`` <#NT-Char>`__ ``*`` ``)`` ````

         Matching the `document <#NT-document>`__ production implies
         that:

         #. It contains one or more `elements <#dt-element>`__.

         #. [Definition: There is exactly one element, called the
            **root**, or document element, no part of which appears in
            the `content <#dt-content>`__ of any other element.] For all
            other elements, if the `start-tag <#dt-stag>`__ is in the
            content of another element, the `end-tag <#dt-etag>`__ is in
            the content of the same element. More simply stated, the
            elements, delimited by start- and end-tags, nest properly
            within each other.

         [Definition: As a consequence of this, for each non-root
         element ``C`` in the document, there is one other element ``P``
         in the document such that ``C`` is in the content of ``P``, but
         is not in the content of any other element that is in the
         content of ``P``. ``P`` is referred to as the **parent** of
         ``C``, and ``C`` as a **child** of ``P``.]

      .. container:: div2


/2.2 Characters
===============

         .. .. rubric:: 2.2 Characters
            :name: characters

         [Definition: A parsed entity contains **text**, a sequence of
         `characters <#dt-character>`__, which may represent markup or
         character data.] [Definition: A **character** is an atomic unit
         of text as specified by ISO/IEC 10646 `[ISO/IEC
         10646] <#ISO10646>`__. Legal characters are tab, carriage
         return, line feed, and the legal characters of Unicode and
         ISO/IEC 10646. The versions of these standards cited in `A.1
         Normative References <#sec-existing-stds>`__ were current at
         the time this document was prepared. New characters may be
         added to these standards by amendments or new editions.
         Consequently, XML processors *MUST* accept any character in the
         range specified for `Char <#NT-Char>`__.]


/Character Range
================

         .. .. rubric:: Character Range
            :name: character-range

         .. list-table::

            - 

               - [2]   
               - ``Char``
               -    ::=   
               - ``[#x1-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]``
               - */\* any Unicode character, excluding the surrogate
                  blocks, FFFE, and FFFF. \*/*
            - 

               - [2a]   
               - ``RestrictedChar``
               -    ::=   
               - ``[#x1-#x8] | [#xB-#xC] | [#xE-#x1F] | [#x7F-#x84] | [#x86-#x9F]``
               - 

         The mechanism for encoding character code points into bit
         patterns may vary from entity to entity. All XML processors
         *MUST* accept the UTF-8 and UTF-16 encodings of Unicode
         `[Unicode] <#Unicode>`__; the mechanisms for signaling which of
         the two is in use, or for bringing other encodings into play,
         are discussed later, in `4.3.3 Character Encoding in
         Entities <#charencoding>`__.

         .. note::

            **Note:**

            Document authors are encouraged to avoid "compatibility
            characters", as defined in Unicode `[Unicode] <#Unicode>`__.
            The characters defined in the following ranges are also
            discouraged. They are either control characters or
            permanently undefined Unicode characters:

            .. container:: exampleInner

               ::

                  [#x1-#x8], [#xB-#xC], [#xE-#x1F], [#x7F-#x84], [#x86-#x9F], [#xFDD0-#xFDDF],
                  [#x1FFFE-#x1FFFF], [#x2FFFE-#x2FFFF], [#x3FFFE-#x3FFFF],
                  [#x4FFFE-#x4FFFF], [#x5FFFE-#x5FFFF], [#x6FFFE-#x6FFFF],
                  [#x7FFFE-#x7FFFF], [#x8FFFE-#x8FFFF], [#x9FFFE-#x9FFFF],
                  [#xAFFFE-#xAFFFF], [#xBFFFE-#xBFFFF], [#xCFFFE-#xCFFFF],
                  [#xDFFFE-#xDFFFF], [#xEFFFE-#xEFFFF], [#xFFFFE-#xFFFFF],
                  [#x10FFFE-#x10FFFF].

      .. container:: div2


/2.3 Common Syntactic Constructs
================================

         .. .. rubric:: 2.3 Common Syntactic Constructs
            :name: common-syntactic-constructs

         This section defines some symbols used widely in the grammar.

         `S <#NT-S>`__ (white space) consists of one or more space
         (#x20) characters, carriage returns, line feeds, or tabs.


/White Space
============

         .. .. rubric:: White Space
            :name: white-space

         .. list-table::

            - 

               - [3]   
               - ``S``
               -    ::=   
               - ``(#x20 | #x9 | #xD | #xA)+``

         .. note::

            **Note:**

            The presence of #xD in the above production is maintained
            purely for backward compatibility with the `First
            Edition <https://www.w3.org/TR/1998/REC-xml-19980210>`__. As
            explained in `2.11 End-of-Line Handling <#sec-line-ends>`__,
            all #xD characters literally present in an XML document are
            either removed or replaced by #xA characters before any
            other processing is done. The only way to get a #xD
            character to match this production is to use a character
            reference in an entity value literal.

         [Definition: A **Name** is a token beginning with a letter or
         one of a few punctuation characters, and continuing with
         letters, digits, hyphens, underscores, colons, or full stops,
         together known as name characters.] Names beginning with the
         string "``xml``", or with any string which would match
         ``(('X'|'x') ('M'|'m') ('L'|'l'))``, are reserved for
         standardization in this or future versions of this
         specification.

         .. note::

            **Note:**

            The Namespaces in XML Recommendation `[XML
            Names] <#xml-names>`__ assigns a meaning to names containing
            colon characters. Therefore, authors should not use the
            colon in XML names except for namespace purposes, but XML
            processors must accept the colon as a name character.

         An `Nmtoken <#NT-Nmtoken>`__ (name token) is any mixture of
         name characters.

         The first character of a Name *MUST* be a NameStartChar, and
         any other characters *MUST* be NameChars; this mechanism is
         used to prevent names from beginning with European (ASCII)
         digits or with basic combining characters. Almost all
         characters are permitted in names, except those which either
         are or reasonably could be used as delimiters. The intention is
         to be inclusive rather than exclusive, so that writing systems
         not yet encoded in Unicode can be used in XML names. See `I
         Suggestions for XML Names <#sec-suggested-names>`__ for
         suggestions on the creation of names.

         Document authors are encouraged to use names which are
         meaningful words or combinations of words in natural languages,
         and to avoid symbolic or white space characters in names. Note
         that COLON, HYPHEN-MINUS, FULL STOP (period), LOW LINE
         (underscore), and MIDDLE DOT are explicitly permitted.

         The ASCII symbols and punctuation marks, along with a fairly
         large group of Unicode symbol characters, are excluded from
         names because they are more useful as delimiters in contexts
         where XML names are used outside XML documents; providing this
         group gives those contexts hard guarantees about what *cannot*
         be part of an XML name. The character #x037E, GREEK QUESTION
         MARK, is excluded because when normalized it becomes a
         semicolon, which could change the meaning of entity references.


/Names and Tokens
=================

         .. .. rubric:: Names and Tokens
            :name: names-and-tokens

         .. list-table::

            - 

               - [4]   
               - ``NameStartChar``
               -    ::=   
               - ``":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]``
            - 

               - [4a]   
               - ``NameChar``
               -    ::=   
               - ```` ```NameStartChar`` <#NT-NameStartChar>`__ ``| "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]``
            - 

               - [5]   
               - ``Name``
               -    ::=   
               - ```` ```NameStartChar`` <#NT-NameStartChar>`__ ``(`` ```NameChar`` <#NT-NameChar>`__ ``)*``
            - 

               - [6]   
               - ``Names``
               -    ::=   
               - ```` ```Name`` <#NT-Name>`__ ``(#x20`` ```Name`` <#NT-Name>`__ ``)*``
            - 

               - [7]   
               - ``Nmtoken``
               -    ::=   
               - ``(`` ```NameChar`` <#NT-NameChar>`__ ``)+``
            - 

               - [8]   
               - ``Nmtokens``
               -    ::=   
               - ```` ```Nmtoken`` <#NT-Nmtoken>`__ ``(#x20`` ```Nmtoken`` <#NT-Nmtoken>`__ ``)*``

         .. note::

            **Note:**

            The `Names <#NT-Names>`__ and `Nmtokens <#NT-Nmtokens>`__
            productions are used to define the validity of tokenized
            attribute values after normalization (see `3.3.1 Attribute
            Types <#sec-attribute-types>`__).

         Literal data is any quoted string not containing the quotation
         mark used as a delimiter for that string. Literals are used for
         specifying the content of internal entities
         (`EntityValue <#NT-EntityValue>`__), the values of attributes
         (`AttValue <#NT-AttValue>`__), and external identifiers
         (`SystemLiteral <#NT-SystemLiteral>`__). Note that a
         `SystemLiteral <#NT-SystemLiteral>`__ can be parsed without
         scanning for markup.


/Literals
=========

         .. .. rubric:: Literals
            :name: literals

         .. list-table::

            - 

               - [9]   
               - ``EntityValue``
               -    ::=   
               - ``'"' ([^%&"] |`` ```PEReference`` <#NT-PEReference>`__ ``|`` ```Reference`` <#NT-Reference>`__ ``)* '"'``
            - 

               - 
               - 
               - 
               - ``|  "'" ([^%&'] |`` ```PEReference`` <#NT-PEReference>`__ ``|`` ```Reference`` <#NT-Reference>`__ ``)* "'"``
            - 

               - [10]   
               - ``AttValue``
               -    ::=   
               - ``'"' ([^<&"] |`` ```Reference`` <#NT-Reference>`__ ``)* '"'``
            - 

               - 
               - 
               - 
               - ``|  "'" ([^<&'] |`` ```Reference`` <#NT-Reference>`__ ``)* "'"``
            - 

               - [11]   
               - ``SystemLiteral``
               -    ::=   
               - ``('"' [^"]* '"') | ("'" [^']* "'")``
            - 

               - [12]   
               - ``PubidLiteral``
               -    ::=   
               - ``'"'`` ```PubidChar`` <#NT-PubidChar>`__ ``* '"' | "'" (`` ```PubidChar`` <#NT-PubidChar>`__ ``- "'")* "'"``
            - 

               - [13]   
               - ``PubidChar``
               -    ::=   
               - ``#x20 | #xD | #xA | [a-zA-Z0-9] | [-'()+,./:=?;!*#@$_%]``

         .. note::

            **Note:**

            Although the `EntityValue <#NT-EntityValue>`__ production
            allows the definition of a general entity consisting of a
            single explicit ``<`` in the literal (e.g.,
            ``<!ENTITY mylt "<">``), it is strongly advised to avoid
            this practice since any reference to that entity will cause
            a well-formedness error.

      .. container:: div2


/2.4 Character Data and Markup
==============================

         .. .. rubric:: 2.4 Character Data and Markup
            :name: character-data-and-markup

         `Text <#dt-text>`__ consists of intermingled `character
         data <#dt-chardata>`__ and markup. [Definition: **Markup**
         takes the form of `start-tags <#dt-stag>`__,
         `end-tags <#dt-etag>`__, `empty-element tags <#dt-empty>`__,
         `entity references <#dt-entref>`__, `character
         references <#dt-charref>`__, `comments <#dt-comment>`__, `CDATA
         section <#dt-cdsection>`__ delimiters, `document type
         declarations <#dt-doctype>`__, `processing
         instructions <#dt-pi>`__, `XML declarations <#NT-XMLDecl>`__,
         `text declarations <#NT-TextDecl>`__, and any white space that
         is at the top level of the document entity (that is, outside
         the document element and not inside any other markup).]

         [Definition: All text that is not markup constitutes the
         **character data** of the document.]

         The ampersand character (&) and the left angle bracket (<)
         *MUST NOT* appear in their literal form, except when used as
         markup delimiters, or within a `comment <#dt-comment>`__, a
         `processing instruction <#dt-pi>`__, or a `CDATA
         section <#dt-cdsection>`__. If they are needed elsewhere, they
         *MUST* be `escaped <#dt-escape>`__ using either `numeric
         character references <#dt-charref>`__ or the strings
         "``&amp;``" and "``&lt;``" respectively. The right angle
         bracket (>) may be represented using the string "``&gt;``", and
         *MUST*, `for compatibility <#dt-compat>`__, be escaped using
         either "``&gt;``" or a character reference when it appears in
         the string "``]]>``" in content, when that string is not
         marking the end of a `CDATA section <#dt-cdsection>`__.

         In the content of elements, character data is any string of
         characters which does not contain the start-delimiter of any
         markup or the CDATA-section-close delimiter, "``]]>``". In a
         CDATA section, character data is any string of characters not
         including the CDATA-section-close delimiter.

         To allow attribute values to contain both single and double
         quotes, the apostrophe or single-quote character (') may be
         represented as "``&apos;``", and the double-quote character (")
         as "``&quot;``".


/Character Data
===============

         .. .. rubric:: Character Data
            :name: character-data

         .. list-table::

            - 

               - [14]   
               - ``CharData``
               -    ::=   
               - ``[^<&]* - ([^<&]* ']]>' [^<&]*)``

      .. container:: div2


/2.5 Comments
=============

         .. .. rubric:: 2.5 Comments
            :name: comments

         [Definition: **Comments** may appear anywhere in a document
         outside other `markup <#dt-markup>`__; in addition, they may
         appear within the document type declaration at places allowed
         by the grammar. They are not part of the document's `character
         data <#dt-chardata>`__; an XML processor *MAY*, but need not,
         make it possible for an application to retrieve the text of
         comments. `For compatibility <#dt-compat>`__, the string
         "``--``" (double-hyphen) *MUST NOT* occur within comments.]
         Parameter entity references *MUST NOT* be recognized within
         comments.


/Comments
=========

         .. .. rubric:: Comments
            :name: comments-1

         .. list-table::

            - 

               - [15]   
               - ``Comment``
               -    ::=   
               - ``'<!--' ((`` ```Char`` <#NT-Char>`__ ``- '-') | ('-' (`` ```Char`` <#NT-Char>`__ ``- '-')))* '-->'``

         An example of a comment:

         .. container:: exampleInner

            ::

               <!-- declarations for <head> & <body> -->

         Note that the grammar does not allow a comment ending in
         ``--->``. The following example is *not* well-formed.

         .. container:: exampleInner

            ::

               <!-- B+, B, or B--->

      .. container:: div2


/2.6 Processing Instructions
============================

         .. .. rubric:: 2.6 Processing Instructions
            :name: processing-instructions

         [Definition: **Processing instructions** (PIs) allow documents
         to contain instructions for applications.]


/Processing Instructions
========================

         .. .. rubric:: Processing Instructions
            :name: processing-instructions-1

         .. list-table::

            - 

               - [16]   
               - ``PI``
               -    ::=   
               - ``'<?'`` ```PITarget`` <#NT-PITarget>`__ ``(`` ```S`` <#NT-S>`__ ``(`` ```Char`` <#NT-Char>`__ ``* - (`` ```Char`` <#NT-Char>`__ ``* '?>'`` ```Char`` <#NT-Char>`__ ``*)))? '?>'``
            - 

               - [17]   
               - ``PITarget``
               -    ::=   
               - ```` ```Name`` <#NT-Name>`__ ``- (('X' | 'x') ('M' | 'm') ('L' | 'l'))``

         PIs are not part of the document's `character
         data <#dt-chardata>`__, but *MUST* be passed through to the
         application. The PI begins with a target
         (`PITarget <#NT-PITarget>`__) used to identify the application
         to which the instruction is directed. The target names
         "``XML``", "``xml``", and so on are reserved for
         standardization in this or future versions of this
         specification. The XML `Notation <#dt-notation>`__ mechanism
         may be used for formal declaration of PI targets. Parameter
         entity references *MUST NOT* be recognized within processing
         instructions.

      .. container:: div2


/2.7 CDATA Sections
===================

         .. .. rubric:: 2.7 CDATA Sections
            :name: cdata-sections

         [Definition: **CDATA sections** may occur anywhere character
         data may occur; they are used to escape blocks of text
         containing characters which would otherwise be recognized as
         markup. CDATA sections begin with the string "``<![CDATA[``"
         and end with the string "``]]>``":]


/CDATA Sections
===============

         .. .. rubric:: CDATA Sections
            :name: cdata-sections-1

         .. list-table::

            - 

               - [18]   
               - ``CDSect``
               -    ::=   
               - ```` ```CDStart`` <#NT-CDStart>`__ ```` ```CData`` <#NT-CData>`__ ```` ```CDEnd`` <#NT-CDEnd>`__ ````
            - 

               - [19]   
               - ``CDStart``
               -    ::=   
               - ``'<![CDATA['``
            - 

               - [20]   
               - ``CData``
               -    ::=   
               - ``(`` ```Char`` <#NT-Char>`__ ``* - (`` ```Char`` <#NT-Char>`__ ``* ']]>'`` ```Char`` <#NT-Char>`__ ``*))``
            - 

               - [21]   
               - ``CDEnd``
               -    ::=   
               - ``']]>'``

         Within a CDATA section, only the `CDEnd <#NT-CDEnd>`__ string
         is recognized as markup, so that left angle brackets and
         ampersands may occur in their literal form; they need not (and
         cannot) be escaped using "``&lt;``" and "``&amp;``". CDATA
         sections cannot nest.

         An example of a CDATA section, in which "``<greeting>``" and
         "``</greeting>``" are recognized as `character
         data <#dt-chardata>`__, not `markup <#dt-markup>`__:

         .. container:: exampleInner

            ::

               <![CDATA[<greeting>Hello, world!</greeting>]]> 

      .. container:: div2


/2.8 Prolog and Document Type Declaration
=========================================

         .. .. rubric:: 2.8 Prolog and Document Type Declaration
            :name: prolog-and-document-type-declaration

         [Definition: XML 1.1 documents *MUST* begin with an **XML
         declaration** which specifies the version of XML being used.]
         For example, the following is a complete XML 1.1 document,
         `well-formed <#dt-wellformed>`__ but not `valid <#dt-valid>`__:

         .. container:: exampleInner

            ::

               <?xml version="1.1"?>
               <greeting>Hello, world!</greeting> 

         but the following is an XML 1.0 document because it does not
         have an XML declaration:

         .. container:: exampleInner

            ::

               <greeting>Hello, world!</greeting>

         The function of the markup in an XML document is to describe
         its storage and logical structure and to associate attribute
         name-value pairs with its logical structures. XML provides a
         mechanism, the `document type declaration <#dt-doctype>`__, to
         define constraints on the logical structure and to support the
         use of predefined storage units. [Definition: An XML document
         is **valid** if it has an associated document type declaration
         and if the document complies with the constraints expressed in
         it.]

         The document type declaration *MUST* appear before the first
         `element <#dt-element>`__ in the document.


/Prolog
=======

         .. .. rubric:: Prolog
            :name: prolog

         .. list-table::

            - 

               - [22]   
               - ``prolog``
               -    ::=   
               - ```` ```XMLDecl`` <#NT-XMLDecl>`__ ```` ```Misc`` <#NT-Misc>`__ ``* (`` ```doctypedecl`` <#NT-doctypedecl>`__ ```` ```Misc`` <#NT-Misc>`__ ``*)?``
            - 

               - [23]   
               - ``XMLDecl``
               -    ::=   
               - ``'<?xml'`` ```VersionInfo`` <#NT-VersionInfo>`__ ```` ```EncodingDecl`` <#NT-EncodingDecl>`__ ``?`` ```SDDecl`` <#NT-SDDecl>`__ ``?`` ```S`` <#NT-S>`__ ``? '?>'``
            - 

               - [24]   
               - ``VersionInfo``
               -    ::=   
               - ```` ```S`` <#NT-S>`__ ``'version'`` ```Eq`` <#NT-Eq>`__ ``("'"`` ```VersionNum`` <#NT-VersionNum>`__ ``"'" | '"'`` ```VersionNum`` <#NT-VersionNum>`__ ``'"')``
            - 

               - [25]   
               - ``Eq``
               -    ::=   
               - ```` ```S`` <#NT-S>`__ ``? '='`` ```S`` <#NT-S>`__ ``?``
            - 

               - [26]   
               - ``VersionNum``
               -    ::=   
               - ``'1.1'``
            - 

               - [27]   
               - ``Misc``
               -    ::=   
               - ```` ```Comment`` <#NT-Comment>`__ ``|`` ```PI`` <#NT-PI>`__ ``|`` ```S`` <#NT-S>`__ ````

         [Definition: The XML **document type declaration** contains or
         points to `markup declarations <#dt-markupdecl>`__ that provide
         a grammar for a class of documents. This grammar is known as a
         document type definition, or **DTD**. The document type
         declaration can point to an external subset (a special kind of
         `external entity <#dt-extent>`__) containing markup
         declarations, or can contain the markup declarations directly
         in an internal subset, or can do both. The DTD for a document
         consists of both subsets taken together.]

         [Definition: A **markup declaration** is an `element type
         declaration <#dt-eldecl>`__, an `attribute-list
         declaration <#dt-attdecl>`__, an `entity
         declaration <#dt-entdecl>`__, or a `notation
         declaration <#dt-notdecl>`__.] These declarations may be
         contained in whole or in part within `parameter
         entities <#dt-PE>`__, as described in the well-formedness and
         validity constraints below. For further information, see `4
         Physical Structures <#sec-physical-struct>`__.


/Document Type Definition
=========================

         .. .. rubric:: Document Type Definition
            :name: document-type-definition

         .. list-table::

            - 

               - [28]   
               - ``doctypedecl``
               -    ::=   
               - ``'<!DOCTYPE'`` ```S`` <#NT-S>`__ ```` ```Name`` <#NT-Name>`__ ``(`` ```S`` <#NT-S>`__ ```` ```ExternalID`` <#NT-ExternalID>`__ ``)?`` ```S`` <#NT-S>`__ ``? ('['`` ```intSubset`` <#NT-intSubset>`__ ``']'`` ```S`` <#NT-S>`__ ``?)? '>'``
               - `[VC: Root Element Type] <#vc-roottype>`__
            - 

               - 
               - 
               - 
               - 
               - `[WFC: External Subset] <#ExtSubset>`__
            - 

               - [28a]   
               - ``DeclSep``
               -    ::=   
               - ```` ```PEReference`` <#NT-PEReference>`__ ``|`` ```S`` <#NT-S>`__ ````
               - `[WFC: PE Between Declarations] <#PE-between-Decls>`__
            - 

               - [28b]   
               - ``intSubset``
               -    ::=   
               - ``(`` ```markupdecl`` <#NT-markupdecl>`__ ``|`` ```DeclSep`` <#NT-DeclSep>`__ ``)*``
               - 
            - 

               - [29]   
               - ``markupdecl``
               -    ::=   
               - ```` ```elementdecl`` <#NT-elementdecl>`__ ``|`` ```AttlistDecl`` <#NT-AttlistDecl>`__ ``|`` ```EntityDecl`` <#NT-EntityDecl>`__ ``|`` ```NotationDecl`` <#NT-NotationDecl>`__ ``|`` ```PI`` <#NT-PI>`__ ``|`` ```Comment`` <#NT-Comment>`__ ````
               - `[VC: Proper Declaration/PE
                  Nesting] <#vc-PEinMarkupDecl>`__
            - 

               - 
               - 
               - 
               - 
               - `[WFC: PEs in Internal
                  Subset] <#wfc-PEinInternalSubset>`__

         Note that it is possible to construct a well-formed document
         containing a `doctypedecl <#NT-doctypedecl>`__ that neither
         points to an external subset nor contains an internal subset.

         The markup declarations may be made up in whole or in part of
         the `replacement text <#dt-repltext>`__ of `parameter
         entities <#dt-PE>`__. The productions later in this
         specification for individual nonterminals
         (`elementdecl <#NT-elementdecl>`__,
         `AttlistDecl <#NT-AttlistDecl>`__, and so on) describe the
         declarations *after* all the parameter entities have been
         `included <#dt-include>`__.

         Parameter entity references are recognized anywhere in the DTD
         (internal and external subsets and external parameter
         entities), except in literals, processing instructions,
         comments, and the contents of ignored conditional sections (see
         `3.4 Conditional Sections <#sec-condition-sect>`__). They are
         also recognized in entity value literals. The use of parameter
         entities in the internal subset is restricted as described
         below.

         .. container:: constraint

            **Validity constraint: Root Element Type**

            The `Name <#NT-Name>`__ in the document type declaration
            *MUST* match the element type of the `root
            element <#dt-root>`__.

         .. container:: constraint

            **Validity constraint: Proper Declaration/PE Nesting**

            Parameter-entity `replacement text <#dt-repltext>`__ *MUST*
            be properly nested with markup declarations. That is to say,
            if either the first character or the last character of a
            markup declaration (`markupdecl <#NT-markupdecl>`__ above)
            is contained in the replacement text for a `parameter-entity
            reference <#dt-PERef>`__, both *MUST* be contained in the
            same replacement text.

         .. container:: constraint

            **Well-formedness constraint: PEs in Internal Subset**

            In the internal DTD subset, `parameter-entity
            references <#dt-PERef>`__ *MUST NOT* occur within markup
            declarations; they may occur where markup declarations can
            occur. (This does not apply to references that occur in
            external parameter entities or to the external subset.)

         .. container:: constraint

            **Well-formedness constraint: External Subset**

            The external subset, if any, *MUST* match the production for
            `extSubset <#NT-extSubset>`__.

         .. container:: constraint

            **Well-formedness constraint: PE Between Declarations**

            The replacement text of a parameter entity reference in a
            `DeclSep <#NT-DeclSep>`__ *MUST* match the production
            `extSubsetDecl <#NT-extSubsetDecl>`__.

         Like the internal subset, the external subset and any external
         parameter entities referenced in a `DeclSep <#NT-DeclSep>`__
         *MUST* consist of a series of complete markup declarations of
         the types allowed by the non-terminal symbol
         `markupdecl <#NT-markupdecl>`__, interspersed with white space
         or `parameter-entity references <#dt-PERef>`__. However,
         portions of the contents of the external subset or of these
         external parameter entities may conditionally be ignored by
         using the `conditional section <#dt-cond-section>`__ construct;
         this is not allowed in the internal subset but is allowed in
         external parameter entities referenced in the internal subset.


/External Subset
================

         .. .. rubric:: External Subset
            :name: external-subset

         .. list-table::

            - 

               - [30]   
               - ``extSubset``
               -    ::=   
               - ```` ```TextDecl`` <#NT-TextDecl>`__ ``?`` ```extSubsetDecl`` <#NT-extSubsetDecl>`__ ````
            - 

               - [31]   
               - ``extSubsetDecl``
               -    ::=   
               - ``(`` ```markupdecl`` <#NT-markupdecl>`__ ``|`` ```conditionalSect`` <#NT-conditionalSect>`__ ``|`` ```DeclSep`` <#NT-DeclSep>`__ ``)*``

         The external subset and external parameter entities also differ
         from the internal subset in that in them, `parameter-entity
         references <#dt-PERef>`__ are permitted *within* markup
         declarations, not only *between* markup declarations.

         An example of an XML document with a document type declaration:

         .. container:: exampleInner

            ::

               <?xml version="1.1"?>
               <!DOCTYPE greeting SYSTEM "hello.dtd">
               <greeting>Hello, world!</greeting> 

         The `system identifier <#dt-sysid>`__ "``hello.dtd``" gives the
         address (a URI reference) of a DTD for the document.

         The declarations can also be given locally, as in this example:

         .. container:: exampleInner

            ::

               <?xml version="1.1" encoding="UTF-8" ?>
               <!DOCTYPE greeting [
               <!ELEMENT greeting (#PCDATA)>
               ]>
               <greeting>Hello, world!</greeting>

         If both the external and internal subsets are used, the
         internal subset *MUST* be considered to occur before the
         external subset. This has the effect that entity and
         attribute-list declarations in the internal subset take
         precedence over those in the external subset.

         If a document is well-formed or valid XML 1.0, and provided it
         does not contain any control characters in the range
         [#x7F-#x9F] other than as character escapes, it may be made
         well-formed or valid XML 1.1 respectively simply by changing
         the version number.

      .. container:: div2


/2.9 Standalone Document Declaration
====================================

         .. .. rubric:: 2.9 Standalone Document Declaration
            :name: standalone-document-declaration

         Markup declarations can affect the content of the document, as
         passed from an `XML processor <#dt-xml-proc>`__ to an
         application; examples are attribute defaults and entity
         declarations. The standalone document declaration, which may
         appear as a component of the XML declaration, signals whether
         or not there are such declarations which appear external to the
         `document entity <#dt-docent>`__ or in parameter entities.
         [Definition: An **external markup declaration** is defined as a
         markup declaration occurring in the external subset or in a
         parameter entity (external or internal, the latter being
         included because non-validating processors are not required to
         read them).]


/Standalone Document Declaration
================================

         .. .. rubric:: Standalone Document Declaration
            :name: standalone-document-declaration-1

         .. list-table::

            - 

               - [32]   
               - ``SDDecl``
               -    ::=   
               - ```` ```` ```S`` <#NT-S>`__ ```` ``'standalone'`` ```Eq`` <#NT-Eq>`__ ``(("'" ('yes' | 'no') "'") | ('"' ('yes' | 'no') '"'))``
               - `[VC: Standalone Document
                  Declaration] <#vc-check-rmd>`__

         In a standalone document declaration, the value "yes" indicates
         that there are no `external markup
         declarations <#dt-extmkpdecl>`__ which affect the information
         passed from the XML processor to the application. The value
         "no" indicates that there are or may be such external markup
         declarations. Note that the standalone document declaration
         only denotes the presence of external *declarations*; the
         presence, in a document, of references to external *entities*,
         when those entities are internally declared, does not change
         its standalone status.

         If there are no external markup declarations, the standalone
         document declaration has no meaning. If there are external
         markup declarations but there is no standalone document
         declaration, the value "no" is assumed.

         Any XML document for which ``standalone="no"`` holds can be
         converted algorithmically to a standalone document, which may
         be desirable for some network delivery applications.

         .. container:: constraint

            **Validity constraint: Standalone Document Declaration**

            The standalone document declaration *MUST* have the value
            "no" if any external markup declarations contain
            declarations of:

            -  attributes with `default <#dt-default>`__ values, if
               elements to which these attributes apply appear in the
               document without specifications of values for these
               attributes, or

            -  entities (other than ``amp``, ``lt``, ``gt``, ``apos``,
               ``quot``), if `references <#dt-entref>`__ to those
               entities appear in the document, or

            -  attributes with tokenized types, where the attribute
               appears in the document with a value such that
               `normalization <#AVNormalize>`__ will produce a different
               value from that which would be produced in the absence of
               the declaration, or

            -  element types with `element content <#dt-elemcontent>`__,
               if white space occurs directly within any instance of
               those types.

         An example XML declaration with a standalone document
         declaration:

         .. container:: exampleInner

            ::

               <?xml version="1.1" standalone='yes'?>

      .. container:: div2


/2.10 White Space Handling
==========================

         .. .. rubric:: 2.10 White Space Handling
            :name: white-space-handling

         In editing XML documents, it is often convenient to use "white
         space" (spaces, tabs, and blank lines) to set apart the markup
         for greater readability. Such white space is typically not
         intended for inclusion in the delivered version of the
         document. On the other hand, "significant" white space that
         should be preserved in the delivered version is common, for
         example in poetry and source code.

         An `XML processor <#dt-xml-proc>`__ *MUST* always pass all
         characters in a document that are not markup through to the
         application. A `validating XML processor <#dt-validating>`__
         *MUST* also inform the application which of these characters
         constitute white space appearing in `element
         content <#dt-elemcontent>`__.

         A special `attribute <#dt-attr>`__ named ``xml:space`` may be
         attached to an element to signal an intention that in that
         element, white space should be preserved by applications. In
         valid documents, this attribute, like any other, *MUST* be
         `declared <#dt-attdecl>`__ if it is used. When declared, it
         *MUST* be given as an `enumerated type <#dt-enumerated>`__
         whose values are one or both of "default" and "preserve". For
         example:

         .. container:: exampleInner

            ::

               <!ATTLIST poem  xml:space (default|preserve) 'preserve'>
               <!ATTLIST pre xml:space (preserve) #FIXED 'preserve'>

         The value "default" signals that applications' default
         white-space processing modes are acceptable for this element;
         the value "preserve" indicates the intent that applications
         preserve all the white space. This declared intent is
         considered to apply to all elements within the content of the
         element where it is specified, unless overridden with another
         instance of the ``xml:space`` attribute. This specification
         does not give meaning to any value of ``xml:space`` other than
         "default" and "preserve". It is an error for other values to be
         specified; the XML processor *MAY* report the error or *MAY*
         recover by ignoring the attribute specification or by reporting
         the (erroneous) value to the application. Applications may
         ignore or reject erroneous values.

         The `root element <#dt-root>`__ of any document is considered
         to have signaled no intentions as regards application space
         handling, unless it provides a value for this attribute or the
         attribute is declared with a default value.

      .. container:: div2


/2.11 End-of-Line Handling
==========================

         .. .. rubric:: 2.11 End-of-Line Handling
            :name: end-of-line-handling

         XML `parsed entities <#dt-parsedent>`__ are often stored in
         computer files which, for editing convenience, are organized
         into lines. These lines are typically separated by some
         combination of the characters CARRIAGE RETURN (#xD) and LINE
         FEED (#xA).

         To simplify the tasks of `applications <#dt-app>`__, the `XML
         processor <#dt-xml-proc>`__ *MUST* behave as if it normalized
         all line breaks in external parsed entities (including the
         document entity) on input, before parsing, by translating all
         of the following to a single #xA character:

         #. the two-character sequence #xD #xA

         #. the two-character sequence #xD #x85

         #. the single character #x85

         #. the single character #x2028

         #. any #xD character that is not immediately followed by #xA or
            #x85.

         The characters #x85 and #x2028 cannot be reliably recognized
         and translated until an entity's encoding declaration (if
         present) has been read. Therefore, it is a fatal error to use
         them within the XML declaration or text declaration.

      .. container:: div2


/2.12 Language Identification
=============================

         .. .. rubric:: 2.12 Language Identification
            :name: language-identification

         In document processing, it is often useful to identify the
         natural or formal language in which the content is written. A
         special `attribute <#dt-attr>`__ named ``xml:lang`` may be
         inserted in documents to specify the language used in the
         contents and attribute values of any element in an XML
         document. In valid documents, this attribute, like any other,
         *MUST* be `declared <#dt-attdecl>`__ if it is used. The values
         of the attribute are language identifiers as defined by `[IETF
         RFC 3066] <#RFC1766>`__, Tags for the Identification of
         Languages, or its successor; in addition, the empty string may
         be specified.

         (Productions 33 through 38 have been removed.)

         For example:

         .. container:: exampleInner

            ::

               <p xml:lang="en">The quick brown fox jumps over the lazy dog.</p>
               <p xml:lang="en-GB">What colour is it?</p>
               <p xml:lang="en-US">What color is it?</p>
               <sp who="Faust" desc='leise' xml:lang="de">
               <l>Habe nun, ach! Philosophie,</l>
               <l>Juristerei, und Medizin</l>
               <l>und leider auch Theologie</l>
               <l>durchaus studiert mit hei&#xDF;em Bem&#xFC;h'n.</l>
               </sp>

         The language specified by ``xml:lang`` applies to the element
         where it is specified (including the values of its attributes),
         and to all elements in its content unless overridden with
         another instance of ``xml:lang``. In particular, the empty
         value of ``xml:lang`` is used on an element B to override a
         specification of ``xml:lang`` on an enclosing element A,
         without specifying another language. Within B, it is considered
         that there is no language information available, just as if
         ``xml:lang`` had not been specified on B or any of its
         ancestors. Applications determine which of an element's
         attribute values and which parts of its character content, if
         any, are treated as language-dependent values described by
         ``xml:lang``.

         .. note::

            **Note:**

            Language information may also be provided by external
            transport protocols (e.g. HTTP or MIME). When available,
            this information may be used by XML applications, but the
            more local information provided by ``xml:lang`` should be
            considered to override it.

         A simple declaration for ``xml:lang`` might take the form

         .. container:: exampleInner

            ::

               xml:lang CDATA #IMPLIED

         but specific default values may also be given, if appropriate.
         In a collection of French poems for English students, with
         glosses and notes in English, the ``xml:lang`` attribute might
         be declared this way:

         .. container:: exampleInner

            ::

               <!ATTLIST poem   xml:lang CDATA 'fr'>
               <!ATTLIST gloss  xml:lang CDATA 'en'>
               <!ATTLIST note   xml:lang CDATA 'en'>

      .. container:: div2


/2.13 Normalization Checking
============================

         .. .. rubric:: 2.13 Normalization Checking
            :name: normalization-checking

         All XML `parsed entities <#dt-parsedent>`__ (including
         `document entities <#dt-docent>`__) *SHOULD* be `fully
         normalized <#dt-fullnorm>`__ as per the definition of `B
         Definitions for Character Normalization <#sec-CharNorm>`__
         supplemented by the following definitions of *relevant
         constructs* for XML:

         #. The `replacement text <#dt-repltext>`__ of all `parsed
            entities <#dt-parsedent>`__

         #. All text matching, in context, one of the following
            productions:

            #. `CData <#NT-CData>`__

            #. `CharData <#NT-CharData>`__

            #. `content <#NT-content>`__

            #. `Name <#NT-Name>`__

            #. `Nmtoken <#NT-Nmtoken>`__

         However, a document is still well-formed even if it is not
         `fully normalized <#dt-fullnorm>`__. XML processors *SHOULD*
         provide a user option to verify that the document being
         processed is in `fully normalized <#dt-fullnorm>`__ form, and
         report to the application whether it is or not. The option to
         not verify *SHOULD* be chosen only when the input text is
         `certified <#dt-certified>`__, as defined by `B Definitions for
         Character Normalization <#sec-CharNorm>`__.

         The verification of full normalization *MUST* be carried out as
         if by first verifying that the entity is in
         `include-normalized <#dt-inclnorm>`__ form as defined by `B
         Definitions for Character Normalization <#sec-CharNorm>`__ and
         by then verifying that none of the relevant constructs listed
         above begins (after character references are expanded) with a
         `composing character <#dt-compchar>`__ as defined by `B
         Definitions for Character Normalization <#sec-CharNorm>`__.
         Non-validating processors *MUST* ignore possible
         denormalizations that would be caused by inclusion of external
         entities that they do not read.

         .. note::

            **Note:**

            The `composing character <#dt-compchar>`__ are all Unicode
            characters of non-zero combining class, plus a small number
            of class-zero characters that nevertheless take part as a
            non-initial character in certain Unicode canonical
            decompositions. Since these characters are meant to follow
            base characters, restricting relevant constructs (including
            content) from beginning with a `composing
            character <#dt-compchar>`__ does not meaningfully diminish
            the expressiveness of XML.

         If, while verifying full normalization, a processor encounters
         characters for which it cannot determine the normalization
         properties (i.e., characters introduced in a version of Unicode
         `[Unicode] <#Unicode>`__ later than the one used in the
         implementation of the processor), then the processor *MAY*, at
         user option, ignore any possible denormalizations caused by
         these characters. The option to ignore those denormalizations
         *SHOULD NOT* be chosen by applications when reliability or
         security are critical.

         XML processors *MUST NOT* transform the input to be in `fully
         normalized <#dt-fullnorm>`__ form. XML applications that create
         XML 1.1 output from either XML 1.1 or XML 1.0 input *SHOULD*
         ensure that the output is `fully normalized <#dt-fullnorm>`__;
         it is not necessary for internal processing forms to be `fully
         normalized <#dt-fullnorm>`__.

         The purpose of this section is to strongly encourage XML
         processors to ensure that the creators of XML documents have
         properly normalized them, so that XML applications can make
         tests such as identity comparisons of strings without having to
         worry about the different possible "spellings" of strings which
         Unicode allows.

         When entities are in a non-Unicode encoding, if the processor
         transcodes them to Unicode, it *SHOULD* use a normalizing
         transcoder.

   .. container:: div1


/3 Logical Structures
=====================

      .. .. rubric:: 3 Logical Structures
         :name: logical-structures

      [Definition: Each `XML document <#dt-xml-doc>`__ contains one or
      more **elements**, the boundaries of which are either delimited by
      `start-tags <#dt-stag>`__ and `end-tags <#dt-etag>`__, or, for
      `empty <#dt-empty>`__ elements, by an `empty-element
      tag <#dt-eetag>`__. Each element has a type, identified by name,
      sometimes called its "generic identifier" (GI), and may have a set
      of attribute specifications.] Each attribute specification has a
      `name <#dt-attrname>`__ and a `value <#dt-attrval>`__.


/Element
========

      .. .. rubric:: Element
         :name: element

      .. list-table::

         - 

            - [39]   
            - ``element``
            -    ::=   
            - ```` ```EmptyElemTag`` <#NT-EmptyElemTag>`__ ````
            - 
         - 

            - 
            - 
            - 
            - ``|`` ```STag`` <#NT-STag>`__ ```` ```content`` <#NT-content>`__ ```` ```ETag`` <#NT-ETag>`__ ````
            - `[WFC: Element Type Match] <#GIMatch>`__
         - 

            - 
            - 
            - 
            - 
            - `[VC: Element Valid] <#elementvalid>`__

      This specification does not constrain the application semantics,
      use, or (beyond syntax) names of the element types and attributes,
      except that names beginning with a match to
      ``(('X'|'x')('M'|'m')('L'|'l'))`` are reserved for standardization
      in this or future versions of this specification.

      .. container:: constraint

         **Well-formedness constraint: Element Type Match**

         The `Name <#NT-Name>`__ in an element's end-tag *MUST* match
         the element type in the start-tag.

      .. container:: constraint

         **Validity constraint: Element Valid**

         An element is valid if there is a declaration matching
         `elementdecl <#NT-elementdecl>`__ where the `Name <#NT-Name>`__
         matches the element type, and one of the following holds:

         #. The declaration matches **EMPTY** and the element has no
            `content <#dt-content>`__ (not even entity references,
            comments, PIs or white space).

         #. The declaration matches `children <#NT-children>`__ and the
            sequence of `child elements <#dt-parentchild>`__ belongs to
            the language generated by the regular expression in the
            content model, with optional white space, comments and PIs
            (i.e. markup matching production [27] `Misc <#NT-Misc>`__)
            between the start-tag and the first child element, between
            child elements, or between the last child element and the
            end-tag. Note that a CDATA section containing only white
            space or a reference to an entity whose replacement text is
            character references expanding to white space do not match
            the nonterminal `S <#NT-S>`__, and hence cannot appear in
            these positions; however, a reference to an internal entity
            with a literal value consisting of character references
            expanding to white space does match `S <#NT-S>`__, since its
            replacement text is the white space resulting from expansion
            of the character references.

         #. The declaration matches `Mixed <#NT-Mixed>`__ , and the
            content (after replacing any entity references with their
            replacement text) consists of `character
            data <#dt-chardata>`__ (including `CDATA
            sections <#dt-cdsection>`__), `comments <#dt-comment>`__,
            `PIs <#dt-pi>`__ and `child elements <#dt-parentchild>`__
            whose types match names in the content model.

         #. The declaration matches **ANY**, and the content (after
            replacing any entity references with their replacement text)
            consists of character data , `CDATA
            sections <#dt-cdsection>`__, `comments <#dt-comment>`__,
            `PIs <#dt-pi>`__ and `child elements <#dt-parentchild>`__
            whose types have been declared.

      .. container:: div2


/3.1 Start-Tags, End-Tags, and Empty-Element Tags
=================================================

         .. .. rubric:: 3.1 Start-Tags, End-Tags, and Empty-Element Tags
            :name: start-tags-end-tags-and-empty-element-tags

         [Definition: The beginning of every non-empty XML element is
         marked by a **start-tag**.]


/Start-tag
==========

         .. .. rubric:: Start-tag
            :name: start-tag

         .. list-table::

            - 

               - [40]   
               - ``STag``
               -    ::=   
               - ``'<'`` ```Name`` <#NT-Name>`__ ``(`` ```S`` <#NT-S>`__ ```` ```Attribute`` <#NT-Attribute>`__ ``)*`` ```S`` <#NT-S>`__ ``? '>'``
               - `[WFC: Unique Att Spec] <#uniqattspec>`__
            - 

               - [41]   
               - ``Attribute``
               -    ::=   
               - ```` ```Name`` <#NT-Name>`__ ```` ```Eq`` <#NT-Eq>`__ ```` ```AttValue`` <#NT-AttValue>`__ ````
               - `[VC: Attribute Value Type] <#ValueType>`__
            - 

               - 
               - 
               - 
               - 
               - `[WFC: No External Entity
                  References] <#NoExternalRefs>`__
            - 

               - 
               - 
               - 
               - 
               - `[WFC: No < in Attribute Values] <#CleanAttrVals>`__

         The `Name <#NT-Name>`__ in the start- and end-tags gives the
         element's **type**. [Definition: The
         `Name <#NT-Name>`__-`AttValue <#NT-AttValue>`__ pairs are
         referred to as the **attribute specifications** of the
         element], [Definition: with the `Name <#NT-Name>`__ in each
         pair referred to as the **attribute name** ] and [Definition:
         the content of the `AttValue <#NT-AttValue>`__ (the text
         between the ``'`` or ``"`` delimiters) as the **attribute
         value**.] Note that the order of attribute specifications in a
         start-tag or empty-element tag is not significant.

         .. container:: constraint

            **Well-formedness constraint: Unique Att Spec**

            An attribute name *MUST NOT* appear more than once in the
            same start-tag or empty-element tag.

         .. container:: constraint

            **Validity constraint: Attribute Value Type**

            The attribute *MUST* have been declared; the value *MUST* be
            of the type declared for it. (For attribute types, see `3.3
            Attribute-List Declarations <#attdecls>`__.)

         .. container:: constraint

            **Well-formedness constraint: No External Entity
            References**

            Attribute values *MUST NOT* contain direct or indirect
            entity references to external entities.

         .. container:: constraint

            **Well-formedness constraint: No ``<`` in Attribute Values**

            The `replacement text <#dt-repltext>`__ of any entity
            referred to directly or indirectly in an attribute value
            *MUST NOT* contain a ``<``.

         An example of a start-tag:

         .. container:: exampleInner

            ::

               <termdef id="dt-dog" term="dog">

         [Definition: The end of every element that begins with a
         start-tag *MUST* be marked by an **end-tag** containing a name
         that echoes the element's type as given in the start-tag:]


/End-tag
========

         .. .. rubric:: End-tag
            :name: end-tag

         .. list-table::

            - 

               - [42]   
               - ``ETag``
               -    ::=   
               - ``'</'`` ```Name`` <#NT-Name>`__ ```` ```S`` <#NT-S>`__ ``? '>'``

         An example of an end-tag:

         .. container:: exampleInner

            ::

               </termdef>

         [Definition: The `text <#dt-text>`__ between the start-tag and
         end-tag is called the element's **content**:]


/Content of Elements
====================

         .. .. rubric:: Content of Elements
            :name: content-of-elements

         .. list-table::

            - 

               - [43]   
               - ``content``
               -    ::=   
               - ```` ```CharData`` <#NT-CharData>`__ ``? ((`` ```element`` <#NT-element>`__ ``|`` ```Reference`` <#NT-Reference>`__ ``|`` ```CDSect`` <#NT-CDSect>`__ ``|`` ```PI`` <#NT-PI>`__ ``|`` ```Comment`` <#NT-Comment>`__ ``)`` ```CharData`` <#NT-CharData>`__ ``?)*``

         [Definition: An element with no `content <#NT-content>`__ is
         said to be **empty**.] The representation of an empty element
         is either a start-tag immediately followed by an end-tag, or an
         empty-element tag. [Definition: An **empty-element tag** takes
         a special form:]


/Tags for Empty Elements
========================

         .. .. rubric:: Tags for Empty Elements
            :name: tags-for-empty-elements

         .. list-table::

            - 

               - [44]   
               - ``EmptyElemTag``
               -    ::=   
               - ``'<'`` ```Name`` <#NT-Name>`__ ``(`` ```S`` <#NT-S>`__ ```` ```Attribute`` <#NT-Attribute>`__ ``)*`` ```S`` <#NT-S>`__ ``? '/>'``
               - `[WFC: Unique Att Spec] <#uniqattspec>`__

         Empty-element tags may be used for any element which has no
         content, whether or not it is declared using the keyword
         **EMPTY**. `For interoperability <#dt-interop>`__, the
         empty-element tag *SHOULD* be used, and *SHOULD* only be used,
         for elements which are declared EMPTY.

         Examples of empty elements:

         .. container:: exampleInner

            ::

               <IMG align="left"
               src="http://www.w3.org/Icons/WWW/w3c_home" />
               <br></br>
               <br/>

      .. container:: div2


/3.2 Element Type Declarations
==============================

         .. .. rubric:: 3.2 Element Type Declarations
            :name: element-type-declarations

         The `element <#dt-element>`__ structure of an `XML
         document <#dt-xml-doc>`__ may, for `validation <#dt-valid>`__
         purposes, be constrained using element type and attribute-list
         declarations. An element type declaration constrains the
         element's `content <#dt-content>`__.

         Element type declarations often constrain which element types
         can appear as `children <#dt-parentchild>`__ of the element. At
         user option, an XML processor *MAY* issue a warning when a
         declaration mentions an element type for which no declaration
         is provided, but this is not an error.

         [Definition: An **element type declaration** takes the form:]


/Element Type Declaration
=========================

         .. .. rubric:: Element Type Declaration
            :name: element-type-declaration

         .. list-table::

            - 

               - [45]   
               - ``elementdecl``
               -    ::=   
               - ``'<!ELEMENT'`` ```S`` <#NT-S>`__ ```` ```Name`` <#NT-Name>`__ ```` ```S`` <#NT-S>`__ ```` ```contentspec`` <#NT-contentspec>`__ ```` ```S`` <#NT-S>`__ ``? '>'``
               - `[VC: Unique Element Type Declaration] <#EDUnique>`__
            - 

               - [46]   
               - ``contentspec``
               -    ::=   
               - ``'EMPTY' | 'ANY' |`` ```Mixed`` <#NT-Mixed>`__ ``|`` ```children`` <#NT-children>`__ ````
               - 

         where the `Name <#NT-Name>`__ gives the element type being
         declared.

         .. container:: constraint

            **Validity constraint: Unique Element Type Declaration**

            An element type *MUST NOT* be declared more than once.

         Examples of element type declarations:

         .. container:: exampleInner

            ::

               <!ELEMENT br EMPTY>
               <!ELEMENT p (#PCDATA|emph)* >
               <!ELEMENT %name.para; %content.para; >
               <!ELEMENT container ANY>

         .. container:: div3


/3.2.1 Element Content
======================

            .. .. rubric:: 3.2.1 Element Content
               :name: element-content

            [Definition: An element `type <#dt-stag>`__ has **element
            content** when elements of that type *MUST* contain only
            `child <#dt-parentchild>`__ elements (no character data),
            optionally separated by white space (characters matching the
            nonterminal `S <#NT-S>`__).] [Definition: In this case, the
            constraint includes a **content model**, a simple grammar
            governing the allowed types of the child elements and the
            order in which they are allowed to appear.] The grammar is
            built on content particles (`cp <#NT-cp>`__ s), which
            consist of names, choice lists of content particles, or
            sequence lists of content particles:


/Element-content Models
=======================

            .. .. rubric:: Element-content Models
               :name: element-content-models

            .. list-table::

               - 

                  - [47]   
                  - ``children``
                  -    ::=   
                  - ``(`` ```choice`` <#NT-choice>`__ ``|`` ```seq`` <#NT-seq>`__ ``) ('?' | '*' | '+')?``
                  - 
               - 

                  - [48]   
                  - ``cp``
                  -    ::=   
                  - ``(`` ```Name`` <#NT-Name>`__ ``|`` ```choice`` <#NT-choice>`__ ``|`` ```seq`` <#NT-seq>`__ ``) ('?' | '*' | '+')?``
                  - 
               - 

                  - [49]   
                  - ``choice``
                  -    ::=   
                  - ``'('`` ```S`` <#NT-S>`__ ``?`` ```cp`` <#NT-cp>`__ ``(`` ```S`` <#NT-S>`__ ``? '|'`` ```S`` <#NT-S>`__ ``?`` ```cp`` <#NT-cp>`__ ``)+`` ```S`` <#NT-S>`__ ``? ')'``
                  - `[VC: Proper Group/PE Nesting] <#vc-PEinGroup>`__
               - 

                  - [50]   
                  - ``seq``
                  -    ::=   
                  - ``'('`` ```S`` <#NT-S>`__ ``?`` ```cp`` <#NT-cp>`__ ``(`` ```S`` <#NT-S>`__ ``? ','`` ```S`` <#NT-S>`__ ``?`` ```cp`` <#NT-cp>`__ ``)*`` ```S`` <#NT-S>`__ ``? ')'``
                  - `[VC: Proper Group/PE Nesting] <#vc-PEinGroup>`__

            where each `Name <#NT-Name>`__ is the type of an element
            which may appear as a `child <#dt-parentchild>`__. Any
            content particle in a choice list may appear in the `element
            content <#dt-elemcontent>`__ at the location where the
            choice list appears in the grammar; content particles
            occurring in a sequence list *MUST* each appear in the
            `element content <#dt-elemcontent>`__ in the order given in
            the list. The optional character following a name or list
            governs whether the element or the content particles in the
            list may occur one or more (``+``), zero or more (``*``), or
            zero or one times (``?``). The absence of such an operator
            means that the element or content particle *MUST* appear
            exactly once. This syntax and meaning are identical to those
            used in the productions in this specification.

            The content of an element matches a content model if and
            only if it is possible to trace out a path through the
            content model, obeying the sequence, choice, and repetition
            operators and matching each element in the content against
            an element type in the content model. `For
            compatibility <#dt-compat>`__, it is an error if the content
            model allows an element to match more than one occurrence of
            an element type in the content model. For more information,
            see `D Deterministic Content Models <#determinism>`__.

            .. container:: constraint

               **Validity constraint: Proper Group/PE Nesting**

               Parameter-entity `replacement text <#dt-repltext>`__
               *MUST* be properly nested with parenthesized groups. That
               is to say, if either of the opening or closing
               parentheses in a `choice <#NT-choice>`__,
               `seq <#NT-seq>`__, or `Mixed <#NT-Mixed>`__ construct is
               contained in the replacement text for a `parameter
               entity <#dt-PERef>`__, both *MUST* be contained in the
               same replacement text.

               `For interoperability <#dt-interop>`__, if a
               parameter-entity reference appears in a
               `choice <#NT-choice>`__, `seq <#NT-seq>`__, or
               `Mixed <#NT-Mixed>`__ construct, its replacement text
               *SHOULD* contain at least one non-blank character, and
               neither the first nor last non-blank character of the
               replacement text *SHOULD* be a connector (``|`` or
               ``,``).

            Examples of element-content models:

            .. container:: exampleInner

               ::

                  <!ELEMENT spec (front, body, back?)>
                  <!ELEMENT div1 (head, (p | list | note)*, div2*)>
                  <!ELEMENT dictionary-body (%div.mix; | %dict.mix;)*>

         .. container:: div3


/3.2.2 Mixed Content
====================

            .. .. rubric:: 3.2.2 Mixed Content
               :name: mixed-content

            [Definition: An element `type <#dt-stag>`__ has **mixed
            content** when elements of that type may contain character
            data, optionally interspersed with
            `child <#dt-parentchild>`__ elements.] In this case, the
            types of the child elements may be constrained, but not
            their order or their number of occurrences:


/Mixed-content Declaration
==========================

            .. .. rubric:: Mixed-content Declaration
               :name: mixed-content-declaration

            .. list-table::

               - 

                  - [51]   
                  - ``Mixed``
                  -    ::=   
                  - ``'('`` ```S`` <#NT-S>`__ ``? '#PCDATA' (`` ```S`` <#NT-S>`__ ``? '|'`` ```S`` <#NT-S>`__ ``?`` ```Name`` <#NT-Name>`__ ``)*`` ```S`` <#NT-S>`__ ``? ')*'``
                  - 
               - 

                  - 
                  - 
                  - 
                  - ``| '('`` ```S`` <#NT-S>`__ ``? '#PCDATA'`` ```S`` <#NT-S>`__ ``? ')'``
                  - `[VC: Proper Group/PE Nesting] <#vc-PEinGroup>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[VC: No Duplicate
                     Types] <#vc-MixedChildrenUnique>`__

            where the `Name <#NT-Name>`__ s give the types of elements
            that may appear as children. The keyword **#PCDATA** derives
            historically from the term "parsed character data."

            .. container:: constraint

               **Validity constraint: No Duplicate Types**

               The same name *MUST NOT* appear more than once in a
               single mixed-content declaration.

            Examples of mixed content declarations:

            .. container:: exampleInner

               ::

                  <!ELEMENT p (#PCDATA|a|ul|b|i|em)*>
                  <!ELEMENT p (#PCDATA | %font; | %phrase; | %special; | %form;)* >
                  <!ELEMENT b (#PCDATA)>

      .. container:: div2


/3.3 Attribute-List Declarations
================================

         .. .. rubric:: 3.3 Attribute-List Declarations
            :name: attribute-list-declarations

         `Attributes <#dt-attr>`__ are used to associate name-value
         pairs with `elements <#dt-element>`__. Attribute specifications
         *MUST NOT* appear outside of `start-tags <#dt-stag>`__ and
         `empty-element tags <#dt-eetag>`__; thus, the productions used
         to recognize them appear in `3.1 Start-Tags, End-Tags, and
         Empty-Element Tags <#sec-starttags>`__. Attribute-list
         declarations may be used:

         -  To define the set of attributes pertaining to a given
            element type.

         -  To establish type constraints for these attributes.

         -  To provide `default values <#dt-default>`__ for attributes.

         [Definition: **Attribute-list declarations** specify the name,
         data type, and default value (if any) of each attribute
         associated with a given element type:]


/Attribute-list Declaration
===========================

         .. .. rubric:: Attribute-list Declaration
            :name: attribute-list-declaration

         .. list-table::

            - 

               - [52]   
               - ``AttlistDecl``
               -    ::=   
               - ``'<!ATTLIST'`` ```S`` <#NT-S>`__ ```` ```Name`` <#NT-Name>`__ ```` ```AttDef`` <#NT-AttDef>`__ ``*`` ```S`` <#NT-S>`__ ``? '>'``
            - 

               - [53]   
               - ``AttDef``
               -    ::=   
               - ```` ```S`` <#NT-S>`__ ```` ```Name`` <#NT-Name>`__ ```` ```S`` <#NT-S>`__ ```` ```AttType`` <#NT-AttType>`__ ```` ```S`` <#NT-S>`__ ```` ```DefaultDecl`` <#NT-DefaultDecl>`__ ````

         The `Name <#NT-Name>`__ in the
         `AttlistDecl <#NT-AttlistDecl>`__ rule is the type of an
         element. At user option, an XML processor *MAY* issue a warning
         if attributes are declared for an element type not itself
         declared, but this is not an error. The `Name <#NT-Name>`__ in
         the `AttDef <#NT-AttDef>`__ rule is the name of the attribute.

         When more than one `AttlistDecl <#NT-AttlistDecl>`__ is
         provided for a given element type, the contents of all those
         provided are merged. When more than one definition is provided
         for the same attribute of a given element type, the first
         declaration is binding and later declarations are ignored. `For
         interoperability, <#dt-interop>`__ writers of DTDs may choose
         to provide at most one attribute-list declaration for a given
         element type, at most one attribute definition for a given
         attribute name in an attribute-list declaration, and at least
         one attribute definition in each attribute-list declaration.
         For interoperability, an XML processor *MAY* at user option
         issue a warning when more than one attribute-list declaration
         is provided for a given element type, or more than one
         attribute definition is provided for a given attribute, but
         this is not an error.

         .. container:: div3


/3.3.1 Attribute Types
======================

            .. .. rubric:: 3.3.1 Attribute Types
               :name: attribute-types

            XML attribute types are of three kinds: a string type, a set
            of tokenized types, and enumerated types. The string type
            may take any literal string as a value; the tokenized types
            are more constrained. The validity constraints noted in the
            grammar are applied after the attribute value has been
            normalized as described in `3.3.3 Attribute-Value
            Normalization <#AVNormalize>`__.


/Attribute Types
================

            .. .. rubric:: Attribute Types
               :name: attribute-types-1

            .. list-table::

               - 

                  - [54]   
                  - ``AttType``
                  -    ::=   
                  - ```` ```StringType`` <#NT-StringType>`__ ``|`` ```TokenizedType`` <#NT-TokenizedType>`__ ``|`` ```EnumeratedType`` <#NT-EnumeratedType>`__ ````
                  - 
               - 

                  - [55]   
                  - ``StringType``
                  -    ::=   
                  - ``'CDATA'``
                  - 
               - 

                  - [56]   
                  - ``TokenizedType``
                  -    ::=   
                  - ``'ID'``
                  - `[VC: ID] <#id>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[VC: One ID per Element Type] <#one-id-per-el>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[VC: ID Attribute Default] <#id-default>`__
               - 

                  - 
                  - 
                  - 
                  - ``| 'IDREF'``
                  - `[VC: IDREF] <#idref>`__
               - 

                  - 
                  - 
                  - 
                  - ``| 'IDREFS'``
                  - `[VC: IDREF] <#idref>`__
               - 

                  - 
                  - 
                  - 
                  - ``| 'ENTITY'``
                  - `[VC: Entity Name] <#entname>`__
               - 

                  - 
                  - 
                  - 
                  - ``| 'ENTITIES'``
                  - `[VC: Entity Name] <#entname>`__
               - 

                  - 
                  - 
                  - 
                  - ``| 'NMTOKEN'``
                  - `[VC: Name Token] <#nmtok>`__
               - 

                  - 
                  - 
                  - 
                  - ``| 'NMTOKENS'``
                  - `[VC: Name Token] <#nmtok>`__

            .. container:: constraint

               **Validity constraint: ID**

               Values of type **ID** *MUST* match the
               `Name <#NT-Name>`__ production. A name *MUST NOT* appear
               more than once in an XML document as a value of this
               type; i.e., ID values *MUST* uniquely identify the
               elements which bear them.

            .. container:: constraint

               **Validity constraint: One ID per Element Type**

               An element type *MUST NOT* have more than one ID
               attribute specified.

            .. container:: constraint

               **Validity constraint: ID Attribute Default**

               An ID attribute *MUST* have a declared default of
               **#IMPLIED** or **#REQUIRED**.

            .. container:: constraint

               **Validity constraint: IDREF**

               Values of type **IDREF** *MUST* match the
               `Name <#NT-Name>`__ production, and values of type
               **IDREFS** *MUST* match `Names <#NT-Names>`__; each
               `Name <#NT-Name>`__ *MUST* match the value of an ID
               attribute on some element in the XML document; i.e.
               **IDREF** values *MUST* match the value of some ID
               attribute.

            .. container:: constraint

               **Validity constraint: Entity Name**

               Values of type **ENTITY** *MUST* match the
               `Name <#NT-Name>`__ production, values of type
               **ENTITIES** *MUST* match `Names <#NT-Names>`__; each
               `Name <#NT-Name>`__ *MUST* match the name of an `unparsed
               entity <#dt-unparsed>`__ declared in the
               `DTD <#dt-doctype>`__.

            .. container:: constraint

               **Validity constraint: Name Token**

               Values of type **NMTOKEN** *MUST* match the
               `Nmtoken <#NT-Nmtoken>`__ production; values of type
               **NMTOKENS** *MUST* match `Nmtokens <#NT-Nmtokens>`__.

            [Definition: **Enumerated attributes** have a list of
            allowed values in their declaration ]. They *MUST* take one
            of those values. There are two kinds of enumerated attribute
            types:


/Enumerated Attribute Types
===========================

            .. .. rubric:: Enumerated Attribute Types
               :name: enumerated-attribute-types

            .. list-table::

               - 

                  - [57]   
                  - ``EnumeratedType``
                  -    ::=   
                  - ```` ```NotationType`` <#NT-NotationType>`__ ``|`` ```Enumeration`` <#NT-Enumeration>`__ ````
                  - 
               - 

                  - [58]   
                  - ``NotationType``
                  -    ::=   
                  - ``'NOTATION'`` ```S`` <#NT-S>`__ ``'('`` ```S`` <#NT-S>`__ ``?`` ```Name`` <#NT-Name>`__ ``(`` ```S`` <#NT-S>`__ ``? '|'`` ```S`` <#NT-S>`__ ``?`` ```Name`` <#NT-Name>`__ ``)*`` ```S`` <#NT-S>`__ ``? ')'``
                  - `[VC: Notation Attributes] <#notatn>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[VC: One Notation Per Element
                     Type] <#OneNotationPer>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[VC: No Notation on Empty
                     Element] <#NoNotationEmpty>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[VC: No Duplicate Tokens] <#NoDuplicateTokens>`__
               - 

                  - [59]   
                  - ``Enumeration``
                  -    ::=   
                  - ``'('`` ```S`` <#NT-S>`__ ``?`` ```Nmtoken`` <#NT-Nmtoken>`__ ``(`` ```S`` <#NT-S>`__ ``? '|'`` ```S`` <#NT-S>`__ ``?`` ```Nmtoken`` <#NT-Nmtoken>`__ ``)*`` ```S`` <#NT-S>`__ ``? ')'``
                  - `[VC: Enumeration] <#enum>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[VC: No Duplicate Tokens] <#NoDuplicateTokens>`__

            A **NOTATION** attribute identifies a
            `notation <#dt-notation>`__, declared in the DTD with
            associated system and/or public identifiers, to be used in
            interpreting the element to which the attribute is attached.

            .. container:: constraint

               **Validity constraint: Notation Attributes**

               Values of this type *MUST* match one of the
               `notation <#Notations>`__ names included in the
               declaration; all notation names in the declaration *MUST*
               be declared.

            .. container:: constraint

               **Validity constraint: One Notation Per Element Type**

               An element type *MUST NOT* have more than one
               **NOTATION** attribute specified.

            .. container:: constraint

               **Validity constraint: No Notation on Empty Element**

               `For compatibility <#dt-compat>`__, an attribute of type
               **NOTATION** *MUST NOT* be declared on an element
               declared **EMPTY**.

            .. container:: constraint

               **Validity constraint: No Duplicate Tokens**

               The notation names in a single
               `NotationType <#NT-NotationType>`__ attribute
               declaration, as well as the `NmToken <#NT-Nmtoken>`__ s
               in a single `Enumeration <#NT-Enumeration>`__ attribute
               declaration, *MUST* all be distinct.

            .. container:: constraint

               **Validity constraint: Enumeration**

               Values of this type *MUST* match one of the
               `Nmtoken <#NT-Nmtoken>`__ tokens in the declaration.

            `For interoperability, <#dt-interop>`__ the same
            `Nmtoken <#NT-Nmtoken>`__ *SHOULD NOT* occur more than once
            in the enumerated attribute types of a single element type.

         .. container:: div3


/3.3.2 Attribute Defaults
=========================

            .. .. rubric:: 3.3.2 Attribute Defaults
               :name: attribute-defaults

            An `attribute declaration <#dt-attdecl>`__ provides
            information on whether the attribute's presence is
            *REQUIRED*, and if not, how an XML processor is to react if
            a declared attribute is absent in a document.


/Attribute Defaults
===================

            .. .. rubric:: Attribute Defaults
               :name: attribute-defaults-1

            .. list-table::

               - 

                  - [60]   
                  - ``DefaultDecl``
                  -    ::=   
                  - ``'#REQUIRED' | '#IMPLIED'``
                  - 
               - 

                  - 
                  - 
                  - 
                  - ``| (('#FIXED'`` ```S`` <#NT-S>`__ ``)?`` ```AttValue`` <#NT-AttValue>`__ ``)``
                  - `[VC: Required Attribute] <#RequiredAttr>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[VC: Attribute Default Value Syntactically
                     Correct] <#defattrvalid>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[WFC: No < in Attribute Values] <#CleanAttrVals>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[VC: Fixed Attribute Default] <#FixedAttr>`__
               - 

                  - 
                  - 
                  - 
                  - 
                  - `[WFC: No External Entity
                     References] <#NoExternalRefs>`__

            In an attribute declaration, **#REQUIRED** means that the
            attribute *MUST* always be provided, **#IMPLIED** that no
            default value is provided. [Definition: If the declaration
            is neither **#REQUIRED** nor **#IMPLIED**, then the
            `AttValue <#NT-AttValue>`__ value contains the declared
            **default** value; the **#FIXED** keyword states that the
            attribute *MUST* always have the default value. When an XML
            processor encounters an element without a specification for
            an attribute for which it has read a default value
            declaration, it *MUST* report the attribute with the
            declared default value to the application.]

            .. container:: constraint

               **Validity constraint: Required Attribute**

               If the default declaration is the keyword **#REQUIRED**,
               then the attribute *MUST* be specified for all elements
               of the type in the attribute-list declaration.

            .. container:: constraint

               **Validity constraint: Attribute Default Value
               Syntactically Correct**

               The declared default value *MUST* meet the syntactic
               constraints of the declared attribute type. That is, the
               default value of an attribute:

               -  of type IDREF or ENTITY must match the
                  `Name <#NT-Name>`__ production;

               -  of type IDREFS or ENTITIES must match the
                  `Names <#NT-Names>`__ production;

               -  of type NMTOKEN must match the
                  `Nmtoken <#NT-Nmtoken>`__ production;

               -  of type NMTOKENS must match the
                  `Nmtokens <#NT-Nmtokens>`__ production;

               -  of an `enumerated type <#NT-EnumeratedType>`__ (either
                  a `NOTATION <#NT-NotationType>`__ type or an
                  `enumeration <#NT-Enumeration>`__) must match one of
                  the enumerated values.

               Note that only the syntactic constraints of the type are
               required here; other constraints (e.g. that the value be
               the name of a declared unparsed entity, for an attribute
               of type ENTITY) will be reported by a validating parser
               only if an element without a specification for this
               attribute actually occurs.

            .. container:: constraint

               **Validity constraint: Fixed Attribute Default**

               If an attribute has a default value declared with the
               **#FIXED** keyword, instances of that attribute *MUST*
               match the default value.

            Examples of attribute-list declarations:

            .. container:: exampleInner

               ::

                  <!ATTLIST termdef
                  id      ID      #REQUIRED
                  name    CDATA   #IMPLIED>
                  <!ATTLIST list
                  type    (bullets|ordered|glossary)  "ordered">
                  <!ATTLIST form
                  method  CDATA   #FIXED "POST">

         .. container:: div3


/3.3.3 Attribute-Value Normalization
====================================

            .. .. rubric:: 3.3.3 Attribute-Value Normalization
               :name: attribute-value-normalization

            Before the value of an attribute is passed to the
            application or checked for validity, the XML processor
            *MUST* normalize the attribute value by applying the
            algorithm below, or by using some other method such that the
            value passed to the application is the same as that produced
            by the algorithm.

            #. All line breaks *MUST* have been normalized on input to
               #xA as described in `2.11 End-of-Line
               Handling <#sec-line-ends>`__, so the rest of this
               algorithm operates on text normalized in this way.

            #. Begin with a normalized value consisting of the empty
               string.

            #. For each character, entity reference, or character
               reference in the unnormalized attribute value, beginning
               with the first and continuing to the last, do the
               following:

               -  For a character reference, append the referenced
                  character to the normalized value.

               -  For an entity reference, recursively apply step 3 of
                  this algorithm to the replacement text of the entity.

               -  For a white space character (#x20, #xD, #xA, #x9),
                  append a space character (#x20) to the normalized
                  value.

               -  For another character, append the character to the
                  normalized value.

            If the attribute type is not CDATA, then the XML processor
            *MUST* further process the normalized attribute value by
            discarding any leading and trailing space (#x20) characters,
            and by replacing sequences of space (#x20) characters by a
            single space (#x20) character.

            Note that if the unnormalized attribute value contains a
            character reference to a white space character other than
            space (#x20), the normalized value contains the referenced
            character itself (#xD, #xA or #x9). This contrasts with the
            case where the unnormalized value contains a white space
            character (not a reference), which is replaced with a space
            character (#x20) in the normalized value and also contrasts
            with the case where the unnormalized value contains an
            entity reference whose replacement text contains a white
            space character; being recursively processed, the white
            space character is replaced with a space character (#x20) in
            the normalized value.

            All attributes for which no declaration has been read
            *SHOULD* be treated by a non-validating processor as if
            declared **CDATA**.

            It is an error if an `attribute value <#dt-attrval>`__
            contains a `reference <#dt-entref>`__ to an entity for which
            no declaration has been read.

            Following are examples of attribute normalization. Given the
            following declarations:

            .. container:: exampleInner

               ::

                  <!ENTITY d "&#xD;">
                  <!ENTITY a "&#xA;">
                  <!ENTITY da "&#xD;&#xA;">

            the attribute specifications in the left column below would
            be normalized to the character sequences of the middle
            column if the attribute ``a`` is declared **NMTOKENS** and
            to those of the right columns if ``a`` is declared
            **CDATA**.

            .. list-table::
               :widths: 24 24 24
               :header-rows: 1

               - 

                  - Attribute specification
                  - a is NMTOKENS
                  - a is CDATA
               - 

                  - 

                     .. container:: exampleInner

                        ::

                           a="
                           xyz"
                  - 

                     .. container:: exampleInner

                        ::

                           x y z
                  - 

                     .. container:: exampleInner

                        ::

                           #x20 #x20 x y z
               - 

                  - 

                     .. container:: exampleInner

                        ::

                           a="&d;&d;A&a;&#x20;&a;B&da;"
                  - 

                     .. container:: exampleInner

                        ::

                           A #x20 B
                  - 

                     .. container:: exampleInner

                        ::

                           #x20 #x20 A #x20 #x20 #x20 B #x20 #x20
               - 

                  - 

                     .. container:: exampleInner

                        ::

                           a=
                           "&#xd;&#xd;A&#xa;&#xa;B&#xd;&#xa;"
                  - 

                     .. container:: exampleInner

                        ::

                           #xD #xD A #xA #xA B #xD #xA
                  - 

                     .. container:: exampleInner

                        ::

                           #xD #xD A #xA #xA B #xD #xA

            Note that the last example is invalid (but well-formed) if
            ``a`` is declared to be of type **NMTOKENS**.

      .. container:: div2


/3.4 Conditional Sections
=========================

         .. .. rubric:: 3.4 Conditional Sections
            :name: conditional-sections

         [Definition: **Conditional sections** are portions of the
         `document type declaration external subset <#dt-doctype>`__ or
         of external parameter entities which are included in, or
         excluded from, the logical structure of the DTD based on the
         keyword which governs them.]


/Conditional Section
====================

         .. .. rubric:: Conditional Section
            :name: conditional-section

         .. list-table::

            - 

               - [61]   
               - ``conditionalSect``
               -    ::=   
               - ```` ```includeSect`` <#NT-includeSect>`__ ``|`` ```ignoreSect`` <#NT-ignoreSect>`__ ````
               - 
            - 

               - [62]   
               - ``includeSect``
               -    ::=   
               - ``'<!['`` ```S`` <#NT-S>`__ ``? 'INCLUDE'`` ```S`` <#NT-S>`__ ``? '['`` ```extSubsetDecl`` <#NT-extSubsetDecl>`__ ``']]>'``
               - `[VC: Proper Conditional Section/PE
                  Nesting] <#condsec-nesting>`__
            - 

               - [63]   
               - ``ignoreSect``
               -    ::=   
               - ``'<!['`` ```S`` <#NT-S>`__ ``? 'IGNORE'`` ```S`` <#NT-S>`__ ``? '['`` ```ignoreSectContents`` <#NT-ignoreSectContents>`__ ``* ']]>'``
               - `[VC: Proper Conditional Section/PE
                  Nesting] <#condsec-nesting>`__
            - 

               - [64]   
               - ``ignoreSectContents``
               -    ::=   
               - ```` ```Ignore`` <#NT-Ignore>`__ ``('<!['`` ```ignoreSectContents`` <#NT-ignoreSectContents>`__ ``']]>'`` ```Ignore`` <#NT-Ignore>`__ ``)*``
               - 
            - 

               - [65]   
               - ``Ignore``
               -    ::=   
               - ```` ```Char`` <#NT-Char>`__ ``* - (`` ```Char`` <#NT-Char>`__ ``* ('<![' | ']]>')`` ```Char`` <#NT-Char>`__ ``*)``
               - 

         .. container:: constraint

            **Validity constraint: Proper Conditional Section/PE
            Nesting**

            If any of the "``<![``", "``[``", or "``]]>``" of a
            conditional section is contained in the replacement text for
            a parameter-entity reference, all of them *MUST* be
            contained in the same replacement text.

         Like the internal and external DTD subsets, a conditional
         section may contain one or more complete declarations,
         comments, processing instructions, or nested conditional
         sections, intermingled with white space.

         If the keyword of the conditional section is **INCLUDE**, then
         the contents of the conditional section *MUST* be processed as
         part of the DTD. If the keyword of the conditional section is
         **IGNORE**, then the contents of the conditional section *MUST*
         *NOT* be processed as part of the DTD. If a conditional section
         with a keyword of **INCLUDE** occurs within a larger
         conditional section with a keyword of **IGNORE**, both the
         outer and the inner conditional sections *MUST* be ignored. The
         contents of an ignored conditional section *MUST* be parsed by
         ignoring all characters after the "``[``" following the
         keyword, except conditional section starts "``<![``" and ends
         "``]]>``", until the matching conditional section end is found.
         Parameter entity references *MUST NOT* be recognized in this
         process.

         If the keyword of the conditional section is a parameter-entity
         reference, the parameter entity *MUST* be replaced by its
         content before the processor decides whether to include or
         ignore the conditional section.

         An example:

         .. container:: exampleInner

            ::

               <!ENTITY % draft 'INCLUDE' >
               <!ENTITY % final 'IGNORE' >
               <![%draft;[
               <!ELEMENT book (comments*, title, body, supplements?)>
               ]]>
               <![%final;[
               <!ELEMENT book (title, body, supplements?)>
               ]]>

   .. container:: div1


/4 Physical Structures
======================

      .. .. rubric:: 4 Physical Structures
         :name: physical-structures

      [Definition: An XML document may consist of one or many storage
      units. These are called **entities**; they all have **content**
      and are all (except for the `document entity <#dt-docent>`__ and
      the `external DTD subset <#dt-doctype>`__) identified by entity
      **name**.] Each XML document has one entity called the `document
      entity <#dt-docent>`__, which serves as the starting point for the
      `XML processor <#dt-xml-proc>`__ and may contain the whole
      document.

      Entities may be either parsed or unparsed. [Definition: The
      contents of a **parsed entity** are referred to as its
      `replacement text <#dt-repltext>`__; this `text <#dt-text>`__ is
      considered an integral part of the document.]

      [Definition: An **unparsed entity** is a resource whose contents
      may or may not be `text <#dt-text>`__, and if text, may be other
      than XML. Each unparsed entity has an associated
      `notation <#dt-notation>`__, identified by name. Beyond a
      requirement that an XML processor make the identifiers for the
      entity and notation available to the application, XML places no
      constraints on the contents of unparsed entities.]

      Parsed entities are invoked by name using entity references;
      unparsed entities by name, given in the value of **ENTITY** or
      **ENTITIES** attributes.

      [Definition: **General entities** are entities for use within the
      document content. In this specification, general entities are
      sometimes referred to with the unqualified term *entity* when this
      leads to no ambiguity.] [Definition: **Parameter entities** are
      parsed entities for use within the DTD.] These two types of
      entities use different forms of reference and are recognized in
      different contexts. Furthermore, they occupy different namespaces;
      a parameter entity and a general entity with the same name are two
      distinct entities.

      .. container:: div2


/4.1 Character and Entity References
====================================

         .. .. rubric:: 4.1 Character and Entity References
            :name: character-and-entity-references

         [Definition: A **character reference** refers to a specific
         character in the ISO/IEC 10646 character set, for example one
         not directly accessible from available input devices.]


/Character Reference
====================

         .. .. rubric:: Character Reference
            :name: character-reference

         .. list-table::

            - 

               - [66]   
               - ``CharRef``
               -    ::=   
               - ``'&#' [0-9]+ ';'``
               - 
            - 

               - 
               - 
               - 
               - ``| '&#x' [0-9a-fA-F]+ ';'``
               - `[WFC: Legal Character] <#wf-Legalchar>`__

         .. container:: constraint

            **Well-formedness constraint: Legal Character**

            Characters referred to using character references *MUST*
            match the production for `Char <#NT-Char>`__.

         If the character reference begins with "``&#x``", the digits
         and letters up to the terminating ``;`` provide a hexadecimal
         representation of the character's code point in ISO/IEC 10646.
         If it begins just with "``&#``", the digits up to the
         terminating ``;`` provide a decimal representation of the
         character's code point.

         [Definition: An **entity reference** refers to the content of a
         named entity.] [Definition: References to parsed general
         entities use ampersand (``&``) and semicolon (``;``) as
         delimiters.] [Definition: **Parameter-entity references** use
         percent-sign (``%``) and semicolon (``;``) as delimiters.]


/Entity Reference
=================

         .. .. rubric:: Entity Reference
            :name: entity-reference

         .. list-table::

            - 

               - [67]   
               - ``Reference``
               -    ::=   
               - ```` ```EntityRef`` <#NT-EntityRef>`__ ``|`` ```CharRef`` <#NT-CharRef>`__ ````
               - 
            - 

               - [68]   
               - ``EntityRef``
               -    ::=   
               - ``'&'`` ```Name`` <#NT-Name>`__ ``';'``
               - `[WFC: Entity Declared] <#wf-entdeclared>`__
            - 

               - 
               - 
               - 
               - 
               - `[VC: Entity Declared] <#vc-entdeclared>`__
            - 

               - 
               - 
               - 
               - 
               - `[WFC: Parsed Entity] <#textent>`__
            - 

               - 
               - 
               - 
               - 
               - `[WFC: No Recursion] <#norecursion>`__
            - 

               - [69]   
               - ``PEReference``
               -    ::=   
               - ``'%'`` ```Name`` <#NT-Name>`__ ``';'``
               - `[VC: Entity Declared] <#vc-entdeclared>`__
            - 

               - 
               - 
               - 
               - 
               - `[WFC: No Recursion] <#norecursion>`__
            - 

               - 
               - 
               - 
               - 
               - `[WFC: In DTD] <#indtd>`__

         .. container:: constraint

            **Well-formedness constraint: Entity Declared**

            In a document without any DTD, a document with only an
            internal DTD subset which contains no parameter entity
            references, or a document with "``standalone='yes'``", for
            an entity reference that does not occur within the external
            subset or a parameter entity, the `Name <#NT-Name>`__ given
            in the entity reference *MUST* `match <#dt-match>`__ that in
            an `entity declaration <#sec-entity-decl>`__ that does not
            occur within the external subset or a parameter entity,
            except that well-formed documents need not declare any of
            the following entities: ``amp``, ``lt``, ``gt``, ``apos``,
            ``quot``. The declaration of a general entity *MUST* precede
            any reference to it which appears in a default value in an
            attribute-list declaration.

            Note that non-validating processors are `not obligated
            to <#include-if-valid>`__ to read and process entity
            declarations occurring in parameter entities or in the
            external subset; for such documents, the rule that an entity
            must be declared is a well-formedness constraint only if
            `standalone='yes' <#sec-rmd>`__.

         .. container:: constraint

            **Validity constraint: Entity Declared**

            In a document with an external subset or parameter entity
            references with "``standalone='no'``", the
            `Name <#NT-Name>`__ given in the entity reference *MUST*
            `match <#dt-match>`__ that in an `entity
            declaration <#sec-entity-decl>`__. For interoperability,
            valid documents *SHOULD* declare the entities ``amp``,
            ``lt``, ``gt``, ``apos``, ``quot``, in the form specified in
            `4.6 Predefined Entities <#sec-predefined-ent>`__. The
            declaration of a parameter entity *MUST* precede any
            reference to it. Similarly, the declaration of a general
            entity *MUST* precede any attribute-list declaration
            containing a default value with a direct or indirect
            reference to that general entity.

         .. container:: constraint

            **Well-formedness constraint: Parsed Entity**

            An entity reference *MUST NOT* contain the name of an
            `unparsed entity <#dt-unparsed>`__. Unparsed entities may be
            referred to only in `attribute values <#dt-attrval>`__
            declared to be of type **ENTITY** or **ENTITIES**.

         .. container:: constraint

            **Well-formedness constraint: No Recursion**

            A parsed entity *MUST NOT* contain a recursive reference to
            itself, either directly or indirectly.

         .. container:: constraint

            **Well-formedness constraint: In DTD**

            Parameter-entity references *MUST NOT* appear outside the
            `DTD <#dt-doctype>`__.

         Examples of character and entity references:

         .. container:: exampleInner

            ::

               Type <key>less-than</key> (&#x3C;) to save options.
               This document was prepared on &docdate; and
               is classified &security-level;.

         Example of a parameter-entity reference:

         .. container:: exampleInner

            ::

               <!-- declare the parameter entity "ISOLat2"... -->
               <!ENTITY % ISOLat2
               SYSTEM "http://www.xml.com/iso/isolat2-xml.entities" >
               <!-- ... now reference it. -->
               %ISOLat2;

      .. container:: div2


/4.2 Entity Declarations
========================

         .. .. rubric:: 4.2 Entity Declarations
            :name: entity-declarations

         [Definition: Entities are declared thus:]


/Entity Declaration
===================

         .. .. rubric:: Entity Declaration
            :name: entity-declaration

         .. list-table::

            - 

               - [70]   
               - ``EntityDecl``
               -    ::=   
               - ```` ```GEDecl`` <#NT-GEDecl>`__ ``|`` ```PEDecl`` <#NT-PEDecl>`__ ````
            - 

               - [71]   
               - ``GEDecl``
               -    ::=   
               - ``'<!ENTITY'`` ```S`` <#NT-S>`__ ```` ```Name`` <#NT-Name>`__ ```` ```S`` <#NT-S>`__ ```` ```EntityDef`` <#NT-EntityDef>`__ ```` ```S`` <#NT-S>`__ ``? '>'``
            - 

               - [72]   
               - ``PEDecl``
               -    ::=   
               - ``'<!ENTITY'`` ```S`` <#NT-S>`__ ``'%'`` ```S`` <#NT-S>`__ ```` ```Name`` <#NT-Name>`__ ```` ```S`` <#NT-S>`__ ```` ```PEDef`` <#NT-PEDef>`__ ```` ```S`` <#NT-S>`__ ``? '>'``
            - 

               - [73]   
               - ``EntityDef``
               -    ::=   
               - ```` ```EntityValue`` <#NT-EntityValue>`__ ``| (`` ```ExternalID`` <#NT-ExternalID>`__ ```` ```NDataDecl`` <#NT-NDataDecl>`__ ``?)``
            - 

               - [74]   
               - ``PEDef``
               -    ::=   
               - ```` ```EntityValue`` <#NT-EntityValue>`__ ``|`` ```ExternalID`` <#NT-ExternalID>`__ ````

         The `Name <#NT-Name>`__ identifies the entity in an `entity
         reference <#dt-entref>`__ or, in the case of an unparsed
         entity, in the value of an **ENTITY** or **ENTITIES**
         attribute. If the same entity is declared more than once, the
         first declaration encountered is binding; at user option, an
         XML processor *MAY* issue a warning if entities are declared
         multiple times.

         .. container:: div3


/4.2.1 Internal Entities
========================

            .. .. rubric:: 4.2.1 Internal Entities
               :name: internal-entities

            [Definition: If the entity definition is an
            `EntityValue <#NT-EntityValue>`__, the defined entity is
            called an **internal entity**. There is no separate physical
            storage object, and the content of the entity is given in
            the declaration.] Note that some processing of entity and
            character references in the `literal entity
            value <#dt-litentval>`__ may be required to produce the
            correct `replacement text <#dt-repltext>`__: see `4.5
            Construction of Entity Replacement
            Text <#intern-replacement>`__.

            An internal entity is a `parsed entity <#dt-parsedent>`__.

            Example of an internal entity declaration:

            .. container:: exampleInner

               ::

                  <!ENTITY Pub-Status "This is a pre-release of the
                  specification.">

         .. container:: div3


/4.2.2 External Entities
========================

            .. .. rubric:: 4.2.2 External Entities
               :name: external-entities

            [Definition: If the entity is not internal, it is an
            **external entity**, declared as follows:]


/External Entity Declaration
============================

            .. .. rubric:: External Entity Declaration
               :name: external-entity-declaration

            .. list-table::

               - 

                  - [75]   
                  - ``ExternalID``
                  -    ::=   
                  - ``'SYSTEM'`` ```S`` <#NT-S>`__ ```` ```SystemLiteral`` <#NT-SystemLiteral>`__ ````
                  - 
               - 

                  - 
                  - 
                  - 
                  - ``| 'PUBLIC'`` ```S`` <#NT-S>`__ ```` ```PubidLiteral`` <#NT-PubidLiteral>`__ ```` ```S`` <#NT-S>`__ ```` ```SystemLiteral`` <#NT-SystemLiteral>`__ ````
                  - 
               - 

                  - [76]   
                  - ``NDataDecl``
                  -    ::=   
                  - ```` ```S`` <#NT-S>`__ ``'NDATA'`` ```S`` <#NT-S>`__ ```` ```Name`` <#NT-Name>`__ ````
                  - `[VC: Notation Declared] <#not-declared>`__

            If the `NDataDecl <#NT-NDataDecl>`__ is present, this is a
            general `unparsed entity <#dt-unparsed>`__; otherwise it is
            a parsed entity.

            .. container:: constraint

               **Validity constraint: Notation Declared**

               The `Name <#NT-Name>`__ *MUST* match the declared name of
               a `notation <#dt-notation>`__.

            [Definition: The `SystemLiteral <#NT-SystemLiteral>`__ is
            called the entity's **system identifier**. It is meant to be
            converted to a URI reference (as defined in `[IETF RFC
            3986] <#rfc3986>`__), as part of the process of
            dereferencing it to obtain input for the XML processor to
            construct the entity's replacement text.] It is an error for
            a fragment identifier (beginning with a ``#`` character) to
            be part of a system identifier. Unless otherwise provided by
            information outside the scope of this specification (e.g. a
            special XML element type defined by a particular DTD, or a
            processing instruction defined by a particular application
            specification), relative URIs are relative to the location
            of the resource within which the entity declaration occurs.
            This is defined to be the external entity containing the '<'
            which starts the declaration, at the point when it is parsed
            as a declaration. A URI might thus be relative to the
            `document entity <#dt-docent>`__, to the entity containing
            the `external DTD subset <#dt-doctype>`__, or to some other
            `external parameter entity <#dt-extent>`__. Attempts to
            retrieve the resource identified by a URI may be redirected
            at the parser level (for example, in an entity resolver) or
            below (at the protocol level, for example, via an HTTP
            ``Location:`` header). In the absence of additional
            information outside the scope of this specification within
            the resource, the base URI of a resource is always the URI
            of the actual resource returned. In other words, it is the
            URI of the resource retrieved after all redirection has
            occurred.

            System identifiers (and other XML strings meant to be used
            as URI references) may contain characters that, according to
            `[IETF RFC 3986] <#rfc3986>`__, must be escaped before a URI
            can be used to retrieve the referenced resource. The
            characters to be escaped are the control characters #x0 to
            #x1F and #x7F (most of which cannot appear in XML), space
            #x20, the delimiters '<' #x3C, '>' #x3E and '"' #x22, the
            *unwise* characters '{' #x7B, '}' #x7D, '\|' #x7C, '\\'
            #x5C, '^' #x5E and '\`' #x60, as well as all characters
            above #x7F. Since escaping is not always a fully reversible
            process, it *MUST* be performed only when absolutely
            necessary and as late as possible in a processing chain. In
            particular, neither the process of converting a relative URI
            to an absolute one nor the process of passing a URI
            reference to a process or software component responsible for
            dereferencing it *SHOULD* trigger escaping. When escaping
            does occur, it *MUST* be performed as follows:

            #. Each character to be escaped is represented in UTF-8
               `[Unicode] <#Unicode>`__ as one or more bytes.

            #. The resulting bytes are escaped with the URI escaping
               mechanism (that is, converted to ``%`` ``HH``, where HH
               is the hexadecimal notation of the byte value).

            #. The original character is replaced by the resulting
               character sequence.

            [Definition: In addition to a system identifier, an external
            identifier may include a **public identifier**.] An XML
            processor attempting to retrieve the entity's content may
            use any combination of the public and system identifiers as
            well as additional information outside the scope of this
            specification to try to generate an alternative URI
            reference. If the processor is unable to do so, it *MUST*
            use the URI reference specified in the system literal.
            Before a match is attempted, all strings of white space in
            the public identifier *MUST* be normalized to single space
            characters (#x20), and leading and trailing white space
            *MUST* be removed.

            Examples of external entity declarations:

            .. container:: exampleInner

               ::

                  <!ENTITY open-hatch
                  SYSTEM "http://www.textuality.com/boilerplate/OpenHatch.xml">
                  <!ENTITY open-hatch
                  PUBLIC "-//Textuality//TEXT Standard open-hatch boilerplate//EN"
                  "http://www.textuality.com/boilerplate/OpenHatch.xml">
                  <!ENTITY hatch-pic
                  SYSTEM "../grafix/OpenHatch.gif"
                  NDATA gif >

      .. container:: div2


/4.3 Parsed Entities
====================

         .. .. rubric:: 4.3 Parsed Entities
            :name: parsed-entities

         .. container:: div3


/4.3.1 The Text Declaration
===========================

            .. .. rubric:: 4.3.1 The Text Declaration
               :name: the-text-declaration

            External parsed entities *SHOULD* each begin with a **text
            declaration**.


/Text Declaration
=================

            .. .. rubric:: Text Declaration
               :name: text-declaration

            .. list-table::

               - 

                  - [77]   
                  - ``TextDecl``
                  -    ::=   
                  - ``'<?xml'`` ```VersionInfo`` <#NT-VersionInfo>`__ ``?`` ```EncodingDecl`` <#NT-EncodingDecl>`__ ```` ```S`` <#NT-S>`__ ``? '?>'``

            The text declaration *MUST* be provided literally, not by
            reference to a parsed entity. The text declaration *MUST
            NOT* appear at any position other than the beginning of an
            external parsed entity. The text declaration in an external
            parsed entity is not considered part of its `replacement
            text <#dt-repltext>`__.

         .. container:: div3


/4.3.2 Well-Formed Parsed Entities
==================================

            .. .. rubric:: 4.3.2 Well-Formed Parsed Entities
               :name: well-formed-parsed-entities

            The document entity is well-formed if it matches the
            production labeled `document <#NT-document>`__. An external
            general parsed entity is well-formed if it matches the
            production labeled `extParsedEnt <#NT-extParsedEnt>`__. All
            external parameter entities are well-formed by definition.

            .. note::

               **Note:**

               Only parsed entities that are referenced directly or
               indirectly within the document are required to be
               well-formed.


/Well-Formed External Parsed Entity
===================================

            .. .. rubric:: Well-Formed External Parsed Entity
               :name: well-formed-external-parsed-entity

            .. list-table::

               - 

                  - [78]   
                  - ``extParsedEnt``
                  -    ::=   
                  - ```` ``(`` ```` ```TextDecl`` <#NT-TextDecl>`__ ``?`` ```content`` <#NT-content>`__ ```` ``)`` ``-`` ``(`` ```` ```Char`` <#NT-Char>`__ ``*`` ```RestrictedChar`` <#NT-RestrictedChar>`__ ```` ```Char`` <#NT-Char>`__ ``*`` ``)`` ````

            An internal general parsed entity is well-formed if its
            replacement text matches the production labeled
            `content <#NT-content>`__. All internal parameter entities
            are well-formed by definition.

            A consequence of well-formedness in general entities is that
            the logical and physical structures in an XML document are
            properly nested; no `start-tag <#dt-stag>`__,
            `end-tag <#dt-etag>`__, `empty-element tag <#dt-empty>`__,
            `element <#dt-element>`__, `comment <#dt-comment>`__,
            `processing instruction <#dt-pi>`__, `character
            reference <#dt-charref>`__, or `entity
            reference <#dt-entref>`__ can begin in one entity and end in
            another.

         .. container:: div3


/4.3.3 Character Encoding in Entities
=====================================

            .. .. rubric:: 4.3.3 Character Encoding in Entities
               :name: character-encoding-in-entities

            Each external parsed entity in an XML document may use a
            different encoding for its characters. All XML processors
            *MUST* be able to read entities in both the UTF-8 and UTF-16
            encodings. The terms "UTF-8" and "UTF-16" in this
            specification do not apply to character encodings with any
            other labels, even if the encodings or labels are very
            similar to UTF-8 or UTF-16.

            Entities encoded in UTF-16 *MUST* and entities encoded in
            UTF-8 *MAY* begin with the Byte Order Mark described in
            ISO/IEC 10646 `[ISO/IEC 10646] <#ISO10646>`__ or Unicode
            `[Unicode] <#Unicode>`__ (the ZERO WIDTH NO-BREAK SPACE
            character, #xFEFF). This is an encoding signature, not part
            of either the markup or the character data of the XML
            document. XML processors *MUST* be able to use this
            character to differentiate between UTF-8 and UTF-16 encoded
            documents.

            Although an XML processor is required to read only entities
            in the UTF-8 and UTF-16 encodings, it is recognized that
            other encodings are used around the world, and it may be
            desired for XML processors to read entities that use them.
            In the absence of external character encoding information
            (such as MIME headers), parsed entities which are stored in
            an encoding other than UTF-8 or UTF-16 *MUST* begin with a
            text declaration (see `4.3.1 The Text
            Declaration <#sec-TextDecl>`__) containing an encoding
            declaration:


/Encoding Declaration
=====================

            .. .. rubric:: Encoding Declaration
               :name: encoding-declaration

            .. list-table::

               - 

                  - [80]   
                  - ``EncodingDecl``
                  -    ::=   
                  - ```` ```S`` <#NT-S>`__ ``'encoding'`` ```Eq`` <#NT-Eq>`__ ``('"'`` ```EncName`` <#NT-EncName>`__ ``'"' | "'"`` ```EncName`` <#NT-EncName>`__ ``"'" )``
                  - 
               - 

                  - [81]   
                  - ``EncName``
                  -    ::=   
                  - ``[A-Za-z] ([A-Za-z0-9._] | '-')*``
                  - */\* Encoding name contains only Latin characters
                     \*/*

            In the `document entity <#dt-docent>`__, the encoding
            declaration is part of the `XML
            declaration <#dt-xmldecl>`__. The `EncName <#NT-EncName>`__
            is the name of the encoding used.

            In an encoding declaration, the values "``UTF-8``",
            "``UTF-16``", "``ISO-10646-UCS-2``", and
            "``ISO-10646-UCS-4``" *SHOULD* be used for the various
            encodings and transformations of Unicode / ISO/IEC 10646,
            the values "``ISO-8859-1``", "``ISO-8859-2``", ...
            "``ISO-8859-`` ``n``" (where ``n`` is the part number)
            *SHOULD* be used for the parts of ISO 8859, and the values
            "``ISO-2022-JP``", "``Shift_JIS``", and "``EUC-JP``"
            *SHOULD* be used for the various encoded forms of JIS
            X-0208-1997. It is *RECOMMENDED* that character encodings
            registered (as *charset* s) with the Internet Assigned
            Numbers Authority `[IANA-CHARSETS] <#IANA>`__, other than
            those just listed, be referred to using their registered
            names; other encodings *SHOULD* use names starting with an
            "x-" prefix. XML processors *SHOULD* match character
            encoding names in a case-insensitive way and *SHOULD* either
            interpret an IANA-registered name as the encoding registered
            at IANA for that name or treat it as unknown (processors
            are, of course, not required to support all IANA-registered
            encodings).

            In the absence of information provided by an external
            transport protocol (e.g. HTTP or MIME), it is a `fatal
            error <#dt-fatal>`__ for an entity including an encoding
            declaration to be presented to the XML processor in an
            encoding other than that named in the declaration, or for an
            entity which begins with neither a Byte Order Mark nor an
            encoding declaration to use an encoding other than UTF-8.
            Note that since ASCII is a subset of UTF-8, ordinary ASCII
            entities do not strictly need an encoding declaration.

            It is a `fatal error <#dt-fatal>`__ for a
            `TextDecl <#NT-TextDecl>`__ to occur other than at the
            beginning of an external entity.

            It is a `fatal error <#dt-fatal>`__ when an XML processor
            encounters an entity with an encoding that it is unable to
            process. It is a `fatal error <#dt-fatal>`__ if an XML
            entity is determined (via default, encoding declaration, or
            higher-level protocol) to be in a certain encoding but
            contains byte sequences that are not legal in that encoding.
            Specifically, it is a fatal error if an entity encoded in
            UTF-8 contains any irregular code unit sequences, as defined
            in Unicode `[Unicode] <#Unicode>`__. Unless an encoding is
            determined by a higher-level protocol, it is also a `fatal
            error <#dt-fatal>`__ if an XML entity contains no encoding
            declaration and its content is not legal UTF-8 or UTF-16.

            Examples of text declarations containing encoding
            declarations:

            .. container:: exampleInner

               ::

                  <?xml encoding='UTF-8'?>
                  <?xml encoding='EUC-JP'?>

         .. container:: div3


/4.3.4 Version Information in Entities
======================================

            .. .. rubric:: 4.3.4 Version Information in Entities
               :name: version-information-in-entities

            Each entity, including the `document entity <#dt-docent>`__,
            can be separately declared as XML 1.0 or XML 1.1. The
            version declaration appearing in the document entity
            determines the version of the document as a whole. An XML
            1.1 document may invoke XML 1.0 external entities, so that
            otherwise duplicated versions of external entities,
            particularly DTD external subsets, need not be maintained.
            However, in such a case the rules of XML 1.1 are applied to
            the entire document.

            If an entity (including the document entity) is not labeled
            with a version number, it is treated as if labeled as
            version 1.0.

      .. container:: div2


/4.4 XML Processor Treatment of Entities and
============================================

         .. .. rubric:: 4.4 XML Processor Treatment of Entities and
            References
            :name: xml-processor-treatment-of-entities-and-references

         The table below summarizes the contexts in which character
         references, entity references, and invocations of unparsed
         entities might appear and the *REQUIRED* behavior of an `XML
         processor <#dt-xml-proc>`__ in each case. The labels in the
         leftmost column describe the recognition context:

         Reference in Content
            as a reference anywhere after the `start-tag <#dt-stag>`__
            and before the `end-tag <#dt-etag>`__ of an element;
            corresponds to the nonterminal `content <#NT-content>`__.

         Reference in Attribute Value
            as a reference within either the value of an attribute in a
            `start-tag <#dt-stag>`__, or a default value in an
            `attribute declaration <#dt-attdecl>`__; corresponds to the
            nonterminal `AttValue <#NT-AttValue>`__.

         Occurs as Attribute Value
            as a `Name <#NT-Name>`__, not a reference, appearing either
            as the value of an attribute which has been declared as type
            **ENTITY**, or as one of the space-separated tokens in the
            value of an attribute which has been declared as type
            **ENTITIES**.

         Reference in Entity Value
            as a reference within a parameter or internal entity's
            `literal entity value <#dt-litentval>`__ in the entity's
            declaration; corresponds to the nonterminal
            `EntityValue <#NT-EntityValue>`__.

         Reference in DTD
            as a reference within either the internal or external
            subsets of the `DTD <#dt-doctype>`__, but outside of an
            `EntityValue <#NT-EntityValue>`__,
            `AttValue <#NT-AttValue>`__, `PI <#NT-PI>`__,
            `Comment <#NT-Comment>`__,
            `SystemLiteral <#NT-SystemLiteral>`__,
            `PubidLiteral <#NT-PubidLiteral>`__, or the contents of an
            ignored conditional section (see `3.4 Conditional
            Sections <#sec-condition-sect>`__).

            .

         .. list-table::

            - 

               - 
               - Entity Type
               - 
               - 
               - 
               - Character
            - 

               - 
               - Parameter
               - Internal General
               - External Parsed General
               - Unparsed
               - 
            - 

               - Reference in Content
               - `Not recognized <#not-recognized>`__
               - `Included <#included>`__
               - `Included if validating <#include-if-valid>`__
               - `Forbidden <#forbidden>`__
               - `Included <#included>`__
            - 

               - Reference in Attribute Value
               - `Not recognized <#not-recognized>`__
               - `Included in literal <#inliteral>`__
               - `Forbidden <#forbidden>`__
               - `Forbidden <#forbidden>`__
               - `Included <#included>`__
            - 

               - Occurs as Attribute Value
               - `Not recognized <#not-recognized>`__
               - `Forbidden <#forbidden>`__
               - `Forbidden <#forbidden>`__
               - `Notify <#notify>`__
               - `Not recognized <#not-recognized>`__
            - 

               - Reference in EntityValue
               - `Included in literal <#inliteral>`__
               - `Bypassed <#bypass>`__
               - `Bypassed <#bypass>`__
               - `Error <#error>`__
               - `Included <#included>`__
            - 

               - Reference in DTD
               - `Included as PE <#as-PE>`__
               - `Forbidden <#forbidden>`__
               - `Forbidden <#forbidden>`__
               - `Forbidden <#forbidden>`__
               - `Forbidden <#forbidden>`__

         .. container:: div3


/4.4.1 Not Recognized
=====================

            .. .. rubric:: 4.4.1 Not Recognized
               :name: not-recognized

            Outside the DTD, the ``%`` character has no special
            significance; thus, what would be parameter entity
            references in the DTD are not recognized as markup in
            `content <#NT-content>`__. Similarly, the names of unparsed
            entities are not recognized except when they appear in the
            value of an appropriately declared attribute.

         .. container:: div3


/4.4.2 Included
===============

            .. .. rubric:: 4.4.2 Included
               :name: included

            [Definition: An entity is **included** when its `replacement
            text <#dt-repltext>`__ is retrieved and processed, in place
            of the reference itself, as though it were part of the
            document at the location the reference was recognized.] The
            replacement text may contain both `character
            data <#dt-chardata>`__ and (except for parameter entities)
            `markup <#dt-markup>`__, which *MUST* be recognized in the
            usual way. (The string "``AT&amp;T;``" expands to
            "``AT&T;``" and the remaining ampersand is not recognized as
            an entity-reference delimiter.) A character reference is
            **included** when the indicated character is processed in
            place of the reference itself.

         .. container:: div3


/4.4.3 Included If Validating
=============================

            .. .. rubric:: 4.4.3 Included If Validating
               :name: included-if-validating

            When an XML processor recognizes a reference to a parsed
            entity, in order to `validate <#dt-valid>`__ the document,
            the processor *MUST* `include <#dt-include>`__ its
            replacement text. If the entity is external, and the
            processor is not attempting to validate the XML document,
            the processor *MAY*, but need not, include the entity's
            replacement text. If a non-validating processor does not
            include the replacement text, it *MUST* inform the
            application that it recognized, but did not read, the
            entity.

            This rule is based on the recognition that the automatic
            inclusion provided by the SGML and XML entity mechanism,
            primarily designed to support modularity in authoring, is
            not necessarily appropriate for other applications, in
            particular document browsing. Browsers, for example, when
            encountering an external parsed entity reference, might
            choose to provide a visual indication of the entity's
            presence and retrieve it for display only on demand.

         .. container:: div3


/4.4.4 Forbidden
================

            .. .. rubric:: 4.4.4 Forbidden
               :name: forbidden

            The following are forbidden, and constitute `fatal
            errors <#dt-fatal>`__:

            -  the appearance of a reference to an `unparsed
               entity <#dt-unparsed>`__, except in the
               `EntityValue <#NT-EntityValue>`__ in an entity
               declaration.

            -  the appearance of any character or general-entity
               reference in the DTD except within an
               `EntityValue <#NT-EntityValue>`__ or
               `AttValue <#NT-AttValue>`__.

            -  a reference to an external entity in an attribute value.

         .. container:: div3


/4.4.5 Included in Literal
==========================

            .. .. rubric:: 4.4.5 Included in Literal
               :name: included-in-literal

            When an `entity reference <#dt-entref>`__ appears in an
            attribute value, or a parameter entity reference appears in
            a literal entity value, its `replacement
            text <#dt-repltext>`__ *MUST* be processed in place of the
            reference itself as though it were part of the document at
            the location the reference was recognized, except that a
            single or double quote character in the replacement text
            *MUST* always be treated as a normal data character and
            *MUST NOT* terminate the literal. For example, this is
            well-formed:

            .. container:: exampleInner

               ::

                  <!ENTITY % YN '"Yes"' >
                  <!ENTITY WhatHeSaid "He said %YN;" >

            while this is not:

            .. container:: exampleInner

               ::

                  <!ENTITY EndAttr "27'" >
                  <element attribute='a-&EndAttr;>

         .. container:: div3


/4.4.6 Notify
=============

            .. .. rubric:: 4.4.6 Notify
               :name: notify

            When the name of an `unparsed entity <#dt-unparsed>`__
            appears as a token in the value of an attribute of declared
            type **ENTITY** or **ENTITIES**, a validating processor
            *MUST* inform the application of the `system <#dt-sysid>`__
            and `public <#dt-pubid>`__ (if any) identifiers for both the
            entity and its associated `notation <#dt-notation>`__.

         .. container:: div3


/4.4.7 Bypassed
===============

            .. .. rubric:: 4.4.7 Bypassed
               :name: bypassed

            When a general entity reference appears in the
            `EntityValue <#NT-EntityValue>`__ in an entity declaration,
            it *MUST* be bypassed and left as is.

         .. container:: div3


/4.4.8 Included as PE
=====================

            .. .. rubric:: 4.4.8 Included as PE
               :name: included-as-pe

            Just as with external parsed entities, parameter entities
            need only be `included if validating <#include-if-valid>`__.
            When a parameter-entity reference is recognized in the DTD
            and included, its `replacement text <#dt-repltext>`__ *MUST*
            be enlarged by the attachment of one leading and one
            following space (#x20) character; the intent is to constrain
            the replacement text of parameter entities to contain an
            integral number of grammatical tokens in the DTD. This
            behavior *MUST NOT* apply to parameter entity references
            within entity values; these are described in `4.4.5 Included
            in Literal <#inliteral>`__.

         .. container:: div3


/4.4.9 Error
============

            .. .. rubric:: 4.4.9 Error
               :name: error

            It is an `error <#dt-error>`__ for a reference to an
            unparsed entity to appear in the
            `EntityValue <#NT-EntityValue>`__ in an entity declaration.

      .. container:: div2


/4.5 Construction of Entity Replacement Text
============================================

         .. .. rubric:: 4.5 Construction of Entity Replacement Text
            :name: construction-of-entity-replacement-text

         In discussing the treatment of entities, it is useful to
         distinguish two forms of the entity's value. [Definition: For
         an internal entity, the **literal entity value** is the quoted
         string actually present in the entity declaration,
         corresponding to the non-terminal
         `EntityValue <#NT-EntityValue>`__.] [Definition: For an
         external entity, the **literal entity value** is the exact text
         contained in the entity.] [Definition: For an internal entity,
         the **replacement text** is the content of the entity, after
         replacement of character references and parameter-entity
         references.] [Definition: For an external entity, the
         **replacement text** is the content of the entity, after
         stripping the text declaration (leaving any surrounding white
         space) if there is one but without any replacement of character
         references or parameter-entity references.]

         The literal entity value as given in an internal entity
         declaration (`EntityValue <#NT-EntityValue>`__) may contain
         character, parameter-entity, and general-entity references.
         Such references *MUST* be contained entirely within the literal
         entity value. The actual replacement text that is
         `included <#dt-include>`__ (or `included in
         literal <#inliteral>`__) as described above *MUST* contain the
         *replacement text* of any parameter entities referred to, and
         *MUST* contain the character referred to, in place of any
         character references in the literal entity value; however,
         general-entity references *MUST* be left as-is, unexpanded. For
         example, given the following declarations:

         .. container:: exampleInner

            ::

               <!ENTITY % pub    "&#xc9;ditions Gallimard" >
               <!ENTITY   rights "All rights reserved" >
               <!ENTITY   book   "La Peste: Albert Camus,
               &#xA9; 1947 %pub;. &rights;" >

         then the replacement text for the entity "``book``" is:

         .. container:: exampleInner

            ::

               La Peste: Albert Camus,
               © 1947 Éditions Gallimard. &rights;

         The general-entity reference "``&rights;``" would be expanded
         should the reference "``&book;``" appear in the document's
         content or an attribute value.

         These simple rules may have complex interactions; for a
         detailed discussion of a difficult example, see `C Expansion of
         Entity and Character References <#sec-entexpand>`__.

      .. container:: div2


/4.6 Predefined Entities
========================

         .. .. rubric:: 4.6 Predefined Entities
            :name: predefined-entities

         [Definition: Entity and character references may both be used
         to **escape** the left angle bracket, ampersand, and other
         delimiters. A set of general entities (``amp``, ``lt``, ``gt``,
         ``apos``, ``quot``) is specified for this purpose. Numeric
         character references may also be used; they are expanded
         immediately when recognized and *MUST* be treated as character
         data, so the numeric character references "``&#60;``" and
         "``&#38;``" may be used to escape ``<`` and ``&`` when they
         occur in character data.]

         All XML processors *MUST* recognize these entities whether they
         are declared or not. `For interoperability <#dt-interop>`__,
         valid XML documents *SHOULD* declare these entities, like any
         others, before using them. If the entities ``lt`` or ``amp``
         are declared, they *MUST* be declared as internal entities
         whose replacement text is a character reference to the
         respective character (less-than sign or ampersand) being
         escaped; the double escaping is *REQUIRED* for these entities
         so that references to them produce a well-formed result. If the
         entities ``gt``, ``apos``, or ``quot`` are declared, they
         *MUST* be declared as internal entities whose replacement text
         is the single character being escaped (or a character reference
         to that character; the double escaping here is *OPTIONAL* but
         harmless). For example:

         .. container:: exampleInner

            ::

               <!ENTITY lt     "&#38;#60;">
               <!ENTITY gt     "&#62;">
               <!ENTITY amp    "&#38;#38;">
               <!ENTITY apos   "&#39;">
               <!ENTITY quot   "&#34;">

      .. container:: div2


/4.7 Notation Declarations
==========================

         .. .. rubric:: 4.7 Notation Declarations
            :name: notation-declarations

         [Definition: **Notations** identify by name the format of
         `unparsed entities <#dt-unparsed>`__, the format of elements
         which bear a notation attribute, or the application to which a
         `processing instruction <#dt-pi>`__ is addressed.]

         [Definition: **Notation declarations** provide a name for the
         notation, for use in entity and attribute-list declarations and
         in attribute specifications, and an external identifier for the
         notation which may allow an XML processor or its client
         application to locate a helper application capable of
         processing data in the given notation.]


/Notation Declarations
======================

         .. .. rubric:: Notation Declarations
            :name: notation-declarations-1

         .. list-table::

            - 

               - [82]   
               - ``NotationDecl``
               -    ::=   
               - ``'<!NOTATION'`` ```S`` <#NT-S>`__ ```` ```Name`` <#NT-Name>`__ ```` ```S`` <#NT-S>`__ ``(`` ```ExternalID`` <#NT-ExternalID>`__ ``|`` ```PublicID`` <#NT-PublicID>`__ ``)`` ```S`` <#NT-S>`__ ``? '>'``
               - `[VC: Unique Notation Name] <#UniqueNotationName>`__
            - 

               - [83]   
               - ``PublicID``
               -    ::=   
               - ``'PUBLIC'`` ```S`` <#NT-S>`__ ```` ```PubidLiteral`` <#NT-PubidLiteral>`__ ````
               - 

         .. container:: constraint

            **Validity constraint: Unique Notation Name**

            A given `Name <#NT-Name>`__ *MUST NOT* be declared in more
            than one notation declaration.

         XML processors *MUST* provide applications with the name and
         external identifier(s) of any notation declared and referred to
         in an attribute value, attribute definition, or entity
         declaration. They *MAY* additionally resolve the external
         identifier into the `system identifier <#dt-sysid>`__, file
         name, or other information needed to allow the application to
         call a processor for data in the notation described. (It is not
         an error, however, for XML documents to declare and refer to
         notations for which notation-specific applications are not
         available on the system where the XML processor or application
         is running.)

      .. container:: div2


/4.8 Document Entity
====================

         .. .. rubric:: 4.8 Document Entity
            :name: document-entity

         [Definition: The **document entity** serves as the root of the
         entity tree and a starting-point for an `XML
         processor <#dt-xml-proc>`__.] This specification does not
         specify how the document entity is to be located by an XML
         processor; unlike other entities, the document entity has no
         name and might well appear on a processor input stream without
         any identification at all.

   .. container:: div1


/5 Conformance
==============

      .. .. rubric:: 5 Conformance
         :name: conformance

      .. container:: div2


/5.1 Validating and Non-Validating Processors
=============================================

         .. .. rubric:: 5.1 Validating and Non-Validating Processors
            :name: validating-and-non-validating-processors

         Conforming `XML processors <#dt-xml-proc>`__ fall into two
         classes: validating and non-validating.

         Validating and non-validating processors alike *MUST* report
         violations of this specification's well-formedness constraints
         in the content of the `document entity <#dt-docent>`__ and any
         other `parsed entities <#dt-parsedent>`__ that they read.

         [Definition: **Validating processors** *MUST*, at user option,
         report violations of the constraints expressed by the
         declarations in the `DTD <#dt-doctype>`__, and failures to
         fulfill the validity constraints given in this specification.]
         To accomplish this, validating XML processors *MUST* read and
         process the entire DTD and all external parsed entities
         referenced in the document.

         Non-validating processors are *REQUIRED* to check only the
         `document entity <#dt-docent>`__, including the entire internal
         DTD subset, for well-formedness. [Definition: While they are
         not required to check the document for validity, they are
         *REQUIRED* to **process** all the declarations they read in the
         internal DTD subset and in any parameter entity that they read,
         up to the first reference to a parameter entity that they do
         *not* read; that is to say, they *MUST* use the information in
         those declarations to `normalize <#AVNormalize>`__ attribute
         values, `include <#included>`__ the replacement text of
         internal entities, and supply `default attribute
         values <#sec-attr-defaults>`__.] Except when
         ``standalone="yes"``, they *MUST NOT*
         `process <#dt-use-mdecl>`__ `entity
         declarations <#dt-entdecl>`__ or `attribute-list
         declarations <#dt-attdecl>`__ encountered after a reference to
         a parameter entity that is not read, since the entity may have
         contained overriding declarations; when ``standalone="yes"``,
         processors *MUST* process these declarations.

         Note that when processing invalid documents with a
         non-validating processor the application may not be presented
         with consistent information. For example, several requirements
         for uniqueness within the document may not be met, including
         more than one element with the same id, duplicate declarations
         of elements or notations with the same name, etc. In these
         cases the behavior of the parser with respect to reporting such
         information to the application is undefined.

         XML 1.1 processors *MUST* be able to process both XML 1.0 and
         XML 1.1 documents. Programs which generate XML *SHOULD*
         generate XML 1.0, unless one of the specific features of XML
         1.1 is required.

      .. container:: div2


/5.2 Using XML Processors
=========================

         .. .. rubric:: 5.2 Using XML Processors
            :name: using-xml-processors

         The behavior of a validating XML processor is highly
         predictable; it must read every piece of a document and report
         all well-formedness and validity violations. Less is required
         of a non-validating processor; it need not read any part of the
         document other than the document entity. This has two effects
         that may be important to users of XML processors:

         -  Certain well-formedness errors, specifically those that
            require reading external entities, may fail to be detected
            by a non-validating processor. Examples include the
            constraints entitled `Entity Declared <#wf-entdeclared>`__,
            `Parsed Entity <#textent>`__, and `No
            Recursion <#norecursion>`__, as well as some of the cases
            described as `forbidden <#forbidden>`__ in `4.4 XML
            Processor Treatment of Entities and
            References <#entproc>`__.

         -  The information passed from the processor to the application
            may vary, depending on whether the processor reads parameter
            and external entities. For example, a non-validating
            processor may fail to `normalize <#AVNormalize>`__ attribute
            values, `include <#included>`__ the replacement text of
            internal entities, or supply `default attribute
            values <#sec-attr-defaults>`__, where doing so depends on
            having read declarations in external or parameter entities.

         For maximum reliability in interoperating between different XML
         processors, applications which use non-validating processors
         *SHOULD NOT* rely on any behaviors not required of such
         processors. Applications which require DTD facilities not
         related to validation (such as the declaration of default
         attributes and internal entities that are or may be specified
         in external entities ) *SHOULD* use validating XML processors.

   .. container:: div1


/6 Notation
===========

      .. .. rubric:: 6 Notation
         :name: notation

      The formal grammar of XML is given in this specification using a
      simple Extended Backus-Naur Form (EBNF) notation. Each rule in the
      grammar defines one symbol, in the form

      .. container:: exampleInner

         ::

            symbol ::= expression

      Symbols are written with an initial capital letter if they are the
      start symbol of a regular language, otherwise with an initial
      lowercase letter. Literal strings are quoted.

      Within the expression on the right-hand side of a rule, the
      following expressions are used to match strings of one or more
      characters:

      ``#xN``
         where ``N`` is a hexadecimal integer, the expression matches
         the character whose number (code point) in ISO/IEC 10646 is
         ``N``. The number of leading zeros in the ``#xN`` form is
         insignificant.

      ``[a-zA-Z]``, ``[#xN-#xN]``
         matches any `Char <#NT-Char>`__ with a value in the range(s)
         indicated (inclusive).

      ``[abc]``, ``[#xN#xN#xN]``
         matches any `Char <#NT-Char>`__ with a value among the
         characters enumerated. Enumerations and ranges can be mixed in
         one set of brackets.

      ``[^a-z]``, ``[^#xN-#xN]``
         matches any `Char <#NT-Char>`__ with a value *outside* the
         range indicated.

      ``[^abc]``, ``[^#xN#xN#xN]``
         matches any `Char <#NT-Char>`__ with a value not among the
         characters given. Enumerations and ranges of forbidden values
         can be mixed in one set of brackets.

      ``"string"``
         matches a literal string `matching <#dt-match>`__ that given
         inside the double quotes.

      ``'string'``
         matches a literal string `matching <#dt-match>`__ that given
         inside the single quotes.

      These symbols may be combined to match more complex patterns as
      follows, where ``A`` and ``B`` represent simple expressions:

      (``expression``)
         ``expression`` is treated as a unit and may be combined as
         described in this list.

      ``A?``
         matches ``A`` or nothing; optional ``A``.

      ``A B``
         matches ``A`` followed by ``B``. This operator has higher
         precedence than alternation; thus ``A B | C D`` is identical to
         ``(A B) | (C D)``.

      ``A | B``
         matches ``A`` or ``B``.

      ``A - B``
         matches any string that matches ``A`` but does not match ``B``.

      ``A+``
         matches one or more occurrences of ``A``. Concatenation has
         higher precedence than alternation; thus ``A+ | B+`` is
         identical to ``(A+) | (B+)``.

      ``A*``
         matches zero or more occurrences of ``A``. Concatenation has
         higher precedence than alternation; thus ``A* | B*`` is
         identical to ``(A*) | (B*)``.

      Other notations used in the productions are:

      ``/* ... */``
         comment.

      ``[ wfc: ... ]``
         well-formedness constraint; this identifies by name a
         constraint on `well-formed <#dt-wellformed>`__ documents
         associated with a production.

      ``[ vc: ... ]``
         validity constraint; this identifies by name a constraint on
         `valid <#dt-valid>`__ documents associated with a production.

.. container:: back

   .. container:: div1


/A References
=============

      .. .. rubric:: A References
         :name: a-references

      .. container:: div2


/A.1 Normative References
=========================

         .. .. rubric:: A.1 Normative References
            :name: a.1-normative-references

         IANA-CHARSETS
            (Internet Assigned Numbers Authority) `Official Names for
            Character
            Sets <http://www.iana.org/assignments/character-sets>`__,
            ed. Keld Simonsen et al. (See
            http://www.iana.org/assignments/character-sets.)
         IETF RFC 2119
            IETF (Internet Engineering Task Force). `RFC 2119: Key words
            for use in RFCs to Indicate Requirement
            Levels <http://www.ietf.org/rfc/rfc2119.txt>`__. Scott
            Bradner, 1997. (See http://www.ietf.org/rfc/rfc2119.txt.)
         IETF RFC 3066
            IETF (Internet Engineering Task Force). `RFC 3066: Tags for
            the Identification of
            Languages <http://www.ietf.org/rfc/rfc3066.txt>`__, ed. H.
            Alvestrand. 2001. (See http://www.ietf.org/rfc/rfc3066.txt.)
         IETF RFC 3986
            IETF (Internet Engineering Task Force). `RFC 3986: Uniform
            Resource Identifier (URI): Generic
            Syntax <http://www.ietf.org/rfc/rfc3986.txt>`__. T.
            Berners-Lee, R. Fielding, L. Masinter. 2005. (See
            http://www.ietf.org/rfc/rfc3986.txt.)
         ISO/IEC 10646
            ISO (International Organization for Standardization).
            ISO/IEC 10646-1:2000. Information technology — Universal
            Multiple-Octet Coded Character Set (UCS) — Part 1:
            Architecture and Basic Multilingual Plane and ISO/IEC
            10646-2:2001. Information technology — Universal
            Multiple-Octet Coded Character Set (UCS) — Part 2:
            Supplementary Planes, as, from time to time, amended,
            replaced by a new edition or expanded by the addition of new
            parts. [Geneva]: International Organization for
            Standardization. (See http://www.iso.ch for the latest
            version.)
         Unicode
            The Unicode Consortium. *The Unicode Standard, Version 4.0.*
            Reading, Mass.: Addison-Wesley, 2003, as updated from time
            to time by the publication of new versions. (See
            http://www.unicode.org/unicode/standard/versions for the
            latest version and additional information on versions of the
            standard and of the Unicode Character Database).
         XML-1.0
            W3C. `Extensible Markup Language (XML) 1.0 (Fourth
            Edition) <https://www.w3.org/TR/xml>`__. Tim Bray, Jean
            Paoli, C.M. Sperberg-McQueen, Eve Maler, François Yergeau
            (editors) (See http://www.w3.org/TR/xml.)

      .. container:: div2


/A.2 Other References
=====================

         .. .. rubric:: A.2 Other References
            :name: a.2-other-references

         Aho/Ullman
            Aho, Alfred V., Ravi Sethi, and Jeffrey D. Ullman.
            Compilers: Principles, Techniques, and Tools. Reading:
            Addison-Wesley, 1986, rpt. corr. 1988.
         Brüggemann-Klein
            Brüggemann-Klein, Anne. `Formal Models in Document
            Processing <ftp://ftp.informatik.uni-freiburg.de/documents/papers/brueggem/habil.ps>`__.
            Habilitationsschrift. Faculty of Mathematics at the
            University of Freiburg, 1993. (See
            ftp://ftp.informatik.uni-freiburg.de/documents/papers/brueggem/habil.ps.)
         Brüggemann-Klein and Wood
            Brüggemann-Klein, Anne, and Derick Wood. Deterministic
            Regular Languages. Universität Freiburg, Institut für
            Informatik, Bericht 38, Oktober 1991. Extended abstract in
            A. Finkel, M. Jantzen, Hrsg., STACS 1992, S. 173-184.
            Springer-Verlag, Berlin 1992. Lecture Notes in Computer
            Science 577. Full version titled One-Unambiguous Regular
            Languages in Information and Computation 140 (2): 229-253,
            February 1998.
         Charmod
            W3C Working Draft. `Character Model for the World Wide Web
            1.0 <https://www.w3.org/TR/2003/WD-charmod-20030822/>`__.
            Martin J. Dürst, François Yergeau, Richard Ishida, Misha
            Wolf, Tex Texin. (See
            http://www.w3.org/TR/2003/WD-charmod-20030822/.)
         Clark
            James Clark. `Comparison of SGML and
            XML <https://www.w3.org/TR/NOTE-sgml-xml-971215>`__. (See
            http://www.w3.org/TR/NOTE-sgml-xml-971215.)
         IANA-LANGCODES
            (Internet Assigned Numbers Authority) `Registry of Language
            Tags <http://www.iana.org/assignments/language-tags>`__, ed.
            Keld Simonsen et al. (See
            http://www.iana.org/assignments/language-tags.)
         IETF RFC 2141
            IETF (Internet Engineering Task Force). `RFC 2141: URN
            Syntax <http://www.ietf.org/rfc/rfc2141.txt>`__, ed. R.
            Moats. 1997. (See http://www.ietf.org/rfc/rfc2141.txt.)
         IETF RFC 3023
            IETF (Internet Engineering Task Force). `RFC 3023: XML Media
            Types <http://www.ietf.org/rfc/rfc3023.txt>`__. eds. M.
            Murata, S. St.Laurent, D. Kohn. 2001. (See
            http://www.ietf.org/rfc/rfc3023.txt.)
         IETF RFC 2781
            IETF (Internet Engineering Task Force). `RFC 2781: UTF-16,
            an encoding of ISO
            10646 <http://www.ietf.org/rfc/rfc2781.txt>`__, ed. P.
            Hoffman, F. Yergeau. 2000. (See
            http://www.ietf.org/rfc/rfc2781.txt.)
         ISO 639
            (International Organization for Standardization). ISO
            639:1988 (E). Code for the representation of names of
            languages. [Geneva]: International Organization for
            Standardization, 1988.
         ISO 3166
            (International Organization for Standardization). ISO
            3166-1:1997 (E). Codes for the representation of names of
            countries and their subdivisions — Part 1: Country codes
            [Geneva]: International Organization for Standardization,
            1997.
         ISO 8879
            ISO (International Organization for Standardization). ISO
            8879:1986(E). Information processing — Text and Office
            Systems — Standard Generalized Markup Language (SGML). First
            edition — 1986-10-15. [Geneva]: International Organization
            for Standardization, 1986.
         ISO/IEC 10744
            ISO (International Organization for Standardization).
            ISO/IEC 10744-1992 (E). Information technology —
            Hypermedia/Time-based Structuring Language (HyTime).
            [Geneva]: International Organization for Standardization,
            1992. *Extended Facilities Annexe.* [Geneva]: International
            Organization for Standardization, 1996.
         WEBSGML
            ISO (International Organization for Standardization). `ISO
            8879:1986 TC2. Information technology — Document Description
            and Processing
            Languages <http://www.sgmlsource.com/8879/n0029.htm>`__.
            [Geneva]: International Organization for Standardization,
            1998. (See http://www.sgmlsource.com/8879/n0029.htm.)
         XML Names
            Tim Bray, Dave Hollander, and Andrew Layman, editors.
            `Namespaces in
            XML <https://www.w3.org/TR/REC-xml-names/>`__. Textuality,
            Hewlett-Packard, and Microsoft. World Wide Web Consortium,
            1999. (See http://www.w3.org/TR/REC-xml-names/.)

   .. container:: div1


/B Definitions for Character Normalization
==========================================

      .. .. rubric:: B Definitions for Character Normalization
         :name: b-definitions-for-character-normalization

      This appendix contains the necessary definitions for character
      normalization. For additional background information and examples,
      see `[Charmod] <#Charmod>`__.

      [Definition: Text is said to be in a **Unicode encoding form** if
      it is encoded in UTF-8, UTF-16 or UTF-32.]

      [Definition: **Legacy encoding** is taken to mean any character
      encoding not based on Unicode.]

      [Definition: A **normalizing transcoder** is a transcoder that
      converts from a `legacy encoding <#dt-legacyenc>`__ to a `Unicode
      encoding form <#dt-Uni-encform>`__ and ensures that the result is
      in Unicode Normalization Form C (see UAX #15
      `[Unicode] <#Unicode>`__).]

      [Definition: A **character escape** is a syntactic device defined
      in a markup or programming language that allows one or more of:]

      #. expressing syntax-significant characters while disregarding
         their significance in the syntax of the language, or

      #. expressing characters not representable in the character
         encoding chosen for an instance of the language, or

      #. expressing characters in general, without use of the
         corresponding character codes.

      [Definition: **Certified** text is text which satisfies at least
      one of the following conditions:]

      #. it has been confirmed through inspection that the text is in
         normalized form

      #. the source text-processing component is identified and is known
         to produce only normalized text.

      [Definition: Text is, for the purposes of this specification,
      **Unicode-normalized** if it is in a `Unicode encoding
      form <#dt-Uni-encform>`__ and is in Unicode Normalization Form C,
      according to a version of Unicode Standard Annex #15: Unicode
      Normalization Forms `[Unicode] <#Unicode>`__ at least as recent as
      the oldest version of the Unicode Standard that contains all the
      characters actually present in the text, but no earlier than
      version 3.2.]

      [Definition: Text is **include-normalized** if:]

      #. the text is `Unicode-normalized <#dt-uninorm>`__ and does not
         contain any `character escapes <#dt-charesc>`__ or
         `includes <#dt-include>`__ whose expansion would cause the text
         to become no longer `Unicode-normalized <#dt-uninorm>`__; or

      #. the text is in a `legacy encoding <#dt-legacyenc>`__ and, if it
         were transcoded to a `Unicode encoding
         form <#dt-Uni-encform>`__ by a `normalizing
         transcoder <#dt-normtransc>`__, the resulting text would
         satisfy clause 1 above.

      [Definition: A **composing character** is a character that is one
      or both of the following:]

      #. the second character in the canonical decomposition mapping of
         some primary composite (as defined in D3 of UAX #15
         `[Unicode] <#Unicode>`__), or

      #. of non-zero canonical combining class (as defined in Unicode
         `[Unicode] <#Unicode>`__).

      [Definition: Text is **fully-normalized** if:]

      #. the text is in a `Unicode encoding form <#dt-Uni-encform>`__,
         is `include-normalized <#dt-inclnorm>`__ and none of the
         `relevant constructs <#dt-relconst>`__ comprising the text
         begin with a `composing character <#dt-compchar>`__ or a
         character escape representing a `composing
         character <#dt-compchar>`__; or

      #. the text is in a `legacy encoding <#dt-legacyenc>`__ and, if it
         were transcoded to a `Unicode encoding
         form <#dt-Uni-encform>`__ by a `normalizing
         transcoder <#dt-normtransc>`__, the resulting text would
         satisfy clause 1 above.

   .. container:: div1


/C Expansion of Entity and Character References
===============================================

      .. .. rubric:: C Expansion of Entity and Character References
         (Non-Normative)
         :name: c-expansion-of-entity-and-character-references-non-normative

      This appendix contains some examples illustrating the sequence of
      entity- and character-reference recognition and expansion, as
      specified in `4.4 XML Processor Treatment of Entities and
      References <#entproc>`__.

      If the DTD contains the declaration

      .. container:: exampleInner

         ::

            <!ENTITY example "<p>An ampersand (&#38;#38;) may be escaped
            numerically (&#38;#38;#38;) or with a general entity
            (&amp;amp;).</p>" >

      then the XML processor will recognize the character references
      when it parses the entity declaration, and resolve them before
      storing the following string as the value of the entity
      "``example``":

      .. container:: exampleInner

         ::

            <p>An ampersand (&#38;) may be escaped
            numerically (&#38;#38;) or with a general entity
            (&amp;amp;).</p>

      A reference in the document to "``&example;``" will cause the text
      to be reparsed, at which time the start- and end-tags of the ``p``
      element will be recognized and the three references will be
      recognized and expanded, resulting in a ``p`` element with the
      following content (all data, no delimiters or markup):

      .. container:: exampleInner

         ::

            An ampersand (&) may be escaped
            numerically (&#38;) or with a general entity
            (&amp;).

      A more complex example will illustrate the rules and their effects
      fully. In the following example, the line numbers are solely for
      reference.

      .. container:: exampleInner

         ::

            1 <?xml version='1.1'?>
            2 <!DOCTYPE test [
            3 <!ELEMENT test (#PCDATA) >
            4 <!ENTITY % xx '&#37;zz;'>
            5 <!ENTITY % zz '&#60;!ENTITY tricky "error-prone" >' >
            6 %xx;
            7 ]>
            8 <test>This sample shows a &tricky; method.</test>

      This produces the following:

      -  in line 4, the reference to character 37 is expanded
         immediately, and the parameter entity "``xx``" is stored in the
         symbol table with the value "``%zz;``". Since the replacement
         text is not rescanned, the reference to parameter entity
         "``zz``" is not recognized. (And it would be an error if it
         were, since "``zz``" is not yet declared.)

      -  in line 5, the character reference "``&#60;``" is expanded
         immediately and the parameter entity "``zz``" is stored with
         the replacement text "``<!ENTITY tricky "error-prone">``",
         which is a well-formed entity declaration.

      -  in line 6, the reference to "``xx``" is recognized, and the
         replacement text of "``xx``" (namely "``%zz;``") is parsed. The
         reference to "``zz``" is recognized in its turn, and its
         replacement text ("``<!ENTITY tricky "error-prone">``") is
         parsed. The general entity "``tricky``" has now been declared,
         with the replacement text "``error-prone``".

      -  in line 8, the reference to the general entity "``tricky``" is
         recognized, and it is expanded, so the full content of the
         ``test`` element is the self-describing (and ungrammatical)
         string *This sample shows a error-prone method.*

   .. container:: div1


/D Deterministic Content Models (Non-Normative)
===============================================

      .. .. rubric:: D Deterministic Content Models (Non-Normative)
         :name: d-deterministic-content-models-non-normative

      As noted in `3.2.1 Element Content <#sec-element-content>`__, it
      is required that content models in element type declarations be
      deterministic. This requirement is `for
      compatibility <#dt-compat>`__ with SGML (which calls deterministic
      content models "unambiguous"); XML processors built using SGML
      systems may flag non-deterministic content models as errors.

      For example, the content model ``((b, c) | (b, d))`` is
      non-deterministic, because given an initial ``b`` the XML
      processor cannot know which ``b`` in the model is being matched
      without looking ahead to see which element follows the ``b``. In
      this case, the two references to ``b`` can be collapsed into a
      single reference, making the model read ``(b, (c | d))``. An
      initial ``b`` now clearly matches only a single name in the
      content model. The processor doesn't need to look ahead to see
      what follows; either ``c`` or ``d`` would be accepted.

      More formally: a finite state automaton may be constructed from
      the content model using the standard algorithms, e.g. algorithm
      3.5 in section 3.9 of Aho, Sethi, and Ullman
      `[Aho/Ullman] <#Aho>`__. In many such algorithms, a follow set is
      constructed for each position in the regular expression (i.e.,
      each leaf node in the syntax tree for the regular expression); if
      any position has a follow set in which more than one following
      position is labeled with the same element type name, then the
      content model is in error and may be reported as an error.

      Algorithms exist which allow many but not all non-deterministic
      content models to be reduced automatically to equivalent
      deterministic models; see Brüggemann-Klein 1991
      `[Brüggemann-Klein] <#ABK>`__.

   .. container:: div1


/E Autodetection of Character Encodings (Non-Normative)
=======================================================

      .. .. rubric:: E Autodetection of Character Encodings (Non-Normative)
         :name: e-autodetection-of-character-encodings-non-normative

      The XML encoding declaration functions as an internal label on
      each entity, indicating which character encoding is in use. Before
      an XML processor can read the internal label, however, it
      apparently has to know what character encoding is in use — which
      is what the internal label is trying to indicate. In the general
      case, this is a hopeless situation. It is not entirely hopeless in
      XML, however, because XML limits the general case in two ways:
      each implementation is assumed to support only a finite set of
      character encodings, and the XML encoding declaration is
      restricted in position and content in order to make it feasible to
      autodetect the character encoding in use in each entity in normal
      cases. Also, in many cases other sources of information are
      available in addition to the XML data stream itself. Two cases may
      be distinguished, depending on whether the XML entity is presented
      to the processor without, or with, any accompanying (external)
      information. We consider the first case first.

      .. container:: div2


/E.1 Detection Without External Encoding Information
====================================================

         .. .. rubric:: E.1 Detection Without External Encoding Information
            :name: e.1-detection-without-external-encoding-information

         Because each XML entity not accompanied by external encoding
         information and not in UTF-8 or UTF-16 encoding must begin with
         an XML encoding declaration, in which the first characters must
         be '``<?xml``', any conforming processor can detect, after two
         to four octets of input, which of the following cases apply. In
         reading this list, it may help to know that in UCS-4, '<' is
         "``#x0000003C``" and '?' is "``#x0000003F``", and the Byte
         Order Mark required of UTF-16 data streams is "``#xFEFF``". The
         notation ``##`` is used to denote any byte value except that
         two consecutive ``##`` s cannot be both 00.

         With a Byte Order Mark:

         .. list-table::

            - 

               - ``00 00 FE FF``
               - UCS-4, big-endian machine (1234 order)
            - 

               - ``FF FE 00 00``
               - UCS-4, little-endian machine (4321 order)
            - 

               - ``00 00 FF FE``
               - UCS-4, unusual octet order (2143)
            - 

               - ``FE FF 00 00``
               - UCS-4, unusual octet order (3412)
            - 

               - ``FE FF ## ##``
               - UTF-16, big-endian
            - 

               - ``FF FE ## ##``
               - UTF-16, little-endian
            - 

               - ``EF BB BF``
               - UTF-8

         Without a Byte Order Mark:

         .. list-table::

            - 

               - ``00 00 00 3C``
               - UCS-4 or other encoding with a 32-bit code unit and
                  ASCII characters encoded as ASCII values, in
                  respectively big-endian (1234), little-endian (4321)
                  and two unusual byte orders (2143 and 3412). The
                  encoding declaration must be read to determine which
                  of UCS-4 or other supported 32-bit encodings applies.
            - 

               - ``3C 00 00 00``
               - 
            - 

               - ``00 00 3C 00``
               - 
            - 

               - ``00 3C 00 00``
               - 
            - 

               - ``00 3C 00 3F``
               - UTF-16BE or big-endian ISO-10646-UCS-2 or other
                  encoding with a 16-bit code unit in big-endian order
                  and ASCII characters encoded as ASCII values (the
                  encoding declaration must be read to determine which)
            - 

               - ``3C 00 3F 00``
               - UTF-16LE or little-endian ISO-10646-UCS-2 or other
                  encoding with a 16-bit code unit in little-endian
                  order and ASCII characters encoded as ASCII values
                  (the encoding declaration must be read to determine
                  which)
            - 

               - ``3C 3F 78 6D``
               - UTF-8, ISO 646, ASCII, some part of ISO 8859,
                  Shift-JIS, EUC, or any other 7-bit, 8-bit, or
                  mixed-width encoding which ensures that the characters
                  of ASCII have their normal positions, width, and
                  values; the actual encoding declaration must be read
                  to detect which of these applies, but since all of
                  these encodings use the same bit patterns for the
                  relevant ASCII characters, the encoding declaration
                  itself may be read reliably
            - 

               - ``4C 6F A7 94``
               - EBCDIC (in some flavor; the full encoding declaration
                  must be read to tell which code page is in use)
            - 

               - Other
               - UTF-8 without an encoding declaration, or else the data
                  stream is mislabeled (lacking a required encoding
                  declaration), corrupt, fragmentary, or enclosed in a
                  wrapper of some kind

         .. note::

            **Note:**

            In cases above which do not require reading the encoding
            declaration to determine the encoding, section 4.3.3 still
            requires that the encoding declaration, if present, be read
            and that the encoding name be checked to match the actual
            encoding of the entity. Also, it is possible that new
            character encodings will be invented that will make it
            necessary to use the encoding declaration to determine the
            encoding, in cases where this is not required at present.

         This level of autodetection is enough to read the XML encoding
         declaration and parse the character-encoding identifier, which
         is still necessary to distinguish the individual members of
         each family of encodings (e.g. to tell UTF-8 from 8859, and the
         parts of 8859 from each other, or to distinguish the specific
         EBCDIC code page in use, and so on).

         Because the contents of the encoding declaration are restricted
         to characters from the ASCII repertoire (however encoded), a
         processor can reliably read the entire encoding declaration as
         soon as it has detected which family of encodings is in use.
         Since in practice, all widely used character encodings fall
         into one of the categories above, the XML encoding declaration
         allows reasonably reliable in-band labeling of character
         encodings, even when external sources of information at the
         operating-system or transport-protocol level are unreliable.
         Character encodings such as UTF-7 that make overloaded usage of
         ASCII-valued bytes may fail to be reliably detected.

         Once the processor has detected the character encoding in use,
         it can act appropriately, whether by invoking a separate input
         routine for each case, or by calling the proper conversion
         function on each character of input.

         Like any self-labeling system, the XML encoding declaration
         will not work if any software changes the entity's character
         set or encoding without updating the encoding declaration.
         Implementors of character-encoding routines should be careful
         to ensure the accuracy of the internal and external information
         used to label the entity.

      .. container:: div2


/E.2 Priorities in the Presence of External Encoding
====================================================

         .. .. rubric:: E.2 Priorities in the Presence of External Encoding
            Information
            :name: e.2-priorities-in-the-presence-of-external-encoding-information

         The second possible case occurs when the XML entity is
         accompanied by encoding information, as in some file systems
         and some network protocols. When multiple sources of
         information are available, their relative priority and the
         preferred method of handling conflict should be specified as
         part of the higher-level protocol used to deliver XML. In
         particular, please refer to `[IETF RFC 3023] <#rfc2376>`__ or
         its successor, which defines the ``text/xml`` and
         ``application/xml`` MIME types and provides some useful
         guidance. In the interests of interoperability, however, the
         following rule is recommended.

         -  If an XML entity is in a file, the Byte-Order Mark and
            encoding declaration are used (if present) to determine the
            character encoding.

   .. container:: div1


/F W3C XML Working Group (Non-Normative)
========================================

      .. .. rubric:: F W3C XML Working Group (Non-Normative)
         :name: f-w3c-xml-working-group-non-normative

      This specification was prepared and approved for publication by
      the W3C XML Working Group (WG). WG approval of this specification
      does not necessarily imply that all WG participants voted for its
      approval. The current and former members in the XML WG are:

      -  Jon Bosak, Sun (*Chair*)
      -  James Clark (*Technical Lead*)
      -  Tim Bray, Textuality and Netscape (*XML Co-editor*)
      -  Jean Paoli, Microsoft (*XML Co-editor*)
      -  C. M. Sperberg-McQueen, U. of Ill. (*XML Co-editor*)
      -  Dan Connolly, W3C (*W3C Liaison*)
      -  Paula Angerstein, Texcel
      -  Steve DeRose, INSO
      -  Dave Hollander, HP
      -  Eliot Kimber, ISOGEN
      -  Eve Maler, ArborText
      -  Tom Magliery, NCSA
      -  Murray Maloney, SoftQuad, Grif SA, Muzmo and Veo Systems
      -  MURATA Makoto (FAMILY Given), Fuji Xerox Information Systems
      -  Joel Nava, Adobe
      -  Conleth O'Connell, Vignette
      -  Peter Sharpe, SoftQuad
      -  John Tigue, DataChannel

   .. container:: div1


/G W3C XML Core Working Group (Non-Normative)
=============================================

      .. .. rubric:: G W3C XML Core Working Group (Non-Normative)
         :name: g-w3c-xml-core-working-group-non-normative

      The second edition of this specification was prepared by the W3C
      XML Core Working Group (WG). The participants in the WG at the
      time of publication of this edition were:

      -  Leonid Arbouzov, Sun Microsystems
      -  John Cowan
      -  Andrew Fang, PTC-Arbortext
      -  Paul Grosso, PTC-Arbortext (*Co-Chair*)
      -  Konrad Lanz, A-SIT
      -  Philippe Le Hégaret, W3C (*Staff Contact*)
      -  Glenn Marcy, IBM
      -  Sandra Martinez, NIST
      -  Ravindrakumar R, CDAC
      -  Lew Shannon
      -  Henry Thompson, W3C (*Staff Contact*)
      -  Richard Tobin, University of Edinburgh
      -  Daniel Veillard
      -  Norman Walsh, Sun Microsystems (*Co-Chair*)
      -  François Yergeau

   .. container:: div1


/H Production Notes (Non-Normative)
===================================

      .. .. rubric:: H Production Notes (Non-Normative)
         :name: h-production-notes-non-normative

      This edition was encoded in a slightly modified version of the
      `XMLspec DTD,
      2.10 <https://www.w3.org/2002/xmlspec/dtd/2.10/xmlspec.dtd>`__.
      The XHTML versions were produced with a combination of the
      `xmlspec.xsl <https://www.w3.org/2002/xmlspec/xhtml/1.13/xmlspec.xsl>`__,
      `diffspec.xsl <https://www.w3.org/2002/xmlspec/xhtml/1.13/diffspec.xsl>`__,
      and `REC-xml.xsl <REC-xml.xsl>`__ XSLT stylesheets.

   .. container:: div1


/I Suggestions for XML Names (Non-Normative)
============================================

      .. .. rubric:: I Suggestions for XML Names (Non-Normative)
         :name: i-suggestions-for-xml-names-non-normative

      The following suggestions define what is believed to be best
      practice in the construction of XML names used as element names,
      attribute names, processing instruction targets, entity names,
      notation names, and the values of attributes of type ID, and are
      intended as guidance for document authors and schema designers.
      All references to Unicode are understood with respect to a
      particular version of the Unicode Standard greater than or equal
      to 3.0; which version should be used is left to the discretion of
      the document author or schema designer.

      The first two suggestions are directly derived from the rules
      given for identifiers in the Unicode Standard, version 3.0, and
      exclude all control characters, enclosing nonspacing marks,
      non-decimal numbers, private-use characters, punctuation
      characters (with the noted exceptions), symbol characters,
      unassigned codepoints, and white space characters. The other
      suggestions are mostly derived from `[XML-1.0] <#XML1.0>`__
      Appendix B.

      #. The first character of any name should have a Unicode General
         Category of Ll, Lu, Lo, Lm, Lt, or Nl, or else be '\_' #x5F.

      #. Characters other than the first should have a Unicode General
         Category of Ll, Lu, Lo, Lm, Lt, Mc, Mn, Nl, Nd, Pc, or Cf, or
         else be one of the following: '-' #x2D, '.' #x2E, ':' #x3A or
         '·' #xB7 (middle dot). Since Cf characters are not directly
         visible, they should be employed with caution and only when
         necessary, to avoid creating names which are distinct to XML
         processors but look the same to human beings.

      #. Ideographic characters which have a canonical decomposition
         (including those in the ranges [#xF900-#xFAFF] and
         [#x2F800-#x2FFFD], with 12 exceptions) should not be used in
         names.

      #. Characters which have a compatibility decomposition (those with
         a "compatibility formatting tag" in field 5 of the Unicode
         Character Database -- marked by field 5 beginning with a "<")
         should not be used in names. This suggestion does not apply to
         #x0E33 THAI CHARACTER SARA AM or #x0EB3 LAO CHARACTER AM, which
         despite their compatibility decompositions are in regular use
         in those scripts.

      #. Combining characters meant for use with symbols only (including
         those in the ranges [#x20D0-#x20EF] and [#x1D165-#x1D1AD])
         should not be used in names.

      #. The interlinear annotation characters ([#xFFF9-#xFFFB ]) should
         not be used in names.

      #. Variation selector characters should not be used in names.

      #. Names which are nonsensical, unpronounceable, hard to read, or
         easily confusable with other names should not be employed.

.. |W3C| image:: https://www.w3.org/Icons/w3c_home
   :width: 72px
   :height: 48px
   :target: https://www.w3.org/
