.. container:: head

   |W3C|

https://drafts.csswg.org/selectors-4/

/Selectors Level 4
==================

   .. .. rubric:: Selectors Level 4
      :name: title
      :class: p-name no-ref

   `Editor’s Draft <https://www.w3.org/standards/types#ED>`__, 6 March
   2024

   More details about this document

   .. container::

      This version:
         https://drafts.csswg.org/selectors/
      Latest published version:
         https://www.w3.org/TR/selectors-4/
      Previous Versions:
         https://www.w3.org/TR/2022/WD-selectors-4-20220507/
         https://www.w3.org/TR/2018/WD-selectors-4-20181121/
         https://www.w3.org/TR/2018/WD-selectors-4-20180202/
         https://www.w3.org/TR/2018/WD-selectors-4-20180201/
         https://www.w3.org/TR/2013/WD-selectors4-20130502/
         https://www.w3.org/TR/2012/WD-selectors4-20120823/
         https://www.w3.org/TR/2011/WD-selectors4-20110929/
      Feedback:
         `CSSWG Issues Repository <https://github.com/w3c/csswg-drafts/labels/selectors-4>`__
         `Inline In Spec <#issues-index>`__
      Editors:
         `Elika J. Etemad / fantasai <http://fantasai.inkedblade.net/contact>`__ (Apple)
         `Tab Atkins Jr. <http://xanthir.com/contact/>`__ (Google)
      Former Editors:
         `Tantek Çelik <http://www.tantek.com>`__
         Daniel Glazman
         Ian Hickson
         Peter Linss
         John Williams
      Suggest an Edit for this Spec:
         `GitHub Editor <https://github.com/w3c/csswg-drafts/blob/main/selectors-4/Overview.bs>`__

   .. container::

   `Copyright <https://www.w3.org/policies/#copyright>`__ © 2024 
   `World Wide Web Consortium <https://www.w3.org/>`__. W3C :sup:`®`
   `liability <https://www.w3.org/policies/#Legal_Disclaimer>`__,
   `trademark <https://www.w3.org/policies/#W3C_Trademarks>`__ and
   `permissive document license <https://www.w3.org/copyright/software-license/>`__ rules
   apply.

   --------------

.. container:: p-summary
/Abstract
=========

   .. .. rubric:: Abstract
      :name: abstract
      :class: no-num no-toc no-ref heading settled

   `Selectors <#selector>`__ are patterns that match against elements in
   a tree, and as such form one of several technologies that can be used
   to select nodes in a document. Selectors have been optimized for use
   with HTML and XML, and are designed to be usable in
   performance-critical code. They are a core component of CSS
   (Cascading Style Sheets), which uses Selectors to bind style
   properties to elements in the document. Selectors Level 4 describes
   the selectors that already exist in `[SELECT] <#biblio-select>`__,
   and further introduces new selectors for CSS and other languages that
   may need them.

   `CSS <https://www.w3.org/TR/CSS/>`__ is a language for describing the
   rendering of structured documents (such as HTML and XML) on screen,
   on paper, etc.

.. _sotd:

Status of this document
-----------------------

.. container::

   This is a public copy of the editors’ draft. It is provided for
   discussion only and may change at any moment. Its publication here
   does not imply endorsement of its contents by W3C. Don’t cite this
   document other than as work in progress.

   Please send feedback by `filing issues in
   GitHub <https://github.com/w3c/csswg-drafts/issues>`__ (preferred),
   including the spec code “selectors” in the title, like this:
   “[selectors] *…summary of comment…* ”. All issues and comments are
   `archived <https://lists.w3.org/Archives/Public/public-css-archive/>`__.
   Alternately, feedback can be sent to the
   (`archived <https://lists.w3.org/Archives/Public/www-style/>`__)
   public mailing list
   `www-style@w3.org <mailto:www-style@w3.org?Subject=%5Bselectors%5D%20PUT%20SUBJECT%20HERE>`__.

   This document is governed by the `03 November 2023 W3C Process
   Document <https://www.w3.org/2023/Process-20231103/>`__.

.. container::

   The following features are at-risk, and may be dropped during the CR
   period:

   -  the column combinator
   -  `user action pseudo-classes <#user-action-pseudo-class>`__
      applying to
      non-`tree-abiding <https://drafts.csswg.org/css-pseudo-4/#tree-abiding>`__
      `pseudo-elements <#pseudo-element>`__
   -  the `:blank <#blank-pseudo>`__ pseudo-class

   “At-risk” is a W3C Process term-of-art, and does not necessarily
   imply that the feature is in danger of being dropped or delayed. It
   means that the WG believes the feature may have difficulty being
   interoperably implemented in a timely manner, and marking it as such
   allows the WG to drop the feature if necessary when transitioning to
   the Proposed Rec stage, without having to publish a new Candidate Rec
   without the feature first.

.. _contents:

Table of Contents
-----------------

#. `1 Introduction <#context>`__

   #. `1.1 Module Interactions <#placement>`__

#. `2 Selectors Overview <#overview>`__
#. `3 Selector Syntax and Structure <#syntax>`__

   #. `3.1 Structure and Terminology <#structure>`__
   #. `3.2 Data Model <#data-model>`__
   #. `3.3 Scoped Selectors <#scoping>`__
   #. `3.4 Relative Selectors <#relative>`__
   #. `3.5 Pseudo-classes <#pseudo-classes>`__
   #. `3.6 Pseudo-elements <#pseudo-elements>`__

      #. `3.6.1 Syntax <#pseudo-element-syntax>`__
      #. `3.6.2 Binding to the Document Tree <#pseudo-element-attachment>`__
      #. `3.6.3 Pseudo-classing Pseudo-elements <#pseudo-element-states>`__
      #. `3.6.4 Sub-pseudo-elements <#sub-pseudo-elements>`__
      #. `3.6.5 Internal Structure <#pseudo-element-structure>`__

   #. `3.7 Characters and case sensitivity <#case-sensitive>`__
   #. `3.8 Declaring Namespace Prefixes <#namespaces>`__
   #. `3.9 Invalid Selectors and Error Handling <#invalid>`__
   #. `3.10 Legacy Aliases <#legacy-aliasing>`__

#. `4 Logical Combinations <#logical-combination>`__

   #. `4.1 Selector Lists <#grouping>`__
   #. `4.2 The Matches-Any Pseudo-class: :is() <#matches>`__
   #. `4.3 The Negation (Matches-None) Pseudo-class: :not() <#negation>`__
   #. `4.4 The Specificity-adjustment Pseudo-class: :where() <#zero-matches>`__
   #. `4.5 The Relational Pseudo-class: :has() <#relational>`__

#. `5 Elemental selectors <#elemental-selectors>`__

   #. `5.1 Type (tag name) selector <#type-selectors>`__
   #. `5.2 Universal selector  <#the-universal-selector>`__
   #. `5.3 Namespaces in Elemental Selectors <#type-nmsp>`__
   #. `5.4 The Defined Pseudo-class: :defined <#the-defined-pseudo>`__

#. `6 Attribute selectors <#attribute-selectors>`__

   #. `6.1 Attribute presence and value selectors <#attribute-representation>`__
   #. `6.2 Substring matching attribute selectors <#attribute-substrings>`__
   #. `6.3 Case-sensitivity <#attribute-case>`__
   #. `6.4 Attribute selectors and namespaces <#attrnmsp>`__
   #. `6.5 Default attribute values in DTDs <#def-values>`__
   #. `6.6 Class selectors <#class-html>`__
   #. `6.7 ID selectors <#id-selectors>`__

#. `7 Linguistic Pseudo-classes <#linguistic-pseudos>`__

   #. `7.1 The Directionality Pseudo-class: :dir() <#the-dir-pseudo>`__
   #. `7.2 The Language Pseudo-class: :lang() <#the-lang-pseudo>`__

#. `8 Location Pseudo-classes <#location>`__

   #. `8.1 The Hyperlink Pseudo-class: :any-link <#the-any-link-pseudo>`__
   #. `8.2 The Link History Pseudo-classes: :link and :visited <#link>`__
   #. `8.3 The Local Link Pseudo-class: :local-link <#the-local-link-pseudo>`__
   #. `8.4 The Target Pseudo-class: :target <#the-target-pseudo>`__
   #. `8.5 The Target Container Pseudo-class: :target-within <#the-target-within-pseudo>`__
   #. `8.6 The Reference Element Pseudo-class: :scope <#the-scope-pseudo>`__

#. `9 User Action Pseudo-classes <#useraction-pseudos>`__

   #. `9.1 The Pointer Hover Pseudo-class: :hover <#the-hover-pseudo>`__
   #. `9.2 The Activation Pseudo-class: :active <#the-active-pseudo>`__
   #. `9.3 The Input Focus Pseudo-class: :focus <#the-focus-pseudo>`__
   #. `9.4 The Focus-Indicated Pseudo-class: :focus-visible <#the-focus-visible-pseudo>`__
   #. `9.5 The Focus Container Pseudo-class: :focus-within <#the-focus-within-pseudo>`__

#. `10 Time-dimensional Pseudo-classes <#time-pseudos>`__

   #. `10.1 The Current-element Pseudo-class: :current <#the-current-pseudo>`__
   #. `10.2 The Past-element Pseudo-class: :past <#the-past-pseudo>`__
   #. `10.3 The Future-element Pseudo-class: :future <#the-future-pseudo>`__

#. `11 Resource State Pseudo-classes <#resource-pseudos>`__

   #. `11.1 Media Playback State: the :playing, :paused, and :seeking pseudo-classes <#video-state>`__
   #. `11.2 Media Loading State: the :buffering and :stalled pseudo-classes <#media-loading-state>`__
   #. `11.3 Sound State: the :muted and :volume-locked pseudo-classes <#sound-state>`__

#. `12 Element Display State Pseudo-classes <#display-state-pseudos>`__

   #. `12.1 Collapse State: the :open and :closed pseudo-class <#open-state>`__
   #. `12.2 Modal (Exclusive Interaction) State: the :modal pseudo-class <#modal-state>`__
   #. `12.3 Fullscreen Presentation State: the :fullscreen pseudo-class <#fullscreen-state>`__
   #. `12.4 Picture-in-Picture Presentation State: the :picture-in-picture pseudo-class <#pip-state>`__

#. `13 The Input Pseudo-classes <#input-pseudos>`__

   #. `13.1 Input Control States <#input-states>`__

      #. `13.1.1 The :enabled and :disabled Pseudo-classes <#enableddisabled>`__
      #. `13.1.2 The Mutability Pseudo-classes: :read-only and :read-write <#rw-pseudos>`__
      #. `13.1.3 The Placeholder-shown Pseudo-class: :placeholder-shown <#placeholder>`__
      #. `13.1.4 The Automatic Input Pseudo-class: :autofill <#autofill>`__
      #. `13.1.5 The Default-option Pseudo-class: :default <#the-default-pseudo>`__

   #. `13.2 Input Value States <#input-value-states>`__

      #. `13.2.1 The Selected-option Pseudo-class: :checked <#checked>`__
      #. `13.2.2 The Indeterminate-value Pseudo-class: :indeterminate <#indeterminate>`__

   #. `13.3 Input Value-checking <#ui-validity>`__

      #. `13.3.1 The Empty-Value Pseudo-class: :blank <#blank>`__
      #. `13.3.2 The Validity Pseudo-classes: :valid and :invalid <#validity-pseudos>`__
      #. `13.3.3 The Range Pseudo-classes: :in-range and :out-of-range <#range-pseudos>`__
      #. `13.3.4 The Optionality Pseudo-classes: :required and :optional <#opt-pseudos>`__
      #. `13.3.5 The User-interaction Pseudo-classes: :user-valid and :user-invalid <#user-pseudos>`__

#. `14 Tree-Structural pseudo-classes <#structural-pseudos>`__

   #. `14.1 :root pseudo-class <#the-root-pseudo>`__
   #. `14.2 :empty pseudo-class <#the-empty-pseudo>`__
   #. `14.3 Child-indexed Pseudo-classes <#child-index>`__

      #. `14.3.1 :nth-child() pseudo-class <#the-nth-child-pseudo>`__
      #. `14.3.2 :nth-last-child() pseudo-class <#the-nth-last-child-pseudo>`__
      #. `14.3.3 :first-child pseudo-class <#the-first-child-pseudo>`__
      #. `14.3.4 :last-child pseudo-class <#the-last-child-pseudo>`__
      #. `14.3.5 :only-child pseudo-class <#the-only-child-pseudo>`__

   #. `14.4 Typed Child-indexed Pseudo-classes <#typed-child-index>`__

      #. `14.4.1 :nth-of-type() pseudo-class <#the-nth-of-type-pseudo>`__
      #. `14.4.2 :nth-last-of-type() pseudo-class <#the-nth-last-of-type-pseudo>`__
      #. `14.4.3 :first-of-type pseudo-class <#the-first-of-type-pseudo>`__
      #. `14.4.4 :last-of-type pseudo-class <#the-last-of-type-pseudo>`__
      #. `14.4.5 :only-of-type pseudo-class <#the-only-of-type-pseudo>`__

#. `15 Combinators <#combinators>`__

   #. `15.1 Descendant combinator (````) <#descendant-combinators>`__
   #. `15.2 Child combinator (``>``) <#child-combinators>`__
   #. `15.3 Next-sibling combinator (``+``) <#adjacent-sibling-combinators>`__
   #. `15.4 Subsequent-sibling combinator (``~``) <#general-sibling-combinators>`__

#. `16 Grid-Structural Selectors <#table-pseudos>`__

   #. `16.1 Column combinator (``||``) <#the-column-combinator>`__
   #. `16.2 :nth-col() pseudo-class <#the-nth-col-pseudo>`__
   #. `16.3 :nth-last-col() pseudo-class <#the-nth-last-col-pseudo>`__

#. `17 Calculating a selector’s specificity <#specificity-rules>`__
#. `18 Grammar <#grammar>`__

   #. `18.1 <forgiving-selector-list> and
      <forgiving-relative-selector-list> <#forgiving-selector>`__

#. `19 API Hooks <#api-hooks>`__

   #. `19.1 Parse A Selector <#parse-selector>`__
   #. `19.2 Parse A Relative Selector <#parse-relative-selector>`__
   #. `19.3 Match a Selector Against an Element <#match-against-element>`__
   #. `19.4 Match a Selector Against a Pseudo-element <#match-against-pseudo-element>`__
   #. `19.5 Match a Selector Against a Tree <#match-against-tree>`__

#.  ` Appendix A: Guidance on Mapping Source Documents & Data to an Element Tree <#dom-mapping>`__
#.  ` Appendix B: Obsolete but Required ``-webkit-`` Parsing Quirks for Web Compat <#compat>`__
#. `20 Changes <#changes>`__

   #. `20.1 Changes since the 7 May 2022 Working Draft <#changes-2022-05>`__
   #. `20.2 Changes since the 21 November 2018 Working Draft <#changes-2018-11>`__
   #. `20.3 Changes since the 2 February 2018 Working Draft <#changes-2018-02>`__
   #. `20.4 Changes since the 2 May 2013 Working Draft <#changes-2013>`__
   #. `20.5 Changes since the 23 August 2012 Working Draft <#changes-2012>`__
   #. `20.6 Changes since the 29 September 2011 Working Draft <#changes-2011>`__
   #. `20.7 Changes Since Level 3 <#changes-level-3>`__

#. `21 Acknowledgements <#acknowledgements>`__
#.  `Privacy Considerations <#privacy>`__
#.  `Security Considerations <#security>`__
#.  ` Conformance <#w3c-conformance>`__

   #.  ` Document conventions <#w3c-conventions>`__
   #.  ` Conformance classes <#w3c-conformance-classes>`__
   #.  ` Partial implementations <#w3c-partial>`__

      #.  ` Implementations of Unstable and Proprietary Features <#w3c-conform-future-proofing>`__

   #.  ` Non-experimental implementations <#w3c-testing>`__

#.  `Index <#index>`__

   #.  `Terms defined by this specification <#index-defined-here>`__
   #.  `Terms defined by reference <#index-defined-elsewhere>`__

#.  `References <#references>`__

   #.  `Normative References <#normative>`__
   #.  `Informative References <#informative>`__

#.  `Issues Index <#issues-index>`__

.. container::
/1. Introduction 
=================

   .. .. rubric:: 1. Introduction ` <#context>`__
      :name: context
      :class: heading settled

   *This section is not normative.*

   A `selector <#selector>`__ is a boolean predicate that takes an
   element in a tree structure and tests whether the element matches the
   selector or not.

   These expressions may be used for many things:

   -  directly on an element to test whether it matches some criteria,
      such as in the ``element.matches()`` function defined in
      `[DOM] <#biblio-dom>`__
   -  applied to an entire tree of elements to filter it into a set of
      elements that match the criteria, such as in the
      ``document.querySelectorAll()`` function defined in
      `[DOM] <#biblio-dom>`__ or the selector of a CSS style rule.
   -  used "in reverse" to generate markup that would match a given
      selector, such as in `HAML <http://haml.info/>`__ or
      `Emmet <https://en.wikipedia.org/wiki/Emmet_(software)>`__.

   Selectors Levels 1, 2, and 3 are defined as the subsets of selector
   functionality defined in the
   `CSS1 <https://www.w3.org/TR/REC-CSS1>`__,
   `CSS2.1 <https://www.w3.org/TR/CSS21/>`__, and `Selectors Level
   3 <https://www.w3.org/TR/css3-selectors/>`__ specifications,
   respectively. This module defines Selectors Level 4.

/1.1. Module Interactions 
==========================

   .. .. rubric:: 1.1. Module Interactions ` <#placement>`__
      :name: placement
      :class: heading settled

   This module replaces the definitions of and extends the set of
   selectors defined for CSS in `[SELECT] <#biblio-select>`__ and
   `[CSS21] <#biblio-css21>`__.

   Pseudo-element selectors, which define abstract elements in a
   rendering tree, are not part of this specification: their generic
   syntax is described here, but, due to their close integration with
   the rendering model and irrelevance to other uses such as DOM
   queries, they will be defined in other modules.

/2. Selectors Overview 
=======================

   .. .. rubric:: 2. Selectors Overview ` <#overview>`__
      :name: overview
      :class: heading settled

   *This section is non-normative, as it merely summarizes the following
   sections.*

   A selector represents a structure. This structure can be used as a
   condition (e.g. in a CSS rule) that determines which elements a
   selector matches in the document tree, or as a flat description of
   the HTML or XML fragment corresponding to that structure.

   Selectors may range from simple element names to rich contextual
   representations.

   The following table summarizes the Selector syntax:

   .. list-table::
      :header-rows: 1

      *  - Pattern
         - Represents
         - Section
         - Level

      *  -  ``*``
         -  any element
         -  `§ 5.2 Universal selector <#the-universal-selector>`__
         -  2

      *  -  ``E``
         -  an element of type E
         -  `§ 5.1 Type (tag name) selector <#type-selectors>`__
         -  1

      *  -  ``E:not(`` ``s1`` ``,`` ``s2`` ``, …)``
         -  an E element that does not match either `compound
            selector <#compound>`__ ``s1`` or compound selector ``s2``
         -  `§ 4.3 The Negation (Matches-None) Pseudo-class:
            :not() <#negation>`__
         -  3/4

      *  -  ``E:is(`` ``s1`` ``,`` ``s2`` ``, …)``
         -  an E element that matches `compound selector <#compound>`__ ``s1``
            and/or compound selector ``s2``
         -  `§ 4.2 The Matches-Any Pseudo-class: :is() <#matches>`__
         -  4

      *  -  ``E:where(`` ``s1`` ``,`` ``s2`` ``, …)``
         -  an E element that matches `compound selector <#compound>`__ ``s1``
            and/or compound selector ``s2`` but contributes no specificity.
         -  `§ 4.4 The Specificity-adjustment Pseudo-class:
            :where() <#zero-matches>`__
         -  4

      *  -  ``E:has(`` ``rs1`` ``,`` ``rs2`` ``, …)``
         -  an E element, if there exists an element that matches either of the
            `relative selectors <#relative-selector>`__ ``rs1`` or ``rs2``, when
            evaluated with E as the `anchor
            elements <#relative-selector-anchor-elements>`__
         -  `§ 4.5 The Relational Pseudo-class: :has() <#relational>`__
         -  4

      *  -  ``E.warning``
         -  an E element belonging to the class ``warning`` (the document
            language specifies how class is determined).
         -  `§ 6.6 Class selectors <#class-html>`__
         -  1

      *  -  ``E#myid``
         -  an E element with ID equal to ``myid``.
         -  `§ 6.7 ID selectors <#id-selectors>`__
         -  1

      *  -  ``E[foo]``
         -  an E element with a ``foo`` attribute
         -  `§ 6.1 Attribute presence and value selectors <#attribute-representation>`__
         -  2

      *  -  ``E[foo="bar"]``
         -  an E element whose ``foo`` attribute value is exactly equal to ``bar``
         -  `§ 6.1 Attribute presence and value selectors <#attribute-representation>`__
         -  2

      *  -  ``E[foo="bar" i]``
         -  an E element whose ``foo`` attribute value is exactly equal to any
            (ASCII-range) case-permutation of ``bar``
         -  `§ 6.3 Case-sensitivity <#attribute-case>`__
         -  4

      *  -  ``E[foo="bar" s]``
         -  an E element whose ``foo`` attribute value is `identical
            to <https://infra.spec.whatwg.org/#string-is>`__ ``bar``
         -  `§ 6.3 Case-sensitivity <#attribute-case>`__
         -  4

      *  -  ``E[foo~="bar"]``
         -  an E element whose ``foo`` attribute value is a list of
            whitespace-separated values, one of which is exactly equal to ``bar``
         -  `§ 6.1 Attribute presence and value selectors <#attribute-representation>`__
         -  2

      *  -  ``E[foo^="bar"]``
         -  an E element whose ``foo`` attribute value begins exactly with the
            string ``bar``
         -  `§ 6.2 Substring matching attribute selectors <#attribute-substrings>`__
         -  3

      *  -  ``E[foo$="bar"]``
         -  an E element whose ``foo`` attribute value ends exactly with the
            string ``bar``
         -  `§ 6.2 Substring matching attribute selectors <#attribute-substrings>`__
         -  3

      *  -  ``E[foo*="bar"]``
         -  an E element whose ``foo`` attribute value contains the substring ``bar``
         -  `§ 6.2 Substring matching attribute selectors <#attribute-substrings>`__
         -  3

      *  -  ``E[foo|="en"]``
         -  an E element whose ``foo`` attribute value is a hyphen-separated list
         -  of values beginning with ``en``
         -  `§ 6.1 Attribute presence and value
         -  selectors <#attribute-representation>`__
         -  2

      *  -  ``E:dir(ltr)``
         -  an element of type E with left-to-right directionality (the document
            language specifies how directionality is determined)
         -  `§ 7.1 The Directionality Pseudo-class: :dir() <#the-dir-pseudo>`__
         -  4

      *  -  ``E:lang(zh, "*-hant")``
         -  an element of type E tagged as being either in Chinese (any dialect
            or writing system) or otherwise written with traditional Chinese
            characters
         -  `§ 7.2 The Language Pseudo-class: :lang() <#the-lang-pseudo>`__
         -  2/4

      *  -  ``E:any-link``
         -  an E element being the source anchor of a hyperlink
         -  `§ 8.1 The Hyperlink Pseudo-class: :any-link <#the-any-link-pseudo>`__
         -  4

      *  -  ``E:link``
         -  an E element being the source anchor of a hyperlink of which the
            target is not yet visited
         -  `§ 8.2 The Link History Pseudo-classes: :link and :visited <#link>`__
         -  1

      *  -  ``E:visited``
         -  an E element being the source anchor of a hyperlink of which the
            target is already visited
         -  `§ 8.2 The Link History Pseudo-classes: :link and :visited <#link>`__
         -  1

      *  -  ``E:local-link``
         -  an E element being the source anchor of a hyperlink targeting the
            current URL
         -  `§ 8.3 The Local Link Pseudo-class: :local-link <#the-local-link-pseudo>`__
         -  4

      *  -  ``E:target``
         -  an E element being the target of the current URL
         -  `§ 8.4 The Target Pseudo-class: :target <#the-target-pseudo>`__
         -  3

      *  -  ``E:target-within``
         -  an E element that is the target of the current URL or contains an
            element that does.
         -  `§ 8.5 The Target Container Pseudo-class: :target-within <#the-target-within-pseudo>`__
         -  4

      *  -  ``E:scope``
         -  an E element being a `scoping root <#scoping-root>`__
         -  `§ 8.6 The Reference Element Pseudo-class: :scope <#the-scope-pseudo>`__
         -  4

      *  -  ``E:current``
         -  an E element that is currently presented in a time-dimensional canvas
         -  `§ 10.1 The Current-element Pseudo-class: :current <#the-current-pseudo>`__
         -  4

      *  -  ``E:current(`` ``s`` ``)``
         -  an E element that is the deepest `:current <#current-pseudo>`__
            element that matches selector ``s``
         -  `§ 10.1 The Current-element Pseudo-class: :current <#the-current-pseudo>`__
         -  4

      *  -  ``E:past``
         -  an E element that is in the past in a time-dimensional canvas
         -  `§ 10.2 The Past-element Pseudo-class: :past <#the-past-pseudo>`__
         -  4

      *  -  ``E:future``
         -  an E element that is in the future in a time-dimensional canvas
         -  `§ 10.3 The Future-element Pseudo-class: :future <#the-future-pseudo>`__
         -  4

      *  -  ``E:active``
         -  an E element that is in an activated state
         -  `§ 9.2 The Activation Pseudo-class: :active <#the-active-pseudo>`__
         -  1

      *  -  ``E:hover``
         -  an E element that is under the cursor, or that has a descendant under
            the cursor
         -  `§ 9.1 The Pointer Hover Pseudo-class: :hover <#the-hover-pseudo>`__
         -  2

      *  -  ``E:focus``
         -  an E element that has user input focus
         -  `§ 9.3 The Input Focus Pseudo-class: :focus <#the-focus-pseudo>`__
         -  2

      *  -  ``E:focus-within``
         -  an E element that has user input focus or contains an element that
            has input focus.
         -  `§ 9.5 The Focus Container Pseudo-class: :focus-within <#the-focus-within-pseudo>`__
         -  4

      *  -  ``E:focus-visible``
         -  an E element that has user input focus, and the UA has determined
            that a focus ring or other indicator should be drawn for that element
         -  `§ 9.4 The Focus-Indicated Pseudo-class: :focus-visible <#the-focus-visible-pseudo>`__
         -  4

      *  -  ``E:enabled``

      *  -  ``E:disabled``
         -  a user interface element E that is enabled or disabled, respectively
         -  `§ 13.1.1 The :enabled and :disabled Pseudo-classes <#enableddisabled>`__
         -  3

      *  -  ``E:read-write``
            ``E:read-only``
         -  a user interface element E that is user alterable, or not
         -  `§ 13.1.2 The Mutability Pseudo-classes: :read-only and :read-write <#rw-pseudos>`__
         -  3-UI/4

      *  -  ``E:placeholder-shown``
         -  an input control currently showing placeholder text
         -  `§ 13.1.3 The Placeholder-shown Pseudo-class:
            :placeholder-shown <#placeholder>`__
         -  3-UI/4

      *  -  ``E:default``
         -  a user interface element E that is the default item in a group of
         -  related choices
         -  `§ 13.1.5 The Default-option Pseudo-class: :default <#the-default-pseudo>`__
         -  3-UI/4

      *  -  ``E:checked``
         -  a user interface element E that is checked/selected (for instance a
            radio-button or checkbox)
         -  `§ 13.2.1 The Selected-option Pseudo-class: :checked <#checked>`__
         -  3

      *  -  ``E:indeterminate``
         -  a user interface element E that is in an indeterminate state (neither
            checked nor unchecked)
         -  `§ 13.2.2 The Indeterminate-value Pseudo-class: :indeterminate <#indeterminate>`__
         -  4

      *  -  ``E:valid``
            ``E:invalid``
         -  a user-input element E that meets, or doesn’t, its data validity
            semantics
         -  `§ 13.3.2 The Validity Pseudo-classes: :valid and :invalid <#validity-pseudos>`__
         -  3-UI/4

      *  -  ``E:in-range``

      *  -  ``E:out-of-range``
         -  a user-input element E whose value is in-range/out-of-range
         -  `§ 13.3.3 The Range Pseudo-classes: :in-range and :out-of-range <#range-pseudos>`__
         -  3-UI/4

      *  -  ``E:required``

      *  -  ``E:optional``
         -  a user-input element E that requires/does not require input
         -  `§ 13.3.4 The Optionality Pseudo-classes: :required and :optional <#opt-pseudos>`__
         -  3-UI/4

      *  -  ``E:blank``
         -  a user-input element E whose value is blank (empty/missing)
         -  `§ 13.3.1 The Empty-Value Pseudo-class: :blank <#blank>`__
         -  4

      *  -  ``E:user-invalid``
         -  a user-altered user-input element E with incorrect input (invalid,
            out-of-range, omitted-but-required)
         -  `§ 13.3.5 The User-interaction Pseudo-classes: :user-valid and :user-invalid <#user-pseudos>`__
         -  4

      *  -  ``E:root``
         -  an E element, root of the document
         -  `§ 14.1 :root pseudo-class <#the-root-pseudo>`__
         -  3

      *  -  ``E:empty``
         -  an E element that has no children (neither elements nor text) except
            perhaps white space
         -  `§ 14.2 :empty pseudo-class <#the-empty-pseudo>`__
         -  3

      *  -  ``E:nth-child(`` ``n`` ``[of`` ``S`` ``]?)``
         -  an E element, the ``n``-th child of its parent matching ``S``
         -  `§ 14.3.1 :nth-child() pseudo-class <#the-nth-child-pseudo>`__
         -  3/4

      *  -  ``E:nth-last-child(`` ``n`` ``[of`` ``S`` ``]?)``
         -  an E element, the ``n``-th child of its parent matching ``S``,
            counting from the last one
         -  `§ 14.3.2 :nth-last-child() pseudo-class <#the-nth-last-child-pseudo>`__
         -  3/4

      *  -  ``E:first-child``
         -  an E element, first child of its parent
         -  `§ 14.3.3 :first-child pseudo-class <#the-first-child-pseudo>`__
         -  2

      *  -  ``E:last-child``
         -  an E element, last child of its parent
         -  `§ 14.3.4 :last-child pseudo-class <#the-last-child-pseudo>`__
         -  3

      *  -  ``E:only-child``
         -  an E element, only child of its parent
         -  `§ 14.3.5 :only-child pseudo-class <#the-only-child-pseudo>`__
         -  3

      *  -  ``E:nth-of-type(`` ``n`` ``)``
         -  an E element, the ``n``-th sibling of its type
         -  `§ 14.4.1 :nth-of-type() pseudo-class <#the-nth-of-type-pseudo>`__
         -  3

      *  -  ``E:nth-last-of-type(`` ``n`` ``)``
         -  an E element, the ``n``-th sibling of its type, counting from the
            last one
         -  `§ 14.4.2 :nth-last-of-type() pseudo-class <#the-nth-last-of-type-pseudo>`__
         -  3

      *  -  ``E:first-of-type``
         -  an E element, first sibling of its type
         -  `§ 14.4.3 :first-of-type pseudo-class <#the-first-of-type-pseudo>`__
         -  3

      *  -  ``E:last-of-type``
         -  an E element, last sibling of its type
         -  `§ 14.4.4 :last-of-type pseudo-class <#the-last-of-type-pseudo>`__
         -  3

      *  -  ``E:only-of-type``
         -  an E element, only sibling of its type
         -  `§ 14.4.5 :only-of-type pseudo-class <#the-only-of-type-pseudo>`__
         -  3

      *  -  ``E F``
         -  an F element descendant of an E element
         -  `§ 15.1 Descendant combinator ( ) <#descendant-combinators>`__
         -  1

      *  -  ``E > F``
         -  an F element child of an E element
         -  `§ 15.2 Child combinator (>) <#child-combinators>`__
         -  2

      *  -  ``E + F``
         -  an F element immediately preceded by an E element
         -  `§ 15.3 Next-sibling combinator (+) <#adjacent-sibling-combinators>`__
         -  2

      *  -  ``E ~ F``
         -  an F element preceded by an E element
         -  `§ 15.4 Subsequent-sibling combinator (~) <#general-sibling-combinators>`__
         -  3

      *  -  ``F || E``
         -  an E element that represents a cell in a grid/table belonging to a
            column represented by an element F
         -  `§ 16.1 Column combinator (\|\|) <#the-column-combinator>`__
         -  4

      *  -  ``E:nth-col(`` ``n`` ``)``
         -  an E element that represents a cell belonging to the ``n`` th column
            in a grid/table
         -  `§ 16.2 :nth-col() pseudo-class <#the-nth-col-pseudo>`__
         -  4

      *  -  ``E:nth-last-col(`` ``n`` ``)``
         -  an E element that represents a cell belonging to the ``n`` th column
            in a grid/table, counting from the last one
         -  `§ 16.3 :nth-last-col() pseudo-class <#the-nth-last-col-pseudo>`__
         -  4

   Note: Some Level 4 selectors (noted above as "3-UI") were introduced
   in `[CSS3UI] <#biblio-css3ui>`__.

