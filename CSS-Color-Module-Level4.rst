
/CSS Color Module Level 4
-------------------------

   .. .. rubric:: CSS Color Module Level 4
      :name: title
      :class: p-name no-ref

   `W3C Candidate Recommendation
   Draft <https://www.w3.org/standards/types#CRD>`__, 13 February 2024

   More details about this document

   .. container::

      This version:
         https://www.w3.org/TR/2024/CRD-css-color-4-20240213/
      Latest published version:
         https://www.w3.org/TR/css-color-4/
      Editor's Draft:
         https://drafts.csswg.org/css-color-4/
      Previous Versions:
         https://www.w3.org/TR/2022/CRD-css-color-4-20221101/
      History:
         https://www.w3.org/standards/history/css-color-4/
      Implementation Report:
         https://wpt.fyi/results/css/css-color
      Feedback:
         `CSSWG Issues Repository <https://github.com/w3c/csswg-drafts/labels/css-color-4>`__
      Editors:
         `Tab Atkins Jr. <http://xanthir.com/contact>`__ (Google)
         `Chris Lilley <https://svgees.us/>`__ (W3C)
         `Lea Verou <http://lea.verou.me/>`__ (Invited Expert)
      Former Editor:
         `L. David Baron <https://dbaron.org/>`__
         (`Mozilla <https://www.mozilla.org/>`__)
      Suggest an Edit for this Spec:
         `GitHub Editor <https://github.com/w3c/csswg-drafts/blob/main/css-color-4/Overview.bs>`__
      Test Suite:
         https://wpt.fyi/results/css/css-color/

   .. container::

   `Copyright <https://www.w3.org/policies/#copyright>`__ © 2024 
   `World Wide Web Consortium <https://www.w3.org/>`__. W3C\ :sup:`®`
   `liability <https://www.w3.org/policies/#Legal_Disclaimer>`__,
   `trademark <https://www.w3.org/policies/#W3C_Trademarks>`__ and
   `permissive document license <https://www.w3.org/copyright/software-license/>`__ rules
   apply.

   --------------

.. container:: p-summary

/Abstract
---------

   .. .. rubric:: Abstract
      :name: abstract
      :class: no-num no-toc no-ref heading settled

   This specification describes CSS `<color> <#typedef-color>`__ values,
   and properties for foreground color and group opacity.

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

   This document was published by the `CSS Working
   Group <https://www.w3.org/groups/wg/css>`__ as a **Candidate
   Recommendation Draft** using the `Recommendation
   track <https://www.w3.org/2023/Process-20231103/#recs-and-notes>`__.
   Publication as a Candidate Recommendation does not imply endorsement
   by W3C and its Members. A Candidate Recommendation Draft integrates
   changes from the previous Candidate Recommendation that the Working
   Group intends to include in a subsequent Candidate Recommendation
   Snapshot.

   This is a draft document and may be updated, replaced or obsoleted by
   other documents at any time. It is inappropriate to cite this
   document as other than work in progress.

   Please send feedback by `filing issues in
   GitHub <https://github.com/w3c/csswg-drafts/issues>`__ (preferred),
   including the spec code “css-color” in the title, like this:
   “[css-color] *…summary of comment…*\ ”. All issues and comments are
   `archived <https://lists.w3.org/Archives/Public/public-css-archive/>`__.
   Alternately, feedback can be sent to the
   (`archived <https://lists.w3.org/Archives/Public/www-style/>`__)
   public mailing list
   `www-style@w3.org <mailto:www-style@w3.org?Subject=%5Bcss-color%5D%20PUT%20SUBJECT%20HERE>`__.

   This document is governed by the `03 November 2023 W3C Process
   Document <https://www.w3.org/2023/Process-20231103/>`__.

   This document was produced by a group operating under the `W3C Patent
   Policy <https://www.w3.org/Consortium/Patent-Policy-20200915/>`__.
   W3C maintains a `public list of any patent
   disclosures <https://www.w3.org/groups/wg/css/ipr>`__ made in
   connection with the deliverables of the group; that page also
   includes instructions for disclosing a patent. An individual who has
   actual knowledge of a patent which the individual believes contains
   `Essential
   Claim(s) <https://www.w3.org/Consortium/Patent-Policy-20200915/#def-essential>`__
   must disclose the information in accordance with `section 6 of the
   W3C Patent
   Policy <https://www.w3.org/Consortium/Patent-Policy-20200915/#sec-Disclosure>`__.

.. container::

   The following features are at-risk, and may be dropped during the CR
   period:

   -  Equivalence of deprecated and un-deprecated system colors

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

#. `1 Introduction <#introduction>`__

   #. `1.1 Value Definitions <#values>`__

#. `2 Color Terminology <#terminology>`__
#. `3 Applying Color in CSS <#applying-color>`__

   #. `3.1 Accessibility and Conveying Information By Color <#accessibility>`__
   #. `3.2 Foreground Color: the color property <#the-color-property>`__
   #. `3.3 Transparency: the opacity property <#transparency>`__
   #. `3.4 Color Space of Tagged Images <#tagged-images>`__
   #. `3.5 Color Spaces of Untagged Colors <#untagged>`__

#. `4 Representing Colors: the <color> type <#color-type>`__

   #. `4.1 The <color> syntax <#color-syntax>`__

      #. `4.1.1 Modern (Space-separated) Color Function Syntax <#color-syntax-modern>`__
      #. `4.1.2 Legacy (Comma-separated) Color Function Syntax <#color-syntax-legacy>`__

   #. `4.2 Representing Transparency in Colors: the <alpha-value> syntax <#alpha-syntax>`__
   #. `4.3 Representing Cylindrical-coordinate Hues: the <hue> syntax <#hue-syntax>`__
   #. `4.4 “Missing” Color Components and the none Keyword <#missing>`__

      #. `4.4.1 “Powerless” Color Components <#powerless>`__

   #. `4.5 Parsing a <color> Value <#parse-color>`__

#. `5 sRGB Colors <#numeric-srgb>`__

   #. `5.1 The RGB functions: rgb() and rgba() <#rgb-functions>`__
   #. `5.2 The RGB Hexadecimal Notations: #RRGGBB <#hex-notation>`__

#. `6 Color Keywords <#color-keywords>`__

   #. `6.1 Named Colors <#named-colors>`__
   #. `6.2 System Colors <#css-system-colors>`__
   #. `6.3 The transparent keyword <#transparent-color>`__
   #. `6.4 The currentcolor keyword <#currentcolor-color>`__

#. `7 HSL Colors: hsl() and hsla() functions <#the-hsl-notation>`__

   #. `7.1 Converting HSL Colors to sRGB <#hsl-to-rgb>`__
   #. `7.2 Converting sRGB Colors to HSL <#rgb-to-hsl>`__
   #. `7.3 Examples of HSL Colors <#hsl-examples>`__

#. `8 HWB Colors: hwb() function <#the-hwb-notation>`__

   #. `8.1 Converting HWB Colors to sRGB <#hwb-to-rgb>`__
   #. `8.2 Converting sRGB Colors to HWB <#rgb-to-hwb>`__
   #. `8.3 Examples of HWB Colors <#hwb-examples>`__

#. `9 Device-independent Colors: CIE Lab and LCH, Oklab and Oklch <#lab-colors>`__

   #. `9.1 CIE Lab and LCH <#cie-lab>`__
   #. `9.2 Oklab and Oklch <#ok-lab>`__
   #. `9.3 Specifying Lab and LCH: the lab() and lch() functional notations <#specifying-lab-lch>`__
   #. `9.4 Specifying Oklab and Oklch: the oklab() and oklch() functional notations <#specifying-oklab-oklch>`__
   #. `9.5 Converting Lab or Oklab colors to LCH or Oklch colors <#lab-to-lch>`__
   #. `9.6 Converting LCH or Oklch colors to Lab or Oklab colors <#lch-to-lab>`__

#. `10 Predefined Color Spaces <#predefined>`__

   #. `10.1 Specifying Predefined Colors: the color() function <#color-function>`__
   #. `10.2 The Predefined sRGB Color Space: the sRGB keyword <#predefined-sRGB>`__
   #. `10.3 The Predefined Linear-light sRGB Color Space: the srgb-linear keyword <#predefined-sRGB-linear>`__
   #. `10.4 The Predefined Display P3 Color Space: the display-p3 keyword <#predefined-display-p3>`__
   #. `10.5 The Predefined A98 RGB Color Space: the a98-rgb keyword <#predefined-a98-rgb>`__
   #. `10.6 The Predefined ProPhoto RGB Color Space: the prophoto-rgb keyword <#predefined-prophoto-rgb>`__
   #. `10.7 The Predefined ITU-R BT.2020-2 Color Space: the rec2020 keyword <#predefined-rec2020>`__
   #. `10.8 The Predefined CIE XYZ Color Spaces: the xyz-d50, xyz-d65, and xyz keywords <#predefined-xyz>`__
   #. `10.9 Converting Predefined Color Spaces to Lab or Oklab <#predefined-to-lab-oklab>`__
   #. `10.10 Converting Lab or Oklab to Predefined RGB Color Spaces <#oklab-lab-to-predefined>`__
   #. `10.11 Converting Between Predefined RGB Color Spaces <#predefined-to-predefined>`__
   #. `10.12 Simple Alpha Compositing <#alpha>`__

#. `11 Converting Colors <#color-conversion>`__
#. `12 Color Interpolation <#interpolation>`__

   #. `12.1 Color Space for Interpolation <#interpolation-space>`__
   #. `12.2 Interpolating with Missing Components <#interpolation-missing>`__
   #. `12.3 Interpolating with Alpha <#interpolation-alpha>`__
   #. `12.4 Hue Interpolation <#hue-interpolation>`__

      #. `12.4.1 shorter <#hue-shorter>`__
      #. `12.4.2 longer <#hue-longer>`__
      #. `12.4.3 increasing <#hue-increasing>`__
      #. `12.4.4 decreasing <#hue-decreasing>`__

#. `13 Gamut Mapping  <#gamut-mapping>`__

   #. `13.1 An Introduction to Gamut Mapping <#gamut-mapping-intro>`__

      #. `13.1.1 Clipping <#GM-clip>`__
      #. `13.1.2 Closest Color (MINDE) <#GM-closest>`__
      #. `13.1.3 Chroma Reduction <#GM-chroma>`__
      #. `13.1.4 Excessive Chroma Reduction <#GM-excessive-reduction>`__
      #. `13.1.5 Chroma Reduction with Local Clipping <#GM-chroma-local-MINDE>`__
      #. `13.1.6 Deviations from Perceptual Uniformity: Hue Curvature <#GM-hue-curvature>`__

   #. `13.2 CSS Gamut Mapping to an RGB Destination <#css-gamut-mapping>`__

      #. `13.2.1 Sample Pseudocode for the Binary Search Gamut Mapping Algorithm with Local MINDE <#binsearch>`__

#. `14 Resolving <color> Values <#resolving-color-values>`__

   #. `14.1 Resolving sRGB values <#resolving-sRGB-values>`__
   #. `14.2 Resolving Lab and LCH values <#resolving-lab-lch-values>`__
   #. `14.3 Resolving Oklab and Oklch values <#resolving-oklab-oklch-values>`__
   #. `14.4 Resolving values of the color() function <#resolving-color-function-values>`__
   #. `14.5 Resolving other colors <#resolving-other-colors>`__

#. `15 Serializing <color> Values <#serializing-color-values>`__

   #. `15.1 Serializing alpha values <#serializing-alpha-values>`__
   #. `15.2 Serializing sRGB values <#serializing-sRGB-values>`__
   #. `15.3 Serializing Lab and LCH values <#serializing-lab-lch>`__
   #. `15.4 Serializing Oklab and Oklch values <#serializing-oklab-oklch>`__
   #. `15.5 Serializing values of the color() function <#serializing-color-function-values>`__
   #. `15.6 Serializing other colors <#serializing-other-colors>`__

#. `16 Default Style Rules <#sample>`__
#. `17 Sample code for Color Conversions <#color-conversion-code>`__
#. `18 Sample Code for ΔE2000 and ΔEOK Color Differences <#color-difference-code>`__

   #. `18.1 ΔE2000 <#color-difference-2000>`__
   #. `18.2 ΔEOK <#color-difference-OK>`__

#.  ` Appendix A: Deprecated CSS System Colors <#deprecated-system-colors>`__
#.  ` Appendix B: Deprecated Quirky Hex Colors <#quirky-color>`__
#.  ` Acknowledgments <#acknowledgments>`__
#.  ` Changes <#changes>`__

   #.  `Changes since the Candidate Recommendation Draft of 1 November 2022  <#changes-from-20221101>`__
   #.  `Changes since the Candidate Recommendation of 5 July 2022 <#changes-from-20220705>`__
   #.  `Changes since the Working Draft of 28 June 2022 <#changes-from-20220628>`__
   #.  `Changes since the Working Draft of 28 April 2022 <#changes-from-20220428>`__
   #.  `Changes since the Working Draft of 15 December 2021 <#changes-from-20211215>`__
   #.  `Changes since the Working Draft of 1 June 2021 <#changes-from-20210601>`__
   #.  `Changes since the Working Draft of 12 November 2020 <#changes-from-20201112>`__
   #.  `Changes since Working Draft of 5 November 2019 <#changes-from-20191105>`__
   #.  `Changes since Working Draft of 05 July 2016 <#changes-from-20160705>`__
   #.  ` Changes from Colors 3 <#changes-from-3>`__

#. `19 Security Considerations <#security>`__
#. `20 Privacy Considerations <#privacy>`__
#. `21 Accessibility Considerations <#a11y-sec>`__
#.  ` Conformance <#w3c-conformance>`__

   #.  ` Document conventions <#w3c-conventions>`__
   #.  ` Conformance classes <#w3c-conformance-classes>`__
   #.  ` Partial implementations <#w3c-partial>`__

      #.  ` Implementations of Unstable and Proprietary Features <#w3c-conform-future-proofing>`__

   #.  ` Non-experimental implementations <#w3c-testing>`__
   #.  ` CR exit criteria <#w3c-cr-exit-criteria>`__

#.  `Index <#index>`__

   #.  `Terms defined by this specification <#index-defined-here>`__
   #.  `Terms defined by reference <#index-defined-elsewhere>`__

#.  `References <#references>`__

   #.  `Normative References <#normative>`__
   #.  `Informative References <#informative>`__

#.  `Property Index <#property-index>`__

.. container::

/1. Introduction
----------------

   .. .. rubric:: 1. Introduction\ ` <#introduction>`__
      :name: introduction
      :class: heading settled

   *This section is not normative.*

   Tests
   This section is not normative, it does not need tests.

   --------------

   This module describes CSS properties which allow authors to specify
   the foreground color and opacity of the text content of an element.
   This module also describes in detail the CSS
   `<color> <#typedef-color>`__ value type.

   It not only defines the color-related properties and values that
   already exist in `CSS1 <https://www.w3.org/TR/CSS1>`__,
   `CSS2 <https://www.w3.org/TR/CSS2/>`__, and `CSS Color
   3 <https://www.w3.org/TR/css-color-3/>`__, but also defines new
   properties and values.

   In particular, it allows specifying colors in other `color
   spaces <#color-space>`__ than sRGB; previously, the more saturated
   colors outside the sRGB gamut could not be used in CSS even if the
   display device supported them.

   A `draft implementation
   report <https://drafts.csswg.org/css-color-4/test-coverage>`__ is
   available.

/1.1. Value Definitions
-----------------------

   .. .. rubric:: 1.1. Value Definitions\ ` <#values>`__
      :name: values
      :class: heading settled

   This specification follows the `CSS property definition
   conventions <https://www.w3.org/TR/CSS2/about.html#property-defs>`__
   from `[CSS2] <#biblio-css2>`__ using the `value definition
   syntax <https://www.w3.org/TR/css-values-3/#value-defs>`__ from
   `[CSS-VALUES-3] <#biblio-css-values-3>`__. Value types not defined in
   this specification are defined in CSS Values & Units [CSS-VALUES-3].
   Combination with other CSS modules may expand the definitions of
   these value types.

   In addition to the property-specific values listed in their
   definitions, all properties defined in this specification also accept
   the `CSS-wide
   keywords <https://www.w3.org/TR/css-values-4/#css-wide-keywords>`__
   as their property value. For readability they have not been repeated
   explicitly.

/2. Color Terminology
---------------------

   .. .. rubric:: 2. Color Terminology\ ` <#terminology>`__
      :name: terminology
      :class: heading settled

   Tests
   This section provides definitions used later, it does not need tests.

   --------------

   A color is a definition (numeric or textual) of the human visual
   perception of a light or a physical object illuminated with light.
   The objective study of human color perception is termed colorimetry.

   The color of a physical object depends on how much light it reflects
   at each visible wavelength, plus the actual color of the light
   illuminating it (again, the amount of light at each wavelength). It
   is measured by a *spectrophotometer* .

   The color of something that emits light (including colors on a
   computer screen) depends on how much light it emits at each visible
   wavelength. It is measured by a *spectroradiometer*.

   If two objects have different spectra, but still produce the same
   physical sensation, we say they have the same color. We can calculate
   whether two colors are the same by converting the spectra to CIE XYZ
   (three numbers).

   .. container:: example
      :name: ex-cal-leaf

      ` <#ex-cal-leaf>`__\ For example a green leaf, a photograph of
      that leaf displayed on a computer screen, and a print of that
      photograph, are all producing a green sensation by different
      means. If the screen and the printer are
      `calibrated <#calibrated>`__, the green in the leaf, and the
      photo, and the print will look the same.

   A color space is an organization of colors with respect to an
   underlying colorimetric model, such that there is a clear,
   objectively-measurable meaning for any color in that color space.
   This also means that the same color can be expressed in multiple
   color spaces, or transformed from one color space to another, while
   still looking the same.

   .. container:: example
      :name: ex-leaf-spectro

      ` <#ex-leaf-spectro>`__
      A leaf is measured with a spectrophotometer and found to have the
      color lch(51.2345% 21.2 130) which is lab(51.2345% -13.6271
      16.2401).

      This same color could be expressed in various color spaces:

      .. code:: lang-css

          color(sRGB 0.41587 0.503670 0.36664);
          color(display-p3 0.43313 0.50108 0.37950);
          color(a98-rgb 0.44091 0.49971 0.37408);
          color(prophoto-rgb 0.36589 0.41717 0.31333);
          color(rec2020 0.42210 0.47580 0.35605);

   An additive color space means that the coordinate system is linear in
   light intensity. The CIE XYZ color space is an additive color space
   (in addition, the Y component of XYZ is the luminance).

   In an additive color space, calculations can be done to accurately
   predict color mixing. Most RGB spaces are not additive, because the
   components are *gamma encoded*. Undoing this gamma encoding produces
   linear-light values.

   .. container:: example
      :name: ex-additivity

      ` <#ex-additivity>`__ For example, if a light fixture contains two
      identical colored lights, and only one is switched on, and the
      color is measured to be color(xyz 0.13 0.12 0.04), then the color
      when both are switched on will be exactly twice that, color(xyz
      0.26 0.24 0.08).
      If we have two differently colored spotlights shining on a stage,
      and one has the measured value color(xyz 0.15 0.24 0.17) while the
      other is color(xyz 0.11 0.06 0.06) then we can accurately predict
      that if the colored beams are made to overlap, the color of the
      mixture will be the sum of the XYZ component values, or color(xyz
      0.26 0.30 0.23).

   A chromaticity is a color measurement where the lightness component
   has been factored out. From the identical lights example above, the
   *u',v'* chromaticity with one light is (0.2537, 0.5268) and the
   chromaticity is the same with both lights (they are the same color,
   it is just brighter).

   Chromaticities are additive, so they accurately predict the
   chromaticity (but not the resulting lightness) of a mixture. Being
   two-dimensional, chromaticity is easily represented on a
   *chromaticity diagram* to predict the chromaticity of a color
   mixture. Any two colors can be mixed, and the resulting colors will
   lie on the line joining them on the diagram. Three colors form a
   plane, and the resulting colors will lie in the triangle they form on
   the diagram.

   .. figure:: images/UCS-display-p3.svg
      :alt: uv chromaticity diagram of the display-p3 color space
      :width: 500px
      :height: 464px

      A chromaticity diagram showing (in solid colors) the
      `display-p3 <#valdef-color-display-p3>`__ color space and for
      comparison (faded) the `sRGB <#valdef-color-srgb>`__ color space.
      The white point (D65) is also shown.

   RGB color spaces are additive, and their gamut is defined by the
   chromaticities of the red, green and blue primaries, plus the
   chromaticity of the white point (the color formed by all three
   primaries at full intensity).

   Most color spaces use one of a few daylight-simulating `white
   points <#white-point>`__, which are named by the color temperature of
   the corresponding black-body radiator. For example,
   `D65 <#d65-whitepoint>`__ is a daylight whitepoint corresponding to a
   correlated color temperature of 6500 Kelvin (actually 6504, because
   the value of Plank’s constant has changed since the color was
   originally defined).

   To avoid cumulative round-trip errors, it is important that the
   identical chromaticity values are used consistently, at all places in
   a calculation. Thus, for maximum compatibility, for this
   specification, the following two standard daylight-simulating `white
   points <#white-point>`__ are defined:

   Name 
   x
   y
   CCT
   D50
   0.345700
   0.358500
   5003K
   D65
   0.312700
   0.329000
   6504K
   When the measured physical characteristics (such as the
   chromaticities of the primary colors it uses, or the colors produced
   in response to a given set of inputs) of a `color
   space <#color-space>`__ or a color-producing device are known, it is
   said to be characterized.

   If in addition adjustments have been made so that a device meets
   calibration targets such as white point, neutrality of greys,
   predictability and consistency of tone response, then it is said to
   be calibrated.

   Real physical devices cannot yet produce every possible color that
   the human eye can see. The range of colors that a given device can
   produce is termed the gamut *(not to be confused with gamma)*.
   Devices with a limited gamut cannot produce very saturated colors,
   like those found in a rainbow.

   The gamuts of different `color space <#color-space>`__\ s may be
   compared by looking at the volume (in cubic Lab units) of colors that
   can be expressed. The following table examines the
   `predefined <#predefined>`__ color spaces available in CSS.

   color space
   Volume (million Lab units)
   sRGB
   0.820
   display-p3
   1.233
   a98-rgb
   1.310
   prophoto-rgb
   2.896
   rec2020
   2.042
   A color in CSS is either an invalid color, as described below for
   each syntactic form, or a `valid color <#valid-color>`__.

   Any color which is not an `invalid color <#invalid-color>`__ is a
   valid color.

   A color may be a `valid color <#valid-color>`__ but still be outside
   the range of colors that can be produced by an output device (a
   screen, projector, or printer)

   It is said to be out of gamut.

   Each `valid color <#valid-color>`__ is either in-gamut for a
   particular output device (screen, or printer) or it is `out of
   gamut <#out-of-gamut>`__.

   .. container:: example
      :name: ex-oog

      ` <#ex-oog>`__ For example, given a screen which covers 100% of
      the display-p3 color space, but no more, the following color is
      out of gamut:
      .. code:: highlight

          color(prophoto-rgb 0.88 0.45 0.10)

      because, expressed in display-p3, one or more coordinates are
      either greater that 1.0 or less than 0.0:

      .. code:: highlight

          color(display-p3 1.0844 0.43 0.1)

      This color is valid, and could, for example, be used as a gradient
      stop, but would need to be `CSS gamut
      mapped <#css-gamut-mapped>`__ for display, producing a
      similar-looking but lower chroma (less saturated) color.

/3. Applying Color in CSS
-------------------------

   .. .. rubric:: 3. Applying Color in CSS\ ` <#applying-color>`__
      :name: applying-color
      :class: heading settled

/3.1. Accessibility and Conveying Information By
------------------------------------------------

   .. .. rubric:: 3.1. Accessibility and Conveying Information By
      Color\ ` <#accessibility>`__
      :name: accessibility
      :class: heading settled

   Tests
   This section provides authoring guidance, it does not need tests.

   --------------

   Although colors can add significant information to documents and make
   them more readable, color by itself should not be the sole means to
   convey important information. Authors should consider the W3C Web
   Content Accessibility Guidelines `[WCAG21] <#biblio-wcag21>`__ when
   using color in their documents.

      `1.4.1 Use of Color: Color is not used as the only visual means of
      conveying information, indicating an action, prompting a response,
      or distinguishing a visual
      element <https://www.w3.org/TR/WCAG21/#use-of-color>`__

/3.2. Foreground Color: the `color`
-----------------------------------

   .. .. rubric:: 3.2. Foreground Color: the `color <#propdef-color>`__
      property\ ` <#the-color-property>`__
      :name: the-color-property
      :class: heading settled

   Name:
   color
   `Value: <https://www.w3.org/TR/css-values/#value-defs>`__
   `<color> <#typedef-color>`__
   `Initial: <https://www.w3.org/TR/css-cascade/#initial-values>`__
   CanvasText
   `Applies to: <https://www.w3.org/TR/css-cascade/#applies-to>`__
   all elements and text
   `Inherited: <https://www.w3.org/TR/css-cascade/#inherited-property>`__
   yes
   `Percentages: <https://www.w3.org/TR/css-values/#percentages>`__
   N/A
   `Computed value: <https://www.w3.org/TR/css-cascade/#computed>`__
   computed color, see `resolving color
   values <#resolving-color-values>`__
   `Canonical
   order: <https://www.w3.org/TR/cssom/#serializing-css-values>`__
   per grammar
   `Animation
   type: <https://www.w3.org/TR/web-animations/#animation-type>`__
   by computed value type
   Tests

   -  `color-001.html <https://wpt.fyi/results/css/css-color/color-001.html>`__
      `(live test) <http://wpt.live/css/css-color/color-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/color-001.html>`__
   -  `color-002.html <https://wpt.fyi/results/css/css-color/color-002.html>`__
      `(live test) <http://wpt.live/css/css-color/color-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/color-002.html>`__
   -  `color-003.html <https://wpt.fyi/results/css/css-color/color-003.html>`__
      `(live test) <http://wpt.live/css/css-color/color-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/color-003.html>`__
   -  `inheritance.html <https://wpt.fyi/results/css/css-color/inheritance.html>`__
      `(live test) <http://wpt.live/css/css-color/inheritance.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/inheritance.html>`__
   -  `color-interpolation.html <https://wpt.fyi/results/css/css-color/animation/color-interpolation.html>`__
      `(live
      test) <http://wpt.live/css/css-color/animation/color-interpolation.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/animation/color-interpolation.html>`__
   -  `color-initial-canvastext.html <https://wpt.fyi/results/css/css-color/color-initial-canvastext.html>`__
      `(live
      test) <http://wpt.live/css/css-color/color-initial-canvastext.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/color-initial-canvastext.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__
   -  `color-invalid.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid.html>`__

   This property specifies the primary foreground color of the element.
   This is used as the fill color of its text content, and in addition
   specifies the `used
   value <https://www.w3.org/TR/css-cascade-5/#used-value>`__ that
   currentcolor resolves to, which allows indirect references to this
   foreground color and affects the initial values of various other
   color properties such as
   `border-color <https://drafts.csswg.org/css-borders-4/#propdef-border-color>`__
   and
   `text-emphasis-color <https://www.w3.org/TR/css-text-decor-4/#propdef-text-emphasis-color>`__.

   `<color> <#typedef-color>`__
      Sets the primary foreground color to the specified
      `<color> <#typedef-color>`__.

   .. container:: example
      :name: ex-lime

      ` <#ex-lime>`__ The `<color> <#typedef-color>`__ type provides
      multiple ways to syntactically specify a given color. For example,
      the following declarations all specify the sRGB color “lime”:
      .. code:: lang-css

         em { color:  lime; }   /* color keyword  */
         em { color:  rgb(0 255 0); } /* RGB range 0-255   */
         em { color:  rgb(0% 100% 0%); } /* RGB range 0%-100% */
         em { color:  color(sRGB 0 1 0); } /* sRGB range 0.0-1.0 */

   When applied to text, this property, including its alpha component,
   has no effect on “color glyphs” (such as the emoji in some fonts),
   which are colored by a built-in palette. However, some colored fonts
   are able to refer to a contextual “foreground color”, such as by
   palette entry 0xFFFF in the ``COLR`` table of OpenType, or by the
   context-fill value in SVG-in-OpenType. In such cases, the foreground
   color is set by this property, identical to how it sets the
   `currentcolor <#valdef-color-currentcolor>`__ value.

/3.3. Transparency: the `opacity`
---------------------------------

   .. .. rubric:: 3.3. Transparency: the `opacity <#propdef-opacity>`__
      property\ ` <#transparency>`__
      :name: transparency
      :class: heading settled

   Opacity can be thought of as a postprocessing operation.
   Conceptually, after the element (including its descendants) is
   rendered into an RGBA offscreen image, the opacity setting specifies
   how to blend the offscreen rendering into the current composite
   rendering. See `simple alpha compositing <#alpha>`__ for details.

   Name:
   opacity
   `Value: <https://www.w3.org/TR/css-values/#value-defs>`__
   `<opacity-value> <#typedef-opacity-opacity-value>`__
   `Initial: <https://www.w3.org/TR/css-cascade/#initial-values>`__
   1
   `Applies to: <https://www.w3.org/TR/css-cascade/#applies-to>`__
   `all
   elements <https://www.w3.org/TR/css-pseudo/#generated-content>`__
   `Inherited: <https://www.w3.org/TR/css-cascade/#inherited-property>`__
   no
   `Percentages: <https://www.w3.org/TR/css-values/#percentages>`__
   map to the range [0,1]
   `Computed value: <https://www.w3.org/TR/css-cascade/#computed>`__
   specified number, clamped to the range [0,1]
   `Canonical
   order: <https://www.w3.org/TR/cssom/#serializing-css-values>`__
   per grammar
   `Animation
   type: <https://www.w3.org/TR/web-animations/#animation-type>`__
   by computed value type
   Tests

   -  `t32-opacity-basic-0.0-a.xht <https://wpt.fyi/results/css/css-color/t32-opacity-basic-0.0-a.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-basic-0.0-a.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-basic-0.0-a.xht>`__
   -  `t32-opacity-basic-0.6-a.xht <https://wpt.fyi/results/css/css-color/t32-opacity-basic-0.6-a.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-basic-0.6-a.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-basic-0.6-a.xht>`__
   -  `t32-opacity-basic-1.0-a.xht <https://wpt.fyi/results/css/css-color/t32-opacity-basic-1.0-a.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-basic-1.0-a.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-basic-1.0-a.xht>`__
   -  `t32-opacity-clamping-0.0-b.xht <https://wpt.fyi/results/css/css-color/t32-opacity-clamping-0.0-b.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-clamping-0.0-b.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-clamping-0.0-b.xht>`__
   -  `t32-opacity-clamping-1.0-b.xht <https://wpt.fyi/results/css/css-color/t32-opacity-clamping-1.0-b.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-clamping-1.0-b.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-clamping-1.0-b.xht>`__
   -  `t32-opacity-offscreen-b.xht <https://wpt.fyi/results/css/css-color/t32-opacity-offscreen-b.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-offscreen-b.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-offscreen-b.xht>`__
   -  `t32-opacity-offscreen-multiple-boxes-1-c.xht <https://wpt.fyi/results/css/css-color/t32-opacity-offscreen-multiple-boxes-1-c.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-offscreen-multiple-boxes-1-c.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-offscreen-multiple-boxes-1-c.xht>`__
   -  `t32-opacity-offscreen-multiple-boxes-2-c.xht <https://wpt.fyi/results/css/css-color/t32-opacity-offscreen-multiple-boxes-2-c.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-offscreen-multiple-boxes-2-c.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-offscreen-multiple-boxes-2-c.xht>`__
   -  `t32-opacity-offscreen-with-alpha-c.xht <https://wpt.fyi/results/css/css-color/t32-opacity-offscreen-with-alpha-c.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-offscreen-with-alpha-c.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-offscreen-with-alpha-c.xht>`__
   -  `t32-opacity-zorder-c.xht <https://wpt.fyi/results/css/css-color/t32-opacity-zorder-c.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t32-opacity-zorder-c.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t32-opacity-zorder-c.xht>`__
   -  `opacity-computed.html <https://wpt.fyi/results/css/css-color/parsing/opacity-computed.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/opacity-computed.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/opacity-computed.html>`__
   -  `opacity-valid.html <https://wpt.fyi/results/css/css-color/parsing/opacity-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/opacity-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/opacity-valid.html>`__
   -  `opacity-invalid.html <https://wpt.fyi/results/css/css-color/parsing/opacity-invalid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/opacity-invalid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/opacity-invalid.html>`__
   -  `composited-filters-under-opacity.html <https://wpt.fyi/results/css/css-color/composited-filters-under-opacity.html>`__
      `(live
      test) <http://wpt.live/css/css-color/composited-filters-under-opacity.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/composited-filters-under-opacity.html>`__
   -  `filters-under-will-change-opacity.html <https://wpt.fyi/results/css/css-color/filters-under-will-change-opacity.html>`__
      `(live
      test) <http://wpt.live/css/css-color/filters-under-will-change-opacity.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/filters-under-will-change-opacity.html>`__
   -  `color-composition.html <https://wpt.fyi/results/css/css-color/animation/color-composition.html>`__
      `(live
      test) <http://wpt.live/css/css-color/animation/color-composition.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/animation/color-composition.html>`__
   -  `opacity-interpolation.html <https://wpt.fyi/results/css/css-color/animation/opacity-interpolation.html>`__
      `(live
      test) <http://wpt.live/css/css-color/animation/opacity-interpolation.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/animation/opacity-interpolation.html>`__
   -  `canvas-change-opacity.html <https://wpt.fyi/results/css/css-color/canvas-change-opacity.html>`__
      `(live
      test) <http://wpt.live/css/css-color/canvas-change-opacity.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/canvas-change-opacity.html>`__
   -  `opacity-animation-ending-correctly-001.html <https://wpt.fyi/results/css/css-color/animation/opacity-animation-ending-correctly-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/animation/opacity-animation-ending-correctly-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/animation/opacity-animation-ending-correctly-001.html>`__
   -  `opacity-animation-ending-correctly-002.html <https://wpt.fyi/results/css/css-color/animation/opacity-animation-ending-correctly-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/animation/opacity-animation-ending-correctly-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/animation/opacity-animation-ending-correctly-002.html>`__

   `<opacity-value> <#typedef-opacity-opacity-value>`__
      The opacity to be applied to the element. The resulting opacity is
      applied to the entire element, rather than a particular color.

      Opacity values outside the range [0,1] are not invalid, and are
      preserved in specified values, but are clamped to the range [0, 1]
      in computed values.

   Tests

   -  `inline-opacity-float-child.html <https://wpt.fyi/results/css/css-color/inline-opacity-float-child.html>`__
      `(live
      test) <http://wpt.live/css/css-color/inline-opacity-float-child.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/inline-opacity-float-child.html>`__

   Opacity in CSS is represented using the
   `<opacity-value> <#typedef-opacity-opacity-value>`__ syntax, for
   example in the `opacity <#propdef-opacity>`__ property. Represented
   as a `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__,
   the useful range of the value is 0 (representing full transparency)
   to 1 (representing full opacity). It can also be written as a
   `<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__,
   which `computes
   to <https://www.w3.org/TR/css-cascade-5/#computed-value>`__ the
   equivalent <number> (0% to 0, 100% to 1).

   The `opacity <#propdef-opacity>`__ property applies the specified
   opacity to the element *as a whole*, including its contents, rather
   than applying it to each descendant individually. This means that,
   for example, an opaque child occluding part of the element’s
   background will continue to do so even when opacity is less than 1,
   but the element and child as a whole will show the underlying page
   through themselves.

   It also means that the glyphs corresponding to all characters in the
   element are treated *as a whole*; any overlapping portions do not
   increase the opacity.

   Tests

   -  `opacity-overlapping-letters.html <https://wpt.fyi/results/css/css-color/opacity-overlapping-letters.html>`__
      `(live
      test) <http://wpt.live/css/css-color/opacity-overlapping-letters.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/opacity-overlapping-letters.html>`__

   .. figure:: images/joining-and-transparency.svg
      name: arabic-opacity-rendering
      :alt: overlapping glyphs rendered correctly, and incorrectly
      :width: 713px
      :height: 156px

      Correct and incorrect rendering of text with an
      `opacity <#propdef-opacity>`__ value of less than one, whose
      glyphs overlap.

   If separate opacity for each glyph is desired, it can be achieved by
   using a color value which includes alpha, rather than setting the
   `opacity <#propdef-opacity>`__ property.

   If a box has `opacity <#propdef-opacity>`__ less than 1, it forms a
   `stacking
   context <https://drafts.csswg.org/css2/#stacking-context>`__ for its
   children. (This prevents its contents from interleaving in the z-axis
   with content outside it.)

   Tests

   -  `body-opacity-0-to-1-stacking-context.html <https://wpt.fyi/results/css/css-color/body-opacity-0-to-1-stacking-context.html>`__
      `(live
      test) <http://wpt.live/css/css-color/body-opacity-0-to-1-stacking-context.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/body-opacity-0-to-1-stacking-context.html>`__

   Furthermore, if the
   `z-index <https://www.w3.org/TR/CSS21/visuren.html#propdef-z-index>`__
   property applies to the box, the
   `auto <https://drafts.csswg.org/css2/#valdef-z-index-auto>`__ value
   is treated as 0 for the element; it is otherwise painted on the same
   layer within its parent stacking context as positioned elements with
   stack level 0 (as if it were a positioned element with z-index:0).

   See `section 9.9 <https://www.w3.org/TR/CSS21/visuren.html#layers>`__
   and `Appendix E <https://www.w3.org/TR/CSS21/zindex.html>`__ of
   `[CSS2] <#biblio-css2>`__ for more information on stacking contexts.

   These rules about z-order do not apply to SVG elements, since SVG has
   its own `rendering model <https://www.w3.org/TR/SVG11/render.html>`__
   (`[SVG11] <#biblio-svg11>`__, Chapter 3).

/3.4. Color Space of Tagged Images
----------------------------------

   .. .. rubric:: 3.4. Color Space of Tagged Images\ ` <#tagged-images>`__
      :name: tagged-images
      :class: heading settled

   An tagged image is an image that is explicitly assigned a color
   profile, as defined by the image format. This is usually done by
   including an International Color Consortium (ICC) profile
   `[ICC] <#biblio-icc>`__.

   For example JPEG `[JPEG] <#biblio-jpeg>`__, PNG
   `[PNG] <#biblio-png>`__ and TIFF `[TIFF] <#biblio-tiff>`__ all
   specify a means to embed an ICC profile.

   Image formats may also use other, equivalent methods, often for
   brevity.

   For example, PNG specifies a means (the `sRGB
   chunk <https://www.w3.org/TR/PNG/#11sRGB>`__) to explicitly tag an
   image as being in the sRGB color space, without including the sRGB
   ICC profile.

   Similarly, PNG specifies a compact means (the `cICP
   chunk <https://www.w3.org/TR/png-3/#cICP-chunk>`__) to explicitly tag
   an image as being one of various SDR or HDR color spaces, such as
   Display P3 or BT.2100 HLG, without including an ICC profile.

   Tagged RGB images, and tagged images using a transformation of RGB
   such as YCbCr, if the color profile or other identifying information
   is valid, must be treated as being in the specified color space.

   Tests

   -  `tagged-images-001.html <https://wpt.fyi/results/css/css-color/tagged-images-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/tagged-images-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/tagged-images-001.html>`__
   -  `tagged-images-002.html <https://wpt.fyi/results/css/css-color/tagged-images-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/tagged-images-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/tagged-images-002.html>`__
   -  `tagged-images-003.html <https://wpt.fyi/results/css/css-color/tagged-images-003.html>`__
      `(live
      test) <http://wpt.live/css/css-color/tagged-images-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/tagged-images-003.html>`__
   -  `tagged-images-004.html <https://wpt.fyi/results/css/css-color/tagged-images-004.html>`__
      `(live
      test) <http://wpt.live/css/css-color/tagged-images-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/tagged-images-004.html>`__

   -  `cicp-chunk.html <https://wpt.fyi/results/png/cicp-chunk.html>`__
      `(live test) <http://wpt.live/png/cicp-chunk.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/png/cicp-chunk.html>`__
   -  `fDAT-inherits-cICP.html <https://wpt.fyi/results/png/apng/fDAT-inherits-cICP.html>`__
      `(live test) <http://wpt.live/png/apng/fDAT-inherits-cICP.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/png/apng/fDAT-inherits-cICP.html>`__

   If the color profile or other identifying information is invalid, the
   image is treated as `untagged images <#untagged-image>`__

   For example, when a browser running on a system with a Display P3
   monitor displays an JPEG image tagged as being in the ITU Rec BT.2020
   `[Rec.2020] <#biblio-rec2020>`__ color space, it must convert the
   colors from ITU Rec BT.2020 to Display P3 so that they display
   correctly. It must not treat the ITU Rec BT.2020 values as if they
   were Display P3 values, which would produce incorrect colors.

/3.5. Color Spaces of Untagged Colors
-------------------------------------

   .. .. rubric:: 3.5. Color Spaces of Untagged Colors\ ` <#untagged>`__
      :name: untagged
      :class: heading settled

   Colors specified in HTML, and `untagged images <#untagged-image>`__
   must be treated as being in the sRGB color space
   (`[SRGB] <#biblio-srgb>`__) unless otherwise specified.

   Tests

   -  `untagged-images-001.html <https://wpt.fyi/results/css/css-color/untagged-images-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/untagged-images-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/untagged-images-001.html>`__

   An untagged image is an image that is not explicitly assigned a color
   profile, as defined by the image format.

   Note that this rule does not apply to untagged videos, since untagged
   video should be presumed to be in an ITU-defined color space.

   -  At below 720p, it is Recommendation ITU-R BT.601
      `[ITU-R-BT.601] <#biblio-itu-r-bt601>`__

   -  At 720p, it is SMPTE ST 296 (same colorimetry as 709)
      `[SMPTE296] <#biblio-smpte296>`__

   -  At 1080p, it is Recommendation ITU-R BT.709
      `[ITU-R-BT.709] <#biblio-itu-r-bt709>`__

   -  At 4k (UHDTV) and above, it is ITU-R BT.2020
      `[Rec.2020] <#biblio-rec2020>`__ for SDR video

/4. Representing Colors: the `<color>`
--------------------------------------

   .. .. rubric:: 4. Representing Colors: the `<color> <#typedef-color>`__
      type\ ` <#color-type>`__
      :name: color-type
      :class: heading settled

   Tests
   This section describes a type, it is primarily tested where that type
   is used.

   --------------

   Colors in CSS are represented as a list of color components, also
   sometimes called “channels”, representing axises in the color space.
   Each channel has a minimum and maximum value, and can take any value
   between those two. Additionally, every color is accompanied by an
   alpha component, indicating how transparent it is, and thus how much
   of the backdrop one can see through the color.

   CSS has several syntaxes for specifying color values:

   -  the sRGB `hex color notation <#hex-color>`__ which represents the
      RGB and alpha channels in hexadecimal notation

   -  the various `color functions <#color-functions>`__ which can
      represent colors using a variety of color spaces and coordinate
      systems

   -  the constant `named color <#named-color>`__ keywords

   -  the variable `<system-color> <#typedef-system-color>`__ keywords
      and `currentColor <#valdef-color-currentcolor>`__ keyword.

   The color functions use CSS `functional
   notation <https://www.w3.org/TR/css-values-4/#functional-notation>`__
   to represent colors in a variety of `color spaces <#color-space>`__
   by specifying their channel coordinates. Some of these use a
   cylindrical polar color model, specifying color by a
   `<hue> <#typedef-hue>`__ angle, a central axis representing lightness
   (black-to-white), and a radius representing saturation or chroma (how
   far the color is from a neutral grey). The others use a rectangular
   orthogonal color model, specifying color using three orthogonal
   component axes.

   The `color functions <#color-functions>`__ available in Level 4 are

   -  `rgb() <#funcdef-rgb>`__ and its `rgba() <#funcdef-rgba>`__ alias,
      which (like the `hex color notation <#hex-color>`__) specify sRGB
      colors directly by their red/green/blue/alpha channels.

   -  `hsl() <#funcdef-hsl>`__ and its `hsla() <#funcdef-hsla>`__ alias,
      which specify sRGB colors by hue, saturation, and lightness using
      the `HSL <#the-hsl-notation>`__ cylindrical coordinate model.

   -  `hwb() <#funcdef-hwb>`__, which specifies an sRGB color by hue,
      whiteness, and blackness using the `HWB <#the-hwb-notation>`__
      cylindrical coordinate model.

   -  `lab() <#funcdef-lab>`__, which specifies a CIELAB color by CIE
      Lightness and its a- and b-axis hue coordinates (red/green-ness,
      and yellow/blue-ness) using the `CIE LAB rectangular coordinate
      model <#cie-lab>`__.

   -  `lch() <#funcdef-lch>`__ , which specifies a CIELAB color by CIE
      Lightness, Chroma, and hue using the `CIE LCH cylindrical
      coordinate model <#cie-lab>`__

   -  `oklab() <#funcdef-oklab>`__, which specifies an Oklab color by
      Oklab Lightness and its a- and b-axis hue coordinates
      (red/green-ness, and yellow/blue-ness) using the
      `Oklab <#ok-lab>`__ rectangular coordinate model.

   -  `oklch() <#funcdef-oklch>`__ , which specifies an Oklab color by
      Oklab Lightness, Chroma, and hue using the `Oklch <#ok-lab>`__
      cylindrical coordinate model.

   -  `color() <#funcdef-color>`__, which allows specifying colors in a
      variety of color spaces including `sRGB <#predefined-sRGB>`__,
      `Linear-light sRGB <#predefined-sRGB-linear>`__, `Display
      P3 <#predefined-display-p3>`__, `A98 RGB <#predefined-a98-rgb>`__,
      `ProPhoto RGB <#predefined-prophoto-rgb>`__, `ITU-R
      BT.2020-2 <#predefined-rec2020>`__, and `CIE
      XYZ <#predefined-xyz>`__.

   For easy reference in other specifications, opaque black is defined
   as the color rgb(0 0 0 / 100%); transparent black is the same color,
   but fully transparent—​i.e. rgb(0 0 0 / 0%).

   Tests

   -  `color-computed-named-color.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-named-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-named-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-named-color.html>`__
   -  `color-computed.html <https://wpt.fyi/results/css/css-color/parsing/color-computed.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

/4.1. The `<color>`
-------------------

   .. .. rubric:: 4.1. The `<color> <#typedef-color>`__
      syntax\ ` <#color-syntax>`__
      :name: color-syntax
      :class: heading settled

   Tests
   This section provides definitions used later, it does not need tests.

   --------------

   Colors in CSS are represented by the `<color> <#typedef-color>`__
   type:

   .. code:: prod

      <color> = <color-base> | currentColor | <system-color> 

      <color-base> = <hex-color> | <color-function> | <named-color> | transparent
      <color-function> = <rgb()> | <rgba()> |
                    <hsl()> | <hsla()> | <hwb()> |
                    <lab()> | <lch()> | <oklab()> | <oklch()> |
                    <color()>

   An absolute color is a `<color> <#typedef-color>`__ whose computed
   value has an absolute, colorimetric interpretation. This means that
   the value is not:

   -  `currentColor <#valdef-color-currentcolor>`__ (which depends on
      the value of the `color <#propdef-color>`__ property)

   -  a `<system-color> <#typedef-system-color>`__ (which depends on the
      color mode)

   The `<hsl()> <#funcdef-hsl>`__, `<hsla()> <#funcdef-hsla>`__,
   `<hwb()> <#funcdef-hwb>`__, `<lch()> <#funcdef-lch>`__, and
   `<oklch()> <#funcdef-oklch>`__ `color functions <#color-functions>`__
   are `cylindrical polar color <#cylindrical-polar-color>`__
   representations using a `<hue> <#typedef-hue>`__ angle; the other
   color functions use `rectangular orthogonal
   color <#rectangular-orthogonal-color>`__ representations.

/4.1.1. Modern (Space-separated) Color Function
-----------------------------------------------

   .. .. rubric:: 4.1.1. Modern (Space-separated) Color Function
      Syntax\ ` <#color-syntax-modern>`__
      :name: color-syntax-modern
      :class: heading settled

   All of the
   `<absolute-color-function> <https://www.w3.org/TR/css-color-4/#typedef-absolute-color-function>`__
   syntactic forms defined in this specification use the modern color
   syntax, meaning:

   -  color components are separated by whitespace

   -  the optional alpha term is separated by a solidus ("/")

   -  minimum required precision `when
      serializing <#serializing-color-values>`__ is defined, and may be
      greater than 8 bits per component

   -  the `none <#valdef-color-none>`__ value is allowed, to represent
      `missing components <#missing-color-component>`__

   -  components using
      `<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__
      and
      `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__
      may be freely mixed

   .. container:: example
      :name: example-modern-syntax

      ` <#example-modern-syntax>`__
      The following represents a saturated sRGB red that is 50% opaque:

      .. code:: highlight

         rgb(100% 0% 0% / 50%)

/4.1.2. Legacy (Comma-separated) Color Function
-----------------------------------------------

   .. .. rubric:: 4.1.2. Legacy (Comma-separated) Color Function
      Syntax\ ` <#color-syntax-legacy>`__
      :name: color-syntax-legacy
      :class: heading settled

   For Web compatibility, the syntactic forms of
   `rgb() <#funcdef-rgb>`__, `rgba() <#funcdef-rgba>`__,
   `hsl() <#funcdef-hsl>`__, and `hsla() <#funcdef-hsla>`__, (those
   defined in earlier specifications) also support a legacy color syntax
   which has the following differences:

   -  color components are separated by commas (optionally preceded
      and/or followed by whitespace)

   -  non-opaque forms use a separate notation (for example
      `hsla() <#funcdef-hsla>`__ rather than `hsl() <#funcdef-hsl>`__)
      and the alpha term is separated by commas (optionally preceded
      and/or followed by whitespace)

   -  minimum required precision is lower, 8 bits per component

   -  the `none <#valdef-color-none>`__ value is not allowed

   -  color components must be specified using either
      all-`<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__
      or
      all-`<number> <https://www.w3.org/TR/css-values-4/#number-value>`__,
      they can not be mixed.

   .. container:: example
      :name: example-rgba-legacy

      ` <#example-rgba-legacy>`__
      The following represents a saturated sRGB red that is 50% opaque:

      .. code:: highlight

         rgba(100%, 0%, 0%, 0.5)

   For the `color functions <#color-functions>`__ introduced in this or
   subsequent levels, where there is no Web compatibility issue, the
   `legacy color syntax <#legacy-color-syntax>`__ is invalid.

/4.2. Representing Transparency in Colors: the
----------------------------------------------

   .. .. rubric:: 4.2. Representing Transparency in Colors: the
      `<alpha-value> <#typedef-color-alpha-value>`__
      syntax\ ` <#alpha-syntax>`__
      :name: alpha-syntax
      :class: heading settled

   Tests
   This section provides definitions used later, it does not need tests.

   --------------

   .. code:: prod

      <alpha-value> = <number> | <percentage>

   Unless otherwise specified, an
   `<alpha-value> <#typedef-color-alpha-value>`__ component of a color
   defaults to 100% when omitted. Values outside the range [0,1] are not
   invalid, but are clamped to that range at parsed-value time.

/4.3. Representing Cylindrical-coordinate Hues: the
---------------------------------------------------

   .. .. rubric:: 4.3. Representing Cylindrical-coordinate Hues: the
      `<hue> <#typedef-hue>`__ syntax\ ` <#hue-syntax>`__
      :name: hue-syntax
      :class: heading settled

   Tests
   This section provides definitions used later, it does not need tests.

   --------------

   Hue is represented as an angle of the color circle (the rainbow,
   twisted around into a circle, and with purple added between violet
   and red).

   .. code:: prod

      <hue> = <number> | <angle>

   Because this value is so often given in degrees, the argument can
   also be given as a number, which is interpreted as a number of
   degrees and is the `canonical
   unit <https://www.w3.org/TR/css-values-4/#canonical-unit>`__.

   This number is normalized to the range [0,360).

   Note: The angles and spacing corresponding to particular hues depend
   on the color space. For example, in HSL and HWB, which use the sRGB
   color space, sRGB green is 120 degrees. In LCH, sRGB green is 134.39
   degrees, display-p3 green is 136.01 degrees, a98-rgb green is 145.97
   degrees and prophoto-rgb green is 141.04 degrees (because these are
   all different shades of green).

   `<hue> <#typedef-hue>`__ components are the most common components to
   become `powerless <#powerless-color-component>`__; any achromatic
   color will have a powerless hue component.

/4.4. “Missing” Color Components and the
----------------------------------------

   .. .. rubric:: 4.4. “Missing” Color Components and the
      `none <#valdef-color-none>`__ Keyword\ ` <#missing>`__
      :name: missing
      :class: heading settled

   In certain cases, a color can have one or more missing color
   components.

   In this specification, this happens automatically due to `hue-based
   interpolation <#hue-interpolation>`__ for some colors (such as
   `white <#valdef-color-white>`__); other specifications can define
   additional situations in which components are automatically missing.

   It can also be specified explicitly, by providing the keyword none
   for a component in a color function. All color functions (with the
   exception of those using the `legacy color
   syntax <#legacy-color-syntax>`__) allow any of their components to be
   specified as `none <#valdef-color-none>`__.

   This should be done with care, and only when the particular effect of
   doing so is desired.

   Tests

   -  `color-computed-color-function.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-color-function.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-color-function.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-color-function.html>`__
   -  `color-computed-hsl.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-hsl.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-hsl.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-hsl.html>`__
   -  `color-computed-hwb.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-hwb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-hwb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-hwb.html>`__
   -  `color-computed-lab.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-lab.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-lab.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-lab.html>`__
   -  `color-computed-relative-color.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-relative-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-relative-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-relative-color.html>`__
   -  `color-computed-rgb.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-rgb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-rgb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-rgb.html>`__
   -  `color-invalid-hsl.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-hsl.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-hsl.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-hsl.html>`__
   -  `color-invalid-rgb.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-rgb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-rgb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-rgb.html>`__
   -  `color-valid-color-function.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-color-function.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-color-function.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-color-function.html>`__
   -  `color-valid-color-mix-function.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-color-mix-function.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-color-mix-function.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-color-mix-function.html>`__
   -  `color-valid-hsl.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-hsl.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-hsl.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-hsl.html>`__
   -  `color-valid-hwb.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-hwb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-hwb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-hwb.html>`__
   -  `color-valid-lab.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-lab.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-lab.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-lab.html>`__
   -  `color-valid-relative-color.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-relative-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-relative-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-relative-color.html>`__
   -  `color-valid-rgb.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-rgb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-rgb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-rgb.html>`__

   For handling of `missing component <#missing-color-component>`__ in
   color interpolation, see `§ 12.2 Interpolating with Missing
   Components <#interpolation-missing>`__.

   For all other purposes, a `missing
   component <#missing-color-component>`__ behaves as a zero value, in
   the appropriate unit for that component: 0, 0%, or 0deg. This
   includes rendering the color directly, converting it to another color
   space, performing computations on the color component values, etc.

   If a color with a `missing component <#missing-color-component>`__ is
   serialized or otherwise presented directly to an author, then for
   `legacy color syntax <#legacy-color-syntax>`__ it represents that
   component as a zero value; otherwise, it represents that component as
   being the `none <#valdef-color-none>`__ keyword.

   .. container:: example non-normative
      :name: ex-missing-hue

      ` <#ex-missing-hue>`__ A missing hue is common when interpolating
      in cylindrical color spaces. For example, using the
      `color-mix() <https://www.w3.org/TR/css-color-5/#funcdef-color-mix>`__
      function specified in `[CSS-COLOR-5] <#biblio-css-color-5>`__ one
      could write color-mix(in hsl, white 30%, green 70%). Since
      `white <#valdef-color-white>`__ is an achromatic color, it has a
      `missing <#missing-color-component>`__ hue when expressed in
      `hsl() <#funcdef-hsl>`__ (effectively hsl(none 0% 100%)), since
      *any* hue will produce the same color) which means that the
      color-mix function will treat it as having the same hue as
      `green <#valdef-color-green>`__ (effectively hsl(120deg 0% 100%)),
      and then interpolate based on those components.
      The result will be a color that truly looks like a blend of green
      and white, rather than perhaps looking reddish (if
      `white <#valdef-color-white>`__\ s hue was defaulted to 0deg).

   .. container:: example
      :name: ex-grayscale-with-missing

      ` <#ex-grayscale-with-missing>`__ Explicitly specifying missing
      components can be useful to achieve an effect where you only
      *want* to interpolate certain components of a color.
      For example, to animate a color to "grayscale", no matter what the
      color is, one can interpolate it with oklch(none 0 none). This
      will take the hue and lightness from the starting color, but
      animate its chroma down to 0, rendering it into an equal-lightness
      gray with a steady hue across the whole animation.

      Doing this manually would require matching the hue and lightness
      of the starting color explicitly.

/4.4.1. “Powerless” Color Components
------------------------------------

   .. .. rubric:: 4.4.1. “Powerless” Color Components\ ` <#powerless>`__
      :name: powerless
      :class: heading settled

   Individual color syntaxes can specify that, in some cases, a given
   component of their syntax becomes a powerless color component. This
   indicates that the value of the component doesn’t affect the rendered
   color; any value you give it will result in the same color displayed
   in the screen.

   For example, in `hsl() <#funcdef-hsl>`__, the hue component is
   `powerless <#powerless-color-component>`__ when the saturation
   component is 0%; a 0% saturation indicates a grayscale color, which
   has no hue at all, so 0deg and 180deg, or any other angle, will give
   the exact same result.

   If a `powerless component <#powerless-color-component>`__ is manually
   specified, it acts as normal; the fact that it’s powerless has no
   effect. However, if a color is automatically produced by color space
   conversion, then any powerless components in the result must instead
   be set to `missing <#missing-color-component>`__, instead of whatever
   value was produced by the conversion process.

   User agents *may* treat a component as
   `powerless <#powerless-color-component>`__ if the color is
   "sufficiently close" to the precise conditions specified. For
   example, a gray color converted into `lch() <#funcdef-lch>`__ may,
   due to numerical errors, have an *extremely small* chroma rather than
   precisely 0%; this can, at the user agent’s discretion, still treat
   the hue component as powerless. It is intentionally unspecified
   exactly what "sufficiently close" means for this purpose.

/4.5. Parsing a `<color>`
-------------------------

   .. .. rubric:: 4.5. Parsing a `<color> <#typedef-color>`__
      Value\ ` <#parse-color>`__
      :name: parse-color
      :class: heading settled

   Tests
   This section provides a definition referenced elsewhere, it does not
   need tests.

   --------------

   .. container:: algorithm

      To parse a CSS \ `<color> <#typedef-color>`__\  value, given a
      `string <https://infra.spec.whatwg.org/#string>`__ ``input``, and
      an optional context
      `element <https://dom.spec.whatwg.org/#concept-element>`__
      ``element``:

      #. `Parse <https://www.w3.org/TR/css-syntax-3/#css-parse-something-according-to-a-css-grammar>`__
         ``input`` as a `<color> <#typedef-color>`__. If the result is
         failure, return failure; otherwise, let ``color`` be the
         result.

      #. Let ``used color`` be the result of
         `resolving <#resolving-color-values>`__ ``color`` to a `used
         color <#used-color>`__. If the value of other properties on the
         element a `<color> <#typedef-color>`__ is on is required to do
         the resolution (such as resolving a
         `currentcolor <#valdef-color-currentcolor>`__ or `system
         color <#css-system-colors>`__), use ``element`` if it was
         passed, or the `initial
         values <https://www.w3.org/TR/css-cascade-5/#initial-value>`__
         of the properties if not.

      #. Return ``used color``.

/5. sRGB Colors
---------------

   .. .. rubric:: 5. sRGB Colors\ ` <#numeric-srgb>`__
      :name: numeric-srgb
      :class: heading settled

   CSS colors in the `sRGB <#sRGB-space>`__ color space are represented
   by a triplet of values—​red, green, and blue—​identifying a point in
   the sRGB color space `[SRGB] <#biblio-srgb>`__. This is an
   internationally-recognized, device-independent color space, and so is
   useful for specifying colors that will be displayed on a computer
   screen, but is also useful for specifying colors on other types of
   devices, like printers.

   CSS also allows the use of non-sRGB `color
   space <#color-space>`__\ s, as described in `§ 10 Predefined Color
   Spaces <#predefined>`__.

   CSS provides several methods of directly specifying an sRGB color:
   `hex colors <#hex-color>`__,
   `rgb() <#funcdef-rgb>`__/`rgba() <#funcdef-rgba>`__ `color
   functions <#color-functions>`__,
   `hsl() <#funcdef-hsl>`__/`hsla() <#funcdef-hsla>`__ color functions,
   `hwb() <#funcdef-hwb>`__ color function, `named
   colors <#named-color>`__, and the
   `transparent <#valdef-color-transparent>`__ keyword.

/5.1. The RGB functions: `rgb()` and
------------------------------------

   .. .. rubric:: 5.1. The RGB functions: `rgb() <#funcdef-rgb>`__ and
      `rgba() <#funcdef-rgba>`__\ ` <#rgb-functions>`__
      :name: rgb-functions
      :class: heading settled

   The `rgb() <#funcdef-rgb>`__ and `rgba() <#funcdef-rgba>`__ functions
   define an sRGB color by specifying the r, g and b (red, green, and
   blue) channels directly. Their syntax is:

   .. code:: prod

      rgb() = [ <legacy-rgb-syntax> | <modern-rgb-syntax> ] 
      rgba() = [ <legacy-rgba-syntax> | <modern-rgba-syntax> ] 
      <legacy-rgb-syntax> =   rgb( <percentage>#{3} , <alpha-value>? ) |
                        rgb( <number>#{3} , <alpha-value>? )
      <legacy-rgba-syntax> = rgba( <percentage>#{3} , <alpha-value>? ) |
                        rgba( <number>#{3} , <alpha-value>? )
      <modern-rgb-syntax> = rgb( 
        [ <number> | <percentage> | none]{3} 
        [ / [<alpha-value> | none] ]?  )
      <modern-rgba-syntax> = rgba( 
        [ <number> | <percentage> | none]{3} 
        [ / [<alpha-value> | none] ]?  )

   Percentages
   Allowed for r, g and b
   Percent reference range 
   For r, g and b: 0% = 0.0, 100% = 255.0 For alpha: 0% = 0.0, 100% =
   1.0
   Tests

   -  `rgb-001.html <https://wpt.fyi/results/css/css-color/rgb-001.html>`__
      `(live test) <http://wpt.live/css/css-color/rgb-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgb-001.html>`__
   -  `rgb-002.html <https://wpt.fyi/results/css/css-color/rgb-002.html>`__
      `(live test) <http://wpt.live/css/css-color/rgb-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgb-002.html>`__
   -  `rgb-003.html <https://wpt.fyi/results/css/css-color/rgb-003.html>`__
      `(live test) <http://wpt.live/css/css-color/rgb-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgb-003.html>`__
   -  `rgb-004.html <https://wpt.fyi/results/css/css-color/rgb-004.html>`__
      `(live test) <http://wpt.live/css/css-color/rgb-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgb-004.html>`__
   -  `rgb-005.html <https://wpt.fyi/results/css/css-color/rgb-005.html>`__
      `(live test) <http://wpt.live/css/css-color/rgb-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgb-005.html>`__
   -  `rgb-006.html <https://wpt.fyi/results/css/css-color/rgb-006.html>`__
      `(live test) <http://wpt.live/css/css-color/rgb-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgb-006.html>`__
   -  `rgb-007.html <https://wpt.fyi/results/css/css-color/rgb-007.html>`__
      `(live test) <http://wpt.live/css/css-color/rgb-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgb-007.html>`__
   -  `rgb-008.html <https://wpt.fyi/results/css/css-color/rgb-008.html>`__
      `(live test) <http://wpt.live/css/css-color/rgb-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgb-008.html>`__
   -  `out-of-gamut-legacy-rgb.html <https://wpt.fyi/results/css/css-color/out-of-gamut-legacy-rgb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/out-of-gamut-legacy-rgb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/out-of-gamut-legacy-rgb.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__
   -  `color-computed-rgb.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-rgb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-rgb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-rgb.html>`__
   -  `color-invalid-rgb.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-rgb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-rgb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-rgb.html>`__
   -  `color-valid-rgb.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-rgb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-rgb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-rgb.html>`__

   The first three arguments specify the r, g and b (red, green, and
   blue) channels of the color, respectively. 0% represents the minimum
   value for that color channel in the sRGB gamut, and 100% represents
   the maximum value.

   The percentage reference range of the color channels comes from the
   historical fact that many graphics engines stored the color channels
   internally as a single byte, which can hold integers between 0 and
   255. Implementations should honor the precision of the channel as
   authored or calculated wherever possible. If this is not possible,
   the channel should be `rounded towards
   +∞ <https://drafts.csswg.org/css-values-4/#combine-integers>`__.

   The final argument, the
   `<alpha-value> <#typedef-color-alpha-value>`__, specifies the alpha
   of the color. If omitted, it defaults to 100%.

   Tests

   -  `background-color-rgb-001.html <https://wpt.fyi/results/css/css-color/background-color-rgb-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/background-color-rgb-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/background-color-rgb-001.html>`__
   -  `background-color-rgb-002.html <https://wpt.fyi/results/css/css-color/background-color-rgb-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/background-color-rgb-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/background-color-rgb-002.html>`__
   -  `background-color-rgb-003.html <https://wpt.fyi/results/css/css-color/background-color-rgb-003.html>`__
      `(live
      test) <http://wpt.live/css/css-color/background-color-rgb-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/background-color-rgb-003.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

   Values outside these ranges are not invalid, but are clamped to the
   ranges defined here at parsed-value time.

   For historical reasons, `rgb() <#funcdef-rgb>`__ and
   `rgba() <#funcdef-rgba>`__ also support a `legacy color
   syntax <#legacy-color-syntax>`__.

   Tests

   -  `rgba-001.html <https://wpt.fyi/results/css/css-color/rgba-001.html>`__
      `(live test) <http://wpt.live/css/css-color/rgba-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgba-001.html>`__
   -  `rgba-002.html <https://wpt.fyi/results/css/css-color/rgba-002.html>`__
      `(live test) <http://wpt.live/css/css-color/rgba-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgba-002.html>`__
   -  `rgba-003.html <https://wpt.fyi/results/css/css-color/rgba-003.html>`__
      `(live test) <http://wpt.live/css/css-color/rgba-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgba-003.html>`__
   -  `rgba-004.html <https://wpt.fyi/results/css/css-color/rgba-004.html>`__
      `(live test) <http://wpt.live/css/css-color/rgba-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgba-004.html>`__
   -  `rgba-005.html <https://wpt.fyi/results/css/css-color/rgba-005.html>`__
      `(live test) <http://wpt.live/css/css-color/rgba-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgba-005.html>`__
   -  `rgba-006.html <https://wpt.fyi/results/css/css-color/rgba-006.html>`__
      `(live test) <http://wpt.live/css/css-color/rgba-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgba-006.html>`__
   -  `rgba-007.html <https://wpt.fyi/results/css/css-color/rgba-007.html>`__
      `(live test) <http://wpt.live/css/css-color/rgba-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgba-007.html>`__
   -  `rgba-008.html <https://wpt.fyi/results/css/css-color/rgba-008.html>`__
      `(live test) <http://wpt.live/css/css-color/rgba-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rgba-008.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

/5.2. The RGB Hexadecimal Notations:
------------------------------------

   .. .. rubric:: 5.2. The RGB Hexadecimal Notations:
      #RRGGBB\ ` <#hex-notation>`__
      :name: hex-notation
      :class: heading settled

   The CSS hex color notation allows an sRGB color to be specified by
   giving the channels as hexadecimal numbers, which is similar to how
   colors are often written directly in computer code. It’s also shorter
   than writing the same color out in `rgb() <#funcdef-rgb>`__ notation.

   The syntax of a <hex-color> is a
   `<hash-token> <https://www.w3.org/TR/css-syntax-3/#typedef-hash-token>`__
   token whose value consists of 3, 4, 6, or 8 hexadecimal digits. In
   other words, a hex color is written as a hash character, "#",
   followed by some number of digits 0-9 or letters a-f (the case of the
   letters doesn’t matter - #00ff00 is identical to #00FF00).

   The number of hex digits given determines how to decode the hex
   notation into an RGB color:

   6 digits
      The first pair of digits, interpreted as a hexadecimal number,
      specifies the red channel of the color, where 00 represents the
      minimum value and ff (255 in decimal) represents the maximum. The
      next pair of digits, interpreted in the same way, specifies the
      green channel, and the last pair specifies the blue. The alpha
      channel of the color is fully opaque.

      .. container:: example
         :name: ex-hex6

         ` <#ex-hex6>`__ In other words, #00ff00 represents the same
         color as rgb(0 255 0) (a lime green).
   8 digits
      The first 6 digits are interpreted identically to the 6-digit
      notation. The last pair of digits, interpreted as a hexadecimal
      number, specifies the alpha channel of the color, where 00
      represents a fully transparent color and ff represent a fully
      opaque color.

      .. container:: example
         :name: ex-hex8

         ` <#ex-hex8>`__ In other words, #0000ffcc represents the same
         color as rgb(0 0 100% / 80%) (a slightly-transparent blue).
   3 digits
      This is a shorter variant of the 6-digit notation. The first
      digit, interpreted as a hexadecimal number, specifies the red
      channel of the color, where 0 represents the minimum value and f
      represents the maximum. The next two digits represent the green
      and blue channels, respectively, in the same way. The alpha
      channel of the color is fully opaque.

      .. container:: example
         :name: ex-hex3

         ` <#ex-hex3>`__ This syntax is often explained by saying that
         it’s identical to a 6-digit notation obtained by "duplicating"
         all of the digits. For example, the notation #123 specifies the
         same color as the notation #112233. This method of specifying a
         color has lower "resolution" than the 6-digit notation; there
         are only 4096 possible colors expressible in the 3-digit hex
         syntax, as opposed to approximately 17 million in 6-digit hex
         syntax.
   4 digits
      This is a shorter variant of the 8-digit notation, "expanded" in
      the same way as the 3-digit notation is. The first digit,
      interpreted as a hexadecimal number, specifies the red channel of
      the color, where 0 represents the minimum value and f represents
      the maximum. The next three digits represent the green, blue, and
      alpha channels, respectively.

   Tests

   -  `hex-001.html <https://wpt.fyi/results/css/css-color/hex-001.html>`__
      `(live test) <http://wpt.live/css/css-color/hex-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hex-001.html>`__
   -  `hex-002.html <https://wpt.fyi/results/css/css-color/hex-002.html>`__
      `(live test) <http://wpt.live/css/css-color/hex-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hex-002.html>`__
   -  `hex-003.html <https://wpt.fyi/results/css/css-color/hex-003.html>`__
      `(live test) <http://wpt.live/css/css-color/hex-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hex-003.html>`__
   -  `hex-004.html <https://wpt.fyi/results/css/css-color/hex-004.html>`__
      `(live test) <http://wpt.live/css/css-color/hex-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hex-004.html>`__
   -  `border-bottom-color.xht <https://wpt.fyi/results/css/css-color/border-bottom-color.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/border-bottom-color.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/border-bottom-color.xht>`__
   -  `border-left-color.xht <https://wpt.fyi/results/css/css-color/border-left-color.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/border-left-color.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/border-left-color.xht>`__
   -  `border-right-color.xht <https://wpt.fyi/results/css/css-color/border-right-color.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/border-right-color.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/border-right-color.xht>`__
   -  `border-top-color.xht <https://wpt.fyi/results/css/css-color/border-top-color.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/border-top-color.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/border-top-color.xht>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__
   -  `color-computed-hex-color.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-hex-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-hex-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-hex-color.html>`__
   -  `color-invalid-hex-color.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-hex-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-hex-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-hex-color.html>`__

/6. Color Keywords
------------------

   .. .. rubric:: 6. Color Keywords\ ` <#color-keywords>`__
      :name: color-keywords
      :class: heading settled

   In addition to the various numeric syntaxes for
   `<color> <#typedef-color>`__\ s, CSS defines several sets of color
   keywords that can be used instead—​each with their own advantages or
   use cases.


/6.1. Named Colors
------------------

   .. .. rubric:: 6.1. Named Colors\ ` <#named-colors>`__
      :name: named-colors
      :class: heading settled

   CSS defines a large set of named colors, so that common colors can be
   written and read more easily. A <named-color> is written as an
   `<ident> <https://www.w3.org/TR/css-values-4/#typedef-ident>`__,
   accepted anywhere a `<color> <#typedef-color>`__ is. As usual for
   CSS-defined <ident>s, all of these keywords are `ASCII
   case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__.

   The names resolve to colors in sRGB.

   16 of CSS’s named colors come from the VGA palette originally, and
   were then adopted into HTML: aqua, black, blue, fuchsia, gray, green,
   lime, maroon, navy, olive, purple, red, silver, teal, white, and
   yellow. Most of the rest come from one version of the X11 color
   system, used in Unix-derived systems to specify colors for the
   console, and were then adopted into SVG.

   Note: these color names are standardized here, *not because they are
   good*, but because their use and implementation has been widespread
   for decades and the standard needs to reflect reality. Indeed, it is
   often hard to imagine what each name will look like (hence the list
   below); the names are not evenly distributed throughout the sRGB
   color volume, the names are not even internally consistent (
   `darkgray <#valdef-color-darkgray>`__ is lighter than
   `gray <#valdef-color-gray>`__, while
   `lightpink <#valdef-color-lightpink>`__ is darker than
   `pink <#valdef-color-pink>`__), and some names (such as
   `indianred <#valdef-color-indianred>`__, which was originally named
   after a red pigment from India), have been found to be offensive.
   Thus, their use is *not encouraged*.

   (Two special color values,
   `transparent <#valdef-color-transparent>`__ and
   `currentcolor <#valdef-color-currentcolor>`__, are specially defined
   in their own sections.)

   The following table defines all of the opaque named colors, by giving
   equivalent numeric specifications in the other color syntaxes.

.. 
   ==========  ===========  ====================  ===========  ===========
      Named      Numeric      Color  name           Hex rgb      Decimal
   ==========  ===========  ====================  ===========  ===========
                            aliceblue             #f0f8ff      240 248 255
                            antiquewhite          #faebd7      250 235 215
                            aqua                  #00ffff      0 255 255
                            aquamarine            #7fffd4      127 255 212
                            azure                 #f0ffff      240 255 255
                            beige                 #f5f5dc      245 245 220
                            bisque                #ffe4c4      255 228 196
                            black                 #000000      0 0 0
                            blanchedalmond        #ffebcd      255 235 205
                            blue                  #0000ff      0 0 255
                            blueviolet            #8a2be2      138 43 226
                            brown                 #a52a2a      165 42 42
                            burlywood             #deb887      222 184 135
                            cadetblue             #5f9ea0      95 158 160
                            chartreuse            #7fff00      127 255 0
                            chocolate             #d2691e      210 105 30
                            coral                 #ff7f50      255 127 80
                            cornflowerblue        #6495ed      100 149 237
                            cornsilk              #fff8dc      255 248 220
                            crimson               #dc143c      220 20 60
                            cyan                  #00ffff      0 255 255
                            darkblue              #00008b      0 0 139
                            darkcyan              #008b8b      0 139 139
                            darkgoldenrod         #b8860b      184 134 11
                            darkgray              #a9a9a9      169 169 169
                            darkgreen             #006400      0 100 0
                            darkgrey              #a9a9a9      169 169 169
                            darkkhaki             #bdb76b      189 183 107
                            darkmagenta           #8b008b      139 0 139
                            darkolivegreen        #556b2f      85 107 47
                            darkorange            #ff8c00      255 140 0
                            darkorchid            #9932cc      153 50 204
                            darkred               #8b0000      139 0 0
                            darksalmon            #e9967a      233 150 122
                            darkseagreen          #8fbc8f      143 188 143
                            darkslateblue         #483d8b      72 61 139
                            darkslategray         #2f4f4f      47 79 79
                            darkslategrey         #2f4f4f      47 79 79
                            darkturquoise         #00ced1      0 206 209
                            darkviolet            #9400d3      148 0 211
                            deeppink              #ff1493      255 20 147
                            deepskyblue           #00bfff      0 191 255
                            dimgray               #696969      105 105 105
                            dimgrey               #696969      105 105 105
                            dodgerblue            #1e90ff      30 144 255
                            firebrick             #b22222      178 34 34
                            floralwhite           #fffaf0      255 250 240
                            forestgreen           #228b22      34 139 34
                            fuchsia               #ff00ff      255 0 255
                            gainsboro             #dcdcdc      220 220 220
                            ghostwhite            #f8f8ff      248 248 255
                            gold                  #ffd700      255 215 0
                            goldenrod             #daa520      218 165 32
                            gray                  #808080      128 128 128
                            green                 #008000      0 128 0
                            greenyellow           #adff2f      173 255 47
                            grey                  #808080      128 128 128
                            honeydew              #f0fff0      240 255 240
                            hotpink               #ff69b4      255 105 180
                            indianred             #cd5c5c      205 92 92
                            indigo                #4b0082      75 0 130
                            ivory                 #fffff0      255 255 240
                            khaki                 #f0e68c      240 230 140
                            lavender              #e6e6fa      230 230 250
                            lavenderblush         #fff0f5      255 240 245
                            lawngreen             #7cfc00      124 252 0
                            lemonchiffon          #fffacd      255 250 205
                            lightblue             #add8e6      173 216 230
                            lightcoral            #f08080      240 128 128
                            lightcyan             #e0ffff      224 255 255
                            lightgoldenrodyellow  #fafad2      250 250 210
                            lightgray             #d3d3d3      211 211 211
                            lightgreen            #90ee90      144 238 144
                            lightgrey             #d3d3d3      211 211 211
                            lightpink             #ffb6c1      255 182 193
                            lightsalmon           #ffa07a      255 160 122
                            lightseagreen         #20b2aa      32 178 170
                            lightskyblue          #87cefa      135 206 250
                            lightslategray        #778899      119 136 153
                            lightslategrey        #778899      119 136 153
                            lightsteelblue        #b0c4de      176 196 222
                            lightyellow           #ffffe0      255 255 224
                            lime                  #00ff00      0 255 0
                            limegreen             #32cd32      50 205 50
                            linen                 #faf0e6      250 240 230
                            magenta               #ff00ff      255 0 255
                            maroon                #800000      128 0 0
                            mediumaquamarine      #66cdaa      102 205 170
                            mediumblue            #0000cd      0 0 205
                            mediumorchid          #ba55d3      186 85 211
                            mediumpurple          #9370db      147 112 219
                            mediumseagreen        #3cb371      60 179 113
                            mediumslateblue       #7b68ee      123 104 238
                            mediumspringgreen     #00fa9a      0 250 154
                            mediumturquoise       #48d1cc      72 209 204
                            mediumvioletred       #c71585      199 21 133
                            midnightblue          #191970      25 25 112
                            mintcream             #f5fffa      245 255 250
                            mistyrose             #ffe4e1      255 228 225
                            moccasin              #ffe4b5      255 228 181
                            navajowhite           #ffdead      255 222 173
                            navy                  #000080      0 0 128
                            oldlace               #fdf5e6      253 245 230
                            olive                 #808000      128 128 0
                            olivedrab             #6b8e23      107 142 35
                            orange                #ffa500      255 165 0
                            orangered             #ff4500      255 69 0
                            orchid                #da70d6      218 112 214
                            palegoldenrod         #eee8aa      238 232 170
                            palegreen             #98fb98      152 251 152
                            paleturquoise         #afeeee      175 238 238
                            palevioletred         #db7093      219 112 147
                            papayawhip            #ffefd5      255 239 213
                            peachpuff             #ffdab9      255 218 185
                            peru                  #cd853f      205 133 63
                            pink                  #ffc0cb      255 192 203
                            plum                  #dda0dd      221 160 221
                            powderblue            #b0e0e6      176 224 230
                            purple                #800080      128 0 128
                            rebeccapurple         #663399      102 51 153
                            red                   #ff0000      255 0 0
                            rosybrown             #bc8f8f      188 143 143
                            royalblue             #4169e1      65 105 225
                            saddlebrown           #8b4513      139 69 19
                            salmon                #fa8072      250 128 114
                            sandybrown            #f4a460      244 164 96
                            seagreen              #2e8b57      46 139 87
                            seashell              #fff5ee      255 245 238
                            sienna                #a0522d      160 82 45
                            silver                #c0c0c0      192 192 192
                            skyblue               #87ceeb      135 206 235
                            slateblue             #6a5acd      106 90 205
                            slategray             #708090      112 128 144
                            slategrey             #708090      112 128 144
                            snow                  #fffafa      255 250 250
                            springgreen           #00ff7f      0 255 127
                            steelblue             #4682b4      70 130 180
                            tan                   #d2b48c      210 180 140
                            teal                  #008080      0 128 128
                            thistle               #d8bfd8      216 191 216
                            tomato                #ff6347      255 99 71
                            turquoise             #40e0d0      64 224 208
                            violet                #ee82ee      238 130 238
                            wheat                 #f5deb3      245 222 179
                            white                 #ffffff      255 255 255
                            whitesmoke            #f5f5f5      245 245 245
                            yellow                #ffff00      255 255 0
                            yellowgreen           #9acd32      154 205 50
   ==========  ===========  ====================  ===========  ===========

   .. figure:: pictures/css-148-named-colors.svg
   
      148 named colors of CSS Color Module Level 4

   Note: this list of colors and their definitions is a superset of the
   list of `named colors defined by SVG
   1.1 <https://www.w3.org/TR/SVG11/types.html#ColorKeywords>`__.

   For historical reasons, this is also referred to as the X11 color
   set.
   Note: The history of the X11 color system is interesting, and was
   excellently summarized by `Alex Sexton in their talk “Peachpuffs and
   Lemonchiffons” <https://www.youtube.com/watch?v=HmStJQzclHc>`__.

   Tests

   -  `named-001.html <https://wpt.fyi/results/css/css-color/named-001.html>`__
      `(live test) <http://wpt.live/css/css-color/named-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/named-001.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__
   -  `color-computed-named-color.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-named-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-named-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-named-color.html>`__
   -  `color-invalid-named-color.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-named-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-named-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-named-color.html>`__

/6.2. System Colors
-------------------

   .. .. rubric:: 6.2. System Colors\ ` <#css-system-colors>`__
      :name: css-system-colors
      :class: heading settled dfn-paneled

   In general, the `<system-color> <#typedef-system-color>`__ keywords
   reflect *default* color choices made by the user, the browser, or the
   OS. They are typically used in the browser default stylesheet, for
   this reason.

   To maintain legibility, the
   `<system-color> <#typedef-system-color>`__ keywords also respond to
   light mode or dark mode changes.

   .. container:: example
      :name: ex-LM-DM-links

      ` <#ex-LM-DM-links>`__ For example, traditional blue link text is
      legible on a white background (WCAG contrast 8.59:1, AAA pass) but
      would not be legible on a black background (WCAG contrast 2.44:1,
      AA fail). Instead, a lighter blue such as #81D9FE would be used in
      dark mode (WCAG contrast 13.28:1, AAA pass).

      .. container::

         Legible link text

         Illegible link text

         Legible link text

   However, in `forced colors
   mode <https://www.w3.org/TR/css-color-adjust-1/#forced-colors-mode>`__,
   most colors on the page are forced into a restricted, user-chosen
   palette. The <system-color> keywords expose these user-chosen colors
   so that the rest of the page can integrate with this restricted
   palette.

   When the
   `forced-colors <https://drafts.csswg.org/mediaqueries-5/#descdef-media-forced-colors>`__
   `media
   feature <https://www.w3.org/TR/mediaqueries-5/#media-feature>`__ is
   active, authors *should* use the
   `<system-color> <#typedef-system-color>`__ keywords as color values
   in properties other than those listed in `CSS Color Adjustment 1
   § 3.1 Properties Affected by Forced Colors
   Mode <https://www.w3.org/TR/css-color-adjust-1/#forced-colors-properties>`__,
   to ensure legibility and consistency across the page and avoid an
   uncoordinated mishmash of user-forced and page-chosen colors.

   Tests

   -  `system-color-consistency.html <https://wpt.fyi/results/css/css-color/system-color-consistency.html>`__
      `(live
      test) <http://wpt.live/css/css-color/system-color-consistency.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/system-color-consistency.html>`__
   -  `system-color-support.html <https://wpt.fyi/results/css/css-color/system-color-support.html>`__
      `(live
      test) <http://wpt.live/css/css-color/system-color-support.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/system-color-support.html>`__
   -  `color-valid-system-color.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-system-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-system-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-system-color.html>`__

   When the values of `<system-color> <#typedef-system-color>`__
   keywords come from the browser, (as opposed to being OS defaults or
   user choices) the browser should ensure that `matching
   foreground/background pairs <#system-color-pairs>`__ have a minimum
   of WCAG AA contrast. However, user preferences (for higher or lower
   contrast), whether set as a browser preference, a user stylesheet, or
   by altering the OS defaults, must take precedence over this
   requirement.

   Authors *may* also use these keywords at any time, but *should* be
   careful to use the colors in `matching background-foreground
   pairs <#system-color-pairs>`__ to ensure appropriate contrast, as any
   particular contrast relationship across non-matching pairs (e.g.
   `Canvas <#valdef-color-canvas>`__ and
   `ButtonText <#valdef-color-buttontext>`__) is not guaranteed.

   The `<system-color> <#typedef-system-color>`__ keywords are defined
   as follows:

   AccentColor
       Background of accented user interface controls.
   AccentColorText
       Text of accented user interface controls.
   ActiveText
       Text in active links. For light backgrounds, traditionally red.
   ButtonBorder
       The base border color for push buttons.
   ButtonFace
       The face background color for push buttons.
   ButtonText
       Text on push buttons.
   Canvas
       Background of application content or documents.
   CanvasText
       Text in application content or documents.
   Field
       Background of input fields.
   FieldText
       Text in input fields.
   GrayText
       Disabled text. (Often, but not necessarily, gray.)
   Highlight
       Background of selected text, for example from ::selection.
   HighlightText
       Text of selected text.
   LinkText
       Text in non-active, non-visited links. For light backgrounds,
      traditionally blue.
   Mark
       Background of text that has been specially marked (such as by the
      HTML
      ```mark`` <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element>`__
      element).
   MarkText
       Text that has been specially marked (such as by the HTML
      ```mark`` <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element>`__
      element).
   SelectedItem
       Background of selected items, for example a selected checkbox.
   SelectedItemText
       Text of selected items.
   VisitedText
       Text in visited links. For light backgrounds, traditionally
      purple.

   Tests

   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__
   -  `system-color-compute.html <https://wpt.fyi/results/css/css-color/system-color-compute.html>`__
      `(live
      test) <http://wpt.live/css/css-color/system-color-compute.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/system-color-compute.html>`__
   -  `system-color-hightlights-vs-getSelection-001.html <https://wpt.fyi/results/css/css-color/system-color-hightlights-vs-getSelection-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/system-color-hightlights-vs-getSelection-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/system-color-hightlights-vs-getSelection-001.html>`__
   -  `system-color-hightlights-vs-getSelection-002.html <https://wpt.fyi/results/css/css-color/system-color-hightlights-vs-getSelection-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/system-color-hightlights-vs-getSelection-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/system-color-hightlights-vs-getSelection-002.html>`__

   Note: As with all other
   `keywords <https://www.w3.org/TR/css-values-4/#css-keyword>`__, these
   names are `ASCII
   case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__.
   They are shown here with mixed capitalization for legibility.

   For systems that do not have a particular system UI concept, the
   specified value should be mapped to the most closely related system
   color value that exists. The following system color pairings are
   expected to form legible background-foreground colors:

   -  `Canvas <#valdef-color-canvas>`__ background with
      `CanvasText <#valdef-color-canvastext>`__,
      `LinkText <#valdef-color-linktext>`__,
      `VisitedText <#valdef-color-visitedtext>`__,
      `ActiveText <#valdef-color-activetext>`__ foreground.

   -  `Canvas <#valdef-color-canvas>`__ background with a
      `ButtonBorder <#valdef-color-buttonborder>`__ border and adjacent
      color Canvas

   -  `ButtonFace <#valdef-color-buttonface>`__ background with
      `ButtonText <#valdef-color-buttontext>`__ foreground.

   -  `Field <#valdef-color-field>`__ background with
      `FieldText <#valdef-color-fieldtext>`__ foreground.

   -  `Mark <#valdef-color-mark>`__ background with
      `MarkText <#valdef-color-marktext>`__ foreground

   -  `ButtonFace <#valdef-color-buttonface>`__ or
      `Field <#valdef-color-field>`__ background with a
      `ButtonBorder <#valdef-color-buttonborder>`__ border and adjacent
      color `Canvas <#valdef-color-canvas>`__'

   -  `Highlight <#valdef-color-highlight>`__ background with
      `HighlightText <#valdef-color-highlighttext>`__ foreground.

   -  `SelectedItem <#valdef-color-selecteditem>`__ background with
      `SelectedItemText <#valdef-color-selecteditemtext>`__ foreground.

   -  `AccentColor <#valdef-color-accentcolor>`__ background with
      `AccentColorText <#valdef-color-accentcolortext>`__ foreground.

   Additionally, `GrayText <#valdef-color-graytext>`__ is expected to be
   readable, though possibly at a lower contrast rating, over any of the
   backgrounds.

   .. container:: example
      :name: ex-SystemCombo

      ` <#ex-SystemCombo>`__ For example, the system color combinations
      in the browser you are currently using:
      Canvas with CanvasText: CanvasText

      Canvas with LinkText: LinkText

      Canvas with VisitedText: VisitedText

      Canvas with ActiveText: ActiveText

      Canvas with GrayText: GrayText

      Canvas with ButtonBorder and adjacent Canvas: CanvasTextAdjacent

      ButtonFace with ButtonText: ButtonText

      ButtonFace with ButtonText and ButtonBorder: ButtonText

      ButtonFace with GrayText: GrayText

      Field with FieldText: FieldText

      Field with GrayText: GrayText

      Mark with MarkText: MarkText

      Mark with GrayText: GrayText

      Highlight with HighlightText: HighlightText

      Highlight with GrayText: GrayText

      SelectedItem with SelectedItemText: SelectedItemText

      AccentColor with AccentColorText: AccentColorText

      AccentColor with GrayText: GrayText

   Earlier versions of CSS defined additional
   `<system-color> <#typedef-system-color>`__\ s, which have since been
   deprecated. These are documented in `Appendix A: Deprecated CSS
   System Colors <#deprecated-system-colors>`__.

   Note: The `<system-color> <#typedef-system-color>`__\ s incur some
   privacy and security risk, as detailed in `§ 20 Privacy
   Considerations <#privacy>`__ and `§ 19 Security
   Considerations <#security>`__.

   User Agents may, to mitigate privacy and security risks such as
   fingerprinting, elect to return fixed values for the used value of
   system colors which do not reflect customisation or theming choices
   made by the user.

/6.3. The `transparent`
-----------------------

   .. .. rubric:: 6.3. The `transparent <#valdef-color-transparent>`__
      keyword\ ` <#transparent-color>`__
      :name: transparent-color
      :class: heading settled

   The keyword transparent specifies a `transparent
   black <#transparent-black>`__. It is a type of
   `<named-color> <#typedef-named-color>`__.

   Tests

   -  `color-computed.html <https://wpt.fyi/results/css/css-color/parsing/color-computed.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__
   -  `t423-transparent-1-a.xht <https://wpt.fyi/results/css/css-color/t423-transparent-1-a.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t423-transparent-1-a.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t423-transparent-1-a.xht>`__
   -  `t423-transparent-2-a.xht <https://wpt.fyi/results/css/css-color/t423-transparent-2-a.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t423-transparent-2-a.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t423-transparent-2-a.xht>`__

/6.4. The `currentcolor`
------------------------

   .. .. rubric:: 6.4. The `currentcolor <#valdef-color-currentcolor>`__
      keyword\ ` <#currentcolor-color>`__
      :name: currentcolor-color
      :class: heading settled

   The keyword currentcolor represents value of the
   `color <#propdef-color>`__ property on the same element. Unlike
   `<named-color> <#typedef-named-color>`__\ s, it is *not* restricted
   to sRGB; the value can be any `<color> <#typedef-color>`__. Its `used
   values <https://www.w3.org/TR/css-cascade-5/#used-value>`__ is
   determined by `resolving color values <#resolving-other-colors>`__.

   Tests

   -  `border-color-currentcolor.html <https://wpt.fyi/results/css/css-color/border-color-currentcolor.html>`__
      `(live
      test) <http://wpt.live/css/css-color/border-color-currentcolor.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/border-color-currentcolor.html>`__
   -  `color-mix-currentcolor-nested-for-color-property.html <https://wpt.fyi/results/css/css-color/color-mix-currentcolor-nested-for-color-property.html>`__
      `(live
      test) <http://wpt.live/css/css-color/color-mix-currentcolor-nested-for-color-property.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/color-mix-currentcolor-nested-for-color-property.html>`__
   -  `currentcolor-001.html <https://wpt.fyi/results/css/css-color/currentcolor-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/currentcolor-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/currentcolor-001.html>`__
   -  `currentcolor-002.html <https://wpt.fyi/results/css/css-color/currentcolor-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/currentcolor-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/currentcolor-002.html>`__
   -  `currentcolor-003.html <https://wpt.fyi/results/css/css-color/currentcolor-003.html>`__
      `(live
      test) <http://wpt.live/css/css-color/currentcolor-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/currentcolor-003.html>`__
   -  `currentcolor-004.html <https://wpt.fyi/results/css/css-color/currentcolor-004.html>`__
      `(live
      test) <http://wpt.live/css/css-color/currentcolor-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/currentcolor-004.html>`__
   -  `currentcolor-visited-fallback.html <https://wpt.fyi/results/css/css-color/currentcolor-visited-fallback.html>`__
      `(live
      test) <http://wpt.live/css/css-color/currentcolor-visited-fallback.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/currentcolor-visited-fallback.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

   .. container:: example
      :name: ex-currentcolor

      ` <#ex-currentcolor>`__ Here’s a simple example showing how to use
      the `currentcolor <#valdef-color-currentcolor>`__ keyword:
      .. code:: lang-css

         .foo {
           color:  red;
           background-color:  currentcolor;
         }

      This is equivalent to writing:

      .. code:: lang-css

         .foo {
           color:  red;
           background-color:  red;
         }

   .. container:: example
      :name: ex-textemph-currentcolor

      ` <#ex-textemph-currentcolor>`__ For example, the
      `text-emphasis-color <https://www.w3.org/TR/css-text-decor-4/#propdef-text-emphasis-color>`__
      property `[CSS3-TEXT-DECOR] <#biblio-css3-text-decor>`__, whose
      initial value is `currentcolor <#valdef-color-currentcolor>`__, by
      default matches the text color even as the
      `color <#propdef-color>`__ property changes across elements.
      .. code:: language-markup

         <p><em>Some <strong>really</strong> emphasized text.</em>
         <style>
         p { color: black; }
         em { text-emphasis: dot; }
         strong { color: red; }
         </style>

      |rendered emphasized text with the word 'really' in red with red
      emphasis dots|
      In the above example, the emphasis marks are black over the text
      "Some" and "emphasized text", but red over the text "really".

   Note: Multi-word keywords in CSS usually separate their component
   words with hyphens. `currentcolor <#valdef-color-currentcolor>`__
   doesn’t, because (deep breath) it was originally introduced in SVG as
   a property value, "current-color" with the usual CSS spelling. It
   (along with all other properties and their values) then became
   presentation attributes and attribute values, as well as properties,
   to make generation with XSLT easier. Then all of the presentation
   attributes were changed from hyphenated to camelCase, because the DOM
   had an issue with hyphen meaning "minus". But then, they didn’t
   follow CSS conventions anymore so all the properties and property
   values that were *already* part of CSS were changed back to
   hyphenated! currentcolor was not a part of CSS at that time, so
   remained camelCased. Only later did CSS pick it up, at which point
   the capitalization stopped mattering, as CSS keywords are `ASCII
   case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__.

/7. HSL Colors: `hsl()` and
---------------------------

   .. .. rubric:: 7. HSL Colors: `hsl() <#funcdef-hsl>`__ and
      `hsla() <#funcdef-hsla>`__ functions\ ` <#the-hsl-notation>`__
      :name: the-hsl-notation
      :class: heading settled

   The RGB system for specifying colors, while convenient for machines
   and graphic libraries, is often regarded as very difficult for humans
   to gain an intuitive grasp on. It’s not easy to tell, for example,
   how to alter an RGB color to produce a lighter variant of the same
   hue.

   There are several other color schemes possible. One such is the HSL
   `[HSL] <#biblio-hsl>`__ color scheme, which is more intuitive to use,
   but still maps easily back to RGB colors.

   HSL colors are specified as a triplet of hue, saturation, and
   lightness. The syntax of the `hsl() <#funcdef-hsl>`__ and
   `hsla() <#funcdef-hsla>`__ functions is:

   .. code:: prod

      hsl() = [ <legacy-hsl-syntax> | <modern-hsl-syntax> ]
      hsla() = [ <legacy-hsla-syntax> | <modern-hsla-syntax> ]
      <modern-hsl-syntax> = hsl( 
          [<hue> | none] 
          [<percentage> | <number> | none] 
          [<percentage> | <number> | none] 
          [ / [<alpha-value> | none] ]? )
      <modern-hsla-syntax> = hsla( 
          [<hue> | none] 
          [<percentage> | <number> | none] 
          [<percentage> | <number> | none] 
          [ / [<alpha-value> | none] ]? )
      <legacy-hsl-syntax> = hsl( <hue>, <percentage>, <percentage>, <alpha-value>? )
      <legacy-hsla-syntax> = hsla( <hue>, <percentage>, <percentage>, <alpha-value>? )

   Percentages
   Allowed for S and L
   Percent reference range 
   for S and L: 0% = 0.0, 100% = 100.0
   Tests

   -  `hsl-001.html <https://wpt.fyi/results/css/css-color/hsl-001.html>`__
      `(live test) <http://wpt.live/css/css-color/hsl-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsl-001.html>`__
   -  `hsl-002.html <https://wpt.fyi/results/css/css-color/hsl-002.html>`__
      `(live test) <http://wpt.live/css/css-color/hsl-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsl-002.html>`__
   -  `hsl-003.html <https://wpt.fyi/results/css/css-color/hsl-003.html>`__
      `(live test) <http://wpt.live/css/css-color/hsl-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsl-003.html>`__
   -  `hsl-004.html <https://wpt.fyi/results/css/css-color/hsl-004.html>`__
      `(live test) <http://wpt.live/css/css-color/hsl-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsl-004.html>`__
   -  `hsl-005.html <https://wpt.fyi/results/css/css-color/hsl-005.html>`__
      `(live test) <http://wpt.live/css/css-color/hsl-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsl-005.html>`__
   -  `hsl-006.html <https://wpt.fyi/results/css/css-color/hsl-006.html>`__
      `(live test) <http://wpt.live/css/css-color/hsl-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsl-006.html>`__
   -  `hsl-007.html <https://wpt.fyi/results/css/css-color/hsl-007.html>`__
      `(live test) <http://wpt.live/css/css-color/hsl-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsl-007.html>`__
   -  `hsl-008.html <https://wpt.fyi/results/css/css-color/hsl-008.html>`__
      `(live test) <http://wpt.live/css/css-color/hsl-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsl-008.html>`__
   -  `background-color-hsl-001.html <https://wpt.fyi/results/css/css-color/background-color-hsl-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/background-color-hsl-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/background-color-hsl-001.html>`__
   -  `background-color-hsl-002.html <https://wpt.fyi/results/css/css-color/background-color-hsl-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/background-color-hsl-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/background-color-hsl-002.html>`__
   -  `background-color-hsl-003.html <https://wpt.fyi/results/css/css-color/background-color-hsl-003.html>`__
      `(live
      test) <http://wpt.live/css/css-color/background-color-hsl-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/background-color-hsl-003.html>`__
   -  `background-color-hsl-004.html <https://wpt.fyi/results/css/css-color/background-color-hsl-004.html>`__
      `(live
      test) <http://wpt.live/css/css-color/background-color-hsl-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/background-color-hsl-004.html>`__
   -  `color-computed-hsl.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-hsl.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-hsl.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-hsl.html>`__
   -  `color-invalid-hsl.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-hsl.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-hsl.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-hsl.html>`__
   -  `color-valid-hsl.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-hsl.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-hsl.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-hsl.html>`__

   The first argument specifies the hue angle.

   In HSL (and HWB) the angle 0deg represents sRGB primary red (as does
   360deg, 720deg, etc.), and the rest of the hues are spread around the
   circle, so 120deg represents sRGB primary green, 240deg represents
   sRGB primary blue, etc.

   The next two arguments are the saturation and lightness,
   respectively. For saturation, 100% or 100 is a fully-saturated,
   bright color, and 0% or 0 is a fully-unsaturated gray. For lightness,
   50% or 50 represents the "normal" color, while 100% or 100 is white
   and 0% or 0 is black.

   For historical reasons, if the saturation is less than 0% it is
   clamped to 0% at parsed-value time, before being converted to an sRGB
   color.

   Tests

   -  `t424-hsl-clip-outside-gamut-b.xht <https://wpt.fyi/results/css/css-color/t424-hsl-clip-outside-gamut-b.xht>`__
      `(live
      test) <http://wpt.live/css/css-color/t424-hsl-clip-outside-gamut-b.xht>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/t424-hsl-clip-outside-gamut-b.xht>`__

   The final argument specifies the alpha channel of the color. It’s
   interpreted identically to the fourth argument of the
   `rgb() <#funcdef-rgb>`__ function. If omitted, it defaults to 100%.

   HSL colors resolve to sRGB.

   If the saturation of an HSL color is 0% or 0, then the hue component
   is `powerless <#powerless-color-component>`__.

   .. container:: example
      :name: ex-hsl-primary-red

      ` <#ex-hsl-primary-red>`__ For example, an ordinary red, the same
      color you would see from the keyword  `red <#valdef-color-red>`__
      or the hex notation  #f00, is represented in HSL as  hsl(0deg 100%
      50%).

   An advantage of HSL over RGB is that it is more intuitive: people can
   guess at the colors they want, and then tweak.

   .. container:: example
      :name: ex-hsl-tweak

      ` <#ex-hsl-tweak>`__ For example, the following colors can all be
      generated off of the basic "green" hue, just by varying the other
      two arguments:
      .. code:: lang-css

         hsl(120deg 100% 50%) lime green
         hsl(120deg 100% 25%) dark green
         hsl(120deg 100% 75%) light green
         hsl(120deg 75% 85%)  pastel green

   A disadvantage of HSL over Oklch is that hue manipulation changes the
   visual lightness, and that hues are not evenly spaced apart.

   It is thus easier in HSL to create sets of matching colors (by
   keeping the hue the same and varying the saturation and lightness),
   compared to manipulating the sRGB component values; however, because
   the lightness is simply the mean of the gamma-corrected red, green
   and blue components it does not correspond to the visual perception
   of lightness across hues.

   .. container:: example
      :name: ex-hsl-sucks

      ` <#ex-hsl-sucks>`__ For example,  `blue <#valdef-color-blue>`__
      is represented in HSL as  hsl(240deg 100% 50%) while
       `yellow <#valdef-color-yellow>`__ is  hsl(60deg 100% 50%). Both
      have an HSL Lightness of 50%, but clearly the yellow looks much
      lighter than the blue.
      In Oklch, sRGB blue is  oklch(0.452 0.313 264.1) while sRGB yellow
      is  oklch(0.968 0.211 109.8). The Oklch Lightnesses of 0.452 and
      0.968 clearly reflect the visual lightnesses of the two colors.

   The hue angle in HSL is not perceptually uniform; colors appear
   bunched up in some areas and widely spaced in others.

   .. container:: example
      :name: ex-hsl-sucks-more

      ` <#ex-hsl-sucks-more>`__ For example, the pair of hues
       hsl(220deg 100% 50%) and  hsl(250deg 100% 50%) have an HSL hue
      difference of 250-220 = **30**\ deg and look fairly similar, while
      another pair of colors  hsl(50deg 100% 50%) and  hsl(80deg 100%
      50%), which *also* have a hue difference of 80-50 = **30**\ deg,
      look very different.
      In Oklch, the same pair of colors  oklch(0.533 0.26 262.6) and
       oklch(0.462 0.306 268.9) have a hue difference of 268.9 - 262.6 =
      **6.3**\ deg while the second pair  oklch(0.882 0.181 94.24) and
       oklch(0.91 0.245 129.9) have a hue difference of 129.9 - 94.24 =
      **35.66**\ deg, correctly reflecting the visual separation of
      hues.

   For historical reasons, `hsl() <#funcdef-hsl>`__ and
   `hsla() <#funcdef-hsla>`__ also support a `legacy color
   syntax <#legacy-color-syntax>`__.

   Tests

   -  `hsla-001.html <https://wpt.fyi/results/css/css-color/hsla-001.html>`__
      `(live test) <http://wpt.live/css/css-color/hsla-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsla-001.html>`__
   -  `hsla-002.html <https://wpt.fyi/results/css/css-color/hsla-002.html>`__
      `(live test) <http://wpt.live/css/css-color/hsla-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsla-002.html>`__
   -  `hsla-003.html <https://wpt.fyi/results/css/css-color/hsla-003.html>`__
      `(live test) <http://wpt.live/css/css-color/hsla-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsla-003.html>`__
   -  `hsla-004.html <https://wpt.fyi/results/css/css-color/hsla-004.html>`__
      `(live test) <http://wpt.live/css/css-color/hsla-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsla-004.html>`__
   -  `hsla-005.html <https://wpt.fyi/results/css/css-color/hsla-005.html>`__
      `(live test) <http://wpt.live/css/css-color/hsla-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsla-005.html>`__
   -  `hsla-006.html <https://wpt.fyi/results/css/css-color/hsla-006.html>`__
      `(live test) <http://wpt.live/css/css-color/hsla-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsla-006.html>`__
   -  `hsla-007.html <https://wpt.fyi/results/css/css-color/hsla-007.html>`__
      `(live test) <http://wpt.live/css/css-color/hsla-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsla-007.html>`__
   -  `hsla-008.html <https://wpt.fyi/results/css/css-color/hsla-008.html>`__
      `(live test) <http://wpt.live/css/css-color/hsla-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hsla-008.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

/7.1. Converting HSL Colors to sRGB
-----------------------------------

   .. .. rubric:: 7.1. Converting HSL Colors to sRGB\ ` <#hsl-to-rgb>`__
      :name: hsl-to-rgb
      :class: heading settled

   Converting an HSL color to sRGB is straightforward mathematically.
   Here’s a sample implementation of the conversion algorithm in
   JavaScript. It returns an array of three numbers representing the
   red, green, and blue channels of the colors, normalized to the range
   [0, 1].

   This code assumes that *parse-time* clamping of negative saturation
   has already been applied.

   .. code:: include-code

      /**
       * @param {number} hue - Hue as degrees 0..360
       * @param {number} sat - Saturation in reference range [0,100]
       * @param {number} light - Lightness in reference range [0,100]
       * @return {number[]} Array of RGB components 0..1
       */
      function hslToRgb(hue, sat, light) {
          hue = hue % 360;

          if (hue < 0) {
              hue += 360;
          }

          sat /= 100;
          light /= 100;

          function f(n) {
              let k = (n + hue/30) % 12;
              let a = sat * Math.min(light, 1 - light);
              return light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
          }

          return [f(0), f(8), f(4)];
      }

/7.2. Converting sRGB Colors to HSL
-----------------------------------

   .. .. rubric:: 7.2. Converting sRGB Colors to HSL\ ` <#rgb-to-hsl>`__
      :name: rgb-to-hsl
      :class: heading settled

   Conversion in the reverse direction proceeds similarly.

   Special care is taken to deal with intermediate negative values of
   saturation, which can be produced by colors far outside the sRGB
   gamut.

   .. code:: include-code

      /**
       * @param {number} red - Red component 0..1
       * @param {number} green - Green component 0..1
       * @param {number} blue - Blue component 0..1
       * @return {number[]} Array of HSL values: Hue as degrees 0..360, Saturation and Lightness in reference range [0,100]
       */
      function rgbToHsl (red, green, blue) {
          let max = Math.max(red, green, blue);
          let min = Math.min(red, green, blue);
          let [hue, sat, light] = [NaN, 0, (min + max)/2];
          let d = max - min;

          if (d !== 0) {
              sat = (light === 0 || light === 1)
                  ? 0
                  : (max - light) / Math.min(light, 1 - light);

              switch (max) {
                  case red:   hue = (green - blue) / d + (green < blue ? 6 : 0); break;
                  case green: hue = (blue - red) / d + 2; break;
                  case blue:  hue = (red - green) / d + 4;
              }

              hue = hue * 60;
          }

          // Very out of gamut colors can produce negative saturation
          // If so, just rotate the hue by 180 and use a positive saturation
          // see https://github.com/w3c/csswg-drafts/issues/9222
          if (sat < 0) {
              hue += 180;
              sat = Math.abs(sat);
          }

          if (hue >= 360) {
              hue -= 360;
          }

          return [hue, sat * 100, light * 100];
      }

/7.3. Examples of HSL Colors
----------------------------

   .. .. rubric:: 7.3. Examples of HSL Colors\ ` <#hsl-examples>`__
      :name: hsl-examples
      :class: heading settled

   *This section is not normative.*

   Tests
   This section is not normative, it does not need tests.

   --------------

   The tables below illustrate a wide range of possible HSL colors. Each
   table represents one hue, selected at 30° intervals, to illustrate
   the common "core" hues: red, yellow, green, cyan, blue, magenta, and
   the six intermediary colors between these.

   In each table, the X axis represents the saturation while the Y axis
   represents the lightness.

   .. container:: color-table
      :name: hsltable

      0° Reds
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      30° Reds-Yellows (=Oranges)
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      60° Yellows
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      90° Yellow-Greens
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      120° Greens
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      150° Green-Cyans
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      180° Cyans
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      210° Cyan-Blues
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      240° blues
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      270° Blue-Magentas
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      300° Magentas
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%
      330° Magenta-Reds
      100%
      80%
      60%
      40%
      20%
      0%
      100%
      90%
      80%
      70%
      60%
      50%
      40%
      30%
      20%
      10%
      0%

/8. HWB Colors: `hwb()`
-----------------------

   .. .. rubric:: 8. HWB Colors: `hwb() <#funcdef-hwb>`__
      function\ ` <#the-hwb-notation>`__
      :name: the-hwb-notation
      :class: heading settled

   HWB (short for Hue-Whiteness-Blackness) `[HWB] <#biblio-hwb>`__ is
   another method of specifying sRGB colors, similar to
   `HSL <#valdef-hsl-hsl>`__', but often even easier for humans to work
   with. It describes colors with a starting hue, then a degree of
   whiteness and blackness to mix into that base hue.

   Many color-pickers are based on the HWB color system, due to its
   intuitiveness.

   HWB colors resolve to sRGB.

   .. figure:: images/color-picker.png
      :width: 545px
      :height: 309px

      This is a screenshot of Chrome’s color picker, shown when a user
      activates an ``<input type="color">``. The outer wheel is used to
      select the hue, then the relative amounts of white and black are
      selected by clicking on the inner triangle.

   The syntax of the `hwb() <#funcdef-hwb>`__ function is:

   .. code:: prod

      hwb() = hwb( 
        [<hue> | none] 
        [<percentage> | <number> | none] 
        [<percentage> | <number> | none] 
        [ / [<alpha-value> | none] ]? )

   Percentages
   Allowed for W and B
   Percent reference range 
   for W and B: 0% = 0.0, 100% = 100.0
   The first argument specifies the hue, and is interpreted identically
   to `hsl() <#funcdef-hsl>`__; this means it `suffers the same
   disadvantages <#disadvantage-hsl>`__ such as hue uniformity.

   The second argument specifies the amount of white to mix in, as a
   percentage from 0% (no whiteness) to 100% (full whiteness).
   Similarly, the third argument specifies the amount of black to mix
   in, also from 0% (no blackness) to 100% (full blackness).

   .. container:: example
      :name: ex-hwb-simple

      ` <#ex-hwb-simple>`__ For example,  hwb(150 20% 10%) is the same
      color as  hsl(150 77.78% 55%) and  rgb(20% 90% 55%).

   Values outside of these ranges are not invalid; hue angles outside
   the range [0,360) will be normalized to that range and values of
   white and black which sum to 100% or greater will produce achromatic
   colors as described below.

   The resulting color can be thought of conceptually as a mixture of
   paint in the chosen hue, white paint, and black paint, with the
   relative amounts of each determined by the percentages.

   If the sum white+black is greater than or equal to 100%, it defines
   an achromatic color, i.e. a shade of gray; when converted to sRGB the
   R, G and B values are identical and have the value white / (white +
   black).

   .. container:: example
      :name: ex-hwb-achromatic

      ` <#ex-hwb-achromatic>`__ For example, in the color  hwb(45 40%
      80%) white and black adds to 120, so this is an achromatic color
      whose R, G and B components are 40 / 40 + 80 = 0.33  rgb(33.33%
      33.33% 33.33%).

   Achromatic HWB colors no longer contain any hint of the chosen hue.
   In this case, the hue component is
   `powerless <#powerless-color-component>`__.

   The fourth argument specifies the alpha channel of the color. It’s
   interpreted identically to the fourth argument of the
   `rgb() <#funcdef-rgb>`__ function. If omitted, it defaults to 100%.

   There is no Web compatibility issue with `hwb <#valdef-hwb-hwb>`__,
   which is new in this level of the specification, and so
   `hwb() <#funcdef-hwb>`__ does *not* support a `legacy color
   syntax <#legacy-color-syntax>`__ that separates all of its arguments
   with commas. Using commas inside hwb() is an error.

   Tests

   -  `hwb-001.html <https://wpt.fyi/results/css/css-color/hwb-001.html>`__
      `(live test) <http://wpt.live/css/css-color/hwb-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hwb-001.html>`__
   -  `hwb-002.html <https://wpt.fyi/results/css/css-color/hwb-002.html>`__
      `(live test) <http://wpt.live/css/css-color/hwb-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hwb-002.html>`__
   -  `hwb-003.html <https://wpt.fyi/results/css/css-color/hwb-003.html>`__
      `(live test) <http://wpt.live/css/css-color/hwb-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hwb-003.html>`__
   -  `hwb-004.html <https://wpt.fyi/results/css/css-color/hwb-004.html>`__
      `(live test) <http://wpt.live/css/css-color/hwb-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hwb-004.html>`__
   -  `hwb-005.html <https://wpt.fyi/results/css/css-color/hwb-005.html>`__
      `(live test) <http://wpt.live/css/css-color/hwb-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/hwb-005.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__
   -  `color-computed-hwb.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-hwb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-hwb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-hwb.html>`__
   -  `color-invalid-hwb.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-hwb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-hwb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-hwb.html>`__
   -  `color-valid-hwb.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-hwb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-hwb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-hwb.html>`__

/8.1. Converting HWB Colors to sRGB
-----------------------------------

   .. .. rubric:: 8.1. Converting HWB Colors to sRGB\ ` <#hwb-to-rgb>`__
      :name: hwb-to-rgb
      :class: heading settled

   Converting an HWB color to sRGB is straightforward, and related to
   how one converts HSL to RGB. The following Javascript implementation
   of the algorithm first normalizes the white and black components, so
   their sum is no larger than 100%.

   .. code:: include-code

      /**
       * @param {number} hue -  Hue as degrees 0..360
       * @param {number} white -  Whiteness in reference range [0,100]
       * @param {number} black -  Blackness in reference range [0,100]
       * @return {number[]} Array of RGB components 0..1
       */
      function hwbToRgb(hue, white, black) {
          white /= 100;
          black /= 100;
          if (white + black >= 1) {
              let gray = white / (white + black);
              return [gray, gray, gray];
          }
          let rgb = hslToRgb(hue, 100, 50);
          for (let i = 0; i < 3; i++) {
              rgb[i] *= (1 - white - black);
              rgb[i] += white;
          }
          return rgb;
      }

/8.2. Converting sRGB Colors to HWB
-----------------------------------

   .. .. rubric:: 8.2. Converting sRGB Colors to HWB\ ` <#rgb-to-hwb>`__
      :name: rgb-to-hwb
      :class: heading settled

   Conversion in the reverse direction proceeds similarly.

   .. code:: include-code

      /**
       * @param {number} red - Red component 0..1
       * @param {number} green - Green component 0..1
       * @param {number} blue - Blue component 0..1
       * @return {number[]} Array of HWB values: Hue as degrees 0..360, Whiteness and Blackness in reference range [0,100]
       */
      function rgbToHwb(red, green, blue) {
          var hsl = rgbToHsl(red, green, blue);
          var white = Math.min(red, green, blue);
          var black = 1 - Math.max(red, green, blue);
          return([hsl[0], white*100, black*100]);
      }

/8.3. Examples of HWB Colors
----------------------------

   .. .. rubric:: 8.3. Examples of HWB Colors\ ` <#hwb-examples>`__
      :name: hwb-examples
      :class: heading settled

   *This section is not normative.*

   Tests
   This section is not normative, it does not need tests.

   --------------

   .. container:: color-table

      0° Reds
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      30° Red-Yellows (Oranges)
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      60° Yellows
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      90° Yellow-Greens
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      120° Greens
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      150° Green-Cyans
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      180° Cyans
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      210° Cyan-Blues
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      240° Blues
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      270° Blue-Magentas
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      300° Magentas
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%
      330° Magenta-Reds
      W\\B
      0%
      20%
      40%
      60%
      80%
      100%
      0%
      20%
      40%
      60%
      80%
      100%

/9. Device-independent Colors: CIE Lab and LCH, Oklab and
---------------------------------------------------------

   .. .. rubric:: 9. Device-independent Colors: CIE Lab and LCH, Oklab and
      Oklch\ ` <#lab-colors>`__
      :name: lab-colors
      :class: heading settled

/9.1. CIE Lab and LCH
---------------------

   .. .. rubric:: 9.1. CIE Lab and LCH\ ` <#cie-lab>`__
      :name: cie-lab
      :class: informative heading settled

   *This section is not normative.*

   Tests
   This section is not normative, it does not need tests.

   --------------

   Physical measurements of a color are typically expressed in the CIE
   L*a*b\* `[CIELAB] <#biblio-cielab>`__ color space, created in 1976 by
   the CIE and commonly referred to simply as Lab. Color conversions
   from one device to another may also use Lab as an intermediate step.
   Derived from human vision experiments, Lab represents the entire
   range of color that humans can see.

   Lab is a rectangular coordinate system with a central Lightness (L)
   axis. This value is usually written as a unitless number; for
   compatibility with the rest of CSS, it may also be written as a
   percentage. 100% means an L value of 100, not 1.0. L=0% or 0 is deep
   black (no light at all) while L=100% or 100 is a diffuse white.

   Usefully, L=50% or 50 is mid gray, by design, and equal increments in
   L are evenly spaced visually: the Lab color space is intended to be
   *perceptually uniform*.

   .. container:: float
      :name: lightness-vs-luminance

      |image1| |image2|

   The a and b axes convey hue; positive values along the a axis are a
   purplish red while negative values are the complementary color, a
   green. Similarly, positive values along the b axis are yellow and
   negative are the complementary blue/violet. Desaturated colors have
   small values of a and b and are close to the L axis; saturated colors
   lie far from the L axis.

   The illuminant is `D50 <#d50-whitepoint>`__ white, a standardized
   daylight spectrum with a color temperature of 5000K, as reflected by
   a perfect diffuse reflector; it approximates the color of sunlight on
   a sunny day. D50 is also the whitepoint used for the profile
   connection space in ICC color interconversion, the whitepoint used in
   image editors which offer Lab editing, and the value used by physical
   measurement devices such as spectrophotometers and
   spectroradiometers, when they report measured colors in Lab.

   Conversion from colors specified using other white points is called a
   chromatic adaptation transform, which models the changes in the human
   visual system as we adapt to a new lighting condition. The linear
   Bradford algorithm `[ICC] <#biblio-icc>`__ (a simplification of the
   original Bradford algorithm
   `[Bradford-CAT] <#biblio-bradford-cat>`__) is the industry standard
   chromatic adaptation transform, and is easy to calculate as it is a
   simple matrix multiplication.

   CIE LCH has the same L axis as Lab, but uses polar coordinates C
   (chroma) and H (hue), making it a polar, cylindrical coordinate
   system. C is the geometric distance from the L axis and H is the
   angle from the positive a axis, towards the positive b axis.

   .. figure:: images/CH-plane-wheel.svg
      :width: 500px
      :height: 500px

      This figure shows the L=50 plane of the CIE Lab color space. 20
      degree increments in CIE LCH are displayed as circles at three
      levels of Chroma: 20, 40 and 60. All the 20 Chroma colors fit
      inside sRGB gamut, some of 40 and 60 Chroma are outside. These out
      of gamut colors are visualized as grey, with a red warning outer
      stroke.

   Note: The L axis in Lab and LCH is not to be confused with the L axis
   in HSL. For example, in HSL, the sRGB colors blue (#00F) and yellow
   (#FF0) have the same value of L (50%) even though visually, blue is
   much darker. This is much clearer in Lab: sRGB blue is lab(29.567%
   68.298 -112.0294) while sRGB yellow is lab(97.607% -15.753 93.388).
   In Lab and LCH, if two colors have the same measured L value, they
   have identical visual lightness. HSL and related polar RGB models
   were developed in an attempt to give similar usability benefits for
   RGB that LCH gave to Lab, but are significantly less accurate.

   Although the use of CIE Lab and LCH is widespread, it is known to
   have some problems. In particular:

   Hue linearity
      In the blue region (LCH Hue between 270° and 330°), visual hue
      departs from what LCH predicts. Plotting a set of blues of the
      same hue and differing Chroma, which should lie on a straight line
      from the neutral axis, instead form a curve. Put another way, as a
      saturated blue has it’s Chroma progressively reduced, it becomes
      noticeably purple.
   Hue uniformity
      While hues in LCH are in general evenly spaced, (and far better
      than HSL or HWB), uniformity is not perfect.
   Over-prediction of high Chroma differences
      For high Chroma colors, changes in Chroma are less noticeable than
      for more neutral colors.

   These deficiencies affect, for example, creation of evenly spaced
   gradients, gamut mapping from one color space to a smaller one, and
   computation of the visual difference between two colors.

   To compensate for this, formulae to predict the visual difference
   between two colors (delta E) have been made more accurate over time
   (but also, much more complex to compute). The current industry
   standard formula, delta E 2000, works well to mitigate some of the
   Lab and LCH problems. A sample implementation is given in `§ 18.1
   ΔE2000 <#color-difference-2000>`__.

   This does not help with hue curvature, however.

/9.2. Oklab and Oklch
---------------------

   .. .. rubric:: 9.2. Oklab and Oklch\ ` <#ok-lab>`__
      :name: ok-lab
      :class: informative heading settled

   *This section is not normative.*

   Tests
   This section is not normative, it does not need tests.

   --------------

   Recently, Oklab, an improved Lab-like space has been developed
   `[Oklab] <#biblio-oklab>`__. The corresponding polar form is called
   Oklch. It was produced by numerical optimization of a large dataset
   of visually similar colors, and has improved hue linearity, hue
   uniformity, and chroma uniformity compared to CIE LCH.

   Like CIE Lab, there is a central lightness L axis which is usually
   written as a unitless number in the range [0,1]; for compatibility
   with the rest of CSS, it may be written as a percentage. 100% means
   an L value of 1.0. L=0% or 0.0 is deep black (no light at all) while
   L=100% or 1.0 is a diffuse white.

   Note: Unlike CIE Lab, which assumes adaptation to the diffuse white,
   Oklab assumes adaptation to the color being defined, which is
   intended to make it scale invariant.

   As with CIE Lab, the a and b axes convey hue; positive values along
   the a axis are a purplish red while negative values are the
   complementary color, a green. Similarly, positive values along the b
   axis are yellow and negative are the complementary blue/violet.

   The illuminant is `D65 <#d65-whitepoint>`__, the same white point as
   most RGB color spaces.

   Oklch has the same L axis as Oklab, but uses polar coordinates C
   (chroma) and H (hue).

   Note: Unlike CIE LCH, where Chroma can reach values of 200 or more,
   Oklch Chroma ranges to 0.5 or so. The hue angles between CIE LCH and
   Oklch are broadly similar, but not identical.

   .. figure:: images/CIELCH-blue-slice.png
      name: CIELCH-blue-hueshift
      :alt: diagram showing purpling in CIE LCH
      :width: 2434px
      :height: 1848px

      A constant CIE LCH hue slice, showing the sRGB gamut around
      primary blue. A noticeable purpling is immediately evident.

   .. figure:: images/OKLCH-blue-slice.png
      name: Oklch-blue-no-hueshift
      :alt: diagram showing hue constancy in Oklch
      :width: 2485px
      :height: 1824px

      A constant Oklch hue slice, showing the sRGB gamut around primary
      blue. The visual hue remains constant.

   Because Oklab is more perceptually uniform than CIE Lab, the color
   difference is a straightforward distance in 3D space (root sum of
   squares). Although trivial, a sample implementation is give in
   `§ 18.2 ΔEOK <#color-difference-OK>`__.

/9.3. Specifying Lab and LCH: the `lab()`
-----------------------------------------

   .. .. rubric:: 9.3. Specifying Lab and LCH: the `lab() <#funcdef-lab>`__
      and `lch() <#funcdef-lch>`__ functional
      notations\ ` <#specifying-lab-lch>`__
      :name: specifying-lab-lch
      :class: heading settled

   CSS allows colors to be directly expressed in Lab and LCH.

   .. code:: prod

      lab() = lab( [<percentage> | <number> | none]
            [ <percentage> | <number> | none]
            [ <percentage> | <number> | none]
            [ / [<alpha-value> | none] ]? )

   Percentages
   Allowed for L, a and b
   Percent reference range 
   for L: 0% = 0.0, 100% = 100.0
   for a and b: -100% = -125, 100% = 125
   Tests

   -  `lab-001.html <https://wpt.fyi/results/css/css-color/lab-001.html>`__
      `(live test) <http://wpt.live/css/css-color/lab-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-001.html>`__
   -  `lab-002.html <https://wpt.fyi/results/css/css-color/lab-002.html>`__
      `(live test) <http://wpt.live/css/css-color/lab-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-002.html>`__
   -  `lab-003.html <https://wpt.fyi/results/css/css-color/lab-003.html>`__
      `(live test) <http://wpt.live/css/css-color/lab-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-003.html>`__
   -  `lab-004.html <https://wpt.fyi/results/css/css-color/lab-004.html>`__
      `(live test) <http://wpt.live/css/css-color/lab-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-004.html>`__
   -  `lab-005.html <https://wpt.fyi/results/css/css-color/lab-005.html>`__
      `(live test) <http://wpt.live/css/css-color/lab-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-005.html>`__
   -  `lab-006.html <https://wpt.fyi/results/css/css-color/lab-006.html>`__
      `(live test) <http://wpt.live/css/css-color/lab-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-006.html>`__
   -  `lab-007.html <https://wpt.fyi/results/css/css-color/lab-007.html>`__
      `(live test) <http://wpt.live/css/css-color/lab-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-007.html>`__
   -  `lab-008.html <https://wpt.fyi/results/css/css-color/lab-008.html>`__
      `(live test) <http://wpt.live/css/css-color/lab-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-008.html>`__
   -  `lab-l-over-100-1.html <https://wpt.fyi/results/css/css-color/lab-l-over-100-1.html>`__
      `(live
      test) <http://wpt.live/css/css-color/lab-l-over-100-1.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-l-over-100-1.html>`__
   -  `lab-l-over-100-2.html <https://wpt.fyi/results/css/css-color/lab-l-over-100-2.html>`__
      `(live
      test) <http://wpt.live/css/css-color/lab-l-over-100-2.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lab-l-over-100-2.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__
   -  `color-computed-lab.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-lab.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-lab.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-lab.html>`__
   -  `color-invalid-lab.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-lab.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-lab.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-lab.html>`__
   -  `color-valid-lab.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-lab.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-lab.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-lab.html>`__

   In Lab, the first argument specifies the CIE Lightness, L. This is a
   number between 0% or 0 and 100% or 100 Values less than 0% or 0 must
   be clamped to 0% at parsed-value time; values greater than 100% or
   100 are clamped to 100% at parsed-value time.

   The second and third arguments are the distances along the "a" and
   "b" axes in the Lab color space, as described in the previous
   section. These values are signed (allow both positive and negative
   values) and theoretically unbounded (but in practice do not exceed
   ±160).

   There is an optional fourth
   `<alpha-value> <#typedef-color-alpha-value>`__ component, separated
   by a slash, representing the `alpha component <#alpha-channel>`__.

   If the lightness of a Lab color (after clamping) is 0%, or 100% the
   color will be displayed as black, or white, respectively due to gamut
   mapping to the display.

   .. container:: example
      :name: ex-lab-samples

      ` <#ex-lab-samples>`__
      .. code:: lang-css

          lab(29.2345% 39.3825 20.0664);
          lab(52.2345 40.1645 59.9971);
          lab(60.2345 -5.3654 58.956);
          lab(62.2345% -34.9638 47.7721);
          lab(67.5345 -8.6911 -41.6019);
          lab(29.69% 44.888% -29.04%)

   .. code:: prod

      lch() = lch( [<percentage> | <number> | none]
            [ <percentage> | <number> | none]
            [ <hue> | none]
            [ / [<alpha-value> | none] ]? )

   Percentages
   Allowed for L and C
   Percent reference range 
   for L: 0% = 0.0, 100% = 100.0
   for C: 0% = 0, 100% = 150
   Tests

   -  `lch-001.html <https://wpt.fyi/results/css/css-color/lch-001.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-001.html>`__
   -  `lch-002.html <https://wpt.fyi/results/css/css-color/lch-002.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-002.html>`__
   -  `lch-003.html <https://wpt.fyi/results/css/css-color/lch-003.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-003.html>`__
   -  `lch-004.html <https://wpt.fyi/results/css/css-color/lch-004.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-004.html>`__
   -  `lch-005.html <https://wpt.fyi/results/css/css-color/lch-005.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-005.html>`__
   -  `lch-006.html <https://wpt.fyi/results/css/css-color/lch-006.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-006.html>`__
   -  `lch-007.html <https://wpt.fyi/results/css/css-color/lch-007.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-007.html>`__
   -  `lch-008.html <https://wpt.fyi/results/css/css-color/lch-008.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-008.html>`__
   -  `lch-009.html <https://wpt.fyi/results/css/css-color/lch-009.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-009.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-009.html>`__
   -  `lch-010.html <https://wpt.fyi/results/css/css-color/lch-010.html>`__
      `(live test) <http://wpt.live/css/css-color/lch-010.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-010.html>`__
   -  `lch-l-over-100-1.html <https://wpt.fyi/results/css/css-color/lch-l-over-100-1.html>`__
      `(live
      test) <http://wpt.live/css/css-color/lch-l-over-100-1.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-l-over-100-1.html>`__
   -  `lch-l-over-100-2.html <https://wpt.fyi/results/css/css-color/lch-l-over-100-2.html>`__
      `(live
      test) <http://wpt.live/css/css-color/lch-l-over-100-2.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/lch-l-over-100-2.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

   In CIE LCH the first argument specifies the CIE Lightness L,
   interpreted identically to the Lightness argument of
   `lab() <#funcdef-lab>`__.

   The second argument is the chroma C, (roughly representing the
   "amount of color"). Its minimum useful value is 0, while its maximum
   is theoretically unbounded (but in practice does not exceed 230). If
   the provided value is negative, it is clamped to 0 at parsed-value
   time.

   The third argument is the hue angle H. It’s interpreted similarly to
   the `<hue> <#typedef-hue>`__ argument of `hsl() <#funcdef-hsl>`__,
   but doesn’t map hues to angles in the same way because they are
   evenly spaced perceptually. Instead, 0deg points along the positive
   "a" axis (toward purplish red), (as does 360deg, 720deg, etc.); 90deg
   points along the positive "b" axis (toward mustard yellow), 180deg
   points along the negative "a" axis (toward greenish cyan), and 270deg
   points along the negative "b" axis (toward sky blue).

   There is an optional fourth
   `<alpha-value> <#typedef-color-alpha-value>`__ component, separated
   by a slash, representing the `alpha component <#alpha-channel>`__.

   If the chroma of an LCH color is 0%, the hue component is
   `powerless <#powerless-color-component>`__. If the lightness of an
   LCH color (after clamping) is 0%, or 100%, the color will be
   displayed as black, or white, respectively due to gamut mapping to
   the display.

   .. container:: example
      :name: ex-lch-samples

      ` <#ex-lch-samples>`__
      .. code:: lang-css

          lch(29.2345% 44.2 27);
          lch(52.2345% 72.2 56.2);
          lch(60.2345 59.2 95.2);
          lch(62.2345% 59.2 126.2);
          lch(67.5345% 42.5 258.2);
          lch(29.69% 45.553% 327.1)

   There is no Web compatibility issue with `lab <#valdef-lab-lab>`__ or
   `lch <#valdef-lch-lch>`__', which are new in this level of the
   specification, and so `lab() <#funcdef-lab>`__ and
   `lch() <#funcdef-lch>`__ do *not* support a `legacy color
   syntax <#legacy-color-syntax>`__ that separates all of their
   arguments with commas. Using commas inside these functions is an
   error.

/9.4. Specifying Oklab and Oklch: the
-------------------------------------

   .. .. rubric:: 9.4. Specifying Oklab and Oklch: the
      `oklab() <#funcdef-oklab>`__ and `oklch() <#funcdef-oklch>`__
      functional notations\ ` <#specifying-oklab-oklch>`__
      :name: specifying-oklab-oklch
      :class: heading settled

   CSS allows colors to be directly expressed in Oklab and Oklch.

   .. code:: prod

      oklab() = oklab( [ <percentage> | <number> | none]
          [ <percentage> | <number> | none]
          [ <percentage> | <number> | none]
          [ / [<alpha-value> | none] ]? )

   Percentages
   Allowed for L, a and b
   Percent reference range 
   for L: 0% = 0.0, 100% = 1.0
   for a and b: -100% = -0.4, 100% = 0.4
   Tests

   -  `oklab-001.html <https://wpt.fyi/results/css/css-color/oklab-001.html>`__
      `(live test) <http://wpt.live/css/css-color/oklab-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-001.html>`__
   -  `oklab-002.html <https://wpt.fyi/results/css/css-color/oklab-002.html>`__
      `(live test) <http://wpt.live/css/css-color/oklab-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-002.html>`__
   -  `oklab-003.html <https://wpt.fyi/results/css/css-color/oklab-003.html>`__
      `(live test) <http://wpt.live/css/css-color/oklab-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-003.html>`__
   -  `oklab-004.html <https://wpt.fyi/results/css/css-color/oklab-004.html>`__
      `(live test) <http://wpt.live/css/css-color/oklab-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-004.html>`__
   -  `oklab-005.html <https://wpt.fyi/results/css/css-color/oklab-005.html>`__
      `(live test) <http://wpt.live/css/css-color/oklab-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-005.html>`__
   -  `oklab-006.html <https://wpt.fyi/results/css/css-color/oklab-006.html>`__
      `(live test) <http://wpt.live/css/css-color/oklab-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-006.html>`__
   -  `oklab-007.html <https://wpt.fyi/results/css/css-color/oklab-007.html>`__
      `(live test) <http://wpt.live/css/css-color/oklab-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-007.html>`__
   -  `oklab-008.html <https://wpt.fyi/results/css/css-color/oklab-008.html>`__
      `(live test) <http://wpt.live/css/css-color/oklab-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-008.html>`__
   -  `oklab-009.html <https://wpt.fyi/results/css/css-color/oklab-009.html>`__
      `(live test) <http://wpt.live/css/css-color/oklab-009.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-009.html>`__
   -  `oklab-l-over-1-1.html <https://wpt.fyi/results/css/css-color/oklab-l-over-1-1.html>`__
      `(live
      test) <http://wpt.live/css/css-color/oklab-l-over-1-1.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-l-over-1-1.html>`__
   -  `oklab-l-over-1-2.html <https://wpt.fyi/results/css/css-color/oklab-l-over-1-2.html>`__
      `(live
      test) <http://wpt.live/css/css-color/oklab-l-over-1-2.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklab-l-over-1-2.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

   In Oklab the first argument specifies the Oklab Lightness. This is a
   number between 0% or 0 and 100% or 1.0.

   Values less than 0% or 0.0 must be clamped to 0% at parsed-value
   time; values greater than 100% or 1.0 are clamped to 100% at
   parsed-value time.

   The second and third arguments are the distances along the "a" and
   "b" axes in the Oklab color space, as described in the previous
   section. These values are signed (allow both positive and negative
   values) and theoretically unbounded (but in practice do not exceed
   ±0.5).

   There is an optional fourth
   `<alpha-value> <#typedef-color-alpha-value>`__ component, separated
   by a slash, representing the `alpha component <#alpha-channel>`__.

   If the lightness of an Oklab color is 0% or 0, or 100% or 1.0, the
   color will be displayed as black, or white, respectively due to gamut
   mapping to the display.

   .. container:: example
      :name: ex-oklab-samples

      ` <#ex-oklab-samples>`__
      .. code:: lang-css

          oklab(40.101% 0.1147 0.0453);
          oklab(59.686% 0.1009 0.1192);
          oklab(0.65125 -0.0320 0.1274);
          oklab(66.016% -0.1084 0.1114);
          oklab(72.322% -0.0465 -0.1150);
          oklab(42.1% 41% -25%)

   .. code:: prod

      oklch() = oklch( [ <percentage> | <number> | none]
            [ <percentage> | <number> | none]
            [ <hue> | none]
            [ / [<alpha-value> | none] ]? )

   Percentages
   Allowed for L and C
   Percent reference range 
   for L: 0% = 0.0, 100% = 1.0
   for C: 0% = 0.0 100% = 0.4
   Tests

   -  `oklch-001.html <https://wpt.fyi/results/css/css-color/oklch-001.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-001.html>`__
   -  `oklch-002.html <https://wpt.fyi/results/css/css-color/oklch-002.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-002.html>`__
   -  `oklch-003.html <https://wpt.fyi/results/css/css-color/oklch-003.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-003.html>`__
   -  `oklch-004.html <https://wpt.fyi/results/css/css-color/oklch-004.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-004.html>`__
   -  `oklch-005.html <https://wpt.fyi/results/css/css-color/oklch-005.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-005.html>`__
   -  `oklch-006.html <https://wpt.fyi/results/css/css-color/oklch-006.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-006.html>`__
   -  `oklch-007.html <https://wpt.fyi/results/css/css-color/oklch-007.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-007.html>`__
   -  `oklch-008.html <https://wpt.fyi/results/css/css-color/oklch-008.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-008.html>`__
   -  `oklch-009.html <https://wpt.fyi/results/css/css-color/oklch-009.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-009.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-009.html>`__
   -  `oklch-010.html <https://wpt.fyi/results/css/css-color/oklch-010.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-010.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-010.html>`__
   -  `oklch-011.html <https://wpt.fyi/results/css/css-color/oklch-011.html>`__
      `(live test) <http://wpt.live/css/css-color/oklch-011.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-011.html>`__
   -  `oklch-l-over-1-1.html <https://wpt.fyi/results/css/css-color/oklch-l-over-1-1.html>`__
      `(live
      test) <http://wpt.live/css/css-color/oklch-l-over-1-1.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-l-over-1-1.html>`__
   -  `oklch-l-over-1-2.html <https://wpt.fyi/results/css/css-color/oklch-l-over-1-2.html>`__
      `(live
      test) <http://wpt.live/css/css-color/oklch-l-over-1-2.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/oklch-l-over-1-2.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

   In Oklch the first argument specifies the Oklch Lightness L,
   interpreted identically to the Lightness argument of
   `oklab() <#funcdef-oklab>`__.

   The second argument is the chroma C. Its minimum useful value is 0,
   while its maximum is theoretically unbounded (but in practice does
   not exceed 0.5). If the provided value is negative, it is clamped to
   0 at parsed-value time.

   The third argument is the hue angle H. It’s interpreted similarly to
   the `<hue> <#typedef-hue>`__ arguments of `hsl() <#funcdef-hsl>`__
   and `lch() <#funcdef-lch>`__, but doesn’t map hues to angles in the
   same way. 0deg points along the positive "a" axis (toward purplish
   red), (as does 360deg, 720deg, etc.); 90deg points along the positive
   "b" axis (toward mustard yellow), 180deg points along the negative
   "a" axis (toward greenish cyan), and 270deg points along the negative
   "b" axis (toward sky blue).

   There is an optional fourth
   `<alpha-value> <#typedef-color-alpha-value>`__ component, separated
   by a slash, representing the `alpha component <#alpha-channel>`__.

   If the chroma of an Oklch color is 0% or 0, the hue component is
   `powerless <#powerless-color-component>`__. If the lightness of an
   Oklch color is 0% or 0, or 100% or 1.0, the color will be displayed
   as black, or white, respectively due to gamut mapping to the display.

   .. container:: example
      :name: ex-oklch-samples

      ` <#ex-oklch-samples>`__
      .. code:: lang-css

          oklch(40.101% 0.12332 21.555);
          oklch(59.686% 0.15619 49.7694);
          oklch(0.65125 0.13138 104.097);
          oklch(0.66016 0.15546 134.231);
          oklch(72.322% 0.12403 247.996);
          oklch(42.1% 48.25% 328.4)

   There is no Web compatibility issue with
   `oklab <#valdef-oklab-oklab>`__ or `oklch <#valdef-oklch-oklch>`__',
   which are new in this level of the specification, and so
   `oklab() <#funcdef-oklab>`__ and `oklch() <#funcdef-oklch>`__ do
   *not* support a `legacy color syntax <#legacy-color-syntax>`__ that
   separates all of their arguments with commas. Using commas inside
   these functions is an error.

/9.5. Converting Lab or Oklab colors to LCH or Oklch
----------------------------------------------------

   .. .. rubric:: 9.5. Converting Lab or Oklab colors to LCH or Oklch
      colors\ ` <#lab-to-lch>`__
      :name: lab-to-lch
      :class: heading settled

   Conversion to the polar form is trivial:

   #. H = atan2(b, a)
   #. C = sqrt(a^2 + b^2)
   #. L is the same

   For extremely small values of a and b (near-zero Chroma), although
   the visual color does not change from being on the neutral axis,
   small changes to the values can result in the reported hue angle
   swinging about wildly and being essentially random. In CSS, this
   means the hue is `powerless <#powerless-color-component>`__, and
   treated as `missing <#missing-color-component>`__ when converted into
   LCH or Oklch; in non-CSS contexts this might be reflected as a
   missing value, such as NaN.

/9.6. Converting LCH or Oklch colors to Lab or Oklab
----------------------------------------------------

   .. .. rubric:: 9.6. Converting LCH or Oklch colors to Lab or Oklab
      colors\ ` <#lch-to-lab>`__
      :name: lch-to-lab
      :class: heading settled

   Conversion to the rectangular form is trivial:

   #. If H is missing, a = b = 0
   #. Otherwise,

      #. a = C cos(H)
      #. b = C sin(H)

   #. L is the same

/10. Predefined Color Spaces
----------------------------

   .. .. rubric:: 10. Predefined Color Spaces\ ` <#predefined>`__
      :name: predefined
      :class: heading settled

   CSS provides several predefined color spaces including
   `display-p3 <#valdef-color-display-p3>`__
   `[Display-P3] <#biblio-display-p3>`__, which is a wide gamut space
   typical of current wide-gamut monitors,
   `prophoto-rgb <#valdef-color-prophoto-rgb>`__, widely used by
   photographers and `rec2020 <#valdef-color-rec2020>`__
   `[Rec.2020] <#biblio-rec2020>`__, which is a broadcast industry
   standard, ultra-wide gamut space capable of representing almost all
   visible real-world colors.

/10.1. Specifying Predefined Colors: the
----------------------------------------

   .. .. rubric:: 10.1. Specifying Predefined Colors: the
      `color() <#funcdef-color>`__ function\ ` <#color-function>`__
      :name: color-function
      :class: heading settled

   The `color() <#funcdef-color>`__ function allows a color to be
   specified in a particular, specified `color space <#color-space>`__
   (rather than the implicit sRGB color space that most of the other
   color functions operate in). Its syntax is:

   .. code:: prod

      color() = color( <colorspace-params> [ / [ <alpha-value> | none ] ]? )
      <colorspace-params> = [ <predefined-rgb-params> | <xyz-params>]
      <predefined-rgb-params> = <predefined-rgb> [ <number> | <percentage> | none ]{3}
      <predefined-rgb> = srgb | srgb-linear | display-p3 | a98-rgb | prophoto-rgb | rec2020
      <xyz-params> = <xyz-space> [ <number> | <percentage> | none ]{3}
      <xyz-space> = xyz | xyz-d50 | xyz-d65

   Tests

   -  `color-computed-color-function.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-color-function.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-color-function.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-color-function.html>`__
   -  `color-invalid-color-function.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-color-function.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-color-function.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-color-function.html>`__
   -  `color-valid-color-function.html <https://wpt.fyi/results/css/css-color/parsing/color-valid-color-function.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid-color-function.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid-color-function.html>`__

   The color function takes parameters specifying a color, in an
   explicitly listed color space.

   It represents either an `invalid color <#invalid-color>`__, as
   described below, or a `valid color <#valid-color>`__.

   The parameters have the following form:

   -  An `<ident> <https://www.w3.org/TR/css-values-4/#typedef-ident>`__
      denoting one of the `predefined color spaces <#predefined>`__
      (such as `display-p3 <#valdef-color-display-p3>`__) Individual
      `predefined color spaces <#predefined>`__ may further restrict
      whether
      `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__\ s
      or
      `<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__\ s
      or both, may be used.

      If the
      `<ident> <https://www.w3.org/TR/css-values-4/#typedef-ident>`__
      names a non-existent color space (a name that does not match one
      of the `predefined color spaces <#predefined>`__), this argument
      represents an `invalid color <#invalid-color>`__.

   -  The three parameter values that the color space takes (RGB or XYZ
      values).

   An out of gamut color has component values less than 0 or 0%, or
   greater than 1 or 100%. These are not invalid, and are retained for
   intermediate computations; instead, for display, they are `css gamut
   mapped <#css-gamut-mapped>`__ using a relative colorimetric intent
   which brings the values (in the display color space) within the range
   0/0% to 1/100% at actual-value time.

   -  An optional slash-separated
      `<alpha-value> <#typedef-color-alpha-value>`__.

   Tests

   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

   There is no Web compatibility issue with
   `color() <#funcdef-color>`__, which is new in this level of the
   specification, and so color() does *not* support a `legacy color
   syntax <#legacy-color-syntax>`__ that separates all of its arguments
   with commas. Using commas inside this function is an error.

   A color which is either an `invalid color <#invalid-color>`__ or an
   `out of gamut <#out-of-gamut>`__ color can’t be displayed.

   If the specified color can be displayed, (that is, it isn’t an
   `invalid color <#invalid-color>`__ and isn’t `out of
   gamut <#out-of-gamut>`__) then this is the actual value of the
   `color() <#funcdef-color>`__ function.

   If the specified color is a `valid color <#valid-color>`__ but `can’t
   be displayed <#cant-be-displayed>`__, the actual value is derived
   from the specified color, `css gamut mapped <#css-gamut-mapped>`__
   for display.

   If the color is an `invalid color <#invalid-color>`__, the used value
   is `opaque black <#opaque-black>`__.

   .. container:: example
      :name: ex-2020-oog-p3

      ` <#ex-2020-oog-p3>`__ This very intense lime color is in-gamut
      for rec.2020:
      .. code:: lang-css

         color(rec2020 0.42053 0.979780 0.00579);

      in LCH, that color is

      .. code:: lang-css

         lch(86.6146% 160.0000 136.0088);

      in display-p3, that color is

      .. code:: lang-css

         color(display-p3 -0.6112 1.0079 -0.2192);

      and is out of gamut for display-p3 (red and blue are negative,
      green is greater than 1). If you have a display-p3 screen, that
      color is:

      -  *valid*
      -  *in gamut* (for rec.2020)
      -  *out of gamut* (for your display)
      -  and so *can’t be displayed*

      The color used for display will be a less intense color produced
      automatically by gamut mapping.

   .. container:: invalid example
      :name: ex-profoto-bad

      ` <#ex-profoto-bad>`__ This example has a typo! An intense green
      is provided in profoto-rgb space (which doesn’t exist). This makes
      it invalid, so the used value is `opaque black <#opaque-black>`__
      .. code:: lang-css

         color(profoto-rgb 0.4835 0.9167 0.2188)

/10.2. The Predefined sRGB Color Space: the
-------------------------------------------

   .. .. rubric:: 10.2. The Predefined sRGB Color Space: the
      `sRGB <#valdef-color-srgb>`__ keyword\ ` <#predefined-sRGB>`__
      :name: predefined-sRGB
      :class: heading settled

   The sRGB predefined color space defined below is the same as is used
   for legacy sRGB colors, such as `rgb() <#funcdef-rgb>`__.

   srgb
      The `srgb <#valdef-color-srgb>`__ `[SRGB] <#biblio-srgb>`__ color
      space accepts three numeric parameters, representing the red,
      green, and blue channels of the color. In-gamut colors have all
      three components in the range [0, 1]. The whitepoint is
      `D65 <#d65-whitepoint>`__.

      `[SRGB] <#biblio-srgb>`__ specifies two viewing conditions,
      *encoding* and *typical*. The `[ICC] <#biblio-icc>`__ recommends
      using the *encoding* conditions for color conversion and for
      optimal viewing, which are the values in the table below.

      sRGB is the default color space for CSS, used for all the legacy
      color functions.

      It has the following characteristics:

      x

      y

      Red chromaticity

      0.640

      0.330

      Green chromaticity

      0.300

      0.600

      Blue chromaticity

      0.150

      0.060

      White chromaticity

      `D65 <#d65-whitepoint>`__

      Transfer function

      see below

      White luminance

      80.0 cd/m\ :sup:`2`

      Black luminance

      0.20 cd/m\ :sup:`2`

      Image state

      display-referred

      Percentages

      Allowed for R, G and B

      Percent reference range 

      for R,G,B: 0% = 0.0, 100% = 1.0

      .. code:: lang-javascript

         let sign = c < 0? -1 : 1;
         let abs = Math.abs(c);

         if (abs <= 0.04045) {
           cl = c / 12.92;
         }
         else {
           cl = sign * (Math.pow((abs + 0.055) / 1.055, 2.4));
         }

      c is the gamma-encoded red, green or blue component. cl is the
      corresponding linear-light component.

      .. figure:: images/sRGB-prim-sec.svg
         :alt: diagram of sRGB primaries and secondaries in LCH
         :width: 540px
         :height: 520px

         Visualization of the sRGB color space in LCH. The primaries and
         secondaries are shown.

   Tests

   -  `predefined-001.html <https://wpt.fyi/results/css/css-color/predefined-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-001.html>`__
   -  `predefined-002.html <https://wpt.fyi/results/css/css-color/predefined-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-002.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

/10.3. The Predefined Linear-light sRGB Color Space: the
--------------------------------------------------------

   .. .. rubric:: 10.3. The Predefined Linear-light sRGB Color Space: the
      `srgb-linear <#valdef-color-srgb-linear>`__
      keyword\ ` <#predefined-sRGB-linear>`__
      :name: predefined-sRGB-linear
      :class: heading settled

   The sRGB-linear predefined color space is the same as
   `srgb <#valdef-color-srgb>`__ *except* that the transfer function is
   linear-light (there is no gamma-encoding).

   srgb-linear
      The `srgb-linear <#valdef-color-srgb-linear>`__
      `[SRGB] <#biblio-srgb>`__ color space accepts three numeric
      parameters, representing the red, green, and blue channels of the
      color. In-gamut colors have all three components in the range [0,
      1]. The whitepoint is `D65 <#d65-whitepoint>`__.

      It has the following characteristics:

      x

      y

      Red chromaticity

      0.640

      0.330

      Green chromaticity

      0.300

      0.600

      Blue chromaticity

      0.150

      0.060

      White chromaticity

      `D65 <#d65-whitepoint>`__

      Transfer function

      unity, see below

      White luminance

      80.0 cd/m\ :sup:`2`

      Black luminance

      0.20 cd/m\ :sup:`2`

      Image state

      display-referred

      Percentages

      Allowed for R, G and B

      Percent reference range 

      for R,G,B: 0% = 0.0, 100% = 1.0

      .. code:: lang-javascript

         cl = c;

      c is the red, green or blue component. cl is the corresponding
      linear-light component, which is identical.

      To avoid banding artifacts, a `higher precision is
      required <#predefined-precision-table>`__ for
      `srgb-linear <#valdef-color-srgb-linear>`__ than for
      `srgb <#valdef-color-srgb>`__.

      .. container:: example
         :name: srgb-linear-swatches

         ` <#srgb-linear-swatches>`__ For example, these are the same
         color
         .. code:: lang-css

             color(srgb 0.691 0.139 0.259)
             color(srgb-linear 0.435 0.017 0.055)

   Tests

   -  `srgb-linear-001.html <https://wpt.fyi/results/css/css-color/srgb-linear-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/srgb-linear-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/srgb-linear-001.html>`__
   -  `srgb-linear-002.html <https://wpt.fyi/results/css/css-color/srgb-linear-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/srgb-linear-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/srgb-linear-002.html>`__
   -  `srgb-linear-003.html <https://wpt.fyi/results/css/css-color/srgb-linear-003.html>`__
      `(live
      test) <http://wpt.live/css/css-color/srgb-linear-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/srgb-linear-003.html>`__
   -  `srgb-linear-004.html <https://wpt.fyi/results/css/css-color/srgb-linear-004.html>`__
      `(live
      test) <http://wpt.live/css/css-color/srgb-linear-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/srgb-linear-004.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

/10.4. The Predefined Display P3 Color Space: the
-------------------------------------------------

   .. .. rubric:: 10.4. The Predefined Display P3 Color Space: the
      `display-p3 <#valdef-color-display-p3>`__
      keyword\ ` <#predefined-display-p3>`__
      :name: predefined-display-p3
      :class: heading settled

   display-p3
      The `display-p3 <#valdef-color-display-p3>`__
      `[Display-P3] <#biblio-display-p3>`__ color space accepts three
      numeric parameters, representing the red, green, and blue channels
      of the color. In-gamut colors have all three components in the
      range [0, 1]. It uses the same primary chromaticities as
      `[DCI-P3] <#biblio-dci-p3>`__, but with a
      `D65 <#d65-whitepoint>`__ whitepoint, and the same transfer curve
      as sRGB.

      Modern displays, TVs, laptop screens and phone screens are able to
      display all, or nearly all, of the display-p3 gamut.

      It has the following characteristics:

      x

      y

      Red chromaticity

      0.680

      0.320

      Green chromaticity

      0.265

      0.690

      Blue chromaticity

      0.150

      0.060

      White chromaticity

      `D65 <#d65-whitepoint>`__

      Transfer function

      same as srgb

      White luminance

      80.0 cd/m\ :sup:`2`

      Black luminance

      0.80 cd/m\ :sup:`2`

      Image state

      display-referred

      Percentages

      Allowed for R, G and B

      Percent reference range 

      for R,G,B: 0% = 0.0, 100% = 1.0

      .. figure:: images/P3-prim-sec.svg
         :alt: diagram of P3 primaries and secondaries in LCH
         :width: 580px
         :height: 560px

         Visualization of the P3 color space in LCH. The primaries and
         secondaries are shown (but in sRGB, not in the correct colors).
         For comparison, the sRGB primaries and secondaries are also
         shown, as dashed circles. P3 primaries have higher Chroma.

   Tests

   -  `predefined-005.html <https://wpt.fyi/results/css/css-color/predefined-005.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-005.html>`__
   -  `predefined-006.html <https://wpt.fyi/results/css/css-color/predefined-006.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-006.html>`__
   -  `display-p3-001.html <https://wpt.fyi/results/css/css-color/display-p3-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/display-p3-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/display-p3-001.html>`__
   -  `display-p3-002.html <https://wpt.fyi/results/css/css-color/display-p3-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/display-p3-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/display-p3-002.html>`__
   -  `display-p3-003.html <https://wpt.fyi/results/css/css-color/display-p3-003.html>`__
      `(live
      test) <http://wpt.live/css/css-color/display-p3-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/display-p3-003.html>`__
   -  `display-p3-004.html <https://wpt.fyi/results/css/css-color/display-p3-004.html>`__
      `(live
      test) <http://wpt.live/css/css-color/display-p3-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/display-p3-004.html>`__
   -  `display-p3-005.html <https://wpt.fyi/results/css/css-color/display-p3-005.html>`__
      `(live
      test) <http://wpt.live/css/css-color/display-p3-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/display-p3-005.html>`__
   -  `display-p3-006.html <https://wpt.fyi/results/css/css-color/display-p3-006.html>`__
      `(live
      test) <http://wpt.live/css/css-color/display-p3-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/display-p3-006.html>`__

/10.5. The Predefined A98 RGB Color Space: the
----------------------------------------------

   .. .. rubric:: 10.5. The Predefined A98 RGB Color Space: the
      `a98-rgb <#valdef-color-a98-rgb>`__
      keyword\ ` <#predefined-a98-rgb>`__
      :name: predefined-a98-rgb
      :class: heading settled

   a98-rgb
      The `a98-rgb <#valdef-color-a98-rgb>`__ color space accepts three
      numeric parameters, representing the red, green, and blue channels
      of the color. In-gamut colors have all three components in the
      range [0, 1]. The transfer curve is a gamma function, close to but
      not exactly 1/2.2.

      It has the following characteristics:

      x

      y

      Red chromaticity

      0.6400

      0.3300

      Green chromaticity

      0.2100

      0.7100

      Blue chromaticity

      0.1500

      0.0600

      White chromaticity

      `D65 <#d65-whitepoint>`__

      Transfer function

      256/563

      White luminance

      160.0 cd/m\ :sup:`2`

      Black luminance

      0.5557 cd/m\ :sup:`2`

      Image state

      display-referred

      Percentages

      Allowed for R, G and B

      Percent reference range 

      for R,G,B: 0% = 0.0, 100% = 1.0

      .. figure:: images/a98-prim-sec.svg
         :alt: diagram of a98 primaries and secondaries in LCH
         :width: 640px
         :height: 560px

         Visualization of the A98 color space in LCH. The primaries and
         secondaries are shown (but in sRGB, not in the correct colors).
         For comparison, the sRGB primaries and secondaries are also
         shown, as dashed circles. a98 primaries have higher Chroma,
         especially the yellow, green and cyan.

   Tests

   -  `predefined-007.html <https://wpt.fyi/results/css/css-color/predefined-007.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-007.html>`__
   -  `predefined-008.html <https://wpt.fyi/results/css/css-color/predefined-008.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-008.html>`__
   -  `a98rgb-001.html <https://wpt.fyi/results/css/css-color/a98rgb-001.html>`__
      `(live test) <http://wpt.live/css/css-color/a98rgb-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/a98rgb-001.html>`__
   -  `a98rgb-002.html <https://wpt.fyi/results/css/css-color/a98rgb-002.html>`__
      `(live test) <http://wpt.live/css/css-color/a98rgb-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/a98rgb-002.html>`__
   -  `a98rgb-003.html <https://wpt.fyi/results/css/css-color/a98rgb-003.html>`__
      `(live test) <http://wpt.live/css/css-color/a98rgb-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/a98rgb-003.html>`__
   -  `a98rgb-004.html <https://wpt.fyi/results/css/css-color/a98rgb-004.html>`__
      `(live test) <http://wpt.live/css/css-color/a98rgb-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/a98rgb-004.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

/10.6. The Predefined ProPhoto RGB Color Space: the
---------------------------------------------------

   .. .. rubric:: 10.6. The Predefined ProPhoto RGB Color Space: the
      `prophoto-rgb <#valdef-color-prophoto-rgb>`__
      keyword\ ` <#predefined-prophoto-rgb>`__
      :name: predefined-prophoto-rgb
      :class: heading settled

   prophoto-rgb
      The `prophoto-rgb <#valdef-color-prophoto-rgb>`__ color space
      accepts three numeric parameters, representing the red, green, and
      blue channels of the color. In-gamut colors have all three
      components in the range [0, 1]. The transfer curve is a gamma
      function with a value of 1/1.8, and a small linear portion near
      black. The white point is `D50 <#d50-whitepoint>`__, the same as
      is used by CIE Lab. Thus, conversion to CIE Lab does not require
      the chromatic adaptation step.

      The ProPhoto RGB space uses hyper-saturated, non physically
      realizable primaries. These were chosen to allow a wide color
      gamut and in particular, to minimize hue shifts under tonal
      manipulation. It is often used in digital photography as a wide
      gamut color space for the archival version of photographic images.
      The `prophoto-rgb <#valdef-color-prophoto-rgb>`__ color space
      allows CSS to specify colors that will match colors in such images
      having the same RGB values.

      The ProPhoto RGB space was originally developed by Kodak and is
      described in `[Wolfe] <#biblio-wolfe>`__. It was standardized by
      ISO as
      `[ROMM] <#biblio-romm>`__,\ `[ROMM-RGB] <#biblio-romm-rgb>`__.

      The white luminance is given as a range, and the viewing flare
      (and thus, the black luminance) is 0.5% to 1.0% of this.

      It has the following characteristics:

      x

      y

      Red chromaticity

      0.734699

      0.265301

      Green chromaticity

      0.159597

      0.840403

      Blue chromaticity

      0.036598

      0.000105

      White chromaticity

      `D50 <#d50-whitepoint>`__

      Transfer function

      see below

      White luminance

      160.0 to 640.0 cd/m\ :sup:`2`

      Black luminance

      See text

      Image state

      display-referred

      Percentages

      Allowed for R, G and B

      Percent reference range 

      for R,G,B: 0% = 0.0, 100% = 1.0

      .. code:: lang-javascript

         const E = 16/512;
         let sign = c < 0? -1 : 1;
         let abs = Math.abs(c);

         if (abs <= E) {
           cl =  c / 16;
         }
         else {
           cl = sign * Math.pow(c, 1.8);
         }

      c is the gamma-encoded red, green or blue component. cl is the
      corresponding linear-light component.

      .. figure:: images/prophoto-prim-sec.svg
         :alt: diagram of prophoto primaries and secondaries in LCH
         :width: 780px
         :height: 760px

         Visualization of the prophoto-rgb color space in LCH. The
         primaries and secondaries are shown (but in sRGB, not in the
         correct colors). For comparison, the sRGB primaries and
         secondaries are also shown, as dashed circles. prophoto-rgb
         primaries and secondaries have much higher Chroma, but much of
         this ultrawide gamut does not correspond to physically
         realizable colors.

   Tests

   -  `predefined-009.html <https://wpt.fyi/results/css/css-color/predefined-009.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-009.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-009.html>`__
   -  `predefined-010.html <https://wpt.fyi/results/css/css-color/predefined-010.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-010.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-010.html>`__
   -  `prophoto-rgb-001.html <https://wpt.fyi/results/css/css-color/prophoto-rgb-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/prophoto-rgb-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/prophoto-rgb-001.html>`__
   -  `prophoto-rgb-002.html <https://wpt.fyi/results/css/css-color/prophoto-rgb-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/prophoto-rgb-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/prophoto-rgb-002.html>`__
   -  `prophoto-rgb-003.html <https://wpt.fyi/results/css/css-color/prophoto-rgb-003.html>`__
      `(live
      test) <http://wpt.live/css/css-color/prophoto-rgb-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/prophoto-rgb-003.html>`__
   -  `prophoto-rgb-004.html <https://wpt.fyi/results/css/css-color/prophoto-rgb-004.html>`__
      `(live
      test) <http://wpt.live/css/css-color/prophoto-rgb-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/prophoto-rgb-004.html>`__
   -  `prophoto-rgb-005.html <https://wpt.fyi/results/css/css-color/prophoto-rgb-005.html>`__
      `(live
      test) <http://wpt.live/css/css-color/prophoto-rgb-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/prophoto-rgb-005.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

/10.7. The Predefined ITU-R BT.2020-2 Color Space: the
------------------------------------------------------

   .. .. rubric:: 10.7. The Predefined ITU-R BT.2020-2 Color Space: the
      `rec2020 <#valdef-color-rec2020>`__
      keyword\ ` <#predefined-rec2020>`__
      :name: predefined-rec2020
      :class: heading settled

   rec2020
      The `rec2020 <#valdef-color-rec2020>`__
      `[Rec.2020] <#biblio-rec2020>`__ color space accepts three numeric
      parameters, representing the red, green, and blue channels of the
      color. In-gamut colors have all three components in the range [0,
      1], ("full-range", in video terminology). ITU Reference 2020 is
      used for Ultra High Definition, 4k and 8k television.

      The primaries are physically realizable, but with difficulty as
      they lie very close to the spectral locus.

      Current displays are unable to reproduce the full gamut of
      rec2020. Coverage is expected to increase over time as displays
      improve.

      It has the following characteristics:

      x

      y

      Red chromaticity

      0.708

      0.292

      Green chromaticity

      0.170

      0.797

      Blue chromaticity

      0.131

      0.046

      White chromaticity

      `D65 <#d65-whitepoint>`__

      Transfer function

      see below, from `[Rec.2020] <#biblio-rec2020>`__ table 4

      Image state

      display-referred

      Percentages

      Allowed for R, G and B

      Percent reference range 

      for R,G,B: 0% = 0.0, 100% = 1.0

      .. code:: lang-javascript

         const α = 1.09929682680944 ;
         const β = 0.018053968510807;

         let sign = c < 0? -1 : 1;
         let abs = Math.abs(c);

         if (abs < β * 4.5 ) {
           cl = c / 4.5;
         }
         else {
           cl = sign * (Math.pow((abs + α -1 ) / α, 1/0.45));
         }

      c is the gamma-encoded red, green or blue component. cl is the
      corresponding linear-light component.

      .. figure:: images/2020-prim-sec.svg
         :alt: diagram of rec2020 primaries and secondaries in LCH
         :width: 670px
         :height: 580px

         Visualization of the rec2020 color space in LCH. The primaries
         and secondaries are shown (but in sRGB, not in the correct
         colors). For comparison, the sRGB primaries and secondaries are
         also shown, as dashed circles. rec2020 primaries have much
         higher Chroma.

   Tests

   -  `predefined-011.html <https://wpt.fyi/results/css/css-color/predefined-011.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-011.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-011.html>`__
   -  `predefined-012.html <https://wpt.fyi/results/css/css-color/predefined-012.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-012.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-012.html>`__
   -  `rec2020-001.html <https://wpt.fyi/results/css/css-color/rec2020-001.html>`__
      `(live test) <http://wpt.live/css/css-color/rec2020-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rec2020-001.html>`__
   -  `rec2020-002.html <https://wpt.fyi/results/css/css-color/rec2020-002.html>`__
      `(live test) <http://wpt.live/css/css-color/rec2020-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rec2020-002.html>`__
   -  `rec2020-003.html <https://wpt.fyi/results/css/css-color/rec2020-003.html>`__
      `(live test) <http://wpt.live/css/css-color/rec2020-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rec2020-003.html>`__
   -  `rec2020-004.html <https://wpt.fyi/results/css/css-color/rec2020-004.html>`__
      `(live test) <http://wpt.live/css/css-color/rec2020-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rec2020-004.html>`__
   -  `rec2020-005.html <https://wpt.fyi/results/css/css-color/rec2020-005.html>`__
      `(live test) <http://wpt.live/css/css-color/rec2020-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/rec2020-005.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

/10.8. The Predefined CIE XYZ Color Spaces: the
-----------------------------------------------

   .. .. rubric:: 10.8. The Predefined CIE XYZ Color Spaces: the
      `xyz-d50 <#valdef-color-xyz-d50>`__,
      `xyz-d65 <#valdef-color-xyz-d65>`__, and
      `xyz <#valdef-color-xyz>`__ keywords\ ` <#predefined-xyz>`__
      :name: predefined-xyz
      :class: heading settled

   xyz-d50, xyz-d65, xyz
      The `xyz <#valdef-color-xyz>`__ color space accepts three numeric
      parameters, representing the X,Y and Z values. It represents the
      CIE XYZ `[COLORIMETRY] <#biblio-colorimetry>`__ color space,
      scaled such that diffuse white has a luminance (Y) of 1.0. and, if
      necessary, chromatically adapted to the reference white.

      The reference white for `xyz-d50 <#valdef-color-xyz-d50>`__ is
      `D50 <#d50-whitepoint>`__, while the reference white for
      `xyz-d65 <#valdef-color-xyz-d65>`__ and
      `xyz <#valdef-color-xyz>`__ is `D65 <#d65-whitepoint>`__.

      Values greater than 1.0/100% are allowed and must not be clamped;
      they represent colors brighter than diffuse white. Values less
      than 0/0% are uncommon, but can occur as a result of chromatic
      adaptation, and likewise must not be clamped.

      It has the following characteristics:

      Percentages

      Allowed for X,Y,Z

      Percent reference range 

      for X,Y,Z: 0% = 0.0, 100% = 1.0

      .. container:: example
         :name: ex-xyz

         ` <#ex-xyz>`__ These are exactly equivalent:
         .. code:: lang-css

             #7654CD
             rgb(46.27% 32.94% 80.39%)
             lab(44.36% 36.05 -58.99)
             color(xyz-d50 0.2005 0.14089 0.4472)
             color(xyz-d65 0.21661 0.14602 0.59452)

   Tests

   -  `predefined-016.html <https://wpt.fyi/results/css/css-color/predefined-016.html>`__
      `(live
      test) <http://wpt.live/css/css-color/predefined-016.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/predefined-016.html>`__
   -  `xyz-001.html <https://wpt.fyi/results/css/css-color/xyz-001.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-001.html>`__
   -  `xyz-002.html <https://wpt.fyi/results/css/css-color/xyz-002.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-002.html>`__
   -  `xyz-003.html <https://wpt.fyi/results/css/css-color/xyz-003.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-003.html>`__
   -  `xyz-004.html <https://wpt.fyi/results/css/css-color/xyz-004.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-004.html>`__
   -  `xyz-005.html <https://wpt.fyi/results/css/css-color/xyz-005.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-005.html>`__
   -  `xyz-d50-001.html <https://wpt.fyi/results/css/css-color/xyz-d50-001.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d50-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d50-001.html>`__
   -  `xyz-d50-002.html <https://wpt.fyi/results/css/css-color/xyz-d50-002.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d50-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d50-002.html>`__
   -  `xyz-d50-003.html <https://wpt.fyi/results/css/css-color/xyz-d50-003.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d50-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d50-003.html>`__
   -  `xyz-d50-004.html <https://wpt.fyi/results/css/css-color/xyz-d50-004.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d50-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d50-004.html>`__
   -  `xyz-d50-005.html <https://wpt.fyi/results/css/css-color/xyz-d50-005.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d50-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d50-005.html>`__
   -  `xyz-d65-001.html <https://wpt.fyi/results/css/css-color/xyz-d65-001.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d65-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d65-001.html>`__
   -  `xyz-d65-002.html <https://wpt.fyi/results/css/css-color/xyz-d65-002.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d65-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d65-002.html>`__
   -  `xyz-d65-003.html <https://wpt.fyi/results/css/css-color/xyz-d65-003.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d65-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d65-003.html>`__
   -  `xyz-d65-004.html <https://wpt.fyi/results/css/css-color/xyz-d65-004.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d65-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d65-004.html>`__
   -  `xyz-d65-005.html <https://wpt.fyi/results/css/css-color/xyz-d65-005.html>`__
      `(live test) <http://wpt.live/css/css-color/xyz-d65-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/xyz-d65-005.html>`__
   -  `color-valid.html <https://wpt.fyi/results/css/css-color/parsing/color-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-valid.html>`__

/10.9. Converting Predefined Color Spaces to Lab or
---------------------------------------------------

   .. .. rubric:: 10.9. Converting Predefined Color Spaces to Lab or
      Oklab\ ` <#predefined-to-lab-oklab>`__
      :name: predefined-to-lab-oklab
      :class: heading settled

   For all predefined RGB color spaces, conversion to Lab requires
   several steps, although in practice all but the first step are linear
   calculations and can be combined.

   #. Convert from gamma-encoded RGB to linear-light RGB (undo gamma
      encoding)
   #. Convert from linear RGB to CIE XYZ
   #. If needed, convert from a `D65 <#d65-whitepoint>`__ whitepoint
      (used by `sRGB <#valdef-color-srgb>`__,
      `display-p3 <#valdef-color-display-p3>`__,
      `a98-rgb <#valdef-color-a98-rgb>`__ and
      `rec2020 <#valdef-color-rec2020>`__) to the
      `D50 <#d50-whitepoint>`__ whitepoint used in Lab, with the linear
      Bradford transform. `prophoto-rgb <#valdef-color-prophoto-rgb>`__
      already has a D50 whitepoint.
   #. Convert D50-adapted XYZ to Lab

   Conversion to Oklab is similar, but the chromatic adaptation step is
   only needed for `prophoto-rgb <#valdef-color-prophoto-rgb>`__.

   #. Convert from gamma-encoded RGB to linear-light RGB (undo gamma
      encoding)
   #. Convert from linear RGB to CIE XYZ
   #. If needed, convert from a `D50 <#d50-whitepoint>`__ whitepoint
      (used by `prophoto-rgb <#valdef-color-prophoto-rgb>`__) to the
      `D65 <#d65-whitepoint>`__ whitepoint used in Oklab, with the
      linear Bradford transform.
   #. Convert D65-adapted XYZ to Oklab

   There is sample JavaScript code for these conversions in `§ 17 Sample
   code for Color Conversions <#color-conversion-code>`__.

/10.10. Converting Lab or Oklab to Predefined RGB Color
-------------------------------------------------------

   .. .. rubric:: 10.10. Converting Lab or Oklab to Predefined RGB Color
      Spaces\ ` <#oklab-lab-to-predefined>`__
      :name: oklab-lab-to-predefined
      :class: heading settled

   Conversion from Lab to predefined spaces like
   `display-p3 <#valdef-color-display-p3>`__ or
   `rec2020 <#valdef-color-rec2020>`__ also requires multiple steps, and
   again in practice all but the last step are linear calculations and
   can be combined.

   #. Convert Lab to (D50-adapted) XYZ
   #. If needed, convert from a `D50 <#d50-whitepoint>`__ whitepoint
      (used by Lab) to the `D65 <#d65-whitepoint>`__ whitepoint used in
      sRGB and most other RGB spaces, with the linear Bradford
      transform. `prophoto-rgb <#valdef-color-prophoto-rgb>`__' does not
      require this step.
   #. Convert from (D65-adapted) CIE XYZ to linear RGB
   #. Convert from linear-light RGB to RGB (do gamma encoding)

   Conversion from Oklab is similar, but the chromatic adaptation step
   is only needed for `prophoto-rgb <#valdef-color-prophoto-rgb>`__.

   #. Convert Oklab to (D65-adapted) XYZ
   #. If needed, convert from a `D65 <#d65-whitepoint>`__ whitepoint
      (used by Oklab) to the `D50 <#d50-whitepoint>`__ whitepoint used
      in `prophoto-rgb <#valdef-color-prophoto-rgb>`__, with the linear
      Bradford transform.
   #. Convert from (D65-adapted) CIE XYZ to linear RGB
   #. Convert from linear-light RGB to RGB (do gamma encoding)

   There is sample JavaScript code for these conversions in `§ 17 Sample
   code for Color Conversions <#color-conversion-code>`__.

   Implementations may choose to implement these steps in some other way
   (for example, using an ICC profile with relative colorimetric
   rendering intent) provided the results are the same for colors inside
   both the source and destination gamuts.

/10.11. Converting Between Predefined RGB Color
-----------------------------------------------

   .. .. rubric:: 10.11. Converting Between Predefined RGB Color
      Spaces\ ` <#predefined-to-predefined>`__
      :name: predefined-to-predefined
      :class: heading settled

   Conversion from one predefined RGB color space to another requires
   multiple steps, one of which is only needed when the whitepoints
   differ. To convert from *src* to *dest*:

   #. Convert from gamma-encoded *src*\ RGB to linear-light *src*\ RGB
      (undo gamma encoding)
   #. Convert from linear *src*\ RGB to CIE XYZ
   #. If *src* and *dest* have different whitepoints, convert the XYZ
      value from *src*\ White to *dest*\ White with the linear Bradford
      transform.
   #. Convert from CIE XYZ to linear *dest*\ RGB
   #. Convert from linear-light *dest*\ RGB to *dest*\ RGB (do gamma
      encoding)

   There is sample JavaScript code for this conversion for the
   predefined RGB color spaces, in `§ 17 Sample code for Color
   Conversions <#color-conversion-code>`__.

/10.12. Simple Alpha Compositing
--------------------------------

   .. .. rubric:: 10.12. Simple Alpha Compositing\ ` <#alpha>`__
      :name: alpha
      :class: heading settled

   When drawing, implementations must handle alpha according to the
   rules in `Section 5.1 Simple alpha
   compositing <https://www.w3.org/TR/compositing-1/#simplealphacompositing>`__
   of `[Compositing] <#biblio-compositing>`__.

/11. Converting Colors
----------------------

   .. .. rubric:: 11. Converting Colors\ ` <#color-conversion>`__
      :name: color-conversion
      :class: heading settled algorithm

   Tests
   This section provides an algorithm used later, it does not need
   tests.

   --------------

   Colors may be converted from one color space to another and, provided
   that there is no gamut mapping and that each color space can
   represent out of gamut colors, (for RGB spaces, this means that the
   transfer function is defined over the extended range) then (subject
   to numerical precision and round-off error) the two colors will look
   the same and represent the same color sensation.

   To convert a color ``col1`` in a source color space ``src`` with
   white point ``src-white`` to a color ``col2`` in destination color
   space ``dest`` with white point ``dest-white``:

   #. ` <#convert-polrect>`__\ If ``src`` is in a `cylindrical polar
      color <#cylindrical-polar-color>`__ representation, first convert
      ``col1`` to the corresponding `rectangular orthogonal
      color <#rectangular-orthogonal-color>`__ representation and let
      this be the new ``col1``. Replace any `missing
      component <#missing-color-component>`__ with zero.
   #. ` <#convert-tolinear>`__\ If ``src`` is not a linear-light
      representation, convert it to linear light (undo gamma-encoding)
      and let this be the new ``col1``.
   #. ` <#convert-toXYZ>`__\ Convert ``col1`` to CIE XYZ with a given
      whitepoint ``src-white`` and let this be ``xyz``.
   #. ` <#convert-CAT>`__\ If ``dest-white`` is not the same as
      ``src-white``, chromatically adapt ``xyz`` to ``dest-white`` using
      a linear Bradford `chromatic adaptation
      transform <#chromatic-adaptation-transform>`__, and let this be
      the new ``xyz``.
   #. ` <#convert-destpolar>`__\ If ``dest`` is a `cylindrical polar
      color <#cylindrical-polar-color>`__ representation, let
      ``dest-rect`` be the corresponding `rectangular orthogonal
      color <#rectangular-orthogonal-color>`__ representation.
      Otherwise, let ``dest-rect`` be ``dest``.
   #. ` <#convert-fromXYZ>`__\ Convert ``xyz`` to ``dest``, followed by
      applying any transfer function (gamma encoding), producing
      ``col2``.
   #. ` <#convert-display>`__\ If ``dest`` is a physical output color
      space, such as a display, then ``col2`` must be `css gamut
      mapped <#css-gamut-mapped>`__ so that it `can be
      displayed <#can-be-displayed>`__.
   #. ` <#convert-rectpol>`__\ If ``dest-rect`` is not the same as
      ``dest``, in other words ``dest`` is a `cylindrical polar
      color <#cylindrical-polar-color>`__ representation, convert from
      ``dest-rect`` to ``dest``, and let this be ``col2``. This may
      produce `missing component <#missing-color-component>`__\ s.

/12. Color Interpolation
------------------------

   .. .. rubric:: 12. Color Interpolation\ ` <#interpolation>`__
      :name: interpolation
      :class: heading settled

   Color interpolation happens with gradients, compositing, filters,
   transitions, animations, and color mixing and color modification
   functions.

   Interpolation between two `<color> <#typedef-color>`__ values takes
   place by executing the following steps:

   #. checking the two colors for `analogous
      components <#analogous-components>`__ which will be carried
      forward
   #. converting them to a given color space which will be referred to
      as the interpolation color space below. If one or both colors are
      already in the interpolation colorspace, this conversion changes
      any `powerless <#powerless-color-component>`__ components to
      `missing <#missing-color-component>`__ values
   #. (if required) re-inserting carried-forward values in the converted
      colors
   #. (if required) fixing up the hues, depending on the selected
      `<hue-interpolation-method> <#typedef-hue-interpolation-method>`__
   #. changing the color components to premultiplied form
   #. linearly interpolating each component of the computed value of the
      color separately
   #. undoing premultiplication

   Interpolating to or from
   `currentcolor <#valdef-color-currentcolor>`__ is possible. The
   numerical value used for this purpose is the used value.

/12.1. Color Space for
----------------------

   .. .. rubric:: 12.1. Color Space for
      Interpolation\ ` <#interpolation-space>`__
      :name: interpolation-space
      :class: heading settled

   Various features in CSS depend on interpolating colors.

   .. container:: example
      :name: ex-interpolating-specs

      ` <#ex-interpolating-specs>`__ Examples include:

      -  `<gradient> <https://www.w3.org/TR/css-images-4/#typedef-gradient>`__

      -  `filter <https://www.w3.org/TR/filter-effects-1/#propdef-filter>`__

      -  `animation <https://www.w3.org/TR/css-animations-1/#propdef-animation>`__

      -  `transition <https://www.w3.org/TR/css-transitions-1/#propdef-transition>`__

   Mixing or otherwise combining colors has different results depending
   on the `interpolation color space <#interpolation-color-space>`__
   used. Thus, different color spaces may be more appropriate for each
   interpolation use case.

   -  In some cases, the result of physically mixing two colored lights
      is desired. In that case, the CIE XYZ or srgb-linear color space
      is appropriate, because they are linear in light intensity.

   -  If colors need to be evenly spaced perceptually (such as in a
      gradient), the Oklab color space (and the older Lab), are designed
      to be perceptually uniform.

   -  If avoiding graying out in color mixing is desired, i.e.
      maximizing chroma throughout the transition, Oklch (and the older
      LCH) work well for that.

   -  Lastly, compatibility with legacy Web content may be the most
      important consideration. The sRGB color space, which is neither
      linear-light nor perceptually uniform, is the choice here, even
      though it produces poorer results (overly dark or greyish mixes).

   These features are collectively termed the host syntax. They are not
   used by this specification itself, only exposed so that other
   specifications can use them; see e.g. use in `CSS Images 4 § 3.1
   Linear Gradients: the linear-gradient()
   notation <https://www.w3.org/TR/css-images-4/#linear-gradients>`__.
   The host syntax should define what the default `interpolation color
   space <#interpolation-color-space>`__ should be for each case, and
   optionally provide syntax for authors to override this default. If
   such syntax is part of a property value, it should use a
   `<color-interpolation-method> <#color-interpolation-method>`__ token,
   defined below for easy reference from other specifications. This
   ensures consistency across CSS, and that further customizations on
   how color interpolation is performed can automatically percolate
   across all of CSS.

   .. code:: prod

      <color-space> = <rectangular-color-space> | <polar-color-space>
      <rectangular-color-space> = srgb | srgb-linear | display-p3 | a98-rgb | prophoto-rgb | rec2020 | lab | oklab | xyz | xyz-d50 | xyz-d65
      <polar-color-space> = hsl | hwb | lch | oklch
      <hue-interpolation-method> = [ shorter | longer | increasing | decreasing ] hue
      <color-interpolation-method> = in [ <rectangular-color-space> | <polar-color-space> <hue-interpolation-method>? ]

   The keywords in the definitions of
   `<rectangular-color-space> <#typedef-rectangular-color-space>`__ and
   `<polar-color-space> <#typedef-polar-color-space>`__ each refer to
   their corresponding color space, represented in CSS either by the
   functional syntax with the same name, or (if no such function is
   present), by the corresponding
   `<ident> <https://www.w3.org/TR/css-values-4/#typedef-ident>`__ in
   the `color() <#funcdef-color>`__ function.

   Tests

   -  `color-mix-percents-01.html <https://wpt.fyi/results/css/css-color/color-mix-percents-01.html>`__
      `(live
      test) <http://wpt.live/css/css-color/color-mix-percents-01.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/color-mix-percents-01.html>`__
   -  `color-mix-percents-02.html <https://wpt.fyi/results/css/css-color/color-mix-percents-02.html>`__
      `(live
      test) <http://wpt.live/css/css-color/color-mix-percents-02.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/color-mix-percents-02.html>`__

   -  `gradients-with-transparent.html <https://wpt.fyi/results/css/css-images/gradients-with-transparent.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradients-with-transparent.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradients-with-transparent.html>`__
   -  `gradient-eval-001.html <https://wpt.fyi/results/css/css-images/gradient/gradient-eval-001.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-eval-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-eval-001.html>`__
   -  `gradient-eval-002.html <https://wpt.fyi/results/css/css-images/gradient/gradient-eval-002.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-eval-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-eval-002.html>`__
   -  `gradient-eval-003.html <https://wpt.fyi/results/css/css-images/gradient/gradient-eval-003.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-eval-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-eval-003.html>`__
   -  `gradient-eval-004.html <https://wpt.fyi/results/css/css-images/gradient/gradient-eval-004.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-eval-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-eval-004.html>`__
   -  `gradient-eval-005.html <https://wpt.fyi/results/css/css-images/gradient/gradient-eval-005.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-eval-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-eval-005.html>`__
   -  `gradient-eval-006.html <https://wpt.fyi/results/css/css-images/gradient/gradient-eval-006.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-eval-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-eval-006.html>`__
   -  `gradient-eval-007.html <https://wpt.fyi/results/css/css-images/gradient/gradient-eval-007.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-eval-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-eval-007.html>`__
   -  `gradient-eval-008.html <https://wpt.fyi/results/css/css-images/gradient/gradient-eval-008.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-eval-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-eval-008.html>`__
   -  `gradient-eval-009.html <https://wpt.fyi/results/css/css-images/gradient/gradient-eval-009.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-eval-009.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-eval-009.html>`__
   -  `gradient-none-interpolation.html <https://wpt.fyi/results/css/css-images/gradient/gradient-none-interpolation.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/gradient-none-interpolation.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/gradient-none-interpolation.html>`__
   -  `legacy-color-gradient.html <https://wpt.fyi/results/css/css-images/gradient/legacy-color-gradient.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/legacy-color-gradient.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/legacy-color-gradient.html>`__
   -  `oklab-gradient.html <https://wpt.fyi/results/css/css-images/gradient/oklab-gradient.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/oklab-gradient.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/oklab-gradient.html>`__
   -  `srgb-gradient.html <https://wpt.fyi/results/css/css-images/gradient/srgb-gradient.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/srgb-gradient.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/srgb-gradient.html>`__
   -  `srgb-linear-gradient.html <https://wpt.fyi/results/css/css-images/gradient/srgb-linear-gradient.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/srgb-linear-gradient.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/srgb-linear-gradient.html>`__
   -  `xyz-gradient.html <https://wpt.fyi/results/css/css-images/gradient/xyz-gradient.html>`__
      `(live
      test) <http://wpt.live/css/css-images/gradient/xyz-gradient.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/gradient/xyz-gradient.html>`__
   -  `gradient-interpolation-method-valid.html <https://wpt.fyi/results/css/css-images/parsing/gradient-interpolation-method-valid.html>`__
      `(live
      test) <http://wpt.live/css/css-images/parsing/gradient-interpolation-method-valid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/parsing/gradient-interpolation-method-valid.html>`__
   -  `gradient-interpolation-method-invalid.html <https://wpt.fyi/results/css/css-images/parsing/gradient-interpolation-method-invalid.html>`__
      `(live
      test) <http://wpt.live/css/css-images/parsing/gradient-interpolation-method-invalid.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/parsing/gradient-interpolation-method-invalid.html>`__
   -  `gradient-interpolation-method-computed.html <https://wpt.fyi/results/css/css-images/parsing/gradient-interpolation-method-computed.html>`__
      `(live
      test) <http://wpt.live/css/css-images/parsing/gradient-interpolation-method-computed.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-images/parsing/gradient-interpolation-method-computed.html>`__

   If the host syntax does not define what color space interpolation
   should take place in, it defaults to Oklab.

   Authors that prefer interpolation in sRGB in a particular instance
   can opt-in to the the old behavior by explicitly specifying sRGB as
   the `interpolation color space <#interpolation-color-space>`__, for
   example on a particular gradient where that result is desired.

   If the colors to be interpolated are outside the gamut of the
   `interpolation color space <#interpolation-color-space>`__ , then
   once converted to that space, they will contain out of range values.

   These are not clipped, but the values are interpolated as-is.

/12.2. Interpolating with Missing
---------------------------------

   .. .. rubric:: 12.2. Interpolating with Missing
      Components\ ` <#interpolation-missing>`__
      :name: interpolation-missing
      :class: heading settled

   In the course of converting the two colors to the `interpolation
   color space <#interpolation-color-space>`__, any `missing
   components <#missing-color-component>`__ would be replaced with the
   value 0.

   Thus, the first stage in interpolating two colors is to classify any
   `missing components <#missing-color-component>`__ in the input
   colors, and compare them to the components of the `interpolation
   color space <#interpolation-color-space>`__. If any `analogous
   components <#analogous-components>`__ which are missing components
   are found, they will be **carried forward** and re-inserted in the
   converted color before premultiplication, and before linear
   interpolation takes place.

   The analogous components are as follows:

   Category
   Components
   Reds
   r,x
   Greens
   g,y
   Blues
   b,z
   Lightness
   L
   Colorfulness
   C, S
   Hue
   H
   Opponent a
   a
   Opponent b
   b
   Note: for the purposes of this classification, the XYZ spaces are
   considered super-saturated RGB spaces. Also, despite Saturation being
   Lightness-dependent, it falls in the same category as Chroma here.
   The Whiteness and Blackness components of HWB have no analogs in
   other color spaces.

   .. container:: example
      :name: ex-analogous-hue

      ` <#ex-analogous-hue>`__ For example, if these two colors are to
      be interpolated in Oklch, the missing hue in the CIE LCH color is
      analogous to the hue component of Oklch and will be carried
      forward while the missing blue component in the second color is
      not analogous to any Oklch component and will not be carried
      forward:
      .. code:: highlight

          lch(50% 0.02 none)
          color(display-p3 0.7 0.5 none)

      which convert to

      .. code:: highlight

          oklch(56.897% 0.0001 0)
          oklch(63.612% 0.1522 78.748)

      and with carried forward `missing
      component <#missing-color-component>`__ re-inserted, the two
      colors to be interpolated are:

      .. code:: highlight

          oklch(56.897% 0.0001 none)
          oklch(63.612% 0.1522 78.748)

   If a color with a carried forward `missing
   component <#missing-color-component>`__ is interpolated with another
   color which is not missing that component, the missing component is
   treated as having the *other color’s* component value.

   Therefore, the carrying-forward step must be performed *before* any
   `powerless component <#powerless-color-component>`__ handling.

   .. container:: example
      :name: ex-oklch-missing-hue

      ` <#ex-oklch-missing-hue>`__ For example, if these two colors are
      interpolated, the second of which has a missing hue:
      .. code:: highlight

          oklch(78.3% 0.108 326.5)
          oklch(39.2% 0.4 none)

      Then the actual colors to be interpolated are

      .. code:: highlight

          oklch(78.3% 0.108 326.5)
          oklch(39.2% 0.4 326.5)

      and not

      .. code:: highlight

          oklch(78.3% 0.108 326.5)
          oklch(39.2% 0.4 0)

   If the carried forward `missing
   component <#missing-color-component>`__ is alpha, the color must be
   premultiplied with this carried forward value, not with the zero
   value that would have resulted from color conversion.

   .. container:: example
      :name: ex-oklch-missing-alpha

      ` <#ex-oklch-missing-alpha>`__ For example, if these two colors
      are interpolated, the second of which has a missing alpha:
      .. code:: highlight

          oklch(0.783 0.108 326.5 / 0.5)
          oklch(0.392 0.4 0 / none)

      Then the actual colors to be interpolated are

      .. code:: highlight

          oklch(78.3% 0.108 326.5 / 0.5)
          oklch(39.2% 0.4 0 / 0.5)

      giving the premultiplied Oklch values [0.3915, 0.054, 326] and
      [0.196, 0.2, 0].

   If both colors are `missing <#missing-color-component>`__ a given
   component, the interpolated color will also be missing that
   component.

/12.3. Interpolating with
-------------------------

   .. .. rubric:: 12.3. Interpolating with
      Alpha\ ` <#interpolation-alpha>`__
      :name: interpolation-alpha
      :class: heading settled

   When the colors to be interpolated are not fully opaque, they are
   transformed into premultiplied color values as follows:

   -  If the alpha value is `none <#valdef-color-none>`__, the
      premultiplied value is the un-premultiplied value. Otherwise,

   -  If any component value is `none <#valdef-color-none>`__, the
      premultiplied value is also none.

   -  For `rectangular orthogonal
      color <#rectangular-orthogonal-color>`__ coordinate systems, all
      component values are multiplied by the alpha value.

   -  For `cylindrical polar color <#cylindrical-polar-color>`__
      coordinate systems, the hue angle is *not* premultiplied, but the
      other two axes are premultiplied.

   To obtain a color value from a premultipled color value,

   -  If the interpolated alpha value is zero or
      `none <#valdef-color-none>`__, the un-premultiplied value is the
      premultiplied value. Otherwise,

   -  If any component value is `none <#valdef-color-none>`__, the
      un-premultiplied value is also none.

   -  otherwise, each component which had been premultiplied is divided
      by the interpolated alpha value.

   Tests

   -  `color-transition-premultiplied.html <https://wpt.fyi/results/css/css-transitions/animations/color-transition-premultiplied.html>`__
      `(live
      test) <http://wpt.live/css/css-transitions/animations/color-transition-premultiplied.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/color-transition-premultiplied.html>`__

   Why is premultiplied alpha useful?
   ` <#premultiplied>`__
   Interpolating colors using the premultiplied representations tends to
   produce more attractive transitions than the non-premultiplied
   representations, particularly when transitioning from a fully opaque
   color to fully transparent.

   Note that transitions where either the transparency or the color are
   held constant (for example, transitioning between
   ``rgba(255, 0, 0, 100%)`` (opaque red) and ``rgba(0,0,255,100%)``
   (opaque blue), or ``rgba(255,0,0,100%)`` (opaque red) and
   ``rgba(255,0,0,0%)`` (transparent red)) have identical results
   whether the color interpolation is done in premultiplied or
   non-premultiplied color-space. Differences only arise when *both* the
   color and transparency differ between the two endpoints.

   .. container:: example
      :name: ex-gradient-transition-premultiply

      ` <#ex-gradient-transition-premultiply>`__ The following example
      illustrates the difference between a gradient transitioning via
      pre-multiplied values (in this case sRGB, since all colors
      involved are legacy colors) and one transitioning (incorrectly)
      via non-premultiplied values. In both of these examples, the
      gradient is drawn over a white background. Both gradients could be
      written with the following value:
      .. code:: highlight

         linear-gradient(90deg, red, transparent, blue)

      With premultiplied colors, transitions to or from "transparent"
      always look nice:

      (Image requires SVG)
      On the other hand, if a gradient were to incorrectly transition in
      non-premultiplied space, the center of the gradient would be a
      noticeably grayish color, because "transparent" is actually a
      shorthand for rgba(0,0,0,0), or transparent black, meaning that
      the red transitions to a black as it loses opacity, and similarly
      with the blue’s transition:

      (Image requires SVG)

   .. container:: example
      :name: ex-premultiplied-srgb

      ` <#ex-premultiplied-srgb>`__ For example, to interpolate, in the
      sRGB color space, the two sRGB colors rgb(24% 12% 98% / 0.4) and
      rgb(62% 26% 64% / 0.6) they would first be converted to
      premultiplied form [9.6% 4.8% 39.2% ] and [37.2% 15.6% 38.4%]
      before interpolation.
      The midpoint of linearly interpolating these colors would be
      [23.4% 10.2% 38.8%] which, with an alpha value of 0.5, is
      rgb(46.8% 20.4% 77.6% / 0.5) when premultiplication is undone.

   .. container:: example
      :name: ex-premultiplied-lab

      ` <#ex-premultiplied-lab>`__ To interpolate, in the Lab color
      space, the two colors rgb(76% 62% 03% / 0.4) and color(display-p3
      0.84 0.19 0.72 / 0.6) they are first converted to lab lab(66.927%
      4.873 68.622 / 0.4) lab(53.503% 82.672 -33.901 / 0.6) then the L,
      a and b coordinates are premultiplied before interpolation
      [26.771% 1.949 27.449] and [32.102% 49.603 -20.341].
      The midpoint of linearly interpolating these would be [29.4365%
      25.776 3.554] which, with an alpha value of 0.5, is lab(58.873%
      51.552 7.108) / 0.5) when premultiplication is undone.

   .. container:: example
      :name: ex-premultiplied-lch

      ` <#ex-premultiplied-lch>`__ To interpolate, in the
      chroma-preserving LCH color space, the same two colors rgb(76% 62%
      03% / 0.4) and color(display-p3 0.84 0.19 0.72 / 0.6) they are
      first converted to LCH lch(66.93% 68.79 85.94 / 0.4) lch(53.5%
      89.35 337.7 / 0.6) then the L and C coordinates (but not H) are
      premultiplied before interpolation [26.771% 27.516 85.94] and
      [32.102% 53.61 337.7].
      The midpoint of linearly interpolating these, along the shorter
      hue arc (the default) would be [29.4365% 40.563 31.82] which, with
      an alpha value of 0.5, is lch(58.873% 81.126 31.82) / 0.5) when
      premultiplication is undone.

   There is sample JavaScript code for alpha premultiplication and
   un-premultiplication, for both polar and rectangular color spaces, in
   `§ 17 Sample code for Color Conversions <#color-conversion-code>`__.

/12.4. Hue Interpolation
------------------------

   .. .. rubric:: 12.4. Hue Interpolation\ ` <#hue-interpolation>`__
      :name: hue-interpolation
      :class: heading settled

   For color functions with a hue angle (LCH, HSL, HWB etc), there are
   multiple ways to interpolate. As arcs greater than 360° are rarely
   desirable, hue angles are fixed up prior to interpolation so that
   per-component interpolation is done over less than 360°, often less
   than 180°.

   Host syntax can specify any of the following algorithms for hue
   interpolation (angles in the following are in degrees, but the logic
   is the same regardless of how they are specified). Specifying a hue
   interpolation strategy is already part of the
   `<color-interpolation-method> <#color-interpolation-method>`__ syntax
   via the
   `<hue-interpolation-method> <#typedef-hue-interpolation-method>`__
   token.

   Unless otherwise specified, if no specific hue interpolation
   algorithm is selected by the host syntax, the default is shorter.

   Tests

   -  `color-mix-percents-01.html <https://wpt.fyi/results/css/css-color/color-mix-percents-01.html>`__
      `(live
      test) <http://wpt.live/css/css-color/color-mix-percents-01.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/color-mix-percents-01.html>`__
   -  `color-mix-percents-02.html <https://wpt.fyi/results/css/css-color/color-mix-percents-02.html>`__
      `(live
      test) <http://wpt.live/css/css-color/color-mix-percents-02.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/color-mix-percents-02.html>`__

   Note: As a reminder, if the interpolating colors were not already in
   the specified interpolation color space, then converting them will
   turn any `powerless components <#powerless-color-component>`__ into
   `missing components <#missing-color-component>`__.

/12.4.1. shorter
----------------

   .. .. rubric:: 12.4.1. shorter\ ` <#hue-shorter>`__
      :name: hue-shorter
      :class: heading settled

   Hue angles are interpolated to take the *shorter* of the two arcs
   between the starting and ending hues.

   .. container:: example
      :name: ex-shorter

      ` <#ex-shorter>`__ For example, the midpoint when interpolating in
      Oklch from a red  oklch(0.6 0.24 30) to a yellow  oklch(0.8 0.15
      90) would be at a hue angle of 30 + (90 - 30) \* 0.5 = 60 degrees,
      along the shorter arc between the two colors, giving a deep orange
       oklch(0.7 0.195 60)

   Angles are adjusted so that ``θ₂ - θ₁`` ∈ [-180, 180]. In
   pseudo-Javascript:

   .. code:: highlight

      if (θ₂ - θ₁ > 180) {
        θ₁ += 360;
      }
      else if (θ₂ - θ₁ < -180) {
        θ₂ += 360;
      }

/12.4.2. longer
---------------

   .. .. rubric:: 12.4.2. longer\ ` <#hue-longer>`__
      :name: hue-longer
      :class: heading settled

   Hue angles are interpolated to take the *longer* of the two arcs
   between the starting and ending hues.

   .. container:: example
      :name: ex-longer

      ` <#ex-longer>`__ For example, the midpoint when interpolating in
      Oklch from a red  oklch(0.6 0.24 30) to a yellow  oklch(0.8 0.15
      90) would be at a hue angle of (30 + 360 + 90) \* 0.5 = 240
      degrees, along the longer arc between the two colors, giving a sky
      blue  oklch(0.7 0.195 240)

   Angles are adjusted so that ``θ₂ - θ₁`` ∈ {(-360, -180], [180, 360)}.
   In pseudo-Javascript:

   .. code:: highlight

      if (0 < θ₂ - θ₁ < 180) {
        θ₁ += 360;
      }
      else if (-180 < θ₂ - θ₁ <= 0) {
        θ₂ += 360;
      }

/12.4.3. increasing
-------------------

   .. .. rubric:: 12.4.3. increasing\ ` <#hue-increasing>`__
      :name: hue-increasing
      :class: heading settled

   Hue angles are interpolated so that, as they progress from the first
   color to the second, the angle is always *increasing*. If the angle
   increases to 360 it is reset to zero, and then continues increasing.

   Depending on the difference between the two angles, this will either
   look the same as *shorter* or as *longer.* However, if one of the hue
   angles is being animated, and the hue angle difference passes through
   180 degrees, the interpolation will not flip to the other arc.

   .. container:: example
      :name: ex-increasing

      ` <#ex-increasing>`__ For example, the midpoint when interpolating
      in Oklch from a deep brown  oklch(0.5 0.1 30) to a turquoise
       oklch(0.7 0.1 190) would be at a hue angle of (30 + 190) \* 0.5 =
      110 degrees, giving a khaki  oklch(0.6 0.1 110).
      However, if the hue of the second color is animated to  oklch(0.7
      0.1 230), the midpoint of the interpolation will be (30 + 230) \*
      0.5 = 130 degrees, continuing in the same increasing direction,
      giving another green  oklch(0.6 0.1 130) rather than flipping to
      the opponent color part-way through the animation.

   Angles are adjusted so that ``θ₂ - θ₁`` ∈ [0, 360). In
   pseudo-Javascript:

   .. code:: highlight

      if (θ₂ < θ₁) {
        θ₂ += 360;
      }

/12.4.4. decreasing
-------------------

   .. .. rubric:: 12.4.4. decreasing\ ` <#hue-decreasing>`__
      :name: hue-decreasing
      :class: heading settled

   Hue angles are interpolated so that, as they progress from the first
   color to the second, the angle is always *decreasing*. If the angle
   decreases to 0 it is reset to 360, and then continues decreasing.

   Depending on the difference between the two angles, this will either
   look the same as *shorter* or as *longer.* However, if one of the hue
   angles is being animated, and the hue angle difference passes through
   180 degrees, the interpolation will not flip to the other arc.

   .. container:: example
      :name: ex-decreasing

      ` <#ex-decreasing>`__ For example, the midpoint when interpolating
      in Oklch from a deep brown  oklch(0.5 0.1 30) to a turquoise
       oklch(0.7 0.1 190) would be at a hue angle of (30 + 360 + 190) \*
      0.5 = 290 degrees, giving a purple  oklch(0.6 0.1 290).
      However, if the hue of the second color is animated to  oklch(0.7
      0.1 230), the midpoint of the interpolation will be (30 + 360 +
      230) \* 0.5 = 310 degrees, continuing in the same decreasing
      direction, giving another purple  oklch(0.6 0.1 310) rather than
      flipping to the opponent color part-way through the animation.

   Angles are adjusted so that ``θ₂ - θ₁`` ∈ (-360, 0]. In
   pseudo-Javascript:

   .. code:: highlight

      if (θ₁ < θ₂) {
        θ₁ += 360;
      }

/13. Gamut Mapping 
-------------------

   .. .. rubric:: 13. Gamut Mapping \ ` <#gamut-mapping>`__
      :name: gamut-mapping
      :class: heading settled

/13.1. An Introduction to Gamut
-------------------------------

   .. .. rubric:: 13.1. An Introduction to Gamut
      Mapping\ ` <#gamut-mapping-intro>`__
      :name: gamut-mapping-intro
      :class: heading settled

   Note: This section provides important context for the specific
   requirements described elsewhere in the document.

   *This section is non-normative*

   Tests
   This section is not normative, it does not need tests.

   --------------

   When a color in an origin color space is converted to another,
   destination color space which has a smaller gamut, some colors will
   be outside the destination gamut.

   For intermediate color calculations, these out of gamut values are
   preserved. However, if the destination is the display device (a
   screen, or a printer) then out of gamut values must be converted to
   an in-gamut color.

   Gamut mapping is the process of finding an in-gamut color with the
   least objectionable change in visual appearance.

/13.1.1. Clipping
-----------------

   .. .. rubric:: 13.1.1. Clipping\ ` <#GM-clip>`__
      :name: GM-clip
      :class: heading settled

   The simplest and least acceptable method is simply to clip the
   component values to the displayable range. This changes the
   proportions of the three primary colors (for an RGB display),
   resulting in a hue shift.

   .. container:: example
      :name: ex-gamut-clip-hue-shift

      ` <#ex-gamut-clip-hue-shift>`__ For example, consider the color
      ``color(srgb-linear 0.5 1 3)``. Because this is a linear-light
      color space, we can compare the intensities of the three
      components and see that the amount of blue light is three times
      the amount of green, while the amount of red light is half that of
      green. There is six times as much blue primary as red. In Oklch,
      this color has a hue angle of 265.1°
      If we now clip this color to bring it into gamut for sRGB, we get
      ``color(srgb-linear 0.5 1 1)``. The amount of blue light is the
      same as green. In Oklch, this color has a hue angle of 196.1°, a
      substantial change of 69°.

/13.1.2. Closest Color (MINDE)
------------------------------

   .. .. rubric:: 13.1.2. Closest Color (MINDE)\ ` <#GM-closest>`__
      :name: GM-closest
      :class: heading settled

   A better method is to map colors, in a perceptually uniform color
   space, by finding the closest in-gamut color (so-called minimum ΔE or
   MINDE). Clearly, the success of this technique depends on the degree
   of uniformity of the gamut mapping color space and the predictive
   accuracy of the deltaE function used.

   However, when doing gamut mapping changes in Hue are *particularly*
   objectionable; changes in Chroma are more tolerable, and small
   changes in Lightness can also be acceptable especially if the
   alternative is a larger Chroma reduction. MINDE weights changes in
   each dimension equally, and thus gives suboptimal results.

/13.1.3. Chroma Reduction
-------------------------

   .. .. rubric:: 13.1.3. Chroma Reduction\ ` <#GM-chroma>`__
      :name: GM-chroma
      :class: heading settled

   To improve on MINDE algorithms, colors are mapped in a perceptually
   uniform, *polar* color space by holding the hue constant, and
   reducing the chroma until the color falls in gamut.

   .. container:: example
      :name: ex-gamutmap-p3-yellow-to-srgb

      ` <#ex-gamutmap-p3-yellow-to-srgb>`__ In this example, Display P3
      primary yellow (``color(display-p3 1 1 0)``) is being mapped to an
      sRGB display. The gamut mapping color space is Oklch.
      .. code:: lang-css

         color(display-p3 1 1 0)

      is

      .. code:: lang-css

         color(srgb 1 1 -0.3463)

      which is

      .. code:: lang-css

         color(oklch 0.96476 0.24503 110.23)

      By progressively reducing the chroma component until the resulting
      color falls inside the sRGB gamut (has no components negative, or
      greater than one) a gamut mapped color is obtained.

      .. code:: lang-css

            color(oklch 0.96476 0.21094 110.23)

      which is

      .. code:: lang-css

            color(srgb 0.99116 0.99733 0.00001)

      .. figure:: ./images/slice-ok-110.23.svg
         name: gamutmap-p3-yellow
         :width: 776px
         :height: 565px

         A constant-hue slice of Oklch color space. The vertical axis
         represents lightness, the horizontal axis is chroma. The color
         to be mapped, shown as a yellow circle, has the chroma reduced
         while keeping hue and lightness constant. The color therefore
         moves along the maroon line in the diagram, towards the neutral
         axis on the left. The gamut boundary of sRGB is shown in green.

   A practical implementation will converge more quickly than a linear
   reduction; either by binary search, or by computing the geometric
   intersection of the line of constant hue and lightness with the gamut
   boundary.

/13.1.4. Excessive Chroma
-------------------------

   .. .. rubric:: 13.1.4. Excessive Chroma
      Reduction\ ` <#GM-excessive-reduction>`__
      :name: GM-excessive-reduction
      :class: heading settled

   Also, this simple approach will give sub-optimal results for certain
   colors, principally very light colors like yellow and cyan, if the
   upper edge of the gamut boundary is shallow, or even slightly
   concave. The line of constant lightness can skim just above the gamut
   boundary, resulting in an excessively low chroma in those cases.

   The choice of color space will affect the acceptability of the gamut
   mapped colors.

   .. container:: example
      :name: CIELCH-p3-yellow-noclip

      ` <#CIELCH-p3-yellow-noclip>`__ In this example, Display P3
      primary yellow (``color(display-p3 1 1 0``) has the chroma
      progressively reduced in CIE LCH color space.
      .. figure:: ./images/lab-yellow-LCH-fade.svg
         :width: 700px

         In the upper part of this diagram, colors which are inside the
         gamut of sRGB are displayed as-is. Colors inside the gamut of
         Display P3 (but outside sRGB) are in salmon. Colors outside the
         gamut of Display P3 are in red. The lower part of the diagram
         shows the linear-light intensities of the Display P3 red, green
         and blue components.

      It can be seen that reduction in CIE LCH chroma makes the red
      intensity curve up, out of Display P3 gamut; by the time it falls
      again the chroma is very low. Simple gamut mapping in CIE LCH
      would give unsatisfactory results.

   .. container:: example
      :name: Oklch-p3-yellow-noclip

      ` <#Oklch-p3-yellow-noclip>`__ In this example, Display P3 primary
      yellow (``color(display-p3 1 1 0``) has the chroma progressively
      reduced, but this time in Oklch color space.
      .. figure:: ./images/p3-yellow-oklab.svg
         :width: 700px

         In the upper part of this diagram, colors which are inside the
         gamut of sRGB are displayed as-is. Colors inside the gamut of
         Display P3 (but outside sRGB) are in salmon. Colors outside the
         gamut of Display P3 are in red. The lower part of the diagram
         shows the linear-light intensities of the Display P3 red, green
         and blue components.

      It can be seen that reduction in Oklch chroma is better behaved.
      Colors do not go outside the Display P3 gamut, and the resulting
      gamut-mapped yellow has good chroma. Simple gamut mapping in OK
      LCH would give acceptable results.

/13.1.5. Chroma Reduction with Local
------------------------------------

   .. .. rubric:: 13.1.5. Chroma Reduction with Local
      Clipping\ ` <#GM-chroma-local-MINDE>`__
      :name: GM-chroma-local-MINDE
      :class: heading settled

   The simple chroma-reduction algorithm can be improved: at each step,
   the color difference is computed between the current mapped color and
   a clipped version of that color. If the current color is outside the
   gamut boundary, but the color difference between it and the clipped
   version is below the threshold for a *just noticeable difference*
   (JND), the clipped version of the color is returned as the mapped
   result. Effectively, this is doing a MINDE mapping at each stage, but
   constrained so the hue and lightness changes are very small, and thus
   are not noticeable.

   .. container:: example
      :name: CIELCH-p3-yellow-clip

      ` <#CIELCH-p3-yellow-clip>`__ In this example, Display P3 primary
      yellow (``color(display-p3 1 1 0``) has the chroma progressively
      reduced in CIE LCH color space, with the local clip modification.
      .. figure:: ./images/lab-yellow-LCH-clip-fade.svg
         :width: 700px

         In the upper part of this diagram, colors which are inside the
         gamut of sRGB are displayed as-is. Colors inside the gamut of
         Display P3 (but outside sRGB) are in salmon. Colors outside the
         gamut of Display P3 are in red. The lower part of the diagram
         shows the linear-light intensities of the Display P3 red, green
         and blue components.

      It can be seen that reduction in CIE LCH chroma still makes the
      red intensity curve up, out of Display P3 gamut; but less than
      before and the sRGB boundary is found much more quickly. Gamut
      mapping in CIE LCH with local clip would give acceptable results.

   .. container:: example
      :name: Oklch-p3-yellow-clip

      ` <#Oklch-p3-yellow-clip>`__ In this example, Display P3 primary
      yellow (``color(display-p3 1 1 0``) has the chroma progressively
      reduced, but this time in Oklch color space and with the local
      clip modification.
      .. figure:: ./images/p3-yellow-oklab-clip.svg
         :width: 700px

         In the upper part of this diagram, colors which are inside the
         gamut of sRGB are displayed as-is. Colors inside the gamut of
         Display P3 (but outside sRGB) are in salmon. Colors outside the
         gamut of Display P3 are in red. The lower part of the diagram
         shows the linear-light intensities of the Display P3 red, green
         and blue components.

      It can be seen that reduction in Oklch chroma, which was already
      good, is further improved by the local clip modification. Simple
      gamut mapping in CIE LCH with local clip would give excellent
      results.

/13.1.6. Deviations from Perceptual Uniformity: Hue
---------------------------------------------------

   .. .. rubric:: 13.1.6. Deviations from Perceptual Uniformity: Hue
      Curvature\ ` <#GM-hue-curvature>`__
      :name: GM-hue-curvature
      :class: heading settled

   Using the CIE LCH color space and deltaE2000 distance metric, is
   known to give suboptimal results with significant hue shifts, for
   colors in the hue range 270° to 330°.

   .. figure:: ./images/CIELCH-blue-slice.png
      :width: 2434px
      :height: 1848px

      A constant-hue slice of CIE LCH color space, at a hue angle of
      301.37° corresponding to sRGB primary blue. The vertical axis is
      Lightness, the horizontal axis is Chroma. Between chroma of 25 and
      75, the hue is visibly purple, becoming more blue between 100 and
      131. The same phenomenon continues past 131, but cannot be shown
      on an sRGB display.

   Using Oklch color space and deltaEOK distance metric avoids this
   issue at all hue angles.

   .. figure:: ./images/OKLCH-blue-slice.png
      :width: 2485px
      :height: 1824px

      A constant-hue slice of Oklch color space, at a hue angle of
      264.06° corresponding to sRGB primary blue. The vertical axis is
      Lightness, the horizontal axis is Chroma. The hue is visibly the
      same at all values of chroma, up to 0.315 (the sRGB limit at this
      hue). It continues to be constant beyond this point, although that
      cannot be shown on an sRGB diagram.

/13.2. CSS Gamut Mapping to an RGB
----------------------------------

   .. .. rubric:: 13.2. CSS Gamut Mapping to an RGB
      Destination\ ` <#css-gamut-mapping>`__
      :name: css-gamut-mapping
      :class: heading settled algorithm

   Tests
   Used values of color are not exposed to script, making this hard to
   test in an automated manner.

   --------------

   The CSS gamut mapping algorithm applies to individual, Standard
   Dynamic Range (SDR) CSS colors which are out of gamut of an RGB
   display and thus require to be css gamut mapped.

   It implements a relative colorimetric intent, and colors inside the
   destination gamut are unchanged.

   Note: other situations, in particular mapping to printer gamuts where
   the maximum black level is significantly above zero, will require
   different algorithms which align the respective black and white
   points, which will result in lightness changes for very light and
   very dark colors as chroma is reduced..

   Note: this algorithm is for individual, distinct colors; for color
   images, where relationships between neighboring pixels are important
   and the aim is to preserve detail and texture, a perceptual rendering
   intent is more appropriate and in that case, colors inside the
   destination gamut could be changed.

   CSS gamut mapping occurs in the `Oklch color space <#ok-lab>`__, and
   the color difference formula used is
   `deltaEOK <#color-difference-OK>`__. The
   `local-MINDE <#GM-chroma-local-MINDE>`__ improvement is used.

   For colors which are out of range on the Lightness axis, white is
   returned in the destination color space if the Lightness is greater
   than or equal to 1.0, while black is returned in the destination
   color space if the Lightness is less than or equal to 0.0.

   For the binary search implementation, at each step in the search, the
   deltaEOK is computed between the current mapped color and a clipped
   version of that color. If the current color is *outside* the gamut
   boundary, but the deltaEOK between it and the clipped version is
   below a threshold for a *just noticeable difference* (JND), the
   clipped version of the color is returned as the mapped result.

   For the geometric implementation, having found the exact
   intersection, project outwards (towards higher chroma) along the line
   of constant lightness until either:

   -  the deltaEOK between the projected point and a clipped version of
      that point exceeds one JND, or

   -  the chroma of the projected point is equal to the chroma of the
      original color (i.e. do not project past the original color)

   Then return the clipped version of the color as the mapped result.

   For the Oklch color space, one JND is is an Oklch difference of 0.02.

   Note: In CIE Lab color space, where the range of the Lightness
   component is 0 to 100, using deltaE2000, one JND is 2. Because the
   range of Lightness in Oklab and Oklch is 0 to 1, using deltaEOK, one
   JND is 100 times smaller.

/13.2.1. Sample Pseudocode for the Binary Search Gamut
------------------------------------------------------

   .. .. rubric:: 13.2.1. Sample Pseudocode for the Binary Search Gamut
      Mapping Algorithm with Local MINDE\ ` <#binsearch>`__
      :name: binsearch
      :class: heading settled

   .. container:: algorithm

      To CSS gamut map a color ``origin`` in color space
      ``origin color space`` to be in gamut of a destination color space
      ``destination``:

      #. if ``destination`` has no gamut limits (XYZ-D65, XYZ-D50, Lab,
         LCH, Oklab, Oklch) convert ``origin`` to ``destination`` and
         return it as the gamut mapped color
      #. let ``origin_Oklch`` be ``origin`` converted from
         ``origin color space`` to the Oklch color space
      #. if the Lightness of ``origin_Oklch`` is greater than or equal
         to 100%, convert \`oklab(1 0 0 / origin.alpha)\` to
         ``destination`` and return it as the gamut mapped color
      #. if the Lightness of ``origin_Oklch`` is less than than or equal
         to 0%, convert \`oklab(0 0 0 / origin.alpha)\` to
         ``destination`` and return it as the gamut mapped color
      #. let inGamut(``color``) be a function which returns true if,
         when passed a color, that color is inside the gamut of
         ``destination``. For HSL and HWB, it returns true if the color
         is inside the gamut of sRGB.
      #. if inGamut(``origin_Oklch``) is true, convert ``origin_Oklch``
         to ``destination`` and return it as the gamut mapped color
      #. otherwise, let delta(``one``, ``two``) be a function which
         returns the deltaEOK of color ``one`` compared to color ``two``
      #. let ``JND`` be 0.02
      #. let ``epsilon`` be 0.0001
      #. let clip(``color``) be a function which converts ``color`` to
         ``destination``, clamps each component to the bounds of the
         reference range for that component and returns the result
      #. set ``current`` to ``origin_Oklch``
      #. set ``clipped`` to clip(``current``)
      #. set ``E`` to delta(``clipped``, ``current``)
      #. if ``E`` < ``JND``

         #. return ``clipped`` as the gamut mapped color

      #. set ``min`` to zero
      #. set ``max`` to the Oklch chroma of ``origin_Oklch``
      #. let ``min_inGamut`` be a boolean that represents when ``min``
         is still in gamut, and set it to true
      #. while (``max`` - ``min`` is greater than ``epsilon``) repeat
         the following steps

         #. set ``chroma`` to (``min`` + ``max``) /2
         #. set the chroma component of ``current`` to ``chroma``
         #. if ``min_inGamut`` is true and also if inGamut(``current``)
            is true, set ``min`` to ``chroma`` and continue to repeat
            these steps
         #. otherwise, if inGamut(``current``) is false carry out these
            steps:

            #. set ``clipped`` to clip(``current``)
            #. set ``E`` to delta(``clipped``, ``current``)
            #. if ``E`` < ``JND``

               #. if (``JND`` - ``E`` < ``epsilon``) return ``clipped``
                  as the gamut mapped color
               #. otherwise,

                  #. set ``min_inGamut`` to false
                  #. set ``min`` to ``chroma``

            #. otherwise, set ``max`` to ``chroma`` and continue to
               repeat these steps

      #. return ``clipped`` as the gamut mapped color

/14. Resolving `<color>`
------------------------

   .. .. rubric:: 14. Resolving `<color> <#typedef-color>`__
      Values\ ` <#resolving-color-values>`__
      :name: resolving-color-values
      :class: heading settled

   Unless otherwise specified for a particular property,
   `specified <https://www.w3.org/TR/css-cascade-5/#specified-value>`__
   colors are resolved to
   `computed <https://www.w3.org/TR/css-cascade-5/#computed-value>`__\ 
   colors and then further to
   `used <https://www.w3.org/TR/css-cascade-5/#used-value>`__\  colors
   as described below.

   The `resolved
   value <https://www.w3.org/TR/cssom-1/#resolved-value>`__ of a
   `<color> <#typedef-color>`__ is its `used
   value <https://www.w3.org/TR/css-cascade-5/#used-value>`__.

   Tests

   -  `color-computed-hex-color.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-hex-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-hex-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-hex-color.html>`__
   -  `color-computed-named-color.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-named-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-named-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-named-color.html>`__
   -  `color-invalid-hex-color.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-hex-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-hex-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-hex-color.html>`__
   -  `color-invalid-named-color.html <https://wpt.fyi/results/css/css-color/parsing/color-invalid-named-color.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-invalid-named-color.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-invalid-named-color.html>`__
   -  `system-color-compute.html <https://wpt.fyi/results/css/css-color/system-color-compute.html>`__
      `(live
      test) <http://wpt.live/css/css-color/system-color-compute.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/system-color-compute.html>`__

/14.1. Resolving sRGB
---------------------

   .. .. rubric:: 14.1. Resolving sRGB
      values\ ` <#resolving-sRGB-values>`__
      :name: resolving-sRGB-values
      :class: heading settled

   This applies to:

   -  `hex colors <#hex-color>`__

   -  `rgb() <#funcdef-rgb>`__ and `rgba() <#funcdef-rgba>`__ values

   -  `hsl() <#funcdef-hsl>`__ and `hsla() <#funcdef-hsla>`__ values

   -  `hwb() <#funcdef-hwb>`__ values

   -  `named colors <#named-color>`__

   -  `system colors <#css-system-colors>`__

   -  `deprecated-colors <#deprecated-system-colors>`__

   It does *not* apply to:

   -  `color() <#funcdef-color>`__ values using the
      `srgb <#valdef-color-srgb>`__ or
      `srgb-linear <#valdef-color-srgb-linear>`__ `color
      space <#color-space>`__\ s.

   If the sRGB color was explicitly specified by the author as a `named
   color <#named-color>`__, or as a `system
   color <#css-system-colors>`__, the `specified
   value <https://www.w3.org/TR/css-cascade-5/#specified-value>`__ is
   that named or system color, converted to `ASCII
   lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__. The
   computed and used value is the corresponding sRGB color, paired with
   the specified alpha channel (after clamping to [0, 1]) and defaulting
   to opaque if unspecified).

   .. container:: example
      :name: ex-named-case

      ` <#ex-named-case>`__
      The author-provided mixed-case form below has a specified value in
      all lowercase.

      .. code:: lang-css

          pUrPlE
          purple

   Otherwise, the specified, computed and used value is the
   corresponding sRGB color, paired with the specified alpha channel
   (after clamping to [0, 1]) and defaulting to opaque if unspecified).

   For historical reasons, when
   `calc() <https://www.w3.org/TR/css-values-4/#funcdef-calc>`__ in sRGB
   colors resolves to a single value, the specified value serialises
   without the "calc(" ")" wrapper.

   .. container:: example
      :name: ex-srgb-calc-specified

      ` <#ex-srgb-calc-specified>`__ For example, if a color is given as
      rgb(calc(64 \* 2) 127 255) the specified value will be rgb(128 127
      255) and not rgb(calc(128) 127 255).

   .. container:: example
      :name: ex-srgb-hsl-calc-specified

      ` <#ex-srgb-hsl-calc-specified>`__ For example, if a color is
      given as hsl(38.82 calc(2 \* 50%) 50%) the specified value will be
      rgb(255 165.2 0) because the
      `calc() <https://www.w3.org/TR/css-values-4/#funcdef-calc>`__ is
      lost during HSL to RGB conversion.

   Also for historical reasons, when calc() is simplified down to a
   single value, the color values are clamped to [0.0, 255.0].

   .. container:: example
      :name: ex-srgb-clamped-calc-specified

      ` <#ex-srgb-clamped-calc-specified>`__ For example, if a color is
      given as rgb(calc(100 \* 4) 127 calc(20 - 35)) the specified value
      will be rgb(255 127 0) and not rgb(calc(400) 127 calc(-15)).

   This clamping also takes care of values such as
   `Infinity <https://www.w3.org/TR/css-values-4/#valdef-calc-infinity>`__,
   -Infiinity, and `NaN <https://www.w3.org/TR/css-values-4/#valdef-calc-nan>`__ which
   will clamp at 255, 0 and 0 respectively.

   .. container:: example
      :name: ex-hsl-computed

      ` <#ex-hsl-computed>`__
      For example, the computed value of

      .. code:: lang-css

          hsl(38.824 100% 50%)

      is

      .. code:: lang-css

          rgb(255, 165, 0)

   Tests

   -  `color-computed-hsl.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-hsl.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-hsl.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-hsl.html>`__
   -  `color-computed-hwb.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-hwb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-hwb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-hwb.html>`__
   -  `color-computed-rgb.html <https://wpt.fyi/results/css/css-color/parsing/color-computed-rgb.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed-rgb.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed-rgb.html>`__

/14.2. Resolving Lab and LCH
----------------------------

   .. .. rubric:: 14.2. Resolving Lab and LCH
      values\ ` <#resolving-lab-lch-values>`__
      :name: resolving-lab-lch-values
      :class: heading settled

   This applies to `lab() <#funcdef-lab>`__ and `lch() <#funcdef-lch>`__
   values.

   The specified, computed and used value is the corresponding CIE Lab
   or LCH color (after clamping of L, C and H) paired with the specified
   alpha channel (as a
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__, not
   a
   `<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__;
   and defaulting to opaque if unspecified).

   .. container:: example
      :name: ex-lch-computed

      ` <#ex-lch-computed>`__
      For example, the computed value of

      .. code:: lang-css

          lch(52.2345% 72.2 56.2 / 1)

      is

      .. code:: lang-css

          lch(52.2345% 72.2 56.2)

/14.3. Resolving Oklab and Oklch
--------------------------------

   .. .. rubric:: 14.3. Resolving Oklab and Oklch
      values\ ` <#resolving-oklab-oklch-values>`__
      :name: resolving-oklab-oklch-values
      :class: heading settled

   This applies to `oklab() <#funcdef-oklab>`__ and
   `oklch() <#funcdef-oklch>`__ values.

   The specified, computed and used value is the corresponding Oklab or
   Oklch color (after clamping of L, C and H) paired with the specified
   alpha channel (as a
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__, not
   a
   `<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__;
   and defaulting to opaque if unspecified).

   .. container:: example
      :name: ex-oklch-computed

      ` <#ex-oklch-computed>`__
      For example, the computed value of

      .. code:: lang-css

          oklch(42.1% 0.192 328.6 / 1)

      is

      .. code:: lang-css

          oklch(42.1% 0.192 328.6)

/14.4. Resolving values of the
------------------------------

   .. .. rubric:: 14.4. Resolving values of the
      `color() <#funcdef-color>`__
      function\ ` <#resolving-color-function-values>`__
      :name: resolving-color-function-values
      :class: heading settled

   The specified, computed and used value is the color in the specified
   `color space <#color-space>`__, paired with the specified alpha
   channel (as a
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__, not
   a
   `<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__;
   and defaulting to opaque if unspecified).

   .. container:: example
      :name: ex-p3-computed

      ` <#ex-p3-computed>`__
      For example, the computed value of

      .. code:: lang-css

          color(display-p3 0.823 0.6554 0.2537 /1)

      is

      .. code:: lang-css

          color(display-p3 0.823 0.6554 0.2537)

   For colors specified in the `xyz <#valdef-color-xyz>`__ `color
   space <#color-space>`__, which is an alias of the
   `xyz-d65 <#valdef-color-xyz-d65>`__ color space, the computed and
   used value is in the xyz-d65 color space.

   .. container:: example
      :name: ex-xyz-computed

      ` <#ex-xyz-computed>`__
      For example, the computed value of

      .. code:: lang-css

          color(xyz 0.472 0.372 0.131)

      is

      .. code:: lang-css

          color(xyz-d65 0.472 0.372 0.131)

/14.5. Resolving other
----------------------

   .. .. rubric:: 14.5. Resolving other
      colors\ ` <#resolving-other-colors>`__
      :name: resolving-other-colors
      :class: heading settled

   This applies to `system colors <#css-system-colors>`__ (including the
   `<deprecated-color> <#typedef-deprecated-color>`__\ s),
   `transparent <#valdef-color-transparent>`__, and currentcolor.

   The specified value for each
   `<system-color> <#typedef-system-color>`__ keyword and
   `<deprecated-color> <#typedef-deprecated-color>`__ keyword is itself.
   The computed value is the corresponding color in its color space.
   However, such colors must not be altered by 'forced colors mode'.

   .. container:: example
      :name: ex-system-resolve

      ` <#ex-system-resolve>`__ For example, in this html:
      .. code:: lang-html

         <button style="color:  ButtonText; background:  ButtonFace"></button>

      The specified value of the color property is "ButtonText" while
      the computed value could be, for example, rgb(0, 0, 0).

   The specified value of `transparent <#valdef-color-transparent>`__ is
   "transparent" while the computed and used value is `transparent
   black <#transparent-black>`__.

   The `currentcolor <#valdef-color-currentcolor>`__ keyword computes to
   itself.

   In the `color <#propdef-color>`__ property, the used value of
   currentcolor is the `inherited
   value <https://www.w3.org/TR/css-cascade-5/#inherited-value>`__. In
   any other property, its used value is the used value of the color
   property on the same element.

   Note: This means that if the
   `currentcolor <#valdef-color-currentcolor>`__ value is inherited,
   it’s inherited as a keyword, not as the value of the
   `color <#propdef-color>`__ property, so descendants will use their
   own color property to resolve it.

   .. container:: example
      :name: ex-currentcolor-resolve

      ` <#ex-currentcolor-resolve>`__ For example, given this html:
      .. code:: lang-html

         <div>
           <p>Assume this example text is long enough
             to wrap on multiple lines.
           </p>
         </div>

      and this css:

      .. code:: lang-css

         div {
           color:  forestgreen;
           text-shadow: currentColor;
         }
         p {
           color:  mediumseagreen;
         } 
         p::firstline {
           color:  yellowgreen;
         }

      The used value of the inherited property text-shadow on the first
      line fragment would be yellowgreen.

   Tests

   -  `currentcolor-001.html <https://wpt.fyi/results/css/css-color/currentcolor-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/currentcolor-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/currentcolor-001.html>`__
   -  `currentcolor-002.html <https://wpt.fyi/results/css/css-color/currentcolor-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/currentcolor-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/currentcolor-002.html>`__
   -  `currentcolor-003.html <https://wpt.fyi/results/css/css-color/currentcolor-003.html>`__
      `(live
      test) <http://wpt.live/css/css-color/currentcolor-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/currentcolor-003.html>`__
   -  `system-color-compute.html <https://wpt.fyi/results/css/css-color/system-color-compute.html>`__
      `(live
      test) <http://wpt.live/css/css-color/system-color-compute.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/system-color-compute.html>`__

/15. Serializing `<color>`
--------------------------

   .. .. rubric:: 15. Serializing `<color> <#typedef-color>`__
      Values\ ` <#serializing-color-values>`__
      :name: serializing-color-values
      :class: heading settled

   This section updates and replaces that part of CSS Object Model,
   section `Serializing CSS
   Values <https://drafts.csswg.org/cssom-1/#serializing-css-values>`__,
   which relates to serializing `<color> <#typedef-color>`__ values.

   In this section, the strings used in the specification and the
   corresponding characters are as follows.

   String
   Character(s)
   " "
   U+0020 SPACE
   ","
   U+002C COMMA
   "-"
   U+002D HYPHEN-MINUS
   "."
   U+002E FULL STOP
   "/"
   U+002F SOLIDUS
   "none"
   U+006E LATIN SMALL LETTER N
   U+006F LATIN SMALL LETTER O
   U+006E LATIN SMALL LETTER N
   U+0065 LATIN SMALL LETTER E
   The string "." shall be used as a decimal separator, regardless of
   locale, and there shall be no thousands separator.

   For syntactic forms which support `missing color
   components <#missing-color-component>`__, the value
   `none <#valdef-color-none>`__ (equivalently NONE, nOnE, etc), shall
   be serialized in all-lowercase as the string "none".

/15.1. Serializing alpha
------------------------

   .. .. rubric:: 15.1. Serializing alpha
      values\ ` <#serializing-alpha-values>`__
      :name: serializing-alpha-values
      :class: heading settled

   This applies to any `<color> <#typedef-color>`__ value which can take
   an optional alpha value. It does not apply to the opacity property.

   If, after clamping to the range [0, 1] the alpha is 1, it is omitted
   from the serialization; an implicit value of 1 (fully opaque) is the
   default.

   If the alpha is any other value than 1, it is explicitly included in
   the serialization as described below.

   If the value is internally represented as an integer between 0 and
   255 inclusive (i.e. 8-bit unsigned integer), follow these steps:

   #. Let ``alpha`` be the given integer.
   #. If there exists an integer between 0 and 100 inclusive that, when
      multiplied with 2.55 and rounded to the closest integer (rounding
      up if two values are equally close), equals ``alpha``, let
      ``rounded`` be that integer divided by 100.
   #. Otherwise, let ``rounded`` be ``alpha`` divided by 0.255 and
      rounded to the closest integer (rounding up if two values are
      equally close), divided by 1000.
   #. Return the result of serializing ``rounded`` as a
      `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__.

   Otherwise, return the result of serializing the given value (as a
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__, not
   a
   `<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__).

   .. container:: example
      :name: ex-alpha-255

      ` <#ex-alpha-255>`__
      For example, if the alpha is stored as the 8-bit unsigned integer
      237, the integer 93 satisfies the criterion because Math.round(93
      \* 2.55) is 237, and so the alpha is serialized as "0.93".

      However, if the alpha is stored as the 8-bit unsigned integer 236,
      there is no such integer (92 maps to 235 while 94 maps to 240),
      and so since 236 ÷ 0.255 = 925.490196078 the alpha is serialized
      as "0.92549" (no more than 6 figures, trailing zeroes omitted).

   The `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__
   value is expressed in base ten, with the "." character as decimal
   separator. The leading zero must not be omitted. Trailing zeroes must
   be omitted.

   .. container:: example
      :name: ex-alpha-trimzero

      ` <#ex-alpha-trimzero>`__
      For example, an alpha value of 70% will be serialized as the
      string "0.7" which has a leading zero before the decimal
      separator, "." as decimal separator (even if the current locale
      would use some other character, such as ","), and all digits after
      the "7" would be "0" and are omitted.

   The precision with which alpha values are retained, and thus the
   number of decimal places in the serialized value, is not defined in
   this specification, but must at least be sufficient to round-trip
   integer percentage values. Thus, the serialized value must contain at
   least two decimal places (unless trailing zeroes have been removed).
   Values must be `rounded towards
   +∞ <https://drafts.csswg.org/css-values-4/#combine-integers>`__, not
   truncated.

   .. container:: example
      :name: ex-alpha-round

      ` <#ex-alpha-round>`__
      For example, an alpha value of 12.3456789% could be serialized as
      the strings "0.12" or "0.123" or "0.1234" or "0.12346" (rounding
      the value of 5 towards +∞ because the following digit is 6) or any
      longer, rounded serialization of the same form.

   Because `<alpha-value> <#typedef-color-alpha-value>`__\ s which were
   specified outside the valid range are clamped at parse time, the
   specified value will be clamped. However, per `CSS Values 4 § 10.12
   Range Checking <https://www.w3.org/TR/css-values-4/#calc-range>`__,
   <alpha-value>s specified using calc() are not clamped when the
   specified form is serialized; but the computed values are clamped.

   .. container:: example
      :name: ex-alpha-clamp

      ` <#ex-alpha-clamp>`__
      For example an alpha value which was specified directly as 120%
      would be serialized as the string "1". However, if it was
      specified as calc(2*60%) the specified value would be serialized
      as the string "calc(1.2)".

/15.2. Serializing sRGB
-----------------------

   .. .. rubric:: 15.2. Serializing sRGB
      values\ ` <#serializing-sRGB-values>`__
      :name: serializing-sRGB-values
      :class: heading settled

   The serialized form of the following sRGB values:

   -  `hex colors <#hex-color>`__

   -  `rgb() <#funcdef-rgb>`__ and `rgba() <#funcdef-rgba>`__ values

   -  `hsl() <#funcdef-hsl>`__ and `hsla() <#funcdef-hsla>`__ values

   -  `hwb() <#funcdef-hwb>`__ values

   -  `named colors <#named-color>`__

   -  `system colors <#css-system-colors>`__

   -  `deprecated-colors <#deprecated-system-colors>`__

   -  `transparent <#valdef-color-transparent>`__

   is derived from the `specified
   value <https://www.w3.org/TR/css-cascade-5/#specified-value>`__.

   When serializing the value of a property which was set by the author
   to a CSS `named color <#named-color>`__, a `system
   color <#css-system-colors>`__, a
   `deprecated-color <#deprecated-system-colors>`__, or
   `transparent <#valdef-color-transparent>`__ therefore, for the
   `specified
   value <https://www.w3.org/TR/css-cascade-5/#specified-value>`__, the
   `ASCII lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__
   keyword value is retained. For the computed and used value, the
   corresponding sRGB value is used.

   Tests

   -  `system-color-compute.html <https://wpt.fyi/results/css/css-color/system-color-compute.html>`__
      `(live
      test) <http://wpt.live/css/css-color/system-color-compute.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/system-color-compute.html>`__

   Thus, the serialized specified value of
   `transparent <#valdef-color-transparent>`__ is the string
   "transparent", while the serialized computed value of transparent is
   the string "rgba(0, 0, 0, 0)".

   For all other sRGB values, the specified, computed and used value is
   the corresponding sRGB value.

   Corresponding sRGB values use either the `rgb() <#funcdef-rgb>`__ or
   `rgba() <#funcdef-rgba>`__ form (depending on whether the (clamped)
   alpha is exactly 1, or not), with all `ASCII
   lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__ letters
   for the function name.

   During serialization, any `missing <#missing-color-component>`__
   values are converted to 0.

   For compatibility, the sRGB component values are serialized in
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__ form,
   not
   `<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__.
   Also for compatibility, the component values are serialized in base
   10, with a range of [0-255], regardless of the bit depth with which
   they are stored.

   `As noted earlier <#serializing-alpha-values>`__, unitary alpha
   values are not explicitly serialized. Also, for compatibility, if the
   alpha is exactly 1, the `rgb() <#funcdef-rgb>`__ form is used, with
   an implicit alpha; otherwise, the `rgba() <#funcdef-rgba>`__ form is
   used, with an explicit alpha value.

   For compatibility, the legacy form with comma separators is used;
   exactly one ASCII space follows each comma. This includes the comma
   (not slash) used to separate the blue component of
   `rgba() <#funcdef-rgba>`__ from the alpha value.

   .. container:: example
      :name: ex-rgb-ser-int-rgba

      ` <#ex-rgb-ser-int-rgba>`__
      For example, the serialized value of

      .. code:: lang-css

          rgb(29 164 192 / 95%)

      is the string "rgba(29, 164, 192, 0.95)"

   .. container:: example
      :name: ex-hwb-serial

      ` <#ex-hwb-serial>`__ For example, an author-supplied value:
      .. code:: lang-css

          hwb(740deg 20% 30% / 50%)

      Would be normalized first to

      .. code:: lang-css

          hwb(20 20% 30% / 50%)

      and then converted to sRGB and serialized as

      .. code:: lang-css

          rgba(178.5, 93.5, 51, 0.5)

      The precision of the returned result is `described
      below <#sRGB-precision>`__.

   Note: contrary to CSS Color 3, the parameters of the
   `rgb() <#funcdef-rgb>`__ function are of type
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__, not
   `<integer> <https://www.w3.org/TR/css-values-4/#integer-value>`__.
   Thus, any higher precision than eight bits is indicated with a
   fractional part.

   The precision with which sRGB component values are retained, and thus
   the number of significant figures in the serialized value, is not
   defined in this specification, but must at least be sufficient to
   round-trip eight bit values. Values must be `rounded towards
   +∞ <https://drafts.csswg.org/css-values-4/#combine-integers>`__, not
   truncated.

   Note: authors of scripts which expect color values returned from
   getComputedStyle to have
   `<integer> <https://www.w3.org/TR/css-values-4/#integer-value>`__
   component values, are advised to update them to also cope with
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__.

   .. container:: example
      :name: ex-rgb-number

      ` <#ex-rgb-number>`__
      For example,

      .. code:: lang-css

          rgb(146.064 107.457 131.223)

      is now valid, and equal to

      .. code:: lang-css

          rgb(57.28% 42.14% 51.46%)

      A conformant serialized form for both, is the string "rgb(146.06,
      107.46, 131.2)".

   Trailing fractional zeroes in any component values must be omitted;
   if the fractional part consists of all zeroes, the decimal point must
   also be omitted. This means that sRGB colors specified with integer
   component values will serialize with backwards-compatible integer
   values.

   .. container:: example
      :name: ex-rgb-notrail

      ` <#ex-rgb-notrail>`__
      The serialized computed value of

      .. code:: lang-css

          goldenrod

      is the string "rgb(218, 165, 32)" and not the string "rgb(218.000,
      165.000, 32.000)"

/15.3. Serializing Lab and LCH
------------------------------

   .. .. rubric:: 15.3. Serializing Lab and LCH
      values\ ` <#serializing-lab-lch>`__
      :name: serializing-lab-lch
      :class: heading settled

   The serialized form of `lch() <#funcdef-lch>`__ and
   `lab() <#funcdef-lab>`__ values is derived from the `computed
   value <https://www.w3.org/TR/css-cascade-5/#computed-value>`__ and
   uses the lab() or lch() forms, with `ASCII
   lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__ letters
   for the function name.

   The component values are serialized in base 10; the L, a, b and C
   component values are serialized as
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__,
   using the `Lab percentage reference ranges <#prr-lab>`__ or the `LCH
   percentage reference ranges <#prr-lch>`__ as appropriate to perform
   percentage to number conversion; thus 0% L maps to 0 and 100% L maps
   to 100. A single ASCII space character " " must be used as the
   separator between the component values.

   Tests

   -  `color-computed.html <https://wpt.fyi/results/css/css-color/parsing/color-computed.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed.html>`__

   .. container:: example
      :name: ex-lab-zero-a

      ` <#ex-lab-zero-a>`__
      The serialized value of

      .. code:: lang-css

          lab(56.200% 0.000 83.600)

      is the string "lab(56.2 0 83.6)"

   .. container:: example
      :name: ex-lab-percent-b

      ` <#ex-lab-percent-b>`__
      The serialized value of

      .. code:: lang-css

          lab(56.200% 0.000 66.88%)

      is the string "lab(56.2 0 83.6)"

   Trailing fractional zeroes in any component values must be omitted;
   if the fractional part consists of all zeroes, the decimal point must
   also be omitted.

   .. container:: example
      :name: ex-lch-serial

      ` <#ex-lch-serial>`__
      The serialized value of

      .. code:: lang-css

          lch(37% 105.0 305.00)

      is the string "lch(37 105 305)", not "lch(37 105.0 305.00)".

   The precision with which `lab() <#funcdef-lab>`__ component values
   are retained, and thus the number of significant figures in the
   serialized value, is not defined in this specification, but due to
   the wide gamut must be sufficient to round-trip L values between 0
   and 100, and a and b values between ±127, with at least sixteen bit
   precision; this will result in at least three decimal places unless
   trailing zeroes have been omitted. (half float or float, is
   recommended for internal storage). Values must be `rounded towards
   +∞ <https://drafts.csswg.org/css-values-4/#combine-integers>`__, not
   truncated.

   Note: a and b values outside ±125 are possible with ultrawide gamut
   spaces. For example, *all* of the
   `prophoto-rgb <#valdef-color-prophoto-rgb>`__ primaries and
   secondaries exceed this range, but are within ±200.

   `As noted earlier <#serializing-alpha-values>`__, unitary alpha
   values are not explicitly serialized. Non-unitary alpha values must
   be explicitly serialized, and the string " / " (an ASCII space, then
   forward slash, then another space) must be used to separate the b
   component value from the alpha value.

   .. container:: example
      :name: ex-lch-alpha

      ` <#ex-lch-alpha>`__
      The serialized value of

      .. code:: lang-css

          lch(56.2% 83.6 357.4 /93%)

      is the string "lch(56.2 83.6 357.4 / 0.93)" not "lch(56.2% 83.6
      357.4 / 0.93)"

/15.4. Serializing Oklab and Oklch
----------------------------------

   .. .. rubric:: 15.4. Serializing Oklab and Oklch
      values\ ` <#serializing-oklab-oklch>`__
      :name: serializing-oklab-oklch
      :class: heading settled

   The serialized form of `oklch() <#funcdef-oklch>`__ and
   `oklab() <#funcdef-oklab>`__ values is derived from the `computed
   value <https://www.w3.org/TR/css-cascade-5/#computed-value>`__ and
   uses the oklab() or oklch() forms, with `ASCII
   lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__ letters
   for the function name.

   The component values are serialized in base 10; the L, a, b and C
   component values are serialized as
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__ using
   the `Oklab percentage reference ranges <#prr-oklab>`__ or the `Oklch
   percentage reference ranges <#prr-oklch>`__ as appropriate to perform
   percentage to number conversion; thus 0% L maps to 0 and 100% L maps
   to 1.0. A single ASCII space character " " must be used as the
   separator between the component values.

   Tests

   -  `color-computed.html <https://wpt.fyi/results/css/css-color/parsing/color-computed.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed.html>`__

   .. container:: example
      :name: ex-oklab-trailzero

      ` <#ex-oklab-trailzero>`__
      The serialized value of

      .. code:: lang-css

          oklab(54.0% -0.10 -0.02)

      is the string "oklab(0.54 -0.1 -0.02)" not "oklab(54 -0.1 -0.02)"
      or "oklab(54% -0.1 -0.02)"

   .. container:: example
      :name: ex-oklab-percent-a-b

      ` <#ex-oklab-percent-a-b>`__
      The serialized value of

      .. code:: lang-css

          oklab(54.0 -25% -5%)

      is the string "oklab(0.54 -0.1 -0.02)" not "oklab(54 -0.25 -0.05)"

   Trailing fractional zeroes in any component values must be omitted;
   if the fractional part consists of all zeroes, the decimal point must
   also be omitted.

   .. container:: example
      :name: ex-oklch-serial

      ` <#ex-oklch-serial>`__
      The serialized value of

      .. code:: lang-css

          oklch(56.43% 0.0900 123.40)

      is the string "oklch(0.5643 0.09 123.4)", not "oklch(0.5643 0.0900
      123.40)".

   The precision with which `oklab() <#funcdef-oklab>`__ component
   values are retained, and thus the number of significant figures in
   the serialized value, is not defined in this specification, but due
   to the wide gamut must be sufficient to round-trip L values between 0
   and 1 (0% and 100%), and a, b and C values between ±0.5, with at
   least sixteen bit precision; this will result in at least five
   decimal places unless trailing zeroes have been omitted. (half float
   or float, is recommended for internal storage). Values must be
   `rounded towards
   +∞ <https://drafts.csswg.org/css-values-4/#combine-integers>`__, not
   truncated.

   Note: a, b and C values outside ±0.5 are possible with ultrawide
   gamut spaces. For example, the
   `prophoto-rgb <#valdef-color-prophoto-rgb>`__ green and blue
   primaries exceed this range, with C of 0.526 and 1.413 respectively.

   `As noted earlier <#serializing-alpha-values>`__, unitary alpha
   values are not explicitly serialized. Non-unitary alpha values must
   be explicitly serialized, and the string " / " (an ASCII space, then
   forward slash, then another space) must be used to separate the final
   color component (b, or C) value from the alpha value.

   .. container:: example
      :name: ex-oklch-alpha

      ` <#ex-oklch-alpha>`__
      The serialized value of

      .. code:: lang-css

          oklch(53.85% 0.1725 320.67 / 70%)

      is the string "oklch(0.5385 0.1725 320.67 / 0.7)"

/15.5. Serializing values of the
--------------------------------

   .. .. rubric:: 15.5. Serializing values of the
      `color() <#funcdef-color>`__
      function\ ` <#serializing-color-function-values>`__
      :name: serializing-color-function-values
      :class: heading settled

   The serialized form of `color() <#funcdef-color>`__ values is derived
   from the `computed
   value <https://www.w3.org/TR/css-cascade-5/#computed-value>`__ and
   uses the color() form, with `ASCII
   lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__ letters
   for the function name and the color space name.

   The component values are serialized in base 10, as
   `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__. A
   single ASCII space character " " must be used as the separator
   between the component values, and also between the color space name
   and the first color component.

   Tests

   -  `color-computed.html <https://wpt.fyi/results/css/css-color/parsing/color-computed.html>`__
      `(live
      test) <http://wpt.live/css/css-color/parsing/color-computed.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/parsing/color-computed.html>`__

   .. container:: example
      :name: ex-color-serial

      ` <#ex-color-serial>`__
      The serialized value of

      .. code:: lang-css

          color(dIsPlAy-P3  0.964  0.763  0.787)

      is the string "color(display-p3 0.96 0.76 0.79)", if two decimal
      places are retained. Notice that 0.787 has rounded up to 0.79,
      rather than being truncated to 0.78.

   Trailing fractional zeroes in any component values must be omitted;
   if the fractional part consists of all zeroes, the decimal point must
   also be omitted.

   .. container:: example
      :name: ex-color-trailzero

      ` <#ex-color-trailzero>`__
      The serialized value of

      .. code:: lang-css

          color(rec2020 0.400 0.660 0.340)

      is the string "color(rec2020 0.4 0.66 0.34)", not "color(rec2020
      0.400 0.660 0.340)".

   If the color space is sRGB, the color space is still explicitly
   required in the serialized result.

   For the predefined color spaces, the *minimum* precision for
   round-tripping is as follows:

   color space
   Minimum bits
   `srgb <#valdef-color-srgb>`__
   10
   `srgb-linear <#valdef-color-srgb-linear>`__
   12
   `display-p3 <#valdef-color-display-p3>`__
   10
   `a98-rgb <#valdef-color-a98-rgb>`__
   10
   `prophoto-rgb <#valdef-color-prophoto-rgb>`__
   12
   `rec2020 <#valdef-color-rec2020>`__
   12
   `xyz <#valdef-color-xyz>`__, `xyz-d50 <#valdef-color-xyz-d50>`__,
   `xyz-d65 <#valdef-color-xyz-d65>`__
   16
   (16bit, half-float, or float *per component* is recommended for
   internal storage). Values must be `rounded towards
   +∞ <https://drafts.csswg.org/css-values-4/#combine-integers>`__, not
   truncated.

   Note: compared to the legacy forms such as `rgb() <#funcdef-rgb>`__,
   `hsl() <#funcdef-hsl>`__ and so on, color(srgb) has a higher minimum
   precision requirement. Stylesheet authors who prefer higher precision
   are thus encouraged to use the color(srgb) form.

   `As noted earlier <#serializing-alpha-values>`__, unitary alpha
   values are not explicitly serialized. Non-unitary alpha values must
   be explicitly serialized, and the string " / " (an ASCII space, then
   forward slash, then another space) must be used to separate the final
   color component value from the alpha value.

   .. container:: example
      :name: ex-color-prophoto-alpha-serial

      ` <#ex-color-prophoto-alpha-serial>`__
      The serialized value of

      .. code:: lang-css

          color(prophoto-rgb 0.2804 0.40283 0.42259/85%)

      is the string "color(prophoto-rgb 0.28 0.403 0.423 / 0.85)", if
      three decimal places are retained.

/15.6. Serializing other
------------------------

   .. .. rubric:: 15.6. Serializing other
      colors\ ` <#serializing-other-colors>`__
      :name: serializing-other-colors
      :class: heading settled

   This applies to `currentcolor <#valdef-color-currentcolor>`__.

   The serialized form of this value is derived from the `computed
   value <https://www.w3.org/TR/css-cascade-5/#computed-value>`__ and
   uses `ASCII
   lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__ letters
   for the color name.

   The serialized form of `currentColor <#valdef-color-currentcolor>`__
   is the string "currentcolor".

/16. Default Style Rules
------------------------

   .. .. rubric:: 16. Default Style Rules\ ` <#sample>`__
      :name: sample
      :class: heading settled

   The following stylesheet is informative, not normative. This style
   sheet could be used by an implementation as part of its default
   styling of HTML documents.

   .. code:: lang-css

      /* traditional desktop user agent colors for hyperlinks */
      :link { color: LinkText; }
      :visited { color: VisitedText; }
      :active { color: ActiveText; }

/17. Sample code for Color
--------------------------

   .. .. rubric:: 17. Sample code for Color
      Conversions\ ` <#color-conversion-code>`__
      :name: color-conversion-code
      :class: heading settled

   *This section is not normative.*

   Tests
   This section is not normative, it does not need tests.

   --------------

   For clarity, `a library <multiply-matrices.js>`__ is used for matrix
   multiplication. (This is more readable than inlining all the
   multiplies and adds). The matrices are in `column-major
   order <https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/row-major-vs-column-major-vector>`__.

   .. code:: include-code

      // Sample code for color conversions
      // Conversion can also be done using ICC profiles and a Color Management System
      // For clarity, a library is used for matrix multiplication (multiply-matrices.js)

      // standard white points, defined by 4-figure CIE x,y chromaticities
      const D50 = [0.3457 / 0.3585, 1.00000, (1.0 - 0.3457 - 0.3585) / 0.3585];
      const D65 = [0.3127 / 0.3290, 1.00000, (1.0 - 0.3127 - 0.3290) / 0.3290];

      // sRGB-related functions

      function lin_sRGB(RGB) {
          // convert an array of sRGB values
          // where in-gamut values are in the range [0 - 1]
          // to linear light (un-companded) form.
          // https://en.wikipedia.org/wiki/SRGB
          // Extended transfer function:
          // for negative values,  linear portion is extended on reflection of axis,
          // then reflected power function is used.
          return RGB.map(function (val) {
              let sign = val < 0? -1 : 1;
              let abs = Math.abs(val);

              if (abs <= 0.04045) {
                  return val / 12.92;
              }

              return sign * (Math.pow((abs + 0.055) / 1.055, 2.4));
          });
      }

      function gam_sRGB(RGB) {
          // convert an array of linear-light sRGB values in the range 0.0-1.0
          // to gamma corrected form
          // https://en.wikipedia.org/wiki/SRGB
          // Extended transfer function:
          // For negative values, linear portion extends on reflection
          // of axis, then uses reflected pow below that
          return RGB.map(function (val) {
              let sign = val < 0? -1 : 1;
              let abs = Math.abs(val);

              if (abs > 0.0031308) {
                  return sign * (1.055 * Math.pow(abs, 1/2.4) - 0.055);
              }

              return 12.92 * val;
          });
      }

      function lin_sRGB_to_XYZ(rgb) {
          // convert an array of linear-light sRGB values to CIE XYZ
          // using sRGB's own white, D65 (no chromatic adaptation)

          var M = [
              [ 506752 / 1228815,  87881 / 245763,   12673 /   70218 ],
              [  87098 /  409605, 175762 / 245763,   12673 /  175545 ],
              [   7918 /  409605,  87881 / 737289, 1001167 / 1053270 ],
          ];
          return multiplyMatrices(M, rgb);
      }

      function XYZ_to_lin_sRGB(XYZ) {
          // convert XYZ to linear-light sRGB

          var M = [
              [   12831 /   3959,    -329 /    214, -1974 /   3959 ],
              [ -851781 / 878810, 1648619 / 878810, 36519 / 878810 ],
              [     705 /  12673,   -2585 /  12673,   705 /    667 ],
          ];

          return multiplyMatrices(M, XYZ);
      }

      //  display-p3-related functions


      function lin_P3(RGB) {
          // convert an array of display-p3 RGB values in the range 0.0 - 1.0
          // to linear light (un-companded) form.

          return lin_sRGB(RGB);  // same as sRGB
      }

      function gam_P3(RGB) {
          // convert an array of linear-light display-p3 RGB  in the range 0.0-1.0
          // to gamma corrected form

          return gam_sRGB(RGB);  // same as sRGB
      }

      function lin_P3_to_XYZ(rgb) {
          // convert an array of linear-light display-p3 values to CIE XYZ
          // using  D65 (no chromatic adaptation)
          // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
          var M = [
              [ 608311 / 1250200, 189793 / 714400,  198249 / 1000160 ],
              [  35783 /  156275, 247089 / 357200,  198249 / 2500400 ],
              [      0 /       1,  32229 / 714400, 5220557 / 5000800 ],
          ];

          return multiplyMatrices(M, rgb);
      }

      function XYZ_to_lin_P3(XYZ) {
          // convert XYZ to linear-light P3
          var M = [
              [ 446124 / 178915, -333277 / 357830, -72051 / 178915 ],
              [ -14852 /  17905,   63121 /  35810,    423 /  17905 ],
              [  11844 / 330415,  -50337 / 660830, 316169 / 330415 ],
          ];

          return multiplyMatrices(M, XYZ);
      }

      // prophoto-rgb functions

      function lin_ProPhoto(RGB) {
          // convert an array of prophoto-rgb values
          // where in-gamut colors are in the range [0.0 - 1.0]
          // to linear light (un-companded) form.
          // Transfer curve is gamma 1.8 with a small linear portion
          // Extended transfer function
          const Et2 = 16/512;
          return RGB.map(function (val) {
              let sign = val < 0? -1 : 1;
              let abs = Math.abs(val);

              if (abs <= Et2) {
                  return val / 16;
              }

              return sign * Math.pow(abs, 1.8);
          });
      }

      function gam_ProPhoto(RGB) {
          // convert an array of linear-light prophoto-rgb  in the range 0.0-1.0
          // to gamma corrected form
          // Transfer curve is gamma 1.8 with a small linear portion
          // TODO for negative values, extend linear portion on reflection of axis, then add pow below that
          const Et = 1/512;
          return RGB.map(function (val) {
              let sign = val < 0? -1 : 1;
              let abs = Math.abs(val);

              if (abs >= Et) {
                  return sign * Math.pow(abs, 1/1.8);
              }

              return 16 * val;
          });
      }

      function lin_ProPhoto_to_XYZ(rgb) {
          // convert an array of linear-light prophoto-rgb values to CIE D50 XYZ
          // matrix cannot be expressed in rational form, but is calculated to 64 bit accuracy
          // see https://github.com/w3c/csswg-drafts/issues/7675
          var M = [
              [ 0.79776664490064230,  0.13518129740053308,  0.03134773412839220 ],
              [ 0.28807482881940130,  0.71183523424187300,  0.00008993693872564 ],
              [ 0.00000000000000000,  0.00000000000000000,  0.82510460251046020 ]
          ];

          return multiplyMatrices(M, rgb);
      }

      function XYZ_to_lin_ProPhoto(XYZ) {
          // convert D50 XYZ to linear-light prophoto-rgb
          var M = [
              [  1.34578688164715830, -0.25557208737979464, -0.05110186497554526 ],
              [ -0.54463070512490190,  1.50824774284514680,  0.02052744743642139 ],
              [  0.00000000000000000,  0.00000000000000000,  1.21196754563894520 ]
          ];

          return multiplyMatrices(M, XYZ);
      }

      // a98-rgb functions

      function lin_a98rgb(RGB) {
          // convert an array of a98-rgb values in the range 0.0 - 1.0
          // to linear light (un-companded) form.
          // negative values are also now accepted
          return RGB.map(function (val) {
              let sign = val < 0? -1 : 1;
              let abs = Math.abs(val);

              return sign * Math.pow(abs, 563/256);
          });
      }

      function gam_a98rgb(RGB) {
          // convert an array of linear-light a98-rgb  in the range 0.0-1.0
          // to gamma corrected form
          // negative values are also now accepted
          return RGB.map(function (val) {
              let sign = val < 0? -1 : 1;
              let abs = Math.abs(val);

              return sign * Math.pow(abs, 256/563);
          });
      }

      function lin_a98rgb_to_XYZ(rgb) {
          // convert an array of linear-light a98-rgb values to CIE XYZ
          // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
          // has greater numerical precision than section 4.3.5.3 of
          // https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
          // but the values below were calculated from first principles
          // from the chromaticity coordinates of R G B W
          // see matrixmaker.html
          var M = [
              [ 573536 /  994567,  263643 / 1420810,  187206 /  994567 ],
              [ 591459 / 1989134, 6239551 / 9945670,  374412 / 4972835 ],
              [  53769 / 1989134,  351524 / 4972835, 4929758 / 4972835 ],
          ];

          return multiplyMatrices(M, rgb);
      }

      function XYZ_to_lin_a98rgb(XYZ) {
          // convert XYZ to linear-light a98-rgb
          var M = [
              [ 1829569 /  896150, -506331 /  896150, -308931 /  896150 ],
              [ -851781 /  878810, 1648619 /  878810,   36519 /  878810 ],
              [   16779 / 1248040, -147721 / 1248040, 1266979 / 1248040 ],
          ];

          return multiplyMatrices(M, XYZ);
      }

      //Rec. 2020-related functions

      function lin_2020(RGB) {
          // convert an array of rec2020 RGB values in the range 0.0 - 1.0
          // to linear light (un-companded) form.
          // ITU-R BT.2020-2 p.4

          const α = 1.09929682680944 ;
          const β = 0.018053968510807;

          return RGB.map(function (val) {
              let sign = val < 0? -1 : 1;
              let abs = Math.abs(val);

              if (abs < β * 4.5 ) {
                  return val / 4.5;
              }

              return sign * (Math.pow((abs + α -1 ) / α, 1/0.45));
          });
      }

      function gam_2020(RGB) {
          // convert an array of linear-light rec2020 RGB  in the range 0.0-1.0
          // to gamma corrected form
          // ITU-R BT.2020-2 p.4

          const α = 1.09929682680944 ;
          const β = 0.018053968510807;


          return RGB.map(function (val) {
              let sign = val < 0? -1 : 1;
              let abs = Math.abs(val);

              if (abs > β ) {
                  return sign * (α * Math.pow(abs, 0.45) - (α - 1));
              }

              return 4.5 * val;
          });
      }

      function lin_2020_to_XYZ(rgb) {
          // convert an array of linear-light rec2020 values to CIE XYZ
          // using  D65 (no chromatic adaptation)
          // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
          var M = [
              [ 63426534 / 99577255,  20160776 / 139408157,  47086771 / 278816314 ],
              [ 26158966 / 99577255, 472592308 / 697040785,   8267143 / 139408157 ],
              [        0 /        1,  19567812 / 697040785, 295819943 / 278816314 ],
          ];
          // 0 is actually calculated as  4.994106574466076e-17

          return multiplyMatrices(M, rgb);
      }

      function XYZ_to_lin_2020(XYZ) {
          // convert XYZ to linear-light rec2020
          var M = [
              [  30757411 / 17917100, -6372589 / 17917100, -4539589 / 17917100 ],
              [ -19765991 / 29648200, 47925759 / 29648200,   467509 / 29648200 ],
              [    792561 / 44930125, -1921689 / 44930125, 42328811 / 44930125 ],
          ];

          return multiplyMatrices(M, XYZ);
      }

      // Chromatic adaptation

      function D65_to_D50(XYZ) {
          // Bradford chromatic adaptation from D65 to D50
          // The matrix below is the result of three operations:
          // - convert from XYZ to retinal cone domain
          // - scale components from one reference white to another
          // - convert back to XYZ
          // see https://github.com/LeaVerou/color.js/pull/354/files
          
          var M =  [
              [  1.0479297925449969,    0.022946870601609652,  -0.05019226628920524  ],
              [  0.02962780877005599,   0.9904344267538799,    -0.017073799063418826 ],
              [ -0.009243040646204504,  0.015055191490298152,   0.7518742814281371   ]
          ];

          return multiplyMatrices(M, XYZ);
      }

      function D50_to_D65(XYZ) {
          // Bradford chromatic adaptation from D50 to D65
          // See https://github.com/LeaVerou/color.js/pull/360/files
          var M = [
              [  0.955473421488075,    -0.02309845494876471,   0.06325924320057072  ],
              [ -0.0283697093338637,    1.0099953980813041,    0.021041441191917323 ],
              [  0.012314014864481998, -0.020507649298898964,  1.330365926242124    ]
          ];

          return multiplyMatrices(M, XYZ);
      }

      // CIE Lab and LCH

      function XYZ_to_Lab(XYZ) {
          // Assuming XYZ is relative to D50, convert to CIE Lab
          // from CIE standard, which now defines these as a rational fraction
          var ε = 216/24389;  // 6^3/29^3
          var κ = 24389/27;   // 29^3/3^3

          // compute xyz, which is XYZ scaled relative to reference white
          var xyz = XYZ.map((value, i) => value / D50[i]);

          // now compute f
          var f = xyz.map(value => value > ε ? Math.cbrt(value) : (κ * value + 16)/116);

          return [
              (116 * f[1]) - 16,     // L
              500 * (f[0] - f[1]), // a
              200 * (f[1] - f[2])  // b
          ];
          // L in range [0,100]. For use in CSS, add a percent
      }

      function Lab_to_XYZ(Lab) {
          // Convert Lab to D50-adapted XYZ
          // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
          var κ = 24389/27;   // 29^3/3^3
          var ε = 216/24389;  // 6^3/29^3
          var f = [];

          // compute f, starting with the luminance-related term
          f[1] = (Lab[0] + 16)/116;
          f[0] = Lab[1]/500 + f[1];
          f[2] = f[1] - Lab[2]/200;

          // compute xyz
          var xyz = [
              Math.pow(f[0],3) > ε ?   Math.pow(f[0],3)            : (116*f[0]-16)/κ,
              Lab[0] > κ * ε ?         Math.pow((Lab[0]+16)/116,3) : Lab[0]/κ,
              Math.pow(f[2],3)  > ε ?  Math.pow(f[2],3)            : (116*f[2]-16)/κ
          ];

          // Compute XYZ by scaling xyz by reference white
          return xyz.map((value, i) => value * D50[i]);
      }

      function Lab_to_LCH(Lab) {
          // Convert to polar form
          var hue = Math.atan2(Lab[2], Lab[1]) * 180 / Math.PI;
          return [
              Lab[0], // L is still L
              Math.sqrt(Math.pow(Lab[1], 2) + Math.pow(Lab[2], 2)), // Chroma
              hue >= 0 ? hue : hue + 360 // Hue, in degrees [0 to 360)
          ];
      }

      function LCH_to_Lab(LCH) {
          // Convert from polar form
          return [
              LCH[0], // L is still L
              LCH[1] * Math.cos(LCH[2] * Math.PI / 180), // a
              LCH[1] * Math.sin(LCH[2] * Math.PI / 180) // b
          ];
      }

      // OKLab and OKLCH
      // https://bottosson.github.io/posts/oklab/

      // XYZ <-> LMS matrices recalculated for consistent reference white
      // see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
      // recalculated for 64bit precision
      // see https://github.com/color-js/color.js/pull/357

      function XYZ_to_OKLab(XYZ) {
          // Given XYZ relative to D65, convert to OKLab
          var XYZtoLMS = [
              [ 0.8190224379967030, 0.3619062600528904, -0.1288737815209879 ],
              [ 0.0329836539323885, 0.9292868615863434,  0.0361446663506424 ],
              [ 0.0481771893596242, 0.2642395317527308,  0.6335478284694309 ]
          ];
          var LMStoOKLab = [
              [ 0.2104542683093140,  0.7936177747023054, -0.0040720430116193 ],
              [ 1.9779985324311684, -2.4285922420485799,  0.4505937096174110 ],
              [ 0.0259040424655478,  0.7827717124575296, -0.8086757549230774 ]
          ];

          var LMS = multiplyMatrices(XYZtoLMS, XYZ);
          // JavaScript Math.cbrt returns a sign-matched cube root
          // beware if porting to other languages
          // especially if tempted to use a general power function
          return multiplyMatrices(LMStoOKLab, LMS.map(c => Math.cbrt(c)));
          // L in range [0,1]. For use in CSS, multiply by 100 and add a percent
      }

      function OKLab_to_XYZ(OKLab) {
          // Given OKLab, convert to XYZ relative to D65
          var LMStoXYZ =  [
              [  1.2268798758459243, -0.5578149944602171,  0.2813910456659647 ],
              [ -0.0405757452148008,  1.1122868032803170, -0.0717110580655164 ],
              [ -0.0763729366746601, -0.4214933324022432,  1.5869240198367816 ]
          ];
          var OKLabtoLMS = [
              [ 1.0000000000000000,  0.3963377773761749,  0.2158037573099136 ],
              [ 1.0000000000000000, -0.1055613458156586, -0.0638541728258133 ],
              [ 1.0000000000000000, -0.0894841775298119, -1.2914855480194092 ]
          ];

          var LMSnl = multiplyMatrices(OKLabtoLMS, OKLab);
          return multiplyMatrices(LMStoXYZ, LMSnl.map(c => c ** 3));
      }

      function OKLab_to_OKLCH(OKLab) {
          var hue = Math.atan2(OKLab[2], OKLab[1]) * 180 / Math.PI;
          return [
              OKLab[0], // L is still L
              Math.sqrt(OKLab[1] ** 2 + OKLab[2] ** 2), // Chroma
              hue >= 0 ? hue : hue + 360 // Hue, in degrees [0 to 360)
          ];
      }

      function OKLCH_to_OKLab(OKLCH) {
          return [
              OKLCH[0], // L is still L
              OKLCH[1] * Math.cos(OKLCH[2] * Math.PI / 180), // a
              OKLCH[1] * Math.sin(OKLCH[2] * Math.PI / 180)  // b
          ];
      }

      // Premultiplied alpha conversions

      function rectangular_premultiply(color, alpha) {
      // given a color in a rectangular orthogonal colorspace
      // and an alpha value
      // return the premultiplied form
          return color.map((c) => c * alpha)
      }

      function rectangular_un_premultiply(color, alpha) {
      // given a premultiplied color in a rectangular orthogonal colorspace
      // and an alpha value
      // return the actual color
          if (alpha === 0) {
              return color; // avoid divide by zero
          }
          return color.map((c) => c / alpha)
      }

      function polar_premultiply(color, alpha, hueIndex) {
          // given a color in a cylindicalpolar colorspace
          // and an alpha value
          // return the premultiplied form.
          // the index says which entry in the color array corresponds to hue angle
          // for example, in OKLCH it would be 2
          // while in HSL it would be 0
          return color.map((c, i) => c * (hueIndex === i? 1 : alpha))
      }

      function polar_un_premultiply(color, alpha, hueIndex) {
          // given a color in a cylindicalpolar colorspace
          // and an alpha value
          // return the actual color.
          // the hueIndex says which entry in the color array corresponds to hue angle
          // for example, in OKLCH it would be 2
          // while in HSL it would be 0
          if (alpha === 0) {
              return color; // avoid divide by zero
          }
          return color.map((c, i) => c / (hueIndex === i? 1 : alpha))
      }

      // Convenience functions can easily be defined, such as
      function hsl_premultiply(color, alpha) {
          return polar_premultiply(color, alpha, 0);
      }

/18. Sample Code for ΔE2000 and ΔEOK Color
------------------------------------------

   .. .. rubric:: 18. Sample Code for ΔE2000 and ΔEOK Color
      Differences\ ` <#color-difference-code>`__
      :name: color-difference-code
      :class: heading settled

   *This section is not normative.*

   Tests
   This section is not normative, it does not need tests.

   --------------

/18.1. ΔE2000
-------------

   .. .. rubric:: 18.1. ΔE2000\ ` <#color-difference-2000>`__
      :name: color-difference-2000
      :class: heading settled

   The simplest color difference metric, ΔE76, is simply the Euclidean
   distance in Lab color space. While this is a good first
   approximation, color-critical industries such as printing and fabric
   dyeing soon developed improved formulae. Currently, the most widely
   used formula is ΔE2000. It corrects a number of known asymmetries and
   non-linearities compared to ΔE76. Because the formula is complex, and
   critically dependent on the sign of various intermediate
   calculations, implementations are often incorrect
   `[Sharma] <#biblio-sharma>`__.

   The sample code below has been
   `validated <https://colorjs.io/test/?test=delta>`__ to five
   significant figures against the test suite of paired Lab values and
   expected ΔE2000 published by `[Sharma] <#biblio-sharma>`__ and is
   correct.

   .. code:: include-code

      // deltaE2000 is a statistically significant improvement
      // over deltaE76 and deltaE94,
      // and is recommended by the CIE and Idealliance
      // especially for color differences less than 10 deltaE76
      // but is wicked complicated
      // and many implementations have small errors!

      /**
       * @param {number[]} reference - Array of CIE Lab values: L as 0..100, a and b as around -150..150
       * @param {number[]} sample - Array of CIE Lab values: L as 0..100, a and b as around -150..150
       * @return {number} How different a color sample is from reference
       */

      function deltaE2000 (reference, sample) {

          // Given a reference and a sample color,
          // both in CIE Lab,
          // calculate deltaE 2000.

          // This implementation assumes the parametric
          // weighting factors kL, kC and kH
          // (for the influence of viewing conditions)
          // are all 1, as seems typical.

          let [L1, a1, b1] = reference;
          let [L2, a2, b2] = sample;
          let C1 = Math.sqrt(a1 ** 2 + b1 ** 2);
          let C2 = Math.sqrt(a2 ** 2 + b2 ** 2);

          let Cbar = (C1 + C2)/2; // mean Chroma

          // calculate a-axis asymmetry factor from mean Chroma
          // this turns JND ellipses for near-neutral colors back into circles
          let C7 = Math.pow(Cbar, 7);
          const Gfactor = Math.pow(25, 7);
          let G = 0.5 * (1 - Math.sqrt(C7/(C7+Gfactor)));

          // scale a axes by asymmetry factor
          // this by the way is why there is no Lab2000 color space
          let adash1 = (1 + G) * a1;
          let adash2 = (1 + G) * a2;

          // calculate new Chroma from scaled a and original b axes
          let Cdash1 = Math.sqrt(adash1 ** 2 + b1 ** 2);
          let Cdash2 = Math.sqrt(adash2 ** 2 + b2 ** 2);

          // calculate new hues, with zero hue for true neutrals
          // and in degrees, not radians
          const π = Math.PI;
          const r2d = 180 / π;
          const d2r = π / 180;
          let h1 = (adash1 === 0 && b1 === 0)? 0: Math.atan2(b1, adash1);
          let h2 = (adash2 === 0 && b2 === 0)? 0: Math.atan2(b2, adash2);

          if (h1 < 0) {
              h1 += 2 * π;
          }
          if (h2 < 0) {
              h2 += 2 * π;
          }

          h1 *= r2d;
          h2 *= r2d;

          // Lightness and Chroma differences; sign matters
          let ΔL = L2 - L1;
          let ΔC = Cdash2 - Cdash1;

          // Hue difference, taking care to get the sign correct
          let hdiff = h2 - h1;
          let hsum = h1 + h2;
          let habs = Math.abs(hdiff);
          let Δh;

          if (Cdash1 * Cdash2 === 0) {
              Δh = 0;
          }
          else if (habs <= 180) {
              Δh = hdiff;
          }
          else if (hdiff > 180) {
              Δh = hdiff - 360;
          }
          else if (hdiff < -180) {
              Δh = hdiff + 360;
          }
          else {
              console.log("the unthinkable has happened");
          }

          // weighted Hue difference, more for larger Chroma
          let ΔH = 2 * Math.sqrt(Cdash2 * Cdash1) * Math.sin(Δh * d2r / 2);

          // calculate mean Lightness and Chroma
          let Ldash = (L1 + L2)/2;
          let Cdash = (Cdash1 + Cdash2)/2;
          let Cdash7 = Math.pow(Cdash, 7);

          // Compensate for non-linearity in the blue region of Lab.
          // Four possibilities for hue weighting factor,
          // depending on the angles, to get the correct sign
          let hdash;
          if (Cdash1 == 0 && Cdash2 == 0) {
              hdash = hsum;   // which should be zero
          }
          else if (habs <= 180) {
              hdash = hsum / 2;
          }
          else if (hsum < 360) {
              hdash = (hsum + 360) / 2;
          }
          else {
              hdash = (hsum - 360) / 2;
          }

          // positional corrections to the lack of uniformity of CIELAB
          // These are all trying to make JND ellipsoids more like spheres

          // SL Lightness crispening factor
          // a background with L=50 is assumed
          let lsq = (Ldash - 50) ** 2;
          let SL = 1 + ((0.015 * lsq) / Math.sqrt(20 + lsq));

          // SC Chroma factor, similar to those in CMC and deltaE 94 formulae
          let SC = 1 + 0.045 * Cdash;

          // Cross term T for blue non-linearity
          let T = 1;
          T -= (0.17 * Math.cos((     hdash - 30)  * d2r));
          T += (0.24 * Math.cos(  2 * hdash        * d2r));
          T += (0.32 * Math.cos(((3 * hdash) + 6)  * d2r));
          T -= (0.20 * Math.cos(((4 * hdash) - 63) * d2r));

          // SH Hue factor depends on Chroma,
          // as well as adjusted hue angle like deltaE94.
          let SH = 1 + 0.015 * Cdash * T;

          // RT Hue rotation term compensates for rotation of JND ellipses
          // and Munsell constant hue lines
          // in the medium-high Chroma blue region
          // (Hue 225 to 315)
          let Δθ = 30 * Math.exp(-1 * (((hdash - 275)/25) ** 2));
          let RC = 2 * Math.sqrt(Cdash7/(Cdash7 + Gfactor));
          let RT = -1 * Math.sin(2 * Δθ * d2r) * RC;

          // Finally calculate the deltaE, term by term as root sum of squares
          let dE = (ΔL / SL) ** 2;
          dE += (ΔC / SC) ** 2;
          dE += (ΔH / SH) ** 2;
          dE += RT * (ΔC / SC) * (ΔH / SH);
          return Math.sqrt(dE);
          // Yay!!!
      };

/18.2. ΔEOK
-----------

   .. .. rubric:: 18.2. ΔEOK\ ` <#color-difference-OK>`__
      :name: color-difference-OK
      :class: heading settled

   Because Oklab does not suffer from the hue linearity, hue uniformity,
   and chroma non-linearities of CIE Lab, the color difference metric
   does not need to correct for them and so is simply the Euclidean
   distance in Oklab color space.

   .. code:: include-code

      // Calculate deltaE OK
      // simple root sum of squares
      /**
       * @param {number[]} reference - Array of OKLab values: L as 0..1, a and b as -1..1
       * @param {number[]} sample - Array of OKLab values: L as 0..1, a and b as -1..1
       * @return {number} How different a color sample is from reference
       */
      function deltaEOK (reference, sample) {
          let [L1, a1, b1] = reference;
          let [L2, a2, b2] = sample;
          let ΔL = L1 - L2;
          let Δa = a1 - a2;
          let Δb = b1 - b2;
          return Math.sqrt(ΔL ** 2 + Δa ** 2 + Δb ** 2);
      }

 /Appendix A: Deprecated CSS System
 ----------------------------------

   .. .. rubric::  Appendix A: Deprecated CSS System
      Colors\ ` <#deprecated-system-colors>`__
      :name: deprecated-system-colors
      :class: no-num heading settled

   Earlier versions of CSS defined several additional `system
   colors <#css-system-colors>`__. These color keywords have been
   **deprecated**, however, as they are insufficient for their original
   purpose (making website elements look like their native OS
   counterparts), represent a security risk by making it easier for a
   webpage to “spoof” a native OS dialog, and increase fingerprinting
   surface, compromising user privacy.

   User agents must support these keywords, and to mitigate
   fingerprinting must map them to the (undeprecated) `system
   colors <#css-system-colors>`__ as listed below. **Authors must not
   use these keywords.**

   The deprecated system colors are represented as the
   `<deprecated-color> <#typedef-deprecated-color>`__ sub-type, and are
   defined as:

   ActiveBorder
      Active window border. Same as
      `ButtonBorder <#valdef-color-buttonborder>`__.
   ActiveCaption
      Active window caption. Same as `Canvas <#valdef-color-canvas>`__.
   AppWorkspace
      Background color of multiple document interface. Same as
      `Canvas <#valdef-color-canvas>`__.
   Background
      Desktop background. Same as `Canvas <#valdef-color-canvas>`__.
   ButtonHighlight
      The color of the border facing the light source for 3-D elements
      that appear 3-D due to one layer of surrounding border. Same as
      `ButtonFace <#valdef-color-buttonface>`__.
   ButtonShadow
      The color of the border away from the light source for 3-D
      elements that appear 3-D due to one layer of surrounding border.
      Same as `ButtonFace <#valdef-color-buttonface>`__.
   CaptionText
      Text in caption, size box, and scrollbar arrow box. Same as
      `CanvasText <#valdef-color-canvastext>`__.
   InactiveBorder
      Inactive window border. Same as
      `ButtonBorder <#valdef-color-buttonborder>`__.
   InactiveCaption
      Inactive window caption. Same as
      `Canvas <#valdef-color-canvas>`__.
   InactiveCaptionText
      Color of text in an inactive caption. Same as
      `GrayText <#valdef-color-graytext>`__.
   InfoBackground
      Background color for tooltip controls. Same as
      `Canvas <#valdef-color-canvas>`__.
   InfoText
      Text color for tooltip controls. Same as
      `CanvasText <#valdef-color-canvastext>`__.
   Menu
      Menu background. Same as `Canvas <#valdef-color-canvas>`__.
   MenuText
      Text in menus. Same as `CanvasText <#valdef-color-canvastext>`__.
   Scrollbar
      Scroll bar gray area. Same as `Canvas <#valdef-color-canvas>`__.
   ThreeDDarkShadow
      The color of the darker (generally outer) of the two borders away
      from the light source for 3-D elements that appear 3-D due to two
      concentric layers of surrounding border. Same as
      `ButtonBorder <#valdef-color-buttonborder>`__.
   ThreeDFace
      The face background color for 3-D elements that appear 3-D due to
      two concentric layers of surrounding border. Same as
      `ButtonFace <#valdef-color-buttonface>`__.
   ThreeDHighlight
      The color of the lighter (generally outer) of the two borders
      facing the light source for 3-D elements that appear 3-D due to
      two concentric layers of surrounding border. Same as
      `ButtonBorder <#valdef-color-buttonborder>`__.
   ThreeDLightShadow
      The color of the darker (generally inner) of the two borders
      facing the light source for 3-D elements that appear 3-D due to
      two concentric layers of surrounding border. Same as
      `ButtonBorder <#valdef-color-buttonborder>`__.
   ThreeDShadow
      The color of the lighter (generally inner) of the two borders away
      from the light source for 3-D elements that appear 3-D due to two
      concentric layers of surrounding border. Same as
      `ButtonBorder <#valdef-color-buttonborder>`__.
   Window
      Window background. Same as `Canvas <#valdef-color-canvas>`__.
   WindowFrame
      Window frame. Same as
      `ButtonBorder <#valdef-color-buttonborder>`__.
   WindowText
      Text in windows. Same as
      `CanvasText <#valdef-color-canvastext>`__.

   Tests
   Results on these 'same as' equivalence tests are not great, which is
   why the feature is at-risk

   -  `deprecated-sameas-001.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-001.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-001.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-001.html>`__
   -  `deprecated-sameas-002.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-002.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-002.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-002.html>`__
   -  `deprecated-sameas-003.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-003.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-003.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-003.html>`__
   -  `deprecated-sameas-004.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-004.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-004.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-004.html>`__
   -  `deprecated-sameas-005.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-005.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-005.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-005.html>`__
   -  `deprecated-sameas-006.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-006.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-006.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-006.html>`__
   -  `deprecated-sameas-007.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-007.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-007.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-007.html>`__
   -  `deprecated-sameas-008.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-008.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-008.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-008.html>`__
   -  `deprecated-sameas-009.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-009.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-009.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-009.html>`__
   -  `deprecated-sameas-010.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-010.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-010.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-010.html>`__
   -  `deprecated-sameas-011.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-011.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-011.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-011.html>`__
   -  `deprecated-sameas-012.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-012.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-012.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-012.html>`__
   -  `deprecated-sameas-013.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-013.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-013.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-013.html>`__
   -  `deprecated-sameas-014.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-014.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-014.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-014.html>`__
   -  `deprecated-sameas-015.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-015.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-015.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-015.html>`__
   -  `deprecated-sameas-016.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-016.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-016.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-016.html>`__
   -  `deprecated-sameas-017.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-017.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-017.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-017.html>`__
   -  `deprecated-sameas-018.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-018.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-018.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-018.html>`__
   -  `deprecated-sameas-019.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-019.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-019.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-019.html>`__
   -  `deprecated-sameas-020.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-020.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-020.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-020.html>`__
   -  `deprecated-sameas-021.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-021.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-021.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-021.html>`__
   -  `deprecated-sameas-022.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-022.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-022.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-022.html>`__
   -  `deprecated-sameas-023.html <https://wpt.fyi/results/css/css-color/deprecated-sameas-023.html>`__
      `(live
      test) <http://wpt.live/css/css-color/deprecated-sameas-023.html>`__
      `(source) <https://github.com/web-platform-tests/wpt/blob/master/css/css-color/deprecated-sameas-023.html>`__

   --------------

 /Appendix B: Deprecated Quirky Hex
 ----------------------------------

   .. .. rubric::  Appendix B: Deprecated Quirky Hex
      Colors\ ` <#quirky-color>`__
      :name: quirky-color
      :class: no-num heading settled

   When CSS is being parsed in `quirks
   mode <https://dom.spec.whatwg.org/#concept-document-quirks>`__,
   `<quirky-color> <#typedef-quirky-color>`__ is a type of
   `<color> <#typedef-color>`__ that is only valid in certain
   properties:

   -  `background-color <https://www.w3.org/TR/css-backgrounds-3/#propdef-background-color>`__

   -  `border-color <https://drafts.csswg.org/css-borders-4/#propdef-border-color>`__

   -  `border-top-color <https://drafts.csswg.org/css-borders-4/#propdef-border-top-color>`__

   -  `border-right-color <https://drafts.csswg.org/css-borders-4/#propdef-border-right-color>`__

   -  `border-bottom-color <https://drafts.csswg.org/css-borders-4/#propdef-border-bottom-color>`__

   -  `border-left-color <https://drafts.csswg.org/css-borders-4/#propdef-border-left-color>`__

   -  `color <#propdef-color>`__

   It is *not* valid in properties that include or reference these
   properties, such as the
   `background <https://www.w3.org/TR/css-backgrounds-3/#propdef-background>`__
   shorthand, or inside `functional
   notations <https://www.w3.org/TR/css-values-4/#functional-notation>`__
   such as
   `color-mix() <https://www.w3.org/TR/css-color-5/#funcdef-color-mix>`__

   Additionally, while `<quirky-color> <#typedef-quirky-color>`__ must
   be valid as a `<color> <#typedef-color>`__ when parsing the affected
   properties in the
   `@supports <https://www.w3.org/TR/css-conditional-3/#at-ruledef-supports>`__
   rule, it is *not* valid for those properties when used in the
   ```CSS.supports()`` <https://www.w3.org/TR/css-conditional-3/#dom-css-supports-conditiontext>`__
   method.

   A `<quirky-color> <#typedef-quirky-color>`__ can be represented as a
   `<number-token> <https://www.w3.org/TR/css-syntax-3/#typedef-number-token>`__,
   `<dimension-token> <https://www.w3.org/TR/css-syntax-3/#typedef-dimension-token>`__,
   or
   `<ident-token> <https://www.w3.org/TR/css-syntax-3/#typedef-ident-token>`__,
   according to the following rules:

   -  If it’s an
      `<ident-token> <https://www.w3.org/TR/css-syntax-3/#typedef-ident-token>`__,
      the token’s representation must contain exactly 3 or 6 characters,
      all hexadecimal digits. It represents a
      `<hex-color> <#typedef-hex-color>`__ with the same value.

   -  If it’s a
      `<number-token> <https://www.w3.org/TR/css-syntax-3/#typedef-number-token>`__,
      it must have its integer flag set.

      Serialize the integer’s value. If the serialization has less than
      6 characters, prepend "0" characters to it until it is 6
      characters long. It represents a
      `<hex-color> <#typedef-hex-color>`__ with the same value.

   -  If it’s a
      `<dimension-token> <https://www.w3.org/TR/css-syntax-3/#typedef-dimension-token>`__,
      it must have its integer flag set.

      Serialize the integer’s value, and append the representation of
      the token’s unit. If the result has less than 6 characters,
      prepend "0" characters to it until it is 6 characters long. It
      represents a `<hex-color> <#typedef-hex-color>`__ with the same
      value.

   (In other words, Quirks Mode allows hex colors to be written without
   the leading "#", but with weird parsing rules.)

 /Acknowledgments
 ----------------

   .. .. rubric::  Acknowledgments\ ` <#acknowledgments>`__
      :name: acknowledgments
      :class: no-num no-ref heading settled

   In addition to `those who contributed to CSS Color
   3 <https://www.w3.org/TR/css-color-3/#acknowledgments>`__, the
   editors would like to thank Emilio Cobos Álvarez, Chris Bai, Amelia
   Bellamy-Royds, Lars Borg, Mike Bremford, Andreu Botella, Dan Burzo,
   Max Derhak, fantasai, Simon Fraser, Devon Govett, Phil Green, Dean
   Jackson, Andreas Kraushaar, Pierre-Anthony Lemieux, Cameron
   McCormack, Romain Menke, Chris Murphy, Isaac Muse, Jonathan Neal,
   Chris Needham, Christoph Päper, Brad Pettit, Xidorn Quan, Craig
   Revie, Melanie Richards, Florian Rivoal, Jacob Rus, Joseph Salowey,
   Simon Sapin, Igor Snitkin, Lea Verou, Mark Watson, Sam Weinig, and
   Natalie Weizenbaum.

 /Changes
 --------

   .. .. rubric::  Changes\ ` <#changes>`__
      :name: changes
      :class: no-num heading settled

/Changes since the `Candidate Recommendation Draft of 1
-------------------------------------------------------

   .. .. rubric:: Changes since the `Candidate Recommendation Draft of 1
      November
      2022 <https://www.w3.org/TR/2022/CRD-css-color-4-20221101/>`__
      \ ` <#changes-from-20221101>`__
      :name: changes-from-20221101
      :class: heading settled

   -  Added steps for serializing a uint8_t alpha, moved from cssom-1
   -  Restored parse-time clamping of HSL negative saturation to 0,
      which is current interop behavior from CSS Color 3
   -  When interpolating, always convert colorspace, so that powerless
      components become missing
   -  Clarified when alpha 1 is omitted from serialization
   -  Removed redundant constraining of hue angles to [0,360] as this is
      already done.
   -  Corrected description of ActiveCaption, which is a background.
   -  Disambiguated opacity and alpha. Opacity property now uses
      opacity-value (which has different clamping behavior to
      alpha-value)
   -  Clarified that carrying forward happens before premultiplication
   -  Updated gamut mapping algorithm
   -  Fixed a few issues regarding hue interpolation
   -  Clarified that HWB white or black at 100% is insufficient
      criterion for an achromatic color; it is the sum which matters.
   -  Avoid returning negative saturation in rgb to hsl conversion;
      adjust the hue to point to "the other side" instead
   -  Use 64 bit accurate matrices for ProPhoto, which does not have a
      rational form
   -  Oklab matrices recalculated for 64bit precision (returns same
      results as before, at 32 bit precision)
   -  Consistently return output of GMA in the destination color space,
      even if no mapping is performed because the destination is
      unbounded
   -  Added explanation for why one JND for Oklab is 0.02, not 2
   -  Clarified that resolving sRGB values does not apply to the color()
      function
   -  Moved alpha value definition up to the opacity property, clarified
      that opacity specified values are not clamped.
   -  System Colors now explicitly permit spoofing, to preserve privacy
   -  Corrected the inverse chromatic adaptation matrix for D50 to D65
   -  Consistently distinguish linear Bradfrod from the original, more
      complicated, Bradford chromatic adaptation algorithm
   -  In the gamut mapping algorithm, return clipped as the gamut mapped
      result, avoiding un-necessary steps
   -  Updated chromatic adaptation matrices to higher precision
   -  Added Add 'parse a css color' algorithm, so non-CSS specs using
      colors don’t have to reinvent the machinery here.
   -  Clarified that geometric gamut mapping must not project chroma
      back beyond the original color
   -  Use the term "geometric" rather than "analytical" in gamut mapping
      discussion
   -  Aligned prose for HSL into line with the grammar (percent and
      number both allowed)
   -  Fixed an LCH alpha interpolation example, which was erroneously
      un-premultiplying the hue angle
   -  Corrected the sRGB and display-p3 transfer function. (This only
      affected the result if a component had the exact value 10.31475 /
      255, which is not possible at 8 or 10 bits per component)
   -  Clarified that the specified values of system colors are still
      themselves
   -  Added mention of PNG cICP chunk for tagging images
   -  Described behaviour of hue increasing and decreasing when 0/360 is
      passed
   -  Aligned description of powerlessnes in HSL with the other polar
      color models
   -  Explicitly defined order of operations for color interpolation
   -  Added mention of degenerate numeric constants in calc()
   -  Clarified that calc() in sRGB has early resolution, and clamps the
      result
   -  Clarified that HWB hue has the same disadvantages as HSL hue
   -  Added luminance to lightness comparison and figure
   -  Added descriptions and examples for hue interpolation keywords
   -  Use normative prose for achromatic HWB colors
   -  Corrected hue interpolation angle range; [0,360) not [0,360]
   -  Expressed that displaying as black or white when L=0% or 100% is
      due to gamut mapping. Removed incorrect assertions of
      powerlessness
   -  Dropped the confusing "representing black" and "representing
      white" comments
   -  Clarified that opponent a and b are analogous
   -  Specified RGB channels using reference ranges rather than prose,
      for consistency
   -  Explicitly referenced percent reference ranges for percentage to
      number conversion when serializing Lab, LCH, Oklab, Oklch
   -  Required Oklab interpolation, remove previous "may", describe
      explicit opt-out
   -  Labelled the Lab, LCH, Oklab and Oklch tutorial sections as
      non-normative. Moved some definitions out of the non-normative
      section.
   -  Clarified that, when interpolating, checking for analogous
      components happens before color space conversion
   -  Back-ported hwb() syntax changes and reference ranges from CSS
      Color 5
   -  Defined carry-forward operations must happen before powerless
      operations
   -  Clarified it is *color* components which must be all-number or
      all-percentage, in legacy rgb() syntax
   -  Clarified for legacy syntax that color components must be
      all-percentage or all-number
   -  Added examples of specified out of range alpha, with and without
      calc()
   -  Placed examples of serializing with trimmed trailing zeroes
      colorer to the relevant text
   -  clarified example, used value of text-shadow
   -  Clarified resolving currentColor
   -  Updated acknowledgments
   -  Stop claiming that achromatic colors have missing a,b, or chroma
   -  HSL and HWB changed to unbounded gamut, to promote round-tripping
   -  Defined percentage reference range for HSL
   -  Modern color syntax hsl() and hsla() allow mixed number and
      percentage components
   -  Modern color syntax rgb() and rgba() allow mixed number and
      percentage components
   -  Define the term "modern color syntax" (legacy color syntax already
      defined).
   -  Consistently use the term "analogous components"
   -  Changed to allow all predefined color spaces for interpolation
   -  Clarified that for color(), three parameters (RGB or XYZ) are
      required
   -  Clarified serialization of named colors, system colors, and
      transparent
   -  Define specified value for Lab, LCH, Oklab, Oklch
   -  Define specified value for other sRGB colors
   -  Define specified values for named and system colors
   -  Clamp alpha, Lightness, Chroma and Hue at parsed-value time
   -  Remove passing mention of specular white and CIE Lightness
   -  No longer require as-specified Hue to be retained; clamp to [0,
      360]
   -  Consistent serialization of Lightness and number in examples
   -  Minor typos and editorial clarifications

/Changes since the `Candidate Recommendation of 5 July
------------------------------------------------------

   .. .. rubric:: Changes since the `Candidate Recommendation of 5 July
      2022 <https://www.w3.org/TR/2022/CR-css-color-4-20220705/>`__
      \ ` <#changes-from-20220705>`__
      :name: changes-from-20220705
      :class: heading settled

   -  Removed hue interpolation "specified" value
   -  Defined hue interpolation angle more precisely, maintaining
      differences of 360deg
   -  Added example of carried forward alpha for premultiplication
   -  Clarified a,b and C,h powerless at L=100% representing white.
   -  Removed handwavy mention of L=400 which applies to hdr-CIELAB not
      CIE Lab
   -  Consistent capitalization of Oklab and Oklch
   -  Moved definitions of valid color, invalid color, out of gamut and
      in gamut to terminology section
   -  Fixed definition of "longer" hue interpolation
   -  Further clarified the concept of a host syntax
   -  Accessibility improvements for color swatches
   -  Made explicit that legacy forms do not support "none"
   -  Remove "none" from the hue production, as it is not allowed in
      legacy syntax
   -  Removed some dangling references to CMYK and CMYKOGV, moved to CSS
      Color5
   -  Clarified how missing values in colors to be interpolated are
      carried forward
   -  Updated syntax of xyz-params so they take numbers and percentage,
      to align with prose
   -  Ensure all examples and figures have IDs, self-links
   -  Clarified importance to implementors of reading the gamut mapping
      introduction
   -  Removed left-over mention of custom color spaces (feature was
      moved to CSS Color 5)
   -  Refactor syntax of <color> and <alpha-value>
   -  Editorial refactoring for better reading order.
   -  Updated pseudocode for gamut mapping algorithm, remove un-needed
      deltaE calls

/Changes since the `Working Draft of 28 June
--------------------------------------------

   .. .. rubric:: Changes since the `Working Draft of 28 June
      2022 <https://www.w3.org/TR/2022/WD-css-color-4-20220628/>`__
      \ ` <#changes-from-20220628>`__
      :name: changes-from-20220628
      :class: heading settled

   -  Updated status for Candidate Recommendation

/Changes since the `Working Draft of 28 April
---------------------------------------------

   .. .. rubric:: Changes since the `Working Draft of 28 April
      2022 <https://www.w3.org/TR/2022/WD-css-color-4-20220428/>`__
      \ ` <#changes-from-20220428>`__
      :name: changes-from-20220428
      :class: heading settled

   -  Moved opacity property up to the top of the module, next to color
      property, before getting into details.
   -  Improved description of the color property, in particular effect
      on other properties
   -  Corrected longer hue adjust equation, for equal-modulo-360 colors
   -  Added two new System colors: AccentColor and AccentColorText
   -  Described overall color space conversion steps in new section
   -  Accounted for `none <#valdef-color-none>`__ alpha in
      premultiplication and un-premultiplication

/Changes since the `Working Draft of 15 December
------------------------------------------------

   .. .. rubric:: Changes since the `Working Draft of 15 December
      2021 <https://www.w3.org/TR/2021/WD-css-color-4-20211215/>`__
      \ ` <#changes-from-20211215>`__
      :name: changes-from-20211215
      :class: heading settled

   -  Made system colors fully resolve, but forbid their alteration in
      forced colors mode
   -  Removed forgiveness for incorrect number of parameters in color()
      function
   -  Changed serialization of CIE Lightness and OK Lightness to number
      rather than percentage.
   -  Marked deprecated system color equivalences as at-risk
   -  Added reference ranges to percentage values for CIE and OK L,a,b,C
   -  Noted that there is sample code for performing and undoing
      premultiplication, for both rectangular and polar color spaces.
   -  Added out of range clamping to the gamut mapping prose, as well as
      the pseudocode
   -  Added normative reference for ProPhoto RGB / ROMM
   -  Corrected sRGB and Display P3 black point value for reference
      surround
   -  Added normative reference for Display P3
   -  Avoided an infinite loop in gamut reduction, with colors whiter
      than white or darker than black
   -  Clarified serialization of the `none <#valdef-color-none>`__ value
   -  Clarified the opt-in to interpolation in Oklab, for non-legacy
      colors
   -  Defined how premultiplication works, with the
      `none <#valdef-color-none>`__ value
   -  Clarified that missing values in rgb serialize as 0
   -  Clarified the use of calc() with the `none <#valdef-color-none>`__
      value
   -  Typo, inconsistent casing on System Colors
   -  Added example of SelectedItem with SelectedItemText
   -  Explicitly noted the presence or absence of legacy colors
   -  Added normative reference for CIE XYZ
   -  Added normative reference for HWB and HSL
   -  Clarified that `hwb() <#funcdef-hwb>`__ is not a legacy syntax so
      does not support the older, comma-separated syntactic form
   -  Clarified that only legacy colors will gamut map, the others are
      unbounded
   -  Use distinct terms, spectrophotometer and spectroradiometer
   -  Assorted minor typos fixed, and grammatical improvements

/Changes since the `Working Draft of 1 June
-------------------------------------------

   .. .. rubric:: Changes since the `Working Draft of 1 June
      2021 <https://www.w3.org/TR/2021/WD-css-color-4-20210601/>`__
      \ ` <#changes-from-20210601>`__
      :name: changes-from-20210601
      :class: no-num heading settled

   -  Added gamut mapping section and defined a CSS gamut mapping
      algorithm as chroma reduction in Oklch with local MINDE.
   -  Computed value of color(xyz ...) is color(xyz-d65 ...)
   -  Added srgb-linear to interpolation color spaces
   -  Updated Changes from Colors 3 section
   -  Added Resolving Oklab and Oklch values section
   -  Added srgb-linear color space
   -  Moved @color-profile and device-cmyk to level 5 per CSSWG
      resolution
   -  Defined interpolation color space
   -  Clarified that matrices are row-major and linked to the matrix
      multiplication library
   -  Split old Security & Privacy section into separate sections
   -  Defined quirks-mode quirky hex colors
   -  Removed fallback colors from device-cmyk
   -  Host syntax that does not declare a default now uses Oklab by
      default
   -  Added sample code for deltaE OK
   -  Added sample conversion code for OKlab and Oklch
   -  Added oklab() and oklch() functions *Added description of Oklab
      and Oklch*
   -  Added description of CIE LCH deficiencies
   -  Allowed all components of a color to be "missing" via the
      `none <#valdef-color-none>`__ keyword, defined when components are
      "powerless" and automatically become missing in some cases, and
      fixed all references to "NaN" channels to use the "missing"
      concept.
   -  Defined explicit x,y whitepoint values, use consistently
      throughout
   -  Defined the term host syntax
   -  Defined context for resolving override-color colors
   -  Added a new pair of system colors
   -  Corrected HSL and HWB sample code
   -  Replaced table of HSL values with error-free version
   -  Added Lea Verou as co-editor by WG resolution
   -  Clarified that hue angle is unbounded
   -  MarkText example corrected
   -  Added diagrams, corrected examples
   -  Some editorial clarifications
   -  Minor typos corrected, markup corrections

/Changes since the `Working Draft of 12 November
------------------------------------------------

   .. .. rubric:: Changes since the `Working Draft of 12 November
      2020 <https://www.w3.org/TR/2020/WD-css-color-4-20201112/>`__
      \ ` <#changes-from-20201112>`__
      :name: changes-from-20201112
      :class: no-num heading settled

   -  Noted indeterminate hue ssue on near-neutral Lab values converted
      to LCH
   -  Clarified which steps are linear combinations in RGB Lab
      interconversion
   -  Added components descriptor to @color-profile, for use in CSS
      Color 5
   -  All predefined RGB color spaces are defined over the extended
      range
   -  Clarified that there is no gamut mapping or gamut clipping step
      prior to color interpolation
   -  Clarified interpolation of legacy sRGB syntaxes
   -  Removed the lab option from `color() <#funcdef-color>`__
   -  List steps to interconvert between predefined color spaces
   -  Consistent use of the term color space (two words)
   -  Provided more guidance on selecting color space for mixing
   -  Recalculated an example to increase precision
   -  Added hue interpolation example
   -  Simplified `color() <#funcdef-color>`__ syntax by removing the
      fallback options
   -  Clarified the types of ICC profile that may be linked from
      @color-profile
   -  Support for the rare ICC Named Colors was removed
   -  Improved precision of standard whitepoint chromaticities
   -  Removed a trademark from description of one predefined color space
   -  Rephrased interpolation to be more generic wrt to interpolation
      space
   -  Corrected Accessibility Considerations section
   -  Clarified that the color space argument for
      `color() <#funcdef-color>`__ is mandatory, even for sRGB
   -  Clarified that currentColor is not restricted to sRGB
   -  Small correction to the sRGB to XYZ to sRGB matrices, improve
      round-tripping
   -  Clarified the rec2020 transfer function, citing the correct ITU
      Rec BT.2020-2 reference
   -  Correct fallback examples to use the correct syntax
   -  Don’t force non-legacy colors to interpolate in a gamma-encoded
      space
   -  Define premultiplied alpha interpolation
   -  Start to address interpolation to and from currentColor
   -  Define hue interpolation with NaN
   -  Generalize color interpolation
   -  Define interpolation to be in Lab, with override to LCG
   -  Corrections to hue interpolation
   -  Defined hue angle interpolation
   -  Added interpolation section
   -  Corrected syntax in some examples
   -  Clarify exactly which components are allowed percentages, in
      `color() <#funcdef-color>`__
   -  Change to serialize `lch() <#funcdef-lch>`__ as itself rather than
      as `lab() <#funcdef-lab>`__
   -  Minimum 10 bits per component precision for non-legacy sRGB in
      `color() <#funcdef-color>`__
   -  color space no longer optional in `color() <#funcdef-color>`__
   -  Consistent minimum precision between lab() and color(lab)
   -  Clarified fallback procedure for the color() function – first
      valid in-gamut color, else first valid color which is then gamut
      mapped, else transparent black
   -  Clarified difference between opacity property and colors with
      opacity, notably for rendering overlapping text glyphs
   -  Added sample (but verified correct) code for ΔE2000
   -  Added definition of previously-undefined term chromaticity, with
      examples; define chromaticity diagram.
   -  Added explanation of color additivity, with examples
   -  Added source links to WPT tests
   -  Export definition of color, and valid color, for other
      specifications to reference
   -  Define minimum number of bits per component, for serialization
   -  Updated "applies to" definitions (CSS-wide change)
   -  Added image state (display referred or scene referred) for
      predefined color spaces
   -  Listed white point correlated color temperature (e.g. D65)
      alongside chromaticity coordinates, for clarity
   -  Clarified that rounding is towards +∞
   -  Correction of typos, markup corrections, link fixes

/Changes since `Working Draft of 5 November
-------------------------------------------

   .. .. rubric:: Changes since `Working Draft of 5 November
      2019 <https://www.w3.org/TR/2019/WD-css-color-4-20191105/>`__\ ` <#changes-from-20191105>`__
      :name: changes-from-20191105
      :class: no-num heading settled

   -  Export some terms for use in other specifications
   -  Update requirement from WCAG 2.0 to 2.1
   -  Fully specify Unicode characters used for serialization
   -  Define serialization of special named colors
   -  Define serialization of device-cmyk()
   -  Define serialization of `color() <#funcdef-color>`__
   -  Fully define RGB serialization, in maximally web-compatible way
   -  Define serialization of Lab and LCH
   -  Fully define serialization of alpha values
   -  Consistency pass to avoid accidental RFC2119
   -  Add IDs to all the examples, to enable referencing
   -  Separate resolved color and serialized color sections
   -  (Security) ICC profiles have no executable code
   -  Define what out-of-range means for profiled colors
   -  Clarify out-of-range clamping
   -  Add examples of specified values
   -  Clarify computed values
   -  Resist fingerprinting, with mandatory mappings for deprecated
      system colors
   -  Added explanatory note on history and reason for standardizing X11
      colors
   -  Correct hwb sample code
   -  Add table of DeltaE2000 values for MacBeth patches
   -  Add note on ICC profile Internet Media type
   -  Add reference to PNG sRGB chunk
   -  Clarify CMYK to Lab interconversion
   -  Clarify RGB to Lab interconversion
   -  More comparison of HSL vs. LCH
   -  More description for Rec BT.2020 color space
   -  Updated description of prophoto-rgb
   -  Removed duplicate "keywords" from Value Definitions section
   -  Added an example of an invalid color
   -  Added example with multiple fallbacks
   -  Assorted typos and markup fixes
   -  Clarify handling for undeclared custom color spaces
   -  Clarify some examples and explanatory notes
   -  Handling for valid and invalid ICC profiles
   -  Define handling for images with explicit tagged color space
   -  Define color space for 4k, SDR video
   -  State that user contrast settings mst take precedence
   -  Clarify meaning of system colors outside for forced-color mode
   -  Update default style rules
   -  Add CIE XYZ color space to `color() <#funcdef-color>`__
   -  Greater clarity on hue angles, NaN explicitly allowed
   -  Improve section on system color pairings, require AA accessible
      contrast
   -  Warn of interaction between overlapping glyphs and the opacity
      property
   -  Correct grammar in color definition
   -  Improve description of Highlight/HighlightText
   -  Correct prophoto-rgb transfer function
   -  More precision for prophoto-rgb primaries
   -  Started to define "can’t be displayed"
   -  Removed paragraph about canvas surface
   -  Added the buttonborder, mark, and marktext system colors
   -  Added reverse conversion, sRGB to HWB
   -  Clarified polar spaces are cylindrical, not spherical
   -  Added an Accessibility Considerations section
   -  Started to describe chroma-reduction gamut mapping rather than
      per-component clipping
   -  Corrected white chromaticity for rec2020
   -  Made device-cmyk available by @color-profile; updated CMYK to
      color algorithm to only use naive conversion as a last resort
   -  Added print-oriented CMYK and KCMYOGV examples
   -  User-defined color spaces now dashed-ident, making predefined
      color spaces extensible without clashes
   -  Added lab option to the color() function
   -  Added normative reference for CIE Lab
   -  Clarified that prophoto-rgb uses `D50 <#d50-whitepoint>`__
      whitepoint so does not require adaptation
   -  Clarified direction of increasing angle in LCH
   -  Clarified that color names are ASCII case insensitive
   -  Initial value of the "color" property is now CanvasText
   -  Removed confusing gray() function per CSS WG resolution
   -  Collect scattered definitions into new `Color
      terminology <#terminology>`__ section
   -  Add helpful figures and more examples
   -  Minor editorial clarifications, spell check, fixing typos,
      bikeshed markup fixes

/Changes since `Working Draft of 05 July
----------------------------------------

   .. .. rubric:: Changes since `Working Draft of 05 July
      2016 <https://www.w3.org/TR/2016/WD-css-color-4-20160705/>`__\ ` <#changes-from-20160705>`__
      :name: changes-from-20160705
      :class: no-num heading settled

   -  Changed Lightness in Lab and LCH to be a percentage, for CSS
      compatibility
   -  Clamping of color values clarified
   -  Percentage opacity is now allowed
   -  Define terms sRGB and linear-light sRGB, for use by other specs
   -  Add new list of CSS system colors; renaming Text to CanvasText
   -  Make system color keywords compute to themselves
   -  Add computed/used entry for system colors
   -  Rewrite intro to non-deprecated system colors to center their use
      around forced-colors mode rather than generic use
   -  Consistent hyphenation of predefined color spaces
   -  Restore text about non-opaque elements painting at layers even
      when not positioned
   -  Initial value of the "color" property is now black
   -  Clarify hue in LCH is modulo 360deg (change now reverted)
   -  Clarify allowed range of L in LCH and Lab, and meaning of L=100
   -  Update references for color spaces used in video
   -  Add prophoto-rgb predefined color space
   -  Correct black and white luminance levels for display-p3
   -  Clarify display-p3 transfer function
   -  Add a98-rgb color space, correct table of primary chromaticities
   -  Clarify that currentColor’s computed value is not the resolved
      color
   -  Update syntax is examples to conform to latest specification
   -  Remove the color-mod() function
   -  Drop the "media" from propdef tables
   -  Export, and consistently use, "transparent black" and "opaque
      black"
   -  Clarify calculated values such as percents
   -  Clarify required precision and rounding behavior for color
      channels
   -  Clarify "color" property has no effect on color font glyphs
      (unless specifically referenced, e.g. with currentColor)
   -  Clarify how color values are resolved
   -  Clarify that HSL, HWB and named colors resolve to sRGB
   -  Simplify conversion from device-cmyk to sRGB
   -  Describe previous, comma-using color syntaxes as "legacy"; change
      examples to commaless form
   -  Remove superfluous requirement that displayed colors be restricted
      to device gamut (like there was any other option!)
   -  Rename P3 to display-p3; avoid claiming this is DCI P3, as these
      are not the same
   -  Improved description of the parameters to the "color()" function
   -  Disallow predefined spaces from "@color-profile" identifier
   -  Add canonical order to "color", "color-adjust" and "opacity"
      property definitions
   -  Switch definition of alpha compositing from SVG11 to CSS
      Compositing
   -  Clarify sample conversion code is non-normative
   -  Add Security and Privacy Considerations
   -  Update several references to most current versions
   -  Convert inline issues to links to GitHub issues
   -  Minor editorial clarifications, formatting and markup improvements

 /Changes from Colors 3
 ----------------------

   .. .. rubric::  Changes from Colors 3\ ` <#changes-from-3>`__
      :name: changes-from-3
      :class: heading settled

   The primary change, compared to CSS Color 3, is that CSS colors are
   no longer restricted to the narrow gamut of sRGB.

   To support this, several brand new features have been added:

   #. predefined, wide color gamut RGB color spaces
   #. `lab() <#funcdef-lab>`__, `lch() <#funcdef-lch>`__,
      `oklab() <#funcdef-oklab>`__ and `oklch() <#funcdef-oklch>`__
      functions, for device-independent color

   Other technical changes:

   #. Serialization of `<color> <#typedef-color>`__ is now specified
      here, rather than in the CSS Object Model
   #. `hwb() <#funcdef-hwb>`__ function, for specifying sRGB colors in
      the HWB notation.
   #. Addition of named color
      `rebeccapurple <#valdef-color-rebeccapurple>`__.

   In addition, there have been some syntactic changes:

   #. `rgb() <#funcdef-rgb>`__ and `rgba() <#funcdef-rgba>`__ functions
      now accept
      `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__
      rather than
      `<integer> <https://www.w3.org/TR/css-values-4/#integer-value>`__.
   #. `hsl() <#funcdef-hsl>`__ and `hsla() <#funcdef-hsla>`__ functions
      now accept
      `<angle> <https://www.w3.org/TR/css-values-4/#angle-value>`__ as
      well as
      `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__
      for hues.
   #. `rgb() <#funcdef-rgb>`__ and `rgba() <#funcdef-rgba>`__, and
      `hsl() <#funcdef-hsl>`__ and `hsla() <#funcdef-hsla>`__ are now
      aliases of each other (all of them have an optional alpha).
   #. `rgb() <#funcdef-rgb>`__, `rgba() <#funcdef-rgba>`__,
      `hsl() <#funcdef-hsl>`__, and `hsla() <#funcdef-hsla>`__ have all
      gained a new syntax consisting of space-separated arguments and an
      optional slash-separated opacity. All the color functions use this
      syntax form now, in keeping with `CSS’s functional-notation design
      principles <https://wiki.csswg.org/ideas/functional-notation#general-principles>`__.
   #. All uses of `<alpha-value> <#typedef-color-alpha-value>`__ now
      accept
      `<percentage> <https://www.w3.org/TR/css-values-4/#percentage-value>`__
      as well as
      `<number> <https://www.w3.org/TR/css-values-4/#number-value>`__.
   #. 4 and 8-digit hex colors have been added, to specify transparency.
   #. The `none <#valdef-color-none>`__ value has been added, to
      represent powerless components.

/19. Security Considerations
----------------------------

   .. .. rubric:: 19. Security Considerations\ ` <#security>`__
      :name: security
      :class: heading settled

   The system colors, if they actually correspond to the user’s system
   colors, pose a security risk, as they make it easier for a malware
   site to create user interfaces that appear to be from the system.
   However, as several system colors are now defined to be "generic",
   this risk is believed to be mitigated.

/20. Privacy Considerations
---------------------------

   .. .. rubric:: 20. Privacy Considerations\ ` <#privacy>`__
      :name: privacy
      :class: heading settled

   This specification defines "system" colors, which theoretically can
   expose details of the user’s OS settings, which is a fingerprinting
   risk.

/21. Accessibility Considerations
---------------------------------

   .. .. rubric:: 21. Accessibility Considerations\ ` <#a11y-sec>`__
      :name: a11y-sec
      :class: heading settled

   This specification `encourages authors to not use color
   alone <#accessibility>`__ as a distinguishing feature.

   This specification `encourages browsers to ensure adequate contrast
   for specific system color foreground/background
   pairs <#css-system-colors>`__. A harder requirement with specific AA
   or AAA contrast ratios was considered, but since browsers are often
   just passing along color choices made by the OS, or selected by users
   (who may have particular requirements, including lower contrast for
   people living with migraines or epileptic seizures), the CSSWG was
   unable to require a specific contrast level.

.. _w3c-conformance:

 Conformance\ ` <#w3c-conformance>`__
-------------------------------------

.. _w3c-conventions:

 Document conventions\ ` <#w3c-conventions>`__
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

 Conformance classes\ ` <#w3c-conformance-classes>`__
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

 Partial implementations\ ` <#w3c-partial>`__
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

 Implementations of Unstable and Proprietary Features\ ` <#w3c-conform-future-proofing>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To avoid clashes with future stable CSS features, the CSSWG recommends
`following best
practices <https://www.w3.org/TR/CSS/#future-proofing>`__ for the
implementation of `unstable <https://www.w3.org/TR/CSS/#unstable>`__
features and `proprietary
extensions <https://www.w3.org/TR/CSS/#proprietary-extension>`__ to CSS.

.. _w3c-testing:

 Non-experimental implementations\ ` <#w3c-testing>`__
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

.. _w3c-cr-exit-criteria:

 CR exit criteria\ ` <#w3c-cr-exit-criteria>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this specification to be advanced to Proposed Recommendation, there
must be at least two independent, interoperable implementations of each
feature. Each feature may be implemented by a different set of products,
there is no requirement that all features be implemented by a single
product. For the purposes of this criterion, we define the following
terms:

independent
   each implementation must be developed by a different party and cannot
   share, reuse, or derive from code used by another qualifying
   implementation. Sections of code that have no bearing on the
   implementation of this specification are exempt from this
   requirement.
interoperable
   passing the respective test case(s) in the official CSS test suite,
   or, if the implementation is not a Web browser, an equivalent test.
   Every relevant test in the test suite should have an equivalent test
   created if such a user agent (UA) is to be used to claim
   interoperability. In addition if such a UA is to be used to claim
   interoperability, then there must one or more additional UAs which
   can also pass those equivalent tests in the same way for the purpose
   of interoperability. The equivalent tests must be made publicly
   available for the purposes of peer review.
implementation
   a user agent which:

   #. implements the specification.
   #. is available to the general public. The implementation may be a
      shipping product or other publicly available version (i.e., beta
      version, preview release, or "nightly build"). Non-shipping
      product releases must have implemented the feature(s) for a period
      of at least one month in order to demonstrate stability.
   #. is not experimental (i.e., a version specifically designed to pass
      the test suite and is not intended for normal usage going
      forward).

The specification will remain Candidate Recommendation for at least six
months.

Index\ ` <#index>`__
--------------------

.. _index-defined-here:

Terms defined by this specification\ ` <#index-defined-here>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  `a98-rgb <#valdef-color-a98-rgb>`__\ , in § 10.5
-  `absolute color <#absolute-color>`__\ , in § 4.1
-  `AccentColor <#valdef-color-accentcolor>`__\ , in § 6.2
-  `AccentColorText <#valdef-color-accentcolortext>`__\ , in § 6.2
-  `ActiveBorder <#valdef-color-activeborder>`__\ , in § Unnumbered
   section
-  `ActiveCaption <#valdef-color-activecaption>`__\ , in § Unnumbered
   section
-  `ActiveText <#valdef-color-activetext>`__\ , in § 6.2
-  `additive color space <#additive-color-space>`__\ , in § 2
-  `aliceblue <#valdef-color-aliceblue>`__\ , in § 6.1
-  `alpha channel <#alpha-channel>`__\ , in § 4
-  `alpha component <#alpha-channel>`__\ , in § 4
-  `<alpha-value> <#typedef-color-alpha-value>`__\ , in § 4.2
-  `analogous components <#analogous-components>`__\ , in § 12.2
-  `antiquewhite <#valdef-color-antiquewhite>`__\ , in § 6.1
-  `AppWorkspace <#valdef-color-appworkspace>`__\ , in § Unnumbered
   section
-  `aqua <#valdef-color-aqua>`__\ , in § 6.1
-  `aquamarine <#valdef-color-aquamarine>`__\ , in § 6.1
-  `azure <#valdef-color-azure>`__\ , in § 6.1
-  `Background <#valdef-color-background>`__\ , in § Unnumbered section
-  `beige <#valdef-color-beige>`__\ , in § 6.1
-  `bisque <#valdef-color-bisque>`__\ , in § 6.1
-  `black <#valdef-color-black>`__\ , in § 6.1
-  `blanchedalmond <#valdef-color-blanchedalmond>`__\ , in § 6.1
-  `blue <#valdef-color-blue>`__\ , in § 6.1
-  `blueviolet <#valdef-color-blueviolet>`__\ , in § 6.1
-  `brown <#valdef-color-brown>`__\ , in § 6.1
-  `burlywood <#valdef-color-burlywood>`__\ , in § 6.1
-  `ButtonBorder <#valdef-color-buttonborder>`__\ , in § 6.2
-  `ButtonFace <#valdef-color-buttonface>`__\ , in § 6.2
-  `ButtonHighlight <#valdef-color-buttonhighlight>`__\ , in
   § Unnumbered section
-  `ButtonShadow <#valdef-color-buttonshadow>`__\ , in § Unnumbered
   section
-  `ButtonText <#valdef-color-buttontext>`__\ , in § 6.2
-  `cadetblue <#valdef-color-cadetblue>`__\ , in § 6.1
-  `calibrated <#calibrated>`__\ , in § 2
-  `can be displayed <#can-be-displayed>`__\ , in § 10.1
-  `can’t be displayed <#cant-be-displayed>`__\ , in § 10.1
-  `Canvas <#valdef-color-canvas>`__\ , in § 6.2
-  `CanvasText <#valdef-color-canvastext>`__\ , in § 6.2
-  `CaptionText <#valdef-color-captiontext>`__\ , in § Unnumbered
   section
-  `characterized <#characterized>`__\ , in § 2
-  `chartreuse <#valdef-color-chartreuse>`__\ , in § 6.1
-  `chocolate <#valdef-color-chocolate>`__\ , in § 6.1
-  `chromatic adaptation
   transform <#chromatic-adaptation-transform>`__\ , in § 9.1
-  `chromaticity <#chromaticity>`__\ , in § 2
-  `<color> <#typedef-color>`__\ , in § 4.1
-  color

   -  `(property) <#propdef-color>`__\ , in § 3.2
   -  `definition of <#color>`__\ , in § 2

-  `color() <#funcdef-color>`__\ , in § 10.1
-  `<color-base> <#typedef-color-base>`__\ , in § 4.1
-  `<color-function> <#typedef-color-function>`__\ , in § 4.1
-  `color functions <#color-functions>`__\ , in § 4
-  `<color-interpolation-method> <#color-interpolation-method>`__\ , in
   § 12.1
-  `<color-space> <#typedef-color-space>`__\ , in § 12.1
-  `color space <#color-space>`__\ , in § 2
-  `<colorspace-params> <#typedef-colorspace-params>`__\ , in § 10.1
-  `computed color <#computed-color>`__\ , in § 14
-  `coral <#valdef-color-coral>`__\ , in § 6.1
-  `cornflowerblue <#valdef-color-cornflowerblue>`__\ , in § 6.1
-  `cornsilk <#valdef-color-cornsilk>`__\ , in § 6.1
-  `crimson <#valdef-color-crimson>`__\ , in § 6.1
-  `CSS gamut map <#css-gamut-map>`__\ , in § 13.2.1
-  `css gamut mapped <#css-gamut-mapped>`__\ , in § 13.2
-  `CSS gamut mapping algorithm <#css-gamut-mapping-algorithm>`__\ , in
   § 13.2
-  `currentcolor <#valdef-color-currentcolor>`__\ , in § 6.4
-  `cyan <#valdef-color-cyan>`__\ , in § 6.1
-  `cylindrical polar color <#cylindrical-polar-color>`__\ , in § 4
-  `D50 <#d50-whitepoint>`__\ , in § 2
-  `D50 whitepoint <#d50-whitepoint>`__\ , in § 2
-  `D65 <#d65-whitepoint>`__\ , in § 2
-  `D65 whitepoint <#d65-whitepoint>`__\ , in § 2
-  `darkblue <#valdef-color-darkblue>`__\ , in § 6.1
-  `darkcyan <#valdef-color-darkcyan>`__\ , in § 6.1
-  `darkgoldenrod <#valdef-color-darkgoldenrod>`__\ , in § 6.1
-  `darkgray <#valdef-color-darkgray>`__\ , in § 6.1
-  `darkgreen <#valdef-color-darkgreen>`__\ , in § 6.1
-  `darkgrey <#valdef-color-darkgrey>`__\ , in § 6.1
-  `darkkhaki <#valdef-color-darkkhaki>`__\ , in § 6.1
-  `darkmagenta <#valdef-color-darkmagenta>`__\ , in § 6.1
-  `darkolivegreen <#valdef-color-darkolivegreen>`__\ , in § 6.1
-  `darkorange <#valdef-color-darkorange>`__\ , in § 6.1
-  `darkorchid <#valdef-color-darkorchid>`__\ , in § 6.1
-  `darkred <#valdef-color-darkred>`__\ , in § 6.1
-  `darksalmon <#valdef-color-darksalmon>`__\ , in § 6.1
-  `darkseagreen <#valdef-color-darkseagreen>`__\ , in § 6.1
-  `darkslateblue <#valdef-color-darkslateblue>`__\ , in § 6.1
-  `darkslategray <#valdef-color-darkslategray>`__\ , in § 6.1
-  `darkslategrey <#valdef-color-darkslategrey>`__\ , in § 6.1
-  `darkturquoise <#valdef-color-darkturquoise>`__\ , in § 6.1
-  `darkviolet <#valdef-color-darkviolet>`__\ , in § 6.1
-  `decreasing <#decreasing>`__\ , in § 12.4.4
-  `deeppink <#valdef-color-deeppink>`__\ , in § 6.1
-  `deepskyblue <#valdef-color-deepskyblue>`__\ , in § 6.1
-  `<deprecated-color> <#typedef-deprecated-color>`__\ , in § Unnumbered
   section
-  `dimgray <#valdef-color-dimgray>`__\ , in § 6.1
-  `dimgrey <#valdef-color-dimgrey>`__\ , in § 6.1
-  `display-p3 <#valdef-color-display-p3>`__\ , in § 10.4
-  `dodgerblue <#valdef-color-dodgerblue>`__\ , in § 6.1
-  `Field <#valdef-color-field>`__\ , in § 6.2
-  `FieldText <#valdef-color-fieldtext>`__\ , in § 6.2
-  `firebrick <#valdef-color-firebrick>`__\ , in § 6.1
-  `floralwhite <#valdef-color-floralwhite>`__\ , in § 6.1
-  `forestgreen <#valdef-color-forestgreen>`__\ , in § 6.1
-  `fuchsia <#valdef-color-fuchsia>`__\ , in § 6.1
-  `gainsboro <#valdef-color-gainsboro>`__\ , in § 6.1
-  `gamut <#gamut>`__\ , in § 2
-  `ghostwhite <#valdef-color-ghostwhite>`__\ , in § 6.1
-  `gold <#valdef-color-gold>`__\ , in § 6.1
-  `goldenrod <#valdef-color-goldenrod>`__\ , in § 6.1
-  `gray <#valdef-color-gray>`__\ , in § 6.1
-  `GrayText <#valdef-color-graytext>`__\ , in § 6.2
-  `green <#valdef-color-green>`__\ , in § 6.1
-  `greenyellow <#valdef-color-greenyellow>`__\ , in § 6.1
-  `grey <#valdef-color-grey>`__\ , in § 6.1
-  `<hex-color> <#typedef-hex-color>`__\ , in § 5.2
-  `hex color <#hex-color>`__\ , in § 5.2
-  `hex color notation <#hex-color>`__\ , in § 5.2
-  `Highlight <#valdef-color-highlight>`__\ , in § 6.2
-  `HighlightText <#valdef-color-highlighttext>`__\ , in § 6.2
-  `honeydew <#valdef-color-honeydew>`__\ , in § 6.1
-  `host syntax <#host-syntax>`__\ , in § 12.1
-  `hotpink <#valdef-color-hotpink>`__\ , in § 6.1
-  `HSL <#valdef-hsl-hsl>`__\ , in § 7
-  `hsl() <#funcdef-hsl>`__\ , in § 7
-  `hsla() <#funcdef-hsla>`__\ , in § 7
-  `<hue> <#typedef-hue>`__\ , in § 4.3
-  `<hue-interpolation-method> <#typedef-hue-interpolation-method>`__\ ,
   in § 12.1
-  `HWB <#valdef-hwb-hwb>`__\ , in § 8
-  `hwb() <#funcdef-hwb>`__\ , in § 8
-  `InactiveBorder <#valdef-color-inactiveborder>`__\ , in § Unnumbered
   section
-  `InactiveCaption <#valdef-color-inactivecaption>`__\ , in
   § Unnumbered section
-  `InactiveCaptionText <#valdef-color-inactivecaptiontext>`__\ , in
   § Unnumbered section
-  `increasing <#increasing>`__\ , in § 12.4.3
-  `indianred <#valdef-color-indianred>`__\ , in § 6.1
-  `indigo <#valdef-color-indigo>`__\ , in § 6.1
-  `InfoBackground <#valdef-color-infobackground>`__\ , in § Unnumbered
   section
-  `InfoText <#valdef-color-infotext>`__\ , in § Unnumbered section
-  `in-gamut <#in-gamut>`__\ , in § 2
-  `interpolation color space <#interpolation-color-space>`__\ , in § 12
-  `invalid color <#invalid-color>`__\ , in § 2
-  `ivory <#valdef-color-ivory>`__\ , in § 6.1
-  `khaki <#valdef-color-khaki>`__\ , in § 6.1
-  `Lab <#valdef-lab-lab>`__\ , in § 9.3
-  `lab() <#funcdef-lab>`__\ , in § 9.3
-  `lavender <#valdef-color-lavender>`__\ , in § 6.1
-  `lavenderblush <#valdef-color-lavenderblush>`__\ , in § 6.1
-  `lawngreen <#valdef-color-lawngreen>`__\ , in § 6.1
-  `LCH <#valdef-lch-lch>`__\ , in § 9.3
-  `lch() <#funcdef-lch>`__\ , in § 9.3
-  `legacy color syntax <#legacy-color-syntax>`__\ , in § 4.1.2
-  `<legacy-hsla-syntax> <#typedef-legacy-hsla-syntax>`__\ , in § 7
-  `<legacy-hsl-syntax> <#typedef-legacy-hsl-syntax>`__\ , in § 7
-  `<legacy-rgba-syntax> <#typedef-legacy-rgba-syntax>`__\ , in § 5.1
-  `<legacy-rgb-syntax> <#typedef-legacy-rgb-syntax>`__\ , in § 5.1
-  `lemonchiffon <#valdef-color-lemonchiffon>`__\ , in § 6.1
-  `lightblue <#valdef-color-lightblue>`__\ , in § 6.1
-  `lightcoral <#valdef-color-lightcoral>`__\ , in § 6.1
-  `lightcyan <#valdef-color-lightcyan>`__\ , in § 6.1
-  `lightgoldenrodyellow <#valdef-color-lightgoldenrodyellow>`__\ , in
   § 6.1
-  `lightgray <#valdef-color-lightgray>`__\ , in § 6.1
-  `lightgreen <#valdef-color-lightgreen>`__\ , in § 6.1
-  `lightgrey <#valdef-color-lightgrey>`__\ , in § 6.1
-  `lightpink <#valdef-color-lightpink>`__\ , in § 6.1
-  `lightsalmon <#valdef-color-lightsalmon>`__\ , in § 6.1
-  `lightseagreen <#valdef-color-lightseagreen>`__\ , in § 6.1
-  `lightskyblue <#valdef-color-lightskyblue>`__\ , in § 6.1
-  `lightslategray <#valdef-color-lightslategray>`__\ , in § 6.1
-  `lightslategrey <#valdef-color-lightslategrey>`__\ , in § 6.1
-  `lightsteelblue <#valdef-color-lightsteelblue>`__\ , in § 6.1
-  `lightyellow <#valdef-color-lightyellow>`__\ , in § 6.1
-  `lime <#valdef-color-lime>`__\ , in § 6.1
-  `limegreen <#valdef-color-limegreen>`__\ , in § 6.1
-  `linen <#valdef-color-linen>`__\ , in § 6.1
-  `LinkText <#valdef-color-linktext>`__\ , in § 6.2
-  `longer <#longer>`__\ , in § 12.4.2
-  `magenta <#valdef-color-magenta>`__\ , in § 6.1
-  `Mark <#valdef-color-mark>`__\ , in § 6.2
-  `MarkText <#valdef-color-marktext>`__\ , in § 6.2
-  `maroon <#valdef-color-maroon>`__\ , in § 6.1
-  `mediumaquamarine <#valdef-color-mediumaquamarine>`__\ , in § 6.1
-  `mediumblue <#valdef-color-mediumblue>`__\ , in § 6.1
-  `mediumorchid <#valdef-color-mediumorchid>`__\ , in § 6.1
-  `mediumpurple <#valdef-color-mediumpurple>`__\ , in § 6.1
-  `mediumseagreen <#valdef-color-mediumseagreen>`__\ , in § 6.1
-  `mediumslateblue <#valdef-color-mediumslateblue>`__\ , in § 6.1
-  `mediumspringgreen <#valdef-color-mediumspringgreen>`__\ , in § 6.1
-  `mediumturquoise <#valdef-color-mediumturquoise>`__\ , in § 6.1
-  `mediumvioletred <#valdef-color-mediumvioletred>`__\ , in § 6.1
-  `Menu <#valdef-color-menu>`__\ , in § Unnumbered section
-  `MenuText <#valdef-color-menutext>`__\ , in § Unnumbered section
-  `midnightblue <#valdef-color-midnightblue>`__\ , in § 6.1
-  `MINDE <#minde>`__\ , in § 13.1.2
-  `mintcream <#valdef-color-mintcream>`__\ , in § 6.1
-  `missing <#missing-color-component>`__\ , in § 4.4
-  `missing color component <#missing-color-component>`__\ , in § 4.4
-  `missing component <#missing-color-component>`__\ , in § 4.4
-  `mistyrose <#valdef-color-mistyrose>`__\ , in § 6.1
-  `moccasin <#valdef-color-moccasin>`__\ , in § 6.1
-  `modern color syntax <#modern-color-syntax>`__\ , in § 4.1.1
-  `<modern-hsla-syntax> <#typedef-modern-hsla-syntax>`__\ , in § 7
-  `<modern-hsl-syntax> <#typedef-modern-hsl-syntax>`__\ , in § 7
-  `<modern-rgba-syntax> <#typedef-modern-rgba-syntax>`__\ , in § 5.1
-  `<modern-rgb-syntax> <#typedef-modern-rgb-syntax>`__\ , in § 5.1
-  `<named-color> <#typedef-named-color>`__\ , in § 6.1
-  `named color <#named-color>`__\ , in § 6.1
-  `navajowhite <#valdef-color-navajowhite>`__\ , in § 6.1
-  `navy <#valdef-color-navy>`__\ , in § 6.1
-  `none <#valdef-color-none>`__\ , in § 4.4
-  `Oklab <#valdef-oklab-oklab>`__\ , in § 9.4
-  `oklab() <#funcdef-oklab>`__\ , in § 9.4
-  `Oklch <#valdef-oklch-oklch>`__\ , in § 9.4
-  `oklch() <#funcdef-oklch>`__\ , in § 9.4
-  `oldlace <#valdef-color-oldlace>`__\ , in § 6.1
-  `olive <#valdef-color-olive>`__\ , in § 6.1
-  `olivedrab <#valdef-color-olivedrab>`__\ , in § 6.1
-  `opacity <#propdef-opacity>`__\ , in § 3.3
-  `<opacity-value> <#typedef-opacity-opacity-value>`__\ , in § 3.3
-  `opaque black <#opaque-black>`__\ , in § 4
-  `orange <#valdef-color-orange>`__\ , in § 6.1
-  `orangered <#valdef-color-orangered>`__\ , in § 6.1
-  `orchid <#valdef-color-orchid>`__\ , in § 6.1
-  `out of gamut <#out-of-gamut>`__\ , in § 2
-  `palegoldenrod <#valdef-color-palegoldenrod>`__\ , in § 6.1
-  `palegreen <#valdef-color-palegreen>`__\ , in § 6.1
-  `paleturquoise <#valdef-color-paleturquoise>`__\ , in § 6.1
-  `palevioletred <#valdef-color-palevioletred>`__\ , in § 6.1
-  `papayawhip <#valdef-color-papayawhip>`__\ , in § 6.1
-  `parse a CSS <color> value <#parse-a-css-color-value>`__\ , in § 4.5
-  `peachpuff <#valdef-color-peachpuff>`__\ , in § 6.1
-  `peru <#valdef-color-peru>`__\ , in § 6.1
-  `pink <#valdef-color-pink>`__\ , in § 6.1
-  `plum <#valdef-color-plum>`__\ , in § 6.1
-  `<polar-color-space> <#typedef-polar-color-space>`__\ , in § 12.1
-  `powderblue <#valdef-color-powderblue>`__\ , in § 6.1
-  `powerless <#powerless-color-component>`__\ , in § 4.4.1
-  `powerless color component <#powerless-color-component>`__\ , in
   § 4.4.1
-  `powerless component <#powerless-color-component>`__\ , in § 4.4.1
-  `<predefined-rgb> <#typedef-predefined-rgb>`__\ , in § 10.1
-  `<predefined-rgb-params> <#typedef-predefined-rgb-params>`__\ , in
   § 10.1
-  `premultiplied color values <#premultiplied-color-values>`__\ , in
   § 12.3
-  `prophoto-rgb <#valdef-color-prophoto-rgb>`__\ , in § 10.6
-  `purple <#valdef-color-purple>`__\ , in § 6.1
-  `<quirky-color> <#typedef-quirky-color>`__\ , in § Unnumbered section
-  `rebeccapurple <#valdef-color-rebeccapurple>`__\ , in § 6.1
-  `rec2020 <#valdef-color-rec2020>`__\ , in § 10.7
-  `<rectangular-color-space> <#typedef-rectangular-color-space>`__\ ,
   in § 12.1
-  `rectangular orthogonal color <#rectangular-orthogonal-color>`__\ ,
   in § 4
-  `red <#valdef-color-red>`__\ , in § 6.1
-  `rgb() <#funcdef-rgb>`__\ , in § 5.1
-  `rgba() <#funcdef-rgba>`__\ , in § 5.1
-  `rosybrown <#valdef-color-rosybrown>`__\ , in § 6.1
-  `royalblue <#valdef-color-royalblue>`__\ , in § 6.1
-  `saddlebrown <#valdef-color-saddlebrown>`__\ , in § 6.1
-  `salmon <#valdef-color-salmon>`__\ , in § 6.1
-  `sandybrown <#valdef-color-sandybrown>`__\ , in § 6.1
-  `Scrollbar <#valdef-color-scrollbar>`__\ , in § Unnumbered section
-  `seagreen <#valdef-color-seagreen>`__\ , in § 6.1
-  `seashell <#valdef-color-seashell>`__\ , in § 6.1
-  `SelectedItem <#valdef-color-selecteditem>`__\ , in § 6.2
-  `SelectedItemText <#valdef-color-selecteditemtext>`__\ , in § 6.2
-  `shorter <#shorter>`__\ , in § 12.4.1
-  `sienna <#valdef-color-sienna>`__\ , in § 6.1
-  `silver <#valdef-color-silver>`__\ , in § 6.1
-  `skyblue <#valdef-color-skyblue>`__\ , in § 6.1
-  `slateblue <#valdef-color-slateblue>`__\ , in § 6.1
-  `slategray <#valdef-color-slategray>`__\ , in § 6.1
-  `slategrey <#valdef-color-slategrey>`__\ , in § 6.1
-  `snow <#valdef-color-snow>`__\ , in § 6.1
-  `springgreen <#valdef-color-springgreen>`__\ , in § 6.1
-  `sRGB <#sRGB-space>`__\ , in § 10.2
-  `srgb <#valdef-color-srgb>`__\ , in § 10.2
-  `sRGB-linear <#sRGB-linear-space>`__\ , in § 10.3
-  `srgb-linear <#valdef-color-srgb-linear>`__\ , in § 10.3
-  `steelblue <#valdef-color-steelblue>`__\ , in § 6.1
-  `<system-color> <#typedef-system-color>`__\ , in § 6.2
-  `system color pairings <#system-color-pairings>`__\ , in § 6.2
-  `system colors <#css-system-colors>`__\ , in § 6.1
-  `tagged image <#tagged-image>`__\ , in § 3.4
-  `tan <#valdef-color-tan>`__\ , in § 6.1
-  `teal <#valdef-color-teal>`__\ , in § 6.1
-  `thistle <#valdef-color-thistle>`__\ , in § 6.1
-  `ThreeDDarkShadow <#valdef-color-threeddarkshadow>`__\ , in
   § Unnumbered section
-  `ThreeDFace <#valdef-color-threedface>`__\ , in § Unnumbered section
-  `ThreeDHighlight <#valdef-color-threedhighlight>`__\ , in
   § Unnumbered section
-  `ThreeDLightShadow <#valdef-color-threedlightshadow>`__\ , in
   § Unnumbered section
-  `ThreeDShadow <#valdef-color-threedshadow>`__\ , in § Unnumbered
   section
-  `tomato <#valdef-color-tomato>`__\ , in § 6.1
-  `transparent <#valdef-color-transparent>`__\ , in § 6.3
-  `transparent black <#transparent-black>`__\ , in § 4
-  `turquoise <#valdef-color-turquoise>`__\ , in § 6.1
-  `untagged image <#untagged-image>`__\ , in § 3.5
-  `untagged video <#untagged-video>`__\ , in § 3.5
-  `used color <#used-color>`__\ , in § 14
-  `valid color <#valid-color>`__\ , in § 2
-  `violet <#valdef-color-violet>`__\ , in § 6.1
-  `VisitedText <#valdef-color-visitedtext>`__\ , in § 6.2
-  `wheat <#valdef-color-wheat>`__\ , in § 6.1
-  `white <#valdef-color-white>`__\ , in § 6.1
-  `white point <#white-point>`__\ , in § 2
-  `whitesmoke <#valdef-color-whitesmoke>`__\ , in § 6.1
-  `Window <#valdef-color-window>`__\ , in § Unnumbered section
-  `WindowFrame <#valdef-color-windowframe>`__\ , in § Unnumbered
   section
-  `WindowText <#valdef-color-windowtext>`__\ , in § Unnumbered section
-  `xyz <#valdef-color-xyz>`__\ , in § 10.8
-  `xyz-d50 <#valdef-color-xyz-d50>`__\ , in § 10.8
-  `xyz-d65 <#valdef-color-xyz-d65>`__\ , in § 10.8
-  `<xyz-params> <#typedef-xyz-params>`__\ , in § 10.1
-  `<xyz-space> <#typedef-xyz-space>`__\ , in § 10.1
-  `yellow <#valdef-color-yellow>`__\ , in § 6.1
-  `yellowgreen <#valdef-color-yellowgreen>`__\ , in § 6.1

.. _index-defined-elsewhere:

Terms defined by reference\ ` <#index-defined-elsewhere>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  [CSS-ANIMATIONS-1] defines the following terms:

   -  animation

-  [CSS-BACKGROUNDS-3] defines the following terms:

   -  background
   -  background-color

-  [CSS-BORDERS-4] defines the following terms:

   -  border-bottom-color
   -  border-color
   -  border-left-color
   -  border-right-color
   -  border-top-color

-  [CSS-CASCADE-5] defines the following terms:

   -  computed value
   -  inherited value
   -  initial value
   -  specified value
   -  used value

-  [CSS-COLOR-4] defines the following terms:

   -  <absolute-color-function>

-  [CSS-COLOR-5] defines the following terms:

   -  color-mix()

-  [CSS-COLOR-ADJUST-1] defines the following terms:

   -  forced colors mode

-  [CSS-CONDITIONAL-3] defines the following terms:

   -  @supports
   -  supports(conditionText)

-  [CSS-IMAGES-4] defines the following terms:

   -  <gradient>

-  [CSS-SYNTAX-3] defines the following terms:

   -  <dimension-token>
   -  <hash-token>
   -  <ident-token>
   -  <number-token>
   -  parse

-  [CSS-TEXT-DECOR-4] defines the following terms:

   -  text-emphasis-color

-  [CSS-TRANSITIONS-1] defines the following terms:

   -  transition

-  [CSS-VALUES-4] defines the following terms:

   -  #
   -  ,
   -  <angle>
   -  <ident>
   -  <integer>
   -  <number>
   -  <percentage>
   -  ?
   -  calc()
   -  canonical unit
   -  css-wide keywords
   -  functional notation
   -  infinity
   -  keyword
   -  nan
   -  {a}
   -  \|

-  [CSS2] defines the following terms:

   -  z-index

-  [CSS22] defines the following terms:

   -  auto
   -  stacking context

-  [CSSOM-1] defines the following terms:

   -  resolved value

-  [DOM] defines the following terms:

   -  element
   -  quirks mode

-  [FILTER-EFFECTS-1] defines the following terms:

   -  filter

-  [HTML] defines the following terms:

   -  mark

-  [INFRA] defines the following terms:

   -  string

-  [MEDIAQUERIES-5] defines the following terms:

   -  media feature

References\ ` <#references>`__
------------------------------

.. _normative:

Normative References\ ` <#normative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[Bradford-CAT]
   Ming R. Luo; R. W. G. Hunt. A Chromatic Adaptation Transform and a
   Colour Inconstancy Index. Color Research & Application 23(3) 154-158.
   June 1998.
[CIELAB]
   `ISO/CIE 11664-4:2019(E): Colorimetry — Part 4: CIE 1976 L*a*b\*
   colour
   space <http://cie.co.at/publications/colorimetry-part-4-cie-1976-lab-colour-space-1>`__.
   2019. Published. URL:
   http://cie.co.at/publications/colorimetry-part-4-cie-1976-lab-colour-space-1
[COLORIMETRY]
   `Colorimetry, Fourth Edition. CIE
   015:2018 <http://www.cie.co.at/publications/colorimetry-4th-edition>`__.
   2018. URL: http://www.cie.co.at/publications/colorimetry-4th-edition
[Compositing]
   Rik Cabanier; Nikos Andronikos. `Compositing and Blending Level
   1 <https://www.w3.org/TR/compositing-1/>`__. 13 January 2015. CR.
   URL: https://www.w3.org/TR/compositing-1/
[CSS-BACKGROUNDS-3]
   Elika Etemad; Brad Kemper. `CSS Backgrounds and Borders Module Level
   3 <https://www.w3.org/TR/css-backgrounds-3/>`__. 19 December 2023.
   CR. URL: https://www.w3.org/TR/css-backgrounds-3/
[CSS-BORDERS-4]
   `CSS Borders and Box Decorations Module Level
   4 <https://drafts.csswg.org/css-borders-4/>`__. Editor's Draft. URL:
   https://drafts.csswg.org/css-borders-4/
[CSS-CASCADE-5]
   Elika Etemad; Miriam Suzanne; Tab Atkins Jr.. `CSS Cascading and
   Inheritance Level 5 <https://www.w3.org/TR/css-cascade-5/>`__. 13
   January 2022. CR. URL: https://www.w3.org/TR/css-cascade-5/
[CSS-COLOR-4]
   Tab Atkins Jr.; Chris Lilley; Lea Verou. `CSS Color Module Level
   4 <https://www.w3.org/TR/css-color-4/>`__. 1 November 2022. CR. URL:
   https://www.w3.org/TR/css-color-4/
[CSS-COLOR-ADJUST-1]
   Elika Etemad; et al. `CSS Color Adjustment Module Level
   1 <https://www.w3.org/TR/css-color-adjust-1/>`__. 14 June 2022. CR.
   URL: https://www.w3.org/TR/css-color-adjust-1/
[CSS-CONDITIONAL-3]
   David Baron; Elika Etemad; Chris Lilley. `CSS Conditional Rules
   Module Level 3 <https://www.w3.org/TR/css-conditional-3/>`__. 13
   January 2022. CR. URL: https://www.w3.org/TR/css-conditional-3/
[CSS-SYNTAX-3]
   Tab Atkins Jr.; Simon Sapin. `CSS Syntax Module Level
   3 <https://www.w3.org/TR/css-syntax-3/>`__. 24 December 2021. CR.
   URL: https://www.w3.org/TR/css-syntax-3/
[CSS-TEXT-DECOR-4]
   Elika Etemad; Koji Ishii. `CSS Text Decoration Module Level
   4 <https://www.w3.org/TR/css-text-decor-4/>`__. 4 May 2022. WD. URL:
   https://www.w3.org/TR/css-text-decor-4/
[CSS-VALUES-3]
   Tab Atkins Jr.; Elika Etemad. `CSS Values and Units Module Level
   3 <https://www.w3.org/TR/css-values-3/>`__. 1 December 2022. CR. URL:
   https://www.w3.org/TR/css-values-3/
[CSS-VALUES-4]
   Tab Atkins Jr.; Elika Etemad. `CSS Values and Units Module Level
   4 <https://www.w3.org/TR/css-values-4/>`__. 18 December 2023. WD.
   URL: https://www.w3.org/TR/css-values-4/
[CSS2]
   Bert Bos; et al. `Cascading Style Sheets Level 2 Revision 1 (CSS 2.1)
   Specification <https://www.w3.org/TR/CSS21/>`__. 7 June 2011. REC.
   URL: https://www.w3.org/TR/CSS21/
[CSS22]
   Bert Bos. `Cascading Style Sheets Level 2 Revision 2 (CSS 2.2)
   Specification <https://www.w3.org/TR/CSS22/>`__. 12 April 2016. WD.
   URL: https://www.w3.org/TR/CSS22/
[CSSOM-1]
   Daniel Glazman; Emilio Cobos Álvarez. `CSS Object Model
   (CSSOM) <https://www.w3.org/TR/cssom-1/>`__. 26 August 2021. WD. URL:
   https://www.w3.org/TR/cssom-1/
[Display-P3]
   Apple, Inc. `Display
   P3 <https://www.color.org/chardata/rgb/DisplayP3.xalter>`__. 2022-02.
   URL: https://www.color.org/chardata/rgb/DisplayP3.xalter
[DOM]
   Anne van Kesteren. `DOM Standard <https://dom.spec.whatwg.org/>`__.
   Living Standard. URL: https://dom.spec.whatwg.org/
[HSL]
   George H. Joblove, Donald Greenberg. `Color spaces for computer
   graphics <https://doi.org/10.1145/965139.807362>`__. August 1978.
   URL: https://doi.org/10.1145/965139.807362
[HTML]
   Anne van Kesteren; et al. `HTML
   Standard <https://html.spec.whatwg.org/multipage/>`__. Living
   Standard. URL: https://html.spec.whatwg.org/multipage/
[HWB]
   Alvy Ray Smith. `HWB — A More Intuitive Hue-Based Color
   Model <http://alvyray.com/Papers/CG/HWB_JGTv208.pdf>`__. 1996. URL:
   http://alvyray.com/Papers/CG/HWB_JGTv208.pdf
[ICC]
   `ICC.1:2022 (Profile version
   4.4.0.0) <http://www.color.org/specification/ICC.1-2022-05.pdf>`__.
   May 2022. URL: http://www.color.org/specification/ICC.1-2022-05.pdf
[INFRA]
   Anne van Kesteren; Domenic Denicola. `Infra
   Standard <https://infra.spec.whatwg.org/>`__. Living Standard. URL:
   https://infra.spec.whatwg.org/
[ITU-R-BT.601]
   `Recommendation ITU-R
   BT.601 <https://www.itu.int/rec/R-REC-BT.601/en>`__. URL:
   https://www.itu.int/rec/R-REC-BT.601/en
[ITU-R-BT.709]
   `Recommendation ITU-R
   BT.709 <https://www.itu.int/rec/R-REC-BT.709/en>`__. URL:
   https://www.itu.int/rec/R-REC-BT.709/en
[MEDIAQUERIES-5]
   Dean Jackson; et al. `Media Queries Level
   5 <https://www.w3.org/TR/mediaqueries-5/>`__. 18 December 2021. WD.
   URL: https://www.w3.org/TR/mediaqueries-5/
[Oklab]
   Björn Ottosson. `A perceptual color space for image
   processing <https://bottosson.github.io/posts/oklab/>`__. December
   2020. URL: https://bottosson.github.io/posts/oklab/
[Rec.2020]
   `Recommendation ITU-R BT.2020-2: Parameter values for ultra-high
   definition television systems for production and international
   programme exchange <http://www.itu.int/rec/R-REC-BT.2020/en>`__.
   October 2015. URL: http://www.itu.int/rec/R-REC-BT.2020/en
[RFC2119]
   S. Bradner. `Key words for use in RFCs to Indicate Requirement
   Levels <https://datatracker.ietf.org/doc/html/rfc2119>`__. March
   1997. Best Current Practice. URL:
   https://datatracker.ietf.org/doc/html/rfc2119
[ROMM]
   `ISO 22028-2:2013 Photography and graphic technology — Extended
   colour encodings for digital image storage, manipulation and
   interchange — Part 2: Reference output medium metric RGB colour image
   encoding (ROMM RGB) <https://www.iso.org/standard/56591.html>`__.
   2013-04. URL: https://www.iso.org/standard/56591.html
[SMPTE296]
   `ST 296:2012, 1280 × 720 Progressive Image 4:2:2 and 4:4:4 Sample
   Structure — Analog and Digital Representation and Analog
   Interface <https://doi.org/10.5594/SMPTE.ST296.2012>`__. 17 May 2012.
   Standard. URL: https://doi.org/10.5594/SMPTE.ST296.2012
[SRGB]
   `Multimedia systems and equipment - Colour measurement and management
   - Part 2-1: Colour management - Default RGB colour space -
   sRGB <https://webstore.iec.ch/publication/6169>`__. URL:
   https://webstore.iec.ch/publication/6169
[SVG11]
   Erik Dahlström; et al. `Scalable Vector Graphics (SVG) 1.1 (Second
   Edition) <https://www.w3.org/TR/SVG11/>`__. 16 August 2011. REC. URL:
   https://www.w3.org/TR/SVG11/

.. _informative:

Informative References\ ` <#informative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[CSS-ANIMATIONS-1]
   David Baron; et al. `CSS Animations Level
   1 <https://www.w3.org/TR/css-animations-1/>`__. 2 March 2023. WD.
   URL: https://www.w3.org/TR/css-animations-1/
[CSS-COLOR-5]
   Chris Lilley; et al. `CSS Color Module Level
   5 <https://www.w3.org/TR/css-color-5/>`__. 28 June 2022. WD. URL:
   https://www.w3.org/TR/css-color-5/
[CSS-IMAGES-4]
   Tab Atkins Jr.; Elika Etemad; Lea Verou. `CSS Images Module Level
   4 <https://www.w3.org/TR/css-images-4/>`__. 17 February 2023. WD.
   URL: https://www.w3.org/TR/css-images-4/
[CSS-TRANSITIONS-1]
   David Baron; et al. `CSS
   Transitions <https://www.w3.org/TR/css-transitions-1/>`__. 11 October
   2018. WD. URL: https://www.w3.org/TR/css-transitions-1/
[CSS3-TEXT-DECOR]
   Elika Etemad; Koji Ishii. `CSS Text Decoration Module Level
   3 <https://www.w3.org/TR/css-text-decor-3/>`__. 5 May 2022. CR. URL:
   https://www.w3.org/TR/css-text-decor-3/
[DCI-P3]
   `SMPTE Recommended Practice - D-Cinema Quality — Reference Projector
   and Environment <http://ieeexplore.ieee.org/document/7290729/>`__.
   2011. URL: http://ieeexplore.ieee.org/document/7290729/
[FILTER-EFFECTS-1]
   Dirk Schulze; Dean Jackson. `Filter Effects Module Level
   1 <https://www.w3.org/TR/filter-effects-1/>`__. 18 December 2018. WD.
   URL: https://www.w3.org/TR/filter-effects-1/
[JPEG]
   Eric Hamilton. `JPEG File Interchange
   Format <https://www.w3.org/Graphics/JPEG/jfif3.pdf>`__. September
   1992. URL: https://www.w3.org/Graphics/JPEG/jfif3.pdf
[PNG]
   Chris Lilley; et al. `Portable Network Graphics (PNG) Specification
   (Third Edition) <https://www.w3.org/TR/png-3/>`__. 21 September 2023.
   CR. URL: https://www.w3.org/TR/png-3/
[ROMM-RGB]
   `ROMM RGB <https://www.color.org/chardata/rgb/rommrgb.xalter>`__.
   URL: https://www.color.org/chardata/rgb/rommrgb.xalter
[Sharma]
   G. Sharma; W. Wu; E. N. Dalal. `The CIEDE2000 Color-Difference
   Formula: Implementation Notes, Supplementary Test Data, and
   Mathematical
   Observations <http://www2.ece.rochester.edu/~gsharma/ciede2000/>`__.
   February 2005. URL: http://www2.ece.rochester.edu/~gsharma/ciede2000/
[TIFF]
   `TIFF Revision
   6.0 <https://www.loc.gov/preservation/digital/formats/fdd/fdd000022.shtml>`__.
   3 June 1992. URL:
   https://www.loc.gov/preservation/digital/formats/fdd/fdd000022.shtml
[WCAG21]
   Michael Cooper; et al. `Web Content Accessibility Guidelines (WCAG)
   2.1 <https://www.w3.org/TR/WCAG21/>`__. 21 September 2023. REC. URL:
   https://www.w3.org/TR/WCAG21/
[Wolfe]
   Geoff Wolfe. `Design and Optimization of the ProPhoto RGB Color
   Encodings <http://www.realtimerendering.com/blog/2011-color-and-imaging-conference-part-vi-special-session/>`__.
   2011-12-21. URL:
   http://www.realtimerendering.com/blog/2011-color-and-imaging-conference-part-vi-special-session/

Property Index\ ` <#property-index>`__
--------------------------------------

.. container:: big-element-wrapper

   Name
   Value
   Initial
   Applies to
   Inh.
   %ages
   Anim­ation type
   Canonical order
   Com­puted value
   `color <#propdef-color>`__
   <color>
   CanvasText
   all elements and text
   yes
   N/A
   by computed value type
   per grammar
   computed color, see resolving color values
   `opacity <#propdef-opacity>`__
   <opacity-value>
   1
   all elements
   no
   map to the range [0,1]
   by computed value type
   per grammar
   specified number, clamped to the range [0,1]

.. |W3C| image:: https://www.w3.org/StyleSheets/TR/2021/logos/W3C
   :width: 72px
   :height: 48px
   :target: https://www.w3.org/
.. |rendered emphasized text with the word 'really' in red with red emphasis dots| image:: images/text-emphasis.png
   :width: 495px
   :height: 119px
.. |image1| image:: images/L-axis.svg
   :width: 240px
   :height: 575px
.. |image2| image:: images/Luminance.svg
   :width: 240px
   :height: 575px
