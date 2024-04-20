.. container:: head

   |W3C|

   .. rubric:: CSS Snapshot 2023
      :name: title
      :class: p-name no-ref

   `W3C Group Note <https://www.w3.org/standards/types#NOTE>`__, 7
   December 2023

   More details about this document

   .. container::

      This version:
         https://www.w3.org/TR/2023/NOTE-css-2023-20231207/
      Latest published version:
         https://www.w3.org/TR/css-2023/
      Editor's Draft:
         https://drafts.csswg.org/css-2023/
      History:
         https://www.w3.org/standards/history/css-2023
      Feedback:
         `CSSWG Issues Repository <https://github.com/w3c/csswg-drafts/labels/css-2023>`__
      Editors:
         `Tab Atkins Jr. <http://xanthir.com/>`__ (Google)
         `Elika J. Etemad / fantasai <http://fantasai.inkedblade.net/contact>`__ (Apple)
         `Florian Rivoal <https://florian.rivoal.net>`__ (Invited
         Expert)
         `Chris Lilley <https://svgees.us/>`__ (W3C)
      Suggest an Edit for this Spec:
         `GitHub Editor <https://github.com/w3c/csswg-drafts/blob/main/css-2023/Overview.bs>`__

   .. container::

   `Copyright <https://www.w3.org/policies/#copyright>`__ © 2023 
   `World Wide Web Consortium <https://www.w3.org/>`__. W3C :sup:`®`
   `liability <https://www.w3.org/policies/#Legal_Disclaimer>`__,
   `trademark <https://www.w3.org/policies/#W3C_Trademarks>`__ and
   `permissive document license <https://www.w3.org/copyright/software-license/>`__ rules
   apply.

   --------------

.. container:: p-summary

   .. rubric:: Abstract
      :name: abstract
      :class: no-num no-toc no-ref heading settled

   This document collects together into one definition all the specs
   that together form the current state of Cascading Style Sheets (CSS)
   as of 2023. The primary audience is CSS implementers, not CSS
   authors, as this definition includes modules by specification
   stability, not Web browser adoption rate.

   `CSS <https://www.w3.org/TR/CSS/>`__ is a language for describing the
   rendering of structured documents (such as HTML and XML) on screen,
   on paper, etc.

.. _sotd:

Status of this document
-----------------------

.. container::

   *This section describes the status of this document at the time of
   its publication. A list of current W3C publications and the latest
   revision of this technical report can be found in the* `W3C technical
   reports index at https://www.w3.org/TR/. <https://www.w3.org/TR/>`__

   This document was published by the 
   `CSS Working Group <https://www.w3.org/groups/wg/css>`__ as a Group Note using the
   `Note track <https://www.w3.org/2023/Process-20231103/#recs-and-notes>`__.
   Group Notes are not endorsed by W3C nor its Members.

   Please send feedback by `filing issues in
   GitHub <https://github.com/w3c/csswg-drafts/issues>`__ (preferred),
   including the spec code “css-2023” in the title, like this:
   “[css-2023] *…summary of comment…* ”. All issues and comments are
   `archived <https://lists.w3.org/Archives/Public/public-css-archive/>`__.
   Alternately, feedback can be sent to the
   (`archived <https://lists.w3.org/Archives/Public/www-style/>`__)
   public mailing list
   `www-style@w3.org <mailto:www-style@w3.org?Subject=%5Bcss-2023%5D%20PUT%20SUBJECT%20HERE>`__.

   This document is governed by the `03 November 2023 W3C Process
   Document <https://www.w3.org/2023/Process-20231103/>`__.

   The `15 September 2020 W3C Patent Policy <https://www.w3.org/Consortium/Patent-Policy-20200915/>`__
   does not carry any licensing requirements or commitments on this
   document.

   This document represents the state of CSS as of 2023.

.. container::

.. _contents:

Table of Contents
-----------------

#. `1 Introduction <#intro>`__

   #. `1.1 What is CSS? <#css-glossary>`__
   #. `1.2 Background: The W3C Process and CSS <#w3c-process>`__

#. `2 Classification of CSS Specifications <#module-classification>`__

   #. `2.1 Cascading Style Sheets (CSS) — The Official Definition <#css-official>`__
   #. `2.2 Fairly Stable Modules with limited implementation experience <#fairly-stable>`__
   #. `2.3 Modules with Rough Interoperability <#rough-interop>`__
   #. `2.4 CSS Levels <#css-levels>`__
   #. `2.5 CSS Profiles <#profiles>`__

#. `3 Requirements for Responsible Implementation of CSS <#responsible>`__

   #. `3.1 Partial Implementations <#partial>`__
   #. `3.2 Implementations of Unstable and Proprietary Features <#future-proofing>`__

      #. `3.2.1 Experimentation and Unstable Features <#experimental>`__
      #. `3.2.2 Proprietary and Non-standardized Features <#proprietary>`__
      #. `3.2.3 Market Pressure and De Facto Standards <#de-facto>`__

   #. `3.3 Implementations of CR-level Features <#testing>`__

#. `4 Safe to Release pre-CR Exceptions <#CR-exceptions>`__
#. `5 Indices <#indices>`__

   #. `5.1 Terms Index <#terms>`__
   #. `5.2 Selector Index <#selectors>`__
   #. `5.3 At-Rule Index <#at-rules>`__
   #. `5.4 Property Index <#properties>`__
   #. `5.5 Values Index <#values>`__

#. `6 Acknowledgements <#acks>`__
#.  ` Conformance <#w3c-conformance>`__

   #.  ` Document conventions <#w3c-conventions>`__
   #.  ` Conformance classes <#w3c-conformance-classes>`__
   #.  ` Partial implementations <#w3c-partial>`__

      #.  ` Implementations of Unstable and Proprietary Features <#w3c-conform-future-proofing>`__

   #.  ` Non-experimental implementations <#w3c-testing>`__

#.  `References <#references>`__

   #.  `Normative References <#normative>`__
   #.  `Informative References <#informative>`__

.. container::

   .. rubric:: 1. Introduction ` <#intro>`__
      :name: intro
      :class: heading settled

   When the first CSS specification was published, all of CSS was
   contained in one document that defined CSS Level 1. CSS Level 2 was
   defined also by a single, multi-chapter document. However for CSS
   beyond Level 2, the CSS Working Group chose to adopt a modular
   approach, where each module defines a part of CSS, rather than to
   define a single monolithic specification. This breaks the
   specification into more manageable chunks and allows more immediate,
   incremental improvement to CSS.

   Since different CSS modules are at different levels of stability, the
   CSS Working Group has chosen to publish this profile to define the
   current scope and state of Cascading Style Sheets as of 2023.

   .. rubric:: 1.1. What is CSS? ` <#css-glossary>`__
      :name: css-glossary
      :class: heading settled

   Cascading Style Sheets (CSS)
      CSS is a language for writing `style sheets <#style-sheet>`__, and
      is designed to describe the rendering of structured documents
      (such as HTML and XML) on a variety of media. CSS is used to
      describe the presentation of a `source
      document <#source-document>`__, and usually does not change the
      underlying semantics expressed by its `document
      language <https://www.w3.org/TR/selectors-4/#document-language>`__.
   Style sheet
      A set of rules that specify the presentation of a document. Style
      sheets are written by an `Author <#author>`__, and interpreted by
      a `User Agent <#user-agent>`__, to present the document to the
      `User <#user>`__.
   Source document
      The document to which one or more style sheets apply. A source
      document’s structure and semantics are encoded using a `document
      language <https://www.w3.org/TR/selectors-4/#document-language>`__
      (e.g., HTML, XHTML, or SVG).
   Author
      An author is a person who writes documents and associated style
      sheets. An authoring tool  ` <#authoring-tool>`__ is a `User
      Agent <#user-agent>`__ that generates style sheets.
   User
      A user is a person who interacts with a user agent to view, hear,
      or otherwise use the document.
   User Agent (UA)
      A user agent is any program that interprets a document and its
      associated `style sheets <#style-sheet>`__ on behalf of a
      `user <#user>`__. A `user agent <#user-agent>`__ may display a
      document, read it aloud, cause it to be printed, convert it to
      another format, etc. For the purposes of the CSS specifications, a
      User Agent is one that supports and interprets `Cascading Style
      Sheets <#css>`__ as defined in these specifications.

   .. rubric:: 1.2. Background: The W3C Process and CSS ` <#w3c-process>`__
      :name: w3c-process
      :class: heading settled

   *This section is non-normative.*

   In the `W3C Process <https://www.w3.org/Consortium/Process/>`__, a
   Recommendation-track document passes through three levels of
   stability, summarized below:

   Working Draft (WD)
      This is the design phase of a W3C spec. The WG iterates the spec
      in response to internal and external feedback.

      The first official Working Draft is designated the “First Public
      Working Draft” (FPWD). In the CSSWG, publishing FPWD indicates
      that the Working Group as a whole has agreed to work on the
      module, roughly as scoped out and proposed in the editor’s draft.

      The transition to the next stage is sometimes called “Last Call
      Working Draft” (LCWD) phase. The CSSWG transitions Working Drafts
      once we have resolved all known issues, and can make no further
      progress without feedback from building tests and implementations.

      This “Last Call for Comments” sets a deadline for reporting any
      outstanding issues, and requires the WG to specially track and
      address incoming feedback. The comment-tracking document is the
      Disposition of Comments (DoC). It is submitted along with an
      updated draft for the Director’s approval, to demonstrate wide
      review and acceptance.

   Candidate Recommendation (CR)
      This is the testing phase of a W3C spec. Notably, this phase is
      about using tests and implementations to test the specification:
      it is not about testing the implementations. This process often
      reveals more problems with the spec, and so a Candidate
      Recommendation will morph over time in response to implementation
      and testing feedback, though usually less so than during the
      design phase (WD).

      Demonstration of two correct, independent implementations of each
      feature is required to exit CR, so in this phase the WG builds a
      test suite and generates implementation reports.

      The transition to the next stage is “Proposed Recommendation”
      (PR). During this phase the W3C Advisory Committee must approve
      the transition to REC.

   Recommendation (REC)
      This is the completed state of a W3C spec and represents a
      maintenance phase. At this point the WG only maintains an errata
      document and occasionally publishes an updated edition that
      incorporates the errata back into the spec.

   An Editor’s Draft is effectively a live copy of the editors’ own
   working copy. It may or may not reflect Working Group consensus, and
   can at times be in a self-inconsistent state. (Because the publishing
   process at W3C is time-consuming and onerous, the `Editor’s
   Draft <#editors-draft>`__ is usually the best (most up-to-date)
   reference for a spec. Efforts are currently underway to reduce the
   friction of publishing, so that official drafts will be regularly
   up-to-date and Editor’s Drafts can return to their original function
   as scratch space.)

   .. rubric:: 2. Classification of CSS
      Specifications ` <#module-classification>`__
      :name: module-classification
      :class: heading settled

   **A list of all CSS modules, stable and in-progress, and their
   statuses can be found at the** `CSS Current Work
   page <https://www.w3.org/Style/CSS/current-work>`__ **.**

   .. rubric:: 2.1. Cascading Style Sheets (CSS) — The Official
      Definition ` <#css-official>`__
      :name: css-official
      :class: heading settled

   This profile includes only specifications that we consider stable
   *and* for which we have enough implementation experience that we are
   sure of that stability.

   Note: This is not intended to be a CSS Desktop Browser Profile:
   inclusion in this profile is based on feature stability only and not
   on expected use or Web browser adoption. This profile defines CSS in
   its most complete form.

   As of 2023, Cascading Style Sheets
   (CSS)  ` <#cascading-style-sheets-css>`__ is defined by the
   following specifications.

   `CSS Level 2, latest revision <https://www.w3.org/TR/CSS2/>`__ (including errata) `[CSS2] <#biblio-css2>`__
      This defines the core of CSS, parts of which are overridden by
      later specifications. We recommend in particular reading 
      `Chapter 2 <https://www.w3.org/TR/CSS2/intro.html>`__, which introduces
      some of the basic concepts of CSS and its design principles.
   `CSS Syntax Level 3 <https://www.w3.org/TR/css-syntax-3/>`__ `[CSS-SYNTAX-3] <#biblio-css-syntax-3>`__
      Replaces CSS2§4.1, CSS2§4.2, CSS2§4.4, and CSS2§G, redefining how
      CSS is parsed.
   `CSS Style Attributes <https://www.w3.org/TR/css-style-attr/>`__ `[CSS-STYLE-ATTR] <#biblio-css-style-attr>`__
      Defines how CSS declarations can be embedded in markup attributes.
   `Media Queries Level 3 <https://www.w3.org/TR/css3-mediaqueries/>`__ `[CSS3-MEDIAQUERIES] <#biblio-css3-mediaqueries>`__
      Replaces CSS2§7.3 and expands on the syntax for media-specific
      styles.
   `CSS Conditional Rules Level 3 <https://www.w3.org/TR/css-conditional-3/>`__ `[CSS-CONDITIONAL-3] <#biblio-css-conditional-3>`__
      Extends and supersedes CSS2§7.2, updating the definition of
      `@media <https://www.w3.org/TR/css-conditional-3/#at-ruledef-media>`__
      rules to allow nesting and introducing the
      `@supports <https://www.w3.org/TR/css-conditional-3/#at-ruledef-supports>`__
      rule for feature-support queries.
   `Selectors Level 3 <https://www.w3.org/TR/selectors-3/>`__ `[SELECTORS-3] <#biblio-selectors-3>`__
      Replaces CSS2§5 and CSS2§6.4.3, defining an extended range of
      selectors.
   `CSS Namespaces <https://www.w3.org/TR/css-namespaces/>`__ `[CSS3-NAMESPACE] <#biblio-css3-namespace>`__
      Introduces an
      `@namespace <https://drafts.csswg.org/css-namespaces-3/#at-ruledef-namespace>`__
      rule to allow namespace-prefixed selectors.
   `CSS Cascading and Inheritance Level 4 <https://www.w3.org/TR/css-cascade-4/>`__ `[CSS-CASCADE-4] <#biblio-css-cascade-4>`__
      Extends and supersedes CSS2§1.4.3 and CSS2§6, as well as
      `[CSS-CASCADE-3] <#biblio-css-cascade-3>`__. Describes how to
      collate style rules and assign values to all properties on all
      elements. By way of cascading and inheritance, values are
      propagated for all properties on all elements.
   `CSS Values and Units Level 3 <https://www.w3.org/TR/css-values-3/>`__ `[CSS-VALUES-3] <#biblio-css-values-3>`__
      Extends and supersedes CSS2§1.4.2.1, CSS2§4.3, and CSS2§A.2.1–3,
      defining CSS’s property definition syntax and expanding its set of
      units.
   `CSS Custom Properties for Cascading Variables Module Level 1 <https://www.w3.org/TR/css-variables-1/>`__ `[CSS-VARIABLES-1] <#biblio-css-variables-1>`__
      Introduces cascading variables as a new primitive value type that
      is accepted by all CSS properties, and custom properties for
      defining them.
   `CSS Box Model Level 3 <https://www.w3.org/TR/css-box-3/>`__ `[CSS-BOX-3] <#biblio-css-box-3>`__
      Replaces CSS2§8.1, §8.2, §8.3 (but not §8.3.1), and §8.4.
   `CSS Color Level 4 <https://www.w3.org/TR/css-color-4/>`__ `[CSS-COLOR-4] <#biblio-css-color-4>`__
      Extends and supersedes CSS2§4.3.6, CSS2§14.1, and CSS2§18.2, also
      extends and supersedes `[CSS-COLOR-3] <#biblio-css-color-3>`__,
      introducing an extended range of color spaces beyond sRGB,
      extended color values, and CSS Object Model extensions for color.
      Also defines the
      `opacity <https://www.w3.org/TR/css-color-4/#propdef-opacity>`__
      property.
   `CSS Backgrounds and Borders Level 3 <https://www.w3.org/TR/css-backgrounds-3/>`__ `[CSS-BACKGROUNDS-3] <#biblio-css-backgrounds-3>`__
      Extends and supersedes CSS2§8.5 and CSS2§14.2, providing more
      control of backgrounds and borders, including layered background
      images, image borders, and drop shadows.
   `CSS Images Level 3 <https://www.w3.org/TR/css-images-3/>`__ `[CSS-IMAGES-3] <#biblio-css-images-3>`__
      Redefines and incorporates the external 2D image value type,
      introduces native 2D gradients, and adds additional controls for
      replaced element sizing and rendering.
   `CSS Fonts Level 3 <https://www.w3.org/TR/css-fonts-3/>`__ `[CSS-FONTS-3] <#biblio-css-fonts-3>`__
      Extends and supersedes CSS2§15 and provides more control over font
      choice and feature selection.
   `CSS Writing Modes Level 3 <https://www.w3.org/TR/css-writing-modes-3/>`__ `[CSS-WRITING-MODES-3] <#biblio-css-writing-modes-3>`__
      Defines CSS support for various international writing modes, such
      as left-to-right (e.g. Latin or Indic), right-to-left (e.g. Hebrew
      or Arabic), bidirectional (e.g. mixed Latin and Arabic) and
      vertical (e.g. Asian scripts). Replaces and extends CSS2§8.6 and
      §9.10.
   `CSS Multi-column Layout Level 1 <https://www.w3.org/TR/css-multicol-1/>`__ `[CSS-MULTICOL-1] <#biblio-css-multicol-1>`__
      Introduces multi-column flows to CSS layout.
   `CSS Flexible Box Module Level 1 <https://www.w3.org/TR/css-flexbox-1/>`__ `[CSS-FLEXBOX-1] <#biblio-css-flexbox-1>`__
      Introduces a flexible linear layout model for CSS.
   `CSS User Interface Module Level 3 <https://www.w3.org/TR/css-ui-3/>`__ `[CSS-UI-3] <#biblio-css-ui-3>`__
      Extends and supersedes CSS2§18.1 and CSS2§18.4, defining
      `cursor <https://www.w3.org/TR/css-ui-4/#propdef-cursor>`__,
      `outline <https://www.w3.org/TR/css-ui-4/#propdef-outline>`__, and
      several new CSS features that also enhance the user interface.
   `CSS Containment Module Level 1 <https://www.w3.org/TR/css-contain-1/>`__ `[CSS-CONTAIN-1] <#biblio-css-contain-1>`__
      Introduces the
      `contain <https://www.w3.org/TR/css-contain-2/#propdef-contain>`__
      property, which enforces the independent CSS processing of an
      element’s subtree in order to enable heavy optimizations by user
      agents when used well.
   `CSS Transforms Level 1 <https://www.w3.org/TR/css-transforms-1/>`__ `[CSS-TRANSFORMS-1] <#biblio-css-transforms-1>`__
      Introduces coordinate-based graphical transformations to CSS.
   `CSS Compositing and Blending Level 1 <https://www.w3.org/TR/compositing-1/>`__ `[COMPOSITING] <#biblio-compositing>`__
      Defines the compositing and blending of overlaid content and
      introduces features to control their modes.
   `CSS Easing Functions Level 1 <https://www.w3.org/TR/css-easing-1/>`__ `[CSS-EASING-1] <#biblio-css-easing-1>`__.
      Describes a way for authors to define a transformation that
      controls the rate of change of some value. Applied to animations,
      such transformations can be used to produce animations that mimic
      physical phenomena such as momentum or to cause the animation to
      move in discrete steps producing robot-like movement.
   `CSS Counter Styles Level 3 <https://www.w3.org/TR/css-counter-styles-3/>`__ `[CSS-COUNTER-STYLES-3] <#biblio-css-counter-styles-3>`__
      Introduces the
      `@counter-style <https://www.w3.org/TR/css-counter-styles-3/#at-ruledef-counter-style>`__
      rule, which allows authors to define their own custom counter
      styles for use with CSS list-marker and generated-content counters
      `[CSS-LISTS-3] <#biblio-css-lists-3>`__. It also predefines a set
      of common counter styles, including the ones present in CSS2 and
      CSS2.1.

   Note: Although we don’t anticipate significant changes to the
   specifications that form this snapshot, their inclusion does not mean
   they are frozen. The Working Group will continue to address problems
   as they are found in these specs. Implementers should monitor
   `www-style <https://lists.w3.org/Archives/Public/www-style/>`__
   and/or the `CSS Working Group Blog <https://www.w3.org/blog/CSS>`__
   for any resulting changes, corrections, or clarifications.

   .. rubric:: 2.2. Fairly Stable Modules with limited implementation
      experience ` <#fairly-stable>`__
      :name: fairly-stable
      :class: heading settled

   The following modules have completed design work, and are fairly
   stable, but have not received much testing and implementation
   experience yet. We hope to incorporate them into the `official
   definition of CSS <#css-official>`__ in a future snapshot.

   `Media Queries Level 4 <https://www.w3.org/TR/mediaqueries-4/>`__ `[MEDIAQUERIES-4] <#biblio-mediaqueries-4>`__
      Extends and supersedes
      `[CSS3-MEDIAQUERIES] <#biblio-css3-mediaqueries>`__, expanding the
      syntax, deprecating most media types, and introducing new media
      features.
   `CSS Display Module Level 3 <https://www.w3.org/TR/css-display-3/>`__ `[CSS-DISPLAY-3] <#biblio-css-display-3>`__
      Replaces CSS2§9.1.2, §9.2.1 (but not §9.2.1.1), §9.2.2 (but not
      §9.2.2.1), §9.2.3, and §9.2.4 (and lays the foundations for
      replacing §9.7), defining how the CSS formatting box tree is
      generated from the document element tree and defining the
      `display <https://www.w3.org/TR/css-display-3/#propdef-display>`__
      property that controls it.
   `CSS Writing Modes Level 4 <https://www.w3.org/TR/css-writing-modes-4/>`__ `[CSS-WRITING-MODES-4] <#biblio-css-writing-modes-4>`__
      Extends and supersedes
      `[CSS-WRITING-MODES-3] <#biblio-css-writing-modes-3>`__, adding
      more options for vertical writing.
   `CSS Fragmentation Module Level 3 <https://www.w3.org/TR/css-break-3/>`__ `[CSS-BREAK-3] <#biblio-css-break-3>`__
      Describes the fragmentation model that partitions a flow into
      pages, columns, or regions and defines properties that control it.
      Extends and supersedes CSS2§13.3.
   `CSS Box Alignment Module Level 3 <https://www.w3.org/TR/css-align-3/>`__ `[CSS-ALIGN-3] <#biblio-css-align-3>`__
      Introduces properties to control the alignment of boxes within
      their containers in the various CSS box layout models: block
      layout, table layout, flex layout, and grid layout.
   `CSS Shapes Module Level 1 <https://www.w3.org/TR/css-shapes-1/>`__ `[CSS-SHAPES-1] <#biblio-css-shapes-1>`__
      Extends floats (CSS2§9.5) to effect non-rectangular wrapping
      shapes.
   `CSS Text Module Level 3 <https://www.w3.org/TR/css-text-3/>`__ `[CSS-TEXT-3] <#biblio-css-text-3>`__
      Extends and supersedes CSS2§16 excepting §16.2, defining
      properties for text manipulation and specifying their processing
      model. It covers line breaking, justification and alignment, white
      space handling, and text transformation.
   `CSS Text Decoration Level 3 <https://www.w3.org/TR/css-text-decor-3/>`__ `[CSS-TEXT-DECOR-3] <#biblio-css-text-decor-3>`__
      Extends and supersedes CSS2§16.3, providing more control over text
      decoration lines and adding the ability to specify text emphasis
      marks and text shadows.
   `CSS Masking Level 1 <https://www.w3.org/TR/css-masking-1/>`__ `[CSS-MASKING-1] <#biblio-css-masking-1>`__
      Replaces CSS2§11.1.2 and introduces more powerful ways of clipping
      and masking content.
   `CSS Scroll Snap Module Level 1 <https://www.w3.org/TR/css-scroll-snap-1/>`__ `[CSS-SCROLL-SNAP-1] <#biblio-css-scroll-snap-1>`__
      Contains features to control panning and scrolling behavior with
      “snap positions”.
   `CSS Speech Module Level 1 <https://www.w3.org/TR/css-speech-1/>`__ `[CSS-SPEECH-1] <#biblio-css-speech-1>`__
      Replaces CSS2§A, overhauling the (non-normative) speech rendering
      chapter.
   `CSS Scrollbars Styling Module Level 1 <https://www.w3.org/TR/css-scrollbars-1/>`__ `[CSS-SCROLLBARS-1] <#biblio-css-scrollbars-1>`__
      Defines properties to influence the visual styling of scrollbars,
      introducing controls for their color and width.
   `CSS View Transitions Module Level 1 <https://www.w3.org/TR/css-view-transitions-1/>`__ `[CSS-VIEW-TRANSITIONS-1] <#biblio-css-view-transitions-1>`__
      Defines the View Transition API, along with associated properties
      and pseudo-elements, which allows developers to create animated
      visual transitions representing changes in the document state.

   .. rubric:: 2.3. Modules with Rough
      Interoperability ` <#rough-interop>`__
      :name: rough-interop
      :class: heading settled

   Although the following modules have been widely deployed with `rough
   interoperability <#rough-interoperability>`__, their details are not
   fully worked out or sufficiently well-specified and they need more
   testing and bugfixing. We hope to incorporate them into the `official
   definition of CSS <#css-official>`__ in a future snapshot.

   `CSS Transitions Level 1 <https://www.w3.org/TR/css-transitions-1/>`__ `[CSS-TRANSITIONS-1] <#biblio-css-transitions-1>`__ and `CSS Animations Level 1 <https://www.w3.org/TR/css-animations-1/>`__ `[CSS-ANIMATIONS-1] <#biblio-css-animations-1>`__.
      Introduces mechanisms for transitioning the computed values of CSS
      properties over time.
   `CSS Grid Layout Module Level 1 <https://www.w3.org/TR/css-grid-1/>`__ `[CSS-GRID-1] <#biblio-css-grid-1>`__
      Introduces a two-dimensional grid-based layout system, optimized
      for user interface design. In the grid layout model, the children
      of a grid container can be positioned into arbitrary slots in a
      predefined flexible or fixed-size layout grid.
   `CSS Grid Layout Module Level 2 <https://www.w3.org/TR/css-grid-2/>`__ `[CSS-GRID-2] <#biblio-css-grid-2>`__
      Extends and supersedes `[CSS-GRID-1] <#biblio-css-grid-1>`__,
      introducing “subgrids” for managing nested markup in a shared grid
      framework.
   `CSS Will Change Level 1 <https://www.w3.org/TR/css-will-change-1/>`__ `[CSS-WILL-CHANGE-1] <#biblio-css-will-change-1>`__
      Introduces a performance hint property called
      `will-change <https://www.w3.org/TR/css-will-change-1/#propdef-will-change>`__.
   `Filter Effects Module Level 1 <https://www.w3.org/TR/filter-effects-1/>`__ `[FILTER-EFFECTS-1] <#biblio-filter-effects-1>`__
      Introduces filter effects as a way of processing an element’s
      rendering before it is displayed in the document.
   `CSS Font Loading Module Level 3 <https://www.w3.org/TR/css-font-loading/>`__ `[CSS-FONT-LOADING-3] <#biblio-css-font-loading-3>`__
      Introduces events and interfaces used for dynamically loading font
      resources.
   `CSS Box Sizing Level 3 <https://www.w3.org/TR/css-sizing-3/>`__ `[CSS-SIZING-3] <#biblio-css-sizing-3>`__
      Overlays and extends CSS§10., expanding the value set of the
      sizing properties, introducing more precise sizing terminology,
      and defining with more precision and detail various automatic
      sizing concepts only vaguely defined in CSS2.
   `CSS Transforms Level 2 <https://www.w3.org/TR/css-transforms-2/>`__ `[CSS-TRANSFORMS-2] <#biblio-css-transforms-2>`__
      Builds upon `[CSS-TRANSFORMS-1] <#biblio-css-transforms-1>`__ to
      add new transform functions and properties for three-dimensional
      transforms, and convenience functions for simple transforms.
   `CSS Lists and Counters Module Level 3 <https://www.w3.org/TR/css-lists-3/>`__ `[CSS-LISTS-3] <#biblio-css-lists-3>`__
      Contains CSS features related to list counters: styling them,
      positioning them, and manipulating their value.
   `CSS Logical Properties and Values Level 1 <https://www.w3.org/TR/css-logical-1/>`__ `[CSS-LOGICAL-1] <#biblio-css-logical-1>`__
      Introduces logical properties and values that provide the author
      with the ability to control layout through logical, rather than
      physical, direction and dimension mappings. Also defines logical
      properties and values for the features defined in
      `[CSS2] <#biblio-css2>`__. These properties are writing-mode
      relative equivalents of their corresponding physical properties.
   `CSS Positioned Layout Module Level 3 <https://www.w3.org/TR/css-position-3/>`__ `[CSS-POSITION-3] <#biblio-css-position-3>`__
      Contains defines coordinate-based positioning and offsetting
      schemes of CSS: `relative
      positioning <https://www.w3.org/TR/CSS21/visuren.html#x34>`__,
      `sticky
      positioning <https://www.w3.org/TR/css-position-3/#sticky-position>`__,
      `absolute
      positioning <https://www.w3.org/TR/css-position-3/#absolute-position>`__,
      and `fixed
      positioning <https://www.w3.org/TR/css-position-3/#fixed-position>`__.
   `Resize Observer <https://www.w3.org/TR/resize-observer-1/>`__ `[RESIZE-OBSERVER-1] <#biblio-resize-observer-1>`__
      This specification describes an API for observing changes to
      element’s principal box’s size.
   `Web Animations <https://www.w3.org/TR/web-animations-1/>`__ `[WEB-ANIMATIONS-1] <#biblio-web-animations-1>`__
      Defines a model for synchronization and timing of changes to the
      presentation of a Web page. Also defines an application
      programming interface for interacting with this model.
   `CSS Fonts Module Level 4 <https://www.w3.org/TR/css-fonts-4/>`__ `[CSS-FONTS-4] <#biblio-css-fonts-4>`__
      Extends and supersedes CSS Fonts 3 and provides more control over
      font choice and feature selection, including support for OpenType
      variations.
   `CSS Color Adjustment Module Level 1 <https://www.w3.org/TR/css-color-adjust-1/>`__ `[CSS-COLOR-ADJUST-1] <#biblio-css-color-adjust-1>`__
      This module introduces a model and controls over automatic color
      adjustment by the user agent to handle user preferences and device
      output optimizations.
   `CSS Conditional Rules Module Level 4 <https://www.w3.org/TR/css-conditional-4/>`__ `[CSS-CONDITIONAL-4] <#biblio-css-conditional-4>`__
      Extends CSS Conditional 3 to allow testing for supported
      selectors.
   `CSS Cascading and Inheritance Level 5 <https://www.w3.org/TR/css-cascade-5/>`__ `[CSS-CASCADE-5] <#biblio-css-cascade-5>`__
      Extends CSS Cascade 4 to add cascade layers.

   .. rubric:: 2.4. CSS Levels ` <#css-levels>`__
      :name: css-levels
      :class: heading settled

   Cascading Style Sheets does not have versions in the traditional
   sense; instead it has levels  ` <#levels>`__. Each level of CSS
   builds on the previous, refining definitions and adding features. The
   feature set of each higher level is a superset of any lower level,
   and the behavior allowed for a given feature in a higher level is a
   subset of that allowed in the lower levels. A user agent conforming
   to a higher level of CSS is thus also conformant to all lower levels.

   CSS Level 1
      The CSS Working Group considers the `CSS1
      specification <https://www.w3.org/TR/2008/REC-CSS1-20080411/>`__
      to be obsolete. `CSS Level 1 <#css-level-1>`__ is defined as all
      the features defined in the CSS1 specification (properties,
      values, at-rules, etc), but using the syntax and definitions in
      the `CSS2.1 specification <https://www.w3.org/TR/CSS2/>`__. `CSS
      Style Attributes <https://www.w3.org/TR/css-style-attr/>`__
      defines its inclusion in element-specific style attributes.
   CSS Level 2
      Although the `CSS2
      specification <https://www.w3.org/TR/2008/REC-CSS2-20080411/>`__
      is technically a W3C Recommendation, it passed into the
      Recommendation stage before the W3C had defined the Candidate
      Recommendation stage. Over time implementation experience and
      further review has brought to light many problems in the CSS2
      specification, so instead of expanding an already `unwieldy errata
      list <https://www.w3.org/Style/css2-updates/REC-CSS2-19980512-errata.html>`__,
      the CSS Working Group chose to define CSS Level 2 Revision 1
      (CSS2.1). In case of any conflict between the two specs CSS2.1
      contains the definitive definition.

      Once CSS2.1 became Candidate Recommendation—effectively though not
      officially the same level of stability as CSS2—obsoleted the CSS2
      Recommendation. Features in CSS2 that were dropped from CSS2.1
      should be considered to be at the Candidate Recommendation stage,
      but note that many of these have been or will be pulled into a CSS
      Level 3 working draft, in which case that specification will, once
      it reaches CR, obsolete the definitions in CSS2.

      The `CSS2.1 specification <https://www.w3.org/TR/CSS2/>`__ defines
      `CSS Level 2 <#css-level-2>`__ and the `CSS Style Attributes
      specification <https://www.w3.org/TR/css-style-attr/>`__ defines
      its inclusion in element-specific style attributes.

   CSS Level 3
      `CSS Level 3 <#css-level-3>`__ builds on CSS Level 2 module by
      module, using the CSS2.1 specification as its core. Each module
      adds functionality and/or replaces part of the CSS2.1
      specification. The CSS Working Group intends that the new CSS
      modules will not contradict the CSS2.1 specification: only that
      they will add functionality and refine definitions. As each module
      is completed, it will be plugged in to the existing system of
      CSS2.1 plus previously-completed modules.

      From this level on modules are levelled independently: for example
      Selectors Level 4 may well be completed before CSS Line Module
      Level 3. Modules with no `CSS Level 2 <#css-level-2>`__ equivalent
      start at Level 1; modules that update features that existed in CSS
      Level 2 start at Level 3.

   CSS Level 4  ` <#css-level-4>`__ and beyond
      There is no CSS Level 4. Independent modules can reach level 4 or
      beyond, but CSS the language no longer has levels. ("CSS Level 3"
      as a term is used only to differentiate it from the previous
      monolithic versions.)

   .. rubric:: 2.5. CSS Profiles ` <#profiles>`__
      :name: profiles
      :class: heading settled

   Not all implementations will implement all functionality defined in
   CSS.

   In the past, the Working Group published a few Profiles, which were
   meant to define the minimal subset of CSS that various classes of
   user agents were expected to support.

   This effort has been discontinued, as the Working Group was not
   finding it effective or useful, and the profiles previously defined
   are now unmaintained.

   Note: Partial implementations of CSS, even if that subset is an
   official profile, must follow the forward-compatible parsing rules
   for `partial implementations <#partial>`__.

   .. rubric:: 3. Requirements for Responsible Implementation of
      CSS ` <#responsible>`__
      :name: responsible
      :class: heading settled

   The following sections define several conformance requirements for
   implementing CSS responsibly, in a way that promotes interoperability
   in the present and future.

   .. rubric:: 3.1. Partial Implementations ` <#partial>`__
      :name: partial
      :class: heading settled

   So that authors can exploit the forward-compatible parsing rules to
   assign fallback values, **CSS renderers must treat as invalid (and**
   `ignore as
   appropriate <https://www.w3.org/TR/CSS2/conform.html#ignore>`__ **)
   any at-rules, properties, property values, keywords, and other
   syntactic constructs for which they have no usable level of
   support**. In particular, user agents *must not* selectively ignore
   unsupported property values and honor supported values in a single
   multi-value property declaration: if any value is considered invalid
   (as unsupported values must be), CSS requires that the entire
   declaration be ignored.

   .. rubric:: 3.2. Implementations of Unstable and Proprietary
      Features ` <#future-proofing>`__
      :name: future-proofing
      :class: heading settled

   To avoid clashes with future stable CSS features, the CSSWG
   recommends the following best practices for the implementation of
   `unstable <#unstable>`__ features and `proprietary
   extensions <#proprietary-extension>`__ to CSS:

   .. rubric:: 3.2.1. Experimentation and Unstable
      Features ` <#experimental>`__
      :name: experimental
      :class: heading settled

   Implementations of `unstable <#unstable>`__ features that are
   described in W3C specifications but are not interoperable should not
   be released broadly for general use; but may be released for limited,
   experimental use in controlled environments.

   Why?
   We want to allow both authors and implementors to experiment with the
   feature and give feedback, but prevent authors from relying on them
   in production websites and thereby accidentally "locking in" (through
   content dependence) certain syntax or behavior that might change
   later.

   .. container:: example
      :name: example-e5f16ed9

      ` <#example-e5f16ed9>`__ For example, a UA could release an
      `unstable <#unstable>`__ features for experimentation through beta
      or other testing-stage builds; behind a hidden configuration flag;
      behind a switch enabled only for specific testing partners; or
      through some other means of limiting dependent use.

   A CSS feature is considered unstable until its specification has
   reached the Candidate Recommendation (CR) stage in the W3C process.
   In exceptional cases, the CSSWG may additionally, by an
   officially-recorded resolution, add pre-CR features to the set that
   are considered safe to release for broad use. See `§ 4 Safe to
   Release pre-CR Exceptions <#CR-exceptions>`__.

   Note: Vendors should consult the WG explicitly and not make
   assumptions on this point, as a pre-CR spec that hasn’t changed in
   awhile is usually more out-of-date than stable.

   .. rubric:: 3.2.2. Proprietary and Non-standardized
      Features ` <#proprietary>`__
      :name: proprietary
      :class: heading settled

   To avoid clashes with future CSS features, the CSS2.1 specification
   reserves a `prefixed
   syntax <https://www.w3.org/TR/CSS2/syndata.html#vendor-keywords>`__
   `[CSS2] <#biblio-css2>`__ for proprietary and experimental extensions
   to CSS. A CSS feature is a proprietary extension if it is meant for
   use in a closed environment accessible only to a single vendor’s user
   agent(s). A UA should support such `proprietary
   extensions <#proprietary-extension>`__ only through a
   vendor-`prefixed <#vendor-prefix>`__ syntax and not expose them to
   open (multi-UA) environments such as the World Wide Web.

   Why?
   The prefixing requirement allows shipping specialized features in
   closed environments without conflicting with future additions to
   standard CSS. The restriction on exposure to open systems is to
   prevent accidentally causing the public CSS environment to depend on
   an unstandardized `proprietary
   extensions <#proprietary-extension>`__.

   .. container:: example
      :name: example-5502e5f5

      ` <#example-5502e5f5>`__ For example, Firefox’s XUL-based UI,
      Apple’s iTunes UI, and Microsoft’s Universal Windows Platform app
      use extensions to CSS implemented by their respective UAs. So long
      as these UAs do not allow Web content to access these features,
      they do not provide an opportunity for such content to become
      dependent on their `proprietary
      extensions <#proprietary-extension>`__.

   Even if a feature is intended to eventually be used in the Web, if it
   hasn’t yet been standardized it should still not be exposed to the
   Web.

   .. rubric:: 3.2.3. Market Pressure and De Facto
      Standards ` <#de-facto>`__
      :name: de-facto
      :class: heading settled

   If a feature is `unstable <#unstable>`__ (i.e. the spec has not yet
   stabilized), but

   -  at least three UAs implement the feature (*or* a UA has broken the
      other rules and shipped for broad use an `unstable <#unstable>`__
      or otherwise non-standard feature in a production release),

   -  *and* the implementations have rough interoperability,

   -  *and* the CSS Working Group has recorded consensus that this
      feature should exist and be released,

   implementers may ship that feature `unprefixed <#vendor-prefix>`__ in
   broad-release builds. Rough interoperability is satisfied by a
   subjective judgment that even though there may be differences, the
   implementations are sufficiently similar to be used in production
   websites for a substantial number of use cases.

   Note that the CSSWG must still be consulted to ensure coordination
   across vendors and to ensure coherency review by the CSS experts from
   each vendor. Note also that `rough
   interoperability <#rough-interoperability>`__ still usually means
   painful lack of interop in edge (or not-so-edge) cases, particularly
   because details have not been ironed out through the standards review
   process.

   Why?
   If a feature is sufficiently popular that three or more browsers have
   implemented it before it’s finished standardization, this clause
   allows releasing the pressure to ship. Also, if a feature has already
   escaped into the wild and sites have started depending on it,
   pretending it’s still “experimental” doesn’t help anyone. Allowing
   others to ship unprefixed recognizes that the feature is now de facto
   standardized and encourages authors to write cross-platform code.
   .. rubric:: 3.2.3.1. Vendor-prefixing Unstable
      Features ` <#unstable-syntax>`__
      :name: unstable-syntax
      :class: no-toc heading settled

   When exposing such a standards-track `unstable <#unstable>`__ feature
   to the Web in a production release, implementations should support
   *both* `vendor-prefixed <#vendor-prefix>`__ and unprefixed syntaxes
   for the feature. Once the feature has stabilized and the
   implementation is updated to match interoperable behavior, support
   for the vendor-prefixed syntax should be removed.

   Why?
   This is recommended so that authors can use the unprefixed syntax to
   target all implementations, but when necessary, can target specific
   implementations to work around incompatibilities among
   implementations as they get ironed out through the
   standards/bugfixing process.
   The lack of a phase where only the prefixed syntax is supported
   greatly reduces the risk of stylesheets being written with only the
   vendor-prefixed syntax. This in turn allows UA vendors to retire
   their prefixed syntax once the feature is stable, with a lower risk
   of breaking existing content. It also reduces the need occasionally
   felt by some vendors to support a feature with the prefix of another
   vendor, due to content depending on that syntax.

   Anyone promoting `unstable <#unstable>`__ features to authors should
   document them using their standard unprefixed syntax, and avoid
   encouraging the use of the `vendor-prefixed <#vendor-prefix>`__
   syntax for any purpose other than working around implementation
   differences.

   .. rubric:: 3.2.3.2. Preserving the Openness of
      CSS ` <#open-technology>`__
      :name: open-technology
      :class: no-toc heading settled

   In order to preserve the open nature of CSS as a technology, vendors
   should make it possible for other implementors to freely implement
   any features that they do ship. To this end, they should provide
   spec-editing and testing resources to complete standardization of
   such features, and avoid other obstacles (e.g., platform dependency,
   licensing restrictions) to their competitors shipping the feature.

   .. rubric:: 3.3. Implementations of CR-level
      Features ` <#testing>`__
      :name: testing
      :class: heading settled

   Once a specification reaches the Candidate Recommendation stage,
   implementers should release an `unprefixed <#vendor-prefix>`__
   implementation of any CR-level feature they can demonstrate to be
   correctly implemented according to spec, and should avoid exposing a
   prefixed variant of that feature.

   To establish and maintain the interoperability of CSS across
   implementations, the CSS Working Group requests that non-experimental
   CSS renderers submit an implementation report (and, if necessary, the
   testcases used for that implementation report) to the W3C before
   releasing an unprefixed implementation of any CSS features. Testcases
   submitted to W3C are subject to review and correction by the CSS
   Working Group.

   Further information on submitting testcases and implementation
   reports can be found from on the CSS Working Group’s website at
   https://www.w3.org/Style/CSS/Test/. Questions should be directed to
   the
   `public-css-testsuite@w3.org <https://lists.w3.org/Archives/Public/public-css-testsuite>`__
   mailing list.

   .. rubric:: 4. Safe to Release pre-CR
      Exceptions ` <#CR-exceptions>`__
      :name: CR-exceptions
      :class: heading settled

   The following features have been explicitly and proactively cleared
   by the CSS Working Group for broad release prior to the spec reaching
   Candidate Recommendation. See `§ 3.2.1 Experimentation and Unstable
   Features <#experimental>`__.

   -  The flow-relative equivalents of the sizing properties
      (`width <https://www.w3.org/TR/css-sizing-3/#propdef-width>`__,
      `height <https://www.w3.org/TR/css-sizing-3/#propdef-height>`__,
      etc.), the border properties, the margin and padding properties.
      See
      `explanation <https://lists.w3.org/Archives/Public/www-style/2015Jul/0040.html>`__
      and `specification <https://www.w3.org/TR/css-logical-1/>`__.
   -  The
      `min-content <https://www.w3.org/TR/css-sizing-3/#valdef-width-min-content>`__
      and
      `max-content <https://www.w3.org/TR/css-sizing-3/#valdef-width-max-content>`__
      keywords of the sizing properties. See
      `decision <https://lists.w3.org/Archives/Public/www-style/2015Aug/0109.html>`__
      and
      `specification <https://www.w3.org/TR/css-sizing-3/#sizing-values>`__.
   -  The
      `conic-gradient() <https://www.w3.org/TR/css-images-4/#funcdef-conic-gradient>`__
      gradient notation. See
      `decision <https://github.com/w3c/csswg-drafts/issues/2383#issuecomment-371340088>`__.
   -  The
      `aspect-ratio <https://www.w3.org/TR/css-sizing-4/#propdef-aspect-ratio>`__
      property. `[CSS-SIZING-4] <#biblio-css-sizing-4>`__
   -  The
      `translate <https://www.w3.org/TR/css-transforms-2/#propdef-translate>`__,
      `rotate <https://www.w3.org/TR/css-transforms-2/#propdef-rotate>`__,
      and
      `scale <https://www.w3.org/TR/css-transforms-2/#propdef-scale>`__
      properties. `[CSS-TRANSFORMS-2] <#biblio-css-transforms-2>`__
   -  The
      `hyphenate-character <https://www.w3.org/TR/css-text-4/#propdef-hyphenate-character>`__
      property. `[CSS-TEXT-4] <#biblio-css-text-4>`__
   -  The
      `color-mix() <https://www.w3.org/TR/css-color-5/#funcdef-color-mix>`__
      function. `[CSS-COLOR-5] <#biblio-css-color-5>`__
   -  The
      `<color-interpolation-method> <https://www.w3.org/TR/css-color-4/#color-interpolation-method>`__,
      defined in `[CSS-COLOR-4] <#biblio-css-color-4>`__ and used for
      interpolation of linear, radial and conic gradients.
      `[CSS-IMAGES-4] <#biblio-css-images-4>`__
   -  The `relative
      color <https://www.w3.org/TR/css-color-5/#relative-color>`__
      syntax, defined in `[CSS-COLOR-5] <#biblio-css-color-5>`__

   The following features have been explicitly and retroactively cleared
   by the CSS Working Group for broad release prior to the spec reaching
   Candidate Recommendation:

   -  Everything in `CSS Animations Level
      1 <https://www.w3.org/TR/css-animations-1/>`__ and `CSS
      Transitions Level 1 <https://www.w3.org/TR/css-transitions-1/>`__.
   -  The `:dir() <https://www.w3.org/TR/selectors-4/#dir-pseudo>`__,
      `:lang() <https://www.w3.org/TR/selectors-4/#lang-pseudo>`__, and
      `:focus-within <https://www.w3.org/TR/selectors-4/#focus-within-pseudo>`__
      pseudo-classes from `[SELECTORS-4] <#biblio-selectors-4>`__.

   .. rubric:: 5. Indices ` <#indices>`__
      :name: indices
      :class: heading settled

   *These sections are non-normative.*

   .. rubric:: 5.1. Terms Index ` <#terms>`__
      :name: terms
      :class: heading settled

   .. container::

      -  ` <https://www.w3.org/TR/CSS21/selector.html#x18>`__
      -  =

         -  `in css2 <https://www.w3.org/TR/CSS21/selector.html#x14>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/selector.html#x18>`__

      -  `~= <https://www.w3.org/TR/CSS21/selector.html#x16>`__
      -  1st <length>

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#shadow-offset-x>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#shadow-offset-x>`__

      -  `2d matrix <https://drafts.csswg.org/css-transforms-1/#2d-matrix>`__
      -  2nd <length>

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#shadow-offset-y>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#shadow-offset-y>`__

      -  3rd <length [0,∞]>

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#shadow-blur-radius>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#shadow-blur-radius>`__

      -  4th <length>

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#shadow-spread-distance>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#shadow-spread-distance>`__

      -  `absolute length <https://drafts.csswg.org/css-values-3/#absolute-length>`__
      -  `absolutely positioned element <https://www.w3.org/TR/CSS21/visuren.html#absolutely-positioned>`__
      -  `abstract dimensions <https://drafts.csswg.org/css-writing-modes-4/#abstract-dimensions>`__
      -  `:active <https://www.w3.org/TR/CSS21/selector.html#x35>`__
      -  `activeborder <https://drafts.csswg.org/css-color-3/#activeborder>`__
      -  `activecaption <https://drafts.csswg.org/css-color-3/#activecaption>`__
      -  `active duration <https://drafts.csswg.org/css-animations-1/#active-duration>`__
      -  `active (pseudo-class) <https://www.w3.org/TR/CSS21/selector.html#x35>`__
      -  `actual value <https://drafts.csswg.org/css-cascade-4/#actual-value>`__
      -  `additive tuple <https://drafts.csswg.org/css-counter-styles-3/#additive-tuple>`__
      -  `adjoining margins <https://www.w3.org/TR/CSS21/box.html#x28>`__
      -  `advance measure <https://drafts.csswg.org/css-values-3/#length-advance-measure>`__
      -  :after

         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#x5>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/selector.html#x59>`__

      -  `after <https://www.w3.org/TR/CSS21/generate.html#x5>`__
      -  `after-change style <https://drafts.csswg.org/css-transitions-1/#after-change-style>`__
      -  `aliceblue <https://drafts.csswg.org/css-color-3/#aliceblue>`__
      -  `alignment baseline <https://drafts.csswg.org/css-align-3/#alignment-baseline>`__
      -  `alignment container <https://drafts.csswg.org/css-align-3/#alignment-container>`__
      -  `alignment context <https://drafts.csswg.org/css-align-3/#shared-alignment-context>`__
      -  `alignment subject <https://drafts.csswg.org/css-align-3/#alignment-subject>`__
      -  `'all' media group <https://www.w3.org/TR/CSS21/media.html#all-media-group>`__
      -  `alphabetic baseline <https://drafts.csswg.org/css-writing-modes-4/#alphabetic-baseline>`__
      -  `<alphavalue> <https://drafts.csswg.org/css-color-3/#alphavalue-def>`__
      -  `ambiguous image url <https://drafts.csswg.org/css-images-3/#css-ambiguous-image-url>`__
      -  `an+b <https://drafts.csswg.org/css-syntax-3/#anb>`__
      -  `ancestor <https://www.w3.org/TR/CSS21/conform.html#ancestor>`__
      -  `anchor <https://drafts.csswg.org/css-values-3/#anchor-unit>`__
      -  `anchor unit <https://drafts.csswg.org/css-values-3/#anchor-unit>`__
      -  `<angle> <https://www.w3.org/TR/CSS21/aural.html#value-def-angle>`__
      -  `animation origin <https://drafts.csswg.org/css-cascade-4/#cascade-origin-animation>`__
      -  `animation-tainted <https://drafts.csswg.org/css-variables-1/#animation-tainted>`__
      -  anonymous

         -  `in css-display-3, for CSS <https://drafts.csswg.org/css-display-3/#anonymous>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/visuren.html#x9>`__

      -  `anonymous box <https://drafts.csswg.org/css-display-3/#anonymous>`__
      -  `anonymous inline boxes <https://www.w3.org/TR/CSS21/visuren.html#x14>`__
      -  `antiquewhite <https://drafts.csswg.org/css-color-3/#antiquewhite>`__
      -  `apply to <https://drafts.csswg.org/css-cascade-4/#apply>`__
      -  `appworkspace <https://drafts.csswg.org/css-color-3/#appworkspace>`__
      -  `aqua <https://drafts.csswg.org/css-color-3/#aqua>`__
      -  `aquamarine <https://drafts.csswg.org/css-color-3/#aquamarine>`__
      -  `are a valid escape <https://drafts.csswg.org/css-syntax-3/#check-if-two-code-points-are-a-valid-escape>`__
      -  `aspect value <https://drafts.csswg.org/css-fonts-4/#aspect-value>`__
      -  `atomic inline <https://drafts.csswg.org/css-display-3/#atomic-inline>`__
      -  `atomic inline box <https://drafts.csswg.org/css-display-3/#atomic-inline>`__
      -  `atomic inline-level box <https://www.w3.org/TR/CSS21/visuren.html#x13>`__
      -  `at-rule <https://drafts.csswg.org/css-syntax-3/#at-rule>`__
      -  `attr() <https://www.w3.org/TR/CSS21/generate.html#x18>`__
      -  `attribute <https://www.w3.org/TR/CSS21/conform.html#attribute>`__
      -  `'audio' media group <https://www.w3.org/TR/CSS21/media.html#audio-media-group>`__
      -  `auditory icon <https://www.w3.org/TR/CSS21/aural.html#x0>`__
      -  `augmented grid <https://drafts.csswg.org/css-grid-1/#augmented-grid>`__
      -  `aural box model <https://drafts.csswg.org/css-speech-1/#aural-box-model>`__
      -  `author <https://www.w3.org/TR/CSS21/conform.html#author>`__
      -  `authoring tool <https://www.w3.org/TR/CSS21/conform.html#authoring>`__
      -  `author origin <https://drafts.csswg.org/css-cascade-4/#cascade-origin-author>`__
      -  `author-origin <https://drafts.csswg.org/css-cascade-4/#cascade-origin-author>`__
      -  `author presentational hint origin <https://drafts.csswg.org/css-cascade-4/#author-presentational-hint-origin>`__
      -  `author style sheet <https://drafts.csswg.org/css-cascade-4/#cascade-origin-author>`__
      -  `automatic column position <https://drafts.csswg.org/css-grid-1/#automatic-grid-position>`__
      -  `automatic grid position <https://drafts.csswg.org/css-grid-1/#automatic-grid-position>`__
      -  `automatic numbering <https://www.w3.org/TR/CSS21/generate.html#x1>`__
      -  `automatic placement <https://drafts.csswg.org/css-grid-1/#auto-placement>`__
      -  `automatic position <https://drafts.csswg.org/css-grid-1/#automatic-grid-position>`__
      -  `automatic row position <https://drafts.csswg.org/css-grid-1/#automatic-grid-position>`__
      -  `auto-placement <https://drafts.csswg.org/css-grid-1/#auto-placement>`__
      -  `auto-placement cursor <https://drafts.csswg.org/css-grid-1/#auto-placement-cursor>`__
      -  `available font faces <https://drafts.csswg.org/css-font-loading-3/#available-font-faces>`__
      -  `available grid space <https://drafts.csswg.org/css-grid-1/#available-grid-space>`__
      -  `avoid break values <https://drafts.csswg.org/css-break-3/#avoid-break-values>`__
      -  `axis-lock <https://drafts.csswg.org/css-scroll-snap-1/#axis-lock>`__
      -  `axis value <https://drafts.csswg.org/css-scroll-snap-1/#axis-value>`__
      -  `azure <https://drafts.csswg.org/css-color-3/#azure>`__
      -  `backdrop <https://drafts.fxtf.org/compositing-1/#backdrop>`__
      -  `background <https://drafts.csswg.org/css-color-3/#background>`__
      -  `background painting area <https://drafts.csswg.org/css-backgrounds-3/#background-painting-area>`__
      -  `background positioning area <https://drafts.csswg.org/css-backgrounds-3/#background-positioning-area>`__
      -  `backslash escapes <https://www.w3.org/TR/CSS21/syndata.html#escaped-characters>`__
      -  `baseline <https://drafts.csswg.org/css-writing-modes-4/#baseline>`__
      -  `baseline alignment <https://drafts.csswg.org/css-align-3/#baseline-alignment>`__
      -  `baseline alignment preference <https://drafts.csswg.org/css-align-3/#baseline-alignment-preference>`__
      -  `baseline content-alignment <https://drafts.csswg.org/css-align-3/#baseline-content-alignment>`__
      -  `baseline self-alignment <https://drafts.csswg.org/css-align-3/#baseline-self-alignment>`__
      -  `baseline set <https://drafts.csswg.org/css-align-3/#baseline-set>`__
      -  `baseline-sharing group <https://drafts.csswg.org/css-align-3/#baseline-sharing-group>`__
      -  `baseline table <https://drafts.csswg.org/css-writing-modes-4/#baseline-table>`__
      -  `base size <https://drafts.csswg.org/css-grid-1/#base-size>`__
      -  `bearing angle <https://drafts.csswg.org/css-values-3/#bearing-angle>`__
      -  :before

         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#x2>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/selector.html#x57>`__

      -  `before <https://www.w3.org/TR/CSS21/generate.html#x2>`__
      -  `before-change style <https://drafts.csswg.org/css-transitions-1/#before-change-style>`__
      -  `before flag <https://drafts.csswg.org/css-easing-1/#before-flag>`__
      -  `beige <https://drafts.csswg.org/css-color-3/#beige>`__
      -  `bfc <https://drafts.csswg.org/css-display-3/#bfc>`__
      -  `bidi formatting characters <https://drafts.csswg.org/css-text-3/#bidi-formatting-characters>`__
      -  `bidi-isolate <https://drafts.csswg.org/css-writing-modes-4/#bidi-isolate>`__
      -  `bidi-isolated <https://drafts.csswg.org/css-writing-modes-4/#bidi-isolate>`__
      -  `bidi isolation <https://drafts.csswg.org/css-writing-modes-4/#bidi-isolate>`__
      -  `bidi paragraph <https://drafts.csswg.org/css-writing-modes-4/#bidi-paragraph>`__
      -  `bidirectionality <https://drafts.csswg.org/css-writing-modes-4/#bidirectionality>`__
      -  `bidirectionality (bidi) <https://www.w3.org/TR/CSS21/visuren.html#x45>`__
      -  `bi-orientational <https://drafts.csswg.org/css-writing-modes-4/#bi-orientational>`__
      -  `bi-orientational transform <https://drafts.csswg.org/css-writing-modes-4/#bi-orientational-transform>`__
      -  `bisque <https://drafts.csswg.org/css-color-3/#bisque>`__
      -  `'bitmap' media group <https://www.w3.org/TR/CSS21/media.html#bitmap-media-group>`__
      -  `black <https://drafts.csswg.org/css-color-3/#black>`__
      -  `blanchedalmond <https://drafts.csswg.org/css-color-3/#blanchedalmond>`__
      -  `()-block <https://drafts.csswg.org/css-syntax-3/#paren-block>`__
      -  `[]-block <https://drafts.csswg.org/css-syntax-3/#square-block>`__
      -  `block <https://drafts.csswg.org/css-display-3/#block>`__
      -  `{}-block <https://drafts.csswg.org/css-syntax-3/#curly-block>`__
      -  `block at-rule <https://drafts.csswg.org/css-syntax-3/#block-at-rule>`__
      -  `block axis <https://drafts.csswg.org/css-writing-modes-4/#block-axis>`__
      -  `block-axis <https://drafts.csswg.org/css-writing-modes-4/#block-axis>`__
      -  `block box <https://drafts.csswg.org/css-display-3/#block-box>`__
      -  `block container <https://drafts.csswg.org/css-display-3/#block-container>`__
      -  `block container box <https://drafts.csswg.org/css-display-3/#block-container>`__
      -  `block dimension <https://drafts.csswg.org/css-writing-modes-4/#block-dimension>`__
      -  `block end <https://drafts.csswg.org/css-writing-modes-4/#block-end>`__
      -  `block-end <https://drafts.csswg.org/css-writing-modes-4/#block-end>`__
      -  `block flow direction <https://drafts.csswg.org/css-writing-modes-4/#block-flow-direction>`__
      -  `block formatting context <https://drafts.csswg.org/css-display-3/#block-formatting-context>`__
      -  `block formatting context root <https://drafts.csswg.org/css-display-3/#block-formatting-context-root>`__
      -  `blockification <https://drafts.csswg.org/css-display-3/#blockify>`__
      -  `blockify <https://drafts.csswg.org/css-display-3/#blockify>`__
      -  `block layout <https://drafts.csswg.org/css-display-3/#block-layout>`__
      -  `block-level <https://drafts.csswg.org/css-display-3/#block-level>`__
      -  `block-level box <https://drafts.csswg.org/css-display-3/#block-level-box>`__
      -  `block-level content <https://drafts.csswg.org/css-display-3/#block-level>`__
      -  `block-level element <https://www.w3.org/TR/CSS21/visuren.html#block-level>`__
      -  `block scripts <https://drafts.csswg.org/css-text-3/#block-scripts>`__
      -  `block size <https://drafts.csswg.org/css-writing-modes-4/#block-size>`__
      -  `block-size <https://drafts.csswg.org/css-writing-modes-4/#block-size>`__
      -  `block start <https://drafts.csswg.org/css-writing-modes-4/#block-start>`__
      -  `block-start <https://drafts.csswg.org/css-writing-modes-4/#block-start>`__
      -  `blue <https://drafts.csswg.org/css-color-3/#blue>`__
      -  `blueviolet <https://drafts.csswg.org/css-color-3/#blueviolet>`__
      -  blur radius

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#blur-radius>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#box-shadow-blur-radius>`__

      -  `boolean context <https://drafts.csswg.org/mediaqueries-4/#boolean-context>`__
      -  `border box <https://www.w3.org/TR/CSS21/box.html#x14>`__
      -  `border edge <https://www.w3.org/TR/CSS21/box.html#border-edge>`__
      -  `border image area <https://drafts.csswg.org/css-backgrounds-3/#border-image-area>`__
      -  `border::of a box <https://www.w3.org/TR/CSS21/box.html#box-border-area>`__
      -  `border radius <https://drafts.csswg.org/css-backgrounds-3/#border-radii>`__
      -  `<border-style> <https://www.w3.org/TR/CSS21/box.html#value-def-border-style>`__
      -  `bottom <https://drafts.csswg.org/css-writing-modes-4/#physical-bottom>`__
      -  `box <https://drafts.csswg.org/css-display-3/#box>`__
      -  `box alignment properties <https://drafts.csswg.org/css-align-3/#box-alignment-properties>`__
      -  `box::border <https://www.w3.org/TR/CSS21/box.html#box-border-area>`__
      -  `box::content <https://www.w3.org/TR/CSS21/box.html#box-content-area>`__
      -  `box::content height <https://www.w3.org/TR/CSS21/box.html#content-height>`__
      -  `box::content width <https://www.w3.org/TR/CSS21/box.html#content-width>`__
      -  `box-corner <https://drafts.csswg.org/css-counter-styles-3/#box-corner>`__
      -  `box fragment <https://drafts.csswg.org/css-break-3/#box-fragment>`__
      -  `box::margin <https://www.w3.org/TR/CSS21/box.html#box-margin-area>`__
      -  `box::overflow <https://www.w3.org/TR/CSS21/visufx.html#x0>`__
      -  `box::padding <https://www.w3.org/TR/CSS21/box.html#box-padding-area>`__
      -  `box tree <https://drafts.csswg.org/css-display-3/#box-tree>`__
      -  `break <https://www.w3.org/TR/css-break-3/#break>`__
      -  `brown <https://drafts.csswg.org/css-color-3/#brown>`__
      -  `burlywood <https://drafts.csswg.org/css-color-3/#burlywood>`__
      -  `buttonface <https://drafts.csswg.org/css-color-3/#buttonface>`__
      -  `buttonhighlight <https://drafts.csswg.org/css-color-3/#buttonhighlight>`__
      -  `buttonshadow <https://drafts.csswg.org/css-color-3/#buttonshadow>`__
      -  `buttontext <https://drafts.csswg.org/css-color-3/#buttontext>`__
      -  `cadetblue <https://drafts.csswg.org/css-color-3/#cadetblue>`__
      -  `cancel <https://drafts.csswg.org/css-transitions-1/#transition-cancel>`__
      -  `canonical unit <https://drafts.csswg.org/css-values-3/#canonical-unit>`__
      -  `canvas <https://www.w3.org/TR/CSS21/intro.html#canvas>`__
      -  `canvas background <https://drafts.csswg.org/css-backgrounds-3/#canvas-background>`__
      -  `canvas surface <https://drafts.csswg.org/css-backgrounds-3/#canvas-surface>`__
      -  `captiontext <https://drafts.csswg.org/css-color-3/#captiontext>`__
      -  `captures snap positions <https://drafts.csswg.org/css-scroll-snap-1/#captures-snap-positions>`__
      -  `cascade <https://drafts.csswg.org/css-cascade-4/#cascade>`__
      -  `cascade-dependent keyword <https://drafts.csswg.org/css-cascade-4/#cascade-dependent-keyword>`__
      -  `cascaded independently <https://drafts.csswg.org/css-fonts-4/#cascaded-independently>`__
      -  `cascaded value <https://drafts.csswg.org/css-cascade-4/#cascaded-value>`__
      -  `cascade origin <https://drafts.csswg.org/css-cascade-4/#origin>`__
      -  `central baseline <https://drafts.csswg.org/css-writing-modes-4/#central-baseline>`__
      -  `character <https://drafts.csswg.org/css-text-3/#character>`__
      -  `character encoding <https://www.w3.org/TR/CSS21/syndata.html#x50>`__
      -  `character map <https://drafts.csswg.org/css-fonts-4/#character-map>`__
      -  `"@charset" <https://www.w3.org/TR/CSS21/syndata.html#x57>`__
      -  `chartreuse <https://drafts.csswg.org/css-color-3/#chartreuse>`__
      -  `check if three code points would start an ident sequence <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-an-ident-sequence>`__
      -  `check if three code points would start a number <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-a-number>`__
      -  `check if three code points would start a unicode-range <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-a-unicode-range>`__
      -  `check if two code points are a valid escape <https://drafts.csswg.org/css-syntax-3/#check-if-two-code-points-are-a-valid-escape>`__
      -  `child <https://www.w3.org/TR/CSS21/conform.html#child>`__
      -  `child combinator <https://drafts.csswg.org/selectors-3/#child-combinator>`__
      -  `child selector <https://www.w3.org/TR/CSS21/selector.html#x13>`__
      -  `chinese <https://drafts.csswg.org/css-text-3/#writing-system-chinese>`__
      -  `chocolate <https://drafts.csswg.org/css-color-3/#chocolate>`__
      -  `circled-lower-latin <https://drafts.csswg.org/css-counter-styles-3/#circled-lower-latin>`__
      -  `clamp a grid area <https://drafts.csswg.org/css-grid-1/#clamp-a-grid-area>`__
      -  `clearance. <https://www.w3.org/TR/CSS21/visuren.html#clearance>`__
      -  `clipping path <https://drafts.fxtf.org/css-masking-1/#clipping-path>`__
      -  `clipping region <https://drafts.fxtf.org/css-masking-1/#clipping-region>`__
      -  `closest-side <https://drafts.csswg.org/css-shapes-1/#closest-side>`__
      -  `clustered scripts <https://drafts.csswg.org/css-text-3/#clustered-scripts>`__
      -  `collapse <https://www.w3.org/TR/CSS21/box.html#x26>`__
      -  `collapsed <https://drafts.csswg.org/css-display-3/#collapsed>`__
      -  `collapsed flex item <https://drafts.csswg.org/css-flexbox-1/#collapsed-flex-item>`__
      -  `collapsed grid track <https://drafts.csswg.org/css-grid-1/#collapsed-grid-track>`__
      -  `collapsed gutter <https://drafts.csswg.org/css-grid-1/#collapsed-gutter>`__
      -  `collapsed track <https://www.w3.org/TR/css-grid-1/#collapsed-track>`__
      -  `collapse through <https://www.w3.org/TR/CSS21/box.html#x29>`__
      -  `collapsible white space <https://drafts.csswg.org/css-text-3/#collapsible-white-space>`__
      -  `collapsing margin <https://www.w3.org/TR/CSS21/box.html#x27>`__
      -  `<color> <https://drafts.csswg.org/css-color-3/#ltcolorgt>`__
      -  `color <https://drafts.csswg.org/css-color-3/#color1>`__
      -  `color stop <https://drafts.csswg.org/css-images-3/#color-stop>`__
      -  `color stop list <https://drafts.csswg.org/css-images-3/#color-stop-list>`__
      -  `color transition hint <https://drafts.csswg.org/css-images-3/#color-transition-hint>`__
      -  `column box <https://drafts.csswg.org/css-multicol-1/#column-box>`__
      -  `column break <https://drafts.csswg.org/css-break-3/#column-break>`__
      -  `column gap <https://drafts.csswg.org/css-multicol-1/#column-gap>`__
      -  `column height <https://drafts.csswg.org/css-multicol-1/#column-height>`__
      -  `column rule <https://drafts.csswg.org/css-multicol-1/#column-rule>`__
      -  `column width <https://drafts.csswg.org/css-multicol-1/#column-width>`__
      -  `combinator <https://www.w3.org/TR/CSS21/selector.html#combinator>`__
      -  `combinators <https://drafts.csswg.org/selectors-3/#combinators0>`__
      -  `combined duration <https://drafts.csswg.org/css-transitions-1/#transition-combined-duration>`__
      -  `compatible baseline alignment preferences <https://drafts.csswg.org/css-align-3/#compatible-baseline-alignment-preferences>`__
      -  `compatible units <https://drafts.csswg.org/css-values-3/#compatible-units>`__
      -  `complete <https://drafts.csswg.org/css-transitions-1/#dfn-complete>`__
      -  `completed transition <https://drafts.csswg.org/css-transitions-1/#completed-transition>`__
      -  `component value <https://drafts.csswg.org/css-syntax-3/#component-value>`__
      -  `composite face <https://drafts.csswg.org/css-fonts-4/#composite-face>`__
      -  `computed <image> <https://drafts.csswg.org/css-images-3/#computed-image>`__
      -  `computed track list <https://drafts.csswg.org/css-grid-1/#computed-track-list>`__
      -  `computed value <https://drafts.csswg.org/css-cascade-4/#computed-value>`__
      -  `concrete object size <https://drafts.csswg.org/css-images-3/#concrete-object-size>`__
      -  `conditional group rule <https://drafts.csswg.org/css-conditional-3/#conditional-group-rule>`__
      -  `conditional import <https://www.w3.org/TR/CSS21/cascade.html#x9>`__
      -  `conditionally hang <https://drafts.csswg.org/css-text-3/#conditionally-hang>`__
      -  `conformance <https://www.w3.org/TR/CSS21/conform.html#conformance-term>`__
      -  `consecutive <https://www.w3.org/TR/CSS21/tables.html#x21>`__
      -  `constraint rectangle <https://drafts.csswg.org/css-images-3/#constraint-rectangle>`__
      -  `consume a block <https://drafts.csswg.org/css-syntax-3/#consume-a-block>`__
      -  `consume a block's contents <https://drafts.csswg.org/css-syntax-3/#consume-a-blocks-contents>`__
      -  `consume a component value <https://drafts.csswg.org/css-syntax-3/#consume-a-component-value>`__
      -  `consume a declaration <https://drafts.csswg.org/css-syntax-3/#consume-a-declaration>`__
      -  `consume a function <https://drafts.csswg.org/css-syntax-3/#consume-a-function>`__
      -  `consume a list of component values <https://drafts.csswg.org/css-syntax-3/#consume-a-list-of-component-values>`__
      -  `consume a list of declarations <https://www.w3.org/TR/css-syntax-3/#consume-a-list-of-declarations>`__
      -  `consume a list of rules <https://www.w3.org/TR/css-syntax-3/#consume-a-list-of-rules>`__
      -  `consume an at-rule <https://drafts.csswg.org/css-syntax-3/#consume-an-at-rule>`__
      -  `consume an escaped code point <https://drafts.csswg.org/css-syntax-3/#consume-an-escaped-code-point>`__
      -  `consume an ident-like token <https://drafts.csswg.org/css-syntax-3/#consume-an-ident-like-token>`__
      -  `consume an ident sequence <https://drafts.csswg.org/css-syntax-3/#consume-an-ident-sequence>`__
      -  `consume a number <https://drafts.csswg.org/css-syntax-3/#consume-a-number>`__
      -  `consume a numeric token <https://drafts.csswg.org/css-syntax-3/#consume-a-numeric-token>`__
      -  `consume a qualified rule <https://drafts.csswg.org/css-syntax-3/#consume-a-qualified-rule>`__
      -  `consume a simple block <https://drafts.csswg.org/css-syntax-3/#consume-a-simple-block>`__
      -  `consume a string token <https://drafts.csswg.org/css-syntax-3/#consume-a-string-token>`__
      -  `consume a style block's contents <https://www.w3.org/TR/css-syntax-3/#consume-a-style-blocks-contents>`__
      -  `consume a stylesheet's contents <https://drafts.csswg.org/css-syntax-3/#consume-a-stylesheets-contents>`__
      -  consume a token

         -  `in css-syntax-3 <https://www.w3.org/TR/css-syntax-3/#consume-a-token>`__
         -  `in css-syntax-3, for token stream <https://drafts.csswg.org/css-syntax-3/#token-stream-consume-a-token>`__
         -  `in css-syntax-3, for tokenizer <https://drafts.csswg.org/css-syntax-3/#tokenizer-consume-a-token>`__

      -  `consume a unicode-range token <https://drafts.csswg.org/css-syntax-3/#consume-a-unicode-range-token>`__
      -  `consume a url token <https://drafts.csswg.org/css-syntax-3/#consume-a-url-token>`__
      -  `consume comments <https://drafts.csswg.org/css-syntax-3/#consume-comments>`__
      -  `consume the next input token <https://www.w3.org/TR/css-syntax-3/#consume-the-next-input-token>`__
      -  `consume the remnants of a bad declaration <https://drafts.csswg.org/css-syntax-3/#consume-the-remnants-of-a-bad-declaration>`__
      -  `consume the remnants of a bad url <https://drafts.csswg.org/css-syntax-3/#consume-the-remnants-of-a-bad-url>`__
      -  `consume the value of a unicode-range descriptor <https://drafts.csswg.org/css-syntax-3/#consume-the-value-of-a-unicode-range-descriptor>`__
      -  `contain constraint <https://drafts.csswg.org/css-images-3/#contain-constraint>`__
      -  `containing block <https://drafts.csswg.org/css-display-3/#containing-block>`__
      -  `containing block chain <https://drafts.csswg.org/css-display-3/#containing-block-chain>`__
      -  `containing block for all descendants <https://drafts.csswg.org/css-transforms-1/#containing-block-for-all-descendants>`__
      -  `containing block::initial <https://www.w3.org/TR/CSS21/visudet.html#x1>`__
      -  `containment <https://drafts.csswg.org/css-contain-1/#containment>`__
      -  `content <https://www.w3.org/TR/CSS21/conform.html#content>`__
      -  content-based minimum size

         -  `in css-flexbox-1 <https://drafts.csswg.org/css-flexbox-1/#content-based-minimum-size>`__
         -  `in css-grid-1 <https://drafts.csswg.org/css-grid-1/#content-based-minimum-size>`__

      -  `content box <https://www.w3.org/TR/CSS21/box.html#x10>`__
      -  `content distribution <https://drafts.csswg.org/css-align-3/#content-distribute>`__
      -  `content-distribution <https://drafts.csswg.org/css-align-3/#content-distribute>`__
      -  `content-distribution properties <https://drafts.csswg.org/css-align-3/#content-distribution-properties>`__
      -  `content edge <https://www.w3.org/TR/CSS21/box.html#content-edge>`__
      -  `content language <https://drafts.csswg.org/css-text-3/#content-language>`__
      -  `content::of a box <https://www.w3.org/TR/CSS21/box.html#box-content-area>`__
      -  `content::rendered <https://www.w3.org/TR/CSS21/conform.html#rendered-content>`__
      -  content size suggestion

         -  `in css-flexbox-1 <https://drafts.csswg.org/css-flexbox-1/#content-size-suggestion>`__
         -  `in css-grid-1 <https://drafts.csswg.org/css-grid-1/#content-size-suggestion>`__

      -  `content writing system <https://drafts.csswg.org/css-text-3/#content-writing-system>`__
      -  `continuous media <https://drafts.csswg.org/mediaqueries-4/#continuous-media>`__
      -  `'continuous' media group <https://www.w3.org/TR/CSS21/media.html#continuous-media-group>`__
      -  `convert a string to a number <https://www.w3.org/TR/css-syntax-3/#convert-a-string-to-a-number>`__
      -  `coordinated self-alignment preference <https://drafts.csswg.org/css-align-3/#coordinated-self-alignment-preference>`__
      -  `coral <https://drafts.csswg.org/css-color-3/#coral>`__
      -  `cornflowerblue <https://drafts.csswg.org/css-color-3/#cornflowerblue>`__
      -  `cornsilk <https://drafts.csswg.org/css-color-3/#cornsilk>`__
      -  `<counter> <https://www.w3.org/TR/CSS21/syndata.html#value-def-counter>`__
      -  `counter() <https://www.w3.org/TR/CSS21/syndata.html#x46>`__
      -  `counters <https://www.w3.org/TR/CSS21/generate.html#counters>`__
      -  `counter style <https://drafts.csswg.org/css-counter-styles-3/#counter-style>`__
      -  `counter symbol <https://drafts.csswg.org/css-counter-styles-3/#counter-symbol>`__
      -  `cover constraint <https://drafts.csswg.org/css-images-3/#cover-constraint>`__
      -  `crimson <https://drafts.csswg.org/css-color-3/#crimson>`__
      -  `cross axis <https://drafts.csswg.org/css-flexbox-1/#cross-axis>`__
      -  `cross-axis <https://drafts.csswg.org/css-flexbox-1/#cross-axis>`__
      -  `cross-axis baseline set <https://drafts.csswg.org/css-flexbox-1/#cross-axis-baseline>`__
      -  `cross dimension <https://drafts.csswg.org/css-flexbox-1/#cross-dimension>`__
      -  `cross-end <https://drafts.csswg.org/css-flexbox-1/#cross-end>`__
      -  `cross size <https://drafts.csswg.org/css-flexbox-1/#cross-size>`__
      -  `cross-size <https://www.w3.org/TR/css-flexbox-1/#cross-size>`__
      -  `cross size property <https://drafts.csswg.org/css-flexbox-1/#cross-size-property>`__
      -  `cross-start <https://drafts.csswg.org/css-flexbox-1/#cross-start>`__
      -  `css bracketed range notation <https://drafts.csswg.org/css-values-3/#css-bracketed-range-notation>`__
      -  `css-connected <https://drafts.csswg.org/css-font-loading-3/#css-connected>`__
      -  `css feature queries <https://drafts.csswg.org/css-conditional-3/#css-feature-queries>`__
      -  `cssfontfacerule <https://drafts.csswg.org/css-fonts-4/#cssfontfacerule-interface>`__
      -  `cssfontfeaturevaluesrule <https://drafts.csswg.org/css-fonts-4/#cssfontfeaturevaluesrule-dfn>`__
      -  `css ident <https://drafts.csswg.org/css-values-3/#css-css-identifier>`__
      -  `css identifier <https://drafts.csswg.org/css-values-3/#css-css-identifier>`__
      -  `css ident sequence <https://drafts.csswg.org/css-syntax-3/#ident-sequence>`__
      -  `css qualified name <https://drafts.csswg.org/css-namespaces-3/#css-qualified-name>`__
      -  `css-wide keywords <https://drafts.csswg.org/css-values-3/#css-wide-keywords>`__
      -  `cubic bézier easing function <https://drafts.csswg.org/css-easing-1/#cubic-bzier-easing-function>`__
      -  `currentcolor <https://drafts.csswg.org/css-color-3/#currentColor-def>`__
      -  `current input code point <https://drafts.csswg.org/css-syntax-3/#current-input-code-point>`__
      -  `current input token <https://www.w3.org/TR/css-syntax-3/#current-input-token>`__
      -  `current transformation matrix <https://drafts.csswg.org/css-transforms-1/#current-transformation-matrix>`__
      -  `current value <https://drafts.csswg.org/css-transitions-1/#current-value>`__
      -  `cursive <https://www.w3.org/TR/CSS21/fonts.html#cursive-def>`__
      -  `cursive script <https://drafts.csswg.org/css-text-3/#cursive-script>`__
      -  `custom property <https://drafts.csswg.org/css-variables-1/#custom-property>`__
      -  `cyan <https://drafts.csswg.org/css-color-3/#cyan>`__
      -  `darkblue <https://drafts.csswg.org/css-color-3/#darkblue>`__
      -  `darkcyan <https://drafts.csswg.org/css-color-3/#darkcyan>`__
      -  `darkgoldenrod <https://drafts.csswg.org/css-color-3/#darkgoldenrod>`__
      -  `darkgray <https://drafts.csswg.org/css-color-3/#darkgray>`__
      -  `darkgreen <https://drafts.csswg.org/css-color-3/#darkgreen>`__
      -  `darkgrey <https://drafts.csswg.org/css-color-3/#darkgrey>`__
      -  `darkkhaki <https://drafts.csswg.org/css-color-3/#darkkhaki>`__
      -  `darkmagenta <https://drafts.csswg.org/css-color-3/#darkmagenta>`__
      -  `darkolivegreen <https://drafts.csswg.org/css-color-3/#darkolivegreen>`__
      -  `darkorange <https://drafts.csswg.org/css-color-3/#darkorange>`__
      -  `darkorchid <https://drafts.csswg.org/css-color-3/#darkorchid>`__
      -  `darkred <https://drafts.csswg.org/css-color-3/#darkred>`__
      -  `darksalmon <https://drafts.csswg.org/css-color-3/#darksalmon>`__
      -  `darkseagreen <https://drafts.csswg.org/css-color-3/#darkseagreen>`__
      -  `darkslateblue <https://drafts.csswg.org/css-color-3/#darkslateblue>`__
      -  `darkslategray <https://drafts.csswg.org/css-color-3/#darkslategray>`__
      -  `darkslategrey <https://drafts.csswg.org/css-color-3/#darkslategrey>`__
      -  `darkturquoise <https://drafts.csswg.org/css-color-3/#darkturquoise>`__
      -  `darkviolet <https://drafts.csswg.org/css-color-3/#darkviolet>`__
      -  declaration

         -  `in css-syntax-3, for CSS <https://drafts.csswg.org/css-syntax-3/#declaration>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/syndata.html#x19>`__

      -  `declaration block <https://www.w3.org/TR/CSS21/syndata.html#x14>`__
      -  `declared <https://drafts.csswg.org/selectors-3/#declared>`__
      -  `declared value <https://drafts.csswg.org/css-cascade-4/#declared-value>`__
      -  `decode bytes <https://drafts.csswg.org/css-syntax-3/#css-decode-bytes>`__
      -  `decorating box <https://drafts.csswg.org/css-text-decor-3/#decorating-box>`__
      -  `deeppink <https://drafts.csswg.org/css-color-3/#deeppink>`__
      -  `deepskyblue <https://drafts.csswg.org/css-color-3/#deepskyblue>`__
      -  `default face <https://drafts.csswg.org/css-fonts-4/#default-face>`__
      -  `default namespace <https://drafts.csswg.org/css-namespaces-3/#default-namespace>`__
      -  `default object size <https://drafts.csswg.org/css-images-3/#default-object-size>`__
      -  `default sizing algorithm <https://drafts.csswg.org/css-images-3/#default-sizing-algorithm>`__
      -  `default style sheet <https://www.w3.org/TR/CSS21/cascade.html#default-style-sheet>`__
      -  `definite <https://drafts.csswg.org/css-flexbox-1/#definite>`__
      -  `definite column position <https://drafts.csswg.org/css-grid-1/#definite-grid-position>`__
      -  `definite column span <https://drafts.csswg.org/css-grid-1/#definite-grid-span>`__
      -  `definite grid position <https://drafts.csswg.org/css-grid-1/#definite-grid-position>`__
      -  `definite grid span <https://drafts.csswg.org/css-grid-1/#definite-grid-span>`__
      -  `definite position <https://drafts.csswg.org/css-grid-1/#definite-grid-position>`__
      -  `definite row position <https://drafts.csswg.org/css-grid-1/#definite-grid-position>`__
      -  `definite row span <https://drafts.csswg.org/css-grid-1/#definite-grid-span>`__
      -  `definite size <https://drafts.csswg.org/css-flexbox-1/#definite>`__
      -  `definite span <https://drafts.csswg.org/css-grid-1/#definite-grid-span>`__
      -  `descendant <https://www.w3.org/TR/CSS21/conform.html#descendant>`__
      -  `descendant-selectors <https://www.w3.org/TR/CSS21/selector.html#x12>`__
      -  `descriptor <https://drafts.csswg.org/css-syntax-3/#css-descriptor>`__
      -  `descriptor declarations <https://drafts.csswg.org/css-syntax-3/#css-descriptor-declarations>`__
      -  `destination <https://drafts.fxtf.org/css-masking-1/#destination>`__
      -  `determine the fallback encoding <https://drafts.csswg.org/css-syntax-3/#determine-the-fallback-encoding>`__
      -  `device pixel <https://drafts.csswg.org/css-values-3/#device-pixel>`__
      -  `dice <https://drafts.csswg.org/css-counter-styles-3/#dice>`__
      -  `digit <https://drafts.csswg.org/css-syntax-3/#digit>`__
      -  `dimension <https://drafts.csswg.org/css-values-3/#dimension>`__
      -  `dimgray <https://drafts.csswg.org/css-color-3/#dimgray>`__
      -  `dimgrey <https://drafts.csswg.org/css-color-3/#dimgrey>`__
      -  `directional embedding <https://drafts.csswg.org/css-writing-modes-4/#directional-embedding>`__
      -  `directional override <https://drafts.csswg.org/css-writing-modes-4/#directional-override>`__
      -  `discard a mark <https://drafts.csswg.org/css-syntax-3/#token-stream-discard-a-mark>`__
      -  `discard a token <https://drafts.csswg.org/css-syntax-3/#token-stream-discard-a-token>`__
      -  `discard whitespace <https://drafts.csswg.org/css-syntax-3/#token-stream-discard-whitespace>`__
      -  `display type <https://drafts.csswg.org/css-display-3/#display-type>`__
      -  `distributed alignment <https://drafts.csswg.org/css-align-3/#distributed-alignment>`__
      -  `distribute extra space <https://drafts.csswg.org/css-grid-1/#distribute-extra-space>`__
      -  document

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#document>`__
         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#document>`__
         -  `in css-style-attr <https://drafts.csswg.org/css-style-attr/#document>`__

      -  `document language <https://www.w3.org/TR/CSS21/conform.html#doclanguage>`__
      -  `document order <https://drafts.csswg.org/css-display-3/#document-order>`__
      -  `document tree <https://www.w3.org/TR/CSS21/conform.html#doctree>`__
      -  `document white space <https://drafts.csswg.org/css-text-3/#white-space>`__
      -  `document white space characters <https://drafts.csswg.org/css-text-3/#white-space>`__
      -  `dodgerblue <https://drafts.csswg.org/css-color-3/#dodgerblue>`__
      -  `dominant baseline <https://drafts.csswg.org/css-writing-modes-4/#dominant-baseline>`__
      -  `easing function <https://drafts.csswg.org/css-easing-1/#easing-function>`__
      -  `effective character map <https://drafts.csswg.org/css-fonts-4/#effective-character-map>`__
      -  element

         -  `in css-display-3, for CSS <https://drafts.csswg.org/css-display-3/#elements>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/conform.html#element>`__

      -  `element::following <https://www.w3.org/TR/CSS21/conform.html#following>`__
      -  `element::preceding <https://www.w3.org/TR/CSS21/conform.html#preceding>`__
      -  `element tree <https://drafts.csswg.org/css-display-3/#element-tree>`__
      -  `emoji presentation participating code points <https://drafts.csswg.org/css-fonts-4/#emoji-presentation-participating-code-points>`__
      -  empty

         -  `in css-syntax-3, for token stream <https://drafts.csswg.org/css-syntax-3/#token-stream-empty>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/conform.html#empty>`__

      -  `em (unit) <https://www.w3.org/TR/CSS21/syndata.html#em-width>`__
      -  `encapsulation contexts <https://drafts.csswg.org/css-cascade-4/#encapsulation-contexts>`__
      -  `end <https://drafts.csswg.org/css-writing-modes-4/#css-end>`__
      -  `ending point <https://drafts.csswg.org/css-images-3/#ending-point>`__
      -  `ending shape <https://drafts.csswg.org/css-images-3/#ending-shape>`__
      -  `ending token <https://www.w3.org/TR/css-syntax-3/#ending-token>`__
      -  `endmost <https://drafts.csswg.org/css-writing-modes-4/#css-end>`__
      -  `end time <https://drafts.csswg.org/css-transitions-1/#transition-end-time>`__
      -  `end value <https://drafts.csswg.org/css-transitions-1/#transition-end-value>`__
      -  `environment encoding <https://drafts.csswg.org/css-syntax-3/#environment-encoding>`__
      -  `eof code point <https://drafts.csswg.org/css-syntax-3/#eof-code-point>`__
      -  `escaping <https://drafts.csswg.org/css-syntax-3/#escape-codepoint>`__
      -  `establish an independent formatting context <https://drafts.csswg.org/css-display-3/#establish-an-independent-formatting-context>`__
      -  `establish an orthogonal flow <https://drafts.csswg.org/css-writing-modes-4/#establish-an-orthogonal-flow>`__
      -  `established an independent formatting context <https://drafts.csswg.org/css-display-3/#establish-an-independent-formatting-context>`__
      -  `establishes an independent formatting context <https://drafts.csswg.org/css-display-3/#establish-an-independent-formatting-context>`__
      -  `establishing an independent formatting context <https://drafts.csswg.org/css-display-3/#establish-an-independent-formatting-context>`__
      -  `exact matching <https://www.w3.org/TR/CSS21/selector.html#x14>`__
      -  `expanded name <https://drafts.csswg.org/css-namespaces-3/#expanded-name>`__
      -  `explicit grid <https://drafts.csswg.org/css-grid-1/#explicit-grid>`__
      -  `explicit grid column <https://drafts.csswg.org/css-grid-1/#explicit-grid-track>`__
      -  `explicit grid properties <https://drafts.csswg.org/css-grid-1/#explicit-grid-properties>`__
      -  `explicit grid row <https://drafts.csswg.org/css-grid-1/#explicit-grid-track>`__
      -  `explicit grid track <https://drafts.csswg.org/css-grid-1/#explicit-grid-track>`__
      -  `explicitly-assigned line name <https://drafts.csswg.org/css-grid-1/#explicitly-assigned-line-name>`__
      -  `ex (unit) <https://www.w3.org/TR/CSS21/syndata.html#ex>`__
      -  `fallback alignment <https://drafts.csswg.org/css-align-3/#fallback-alignment>`__
      -  `false in the negative range <https://drafts.csswg.org/mediaqueries-4/#false-in-the-negative-range>`__
      -  `fantasy <https://www.w3.org/TR/CSS21/fonts.html#fantasy-def>`__
      -  `farthest-side <https://drafts.csswg.org/css-shapes-1/#farthest-side>`__
      -  `fetch a font <https://drafts.csswg.org/css-fonts-4/#fetch-a-font>`__
      -  `fetch an @import <https://drafts.csswg.org/css-cascade-4/#fetch-an-import>`__
      -  `fictional tag sequence <https://www.w3.org/TR/CSS21/selector.html#x48>`__
      -  `filter code points <https://drafts.csswg.org/css-syntax-3/#css-filter-code-points>`__
      -  `filtered code points <https://drafts.csswg.org/css-syntax-3/#css-filter-code-points>`__
      -  `filter primitive <https://drafts.fxtf.org/filter-effects-1/#filter-primitive>`__
      -  `filter primitive attributes <https://drafts.fxtf.org/filter-effects-1/#filter-primitive-attributes>`__
      -  `filter primitive subregion <https://drafts.fxtf.org/filter-effects-1/#filter-primitive-subregion>`__
      -  `filter primitive tree <https://drafts.fxtf.org/filter-effects-1/#filter-primitive-tree>`__
      -  `filter region <https://drafts.fxtf.org/filter-effects-1/#filter-region>`__
      -  `find the matching font faces <https://drafts.csswg.org/css-font-loading-3/#find-the-matching-font-faces>`__
      -  `fire a font load event <https://drafts.csswg.org/css-font-loading-3/#fire-a-font-load-event>`__
      -  `firebrick <https://drafts.csswg.org/css-color-3/#firebrick>`__
      -  `:first <https://www.w3.org/TR/CSS21/page.html#x10>`__
      -  `first available font <https://drafts.csswg.org/css-fonts-4/#first-available-font>`__
      -  `first-baseline alignment <https://drafts.csswg.org/css-align-3/#first-baseline-alignment>`__
      -  `first-baseline content-alignment <https://drafts.csswg.org/css-align-3/#baseline-content-alignment>`__
      -  `first baselines <https://drafts.csswg.org/css-align-3/#first-baseline-set>`__
      -  `first-baseline self-alignment <https://drafts.csswg.org/css-align-3/#baseline-self-alignment>`__
      -  `first baseline set <https://drafts.csswg.org/css-align-3/#first-baseline-set>`__
      -  `:first-child <https://www.w3.org/TR/CSS21/selector.html#x24>`__
      -  `first-child <https://www.w3.org/TR/CSS21/selector.html#x24>`__
      -  `first cross-axis baseline set <https://drafts.csswg.org/css-flexbox-1/#cross-axis-baseline>`__
      -  `first formatted line <https://drafts.csswg.org/selectors-3/#first-formatted-line0>`__
      -  `:first-letter <https://www.w3.org/TR/CSS21/selector.html#x50>`__
      -  `first-letter <https://www.w3.org/TR/CSS21/selector.html#x50>`__
      -  `:first-line <https://www.w3.org/TR/CSS21/selector.html#first-line-pseudo>`__
      -  `first-line <https://www.w3.org/TR/CSS21/selector.html#first-line-pseudo>`__
      -  `first main-axis baseline set <https://drafts.csswg.org/css-flexbox-1/#main-axis-baseline>`__
      -  `first symbol value <https://drafts.csswg.org/css-counter-styles-3/#first-symbol-value>`__
      -  `fixed sizing function <https://drafts.csswg.org/css-grid-1/#fixed-sizing-function>`__
      -  `flex base size <https://drafts.csswg.org/css-flexbox-1/#flex-base-size>`__
      -  `flex basis <https://drafts.csswg.org/css-flexbox-1/#flex-flex-basis>`__
      -  `flex container <https://drafts.csswg.org/css-flexbox-1/#flex-container>`__
      -  `flex direction <https://drafts.csswg.org/css-flexbox-1/#flex-direction>`__
      -  flex factor

         -  `in css-flexbox-1 <https://drafts.csswg.org/css-flexbox-1/#flex-factor>`__
         -  `in css-grid-1, for grid-template-columns,
            grid-template-rows <https://drafts.csswg.org/css-grid-1/#grid-template-columns-flex-factor>`__

      -  `flex factor sum <https://drafts.csswg.org/css-grid-1/#flex-factor-sum>`__
      -  `flex formatting context <https://drafts.csswg.org/css-flexbox-1/#flex-formatting-context>`__
      -  `flex fraction <https://drafts.csswg.org/css-grid-1/#flex-fraction>`__
      -  `flex grow factor <https://drafts.csswg.org/css-flexbox-1/#flex-flex-grow-factor>`__
      -  `flexible <https://drafts.csswg.org/css-flexbox-1/#flexible>`__
      -  flexible length

         -  `in css-flexbox-1 <https://www.w3.org/TR/css-flexbox-1/#flexible-length>`__
         -  `in css-grid-1 <https://drafts.csswg.org/css-grid-1/#flexible-length>`__

      -  `flexible sizing function <https://drafts.csswg.org/css-grid-1/#flexible-sizing-function>`__
      -  `flexible tracks <https://drafts.csswg.org/css-grid-1/#flexible-tracks>`__
      -  `flex item <https://drafts.csswg.org/css-flexbox-1/#flex-item>`__
      -  `flex layout <https://drafts.csswg.org/css-flexbox-1/#flex-layout>`__
      -  `flex-level <https://drafts.csswg.org/css-flexbox-1/#flex-level>`__
      -  `flex line <https://drafts.csswg.org/css-flexbox-1/#flex-line>`__
      -  `flex shrink factor <https://drafts.csswg.org/css-flexbox-1/#flex-flex-shrink-factor>`__
      -  `float area <https://drafts.csswg.org/css-shapes-1/#float-area>`__
      -  `float rules <https://www.w3.org/TR/CSS21/visuren.html#float-rules>`__
      -  `floralwhite <https://drafts.csswg.org/css-color-3/#floralwhite>`__
      -  `flow layout <https://drafts.csswg.org/css-display-3/#flow-layout>`__
      -  `flow of an element <https://www.w3.org/TR/CSS21/visuren.html#x25>`__
      -  `flow-relative <https://drafts.csswg.org/css-writing-modes-4/#flow-relative>`__
      -  `flow-relative direction <https://drafts.csswg.org/css-writing-modes-4/#flow-relative-direction>`__
      -  `:focus <https://www.w3.org/TR/CSS21/selector.html#x38>`__
      -  `focus <https://www.w3.org/TR/CSS21/ui.html#x8>`__
      -  `focus (pseudo-class) <https://www.w3.org/TR/CSS21/selector.html#x38>`__
      -  `following element <https://www.w3.org/TR/CSS21/conform.html#following>`__
      -  `font block period <https://drafts.csswg.org/css-fonts-4/#font-block-period>`__
      -  `font download timer <https://drafts.csswg.org/css-fonts-4/#font-download-timer>`__
      -  `font failure period <https://drafts.csswg.org/css-fonts-4/#font-failure-period>`__
      -  `font feature value declaration <https://drafts.csswg.org/css-fonts-4/#font-feature-value-declaration>`__
      -  `font-feature-value-type <https://drafts.csswg.org/css-fonts-4/#font-feature-values-font-feature-value-type>`__
      -  `font-relative lengths <https://drafts.csswg.org/css-values-3/#font-relative-length>`__
      -  `font source <https://drafts.csswg.org/css-font-loading-3/#font-source>`__
      -  `font specific <https://drafts.csswg.org/css-fonts-4/#font-specific>`__
      -  `font swap period <https://drafts.csswg.org/css-fonts-4/#font-swap-period>`__
      -  `footnote <https://drafts.csswg.org/css-counter-styles-3/#footnote>`__
      -  `forced break <https://drafts.csswg.org/css-break-3/#forced-break>`__
      -  `forced break values <https://drafts.csswg.org/css-break-3/#forced-break-values>`__
      -  `forced line break <https://drafts.csswg.org/css-text-3/#forced-line-break>`__
      -  `forced paragraph break <https://drafts.csswg.org/css-writing-modes-4/#forced-paragraph-break>`__
      -  `forestgreen <https://drafts.csswg.org/css-color-3/#forestgreen>`__
      -  `formatting context <https://drafts.csswg.org/css-display-3/#formatting-context>`__
      -  `formatting structure <https://www.w3.org/TR/CSS21/intro.html#formatting-structure>`__
      -  `forward-compatible parsing <https://www.w3.org/TR/CSS21/syndata.html#x0>`__
      -  `fragment <https://drafts.csswg.org/css-break-3/#fragment>`__
      -  `fragmentainer <https://drafts.csswg.org/css-break-3/#fragmentainer>`__
      -  `fragmentation <https://drafts.csswg.org/css-break-3/#fragmentation>`__
      -  `fragmentation break <https://drafts.csswg.org/css-break-3/#fragmentation-break>`__
      -  `fragmentation container <https://drafts.csswg.org/css-break-3/#fragmentation-container>`__
      -  `fragmentation context <https://drafts.csswg.org/css-break-3/#fragmentation-context>`__
      -  `fragmentation direction <https://drafts.csswg.org/css-break-3/#fragmentation-direction>`__
      -  `fragmentation root <https://drafts.csswg.org/css-break-3/#fragmentation-root>`__
      -  `fragmented flow <https://drafts.csswg.org/css-break-3/#fragmented-flow>`__
      -  `free space <https://drafts.csswg.org/css-grid-1/#free-space>`__
      -  `<frequency> <https://www.w3.org/TR/CSS21/aural.html#value-def-frequency>`__
      -  `fuchsia <https://drafts.csswg.org/css-color-3/#fuchsia>`__
      -  `full-size <https://drafts.csswg.org/css-text-3/#kana-full-size>`__
      -  `full-size kana <https://drafts.csswg.org/css-text-3/#kana-full-size>`__
      -  `full-width <https://drafts.csswg.org/css-text-3/#full-width>`__
      -  `fully inflexible <https://drafts.csswg.org/css-flexbox-1/#fully-inflexible>`__
      -  `function <https://drafts.csswg.org/css-syntax-3/#function>`__
      -  `functional notation <https://drafts.csswg.org/css-values-3/#functional-notation>`__
      -  `gainsboro <https://drafts.csswg.org/css-color-3/#gainsboro>`__
      -  `generate a counter <https://drafts.csswg.org/css-counter-styles-3/#generate-a-counter>`__
      -  `generate a counter representation <https://drafts.csswg.org/css-counter-styles-3/#generate-a-counter>`__
      -  `generate baselines <https://drafts.csswg.org/css-align-3/#generate-baselines>`__
      -  `generated content <https://www.w3.org/TR/CSS21/generate.html#x0>`__
      -  `<generic-voice> <https://www.w3.org/TR/CSS21/aural.html#value-def-generic-voice>`__
      -  `ghostwhite <https://drafts.csswg.org/css-color-3/#ghostwhite>`__
      -  `go <https://drafts.csswg.org/css-counter-styles-3/#go>`__
      -  `gold <https://drafts.csswg.org/css-color-3/#gold>`__
      -  `goldenrod <https://drafts.csswg.org/css-color-3/#goldenrod>`__
      -  `gradient-average-color <https://drafts.csswg.org/css-images-3/#gradient-average-color>`__
      -  `gradient box <https://drafts.csswg.org/css-images-3/#gradient-box>`__
      -  `gradient center <https://drafts.csswg.org/css-images-3/#radial-gradient-gradient-center>`__
      -  `gradient function <https://drafts.csswg.org/css-images-3/#gradient-function>`__
      -  `gradient line <https://drafts.csswg.org/css-images-3/#gradient-line>`__
      -  `grapheme cluster <https://drafts.csswg.org/css-text-3/#grapheme-cluster>`__
      -  `gray <https://drafts.csswg.org/css-color-3/#gray>`__
      -  `graytext <https://drafts.csswg.org/css-color-3/#graytext>`__
      -  `green <https://drafts.csswg.org/css-color-3/#green>`__
      -  `greenyellow <https://drafts.csswg.org/css-color-3/#greenyellow>`__
      -  `grey <https://drafts.csswg.org/css-color-3/#grey>`__
      -  `grid <https://drafts.csswg.org/css-grid-1/#grid>`__
      -  `grid area <https://drafts.csswg.org/css-grid-1/#grid-area>`__
      -  `grid cell <https://drafts.csswg.org/css-grid-1/#grid-cell>`__
      -  `grid column <https://drafts.csswg.org/css-grid-1/#grid-column>`__
      -  `grid column line <https://drafts.csswg.org/css-grid-1/#grid-line>`__
      -  `grid container <https://drafts.csswg.org/css-grid-1/#grid-container>`__
      -  `grid formatting context <https://drafts.csswg.org/css-grid-1/#grid-formatting-context>`__
      -  `grid item <https://drafts.csswg.org/css-grid-1/#grid-item>`__
      -  `grid item placement algorithm <https://drafts.csswg.org/css-grid-1/#grid-item-placement-algorithm>`__
      -  `grid layout <https://drafts.csswg.org/css-grid-1/#grid-layout>`__
      -  `grid layout algorithm <https://drafts.csswg.org/css-grid-1/#layout-algorithm>`__
      -  `grid-level <https://drafts.csswg.org/css-grid-1/#grid-level>`__
      -  `grid line <https://drafts.csswg.org/css-grid-1/#grid-line>`__
      -  `'grid' media group <https://www.w3.org/TR/CSS21/media.html#grid-media-group>`__
      -  `grid-modified document order <https://drafts.csswg.org/css-grid-1/#grid-order>`__
      -  `grid order <https://drafts.csswg.org/css-grid-1/#grid-order>`__
      -  `grid placement <https://drafts.csswg.org/css-grid-1/#grid-placement>`__
      -  `grid-placement property <https://drafts.csswg.org/css-grid-1/#grid-placement-property>`__
      -  `grid position <https://drafts.csswg.org/css-grid-1/#grid-position>`__
      -  `grid row <https://drafts.csswg.org/css-grid-1/#grid-row>`__
      -  `grid row line <https://drafts.csswg.org/css-grid-1/#grid-line>`__
      -  `grid sizing algorithm <https://drafts.csswg.org/css-grid-1/#algo-grid-sizing>`__
      -  `grid span <https://drafts.csswg.org/css-grid-1/#grid-span>`__
      -  `grid track <https://drafts.csswg.org/css-grid-1/#grid-track>`__
      -  `growth limit <https://drafts.csswg.org/css-grid-1/#growth-limit>`__
      -  `guaranteed-invalid value <https://drafts.csswg.org/css-variables-1/#guaranteed-invalid-value>`__
      -  `gutter <https://drafts.csswg.org/css-align-3/#gutter>`__
      -  `half-width <https://drafts.csswg.org/css-text-3/#half-width>`__
      -  `hang <https://drafts.csswg.org/css-text-3/#hang>`__
      -  `hanging glyph <https://drafts.csswg.org/css-text-3/#hanging-glyph>`__
      -  `height <https://drafts.csswg.org/css-writing-modes-4/#height>`__
      -  `hex digit <https://drafts.csswg.org/css-syntax-3/#hex-digit>`__
      -  `highlight <https://drafts.csswg.org/css-color-3/#highlight>`__
      -  `highlighttext <https://drafts.csswg.org/css-color-3/#highlighttext>`__
      -  `honeydew <https://drafts.csswg.org/css-color-3/#honeydew>`__
      -  `horizontal axis <https://drafts.csswg.org/css-writing-modes-4/#x-axis>`__
      -  `horizontal block flow <https://drafts.csswg.org/css-writing-modes-4/#horizontal-block-flow>`__
      -  `horizontal dimension <https://drafts.csswg.org/css-writing-modes-4/#horizontal-dimension>`__
      -  horizontal offset

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#horizontal-offset>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#box-shadow-horizontal-offset>`__

      -  `horizontal-only <https://drafts.csswg.org/css-writing-modes-4/#horizontal-only>`__
      -  `horizontal script <https://drafts.csswg.org/css-writing-modes-4/#horizontal-script>`__
      -  `horizontal typographic mode <https://drafts.csswg.org/css-writing-modes-4/#horizontal-typographic-mode>`__
      -  `horizontal writing mode <https://drafts.csswg.org/css-writing-modes-4/#horizontal-writing-mode>`__
      -  `hotpink <https://drafts.csswg.org/css-color-3/#hotpink>`__
      -  `:hover <https://www.w3.org/TR/CSS21/selector.html#x32>`__
      -  `hover (pseudo-class) <https://www.w3.org/TR/CSS21/selector.html#x32>`__
      -  `hyphenate <https://drafts.csswg.org/css-text-3/#hyphenate>`__
      -  `hyphenation <https://drafts.csswg.org/css-text-3/#hyphenate>`__
      -  `hyphenation opportunity <https://drafts.csswg.org/css-text-3/#hyphenation-opportunity>`__
      -  `hyphen-separated matching <https://www.w3.org/TR/CSS21/selector.html#x18>`__
      -  `hypothetical cross size <https://drafts.csswg.org/css-flexbox-1/#hypothetical-cross-size>`__
      -  `hypothetical fr size <https://drafts.csswg.org/css-grid-1/#hypothetical-fr-size>`__
      -  `hypothetical main size <https://drafts.csswg.org/css-flexbox-1/#hypothetical-main-size>`__
      -  `ident <https://drafts.csswg.org/css-values-3/#css-css-identifier>`__
      -  `ident code point <https://drafts.csswg.org/css-syntax-3/#ident-code-point>`__
      -  identifier

         -  `in css-values-3, for CSS <https://drafts.csswg.org/css-values-3/#css-css-identifier>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier>`__

      -  `identity transform function <https://drafts.csswg.org/css-transforms-1/#identity-transform-function>`__
      -  `ident sequence <https://drafts.csswg.org/css-syntax-3/#ident-sequence>`__
      -  `ident-start code point <https://drafts.csswg.org/css-syntax-3/#ident-start-code-point>`__
      -  `ignore <https://www.w3.org/TR/CSS21/conform.html#ignore>`__
      -  `ignored <https://drafts.csswg.org/css-syntax-3/#css-ignored>`__
      -  `illegal <https://www.w3.org/TR/CSS21/conform.html#illegal>`__
      -  `implicit grid <https://drafts.csswg.org/css-grid-1/#implicit-grid>`__
      -  `implicit grid column <https://drafts.csswg.org/css-grid-1/#implicit-grid-track>`__
      -  `implicit grid lines <https://drafts.csswg.org/css-grid-1/#implicit-grid-lines>`__
      -  `implicit grid properties <https://drafts.csswg.org/css-grid-1/#implicit-grid-properties>`__
      -  `implicit grid row <https://drafts.csswg.org/css-grid-1/#implicit-grid-track>`__
      -  `implicit grid track <https://drafts.csswg.org/css-grid-1/#implicit-grid-track>`__
      -  `implicitly-assigned line name <https://drafts.csswg.org/css-grid-1/#implicitly-assigned-line-name>`__
      -  `implicitly-named area <https://drafts.csswg.org/css-grid-1/#implicitly-named-area>`__
      -  `@import <https://www.w3.org/TR/CSS21/cascade.html#x7>`__
      -  `important <https://drafts.csswg.org/css-cascade-4/#important>`__
      -  `import conditions <https://drafts.csswg.org/css-cascade-4/#import-conditions>`__
      -  `inactiveborder <https://drafts.csswg.org/css-color-3/#inactiveborder>`__
      -  `inactivecaption <https://drafts.csswg.org/css-color-3/#inactivecaption>`__
      -  `inactivecaptiontext <https://drafts.csswg.org/css-color-3/#inactivecaptiontext>`__
      -  `indefinite <https://drafts.csswg.org/css-flexbox-1/#definite>`__
      -  `indefinite size <https://drafts.csswg.org/css-flexbox-1/#definite>`__
      -  `independent formatting context <https://drafts.csswg.org/css-display-3/#independent-formatting-context>`__
      -  `index <https://drafts.csswg.org/css-syntax-3/#token-stream-index>`__
      -  `indianred <https://drafts.csswg.org/css-color-3/#indianred>`__
      -  `indigo <https://drafts.csswg.org/css-color-3/#indigo>`__
      -  `infinitely growable <https://drafts.csswg.org/css-grid-1/#infinitely-growable>`__
      -  `in flow <https://drafts.csswg.org/css-display-3/#in-flow>`__
      -  `in-flow <https://drafts.csswg.org/css-display-3/#in-flow>`__
      -  `infobackground <https://drafts.csswg.org/css-color-3/#infobackground>`__
      -  `infotext <https://drafts.csswg.org/css-color-3/#infotext>`__
      -  inherit

         -  `in css-cascade-4 <https://www.w3.org/TR/css-cascade-4/#inheritance>`__
         -  `in css-cascade-4, for CSS <https://drafts.csswg.org/css-cascade-4/#css-inheritance>`__

      -  inheritance

         -  `in css-cascade-4 <https://www.w3.org/TR/css-cascade-4/#inheritance>`__
         -  `in css-cascade-4, for CSS <https://drafts.csswg.org/css-cascade-4/#css-inheritance>`__

      -  `inherited property <https://drafts.csswg.org/css-cascade-4/#inherited-property>`__
      -  `inherited value <https://drafts.csswg.org/css-cascade-4/#inherited-value>`__
      -  `initial containing block <https://drafts.csswg.org/css-display-3/#initial-containing-block>`__
      -  `initial free space <https://drafts.csswg.org/css-flexbox-1/#initial-free-space>`__
      -  `initial representation for the counter value <https://drafts.csswg.org/css-counter-styles-3/#initial-representation-for-the-counter-value>`__
      -  `initial value <https://drafts.csswg.org/css-cascade-4/#initial-value>`__
      -  `inline <https://drafts.csswg.org/css-display-3/#inline>`__
      -  `inline axis <https://drafts.csswg.org/css-writing-modes-4/#inline-axis>`__
      -  `inline-axis <https://drafts.csswg.org/css-writing-modes-4/#inline-axis>`__
      -  `inline base direction <https://drafts.csswg.org/css-writing-modes-4/#inline-base-direction>`__
      -  `inline block <https://drafts.csswg.org/css-display-3/#inline-block>`__
      -  `inline-block <https://www.w3.org/TR/CSS21/visuren.html#value-def-inline-block>`__
      -  `inline block box <https://drafts.csswg.org/css-display-3/#inline-block>`__
      -  `inline box <https://drafts.csswg.org/css-display-3/#inline-box>`__
      -  `inline dimension <https://drafts.csswg.org/css-writing-modes-4/#inline-dimension>`__
      -  `inline end <https://drafts.csswg.org/css-writing-modes-4/#inline-end>`__
      -  `inline-end <https://drafts.csswg.org/css-writing-modes-4/#inline-end>`__
      -  `inline formatting context <https://drafts.csswg.org/css-display-3/#inline-formatting-context>`__
      -  `inline-level <https://drafts.csswg.org/css-display-3/#inline-level>`__
      -  `inline-level box <https://drafts.csswg.org/css-display-3/#inline-level-box>`__
      -  `inline-level content <https://drafts.csswg.org/css-display-3/#inline-level>`__
      -  `inline-level element <https://www.w3.org/TR/CSS21/visuren.html#inline-level>`__
      -  `inline size <https://drafts.csswg.org/css-writing-modes-4/#inline-size>`__
      -  `inline-size <https://drafts.csswg.org/css-writing-modes-4/#inline-size>`__
      -  `inline start <https://drafts.csswg.org/css-writing-modes-4/#inline-start>`__
      -  `inline-start <https://drafts.csswg.org/css-writing-modes-4/#inline-start>`__
      -  `inlinification <https://drafts.csswg.org/css-display-3/#inlinify>`__
      -  `inlinify <https://drafts.csswg.org/css-display-3/#inlinify>`__
      -  inner box-shadow

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#inner-box-shadow>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#box-shadow-inner-box-shadow>`__

      -  `inner display type <https://drafts.csswg.org/css-display-3/#inner-display-type>`__
      -  `inner edge <https://www.w3.org/TR/CSS21/box.html#inner-edge>`__
      -  `input progress value <https://drafts.csswg.org/css-easing-1/#input-progress-value>`__
      -  `input stream <https://drafts.csswg.org/css-syntax-3/#input-stream>`__
      -  `installed font fallback <https://drafts.csswg.org/css-fonts-4/#installed-font-fallback>`__
      -  `integer <https://drafts.csswg.org/css-values-3/#integer>`__
      -  `intended direction <https://drafts.csswg.org/css-scroll-snap-1/#intended-direction>`__
      -  `intended direction and end position <https://drafts.csswg.org/css-scroll-snap-1/#intended-direction-and-end-position>`__
      -  `intended end position <https://drafts.csswg.org/css-scroll-snap-1/#intended-end-position>`__
      -  `'interactive media group <https://www.w3.org/TR/CSS21/media.html#interactive-media-group>`__
      -  `internal ruby box <https://drafts.csswg.org/css-display-3/#internal-ruby-box>`__
      -  `internal ruby element <https://drafts.csswg.org/css-display-3/#internal-ruby-element>`__
      -  `internal table box <https://drafts.csswg.org/css-display-3/#internal-table-box>`__
      -  `internal table element <https://drafts.csswg.org/css-display-3/#internal-table-element>`__
      -  interpreter

         -  `in css-namespaces-3 <https://www.w3.org/TR/css-namespaces-3/#interpreter>`__
         -  `in css-style-attr <https://drafts.csswg.org/css-style-attr/#interpreter>`__

      -  `intrinsic dimensions <https://www.w3.org/TR/CSS21/conform.html#intrinsic>`__
      -  `intrinsic sizing function <https://drafts.csswg.org/css-grid-1/#intrinsic-sizing-function>`__
      -  `invalid <https://drafts.csswg.org/css-syntax-3/#css-invalid>`__
      -  `invalid at computed-value time <https://drafts.csswg.org/css-variables-1/#invalid-at-computed-value-time>`__
      -  `invalid image <https://drafts.csswg.org/css-images-3/#invalid-image>`__
      -  `invisible <https://drafts.csswg.org/css-display-3/#invisible>`__
      -  `isolated sequence <https://drafts.csswg.org/css-writing-modes-4/#isolated-sequence>`__
      -  `isolation <https://drafts.csswg.org/css-writing-modes-4/#bidi-isolate>`__
      -  `iteration order <https://drafts.csswg.org/css-font-loading-3/#fontfaceset-iteration-order>`__
      -  `ivory <https://drafts.csswg.org/css-color-3/#ivory>`__
      -  `japanese <https://drafts.csswg.org/css-text-3/#writing-system-japanese>`__
      -  `justification opportunity <https://drafts.csswg.org/css-text-3/#justification-opportunity>`__
      -  `keyword <https://drafts.csswg.org/css-values-3/#css-keyword>`__
      -  `khaki <https://drafts.csswg.org/css-color-3/#khaki>`__
      -  `known <https://drafts.csswg.org/css-text-3/#writing-system-known>`__
      -  `korean <https://drafts.csswg.org/css-text-3/#writing-system-korean>`__
      -  `:lang <https://www.w3.org/TR/CSS21/selector.html#x41>`__
      -  `lang (pseudo-class) <https://www.w3.org/TR/CSS21/selector.html#x41>`__
      -  `last-baseline alignment <https://drafts.csswg.org/css-align-3/#last-baseline-alignment>`__
      -  `last-baseline content-alignment <https://drafts.csswg.org/css-align-3/#baseline-content-alignment>`__
      -  `last baselines <https://drafts.csswg.org/css-align-3/#last-baseline-set>`__
      -  `last-baseline self-alignment <https://drafts.csswg.org/css-align-3/#baseline-self-alignment>`__
      -  `last baseline set <https://drafts.csswg.org/css-align-3/#last-baseline-set>`__
      -  `last cross-axis baseline set <https://drafts.csswg.org/css-flexbox-1/#cross-axis-baseline>`__
      -  `last main-axis baseline set <https://drafts.csswg.org/css-flexbox-1/#main-axis-baseline>`__
      -  `lavender <https://drafts.csswg.org/css-color-3/#lavender>`__
      -  `lavenderblush <https://drafts.csswg.org/css-color-3/#lavenderblush>`__
      -  `lawngreen <https://drafts.csswg.org/css-color-3/#lawngreen>`__
      -  `laying out in-place <https://drafts.csswg.org/css-contain-1/#laying-out-in-place>`__
      -  `layout containment <https://drafts.csswg.org/css-contain-1/#layout-containment>`__
      -  `layout containment box <https://drafts.csswg.org/css-contain-1/#layout-containment-box>`__
      -  `layout-internal <https://drafts.csswg.org/css-display-3/#layout-internal>`__
      -  `:left <https://www.w3.org/TR/CSS21/page.html#x6>`__
      -  `left <https://drafts.csswg.org/css-writing-modes-4/#physical-left>`__
      -  `leftover space <https://drafts.csswg.org/css-grid-1/#leftover-space>`__
      -  `legacy name alias <https://drafts.csswg.org/css-cascade-4/#legacy-name-alias>`__
      -  `legacy shorthand <https://drafts.csswg.org/css-cascade-4/#legacy-shorthand>`__
      -  `legacy value alias <https://drafts.csswg.org/css-cascade-4/#css-legacy-value-alias>`__
      -  `lemonchiffon <https://drafts.csswg.org/css-color-3/#lemonchiffon>`__
      -  letter

         -  `in css-syntax-3 <https://drafts.csswg.org/css-syntax-3/#letter>`__
         -  `in css-text-3 <https://drafts.csswg.org/css-text-3/#letter>`__

      -  `lightblue <https://drafts.csswg.org/css-color-3/#lightblue>`__
      -  `lightcoral <https://drafts.csswg.org/css-color-3/#lightcoral>`__
      -  `lightcyan <https://drafts.csswg.org/css-color-3/#lightcyan>`__
      -  `lightgoldenrodyellow <https://drafts.csswg.org/css-color-3/#lightgoldenrodyellow>`__
      -  `lightgray <https://drafts.csswg.org/css-color-3/#lightgray>`__
      -  `lightgreen <https://drafts.csswg.org/css-color-3/#lightgreen>`__
      -  `lightgrey <https://drafts.csswg.org/css-color-3/#lightgrey>`__
      -  `lightpink <https://drafts.csswg.org/css-color-3/#lightpink>`__
      -  `lightsalmon <https://drafts.csswg.org/css-color-3/#lightsalmon>`__
      -  `lightseagreen <https://drafts.csswg.org/css-color-3/#lightseagreen>`__
      -  `lightskyblue <https://drafts.csswg.org/css-color-3/#lightskyblue>`__
      -  `lightslategray <https://drafts.csswg.org/css-color-3/#lightslategray>`__
      -  `lightslategrey <https://drafts.csswg.org/css-color-3/#lightslategrey>`__
      -  `light source <https://drafts.fxtf.org/filter-effects-1/#light-source>`__
      -  `lightsteelblue <https://drafts.csswg.org/css-color-3/#lightsteelblue>`__
      -  `lightyellow <https://drafts.csswg.org/css-color-3/#lightyellow>`__
      -  `lime <https://drafts.csswg.org/css-color-3/#lime>`__
      -  `limegreen <https://drafts.csswg.org/css-color-3/#limegreen>`__
      -  `limited max-content contribution <https://drafts.csswg.org/css-grid-1/#limited-contribution>`__
      -  `limited min-content contribution <https://drafts.csswg.org/css-grid-1/#limited-contribution>`__
      -  `linear easing function <https://drafts.csswg.org/css-easing-1/#linear-easing-function>`__
      -  `linear timing function <https://drafts.csswg.org/css-easing-1/#linear-easing-function>`__
      -  `line box <https://www.w3.org/TR/CSS21/visuren.html#line-box>`__
      -  line break

         -  `in css-break-3 <https://www.w3.org/TR/css-break-3/#line-break>`__
         -  `in css-text-3 <https://drafts.csswg.org/css-text-3/#line-break>`__

      -  `line breaking <https://drafts.csswg.org/css-text-3/#line-breaking-process>`__
      -  `line breaking process <https://drafts.csswg.org/css-text-3/#line-breaking-process>`__
      -  `line-left <https://drafts.csswg.org/css-writing-modes-4/#line-left>`__
      -  `linen <https://drafts.csswg.org/css-color-3/#linen>`__
      -  `line name <https://drafts.csswg.org/css-grid-1/#line-name>`__
      -  `line name set <https://drafts.csswg.org/css-grid-1/#line-name-set>`__
      -  `line orientation <https://drafts.csswg.org/css-writing-modes-4/#line-orientation>`__
      -  `line-over <https://drafts.csswg.org/css-writing-modes-4/#line-over>`__
      -  `line-relative <https://drafts.csswg.org/css-writing-modes-4/#line-relative>`__
      -  `line-relative direction <https://drafts.csswg.org/css-writing-modes-4/#line-relative-direction>`__
      -  `line-right <https://drafts.csswg.org/css-writing-modes-4/#line-right>`__
      -  `line-under <https://drafts.csswg.org/css-writing-modes-4/#line-under>`__
      -  `:link <https://www.w3.org/TR/CSS21/selector.html#x26>`__
      -  `link (pseudo-class) <https://www.w3.org/TR/CSS21/selector.html#x26>`__
      -  `list-item <https://www.w3.org/TR/CSS21/visuren.html#value-def-list-item>`__
      -  `list properties <https://www.w3.org/TR/CSS21/generate.html#x30>`__
      -  `loading image <https://drafts.csswg.org/css-images-3/#loading-image>`__
      -  `local coordinate system <https://drafts.csswg.org/css-transforms-1/#local-coordinate-system>`__
      -  `local url flag <https://drafts.csswg.org/css-values-3/#url-local-url-flag>`__
      -  `logical height <https://drafts.csswg.org/css-writing-modes-4/#logical-height>`__
      -  `logical width <https://drafts.csswg.org/css-writing-modes-4/#logical-width>`__
      -  `longhand <https://drafts.csswg.org/css-cascade-4/#longhand>`__
      -  `longhand property <https://drafts.csswg.org/css-cascade-4/#longhand>`__
      -  `lowercase letter <https://drafts.csswg.org/css-syntax-3/#lowercase-letter>`__
      -  `magenta <https://drafts.csswg.org/css-color-3/#magenta>`__
      -  `main axis <https://drafts.csswg.org/css-flexbox-1/#main-axis>`__
      -  `main-axis <https://drafts.csswg.org/css-flexbox-1/#main-axis>`__
      -  `main-axis baseline set <https://drafts.csswg.org/css-flexbox-1/#main-axis-baseline>`__
      -  `main dimension <https://drafts.csswg.org/css-flexbox-1/#main-dimension>`__
      -  `main-end <https://drafts.csswg.org/css-flexbox-1/#main-end>`__
      -  `main size <https://drafts.csswg.org/css-flexbox-1/#main-size>`__
      -  `main-size <https://www.w3.org/TR/css-flexbox-1/#main-size>`__
      -  `main size property <https://drafts.csswg.org/css-flexbox-1/#main-size-property>`__
      -  `main-start <https://drafts.csswg.org/css-flexbox-1/#main-start>`__
      -  `margin box <https://www.w3.org/TR/CSS21/box.html#x17>`__
      -  `margin edge <https://www.w3.org/TR/CSS21/box.html#margin-edge>`__
      -  `margin::of a box <https://www.w3.org/TR/CSS21/box.html#box-margin-area>`__
      -  `<margin-width> <https://www.w3.org/TR/CSS21/box.html#value-def-margin-width>`__
      -  `mark <https://drafts.csswg.org/css-syntax-3/#token-stream-mark>`__
      -  `marked indexes <https://drafts.csswg.org/css-syntax-3/#token-stream-marked-indexes>`__
      -  `maroon <https://drafts.csswg.org/css-color-3/#maroon>`__
      -  `mask border image <https://drafts.fxtf.org/css-masking-1/#mask-border-image>`__
      -  `mask border image area <https://drafts.fxtf.org/css-masking-1/#mask-border-image-area>`__
      -  `mask image <https://drafts.fxtf.org/css-masking-1/#mask-image>`__
      -  `mask layer image <https://drafts.fxtf.org/css-masking-1/#mask-layer-image>`__
      -  `mask painting area <https://drafts.fxtf.org/css-masking-1/#mask-painting-area>`__
      -  `mask-position <https://drafts.fxtf.org/css-masking-1/#mask-position>`__
      -  `mask positioning area <https://drafts.fxtf.org/css-masking-1/#mask-positioning-area>`__
      -  `mask-size <https://drafts.fxtf.org/css-masking-1/#mask-size>`__
      -  `match <https://www.w3.org/TR/CSS21/selector.html#x1>`__
      -  `matching transition delay <https://drafts.csswg.org/css-transitions-1/#matching-transition-delay>`__
      -  `matching transition duration <https://drafts.csswg.org/css-transitions-1/#matching-transition-duration>`__
      -  `matching transition-property value <https://drafts.csswg.org/css-transitions-1/#matching-transition-property-value>`__
      -  `matching transition timing function <https://drafts.csswg.org/css-transitions-1/#matching-transition-timing-function>`__
      -  `max cross size <https://drafts.csswg.org/css-flexbox-1/#max-cross-size>`__
      -  `max cross size property <https://drafts.csswg.org/css-flexbox-1/#max-cross-size-property>`__
      -  `maximum allowed code point <https://drafts.csswg.org/css-syntax-3/#maximum-allowed-code-point>`__
      -  `max inner height <https://drafts.csswg.org/css-ui-3/#max-inner-height>`__
      -  `max inner width <https://drafts.csswg.org/css-ui-3/#max-inner-width>`__
      -  `max main size <https://drafts.csswg.org/css-flexbox-1/#max-main-size>`__
      -  `max main size property <https://drafts.csswg.org/css-flexbox-1/#max-main-size-property>`__
      -  `max track sizing function <https://drafts.csswg.org/css-grid-1/#max-track-sizing-function>`__
      -  `may <https://www.w3.org/TR/CSS21/conform.html#x8>`__
      -  `media <https://www.w3.org/TR/CSS21/media.html#x2>`__
      -  `media condition <https://drafts.csswg.org/mediaqueries-4/#media-condition>`__
      -  `media-dependent import <https://www.w3.org/TR/CSS21/cascade.html#x9>`__
      -  `media feature <https://drafts.csswg.org/mediaqueries-4/#media-feature>`__
      -  `media group <https://www.w3.org/TR/CSS21/media.html#x4>`__
      -  `media query <https://drafts.csswg.org/mediaqueries-4/#media-query>`__
      -  `media query list <https://drafts.csswg.org/mediaqueries-4/#media-query-list>`__
      -  `media query modifier <https://drafts.csswg.org/mediaqueries-4/#media-query-modifier>`__
      -  `media type <https://drafts.csswg.org/mediaqueries-4/#media-type>`__
      -  `mediumaquamarine <https://drafts.csswg.org/css-color-3/#mediumaquamarine>`__
      -  `mediumblue <https://drafts.csswg.org/css-color-3/#mediumblue>`__
      -  `mediumorchid <https://drafts.csswg.org/css-color-3/#mediumorchid>`__
      -  `mediumpurple <https://drafts.csswg.org/css-color-3/#mediumpurple>`__
      -  `mediumseagreen <https://drafts.csswg.org/css-color-3/#mediumseagreen>`__
      -  `mediumslateblue <https://drafts.csswg.org/css-color-3/#mediumslateblue>`__
      -  `mediumspringgreen <https://drafts.csswg.org/css-color-3/#mediumspringgreen>`__
      -  `mediumturquoise <https://drafts.csswg.org/css-color-3/#mediumturquoise>`__
      -  `mediumvioletred <https://drafts.csswg.org/css-color-3/#mediumvioletred>`__
      -  `menu <https://drafts.csswg.org/css-color-3/#menu>`__
      -  `menutext <https://drafts.csswg.org/css-color-3/#menutext>`__
      -  `message entity <https://www.w3.org/TR/CSS21/conform.html#message-entity>`__
      -  `midnightblue <https://drafts.csswg.org/css-color-3/#midnightblue>`__
      -  `min cross size <https://drafts.csswg.org/css-flexbox-1/#min-cross-size>`__
      -  `min cross size property <https://drafts.csswg.org/css-flexbox-1/#min-cross-size-property>`__
      -  `minimum contribution <https://drafts.csswg.org/css-grid-1/#minimum-contribution>`__
      -  `min inner height <https://drafts.csswg.org/css-ui-3/#min-inner-height>`__
      -  `min inner width <https://drafts.csswg.org/css-ui-3/#min-inner-width>`__
      -  `min main size <https://drafts.csswg.org/css-flexbox-1/#min-main-size>`__
      -  `min main size property <https://drafts.csswg.org/css-flexbox-1/#min-main-size-property>`__
      -  `mintcream <https://drafts.csswg.org/css-color-3/#mintcream>`__
      -  `min track sizing function <https://drafts.csswg.org/css-grid-1/#min-track-sizing-function>`__
      -  `mistyrose <https://drafts.csswg.org/css-color-3/#mistyrose>`__
      -  `moccasin <https://drafts.csswg.org/css-color-3/#moccasin>`__
      -  `monolithic <https://drafts.csswg.org/css-break-3/#monolithic>`__
      -  `monospace <https://www.w3.org/TR/CSS21/fonts.html#monospace-def>`__
      -  `multicol container <https://drafts.csswg.org/css-multicol-1/#multi-column-container>`__
      -  `multi-col line <https://drafts.csswg.org/css-multicol-1/#multi-column-line>`__
      -  `multicol line <https://drafts.csswg.org/css-multicol-1/#multi-column-line>`__
      -  `multi-column container <https://drafts.csswg.org/css-multicol-1/#multi-column-container>`__
      -  `multi-column formatting context <https://drafts.csswg.org/css-multicol-1/#multi-column-formatting-context>`__
      -  `multi-column layout <https://drafts.csswg.org/css-multicol-1/#multi-column-layout>`__
      -  `multi-column line <https://drafts.csswg.org/css-multicol-1/#multi-column-line>`__
      -  `multi-column spanner <https://drafts.csswg.org/css-multicol-1/#multi-column-spanner>`__
      -  `multi-column spanning element <https://drafts.csswg.org/css-multicol-1/#multi-column-spanning-element>`__
      -  `multi-line flex container <https://drafts.csswg.org/css-flexbox-1/#multi-line-flex-container>`__
      -  `multiple declarations <https://www.w3.org/TR/CSS21/selector.html#x8>`__
      -  `multiply <https://drafts.csswg.org/css-transforms-1/#multiply>`__
      -  `must <https://www.w3.org/TR/CSS21/conform.html#x0>`__
      -  `must not <https://www.w3.org/TR/CSS21/conform.html#x1>`__
      -  `named cell token <https://drafts.csswg.org/css-grid-1/#grid-template-areas-named-cell-token>`__
      -  `named grid area <https://drafts.csswg.org/css-grid-1/#named-grid-area>`__
      -  `namespace prefix <https://drafts.csswg.org/css-namespaces-3/#namespace-prefix>`__
      -  `name-start code point <https://drafts.csswg.org/css-syntax-3/#ident-start-code-point>`__
      -  `natural aspect ratio <https://drafts.csswg.org/css-images-3/#natural-aspect-ratio>`__
      -  `natural dimension <https://drafts.csswg.org/css-images-3/#natural-dimensions>`__
      -  `natural end-point <https://drafts.csswg.org/css-scroll-snap-1/#natural-end-point>`__
      -  `natural height <https://drafts.csswg.org/css-images-3/#natural-height>`__
      -  `natural size <https://drafts.csswg.org/css-images-3/#natural-size>`__
      -  `natural width <https://drafts.csswg.org/css-images-3/#natural-width>`__
      -  `navajowhite <https://drafts.csswg.org/css-color-3/#navajowhite>`__
      -  `navy <https://drafts.csswg.org/css-color-3/#navy>`__
      -  `nearest neighbor <https://drafts.csswg.org/css-images-3/#nearest-neighbor>`__
      -  `newline <https://drafts.csswg.org/css-syntax-3/#newline>`__
      -  `next input code point <https://drafts.csswg.org/css-syntax-3/#next-input-code-point>`__
      -  `next input token <https://www.w3.org/TR/css-syntax-3/#next-input-token>`__
      -  `next-sibling combinator <https://drafts.csswg.org/selectors-3/#next-sibling-combinator>`__
      -  `next token <https://drafts.csswg.org/css-syntax-3/#token-stream-next-token>`__
      -  `non-ascii code point <https://www.w3.org/TR/css-syntax-3/#non-ascii-code-point>`__
      -  `non-ascii ident code point <https://drafts.csswg.org/css-syntax-3/#non-ascii-ident-code-point>`__
      -  `'none'::as display value <https://www.w3.org/TR/CSS21/visuren.html#x21>`__
      -  `non-overridable counter-style names <https://drafts.csswg.org/css-counter-styles-3/#non-overridable-counter-style-names>`__
      -  `non-printable code point <https://drafts.csswg.org/css-syntax-3/#non-printable-code-point>`__
      -  `non-replaced <https://drafts.csswg.org/css-display-3/#non-replaced>`__
      -  `non-replaced element <https://drafts.csswg.org/css-display-3/#non-replaced>`__
      -  `normal <https://drafts.csswg.org/css-cascade-4/#normal>`__
      -  `normalize into a token stream <https://drafts.csswg.org/css-syntax-3/#normalize-into-a-token-stream>`__
      -  `null cell token <https://drafts.csswg.org/css-grid-1/#grid-template-areas-null-cell-token>`__
      -  `number <https://drafts.csswg.org/css-values-3/#number>`__
      -  `numeric data types <https://drafts.csswg.org/css-values-3/#numeric-data-types>`__
      -  `objects <https://drafts.csswg.org/css-images-3/#objects>`__
      -  `object size negotiation <https://drafts.csswg.org/css-images-3/#object-size-negotiation>`__
      -  `occupied <https://drafts.csswg.org/css-grid-1/#occupied>`__
      -  `oldlace <https://drafts.csswg.org/css-color-3/#oldlace>`__
      -  `olive <https://drafts.csswg.org/css-color-3/#olive>`__
      -  `olivedrab <https://drafts.csswg.org/css-color-3/#olivedrab>`__
      -  `opacity <https://drafts.csswg.org/css-color-3/#opacity>`__
      -  `operating coordinate space <https://drafts.fxtf.org/filter-effects-1/#operating-coordinate-space>`__
      -  `optimal viewing region <https://drafts.csswg.org/css-scroll-snap-1/#optimal-viewing-region>`__
      -  `optional <https://www.w3.org/TR/CSS21/conform.html#x9>`__
      -  `orange <https://drafts.csswg.org/css-color-3/#orange>`__
      -  `orangered <https://drafts.csswg.org/css-color-3/#orangered>`__
      -  `orchid <https://drafts.csswg.org/css-color-3/#orchid>`__
      -  order-modified document order

         -  `in css-display-3 <https://drafts.csswg.org/css-display-3/#order-modified-document-order>`__
         -  `in css-flexbox-1 <https://www.w3.org/TR/css-flexbox-1/#order-modified-document-order>`__

      -  `orthogonal <https://drafts.csswg.org/css-writing-modes-4/#establish-an-orthogonal-flow>`__
      -  `orthogonal flow <https://drafts.csswg.org/css-writing-modes-4/#establish-an-orthogonal-flow>`__
      -  `other space separators <https://drafts.csswg.org/css-text-3/#other-space-separators>`__
      -  outer box-shadow

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#outer-box-shadow>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#box-shadow-outer-box-shadow>`__

      -  `outer display type <https://drafts.csswg.org/css-display-3/#outer-display-type>`__
      -  `outer edge <https://www.w3.org/TR/CSS21/box.html#outer-edge>`__
      -  `outline <https://www.w3.org/TR/CSS21/ui.html#x2>`__
      -  `out of flow <https://drafts.csswg.org/css-display-3/#out-of-flow>`__
      -  `out-of-flow <https://drafts.csswg.org/css-display-3/#out-of-flow>`__
      -  `output of the cascade <https://drafts.csswg.org/css-cascade-4/#output-of-the-cascade>`__
      -  `output progress value <https://drafts.csswg.org/css-easing-1/#output-progress-value>`__
      -  `over <https://drafts.csswg.org/css-writing-modes-4/#over>`__
      -  `overflow <https://www.w3.org/TR/CSS21/visufx.html#x0>`__
      -  `overflow alignment <https://drafts.csswg.org/css-align-3/#overflow-alignment>`__
      -  `overflow columns <https://drafts.csswg.org/css-multicol-1/#overflow-columns>`__
      -  `padding box <https://www.w3.org/TR/CSS21/box.html#x12>`__
      -  `padding edge <https://www.w3.org/TR/CSS21/box.html#padding-edge>`__
      -  `padding::of a box <https://www.w3.org/TR/CSS21/box.html#box-padding-area>`__
      -  `<padding-width> <https://www.w3.org/TR/CSS21/box.html#value-def-padding-width>`__
      -  `@page <https://www.w3.org/TR/CSS21/page.html#x3>`__
      -  `page area <https://www.w3.org/TR/CSS21/page.html#page-area>`__
      -  `page box <https://www.w3.org/TR/CSS21/page.html#x1>`__
      -  `page break <https://drafts.csswg.org/css-break-3/#page-break>`__
      -  `page-context <https://www.w3.org/TR/CSS21/page.html#page-context>`__
      -  `paged media <https://drafts.csswg.org/mediaqueries-4/#paged-media>`__
      -  `'paged' media group <https://www.w3.org/TR/CSS21/media.html#paged-media-group>`__
      -  `page selector <https://www.w3.org/TR/CSS21/page.html#x5>`__
      -  `pagination <https://drafts.csswg.org/css-break-3/#pagination>`__
      -  `paint containment <https://drafts.csswg.org/css-contain-1/#paint-containment>`__
      -  `paint containment box <https://drafts.csswg.org/css-contain-1/#paint-containment-box>`__
      -  `palegoldenrod <https://drafts.csswg.org/css-color-3/#palegoldenrod>`__
      -  `palegreen <https://drafts.csswg.org/css-color-3/#palegreen>`__
      -  `paleturquoise <https://drafts.csswg.org/css-color-3/#paleturquoise>`__
      -  `palevioletred <https://drafts.csswg.org/css-color-3/#palevioletred>`__
      -  `papayawhip <https://drafts.csswg.org/css-color-3/#papayawhip>`__
      -  `parent <https://www.w3.org/TR/CSS21/conform.html#parent>`__
      -  `parent box <https://drafts.csswg.org/css-display-3/#css-parent-box>`__
      -  `parse <https://drafts.csswg.org/css-syntax-3/#css-parse-something-according-to-a-css-grammar>`__
      -  `parse a block's contents <https://drafts.csswg.org/css-syntax-3/#parse-a-blocks-contents>`__
      -  `parse a comma-separated list according to a css grammar <https://drafts.csswg.org/css-syntax-3/#css-parse-a-comma-separated-list-according-to-a-css-grammar>`__
      -  `parse a comma-separated list of component values <https://drafts.csswg.org/css-syntax-3/#parse-a-comma-separated-list-of-component-values>`__
      -  `parse a component value <https://drafts.csswg.org/css-syntax-3/#parse-a-component-value>`__
      -  `parse a css stylesheet <https://drafts.csswg.org/css-syntax-3/#parse-a-css-stylesheet>`__
      -  `parse a declaration <https://drafts.csswg.org/css-syntax-3/#parse-a-declaration>`__
      -  `parse a list <https://drafts.csswg.org/css-syntax-3/#css-parse-a-comma-separated-list-according-to-a-css-grammar>`__
      -  `parse a list of component values <https://drafts.csswg.org/css-syntax-3/#parse-a-list-of-component-values>`__
      -  `parse a list of declarations <https://www.w3.org/TR/css-syntax-3/#parse-a-list-of-declarations>`__
      -  `parse a list of rules <https://www.w3.org/TR/css-syntax-3/#parse-a-list-of-rules>`__
      -  `parse a rule <https://drafts.csswg.org/css-syntax-3/#parse-a-rule>`__
      -  `parse a style block's contents <https://www.w3.org/TR/css-syntax-3/#parse-a-style-blocks-contents>`__
      -  `parse a stylesheet <https://drafts.csswg.org/css-syntax-3/#parse-a-stylesheet>`__
      -  `parse a stylesheet's contents <https://drafts.csswg.org/css-syntax-3/#parse-a-stylesheets-contents>`__
      -  `parse error <https://drafts.csswg.org/css-syntax-3/#parse-error>`__
      -  `parse something according to a css grammar <https://drafts.csswg.org/css-syntax-3/#css-parse-something-according-to-a-css-grammar>`__
      -  `parsing a list <https://www.w3.org/TR/css-syntax-3/#css-parse-a-comma-separated-list-according-to-a-css-grammar>`__
      -  `participates in baseline alignment <https://drafts.csswg.org/css-flexbox-1/#baseline-participation>`__
      -  `pass through filter <https://drafts.fxtf.org/filter-effects-1/#pass-through-filter>`__
      -  `peachpuff <https://drafts.csswg.org/css-color-3/#peachpuff>`__
      -  `pending on the environment <https://drafts.csswg.org/css-font-loading-3/#fontfaceset-pending-on-the-environment>`__
      -  `pending-substitution value <https://drafts.csswg.org/css-variables-1/#pending-substitution-value>`__
      -  `percentage <https://drafts.csswg.org/css-values-3/#percentage>`__
      -  `peru <https://drafts.csswg.org/css-color-3/#peru>`__
      -  `physical <https://drafts.csswg.org/css-writing-modes-4/#physical>`__
      -  `physical bottom <https://drafts.csswg.org/css-writing-modes-4/#physical-bottom>`__
      -  `physical dimensions <https://drafts.csswg.org/css-writing-modes-4/#physical-dimensions>`__
      -  `physical direction <https://drafts.csswg.org/css-writing-modes-4/#physical-direction>`__
      -  `physical left <https://drafts.csswg.org/css-writing-modes-4/#physical-left>`__
      -  `physical right <https://drafts.csswg.org/css-writing-modes-4/#physical-right>`__
      -  `physical top <https://drafts.csswg.org/css-writing-modes-4/#physical-top>`__
      -  `physical units <https://drafts.csswg.org/css-values-3/#physical-units>`__
      -  `pink <https://drafts.csswg.org/css-color-3/#pink>`__
      -  `pixel <https://www.w3.org/TR/CSS21/syndata.html#x40>`__
      -  `pixel unit <https://drafts.csswg.org/css-values-3/#visual-angle-unit>`__
      -  `plum <https://drafts.csswg.org/css-color-3/#plum>`__
      -  `positional alignment <https://drafts.csswg.org/css-align-3/#positional-alignment>`__
      -  `positioned element/box <https://www.w3.org/TR/CSS21/visuren.html#positioned-element>`__
      -  `positioning scheme <https://www.w3.org/TR/CSS21/visuren.html#x22>`__
      -  `post-multiplied <https://drafts.csswg.org/css-transforms-1/#post-multiplied>`__
      -  `post-multiply <https://drafts.csswg.org/css-transforms-1/#post-multiply>`__
      -  `powderblue <https://drafts.csswg.org/css-color-3/#powderblue>`__
      -  `preceding element <https://www.w3.org/TR/CSS21/conform.html#preceding>`__
      -  `pre-multiplied <https://drafts.csswg.org/css-transforms-1/#pre-multiplied>`__
      -  `pre-multiply <https://drafts.csswg.org/css-transforms-1/#pre-multiply>`__
      -  `preserved tokens <https://drafts.csswg.org/css-syntax-3/#preserved-tokens>`__
      -  `preserved white space <https://drafts.csswg.org/css-text-3/#preserved-white-space>`__
      -  `primary filter primitive tree <https://drafts.fxtf.org/filter-effects-1/#primary-filter-primitive-tree>`__
      -  `principal block-level box <https://www.w3.org/TR/CSS21/visuren.html#principal-box>`__
      -  `principal box <https://drafts.csswg.org/css-display-3/#principal-box>`__
      -  `principal writing mode <https://drafts.csswg.org/css-writing-modes-4/#principal-writing-mode>`__
      -  `process <https://drafts.csswg.org/css-syntax-3/#token-stream-process>`__
      -  `propagate <https://drafts.csswg.org/css-break-3/#propagate>`__
      -  `propagation <https://drafts.csswg.org/css-break-3/#propagate>`__
      -  `proper table child <https://www.w3.org/TR/CSS21/tables.html#x17>`__
      -  `proper table row parent <https://www.w3.org/TR/CSS21/tables.html#x18>`__
      -  property

         -  `in css-cascade-4, for CSS <https://drafts.csswg.org/css-cascade-4/#css-property>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/conform.html#property>`__

      -  `property declarations <https://drafts.csswg.org/css-syntax-3/#css-property-declarations>`__
      -  `pseudo-classes <https://www.w3.org/TR/CSS21/selector.html#x23>`__
      -  `pseudo-classes:::active <https://www.w3.org/TR/CSS21/selector.html#x35>`__
      -  `pseudo-classes:::focus <https://www.w3.org/TR/CSS21/selector.html#x38>`__
      -  `pseudo-classes:::hover <https://www.w3.org/TR/CSS21/selector.html#x32>`__
      -  `pseudo-classes:::lang <https://www.w3.org/TR/CSS21/selector.html#x41>`__
      -  `pseudo-classes:::link <https://www.w3.org/TR/CSS21/selector.html#x26>`__
      -  `pseudo-classes:::visited <https://www.w3.org/TR/CSS21/selector.html#x29>`__
      -  `pseudo-class:::first <https://www.w3.org/TR/CSS21/page.html#x10>`__
      -  `pseudo-class:::left <https://www.w3.org/TR/CSS21/page.html#x6>`__
      -  `pseudo-class:::right <https://www.w3.org/TR/CSS21/page.html#x8>`__
      -  `pseudo-elements <https://www.w3.org/TR/CSS21/selector.html#x22>`__
      -  pseudo-elements:::after

         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#x5>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/selector.html#x59>`__

      -  pseudo-elements:::before

         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#x2>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/selector.html#x57>`__

      -  `pseudo-elements:::first-letter <https://www.w3.org/TR/CSS21/selector.html#x50>`__
      -  `pseudo-elements:::first-line <https://www.w3.org/TR/CSS21/selector.html#first-line-pseudo>`__
      -  `purple <https://drafts.csswg.org/css-color-3/#purple>`__
      -  `quad width <https://www.w3.org/TR/CSS21/syndata.html#em-width>`__
      -  `qualified rule <https://drafts.csswg.org/css-syntax-3/#qualified-rule>`__
      -  `range context <https://drafts.csswg.org/mediaqueries-4/#range-context>`__
      -  `recommended <https://www.w3.org/TR/CSS21/conform.html#x7>`__
      -  `reconsume the current input code point <https://drafts.csswg.org/css-syntax-3/#reconsume-the-current-input-code-point>`__
      -  `reconsume the current input token <https://www.w3.org/TR/css-syntax-3/#reconsume-the-current-input-token>`__
      -  `red <https://drafts.csswg.org/css-color-3/#red>`__
      -  reference box

         -  `in css-shapes-1, for <basic-shape> <https://drafts.csswg.org/css-shapes-1/#basic-shape-reference-box>`__
         -  `in css-transforms-1 <https://drafts.csswg.org/css-transforms-1/#reference-box>`__

      -  `reference pixel <https://drafts.csswg.org/css-values-3/#reference-pixel>`__
      -  `region break <https://drafts.csswg.org/css-break-3/#region-break>`__
      -  `relative length <https://drafts.csswg.org/css-values-3/#relative-length>`__
      -  `relative positioning <https://www.w3.org/TR/CSS21/visuren.html#x34>`__
      -  `relative units <https://www.w3.org/TR/CSS21/syndata.html#x34>`__
      -  `remaining fragmentainer extent <https://drafts.csswg.org/css-break-3/#remaining-fragmentainer-extent>`__
      -  `remaining free space <https://drafts.csswg.org/css-flexbox-1/#remaining-free-space>`__
      -  `rendered content <https://www.w3.org/TR/CSS21/conform.html#rendered-content>`__
      -  `render with a fallback font face <https://drafts.csswg.org/css-fonts-4/#render-with-a-fallback-font-face>`__
      -  `render with an invisible fallback font face <https://drafts.csswg.org/css-fonts-4/#render-with-an-invisible-fallback-font-face>`__
      -  `replaced <https://drafts.csswg.org/css-display-3/#replaced-element>`__
      -  `replaced element <https://drafts.csswg.org/css-display-3/#replaced-element>`__
      -  `representation <https://www.w3.org/TR/css-syntax-3/#representation>`__
      -  `required <https://www.w3.org/TR/CSS21/conform.html#x2>`__
      -  `reset implicitly <https://drafts.csswg.org/css-fonts-4/#reset-implicitly>`__
      -  `reset-only sub-property <https://drafts.csswg.org/css-cascade-4/#reset-only-sub-property>`__
      -  `re-snap <https://drafts.csswg.org/css-scroll-snap-1/#re-snap>`__
      -  `resolved type <https://drafts.csswg.org/css-values-3/#resolved-type>`__
      -  `restore a mark <https://drafts.csswg.org/css-syntax-3/#token-stream-restore-a-mark>`__
      -  `reversing-adjusted start value <https://drafts.csswg.org/css-transitions-1/#transition-reversing-adjusted-start-value>`__
      -  `reversing shortening factor <https://drafts.csswg.org/css-transitions-1/#transition-reversing-shortening-factor>`__
      -  `:right <https://www.w3.org/TR/CSS21/page.html#x8>`__
      -  `right <https://drafts.csswg.org/css-writing-modes-4/#physical-right>`__
      -  `root <https://www.w3.org/TR/CSS21/conform.html#root>`__
      -  `root element <https://drafts.csswg.org/css-display-3/#root-element>`__
      -  `rosybrown <https://drafts.csswg.org/css-color-3/#rosybrown>`__
      -  `row group box <https://www.w3.org/TR/CSS21/tables.html#x16>`__
      -  `row groups <https://www.w3.org/TR/CSS21/tables.html#x5>`__
      -  `royalblue <https://drafts.csswg.org/css-color-3/#royalblue>`__
      -  `rule <https://drafts.csswg.org/css-syntax-3/#css-rule>`__
      -  `run-in <https://drafts.csswg.org/css-display-3/#run-in>`__
      -  `run-in box <https://drafts.csswg.org/css-display-3/#run-in>`__
      -  `run-in sequence <https://drafts.csswg.org/css-display-3/#run-in-sequence>`__
      -  `running transition <https://drafts.csswg.org/css-transitions-1/#running-transition>`__
      -  `saddlebrown <https://drafts.csswg.org/css-color-3/#saddlebrown>`__
      -  `salmon <https://drafts.csswg.org/css-color-3/#salmon>`__
      -  `sandybrown <https://drafts.csswg.org/css-color-3/#sandybrown>`__
      -  `sans-serif <https://www.w3.org/TR/CSS21/fonts.html#sans-serif-def>`__
      -  `scaled flex shrink factor <https://drafts.csswg.org/css-flexbox-1/#scaled-flex-shrink-factor>`__
      -  `scope <https://www.w3.org/TR/CSS21/generate.html#x29>`__
      -  `screen reader <https://www.w3.org/TR/CSS21/aural.html#x1>`__
      -  `scrollbar <https://drafts.csswg.org/css-color-3/#scrollbar>`__
      -  `scroll snap <https://drafts.csswg.org/css-scroll-snap-1/#scroll-snap>`__
      -  `scroll snap area <https://drafts.csswg.org/css-scroll-snap-1/#scroll-snap-area>`__
      -  `scroll snap container <https://drafts.csswg.org/css-scroll-snap-1/#scroll-snap-container>`__
      -  `scroll snapport <https://drafts.csswg.org/css-scroll-snap-1/#scroll-snapport>`__
      -  `scroll snap position <https://drafts.csswg.org/css-scroll-snap-1/#scroll-snap-position>`__
      -  `seagreen <https://drafts.csswg.org/css-color-3/#seagreen>`__
      -  `seashell <https://drafts.csswg.org/css-color-3/#seashell>`__
      -  `segment break <https://drafts.csswg.org/css-text-3/#segment-break>`__
      -  selector

         -  `in css2 <https://www.w3.org/TR/CSS21/syndata.html#x15>`__
         -  `in selectors-3 <https://drafts.csswg.org/selectors-3/#selector>`__

      -  `selector::match <https://www.w3.org/TR/CSS21/selector.html#x1>`__
      -  `selector::subject of <https://www.w3.org/TR/CSS21/selector.html#subject>`__
      -  `self-alignment <https://drafts.csswg.org/css-align-3/#self-align>`__
      -  `self-alignment properties <https://drafts.csswg.org/css-align-3/#self-alignment-properties>`__
      -  `semitone <https://drafts.csswg.org/css-speech-1/#voice-pitch-semitone>`__
      -  `sequence of simple selectors <https://drafts.csswg.org/selectors-3/#sequence-of-simple-selectors>`__
      -  `serialize an <an+b>
         value <https://drafts.csswg.org/css-syntax-3/#serialize-an-anb-value>`__
      -  `serif <https://www.w3.org/TR/CSS21/fonts.html#serif-def>`__
      -  `set entries <https://drafts.csswg.org/css-font-loading-3/#fontfaceset-set-entries>`__
      -  `set explicitly <https://drafts.csswg.org/css-fonts-4/#set-explicitly>`__
      -  `shall <https://www.w3.org/TR/CSS21/conform.html#x3>`__
      -  `shall not <https://www.w3.org/TR/CSS21/conform.html#x4>`__
      -  `shared alignment context <https://drafts.csswg.org/css-align-3/#shared-alignment-context>`__
      -  `sheet <https://www.w3.org/TR/CSS21/page.html#x0>`__
      -  `shorthand <https://drafts.csswg.org/css-cascade-4/#shorthand-property>`__
      -  `shorthand property <https://drafts.csswg.org/css-cascade-4/#shorthand-property>`__
      -  `should <https://www.w3.org/TR/CSS21/conform.html#x5>`__
      -  `should not <https://www.w3.org/TR/CSS21/conform.html#x6>`__
      -  `sibling <https://www.w3.org/TR/CSS21/conform.html#sibling>`__
      -  `sideways typesetting <https://drafts.csswg.org/css-writing-modes-4/#typeset-sideways>`__
      -  `sienna <https://drafts.csswg.org/css-color-3/#sienna>`__
      -  `silver <https://drafts.csswg.org/css-color-3/#silver>`__
      -  `simple block <https://drafts.csswg.org/css-syntax-3/#simple-block>`__
      -  simple selector

         -  `in css2 <https://www.w3.org/TR/CSS21/selector.html#simple-selector>`__
         -  `in selectors-3 <https://drafts.csswg.org/selectors-3/#simple-selector>`__

      -  `single-line flex container <https://drafts.csswg.org/css-flexbox-1/#single-line-flex-container>`__
      -  `size containment <https://drafts.csswg.org/css-contain-1/#size-containment>`__
      -  `size containment box <https://drafts.csswg.org/css-contain-1/#size-containment-box>`__
      -  `sizing as if empty <https://drafts.csswg.org/css-contain-1/#sizing-as-if-empty>`__
      -  `sizing function <https://drafts.csswg.org/css-grid-1/#grid-template-rows-track-sizing-function>`__
      -  `skyblue <https://drafts.csswg.org/css-color-3/#skyblue>`__
      -  `slateblue <https://drafts.csswg.org/css-color-3/#slateblue>`__
      -  `slategray <https://drafts.csswg.org/css-color-3/#slategray>`__
      -  `slategrey <https://drafts.csswg.org/css-color-3/#slategrey>`__
      -  `small <https://drafts.csswg.org/css-text-3/#kana-small>`__
      -  `small kana <https://drafts.csswg.org/css-text-3/#kana-small>`__
      -  `snow <https://drafts.csswg.org/css-color-3/#snow>`__
      -  `soft wrap break <https://drafts.csswg.org/css-text-3/#soft-wrap-break>`__
      -  `soft wrap opportunity <https://drafts.csswg.org/css-text-3/#soft-wrap-opportunity>`__
      -  `source <https://drafts.fxtf.org/css-masking-1/#source>`__
      -  `source document <https://www.w3.org/TR/CSS21/conform.html#source-document>`__
      -  `spaces <https://drafts.csswg.org/css-text-3/#spaces>`__
      -  `space-separated matching <https://www.w3.org/TR/CSS21/selector.html#x16>`__
      -  `space to fill <https://drafts.csswg.org/css-grid-1/#space-to-fill>`__
      -  `span count <https://drafts.csswg.org/css-grid-1/#span-count>`__
      -  `spanner <https://www.w3.org/TR/css-multicol-1/#spanner>`__
      -  `spanning element <https://www.w3.org/TR/css-multicol-1/#spanning-element>`__
      -  `<specific-voice> <https://www.w3.org/TR/CSS21/aural.html#value-def-specific-voice>`__
      -  `specified size <https://drafts.csswg.org/css-images-3/#specified-size>`__
      -  specified size suggestion

         -  `in css-flexbox-1 <https://drafts.csswg.org/css-flexbox-1/#specified-size-suggestion>`__
         -  `in css-grid-1 <https://drafts.csswg.org/css-grid-1/#specified-size-suggestion>`__

      -  `specified value <https://drafts.csswg.org/css-cascade-4/#specified-value>`__
      -  `'speech' media group <https://www.w3.org/TR/CSS21/media.html#speech-media-group>`__
      -  `spread break <https://drafts.csswg.org/css-break-3/#spread-break>`__
      -  spread distance

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#spread-distance>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#box-shadow-spread-distance>`__

      -  `springgreen <https://drafts.csswg.org/css-color-3/#springgreen>`__
      -  `stacking context <https://www.w3.org/TR/CSS21/visuren.html#x43>`__
      -  `stack level <https://www.w3.org/TR/CSS21/visuren.html#stack-level>`__
      -  `start <https://drafts.csswg.org/css-writing-modes-4/#css-start>`__
      -  `starting point <https://drafts.csswg.org/css-images-3/#starting-point>`__
      -  `startmost <https://drafts.csswg.org/css-writing-modes-4/#css-start>`__
      -  `starts with an ident sequence <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-an-ident-sequence>`__
      -  `starts with a number <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-a-number>`__
      -  `starts with a valid escape <https://drafts.csswg.org/css-syntax-3/#check-if-two-code-points-are-a-valid-escape>`__
      -  `start time <https://drafts.csswg.org/css-transitions-1/#transition-start-time>`__
      -  `start value <https://drafts.csswg.org/css-transitions-1/#transition-start-value>`__
      -  `start with an ident sequence <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-an-ident-sequence>`__
      -  `start with a number <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-a-number>`__
      -  `statement at-rule <https://drafts.csswg.org/css-syntax-3/#statement-at-rule>`__
      -  `'static' media group <https://www.w3.org/TR/CSS21/media.html#static-media-group>`__
      -  static-position rectangle

         -  `in css-align-3 <https://drafts.csswg.org/css-align-3/#static-position-rectangle>`__
         -  `in css-flexbox-1 <https://www.w3.org/TR/css-flexbox-1/#static-position-rectangle>`__

      -  `steelblue <https://drafts.csswg.org/css-color-3/#steelblue>`__
      -  `step easing function <https://drafts.csswg.org/css-easing-1/#step-easing-function>`__
      -  `step position <https://drafts.csswg.org/css-easing-1/#step-position>`__
      -  `steps <https://drafts.csswg.org/css-easing-1/#steps>`__
      -  `stop or comma <https://drafts.csswg.org/css-text-3/#stop-or-comma>`__
      -  `stretched <https://drafts.csswg.org/css-flexbox-1/#stretched>`__
      -  `strictness value <https://drafts.csswg.org/css-scroll-snap-1/#strictness-value>`__
      -  `<string> <https://www.w3.org/TR/CSS21/syndata.html#value-def-string>`__
      -  `stroke bounding box <https://drafts.fxtf.org/css-masking-1/#stroke-bounding-box>`__
      -  `structural pseudo-classes <https://drafts.csswg.org/selectors-3/#structural-pseudo-classes>`__
      -  `strut size <https://www.w3.org/TR/css-flexbox-1/#strut-size>`__
      -  `stuck on the environment <https://drafts.csswg.org/css-font-loading-3/#fontfaceset-stuck-on-the-environment>`__
      -  `style attribute <https://drafts.csswg.org/css-style-attr/#style-attribute>`__
      -  `style change event <https://drafts.csswg.org/css-transitions-1/#style-change-event>`__
      -  `style rule <https://drafts.csswg.org/css-syntax-3/#style-rule>`__
      -  style sheet

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#style-sheet>`__
         -  `in css-namespaces-3 <https://www.w3.org/TR/css-namespaces-3/#style-sheet>`__
         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#style-sheet>`__

      -  `stylesheet <https://drafts.csswg.org/css-syntax-3/#css-stylesheet>`__
      -  `subject (of selector) <https://www.w3.org/TR/CSS21/selector.html#subject>`__
      -  `subjects of the selector <https://drafts.csswg.org/selectors-3/#subjects-of-the-selector>`__
      -  `sub-property <https://drafts.csswg.org/css-cascade-4/#longhand>`__
      -  `subsequent-sibling combinator <https://drafts.csswg.org/selectors-3/#subsequent-sibling-combinator>`__
      -  `substitute a var() <https://drafts.csswg.org/css-variables-1/#substitute-a-var>`__
      -  support

         -  `in css-conditional-3, for CSS <https://drafts.csswg.org/css-conditional-3/#dfn-support>`__
         -  `in css-fonts-4 <https://drafts.csswg.org/css-fonts-4/#support>`__

      -  `supports queries <https://drafts.csswg.org/css-conditional-3/#supports-queries>`__
      -  `switch the fontfaceset to loaded <https://drafts.csswg.org/css-font-loading-3/#switch-the-fontfaceset-to-loaded>`__
      -  `switch the fontfaceset to loading <https://drafts.csswg.org/css-font-loading-3/#switch-the-fontfaceset-to-loading>`__
      -  `synthesize baseline <https://drafts.csswg.org/css-align-3/#synthesize-baseline>`__
      -  `synthesized baseline <https://drafts.csswg.org/css-align-3/#synthesize-baseline>`__
      -  `system fonts <https://www.w3.org/TR/CSS21/fonts.html#x11>`__
      -  `table caption box <https://drafts.csswg.org/css-display-3/#table-caption-box>`__
      -  `table element <https://www.w3.org/TR/CSS21/tables.html#x2>`__
      -  `tables <https://www.w3.org/TR/CSS21/tables.html#x0>`__
      -  `tabs <https://drafts.csswg.org/css-text-3/#tabs>`__
      -  `tab size <https://drafts.csswg.org/css-text-3/#tab-size-dfn>`__
      -  `tab stop <https://drafts.csswg.org/css-text-3/#tab-stop>`__
      -  `tabular container <https://www.w3.org/TR/CSS21/tables.html#x20>`__
      -  `'tactile' media group <https://www.w3.org/TR/CSS21/media.html#tactile-media-group>`__
      -  `tan <https://drafts.csswg.org/css-color-3/#tan>`__
      -  `target main size <https://drafts.csswg.org/css-flexbox-1/#target-main-size>`__
      -  `teal <https://drafts.csswg.org/css-color-3/#teal>`__
      -  `text/css <https://www.w3.org/TR/CSS21/conform.html#text-css>`__
      -  `text node <https://drafts.csswg.org/css-display-3/#text-nodes>`__
      -  `text sequence <https://drafts.csswg.org/css-display-3/#css-text-sequence>`__
      -  `textual data types <https://drafts.csswg.org/css-values-3/#css-textual-data-types>`__
      -  `thistle <https://drafts.csswg.org/css-color-3/#thistle>`__
      -  `threeddarkshadow <https://drafts.csswg.org/css-color-3/#threeddarkshadow>`__
      -  `threedface <https://drafts.csswg.org/css-color-3/#threedface>`__
      -  `threedhighlight <https://drafts.csswg.org/css-color-3/#threedhighlight>`__
      -  `threedlightshadow <https://drafts.csswg.org/css-color-3/#threedlightshadow>`__
      -  `threedshadow <https://drafts.csswg.org/css-color-3/#threedshadow>`__
      -  `<time> <https://www.w3.org/TR/CSS21/aural.html#value-def-time>`__
      -  `timing function <https://drafts.csswg.org/css-easing-1/#easing-function>`__
      -  `tokenization <https://drafts.csswg.org/css-syntax-3/#css-tokenize>`__
      -  `tokenize <https://drafts.csswg.org/css-syntax-3/#css-tokenize>`__
      -  `tokenizer <https://www.w3.org/TR/CSS21/grammar.html#x3>`__
      -  `tokens <https://drafts.csswg.org/css-syntax-3/#token-stream-tokens>`__
      -  `token stream <https://drafts.csswg.org/css-syntax-3/#css-token-stream>`__
      -  `tomato <https://drafts.csswg.org/css-color-3/#tomato>`__
      -  `top <https://drafts.csswg.org/css-writing-modes-4/#physical-top>`__
      -  `tracking <https://drafts.csswg.org/css-text-3/#tracking>`__
      -  `track list <https://drafts.csswg.org/css-grid-1/#track-list>`__
      -  `track section <https://drafts.csswg.org/css-grid-1/#track-section>`__
      -  `track sizing algorithm <https://drafts.csswg.org/css-grid-1/#track-sizing-algorithm>`__
      -  `track sizing function <https://drafts.csswg.org/css-grid-1/#grid-template-rows-track-sizing-function>`__
      -  `transfer function element <https://drafts.fxtf.org/filter-effects-1/#transfer-function-element>`__
      -  `transfer function element attributes <https://drafts.fxtf.org/filter-effects-1/#transfer-function-element-attributes>`__
      -  transferred size suggestion

         -  `in css-flexbox-1 <https://drafts.csswg.org/css-flexbox-1/#transferred-size-suggestion>`__
         -  `in css-grid-1 <https://drafts.csswg.org/css-grid-1/#transferred-size-suggestion>`__

      -  `transformable element <https://drafts.csswg.org/css-transforms-1/#transformable-element>`__
      -  `transformation matrix <https://drafts.csswg.org/css-transforms-1/#transformation-matrix>`__
      -  `transformed element <https://drafts.csswg.org/css-transforms-1/#transformed-element>`__
      -  `transitionable <https://drafts.csswg.org/css-transitions-1/#transitionable>`__
      -  `transition origin <https://drafts.csswg.org/css-cascade-4/#cascade-origin-transition>`__
      -  `transparent <https://drafts.csswg.org/css-color-3/#transparent-def>`__
      -  `trash token <https://drafts.csswg.org/css-grid-1/#grid-template-areas-trash-token>`__
      -  `triangle <https://drafts.csswg.org/css-counter-styles-3/#triangle>`__
      -  `trinary <https://drafts.csswg.org/css-counter-styles-3/#trinary>`__
      -  `turquoise <https://drafts.csswg.org/css-color-3/#turquoise>`__
      -  type selector

         -  `in css2 <https://www.w3.org/TR/CSS21/selector.html#x11>`__
         -  `in selectors-3 <https://drafts.csswg.org/selectors-3/#type-selector>`__

      -  `typeset sideways <https://drafts.csswg.org/css-writing-modes-4/#typeset-sideways>`__
      -  `typesetting sideways <https://drafts.csswg.org/css-writing-modes-4/#typeset-sideways>`__
      -  `typesetting upright <https://drafts.csswg.org/css-writing-modes-4/#typeset-upright>`__
      -  `typeset upright <https://drafts.csswg.org/css-writing-modes-4/#typeset-upright>`__
      -  `typographic character <https://drafts.csswg.org/css-text-3/#typographic-character-unit>`__
      -  `typographic character unit <https://drafts.csswg.org/css-text-3/#typographic-character-unit>`__
      -  `typographic letter unit <https://drafts.csswg.org/css-text-3/#typographic-letter-unit>`__
      -  `typographic mode <https://drafts.csswg.org/css-writing-modes-4/#typographic-mode>`__
      -  ua

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#ua>`__
         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#ua>`__

      -  `ua origin <https://drafts.csswg.org/css-cascade-4/#cascade-origin-ua>`__
      -  `ua-origin <https://drafts.csswg.org/css-cascade-4/#cascade-origin-ua>`__
      -  `ua style sheet <https://drafts.csswg.org/css-cascade-4/#cascade-origin-ua>`__
      -  `under <https://drafts.csswg.org/css-writing-modes-4/#under>`__
      -  `unforced break <https://drafts.csswg.org/css-break-3/#unforced-break>`__
      -  universal selector

         -  `in css2 <https://www.w3.org/TR/CSS21/selector.html#x10>`__
         -  `in selectors-3 <https://drafts.csswg.org/selectors-3/#universal-selector0>`__

      -  `unknown <https://drafts.csswg.org/css-text-3/#writing-system-known>`__
      -  `unoccupied <https://drafts.csswg.org/css-grid-1/#unoccupied>`__
      -  `upper-alpha-legal <https://drafts.csswg.org/css-counter-styles-3/#upper-alpha-legal>`__
      -  `uppercase letter <https://drafts.csswg.org/css-syntax-3/#uppercase-letter>`__
      -  `upright typesetting <https://drafts.csswg.org/css-writing-modes-4/#typeset-upright>`__
      -  `url <https://drafts.csswg.org/css-values-3/#url>`__
      -  `use a negative sign <https://drafts.csswg.org/css-counter-styles-3/#use-a-negative-sign>`__
      -  `used value <https://drafts.csswg.org/css-cascade-4/#used-value>`__
      -  `user <https://www.w3.org/TR/CSS21/conform.html#user>`__
      -  user agent

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#user-agent>`__
         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#user-agent>`__

      -  `user-agent origin <https://drafts.csswg.org/css-cascade-4/#cascade-origin-ua>`__
      -  `user-agent style sheet <https://drafts.csswg.org/css-cascade-4/#cascade-origin-ua>`__
      -  `user coordinate system <https://drafts.csswg.org/css-transforms-1/#user-coordinate-system>`__
      -  `user origin <https://drafts.csswg.org/css-cascade-4/#cascade-origin-user>`__
      -  `user-origin <https://drafts.csswg.org/css-cascade-4/#cascade-origin-user>`__
      -  `user style sheet <https://drafts.csswg.org/css-cascade-4/#cascade-origin-user>`__
      -  `uses a negative sign <https://drafts.csswg.org/css-counter-styles-3/#use-a-negative-sign>`__
      -  `valid image <https://drafts.csswg.org/css-images-3/#invalid-image>`__
      -  `validity <https://www.w3.org/TR/CSS21/conform.html#valid-style-sheet>`__
      -  `valid style sheet <https://www.w3.org/TR/CSS21/conform.html#valid-style-sheet>`__
      -  `value <https://www.w3.org/TR/CSS21/syndata.html#x21>`__
      -  `value definition syntax <https://drafts.csswg.org/css-values-3/#css-value-definition-syntax>`__
      -  `var()
         substitution <https://drafts.csswg.org/css-variables-1/#substitute-a-var>`__
      -  `vertical axis <https://drafts.csswg.org/css-writing-modes-4/#y-axis>`__
      -  `vertical block flow <https://drafts.csswg.org/css-writing-modes-4/#vertical-block-flow>`__
      -  `vertical dimension <https://drafts.csswg.org/css-writing-modes-4/#vertical-dimension>`__
      -  vertical offset

         -  `in css-backgrounds-3 <https://www.w3.org/TR/css-backgrounds-3/#vertical-offset>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#box-shadow-vertical-offset>`__

      -  `vertical-only <https://drafts.csswg.org/css-writing-modes-4/#vertical-only>`__
      -  `vertical script <https://drafts.csswg.org/css-writing-modes-4/#vertical-script>`__
      -  `vertical typographic mode <https://drafts.csswg.org/css-writing-modes-4/#vertical-typographic-mode>`__
      -  `vertical writing mode <https://drafts.csswg.org/css-writing-modes-4/#vertical-writing-mode>`__
      -  `viewport <https://www.w3.org/TR/CSS21/visuren.html#x1>`__
      -  `viewport-percentage lengths <https://drafts.csswg.org/css-values-3/#viewport-percentage-lengths>`__
      -  `violet <https://drafts.csswg.org/css-color-3/#violet>`__
      -  `:visited <https://www.w3.org/TR/CSS21/selector.html#x29>`__
      -  `visited (pseudo-class) <https://www.w3.org/TR/CSS21/selector.html#x29>`__
      -  `visual angle unit <https://drafts.csswg.org/css-values-3/#visual-angle-unit>`__
      -  `visual formatting model <https://www.w3.org/TR/CSS21/visuren.html#x0>`__
      -  `'visual' media group <https://www.w3.org/TR/CSS21/media.html#visual-media-group>`__
      -  `volume <https://www.w3.org/TR/CSS21/aural.html#x10>`__
      -  `wheat <https://drafts.csswg.org/css-color-3/#wheat>`__
      -  `white <https://drafts.csswg.org/css-color-3/#white>`__
      -  `whitesmoke <https://drafts.csswg.org/css-color-3/#whitesmoke>`__
      -  `white space <https://drafts.csswg.org/css-text-3/#white-space>`__
      -  `whitespace <https://drafts.csswg.org/css-syntax-3/#whitespace>`__
      -  `white space characters <https://drafts.csswg.org/css-text-3/#white-space>`__
      -  `width <https://drafts.csswg.org/css-writing-modes-4/#width>`__
      -  `window <https://drafts.csswg.org/css-color-3/#window>`__
      -  `windowframe <https://drafts.csswg.org/css-color-3/#windowframe>`__
      -  `windowtext <https://drafts.csswg.org/css-color-3/#windowtext>`__
      -  `word separator <https://drafts.csswg.org/css-text-3/#word-separator>`__
      -  `word-separator character <https://drafts.csswg.org/css-text-3/#word-separator>`__
      -  `would start an ident sequence <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-an-ident-sequence>`__
      -  `would start a number <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-a-number>`__
      -  `would start a unicode-range <https://drafts.csswg.org/css-syntax-3/#check-if-three-code-points-would-start-a-unicode-range>`__
      -  wrap

         -  `in css-shapes-1 <https://drafts.csswg.org/css-shapes-1/#wrap>`__
         -  `in css-text-3 <https://drafts.csswg.org/css-text-3/#wrapping>`__

      -  wrapping

         -  `in css-shapes-1 <https://drafts.csswg.org/css-shapes-1/#wrap>`__
         -  `in css-text-3 <https://drafts.csswg.org/css-text-3/#wrapping>`__

      -  `writing mode <https://drafts.csswg.org/css-writing-modes-4/#writing-mode>`__
      -  `x-axis <https://drafts.csswg.org/css-writing-modes-4/#x-axis>`__
      -  `x-height <https://www.w3.org/TR/CSS21/syndata.html#ex>`__
      -  `y-axis <https://drafts.csswg.org/css-writing-modes-4/#y-axis>`__
      -  `yellow <https://drafts.csswg.org/css-color-3/#yellow>`__
      -  `yellowgreen <https://drafts.csswg.org/css-color-3/#yellowgreen>`__

   .. rubric:: 5.2. Selector Index ` <#selectors>`__
      :name: selectors
      :class: heading settled

   .. container::

      -  `\* <https://drafts.csswg.org/selectors-3/#x>`__
      -  `:active <https://drafts.csswg.org/selectors-3/#sel-active>`__
      -  `::after <https://drafts.csswg.org/selectors-3/#sel-after>`__
      -  `::before <https://drafts.csswg.org/selectors-3/#sel-before>`__
      -  `:checked <https://drafts.csswg.org/selectors-3/#sel-checked>`__
      -  `:disabled <https://drafts.csswg.org/selectors-3/#sel-disabled>`__
      -  `:empty <https://drafts.csswg.org/selectors-3/#sel-empty>`__
      -  `:enabled <https://drafts.csswg.org/selectors-3/#sel-enabled>`__
      -  `:first-child <https://drafts.csswg.org/selectors-3/#sel-first-child>`__
      -  `::first-letter <https://drafts.csswg.org/selectors-3/#first-letter0>`__
      -  `::first-line <https://drafts.csswg.org/selectors-3/#sel-first-line>`__
      -  `:first-of-type <https://drafts.csswg.org/selectors-3/#sel-first-of-type>`__
      -  `:focus <https://drafts.csswg.org/selectors-3/#sel-focus>`__
      -  `:hover <https://drafts.csswg.org/selectors-3/#sel-hover>`__
      -  `:lang <https://drafts.csswg.org/selectors-3/#sel-lang>`__
      -  `:last-child <https://drafts.csswg.org/selectors-3/#sel-last-child>`__
      -  `:last-of-type <https://drafts.csswg.org/selectors-3/#sel-last-of-type>`__
      -  `:link <https://drafts.csswg.org/selectors-3/#sel-link>`__
      -  `:not() <https://drafts.csswg.org/selectors-3/#sel-not>`__
      -  `:nth-child() <https://drafts.csswg.org/selectors-3/#sel-nth-child>`__
      -  `:nth-last-child() <https://drafts.csswg.org/selectors-3/#sel-nth-last-child>`__
      -  `:nth-last-of-type() <https://drafts.csswg.org/selectors-3/#sel-nth-last-of-type>`__
      -  `:nth-of-type() <https://drafts.csswg.org/selectors-3/#sel-nth-of-type>`__
      -  `:only-child <https://drafts.csswg.org/selectors-3/#sel-only-child>`__
      -  `:only-of-type <https://drafts.csswg.org/selectors-3/#sel-only-of-type>`__
      -  `:root <https://drafts.csswg.org/selectors-3/#sel-root>`__
      -  `:target <https://drafts.csswg.org/selectors-3/#sel-target>`__
      -  `:visited <https://drafts.csswg.org/selectors-3/#sel-visited>`__

   .. rubric:: 5.3. At-Rule Index ` <#at-rules>`__
      :name: at-rules
      :class: heading settled

   .. container::

      -  `@annotation <https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-feature-values-annotation>`__
      -  `@character-variant <https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-feature-values-character-variant>`__
      -  `@charset <https://drafts.csswg.org/css-syntax-3/#at-ruledef-charset>`__
      -  `@counter-style <https://drafts.csswg.org/css-counter-styles-3/#at-ruledef-counter-style>`__
      -  `@font-face <https://drafts.csswg.org/css-fonts-4/#at-font-face-rule>`__
      -  `@font-feature-values <https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-feature-values>`__
      -  `@font-palette-values <https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-palette-values>`__
      -  `@historical-forms <https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-feature-values-historical-forms>`__
      -  `@import <https://drafts.csswg.org/css-cascade-4/#at-ruledef-import>`__
      -  `@keyframes <https://drafts.csswg.org/css-animations-1/#at-ruledef-keyframes>`__
      -  `@media <https://drafts.csswg.org/css-conditional-3/#at-ruledef-media>`__
      -  `@namespace <https://drafts.csswg.org/css-namespaces-3/#at-ruledef-namespace>`__
      -  `@ornaments <https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-feature-values-ornaments>`__
      -  `@styleset <https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-feature-values-styleset>`__
      -  `@stylistic <https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-feature-values-stylistic>`__
      -  `@supports <https://drafts.csswg.org/css-conditional-3/#at-ruledef-supports>`__
      -  `@swash <https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-feature-values-swash>`__

   .. rubric:: 5.4. Property Index ` <#properties>`__
      :name: properties
      :class: heading settled

   .. container::

      -  `--\* <https://drafts.csswg.org/css-variables-1/#propdef->`__
      -  align-content

         -  `in css-align-3 <https://drafts.csswg.org/css-align-3/#propdef-align-content>`__
         -  `in css-flexbox-1 <https://drafts.csswg.org/css-flexbox-1/#propdef-align-content>`__

      -  align-items

         -  `in css-align-3 <https://drafts.csswg.org/css-align-3/#propdef-align-items>`__
         -  `in css-flexbox-1 <https://drafts.csswg.org/css-flexbox-1/#propdef-align-items>`__

      -  align-self

         -  `in css-align-3 <https://drafts.csswg.org/css-align-3/#propdef-align-self>`__
         -  `in css-flexbox-1 <https://drafts.csswg.org/css-flexbox-1/#propdef-align-self>`__

      -  `all <https://drafts.csswg.org/css-cascade-4/#propdef-all>`__
      -  `animation <https://drafts.csswg.org/css-animations-1/#propdef-animation>`__
      -  `animation-delay <https://drafts.csswg.org/css-animations-1/#propdef-animation-delay>`__
      -  `animation-direction <https://drafts.csswg.org/css-animations-1/#propdef-animation-direction>`__
      -  `animation-duration <https://drafts.csswg.org/css-animations-1/#propdef-animation-duration>`__
      -  `animation-fill-mode <https://drafts.csswg.org/css-animations-1/#propdef-animation-fill-mode>`__
      -  `animation-iteration-count <https://drafts.csswg.org/css-animations-1/#propdef-animation-iteration-count>`__
      -  `animation-name <https://drafts.csswg.org/css-animations-1/#propdef-animation-name>`__
      -  `animation-play-state <https://drafts.csswg.org/css-animations-1/#propdef-animation-play-state>`__
      -  `animation-timing-function <https://drafts.csswg.org/css-animations-1/#propdef-animation-timing-function>`__
      -  `azimuth <https://www.w3.org/TR/CSS21/aural.html#propdef-azimuth>`__
      -  `background <https://drafts.csswg.org/css-backgrounds-3/#propdef-background>`__
      -  `background-attachment <https://drafts.csswg.org/css-backgrounds-3/#propdef-background-attachment>`__
      -  `background-blend-mode <https://drafts.fxtf.org/compositing-1/#propdef-background-blend-mode>`__
      -  `background-clip <https://drafts.csswg.org/css-backgrounds-3/#propdef-background-clip>`__
      -  `background-color <https://drafts.csswg.org/css-backgrounds-3/#propdef-background-color>`__
      -  `background-image <https://drafts.csswg.org/css-backgrounds-3/#propdef-background-image>`__
      -  `background-origin <https://drafts.csswg.org/css-backgrounds-3/#propdef-background-origin>`__
      -  `background-position <https://drafts.csswg.org/css-backgrounds-3/#propdef-background-position>`__
      -  `background-repeat <https://drafts.csswg.org/css-backgrounds-3/#propdef-background-repeat>`__
      -  `background-size <https://drafts.csswg.org/css-backgrounds-3/#propdef-background-size>`__
      -  `border <https://drafts.csswg.org/css-backgrounds-3/#propdef-border>`__
      -  `border-bottom <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom>`__
      -  `border-bottom-color <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-color>`__
      -  `border-bottom-left-radius <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-left-radius>`__
      -  `border-bottom-right-radius <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-right-radius>`__
      -  `border-bottom-style <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-style>`__
      -  `border-bottom-width <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-width>`__
      -  `border-collapse <https://www.w3.org/TR/CSS21/tables.html#propdef-border-collapse>`__
      -  `border-color <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-color>`__
      -  `border-image <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image>`__
      -  `border-image-outset <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-outset>`__
      -  `border-image-repeat <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-repeat>`__
      -  `border-image-slice <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-slice>`__
      -  `border-image-source <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-source>`__
      -  `border-image-width <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-width>`__
      -  `border-left <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-left>`__
      -  `border-left-color <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-left-color>`__
      -  `border-left-style <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-left-style>`__
      -  `border-left-width <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-left-width>`__
      -  `border-radius <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-radius>`__
      -  `border-right <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-right>`__
      -  `border-right-color <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-right-color>`__
      -  `border-right-style <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-right-style>`__
      -  `border-right-width <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-right-width>`__
      -  `border-spacing <https://www.w3.org/TR/CSS21/tables.html#propdef-border-spacing>`__
      -  `border-style <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-style>`__
      -  `border-top <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top>`__
      -  `border-top-color <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-color>`__
      -  `border-top-left-radius <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-left-radius>`__
      -  `border-top-right-radius <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-right-radius>`__
      -  `border-top-style <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-style>`__
      -  `border-top-width <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-top-width>`__
      -  `border-width <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-width>`__
      -  `bottom <https://www.w3.org/TR/CSS21/visuren.html#propdef-bottom>`__
      -  `box-decoration-break <https://drafts.csswg.org/css-break-3/#propdef-box-decoration-break>`__
      -  `box-shadow <https://drafts.csswg.org/css-backgrounds-3/#propdef-box-shadow>`__
      -  `box-sizing <https://drafts.csswg.org/css-ui-3/#propdef-box-sizing>`__
      -  `break-after <https://drafts.csswg.org/css-break-3/#propdef-break-after>`__
      -  `break-before <https://drafts.csswg.org/css-break-3/#propdef-break-before>`__
      -  `break-inside <https://drafts.csswg.org/css-break-3/#propdef-break-inside>`__
      -  `caption-side <https://www.w3.org/TR/CSS21/tables.html#propdef-caption-side>`__
      -  `caret-color <https://drafts.csswg.org/css-ui-3/#propdef-caret-color>`__
      -  `clear <https://www.w3.org/TR/CSS21/visuren.html#propdef-clear>`__
      -  `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__
      -  `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__
      -  `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__
      -  `color <https://www.w3.org/TR/CSS21/colors.html#propdef-color>`__
      -  `color-interpolation-filters <https://drafts.fxtf.org/filter-effects-1/#propdef-color-interpolation-filters>`__
      -  `column-count <https://drafts.csswg.org/css-multicol-1/#propdef-column-count>`__
      -  `column-fill <https://drafts.csswg.org/css-multicol-1/#propdef-column-fill>`__
      -  `column-gap <https://drafts.csswg.org/css-align-3/#propdef-column-gap>`__
      -  `column-rule <https://drafts.csswg.org/css-multicol-1/#propdef-column-rule>`__
      -  `column-rule-color <https://drafts.csswg.org/css-multicol-1/#propdef-column-rule-color>`__
      -  `column-rule-style <https://drafts.csswg.org/css-multicol-1/#propdef-column-rule-style>`__
      -  `column-rule-width <https://drafts.csswg.org/css-multicol-1/#propdef-column-rule-width>`__
      -  `columns <https://drafts.csswg.org/css-multicol-1/#propdef-columns>`__
      -  `column-span <https://drafts.csswg.org/css-multicol-1/#propdef-column-span>`__
      -  `column-width <https://drafts.csswg.org/css-multicol-1/#propdef-column-width>`__
      -  `contain <https://drafts.csswg.org/css-contain-1/#propdef-contain>`__
      -  `content <https://www.w3.org/TR/CSS21/generate.html#propdef-content>`__
      -  `counter-increment <https://www.w3.org/TR/CSS21/generate.html#propdef-counter-increment>`__
      -  `counter-reset <https://www.w3.org/TR/CSS21/generate.html#propdef-counter-reset>`__
      -  cue

         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#propdef-cue>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/aural.html#propdef-cue>`__

      -  cue-after

         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#propdef-cue-after>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/aural.html#propdef-cue-after>`__

      -  cue-before

         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#propdef-cue-before>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/aural.html#propdef-cue-before>`__

      -  `cursor <https://drafts.csswg.org/css-ui-3/#propdef-cursor>`__
      -  `direction <https://drafts.csswg.org/css-writing-modes-4/#propdef-direction>`__
      -  `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__
      -  `elevation <https://www.w3.org/TR/CSS21/aural.html#propdef-elevation>`__
      -  `empty-cells <https://www.w3.org/TR/CSS21/tables.html#propdef-empty-cells>`__
      -  `filter <https://drafts.fxtf.org/filter-effects-1/#propdef-filter>`__
      -  `flex <https://drafts.csswg.org/css-flexbox-1/#propdef-flex>`__
      -  `flex-basis <https://drafts.csswg.org/css-flexbox-1/#propdef-flex-basis>`__
      -  `flex-direction <https://drafts.csswg.org/css-flexbox-1/#propdef-flex-direction>`__
      -  `flex-flow <https://drafts.csswg.org/css-flexbox-1/#propdef-flex-flow>`__
      -  `flex-grow <https://drafts.csswg.org/css-flexbox-1/#propdef-flex-grow>`__
      -  `flex-shrink <https://drafts.csswg.org/css-flexbox-1/#propdef-flex-shrink>`__
      -  `flex-wrap <https://drafts.csswg.org/css-flexbox-1/#propdef-flex-wrap>`__
      -  `float <https://www.w3.org/TR/CSS21/visuren.html#propdef-float>`__
      -  `flood-color <https://drafts.fxtf.org/filter-effects-1/#propdef-flood-color>`__
      -  `flood-opacity <https://drafts.fxtf.org/filter-effects-1/#propdef-flood-opacity>`__
      -  `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__
      -  `font-family <https://drafts.csswg.org/css-fonts-4/#propdef-font-family>`__
      -  `font-feature-settings <https://drafts.csswg.org/css-fonts-4/#propdef-font-feature-settings>`__
      -  `font-kerning <https://drafts.csswg.org/css-fonts-4/#propdef-font-kerning>`__
      -  `font-language-override <https://drafts.csswg.org/css-fonts-4/#propdef-font-language-override>`__
      -  `font-optical-sizing <https://drafts.csswg.org/css-fonts-4/#propdef-font-optical-sizing>`__
      -  `font-palette <https://drafts.csswg.org/css-fonts-4/#propdef-font-palette>`__
      -  `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__
      -  `font-size-adjust <https://drafts.csswg.org/css-fonts-4/#propdef-font-size-adjust>`__
      -  `font-stretch <https://drafts.csswg.org/css-fonts-4/#propdef-font-stretch>`__
      -  `font-style <https://drafts.csswg.org/css-fonts-4/#propdef-font-style>`__
      -  `font-synthesis <https://drafts.csswg.org/css-fonts-4/#propdef-font-synthesis>`__
      -  `font-synthesis-position <https://drafts.csswg.org/css-fonts-4/#propdef-font-synthesis-position>`__
      -  `font-synthesis-small-caps <https://drafts.csswg.org/css-fonts-4/#propdef-font-synthesis-small-caps>`__
      -  `font-synthesis-style <https://drafts.csswg.org/css-fonts-4/#propdef-font-synthesis-style>`__
      -  `font-synthesis-weight <https://drafts.csswg.org/css-fonts-4/#propdef-font-synthesis-weight>`__
      -  `font-variant <https://drafts.csswg.org/css-fonts-4/#propdef-font-variant>`__
      -  `font-variant-alternates <https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates>`__
      -  `font-variant-caps <https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-caps>`__
      -  `font-variant-east-asian <https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-east-asian>`__
      -  `font-variant-emoji <https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-emoji>`__
      -  `font-variant-ligatures <https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-ligatures>`__
      -  `font-variant-numeric <https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-numeric>`__
      -  `font-variant-position <https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-position>`__
      -  `font-variation-settings <https://drafts.csswg.org/css-fonts-4/#propdef-font-variation-settings>`__
      -  `font-weight <https://drafts.csswg.org/css-fonts-4/#propdef-font-weight>`__
      -  `gap <https://drafts.csswg.org/css-align-3/#propdef-gap>`__
      -  `glyph-orientation-vertical <https://drafts.csswg.org/css-writing-modes-4/#propdef-glyph-orientation-vertical>`__
      -  `grid <https://drafts.csswg.org/css-grid-1/#propdef-grid>`__
      -  `grid-area <https://drafts.csswg.org/css-grid-1/#propdef-grid-area>`__
      -  `grid-auto-columns <https://drafts.csswg.org/css-grid-1/#propdef-grid-auto-columns>`__
      -  `grid-auto-flow <https://drafts.csswg.org/css-grid-1/#propdef-grid-auto-flow>`__
      -  `grid-auto-rows <https://drafts.csswg.org/css-grid-1/#propdef-grid-auto-rows>`__
      -  `grid-column <https://drafts.csswg.org/css-grid-1/#propdef-grid-column>`__
      -  `grid-column-end <https://drafts.csswg.org/css-grid-1/#propdef-grid-column-end>`__
      -  `grid-column-gap <https://drafts.csswg.org/css-align-3/#propdef-grid-column-gap>`__
      -  `grid-column-start <https://drafts.csswg.org/css-grid-1/#propdef-grid-column-start>`__
      -  `grid-gap <https://drafts.csswg.org/css-align-3/#propdef-grid-gap>`__
      -  `grid-row <https://drafts.csswg.org/css-grid-1/#propdef-grid-row>`__
      -  `grid-row-end <https://drafts.csswg.org/css-grid-1/#propdef-grid-row-end>`__
      -  `grid-row-gap <https://drafts.csswg.org/css-align-3/#propdef-grid-row-gap>`__
      -  `grid-row-start <https://drafts.csswg.org/css-grid-1/#propdef-grid-row-start>`__
      -  `grid-template <https://drafts.csswg.org/css-grid-1/#propdef-grid-template>`__
      -  `grid-template-areas <https://drafts.csswg.org/css-grid-1/#propdef-grid-template-areas>`__
      -  `grid-template-columns <https://drafts.csswg.org/css-grid-1/#propdef-grid-template-columns>`__
      -  `grid-template-rows <https://drafts.csswg.org/css-grid-1/#propdef-grid-template-rows>`__
      -  `hanging-punctuation <https://drafts.csswg.org/css-text-3/#propdef-hanging-punctuation>`__
      -  `height <https://www.w3.org/TR/CSS21/visudet.html#propdef-height>`__
      -  `hyphens <https://drafts.csswg.org/css-text-3/#propdef-hyphens>`__
      -  `image-orientation <https://drafts.csswg.org/css-images-3/#propdef-image-orientation>`__
      -  `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__
      -  `isolation <https://drafts.fxtf.org/compositing-1/#propdef-isolation>`__
      -  justify-content

         -  `in css-align-3 <https://drafts.csswg.org/css-align-3/#propdef-justify-content>`__
         -  `in css-flexbox-1 <https://drafts.csswg.org/css-flexbox-1/#propdef-justify-content>`__

      -  `justify-items <https://drafts.csswg.org/css-align-3/#propdef-justify-items>`__
      -  `justify-self <https://drafts.csswg.org/css-align-3/#propdef-justify-self>`__
      -  `left <https://www.w3.org/TR/CSS21/visuren.html#propdef-left>`__
      -  `letter-spacing <https://drafts.csswg.org/css-text-3/#propdef-letter-spacing>`__
      -  `lighting-color <https://drafts.fxtf.org/filter-effects-1/#propdef-lighting-color>`__
      -  `line-break <https://drafts.csswg.org/css-text-3/#propdef-line-break>`__
      -  `line-height <https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height>`__
      -  `list-style <https://www.w3.org/TR/CSS21/generate.html#propdef-list-style>`__
      -  `list-style-image <https://www.w3.org/TR/CSS21/generate.html#propdef-list-style-image>`__
      -  `list-style-position <https://www.w3.org/TR/CSS21/generate.html#propdef-list-style-position>`__
      -  `list-style-type <https://www.w3.org/TR/CSS21/generate.html#propdef-list-style-type>`__
      -  `margin <https://www.w3.org/TR/CSS21/box.html#propdef-margin>`__
      -  `margin-bottom <https://www.w3.org/TR/CSS21/box.html#propdef-margin-bottom>`__
      -  `margin-left <https://www.w3.org/TR/CSS21/box.html#propdef-margin-left>`__
      -  `margin-right <https://www.w3.org/TR/CSS21/box.html#propdef-margin-right>`__
      -  `margin-top <https://www.w3.org/TR/CSS21/box.html#propdef-margin-top>`__
      -  `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__
      -  `mask-border <https://drafts.fxtf.org/css-masking-1/#propdef-mask-border>`__
      -  `mask-border-mode <https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-mode>`__
      -  `mask-border-outset <https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-outset>`__
      -  `mask-border-repeat <https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-repeat>`__
      -  `mask-border-slice <https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-slice>`__
      -  `mask-border-source <https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-source>`__
      -  `mask-border-width <https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-width>`__
      -  `mask-clip <https://drafts.fxtf.org/css-masking-1/#propdef-mask-clip>`__
      -  `mask-composite <https://drafts.fxtf.org/css-masking-1/#propdef-mask-composite>`__
      -  `mask-image <https://drafts.fxtf.org/css-masking-1/#propdef-mask-image>`__
      -  `mask-mode <https://drafts.fxtf.org/css-masking-1/#propdef-mask-mode>`__
      -  `mask-origin <https://drafts.fxtf.org/css-masking-1/#propdef-mask-origin>`__
      -  `mask-position <https://drafts.fxtf.org/css-masking-1/#propdef-mask-position>`__
      -  `mask-repeat <https://drafts.fxtf.org/css-masking-1/#propdef-mask-repeat>`__
      -  `mask-size <https://drafts.fxtf.org/css-masking-1/#propdef-mask-size>`__
      -  `mask-type <https://drafts.fxtf.org/css-masking-1/#propdef-mask-type>`__
      -  `max-height <https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height>`__
      -  `max-width <https://www.w3.org/TR/CSS21/visudet.html#propdef-max-width>`__
      -  `min-height <https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height>`__
      -  `min-width <https://www.w3.org/TR/CSS21/visudet.html#propdef-min-width>`__
      -  `mix-blend-mode <https://drafts.fxtf.org/compositing-1/#propdef-mix-blend-mode>`__
      -  `object-fit <https://drafts.csswg.org/css-images-3/#propdef-object-fit>`__
      -  `object-position <https://drafts.csswg.org/css-images-3/#propdef-object-position>`__
      -  order

         -  `in css-display-3 <https://drafts.csswg.org/css-display-3/#propdef-order>`__
         -  `in css-flexbox-1 <https://www.w3.org/TR/css-flexbox-1/#propdef-order>`__

      -  `orphans <https://drafts.csswg.org/css-break-3/#propdef-orphans>`__
      -  `outline <https://drafts.csswg.org/css-ui-3/#propdef-outline>`__
      -  `outline-color <https://drafts.csswg.org/css-ui-3/#propdef-outline-color>`__
      -  `outline-offset <https://drafts.csswg.org/css-ui-3/#propdef-outline-offset>`__
      -  `outline-style <https://drafts.csswg.org/css-ui-3/#propdef-outline-style>`__
      -  `outline-width <https://drafts.csswg.org/css-ui-3/#propdef-outline-width>`__
      -  `overflow <https://www.w3.org/TR/CSS21/visufx.html#propdef-overflow>`__
      -  `overflow-wrap <https://drafts.csswg.org/css-text-3/#propdef-overflow-wrap>`__
      -  `padding <https://www.w3.org/TR/CSS21/box.html#propdef-padding>`__
      -  `padding-bottom <https://www.w3.org/TR/CSS21/box.html#propdef-padding-bottom>`__
      -  `padding-left <https://www.w3.org/TR/CSS21/box.html#propdef-padding-left>`__
      -  `padding-right <https://www.w3.org/TR/CSS21/box.html#propdef-padding-right>`__
      -  `padding-top <https://www.w3.org/TR/CSS21/box.html#propdef-padding-top>`__
      -  `page-break-after <https://www.w3.org/TR/CSS21/page.html#propdef-page-break-after>`__
      -  `page-break-before <https://www.w3.org/TR/CSS21/page.html#propdef-page-break-before>`__
      -  `page-break-inside <https://www.w3.org/TR/CSS21/page.html#propdef-page-break-inside>`__
      -  pause

         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#propdef-pause>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/aural.html#propdef-pause>`__

      -  pause-after

         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#propdef-pause-after>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/aural.html#propdef-pause-after>`__

      -  pause-before

         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#propdef-pause-before>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/aural.html#propdef-pause-before>`__

      -  `pitch <https://www.w3.org/TR/CSS21/aural.html#propdef-pitch>`__
      -  `pitch-range <https://www.w3.org/TR/CSS21/aural.html#propdef-pitch-range>`__
      -  `place-content <https://drafts.csswg.org/css-align-3/#propdef-place-content>`__
      -  `place-items <https://drafts.csswg.org/css-align-3/#propdef-place-items>`__
      -  `place-self <https://drafts.csswg.org/css-align-3/#propdef-place-self>`__
      -  `play-during <https://www.w3.org/TR/CSS21/aural.html#propdef-play-during>`__
      -  `position <https://www.w3.org/TR/CSS21/visuren.html#propdef-position>`__
      -  `property-name <https://www.w3.org/TR/CSS21/about.html#propdef-property-name>`__
      -  `quotes <https://www.w3.org/TR/CSS21/generate.html#propdef-quotes>`__
      -  `resize <https://drafts.csswg.org/css-ui-3/#propdef-resize>`__
      -  `rest <https://drafts.csswg.org/css-speech-1/#propdef-rest>`__
      -  `rest-after <https://drafts.csswg.org/css-speech-1/#propdef-rest-after>`__
      -  `rest-before <https://drafts.csswg.org/css-speech-1/#propdef-rest-before>`__
      -  `richness <https://www.w3.org/TR/CSS21/aural.html#propdef-richness>`__
      -  `right <https://www.w3.org/TR/CSS21/visuren.html#propdef-right>`__
      -  `row-gap <https://drafts.csswg.org/css-align-3/#propdef-row-gap>`__
      -  `scroll-margin <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin>`__
      -  `scroll-margin-block <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-block>`__
      -  `scroll-margin-block-end <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-block-end>`__
      -  `scroll-margin-block-start <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-block-start>`__
      -  `scroll-margin-bottom <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-bottom>`__
      -  `scroll-margin-inline <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-inline>`__
      -  `scroll-margin-inline-end <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-inline-end>`__
      -  `scroll-margin-inline-start <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-inline-start>`__
      -  `scroll-margin-left <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-left>`__
      -  `scroll-margin-right <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-right>`__
      -  `scroll-margin-top <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-top>`__
      -  `scroll-padding <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding>`__
      -  `scroll-padding-block <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block>`__
      -  `scroll-padding-block-end <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block-end>`__
      -  `scroll-padding-block-start <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block-start>`__
      -  `scroll-padding-bottom <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-bottom>`__
      -  `scroll-padding-inline <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline>`__
      -  `scroll-padding-inline-end <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline-end>`__
      -  `scroll-padding-inline-start <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline-start>`__
      -  `scroll-padding-left <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-left>`__
      -  `scroll-padding-right <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-right>`__
      -  `scroll-padding-top <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-top>`__
      -  `scroll-snap-align <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-snap-align>`__
      -  `scroll-snap-stop <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-snap-stop>`__
      -  `scroll-snap-type <https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-snap-type>`__
      -  `shape-image-threshold <https://drafts.csswg.org/css-shapes-1/#propdef-shape-image-threshold>`__
      -  `shape-margin <https://drafts.csswg.org/css-shapes-1/#propdef-shape-margin>`__
      -  `shape-outside <https://drafts.csswg.org/css-shapes-1/#propdef-shape-outside>`__
      -  speak

         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#propdef-speak>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/aural.html#propdef-speak>`__

      -  `speak-as <https://drafts.csswg.org/css-speech-1/#propdef-speak-as>`__
      -  `speak-header <https://www.w3.org/TR/CSS21/aural.html#propdef-speak-header>`__
      -  `speak-numeral <https://www.w3.org/TR/CSS21/aural.html#propdef-speak-numeral>`__
      -  `speak-punctuation <https://www.w3.org/TR/CSS21/aural.html#propdef-speak-punctuation>`__
      -  `speech-rate <https://www.w3.org/TR/CSS21/aural.html#propdef-speech-rate>`__
      -  `stress <https://www.w3.org/TR/CSS21/aural.html#propdef-stress>`__
      -  `table-layout <https://www.w3.org/TR/CSS21/tables.html#propdef-table-layout>`__
      -  `tab-size <https://drafts.csswg.org/css-text-3/#propdef-tab-size>`__
      -  `text-align <https://drafts.csswg.org/css-text-3/#propdef-text-align>`__
      -  `text-align-all <https://drafts.csswg.org/css-text-3/#propdef-text-align-all>`__
      -  `text-align-last <https://drafts.csswg.org/css-text-3/#propdef-text-align-last>`__
      -  `text-combine-upright <https://drafts.csswg.org/css-writing-modes-4/#propdef-text-combine-upright>`__
      -  `text-decoration <https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration>`__
      -  `text-decoration-color <https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration-color>`__
      -  `text-decoration-line <https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration-line>`__
      -  `text-decoration-style <https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration-style>`__
      -  `text-emphasis <https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis>`__
      -  `text-emphasis-color <https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis-color>`__
      -  `text-emphasis-position <https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis-position>`__
      -  `text-emphasis-style <https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis-style>`__
      -  `text-indent <https://drafts.csswg.org/css-text-3/#propdef-text-indent>`__
      -  `text-justify <https://drafts.csswg.org/css-text-3/#propdef-text-justify>`__
      -  `text-orientation <https://drafts.csswg.org/css-writing-modes-4/#propdef-text-orientation>`__
      -  `text-overflow <https://drafts.csswg.org/css-ui-3/#propdef-text-overflow>`__
      -  `text-shadow <https://drafts.csswg.org/css-text-decor-3/#propdef-text-shadow>`__
      -  `text-transform <https://drafts.csswg.org/css-text-3/#propdef-text-transform>`__
      -  `text-underline-position <https://drafts.csswg.org/css-text-decor-3/#propdef-text-underline-position>`__
      -  `top <https://www.w3.org/TR/CSS21/visuren.html#propdef-top>`__
      -  `transform <https://drafts.csswg.org/css-transforms-1/#propdef-transform>`__
      -  `transform-box <https://drafts.csswg.org/css-transforms-1/#propdef-transform-box>`__
      -  `transform-origin <https://drafts.csswg.org/css-transforms-1/#propdef-transform-origin>`__
      -  `transition <https://drafts.csswg.org/css-transitions-1/#propdef-transition>`__
      -  `transition-delay <https://drafts.csswg.org/css-transitions-1/#propdef-transition-delay>`__
      -  `transition-duration <https://drafts.csswg.org/css-transitions-1/#propdef-transition-duration>`__
      -  `transition-property <https://drafts.csswg.org/css-transitions-1/#propdef-transition-property>`__
      -  `transition-timing-function <https://drafts.csswg.org/css-transitions-1/#propdef-transition-timing-function>`__
      -  `unicode-bidi <https://drafts.csswg.org/css-writing-modes-4/#propdef-unicode-bidi>`__
      -  `vertical-align <https://www.w3.org/TR/CSS21/visudet.html#propdef-vertical-align>`__
      -  `visibility <https://drafts.csswg.org/css-display-3/#propdef-visibility>`__
      -  `voice-balance <https://drafts.csswg.org/css-speech-1/#propdef-voice-balance>`__
      -  `voice-duration <https://drafts.csswg.org/css-speech-1/#propdef-voice-duration>`__
      -  voice-family

         -  `in css-speech-1 <https://drafts.csswg.org/css-speech-1/#propdef-voice-family>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/aural.html#propdef-voice-family>`__

      -  `voice-pitch <https://drafts.csswg.org/css-speech-1/#propdef-voice-pitch>`__
      -  `voice-range <https://drafts.csswg.org/css-speech-1/#propdef-voice-range>`__
      -  `voice-rate <https://drafts.csswg.org/css-speech-1/#propdef-voice-rate>`__
      -  `voice-stress <https://drafts.csswg.org/css-speech-1/#propdef-voice-stress>`__
      -  `voice-volume <https://drafts.csswg.org/css-speech-1/#propdef-voice-volume>`__
      -  `volume <https://www.w3.org/TR/CSS21/aural.html#propdef-volume>`__
      -  `white-space <https://drafts.csswg.org/css-text-3/#propdef-white-space>`__
      -  `widows <https://drafts.csswg.org/css-break-3/#propdef-widows>`__
      -  `width <https://www.w3.org/TR/CSS21/visudet.html#propdef-width>`__
      -  `will-change <https://drafts.csswg.org/css-will-change-1/#propdef-will-change>`__
      -  `word-break <https://drafts.csswg.org/css-text-3/#propdef-word-break>`__
      -  `word-spacing <https://drafts.csswg.org/css-text-3/#propdef-word-spacing>`__
      -  `word-wrap <https://drafts.csswg.org/css-text-3/#propdef-word-wrap>`__
      -  `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
      -  `z-index <https://www.w3.org/TR/CSS21/visuren.html#propdef-z-index>`__

   .. rubric:: 5.5. Values Index ` <#values>`__
      :name: values
      :class: heading settled

   .. container::

      -  ` <https://www.w3.org/TR/css-images-3/#valdef-image-orientation-angle>`__
      -  absolute

         -  `in css-speech-1, for voice-pitch <https://drafts.csswg.org/css-speech-1/#valdef-voice-pitch-absolute>`__
         -  `in css-speech-1, for voice-range <https://drafts.csswg.org/css-speech-1/#valdef-voice-range-absolute>`__

      -  `add <https://drafts.fxtf.org/css-masking-1/#valdef-mask-composite-add>`__
      -  `additive <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-system-additive>`__
      -  `alias <https://drafts.csswg.org/css-ui-3/#valdef-cursor-alias>`__
      -  all

         -  `in css-multicol-1, for column-span <https://drafts.csswg.org/css-multicol-1/#valdef-column-span-all>`__
         -  `in css-transitions-1, for transition-property <https://drafts.csswg.org/css-transitions-1/#valdef-transition-property-all>`__
         -  `in css-writing-modes-4, for text-combine-upright <https://drafts.csswg.org/css-writing-modes-4/#valdef-text-combine-upright-all>`__
         -  `in mediaqueries-4, for @media <https://drafts.csswg.org/mediaqueries-4/#valdef-media-all>`__

      -  `allow-end <https://drafts.csswg.org/css-text-3/#valdef-hanging-punctuation-allow-end>`__
      -  `all-petite-caps <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-caps-all-petite-caps>`__
      -  `all-scroll <https://drafts.csswg.org/css-ui-3/#valdef-cursor-all-scroll>`__
      -  `all-small-caps <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-caps-all-small-caps>`__
      -  alpha

         -  `in css-masking-1, for mask-border-mode <https://drafts.fxtf.org/css-masking-1/#valdef-mask-border-mode-alpha>`__
         -  `in css-masking-1, for mask-mode <https://drafts.fxtf.org/css-masking-1/#valdef-mask-mode-alpha>`__
         -  `in css-masking-1, for mask-type <https://drafts.fxtf.org/css-masking-1/#valdef-mask-type-alpha>`__

      -  `alphabetic <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-system-alphabetic>`__
      -  `alternate <https://drafts.csswg.org/css-animations-1/#valdef-animation-direction-alternate>`__
      -  `alternate-reverse <https://drafts.csswg.org/css-animations-1/#valdef-animation-direction-alternate-reverse>`__
      -  always

         -  `in css-scroll-snap-1, for scroll-snap-stop <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-stop-always>`__
         -  `in css-speech-1, for speak <https://drafts.csswg.org/css-speech-1/#valdef-speak-always>`__

      -  `<angle> <https://drafts.csswg.org/css-images-3/#valdef-image-orientation-angle>`__
      -  `annotation(<feature-value-name>) <https://drafts.csswg.org/css-fonts-4/#annotation>`__
      -  anywhere

         -  `in css-text-3, for line-break <https://drafts.csswg.org/css-text-3/#valdef-line-break-anywhere>`__
         -  `in css-text-3, for overflow-wrap <https://drafts.csswg.org/css-text-3/#valdef-overflow-wrap-anywhere>`__

      -  `arabic-indic <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-arabic-indic>`__
      -  armenian

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#armenian>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-armenian>`__

      -  `aural <https://drafts.csswg.org/mediaqueries-4/#valdef-media-aural>`__
      -  auto

         -  `in css-align-3, for align-self <https://drafts.csswg.org/css-align-3/#valdef-align-self-auto>`__
         -  `in css-align-3, for justify-self <https://drafts.csswg.org/css-align-3/#valdef-justify-self-auto>`__
         -  `in css-backgrounds-3, for background-size <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-size-auto>`__
         -  `in css-backgrounds-3, for border-image-width <https://drafts.csswg.org/css-backgrounds-3/#valdef-border-image-width-auto>`__
         -  `in css-break-3, for break-before,
            break-after <https://drafts.csswg.org/css-break-3/#valdef-break-before-auto>`__
         -  `in css-break-3, for break-inside,
            page-break-inside <https://drafts.csswg.org/css-break-3/#valdef-break-inside-auto>`__
         -  `in css-counter-styles-3, for @counter-style/range <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-range-auto>`__
         -  `in css-counter-styles-3, for @counter-style/speak-as <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-speak-as-auto>`__
         -  `in css-flexbox-1, for align-items,
            align-self <https://drafts.csswg.org/css-flexbox-1/#valdef-align-items-auto>`__
         -  `in css-flexbox-1, for flex-basis <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-basis-auto>`__
         -  `in css-fonts-4, for @font-face/font-display <https://drafts.csswg.org/css-fonts-4/#valdef-font-face-font-display-auto>`__
         -  `in css-fonts-4, for font-kerning <https://drafts.csswg.org/css-fonts-4/#font-kerning-auto-value>`__
         -  `in css-fonts-4, for font-optical-sizing <https://drafts.csswg.org/css-fonts-4/#font-optical-sizing-auto-value>`__
         -  `in css-fonts-4, for font-synthesis-position <https://drafts.csswg.org/css-fonts-4/#valdef-font-synthesis-position-auto>`__
         -  `in css-fonts-4, for font-synthesis-small-caps <https://drafts.csswg.org/css-fonts-4/#valdef-font-synthesis-small-caps-auto>`__
         -  `in css-fonts-4, for font-synthesis-style <https://drafts.csswg.org/css-fonts-4/#valdef-font-synthesis-style-auto>`__
         -  `in css-fonts-4, for font-synthesis-weight <https://drafts.csswg.org/css-fonts-4/#valdef-font-synthesis-weight-auto>`__
         -  `in css-fonts-4, for font-variant-emoji <https://www.w3.org/TR/css-fonts-4/#valdef-font-variant-emoji-auto>`__
         -  `in css-grid-1, for <grid-line> <https://drafts.csswg.org/css-grid-1/#grid-placement-auto>`__
         -  `in css-grid-1, for grid-template-columns,
            grid-template-rows <https://drafts.csswg.org/css-grid-1/#valdef-grid-template-columns-auto>`__
         -  `in css-images-3, for image-rendering <https://drafts.csswg.org/css-images-3/#valdef-image-rendering-auto>`__
         -  `in css-multicol-1, for column-count <https://drafts.csswg.org/css-multicol-1/#valdef-column-count-auto>`__
         -  `in css-multicol-1, for column-fill <https://drafts.csswg.org/css-multicol-1/#valdef-column-fill-auto>`__
         -  `in css-multicol-1, for column-width <https://drafts.csswg.org/css-multicol-1/#valdef-column-width-auto>`__
         -  `in css-scroll-snap-1, for scroll-padding,
            scroll-padding-inline, scroll-padding-inline-start,
            scroll-padding-inline-end, scroll-padding-block,
            scroll-padding-block-start,
            scroll-padding-block-end <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-padding-auto>`__
         -  `in css-speech-1, for speak <https://drafts.csswg.org/css-speech-1/#valdef-speak-auto>`__
         -  `in css-speech-1, for voice-duration <https://drafts.csswg.org/css-speech-1/#valdef-voice-duration-auto>`__
         -  `in css-text-3, for hyphens <https://drafts.csswg.org/css-text-3/#valdef-hyphens-auto>`__
         -  `in css-text-3, for line-break <https://drafts.csswg.org/css-text-3/#valdef-line-break-auto>`__
         -  `in css-text-3, for text-align-last <https://drafts.csswg.org/css-text-3/#valdef-text-align-last-auto>`__
         -  `in css-text-3, for text-justify <https://drafts.csswg.org/css-text-3/#valdef-text-justify-auto>`__
         -  `in css-text-decor-3, for text-underline-position <https://drafts.csswg.org/css-text-decor-3/#underline-auto>`__
         -  `in css-ui-3, for caret-color <https://drafts.csswg.org/css-ui-3/#valdef-caret-color-auto>`__
         -  `in css-ui-3, for cursor <https://drafts.csswg.org/css-ui-3/#valdef-cursor-auto>`__
         -  `in css-will-change-1, for will-change <https://drafts.csswg.org/css-will-change-1/#valdef-will-change-auto>`__
         -  `in filter-effects-1, for color-interpolation-filters <https://drafts.fxtf.org/filter-effects-1/#valdef-color-interpolation-filters-auto>`__

      -  `auto-fill <https://drafts.csswg.org/css-grid-1/#valdef-repeat-auto-fill>`__
      -  `auto-fit <https://drafts.csswg.org/css-grid-1/#valdef-repeat-auto-fit>`__
      -  `[ auto-flow && dense? ] <'grid-auto-rows'>? /
         <'grid-template-columns'> <https://drafts.csswg.org/css-grid-1/#grid-s-auto-column>`__
      -  avoid

         -  `in css-break-3, for break-before,
            break-after <https://drafts.csswg.org/css-break-3/#valdef-break-before-avoid>`__
         -  `in css-break-3, for break-inside,
            page-break-inside <https://drafts.csswg.org/css-break-3/#valdef-break-inside-avoid>`__

      -  avoid-column

         -  `in css-break-3, for break-before,
            break-after <https://drafts.csswg.org/css-break-3/#valdef-break-before-avoid-column>`__
         -  `in css-break-3, for break-inside,
            page-break-inside <https://drafts.csswg.org/css-break-3/#valdef-break-inside-avoid-column>`__

      -  avoid-page

         -  `in css-break-3, for break-before,
            break-after <https://drafts.csswg.org/css-break-3/#valdef-break-before-avoid-page>`__
         -  `in css-break-3, for break-inside,
            page-break-inside <https://drafts.csswg.org/css-break-3/#valdef-break-inside-avoid-page>`__

      -  avoid-region

         -  `in css-break-3, for break-before,
            break-after <https://drafts.csswg.org/css-break-3/#valdef-break-before-avoid-region>`__
         -  `in css-break-3, for break-inside,
            page-break-inside <https://drafts.csswg.org/css-break-3/#valdef-break-inside-avoid-region>`__

      -  `backwards <https://drafts.csswg.org/css-animations-1/#valdef-animation-fill-mode-backwards>`__
      -  `balance <https://drafts.csswg.org/css-multicol-1/#valdef-column-fill-balance>`__
      -  `balance-all <https://drafts.csswg.org/css-multicol-1/#valdef-column-fill-balance-all>`__
      -  baseline

         -  `in css-align-3, for justify-self, justify-items,
            align-content, align-self, align-items,
            <baseline-position> <https://drafts.csswg.org/css-align-3/#valdef-justify-self-baseline>`__
         -  `in css-flexbox-1, for align-items,
            align-self <https://drafts.csswg.org/css-flexbox-1/#valdef-align-items-baseline>`__

      -  `<basic-shape> <https://drafts.csswg.org/css-shapes-1/#valdef-shape-outside-basic-shape>`__
      -  `bengali <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-bengali>`__
      -  `bidi-override <https://drafts.csswg.org/css-writing-modes-4/#valdef-unicode-bidi-bidi-override>`__
      -  `blink <https://drafts.csswg.org/css-text-decor-3/#valdef-text-decoration-line-blink>`__
      -  block

         -  `in css-display-3, for display,
            <display-outside> <https://drafts.csswg.org/css-display-3/#valdef-display-block>`__
         -  `in css-fonts-4, for @font-face/font-display <https://drafts.csswg.org/css-fonts-4/#valdef-font-face-font-display-block>`__
         -  `in css-scroll-snap-1, for scroll-snap-type <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-type-block>`__

      -  `bold <https://drafts.csswg.org/css-fonts-4/#valdef-font-weight-bold>`__
      -  `bolder <https://drafts.csswg.org/css-fonts-4/#valdef-font-weight-bolder>`__
      -  border-box

         -  `in css-backgrounds-3, for background-clip <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-clip-border-box>`__
         -  `in css-backgrounds-3, for background-origin <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-origin-border-box>`__
         -  `in css-masking-1, for mask-clip <https://drafts.fxtf.org/css-masking-1/#valdef-mask-clip-border-box>`__
         -  `in css-masking-1, for mask-origin <https://drafts.fxtf.org/css-masking-1/#valdef-mask-origin-border-box>`__
         -  `in css-shapes-1, for <shape-box>,
            shape-outside <https://drafts.csswg.org/css-shapes-1/#valdef-shape-box-border-box>`__
         -  `in css-transforms-1, for transform-box <https://drafts.csswg.org/css-transforms-1/#valdef-transform-box-border-box>`__
         -  `in css-ui-3, for box-sizing <https://drafts.csswg.org/css-ui-3/#valdef-box-sizing-border-box>`__

      -  both

         -  `in css-animations-1, for animation-fill-mode <https://drafts.csswg.org/css-animations-1/#valdef-animation-fill-mode-both>`__
         -  `in css-scroll-snap-1, for scroll-snap-type <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-type-both>`__

      -  bottom

         -  `in css-backgrounds-3, for background-position <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-position-bottom>`__
         -  `in css-transforms-1, for transform-origin <https://drafts.csswg.org/css-transforms-1/#valdef-transform-origin-bottom>`__

      -  `braille <https://drafts.csswg.org/mediaqueries-4/#valdef-media-braille>`__
      -  `break-all <https://drafts.csswg.org/css-text-3/#valdef-word-break-break-all>`__
      -  `break-spaces <https://drafts.csswg.org/css-text-3/#valdef-white-space-break-spaces>`__
      -  break-word

         -  `in css-text-3, for overflow-wrap <https://drafts.csswg.org/css-text-3/#valdef-overflow-wrap-break-word>`__
         -  `in css-text-3, for word-break <https://drafts.csswg.org/css-text-3/#valdef-word-break-break-word>`__

      -  `bullets <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-speak-as-bullets>`__
      -  `cambodian <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-cambodian>`__
      -  `capitalize <https://drafts.csswg.org/css-text-3/#valdef-text-transform-capitalize>`__
      -  `caption <https://drafts.csswg.org/css-fonts-4/#valdef-font-caption>`__
      -  `cell <https://drafts.csswg.org/css-ui-3/#valdef-cursor-cell>`__
      -  center

         -  `in css-align-3, for <self-position>, <content-position>,
            justify-self, align-self, justify-content,
            align-content <https://drafts.csswg.org/css-align-3/#valdef-self-position-center>`__
         -  `in css-backgrounds-3, for background-position <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-position-center>`__
         -  `in css-flexbox-1, for align-content <https://drafts.csswg.org/css-flexbox-1/#valdef-align-content-center>`__
         -  `in css-flexbox-1, for align-items,
            align-self <https://drafts.csswg.org/css-flexbox-1/#valdef-align-items-center>`__
         -  `in css-flexbox-1, for justify-content <https://drafts.csswg.org/css-flexbox-1/#valdef-justify-content-center>`__
         -  `in css-scroll-snap-1, for scroll-snap-align <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-align-center>`__
         -  `in css-speech-1, for voice-balance <https://drafts.csswg.org/css-speech-1/#valdef-voice-balance-center>`__
         -  `in css-text-3, for text-align <https://drafts.csswg.org/css-text-3/#valdef-text-align-center>`__
         -  `in css-transforms-1, for transform-origin <https://drafts.csswg.org/css-transforms-1/#valdef-transform-origin-center>`__

      -  `ch <https://drafts.csswg.org/css-values-3/#ch>`__
      -  `character-variant(<feature-value-name>#) <https://drafts.csswg.org/css-fonts-4/#character-variant>`__
      -  `child <https://drafts.csswg.org/css-speech-1/#valdef-voice-family-child>`__
      -  circle

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#circle>`__
         -  `in css-images-3, for <ending-shape> <https://www.w3.org/TR/css-images-3/#valdef-ending-shape-circle>`__
         -  `in css-images-3, for <rg-ending-shape> <https://drafts.csswg.org/css-images-3/#valdef-rg-ending-shape-circle>`__
         -  `in css-text-decor-3, for text-emphasis-style <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-style-circle>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-circle>`__

      -  `cjk-decimal <https://drafts.csswg.org/css-counter-styles-3/#cjk-decimal>`__
      -  `cjk-earthly-branch <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-cjk-earthly-branch>`__
      -  `cjk-heavenly-stem <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-cjk-heavenly-stem>`__
      -  `cjk-ideographic <https://drafts.csswg.org/css-counter-styles-3/#cjk-ideographic>`__
      -  `clip <https://drafts.csswg.org/css-ui-3/#overflow-clip>`__
      -  `clone <https://drafts.csswg.org/css-break-3/#valdef-box-decoration-break-clone>`__
      -  `close-quote <https://www.w3.org/TR/CSS21/generate.html#value-def-close-quote>`__
      -  closest-corner

         -  `in css-images-3, for <rg-extent-keyword>,
            radial-gradient(),
            repeating-radial-gradient() <https://drafts.csswg.org/css-images-3/#valdef-rg-extent-keyword-closest-corner>`__
         -  `in css-images-3, for <size> <https://www.w3.org/TR/css-images-3/#valdef-size-closest-corner>`__

      -  closest-side

         -  `in css-images-3, for <rg-extent-keyword>,
            radial-gradient(),
            repeating-radial-gradient() <https://drafts.csswg.org/css-images-3/#valdef-rg-extent-keyword-closest-side>`__
         -  `in css-images-3, for <size> <https://www.w3.org/TR/css-images-3/#valdef-size-closest-side>`__

      -  `cm <https://drafts.csswg.org/css-values-3/#cm>`__
      -  `coarse <https://drafts.csswg.org/mediaqueries-4/#valdef-media-pointer-coarse>`__
      -  `collapse <https://drafts.csswg.org/css-display-3/#valdef-visibility-collapse>`__
      -  `color <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-color>`__
      -  `color-burn <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-color-burn>`__
      -  `color-dodge <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-color-dodge>`__
      -  `col-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-col-resize>`__
      -  column

         -  `in css-break-3, for break-before,
            break-after <https://drafts.csswg.org/css-break-3/#valdef-break-before-column>`__
         -  `in css-flexbox-1, for flex-direction <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-direction-column>`__
         -  `in css-grid-1, for grid-auto-flow <https://drafts.csswg.org/css-grid-1/#valdef-grid-auto-flow-column>`__

      -  `column-reverse <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-direction-column-reverse>`__
      -  `common-ligatures <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-ligatures-common-ligatures>`__
      -  `condensed <https://drafts.csswg.org/css-fonts-4/#valdef-font-stretch-condensed>`__
      -  contain

         -  `in css-backgrounds-3, for background-size <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-size-contain>`__
         -  `in css-images-3, for object-fit <https://drafts.csswg.org/css-images-3/#valdef-object-fit-contain>`__

      -  content

         -  `in css-contain-1, for contain <https://drafts.csswg.org/css-contain-1/#valdef-contain-content>`__
         -  `in css-flexbox-1, for flex-basis <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-basis-content>`__

      -  content-box

         -  `in css-backgrounds-3, for background-clip <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-clip-content-box>`__
         -  `in css-backgrounds-3, for background-origin <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-origin-content-box>`__
         -  `in css-masking-1, for mask-clip <https://drafts.fxtf.org/css-masking-1/#valdef-mask-clip-content-box>`__
         -  `in css-masking-1, for mask-origin <https://drafts.fxtf.org/css-masking-1/#valdef-mask-origin-content-box>`__
         -  `in css-shapes-1, for <shape-box>,
            shape-outside <https://drafts.csswg.org/css-shapes-1/#valdef-shape-box-content-box>`__
         -  `in css-transforms-1, for transform-box <https://drafts.csswg.org/css-transforms-1/#valdef-transform-box-content-box>`__
         -  `in css-ui-3, for box-sizing <https://drafts.csswg.org/css-ui-3/#valdef-box-sizing-content-box>`__

      -  contents

         -  `in css-display-3, for display,
            <display-box> <https://drafts.csswg.org/css-display-3/#valdef-display-contents>`__
         -  `in css-will-change-1, for will-change <https://drafts.csswg.org/css-will-change-1/#valdef-will-change-contents>`__

      -  `context-menu <https://drafts.csswg.org/css-ui-3/#valdef-cursor-context-menu>`__
      -  `contextual <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-ligatures-contextual>`__
      -  `copy <https://drafts.csswg.org/css-ui-3/#valdef-cursor-copy>`__
      -  `<counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-speak-as-counter-style-name>`__
      -  cover

         -  `in css-backgrounds-3, for background-size <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-size-cover>`__
         -  `in css-images-3, for object-fit <https://drafts.csswg.org/css-images-3/#valdef-object-fit-cover>`__

      -  `crisp-edges <https://drafts.csswg.org/css-images-3/#valdef-image-rendering-crisp-edges>`__
      -  `crosshair <https://drafts.csswg.org/css-ui-3/#valdef-cursor-crosshair>`__
      -  `cursive <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-cursive>`__
      -  `cyclic <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-system-cyclic>`__
      -  dark

         -  `in css-fonts-4, for base-palette <https://drafts.csswg.org/css-fonts-4/#valdef-base-palette-dark>`__
         -  `in css-fonts-4, for font-palette <https://drafts.csswg.org/css-fonts-4/#valdef-font-palette-dark>`__

      -  `darken <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-darken>`__
      -  dashed

         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-dashed>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/box.html#value-def-dashed>`__

      -  `<decibel> <https://drafts.csswg.org/css-speech-1/#valdef-voice-volume-decibel>`__
      -  decimal

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#decimal>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-decimal>`__

      -  decimal-leading-zero

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#decimal-leading-zero>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-decimal-leading-zero>`__

      -  `default <https://drafts.csswg.org/css-ui-3/#valdef-cursor-default>`__
      -  `deg <https://drafts.csswg.org/css-values-3/#deg>`__
      -  `dense <https://drafts.csswg.org/css-grid-1/#valdef-grid-auto-flow-dense>`__
      -  `devanagari <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-devanagari>`__
      -  `diagonal-fractions <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-numeric-diagonal-fractions>`__
      -  `difference <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-difference>`__
      -  `digits <https://drafts.csswg.org/css-speech-1/#valdef-speak-as-digits>`__
      -  `digits <integer>? <https://www.w3.org/TR/css-writing-modes-4/#valdef-text-combine-upright-digits-integer>`__
      -  `digits <integer [2,4]>? <https://drafts.csswg.org/css-writing-modes-4/#valdef-text-combine-upright-digits-integer-2-4>`__
      -  disc

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#disc>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-disc>`__

      -  `disclosure-closed <https://drafts.csswg.org/css-counter-styles-3/#disclosure-closed>`__
      -  `disclosure-open <https://drafts.csswg.org/css-counter-styles-3/#disclosure-open>`__
      -  `discretionary-ligatures <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-ligatures-discretionary-ligatures>`__
      -  `distribute <https://drafts.csswg.org/css-text-3/#valdef-text-justify-distribute>`__
      -  `dot <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-style-dot>`__
      -  dotted

         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-dotted>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/box.html#value-def-dotted>`__

      -  double

         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-double>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/box.html#value-def-double>`__

      -  `double-circle <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-style-double-circle>`__
      -  `dpcm <https://drafts.csswg.org/css-values-3/#dpcm>`__
      -  `dpi <https://drafts.csswg.org/css-values-3/#dpi>`__
      -  `dppx <https://drafts.csswg.org/css-values-3/#dppx>`__
      -  `each-line <https://drafts.csswg.org/css-text-3/#valdef-text-indent-each-line>`__
      -  `ease <https://drafts.csswg.org/css-easing-1/#valdef-cubic-bezier-easing-function-ease>`__
      -  `ease-in <https://drafts.csswg.org/css-easing-1/#valdef-cubic-bezier-easing-function-ease-in>`__
      -  `ease-in-out <https://drafts.csswg.org/css-easing-1/#valdef-cubic-bezier-easing-function-ease-in-out>`__
      -  `ease-out <https://drafts.csswg.org/css-easing-1/#valdef-cubic-bezier-easing-function-ease-out>`__
      -  ellipse

         -  `in css-images-3, for <ending-shape> <https://www.w3.org/TR/css-images-3/#valdef-ending-shape-ellipse>`__
         -  `in css-images-3, for <rg-ending-shape> <https://drafts.csswg.org/css-images-3/#valdef-rg-ending-shape-ellipse>`__

      -  `ellipsis <https://drafts.csswg.org/css-ui-3/#overflow-ellipsis>`__
      -  `em <https://drafts.csswg.org/css-values-3/#em>`__
      -  `embed <https://drafts.csswg.org/css-writing-modes-4/#valdef-unicode-bidi-embed>`__
      -  `embossed <https://drafts.csswg.org/mediaqueries-4/#valdef-media-embossed>`__
      -  emoji

         -  `in css-fonts-4, for font-family,
            <generic-family> <https://www.w3.org/TR/css-fonts-4/#valdef-font-family-emoji>`__
         -  `in css-fonts-4, for font-variant-emoji <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-emoji-emoji>`__

      -  end

         -  `in css-align-3, for <self-position>, <content-position>,
            justify-self, align-self, justify-content,
            align-content <https://drafts.csswg.org/css-align-3/#valdef-self-position-end>`__
         -  `in css-easing-1, for steps() <https://drafts.csswg.org/css-easing-1/#valdef-steps-end>`__
         -  `in css-scroll-snap-1, for scroll-snap-align <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-align-end>`__
         -  `in css-text-3, for text-align <https://drafts.csswg.org/css-text-3/#valdef-text-align-end>`__

      -  `<ending-shape> <https://www.w3.org/TR/css-images-3/#valdef-radial-gradient-ending-shape>`__
      -  `e-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-e-resize>`__
      -  `ethiopic-numeric <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-ethiopic-numeric>`__
      -  `evenodd <https://drafts.fxtf.org/css-masking-1/#valdef-clip-rule-evenodd>`__
      -  `ew-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-ew-resize>`__
      -  `ex <https://drafts.csswg.org/css-values-3/#ex>`__
      -  `exclude <https://drafts.fxtf.org/css-masking-1/#valdef-mask-composite-exclude>`__
      -  `exclusion <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-exclusion>`__
      -  `expanded <https://drafts.csswg.org/css-fonts-4/#valdef-font-stretch-expanded>`__
      -  `extends <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-system-extends>`__
      -  `extra-condensed <https://drafts.csswg.org/css-fonts-4/#valdef-font-stretch-extra-condensed>`__
      -  `extra-expanded <https://drafts.csswg.org/css-fonts-4/#valdef-font-stretch-extra-expanded>`__
      -  `fallback <https://drafts.csswg.org/css-fonts-4/#valdef-font-face-font-display-fallback>`__
      -  `fangsong <https://www.w3.org/TR/css-fonts-4/#valdef-font-family-fangsong>`__
      -  `fantasy <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-fantasy>`__
      -  farthest-corner

         -  `in css-images-3, for <rg-extent-keyword>,
            radial-gradient(),
            repeating-radial-gradient() <https://drafts.csswg.org/css-images-3/#valdef-rg-extent-keyword-farthest-corner>`__
         -  `in css-images-3, for <size> <https://www.w3.org/TR/css-images-3/#valdef-size-farthest-corner>`__

      -  farthest-side

         -  `in css-images-3, for <rg-extent-keyword>,
            radial-gradient(),
            repeating-radial-gradient() <https://drafts.csswg.org/css-images-3/#valdef-rg-extent-keyword-farthest-side>`__
         -  `in css-images-3, for <size> <https://www.w3.org/TR/css-images-3/#valdef-size-farthest-side>`__

      -  fast

         -  `in css-speech-1, for voice-rate <https://drafts.csswg.org/css-speech-1/#valdef-voice-rate-fast>`__
         -  `in mediaqueries-4, for @media/update <https://drafts.csswg.org/mediaqueries-4/#valdef-media-update-fast>`__

      -  `<feature-tag-value> <https://drafts.csswg.org/css-fonts-4/#feature-tag-value>`__
      -  `female <https://drafts.csswg.org/css-speech-1/#valdef-voice-family-female>`__
      -  fill

         -  `in css-backgrounds-3, for border-image-slice <https://drafts.csswg.org/css-backgrounds-3/#border-image-slice-fill>`__
         -  `in css-images-3, for object-fit <https://drafts.csswg.org/css-images-3/#valdef-object-fit-fill>`__
         -  `in css-masking-1, for mask-border-slice <https://drafts.fxtf.org/css-masking-1/#valdef-mask-border-slice-fill>`__

      -  fill-box

         -  `in css-masking-1, for clip-path <https://drafts.fxtf.org/css-masking-1/#valdef-clip-path-fill-box>`__
         -  `in css-masking-1, for mask-clip <https://drafts.fxtf.org/css-masking-1/#valdef-mask-clip-fill-box>`__
         -  `in css-masking-1, for mask-origin <https://drafts.fxtf.org/css-masking-1/#valdef-mask-origin-fill-box>`__
         -  `in css-transforms-1, for transform-box <https://drafts.csswg.org/css-transforms-1/#valdef-transform-box-fill-box>`__

      -  `filled <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-style-filled>`__
      -  `fine <https://drafts.csswg.org/mediaqueries-4/#valdef-media-pointer-fine>`__
      -  first

         -  `in css-align-3, for justify-self, justify-items,
            align-content, align-self, align-items,
            <baseline-position> <https://drafts.csswg.org/css-align-3/#valdef-justify-self-first-baseline>`__
         -  `in css-text-3, for hanging-punctuation <https://drafts.csswg.org/css-text-3/#valdef-hanging-punctuation-first>`__

      -  `first baseline <https://drafts.csswg.org/css-align-3/#valdef-justify-self-first-baseline>`__
      -  `fit-content() <https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-fit-content>`__
      -  fixed

         -  `in css-backgrounds-3, for background-attachment <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-attachment-fixed>`__
         -  `in css-counter-styles-3, for @counter-style/system <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-system-fixed>`__

      -  `<flex> <https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-flex>`__
      -  flex

         -  `in css-display-3, for display,
            <display-inside> <https://drafts.csswg.org/css-display-3/#valdef-display-flex>`__
         -  `in css-flexbox-1, for display <https://drafts.csswg.org/css-flexbox-1/#valdef-display-flex>`__

      -  `<flex [0,∞]> <https://drafts.csswg.org/css-grid-1/#valdef-grid-template-columns-flex-0>`__
      -  `<'flex-basis'> <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-flex-basis>`__
      -  flex-end

         -  `in css-align-3, for <self-position>, <content-position>,
            justify-self, align-self, justify-content,
            align-content <https://drafts.csswg.org/css-align-3/#valdef-self-position-flex-end>`__
         -  `in css-flexbox-1, for align-content <https://drafts.csswg.org/css-flexbox-1/#valdef-align-content-flex-end>`__
         -  `in css-flexbox-1, for align-items,
            align-self <https://drafts.csswg.org/css-flexbox-1/#valdef-align-items-flex-end>`__
         -  `in css-flexbox-1, for justify-content <https://drafts.csswg.org/css-flexbox-1/#valdef-justify-content-flex-end>`__

      -  `<'flex-grow'> <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-flex-grow>`__
      -  `<'flex-shrink'> <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-flex-shrink>`__
      -  flex-start

         -  `in css-align-3, for <self-position>, <content-position>,
            justify-self, align-self, justify-content,
            align-content <https://drafts.csswg.org/css-align-3/#valdef-self-position-flex-start>`__
         -  `in css-flexbox-1, for align-content <https://drafts.csswg.org/css-flexbox-1/#valdef-align-content-flex-start>`__
         -  `in css-flexbox-1, for align-items,
            align-self <https://drafts.csswg.org/css-flexbox-1/#valdef-align-items-flex-start>`__
         -  `in css-flexbox-1, for justify-content <https://drafts.csswg.org/css-flexbox-1/#valdef-justify-content-flex-start>`__

      -  `flip <https://drafts.csswg.org/css-images-3/#valdef-image-orientation-angle>`__
      -  `flow <https://drafts.csswg.org/css-display-3/#valdef-display-flow>`__
      -  `flow-root <https://drafts.csswg.org/css-display-3/#valdef-display-flow-root>`__
      -  `force-end <https://drafts.csswg.org/css-text-3/#valdef-hanging-punctuation-force-end>`__
      -  `forwards <https://drafts.csswg.org/css-animations-1/#valdef-animation-fill-mode-forwards>`__
      -  `fr <https://drafts.csswg.org/css-grid-1/#valdef-flex-fr>`__
      -  `from-image <https://drafts.csswg.org/css-images-3/#valdef-image-orientation-from-image>`__
      -  `fr unit <https://drafts.csswg.org/css-grid-1/#valdef-flex-fr>`__
      -  `full-size-kana <https://drafts.csswg.org/css-text-3/#valdef-text-transform-full-size-kana>`__
      -  full-width

         -  `in css-fonts-4, for font-variant-east-asian <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-east-asian-full-width>`__
         -  `in css-text-3, for text-transform <https://drafts.csswg.org/css-text-3/#valdef-text-transform-full-width>`__

      -  `generic(fangsong) <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-generic-fangsong>`__
      -  `generic(kai) <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-generic-kai>`__
      -  `generic(nastaliq) <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-generic-nastaliq>`__
      -  georgian

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#georgian>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-georgian>`__

      -  `grab <https://drafts.csswg.org/css-ui-3/#valdef-cursor-grab>`__
      -  `grabbing <https://drafts.csswg.org/css-ui-3/#valdef-cursor-grabbing>`__
      -  `grad <https://drafts.csswg.org/css-values-3/#grad>`__
      -  grid

         -  `in css-display-3, for display,
            <display-inside> <https://drafts.csswg.org/css-display-3/#valdef-display-grid>`__
         -  `in css-grid-1, for display <https://drafts.csswg.org/css-grid-1/#valdef-display-grid>`__

      -  `<'grid-template-rows'> / [ auto-flow && dense? ]
         <'grid-auto-columns'>? <https://drafts.csswg.org/css-grid-1/#grid-s-auto-row>`__
      -  `<'grid-template-rows'> /
         <'grid-template-columns'> <https://drafts.csswg.org/css-grid-1/#grid-template-rowcol>`__
      -  groove

         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-groove>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/box.html#value-def-groove>`__

      -  `gujarati <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-gujarati>`__
      -  `gurmukhi <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-gurmukhi>`__
      -  `handheld <https://drafts.csswg.org/mediaqueries-4/#valdef-media-handheld>`__
      -  `hanging <https://drafts.csswg.org/css-text-3/#valdef-text-indent-hanging>`__
      -  `hard-light <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-hard-light>`__
      -  `hebrew <https://drafts.csswg.org/css-counter-styles-3/#hebrew>`__
      -  `help <https://drafts.csswg.org/css-ui-3/#valdef-cursor-help>`__
      -  hidden

         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-hidden>`__
         -  `in css-display-3, for visibility <https://drafts.csswg.org/css-display-3/#valdef-visibility-hidden>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/box.html#value-def-hidden>`__

      -  high

         -  `in css-speech-1, for voice-pitch <https://drafts.csswg.org/css-speech-1/#valdef-voice-pitch-high>`__
         -  `in css-speech-1, for voice-range <https://drafts.csswg.org/css-speech-1/#valdef-voice-range-high>`__

      -  `high-quality <https://drafts.csswg.org/css-images-3/#valdef-image-rendering-high-quality>`__
      -  `hiragana <https://drafts.csswg.org/css-counter-styles-3/#hiragana>`__
      -  `hiragana-iroha <https://drafts.csswg.org/css-counter-styles-3/#hiragana-iroha>`__
      -  `historical-forms <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-alternates-historical-forms>`__
      -  `historical-ligatures <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-ligatures-historical-ligatures>`__
      -  `horizontal-tb <https://drafts.csswg.org/css-writing-modes-4/#valdef-writing-mode-horizontal-tb>`__
      -  `hover <https://drafts.csswg.org/mediaqueries-4/#valdef-media-hover-hover>`__
      -  `hue <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-hue>`__
      -  `hz <https://drafts.csswg.org/css-values-3/#Hz>`__
      -  `icon <https://drafts.csswg.org/css-fonts-4/#valdef-font-icon>`__
      -  `in <https://drafts.csswg.org/css-values-3/#in>`__
      -  infinite

         -  `in css-animations-1, for animation-iteration-count <https://drafts.csswg.org/css-animations-1/#valdef-animation-iteration-count-infinite>`__
         -  `in mediaqueries-4, for @media/resolution <https://drafts.csswg.org/mediaqueries-4/#valdef-media-resolution-infinite>`__

      -  `inherit <https://drafts.csswg.org/css-cascade-4/#valdef-all-inherit>`__
      -  `initial <https://drafts.csswg.org/css-cascade-4/#valdef-all-initial>`__
      -  inline

         -  `in css-display-3, for display,
            <display-outside> <https://drafts.csswg.org/css-display-3/#valdef-display-inline>`__
         -  `in css-scroll-snap-1, for scroll-snap-type <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-type-inline>`__

      -  `inline-block <https://drafts.csswg.org/css-display-3/#valdef-display-inline-block>`__
      -  inline-flex

         -  `in css-display-3, for display,
            <display-legacy> <https://drafts.csswg.org/css-display-3/#valdef-display-inline-flex>`__
         -  `in css-flexbox-1, for display <https://drafts.csswg.org/css-flexbox-1/#valdef-display-inline-flex>`__

      -  inline-grid

         -  `in css-display-3, for display,
            <display-legacy> <https://drafts.csswg.org/css-display-3/#valdef-display-inline-grid>`__
         -  `in css-grid-1, for display <https://drafts.csswg.org/css-grid-1/#valdef-display-inline-grid>`__

      -  inline-table

         -  `in css-display-3, for display,
            <display-legacy> <https://drafts.csswg.org/css-display-3/#valdef-display-inline-table>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-inline-table>`__

      -  inset

         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-inset>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#shadow-inset>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/box.html#value-def-inset>`__

      -  `[ <integer [-∞,-1]> \| <integer [1,∞]> ] &&
         <custom-ident>? <https://drafts.csswg.org/css-grid-1/#grid-placement-int>`__
      -  `<integer> &&
         <custom-ident>? <https://www.w3.org/TR/css-grid-1/#grid-placement-int>`__
      -  `inter-character <https://drafts.csswg.org/css-text-3/#valdef-text-justify-inter-character>`__
      -  `interlace <https://drafts.csswg.org/mediaqueries-4/#valdef-media-scan-interlace>`__
      -  `intersect <https://drafts.fxtf.org/css-masking-1/#valdef-mask-composite-intersect>`__
      -  `inter-word <https://drafts.csswg.org/css-text-3/#valdef-text-justify-inter-word>`__
      -  invert

         -  `in css-ui-3, for outline-color <https://drafts.csswg.org/css-ui-3/#valdef-outline-color-invert>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/ui.html#value-def-invert>`__

      -  `isolate <https://drafts.csswg.org/css-writing-modes-4/#valdef-unicode-bidi-isolate>`__
      -  `isolate-override <https://drafts.csswg.org/css-writing-modes-4/#valdef-unicode-bidi-isolate-override>`__
      -  `italic <https://drafts.csswg.org/css-fonts-4/#valdef-font-style-italic>`__
      -  `japanese-formal <https://drafts.csswg.org/css-counter-styles-3/#japanese-formal>`__
      -  `japanese-informal <https://drafts.csswg.org/css-counter-styles-3/#japanese-informal>`__
      -  `jis04 <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-east-asian-jis04>`__
      -  `jis78 <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-east-asian-jis78>`__
      -  `jis83 <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-east-asian-jis83>`__
      -  `jis90 <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-east-asian-jis90>`__
      -  `jump-both <https://drafts.csswg.org/css-easing-1/#valdef-steps-jump-both>`__
      -  `jump-end <https://drafts.csswg.org/css-easing-1/#valdef-steps-jump-end>`__
      -  `jump-none <https://drafts.csswg.org/css-easing-1/#valdef-steps-jump-none>`__
      -  `jump-start <https://drafts.csswg.org/css-easing-1/#valdef-steps-jump-start>`__
      -  `justify <https://drafts.csswg.org/css-text-3/#valdef-text-align-justify>`__
      -  `justify-all <https://drafts.csswg.org/css-text-3/#valdef-text-align-justify-all>`__
      -  `kannada <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-kannada>`__
      -  `katakana <https://drafts.csswg.org/css-counter-styles-3/#katakana>`__
      -  `katakana-iroha <https://drafts.csswg.org/css-counter-styles-3/#katakana-iroha>`__
      -  `keep-all <https://drafts.csswg.org/css-text-3/#valdef-word-break-keep-all>`__
      -  `<keyframes-name> <https://drafts.csswg.org/css-animations-1/#valdef-animation-name-keyframes-name>`__
      -  `khmer <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-khmer>`__
      -  `khz <https://drafts.csswg.org/css-values-3/#kHz>`__
      -  `korean-hangul-formal <https://drafts.csswg.org/css-counter-styles-3/#korean-hangul-formal>`__
      -  `korean-hanja-formal <https://drafts.csswg.org/css-counter-styles-3/#korean-hanja-formal>`__
      -  `korean-hanja-informal <https://drafts.csswg.org/css-counter-styles-3/#korean-hanja-informal>`__
      -  `landscape <https://drafts.csswg.org/mediaqueries-4/#valdef-media-orientation-landscape>`__
      -  `lao <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-lao>`__
      -  last

         -  `in css-align-3, for justify-self, justify-items,
            align-content, align-self, align-items,
            <baseline-position> <https://drafts.csswg.org/css-align-3/#valdef-justify-self-last-baseline>`__
         -  `in css-text-3, for hanging-punctuation <https://drafts.csswg.org/css-text-3/#valdef-hanging-punctuation-last>`__

      -  `last baseline <https://drafts.csswg.org/css-align-3/#valdef-justify-self-last-baseline>`__
      -  `layout <https://drafts.csswg.org/css-contain-1/#valdef-contain-layout>`__
      -  left

         -  `in css-align-3, for justify-content, justify-self,
            justify-items <https://drafts.csswg.org/css-align-3/#valdef-justify-content-left>`__
         -  `in css-backgrounds-3, for background-position <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-position-left>`__
         -  `in css-break-3, for break-before,
            break-after <https://drafts.csswg.org/css-break-3/#valdef-break-before-left>`__
         -  `in css-speech-1, for voice-balance <https://drafts.csswg.org/css-speech-1/#valdef-voice-balance-left>`__
         -  `in css-text-3, for text-align <https://drafts.csswg.org/css-text-3/#valdef-text-align-left>`__
         -  `in css-text-decor-3, for text-emphasis-position <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-position-left>`__
         -  `in css-text-decor-3, for text-underline-position <https://drafts.csswg.org/css-text-decor-3/#underline-left>`__
         -  `in css-transforms-1, for transform-origin <https://drafts.csswg.org/css-transforms-1/#valdef-transform-origin-left>`__

      -  `leftwards <https://drafts.csswg.org/css-speech-1/#valdef-voice-balance-leftwards>`__
      -  `legacy <https://drafts.csswg.org/css-align-3/#valdef-justify-items-legacy>`__
      -  <length>

         -  `in css-images-3, for <size> <https://www.w3.org/TR/css-images-3/#valdef-size-length>`__
         -  `in css-text-3, for letter-spacing <https://drafts.csswg.org/css-text-3/#valdef-letter-spacing-length>`__
         -  `in css-text-3, for text-indent <https://drafts.csswg.org/css-text-3/#valdef-text-indent-length>`__
         -  `in css-text-3, for word-spacing <https://drafts.csswg.org/css-text-3/#valdef-word-spacing-length>`__

      -  `<length [0,∞]> <https://drafts.csswg.org/css-images-3/#valdef-rg-size-length-0>`__
      -  `<length-percentage [0,∞]>{2} <https://drafts.csswg.org/css-images-3/#valdef-rg-size-length-percentage-0-2>`__
      -  `<length-percentage>{2} <https://www.w3.org/TR/css-images-3/#valdef-size-length-percentage2>`__
      -  light

         -  `in css-fonts-4, for base-palette <https://drafts.csswg.org/css-fonts-4/#valdef-base-palette-light>`__
         -  `in css-fonts-4, for font-palette <https://drafts.csswg.org/css-fonts-4/#valdef-font-palette-light>`__

      -  `lighten <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-lighten>`__
      -  `lighter <https://drafts.csswg.org/css-fonts-4/#valdef-font-weight-lighter>`__
      -  `linear <https://drafts.csswg.org/css-easing-1/#valdef-easing-function-linear>`__
      -  `linearrgb <https://drafts.fxtf.org/filter-effects-1/#valdef-color-interpolation-filters-linearrgb>`__
      -  `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ /
         <explicit-track-list>
         ]? <https://drafts.csswg.org/css-grid-1/#grid-template-ascii>`__
      -  `line-through <https://drafts.csswg.org/css-text-decor-3/#valdef-text-decoration-line-line-through>`__
      -  `lining-nums <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-numeric-lining-nums>`__
      -  `list-item <https://drafts.csswg.org/css-display-3/#valdef-display-list-item>`__
      -  `literal-punctuation <https://drafts.csswg.org/css-speech-1/#valdef-speak-as-literal-punctuation>`__
      -  `local <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-attachment-local>`__
      -  `loose <https://drafts.csswg.org/css-text-3/#valdef-line-break-loose>`__
      -  `loud <https://drafts.csswg.org/css-speech-1/#valdef-voice-volume-loud>`__
      -  low

         -  `in css-speech-1, for voice-pitch <https://drafts.csswg.org/css-speech-1/#valdef-voice-pitch-low>`__
         -  `in css-speech-1, for voice-range <https://drafts.csswg.org/css-speech-1/#valdef-voice-range-low>`__

      -  `lower-alpha <https://drafts.csswg.org/css-counter-styles-3/#lower-alpha>`__
      -  `lower-armenian <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-lower-armenian>`__
      -  `lowercase <https://drafts.csswg.org/css-text-3/#valdef-text-transform-lowercase>`__
      -  lower-greek

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#lower-greek>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-lower-greek>`__

      -  lower-latin

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#lower-latin>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-lower-latin>`__

      -  lower-roman

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#lower-roman>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-lower-roman>`__

      -  `ltr <https://drafts.csswg.org/css-writing-modes-4/#valdef-direction-ltr>`__
      -  luminance

         -  `in css-masking-1, for mask-border-mode <https://drafts.fxtf.org/css-masking-1/#valdef-mask-border-mode-luminance>`__
         -  `in css-masking-1, for mask-mode <https://drafts.fxtf.org/css-masking-1/#valdef-mask-mode-luminance>`__
         -  `in css-masking-1, for mask-type <https://drafts.fxtf.org/css-masking-1/#valdef-mask-type-luminance>`__

      -  `luminosity <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-luminosity>`__
      -  `malayalam <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-malayalam>`__
      -  `male <https://drafts.csswg.org/css-speech-1/#valdef-voice-family-male>`__
      -  `mandatory <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-type-mandatory>`__
      -  `manual <https://drafts.csswg.org/css-text-3/#valdef-hyphens-manual>`__
      -  `margin-box <https://drafts.csswg.org/css-shapes-1/#valdef-shape-box-margin-box>`__
      -  `match-parent <https://drafts.csswg.org/css-text-3/#valdef-text-align-match-parent>`__
      -  `match-source <https://drafts.fxtf.org/css-masking-1/#valdef-mask-mode-match-source>`__
      -  math

         -  `in css-fonts-4, for font-family,
            <generic-family> <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-math>`__
         -  `in css-fonts-4, for font-size <https://drafts.csswg.org/css-fonts-4/#valdef-font-size-math>`__

      -  `max-content <https://drafts.csswg.org/css-grid-1/#valdef-grid-template-columns-max-content>`__
      -  medium

         -  `in css-backgrounds-3, for <line-width>, border-width,
            border-top-width, border-left-width, border-bottom-width,
            border-right-width,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-width-medium>`__
         -  `in css-speech-1, for pause-before,
            pause-after <https://drafts.csswg.org/css-speech-1/#valdef-pause-before-medium>`__
         -  `in css-speech-1, for rest-before,
            rest-after <https://drafts.csswg.org/css-speech-1/#valdef-rest-before-medium>`__
         -  `in css-speech-1, for voice-pitch <https://drafts.csswg.org/css-speech-1/#valdef-voice-pitch-medium>`__
         -  `in css-speech-1, for voice-range <https://drafts.csswg.org/css-speech-1/#valdef-voice-range-medium>`__
         -  `in css-speech-1, for voice-rate <https://drafts.csswg.org/css-speech-1/#valdef-voice-rate-medium>`__
         -  `in css-speech-1, for voice-volume <https://drafts.csswg.org/css-speech-1/#valdef-voice-volume-medium>`__

      -  `menu <https://drafts.csswg.org/css-fonts-4/#valdef-font-menu>`__
      -  `message-box <https://drafts.csswg.org/css-fonts-4/#valdef-font-message-box>`__
      -  `min-content <https://drafts.csswg.org/css-grid-1/#valdef-grid-template-columns-min-content>`__
      -  `minmax() <https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-minmax>`__
      -  `mixed <https://drafts.csswg.org/css-writing-modes-4/#valdef-text-orientation-mixed>`__
      -  `mm <https://drafts.csswg.org/css-values-3/#mm>`__
      -  `moderate <https://drafts.csswg.org/css-speech-1/#valdef-voice-stress-moderate>`__
      -  `mongolian <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-mongolian>`__
      -  `monospace <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-monospace>`__
      -  `move <https://drafts.csswg.org/css-ui-3/#valdef-cursor-move>`__
      -  `ms <https://drafts.csswg.org/css-values-3/#ms>`__
      -  `multiply <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-multiply>`__
      -  `myanmar <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-myanmar>`__
      -  `ne-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-ne-resize>`__
      -  `nesw-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-nesw-resize>`__
      -  `neutral <https://drafts.csswg.org/css-speech-1/#valdef-voice-family-neutral>`__
      -  `never <https://drafts.csswg.org/css-speech-1/#valdef-speak-never>`__
      -  `no-clip <https://drafts.fxtf.org/css-masking-1/#valdef-mask-clip-no-clip>`__
      -  `no-close-quote <https://www.w3.org/TR/CSS21/generate.html#value-def-no-close-quote>`__
      -  `no-common-ligatures <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-ligatures-no-common-ligatures>`__
      -  `no-contextual <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-ligatures-no-contextual>`__
      -  `no-discretionary-ligatures <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-ligatures-no-discretionary-ligatures>`__
      -  `no-drop <https://drafts.csswg.org/css-ui-3/#valdef-cursor-no-drop>`__
      -  `no-historical-ligatures <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-ligatures-no-historical-ligatures>`__
      -  none

         -  `in css-animations-1, for animation-fill-mode <https://drafts.csswg.org/css-animations-1/#valdef-animation-fill-mode-none>`__
         -  `in css-animations-1, for animation-name <https://drafts.csswg.org/css-animations-1/#valdef-animation-name-none>`__
         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-none>`__
         -  `in css-backgrounds-3, for background-image <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-image-none>`__
         -  `in css-backgrounds-3, for box-shadow <https://drafts.csswg.org/css-backgrounds-3/#box-shadow-none>`__
         -  `in css-contain-1, for contain <https://drafts.csswg.org/css-contain-1/#valdef-contain-none>`__
         -  `in css-display-3, for display,
            <display-box> <https://drafts.csswg.org/css-display-3/#valdef-display-none>`__
         -  `in css-flexbox-1, for flex <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-none>`__
         -  `in css-fonts-4, for font-kerning <https://drafts.csswg.org/css-fonts-4/#font-kerning-none-value>`__
         -  `in css-fonts-4, for font-optical-sizing <https://drafts.csswg.org/css-fonts-4/#font-optical-sizing-none-value>`__
         -  `in css-fonts-4, for font-size-adjust <https://drafts.csswg.org/css-fonts-4/#font-size-adjust-none-value>`__
         -  `in css-fonts-4, for font-synthesis-position <https://drafts.csswg.org/css-fonts-4/#valdef-font-synthesis-position-none>`__
         -  `in css-fonts-4, for font-synthesis-small-caps <https://drafts.csswg.org/css-fonts-4/#valdef-font-synthesis-small-caps-none>`__
         -  `in css-fonts-4, for font-synthesis-style <https://drafts.csswg.org/css-fonts-4/#valdef-font-synthesis-style-none>`__
         -  `in css-fonts-4, for font-synthesis-weight <https://drafts.csswg.org/css-fonts-4/#valdef-font-synthesis-weight-none>`__
         -  `in css-fonts-4, for font-variant <https://drafts.csswg.org/css-fonts-4/#font-variant-none-value>`__
         -  `in css-fonts-4, for font-variant-ligatures <https://drafts.csswg.org/css-fonts-4/#font-variant-ligatures-none-value>`__
         -  `in css-grid-1, for grid-template <https://drafts.csswg.org/css-grid-1/#valdef-grid-template-none>`__
         -  `in css-grid-1, for grid-template-areas <https://drafts.csswg.org/css-grid-1/#valdef-grid-template-areas-none>`__
         -  `in css-grid-1, for grid-template-rows,
            grid-template-columns <https://drafts.csswg.org/css-grid-1/#valdef-grid-template-rows-none>`__
         -  `in css-images-3, for image-orientation <https://drafts.csswg.org/css-images-3/#valdef-image-orientation-none>`__
         -  `in css-images-3, for object-fit <https://drafts.csswg.org/css-images-3/#valdef-object-fit-none>`__
         -  `in css-multicol-1, for column-span <https://drafts.csswg.org/css-multicol-1/#valdef-column-span-none>`__
         -  `in css-scroll-snap-1, for scroll-snap-align <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-align-none>`__
         -  `in css-scroll-snap-1, for scroll-snap-type <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-type-none>`__
         -  `in css-shapes-1, for shape-outside <https://drafts.csswg.org/css-shapes-1/#valdef-shape-outside-none>`__
         -  `in css-speech-1, for pause-before,
            pause-after <https://drafts.csswg.org/css-speech-1/#valdef-pause-before-none>`__
         -  `in css-speech-1, for rest-before,
            rest-after <https://drafts.csswg.org/css-speech-1/#valdef-rest-before-none>`__
         -  `in css-speech-1, for voice-stress <https://drafts.csswg.org/css-speech-1/#valdef-voice-stress-none>`__
         -  `in css-text-3, for hanging-punctuation <https://drafts.csswg.org/css-text-3/#valdef-hanging-punctuation-none>`__
         -  `in css-text-3, for hyphens <https://drafts.csswg.org/css-text-3/#valdef-hyphens-none>`__
         -  `in css-text-3, for text-justify <https://drafts.csswg.org/css-text-3/#valdef-text-justify-none>`__
         -  `in css-text-3, for text-transform <https://drafts.csswg.org/css-text-3/#valdef-text-transform-none>`__
         -  `in css-text-decor-3, for text-decoration-line <https://drafts.csswg.org/css-text-decor-3/#valdef-text-decoration-line-none>`__
         -  `in css-text-decor-3, for text-emphasis-style <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-style-none>`__
         -  `in css-transitions-1, for transition-property <https://drafts.csswg.org/css-transitions-1/#valdef-transition-property-none>`__
         -  `in css-ui-3, for cursor <https://drafts.csswg.org/css-ui-3/#valdef-cursor-none>`__
         -  `in css-writing-modes-4, for text-combine-upright <https://drafts.csswg.org/css-writing-modes-4/#valdef-text-combine-upright-none>`__
         -  `in mediaqueries-4, for @media/hover <https://drafts.csswg.org/mediaqueries-4/#valdef-media-hover-none>`__
         -  `in mediaqueries-4, for @media/overflow-block <https://drafts.csswg.org/mediaqueries-4/#valdef-media-overflow-block-none>`__
         -  `in mediaqueries-4, for @media/overflow-inline <https://drafts.csswg.org/mediaqueries-4/#valdef-media-overflow-inline-none>`__
         -  `in mediaqueries-4, for @media/pointer <https://drafts.csswg.org/mediaqueries-4/#valdef-media-pointer-none>`__
         -  `in mediaqueries-4, for @media/update <https://drafts.csswg.org/mediaqueries-4/#valdef-media-update-none>`__

      -  `'none'::as border style <https://www.w3.org/TR/CSS21/box.html#value-def-bo-none>`__
      -  `nonzero <https://drafts.fxtf.org/css-masking-1/#valdef-clip-rule-nonzero>`__
      -  `no-open-quote <https://www.w3.org/TR/CSS21/generate.html#value-def-no-open-quote>`__
      -  `no-punctuation <https://drafts.csswg.org/css-speech-1/#valdef-speak-as-no-punctuation>`__
      -  `no-repeat <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-repeat-no-repeat>`__
      -  normal

         -  `in compositing-1, for <blend-mode> <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-normal>`__
         -  `in css-align-3, for align-self <https://drafts.csswg.org/css-align-3/#valdef-align-self-normal>`__
         -  `in css-align-3, for justify-content,
            align-content <https://drafts.csswg.org/css-align-3/#valdef-justify-content-normal>`__
         -  `in css-align-3, for justify-self <https://drafts.csswg.org/css-align-3/#valdef-justify-self-normal>`__
         -  `in css-align-3, for row-gap, column-gap,
            gap <https://drafts.csswg.org/css-align-3/#valdef-row-gap-normal>`__
         -  `in css-animations-1, for animation-direction <https://drafts.csswg.org/css-animations-1/#valdef-animation-direction-normal>`__
         -  `in css-fonts-4, for font-feature-settings <https://drafts.csswg.org/css-fonts-4/#font-feature-settings-normal-value>`__
         -  `in css-fonts-4, for font-kerning <https://drafts.csswg.org/css-fonts-4/#font-kerning-normal-value>`__
         -  `in css-fonts-4, for font-language override <https://drafts.csswg.org/css-fonts-4/#font-language-override-normal-value>`__
         -  `in css-fonts-4, for font-palette <https://drafts.csswg.org/css-fonts-4/#valdef-font-palette-normal>`__
         -  `in css-fonts-4, for font-stretch <https://drafts.csswg.org/css-fonts-4/#valdef-font-stretch-normal>`__
         -  `in css-fonts-4, for font-style <https://drafts.csswg.org/css-fonts-4/#valdef-font-style-normal>`__
         -  `in css-fonts-4, for font-variant <https://drafts.csswg.org/css-fonts-4/#font-variant-normal-value>`__
         -  `in css-fonts-4, for font-variant-alternates <https://drafts.csswg.org/css-fonts-4/#font-variant-alternates-normal-value>`__
         -  `in css-fonts-4, for font-variant-caps <https://drafts.csswg.org/css-fonts-4/#font-variant-caps-normal-value>`__
         -  `in css-fonts-4, for font-variant-east-asian <https://drafts.csswg.org/css-fonts-4/#font-variant-east-asian-normal-value>`__
         -  `in css-fonts-4, for font-variant-emoji <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-emoji-normal>`__
         -  `in css-fonts-4, for font-variant-ligatures <https://drafts.csswg.org/css-fonts-4/#font-variant-ligatures-normal-value>`__
         -  `in css-fonts-4, for font-variant-numeric <https://drafts.csswg.org/css-fonts-4/#font-variant-numeric-normal-value>`__
         -  `in css-fonts-4, for font-variant-position <https://drafts.csswg.org/css-fonts-4/#font-variant-position-normal-value>`__
         -  `in css-fonts-4, for font-weight <https://drafts.csswg.org/css-fonts-4/#valdef-font-weight-normal>`__
         -  `in css-scroll-snap-1, for scroll-snap-stop <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-stop-normal>`__
         -  `in css-speech-1, for speak-as <https://drafts.csswg.org/css-speech-1/#valdef-speak-as-normal>`__
         -  `in css-speech-1, for voice-rate <https://drafts.csswg.org/css-speech-1/#valdef-voice-rate-normal>`__
         -  `in css-speech-1, for voice-stress <https://drafts.csswg.org/css-speech-1/#valdef-voice-stress-normal>`__
         -  `in css-text-3, for letter-spacing <https://drafts.csswg.org/css-text-3/#valdef-letter-spacing-normal>`__
         -  `in css-text-3, for line-break <https://drafts.csswg.org/css-text-3/#valdef-line-break-normal>`__
         -  `in css-text-3, for overflow-wrap <https://drafts.csswg.org/css-text-3/#valdef-overflow-wrap-normal>`__
         -  `in css-text-3, for white-space <https://drafts.csswg.org/css-text-3/#valdef-white-space-normal>`__
         -  `in css-text-3, for word-break <https://drafts.csswg.org/css-text-3/#valdef-word-break-normal>`__
         -  `in css-text-3, for word-spacing <https://drafts.csswg.org/css-text-3/#valdef-word-spacing-normal>`__
         -  `in css-writing-modes-4, for unicode-bidi <https://drafts.csswg.org/css-writing-modes-4/#valdef-unicode-bidi-normal>`__

      -  `not <https://drafts.csswg.org/mediaqueries-4/#valdef-media-not>`__
      -  `not-allowed <https://drafts.csswg.org/css-ui-3/#valdef-cursor-not-allowed>`__
      -  nowrap

         -  `in css-flexbox-1, for flex-wrap <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-wrap-nowrap>`__
         -  `in css-text-3, for white-space <https://drafts.csswg.org/css-text-3/#valdef-white-space-nowrap>`__

      -  `n-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-n-resize>`__
      -  `ns-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-ns-resize>`__
      -  `numbers <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-speak-as-numbers>`__
      -  `numeric <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-system-numeric>`__
      -  `nw-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-nw-resize>`__
      -  `nwse-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-nwse-resize>`__
      -  objectboundingbox

         -  `in css-masking-1, for clipPathUnits <https://drafts.fxtf.org/css-masking-1/#valdef-clippathunits-objectboundingbox>`__
         -  `in css-masking-1, for maskContentUnits <https://drafts.fxtf.org/css-masking-1/#valdef-maskcontentunits-objectboundingbox>`__
         -  `in css-masking-1, for maskUnits <https://drafts.fxtf.org/css-masking-1/#valdef-maskunits-objectboundingbox>`__

      -  `oblique <angle>? <https://www.w3.org/TR/css-fonts-4/#valdef-font-style-oblique-angle>`__
      -  `oblique <angle [-90deg,90deg]>? <https://drafts.csswg.org/css-fonts-4/#valdef-font-style-oblique-angle--90deg-90deg>`__
      -  `old <https://drafts.csswg.org/css-speech-1/#valdef-voice-family-old>`__
      -  `oldstyle-nums <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-numeric-oldstyle-nums>`__
      -  `only <https://drafts.csswg.org/mediaqueries-4/#valdef-media-only>`__
      -  `open <https://drafts.csswg.org/css-text-decor-3/#valdef-text-text-emphasis-open>`__
      -  `open-quote <https://www.w3.org/TR/CSS21/generate.html#value-def-open-quote>`__
      -  `optional <https://drafts.csswg.org/css-fonts-4/#valdef-font-face-font-display-optional>`__
      -  `ordinal <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-numeric-ordinal>`__
      -  `oriya <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-oriya>`__
      -  `ornaments(<feature-value-name>) <https://drafts.csswg.org/css-fonts-4/#ornaments>`__
      -  outset

         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-outset>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/box.html#value-def-outset>`__

      -  `over <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-position-over>`__
      -  `overlay <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-overlay>`__
      -  `overline <https://drafts.csswg.org/css-text-decor-3/#valdef-text-decoration-line-overline>`__
      -  `p3 <https://drafts.csswg.org/mediaqueries-4/#valdef-media-color-gamut-p3>`__
      -  padding-box

         -  `in css-backgrounds-3, for background-clip <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-clip-padding-box>`__
         -  `in css-backgrounds-3, for background-origin <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-origin-padding-box>`__
         -  `in css-masking-1, for mask-clip <https://drafts.fxtf.org/css-masking-1/#valdef-mask-clip-padding-box>`__
         -  `in css-masking-1, for mask-origin <https://drafts.fxtf.org/css-masking-1/#valdef-mask-origin-padding-box>`__
         -  `in css-shapes-1, for <shape-box>,
            shape-outside <https://drafts.csswg.org/css-shapes-1/#valdef-shape-box-padding-box>`__

      -  `page <https://drafts.csswg.org/css-break-3/#valdef-break-before-page>`__
      -  `paged <https://drafts.csswg.org/mediaqueries-4/#valdef-media-overflow-block-paged>`__
      -  `paint <https://drafts.csswg.org/css-contain-1/#valdef-contain-paint>`__
      -  `paused <https://drafts.csswg.org/css-animations-1/#valdef-animation-play-state-paused>`__
      -  `pc <https://drafts.csswg.org/css-values-3/#pc>`__
      -  `<percentage> <https://drafts.csswg.org/css-text-3/#valdef-text-indent-percentage>`__
      -  `persian <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-persian>`__
      -  `petite-caps <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-caps-petite-caps>`__
      -  `pixelated <https://drafts.csswg.org/css-images-3/#valdef-image-rendering-pixelated>`__
      -  `plaintext <https://drafts.csswg.org/css-writing-modes-4/#valdef-unicode-bidi-plaintext>`__
      -  `pointer <https://drafts.csswg.org/css-ui-3/#valdef-cursor-pointer>`__
      -  `portrait <https://drafts.csswg.org/mediaqueries-4/#valdef-media-orientation-portrait>`__
      -  `pre <https://drafts.csswg.org/css-text-3/#valdef-white-space-pre>`__
      -  `pre-line <https://drafts.csswg.org/css-text-3/#valdef-white-space-pre-line>`__
      -  `preserve <https://drafts.csswg.org/css-speech-1/#valdef-voice-family-preserve>`__
      -  `pre-wrap <https://drafts.csswg.org/css-text-3/#valdef-white-space-pre-wrap>`__
      -  `print <https://drafts.csswg.org/mediaqueries-4/#valdef-media-print>`__
      -  `progress <https://drafts.csswg.org/css-ui-3/#valdef-cursor-progress>`__
      -  `progressive <https://drafts.csswg.org/mediaqueries-4/#valdef-media-scan-progressive>`__
      -  `projection <https://drafts.csswg.org/mediaqueries-4/#valdef-media-projection>`__
      -  `proportional-nums <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-numeric-proportional-nums>`__
      -  `proportional-width <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-east-asian-proportional-width>`__
      -  `proximity <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-type-proximity>`__
      -  `pt <https://drafts.csswg.org/css-values-3/#pt>`__
      -  `px <https://drafts.csswg.org/css-values-3/#px>`__
      -  `q <https://drafts.csswg.org/css-values-3/#Q>`__
      -  `rad <https://drafts.csswg.org/css-values-3/#rad>`__
      -  `rec2020 <https://drafts.csswg.org/mediaqueries-4/#valdef-media-color-gamut-rec2020>`__
      -  `recto <https://drafts.csswg.org/css-break-3/#valdef-break-before-recto>`__
      -  `reduced <https://drafts.csswg.org/css-speech-1/#valdef-voice-stress-reduced>`__
      -  `region <https://drafts.csswg.org/css-break-3/#valdef-break-before-region>`__
      -  `rem <https://drafts.csswg.org/css-values-3/#rem>`__
      -  repeat

         -  `in css-backgrounds-3, for background-repeat <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-repeat-repeat>`__
         -  `in css-backgrounds-3, for border-image-repeat <https://drafts.csswg.org/css-backgrounds-3/#valdef-border-image-repeat-repeat>`__

      -  `repeat-x <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-repeat-repeat-x>`__
      -  `repeat-y <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-repeat-repeat-y>`__
      -  `reverse <https://drafts.csswg.org/css-animations-1/#valdef-animation-direction-reverse>`__
      -  `revert <https://drafts.csswg.org/css-cascade-4/#valdef-all-revert>`__
      -  `<rg-ending-shape> <https://drafts.csswg.org/css-images-3/#valdef-radial-gradient-rg-ending-shape>`__
      -  `<rg-size> <https://drafts.csswg.org/css-images-3/#valdef-radial-gradient-rg-size>`__
      -  ridge

         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-ridge>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/box.html#value-def-ridge>`__

      -  right

         -  `in css-align-3, for justify-content, justify-self,
            justify-items <https://drafts.csswg.org/css-align-3/#valdef-justify-content-right>`__
         -  `in css-backgrounds-3, for background-position <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-position-right>`__
         -  `in css-break-3, for break-before,
            break-after <https://drafts.csswg.org/css-break-3/#valdef-break-before-right>`__
         -  `in css-speech-1, for voice-balance <https://drafts.csswg.org/css-speech-1/#valdef-voice-balance-right>`__
         -  `in css-text-3, for text-align <https://drafts.csswg.org/css-text-3/#valdef-text-align-right>`__
         -  `in css-text-decor-3, for text-emphasis-position <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-position-right>`__
         -  `in css-text-decor-3, for text-underline-position <https://drafts.csswg.org/css-text-decor-3/#underline-right>`__
         -  `in css-transforms-1, for transform-origin <https://drafts.csswg.org/css-transforms-1/#valdef-transform-origin-right>`__

      -  `rightwards <https://drafts.csswg.org/css-speech-1/#valdef-voice-balance-rightwards>`__
      -  round

         -  `in css-backgrounds-3, for background-repeat <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-repeat-round>`__
         -  `in css-backgrounds-3, for border-image-repeat <https://drafts.csswg.org/css-backgrounds-3/#valdef-border-image-repeat-round>`__

      -  row

         -  `in css-flexbox-1, for flex-direction <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-direction-row>`__
         -  `in css-grid-1, for grid-auto-flow <https://drafts.csswg.org/css-grid-1/#valdef-grid-auto-flow-row>`__

      -  `row-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-row-resize>`__
      -  `row-reverse <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-direction-row-reverse>`__
      -  `rtl <https://drafts.csswg.org/css-writing-modes-4/#valdef-direction-rtl>`__
      -  ruby

         -  `in css-display-3, for display,
            <display-inside> <https://drafts.csswg.org/css-display-3/#valdef-display-ruby>`__
         -  `in css-fonts-4, for font-variant-east-asian <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-east-asian-ruby>`__

      -  `ruby-base <https://drafts.csswg.org/css-display-3/#valdef-display-ruby-base>`__
      -  `ruby-base-container <https://drafts.csswg.org/css-display-3/#valdef-display-ruby-base-container>`__
      -  `ruby-text <https://drafts.csswg.org/css-display-3/#valdef-display-ruby-text>`__
      -  `ruby-text-container <https://drafts.csswg.org/css-display-3/#valdef-display-ruby-text-container>`__
      -  `run-in <https://drafts.csswg.org/css-display-3/#valdef-display-run-in>`__
      -  `running <https://drafts.csswg.org/css-animations-1/#valdef-animation-play-state-running>`__
      -  `s <https://drafts.csswg.org/css-values-3/#s>`__
      -  `safe <https://drafts.csswg.org/css-align-3/#valdef-overflow-position-safe>`__
      -  `sans-serif <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-sans-serif>`__
      -  `saturation <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-saturation>`__
      -  `scale-down <https://drafts.csswg.org/css-images-3/#valdef-object-fit-scale-down>`__
      -  screen

         -  `in compositing-1, for <blend-mode> <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-screen>`__
         -  `in mediaqueries-4, for @media <https://drafts.csswg.org/mediaqueries-4/#valdef-media-screen>`__

      -  scroll

         -  `in css-backgrounds-3, for background-attachment <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-attachment-scroll>`__
         -  `in mediaqueries-4, for @media/overflow-block <https://drafts.csswg.org/mediaqueries-4/#valdef-media-overflow-block-scroll>`__
         -  `in mediaqueries-4, for @media/overflow-inline <https://drafts.csswg.org/mediaqueries-4/#valdef-media-overflow-inline-scroll>`__

      -  `scroll-position <https://drafts.csswg.org/css-will-change-1/#valdef-will-change-scroll-position>`__
      -  `self-end <https://drafts.csswg.org/css-align-3/#valdef-self-position-self-end>`__
      -  `self-start <https://drafts.csswg.org/css-align-3/#valdef-self-position-self-start>`__
      -  `semi-condensed <https://drafts.csswg.org/css-fonts-4/#valdef-font-stretch-semi-condensed>`__
      -  `semi-expanded <https://drafts.csswg.org/css-fonts-4/#valdef-font-stretch-semi-expanded>`__
      -  <semitones>

         -  `in css-speech-1, for voice-pitch <https://drafts.csswg.org/css-speech-1/#valdef-voice-pitch-semitones>`__
         -  `in css-speech-1, for voice-range <https://drafts.csswg.org/css-speech-1/#valdef-voice-range-semitones>`__

      -  `se-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-se-resize>`__
      -  `serif <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-serif>`__
      -  `sesame <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-style-sesame>`__
      -  `sideways <https://drafts.csswg.org/css-writing-modes-4/#valdef-text-orientation-sideways>`__
      -  `sideways-lr <https://drafts.csswg.org/css-writing-modes-4/#valdef-writing-mode-sideways-lr>`__
      -  `sideways-right <https://drafts.csswg.org/css-writing-modes-4/#valdef-text-orientation-sideways-right>`__
      -  `sideways-rl <https://drafts.csswg.org/css-writing-modes-4/#valdef-writing-mode-sideways-rl>`__
      -  `silent <https://drafts.csswg.org/css-speech-1/#valdef-voice-volume-silent>`__
      -  `simp-chinese-formal <https://drafts.csswg.org/css-counter-styles-3/#simp-chinese-formal>`__
      -  `simp-chinese-informal <https://drafts.csswg.org/css-counter-styles-3/#simp-chinese-informal>`__
      -  `simplified <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-east-asian-simplified>`__
      -  `<size> <https://www.w3.org/TR/css-images-3/#valdef-radial-gradient-size>`__
      -  `size <https://drafts.csswg.org/css-contain-1/#valdef-contain-size>`__
      -  `slashed-zero <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-numeric-slashed-zero>`__
      -  `slice <https://drafts.csswg.org/css-break-3/#valdef-box-decoration-break-slice>`__
      -  slow

         -  `in css-speech-1, for voice-rate <https://drafts.csswg.org/css-speech-1/#valdef-voice-rate-slow>`__
         -  `in mediaqueries-4, for @media/update <https://drafts.csswg.org/mediaqueries-4/#valdef-media-update-slow>`__

      -  `small-caps <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-caps-small-caps>`__
      -  `small-caption <https://drafts.csswg.org/css-fonts-4/#valdef-font-small-caption>`__
      -  `smooth <https://drafts.csswg.org/css-images-3/#valdef-image-rendering-smooth>`__
      -  `soft <https://drafts.csswg.org/css-speech-1/#valdef-voice-volume-soft>`__
      -  `soft-light <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-soft-light>`__
      -  solid

         -  `in css-backgrounds-3, for <line-style>, border-style,
            border-top-style, border-left-style, border-bottom-style,
            border-right-style,
            border <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-style-solid>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/box.html#value-def-solid>`__

      -  space

         -  `in css-backgrounds-3, for background-repeat <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-repeat-space>`__
         -  `in css-backgrounds-3, for border-image-repeat <https://drafts.csswg.org/css-backgrounds-3/#valdef-border-image-repeat-space>`__

      -  space-around

         -  `in css-align-3, for align-content, justify-content,
            <content-distribution> <https://drafts.csswg.org/css-align-3/#valdef-align-content-space-around>`__
         -  `in css-flexbox-1, for align-content <https://drafts.csswg.org/css-flexbox-1/#valdef-align-content-space-around>`__
         -  `in css-flexbox-1, for justify-content <https://drafts.csswg.org/css-flexbox-1/#valdef-justify-content-space-around>`__

      -  space-between

         -  `in css-align-3, for align-content, justify-content,
            <content-distribution> <https://drafts.csswg.org/css-align-3/#valdef-align-content-space-between>`__
         -  `in css-flexbox-1, for align-content <https://drafts.csswg.org/css-flexbox-1/#valdef-align-content-space-between>`__
         -  `in css-flexbox-1, for justify-content <https://drafts.csswg.org/css-flexbox-1/#valdef-justify-content-space-between>`__

      -  `space-evenly <https://drafts.csswg.org/css-align-3/#valdef-align-content-space-evenly>`__
      -  `span && [ <integer [1,∞]> \|\| <custom-ident>
         ] <https://drafts.csswg.org/css-grid-1/#grid-placement-span-int>`__
      -  `span && [ <integer> \|\| <custom-ident>
         ] <https://www.w3.org/TR/css-grid-1/#grid-placement-span-int>`__
      -  `speech <https://drafts.csswg.org/mediaqueries-4/#valdef-media-speech>`__
      -  spell-out

         -  `in css-counter-styles-3, for @counter-style/speak-as <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-speak-as-spell-out>`__
         -  `in css-speech-1, for speak-as <https://drafts.csswg.org/css-speech-1/#valdef-speak-as-spell-out>`__

      -  square

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#square>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-square>`__

      -  `s-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-s-resize>`__
      -  srgb

         -  `in filter-effects-1, for color-interpolation-filters <https://drafts.fxtf.org/filter-effects-1/#valdef-color-interpolation-filters-srgb>`__
         -  `in mediaqueries-4, for @media/color-gamut <https://drafts.csswg.org/mediaqueries-4/#valdef-media-color-gamut-srgb>`__

      -  `stacked-fractions <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-numeric-stacked-fractions>`__
      -  start

         -  `in css-align-3, for <self-position>, <content-position>,
            justify-self, align-self, justify-content,
            align-content <https://drafts.csswg.org/css-align-3/#valdef-self-position-start>`__
         -  `in css-easing-1, for steps() <https://drafts.csswg.org/css-easing-1/#valdef-steps-start>`__
         -  `in css-scroll-snap-1, for scroll-snap-align <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-align-start>`__
         -  `in css-text-3, for text-align <https://drafts.csswg.org/css-text-3/#valdef-text-align-start>`__

      -  `status-bar <https://drafts.csswg.org/css-fonts-4/#valdef-font-status-bar>`__
      -  `step-end <https://drafts.csswg.org/css-easing-1/#valdef-step-easing-function-step-end>`__
      -  `step-start <https://drafts.csswg.org/css-easing-1/#valdef-step-easing-function-step-start>`__
      -  stretch

         -  `in css-align-3, for align-content, justify-content,
            <content-distribution> <https://drafts.csswg.org/css-align-3/#valdef-align-content-stretch>`__
         -  `in css-align-3, for align-self <https://drafts.csswg.org/css-align-3/#valdef-align-self-stretch>`__
         -  `in css-align-3, for justify-self <https://drafts.csswg.org/css-align-3/#valdef-justify-self-stretch>`__
         -  `in css-backgrounds-3, for border-image-repeat <https://drafts.csswg.org/css-backgrounds-3/#valdef-border-image-repeat-stretch>`__
         -  `in css-flexbox-1, for align-content <https://drafts.csswg.org/css-flexbox-1/#valdef-align-content-stretch>`__
         -  `in css-flexbox-1, for align-items,
            align-self <https://drafts.csswg.org/css-flexbox-1/#valdef-align-items-stretch>`__

      -  strict

         -  `in css-contain-1, for contain <https://drafts.csswg.org/css-contain-1/#valdef-contain-strict>`__
         -  `in css-text-3, for line-break <https://drafts.csswg.org/css-text-3/#valdef-line-break-strict>`__

      -  `<string>+ <https://drafts.csswg.org/css-grid-1/#valdef-grid-template-areas-string>`__
      -  stroke-box

         -  `in css-masking-1, for clip-path <https://drafts.fxtf.org/css-masking-1/#valdef-clip-path-stroke-box>`__
         -  `in css-masking-1, for mask-clip <https://drafts.fxtf.org/css-masking-1/#valdef-mask-clip-stroke-box>`__
         -  `in css-masking-1, for mask-origin <https://drafts.fxtf.org/css-masking-1/#valdef-mask-origin-stroke-box>`__
         -  `in css-transforms-1, for transform-box <https://drafts.csswg.org/css-transforms-1/#valdef-transform-box-stroke-box>`__

      -  strong

         -  `in css-speech-1, for pause-before,
            pause-after <https://drafts.csswg.org/css-speech-1/#valdef-pause-before-strong>`__
         -  `in css-speech-1, for rest-before,
            rest-after <https://drafts.csswg.org/css-speech-1/#valdef-rest-before-strong>`__
         -  `in css-speech-1, for voice-stress <https://drafts.csswg.org/css-speech-1/#valdef-voice-stress-strong>`__

      -  `styleset(<feature-value-name>#) <https://drafts.csswg.org/css-fonts-4/#styleset>`__
      -  `stylistic(<feature-value-name>) <https://drafts.csswg.org/css-fonts-4/#stylistic>`__
      -  `sub <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-position-sub>`__
      -  `subtract <https://drafts.fxtf.org/css-masking-1/#valdef-mask-composite-subtract>`__
      -  `super <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-position-super>`__
      -  `swap <https://drafts.csswg.org/css-fonts-4/#valdef-font-face-font-display-swap>`__
      -  `swash(<feature-value-name>) <https://drafts.csswg.org/css-fonts-4/#swash>`__
      -  `sw-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-sw-resize>`__
      -  `symbolic <https://drafts.csswg.org/css-counter-styles-3/#valdef-system-symbolic>`__
      -  `system-ui <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-system-ui>`__
      -  table

         -  `in css-display-3, for display,
            <display-inside> <https://drafts.csswg.org/css-display-3/#valdef-display-table>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-table>`__

      -  table-caption

         -  `in css-display-3, for display,
            <display-internal> <https://drafts.csswg.org/css-display-3/#valdef-display-table-caption>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-table-caption>`__

      -  table-cell

         -  `in css-display-3, for display,
            <display-internal> <https://drafts.csswg.org/css-display-3/#valdef-display-table-cell>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-table-cell>`__

      -  table-column

         -  `in css-display-3, for display,
            <display-internal> <https://drafts.csswg.org/css-display-3/#valdef-display-table-column>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-table-column>`__

      -  table-column-group

         -  `in css-display-3, for display,
            <display-internal> <https://drafts.csswg.org/css-display-3/#valdef-display-table-column-group>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-table-column-group>`__

      -  table-footer-group

         -  `in css-display-3, for display,
            <display-internal> <https://drafts.csswg.org/css-display-3/#valdef-display-table-footer-group>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-table-footer-group>`__

      -  table-header-group

         -  `in css-display-3, for display,
            <display-internal> <https://drafts.csswg.org/css-display-3/#valdef-display-table-header-group>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-table-header-group>`__

      -  table-row

         -  `in css-display-3, for display,
            <display-internal> <https://drafts.csswg.org/css-display-3/#valdef-display-table-row>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-table-row>`__

      -  table-row-group

         -  `in css-display-3, for display,
            <display-internal> <https://drafts.csswg.org/css-display-3/#valdef-display-table-row-group>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/tables.html#value-def-table-row-group>`__

      -  `tabular-nums <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-numeric-tabular-nums>`__
      -  `tamil <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-tamil>`__
      -  `telugu <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-telugu>`__
      -  text

         -  `in css-fonts-4, for font-variant-emoji <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-emoji-text>`__
         -  `in css-ui-3, for cursor <https://drafts.csswg.org/css-ui-3/#valdef-cursor-text>`__

      -  `thai <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-thai>`__
      -  `thick <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-width-thick>`__
      -  `thin <https://drafts.csswg.org/css-backgrounds-3/#valdef-line-width-thin>`__
      -  `tibetan <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-tibetan>`__
      -  `titling-caps <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-caps-titling-caps>`__
      -  top

         -  `in css-backgrounds-3, for background-position <https://drafts.csswg.org/css-backgrounds-3/#valdef-background-position-top>`__
         -  `in css-transforms-1, for transform-origin <https://drafts.csswg.org/css-transforms-1/#valdef-transform-origin-top>`__

      -  `<track-list> \|
         <auto-track-list> <https://drafts.csswg.org/css-grid-1/#track-listing>`__
      -  `trad-chinese-formal <https://drafts.csswg.org/css-counter-styles-3/#trad-chinese-formal>`__
      -  `trad-chinese-informal <https://drafts.csswg.org/css-counter-styles-3/#trad-chinese-informal>`__
      -  `traditional <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-east-asian-traditional>`__
      -  `triangle <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-style-triangle>`__
      -  `tty <https://drafts.csswg.org/mediaqueries-4/#valdef-media-tty>`__
      -  `turn <https://drafts.csswg.org/css-values-3/#turn>`__
      -  `tv <https://drafts.csswg.org/mediaqueries-4/#valdef-media-tv>`__
      -  `ui-monospace <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-ui-monospace>`__
      -  `ui-rounded <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-ui-rounded>`__
      -  `ui-sans-serif <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-ui-sans-serif>`__
      -  `ui-serif <https://drafts.csswg.org/css-fonts-4/#valdef-font-family-ui-serif>`__
      -  `ultra-condensed <https://drafts.csswg.org/css-fonts-4/#valdef-font-stretch-ultra-condensed>`__
      -  `ultra-expanded <https://drafts.csswg.org/css-fonts-4/#valdef-font-stretch-ultra-expanded>`__
      -  under

         -  `in css-text-decor-3, for text-emphasis-position <https://drafts.csswg.org/css-text-decor-3/#valdef-text-emphasis-position-under>`__
         -  `in css-text-decor-3, for text-underline-position <https://drafts.csswg.org/css-text-decor-3/#underline-under>`__

      -  `underline <https://drafts.csswg.org/css-text-decor-3/#valdef-text-decoration-line-underline>`__
      -  `unicase <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-caps-unicase>`__
      -  `unicode <https://drafts.csswg.org/css-fonts-4/#valdef-font-variant-emoji-unicode>`__
      -  `unsafe <https://drafts.csswg.org/css-align-3/#valdef-overflow-position-unsafe>`__
      -  `unset <https://drafts.csswg.org/css-cascade-4/#valdef-all-unset>`__
      -  `upper-alpha <https://drafts.csswg.org/css-counter-styles-3/#upper-alpha>`__
      -  `upper-armenian <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-name-upper-armenian>`__
      -  `uppercase <https://drafts.csswg.org/css-text-3/#valdef-text-transform-uppercase>`__
      -  upper-latin

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#upper-latin>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-upper-latin>`__

      -  upper-roman

         -  `in css-counter-styles-3, for <counter-style-name> <https://drafts.csswg.org/css-counter-styles-3/#upper-roman>`__
         -  `in css2 <https://www.w3.org/TR/CSS21/generate.html#value-def-upper-roman>`__

      -  `upright <https://drafts.csswg.org/css-writing-modes-4/#valdef-text-orientation-upright>`__
      -  `<url> <https://drafts.fxtf.org/css-masking-1/#valdef-mask-image-url>`__
      -  userspaceonuse

         -  `in css-masking-1, for clipPathUnits <https://drafts.fxtf.org/css-masking-1/#valdef-clippathunits-userspaceonuse>`__
         -  `in css-masking-1, for maskContentUnits <https://drafts.fxtf.org/css-masking-1/#valdef-maskcontentunits-userspaceonuse>`__
         -  `in css-masking-1, for maskUnits <https://drafts.fxtf.org/css-masking-1/#valdef-maskunits-userspaceonuse>`__

      -  `verso <https://drafts.csswg.org/css-break-3/#valdef-break-before-verso>`__
      -  `vertical-lr <https://drafts.csswg.org/css-writing-modes-4/#valdef-writing-mode-vertical-lr>`__
      -  `vertical-rl <https://drafts.csswg.org/css-writing-modes-4/#valdef-writing-mode-vertical-rl>`__
      -  `vertical-text <https://drafts.csswg.org/css-ui-3/#valdef-cursor-vertical-text>`__
      -  `vh <https://drafts.csswg.org/css-values-3/#vh>`__
      -  view-box

         -  `in css-masking-1, for clip-path <https://drafts.fxtf.org/css-masking-1/#valdef-clip-path-view-box>`__
         -  `in css-masking-1, for mask-clip <https://drafts.fxtf.org/css-masking-1/#valdef-mask-clip-view-box>`__
         -  `in css-masking-1, for mask-origin <https://drafts.fxtf.org/css-masking-1/#valdef-mask-origin-view-box>`__
         -  `in css-transforms-1, for transform-box <https://drafts.csswg.org/css-transforms-1/#valdef-transform-box-view-box>`__

      -  `visible <https://drafts.csswg.org/css-display-3/#valdef-visibility-visible>`__
      -  `vmax <https://drafts.csswg.org/css-values-3/#vmax>`__
      -  `vmin <https://drafts.csswg.org/css-values-3/#vmin>`__
      -  `vw <https://drafts.csswg.org/css-values-3/#vw>`__
      -  `wait <https://drafts.csswg.org/css-ui-3/#valdef-cursor-wait>`__
      -  weak

         -  `in css-speech-1, for pause-before,
            pause-after <https://drafts.csswg.org/css-speech-1/#valdef-pause-before-weak>`__
         -  `in css-speech-1, for rest-before,
            rest-after <https://drafts.csswg.org/css-speech-1/#valdef-rest-before-weak>`__

      -  `words <https://drafts.csswg.org/css-counter-styles-3/#valdef-counter-style-speak-as-words>`__
      -  `wrap <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-wrap-wrap>`__
      -  `wrap-reverse <https://drafts.csswg.org/css-flexbox-1/#valdef-flex-wrap-wrap-reverse>`__
      -  `w-resize <https://drafts.csswg.org/css-ui-3/#valdef-cursor-w-resize>`__
      -  `x <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-type-x>`__
      -  `x-fast <https://drafts.csswg.org/css-speech-1/#valdef-voice-rate-x-fast>`__
      -  x-high

         -  `in css-speech-1, for voice-pitch <https://drafts.csswg.org/css-speech-1/#valdef-voice-pitch-x-high>`__
         -  `in css-speech-1, for voice-range <https://drafts.csswg.org/css-speech-1/#valdef-voice-range-x-high>`__

      -  `x-loud <https://drafts.csswg.org/css-speech-1/#valdef-voice-volume-x-loud>`__
      -  x-low

         -  `in css-speech-1, for voice-pitch <https://drafts.csswg.org/css-speech-1/#valdef-voice-pitch-x-low>`__
         -  `in css-speech-1, for voice-range <https://drafts.csswg.org/css-speech-1/#valdef-voice-range-x-low>`__

      -  `x-slow <https://drafts.csswg.org/css-speech-1/#valdef-voice-rate-x-slow>`__
      -  `x-soft <https://drafts.csswg.org/css-speech-1/#valdef-voice-volume-x-soft>`__
      -  x-strong

         -  `in css-speech-1, for pause-before, pause-after <https://drafts.csswg.org/css-speech-1/#valdef-pause-before-x-strong>`__
         -  `in css-speech-1, for rest-before, rest-after <https://drafts.csswg.org/css-speech-1/#valdef-rest-before-x-strong>`__

      -  x-weak

         -  `in css-speech-1, for pause-before, pause-after <https://drafts.csswg.org/css-speech-1/#valdef-pause-before-x-weak>`__
         -  `in css-speech-1, for rest-before, rest-after <https://drafts.csswg.org/css-speech-1/#valdef-rest-before-x-weak>`__

      -  `y <https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-type-y>`__
      -  `young <https://drafts.csswg.org/css-speech-1/#valdef-voice-family-young>`__
      -  `zoom-in <https://drafts.csswg.org/css-ui-3/#valdef-cursor-zoom-in>`__
      -  `zoom-out <https://drafts.csswg.org/css-ui-3/#valdef-cursor-zoom-out>`__

   .. rubric:: 6. Acknowledgements ` <#acks>`__
      :name: acks
      :class: heading settled

   Special thanks to Florian Rivoal for creating the initial draft of
   the `§ 3.2.1 Experimentation and Unstable Features <#experimental>`__
   recommendations.

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

.. _w3c-conformance-classes:

 Conformance classes ` <#w3c-conformance-classes>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Conformance to this specification is defined for three conformance
classes:

style sheet
   A `CSS style
   sheet <https://www.w3.org/TR/CSS21/conform.html#style-sheet>`__.
renderer
   A `UA <https://www.w3.org/TR/CSS21/conform.html#user-agent>`__ that
   interprets the semantics of a style sheet and renders documents that
   use them.
authoring tool
   A `UA <https://www.w3.org/TR/CSS21/conform.html#user-agent>`__ that
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
appropriate <https://www.w3.org/TR/CSS21/conform.html#ignore>`__) any
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
`following best
practices <https://www.w3.org/TR/CSS/#future-proofing>`__ for the
implementation of `unstable <https://www.w3.org/TR/CSS/#unstable>`__
features and `proprietary
extensions <https://www.w3.org/TR/CSS/#proprietary-extension>`__ to CSS.

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
https://www.w3.org/Style/CSS/Test/. Questions should be directed to the
`public-css-testsuite@w3.org <https://lists.w3.org/Archives/Public/public-css-testsuite>`__
mailing list.

References ` <#references>`__
------------------------------

.. _normative:

Normative References ` <#normative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[COMPOSITING]
   Rik Cabanier; Nikos Andronikos. `Compositing and Blending Level
   1 <https://www.w3.org/TR/compositing-1/>`__. 13 January 2015. CR.
   URL: https://www.w3.org/TR/compositing-1/
[CSS-BACKGROUNDS-3]
   Bert Bos; Elika Etemad; Brad Kemper. `CSS Backgrounds and Borders
   Module Level 3 <https://www.w3.org/TR/css-backgrounds-3/>`__. 14
   February 2023. CR. URL: https://www.w3.org/TR/css-backgrounds-3/
[CSS-BOX-3]
   Elika Etemad. `CSS Box Model Module Level
   3 <https://www.w3.org/TR/css-box-3/>`__. 6 April 2023. REC. URL:
   https://www.w3.org/TR/css-box-3/
[CSS-CASCADE-4]
   Elika Etemad; Tab Atkins Jr.. `CSS Cascading and Inheritance Level
   4 <https://www.w3.org/TR/css-cascade-4/>`__. 13 January 2022. CR.
   URL: https://www.w3.org/TR/css-cascade-4/
[CSS-COLOR-4]
   Tab Atkins Jr.; Chris Lilley; Lea Verou. `CSS Color Module Level
   4 <https://www.w3.org/TR/css-color-4/>`__. 1 November 2022. CR. URL:
   https://www.w3.org/TR/css-color-4/
[CSS-COLOR-5]
   Chris Lilley; et al. `CSS Color Module Level
   5 <https://www.w3.org/TR/css-color-5/>`__. 28 June 2022. WD. URL:
   https://www.w3.org/TR/css-color-5/
[CSS-CONDITIONAL-3]
   David Baron; Elika Etemad; Chris Lilley. `CSS Conditional Rules
   Module Level 3 <https://www.w3.org/TR/css-conditional-3/>`__. 13
   January 2022. CR. URL: https://www.w3.org/TR/css-conditional-3/
[CSS-CONTAIN-1]
   Tab Atkins Jr.; Florian Rivoal. `CSS Containment Module Level
   1 <https://www.w3.org/TR/css-contain-1/>`__. 25 October 2022. REC.
   URL: https://www.w3.org/TR/css-contain-1/
[CSS-CONTAIN-2]
   Tab Atkins Jr.; Florian Rivoal; Vladimir Levin. `CSS Containment
   Module Level 2 <https://www.w3.org/TR/css-contain-2/>`__. 17
   September 2022. WD. URL: https://www.w3.org/TR/css-contain-2/
[CSS-COUNTER-STYLES-3]
   Tab Atkins Jr.. `CSS Counter Styles Level
   3 <https://www.w3.org/TR/css-counter-styles-3/>`__. 27 July 2021. CR.
   URL: https://www.w3.org/TR/css-counter-styles-3/
[CSS-DISPLAY-3]
   Elika Etemad; Tab Atkins Jr.. `CSS Display Module Level
   3 <https://www.w3.org/TR/css-display-3/>`__. 30 March 2023. CR. URL:
   https://www.w3.org/TR/css-display-3/
[CSS-EASING-1]
   Brian Birtles; Dean Jackson; Matt Rakow. `CSS Easing Functions Level
   1 <https://www.w3.org/TR/css-easing-1/>`__. 13 February 2023. CR.
   URL: https://www.w3.org/TR/css-easing-1/
[CSS-FLEXBOX-1]
   Tab Atkins Jr.; et al. `CSS Flexible Box Layout Module Level
   1 <https://www.w3.org/TR/css-flexbox-1/>`__. 19 November 2018. CR.
   URL: https://www.w3.org/TR/css-flexbox-1/
[CSS-FONTS-3]
   John Daggett; Myles Maxfield; Chris Lilley. `CSS Fonts Module Level
   3 <https://www.w3.org/TR/css-fonts-3/>`__. 20 September 2018. REC.
   URL: https://www.w3.org/TR/css-fonts-3/
[CSS-FONTS-4]
   John Daggett; Myles Maxfield; Chris Lilley. `CSS Fonts Module Level
   4 <https://www.w3.org/TR/css-fonts-4/>`__. 21 December 2021. WD. URL:
   https://www.w3.org/TR/css-fonts-4/
[CSS-IMAGES-3]
   Tab Atkins Jr.; Elika Etemad; Lea Verou. `CSS Images Module Level
   3 <https://www.w3.org/TR/css-images-3/>`__. 17 December 2020. CR.
   URL: https://www.w3.org/TR/css-images-3/
[CSS-IMAGES-4]
   Tab Atkins Jr.; Elika Etemad; Lea Verou. `CSS Images Module Level
   4 <https://www.w3.org/TR/css-images-4/>`__. 17 February 2023. WD.
   URL: https://www.w3.org/TR/css-images-4/
[CSS-MULTICOL-1]
   Florian Rivoal; Rachel Andrew. `CSS Multi-column Layout Module Level
   1 <https://www.w3.org/TR/css-multicol-1/>`__. 12 October 2021. CR.
   URL: https://www.w3.org/TR/css-multicol-1/
[CSS-POSITION-3]
   Elika Etemad; Tab Atkins Jr.. `CSS Positioned Layout Module Level
   3 <https://www.w3.org/TR/css-position-3/>`__. 3 April 2023. WD. URL:
   https://www.w3.org/TR/css-position-3/
[CSS-SIZING-3]
   Tab Atkins Jr.; Elika Etemad. `CSS Box Sizing Module Level
   3 <https://www.w3.org/TR/css-sizing-3/>`__. 17 December 2021. WD.
   URL: https://www.w3.org/TR/css-sizing-3/
[CSS-SIZING-4]
   Tab Atkins Jr.; Elika Etemad; Jen Simmons. `CSS Box Sizing Module
   Level 4 <https://www.w3.org/TR/css-sizing-4/>`__. 20 May 2021. WD.
   URL: https://www.w3.org/TR/css-sizing-4/
[CSS-STYLE-ATTR]
   Tantek Çelik; Elika Etemad. `CSS Style
   Attributes <https://www.w3.org/TR/css-style-attr/>`__. 7 November
   2013. REC. URL: https://www.w3.org/TR/css-style-attr/
[CSS-SYNTAX-3]
   Tab Atkins Jr.; Simon Sapin. `CSS Syntax Module Level
   3 <https://www.w3.org/TR/css-syntax-3/>`__. 24 December 2021. CR.
   URL: https://www.w3.org/TR/css-syntax-3/
[CSS-TEXT-4]
   Elika Etemad; et al. `CSS Text Module Level
   4 <https://www.w3.org/TR/css-text-4/>`__. 20 October 2023. WD. URL:
   https://www.w3.org/TR/css-text-4/
[CSS-TRANSFORMS-1]
   Simon Fraser; et al. `CSS Transforms Module Level
   1 <https://www.w3.org/TR/css-transforms-1/>`__. 14 February 2019. CR.
   URL: https://www.w3.org/TR/css-transforms-1/
[CSS-TRANSFORMS-2]
   Tab Atkins Jr.; et al. `CSS Transforms Module Level
   2 <https://www.w3.org/TR/css-transforms-2/>`__. 9 November 2021. WD.
   URL: https://www.w3.org/TR/css-transforms-2/
[CSS-UI-3]
   Tantek Çelik; Florian Rivoal. `CSS Basic User Interface Module Level
   3 (CSS3 UI) <https://www.w3.org/TR/css-ui-3/>`__. 21 June 2018. REC.
   URL: https://www.w3.org/TR/css-ui-3/
[CSS-UI-4]
   Florian Rivoal. `CSS Basic User Interface Module Level
   4 <https://www.w3.org/TR/css-ui-4/>`__. 16 March 2021. WD. URL:
   https://www.w3.org/TR/css-ui-4/
[CSS-VALUES-3]
   Tab Atkins Jr.; Elika Etemad. `CSS Values and Units Module Level
   3 <https://www.w3.org/TR/css-values-3/>`__. 1 December 2022. CR. URL:
   https://www.w3.org/TR/css-values-3/
[CSS-VARIABLES-1]
   Tab Atkins Jr.. `CSS Custom Properties for Cascading Variables Module
   Level 1 <https://www.w3.org/TR/css-variables-1/>`__. 16 June 2022.
   CR. URL: https://www.w3.org/TR/css-variables-1/
[CSS-WILL-CHANGE-1]
   Tab Atkins Jr.. `CSS Will Change Module Level
   1 <https://www.w3.org/TR/css-will-change-1/>`__. 5 May 2022. CR. URL:
   https://www.w3.org/TR/css-will-change-1/
[CSS-WRITING-MODES-3]
   Elika Etemad; Koji Ishii. `CSS Writing Modes Level
   3 <https://www.w3.org/TR/css-writing-modes-3/>`__. 10 December 2019.
   REC. URL: https://www.w3.org/TR/css-writing-modes-3/
[CSS2]
   Bert Bos; et al. `Cascading Style Sheets Level 2 Revision 1 (CSS 2.1)
   Specification <https://www.w3.org/TR/CSS21/>`__. 7 June 2011. REC.
   URL: https://www.w3.org/TR/CSS21/
[CSS3-MEDIAQUERIES]
   Florian Rivoal. `Media Queries Level
   3 <https://www.w3.org/TR/mediaqueries-3/>`__. 5 April 2022. REC. URL:
   https://www.w3.org/TR/mediaqueries-3/
[CSS3-NAMESPACE]
   Elika Etemad. `CSS Namespaces Module Level
   3 <https://www.w3.org/TR/css-namespaces-3/>`__. 20 March 2014. REC.
   URL: https://www.w3.org/TR/css-namespaces-3/
[RFC2119]
   S. Bradner. `Key words for use in RFCs to Indicate Requirement
   Levels <https://datatracker.ietf.org/doc/html/rfc2119>`__. March
   1997. Best Current Practice. URL:
   https://datatracker.ietf.org/doc/html/rfc2119
[SELECTORS-3]
   Tantek Çelik; et al. `Selectors Level
   3 <https://www.w3.org/TR/selectors-3/>`__. 6 November 2018. REC. URL:
   https://www.w3.org/TR/selectors-3/
[SELECTORS-4]
   Elika Etemad; Tab Atkins Jr.. `Selectors Level
   4 <https://www.w3.org/TR/selectors-4/>`__. 11 November 2022. WD. URL:
   https://www.w3.org/TR/selectors-4/

.. _informative:

Informative References ` <#informative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[CSS-ALIGN-3]
   Elika Etemad; Tab Atkins Jr.. `CSS Box Alignment Module Level
   3 <https://www.w3.org/TR/css-align-3/>`__. 17 February 2023. WD. URL:
   https://www.w3.org/TR/css-align-3/
[CSS-ANIMATIONS-1]
   David Baron; et al. `CSS Animations Level
   1 <https://www.w3.org/TR/css-animations-1/>`__. 2 March 2023. WD.
   URL: https://www.w3.org/TR/css-animations-1/
[CSS-BREAK-3]
   Rossen Atanassov; Elika Etemad. `CSS Fragmentation Module Level
   3 <https://www.w3.org/TR/css-break-3/>`__. 4 December 2018. CR. URL:
   https://www.w3.org/TR/css-break-3/
[CSS-CASCADE-3]
   Elika Etemad; Tab Atkins Jr.. `CSS Cascading and Inheritance Level
   3 <https://www.w3.org/TR/css-cascade-3/>`__. 11 February 2021. REC.
   URL: https://www.w3.org/TR/css-cascade-3/
[CSS-CASCADE-5]
   Elika Etemad; Miriam Suzanne; Tab Atkins Jr.. `CSS Cascading and
   Inheritance Level 5 <https://www.w3.org/TR/css-cascade-5/>`__. 13
   January 2022. CR. URL: https://www.w3.org/TR/css-cascade-5/
[CSS-COLOR-3]
   Tantek Çelik; Chris Lilley; David Baron. `CSS Color Module Level
   3 <https://www.w3.org/TR/css-color-3/>`__. 18 January 2022. REC. URL:
   https://www.w3.org/TR/css-color-3/
[CSS-COLOR-ADJUST-1]
   Elika Etemad; et al. `CSS Color Adjustment Module Level
   1 <https://www.w3.org/TR/css-color-adjust-1/>`__. 14 June 2022. CR.
   URL: https://www.w3.org/TR/css-color-adjust-1/
[CSS-CONDITIONAL-4]
   David Baron; Elika Etemad; Chris Lilley. `CSS Conditional Rules
   Module Level 4 <https://www.w3.org/TR/css-conditional-4/>`__. 17
   February 2022. CR. URL: https://www.w3.org/TR/css-conditional-4/
[CSS-FONT-LOADING-3]
   Tab Atkins Jr.. `CSS Font Loading Module Level
   3 <https://www.w3.org/TR/css-font-loading-3/>`__. 6 April 2023. WD.
   URL: https://www.w3.org/TR/css-font-loading-3/
[CSS-GRID-1]
   Tab Atkins Jr.; et al. `CSS Grid Layout Module Level
   1 <https://www.w3.org/TR/css-grid-1/>`__. 18 December 2020. CR. URL:
   https://www.w3.org/TR/css-grid-1/
[CSS-GRID-2]
   Tab Atkins Jr.; Elika Etemad; Rossen Atanassov. `CSS Grid Layout
   Module Level 2 <https://www.w3.org/TR/css-grid-2/>`__. 18 December
   2020. CR. URL: https://www.w3.org/TR/css-grid-2/
[CSS-LISTS-3]
   Elika Etemad; Tab Atkins Jr.. `CSS Lists and Counters Module Level
   3 <https://www.w3.org/TR/css-lists-3/>`__. 17 November 2020. WD. URL:
   https://www.w3.org/TR/css-lists-3/
[CSS-LOGICAL-1]
   Rossen Atanassov; Elika Etemad. `CSS Logical Properties and Values
   Level 1 <https://www.w3.org/TR/css-logical-1/>`__. 27 August 2018.
   WD. URL: https://www.w3.org/TR/css-logical-1/
[CSS-MASKING-1]
   Dirk Schulze; Brian Birtles; Tab Atkins Jr.. `CSS Masking Module
   Level 1 <https://www.w3.org/TR/css-masking-1/>`__. 5 August 2021. CR.
   URL: https://www.w3.org/TR/css-masking-1/
[CSS-SCROLL-SNAP-1]
   Matt Rakow; et al. `CSS Scroll Snap Module Level
   1 <https://www.w3.org/TR/css-scroll-snap-1/>`__. 11 March 2021. CR.
   URL: https://www.w3.org/TR/css-scroll-snap-1/
[CSS-SCROLLBARS-1]
   Tantek Çelik; Rossen Atanassov; Florian Rivoal. `CSS Scrollbars
   Styling Module Level 1 <https://www.w3.org/TR/css-scrollbars-1/>`__.
   9 December 2021. CR. URL: https://www.w3.org/TR/css-scrollbars-1/
[CSS-SHAPES-1]
   Rossen Atanassov; Alan Stearns. `CSS Shapes Module Level
   1 <https://www.w3.org/TR/css-shapes-1/>`__. 15 November 2022. CR.
   URL: https://www.w3.org/TR/css-shapes-1/
[CSS-SPEECH-1]
   Léonie Watson; Elika Etemad. `CSS Speech Module Level
   1 <https://www.w3.org/TR/css-speech-1/>`__. 14 February 2023. CR.
   URL: https://www.w3.org/TR/css-speech-1/
[CSS-TEXT-3]
   Elika Etemad; Koji Ishii; Florian Rivoal. `CSS Text Module Level
   3 <https://www.w3.org/TR/css-text-3/>`__. 3 September 2023. CR. URL:
   https://www.w3.org/TR/css-text-3/
[CSS-TEXT-DECOR-3]
   Elika Etemad; Koji Ishii. `CSS Text Decoration Module Level
   3 <https://www.w3.org/TR/css-text-decor-3/>`__. 5 May 2022. CR. URL:
   https://www.w3.org/TR/css-text-decor-3/
[CSS-TRANSITIONS-1]
   David Baron; et al. `CSS
   Transitions <https://www.w3.org/TR/css-transitions-1/>`__. 11 October
   2018. WD. URL: https://www.w3.org/TR/css-transitions-1/
[CSS-VIEW-TRANSITIONS-1]
   Tab Atkins Jr.; Jake Archibald; Khushal Sagar. `CSS View Transitions
   Module Level 1 <https://www.w3.org/TR/css-view-transitions-1/>`__. 5
   September 2023. CR. URL:
   https://www.w3.org/TR/css-view-transitions-1/
[CSS-WRITING-MODES-4]
   Elika Etemad; Koji Ishii. `CSS Writing Modes Level
   4 <https://www.w3.org/TR/css-writing-modes-4/>`__. 30 July 2019. CR.
   URL: https://www.w3.org/TR/css-writing-modes-4/
[FILTER-EFFECTS-1]
   Dirk Schulze; Dean Jackson. `Filter Effects Module Level
   1 <https://www.w3.org/TR/filter-effects-1/>`__. 18 December 2018. WD.
   URL: https://www.w3.org/TR/filter-effects-1/
[MEDIAQUERIES-4]
   Florian Rivoal; Tab Atkins Jr.. `Media Queries Level
   4 <https://www.w3.org/TR/mediaqueries-4/>`__. 25 December 2021. CR.
   URL: https://www.w3.org/TR/mediaqueries-4/
[RESIZE-OBSERVER-1]
   Aleks Totic; Greg Whitworth. `Resize
   Observer <https://www.w3.org/TR/resize-observer-1/>`__. 11 February
   2020. WD. URL: https://www.w3.org/TR/resize-observer-1/
[WEB-ANIMATIONS-1]
   Brian Birtles; et al. `Web
   Animations <https://www.w3.org/TR/web-animations-1/>`__. 5 June 2023.
   WD. URL: https://www.w3.org/TR/web-animations-1/

.. |W3C| image:: https://www.w3.org/StyleSheets/TR/2021/logos/W3C
   :width: 72px
   :height: 48px
   :target: https://www.w3.org/