/3. Selector Syntax and Structure 
==================================

   .. .. rubric:: 3. Selector Syntax and Structure ` <#syntax>`__
      :name: syntax
      :class: heading settled

/3.1. Structure and Terminology 
================================

   .. .. rubric:: 3.1. Structure and Terminology ` <#structure>`__
      :name: structure
      :class: heading settled

   A selector represents a particular pattern of element(s) in a tree
   structure. The term `selector <#selector>`__ can refer to a `simple
   selector <#simple>`__, `compound selector <#compound>`__, `complex
   selector <#complex>`__, or `selector list <#selector-list>`__. The
   subject of a selector is any element that selector is defined to be
   about; that is, any element matching that selector.

   A simple selector is a single condition on an element. A `type
   selector <#type-selector>`__, `universal
   selector <#universal-selector>`__, `attribute
   selector <#attribute-selector>`__, `class
   selector <#class-selector>`__, `ID selector <#id-selector>`__, or
   `pseudo-class <#pseudo-class>`__ is a `simple selector <#simple>`__.
   (It is represented by
   `<simple-selector> <#typedef-simple-selector>`__ in the selectors
   `grammar <#grammar>`__.) A given element is said to
   `match <#match>`__ a simple selector when that simple selector, as
   defined in this specification and in accordance with the `document
   language <#document-language>`__, accurately describes the element.

   A compound selector is a sequence of `simple selectors <#simple>`__
   that are not separated by a combinator, and represents a set of
   simultaneous conditions on a single element. If it contains a `type
   selector <#type-selector>`__ or `universal
   selector <#universal-selector>`__, that selector must come first in
   the sequence. Only one type selector or universal selector is allowed
   in the sequence. (A `compound selector <#compound>`__ is represented
   by `<compound-selector> <#typedef-compound-selector>`__ in the
   selectors `grammar <#grammar>`__.) A given element is said to
   `match <#match>`__ a compound selector when it matches all simple
   selectors in the compound selector.

   Note: As whitespace represents the `descendant
   combinator <#descendant-combinator>`__, no whitespace is allowed
   between the `simple selectors <#simple>`__ in a `compound
   selector <#compound>`__.

   A pseudo-compound selector is a `pseudo-element <#pseudo-element>`__
   selector, optionally followed by additional
   `pseudo-class <#pseudo-class>`__ selectors, and optionally preceded
   by a `compound selector <#compound>`__ or another `pseudo-compound
   selector <#pseudo-compound>`__, without any combinators. (A
   pseudo-compound selector is represented by
   `<pseudo-compound-selector> <#typedef-pseudo-compound-selector>`__ in
   the selectors `grammar <#grammar>`__.) A pseudo-element
   `matches <#match>`__ a pseudo-compound selector when it has the
   specified pseudo-element name, matches the additional conditions
   represented by any pseudo-classes, and has an `originating
   element <#originating-element>`__ represented by the adjacent
   preceding selector. If there is no adjacent preceding selector, the
   `universal selector <#universal-selector>`__ is assumed. (For
   example, .foo ::before is equivalent to .foo \*::before, and distinct
   from .foo::before.)

   .. container:: example
      :name: example-9e91e72f

      ` <#example-9e91e72f>`__ For example, in .foo::before:hover, the
      .foo is a `compound selector <#compound>`__, while the
      ::before:hover is a `pseudo-compound
      selector <#pseudo-compound>`__. However, in .foo::before::marker,
      `::before <https://drafts.csswg.org/css-pseudo-4/#selectordef-before>`__
      and
      `::marker <https://drafts.csswg.org/css-pseudo-4/#selectordef-marker>`__
      are separate pseudo-compound selectors.

   Note: A `pseudo-compound selector <#pseudo-compound>`__ **is not** a
   `compound selector <#compound>`__, and can’t be used in places that
   expect a compound selector only. Pseudo-compound selectors act as if
   they carry a combinator with themselves, expressing their
   relationship with their `originating
   element <#originating-element>`__, just as the
   `> <#selectordef-child>`__ combinator expresses a relationship with a
   parent element.

   A combinator is a condition of relationship between two elements
   represented by the `compound selectors <#compound>`__ on either side.
   Combinators in Selectors Level 4 include: the `descendant
   combinator <#descendant-combinator>`__ (white space), the `child
   combinator <#child-combinator>`__ (U+003E, ``>``), the `next-sibling
   combinator <#next-sibling-combinator>`__ (U+002B, ``+``), and the
   `subsequent-sibling combinator <#subsequent-sibling-combinator>`__
   (U+007E, ``~``). Two given elements are said to `match <#match>`__ a
   combinator when the condition of relationship between these elements
   is true.

   A complex selector is a sequence of one or more `compound
   selectors <#compound>`__ and/or `pseudo-compound
   selectors <#pseudo-compound>`__, with compound selectors separated by
   combinators. It represents a set of simultaneous conditions on a set
   of elements in the particular relationships described by its
   combinators. (Complex selectors are represented by
   `<complex-selector> <#typedef-complex-selector>`__ in the selectors
   `grammar <#grammar>`__.) A given element or pseudo-element is said to
   `match <#match>`__ a `complex selector <#complex>`__ when it matches
   the final compound/pseudo-compound selector in the sequence, and
   every preceding unit of the sequence also matches an element or
   `pseudo-element <#pseudo-element>`__, with the correct relationship
   between consecutive units as expressed by the combinators separating
   them (or, for pseudo-compound selectors, the correct `originating
   element <#originating-element>`__ relationship).

   .. container:: example
      :name: example-3e6d4159

      ` <#example-3e6d4159>`__ For example, .foo.bar matches an element
      with both "foo" and "bar" classes.
      .ancestor > .foo.bar matches a subset of those elements: only
      those whose parent element (as indicated by the
      `> <#selectordef-child>`__ combinator) has the "ancestor" class.

      .foo.bar::before matches a
      `::before <https://drafts.csswg.org/css-pseudo-4/#selectordef-before>`__
      pseudo-element, whose `originating
      element <#originating-element>`__ matches .foo.bar.

   A list of simple/compound/complex selectors is a comma-separated list
   of `simple <#simple>`__, `compound <#compound>`__, or `complex
   selectors <#complex>`__. This is also called just a selector list
   when the type is either unimportant or specified in the surrounding
   prose; if the type is important and unspecified, it defaults to
   meaning a `list of complex selectors <#list-of-simple-selectors>`__.
   (See `§ 4.1 Selector Lists <#grouping>`__ for additional information
   on `selector lists <#selector-list>`__ and the various
   <\*-selector-list> productions in the `grammar <#grammar>`__ for
   their formal syntax.) A given element is said to `match <#match>`__ a
   selector list when it matches any (at least one) of the
   `selectors <#selector>`__ in that selector list.

/3.2. Data Model 
=================

   .. .. rubric:: 3.2. Data Model ` <#data-model>`__
      :name: data-model
      :class: heading settled

   Selectors are evaluated against an element tree such as the DOM.
   `[DOM] <#biblio-dom>`__ Within this specification, this may be
   referred to as the "document tree" or "source document".

   Each element may have any of the following five aspects, which can be
   selected against, all of which are matched as strings:

   -  The element’s type (also known as its tag name).
   -  The element’s namespace.
   -  An ID.
   -  Classes (named groups) to which it belongs.
   -  Attributes, which are name-value pairs.

   While individual elements may lack any of the above features, some
   elements are featureless. A `featureless <#featureless>`__ element
   does not match any selector at all, except those it is explicitly
   defined to match (and `logical combination
   pseudo-classes <#logical-combination-pseudo-classes>`__ representing
   those selectors). If a given selector *is* allowed to match a
   featureless element, it must do so while ignoring the default
   namespace. `[CSS3NAMESPACE] <#biblio-css3namespace>`__

   .. container:: example
      :name: example-f361914a

      ` <#example-f361914a>`__ For example, the `shadow
      host <https://dom.spec.whatwg.org/#element-shadow-host>`__ in a
      `shadow tree <https://dom.spec.whatwg.org/#concept-shadow-tree>`__
      is `featureless <#featureless>`__, and can’t be matched by *any*
      `pseudo-class <#pseudo-class>`__ except for
      `:host <https://drafts.csswg.org/css-scoping-1/#selectordef-host>`__
      and
      `:host-context() <https://drafts.csswg.org/css-scoping-1/#selectordef-host-context>`__
      (or combinations including those, such as :is(:host, :root)).

   Many of the selectors depend on the semantics of the document
   language (i.e. the language and semantics of the document tree)
   and/or the semantics of the host language (i.e. the language that is
   using selectors syntax). For example, the `:lang() <#lang-pseudo>`__
   selector depends on the `document language <#document-language>`__
   (e.g. HTML) to define how an element is associated with a language.
   As a slightly different example, the
   `::first-line <https://drafts.csswg.org/css-pseudo-4/#selectordef-first-line>`__
   pseudo-element depends on the `host language <#host-language>`__
   (e.g. CSS) to define what a ::first-line pseudo-element represents
   and what it can do.

/3.3. Scoped Selectors 
=======================

   .. .. rubric:: 3.3. Scoped Selectors ` <#scoping>`__
      :name: scoping
      :class: heading settled

   Some host applications may choose to scope selectors to a particular
   subtree or fragment of the document, The root of the scoping subtree
   is called the scoping root.

   When a selector is `scoped <#scoped-selector>`__, it matches an
   element only if the element is a descendant of the `scoping
   root <#scoping-root>`__. (The rest of the selector can match
   unrestricted; it’s only the final matched elements that must be
   within the scope.)

   .. container:: example
      :name: example-32ec254f

      ` <#example-32ec254f>`__ For example, the ``querySelector()``
      method defined in `[DOM] <#biblio-dom>`__ allows the author to
      evaluate a `scoped <#scoped-selector>`__ selector relative to the
      element it’s called on.
      A call like ``widget.querySelector("a")`` will thus only find
      ```a`` <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element>`__
      elements inside of the ``widget`` element, ignoring any other
      ```a`` <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element>`__ s
      that might be scattered throughout the document.

/3.4. Relative Selectors 
=========================

   .. .. rubric:: 3.4. Relative Selectors ` <#relative>`__
      :name: relative
      :class: heading settled

   Certain contexts may accept relative selectors, which are a shorthand
   for selectors that represent elements relative to one or more
   relative selector anchor elements. Relative selectors begin with a
   combinator, with a selector representing the `anchor
   element <#relative-selector-anchor-elements>`__ implied at the start
   of the selector. (If no combinator is present, the `descendant
   combinator <#descendant-combinator>`__ is implied.)

   Relative selectors are represented by
   `<relative-selector> <#typedef-relative-selector>`__ in the selectors
   `grammar <#grammar>`__, and lists of them by
   `<relative-selector-list> <#typedef-relative-selector-list>`__.

/3.5. Pseudo-classes 
=====================

   .. .. rubric:: 3.5. Pseudo-classes ` <#pseudo-classes>`__
      :name: pseudo-classes
      :class: heading settled

   Pseudo-classes are `simple selectors <#simple>`__ that permit
   selection based on information that lies outside of the document tree
   or that can be awkward or impossible to express using the other
   simple selectors. They can also be dynamic, in the sense that an
   element can acquire or lose a pseudo-class while a user interacts
   with the document, without the document itself changing.
   `Pseudo-classes <#pseudo-class>`__ do not appear in or modify the
   document source or document tree.

   The syntax of a `pseudo-class <#pseudo-class>`__ consists of a ":"
   (U+003A COLON) followed by the name of the pseudo-class as a CSS
   `identifier <https://drafts.csswg.org/css-values-4/#css-css-identifier>`__,
   and, in the case of a functional pseudo-class, a pair of parentheses
   containing its arguments.

   ` <#example-86ae2021>`__ For example, `:valid <#valid-pseudo>`__ is a
   regular pseudo-class, and `:lang() <#lang-pseudo>`__ is a `functional
   pseudo-class <#functional-pseudo-class>`__.

   Like all CSS keywords, `pseudo-class <#pseudo-class>`__ names are
   `ASCII
   case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__.
   No `white space <#whitespace>`__ is allowed between the colon and the
   name of the pseudo-class, nor, as usual for CSS syntax, between a
   `functional pseudo-class <#functional-pseudo-class>`__ ’s name and
   its opening parenthesis (which thus form a CSS function token). Also
   as usual, white space is allowed around the arguments inside the
   parentheses of a functional pseudo-class unless otherwise specified.

   Like other `simple selectors <#simple>`__,
   `pseudo-classes <#pseudo-class>`__ are allowed in all `compound
   selectors <#compound>`__ contained in a selector, and must follow the
   `type selector <#type-selector>`__ or `universal
   selector <#universal-selector>`__, if present.

   Note: Some `pseudo-classes <#pseudo-class>`__ are mutually exclusive
   (such that a `compound selector <#compound>`__ containing them, while
   valid, will never match anything), while others can apply
   simultaneously to the same element.

/3.6. Pseudo-elements 
======================

   .. .. rubric:: 3.6. Pseudo-elements ` <#pseudo-elements>`__
      :name: pseudo-elements
      :class: heading settled

   Similar to how certain `pseudo-classes <#pseudo-class>`__ represent
   additional state information not directly present in the document
   tree, a pseudo-element represents an *element* not directly present
   in the document tree. They are used to create abstractions about the
   document tree beyond those provided by the document tree. For
   example, pseudo-elements can be used to select portions of the
   document that do not correspond to a document-language element
   (including such ranges as don’t align to element boundaries or fit
   within its tree structure); that represent content not in the
   document tree or in an alternate projection of the document tree; or
   that rely on information provided by styling, layout, user
   interaction, and other processes that are not reflected in the
   document tree.

   .. container:: example
      :name: example-6916597f

      ` <#example-6916597f>`__ For instance, document languages do not
      offer mechanisms to access the first letter or first line of an
      element’s content, but there exist
      `pseudo-elements <#pseudo-element>`__
      (`::first-letter <https://drafts.csswg.org/css-pseudo-4/#selectordef-first-letter>`__
      and
      `::first-line <https://drafts.csswg.org/css-pseudo-4/#selectordef-first-line>`__)
      that allow those things to be styled. Notice especially that in
      the case of ::first-line, which portion of content is represented
      by the pseudo-element depends on layout information that cannot be
      inferred from the document tree.
      `Pseudo-elements <#pseudo-element>`__ can also represent content
      that doesn’t exist in the source document at all, such as the
      `::before <https://drafts.csswg.org/css-pseudo-4/#selectordef-before>`__
      and
      `::after <https://drafts.csswg.org/css-pseudo-4/#selectordef-after>`__
      pseudo-elements which allow additional content to be inserted
      before or after the contents of any element.

   Like `pseudo-classes <#pseudo-class>`__
   `pseudo-elements <#pseudo-element>`__ do not appear in or modify the
   document source or document tree. Accordingly, they also do not
   affect the interpretation of `structural
   pseudo-classes <#structural-pseudo-classes>`__ or other selectors
   pertaining to their `originating element <#originating-element>`__ or
   its tree.

   The host language defines which pseudo-elements exist, their type,
   and their abilities. Pseudo-elements that exist in CSS are defined in
   `[CSS21] <#biblio-css21>`__ (Level 2), `[SELECT] <#biblio-select>`__
   (Level 3), and `[CSS-PSEUDO-4] <#biblio-css-pseudo-4>`__ (Level 4).

/3.6.1. Syntax 
===============

   .. .. rubric:: 3.6.1. Syntax ` <#pseudo-element-syntax>`__
      :name: pseudo-element-syntax
      :class: heading settled

   The syntax of a `pseudo-element <#pseudo-element>`__ is "::" (two
   U+003A COLON characters) followed by the name of the pseudo-element
   as an
   `identifier <https://drafts.csswg.org/css-values-4/#css-css-identifier>`__,
   and, in the case of a functional pseudo-element, a pair of
   parentheses containing its arguments. Pseudo-element names are `ASCII
   case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__.
   No `white space <#whitespace>`__ is allowed between the two colons,
   or between the colons and the name.

   Because `CSS Level 1 <https://www.w3.org/TR/CSS1>`__ and `CSS Level
   2 <https://www.w3.org/TR/CSS2>`__ conflated pseudo-elements and
   pseudo-classes by sharing a single-colon syntax for both, user agents
   must also accept the previous one-colon notation for the Level 1 & 2
   pseudo-elements
   (`::before <https://drafts.csswg.org/css-pseudo-4/#selectordef-before>`__,
   `::after <https://drafts.csswg.org/css-pseudo-4/#selectordef-after>`__,
   `::first-line <https://drafts.csswg.org/css-pseudo-4/#selectordef-first-line>`__,
   and
   `::first-letter <https://drafts.csswg.org/css-pseudo-4/#selectordef-first-letter>`__).
   This compatibility notation is not allowed for any other
   `pseudo-elements <#pseudo-element>`__. However, as this syntax is
   deprecated, authors should use the Level 3+ double-colon syntax for
   these pseudo-elements.

   `Pseudo-elements <#pseudo-element>`__ are
   `featureless <#featureless>`__, and so can’t be matched by any other
   selector.

/3.6.2. Binding to the Document
===============================

   .. .. rubric:: 3.6.2. Binding to the Document
      Tree ` <#pseudo-element-attachment>`__
      :name: pseudo-element-attachment
      :class: heading settled

   `Pseudo-elements <#pseudo-element>`__ do not exist independently in
   the tree: they are always bound to another element on the page,
   called their originating element. Syntactically, a pseudo-element
   immediately follows the `compound selector <#compound>`__
   representing its `originating element <#originating-element>`__. If
   this compound selector is omitted, it is assumed to be the `universal
   selector <#universal-selector>`__
   `\* <https://drafts.csswg.org/selectors-3/#x>`__.

   .. container:: example
      :name: example-e6d9ca44

      ` <#example-e6d9ca44>`__ For example, in the selector div
      a::before, the
      `a <https://drafts.csswg.org/css-color-5/#valdef-lab-a>`__
      elements matched by the selector are the `originating
      elements <#originating-element>`__ for the
      `::before <https://drafts.csswg.org/css-pseudo-4/#selectordef-before>`__
      pseudo-elements attached to them.
      The selector
      `::first-line <https://drafts.csswg.org/css-pseudo-4/#selectordef-first-line>`__
      is equivalent to \*::first-line, which selects the ::first-line
      pseudo-element on *every* element in the document.

   When a `pseudo-element <#pseudo-element>`__ is encountered in a
   selector, the part of the selector before the pseudo-element selects
   the `originating element <#originating-element>`__ for the
   pseudo-element; the part of the selector after it, if any, applies to
   the pseudo-element itself. (See below.)

/3.6.3. Pseudo-classing
=======================

   .. .. rubric:: 3.6.3. Pseudo-classing
      Pseudo-elements ` <#pseudo-element-states>`__
      :name: pseudo-element-states
      :class: heading settled

   Certain `pseudo-elements <#pseudo-element>`__ may be immediately
   followed by any combination of certain
   `pseudo-classes <#pseudo-class>`__, in which case the pseudo-element
   is represented only when it is in the corresponding state. This
   specification allows any pseudo-element to be followed by any
   combination of the `logical combination
   pseudo-classes <#logical-combination-pseudo-classes>`__ and the `user
   action pseudo-classes <#user-action-pseudo-class>`__. Other
   specifications may allow additional pseudo-classes to be attached to
   particular pseudo-elements. Combinations that are not explicitly
   allowed are `invalid selectors <#invalid-selector>`__.

   Note: The `logical combination
   pseudo-classes <#logical-combination-pseudo-classes>`__ pass any
   restrictions on validity of selectors at their position to their
   arguments.

   .. container:: example
      :name: example-61c8ad8f

      ` <#example-61c8ad8f>`__ For example, since the
      `:hover <#hover-pseudo>`__ pseudo-class specifies that it can
      apply to any pseudo-element, ::first-line:hover will match when
      the first line is hovered. However, since neither
      `:focus <#focus-pseudo>`__ nor
      `::first-line <https://drafts.csswg.org/css-pseudo-4/#selectordef-first-line>`__
      define that :focus can apply to ::first-line, the selector
      ::first-line:focus will never match anything.
      Notice that ::first-line:hover is very different from
      :hover::first-line, which matches the first line of any
      originating element that is hovered! For example,
      :hover::first-line also matches the first line of a paragraph when
      the second line of the paragraph is hovered, whereas
      ::first-line:hover only matches if the first line itself is
      hovered.

/3.6.4. Sub-pseudo-elements 
============================

   .. .. rubric:: 3.6.4. Sub-pseudo-elements ` <#sub-pseudo-elements>`__
      :name: sub-pseudo-elements
      :class: heading settled

   Some `pseudo-elements <#pseudo-element>`__ are able to be the
   `originating element <#originating-element>`__ of other
   pseudo-elements, which are defined as the sub-pseudo-elements of this
   originating pseudo-element. For example, when
   `::before <https://drafts.csswg.org/css-pseudo-4/#selectordef-before>`__
   is given a
   `list-item <https://drafts.csswg.org/css-display-4/#valdef-display-list-item>`__
   `display
   type <https://drafts.csswg.org/css-display-4/#display-type>`__, it
   becomes the `originating
   pseudo-element <#originating-pseudo-element>`__ of its
   ::before::marker `sub-pseudo-element <#sub-pseudo-element>`__.

   Where disambiguation is needed, the term ultimate originating element
   refers to the real (non-pseudo) element from which a
   `pseudo-element <#pseudo-element>`__ originates.

   Unless the corresponding `sub-pseudo-element <#sub-pseudo-element>`__
   is explicitly defined to exist in another specification,
   pseudo-element selectors are not valid when compounded to another
   pseudo-element selector. So, for example, ::before::before is an
   invalid selector, but ::before::marker is valid (in implementations
   that support the ::before::marker sub-pseudo-element).

/3.6.5. Internal
================

   .. .. rubric:: 3.6.5. Internal
      Structure ` <#pseudo-element-structure>`__
      :name: pseudo-element-structure
      :class: heading settled

   Some `pseudo-elements <#pseudo-element>`__ are defined to have
   internal structure. These pseudo-elements may be followed by
   child/descendant combinators to express those relationships.
   Selectors containing combinators after the pseudo-element are
   otherwise invalid.

   .. container:: example
      :name: example-3594b9ac

      ` <#example-3594b9ac>`__ For example, ::first-letter + span and
      ::first-letter em are invalid selectors. However, if a new
      `::shadow <https://www.w3.org/TR/css-scoping-1/#selectordef-shadow>`__
      pseudo-element were defined to have internal structure, ::shadow >
      p would be a valid selector.

   Note: A future specification may expand the capabilities of existing
   pseudo-elements, so some of these currently-invalid selectors (e.g.
   ::first-line :any-link) may become valid in the future.

   The children of such `pseudo-elements <#pseudo-element>`__ can
   simultaneously be children of other elements, too. However, at least
   in CSS, their rendering must be defined so as to maintain the
   tree-ness of the `box
   tree <https://drafts.csswg.org/css-display-4/#box-tree>`__.

/3.7. Characters and case
=========================

   .. .. rubric:: 3.7. Characters and case
      sensitivity ` <#case-sensitive>`__
      :name: case-sensitive
      :class: heading settled

   All Selectors syntax is `ASCII
   case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__
   (i.e. [a-z] and [A-Z] are equivalent), except for the parts that are
   not under the control of Selectors: specifically, the
   case-sensitivity of document language element names, attribute names,
   and attribute values depends on the document language.

   .. container:: example
      :name: example-5ac03fca

      ` <#example-5ac03fca>`__ For example, `in HTML, element and
      attribute names are ASCII
      case-insensitive <https://html.spec.whatwg.org/multipage/semantics-other.html#selectors>`__,
      but in XML, they are case-sensitive.

   Case sensitivity of namespace prefixes is defined in
   `[CSS3NAMESPACE] <#biblio-css3namespace>`__. Case sensitivity of
   `language ranges <#language-range>`__ is defined in the
   `:lang() <#lang-pseudo>`__ section.

   White space in Selectors consists of the code points SPACE (U+0020),
   TAB (U+0009), LINE FEED (U+000A), CARRIAGE RETURN (U+000D), and FORM
   FEED (U+000C). Other space-like code points, such as EM SPACE
   (U+2003) and IDEOGRAPHIC SPACE (U+3000), are never considered
   syntactic white space.

   Code points in Selectors can be escaped with a backslash according to
   the same `escaping
   rules <https://www.w3.org/TR/CSS21/syndata.html#characters>`__ as
   CSS. `[CSS21] <#biblio-css21>`__ Note that escaping a code point
   “cancels out” any special meaning it may have in Selectors. For
   example, the selector #foo>a contains a combinator, but #foo\\>a
   instead selects an element with the id ``foo>a``.

/3.8. Declaring Namespace Prefixes 
===================================

   .. .. rubric:: 3.8. Declaring Namespace Prefixes ` <#namespaces>`__
      :name: namespaces
      :class: heading settled

   Certain selectors support namespace prefixes. The mechanism by which
   namespace prefixes are declared should be specified by the language
   that uses Selectors. If the language does not specify a namespace
   prefix declaration mechanism, then no prefixes are declared. In CSS,
   namespace prefixes are declared with the
   `@namespace <https://drafts.csswg.org/css-namespaces-3/#at-ruledef-namespace>`__
   rule. `[CSS3NAMESPACE] <#biblio-css3namespace>`__

/3.9. Invalid Selectors and Error
=================================

   .. .. rubric:: 3.9. Invalid Selectors and Error
      Handling ` <#invalid>`__
      :name: invalid
      :class: heading settled

   User agents must observe the rules for handling invalid selectors:

   -  a parsing error in a selector, e.g. an unrecognized token or a
      token which is not allowed at the current parsing point (see
      overall `§ 18 Grammar <#grammar>`__ and per-selector syntax
      definitions), causes that selector to be invalid.
   -  a simple selector containing an `undeclared namespace
      prefix <#namespaces>`__ is invalid
   -  a selector containing an invalid simple selector, an invalid
      combinator or an invalid token is invalid.
   -  a selector list containing an invalid selector is invalid.
   -  an empty selector, i.e. one that contains no `compound
      selector <#compound>`__, is invalid.

   Note: Consistent with CSS’s forwards-compatible parsing principle,
   UAs *must* treat as `invalid <#invalid-selector>`__ any
   pseudo-classes, pseudo-elements, combinators, or other syntactic
   constructs for which they have no usable level of support. See
   `Partial implementations <#w3c-partial>`__.

   An `invalid selector <#invalid-selector>`__ represents, and therefore
   matches, nothing.

/3.10. Legacy Aliases 
======================

   .. .. rubric:: 3.10. Legacy Aliases ` <#legacy-aliasing>`__
      :name: legacy-aliasing
      :class: heading settled

   Some selectors have a legacy selector alias. This is a name which, at
   parse time, is converted to the standard name (and thus does not
   appear anywhere in any object model representing the selector).

/4. Logical Combinations 
=========================

   .. .. rubric:: 4. Logical Combinations ` <#logical-combination>`__
      :name: logical-combination
      :class: heading settled

   Selector logic can be manipulated by `compounding <#compound>`__
   (logical AND), `selector lists <#selector-list>`__ (logical OR), and
   the logical combination pseudo-classes `:is() <#matches-pseudo>`__,
   `:where() <#where-pseudo>`__, and `:not() <#negation-pseudo>`__. The
   `logical combination
   pseudo-classes <#logical-combination-pseudo-classes>`__ are allowed
   anywhere that any other `pseudo-classes <#pseudo-class>`__ are
   allowed, but pass any restrictions to their arguments. (For example,
   if only compound selectors are allowed, then only compound selectors
   are valid within an :is().)

   Note: Since inside `:is() <#matches-pseudo>`__ and
   `:where() <#where-pseudo>`__ invalid arguments are dropped without
   invaliding the `pseudo-class <#pseudo-class>`__ itself, selector
   arguments that are invalidated by contextual restrictions likewise do
   not invalidate the :is() pseudo-class itself.

/4.1. Selector Lists 
=====================

   .. .. rubric:: 4.1. Selector Lists ` <#grouping>`__
      :name: grouping
      :class: heading settled

   A comma-separated list of selectors represents the union of all
   elements selected by each of the individual selectors in the
   `selector list <#selector-list>`__. (A comma is U+002C.) For example,
   in CSS when several selectors share the same declarations, they may
   be grouped into a comma-separated list. White space may appear before
   and/or after the comma.

   .. container:: example
      :name: example-1930da7e

      ` <#example-1930da7e>`__ CSS example: In this example, we condense
      three rules with identical declarations into one. Thus,
      ::

         h1 { font-family: sans-serif }
         h2 { font-family: sans-serif }
         h3 { font-family: sans-serif }

      is equivalent to:

      ::

         h1, h2, h3 { font-family: sans-serif }

   **Warning**: the equivalence is true in this example because all the
   selectors are valid selectors. If just one of these selectors were
   invalid, the entire `selector list <#selector-list>`__ would be
   invalid. This would invalidate the rule for all three heading
   elements, whereas in the former case only one of the three individual
   heading rules would be invalidated.

   .. container:: example
      :name: example-fd0daa05

      ` <#example-fd0daa05>`__ Invalid CSS example:
      ::

         h1 { font-family: sans-serif }
         h2..foo { font-family: sans-serif }
         h3 { font-family: sans-serif }

      is not equivalent to:

      ::

         h1, h2..foo, h3 { font-family: sans-serif } 

      because the above selector (h1, h2..foo, h3) is entirely invalid
      and the entire style rule is dropped. (When the selectors are not
      grouped, only the rule for h2..foo is dropped.)

/4.2. The Matches-Any Pseudo-class:
===================================

   .. .. rubric:: 4.2. The Matches-Any Pseudo-class:
      `:is() <#matches-pseudo>`__ ` <#matches>`__
      :name: matches
      :class: heading settled

   The matches-any pseudo-class, :is(), is a functional pseudo-class
   taking a
   `<forgiving-selector-list> <#typedef-forgiving-selector-list>`__ as
   its sole argument.

   If the argument, after parsing, is an empty list, the pseudo-class is
   valid but matches nothing. Otherwise, the pseudo-class matches any
   element that matches any of the selectors in the list.

   Note: The specificity of the `:is() <#matches-pseudo>`__ pseudo-class
   is replaced by the specificity of its most specific argument. Thus, a
   selector written with :is() does not necessarily have equivalent
   specificity to the equivalent selector written without :is() For
   example, if we have :is(ul, ol, .list) > [hidden] and ul > [hidden],
   ol > [hidden], .list > [hidden] a [hidden] child of an
   ```ol`` <https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element>`__
   matches the first selector with a specificity of (0,2,0) whereas it
   matches the second selector with a specificity of (0,1,1). See `§ 17
   Calculating a selector’s specificity <#specificity-rules>`__.

   Pseudo-elements cannot be represented by the matches-any
   pseudo-class; they are not valid within `:is() <#matches-pseudo>`__.

   Default namespace declarations do not affect the `compound
   selector <#compound>`__ representing the subject of any selector
   within a `:is() <#matches-pseudo>`__ pseudo-class, unless that
   compound selector contains an explicit `universal
   selector <#universal-selector>`__ or `type
   selector <#type-selector>`__.

   .. container:: example
      :name: example-2cab03ed

      ` <#example-2cab03ed>`__ For example, the following selector
      matches any element that is being hovered or focused, regardless
      of its namespace. In particular, it is not limited to only
      matching elements in the default namespace that are being hovered
      or focused.
      ::

         *|*:is(:hover, :focus) 

      The following selector, however, represents only hovered or
      focused elements that are in the default namespace, because it
      uses an explicit universal selector within the
      `:is() <#matches-pseudo>`__ notation:

      ::

         *|*:is(*:hover, *:focus) 

   As previous drafts of this specification used the name :matches() for
   this pseudo-class, UAs may additionally implement this obsolete name
   as a `legacy selector alias <#legacy-selector-alias>`__ for
   `:is() <#matches-pseudo>`__ if needed for backwards-compatibility.

/4.3. The Negation (Matches-None) Pseudo-class:
===============================================

   .. .. rubric:: 4.3. The Negation (Matches-None) Pseudo-class:
      `:not() <#negation-pseudo>`__ ` <#negation>`__
      :name: negation
      :class: heading settled

   The negation pseudo-class, :not(), is a functional pseudo-class
   taking a
   `<complex-real-selector-list> <#typedef-complex-real-selector-list>`__
   as an argument. It represents an element that is not represented by
   its argument.

   Note: In Selectors Level 3, only a single `simple
   selector <#simple>`__ was allowed as the argument to
   `:not() <#negation-pseudo>`__.

   Note: The specificity of the `:not() <#negation-pseudo>`__
   pseudo-class is replaced by the specificity of the most specific
   selector in its argument; thus it has the exact behavior of
   :not(:is(``argument``)). See `§ 17 Calculating a selector’s
   specificity <#specificity-rules>`__.

   Pseudo-elements cannot be represented by the negation pseudo-class;
   they are not valid within `:not() <#negation-pseudo>`__.

   .. container:: example
      :name: example-2a176618

      ` <#example-2a176618>`__ For example, the following selector
      matches all
      `button <https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element>`__
      elements in an HTML document that are not disabled.
      ::

         button:not([DISABLED]) 

      The following selector represents all but FOO elements.

      ::

         *:not(FOO)

      The following compound selector represents all HTML elements
      except links.

      ::

         html|*:not(:link):not(:visited)

   As with `:is() <#matches-pseudo>`__, default namespace declarations
   do not affect the `compound selector <#compound>`__ representing the
   subject of any selector within a `:not() <#negation-pseudo>`__
   pseudo-class, unless that compound selector contains an explicit
   `universal selector <#universal-selector>`__ or `type
   selector <#type-selector>`__. (See :is() for examples.)

   Note: The `:not() <#negation-pseudo>`__ pseudo-class allows useless
   selectors to be written. For instance :not(\*|\*), which represents
   no element at all, or div:not(span), which is equivalent to div but
   with a higher specificity.

/4.4. The Specificity-adjustment Pseudo-class:
==============================================

   .. .. rubric:: 4.4. The Specificity-adjustment Pseudo-class:
      `:where() <#where-pseudo>`__ ` <#zero-matches>`__
      :name: zero-matches
      :class: heading settled

   The Specificity-adjustment pseudo-class, :where(), is a functional
   pseudo-class with the same syntax and functionality as
   `:is() <#matches-pseudo>`__. Unlike :is(), neither the
   `:where() <#where-pseudo>`__ pseudo-class, nor any of its arguments,
   contribute to the `specificity <#specificity>`__ of the selector—​its
   specificity is always zero.

   This is useful for introducing filters in a selector while keeping
   the associated style declarations easy to override.

   .. container:: example
      :name: example-7ca50acf

      ` <#example-7ca50acf>`__ Below is a common example where the
      specificity heuristic fails to match author expectations:
      ::

         a:not(:hover) {
           text-decoration: none;
         }

         nav a {
           /* Has no effect */
           text-decoration: underline;
         }

      However, by using `:where() <#where-pseudo>`__ the author can
      explicitly declare their intent:

      ::

         a:where(:not(:hover)) {
           text-decoration: none;
         }

         nav a {
           /* Works now! */
           text-decoration: underline;
         }

   Note: Future levels of Selectors may introduce an additional argument
   to explicitly set the specificity of that instance of the
   pseudo-class.

/4.5. The Relational Pseudo-class:
==================================

   .. .. rubric:: 4.5. The Relational Pseudo-class:
      `:has() <#has-pseudo>`__ ` <#relational>`__
      :name: relational
      :class: heading settled

   The relational pseudo-class, :has(), is a functional pseudo-class
   taking a
   `<relative-selector-list> <#typedef-relative-selector-list>`__ as an
   argument. It represents an element if any of the `relative
   selectors <#relative-selector>`__ would match at least one element
   when `anchored against <#relative-selector-anchor-elements>`__ this
   element.

   The `:has() <#has-pseudo>`__ pseudo-class cannot be nested; :has() is
   not valid within :has(). Also, unless explicitly defined as a
   :has-allowed pseudo-element, `pseudo-elements <#pseudo-element>`__
   are not valid selectors within :has(). (This specification does not
   define any `:has-allowed
   pseudo-elements <#has-allowed-pseudo-element>`__, but other
   specifications may do so.)

   Note: Pseudo-elements are generally excluded from
   `:has() <#has-pseudo>`__ because many of them exist conditionally,
   based on the styling of their ancestors, so allowing these to be
   queried by :has() would introduce cycles.

   Note: Since `:has() <#has-pseudo>`__ takes a
   `<relative-selector-list> <#typedef-relative-selector-list>`__, its
   arguments are *inherently* `complex selectors <#complex>`__ (because
   they start, perhaps implicitly, with a combinator). This means :has()
   cannot be used in contexts that don’t allow complex selectors; its
   arguments will be guaranteed to be invalid.

   .. container:: example
      :name: example-61d52da1

      ` <#example-61d52da1>`__ For example, the following selector
      matches only ``<a>`` elements that contain an ``<img>`` child:
      ::

         a:has(> img)

      The following selector matches a ``<dt>`` element immediately
      followed by another ``<dt>`` element:

      ::

         dt:has(+ dt)

      The following selector matches ``<section>`` elements that don’t
      contain any heading elements:

      ::

         section:not(:has(h1, h2, h3, h4, h5, h6))

      Note that ordering matters in the above selector. Swapping the
      nesting of the two pseudo-classes, like:

      ::

         section:has(:not(h1, h2, h3, h4, h5, h6))

      ...would result in matching any ``<section>`` element which
      contains anything that’s not a heading element.

/5. Elemental selectors 
========================

   .. .. rubric:: 5. Elemental selectors ` <#elemental-selectors>`__
      :name: elemental-selectors
      :class: heading settled

/5.1. Type (tag name) selector 
===============================

   .. .. rubric:: 5.1. Type (tag name) selector ` <#type-selectors>`__
      :name: type-selectors
      :class: heading settled

   A type selector is the name of a document language element type, and
   represents an instance of that element type in the document tree.

   .. container:: example
      :name: example-087f4a77

      ` <#example-087f4a77>`__ For example, the selector h1 represents
      an
      `h1 <https://html.spec.whatwg.org/multipage/sections.html#the-h1-element>`__
      element in the document.

   A `type selector <#type-selector>`__ is written as a `CSS qualified
   name <https://drafts.csswg.org/css-namespaces-3/#css-qualified-name>`__:
   an
   `identifier <https://drafts.csswg.org/css-values-4/#css-css-identifier>`__
   with an optional namespace prefix.
   `[CSS3NAMESPACE] <#biblio-css3namespace>`__ (See `§ 5.3 Namespaces in
   Elemental Selectors <#type-nmsp>`__.)

/5.2. Universal selector  
==========================

   .. .. rubric:: 5.2. Universal selector  ` <#the-universal-selector>`__
      :name: the-universal-selector
      :class: heading settled

   The universal selector is a special `type
   selector <#type-selector>`__, that represents an element of any
   element type.

   It is written as a `CSS qualified
   name <https://drafts.csswg.org/css-namespaces-3/#css-qualified-name>`__
   with an asterisk (``*`` U+002A) as the local name. Like a `type
   selector <#type-selector>`__, the `universal
   selector <#universal-selector>`__ can be qualified by a namespace,
   restricting it to only elements belonging to that namespace, and is
   affected by a default namespace as defined in `§ 5.3 Namespaces in
   Elemental Selectors <#type-nmsp>`__.

   Unless an element is `featureless <#featureless>`__, the presence of
   a `universal selector <#universal-selector>`__ has no effect on
   whether the element matches the selector. (Featureless elements do
   not match any selector, including the universal selector.)

   .. container:: example
      :name: example-0f5d51ca

      ` <#example-0f5d51ca>`__

      -  \*[hreflang|=en] and [hreflang|=en] are equivalent,
      -  \*.warning and .warning are equivalent,
      -  \*#myid and #myid are equivalent.

   The `universal selector <#universal-selector>`__ follows the same
   syntax rules as other `type selectors <#type-selector>`__: only one
   can appear per `compound selector <#compound>`__, and it must be the
   first `simple selector <#simple>`__ in the compound selector.

   Note: In some cases, adding a `universal
   selector <#universal-selector>`__ can make a selector easier to read,
   even though it has no effect on the matching behavior. For example,
   div :first-child and div:first-child are somewhat difficult to tell
   apart at a quick glance, but writing the former as div \*:first-child
   makes the difference obvious.

/5.3. Namespaces in Elemental Selectors 
========================================

   .. .. rubric:: 5.3. Namespaces in Elemental Selectors ` <#type-nmsp>`__
      :name: type-nmsp
      :class: heading settled

   `Type selectors <#type-selector>`__ and `universal
   selectors <#universal-selector>`__ allow an optional namespace
   component: a namespace prefix that has been previously
   `declared <#nsdecl>`__ may be prepended to the element name separated
   by the namespace separator “vertical bar” (``|`` U+007C). (See, e.g.,
   `[XML-NAMES] <#biblio-xml-names>`__ for the use of namespaces in
   XML.) It has the following meaning in each form:

   ``ns|E``
      elements with name E in namespace ns
   ``*|E``
      elements with name E in any namespace, including those without a
      namespace
   ``|E``
      elements with name E without a namespace
   ``E``
      if no default namespace has been `declared <#nsdecl>`__ for
      selectors, this is equivalent to \*|E. Otherwise it is equivalent
      to ns|E where ns is the default namespace.

   .. container:: example
      :name: example-53e1ab95

      ` <#example-53e1ab95>`__ CSS examples:
      ::

         @namespace foo url(http://www.example.com);
         foo|h1 { color: blue }  /* first rule */
         foo|* { color: yellow } /* second rule */
         |h1 { color: red }      /* ...*/
         *|h1 { color: green }
         h1 { color: green }

      The first rule (not counting the
      `@namespace <https://drafts.csswg.org/css-namespaces-3/#at-ruledef-namespace>`__
      at-rule) will match only
      `h1 <https://html.spec.whatwg.org/multipage/sections.html#the-h1-element>`__
      elements in the "http://www.example.com" namespace.

      The second rule will match all elements in the
      "http://www.example.com" namespace.

      The third rule will match only
      `h1 <https://html.spec.whatwg.org/multipage/sections.html#the-h1-element>`__
      elements with no namespace.

      The fourth rule will match
      `h1 <https://html.spec.whatwg.org/multipage/sections.html#the-h1-element>`__
      elements in any namespace (including those without any namespace).

      The last rule is equivalent to the fourth rule because no default
      namespace has been defined.

   If a `default
   namespace <https://drafts.csswg.org/css-namespaces-3/#default-namespace>`__
   is declared, `compound selectors <#compound>`__ without `type
   selectors <#type-selector>`__ in them still only match elements in
   that default namespace.

   .. container:: example
      :name: example-03281ceb

      ` <#example-03281ceb>`__ For example, in the following style
      sheet:
      ::

         @namespace url("http://example.com/foo");

         .special { ... }

      The .special selector only matches elements in the
      "http://example.com/foo" namespace, even though no reference to
      the type name (which is paired with the namespace in the DOM)
      appeared.

   A `type selector <#type-selector>`__ or `universal
   selector <#universal-selector>`__ containing a namespace prefix that
   has not been previously `declared <#nsdecl>`__ is an `invalid
   selector <#invalid-selector>`__.

/5.4. The Defined Pseudo-class:
===============================

   .. .. rubric:: 5.4. The Defined Pseudo-class:
      `:defined <#defined-pseudo>`__ ` <#the-defined-pseudo>`__
      :name: the-defined-pseudo
      :class: heading settled

   In some host languages, elements can have a distinction between being
   “defined”/“constructed” or not. The :defined
   `pseudo-class <#pseudo-class>`__ matches elements that are fully
   defined, as dictated by the host language.

   If the host language does not have this sort of distinction, all
   elements in it match `:defined <#defined-pseudo>`__.

   .. container:: example
      :name: example-cd9dcdb2

      ` <#example-cd9dcdb2>`__ In HTML, all built-in elements are always
      considered to be defined, so the following example will always
      match:
      .. code:: highlight

         p:defined { ... }

      `Custom
      elements <https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element>`__,
      on the other hand, start out *un* defined, and only become
      defined when `properly
      registered <https://html.spec.whatwg.org/multipage/custom-elements.html#element-definition>`__.
      This means the `:defined <#defined-pseudo>`__ pseudo-class can be
      used to hide a custom element until it has been registered:

      ::

         custom-element { visibility: hidden }

      ::

         custom-element:defined { visibility: visible }

/6. Attribute selectors 
========================

   .. .. rubric:: 6. Attribute selectors ` <#attribute-selectors>`__
      :name: attribute-selectors
      :class: heading settled

   Selectors allow the representation of an element’s attributes. When a
   selector is used as an expression to match against an element, an
   attribute selector must be considered to match an element if that
   element has an attribute that matches the attribute represented by
   the attribute selector.

   ` <#issue-745ef775>`__ Add comma-separated syntax for
   `multiple-value
   matching <http://lists.w3.org/Archives/Public/www-style/2011Mar/0215.html>`__?
   e.g. [rel ~= next, prev, up, first, last]

/6.1. Attribute presence and value
==================================

   .. .. rubric:: 6.1. Attribute presence and value
      selectors ` <#attribute-representation>`__
      :name: attribute-representation
      :class: heading settled

   CSS2 introduced four attribute selectors:

   [att]
      Represents an element with the ``att`` attribute, whatever the
      value of the attribute.
   [att=val]
      Represents an element with the ``att`` attribute whose value is
      exactly "val".
   [att~=val]
      Represents an element with the ``att`` attribute whose value is a
      `whitespace <#whitespace>`__-separated list of words, one of which
      is exactly "val". If "val" contains whitespace, it will never
      represent anything (since the words are *separated* by spaces).
      Also if "val" is the empty string, it will never represent
      anything.
   [att|=val]
      Represents an element with the ``att`` attribute, its value either
      being exactly "val" or beginning with "val" immediately followed
      by "-" (U+002D). This is primarily intended to allow language
      subcode matches (e.g., the ``hreflang`` attribute on the
      `a <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element>`__
      element in HTML) as described in BCP 47
      (`[BCP47] <#biblio-bcp47>`__) or its successor. For ``lang`` (or
      ``xml:lang``) language subcode matching, please see the
      `:lang() <#lang-pseudo>`__ pseudo-class.

   Attribute values must be
   `<ident-token> <https://drafts.csswg.org/css-syntax-3/#typedef-ident-token>`__ s
   or
   `<string-token> <https://drafts.csswg.org/css-syntax-3/#typedef-string-token>`__ s.
   `[CSS3SYN] <#biblio-css3syn>`__

   .. container:: example
      :name: example-52ee808b

      ` <#example-52ee808b>`__ Examples:
      The following attribute selector represents an
      `h1 <https://html.spec.whatwg.org/multipage/sections.html#the-h1-element>`__
      element that carries the ``title`` attribute, whatever its value:

      ::

         h1[title]

      In the following example, the selector represents a
      `span <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element>`__
      element whose ``class`` attribute has exactly the value "example":

      ::

         span[class="example"]

      Multiple attribute selectors can be used to represent several
      attributes of an element, or several conditions on the same
      attribute. Here, the selector represents a
      `span <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element>`__
      element whose ``hello`` attribute has exactly the value
      "Cleveland" and whose ``goodbye`` attribute has exactly the value
      "Columbus":

      ::

         span[hello="Cleveland"][goodbye="Columbus"]

      The following CSS rules illustrate the differences between "=" and
      "~=". The first selector would match, for example, an
      `a <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element>`__
      element with the value "copyright copyleft copyeditor" on a
      ``rel`` attribute. The second selector would only match an a
      element with an ``href`` attribute having the exact value
      "http://www.w3.org/".

      ::

         a[rel~="copyright"] { ... }
         a[href="http://www.w3.org/"] { ... }

      The following selector represents an
      `a <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element>`__
      element whose ``hreflang`` attribute is exactly "fr".

      ::

         a[hreflang=fr] 

      The following selector represents an
      `a <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element>`__
      element for which the value of the ``hreflang`` attribute begins
      with "en", including "en", "en-US", and "en-scouse":

      ::

         a[hreflang|="en"] 

      The following selectors represent a DIALOGUE element whenever it
      has one of two different values for an attribute ``character``:

      ::

         DIALOGUE[character=romeo]
         DIALOGUE[character=juliet]

/6.2. Substring matching attribute
==================================

   .. .. rubric:: 6.2. Substring matching attribute
      selectors ` <#attribute-substrings>`__
      :name: attribute-substrings
      :class: heading settled

   Three additional attribute selectors are provided for matching
   substrings in the value of an attribute:

   [att^=val]
      Represents an element with the ``att`` attribute whose value
      begins with the prefix "val". If "val" is the empty string then
      the selector does not represent anything.
   [att$=val]
      Represents an element with the ``att`` attribute whose value ends
      with the suffix "val". If "val" is the empty string then the
      selector does not represent anything.
   [att*=val]
      Represents an element with the ``att`` attribute whose value
      contains at least one instance of the substring "val". If "val" is
      the empty string then the selector does not represent anything.

   Attribute values must be
   `<ident-token> <https://drafts.csswg.org/css-syntax-3/#typedef-ident-token>`__ s
   or
   `<string-token> <https://drafts.csswg.org/css-syntax-3/#typedef-string-token>`__ s.

   .. container:: example
      :name: example-d887e2c3

      ` <#example-d887e2c3>`__ Examples: The following selector
      represents an HTML
      `object <https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element>`__
      element, referencing an image:
      ::

         object[type^="image/"] 

      The following selector represents an HTML
      `a <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element>`__
      element with an ``href`` attribute whose value ends with ".html".

      ::

         a[href$=".html"] 

      The following selector represents an HTML paragraph with a
      ``title`` attribute whose value contains the substring "hello"

      ::

         p[title*="hello"] 

/6.3. Case-sensitivity 
=======================

   .. .. rubric:: 6.3. Case-sensitivity ` <#attribute-case>`__
      :name: attribute-case
      :class: heading settled

   By default case-sensitivity of attribute names and values in
   selectors depends on the document language.

   To match attribute values `ASCII
   case-insensitively <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__
   regardless of document language rules, the attribute selector may
   include the identifier ``i`` before the closing bracket (``]``). When
   this flag is present, UAs must match the attribute’s value ASCII
   case-insensitively (i.e. [a-z] and [A-Z] are considered equivalent).

   Alternately, the attribute selector may include the identifier ``s``
   before the closing bracket (``]``); in this case the UA must match
   the value case-sensitively, with “ `identical
   to <https://infra.spec.whatwg.org/#string-is>`__ ” semantics
   `[INFRA] <#biblio-infra>`__, regardless of document language rules.

   Like the rest of Selectors syntax, the ``i`` and ``s`` identifiers
   themselves are `ASCII
   case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__.

   .. container:: example
      :name: example-348bad1b

      ` <#example-348bad1b>`__ The following rule will style the
      ``frame`` attribute when it has a value of ``hsides``, whether
      that value is represented as ``hsides``, ``HSIDES``, ``hSides``,
      etc. even in an XML environment where attribute values are
      case-sensitive.
      ::

         [frame=hsides i] { border-style: solid none; } 

   .. container:: example
      :name: example-f596236d

      ` <#example-f596236d>`__ The following rule will style lists with
      ``type="a"`` attributes differently than ``type="A"`` even though
      HTML defines the ``type`` attribute to be case-insensitive.
      ::

         [type="a" s] { list-style: lower-alpha; }
         [type="A" s] { list-style: upper-alpha; }

   Note: Some document models normalize case-insensitive attribute
   values at parse time such that checking if a string is case-sensitive
   matching is impossible. Case-sensitive matching via ``s`` flags is
   only possible in systems that preserve the original case.

/6.4. Attribute selectors and namespaces 
=========================================

   .. .. rubric:: 6.4. Attribute selectors and namespaces ` <#attrnmsp>`__
      :name: attrnmsp
      :class: heading settled

   The attribute name in an attribute selector is given as a `CSS
   qualified
   name <https://drafts.csswg.org/css-namespaces-3/#css-qualified-name>`__:
   a namespace prefix that has been previously `declared <#nsdecl>`__
   may be prepended to the attribute name separated by the namespace
   separator "vertical bar" (``|``). In keeping with the Namespaces in
   the XML recommendation, default namespaces do not apply to
   attributes, therefore attribute selectors without a namespace
   component apply only to attributes that have no namespace (equivalent
   to \|attr). An asterisk may be used for the namespace prefix
   indicating that the selector is to match all attribute names without
   regard to the attribute’s namespace.

   An attribute selector with an attribute name containing a namespace
   prefix that has not been previously `declared <#nsdecl>`__ is an
   invalid selector.

   .. container:: example
      :name: example-a7ca2cb1

      ` <#example-a7ca2cb1>`__ CSS examples:
      ::

         @namespace foo "http://www.example.com";
         [foo|att=val] { color: blue }
         [*|att] { color: yellow }
         [|att] { color: green }
         [att] { color: green }

      The first rule will match only elements with the attribute ``att``
      in the "http://www.example.com" namespace with the value "val".

      The second rule will match only elements with the attribute
      ``att`` regardless of the namespace of the attribute (including no
      namespace).

      The last two rules are equivalent and will match only elements
      with the attribute ``att`` where the attribute is not in a
      namespace.

/6.5. Default attribute values in DTDs 
=======================================

   .. .. rubric:: 6.5. Default attribute values in DTDs ` <#def-values>`__
      :name: def-values
      :class: heading settled

   Attribute selectors represent attribute values in the document tree.
   How that document tree is constructed is outside the scope of
   Selectors. In some document formats default attribute values can be
   defined in a DTD or elsewhere, but these can only be selected by
   attribute selectors if they appear in the document tree. Selectors
   should be designed so that they work whether or not the default
   values are included in the document tree.

   For example, a XML UA may, but is *not* required to, read an
   “external subset” of the DTD, but *is* required to look for default
   attribute values in the document’s “internal subset”. (See, e.g.,
   `[XML10] <#biblio-xml10>`__ for definitions of these subsets.)
   Depending on the UA, a default attribute value defined in the
   external subset of the DTD might or might not appear in the document
   tree.

   A UA that recognizes an XML namespace may, but is not required to use
   its knowledge of that namespace to treat default attribute values as
   if they were present in the document. (For example, an XHTML UA is
   not required to use its built-in knowledge of the XHTML DTD. See,
   e.g., `[XML-NAMES] <#biblio-xml-names>`__ for details on namespaces
   in XML 1.0.)

   Note: Typically, implementations choose to ignore external subsets.
   This corresponds to the behavior of non-validating processors as
   defined by the XML specification.

   .. container:: example
      :name: example-ba3e8ad8

      ` <#example-ba3e8ad8>`__ Example:
      Consider an element ``EXAMPLE`` with an attribute ``radix`` that
      has a default value of ``"decimal"``. The DTD fragment might be

      .. code:: dtd-example

         <!ATTLIST EXAMPLE radix (decimal,octal) "decimal"> 

      If the style sheet contains the rules

      ::

         EXAMPLE[radix=decimal] { /*... default property settings ...*/ }
         EXAMPLE[radix=octal]   { /*... other settings...*/ }

      the first rule might not match elements whose ``radix`` attribute
      is set by default, i.e. not set explicitly. To catch all cases,
      the attribute selector for the default value must be dropped:

      ::

         EXAMPLE                { /*... default property settings ...*/ }
         EXAMPLE[radix=octal]   { /*... other settings...*/ }

      Here, because the selector EXAMPLE[radix=octal] is more specific
      than the type selector alone, the style declarations in the second
      rule will override those in the first for elements that have a
      ``radix`` attribute value of ``"octal"``. Care has to be taken
      that all property declarations that are to apply only to the
      default case are overridden in the non-default cases' style rules.

/6.6. Class selectors 
======================

   .. .. rubric:: 6.6. Class selectors ` <#class-html>`__
      :name: class-html
      :class: heading settled

   The class selector is given as a full stop (. U+002E) immediately
   followed by an identifier. It represents an element belonging to the
   class identified by the identifier, as defined by the document
   language. For example, in `[HTML5] <#biblio-html5>`__,
   `[SVG11] <#biblio-svg11>`__, and `[MATHML] <#biblio-mathml>`__
   membership in a class is given by the ``class`` attribute: in these
   languages it is equivalent to the ``~=`` notation applied to the
   local ``class`` attribute (i.e. ``[class~=`` ``identifier`` ``]``).

   .. container:: example
      :name: example-f9c08b5b

      ` <#example-f9c08b5b>`__ CSS examples:
      We can assign style information to all elements with
      ``class~="pastoral"`` as follows:

      ::

         *.pastoral { color: green }  /* all elements with class~=pastoral */ 

      or just

      ::

         .pastoral { color: green }  /* all elements with class~=pastoral */ 

      The following assigns style only to H1 elements with
      ``class~="pastoral"``:

      ::

         H1.pastoral { color: green }  /* H1 elements with class~=pastoral */ 

      Given these rules, the first ``H1`` instance below would not have
      green text, while the second would:

      ::

         <H1>Not green</H1>
         <H1 class="pastoral">Very green</H1>

      The following rule matches any
      `P <https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element>`__
      element whose ``class`` attribute has been assigned a list of
      `whitespace <#whitespace>`__-separated values that includes both
      ``pastoral`` and ``marine``:

      ::

         p.pastoral.marine { color: green } 

      This rule matches when ``class="pastoral blue aqua marine"`` but
      does not match for ``class="pastoral blue"``.

   Note: Because CSS gives considerable power to the "class" attribute,
   authors could conceivably design their own "document language" based
   on elements with almost no associated presentation (such as
   `div <https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element>`__
   and
   `span <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element>`__
   in HTML) and assigning style information through the "class"
   attribute. Authors should avoid this practice since the structural
   elements of a document language often have recognized and accepted
   meanings and author-defined classes may not.

   Note: If an element has multiple class attributes, their values must
   be concatenated with spaces between the values before searching for
   the class. As of this time the working group is not aware of any
   manner in which this situation can be reached, however, so this
   behavior is explicitly non-normative in this specification.

   When matching against a document which is in `quirks
   mode <https://dom.spec.whatwg.org/#concept-document-quirks>`__, class
   names must be matched `ASCII
   case-insensitively <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__;
   class selectors are otherwise case-sensitive, only matching class
   names they are `identical
   to <https://infra.spec.whatwg.org/#string-is>`__.
   `[INFRA] <#biblio-infra>`__

/6.7. ID selectors 
===================

   .. .. rubric:: 6.7. ID selectors ` <#id-selectors>`__
      :name: id-selectors
      :class: heading settled

   Document languages may contain attributes that are declared to be of
   type ID. What makes attributes of type ID special is that no two such
   attributes can have the same value in a conformant document,
   regardless of the type of the elements that carry them; whatever the
   document language, an ID typed attribute can be used to uniquely
   identify its element. In HTML all ID attributes are named ``id``; XML
   applications may name ID attributes differently, but the same
   restriction applies. Which attribute on an element is considered the
   “ID attribute“ is defined by the document language.

   An ID selector consists of a “number sign” (U+0023, ``#``)
   immediately followed by the ID value, which must be a CSS
   `identifier <https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier>`__.
   An ID selector represents an element instance that has an identifier
   that matches the identifier in the ID selector. (It is possible in
   non-conforming documents for multiple elements to match a single ID
   selector.)

   .. container:: example
      :name: example-3e8dc597

      ` <#example-3e8dc597>`__ Examples: The following ID selector
      represents an
      `h1 <https://html.spec.whatwg.org/multipage/sections.html#the-h1-element>`__
      element whose ID-typed attribute has the value "chapter1":
      ::

         h1#chapter1 

      The following ID selector represents any element whose ID-typed
      attribute has the value "chapter1":

      ::

         #chapter1 

      The following selector represents any element whose ID-typed
      attribute has the value "z98y".

      ::

         *#z98y 

   Note: In XML 1.0 `[XML10] <#biblio-xml10>`__, the information about
   which attribute contains an element’s IDs is contained in a DTD or a
   schema. When parsing XML, UAs do not always read the DTD, and thus
   may not know what the ID of an element is (though a UA may have
   namespace-specific knowledge that allows it to determine which
   attribute is the ID attribute for that namespace). If a style sheet
   author knows or suspects that a UA may not know what the ID of an
   element is, they should use normal attribute selectors instead:
   [name=p371] instead of #p371.

   If an element has multiple ID attributes, all of them must be treated
   as IDs for that element for the purposes of the ID selector. Such a
   situation could be reached using mixtures of xml:id, DOM3 Core, XML
   DTDs, and namespace-specific knowledge.

   When matching against a document which is in `quirks
   mode <https://dom.spec.whatwg.org/#concept-document-quirks>`__, IDs
   must be matched `ASCII
   case-insensitively <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__;
   ID selectors are otherwise case-sensitive, only matching IDs they are
   `identical to <https://infra.spec.whatwg.org/#string-is>`__.
   `[INFRA] <#biblio-infra>`__

/7. Linguistic Pseudo-classes 
==============================

   .. .. rubric:: 7. Linguistic Pseudo-classes ` <#linguistic-pseudos>`__
      :name: linguistic-pseudos
      :class: heading settled

/7.1. The Directionality Pseudo-class:
======================================

   .. .. rubric:: 7.1. The Directionality Pseudo-class:
      `:dir() <#dir-pseudo>`__ ` <#the-dir-pseudo>`__
      :name: the-dir-pseudo
      :class: heading settled

   The :dir() pseudo-class allows the author to write selectors that
   represent an element based on its directionality as determined by the
   `document language <#document-language>`__. For example,
   `[HTML5] <#biblio-html5>`__ defines `how to determine the
   directionality of an
   element <https://html.spec.whatwg.org/multipage/dom.html#the-directionality>`__,
   based on a combination of the ``dir`` attribute, the surrounding
   text, and other factors. As another example, the ``its:dir`` and
   ``dirRule`` element of the Internationalization Tag Set
   `[ITS20] <#biblio-its20>`__ are able to define the directionality of
   an element in `[XML10] <#biblio-xml10>`__.

   The `:dir() <#dir-pseudo>`__ pseudo-class does not select based on
   stylistic states—for example, the CSS
   `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__
   property does not affect whether it matches.

   The pseudo-class :dir(ltr) represents an element that has a
   directionality of left-to-right (``ltr``). The pseudo-class :dir(rtl)
   represents an element that has a directionality of right-to-left
   (``rtl``). The argument to `:dir() <#dir-pseudo>`__ must be a single
   identifier, otherwise the selector is invalid. White space is
   optionally allowed between the identifier and the parentheses. Values
   other than ``ltr`` and ``rtl`` are not invalid, but do not match
   anything. (If a future markup spec defines other directionalities,
   then Selectors may be extended to allow corresponding values.)

   The difference between :dir(C) and [dir=C] is that [dir=C] only
   performs a comparison against a given attribute on the element, while
   the :dir(C) pseudo-class uses the UAs knowledge of the document’s
   semantics to perform the comparison. For example, in HTML, the
   directionality of an element inherits so that a child without a
   ``dir`` attribute will have the same directionality as its closest
   ancestor with a valid ``dir`` attribute. As another example, in HTML,
   an element that matches [dir=auto] will match either :dir(ltr) or
   :dir(rtl) depending on the resolved directionality of the elements as
   determined by its contents. `[HTML5] <#biblio-html5>`__

/7.2. The Language Pseudo-class:
================================

   .. .. rubric:: 7.2. The Language Pseudo-class:
      `:lang() <#lang-pseudo>`__ ` <#the-lang-pseudo>`__
      :name: the-lang-pseudo
      :class: heading settled

   If the document language specifies how the (human) `content
   language <https://drafts.csswg.org/css-text-4/#content-language>`__
   of an element is determined, it is possible to write selectors that
   represent an element based on its content language. The :lang()
   pseudo-class, which accepts a comma-separated list of one or more
   `language ranges <#language-range>`__, represents an element whose
   content language is one of the languages listed in its argument. Each
   language range in `:lang() <#lang-pseudo>`__ must be a valid CSS
   `<ident> <https://drafts.csswg.org/css-values-4/#typedef-ident>`__ or
   `<string> <https://drafts.csswg.org/css-values-4/#string-value>`__.
   (Thus language ranges containing asterisks, for example, must be
   either correctly escaped or quoted as strings, e.g. :lang(\\\*-Latn)
   or :lang("\*-Latn").)

   Note: The `content
   language <https://drafts.csswg.org/css-text-4/#content-language>`__
   of an element is defined by the document language.

   For example, in HTML `[HTML5] <#biblio-html5>`__, the `content
   language <https://drafts.csswg.org/css-text-4/#content-language>`__
   is determined by a combination of the ``lang`` attribute, information
   from
   `meta <https://html.spec.whatwg.org/multipage/semantics.html#meta>`__
   elements, and possibly also the protocol (e.g. from HTTP headers).
   XML languages can use the ``xml:lang`` attribute to indicate language
   information for an element. `[XML10] <#biblio-xml10>`__

   The element’s `content
   language <https://drafts.csswg.org/css-text-4/#content-language>`__
   matches a `language range <#language-range>`__ if its content
   language, as represented in BCP 47 syntax, matches the given language
   range in an *extended filtering* operation per
   `[RFC4647] <#biblio-rfc4647>`__ Matching of Language Tags (section
   3.3.2). Both the content language and the language range must be
   *canonicalized* and converted to *extlang form* as per section 4.5 of
   `[RFC5646] <#biblio-rfc5646>`__ prior to the *extended filtering*
   operation. The matching is performed case-insensitively within the
   ASCII range.

   The `language range <#language-range>`__ does not need to be a valid
   language code to perform this comparison.

   A `language range <#language-range>`__ consisting of an empty string
   (:lang("")) matches (only) elements whose language is not tagged.

   Note: It is recommended that documents and protocols indicate
   language using codes from `[BCP47] <#biblio-bcp47>`__ or its
   successor, and in the case of XML-based formats, by means of
   ``xml:lang`` attributes. `[XML10] <#biblio-xml10>`__ See `“FAQ:
   Two-letter or three-letter language
   codes.” <http://www.w3.org/International/questions/qa-lang-2or3.html>`__

   .. container:: example
      :name: example-91142d84

      ` <#example-91142d84>`__ Examples: The two following selectors
      represent an HTML document that is in Belgian French or German.
      The two next selectors represent
      `q <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element>`__
      quotations in an arbitrary element in Belgian French or German.
      ::

         html:lang(fr-be)
         html:lang(de)
         :lang(fr-be) > q
         :lang(de) > q

   Note: One difference between :lang(C) and the \|= operator is that
   the \|= operator only performs a comparison against a given attribute
   on the element, while the :lang(C) pseudo-class uses the UAs
   knowledge of the document’s semantics to perform the comparison.

   .. container:: example
      :name: example-c75c4e33

      ` <#example-c75c4e33>`__ In this HTML example, only the BODY
      matches [lang|=fr] (because it has a LANG attribute) but both the
      BODY and the P match :lang(fr) (because both are in French). The P
      does not match the [lang|=fr] because it does not have a LANG
      attribute.
      ::

         <body lang=fr>
           <p>Je suis français.</p>
         </body>

   .. container:: example
      :name: example-c94037c6

      ` <#example-c94037c6>`__ Another difference between :lang(C) and
      the \|= operator is that :lang(C) performs implicit wildcard
      matching.
      For example, :lang(de-DE) will match all of de-DE, de-DE-1996,
      de-Latn-DE, de-Latf-DE, de-Latn-DE-1996, whereas of those
      [lang|=de-DE] will only match de-DE and de-DE-1996.

      To perform wildcard matching on the first subtag (the primary
      language), an asterisk must be used: \*-CH will match all of
      de-CH, it-CH, fr-CH, and rm-CH.

      To select against an element’s lang attribute value using this
      type of language range match, use both the attribute selector and
      language pseudo-class together, e.g. [lang]:lang(de-DE).

   Note: Wildcard language matching and comma-separated lists are new in
   Level 4.

/8. Location Pseudo-classes 
============================

   .. .. rubric:: 8. Location Pseudo-classes ` <#location>`__
      :name: location
      :class: heading settled

/8.1. The Hyperlink Pseudo-class:
=================================

   .. .. rubric:: 8.1. The Hyperlink Pseudo-class:
      `:any-link <#any-link-pseudo>`__ ` <#the-any-link-pseudo>`__
      :name: the-any-link-pseudo
      :class: heading settled

   The :any-link pseudo-class represents an element that acts as the
   source anchor of a hyperlink. For example, in
   `[HTML5] <#biblio-html5>`__, any
   ```a`` <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element>`__
   or
   ```area`` <https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element>`__
   elements with an
   ```href`` <https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href>`__
   attribute are hyperlinks, and thus match ``:any-link``. It matches an
   element if the element would match either `:link <#link-pseudo>`__ or
   `:visited <#visited-pseudo>`__, and is equivalent to :is(:link,
   :visited).

/8.2. The Link History Pseudo-classes:
======================================

   .. .. rubric:: 8.2. The Link History Pseudo-classes:
      `:link <#link-pseudo>`__ and
      `:visited <#visited-pseudo>`__ ` <#link>`__
      :name: link
      :class: heading settled

   User agents commonly display unvisited
   `hyperlinks <#the-any-link-pseudo>`__ differently from previously
   visited ones. Selectors provides the pseudo-classes :link and
   :visited to distinguish them:

   -  The `:link <#link-pseudo>`__ pseudo-class applies to links that
      have not yet been visited.
   -  The `:visited <#visited-pseudo>`__ pseudo-class applies once the
      link has been visited by the user.

   After some amount of time, user agents may choose to return a visited
   link to the (unvisited) `:link <#link-pseudo>`__ state.

   The two states are mutually exclusive.

   .. container:: example
      :name: example-0fcef6cd

      ` <#example-0fcef6cd>`__ The following selector represents links
      carrying class ``footnote`` and already visited:
      ::

         .footnote:visited 

   Since it is possible for style sheet authors to abuse the :link and
   :visited pseudo-classes to determine which sites a user has visited
   without the user’s consent, UAs may treat all links as unvisited
   links or implement other measures to preserve the user’s privacy
   while rendering visited and unvisited links differently.

/8.3. The Local Link Pseudo-class:
==================================

   .. .. rubric:: 8.3. The Local Link Pseudo-class:
      `:local-link <#local-link-pseudo>`__ ` <#the-local-link-pseudo>`__
      :name: the-local-link-pseudo
      :class: heading settled

   The :local-link pseudo-class allows authors to style
   `hyperlinks <#the-any-link-pseudo>`__ based on the users current
   location within a site. It represents an element that is the source
   anchor of a hyperlink whose target’s absolute URL matches the
   element’s own document URL. If the hyperlink’s target includes a
   fragment URL, then the fragment URL of the current URL must also
   match; if it does not, then the fragment URL portion of the current
   URL is not taken into account in the comparison.

   .. container:: example
      :name: example-d2555a3c

      ` <#example-d2555a3c>`__ For example, the following rule prevents
      links targeting the current page from being underlined when they
      are part of the navigation list:
      ::

         nav :local-link { text-decoration: none; } 

   Note: The current URL of a page can change as a result of user
   actions such as activating a link targeting a different fragment
   within the same page; or by use of the ``pushState`` API; as well as
   by the more obvious actions of navigating to a different page or
   following a redirect (which could be initiated by protocols such as
   HTTP, markup instructions such as ``<meta http-equiv="...">``, or
   scripting instructions ). UAs must ensure that
   `:local-link <#local-link-pseudo>`__, as well as the
   `:target <#target-pseudo>`__ and
   `:target-within <#target-within-pseudo>`__ pseudo-classes below,
   respond correctly to all such changes in state.

/8.4. The Target Pseudo-class:
==============================

   .. .. rubric:: 8.4. The Target Pseudo-class:
      `:target <#target-pseudo>`__ ` <#the-target-pseudo>`__
      :name: the-target-pseudo
      :class: heading settled

   In some document languages, the document’s URL can further point to
   specific elements *within* the document via the URL’s
   `fragment <https://url.spec.whatwg.org/#concept-url-fragment>`__. The
   elements pointed to in this way are the target elements of the
   document.

   .. container:: example
      :name: example-b8c5336f

      ` <#example-b8c5336f>`__ In HTML the fragment points to the
      element in the page with the same ID. The url
      ``https://example.com/index.html#section2``, for example, points
      to the element with ``id="section2"`` in the document at
      ``https://example.com/index.html``.

   The :target pseudo-class matches the document’s target elements. If
   the document’s URL has no fragment identifier, then the document has
   no target elements.

   .. container:: example
      :name: example-8a386e7c

      ` <#example-8a386e7c>`__ Example:
      ::

         p.note:target 

      This selector represents a
      ```p`` <https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element>`__
      element of class ``note`` that is the target element of the
      referring URL.

   .. container:: example
      :name: example-af403697

      ` <#example-af403697>`__ CSS example: Here, the
      `:target <#target-pseudo>`__ pseudo-class is used to make the
      target element red and place an image before it, if there is one:
      ::

         :target { color : red }
         :target::before { content : url(target.png) }

/8.5. The Target Container Pseudo-class:
========================================

   .. .. rubric:: 8.5. The Target Container Pseudo-class:
      `:target-within <#target-within-pseudo>`__ ` <#the-target-within-pseudo>`__
      :name: the-target-within-pseudo
      :class: heading settled

   The :target-within pseudo-class applies to any element to which the
   `:target <#target-pseudo>`__ pseudo class applies as well as to any
   element whose descendant in the `flat
   tree <https://drafts.csswg.org/css-scoping-1/#flat-tree>`__
   (including non-element nodes, such as text nodes) matches the
   conditions for matching :target.

/8.6. The Reference Element Pseudo-class:
=========================================

   .. .. rubric:: 8.6. The Reference Element Pseudo-class:
      `:scope <#scope-pseudo>`__ ` <#the-scope-pseudo>`__
      :name: the-scope-pseudo
      :class: heading settled

   In some contexts, selectors are matched with respect to one or more
   `scoping roots <#scoping-root>`__, such as when calling the
   ``querySelector()`` method in `[DOM] <#biblio-dom>`__. The :scope
   pseudo-class represents this scoping root, and may be either a true
   element or a virtual one (such as a
   ```DocumentFragment`` <https://dom.spec.whatwg.org/#documentfragment>`__).

   If there is no `scoping root <#scoping-root>`__ then
   `:scope <#scope-pseudo>`__ represents the root of the document
   (equivalent to `:root <#root-pseudo>`__). Specifications intending
   for this pseudo-class to match specific elements rather than the
   document’s root element must define their scoping root(s).

   A virtual `scoping root <#scoping-root>`__ is some object
   representing the root of a document fragment, and can be used in
   selector patterns to represent other elements’ relationships to this
   scoping root, acting as the parent of any root elements in the
   document fragment it represents. A virtual scoping root is
   `featureless <#featureless>`__ and cannot be the `subject of the
   selector <#selector-subject>`__.

   .. container:: example
      :name: example-ef427647

      ` <#example-ef427647>`__ For example, if you have a
      ```DocumentFragment`` <https://dom.spec.whatwg.org/#documentfragment>`__
      ``df``, then ``df.querySelectorAll(":scope > .foo")`` matches all
      the .foo elements that are "top-level" in the document fragment
      (those that have the document fragment as their
      ```parentNode`` <https://dom.spec.whatwg.org/#dom-node-parentnode>`__).
      However, ``df.querySelector(":scope")`` will not match anything,
      as the document fragment itself can’t be the `subject of the
      selector <#selector-subject>`__.

/9. User Action Pseudo-classes 
===============================

   .. .. rubric:: 9. User Action Pseudo-classes ` <#useraction-pseudos>`__
      :name: useraction-pseudos
      :class: heading settled

   Interactive user interfaces sometimes change the rendering in
   response to user actions. Selectors provides several user action
   pseudo-classes for the selection of an element the user is acting on.
   (In non-interactive user agents, these pseudo-classes are valid, but
   never match any element.)

   These pseudo-classes are not mutually exclusive. An element can match
   several such pseudo-classes at the same time.

   .. container:: example
      :name: example-fc0139c4

      ` <#example-fc0139c4>`__ Examples:
      ::

         a:hover   /* user hovers over the link */
         a:focus   /* user focuses the link     */

         a:focus:hover
         /* user hovers over the link while it’s focused */

   Note: The specifics of hit-testing, necessary to know when several of
   the pseudo-classes defined in this section apply, are not yet
   defined, but will be in the future.

/9.1. The Pointer Hover Pseudo-class:
=====================================

   .. .. rubric:: 9.1. The Pointer Hover Pseudo-class:
      `:hover <#hover-pseudo>`__ ` <#the-hover-pseudo>`__
      :name: the-hover-pseudo
      :class: heading settled

   The :hover pseudo-class applies while the user designates an element
   (or pseudo-element) with a pointing device, but does not necessarily
   activate it. For example, a visual user agent could apply this
   pseudo-class when the cursor (mouse pointer) hovers over a box
   generated by the element. Interactive user agents that cannot detect
   hovering due to hardware limitations (e.g., a pen device that does
   not detect hovering) are still conforming; the selector will simply
   never match in such a UA.

   An element also matches `:hover <#hover-pseudo>`__ if one of its
   descendants in the `flat
   tree <https://drafts.csswg.org/css-scoping-1/#flat-tree>`__
   (including non-element nodes, such as text nodes) matches the above
   conditions.

   Document languages may define additional ways in which an element can
   match `:hover <#hover-pseudo>`__. For example,
   `[HTML5] <#biblio-html5>`__ defines a labeled control element as
   `matching
   ``:hover`` <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-hover>`__
   when its
   `label <https://html.spec.whatwg.org/multipage/forms.html#the-label-element>`__
   is hovered.

   Note: Since the `:hover <#hover-pseudo>`__ state can apply to an
   element because its child is designated by a pointing device, it is
   possible for :hover to apply to an element that is not underneath the
   pointing device.

/9.2. The Activation Pseudo-class:
==================================

   .. .. rubric:: 9.2. The Activation Pseudo-class:
      `:active <#active-pseudo>`__ ` <#the-active-pseudo>`__
      :name: the-active-pseudo
      :class: heading settled

   The :active pseudo-class applies while an element is being
   “activated” by the user, as defined by the host language; for
   example, while a hyperlink is being triggered.

   In addition, the `:active <#active-pseudo>`__ pseudo-class applies
   while any generated box of *any* element (or pseudo-element) is being
   actively indicated by a pointing device (in the “down” state), e.g.
   between the time the user presses the primary mouse button and
   releases it, or while a finger is pressing on a touchscreen.

   Note: `[HTML5] <#biblio-html5>`__ defines `specific conditions for
   HTML elements to be
   activated <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-active>`__
   .

   An element also matches `:active <#active-pseudo>`__ if one of its
   descendants in the `flat
   tree <https://drafts.csswg.org/css-scoping-1/#flat-tree>`__
   (including non-element nodes, such as text nodes) matches the above
   conditions.

/9.3. The Input Focus Pseudo-class:
===================================

   .. .. rubric:: 9.3. The Input Focus Pseudo-class:
      `:focus <#focus-pseudo>`__ ` <#the-focus-pseudo>`__
      :name: the-focus-pseudo
      :class: heading settled

   The :focus pseudo-class applies while an element (or pseudo-element)
   has the focus (accepts keyboard or other forms of input).

   There may be document language or implementation specific limits on
   which elements can acquire `:focus <#focus-pseudo>`__. For example,
   `[HTML] <#biblio-html>`__ defines a list of `focusable
   areas <https://html.spec.whatwg.org/multipage/interaction.html#focusable-area>`__.

   Document languages may define additional ways in which an element can
   match `:focus <#focus-pseudo>`__, except that the :focus pseudo class
   must not automatically propagate to the parent element—​see
   `:focus-within <#focus-within-pseudo>`__ if matching on the parent is
   desired. (:focus may still apply to the parent element if made to
   propagate due to other mechanisms, but not merely due to being the
   parent.)

   ` <#issue-1416193e>`__ There’s a desire from authors to propagate
   `:focus <#focus-pseudo>`__ from a form control to its associated
   ```label`` <https://html.spec.whatwg.org/multipage/forms.html#the-label-element>`__
   element; the main objection seems to be implementation difficulty.
   See `CSSWG issue
   (CSS) <https://github.com/w3c/csswg-drafts/issues/397>`__ and `WHATWG
   issue (HTML) <https://github.com/whatwg/html/issues/1632>`__.

/9.4. The Focus-Indicated Pseudo-class:
=======================================

   .. .. rubric:: 9.4. The Focus-Indicated Pseudo-class:
      `:focus-visible <#focus-visible-pseudo>`__ ` <#the-focus-visible-pseudo>`__
      :name: the-focus-visible-pseudo
      :class: heading settled

   While the `:focus <#focus-pseudo>`__ `pseudo-class <#pseudo-class>`__
   always matches the currently-focused element, UAs only sometimes
   visibly indicate focus (such as by drawing a “focus ring”), instead
   using a variety of heuristics to visibly indicate the focus only when
   it would be most helpful to the user. The :focus-visible pseudo-class
   matches a focused element (or pseudo-element) in these situations
   only, allowing authors to change the appearance of the focus
   indicator without changing *when* a focus indicator appears.

   .. container:: example
      :name: example-c40d8011

      ` <#example-c40d8011>`__ In this example, all focusable elements
      get a strong yellow outline on
      `:focus-visible <#focus-visible-pseudo>`__, and links get both a
      yellow outline and a yellow background on :focus-visible. These
      styles are consistent throughout the page and are easily visible
      due to their bold styling, but do not appear unless the user is
      likely to need to understand where page focus is.
      .. code:: highlight

         :root {
           --focus-gold: #ffbf47;
         }

         :focus-visible  {
           outline: 3px solid var(--focus-gold);
         }

         a:focus-visible {
           background-color: var(--focus-gold);
         }

   .. container:: example
      :name: example-58f4807d

      ` <#example-58f4807d>`__ User agents can choose their own
      heuristics for when to `indicate focus <#indicate-focus>`__;
      however, the following (non-normative) suggestions can be used as
      a starting point for when to indicate focus on the currently
      focused element:

      -  If the user has expressed a preference (such as via a system
         preference or a browser setting) to always see a visible focus
         indicator, `indicate focus <#indicate-focus>`__ regardless of
         any other factors. (Another option may be for the user agent to
         show its own focus indicator regardless of author styles.)

      -  If the element which supports keyboard input (such as an
         ```input`` <https://html.spec.whatwg.org/multipage/input.html#the-input-element>`__
         element, or any other element that would triggers a virtual
         keyboard to be shown on focus if a physical keyboard were not
         present), `indicate focus <#indicate-focus>`__.

      -  If the user interacts with the page via keyboard or some other
         non-pointing device, `indicate focus <#indicate-focus>`__.
         (This means keyboard usage may change whether this pseudo-class
         matches even if it doesn’t affect `:focus <#focus-pseudo>`__).

      -  If the user interacts with the page via a pointing device
         (mouse, touchscreen, etc.) and the focused element does not
         support keyboard input, don’t `indicate
         focus <#indicate-focus>`__.

      -  If the previously-focused element `indicated
         focus <#indicate-focus>`__, and a script causes focus to move
         elsewhere, indicate focus on the newly focused element.

         Conversely, if the previously-focused element did not `indicate
         focus <#indicate-focus>`__, and a script causes focus to move
         elsewhere, don’t indicate focus on the newly focused element.

      -  If a newly-displayed element automatically gains focus (such as
         an action button in a freshly opened dialog), that element
         should `indicate focus <#indicate-focus>`__.

   User agents should also use
   `:focus-visible <#focus-visible-pseudo>`__ to specify the default
   focus style, so that authors using :focus-visible will not also need
   to disable the default `:focus <#focus-pseudo>`__ style.

/9.5. The Focus Container Pseudo-class:
=======================================

   .. .. rubric:: 9.5. The Focus Container Pseudo-class:
      `:focus-within <#focus-within-pseudo>`__ ` <#the-focus-within-pseudo>`__
      :name: the-focus-within-pseudo
      :class: heading settled

   The :focus-within pseudo-class applies to any element (or
   pseudo-element) for which the `:focus <#focus-pseudo>`__ pseudo class
   applies, as well as to an element (or pseudo-element) whose
   descendant in the `flat
   tree <https://drafts.csswg.org/css-scoping-1/#flat-tree>`__
   (including non-element nodes, such as text nodes) matches the
   conditions for matching :focus.

/10. Time-dimensional Pseudo-classes 
=====================================

   .. .. rubric:: 10. Time-dimensional Pseudo-classes ` <#time-pseudos>`__
      :name: time-pseudos
      :class: heading settled

   These pseudo-classes classify elements with respect to the
   currently-displayed or active position in some timeline, such as
   during speech rendering of a document, or during the display of a
   video using WebVTT to render subtitles.

   CSS does not define this timeline; the host language must do so. If
   there is no timeline defined for an element, these pseudo-classes
   must not match the element.

   Note: Ancestors of a `:current <#current-pseudo>`__ element are also
   :current, but ancestors of a `:past <#past-pseudo>`__ or
   `:future <#future-pseudo>`__ element are not necessarily :past or
   :future as well. A given element matches at most one of :current,
   :past, or :future.

/10.1. The Current-element Pseudo-class:
========================================

   .. .. rubric:: 10.1. The Current-element Pseudo-class:
      `:current <#current-pseudo>`__ ` <#the-current-pseudo>`__
      :name: the-current-pseudo
      :class: heading settled

   The :current pseudo-class represents the element, or an ancestor of
   the element, that is currently being displayed.

   Its alternate form :current(), like `:is() <#matches-pseudo>`__,
   takes a list of `compound selectors <#compound>`__ as its argument:
   it represents the `:current <#current-pseudo>`__ element that matches
   the argument or, if that does not match, the innermost ancestor of
   the :current element that does. (If neither the :current element nor
   its ancestors match the argument, then the selector does not
   represent anything.)

   .. container:: example
      :name: example-34db2617

      ` <#example-34db2617>`__ For example, the following rule will
      highlight whichever paragraph or list item is being read aloud in
      a speech rendering of the document:
      ::

         :current(p, li, dt, dd) {
           background: yellow;
         }

/10.2. The Past-element Pseudo-class:
=====================================

   .. .. rubric:: 10.2. The Past-element Pseudo-class:
      `:past <#past-pseudo>`__ ` <#the-past-pseudo>`__
      :name: the-past-pseudo
      :class: heading settled

   The :past pseudo-class represents any element that is defined to
   occur entirely prior to a `:current <#current-pseudo>`__ element. For
   example, the WebVTT spec defines the `:past <#past-pseudo>`__
   pseudo-class `relative to the current playback position of a media
   element <http://dev.w3.org/html5/webvtt/#the-past-and-future-pseudo-classes>`__.
   If a time-based order of elements is not defined by the document
   language, then this represents any element that is a (possibly
   indirect) previous sibling of a :current element.

/10.3. The Future-element Pseudo-class:
=======================================

   .. .. rubric:: 10.3. The Future-element Pseudo-class:
      `:future <#future-pseudo>`__ ` <#the-future-pseudo>`__
      :name: the-future-pseudo
      :class: heading settled

   The :future pseudo-class represents any element that is defined to
   occur entirely after a `:current <#current-pseudo>`__ element. For
   example, the WebVTT spec defines the `:future <#future-pseudo>`__
   pseudo-class `relative to the current playback position of a media
   element <http://dev.w3.org/html5/webvtt/#the-past-and-future-pseudo-classes>`__.
   If a time-based order of elements is not defined by the document
   language, then this represents any element that is a (possibly
   indirect) next sibling of a :current element.

/11. Resource State
===================

   .. .. rubric:: 11. Resource State
      Pseudo-classes ` <#resource-pseudos>`__
      :name: resource-pseudos
      :class: heading settled

   The pseudo-classes in this section apply to elements that represent
   loaded resources, particularly images/videos, and allow authors to
   select them based on some quality of their state.

/11.1. Media Playback State: the
================================

   .. .. rubric:: 11.1. Media Playback State: the
      `:playing <#selectordef-playing>`__,
      `:paused <#selectordef-paused>`__, and
      `:seeking <#selectordef-seeking>`__
      pseudo-classes ` <#video-state>`__
      :name: video-state
      :class: heading settled

   The :playing pseudo-class represents an element that is capable of
   being “played” or “paused”, when that element is “playing”. (This
   includes both when the element is explicitly playing, and when it’s
   temporarily stopped for some reason not connected to user intent, but
   will automatically resume when that reason is resolved, such as a
   “buffering” or “stalled” state.)

   The :paused pseudo-class represents an element that is capable of
   being “played” or “paused”, when that element is “paused” (i.e. *not*
   ”playing”). (This includes both an explicit “paused” state, and other
   non-playing states like “loaded, hasn’t been activated yet”, etc.)

   The :seeking pseudo-class represents an element that is capable of
   ”seeking” when that element is ”seeking”. (For the
   ```audio`` <https://html.spec.whatwg.org/multipage/media.html#audio>`__
   and
   ```video`` <https://html.spec.whatwg.org/multipage/media.html#video>`__
   elements of HTML, see `HTML § 4.8.11.9
   Seeking <https://html.spec.whatwg.org/multipage/media.html#seeking>`__.)

/11.2. Media Loading State: the
===============================

   .. .. rubric:: 11.2. Media Loading State: the
      `:buffering <#selectordef-buffering>`__ and
      `:stalled <#selectordef-stalled>`__
      pseudo-classes ` <#media-loading-state>`__
      :name: media-loading-state
      :class: heading settled

   The :buffering pseudo-class represents an element that is capable of
   being “played” or “paused”, when that element cannot continue playing
   because it is actively attempting to obtain `media
   data <https://html.spec.whatwg.org/multipage/media.html#media-data>`__
   but has not yet obtained enough data to resume playback. (Note that
   the element is still considered to be “playing” when it is
   “buffering”. Whenever `:buffering <#selectordef-buffering>`__ matches
   an element, `:playing <#selectordef-playing>`__ also matches the
   element.)

   The :stalled pseudo-class represents an element when that element
   cannot continue playing because it is actively attempting to obtain
   `media
   data <https://html.spec.whatwg.org/multipage/media.html#media-data>`__
   but it has failed to receive any data for some amount of time. For
   the
   ```audio`` <https://html.spec.whatwg.org/multipage/media.html#audio>`__
   and
   ```video`` <https://html.spec.whatwg.org/multipage/media.html#video>`__
   elements of HTML, this amount of time is the `media element stall
   timeout <https://html.spec.whatwg.org/multipage/media.html#stall-timeout>`__.
   `[HTML] <#biblio-html>`__ (Note that, like with the
   `:buffering <#selectordef-buffering>`__ pseudo-class, the element is
   still considered to be “playing” when it is “stalled”. Whenever
   `:stalled <#selectordef-stalled>`__ matches an element,
   `:playing <#selectordef-playing>`__ also matches the element.)

/11.3. Sound State: the `:muted`__
==================================

   .. .. rubric:: 11.3. Sound State: the `:muted <#selectordef-muted>`__
      and `:volume-locked <#selectordef-volume-locked>`__
      pseudo-classes ` <#sound-state>`__
      :name: sound-state
      :class: heading settled

   The :muted pseudo-class represents an element that is capable of
   making sound, but is currently “muted“ (forced silent). (For the
   ```audio`` <https://html.spec.whatwg.org/multipage/media.html#audio>`__
   and
   ```video`` <https://html.spec.whatwg.org/multipage/media.html#video>`__
   elements of HTML, see
   `muted <https://html.spec.whatwg.org/multipage/media.html#concept-media-muted>`__.
   `[HTML] <#biblio-html>`__)

   The :volume-locked pseudo-class represents an element that is capable
   of making sound, and currently has its volume "locked" by the UA or
   the user, so the page author cannot change it. (For the
   ```audio`` <https://html.spec.whatwg.org/multipage/media.html#audio>`__
   and
   ```video`` <https://html.spec.whatwg.org/multipage/media.html#video>`__
   elements of HTML, see the algorithm for setting the element’s
   `effective media
   volume <https://html.spec.whatwg.org/multipage/media.html#effective-media-volume>`__.
   `[HTML] <#biblio-html>`__)

/12. Element Display State
==========================

   .. .. rubric:: 12. Element Display State
      Pseudo-classes ` <#display-state-pseudos>`__
      :name: display-state-pseudos
      :class: heading settled

/12.1. Collapse State: the `:open`__
====================================

   .. .. rubric:: 12.1. Collapse State: the `:open <#selectordef-open>`__
      and `:closed <#selectordef-closed>`__
      pseudo-class ` <#open-state>`__
      :name: open-state
      :class: heading settled

   The :open pseudo-class represents an element that has both “open” and
   “closed” states, and which is currently in the “open” state.

   The :closed pseudo-class represents an element that has both “open”
   and “closed” states, and which is currently in the closed state.

   Exactly what “open” and “closed” mean is host-language specific, but
   exemplified by elements such as HTML’s
   ```details`` <https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element>`__,
   ```select`` <https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element>`__,
   and
   ```dialog`` <https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element>`__
   elements, all of which can be toggled “open” to display more content
   (or any content at all, in the case of
   ```dialog`` <https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element>`__).

   Note: Being “open” or “closed” is a semantic state. An element not
   currently being displayed (for example, one that has `visibility:
   collapse <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
   or belongs to a `display:
   none <https://drafts.csswg.org/css-display-3/#propdef-display>`__
   subtree) can still be “open” and will match
   `:open <#selectordef-open>`__.

/12.2. Modal (Exclusive Interaction) State: the
===============================================

   .. .. rubric:: 12.2. Modal (Exclusive Interaction) State: the
      `:modal <#selectordef-modal>`__ pseudo-class ` <#modal-state>`__
      :name: modal-state
      :class: heading settled

   The :modal pseudo-class represents an element which is in a state
   that excludes all interaction with elements outside it until it has
   been dismissed. Multiple elements can be
   `:modal <#selectordef-modal>`__ simultaneously, with only one of them
   active (able to receive input).

   .. container:: example
      :name: example-82b2b6f1

      ` <#example-82b2b6f1>`__ For example, the
      ```dialog`` <https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element>`__
      element is `:modal <#selectordef-modal>`__ when opened with the
      ```showModal()`` <https://html.spec.whatwg.org/multipage/interactive-elements.html#dom-dialog-showmodal>`__
      API. Similarly, a `:fullscreen <#selectordef-fullscreen>`__
      element is also :modal when opened with the
      ```requestFullscreen()`` <https://fullscreen.spec.whatwg.org/#dom-element-requestfullscreen>`__
      API, since this prevents interaction with the rest of the page.

/12.3. Fullscreen Presentation State: the
=========================================

   .. .. rubric:: 12.3. Fullscreen Presentation State: the
      `:fullscreen <#selectordef-fullscreen>`__
      pseudo-class ` <#fullscreen-state>`__
      :name: fullscreen-state
      :class: heading settled

   The :fullscreen pseudo-class represents an element which is displayed
   in a mode that takes up most (usually all) of the screen, such as
   that defined by the Fullscreen API.
   `[FULLSCREEN] <#biblio-fullscreen>`__

/12.4. Picture-in-Picture Presentation State: the
=================================================

   .. .. rubric:: 12.4. Picture-in-Picture Presentation State: the
      `:picture-in-picture <#selectordef-picture-in-picture>`__
      pseudo-class ` <#pip-state>`__
      :name: pip-state
      :class: heading settled

   The :picture-in-picture pseudo-class represents an element which is
   displayed in a mode that takes up most (usually all) of the viewport,
   and whose viewport is confined to part of the screen while being
   displayed over other content, for example when using the
   Picture-in-Picture API.
   `[picture-in-picture] <#biblio-picture-in-picture>`__

/13. The Input Pseudo-classes 
==============================

   .. .. rubric:: 13. The Input Pseudo-classes ` <#input-pseudos>`__
      :name: input-pseudos
      :class: heading settled

   The pseudo-classes in this section mostly apply to elements that take
   user input, such as HTML’s
   `input <https://html.spec.whatwg.org/multipage/input.html#the-input-element>`__
   element.

/13.1. Input Control States 
============================

   .. .. rubric:: 13.1. Input Control States ` <#input-states>`__
      :name: input-states
      :class: heading settled

/13.1.1. The `:enabled and
==========================

   .. .. rubric:: 13.1.1. The `:enabled <#enabled-pseudo>`__ and
      `:disabled <#disabled-pseudo>`__
      Pseudo-classes ` <#enableddisabled>`__
      :name: enableddisabled
      :class: heading settled

   The :enabled pseudo-class represents user interface elements that are
   in an enabled state; such elements must have a corresponding disabled
   state.

   Conversely, the :disabled pseudo-class represents user interface
   elements that are in a disabled state; such elements must have a
   corresponding enabled state.

   What constitutes an enabled state, a disabled state, and a user
   interface element is host-language-dependent. In a typical document
   most elements will be neither `:enabled <#enabled-pseudo>`__ nor
   `:disabled <#disabled-pseudo>`__. For example,
   `[HTML5] <#biblio-html5>`__ defines `non-disabled interactive
   elements <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-enabled>`__
   to be :enabled, and any such elements that are `explicitly
   disabled <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-enabled>`__
   to be :disabled.

   Note: CSS properties that might affect a user’s ability to interact
   with a given user interface element do not affect whether it matches
   `:enabled <#enabled-pseudo>`__ or `:disabled <#disabled-pseudo>`__;
   e.g., the
   `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__
   and
   `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__
   properties have no effect on the enabled/disabled state of an
   element.

/13.1.2. The Mutability Pseudo-classes:
=======================================

   .. .. rubric:: 13.1.2. The Mutability Pseudo-classes:
      `:read-only <#read-only-pseudo>`__ and
      `:read-write <#read-write-pseudo>`__ ` <#rw-pseudos>`__
      :name: rw-pseudos
      :class: heading settled

   An element matches :read-write if it is user-alterable, as defined by
   the document language. Otherwise, it is :read-only.

   For example, in `[HTML5] <#biblio-html5>`__ a `non-disabled
   non-readonly ``<input>``
   element <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-read-only>`__
   is `:read-write <#read-write-pseudo>`__, as is any element with the
   ``contenteditable`` attribute set to the true state.

/13.1.3. The Placeholder-shown Pseudo-class:
============================================

   .. .. rubric:: 13.1.3. The Placeholder-shown Pseudo-class:
      `:placeholder-shown <#placeholder-shown-pseudo>`__ ` <#placeholder>`__
      :name: placeholder
      :class: heading settled

   Input elements can sometimes show placeholder text as a hint to the
   user on what to type in. See, for example, the ``placeholder``
   attribute in `[HTML5] <#biblio-html5>`__. The :placeholder-shown
   pseudo-class matches an input element that is showing such
   placeholder text, whether that text is given by an attribute or a
   real element, or is otherwise implied by the UA.

   .. container:: example
      :name: example-37912861

      ` <#example-37912861>`__ For example, according to the semantics
      of `[HTML] <#biblio-html>`__ the
      ```placeholder`` <https://html.spec.whatwg.org/multipage/input.html#attr-input-placeholder>`__
      attribute on the
      ```input`` <https://html.spec.whatwg.org/multipage/input.html#the-input-element>`__
      and
      ```textarea`` <https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element>`__
      elements provide placeholder text. The
      `:placeholder-shown <#placeholder-shown-pseudo>`__ class thus
      applies whenever such placeholder text is shown.

/13.1.4. The Automatic Input Pseudo-class:
==========================================

   .. .. rubric:: 13.1.4. The Automatic Input Pseudo-class:
      `:autofill <#selectordef-autofill>`__ ` <#autofill>`__
      :name: autofill
      :class: heading settled

   The :autofill pseudo-class represents input elements that have been
   automatically filled by the user agent, and have not been
   subsequently altered by the user.

/13.1.5. The Default-option Pseudo-class:
=========================================

   .. .. rubric:: 13.1.5. The Default-option Pseudo-class:
      `:default <#default-pseudo>`__ ` <#the-default-pseudo>`__
      :name: the-default-pseudo
      :class: heading settled

   The :default pseudo-class applies to the one or more UI elements that
   are the default among a set of similar elements. Typically applies to
   context menu items, buttons and select lists/menus.

   One example is the default submit button among a set of buttons.
   Another example is the default option from a popup menu. In a
   select-many group (such as for pizza toppings), multiple elements can
   match `:default <#default-pseudo>`__. For example,
   `[HTML5] <#biblio-html5>`__ defines that :default matches `the
   “default button” in a form, the initially-selected ``<option>`` (s)
   in a ``<select>``, and a few other
   elements. <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default>`__

/13.2. Input Value States 
==========================

   .. .. rubric:: 13.2. Input Value States ` <#input-value-states>`__
      :name: input-value-states
      :class: heading settled

/13.2.1. The Selected-option Pseudo-class:
==========================================

   .. .. rubric:: 13.2.1. The Selected-option Pseudo-class:
      `:checked <#checked-pseudo>`__ ` <#checked>`__
      :name: checked
      :class: heading settled

   Radio and checkbox elements can be toggled by the user. Some menu
   items are “checked” when the user selects them. When such elements
   are toggled “on” the :checked pseudo-class applies. For example,
   `[HTML5] <#biblio-html5>`__ defines that `checked checkboxes, radio
   buttons, and selected ``<option>``
   elements <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-checked>`__
   match `:checked <#checked-pseudo>`__.

   While the `:checked <#checked-pseudo>`__ pseudo-class is dynamic in
   nature, and can altered by user action, since it can also be based on
   the presence of semantic attributes in the document (such as the
   ``selected`` and ``checked`` attributes in
   `[HTML5] <#biblio-html5>`__), it applies to all media.

   .. container:: example
      :name: example-a6c4964c

      ` <#example-a6c4964c>`__ An unchecked checkbox can be selected by
      using the negation pseudo-class:
      ::

         input[type=checkbox]:not(:checked)

/13.2.2. The Indeterminate-value Pseudo-class:
==============================================

   .. .. rubric:: 13.2.2. The Indeterminate-value Pseudo-class:
      `:indeterminate <#indeterminate-pseudo>`__ ` <#indeterminate>`__
      :name: indeterminate
      :class: heading settled

   The :indeterminate pseudo-class applies to UI elements whose value is
   in an indeterminate state. For example, radio and checkbox elements
   can be toggled between checked and unchecked states, but are
   sometimes in an indeterminate state, neither checked nor unchecked.
   Similarly a progress meter can be in an indeterminate state when the
   percent completion is unknown. For example,
   `[HTML5] <#biblio-html5>`__ defines how
   `checkboxes <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-indeterminate>`__
   can be made to match `:indeterminate <#indeterminate-pseudo>`__.

   Like the `:checked <#checked-pseudo>`__ pseudo-class,
   `:indeterminate <#indeterminate-pseudo>`__ applies to all media.
   Components of a radio-group initialized with no pre-selected choice,
   for example, would be :indeterminate even in a static display.

/13.3. Input Value-checking 
============================

   .. .. rubric:: 13.3. Input Value-checking ` <#ui-validity>`__
      :name: ui-validity
      :class: heading settled

/13.3.1. The Empty-Value Pseudo-class:
======================================

   .. .. rubric:: 13.3.1. The Empty-Value Pseudo-class:
      `:blank <#blank-pseudo>`__ ` <#blank>`__
      :name: blank
      :class: heading settled

   The :blank pseudo-class applies to user-input elements whose input
   value is empty (consists of the empty string or otherwise null
   input).

   .. note::

      Roughly speaking, if a human looked at a printout of the form and
      would say it’s blank, it matches `:blank <#blank-pseudo>`__.
      A rule of thumb for interpreting `:blank <#blank-pseudo>`__ on
      form controls is:

      -  If the control always submits, and would do so with an empty
         string, it matches `:blank <#blank-pseudo>`__. (Such as HTML’s
         ``<input type=text>`` when its value is empty.)

      -  If it sometimes submits, and is set to not submit, it matches
         `:blank <#blank-pseudo>`__. (Such as HTML’s
         ``<input type=checkbox>`` when not checked.)

      -  If it’s an “action button” (rather than a “toggle button” that
         represents a state) such as ``<button>``,
         ``<input type=submit>``, etc., it never matches
         `:blank <#blank-pseudo>`__.

      Host languages can specify more precise rules for when form
      controls match `:blank <#blank-pseudo>`__.

   Note: This selector is at-risk.

/13.3.2. The Validity Pseudo-classes:
=====================================

   .. .. rubric:: 13.3.2. The Validity Pseudo-classes:
      `:valid <#valid-pseudo>`__ and
      `:invalid <#invalid-pseudo>`__ ` <#validity-pseudos>`__
      :name: validity-pseudos
      :class: heading settled

   An element is :valid or :invalid when its contents or value is,
   respectively, valid or invalid with respect to data validity
   semantics defined by the document language (e.g.
   `[XFORMS11] <#biblio-xforms11>`__ or `[HTML5] <#biblio-html5>`__). An
   element which lacks data validity semantics is neither
   `:valid <#valid-pseudo>`__ nor `:invalid <#invalid-pseudo>`__.

   Note: There is a difference between an element which has no
   constraints, and thus would always be `:valid <#valid-pseudo>`__, and
   one which has no data validity semantics at all, and thus is neither
   :valid nor `:invalid <#invalid-pseudo>`__. In HTML, for example, an
   ``<input type="text">`` element may have no constraints, but a
   `p <https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element>`__
   element has no validity semantics at all, and so it never matches
   either of these pseudo-classes.

/13.3.3. The Range Pseudo-classes:
==================================

   .. .. rubric:: 13.3.3. The Range Pseudo-classes:
      `:in-range <#in-range-pseudo>`__ and
      `:out-of-range <#out-of-range-pseudo>`__ ` <#range-pseudos>`__
      :name: range-pseudos
      :class: heading settled

   The :in-range and :out-of-range pseudo-classes apply only to elements
   that have range limitations. An element is
   `:in-range <#in-range-pseudo>`__ or
   `:out-of-range <#out-of-range-pseudo>`__ when the value that the
   element is bound to is in range or out of range with respect to its
   range limits as defined by the document language. An element that
   lacks data range limits or is not a form control is neither :in-range
   nor :out-of-range. E.g. a slider element with a value of 11 presented
   as a slider control that only represents the values from 1-10 is
   :out-of-range. Another example is a menu element with a value of "E"
   that happens to be presented in a popup menu that only has choices
   "A", "B" and "C".

/13.3.4. The Optionality Pseudo-classes:
========================================

   .. .. rubric:: 13.3.4. The Optionality Pseudo-classes:
      `:required <#required-pseudo>`__ and
      `:optional <#optional-pseudo>`__ ` <#opt-pseudos>`__
      :name: opt-pseudos
      :class: heading settled

   A form element is :required or :optional if a value for it is,
   respectively, required or optional before the form it belongs to can
   be validly submitted. Elements that are not form elements are neither
   required nor optional.

/13.3.5. The User-interaction Pseudo-classes:
=============================================

   .. .. rubric:: 13.3.5. The User-interaction Pseudo-classes:
      `:user-valid <#user-valid-pseudo>`__ and
      `:user-invalid <#user-invalid-pseudo>`__ ` <#user-pseudos>`__
      :name: user-pseudos
      :class: heading settled

   The :user-invalid and the :user-valid pseudo-classes represent an
   element with incorrect or correct input, respectively, but only
   *after* the user has significantly interacted with it.

   The `:user-invalid <#user-invalid-pseudo>`__ pseudo-class must match
   an `:invalid <#invalid-pseudo>`__,
   `:out-of-range <#out-of-range-pseudo>`__, or
   blank-but-`:required <#required-pseudo>`__ elements between the time
   the user has attempted to submit the form and before the user has
   interacted again with the form element.

   The `:user-valid <#user-valid-pseudo>`__ pseudo-class must match a
   `:valid <#valid-pseudo>`__ element between the time the user has
   attempted to submit the form and before the user has interacted again
   with the form element.

   User-agents may allow them to match such elements at other times, as
   would be appropriate for highlighting an error to the user. For
   example, a UA may choose to have
   `:user-invalid <#user-invalid-pseudo>`__ match an
   `:invalid <#invalid-pseudo>`__ element once the user has typed some
   text into it and changed the focus to another element, and to stop
   matching only after the user has successfully corrected the input.

   .. container:: example
      :name: example-42eddba4

      ` <#example-42eddba4>`__ For example, the input in the following
      document fragment would match `:invalid <#invalid-pseudo>`__ as
      soon as the page is loaded (because it the initial value violates
      the max-constraint), but it won’t match
      `:user-invalid <#user-invalid-pseudo>`__ until the user
      significantly interacts with the element, or attempts to submit
      the form it’s part of.
      ::

         <form>
           <label>
             Volume:
             <input name='vol' type=number min=0 max=10 value=11>
           </label>
           ...
         </form>

   ` <#issue-b776312b>`__ Cross-check with
   `:-moz-ui-invalid <https://developer.mozilla.org/en-US/docs/Web/CSS/%3A-moz-ui-invalid>`__.

   ` <#issue-a71d9d5b>`__ Evaluate proposed `:dirty
   pseudo-class <https://lists.w3.org/Archives/Public/www-style/2014Feb/0511.html>`__

   ` <#issue-df919919>`__ Clarify that this (and
   `:invalid <#invalid-pseudo>`__/`:valid <#valid-pseudo>`__) can apply
   to form and fieldset elements.

/14. Tree-Structural
====================

   .. .. rubric:: 14. Tree-Structural
      pseudo-classes ` <#structural-pseudos>`__
      :name: structural-pseudos
      :class: heading settled

   Selectors introduces the concept of structural pseudo-classes to
   permit selection based on extra information that lies in the document
   tree but cannot be represented by other simple selectors or
   combinators.

   Standalone text and other non-element nodes are not counted when
   calculating the position of an element in the list of children of its
   parent. When calculating the position of an element in the list of
   children of its parent, the index numbering starts at 1.

   The `structural pseudo-classes <#structural-pseudo-classes>`__ only
   apply to elements in the document tree; they must never match
   `pseudo-elements <#pseudo-element>`__.

/14.1. `:root`__
================

   .. .. rubric:: 14.1. `:root <#root-pseudo>`__
      pseudo-class ` <#the-root-pseudo>`__
      :name: the-root-pseudo
      :class: heading settled

   The :root pseudo-class represents an element that is the root of the
   document.

   For example, in a DOM document, the `:root <#root-pseudo>`__
   pseudo-class matches the `document
   element <https://dom.spec.whatwg.org/#document-element>`__. In HTML,
   this will be the
   ```html`` <https://html.spec.whatwg.org/multipage/semantics.html#the-html-element>`__
   element (unless scripting has been used to modify the document).

/14.2. `:empty`__
=================

   .. .. rubric:: 14.2. `:empty <#empty-pseudo>`__
      pseudo-class ` <#the-empty-pseudo>`__
      :name: the-empty-pseudo
      :class: heading settled

   The :empty pseudo-class represents an element that has no children
   except, optionally, `document white space
   characters <https://drafts.csswg.org/css-text-4/#white-space>`__. In
   terms of the document tree, only element nodes and content nodes
   (such as `[DOM] <#biblio-dom>`__ text nodes, and entity references)
   whose data has a non-zero length must be considered as affecting
   emptiness; comments, processing instructions, and other nodes must
   not affect whether an element is considered empty or not.

   .. container:: example
      :name: example-3846287b

      ` <#example-3846287b>`__ Examples: p:empty is a valid
      representation of the
      ```p`` <https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element>`__
      elements in the following HTML fragment:
      .. code:: html

         <p></p>
         <p>
         <p> </p>
         <p></p>

      div:empty is not a valid representation of the ``<div>`` elements
      in the following fragment:

      .. code:: html

         <div>text</div>
         <div><p></p></div>
         <div>&nbsp;</div>
         <div><p>bla</p></div>
         <div>this is not <p>:empty</p></div>

   Note: In Level 2 and Level 3 of Selectors, `:empty <#empty-pseudo>`__
   did not match elements that contained only white space. This was
   changed so that that—​given white space is largely collapsible in HTML
   and is therefore used for source code formatting, and especially
   because elements with omitted end tags are likely to absorb such
   white space into their DOM text contents—​elements which authors
   perceive of as empty can be selected by this selector, as they
   expect.

/14.3. Child-indexed Pseudo-classes 
====================================

   .. .. rubric:: 14.3. Child-indexed Pseudo-classes ` <#child-index>`__
      :name: child-index
      :class: heading settled

   The pseudo-classes defined in this section select elements based on
   their index amongst their `inclusive
   siblings <https://dom.spec.whatwg.org/#concept-tree-inclusive-sibling>`__.

   Note: Selectors 3 described these selectors as selecting elements
   based on their index in the child list of their parents. (This
   description survives in the name of this very section, and the names
   of several of the pseudo-classes.) As there was no reason to exclude
   them from matching elements without parents, or with non-element
   parents, they have been rephrased to refer to an element’s relative
   index amongst its siblings.

/14.3.1. `:nth-child()`__
=========================

   .. .. rubric:: 14.3.1. `:nth-child() <#nth-child-pseudo>`__
      pseudo-class ` <#the-nth-child-pseudo>`__
      :name: the-nth-child-pseudo
      :class: heading settled

   The :nth-child(``An+B`` [of ``S``]? ) pseudo-class notation
   represents elements that are among ``An+B`` th elements from the
   list composed of their `inclusive
   siblings <https://dom.spec.whatwg.org/#concept-tree-inclusive-sibling>`__
   that match the `selector list <#selector-list>`__ ``S``, which is a
   `<complex-real-selector-list> <#typedef-complex-real-selector-list>`__.
   If ``S`` is omitted, it defaults to \*|\*.

   The ``An+B`` notation and its interpretation are defined in `CSS
   Syntax 3 § 6 The An+B
   microsyntax <https://drafts.csswg.org/css-syntax-3/#anb-microsyntax>`__;
   it represents any index ``i`` = ``A`` ``n`` + ``B`` for any
   non-negative integer ``n``.

   Note: For these purposes, the list of elements is **1-indexed**; that
   is, the first child of an element has index 1, and will be matched by
   :nth-child(2n+1), because when ``n=0`` the expression evaluates to 1.

   For example, this selector could address every other row in a table,
   and could be used to alternate the color of paragraph text in a cycle
   of four.

   .. container:: example
      :name: example-b8d691c9

      ` <#example-b8d691c9>`__ Examples:
      ::

         :nth-child(even)   /* represents the 2nd, 4th, 6th, etc elements
         :nth-child(10n-1)  /* represents the 9th, 19th, 29th, etc elements */
         :nth-child(10n+9)  /* Same */
         :nth-child(10n+-1) /* Syntactically invalid, and would be ignored */

   Note: The specificity of the `:nth-child() <#nth-child-pseudo>`__
   pseudo-class is the specificity of a single pseudo-class plus, if
   ``S`` is specified, the specificity of the most specific `complex
   selector <#complex>`__ in ``S``. See `§ 17 Calculating a selector’s
   specificity <#specificity-rules>`__. Thus ``S``:nth-child(``An+B``)
   and :nth-child(``An+B`` of ``S``) have the exact same specificity,
   although they do differ in behavior (see example below).

   .. container:: example
      :name: example-3c07f717

      ` <#example-3c07f717>`__ By passing a selector argument, we can
      select the Nth element that matches that selector. For example,
      the following selector matches the first three “important” list
      items, denoted by the .important class:
      ::

         :nth-child(-n+3 of li.important)

      Note that this is different from moving the selector outside of
      the function, like:

      ::

         li.important:nth-child(-n+3)

      This selector instead just selects the first three children if
      they also happen to be "important" list items.

   .. container:: example
      :name: example-48f80a26

      ` <#example-48f80a26>`__ Here’s another example of using the
      selector argument, to ensure that zebra-striping a table works
      correctly.
      Normally, to zebra-stripe a table’s rows, an author would use CSS
      similar to the following:

      ::

         tr {
           background: white;
         }
         tr:nth-child(even) {
           background: silver;
         }

      However, if some of the rows are hidden and not displayed, this
      can break up the pattern, causing multiple adjacent rows to have
      the same background color. Assuming that rows are hidden with the
      [hidden] attribute in HTML, the following CSS would zebra-stripe
      the table rows robustly, maintaining a proper alternating
      background regardless of which rows are hidden:

      ::

         tr {
           background: white;
         }
         tr:nth-child(even of :not([hidden])) {
           background: silver;
         }

/14.3.2. `:nth-last-child()`__
==============================

   .. .. rubric:: 14.3.2. `:nth-last-child() <#nth-last-child-pseudo>`__
      pseudo-class ` <#the-nth-last-child-pseudo>`__
      :name: the-nth-last-child-pseudo
      :class: heading settled

   The :nth-last-child(``An+B`` [of ``S``]? ) pseudo-class notation
   represents elements that are among ``An+B`` th elements from the
   list composed of their `inclusive
   siblings <https://dom.spec.whatwg.org/#concept-tree-inclusive-sibling>`__
   that match the `selector list <#selector-list>`__ ``S``, counting
   backwards from the end. ``S`` is
   `<complex-real-selector-list> <#typedef-complex-real-selector-list>`__.
   If ``S`` is omitted, it defaults to \*|\*.

   Note: The specificity of the
   `:nth-last-child() <#nth-last-child-pseudo>`__ pseudo-class, like the
   `:nth-child() <#nth-child-pseudo>`__ pseudo-class, combines the
   specificity of a regular pseudo-class with that of its selector
   argument ``S``. See `§ 17 Calculating a selector’s
   specificity <#specificity-rules>`__.

   The CSS Syntax Module `[CSS3SYN] <#biblio-css3syn>`__ defines the
   ```An+B`` notation <https://drafts.csswg.org/css-syntax/#anb>`__.

   .. container:: example
      :name: example-bee68ad4

      ` <#example-bee68ad4>`__ Examples:
      ::

         tr:nth-last-child(-n+2)    /* represents the two last rows of an HTML table */

         foo:nth-last-child(odd)    /* represents all odd foo elements in their parent element,
                                       counting from the last one */

/14.3.3. `:first-child`__
=========================

   .. .. rubric:: 14.3.3. `:first-child <#first-child-pseudo>`__
      pseudo-class ` <#the-first-child-pseudo>`__
      :name: the-first-child-pseudo
      :class: heading settled

   The :first-child pseudo-class represents an element that if first
   among its `inclusive
   siblings <https://dom.spec.whatwg.org/#concept-tree-inclusive-sibling>`__.
   Same as :nth-child(1).

   .. container:: example
      :name: example-72934891

      ` <#example-72934891>`__ Examples: The following selector
      represents a
      `p <https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element>`__
      element that is the first child of a
      `div <https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element>`__
      element:
      ::

         div > p:first-child

      This selector can represent the ``p`` inside the ``div`` of the
      following fragment:

      ::

         <p> The last P before the note.</p>
         <div class="note">
            <p> The first P inside the note.</p>
         </div>

      but cannot represent the second ``p`` in the following fragment:

      ::

         <p> The last P before the note.</p>
         <div class="note">
            <h2> Note </h2>
            <p> The first P inside the note.</p>
         </div>

      The following two selectors are usually equivalent:

      ::

         * > a:first-child /* a is first child of any element */
         a:first-child /* Same (assuming a is not the root element) */

/14.3.4. `:last-child`__
========================

   .. .. rubric:: 14.3.4. `:last-child <#last-child-pseudo>`__
      pseudo-class ` <#the-last-child-pseudo>`__
      :name: the-last-child-pseudo
      :class: heading settled

   The :last-child pseudo-class represents an element that is last among
   its `inclusive
   siblings <https://dom.spec.whatwg.org/#concept-tree-inclusive-sibling>`__.
   Same as :nth-last-child(1).

   .. container:: example
      :name: example-48137186

      ` <#example-48137186>`__ Example: The following selector
      represents a list item ``li`` that is the last child of an ordered
      list ``ol``.
      ::

         ol > li:last-child

/14.3.5. `:only-child`__
========================

   .. .. rubric:: 14.3.5. `:only-child <#only-child-pseudo>`__
      pseudo-class ` <#the-only-child-pseudo>`__
      :name: the-only-child-pseudo
      :class: heading settled

   The :only-child pseudo-class represents an element that has no
   siblings. Same as :first-child:last-child or
   :nth-child(1):nth-last-child(1), but with a lower specificity.

/14.4. Typed Child-indexed
==========================

   .. .. rubric:: 14.4. Typed Child-indexed
      Pseudo-classes ` <#typed-child-index>`__
      :name: typed-child-index
      :class: heading settled

   The pseudo-classes in this section are similar to the `Child Index
   Pseudo-classes <#child-index>`__, but they resolve based on an
   element’s index **among elements of the same** `type (tag
   name) <#type-selectors>`__ in their sibling list.

/14.4.1. `:nth-of-type()`__
===========================

   .. .. rubric:: 14.4.1. `:nth-of-type() <#nth-of-type-pseudo>`__
      pseudo-class ` <#the-nth-of-type-pseudo>`__
      :name: the-nth-of-type-pseudo
      :class: heading settled

   The :nth-of-type(``An+B``) pseudo-class notation represents the same
   elements that would be matched by :nth-child(\|An+B\| of ``S``),
   where ``S`` is a `type selector <#type-selector>`__ and namespace
   prefix matching the element in question. For example, when
   considering whether an HTML
   ```img`` <https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element>`__
   element matches this `pseudo-class <#pseudo-class>`__, the ``S`` in
   question is html|img (assuming an appropriate ``html`` namespace is
   declared).

   .. container:: example
      :name: example-3d09bf4d

      ` <#example-3d09bf4d>`__ CSS example: This allows an author to
      alternate the position of floated images:
      ::

         img:nth-of-type(2n+1) { float: right; }
         img:nth-of-type(2n) { float: left; }

   Note: If the type of the element is known ahead of time, this
   pseudo-class is equivalent to using
   `:nth-child() <#nth-child-pseudo>`__ with a type selector. That is,
   img:nth-of-type(2) is equivalent to \*:nth-child(2 of img).

/14.4.2.
========

   .. .. rubric:: 14.4.2.
      `:nth-last-of-type() <#nth-last-of-type-pseudo>`__
      pseudo-class ` <#the-nth-last-of-type-pseudo>`__
      :name: the-nth-last-of-type-pseudo
      :class: heading settled

   The :nth-last-of-type(``An+B``) pseudo-class notation represents the
   same elements that would be matched by :nth-last-child(\|An+B\| of
   ``S``), where ``S`` is a `type selector <#type-selector>`__ and
   namespace prefix matching the element in question. For example, when
   considering whether an HTML
   ```img`` <https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element>`__
   element matches this `pseudo-class <#pseudo-class>`__, the ``S`` in
   question is html|img (assuming an appropriate ``html`` namespace is
   declared).

   .. container:: example
      :name: example-b89418c8

      ` <#example-b89418c8>`__ Example: To represent all ``h2`` children
      of an XHTML ``body`` except the first and last, one could use the
      following selector:
      ::

         body > h2:nth-of-type(n+2):nth-last-of-type(n+2) 

      In this case, one could also use `:not() <#negation-pseudo>`__,
      although the selector ends up being just as long:

      ::

         body > h2:not(:first-of-type):not(:last-of-type) 

/14.4.3. `:first-of-type`__
===========================

   .. .. rubric:: 14.4.3. `:first-of-type <#first-of-type-pseudo>`__
      pseudo-class ` <#the-first-of-type-pseudo>`__
      :name: the-first-of-type-pseudo
      :class: heading settled

   The :first-of-type pseudo-class represents the same element as
   :nth-of-type(1).

   .. container:: example
      :name: example-16f73753

      ` <#example-16f73753>`__ Example: The following selector
      represents a definition title ``dt`` inside a definition list
      ``dl``, this ``dt`` being the first of its type in the list of
      children of its parent element.
      ::

         dl dt:first-of-type

      It is a valid description for the first two ``dt`` elements in the
      following example but not for the third one:

      ::

         <dl>
           <dt>gigogne</dt>
           <dd>
             <dl>
               <dt>fusée</dt>
               <dd>multistage rocket</dd>
               <dt>table</dt>
               <dd>nest of tables</dd>
             </dl>
           </dd>
         </dl>

/14.4.4. `:last-of-type`__
==========================

   .. .. rubric:: 14.4.4. `:last-of-type <#last-of-type-pseudo>`__
      pseudo-class ` <#the-last-of-type-pseudo>`__
      :name: the-last-of-type-pseudo
      :class: heading settled

   The :last-of-type pseudo-class represents the same element as
   :nth-last-of-type(1).

   .. container:: example
      :name: example-fee30007

      ` <#example-fee30007>`__ Example: The following selector
      represents the last data cell ``td`` of a table row ``tr``.
      ::

         tr > td:last-of-type

/14.4.5. `:only-of-type`__
==========================

   .. .. rubric:: 14.4.5. `:only-of-type <#only-of-type-pseudo>`__
      pseudo-class ` <#the-only-of-type-pseudo>`__
      :name: the-only-of-type-pseudo
      :class: heading settled

   The :only-of-type pseudo-class represents the same element as
   :first-of-type:last-of-type.

/15. Combinators 
=================

   .. .. rubric:: 15. Combinators ` <#combinators>`__
      :name: combinators
      :class: heading settled

/15.1. Descendant combinator
============================

   .. .. rubric:: 15.1. Descendant combinator
      (````) ` <#descendant-combinators>`__
      :name: descendant-combinators
      :class: heading settled

   At times, authors may want selectors to describe an element that is
   the descendant of another element in the document tree (e.g., "an
   `em <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element>`__
   element that is contained within an
   `H1 <https://html.spec.whatwg.org/multipage/sections.html#the-h1-element>`__
   element"). The descendant combinator expresses such a relationship.

   A descendant combinator is whitespace that separates two `compound
   selectors <#compound>`__.

   A selector of the form A B represents an element ``B`` that is an
   arbitrary descendant of some ancestor element ``A``.

   .. container:: example
      :name: example-13246ba1

      ` <#example-13246ba1>`__ Examples: For example, consider the
      following selector:
      ::

         h1 em

      It represents an
      `em <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element>`__
      element being the descendant of an
      `h1 <https://html.spec.whatwg.org/multipage/sections.html#the-h1-element>`__
      element. It is a correct and valid, but partial, description of
      the following fragment:

      ::

         <h1>This <span class="myclass">headline
         is <em>very</em> important</span></h1>

      The following selector:

      ::

         div * p

      represents a
      `p <https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element>`__
      element that is a grandchild or later descendant of a
      `div <https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element>`__
      element. Note the whitespace on either side of the "\*" is not
      part of the universal selector; the whitespace is a combinator
      indicating that the ``div`` must be the ancestor of some element,
      and that that element must be an ancestor of the ``p``. The
      following selector, which combines descendant combinators and
      `attribute selectors <#attribute-selectors>`__, represents an
      element that (1) has the ``href`` attribute set and (2) is inside
      a ``p`` that is itself inside a ``div``:

      ::

         div p *[href]

/15.2. Child combinator (``>``) 
================================

   .. .. rubric:: 15.2. Child combinator (``>``) ` <#child-combinators>`__
      :name: child-combinators
      :class: heading settled

   A child combinator describes a childhood relationship between two
   elements. A child combinator is made of the "greater-than sign"
   (U+003E, >) code point and separates two `compound
   selectors <#compound>`__.

   .. container:: example
      :name: example-63e612ba

      ` <#example-63e612ba>`__ Examples: The following selector
      represents a
      `p <https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element>`__
      element that is child of ``body``:
      ::

         body > p

      The following example combines descendant combinators and child
      combinators.

      ::

         div ol>li p

      It represents a
      `p <https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element>`__
      element that is a descendant of an
      `li <https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element>`__
      element; the li element must be the child of an
      `ol <https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element>`__
      element; the ol element must be a descendant of a ``div``. Notice
      that the optional white space around the ">" combinator has been
      left out.

   For information on selecting the first child of an element, please
   see the section on the `:first-child <#first-child-pseudo>`__
   pseudo-class above.

/15.3. Next-sibling combinator
==============================

   .. .. rubric:: 15.3. Next-sibling combinator
      (``+``) ` <#adjacent-sibling-combinators>`__
      :name: adjacent-sibling-combinators
      :class: heading settled

   The next-sibling combinator is made of the “plus sign” (U+002B, +)
   code point that separates two `compound selectors <#compound>`__. The
   elements represented by the two compound selectors share the same
   parent in the document tree and the element represented by the first
   compound selector immediately precedes the element represented by the
   second one. Non-element nodes (e.g. text between elements) are
   ignored when considering the adjacency of elements.

   .. container:: example
      :name: example-0f0597d9

      ` <#example-0f0597d9>`__ Examples: The following selector
      represents a
      `p <https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element>`__
      element immediately following a
      `math <https://w3c.github.io/mathml-core/#dfn-math>`__ element:
      ::

         math + p

      The following selector is conceptually similar to the one in the
      previous example, except that it adds an attribute selector — it
      adds a constraint to the
      `h1 <https://html.spec.whatwg.org/multipage/sections.html#the-h1-element>`__
      element, that it must have ``class="opener"``:

      ::

         h1.opener + h2

/15.4. Subsequent-sibling combinator
====================================

   .. .. rubric:: 15.4. Subsequent-sibling combinator
      (``~``) ` <#general-sibling-combinators>`__
      :name: general-sibling-combinators
      :class: heading settled

   The subsequent-sibling combinator is made of the "tilde" (U+007E, ~)
   code point that separates two `compound selectors <#compound>`__. The
   elements represented by the two compound selectors share the same
   parent in the document tree and the element represented by the first
   compound selector precedes (not necessarily immediately) the element
   represented by the second one.

   .. container:: example
      :name: example-ae614b62

      ` <#example-ae614b62>`__
      ::

         h1 ~ pre

      represents a
      `pre <https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element>`__
      element following an ``h1``. It is a correct and valid, but
      partial, description of:

      ::

         <h1>Definition of the function a</h1>
         <p>Function a(x) has to be applied to all figures in the table.</p>
         <pre>function a(x) = 12x/13.5</pre>

/16. Grid-Structural Selectors 
===============================

   .. .. rubric:: 16. Grid-Structural Selectors ` <#table-pseudos>`__
      :name: table-pseudos
      :class: heading settled

   The double-association of a cell in a 2D grid (to its row and column)
   cannot be represented by parentage in a hierarchical markup language.
   Only one of those associations can be represented hierarchically: the
   other must be explicitly or implicitly defined in the document
   language semantics. In both HTML and DocBook, two of the most common
   hierarchical markup languages, the markup is row-primary (that is,
   the row associations are represented hierarchically); the columns
   must be implied. To be able to represent such implied column-based
   relationships, the `column combinator <#column-combinator>`__ and the
   `:nth-col() <#nth-col-pseudo>`__ and
   `:nth-last-col() <#nth-last-col-pseudo>`__ pseudo-classes are
   defined. In a column-primary format, these pseudo-classes match
   against row associations instead.

/16.1. Column combinator
========================

   .. .. rubric:: 16.1. Column combinator
      (``||``) ` <#the-column-combinator>`__
      :name: the-column-combinator
      :class: heading settled

   The column combinator, which consists of two pipes (\|\|) represents
   the relationship of a column element to a cell element belonging to
   the column it represents. Column membership is determined based on
   the semantics of the document language only: whether and how the
   elements are presented is not considered. If a cell element belongs
   to more than one column, it is represented by a selector indicating
   membership in any of those columns.

   .. container:: example
      :name: example-60f47339

      ` <#example-60f47339>`__ The following example makes cells C, E,
      and G gray.
      ::

         col.selected || td {
           background: gray;
           color: white;
           font-weight: bold;
         }

      ::

         <table>
           <col span="2">
           <col class="selected">
           <tr><td>A <td>B <td>C
           <tr><td colspan="2">D <td>E
           <tr><td>F <td colspan="2">G
         </table>

/16.2. `:nth-col()`__
=====================

   .. .. rubric:: 16.2. `:nth-col() <#nth-col-pseudo>`__
      pseudo-class ` <#the-nth-col-pseudo>`__
      :name: the-nth-col-pseudo
      :class: heading settled

   The :nth-col(``An+B``) pseudo-class notation represents a cell
   element belonging to a column that has ``An+B``-1 columns **before**
   it, for any positive integer or zero value of ``n``. Column
   membership is determined based on the semantics of the document
   language only: whether and how the elements are presented is not
   considered. If a cell element belongs to more than one column, it is
   represented by a selector indicating any of those columns.

   The CSS Syntax Module `[CSS3SYN] <#biblio-css3syn>`__ defines the
   ```An+B`` notation <https://drafts.csswg.org/css-syntax/#anb>`__.

/16.3. `:nth-last-col()`__
==========================

   .. .. rubric:: 16.3. `:nth-last-col() <#nth-last-col-pseudo>`__
      pseudo-class ` <#the-nth-last-col-pseudo>`__
      :name: the-nth-last-col-pseudo
      :class: heading settled

   The :nth-last-col(``An+B``) pseudo-class notation represents a cell
   element belonging to a column that has ``An+B``-1 columns **after**
   it, for any positive integer or zero value of ``n``. Column
   membership is determined based on the semantics of the document
   language only: whether and how the elements are presented is not
   considered. If a cell element belongs to more than one column, it is
   represented by a selector indicating any of those columns.

   The CSS Syntax Module `[CSS3SYN] <#biblio-css3syn>`__ defines the
   ```An+B`` notation <https://drafts.csswg.org/css-syntax/#anb>`__.

/17. Calculating a selector’s
=============================

   .. .. rubric:: 17. Calculating a selector’s
      specificity ` <#specificity-rules>`__
      :name: specificity-rules
      :class: heading settled

   A selector’s specificity is calculated for a given element as
   follows:

   -  count the number of ID selectors in the selector (= ``A``)
   -  count the number of class selectors, attributes selectors, and
      pseudo-classes in the selector (= ``B``)
   -  count the number of type selectors and pseudo-elements in the
      selector (= ``C``)
   -  ignore the universal selector

   If the selector is a `selector list <#selector-list>`__, this number
   is calculated for each selector in the list. For a given matching
   process against the list, the specificity in effect is that of the
   most specific selector in the list that matches.

   A few pseudo-classes provide “evaluation contexts” for other
   selectors, and so have their specificity defined specially:

   -  The specificity of an `:is() <#matches-pseudo>`__,
      `:not() <#negation-pseudo>`__, or `:has() <#has-pseudo>`__
      pseudo-class is replaced by the specificity of the most specific
      `complex selector <#complex>`__ in its `selector
      list <#selector-list>`__ argument.
   -  Analogously, the specificity of an
      `:nth-child() <#nth-child-pseudo>`__ or
      `:nth-last-child() <#nth-last-child-pseudo>`__ selector is the
      specificity of the pseudo class itself (counting as one
      pseudo-class selector) plus the specificity of the most specific
      `complex selector <#complex>`__ in its `selector
      list <#selector-list>`__ argument (if any).
   -  The specificity of a `:where() <#where-pseudo>`__ pseudo-class is
      replaced by zero.

   .. container:: example
      :name: example-66faea1b

      ` <#example-66faea1b>`__ For example:

      -  :is(em, #foo) has a specificity of (1,0,0)—​like an ID selector
         (#foo)—​when matched against any of ``<em>``, ``<p id=foo>``, or
         ``<em id=foo>``.
      -  .qux:where(em, #foo#bar#baz) has a specificity of (0,1,0): only
         the .qux outside the `:where() <#where-pseudo>`__ contributes
         to selector specificity.
      -  :nth-child(even of li, .item) has a specificity of (0,2,0)—​like
         a class selector (.item) plus a pseudo-class—​when matched
         against any of ``<li>``, ``<ul class=item>``, or
         ``<li class=item id=foo>``.
      -  :not(em, strong#foo) has a specificity of (1,0,1)—​like a tag
         selector (strong) combined with an ID selector (#foo)—​when
         matched against any element.

   Specificities are compared by comparing the three components in
   order: the specificity with a larger ``A`` value is more specific; if
   the two ``A`` values are tied, then the specificity with a larger
   ``B`` value is more specific; if the two ``B`` values are also tied,
   then the specificity with a larger ``C`` value is more specific; if
   all the values are tied, the two specificities are equal.

   Due to storage limitations, implementations may have limitations on
   the size of ``A``, ``B``, or ``C``. If so, values higher than the
   limit must be clamped to that limit, and not overflow.

   .. container:: example
      :name: example-d97bd125

      ` <#example-d97bd125>`__ Examples:
      ::

         *               /* a=0 b=0 c=0 */
         LI              /* a=0 b=0 c=1 */
         UL LI           /* a=0 b=0 c=2 */
         UL OL+LI        /* a=0 b=0 c=3 */
         H1 + *[REL=up]  /* a=0 b=1 c=1 */
         UL OL LI.red    /* a=0 b=1 c=3 */
         LI.red.level    /* a=0 b=2 c=1 */
         #x34y           /* a=1 b=0 c=0 */
         #s12:not(FOO)   /* a=1 b=0 c=1 */
         .foo :is(.bar, #baz)
                         /* a=1 b=1 c=0 */

   Note: Repeated occurrences of the same simple selector are allowed
   and do increase specificity.

   Note: The specificity of the styles specified in an HTML ``style``
   attribute `is described in CSS Style
   Attributes <https://www.w3.org/TR/css-style-attr/#interpret>`__.
   `[CSSSTYLEATTR] <#biblio-cssstyleattr>`__

/18. Grammar 
=============

   .. .. rubric:: 18. Grammar ` <#grammar>`__
      :name: grammar
      :class: heading settled

   Selectors are
   `parsed <https://drafts.csswg.org/css-syntax-3/#css-parse-something-according-to-a-css-grammar>`__
   according to the following grammar:

   .. code:: prod

      <selector-list> = <complex-selector-list>

      <complex-selector-list> = <complex-selector>#
      <complex-real-selector-list> = <complex-real-selector>#

      <compound-selector-list> = <compound-selector>#

      <simple-selector-list> = <simple-selector>#

      <relative-selector-list> = <relative-selector>#
      <relative-real-selector-list> = <relative-real-selector>#


      <complex-selector> = <complex-selector-unit> [ <combinator>? <complex-selector-unit> ]*
      <complex-selector-unit> = [ <compound-selector>? <pseudo-compound-selector>* ]!
      <complex-real-selector> = <compound-selector> [ <combinator>? <compound-selector> ]*

      <relative-selector> = <combinator>? <complex-selector>
      <relative-real-selector> = <combinator>? <complex-real-selector>

      <compound-selector> = [ <type-selector>? <subclass-selector>* ]!
      <pseudo-compound-selector> =  <pseudo-element-selector> <pseudo-class-selector>*

      <simple-selector> = <type-selector> | <subclass-selector>


      <combinator> = '>' | '+' | '~' | [ '|' '|' ]

      <wq-name> = <ns-prefix>? <ident-token>
      <ns-prefix> = [ <ident-token> | '*' ]? '|'

      <type-selector> = <wq-name> | <ns-prefix>? '*'

      <subclass-selector> = <id-selector> | <class-selector> |
                            <attribute-selector> | <pseudo-class-selector>

      <id-selector> = <hash-token>

      <class-selector> = '.' <ident-token>

      <attribute-selector> = '[' <wq-name> ']' |
          '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'
      <attr-matcher> = [ '~' | '|' | '^' | '$' | '*' ]? '='
      <attr-modifier> = i | s

      <pseudo-class-selector> = ':' <ident-token> |
                                ':' <function-token> <any-value> ')'

      <pseudo-element-selector> = ':' <pseudo-class-selector> | <legacy-pseudo-element-selector>
      <legacy-pseudo-element-selector> =  ':' [before | after | first-line | first-letter]

   In interpreting the above grammar, the following rules apply:

   -  ` <#white-space>`__ White space is forbidden:

      -  Between any of the top-level components of a
         `<compound-selector> <#typedef-compound-selector>`__ or
         `<complex-selector-unit> <#typedef-complex-selector-unit>`__
         (that is, forbidden between the
         `<type-selector> <#typedef-type-selector>`__ and
         `<subclass-selector> <#typedef-subclass-selector>`__, or
         between the
         `<pseudo-element-selector> <#typedef-pseudo-element-selector>`__
         and
         `<pseudo-class-selector> <#typedef-pseudo-class-selector>`__,
         etc).

      -  Between *any* of the components of a
         `<type-selector> <#typedef-type-selector>`__ or a
         `<class-selector> <#typedef-class-selector>`__.

      -  Between the ':'s, or between the ':' and
         `<ident-token> <https://drafts.csswg.org/css-syntax-3/#typedef-ident-token>`__
         or
         `<function-token> <https://drafts.csswg.org/css-syntax-3/#typedef-function-token>`__,
         of a
         `<pseudo-element-selector> <#typedef-pseudo-element-selector>`__
         or a
         `<pseudo-class-selector> <#typedef-pseudo-class-selector>`__.

      -  Between *any* of the components of a
         `<wq-name> <#typedef-wq-name>`__.

      -  Between the components of an
         `<attr-matcher> <#typedef-attr-matcher>`__.

      -  Between the
         `<compound-selector> <#typedef-compound-selector>`__ or
         `<pseudo-compound-selector> <#typedef-pseudo-compound-selector>`__ s
         in a
         `<complex-selector-unit> <#typedef-complex-selector-unit>`__

      -  Between the components of a
         `<combinator> <#typedef-combinator>`__.

      Whitespace is *required* between two
      `<complex-selector-unit> <#typedef-complex-selector-unit>`__ s if
      the `<combinator> <#typedef-combinator>`__ between them is
      omitted. (This indicates the descendant combinator is being used.)

   -  In `<id-selector> <#typedef-id-selector>`__, the
      `<hash-token> <https://drafts.csswg.org/css-syntax-3/#typedef-hash-token>`__ ’s
      value must be an
      `identifier <https://drafts.csswg.org/css-values-4/#css-css-identifier>`__.

   -  The `<pseudo-class-selector> <#typedef-pseudo-class-selector>`__
      production excludes the
      `<legacy-pseudo-element-selector> <#typedef-legacy-pseudo-element-selector>`__
      production. (That is,
      `:before <https://drafts.csswg.org/css2/#selectordef-before>`__/etc
      must never be parsed as a pseudo-class, even if doing so would
      cause the selector to become valid due to, for example, other
      simple selectors following it.)

   Note: A selector is also subject to a variety of more specific
   syntactic constraints, and adherence to the grammar above is
   necessary *but not sufficient* for the selector to be considered
   valid. See `§ 3.9 Invalid Selectors and Error Handling <#invalid>`__
   for additional rules for parsing selectors.

   Note: In general, a
   `<pseudo-element-selector> <#typedef-pseudo-element-selector>`__ is
   only valid if placed at the end of the last
   `<compound-selector> <#typedef-compound-selector>`__ in a
   `<complex-selector> <#typedef-complex-selector>`__. In some
   circumstances, however, it can be followed by more
   <pseudo-element-selector>s or
   `<pseudo-class-selector> <#typedef-pseudo-class-selector>`__ s; but
   these are specified on a case-by-case basis. (For example, the `user
   action pseudo-classes <#user-action-pseudo-class>`__ are allowed
   after any `pseudo-element <#pseudo-element>`__, and the `tree-abiding
   pseudo-elements <https://drafts.csswg.org/css-pseudo-4/#tree-abiding>`__
   are allowed after the
   `::slotted() <https://drafts.csswg.org/css-scoping-1/#selectordef-slotted>`__
   pseudo-element.)

   ` <#single-colon-pseudos>`__ The four `Level
   2 <https://www.w3.org/TR/CSS2/selectors.html#pseudo-element-selectors>`__
   `pseudo-elements <#pseudo-element>`__
   (`::before <https://drafts.csswg.org/css-pseudo-4/#selectordef-before>`__,
   `::after <https://drafts.csswg.org/css-pseudo-4/#selectordef-after>`__,
   `::first-line <https://drafts.csswg.org/css-pseudo-4/#selectordef-first-line>`__,
   and
   `::first-letter <https://drafts.csswg.org/css-pseudo-4/#selectordef-first-letter>`__)
   may, for legacy reasons, be written with only a single ":" character
   at their front, making them resemble a
   `<pseudo-class-selector> <#typedef-pseudo-class-selector>`__.

/18.1.
======

   .. .. rubric:: 18.1.
      `<forgiving-selector-list> <#typedef-forgiving-selector-list>`__
      and
      `<forgiving-relative-selector-list> <https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list>`__ ` <#forgiving-selector>`__
      :name: forgiving-selector
      :class: heading settled

   For legacy reasons, the general behavior of a selector list is that
   if any selector in the list fails to parse (because it uses new or
   UA-specific selector features, for instance), the entire selector
   list becomes invalid. This can make it hard to write CSS that uses
   new selectors and still works correctly in older user agents.

   The `<forgiving-selector-list> <#typedef-forgiving-selector-list>`__
   production instead parses each selector in the list individually,
   simply ignoring ones that fail to parse, so the remaining selectors
   can still be used.

   Note: Style rules still use the normal, unforgiving selector list
   behavior.
   `<forgiving-selector-list> <#typedef-forgiving-selector-list>`__ is
   used in `:is() <#matches-pseudo>`__ and `:where() <#where-pseudo>`__
   only. Although it does have some minor implications on specificity,
   wrapping a style rule’s selector in :is() effectively "upgrades" it
   to become forgiving, so long as it doesn’t contain any
   pseudo-elements (which aren’t valid in :is() or :where()).

   Syntactically,
   `<forgiving-selector-list> <#typedef-forgiving-selector-list>`__ is
   equivalent to
   ```<any-value>`` <https://drafts.csswg.org/css-syntax-3/#typedef-any-value>`__ ``?``.
   It is then `parsed as a forgiving selector
   list <#parse-as-a-forgiving-selector-list>`__ to obtain its actual
   value.

   .. container:: algorithm

      To parse as a forgiving selector list given an input ``input``:

      #. `Parse a
         list <https://drafts.csswg.org/css-syntax-3/#css-parse-a-comma-separated-list-according-to-a-css-grammar>`__
         of
         `<complex-real-selector> <#typedef-complex-real-selector>`__ s
         from ``input``, and let ``selector list`` be the result.

      #. Remove all failure items from ``selector list``, and all items
         that are `invalid selectors <#invalid-selector>`__, then return
         a `<selector-list> <#typedef-selector-list>`__ representing the
         remaining items in ``selector list``. (This might be empty.)

   Any items in a
   `<forgiving-selector-list> <#typedef-forgiving-selector-list>`__ that
   are invalid (whether explicitly, by using unknown selectors or
   syntax, or merely contextually, using known syntax but in an invalid
   context) must be treated as having zero specificity.

   Note:
   `<forgiving-selector-list> <#typedef-forgiving-selector-list>`__ is
   intentionally used only in `:is() <#matches-pseudo>`__ and
   `:where() <#where-pseudo>`__, not in any other selector that takes a
   selector argument.

/19. API Hooks 
===============

   .. .. rubric:: 19. API Hooks ` <#api-hooks>`__
      :name: api-hooks
      :class: heading settled

   To aid in the writing of specs that use Selectors concepts, this
   section defines several API hooks that can be invoked by other
   specifications.

   ` <#issue-55d7bd68>`__ Are these still necessary now that we have
   more rigorous definitions for `match <#match>`__ and `invalid
   selector <#invalid-selector>`__? Nouns are a lot easier to coordinate
   across specification than predicates, and details like the exact
   order of elements returned from ``querySelector`` seem to make more
   sense being defined in the DOM specification than in Selectors.

/19.1. Parse A Selector 
========================

   .. .. rubric:: 19.1. Parse A Selector ` <#parse-selector>`__
      :name: parse-selector
      :class: heading settled algorithm

   This section defines how to parse a selector from a string
   ``source``. It returns either a complex selector list, or failure.

   #. Let ``selector`` be the result of
      `parsing <https://drafts.csswg.org/css-syntax-3/#css-parse-something-according-to-a-css-grammar>`__
      ``source`` as a `<selector-list> <#typedef-selector-list>`__. If
      this returns failure, it’s an `invalid
      selector <#invalid-selector>`__; return failure.
   #. If ``selector`` is an `invalid selector <#invalid-selector>`__ for
      any other reason (such as, for example, containing an undeclared
      namespace prefix), return failure.
   #. Otherwise, return ``selector``.

/19.2. Parse A Relative
=======================

   .. .. rubric:: 19.2. Parse A Relative
      Selector ` <#parse-relative-selector>`__
      :name: parse-relative-selector
      :class: heading settled algorithm

   This section defines how to parse a relative selector from a string
   ``source``. It returns either a complex selector list, or failure.

   #. Let ``selector`` be the result of
      `parsing <https://drafts.csswg.org/css-syntax-3/#css-parse-something-according-to-a-css-grammar>`__
      ``source`` as a
      `<relative-selector-list> <#typedef-relative-selector-list>`__. If
      this returns failure, it’s an `invalid
      selector <#invalid-selector>`__; return failure.
   #. If ``selector`` is an `invalid selector <#invalid-selector>`__ for
      any other reason (such as, for example, containing an undeclared
      namespace prefix), return failure.
   #. Otherwise, return ``selector``.

/19.3. Match a Selector Against an
==================================

   .. .. rubric:: 19.3. Match a Selector Against an
      Element ` <#match-against-element>`__
      :name: match-against-element
      :class: heading settled algorithm

   This section defines how to match a selector against an element.

   APIs using this algorithm must provide a ``selector`` and an
   ``element``.

   Callers may optionally provide:

   -  one or more `scoping roots <#scoping-root>`__, for resolving the
      `:scope <#scope-pseudo>`__ pseudo-class against.

   This algorithm returns either success or failure.

   For each `complex selector <#complex>`__ in the given ``selector``
   (which is taken to be a `list of complex
   selectors <#list-of-simple-selectors>`__), match the complex selector
   against ``element``, as described in the following paragraph. If the
   matching returns success for any complex selector, then the algorithm
   return success; otherwise it returns failure.

   To match a complex selector against an element, process it `compound
   selector <#compound>`__ at a time, in right-to-left order. This
   process is defined recursively as follows:

   -  If any simple selectors in the rightmost compound selector does
      not match the element, return failure.
   -  Otherwise, if there is only one compound selector in the complex
      selector, return success.
   -  Otherwise, consider all possible elements that could be related to
      this element by the rightmost combinator. If the operation of
      matching the selector consisting of this selector with the
      rightmost compound selector and rightmost combinator removed
      against any one of these elements returns success, then return
      success. Otherwise, return failure.

/19.4. Match a Selector Against a
=================================

   .. .. rubric:: 19.4. Match a Selector Against a
      Pseudo-element ` <#match-against-pseudo-element>`__
      :name: match-against-pseudo-element
      :class: heading settled algorithm

   This section defines how to match a selector against a
   pseudo-element.

   APIs using this algorithm must provide a ``selector`` and a
   ``pseudo-element``. They may optionally provide the same things they
   may optionally provide to the algorithm to `match a selector against
   an element <#match-a-selector-against-an-element>`__.

   This algorithm returns success or failure.

   For each `complex selector <#complex>`__ in the given ``selector``,
   if both:

   -  the rightmost `simple selector <#simple>`__ in the complex
      selector matches ``pseudo-element``, and
   -  the result of running `match a complex selector against an
      element <#match-a-complex-selector-against-an-element>`__ on the
      remainder of the `complex selector <#complex>`__ (with just the
      rightmost simple selector of its rightmost complex selector
      removed), ``pseudo-element`` ’s corresponding element, and any
      optional parameters provided to this algorithm returns success,

   then return success.
   Otherwise (that is, if this doesn’t happen for any of the complex
   selectors in ``selector``), return failure.

/19.5. Match a Selector Against a
=================================

   .. .. rubric:: 19.5. Match a Selector Against a
      Tree ` <#match-against-tree>`__
      :name: match-against-tree
      :class: heading settled algorithm

   This section defines how to match a selector against a tree.

   APIs using this algorithm must provide a selector, and one or more
   ``root elements`` indicating the
   `subtrees <https://dom.spec.whatwg.org/#concept-tree>`__ that will be
   searched by the selector. All of the ``root elements`` must share the
   same `root <https://dom.spec.whatwg.org/#concept-tree-root>`__, or
   else calling this algorithm is invalid.

   They may optionally provide:

   -  One or more `scoping roots <#scoping-root>`__ indicating the
      selector is `scoped <#scoped-selector>`__.

   -  A list of `pseudo-elements <#pseudo-element>`__ that are allowed
      to show up in the match list. If not specified, this defaults to
      allowing all pseudo-elements.

      ` <#issue-15f3317f>`__ Only the `tree-abiding
      pseudo-elements <https://drafts.csswg.org/css-pseudo-4/#tree-abiding>`__
      are really handled in any way remotely like this.

   This algorithm returns a (possibly empty) list of elements.

   #. Start with a list of ``candidate elements``, which are the
      ``root elements`` and all of their descendant elements, sorted in
      `shadow-including tree
      order <https://dom.spec.whatwg.org/#concept-shadow-including-tree-order>`__,
      unless otherwise specified.
   #. If `scoping root <#scoping-root>`__ were provided, then remove
      from the ``candidate elements`` any elements that are not
      `descendants <https://dom.spec.whatwg.org/#concept-tree-descendant>`__
      of at least one scoping root.
   #. Initialize the ``selector match list`` to empty.
   #. For each ``element`` in the set of ``candidate elements``:

      #. If the result of `match a selector against an
         element <#match-a-selector-against-an-element>`__ for
         ``element`` and ``selector`` is success, add ``element`` to the
         ``selector match list``.

      #. For each possible pseudo-element associated with ``element``
         that is one of the pseudo-elements allowed to show up in the
         match list, if the result of `match a selector against a
         pseudo-element <#match-a-selector-against-a-pseudo-element>`__
         for the pseudo-element and ``selector`` is success, add the
         pseudo-element to the ``selector match list``.

         ` <#issue-b7f52036>`__ The relative position of pseudo-elements
         in ``selector match list`` is undefined. There’s not yet a
         context that exposes this information, but we need to decide on
         something eventually, before something *is* exposed.

 /Appendix A: Guidance on Mapping Source Documents & Data
 ========================================================

   .. .. rubric::  Appendix A: Guidance on Mapping Source Documents & Data
      to an Element Tree ` <#dom-mapping>`__
      :name: dom-mapping
      :class: heading settled

   *This section is informative.*

   The element tree structure described by the DOM is powerful and
   useful, but generic enough to model pretty much any language that
   describes tree-based data (or even graph-based, with a suitable
   interpretation).

   Some languages, like HTML, already have well-defined procedures for
   producing a DOM object from a resource. If a given language does not,
   such a procedure must be defined in order for Selectors to apply to
   documents in that language.

   At minimum, the document language must define what maps to the DOM
   concept of an "element".

   The primary one-to-many relationship between nodes—​parent/child in
   tree-based structures, element/neighbors in graph-based
   structures—​should be reflected as the child nodes of an element.

   Other features of the element should be mapped to something that
   serves a similar purpose to the same feature in DOM:

   type
      If the elements in the document language have some notion of
      "type" as a basic distinguisher between different groups of
      elements, it should be reflected as the "type" feature.

      If this "type" can be separated into a "basic" name and a
      "namespace" that groups names into higher-level groups, the latter
      should be reflected as the "namespace" feature. Otherwise, the
      element shouldn’t have a "namespace" feature, and the entire name
      should be reflected as the "type" feature.

   id
      If some aspect of the element functions as a unique identifier
      across the document, it should be mapped to the "id" feature.

      Note: While HTML only allows an element to have a single ID, this
      should not be taken as a general restriction. The important
      quality of an ID is that each ID should be associated with a
      single element; a single element can validly have multiple IDs.

   classes and attributes
      Aspects of the element that are useful for identifying the
      element, but are not generally unique to elements within a
      document, should be mapped to the "class" or "attribute" features
      depending on if they’re something equivalent to a "label" (a
      string by itself) or a "property" (a name/value pair)
   pseudo-classes and pseudo-elements
      If any elements match any pseudo-classes or have any
      pseudo-elements, that must be explicitly defined.

      ` <#issue-772ec278>`__ Some pseudo-classes are \*syntactical\*,
      like `:has() <#has-pseudo>`__ and `:is() <#matches-pseudo>`__, and
      thus should always work. Need to indicate that somewhere. Probably
      the structural pseudos always work whenever the child list is
      ordered.

   .. container:: example
      :name: example-37a1ab6b

      ` <#example-37a1ab6b>`__ For example,
      `JSONSelect <https://github.com/lloyd/JSONSelect>`__ is a library
      that uses selectors to extract information from JSON documents.

      -  The "elements" of the JSON document are each array, object,
         boolean, string, number, or null. The array and object elements
         have their contents as children.
      -  Each element’s type is its JS type name: "array", "object",
         etc.
      -  Children of an object have their key as a class.
      -  Children of an array match the
         `:first-child <#first-child-pseudo>`__,
         `:nth-child() <#nth-child-pseudo>`__, etc pseudo-classes.
      -  The root object matches `:root <#root-pseudo>`__.
      -  It additionally defines :val() and :contains() pseudo-classes,
         for matching boolean/number/string elements with a particular
         value or which contain a particular substring.

      This structure is sufficient to allow powerful, compact querying
      of JSON documents with selectors.

 /Appendix B: Obsolete but Required ``-webkit-`` Parsing
 =======================================================

   .. .. rubric::  Appendix B: Obsolete but Required ``-webkit-`` Parsing
      Quirks for Web Compat ` <#compat>`__
      :name: compat
      :class: heading settled

   *This appendix is normative.*

   Due to legacy Web-compat constraints, user agents expecting to parse
   Web documents must support the following features:

   -  :-webkit-autofill must be treated as a `legacy selector
      alias <#legacy-selector-alias>`__ of
      `:autofill <#selectordef-autofill>`__.

   -  All other `pseudo-elements <#pseudo-element>`__ whose names begin
      with the string “-webkit-” (matched `ASCII
      case-insensitively <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__)
      and that are not functional notations must be treated as valid at
      parse time. (That is, ::-webkit-asdf is valid at parse time, but
      ::-webkit-jkl() is not.) If they’re not otherwise recognized and
      supported, they must be treated as matching nothing, and are
      unknown -webkit- pseudo-elements.

      `Unknown -webkit-
      pseudo-elements <#unknown--webkit--pseudo-elements>`__ must be
      serialized in ASCII lowercase.

      What’s this quirk about?

      Selectors have long had a behavior where a single unknown/invalid
      selector invalidates the entire selector list (rather than just
      invalidating the one complex selector it finds itself in). This is
      generally considered a legacy mistake by the WG, but can’t be
      fixed at this point, as too many stylesheets depend on this
      behavior, intentionally or not.

      One aspect of this is that use of vendor-specific selectors
      invalidates the entire selector in other user agents that don’t
      recognize them, and takes the entire style rule down with it. This
      has been used intentionally in the past—​in the
      severely-not-recommended practice of hiding style rules from some
      browsers by making them invalid in every other browser—​and
      unintentionally, with people styling an element and also applying
      those styles to a vendor-specific pseudo-element (such as the
      various
      ```input`` <https://html.spec.whatwg.org/multipage/input.html#the-input-element>`__-related
      pseudos some browsers expose), not realizing that this hides the
      entire rule from other browsers.

      In addition to this more general reasoning, WebKit-derived user
      agents, such as Safari or Chrome, have an additional quirk related
      to their vendor-prefixed pseudo-elements, where any
      ::-webkit--prefixed selectors are considered valid at parse time.
      (This is probably a leftover quirk of an early CSS feature, since
      dropped, that intentionally treated all possible pseudo-elements
      as valid at parse time, in anticipation of a feature letting
      authors define their own pseudo-elements.)

      Similar to other legacy quirks, such as those documented in
      `[QUIRKS] <#biblio-quirks>`__, this particular vendor-specific
      oddity has become common enough that other user agents are seeing
      sites breaking due to them depending on it, accidentally or not.
      As such, since the quirk is in practical terms *required* to
      render the modern web correctly, specifying it and requiring it
      for all user agents ensures that today’s web pages are more likely
      to be correctly rendered in user agents both current and future.

      As usual with quirks, however, webpages intentionally relying on
      this will be met with shaming and derision from members of the
      CSSWG, and all right-thinking web developers.

/20. Changes 
=============

   .. .. rubric:: 20. Changes ` <#changes>`__
      :name: changes
      :class: heading settled

/20.1. Changes since the 7 May 2022 Working
===========================================

   .. .. rubric:: 20.1. Changes since the 7 May 2022 Working
      Draft ` <#changes-2022-05>`__
      :name: changes-2022-05
      :class: heading settled

   Significant changes since the `7 May 2022 Working
   Draft <https://www.w3.org/TR/2022/WD-selectors-4-20220507/>`__:

   -  Marked `:blank <#blank-pseudo>`__ as at-risk and removed the
      at-risk status from `:read-write <#read-write-pseudo>`__ and
      `:has() <#has-pseudo>`__

   -  Added `:open <#selectordef-open>`__ and
      `:closed <#selectordef-closed>`__ pseudo-classes. (`Issue
      7319 <https://github.com/w3c/csswg-drafts/issues/7319>`__)

   -  Disallowed `pseudo-elements <#pseudo-element>`__ from
      `:has() <#has-pseudo>`__ unless explicitly allowed by the
      pseudo-element’s definition. (`Issue
      7463 <https://github.com/w3c/csswg-drafts/issues/7463>`__)

   -  Disallowed nesting of `:has() <#has-pseudo>`__. (`Issue
      7344 <https://github.com/w3c/csswg-drafts/issues/7344>`__)

   -  Made `:has() <#has-pseudo>`__ and the selector argument of
      `:nth-child() <#nth-child-pseudo>`__/`:nth-last-child() <#nth-last-child-pseudo>`__
      no longer forgiving. (`Issue
      7676 <https://github.com/w3c/csswg-drafts/issues/7676>`__)

   -  Defined matching of ::lang("") and of elements not tagged with a
      language. (`Issue
      6915 <https://github.com/w3c/csswg-drafts/issues/6915>`__)

   -  Untangled the concepts of "scoped" and "relative" selectors
      completely. (`Issue
      6399 <https://github.com/w3c/csswg-drafts/issues/6399>`__)

      -  Removed "absolutize a selector" as well, and just defined
         relative selector matching in terms of the anchoring element.

   -  Reverted compound selector limitation on
      `:nth-child() <#nth-child-pseudo>`__. (`Issue
      3760 <https://github.com/w3c/csswg-drafts/issues/3760>`__)

   -  Defined :-webkit-autofill `legacy selector
      alias <#legacy-selector-alias>`__. (`Issue
      7474 <https://github.com/w3c/csswg-drafts/issues/7474>`__)

   -  Moved the legacy single-colon pseudo-element syntax into the
      grammar itself. (`Issue
      8122 <https://github.com/w3c/csswg-drafts/issues/8122>`__)

/20.2. Changes since the 21 November 2018 Working
=================================================

   .. .. rubric:: 20.2. Changes since the 21 November 2018 Working
      Draft ` <#changes-2018-11>`__
      :name: changes-2018-11
      :class: heading settled

   Significant changes since the `21 November 2018 Working
   Draft <https://www.w3.org/TR/2018/WD-selectors-4-20181121/>`__:

   -  Removed the Selector profiles, marked `:has() <#has-pseudo>`__ as
      optional and at-risk instead. (`Issue
      3925 <https://github.com/w3c/csswg-drafts/issues/3925>`__)
   -  Added `§ 3.6.4 Sub-pseudo-elements <#sub-pseudo-elements>`__ to
      define `sub-pseudo-elements <#sub-pseudo-element>`__ and related
      terminology.
   -  Added `:defined <#defined-pseudo>`__. (`Issue
      2258 <https://github.com/w3c/csswg-drafts/issues/2258>`__)
   -  Added `:modal <#selectordef-modal>`__. (`Issue
      6965 <https://github.com/w3c/csswg-drafts/issues/6965>`__)
   -  Added `:fullscreen <#selectordef-fullscreen>`__ and
      `:picture-in-picture <#selectordef-picture-in-picture>`__. (`Issue
      3796 <https://github.com/w3c/csswg-drafts/issues/3796>`__)
   -  Added `:seeking <#selectordef-seeking>`__,
      `:buffering <#selectordef-buffering>`__, and
      `:stalled <#selectordef-stalled>`__ media playback state
      pseudo-classes. (`Issue
      3821 <https://github.com/w3c/csswg-drafts/issues/3821>`__)
   -  Added `:muted <#selectordef-muted>`__ and
      `:volume-locked <#selectordef-volume-locked>`__ sound state
      pseudo-classes. (`Issue
      3821 <https://github.com/w3c/csswg-drafts/issues/3821>`__ and
      `Issue 3933 <https://github.com/w3c/csswg-drafts/issues/3933>`__)
   -  Added `:autofill <#selectordef-autofill>`__. (`Issue
      5775 <https://github.com/w3c/csswg-drafts/issues/5775>`__)
   -  Added `:user-valid <#user-valid-pseudo>`__.
      (`Discussion <https://lists.w3.org/Archives/Public/www-style/2015Sep/0111.html>`__)
   -  Defined `:is() <#matches-pseudo>`__, `:where() <#where-pseudo>`__,
      `:has() <#has-pseudo>`__, `:nth-child() <#nth-child-pseudo>`__,
      and `:nth-last-child() <#nth-last-child-pseudo>`__ to not be
      themselves invalidated when containing an invalid selector.
      (`Issue 3264 <https://github.com/w3c/csswg-drafts/issues/3264>`__)
   -  Limited selectors in `:nth-child() <#nth-child-pseudo>`__ and
      `:nth-last-child() <#nth-last-child-pseudo>`__ to `compound
      selectors <#compound>`__ for now. (`Issue
      3760 <https://github.com/w3c/csswg-drafts/issues/3760>`__)
   -  Clarified case-sensitive string matching by referencing string
      identity as defined in `[INFRA] <#biblio-infra>`__.
   -  Clarified that UA-provided placeholder text still triggers
      `:placeholder-shown <#placeholder-shown-pseudo>`__.
   -  Rewrote `:focus-visible <#focus-visible-pseudo>`__ definition for
      clarity.
   -  Switched reminder note in the grammar section to normative text
      describing the requirement of whitespace between
      `<compound-selector> <#typedef-compound-selector>`__ s when a
      `<combinator> <#typedef-combinator>`__ token is missing.

/20.3. Changes since the 2 February 2018 Working
================================================

   .. .. rubric:: 20.3. Changes since the 2 February 2018 Working
      Draft ` <#changes-2018-02>`__
      :name: changes-2018-02
      :class: heading settled

   Significant changes since the `2 February 2018 Working
   Draft <https://www.w3.org/TR/2018/WD-selectors-4-20180202/>`__:

   -  Named the zero-specificity selector to
      `:where() <#where-pseudo>`__. (`Issue
      2143 <https://github.com/w3c/csswg-drafts/issues/2143>`__)
   -  Renamed `:matches() <#selectordef-matches>`__ to
      `:is() <#matches-pseudo>`__. (`Issue
      3258 <https://github.com/w3c/csswg-drafts/issues/3258>`__)
   -  Redefined `:empty <#empty-pseudo>`__ to ignore white-space–only
      nodes. (`Issue
      1967 <https://github.com/w3c/csswg-drafts/issues/1967>`__)
   -  Redefined `:blank <#blank-pseudo>`__ to represent empty user
      input, rather than empty elements. (`Issue
      1283 <https://github.com/w3c/csswg-drafts/issues/1283>`__)
   -  Changed the specificity of `:is() <#matches-pseudo>`__,
      `:has() <#has-pseudo>`__, and `:nth-child() <#nth-child-pseudo>`__
      to not depend on which selector argument matched. (`Issue
      1027 <https://github.com/w3c/csswg-drafts/issues/1027>`__)
   -  Dropped the :drop() pseudo-classes since HTML dropped the related
      feature. (`Issue
      2257 <https://github.com/w3c/csswg-drafts/issues/2257>`__)
   -  Added the case-sensitive flag ``s`` to the attribute selector.
      (`Issue 2101 <https://github.com/w3c/csswg-drafts/issues/2101>`__)
   -  Added further guidance on
      `:focus-visible <#focus-visible-pseudo>`__.
   -  Added `Appendix B: Obsolete but Required -webkit- Parsing Quirks
      for Web Compat <#compat>`__ defining ::-webkit- pseudo-element
      parsing quirk. (`Issue
      3051 <https://github.com/w3c/csswg-drafts/issues/3051>`__)
   -  Rewrote grammar rules about where white space is allowed for
      clarity. (See `§ 18 Grammar <#grammar>`__.)

/20.4. Changes since the 2 May 2013 Working
===========================================

   .. .. rubric:: 20.4. Changes since the 2 May 2013 Working
      Draft ` <#changes-2013>`__
      :name: changes-2013
      :class: heading settled

   Significant changes since the `2 May 2013 Working
   Draft <https://www.w3.org/TR/2013/WD-selectors4-20130502/>`__
   include:

   -  Added the `:target-within <#target-within-pseudo>`__,
      `:focus-within <#focus-within-pseudo>`__,
      `:focus-visible <#focus-visible-pseudo>`__,
      `:playing <#selectordef-playing>`__, and
      `:paused <#selectordef-paused>`__ pseudo-classes.

   -  Added a zero-specificity
      `:matches() <#selectordef-matches>`__-type pseudo-class, with name
      TBD.

   -  Replaced subject indicator (!) feature with
      `:has() <#has-pseudo>`__.

   -  Replaced the :nth-match() and :nth-last-match() selectors with
      :nth-child(… of ``selector``) and :nth-last-child(… of
      ``selector``).

   -  Changed the :active-drop-target, :valid-drop-target,
      :invalid-drop-target with :drop().

   -  Sketched out an empty-or-whitespace-only selector for discussion
      (See `open
      issue <https://github.com/w3c/csswg-drafts/issues/1967>`__.)

   -  Renamed :user-error to `:user-invalid <#user-invalid-pseudo>`__.
      (See
      `Discussion <https://www.w3.org/mid/CADhPm3v+WfeGQfBwwx8QBuiOjn2k38V_DcKW17Cm81VgZb1nbQ@mail.gmail.com>`__)

   -  Renamed :nth-column()/:nth-last-column() to
      `:nth-col() <#nth-col-pseudo>`__/`:nth-last-col() <#nth-last-col-pseudo>`__
      to avoid naming confusion with a potential ::column pseudo-class.

   -  Changed the non-functional form of the :local-link pseudo-class to
      account for fragment URLs.

   -  Removed the functional form of the ``:local-link()`` pseudo-class
      and reference combinator for lack of interest.

   -  Rewrote selectors grammar using the CSS Value Definition Syntax.

   -  Split out `relative selectors <#relative-selector>`__ from `scoped
      selectors <#scoped-selector>`__, as these are different concepts
      that can be independently invoked.

   -  Moved definition of
      `<An+B> <https://drafts.csswg.org/css-syntax-3/#anb-production>`__
      microsyntax to CSS Syntax.

      ` <#issue-fb60ae39>`__ Semantic definition should probably move
      back here.

   -  Added new sections:

      -  `§ 3.2 Data Model <#data-model>`__

         ` <#issue-4ca3978c>`__ Need to define tree for XML.

      -  `§ 19 API Hooks <#api-hooks>`__

         -  Note that earlier versions of this section defined a section
            on evaluating a selector, but that section is no longer
            present. Specifications referencing that section should
            instead reference the algorithm to `match a selector against
            a tree <#match-a-selector-against-a-tree>`__.

   -  Removed restriction on combinators within
      `:matches() <#selectordef-matches>`__ and
      `:not() <#negation-pseudo>`__; see
      `discussion <https://lists.w3.org/Archives/Public/www-style/2014Jan/0607.html>`__.

   -  Defined `specificity <#specificity>`__ of a `selector
      list <#selector-list>`__. (Why?)

   -  Required quotes around `:lang() <#lang-pseudo>`__ values involving
      an asterisk; only language codes which happen to be CSS
      identifiers can be used unquoted.

   Note: The 1 February 2018 draft included an inadvertent commit of
   unfinished work; 2 February 2018 has reverted this commit (and fixed
   some links because why not).

/20.5. Changes since the 23 August 2012 Working
===============================================

   .. .. rubric:: 20.5. Changes since the 23 August 2012 Working
      Draft ` <#changes-2012>`__
      :name: changes-2012
      :class: heading settled

   Significant changes since the `23 August 2012 Working
   Draft <https://www.w3.org/TR/2012/WD-selectors4-20120823/>`__
   include:

   -  Added `:placeholder-shown <#placeholder-shown-pseudo>`__
      pseudo-classes.
   -  Released some restrictions on
      `:matches() <#selectordef-matches>`__ and
      `:not() <#negation-pseudo>`__.
   -  Defined fast and complete Selectors profiles (now called “live”
      and “snapshot”).
   -  Improved definition of `specificity <#specificity>`__ to better
      handle `:matches() <#selectordef-matches>`__.
   -  Updated grammar.
   -  Cleaned up definition of
      `<An+B> <https://drafts.csswg.org/css-syntax-3/#anb-production>`__
      notation.
   -  Added definition of *scope-relative* selectors, changed
      *scope-constrained* to scope-filtered for less confusion with
      scope-contained.
   -  The :local-link() pseudo-class now ignores trailing slashes.

/20.6. Changes since the 29 September 2011 Working
==================================================

   .. .. rubric:: 20.6. Changes since the 29 September 2011 Working
      Draft ` <#changes-2011>`__
      :name: changes-2011
      :class: heading settled

   Significant changes since the `29 September 2011 Working
   Draft <https://www.w3.org/TR/2011/WD-selectors4-20110929/>`__
   include:

   -  Added language variant handling per RFC 4647.
   -  Added scoped selectors.
   -  Added :user-error (now called
      `:user-invalid <#user-invalid-pseudo>`__).
   -  Added :valid-drop-target.
   -  Changed `column combinator <#column-combinator>`__ from double
      slash to double pipe.

/20.7. Changes Since Level 3 
=============================

   .. .. rubric:: 20.7. Changes Since Level 3 ` <#changes-level-3>`__
      :name: changes-level-3
      :class: heading settled

   Additions since `Level 3 <https://www.w3.org/TR/selectors-3/>`__:

   -  Extended `:not() <#negation-pseudo>`__ to accept a selector list.
   -  Added `:is() <#matches-pseudo>`__ and `:where() <#where-pseudo>`__
      and `:has() <#has-pseudo>`__.
   -  Added `:scope <#scope-pseudo>`__.
   -  Added `:any-link <#any-link-pseudo>`__ and
      `:local-link <#local-link-pseudo>`__.
   -  Added `time-dimensional pseudo-classes <#time-pseudos>`__.
   -  Added `:target-within <#target-within-pseudo>`__,
      `:focus-within <#focus-within-pseudo>`__, and
      `:focus-visible <#focus-visible-pseudo>`__.
   -  Added `:dir() <#dir-pseudo>`__.
   -  Expanded `:lang() <#lang-pseudo>`__ to accept wildcard matching
      and lists of language codes.
   -  Expanded :nth-child() to accept a selector list.
   -  Merged in input selectors from `CSS Basic User Interface Module
      Level 3 <https://www.w3.org/TR/css-ui-3/>`__ and added back
      `:indeterminate <#indeterminate-pseudo>`__.
   -  Added `:blank <#blank-pseudo>`__ and
      `:user-invalid <#user-invalid-pseudo>`__.
   -  Added `grid-structural (column) selectors <#table-pseudos>`__.
   -  Added case-insensitive / case-sensitive attribute-value matching
      flags.

/21. Acknowledgements 
======================

   .. .. rubric:: 21. Acknowledgements ` <#acknowledgements>`__
      :name: acknowledgements
      :class: heading settled

   The CSS working group would like to thank everyone who contributed to
   the `previous Selectors <https://www.w3.org/TR/css3-selectors>`__
   specifications over the years, as those specifications formed the
   basis for this one. In particular, the working group would like to
   extend special thanks to the following for their specific
   contributions to Selectors Level 4: L. David Baron, Andrew Fedoniouk,
   Daniel Glazman, Ian Hickson, Grey Hodge, Lachlan Hunt, Anne van
   Kesteren, Jason Cranford Teague, Lea Verou

/Privacy Considerations 
========================

   .. .. rubric:: Privacy Considerations ` <#privacy>`__
      :name: privacy
      :class: no-num heading settled

   -  The `:visited <#visited-pseudo>`__ pseudo-class can expose
      information about which sites a user has previously visited, if
      the UA is not careful to screen from scripting any information
      that would reveal which elements match it.
   -  The `:autofill <#selectordef-autofill>`__ pseudo-class can expose
      whether a user has interacted with this form before; however the
      same information can be derived by observing how quickly the form
      is filled out.

/Security Considerations 
=========================

   .. .. rubric:: Security Considerations ` <#security>`__
      :name: security
      :class: no-num heading settled

   The `Privacy Considerations <#privacy>`__ could also be considered to
   affect Security.

.. _w3c-conformance:

 Conformance ` <#w3c-conformance>`__
-------------------------------------

.. _w3c-conventions:

 Document conventions ` <#w3c-conventions>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Conformance requirements are expressed with a combination of descriptive
assertions and RFC 2119 terminology. The key words “MUST”, “MUST NOT”,
“REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”,
“MAY”, and “OPTIONAL” in the normative parts of this document are to be
interpreted as described in RFC 2119. However, for readability, these
words do not appear in all uppercase letters in this specification.

All of the text of this specification is normative except sections
explicitly marked as non-normative, examples, and notes.
`[RFC2119] <#biblio-rfc2119>`__

Examples in this specification are introduced with the words “for
example” or are set apart from the normative text with
``class="example"``, like this:

.. container:: example
   :name: w3c-example

   ` <#w3c-example>`__
   This is an example of an informative example.

Informative notes begin with the word “Note” and are set apart from the
normative text with ``class="note"``, like this:

Note, this is an informative note.

Advisements are normative sections styled to evoke special attention and
are set apart from other normative text with
``<strong class="advisement">``, like this: **UAs MUST provide an
accessible alternative.**

Tests

Tests relating to the content of this specification may be documented in
“Tests” blocks like this one. Any such block is non-normative.

--------------

.. _w3c-conformance-classes:

 Conformance classes ` <#w3c-conformance-classes>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Conformance to this specification is defined for three conformance
classes:

style sheet
   A `CSS style
   sheet <http://www.w3.org/TR/CSS21/conform.html#style-sheet>`__.
renderer
   A `UA <http://www.w3.org/TR/CSS21/conform.html#user-agent>`__ that
   interprets the semantics of a style sheet and renders documents that
   use them.
authoring tool
   A `UA <http://www.w3.org/TR/CSS21/conform.html#user-agent>`__ that
   writes a style sheet.

A style sheet is conformant to this specification if all of its
statements that use syntax defined in this module are valid according to
the generic CSS grammar and the individual grammars of each feature
defined in this module.

A renderer is conformant to this specification if, in addition to
interpreting the style sheet as defined by the appropriate
specifications, it supports all the features defined by this
specification by parsing them correctly and rendering the document
accordingly. However, the inability of a UA to correctly render a
document due to limitations of the device does not make the UA
non-conformant. (For example, a UA is not required to render color on a
monochrome monitor.)

An authoring tool is conformant to this specification if it writes style
sheets that are syntactically correct according to the generic CSS
grammar and the individual grammars of each feature in this module, and
meet all other conformance requirements of style sheets as described in
this module.

.. _w3c-partial:

 Partial implementations ` <#w3c-partial>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

So that authors can exploit the forward-compatible parsing rules to
assign fallback values, CSS renderers **must** treat as invalid (and
`ignore as
appropriate <http://www.w3.org/TR/CSS21/conform.html#ignore>`__) any
at-rules, properties, property values, keywords, and other syntactic
constructs for which they have no usable level of support. In
particular, user agents **must not** selectively ignore unsupported
component values and honor supported values in a single multi-value
property declaration: if any value is considered invalid (as unsupported
values must be), CSS requires that the entire declaration be ignored.

.. _w3c-conform-future-proofing:

 Implementations of Unstable and Proprietary Features ` <#w3c-conform-future-proofing>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To avoid clashes with future stable CSS features, the CSSWG recommends
`following best practices <http://www.w3.org/TR/CSS/#future-proofing>`__
for the implementation of
`unstable <http://www.w3.org/TR/CSS/#unstable>`__ features and
`proprietary
extensions <http://www.w3.org/TR/CSS/#proprietary-extension>`__ to CSS.

.. _w3c-testing:

 Non-experimental implementations ` <#w3c-testing>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Once a specification reaches the Candidate Recommendation stage,
non-experimental implementations are possible, and implementors should
release an unprefixed implementation of any CR-level feature they can
demonstrate to be correctly implemented according to spec.

To establish and maintain the interoperability of CSS across
implementations, the CSS Working Group requests that non-experimental
CSS renderers submit an implementation report (and, if necessary, the
testcases used for that implementation report) to the W3C before
releasing an unprefixed implementation of any CSS features. Testcases
submitted to W3C are subject to review and correction by the CSS Working
Group.

Further information on submitting testcases and implementation reports
can be found from on the CSS Working Group’s website at
http://www.w3.org/Style/CSS/Test/. Questions should be directed to the
`public-css-testsuite@w3.org <http://lists.w3.org/Archives/Public/public-css-testsuite>`__
mailing list.

Index ` <#index>`__
--------------------

.. _index-defined-here:

Terms defined by this specification ` <#index-defined-here>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  `+ <#selectordef-adjacent>`__ , in § 15.3
-  `> <#selectordef-child>`__ , in § 15.2
-  `\|\| <#selectordef-column>`__ , in § 16.1
-  `~ <#selectordef-sibling>`__ , in § 15.4
-  `:active <#active-pseudo>`__ , in § 9.2
-  `anchor element <#relative-selector-anchor-elements>`__ , in § 3.4
-  `:any-link <#any-link-pseudo>`__ , in § 8.1
-  `<attribute-selector> <#typedef-attribute-selector>`__ , in § 18
-  `attribute selector <#attribute-selector>`__ , in § 6
-  `<attr-matcher> <#typedef-attr-matcher>`__ , in § 18
-  `<attr-modifier> <#typedef-attr-modifier>`__ , in § 18
-  `:autofill <#selectordef-autofill>`__ , in § 13.1.4
-  `:blank <#blank-pseudo>`__ , in § 13.3.1
-  `:buffering <#selectordef-buffering>`__ , in § 11.2
-  `:checked <#checked-pseudo>`__ , in § 13.2.1
-  `child combinator <#child-combinator>`__ , in § 15.2
-  `<class-selector> <#typedef-class-selector>`__ , in § 18
-  `class selector <#class-selector>`__ , in § 6.6
-  `:closed <#selectordef-closed>`__ , in § 12.1
-  `column combinator <#column-combinator>`__ , in § 16.1
-  `<combinator> <#typedef-combinator>`__ , in § 18
-  `combinator <#selector-combinator>`__ , in § 3.1
-  `<complex-real-selector> <#typedef-complex-real-selector>`__ , in
   § 18
-  `<complex-real-selector-list> <#typedef-complex-real-selector-list>`__ ,
   in § 18
-  `<complex-selector> <#typedef-complex-selector>`__ , in § 18
-  `complex selector <#complex>`__ , in § 3.1
-  `<complex-selector-list> <#typedef-complex-selector-list>`__ , in
   § 18
-  `<complex-selector-unit> <#typedef-complex-selector-unit>`__ , in
   § 18
-  `<compound-selector> <#typedef-compound-selector>`__ , in § 18
-  `compound selector <#compound>`__ , in § 3.1
-  `<compound-selector-list> <#typedef-compound-selector-list>`__ , in
   § 18
-  `:current <#current-pseudo>`__ , in § 10.1
-  `:current() <#selectordef-current>`__ , in § 10.1
-  `declared <#nsdecl>`__ , in § 3.8
-  `:default <#default-pseudo>`__ , in § 13.1.5
-  `:defined <#defined-pseudo>`__ , in § 5.4
-  `descendant combinator <#descendant-combinator>`__ , in § 15.1
-  `:dir() <#dir-pseudo>`__ , in § 7.1
-  `:disabled <#disabled-pseudo>`__ , in § 13.1.1
-  `document language <#document-language>`__ , in § 3.2
-  `:empty <#empty-pseudo>`__ , in § 14.2
-  `:enabled <#enabled-pseudo>`__ , in § 13.1.1
-  `evaluating a selector <#evaluating-selectors>`__ , in § 20.4
-  `featureless <#featureless>`__ , in § 3.2
-  `:first-child <#first-child-pseudo>`__ , in § 14.3.3
-  `:first-of-type <#first-of-type-pseudo>`__ , in § 14.4.3
-  `:focus <#focus-pseudo>`__ , in § 9.3
-  `:focus-visible <#focus-visible-pseudo>`__ , in § 9.4
-  `:focus-within <#focus-within-pseudo>`__ , in § 9.5
-  `<forgiving-selector-list> <#typedef-forgiving-selector-list>`__ ,
   in § 18.1
-  `:fullscreen <#selectordef-fullscreen>`__ , in § 12.3
-  `functional pseudo-class <#functional-pseudo-class>`__ , in § 3.5
-  `functional pseudo-element <#functional-pseudo-element>`__ , in
   § 3.6.1
-  `:future <#future-pseudo>`__ , in § 10.3
-  `:has() <#has-pseudo>`__ , in § 4.5
-  `:has-allowed pseudo-element <#has-allowed-pseudo-element>`__ , in
   § 4.5
-  `host language <#host-language>`__ , in § 3.2
-  `:hover <#hover-pseudo>`__ , in § 9.1
-  `<id-selector> <#typedef-id-selector>`__ , in § 18
-  `ID selector <#id-selector>`__ , in § 6.7
-  `:indeterminate <#indeterminate-pseudo>`__ , in § 13.2.2
-  `indicate focus <#indicate-focus>`__ , in § 9.4
-  `:in-range <#in-range-pseudo>`__ , in § 13.3.3
-  `:invalid <#invalid-pseudo>`__ , in § 13.3.2
-  `invalid <#invalid-selector>`__ , in § 3.9
-  `invalid selector <#invalid-selector>`__ , in § 3.9
-  `:is() <#matches-pseudo>`__ , in § 4.2
-  `:lang() <#lang-pseudo>`__ , in § 7.2
-  `language range <#language-range>`__ , in § 7.2
-  `:last-child <#last-child-pseudo>`__ , in § 14.3.4
-  `:last-of-type <#last-of-type-pseudo>`__ , in § 14.4.4
-  `<legacy-pseudo-element-selector> <#typedef-legacy-pseudo-element-selector>`__ ,
   in § 18
-  `legacy selector alias <#legacy-selector-alias>`__ , in § 3.10
-  `:link <#link-pseudo>`__ , in § 8.2
-  `list of complex selectors <#list-of-simple-selectors>`__ , in § 3.1
-  `list of compound selectors <#list-of-simple-selectors>`__ , in
   § 3.1
-  `list of selectors <#selector-list>`__ , in § 3.1
-  `list of simple selectors <#list-of-simple-selectors>`__ , in § 3.1
-  `:local-link <#local-link-pseudo>`__ , in § 8.3
-  `logical combination
   pseudo-classes <#logical-combination-pseudo-classes>`__ , in § 4
-  `match <#match>`__ , in § 3.1
-  `match a complex selector against an
   element <#match-a-complex-selector-against-an-element>`__ , in
   § 19.3
-  `match a selector against an
   element <#match-a-selector-against-an-element>`__ , in § 19.3
-  `match a selector against a
   pseudo-element <#match-a-selector-against-a-pseudo-element>`__ , in
   § 19.4
-  `match a selector against a
   tree <#match-a-selector-against-a-tree>`__ , in § 19.5
-  `:matches() <#selectordef-matches>`__ , in § 4.2
-  `:modal <#selectordef-modal>`__ , in § 12.2
-  `:muted <#selectordef-muted>`__ , in § 11.3
-  `next-sibling combinator <#next-sibling-combinator>`__ , in § 15.3
-  `:not() <#negation-pseudo>`__ , in § 4.3
-  `<ns-prefix> <#typedef-ns-prefix>`__ , in § 18
-  `:nth-child() <#nth-child-pseudo>`__ , in § 14.3.1
-  `:nth-col() <#nth-col-pseudo>`__ , in § 16.2
-  `:nth-last-child() <#nth-last-child-pseudo>`__ , in § 14.3.2
-  `:nth-last-col() <#nth-last-col-pseudo>`__ , in § 16.3
-  `:nth-last-of-type() <#nth-last-of-type-pseudo>`__ , in § 14.4.2
-  `:nth-of-type() <#nth-of-type-pseudo>`__ , in § 14.4.1
-  `:only-child <#only-child-pseudo>`__ , in § 14.3.5
-  `:only-of-type <#only-of-type-pseudo>`__ , in § 14.4.5
-  `:open <#selectordef-open>`__ , in § 12.1
-  `:optional <#optional-pseudo>`__ , in § 13.3.4
-  `originating element <#originating-element>`__ , in § 3.6.2
-  `originating pseudo-element <#originating-pseudo-element>`__ , in
   § 3.6.4
-  `:out-of-range <#out-of-range-pseudo>`__ , in § 13.3.3
-  `parse a relative selector <#parse-a-relative-selector>`__ , in
   § 19.2
-  `parse as a forgiving selector
   list <#parse-as-a-forgiving-selector-list>`__ , in § 18.1
-  `parse a selector <#parse-a-selector>`__ , in § 19.1
-  `:past <#past-pseudo>`__ , in § 10.2
-  `:paused <#selectordef-paused>`__ , in § 11.1
-  `:picture-in-picture <#selectordef-picture-in-picture>`__ , in
   § 12.4
-  `:placeholder-shown <#placeholder-shown-pseudo>`__ , in § 13.1.3
-  `:playing <#selectordef-playing>`__ , in § 11.1
-  `pseudo-class <#pseudo-class>`__ , in § 3.5
-  `<pseudo-class-selector> <#typedef-pseudo-class-selector>`__ , in
   § 18
-  `<pseudo-compound-selector> <#typedef-pseudo-compound-selector>`__ ,
   in § 18
-  `pseudo-compound selector <#pseudo-compound>`__ , in § 3.1
-  `pseudo-element <#pseudo-element>`__ , in § 3.6
-  `<pseudo-element-selector> <#typedef-pseudo-element-selector>`__ ,
   in § 18
-  `:read-only <#read-only-pseudo>`__ , in § 13.1.2
-  `:read-write <#read-write-pseudo>`__ , in § 13.1.2
-  `relative <#relative-selector>`__ , in § 3.4
-  `<relative-real-selector> <#typedef-relative-real-selector>`__ , in
   § 18
-  `<relative-real-selector-list> <#typedef-relative-real-selector-list>`__ ,
   in § 18
-  `<relative-selector> <#typedef-relative-selector>`__ , in § 18
-  `relative selector <#relative-selector>`__ , in § 3.4
-  `relative selector anchor
   elements <#relative-selector-anchor-elements>`__ , in § 3.4
-  `<relative-selector-list> <#typedef-relative-selector-list>`__ , in
   § 18
-  `:required <#required-pseudo>`__ , in § 13.3.4
-  `:root <#root-pseudo>`__ , in § 14.1
-  `:scope <#scope-pseudo>`__ , in § 8.6
-  `scope <#scoped-selector>`__ , in § 3.3
-  `scoped selector <#scoped-selector>`__ , in § 3.3
-  `scoping root <#scoping-root>`__ , in § 3.3
-  `:seeking <#selectordef-seeking>`__ , in § 11.1
-  `selector <#selector>`__ , in § 3.1
-  `<selector-list> <#typedef-selector-list>`__ , in § 18
-  `selector list <#selector-list>`__ , in § 3.1
-  `<simple-selector> <#typedef-simple-selector>`__ , in § 18
-  `simple selector <#simple>`__ , in § 3.1
-  `<simple-selector-list> <#typedef-simple-selector-list>`__ , in § 18
-  `specificity <#specificity>`__ , in § 17
-  `:stalled <#selectordef-stalled>`__ , in § 11.2
-  `structural pseudo-classes <#structural-pseudo-classes>`__ , in § 14
-  `<subclass-selector> <#typedef-subclass-selector>`__ , in § 18
-  `subject <#selector-subject>`__ , in § 3.1
-  `subject of a selector <#selector-subject>`__ , in § 3.1
-  `subject of the selector <#selector-subject>`__ , in § 3.1
-  `sub-pseudo-element <#sub-pseudo-element>`__ , in § 3.6.4
-  `subsequent-sibling combinator <#subsequent-sibling-combinator>`__ ,
   in § 15.4
-  `:target <#target-pseudo>`__ , in § 8.4
-  `:target-within <#target-within-pseudo>`__ , in § 8.5
-  `<type-selector> <#typedef-type-selector>`__ , in § 18
-  `type selector <#type-selector>`__ , in § 5.1
-  `ultimate originating element <#ultimate-originating-element>`__ ,
   in § 3.6.4
-  `universal selector <#universal-selector>`__ , in § 5.2
-  `unknown -webkit-
   pseudo-elements <#unknown--webkit--pseudo-elements>`__ , in
   § Unnumbered section
-  `user action pseudo-class <#user-action-pseudo-class>`__ , in § 9
-  `:user-invalid <#user-invalid-pseudo>`__ , in § 13.3.5
-  `:user-valid <#user-valid-pseudo>`__ , in § 13.3.5
-  `:valid <#valid-pseudo>`__ , in § 13.3.2
-  `:visited <#visited-pseudo>`__ , in § 8.2
-  `:volume-locked <#selectordef-volume-locked>`__ , in § 11.3
-  `:where() <#where-pseudo>`__ , in § 4.4
-  `White space <#whitespace>`__ , in § 3.7
-  `<wq-name> <#typedef-wq-name>`__ , in § 18

.. _index-defined-elsewhere:

Terms defined by reference ` <#index-defined-elsewhere>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  [CSS-COLOR-5] defines the following terms:

   -  a

-  [CSS-DISPLAY-3] defines the following terms:

   -  display

-  [CSS-DISPLAY-4] defines the following terms:

   -  box tree
   -  display type
   -  list-item
   -  visibility

-  [CSS-PSEUDO-4] defines the following terms:

   -  ::after
   -  ::before
   -  ::first-letter
   -  ::first-line
   -  ::marker
   -  tree-abiding
   -  tree-abiding pseudo-element

-  [CSS-SCOPING-1] defines the following terms:

   -  ::shadow
   -  ::slotted()
   -  :host
   -  :host-context()
   -  flat tree

-  [CSS-TEXT-4] defines the following terms:

   -  content language
   -  document white space characters

-  [CSS-VALUES-4] defines the following terms:

   -  !
   -  #
   -  \*
   -  <ident>
   -  <string>
   -  ?
   -  identifier
   -  \|

-  [CSS-WRITING-MODES-3] defines the following terms:

   -  direction

-  [CSS22] defines the following terms:

   -  :before

-  [CSS3NAMESPACE] defines the following terms:

   -  @namespace
   -  css qualified name
   -  default namespace

-  [CSS3SYN] defines the following terms:

   -  <an+b>
   -  <any-value>
   -  <function-token>
   -  <hash-token>
   -  <ident-token>
   -  <string-token>
   -  parse
   -  parse a list

-  [DOM] defines the following terms:

   -  DocumentFragment
   -  descendant
   -  document element
   -  inclusive sibling
   -  parentNode
   -  quirks mode
   -  root
   -  shadow host
   -  shadow tree
   -  shadow-including tree order
   -  tree

-  [FULLSCREEN] defines the following terms:

   -  requestFullscreen()

-  [HTML] defines the following terms:

   -  a
   -  area
   -  audio
   -  button
   -  custom element
   -  details
   -  dialog
   -  div
   -  effective media volume
   -  element definition
   -  em
   -  h1
   -  href
   -  html
   -  img
   -  input
   -  label
   -  li
   -  media data
   -  media element stall timeout
   -  meta
   -  muted
   -  object
   -  ol
   -  p
   -  placeholder
   -  pre
   -  q
   -  select
   -  showModal()
   -  span
   -  textarea
   -  video

-  [INFRA] defines the following terms:

   -  ascii case-insensitive
   -  identical to

-  [MATHML-CORE] defines the following terms:

   -  math

-  [SELECT] defines the following terms:

   -  \*

-  [SELECTORS-4] defines the following terms:

   -  <forgiving-relative-selector-list>

-  [URL] defines the following terms:

   -  fragment

References ` <#references>`__
------------------------------

.. _normative:

Normative References ` <#normative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[BCP47]
   A. Phillips, Ed.; M. Davis, Ed.. `Tags for Identifying
   Languages <https://www.rfc-editor.org/rfc/rfc5646>`__. September
   2009. Best Current Practice. URL:
   https://www.rfc-editor.org/rfc/rfc5646
[CSS-DISPLAY-4]
   `CSS Display Module Level
   4 <https://drafts.csswg.org/css-display-4/>`__. Editor's Draft. URL:
   https://drafts.csswg.org/css-display-4/
[CSS-PSEUDO-4]
   Daniel Glazman; Elika Etemad; Alan Stearns. `CSS Pseudo-Elements
   Module Level 4 <https://drafts.csswg.org/css-pseudo-4/>`__. URL:
   https://drafts.csswg.org/css-pseudo-4/
[CSS-SCOPING-1]
   Tab Atkins Jr.; Elika Etemad. `CSS Scoping Module Level
   1 <https://drafts.csswg.org/css-scoping/>`__. URL:
   https://drafts.csswg.org/css-scoping/
[CSS-TEXT-4]
   Elika Etemad; et al. `CSS Text Module Level
   4 <https://drafts.csswg.org/css-text-4/>`__. URL:
   https://drafts.csswg.org/css-text-4/
[CSS-VALUES-4]
   Tab Atkins Jr.; Elika Etemad. `CSS Values and Units Module Level
   4 <https://drafts.csswg.org/css-values-4/>`__. URL:
   https://drafts.csswg.org/css-values-4/
[CSS-WRITING-MODES-3]
   Elika Etemad; Koji Ishii. `CSS Writing Modes Level
   3 <https://drafts.csswg.org/css-writing-modes-3/>`__. URL:
   https://drafts.csswg.org/css-writing-modes-3/
[CSS21]
   Bert Bos; et al. `Cascading Style Sheets Level 2 Revision 1 (CSS 2.1)
   Specification <https://drafts.csswg.org/css2/>`__. URL:
   https://drafts.csswg.org/css2/
[CSS22]
   Bert Bos. `Cascading Style Sheets Level 2 Revision 2 (CSS 2.2)
   Specification <https://drafts.csswg.org/css2/>`__. URL:
   https://drafts.csswg.org/css2/
[CSS3NAMESPACE]
   Elika Etemad. `CSS Namespaces Module Level
   3 <https://drafts.csswg.org/css-namespaces/>`__. URL:
   https://drafts.csswg.org/css-namespaces/
[CSS3SYN]
   Tab Atkins Jr.; Simon Sapin. `CSS Syntax Module Level
   3 <https://drafts.csswg.org/css-syntax/>`__. URL:
   https://drafts.csswg.org/css-syntax/
[DOM]
   Anne van Kesteren. `DOM Standard <https://dom.spec.whatwg.org/>`__.
   Living Standard. URL: https://dom.spec.whatwg.org/
[HTML]
   Anne van Kesteren; et al. `HTML
   Standard <https://html.spec.whatwg.org/multipage/>`__. Living
   Standard. URL: https://html.spec.whatwg.org/multipage/
[INFRA]
   Anne van Kesteren; Domenic Denicola. `Infra
   Standard <https://infra.spec.whatwg.org/>`__. Living Standard. URL:
   https://infra.spec.whatwg.org/
[RFC2119]
   S. Bradner. `Key words for use in RFCs to Indicate Requirement
   Levels <https://datatracker.ietf.org/doc/html/rfc2119>`__. March
   1997. Best Current Practice. URL:
   https://datatracker.ietf.org/doc/html/rfc2119
[RFC4647]
   A. Phillips, Ed.; M. Davis, Ed.. `Matching of Language
   Tags <https://www.rfc-editor.org/rfc/rfc4647>`__. September 2006.
   Best Current Practice. URL: https://www.rfc-editor.org/rfc/rfc4647
[SELECT]
   Tantek Çelik; et al. `Selectors Level
   3 <https://drafts.csswg.org/selectors-3/>`__. URL:
   https://drafts.csswg.org/selectors-3/
[SELECTORS-4]
   Elika Etemad; Tab Atkins Jr.. `Selectors Level
   4 <https://drafts.csswg.org/selectors/>`__. URL:
   https://drafts.csswg.org/selectors/
[URL]
   Anne van Kesteren. `URL Standard <https://url.spec.whatwg.org/>`__.
   Living Standard. URL: https://url.spec.whatwg.org/

.. _informative:

Informative References ` <#informative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[CSS-COLOR-5]
   Chris Lilley; et al. `CSS Color Module Level
   5 <https://drafts.csswg.org/css-color-5/>`__. URL:
   https://drafts.csswg.org/css-color-5/
[CSS-DISPLAY-3]
   Elika Etemad; Tab Atkins Jr.. `CSS Display Module Level
   3 <https://drafts.csswg.org/css-display/>`__. URL:
   https://drafts.csswg.org/css-display/
[CSS3UI]
   Tantek Çelik; Florian Rivoal. `CSS Basic User Interface Module Level
   3 (CSS3 UI) <https://drafts.csswg.org/css-ui-3/>`__. URL:
   https://drafts.csswg.org/css-ui-3/
[CSSSTYLEATTR]
   Tantek Çelik; Elika Etemad. `CSS Style
   Attributes <https://drafts.csswg.org/css-style-attr/>`__. URL:
   https://drafts.csswg.org/css-style-attr/
[FULLSCREEN]
   Philip Jägenstedt. `Fullscreen API
   Standard <https://fullscreen.spec.whatwg.org/>`__. Living Standard.
   URL: https://fullscreen.spec.whatwg.org/
[HTML5]
   Ian Hickson; et al.
   `HTML5 <https://www.w3.org/html/wg/drafts/html/master/>`__. URL:
   https://www.w3.org/html/wg/drafts/html/master/
[ITS20]
   David Filip; et al. `Internationalization Tag Set (ITS) Version
   2.0 <https://www.w3.org/TR/its20/>`__. 29 October 2013. REC. URL:
   https://www.w3.org/TR/its20/
[MATHML]
   Patrick D F Ion; Robert R Miner. `Mathematical Markup Language
   (MathML™) 1.01 Specification <https://www.w3.org/TR/REC-MathML/>`__.
   7 March 2023. REC. URL: https://www.w3.org/TR/REC-MathML/
[MATHML-CORE]
   David Carlisle; Frédéric Wang. `MathML
   Core <https://w3c.github.io/mathml-core/>`__. URL:
   https://w3c.github.io/mathml-core/
[PICTURE-IN-PICTURE]
   Francois Beaufort.
   `Picture-in-Picture <https://w3c.github.io/picture-in-picture/>`__.
   URL: https://w3c.github.io/picture-in-picture/
[QUIRKS]
   Simon Pieters. `Quirks Mode
   Standard <https://quirks.spec.whatwg.org/>`__. Living Standard. URL:
   https://quirks.spec.whatwg.org/
[SVG11]
   Erik Dahlström; et al. `Scalable Vector Graphics (SVG) 1.1 (Second
   Edition) <https://www.w3.org/TR/SVG11/>`__. 16 August 2011. REC. URL:
   https://www.w3.org/TR/SVG11/
[XFORMS11]
   John Boyer. `XForms 1.1 <https://www.w3.org/TR/xforms11/>`__. 20
   October 2009. REC. URL: https://www.w3.org/TR/xforms11/
[XML-NAMES]
   Tim Bray; et al. `Namespaces in XML 1.0 (Third
   Edition) <https://www.w3.org/TR/xml-names/>`__. 8 December 2009. REC.
   URL: https://www.w3.org/TR/xml-names/
[XML10]
   Tim Bray; et al. `Extensible Markup Language (XML) 1.0 (Fifth
   Edition) <https://www.w3.org/TR/xml/>`__. 26 November 2008. REC. URL:
   https://www.w3.org/TR/xml/

Issues Index ` <#issues-index>`__
----------------------------------

.. container::

   .. container:: issue

      Add comma-separated syntax for `multiple-value
      matching <http://lists.w3.org/Archives/Public/www-style/2011Mar/0215.html>`__?
      e.g. [rel ~= next, prev, up, first, last] `↵ <#issue-745ef775>`__

   .. container:: issue

      There’s a desire from authors to propagate
      `:focus <#focus-pseudo>`__ from a form control to its associated
      ```label`` <https://html.spec.whatwg.org/multipage/forms.html#the-label-element>`__
      element; the main objection seems to be implementation difficulty.
      See `CSSWG issue
      (CSS) <https://github.com/w3c/csswg-drafts/issues/397>`__ and
      `WHATWG issue
      (HTML) <https://github.com/whatwg/html/issues/1632>`__.
      `↵ <#issue-1416193e>`__

   .. container:: issue

      Cross-check with
      `:-moz-ui-invalid <https://developer.mozilla.org/en-US/docs/Web/CSS/%3A-moz-ui-invalid>`__.
      `↵ <#issue-b776312b>`__

   .. container:: issue

      Evaluate proposed `:dirty
      pseudo-class <https://lists.w3.org/Archives/Public/www-style/2014Feb/0511.html>`__
      `↵ <#issue-a71d9d5b>`__

   .. container:: issue

      Clarify that this (and
      `:invalid <#invalid-pseudo>`__/`:valid <#valid-pseudo>`__) can
      apply to form and fieldset elements. `↵ <#issue-df919919>`__

   .. container:: issue

      Are these still necessary now that we have more rigorous
      definitions for `match <#match>`__ and `invalid
      selector <#invalid-selector>`__? Nouns are a lot easier to
      coordinate across specification than predicates, and details like
      the exact order of elements returned from ``querySelector`` seem
      to make more sense being defined in the DOM specification than in
      Selectors. `↵ <#issue-55d7bd68>`__

   .. container:: issue

      Only the `tree-abiding
      pseudo-elements <https://drafts.csswg.org/css-pseudo-4/#tree-abiding>`__
      are really handled in any way remotely like this.
      `↵ <#issue-15f3317f>`__

   .. container:: issue

      The relative position of pseudo-elements in
      ``selector match list`` is undefined. There’s not yet a context
      that exposes this information, but we need to decide on something
      eventually, before something *is* exposed. `↵ <#issue-b7f52036>`__

   .. container:: issue

      Some pseudo-classes are \*syntactical\*, like
      `:has() <#has-pseudo>`__ and `:is() <#matches-pseudo>`__, and thus
      should always work. Need to indicate that somewhere. Probably the
      structural pseudos always work whenever the child list is ordered.
      `↵ <#issue-772ec278>`__

   .. container:: issue

      Semantic definition should probably move back here.
      `↵ <#issue-fb60ae39>`__

   .. container:: issue

      Need to define tree for XML. `↵ <#issue-4ca3978c>`__

**✔** MDN

.. container:: feature

   `:active <https://developer.mozilla.org/en-US/docs/Web/CSS/:active>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera5+Edge79+

      --------------

      Edge (Legacy)12+IE4+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `Adjacent_sibling_combinator <https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3.5+Edge79+

      --------------

      Edge (Legacy)12+IE7+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:any-link <https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link>`__

   In all current engines.

   .. container:: support

      Firefox50+Safari9+Chrome65+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari9+Chrome for Android?Android
      WebView65+Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `Attribute_selectors <https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE7+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile?

**⚠** MDN

.. container:: feature

   `:blank <https://developer.mozilla.org/en-US/docs/Web/CSS/:blank>`__

   In no current engines.

   .. container:: support

      FirefoxNoneSafariNoneChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:checked <https://developer.mozilla.org/en-US/docs/Web/CSS/:checked>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android4+iOS Safari?Chrome for Android18+Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `Child_combinator <https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera4+Edge79+

      --------------

      Edge (Legacy)12+IE7+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `Class_selectors <https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3.5+Edge79+

      --------------

      Edge (Legacy)12+IE3+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**⚠** MDN

.. container:: feature

   `Column_combinator <https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator>`__

   In no current engines.

   .. container:: support

      FirefoxNoneSafariNoneChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:default <https://developer.mozilla.org/en-US/docs/Web/CSS/:default>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari5+Chrome10+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari5+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `Descendant_combinator <https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3.5+Edge79+

      --------------

      Edge (Legacy)12+IE3+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

MDN

.. container:: feature

   `:dir <https://developer.mozilla.org/en-US/docs/Web/CSS/:dir>`__

   .. container:: support

      Firefox49+Safari16.4+ChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:disabled <https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `:enabled <https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:empty <https://developer.mozilla.org/en-US/docs/Web/CSS/:empty>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:first-child <https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari3.1+Chrome4+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE7+

      --------------

      Firefox for Android?iOS Safari4+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:first-of-type <https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:focus-visible <https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible>`__

   In all current engines.

   .. container:: support

      Firefox85+Safari15.4+Chrome86+

      --------------

      Opera?Edge86+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:focus-within <https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within>`__

   In all current engines.

   .. container:: support

      Firefox52+Safari10.1+Chrome60+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:focus <https://developer.mozilla.org/en-US/docs/Web/CSS/:focus>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**⚠** MDN

.. container:: feature

   `:future <https://developer.mozilla.org/en-US/docs/Web/CSS/:future>`__

   In only one current engine.

   .. container:: support

      FirefoxNoneSafari7+ChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `General_sibling_combinator <https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE7+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:has <https://developer.mozilla.org/en-US/docs/Web/CSS/:has>`__

   In all current engines.

   .. container:: support

      Firefox🔰 103+Safari15.4+Chrome105+

      --------------

      Opera?Edge105+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:hover <https://developer.mozilla.org/en-US/docs/Web/CSS/:hover>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari2+Chrome1+

      --------------

      Opera4+Edge79+

      --------------

      Edge (Legacy)12+IE4+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `ID_selectors <https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3.5+Edge79+

      --------------

      Edge (Legacy)12+IE3+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:in-range <https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range>`__

   In all current engines.

   .. container:: support

      Firefox29+Safari5.1+Chrome10+

      --------------

      Opera11+Edge79+

      --------------

      Edge (Legacy)13+IENone

      --------------

      Firefox for Android16+iOS Safari?Chrome for Android?Android
      WebView2.2+Samsung Internet1.0+Opera Mobile11+

**✔** MDN

.. container:: feature

   `:indeterminate <https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate>`__

   In all current engines.

   .. container:: support

      Firefox2+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:invalid <https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari5+Chrome10+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari5+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `:valid <https://developer.mozilla.org/en-US/docs/Web/CSS/:valid>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari5+Chrome10+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari5+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:is <https://developer.mozilla.org/en-US/docs/Web/CSS/:is>`__

   In all current engines.

   .. container:: support

      Firefox78+Safari14+Chrome88+

      --------------

      Opera?Edge88+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari14+Chrome for Android?Android
      WebView88+Samsung Internet15.0+Opera Mobile?

**✔** MDN

.. container:: feature

   `:lang <https://developer.mozilla.org/en-US/docs/Web/CSS/:lang>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:last-child <https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:last-of-type <https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:link <https://developer.mozilla.org/en-US/docs/Web/CSS/:link>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3.5+Edge79+

      --------------

      Edge (Legacy)12+IE3+

      --------------

      Firefox for Android?iOS Safari3.2+Chrome for Android?Android
      WebView1.5+Samsung Internet?Opera Mobile?

.. container:: feature

   `:visited <https://developer.mozilla.org/en-US/docs/Web/CSS/:visited>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3.5+Edge79+

      --------------

      Edge (Legacy)12+IE4+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `Selector_list <https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3.5+Edge79+

      --------------

      Edge (Legacy)12+IE3+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:modal <https://developer.mozilla.org/en-US/docs/Web/CSS/:modal>`__

   In all current engines.

   .. container:: support

      Firefox103+Safari15.6+Chrome105+

      --------------

      Opera?Edge105+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:not <https://developer.mozilla.org/en-US/docs/Web/CSS/:not>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:nth-child <https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:nth-last-child <https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome4+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:nth-last-of-type <https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome4+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:nth-of-type <https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:only-child <https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child>`__

   In all current engines.

   .. container:: support

      Firefox1.5+Safari3.1+Chrome2+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:only-of-type <https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:optional <https://developer.mozilla.org/en-US/docs/Web/CSS/:optional>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari5+Chrome10+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari5+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `:required <https://developer.mozilla.org/en-US/docs/Web/CSS/:required>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari5+Chrome10+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari5+Chrome for Android?Android
      WebView4.4.3+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:out-of-range <https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range>`__

   In all current engines.

   .. container:: support

      Firefox29+Safari5.1+Chrome10+

      --------------

      Opera11+Edge79+

      --------------

      Edge (Legacy)13+IENone

      --------------

      Firefox for Android16+iOS Safari?Chrome for Android?Android
      WebView2.2+Samsung Internet?Opera Mobile11+

**⚠** MDN

.. container:: feature

   `:past <https://developer.mozilla.org/en-US/docs/Web/CSS/:past>`__

   In only one current engine.

   .. container:: support

      FirefoxNoneSafari7+ChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**⚠** MDN

.. container:: feature

   `:paused <https://developer.mozilla.org/en-US/docs/Web/CSS/:paused>`__

   In only one current engine.

   .. container:: support

      FirefoxNoneSafari15.4+ChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**⚠** MDN

.. container:: feature

   `:picture-in-picture <https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture>`__

   In only one current engine.

   .. container:: support

      FirefoxNoneSafariNoneChrome110+

      --------------

      Opera?Edge110+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:placeholder-shown <https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown>`__

   In all current engines.

   .. container:: support

      Firefox51+Safari9+Chrome47+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**⚠** MDN

.. container:: feature

   `:playing <https://developer.mozilla.org/en-US/docs/Web/CSS/:playing>`__

   In only one current engine.

   .. container:: support

      FirefoxNoneSafari15.4+ChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:read-only <https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only>`__

   In all current engines.

   .. container:: support

      Firefox78+Safari4+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)13+IENone

      --------------

      Firefox for AndroidNoneiOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `:read-write <https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write>`__

   In all current engines.

   .. container:: support

      Firefox78+Safari4+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)13+IENone

      --------------

      Firefox for AndroidNoneiOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `:root <https://developer.mozilla.org/en-US/docs/Web/CSS/:root>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:scope <https://developer.mozilla.org/en-US/docs/Web/CSS/:scope>`__

   In all current engines.

   .. container:: support

      Firefox32+Safari7+Chrome27+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**⚠** MDN

.. container:: feature

   `:target-within <https://developer.mozilla.org/en-US/docs/Web/CSS/:target-within>`__

   In no current engines.

   .. container:: support

      FirefoxNoneSafariNoneChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:target <https://developer.mozilla.org/en-US/docs/Web/CSS/:target>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.3+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari2+Chrome for Android?Android
      WebView2+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `Type_selectors <https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3.5+Edge79+

      --------------

      Edge (Legacy)12+IE3+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔** MDN

.. container:: feature

   `Universal_selectors <https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3.5+Edge79+

      --------------

      Edge (Legacy)12+IE7+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

MDN

.. container:: feature

   `:user-invalid <https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid>`__

   .. container:: support

      Firefox88+Safari16.5+ChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

MDN

.. container:: feature

   `:user-valid <https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid>`__

   .. container:: support

      Firefox88+Safari16.5+ChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔** MDN

.. container:: feature

   `:where <https://developer.mozilla.org/en-US/docs/Web/CSS/:where>`__

   In all current engines.

   .. container:: support

      Firefox78+Safari14+Chrome88+

      --------------

      Opera?Edge88+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. |W3C| image:: https://www.w3.org/StyleSheets/TR/2021/logos/W3C
   :width: 72px
   :height: 48px
   :target: https://www.w3.org/
